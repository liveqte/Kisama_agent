#!/usr/bin/env python3
"""KMODE=3 kisama-hub 出站隧道 (0.6.6, docs/API.MD 十九) 离线单元测试。

覆盖:
1. hub 注册名校验 hub_kname_error (与 hub 端 ValidateKName 同源契约)
2. KHUB → WS 地址推导 derive_hub_ws_url (https→wss / http→ws / 裸 host)
3. 回环请求头纵深过滤 filter_loopback_headers (hop-by-hop + 内部命名空间剥除)
4. req 分发: api 模式回环 URL 构造 / port 模式 KHUB_PORTS 白名单放行与拒绝 (拒绝不发起连接)
5. 响应超限 → err body_too_large; 回环异常 → err loopback_unreachable
6. 状态快照 snapshot 字段齐全 (对齐 /api/argo 0.6.4 惯例)
7. 指数退避公式 (BASE × 2^(failures-1), 封顶 MAX)

全部走注入缝 (_request/_ws_factory), 不依赖外网。
"""

import asyncio
import os
import subprocess
import sys
import unittest
from pathlib import Path
from unittest import mock

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "py"))

import agent  # noqa: E402


class _FakeWS:
    """伪造 hub 侧 WebSocket: 捕获全部出站帧"""

    def __init__(self):
        self.sent = []

    async def send_json(self, payload):
        self.sent.append(payload)

    async def receive(self, timeout=None):
        import aiohttp
        return mock.Mock(type=aiohttp.WSMsgType.CLOSE, data=None, extra="")


class _FakeLock:
    async def __aenter__(self):
        return self

    async def __aexit__(self, *exc):
        return False


class _FakeWsCm:
    """伪造 ws_connect 异步上下文: __aenter__ 返回 _FakeWS"""

    def __init__(self, ws):
        self._ws = ws

    async def __aenter__(self):
        return self._ws

    async def __aexit__(self, *exc):
        return False


def _make_manager(ports=None, retry_base=2.0, retry_max=60.0, hub_url="http://hub.test"):
    mgr = agent.HubTunnelManager(
        hub_url=hub_url, kname="Demo1", port=58000,
        ports=ports if ports is not None else [7788, 8080],
    )
    # 测试线程不启动 (不调 start), 直接操作协程方法
    mgr._ws_lock = _FakeLock()
    mgr._ping_interval = 20.0
    mgr._retry_base = retry_base
    mgr._retry_max = retry_max
    return mgr


class HubKNameValidationTest(unittest.TestCase):
    """hub 注册名校验 (与 hub 端 ValidateKName 同源契约)"""

    def test_valid_names_normalized(self):
        for raw, want in [("demo1", "demo1"), ("Demo1", "demo1"), ("my-host-2", "my-host-2"), ("a1", "a1")]:
            self.assertIsNone(agent.hub_kname_error(raw), raw)

    def test_invalid_names(self):
        for raw in ["", "  ", "a", "-abc", "ab_c", "ab.cd", "ab cd",
                    "api", "agents", "sub", "tunnel", "health", "static", "favicon.ico"]:
            self.assertIsNotNone(agent.hub_kname_error(raw), raw)


class DeriveHubWsUrlTest(unittest.TestCase):
    def test_schemes(self):
        self.assertEqual(agent.derive_hub_ws_url("https://hub.example.com"), "wss://hub.example.com/tunnel")
        self.assertEqual(agent.derive_hub_ws_url("http://hub.example.com/"), "ws://hub.example.com/tunnel")
        self.assertEqual(agent.derive_hub_ws_url("hub.example.com:9000"), "ws://hub.example.com:9000/tunnel")
        self.assertEqual(agent.derive_hub_ws_url("https://hub.example.com/"), "wss://hub.example.com/tunnel")


class FilterLoopbackHeadersTest(unittest.TestCase):
    def test_strips_hop_by_hop_and_internal(self):
        out = agent.filter_loopback_headers({
            "Connection": "keep-alive",
            "Upgrade": "websocket",
            "Transfer-Encoding": "chunked",
            "Host": "hub.test",
            "X-Kisama-Hub-Orig-Path": "/forged",
            "X-Forwarded-For": "1.2.3.4",
            "Content-Type": "application/json",
            "X-Nonce": "n1",
        })
        for bad in ("connection", "upgrade", "transfer-encoding", "host",
                    "x-kisama-hub-orig-path", "x-forwarded-for"):
            self.assertNotIn(bad, out, bad)
        self.assertEqual(out["content-type"], "application/json")
        self.assertEqual(out["x-nonce"], "n1")

    def test_none_and_empty(self):
        self.assertEqual(agent.filter_loopback_headers(None), {})
        self.assertEqual(agent.filter_loopback_headers({}), {})


class ShzalHubAliasValidationTest(unittest.TestCase):
    def test_alias_shapes(self):
        for raw in ("https://shz.al/~alias", "https://shz.al/~alias/",
                    "HTTPS://SHZ.AL/~a+b_c-1[]*$=@,;/", "https://shz.al:443/~name"):
            self.assertTrue(agent.is_shzal_hub_alias(raw), raw)
            self.assertIsNone(agent.shzal_hub_alias_error(raw), raw)
        for raw in ("https://shz.al.evil/~alias", "https://other.test/~alias",
                    "https://shz.al/path"):
            self.assertFalse(agent.is_shzal_hub_alias(raw), raw)
            self.assertIsNone(agent.shzal_hub_alias_error(raw), raw)

    def test_invalid_alias_rejected_before_request(self):
        invalid = ("http://shz.al/~alias", "ftp://shz.al/~alias", "ws://shz.al/~alias",
                   "https://shz.al/~ab", "https://shz.al/~",
                   "https://shz.al/~alias:key", "https://shz.al/~ali%20as",
                   "https://user@shz.al/~alias", "https://shz.al:8443/~alias",
                   "https://shz.al:65536/~alias", "https://shz.al:/~alias",
                   "https://shz.al:999999999999999999999999/~alias",
                   "https://shz.al/~alias\\path", "https://shz.al\\@evil.test/~alias",
                   "https:shz.al/~alias", "https://shz.al/~abc/./def",
                   "https://shz.al/~al\tias", "https://shz.al/~al\nrias",
                   "https://shz.al /~alias", "https://shz.al/~alias\x00",
                   "https://shz.al/~alias?x=1", "https://shz.al/~alias?",
                   "https://shz.al/~alias#frag", "https://shz.al/~alias#")
        for raw in invalid:
            with self.subTest(raw=raw):
                self.assertTrue(agent.is_shzal_hub_alias(raw), raw)
                self.assertIsNotNone(agent.shzal_hub_alias_error(raw))

    def test_config_and_normalization_preserve_alias_trailing_slash(self):
        alias = "https://shz.al/~alias/"
        self.assertEqual(agent.normalize_hub_url(alias), alias)
        self.assertEqual(agent.normalize_hub_url("https://hub.test///"), "https://hub.test")
        env = dict(os.environ, KHUB=alias)
        output = subprocess.check_output(
            [sys.executable, "-c", "import agent; print(agent.Config.KHUB)"],
            cwd=ROOT / "py", env=env, text=True,
        )
        self.assertEqual(output.strip(), alias)

    def test_resolved_url_validation(self):
        valid = {
            "https://hub.test": "https://hub.test",
            " https://hub.test/prefix/// \n": "https://hub.test/prefix",
            "http://127.0.0.1:8080/base/": "http://127.0.0.1:8080/base",
            "https://[::1]:9443/hub": "https://[::1]:9443/hub",
        }
        for raw, want in valid.items():
            with self.subTest(raw=raw):
                self.assertEqual(agent.validate_resolved_hub_url(raw), want)
        invalid = ("", "<html>hub</html>", "https://one.test\nhttps://two.test",
                   "ftp://hub.test", "HTTPS://hub.test", "https://hub.test/a b",
                   "https://hub.test/a\\b", "https://hub.test/a\x00b",
                   "https://hub.test/a\x85b", "https://user@hub.test",
                   "https://hub.test?x=1", "https://hub.test?", "https://hub.test#x",
                   "https://hub.test#", "https://hub.test:", "https://hub.test:0",
                   "https://hub.test:65536", "https://hub.test:bad",
                   "https://bad_host.test", "https://hub..test",
                   "https://hub.test/" + "a" * 600)
        for raw in invalid:
            with self.subTest(raw=raw):
                with self.assertRaises(ValueError):
                    agent.validate_resolved_hub_url(raw)


def _alias_reply(value="https://hub.test", status=200, headers=None, body=None):
    if headers is None:
        headers = {"Content-Type": "text/plain; charset=utf-8"}
    return status, headers, value.encode("utf-8") if body is None else body


class ShzalHubResolverTest(unittest.TestCase):
    def test_request_contract_and_path_prefix(self):
        async def run():
            mgr = _make_manager(hub_url="https://shz.al/~alias")
            calls = []
            session = object()

            async def request(current_session, method, url, headers, body):
                calls.append((current_session, method, url, headers, body))
                return _alias_reply(" https://real.test/hub/ \n")

            mgr._request = request
            self.assertEqual(await agent.resolve_shzal_hub_url(session, mgr.hub_url, request),
                             "https://real.test/hub")
            self.assertEqual(calls, [(session, "GET", "https://shz.al/~alias",
                                      {"Accept": "text/plain", "User-Agent": "curl/8.5.0",
                                       "Accept-Encoding": "identity"}, None)])
        asyncio.run(run())

    def test_response_rejection_matrix(self):
        cases = (
            _alias_reply(status=301), _alias_reply(status=404),
            _alias_reply(headers={"Content-Type": "text/html"}),
            _alias_reply(headers={}),
            _alias_reply(headers={"Content-Type": "text/plain", "Content-Encoding": "gzip"}),
            _alias_reply(body=b""), _alias_reply(body=b"<html>hub</html>"),
            _alias_reply(body=b"https://one.test\nhttps://two.test"),
            _alias_reply(body=b"https://hub.test/\xff"),
            _alias_reply(body=b"x" * 4097),
        )

        async def run():
            for index, response in enumerate(cases):
                with self.subTest(index=index):
                    async def request(session, method, url, headers, body, response=response):
                        return response
                    with self.assertRaises(ConnectionError):
                        await agent.resolve_shzal_hub_url(object(), "https://shz.al/~alias", request)
        asyncio.run(run())

    def test_4096_byte_boundary(self):
        url = b"https://hub.test"
        padded = url + b" " * (4096 - len(url))

        async def run():
            async def request(session, method, alias, headers, body):
                return _alias_reply(body=padded)
            self.assertEqual(await agent.resolve_shzal_hub_url(object(), "https://shz.al/~alias", request),
                             url.decode())
        asyncio.run(run())

    def test_production_session_options_and_bounded_read(self):
        url = "https://hub.test"
        captured = {}

        class _Content:
            def __init__(self):
                self.body = b"x" * 4097
                self.reads = []

            async def read(self, size):
                self.reads.append(size)
                out, self.body = self.body[:size], self.body[size:]
                return out

        class _Response:
            status = 200
            headers = {"Content-Type": "text/plain"}

            def __init__(self):
                self.content = _Content()

            async def __aenter__(self):
                return self

            async def __aexit__(self, *exc):
                return False

        response = _Response()

        class _Session:
            def get(self, alias, **kwargs):
                captured.update(alias=alias, kwargs=kwargs)
                return response

        async def run():
            with self.assertRaisesRegex(ConnectionError, "4096"):
                await agent.resolve_shzal_hub_url(_Session(), "https://shz.al/~alias")
        asyncio.run(run())
        self.assertEqual(captured["alias"], "https://shz.al/~alias")
        self.assertIs(captured["kwargs"]["allow_redirects"], False)
        self.assertIs(captured["kwargs"]["auto_decompress"], False)
        self.assertEqual(captured["kwargs"]["headers"]["Accept-Encoding"], "identity")
        self.assertEqual(captured["kwargs"]["timeout"].total, 15)
        self.assertEqual(response.content.reads, [4097])

    def test_management_url_never_requests(self):
        async def run():
            async def request(*args):
                self.fail("management URL must not be requested")
            with self.assertRaises(ConnectionError):
                await agent.resolve_shzal_hub_url(object(), "https://shz.al/~alias:key", request)
        asyncio.run(run())


class ShzalHubManagerTest(unittest.TestCase):
    def test_direct_hub_bypasses_alias_request(self):
        async def run():
            mgr = _make_manager()
            requests = []
            ws_urls = []

            async def request(*args):
                requests.append(args)
                return _alias_reply()

            def factory(session, url):
                ws_urls.append(url)
                return _FakeWsCm(_FakeWS())

            mgr._request = request
            mgr._ws_factory = factory
            with self.assertRaises(ConnectionError):
                await mgr._connect_once(None)
            self.assertEqual(requests, [])
            self.assertEqual(ws_urls, ["ws://hub.test/tunnel"])
            self.assertEqual(mgr.snapshot()["resolved_hub"], "http://hub.test")
        asyncio.run(run())

    def test_alias_snapshot_and_registration_use_resolved_hub(self):
        async def run():
            mgr = _make_manager(hub_url="https://shz.al/~alias")
            initial = mgr.snapshot()
            self.assertEqual(initial["hub"], "https://shz.al/~alias")
            self.assertIsNone(initial["resolved_hub"])
            self.assertEqual(initial["url"], "https://shz.al/~alias/demo1")
            ws_urls = []
            ws = _FakeWS()

            async def request(*args):
                return _alias_reply("https://real.test/hub/")

            def factory(session, url):
                ws_urls.append(url)
                return _FakeWsCm(ws)

            mgr._request = request
            mgr._ws_factory = factory
            with self.assertRaises(ConnectionError):
                await mgr._connect_once(None)
            snap = mgr.snapshot()
            self.assertEqual(ws_urls, ["wss://real.test/hub/tunnel"])
            self.assertEqual(ws.sent[0]["public_url"], "https://real.test/hub")
            self.assertEqual(snap["hub"], "https://shz.al/~alias")
            self.assertEqual(snap["resolved_hub"], "https://real.test/hub")
            self.assertEqual(snap["public_url"], "https://real.test/hub")
            self.assertEqual(snap["url"], "https://real.test/hub/demo1")
        asyncio.run(run())

    def test_public_url_override_does_not_skip_dial_resolution(self):
        async def run():
            with mock.patch.object(agent.Config, "KHUB_PUBLIC_URL", "https://public.test/gw"):
                mgr = _make_manager(hub_url="https://shz.al/~alias")
            requests = []
            ws = _FakeWS()

            async def request(*args):
                requests.append(args)
                return _alias_reply("https://real.test/hub")

            mgr._request = request
            mgr._ws_factory = lambda session, url: _FakeWsCm(ws)
            with self.assertRaises(ConnectionError):
                await mgr._connect_once(None)
            self.assertEqual(len(requests), 1)
            self.assertEqual(ws.sent[0]["public_url"], "https://public.test/gw")
            self.assertEqual(mgr.snapshot()["resolved_hub"], "https://real.test/hub")
            self.assertEqual(mgr.snapshot()["url"], "https://public.test/gw/demo1")
        asyncio.run(run())

    def test_every_attempt_gets_alias_again_and_recovers(self):
        async def run():
            mgr = _make_manager(hub_url="https://shz.al/~alias", retry_base=0.5)
            values = ["http://127.0.0.1:1", "https://real.test/hub"]
            gets = []
            ws_urls = []
            ws = _FakeWS()

            async def request(*args):
                gets.append(args)
                return _alias_reply(values[len(gets) - 1])

            class _FailCM:
                async def __aenter__(self):
                    raise ConnectionError("dial refused")

                async def __aexit__(self, *exc):
                    return False

            def factory(session, url):
                ws_urls.append(url)
                return _FailCM() if len(ws_urls) == 1 else _FakeWsCm(ws)

            mgr._request = request
            mgr._ws_factory = factory
            with self.assertRaises(ConnectionError):
                await mgr._connect_once(None)
            with self.assertRaises(ConnectionError):
                await mgr._connect_once(None)
            self.assertEqual(len(gets), 2)
            self.assertEqual(ws_urls, ["ws://127.0.0.1:1/tunnel", "wss://real.test/hub/tunnel"])
            self.assertEqual(ws.sent[0]["public_url"], "https://real.test/hub")
        asyncio.run(run())

    def test_failed_refresh_never_dials_last_resolved_hub(self):
        async def run():
            mgr = _make_manager(hub_url="https://shz.al/~alias")
            gets = []
            ws_urls = []

            async def request(*args):
                gets.append(args)
                if len(gets) == 1:
                    return _alias_reply("https://last.test/hub")
                raise OSError("alias unreachable")

            def factory(session, url):
                ws_urls.append(url)
                return _FakeWsCm(_FakeWS())

            mgr._request = request
            mgr._ws_factory = factory
            with self.assertRaises(ConnectionError):
                await mgr._connect_once(None)
            with self.assertRaises(ConnectionError):
                await mgr._connect_once(None)
            self.assertEqual(len(gets), 2)
            self.assertEqual(ws_urls, ["wss://last.test/hub/tunnel"])
            self.assertEqual(mgr.snapshot()["resolved_hub"], "https://last.test/hub")
        asyncio.run(run())

    def test_invalid_alias_never_gets_or_dials(self):
        async def run():
            for alias in ("https://shz.al/~alias:key", "https://shz.al\\@evil.test/~alias",
                          "https:shz.al/~alias", "https://shz.al/~al\tias"):
                with self.subTest(alias=alias):
                    mgr = _make_manager(hub_url=alias)
                    calls = []

                    async def request(*args):
                        calls.append(args)
                        return _alias_reply()

                    def factory(*args):
                        calls.append(args)
                        return _FakeWsCm(_FakeWS())

                    mgr._request = request
                    mgr._ws_factory = factory
                    with self.assertRaises(ConnectionError):
                        await mgr._connect_once(None)
                    self.assertEqual(calls, [])
        asyncio.run(run())


class HubTunnelManagerSnapshotTest(unittest.TestCase):
    def test_snapshot_fields(self):
        mgr = _make_manager(ports=[9090, 7788])
        snap = mgr.snapshot()
        for key in ("tunnel_status", "source", "hub", "resolved_hub", "kname", "url", "public_url", "ports",
                    "consecutive_failures", "last_error", "last_error_at",
                    "last_connected_at", "relay_count"):
            self.assertIn(key, snap, key)
        self.assertEqual(snap["kname"], "demo1")
        self.assertEqual(snap["ports"], [7788, 9090])  # 排序输出
        self.assertEqual(snap["hub"], "http://hub.test")
        self.assertEqual(snap["resolved_hub"], "http://hub.test")
        self.assertEqual(snap["url"], "http://hub.test/demo1")
        self.assertEqual(snap["public_url"], "http://hub.test")  # 缺省自动上报 KHUB 派生基址 (0.6.6 续批二)
        self.assertIn(snap["tunnel_status"], ("alive", "reconnecting", "failed"))


class HubPublicUrlTest(unittest.TestCase):
    """KHUB_PUBLIC_URL 公网基址修正值 (0.6.6 续批, docs/API.MD 19.2):
    校验契约对齐 hub 端 ValidatePublicURL; 上报经注册帧 public_url 字段;
    snapshot url 以上报值为基。"""

    def test_validation_contract(self):
        # 合法 (http/https, 可带路径前缀) / 空值合法缺省 / 非法 (scheme/空白/超长)
        for raw in ("https://pub.test", "http://pub.test:9000", "https://gw.test/hub"):
            self.assertIsNone(agent.hub_public_url_error(raw), raw)
        self.assertIsNone(agent.hub_public_url_error(""))        # 未配置 = 合法缺省
        self.assertIsNone(agent.hub_public_url_error(None))
        for raw in ("ftp://pub.test", "javascript:alert(1)", "pub.test", "https://pu b.test",
                    "https://" + "a" * 600 + ".test"):
            self.assertIsNotNone(agent.hub_public_url_error(raw), raw)

    def test_snapshot_url_uses_public_url_when_set(self):
        with mock.patch.object(agent.Config, "KHUB_PUBLIC_URL", "https://pub.test/hub"):
            mgr = _make_manager()
        self.assertEqual(mgr.public_url, "https://pub.test/hub")
        snap = mgr.snapshot()
        self.assertEqual(snap["public_url"], "https://pub.test/hub")
        self.assertEqual(snap["url"], "https://pub.test/hub/demo1")  # url 以修正值为基

    def test_invalid_config_treated_as_unset(self):
        with mock.patch.object(agent.Config, "KHUB_PUBLIC_URL", "javascript:alert(1)"):
            mgr = _make_manager()
        self.assertIsNone(mgr.public_url)                        # 非法 → 覆盖值弃用
        self.assertEqual(mgr.snapshot()["url"], "http://hub.test/demo1")  # 回落 hub 基址

    def test_register_frame_carries_public_url(self):
        async def run():
            with mock.patch.object(agent.Config, "KHUB_PUBLIC_URL", "https://pub.test/hub"):
                mgr = _make_manager()
            ws = _FakeWS()
            mgr._ws_factory = lambda session, url: _FakeWsCm(ws)
            # _FakeWS.receive 返回 CLOSE 类型 → 注册应答异常抛 ConnectionError (首帧已捕获)
            with self.assertRaises(ConnectionError):
                await mgr._connect_once(None)
            return ws.sent

        sent = asyncio.run(run())
        reg = sent[0]
        self.assertEqual(reg["t"], "register")
        self.assertEqual(reg["kname"], "demo1")
        self.assertEqual(reg["public_url"], "https://pub.test/hub")

    def test_register_frame_defaults_public_url_to_hub(self):
        async def run():
            mgr = _make_manager()  # KHUB_PUBLIC_URL 未配置
            ws = _FakeWS()
            mgr._ws_factory = lambda session, url: _FakeWsCm(ws)
            with self.assertRaises(ConnectionError):
                await mgr._connect_once(None)
            return ws.sent

        sent = asyncio.run(run())
        self.assertEqual(sent[0]["public_url"], "http://hub.test")  # 缺省自动上报 KHUB 派生基址 (0.6.6 续批二)


class HubBackoffTest(unittest.TestCase):
    def test_exponential_backoff_capped(self):
        mgr = _make_manager(retry_base=2.0, retry_max=60.0)
        mgr.consecutive_failures = 1
        self.assertEqual(mgr._backoff(), 2.0)
        mgr.consecutive_failures = 2
        self.assertEqual(mgr._backoff(), 4.0)
        mgr.consecutive_failures = 3
        self.assertEqual(mgr._backoff(), 8.0)
        mgr.consecutive_failures = 5
        self.assertEqual(mgr._backoff(), 32.0)
        mgr.consecutive_failures = 6
        self.assertEqual(mgr._backoff(), 60.0)  # 64 已超上限 → 封顶 MAX
        mgr.consecutive_failures = 10
        self.assertEqual(mgr._backoff(), 60.0)  # 封顶 MAX


class HandleReqTest(unittest.TestCase):
    """req 分发: api/port 模式回环、白名单、超限、异常 → err 帧"""

    def setUp(self):
        self.mgr = _make_manager(ports=[7788])
        self.ws = _FakeWS()
        self.session = object()
        self.requests = []
        # 0.6.7 续批六分组口径: HUB 组聚合 (env KHUB_PORTS ∪ hub 运行时), 测试用运行时字典替代
        patcher = mock.patch.object(agent, "_PROXY_RUNTIME_PORTS", {"hub": {7788, 8080}, "local": set()})
        patcher.start()
        self.addCleanup(patcher.stop)

        async def fake_request(session, method, url, headers, body):
            self.requests.append({"method": method, "url": url, "headers": headers, "body": body})
            return 200, {"Content-Type": "application/json", "X-Encrypted": "true"}, b'{"ok":1}'

        self.mgr._request = fake_request

    def _run(self, coro):
        return asyncio.run(coro)

    def test_api_mode_roundtrip(self):
        frame = {
            "t": "req", "id": 7, "mode": "api", "method": "get", "path": "/api/baseinfo",
            "query": "a=1", "headers": {"Content-Type": "application/json", "X-Kisama-Hub-Any": "x"},
            "body_b64": "",
        }
        self._run(self.mgr._handle_req(self.session, self.ws, frame))
        self.assertEqual(len(self.requests), 1)
        r = self.requests[0]
        self.assertEqual(r["method"], "GET")  # 方法大写归一
        self.assertEqual(r["url"], "http://127.0.0.1:58000/api/baseinfo?a=1")
        self.assertNotIn("x-kisama-hub-any", r["headers"])
        self.assertEqual(r["headers"]["content-type"], "application/json")

        res = self.ws.sent[0]
        self.assertEqual(res["t"], "res")
        self.assertEqual(res["id"], 7)
        self.assertEqual(res["status"], 200)
        self.assertEqual(res["headers"]["X-Encrypted"], "true")
        import base64 as _b64
        self.assertEqual(_b64.b64decode(res["body_b64"]), b'{"ok":1}')

    def test_port_mode_allowed(self):
        frame = {"t": "req", "id": 1, "mode": "port", "port": 7788, "method": "GET",
                 "path": "/dir/file", "query": "q=1", "headers": {}, "body_b64": ""}
        self._run(self.mgr._handle_req(self.session, self.ws, frame))
        self.assertEqual(self.requests[0]["url"], "http://127.0.0.1:7788/dir/file?q=1")
        self.assertEqual(self.ws.sent[0]["t"], "res")

    def test_port_mode_denied_no_connection_attempt(self):
        frame = {"t": "req", "id": 2, "mode": "port", "port": 9999, "method": "GET",
                 "path": "/", "query": "", "headers": {}, "body_b64": ""}
        self._run(self.mgr._handle_req(self.session, self.ws, frame))
        self.assertEqual(self.requests, [])  # 白名单拒绝不发起连接 (无扫描侧信道)
        err = self.ws.sent[0]
        self.assertEqual(err["t"], "err")
        self.assertEqual(err["id"], 2)
        self.assertEqual(err["code"], "port_not_allowed")

    def test_port_mode_disabled_when_no_ports(self):
        mgr = _make_manager(ports=[])
        seen = []

        async def fake_request(session, method, url, headers, body):
            seen.append(url)
            return 200, {}, b""

        mgr._request = fake_request
        frame = {"t": "req", "id": 3, "mode": "port", "port": 80, "method": "GET",
                 "path": "/", "query": "", "headers": {}, "body_b64": ""}
        asyncio.run(mgr._handle_req(object(), self.ws, frame))
        self.assertEqual(seen, [])
        self.assertEqual(self.ws.sent[0]["code"], "port_not_allowed")

    def test_response_too_large(self):
        async def fake_request(session, method, url, headers, body):
            return 200, {}, b"x" * (self.mgr._max_body + 1)

        self.mgr._request = fake_request
        frame = {"t": "req", "id": 4, "mode": "api", "method": "GET", "path": "/api/file/download",
                 "query": "", "headers": {}, "body_b64": ""}
        self._run(self.mgr._handle_req(self.session, self.ws, frame))
        self.assertEqual(self.ws.sent[0]["code"], "body_too_large")

    def test_loopback_exception_maps_to_err(self):
        async def fake_request(session, method, url, headers, body):
            raise OSError("connection refused")

        self.mgr._request = fake_request
        frame = {"t": "req", "id": 5, "mode": "api", "method": "GET", "path": "/api/exec",
                 "query": "", "headers": {}, "body_b64": ""}
        self._run(self.mgr._handle_req(self.session, self.ws, frame))
        err = self.ws.sent[0]
        self.assertEqual(err["t"], "err")
        self.assertEqual(err["code"], "loopback_unreachable")
        self.assertIn("connection refused", err["message"])

    def test_relay_count_increments(self):
        frame = {"t": "req", "id": 6, "mode": "api", "method": "GET", "path": "/api/status",
                 "query": "", "headers": {}, "body_b64": ""}
        self._run(self.mgr._handle_req(self.session, self.ws, frame))
        self.assertEqual(self.mgr.snapshot()["relay_count"], 1)


class HubWSStreamDialFailTest(unittest.TestCase):
    """ws_open → 本地拨号失败 → ws_ack ok:false (hub 据此以 3001 关客户端)"""

    def test_dial_failure_sends_nack(self):
        mgr = _make_manager(ports=[])

        def failing_factory(session, url):
            self.captured_url = url

            class _FailCM:
                async def __aenter__(self):
                    raise OSError("dial refused")

                async def __aexit__(self, *exc):
                    return False

            return _FailCM()

        self.captured_url = None
        mgr._ws_factory = failing_factory
        ws = _FakeWS()
        stream = agent.HubWSStream(mgr, object(), ws, 42, {"t": "ws_open", "id": 42,
                                                           "path": "/api/ws/terminal", "query": "request_id=x"})
        asyncio.run(stream._run())
        self.assertEqual(len(ws.sent), 1)
        ack = ws.sent[0]
        self.assertEqual(ack["t"], "ws_ack")
        self.assertEqual(ack["id"], 42)
        self.assertFalse(ack["ok"])
        self.assertIn("dial refused", ack["message"])


class HubWSStreamPortModeTest(unittest.TestCase):
    """端口反代 WS 模式 (0.6.6 续批): ws_open.port>0 → 白名单校验 + 回环拨目标端口"""

    def test_port_not_in_whitelist_denied_without_dial(self):
        mgr = _make_manager(ports=[])  # 白名单空 → 7788 拒绝
        patcher = mock.patch.object(agent, "_PROXY_RUNTIME_PORTS", {"hub": set(), "local": set()})
        patcher.start()
        self.addCleanup(patcher.stop)
        ws = _FakeWS()
        stream = agent.HubWSStream(mgr, object(), ws, 9, {"t": "ws_open", "id": 9,
                                                          "port": 7788, "path": "/x", "query": ""})
        asyncio.run(stream._run())
        self.assertEqual(len(ws.sent), 1)
        ack = ws.sent[0]
        self.assertEqual(ack["t"], "ws_ack")
        self.assertFalse(ack["ok"])
        self.assertIn("7788", ack["message"])

    def test_port_mode_dials_target_port(self):
        mgr = _make_manager(ports=[7788])
        patcher = mock.patch.object(agent, "_PROXY_RUNTIME_PORTS", {"hub": {7788}, "local": set()})
        patcher.start()
        self.addCleanup(patcher.stop)
        captured = {}

        def capture_factory(session, url):
            captured["url"] = url

            class _FailCM:
                async def __aenter__(self):
                    raise OSError("dial refused")

                async def __aexit__(self, *exc):
                    return False

            return _FailCM()

        mgr._ws_factory = capture_factory
        ws = _FakeWS()
        stream = agent.HubWSStream(mgr, object(), ws, 10, {"t": "ws_open", "id": 10,
                                                           "port": 7788, "path": "/echo", "query": "a=1"})
        asyncio.run(stream._run())
        self.assertEqual(captured["url"], "ws://127.0.0.1:7788/echo?a=1")
        # 拨号失败 → nack (模拟目标端口无 WS 服务)
        self.assertFalse(ws.sent[0]["ok"])

    def test_api_mode_dials_agent_port(self):
        mgr = _make_manager(ports=[])
        captured = {}

        def capture_factory(session, url):
            captured["url"] = url

            class _FailCM:
                async def __aenter__(self):
                    raise OSError("dial refused")

                async def __aexit__(self, *exc):
                    return False

            return _FailCM()

        mgr._ws_factory = capture_factory
        ws = _FakeWS()
        stream = agent.HubWSStream(mgr, object(), ws, 11, {"t": "ws_open", "id": 11,
                                                           "path": "/api/ws/terminal", "query": ""})
        asyncio.run(stream._run())
        self.assertEqual(captured["url"], "ws://127.0.0.1:58000/api/ws/terminal")  # api 模式回环自身


class _FakeHubManager:
    """Registrar 测试替身: 拦截 HubTunnelManager 构造, wait_connected 行为按 result 配置"""

    instances = []

    def __init__(self, hub_url, kname, port, ports=None, source="startup"):
        self.hub_url = hub_url
        self.kname = (kname or "").lower()
        self.ports = list(ports or [])
        self.source = source
        self.result = (True, None)      # (ok, err) — 测试按场景覆盖
        self.stopped = False
        _FakeHubManager.instances.append(self)

    def start(self):
        pass

    def stop(self):
        self.stopped = True

    def wait_connected(self, timeout=15.0):
        return self.result

    def snapshot(self):
        return {"tunnel_status": "alive", "source": self.source, "hub": self.hub_url,
                "kname": self.kname, "url": self.hub_url + "/" + self.kname,
                "ports": sorted(self.ports), "consecutive_failures": 0,
                "last_error": None, "last_error_at": None,
                "last_connected_at": None, "relay_count": 0}


class HubTunnelRegistrarTest(unittest.TestCase):
    """HubTunnelRegistrar (0.6.6 续批): 多实例注册表 / 错误分类 / 保留语义"""

    def setUp(self):
        _FakeHubManager.instances = []
        self.patcher = mock.patch.object(agent, "HubTunnelManager", _FakeHubManager)
        self.patcher.start()
        self.registrar = agent.HubTunnelRegistrar()

    def tearDown(self):
        self.patcher.stop()
        _FakeHubManager.instances = []

    def _set_result(self, kname, result):
        for m in _FakeHubManager.instances:
            if m.kname == kname:
                m.result = result

    def test_register_success_dynamic(self):
        snap, code, msg = self.registrar.register("https://hub.test", "demo1", ports=[7788], source="dynamic")
        self.assertIsNone(code)
        self.assertEqual(snap["kname"], "demo1")
        self.assertEqual(snap["source"], "dynamic")
        self.assertEqual(len(self.registrar.list()), 1)
        self.assertEqual(self.registrar.list()[0]["ports"], [7788])

    def test_register_preserves_alias_trailing_slash(self):
        alias = "https://shz.al/~alias/"
        snap, code, msg = self.registrar.register(alias, "demo1", ports=[], source="dynamic")
        self.assertIsNone(code)
        self.assertEqual(_FakeHubManager.instances[0].hub_url, alias)
        self.assertEqual(snap["hub"], alias)

    def test_register_duplicate_kname_conflict(self):
        self.registrar.register("https://hub.test", "demo1", ports=[])
        snap, code, msg = self.registrar.register("https://hub2.test", "Demo1", ports=[])  # 大小写归一冲突
        self.assertEqual(code, "name_taken")
        self.assertNotIn("hub2.test", [m.hub_url for m in _FakeHubManager.instances if m.kname == "demo1" and m.hub_url == "https://hub2.test"])

    def test_register_invalid_name(self):
        snap, code, msg = self.registrar.register("https://hub.test", "api", ports=[])
        self.assertEqual(code, "invalid_name")
        self.assertEqual(_FakeHubManager.instances, [], "非法 KNAME 不应构造 manager")
        self.assertEqual(self.registrar.list(), [])

    def test_register_permanent_error_not_retained(self):
        self._set_result = None
        # 预配置: 之后构造的 manager 返回 name_taken
        orig_init = _FakeHubManager.__init__

        def init_with_err(self, *a, **kw):
            orig_init(self, *a, **kw)
            self.result = (False, agent.HubRegisterError("name_taken", "KNAME 已被活跃连接占用"))

        with mock.patch.object(_FakeHubManager, "__init__", init_with_err):
            snap, code, msg = self.registrar.register("https://hub.test", "taken1", ports=[])
        self.assertEqual(code, "name_taken")
        self.assertTrue(all(m.stopped for m in _FakeHubManager.instances if m.kname == "taken1"))
        self.assertEqual(self.registrar.list(), [], "永久性错误不保留注册项")

    def test_register_unreachable_retained(self):
        orig_init = _FakeHubManager.__init__

        def init_with_timeout(self, *a, **kw):
            orig_init(self, *a, **kw)
            self.result = (False, TimeoutError("register not confirmed"))

        with mock.patch.object(_FakeHubManager, "__init__", init_with_timeout):
            snap, code, msg = self.registrar.register("https://hub.test", "slow1", ports=[])
        self.assertEqual(code, "unreachable")
        self.assertEqual(len(self.registrar.list()), 1, "网络类失败保留注册项继续退避")
        self.assertEqual(self.registrar.list()[0]["kname"], "slow1")

    def test_unregister_success_and_404(self):
        self.registrar.register("https://hub.test", "demo1", ports=[])
        snap = self.registrar.unregister("demo1")
        self.assertEqual(snap["kname"], "demo1")
        self.assertTrue(all(m.stopped for m in _FakeHubManager.instances))
        self.assertIsNone(self.registrar.unregister("demo1"), "重复注销应返回 None (404 语义)")
        self.assertIsNone(self.registrar.unregister("never-existed"))

    def test_stop_all_clears_registry(self):
        self.registrar.register("https://hub.test", "a1", ports=[])
        self.registrar.register("https://hub.test", "a2", ports=[])
        self.registrar.stop_all()
        self.assertEqual(self.registrar.list(), [])
        self.assertTrue(all(m.stopped for m in _FakeHubManager.instances))


class WaitConnectedTest(unittest.TestCase):
    """真 HubTunnelManager 的 wait_connected (不经 _make_manager fake — 该类 patch 后 wait_connected 不读状态)"""

    def _mgr(self):
        mgr = agent.HubTunnelManager("https://hub.test", "wc1", 59999, ports=[])
        self.addCleanup(lambda: mgr.stop())
        return mgr

    def test_alive_returns_ok(self):
        mgr = self._mgr()
        mgr.status = "alive"
        self.assertEqual(mgr.wait_connected(timeout=1.5), (True, None))

    def test_register_error_wins_over_status(self):
        mgr = self._mgr()
        mgr.status = "reconnecting"
        mgr._register_error = agent.HubRegisterError("name_taken", "occupied")
        ok, err = mgr.wait_connected(timeout=1.5)
        self.assertFalse(ok)
        self.assertIsInstance(err, agent.HubRegisterError)
        self.assertEqual(err.code, "name_taken")

    def test_timeout_when_no_error_and_not_alive(self):
        mgr = self._mgr()
        ok, err = mgr.wait_connected(timeout=1.2)
        self.assertFalse(ok)
        self.assertIsInstance(err, TimeoutError)


if __name__ == "__main__":
    unittest.main(verbosity=2)
