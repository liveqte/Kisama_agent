"""kisama-skill 分享链接解析 + 连接档案 + --node 直连单测 (0.5.8/0.6.2, 不启动 agent, 不触网)

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
                no_session_cache=False, link=None, profile=None, node=None)
    base.update(kw)
    return argparse.Namespace(**base)


def _connect_ns(**kw):
    """构造 do_connect 所需的 args (字段与 connect 子命令一致)。"""
    base = dict(link=None, url=None, ecdsa_key=None, ecies_key=None, insecure=False,
                timeout=30.0, clock_offset=None, no_session_cache=False,
                profile=None, node=None, show=False, list=False, force=False)
    base.update(kw)
    return argparse.Namespace(**base)


class _FakeClient:
    """替身: 记录是否被构造, 让"守门在联网之前"可断言。"""

    instances: list = []

    def __init__(self, url, ecdsa_key, ecies_key, timeout, session_cache, clock_offset, insecure):
        type(self).instances.append(self)
        self.url, self.ecdsa_key, self.ecies_key = url, ecdsa_key, ecies_key
        self.agent_version = "0.6.2-python"
        self.debug_mode = False
        self.plain_mode = False
        self.session_cache = session_cache
        self.session_key_b64 = None

    def bootstrap(self):
        return {"status": "ok", "version": self.agent_version}

    def save_cache(self):
        pass


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


class _ResolveSandbox(unittest.TestCase):
    """共用沙箱: 清空 KISAMA_* 环境变量, 档案落在临时目录, 需要时把 Path.home 也指过来。"""

    ENV_KEYS = ("KISAMA_URL", "KISAMA_ECDSA_KEY", "KISAMA_ECIES_KEY", "KISAMA_LINK", "KISAMA_PROFILE", "KISAMA_NODE", "KISAMA_SESSION_CACHE")

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

    def _node_file(self, name="nodea", url="http://nodea-host:1", **overrides):
        profile = {"url": url, "ecdsa_key": "a" * 64, "ecies_key": "b" * 64}
        profile.update(overrides)
        path = str(self.tmp / f"{name}.json")
        kc.save_profile(path, profile)
        return path

    def _named_profile(self, name, url="http://nodea-host:1", **overrides):
        """按档案名称保存 (经 _profile_path 解析, 配 _fake_home 落在临时 ~/.kisama)。"""
        profile = {"url": url, "ecdsa_key": "a" * 64, "ecies_key": "b" * 64}
        profile.update(overrides)
        return str(kc.save_profile(name, profile))

    def _fake_home(self):
        """把 ~/.kisama 重定位到临时目录 (测 _profile_path 的名称分支)。"""
        (self.tmp / ".kisama" / "profiles").mkdir(parents=True, exist_ok=True)
        return mock.patch.object(Path, "home", return_value=self.tmp)


class ResolveConnectionTest(_ResolveSandbox):

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


class NodeDirectTest(_ResolveSandbox):
    """--node 直连: 一条参数指定本次连哪台 (kisama:// 链接或档案), 优先级最高, 多台并行不串台。"""

    def test_node_link_beats_link_env_and_profile(self):
        self._save(insecure=True)                      # connect 写下的缺省档案
        os.environ["KISAMA_URL"] = "http://env-host"   # 残留环境变量
        args = _ns(link=_link(domain="http://link-host"), profile=self.profile,
                   node=_link(domain="https://node-host:8443"))
        kc.resolve_connection(args)
        self.assertEqual(args.url, "https://node-host:8443")
        self.assertEqual(args.ecdsa_key, ECDSA_HEX)    # 来自 --node 链接, 非档案的 f*64
        self.assertEqual(args.ecies_key, ECIES_HEX)
        self.assertFalse(args.insecure)                # 档案的 insecure 不泄漏给 --node 命令
        self.assertIsNone(args.session_cache)          # 链接形态一次性用法不落盘

    def test_node_file_beats_default_profile_and_env(self):
        self._save()
        os.environ["KISAMA_URL"] = "http://env-host"
        os.environ["KISAMA_ECDSA_KEY"] = "9" * 64
        node = self._node_file()
        args = _ns(profile=self.profile, node=node)
        kc.resolve_connection(args)
        self.assertEqual(args.url, "http://nodea-host:1")
        self.assertEqual(args.ecdsa_key, "a" * 64)
        self.assertEqual(args.ecies_key, "b" * 64)
        self.assertEqual(args.session_cache, node + ".session.json")

    def test_node_name_resolves_under_profiles_dir(self):
        with self._fake_home():
            node = self._named_profile("gt-tc")
            self.assertEqual(Path(node), self.tmp / ".kisama" / "profiles" / "gt-tc.json")
            args = _ns(profile=None, node="gt-tc")
            kc.resolve_connection(args)
            self.assertEqual(args.url, "http://nodea-host:1")
            self.assertEqual(args.session_cache, node + ".session.json")

    def test_node_missing_profile_raises_instead_of_silent_fallback(self):
        self._save()
        with self.assertRaises(kc.KisamaError) as ctx:
            kc.resolve_connection(_ns(profile=self.profile, node=str(self.tmp / "nope.json")))
        self.assertIn("不存在或不可读", str(ctx.exception))

    def test_node_broken_link_raises(self):
        with self.assertRaises(kc.KisamaError) as ctx:
            kc.resolve_connection(_ns(node="kisama://node?domain=1.2.3.4"))
        self.assertIn("缺少参数", str(ctx.exception))

    def test_node_cli_explicit_field_still_overrides(self):
        node = self._node_file()
        args = _ns(url="http://cli-host", node=node)
        kc.resolve_connection(args)
        self.assertEqual(args.url, "http://cli-host")
        self.assertEqual(args.ecdsa_key, "a" * 64)     # 未显式传的字段仍由 --node 补齐

    def test_node_insecure_from_link_and_file(self):
        args = _ns(node=_link(extra="insecure=1"))
        kc.resolve_connection(args)
        self.assertTrue(args.insecure)
        args = _ns(node=self._node_file(insecure=True))
        kc.resolve_connection(args)
        self.assertTrue(args.insecure)

    def test_two_nodes_do_not_share_session_cache(self):
        a, b = self._node_file(name="a", url="http://a:1"), self._node_file(name="b", url="http://b:1")
        first, second = _ns(node=a), _ns(node=b)
        kc.resolve_connection(first)
        kc.resolve_connection(second)
        self.assertEqual((first.url, second.url), ("http://a:1", "http://b:1"))
        self.assertNotEqual(first.session_cache, second.session_cache)
        self.assertEqual(first.session_cache, a + ".session.json")
        self.assertEqual(second.session_cache, b + ".session.json")

    def test_parser_reads_kisama_node_env_default(self):
        os.environ["KISAMA_NODE"] = "gt-tc"
        parser = kc.build_parser()
        self.assertEqual(parser.parse_args(["baseinfo"]).node, "gt-tc")
        self.assertEqual(parser.parse_args(["--node", "explicit", "baseinfo"]).node, "explicit")
        # --node 是全局开关, 写在子命令之后仍报错 (与 --profile/--link 一致的既有口径)
        with self.assertRaises(SystemExit):
            parser.parse_args(["baseinfo", "--node", "gt-tc"])

    def test_connect_maps_node_to_profile(self):
        node = self._node_file()
        args = _ns(profile=None, node=node, show=True, action="connect")
        result = kc.do_connect(args)
        self.assertEqual(result["mode"], "show")
        self.assertEqual(result["profile_path"], str(Path(node)))
        self.assertEqual(result["url"], "http://nodea-host:1")

    def test_disconnect_rejects_link_and_maps_name(self):
        with self.assertRaises(kc.KisamaError):
            kc.do_disconnect(_ns(profile=None, node=_link()))
        with self._fake_home():
            node = Path(self._named_profile("gone"))
            Path(str(node) + ".session.json").write_text("{}", encoding="utf-8")
            result = kc.do_disconnect(_ns(profile=None, node="gone"))
            self.assertEqual(result["status"], "ok")
            self.assertEqual(Path(result["profile_path"]), node)
            self.assertFalse(node.exists())
            self.assertFalse(Path(str(node) + ".session.json").exists())


class ConnectSlotTest(_ResolveSandbox):
    """多客户端共用 ~/.kisama: connect 不得抢占别人在用的缺省槽, --list 做只读盘点。"""

    def setUp(self):
        super().setUp()
        _FakeClient.instances = []

    def _holder(self, url="http://other-client:1"):
        kc.save_profile(None, {"url": url, "ecdsa_key": "f" * 64, "ecies_key": "e" * 64,
                               "agent_version": "0.6.0-go", "source": "link",
                               "saved_at": "2026-10-26T00:00:00Z"})

    def test_list_reports_default_slot_and_named_profiles(self):
        with self._fake_home():
            self._holder()
            named = self._named_profile("gt-tc", url="http://gt:1", insecure=True)
            Path(named + ".session.json").write_text("{}", encoding="utf-8")
            (self.tmp / ".kisama" / "profiles" / "broken.json").write_text("{not json", encoding="utf-8")
            rows = kc._profile_inventory()
            self.assertEqual([r["name"] for r in rows], ["<default>", "broken", "gt-tc"])
            default, broken, gt = rows
            self.assertTrue(default["is_default"])
            self.assertEqual(default["url"], "http://other-client:1")
            self.assertFalse(broken["valid"])
            self.assertTrue(gt["session_cached"])
            self.assertTrue(gt["insecure"])
            self.assertTrue(gt["has_ecdsa_key"])
            blob = json.dumps(rows, ensure_ascii=False)
            for secret in ("f" * 64, "a" * 64, "b" * 64, "e" * 64):   # 密钥材料一律不外泄
                self.assertNotIn(secret, blob)
            listed = kc.do_connect(_connect_ns(list=True))
            self.assertEqual((listed["mode"], listed["count"]), ("list", 3))

    def test_list_empty_home(self):
        with self._fake_home():
            self.assertEqual(kc._profile_inventory(), [])
            self.assertEqual(kc.do_connect(_connect_ns(list=True))["count"], 0)

    def test_connect_refuses_to_clobber_other_nodes_default_slot(self):
        with self._fake_home():
            self._holder()
            with mock.patch.object(kc, "KisamaClient", _FakeClient):
                with self.assertRaises(kc.KisamaError) as ctx:
                    kc.do_connect(_connect_ns(link=_link(domain="http://mine:2")))
            msg = str(ctx.exception)
            self.assertIn("http://other-client:1", msg)   # 占用者是谁要说清
            self.assertIn("--node", msg)                  # 给出改用 --node 的出路
            self.assertEqual(_FakeClient.instances, [])   # 拦在联网之前, 一次请求都不发
            self.assertEqual(kc.load_profile(None)["url"], "http://other-client:1")  # 缺省槽原样

    def test_conflict_also_covers_manual_url(self):
        with self._fake_home():
            self._holder()
            with mock.patch.object(kc, "KisamaClient", _FakeClient):
                with self.assertRaises(kc.KisamaError):
                    kc.do_connect(_connect_ns(url="http://mine:2", ecdsa_key="a" * 64, ecies_key="b" * 64))
            self.assertEqual(_FakeClient.instances, [])

    def test_same_node_reconnect_is_not_a_conflict(self):
        with self._fake_home():
            self._holder(url="http://slot-host:1")
            with mock.patch.object(kc, "KisamaClient", _FakeClient):
                result = kc.do_connect(_connect_ns(link=_link(domain="slot-host:1")))
            self.assertEqual(result["status"], "ok")
            self.assertEqual(len(_FakeClient.instances), 1)

    def test_slot_compare_ignores_case_and_trailing_slash_but_keeps_hash_route(self):
        with self._fake_home():
            self.assertIsNone(kc._default_slot_conflict("http://x"))   # 空槽不拦
            self._holder(url="HTTP://Slot-Host:1/")
            self.assertIsNone(kc._default_slot_conflict("http://slot-host:1"))
            # '#' 后是网关路由片段, 属不同目标 → 仍算冲突
            self.assertIsNotNone(kc._default_slot_conflict("http://slot-host:1#gw.example.com/agent.php"))

    def test_force_overwrites_default_slot(self):
        with self._fake_home():
            self._holder()
            with mock.patch.object(kc, "KisamaClient", _FakeClient):
                result = kc.do_connect(_connect_ns(link=_link(domain="http://mine:2"), force=True))
            self.assertEqual(result["url"], "http://mine:2")
            self.assertEqual(Path(result["profile_path"]), self.tmp / ".kisama" / "profile.json")
            self.assertEqual(kc.load_profile(None)["url"], "http://mine:2")

    def test_named_slot_bypasses_guard_and_leaves_default_untouched(self):
        with self._fake_home():
            self._holder()
            with mock.patch.object(kc, "KisamaClient", _FakeClient):
                by_profile = kc.do_connect(_connect_ns(link=_link(domain="http://mine:2"), profile="mine"))
                by_node = kc.do_connect(_connect_ns(link=_link(domain="http://mine:3"), node="mine3"))
            self.assertEqual(Path(by_profile["profile_path"]), self.tmp / ".kisama" / "profiles" / "mine.json")
            self.assertEqual(Path(by_node["profile_path"]), self.tmp / ".kisama" / "profiles" / "mine3.json")
            self.assertEqual(kc.load_profile(None)["url"], "http://other-client:1")

    def test_parser_accepts_list_and_force_on_connect(self):
        parser = kc.build_parser()
        listed = parser.parse_args(["connect", "--list"])
        self.assertTrue(listed.list)
        forced = parser.parse_args(["connect", "--force", "kisama://node?domain=1.2.3.4&ecdsaprikey=ab&eciesprikey=cd"])
        self.assertTrue(forced.force)
        self.assertTrue(forced.link.startswith("kisama://"))


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
