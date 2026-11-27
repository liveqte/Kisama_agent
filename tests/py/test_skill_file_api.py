"""kisama-skill 文件批量结果校验与只读挂载上传预检单测（不触网）。"""
import argparse
import asyncio
import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "kisama-skill" / "scripts"))

import kisama_control as kc  # noqa: E402


class _BatchClient:
    def __init__(self, response):
        self.response = response
        self.calls = []

    def request_json(self, method, path, payload=None):
        self.calls.append((method, path, payload))
        return self.response


class _UploadClient(kc.KisamaClient):
    def __init__(self, authority=None, authority_error=False):
        super().__init__("https://node.invalid", "ab" * 32, "cd" * 32, session_cache=None)
        self.authority = authority if authority is not None else {"status": "ok", "files": []}
        self.authority_error = authority_error
        self.authority_calls = []
        self.transfers = []

    def _ensure_session(self):
        return None

    def _auth_headers(self, *args):
        return {}

    def request_json(self, method, path, payload=None):
        if path == "/api/file/list":
            return {"status": "ok", "files": []}
        if path == "/api/file/authority":
            self.authority_calls.append(payload)
            if self.authority_error:
                raise kc.KisamaError("authority unavailable")
            return self.authority
        raise AssertionError(f"unexpected request: {path}")

    def _http(self, method, path, body, headers, timeout=None):
        self.transfers.append((method, path, body, headers))
        return {"status": "ok", "completed": True, "path": "uploads/source.bin"}, {}, 200


class FileBatchResponseTest(unittest.TestCase):
    def test_all_success_is_returned(self):
        response = {
            "status": "ok", "total": 1, "success": 1,
            "results": [{"from": "a", "to": "b", "status": "ok"}],
        }
        self.assertIs(kc.validate_file_batch_response(response), response)

    def test_legacy_response_falls_back_to_outer_status(self):
        self.assertEqual(kc.validate_file_batch_response({"status": "ok"})["status"], "ok")
        with self.assertRaisesRegex(kc.KisamaError, "failed"):
            kc.validate_file_batch_response({"status": "failed"})

    def test_partial_outer_status_is_rejected_even_if_items_look_ok(self):
        with self.assertRaisesRegex(kc.KisamaError, "partial"):
            kc.validate_file_batch_response({
                "status": "partial", "total": 1, "success": 1,
                "results": [{"from": "a", "to": "b", "status": "ok"}],
            })

    def test_every_non_ok_item_reports_path_and_reason(self):
        for status in ("failed", "denied", "skipped", "unknown"):
            with self.subTest(status=status), self.assertRaises(kc.KisamaError) as ctx:
                kc.validate_file_batch_response({
                    "status": "ok", "total": 1, "success": 0,
                    "results": [{"from": "a", "to": "b", "status": status, "error": "read_only_file_system"}],
                })
            message = str(ctx.exception)
            self.assertIn("a -> b", message)
            self.assertIn(status, message)
            self.assertIn("read_only_file_system", message)

    def test_result_count_mismatch_is_rejected(self):
        with self.assertRaisesRegex(kc.KisamaError, "results 数量"):
            kc.validate_file_batch_response({"status": "ok", "total": 2, "results": []})

    def test_move_and_copy_dispatch_validate_results(self):
        for action, method, path in (
            ("move", "PUT", "/api/file"),
            ("copy", "POST", "/api/file/cp"),
        ):
            with self.subTest(action=action):
                client = _BatchClient({
                    "status": "ok", "total": 1, "success": 0,
                    "results": [{"from": "a", "to": "b", "status": "denied", "error": "path outside file root"}],
                })
                args = argparse.Namespace(action=action, mapping=["a=b"])
                with self.assertRaisesRegex(kc.KisamaError, "path outside file root"):
                    asyncio.run(kc.dispatch(client, args))
                self.assertEqual(client.calls, [(method, path, {"a": "b"})])


class UploadReadOnlyPreflightTest(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.source = Path(self.tmp.name) / "source.bin"
        self.source.write_bytes(b"payload")

    def test_read_only_target_stops_before_any_chunk(self):
        client = _UploadClient({"status": "ok", "files": [{"path": "uploads", "mount_readonly": True}]})
        with self.assertRaisesRegex(kc.KisamaError, "mount_readonly=true"):
            client.upload(str(self.source), "uploads")
        self.assertEqual(client.authority_calls, [{"paths": ["uploads"]}])
        self.assertEqual(client.transfers, [])

    def test_writable_missing_field_and_failed_preflight_keep_uploading(self):
        responses = (
            {"status": "ok", "files": [{"path": "uploads", "mount_readonly": False}]},
            {"status": "ok", "files": [{"path": "uploads"}]},
        )
        for response in responses:
            with self.subTest(response=response):
                client = _UploadClient(response)
                result = client.upload(str(self.source), "uploads", chunk_size=3)
                self.assertTrue(result["completed"])
                self.assertEqual([call[2] for call in client.transfers], [b"pay", b"loa", b"d"])
        client = _UploadClient(authority_error=True)
        self.assertTrue(client.upload(str(self.source), "uploads")["completed"])
        self.assertEqual(len(client.transfers), 1)


if __name__ == "__main__":
    unittest.main()
