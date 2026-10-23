"""baseinfo P/T cache semantics, docs/API.MD section 16.

Run: python tests/py/test_baseinfo_cache.py
No agent server is started; probes and monotonic clock are mocked.
"""
import asyncio
import sys
import unittest
from pathlib import Path
from unittest import mock

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "py"))

import agent  # noqa: E402


def reset_config_cache():
    agent.Config._baseinfo_p_snapshot = None
    agent.Config._baseinfo_local_snapshot = None
    agent.Config._baseinfo_local_at = 0.0
    agent.Config._baseinfo_local_fail_at = 0.0
    agent.Config._baseinfo_net_snapshot = None
    agent.Config._baseinfo_net_at = 0.0
    agent.Config._baseinfo_net_fail_at = 0.0
    agent.Config._baseinfo_p_lock = None
    agent.Config._baseinfo_local_lock = None
    agent.Config._baseinfo_net_lock = None


class BaseInfoCacheTest(unittest.IsolatedAsyncioTestCase):

    def setUp(self):
        reset_config_cache()
        self.now = 1000.0
        self.p_calls = 0
        self.local_calls = 0
        self.net_calls = 0
        self.local_args = []
        self.clock_patcher = mock.patch.object(
            agent.time, "monotonic", side_effect=lambda: self.now
        )
        self.clock_patcher.start()
        self.patch_probes()

    def tearDown(self):
        self.stop_probes()
        self.clock_patcher.stop()
        reset_config_cache()

    def patch_probes(self):
        test = self

        def fake_p(_collector):
            test.p_calls += 1
            return {
                "arch": "x86_64", "cpu_cores": 4, "cpu_name": "test-cpu",
                "gpu_name": "", "os": "TestOS", "kernel_version": "6.0",
                "version": "test-version", "virtualization": "Docker",
                "marks": ["root"],
            }

        async def fake_local(_collector, virtualization):
            test.local_calls += 1
            test.local_args.append(virtualization)
            return {"disk_total": 11, "mem_total": 22, "swap_total": 33}

        async def fake_net(_collector):
            test.net_calls += 1
            return {"ipv4": "1.2.3.4", "ipv6": "2001:db8::1"}

        self.patchers = [
            mock.patch.object(agent.SystemInfoCollector, "collect_p_fields", fake_p),
            mock.patch.object(agent.SystemInfoCollector, "collect_local_fields", fake_local),
            mock.patch.object(agent.SystemInfoCollector, "collect_net_fields", fake_net),
        ]
        for p in self.patchers:
            p.start()

    def stop_probes(self):
        for p in self.patchers:
            p.stop()
        self.patchers = []

    async def fetch(self):
        p_fields = await agent.Config.get_baseinfo_p_snapshot()
        local_fields = await agent.Config.get_baseinfo_local_snapshot(
            p_fields.get("virtualization", "")
        )
        net_fields = await agent.Config.get_baseinfo_net_snapshot()
        return agent.SystemInfoCollector.assemble_base_info(
            p_fields, local_fields, net_fields
        )

    def test_assertion_1_and_2_p_local_net_counts(self):
        async def scenario():
            for _ in range(5):
                await self.fetch()
            self.assertEqual((self.p_calls, self.local_calls, self.net_calls), (1, 1, 1))
            self.assertEqual(self.local_args, ["Docker"])

            self.now += 31
            await self.fetch()
            self.assertEqual((self.p_calls, self.local_calls, self.net_calls), (1, 2, 1))
            self.assertEqual(self.local_args, ["Docker", "Docker"])

        asyncio.run(scenario())

    def test_assertion_3_rotation_does_not_clear_snapshots(self):
        async def scenario():
            await self.fetch()
            before_key = agent.Config.SESSION_KEY
            before_snapshot = agent.Config._baseinfo_p_snapshot
            agent.Config.rotate_operational_secrets()
            self.assertIsNot(before_key, agent.Config.SESSION_KEY)
            self.assertIs(before_snapshot, agent.Config._baseinfo_p_snapshot)
            await self.fetch()
            self.assertEqual((self.p_calls, self.local_calls, self.net_calls), (1, 1, 1))

        asyncio.run(scenario())

    def test_assertion_4_net_expires_at_3600s(self):
        async def scenario():
            await self.fetch()
            self.now += 3601
            await self.fetch()
            self.assertEqual((self.p_calls, self.local_calls, self.net_calls), (1, 2, 2))

        asyncio.run(scenario())

    def test_response_has_no_credentials_and_field_order(self):
        async def scenario():
            info = await self.fetch()
            self.assertNotIn("session_key", info)
            self.assertNotIn("noise_key", info)
            self.assertEqual(list(info.keys()), [
                "arch", "cpu_cores", "cpu_name", "disk_total", "gpu_name",
                "ipv4", "ipv6", "mem_total", "os", "kernel_version",
                "swap_total", "version", "virtualization", "marks",
            ])
            self.assertEqual(info["marks"], ["root"])

        asyncio.run(scenario())

    def test_p_failure_falls_back_and_never_retries(self):
        self.stop_probes()
        test = self

        def boom(_collector):
            test.p_calls += 1
            raise RuntimeError("p failed")

        with mock.patch.object(agent.SystemInfoCollector, "collect_p_fields", boom):
            async def scenario():
                p1 = await agent.Config.get_baseinfo_p_snapshot()
                p2 = await agent.Config.get_baseinfo_p_snapshot()
                self.assertEqual(p1, p2)
                self.assertEqual(p1["marks"], [])
                self.assertEqual(p1["arch"], "")
                self.assertEqual(p1["cpu_cores"], 0)
            asyncio.run(scenario())
        self.assertEqual(self.p_calls, 1)
        self.patch_probes()

    def test_net_failure_backoff_is_60s(self):
        self.stop_probes()
        test = self

        async def boom(_collector):
            test.net_calls += 1
            raise RuntimeError("net failed")

        with mock.patch.object(agent.SystemInfoCollector, "collect_net_fields", boom):
            async def scenario():
                n1 = await agent.Config.get_baseinfo_net_snapshot()
                self.assertEqual(n1, {"ipv4": None, "ipv6": None})
                self.now += 10
                n2 = await agent.Config.get_baseinfo_net_snapshot()
                self.assertEqual(n2, {"ipv4": None, "ipv6": None})
                self.assertEqual(self.net_calls, 1)
                self.now += 51
                await agent.Config.get_baseinfo_net_snapshot()
                self.assertEqual(self.net_calls, 2)
            asyncio.run(scenario())
        self.patch_probes()

    def test_net_failure_keeps_last_success(self):
        test = self

        async def scenario():
            first = await agent.Config.get_baseinfo_net_snapshot()
            self.assertEqual(first["ipv4"], "1.2.3.4")
            self.now += 3601
            self.stop_probes()

            async def boom(_collector):
                test.net_calls += 1
                raise RuntimeError("net failed")

            with mock.patch.object(agent.SystemInfoCollector, "collect_net_fields", boom):
                second = await agent.Config.get_baseinfo_net_snapshot()
            self.assertEqual(second, first)
            self.assertEqual(self.net_calls, 2)
        asyncio.run(scenario())

    def test_local_collector_reuses_p_virtualization(self):
        self.stop_probes()
        reset_config_cache()
        collector = agent.SystemInfoCollector()
        seen = {}

        async def fake_disk(virtualization=None):
            seen["virtualization"] = virtualization
            return {"total": 42, "used": 1}

        with mock.patch.object(collector, "_get_disk_info", fake_disk):
            local = asyncio.run(collector.collect_local_fields("Docker"))
        self.assertEqual(seen["virtualization"], "Docker")
        self.assertEqual(local["disk_total"], 42)


if __name__ == "__main__":
    unittest.main(verbosity=2)
