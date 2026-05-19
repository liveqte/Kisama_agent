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
from datetime import datetime
from typing import Union,List, Dict, Any, Optional

# FastAPI 相关
from fastapi import FastAPI, Request, Response, HTTPException, status
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware

# 加密相关
from ecdsa import VerifyingKey, BadSignatureError
from ecdsa.util import sigdecode_der, sigdecode_string
from ecies import encrypt as ecies_encrypt

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
## AES有关库
from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
## noise和超级终端相关库
from noise.connection import NoiseConnection, Keypair
from fastapi import WebSocket , WebSocketDisconnect
import shutil
import struct
import termios
import select
import fcntl
import signal
import pty
## 生成noise密钥相关
from dataclasses import dataclass, asdict
from cryptography.hazmat.primitives.asymmetric import x25519
from cryptography.hazmat.primitives import serialization
from typing import Tuple

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
    session_key: bytes = Field(..., description="本次会话的动态 AES-256 密钥 (明文，由中间件负责加密)", examples=["k7Bv9...32位密钥字符串或Base64"] )
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
    TIMESTAMP_WINDOW = int(os.getenv("TIMESTAMP_WINDOW", "30"))
    
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
    
    # 文件操作根目录: 限制代理端只能访问此目录及其子目录 (防止路径遍历)
    FILE_ROOT = os.getenv("FILE_ROOT", os.path.expanduser("~"))
    
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

    # 服务监听配置
    HOST = os.getenv("HOST", "0.0.0.0")
    PORT = int(os.getenv("PORT") or os.environ.get('SERVER_PORT') or 8002)
    
    # 代理版本信息
    AGENT_VERSION = os.getenv("AGENT_VERSION", "0.1.1-python")
    
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
        加载ECDSA公钥，支持多种格式并给出清晰错误提示
        :param pem_or_der: PEM字符串 / DER的base64 / 原始base64
        :return: VerifyingKey 实例
        """
        import binascii
        
        pubkey_str = pem_or_der.strip()
        
        # 尝试1: PEM格式
        if "-----BEGIN PUBLIC KEY-----" in pubkey_str:
            try:
                return VerifyingKey.from_pem(pubkey_str)
            except Exception as e:
                raise ValueError(f"Invalid PEM public key: {e}")
        
        # 尝试2: DER格式的base64编码
        if "-----BEGIN" not in pubkey_str:
            try:
                # 移除可能的空白/换行
                der_str = "".join(pubkey_str.split())
                der_bytes = base64.b64decode(der_str, validate=True)
                return VerifyingKey.from_der(der_bytes)
            except (binascii.Error, ValueError):
                pass  # 不是base64，继续尝试
            except Exception as e:
                raise ValueError(f"Invalid DER public key (base64): {e}")
        
        # 尝试3: 原始DER bytes (极少用)
        try:
            return VerifyingKey.from_der(pubkey_str.encode('latin1'))
        except Exception:
            pass
        
        # 全部失败，给出友好提示
        raise ValueError(
            "Failed to load ECDSA public key. Please check:\n"
            "1. Key must be valid ECDSA (P-256/NIST256p recommended)\n"
            "2. PEM format should start with '-----BEGIN PUBLIC KEY-----'\n"
            "3. Or provide raw DER as base64 string\n"
            f"Provided key preview: {pubkey_str[:100]}..."
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
            Logger.error("❌ 签名验证失败: 坏签名")
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
    
    def encrypt_response(self, data: Dict[str, Any]) -> str:
        """
        加密响应数据
        :param data: 待加密的字典数据
        :return: DEBUG模式返回明文JSON，否则返回Base64编码的ECIES密文
        """
        if Config.DEBUG or not self.ecies_pubkey:
            # 调试模式或无加密公钥: 明文返回
            return json.dumps(data, ensure_ascii=False, default=str)
        
        try:
            # ECIES加密: 自动协商临时AES密钥加密数据
            plaintext = json.dumps(data, ensure_ascii=False, default=str).encode('utf-8')
            ciphertext = ecies_encrypt(self.ecies_pubkey, plaintext)
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


# ============================================================================
# 🛡️ 认证中间件: 请求签名验证 + 响应加密
# ============================================================================
class AuthEncryptMiddleware(BaseHTTPMiddleware):
    """
    认证 + 加密中间件
    1. 请求进入: 验证签名 -> 解密 Body (如果标记了 AES)
    2. 响应返回: 加密 Response Body
    """
    
    async def dispatch(self, request: Request, call_next):
        headers = request.headers
        
        # === 阶段 1: 请求认证 (DEBUG 模式跳过) ===
        if not Config.DEBUG and request.method not in ["OPTIONS", "HEAD"]:
            nonce = headers.get("x-nonce")
            timestamp = headers.get("x-timestamp") 
            auth_token = headers.get("x-auth-token")
             # ========== 添加以下调试输出 ==========
            Logger.debug("=" * 50)
            Logger.debug(f"[Auth Debug] {request.method} {request.url.path}")
            Logger.debug(f"x-nonce     : {nonce}")
            Logger.debug(f"x-timestamp : {timestamp}")
            Logger.debug(f"x-auth-token: {auth_token[:30] if auth_token else 'MISSING'}...")
            Logger.debug(f"All Headers : {dict(headers)}")
            Logger.debug("=" * 50)
            # ====================================
            if not all([nonce, timestamp, auth_token]):
                return JSONResponse(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    content={"error": "Missing auth headers"}
                )
            
            try:
                crypto.verify_signature(nonce, timestamp, auth_token)
            except Exception as e:
                return JSONResponse(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    content={"error": f"Signature verification failed: {str(e)}"}
                )

        # === 阶段 1.5: AES 请求体解密 (核心修复) ===
        decrypted_body_bytes = None
        
        if headers.get("x-aes-encrypted") == "true":
            # 1. 获取原始加密流
            original_body = await request.body()
            Logger.debug(original_body)
            if original_body:
                try:
                    encrypted_str = original_body.decode('utf-8')
                    decrypted_json_str = CryptoManager.decrypt_data(encrypted_str, Config._raw_key)
                    
                    if Config.DEBUG:
                        Logger.debug(f" [AES Decrypt] Success: {decrypted_json_str[:100]}...")
                    
                    # 验证 JSON
                    json.loads(decrypted_json_str) 
                    
                    decrypted_body_bytes = decrypted_json_str.encode('utf-8')
                    request._body = decrypted_body_bytes
                except Exception as e:
                    Logger.error(f"💥 [AES Decrypt] Failed: {str(e)}")
                    return JSONResponse(
                        status_code=status.HTTP_400_BAD_REQUEST,
                        content={"error": f"AES Decrypt failed: {str(e)}"}
                    )
        # === 关键：拦截 receive 方法 (已修复) ===
        original_receive = request.receive
        has_returned_body = False  # 增加状态标记，防止下游死循环读取
        
        async def wrapped_receive():
            nonlocal has_returned_body
            
            if decrypted_body_bytes is not None:
                # 如果有解密数据，按照 ASGI 规范构建消息体
                if not has_returned_body:
                    has_returned_body = True
                    return {
                        "type": "http.request",
                        "body": decrypted_body_bytes,
                        "more_body": False  # 告诉下游：数据发完了
                    }
                else:
                    # 如果下游继续请求，返回空报文结束流
                    return {
                        "type": "http.request",
                        "body": b"",
                        "more_body": False
                    }
            else:
                # 如果没有解密（且没有在此中间件中执行过 await request.body()）
                # 透传原始的 receive
                return await original_receive()

        # 【重点】将函数对象本身赋值给 _receive，而不是 await 执行它
        request._receive = wrapped_receive

        # === 阶段 2: 处理业务逻辑 ===
        try:
            response = await call_next(request)
        except Exception as exc:
            # 捕获路由中的异常，避免中间件崩溃
            raise exc

        # === 阶段 3: 响应加密 ===
        if response.headers.get("content-type", "").startswith("application/json"):
            body_parts = []
            async for chunk in response.body_iterator:
                body_parts.append(chunk)
            original_body = b"".join(body_parts)
            
            try:
                original_data = json.loads(original_body.decode('utf-8'))
                encrypted_content = crypto.encrypt_response(original_data)
                encoded = encrypted_content.encode('utf-8')
                
                response.body_iterator = self._async_iter([encoded])
                response.headers["content-length"] = str(len(encoded))
                
                if not Config.DEBUG:
                    response.headers["x-encrypted"] = "true"
                    response.headers["x-agent-version"] = Config.AGENT_VERSION
                    
            except json.JSONDecodeError:
                pass # 非 JSON 不加密
            except Exception:
                if Config.DEBUG:
                    raise
        return response
    
    @staticmethod
    async def _async_iter(items):
        for item in items:
            yield item
# ============================================================================
#  获取系统信息类
# ============================================================================
class SystemInfoCollector:
    """系统信息收集器"""
    
    def __init__(self):
        self.last_network_stats = {'rx': 0, 'tx': 0}
        self.total_network_up = 0
        self.total_network_down = 0
        self.last_network_time = time.time()
        self._cpu_initialized = False
        self._cpu_init_lock = asyncio.Lock()
    
    async def get_basic_info(self) -> Dict[str, Any]:
        """获取基础系统信息"""
        dist_info = self._get_linux_distribution()
        
        # 异步获取 IP 地址
        ipv4, ipv6 = await asyncio.gather(
            self._get_public_ip_v4(),
            self._get_public_ip_v6(),
            return_exceptions=True
        )
        
        # 处理异常情况
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
            "gpu_name": "",  # Python 暂不支持 GPU 检测
            "ipv4": ipv4,
            "ipv6": ipv6,
            "mem_total": self._get_container_mem_limit(),  # 字节单位
            "os": os_name,
            "kernel_version": platform.release(),
            "swap_total": psutil.swap_memory().total,  # 字节单位
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
                "total": memory_info["ram_total"],    # 字节
                "used": memory_info["ram_used"]       # 字节
            },
            "swap": {
                "total": memory_info["swap_total"],   # 字节
                "used": memory_info["swap_used"]      # 字节
            },
            "load": {
                "load1": round(psutil.getloadavg()[0] if hasattr(psutil, 'getloadavg') and psutil.getloadavg() else 0, 2),
                "load5": round(psutil.getloadavg()[1] if hasattr(psutil, 'getloadavg') and psutil.getloadavg() else 0, 2),
                "load15": round(psutil.getloadavg()[2] if hasattr(psutil, 'getloadavg') and psutil.getloadavg() else 0, 2)
            },
            "disk": {
                "total": disk_info["total"],          # 字节
                "used": disk_info["used"]             # 字节
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
        """获取 CPU 使用率 (非阻塞，基于初始化的基准)"""
        async with self._cpu_init_lock:
            if not self._cpu_initialized:
                # 第一次调用时，执行一次阻塞的 cpu_percent 来设置基准
                # 这会在首次调用 get_realtime_info 时发生，只阻塞一次
                psutil.cpu_percent(interval=0.1) # 这里阻塞0.1秒设置初始值
                self._cpu_initialized = True
                # 返回0.0，因为这是第一次计算，没有可比较的前一个值
                return 0.0
        # 后续调用使用 interval=None，不阻塞，基于上一次的基准计算
        try:
            usage = psutil.cpu_percent(interval=None)
            return round(max(0, min(100, usage)), 2)
        except Exception as e:
            Logger.debug(f"获取CPU使用率失败: {e}", 2)
            return 0.0 # 出错时返回0
    
    def _get_container_mem_limit(self) -> int:
        """获取容器内存限制（字节），兼容 cgroup v1/v2，无限制时回退 psutil"""
        # cgroup v2
        try:
            with open("/sys/fs/cgroup/memory.max", "r") as f:
                val = f.read().strip()
                if val != "max":
                    return int(val)
        except (OSError, ValueError):
            pass
            
        # cgroup v1
        try:
            with open("/sys/fs/cgroup/memory/memory.limit_in_bytes", "r") as f:
                val = int(f.read().strip())
                if val < 2**63 - 1:  # 2^63-1 表示未限制
                    return val
        except (OSError, ValueError):
            pass
            
        # 降级：物理机或未读取到 cgroup 信息
        return psutil.virtual_memory().total

    def _get_container_mem_usage(self) -> int:
        """获取容器当前内存使用量（字节），兼容 cgroup v1/v2"""
        # cgroup v2
        try:
            with open("/sys/fs/cgroup/memory.current", "r") as f:
                return int(f.read().strip())
        except (OSError, ValueError):
            pass
            
        # cgroup v1
        try:
            with open("/sys/fs/cgroup/memory/memory.usage_in_bytes", "r") as f:
                return int(f.read().strip())
        except (OSError, ValueError):
            pass
            
        # 降级
        return psutil.virtual_memory().used

    async def _get_memory_info(self) -> Dict[str, int]:
        """获取内存信息（字节单位）"""
        try:
            # 优先使用容器感知的内存值
            ram_total = self._get_container_mem_limit()
            ram_used = self._get_container_mem_usage()
            
            # Swap 通常由宿主机统一管理，容器一般不单独限制，保留 psutil
            swap = psutil.swap_memory()
            
            return {
                "ram_total": ram_total,
                "ram_used": ram_used,
                "swap_total": swap.total,
                "swap_used": swap.used
            }
        except Exception as e:
            Logger.debug(f"获取内存信息失败: {e}", 2)
            return {
                "ram_total": 0,
                "ram_used": 0,
                "swap_total": 0,
                "swap_used": 0
            }
    
    def _get_physical_disk_device(self, device_path: str) -> Optional[str]:
        if platform.system() != "Linux":
            return device_path
            
        import re

        dev_name = device_path.replace("/dev/", "")
        if not dev_name:
            return None
        
        if re.match(r'^[a-zA-Z0-9\.\-_]+:', dev_name) or dev_name.startswith('//'):
            Logger.debug(f"检测到远程存储（NFS/CIFS）: {device_path}，视为有效磁盘", 5)
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
            if m:
                return f"/dev/{m.group(1)}"

        if not re.search(r'\d', dev_name):
            return device_path

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
        """容器内获取磁盘：直接取根分区 '/'，不追溯物理设备"""
        try:
            # 容器视角：'/' 就是全部可用磁盘（已自动应用 quota 限制）
            usage = psutil.disk_usage('/')
            Logger.debug(
                f"[容器模式] 磁盘统计: 总空间={usage.total/1024**3:.2f}GB, "
                f"已用={usage.used/1024**3:.2f}GB, 使用率={usage.percent:.2f}%,5"
            )
            return {
                "total": int(usage.total),
                "used": int(usage.used)
            }
        except Exception as e:
            Logger.debug(f"[容器模式] 获取磁盘信息失败: {e}", 5)
            return {"total": 0, "used": 0}
    
    async def _get_host_disk_info(self) -> Dict[str, int]:
        try:
            total_bytes = 0
            used_bytes = 0
            seen_physical_devices = set()

            partitions = psutil.disk_partitions(all=True)
            Logger.debug(f"获取到 {len(partitions)} 个分区", 5)
            for partition in partitions:
                device = partition.device
                mountpoint = partition.mountpoint
                fstype = partition.fstype

                if fstype in {'tmpfs', 'devtmpfs', 'overlay', 'squashfs', 'proc', 'sysfs', 'debugfs', 'configfs', 'cgroup', 'cgroup2', 'pstore', 'bpf', 'tracefs', 'securityfs', 'efivarfs'}:
                    Logger.debug(f"跳过虚拟文件系统: {fstype} (设备: {device}, 挂载点: {mountpoint})", 5)
                    continue

                physical_device = self._get_physical_disk_device(device)
                if not physical_device:
                    Logger.debug(f"无法解析物理磁盘设备名，跳过分区: {device} (挂载点: {mountpoint})", 5)
                    continue

                if physical_device in seen_physical_devices:
                    Logger.debug(f"物理磁盘 {physical_device} 已处理，跳过分区: {device} (挂载点: {mountpoint})", 5)
                    continue

                if not self._is_physical_disk(physical_device):
                    Logger.debug(f"设备 {physical_device} (来自分区 {device}) 不是物理磁盘，跳过", 5)
                    continue

                try:
                    usage = psutil.disk_usage(mountpoint)
                    Logger.debug(
                        f"统计物理磁盘 {physical_device} (来自分区 {device}): 挂载点={mountpoint}, "
                        f"总空间={usage.total} 字节, 已用={usage.used} 字节, 可用={usage.free} 字节, 使用率={usage.percent:.2f}%",
                        5
                    )
                    total_bytes += usage.total
                    used_bytes += usage.used
                    Logger.debug(f"当前累计统计量: 总空间={total_bytes} 字节, 已用={used_bytes} 字节", 5)
                    seen_physical_devices.add(physical_device)
                except (PermissionError, OSError) as e:
                    Logger.debug(f"跳过分区 {device}（挂载点: {mountpoint}, 物理磁盘: {physical_device}）: {e}", 5)
                    continue

            Logger.debug(f"磁盘统计完成 (按物理磁盘去重): 总空间={total_bytes} 字节, 已用={used_bytes} 字节", 5)
            return {
                "total": total_bytes,
                "used": used_bytes
            }
        except Exception as e:
            Logger.debug(f"获取磁盘信息失败: {e}", 5)
            return {"total": 0, "used": 0}
    async def _get_disk_info(self) -> Dict[str, int]:
        """统一入口：自动识别环境并分发"""
        if self._get_virtualization() in ['Docker', 'Lxc', 'Podman']:
            return self._get_container_disk_info()
        else:
            return await self._get_host_disk_info()

    async def _get_disk_total(self) -> int:
        """获取磁盘总容量"""
        disk_info = await self._get_disk_info()
        return disk_info["total"]
    
    def _is_physical_disk(self, device: str) -> bool:
        if platform.system() == "Windows":
            return any(device.lower().startswith(drive) for drive in ['c:', 'd:', 'e:', 'f:', 'g:', 'h:'])
        else:
            import re
            #nfs也作为有效磁盘
            if re.match(r'^[a-zA-Z0-9\.\-_]+:', device) or device.startswith('//'):
                return True
            physical_patterns = [
                r'^/dev/sd[a-z]+$',
                r'^/dev/vd[a-z]+$',
                r'^/dev/xvd[a-z]+$',
                r'^/dev/nvme[0-9]+n[0-9]+$',
                r'^/dev/mmcblk[0-9]+$',
                r'^/dev/md[0-9]+$', 
                r'^zroot/.*$',
            ]
            is_physical_device = any(re.match(pattern, device) for pattern in physical_patterns)
            return is_physical_device
    
    async def _get_network_stats(self) -> Dict[str, int]:
        """
        使用 psutil 按网卡获取网络统计（推荐）
        返回所有物理网卡的总和，排除虚拟网卡
        """
        try:
            # 获取所有网卡的IO统计
            net_io = psutil.net_io_counters(pernic=True)
            current_time = time.time()
            
            # 初始化累计变量
            total_current_rx = 0
            total_current_tx = 0
            
            # 定义要排除的虚拟网卡模式
            exclude_patterns = ['lo', 'docker', 'veth', 'br-', 'tun', 'virbr']
            
            # 遍历所有网卡，累加物理网卡的数据
            for interface, stats in net_io.items():
                # 检查是否为虚拟网卡
                if any(pattern in interface for pattern in exclude_patterns):
                    Logger.debug(f"排除虚拟网卡: {interface}", 4)
                    continue
                
                Logger.debug(f"统计物理网卡 {interface}: RX={stats.bytes_recv}, TX={stats.bytes_sent}", 4)
                total_current_rx += stats.bytes_recv
                total_current_tx += stats.bytes_sent
            
            # 后续计算逻辑与之前相同（瞬时速率和累计流量）
            # 第一次运行，初始化总流量为当前网卡累计值
            if self.last_network_stats['rx'] == 0:
                Logger.debug(f"第一次网络统计(psutil按网卡)，初始化总流量: 下载={total_current_rx}, 上传={total_current_tx}", 4)
                self.total_network_down = total_current_rx
                self.total_network_up = total_current_tx
                self.last_network_stats = {'rx': total_current_rx, 'tx': total_current_tx}
                self.last_network_time = current_time
                
                return {
                    "up": 0,
                    "down": 0,
                    "total_up": self.total_network_up,
                    "total_down": self.total_network_down
                }
            
            # 计算瞬时速率
            time_diff = current_time - self.last_network_time
            if time_diff > 0:
                down_speed = (total_current_rx - self.last_network_stats['rx']) / time_diff
                up_speed = (total_current_tx - self.last_network_stats['tx']) / time_diff
                
                # 确保速率不为负
                down_speed = max(0, down_speed)
                up_speed = max(0, up_speed)
                
                # 更新总流量：直接使用当前网卡累计值
                self.total_network_down = total_current_rx
                self.total_network_up = total_current_tx
                
                Logger.debug(f"网络统计(psutil按网卡): 下载速度={int(down_speed)} B/s, 上传速度={int(up_speed)} B/s, 总下载={self.total_network_down}, 总上传={self.total_network_up}", 4)
            
            # 更新统计值
            self.last_network_stats = {'rx': total_current_rx, 'tx': total_current_tx}
            self.last_network_time = current_time
            
            return {
                "up": int(up_speed),
                "down": int(down_speed),
                "total_up": self.total_network_up,
                "total_down": self.total_network_down
            }
            
        except Exception as e:
            Logger.debug(f"psutil 按网卡统计失败: {e}", 4)
            return {"up": 0, "down": 0, "total_up": 0, "total_down": 0}
    
    async def _get_tcp_connections(self) -> int:
        """获取 TCP 连接数"""
        try:
            if platform.system() == "Windows":
                # Windows 使用 netstat 命令
                result = subprocess.run(
                    ['netstat', '-n', '-p', 'tcp'], 
                    capture_output=True, 
                    text=True, 
                    timeout=5
                )
                count = len([line for line in result.stdout.split('\n') if 'ESTABLISHED' in line])
                return count
            else:
                # Linux 使用 psutil
                connections = psutil.net_connections(kind='tcp')
                return len([conn for conn in connections if conn.status == 'ESTABLISHED'])
        except Exception as e:
            Logger.debug(f"获取TCP连接数失败: {e}", 2)
            return 0
    
    async def _get_udp_connections(self) -> int:
        """获取 UDP 连接数"""
        try:
            if platform.system() == "Windows":
                result = subprocess.run(
                    ['netstat', '-n', '-p', 'udp'], 
                    capture_output=True, 
                    text=True, 
                    timeout=5
                )
                count = len([line for line in result.stdout.split('\n') if 'UDP' in line and line.strip()])
                return count
            else:
                connections = psutil.net_connections(kind='udp')
                return len(connections)
        except Exception as e:
            Logger.debug(f"获取UDP连接数失败: {e}", 2)
            return 0
    
    def _get_linux_distribution(self) -> Dict[str, str]:
        """获取 Linux 发行版信息"""
        try:
            if platform.system() == "Linux":
                if os.path.exists('/etc/os-release'):
                    with open('/etc/os-release', 'r') as f:
                        content = f.read()
                    
                    name = 'Unknown'
                    version = 'Unknown'
                    
                    for line in content.split('\n'):
                        if line.startswith('ID='):
                            name = line.replace('ID=', '').replace('"', '').strip()
                        elif line.startswith('VERSION_ID='):
                            version = line.replace('VERSION_ID=', '').replace('"', '').strip()
                    
                    return {'name': name, 'version': version}
        except Exception:
            pass
        
        return {'name': 'Unknown', 'version': 'Unknown'}
    
    def _get_virtualization(self) -> str:
        """获取虚拟化/容器化信息"""
        try:
            if platform.system() == "Linux":
                
                # 1. 检查特征文件 (最快速，命中率高)
                if os.path.exists('/.dockerenv'):
                    return 'Docker'
                if os.path.exists('/run/.containerenv'):
                    return 'Podman'  # Podman 容器的专属特征文件

                # 2. 检查 Cgroup (兼容 V1，并增加 containerd/kubepods 识别)
                if os.path.exists('/proc/1/cgroup'):
                    with open('/proc/1/cgroup', 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read().lower()
                        if 'docker' in content or 'containerd' in content:
                            return 'Docker'
                        elif 'kubepods' in content:
                            return 'Kubernetes' # K8s 环境，底层可能是 containerd/docker
                        elif 'lxc' in content:
                            return 'LXC'

                # 3. 检查挂载点信息 (应对 Cgroup V2 和被隐藏特征的容器)
                # 容器内部通常会将根目录 / 或特定目录通过 overlayfs 或带有 docker/containers 字眼的路径挂载
                if os.path.exists('/proc/self/mountinfo'):
                    with open('/proc/self/mountinfo', 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()
                        # 检查是否有典型的 docker 容器挂载路径
                        if '/docker/containers/' in content or 'workdir=/var/lib/docker' in content:
                            return 'Docker'
                        # 检查是否有 K8s 挂载特征
                        elif '/pods/' in content or 'kubelet' in content:
                            return 'Kubernetes'

                # 4. 检查初始进程的环境变量 (LXC 等有时会在这里暴露)
                if os.path.exists('/proc/1/environ'):
                    with open('/proc/1/environ', 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()
                        if 'container=lxc' in content:
                            return 'LXC'

                # 5. 检查硬件级/系统级虚拟化 (KVM/QEMU)
                if os.path.exists('/proc/cpuinfo'):
                    with open('/proc/cpuinfo', 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()
                        if 'QEMU' in content or 'KVM' in content:
                            return 'QEMU'

        except Exception as e:
            # 建议把具体的错误异常打出来，方便日后排查权限或 I/O 问题
            Logger.error(f"❌ 获取虚拟化信息失败: {e}")
        
        return 'None'
    
    async def _get_public_ip_v4(self) -> Optional[str]:
        """获取公网 IPv4 地址"""
        services = [
            'https://api.ipify.org',
            'https://icanhazip.com',
            'https://checkip.amazonaws.com',
            'https://ifconfig.me/ip',
        ]
        
        for service in services:
            try:
                ip = await self._fetch_ip(service)
                if ip and self._is_valid_ipv4(ip):
                    return ip
            except Exception:
                continue
        
        return None
    
    async def _get_public_ip_v6(self) -> Optional[str]:
        """获取公网 IPv6 地址"""
        services = [
            'https://api6.ipify.org',
            'https://icanhazip.com',
        ]
        
        for service in services:
            try:
                ip = await self._fetch_ip(service)
                if ip and self._is_valid_ipv6(ip):
                    return ip
            except Exception:
                continue
        
        return None
    
    async def _fetch_ip(self, url: str) -> str:
        """获取 IP 地址"""
        timeout = aiohttp.ClientTimeout(total=5)
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(url, headers={'user-agent': Config.AGENT_VERSION}) as response:
                if response.status == 200:
                    return (await response.text()).strip()
                else:
                    raise Exception(f"HTTP {response.status}")
    
    def _is_valid_ipv4(self, ip: str) -> bool:
        """验证 IPv4 地址"""
        try:
            socket.inet_pton(socket.AF_INET, ip)
            return True
        except socket.error:
            return False
    
    def _is_valid_ipv6(self, ip: str) -> bool:
        """验证 IPv6 地址"""
        try:
            socket.inet_pton(socket.AF_INET6, ip)
            return True
        except socket.error:
            return False
# ============================================================================
# 📁 文件模块: FileManager 类 (面向对象封装)
# ============================================================================

import os
import shutil
import stat
import hashlib
import mimetypes
import base64
import json
from pathlib import Path
from datetime import datetime
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


# ==================== 2. 终端会话处理器 ====================
class TerminalSessionHandler:
    def __init__(self):
        self.process = None
        self.master_fd = None
        self.slave_fd = None
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
        env_shell = os.environ.get('SHELL')
        if env_shell and os.path.exists(env_shell) and os.access(env_shell, os.X_OK):
            return env_shell
        for sh_name in ['bash', 'zsh', 'ash', 'sh']:
            sh_path = shutil.which(sh_name)
            if sh_path: return sh_path
        return '/bin/sh'

    def set_pty_size(self, rows: int, cols: int):
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

            self.master_fd, self.slave_fd = pty.openpty()
            self.set_pty_size(24, 80)

            shell = self.get_available_shell()
            log(f"🐚 使用 Shell 路径: {shell}")
            
            def pty_preexec():
                import os, termios, fcntl
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
                            os.write(master, input_bytes)
                            continue
                except (UnicodeDecodeError, json.JSONDecodeError):
                    pass # 解析 JSON 失败，说明是普通的键盘敲击输入
                
                # 默认当作普通键盘输入写入 PTY
                os.write(master, decrypted)
                
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
async def get_status():
    """
    获取代理端状态信息
    🔐 需要签名认证 (DEBUG模式除外)
    🔒 响应体自动加密 (DEBUG模式除外)
    """
    basic_info = await SystemInfoCollector().get_basic_info()
    basic_info["session_key"]=Config.SESSION_KEY
    basic_info["noise_key"]=Config.NOISE_KEY
    return basic_info

@app.get("/api/status", response_model=StatusResponse)
async def get_status():
    """
    获取代理端状态信息
    🔐 需要签名认证 (DEBUG模式除外)
    🔒 响应体自动加密 (DEBUG模式除外)
    """
    status = await SystemInfoCollector().get_realtime_info()
    return status

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
    """统一处理认证失败等异常"""
    content = {"error": exc.detail, "code": exc.status_code}
    # 异常响应也走加密流程
    encrypted = crypto.encrypt_response(content) if not Config.DEBUG else json.dumps(content)
    return JSONResponse(
        status_code=exc.status_code,
        content=json.loads(encrypted) if Config.DEBUG else {"_encrypted": encrypted},
        headers={"x-encrypted": "false" if Config.DEBUG else "true"}
    )


# ============================================================================
# 🚀 程序入口
# ============================================================================
# ✅ 在 main() 函数中初始化并挂载
def main():
    """主入口"""
    
    # 🔍 启动前校验
    Config.validate()
    init_crypto()
    
    # 🔄 确保 asyncio 事件循环存在（避免 get_event_loop() 的 DeprecationWarning）
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    
    import os
    script_name = os.path.splitext(os.path.basename(__file__))[0]
    app_import_string = f"{script_name}:app"
    
    Logger.debug(f" 使用重载模式启动: {app_import_string}")
    
    uvicorn.run(
        app_import_string,
        host=Config.HOST, 
        port=Config.PORT, 
        reload=Config.DEBUG,
        log_level="debug" if Config.DEBUG else "info"
    )

if __name__ == "__main__":
    # 全局文件管理器实例
    main()