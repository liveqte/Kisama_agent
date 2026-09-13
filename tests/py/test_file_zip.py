"""FileManager zip_items / unzip_archive 单测 (0.5.4, 不启动 agent)

运行: python tests/py/test_file_zip.py
"""
import os
import sys
import tempfile
import unittest
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "py"))

from fastapi import HTTPException  # noqa: E402

import agent  # noqa: E402


class FileZipTest(unittest.TestCase):

    def setUp(self):
        self.root = Path(tempfile.mkdtemp(prefix="kisama_zip_"))
        self.fm = agent.FileManager(root=str(self.root), audit=False)

    def tearDown(self):
        import shutil
        shutil.rmtree(self.root, ignore_errors=True)

    # ---------- 工具 ----------

    def _make_tree(self):
        src = self.root / "src"
        (src / "sub").mkdir(parents=True)
        (src / "a.txt").write_text("AAA", encoding="utf-8")
        (src / "sub" / "b.txt").write_text("BBB", encoding="utf-8")
        return src

    def _make_slip_zip(self, name="evil.zip"):
        """构造含 zip-slip 条目 (../) 的恶意 zip"""
        path = self.root / name
        with zipfile.ZipFile(path, "w") as zf:
            zf.writestr(zipfile.ZipInfo("../evil.txt"), "evil")
            zf.writestr(zipfile.ZipInfo("ok.txt"), "ok")
        return path

    # ---------- zip 压缩 ----------

    def test_zip_round_trip_directory(self):
        """目录递归打包 → 解压 → 内容一致"""
        src = self._make_tree()
        r = self.fm.zip_items("out.zip", ["src"])
        self.assertEqual(r["status"], "ok")
        self.assertEqual(r["entries"], 2)
        self.assertEqual(r["path"], str(Path("out.zip")))
        self.assertTrue((self.root / "out.zip").exists())

        r = self.fm.unzip_archive("out.zip", "dest")
        self.assertEqual(r["status"], "ok")
        self.assertEqual(r["extracted"], 2)
        self.assertEqual(r["skipped"], 0)
        self.assertEqual((self.root / "dest" / "src" / "a.txt").read_text(encoding="utf-8"), "AAA")
        self.assertEqual((self.root / "dest" / "src" / "sub" / "b.txt").read_text(encoding="utf-8"), "BBB")

    def test_zip_flat_no_top_prefix(self):
        """flat=True: 目录内容不带顶层目录名前缀"""
        src = self._make_tree()
        r = self.fm.zip_items("flat.zip", ["src"], flat=True)
        self.assertEqual(r["status"], "ok")
        with zipfile.ZipFile(self.root / "flat.zip") as zf:
            names = zf.namelist()
        self.assertIn("a.txt", names)
        self.assertIn("sub/b.txt", names)
        self.assertFalse(any(n.startswith("src/") for n in names))

    def test_zip_single_file_and_ghost(self):
        """单文件打包 + 不存在的 item 回显 not_found 不中断"""
        src = self._make_tree()
        r = self.fm.zip_items("mix.zip", ["src/a.txt", "ghost.txt"])
        self.assertEqual(r["status"], "ok")
        self.assertEqual(r["entries"], 1)
        statuses = {x["item"]: x["status"] for x in r["results"]}
        self.assertEqual(statuses["src/a.txt"], "ok")
        self.assertEqual(statuses["ghost.txt"], "not_found")

    def test_zip_overwrite_rebuild(self):
        """已存在时覆盖重建"""
        src = self._make_tree()
        self.fm.zip_items("out.zip", ["src"])
        r = self.fm.zip_items("out.zip", ["src/a.txt"])
        self.assertEqual(r["status"], "ok")
        with zipfile.ZipFile(self.root / "out.zip") as zf:
            self.assertEqual(zf.namelist(), ["a.txt"])

    def test_zip_target_is_directory_rejected(self):
        """目标是目录时 400"""
        self._make_tree()
        with self.assertRaises(HTTPException) as ctx:
            self.fm.zip_items("src", ["src/a.txt"])
        self.assertEqual(ctx.exception.status_code, 400)

    def test_zip_items_required(self):
        """items 为空 → 400 (handler 层); FileManager 层直接拒"""
        with self.assertRaises(HTTPException):
            self.fm.zip_items("out.zip", [])

    def test_zip_outside_root_denied(self):
        """沙箱逃逸 → 403"""
        with self.assertRaises(HTTPException) as ctx:
            self.fm.zip_items("../out.zip", ["src"])
        self.assertEqual(ctx.exception.status_code, 403)

    # ---------- unzip 解压 ----------

    def test_unzip_default_dest_is_zip_dir(self):
        """缺省 dest_path = zip 所在目录 (解压到此处)"""
        src = self._make_tree()
        self.fm.zip_items("out.zip", ["src"])
        r = self.fm.unzip_archive("out.zip")
        self.assertEqual(r["dest"], ".")  # 沙箱根显示为 "."
        self.assertTrue((self.root / "src" / "a.txt").exists())
        # 覆盖重建后的 zip 只含 a.txt, 与既有同名文件合并
        self.assertEqual((self.root / "src" / "a.txt").read_text(encoding="utf-8"), "AAA")

    def test_unzip_no_overwrite_skips_existing(self):
        """overwrite=False: 已存在目标文件跳过并计入 skipped"""
        src = self._make_tree()
        self.fm.zip_items("out.zip", ["src"])
        dest = self.root / "dest" / "src"
        dest.mkdir(parents=True)
        (dest / "a.txt").write_text("OLD", encoding="utf-8")

        r = self.fm.unzip_archive("out.zip", "dest", overwrite=False)
        self.assertEqual(r["extracted"], 1)   # 只有 b.txt
        self.assertEqual(r["skipped"], 1)     # a.txt 已存在被跳过
        self.assertEqual((dest / "a.txt").read_text(encoding="utf-8"), "OLD")

    def test_unzip_overwrite_replaces(self):
        """overwrite=True (缺省): 覆盖已存在文件"""
        src = self._make_tree()
        self.fm.zip_items("out.zip", ["src"])
        dest = self.root / "dest" / "src"
        dest.mkdir(parents=True)
        (dest / "a.txt").write_text("OLD", encoding="utf-8")

        r = self.fm.unzip_archive("out.zip", "dest")
        self.assertEqual(r["extracted"], 2)
        self.assertEqual((dest / "a.txt").read_text(encoding="utf-8"), "AAA")

    def test_unzip_zip_slip_entries_skipped(self):
        """zip-slip 条目 (../) 计入 skipped, 不逃出目标目录"""
        self._make_slip_zip()
        r = self.fm.unzip_archive("evil.zip", "dest")
        self.assertEqual(r["status"], "ok")
        self.assertEqual(r["extracted"], 1)  # ok.txt
        self.assertEqual(r["skipped"], 1)    # ../evil.txt
        self.assertFalse((self.root / "evil.txt").exists())
        self.assertEqual((self.root / "dest" / "ok.txt").read_text(encoding="utf-8"), "ok")

    def test_unzip_entries_filter(self):
        """entries 过滤: 精确名或不带路径匹配"""
        src = self._make_tree()
        self.fm.zip_items("out.zip", ["src"])
        # 不带路径匹配 (basename)
        r = self.fm.unzip_archive("out.zip", "dest1", entries=["b.txt"])
        self.assertEqual(r["extracted"], 1)
        self.assertTrue((self.root / "dest1" / "src" / "sub" / "b.txt").exists())
        # 精确名
        r = self.fm.unzip_archive("out.zip", "dest2", entries=["src/a.txt"])
        self.assertEqual(r["extracted"], 1)
        self.assertTrue((self.root / "dest2" / "src" / "a.txt").exists())

    def test_unzip_not_a_zip(self):
        """非 zip 文件 → 400"""
        (self.root / "fake.zip").write_bytes(b"this is not a zip file at all.........")
        with self.assertRaises(HTTPException) as ctx:
            self.fm.unzip_archive("fake.zip", "dest")
        self.assertEqual(ctx.exception.status_code, 400)

    def test_unzip_zip_not_found(self):
        """zip 不存在 → 400"""
        with self.assertRaises(HTTPException) as ctx:
            self.fm.unzip_archive("noexist.zip", "dest")
        self.assertEqual(ctx.exception.status_code, 400)

    def test_unzip_dest_is_file_rejected(self):
        """dest_path 指向文件 → 400"""
        src = self._make_tree()
        self.fm.zip_items("out.zip", ["src"])
        with self.assertRaises(HTTPException) as ctx:
            self.fm.unzip_archive("out.zip", "src/a.txt")
        self.assertEqual(ctx.exception.status_code, 400)

    def test_unzip_files_truncated_flag(self):
        """files 列表超过 500 条时 files_truncated=true"""
        big = self.root / "big"
        big.mkdir()
        for i in range(505):
            (big / f"f{i:03d}.txt").write_text("x", encoding="utf-8")
        self.fm.zip_items("big.zip", ["big"])
        r = self.fm.unzip_archive("big.zip", "bigdest")
        self.assertEqual(r["extracted"], 505)
        self.assertEqual(len(r["files"]), 500)
        self.assertTrue(r["files_truncated"])


if __name__ == "__main__":
    unittest.main(verbosity=2)
