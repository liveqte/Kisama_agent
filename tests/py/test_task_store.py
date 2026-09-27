"""TaskStore 任务持久化单测 (0.5.7, 不启动 agent, docs/API.MD 十三)

运行: python tests/py/test_task_store.py
"""
import base64
import os
import sys
import tempfile
import unittest
from pathlib import Path
from unittest import mock

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "py"))

import agent  # noqa: E402

TEST_KEY_HEX = "aa" * 32
TEST_KEY_B64 = base64.b64encode(bytes(range(32))).decode("ascii")


def make_store(tmp_dir, key=TEST_KEY_HEX, path=None, extra_env=None):
    """在隔离环境下构造 TaskStore"""
    env = {
        "KSTORE": path if path is not None else str(Path(tmp_dir) / "store.enc"),
        "KSTORE_KEY": key,
    }
    env.update(extra_env or {})
    with mock.patch.dict(os.environ, env, clear=False):
        return agent.TaskStore()


class TaskStoreKeyTest(unittest.TestCase):
    """KSTORE_KEY 解析: hex / base64 / 非法输入一律 fail-closed"""

    def test_hex_key(self):
        s = make_store(tempfile.mkdtemp(), key=TEST_KEY_HEX)
        self.assertTrue(s.enabled)
        self.assertEqual(s.key, bytes.fromhex(TEST_KEY_HEX))

    def test_base64_key(self):
        s = make_store(tempfile.mkdtemp(), key=TEST_KEY_B64)
        self.assertTrue(s.enabled)
        self.assertEqual(s.key, bytes(range(32)))

    def test_invalid_key_disables(self):
        for bad in ["short", "zz" * 32, "AA" * 31, "!" * 44]:
            s = make_store(tempfile.mkdtemp(), key=bad)
            self.assertFalse(s.enabled, f"key={bad!r} 应判定非法")
            self.assertIsNone(s.path)

    def test_missing_key_disables(self):
        d = tempfile.mkdtemp()
        with mock.patch.dict(os.environ, {"KSTORE": str(Path(d) / "store.enc"), "KSTORE_KEY": ""}, clear=False):
            os.environ.pop("KSTORE_KEY", None)
            s = agent.TaskStore()
        self.assertFalse(s.enabled)

    def test_off_disables_even_with_key(self):
        d = tempfile.mkdtemp()
        for off in ["off", "0", "OFF", "false"]:
            s = make_store(d, path=off)
            self.assertFalse(s.enabled, f"KSTORE={off} 应关闭持久化")

    def test_default_path_under_home(self):
        d = tempfile.mkdtemp()
        with mock.patch.dict(os.environ, {"KSTORE_KEY": TEST_KEY_HEX, "HOME": d, "USERPROFILE": d}, clear=False):
            os.environ.pop("KSTORE", None)
            s = agent.TaskStore()
        self.assertTrue(s.enabled)
        self.assertEqual(Path(s.path), Path(d) / ".tmp" / "store.enc")


class TaskStoreRoundTripTest(unittest.TestCase):

    def setUp(self):
        self.dir = tempfile.mkdtemp(prefix="kisama_store_")
        self.store = make_store(self.dir)

    def tearDown(self):
        import shutil
        shutil.rmtree(self.dir, ignore_errors=True)

    def test_load_missing_file_returns_empty(self):
        onetasks, crontasks = self.store.load()
        self.assertEqual(onetasks, [])
        self.assertEqual(crontasks, {})

    def test_save_load_roundtrip(self):
        self.assertTrue(self.store.save(["echo one", "python -c \"print(1)\"\necho two"], {"*/5 * * * *": "echo hi"}))
        self.assertIsNotNone(self.store.last_saved_at)
        fresh = make_store(self.dir)
        onetasks, crontasks = fresh.load()
        self.assertEqual(onetasks, ["echo one", "python -c \"print(1)\"\necho two"])
        self.assertEqual(crontasks, {"*/5 * * * *": "echo hi"})

    def test_ciphertext_not_plaintext(self):
        self.store.save(["secret-cmd-marker"], {})
        payload = (Path(self.dir) / "store.enc").read_text(encoding="utf-8")
        self.assertNotIn("secret-cmd-marker", payload)
        self.assertIn("ciphertext", base64.b64decode(payload).decode("utf-8"))

    def test_corrupt_file_quarantined(self):
        self.store.save(["cmd"], {})
        target = Path(self.dir) / "store.enc"
        target.write_text("definitely-not-a-valid-payload", encoding="utf-8")
        onetasks, crontasks = self.store.load()
        self.assertEqual(onetasks, [])
        self.assertEqual(crontasks, {})
        bads = list(Path(self.dir).glob("store.enc.bad-*"))
        self.assertEqual(len(bads), 1, "损坏文件应被隔离改名")

    def test_wrong_key_quarantined(self):
        self.store.save(["cmd"], {})
        other = make_store(self.dir, key="bb" * 32)
        onetasks, crontasks = other.load()
        self.assertEqual(onetasks, [])
        self.assertEqual(len(list(Path(self.dir).glob("store.enc.bad-*"))), 1)

    def test_higher_version_locked_not_overwritten(self):
        payload = agent.CryptoManager.encrypt_data(
            b'{"magic":"kisama-store","version":99,"saved_at":"t","data":{}}',
            self.store.key,
        )
        (Path(self.dir) / "store.enc").write_text(payload, encoding="utf-8")
        onetasks, crontasks = self.store.load()
        self.assertEqual(onetasks, [])
        self.assertTrue(self.store.locked)
        self.assertFalse(self.store.save(["cmd"], {}), "只读状态下禁止覆盖写")
        self.assertTrue((Path(self.dir) / "store.enc").exists(), "高版本原文件必须保留")


class TaskManagerRestoreTest(unittest.TestCase):
    """TaskManager 构造时恢复持久化任务 + onetime 单次执行标记"""

    def setUp(self):
        self.dir = tempfile.mkdtemp(prefix="kisama_store_tm_")
        self._env = mock.patch.dict(os.environ, {
            "KSTORE": str(Path(self.dir) / "store.enc"),
            "KSTORE_KEY": TEST_KEY_HEX,
        }, clear=False)
        self._env.start()

    def tearDown(self):
        import shutil
        agent.Config.onetasks = []
        agent.Config.crontasks = {}
        agent.Config.InitTask = True
        self._env.stop()
        shutil.rmtree(self.dir, ignore_errors=True)

    def test_restore_populates_config(self):
        agent.TaskStore().save(["echo restored"], {"0 5 * * *": "echo cron"})
        tm = agent.TaskManager()
        self.assertEqual(agent.Config.onetasks, ["echo restored"])
        self.assertEqual(agent.Config.crontasks, {"0 5 * * *": "echo cron"})

    def test_set_onetime_tasks_persists(self):
        tm = agent.TaskManager()
        result = tm.set_onetime_tasks(["echo new"])
        self.assertTrue(result["persisted"])
        fresh = agent.TaskStore()
        onetasks, _ = fresh.load()
        self.assertEqual(onetasks, ["echo new"])

    def test_init_task_marker_consumed_by_run(self):
        # 单次执行语义: run_onetime_tasks 执行完置 InitTask=False,
        # 之后 POST (路由层 if Config.InitTask and tasks) 不再自动触发
        agent.Config.onetasks = ["echo once"]
        agent.Config.InitTask = True
        tm = agent.TaskManager()
        first = tm.run_onetime_tasks()
        self.assertEqual(len(first), 1)
        self.assertFalse(agent.Config.InitTask)
        self.assertEqual(tm.run_onetime_tasks(), [], "标记已消费, 不得二次触发")


if __name__ == "__main__":
    unittest.main(verbosity=2)
