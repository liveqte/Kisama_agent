#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
终端 WebSocket 测试客户端
用于测试 /api/ws/terminal 接口

用法:
    python test_terminal_client.py --url ws://localhost:8000/api/ws/terminal --request-id test123
    python test_terminal_client.py  # 交互式模式
"""

import asyncio
import json
import base64
import argparse
import sys
import os
from typing import Optional
import websockets
from websockets.exceptions import ConnectionClosed, InvalidStatus

import tty
import termios
import select

# ============ 配置 ============
class Config:
    DEBUG = False
    HEARTBEAT_INTERVAL = 10  # 心跳间隔（秒）
    RECONNECT_DELAY = 3      # 重连延迟（秒）
    MAX_RECONNECT = 3        # 最大重连次数
    
    # 消息格式配置
    USE_JSON_FORMAT = True        # 是否使用 JSON + Base64 格式发送
    ENCODE_INPUT_AS_BASE64 = True # 输入是否 base64 编码
    DECODE_OUTPUT_FROM_BYTES = True # 输出是否从 bytes 解码

# ============ 日志工具 ============
class Logger:
    """轻量级日志工具"""
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
        print(f"{color}{prefix}{cls.COLORS['RESET']} {message}", flush=True)
    
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

# ============ 终端客户端 ============
class TerminalClient:
    """终端 WebSocket 客户端"""
    
    def __init__(self, url: str, request_id: str, token: Optional[str] = None):
        self.url = url
        self.request_id = request_id
        self.token = token
        self.websocket: Optional[websockets.WebSocketClientProtocol] = None
        self.connected = False
        self.running = True
        self.heartbeat_task: Optional[asyncio.Task] = None
        self.receive_task: Optional[asyncio.Task] = None
        
        # 统计信息
        self.stats = {
            'sent': 0,
            'received': 0,
            'errors': 0,
        }
    
    def _build_url(self) -> str:
        """构建带参数的完整 URL"""
        separator = '&' if '?' in self.url else '?'
        url = f"{self.url}{separator}request_id={self.request_id}"
        if self.token:
            url += f"&token={self.token}"
        return url
    
    def _encode_message(self, text: str) -> str:
        """编码消息：支持纯文本或 JSON+Base64"""
        if not Config.USE_JSON_FORMAT:
            return text
        
        # JSON 格式
        payload = {"type": "input", "data": text}
        if Config.ENCODE_INPUT_AS_BASE64:
            payload["data"] = base64.b64encode(text.encode('utf-8')).decode('ascii')
            payload["encoding"] = "base64"
        return json.dumps(payload)
    
    def _decode_message(self, data) -> str:
        """解码收到的消息"""
        if isinstance(data, bytes) and Config.DECODE_OUTPUT_FROM_BYTES:
            return data.decode('utf-8', errors='replace')
        elif isinstance(data, str):
            # 尝试解析 JSON 响应
            try:
                obj = json.loads(data)
                if obj.get('type') == 'heartbeat':
                    return None  # 心跳包不显示
                if obj.get('type') == 'error':
                    Logger.warning(f"服务器错误: {obj.get('message')}")
                    return None
                # 如果有 base64 编码的响应数据
                if 'data' in obj and obj.get('encoding') == 'base64':
                    return base64.b64decode(obj['data']).decode('utf-8', errors='replace')
                return json.dumps(obj, ensure_ascii=False)
            except json.JSONDecodeError:
                return data
        return str(data)
    
    async def connect(self) -> bool:
        """建立连接"""
        url = self._build_url()
        Logger.info(f"正在连接: {url}")
        
        try:
            # 添加自定义请求头（如果需要认证）
            extra_headers = {}
            if self.token:
                extra_headers["X-Auth-Token"] = self.token
            
            self.websocket = await websockets.connect(
                url,
                # extra_headers=extra_headers,
                ping_interval=20,  # 自动 ping
                ping_timeout=10,
            )
            self.connected = True
            Logger.success("✅ 连接成功！")
            Logger.info("💡 提示: 输入命令后按回车发送，输入 'exit' 或 'quit' 退出")
            return True
            
        except InvalidStatus as e:
            Logger.error(f"❌ 连接被拒绝 (HTTP {e.status_code}): {e}")
            return False
        except Exception as e:
            Logger.error(f"❌ 连接失败: {type(e).__name__} - {e}")
            return False
    
    async def send_command(self, command: str) -> bool:
        """发送命令到终端"""
        if not self.connected or not self.websocket:
            # 🔥 只有在预期运行状态下才打印警告，退出阶段直接静默丢弃
            if self.running:
                Logger.warning("⚠️ 未连接，无法发送命令")
            return False
        
        try:
            message = self._encode_message(command)
            await self.websocket.send(message)
            self.stats['sent'] += 1
            Logger.debug(f"📤 已发送 ({len(command)} 字符): {command[:50]}...")
            return True
        except ConnectionClosed as e:
            # 🔥 1000 是正常关闭，1006 是服务端进程退出导致的强制断开，都视为正常结束
            if e.code in (1000, 1006):
                Logger.info("🔌 终端会话已结束")
            else:
                Logger.info(f"🔌 连接异常关闭: code={e.code}, reason={e.reason}")
            self.connected = False
            self.running = False
        except Exception as e:
            Logger.error(f"❌ 发送失败: {e}")
            self.stats['errors'] += 1
            return False
    
    async def receive_loop(self):
        """持续接收服务器消息"""
        try:
            async for message in self.websocket:
                decoded = self._decode_message(message)
                if decoded:
                    # 直接输出终端内容（保持 ANSI 转义序列）
                    print(decoded, end='', flush=True)
                    self.stats['received'] += 1
            
            # 🔥 正常收到服务端 Code 1000 优雅关闭帧，async for 自然结束
            Logger.info("\n🔌 服务器主动结束了会话")
            
        except ConnectionClosed as e:
            Logger.info(f"\n🔌 连接异常关闭: code={e.code}, reason={e.reason}")
        except Exception as e:
            Logger.error(f"\n⚠️ 接收异常: {type(e).__name__} - {e}")
            self.stats['errors'] += 1
        finally:
            # 🔥 核心修复：无论如何退出，必须把状态置为 False！
            self.connected = False
            self.running = False

    async def heartbeat_loop(self):
        """心跳保活"""
        try:
            while self.connected and self.running:
                await asyncio.sleep(Config.HEARTBEAT_INTERVAL)
                if self.connected and self.websocket:
                    heartbeat = json.dumps({"type": "heartbeat"})
                    await self.websocket.send(heartbeat)
                    Logger.debug("💓 发送心跳")
        except asyncio.CancelledError:
            pass
        except Exception as e:
            Logger.debug(f"⚠️ 心跳异常: {e}")
    
    async def interactive_input_loop(self):
        """真正的终端透传模式 (Raw Mode) - 完美模拟 Web xterm.js"""
        fd = sys.stdin.fileno()
        old_settings = termios.tcgetattr(fd)
        
        try:
            tty.setraw(fd)
            sys.stdout.write("\r\n\033[36m[INFO] 🎮 原生终端透传模式已启用 (完全由服务器接管渲染)\033[0m\r\n")
            sys.stdout.flush()
            
            loop = asyncio.get_event_loop()
            
            def read_input_with_timeout():
                """使用 select 增加 0.1 秒超时"""
                ready, _, _ = select.select([fd], [], [], 0.1)
                if ready:
                    # 🔥 进阶优化：使用底层的 os.read 绕过 Python TextIOWrapper 的内部缓存
                    # 这能确保任何原始字节（哪怕是不完整的 UTF-8）都能瞬间发出，永不阻塞
                    return os.read(fd, 1).decode('utf-8', errors='ignore')
                return None

            while self.running and self.connected:
                char = await loop.run_in_executor(None, read_input_with_timeout)
                
                # 状态变为 False 时（如 receive_loop 收到关闭帧），立刻退出
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
        """主运行逻辑"""
        reconnect_count = 0
        
        while self.running:
            # 尝试连接
            if not await self.connect():
                reconnect_count += 1
                if reconnect_count > Config.MAX_RECONNECT:
                    Logger.error("❌ 达到最大重连次数，退出")
                    break
                Logger.info(f"🔄 {reconnect_count}/{Config.MAX_RECONNECT} 秒后重试...")
                await asyncio.sleep(Config.RECONNECT_DELAY)
                continue
            
            reconnect_count = 0  # 重置重连计数
            
            # 启动后台任务
            self.receive_task = asyncio.create_task(self.receive_loop())
            self.heartbeat_task = asyncio.create_task(self.heartbeat_loop())
            
            # 运行交互式输入（主任务）
            await self.interactive_input_loop()
            
            # 清理
            self.running = False
            if self.heartbeat_task:
                self.heartbeat_task.cancel()
            if self.receive_task:
                self.receive_task.cancel()
            
            # 等待任务结束
            for task in [self.heartbeat_task, self.receive_task]:
                if task and not task.done():
                    try:
                        await task
                    except asyncio.CancelledError:
                        pass
            
            # 关闭连接
            if self.websocket:
                await self.websocket.close()
                Logger.info("🔐 连接已关闭")
            
            break  # 退出后不重连（可按需修改）
    
    def print_stats(self):
        """打印统计信息"""
        print("\n" + "="*50)
        Logger.info("📊 会话统计")
        print(f"   发送消息: {self.stats['sent']}")
        print(f"   接收消息: {self.stats['received']}")
        print(f"   错误次数: {self.stats['errors']}")
        print("="*50 + "\n")


# ============ 非交互式测试模式 ============
async def run_batch_test(url: str, request_id: str, commands: list, token: str = None):
    """批量执行命令测试（非交互式）"""
    client = TerminalClient(url, request_id, token)
    
    if not await client.connect():
        return False
    
    # 启动接收任务
    receive_task = asyncio.create_task(client.receive_loop())
    
    try:
        # 等待连接初始化
        await asyncio.sleep(1)
        
        # 依次执行命令
        for cmd in commands:
            Logger.info(f"📤 执行: {cmd}")
            await client.send_command(cmd + '\n')
            # 等待输出（可根据实际调整）
            await asyncio.sleep(2)
        
        # 等待剩余输出
        await asyncio.sleep(3)
        
    finally:
        # 清理
        client.running = False
        if receive_task and not receive_task.done():
            receive_task.cancel()
            try:
                await receive_task
            except asyncio.CancelledError:
                pass
        if client.websocket:
            await client.websocket.close()
        
        client.print_stats()
    
    return True


# ============ 命令行入口 ============
def parse_args():
    parser = argparse.ArgumentParser(
        description="终端 WebSocket 测试客户端",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
示例:
  # 交互式模式
  %(prog)s --url ws://localhost:8000/api/ws/terminal --request-id my-session

  # 批量测试模式
  %(prog)s --url ws://localhost:8000/api/ws/terminal --request-id test \\
           --batch "echo hello" "ls -la" "pwd"

  # 启用调试日志
  %(prog)s --debug --url ws://localhost:8000/api/ws/terminal -r test123
        """
    )
    
    parser.add_argument(
        '--url', '-u',
        default='ws://localhost:8000/api/ws/terminal',
        help='WebSocket 服务器地址 (默认: %(default)s)'
    )
    parser.add_argument(
        '--request-id', '-r',
        required=True,
        help='会话唯一标识 (必需)'
    )
    parser.add_argument(
        '--token', '-t',
        default=None,
        help='认证 Token (可选)'
    )
    parser.add_argument(
        '--batch', '-b',
        nargs='*',
        default=None,
        help='批量执行命令模式（空格分隔多个命令）'
    )
    parser.add_argument(
        '--output', '-o',
        default=None,
        help='将输出保存到文件 (批量模式)'
    )
    parser.add_argument(
        '--debug', '-d',
        action='store_true',
        help='启用调试日志'
    )
    parser.add_argument(
        '--raw',
        action='store_true',
        help='使用原始文本格式（非 JSON）发送消息'
    )
    
    return parser.parse_args()


async def main_async():
    """异步主函数"""
    args = parse_args()
    
    # 应用配置
    Config.DEBUG = args.debug
    if args.raw:
        Config.USE_JSON_FORMAT = False
    
    Logger.info(f"🚀 终端测试客户端启动")
    Logger.debug(f"配置: URL={args.url}, RequestID={args.request_id}")
    
    if args.batch:
        # 批量测试模式
        Logger.info(f"📋 批量模式: 执行 {len(args.batch)} 条命令")
        success = await run_batch_test(args.url, args.request_id, args.batch, args.token)
        sys.exit(0 if success else 1)
    else:
        # 交互式模式
        client = TerminalClient(args.url, args.request_id, args.token)
        try:
            await client.run()
        except KeyboardInterrupt:
            Logger.warning("\n⚡ 用户中断，退出")
        finally:
            client.print_stats()


def main():
    """同步入口"""
    try:
        asyncio.run(main_async())
    except KeyboardInterrupt:
        print("\n👋 再见！")
        sys.exit(0)
    except Exception as e:
        Logger.error(f"💥 程序异常: {e}")
        if Config.DEBUG:
            import traceback
            traceback.print_exc()
        sys.exit(1)


if __name__ == "__main__":
    main()