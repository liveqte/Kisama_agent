#!/usr/bin/env python3
"""Argo 动态绑定 shz.al 上报 (0.6.8, docs/API.MD 七) 离线单元测试。

覆盖:
1. 缺省派生规则: 上报名 = KNAME-端口, 管理密钥 = 上报名 + "123" (字面后缀)
2. 显式指定覆盖派生值 + 校验 (显式 key <8 拒绝 / 非法字符拒绝 / KNAME 未设置派生拒绝)
3. bind/unbind 错误映射 (404 无隧道或无绑定 / 409 多隧道未指定、kmode 来源、端口已被绑定 / 400 校验)
4. create+shz / create+shz_name: 创建后绑定、响应携带 shz_name/shz_url、注册前拦截 (不产生孤儿隧道)
5. 查询可见性: list_tunnels 绑定条目 shz_name/shz_url, 未绑定 null
6. 逐隧道换域名重报: 绑定后 on_domain_change 按绑定名重报, 解绑后恢复 manager 级回调
7. report_shzal/delete_shzal 参数化: c/n/s/e 字段、409→PUT 覆盖、DELETE 调用、KMODE 内存域名不受动态上报污染
8. TaskStore argobinds roundtrip: 条目过滤、key 仅显式持久化、未启用返回 False

全部 mock 网络层, 不依赖外网。
"""

import os
import sys
import tempfile
import time
import unittest
import urllib.error
from pathlib import Path
from unittest.mock import MagicMock, patch

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "py"))

import agent


def _make_bound_ready_tunnel(port, hostname="https://bind1.trycloudflare.com", source="api"):
    """构造已注册的隧道实例 (不启动守护线程, 免网络)"""
    t = agent.CloudflareQuickTunnel(port=port, source=source)
    t.hostname = hostname
    t.created_at = int(time.time())
    return t


def _add_tunnel(manager, port, hostname="https://bind1.trycloudflare.com", source="api"):
    t = _make_bound_ready_tunnel(port, hostname, source)
    manager._tunnels.append(t)
    manager._by_port.setdefault(port, []).append(t)
    return t


class _FakeStore:
    """记录 save_argobinds 调用的假 store"""

    def __init__(self):
        self.saved = None
        self.enabled = True

    def save_argobinds(self, items):
        self.saved = [dict(x) for x in items]
        return True


class DerivationTest(unittest.TestCase):
    """缺省派生与显式覆盖规则"""

    def test_derived_name_and_key(self):
        with patch.object(agent.Config, "KNAME", "web"), \
             patch.object(agent.Config, "KNAME_KEY", ""):
            self.assertEqual(agent.argo_bind_name(8000), "web-8000")
            self.assertEqual(agent.argo_bind_key("web-8000"), "web-8000123")

    def test_min_key_length_guaranteed(self):
        # 最短合法 KNAME (3 字符) + 单数字端口 → 派生密钥恰 8 字符
        with patch.object(agent.Config, "KNAME", "abc"):
            name = agent.argo_bind_name(1)
            self.assertEqual(len(agent.argo_bind_key(name)), 8)

    def test_validate_derived_ok(self):
        with patch.object(agent.Config, "KNAME", "web"):
            self.assertIsNone(agent.argo_bind_error(8000))

    def test_validate_kname_missing(self):
        with patch.object(agent.Config, "KNAME", ""):
            err = agent.argo_bind_error(8000)
            self.assertIn("KNAME", err)

    def test_validate_kname_too_short(self):
        with patch.object(agent.Config, "KNAME", "ab"):
            self.assertIn("过短", agent.argo_bind_error(8000))

    def test_validate_kname_illegal_chars(self):
        with patch.object(agent.Config, "KNAME", "we b"):
            self.assertIn("非法字符", agent.argo_bind_error(8000))

    def test_explicit_name_overrides_derivation(self):
        # 显式 name 不再拼端口; key 缺省 = name + "123" (基于最终 name 派生)
        with patch.object(agent.Config, "KNAME", ""):
            self.assertIsNone(agent.argo_bind_error(8000, name="myapp"))
            self.assertEqual(agent.argo_bind_key("myapp"), "myapp123")

    def test_explicit_key_too_short_rejected(self):
        err = agent.argo_bind_error(8000, name="myapp", key="short")
        self.assertIn("密钥过短", err)

    def test_explicit_name_illegal_chars_rejected(self):
        self.assertIn("非法字符", agent.argo_bind_error(8000, name="bad name!"))


class BindUnbindTest(unittest.TestCase):
    """bind/unbind 路由层语义 (经 manager 方法)"""

    def setUp(self):
        self.manager = agent.ArgoTunnelManager(store=_FakeStore())
        # 清空 KMODE 回调影响: manager 级回调恒 None
        self.manager.on_domain_change = None

    def test_bind_success_shape(self):
        t = _add_tunnel(self.manager, 8000)
        with patch.object(agent.Config, "KNAME", "web"), \
             patch.object(agent.KModeController, "report_domain_change") as fake_rep:
            res = self.manager.bind_tunnel(8000)
        self.assertEqual(res["status"], "ok")
        self.assertTrue(res["bound"])
        self.assertEqual(res["shz_name"], "web-8000")
        self.assertEqual(res["shz_url"], "https://shz.al/~web-8000")
        self.assertEqual(res["tunnel_domain"], t.hostname)
        self.assertEqual(t.shz_name, "web-8000")
        self.assertEqual(t.shz_key, "web-8000123")
        self.assertFalse(t.shz_key_explicit)
        # 首次上报后台线程异步触发
        deadline = time.time() + 2
        while time.time() < deadline and not fake_rep.called:
            time.sleep(0.02)
        self.assertTrue(fake_rep.called)
        args, kwargs = fake_rep.call_args
        self.assertEqual(kwargs.get("name"), "web-8000")
        self.assertEqual(kwargs.get("key"), "web-8000123")

    def test_bind_explicit_name_and_key(self):
        _add_tunnel(self.manager, 8000)
        with patch.object(agent.KModeController, "report_domain_change"):
            res = self.manager.bind_tunnel(8000, shz_name="myapp", shz_key="mysecret-key")
        self.assertEqual(res["shz_name"], "myapp")
        self.assertEqual(res["shz_url"], "https://shz.al/~myapp")
        t = self.manager._tunnels[0]
        self.assertEqual(t.shz_key, "mysecret-key")
        self.assertTrue(t.shz_key_explicit)

    def test_bind_persists_derived_without_key(self):
        _add_tunnel(self.manager, 8000)
        with patch.object(agent.Config, "KNAME", "web"), \
             patch.object(agent.KModeController, "report_domain_change"):
            self.manager.bind_tunnel(8000)
        self.assertEqual(self.manager.store.saved, [{"port": 8000, "name": "web-8000"}])

    def test_bind_persists_explicit_key(self):
        _add_tunnel(self.manager, 8000)
        with patch.object(agent.KModeController, "report_domain_change"):
            self.manager.bind_tunnel(8000, shz_name="myapp", shz_key="mysecret-key")
        self.assertEqual(self.manager.store.saved,
                         [{"port": 8000, "name": "myapp", "key": "mysecret-key"}])

    def test_bind_no_tunnel_404(self):
        with patch.object(agent.Config, "KNAME", "web"), \
             self.assertRaises(agent.ArgoTunnelError) as ctx:
            self.manager.bind_tunnel(9999)
        self.assertEqual(ctx.exception.status_code, 404)

    def test_bind_multiple_tunnels_409(self):
        _add_tunnel(self.manager, 8000, "https://a.trycloudflare.com")
        _add_tunnel(self.manager, 8000, "https://b.trycloudflare.com")
        with patch.object(agent.Config, "KNAME", "web"), \
             self.assertRaises(agent.ArgoTunnelError) as ctx:
            self.manager.bind_tunnel(8000)
        self.assertEqual(ctx.exception.status_code, 409)

    def test_bind_with_tunnel_domain_disambiguation(self):
        _add_tunnel(self.manager, 8000, "https://a.trycloudflare.com")
        b = _add_tunnel(self.manager, 8000, "https://b.trycloudflare.com")
        with patch.object(agent.Config, "KNAME", "web"), \
             patch.object(agent.KModeController, "report_domain_change"):
            res = self.manager.bind_tunnel(8000, tunnel_domain="https://b.trycloudflare.com")
        self.assertEqual(b.shz_name, "web-8000")
        self.assertIsNone(self.manager._tunnels[0].shz_name)
        self.assertEqual(res["tunnel_domain"], "https://b.trycloudflare.com")

    def test_bind_no_matching_domain_404(self):
        _add_tunnel(self.manager, 8000, "https://a.trycloudflare.com")
        with patch.object(agent.Config, "KNAME", "web"), \
             self.assertRaises(agent.ArgoTunnelError) as ctx:
            self.manager.bind_tunnel(8000, tunnel_domain="https://missing.trycloudflare.com")
        self.assertEqual(ctx.exception.status_code, 404)

    def test_bind_kmode_source_rejected(self):
        _add_tunnel(self.manager, 8000, source="kmode")
        with patch.object(agent.Config, "KNAME", "web"):
            with self.assertRaises(agent.ArgoTunnelError) as ctx:
                self.manager.bind_tunnel(8000)
        self.assertEqual(ctx.exception.status_code, 409)
        self.assertIn("KMODE", ctx.exception.message)
        self.assertIsNone(self.manager._tunnels[0].shz_name)

    def test_bind_second_tunnel_on_bound_port_409(self):
        t1 = _add_tunnel(self.manager, 8000, "https://a.trycloudflare.com")
        _add_tunnel(self.manager, 8000, "https://b.trycloudflare.com")
        with patch.object(agent.Config, "KNAME", "web"), \
             patch.object(agent.KModeController, "report_domain_change"):
            self.manager.bind_tunnel(8000, tunnel_domain="https://a.trycloudflare.com")
            with self.assertRaises(agent.ArgoTunnelError) as ctx:
                self.manager.bind_tunnel(8000, tunnel_domain="https://b.trycloudflare.com")
        self.assertEqual(ctx.exception.status_code, 409)
        self.assertEqual(t1.shz_name, "web-8000")

    def test_rebind_same_tunnel_idempotent(self):
        _add_tunnel(self.manager, 8000)
        with patch.object(agent.Config, "KNAME", "web"), \
             patch.object(agent.KModeController, "report_domain_change"):
            res1 = self.manager.bind_tunnel(8000)
            res2 = self.manager.bind_tunnel(8000, shz_name="myapp")
        self.assertEqual(res1["shz_name"], "web-8000")
        self.assertEqual(res2["shz_name"], "myapp")
        self.assertEqual(self.manager._tunnels[0].shz_name, "myapp")

    def test_bind_invalid_params_400(self):
        _add_tunnel(self.manager, 8000)
        with patch.object(agent.Config, "KNAME", ""):
            with self.assertRaises(agent.ArgoTunnelError) as ctx:
                self.manager.bind_tunnel(8000)
        self.assertEqual(ctx.exception.status_code, 400)
        with self.assertRaises(agent.ArgoTunnelError) as ctx:
            self.manager.bind_tunnel(8000, shz_name="myapp", shz_key="short")
        self.assertEqual(ctx.exception.status_code, 400)

    def test_unbind_success(self):
        t = _add_tunnel(self.manager, 8000)
        with patch.object(agent.Config, "KNAME", "web"), \
             patch.object(agent.KModeController, "report_domain_change"):
            self.manager.bind_tunnel(8000)
        with patch.object(agent.KModeController, "delete_shzal") as fake_del, \
             patch.object(agent.KModeController, "report_domain_change"):
            res = self.manager.unbind_tunnel(8000)
        self.assertEqual(res["status"], "ok")
        self.assertFalse(res["bound"])
        self.assertIsNone(res["shz_name"])
        self.assertIsNone(res["shz_url"])
        self.assertIsNone(t.shz_name)
        self.assertIsNone(t.shz_key)
        # 远端记录后台删除
        deadline = time.time() + 2
        while time.time() < deadline and not fake_del.called:
            time.sleep(0.02)
        self.assertTrue(fake_del.called)
        self.assertEqual(fake_del.call_args[0], ("web-8000", "web-8000123"))
        # 持久化条目已清
        self.assertEqual(self.manager.store.saved, [])

    def test_unbind_no_binding_404(self):
        _add_tunnel(self.manager, 8000)
        with self.assertRaises(agent.ArgoTunnelError) as ctx:
            self.manager.unbind_tunnel(8000)
        self.assertEqual(ctx.exception.status_code, 404)

    def test_unbind_restores_manager_callback(self):
        t = _add_tunnel(self.manager, 8000)
        manager_cb = lambda old, new: None
        self.manager.on_domain_change = manager_cb
        with patch.object(agent.Config, "KNAME", "web"), \
             patch.object(agent.KModeController, "report_domain_change"):
            self.manager.bind_tunnel(8000)
        self.assertIsNot(t.on_domain_change, manager_cb)
        with patch.object(agent.KModeController, "delete_shzal"), \
             patch.object(agent.KModeController, "report_domain_change"):
            self.manager.unbind_tunnel(8000)
        self.assertIs(t.on_domain_change, manager_cb)

    def test_list_tunnels_visibility(self):
        _add_tunnel(self.manager, 8000, "https://a.trycloudflare.com")
        _add_tunnel(self.manager, 9000, "https://b.trycloudflare.com")
        with patch.object(agent.Config, "KNAME", "web"), \
             patch.object(agent.KModeController, "report_domain_change"):
            self.manager.bind_tunnel(8000)
        items = {i["port"]: i for i in self.manager.list_tunnels()}
        self.assertEqual(items[8000]["shz_name"], "web-8000")
        self.assertEqual(items[8000]["shz_url"], "https://shz.al/~web-8000")
        self.assertIsNone(items[9000]["shz_name"])
        self.assertIsNone(items[9000]["shz_url"])

    def test_delete_bound_tunnel_cleans_up(self):
        t = _add_tunnel(self.manager, 8000)
        with patch.object(agent.Config, "KNAME", "web"), \
             patch.object(agent.KModeController, "report_domain_change"):
            self.manager.bind_tunnel(8000)
        with patch.object(agent.KModeController, "delete_shzal") as fake_del:
            res = self.manager.delete_tunnel(8000)
        self.assertEqual(res["deleted"], 1)
        self.assertEqual(res["tunnels"][0]["shz_name"], "web-8000")
        self.assertEqual(res["tunnels"][0]["shz_url"], "https://shz.al/~web-8000")
        deadline = time.time() + 2
        while time.time() < deadline and not fake_del.called:
            time.sleep(0.02)
        self.assertTrue(fake_del.called)
        self.assertEqual(fake_del.call_args[0], ("web-8000", "web-8000123"))
        self.assertEqual(self.manager.store.saved, [])

    def test_delete_unbound_tunnel_no_remote_call(self):
        _add_tunnel(self.manager, 8000)
        with patch.object(agent.KModeController, "delete_shzal") as fake_del:
            self.manager.delete_tunnel(8000)
        self.assertFalse(fake_del.called)


class CreateBindTest(unittest.TestCase):
    """create+shz: 创建后绑定 (注册前拦截校验, 不产生孤儿隧道)"""

    def _make_manager(self, store=None):
        manager = agent.ArgoTunnelManager(store=store)
        manager.on_domain_change = None
        return manager

    def _run_with_fake_edge(self, fn):
        class _DummySock:
            def close(self):
                pass

        class _FakeH2Fail:
            def __init__(self, *a, **k):
                self.registered = False

            def run(self):
                raise OSError("simulated edge failure")

        with patch.object(agent, "connect_edge", lambda *a, **k: _DummySock()), \
             patch.object(agent, "H2Connection", _FakeH2Fail), \
             patch.object(agent.KModeController, "report_domain_change"):
            return fn()

    def test_create_with_shz_true(self):
        def fake_request(service):
            return "https://created.trycloudflare.com", "tag", b"secret", b"id"

        store = _FakeStore()
        manager = self._make_manager(store)
        manager._requester = fake_request
        with patch.object(agent.Config, "KNAME", "web"):
            res = self._run_with_fake_edge(
                lambda: manager.create_tunnel(8000, shz=True))
        self.assertTrue(res["created"])
        self.assertEqual(res["shz_name"], "web-8000")
        self.assertEqual(res["shz_url"], "https://shz.al/~web-8000")
        t = manager._tunnels[0]
        self.assertEqual(t.source, "api")
        self.assertEqual(t.shz_name, "web-8000")
        self.assertEqual(store.saved, [{"port": 8000, "name": "web-8000"}])
        t.stop()

    def test_create_with_explicit_name(self):
        def fake_request(service):
            return "https://created.trycloudflare.com", "tag", b"secret", b"id"

        manager = self._make_manager()
        manager._requester = fake_request
        res = self._run_with_fake_edge(
            lambda: manager.create_tunnel(8000, shz_name="myapp", shz_key="mysecret-key"))
        self.assertEqual(res["shz_name"], "myapp")
        self.assertEqual(manager._tunnels[0].shz_key, "mysecret-key")
        self.assertTrue(manager._tunnels[0].shz_key_explicit)
        manager._tunnels[0].stop()

    def test_create_shz_invalid_param_400_no_tunnel(self):
        manager = self._make_manager()
        with self.assertRaises(agent.ArgoTunnelError) as ctx:
            manager.create_tunnel(8000, shz_name="myapp", shz_key="short")
        self.assertEqual(ctx.exception.status_code, 400)
        self.assertEqual(len(manager._tunnels), 0)  # 注册前拦截, 无孤儿隧道

    def test_create_shz_port_already_bound_409_no_tunnel(self):
        def fake_request(service):
            return "https://created.trycloudflare.com", "tag", b"secret", b"id"

        manager = self._make_manager()
        manager._requester = fake_request
        _add_tunnel(manager, 8000, "https://existing.trycloudflare.com")
        with patch.object(agent.Config, "KNAME", "web"), \
             patch.object(agent.KModeController, "report_domain_change"):
            manager.bind_tunnel(8000)
            with self.assertRaises(agent.ArgoTunnelError) as ctx:
                self._run_with_fake_edge(
                    lambda: manager.create_tunnel(8000, duplicate=True, shz=True))
        self.assertEqual(ctx.exception.status_code, 409)
        self.assertEqual(len(manager._tunnels), 1)  # 未新建
        for t in list(manager._tunnels):
            t.stop()

    def test_create_without_shz_fields_null(self):
        def fake_request(service):
            return "https://created.trycloudflare.com", "tag", b"secret", b"id"

        manager = self._make_manager()
        manager._requester = fake_request
        res = self._run_with_fake_edge(lambda: manager.create_tunnel(8000))
        self.assertIsNone(res.get("shz_name"))
        self.assertIsNone(res.get("shz_url"))
        self.assertIsNone(manager._tunnels[0].shz_name)
        manager._tunnels[0].stop()


class DomainChangeRebindTest(unittest.TestCase):
    """绑定后守护重建换域名: 逐隧道回调按绑定名重报 (KMODE manager 级回调不受影响)"""

    def test_bound_tunnel_domain_change_reports_bound_name(self):
        manager = agent.ArgoTunnelManager(store=_FakeStore())
        manager.on_domain_change = None
        t = _add_tunnel(manager, 8000)
        with patch.object(agent.Config, "KNAME", "web"), \
             patch.object(agent.KModeController, "report_domain_change"):
            manager.bind_tunnel(8000)
        with patch.object(agent.KModeController, "report_domain_change") as fake_rep:
            t.on_domain_change("https://old.trycloudflare.com", "https://new.trycloudflare.com")
        self.assertEqual(fake_rep.call_count, 1)
        args, kwargs = fake_rep.call_args
        self.assertEqual(args[0], "https://new.trycloudflare.com")
        self.assertEqual(kwargs.get("name"), "web-8000")
        self.assertEqual(kwargs.get("key"), "web-8000123")

    def test_kmode_tunnel_callback_untouched(self):
        manager = agent.ArgoTunnelManager()
        kmode_events = []
        manager.on_domain_change = lambda old, new: kmode_events.append(new)
        t = _add_tunnel(manager, 8000, source="kmode")
        # 模拟 create_tunnel 的 manager 级回调下发 (生产路径 py: create_tunnel 内赋值)
        t.on_domain_change = manager.on_domain_change
        self.assertEqual(t.source, "kmode")
        t.on_domain_change("https://old.trycloudflare.com", "https://new.trycloudflare.com")
        self.assertEqual(kmode_events, ["https://new.trycloudflare.com"])
        self.assertIsNone(t.shz_name)


class ReportShzalTest(unittest.TestCase):
    """report_shzal/delete_shzal 参数化: 协议字段、409→PUT、DELETE、KMODE 内存域名隔离"""

    def _fake_urlopen_recorder(self, status_map):
        """按 (method, url) 返回响应或抛 HTTPError; 记录全部调用 (含 body)"""
        calls = []

        class _FakeResp:
            def __enter__(self):
                return self

            def __exit__(self, *a):
                return False

            def read(self):
                return b"ok"

        def fake_urlopen(req, timeout=None):
            method = req.get_method()
            url = req.full_url if hasattr(req, "full_url") else str(req)
            calls.append({
                "method": method,
                "url": url,
                "ua": req.get_header("User-agent") or req.headers.get("User-agent"),
                "body": req.data if req.data is not None else b"",
            })
            code = status_map.get((method, url.split("?")[0]))
            if code:
                raise urllib.error.HTTPError(url, code, "err", None, None)
            return _FakeResp()

        return calls, fake_urlopen

    def test_report_with_explicit_name_key(self):
        calls, fake = self._fake_urlopen_recorder({})
        with patch("urllib.request.urlopen", fake):
            ok = agent.KModeController.report_shzal(
                "https://dom.trycloudflare.com", name="myapp", key="mysecret-key")
        self.assertTrue(ok)
        self.assertEqual(len(calls), 1)
        self.assertEqual(calls[0]["method"], "POST")
        self.assertEqual(calls[0]["url"], "https://shz.al/")
        self.assertEqual(calls[0]["ua"], "curl/8.5.0")
        # POST body 携带 c/n/s/e 四字段
        body = calls[0]["body"].decode("utf-8", "replace")
        for field in ('name="c"', 'name="n"', 'name="s"', 'name="e"'):
            self.assertIn(field, body)
        self.assertIn("mysecret-key", body)
        # KMODE 内存域名不被动态上报污染
        self.assertIsNone(agent.KModeController._domain)

    def test_report_kmode_tracks_domain(self):
        calls, fake = self._fake_urlopen_recorder({})
        old_domain = agent.KModeController._domain
        try:
            with patch("urllib.request.urlopen", fake):
                ok = agent.KModeController.report_shzal("https://dom.trycloudflare.com")
            self.assertTrue(ok)
            self.assertEqual(agent.KModeController._domain, "https://dom.trycloudflare.com")
        finally:
            agent.KModeController._domain = old_domain

    def test_report_409_puts_overwrite_without_n_field(self):
        calls, fake = self._fake_urlopen_recorder({("POST", "https://shz.al/"): 409})
        with patch("urllib.request.urlopen", fake):
            ok = agent.KModeController.report_shzal(
                "https://dom.trycloudflare.com", name="myapp", key="mysecret-key")
        self.assertTrue(ok)
        self.assertEqual(len(calls), 2)
        self.assertEqual(calls[1]["method"], "PUT")
        self.assertEqual(calls[1]["url"], "https://shz.al/~myapp:mysecret-key")
        # PUT body 不含 n 字段 (409 覆盖语义), c/s/e 保留
        put_body = calls[1]["body"].decode("utf-8", "replace")
        self.assertNotIn('name="n"', put_body)
        for field in ('name="c"', 'name="s"', 'name="e"'):
            self.assertIn(field, put_body)

    def test_delete_shzal_calls_delete(self):
        calls, fake = self._fake_urlopen_recorder({})
        with patch("urllib.request.urlopen", fake):
            ok = agent.KModeController.delete_shzal("myapp", "mysecret-key")
        self.assertTrue(ok)
        self.assertEqual(len(calls), 1)
        self.assertEqual(calls[0]["method"], "DELETE")
        self.assertEqual(calls[0]["url"], "https://shz.al/~myapp:mysecret-key")
        self.assertEqual(calls[0]["ua"], "curl/8.5.0")

    def test_delete_shzal_silent_failure(self):
        calls, fake = self._fake_urlopen_recorder({("DELETE", "https://shz.al/~myapp:mysecret-key"): 404})
        with patch("urllib.request.urlopen", fake):
            ok = agent.KModeController.delete_shzal("myapp", "mysecret-key")
        self.assertFalse(ok)  # 静默失败不抛错


class TaskStoreArgoBindsTest(unittest.TestCase):
    """KSTORE data.argobinds roundtrip: 过滤 / key 仅显式持久化 / 未启用关闭"""

    def setUp(self):
        self._tmp = tempfile.TemporaryDirectory()
        self.store_path = os.path.join(self._tmp.name, "store.enc")
        self.key_hex = "aa" * 32

    def tearDown(self):
        self._tmp.cleanup()

    def _env(self):
        return patch.dict(os.environ, {"KSTORE": self.store_path, "KSTORE_KEY": self.key_hex})

    def test_roundtrip(self):
        with self._env():
            store = agent.TaskStore()
            self.assertTrue(store.save_argobinds([
                {"port": 8000, "name": "web-8000"},
                {"port": 9000, "name": "myapp", "key": "mysecret-key"},
            ]))
            store2 = agent.TaskStore()
            store2.load()
            binds = store2.get_argobinds()
        self.assertEqual(binds, [
            {"port": 8000, "name": "web-8000"},
            {"port": 9000, "name": "myapp", "key": "mysecret-key"},
        ])

    def test_invalid_entries_filtered(self):
        with self._env():
            store = agent.TaskStore()
            ok = store.save_argobinds([
                {"port": 8000, "name": "web-8000"},
                {"port": 70000, "name": "badport"},      # 端口越界
                {"port": "x", "name": "badport2"},       # 端口非整数
                {"port": 8001},                          # 缺 name
                {"name": "noport"},                      # 缺 port
                "not-a-dict",
            ])
            self.assertTrue(ok)
            store2 = agent.TaskStore()
            store2.load()
            binds = store2.get_argobinds()
        self.assertEqual(binds, [{"port": 8000, "name": "web-8000"}])

    def test_empty_key_not_persisted(self):
        with self._env():
            store = agent.TaskStore()
            store.save_argobinds([{"port": 8000, "name": "web-8000", "key": ""}])
            store2 = agent.TaskStore()
            store2.load()
        self.assertEqual(store2.get_argobinds(), [{"port": 8000, "name": "web-8000"}])

    def test_disabled_store_returns_false(self):
        with patch.dict(os.environ, {"KSTORE": "", "KSTORE_KEY": ""}):
            store = agent.TaskStore()
            self.assertFalse(store.enabled)
            self.assertFalse(store.save_argobinds([{"port": 8000, "name": "web-8000"}]))
            self.assertEqual(store.get_argobinds(), [])

    def test_save_preserves_other_subtypes(self):
        with self._env():
            store = agent.TaskStore()
            store.save_argobinds([{"port": 8000, "name": "web-8000"}])
            store.save_hubregs([{"hub": "https://hub.example.com", "kname": "h1", "ports": []}])
            store2 = agent.TaskStore()
            store2.load()
        self.assertEqual(len(store2.get_argobinds()), 1)
        self.assertEqual(len(store2.get_hubregs()), 1)


if __name__ == "__main__":
    unittest.main()
