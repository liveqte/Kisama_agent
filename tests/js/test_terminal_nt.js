// Windows 终端后端实测: bun-pty (Bun) / node-pty (Node) 走 ConPTY, 管道回退兜底, 对齐 tests/py/test_terminal_nt.py。
// 运行: bun test tests/js/test_terminal_nt.js  或  node --test tests/js/test_terminal_nt.js
// 依赖: bun 下需要 bun-pty; node 下需要 node-pty (或 @lydell/node-pty)。
const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const { exec, spawn } = require('child_process');

const IS_WIN = process.platform === 'win32';
const skipOpts = { skip: IS_WIN ? false : '仅 Windows 平台' };

// 与 agent.js 相同的 pty 加载方式: Bun 运行时用 bun-pty, Node 运行时用 node-pty
function loadPty() {
    if (typeof Bun !== 'undefined') return require('bun-pty');
    try { return require('node-pty'); } catch (e) { return require('@lydell/node-pty'); }
}

// 与 agent.js getAvailableShell() Windows 分支一致的 shell 探测
function getWindowsShell() {
    const systemRoot = process.env.SystemRoot || 'C:\\Windows';
    const candidates = [
        path.join(systemRoot, 'System32', 'WindowsPowerShell', 'v1.0', 'powershell.exe'),
        process.env.COMSPEC,
        path.join(systemRoot, 'System32', 'cmd.exe'),
    ];
    for (const sh of candidates) {
        if (sh && fs.existsSync(sh)) return sh;
    }
    return 'cmd.exe';
}

// 与 agent.js _runTerminal() 相同的默认环境
function defaultEnv() {
    const env = Object.assign({}, process.env);
    delete env.PROMPT_COMMAND;
    env.TERM = 'xterm-256color';
    if (!env.LANG) env.LANG = 'C.UTF-8';
    return env;
}

function spawnTerminal(ptyLib, shell) {
    const cwd = process.env.USERPROFILE || process.env.HOME || process.cwd();
    return ptyLib.spawn(shell, [], {
        name: 'xterm-256color',
        cols: 80, rows: 24,
        cwd: cwd,
        env: defaultEnv(),
    });
}

// 管道回退后端 (对齐 agent.js PipeTerminalShim): 无真实终端, resize no-op, stdout+stderr 合并
function spawnPipeBackend(shell) {
    const child = spawn(shell, [], {
        env: defaultEnv(),
        windowsHide: true,
        stdio: ['pipe', 'pipe', 'pipe'],
    });
    return {
        child,
        pid: child.pid,
        onData(cb) {
            child.stdout.on('data', (d) => cb(d.toString('utf-8')));
            child.stderr.on('data', (d) => cb(d.toString('utf-8')));
            return { dispose() {} };
        },
        write(s) { try { child.stdin.write(s); } catch (e) {} },
        resize() {},
        kill() { try { child.kill(); } catch (e) {} },
    };
}

// 收集输出直到包含 marker (或超时), 避免阻塞读卡死整个测试
function collectUntil(backend, marker, timeoutMs = 15000) {
    return new Promise((resolve, reject) => {
        let collected = '';
        let done = false;
        const finish = (err, val) => {
            if (done) return;
            done = true;
            clearTimeout(timer);
            if (err) reject(err); else resolve(val);
        };
        const timer = setTimeout(() => {
            finish(new Error(`等待 ${marker} 超时, 已收集: ${JSON.stringify(collected.slice(-500))}`));
        }, timeoutMs);
        backend.onData((data) => {
            collected += data;
            if (collected.includes(marker)) finish(null, collected);
        });
    });
}

// 对齐 py/Go KillTree: taskkill 强制结束整个进程树, 报错说明进程已退出, 忽略即可
function killTree(pid) {
    if (!pid) return;
    try {
        exec(`taskkill /F /T /PID ${pid}`, { windowsHide: true }, () => {});
    } catch (e) {}
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

test('Windows 终端可交互: 命令回显 + CRLF 换行 (对齐 py test_conpty_backend)', skipOpts, async () => {
    const ptyLib = loadPty();
    const shell = getWindowsShell();
    assert.ok(shell, '未找到可用的 Windows shell');
    const backend = spawnTerminal(ptyLib, shell);
    try {
        await sleep(800); // 等待 shell 完成启动
        backend.write('echo JSOK\r\nexit\r\n');
        const out = await collectUntil(backend, 'JSOK');
        assert.ok(out.includes('JSOK'), `输出应包含 JSOK, 实际: ${JSON.stringify(out.slice(-300))}`);
        assert.ok(out.includes('\r\n'), `输出应为真实终端 CRLF 换行, 实际: ${JSON.stringify(out.slice(-300))}`);
    } finally {
        killTree(backend.pid);
        try { backend.kill(); } catch (e) {}
    }
});

test('Windows 终端 resize 不抛错 (对齐 py test_conpty_resize)', skipOpts, async () => {
    const ptyLib = loadPty();
    const shell = getWindowsShell();
    const backend = spawnTerminal(ptyLib, shell);
    try {
        backend.resize(100, 30);
        backend.resize(80, 24);
        await sleep(200);
    } finally {
        killTree(backend.pid);
        try { backend.kill(); } catch (e) {}
    }
});

test('管道回退模式可用 (对齐 py test_pipe_fallback_backend)', skipOpts, async () => {
    const shell = getWindowsShell();
    const backend = spawnPipeBackend(shell);
    try {
        await sleep(500);
        backend.write('echo PIPEOK\r\nexit\r\n');
        const out = await collectUntil(backend, 'PIPEOK');
        assert.ok(out.includes('PIPEOK'), `输出应包含 PIPEOK, 实际: ${JSON.stringify(out.slice(-300))}`);
    } finally {
        killTree(backend.pid);
        try { backend.kill(); } catch (e) {}
    }
});
