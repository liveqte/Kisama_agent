#!/usr/bin/env python3
"""KMODE=3 配置解析 (0.6.6, docs/API.MD 十九) 离线测试 — 子进程读 env 后断言 Config。

覆盖:
1. KMODE=3 合法 (解析点 py :936 对 "3" 原样保留, 归一化只处理 2q/2quic)
2. KHUB 尾斜杠剥除 / 缺省空串
3. KHUB_PORTS 逗号分隔解析: 合法收集、非法 (非数字/越界) 静默忽略、排序去重
4. 重试/心跳/超时/限额缺省值与 env 覆盖
"""

import os
import subprocess
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PY_DIR = ROOT / "py"

_PROBE_CODE = (
    "import sys; sys.path.insert(0, r'{py}'); import agent as a; "
    "print(repr((a.Config.KMODE, a.Config.KHUB, a.Config.KHUB_PORTS, "
    "a.Config.KHUB_PUBLIC_URL, "
    "a.Config.KISAMA_HUB_RETRY_BASE_SECONDS, a.Config.KISAMA_HUB_RETRY_MAX_SECONDS, "
    "a.Config.KISAMA_HUB_PING_INTERVAL, a.Config.KISAMA_HUB_MAX_BODY)))"
).format(py=str(PY_DIR))


def probe_env(env_extra):
    env = os.environ.copy()
    env.update(env_extra)
    out = subprocess.run(
        [sys.executable, "-I", "-c", _PROBE_CODE],
        env=env, capture_output=True, text=True, timeout=120,
    )
    if out.returncode != 0:
        raise AssertionError("probe failed: %s" % out.stderr[-500:])
    return eval(out.stdout.strip())  # noqa: S307 — 受控探针输出


class HubConfigEnvTest(unittest.TestCase):

    def test_kmode3_full_config(self):
        kmode, khub, ports, pub, base, mx, ping, max_body = probe_env({
            "KMODE": "3",
            "KHUB": "http://hub.example.com/",
            "KHUB_PORTS": "7788, 9090, abc, 0, 70000, 8080, 7788",
            "KHUB_PUBLIC_URL": "https://pub.example.com/hub///",
        })
        self.assertEqual(kmode, "3")
        self.assertEqual(khub, "http://hub.example.com")  # 尾斜杠剥除
        self.assertEqual(ports, (7788, 8080, 9090))       # 非法/越界忽略, 去重排序
        self.assertEqual(pub, "https://pub.example.com/hub")  # 公网基址修正值, 多重尾斜杠剥除
        self.assertEqual((base, mx, ping), (2.0, 60.0, 20.0))
        self.assertEqual(max_body, 64 * 1024 * 1024)

    def test_kmode3_without_hub(self):
        kmode, khub, ports, pub, *_ = probe_env({"KMODE": "3"})
        self.assertEqual(kmode, "3")
        self.assertEqual(khub, "")
        self.assertEqual(ports, ())
        self.assertEqual(pub, "")  # KHUB_PUBLIC_URL 缺省空 (未配置=不上报)

    def test_retry_env_overrides(self):
        *_, base, mx, ping, max_body = probe_env({
            "KMODE": "3",
            "KHUB": "https://hub.example.com",
            "KISAMA_HUB_RETRY_BASE_SECONDS": "3",
            "KISAMA_HUB_RETRY_MAX_SECONDS": "45",
            "KISAMA_HUB_PING_INTERVAL": "10",
            "KISAMA_HUB_MAX_BODY": str(1024 * 1024),
        })
        self.assertEqual((base, mx, ping), (3.0, 45.0, 10.0))
        self.assertEqual(max_body, 1024 * 1024)

    def test_kmode_2q_still_normalized(self):
        # 回归: 既有 2q/2quic 归一化语义不受 KMODE=3 新增影响
        kmode, quic_probe = None, None
        code = ("import sys; sys.path.insert(0, r'%s'); import agent as a; "
                "print(repr((a.Config.KMODE, a.Config.KMODE_QUIC)))" % str(PY_DIR))
        env = os.environ.copy()
        env["KMODE"] = "2quic"
        out = subprocess.run([sys.executable, "-I", "-c", code], env=env,
                             capture_output=True, text=True, timeout=120)
        kmode, quic = eval(out.stdout.strip())  # noqa: S307
        self.assertEqual((kmode, quic), ("2", True))


if __name__ == "__main__":
    unittest.main(verbosity=2)
