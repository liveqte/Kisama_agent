const fs = require('fs');
const pty = require('node-pty');
const express = require('express');
const expressWs = require('express-ws');
const createNoise = require('noise-c.wasm');

// ==================== 日志工具 ====================
const Logger = {
    info: (msg) => console.log(`\x1b[36m[INFO]\x1b[0m ${msg}`),
    warning: (msg) => console.log(`\x1b[33m[WARN]\x1b[0m ${msg}`),
    error: (msg) => console.log(`\x1b[31m[ERROR]\x1b[0m ${msg}`),
};

// ==================== 0. 全局加载 WASM 引擎 ====================
let noiseModule = null;
const noiseReady = new Promise((resolve, reject) => {
    try {
        createNoise(function (noise) {
            if (!noise) return reject(new Error("Failed to load noise-c.wasm module"));
            noiseModule = noise;
            resolve();
        });
    } catch (e) {
        reject(e);
    }
});

// ==================== 1. 解耦的 Noise 加密封装类 ====================
class NoiseSessionWrapper {
    constructor(isInitiator, localPrivB64, expectedRemotePubB64) {
        this.isInitiator = isInitiator;
        this.localPrivB64 = localPrivB64;
        this.expectedRemotePubB64 = expectedRemotePubB64;
        
        this.handshakeFinished = false;
        this.hs = null;         // 握手状态机
        this.sendCipher = null; // 发送数据加密机
        this.recvCipher = null; // 接收数据解密机
    }

    async init() {
        await noiseReady;
        const noise = noiseModule;

        const role = this.isInitiator ? noise.constants.NOISE_ROLE_INITIATOR : noise.constants.NOISE_ROLE_RESPONDER;
        
        this.hs = noise.HandshakeState("Noise_XX_25519_ChaChaPoly_BLAKE2s", role);

        const prologue = Buffer.from("kisama_terminal_v1");
        const s = this.localPrivB64 ? Buffer.from(this.localPrivB64, 'base64') : null;
        const rs = this.expectedRemotePubB64 ? Buffer.from(this.expectedRemotePubB64, 'base64') : null;

        // Initialize (prologue, s, rs, psk)
        this.hs.Initialize(prologue, s, rs, null);
    }

    processHandshake(payload) {
        if (this.handshakeFinished) return Buffer.alloc(0);
        const noise = noiseModule;

        // 1. 如果有传入数据，读取客户端发来的包
        if (payload && payload.length > 0 && this.hs.GetAction() === noise.constants.NOISE_ACTION_READ_MESSAGE) {
            this.hs.ReadMessage(payload);
        }

        // 检查读取后是否可以直接完成握手 (拆分密钥)
        if (this.hs.GetAction() === noise.constants.NOISE_ACTION_SPLIT) {
            this._splitAndFinish();
            return Buffer.alloc(0);
        }

        // 2. 轮到服务端发包
        if (this.hs.GetAction() === noise.constants.NOISE_ACTION_WRITE_MESSAGE) {
            // 🔥 修复点 1：必须显式传入空 Buffer，避免底层 C 语言获取到 null 指针
            const outMsg = this.hs.WriteMessage(Buffer.alloc(0)); 
            
            // 写入后再次检查是否完成握手
            if (this.hs.GetAction() === noise.constants.NOISE_ACTION_SPLIT) {
                this._splitAndFinish();
            }
            
            return Buffer.from(outMsg);
        }

        return Buffer.alloc(0);
    }

    _splitAndFinish() {
        const ciphers = this.hs.Split();
        // 🚀 核心修复：作为 Responder (Agent)，第一个密钥 ciphers[0] 是用来解密的，第二个 ciphers[1] 是用来加密的
        if (this.isInitiator) {
            this.sendCipher = ciphers[0];
            this.recvCipher = ciphers[1];
        } else {
            this.recvCipher = ciphers[0]; // 客户端发来的消息用这个解密
            this.sendCipher = ciphers[1]; // 发往客户端的消息用这个加密
        }
        this.handshakeFinished = true;
        
        try {
            if (this.hs) {
                this.hs.free(); 
            }
        } catch (e) {}
        this.hs = null;
    }

    encrypt(plaintext) {
        if (!this.handshakeFinished) throw new Error("握手未完成，无法加密数据");
        return Buffer.from(this.sendCipher.EncryptWithAd(Buffer.alloc(0), plaintext));
    }

    decrypt(ciphertext) {
        if (!this.handshakeFinished) throw new Error("握手未完成，无法解密数据");
        return Buffer.from(this.recvCipher.DecryptWithAd(Buffer.alloc(0), ciphertext));
    }

    free() {
        // 🔥 修复点 3：全面增加安全释放机制，防止内存泄漏或报错
        try { if (this.sendCipher) this.sendCipher.free(); } catch(e) {}
        try { if (this.recvCipher) this.recvCipher.free(); } catch(e) {}
        try { if (this.hs) this.hs.free(); } catch(e) {}
        
        this.sendCipher = null;
        this.recvCipher = null;
        this.hs = null;
    }
}

// ==================== 2. 终端会话处理器 ====================
class TerminalSessionHandler {
    constructor() {
        this.ptyProcess = null;
        this.websocket = null;
        this.requestId = null;
        
        this.AGENT_PRIVATE_KEY = this._readKeyFile("noise_keys/agent_private.key");
        this.CONTROL_PUBLIC_KEY = this._readKeyFile("noise_keys/control_public.key");
        
        this.cipher = new NoiseSessionWrapper(
            false, 
            this.AGENT_PRIVATE_KEY,
            this.CONTROL_PUBLIC_KEY
        );
    }

    _readKeyFile(filepath) {
        try {
            if (fs.existsSync(filepath)) {
                return fs.readFileSync(filepath, 'utf8').trim();
            }
            return null;
        } catch (e) {
            Logger.error(`读取密钥文件 ${filepath} 失败: ${e.message}`);
            return null;
        }
    }

    async cleanup() {
        if (this.requestId) {
            Logger.info(`[${this.requestId}] 执行终端资源清理...`);
        }

        if (this.ptyProcess) {
            try { this.ptyProcess.kill(); } catch (e) {}
            this.ptyProcess = null;
        }

        if (this.cipher) {
            this.cipher.free(); // 释放 C++ 层内存
        }

        if (this.websocket) {
            try {
                if (this.websocket.readyState === this.websocket.OPEN) {
                    this.websocket.close(1000, "Cleanly closed");
                }
            } catch (e) {} 
            finally {
                this.websocket = null;
            }
        }
    }

    _receiveWsBytes(ws) {
        return new Promise((resolve, reject) => {
            const onMessage = (msg) => {
                ws.off('error', onError);
                resolve(msg);
            };
            const onError = (err) => {
                ws.off('message', onMessage);
                reject(err);
            };
            ws.once('message', onMessage);
            ws.once('error', onError);
        });
    }

    async _doNoiseHandshake(ws, log) {
        log("🤝 开始 Noise 加密握手...");
        
        try {
            await this.cipher.init();

            // 1. 接收客户端的第一个握手包
            const msg1 = await this._receiveWsBytes(ws);
            
            // 2. 消费 msg1，获取并发出服务端的握手回包
            const msg2 = this.cipher.processHandshake(msg1);
            if (msg2 && msg2.length > 0) {
                ws.send(msg2);
            }
            
            // 3. 接收客户端的最后一个握手包
            const msg3 = await this._receiveWsBytes(ws);
            this.cipher.processHandshake(msg3);
            
            // 校验握手状态
            if (!this.cipher.handshakeFinished) {
                throw new Error("三次握手交互后仍未进入 Established 状态");
            }
            
            log("✅ Noise 握手完成，端到端加密通道已建立！");
        } catch (e) {
            log(`💥 握手失败详情: ${e.stack || e.message || e}`);
            throw new Error("加密握手失败");
        }
    }

    getAvailableShell() {
        const envShell = process.env.SHELL;
        if (envShell && fs.existsSync(envShell)) return envShell;
        
        const shells = ['/bin/bash', '/bin/zsh', '/bin/ash', '/bin/sh'];
        for (const sh of shells) {
            if (fs.existsSync(sh)) return sh;
        }
        return '/bin/sh';
    }

    async startSession(ws, requestId, token) {
        this.websocket = ws;
        this.requestId = requestId;
        const log = (msg) => Logger.info(`[终端会话 ${requestId}] ${msg}`);
        
        // 🚀 动态判断：有 Token 视为 HTTPS/WSS (明文)，无 Token 视为 WS (启用 Noise)
        const useNoise = !token; 
        log(useNoise ? "🔗 检测到 WS 连接，启用 Noise 加密" : "🔐 检测到 Token，视为 WSS 链路，跳过 Noise");

        try {
            if (useNoise) {
                // 必须在拉起 PTY 之前完成加密握手
                await this._doNoiseHandshake(ws, log);
            }
            
            // 🚀 核心修复：必须显式传递 useNoise 到运行函数
            await this._runTerminal(ws, requestId, log, useNoise);
            
        } catch (e) {
            log(`❌ 终端会话异常: ${e.name} - ${e.message}`);
            await this.cleanup();
        }
    }

    async _runTerminal(ws, requestId, log, useNoise) {
        const shell = this.getAvailableShell();
        log(`🐚 使用 Shell 路径: ${shell}`);

        const env = Object.assign({}, process.env);
        delete env.PROMPT_COMMAND;
        env.TERM = 'xterm-256color';
        if (!env.LANG) env.LANG = 'C.UTF-8';

        try {
            this.ptyProcess = pty.spawn(shell, [], {
                name: 'xterm-256color',
                cols: 80,
                rows: 24,
                cwd: process.env.HOME || process.cwd(),
                env: env
            });

            log(`🚀 终端进程已启动 (PID: ${this.ptyProcess.pid || 'unknown'})`);

            // --- PTY -> WebSocket (发送端) ---
            this.ptyProcess.onData((data) => {
                try {
                    let sendData = Buffer.from(data, 'utf-8');
                    // 🚀 仅在 Noise 模式且握手完成后加密
                    if (useNoise && this.cipher && this.cipher.handshakeFinished) {
                        sendData = this.cipher.encrypt(sendData);
                    }
                    if (ws.readyState === ws.OPEN) { // 1 = OPEN
                        ws.send(sendData);
                    }
                } catch (e) { /* 忽略发送失败 */ }
            });

            this.ptyProcess.onExit(({ exitCode, signal }) => {
                log(`🔌 终端进程退出 (Code: ${exitCode}, Signal: ${signal})`);
                this.cleanup();
            });

            // --- WebSocket -> PTY (接收端) ---
            ws.on('message', (message) => {
                if (!this.ptyProcess) return;

                try {
                    // 🚀 根据连接策略决定解密逻辑
                    let decrypted;
                    if (useNoise) {
                        decrypted = this.cipher.decrypt(Buffer.from(message));
                    } else {
                        decrypted = Buffer.from(message);
                    }
                    
                    let isJson = false;
                    let textMsg = decrypted.toString('utf-8');

                    // 处理 JSON 控制指令 (heartbeat, resize 等)
                    if (textMsg.trim().startsWith('{')) {
                        try {
                            const data = JSON.parse(textMsg);
                            isJson = true;
                            
                            const msgType = data.type;
                            if (msgType === 'heartbeat') {
                                let reply = Buffer.from(JSON.stringify({ type: "heartbeat" }));
                                if (useNoise) reply = this.cipher.encrypt(reply);
                                ws.send(reply);
                                return;
                            }
                            
                            if (msgType === 'resize') {
                                this.ptyProcess.resize(data.cols || 80, data.rows || 24);
                                return;
                            }

                            if (msgType === 'input' && data.data !== undefined) {
                                let inputStr = data.encoding === 'base64' 
                                    ? Buffer.from(data.data, 'base64').toString('utf-8')
                                    : data.data;
                                this.ptyProcess.write(inputStr);
                                return;
                            }
                        } catch (err) {
                            isJson = false; 
                        }
                    }

                    if (!isJson) {
                        this.ptyProcess.write(decrypted.toString('utf-8'));
                    }

                } catch (e) {
                    log(`⚠️ 指令处理异常: ${e.message}`);
                    // 如果是加密错误，通常需要断开连接以保证安全
                    if (useNoise) this.cleanup(); 
                }
            });

            ws.on('close', () => {
                log("🔌 客户端主动断开");
                this.cleanup();
            });

        } catch (e) {
            log(`💥 启动终端失败: ${e.message}`);
            await this.cleanup();
            throw e;
        }
    }
}

// ==================== FastAPI 路由等效实现 ====================
const app = express();
expressWs(app);

app.ws('/api/ws/terminal', async (ws, req) => {
    const requestId = req.query.request_id;
    
    if (!requestId) {
        ws.close(1008, "Missing request_id");
        return;
    }

    const handler = new TerminalSessionHandler();
    await handler.startSession(ws, requestId);
});

const PORT = 8002;
app.listen(PORT, () => {
    Logger.info(`🚀 Terminal Server is running on ws://localhost:${PORT}/api/ws/terminal`);
});