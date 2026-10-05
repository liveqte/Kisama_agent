"""kisama-skill 分享链接解析 + 连接档案单测 (0.5.8, 不启动 agent, 不触网)

运行: python tests/py/test_skill_profile.py
"""
import argparse
import base64
import json
import os
import sys
import tempfile
import unittest
from pathlib import Path
from unittest import mock

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "kisama-skill" / "scripts"))

import kisama_control as kc  # noqa: E402

ECDSA_HEX = "ab" * 32
ECIES_HEX = "cd" * 32


def _link(domain="1.2.3.4:8000", tls=None, extra=""):
    parts = [f"domain={domain}", f"ecdsaprikey={ECDSA_HEX}", f"eciesprikey={ECIES_HEX}"]
    if tls:
        parts.append(f"tls={tls}")
    if extra:
        parts.append(extra)
    return "kisama://node?" + "&".join(parts)


def _ns(**kw):
    """构造 resolve_connection 所需的 args (字段与 build_parser 一致)。"""
    base = dict(url=None, ecdsa_key=None, ecies_key=None, session_cache=None,
                no_session_cache=False, link=None, profile=None)
    base.update(kw)
    return argparse.Namespace(**base)


class ParseShareLinkTest(unittest.TestCase):

    def test_basic_host_port(self):
        r = kc.parse_share_link(_link())
        self.assertEqual(r["url"], "http://1.2.3.4:8000")
        self.assertEqual(r["ecdsa_key"], ECDSA_HEX)
        self.assertEqual(r["ecies_key"], ECIES_HEX)
        self.assertEqual(r["extra"], {})

    def test_tls_flag(self):
        self.assertEqual(kc.parse_share_link(_link(tls=1))["url"], "https://1.2.3.4:8000")
        self.assertEqual(kc.parse_share_link(_link(domain="a.b", extra="secure=true"))["url"], "https://a.b")

    def test_full_url_passthrough_with_hash_route(self):
        link = _link(domain="https://gw.example.com#real.host.net/k.php")
        r = kc.parse_share_link(link)
        self.assertEqual(r["url"], "https://gw.example.com#real.host.net/k.php")

    def test_unknown_params_into_extra(self):
        r = kc.parse_share_link(_link(extra="name=agentb&key_id=abcd1234&future=x"))
        self.assertEqual(r["extra"], {"name": "agentb", "key_id": "abcd1234", "future": "x"})

    def test_netloc_arbitrary_and_whitespace(self):
        r = kc.parse_share_link(f"  kisama://whatever?domain=h&ecdsaprikey={ECDSA_HEX}&eciesprikey={ECIES_HEX}  ")
        self.assertEqual(r["url"], "http://h")

    def test_percent_encoded_values(self):
        # 真实报告的形态: 生成端对值做了标准 URL 编码 (含 %23 形式的 # 网关路由)
        link = ("kisama://node?domain=https%3A%2F%2Fgw.cohesivity.app%2F%23gbjs.example.top%2Fk.php"
                "&name=tinkerhost"
                f"&ecdsaprikey={ECDSA_HEX}&eciesprikey={ECIES_HEX}")
        r = kc.parse_share_link(link)
        self.assertEqual(r["url"], "https://gw.cohesivity.app/#gbjs.example.top/k.php")
        self.assertEqual(r["ecdsa_key"], ECDSA_HEX)
        self.assertEqual(r["ecies_key"], ECIES_HEX)
        self.assertEqual(r["extra"], {"name": "tinkerhost"})

    def test_plus_sign_preserved(self):
        # unquote 不转 + 为空格: Base64 密钥材料中的 '+' 不被破坏
        b64_like = "AB+CD/EF=="
        r = kc.parse_share_link(f"kisama://node?domain=h&ecdsaprikey={b64_like}&eciesprikey={ECIES_HEX}")
        self.assertEqual(r["ecdsa_key"], b64_like)
        encoded = "AB%2BCD%2FEF%3D%3D"
        r2 = kc.parse_share_link(f"kisama://node?domain=h&ecdsaprikey={encoded}&eciesprikey={ECIES_HEX}")
        self.assertEqual(r2["ecdsa_key"], b64_like)

    def test_missing_params_reported(self):
        with self.assertRaises(kc.KisamaError) as ctx:
            kc.parse_share_link("kisama://node?domain=1.2.3.4")
        self.assertIn("ecdsaprikey", str(ctx.exception))
        self.assertIn("eciesprikey", str(ctx.exception))

    def test_non_kisama_scheme_rejected(self):
        with self.assertRaises(kc.KisamaError):
            kc.parse_share_link("https://1.2.3.4?domain=x")

    def test_no_query_rejected(self):
        with self.assertRaises(kc.KisamaError):
            kc.parse_share_link("kisama://node")


class ProfileStoreTest(unittest.TestCase):

    def setUp(self):
        self.tmp = Path(tempfile.mkdtemp(prefix="kisama_profile_test_"))
        self.profile = str(self.tmp / "p.json")

    def tearDown(self):
        import shutil
        shutil.rmtree(self.tmp, ignore_errors=True)

    def test_save_load_delete_roundtrip(self):
        path = kc.save_profile(self.profile, {"url": "http://x:1", "ecdsa_key": ECDSA_HEX})
        self.assertEqual(path, Path(self.profile))
        loaded = kc.load_profile(self.profile)
        self.assertEqual(loaded["url"], "http://x:1")
        self.assertTrue(kc.delete_profile(self.profile))
        self.assertIsNone(kc.load_profile(self.profile))
        self.assertFalse(kc.delete_profile(self.profile))  # 二次删除 noop

    def test_delete_also_removes_session_cache(self):
        kc.save_profile(self.profile, {"url": "http://x"})
        Path(self.profile + ".session.json").write_text("{}", encoding="utf-8")
        kc.delete_profile(self.profile)
        self.assertFalse(Path(self.profile + ".session.json").exists())

    def test_load_broken_profile_returns_none(self):
        self.profile = str(self.tmp / "bad.json")
        Path(self.profile).write_text("not json{{{", encoding="utf-8")
        self.assertIsNone(kc.load_profile(self.profile))

    @unittest.skipUnless(os.name == "posix", "POSIX 权限语义")
    def test_chmod_0600_on_posix(self):
        kc.save_profile(self.profile, {"url": "http://x"})
        self.assertEqual(os.stat(self.profile).st_mode & 0o777, 0o600)


class ProfilePathTest(unittest.TestCase):

    def test_default_path(self):
        self.assertEqual(kc._profile_path(None), Path.home() / ".kisama" / "profile.json")
        self.assertEqual(kc._profile_path(""), Path.home() / ".kisama" / "profile.json")

    def test_name_branch(self):
        self.assertEqual(kc._profile_path("agentb"), Path.home() / ".kisama" / "profiles" / "agentb.json")

    def test_path_branch(self):
        self.assertEqual(kc._profile_path("a/b.json"), Path.cwd() / "a" / "b.json")
        absolute = str(Path.home() / "x.json")
        self.assertEqual(kc._profile_path(absolute), Path(absolute))


class ResolveConnectionTest(unittest.TestCase):

    ENV_KEYS = ("KISAMA_URL", "KISAMA_ECDSA_KEY", "KISAMA_ECIES_KEY", "KISAMA_LINK", "KISAMA_PROFILE", "KISAMA_SESSION_CACHE")

    def setUp(self):
        self.tmp = Path(tempfile.mkdtemp(prefix="kisama_resolve_test_"))
        self.profile = str(self.tmp / "p.json")
        self._env_backup = {k: os.environ.get(k) for k in self.ENV_KEYS}
        for k in self.ENV_KEYS:
            os.environ.pop(k, None)

    def tearDown(self):
        import shutil
        shutil.rmtree(self.tmp, ignore_errors=True)
        for k, v in self._env_backup.items():
            if v is None:
                os.environ.pop(k, None)
            else:
                os.environ[k] = v

    def _save(self, **overrides):
        profile = {"url": "http://profile-host:1", "ecdsa_key": "f" * 64, "ecies_key": "e" * 64}
        profile.update(overrides)
        kc.save_profile(self.profile, profile)

    def test_profile_used_when_nothing_else(self):
        self._save()
        args = _ns(profile=self.profile)
        kc.resolve_connection(args)
        self.assertEqual(args.url, "http://profile-host:1")
        self.assertEqual(args.ecdsa_key, "f" * 64)
        self.assertEqual(args.ecies_key, "e" * 64)
        self.assertEqual(args.session_cache, self.profile + ".session.json")

    def test_cli_explicit_beats_everything(self):
        self._save()
        os.environ["KISAMA_URL"] = "http://env-host"
        args = _ns(url="http://cli-host", profile=self.profile)
        kc.resolve_connection(args)
        self.assertEqual(args.url, "http://cli-host")
        self.assertEqual(args.ecdsa_key, "f" * 64)  # 未显式传的字段仍由档案补齐

    def test_link_beats_env_and_profile(self):
        self._save()
        os.environ["KISAMA_URL"] = "http://env-host"
        os.environ["KISAMA_ECDSA_KEY"] = "9" * 64
        args = _ns(link=_link(domain="http://link-host"), profile=self.profile)
        kc.resolve_connection(args)
        self.assertEqual(args.url, "http://link-host")
        self.assertEqual(args.ecdsa_key, ECDSA_HEX)
        self.assertEqual(args.ecies_key, ECIES_HEX)

    def test_env_beats_profile(self):
        self._save()
        os.environ["KISAMA_URL"] = "http://env-host"
        args = _ns(profile=self.profile)
        kc.resolve_connection(args)
        self.assertEqual(args.url, "http://env-host")
        self.assertEqual(args.ecdsa_key, "f" * 64)

    def test_no_session_cache_flag_disables_default(self):
        self._save()
        args = _ns(profile=self.profile, no_session_cache=True)
        kc.resolve_connection(args)
        self.assertIsNone(args.session_cache)

    def test_explicit_session_cache_wins(self):
        self._save()
        args = _ns(profile=self.profile, session_cache="/tmp/my.json")
        kc.resolve_connection(args)
        self.assertEqual(args.session_cache, "/tmp/my.json")

    def test_link_without_profile_no_default_cache(self):
        # 隔离本机真实 ~/.kisama/profile.json: 模拟无档案环境
        with mock.patch.object(kc, "load_profile", return_value=None):
            args = _ns(link=_link())
            kc.resolve_connection(args)
        self.assertEqual(args.url, "http://1.2.3.4:8000")
        self.assertIsNone(args.session_cache)  # 无档案 → 不启用默认缓存 (--link 一次性不落盘)


class MaskSecretTest(unittest.TestCase):

    def test_mask_long(self):
        masked = kc._mask_secret(ECDSA_HEX)
        self.assertTrue(masked.startswith("ababab..."))
        self.assertTrue(masked.endswith("abab (len=64)"))

    def test_mask_short_and_empty(self):
        self.assertEqual(kc._mask_secret("abc"), "abc***")
        self.assertEqual(kc._mask_secret(""), "(未配置)")
        self.assertEqual(kc._mask_secret(None), "(未配置)")


class TerminalShellAdaptTest(unittest.TestCase):
    """Windows 代理一次性终端的 shell 感知 done 标记 (0.5.8)。"""

    def test_classify_from_welcome_frame(self):
        self.assertEqual(kc._resolve_terminal_shell("powershell", None), "powershell")
        self.assertEqual(kc._resolve_terminal_shell("PowerShell", None), "powershell")
        self.assertEqual(kc._resolve_terminal_shell("pwsh", None), "powershell")
        self.assertEqual(kc._resolve_terminal_shell("cmd", None), "cmd")
        self.assertEqual(kc._resolve_terminal_shell("bash", None), "posix")
        self.assertEqual(kc._resolve_terminal_shell("zsh", None), "posix")

    def test_classify_fallback_by_os(self):
        self.assertEqual(kc._resolve_terminal_shell(None, "Microsoft Windows 10"), "powershell")
        self.assertEqual(kc._resolve_terminal_shell(None, "windows"), "powershell")
        self.assertEqual(kc._resolve_terminal_shell(None, "Linux 5.15"), "posix")
        self.assertEqual(kc._resolve_terminal_shell(None, None), "posix")

    def test_powershell_payload(self):
        raw = kc._terminal_command_payload("echo hi", "__KISAMA_DONE__M123", "powershell").decode()
        self.assertIn("echo hi\r\n", raw)
        # 单语句: $? 在字符串构造时求值, 前一语句正是用户命令 (不得插入任何中间语句把 $? 重置)
        self.assertIn('Write-Output "__KISAMA_DONE__M123:$(if ($?) {0} else {1})__"\r\n', raw)
        self.assertNotIn("printf", raw)
        self.assertNotIn("__KISAMA_DONE____KISAMA_DONE__", raw)  # 无双前缀
        self.assertEqual(raw.count("\r\n"), 2)  # 仅两行: 用户命令 + 标记语句

    def test_cmd_payload(self):
        raw = kc._terminal_command_payload("dir", "__KISAMA_DONE__M456", "cmd").decode()
        self.assertIn("dir\r\necho.\r\necho __KISAMA_DONE__M456:%errorlevel%__\r\n", raw)
        self.assertNotIn("__KISAMA_DONE____KISAMA_DONE__", raw)

    def test_posix_payload_unchanged(self):
        raw = kc._terminal_command_payload("ls -la", "__KISAMA_DONE__M789", "posix").decode()
        self.assertIn("ls -la\nprintf '\\n__KISAMA_DONE__M789:%s__\\n' \"$?\"\n", raw)

    def test_powershell_echo_cannot_false_match(self):
        # 回显行内标记后跟的是未求值文本 ($(...)), 模式 (\d+) 不会误匹配回显
        import re
        raw = kc._terminal_command_payload("echo hi", "__KISAMA_DONE__Mabc123", "powershell").decode()
        marker_line = raw.split("\r\n")[1]
        self.assertFalse(re.search(r"__KISAMA_DONE__Mabc123:(\d+)__", marker_line))


if __name__ == "__main__":
    unittest.main(verbosity=2)
