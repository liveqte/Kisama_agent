"""任务元数据行 (0.6.2, docs/API.MD 四) 单测: 解析/剥离/盖章 + 身份感知整表规范化

运行: python tests/py/test_task_meta.py
"""
import os
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "py"))

import agent  # noqa: E402

TM = agent.TaskManager

# 盖章语法跟随本端平台 (Windows=rem, Unix=#); 解析则两种语法都接受
COMMENT = "rem" if os.name == "nt" else "#"


def meta(task_id, updated):
    """本端平台语法的元数据行"""
    return f"{COMMENT} kisama-task: id={task_id} updated={updated}"


class ParseStripTest(unittest.TestCase):
    def test_parse_hash_syntax(self):
        self.assertEqual(TM._parse_task_meta(f"{meta(100, 50)}\necho hi"), ("100", 50))

    def test_parse_rem_syntax(self):
        self.assertEqual(TM._parse_task_meta(f"rem kisama-task: id=200 updated=60\necho hi"), ("200", 60))

    def test_parse_rem_case_insensitive(self):
        self.assertEqual(TM._parse_task_meta(f"REM KISAMA-TASK: id=1 updated=2\nx"), ("1", 2))

    def test_parse_after_shebang(self):
        self.assertEqual(TM._parse_task_meta(f"#!/bin/sh\n{meta(3, 4)}\nls"), ("3", 4))

    def test_parse_missing_updated(self):
        self.assertEqual(TM._parse_task_meta(f"# kisama-task: id=9\necho hi"), ("9", 0))

    def test_parse_absent(self):
        self.assertIsNone(TM._parse_task_meta("echo hi"))
        self.assertIsNone(TM._parse_task_meta("# 普通注释"))

    def test_parse_beyond_3_lines_ignored(self):
        self.assertIsNone(TM._parse_task_meta("a\nb\nc\n" + meta(1, 1)))

    def test_strip(self):
        self.assertEqual(TM._strip_task_meta(f"{meta(1, 1)}\necho hi"), "echo hi")
        self.assertEqual(TM._strip_task_meta(f"#!/bin/sh\n{meta(1, 1)}\nls"), "#!/bin/sh\nls")
        self.assertEqual(TM._strip_task_meta("echo hi"), "echo hi")

    def test_with_meta_position(self):
        self.assertEqual(TM._with_task_meta("echo hi", "9", 9), f"{meta(9, 9)}\necho hi")
        self.assertEqual(TM._with_task_meta("#!/bin/sh\nls", "9", 9), f"#!/bin/sh\n{meta(9, 9)}\nls")
        # 已有行: 替换不叠加
        self.assertEqual(TM._with_task_meta(f"{meta(1, 1)}\necho hi", "1", 2), f"{meta(1, 2)}\necho hi")


class NormalizeOnetimeTest(unittest.TestCase):
    def test_new_task_gets_id(self):
        out = TM._normalize_onetime_tasks(["echo hi"], [])
        self.assertEqual(len(out), 1)
        m = TM._parse_task_meta(out[0])
        self.assertIsNotNone(m)
        self.assertEqual(TM._strip_task_meta(out[0]), "echo hi")
        self.assertEqual(m[1], int(m[0]))  # 新任务 id == updated == now

    def test_unchanged_content_keeps_id(self):
        out = TM._normalize_onetime_tasks([f"{meta(7, 3)}\necho hi"], [f"{meta(7, 3)}\necho hi"])
        self.assertEqual(out, [f"{meta(7, 3)}\necho hi"])

    def test_unchanged_idempotent_across_syntax(self):
        # 入参带旧 updated、内容未变 → 保留存量 id/updated, 不推进
        out = TM._normalize_onetime_tasks([f"{meta(7, 1)}\necho hi"], [f"{meta(7, 9)}\necho hi"])
        self.assertEqual(out, [f"{meta(7, 9)}\necho hi"])

    def test_changed_content_keeps_id_bumps_updated(self):
        out = TM._normalize_onetime_tasks([f"{meta(7, 3)}\necho new"], [f"{meta(7, 3)}\necho old"])
        m = TM._parse_task_meta(out[0])
        self.assertEqual(m[0], "7")
        self.assertGreater(m[1], 3)
        self.assertEqual(TM._strip_task_meta(out[0]), "echo new")

    def test_id_match_across_position(self):
        stored = [f"{meta(1, 1)}\na", f"{meta(2, 2)}\nb"]
        out = TM._normalize_onetime_tasks([f"{meta(2, 2)}\nb", f"{meta(1, 5)}\na2"], stored)
        self.assertEqual(TM._parse_task_meta(out[0])[0], "2")
        self.assertEqual(TM._parse_task_meta(out[1])[0], "1")
        # 内容变化 → updated 由本端盖当前时刻 (入参的暂授时间不作数)
        self.assertGreater(TM._parse_task_meta(out[1])[1], 5)

    def test_content_match_keeps_stored_id_when_incoming_bare(self):
        out = TM._normalize_onetime_tasks(["echo hi"], [f"{meta(7, 3)}\necho hi"])
        self.assertEqual(out, [f"{meta(7, 3)}\necho hi"])

    def test_legacy_stored_adopts_incoming_id(self):
        # 存量无行 (0.5.7 遗留), 入参带面板暂授 id → 采纳
        out = TM._normalize_onetime_tasks([f"{meta(42, 99)}\necho hi"], ["echo hi"])
        self.assertEqual(out, [f"{meta(42, 99)}\necho hi"])

    def test_legacy_stored_new_content_gets_fresh_id(self):
        out = TM._normalize_onetime_tasks(["echo new"], ["echo old"])
        m = TM._parse_task_meta(out[0])
        self.assertEqual(TM._strip_task_meta(out[0]), "echo new")
        self.assertIsNotNone(m)

    def test_removed_entries_dropped(self):
        out = TM._normalize_onetime_tasks([f"{meta(1, 1)}\na"], [f"{meta(1, 1)}\na", f"{meta(2, 2)}\nb"])
        self.assertEqual(len(out), 1)
        self.assertEqual(TM._parse_task_meta(out[0])[0], "1")

    def test_different_ids_same_content_are_two_tasks(self):
        # 两条不同任务 (不同 id) 内容相同: 入参整表两条都保留; 存量已有 id 的保留原 id,
        # 存量没有的按新任务赋新 id (面板暂授 id 以响应回显为准)
        out = TM._normalize_onetime_tasks([f"{meta(1, 1)}\nx", f"{meta(2, 2)}\nx"], [f"{meta(2, 2)}\nx"])
        self.assertEqual(len(out), 2)
        ids = [TM._parse_task_meta(o)[0] for o in out]
        self.assertIn("2", ids)
        self.assertNotIn("1", ids)
        self.assertEqual(TM._strip_task_meta(out[0]), "x")
        self.assertEqual(TM._strip_task_meta(out[1]), "x")


class NormalizeCronTest(unittest.TestCase):
    def test_new_task_gets_id(self):
        out = TM._normalize_cron_tasks({"*/5 * * * *": "echo hi"}, {})
        m = TM._parse_task_meta(out["*/5 * * * *"])
        self.assertIsNotNone(m)
        self.assertEqual(TM._strip_task_meta(out["*/5 * * * *"]), "echo hi")

    def test_id_match_across_expr(self):
        # 同一条任务改了调度时间: 保留 id、刷新 updated、表达式随入参
        out = TM._normalize_cron_tasks({"0 9 * * *": f"{meta(7, 3)}\nwork"}, {"0 8 * * *": f"{meta(7, 3)}\nwork"})
        self.assertEqual(list(out.keys()), ["0 9 * * *"])
        self.assertEqual(TM._parse_task_meta(out["0 9 * * *"])[0], "7")
        self.assertGreater(TM._parse_task_meta(out["0 9 * * *"])[1], 3)

    def test_unchanged_idempotent(self):
        out = TM._normalize_cron_tasks({"0 8 * * *": f"{meta(7, 1)}\nwork"}, {"0 8 * * *": f"{meta(7, 9)}\nwork"})
        self.assertEqual(out, {"0 8 * * *": f"{meta(7, 9)}\nwork"})

    def test_changed_content_bumps_updated(self):
        out = TM._normalize_cron_tasks({"0 8 * * *": f"{meta(7, 3)}\nnew"}, {"0 8 * * *": f"{meta(7, 3)}\nold"})
        self.assertEqual(TM._parse_task_meta(out["0 8 * * *"])[0], "7")
        self.assertGreater(TM._parse_task_meta(out["0 8 * * *"])[1], 3)
        self.assertEqual(TM._strip_task_meta(out["0 8 * * *"]), "new")

    def test_removed_expr_dropped(self):
        out = TM._normalize_cron_tasks({"0 8 * * *": f"{meta(1, 1)}\na"}, {"0 8 * * *": f"{meta(1, 1)}\na", "0 9 * * *": f"{meta(2, 2)}\nb"})
        self.assertEqual(list(out.keys()), ["0 8 * * *"])

    def test_legacy_stored_adopts_incoming_id(self):
        out = TM._normalize_cron_tasks({"0 8 * * *": f"{meta(42, 99)}\na"}, {"0 8 * * *": "a"})
        self.assertEqual(out, {"0 8 * * *": f"{meta(42, 99)}\na"})

    def test_bare_incoming_keeps_stored_id(self):
        out = TM._normalize_cron_tasks({"0 8 * * *": "a"}, {"0 8 * * *": f"{meta(7, 3)}\na"})
        self.assertEqual(out, {"0 8 * * *": f"{meta(7, 3)}\na"})

    def test_empty_incoming_clears(self):
        self.assertEqual(TM._normalize_cron_tasks({}, {"0 8 * * *": f"{meta(1, 1)}\na"}), {})


class SetterIntegrationTest(unittest.TestCase):
    """setter 端到端: 赋值前规范化, 响应回显带元数据行"""

    def setUp(self):
        self.saved_ot = agent.Config.onetasks
        self.saved_ct = agent.Config.crontasks
        agent.Config.onetasks = []
        agent.Config.crontasks = {}
        self.tm = agent.TaskManager()

    def tearDown(self):
        agent.Config.onetasks = self.saved_ot
        agent.Config.crontasks = self.saved_ct
        # set_cron_tasks 会拉起后台 cron 循环线程, 测试结束前停掉
        try:
            self.tm.stop_cron_loop()
        except Exception:
            pass

    def test_set_onetime_stamps_meta(self):
        self.tm.set_onetime_tasks(["echo hi"])
        self.assertEqual(len(agent.Config.onetasks), 1)
        self.assertIsNotNone(TM._parse_task_meta(agent.Config.onetasks[0]))

    def test_set_onetime_roundtrip_stable(self):
        self.tm.set_onetime_tasks(["echo hi"])
        first = list(agent.Config.onetasks)
        # 同内容重复推送: 幂等, updated 不推进
        self.tm.set_onetime_tasks(first)
        self.assertEqual(agent.Config.onetasks, first)

    def test_set_cron_stamps_meta_and_keeps_id_on_expr_change(self):
        self.tm.set_cron_tasks({"0 8 * * *": "work"})
        first = dict(agent.Config.crontasks)
        mid = TM._parse_task_meta(first["0 8 * * *"])
        # 改调度时间后重推: id 不变
        self.tm.set_cron_tasks({"0 9 * * *": first["0 8 * * *"]})
        self.assertEqual(list(agent.Config.crontasks.keys()), ["0 9 * * *"])
        self.assertEqual(TM._parse_task_meta(agent.Config.crontasks["0 9 * * *"])[0], mid[0])


if __name__ == "__main__":
    unittest.main(verbosity=2)
