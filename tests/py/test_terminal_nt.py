# -*- coding: utf-8 -*-
"""Windows 终端后端实测 (ConPTY 优先 / 管道回退)，对齐 Go 版 go/handlers/terminal_windows_test.go。"""
import os
import queue
import sys
import threading
import time

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..', 'py'))

pytestmark = pytest.mark.skipif(os.name != 'nt', reason='仅 Windows 平台')

from agent import _ConPtyTerminal, _PipeTerminal, _create_windows_backend, _windows_default_shell  # noqa: E402


def _default_env():
    env = os.environ.copy()
    env.pop('PROMPT_COMMAND', None)
    env.setdefault('TERM', 'xterm-256color')
    if 'LANG' not in env:
        env['LANG'] = 'C.UTF-8'
    return env


def _spawn(rows=24, cols=80):
    shell = _windows_default_shell()
    assert shell, '未找到可用的 Windows shell'
    backend = _create_windows_backend(shell, _default_env(), rows, cols)
    backend.start()
    return backend


def _read_until(backend, marker, timeout=15.0):
    """读取终端输出直到包含 marker（或超时），避免阻塞读卡死整个测试"""
    q = queue.Queue()
    stop = threading.Event()

    def reader():
        while not stop.is_set():
            try:
                chunk = backend.read(2048)
            except OSError:
                break
            if chunk is None:
                time.sleep(0.01)
                continue
            if not chunk:
                break
            q.put(chunk)
        stop.set()

    thread = threading.Thread(target=reader, daemon=True)
    thread.start()
    collected = bytearray()
    deadline = time.time() + timeout
    try:
        while True:
            remaining = deadline - time.time()
            if remaining <= 0:
                break
            try:
                chunk = q.get(timeout=remaining)
            except queue.Empty:
                continue
            collected += chunk
            if marker in collected:
                return bytes(collected)
        raise AssertionError(f"等待 {marker!r} 超时, 已收集: {bytes(collected)!r}")
    finally:
        stop.set()


def _assert_echo(backend, command, marker):
    try:
        time.sleep(0.8)  # 等待 shell 完成启动
        backend.write(command + b"\r\nexit\r\n")
        out = _read_until(backend, marker)
        assert marker in out
        assert b"\r\n" in out  # 真实终端换行行为（与 Unix PTY 对齐）
    finally:
        backend.kill_tree()
        backend.close()


def test_conpty_backend():
    """验证终端可正常交互: 命令回显与执行输出（Win10 1809+ 应走 ConPTY 真实终端）"""
    backend = _spawn()
    # Win10 1903 (18362) 及以上应命中 ConPTY 路径
    assert isinstance(backend, _ConPtyTerminal), f'期望 ConPTY 后端, 实际: {type(backend).__name__}'
    # 注意: 语法高亮会在单词间插入 VT 序列, 因此标记只匹配输出词本身 (与 Go 测试一致)
    _assert_echo(backend, b"echo PTYOK", b"PTYOK")


def test_conpty_resize():
    """验证 resize 不抛错（ConPTY 实际调用 ResizePseudoConsole）"""
    backend = _spawn()
    try:
        backend.set_size(30, 100)
        backend.set_size(24, 80)
    finally:
        backend.kill_tree()
        backend.close()


def test_pipe_fallback_backend():
    """直接实例化管道回退实现，验证旧系统（无 ConPTY）路径可用"""
    shell = _windows_default_shell()
    backend = _PipeTerminal(shell, _default_env(), 24, 80)
    backend.start()
    try:
        time.sleep(0.5)
        backend.write(b"echo PIPEOK\r\nexit\r\n")
        out = _read_until(backend, b"PIPEOK")
        assert b"PIPEOK" in out
    finally:
        backend.kill_tree()
        backend.close()