"""Python file API 契约回归测试 (不启动 agent)。

运行: python tests/py/test_file_api.py
"""
import errno
import os
import sys
import tempfile
import unittest
import zipfile
from contextlib import contextmanager
from pathlib import Path
from unittest import mock

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "py"))

from fastapi import HTTPException  # noqa: E402
from starlette.testclient import TestClient  # noqa: E402

import agent  # noqa: E402


class FileAPIContractTest(unittest.TestCase):

    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix="kisama_file_api_")
        self.container = Path(self.temp.name)
        self.root = self.container / "root"
        self.root.mkdir()
        self.fm = agent.FileManager(root=str(self.root), audit=False)

    def tearDown(self):
        self.temp.cleanup()

    @contextmanager
    def _client(self):
        missing = object()
        previous = getattr(agent.app.state, "file_manager", missing)
        agent.app.state.file_manager = self.fm
        client = TestClient(agent.app)
        try:
            with mock.patch.object(agent.Config, "DEBUG", True):
                yield client
        finally:
            client.close()
            if previous is missing:
                del agent.app.state.file_manager
            else:
                agent.app.state.file_manager = previous

    def _write(self, relative, content):
        path = self.root / relative
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding="utf-8")
        return path

    # ---------- G-1: move/copy 聚合与逐项状态 ----------

    def test_move_mixed_results_and_disk_effects(self):
        self._write("move-ok.txt", "move")
        self._write("move-failed.txt", "keep")
        self._write("move-denied.txt", "denied")
        self._write("blocked-src.txt", "blocked")
        self._write("existing.txt", "existing")
        self._write("blocker", "not a directory")

        result = self.fm.move_paths({
            "move-ok.txt": "moved/ok.txt",
            "missing.txt": "moved/missing.txt",
            "move-failed.txt": "existing.txt",
            "move-denied.txt": "../outside.txt",
            "blocked-src.txt": "blocker/child.txt",
        })

        self.assertEqual(result["status"], "partial")
        self.assertEqual(result["total"], 5)
        self.assertEqual(result["success"], 1)
        self.assertEqual(result["message"], "4 of 5 operations failed")
        statuses = {item["from"]: item["status"] for item in result["results"]}
        self.assertEqual(statuses, {
            "move-ok.txt": "ok",
            "missing.txt": "skipped",
            "move-failed.txt": "failed",
            "move-denied.txt": "denied",
            "blocked-src.txt": "denied",
        })
        errors = {item["from"]: item.get("error") for item in result["results"]}
        self.assertEqual(errors["missing.txt"], "source not found")
        self.assertEqual(errors["move-denied.txt"], "path outside file root")
        self.assertEqual(errors["blocked-src.txt"], "destination parent is not a directory")
        for item in result["results"]:
            if item["status"] != "ok":
                self.assertTrue(item.get("error"))
        self.assertEqual((self.root / "moved/ok.txt").read_text(encoding="utf-8"), "move")
        self.assertFalse((self.root / "move-ok.txt").exists())
        self.assertFalse((self.root / "moved/missing.txt").exists())
        self.assertEqual((self.root / "move-failed.txt").read_text(encoding="utf-8"), "keep")
        self.assertEqual((self.root / "existing.txt").read_text(encoding="utf-8"), "existing")
        self.assertTrue((self.root / "move-denied.txt").exists())
        self.assertFalse((self.container / "outside.txt").exists())
        self.assertTrue((self.root / "blocked-src.txt").exists())

    def test_copy_mixed_results_and_disk_effects(self):
        self._write("copy-ok.txt", "copy")
        self._write("copy-failed.txt", "keep")
        self._write("copy-denied.txt", "denied")
        self._write("blocked-src.txt", "blocked")
        self._write("existing.txt", "existing")
        self._write("blocker", "not a directory")

        result = self.fm.copy_paths({
            "copy-ok.txt": "copied/ok.txt",
            "missing.txt": "copied/missing.txt",
            "copy-failed.txt": "existing.txt",
            "copy-denied.txt": "../outside.txt",
            "blocked-src.txt": "blocker/child.txt",
        })

        self.assertEqual(result["status"], "partial")
        self.assertEqual(result["total"], 5)
        self.assertEqual(result["success"], 1)
        self.assertEqual(result["message"], "4 of 5 operations failed")
        statuses = {item["from"]: item["status"] for item in result["results"]}
        self.assertEqual(statuses, {
            "copy-ok.txt": "ok",
            "missing.txt": "skipped",
            "copy-failed.txt": "failed",
            "copy-denied.txt": "denied",
            "blocked-src.txt": "denied",
        })
        errors = {item["from"]: item.get("error") for item in result["results"]}
        self.assertEqual(errors["missing.txt"], "source not found")
        self.assertEqual(errors["copy-denied.txt"], "path outside file root")
        self.assertEqual(errors["blocked-src.txt"], "destination parent is not a directory")
        for item in result["results"]:
            if item["status"] != "ok":
                self.assertTrue(item.get("error"))
        self.assertEqual((self.root / "copied/ok.txt").read_text(encoding="utf-8"), "copy")
        self.assertEqual((self.root / "copy-ok.txt").read_text(encoding="utf-8"), "copy")
        self.assertFalse((self.root / "copied/missing.txt").exists())
        self.assertEqual((self.root / "existing.txt").read_text(encoding="utf-8"), "existing")
        self.assertFalse((self.container / "outside.txt").exists())
        self.assertTrue((self.root / "blocked-src.txt").exists())

    def test_copy_directory_tree_and_reject_destination_inside_source(self):
        self._write("src/a.txt", "A")
        self._write("src/sub/b.txt", "B")
        result = self.fm.copy_paths({"src": "dest"})
        self.assertEqual(result["status"], "ok")
        self.assertEqual((self.root / "dest/a.txt").read_text(encoding="utf-8"), "A")
        self.assertEqual((self.root / "dest/sub/b.txt").read_text(encoding="utf-8"), "B")

        result = self.fm.copy_paths({"src": "src/inside"})
        self.assertEqual(result["status"], "error")
        self.assertEqual(result["results"][0]["status"], "failed")
        self.assertEqual(result["results"][0]["error"], "destination is inside source directory")
        self.assertFalse((self.root / "src/inside").exists())

    def test_copy_directory_preserves_nested_symlink_without_following(self):
        self._write("src/a.txt", "A")
        outside = self.container / "outside.txt"
        outside.write_text("SECRET", encoding="utf-8")
        try:
            (self.root / "src/link.txt").symlink_to(outside)
        except OSError as exc:
            self.skipTest(f"host denied symlink creation: {exc}")
        result = self.fm.copy_paths({"src": "dest"})
        self.assertEqual(result["status"], "ok")
        copied = self.root / "dest/link.txt"
        self.assertTrue(copied.is_symlink())
        self.assertEqual(copied.readlink(), outside)
        self.assertEqual((self.root / "dest/a.txt").read_text(encoding="utf-8"), "A")

    def test_all_failed_and_empty_batches(self):
        self._write("source.txt", "source")
        self._write("existing.txt", "existing")

        for operation in (self.fm.move_paths, self.fm.copy_paths):
            with self.subTest(operation=operation.__name__):
                result = operation({"missing.txt": "dest.txt", "source.txt": "existing.txt"})
                self.assertEqual(result["status"], "error")
                self.assertEqual(result["total"], 2)
                self.assertEqual(result["success"], 0)
                self.assertEqual(result["message"], "All 2 operations failed")
                self.assertEqual([item["status"] for item in result["results"]], ["skipped", "failed"])

                empty = operation({})
                self.assertEqual(empty, {
                    "status": "error", "total": 0, "success": 0,
                    "message": "No operations requested", "results": [],
                })

        self.assertEqual((self.root / "source.txt").read_text(encoding="utf-8"), "source")
        self.assertFalse((self.root / "dest.txt").exists())

    def test_empty_batch_routes_return_http_200(self):
        with self._client() as client:
            for method, path in (("put", "/api/file"), ("post", "/api/file/cp")):
                with self.subTest(method=method, path=path):
                    response = getattr(client, method)(path, json={})
                    self.assertEqual(response.status_code, 200)
                    self.assertEqual(response.json(), {
                        "status": "error", "total": 0, "success": 0,
                        "message": "No operations requested", "results": [],
                    })

    # ---------- G-3: mount_readonly ----------

    def test_mountinfo_longest_boundary_escapes_and_unknown(self):
        mounts = "\n".join([
            "36 25 0:32 / / rw,relatime - ext4 /dev/root rw",
            "37 36 8:1 / /home rw,relatime - ext4 /dev/sda1 rw",
            "38 37 0:172 / /home/container rw,relatime - ext4 /dev/md1 rw",
            "39 38 0:173 / /home/container/.trash ro,nosuid,nodev - tmpfs tmpfs rw,size=4k",
            "40 38 0:174 / /home/container/.trash/nested rw,relatime - tmpfs tmpfs rw",
            "41 37 8:1 / /mnt/read\\040only ro,relatime - ext4 /dev/sda1 rw",
            "42 37 8:1 / /mnt/tab\\011name ro,relatime - ext4 /dev/sda1 rw",
            "43 37 8:1 / /mnt/line\\012name ro,relatime - ext4 /dev/sda1 rw",
            "44 37 8:1 / /mnt/back\\134slash ro,relatime - ext4 /dev/sda1 rw",
            "45 37 8:1 / /mnt/super rw,relatime - tmpfs tmpfs ro",
        ]).encode("utf-8")

        cases = [
            ("/home/container/.trash", True),
            ("/home/container/.trash/child", True),
            ("/home/container/.trash/nested/file", False),
            ("/home/container/.trash-old/file", False),
            ("/home/container/.trashish/file", False),
            ("/home/container/other", False),
            ("/mnt/read only/file", True),
            ("/mnt/tab\tname/file", True),
            ("/mnt/line\nname/file", True),
            ("/mnt/back\\slash/file", True),
            ("/mnt/super/file", False),
            ("relative/path", None),
        ]
        for target, expected in cases:
            with self.subTest(target=target):
                self.assertIs(
                    agent.FileManager._mount_readonly_from_mountinfo(target, mounts),
                    expected,
                )

        self.assertIsNone(agent.FileManager._mount_readonly_from_mountinfo(
            "/elsewhere", b"36 25 0:32 / /home rw - ext4 /dev/root rw"
        ))
        self.assertIsNone(agent.FileManager._mount_readonly_from_mountinfo("/home", b"malformed"))
        self.assertIs(agent.FileManager._mount_readonly_from_mountinfo(
            "/home/container/.trash", mounts.decode("utf-8")
        ), True)

    def test_authority_omits_unknown_mount_state_and_keeps_os_access(self):
        with mock.patch.object(agent.sys, "platform", "win32"):
            entry = self.fm.get_authority(["."])["files"][0]
        self.assertNotIn("mount_readonly", entry)

        with mock.patch.object(agent.sys, "platform", "linux"), \
             mock.patch("builtins.open", side_effect=OSError("unreadable")):
            entry = self.fm.get_authority(["."])["files"][0]
        self.assertNotIn("mount_readonly", entry)

        with mock.patch.object(agent.sys, "platform", "linux"), \
             mock.patch("builtins.open", mock.mock_open(read_data=b"malformed")):
            entry = self.fm.get_authority(["."])["files"][0]
        self.assertNotIn("mount_readonly", entry)

        with mock.patch.object(agent.sys, "platform", "win32"), \
             mock.patch.object(agent.os, "access", side_effect=lambda _path, mode: mode == os.W_OK):
            entry = self.fm.get_authority(["."])["files"][0]
        self.assertFalse(entry["readable"])
        self.assertTrue(entry["writable"])
        self.assertFalse(entry["executable"])

    def test_authority_route_excludes_none_mount_field(self):
        with self._client() as client, \
             mock.patch.object(agent.sys, "platform", "win32"):
            response = client.post("/api/file/authority", json={"paths": ["."]})
        self.assertEqual(response.status_code, 200)
        self.assertNotIn("mount_readonly", response.json()["files"][0])

    # ---------- G-2: 写错误 reason 与 JSON 错误体 ----------

    def test_file_error_reason_mapping(self):
        cases = [
            (errno.EROFS, "read_only_file_system"),
            (errno.EACCES, "permission_denied"),
            (errno.EPERM, "permission_denied"),
            (errno.ENOTDIR, "not_a_directory"),
            (errno.EEXIST, "file_exists"),
            (errno.ENOENT, "not_found"),
            (errno.ENOSPC, "no_space"),
        ]
        for code, expected in cases:
            with self.subTest(code=code):
                self.assertEqual(agent._file_error_reason(OSError(code, "test")), expected)
        self.assertEqual(agent._file_error_reason(RuntimeError("test")), "unknown")

    def test_mkdir_and_upload_parent_file_reason(self):
        self._write("blocker", "not a directory")
        for operation in (
            lambda: self.fm.create_directory("blocker/child"),
            lambda: self.fm.upload_file(b"data", "blocker/child.txt"),
        ):
            with self.subTest(operation=operation):
                with self.assertRaises(agent.FileOperationError) as ctx:
                    operation()
                self.assertEqual(ctx.exception.status_code, 500)
                self.assertEqual(ctx.exception.reason, "not_a_directory")
        self.assertEqual((self.root / "blocker").read_text(encoding="utf-8"), "not a directory")

    def test_write_error_json_for_mkdir_upload_and_fileraw(self):
        self._write("blocker", "not a directory")
        with self._client() as client:
            response = client.post("/api/file/new", json={"path": "blocker/child"})
            self.assertEqual(response.status_code, 500)
            body = response.json()
            self.assertEqual(body["status"], "error")
            self.assertEqual(body["reason"], "not_a_directory")
            self.assertTrue(body["error"])
            self.assertEqual(body["message"], body["error"])

            response = client.post("/api/file", json={
                "path": "blocker/child.txt", "content": "eA==",
            })
            self.assertEqual(response.status_code, 500)
            self.assertEqual(response.json()["reason"], "not_a_directory")
            self.assertEqual(response.json()["status"], "error")

            response = client.post(
                "/api/fileraw", content=b"data",
                headers={"X-File-Path": "blocker/child.txt", "X-File-Name": "child.txt"},
            )
            self.assertEqual(response.status_code, 500)
            body = response.json()
            self.assertEqual(body["status"], "error")
            self.assertEqual(body["reason"], "not_a_directory")
            self.assertIs(body["completed"], False)
            self.assertTrue(body["message"])

    def test_other_http_exception_handler_is_unchanged(self):
        self._write("blocker", "not a directory")
        with self._client() as client:
            response = client.post("/api/file/new", json={"path": "blocker"})
        self.assertEqual(response.status_code, 409)
        self.assertEqual(response.json(), {"error": "Exists: blocker", "code": 409})

    def test_simulated_erofs_reason(self):
        read_only = OSError(errno.EROFS, "Read-only file system")
        with mock.patch.object(Path, "mkdir", side_effect=read_only):
            with self.assertRaises(agent.FileOperationError) as ctx:
                self.fm.create_directory("readonly/child")
        self.assertEqual(ctx.exception.reason, "read_only_file_system")

        with mock.patch("builtins.open", side_effect=read_only):
            with self.assertRaises(agent.FileOperationError) as ctx:
                self.fm.upload_file(b"data", "upload.txt")
        self.assertEqual(ctx.exception.reason, "read_only_file_system")

        with self._client() as client, \
             mock.patch.object(Path, "mkdir", side_effect=read_only):
            response = client.post("/api/file/new", json={"path": "readonly/child"})
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.json()["status"], "error")
        self.assertEqual(response.json()["reason"], "read_only_file_system")

    # ---------- ZIP 写错误审计 ----------

    def test_zip_item_read_failure_aggregates_to_partial(self):
        self._write("good.txt", "good")
        self._write("bad.txt", "bad")
        original_open = Path.open

        def fail_bad(path, *args, **kwargs):
            if path == self.root / "bad.txt":
                raise OSError(errno.EACCES, "Permission denied")
            return original_open(path, *args, **kwargs)

        with mock.patch.object(Path, "open", new=fail_bad):
            result = self.fm.zip_items("out.zip", ["good.txt", "bad.txt"])

        self.assertEqual(result["status"], "partial")
        self.assertEqual(result["entries"], 1)
        self.assertEqual(result["results"][1]["status"], "error")
        self.assertEqual(result["results"][1]["reason"], "permission_denied")
        self.assertTrue(result["results"][1]["error"])

    def test_zip_item_write_failure_returns_http_500_error(self):
        self._write("good.txt", "good")
        self._write("bad.txt", "bad")
        original_open = zipfile.ZipFile.open

        def fail_bad(zf, name, mode="r", *args, **kwargs):
            if mode == "w" and name == "bad.txt":
                raise OSError(errno.EROFS, "Read-only file system")
            return original_open(zf, name, mode, *args, **kwargs)

        with mock.patch.object(zipfile.ZipFile, "open", new=fail_bad):
            with self.assertRaises(agent.FileOperationError) as ctx:
                self.fm.zip_items("out.zip", ["good.txt", "bad.txt"])
        self.assertEqual(ctx.exception.status_code, 500)
        self.assertEqual(ctx.exception.reason, "read_only_file_system")

    def test_recursive_zip_rejects_nested_symlink(self):
        self._write("src/a.txt", "A")
        outside = self.container / "outside.txt"
        outside.write_text("SECRET", encoding="utf-8")
        try:
            (self.root / "src/link.txt").symlink_to(outside)
        except OSError as exc:
            self.skipTest(f"host denied symlink creation: {exc}")
        result = self.fm.zip_items("out.zip", ["src"])
        self.assertEqual(result["status"], "error")
        self.assertEqual(result["results"][0]["status"], "error")
        self.assertIn("symbolic link", result["results"][0]["error"])
        with zipfile.ZipFile(self.root / "out.zip") as zf:
            self.assertNotIn("SECRET", b"".join(zf.read(name) for name in zf.namelist()).decode("utf-8"))

    def test_zip_and_unzip_parent_file_write_errors(self):
        self._write("source.txt", "source")
        self._write("blocker", "not a directory")
        with zipfile.ZipFile(self.root / "archive.zip", "w") as zf:
            zf.writestr("child.txt", "child")

        with self.assertRaises(agent.FileOperationError) as ctx:
            self.fm.zip_items("blocker/out.zip", ["source.txt"])
        self.assertEqual(ctx.exception.status_code, 500)
        self.assertEqual(ctx.exception.reason, "not_a_directory")

        target = self.root / "dest/child.txt"
        real_open = open

        class FailingWriter:
            def __init__(self, handle):
                self.handle = handle

            def __enter__(self):
                return self

            def __exit__(self, *_args):
                self.handle.close()
                return False

            def write(self, data):
                self.handle.write(data[:1])
                raise OSError(errno.EROFS, "read-only")

        def failing_open(file, mode="r", *args, **kwargs):
            handle = real_open(file, mode, *args, **kwargs)
            if isinstance(file, (str, os.PathLike)) and Path(file) == target and mode == "wb":
                return FailingWriter(handle)
            return handle

        with mock.patch("builtins.open", new=failing_open):
            with self.assertRaises(agent.FileOperationError) as ctx:
                self.fm.unzip_archive("archive.zip", "dest")
        self.assertEqual(ctx.exception.status_code, 500)
        self.assertEqual(ctx.exception.reason, "read_only_file_system")
        self.assertFalse(target.exists())

        with self.assertRaises(agent.FileOperationError) as ctx:
            self.fm.unzip_archive("archive.zip", "blocker/dest")
        self.assertEqual(ctx.exception.status_code, 500)
        self.assertEqual(ctx.exception.reason, "not_a_directory")


if __name__ == "__main__":
    unittest.main(verbosity=2)
