#!/usr/bin/env python3
"""本地端口反代路由 /api/proxy (0.6.7, docs/API.MD 二十) 离线单元测试。

覆盖:
1. 共享回环转发核心 loopback_relay_request (hub req 帧与本地路由共用一份实现):
   - 放行转发: method/path/query/headers 保真, x-forwarded-* 剥除后按 forwarded_for 注入
   - 白名单拒绝: port_not_allowed 且不发起连接 (无端口扫描侧信道, 与 hub 同语义)
   - whitelist=None (api 模式): 跳过白名单直接回环
   - 请求体超限 / 响应体超限 → body_too_large
   - 回环不可达 → loopback_unreachable
   - request_fn 注入缝透传 (HubTunnelManager._request 同一缝)
2. 本地路由 handler proxy_port_relay:
   - 非法端口 (非数字/越界) → 404 invalid_port
   - 未放行 → 403 port_not_allowed
   - agent 认证头剥离 (x-nonce/x-auth-token 等不透传上游服务)
   - 成功回写 status/headers/body, content-length 由框架按实长重算
3. 路由注册: /api/proxy/{port} 与 /api/proxy/{port}/{rest:path} 全方法注册存在
4. 中间件响应加密豁免: /api/proxy/* 响应原样透传 (不加密不改头), 对照路径仍加密
5. 运行时白名单 set/merge (单一白名单口径): 整体覆盖 vs 只增并入, 同一清洗规则
6. POST /api/hub 注册端口并入: 注册项成立 (成功/unreachable) 即并入, 永久拒绝不并入
7. 同路径 upgrade 嗅探 (仅 py/js): /api/proxy/{port} 同路径 WS 透传, 与 HTTP 反代共存

回环用真实 aiohttp 服务 (127.0.0.1 随机端口), 不依赖外网。
"""

import asyncio
import json
import socket
import sys
import unittest
from pathlib import Path
from types import SimpleNamespace
from unittest import mock

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "py"))

import agent  # noqa: E402
import aiohttp  # noqa: E402
from aiohttp import web  # noqa: E402


def _free_port():
    s = socket.socket()
    s.bind(("127.0.0.1", 0))
    port = s.getsockname()[1]
    s.close()
    return port


class _EchoUpstream:
    """回环 echo 上游: 记录收到的请求, /big 返回 200 字节大响应"""

    def __init__(self):
        self.requests = []
        self.port = None
        self._runner = None

    async def __aenter__(self):
        app = web.Application()
        app.router.add_route("*", "/{tail:.*}", self._handle)
        self._runner = web.AppRunner(app)
        await self._runner.setup()
        site = web.TCPSite(self._runner, "127.0.0.1", 0)
        await site.start()
        self.port = site._server.sockets[0].getsockname()[1]
        return self

    async def __aexit__(self, *exc):
        await self._runner.cleanup()

    async def _handle(self, request):
        body = await request.read()
        self.requests.append({
            "method": request.method,
            "path": request.path,
            "query": request.query_string,
            "headers": dict(request.headers),
            "body": body,
        })
        if request.path == "/big":
            return web.Response(status=200, body=b"x" * 200)
        return web.Response(status=200, body=b"echo:" + body, headers={"x-upstream": "yes"})


def _make_request(method="GET", path="/api/proxy/1/x", query_string=b"", headers=None, body=b"",
                  client=("203.0.113.9", 12345), session=None):
    """构造直调 handler 的最小 Request (scope 携带 fake app.state)"""
    headers = headers or {}
    raw_headers = [(k.lower().encode("latin-1"), v.encode("latin-1")) for k, v in headers.items()]
    scope = {
        "type": "http", "asgi": {"version": "3.0"}, "http_version": "1.1",
        "method": method, "scheme": "http", "path": path, "raw_path": path.encode("latin-1"),
        "query_string": query_string, "headers": raw_headers,
        "client": client, "server": ("127.0.0.1", 58000),
        "app": SimpleNamespace(state=SimpleNamespace(loopback_session=session)),
    }

    async def receive():
        return {"type": "http.request", "body": body, "more_body": False}

    return agent.Request(scope, receive=receive)


def _json_of(resp):
    return json.loads(resp.body)


class LoopbackRelayCoreTests(unittest.TestCase):
    """共享回环转发核心 loopback_relay_request (一份实现两处消费)"""

    def test_allowed_forwards_with_header_filter_and_xff(self):
        async def run():
            async with _EchoUpstream() as up, agent.aiohttp.ClientSession(auto_decompress=False) as session:
                status, resp_headers, resp_body = await agent.loopback_relay_request(
                    session, port=up.port, whitelist=(up.port,), method="POST",
                    path="/alpha", query="a=1&b=2",
                    headers={"x-custom": "v1", "host": "evil.example", "connection": "close",
                             "x-forwarded-for": "9.9.9.9", "x-kisama-hub-x": "no"},
                    body=b"hello", relay_timeout=5.0, max_body=65536,
                    forwarded_for="203.0.113.9")
                return status, resp_headers, resp_body, up.requests[0]
        status, resp_headers, resp_body, seen = asyncio.run(run())
        self.assertEqual(status, 200)
        self.assertEqual(resp_body, b"echo:hello")
        self.assertEqual({k.lower(): v for k, v in resp_headers.items()}.get("x-upstream"), "yes")
        # 上游侧: method/path/query 保真; hop-by-hop 与 host 剥除; x-forwarded-* 剥除后按参数注入
        seen_headers = {k.lower(): v for k, v in seen["headers"].items()}
        self.assertEqual(seen["method"], "POST")
        self.assertEqual(seen["path"], "/alpha")
        self.assertEqual(seen["query"], "a=1&b=2")
        self.assertEqual(seen["body"], b"hello")
        self.assertNotEqual(seen_headers.get("host"), "evil.example")
        self.assertNotIn("connection", seen_headers)
        self.assertNotIn("x-kisama-hub-x", seen_headers)
        self.assertEqual(seen_headers.get("x-forwarded-for"), "203.0.113.9")
        self.assertEqual(seen_headers.get("x-custom"), "v1")

    def test_denied_no_connection(self):
        async def run():
            async with _EchoUpstream() as up, agent.aiohttp.ClientSession(auto_decompress=False) as session:
                with self.assertRaises(agent.LoopbackRelayError) as cm:
                    await agent.loopback_relay_request(
                        session, port=up.port, whitelist=(), method="GET", path="/",
                        query="", headers={}, body=b"", relay_timeout=5.0, max_body=65536)
                self.assertEqual(cm.exception.code, "port_not_allowed")
                return len(up.requests)
        self.assertEqual(asyncio.run(run()), 0)  # 拒绝不发起连接, 无端口扫描侧信道

    def test_api_mode_skips_whitelist(self):
        async def run():
            async with _EchoUpstream() as up, agent.aiohttp.ClientSession(auto_decompress=False) as session:
                status, _, resp_body = await agent.loopback_relay_request(
                    session, port=up.port, whitelist=None, method="GET", path="/only",
                    query="", headers={}, body=b"", relay_timeout=5.0, max_body=65536)
                return status, resp_body, len(up.requests)
        status, resp_body, hits = asyncio.run(run())
        self.assertEqual(status, 200)
        self.assertEqual(resp_body, b"echo:")
        self.assertEqual(hits, 1)

    def test_request_body_too_large(self):
        async def run():
            async with _EchoUpstream() as up, agent.aiohttp.ClientSession(auto_decompress=False) as session:
                with self.assertRaises(agent.LoopbackRelayError) as cm:
                    await agent.loopback_relay_request(
                        session, port=up.port, whitelist=(up.port,), method="POST", path="/",
                        query="", headers={}, body=b"12345", relay_timeout=5.0, max_body=4)
                self.assertEqual(cm.exception.code, "body_too_large")
                return len(up.requests)
        self.assertEqual(asyncio.run(run()), 0)

    def test_response_body_too_large(self):
        async def run():
            async with _EchoUpstream() as up, agent.aiohttp.ClientSession(auto_decompress=False) as session:
                with self.assertRaises(agent.LoopbackRelayError) as cm:
                    await agent.loopback_relay_request(
                        session, port=up.port, whitelist=(up.port,), method="GET", path="/big",
                        query="", headers={}, body=b"", relay_timeout=5.0, max_body=8)
                self.assertEqual(cm.exception.code, "body_too_large")
                return len(up.requests)
        self.assertEqual(asyncio.run(run()), 1)  # 已发起连接后才发现响应超限

    def test_loopback_unreachable(self):
        async def run():
            port = _free_port()  # 无监听端口
            async with agent.aiohttp.ClientSession(auto_decompress=False) as session:
                with self.assertRaises(agent.LoopbackRelayError) as cm:
                    await agent.loopback_relay_request(
                        session, port=port, whitelist=(port,), method="GET", path="/",
                        query="", headers={}, body=b"", relay_timeout=5.0, max_body=65536)
                self.assertEqual(cm.exception.code, "loopback_unreachable")
        asyncio.run(run())

    def test_request_fn_seam(self):
        """注入缝透传: hub _handle_req 经此参数共用核心, 生产恒 None"""
        async def run():
            calls = []

            async def fake_request(session, method, url, headers, body):
                calls.append((method, url, headers, body))
                return 201, {"a": "b"}, b"z"

            status, resp_headers, resp_body = await agent.loopback_relay_request(
                object(), port=7788, whitelist=(7788,), method="PUT", path="/p", query="q=1",
                headers={"host": "x"}, body=b"w", relay_timeout=5.0, max_body=99,
                request_fn=fake_request)
            return status, resp_headers, resp_body, calls
        status, resp_headers, resp_body, calls = asyncio.run(run())
        self.assertEqual((status, resp_headers, resp_body), (201, {"a": "b"}, b"z"))
        self.assertEqual(calls[0][1], "http://127.0.0.1:7788/p?q=1")


class LoopbackRelayStreamTests(unittest.TestCase):
    """流式转发原语 loopback_relay_stream (0.6.7): 响应体不受 MAX_BODY 限制 (SSE/大文件)、
    chunk 逐段到达 (边收边回传)"""

    def _upstream_app(self, big_size):
        app = web.Application()

        async def big(request):
            return web.Response(status=200, body=b"x" * big_size)

        async def sse(request):
            resp = web.StreamResponse(status=200, headers={"Content-Type": "text/event-stream"})
            await resp.prepare(request)
            for i in range(3):
                await resp.write(("data: chunk%d\n\n" % i).encode())
                await asyncio.sleep(0.05)
            await resp.write_eof()
            return resp

        app.router.add_get("/big", big)
        app.router.add_get("/sse", sse)
        return app

    def _start(self, app):
        runner = web.AppRunner(app)
        # 同事件循环内启动; 由用例的 finally 停止

        async def _setup():
            await runner.setup()
            site = web.TCPSite(runner, "127.0.0.1", 0)
            await site.start()
            return runner, site._server.sockets[0].getsockname()[1]

        return runner, _setup

    def test_large_response_not_truncated(self):
        big_size = 3 * 1024 * 1024  # 3MB > 测试 max_body (1MB)

        async def run():
            runner, setup = self._start(self._upstream_app(big_size))
            runner_r, port = await setup()
            try:
                async with agent.aiohttp.ClientSession(auto_decompress=False) as session:
                    status, resp_headers, resp = await agent.loopback_relay_stream(
                        session, port=port, whitelist=(port,), method="GET", path="/big",
                        query="", headers={}, body=b"", relay_timeout=5.0, max_body=1024 * 1024)
                    self.assertEqual(status, 200)
                    chunks = []
                    async for c in resp.content.iter_any():
                        chunks.append(c)
                    body = b"".join(chunks)
                    return len(body)
            finally:
                await runner_r.cleanup()
        self.assertEqual(asyncio.run(run()), big_size)  # 流式: 超过 max_body 不截断

    def test_sse_chunks_arrive_incrementally(self):
        async def run():
            runner, setup = self._start(self._upstream_app(1024))
            runner_r, port = await setup()
            try:
                async with agent.aiohttp.ClientSession(auto_decompress=False) as session:
                    status, resp_headers, resp = await agent.loopback_relay_stream(
                        session, port=port, whitelist=(port,), method="GET", path="/sse",
                        query="", headers={}, body=b"", relay_timeout=5.0, max_body=1024 * 1024)
                    self.assertEqual(status, 200)
                    self.assertEqual(resp_headers.get("Content-Type"), "text/event-stream")
                    marks, count = [], 0
                    async for chunk in resp.content.iter_any():
                        if b"chunk" in chunk:
                            count += 1
                            marks.append(chunk)
                    return count, marks
            finally:
                await runner_r.cleanup()
        count, marks = asyncio.run(run())
        self.assertEqual(count, 3)  # SSE 3 条 chunk 全部到达 (data: chunk0/1/2)
        self.assertTrue(marks[0].startswith(b"data: chunk0"))


class ProxyRouteHandlerTests(unittest.TestCase):
    """本地路由 handler proxy_port_relay 直调 (验签/豁免由中间件层处理, 此处测转发语义)"""

    def test_invalid_port_404(self):
        async def run():
            async with agent.aiohttp.ClientSession(auto_decompress=False) as session:
                req = _make_request(path="/api/proxy/0x99", session=session)
                resp = await agent.proxy_port_relay(req, port="0x99", rest="")
                return resp.status_code, _json_of(resp)["code"]
        status, code = asyncio.run(run())
        self.assertEqual(status, 404)
        self.assertEqual(code, "invalid_port")

    def test_out_of_range_port_404(self):
        async def run():
            async with agent.aiohttp.ClientSession(auto_decompress=False) as session:
                resp = await agent.proxy_port_relay(
                    _make_request(session=session), port="70000", rest="")
                return resp.status_code, _json_of(resp)["code"]
        status, code = asyncio.run(run())
        self.assertEqual(status, 404)
        self.assertEqual(code, "invalid_port")

    def test_not_allowed_403_no_connection(self):
        async def run():
            async with _EchoUpstream() as up, agent.aiohttp.ClientSession(auto_decompress=False) as session:
                req = _make_request(session=session)
                with mock.patch.object(agent.Config, "KPROXY_PORTS", ()):
                    resp = await agent.proxy_port_relay(req, port=str(up.port), rest="x")
                return resp.status_code, _json_of(resp)["code"], len(up.requests)
        status, code, hits = asyncio.run(run())
        self.assertEqual(status, 403)
        self.assertEqual(code, "port_not_allowed")
        self.assertEqual(hits, 0)

    def test_success_strips_auth_headers_and_rewrites_body(self):
        async def run():
            async with _EchoUpstream() as up, agent.aiohttp.ClientSession(auto_decompress=False) as session:
                req = _make_request(
                    method="POST", path="/api/proxy/%d/api/ping" % up.port,
                    query_string=b"q=1", body=b"payload",
                    headers={"x-nonce": "n1", "x-timestamp": "t1", "x-auth-token": "secret",
                             "x-aes-encrypted": "true", "x-encrypted": "true",
                             "x-agent-version": "0.6.7", "x-custom": "keep", "accept": "*/*"},
                    session=session)
                with mock.patch.object(agent.Config, "KPROXY_PORTS", (up.port,)):
                    resp = await agent.proxy_port_relay(req, port=str(up.port), rest="api/ping")
                seen = up.requests[0]
                # handler 流式化 (0.6.7): 从 body_iterator 收集响应体
                chunks = []
                async for c in resp.body_iterator:
                    chunks.append(c.encode("utf-8") if isinstance(c, str) else c)
                return resp, seen, b"".join(chunks)
        resp, seen, body = asyncio.run(run())
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(body, b"echo:payload")
        # 上游侧头统一小写归一后断言 (aiohttp 键名大小写混合, plain dict get 区分大小写)
        seen_headers = {k.lower(): v for k, v in seen["headers"].items()}
        # agent 认证头不透传上游; 业务头保留
        for h in ("x-nonce", "x-timestamp", "x-auth-token", "x-aes-encrypted",
                  "x-encrypted", "x-agent-version"):
            self.assertNotIn(h, seen_headers, h)
        self.assertEqual(seen_headers.get("x-custom"), "keep")
        # x-forwarded-for 注入真实客户端 IP; query 保真
        self.assertEqual(seen_headers.get("x-forwarded-for"), "203.0.113.9")
        self.assertEqual(seen["query"], "q=1")
        self.assertEqual(seen["path"], "/api/ping")
        # 流式响应无 content-length (chunked 语义, content-length 由框架按实长定)
        self.assertIsNone(resp.headers.get("content-length"))

    def test_request_body_too_large_413(self):
        async def run():
            async with _EchoUpstream() as up, agent.aiohttp.ClientSession(auto_decompress=False) as session:
                req = _make_request(method="POST", body=b"12345", session=session)
                with mock.patch.object(agent.Config, "KPROXY_PORTS", (up.port,)), \
                     mock.patch.object(agent.Config, "KISAMA_HUB_MAX_BODY", 4):
                    resp = await agent.proxy_port_relay(req, port=str(up.port), rest="")
                return resp.status_code, _json_of(resp)["code"], len(up.requests)
        status, code, hits = asyncio.run(run())
        self.assertEqual(status, 413)
        self.assertEqual(code, "body_too_large")
        self.assertEqual(hits, 0)

    def test_upstream_down_502(self):
        async def run():
            port = _free_port()
            async with agent.aiohttp.ClientSession(auto_decompress=False) as session:
                req = _make_request(session=session)
                with mock.patch.object(agent.Config, "KPROXY_PORTS", (port,)):
                    resp = await agent.proxy_port_relay(req, port=str(port), rest="")
                return resp.status_code, _json_of(resp)["code"]
        status, code = asyncio.run(run())
        self.assertEqual(status, 502)
        self.assertEqual(code, "loopback_unreachable")


class ProxyRouteRegistrationTests(unittest.TestCase):
    """路由注册存在性与全方法覆盖"""

    def test_routes_registered_all_methods(self):
        found = {}
        for r in agent.app.routes:
            p = getattr(r, "path", None)
            if p and p.startswith("/api/proxy"):
                # FastAPI 对同路径多次 api_route 注册产生多个 route 对象, methods 取并集
                found.setdefault(p, set()).update(getattr(r, "methods", None) or [])
        # 数据面路由 (反代转发): 全方法
        self.assertIn("/api/proxy/{port}", found)
        self.assertIn("/api/proxy/{port}/{rest:path}", found)
        for path in ("/api/proxy/{port}", "/api/proxy/{port}/{rest:path}"):
            self.assertEqual(found[path], {"GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"}, path)
        # 管理面路由 (白名单配置, 0.6.7): 三方法各一, 走验签 (中间件 bypass 排除)
        self.assertEqual(found.get("/api/proxy/config"), {"GET", "POST", "DELETE"})


class ProxyRuntimeWhitelistTests(unittest.TestCase):
    """运行时白名单 set/merge (0.6.7 续批六分组口径): HUB 组/本地组独立,
    整体覆盖 vs 只增并入, 同一清洗规则, 组间互不污染"""

    def setUp(self):
        for grp in (agent.PROXY_GROUP_HUB, agent.PROXY_GROUP_LOCAL):
            agent.proxy_set_runtime_ports(grp, [])

    def tearDown(self):
        for grp in (agent.PROXY_GROUP_HUB, agent.PROXY_GROUP_LOCAL):
            agent.proxy_set_runtime_ports(grp, [])

    def test_merge_unions_and_filters(self):
        agent.proxy_set_runtime_ports("local", [7788])
        agent.proxy_merge_runtime_ports("local", [9090, 7788, 0, 70000, -1, "abc", None, True, "8443"])
        self.assertEqual(agent.proxy_runtime_ports("local"), [7788, 8443, 9090], "并入保留已有, 非法条目过滤")
        self.assertEqual(agent.proxy_effective_ports("local"),
                         sorted(set(agent.Config.KPROXY_PORTS) | {7788, 8443, 9090}),
                         "本地组聚合 = KPROXY_PORTS ∪ 本地运行时")

    def test_groups_isolated(self):
        agent.proxy_set_runtime_ports("hub", [7788])
        agent.proxy_merge_runtime_ports("hub", [9090])
        agent.proxy_set_runtime_ports("local", [3000])
        agent.proxy_merge_runtime_ports("local", [5173])
        self.assertEqual(agent.proxy_runtime_ports("hub"), [7788, 9090], "HUB 组独立存储")
        self.assertEqual(agent.proxy_runtime_ports("local"), [3000, 5173], "本地组独立存储")
        self.assertEqual(agent.proxy_effective_ports("hub"),
                         sorted(set(agent.Config.KHUB_PORTS) | {7788, 9090}),
                         "HUB 组聚合 = KHUB_PORTS ∪ hub 运行时")
        self.assertEqual(agent.proxy_effective_ports("local"),
                         sorted(set(agent.Config.KPROXY_PORTS) | {3000, 5173}),
                         "本地组聚合 = KPROXY_PORTS ∪ 本地运行时")

    def test_set_replaces_merge_adds(self):
        agent.proxy_merge_runtime_ports("hub", [7788])
        agent.proxy_set_runtime_ports("hub", [9090])
        self.assertEqual(agent.proxy_runtime_ports("hub"), [9090], "set 整体覆盖 (POST /api/proxy/config 语义)")
        agent.proxy_merge_runtime_ports("hub", [7788])
        self.assertEqual(agent.proxy_runtime_ports("hub"), [7788, 9090], "merge 只增 (POST /api/hub 注册语义)")

    def test_env_floor_untouched(self):
        hub_before = tuple(agent.Config.KHUB_PORTS)
        local_before = tuple(agent.Config.KPROXY_PORTS)
        agent.proxy_merge_runtime_ports("hub", [7788])
        agent.proxy_set_runtime_ports("local", [9090])
        self.assertEqual(tuple(agent.Config.KHUB_PORTS), hub_before, "set/merge 不得改动 KHUB_PORTS")
        self.assertEqual(tuple(agent.Config.KPROXY_PORTS), local_before, "set/merge 不得改动 KPROXY_PORTS")


class _FakeHubRegistrar:
    """register() 返回预设 code 的桩 (register_hub 端口合并行为验证用)"""

    def __init__(self, code):
        self._code = code

    def register(self, hub_url, kname, ports=None, source="dynamic", wait_timeout=15.0):
        snap = {"kname": kname, "ports": sorted(ports or []), "source": source}
        return (snap, self._code, "" if self._code is None else "boom")


class HubRegisterPortMergeTests(unittest.TestCase):
    """POST /api/hub 注册端口并入 HUB 组运行时白名单 (0.6.7 续批六分组口径):
    注册项成立 (成功/unreachable 退避中) 即并入; 永久拒绝 (invalid_name/name_taken/full) 不并入;
    本地组不受注册影响"""

    def setUp(self):
        for grp in (agent.PROXY_GROUP_HUB, agent.PROXY_GROUP_LOCAL):
            agent.proxy_set_runtime_ports(grp, [])

    def tearDown(self):
        for grp in (agent.PROXY_GROUP_HUB, agent.PROXY_GROUP_LOCAL):
            agent.proxy_set_runtime_ports(grp, [])

    def _register(self, registrar, ports):
        state = SimpleNamespace(hub_registrar=registrar, task_manager=None)
        request = SimpleNamespace(app=SimpleNamespace(state=state))
        payload = agent.HubRegisterRequest(hub="https://hub.test/", kname="k1", ports=ports)
        return asyncio.run(agent.register_hub(request, payload))

    def test_success_merges_ports(self):
        resp = self._register(_FakeHubRegistrar(None), [7788, "9090", 0, 70000])
        self.assertEqual(resp["status"], "ok")
        self.assertEqual(agent.proxy_runtime_ports("hub"), [7788, 9090], "注册端口应并入 HUB 组 (非法条目过滤)")
        self.assertEqual(agent.proxy_runtime_ports("local"), [], "注册不影响本地组")
        self.assertEqual(resp["persisted"], False, "KSTORE 未启用时 persisted=false")

    def test_unreachable_keeps_intent_and_merges(self):
        resp = self._register(_FakeHubRegistrar("unreachable"), [7788])
        self.assertEqual(resp.status_code, 500)
        self.assertEqual(agent.proxy_runtime_ports("hub"), [7788], "网络类失败注册项保留, 端口应并入 HUB 组")

    def test_permanent_reject_does_not_merge(self):
        for code in ("invalid_name", "name_taken", "full"):
            resp = self._register(_FakeHubRegistrar(code), [7788])
            self.assertIn(resp.status_code, (409, 422))
            self.assertEqual(agent.proxy_runtime_ports("hub"), [], f"{code} 永久拒绝不应并入")
            agent.proxy_set_runtime_ports("hub", [])

    def test_no_ports_no_merge(self):
        resp = self._register(_FakeHubRegistrar(None), None)
        self.assertEqual(resp["status"], "ok")
        self.assertEqual(agent.proxy_runtime_ports("hub"), [], "缺省 ports 不改白名单")


class ProxyConfigEndpointTests(unittest.TestCase):
    """/api/proxy/config 三 handler (0.6.7 续批六分组口径): GET 两组快照,
    POST scope 选组整体覆盖 (invalid_scope 422), DELETE 无 scope 清两组 / ?scope= 只清一组"""

    def setUp(self):
        for grp in (agent.PROXY_GROUP_HUB, agent.PROXY_GROUP_LOCAL):
            agent.proxy_set_runtime_ports(grp, [])

    def tearDown(self):
        for grp in (agent.PROXY_GROUP_HUB, agent.PROXY_GROUP_LOCAL):
            agent.proxy_set_runtime_ports(grp, [])

    @staticmethod
    def _request():
        state = SimpleNamespace(task_manager=None)
        return SimpleNamespace(app=SimpleNamespace(state=state))

    def test_get_returns_two_group_views(self):
        agent.proxy_set_runtime_ports("hub", [7788])
        agent.proxy_set_runtime_ports("local", [3000])
        resp = asyncio.run(agent.get_proxy_config(self._request()))
        self.assertEqual(resp["status"], "ok")
        self.assertEqual(resp["hub"]["env_ports"], sorted(set(agent.Config.KHUB_PORTS)))
        self.assertEqual(resp["hub"]["runtime_ports"], [7788])
        self.assertEqual(resp["local"]["env_ports"], sorted(set(agent.Config.KPROXY_PORTS)))
        self.assertEqual(resp["local"]["runtime_ports"], [3000])
        self.assertFalse(resp["kstore_enabled"])

    def test_post_default_scope_is_local(self):
        resp = asyncio.run(agent.set_proxy_config(self._request(), {"ports": [3000, "5173", 0, 70000]}))
        self.assertEqual(resp["status"], "ok")
        self.assertEqual(resp["scope"], "local")
        self.assertEqual(resp["runtime_ports"], [3000, 5173])
        self.assertEqual(agent.proxy_runtime_ports("local"), [3000, 5173])
        self.assertEqual(agent.proxy_runtime_ports("hub"), [], "缺省 scope 不影响 HUB 组")

    def test_post_scope_hub_overwrites_hub_group(self):
        agent.proxy_set_runtime_ports("hub", [7788])
        resp = asyncio.run(agent.set_proxy_config(self._request(), {"ports": [9090], "scope": "hub"}))
        self.assertEqual(resp["scope"], "hub")
        self.assertEqual(resp["runtime_ports"], [9090])
        self.assertEqual(agent.proxy_runtime_ports("hub"), [9090], "scope=hub 整体覆盖 HUB 组")
        self.assertEqual(agent.proxy_runtime_ports("local"), [], "scope=hub 不影响本地组")

    def test_post_invalid_scope_422(self):
        resp = asyncio.run(agent.set_proxy_config(self._request(), {"ports": [3000], "scope": "global"}))
        self.assertEqual(resp.status_code, 422)
        self.assertEqual(_json_of(resp)["code"], "invalid_scope")

    def test_post_invalid_ports_422(self):
        resp = asyncio.run(agent.set_proxy_config(self._request(), {"ports": "3000"}))
        self.assertEqual(resp.status_code, 422)
        self.assertEqual(_json_of(resp)["code"], "invalid_ports")

    def test_delete_without_scope_clears_both(self):
        agent.proxy_set_runtime_ports("hub", [7788])
        agent.proxy_set_runtime_ports("local", [3000])
        resp = asyncio.run(agent.clear_proxy_config(self._request()))
        self.assertEqual(resp["scope"], "all")
        self.assertEqual(resp["hub"]["runtime_ports"], [])
        self.assertEqual(resp["local"]["runtime_ports"], [])
        self.assertEqual(resp["hub"]["effective_ports"], sorted(set(agent.Config.KHUB_PORTS)))
        self.assertEqual(resp["local"]["effective_ports"], sorted(set(agent.Config.KPROXY_PORTS)))

    def test_delete_scope_hub_clears_only_hub(self):
        agent.proxy_set_runtime_ports("hub", [7788])
        agent.proxy_set_runtime_ports("local", [3000])
        resp = asyncio.run(agent.clear_proxy_config(self._request(), scope="hub"))
        self.assertEqual(resp["scope"], "hub")
        self.assertEqual(resp["hub"]["runtime_ports"], [])
        self.assertEqual(resp["local"]["runtime_ports"], [3000], "?scope=hub 不清本地组")

    def test_delete_invalid_scope_422(self):
        resp = asyncio.run(agent.clear_proxy_config(self._request(), scope="global"))
        self.assertEqual(resp.status_code, 422)
        self.assertEqual(_json_of(resp)["code"], "invalid_scope")


class MiddlewareProxyExemptionTests(unittest.TestCase):
    """中间件响应加密豁免: /api/proxy/* 响应原样透传, 对照路径仍加密"""

    def test_proxy_response_passthrough_and_control_encrypted(self):
        from fastapi import FastAPI
        from starlette.testclient import TestClient

        stub = FastAPI()
        stub.add_middleware(agent.AuthEncryptMiddleware)

        @stub.get("/api/proxy/7788/x")
        async def proxy_stub():  # 模拟上游 JSON 响应
            return {"upstream": "json", "n": 1}

        @stub.get("/api/other")
        async def other_stub():
            return {"plain": "json"}

        with mock.patch.object(agent.Config, "DEBUG", False), \
             mock.patch.object(agent, "crypto",
                               SimpleNamespace(identify_signer=lambda *a, **k: "static")):
            client = TestClient(stub)
            r_proxy = client.get("/api/proxy/7788/x",
                                 headers={"x-nonce": "n", "x-timestamp": "t", "x-auth-token": "k"})
            r_other = client.get("/api/other",
                                 headers={"x-nonce": "n", "x-timestamp": "t", "x-auth-token": "k"})
        # 反代响应: 字节与 content-type 保真, 无 x-encrypted 头
        self.assertEqual(r_proxy.status_code, 200)
        self.assertEqual(r_proxy.content, b'{"upstream":"json","n":1}')
        self.assertEqual(r_proxy.headers.get("content-type"), "application/json")
        self.assertNotEqual(r_proxy.headers.get("x-encrypted"), "true")
        # 对照路径 (认证 JSON): 仍走 AES 加密出口
        self.assertEqual(r_other.headers.get("x-encrypted"), "true")
        self.assertNotIn(b'"plain"', r_other.content)


def _start_ws_upstream():
    """WS echo 上游 (独立线程独立事件循环 —— 主线程在 TestClient 的 portal.call 同步阻塞
    期间, 主线程 loop 不处理事件, 上游必须独立于主线程; 与生产形态对齐: 上游是独立进程,
    agent 的 aiohttp 客户端跨进程连接)"""
    import threading
    import time
    from aiohttp import web as _web

    async def ws_handler(request):
        ws = _web.WebSocketResponse()
        await ws.prepare(request)
        async for msg in ws:
            if msg.type == aiohttp.WSMsgType.TEXT:
                await ws.send_str("echo:" + msg.data)
            elif msg.type == aiohttp.WSMsgType.BINARY:
                await ws.send_bytes(b"echo:" + msg.data)
            else:
                break
        return ws

    app = _web.Application()
    app.router.add_get("/ws", ws_handler)
    holder = {}
    stop_evt = {"stop": None}

    def _run():
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)

        async def _setup():
            runner = _web.AppRunner(app)
            await runner.setup()
            site = _web.TCPSite(runner, "127.0.0.1", 0)
            await site.start()
            return site._server.sockets[0].getsockname()[1]

        holder["port"] = loop.run_until_complete(_setup())
        stop_evt["stop"] = lambda: loop.call_soon_threadsafe(loop.stop)
        loop.run_forever()

    t = threading.Thread(target=_run, daemon=True)
    t.start()
    for _ in range(80):
        if "port" in holder:
            break
        time.sleep(0.05)
    if "port" not in holder:
        raise RuntimeError("WS 上游未在 4s 内就绪")

    def _stop():
        if stop_evt["stop"]:
            stop_evt["stop"]()

    return _stop, holder["port"]


class ProxyWSRouteTests(unittest.TestCase):
    """本地反代 WS 透传 (0.6.7, docs/API.MD 20.6): 白名单拒绝 close 1008 / 回环 text/binary 保真"""

    def test_ws_passthrough_text_binary_query(self):
        from starlette.testclient import TestClient

        stop, port = _start_ws_upstream()
        try:
            agent.app.state.loopback_session = None
            with mock.patch.object(agent.Config, "KPROXY_PORTS", (port,)):
                client = TestClient(agent.app)
                with client.websocket_connect(f"/api/proxyws/{port}/ws?u=1") as ws:
                    ws.send_text("hello")
                    self.assertEqual(ws.receive_text(), "echo:hello")
                    ws.send_bytes(b"\x00\x01")
                    self.assertEqual(ws.receive_bytes(), b"echo:\x00\x01")
        finally:
            agent.app.state.loopback_session = None  # 测试 portal 间 loop 隔离, 下用例惰性重建
            stop()

    def test_ws_denied_close_1008(self):
        from starlette.testclient import TestClient

        with mock.patch.object(agent.Config, "KPROXY_PORTS", ()):
            client = TestClient(agent.app)
            with client.websocket_connect("/api/proxyws/7788/echo") as ws:
                msg = ws.receive()  # accept+close: close 帧以 dict 形态到达 (testclient 行为)
            self.assertEqual(msg.get("type"), "websocket.close")
            self.assertEqual(msg.get("code"), 1008)
            self.assertIn("port_not_allowed", msg.get("reason", ""))

    def test_ws_invalid_port_close_1008(self):
        from starlette.testclient import TestClient

        client = TestClient(agent.app)
        with client.websocket_connect("/api/proxyws/0x99/echo") as ws:
            msg = ws.receive()
        self.assertEqual(msg.get("type"), "websocket.close")
        self.assertEqual(msg.get("code"), 1008)
        self.assertIn("invalid_port", msg.get("reason", ""))


class ProxyWSSamePathTests(unittest.TestCase):
    """同路径 upgrade 嗅探 (0.6.7 续批三, Owner 拍板仅 py/js): 浏览器应用从页面 URL 派生
    WS 地址, upgrade 与 HTTP 反代同路径直达 —— 与 /api/proxyws 同一泵 (proxy_port_ws),
    白名单/拒绝语义完全一致; Starlette 按 scope type 分发, 与 HTTP 路由同路径共存
    (java/java11 Spark/Jetty 结构性不支持, 保持 /api/proxyws 专前缀)"""

    def test_same_path_ws_passthrough(self):
        from starlette.testclient import TestClient

        stop, port = _start_ws_upstream()
        try:
            agent.app.state.loopback_session = None
            with mock.patch.object(agent.Config, "KPROXY_PORTS", (port,)):
                client = TestClient(agent.app)
                with client.websocket_connect(f"/api/proxy/{port}/ws?u=1") as ws:
                    ws.send_text("hello")
                    self.assertEqual(ws.receive_text(), "echo:hello")
                    ws.send_bytes(b"\x00\x01")
                    self.assertEqual(ws.receive_bytes(), b"echo:\x00\x01")
        finally:
            agent.app.state.loopback_session = None
            stop()

    def test_same_path_ws_denied_close_1008(self):
        from starlette.testclient import TestClient

        with mock.patch.object(agent.Config, "KPROXY_PORTS", ()):
            client = TestClient(agent.app)
            with client.websocket_connect("/api/proxy/7788/echo") as ws:
                msg = ws.receive()
        self.assertEqual(msg.get("type"), "websocket.close")
        self.assertEqual(msg.get("code"), 1008)
        self.assertIn("port_not_allowed", msg.get("reason", ""))

    def test_same_path_ws_invalid_port_close_1008(self):
        from starlette.testclient import TestClient

        client = TestClient(agent.app)
        with client.websocket_connect("/api/proxy/0x99/echo") as ws:
            msg = ws.receive()
        self.assertEqual(msg.get("type"), "websocket.close")
        self.assertEqual(msg.get("code"), 1008)
        self.assertIn("invalid_port", msg.get("reason", ""))


if __name__ == "__main__":
    unittest.main()
