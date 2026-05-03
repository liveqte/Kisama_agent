import os
import sys
import json
import pty
import signal
import fcntl
import select
import asyncio
import base64
import struct
import shutil
import termios
from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Query
from contextlib import asynccontextmanager
from loguru import logger as Logger

# 导入 Noise 协议库
from noise.connection import NoiseConnection, Keypair

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
            
        # self.expected_remote_pub = base64.b64decode(expected_remote_pub_b64) if expected_remote_pub_b64 else None
        
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
        self.AGENT_PRIVATE_KEY = self._read_key_file("noise_keys/agent_private.key")
        self.CONTROL_PUBLIC_KEY = self._read_key_file("noise_keys/control_public.key")
        
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

    async def start_session(self, websocket: WebSocket, request_id: str):
        self.websocket = websocket
        self.request_id = request_id
        log = lambda msg: Logger.info(f"[终端会话 {request_id}] {msg}")
        
        log("终端会话已建立，等待接受连接...")
        
        try:
            await websocket.accept()
            log("✅ WebSocket 连接已接受")
            
            # 🔥 在启动 bash 之前，必须先完成 Noise 握手！
            await self._do_noise_handshake(websocket, log)
            
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
                        encrypted_data = self.cipher.encrypt(data)
                        await websocket.send_bytes(encrypted_data)
                        
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
            async for encrypted_message in websocket.iter_bytes():
                if master is None: break
                
                # 🔥 接收后：使用 Noise 管道解密
                try:
                    decrypted = self.cipher.decrypt(encrypted_message)
                except Exception as e:
                    log(f"⚠️ 解密失败，收到非法包: {e}")
                    break # 密码学错误，断开连接

                # 尝试解析是否是前端发来的 JSON 控制指令
                try:
                    text_msg = decrypted.decode('utf-8')
                    if text_msg.strip().startswith('{'):
                        data = json.loads(text_msg)
                        msg_type = data.get('type')
                        
                        if msg_type == 'heartbeat':
                            # 回心跳包也要加密
                            reply = json.dumps({"type": "heartbeat"}).encode()
                            await websocket.send_bytes(self.cipher.encrypt(reply))
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

# ==================== FastAPI 路由 ====================
app = FastAPI()

@app.websocket("/api/ws/terminal")
async def terminal_websocket(websocket: WebSocket, request_id: str = Query(...)):
    handler = TerminalSessionHandler()
    await handler.start_session(websocket, request_id)