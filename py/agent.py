#!/usr/bin/env python3
# ============================================================================
# 📦 依赖导入
# ============================================================================
import os
import sys
import json
import time
import base64
import hashlib
import secrets
import threading
from datetime import datetime, timezone
from typing import Union,List, Dict, Any, Optional

# FastAPI 相关
from fastapi import FastAPI, Request, Response, HTTPException, status
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware
from urllib.parse import unquote, urlsplit
# 加密相关
from ecdsa import SigningKey, VerifyingKey, BadSignatureError, NIST256p
from ecdsa.util import sigdecode_der, sigdecode_string
import binascii

# ============================================================================
# 🔐 原生加密库兼容层 (Python 3.14 等无 wheel 环境自动回退, 无需编译工具链)
#    原生优先: eciespy(coincurve/libsecp256k1) + pycryptodome —— 快
#    自动回退: ecdsa(纯Python 点运算) + cryptography(abi3 wheel) —— 全平台可装
#    回退实现与 eciespy 线上格式逐字节兼容: eph_pub(65)+nonce(16)+tag(16)+ct
# ============================================================================
try:
    from ecies import encrypt as ecies_encrypt
except Exception:
    # 回退实现 (模块级下划线 def 不参与混淆重命名; 规范名经赋值绑定, 与 import 路径同名)
    import hmac as _hmac_mod

    _SECP_P = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F
    _SECP_N = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141

    def _secp_decompress_pub(pub: bytes):
        from ecdsa import SECP256k1, VerifyingKey
        from ecdsa.ellipticcurve import Point
        if len(pub) == 65 and pub[0] == 0x04:
            return VerifyingKey.from_string(pub[1:], curve=SECP256k1).pubkey.point
        if len(pub) == 33 and pub[0] in (0x02, 0x03):
            x = int.from_bytes(pub[1:], "big")
            y_sq = (pow(x, 3, _SECP_P) + 7) % _SECP_P
            y = pow(y_sq, (_SECP_P + 1) // 4, _SECP_P)
            if y * y % _SECP_P != y_sq:
                raise ValueError("invalid compressed public key")
            if (y & 1) != (pub[0] - 0x02):
                y = _SECP_P - y
            return Point(SECP256k1.curve, x, y)
        raise ValueError("unsupported public key format")

    def _secp_point_bytes(point) -> bytes:
        return b"\x04" + point.x().to_bytes(32, "big") + point.y().to_bytes(32, "big")

    def _kisama_hkdf_sha256(master: bytes, length: int = 32) -> bytes:
        # 与 pycryptodome HKDF(master, len, salt=b"", SHA256) 一致 (info=空)
        prk = _hmac_mod.new(b"", master, hashlib.sha256).digest()
        okm = b""
        block = b""
        counter = 1
        while len(okm) < length:
            block = _hmac_mod.new(prk, block + bytes([counter]), hashlib.sha256).digest()
            okm += block
            counter += 1
        return okm[:length]

    def _kisama_ecies_encrypt_fallback(receiver_pk: bytes, data: bytes) -> bytes:
        from cryptography.hazmat.primitives.ciphers.aead import AESGCM
        from ecdsa import SECP256k1, SigningKey as _EcdsaSigningKey
        peer_point = _secp_decompress_pub(receiver_pk)
        while True:
            eph = secrets.token_bytes(32)
            if 0 < int.from_bytes(eph, "big") < _SECP_N:
                break
        eph_pub = b"\x04" + _EcdsaSigningKey.from_string(eph, curve=SECP256k1).get_verifying_key().to_string()
        shared = _secp_point_bytes(peer_point * int.from_bytes(eph, "big"))
        key = _kisama_hkdf_sha256(eph_pub + shared)
        nonce = secrets.token_bytes(16)
        sealed = AESGCM(key).encrypt(nonce, data, None)
        # 线上格式: eph_pub + nonce + tag + ciphertext
        return eph_pub + nonce + sealed[-16:] + sealed[:-16]

    ecies_encrypt = _kisama_ecies_encrypt_fallback

# 服务启动
import uvicorn

# 系统收集器相关
import asyncio
import platform
import psutil
import aiohttp
import socket
## 执行模块
import subprocess
import shlex
from fastapi import BackgroundTasks
## 任务模块
from croniter import croniter
from collections import deque
## 路由生命周期
from contextlib import asynccontextmanager
## 数据类型
from pydantic import BaseModel, Field, RootModel, ConfigDict
from fastapi import Body,Depends,Query
## AES有关库 (pycryptodome 优先, 缺失时回退 cryptography 的 AES-GCM 兼容垫片;
## 回退 def/class 均以下划线命名, 规范名经赋值绑定, 与 import 路径同名 —— 混淆器两条路径一致)
try:
    from Crypto.Cipher import AES
    from Crypto.Random import get_random_bytes
except Exception:
    def _kisama_get_random_bytes(n: int) -> bytes:
        return os.urandom(n)

    class _KisamaAESGCMFallback:
        def __init__(self, key: bytes, nonce: bytes):
            from cryptography.hazmat.primitives.ciphers.aead import AESGCM
            self._aesgcm = AESGCM(key)
            self._nonce = nonce

        def encrypt_and_digest(self, plaintext: bytes):
            sealed = self._aesgcm.encrypt(self._nonce, plaintext, None)  # ct||tag
            return sealed[:-16], sealed[-16:]

        def decrypt_and_verify(self, ciphertext: bytes, tag: bytes) -> bytes:
            return self._aesgcm.decrypt(self._nonce, ciphertext + tag, None)

    class _KisamaAESFallback:
        MODE_GCM = "gcm"

        @staticmethod
        def new(key: bytes, mode, nonce: bytes = None):
            if nonce is None:
                raise ValueError("兼容垫片仅支持 AES-GCM 且必须提供 nonce")
            return _KisamaAESGCMFallback(key, nonce)

    AES = _KisamaAESFallback
    get_random_bytes = _kisama_get_random_bytes
## noise和超级终端相关库
from noise.connection import NoiseConnection, Keypair
from fastapi import WebSocket , WebSocketDisconnect
import shutil
import struct
import select
import signal
if os.name == 'nt':
    # Windows 无 POSIX PTY 模块，超级终端由 ConPTY/管道回退实现提供（见「1.5 Windows 终端后端」）
    termios = None
    fcntl = None
    pty = None
else:
    import termios
    import fcntl
    import pty

## Argo 临时隧道 (cftunnel 标准库实现) 所需的额外标准库
import http.client
import queue
import ssl
import urllib.error
import urllib.request
import uuid
## 生成noise密钥相关
from dataclasses import dataclass, asdict
from cryptography.hazmat.primitives.asymmetric import x25519
from cryptography.hazmat.primitives import serialization
from typing import Tuple


def _resolve_safe_cwd():
    """选择真实存在的目录作为终端工作目录，避免 HOME 等环境变量指向不存在路径时 chdir 失败 (如 Git Bash 下的 /home/kis)"""
    for d in (os.environ.get('USERPROFILE'), os.environ.get('HOME'), os.path.expanduser('~')):
        if d and os.path.isdir(d):
            return d
    return '.'


def _resolve_safe_file_root():
    """FILE_ROOT 校验: 候选目录必须真实存在，全部无效时降级到当前工作目录 (不自动创建，避免文件接口逐请求报错)"""
    for d in (os.getenv('FILE_ROOT'), os.path.expanduser('~')):
        if d and os.path.isdir(d):
            return d
        if d:
            print(f'[WARN] FILE_ROOT 候选目录不存在, 已跳过: {d}')
    print(f'[WARN] FILE_ROOT 全部候选无效, 降级到当前工作目录: {os.getcwd()}')
    return os.getcwd()

# ============================================================================
# 📦 Pydantic 响应模型定义 (用于生成文档示例和数据验证)
# ============================================================================
class SResponse(BaseModel):
    """通用状态响应"""
    status: str = Field("ok", examples=["ok", "error"])

class CountResponse(SResponse):
    """带计数的通用响应"""
    count: int = Field(..., examples=[0])

class BaseInfoResponse(BaseModel):
    """代理基础信息响应模型"""
    arch: str = Field(..., description="CPU架构", examples=["x86_64"])
    cpu_cores: int = Field(..., description="CPU核心数", examples=[4])
    cpu_name: str = Field(..., description="CPU型号", examples=["Intel(R) Xeon(R) CPU @ 2.20GHz"])
    disk_total: int = Field(..., description="磁盘总容量(字节)", examples=[48360738816])
    gpu_name: str = Field("", description="GPU型号", examples=["NVIDIA GeForce RTX 3090"])
    ipv4: Optional[str] = Field(None, description="IPv4地址", examples=["192.168.1.100"])
    ipv6: Optional[str] = Field(None, description="IPv6地址", examples=["2001:db8::1"])
    mem_total: int = Field(..., description="内存总量(字节)", examples=[8589934592])
    os: str = Field(..., description="操作系统名称", examples=["Ubuntu 22.04"])
    kernel_version: str = Field(..., description="内核版本", examples=["5.15.0-76-generic"])
    swap_total: int = Field(..., description="交换分区总量(字节)", examples=[0])
    version: str = Field(..., description="代理版本", examples=["0.0.1"])
    virtualization: str = Field(..., description="虚拟化环境", examples=["None"])
    session_key: Optional[bytes] = Field(None, description="本次会话的动态 AES-256 密钥 (明文，由中间件负责加密)", examples=["k7Bv9...32位密钥字符串或Base64"] )
    noise_key: Optional[Dict[str, Any]] = Field(
        None, 
        description="Noise 密钥配置，接收任意字典结构"
    )

class StatusResponse(BaseModel):
    """实时监控信息响应模型"""
    cpu: Dict[str, float] = Field(..., description="CPU使用率", examples=[{"usage": 12.5}])
    ram: Dict[str, int] = Field(..., description="内存信息", examples=[{"total": 8589934592, "used": 4000000000}])
    swap: Dict[str, int] = Field(..., description="交换分区信息", examples=[{"total": 0, "used": 0}])
    load: Dict[str, float] = Field(..., description="系统负载", examples=[{"load1": 0.5, "load5": 0.4, "load15": 0.3}])
    disk: Dict[str, int] = Field(..., description="磁盘信息", examples=[{"total": 48360738816, "used": 30000000000}])
    network: Dict[str, int] = Field(..., description="网络统计", examples=[{"up": 1024, "down": 2048, "totalUp": 1000000, "totalDown": 2000000}])
    connections: Dict[str, int] = Field(..., description="连接数", examples=[{"tcp": 20, "udp": 5}])
    uptime: int = Field(..., description="运行时间(秒)", examples=[3600])
    process: int = Field(..., description="进程数量", examples=[150])
    message: str = Field("", description="附加消息", examples=[""])
# --- 响应模型 ---
class ExecResponse(BaseModel):
    result: str = Field(..., description="命令输出(stdout+stderr)", examples=["total 4\ndrwxr-xr-x..."])
    exitcode: int = Field(..., description="退出码 (0=成功, 124=超时, 127=未找到)", examples=[0])
    timeout: bool = Field(..., description="是否因超时被终止", examples=[False])
    cmd: str = Field(..., description="实际执行的命令", examples=["ls -la /tmp"])

# --- 临时密钥响应模型 ---
class TempKeyEcdsaPair(BaseModel):
    """临时 ECDSA 密钥对 (PEM 格式)"""
    private_key: str = Field(..., description="临时 ECDSA 私钥 (PEM, 用于签名请求)", examples=["-----BEGIN PRIVATE KEY-----..."])
    public_key: str = Field(..., description="临时 ECDSA 公钥 (PEM)", examples=["-----BEGIN PUBLIC KEY-----..."])

class TempKeyEciesPair(BaseModel):
    """临时 ECIES 密钥对 (十六进制格式)"""
    private_key: str = Field(..., description="临时 ECIES 私钥 (hex, 64字符=32字节, 用于解密响应)", examples=["ae68d0ec83e7ea0d47434a59c42656d30e6ebe1c92976b571859c8fcbdd04870"])
    public_key: str = Field(..., description="临时 ECIES 公钥 (hex, 130字符=65字节, 供代理端加密响应)", examples=["04bcf71c67b9f36725f54c41f9652acf..."])

class TempKeyResponse(BaseModel):
    """获取临时密钥响应模型"""
    status: str = Field("ok", examples=["ok"])
    key_id: str = Field(..., description="临时密钥标识", examples=["3f9a0b2c4d5e6f78"])
    ttl_seconds: int = Field(..., description="有效期(秒)", examples=[86400])
    created_at: str = Field(..., description="生成时间 (UTC ISO8601)", examples=["2026-08-08T10:00:00Z"])
    expires_at: str = Field(..., description="过期时间 (UTC ISO8601)", examples=["2026-08-09T10:00:00Z"])
    ecdsa: TempKeyEcdsaPair
    ecies: TempKeyEciesPair

# --- 请求模型 (兼容 JSON 和 纯文本) ---
class ExecRequestJSON(BaseModel):
    cmd: str = Field(..., description="要执行的命令", examples=["ls -la /tmp", "python --version"])
    cwd: Optional[str] = Field(None, description="工作目录", examples=["/tmp", "/var/log"])
    env: Optional[Dict[str, str]] = Field(None, description="额外环境变量", examples=[{"PATH": "/usr/bin", "DEBUG": "true"}])

# --- 文件列表 ---
class FileListRequest(BaseModel):
    path: str = Field(".", description="要列出的目录路径", examples=["/tmp", ".", "/var/log"])
    recursive: bool = Field(False, description="是否递归列出子目录", examples=[True, False])

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

# --- 权限查询 ---
class AuthorityQueryRequest(BaseModel):
    paths: List[str] = Field(..., description="要查询权限的文件/目录路径列表", examples=[["/tmp/test.txt", "/var/log"]])

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

# --- 权限设置 ---
class AuthoritySetRequest(BaseModel):
    # ✅ 修正：examples 必须是列表
    permissions: Dict[str, str] = Field(
        ..., 
        description="路径到权限模式的映射", 
        examples=[{"/tmp/test.txt": "644", "/opt/scripts": "755"}] # 👈 加上方括号
    )
    recursive: bool = Field(False, description="是否递归应用到子目录", examples=[True, False])

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

# --- 查看文件内容 ---
class FileCatRequest(BaseModel):
    path: str = Field(..., description="要查看的文件路径", examples=["/tmp/config.json", "/var/log/syslog"])

class FileCatResponse(SResponse):
    path: str
    content: str
    encoding: str
    is_binary: bool
    size: int

# --- 上传文件 ---
class FileUploadRequest(BaseModel):
    path: str = Field(..., description="上传目标目录或文件路径", examples=["/tmp/uploads", "/tmp/newfile.txt"])
    filename: Optional[str] = Field(None, description="文件名 (当path是目录时必填)", examples=["backup.tar.gz"])
    content: str = Field(..., description="文件内容的Base64编码", examples=["SGVsbG8gV29ybGQh"]) # "Hello World!"
    chunk_id: Optional[int] = Field(None, description="分块索引 (0-based)", examples=[0])
    total_chunks: Optional[int] = Field(None, description="总分块数", examples=[3])
    
class FileUploadRawResponse(SResponse):
    """裸二进制流上传接口的标准化结构体返回体"""
    path: Optional[str] = Field(None, description="文件在服务器端的保存路径")
    chunk_id: Optional[int] = Field(None, description="当前上传的分片索引")
    completed: bool = Field(..., description="指示该文件是否已全部传输并合并完成")
    message: str = Field("", description="状态提示消息")

class FileUploadResponse(SResponse):
    path: Optional[str] = None
    received: Optional[int] = None
    total: Optional[int] = None
    chunked: Optional[bool] = None

# --- 下载文件 ---
class FileDownloadRequest(BaseModel):
    path: str = Field(..., description="要下载的文件路径", examples=["/tmp/backup.tar.gz"])

# --- 批量删除 ---
class FileDeleteRequest(BaseModel):
    paths: List[str] = Field(..., description="要删除的文件/目录路径列表", examples=[["/tmp/old.log", "/tmp/cache"]])
    # 兼容旧格式的单一路径字段 (在逻辑中处理)
    path: Optional[str] = Field(None, exclude=True) 
    path2: Optional[str] = Field(None, exclude=True)

class FileDeleteResult(BaseModel):
    path: str
    status: str

class FileDeleteResponse(BaseModel):
    status: str
    results: List[FileDeleteResult]

# --- 批量移动 ---
class FileMoveRequest(BaseModel):
    # ✅ 修正：examples 必须是列表
    move_map: Dict[str, str] = Field(
        ..., 
        description="源路径到目标路径的映射", 
        examples=[{"/tmp/old.txt": "/archive/old.txt", "/tmp/logs": "/backup/logs"}] # 👈 加上方括号
    )
    # 兼容单对格式
    path: Optional[str] = Field(None, exclude=True)
    mvpath: Optional[str] = Field(None, exclude=True)

class FileMoveResult(BaseModel):
    from_field: str = Field(..., alias="from") # 使用 alias 兼容 Python 关键字 from
    to: str
    status: str

    model_config = ConfigDict(populate_by_name=True)

class FileMoveResponse(BaseModel):
    status: str
    total: int
    success: int
    results: List[Dict[str, str]] # 或者使用 FileMoveResult

# --- 新建目录 ---
class FileMkdirRequest(BaseModel):
    path: str = Field(..., description="要创建的新目录路径", examples=["/tmp/new/project/logs"])

class FileMkdirResponse(BaseModel):
    status: str
    path: str

class OneTimeTaskGetResponse(BaseModel):
    status: str = Field("ok", description="请求状态", examples=["ok"])
    count: int = Field(..., description="待执行任务的数量", examples=[2])
    tasks: List[str] = Field(
        ..., 
        description="待执行的任务命令列表", 
        examples=[["echo 'init'", "/opt/scripts/setup.sh"]]
    )

# --- 请求模型：仅支持 ["cmd1", "cmd2"] ---
class OneTimeTaskRequest(RootModel):
    root: List[str]

# --- 响应模型 ---
class OneTimeTaskResponse(CountResponse):
    tasks: List[str]
    executed: Optional[List[Any]] = None

# --- 响应模型 (GET/POST 共用) ---
class CronTasksResponse(CountResponse):
    tasks: Dict[str, str] = Field(
        ..., 
        description="Cron表达式与命令的映射字典",
        examples=[{"*/10 * * * *": "python /opt/scripts/health_check.py"}]
    )
# --- 日志条目基础模型 ---
class BaseLogEntry(BaseModel):
    ts: str = Field(..., description="执行时间戳", examples=["2024-01-15T10:30:45Z"])
    cmd: str = Field(..., description="执行的命令")
    output: str = Field(..., description="命令输出内容")
    exitcode: int = Field(..., description="退出码")
    type: str = Field(..., description="日志类型")
    formatted: Optional[str] = Field(None, description="格式化后的摘要")

class CronLogEntry(BaseLogEntry):
    cron: str = Field(..., description="Cron 表达式", examples=["*/5 * * * *"])

class TaskLogResponse(CountResponse):
    logs: List[Any]  # 实际使用时会根据路由返回具体子类

class LogClearResponse(SResponse):
    cleared: str = Field(..., description="被清空的日志类型", examples=["onetime", "cron"])

class LogStats(BaseModel):
    total_logged: int
    max_capacity: int
    recent_success: int
    recent_failed: int

class LogSummaryResponse(BaseModel):
    onetime: LogStats
    cron: LogStats

# --- 子模型：启动任务状态 ---
class OnetimeStatus(BaseModel):
    pending: bool = Field(..., description="是否有待执行的任务", examples=[False])
    count: int = Field(..., description="待执行任务数量", examples=[3])

# --- 子模型：定时任务状态 ---
class CronStatus(BaseModel):
    active: bool = Field(..., description="定时任务调度器是否处于活跃状态", examples=[True])
    count: int = Field(..., description="当前配置的定时任务数量", examples=[2])
    check_interval: int = Field(..., description="检查间隔(秒)", examples=[30])

# --- 主响应模型 ---
class TaskStatusResponse(BaseModel):
    onetime: OnetimeStatus
    cron: CronStatus

class OnetimeExecuteResponse(BaseModel):
    status: str = Field("ok", examples=["ok"])
    message: Optional[str] = Field(None, description="状态说明")
    executed: int = Field(..., description="成功触发的任务数量", examples=[2])
    results: List[Dict[str, Any]] = Field(
        ..., 
        description="每个任务的详细执行结果",
        examples=[[{
            "cmd": "echo 'hello'",
            "exitcode": 0,
            "stdout": "hello\n",
            "stderr": ""
        }]]
    )
##超级终端

# ============================================================================
# ⚙️ 全局配置辅助函数 (模块级，避免类定义时引用问题)
# ============================================================================
_BASE_DIR = os.path.dirname(os.path.abspath(__file__))


def _get_config_value(key: str, default: str = "", file_path: str = None) -> str:
    """
    通用配置获取函数 (模块级)
    优先级: 环境变量 > 本地文件 > 默认值
    :param key: 环境变量名
    :param default: 默认值
    :param file_path: 备选文件路径 (相对于 _BASE_DIR)
    :return: 配置值 (已 strip)
    """
    # 1. 优先读取环境变量
    env_value = os.getenv(key)
    if env_value is not None:
        return env_value.strip()
    
    # 2. 尝试读取本地文件
    if file_path:
        full_path = os.path.join(_BASE_DIR, file_path)
        if os.path.exists(full_path):
            try:
                with open(full_path, 'r', encoding='utf-8') as f:
                    file_value = f.read().strip()
                    if file_value:  # 非空才使用
                        return file_value
            except Exception:
                pass  # 文件读取失败则降级
    
    # 3. 返回默认值
    return default.strip() if default else ""

#===============================================
# noise生成类和数据类
#===============================================
@dataclass
class NoiseKeypair:
    """Noise 协议密钥对数据类"""
    role: str
    private_b64: str
    public_b64: str
    
    def to_dict(self) -> Dict[str, str]:
        return asdict(self)
    
    @property
    def private_bytes(self) -> bytes:
        """解码获取 32 字节原始私钥"""
        return base64.b64decode(self.private_b64)
    
    @property
    def public_bytes(self) -> bytes:
        """解码获取 32 字节原始公钥"""
        return base64.b64decode(self.public_b64)

class NoiseKeyGenerator:
    """
    Noise Protocol X25519 密钥对生成器
    
    生成符合 noise-c / noiseprotocol 标准的 32 字节 Raw 格式密钥
    """
    
    # 常量配置
    KEY_SIZE = 32  # X25519 固定 32 字节
    ENCODING = serialization.Encoding.Raw
    PRIVATE_FORMAT = serialization.PrivateFormat.Raw
    PUBLIC_FORMAT = serialization.PublicFormat.Raw
    
    @staticmethod
    def _generate_raw_keypair() -> Tuple[bytes, bytes]:
        """内部方法：生成原始字节格式的 X25519 密钥对"""
        priv_key = x25519.X25519PrivateKey.generate()
        pub_key = priv_key.public_key()
        
        priv_bytes = priv_key.private_bytes(
            encoding=NoiseKeyGenerator.ENCODING,
            format=NoiseKeyGenerator.PRIVATE_FORMAT,
            encryption_algorithm=serialization.NoEncryption()
        )
        pub_bytes = pub_key.public_bytes(
            encoding=NoiseKeyGenerator.ENCODING,
            format=NoiseKeyGenerator.PUBLIC_FORMAT
        )
        
        assert len(priv_bytes) == NoiseKeyGenerator.KEY_SIZE
        assert len(pub_bytes) == NoiseKeyGenerator.KEY_SIZE
        
        return priv_bytes, pub_bytes
    
    @classmethod
    def generate_single(cls, role_name: str) -> NoiseKeypair:
        """
        生成单个角色的密钥对
        
        Args:
            role_name: 角色标识，如 "Controller", "Agent"
            
        Returns:
            NoiseKeypair 数据类实例
        """
        priv_bytes, pub_bytes = cls._generate_raw_keypair()
        
        return NoiseKeypair(
            role=role_name,
            private_b64=base64.b64encode(priv_bytes).decode('utf-8'),
            public_b64=base64.b64encode(pub_bytes).decode('utf-8')
        )
    
    @classmethod
    def generate_pair(cls, 
                      control_role: str = "Controller",
                      agent_role: str = "Agent"
                     ) -> Dict[str, NoiseKeypair]:
        """
        🔥 核心方法：一次性生成通信双方的密钥对
        
        Args:
            control_role: 发起方角色名（默认: Controller/控制端）
            agent_role: 响应方角色名（默认: Agent/代理端）
            
        Returns:
            dict: {
                'control': NoiseKeypair,  # 发起方密钥
                'agent': NoiseKeypair,  # 响应方密钥
            }
        """
        return {
            'control': cls.generate_single(control_role),
            'agent': cls.generate_single(agent_role)
        }
# ============================================================================
# ⚙️ 全局配置类
# ============================================================================
class Config:
    """
    配置中心 - 支持多级配置源
    优先级: 环境变量 > 本地文件 > 默认值
    """
    
    # ================= 核心配置 =================
    # 命令执行超时时间(秒): 防止阻塞命令耗尽资源
    Rtimeout = int(os.getenv("EXEC_TIMEOUT", "30"))
    # 是否允许执行带管道的复杂命令 (⚠️ 生产环境建议关闭)
    EXEC_SHELL_MODE = os.getenv("EXEC_SHELL", "true").lower() == "true"
    # 调试模式: 开启后跳过认证和加密
    DEBUG = os.getenv("DEBUG", "false").lower() == "true"
    # 签名时间窗口(秒)
    TIMESTAMP_WINDOW = int(os.getenv("TIMESTAMP_WINDOW", "3600"))
    
    # ECDSA公钥: 环境变量 或 keys/agent_ecdsa_pub.pem
    ECDSA_PUBLIC_KEY_PEM = _get_config_value(
        key="ECDSA_PUBKEY",
        file_path="keys/agent_ecdsa_pub.pem"
    ) or "ECDSA公钥内容"
    
    # ECIES公钥: 环境变量 或 keys/agent_ecies_pub.b64
    ECIES_PUBLIC_KEY_PEM = _get_config_value(
        key="ECIES_PUBKEY", 
        file_path="keys/agent_ecies_pub.b64"
    ) or "ECIES公钥内容"

    ##AES-256
    _raw_key = get_random_bytes(32)
    SESSION_KEY = base64.b64encode(_raw_key).decode('utf-8')
    ##noise-key
    keys = NoiseKeyGenerator.generate_pair()
    NOISE_KEY= {
        'controller': {
            'private': keys['control'].private_b64
        },
        'agent': {
            'public': keys['agent'].public_b64
        }
    }
    # ================= 新增：文件模块配置 =================
    
    # 文件操作根目录: 限制代理端只能访问此目录及其子目录 (防止路径遍历); 候选目录不存在时降级到当前工作目录
    FILE_ROOT = _resolve_safe_file_root()
    
    # 单文件上传大小限制 (字节): 默认 100MB
    MAX_UPLOAD_SIZE = int(os.getenv("MAX_UPLOAD_SIZE", "104857600"))
    
    # 是否允许操作符号链接
    FOLLOW_SYMLINKS = os.getenv("FOLLOW_SYMLINKS", "false").lower() == "true"
    
    # 是否记录文件操作审计日志
    FILE_AUDIT_LOG = os.getenv("FILE_AUDIT_LOG", "true").lower() == "true"
    # ================= 新增：任务模块配置 =================
    
    # 启动任务标记: True=待执行, False=已执行/无任务
    InitTask: bool = True
    
    # 启动任务列表 (内存存储)
    onetasks: List[str] = []
    
    # 定时任务字典 {cron_expr: command} (内存存储)
    crontasks: Dict[str, str] = {}
    
    # 定时任务循环开关
    cronloop: bool = False
    
    # 任务执行超时时间(秒)
    TASK_TIMEOUT = int(os.getenv("TASK_TIMEOUT", "300"))  # 默认5分钟
    
    # 定时任务检查间隔(秒)
    CRON_CHECK_INTERVAL = int(os.getenv("CRON_INTERVAL", "30"))
    # 启动任务日志 (直接初始化为空列表，TaskManager 中会转为 deque)
    onetimetasks_log: List[Dict[str, Any]] = []
    
    # 定时任务日志 (直接初始化为空列表，TaskManager 中会转为 deque)
    crontasks_log: List[Dict[str, Any]] = []

    # 日志最大条数限制
    MAX_TASK_LOG_SIZE = int(os.getenv("MAX_TASK_LOG", "100"))
    # ================= 新增：临时密钥模块配置 =================
    # 临时密钥默认有效期(小时)
    TEMPKEY_DEFAULT_TTL_HOURS = int(os.getenv("TEMPKEY_TTL", "24"))
    # 临时密钥最大有效期(小时), 防止无期限授权
    TEMPKEY_MAX_TTL_HOURS = int(os.getenv("TEMPKEY_MAX_TTL", "168"))
    # ================= 🚀 新增：缓存模块配置 =================
    BASEINFO_CACHE_TTL = 3600  # 基础信息缓存 1 小时 (单位: 秒)
    STATUS_CACHE_TTL = 30     # 实时状态缓存 30 秒 (单位: 秒)
    
    # 基础信息缓存槽
    _baseinfo_cache: Optional[Dict[str, Any]] = None
    _baseinfo_cache_time: float = 0.0
    _baseinfo_lock: Optional[asyncio.Lock] = None  # 采用延迟加载，规避异步 Loop 错配风险
    
    # 实时监控缓存槽
    _status_cache: Optional[Dict[str, Any]] = None
    _status_cache_time: float = 0.0
    _status_lock: Optional[asyncio.Lock] = None    # 采用延迟加载
    # =========================================================
    # 服务监听配置
    HOST = os.getenv("HOST", "0.0.0.0")
    PORT = int(os.getenv("KPORT") or os.getenv("PORT") or os.environ.get('SERVER_PORT') or 8000)
    
    # 代理版本信息
    AGENT_VERSION = os.getenv("AGENT_VERSION", "0.4.6-python")
    
    # ================= 启动校验 =================
    
    @classmethod
    def validate(cls):
        """启动前校验关键配置"""
        if not cls.DEBUG:
            errors = []
            
            if not cls.ECDSA_PUBLIC_KEY_PEM:
                errors.append("ECDSA_PUBKEY: 未设置环境变量且文件 keys/agent_ecdsa_pub.pem 不存在")
            else:
                try:
                    CryptoManager._load_ecdsa_pubkey(cls.ECDSA_PUBLIC_KEY_PEM)
                except Exception as e:
                    errors.append(f"ECDSA_PUBKEY invalid: {e}")
            
            if not cls.ECIES_PUBLIC_KEY_PEM:
                errors.append("ECIES_PUBKEY: 未设置环境变量且文件 keys/agent_ecies_pub.b64 不存在")
            else:
                try:
                    CryptoManager.validate_ecies_pubkey(cls.ECIES_PUBLIC_KEY_PEM)
                except Exception as e:
                    errors.append(f"ECIES_PUBKEY invalid: {e}")
            
            if errors:
                Logger.error("❌ 配置校验失败 (非DEBUG模式必须配置密钥):")
                for err in errors:
                    Logger.error(f"   • {err}")
                Logger.info("\n💡 解决方法:")
                Logger.info("   1. 设置环境变量: export ECDSA_PUBKEY='-----BEGIN PUBLIC KEY-----...'")
                Logger.info("   2. 或将密钥文件放入 ./keys/ 目录 (运行 generate_keys.py 生成)")
                sys.exit(1)

# ============================================================================
#  日志类
# ============================================================================
class Logger:
    """日志处理器"""
    if Config.DEBUG:
        _log_level = 1  # 0=关闭Debug日志, 1=基本信息, 2=WebSocket传输，3=终端日志，4网络统计日志，5磁盘统计日志
    else:
        _log_level = 0  # 生产环境默认关闭Debug日志
    @classmethod
    def set_log_level(cls, level: int):
        """设置日志级别"""
        cls._log_level = level
    
    @classmethod
    def _log(cls, message: str, level: str = "INFO"):
        """基础日志方法"""
        if cls._log_level == 0 and level != "ERROR":
            return
            
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        log_message = f"[{timestamp}] [{level}] {message}"
        if level == "ERROR":
            print(log_message, file=sys.stderr)
        else:
            print(log_message)
    
    @classmethod
    def debug(cls, message: str, debug_level: int = 1):
        """调试日志"""
        if cls._log_level == debug_level:
            cls._log(message, "DEBUG")
    
    @classmethod
    def info(cls, message: str):
        """信息日志"""
        cls._log(message, "INFO")
    
    @classmethod
    def warning(cls, message: str):
        """警告日志"""
        cls._log(message, "WARNING")
    
    @classmethod
    def error(cls, message: str):
        """错误日志"""
        cls._log(message, "ERROR")
# ============================================================================
# 🔐 加密模块: ECDSA签名验证 + ECIES加密
# ============================================================================
class CryptoManager:
    """
    加密管理器 - 代理端专用
    - 只持有公钥，不存储任何私钥/敏感信息
    - 提供签名验证和响应加密能力
    """
    
    def __init__(self, ecdsa_pubkey_pem: str, ecies_pubkey_b64: str):
        # 1. 加载 ECDSA 公钥 (PEM格式)
        self.ecdsa_vk = self._load_ecdsa_pubkey(ecdsa_pubkey_pem)
        
        # 2. 加载 ECIES 公钥 (Base64/Hex/Raw Bytes 自动兼容)
        self.ecies_pubkey = None
        if ecies_pubkey_b64 and ecies_pubkey_b64.strip():
            raw = ecies_pubkey_b64.strip()
            try:
                # 尝试 Base64 解码 (推荐)
                if len(raw) > 32 and not all(c in '0123456789abcdefABCDEF' for c in raw):
                    self.ecies_pubkey = base64.b64decode(raw)
                else:
                    # 兼容 Hex 格式
                    self.ecies_pubkey = bytes.fromhex(raw)
            except Exception:
                # 兼容直接传入原始字节字符串
                self.ecies_pubkey = raw.encode('utf-8') if isinstance(raw, str) else raw
                
            if len(self.ecies_pubkey) not in (33, 65):
                Logger.warning(f"⚠️  警告: ECIES公钥长度异常 ({len(self.ecies_pubkey)}字节), 加密可能失败")

    @staticmethod
    def _load_ecdsa_pubkey(pem_or_der: str) -> VerifyingKey:
        """
        加载ECDSA公钥，支持PEM、DER(X.509)以及纯SEC1压缩/非压缩格式
        """
        pubkey_str = pem_or_der.strip()
        
        # 尝试1: PEM格式
        if "-----BEGIN PUBLIC KEY-----" in pubkey_str:
            try:
                return VerifyingKey.from_pem(pubkey_str)
            except Exception as e:
                raise ValueError(f"Invalid PEM public key: {e}")
        
        # 将无标头的数据统一提取出 bytes 供后续判断
        try:
            clean_str = "".join(pubkey_str.split())
            key_bytes = base64.b64decode(clean_str, validate=True)
        except (binascii.Error, ValueError):
            # 如果不是 Base64，当做原始 latin1 字节流回退处理
            key_bytes = pubkey_str.encode('latin1')

        # 尝试2: 标准 DER (X.509 ASN.1) 格式
        try:
            return VerifyingKey.from_der(key_bytes)
        except Exception:
            pass  # 不是标准的复合 DER 结构，继续向下

        # 🚀 尝试 3: 纯 SEC1 编码（包含 33字节压缩公钥 和 65字节未压缩公钥）
        # 压缩公钥通常以 \x02 或 \x03 开头，长度为 33 字节 (对于 P-256)
        # 未压缩公钥通常以 \x04 开头，长度为 65 字节
        if len(key_bytes) in (33, 65) and key_bytes[0] in (2, 3, 4):
            try:
                # 注意：此处必须明确指定你的项目用的曲线是什么 (P-256)
                return VerifyingKey.from_string(key_bytes, curve=TEMP_ECDSA_CURVE)
            except Exception as e:
                raise ValueError(f"Invalid raw SEC1/Compressed public key: {e}")

        # 全部失败
        raise ValueError(
            "Failed to load ECDSA public key. Please check:\n"
            "1. PEM format (starts with '-----BEGIN PUBLIC KEY-----')\n"
            "2. Standard X.509 DER in Base64\n"
            "3. Raw SEC1 Compressed (33 bytes) or Uncompressed (65 bytes) in Base64\n"
            f"Provided key length (decoded): {len(key_bytes)} bytes."
        )

    @staticmethod
    def validate_ecies_pubkey(pubkey_b64: str) -> bytes:
        """
        校验 ECIES 公钥格式，支持 Base64 或 Hex 编码。
        :param pubkey_b64: ECIES 公钥字符串
        :return: 解码后的公钥字节
        """
        if not pubkey_b64 or not pubkey_b64.strip():
            raise ValueError("ECIES public key is empty")

        raw = pubkey_b64.strip()
        try:
            if len(raw) > 32 and not all(c in '0123456789abcdefABCDEF' for c in raw):
                candidate = "".join(raw.split())
                key_bytes = base64.b64decode(candidate, validate=True)
            else:
                key_bytes = bytes.fromhex(raw)
        except Exception as e:
            raise ValueError(f"Invalid ECIES public key: {e}")

        if len(key_bytes) not in (33, 65):
            raise ValueError(
                f"Invalid ECIES public key length {len(key_bytes)} bytes; expected 33 or 65 bytes"
            )

        return key_bytes

    def verify_signature(self, nonce: str, timestamp: str, auth_token: str) -> bool:
        """
        验证请求签名
        :param nonce: 单次随机值 (防重放)
        :param timestamp: UTC时间戳字符串
        :param auth_token: Base64编码的ECDSA签名
        :return: 验证通过返回True，否则抛出异常
        """
        # 1. 时间窗口校验
        try:
            ts = int(timestamp)
            now = int(time.time())
            if abs(now - ts) > Config.TIMESTAMP_WINDOW:
                raise ValueError(f"Timestamp expired: diff={abs(now-ts)}s > {Config.TIMESTAMP_WINDOW}s")
        except ValueError as e:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail=f"Invalid timestamp: {str(e)}"
            )


        
        # 2. 签名校验: message = nonce + timestamp
        message = f"{nonce}{timestamp}".encode('utf-8')
        #测试
        hash_obj = hashlib.sha256(message)
        Logger.debug(f"[Backend] message: {nonce}{timestamp}")
        Logger.debug(f"[Backend] SHA256: {hash_obj.hexdigest()}")
        try:
            # 将 Base64 字符串解码为原始字节
            signature = base64.b64decode(auth_token)
            
            # 🔥 核心增强：智能识别签名格式
            sig_length = len(signature)
            
            if sig_length == 64:
                # 命中：Web Crypto API 标准的 Raw 格式 (r + s)
                decode_method = sigdecode_string
                Logger.debug("[Auth] 侦测到 Raw 格式签名")
                
            elif sig_length > 64 and signature[0] == 0x30:
                # 命中：Python/OpenSSL 标准的 DER 格式 (以 0x30 开头)
                decode_method = sigdecode_der
                Logger.debug("[Auth] 侦测到 DER 格式签名")
                
            else:
                # 如果都不符合，可以兜底使用 DER 或者直接拒绝
                decode_method = sigdecode_der
            
            # 使用动态匹配到的解码器进行验签
            self.ecdsa_vk.verify(
                signature, 
                message, 
                hashfunc=hashlib.sha256, 
                sigdecode=decode_method
            )
        except BadSignatureError:
            Logger.info("❌ 签名验证失败: 坏签名")
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Signature verification failed: bad signature"
            )
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail=f"Signature error: {str(e)}"
            )
        
        return True

    def identify_signer(self, nonce: str, timestamp: str, auth_token: str,
                        temp_vk: Optional[VerifyingKey] = None) -> str:
        """
        验证请求签名并识别密钥来源
        优先级: 控制端静态密钥 > 有效期内临时密钥
        :param temp_vk: 当前有效临时密钥的 ECDSA 公钥 (无则跳过临时校验)
        :return: "static" (静态密钥) 或 "temp" (临时密钥)
        :raises HTTPException 401: 时间戳非法或签名均不匹配
        """
        # 1. 时间窗口校验
        try:
            ts = int(timestamp)
            now = int(time.time())
            if abs(now - ts) > Config.TIMESTAMP_WINDOW:
                raise ValueError(f"Timestamp expired: diff={abs(now-ts)}s > {Config.TIMESTAMP_WINDOW}s")
        except ValueError as e:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail=f"Invalid timestamp: {str(e)}"
            )

        # 2. 签名校验: message = nonce + timestamp
        message = f"{nonce}{timestamp}".encode('utf-8')
        hash_obj = hashlib.sha256(message)
        Logger.debug(f"[Backend] message: {nonce}{timestamp}")
        Logger.debug(f"[Backend] SHA256: {hash_obj.hexdigest()}")

        # 3. 依次尝试静态密钥 → 临时密钥
        if self._verify_with(self.ecdsa_vk, auth_token, message):
            Logger.debug("[Auth] 签名来源: static (控制端静态密钥)")
            return "static"
        if temp_vk is not None and self._verify_with(temp_vk, auth_token, message):
            Logger.debug("[Auth] 签名来源: temp (临时密钥)")
            return "temp"

        Logger.info("❌ 签名验证失败: 静态密钥与临时密钥均不匹配")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Signature verification failed: bad signature"
        )

    @staticmethod
    def _verify_with(vk: VerifyingKey, auth_token: str, message: bytes) -> bool:
        """
        使用指定公钥验签 (兼容 Raw 64字节 与 DER 两种签名格式)
        :return: True=验签通过, False=任何失败 (不抛异常)
        """
        try:
            signature = base64.b64decode(auth_token)
            sig_length = len(signature)

            if sig_length == 64:
                # 命中：Web Crypto API 标准的 Raw 格式 (r + s)
                decode_method = sigdecode_string
            elif sig_length > 64 and signature[0] == 0x30:
                # 命中：Python/OpenSSL 标准的 DER 格式 (以 0x30 开头)
                decode_method = sigdecode_der
            else:
                decode_method = sigdecode_der

            vk.verify(
                signature,
                message,
                hashfunc=hashlib.sha256,
                sigdecode=decode_method
            )
            return True
        except BadSignatureError:
            return False
        except Exception:
            return False
    
    def encrypt_response(self, data: Dict[str, Any], pubkey: Optional[bytes] = None) -> str:
        """
        加密响应数据
        :param data: 待加密的字典数据
        :param pubkey: 目标公钥字节 (临时密钥请求时传入临时 ECIES 公钥; None 时用控制端静态公钥)
        :return: DEBUG模式返回明文JSON，否则返回Base64编码的ECIES密文
        """
        target_pubkey = pubkey or self.ecies_pubkey

        if Config.DEBUG or not target_pubkey:
            # 调试模式或无加密公钥: 明文返回
            return json.dumps(data, ensure_ascii=False, default=str)
        
        try:
            # ECIES加密: 自动协商临时AES密钥加密数据
            plaintext = json.dumps(data, ensure_ascii=False, default=str).encode('utf-8')
            ciphertext = ecies_encrypt(target_pubkey, plaintext)
            return base64.b64encode(ciphertext).decode('ascii')
        except Exception as e:
            # 加密失败时返回错误标识(生产环境应记录日志)
            error_data = {"_encrypt_error": str(e), "_raw": data if Config.DEBUG else None}
            return json.dumps(error_data, ensure_ascii=False, default=str)
    def decrypt_data(combined_payload: str, key: bytes):
        """
        使用 AES-256-GCM 解密
        :param combined_payload: 加密函数返回的打包数据
        :param key: 32字节密钥
        :return: 解密后的明文字符串
        """
        try:
            # 1. 解码并提取参数
            raw_data = json.loads(base64.b64decode(combined_payload).decode('utf-8'))
            nonce = base64.b64decode(raw_data['nonce'])
            tag = base64.b64decode(raw_data['tag'])
            ciphertext = base64.b64decode(raw_data['ciphertext'])
            
            # 2. 创建解密器并验证
            cipher = AES.new(key, AES.MODE_GCM, nonce=nonce)
            
            # 3. 解密同时校验完整性
            # 如果密文或 tag 被篡改，这里会抛出 ValueError
            plaintext = cipher.decrypt_and_verify(ciphertext, tag)
            return plaintext.decode('utf-8')
        
        except ValueError:
            Logger.error("❌ 解密失败：数据可能被篡改或密钥错误")
            return None
        except Exception as e:
            Logger.error(f"❌ 异常: {e}")
            return None


# 全局加密管理器实例
crypto = None


def init_crypto():
    """初始化全局加密管理器，确保密钥在验证后再加载。"""
    global crypto
    if crypto is None:
        crypto = CryptoManager(Config.ECDSA_PUBLIC_KEY_PEM, Config.ECIES_PUBLIC_KEY_PEM)
    return crypto


def _generate_ecies_keypair() -> Tuple[bytes, bytes]:
    """
    生成 secp256k1 ECIES 密钥对，兼容 eciespy 各版本 API
    :return: (私钥 32 字节, 未压缩公钥 65 字节)
    """
    try:
        # 纯 Python 兜底 (ecdsa 库, 无需 coincurve/pycryptodome, 全平台可装)
        from ecdsa import SECP256k1, SigningKey as _EcdsaSigningKey
        _order = SECP256k1.order
        while True:
            secret = secrets.token_bytes(32)
            if 0 < int.from_bytes(secret, "big") < _order:
                pub = b"\x04" + _EcdsaSigningKey.from_string(secret, curve=SECP256k1).get_verifying_key().to_string()
                return secret, pub
    except Exception:
        pass
    try:
        # eciespy >= 0.4.5 新 API
        from ecies.keys import PrivateKey as EciesPrivateKey
        sk = EciesPrivateKey("secp256k1")
        return sk.secret, sk.public_key.to_bytes()
    except Exception:
        pass
    try:
        # eciespy 旧版 API: generate_keypair / generate_eth_key
        try:
            from ecies.utils import generate_keypair
            pub_hex, priv_hex = generate_keypair()
        except Exception:
            from ecies.utils import generate_eth_key
            eth_key = generate_eth_key()
            pub_hex, priv_hex = eth_key.public_key.to_hex(), eth_key.to_hex()
        pub = bytes.fromhex(pub_hex[2:] if pub_hex.startswith("0x") else pub_hex)
        priv = bytes.fromhex(priv_hex[2:] if priv_hex.startswith("0x") else priv_hex)
        return priv, pub
    except Exception as e:
        raise RuntimeError(f"eciespy 密钥生成失败: {e}")


# ============================================================================
# 🔑 临时密钥管理器: 单一活跃临时密钥 (ECDSA + ECIES)
# ============================================================================
# 临时密钥 ECDSA 曲线: 固定为 ECDSA P-256 (secp256r1 / prime256v1, OID 1.2.840.10045.3.1.7)
TEMP_ECDSA_CURVE = NIST256p


def _ecdsa_private_pkcs8_pem(sk: "SigningKey") -> str:
    """将 ECDSA 私钥渲染为 PKCS#8 PEM（-----BEGIN PRIVATE KEY-----）。

    python-ecdsa 的 to_pem() 默认输出 SEC1 格式（-----BEGIN EC PRIVATE KEY-----），
    为与交付约定一致 (PKCS#8) 显式转换；极旧版本不支持 pkcs8 时回退 SEC1，
    两种 PEM 控制端均可解析。
    """
    try:
        der = sk.to_der(format="pkcs8")
    except (TypeError, ValueError):
        return sk.to_pem().decode("utf-8")
    b64 = base64.b64encode(der).decode("ascii")
    wrapped = "\n".join(b64[i:i + 64] for i in range(0, len(b64), 64))
    return f"-----BEGIN PRIVATE KEY-----\n{wrapped}\n-----END PRIVATE KEY-----"


class TempKeyManager:
    """
    临时密钥管理器 (线程安全)
    - 同一时刻仅维护一份有效临时密钥对，避免内部多头密钥管理负担
    - 有效期内重复查询返回同一密钥对；过期后自动生成新的密钥对
    - 临时持有者: 用临时 ECDSA P-256 私钥签名请求, 用临时 ECIES 私钥解密响应
    """

    def __init__(self):
        self._lock = threading.Lock()
        self._key: Optional[Dict[str, Any]] = None

    # ================= 对外接口 =================

    def get_or_create(self, ttl_hours: int) -> Dict[str, Any]:
        """获取临时密钥: 有效期内幂等返回同一密钥, 过期/不存在则重新生成"""
        with self._lock:
            if self._key and not self._is_expired(self._key):
                return self._key
            self._key = self._generate(ttl_hours)
            Logger.info(
                f"🔑 [TempKey] 新临时密钥已生成: key_id={self._key['key_id']}, "
                f"有效期 {ttl_hours} 小时"
            )
            return self._key

    def get_active_ecdsa_vk(self) -> Optional[VerifyingKey]:
        """当前有效临时密钥的 ECDSA 验签公钥 (供中间件验签, 无密钥时返回 None)"""
        with self._lock:
            if self._key and not self._is_expired(self._key):
                return self._key.get("ecdsa_vk")
            return None

    def get_active_ecies_pub(self) -> Optional[bytes]:
        """当前有效临时密钥的 ECIES 公钥 (供中间件加密响应, 无密钥时返回 None)"""
        with self._lock:
            if self._key and not self._is_expired(self._key):
                return self._key.get("ecies_pub")
            return None

    # ================= 内部实现 =================

    def _is_expired(self, key: Dict[str, Any]) -> bool:
        return int(time.time()) >= key["expires_at"]

    def _generate(self, ttl_hours: int) -> Dict[str, Any]:
        """生成一对临时密钥 (ECDSA P-256 + ECIES secp256k1)"""
        # 1. ECDSA 临时密钥对 (P-256 / prime256v1, PEM 格式下发, 供临时持有者签名请求)
        sk = SigningKey.generate(curve=TEMP_ECDSA_CURVE)
        ecdsa_priv_pem = _ecdsa_private_pkcs8_pem(sk)
        ecdsa_pub_pem = sk.get_verifying_key().to_pem().decode('utf-8')

        # 2. ECIES 临时密钥对 (32字节私钥 + 65字节未压缩公钥, 十六进制下发)
        ecies_priv, ecies_pub = _generate_ecies_keypair()

        now = int(time.time())
        ttl_seconds = int(ttl_hours) * 3600
        return {
            "key_id": secrets.token_hex(8),
            "created_at": now,
            "expires_at": now + ttl_seconds,
            "ttl_seconds": ttl_seconds,
            # 下发字段
            "ecdsa_private_key": ecdsa_priv_pem,
            "ecdsa_public_key": ecdsa_pub_pem,
            "ecies_private_key": ecies_priv.hex(),
            "ecies_public_key": ecies_pub.hex(),
            # 内存字段 (不下发)
            "ecdsa_vk": sk.get_verifying_key(),
            "ecies_pub": ecies_pub,
        }


# ============================================================================
# 🛡️ 认证中间件: 请求签名验证 + 响应加密 (逻辑解耦修复版)
# ============================================================================
class AuthEncryptMiddleware(BaseHTTPMiddleware):
    """
    认证 + 加密中间件
    1. 请求进入: 验证签名 -> 解密 Body (如果标记了 AES)
    2. 响应返回: 加密 Response Body
    """
    
    async def dispatch(self, request: Request, call_next):
        headers = request.headers
        path = request.url.path  # 获取当前请求路径
        bypass_paths = ["/api/baseinfo", "/api/status"]
        
        # 🌟 核心修复 1：零信任原则，默认初始化认证状态为 False
        request.state.is_authenticated = False  
        
        # 🌟 核心修复 2：优先判断 DEBUG 模式，如果为 True 直接拉满权限并提前放行
        if Config.DEBUG:
            request.state.is_authenticated = True 
            return await call_next(request)
            
        # 放行预检请求和轻量探测
        if request.method in ["OPTIONS", "HEAD"]:
            return await call_next(request)

        # 生产环境：强制执行严格签名校验
        nonce = headers.get("x-nonce")
        timestamp = headers.get("x-timestamp") 
        auth_token = headers.get("x-auth-token")
        
        # 检查是否缺失认证头
        if not all([nonce, timestamp, auth_token]):
            if path in bypass_paths:
                return await call_next(request)  # 白名单允许匿名放行，身份保持最初的 False
            else:
                return JSONResponse(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    content={"error": "Missing auth headers"}
                )
        
        # 🌟 核心修复 3：直接进行密码学签名校验，剥离原先导致死锁的 if 判断外壳
        try:
            # 🔑 组合验签: 优先静态密钥, 无果再尝试当前有效临时密钥
            temp_vk = None
            tkm = getattr(request.app.state, "temp_key_manager", None)
            if tkm is not None:
                temp_vk = tkm.get_active_ecdsa_vk()

            key_source = crypto.identify_signer(nonce, timestamp, auth_token, temp_vk)

            # ✨ 唯一步骤：只有当椭圆曲线点乘验签彻底通过时，才在此处将身份显式改为 True
            request.state.is_authenticated = True
            request.state.key_source = key_source  # "static" | "temp"
            
        except Exception as e:
            if path in bypass_paths:
                return await call_next(request)  # 验签失败但如果是白名单路由，保留其 False 标签匿名放行
            else:
                return JSONResponse(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    content={"error": f"Signature verification failed: {str(e)}"}
                )

        # === 阶段 1.5: AES 请求体解密 ===
        decrypted_body_bytes = None
        if headers.get("x-aes-encrypted") == "true":
            # 🌟 安全边界：只有通过认证(True)的请求才允许解密，防止未授权恶意探测
            if request.state.is_authenticated:
                original_body = await request.body()
                if original_body:
                    try:
                        encrypted_str = original_body.decode('utf-8')
                        decrypted_json_str = CryptoManager.decrypt_data(encrypted_str, Config._raw_key)
                        if Config.DEBUG:
                            Logger.debug(f" [AES Decrypt] Success: {decrypted_json_str[:100]}...")
                        json.loads(decrypted_json_str) 
                        decrypted_body_bytes = decrypted_json_str.encode('utf-8')
                        request._body = decrypted_body_bytes
                    except Exception as e:
                        Logger.error(f"💥 [AES Decrypt] Failed: {str(e)}")
                        return JSONResponse(
                            status_code=status.HTTP_400_BAD_REQUEST,
                            content={"error": f"AES Decrypt failed: {str(e)}"}
                        )
            else:
                return JSONResponse(
                    status_code=status.HTTP_403_FORBIDDEN,
                    content={"error": "Decryption rejected for unauthenticated requests"}
                )
                    
        original_receive = request.receive
        has_returned_body = False
        
        async def wrapped_receive():
            nonlocal has_returned_body
            if decrypted_body_bytes is not None:
                if not has_returned_body:
                    has_returned_body = True
                    return {"type": "http.request", "body": decrypted_body_bytes, "more_body": False}
                else:
                    return {"type": "http.request", "body": b"", "more_body": False}
            else:
                return await original_receive()

        request._receive = wrapped_receive

        # === 阶段 2: 处理业务逻辑 ===
        try:
            response = await call_next(request)
        except Exception as exc:
            raise exc

        # === 阶段 3: 响应加密 ===
        if response.headers.get("content-type", "").startswith("application/json"):
            body_parts = []
            async for chunk in response.body_iterator:
                body_parts.append(chunk)
            original_body = b"".join(body_parts)
            
            try:
                original_data = json.loads(original_body.decode('utf-8'))
                
                # 根据中间件最终确立的真伪身份标签，决定是否在出口裹上密文外衣
                if getattr(request.state, "is_authenticated", False):
                    # 🔑 按验签来源选择对应 ECIES 公钥: 静态密钥->静态公钥, 临时密钥->临时公钥
                    response_pubkey = crypto.ecies_pubkey
                    if getattr(request.state, "key_source", "static") == "temp":
                        tkm = getattr(request.app.state, "temp_key_manager", None)
                        if tkm is not None:
                            response_pubkey = tkm.get_active_ecies_pub() or response_pubkey
                    encrypted_content = crypto.encrypt_response(original_data, response_pubkey)
                    encoded = encrypted_content.encode('utf-8')
                    if not Config.DEBUG:
                        response.headers["x-encrypted"] = "true"
                        response.headers["x-agent-version"] = Config.AGENT_VERSION
                else:
                    # 匿名放行路径（如未登录访问 baseinfo）直接透传明文 JSON 字符串
                    encoded = original_body
                    response.headers["x-encrypted"] = "false"
                
                response.body_iterator = self._async_iter([encoded])
                response.headers["content-length"] = str(len(encoded))
                
            except json.JSONDecodeError:
                pass 
        return response
    
    @staticmethod
    async def _async_iter(items):
        for item in items:
            yield item
# ============================================================================
#  获取系统信息类
# ============================================================================
class SystemInfoCollector:
    """系统信息收集器 (已修复跨请求实例化生命周期导致的 0% 状态 Bug)"""
    
    # 🌟 核心修复：将增量统计状态提升为类变量，使跨请求创建的瞬时实例能持久共享历史上下文
    _last_cpu_times = None
    _last_network_stats = {'rx': 0, 'tx': 0}
    _total_network_up = 0
    _total_network_down = 0
    _last_network_time = time.time()
    _cpu_init_lock = asyncio.Lock()
    
    def __init__(self):
        # 保持空的构造函数，完美兼容原路由层 SystemInfoCollector() 的瞬时调用方式
        pass
    
    async def get_basic_info(self) -> Dict[str, Any]:
        """获取基础系统信息"""
        dist_info = self._get_linux_distribution()
        
        ipv4, ipv6 = await asyncio.gather(
            self._get_public_ip_v4(),
            self._get_public_ip_v6(),
            return_exceptions=True
        )
        
        ipv4 = ipv4 if not isinstance(ipv4, Exception) else None
        ipv6 = ipv6 if not isinstance(ipv6, Exception) else None
        
        if isinstance(ipv4, Exception):
            Logger.debug(f"获取 IPv4 失败: {ipv4}", 1)
            ipv4 = None
        if isinstance(ipv6, Exception):
            Logger.debug(f"获取 IPv6 失败: {ipv6}", 1)
            ipv6 = None
        
        os_name = f"{dist_info['name']} {dist_info['version']}" if dist_info['name'] != 'Unknown' else platform.system()
        
        info = {
            "arch": platform.machine(),
            "cpu_cores": psutil.cpu_count(),
            "cpu_name": self._get_cpu_name(),
            "disk_total": await self._get_disk_total(),
            "gpu_name": "",  
            "ipv4": ipv4,
            "ipv6": ipv6,
            "mem_total": self._get_container_mem_limit(),  
            "os": os_name,
            "kernel_version": platform.release(),
            "swap_total": psutil.swap_memory().total,  
            "version": Config.AGENT_VERSION,
            "virtualization": self._get_virtualization()
        }
        
        Logger.debug(f"基础信息数据: {json.dumps(info, indent=2)}", 1)
        return info
    
    async def get_realtime_info(self) -> Dict[str, Any]:
        """获取实时监控信息"""
        cpu_usage = await self._get_cpu_usage()
        network_stats = await self._get_network_stats()
        memory_info = await self._get_memory_info()
        disk_info = await self._get_disk_info()
        try: 
            process_count = len(psutil.pids()) 
        except Exception as e: 
            process_count = 0
            Logger.debug(f"获取进程数失败：{e}", 1)
        info = {
            "cpu": {
                "usage": cpu_usage
            },
            "ram": {
                "total": memory_info["ram_total"],    
                "used": memory_info["ram_used"]       
            },
            "swap": {
                "total": memory_info["swap_total"],   
                "used": memory_info["swap_used"]      
            },
            "load": {
                "load1": round(psutil.getloadavg()[0] if hasattr(psutil, 'getloadavg') and psutil.getloadavg() else 0, 2),
                "load5": round(psutil.getloadavg()[1] if hasattr(psutil, 'getloadavg') and psutil.getloadavg() else 0, 2),
                "load15": round(psutil.getloadavg()[2] if hasattr(psutil, 'getloadavg') and psutil.getloadavg() else 0, 2)
            },
            "disk": {
                "total": disk_info["total"],          
                "used": disk_info["used"]             
            },
            "network": {
                "up": network_stats["up"],
                "down": network_stats["down"],
                "totalUp": network_stats["total_up"],
                "totalDown": network_stats["total_down"]
            },
            "connections": {
                "tcp": await self._get_tcp_connections(),
                "udp": await self._get_udp_connections()
            },
            "uptime": int(time.time() - psutil.boot_time()),
            "process": process_count,
            "message": ""
        }
        
        Logger.debug(f"实时监控数据: {json.dumps(info, indent=2)}", 2)
        return info
    
    def _get_cpu_name(self) -> str:
        """获取 CPU 名称"""
        try:
            if platform.system() == "Windows":
                import winreg
                key = winreg.OpenKey(winreg.HKEY_LOCAL_MACHINE, r"HARDWARE\DESCRIPTION\System\CentralProcessor\0")
                cpu_name = winreg.QueryValueEx(key, "ProcessorNameString")[0]
                winreg.CloseKey(key)
                return cpu_name.strip()
            else:
                with open('/proc/cpuinfo', 'r') as f:
                    for line in f:
                        if line.strip().startswith('model name'):
                            return line.split(':')[1].strip()
        except Exception as e:
            Logger.debug(f"获取CPU名称失败: {e}", 1)
        return "Unknown CPU"
    
    async def _get_cpu_usage(self) -> float:
        """🌟 升级：获取 CPU 使用率 (通过手动计算 cpu_times 差值，百分百规避缓存失效与生命周期问题)"""
        try:
            current_times = psutil.cpu_times()
            
            async with SystemInfoCollector._cpu_init_lock:
                if SystemInfoCollector._last_cpu_times is None:
                    # 第一次冷启动：建立初始快照基准
                    SystemInfoCollector._last_cpu_times = current_times
                    # 微阻塞 0.1 秒提供初次请求的有效值，防止控制端面板第一次加载刷出 0
                    await asyncio.sleep(0.1)
                    current_times = psutil.cpu_times()
                
                last_times = SystemInfoCollector._last_cpu_times
                SystemInfoCollector._last_cpu_times = current_times
            
            # 计算系统总时间差 (所有 CPU 状态时间片求和)
            delta_total = sum(current_times) - sum(last_times)
            # 计算纯空闲时间差
            delta_idle = current_times.idle - last_times.idle
            
            if delta_total <= 0:
                return 0.0
                
            # CPU 使用率 = (总运行时间 - 空闲时间) / 总运行时间 * 100
            usage = ((delta_total - delta_idle) / delta_total) * 100
            return round(max(0.0, min(100.0, usage)), 2)
        except Exception as e:
            Logger.debug(f"获取CPU使用率失败: {e}", 2)
            return 0.0
    
    def _get_container_mem_limit(self) -> int:
        """获取容器内存限制（字节），兼容 cgroup v1/v2，无限制时回退 psutil"""
        try:
            if os.path.exists("/sys/fs/cgroup/memory.max"):
                with open("/sys/fs/cgroup/memory.max", "r") as f:
                    val = f.read().strip()
                    if val != "max": return int(val)
        except (OSError, ValueError): pass
        try:
            if os.path.exists("/sys/fs/cgroup/memory/memory.limit_in_bytes"):
                with open("/sys/fs/cgroup/memory/memory.limit_in_bytes", "r") as f:
                    val = int(f.read().strip())
                    if val < 9223372036854771712: return val
        except (OSError, ValueError): pass
        return psutil.virtual_memory().total

    def _get_container_mem_usage(self) -> int:
        """获取容器当前内存使用量（字节），严格排除 Cache 缓存"""
        if os.path.exists("/sys/fs/cgroup/memory.current") and os.path.exists("/sys/fs/cgroup/memory.stat"):
            try:
                with open("/sys/fs/cgroup/memory.current", "r") as f:
                    current_raw = int(f.read().strip())
                file_cache = 0
                with open("/sys/fs/cgroup/memory.stat", "r") as f:
                    for line in f:
                        parts = line.strip().split()
                        if len(parts) == 2 and parts[0] == "file":
                            file_cache = int(parts[1])
                            break
                return max(0, current_raw - file_cache)
            except (OSError, ValueError): pass
        if os.path.exists("/sys/fs/cgroup/memory/memory.usage_in_bytes") and os.path.exists("/sys/fs/cgroup/memory/memory.stat"):
            try:
                with open("/sys/fs/cgroup/memory/memory.usage_in_bytes", "r") as f:
                    current_raw = int(f.read().strip())
                cache = 0
                with open("/sys/fs/cgroup/memory/memory.stat", "r") as f:
                    for line in f:
                        parts = line.strip().split()
                        if len(parts) == 2 and parts[0] == "cache":
                            cache = int(parts[1])
                            break
                return max(0, current_raw - cache)
            except (OSError, ValueError): pass
        return psutil.virtual_memory().used

    async def _get_memory_info(self) -> Dict[str, int]:
        """获取内存信息（字节单位）"""
        try:
            ram_total = self._get_container_mem_limit()
            ram_used = self._get_container_mem_usage()
            swap = psutil.swap_memory()
            return {
                "ram_total": ram_total,
                "ram_used": ram_used,
                "swap_total": swap.total,
                "swap_used": swap.used
            }
        except Exception as e:
            Logger.debug(f"获取内存信息失败: {e}", 2)
            return {"ram_total": 0, "ram_used": 0, "swap_total": 0, "swap_used": 0}
    
    def _get_physical_disk_device(self, device_path: str) -> Optional[str]:
        if platform.system() != "Linux":
            return device_path
        import re
        dev_name = device_path.replace("/dev/", "")
        if not dev_name: return None
        if re.match(r'^[a-zA-Z0-9\.\-_]+:', dev_name) or dev_name.startswith('//'):
            return device_path
        DEVICE_PATTERNS = [
            r'^(md[0-9]+)$',
            r'^(sd[a-z]+)\d*$',
            r'^(vd[a-z]+)\d*$',
            r'^(xvd[a-z]+)\d*$',
            r'^(mmcblk\d+)p?\d*$',
            r'^(nvme\d+n\d+)p?\d*$',
        ]
        for pattern in DEVICE_PATTERNS:
            m = re.match(pattern, dev_name)
            if m: return f"/dev/{m.group(1)}"
        if not re.search(r'\d', dev_name): return device_path
        sys_block_path = f"/sys/block/{dev_name}"
        if os.path.exists(sys_block_path):
            real_parent = os.path.realpath(os.path.dirname(sys_block_path))
            real_path = os.path.realpath(sys_block_path)
            if not os.path.isdir(real_path):
                real_grandparent = os.path.dirname(real_parent)
                if real_grandparent.endswith('/sys/block'):
                    physical_name = os.path.basename(real_parent)
                    if self._is_physical_disk(f"/dev/{physical_name}"):
                        return f"/dev/{physical_name}"
        return None

    def _get_container_disk_info(self) -> Dict[str, int]:
        try:
            usage = psutil.disk_usage('/')
            return {"total": int(usage.total), "used": int(usage.used)}
        except Exception as e:
            Logger.debug(f"[容器模式] 获取磁盘信息失败: {e}", 5)
            return {"total": 0, "used": 0}
    
    async def _get_host_disk_info(self) -> Dict[str, int]:
        try:
            total_bytes = 0
            used_bytes = 0
            seen_physical_devices = set()
            partitions = psutil.disk_partitions(all=True)
            for partition in partitions:
                device = partition.device
                mountpoint = partition.mountpoint
                fstype = partition.fstype
                if fstype in {'tmpfs', 'devtmpfs', 'overlay', 'squashfs', 'proc', 'sysfs', 'debugfs', 'configfs', 'cgroup', 'cgroup2', 'pstore', 'bpf', 'tracefs', 'securityfs', 'efivarfs'}:
                    continue
                physical_device = self._get_physical_disk_device(device)
                if not physical_device or physical_device in seen_physical_devices:
                    continue
                if not self._is_physical_disk(physical_device):
                    continue
                try:
                    usage = psutil.disk_usage(mountpoint)
                    total_bytes += usage.total
                    used_bytes += usage.used
                    seen_physical_devices.add(physical_device)
                except (PermissionError, OSError):
                    continue
            return {"total": total_bytes, "used": used_bytes}
        except Exception as e:
            Logger.debug(f"获取磁盘信息失败: {e}", 5)
            return {"total": 0, "used": 0}

    async def _get_disk_info(self) -> Dict[str, int]:
        if self._get_virtualization() in ['Docker', 'Lxc', 'Podman']:
            return self._get_container_disk_info()
        return await self._get_host_disk_info()

    async def _get_disk_total(self) -> int:
        disk_info = await self._get_disk_info()
        return disk_info["total"]
    
    def _is_physical_disk(self, device: str) -> bool:
        if platform.system() == "Windows":
            return any(device.lower().startswith(drive) for drive in ['c:', 'd:', 'e:', 'f:', 'g:', 'h:'])
        import re
        if re.match(r'^[a-zA-Z0-9\.\-_]+:', device) or device.startswith('//'):
            return True
        physical_patterns = [
            r'^/dev/sd[a-z]+$', r'^/dev/vd[a-z]+$', r'^/dev/xvd[a-z]+$',
            r'^/dev/nvme[0-9]+n[0-9]+$', r'^/dev/mmcblk[0-9]+$',
            r'^/dev/md[0-9]+$', r'^zroot/.*$',
        ]
        return any(re.match(pattern, device) for pattern in physical_patterns)
    
    async def _get_network_stats(self) -> Dict[str, int]:
        """🌟 升级：按网卡获取网络统计（通过类变量维持上一秒的状态快照）"""
        try:
            net_io = psutil.net_io_counters(pernic=True)
            current_time = time.time()
            
            total_current_rx = 0
            total_current_tx = 0
            exclude_patterns = ['lo', 'docker', 'veth', 'br-', 'tun', 'virbr']
            
            for interface, stats in net_io.items():
                if any(pattern in interface for pattern in exclude_patterns):
                    continue
                total_current_rx += stats.bytes_recv
                total_current_tx += stats.bytes_sent
            
            # 第一轮请求初始化
            if SystemInfoCollector._last_network_stats['rx'] == 0:
                SystemInfoCollector._total_network_down = total_current_rx
                SystemInfoCollector._total_network_up = total_current_tx
                SystemInfoCollector._last_network_stats = {'rx': total_current_rx, 'tx': total_current_tx}
                SystemInfoCollector._last_network_time = current_time
                return {
                    "up": 0, "down": 0,
                    "total_up": SystemInfoCollector._total_network_up,
                    "total_down": SystemInfoCollector._total_network_down
                }
            
            # 跨请求计算瞬时速率
            time_diff = current_time - SystemInfoCollector._last_network_time
            up_speed = 0
            down_speed = 0
            if time_diff > 0:
                down_speed = (total_current_rx - SystemInfoCollector._last_network_stats['rx']) / time_diff
                up_speed = (total_current_tx - SystemInfoCollector._last_network_stats['tx']) / time_diff
                down_speed = max(0, down_speed)
                up_speed = max(0, up_speed)
                
                SystemInfoCollector._total_network_down = total_current_rx
                SystemInfoCollector._total_network_up = total_current_tx
            
            SystemInfoCollector._last_network_stats = {'rx': total_current_rx, 'tx': total_current_tx}
            SystemInfoCollector._last_network_time = current_time
            
            return {
                "up": int(up_speed),
                "down": int(down_speed),
                "total_up": SystemInfoCollector._total_network_up,
                "total_down": SystemInfoCollector._total_network_down
            }
        except Exception as e:
            Logger.debug(f"psutil 按网卡统计失败: {e}", 4)
            return {"up": 0, "down": 0, "total_up": 0, "total_down": 0}
    
    async def _get_tcp_connections(self) -> int:
        try:
            if platform.system() == "Windows":
                result = subprocess.run(['netstat', '-n', '-p', 'tcp'], capture_output=True, text=True, timeout=5)
                return len([line for line in result.stdout.split('\n') if 'ESTABLISHED' in line])
            connections = psutil.net_connections(kind='tcp')
            return len([conn for conn in connections if conn.status == 'ESTABLISHED'])
        except Exception as e:
            Logger.debug(f"获取TCP连接数失败: {e}", 2)
            return 0
    
    async def _get_udp_connections(self) -> int:
        try:
            if platform.system() == "Windows":
                result = subprocess.run(['netstat', '-n', '-p', 'udp'], capture_output=True, text=True, timeout=5)
                return len([line for line in result.stdout.split('\n') if 'UDP' in line and line.strip()])
            return len(psutil.net_connections(kind='udp'))
        except Exception as e:
            Logger.debug(f"获取UDP连接数失败: {e}", 2)
            return 0
    
    def _get_linux_distribution(self) -> Dict[str, str]:
        try:
            if platform.system() == "Linux" and os.path.exists('/etc/os-release'):
                with open('/etc/os-release', 'r') as f: content = f.read()
                name, version = 'Unknown', 'Unknown'
                for line in content.split('\n'):
                    if line.startswith('ID='): name = line.replace('ID=', '').replace('"', '').strip()
                    elif line.startswith('VERSION_ID='): version = line.replace('VERSION_ID=', '').replace('"', '').strip()
                return {'name': name, 'version': version}
        except Exception: pass
        return {'name': 'Unknown', 'version': 'Unknown'}
    
    def _get_virtualization(self) -> str:
        def try_read(p: str) -> str:
            """安全读取文件内容, 不存在的路径/读取失败一律返回空串, 不做 ERROR 报错"""
            try:
                if os.path.exists(p):
                    with open(p, 'r', encoding='utf-8', errors='ignore') as f:
                        return f.read()
            except Exception:
                pass
            return ""

        if platform.system() != "Linux":
            return 'None'
        try:
            if os.path.exists('//.dockerenv'): return 'Docker'
            if os.path.exists('/run/.containerenv'): return 'Podman'

            content = try_read('/proc/1/cgroup').lower()
            if 'docker' in content or 'containerd' in content: return 'Docker'
            elif 'kubepods' in content: return 'Kubernetes'
            elif 'lxc' in content: return 'LXC'

            content = try_read('/proc/self/mountinfo')
            if '/docker/containers/' in content or 'workdir=/var/lib/docker' in content: return 'Docker'
            elif '/pods/' in content or 'kubelet' in content: return 'Kubernetes'

            if 'container=lxc' in try_read('/proc/1/environ'): return 'LXC'

            content = try_read('/proc/cpuinfo')
            if 'QEMU' in content or 'KVM' in content: return 'QEMU'
        except Exception as e:
            Logger.debug(f"获取虚拟化信息失败(非致命): {e}", 1)
        return 'None'
    
    async def _get_public_ip_v4(self) -> Optional[str]:
        services = ['https://api.ipify.org', 'https://icanhazip.com', 'https://checkip.amazonaws.com', 'https://ifconfig.me/ip']
        for service in services:
            try:
                ip = await self._fetch_ip(service)
                if ip and self._is_valid_ipv4(ip): return ip
            except Exception: continue
        return None
    
    async def _get_public_ip_v6(self) -> Optional[str]:
        services = ['https://api6.ipify.org', 'https://icanhazip.com']
        for service in services:
            try:
                ip = await self._fetch_ip(service)
                if ip and self._is_valid_ipv6(ip): return ip
            except Exception: continue
        return None
    
    async def _fetch_ip(self, url: str) -> str:
        timeout = aiohttp.ClientTimeout(total=5)
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(url, headers={'user-agent': Config.AGENT_VERSION}) as response:
                if response.status == 200: return (await response.text()).strip()
                raise Exception(f"HTTP {response.status}")
    
    def _is_valid_ipv4(self, ip: str) -> bool:
        try:
            socket.inet_pton(socket.AF_INET, ip)
            return True
        except socket.error: return False
    
    def _is_valid_ipv6(self, ip: str) -> bool:
        try:
            socket.inet_pton(socket.AF_INET6, ip)
            return True
        except socket.error: return False
# ============================================================================
# 📁 文件模块: FileManager 类 (面向对象封装)
# ============================================================================

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
    """
    文件管理器 - 封装所有文件/目录操作
    安全特性: 路径校验、权限检查、审计日志、分块上传
    """
    
    def __init__(self, root: str, max_upload: int = 104857600, 
                 chunk_size: int = 20971520, audit: bool = True):
        """
        :param root: 文件操作根目录 (限制访问范围)
        :param max_upload: 单文件上传大小限制 (字节)
        :param chunk_size: 分块上传阈值 (默认 20MB)
        :param audit: 是否启用审计日志
        """
        self.root = Path(root).resolve()
        self.max_upload = max_upload
        self.chunk_size = chunk_size  # 20MB 阈值
        self.audit = audit
        self.chunk_dir = self.root / ".proxy_chunks"  # 临时分块目录
        self.chunk_dir.mkdir(exist_ok=True)
    
    # ================= 内部工具方法 =================
    
    def _audit(self, action: str, path: str, result: str, meta: dict = None):
        """审计日志"""
        if self.audit:
            entry = {
                "ts": datetime.utcnow().isoformat(),
                "action": action,
                "path": path,
                "result": result,
                **(meta or {})
            }
            if os.getenv("DEBUG", "false").lower() == "true":
                Logger.debug(f"📝 [AUDIT] {json.dumps(entry, ensure_ascii=False)}")
    
    def _safe_path(self, user_path: str) -> Path:
        """路径安全校验 + 标准化 (防路径遍历)"""
        user_path = (user_path or ".").strip()
        target = Path(user_path)
        
        # 转为绝对路径
        if not target.is_absolute():
            target = self.root / target
        target = target.resolve()
        
        # 安全检查: 必须在 root 内
        try:
            target.relative_to(self.root)
        except ValueError:
            raise HTTPException(
                status_code=403,
                detail=f"Access denied: '{user_path}' outside root '{self.root}'"
            )
        return target
    
    def _format_info(self, path: Path) -> dict:
        """格式化文件信息"""
        try:
            st = path.lstat() if path.is_symlink() else path.stat()
            return {
                "name": path.name,
                "path": str(path.relative_to(self.root)),
                "type": "directory" if path.is_dir() else "symlink" if path.is_symlink() else "file",
                "size": st.st_size,
                "mtime": datetime.fromtimestamp(st.st_mtime).isoformat(),
                "mode": stat.filemode(st.st_mode),
                "mode_octal": oct(stat.S_IMODE(st.st_mode)),
                "owner": f"{st.st_uid}:{st.st_gid}"
            }
        except Exception as e:
            return {"name": path.name, "path": str(path), "error": str(e)}
    
    # ================= 核心功能方法 =================
    
    def list_files(self, base_path: str, recursive: bool = False) -> dict:
        """列出文件/目录"""
        target = self._safe_path(base_path)
        if not target.exists():
            raise HTTPException(404, f"Not found: {base_path}")
        if not target.is_dir():
            raise HTTPException(400, f"Not a directory: {base_path}")
        
        files = []
        try:
            items = target.rglob("*") if recursive else target.iterdir()
            for item in items:
                if not recursive and item.parent != target:
                    continue
                files.append(self._format_info(item))
        except PermissionError:
            raise HTTPException(403, f"Permission denied: {base_path}")
        
        files.sort(key=lambda x: (x.get("type") != "directory", x.get("name", "").lower()))
        self._audit("list", base_path, "ok", {"count": len(files)})
        return {"status": "ok", "count": len(files), "files": files}
    
    def get_authority(self, paths: List[str]) -> dict:
        """批量查询文件权限"""
        results = []
        for p in paths:
            try:
                target = self._safe_path(p)
                if not target.exists():
                    results.append({"path": p, "error": "Not found"})
                    continue
                info = self._format_info(target)
                results.append({
                    "path": info["path"],
                    "name": info["name"],
                    "mode": info.get("mode"),
                    "mode_octal": info.get("mode_octal"),
                    "type": info.get("type"),
                    "readable": os.access(target, os.R_OK),
                    "writable": os.access(target, os.W_OK),
                    "executable": os.access(target, os.X_OK)
                })
            except HTTPException as e:
                results.append({"path": p, "error": str(e.detail)})
            except Exception as e:
                results.append({"path": p, "error": str(e)})
        
        self._audit("authority", str(paths), "ok", {"queried": len(paths)})
        return {"status": "ok", "files": results}
    
    def cat_file(self, file_path: str, max_size: int = 1048576) -> dict:
        """查看文件文本内容 (限制大小防大文件)"""
        target = self._safe_path(file_path)
        if not target.exists():
            raise HTTPException(404, f"Not found: {file_path}")
        if not target.is_file():
            raise HTTPException(400, f"Not a file: {file_path}")
        if target.stat().st_size > max_size:
            raise HTTPException(413, f"File too large for cat (>1MB): {file_path}")
        
        try:
            # 尝试 UTF-8 解码，失败则返回 Base64
            content = target.read_text(encoding='utf-8', errors='replace')
            encoding = "utf-8"
            is_binary = False
        except:
            content = base64.b64encode(target.read_bytes()).decode()
            encoding = "base64"
            is_binary = True
        
        self._audit("cat", file_path, "ok", {"size": target.stat().st_size, "encoding": encoding})
        return {
            "status": "ok",
            "path": str(target.relative_to(self.root)),
            "content": content,
            "encoding": encoding,
            "is_binary": is_binary,
            "size": target.stat().st_size
        }
    
    def upload_file(self, file_content: bytes, target_path: str, 
                filename: str = None, chunk_id: int = None,
                total_chunks: int = None) -> dict:
        """
        上传文件 (支持分块)
        :param chunk_id: 分块索引 (0~N-1), None 表示完整上传
        :param total_chunks: 总分块数
        """
        target = self._safe_path(target_path)
        if target.is_dir():
            if not filename:
                raise HTTPException(400, "filename required for directory upload")
            target = target / filename
        
        # 完整上传模式的大小检查
        if len(file_content) > self.max_upload and chunk_id is None:
            raise HTTPException(413, f"File too large: use chunked upload")
        
        try:
            target.parent.mkdir(parents=True, exist_ok=True)
            
            if chunk_id is not None and total_chunks is not None:
                # 【优化1】将路径扁平化并哈希，防止子目录导致的 FileNotFoundError
                safe_prefix = hashlib.md5(target.as_posix().encode()).hexdigest()
                
                # 确保临时分块目录存在
                self.chunk_dir.mkdir(parents=True, exist_ok=True)
                chunk_file = self.chunk_dir / f"{safe_prefix}.chunk.{chunk_id}"
                
                with open(chunk_file, 'wb') as f:
                    f.write(file_content)
                
                # 检查是否所有分块已到达
                received = list(self.chunk_dir.glob(f"{safe_prefix}.chunk.*"))
                if len(received) == total_chunks:
                    # 【优化2】防并发冲突：通过创建锁文件来确保只有一个请求能执行合并
                    lock_file = self.chunk_dir / f"{safe_prefix}.lock"
                    try:
                        # 尝试独占创建锁文件 (如果文件已存在会抛出 FileExistsError)
                        with open(lock_file, 'x'):
                            pass
                    except FileExistsError:
                        # 锁已存在，说明其他线程正在合并，当前线程直接返回 pending
                        return {"status": "pending", "received": len(received), "total": total_chunks, "msg": "merging in progress"}

                    try:
                        # 开始安全合并
                        with open(target, 'wb') as outf:
                            for i in range(total_chunks):
                                cf = self.chunk_dir / f"{safe_prefix}.chunk.{i}"
                                with open(cf, 'rb') as inf:
                                    outf.write(inf.read())
                                cf.unlink()  # 清理临时分块
                                
                        self._audit("upload_chunked", str(target), "merged", 
                                   {"chunks": total_chunks, "size": target.stat().st_size})
                        return {"status": "ok", "path": str(target.relative_to(self.root)), "chunked": True}
                    finally:
                        # 确保合并完成后清理锁文件
                        if lock_file.exists():
                            lock_file.unlink()
                else:
                    return {"status": "pending", "received": len(received), "total": total_chunks}
                    
            else:
                # 完整上传模式
                with open(target, 'wb') as f:
                    f.write(file_content)
                self._audit("upload", str(target), "ok", {"size": len(file_content)})
                return {"status": "ok", "path": str(target.relative_to(self.root))}
                
        except PermissionError:
            raise HTTPException(403, "Permission denied")
        except Exception as e:
            raise HTTPException(500, f"Upload failed: {e}")
    
    def download_file(self, file_path: str) -> tuple:
        """准备下载: 返回 (Path, MIME类型, 大小)"""
        target = self._safe_path(file_path)
        if not target.exists():
            raise HTTPException(404, f"Not found: {file_path}")
        if not target.is_file():
            raise HTTPException(400, f"Not a file: {file_path}")
        
        mime, _ = mimetypes.guess_type(str(target))
        self._audit("download", str(target), "ok", {"size": target.stat().st_size})
        return target, mime or "application/octet-stream", target.stat().st_size
    
    def delete_paths(self, paths: List[str]) -> dict:
        """批量删除文件/目录"""
        results = []
        for p in paths:
            try:
                target = self._safe_path(p)
                if not target.exists():
                    results.append({"path": p, "status": "not_found"})
                    continue
                if target.is_dir():
                    shutil.rmtree(target)
                else:
                    target.unlink()
                results.append({"path": p, "status": "deleted"})
                self._audit("delete", p, "ok")
            except HTTPException as e:
                results.append({"path": p, "status": "error", "error": str(e.detail)})
            except Exception as e:
                results.append({"path": p, "status": "error", "error": str(e)})
        
        return {"status": "ok", "results": results}
    
    # 在 FileManager 类中添加:

    def move_paths(self, move_map: Dict[str, str]) -> dict:
        """
        批量移动/重命名文件/目录
        :param move_map: {"src_path1": "dst_path1", "src_path2": "dst_path2", ...}
        :return: {"status": "ok", "results": [{"from": "...", "to": "...", "status": "ok/error"}]}
        """
        results = []
        
        for src, dst in move_map.items():
            try:
                src_path = self._safe_path(src)
                dst_path = self._safe_path(dst)
                
                if not src_path.exists():
                    results.append({"from": src, "to": dst, "status": "error", "error": "Source not found"})
                    continue
                if dst_path.exists():
                    results.append({"from": src, "to": dst, "status": "error", "error": "Destination exists"})
                    continue
                
                # 确保目标父目录存在
                dst_path.parent.mkdir(parents=True, exist_ok=True)
                shutil.move(str(src_path), str(dst_path))
                
                results.append({
                    "from": str(src_path.relative_to(self.root)),
                    "to": str(dst_path.relative_to(self.root)),
                    "status": "ok"
                })
                self._audit("move_batch", f"{src} -> {dst}", "ok")
                
            except HTTPException as e:
                results.append({"from": src, "to": dst, "status": "error", "error": str(e.detail)})
            except Exception as e:
                results.append({"from": src, "to": dst, "status": "error", "error": str(e)})
        
        success_count = sum(1 for r in results if r["status"] == "ok")
        self._audit("move_batch", str(list(move_map.keys())), "completed", 
                   {"total": len(move_map), "success": success_count})
        
        return {
            "status": "ok" if success_count > 0 else "failed",
            "total": len(move_map),
            "success": success_count,
            "results": results
        }
    # 在 FileManager 类中添加:
    def copy_paths(self, copy_map: Dict[str, str]) -> dict:
        """
        批量复制文件/目录
        :param copy_map: {"src_path1": "dst_path1", "src_path2": "dst_path2", ...}
        :return: {"status": "ok", "results": [{"from": "...", "to": "...", "status": "ok/error"}]}
        """
        results = []
        
        for src, dst in copy_map.items():
            try:
                src_path = self._safe_path(src)
                dst_path = self._safe_path(dst)
                
                if not src_path.exists():
                    results.append({"from": src, "to": dst, "status": "error", "error": "Source not found"})
                    continue
                
                # 如果目标是目录，则复制到该目录下 (保持原文件名)
                if dst_path.is_dir():
                    dst_path = dst_path / src_path.name
                
                # 目标已存在则跳过 (与 move_paths 保持一致的保守策略)
                if dst_path.exists():
                    results.append({"from": src, "to": dst, "status": "error", "error": "Destination exists"})
                    continue
                
                # 确保目标父目录存在
                dst_path.parent.mkdir(parents=True, exist_ok=True)
                
                # 执行复制: 文件用 copy2 (保留元数据), 目录用 copytree
                if src_path.is_file():
                    shutil.copy2(str(src_path), str(dst_path))
                else:
                    shutil.copytree(str(src_path), str(dst_path))
                
                results.append({
                    "from": str(src_path.relative_to(self.root)),
                    "to": str(dst_path.relative_to(self.root)),
                    "status": "ok"
                })
                self._audit("copy_batch", f"{src} -> {dst}", "ok")
                
            except HTTPException as e:
                results.append({"from": src, "to": dst, "status": "error", "error": str(e.detail)})
            except Exception as e:
                results.append({"from": src, "to": dst, "status": "error", "error": str(e)})
        
        success_count = sum(1 for r in results if r["status"] == "ok")
        self._audit("copy_batch", str(list(copy_map.keys())), "completed", 
                   {"total": len(copy_map), "success": success_count})
        
        return {
            "status": "ok" if success_count > 0 else "failed",
            "total": len(copy_map),
            "success": success_count,
            "results": results
        }

    def _parse_mode(self, mode_str: str) -> int:
        """
        解析权限模式字符串为 octal int
        支持: "755", "0755", "rwxr-xr-x", "u+x", "a-w"
        """
        mode_str = mode_str.strip()
        
        # 1. 纯数字模式 (八进制)
        if mode_str.isdigit() or (mode_str.startswith('0') and mode_str[1:].isdigit()):
            return int(mode_str, 8)
        
        # 2. 符号模式 (rwxr-xr-x)
        if len(mode_str) == 9 and all(c in 'rwxStT-' for c in mode_str):
            mode = 0
            perm_map = {'r': 4, 'w': 2, 'x': 1, 'S': 0, 's': 1, 'T': 0, 't': 1, '-': 0}
            for i, c in enumerate(mode_str):
                if c in perm_map:
                    shift = 2 - (i % 3)
                    mode |= perm_map[c] << (6 - i // 3 * 3 + shift)
            return mode
        
        # 3. 符号操作模式 (u+x, g-w, o=r, a+rwx)
        if any(op in mode_str for op in ['=', '+', '-']) and any(who in mode_str for who in ['u', 'g', 'o', 'a']):
            # 简化实现: 先获取当前权限，再应用操作
            # 生产环境建议使用 `stat` 模块完整解析
            raise ValueError(f"Symbolic mode '{mode_str}' not fully supported yet, use octal like '755'")
        
        raise ValueError(f"Invalid mode format: '{mode_str}'. Use '755', '0644', or 'rwxr-xr-x'")

    def set_authority(self, perm_map: Dict[str, str], recursive: bool = False) -> dict:
        """
        批量设置文件/目录权限
        :param perm_map: {"path1": "755", "path2": "644", ...}
        :param recursive: 是否递归应用到子目录
        :return: {"status": "ok", "results": [{"path": "...", "mode": "755", "status": "ok/error"}]}
        """
        results = []
        
        for path, mode_str in perm_map.items():
            try:
                target = self._safe_path(path)
                if not target.exists():
                    results.append({"path": path, "status": "error", "error": "Not found"})
                    continue
                
                # 解析权限模式
                mode = self._parse_mode(mode_str)
                
                # 设置权限
                if recursive and target.is_dir():
                    for root, dirs, files in os.walk(target):
                        os.chmod(root, mode)
                        for d in dirs:
                            os.chmod(os.path.join(root, d), mode)
                        for f in files:
                            os.chmod(os.path.join(root, f), mode)
                else:
                    os.chmod(target, mode)
                
                # 获取设置后的实际权限
                new_mode = stat.filemode(target.stat().st_mode)
                results.append({
                    "path": str(target.relative_to(self.root)),
                    "requested": mode_str,
                    "applied": new_mode,
                    "mode_octal": oct(stat.S_IMODE(target.stat().st_mode)),
                    "status": "ok"
                })
                self._audit("chmod", path, "ok", {"mode": mode_str, "recursive": recursive})
                
            except HTTPException as e:
                results.append({"path": path, "status": "error", "error": str(e.detail)})
            except ValueError as e:
                results.append({"path": path, "status": "error", "error": str(e)})
            except PermissionError:
                results.append({"path": path, "status": "error", "error": "Permission denied"})
            except Exception as e:
                results.append({"path": path, "status": "error", "error": f"{type(e).__name__}: {e}"})
        
        success_count = sum(1 for r in results if r["status"] == "ok")
        return {
            "status": "ok" if success_count > 0 else "failed",
            "total": len(perm_map),
            "success": success_count,
            "results": results
        }
    def create_directory(self, dir_path: str) -> dict:
        """新建目录"""
        target = self._safe_path(dir_path)
        if target.exists():
            raise HTTPException(409, f"Exists: {dir_path}")
        
        try:
            target.mkdir(parents=True)
            self._audit("mkdir", str(target), "ok")
            return {"status": "ok", "path": str(target.relative_to(self.root))}
        except Exception as e:
            raise HTTPException(500, f"Mkdir failed: {e}")
# ==================== 1. 解耦的 Noise 加密封装类 ====================
class NoiseSessionWrapper:
    """
    Noise Protocol 封装类 (黑盒状态机)
    业务层无需关心底层的握手细节，直接调用对应方法即可。
    """
    def __init__(self, is_initiator: bool, local_priv_b64: str, expected_remote_pub_b64: str = None):
        # 使用你指定的 XX 模式
        self.noise = NoiseConnection.from_name(b"Noise_XX_25519_ChaChaPoly_BLAKE2s")
        
        # 服务端是被动响应方 (Responder)，客户端是主动发起方 (Initiator)
        if is_initiator:
            self.noise.set_as_initiator()
        else:
            self.noise.set_as_responder()

        # 配置本地私钥 (32 bytes Raw)
        if local_priv_b64:
            priv_bytes = base64.b64decode(local_priv_b64)
            self.noise.set_keypair_from_private_bytes(Keypair.STATIC, priv_bytes)

        if expected_remote_pub_b64:
            pub_bytes = base64.b64decode(expected_remote_pub_b64)
            # This tells the library: "I expect the remote party to have this static key"
            # It will automatically fail the handshake if it doesn't match.
            self.noise.set_keypair_from_public_bytes(Keypair.REMOTE_STATIC, pub_bytes)
        
        # 可选：设置序言，防止跨协议重放攻击
        self.noise.set_prologue(b"kisama_terminal_v1")
        self.noise.start_handshake()

    @property
    def is_established(self) -> bool:
        return self.noise.handshake_finished

    def process_handshake(self, payload: bytes) -> bytes:
        """
        处理握手包。
        传入收到的 payload，返回需要发送给对方的回包。
        如果返回空 bytes (b'')，说明不需要回包。
        """
        if payload:
            self.noise.read_message(payload)
            
        if not self.noise.handshake_finished:
            # 必须写出回包
            return self.noise.write_message(b'')
        else:
            # 握手完成，验证客户端身份 (XX 模式下，客户端会在最后一步发来它的公钥)
            return b''

    def encrypt(self, plaintext: bytes) -> bytes:
        if not self.is_established:
            raise RuntimeError("握手未完成，无法加密数据")
        return self.noise.encrypt(plaintext)

    def decrypt(self, ciphertext: bytes) -> bytes:
        if not self.is_established:
            raise RuntimeError("握手未完成，无法解密数据")
        return self.noise.decrypt(ciphertext)


# ============================================================================
# 1.5 Windows 终端后端 (ConPTY 伪控制台 + 旧系统管道回退)
# ============================================================================
# 与 Go 版 go/handlers/terminal_windows.go 行为对齐:
#   - 运行时探测 kernel32 的 ConPTY 函数是否导出 (等价 Go conpty.IsConPtyAvailable)，
#     可用则使用 ConPTY (真实终端语义: 提示符/CRLF/光标与 Unix PTY 对齐)；
#   - 不可用 (Windows < 10.0.17763/1809) 回退管道实现 (无真实终端, resize 为 no-op)。
# 后端接口对齐 Go terminalSession: start/set_size/read/write/close/kill_tree/pid。
_IS_WINDOWS = (os.name == 'nt')

if _IS_WINDOWS:
    import ctypes
    import msvcrt
    from ctypes import wintypes

    _PROC_THREAD_ATTRIBUTE_PSEUDOCONSOLE = 0x00020016
    _EXTENDED_STARTUPINFO_PRESENT = 0x00080000
    _CREATE_UNICODE_ENVIRONMENT = 0x00000400
    _CREATE_NO_WINDOW_FLAG = getattr(subprocess, 'CREATE_NO_WINDOW', 0)
    _STARTF_USESTDHANDLES = 0x00000100

    class _COORD(ctypes.Structure):
        _fields_ = [("X", ctypes.c_short), ("Y", ctypes.c_short)]

    class _PROCESS_INFORMATION(ctypes.Structure):
        _fields_ = [
            ("hProcess", wintypes.HANDLE),
            ("hThread", wintypes.HANDLE),
            ("dwProcessId", wintypes.DWORD),
            ("dwThreadId", wintypes.DWORD),
        ]

    class _STARTUPINFOEX(ctypes.Structure):
        _fields_ = [
            ("cb", wintypes.DWORD),
            ("lpReserved", wintypes.LPWSTR),
            ("lpDesktop", wintypes.LPWSTR),
            ("lpTitle", wintypes.LPWSTR),
            ("dwX", wintypes.DWORD),
            ("dwY", wintypes.DWORD),
            ("dwXSize", wintypes.DWORD),
            ("dwYSize", wintypes.DWORD),
            ("dwXCountChars", wintypes.DWORD),
            ("dwYCountChars", wintypes.DWORD),
            ("dwFillAttribute", wintypes.DWORD),
            ("dwFlags", wintypes.DWORD),
            ("wShowWindow", wintypes.WORD),
            ("cbReserved2", wintypes.WORD),
            ("lpReserved2", ctypes.c_void_p),
            ("hStdInput", wintypes.HANDLE),
            ("hStdOutput", wintypes.HANDLE),
            ("hStdError", wintypes.HANDLE),
            ("lpAttributeList", ctypes.c_void_p),
        ]

    def _probe_conpty():
        """探测 kernel32 是否导出全部 ConPTY 所需函数 (等价 Go conpty.IsConPtyAvailable)"""
        try:
            k = ctypes.WinDLL('kernel32', use_last_error=True)
        except Exception:
            return None
        for name in ('CreatePseudoConsole', 'ResizePseudoConsole', 'ClosePseudoConsole',
                     'InitializeProcThreadAttributeList', 'UpdateProcThreadAttribute'):
            if not hasattr(k, name):
                return None
        # 绑定函数签名，避免 64 位下句柄/指针被默认按 32 位 int 截断
        k.CreatePseudoConsole.restype = ctypes.c_long  # HRESULT
        k.CreatePseudoConsole.argtypes = [_COORD, wintypes.HANDLE, wintypes.HANDLE,
                                          wintypes.DWORD, ctypes.POINTER(wintypes.HANDLE)]
        k.ResizePseudoConsole.restype = ctypes.c_long
        k.ResizePseudoConsole.argtypes = [wintypes.HANDLE, _COORD]
        k.ClosePseudoConsole.restype = None
        k.ClosePseudoConsole.argtypes = [wintypes.HANDLE]
        k.InitializeProcThreadAttributeList.restype = wintypes.BOOL
        k.InitializeProcThreadAttributeList.argtypes = [ctypes.c_void_p, wintypes.DWORD,
                                                        wintypes.DWORD, ctypes.POINTER(ctypes.c_size_t)]
        k.UpdateProcThreadAttribute.restype = wintypes.BOOL
        k.UpdateProcThreadAttribute.argtypes = [ctypes.c_void_p, wintypes.DWORD, ctypes.c_void_p,
                                                ctypes.c_void_p, ctypes.c_size_t,
                                                ctypes.c_void_p, ctypes.POINTER(ctypes.c_size_t)]
        k.DeleteProcThreadAttributeList.restype = None
        k.DeleteProcThreadAttributeList.argtypes = [ctypes.c_void_p]
        k.CreateProcessW.restype = wintypes.BOOL
        k.CreateProcessW.argtypes = [wintypes.LPCWSTR, wintypes.LPWSTR,
                                     wintypes.LPVOID, wintypes.LPVOID, wintypes.BOOL,
                                     wintypes.DWORD, wintypes.LPVOID, wintypes.LPCWSTR,
                                     ctypes.POINTER(_STARTUPINFOEX),
                                     ctypes.POINTER(_PROCESS_INFORMATION)]
        k.CloseHandle.restype = wintypes.BOOL
        k.CloseHandle.argtypes = [wintypes.HANDLE]
        return k

    _KERNEL32 = _probe_conpty()

    def _windows_env_block(env: Dict[str, str]):
        """构造 CreateProcessW 需要的 UTF-16LE 双 null 结尾环境块"""
        block = "\0".join(f"{k}={v}" for k, v in env.items()) + "\0"
        return ctypes.create_unicode_buffer(block)

    def _taskkill(pid: int):
        """taskkill 强制结束整个进程树 (等价于 Unix 的进程组击杀)"""
        if not pid:
            return
        try:
            subprocess.run(['taskkill', '/F', '/T', '/PID', str(pid)],
                           creationflags=_CREATE_NO_WINDOW_FLAG,
                           stdin=subprocess.DEVNULL, stdout=subprocess.DEVNULL,
                           stderr=subprocess.DEVNULL, timeout=10)
        except Exception:
            pass

    class _ConPtyTerminal:
        """基于 Windows Pseudo Console (ConPTY) 的真实终端实现"""

        def __init__(self, shell: str, env: Dict[str, str], rows: int, cols: int, cwd: str = None):
            self.shell = shell
            self.env = env
            self.rows = rows
            self.cols = cols
            self.cwd = cwd
            self._hpc = None          # HPCON 句柄
            self._attr_list = None    # PROC_THREAD_ATTRIBUTE_LIST 缓冲区
            self._in_r = self._in_w = None   # 输入管道: ConPTY 读端 + 本进程写端
            self._out_r = self._out_w = None # 输出管道: 本进程读端 + ConPTY 写端
            self._h_process = None
            self.pid = 0

        def start(self):
            if _KERNEL32 is None:
                raise RuntimeError("ConPTY 不可用")
            in_r, in_w = os.pipe()
            out_r, out_w = os.pipe()
            try:
                # CreatePseudoConsole 直接消费 hInput/hOutput 句柄
                h_input = msvcrt.get_osfhandle(in_r)
                h_output = msvcrt.get_osfhandle(out_w)
                hpc = wintypes.HANDLE()
                ret = _KERNEL32.CreatePseudoConsole(
                    _COORD(self.cols, self.rows), h_input, h_output, 0, ctypes.byref(hpc))
                if ret != 0:
                    raise OSError(f"CreatePseudoConsole 失败 (HRESULT=0x{ret & 0xffffffff:x})")
                self._hpc = hpc.value
                self._in_r, self._in_w = in_r, in_w
                self._out_r, self._out_w = out_r, out_w
                # 输出管道非阻塞读, 避免关闭句柄与阻塞读线程互相死锁
                os.set_blocking(self._out_r, False)

                # 通过 STARTUPINFOEX 属性列表把伪控制台挂到子进程
                cmdline = f'"{self.shell}"' if ' ' in self.shell else self.shell
                env_block = _windows_env_block(self.env)
                si = _STARTUPINFOEX()
                si.cb = ctypes.sizeof(_STARTUPINFOEX)
                # STARTF_USESTDHANDLES 必须设置, 否则客户端控制台输入未接入伪控制台 (Go 库同样设置)
                si.dwFlags = _STARTF_USESTDHANDLES
                size = ctypes.c_size_t(0)
                # 首次调用必然返回 FALSE + ERROR_INSUFFICIENT_BUFFER(122)，仅用于查询所需尺寸（与 Go 版一致，忽略返回值）
                _KERNEL32.InitializeProcThreadAttributeList(None, 1, 0, ctypes.byref(size))
                attr = ctypes.create_string_buffer(size.value)
                if not _KERNEL32.InitializeProcThreadAttributeList(attr, 1, 0, ctypes.byref(size)):
                    raise OSError(f"InitializeProcThreadAttributeList 失败: {ctypes.get_last_error()}")
                # 该属性把 HPCON 值本身作为负载 (与官方样例/Go 版一致)
                if not _KERNEL32.UpdateProcThreadAttribute(
                        attr, 0, _PROC_THREAD_ATTRIBUTE_PSEUDOCONSOLE,
                        self._hpc, ctypes.sizeof(wintypes.HANDLE), None, None):
                    raise OSError(f"UpdateProcThreadAttribute 失败: {ctypes.get_last_error()}")
                self._attr_list = attr
                si.lpAttributeList = ctypes.cast(attr, ctypes.c_void_p)

                pi = _PROCESS_INFORMATION()
                flags = _EXTENDED_STARTUPINFO_PRESENT | _CREATE_UNICODE_ENVIRONMENT
                ok = _KERNEL32.CreateProcessW(
                    None, cmdline, None, None, False, flags,
                    ctypes.cast(env_block, ctypes.c_void_p), self.cwd,
                    ctypes.byref(si), ctypes.byref(pi))
                if not ok:
                    raise OSError(f"CreateProcessW 失败: {ctypes.get_last_error()}")
                self._h_process = pi.hProcess
                self.pid = pi.dwProcessId
                if pi.hThread:
                    _KERNEL32.CloseHandle(pi.hThread)
            except Exception:
                self.close()
                raise

        def set_size(self, rows: int, cols: int):
            if self._hpc is None or _KERNEL32 is None:
                return
            try:
                _KERNEL32.ResizePseudoConsole(self._hpc, _COORD(cols, rows))
            except Exception:
                pass

        def read(self, size: int) -> bytes:
            if self._out_r is None:
                return b''
            try:
                return os.read(self._out_r, size)
            except BlockingIOError:
                return None  # 暂无数据 (非阻塞读), 由调用方稍后重试

        def write(self, data: bytes) -> int:
            if self._in_w is None:
                return 0
            return os.write(self._in_w, data)

        def close(self):
            # ClosePseudoConsole 会连带终止其绑定的客户端进程
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
            for fd in (self._in_r, self._in_w, self._out_r, self._out_w):
                if fd is not None:
                    try:
                        os.close(fd)
                    except Exception:
                        pass
            self._in_r = self._in_w = self._out_r = self._out_w = None

        def kill_tree(self):
            _taskkill(self.pid)

    class _PipeTerminal:
        """旧版 Windows 管道回退实现 (无 ConPTY): 无真实终端, resize 为 no-op"""

        def __init__(self, shell: str, env: Dict[str, str], rows: int, cols: int, cwd: str = None):
            self.shell = shell
            self.env = env
            self.cwd = cwd
            self._in_w = self._out_r = None
            self._proc = None
            self.pid = 0

        def start(self):
            in_r, in_w = os.pipe()
            out_r, out_w = os.pipe()
            self._proc = subprocess.Popen(
                [self.shell], stdin=in_r, stdout=out_w, stderr=out_w,
                env=self.env, cwd=self.cwd, creationflags=_CREATE_NO_WINDOW_FLAG)
            os.close(in_r)
            os.close(out_w)
            self._in_w = in_w
            self._out_r = out_r
            os.set_blocking(self._out_r, False)
            self.pid = self._proc.pid

        def set_size(self, rows: int, cols: int):
            return None

        def read(self, size: int) -> bytes:
            if self._out_r is None:
                return b''
            try:
                return os.read(self._out_r, size)
            except BlockingIOError:
                return None  # 暂无数据 (非阻塞读), 由调用方稍后重试

        def write(self, data: bytes) -> int:
            if self._in_w is None:
                return 0
            return os.write(self._in_w, data)

        def close(self):
            for fd in (self._in_w, self._out_r):
                if fd is not None:
                    try:
                        os.close(fd)
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

    def _create_windows_backend(shell: str, env: Dict[str, str], rows: int, cols: int, cwd: str = None):
        """与 Go newTerminalSession 一致: ConPTY 可用优先, 否则管道回退"""
        if _KERNEL32 is not None:
            return _ConPtyTerminal(shell, env, rows, cols, cwd)
        return _PipeTerminal(shell, env, rows, cols, cwd)

    def _windows_default_shell() -> str:
        """优先 PowerShell, 退而求其次使用系统默认 cmd.exe (对齐 Go defaultTerminalShell)"""
        ps = shutil.which('powershell.exe')
        if ps:
            return ps
        comspec = os.environ.get('COMSPEC')
        if comspec and os.path.exists(comspec):
            return comspec
        return 'cmd.exe'

else:
    def _windows_default_shell() -> str:
        return ''

    def _create_windows_backend(*args, **kwargs):
        raise RuntimeError("Windows 终端后端仅支持 Windows 平台")


# ==================== 2. 终端会话处理器 ====================
class TerminalSessionHandler:
    def __init__(self):
        self.process = None
        self.master_fd = None
        self.slave_fd = None
        self.terminal = None  # Windows 终端后端 (ConPTY/管道回退)
        self.websocket: WebSocket = None
        self.request_id: str = None
        
        # 实例化 Noise 管道 (⚠️ 替换为你用脚本生成的真实密钥)
        # self.AGENT_PRIVATE_KEY = self._read_key_file("noise_keys/agent_private.key")
        # self.CONTROL_PUBLIC_KEY = self._read_key_file("noise_keys/control_public.key")
        self.AGENT_PRIVATE_KEY=Config.keys['agent'].private_b64
        Logger.debug(self.AGENT_PRIVATE_KEY)
        self.CONTROL_PUBLIC_KEY=Config.keys['control'].public_b64
        Logger.debug(self.CONTROL_PUBLIC_KEY)
        self.cipher = NoiseSessionWrapper(
            is_initiator=False,  # 服务端是 Responder
            local_priv_b64=self.AGENT_PRIVATE_KEY,
            expected_remote_pub_b64=self.CONTROL_PUBLIC_KEY
        )

    def _read_key_file(self, filepath: str) -> str:
        try:
            if os.path.exists(filepath):
                with open(filepath, 'r') as f:
                    # 读取内容并去除首尾空白字符(如换行符)
                    return f.read().strip()
            return None
        except Exception as e:
            Logger.error(f"读取密钥文件 {filepath} 失败: {e}")
            return None

    async def cleanup(self):
        """彻底清理终端资源"""
        if self.request_id:
            Logger.info(f"[{self.request_id}] 执行终端资源清理...")
        
        # Windows 后端: taskkill 进程树 + 关闭 ConPTY/管道
        backend = getattr(self, 'terminal', None)
        if backend is not None:
            backend.kill_tree()
            backend.close()
            self.terminal = None
        
        if self.process:
            try:
                if hasattr(os, 'killpg'):
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

        for fd_name in ['master_fd', 'slave_fd']:
            fd = getattr(self, fd_name)
            if fd is not None:
                try:
                    os.close(fd)
                except Exception:
                    pass
                setattr(self, fd_name, None)
        
        if self.websocket:
            try:
                await self.websocket.close(code=1000)
            except Exception:
                pass
            finally:
                self.websocket = None

    async def _do_noise_handshake(self, websocket: WebSocket, log):
        """执行 Noise_XX 的严格 3 步握手"""
        log("🤝 开始 Noise 加密握手...")
        
        try:
            # 1. 接收客户端的第一个握手包 (-> e)
            msg1 = await websocket.receive_bytes()
            
            # 2. 🔥 修复：消费 msg1，并直接获取生成的服务端握手回包 msg2
            msg2 = self.cipher.process_handshake(msg1)
            await websocket.send_bytes(msg2)
            
            # 3. 接收客户端的最后一个握手包 (-> s, se)
            msg3 = await websocket.receive_bytes()
            self.cipher.process_handshake(msg3)
            
            log("✅ Noise 握手完成，端到端加密通道已建立！")
        except PermissionError as e:
            log(f"🚨 拒绝访问: {e}")
            raise
        except Exception as e:
            log(f"💥 握手失败: {e}")
            raise RuntimeError("加密握手失败")

    async def start_session(self, websocket: WebSocket, request_id: str, use_noise: bool = True):
        self.websocket = websocket
        self.request_id = request_id
        self.use_noise = use_noise
        log = lambda msg: Logger.info(f"[终端会话 {request_id}] {msg}")
        
        log("终端会话已建立，等待接受连接...")
        
        try:
            await websocket.accept()
            log("✅ WebSocket 连接已接受")
            
            # 🔥 分流：如果是 Noise 模式，才强制要求密码学握手
            if self.use_noise:
                await self._do_noise_handshake(websocket, log)
            else:
                log("⚡ 走 HTTPS 明文降级通道，跳过 Noise 握手。")
            # 握手成功后，正常拉起 PTY
            await self._run_terminal(websocket, request_id, log)
            
        except WebSocketDisconnect:
            log("🔌 客户端主动断开连接")
        except Exception as e:
            log(f"❌ 终端会话异常: {type(e).__name__} - {e}")
        finally:
            await self.cleanup() 
            log(f"✅ 资源清理完毕: {request_id}")

    @staticmethod
    def get_available_shell():
        if _IS_WINDOWS:
            return _windows_default_shell()
        for sh_name in ['bash', 'zsh', 'ash']:
            sh_path = shutil.which(sh_name)
            if sh_path: 
                return sh_path
        env_shell = os.environ.get('SHELL')
        if env_shell and os.path.exists(env_shell) and os.access(env_shell, os.X_OK):
            return env_shell
        return shutil.which('sh') or '/bin/sh'

    def set_pty_size(self, rows: int, cols: int):
        backend = getattr(self, 'terminal', None)
        if backend is not None:
            backend.set_size(rows, cols)
            return
        if self.master_fd is not None:
            try:
                winsz = struct.pack("HHHH", rows, cols, 0, 0)
                fcntl.ioctl(self.master_fd, termios.TIOCSWINSZ, winsz)
            except Exception as e:
                Logger.warning(f"设置 PTY 尺寸失败: {e}")

    async def _run_terminal(self, websocket: WebSocket, request_id: str, log):
        self.master_fd = None
        self.slave_fd = None
        
        try:
            env = os.environ.copy()
            env.pop('PROMPT_COMMAND', None)
            env.setdefault('TERM', 'xterm-256color')
            if 'LANG' not in env:
                env['LANG'] = 'C.UTF-8'

            if _IS_WINDOWS:
                await self._run_terminal_windows(websocket, request_id, log, env)
                return

            self.master_fd, self.slave_fd = pty.openpty()
            self.set_pty_size(24, 80)

            shell = self.get_available_shell()
            log(f"🐚 使用 Shell 路径: {shell}")
            
            def pty_preexec():
                import termios, fcntl
                os.setsid()
                try:
                    fcntl.ioctl(0, termios.TIOCSCTTY, 0)
                except Exception:
                    pass

            self.process = await asyncio.create_subprocess_exec(
                shell, stdin=self.slave_fd, stdout=self.slave_fd, stderr=self.slave_fd,
                env=env, preexec_fn=pty_preexec
            )
            log(f"🚀 终端进程已启动 (PID: {self.process.pid})")

            if self.slave_fd is not None:
                os.close(self.slave_fd)
                self.slave_fd = None

            fl = fcntl.fcntl(self.master_fd, fcntl.F_GETFL)
            fcntl.fcntl(self.master_fd, fcntl.F_SETFL, fl | os.O_NONBLOCK)

            tasks = [
                asyncio.create_task(self._handle_pty_output(websocket, self.master_fd, log)),
                asyncio.create_task(self._handle_websocket_input(websocket, self.master_fd, log)),
                asyncio.create_task(self._monitor_process(self.process, log)),
            ]
            
            done, pending = await asyncio.wait(tasks, return_when=asyncio.FIRST_COMPLETED)
            for t in pending:
                t.cancel()
            try:
                await websocket.close(code=1000, reason="Terminal exited normally")
            except Exception:
                pass

        except Exception as e:
            log(f"💥 启动终端失败: {type(e).__name__} - {str(e)}")
            await self.cleanup()
            raise

    async def _run_terminal_windows(self, websocket: WebSocket, request_id: str, log, env: dict):
        """Windows 分支: ConPTY 优先 / 管道回退, 输出经工作线程桥接 (select 不支持管道 fd)"""
        try:
            shell = self.get_available_shell()
            log(f"🐚 使用 Shell 路径: {shell}")

            cwd = _resolve_safe_cwd()
            backend = _create_windows_backend(shell, env, 24, 80, cwd)
            backend.start()
            self.terminal = backend
            self.process = None
            log(f"🚀 终端进程已启动 (PID: {backend.pid})")

            tasks = [
                asyncio.create_task(self._handle_windows_output(websocket, backend, log)),
                asyncio.create_task(self._handle_websocket_input(websocket, backend, log)),
            ]

            done, pending = await asyncio.wait(tasks, return_when=asyncio.FIRST_COMPLETED)
            for t in pending:
                t.cancel()
            try:
                await websocket.close(code=1000, reason="Terminal exited normally")
            except Exception:
                pass

        except Exception as e:
            log(f"💥 启动终端失败: {type(e).__name__} - {str(e)}")
            await self.cleanup()
            raise

    @staticmethod
    def _write_terminal(target, data: bytes):
        """向终端写入: POSIX 传 master fd(int), Windows 传后端对象"""
        if isinstance(target, int):
            os.write(target, data)
        else:
            target.write(data)

    async def _handle_windows_output(self, websocket: WebSocket, backend, log):
        """Windows 输出循环: 阻塞读在工作线程, 数据经 asyncio 队列转发 WebSocket"""
        loop = asyncio.get_running_loop()
        queue = asyncio.Queue()
        stop = threading.Event()

        def reader():
            while not stop.is_set():
                try:
                    data = backend.read(8192)
                except OSError:
                    break
                if data is None:
                    # 非阻塞读暂无数据, 稍后重试
                    time.sleep(0.01)
                    continue
                if not data:
                    break
                loop.call_soon_threadsafe(queue.put_nowait, data)
            loop.call_soon_threadsafe(queue.put_nowait, None)

        thread = threading.Thread(target=reader, daemon=True,
                                  name=f"conpty-reader-{self.request_id}")
        thread.start()
        try:
            while True:
                data = await queue.get()
                if data is None:
                    break
                if self.use_noise:
                    payload = self.cipher.encrypt(data)
                else:
                    payload = data
                await websocket.send_bytes(payload)
        except (WebSocketDisconnect, ConnectionResetError, OSError):
            pass
        finally:
            stop.set()
            log("🔌 Windows 终端输出循环结束")

    async def _handle_pty_output(self, websocket: WebSocket, master: int, log):
        try:
            while True:
                if master is None: break
                rlist, _, _ = select.select([master], [], [], 0.1)
                if master in rlist:
                    try:
                        data = os.read(master, 8192)
                        if not data: break
                        
                        # 🔥 发送前：使用 Noise 管道加密终端输出
                        if self.use_noise:
                            encrypted_data = self.cipher.encrypt(data)
                            await websocket.send_bytes(encrypted_data)
                        else:
                            await websocket.send_bytes(data)
                        
                    except BlockingIOError:
                        await asyncio.sleep(0.01)
                    except OSError as e:
                        if e.errno == 5: break
                        raise
                else:
                    await asyncio.sleep(0.01)
        except (OSError, WebSocketDisconnect, ConnectionResetError):
            pass
    
    async def _handle_websocket_input(self, websocket: WebSocket, master: int, log):
        try:
            # 🔥 必须使用 iter_bytes，因为密文是纯二进制数据
            async for payload in websocket.iter_bytes():
                if master is None: break
                
                # 🔥 接收后：使用 Noise 管道解密
                if self.use_noise:
                    try:
                        decrypted = self.cipher.decrypt(payload)
                    except Exception as e:
                        log(f"⚠️ 解密失败，收到非法包: {e}")
                        break
                else:
                    # HTTPS 降级模式，收到的直接就是明文二进制
                    decrypted = payload

                # 尝试解析是否是前端发来的 JSON 控制指令
                try:
                    text_msg = decrypted.decode('utf-8')
                    if text_msg.strip().startswith('{'):
                        data = json.loads(text_msg)
                        msg_type = data.get('type')
                        
                        if msg_type == 'heartbeat':
                            # 回复心跳也要按模式区分
                            reply = json.dumps({"type": "heartbeat"}).encode()
                            if self.use_noise:
                                await websocket.send_bytes(self.cipher.encrypt(reply))
                            else:
                                await websocket.send_bytes(reply)
                            continue
                            
                        if msg_type == 'resize':
                            rows, cols = data.get('rows', 24), data.get('cols', 80)
                            self.set_pty_size(rows, cols)
                            continue
                        if msg_type == 'input' and 'data' in data:
                            input_data = data['data']
                            if data.get('encoding') == 'base64':
                                input_bytes = base64.b64decode(input_data)
                            else:
                                input_bytes = input_data.encode('utf-8')
                            self._write_terminal(master, input_bytes)
                            continue
                except (UnicodeDecodeError, json.JSONDecodeError):
                    pass # 解析 JSON 失败，说明是普通的键盘敲击输入
                
                # 默认当作普通键盘输入写入 PTY
                self._write_terminal(master, decrypted)
                
        except WebSocketDisconnect:
            log("🔌 客户端断开，停止接收输入")
        except OSError:
            pass

    async def _monitor_process(self, process, log):
        try:
            await process.wait()
        except Exception:
            pass

# ============================================================================
# 🌐 Argo 临时隧道模块 (Cloudflare Quick Tunnel, 纯 Python 标准库实现)
# ============================================================================
# 实现源自 tests/py/cftunnel-product.py, 去掉 CLI / 测试服务器部分后整体内嵌:
#   - HTTP/2 (RFC 7540) + HPACK (RFC 7541) 手写编解码
#   - Cap'n Proto RPC (bootstrap / register) 快速隧道注册协议
#   - WebSocket 双向隧道 (HTTP/1.1 Upgrade -> HTTP/2)
# 上层通过 CloudflareQuickTunnel(单隧道) 与 ArgoTunnelManager(多隧道注册表) 驱动,
# 对外暴露 GET/POST /api/argo 两个接口 (见「Argo 临时隧道模块: RESTful 路由」)。
# ============================================================================
QUICK_SERVICE = "https://api.trycloudflare.com"
EDGE_HOSTS = ("region1.v2.argotunnel.com", "region2.v2.argotunnel.com")
EDGE_PORT = 7844
CONTROL_HEADER = "cf-cloudflared-proxy-connection-upgrade"
CONTROL_STREAM = "control-stream"
UPDATE_CONFIGURATION = "update-configuration"
MAX_FRAME_SIZE = 16384

STATIC_TABLE = (
    (":authority", ""), (":method", "GET"), (":method", "POST"),
    (":path", "/"), (":path", "/index.html"), (":scheme", "http"),
    (":scheme", "https"), (":status", "200"), (":status", "204"),
    (":status", "206"), (":status", "304"), (":status", "400"),
    (":status", "404"), (":status", "500"), ("accept-charset", ""),
    ("accept-encoding", "gzip, deflate"), ("accept-language", ""),
    ("accept-ranges", ""), ("accept", ""), ("access-control-allow-origin", ""),
    ("age", ""), ("allow", ""), ("authorization", ""), ("cache-control", ""),
    ("content-disposition", ""), ("content-encoding", ""),
    ("content-language", ""), ("content-length", ""), ("content-location", ""),
    ("content-range", ""), ("content-type", ""), ("cookie", ""),
    ("date", ""), ("etag", ""), ("expect", ""), ("expires", ""),
    ("from", ""), ("host", ""), ("if-match", ""), ("if-modified-since", ""),
    ("if-none-match", ""), ("if-range", ""), ("if-unmodified-since", ""),
    ("last-modified", ""), ("link", ""), ("location", ""), ("max-forwards", ""),
    ("proxy-authenticate", ""), ("proxy-authorization", ""), ("range", ""),
    ("referer", ""), ("refresh", ""), ("retry-after", ""), ("server", ""),
    ("set-cookie", ""), ("strict-transport-security", ""), ("transfer-encoding", ""),
    ("user-agent", ""), ("vary", ""), ("via", ""), ("www-authenticate", ""),
)

HUFFMAN_CODES = (8184, 8388568, 268435426, 268435427, 268435428, 268435429, 268435430, 268435431, 268435432, 16777194, 1073741820, 268435433, 268435434, 1073741821, 268435435, 268435436, 268435437, 268435438, 268435439, 268435440, 268435441, 268435442, 1073741822, 268435443, 268435444, 268435445, 268435446, 268435447, 268435448, 268435449, 268435450, 268435451, 20, 1016, 1017, 4090, 8185, 21, 248, 2042, 1018, 1019, 249, 2043, 250, 22, 23, 24, 0, 1, 2, 25, 26, 27, 28, 29, 30, 31, 92, 251, 32764, 32, 4091, 1020, 8186, 33, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 252, 115, 253, 8187, 524272, 8188, 16380, 34, 32765, 3, 35, 4, 36, 5, 37, 38, 39, 6, 116, 117, 40, 41, 42, 7, 43, 118, 44, 8, 9, 45, 119, 120, 121, 122, 123, 32766, 2044, 16381, 8189, 268435452, 1048550, 4194258, 1048551, 1048552, 4194259, 4194260, 4194261, 8388569, 4194262, 8388570, 8388571, 8388572, 8388573, 8388574, 16777195, 8388575, 16777196, 16777197, 4194263, 8388576, 16777198, 8388577, 8388578, 8388579, 8388580, 2097116, 4194264, 8388581, 4194265, 8388582, 8388583, 16777199, 4194266, 2097117, 1048553, 4194267, 4194268, 8388584, 8388585, 2097118, 8388586, 4194269, 4194270, 16777200, 2097119, 4194271, 8388587, 8388588, 2097120, 2097121, 4194272, 2097122, 8388589, 4194273, 8388590, 8388591, 1048554, 4194274, 4194275, 4194276, 8388592, 4194277, 4194278, 8388593, 67108832, 67108833, 1048555, 524273, 4194279, 8388594, 4194280, 33554412, 67108834, 67108835, 67108836, 134217694, 134217695, 67108837, 16777201, 33554413, 524274, 2097123, 67108838, 134217696, 134217697, 67108839, 134217698, 16777202, 2097124, 2097125, 67108840, 67108841, 268435453, 134217699, 134217700, 134217701, 1048556, 16777203, 1048557, 2097126, 4194281, 2097127, 2097128, 8388595, 4194282, 4194283, 33554414, 33554415, 16777204, 16777205, 67108842, 8388596, 67108843, 134217702, 67108844, 67108845, 134217703, 134217704, 134217705, 134217706, 134217707, 268435454, 134217708, 134217709, 134217710, 134217711, 134217712, 67108846, 1073741823)
HUFFMAN_LENGTHS = (13, 23, 28, 28, 28, 28, 28, 28, 28, 24, 30, 28, 28, 30, 28, 28, 28, 28, 28, 28, 28, 28, 30, 28, 28, 28, 28, 28, 28, 28, 28, 28, 6, 10, 10, 12, 13, 6, 8, 11, 10, 10, 8, 11, 8, 6, 6, 6, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 8, 15, 6, 12, 10, 13, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 8, 13, 19, 13, 14, 6, 15, 5, 6, 5, 6, 5, 6, 6, 6, 5, 7, 7, 6, 6, 6, 5, 6, 7, 6, 5, 5, 6, 7, 7, 7, 7, 7, 15, 11, 14, 13, 28, 20, 22, 20, 20, 22, 22, 22, 23, 22, 23, 23, 23, 23, 23, 24, 23, 24, 24, 22, 23, 24, 23, 23, 23, 23, 21, 22, 23, 22, 23, 23, 24, 22, 21, 20, 22, 22, 23, 23, 21, 23, 22, 22, 24, 21, 22, 23, 23, 21, 21, 22, 21, 23, 22, 23, 23, 20, 22, 22, 22, 23, 22, 22, 23, 26, 26, 20, 19, 22, 23, 22, 25, 26, 26, 26, 27, 27, 26, 24, 25, 19, 21, 26, 27, 27, 26, 27, 24, 21, 21, 26, 26, 28, 27, 27, 27, 20, 24, 20, 21, 22, 21, 21, 23, 22, 22, 25, 25, 24, 24, 26, 23, 26, 27, 26, 26, 27, 27, 27, 27, 27, 28, 27, 27, 27, 27, 27, 26, 30)


def huffman_tree():
    root = [None, None, -1, 0]
    for symbol, (code, length) in enumerate(zip(HUFFMAN_CODES, HUFFMAN_LENGTHS)):
        node = root
        for shift in range(length - 1, -1, -1):
            bit = (code >> shift) & 1
            if node[bit] is None:
                node[bit] = [None, None, -1, node[3] + 1]
            node = node[bit]
        node[2] = symbol
    return root

HUFFMAN_TREE = huffman_tree()


def decode_huffman(data):
    out = bytearray()
    node = HUFFMAN_TREE
    pending_bits = 0
    pending_length = 0
    for byte in data:
        for shift in range(7, -1, -1):
            bit = (byte >> shift) & 1
            pending_bits = (pending_bits << 1) | bit
            pending_length += 1
            node = node[bit]
            if node is None:
                raise ValueError("invalid HPACK Huffman string")
            if node[2] >= 0:
                if node[2] == 256:
                    raise ValueError("HPACK Huffman EOS inside string")
                out.append(node[2])
                node = HUFFMAN_TREE
                pending_bits = 0
                pending_length = 0
    if pending_length > 7 or pending_bits != (1 << pending_length) - 1:
        raise ValueError("invalid HPACK Huffman padding")
    return bytes(out)


def read_integer(data, pos, prefix_bits):
    if pos >= len(data):
        raise ValueError("truncated HPACK integer")
    first = data[pos]
    pos += 1
    mask = (1 << prefix_bits) - 1
    value = first & mask
    if value < mask:
        return value, pos
    shift = 0
    while True:
        if pos >= len(data):
            raise ValueError("truncated HPACK integer")
        byte = data[pos]
        pos += 1
        value += (byte & 127) << shift
        if byte & 128 == 0:
            return value, pos
        shift += 7
        if shift > 28:
            raise ValueError("HPACK integer too large")


def read_string(data, pos):
    if pos >= len(data):
        raise ValueError("truncated HPACK string")
    huffman = bool(data[pos] & 128)
    length, pos = read_integer(data, pos, 7)
    end = pos + length
    if end > len(data):
        raise ValueError("truncated HPACK string data")
    value = data[pos:end]
    return (decode_huffman(value) if huffman else value), end


class HpackDecoder:
    def __init__(self):
        self.dynamic = deque()
        self.dynamic_size = 0
        self.max_size = 4096

    def table_entry(self, index):
        if index <= 0:
            raise ValueError("invalid HPACK index")
        if index <= len(STATIC_TABLE):
            return STATIC_TABLE[index - 1]
        dynamic_index = index - len(STATIC_TABLE) - 1
        if dynamic_index < 0 or dynamic_index >= len(self.dynamic):
            raise ValueError("HPACK dynamic index out of range")
        return self.dynamic[dynamic_index]

    def add(self, name, value):
        size = 32 + len(name) + len(value)
        if size > self.max_size:
            self.dynamic.clear()
            self.dynamic_size = 0
            return
        while self.dynamic and self.dynamic_size + size > self.max_size:
            old_name, old_value = self.dynamic.pop()
            self.dynamic_size -= 32 + len(old_name) + len(old_value)
        self.dynamic.appendleft((name, value))
        self.dynamic_size += size

    def decode(self, data):
        result = []
        pos = 0
        while pos < len(data):
            first = data[pos]
            if first & 128:
                index, pos = read_integer(data, pos, 7)
                result.append(self.table_entry(index))
                continue
            if first & 64:
                index, pos = read_integer(data, pos, 6)
                if index:
                    name = self.table_entry(index)[0]
                else:
                    name_bytes, pos = read_string(data, pos)
                    name = name_bytes.decode("utf-8", "replace").lower()
                value_bytes, pos = read_string(data, pos)
                value = value_bytes.decode("utf-8", "replace")
                self.add(name, value)
                result.append((name, value))
                continue
            if first & 32:
                size, pos = read_integer(data, pos, 5)
                if size > 4096:
                    raise ValueError("HPACK table size exceeds limit")
                self.max_size = size
                while self.dynamic and self.dynamic_size > size:
                    old_name, old_value = self.dynamic.pop()
                    self.dynamic_size -= 32 + len(old_name) + len(old_value)
                continue
            index, pos = read_integer(data, pos, 4)
            if index:
                name = self.table_entry(index)[0]
            else:
                name_bytes, pos = read_string(data, pos)
                name = name_bytes.decode("utf-8", "replace").lower()
            value_bytes, pos = read_string(data, pos)
            result.append((name, value_bytes.decode("utf-8", "replace")))
        return result


def encode_integer(value, prefix_bits, prefix):
    limit = (1 << prefix_bits) - 1
    if value < limit:
        return bytes((prefix | value,))
    out = bytearray((prefix | limit,))
    value -= limit
    while value >= 128:
        out.append((value & 127) | 128)
        value >>= 7
    out.append(value)
    return bytes(out)


def encode_string(value):
    raw = value.encode("utf-8") if isinstance(value, str) else value
    return encode_integer(len(raw), 7, 0) + raw


def encode_headers(headers):
    out = bytearray()
    for name, value in headers:
        if name == ":status" and value == "200":
            out.append(0x88)
        elif name == ":status" and value == "204":
            out.append(0x89)
        elif name == ":status" and value == "206":
            out.append(0x8A)
        elif name == ":status" and value == "304":
            out.append(0x8B)
        elif name == ":status" and value == "400":
            out.append(0x8C)
        elif name == ":status" and value == "404":
            out.append(0x8D)
        elif name == ":status" and value == "500":
            out.append(0x8E)
        else:
            out.extend(encode_integer(0, 4, 0))
            out.extend(encode_string(name))
            out.extend(encode_string(value))
    return bytes(out)


class CapnpBuilder:
    def __init__(self):
        self.words = []

    def alloc(self, count):
        offset = len(self.words)
        self.words.extend([0] * count)
        return offset

    def struct_ptr(self, ptr_word, target_word, data_words, pointer_words):
        offset = target_word - ptr_word - 1
        low = ((offset << 2) & 0xFFFFFFFC)
        high = (data_words & 0xFFFF) | ((pointer_words & 0xFFFF) << 16)
        self.words[ptr_word] = low | (high << 32)

    def set_u8(self, word, byte, value):
        mask = 0xFF << (byte * 8)
        self.words[word] = (self.words[word] & ~mask) | ((value & 0xFF) << (byte * 8))

    def set_u16(self, word, byte, value):
        mask = 0xFFFF << (byte * 8)
        self.words[word] = (self.words[word] & ~mask) | ((value & 0xFFFF) << (byte * 8))

    def set_u32(self, word, byte, value):
        mask = 0xFFFFFFFF << (byte * 8)
        self.words[word] = (self.words[word] & ~mask) | ((value & 0xFFFFFFFF) << (byte * 8))

    def set_u64(self, word, value):
        self.words[word] = value & 0xFFFFFFFFFFFFFFFF

    def write_bytes(self, ptr_word, value, text=False):
        raw = value.encode() if isinstance(value, str) else bytes(value)
        count = len(raw) + 1 if text else len(raw)
        content = self.alloc((count + 7) // 8)
        for i, byte in enumerate(raw):
            self.set_u8(content + i // 8, i % 8, byte)
        offset = content - ptr_word - 1
        low = ((offset << 2) | 1) & 0xFFFFFFFF
        high = 2 | ((count & 0x1FFFFFFF) << 3)
        self.words[ptr_word] = low | (high << 32)

    def write_text_list(self, ptr_word, values):
        if not values:
            self.words[ptr_word] = 0
            return
        items = self.alloc(len(values))
        offset = items - ptr_word - 1
        self.words[ptr_word] = (((offset << 2) | 1) & 0xFFFFFFFF) | ((6 | (len(values) << 3)) << 32)
        for i, value in enumerate(values):
            self.write_bytes(items + i, value, True)

    def finish(self):
        return struct.pack("<II", 0, len(self.words)) + b"".join(struct.pack("<Q", word) for word in self.words)


def capnp_bootstrap(question_id):
    msg = CapnpBuilder()
    root, msg_data, msg_ptr = msg.alloc(1), msg.alloc(1), msg.alloc(1)
    msg.struct_ptr(root, msg_data, 1, 1)
    msg.set_u16(msg_data, 0, 8)
    bootstrap_data = msg.alloc(1)
    msg.alloc(1)
    msg.struct_ptr(msg_ptr, bootstrap_data, 1, 1)
    msg.set_u32(bootstrap_data, 0, question_id)
    return msg.finish()


def capnp_register(question_id, bootstrap_question_id, account_tag, tunnel_secret, tunnel_id, conn_index):
    msg = CapnpBuilder()
    root, msg_data, msg_ptr = msg.alloc(1), msg.alloc(1), msg.alloc(1)
    msg.struct_ptr(root, msg_data, 1, 1)
    msg.set_u16(msg_data, 0, 2)
    call_data0, call_data1, _ = msg.alloc(1), msg.alloc(1), msg.alloc(1)
    call_ptr0, call_ptr1, _ = msg.alloc(1), msg.alloc(1), msg.alloc(1)
    msg.struct_ptr(msg_ptr, call_data0, 3, 3)
    msg.set_u32(call_data0, 0, question_id)
    msg.set_u64(call_data1, 0xF71695EC7FE85497)
    mt_data, mt_ptr = msg.alloc(1), msg.alloc(1)
    msg.struct_ptr(call_ptr0, mt_data, 1, 1)
    msg.set_u16(mt_data, 4, 1)
    pa_data = msg.alloc(1)
    msg.alloc(1)
    msg.struct_ptr(mt_ptr, pa_data, 1, 1)
    msg.set_u32(pa_data, 0, bootstrap_question_id)
    payload_ptr0, _ = msg.alloc(1), msg.alloc(1)
    msg.struct_ptr(call_ptr1, payload_ptr0, 0, 2)
    params_data, params_ptr0, params_ptr1, params_ptr2 = msg.alloc(1), msg.alloc(1), msg.alloc(1), msg.alloc(1)
    msg.struct_ptr(payload_ptr0, params_data, 1, 3)
    msg.set_u8(params_data, 0, conn_index)
    auth_ptr0, auth_ptr1 = msg.alloc(1), msg.alloc(1)
    msg.struct_ptr(params_ptr0, auth_ptr0, 0, 2)
    msg.write_bytes(auth_ptr0, account_tag, True)
    msg.write_bytes(auth_ptr1, tunnel_secret)
    msg.write_bytes(params_ptr1, tunnel_id)
    opt_data, opt_ptr0, _ = msg.alloc(1), msg.alloc(1), msg.alloc(1)
    msg.struct_ptr(params_ptr2, opt_data, 1, 2)
    client_ptr0, client_ptr1, client_ptr2, client_ptr3 = msg.alloc(1), msg.alloc(1), msg.alloc(1), msg.alloc(1)
    msg.struct_ptr(opt_ptr0, client_ptr0, 0, 4)
    msg.write_bytes(client_ptr0, uuid.uuid4().bytes)
    msg.write_text_list(client_ptr1, ["serialized_headers", "allow_remote_config"])
    msg.write_bytes(client_ptr2, "2024.10.0-Nexus", True)
    msg.write_bytes(client_ptr3, "Nexus-Python", True)
    return msg.finish()


def capnp_messages(buffer):
    messages = []
    pos = 0
    while len(buffer) - pos >= 8:
        segments_minus_one, first_words = struct.unpack_from("<II", buffer, pos)
        segments = segments_minus_one + 1
        header_words = 2 + segments
        header_size = header_words * 4
        if header_size % 8:
            header_size += 4
        if len(buffer) - pos < header_size:
            break
        counts = [first_words]
        for index in range(1, segments):
            counts.append(struct.unpack_from("<I", buffer, pos + 4 + index * 4)[0])
        total = header_size + sum(counts) * 8
        if len(buffer) - pos < total:
            break
        if segments != 1:
            raise ValueError("multi-segment Cap'n Proto message is not supported")
        messages.append(buffer[pos + header_size:pos + total])
        pos += total
    return messages, buffer[pos:]


def capnp_struct(words, pointer_word):
    pointer = words[pointer_word]
    if pointer & 3 != 0:
        raise ValueError("expected Cap'n Proto struct pointer")
    offset = (pointer >> 2) & 0x3FFFFFFF
    if offset & 0x20000000:
        offset -= 0x40000000
    target = pointer_word + 1 + offset
    data_words = (pointer >> 32) & 0xFFFF
    pointer_words = (pointer >> 48) & 0xFFFF
    if target < 0 or target + data_words + pointer_words > len(words):
        raise ValueError("Cap'n Proto pointer out of bounds")
    return target, data_words, pointer_words


def capnp_text(words, pointer_word):
    pointer = words[pointer_word]
    if pointer & 3 != 1:
        return ""
    offset = (pointer >> 2) & 0x3FFFFFFF
    if offset & 0x20000000:
        offset -= 0x40000000
    target = pointer_word + 1 + offset
    element_size = (pointer >> 32) & 7
    count = pointer >> 35
    if element_size != 2 or target < 0 or target + (count + 7) // 8 > len(words):
        return ""
    raw = b"".join(struct.pack("<Q", word) for word in words[target:target + (count + 7) // 8])[:count]
    return raw.rstrip(b"\0").decode("utf-8", "replace")


def capnp_return_result(data):
    if len(data) % 8 or len(data) < 24:
        raise ValueError("short Cap'n Proto return")
    words = list(struct.unpack("<" + "Q" * (len(data) // 8), data))
    msg_target, msg_data, msg_ptrs = capnp_struct(words, 0)
    if msg_data < 1 or words[msg_target] & 0xFFFF != 3:
        raise ValueError("not an RPC return message")
    ret_target, ret_data, ret_ptrs = capnp_struct(words, msg_target + msg_data)
    which = (words[ret_target] >> 48) & 0xFFFF
    if which == 1:
        return {"ok": False, "error": capnp_text(words, ret_target + ret_data)}
    if which != 0:
        return {"ok": False, "error": "RPC return union %d" % which}
    payload_target, payload_data, payload_ptrs = capnp_struct(words, ret_target + ret_data)
    content_target, content_data, content_ptrs = capnp_struct(words, payload_target + payload_data)
    union = words[content_target]
    union_which = union & 0xFFFF
    if union_which == 0:
        return {"ok": False, "error": capnp_text(words, content_target + content_data)}
    if union_which != 1:
        return {"ok": False, "error": "registration union %d" % union_which}
    details_target, details_data, details_ptrs = capnp_struct(words, content_target + content_data)
    location = capnp_text(words, details_target + details_data + 1)
    return {"ok": True, "location": location, "remote_managed": bool(words[details_target] & 1)}


def infer_content_type(path):
    suffix = os.path.splitext(path.rstrip("/"))[1].lower()
    return {
        ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8",
        ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8",
        ".map": "application/json; charset=utf-8", ".wasm": "application/wasm",
        ".html": "text/html; charset=utf-8", ".htm": "text/html; charset=utf-8",
        ".svg": "image/svg+xml", ".xml": "application/xml", ".woff": "font/woff2",
        ".woff2": "font/woff2", ".png": "image/png", ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg", ".gif": "image/gif", ".ico": "image/x-icon",
    }.get(suffix, "")


def b64_secret(value):
    if isinstance(value, list):
        return bytes(value)
    if not isinstance(value, str):
        raise ValueError("quick tunnel secret has an unexpected type")
    return base64.b64decode(value + "=" * (-len(value) % 4))


def request_quick_tunnel(service):
    request = urllib.request.Request(
        service.rstrip("/") + "/tunnel",
        data=b"",
        method="POST",
        headers={"Content-Type": "application/json", "User-Agent": "cftunnel.py/1.0"},
    )
    try:
        with urllib.request.urlopen(request, timeout=15) as response:
            body = response.read()
            status = response.status
    except urllib.error.URLError as exc:
        raise RuntimeError("requesting quick tunnel failed: %s" % exc) from exc
    try:
        data = json.loads(body)
    except json.JSONDecodeError as exc:
        raise RuntimeError("quick tunnel returned non-JSON (%s): %s" % (status, body[:300].decode("utf-8", "replace"))) from exc
    result = data.get("result") or {}
    if not data.get("success", True) or not result:
        raise RuntimeError("quick tunnel request was rejected: %s" % json.dumps(data.get("errors"), ensure_ascii=False))
    try:
        tunnel_id = uuid.UUID(result["id"])
        account_tag = result["account_tag"]
        secret = b64_secret(result["secret"])
        hostname = result["hostname"]
    except (KeyError, ValueError, binascii.Error, TypeError) as exc:
        raise RuntimeError("invalid quick tunnel response: %s" % exc) from exc
    return hostname, account_tag, secret, tunnel_id.bytes


class H2Connection:
    def __init__(self, sock, origin, account_tag, tunnel_secret, tunnel_id, conn_index, logger, tunnel_url=None, show_tunnel=False, tunnel_state=None):
        self.sock = sock
        self.origin = origin
        self.account_tag = account_tag
        self.tunnel_secret = tunnel_secret
        self.tunnel_id = tunnel_id
        self.conn_index = conn_index
        self.log = logger
        self.tunnel_url = tunnel_url
        self.show_tunnel = show_tunnel
        self.tunnel_state = tunnel_state if tunnel_state is not None else {"printed": False}
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

    def send_frame(self, frame_type, flags, stream_id, payload=b""):
        if len(payload) > 0xFFFFFF:
            raise ValueError("HTTP/2 frame too large")
        header = struct.pack(">I", len(payload))[1:] + bytes((frame_type, flags)) + struct.pack(">I", stream_id & 0x7FFFFFFF)
        with self.encoder_lock:
            self.sock.sendall(header + payload)

    def send_headers(self, stream_id, headers, end_stream=False):
        payload = encode_headers(headers)
        flags = 4 | (1 if end_stream else 0)
        self.send_frame(1, flags, stream_id, payload)

    def send_data(self, stream_id, payload, end_stream=False):
        view = memoryview(payload)
        offset = 0
        while offset < len(view) or (len(view) == 0 and offset == 0):
            with self.window_condition:
                while self.connection_window <= 0 or self.stream_windows.get(stream_id, 65535) <= 0:
                    if self.stopped:
                        return
                    self.window_condition.wait(1)
                amount = min(len(view) - offset, self.connection_window, self.stream_windows.get(stream_id, 65535), self.peer_max_frame)
                if len(view) == 0:
                    amount = 0
                chunk = bytes(view[offset:offset + amount])
                self.connection_window -= amount
                self.stream_windows[stream_id] = self.stream_windows.get(stream_id, 65535) - amount
            flags = 1 if end_stream and offset + amount >= len(view) else 0
            self.send_frame(0, flags, stream_id, chunk)
            offset += amount
            if len(view) == 0:
                break

    def send_window_update(self, stream_id, increment):
        if increment > 0:
            self.send_frame(8, 0, stream_id, struct.pack(">I", increment & 0x7FFFFFFF))

    def read_frame(self):
        header = read_exact(self.sock, 9)
        length = int.from_bytes(header[:3], "big")
        frame_type, flags = header[3], header[4]
        stream_id = struct.unpack(">I", header[5:])[0] & 0x7FFFFFFF
        payload = read_exact(self.sock, length)
        return frame_type, flags, stream_id, payload

    def read_headers(self, flags, stream_id, payload):
        if flags & 8:
            pad_length = payload[0]
            payload = payload[1:]
            if pad_length > len(payload):
                raise ValueError("invalid HTTP/2 padding")
            payload = payload[:-pad_length] if pad_length else payload
        if flags & 32:
            payload = payload[5:]
        blocks = [payload]
        while not flags & 4:
            frame_type, next_flags, next_stream, next_payload = self.read_frame()
            if frame_type != 9 or next_stream != stream_id:
                raise ValueError("expected CONTINUATION frame")
            blocks.append(next_payload)
            flags = next_flags
        return self.decoder.decode(b"".join(blocks))

    def open_control(self, stream_id):
        if self.control is not None:
            return
        self.control = ControlStream(self, stream_id, self.log)
        self.send_headers(stream_id, [(":status", "200")])
        self.control.start(self.account_tag, self.tunnel_secret, self.tunnel_id, self.conn_index)

    def update_config(self, stream_id, body):
        version = 0
        try:
            version = int(json.loads(body or b"{}").get("version", 0))
        except (ValueError, TypeError, json.JSONDecodeError):
            pass
        response = json.dumps({"latestAppliedVersion": version}, separators=(",", ":")).encode()
        self.send_headers(stream_id, [(":status", "200"), ("content-type", "application/json"), ("content-length", str(len(response)))])
        self.send_data(stream_id, response, True)

    def request_finished(self, stream_id, request):
        if request.get("upgrade") == "update-configuration":
            self.update_config(stream_id, bytes(request["body"]))
            return
        if request.get("websocket"):
            return
        if request.get("finished"):
            return
        request["finished"] = True
        threading.Thread(target=self.proxy_request, args=(stream_id, request), daemon=True).start()

    def proxy_request(self, stream_id, request):
        try:
            response = proxy_to_origin(self.origin, request["method"], request["path"], request["headers"], bytes(request["body"]))
            response_headers = response["headers"]
            user_headers = []
            direct_headers = []
            for name, value in response_headers:
                lower = name.lower()
                if lower == "content-length":
                    direct_headers.append((lower, value))
                if not (lower.startswith("cf-int-") or lower.startswith("cf-cloudflared-") or lower.startswith("cf-proxy-") or lower.startswith(":")) or lower in {"connection", "upgrade", "sec-websocket-accept"}:
                    user_headers.append((lower, value))
            if not any(name == "content-type" for name, _ in user_headers):
                inferred = infer_content_type(request["path"])
                if inferred:
                    user_headers.append(("content-type", inferred))
            serialized = serialize_headers(user_headers)
            status = 200 if response["status"] == 101 else response["status"]
            out_headers = [(":status", str(status))]
            out_headers.extend(direct_headers)
            out_headers.append(("cf-cloudflared-response-headers", serialized))
            out_headers.append(("cf-cloudflared-response-meta", '{"src":"origin","flow_rate_limited":false}'))
            self.send_headers(stream_id, out_headers)
            while True:
                chunk = response["body"].read(65536)
                if not chunk:
                    self.send_data(stream_id, b"", True)
                    break
                self.send_data(stream_id, chunk, False)
        except Exception as exc:
            self.log.warning("stream %s proxy failed: %s", stream_id, exc)
            try:
                self.send_headers(stream_id, [(":status", "502")], True)
            except OSError:
                pass

    def run(self):
        preface = read_exact(self.sock, 24)
        if preface != b"PRI * HTTP/2.0\r\n\r\nSM\r\n\r\n":
            raise ValueError("edge did not send the HTTP/2 client preface")
        self.send_frame(4, 0, 0, struct.pack(">HI", 3, 100))
        if self.show_tunnel and not self.tunnel_state["printed"]:
            print(self.tunnel_url, flush=True)
            self.tunnel_state["printed"] = True
        while not self.stopped:
            frame_type, flags, stream_id, payload = self.read_frame()
            if frame_type == 4:
                if not flags & 1:
                    if len(payload) % 6:
                        raise ValueError("invalid SETTINGS payload")
                    for pos in range(0, len(payload), 6):
                        setting, value = struct.unpack_from(">HI", payload, pos)
                        if setting == 4:
                            delta = value - 65535
                            for key in self.stream_windows:
                                self.stream_windows[key] = max(0, self.stream_windows[key] + delta)
                        elif setting == 5 and 16384 <= value <= 16777215:
                            self.peer_max_frame = value
                    self.send_frame(4, 1, 0)
                continue
            if frame_type == 6:
                if not flags & 1:
                    self.send_frame(6, 1, 0, payload)
                continue
            if frame_type == 8:
                if len(payload) != 4:
                    continue
                increment = struct.unpack(">I", payload)[0] & 0x7FFFFFFF
                if stream_id == 0:
                    with self.window_condition:
                        self.connection_window += increment
                        self.window_condition.notify_all()
                else:
                    with self.window_condition:
                        self.stream_windows[stream_id] = self.stream_windows.get(stream_id, 65535) + increment
                        self.window_condition.notify_all()
                continue
            if frame_type == 3:
                self.streams.pop(stream_id, None)
                continue
            if frame_type == 7:
                break
            if frame_type == 1:
                headers = self.read_headers(flags, stream_id, payload)
                self.stream_windows.setdefault(stream_id, 65535)
                self.handle_headers(stream_id, flags, headers)
                continue
            if frame_type == 0:
                self.handle_data(stream_id, flags, payload)
                continue

    def handle_headers(self, stream_id, flags, headers):
        header_map = {}
        for name, value in headers:
            if name.startswith(":"):
                header_map[name] = value
            else:
                header_map[name.lower()] = value
        upgrade = header_map.get(CONTROL_HEADER, "").strip().lower()
        if upgrade == CONTROL_STREAM:
            self.open_control(stream_id)
            if flags & 1:
                self.control.finished = True
            return
        request = {
            "method": header_map.get(":method", "GET"),
            "path": header_map.get(":path", "/"),
            "authority": header_map.get(":authority", ""),
            "headers": [(name, value) for name, value in headers if not name.startswith(":")],
            "body": bytearray(), "upgrade": upgrade,
            "websocket": upgrade == "websocket" or header_map.get(":protocol", "").lower() == "websocket",
            "ended": bool(flags & 1), "finished": False,
        }
        self.streams[stream_id] = request
        if request["websocket"]:
            request["websocket_proxy"] = WebSocketProxy(self, stream_id, request, self.origin, self.log)
            request["websocket_proxy"].start()
        elif request["ended"]:
            self.request_finished(stream_id, request)

    def handle_data(self, stream_id, flags, payload):
        self.send_window_update(0, len(payload))
        self.send_window_update(stream_id, len(payload))
        if self.control is not None and self.control.stream_id == stream_id:
            self.control.feed(payload)
            if flags & 1:
                self.control.finished = True
            return
        request = self.streams.get(stream_id)
        if request is None:
            return
        if request.get("websocket_proxy") is not None:
            request["websocket_proxy"].feed(payload, bool(flags & 1))
            return
        request["body"].extend(payload)
        if flags & 1:
            request["ended"] = True
            self.request_finished(stream_id, request)


class WebSocketProxy:
    def __init__(self, connection, stream_id, request, origin, logger):
        self.connection = connection
        self.stream_id = stream_id
        self.request = request
        self.origin = origin
        self.log = logger
        self.incoming = queue.Queue()
        self.stopped = threading.Event()
        self.sock = None

    def start(self):
        threading.Thread(target=self.run, daemon=True).start()

    def feed(self, payload, end_stream=False):
        if payload:
            self.incoming.put(payload)
        if end_stream:
            self.incoming.put(None)

    def run(self):
        writer = None
        try:
            self.sock = open_origin_socket(self.origin)
            self.send_handshake()
            response = http.client.HTTPResponse(self.sock, method="GET")
            response.begin()
            response_headers = response.getheaders()
            user_headers = []
            direct_headers = []
            for name, value in response_headers:
                lower = name.lower()
                if lower == "content-length":
                    direct_headers.append((lower, value))
                if not (lower.startswith("cf-int-") or lower.startswith("cf-cloudflared-") or lower.startswith("cf-proxy-") or lower.startswith(":")) or lower in {"connection", "upgrade", "sec-websocket-accept"}:
                    user_headers.append((lower, value))
            serialized = serialize_headers(user_headers)
            status = 200 if response.status == 101 else response.status
            out_headers = [(":status", str(status))]
            out_headers.extend(direct_headers)
            out_headers.append(("cf-cloudflared-response-headers", serialized))
            out_headers.append(("cf-cloudflared-response-meta", '{"src":"origin","flow_rate_limited":false}'))
            self.connection.send_headers(self.stream_id, out_headers)
            writer = threading.Thread(target=self.write_to_origin, daemon=True)
            writer.start()
            while not self.stopped.is_set():
                payload = self.sock.recv(65536)
                if not payload:
                    break
                self.connection.send_data(self.stream_id, payload, False)
            self.connection.send_data(self.stream_id, b"", True)
        except Exception as exc:
            self.log.warning("websocket stream %s failed: %s", self.stream_id, exc)
            try:
                self.connection.send_headers(self.stream_id, [(":status", "502")], True)
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
        parsed = urlsplit(self.origin)
        target = self.request["path"] if self.request["path"].startswith("/") else "/" + self.request["path"]
        lines = ["GET %s HTTP/1.1" % target]
        has_key = False
        has_version = False
        has_origin = False
        for name, value in self.request["headers"]:
            lower = name.lower()
            if lower in {"host", "connection", "upgrade", "content-length", "transfer-encoding"}:
                continue
            if lower == "sec-websocket-key":
                has_key = True
            elif lower == "sec-websocket-version":
                has_version = True
            elif lower == "origin":
                has_origin = True
            lines.append("%s: %s" % (name, value))
        host = parsed.netloc
        lines.append("Host: %s" % host)
        if not has_origin and self.request.get("authority"):
            lines.append("Origin: https://%s" % self.request["authority"])
        if not has_key:
            lines.append("Sec-WebSocket-Key: %s" % base64.b64encode(secrets.token_bytes(16)).decode())
        if not has_version:
            lines.append("Sec-WebSocket-Version: 13")
        lines.append("Connection: Upgrade")
        lines.append("Upgrade: websocket")
        self.sock.sendall(("\r\n".join(lines) + "\r\n\r\n").encode("iso-8859-1"))

    def write_to_origin(self):
        while not self.stopped.is_set():
            payload = self.incoming.get()
            if payload is None:
                return
            try:
                self.sock.sendall(payload)
            except OSError:
                self.stopped.set()
                return


class ControlStream:
    def __init__(self, connection, stream_id, logger):
        self.connection = connection
        self.stream_id = stream_id
        self.log = logger
        self.buffer = b""
        self.finished = False

    def start(self, account_tag, secret, tunnel_id, conn_index):
        self.connection.send_data(self.stream_id, capnp_bootstrap(0), False)
        self.connection.send_data(self.stream_id, capnp_register(1, 0, account_tag, secret, tunnel_id, conn_index), False)

    def feed(self, payload):
        self.buffer += payload
        messages, self.buffer = capnp_messages(self.buffer)
        for message in messages:
            try:
                result = capnp_return_result(message)
                if result["ok"]:
                    self.log.info("tunnel connection registered at %s", result.get("location", "unknown"))
                    self.connection.registered = True
                else:
                    self.log.warning("tunnel registration failed: %s", result.get("error", "unknown error"))
            except Exception as exc:
                self.log.debug("ignoring control RPC message: %s", exc)


def serialize_headers(headers):
    encoded = []
    for name, value in headers:
        name_bytes = base64.b64encode(name.encode()).decode().rstrip("=")
        value_bytes = base64.b64encode(value.encode()).decode().rstrip("=")
        encoded.append(name_bytes + ":" + value_bytes)
    return ";".join(encoded)


def open_origin_socket(origin):
    parsed = urlsplit(origin)
    if parsed.scheme not in {"http", "https"} or not parsed.hostname:
        raise ValueError("origin must be an http:// or https:// URL")
    port = parsed.port or (443 if parsed.scheme == "https" else 80)
    sock = socket.create_connection((parsed.hostname, port), timeout=30)
    if parsed.scheme == "https":
        context = ssl.create_default_context()
        sock = context.wrap_socket(sock, server_hostname=parsed.hostname)
    sock.settimeout(None)
    return sock


def proxy_to_origin(origin, method, request_path, incoming_headers, body):
    parsed = urlsplit(origin)
    if parsed.scheme not in {"http", "https"} or not parsed.hostname:
        raise ValueError("origin must be an http:// or https:// URL")
    port = parsed.port or (443 if parsed.scheme == "https" else 80)
    connection = http.client.HTTPConnection(parsed.hostname, port, timeout=30)
    if parsed.scheme == "https":
        connection = http.client.HTTPSConnection(parsed.hostname, port, timeout=30)
    headers = {}
    for name, value in incoming_headers:
        lower = name.lower()
        if lower in {"host", "connection", "transfer-encoding", "content-length"}:
            continue
        headers[name] = value
    headers["Host"] = parsed.netloc
    if body:
        headers["Content-Length"] = str(len(body))
    target = request_path if request_path.startswith("/") else "/" + request_path
    connection.request(method, target, body=body or None, headers=headers)
    response = connection.getresponse()
    return {"status": response.status, "headers": response.getheaders(), "body": response}


def read_exact(sock, count):
    chunks = []
    remaining = count
    while remaining:
        chunk = sock.recv(remaining)
        if not chunk:
            raise EOFError("connection closed")
        chunks.append(chunk)
        remaining -= len(chunk)
    return b"".join(chunks)


def connect_edge(verify_certificate, logger):
    candidates = list(EDGE_HOSTS)
    secrets.SystemRandom().shuffle(candidates)
    last_error = None
    for host in candidates:
        raw = None
        sock = None
        try:
            raw = socket.create_connection((host, EDGE_PORT), timeout=10)
            context = ssl.create_default_context() if verify_certificate else ssl._create_unverified_context()
            context.set_alpn_protocols(["h2"])
            sock = context.wrap_socket(raw, server_hostname="h2.cftunnel.com")
            if sock.selected_alpn_protocol() not in {None, "h2"}:
                raise OSError("edge did not negotiate h2")
            sock.settimeout(None)
            logger.info("connected to %s:%d", host, EDGE_PORT)
            return sock
        except (OSError, ssl.SSLError) as exc:
            last_error = exc
            if sock is not None:
                sock.close()
            elif raw is not None:
                raw.close()
            logger.warning("edge %s failed: %s", host, exc)
    raise OSError("all Cloudflare edges failed: %s" % last_error)


# ----------------------------------------------------------------------------
# 日志适配: cftunnel 的 %-格式化实例日志 -> agent 的 Logger 类方法
# ----------------------------------------------------------------------------
class _ArgoLogAdapter:
    # 让 cftunnel 内部 logger.info("...%s", arg) 风格调用落到 agent 的 Logger 上
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


# ----------------------------------------------------------------------------
# 单隧道实例: 注册快速隧道 + 后台守护线程维持云边长连接
# ----------------------------------------------------------------------------
class CloudflareQuickTunnel:
    # 单个 Cloudflare Quick Tunnel 实例
    # 1. start(): 向 api.trycloudflare.com 注册, 拿到临时公网域名并启动守护线程
    # 2. 守护线程维护与 Cloudflare Edge 的 HTTP/2 长连接, 断线自动重连
    # 3. stop(): 断开当前连接并退出守护线程
    def __init__(self, port, logger=None, quick_service=QUICK_SERVICE, retry_seconds=2.0, verify_certificate=False):
        self.port = port
        self.origin = "http://127.0.0.1:%d" % port
        self.log = logger if logger is not None else _ArgoLogAdapter()
        self.quick_service = quick_service
        self.retry_seconds = retry_seconds
        self.verify_certificate = verify_certificate
        self.hostname = None              # 临时公网域名 (含 https:// 前缀)
        self.created_at = None            # 注册成功时间戳 (int)
        self._stop = threading.Event()
        self._thread = None
        self._sock = None
        self._tunnel_state = {"printed": False}

    def start(self):
        # 幂等保护: 已启动则直接返回现有域名
        if self._thread is not None and self._thread.is_alive():
            return self.hostname
        hostname, account_tag, tunnel_secret, tunnel_id = request_quick_tunnel(self.quick_service)
        self.hostname = hostname if hostname.startswith("https://") else "https://" + hostname
        self.created_at = int(time.time())
        self._stop.clear()
        self._sock = None
        self._thread = threading.Thread(
            target=self._run_loop,
            args=(account_tag, tunnel_secret, tunnel_id),
            daemon=True,
            name="argo-tunnel-%d" % self.port,
        )
        self._thread.start()
        return self.hostname

    def _run_loop(self, account_tag, tunnel_secret, tunnel_id):
        while not self._stop.is_set():
            sock = None
            try:
                sock = connect_edge(self.verify_certificate, self.log)
                self._sock = sock
                H2Connection(
                    sock,
                    self.origin,
                    account_tag,
                    tunnel_secret,
                    tunnel_id,
                    0,
                    self.log,
                    self.hostname,
                    True,
                    self._tunnel_state,
                ).run()
            except KeyboardInterrupt:
                return
            except (OSError, EOFError, ValueError) as exc:
                self.log.warning("tunnel connection closed: %s", exc)
            finally:
                if sock is not None:
                    try:
                        sock.close()
                    except OSError:
                        pass
                self._sock = None
            if self._stop.is_set():
                return
            self._stop.wait(self.retry_seconds)

    def stop(self):
        # 断开当前云边连接并退出守护线程
        self._stop.set()
        sock = self._sock
        if sock is not None:
            try:
                sock.shutdown(socket.SHUT_RDWR)
            except OSError:
                pass
            try:
                sock.close()
            except OSError:
                pass
        if self._thread is not None:
            self._thread.join(timeout=2)


# ----------------------------------------------------------------------------
# 隧道管理器: 多隧道注册表 + 默认同端口单隧道策略
# ----------------------------------------------------------------------------
class ArgoTunnelError(Exception):
    # 隧道创建失败统一异常: status_code 决定 HTTP 状态码 (409=重复被拒, 500=创建失败)
    def __init__(self, status_code, message):
        super().__init__(message)
        self.status_code = status_code
        self.message = message


class ArgoTunnelManager:
    # 管理全部 Cloudflare 临时隧道:
    # - 默认同一端口只允许一条隧道, 携带 duplicate=True 才可重复创建
    # - 线程安全: 查询 / 创建 / 停止均加锁
    def __init__(self, logger=None):
        self._tunnels = []                      # 全部隧道实例 (按创建顺序)
        self._by_port = {}                      # port -> [隧道实例] (允许重复)
        self._lock = threading.Lock()
        self.log = logger if logger is not None else _ArgoLogAdapter()

    def list_tunnels(self):
        # 返回已注册成功的临时隧道 (域名 / 端口 / 创建时间)
        with self._lock:
            return [
                {
                    "tunnel_domain": tunnel.hostname,
                    "port": tunnel.port,
                    "created_at": datetime.fromtimestamp(tunnel.created_at, timezone.utc).isoformat().replace("+00:00", "Z"),
                }
                for tunnel in self._tunnels
                if tunnel.hostname is not None
            ]

    def create_tunnel(self, port, duplicate=False):
        # 重复策略: 同端口已有隧道且未声明 duplicate 时拒绝 (409)
        with self._lock:
            if self._by_port.get(port) and not duplicate:
                raise ArgoTunnelError(
                    409,
                    "tunnel already exists on port %d, set duplicate=true to force creation" % port,
                )
        # 注册 + 建连属于网络操作, 放在锁外执行, 避免长时间阻塞查询接口
        tunnel = CloudflareQuickTunnel(port=port, logger=self.log)
        try:
            tunnel.start()
        except Exception as exc:
            self.log.warning("create tunnel on port %d failed: %s", port, exc)
            raise ArgoTunnelError(500, "failed to create tunnel: %s" % exc) from exc
        with self._lock:
            self._tunnels.append(tunnel)
            self._by_port.setdefault(port, []).append(tunnel)
        return {
            "status": "ok",
            "created": True,
            "tunnel_domain": tunnel.hostname,
            "port": port,
            "created_at": datetime.fromtimestamp(tunnel.created_at, timezone.utc).isoformat().replace("+00:00", "Z"),
        }

    def delete_tunnel(self, port, tunnel_domain=None):
        # 删除指定端口的临时隧道
        # - 端口无隧道 -> 404
        # - 同端口多条隧道且未指定域名 -> 409 (避免误删)
        # - 指定了域名但端口上无匹配 -> 404
        # 停止隧道属于 IO / 线程操作, 在锁外执行
        with self._lock:
            candidates = self._by_port.get(port) or []
            if not candidates:
                raise ArgoTunnelError(404, "no tunnel found on port %d" % port)
            if tunnel_domain is not None:
                targets = [t for t in candidates if t.hostname == tunnel_domain]
                if not targets:
                    raise ArgoTunnelError(
                        404, "no tunnel found on port %d with domain %s" % (port, tunnel_domain)
                    )
            elif len(candidates) > 1:
                raise ArgoTunnelError(
                    409,
                    "multiple tunnels exist on port %d, specify tunnel_domain to disambiguate" % port,
                )
            else:
                targets = list(candidates)
            remaining = [t for t in candidates if t not in targets]
            if remaining:
                self._by_port[port] = remaining
            else:
                self._by_port.pop(port, None)
            self._tunnels = [t for t in self._tunnels if t not in targets]
            deleted_info = [
                {
                    "tunnel_domain": t.hostname,
                    "port": t.port,
                    "created_at": datetime.fromtimestamp(t.created_at, timezone.utc).isoformat().replace("+00:00", "Z"),
                }
                for t in targets
            ]
        for tunnel in targets:
            tunnel.stop()
        return {"status": "ok", "deleted": len(targets), "port": port, "tunnels": deleted_info}

    def stop_all(self):
        # 停止全部隧道并清空注册表 (应用关闭时调用)
        with self._lock:
            tunnels = list(self._tunnels)
            self._tunnels.clear()
            self._by_port.clear()
        for tunnel in tunnels:
            tunnel.stop()


# ----------------------------------------------------------------------------
# 请求 / 响应模型
# ----------------------------------------------------------------------------
class ArgoTunnelInfo(BaseModel):
    # 单条临时隧道信息
    tunnel_domain: str = Field(..., description="临时隧道公网域名", examples=["https://lucky-wildflower-1a2b3c4d.trycloudflare.com"])
    port: int = Field(..., description="隧道转发的本地端口", examples=[8000])
    created_at: str = Field(..., description="创建时间 (ISO8601 UTC)", examples=["2026-08-18T10:00:00Z"])


class ArgoTunnelListResponse(SResponse):
    # GET /api/argo 响应
    count: int = Field(..., description="隧道数量", examples=[1])
    tunnels: List[ArgoTunnelInfo] = Field(..., description="临时隧道列表", examples=[[]])


class ArgoTunnelCreateRequest(BaseModel):
    # POST /api/argo 请求体
    port: Optional[int] = Field(default=None, ge=1, le=65535, description="隧道转发端口, 缺省使用 agent 自身监听端口", examples=[8000])
    duplicate: bool = Field(default=False, description="是否允许同一端口重复建隧道 (默认 false)", examples=[False])


class ArgoTunnelCreateResponse(BaseModel):
    # POST /api/argo 响应 (创建失败时 tunnel_domain / created_at 缺省, 附 message)
    status: str = Field(..., description='"ok" 或 "error"', examples=["ok"])
    created: bool = Field(..., description="隧道创建结果", examples=[True])
    tunnel_domain: Optional[str] = Field(default=None, description="临时隧道公网域名", examples=["https://lucky-wildflower-1a2b3c4d.trycloudflare.com"])
    port: int = Field(..., description="本次请求的转发端口", examples=[8000])
    created_at: Optional[str] = Field(default=None, description="创建时间 (ISO8601 UTC)", examples=["2026-08-18T10:00:00Z"])
    message: Optional[str] = Field(default=None, description="失败原因", examples=["tunnel already exists on port 8000, set duplicate=true to force creation"])


class ArgoTunnelDeleteRequest(BaseModel):
    # DELETE /api/argo 请求体
    port: int = Field(..., ge=1, le=65535, description="要删除的隧道转发端口", examples=[8000])
    tunnel_domain: Optional[str] = Field(default=None, description="同端口多隧道时用于精确定位", examples=["https://lucky-wildflower-1a2b3c4d.trycloudflare.com"])


class ArgoTunnelDeleteResponse(BaseModel):
    # DELETE /api/argo 响应 (失败时 tunnels 缺省, 附 message)
    status: str = Field(..., description='"ok" 或 "error"', examples=["ok"])
    deleted: int = Field(..., description="实际删除的隧道数量 (成功时 >=1)", examples=[1])
    port: int = Field(..., description="本次请求的端口", examples=[8000])
    tunnels: Optional[List[ArgoTunnelInfo]] = Field(default=None, description="已删除隧道的明细", examples=[[]])
    message: Optional[str] = Field(default=None, description="失败原因", examples=["no tunnel found on port 8000"])


# ============================================================================
# 🔄 应用生命周期管理 (lifespan)
# ============================================================================

@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    应用启动/关闭时的生命周期管理
    ✅ 确保管理器在路由处理前初始化并挂载到 app.state
    """
    # 🚀 启动时: 校验配置并初始化加密管理器
    Logger.debug("🔧 初始化管理器...")
    Config.validate()
    init_crypto()
    
    app.state.file_manager = FileManager(
        root=Config.FILE_ROOT,
        max_upload=Config.MAX_UPLOAD_SIZE,
        chunk_size=int(os.getenv("CHUNK_THRESHOLD", "20971520")),
        audit=Config.FILE_AUDIT_LOG
    )
    
    app.state.task_manager = TaskManager(
        timeout=Config.TASK_TIMEOUT,
        check_interval=Config.CRON_CHECK_INTERVAL
    )
    
    app.state.temp_key_manager = TempKeyManager()

    app.state.argo_tunnel_manager = ArgoTunnelManager()
    
    if Config.DEBUG:
        Logger.debug(f"✅ 管理器已挂载到 app.state")
        Logger.debug(f"   • file_manager: {app.state.file_manager}")
        Logger.debug(f"   • task_manager: {app.state.task_manager}")
    
    
    yield  # 🔑 关键: 应用在此处运行
    
    # 🛑 关闭时: 清理资源 (可选)
    if Config.DEBUG:
        Logger.debug("🛑 应用关闭，清理资源...")
    
    # 示例: 停止定时任务循环
    if hasattr(app.state, 'task_manager'):
        try:
            app.state.task_manager.stop_cron_loop()
        except:
            pass  # 忽略清理错误

    # 🌐 关闭时: 停止全部临时隧道, 释放云边连接
    if hasattr(app.state, 'argo_tunnel_manager'):
        try:
            app.state.argo_tunnel_manager.stop_all()
        except Exception:
            pass  # 忽略清理错误

# ============================================================================
# 📊 业务路由: 状态接口等
# ============================================================================
app = FastAPI(
    title="Proxy Agent API",
    description="单文件部署版 - 支持签名认证与响应加密",
    version=Config.AGENT_VERSION,
    docs_url="/docs" if Config.DEBUG else None,
    redoc_url=None,
    lifespan=lifespan  # 🔧 添加这行!
)
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],   # 或指定 ["X-Nonce", "X-Timestamp", ...]
    expose_headers=["x-encrypted"], 
)
# 注册中间件
app.add_middleware(AuthEncryptMiddleware)

# ============================================================================
# 🌐 Argo 临时隧道模块: RESTful 路由
# ============================================================================

@app.get("/api/argo", response_model=ArgoTunnelListResponse)
async def list_argo_tunnels(request: Request):
    # 查询当前已创建的 Cloudflare 临时隧道列表 (隧道域名 / 转发端口 / 创建时间)
    manager = request.app.state.argo_tunnel_manager
    tunnels = manager.list_tunnels()
    return {"status": "ok", "count": len(tunnels), "tunnels": tunnels}


@app.post("/api/argo", response_model=ArgoTunnelCreateResponse, response_model_exclude_none=True)
async def create_argo_tunnel(
    request: Request,
    payload: ArgoTunnelCreateRequest = Body(...),
):
    # 创建 Cloudflare 临时隧道 (trycloudflare Quick Tunnel)
    # - port 缺省时使用 agent 自身监听端口 (KPORT / PORT / SERVER_PORT, 默认 8000)
    # - 默认同一端口只允许一条隧道 (409); duplicate=true 时强制创建
    # - 创建失败 (cloudflared 注册 / 网络异常) 返回 500
    manager = request.app.state.argo_tunnel_manager
    port = payload.port if payload.port is not None else Config.PORT
    try:
        return manager.create_tunnel(port, duplicate=payload.duplicate)
    except ArgoTunnelError as exc:
        return JSONResponse(
            status_code=exc.status_code,
            content={"status": "error", "created": False, "port": port, "message": exc.message},
        )


@app.delete("/api/argo", response_model=ArgoTunnelDeleteResponse, response_model_exclude_none=True)
async def delete_argo_tunnel(
    request: Request,
    payload: ArgoTunnelDeleteRequest = Body(...),
):
    # 删除指定端口的临时隧道
    # - 端口无隧道 -> 404; 同端口多隧道未指定域名 -> 409; 指定域名无匹配 -> 404
    manager = request.app.state.argo_tunnel_manager
    try:
        return manager.delete_tunnel(payload.port, tunnel_domain=payload.tunnel_domain)
    except ArgoTunnelError as exc:
        return JSONResponse(
            status_code=exc.status_code,
            content={"status": "error", "deleted": 0, "port": payload.port, "message": exc.message},
        )


async def get_smart_payload(request: Request) -> ExecRequestJSON:
    """
    智能解析依赖项：
    1. 获取 Body
    2. 尝试转为 ExecRequestJSON 对象
    3. 如果失败，将全文包装进 ExecRequestJSON(cmd=body)
    """
    body_bytes = await request.body()
    body_str = body_bytes.decode('utf-8').strip()
    
    if not body_str:
        raise HTTPException(status_code=400, detail="Empty request body")

    try:
        # 尝试作为 JSON 解析
        return ExecRequestJSON.model_validate_json(body_str)
    except Exception:
        # 解析失败，说明是纯文本，手动构造模型返回
        # 这样下游业务逻辑永远拿到的都是 ExecRequestJSON 对象
        return ExecRequestJSON(cmd=body_str)

@app.get("/api/baseinfo", response_model=BaseInfoResponse)
async def get_baseinfo(request: Request):
    """
    获取代理端基础信息
    🔐 带 1 小时高性能缓存机制
    🔐 有认证头时返回完整加密信息，无认证头时返回基础明文（剔除动态密钥）
    """
    now = time.time()
    
    # 确保异步锁已安全初始化
    if Config._baseinfo_lock is None:
        Config._baseinfo_lock = asyncio.Lock()
        
    async with Config._baseinfo_lock:
        # 检查缓存是否失效或从未加载过
        if (Config._baseinfo_cache is None or 
                now - Config._baseinfo_cache_time > Config.BASEINFO_CACHE_TTL):
            
            # 真正触发底层高能耗的资源收集器
            Config._baseinfo_cache = await SystemInfoCollector().get_basic_info()
            Config._baseinfo_cache_time = now
            Logger.debug("🔄 [Cache] BaseInfo 缓存已过期，已重新调度系统资源进行更新。")
        else:
            Logger.debug("📦 [Cache] BaseInfo 命中有效缓存，直接输出。")
            
        # ⚠️ 关键安全步骤：使用 .copy() 浅拷贝出一份副本进行上层组装
        # 确保动态追加的凭证不会污染全局静态缓存，防止越权暴露
        basic_info = Config._baseinfo_cache.copy()
    
    # 根据中间件标记的当前单次请求认证状态，动态决定是否下发敏感密钥
    # 默认未认证：仅显式 true 才下发敏感密钥，防止中间件漏设状态导致越权泄露
    if getattr(request.state, "is_authenticated", False):
        basic_info["session_key"] = Config.SESSION_KEY
        basic_info["noise_key"] = Config.NOISE_KEY
    else:
        basic_info["session_key"] = None
        basic_info["noise_key"] = None
        
    return basic_info


@app.get("/api/status", response_model=StatusResponse)
async def get_realtime_status(request: Request):
    """
    获取代理端实时监控信息
    🔐 带 30 秒防刷缓存机制，完美平衡面板数据实时性与 CPU 算力损耗
    🔐 有认证头时返回加密密文，无认证头时直接放行返回明文 JSON
    """
    now = time.time()
    
    # 确保异步锁已安全初始化
    if Config._status_lock is None:
        Config._status_lock = asyncio.Lock()
        
    async with Config._status_lock:
        # 检查 30 秒状态缓存是否过期
        if (Config._status_cache is None or 
                now - Config._status_cache_time > Config.STATUS_CACHE_TTL):
            
            # 重新获取消耗资源的磁盘 IO / 进程网卡快照
            Config._status_cache = await SystemInfoCollector().get_realtime_info()
            Config._status_cache_time = now
            Logger.debug("🔄 [Cache] Status 实时监控缓存已过期，已重新生成度量快照。")
        else:
            Logger.debug("📦 [Cache] Status 命中监控缓存。")
            
        status_info = Config._status_cache.copy()
        
    return status_info

@app.post("/api/exec", response_model=ExecResponse)
async def exec_command(
    payload: ExecRequestJSON = Depends(get_smart_payload)  # 👈 核心：自动转换
):
    """
    执行系统命令接口
    现在的 payload 永远是 ExecRequestJSON 对象，无论客户端发的是 JSON 还是纯文本
    """
    # 直接使用，不再需要判断和解析
    cmd = payload.cmd
    cwd = payload.cwd
    env_override = payload.env

    # 3. 准备执行参数
    timeout = Config.Rtimeout
    use_shell = Config.EXEC_SHELL_MODE
    
    exec_kwargs = {
        "shell": use_shell,
        "stdout": subprocess.PIPE,
        "stderr": subprocess.STDOUT,
        "stdin": subprocess.DEVNULL,
        "timeout": timeout,
        "text": True,
        "errors": "replace",
        "cwd": cwd,
    }

    # 处理环境变量合并
    if env_override:
        exec_kwargs["env"] = {**os.environ, **env_override}

    # 4. 执行并利用 ExecResponse 自动序列化返回
    try:
        res = subprocess.run(cmd, **exec_kwargs)
        return {
            "result": res.stdout,
            "exitcode": res.returncode,
            "timeout": False,
            "cmd": cmd
        }
    except subprocess.TimeoutExpired as e:
        return {
            "result": f"[TIMEOUT]\n{e.output or ''}",
            "exitcode": 124,
            "timeout": True,
            "cmd": cmd
        }
    except Exception as e:
        return {
            "result": f"[ERROR] {str(e)}",
            "exitcode": -1,
            "timeout": False,
            "cmd": cmd
        }


# ============================================================================
# 🔑 临时密钥模块: RESTful 路由
# ============================================================================

@app.get("/api/tempkey", response_model=TempKeyResponse)
async def get_tempkey(
    request: Request,
    ttl: int = Query(Config.TEMPKEY_DEFAULT_TTL_HOURS, ge=1, le=Config.TEMPKEY_MAX_TTL_HOURS)
):
    """
    获取临时密钥对 (ECDSA + ECIES)，用于临时授权第三方/AI Agent 访问本代理
    - 有效期内重复请求返回同一密钥对 (幂等, 不重复生成)
    - 过期后自动生成新的密钥对, 旧密钥立即作废
    - 临时持有者: 用 ecdsa.private_key 签名请求, 用 ecies.private_key 解密响应
    """
    manager = request.app.state.temp_key_manager
    key = manager.get_or_create(ttl)

    return TempKeyResponse(
        status="ok",
        key_id=key["key_id"],
        ttl_seconds=key["ttl_seconds"],
        created_at=datetime.utcfromtimestamp(key["created_at"]).isoformat() + "Z",
        expires_at=datetime.utcfromtimestamp(key["expires_at"]).isoformat() + "Z",
        ecdsa=TempKeyEcdsaPair(
            private_key=key["ecdsa_private_key"].strip(),
            public_key=key["ecdsa_public_key"].strip()
        ),
        ecies=TempKeyEciesPair(
            private_key=key["ecies_private_key"],
            public_key=key["ecies_public_key"]
        )
    )


class TaskManager:
    """
    任务管理器 - 纯内存存储，动态执行
    - 启动任务: 一次性执行，执行后自动清除
    - 定时任务: Crontab 表达式调度，后台循环检查
    """
    
    def __init__(self, timeout: int = 300, check_interval: int = 30, 
                 max_log_size: int = None):
        self.timeout = timeout
        self.check_interval = check_interval
        self.max_log_size = max_log_size or Config.MAX_TASK_LOG_SIZE
        
        # 初始化日志缓冲 (使用 deque 自动淘汰)
        Config.onetimetasks_log = deque(Config.onetimetasks_log, maxlen=self.max_log_size)
        Config.crontasks_log = deque(Config.crontasks_log, maxlen=self.max_log_size)
        
        self._cron_task: Optional[asyncio.Task] = None
        self._running = False
        self._executed_crons: set = set()
    
    # ================= 启动任务 (One-time) =================
    
    def set_onetime_tasks(self, tasks: List[str]) -> dict:
        """设置启动任务列表"""
        Config.onetasks = tasks if tasks else []
        return {"status": "ok", "count": len(Config.onetasks), "tasks": Config.onetasks}
    
    def get_onetime_tasks(self) -> dict:
        """获取启动任务列表"""
        return {"status": "ok", "count": len(Config.onetasks), "tasks": Config.onetasks}
    
        # ================= 启动任务 (带日志) =================
    
    def run_onetime_tasks(self) -> List[dict]:
        """执行启动任务并记录日志"""
        if not Config.InitTask or not Config.onetasks:
            return []
        
        results = []
        tasks_to_run = Config.onetasks.copy()
        for i, cmd in enumerate(tasks_to_run):
            start_time = datetime.utcnow()
            try:
                if Config.DEBUG:
                    Logger.debug(f"🚀 [OneTime-{i+1}] Executing: {cmd[:100]}...")
                
                result = subprocess.run(
                    cmd, shell=True,
                    stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
                    stdin=subprocess.DEVNULL,
                    timeout=self.timeout, text=True, errors="replace"
                )
                
                output = result.stdout[:2000]  # 限制输出长度防日志爆炸
                exitcode = result.returncode
                
                # 📝 记录日志
                log_entry = self._format_log_entry(cmd, output, exitcode, "onetime")
                Config.onetimetasks_log = self._append_task_log(
                    Config.onetimetasks_log, log_entry, self.max_log_size
                )
                
                results.append({
                    "index": i, "cmd": cmd[:200], "exitcode": exitcode,
                    "output": output[:500], "status": "ok"
                })
                
            except subprocess.TimeoutExpired as e:
                output = f"[TIMEOUT] {e.output[:500] if e.output else ''}"
                exitcode = 124
                
                log_entry =  self._format_log_entry(cmd, output, exitcode, "onetime")
                Config.onetimetasks_log = self._append_task_log(
                    Config.onetimetasks_log, log_entry, self.max_log_size
                )
                
                results.append({
                    "index": i, "cmd": cmd[:200], "exitcode": exitcode,
                    "output": output[:500], "status": "timeout"
                })
            except Exception as e:
                output = f"[ERROR] {type(e).__name__}: {str(e)}"
                exitcode = -1
                
                log_entry =  self._format_log_entry(cmd, output, exitcode, "onetime")
                Config.onetimetasks_log = self._append_task_log(
                    Config.onetimetasks_log, log_entry, self.max_log_size
                )
                
                results.append({
                    "index": i, "cmd": cmd[:200], "exitcode": exitcode,
                    "output": output, "status": "error"
                })
        
        # ✅ 执行完成后清除任务
        Config.InitTask = False
        
        if Config.DEBUG:
            Logger.debug(f"✅ [OneTime] Completed {len(results)} tasks, logged to onetimetasks_log")
        
        return results
    
    # ================= 定时任务 (带日志) =================
    
    async def _check_and_run_cron(self):
        """检查并执行到期的定时任务 (修复逻辑并保留日志)"""
        if not Config.crontasks:
            return
        
        # 统一使用本地时间进行调度匹配 (与系统 cron 习惯一致)
        now = datetime.now()
        
        for cron_expr, cmd in Config.crontasks.items():
            try:
                # 1. 计算【刚才/当前】最近的一个计划运行时间点
                # 比如现在 12:00:05，cron 表达式是每分钟，那么 prev_run 就是 12:00:00
                cron = croniter(cron_expr, now)
                prev_run = cron.get_prev(datetime)
                
                # 2. 计算当前时间距离“计划时间”过去了多久
                time_passed = (now - prev_run).total_seconds()
                
                # 3. 触发判定窗口：
                # 如果距离计划时间在 (检查间隔 + 宽限期) 之内，说明现在该跑
                # 宽限期设为 5-10s 确保在 30s 检查一次的情况下不会漏掉
                if 0 <= time_passed <= (self.check_interval + 5):
                    
                    # 4. 防重复执行：hash 必须包含【计划运行的时间戳】
                    # 这样在 12:00:05 和 12:00:35 两次检查时，算出的 ID 是一样的，确保只跑一次
                    time_slug = prev_run.strftime('%Y%m%d%H%M')
                    task_id = f"{cron_expr}:{cmd}:{time_slug}"
                    task_hash = hashlib.md5(task_id.encode()).hexdigest()[:10]
                    
                    if task_hash in self._executed_crons:
                        continue
                    
                    if Config.DEBUG:
                        Logger.info(f"⏰ [Cron] Triggered: {cron_expr} → {cmd[:50]}... (Lag: {time_passed:.2f}s)")
                    
                    # 5. 执行异步子进程
                    proc = await asyncio.create_subprocess_shell(
                        cmd,
                        stdout=asyncio.subprocess.PIPE,
                        stderr=asyncio.subprocess.STDOUT,
                        stdin=asyncio.subprocess.DEVNULL
                    )
                    
                    try:
                        # 等待执行结果
                        stdout, _ = await asyncio.wait_for(
                            proc.communicate(), timeout=self.timeout
                        )
                        output = stdout.decode('utf-8', errors='replace')[:2000]
                        exitcode = proc.returncode
                    except asyncio.TimeoutError:
                        try:
                            proc.kill()
                        except:
                            pass
                        output = "[TIMEOUT]"
                        exitcode = 124
                    except Exception as inner_e:
                        output = f"[RUNTIME_ERROR] {str(inner_e)}"
                        exitcode = -1
                    
                    # 6. 📝 记录日志 (调用你原有的格式化方法)
                    log_entry = self._format_log_entry(cmd, output, exitcode, "cron", cron_expr)
                    Config.crontasks_log = self._append_task_log(
                        Config.crontasks_log, log_entry, self.max_log_size
                    )
                    
                    # 7. 标记已执行，并设置定时清理（防止集合无限增大）
                    self._executed_crons.add(task_hash)
                    # 2分钟后丢弃该 hash，足够跳过当前的触发窗口
                    asyncio.get_event_loop().call_later(
                        120, self._executed_crons.discard, task_hash
                    )
                    
            except Exception as e:
                if Config.DEBUG:
                    Logger.error(f"❌ [Cron] Scheduler Error for '{cron_expr}': {e}")
                # 记录调度异常到日志
                output = f"[SCHEDULER_ERROR] {type(e).__name__}: {str(e)}"
                log_entry = self._format_log_entry(cmd, output, -1, "cron", cron_expr)
                Config.crontasks_log = self._append_task_log(
                    Config.crontasks_log, log_entry, self.max_log_size
                )
      # ================= 日志获取方法 =================
    
    def get_onetime_log(self, limit: int = None) -> list:
        """获取启动任务日志 (最近 limit 条)"""
        logs = list(Config.onetimetasks_log)
        if limit and limit > 0:
            return logs[-limit:]  # 返回最新的 limit 条
        return logs
    
    def get_cron_log(self, limit: int = None) -> list:
        """获取定时任务日志 (最近 limit 条)"""
        logs = list(Config.crontasks_log)
        if limit and limit > 0:
            return logs[-limit:]
        return logs
    
    def clear_logs(self, log_type: str = "all"):
        """清空日志 (可选接口)"""
        if log_type in ["onetime", "all"]:
            Config.onetimetasks_log.clear()
        if log_type in ["cron", "all"]:
            Config.crontasks_log.clear()
        return {"status": "ok", "cleared": log_type}
    def set_cron_tasks(self, tasks: Dict[str, str]) -> dict:
        """
        设置定时任务 {cron_expr: command}
        :param tasks: 如 {"*/5 * * * *": "echo hello", "0 2 * * *": "backup.sh"}
        """
        # 验证 cron 表达式
        invalid = []
        for cron_expr in tasks.keys():
            try:
                croniter(cron_expr, datetime.now())
            except Exception:
                invalid.append(cron_expr)
        
        if invalid:
            return {
                "status": "error",
                "message": f"Invalid cron expressions: {invalid}",
                "valid_count": len(tasks) - len(invalid)
            }
        
        Config.crontasks = tasks if tasks else {}
        
        # 控制循环开关: 有任务则启动，无任务则停止
        if Config.crontasks and not Config.cronloop:
            self.start_cron_loop()
        elif not Config.crontasks and Config.cronloop:
            self.stop_cron_loop()
        
        return {"status": "ok", "count": len(Config.crontasks), "tasks": Config.crontasks}

    def get_cron_tasks(self) -> dict:
        """获取定时任务列表"""
        return {"status": "ok", "count": len(Config.crontasks), "tasks": Config.crontasks}
    
    def start_cron_loop(self):
        """启动定时任务后台循环"""
        if Config.cronloop and self._running:
            return {"status": "ok", "message": "Cron loop already running"}
        
        Config.cronloop = True
        self._running = True
        self._executed_crons.clear()
        
        # 在 asyncio 事件循环中启动后台任务
        try:
            loop = asyncio.get_event_loop()
            self._cron_task = loop.create_task(self._cron_loop_worker())
            if Config.DEBUG:
                Logger.info(f"🔄 [Cron] Loop started, interval={self.check_interval}s")
        except RuntimeError:
            # 无事件循环时 (如同步调用), 创建新线程运行
            import threading
            thread = threading.Thread(target=self._run_cron_sync, daemon=True)
            thread.start()
            if Config.DEBUG:
                Logger.info(f"🔄 [Cron] Loop started in thread, interval={self.check_interval}s")
        
        return {"status": "ok", "message": "Cron loop started"}
    
    def stop_cron_loop(self):
        """停止定时任务后台循环"""
        Config.cronloop = False
        self._running = False
        if self._cron_task:
            self._cron_task.cancel()
            self._cron_task = None
        if Config.DEBUG:
            Logger.info(f"🛑 [Cron] Loop stopped")
        return {"status": "ok", "message": "Cron loop stopped"}
    
    async def _cron_loop_worker(self):
        """异步后台循环: 定期检查并执行到期的定时任务"""
        while self._running and Config.cronloop:
            try:
                await self._check_and_run_cron()
            except Exception as e:
                if Config.DEBUG:
                    Logger.error(f"❌ [Cron] Loop error: {e}")
            await asyncio.sleep(self.check_interval)
    
    def _run_cron_sync(self):
        """同步模式下的循环 (无 asyncio 时备用)"""
        import time
        while self._running and Config.cronloop:
            try:
                # 同步执行检查 (简化版, 不阻塞主线程太久)
                asyncio.run(self._check_and_run_cron())
            except:
                pass
            time.sleep(self.check_interval)

    @staticmethod
    def _append_task_log(log_list: deque, entry: dict, max_size: int = None):
        """
        添加任务日志到环形缓冲
        :param log_list: deque 实例 (用于自动淘汰)
        :param entry: 日志条目 dict
        :param max_size: 最大条数 (默认用 Config.MAX_TASK_LOG_SIZE)
        """
        if max_size is None:
            max_size = Config.MAX_TASK_LOG_SIZE
        
        # 确保是 deque (支持 maxlen 自动淘汰)
        if not isinstance(log_list, deque):
            # 转换现有列表为 deque
            log_list = deque(log_list, maxlen=max_size)
        
        log_list.append(entry)
        return log_list
    @staticmethod
    def _format_log_entry(cmd: str, output: str, exitcode: int, 
                        task_type: str, cron_expr: str = None) -> dict:
        """
        格式化日志条目
        :return: 标准日志 dict
        """
        return {
            "ts": datetime.utcnow().isoformat() + "Z",  # UTC 时间
            "cmd": cmd,
            "output": output,
            "exitcode": exitcode,
            "type": task_type,  # "onetime" or "cron"
            "cron": cron_expr,   # 仅定时任务有
            # 可读格式: "2024-01-15T10:30:45Z ---- echo hello ---- exitcode=0\nhello"
            "formatted": f"{datetime.utcnow().isoformat()}Z ---- {cmd} ---- exitcode={exitcode}\n{output.strip()}"
        }
    # ================= 工具方法 =================
    
    def get_status(self) -> dict:
        """获取任务模块状态"""
        return {
            "onetime": {
                "pending": Config.InitTask and len(Config.onetasks) > 0,
                "count": len(Config.onetasks)
            },
            "cron": {
                "active": Config.cronloop,
                "count": len(Config.crontasks),
                "check_interval": self.check_interval
            }
        }
    
# ============================================================================
# 📁 文件模块: RESTful 路由 (重构版)
# ============================================================================
# --- POST /api/file/list : 列出文件 ---
@app.post("/api/file/list", response_model=FileListResponse)
async def file_list(
    request: Request,
    body: FileListRequest = Body(...) # 👈 注入模型
):
    fm = request.app.state.file_manager
    result = fm.list_files(
        base_path=body.path,
        recursive=body.recursive
    )
    return result


# --- POST /api/file/authority : 批量查询权限 ---
@app.post("/api/file/authority", response_model=AuthorityQueryResponse)
async def file_authority(
    request: Request,
    body: AuthorityQueryRequest = Body(...)
):
    if not body.paths:
        return JSONResponse(status_code=400, content={ "status:":"error","files": []})
    
    fm = request.app.state.file_manager
    result = fm.get_authority(body.paths)
    return result


# --- PUT /api/file/authority : 批量设置权限 ---
@app.put("/api/file/authority", response_model=AuthoritySetResponse)
async def file_set_authority(
    request: Request,
    body: AuthoritySetRequest = Body(...)
):
    # 处理可能的嵌套格式兼容 (如果前端发的是 {"permissions": {...}, "recursive": false})
    # 由于我们定义了 model 就是这种结构，所以直接使用即可
    perm_map = body.permissions
    recursive = body.recursive
    
    if not perm_map:
        return JSONResponse(
            status_code=400,
            content={
                "status": "error",
                "total": 0,
                "success": 0,
                "results": []
            }
        )
    
    fm = request.app.state.file_manager
    result = fm.set_authority(perm_map, recursive)
    return result


# --- POST /api/file/cat : 查看文件文本内容 ---
@app.post("/api/file/cat", response_model=FileCatResponse)
async def file_cat(
    request: Request,
    body: FileCatRequest = Body(...)
):
    if not body.path:
        return JSONResponse(
            status_code=400,
            content={
                "status": "error",
                "path": "",
                "content": "",
                "encoding": "",
                "is_binary": False,
                "size": 0
            }
        )
    
    fm = request.app.state.file_manager
    result = fm.cat_file(body.path)
    return result


# --- POST /api/file : 上传文件 ---
@app.post("/api/file", response_model=FileUploadResponse)
async def file_upload(
    request: Request,
    body: FileUploadRequest = Body(...)
):
    if not body.content:
        return JSONResponse(
            status_code=400,
            content={
                "status": "content (base64) required",
                "path": None,
                "received": None,
                "total": None,
                "chunked": None
            }
        )
    
    try:
        file_content = base64.b64decode(body.content)
    except Exception:
        return JSONResponse(
            status_code=400,
            content={
                "status": "Invalid base64 content",
                "path": None,
                "received": None,
                "total": None,
                "chunked": None
            })
    
    fm = request.app.state.file_manager
    result = fm.upload_file(
        file_content=file_content,
        target_path=body.path,
        filename=body.filename,
        chunk_id=body.chunk_id,
        total_chunks=body.total_chunks
    )
    return result
# ============================================================================
# 🚀 裸二进制流文件上传接口 (支持结构体返回，零体积膨胀)
# ============================================================================
@app.post("/api/fileraw", response_model=FileUploadRawResponse)
async def file_upload_raw(request: Request):
    headers = request.headers
    
    # 1. 从 HTTP Header 中提取元数据
    file_path = unquote(headers.get("X-File-Path", ""))
    filename = unquote(headers.get("X-File-Name", ""))
    chunk_id_raw = headers.get("X-Chunk-Id")
    total_chunks_raw = headers.get("X-Total-Chunks")
    
    if not file_path or not filename:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, 
            detail="Missing required custom headers: X-File-Path and X-File-Name"
        )
        
    chunk_id = int(chunk_id_raw) if chunk_id_raw is not None else None
    total_chunks = int(total_chunks_raw) if total_chunks_raw is not None else None
    
    # 2. 读取 Body 中的裸二进制数据流
    file_content = await request.body()
    
    # 3. 移交给底层核心驱动进行落盘/分块累加
    fm = request.app.state.file_manager
    result = fm.upload_file(
        file_content=file_content,
        target_path=file_path,
        filename=filename,
        chunk_id=chunk_id,
        total_chunks=total_chunks
    )
    
    # 4. 🚀 强类型无感返回：直接实例化结构体，FastAPI 自动将其转化为精简 JSON
    if result.get("status") == "ok":
        return FileUploadRawResponse(
            status="ok",
            path=result.get("path"),
            chunk_id=chunk_id,
            completed=True,
            message="All chunks received. File merged successfully." if result.get("chunked") else "File uploaded successfully."
        )
        
    elif result.get("status") == "pending":
        return FileUploadRawResponse(
            status="ok",
            path=os.path.join(file_path, filename),
            chunk_id=chunk_id,
            completed=False,
            message=f"Chunk {chunk_id} uploaded. Waiting for remaining blocks."
        )
    
    return FileUploadRawResponse(
        status="error",
        completed=False,
        message=result.get("message", "Unknown upload error")
    )

# --- POST /api/file/download : 下载文件 ---
@app.post("/api/file/download")
async def file_download(
    request: Request,
    body: FileDownloadRequest = Body(...)
):
    if not body.path:
        return JSONResponse(400, {"error": "path required"})
    
    fm = request.app.state.file_manager
    file_path, mime_type, size = fm.download_file(body.path)
    
    from fastapi.responses import FileResponse
    return FileResponse(
        path=str(file_path),
        filename=file_path.name,
        media_type=mime_type,
        headers={
            "x-file-size": str(size),
            "x-original-path": str(file_path.relative_to(Path(Config.FILE_ROOT)))
        }
    )


# --- DELETE /api/file : 批量删除 ---
@app.delete("/api/file", response_model=FileDeleteResponse)
async def file_delete(
    request: Request,
    body: FileDeleteRequest = Body(...)
):
    # 兼容旧格式：如果 paths 为空，尝试从 path/path2 等字段提取
    paths = body.paths
    if not paths:
        # 这里需要从 request.body() 重新读取原始数据来兼容旧格式，因为 Pydantic 已经过滤了 exclude=True 的字段
        # 简单起见，我们要求新客户端使用 paths 字段。如果必须兼容，可以保留少量手动解析逻辑
        raw_body = await request.body()
        params = json.loads(raw_body.decode()) if raw_body else {}
        paths = [p for k in ["path", "path2", "p1", "p2"] if (p := params.get(k))]
    
    if not paths:
        return JSONResponse(status_code=400, content={"status": "error", "results": []})
    
    fm = request.app.state.file_manager
    result = fm.delete_paths(paths)
    return result


# --- PUT /api/file : 批量移动/重命名 ---
@app.put("/api/file", response_model=FileMoveResponse)
async def file_move(
    request: Request,
    # 修正：直接接收 Dict[str, str] 作为整个 Body，不再寻找 "move_map" 键
    move_map: Dict[str, str] = Body(..., examples={ "/tmp/old.txt": "/archive/old.txt" })
):
    if not move_map:
        return JSONResponse(status_code=400, content={"error": "At least one src->dst pair required"})
    
    fm = request.app.state.file_manager
    # 执行逻辑
    result = fm.move_paths(move_map) 
    return result
    
@app.post("/api/file/cp", response_model=FileMoveResponse)
async def file_copy(
    request: Request,
    # 直接接收字典映射作为整个请求体
    copy_map: Dict[str, str] = Body(..., description="源路径到目标路径的映射", examples=[{"/tmp/old.txt": "/archive/old.txt", "/tmp/logs": "/backup/logs"}])
):
    """
    批量复制文件/目录
    Body: {"src1": "dst1", "src2": "dst2", ...}
    
    行为说明:
    - 如果目标是目录，文件/目录会被复制到该目录下 (保持原名)
    - 如果目标路径已存在，该条目会标记为错误并跳过
    - 文件复制保留元数据 (mtime, mode 等)
    """
    if not copy_map:
        return JSONResponse(status_code=400, content={"error": "At least one src->dst pair required"})
    
    fm = request.app.state.file_manager
    # 调用 FileManager 的 copy_paths 方法
    result = fm.copy_paths(copy_map) 
    return result

# --- POST /api/file/new : 新建目录 ---
@app.post("/api/file/new", response_model=FileMkdirResponse)
async def file_mkdir(
    request: Request,
    body: FileMkdirRequest = Body(...)
):
    if not body.path:
        return JSONResponse(status_code=400, content={"status": "path required", "path": ""})
        
    
    fm = request.app.state.file_manager
    result = fm.create_directory(body.path)
    return result


# ============================================================================
# 📋 任务模块: RESTful 路由
# ============================================================================

# --- GET /api/task/onetime : 获取启动任务 ---
@app.get("/api/task/onetime", response_model=OneTimeTaskGetResponse)
async def get_onetime_tasks(request: Request):
    """获取待执行的启动任务列表"""
    tasks = request.app.state.task_manager.get_onetime_tasks()
    return tasks


# --- POST /api/task/onetime : 设置启动任务 ---
@app.post("/api/task/onetime", response_model=OneTimeTaskResponse)
async def set_onetime_tasks(
    request: Request,
    tasks: List[str] = Body(default=[])  # 👈 直接声明你需要一个字符串列表
):
    """
    设置启动任务列表
    请求体必须是: ["cmd1", "cmd2"]
    """
    # 1. 写入任务
    request.app.state.task_manager.set_onetime_tasks(tasks)
    # 2. 构建基础返回
    res = {
        "status": "ok",
        "count": len(tasks),
        "tasks": tasks
    }
    # 3. 触发立即执行逻辑
    if Config.InitTask and tasks:
        res["executed"] = request.app.state.task_manager.run_onetime_tasks()
    return res


# --- GET /api/task/cron : 获取定时任务 ---
@app.get("/api/task/cron", response_model=CronTasksResponse)
async def get_cron_tasks(request: Request):
    """获取定时任务列表"""
    result = request.app.state.task_manager.get_cron_tasks()
    return result


# --- POST /api/task/cron : 设置定时任务 ---
@app.post("/api/task/cron", response_model=CronTasksResponse)
async def set_cron_tasks(
    request: Request,
    # 🌟 直接注入字典，FastAPI 自动解析并验证
    tasks: Dict[str, str] = Body(default={}, examples=[{
    "*/10 * * * *": "python /opt/scripts/health_check.py",
    "0 0 * * 0": "/opt/scripts/weekly_report.sh"
    }])
):
    """
    设置定时任务 {cron_expr: command}
    Body: {"*/5 * * * *": "echo hello", "0 2 * * *": "backup.sh"}
    """
    result = request.app.state.task_manager.set_cron_tasks(tasks)
    return result


# --- GET /api/task/status : 获取任务模块状态 (辅助接口) ---
@app.get("/api/task/status", response_model=TaskStatusResponse)
async def get_task_status(request: Request):
    """获取任务模块运行状态"""
    return request.app.state.task_manager.get_status()


# --- POST /api/task/onetime/execute : 手动触发启动任务执行 (可选) ---
@app.post("/api/task/onetime/execute", response_model=OnetimeExecuteResponse)
async def execute_onetime_tasks(request: Request):
    """
    手动触发执行启动任务
    """
    if not Config.onetasks:
        return {
            "status": "ok",
            "message": "No tasks to execute",
            "executed": 0,
            "results": []
        }
    
    # 临时标记为待执行
    Config.InitTask = True
    results = request.app.state.task_manager.run_onetime_tasks()
    return {"status": "ok", "executed": len(results), "results": results}
# ============================================================================
# 📋 任务模块: 日志查询路由
# ============================================================================
# --- GET /api/task/log/onetime : 获取启动任务日志 ---
@app.get("/api/task/log/onetime", response_model=TaskLogResponse)
async def get_onetime_log(
    request: Request, 
    limit: int = Query(100, ge=1, le=100) # 👈 自动限制 1-100
):
    """查询启动任务执行记录"""
    logs = request.app.state.task_manager.get_onetime_log(limit)
    return {"status": "ok", "count": len(logs), "logs": list(logs)}


# --- GET /api/task/log/cron : 获取定时任务日志 ---
@app.get("/api/task/log/cron", response_model=TaskLogResponse)
async def get_cron_log(
    request: Request, 
    limit: int = Query(100, ge=1, le=100)
):
    """查询定时任务执行记录"""
    logs = request.app.state.task_manager.get_cron_log(limit)
    return {"status": "ok", "count": len(logs), "logs": list(logs)}


# --- DELETE /api/task/log/onetime : 清空启动任务日志 ---
@app.delete("/api/task/log/onetime", response_model=LogClearResponse)
async def clear_onetime_log(request: Request):
    """清空启动任务日志"""
    return request.app.state.task_manager.clear_logs("onetime")


# --- DELETE /api/task/log/cron : 清空定时任务日志 ---
@app.delete("/api/task/log/cron", response_model=LogClearResponse)
async def clear_cron_log(request: Request):
    """清空定时任务日志"""
    return request.app.state.task_manager.clear_logs("cron")


# --- GET /api/task/log/summary : 日志统计摘要 ---
@app.get("/api/task/log/summary", response_model=LogSummaryResponse)
async def get_log_summary(request: Request):
    """获取日志数量与成功率统计"""
    def calc_stats(log_deque):
        recent = list(log_deque)[-10:]
        return {
            "total_logged": len(log_deque),
            "max_capacity": Config.MAX_TASK_LOG_SIZE,
            "recent_success": sum(1 for l in recent if l.get("exitcode") == 0),
            "recent_failed": sum(1 for l in recent if l.get("exitcode", -1) != 0)
        }

    return {
        "onetime": calc_stats(Config.onetimetasks_log),
        "cron": calc_stats(Config.crontasks_log)
    }


@app.get("/health")
async def health_check():
    """健康检查接口 - 可选认证"""
    return {
        "status": "ok",
        "debug": Config.DEBUG,
        "timestamp": int(time.time()),
        "version": Config.AGENT_VERSION
    }


@app.get("/")
async def root():
    """根路径 - 返回代理信息"""
    return {
        "name": "Proxy Agent",
        "version": Config.AGENT_VERSION,
        "endpoints": {
            "status": "/api/status",
            "health": "/health",
            "docs": "/docs (仅DEBUG模式)"
        }
    }
#超级终端
@app.websocket("/api/ws/{path:path}")
async def terminal_websocket(websocket: WebSocket, path: str, request_id: str = Query(...),token: str = Query(None)):
    handler = TerminalSessionHandler()
    use_noise = True
    
    if token is not None:
        use_noise = False
        # 🔥 认证逻辑：校验传来的 token 是否等于服务端的 AGENT_PUBLIC_KEY
        expected_token = Config.keys['agent'].public_b64
        Logger.debug(f"expected_token{expected_token}")
        Logger.debug(f"token:{token}")
        if token != expected_token:
            await websocket.close(code=1008, reason="Authentication failed: Invalid Token")
            Logger.warning(f"🚨 [终端会话 {request_id}] 认证失败，非法 Token！")
            return
        
        Logger.info(f"✅ [终端会话 {request_id}] Token 认证通过 (HTTPS 降级模式)")
    await handler.start_session(websocket, request_id, use_noise)

# 全局异常处理
@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException):
    """统一处理认证失败等异常；响应加密由 AuthEncryptMiddleware 统一执行(单一加密点)"""
    content = {"error": exc.detail, "code": exc.status_code}
    return JSONResponse(status_code=exc.status_code, content=content)
    
# ============================================================================
# 🚀 程序入口
# ============================================================================
class NoSignalsUvicornServer(uvicorn.Server):
    """
    自定义 Uvicorn 服务器类
    🌟 核心技巧：重写信号安装函数。直接 pass 掉，阻止 Uvicorn 尝试在子线程
    注册主线程专用的系统信号（解决 ValueError: set_wakeup_fd only works in main thread）
    """
    def install_signal_handlers(self) -> None:
        pass

def _start_uvicorn_server(app_obj, host, port, log_level):
    """在子线程中运行的 Uvicorn 启动函数"""
    # 🔄 确保子线程拥有独立的 asyncio 事件循环
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)

    # 🛠️ 实例化标准的配置类（移除了不属于它的 install_signals）
    config = uvicorn.Config(
        app=app_obj,           
        host=host,
        port=port,
        reload=False,         # 🌟 后台线程中必须为 False
        log_level=log_level,
    )
    
    # 🌟 使用重写了信号机制的自定义服务器启动
    server = NoSignalsUvicornServer(config)
    server.run()

def main(blocking: bool = False):
    """
    主入口（已优化为非阻塞后台运行）
    :param blocking: 是否阻塞主线程。外挂引入时传 False，独立运行时传 True。
    """

    # 🔍 启动前校验
    Config.validate()
    init_crypto()

    log_level = "debug" if Config.DEBUG else "info"

    if Config.DEBUG:
        Logger.warning(
            "⚠️ 当前处于 DEBUG 模式，但由于采用了非阻塞后台挂载，已自动关闭热重载(Reload)功能。"
        )

    Logger.info(" 🚀 Kisama Agent 开始在后台守护线程中启动...")

    # 🧵 创建并启动后台守护线程
    agent_thread = threading.Thread(
        target=_start_uvicorn_server,
        args=(app, Config.HOST, Config.PORT, log_level),
        daemon=True,  # 🌟 设置为守护线程
    )
    agent_thread.start()

    Logger.info(f" [-] 后台服务已成功挂载，正在监听端口: {Config.PORT}")

    # 🌟 如果是独立运行，用死循环钉住主线程，不让进程退出
    if blocking:
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            Logger.info("🛑 收到终止信号，Kisama Agent 守护进程已安全退出。")

def cli():
    """专供本地直接执行，以及 pyproject.toml 注册的命令行工具入口"""
    main(blocking=True)

if __name__ == "__main__":
    cli()