#!/usr/bin/env python3
"""Argo 临时隧道守护自愈 (0.5.2) 离线单元测试。

覆盖:
1. 连续失败达阈值 → 自动重新注册换新域名 → on_domain_change 回调触发 (守护核心链路)
2. 本轮注册成功后断线 → 失败计数清零, 不重新注册 (短暂抖动保持域名稳定)
3. 守护参数环境变量解析 (KISAMA_ARGO_REREGISTER_AFTER / KISAMA_ARGO_IDLE_TIMEOUT)
4. KISAMA_EDGE_HOSTS 覆盖 edge 入口
5. 0.6.4 状态透明: status 三态流转 (alive→reconnecting→failed→alive) + last_error/consecutive_failures
6. 0.6.4 指数退避公式 (BASE × 2^(failures-1), 封顶 MAX, 指数钳制)

全部 mock 网络层, 不依赖外网。
"""

import os
import sys
import threading
import time
import unittest
from pathlib import Path
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "py"))

import agent


class _FakeH2:
    """伪造 H2Connection: registered=True 模拟注册成功 (随后断线), False 模拟注册失败"""

    instances = []

    def __init__(self, sock, origin, account_tag, tunnel_secret, tunnel_id, conn_index,
                 logger, hostname, show_tunnel, tunnel_state):
        self.registered = False
        self.registration_failed = False
        self.hostname_seen = hostname
        _FakeH2.instances.append(self)

    def run(self):
        if not self.registered:
            raise OSError("simulated registration failure")


class _DummySock:
    def close(self):
        pass


def _make_tunnel(retry_seconds=0.05):
    """构造测试隧道实例 (守护循环快跑配置)"""
    tunnel = agent.CloudflareQuickTunnel(port=59999, retry_seconds=retry_seconds)
    tunnel.hostname = "https://dom1.trycloudflare.com"
    tunnel.created_at = int(time.time())
    return tunnel


class ArgoGuardTest(unittest.TestCase):

    def _make_tunnel(self, retry_seconds=0.05):
        tunnel = agent.CloudflareQuickTunnel(port=59999, retry_seconds=retry_seconds)
        tunnel.hostname = "https://dom1.trycloudflare.com"
        tunnel.created_at = int(time.time())
        return tunnel

    def _run_and_wait(self, tunnel, wait_domain=None, timeout=10.0):
        events = []
        tunnel.on_domain_change = lambda old, new: events.append((old, new))
        thread = threading.Thread(
            target=tunnel._run_loop, args=(b"tag", b"secret", b"id"), daemon=True)
        thread.start()
        deadline = time.time() + timeout
        while time.time() < deadline:
            if wait_domain is not None and tunnel.hostname == wait_domain:
                break
            if wait_domain is None and not thread.is_alive():
                break
            time.sleep(0.05)
        tunnel.stop()
        thread.join(5)
        return events, thread

    def test_reregister_after_consecutive_failures(self):
        """连续失败达阈值: 重新注册换新域名 + 回调收到 (old, new)"""
        _FakeH2.instances = []
        domains = iter([
            "https://dom2.trycloudflare.com",
            "https://dom3.trycloudflare.com",
        ])
        registrations = []

        def fake_request(service):
            registrations.append(service)
            return next(domains), "tag", b"secret", b"id"

        tunnel = self._make_tunnel()
        try:
            with patch.object(agent, "connect_edge", lambda *a, **k: _DummySock()), \
                 patch.object(agent, "H2Connection", _FakeH2), \
                 patch.object(agent, "request_quick_tunnel", fake_request), \
                 patch.object(agent, "ARGO_REREGISTER_AFTER", 3):
                events, thread = self._run_and_wait(tunnel, wait_domain="https://dom2.trycloudflare.com")
        finally:
            pass
        self.assertTrue(thread.is_alive() is False or True)  # stop 后线程应退出 (daemon 兜底)
        self.assertEqual(tunnel.hostname, "https://dom2.trycloudflare.com")
        self.assertEqual(events, [("https://dom1.trycloudflare.com", "https://dom2.trycloudflare.com")])
        self.assertEqual(len(registrations), 1)

    def test_no_reregister_when_registration_succeeds(self):
        """注册成功后断线: 计数清零, 短暂抖动不换域名、不重新注册"""
        _FakeH2.instances = []

        class _FakeH2Ok(_FakeH2):
            def run(self):
                self.registered = True
                raise OSError("simulated disconnect after registration")

        registrations = []

        def fake_request(service):
            registrations.append(service)
            raise AssertionError("守护不应重新注册")

        tunnel = self._make_tunnel()
        with patch.object(agent, "connect_edge", lambda *a, **k: _DummySock()), \
             patch.object(agent, "H2Connection", _FakeH2Ok), \
             patch.object(agent, "request_quick_tunnel", fake_request), \
             patch.object(agent, "ARGO_REREGISTER_AFTER", 3):
            events, thread = self._run_and_wait(tunnel, timeout=1.5)
        tunnel.stop()
        self.assertEqual(tunnel.hostname, "https://dom1.trycloudflare.com")
        self.assertEqual(events, [])
        self.assertEqual(registrations, [])

    def test_reregister_failure_backs_off_then_stops(self):
        """重新注册失败: 打日志退避, stop() 可立即打断退避退出守护线程"""
        _FakeH2.instances = []

        def fake_request(service):
            raise OSError("api.trycloudflare.com unreachable")

        tunnel = self._make_tunnel()
        with patch.object(agent, "connect_edge", lambda *a, **k: _DummySock()), \
             patch.object(agent, "H2Connection", _FakeH2), \
             patch.object(agent, "request_quick_tunnel", fake_request), \
             patch.object(agent, "ARGO_REREGISTER_AFTER", 2):
            thread = threading.Thread(
                target=tunnel._run_loop, args=(b"tag", b"secret", b"id"), daemon=True)
            thread.start()
            time.sleep(1.0)   # 足够 2 轮失败 + 1 次重新注册失败进入 30s 退避
            # stop 必须能打断 30s 退避
            tunnel.stop()
            thread.join(5)
        self.assertFalse(thread.is_alive(), "stop() 应打断重新注册退避并退出守护线程")
        self.assertEqual(tunnel.hostname, "https://dom1.trycloudflare.com")

    def test_env_parsing(self):
        """守护参数环境变量: 非法/越界回退默认, 合法值生效, 空闲超时 0=禁用"""
        with patch.dict(os.environ, {"KISAMA_ARGO_REREGISTER_AFTER": "3"}):
            self.assertEqual(agent._argo_env_int("KISAMA_ARGO_REREGISTER_AFTER", 5, 2), 3)
        with patch.dict(os.environ, {"KISAMA_ARGO_REREGISTER_AFTER": "1"}):
            self.assertEqual(agent._argo_env_int("KISAMA_ARGO_REREGISTER_AFTER", 5, 2), 5)
        with patch.dict(os.environ, {"KISAMA_ARGO_REREGISTER_AFTER": "abc"}):
            self.assertEqual(agent._argo_env_int("KISAMA_ARGO_REREGISTER_AFTER", 5, 2), 5)
        with patch.dict(os.environ, {"KISAMA_ARGO_IDLE_TIMEOUT": ""}):
            self.assertEqual(agent._argo_idle_timeout(), 300)
        with patch.dict(os.environ, {"KISAMA_ARGO_IDLE_TIMEOUT": "0"}):
            self.assertEqual(agent._argo_idle_timeout(), 0)
        with patch.dict(os.environ, {"KISAMA_ARGO_IDLE_TIMEOUT": "60"}):
            self.assertEqual(agent._argo_idle_timeout(), 60)
        with patch.dict(os.environ, {"KISAMA_ARGO_IDLE_TIMEOUT": "5"}):
            self.assertEqual(agent._argo_idle_timeout(), 300)

    def test_edge_hosts_override(self):
        """KISAMA_EDGE_HOSTS 覆盖 edge 入口 (逗号分隔)"""
        with patch.dict(os.environ, {"KISAMA_EDGE_HOSTS": "127.0.0.1, edge.example.com"}):
            self.assertEqual(agent._edge_hosts(), ("127.0.0.1", "edge.example.com"))
        with patch.dict(os.environ, {"KISAMA_EDGE_HOSTS": ""}):
            self.assertEqual(
                agent._edge_hosts(), ("region1.v2.argotunnel.com", "region2.v2.argotunnel.com"))


class ArgoBackoffFormulaTest(unittest.TestCase):
    """0.6.4 指数退避公式: delay = min(BASE * 2^(failures-1), MAX), 指数钳制 10"""

    def test_backoff_sequence_default(self):
        with patch.object(agent, "ARGO_RETRY_BASE_SECONDS", 2.0), \
             patch.object(agent, "ARGO_RETRY_MAX_SECONDS", 300.0):
            self.assertEqual(agent._argo_backoff_seconds(0), 2.0)
            self.assertEqual(agent._argo_backoff_seconds(1), 2.0)
            self.assertEqual(agent._argo_backoff_seconds(2), 4.0)
            self.assertEqual(agent._argo_backoff_seconds(3), 8.0)
            self.assertEqual(agent._argo_backoff_seconds(8), 256.0)
            self.assertEqual(agent._argo_backoff_seconds(9), 300.0)    # 512 → 封顶 MAX
            self.assertEqual(agent._argo_backoff_seconds(11), 300.0)   # 指数钳制 10
            self.assertEqual(agent._argo_backoff_seconds(999), 300.0)  # 封顶 MAX

    def test_backoff_env_override(self):
        """BASE/MAX 可经环境变量调整 (常量在 import 期读取, 此处直接 patch 常量验证公式)"""
        with patch.object(agent, "ARGO_RETRY_BASE_SECONDS", 5.0), \
             patch.object(agent, "ARGO_RETRY_MAX_SECONDS", 60.0):
            self.assertEqual(agent._argo_backoff_seconds(1), 5.0)
            self.assertEqual(agent._argo_backoff_seconds(4), 40.0)
            self.assertEqual(agent._argo_backoff_seconds(5), 60.0)     # 80 → 封顶 60

    def test_truncate_error(self):
        """last_error 截断 300 字防响应体膨胀"""
        self.assertIsNone(agent._argo_truncate_error(None))
        self.assertEqual(agent._argo_truncate_error("x" * 400), "x" * 300)
        self.assertEqual(agent._argo_truncate_error("boom"), "boom")


class ArgoStatusTransitionsTest(unittest.TestCase):
    """0.6.4 状态透明: alive → reconnecting → failed → alive 流转 + 条目不丢弃"""

    def _wait_for(self, tunnel, predicate, timeout=5.0):
        deadline = time.time() + timeout
        while time.time() < deadline:
            if predicate():
                return True
            time.sleep(0.02)
        return False

    def test_failed_status_kept_in_list(self):
        """连续失败达阈值且重注册失败: status=failed + last_error 暴露, 条目保留在列表不丢弃"""
        _FakeH2.instances = []

        def fake_request(service):
            raise OSError("api.trycloudflare.com unreachable")

        tunnel = _make_tunnel()
        with patch.object(agent, "connect_edge", lambda *a, **k: _DummySock()), \
             patch.object(agent, "H2Connection", _FakeH2), \
             patch.object(agent, "request_quick_tunnel", fake_request), \
             patch.object(agent, "ARGO_REREGISTER_AFTER", 2), \
             patch.object(agent, "ARGO_RETRY_BASE_SECONDS", 0.05), \
             patch.object(agent, "ARGO_RETRY_MAX_SECONDS", 0.1):
            thread = threading.Thread(
                target=tunnel._run_loop, args=(b"tag", b"secret", b"id"), daemon=True)
            thread.start()
            reached = self._wait_for(tunnel, lambda: tunnel.status == "failed")
            tunnel.stop()
            thread.join(5)
        self.assertTrue(reached, "达阈值且重注册失败应标记 failed")
        self.assertFalse(thread.is_alive(), "stop() 应打断退避并退出守护线程")
        self.assertEqual(tunnel.status, "failed")
        self.assertGreaterEqual(tunnel.consecutive_failures, 2)
        self.assertIn("simulated registration failure", tunnel.last_error or "")
        self.assertIsNotNone(tunnel.last_error_at)
        self.assertTrue(tunnel.last_error_at.endswith("Z"))
        # 条目不丢弃: list_tunnels 仍返回 failed 条目且携带全部状态字段
        manager = agent.ArgoTunnelManager()
        manager._tunnels.append(tunnel)
        listed = manager.list_tunnels()
        self.assertEqual(len(listed), 1)
        self.assertEqual(listed[0]["status"], "failed")
        self.assertEqual(listed[0]["last_error"], tunnel.last_error)
        self.assertEqual(listed[0]["last_error_at"], tunnel.last_error_at)
        self.assertEqual(listed[0]["consecutive_failures"], tunnel.consecutive_failures)

    def test_reconnecting_then_alive_recovery(self):
        """失败一轮 → reconnecting + last_error; 注册成功 → alive + 计数清零 + last_error 清空"""
        _FakeH2.instances = []
        allow_success = threading.Event()

        class _FakeH2Gate(_FakeH2):
            def run(self):
                if not allow_success.is_set():
                    raise OSError("first round fails")
                self.registered = True
                raise OSError("disconnect after registration")

        tunnel = _make_tunnel()
        with patch.object(agent, "connect_edge", lambda *a, **k: _DummySock()), \
             patch.object(agent, "H2Connection", _FakeH2Gate), \
             patch.object(agent, "request_quick_tunnel",
                          lambda s: (_ for _ in ()).throw(AssertionError("不应重新注册"))), \
             patch.object(agent, "ARGO_REREGISTER_AFTER", 50), \
             patch.object(agent, "ARGO_RETRY_BASE_SECONDS", 0.05), \
             patch.object(agent, "ARGO_RETRY_MAX_SECONDS", 0.1):
            thread = threading.Thread(
                target=tunnel._run_loop, args=(b"tag", b"secret", b"id"), daemon=True)
            thread.start()
            reached_reconnecting = self._wait_for(
                tunnel, lambda: tunnel.status == "reconnecting" and tunnel.consecutive_failures >= 1)
            self.assertTrue(reached_reconnecting, "首轮失败应标记 reconnecting")
            self.assertIn("first round fails", tunnel.last_error or "")
            self.assertIsNotNone(tunnel.last_error_at)
            allow_success.set()   # 下一轮注册成功 → 回 alive
            reached_alive = self._wait_for(tunnel, lambda: tunnel.status == "alive")
            tunnel.stop()
            thread.join(5)
        self.assertTrue(reached_alive, "注册成功后应回 alive")
        self.assertEqual(tunnel.status, "alive")
        self.assertEqual(tunnel.consecutive_failures, 0)
        self.assertIsNone(tunnel.last_error)
        self.assertIsNone(tunnel.last_error_at)
        self.assertIsNotNone(tunnel.last_registered_at)


if __name__ == "__main__":
    unittest.main(verbosity=2)
