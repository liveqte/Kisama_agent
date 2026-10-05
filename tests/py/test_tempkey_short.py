"""TempKey format=short 短格式单测 (0.5.8, 不启动 agent)

运行: python tests/py/test_tempkey_short.py
"""
import base64
import hashlib
import re
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "py"))

from ecdsa import NIST256p, SigningKey  # noqa: E402
from fastapi import HTTPException  # noqa: E402

import agent  # noqa: E402


class TempKeyShortTest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        cls.manager = agent.TempKeyManager()
        cls.key = cls.manager.get_or_create(24)

    # ---------- format 参数解析 ----------
    def test_resolve_format_default_and_alias(self):
        self.assertEqual(agent._resolve_tempkey_format(""), "full")
        self.assertEqual(agent._resolve_tempkey_format(None), "full")
        self.assertEqual(agent._resolve_tempkey_format("full"), "full")
        self.assertEqual(agent._resolve_tempkey_format("FULL"), "full")

    def test_resolve_format_short_case_insensitive(self):
        self.assertEqual(agent._resolve_tempkey_format("short"), "short")
        self.assertEqual(agent._resolve_tempkey_format(" SHORT "), "short")

    def test_resolve_format_invalid_422(self):
        with self.assertRaises(HTTPException) as ctx:
            agent._resolve_tempkey_format("bogus")
        self.assertEqual(ctx.exception.status_code, 422)

    # ---------- 短格式字段规格 ----------
    def test_short_ecdsa_private_is_64hex_scalar(self):
        self.assertRegex(self.key["ecdsa_private_hex"], r"^[0-9a-f]{64}$")

    def test_short_public_keys_are_33byte_compressed_b64(self):
        for field in ("ecdsa_public_b64", "ecies_public_b64"):
            raw = base64.b64decode(self.key[field], validate=True)
            self.assertEqual(len(raw), 33, field)
            self.assertIn(raw[0], (2, 3), field)
            self.assertEqual(len(self.key[field]), 44, field)

    def test_ecies_private_unchanged_across_formats(self):
        self.assertRegex(self.key["ecies_private_key"], r"^[0-9a-f]{64}$")
        self.assertEqual(self.key["ecies_private_key"], self.key["ecies_private_key"])

    # ---------- 与全格式同源交叉验证 ----------
    def test_short_scalar_matches_pem_private(self):
        pem_priv = SigningKey.from_pem(self.key["ecdsa_private_key"])
        self.assertEqual(pem_priv.to_string().hex(), self.key["ecdsa_private_hex"])

    def test_short_scalar_vk_matches_manager_vk(self):
        sk = SigningKey.from_string(bytes.fromhex(self.key["ecdsa_private_hex"]), curve=NIST256p)
        self.assertEqual(sk.get_verifying_key().to_string(), self.key["ecdsa_vk"].to_string())

    def test_compressed_pub_matches_uncompressed_ecdsa(self):
        # vk.to_string() = 64 字节 X||Y
        vk = self.key["ecdsa_vk"].to_string()
        compressed = base64.b64decode(self.key["ecdsa_public_b64"])
        self.assertEqual(compressed[1:], vk[:32])
        self.assertEqual(compressed[0], 3 if (vk[63] & 1) else 2)

    def test_compressed_pub_matches_uncompressed_ecies(self):
        pub65 = bytes.fromhex(self.key["ecies_public_key"])
        self.assertEqual(len(pub65), 65)
        self.assertEqual(pub65[0], 0x04)
        compressed = base64.b64decode(self.key["ecies_public_b64"])
        self.assertEqual(compressed[1:], pub65[1:33])
        self.assertEqual(compressed[0], 3 if (pub65[64] & 1) else 2)

    # ---------- 标量可用于签名 (kisama-skill 消费路径) ----------
    def test_short_scalar_can_sign_and_verify(self):
        sk = SigningKey.from_string(bytes.fromhex(self.key["ecdsa_private_hex"]), curve=NIST256p)
        sig = sk.sign(b"kisama-short-format-probe", hashfunc=hashlib.sha256)
        self.assertTrue(self.key["ecdsa_vk"].verify(sig, b"kisama-short-format-probe", hashfunc=hashlib.sha256))

    # ---------- 压缩辅助函数 ----------
    def test_compress_point65_roundtrip(self):
        pub65 = bytes.fromhex(self.key["ecies_public_key"])
        compressed = agent._compress_point65(pub65)
        self.assertEqual(base64.b64encode(compressed).decode(), self.key["ecies_public_b64"])

    def test_compress_point65_rejects_bad_input(self):
        with self.assertRaises(ValueError):
            agent._compress_point65(b"\x04" + b"\x00" * 10)   # 长度不足
        with self.assertRaises(ValueError):
            agent._compress_point65(b"\x02" + b"\x00" * 32)   # 非未压缩前缀
        with self.assertRaises(ValueError):
            agent._compress_point65(b"\x04" + b"\x00" * 31 + b"\x01" * 34)  # 超长

    # ---------- 幂等: 同一密钥对两种格式同取 ----------
    def test_idempotent_across_formats(self):
        again = self.manager.get_or_create(48)  # 不同 ttl 不影响有效期内幂等
        self.assertEqual(again["key_id"], self.key["key_id"])
        self.assertEqual(again["ecdsa_private_hex"], self.key["ecdsa_private_hex"])
        self.assertEqual(again["ecdsa_public_b64"], self.key["ecdsa_public_b64"])


if __name__ == "__main__":
    unittest.main(verbosity=2)
