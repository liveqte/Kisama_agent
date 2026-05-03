#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
终端 WebSocket 测试客户端 (带 Noise 加密 & 性能追踪)
"""

import asyncio
import json
import base64
import argparse
import sys
import os
import time
from typing import Optional
import websockets
from websockets.exceptions import ConnectionClosed, InvalidStatus

import tty
import termios
import select

# 导入 Noise 协议库
from noise.connection import NoiseConnection, Keypair

# ============ 密钥配置 (请替换为你生成的真实密钥) ============
# 客户端需要：控制端的私钥 (自己的)，代理端的公钥 (对方的)
# CONTROL_PRIVATE_KEY = "替换为_control_private.key_的内容"
# AGENT_PUBLIC_KEY = "替换为_agent_public.key_的内容"


# ============ 配置 ============
class Config:
    DEBUG = False
    HEARTBEAT_INTERVAL = 10
    RECONNECT_DELAY = 3
    MAX_RECONNECT = 3
    
    USE_JSON_FORMAT = True
    ENCODE_INPUT_AS_BASE64 = True


# ============ 日志工具 ============
class Logger:
    COLORS = {
        'INFO': '\033[36m',    # cyan
        'SUCCESS': '\033[32m', # green
        'WARNING': '\033[33m', # yellow
        'ERROR': '\033[31m',   # red
        'DEBUG': '\033[90m',   # gray
        'RESET': '\033[0m',
    }
    
    @classmethod
    def _print(cls, level: str, message: str):
        color = cls.COLORS.get(level, cls.COLORS['RESET'])
        prefix = f"[{level}]"
        print(f"\r{color}{prefix}{cls.COLORS['RESET']} {message}", flush=True)
    
    @classmethod
    def info(cls, msg: str): cls._print('INFO', msg)
    @classmethod
    def success(cls, msg: str): cls._print('SUCCESS', msg)
    @classmethod
    def warning(cls, msg: str): cls._print('WARNING', msg)
    @classmethod
    def error(cls, msg: str): cls._print('ERROR', msg)
    @classmethod
    def debug(cls, msg: str):
        if Config.DEBUG:
            cls._print('DEBUG', msg)


# ============ 1. 解耦的 Noise 加密封装类 (客户端/Initiator) ============
class NoiseSessionWrapper:
    def __init__(self, is_initiator: bool, local_priv_b64: str, expected_remote_pub_b64: str = None):
        self.noise = NoiseConnection.from_name(b"Noise_XX_25519_ChaChaPoly_BLAKE2s")
        
        if is_initiator:
            self.noise.set_as_initiator()
        else:
            self.noise.set_as_responder()

        if local_priv_b64:
            priv_bytes = base64.b64decode(local_priv_b64)
            self.noise.set_keypair_from_private_bytes(Keypair.STATIC, priv_bytes)
            
        self.expected_remote_pub = base64.b64decode(expected_remote_pub_b64) if expected_remote_pub_b64 else None
        
        self.noise.set_prologue(b"kisama_terminal_v1")
        self.noise.start_handshake()

        # 📊 性能统计
        self.total_crypto_time = 0.0
        self.total_crypto_bytes = 0

    @property
    def is_established(self) -> bool:
        return self.noise.handshake_finished

    def process_handshake(self, payload: bytes = b'') -> bytes:
        if payload:
            self.noise.read_message(payload)
            
        if not self.noise.handshake_finished:
            return self.noise.write_message(b'')
        else:
            if self.expected_remote_pub:
                server_pub = self.noise.noise_protocol.rs.public_bytes
                if server_pub != self.expected_remote_pub:
                    raise PermissionError("身份验证失败：服务端公钥不匹配！")
            return b''

    def encrypt(self, plaintext: bytes) -> bytes:
        if not self.is_established:
            raise RuntimeError("握手未完成，无法加密")
            
        # ⏱️ 性能追踪
        t0 = time.perf_counter()
        res = self.noise.encrypt(plaintext)
        self.total_crypto_time += (time.perf_counter() - t0)
        self.total_crypto_bytes += len(plaintext)
        return res

    def decrypt(self, ciphertext: bytes) -> bytes:
        if not self.is_established:
            raise RuntimeError("握手未完成，无法解密")
            
        # ⏱️ 性能追踪
        t0 = time.perf_counter()
        res = self.noise.decrypt(ciphertext)
        self.total_crypto_time += (time.perf_counter() - t0)
        self.total_crypto_bytes += len(res) # 记录明文处理量
        return res


# ============ 2. 终端客户端 ============
class TerminalClient:
    def __init__(self, url: str, request_id: str, token: Optional[str] = None):
        self.url = url
        self.request_id = request_id
        self.token = token
        self.websocket: Optional[websockets.WebSocketClientProtocol] = None
        self.connected = False
        self.running = True
        self.heartbeat_task: Optional[asyncio.Task] = None
        self.receive_task: Optional[asyncio.Task] = None
        
        self.stats = {'sent': 0, 'received': 0, 'errors': 0}
        
        # 🔥 修复 1：在初始化时不创建 cipher
        self.cipher = None
    # 🔥 新增：读取密钥文件的辅助方法
    def _init_cipher(self):
        """🔥 修复 2：将读取密钥和初始化状态机封装为一个方法"""
        control_private_key = self._read_key_file("noise_keys/control_private.key")
        agent_public_key = self._read_key_file("noise_keys/agent_public.key")
        
        if not control_private_key or not agent_public_key:
            Logger.error("🚨 无法加载 Noise 密钥，请确保 noise_keys 目录存在且包含正确的密钥文件。")
            sys.exit(1)
            
        self.cipher = NoiseSessionWrapper(
            is_initiator=True, 
            local_priv_b64=control_private_key,
            expected_remote_pub_b64=agent_public_key
        )
    def _read_key_file(self, filepath: str) -> str:
        try:
            if os.path.exists(filepath):
                with open(filepath, 'r') as f:
                    return f.read().strip()
            return None
        except Exception as e:
            Logger.error(f"读取密钥文件 {filepath} 失败: {e}")
            return None
            
    def _build_url(self) -> str:
        separator = '&' if '?' in self.url else '?'
        url = f"{self.url}{separator}request_id={self.request_id}"
        if self.token: url += f"&token={self.token}"
        return url
    
    def _encode_message(self, text: str) -> bytes:
        """编码消息，返回 bytes，供后续加密"""
        if not Config.USE_JSON_FORMAT:
            return text.encode('utf-8')
        
        payload = {"type": "input", "data": text}
        if Config.ENCODE_INPUT_AS_BASE64:
            payload["data"] = base64.b64encode(text.encode('utf-8')).decode('ascii')
            payload["encoding"] = "base64"
        return json.dumps(payload).encode('utf-8')
    
    def _decode_message(self, data: bytes) -> str:
        """解码收到的明文数据"""
        text = data.decode('utf-8', errors='replace')
        try:
            obj = json.loads(text)
            if obj.get('type') == 'heartbeat': return None
            if obj.get('type') == 'error':
                Logger.warning(f"服务器错误: {obj.get('message')}")
                return None
            if 'data' in obj and obj.get('encoding') == 'base64':
                return base64.b64decode(obj['data']).decode('utf-8', errors='replace')
            return text
        except json.JSONDecodeError:
            return text
    
    async def _do_noise_handshake(self):
        """执行 Noise_XX 握手 (客户端视角)"""
        Logger.info("🤝 开始 Noise 加密握手 (XX Pattern)...")
        
        # 1. 客户端发送第一步 (-> e)
        msg1 = self.cipher.process_handshake(b'')
        await self.websocket.send(msg1)
        
        # 2. 接收服务端的响应 (<- e, ee, s, es)
        msg2 = await self.websocket.recv()
        # 3. 客户端生成最后一步回应 (-> s, se) 并彻底完成本地握手
        msg3 = self.cipher.process_handshake(msg2)
        await self.websocket.send(msg3)
        
        if self.cipher.is_established:
            Logger.success("✅ 握手成功，端到端加密通道已建立！")
        else:
            raise RuntimeError("握手未进入 Established 状态")

    async def connect(self) -> bool:
        url = self._build_url()
        Logger.info(f"正在连接: {url}")
        self._init_cipher()
        try:
            self.websocket = await websockets.connect(
                url, ping_interval=20, ping_timeout=10,
            )
            
            # 🔥 在连接成功后，立即进行密码学握手
            await self._do_noise_handshake()
            
            self.connected = True
            return True
            
        except InvalidStatus as e:
            Logger.error(f"❌ 连接被拒绝 (HTTP {e.status_code}): {e}")
            return False
        except PermissionError as e:
            Logger.error(f"🚨 认证失败: {e}")
            return False
        except Exception as e:
            Logger.error(f"❌ 连接/握手失败: {type(e).__name__} - {e}")
            return False
    
    async def send_command(self, command: str) -> bool:
        if not self.connected or not self.websocket:
            if self.running: Logger.warning("⚠️ 未连接，无法发送命令")
            return False
        
        try:
            # 1. 组装负载
            raw_bytes = self._encode_message(command)
            # 2. 🔥 加密
            encrypted = self.cipher.encrypt(raw_bytes)
            # 3. 发送密文
            await self.websocket.send(encrypted)
            
            self.stats['sent'] += 1
            return True
        except ConnectionClosed as e:
            if e.code in (1000, 1006): Logger.info("🔌 终端会话已结束")
            else: Logger.info(f"🔌 连接异常关闭: code={e.code}, reason={e.reason}")
            self.connected = False
            self.running = False
        except Exception as e:
            Logger.error(f"❌ 发送失败: {e}")
            self.stats['errors'] += 1
            return False
    
    async def receive_loop(self):
        try:
            async for message in self.websocket:
                if isinstance(message, bytes):
                    # 🔥 解密
                    decrypted = self.cipher.decrypt(message)
                    # 解码为文本
                    decoded = self._decode_message(decrypted)
                    if decoded:
                        print(decoded, end='', flush=True)
                        self.stats['received'] += 1
            
            Logger.info("\n🔌 服务器主动结束了会话")
            
        except ConnectionClosed as e:
            Logger.info(f"\n🔌 连接异常关闭: code={e.code}, reason={e.reason}")
        except Exception as e:
            Logger.error(f"\n⚠️ 接收异常: {type(e).__name__} - {e}")
            self.stats['errors'] += 1
        finally:
            self.connected = False
            self.running = False

    async def heartbeat_loop(self):
        try:
            while self.connected and self.running:
                await asyncio.sleep(Config.HEARTBEAT_INTERVAL)
                if self.connected and self.websocket:
                    raw_bytes = json.dumps({"type": "heartbeat"}).encode('utf-8')
                    # 🔥 心跳包也要加密
                    await self.websocket.send(self.cipher.encrypt(raw_bytes))
                    Logger.debug("💓 发送心跳 (已加密)")
        except asyncio.CancelledError:
            pass
        except Exception as e:
            Logger.debug(f"⚠️ 心跳异常: {e}")
    
    async def interactive_input_loop(self):
        fd = sys.stdin.fileno()
        old_settings = termios.tcgetattr(fd)
        
        try:
            tty.setraw(fd)
            sys.stdout.write("\r\n\033[36m[INFO] 🎮 原生终端透传模式已启用 (带 ChaCha20-Poly1305 加密)\033[0m\r\n")
            sys.stdout.flush()
            
            loop = asyncio.get_event_loop()
            
            def read_input_with_timeout():
                ready, _, _ = select.select([fd], [], [], 0.1)
                if ready:
                    return os.read(fd, 1).decode('utf-8', errors='ignore')
                return None

            while self.running and self.connected:
                char = await loop.run_in_executor(None, read_input_with_timeout)
                if not self.running or not self.connected:
                    break
                if char:
                    await self.send_command(char)
                
        except Exception as e:
            termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
            Logger.error(f"\r\n❌ 输入循环异常: {e}\r\n")
        finally:
            termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
            
    async def run(self):
        reconnect_count = 0
        while self.running:
            if not await self.connect():
                reconnect_count += 1
                if reconnect_count > Config.MAX_RECONNECT:
                    Logger.error("❌ 达到最大重连次数，退出")
                    break
                Logger.info(f"🔄 {reconnect_count}/{Config.MAX_RECONNECT} 秒后重试...")
                await asyncio.sleep(Config.RECONNECT_DELAY)
                continue
            
            reconnect_count = 0 
            
            self.receive_task = asyncio.create_task(self.receive_loop())
            self.heartbeat_task = asyncio.create_task(self.heartbeat_loop())
            
            await self.interactive_input_loop()
            
            self.running = False
            if self.heartbeat_task: self.heartbeat_task.cancel()
            if self.receive_task: self.receive_task.cancel()
            
            for task in [self.heartbeat_task, self.receive_task]:
                if task and not task.done():
                    try: await task
                    except asyncio.CancelledError: pass
            
            if self.websocket:
                await self.websocket.close()
                Logger.info("🔐 连接已关闭")
            break
    
    def print_stats(self):
        print("\n" + "="*50)
        Logger.info("📊 会话与安全统计")
        print(f"   发送消息: {self.stats['sent']}")
        print(f"   接收消息: {self.stats['received']}")
        print(f"   错误次数: {self.stats['errors']}")
        print("-" * 50)
        
        t_time = self.cipher.total_crypto_time
        t_bytes = self.cipher.total_crypto_bytes
        if t_time > 0:
            speed_mb = (t_bytes / 1024 / 1024) / t_time
            Logger.success("🛡️ Noise Protocol 加密分析 (ChaCha20-Poly1305)")
            print(f"   处理数据总量: {t_bytes} Bytes")
            print(f"   加解密总耗时: {t_time:.6f} 秒")
            print(f"   吞吐量评估  : {speed_mb:.2f} MB/s")
            
            # 单次操作纳秒级别预估
            if (self.stats['sent'] + self.stats['received']) > 0:
                avg_latency = (t_time * 1000) / (self.stats['sent'] + self.stats['received'])
                print(f"   平均附加延迟: {avg_latency:.4f} 毫秒/包")
        print("="*50 + "\n")


def parse_args():
    parser = argparse.ArgumentParser(description="终端 WebSocket 测试客户端 (带安全框架)")
    parser.add_argument('--url', '-u', default='ws://localhost:8000/api/ws/terminal')
    parser.add_argument('--request-id', '-r', required=True)
    parser.add_argument('--token', '-t', default=None)
    parser.add_argument('--debug', '-d', action='store_true')
    parser.add_argument('--raw', action='store_true')
    return parser.parse_args()


async def main_async():
    args = parse_args()
    Config.DEBUG = args.debug
    if args.raw: Config.USE_JSON_FORMAT = False
    
    Logger.info(f"🚀 终端安全测试客户端启动")
    
    client = TerminalClient(args.url, args.request_id, args.token)
    try:
        await client.run()
    except KeyboardInterrupt:
        Logger.warning("\n⚡ 用户中断，退出")
    finally:
        client.print_stats()


def main():
    try:
        asyncio.run(main_async())
    except KeyboardInterrupt:
        print("\n👋 再见！")
        sys.exit(0)
    except Exception as e:
        Logger.error(f"💥 程序异常: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()