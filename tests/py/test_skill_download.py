"""kisama-skill 控制端 download 尺寸预检与分片流水线单测 (0.6.2, 不启动 agent, 不触网)

运行: python tests/py/test_skill_download.py

假代理只实现分片流程真正用到的四个面: file/list 父目录条目、file/new、exec 路由、
file/download 裸流通道。其中 exec 由一个小解释器按语义执行脚本生成的那条命令
(tail|head 真的从内存里的源文件切出对应字节), 因此断言落在"取回并拼接出的字节"上,
而不是落在"我调用了哪个函数"上。
"""
import re
import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "kisama-skill" / "scripts"))

import kisama_control as kc  # noqa: E402

ECDSA_HEX = "ab" * 32
ECIES_HEX = "cd" * 32

_PATH = r"(?:'([^']+)'|(\S+))"
TOTAL = 1030       # 源文件字节数
CHUNK = 300        # 测试用分片大小 -> 4 片 (300/300/300/130)


def _path_of(match, index):
    value = match.group(index)
    if value is not None:
        return value
    raise AssertionError("路径未匹配")


class _Node:
    """内存假代理: 源文件 + 分片流水线写出的临时分片。"""

    def __init__(self, size=TOTAL, root="/srv/agent", cwd="/var/lib/agent", home=None,
                 posix=True, dir_type="directory", file_type="file", with_size=True):
        self.fs = {f"{root}/uploads/big.bin": _payload(size)}
        self.root = root
        self.cwd = cwd
        self.home = root if home is None else home
        self.posix = posix
        self.dir_type = dir_type
        self.file_type = file_type
        self.with_size = with_size
        self.commands = []
        self.exec_paths = []
        self.downloaded = []
        self.download_timeouts = []
        self.mkdirs = []
        self.deletes = []
        self.cuts = []
        self.mkdir_409 = False              # 模拟上次中断留下的临时目录
        self.short_cuts = set()             # 序号集合: 远端切片少写 7 字节
        self.short_downloads = set()        # 相对路径集合: 下载通道少回 7 字节

    # ── 文件 API ────────────────────────────────────────────────
    def _base(self, rel):
        rel = (rel or ".").strip().replace("\\", "/").strip("/")
        return self.root if rel in ("", ".") else f"{self.root}/{rel}"

    def list(self, rel):
        prefix = self._base(rel) + "/"
        entries, dirs = [], set()
        for key in sorted(self.fs):
            if not key.startswith(prefix):
                continue
            rest = key[len(prefix):]
            if "/" in rest:
                dirs.add(rest.split("/", 1)[0])
                continue
            entry = {"name": rest, "path": rest, "type": self.file_type}
            if self.with_size:
                entry["size"] = len(self.fs[key])
            entries.append(entry)
        for name in sorted(dirs):
            entries.append({"name": name, "path": name, "type": self.dir_type, "size": 0})
        return {"status": "ok", "count": len(entries), "files": entries}

    # ── exec 小解释器 (只认流水线生成的那几种命令) ────────────────
    def run(self, cmd):
        self.commands.append(cmd)
        if not self.posix:
            return 127, "sh: tail: not found\n"
        if cmd == "pwd":
            return 0, f"{self.cwd}\n"
        if cmd == "printenv HOME":
            return 0, f"{self.home}\n"
        match = re.fullmatch(rf"wc -c < {_PATH}", cmd)
        if match:
            path = _path_of(match, 1) if match.group(1) is not None else _path_of(match, 2)
            return (0, f"{len(self.fs[path])}\n") if path in self.fs else (1, "wc: no such file\n")
        match = re.fullmatch(rf"wc -c {_PATH}", cmd)
        if match:
            path = match.group(1) or match.group(2)
            if path not in self.fs:
                return 1, f"wc: {path}: No such file or directory\n"
            return 0, f"{len(self.fs[path])} {path}\n"
        match = re.fullmatch(
            rf"tail -c \+(\d+) {_PATH} \| head -c (\d+) > {_PATH} && wc -c < {_PATH}", cmd)
        if match:
            # tail -c +N 是 1-based: N=1 表示从头开始
            start = int(match.group(1)) - 1
            src = match.group(2) or match.group(3)
            length = int(match.group(4))
            dst = match.group(5) or match.group(6)
            data = self.fs.get(src, b"")[start:start + length]
            if len(self.cuts) in self.short_cuts:
                data = data[:-7]
            self.fs[dst] = data
            self.cuts.append((start, length))
            return 0, f"{len(data)}\n"
        match = re.fullmatch(rf"rm -f {_PATH}", cmd)
        if match:
            self.fs.pop(match.group(1) or match.group(2), None)
            return 0, ""
        match = re.fullmatch(rf"rmdir {_PATH} {_PATH}", cmd)
        if match:
            for index in (1, 2, 3, 4):
                path = match.group(index)
                if path and any(key.startswith(path + "/") for key in self.fs):
                    return 1, f"rmdir: {path}: Directory not empty\n"
            return 0, ""
        raise AssertionError(f"假代理未实现该命令: {cmd}")


class _StubClient(kc.KisamaClient):
    """把网络层换成 _Node: 只保留 download 流程用到的三个入口。"""

    def __init__(self, node, timeout=30.0):
        super().__init__("https://node.invalid", ECDSA_HEX, ECIES_HEX, timeout=timeout, session_cache=None)
        self.node = node

    def _ensure_session(self):
        # 假代理不做握手; delete 路由自适应只读 self.agent_version (None -> 非 php -> DELETE /api/file)
        return None

    def request_json(self, method, path, payload=None):
        node = self.node
        if path == "/api/file/list":
            return node.list(payload["path"])
        if path in ("/api/file", "/api/file/delete"):
            # delete 路由 (docs/API.MD 的 PHP 兼容双路由) 语义一致, 假代理按相对路径递归删
            targets = list(payload["paths"])
            node.deletes.append(targets)
            for rel in targets:
                abs_path = f"{node.root}/{rel}"
                node.fs = {k: v for k, v in node.fs.items()
                           if not (k == abs_path or k.startswith(abs_path + "/"))}
            return {"status": "ok", "results": [{"path": p, "status": "deleted"} for p in targets]}
        if path == "/api/file/new":
            rel = payload["path"]
            node.mkdirs.append(rel)
            if node.mkdir_409 or any(key.startswith(f"{node.root}/{rel}/") for key in node.fs):
                raise kc.KisamaError(f"HTTP 409: Exists: {rel}")
            return {"status": "ok", "path": rel}
        if path in ("/api/exec", "/api/do", "/api/run", "/api/work"):
            node.exec_paths.append(path)
            code, out = node.run(payload["cmd"])
            return {"result": out, "exitcode": code, "timeout": False, "cmd": payload["cmd"]}
        raise AssertionError(f"download 流程不该请求该路径: {path}")

    def request_binary(self, method, path, payload=None, timeout=None):
        assert path == "/api/file/download", path
        node = self.node
        rel = payload["path"]
        abs_path = rel if rel.startswith("/") else node._base(rel)
        if abs_path not in node.fs:
            raise kc.KisamaError(f"HTTP 404: Not found: {rel}")
        node.downloaded.append(rel)
        node.download_timeouts.append(timeout)
        data = node.fs[abs_path]
        return data[:-7] if rel in node.short_downloads else data


def _payload(size):
    return bytes((index * 37 + 11) % 251 for index in range(size))


class DownloadBase(unittest.TestCase):

    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.local_dir = Path(self.tmp.name) / "out"
        self.dest = self.local_dir / "big.bin"
        self.part = self.dest.with_name(self.dest.name + ".part")

    def _client(self, node):
        return _StubClient(node)

    def _download(self, node, chunk_size=CHUNK, mode="auto", **kw):
        return self._client(node).download("uploads/big.bin", str(self.dest),
                                           chunk_size=chunk_size, mode=mode, **kw)


class DirectModeTest(DownloadBase):

    def test_small_file_single_shot_and_no_exec_overhead(self):
        node = _Node()
        result = self._download(node, chunk_size=32 * 1024 * 1024)
        self.assertEqual(result["mode"], "direct")
        self.assertEqual(result["size"], TOTAL)
        self.assertEqual(result["remote_size"], TOTAL)
        self.assertEqual(self.dest.read_bytes(), _payload(TOTAL))
        self.assertEqual(node.downloaded, ["uploads/big.bin"])
        self.assertEqual(node.commands, [])

    def test_timeout_follows_real_size_not_assumed_64mib(self):
        node = _Node(size=5 * 1024 * 1024)
        result = self._download(node, chunk_size=32 * 1024 * 1024)
        self.assertEqual(result["mode"], "direct")
        # 5MiB / 256KiB/s + 15 = 35s (旧实现恒按假定 64MiB 算出 ~271s)
        self.assertEqual(node.download_timeouts, [35.0])
        self.assertEqual(result["size"], 5 * 1024 * 1024)

    def test_directory_is_fatal_before_transfer(self):
        node = _Node(file_type="directory ")   # java 版历史上带尾随空格的取值
        with self.assertRaises(kc.KisamaError) as ctx:
            self._download(node)
        self.assertIn("是目录", str(ctx.exception))
        self.assertIn("zip", str(ctx.exception))
        self.assertEqual(node.downloaded, [])
        self.assertEqual(node.commands, [])
        self.assertFalse(self.dest.exists())

    def test_missing_file_is_fatal_before_transfer(self):
        node = _Node()
        with self.assertRaises(kc.KisamaError) as ctx:
            self._client(node).download("uploads/nope.bin", str(self.dest), chunk_size=CHUNK)
        self.assertIn("不存在", str(ctx.exception))
        self.assertEqual(node.downloaded, [])

    def test_explicit_direct_keeps_old_behaviour_on_preflight_error(self):
        node = _Node(file_type="directory")
        result = self._download(node, mode="direct")
        self.assertEqual(result["mode"], "direct")
        self.assertIn("preflight_error", result)
        self.assertEqual(node.downloaded, ["uploads/big.bin"])   # 成败仍交由代理端判定

    def test_uncertain_preflight_falls_back_to_direct(self):
        node = _Node(with_size=False)
        result = self._download(node)
        self.assertEqual(result["mode"], "direct")
        self.assertIn("preflight_error", result)
        self.assertNotIn("remote_size", result)
        self.assertEqual(self.dest.read_bytes(), _payload(TOTAL))

    def test_empty_remote_file_goes_direct(self):
        node = _Node(size=0)
        result = self._download(node)
        self.assertEqual(result["mode"], "direct")
        self.assertEqual(result["size"], 0)
        self.assertEqual(self.dest.read_bytes(), b"")


class SplitModeTest(DownloadBase):

    def test_splits_reassembles_and_leaves_no_remote_parts(self):
        node = _Node()
        result = self._download(node)
        self.assertEqual(result["mode"], "split")
        self.assertEqual(result["parts_total"], 4)
        self.assertEqual(result["parts_fetched"], 4)
        self.assertEqual(result["resumed_bytes"], 0)
        self.assertEqual(result["remote_size"], TOTAL)
        self.assertEqual(self.dest.read_bytes(), _payload(TOTAL))
        self.assertFalse(self.part.exists())
        # 远端只剩源文件: 每片取回即删, 峰值占用不超过一个分片
        self.assertEqual(sorted(node.fs), ["/srv/agent/uploads/big.bin"])
        self.assertTrue(any(cmd.startswith("rm -f ") for cmd in node.commands))
        self.assertTrue(any(cmd.startswith("rmdir ") for cmd in node.commands))

    def test_cut_offsets_and_lengths(self):
        node = _Node()
        self._download(node)
        self.assertEqual(node.cuts, [(0, 300), (300, 300), (600, 300), (900, 130)])
        self.assertEqual(len(node.downloaded), 4)
        self.assertEqual(node.download_timeouts, [30.0] * 4)   # 每片按分片大小算, 落在下限

    def test_resume_continues_from_local_part(self):
        self.local_dir.mkdir(parents=True, exist_ok=True)
        self.part.write_bytes(_payload(TOTAL)[:600])
        node = _Node()
        result = self._download(node)
        self.assertEqual(result["resumed_bytes"], 600)
        self.assertEqual(result["parts_fetched"], 2)
        self.assertEqual(node.cuts, [(600, 300), (900, 130)])
        self.assertEqual(self.dest.read_bytes(), _payload(TOTAL))

    def test_resume_discards_partial_last_chunk(self):
        self.local_dir.mkdir(parents=True, exist_ok=True)
        self.part.write_bytes(_payload(TOTAL)[:500])   # 半个分片
        node = _Node()
        result = self._download(node)
        self.assertEqual(result["resumed_bytes"], 300)
        self.assertEqual(node.cuts, [(300, 300), (600, 300), (900, 130)])
        self.assertEqual(self.dest.read_bytes(), _payload(TOTAL))

    def test_existing_parts_dir_is_tolerated(self):
        node = _Node()
        node.mkdir_409 = True
        result = self._download(node)
        self.assertEqual(result["mode"], "split")
        self.assertEqual(len(node.mkdirs), 1)
        self.assertEqual(self.dest.read_bytes(), _payload(TOTAL))

    def test_remote_cut_length_mismatch_raises(self):
        node = _Node()
        node.short_cuts = {1}
        with self.assertRaises(kc.KisamaError) as ctx:
            self._download(node)
        message = str(ctx.exception)
        self.assertIn("远端切第 1 片失败", message)
        self.assertIn("POSIX", message)
        self.assertFalse(self.dest.exists())
        self.assertTrue(self.part.exists())   # 已取回的第 0 片保留, 可续传
        self.assertEqual(self.part.stat().st_size, 300)

    def test_short_part_from_download_channel_raises_then_resume_completes(self):
        # 分片目录名带本地路径摘要, 事先写不死 -> 先用一台同构假代理跑一遍拿到实际相对路径
        probe = _Node()
        self._download(probe)
        bad_rel = probe.downloaded[1]
        self.dest.unlink()            # 探路那次已成功落盘, 清掉才能断言失败那次没产出
        node = _Node()
        node.short_downloads = {bad_rel}
        with self.assertRaises(kc.KisamaError) as ctx:
            self._download(node)
        self.assertIn("与远端 300 字节不符", str(ctx.exception))
        self.assertFalse(self.dest.exists())
        self.assertEqual(self.part.stat().st_size, 300)
        node.short_downloads = set()
        result = self._download(node)
        self.assertEqual(result["resumed_bytes"], 300)
        self.assertEqual(self.dest.read_bytes(), _payload(TOTAL))

    def test_keep_parts_skips_remote_cleanup(self):
        node = _Node()
        result = self._download(node, keep_parts=True)
        self.assertTrue(result["parts_kept"])
        self.assertEqual(len(node.downloaded), 4)
        self.assertEqual(len(node.fs), 5)   # 源文件 + 4 个分片
        self.assertFalse(any(cmd.startswith(("rm -f", "rmdir")) for cmd in node.commands))
        self.assertEqual(self.dest.read_bytes(), _payload(TOTAL))

    def test_non_posix_exec_reports_actionable_error(self):
        node = _Node(posix=False)
        with self.assertRaises(kc.KisamaError) as ctx:
            self._download(node, mode="split", root_abs="/srv/agent")
        message = str(ctx.exception)
        self.assertIn("POSIX", message)
        self.assertIn("--mode direct", message)
        self.assertFalse(self.dest.exists())
        self.assertFalse(self.part.exists())   # 0 字节空壳不留在本地

    def test_split_without_preflight_info_is_fatal(self):
        node = _Node(with_size=False)
        with self.assertRaises(kc.PreflightUncertainError) as ctx:
            self._download(node, mode="split")
        self.assertIn("无法预检", str(ctx.exception))
        self.assertEqual(node.downloaded, [])
        self.assertEqual(node.commands, [])


class RootDiscoveryTest(DownloadBase):

    def test_pwd_miss_falls_back_to_home(self):
        node = _Node(cwd="/var/lib/agent", home="/srv/agent")
        result = self._download(node)
        self.assertEqual(result["mode"], "split")
        self.assertIn("pwd", node.commands)
        self.assertIn("printenv HOME", node.commands)
        self.assertEqual(self.dest.read_bytes(), _payload(TOTAL))

    def test_pwd_hit_skips_home_probe(self):
        node = _Node(cwd="/srv/agent", home="/other")
        result = self._download(node)
        self.assertEqual(result["mode"], "split")
        self.assertNotIn("printenv HOME", node.commands)

    def test_no_candidate_gives_actionable_error(self):
        node = _Node(cwd="/var/lib/agent", home="/home/other")
        with self.assertRaises(kc.KisamaError) as ctx:
            self._download(node, mode="split")
        message = str(ctx.exception)
        self.assertIn("--root-abs", message)
        self.assertIn("--mode direct", message)
        self.assertFalse(self.dest.exists())
        self.assertEqual(node.downloaded, [])

    def test_root_abs_skips_discovery(self):
        node = _Node(cwd="/var/lib/agent", home="/home/other")
        result = self._download(node, root_abs="/srv/agent/")
        self.assertEqual(result["mode"], "split")
        self.assertNotIn("pwd", node.commands)
        self.assertEqual(self.dest.read_bytes(), _payload(TOTAL))

    def test_exec_route_override_used(self):
        node = _Node()
        self._download(node, exec_route="/api/do")
        self.assertEqual(set(node.exec_paths), {"/api/do"})

    def test_parts_dir_scoped_per_local_target(self):
        node = _Node()
        self._download(node, chunk_size=600)
        other_node = _Node()
        other = Path(self.tmp.name) / "other" / "copy.bin"
        self._client(other_node).download("uploads/big.bin", str(other), chunk_size=600)
        self.assertNotEqual(node.mkdirs, other_node.mkdirs)   # 不同本地目标不共用临时目录
        self.assertTrue(node.mkdirs[0].startswith(".kisama_parts/"))


class SplitFallbackTest(DownloadBase):
    """auto 选到分片而这台机器做不了分片时回退单次整取 (旧行为可用), 显式 split 不回退。"""

    def test_auto_falls_back_to_direct_on_non_posix_exec(self):
        node = _Node(posix=False)
        result = self._download(node, root_abs="/srv/agent")
        self.assertEqual(result["mode"], "direct")
        self.assertIn("POSIX", result["split_fallback"])
        self.assertEqual(result["remote_size"], TOTAL)
        self.assertEqual(self.dest.read_bytes(), _payload(TOTAL))
        self.assertFalse(self.part.exists())
        # 回退后走的就是旧路径: 一次整取, 源文件未被流水线碰过
        self.assertEqual(node.downloaded, ["uploads/big.bin"])
        self.assertEqual(sorted(node.fs), ["/srv/agent/uploads/big.bin"])

    def test_auto_falls_back_when_file_root_unlocatable(self):
        node = _Node(cwd="/var/lib/agent", home="/home/other")
        result = self._download(node)
        self.assertEqual(result["mode"], "direct")
        self.assertIn("FILE_ROOT", result["split_fallback"])
        self.assertEqual(self.dest.read_bytes(), _payload(TOTAL))
        self.assertFalse(self.part.exists())

    def test_explicit_split_does_not_fall_back(self):
        node = _Node(posix=False)
        with self.assertRaises(kc.SplitUnavailableError):
            self._download(node, mode="split", root_abs="/srv/agent")
        self.assertEqual(node.downloaded, [])
        self.assertFalse(self.dest.exists())

    def test_failure_after_progress_never_switches_method_silently(self):
        # 本地已有续传进度时首片失败: 不回退 (那会丢掉已取回的字节), 报错并保留 .part
        self.local_dir.mkdir(parents=True, exist_ok=True)
        self.part.write_bytes(_payload(TOTAL)[:600])
        node = _Node(posix=False)
        with self.assertRaises(kc.KisamaError) as ctx:
            self._download(node, root_abs="/srv/agent")
        self.assertNotIsInstance(ctx.exception, kc.SplitUnavailableError)
        self.assertIn("远端切第 2 片失败", str(ctx.exception))
        self.assertEqual(self.part.stat().st_size, 600)
        self.assertFalse(self.dest.exists())

    def test_direct_mode_is_unaffected(self):
        node = _Node()
        result = self._download(node, mode="direct")
        self.assertNotIn("split_fallback", result)
        self.assertEqual(node.commands, [])

    def test_fallback_sweeps_created_parts_dir_via_file_api(self):
        # 这类节点 exec 删不动, 回退前用文件 API 把刚为自己创建的临时目录收干净
        node = _Node(posix=False)
        result = self._download(node, root_abs="/srv/agent")
        self.assertEqual(result["mode"], "direct")
        own = node.deletes[0][0]
        self.assertTrue(own.startswith(".kisama_parts/"), own)
        self.assertEqual(node.deletes, [[own], [".kisama_parts"]])   # 父目录空了才删
        self.assertNotIn(".kisama_parts", node.list(".kisama_parts")["files"])

    def test_fallback_keeps_shared_parent_parts_dir(self):
        # 别的下载还在 .kisama_parts 下留了分片: 只删自己的目录, 绝不碰父目录
        node = _Node(posix=False)
        node.fs["/srv/agent/.kisama_parts/other-run-00000.part"] = b"x" * 10
        result = self._download(node, root_abs="/srv/agent")
        self.assertEqual(result["mode"], "direct")
        self.assertEqual(len(node.deletes), 1)
        self.assertTrue(node.deletes[0][0].startswith(".kisama_parts/"))
        self.assertIn("/srv/agent/.kisama_parts/other-run-00000.part", node.fs)

    def test_keep_parts_still_leaves_everything(self):
        node = _Node(posix=False)
        result = self._download(node, root_abs="/srv/agent", keep_parts=True)
        self.assertEqual(result["mode"], "direct")
        self.assertEqual(node.deletes, [])

    def test_explicit_split_sweeps_but_keeps_error(self):
        # 强制分片同样不收垃圾 (排障要用 --keep-parts), 但错误照抛、不回退
        node = _Node(posix=False)
        with self.assertRaises(kc.SplitUnavailableError):
            self._download(node, mode="split", root_abs="/srv/agent")
        self.assertEqual(len(node.deletes), 2)
        self.assertEqual(node.downloaded, [])


class HelperTest(unittest.TestCase):

    def test_first_int_accepts_both_wc_forms(self):
        self.assertEqual(kc._first_int("123 /a/b\n"), 123)
        self.assertEqual(kc._first_int("123\n"), 123)
        self.assertEqual(kc._first_int("no digits"), None)

    def test_remote_join_skips_empty_and_strips_slashes(self):
        self.assertEqual(kc._remote_join("/root/", ".kisama_parts", "/00000.part/"),
                         "/root/.kisama_parts/00000.part")
        self.assertEqual(kc._remote_join("/root", ""), "/root")

    def test_safe_part_name_only_keeps_quiet_chars(self):
        self.assertEqual(kc._safe_part_name("bd_快照 v1.tar.gz"), "bd____v1.tar.gz")
        self.assertEqual(kc._safe_part_name(""), "file")


class ParserWiringTest(unittest.TestCase):

    def test_download_flags_parse(self):
        args = kc.build_parser().parse_args([
            "--url", "https://node.invalid", "--ecdsa-key", ECDSA_HEX, "--ecies-key", ECIES_HEX,
            "download", "--remote-path", "uploads/big.bin", "--local", "/tmp/big.bin",
            "--chunk-size", "300", "--mode", "split", "--root-abs", "/srv/agent",
            "--exec-route", "/api/do", "--keep-parts",
        ])
        self.assertEqual(args.action, "download")
        self.assertEqual((args.chunk_size, args.mode, args.root_abs), (300, "split", "/srv/agent"))
        self.assertEqual((args.exec_route, args.keep_parts), ("/api/do", True))

    def test_download_defaults(self):
        args = kc.build_parser().parse_args([
            "--url", "https://node.invalid", "--ecdsa-key", ECDSA_HEX, "--ecies-key", ECIES_HEX,
            "download", "--remote-path", "a", "--local", "b",
        ])
        self.assertEqual((args.chunk_size, args.mode, args.root_abs, args.exec_route, args.keep_parts),
                         (kc.DOWNLOAD_CHUNK_DEFAULT, "auto", None, "/api/exec", False))


if __name__ == "__main__":
    unittest.main(verbosity=2)
