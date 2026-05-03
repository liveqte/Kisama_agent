import os
import sys
import json
import pty
import signal
import fcntl
import select
import asyncio
import base64
from fastapi import WebSocket, WebSocketDisconnect
from loguru import logger as Logger
import shutil
import struct
import termios

class TerminalSessionHandler:
    """终端会话处理器 - 被动接受连接模式"""
    
    def __init__(self):
        self.heartbeat_timeout = None
        self.last_heartbeat = 0
        self.HEARTBEAT_TIMEOUT = 30  # 30秒
        self.process = None
        self.master_fd = None
        self.slave_fd = None
        self.websocket: WebSocket = None  # 新增：持有 FastAPI WebSocket 实例
        self.request_id: str = None       # 新增：会话标识

    async def cleanup(self):
        """彻底清理终端资源"""
        Logger.info(f"[{self.request_id}] 执行终端资源清理...")
        
        # 1. 杀死子进程
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
            except Exception as e:
                Logger.debug(f"[{self.request_id}] 清理进程失败: {e}")
            self.process = None

        # 2. 关闭 PTY 文件描述符
        for fd_name in ['master_fd', 'slave_fd']:
            fd = getattr(self, fd_name)
            if fd is not None:
                try:
                    os.close(fd)
                except Exception as e:
                    Logger.debug(f"[{self.request_id}] 关闭 {fd_name} 失败: {e}")
                setattr(self, fd_name, None)
        
        # 3. 关闭 WebSocket（如果还开着）
        if self.websocket:
            try:
                # 尝试用 1000 状态码关闭
                await self.websocket.close(code=1000)
            except RuntimeError:
                pass # FastAPI/Starlette 内部状态错误
            except Exception as e:
                pass # 忽略其他网络异常
            finally:
                self.websocket = None

    async def start_session(self, websocket: WebSocket, request_id: str):
        """
        启动终端会话 - 被动接受连接版本
        :param websocket: FastAPI WebSocket 实例（已升级的连接）
        :param request_id: 会话唯一标识
        """
        self.websocket = websocket
        self.request_id = request_id
        log = lambda msg: Logger.info(f"[终端会话 {request_id}] {msg}")
        
        log("终端会话已建立，等待接受连接...")
        
        try:
            # 🔹 关键：接受 WebSocket 连接（FastAPI 需要显式调用）
            await websocket.accept()
            log("✅ WebSocket 连接已接受")
            
            # 🔹 可选：从查询参数或 Headers 获取额外认证信息
            # token = websocket.query_params.get("token")
            # auth_header = websocket.headers.get("x-auth-token")
            # 在此处添加你的认证逻辑...
            
            # 🔹 启动终端会话主循环
            await self._run_terminal(websocket, request_id, log)
            
        except WebSocketDisconnect:
            log("🔌 客户端主动断开连接")
        except ConnectionResetError:
            log("💥 连接被强制重置")
        except Exception as e:
            log(f"❌ 终端会话异常: {type(e).__name__} - {e}")
            # 尝试发送错误信息给客户端
            try:
                await websocket.send_json({"type": "error", "message": str(e)})
            except:
                pass
        finally:
            # 🔹 无论成功失败，确保资源清理
            await self.cleanup() 
            log(f"✅ 资源清理完毕: {request_id}")
    @staticmethod
    def get_available_shell():
        # 1. 优先尊重用户环境变量配置（前提是该路径真实存在且可执行）
        env_shell = os.environ.get('SHELL')
        if env_shell and os.path.exists(env_shell) and os.access(env_shell, os.X_OK):
            return env_shell
        
        preferred_shells = ['bash', 'zsh', 'ash', 'sh']
        for sh_name in preferred_shells:
            sh_path = shutil.which(sh_name)
            if sh_path:
                return sh_path
                
        # 3. 极端情况下的终极兜底（通常类 Unix 系统至少会有 /bin/sh）
        return '/bin/sh'

    def set_pty_size(self, rows: int, cols: int):
        """设置 PTY 终端的窗口大小"""
        if self.master_fd is not None:
            try:
                # 打包成 C 语言的 struct winsize 结构: 
                # unsigned short ws_row, ws_col, ws_xpixel, ws_ypixel
                winsz = struct.pack("HHHH", rows, cols, 0, 0)
                fcntl.ioctl(self.master_fd, termios.TIOCSWINSZ, winsz)
            except Exception as e:
                Logger.warning(f"设置 PTY 尺寸失败: {e}")

    async def _run_terminal(self, websocket: WebSocket, request_id: str, log):
        """运行终端 - 稳健版（适配 FastAPI WebSocket）"""
        self.master_fd = None
        self.slave_fd = None
        
        try:
            # 针对 VS Code 等环境的终端错误处理
            env = os.environ.copy()
            env.pop('PROMPT_COMMAND', None)
            # 可选：设置终端类型
            env.setdefault('TERM', 'xterm-256color')

            if 'LANG' not in env:
                env['LANG'] = 'C.UTF-8'

            # 1. 创建 PTY
            self.master_fd, self.slave_fd = pty.openpty()
            # 🔥 关键修复：给伪终端一个默认尺寸 (比如标准的 24行 80列)
            # 这样 TUI 程序启动时就能拿到尺寸并正常渲染了
            self.set_pty_size(24, 80)

            # 2. 启动子进程：直接把 slave_fd 传给 std 接口
            shell = self.get_available_shell()
            log(f"🐚 使用 Shell 路径: {shell}")
            def pty_preexec():
                import os
                import termios
                import fcntl
                
                # 第一步：成为新的进程会话组长 (脱离原有的控制终端)
                os.setsid()
                
                # 第二步：强行绑定当前的 PTY 为控制终端 (Controlling Terminal)
                # 由于 subprocess 启动时我们传入了 stdin=self.slave_fd，
                # 所以在子进程中，0 号文件描述符(stdin) 已经被连到了 PTY 上。
                try:
                    fcntl.ioctl(0, termios.TIOCSCTTY, 0)
                except Exception:
                    pass
            self.process = await asyncio.create_subprocess_exec(
                shell,
                stdin=self.slave_fd,
                stdout=self.slave_fd,
                stderr=self.slave_fd,
                env=env,
                preexec_fn=pty_preexec
            )
            
            log(f"🚀 终端进程已启动 (PID: {self.process.pid})")

            # 3. 必须在子进程启动后关闭主进程中的 slave_fd 引用
            if self.slave_fd is not None:
                os.close(self.slave_fd)
                self.slave_fd = None

            # 4. 设置 master_fd 为非阻塞模式
            fl = fcntl.fcntl(self.master_fd, fcntl.F_GETFL)
            fcntl.fcntl(self.master_fd, fcntl.F_SETFL, fl | os.O_NONBLOCK)

            # 5. 启动三个并发任务
            tasks = [
                asyncio.create_task(self._handle_pty_output(websocket, self.master_fd, log)),
                asyncio.create_task(self._handle_websocket_input(websocket, self.master_fd, log)),
                asyncio.create_task(self._monitor_process(self.process, log)),
            ]
            
            # 等待任意一个任务结束（如进程退出/连接断开）
            done, pending = await asyncio.wait(tasks, return_when=asyncio.FIRST_COMPLETED)
            
            # 取消剩余任务
            for t in pending:
                t.cancel()
                try:
                    await t
                except asyncio.CancelledError:
                    pass  # 预期中的取消
            try:
                # 必须在这个时刻发，因为此时连接还是活的
                await websocket.close(code=1000, reason="Terminal exited normally")
                log("🤝 已向客户端发送正常关闭信号 (Code 1000)")
            except Exception:
                pass # 忽略已断开引发的异常

        except Exception as e:
            log(f"💥 启动终端失败: {type(e).__name__} - {str(e)}")
            await self.cleanup()
            raise  # 向上抛出，让外层 finally 处理
    
    async def _handle_pty_output(self, websocket: WebSocket, master: int, log):
        """处理 PTY 输出 → WebSocket 发送"""
        try:
            while True:
                if master is None:
                    break
                
                # 使用 select 检查 master_fd 是否有数据可读
                rlist, _, _ = select.select([master], [], [], 0.1)
                if master in rlist:
                    try:
                        data = os.read(master, 8192)  # 调大缓冲区减少系统调用
                        if not data:  # EOF
                            log("📭 PTY 输出结束 (EOF)")
                            break
                        # 发送二进制数据（终端输出通常是字节流）
                        await websocket.send_bytes(data)
                    except BlockingIOError:
                        # 非阻塞模式下无数据可读，正常现象
                        await asyncio.sleep(0.01)
                    except OSError as e:
                        if e.errno == 5:  # Input/output error (PTY 已关闭)
                            break
                        raise
                else:
                    # 无数据时让出控制权，防止忙等待
                    await asyncio.sleep(0.01)
                    
        except (OSError, WebSocketDisconnect, ConnectionResetError):
            pass  # 连接关闭或终端退出，正常退出
        except Exception as e:
            log(f"⚠️ 处理PTY输出异常: {type(e).__name__} - {e}")
    
    async def _handle_websocket_input(self, websocket: WebSocket, master: int, log):
        """处理 WebSocket 输入 → PTY 写入"""
        try:
            async for message in websocket.iter_text():  # 或 iter_bytes() 根据客户端协议
                if master is None:
                    break
                    
                # 🔹 支持两种消息格式：
                # 1. 纯文本：直接当作终端输入
                # 2. JSON 对象：{"type": "input", "data": "base64..."}
                
                if message.strip().startswith('{'):
                    try:
                        data = json.loads(message)
                        msg_type = data.get('type')
                        
                        # 心跳包处理
                        if msg_type == 'heartbeat':
                            await websocket.send_json({"type": "heartbeat", "ts": asyncio.get_event_loop().time()})
                            continue
                        
                        # 终端输入处理
                        if msg_type == 'input' and 'data' in data:
                            input_data = data['data']
                            # 支持 base64 编码的输入（处理特殊字符/二进制）
                            if data.get('encoding') == 'base64':
                                input_bytes = base64.b64decode(input_data)
                            else:
                                input_bytes = input_data.encode('utf-8')
                            os.write(master, input_bytes)
                            log(f"⌨️  收到终端输入: {len(input_bytes)} 字节")
                            continue

                        if msg_type == 'resize':
                            rows = data.get('rows', 24)
                            cols = data.get('cols', 80)
                            self.set_pty_size(rows, cols)
                            log(f"📐 终端尺寸已调整为: {cols}列 x {rows}行")
                            continue

                    except json.JSONDecodeError:
                        # 解析失败，当作普通文本处理
                        pass
                
                # 默认：当作普通文本输入
                os.write(master, message.encode('utf-8'))
                log(f"⌨️  收到原始输入: {len(message)} 字符")
                
        except WebSocketDisconnect:
            log("🔌 客户端断开，停止接收输入")
        except OSError as e:
            if e.errno == 5:  # PTY 已关闭
                log("📭 PTY 已关闭，停止写入")
            else:
                log(f"⚠️ 写入PTY失败: {e}")
        except Exception as e:
            log(f"⚠️ 处理WebSocket输入异常: {type(e).__name__} - {e}")
    
    async def _monitor_process(self, process, log):
        """监控子进程状态"""
        try:
            return_code = await process.wait()
            log(f"🏁 终端进程退出，返回码: {return_code}")
        except Exception as e:
            log(f"⚠️ 监控进程异常: {type(e).__name__} - {e}")

from fastapi import FastAPI, WebSocket, Query
from contextlib import asynccontextmanager

app = FastAPI()

@asynccontextmanager
async def lifespan(app: FastAPI):
    # 启动时初始化
    yield
    # 关闭时清理（可选）

app.router.lifespan_context = lifespan


@app.websocket("/api/ws/terminal")
async def terminal_websocket(
    websocket: WebSocket,
    request_id: str = Query(..., description="会话唯一标识"),
    # token: str = Query(..., description="认证令牌")  # 可选认证参数
):
    """
    WebSocket 终端入口
    客户端连接: wss://your-domain/api/ws/terminal?request_id=xxx
    """
    handler = TerminalSessionHandler()
    await handler.start_session(websocket, request_id)