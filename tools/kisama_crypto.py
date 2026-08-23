#!/usr/bin/env python3
"""
kisama_crypto.py - 控制端加密兼容层
=====================================

背景: coincurve / pycryptodome 在新 CPython (如 3.14) 上暂无对应 wheel，
源码安装需要 cbuild/gcc/libsecp256k1 等编译工具链，受限环境无法安装。

策略: 原生库优先（libsecp256k1 快），不可用时自动回退到
  - ecdsa (纯 Python, 任意版本可装)        → secp256k1 点运算
  - cryptography (abi3 wheel, ≥3.9 全兼容)  → AES-256-GCM
回退实现精确复刻 eciespy 默认配置的线上格式:
  ephemeral_pub(65B 未压缩) + nonce(16B) + tag(16B) + ciphertext
  对称密钥 = HKDF-SHA256(ephemeral_pub + shared_point, salt=空, info=空, 32B)

上层统一接口 (无论走原生还是回退，行为一致):
  ecies_encrypt(pub_bytes, plaintext) -> bytes
  ecies_decrypt(secret32, payload) -> bytes
  generate_ecies_keypair() -> (secret32, pub65未压缩)
  pub_to_compressed(pub65) -> bytes33
  aes_gcm_seal(key, pt) -> (nonce, tag, ct)     # nonce 12B
  aes_gcm_open(key, nonce, tag, ct) -> pt
  random_bytes(n) -> bytes
  ECIESKey(secret32)                            # 兼容 coincurve.PrivateKey 的 .secret
"""

import os
import hmac
import hashlib

# ---------------------------------------------------------------------------
# 后端探测: 原生优先
# ---------------------------------------------------------------------------
try:
    from ecies import encrypt as _native_ecies_encrypt
    from ecies import decrypt as _native_ecies_decrypt
    _NATIVE_ECIES = True
except Exception:  # ImportError 及其 C 依赖加载失败均回退
    _NATIVE_ECIES = False

try:
    import coincurve as _coincurve
    _NATIVE_COINCURVE = True
except Exception:
    _NATIVE_COINCURVE = False

try:
    from Crypto.Cipher import AES as _PKD_AES
    from Crypto.Random import get_random_bytes as _pkd_random
    _NATIVE_Pycryptodome = True
except Exception:
    _NATIVE_Pycryptodome = False

BACKENDS = {
    "ecies": "native" if _NATIVE_ECIES else "fallback",
    "coincurve": "native" if _NATIVE_COINCURVE else "fallback",
    "aes": "pycryptodome" if _NATIVE_Pycryptodome else "cryptography",
}


# ---------------------------------------------------------------------------
# 纯 Python secp256k1 点运算 (ecdsa 库) + HKDF (标准库)
# ---------------------------------------------------------------------------
_P = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F
_N = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141
_B = 7


def _decompress_pub(pub: bytes):
    """33B 压缩 / 65B 未压缩公钥 → ecdsa Point"""
    from ecdsa import SECP256k1, VerifyingKey
    if len(pub) == 65 and pub[0] == 0x04:
        return VerifyingKey.from_string(pub[1:], curve=SECP256k1).pubkey.point
    if len(pub) == 33 and pub[0] in (0x02, 0x03):
        x = int.from_bytes(pub[1:], "big")
        if x >= _P:
            raise ValueError("公钥 X 坐标超出域范围")
        y_sq = (pow(x, 3, _P) + _B) % _P
        y = pow(y_sq, (_P + 1) // 4, _P)
        if y * y % _P != y_sq:
            raise ValueError("非法压缩公钥: 不在曲线上")
        if (y & 1) != (pub[0] - 0x02):
            y = _P - y
        from ecdsa.ellipticcurve import Point
        return Point(SECP256k1.curve, x, y)
    raise ValueError(f"不支持的公钥格式: {len(pub)} 字节")


def _point_bytes(point) -> bytes:
    """ecdsa Point → 65B 未压缩 (0x04||X||Y)"""
    return b"\x04" + point.x().to_bytes(32, "big") + point.y().to_bytes(32, "big")


def _pub_from_secret(secret: bytes) -> bytes:
    from ecdsa import SECP256k1, SigningKey
    sk = SigningKey.from_string(secret, curve=SECP256k1)
    return b"\x04" + sk.get_verifying_key().to_string()


def _hkdf_sha256(master: bytes, length: int = 32) -> bytes:
    """HKDF-SHA256, salt=空(等价全零), info=空 — 与 pycryptodome HKDF(master,len,b'',SHA256) 一致"""
    prk = hmac.new(b"", master, hashlib.sha256).digest()
    okm = b""
    block = b""
    counter = 1
    while len(okm) < length:
        block = hmac.new(prk, block + bytes([counter]), hashlib.sha256).digest()
        okm += block
        counter += 1
    return okm[:length]


# ---------------------------------------------------------------------------
# ECIES: 加密/解密/密钥生成 (统一入口)
# ---------------------------------------------------------------------------
def ecies_encrypt(receiver_pk: bytes, data: bytes) -> bytes:
    if _NATIVE_ECIES:
        return _native_ecies_encrypt(receiver_pk, data)
    from cryptography.hazmat.primitives.ciphers.aead import AESGCM
    from ecdsa import SECP256k1

    peer_point = _decompress_pub(receiver_pk)
    while True:
        eph = os.urandom(32)
        if 0 < int.from_bytes(eph, "big") < _N:
            break
    eph_pub = _pub_from_secret(eph)
    shared = _point_bytes(peer_point * int.from_bytes(eph, "big"))
    key = _hkdf_sha256(eph_pub + shared)
    nonce = os.urandom(16)
    sealed = AESGCM(key).encrypt(nonce, data, None)      # ct||tag
    ct, tag = sealed[:-16], sealed[-16:]
    return eph_pub + nonce + tag + ct                     # 65 + 16 + 16 + ct


def ecies_decrypt(secret: bytes, payload: bytes) -> bytes:
    if _NATIVE_ECIES:
        return _native_ecies_decrypt(secret, payload)
    from cryptography.hazmat.primitives.ciphers.aead import AESGCM

    if len(payload) < 65 + 16 + 16:
        raise ValueError("密文长度不合法")
    eph_pub, nonce, tag, ct = payload[:65], payload[65:81], payload[81:97], payload[97:]
    shared = _point_bytes(_decompress_pub(eph_pub) * int.from_bytes(secret, "big"))
    key = _hkdf_sha256(eph_pub + shared)
    # 线上格式 tag 在 ct 之前, 而 AESGCM 期望 ct||tag
    return AESGCM(key).decrypt(nonce, ct + tag, None)


def generate_ecies_keypair():
    """生成 secp256k1 密钥对 → (secret32, pub65未压缩)。原生 coincurve 优先。"""
    if _NATIVE_COINCURVE:
        sk = _coincurve.PrivateKey()
        return sk.secret, sk.public_key.format(compressed=False)
    while True:
        secret = os.urandom(32)
        if 0 < int.from_bytes(secret, "big") < _N:
            return secret, _pub_from_secret(secret)


def pub_to_compressed(pub65: bytes) -> bytes:
    """65B 未压缩 → 33B 压缩 (generate_keys.py 生成 agent_ecies_pub.b64 用)"""
    if len(pub65) == 33:
        return pub65
    y = int.from_bytes(pub65[33:], "big")
    prefix = b"\x03" if (y & 1) else b"\x02"
    return prefix + pub65[1:33]


class ECIESKey:
    """兼容 coincurve.PrivateKey 的最小接口 (.secret)"""

    def __init__(self, secret: bytes):
        if len(secret) != 32:
            raise ValueError("ECIES 私钥必须为 32 字节")
        self.secret = secret

    def to_hex(self) -> str:
        return self.secret.hex()


# ---------------------------------------------------------------------------
# AES-256-GCM (请求体加密, nonce=12B 的 JSON{nonce,tag,ciphertext} 打包格式)
# ---------------------------------------------------------------------------
def aes_gcm_seal(key: bytes, plaintext: bytes, nonce_length: int = 12):
    """→ (nonce, tag, ciphertext)"""
    if _NATIVE_Pycryptodome:
        nonce = _pkd_random(nonce_length)
        cipher = _PKD_AES.new(key, _PKD_AES.MODE_GCM, nonce=nonce)
        ct, tag = cipher.encrypt_and_digest(plaintext)
        return nonce, tag, ct
    from cryptography.hazmat.primitives.ciphers.aead import AESGCM
    nonce = os.urandom(nonce_length)
    sealed = AESGCM(key).encrypt(nonce, plaintext, None)
    return nonce, sealed[-16:], sealed[:-16]


def aes_gcm_open(key: bytes, nonce: bytes, tag: bytes, ciphertext: bytes) -> bytes:
    if _NATIVE_Pycryptodome:
        cipher = _PKD_AES.new(key, _PKD_AES.MODE_GCM, nonce=nonce)
        return cipher.decrypt_and_verify(ciphertext, tag)
    from cryptography.hazmat.primitives.ciphers.aead import AESGCM
    return AESGCM(key).decrypt(nonce, ciphertext + tag, None)


def random_bytes(n: int) -> bytes:
    return os.urandom(n)


if __name__ == "__main__":
    # 自检: 回退实现与原生实现双向互通 (本地装有原生库时)
    print("后端:", BACKENDS)
    secret, pub = generate_ecies_keypair()
    msg = b"kisama-crypto-selftest-" + os.urandom(64)
    enc = ecies_encrypt(pub, msg)
    assert ecies_decrypt(secret, enc) == msg, "ECIES 回退自检失败"
    if _NATIVE_ECIES:
        from ecies import encrypt as ne, decrypt as nd
        assert nd(secret, ecies_encrypt(pub, msg)) == msg, "回退加密→原生解密 失败"
        assert ecies_decrypt(secret, ne(pub, msg)) == msg, "原生加密→回退解密 失败"
        print("✅ 与原生 eciespy 双向互通")
    n, t, c = aes_gcm_seal(secret, msg)
    assert aes_gcm_open(secret, n, t, c) == msg, "AES 回退自检失败"
    print("✅ ECIES/AES 自检全部通过")
