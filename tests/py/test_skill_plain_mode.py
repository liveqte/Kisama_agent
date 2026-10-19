"""kisama-skill 生产明文认证模式 (x-encrypted: plain) 单测 (docs/API.MD 第十节)

不启动 agent、不触网：桩掉底层 _http，但响应仍走真实的 _decode_response，
以便断言"头部判定 → 请求体形态"这条可见链路。

运行: python tests/py/test_skill_plain_mode.py
"""
import base64
import json
import os
import sys
import unittest
from email.message import Message
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "kisama-skill" / "scripts"))

import kisama_control as kc  # noqa: E402

ECDSA_HEX = "ab" * 32
ECIES_HEX = "cd" * 32
URL = "https://plain.example.com/agent_cpanel.php"


def _hdrs(x_encrypted=None, content_type="application/json"):
    """按 PHP 出门的小写头名构造，验证判定不依赖大小写。"""
    msg = Message()
    if x_encrypted is not None:
        msg["x-encrypted"] = x_encrypted
    if content_type:
        msg["Content-Type"] = content_type
    return msg


class _Stub:
    """替身传输层：记录实际发出的 method/path/body/headers，回放预置响应。"""

    def __init__(self, client, responses):
        self.client = client
        self.responses = responses  # path -> (dict payload, Message headers)
        self.calls = []

    def __call__(self, method, path, body, headers, timeout=None):
        self.calls.append((method, path, body, dict(headers)))
        payload, hdrs = self.responses[path]
        raw = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        return self.client._decode_response(raw, hdrs, 200, path), hdrs, 200

    def paths(self):
        return [c[1] for c in self.calls]

    def last(self, path):
        for call in reversed(self.calls):
            if call[1] == path:
                return call
        raise AssertionError(f"未发出对 {path} 的请求；实际: {self.paths()}")


def _client():
    client = kc.KisamaClient(URL, ECDSA_HEX, ECIES_HEX, 10, None, clock_offset=0.0)
    client._clock_synced = True  # 时钟探测会真发 urlopen，单测里钉死偏移
    return client


BASEINFO_PLAIN = {
    "status": "ok",
    "version": "0.5.8-php-cpanel-emulator",
    "os": "Linux 5.14.0",
    "session_key": None,
    "noise_key": None,
}
LIST_OK = {"status": "ok", "files": [{"name": "index.html", "type": "f", "size": 1234}]}
LIST_PAYLOAD = {"path": "uploads", "recursive": False}


class PlainModeHandshakeTest(unittest.TestCase):

    def setUp(self):
        self.client = _client()
        self.stub = _Stub(self.client, {
            "/api/baseinfo": (BASEINFO_PLAIN, _hdrs("plain")),
            "/api/file/list": (LIST_OK, _hdrs("plain")),
        })
        self.client._http = self.stub

    def test_baseinfo_does_not_raise_and_lands_plain_mode(self):
        """修复前这里是 "baseinfo 未返回 session_key；请确认请求使用了正确的 ECDSA 私钥"。"""
        data = self.client.bootstrap()
        self.assertEqual(data["version"], "0.5.8-php-cpanel-emulator")
        self.assertTrue(self.client.plain_mode)
        self.assertFalse(self.client.debug_mode, "plain 不得判为 DEBUG (docs/API.MD 判定表)")
        self.assertIsNone(self.client.session_key)
        self.assertEqual(self.client.agent_version, "0.5.8-php-cpanel-emulator")

    def test_plain_handshake_does_not_trigger_v1_fallback(self):
        """缺 session_key 在 plain 下是常态，不得被当成"旧代理静默验签失败"再握手一次。"""
        self.client.bootstrap()
        self.assertEqual(self.stub.paths().count("/api/baseinfo"), 1)
        self.assertEqual(self.client._sig_mode, "v2")

    def test_business_request_body_is_plaintext_json_still_signed(self):
        self.client.bootstrap()
        result = self.client.request_json("POST", "/api/file/list", LIST_PAYLOAD)
        self.assertEqual(result["files"][0]["name"], "index.html")

        _, _, body, headers = self.stub.last("/api/file/list")
        self.assertIsInstance(body, bytes)
        self.assertEqual(json.loads(body.decode("utf-8")), LIST_PAYLOAD, "请求体必须是明文 JSON 原样直发")
        self.assertNotIn("X-AES-Encrypted", headers)
        # 与 DEBUG 的分水岭：明文模式下签名三件套照常强制
        self.assertIn("X-Auth-Token", headers)
        self.assertIn("X-Nonce", headers)
        self.assertIn("X-Timestamp", headers)


class PlainModeSessionReuseTest(unittest.TestCase):

    def test_no_bootstrap_per_request(self):
        """plain 下 session_key 恒 None，_ensure_session 不能每个请求都重握手。"""
        client = _client()
        stub = _Stub(client, {
            "/api/baseinfo": (BASEINFO_PLAIN, _hdrs("plain")),
            "/api/file/list": (LIST_OK, _hdrs("plain")),
            "/api/exec": ({"status": "ok", "output": "", "exitcode": 0}, _hdrs("plain")),
        })
        client._http = stub
        client.bootstrap()
        client.request_json("POST", "/api/file/list", LIST_PAYLOAD)
        client.request_json("POST", "/api/exec", {"cmd": "uname -a"})
        self.assertEqual(stub.paths().count("/api/baseinfo"), 1)


class ProductionModeControlTest(unittest.TestCase):
    """反向对照：证明上面的量表能区分密文请求体——同一条构造路径，密钥/头状态不同则结果不同。"""

    def test_body_is_aes_container_when_session_key_present(self):
        client = _client()
        session_key = os.urandom(32)
        client.session_key = session_key  # 生产握手已完成，跳过 bootstrap
        client.agent_version = "0.5.6-python"
        captured = {}

        def spy(method, path, body, headers, timeout=None):
            captured["body"] = body
            captured["headers"] = dict(headers)
            return LIST_OK, _hdrs("true"), 200

        client._http = spy
        client.request_json("POST", "/api/file/list", LIST_PAYLOAD)

        self.assertEqual(captured["headers"].get("X-AES-Encrypted"), "true")
        container = json.loads(base64.b64decode(captured["body"]).decode("utf-8"))
        self.assertEqual(container.keys(), {"nonce", "tag", "ciphertext"})
        # 解开容器必须还原成原载荷——证明发出去的是这份请求体的密文而非明文
        decrypted = kc.KisamaClient._aes_decrypt(captured["body"], session_key)
        self.assertEqual(json.loads(decrypted.decode("utf-8")), LIST_PAYLOAD)


class DebugModeUnaffectedTest(unittest.TestCase):
    """回归护栏：DEBUG 分支行为不得因 plain 支持而改变。"""

    def test_debug_still_plaintext_unsigned_ok(self):
        client = _client()
        baseinfo_debug = dict(BASEINFO_PLAIN, version="0.5.8-python-debug")
        stub = _Stub(client, {
            "/api/baseinfo": (baseinfo_debug, _hdrs("false")),
            "/api/file/list": (LIST_OK, _hdrs("false")),
        })
        client._http = stub
        client.bootstrap()
        self.assertTrue(client.debug_mode)
        self.assertFalse(client.plain_mode)
        client.request_json("POST", "/api/file/list", LIST_PAYLOAD)
        _, _, body, headers = stub.last("/api/file/list")
        self.assertEqual(json.loads(body.decode("utf-8")), LIST_PAYLOAD)
        self.assertNotIn("X-AES-Encrypted", headers)


if __name__ == "__main__":
    unittest.main(verbosity=2)
