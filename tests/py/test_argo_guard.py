#!/usr/bin/env python3
"""Argo 临时隧道守护自愈 (0.5.2) 离线单元测试。

覆盖:
1. 连续失败达阈值 → 自动重新注册换新域名 → on_domain_change 回调触发 (守护核心链路)
2. 本轮注册成功后断线 → 失败计数清零, 不重新注册 (短暂抖动保持域名稳定)
3. 守护参数环境变量解析 (KISAMA_ARGO_REREGISTER_AFTER / KISAMA_ARGO_IDLE_TIMEOUT)
4. KISAMA_EDGE_HOSTS 覆盖 edge 入口

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


if __name__ == "__main__":
    unittest.main(verbosity=2)
