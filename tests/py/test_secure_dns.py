#!/usr/bin/env python3
"""内置加密 DNS (DoH, docs/API.MD 第十八节) 离线单元测试。

覆盖 (全部 mock 网络层, 不依赖外网):
1. SecureDns 核心语义: 解析成功/缓存 TTL 截断/负缓存/服务器故障退避与换台/全部失败回落
2. getaddrinfo 包装语义: IP 字面量与 AI_NUMERICHOST 直通、family 过滤、双栈排序、
   以"对解析出的 IP 调原版 getaddrinfo"合成规范结果、NXDOMAIN 不回落
3. DoH JSON 应答解析: CNAME 链过滤、非法记录过滤、Status 语义 (3=NXDOMAIN, NODATA)
4. install_dns_hook: off 不安装 / on 安装且幂等 / KISAMA_DOH_SERVERS 解析
"""

import socket
import sys
import time
import unittest
from pathlib import Path
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "py"))

import agent


class _FakeDoh:
    """假 DoH 服务器: by_server 按 URL 定制 (值为 None 表示该服务器网络级失败),
    default 兜底; 记录全部调用 (server, name, rtype)。"""

    def __init__(self, by_server=None, default=None):
        self.by_server = by_server or {}
        self.default = default
        self.calls = []

    def __call__(self, server, name, rtype):
        self.calls.append((server, name, rtype))
        fn = self.by_server.get(server, self.default)
        if fn is None:
            raise OSError(f"simulated doh failure: {server}")
        return fn(rtype)


def _a_answer(ip, ttl=300):
    return {"Status": 0, "Answer": [{"name": "x", "type": 1, "TTL": ttl, "data": ip}]}


def _aaaa_answer(ip, ttl=300):
    return {"Status": 0, "Answer": [{"name": "x", "type": 28, "TTL": ttl, "data": ip}]}


def _recording_orig(seen):
    def orig(host, port, family=0, type=0, proto=0, flags=0):
        seen.append((host, port, family, type, proto, flags))
        return [("orig", host, port, family, type, proto, flags)]
    return orig


class SecureDnsResolveTest(unittest.TestCase):
    """resolve 核心: 解析/缓存/退避/换台/回落语义"""

    def test_resolve_ok_ttl_clamp_and_cache(self):
        q = _FakeDoh(default=lambda rtype: {
            "Status": 0,
            "Answer": [
                {"name": "x", "type": 5, "TTL": 300, "data": "cname.example.com"},  # CNAME 链应过滤
                {"name": "x", "type": 1, "TTL": 5, "data": "1.2.3.4"},
                {"name": "x", "type": 1, "TTL": 5, "data": "not-an-ip"},            # 非法记录应过滤
                {"name": "x", "type": 1, "TTL": 5, "data": "5.6.7.8"},
                {"name": "x", "type": 28, "TTL": 99999, "data": "2606:4700::1"},    # 超大 TTL 应截断
            ],
        })
        sd = agent.SecureDns(query_fn=q)
        before = time.monotonic()
        self.assertEqual(sd.resolve("example.com", socket.AF_INET), ["1.2.3.4", "5.6.7.8"])
        # AF_INET 只查 A (rtype=1), AAAA 不请求
        self.assertTrue(q.calls and all(c[2] == 1 for c in q.calls))
        # TTL=5 截断到下限 30s
        ent = sd._cache[("example.com", socket.AF_INET)]
        self.assertTrue(29.0 <= ent[1] - before <= 30.5)
        # 二次解析命中缓存, 不再发起查询
        n = len(q.calls)
        self.assertEqual(sd.resolve("example.com", socket.AF_INET), ["1.2.3.4", "5.6.7.8"])
        self.assertEqual(len(q.calls), n)

    def test_ttl_max_clamp_on_unspec(self):
        q = _FakeDoh(default=lambda rtype: _aaaa_answer("2606:4700::1", ttl=99999) if rtype == 28
                     else _a_answer("1.2.3.4", ttl=99999))
        sd = agent.SecureDns(query_fn=q)
        before = time.monotonic()
        ips = sd.resolve("example.com", socket.AF_UNSPEC)
        ent = sd._cache[("example.com", socket.AF_UNSPEC)]
        self.assertTrue(ent[1] - before <= agent.SecureDns.TTL_MAX + 0.5)
        self.assertIn("1.2.3.4", ips)
        self.assertIn("2606:4700::1", ips)

    def test_dual_stack_order_ipv6_usable_vs_not(self):
        q = _FakeDoh(default=lambda rtype: _aaaa_answer("2606:4700::1") if rtype == 28
                     else _a_answer("1.2.3.4"))
        sd = agent.SecureDns(query_fn=q)
        with patch.object(agent, "_ipv6_usable", return_value=True):
            self.assertEqual(sd.resolve("example.com", socket.AF_UNSPEC),
                             ["2606:4700::1", "1.2.3.4"])
        sd._cache.clear()
        with patch.object(agent, "_ipv6_usable", return_value=False):
            self.assertEqual(sd.resolve("example.com", socket.AF_UNSPEC),
                             ["1.2.3.4", "2606:4700::1"])

    def test_server_failover_and_backoff(self):
        bad, good = "https://bad.example/resolve", "https://good.example/resolve"
        q = _FakeDoh(by_server={bad: None},
                     default=lambda rtype: _a_answer("9.9.9.9"))
        sd = agent.SecureDns(servers=[bad, good], query_fn=q)
        self.assertEqual(sd.resolve("a.com", socket.AF_INET), ["9.9.9.9"])
        self.assertEqual(len([c for c in q.calls if c[0] == bad]), 1)
        # 退避期内不再碰 bad
        q.calls.clear()
        self.assertEqual(sd.resolve("b.com", socket.AF_INET), ["9.9.9.9"])
        self.assertTrue(all(c[0] == good for c in q.calls))

    def test_all_fail_returns_none_and_falls_back(self):
        q = _FakeDoh(default=None)   # 所有服务器网络级失败
        sd = agent.SecureDns(query_fn=q)
        self.assertIsNone(sd.resolve("x.com", socket.AF_INET))
        seen = []
        out = sd.getaddrinfo("x.com", 443, orig=_recording_orig(seen))
        self.assertEqual(len(out), 1)
        self.assertEqual(seen, [("x.com", 443, 0, 0, 0, 0)])

    def test_nxdomain_negative_cache_no_fallback(self):
        q = _FakeDoh(default=lambda rtype: {"Status": 3})
        sd = agent.SecureDns(query_fn=q)
        self.assertEqual(sd.resolve("nx.com", socket.AF_INET), [])
        n = len(q.calls)
        self.assertEqual(sd.resolve("nx.com", socket.AF_INET), [])
        self.assertEqual(len(q.calls), n)   # 负缓存命中
        seen = []
        with self.assertRaises(socket.gaierror):
            sd.getaddrinfo("nx.com", 443, orig=_recording_orig(seen))
        self.assertEqual(seen, [])          # NXDOMAIN 不回落系统

    def test_nodata_counts_as_nxdomain(self):
        # Status=0 且 Answer 为空 → 该类型 NODATA, 按 NXDOMAIN 语义处理
        q = _FakeDoh(default=lambda rtype: {"Status": 0, "Answer": []})
        sd = agent.SecureDns(query_fn=q)
        self.assertEqual(sd.resolve("aonly.com", socket.AF_INET6), [])

    def test_unspec_partial_error_still_ok(self):
        # A 记录正常、AAAA 查询网络级失败 → 整体 ok, 仅回 v4
        def q2(server, name, rtype):
            if rtype == 28:
                raise OSError("down")
            return _a_answer("1.2.3.4")
        sd = agent.SecureDns(query_fn=q2)
        self.assertEqual(sd.resolve("example.com", socket.AF_UNSPEC), ["1.2.3.4"])

    def test_invalid_response_shape_treated_as_error(self):
        q = _FakeDoh(default=lambda rtype: "not-a-dict")
        sd = agent.SecureDns(query_fn=q)
        self.assertIsNone(sd.resolve("x.com", socket.AF_INET))


class SecureDnsGetaddrinfoTest(unittest.TestCase):
    """getaddrinfo 包装语义"""

    def test_ip_literal_passthrough_no_doh(self):
        q = _FakeDoh(default=lambda rtype: _a_answer("9.9.9.9"))
        sd = agent.SecureDns(query_fn=q)
        seen = []
        out = sd.getaddrinfo("127.0.0.1", 80, orig=_recording_orig(seen))
        self.assertEqual(seen, [("127.0.0.1", 80, 0, 0, 0, 0)])
        self.assertEqual(q.calls, [])   # 字面量不触发 DoH (防递归)

    def test_none_host_and_numeric_host_flag_passthrough(self):
        q = _FakeDoh(default=lambda rtype: _a_answer("9.9.9.9"))
        sd = agent.SecureDns(query_fn=q)
        seen = []
        sd.getaddrinfo(None, 8080, orig=_recording_orig(seen))            # 绑定通配
        sd.getaddrinfo("example.com", 80, 0, 0, 0, socket.AI_NUMERICHOST,
                       orig=_recording_orig(seen))                        # 调用方要求字面量
        self.assertEqual([s[0] for s in seen], [None, "example.com"])
        self.assertEqual(q.calls, [])

    def test_composes_result_via_orig_on_resolved_ip(self):
        q = _FakeDoh(default=lambda rtype: _a_answer("9.9.9.9"))
        sd = agent.SecureDns(query_fn=q)
        seen = []
        out = sd.getaddrinfo("example.com", 443, socket.AF_INET, socket.SOCK_STREAM, 0, 0,
                             orig=_recording_orig(seen))
        # 用解析出的 IP 调原版, 完整转发 port/family/type/proto/flags
        self.assertEqual(seen, [("9.9.9.9", 443, socket.AF_INET, socket.SOCK_STREAM, 0, 0)])
        self.assertEqual(out, [("orig", "9.9.9.9", 443, socket.AF_INET, socket.SOCK_STREAM, 0, 0)])

    def test_real_orig_produces_standard_tuple(self):
        # 与真实 socket.getaddrinfo 组合 (对 IP 字面量解析离线可行), 验证产物结构
        q = _FakeDoh(default=lambda rtype: _a_answer("127.0.0.1"))
        sd = agent.SecureDns(query_fn=q)
        infos = sd.getaddrinfo("example.com", 443, socket.AF_INET, socket.SOCK_STREAM, 0, 0,
                               orig=agent._original_getaddrinfo)
        self.assertTrue(infos)
        for family, stype, proto, canon, sockaddr in infos:
            self.assertEqual(family, socket.AF_INET)
            self.assertEqual(stype, socket.SOCK_STREAM)
            self.assertEqual(sockaddr[0], "127.0.0.1")
            self.assertEqual(sockaddr[1], 443)

    def test_all_ips_fail_orig_then_system_fallback(self):
        q = _FakeDoh(default=lambda rtype: _a_answer("9.9.9.9"))
        sd = agent.SecureDns(query_fn=q)
        seen = []

        def orig(host, port, family=0, type=0, proto=0, flags=0):
            seen.append(host)
            if host == "9.9.9.9":
                raise socket.gaierror(-2, "forced")
            return [("fallback",)]
        out = sd.getaddrinfo("example.com", 443, socket.AF_INET, 0, 0, 0, orig=orig)
        self.assertEqual(out, [("fallback",)])
        self.assertEqual(seen, ["9.9.9.9", "example.com"])


class HelperTest(unittest.TestCase):
    """辅助函数与 URL 构造"""

    def test_is_ip_literal(self):
        self.assertTrue(agent._is_ip_literal("1.2.3.4"))
        self.assertTrue(agent._is_ip_literal("::1"))
        self.assertTrue(agent._is_ip_literal("[2606:4700::1]"))
        self.assertFalse(agent._is_ip_literal("example.com"))
        self.assertFalse(agent._is_ip_literal(""))
        self.assertFalse(agent._is_ip_literal(None))

    def test_doh_url_quoting(self):
        url = agent.SecureDns._doh_url("https://1.1.1.1/dns-query", "a.b.example", 1)
        self.assertEqual(url, "https://1.1.1.1/dns-query?name=a.b.example&type=1")
        url = agent.SecureDns._doh_url("https://223.5.5.5/resolve", "xn--fiqs8s", 28)
        self.assertEqual(url, "https://223.5.5.5/resolve?name=xn--fiqs8s&type=28")

    def test_valid_literal_version_match(self):
        self.assertTrue(agent.SecureDns._valid_literal("1.2.3.4", 1))
        self.assertFalse(agent.SecureDns._valid_literal("1.2.3.4", 28))
        self.assertTrue(agent.SecureDns._valid_literal("2606:4700::1", 28))
        self.assertFalse(agent.SecureDns._valid_literal("example.com", 1))

    def test_to_ascii_passthrough_and_idna(self):
        self.assertEqual(agent.SecureDns._to_ascii("example.com"), "example.com")
        self.assertEqual(agent.SecureDns._to_ascii("例え.jp"), "xn--r8jz45g.jp")

    def test_default_servers_chain(self):
        sd = agent.SecureDns()
        self.assertEqual(sd.servers, list(agent.DOH_SERVERS_DEFAULT))
        sd = agent.SecureDns(servers=[""])
        self.assertEqual(sd.servers, list(agent.DOH_SERVERS_DEFAULT))


class InstallHookTest(unittest.TestCase):
    """install_dns_hook 安装语义 (每例结束还原全局状态, 避免污染同进程其他用例)"""

    def tearDown(self):
        socket.getaddrinfo = agent._original_getaddrinfo
        agent._dns_hook = None

    def test_default_off_no_hook(self):
        self.assertIsNone(agent._dns_hook)   # import 期 KISAMA_DNS 未设置
        self.assertIs(socket.getaddrinfo, agent._original_getaddrinfo)
        self.assertIsNone(agent.install_dns_hook())
        self.assertIs(socket.getaddrinfo, agent._original_getaddrinfo)

    def test_on_installs_and_idempotent(self):
        with patch.object(agent.Config, "DNS_MODE", "on"), \
             patch.object(agent.Config, "DOH_SERVERS",
                          "https://a.example/resolve , https://b.example/dns-query ,,"):
            first = agent.install_dns_hook()
            self.assertIsNotNone(first)
            self.assertEqual(first.servers,
                             ["https://a.example/resolve", "https://b.example/dns-query"])
            second = agent.install_dns_hook()
            self.assertIs(first, second)                      # 幂等, 不重复包装
            self.assertIsNot(socket.getaddrinfo, agent._original_getaddrinfo)
            # 全局钩子生效: 字面量直通返回系统结果 (离线安全)
            infos = socket.getaddrinfo("127.0.0.1", 80, socket.AF_INET, socket.SOCK_STREAM)
            self.assertTrue(infos and infos[0][4][0] == "127.0.0.1")

    def test_custom_servers_single_entry(self):
        with patch.object(agent.Config, "DNS_MODE", "on"), \
             patch.object(agent.Config, "DOH_SERVERS", "https://my.doh/resolve"):
            sd = agent.install_dns_hook()
            self.assertEqual(sd.servers, ["https://my.doh/resolve"])


if __name__ == "__main__":
    unittest.main()
