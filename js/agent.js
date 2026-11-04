#!/usr/bin/env node
// ==================== 1. 终极管道拦截：悄悄吞掉 WASM 启动警告 ====================
const muteWasmKeywords = [
    'wasm streaming compile failed',
    'Failed to parse URL from',
    'falling back to ArrayBuffer instantiation'
];

function createStreamFilter(originalWrite) {
    return function (chunk, encoding, callback) {
        const str = chunk.toString();
        if (muteWasmKeywords.some(keyword => str.includes(keyword))) {
            if (typeof callback === 'function') callback();
            return true;
        }
        return originalWrite.apply(this, arguments);
    };
}
process.stdout.write = createStreamFilter(process.stdout.write);
process.stderr.write = createStreamFilter(process.stderr.write);
// ============================================================================
// 📦 依赖导入
// ============================================================================
const express = require('express');
const http = require('http');
const https = require('https');
const net = require('net');
const tls = require('tls');
const crypto = require('crypto');
const fs = require('fs');
const fsp = require('fs').promises;
const zlib = require('zlib');
const path = require('path');
const os = require('os');
const readline = require('readline');
const { exec, spawn } = require('child_process');
const cron = require('node-cron');
const si = require('systeminformation');
const { encrypt: ecies_encrypt } = require('eciesjs');
const base64 = require('base64-js');
const expressWs = require('express-ws');
const createNoise = require('noise-c.wasm');

// ==================== .env 加载 ====================
// 读取脚本同目录下的 .env (与 keys/ 回退文件同路径约定)，真实环境变量优先，.env 只填补空缺。
// 不处理行内注释 (保护含 # 的值，如域名 x-target-host 反代语法)；文件不存在或解析异常时静默跳过。
// 必须在本文件任何环境变量求值 (Config 静态字段等) 之前执行。
function loadDotEnv() {
    try {
        const envPath = path.join(__dirname, '.env');
        if (!fs.existsSync(envPath)) return;
        for (let raw of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
            let line = raw.trim();
            if (!line || line.startsWith('#')) continue;
            if (line.startsWith('export ')) line = line.slice(7).trimStart();
            const eq = line.indexOf('=');
            if (eq <= 0) continue;
            const key = line.slice(0, eq).trim();
            let value = line.slice(eq + 1).trim();
            if (value.length >= 2 && (value.startsWith('"') && value.endsWith('"') || value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            if (key && !(key in process.env)) process.env[key] = value;
        }
    } catch (e) { /* .env 解析失败不影响启动 */ }
}
loadDotEnv();

let p256;
let secp256k1;

let pty;
try {
    if (typeof Bun !== 'undefined') {
        pty = require('bun-pty');
    } else {
        pty = require('@lydell/node-pty');
    }
} catch (e) {
    console.error('\x1b[31m[FATAL ERROR]\x1b[0m 核心终端依赖 (pty) 加载失败，程序终止！');
    console.error('\x1b[31m[FATAL ERROR]\x1b[0m 详细错误: ' + e.message);
    console.error('💡 修复建议: 请在项目目录下运行 npm install @lydell/node-pty');
    
    // 强制退出程序，状态码 1 表示异常退出
    process.exit(1);
}
// ==================== 日志工具 ====================
const Logger = {
    // 定义日志等级枚举
    LEVELS: { DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3 },

    // 动态获取当前配置的日志等级（做个容错，防止 Config 尚未加载时报错，默认兜底为 2）
    get currentLevel() {
        return (typeof Config !== 'undefined' && Config.LOG_LEVEL !== undefined) 
            ? Config.LOG_LEVEL 
            : 2; 
    },

    // 级别 0: 灰色字体
    debug: (msg) => {
        if (Logger.currentLevel <= Logger.LEVELS.DEBUG) {
            console.log(`\x1b[90m[DEBUG]\x1b[0m ${msg}`);
        }
    },
    
    // 级别 1: 青色字体
    info: (msg) => {
        if (Logger.currentLevel <= Logger.LEVELS.INFO) {
            console.log(`\x1b[36m[INFO]\x1b[0m ${msg}`);
        }
    },
    
    // 级别 2: 黄色字体
    warn: (msg) => {
        if (Logger.currentLevel <= Logger.LEVELS.WARN) {
            console.log(`\x1b[33m[WARN]\x1b[0m ${msg}`);
        }
    },
    
    // 级别 3: 红色字体
    error: (msg) => {
        if (Logger.currentLevel <= Logger.LEVELS.ERROR) {
            console.log(`\x1b[31m[ERROR]\x1b[0m ${msg}`);
        }
    }
};

// 仅选择真实存在的目录作为终端工作目录，避免 HOME 等环境变量指向不存在路径时 chdir 失败 (如 Git Bash 下的 /home/kis)
function resolveSafeCwd() {
    const candidates = [
        process.env.USERPROFILE,
        process.env.HOME,
        os.homedir(),
        process.cwd() // 兜底：保持当前目录
    ];
    for (const dir of candidates) {
        if (dir && fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
            return dir;
        }
    }
    return process.cwd();
}

// FILE_ROOT 校验: 候选目录必须真实存在，全部无效时降级到当前工作目录 (不自动创建，避免文件接口逐请求报错)
function resolveSafeFileRoot() {
    let homedir = null;
    try { homedir = os.homedir(); } catch (e) { /* 极端剥离环境下可能无法确定主目录 */ }
    const candidates = [process.env.FILE_ROOT, homedir];
    for (const dir of candidates) {
        if (dir && fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
            return dir;
        }
        if (dir) console.log(`\x1b[33m[WARN]\x1b[0m FILE_ROOT 候选目录不存在, 已跳过: ${dir}`);
    }
    console.log(`\x1b[33m[WARN]\x1b[0m FILE_ROOT 全部候选无效, 降级到当前工作目录: ${process.cwd()}`);
    return process.cwd();
}
// ============================================================================
// 📦 Pydantic 响应模型定义 (用于生成文档示例和数据验证)
// ============================================================================

// 基础响应模型
class BaseResponse {
  constructor(status = 'ok') {
    this.status = status;
  }
}

class CountResponse extends BaseResponse {
  constructor(status = 'ok', count = 0) {
    super(status);
    this.count = count;
  }
}

// 基础信息响应
class BaseInfoResponse extends BaseResponse {
  constructor() {
    super();
    this.arch = '';
    this.cpu_cores = 0;
    this.cpu_name = '';
    this.disk_total = 0;
    this.gpu_name = '';
    this.ipv4 = null;
    this.ipv6 = null;
    this.mem_total = 0;
    this.os = '';
    this.kernel_version = '';
    this.swap_total = 0;
    this.version = Config.AGENT_VERSION;
    this.virtualization = '';
    this.marks = [];
    this.session_key = '';
    this.noise_key = null;
  }
}

// 状态响应
class StatusResponse extends BaseResponse {
  constructor() {
    super();
    this.cpu = { usage: 0 };
    this.ram = { total: 0, used: 0 };
    this.swap = { total: 0, used: 0 };
    this.load = { load1: 0, load5: 0, load15: 0 };
    this.disk = { total: 0, used: 0 };
    this.network = { up: 0, down: 0, totalUp: 0, totalDown: 0 };
    this.connections = { tcp: 0, udp: 0 };
    this.uptime = 0;
    this.process = 0;
    this.message = '';
  }
}

// 执行响应
class ExecResponse extends BaseResponse {
  constructor() {
    super();
    this.result = '';
    this.exitcode = 0;
    this.timeout = false;
    this.cmd = '';
  }
}

// 文件相关响应
class FileInfo {
  constructor() {
    this.name = '';
    this.path = '';
    this.type = '';
    this.size = 0;
    this.mtime = '';
    this.mode = '';
    this.mode_octal = '';
    this.owner = '';
  }
}

class AuthorityInfo {
  constructor() {
    this.path = '';
    this.name = '';
    this.mode = '';
    this.mode_octal = '';
    this.type = '';
    this.readable = false;
    this.writable = false;
    this.executable = false;
  }
}

class AuthorityQueryResponse extends BaseResponse {
  constructor() {
    super();
    this.files = [];
  }
}
// ============================================================================
// 🔐 Noise 协议密钥生成器 (带强力调试信息)
// ============================================================================
class NoiseKeyGenerator {
  static _generateRawKeypair() {
    const { privateKey, publicKey } = crypto.generateKeyPairSync('x25519');

    const privJwk = privateKey.export({ format: 'jwk' });
    const pubJwk = publicKey.export({ format: 'jwk' });

    const privBuf = Buffer.from(privJwk.d, 'base64url');
    const pubBuf = Buffer.from(pubJwk.x, 'base64url');

    // Logger.debug(`\n[DEBUG-NOISE-KEY] 🔑 正在生成底层 X25519 密钥...`);
    // Logger.debug(`[DEBUG-NOISE-KEY] 长度检查 -> Private: ${privBuf.length} bytes, Public: ${pubBuf.length} bytes (必须为32)`);
    
    if (privBuf.length !== 32 || pubBuf.length !== 32) {
        Logger.error(`[🚨 严重警告] X25519 密钥长度非 32 字节，Noise 协议必定崩溃！`);
    }

    return {
      private_b64: privBuf.toString('base64'),
      public_b64: pubBuf.toString('base64')
    };
  }

  static generateSingle(roleName) {
    const keys = this._generateRawKeypair();
    return {
      role: roleName,
      private_b64: keys.private_b64,
      public_b64: keys.public_b64
    };
  }

  static generatePair(controlRole = "Controller", agentRole = "Agent") {
    const pair = {
      control: this.generateSingle(controlRole),
      agent: this.generateSingle(agentRole)
    };
    
    // Logger.debug(`[DEBUG-NOISE-KEY] 📡 分配给控制端(Control)的公钥: ${pair.control.public_b64}`);
    // Logger.debug(`[DEBUG-NOISE-KEY] 🛡️ 分配给代理端(Agent)的公钥: ${pair.agent.public_b64}\n`);
    
    return pair;
  }
}
// ============================================================================
// ⚙️ 全局配置类
// ============================================================================
class Config {
  static Rtimeout = parseInt(process.env.EXEC_TIMEOUT || '30');
  static EXEC_SHELL_MODE = (process.env.EXEC_SHELL || 'true').toLowerCase() === 'true';
  static DEBUG = (process.env.DEBUG || 'false').toLowerCase() === 'true';
  static TIMESTAMP_WINDOW = parseInt(process.env.TIMESTAMP_WINDOW || '3600');
  // 日志级别 (0=DEBUG/1=INFO/2=WARN/3=ERROR): LOG_LEVEL 环境变量控制, 缺省 3=只输出错误;
  // 未显式设置且 DEBUG=true 时接管为 0 (调试全量输出)
  static LOG_LEVEL = parseInt(process.env.LOG_LEVEL || (this.DEBUG ? '0' : '3'), 10);
  
  static ECDSA_PUBLIC_KEY_PEM = Config._getConfigValue('ECDSA_PUBKEY', 'keys/agent_ecdsa_pub.pem') || 'ECDSA公钥内容';
  static ECIES_PUBLIC_KEY_PEM = Config._getConfigValue('ECIES_PUBKEY', 'keys/agent_ecies_pub.b64') || 'ECIES公钥内容';
  static TEMPKEY_DEFAULT_TTL_HOURS = parseInt(process.env.TEMPKEY_TTL || '24', 10);
  static TEMPKEY_MAX_TTL_HOURS = parseInt(process.env.TEMPKEY_MAX_TTL || '168', 10);

  static FILE_ROOT = resolveSafeFileRoot();
  static MAX_UPLOAD_SIZE = parseInt(process.env.MAX_UPLOAD_SIZE || '104857600');
  static FOLLOW_SYMLINKS = (process.env.FOLLOW_SYMLINKS || 'false').toLowerCase() === 'true';

  // 🔐 0.6.1 M10 下载加密契约 (docs/API.MD 下载加密小节): x-dl-enc:1 且文件 ≤ 此值(字节)时,
  // /api/file/download 响应走 0.5.6 AES-256-GCM(session_key) 容器并盖 x-encrypted: true;
  // 其余 (无 opt-in 头/超阈值) 保持原始字节流——旧客户端零适配, 大文件不付 Base64+33% 与整读
  // 内存代价。0 = 关闭加密 (恒明文)。
  static DOWNLOAD_ENCRYPT_MAX = Number.isFinite(parseInt(process.env.DOWNLOAD_ENCRYPT_MAX || '4194304', 10))
    ? parseInt(process.env.DOWNLOAD_ENCRYPT_MAX || '4194304', 10)
    : 4194304;
  static FILE_AUDIT_LOG = (process.env.FILE_AUDIT_LOG || 'true').toLowerCase() === 'true';

  static InitTask = true;
  static onetasks = [];
  static crontasks = {};
  static cronloop = false;
  static TASK_TIMEOUT = parseInt(process.env.TASK_TIMEOUT || '300');
  static CRON_CHECK_INTERVAL = parseInt(process.env.CRON_INTERVAL || '30');

  static onetimetasks_log = [];
  static crontasks_log = [];
  static MAX_TASK_LOG_SIZE = parseInt(process.env.MAX_TASK_LOG || '100');

  static HOST = process.env.HOST || '0.0.0.0';
  static PORT = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || '8000');
  // KMODE 启动模式: '1'=启动时自动创建临时隧道并开启 stdin /domain 指令监听;
  // '2'=启动时自动创建临时隧道并把域名上报至 shz.al (全程静默);
  // '2q'/'2quic'=KMODE=2 且启动隧道走 QUIC (UDP/7844) 边缘传输 (详见 docs/API.MD 第九节)。
  // KMODE 归一化为数字 ('2q'→'2'), KMODE_QUIC 是其后缀派生的内部开关 —— KMODE 只影响启动
  // 行为; /api/argo 创建隧道时经请求体 quic 字段独立选择传输; '1q'/'0q' 等组合不存在。
  static KMODE = (() => {
    const raw = (process.env.KMODE || '0').trim();
    return /^2q(?:uic)?$/i.test(raw) ? '2' : (raw || '0');
  })();
  static KMODE_QUIC = /^2q(?:uic)?$/i.test((process.env.KMODE || '').trim());
  // KMODE=2: shz.al 自定义名 (可预测 URL 的组成部分); KNAME_KEY 缺省复用 KNAME
  static KNAME = (process.env.KNAME || '').trim();
  static KNAME_KEY = (process.env.KNAME_KEY || '').trim();
  // 域名文件路径, 缺省 $HOME/domain.txt, 支持 $HOME / ~ 前缀
  static KPATH = process.env.KPATH || '';
  // 内置加密 DNS (DoH, docs/API.MD 第十八节): 'off'=系统解析 (默认, 零行为变化);
  // 'on'=全部出站域名解析走 DoH JSON API 防污染。KISAMA_DOH_SERVERS 逗号分隔自定义
  // DoH 服务器链, 缺省 阿里 223.5.5.5 → Cloudflare 1.1.1.1 → Google 8.8.8.8
  static DNS_MODE = (process.env.KISAMA_DNS || 'off').trim().toLowerCase();
  static DOH_SERVERS = (process.env.KISAMA_DOH_SERVERS || '').trim();
  static DOH_SERVERS_DEFAULT = ['https://223.5.5.5/resolve', 'https://1.1.1.1/dns-query', 'https://8.8.8.8/resolve'];
  static AGENT_VERSION = process.env.AGENT_VERSION || '0.6.2-js';
  static SESSION_KEY = crypto.randomBytes(32).toString('base64');
  // static SESSION_KEY =""
  static NOISE_KEYS_INTERNAL = NoiseKeyGenerator.generatePair();

  // 🔐 终端 WS 明文降级模式令牌: Base64(HMAC-SHA256(SESSION_KEY, "kisama-ws-token-v1"))。
  // 仅已认证客户端能从 baseinfo 取得 SESSION_KEY; 旧方案 token=agent 公钥可被任意 Noise
  // 握手发起方从 msg2 解出（XX 模式 msg2 的 s 仅用临时密钥 DH 加密），等于公开值。
  static wsDowngradeToken() {
    // 注意: HMAC 密钥必须是 SESSION_KEY 解码后的 32 字节原始值 (与其他语言版本一致)
    return crypto.createHmac('sha256', Buffer.from(this.SESSION_KEY, 'base64')).update('kisama-ws-token-v1').digest('base64');
  }

  // 🔐 凭证生命周期：tempkey 过期后轮换会话级长期密钥。仅轮换 SESSION_KEY 与控制端 Noise
  // 密钥对 (终端身份校验的预期对端)；agent Noise 密钥对保持稳定, 客户端缓存的 agent 公钥
  // 继续有效。临时授权有效期内经 baseinfo 下发到外部的长期凭据由此全部失效。
  static rotateOperationalSecrets() {
    const fresh = NoiseKeyGenerator.generatePair();
    this.NOISE_KEYS_INTERNAL.control = fresh.control;
    this.NOISE_KEY.controller.private = fresh.control.private_b64;
    this.SESSION_KEY = crypto.randomBytes(32).toString('base64');
    // status 有缓存且含动态数据, 必须同步失效; baseinfo 的 P/T 系统快照不含凭证,
    // 轮换只换响应阶段装配的凭证, 不再清空 (docs/API.MD 16.4 第 4 条)
    this._status_cache = null;
    this._status_cache_time = 0;
    Logger.warn('🔄 [SECURITY] 临时密钥过期, 已轮换 SESSION_KEY 与控制端 Noise 密钥对 (合法控制端需重新认证获取 baseinfo 新密钥)');
  }

  static NOISE_KEY = {
    controller: {
      private: this.NOISE_KEYS_INTERNAL.control.private_b64
    },
    agent: {
      public: this.NOISE_KEYS_INTERNAL.agent.public_b64
    }
  };
  // ================= 🚀 新增：缓存模块配置 =================
  static BASEINFO_CACHE_TTL = 3600;      // 基础信息 net 组缓存 1 小时 (秒, 沿用旧常量名)
  static BASEINFO_LOCAL_TTL = 30;        // 基础信息 local 组缓存 30 秒 (秒)
  static BASEINFO_FAIL_BACKOFF = 60;     // T 组探测失败退避 60 秒 (秒)
  static STATUS_CACHE_TTL = 30;          // 实时状态缓存 30 秒 (秒)

  // P 级: 进程生命周期内只构建一次
  static _baseinfo_p_cache = null;
  static _baseinfo_p_promise = null;
  // T 级 local (disk/mem/swap, 30s): 单调时钟毫秒
  static _baseinfo_local_cache = null;
  static _baseinfo_local_time = 0;
  static _baseinfo_local_fail_time = 0;
  static _baseinfo_local_promise = null;
  // T 级 net (ipv4/ipv6, 3600s)
  static _baseinfo_net_cache = null;
  static _baseinfo_net_time = 0;
  static _baseinfo_net_fail_time = 0;
  static _baseinfo_net_promise = null;

  static _status_cache = null;
  static _status_cache_time = 0;
  static _status_fetch_promise = null;   // 用于高并发下的异步复用锁

  static _baseInfoNowMs() {
    return Number(process.hrtime.bigint() / 1000000n);
  }

  static _cloneBaseInfoPart(part) {
    return part ? { ...part } : null;
  }

  static async getBaseInfoP() {
    if (this._baseinfo_p_cache) return this._cloneBaseInfoPart(this._baseinfo_p_cache);
    if (!this._baseinfo_p_promise) {
      this._baseinfo_p_promise = new SystemInfoCollector().collectStaticInfo()
        .catch(err => {
          Logger.debug(`BaseInfo P 级探测失败, 使用兜底值且不再重试: ${err.message}`, 1);
          return SystemInfoCollector.staticFallback();
        })
        .then(data => {
          this._baseinfo_p_cache = data;
          return data;
        })
        .finally(() => { this._baseinfo_p_promise = null; });
    }
    return this._cloneBaseInfoPart(await this._baseinfo_p_promise);
  }

  static async getBaseInfoLocal(virtualization) {
    const now = this._baseInfoNowMs();
    if (this._baseinfo_local_cache && (now - this._baseinfo_local_time) < this.BASEINFO_LOCAL_TTL * 1000) {
      return this._cloneBaseInfoPart(this._baseinfo_local_cache);
    }
    if (this._baseinfo_local_fail_time && (now - this._baseinfo_local_fail_time) < this.BASEINFO_FAIL_BACKOFF * 1000) {
      return this._cloneBaseInfoPart(this._baseinfo_local_cache || SystemInfoCollector.localFallback());
    }
    if (!this._baseinfo_local_promise) {
      this._baseinfo_local_promise = new SystemInfoCollector().collectLocalInfo(virtualization)
        .then(data => {
          this._baseinfo_local_cache = data;
          this._baseinfo_local_time = this._baseInfoNowMs();
          this._baseinfo_local_fail_time = 0;
          return data;
        })
        .catch(err => {
          Logger.debug(`BaseInfo local 组探测失败, 沿用上次成功值: ${err.message}`, 1);
          this._baseinfo_local_fail_time = this._baseInfoNowMs();
          return this._baseinfo_local_cache || SystemInfoCollector.localFallback();
        })
        .finally(() => { this._baseinfo_local_promise = null; });
    }
    return this._cloneBaseInfoPart(await this._baseinfo_local_promise);
  }

  static async getBaseInfoNet() {
    const now = this._baseInfoNowMs();
    if (this._baseinfo_net_cache && (now - this._baseinfo_net_time) < this.BASEINFO_CACHE_TTL * 1000) {
      return this._cloneBaseInfoPart(this._baseinfo_net_cache);
    }
    if (this._baseinfo_net_fail_time && (now - this._baseinfo_net_fail_time) < this.BASEINFO_FAIL_BACKOFF * 1000) {
      return this._cloneBaseInfoPart(this._baseinfo_net_cache || SystemInfoCollector.netFallback());
    }
    if (!this._baseinfo_net_promise) {
      this._baseinfo_net_promise = new SystemInfoCollector().collectNetInfo()
        .then(data => {
          this._baseinfo_net_cache = data;
          this._baseinfo_net_time = this._baseInfoNowMs();
          this._baseinfo_net_fail_time = 0;
          return data;
        })
        .catch(err => {
          Logger.debug(`BaseInfo net 组探测失败, 沿用上次成功值: ${err.message}`, 1);
          this._baseinfo_net_fail_time = this._baseInfoNowMs();
          return this._baseinfo_net_cache || SystemInfoCollector.netFallback();
        })
        .finally(() => { this._baseinfo_net_promise = null; });
    }
    return this._cloneBaseInfoPart(await this._baseinfo_net_promise);
  }

  static _getConfigValue(key, filePath) {
    // 优先环境变量
    const envValue = process.env[key];
    if (envValue) return envValue;

    // 备选文件
    const fullPath = path.join(__dirname, filePath);
    if (fs.existsSync(fullPath)) {
      try {
        return fs.readFileSync(fullPath, 'utf8').trim();
      } catch (e) {
        // ignore
      }
    }
    return '';
  }

  static validate() {
    if (!this.DEBUG) {
      const errors = [];

      if (!this.ECDSA_PUBLIC_KEY_PEM) {
        errors.push('ECDSA_PUBKEY: 未设置环境变量且文件 keys/agent_ecdsa_pub.pem 不存在');
      }

      if (!this.ECIES_PUBLIC_KEY_PEM) {
        errors.push('ECIES_PUBKEY: 未设置环境变量且文件 keys/agent_ecies_pub.b64 不存在');
      }

      if (errors.length > 0) {
        Logger.error('❌ 配置校验失败 (非DEBUG模式必须配置密钥):');
        errors.forEach(err => Logger.error(`   • ${err}`));
        Logger.debug('\n💡 解决方法:');
        Logger.debug('   1. 设置环境变量: export ECDSA_PUBKEY=\'-----BEGIN PUBLIC KEY-----\'...\'');
        Logger.debug('   2. 或将密钥文件放入 ./keys/ 目录 (运行 generate_keys.py 生成)');
        process.exit(1);
      }
    }
  }
  // ==========================================
  // ✨ 新增核心方法：允许外部动态合并/注入配置
  // ==========================================
  // 支持字段: PORT / ECDSA_PUBLIC_KEY_PEM / ECIES_PUBLIC_KEY_PEM / KMODE / KNAME / KNAME_KEY / KPATH。
  // KMODE 示例: main({ PORT: 8000, ECDSA_PUBLIC_KEY_PEM: '...', ECIES_PUBLIC_KEY_PEM: '...',
  //                   KMODE: '2', KNAME: 'myname', KNAME_KEY: 'mysecret-pass', KPATH: '$HOME/domain.txt' })
  // 注: 传入值优先于环境变量 (与 PORT/密钥一致); Java 版烘焙配置为 env > baked, 跨端嵌入注意该差异。
  static merge(options = {}) {
    if (!options) return;

    // 1. 动态覆盖端口（顺便贴心地做一下类型转换，防止外部传了字符串类型的端口）
    if (options.PORT !== undefined && options.PORT !== null) {
      this.PORT = parseInt(String(options.PORT), 10);
    }

    // 2. 动态覆盖密钥（如果有传，就直接碾压原先从文件或环境读取的值）
    if (options.ECDSA_PUBLIC_KEY_PEM) {
      this.ECDSA_PUBLIC_KEY_PEM = options.ECDSA_PUBLIC_KEY_PEM.trim();
    }
    
    if (options.ECIES_PUBLIC_KEY_PEM) {
      this.ECIES_PUBLIC_KEY_PEM = options.ECIES_PUBLIC_KEY_PEM.trim();
    }

    // 3. 动态覆盖 KMODE 启动模式 (docs/API.MD 第九节): '0'=普通启动, '1'=隧道+域名文件+stdin,
    //    '2'=隧道+shz.al 静默上报, '2q'/'2quic'=2+QUIC 传输。显式传 '0'/0 可强制关闭环境变量
    //    设置的隧道模式; 非法取值 (含不存在的 '1q'/'0q' 后缀组合) 回退 '0' 并告警。
    //    消费点均为运行时动态读取, 在 main() 合并阶段覆盖即生效。
    if (options.KMODE !== undefined && options.KMODE !== null) {
      const raw = String(options.KMODE).trim();
      if (/^(?:0|1|2|2q|2quic)$/i.test(raw)) {
        const lower = raw.toLowerCase();
        this.KMODE = lower.startsWith('2') ? '2' : lower;
        this.KMODE_QUIC = /^2q(?:uic)?$/.test(lower);
      } else {
        this.KMODE = '0';
        this.KMODE_QUIC = false;
        Logger.warn(`[KMODE] ⚠️ 非法 KMODE 入参 (${String(options.KMODE)}), 已回退 0 (普通启动); 合法取值: 0/1/2/2q`);
      }
    }

    // 4. KMODE 配套参数: KNAME (shz.al 自定义名, 合法性由 KModeController.knameValid 校验并提示);
    //    KNAME_KEY (缺省复用 KNAME, 不传/空串即保持该语义 — 消费端为 KNAME_KEY || KNAME);
    //    KPATH (KMODE=1 域名文件路径, 支持 $HOME / ~ 前缀)
    if (options.KNAME && String(options.KNAME).trim()) {
      this.KNAME = String(options.KNAME).trim();
    }
    if (options.KNAME_KEY && String(options.KNAME_KEY).trim()) {
      this.KNAME_KEY = String(options.KNAME_KEY).trim();
    }
    if (options.KPATH && String(options.KPATH).trim()) {
      this.KPATH = String(options.KPATH).trim();
    }
  }
}

// ============================================================================
// 🌐 内置加密 DNS (DoH): KISAMA_DNS=on 启用 (docs/API.MD 第十八节)
// ============================================================================
// 出站域名解析统一走 DNS-over-HTTPS JSON API, 防御本地 DNS 污染/劫持:
// - 覆盖面: 包装 dns.lookup 即覆盖 http/https/tls/net 全部进程内出站解析 (含 argo
//   edge 连接与 KMODE 上报), IP 字面量直通; node 内置请求不走环境代理, 天然直连;
// - 服务器链/缓存/退避语义与 py 版一致: TTL 截断 [30,600]s、NXDOMAIN 负缓存 60s、
//   单服务器失败退避 60s、全部失败回落系统解析并限频告警 (可用性优先)、按 host+族
//   单飞 (in-flight 去重);
// - 安全: DoH 请求直连字面量 IP, TLS 证书校验不降级; 不新增监听面/端点, 默认关闭。
const dns = require('dns');
const dgram = require('dgram');

class SecureDns {
  static TTL_MIN = 30;            // 应答 TTL 截断下限(秒)
  static TTL_MAX = 600;           // 应答 TTL 截断上限(秒)
  static NEGATIVE_TTL = 60;       // NXDOMAIN 负缓存(秒)
  static SERVER_BACKOFF = 60;     // 单服务器请求失败退避(秒)
  static WARN_INTERVAL = 300;     // 回落系统解析的告警限频(秒)
  static _ipv6Usable;             // IPv6 可用性懒缓存 (双栈排序参考)
  static _globalHook = null;      // 当前全局实例 (null=未安装; 测试可直接复位)

  constructor(opts = {}) {
    const parsed = (opts.servers && opts.servers.length ? opts.servers : Config.DOH_SERVERS_DEFAULT)
      .map(s => String(s).trim().replace(/\/+$/, ''))
      .filter(Boolean);
    this.servers = parsed.length ? parsed : [...Config.DOH_SERVERS_DEFAULT];
    this.timeoutMs = opts.timeoutMs || 3000;
    this.queryFn = opts.queryFn || ((server, name, rtype) => this.dohQuery(server, name, rtype));
    this.cache = new Map();        // 'host|family' -> { ips, expire }
    this.inflight = new Map();     // 同 host+族 解析去重
    this.failUntil = this.servers.map(() => 0);
    this.lastFallbackWarn = 0;
  }

  // ---------------- 对外: 语义对齐 dns.lookup ----------------
  async resolve(host, family) {
    family = family || 0;
    const key = `${host}|${family}`;
    const now = Date.now();
    const ent = this.cache.get(key);
    if (ent && ent.expire > now) return ent.ips.slice();
    const pending = this.inflight.get(key);
    if (pending) return pending;
    const p = (async () => {
      const result = await this.queryAll(host, family);
      if (result.status === 'ok' && result.ips.length) {
        const ttl = Math.min(Math.max(result.ttl, SecureDns.TTL_MIN), SecureDns.TTL_MAX) * 1000;
        this.cache.set(key, { ips: result.ips.slice(), expire: Date.now() + ttl });
        return result.ips.slice();
      }
      if (result.status === 'nxdomain') {
        this.cache.set(key, { ips: [], expire: Date.now() + SecureDns.NEGATIVE_TTL * 1000 });
        return [];
      }
      return null;   // 'error' 不缓存: 单服务器退避已防抖, 下次解析立即重试
    })();
    this.inflight.set(key, p);
    try {
      return await p;
    } finally {
      this.inflight.delete(key);
    }
  }

  async queryAll(host, family) {
    // 按地址族查询 A/AAAA; 返回 { status: 'ok'|'nxdomain'|'error', ips, ttl }
    const want = [];
    if (family !== 6) want.push([1, 4]);    // A
    if (family !== 4) want.push([28, 6]);   // AAAA
    const collected = { 4: [], 6: [] };
    let okAny = false, nxAny = false, errored = false, minTtl = SecureDns.TTL_MAX;
    for (const [rtype, ver] of want) {
      try {
        const r = await this.queryOne(host, rtype);
        if (r.status === 'ok' && r.ips.length) {
          okAny = true;
          collected[ver] = r.ips;
          minTtl = Math.min(minTtl, r.ttl);
        } else {
          nxAny = true;
        }
      } catch (e) {
        errored = true;
      }
    }
    if (okAny) return { status: 'ok', ips: this.orderAddresses(collected[6], collected[4]), ttl: minTtl };
    if (nxAny && !errored) return { status: 'nxdomain', ips: [], ttl: 0 };
    return { status: 'error', ips: [], ttl: 0 };
  }

  async queryOne(host, rtype) {
    // 按服务器链顺序查询单记录类型, 网络级失败换下一台 (退避 60s), 全部失败抛异常
    const name = SecureDns.toAscii(host);
    for (let i = 0; i < this.servers.length; i++) {
      if (Date.now() < this.failUntil[i]) continue;
      let data;
      try {
        data = await this.queryFn(this.servers[i], name, rtype);
      } catch (e) {
        this.failUntil[i] = Date.now() + SecureDns.SERVER_BACKOFF * 1000;
        continue;
      }
      const status = (data && typeof data === 'object') ? (data.Status || 0) : 1;
      if (status === 3) return { status: 'nxdomain', ips: [], ttl: 0 };
      if (status !== 0) continue;   // SERVFAIL 等服务端错误: 换下一台, 不退避
      const ips = [];
      let ttl = SecureDns.TTL_MAX;
      for (const ans of (data.Answer || [])) {
        if (!ans || ans.type !== rtype) continue;   // CNAME 链等无关记录
        if (typeof ans.data !== 'string' || !SecureDns.validLiteral(ans.data, rtype)) continue;
        ips.push(ans.data);
        const t = parseInt(ans.TTL, 10);
        if (Number.isFinite(t)) ttl = Math.min(ttl, t);
      }
      if (ips.length) return { status: 'ok', ips: [...new Set(ips)], ttl };
      return { status: 'nxdomain', ips: [], ttl: 0 };   // 应答成功但无该类型记录 (NODATA)
    }
    throw new Error('all doh servers failed');
  }

  dohQuery(server, name, rtype) {
    // 请求单个 DoH 服务器 (JSON API, 直连字面量 IP, 证书校验不降级)
    return new Promise((resolve, reject) => {
      const req = https.request(`${server}?name=${encodeURIComponent(name)}&type=${rtype}`, {
        method: 'GET',
        timeout: this.timeoutMs,
        headers: {
          'accept': 'application/dns-json',
          'user-agent': `kisama-agent/${Config.AGENT_VERSION}`
        }
      }, (res) => {
        if (res.statusCode !== 200) {
          res.resume();
          reject(new Error(`doh http status ${res.statusCode}`));
          return;
        }
        const chunks = [];
        res.on('data', c => chunks.push(c));
        res.on('end', () => {
          try {
            resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')));
          } catch (e) {
            reject(e);
          }
        });
      });
      req.on('timeout', () => req.destroy(new Error('doh timeout')));
      req.on('error', reject);
      req.end();
    });
  }

  warnFallback(host) {
    const now = Date.now();
    if (now - this.lastFallbackWarn >= SecureDns.WARN_INTERVAL * 1000) {
      this.lastFallbackWarn = now;
      Logger.warn(`🌐 KISAMA_DNS=on: 全部 DoH 服务器不可达, "${host}" 本次回落系统解析 (可用性优先)`);
    }
  }

  orderAddresses(v6, v4) {
    // 双栈排序: 对齐系统 RFC6724 惯例 v6 优先; IPv6 不可用时 v4 优先减少无谓尝试
    const u6 = [...new Set(v6)];
    const u4 = [...new Set(v4)];
    if (!u6.length) return u4;
    if (!u4.length) return u6;
    return this.ipv6Usable() ? u6.concat(u4) : u4.concat(u6);
  }

  ipv6Usable() {
    // 懒缓存: 建一次 UDP6 套接字即可, 仅供双栈排序参考
    if (SecureDns._ipv6Usable === undefined) {
      try {
        const s = dgram.createSocket('udp6');
        s.close();
        SecureDns._ipv6Usable = true;
      } catch (e) {
        SecureDns._ipv6Usable = false;
      }
    }
    return SecureDns._ipv6Usable;
  }

  static validLiteral(data, rtype) {
    return net.isIP(data) === (rtype === 1 ? 4 : 6);
  }

  static toAscii(host) {
    if (/^[\x00-\x7F]*$/.test(host)) return host;
    try {
      return new URL(`http://${host}`).hostname;   // WHATWG URL 自带 IDN→punycode
    } catch (e) {
      return host;
    }
  }
}

// ---------- 全局安装 (KISAMA_DNS=on 时生效, require 期一次性执行) ----------
const _originalDnsLookup = dns.lookup;

function patchDnsLookup(secureDns, origLookup) {
  const orig = origLookup || _originalDnsLookup;
  return function lookup(hostname, options, callback) {
    if (typeof options === 'function') { callback = options; options = {}; }
    if (typeof hostname !== 'string' || !hostname || net.isIP(hostname)) {
      return orig.call(dns, hostname, options, callback);
    }
    const opts = options || {};
    let family = (typeof opts === 'object') ? (opts.family || 0) : (opts || 0);
    if (family === 'IPv4' || family === 'ipv4') family = 4;
    else if (family === 'IPv6' || family === 'ipv6') family = 6;
    else if (typeof family !== 'number') family = 0;
    const all = (typeof opts === 'object') && !!opts.all;
    secureDns.resolve(hostname, family).then((ips) => {
      if (ips === null) {
        // DoH 全部服务器失败 → 回落系统解析 (可用性优先, 限频告警)
        secureDns.warnFallback(hostname);
        return orig.call(dns, hostname, options, callback);
      }
      if (!ips.length) {
        // DoH 明确无记录: 不回落系统, 避免被污染解析"复活"
        const err = new Error(`getaddrinfo ENOTFOUND ${hostname} (secure dns: no record)`);
        err.code = 'ENOTFOUND';
        err.syscall = 'getaddrinfo';
        err.hostname = hostname;
        return callback(err);
      }
      if (all) {
        callback(null, ips.map(ip => ({ address: ip, family: net.isIP(ip) })));
      } else {
        callback(null, ips[0], net.isIP(ips[0]));
      }
    }).catch((err) => callback(err || new Error('secure dns internal error')));
  };
}

function installDnsHook(force = null) {
  // 按 KISAMA_DNS/KISAMA_DOH_SERVERS 安装全局 dns.lookup 钩子:
  // off (默认) 不做任何事; on 时包装 dns.lookup, 全部进程内出站解析改走 DoH。幂等。
  if (SecureDns._globalHook) return SecureDns._globalHook;
  const mode = String(force === null ? Config.DNS_MODE : force).trim().toLowerCase();
  if (mode !== 'on') return null;
  let servers = null;
  if (Config.DOH_SERVERS) {
    servers = Config.DOH_SERVERS.split(/[,\s]+/).map(s => s.trim()).filter(Boolean);
  }
  SecureDns._globalHook = new SecureDns({ servers });
  dns.lookup = patchDnsLookup(SecureDns._globalHook, _originalDnsLookup);
  Logger.info(`🌐 内置加密 DNS 已启用 (DoH): ${SecureDns._globalHook.servers.join(', ')}`);
  return SecureDns._globalHook;
}

installDnsHook();

// ============================================================================
// ============================================================================
// 🔑 临时密钥管理: 同一时刻仅维护一份有效密钥对 (与 Python 版 TempKeyManager 语义一致)
// - 有效期内重复查询返回同一密钥对 (幂等, 不重复生成)
// - 过期后自动生成新的密钥对, 旧密钥立即作废
// - 临时持有者: 用临时 ECDSA P-256 私钥签名请求, 用临时 ECIES 私钥解密响应
// ============================================================================
class TempKeyManager {
  constructor() {
    this._key = null;
    // 🔐 凭证生命周期钩子: tempkey 过期被检测到时触发一次长期密钥轮换
    this.onExpired = null;
  }

  getOrCreate(ttlHours) {
    this._expireCurrent();
    if (this._key) {
      return this._key;
    }
    this._key = this._generate(ttlHours);
    Logger.info(`🔑 [TempKey] 新临时密钥已生成: key_id=${this._key.key_id}, 有效期 ${ttlHours} 小时`);
    return this._key;
  }

  getActiveEcdsaVk() {
    this._expireCurrent();
    if (this._key) return this._key.ecdsa_vk;
    return null;
  }

  getActiveEciesPub() {
    this._expireCurrent();
    if (this._key) return this._key.ecies_pub;
    return null;
  }

  // 🔐 tempkey 过期即作废, 并触发一次长期密钥轮换 (SESSION_KEY + 控制端 Noise 密钥对),
  // 使临时授权有效期内经 baseinfo 下发到外部的长期凭据立即失效。仅在过期后触发一次。
  _expireCurrent() {
    if (this._key && this._isExpired(this._key)) {
      const expiredId = this._key.key_id;
      this._key = null;
      Logger.warn(`🔄 [TempKey] 临时密钥已过期: key_id=${expiredId}`);
      if (typeof this.onExpired === 'function') {
        try { this.onExpired(); } catch (e) { Logger.error(`[TempKey] 过期轮换失败: ${e.message}`); }
      }
    }
  }

  _isExpired(key) {
    return Math.floor(Date.now() / 1000) >= key.expires_at;
  }

  _generate(ttlHours) {
    // 1. ECDSA 临时密钥对 (P-256 / prime256v1, PKCS#8 私钥 + SPKI 公钥 PEM 下发)
    const { privateKey, publicKey } = crypto.generateKeyPairSync('ec', { namedCurve: 'prime256v1' });
    const ecdsaPrivatePem = privateKey.export({ type: 'pkcs8', format: 'pem' });
    const ecdsaPublicPem = publicKey.export({ type: 'spki', format: 'pem' });

    // 2. ECIES 临时密钥对 (secp256k1: 32字节私钥 + 65字节未压缩公钥, hex 下发)
    const eciesPriv = crypto.randomBytes(32);
    const eciesPub = Buffer.from(secp256k1.getPublicKey(eciesPriv, false));

    // 3. 短格式下发字段 (0.5.8, docs/API.MD 十四): ECDSA 私钥标量 hex + 双曲线压缩公钥 Base64
    const ecdsaJwk = privateKey.export({ format: 'jwk' });
    const ecdsaSpkiDer = publicKey.export({ type: 'spki', format: 'der' });
    const ecdsaPub65 = ecdsaSpkiDer.subarray(ecdsaSpkiDer.length - 65);

    const now = Math.floor(Date.now() / 1000);
    const ttlSeconds = ttlHours * 3600;
    return {
      key_id: crypto.randomBytes(8).toString('hex'),
      created_at: now,
      expires_at: now + ttlSeconds,
      ttl_seconds: ttlSeconds,
      // 下发字段 (缺省全格式)
      ecdsa_private_key: ecdsaPrivatePem,
      ecdsa_public_key: ecdsaPublicPem,
      ecies_private_key: eciesPriv.toString('hex'),
      ecies_public_key: eciesPub.toString('hex'),
      // 下发字段 (format=short 短格式)
      ecdsa_private_hex: Buffer.from(ecdsaJwk.d, 'base64url').toString('hex'),
      ecdsa_public_b64: Buffer.from(p256.Point.fromBytes(ecdsaPub65).toBytes(true)).toString('base64'),
      ecies_public_b64: Buffer.from(secp256k1.getPublicKey(eciesPriv, true)).toString('base64'),
      // 内存字段 (不下发)
      ecdsa_vk: publicKey,
      ecies_pub: eciesPub
    };
  }
}
// ============================================================================
// 🔐 加密模块: ECDSA签名验证 + ECIES加密
// ============================================================================
class CryptoManager {
  constructor(ecdsaPubkeyPem, eciesPubkeyB64) {
    this.ecdsaPubkey = null;
    this.eciesPubkey = null;

    if (ecdsaPubkeyPem) {
      try {
        const trimmedKey = ecdsaPubkeyPem.trim();

        // 1. 如果是标准的 PEM 格式包装，直接原生加载
        if (trimmedKey.startsWith('-----BEGIN')) {
          this.ecdsaPubkey = crypto.createPublicKey(trimmedKey);
        } else {
          // 🚀 将 Base64 字符串解码为原始字节流 Buffer
          const keyBytes = Buffer.from(trimmedKey, 'base64');
          
          // 使用 v2 版本的 fromBytes 完美加载公钥点
          const point = p256.Point.fromBytes(keyBytes);
          
          // ⚠️ 终极修复：使用 toBytes 获取 65 字节的非压缩数据 (0x04 + 32字节X + 32字节Y)
          const uncompressed = point.toBytes(false); 
          
          // 实现安全的 base64url 转换，严格剔除 +、/ 和 =
          const toBase64Url = (buf) => buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
          
          // 提取 X 和 Y 坐标 (跳过首字节 0x04 标识符)
          const xB64Url = toBase64Url(Buffer.from(uncompressed.slice(1, 33)));
          const yB64Url = toBase64Url(Buffer.from(uncompressed.slice(33, 65)));
          
          // 组装为标准的 JWK (JSON Web Key) 对象
          const jwk = {
            kty: 'EC',
            crv: 'P-256',
            x: xB64Url,
            y: yB64Url
          };
          
          // 直接转换为原生的 KeyObject，交给 Node.js 原生底层引擎处理
          this.ecdsaPubkey = crypto.createPublicKey({
            key: jwk,
            format: 'jwk'
          });
        }
      } catch (e) {
        Logger.error(`⚠️ ECDSA公钥加载失败: ${e.message}`);
        this.ecdsaPubkey = null;
      }
    }

    if (eciesPubkeyB64) {
      try {
        this.eciesPubkey = base64.toByteArray(eciesPubkeyB64.trim());
      } catch (e) {
        Logger.warn(`⚠️ ECIES公钥解码失败: ${e.message}`);
      }
    }
  }

  verifySignature(method, path, bodyHash, nonce, timestamp, authToken, tempVk = null) {
    // 🛡️ fail-closed：公钥未加载(缺失/解析失败)时一律拒绝，绝不放行 (DEBUG 模式不会进入本函数)
    if (!this.ecdsaPubkey) {
      throw new Error('ECDSA public key not loaded');
    }

    try {
      const ts = parseInt(timestamp);
      const now = Math.floor(Date.now() / 1000);
      if (Math.abs(now - ts) > Config.TIMESTAMP_WINDOW) {
        throw new Error(`Timestamp expired: diff=${Math.abs(now-ts)}s > ${Config.TIMESTAMP_WINDOW}s`);
      }

      // 🔐 安全修复：签名绑定 method/path/body 摘要，捕获的签名头无法改换请求体后重放。
      // 格式 (五版本一致): method\npath\nsha256hex(body)\nnonce\ntimestamp
      // 空请求体使用 sha256("")；/api/fileraw (大文件裸流) 统一按空请求体计算。
      const message = BuildSignatureMessage(method, path, bodyHash, nonce, timestamp);

      // 组合验签: 优先静态密钥, 无果再尝试当前有效临时密钥
      if (this._verifyWith(this.ecdsaPubkey, message, authToken)) {
        return 'static';
      }
      if (tempVk && this._verifyWith(tempVk, message, authToken)) {
        return 'temp';
      }
      throw new Error('Bad signature');

    } catch (e) {
      throw new Error(`Signature verification failed: ${e.message}`);
    }
  }

  _verifyWith(pubkey, message, authToken) {
    if (!pubkey) return false;
    try {
      const signature = base64.toByteArray(authToken);
      // 100% 纯原生验签
      const verify = crypto.createVerify('SHA256');
      verify.update(message);
      return verify.verify(pubkey, signature);
    } catch (e) {
      return false;
    }
  }

  /**
   * 加密响应数据
   * @param {Object|string} data 待加密数据
   * @param {Buffer} [pubkeyBuffer] 目标 ECIES 公钥 (临时密钥请求时传入临时公钥, 缺省用控制端静态公钥)
   */
  encryptResponse(data, pubkeyBuffer = null) {
    if (Config.DEBUG) {
      // 调试模式: 明文返回 (模式头由中间件出口统一盖 x-encrypted: false)
      return JSON.stringify(data);
    }
    if (!this.eciesPubkey) {
      // 🌟 x-encrypted 模式位规范 (docs/API.MD 第十节)：生产模式禁止明文回退，抛错转 500
      throw new Error('ECIES public key not initialized, cannot encrypt response');
    }

    try {
      const plaintextStr = JSON.stringify(data);
      const plaintextBuffer = Buffer.from(plaintextStr, 'utf-8');
      const pubKeyBuffer = pubkeyBuffer || Buffer.from(this.eciesPubkey);

      const ciphertext = ecies_encrypt(pubKeyBuffer, plaintextBuffer);

      return Buffer.from(ciphertext).toString('base64');

    } catch (e) {
      // 🌟 模式位规范：生产加密失败禁止明文回退，向上抛错由 express 错误处理转 500
      throw new Error(`ECIES response encryption failed: ${e.message}`);
    }
  }

  /**
   * 🔒 AES-256-GCM 解密
   */
  decryptData(encryptedBase64, rawKeyBuffer) {
    if (!rawKeyBuffer || rawKeyBuffer.length !== 32) {
      throw new Error("AES Decrypt Error: Key must be exactly 32 bytes for AES-256.");
    }

    try {
      const jsonStr = Buffer.from(encryptedBase64, 'base64').toString('utf8');
      const payload = JSON.parse(jsonStr);

      if (!payload.nonce || !payload.tag || !payload.ciphertext) {
        throw new Error("Missing required AES-GCM fields (nonce, tag, ciphertext) in payload.");
      }

      const iv = Buffer.from(payload.nonce, 'base64');
      const authTag = Buffer.from(payload.tag, 'base64');
      const ciphertext = Buffer.from(payload.ciphertext, 'base64');

      const decipher = crypto.createDecipheriv('aes-256-gcm', rawKeyBuffer, iv);
      decipher.setAuthTag(authTag);

      let decrypted = decipher.update(ciphertext, null, 'utf8');
      decrypted += decipher.final('utf8');

      return decrypted;
      
    } catch (e) {
      throw new Error(`AES Decrypt Error: ${e.message}`);
    }
  }

  // 🔐 encryptData: decryptData 的对称操作 (0.5.6 响应加密用, docs/API.MD 十二)。
  // 输出 Base64(JSON{nonce, tag, ciphertext}), nonce 每次随机 12 字节, 与客户端 aes_gcm_open 契约一致。
  encryptData(plaintextBuffer, rawKeyBuffer) {
    if (!rawKeyBuffer || rawKeyBuffer.length !== 32) {
      throw new Error("AES Encrypt Error: Key must be exactly 32 bytes for AES-256.");
    }
    try {
      const iv = crypto.randomBytes(12);
      const cipher = crypto.createCipheriv('aes-256-gcm', rawKeyBuffer, iv);
      const ciphertext = Buffer.concat([cipher.update(plaintextBuffer), cipher.final()]);
      const authTag = cipher.getAuthTag();
      const payload = {
        nonce: iv.toString('base64'),
        tag: authTag.toString('base64'),
        ciphertext: ciphertext.toString('base64')
      };
      return Buffer.from(JSON.stringify(payload), 'utf8').toString('base64');
    } catch (e) {
      throw new Error(`AES Encrypt Error: ${e.message}`);
    }
  }
}
// ============================================================================
// 🛡️ 认证 + 加密中间件 (逻辑解耦修复版)
// ============================================================================
// 🔐 签名消息组装 (五版本统一): method\npath\nsha256hex(body)\nnonce\ntimestamp
// 空请求体使用 sha256("")；/api/fileraw (大文件裸流) 客户端与服务端统一按空请求体计算，
// 避免中间件整体缓冲大文件 (与 express.text 对 fileraw 的排除边界一致)。
function BuildSignatureMessage(method, path, bodyHash, nonce, timestamp) {
  if (!bodyHash) {
    bodyHash = crypto.createHash('sha256').update(Buffer.alloc(0)).digest('hex');
  }
  return `${method}\n${path}\n${bodyHash}\n${nonce}\n${timestamp}`;
}

function authEncryptMiddleware(cryptoManager, tempKeyManager = null) {
  return async (req, res, next) => {
    // === 阶段 0: 放行 WebSocket ===
    // 仅按路径前缀 /api/ws/ 放行；不可依据 Upgrade 头判断，否则普通请求伪造该头即可绕过全部认证
    if (req.path.startsWith('/api/ws/')) {
      return next();
    }

    // === 阶段 0.5: 安装 x-encrypted 模式位出口拦截器（docs/API.MD 第十节）===
    // 必须先于 OPTIONS/HEAD 与 DEBUG 早退安装，确保 debug 一切响应恒 false、生产匿名响应不设头
    const originalSend = res.send;
    res.send = function(data) {
      // 🌟 模式位规范：DEBUG 模式一切响应恒 false（Buffer 二进制体原样透传，仅盖头）
      if (Config.DEBUG) {
        const encoded = typeof data === 'string' ? data : (Buffer.isBuffer(data) ? data : JSON.stringify(data));
        res.set('x-encrypted', 'false');
        res.set('Content-Length', Buffer.byteLength(encoded).toString());
        return originalSend.call(this, encoded);
      }

      if (res.get('Content-Type') && res.get('Content-Type').includes('application/json')) {
        try {
          // 根据中间件最终确立的真伪身份标签，决定是否在出口裹上密文外衣
          if (req.is_authenticated) {
            let encoded;
            if (req.path === '/api/baseinfo') {
              // 🔐 0.5.6 (docs/API.MD 十二): baseinfo 恒走 ECIES —— 密钥分发握手。
              // 按验签来源选择对应 ECIES 公钥: 静态密钥->静态公钥, 临时密钥->临时公钥
              const jsonData = typeof data === 'string' ? JSON.parse(data) : data;
              let targetPub = null;
              if (req.key_source === 'temp' && tempKeyManager) {
                targetPub = tempKeyManager.getActiveEciesPub();
              }
              const encryptedContent = cryptoManager.encryptResponse(jsonData, targetPub);
              encoded = typeof encryptedContent === 'string' ? encryptedContent : JSON.stringify(encryptedContent);
            } else {
              // 🔐 0.5.6: 其余认证端点用 session_key 对原始 JSON 字节做 AES-256-GCM 加密
              // (直接加密原始字节, 省一次 parse/stringify)
              const plainBuf = Buffer.isBuffer(data) ? data
                : (typeof data === 'string' ? Buffer.from(data, 'utf8') : Buffer.from(JSON.stringify(data), 'utf8'));
              encoded = cryptoManager.encryptData(plainBuf, Buffer.from(Config.SESSION_KEY, 'base64'));
            }

            res.set('x-encrypted', 'true');
            res.set('x-agent-version', Config.AGENT_VERSION);
            res.set('Content-Length', Buffer.byteLength(encoded, 'utf8').toString());
            return originalSend.call(this, encoded);
          } else {
            // 匿名放行路径（如未授权访问 baseinfo）：明文直出，不发送模式头（false 仅属于 DEBUG 模式）
            const encoded = typeof data === 'string' ? data : JSON.stringify(data);
            res.set('Content-Length', Buffer.byteLength(encoded, 'utf8').toString());
            return originalSend.call(this, encoded);
          }
        } catch (encryptErr) {
          // 🌟 模式位规范：生产加密失败 → 500 明示错误，禁止明文回退、不发送 x-encrypted
          if (!res.headersSent) {
            const errBody = JSON.stringify({ error: `Response encryption failed: ${encryptErr.message}` });
            res.status(500);
            res.set('Content-Type', 'application/json');
            res.set('Content-Length', Buffer.byteLength(errBody, 'utf8').toString());
            return originalSend.call(this, errBody);
          }
          throw encryptErr;
        }
      }
      return originalSend.call(this, data);
    };

    // 🌟 模式位规范兜底：DEBUG 模式下绕过 res.send 直出的响应（cors 预检 204、
    // express 默认 404 等经 res.end 直出的场景）也必须携带 false
    const originalEnd = res.end;
    res.end = function(...endArgs) {
      if (Config.DEBUG && !res.get('x-encrypted')) {
        res.set('x-encrypted', 'false');
      }
      return originalEnd.apply(this, endArgs);
    };

    if (req.method === 'OPTIONS' || req.method === 'HEAD') {
      // 预检/探测无 JSON 体，拦截器不会盖章；DEBUG 模式在此显式补模式头
      if (Config.DEBUG) {
        res.set('x-encrypted', 'false');
      }
      return next();
    }

    // 🌟 1. 零信任原则：一进来默认所有人都是未认证状态 (false)
    req.is_authenticated = false;
    const bypassPaths = ['/api/baseinfo', '/api/status'];

    // 🌟 2. 优先判定 DEBUG 模式：如果为 true 直接拉满信任并放行（出口拦截器已就位，响应恒 false）
    if (Config.DEBUG) {
      req.is_authenticated = true;
      return next();
    }

    // === 阶段 1: 生产环境严格请求认证 (完全剔除了允许客户端通过请求头控制的 x-debug 后门) ===
    const nonce = req.headers['x-nonce'] || req.headers['X-Nonce'];
    const timestamp = req.headers['x-timestamp'] || req.headers['X-Timestamp'];
    const authToken = req.headers['x-auth-token'] || req.headers['X-Auth-Token'];

    // 认证头部缺失
    if (!nonce || !timestamp || !authToken) {
      if (bypassPaths.includes(req.path)) {
        return next(); // 允许匿名访问白名单，带着最初的 false 身份潜入下游业务
      } else {
        return res.status(401).json({ error: 'Missing auth headers' });
      }
    }

    // 🌟 3. 核心修复：直接执行真验签 (静态 + 有效期内临时密钥), 不再套用 if(req.is_authenticated) 的死锁外壳
    try {
      // 🔐 签名绑定 method/path/body 摘要：req.body 已由前置 express.text/urlencoded 解析
      // (fileraw 除外，其 body 在路由层才消费，统一按空 body 计算摘要)
      let bodyBuf = Buffer.alloc(0);
      if (req.path !== '/api/fileraw') {
        if (Buffer.isBuffer(req.body)) bodyBuf = req.body;
        else if (typeof req.body === 'string') bodyBuf = Buffer.from(req.body, 'utf-8');
      }
      const bodyHash = bodyBuf.length > 0 ? crypto.createHash('sha256').update(bodyBuf).digest('hex') : '';
      const tempVk = tempKeyManager ? tempKeyManager.getActiveEcdsaVk() : null;
      const keySource = cryptoManager.verifySignature(req.method, req.path, bodyHash, nonce, timestamp, authToken, tempVk);
      
      // ✨ 唯一步骤：只有成功熬过高强度数字签名核验的请求，才配在这行将身份洗白为 true
      req.is_authenticated = true;
      req.key_source = keySource === 'temp' ? 'temp' : 'static';
      
    } catch (e) {
      if (bypassPaths.includes(req.path)) {
        return next(); // 验签失败但如果是白名单路由，保留其 false 标签匿名放行
      } else {
        return res.status(401).json({ error: `Signature verification failed: ${e.message}` });
      }
    }

    // === 阶段 1.5: 核心 Body 处理 (解密与安全反序列化) ===
    if (req.body && typeof req.body === 'string') {
      const isAesEncrypted = (req.headers['x-aes-encrypted'] || '').toLowerCase() === 'true';
      
      try {
        // 🌟 安全边界：只有通过认证(true)的请求，才准许动用密钥解密密文 Body
        if (isAesEncrypted && req.is_authenticated) {
          const rawKeyBuffer = Buffer.from(Config.SESSION_KEY, 'base64');
          const decryptedJsonStr = cryptoManager.decryptData(req.body, rawKeyBuffer);
          req.body = JSON.parse(decryptedJsonStr);
        } else if (req.body.startsWith('eyJ')) {
          const decodedStr = Buffer.from(req.body, 'base64').toString('utf-8');
          req.body = JSON.parse(decodedStr);
        } else if (req.body.trim().startsWith('{') || req.body.trim().startsWith('[')) {
          req.body = JSON.parse(req.body);
        } else {
          if (req.body.trim() === '') req.body = {};
        }
      } catch (e) {
        Logger.error(`💥 [Body Parse Error]: ${e.message}`);
        return res.status(400).json({ error: `Invalid body format: ${e.message}` });
      }
    }

    // （阶段 2 & 3 的响应模式位出口拦截器已前移至中间件入口安装，见阶段 0.5）
    next();
  };
}

// ============================================================================
// 📊 系统信息收集器
// ============================================================================
  class SystemInfoCollector {
    constructor() {
      this.lastNetworkStats = { rx: 0, tx: 0 };
      this.totalNetworkUp = 0;
      this.totalNetworkDown = 0;
      this.lastNetworkTime = Date.now() / 1000;
    }
    async getContainerMemory() {
    let total = null, used = null;

    try {
      // 1. 尝试 cgroup v2
      const limitStr = (await fsp.readFile('/sys/fs/cgroup/memory.max', 'utf8')).trim();
      total = limitStr === 'max' ? null : parseInt(limitStr, 10);
      used = parseInt((await fsp.readFile('/sys/fs/cgroup/memory.current', 'utf8')).trim(), 10);
    } catch {
      try {
        // 2. 尝试 cgroup v1
        total = parseInt((await fsp.readFile('/sys/fs/cgroup/memory/memory.limit_in_bytes', 'utf8')).trim(), 10);
        used = parseInt((await fsp.readFile('/sys/fs/cgroup/memory/memory.usage_in_bytes', 'utf8')).trim(), 10);
        if (total > 9223372036854771712) total = null;
      } catch {
        // 3. 非容器环境，直接走宿主机
        const hostMem = await si.mem();
        total = hostMem.total;
        used = hostMem.used;
      }
    }

    // 👇 【核心修改】如果容器没限制内存，用宿主机的物理内存上限代替 null
    if (total === null) {
      const hostMem = await si.mem();
      total = hostMem.total; 
      // 如果 cgroup 读取 used 失败了，才用宿主机的 used
      if (used === null || isNaN(used)) {
        used = hostMem.used;
      }
    }

    return {
      total,                                      // 不再是 null，而是容器限制值或宿主机总内存
      used,                                       // 当前已用内存
      available: total - used,                    // 不再是 null
      free: total - used,
      cached: 0,
      buffers: 0
    };
  }
  async getBasicInfo() {
    // 三组一次性探测 (不读写缓存; 路由层负责 P/T 分级缓存)
    const pInfo = await this.collectStaticInfo();
    const localInfo = await this.collectLocalInfo(pInfo.virtualization);
    const netInfo = await this.collectNetInfo();
    const info = SystemInfoCollector.assembleBaseInfo(pInfo, localInfo, netInfo);
    Logger.debug(`基础信息数据: ${JSON.stringify(info, null, 2)}`, 1);
    return info;
  }

  static assembleBaseInfo(pInfo, localInfo, netInfo) {
    // 字段顺序固定, 便于面板 diff; 凭证不在此处装配
    return {
      arch: pInfo.arch,
      cpu_cores: pInfo.cpu_cores,
      cpu_name: pInfo.cpu_name,
      disk_total: localInfo.disk_total,
      gpu_name: pInfo.gpu_name,
      ipv4: netInfo.ipv4 ?? null,
      ipv6: netInfo.ipv6 ?? null,
      mem_total: localInfo.mem_total,
      os: pInfo.os,
      kernel_version: pInfo.kernel_version,
      swap_total: localInfo.swap_total,
      version: pInfo.version,
      virtualization: pInfo.virtualization,
      marks: Array.isArray(pInfo.marks) ? [...pInfo.marks] : []
    };
  }

  static staticFallback() {
    return {
      arch: '', cpu_cores: 0, cpu_name: '', gpu_name: '',
      os: '', kernel_version: '', version: Config.AGENT_VERSION,
      virtualization: '', marks: []
    };
  }

  static localFallback() {
    return { disk_total: 0, mem_total: 0, swap_total: 0 };
  }

  static netFallback() {
    return { ipv4: null, ipv6: null };
  }

  async collectStaticInfo() {
    let cpu = {};
    let osInfo = {};
    try { cpu = await si.cpu(); } catch (e) { Logger.debug(`获取 CPU 信息失败: ${e.message}`, 1); }
    try { osInfo = await si.osInfo(); } catch (e) { Logger.debug(`获取 OS 信息失败: ${e.message}`, 1); }
    let virtualization = '';
    try { virtualization = await this._getVirtualization(); } catch (e) { Logger.debug(`获取虚拟化信息失败: ${e.message}`, 1); }
    return {
      arch: os.arch() || '',
      cpu_cores: cpu.cores || 0,
      cpu_name: cpu.brand || '',
      gpu_name: '',
      os: `${osInfo.distro || ''} ${osInfo.release || ''}`.trim(),
      kernel_version: osInfo.kernel || '',
      version: Config.AGENT_VERSION,
      virtualization: virtualization,
      marks: this.detectMarks()
    };
  }

  async collectLocalInfo(virtualization) {
    let diskTotal = 0;
    try {
      diskTotal = (await si.fsSize())[0]?.size || 0;
    } catch (e) {
      Logger.debug(`获取磁盘总容量失败: ${e.message}`, 1);
    }
    let mem = { total: 0, swaptotal: 0 };
    try {
      mem = await this.getContainerMemory() || mem;
    } catch (e) {
      Logger.debug(`获取内存信息失败: ${e.message}`, 1);
    }
    return {
      disk_total: diskTotal,
      mem_total: mem.total || 0,
      swap_total: mem.swaptotal || 0
    };
  }

  async collectNetInfo() {
    const [v4, v6] = await Promise.allSettled([
      this.getPublicIpV4(),
      this.getPublicIpV6()
    ]);
    if (v4.status === 'rejected') Logger.debug(`获取 IPv4 失败: ${v4.reason}`, 1);
    if (v6.status === 'rejected') Logger.debug(`获取 IPv6 失败: ${v6.reason}`, 1);
    return {
      ipv4: v4.status === 'fulfilled' ? v4.value : null,
      ipv6: v6.status === 'fulfilled' ? v6.value : null
    };
  }

  // ---------------- 主机标记 marks 探测 (只读/无子进程/无网络, 见 API.MD 十五) ----------------
  static MARKS_PROC_ROOT = '/proc';
  static MARKS_DEV_ROOT = '/dev';
  static MARKS_ETC_ROOT = '/etc';
  static MARKS_RUN_ROOT = '/run';
  static MARKS_ROOT = '/';

  detectMarks() {
    if (process.platform !== 'linux') return [];
    const marks = [];
    const probes = [
      ['root', () => this._markRoot()],
      ['kvm', () => this._markKvm()],
      ['pterodactyl', () => this._markPterodactyl()],
      ['systemd', () => this._markSystemd()],
      ['fuse', () => this._markFuse()]
    ];
    for (const [name, probe] of probes) {
      try {
        if (probe()) marks.push(name);
      } catch (e) {
        Logger.debug(`marks 探测失败 [${name}]: ${e.message}`, 1);
      }
    }
    // 仅输出标记名, 禁止打印 environ/mountinfo/passwd 原文
    Logger.debug(`marks 命中: ${marks.join(',') || '(none)'}`, 1);
    return marks;
  }

  _markRoot() {
    if (typeof process.geteuid !== 'function' || typeof process.getegid !== 'function') return false;
    return process.geteuid() === 0 && process.getegid() === 0;
  }

  _markKvm() {
    return SystemInfoCollector._charDeviceRW(
      path.join(SystemInfoCollector.MARKS_DEV_ROOT, 'kvm'), 10, 232);
  }

  _markFuse() {
    if (!SystemInfoCollector._charDeviceRW(
      path.join(SystemInfoCollector.MARKS_DEV_ROOT, 'fuse'), 10, 229)) return false;
    if (this._capEffBit(21)) return true;
    for (const relative of ['usr/bin/fusermount3', 'bin/fusermount3', 'usr/bin/fusermount', 'bin/fusermount']) {
      try {
        const st = fs.statSync(path.join(SystemInfoCollector.MARKS_ROOT, relative));
        if (st.isFile() && (st.mode & 0o4000) && (st.mode & 0o111)) return true;
      } catch { /* not present */ }
    }
    return false;
  }

  _markPterodactyl() {
    // 强特征 1: mountinfo 源路径
    if (SystemInfoCollector._fileContains(
      path.join(SystemInfoCollector.MARKS_PROC_ROOT, 'self', 'mountinfo'),
      Buffer.from('/var/lib/pterodactyl/'))) return true;

    // 强特征 2: environ 同时含两个 P_SERVER_* 键
    for (const pid of ['self', '1']) {
      const raw = SystemInfoCollector._readLimited(
        path.join(SystemInfoCollector.MARKS_PROC_ROOT, pid, 'environ'));
      if (!raw) continue;
      const entries = raw.toString('utf8').split('\0');
      const hasUuid = entries.some(x => x.startsWith('P_SERVER_UUID='));
      const hasLocation = entries.some(x => x.startsWith('P_SERVER_LOCATION='));
      if (hasUuid && hasLocation) return true;
    }

    // 弱特征四条件必须全部满足
    const hostnameRaw = SystemInfoCollector._readLimited(
      path.join(SystemInfoCollector.MARKS_ETC_ROOT, 'hostname'));
    if (!hostnameRaw) return false;
    const hostname = hostnameRaw.toString('utf8').trim().toLowerCase();
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(hostname)) return false;
    try {
      if (!fs.statSync(path.join(SystemInfoCollector.MARKS_ROOT, 'home', 'container')).isDirectory()) return false;
    } catch { return false; }
    if (typeof process.geteuid !== 'function') return false;
    const euid = process.geteuid();
    const passwdRaw = SystemInfoCollector._readLimited(
      path.join(SystemInfoCollector.MARKS_ETC_ROOT, 'passwd'));
    if (!passwdRaw) return false;
    for (const line of passwdRaw.toString('utf8').split('\n')) {
      const fields = line.split(':');
      if (fields.length > 2 && Number(fields[2]) === euid) return false;
    }
    return fs.existsSync(path.join(SystemInfoCollector.MARKS_ROOT, '.dockerenv')) ||
      fs.existsSync(path.join(SystemInfoCollector.MARKS_RUN_ROOT, '.containerenv'));
  }

  _markSystemd() {
    try {
      if (!fs.statSync(path.join(SystemInfoCollector.MARKS_RUN_ROOT, 'systemd', 'system')).isDirectory()) return false;
    } catch { return false; }
    if (!fs.existsSync(path.join(SystemInfoCollector.MARKS_RUN_ROOT, 'systemd', 'private')) &&
        !fs.existsSync(path.join(SystemInfoCollector.MARKS_RUN_ROOT, 'dbus', 'system_bus_socket'))) return false;
    if (!SystemInfoCollector._systemctlLocatable()) return false;
    const commRaw = SystemInfoCollector._readLimited(
      path.join(SystemInfoCollector.MARKS_PROC_ROOT, '1', 'comm'));
    if (commRaw) {
      const comm = commRaw.toString('utf8').trim();
      if (comm) return comm.toLowerCase().includes('systemd');
    }
    try {
      const exe = fs.readlinkSync(path.join(SystemInfoCollector.MARKS_PROC_ROOT, '1', 'exe'));
      if (exe && !path.basename(exe).toLowerCase().includes('systemd')) return false;
    } catch { /* unreadable /proc/1/exe does not veto */ }
    return true;
  }

  _capEffBit(bit) {
    const raw = SystemInfoCollector._readLimited(
      path.join(SystemInfoCollector.MARKS_PROC_ROOT, 'self', 'status'));
    if (!raw) return false;
    for (const line of raw.toString('utf8').split('\n')) {
      if (line.startsWith('CapEff:')) {
        const fields = line.split(/\s+/);
        if (fields.length < 2) return false;
        try {
          return ((BigInt('0x' + fields[1]) >> BigInt(bit)) & 1n) === 1n;
        } catch { return false; }
      }
    }
    return false;
  }

  static _systemctlLocatable() {
    for (const relative of ['usr/bin/systemctl', 'bin/systemctl', 'usr/local/bin/systemctl']) {
      if (SystemInfoCollector._executable(path.join(SystemInfoCollector.MARKS_ROOT, relative))) return true;
    }
    for (const dir of (process.env.PATH || '').split(path.delimiter)) {
      if (dir && SystemInfoCollector._executable(path.join(dir, 'systemctl'))) return true;
    }
    return false;
  }

  static _executable(filePath) {
    try {
      const st = fs.statSync(filePath);
      return st.isFile() && (st.mode & 0o111) !== 0;
    } catch { return false; }
  }

  static _charDeviceRW(filePath, major, minor) {
    try {
      const st = fs.statSync(filePath);
      if (!st.isCharacterDevice()) return false;
      if (SystemInfoCollector._devMajor(st.rdev) !== major ||
          SystemInfoCollector._devMinor(st.rdev) !== minor) return false;
      const fd = fs.openSync(filePath, 'r+'); // O_RDWR
      try { return true; } finally { fs.closeSync(fd); }
    } catch { return false; }
  }

  static _devMajor(rdev) {
    // Linux dev_t: major = ((rdev >> 8) & 0xfff) | ((rdev >> 32) & ~0xfff)
    // JS 位运算只有 32 位, 这里用算术实现, 避免 >> 32 无效.
    const low = Math.floor(rdev / 256) % 4096;
    const high = Math.floor(rdev / 4294967296);
    return (low | (high & ~0xfff)) >>> 0;
  }

  static _devMinor(rdev) {
    // minor = (rdev & 0xff) | ((rdev >> 12) & 0xfff00)
    const low = rdev % 256;
    const high = Math.floor(rdev / 4096) % 0x100000 & 0xfff00;
    return (low | high) >>> 0;
  }

  static _readLimited(filePath, limit = 1024 * 1024) {
    let fd = null;
    try {
      fd = fs.openSync(filePath, 'r');
      const buf = Buffer.alloc(8192);
      const chunks = [];
      let total = 0;
      while (total < limit) {
        const n = fs.readSync(fd, buf, 0, Math.min(buf.length, limit - total), null);
        if (!n) break;
        chunks.push(Buffer.from(buf.subarray(0, n)));
        total += n;
      }
      return Buffer.concat(chunks);
    } catch {
      return null;
    } finally {
      if (fd !== null) { try { fs.closeSync(fd); } catch { /* ignore */ } }
    }
  }

  static _fileContains(filePath, needle, limit = 1024 * 1024, chunkSize = 8192) {
    let fd = null;
    try {
      fd = fs.openSync(filePath, 'r');
      const overlap = Math.max(0, needle.length - 1);
      const buf = Buffer.alloc(chunkSize);
      let previous = Buffer.alloc(0);
      let total = 0;
      while (total < limit) {
        const n = fs.readSync(fd, buf, 0, Math.min(chunkSize, limit - total), null);
        if (!n) break;
        total += n;
        const window = Buffer.concat([previous, buf.subarray(0, n)]);
        if (window.indexOf(needle) !== -1) return true;
        previous = overlap ? Buffer.from(window.subarray(Math.max(0, window.length - overlap))) : Buffer.alloc(0);
      }
      return false;
    } catch {
      return false;
    } finally {
      if (fd !== null) { try { fs.closeSync(fd); } catch { /* ignore */ } }
    }
  }

  getLocalIPv4() {
      const nets = os.networkInterfaces();
      for (const name of Object.keys(nets)) {
          for (const net of nets[name]) {
              // 兼容 Node.js < 18 ('IPv4') 和 >= 18 (4)
              const isIPv4 = net.family === 'IPv4' || net.family === 4;
              if (isIPv4 && !net.internal) {
                  if (!/^10\./.test(net.address) &&
                      !/^192\.168\./.test(net.address) &&
                      !/^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(net.address)) {
                      return net.address;
                  }
              }
          }
      }
      return null;
  }
  async getPublicIpV4() {
      
      // 外部服务
      const services = [
          'https://api.ipify.org',
          'https://icanhazip.com',
          'https://checkip.amazonaws.com',
          'https://ifconfig.me/ip',
          'https://ipecho.net/plain',
          'https://ipinfo.io/ip',
          'https://myexternalip.com/raw'
      ];

      for (const service of services) {
          try {
              const ip = await this.fetchIP(service,4);
              if (ip && this.isValidIPv4(ip)) {
                  return ip;
              }
          } catch (error) {
              continue;
          }
      }
      // 最后尝试本地接口
      const localIp = this.getLocalIPv4();
      if (localIp && this.isValidIPv4(localIp)) {
          return localIp;
      }
      return null;
  }
  getLocalIPv6() {
      const nets = os.networkInterfaces();
      for (const name of Object.keys(nets)) {
          for (const net of nets[name]) {
              // 兼容 Node.js < 18 ('IPv6') 和 >= 18 (6)
              const isIPv6 = net.family === 'IPv6' || net.family === 6;
              if (isIPv6 && !net.internal) {
                  // 过滤掉链路本地地址 (fe80::/10)
                  if (!net.address.toLowerCase().startsWith('fe80:')) {
                      return net.address;
                  }
              }
          }
      }
      return null;
  }
  async getPublicIpV6() {
      // 优先尝试本地接口
      const localIp = this.getLocalIPv6();

      if (localIp && this.isValidIPv6(localIp)) {
          return localIp;
      }

      // 回退到外部服务
      const services = [
          'https://api6.ipify.org',
          'https://icanhazip.com',
          'https://v6.ident.me'
      ];

      for (const service of services) {
          try {
              const ip = await this.fetchIP(service,6);
              if (ip && this.isValidIPv6(ip)) {
                  return ip;
              }
          } catch (error) {
              Logger.debug(`访问 ${service} 失败: ${error.message}`);
              continue;
          }
      }
      return null;
  }

  async fetchIP(url,family = 0) {
      return new Promise((resolve, reject) => {
          const https = require('https');
          const options = {
              timeout: 5000,
              family: family,
              headers: {
                  'Accept': 'text/plain'
              }
          };

          const req = https.get(url, options, (res) => {
              let data = '';
              
              // 检查状态码
              if (res.statusCode !== 200) {
                  reject(new Error(`HTTP ${res.statusCode}`));
                  return;
              }
              
              res.on('data', (chunk) => data += chunk);
              res.on('end', () => resolve(data.trim()));
          });
          
          req.on('error', reject);
          req.setTimeout(5000, () => {
              req.destroy();
              reject(new Error('请求超时'));
          });
      });
  }
  
  isValidIPv4(ip) {
      return /^(\d{1,3}\.){3}\d{1,3}$/.test(ip);
  }

  isValidIPv6(ip) {
      // 1. 语法校验：仅 16 进制与冒号且至少一个冒号 (v4-mapped "::ffff:1.2.3.4" 因含 '.' 天然被拒)
      if (!/^[0-9a-fA-F:]+$/.test(ip) || !ip.includes(':')) {
          return false;
      }

      // 2. 公网全局单播 (2000::/3) 前向校验: 首个 hextet 须以 2/3 开头且满 4 位,
      //    ULA(fc00::/7)/链路本地(fe80::/10)/多播(ff00::/8)/回环/未指定/站点本地全部拒报
      //    (对齐 java isGlobalUnicastIpv6Text / py ipaddress.is_global / go isValidIPv6)
      const first = ip.split(':')[0];
      return /^[23][0-9a-fA-F]{3}$/.test(first);
  }
  async getRealtimeInfo() {
    const [cpuLoad, mem, networkStats, load] = await Promise.all([
      si.currentLoad(),
      si.mem(),
      si.networkStats(),
      si.currentLoad()
    ]);

    const network = networkStats[0] || { tx_bytes: 0, rx_bytes: 0 };
    const now = Date.now() / 1000;
    const timeDiff = now - this.lastNetworkTime;

    const currentUp = network.tx_bytes - this.lastNetworkStats.tx;
    const currentDown = network.rx_bytes - this.lastNetworkStats.rx;

    this.totalNetworkUp += currentUp;
    this.totalNetworkDown += currentDown;

    this.lastNetworkStats = { tx: network.tx_bytes, rx: network.rx_bytes };
    this.lastNetworkTime = now;

    const processInfo = await si.processes();
    return {
      cpu: { usage: Math.round(cpuLoad.currentLoad) },
      ram: { total: mem.total, used: mem.active },
      swap: { total: mem.swaptotal, used: mem.swapused },
      load: {
        load1: Math.round(load.avgLoad * 100) / 100,
        load5: Math.round(load.avgLoad * 100) / 100,
        load15: Math.round(load.avgLoad * 100) / 100
      },
      disk: await this._getDiskInfo(),
      network: {
        up: Math.round(currentUp / timeDiff),
        down: Math.round(currentDown / timeDiff),
        totalUp: this.totalNetworkUp,
        totalDown: this.totalNetworkDown
      },
      connections: await this._getConnections(),
      uptime: os.uptime(),
      process: processInfo?.all || 0,
      message: ''
    };
  }

  async _getVirtualization() {
      try {
          // 1. 检查特征文件 (最快速，命中率高)
          if (fs.existsSync('/.dockerenv')) {
              return 'Docker';
          }
          if (fs.existsSync('/run/.containerenv')) {
              return 'Podman'; // Podman 的专属特征文件
          }

          // 2. 检查 Cgroup (兼容 V1，并增加 containerd/kubepods 识别)
          if (fs.existsSync('/proc/1/cgroup')) {
              const cgroup = fs.readFileSync('/proc/1/cgroup', 'utf8').toLowerCase();
              if (cgroup.includes('docker') || cgroup.includes('containerd')) {
                  return 'Docker';
              } else if (cgroup.includes('kubepods')) {
                  return 'Kubernetes'; // K8s 环境
              } else if (cgroup.includes('lxc')) {
                  return 'LXC';
              }
          }

          // 3. 检查挂载点信息 (突破 Cgroup V2 限制的最有效方案)
          if (fs.existsSync('/proc/self/mountinfo')) {
              const mountinfo = fs.readFileSync('/proc/self/mountinfo', 'utf8');
              if (mountinfo.includes('/docker/containers/') || mountinfo.includes('workdir=/var/lib/docker')) {
                  return 'Docker';
              } else if (mountinfo.includes('/pods/') || mountinfo.includes('kubelet')) {
                  return 'Kubernetes';
              }
          }

          // 4. 检查初始进程的环境变量 (LXC 等有时会在这里暴露)
          if (fs.existsSync('/proc/1/environ')) {
              const environ = fs.readFileSync('/proc/1/environ', 'utf8');
              if (environ.includes('container=lxc')) {
                  return 'LXC';
              }
          }

          // 5. 检查硬件级/系统级虚拟化 (KVM/QEMU)
          if (fs.existsSync('/proc/cpuinfo')) {
              const cpuinfo = fs.readFileSync('/proc/cpuinfo', 'utf8');
              if (cpuinfo.includes('QEMU') || cpuinfo.includes('KVM')) {
                  return 'QEMU';
              }
          }
      } catch (error) {
          // 建议在调试阶段把错误打出来，比如文件权限问题：
          // console.error("❌ 获取虚拟化信息失败:", error.message);
      }
      
      return 'None';
  }

  async _getDiskInfo() {
    try {
      const disks = await si.fsSize();
      
      // 过滤掉内存盘、联合文件系统以及重复的 loop 设备
      const validDisks = disks.filter(disk => {
        return disk.size > 0 && 
              disk.type !== 'tmpfs' && 
              disk.type !== 'overlay' && 
              disk.fs.startsWith('/dev/'); // 只保留真正的 /dev/ 块设备
      });

      const total = validDisks.reduce((sum, disk) => sum + disk.size, 0);
      const used = validDisks.reduce((sum, disk) => sum + disk.used, 0);
      
      return { total, used };
    } catch {
      return { total: 0, used: 0 };
    }
  }

  async _getConnections() {
    try {
      const networkConnections = await si.networkConnections();
      const tcp = networkConnections.filter(conn => conn.protocol === 'tcp').length;
      const udp = networkConnections.filter(conn => conn.protocol === 'udp').length;
      return { tcp, udp };
    } catch {
      return { tcp: 0, udp: 0 };
    }
  }
}

// ============================================================================
// 🛠️ 命令执行器
// ============================================================================
class CommandExecutor {
  static async execute(cmd, options = {}) {
    const { cwd = process.cwd(), env = {}, timeout = Config.Rtimeout } = options;

    return new Promise((resolve) => {
      const startTime = Date.now();

      const child = exec(cmd, {
        cwd,
        env: { ...process.env, ...env },
        timeout: timeout * 1000,
        maxBuffer: 10 * 1024 * 1024 // 10MB
      }, (error, stdout, stderr) => {
        const duration = Date.now() - startTime;
        const timeoutOccurred = error && error.killed && error.signal;

        let result = stdout || '';
        if (stderr) result += stderr;

        let exitcode = 0;
        if (error) {
          if (timeoutOccurred) {
            exitcode = 124;
          } else if (typeof error.code === 'number') {
            exitcode = error.code;
          } else {
            exitcode = -1;
          }
        }

        resolve({
          result,
          exitcode,
          timeout: timeoutOccurred,
          cmd
        });
      });
    });
  }
}

// ============================================================================
// 🔐 A-1 路径边界校验 (唯一权威实现): 基于 realpath 判断目标是否位于 FILE_ROOT 之内。
// 防御: 兄弟目录逃逸(../sibling)、绝对路径/盘符、FileRoot 降级为相对路径、symlink 逃逸。
// 对尚不存在的目标 (上传/新建), 校验其最深已存在祖先的 realpath, 剩余段为纯名称拼接。
// ============================================================================
function isPathInsideFileRoot(p) {
  try {
    const rootReal = fs.realpathSync.native(path.resolve(Config.FILE_ROOT));
    const abs = path.resolve(p);
    let probe = abs;
    while (!fs.existsSync(probe)) {
      const parent = path.dirname(probe);
      if (parent === probe) return false; // 已到文件系统根仍未命中 (盘符不存在等)
      probe = parent;
    }
    const realProbe = fs.realpathSync.native(probe);
    const relReal = path.relative(rootReal, realProbe);
    if (relReal.startsWith('..') || path.isAbsolute(relReal)) return false;
    const remainder = path.relative(probe, abs);
    if (remainder && (remainder.startsWith('..') || path.isAbsolute(remainder))) return false;
    return true;
  } catch (e) {
    return false;
  }
}

// ============================================================================
// 🗜️ ZIP 归档器 (0.5.4, docs/API.MD 12.1/12.2): Node 标准库无 zip 归档支持,
//    基于 zlib 手写精简 ZIP 读写 (不引入新依赖)。仅支持 store(0)/deflate(8),
//    加密条目与 zip64 条目在解压时跳过并计入 skipped。
// ============================================================================
class ZipArchiver {
  static ZIP_MAX_ENTRIES = 20000;                 // 限额: 条目数
  static ZIP_MAX_TOTAL_BYTES = 512 * 1024 * 1024; // 限额: 解压总 uncompressed 字节
  static ZIP_MAX_LISTED_FILES = 500;              // 响应 files 列表上限, 超出 files_truncated=true

  static _crcTable = null;

  static _crc32(buf) {
    if (!ZipArchiver._crcTable) {
      const table = new Int32Array(256);
      for (let n = 0; n < 256; n++) {
        let c = n;
        for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
        table[n] = c;
      }
      ZipArchiver._crcTable = table;
    }
    const table = ZipArchiver._crcTable;
    let crc = -1;
    for (let i = 0; i < buf.length; i++) crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xFF];
    return (crc ^ -1) >>> 0;
  }

  static _dosDateTime(d) {
    const time = ((d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1)) & 0xFFFF;
    const date = (((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate()) & 0xFFFF;
    return { time, date };
  }

  // 流式写入器: add() 逐条写 local header+数据 (文件数据不整体驻留内存),
  // close() 追加 central directory + EOCD。返回写入条目数。
  static openWriter(zipPath) {
    const fd = fs.openSync(zipPath, 'w');
    const centralParts = [];
    let offset = 0;
    let count = 0;
    const writeAll = (buf) => {
      let written = 0;
      while (written < buf.length) written += fs.writeSync(fd, buf, written, buf.length - written);
    };
    return {
      add(name, data, mtime, isDir = false) {
        if (count >= ZipArchiver.ZIP_MAX_ENTRIES) return false;
        const nameBuf = Buffer.from(name, 'utf8');
        data = data || Buffer.alloc(0);
        const crc = isDir ? 0 : ZipArchiver._crc32(data);
        let method = 0;
        let payload = data;
        if (!isDir && data.length > 0) {
          const deflated = zlib.deflateRawSync(data, { level: 6 });
          if (deflated.length < data.length) { method = 8; payload = deflated; }
        }
        const { time, date } = ZipArchiver._dosDateTime(mtime || new Date());
        const local = Buffer.alloc(30);
        local.writeUInt32LE(0x04034b50, 0); // local file header signature
        local.writeUInt16LE(20, 4);         // version needed to extract
        local.writeUInt16LE(0x0800, 6);     // flags: bit11 UTF-8 名称
        local.writeUInt16LE(method, 8);
        local.writeUInt16LE(time, 10);
        local.writeUInt16LE(date, 12);
        local.writeUInt32LE(crc, 14);
        local.writeUInt32LE(payload.length, 18);
        local.writeUInt32LE(data.length, 22);
        local.writeUInt16LE(nameBuf.length, 26);
        local.writeUInt16LE(0, 28);
        writeAll(local);
        writeAll(nameBuf);
        writeAll(payload);

        const central = Buffer.alloc(46);
        central.writeUInt32LE(0x02014b50, 0); // central directory signature
        central.writeUInt16LE(20, 4);         // version made by
        central.writeUInt16LE(20, 6);         // version needed
        central.writeUInt16LE(0x0800, 8);
        central.writeUInt16LE(method, 10);
        central.writeUInt16LE(time, 12);
        central.writeUInt16LE(date, 14);
        central.writeUInt32LE(crc, 16);
        central.writeUInt32LE(payload.length, 20);
        central.writeUInt32LE(data.length, 24);
        central.writeUInt16LE(nameBuf.length, 28);
        central.writeUInt16LE(0, 30);
        central.writeUInt16LE(0, 32);
        central.writeUInt16LE(0, 34);
        central.writeUInt16LE(0, 36);
        central.writeUInt32LE(isDir ? 0x10 : 0, 38); // external attrs (dir bit)
        central.writeUInt32LE(offset, 42);
        centralParts.push(central, nameBuf);
        offset += 30 + nameBuf.length + payload.length;
        count++;
        return true;
      },
      close() {
        const centralBuf = Buffer.concat(centralParts);
        const eocd = Buffer.alloc(22);
        eocd.writeUInt32LE(0x06054b50, 0); // EOCD signature
        eocd.writeUInt16LE(0, 4);
        eocd.writeUInt16LE(0, 6);
        eocd.writeUInt16LE(count, 8);
        eocd.writeUInt16LE(count, 10);
        eocd.writeUInt32LE(centralBuf.length, 12);
        eocd.writeUInt32LE(offset, 16);
        eocd.writeUInt16LE(0, 20);
        writeAll(centralBuf);
        writeAll(eocd);
        fs.closeSync(fd);
        return count;
      },
    };
  }

  // 解析 zip: 返回 [{ name, isDir, method, crc, size, compressedSize, encrypted, zip64, data|null }]
  // 非法 zip (无 EOCD) 抛 Error; data 仅对可解条目填充
  static parse(zipPath) {
    const buf = fs.readFileSync(zipPath);
    let eocd = -1;
    const minEocd = Math.max(0, buf.length - (65535 + 22));
    for (let i = buf.length - 22; i >= minEocd; i--) {
      if (buf.readUInt32LE(i) === 0x06054b50) { eocd = i; break; }
    }
    if (eocd < 0) throw new Error('Not a zip file');
    const count = buf.readUInt16LE(eocd + 10);
    const cdSize = buf.readUInt32LE(eocd + 12);
    const cdOffset = buf.readUInt32LE(eocd + 16);
    const entries = [];
    let p = cdOffset;
    const cdEnd = cdOffset + cdSize;
    for (let i = 0; i < count && p + 46 <= cdEnd; i++) {
      if (buf.readUInt32LE(p) !== 0x02014b50) break;
      const flags = buf.readUInt16LE(p + 8);
      const method = buf.readUInt16LE(p + 10);
      const crc = buf.readUInt32LE(p + 16);
      const compressedSize = buf.readUInt32LE(p + 20);
      const size = buf.readUInt32LE(p + 24);
      const nameLen = buf.readUInt16LE(p + 28);
      const extraLen = buf.readUInt16LE(p + 30);
      const commentLen = buf.readUInt16LE(p + 32);
      const attrs = buf.readUInt32LE(p + 38);
      const localOffset = buf.readUInt32LE(p + 42);
      const name = buf.slice(p + 46, p + 46 + nameLen).toString('utf8');
      p += 46 + nameLen + extraLen + commentLen;
      const entry = {
        name,
        isDir: name.endsWith('/') || (attrs & 0x10) !== 0,
        method, crc, size, compressedSize,
        encrypted: (flags & 0x1) !== 0,
        zip64: compressedSize === 0xFFFFFFFF || size === 0xFFFFFFFF || localOffset === 0xFFFFFFFF,
        data: null,
      };
      // local header 的 name/extra 长度可能与 central 不同, 须按其自身字段定位数据
      if (!entry.isDir && !entry.encrypted && !entry.zip64) {
        if (localOffset + 30 <= buf.length && buf.readUInt32LE(localOffset) === 0x04034b50) {
          const lhNameLen = buf.readUInt16LE(localOffset + 26);
          const lhExtraLen = buf.readUInt16LE(localOffset + 28);
          const dataStart = localOffset + 30 + lhNameLen + lhExtraLen;
          if (dataStart + compressedSize <= buf.length) {
            entry.data = buf.slice(dataStart, dataStart + compressedSize);
          }
        }
      }
      entries.push(entry);
    }
    return entries;
  }

  // 解出单条目; 不支持的压缩方法抛 Error (调用方计入 skipped)
  static inflate(entry) {
    if (entry.method === 0) return entry.data;
    if (entry.method === 8) return zlib.inflateRawSync(entry.data);
    throw new Error(`Unsupported zip method: ${entry.method}`);
  }
}

// ============================================================================
// 📁 文件管理器
// ============================================================================
class FileManager {
  static async listFiles(dirPath, recursive = false) {
    const fullPath = path.resolve(Config.FILE_ROOT, dirPath || '.');

    if (!isPathInsideFileRoot(fullPath)) {
      throw new Error('Access denied: path outside root');
    }

    if (!fs.existsSync(fullPath)) {
      throw new Error('Path not found');
    }

    const files = [];

    const traverse = (currentPath) => {
      const items = fs.readdirSync(currentPath);
      for (const item of items) {
        const itemPath = path.join(currentPath, item);
        const stats = fs.statSync(itemPath);

        const fileInfo = new FileInfo();
        fileInfo.name = item;
        fileInfo.path = path.relative(Config.FILE_ROOT, itemPath);
        fileInfo.type = stats.isDirectory() ? 'directory' : 'file';
        fileInfo.size = stats.size;
        fileInfo.mtime = stats.mtime.toISOString();
        fileInfo.mode = this._formatMode(stats.mode, stats.isDirectory());
        fileInfo.mode_octal = `0o${(stats.mode & 0o777).toString(8)}`;
        fileInfo.owner = `${stats.uid}:${stats.gid}`;

        files.push(fileInfo);

        if (recursive && stats.isDirectory()) {
          traverse(itemPath);
        }
      }
    };

    traverse(fullPath);
    return files;
  }

  static async getFilePermissions(paths) {
    const results = [];

    for (const filePath of paths) {
      const fullPath = path.resolve(Config.FILE_ROOT, filePath);

      if (!isPathInsideFileRoot(fullPath)) {
        continue;
      }

      try {
        const stats = fs.statSync(fullPath);
        const readable = this._checkAccess(fullPath, fs.constants.R_OK);
        const writable = this._checkAccess(fullPath, fs.constants.W_OK);
        const executable = this._checkAccess(fullPath, fs.constants.X_OK);

        const authInfo = new AuthorityInfo();
        authInfo.path = path.relative(Config.FILE_ROOT, fullPath);
        authInfo.name = path.basename(fullPath);
        authInfo.mode = this._formatMode(stats.mode, stats.isDirectory());
        authInfo.mode_octal = `0o${(stats.mode & 0o777).toString(8)}`;
        authInfo.type = stats.isDirectory() ? 'directory' : 'file';
        authInfo.readable = readable;
        authInfo.writable = writable;
        authInfo.executable = executable;

        results.push(authInfo);
      } catch (e) {
        // skip inaccessible files
      }
    }

    return results;
  }

  static _checkAccess(fullPath, mode) {
    try {
      fs.accessSync(fullPath, mode);
      return true;
    } catch {
      return false;
    }
  }

  static _parseMode(mode) {
    if (typeof mode === 'number') {
      return mode;
    }

    if (typeof mode === 'string') {
      const cleaned = mode.trim();
      if (/^[0-7]{3,4}$/.test(cleaned)) {
        return parseInt(cleaned, 8);
      }
    }

    throw new Error('Unsupported permission format, only octal strings are supported');
  }

  static _formatMode(mode, isDirectory) {
    const type = isDirectory ? 'd' : '-';
    const flags = ['r', 'w', 'x'];
    const perm = (mode & 0o777).toString(8).padStart(3, '0');
    let result = type;

    for (const digit of perm) {
      const value = parseInt(digit, 10);
      result += flags.map((flag, index) => (value & (4 >> index) ? flag : '-')).join('');
    }

    return result;
  }

  static async setFilePermissions(permissions, recursive = false) {
    const results = [];

    for (const [filePath, modeStr] of Object.entries(permissions)) {
      const fullPath = path.resolve(Config.FILE_ROOT, filePath);
      if (!isPathInsideFileRoot(fullPath)) {
        results.push({ path: filePath, requested: String(modeStr), applied: '', mode_octal: '', status: 'access_denied' });
        continue;
      }

      try {
        const mode = this._parseMode(modeStr);
        const applyMode = (targetPath) => {
          fs.chmodSync(targetPath, mode);
        };

        if (recursive && fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
          const walk = (currentPath) => {
            applyMode(currentPath);
            const children = fs.readdirSync(currentPath);
            for (const child of children) {
              const childPath = path.join(currentPath, child);
              if (fs.statSync(childPath).isDirectory()) {
                walk(childPath);
              } else {
                applyMode(childPath);
              }
            }
          };
          walk(fullPath);
        } else {
          applyMode(fullPath);
        }

        const appliedMode = mode.toString(8);
        results.push({ path: filePath, requested: String(modeStr), applied: appliedMode, mode_octal: `0o${appliedMode}`, status: 'ok' });
      } catch (e) {
        results.push({ path: filePath, requested: String(modeStr), applied: '', mode_octal: '', status: 'error', message: e.message });
      }
    }

    const success = results.filter(item => item.status === 'ok').length;
    return {
      status: 'ok',
      total: results.length,
      success,
      results
    };
  }

  static async readFile(filePath) {
    const fullPath = path.resolve(Config.FILE_ROOT, filePath);

    if (!isPathInsideFileRoot(fullPath)) {
      throw new Error('Access denied: path outside root');
    }

    const stats = fs.statSync(fullPath);
    if (stats.size > 1024 * 1024) { // 1MB
      throw new Error('File too large');
    }

    const content = fs.readFileSync(fullPath);
    const isBinary = this._isBinary(content);

    return {
      status: 'ok',
      path: path.relative(Config.FILE_ROOT, fullPath),
      content: isBinary ? base64.fromByteArray(content) : content.toString('utf8'),
      encoding: isBinary ? 'base64' : 'utf-8',
      is_binary: isBinary,
      size: stats.size
    };
  }

  static _isBinary(buffer) {
    if (!buffer || buffer.length === 0) return false;
    for (let i = 0; i < Math.min(buffer.length, 512); i++) {
      if (buffer[i] === 0) return true;
    }
    return false;
  }

  static async uploadFile(filePath, filename, content, chunkId = null, totalChunks = null) {
    const fullPath = path.resolve(Config.FILE_ROOT, filePath);
    let targetPath = fullPath;

    if (filename) {
      targetPath = path.join(fullPath, filename);
    }

    if (!isPathInsideFileRoot(targetPath)) {
      throw new Error('Access denied: path outside root');
    }

    if (!fs.existsSync(path.dirname(targetPath))) {
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    }

    const buffer = base64.toByteArray(content);
    if (buffer.length > Config.MAX_UPLOAD_SIZE) {
      throw new Error('File too large');
    }

    if (chunkId !== null && totalChunks !== null) {
      const chunkIndex = Number(chunkId);
      const totalCount = Number(totalChunks);
      if (Number.isNaN(chunkIndex) || Number.isNaN(totalCount)) {
        throw new Error('chunk_id and total_chunks must be numeric');
      }

      const chunkDir = path.join(path.dirname(targetPath), '.upload_chunks', path.basename(targetPath));
      if (!fs.existsSync(chunkDir)) {
        fs.mkdirSync(chunkDir, { recursive: true });
      }

      const chunkFile = path.join(chunkDir, `chunk_${chunkIndex}`);
      fs.writeFileSync(chunkFile, buffer);

      const files = fs.readdirSync(chunkDir).filter(n => n.startsWith('chunk_'));
      const received = files.length;
      const merged = received === totalCount;

      if (merged) {
        const out = fs.createWriteStream(targetPath);
        for (let i = 0; i < totalCount; i++) {
          const part = path.join(chunkDir, `chunk_${i}`);
          if (!fs.existsSync(part)) {
            out.close();
            throw new Error(`Missing chunk ${i}`);
          }
          out.write(fs.readFileSync(part));
        }
        out.end();

        // cleanup chunks (rmdir fails silently while other uploads still use .upload_chunks)
        const uploadRoot = path.dirname(chunkDir);
        fs.rmSync(chunkDir, { recursive: true, force: true });
        try { fs.rmdirSync(uploadRoot); } catch (_) {}
      }

      return {
        status: 'ok',
        path: path.relative(Config.FILE_ROOT, targetPath),
        received,
        total: totalCount,
        chunked: true
      };
    }

    fs.writeFileSync(targetPath, buffer);
    return {
      status: 'ok',
      path: path.relative(Config.FILE_ROOT, targetPath),
      received: buffer.length,
      total: buffer.length,
      chunked: false
    };
  }
  static async uploadFileRaw(dirPath, filename, buffer, chunkId = null, totalChunks = null) {
    const fullPath = path.resolve(Config.FILE_ROOT, dirPath || '.');
    let targetPath = fullPath;

    if (filename) {
      targetPath = path.join(fullPath, filename);
    }

    if (!isPathInsideFileRoot(targetPath)) {
      throw new Error('Access denied: path outside root');
    }

    if (!fs.existsSync(path.dirname(targetPath))) {
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    }

    if (buffer.length > Config.MAX_UPLOAD_SIZE) {
      throw new Error('File too large');
    }

    // 📦 分块上传直传落盘逻辑
    if (chunkId !== null && totalChunks !== null) {
      const chunkIndex = Number(chunkId);
      const totalCount = Number(totalChunks);
      if (Number.isNaN(chunkIndex) || Number.isNaN(totalCount)) {
        throw new Error('chunk_id and total_chunks must be numeric');
      }

      const chunkDir = path.join(path.dirname(targetPath), '.upload_chunks', path.basename(targetPath));
      if (!fs.existsSync(chunkDir)) {
        fs.mkdirSync(chunkDir, { recursive: true });
      }

      const chunkFile = path.join(chunkDir, `chunk_${chunkIndex}`);
      fs.writeFileSync(chunkFile, buffer);

      const files = fs.readdirSync(chunkDir).filter(n => n.startsWith('chunk_'));
      const received = files.length;
      const merged = received === totalCount;

      if (merged) {
        // 高效高安全性的内存 Buffer 拼接合并，完美对齐返回强类型结构体
        const chunks = [];
        for (let i = 0; i < totalCount; i++) {
          const part = path.join(chunkDir, `chunk_${i}`);
          if (!fs.existsSync(part)) {
            throw new Error(`Missing chunk ${i}`);
          }
          chunks.push(fs.readFileSync(part));
        }
        fs.writeFileSync(targetPath, Buffer.concat(chunks));

        // 清理临时切片 (rmdir fails silently while other uploads still use .upload_chunks)
        const uploadRoot = path.dirname(chunkDir);
        fs.rmSync(chunkDir, { recursive: true, force: true });
        try { fs.rmdirSync(uploadRoot); } catch (_) {}

        return {
          status: 'ok',
          path: path.relative(Config.FILE_ROOT, targetPath),
          chunk_id: chunkIndex,
          completed: true,
          message: "All chunks received. File merged successfully."
        };
      }

      return {
        status: 'ok',
        path: path.relative(Config.FILE_ROOT, targetPath),
        chunk_id: chunkIndex,
        completed: false,
        message: `Chunk ${chunkIndex} uploaded. Waiting for remaining blocks.`
      };
    }

    // 🚀 单文件直传落盘模式
    fs.writeFileSync(targetPath, buffer);
    return {
      status: 'ok',
      path: path.relative(Config.FILE_ROOT, targetPath),
      chunk_id: 0,
      completed: true,
      message: "File uploaded successfully."
    };
  }
  static async downloadFile(filePath) {
    const fullPath = path.resolve(Config.FILE_ROOT, filePath);

    if (!isPathInsideFileRoot(fullPath)) {
      throw new Error('Access denied: path outside root');
    }

    if (!fs.existsSync(fullPath)) {
      throw new Error('File not found');
    }

    const stats = fs.statSync(fullPath);
    // 🚀 0.5.6: 直接返回原始 Buffer 且改用异步读取 — 原实现 readFileSync 后先 base64
    // 编码、路由层再解码回 Buffer, 大文件凭空多出 1.33x 内存峰值与两次全量拷贝
    const content = await fs.promises.readFile(fullPath);

    return {
      path: path.relative(Config.FILE_ROOT, fullPath),
      content,
      size: stats.size
    };
  }

  static async deleteFiles(paths) {
    const results = [];

    for (const filePath of paths) {
      const fullPath = path.resolve(Config.FILE_ROOT, filePath);

      if (!isPathInsideFileRoot(fullPath)) {
        results.push({ path: filePath, status: 'access_denied' });
        continue;
      }

      try {
        if (fs.existsSync(fullPath)) {
          const stats = fs.statSync(fullPath);
          if (stats.isDirectory()) {
            fs.rmSync(fullPath, { recursive: true, force: true });
          } else {
            fs.unlinkSync(fullPath);
          }
          results.push({ path: filePath, status: 'deleted' });
        } else {
          results.push({ path: filePath, status: 'not_found' });
        }
      } catch (e) {
        results.push({ path: filePath, status: 'error', message: e.message });
      }
    }

    return results;
  }

  static async moveFiles(moveMap) {
    const results = [];

    for (const [src, dest] of Object.entries(moveMap)) {
      const srcPath = path.resolve(Config.FILE_ROOT, src);
      const destPath = path.resolve(Config.FILE_ROOT, dest);

      if (!isPathInsideFileRoot(srcPath) || !isPathInsideFileRoot(destPath)) {
        results.push({ from: src, to: dest, status: 'access_denied' });
        continue;
      }

      try {
        const destDir = path.dirname(destPath);
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true });
        }

        fs.renameSync(srcPath, destPath);
        results.push({ from: src, to: dest, status: 'ok' });
      } catch (e) {
        results.push({ from: src, to: dest, status: 'error', message: e.message });
      }
    }

    return results;
  }

  static async copyFiles(copyMap) {
    const results = [];

    for (const [src, dest] of Object.entries(copyMap)) {
      const srcPath = path.resolve(Config.FILE_ROOT, src);
      const destPath = path.resolve(Config.FILE_ROOT, dest);

      if (!isPathInsideFileRoot(srcPath) || !isPathInsideFileRoot(destPath)) {
        results.push({ from: src, to: dest, status: 'access_denied' });
        continue;
      }

      try {
        if (!fs.existsSync(srcPath)) {
          results.push({ from: src, to: dest, status: 'not_found' });
          continue;
        }

        const destDir = path.dirname(destPath);
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true });
        }

        const stat = fs.statSync(srcPath);
        if (stat.isDirectory()) {
          if (fs.cpSync) {
            fs.cpSync(srcPath, destPath, { recursive: true });
          } else {
            const copyRecursive = (source, target) => {
              if (fs.statSync(source).isDirectory()) {
                if (!fs.existsSync(target)) fs.mkdirSync(target, { recursive: true });
                for (const child of fs.readdirSync(source)) {
                  copyRecursive(path.join(source, child), path.join(target, child));
                }
              } else {
                fs.copyFileSync(source, target);
              }
            };
            copyRecursive(srcPath, destPath);
          }
        } else {
          fs.copyFileSync(srcPath, destPath);
        }

        results.push({ from: src, to: dest, status: 'ok' });
      } catch (e) {
        results.push({ from: src, to: dest, status: 'error', message: e.message });
      }
    }

    return results;
  }

  static async createDirectory(dirPath) {
    const fullPath = path.resolve(Config.FILE_ROOT, dirPath);

    if (!isPathInsideFileRoot(fullPath)) {
      throw new Error('Access denied: path outside root');
    }

    fs.mkdirSync(fullPath, { recursive: true });

    return {
      status: 'ok',
      path: path.relative(Config.FILE_ROOT, fullPath)
    };
  }

  // ================= ZIP 压缩/解压 (0.5.4, docs/API.MD 12.1/12.2) =================

  static _displayPath(fullPath) {
    return path.relative(Config.FILE_ROOT, fullPath) || '.';
  }

  // 将文件/目录(递归)打包为 zip (等价 zip -r, 已存在时覆盖重建)
  // flat=true 时目录内容不带顶层目录名前缀; 单项失败不中断
  static async zipItems(zipPath, items, flat = false) {
    if (!zipPath) throw new Error('path required');
    if (!Array.isArray(items) || items.length === 0) {
      throw new Error('items required (non-empty array)');
    }
    const fullPath = path.resolve(Config.FILE_ROOT, zipPath);
    if (!isPathInsideFileRoot(fullPath)) {
      throw new Error('Access denied: path outside root');
    }
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
      throw new Error(`Target is a directory: ${zipPath}`);
    }

    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);

    const writer = ZipArchiver.openWriter(fullPath);
    const results = [];
    let addedTotal = 0;
    let truncated = false; // 超过条目上限后, 余下 item 整体跳过

    for (const item of items) {
      if (truncated) {
        results.push({ item, status: 'skipped', added: 0 });
        continue;
      }
      const itemPath = path.resolve(Config.FILE_ROOT, item || '');
      try {
        if (!isPathInsideFileRoot(itemPath)) {
          results.push({ item, status: 'error', added: 0 });
          continue;
        }
        if (!fs.existsSync(itemPath)) {
          results.push({ item, status: 'not_found', added: 0 });
          continue;
        }
        const stats = fs.statSync(itemPath);
        let added = 0;
        let partial = false;
        if (stats.isFile()) {
          if (!writer.add(path.basename(itemPath), fs.readFileSync(itemPath), stats.mtime)) {
            truncated = true;
            results.push({ item, status: 'skipped', added: 0 });
            continue;
          }
          added = 1;
        } else if (stats.isDirectory()) {
          // 递归打包, 非flat时条目名带顶层目录名前缀; 目录本身写条目 (带尾 /) 保留空目录
          const topName = path.basename(itemPath);
          const walk = (dir, base) => {
            for (const name of fs.readdirSync(dir)) {
              const child = path.join(dir, name);
              const rel = base ? `${base}/${name}` : name;
              const st = fs.statSync(child);
              if (st.isDirectory()) {
                if (!writer.add(`${rel}/`, Buffer.alloc(0), st.mtime, true)) { partial = true; return; }
                walk(child, rel);
                if (partial) return;
              } else if (st.isFile()) {
                if (!writer.add(rel, fs.readFileSync(child), st.mtime)) { partial = true; return; }
                added++;
              }
            }
          };
          walk(itemPath, flat ? '' : topName);
        } else {
          results.push({ item, status: 'error', added: 0 });
          continue;
        }
        if (partial) {
          truncated = true;
          addedTotal += added;
          results.push({ item, status: 'partial', added });
          continue;
        }
        addedTotal += added;
        results.push({ item, status: 'ok', added });
      } catch (e) {
        results.push({ item, status: 'error', added: 0 });
      }
    }
    writer.close();

    return {
      status: 'ok',
      path: FileManager._displayPath(fullPath),
      entries: addedTotal,
      size: fs.existsSync(fullPath) ? fs.statSync(fullPath).size : 0,
      results,
    };
  }

  // 解压 zip 到指定目录 (缺省解压到 zip 所在目录)
  // 防 zip-slip: 归一化后逃出目标目录的条目计入 skipped; 限额 20000 条目 / 512MB
  static async unzipArchive(zipPath, destPath, overwrite = true, entriesFilter = null) {
    if (!zipPath) throw new Error('path required');
    const fullPath = path.resolve(Config.FILE_ROOT, zipPath);
    if (!isPathInsideFileRoot(fullPath)) {
      throw new Error('Access denied: path outside root');
    }
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Zip not found: ${zipPath}`);
    }
    if (fs.statSync(fullPath).isDirectory()) {
      throw new Error(`Path is a directory: ${zipPath}`);
    }

    let dest;
    if (destPath) {
      dest = path.resolve(Config.FILE_ROOT, destPath);
      if (!isPathInsideFileRoot(dest)) {
        throw new Error('Access denied: path outside root');
      }
      if (fs.existsSync(dest) && !fs.statSync(dest).isDirectory()) {
        throw new Error(`Destination is a file: ${destPath}`);
      }
    } else {
      dest = path.dirname(fullPath);
    }
    fs.mkdirSync(dest, { recursive: true });

    let entries;
    try {
      entries = ZipArchiver.parse(fullPath);
    } catch (e) {
      throw new Error(`Not a zip file: ${zipPath}`);
    }

    const filters = (entriesFilter || []).filter((e) => e);
    let extracted = 0;
    let skipped = 0;
    let totalBytes = 0;
    const files = [];
    let filesTruncated = false;

    for (const entry of entries) {
      if (entry.isDir) continue; // 目录条目: 按需由父级 mkdir 创建
      if (extracted + skipped >= ZipArchiver.ZIP_MAX_ENTRIES || totalBytes >= ZipArchiver.ZIP_MAX_TOTAL_BYTES) {
        skipped++;
        continue;
      }
      const normName = entry.name.replace(/\\/g, '/');
      if (filters.length) {
        const base = normName.split('/').pop();
        if (!filters.includes(normName) && !filters.includes(base)) {
          skipped++;
          continue;
        }
      }
      if (entry.encrypted || entry.zip64 || totalBytes + entry.size > ZipArchiver.ZIP_MAX_TOTAL_BYTES) {
        skipped++;
        continue;
      }
      const out = path.resolve(dest, normName);
      // zip-slip: 归一化后必须仍在目标目录内
      const relToDest = path.relative(dest, out);
      if (relToDest.startsWith('..') || path.isAbsolute(relToDest)) {
        skipped++;
        continue;
      }
      if (!isPathInsideFileRoot(out)) {
        skipped++;
        continue;
      }
      let data;
      try {
        data = ZipArchiver.inflate(entry);
      } catch (e) {
        skipped++;
        continue;
      }
      if (ZipArchiver._crc32(data) !== entry.crc) {
        skipped++;
        continue;
      }
      if (!overwrite && fs.existsSync(out)) {
        skipped++;
        continue;
      }
      try {
        fs.mkdirSync(path.dirname(out), { recursive: true });
        fs.writeFileSync(out, data);
      } catch (e) {
        skipped++;
        continue;
      }
      extracted++;
      totalBytes += entry.size;
      if (files.length < ZipArchiver.ZIP_MAX_LISTED_FILES) {
        files.push(FileManager._displayPath(out));
      } else {
        filesTruncated = true;
      }
    }

    return {
      status: 'ok',
      path: FileManager._displayPath(fullPath),
      dest: FileManager._displayPath(dest),
      extracted,
      skipped,
      files,
      files_truncated: filesTruncated,
    };
  }
}

// ============================================================================
// 💾 任务持久化 (0.5.7, docs/API.MD 十三)
// - KSTORE_KEY 环境变量为唯一密钥来源 (base64/hex 32 字节), 不落盘; 未设置/非法则
//   持久化关闭 (fail-closed, 绝不明文落盘)
// - KSTORE 指定存储路径, off/0 显式关闭; 缺省 $HOME/.tmp/store.enc
// - 文件内容复用 0.5.6 响应加密容器 Base64(JSON{nonce,tag,ciphertext}),
//   明文为 {"magic","version","saved_at","data":{onetasks,crontasks}}
// - 仅持久化任务定义 (不含执行日志); 原子写 (tmp+rename); I/O 故障仅记日志降级,
//   绝不影响内存任务、请求成功与 agent 启动
// ============================================================================
class TaskStore {
  static MAGIC = 'kisama-store';
  static VERSION = 1;

  static state = {
    enabled: false,
    locked: false,      // true=加载到高版本数据, 禁止覆盖写
    path: null,
    key: null,
    lastSavedAt: null
  };

  static homeDir() {
    for (const d of [process.env.USERPROFILE, process.env.HOME]) {
      if (d && fs.existsSync(d)) return d;
    }
    try { return os.homedir() || process.cwd(); } catch (e) { return process.cwd(); }
  }

  static parseKey(raw) {
    if (!raw) return null;
    try {
      if (/^[0-9a-fA-F]{64}$/.test(raw)) {
        const key = Buffer.from(raw, 'hex');
        return key.length === 32 ? key : null;
      }
      // 与 py 侧 b64decode(validate=True) 对齐: 先校验字符集再解码, 解码后必须恰为 32 字节
      if (!/^[A-Za-z0-9+/]+={0,2}$/.test(raw)) return null;
      const key = Buffer.from(raw, 'base64');
      return key.length === 32 ? key : null;
    } catch (e) {
      return null;
    }
  }

  static init() {
    const state = TaskStore.state;
    let rawPath = (process.env.KSTORE || '').trim();
    if (['off', '0', 'none', 'false'].includes(rawPath.toLowerCase())) {
      Logger.info('[TaskStore] 💾 KSTORE=off, 任务持久化已显式关闭');
      return state;
    }
    const rawKey = (process.env.KSTORE_KEY || '').trim();
    if (!rawPath) {
      rawPath = path.join(TaskStore.homeDir(), '.tmp', 'store.enc');
    }
    const key = TaskStore.parseKey(rawKey);
    if (!key) {
      if (rawKey) Logger.error('[TaskStore] ❌ KSTORE_KEY 非法 (需 base64/hex 编码的 32 字节), 任务持久化保持关闭');
      else Logger.info('[TaskStore] 💾 KSTORE_KEY 未设置, 任务持久化未启用');
      return state;
    }
    state.path = rawPath;
    state.key = key;
    state.enabled = true;
    Logger.info(`[TaskStore] 💾 任务持久化已启用: ${state.path}`);
    return state;
  }

  // AES-256-GCM 容器与 0.5.6 响应加密一致: Base64(JSON{nonce,tag,ciphertext}), nonce 12 字节
  static encrypt(key, plaintextStr) {
    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
    const ciphertext = Buffer.concat([cipher.update(Buffer.from(plaintextStr, 'utf8')), cipher.final()]);
    const payload = {
      nonce: iv.toString('base64'),
      tag: cipher.getAuthTag().toString('base64'),
      ciphertext: ciphertext.toString('base64')
    };
    return Buffer.from(JSON.stringify(payload), 'utf8').toString('base64');
  }

  static decrypt(key, payloadB64) {
    const payload = JSON.parse(Buffer.from(payloadB64, 'base64').toString('utf8'));
    if (!payload.nonce || !payload.tag || !payload.ciphertext) {
      throw new Error('密文容器缺少 nonce/tag/ciphertext 字段');
    }
    const decipher = crypto.createDecipheriv('aes-256-gcm', key, Buffer.from(payload.nonce, 'base64'));
    decipher.setAuthTag(Buffer.from(payload.tag, 'base64'));
    return Buffer.concat([
      decipher.update(Buffer.from(payload.ciphertext, 'base64')),
      decipher.final()
    ]).toString('utf8');
  }

  static load() {
    const state = TaskStore.state;
    if (!state.enabled) return { onetasks: [], crontasks: {} };
    try {
      if (!fs.existsSync(state.path)) return { onetasks: [], crontasks: {} };
      const payloadB64 = fs.readFileSync(state.path, 'utf8').trim();
      if (!payloadB64) return { onetasks: [], crontasks: {} };
      let doc;
      try {
        doc = JSON.parse(TaskStore.decrypt(state.key, payloadB64));
      } catch (e) {
        throw new Error(`解密失败 (密钥错误或数据被篡改): ${e.message}`);
      }
      if (!doc || doc.magic !== TaskStore.MAGIC) throw new Error('magic 不匹配');
      const version = parseInt(doc.version, 10) || 0;
      if (version > TaskStore.VERSION) {
        // 高版本数据: 保留原文件并锁定写, 防止旧版本 agent 覆盖
        state.locked = true;
        Logger.error(`[TaskStore] ❌ 存储版本 ${version} 高于支持版本 ${TaskStore.VERSION}, 保留原文件不覆盖, 本次以空任务启动且持久化只读`);
        return { onetasks: [], crontasks: {} };
      }
      if (version !== TaskStore.VERSION) throw new Error(`不支持的版本 ${version}`);
      const data = doc.data || {};
      state.lastSavedAt = doc.saved_at || null;
      const onetasks = Array.isArray(data.onetasks) ? data.onetasks.map(String) : [];
      const crontasks = {};
      for (const [k, v] of Object.entries(data.crontasks || {})) crontasks[String(k)] = String(v);
      Logger.info(`[TaskStore] 💾 已恢复持久化任务: onetime=${onetasks.length}, cron=${Object.keys(crontasks).length}`);
      return { onetasks, crontasks };
    } catch (e) {
      TaskStore.quarantine(`加载失败: ${e.message}`);
      return { onetasks: [], crontasks: {} };
    }
  }

  static quarantine(reason) {
    try {
      const state = TaskStore.state;
      if (state.path && fs.existsSync(state.path)) {
        const bad = `${state.path}.bad-${Date.now()}`;
        fs.renameSync(state.path, bad);
        Logger.error(`[TaskStore] ❌ ${reason}, 原文件已隔离: ${bad}`);
      } else {
        Logger.error(`[TaskStore] ❌ ${reason}`);
      }
    } catch (e) {
      Logger.error(`[TaskStore] ❌ ${reason}, 且隔离失败: ${e.message}`);
    }
  }

  static save(onetasks, crontasks) {
    const state = TaskStore.state;
    if (!state.enabled || state.locked) return false;
    let tmp = null;
    try {
      const doc = {
        magic: TaskStore.MAGIC,
        version: TaskStore.VERSION,
        saved_at: new Date().toISOString().replace(/\.\d+Z$/, 'Z'),
        data: { onetasks: onetasks || [], crontasks: crontasks || {} }
      };
      const payload = TaskStore.encrypt(state.key, JSON.stringify(doc));
      fs.mkdirSync(path.dirname(state.path), { recursive: true });
      tmp = `${state.path}.tmp-${process.pid}`;
      fs.writeFileSync(tmp, payload, 'utf8');
      fs.renameSync(tmp, state.path);
      state.lastSavedAt = doc.saved_at;
      return true;
    } catch (e) {
      Logger.error(`[TaskStore] ❌ 保存失败 (内存任务不受影响): ${e.message}`);
      try { if (tmp && fs.existsSync(tmp)) fs.unlinkSync(tmp); } catch (e2) { /* 忽略 */ }
      return false;
    }
  }
}

// ============================================================================
// ⚙️ 任务管理器
// ============================================================================
class TaskManager {
  static cronJobs = new Map();

  static _appendLog(list, entry) {
    list.push(entry);
    if (list.length > Config.MAX_TASK_LOG_SIZE) {
      list.splice(0, list.length - Config.MAX_TASK_LOG_SIZE);
    }
  }

  static _formatLogEntry(cmd, output, exitcode, type, cronExpr = null) {
    const timestamp = new Date().toISOString();
    return {
      ts: timestamp,
      cmd,
      output,
      exitcode,
      type,
      cron: cronExpr,
      formatted: `${timestamp} ---- ${cmd} ---- exitcode=${exitcode}\n${output?.trim() || ''}`
    };
  }

  static getOnetimeTasks() {
    return {
      status: 'ok',
      count: Config.onetasks.length,
      tasks: Config.onetasks
    };
  }

  // ==================== 🪪 任务元数据行 (0.6.2 契约, docs/API.MD 四) ====================
  // 任务身份 = 脚本首行保留注释 `kisama-task: id=<创建ms> updated=<修改ms>`
  // (Unix `#` / Windows `rem` 注释语法, 随脚本逐字往返; POST 设置时在此规范化盖章:
  //  同任务内容未变→幂等保留原 id/updated, 内容变化→保留 id 刷新 updated, 全新任务→赋 id=now)
  static taskMetaLineRe = /^\s*(?:#|rem\b)\s*kisama-task:\s*(.*)$/i;

  static parseTaskMeta(script) {
    const lines = String(script ?? '').split('\n').slice(0, 3);
    for (const line of lines) {
      const m = TaskManager.taskMetaLineRe.exec(line);
      if (!m) continue;
      const id = /\bid=(\d+)\b/.exec(m[1])?.[1];
      if (!id) return null;
      const updated = Number(/\bupdated=(\d+)\b/.exec(m[1])?.[1] || 0);
      return { id, updated };
    }
    return null;
  }

  static stripTaskMetaLine(script) {
    const lines = String(script ?? '').split('\n');
    for (let i = 0; i < Math.min(3, lines.length); i++) {
      if (TaskManager.taskMetaLineRe.test(lines[i])) {
        return [...lines.slice(0, i), ...lines.slice(i + 1)].join('\n');
      }
    }
    return String(script ?? '');
  }

  static withTaskMeta(script, id, updated) {
    const effective = TaskManager.stripTaskMetaLine(script);
    const comment = process.platform === 'win32' ? 'rem' : '#';
    const line = `${comment} kisama-task: id=${id} updated=${updated}`;
    const lines = effective.split('\n');
    lines.splice(lines[0]?.startsWith('#!') ? 1 : 0, 0, line);
    return lines.join('\n');
  }

  static normalizeOnetimeTasks(incoming, stored) {
    const now = Date.now();
    const parsed = (list) => (list || []).map(raw => ({
      raw: String(raw ?? ''),
      meta: TaskManager.parseTaskMeta(raw),
      eff: TaskManager.stripTaskMetaLine(raw).trim()
    }));
    const storedParsed = parsed(stored);
    const consumed = new Set();
    const out = [];
    for (const { raw, meta, eff } of parsed(incoming)) {
      let hit = -1;
      if (meta) {
        hit = storedParsed.findIndex((sp, i) => !consumed.has(i) && sp.meta && sp.meta.id === meta.id);
      }
      if (hit < 0) {
        hit = storedParsed.findIndex((sp, i) => !consumed.has(i) && sp.eff === eff && (!meta || !sp.meta));
      }
      if (hit < 0) {
        // 全新任务: 赋 id=now (入参行被剥掉, 面板暂授的 id 以响应回显为准)
        out.push(TaskManager.withTaskMeta(eff, String(now), now));
        continue;
      }
      const sp = storedParsed[hit];
      consumed.add(hit);
      if (sp.eff === eff) {
        // 内容未变: 幂等保留原 id/updated; 存量无行 (旧版遗留) 则采纳入参 id
        if (sp.meta) {
          out.push(TaskManager.withTaskMeta(sp.raw, sp.meta.id, sp.meta.updated));
        } else {
          out.push(TaskManager.withTaskMeta(sp.raw, meta ? meta.id : String(now), meta && meta.updated ? meta.updated : now));
        }
        continue;
      }
      // 内容变化: 保留身份 (存量 id 优先, 存量无行采纳入参 id), 刷新修改时间
      const keepId = sp.meta ? sp.meta.id : (meta ? meta.id : String(now));
      out.push(TaskManager.withTaskMeta(eff, keepId, now));
    }
    return out;
  }

  static normalizeCronTasks(incoming, stored) {
    const now = Date.now();
    const parseEntry = ([expr, raw]) => ({
      expr: String(expr),
      raw: String(raw ?? ''),
      meta: TaskManager.parseTaskMeta(raw),
      eff: TaskManager.stripTaskMetaLine(raw).trim()
    });
    const storedParsed = Object.entries(stored || {}).map(parseEntry);
    const consumed = new Set();
    const out = {};
    for (const { expr, raw, meta, eff } of Object.entries(incoming || {}).map(parseEntry)) {
      let hit = -1;
      if (meta) {
        hit = storedParsed.findIndex((sp, i) => !consumed.has(i) && sp.meta && sp.meta.id === meta.id);
      }
      if (hit < 0) {
        hit = storedParsed.findIndex((sp, i) => !consumed.has(i) && sp.expr === expr && sp.eff === eff && (!meta || !sp.meta));
      }
      if (hit < 0) {
        out[expr] = TaskManager.withTaskMeta(eff, String(now), now);
        continue;
      }
      const sp = storedParsed[hit];
      consumed.add(hit);
      if (sp.eff === eff && sp.expr === expr) {
        if (sp.meta) {
          out[expr] = TaskManager.withTaskMeta(sp.raw, sp.meta.id, sp.meta.updated);
        } else {
          out[expr] = TaskManager.withTaskMeta(sp.raw, meta ? meta.id : String(now), meta && meta.updated ? meta.updated : now);
        }
        continue;
      }
      const keepId = sp.meta ? sp.meta.id : (meta ? meta.id : String(now));
      out[expr] = TaskManager.withTaskMeta(eff, keepId, now);
    }
    return out;
  }

  static async setOnetimeTasks(tasks) {
    // 🪪 0.6.2: 身份感知规范化盖章 (空表=清空, 不经规范化)
    Config.onetasks = tasks && tasks.length > 0 ? TaskManager.normalizeOnetimeTasks(tasks, Config.onetasks) : [];

    const executed = [];
    // 💾 单次执行语义 (0.5.7, docs/API.MD 十三): InitTask 已消费 (boot 恢复执行过
    // 或本生命周期已执行过) 则只更新列表+落盘, 不再自动触发; 空列表不消费标记
    if (Config.InitTask && Config.onetasks.length > 0) {
      for (let i = 0; i < Config.onetasks.length; i++) {
        const cmd = Config.onetasks[i];
        const result = await CommandExecutor.execute(cmd);
        const entry = this._formatLogEntry(cmd, result.result, result.exitcode, 'onetime');
        this._appendLog(Config.onetimetasks_log, entry);
        executed.push({
          index: i,
          cmd,
          exitcode: result.exitcode,
          output: result.result,
          status: result.exitcode === 0 ? 'ok' : 'error'
        });
      }

      Config.InitTask = false;
    }

    return {
      status: 'ok',
      count: Config.onetasks.length,
      tasks: Config.onetasks,
      executed,
      persisted: TaskStore.save(Config.onetasks, Config.crontasks)
    };
  }

  static getCronTasks() {
    return {
      status: 'ok',
      count: Object.keys(Config.crontasks).length,
      tasks: Config.crontasks
    };
  }

  static setCronTasks(tasks) {
    this.cronJobs.forEach(job => {
      if (typeof job.stop === 'function') {
        job.stop();
      }
      if (typeof job.destroy === 'function') {
        job.destroy();
      }
    });
    this.cronJobs.clear();

    const invalid = [];
    for (const cronExpr of Object.keys(tasks || {})) {
      if (!cron.validate(cronExpr)) {
        invalid.push(cronExpr);
      }
    }

    if (invalid.length > 0) {
      return {
        status: 'error',
        message: `Invalid cron expressions: ${invalid.join(', ')}`,
        valid_count: Object.keys(tasks || {}).length - invalid.length
      };
    }

    // 🪪 0.6.2: 身份感知规范化盖章 (空表=清空停止, 不经规范化)
    Config.crontasks = tasks && Object.keys(tasks).length > 0 ? TaskManager.normalizeCronTasks(tasks, Config.crontasks) : {};

    for (const [cronExpr, cmd] of Object.entries(Config.crontasks)) {
      const job = cron.schedule(cronExpr, async () => {
        const result = await CommandExecutor.execute(cmd);
        const entry = this._formatLogEntry(cmd, result.result, result.exitcode, 'cron', cronExpr);
        this._appendLog(Config.crontasks_log, entry);
      });
      this.cronJobs.set(cronExpr, job);
    }

    Config.cronloop = Object.keys(Config.crontasks).length > 0;

    return {
      status: 'ok',
      count: Object.keys(Config.crontasks).length,
      tasks: Config.crontasks,
      persisted: TaskStore.save(Config.onetasks, Config.crontasks)
    };
  }

  static getTaskStatus() {
    return {
      onetime: {
        pending: Config.InitTask,
        count: Config.onetasks.length
      },
      cron: {
        active: Config.cronloop,
        count: Object.keys(Config.crontasks).length,
        check_interval: Config.CRON_CHECK_INTERVAL
      },
      persistence: {
        enabled: TaskStore.state.enabled,
        store_path: TaskStore.state.path,
        last_saved_at: TaskStore.state.lastSavedAt
      }
    };
  }

  static getOnetimeLogs(limit = 50) {
    const logs = Config.onetimetasks_log.slice(-limit);
    return {
      status: 'ok',
      count: logs.length,
      logs
    };
  }

  static getCronLogs(limit = 50) {
    const logs = Config.crontasks_log.slice(-limit);
    return {
      status: 'ok',
      count: logs.length,
      logs
    };
  }

  static clearOnetimeLogs() {
    const cleared = Config.onetimetasks_log.length;
    Config.onetimetasks_log = [];
    return { status: 'ok', cleared: 'onetime' };
  }

  static clearCronLogs() {
    const cleared = Config.crontasks_log.length;
    Config.crontasks_log = [];
    return { status: 'ok', cleared: 'cron' };
  }

  static getLogSummary() {
    const onetimeSuccess = Config.onetimetasks_log.filter(log => log.exitcode === 0).length;
    const onetimeFailed = Config.onetimetasks_log.length - onetimeSuccess;

    const cronSuccess = Config.crontasks_log.filter(log => log.exitcode === 0).length;
    const cronFailed = Config.crontasks_log.length - cronSuccess;

    return {
      onetime: {
        total_logged: Config.onetimetasks_log.length,
        max_capacity: Config.MAX_TASK_LOG_SIZE,
        recent_success: onetimeSuccess,
        recent_failed: onetimeFailed
      },
      cron: {
        total_logged: Config.crontasks_log.length,
        max_capacity: Config.MAX_TASK_LOG_SIZE,
        recent_success: cronSuccess,
        recent_failed: cronFailed
      }
    };
  }

  static async executeOnetimeTasks() {
    const executed = [];
    for (let i = 0; i < Config.onetasks.length; i++) {
      const cmd = Config.onetasks[i];
      const result = await CommandExecutor.execute(cmd);
      const entry = this._formatLogEntry(cmd, result.result, result.exitcode, 'onetime');
      this._appendLog(Config.onetimetasks_log, entry);
      executed.push({
        cmd,
        exitcode: result.exitcode,
        output: result.result,
        timeout: result.timeout
      });
    }

    Config.InitTask = false;

    return {
      status: 'ok',
      executed: executed.length,
      results: executed
    };
  }

  // 💾 持久化恢复 (0.5.7, docs/API.MD 十三): main 中 listen 之前调用, 离线自治。
  // - 恢复定时任务: 复用 setCronTasks 重建 node-cron 调度 (内容原样回写存储, 无副作用)
  // - 恢复启动任务: 后台执行一次 (不阻塞 HTTP 就绪), 完成后置 InitTask=false,
  //   远端再 POST /api/task/onetime 不会二次触发 (单次执行语义)
  static restoreFromStore() {
    TaskStore.init();
    const restored = TaskStore.load();
    if (restored.onetasks.length > 0) {
      Config.onetasks = restored.onetasks;
    }
    if (Object.keys(restored.crontasks).length > 0) {
      try {
        TaskManager.setCronTasks(restored.crontasks);
      } catch (e) {
        Logger.error(`[TaskStore] ❌ 定时任务恢复异常 (不影响服务): ${e.message}`);
      }
    }
    if (Config.onetasks.length > 0 && Config.InitTask) {
      TaskManager.executeOnetimeTasks().catch(e =>
        Logger.error(`[TaskStore] ❌ 启动任务恢复执行异常 (不影响服务): ${e.message}`));
    }
  }
}

// ============================================================================
// 🚀 Cloudflare Quick Tunnel 协议实现 (内联自 cftunnel-product.js, 纯标准库)
// ============================================================================
const QUICK_SERVICE = 'https://api.trycloudflare.com';
// edge 入口可用 KISAMA_EDGE_HOSTS 覆盖 (逗号分隔); 守护自愈测试借此模拟"连续连不上 edge"
const EDGE_HOSTS = (() => {
  const custom = String(process.env.KISAMA_EDGE_HOSTS || '').split(',').map((h) => h.trim()).filter(Boolean);
  return custom.length > 0 ? custom : ['region1.v2.argotunnel.com', 'region2.v2.argotunnel.com'];
})();
const EDGE_PORT = 7844;
const CONTROL_HEADER = 'cf-cloudflared-proxy-connection-upgrade';
const CONTROL_STREAM = 'control-stream';
const MAX_FRAME_SIZE = 16384;

const STATIC_TABLE = [
    [':authority', ''], [':method', 'GET'], [':method', 'POST'],
    [':path', '/'], [':path', '/index.html'], [':scheme', 'http'],
    [':scheme', 'https'], [':status', '200'], [':status', '204'],
    [':status', '206'], [':status', '304'], [':status', '400'],
    [':status', '404'], [':status', '500'], ['accept-charset', ''],
    ['accept-encoding', 'gzip, deflate'], ['accept-language', ''],
    ['accept-ranges', ''], ['accept', ''], ['access-control-allow-origin', ''],
    ['age', ''], ['allow', ''], ['authorization', ''], ['cache-control', ''],
    ['content-disposition', ''], ['content-encoding', ''],
    ['content-language', ''], ['content-length', ''], ['content-location', ''],
    ['content-range', ''], ['content-type', ''], ['cookie', ''],
    ['date', ''], ['etag', ''], ['expect', ''], ['expires', ''],
    ['from', ''], ['host', ''], ['if-match', ''], ['if-modified-since', ''],
    ['if-none-match', ''], ['if-range', ''], ['if-unmodified-since', ''],
    ['last-modified', ''], ['link', ''], ['location', ''], ['max-forwards', ''],
    ['proxy-authenticate', ''], ['proxy-authorization', ''], ['range', ''],
    ['referer', ''], ['refresh', ''], ['retry-after', ''], ['server', ''],
    ['set-cookie', ''], ['strict-transport-security', ''], ['transfer-encoding', ''],
    ['user-agent', ''], ['vary', ''], ['via', ''], ['www-authenticate', ''],
];

const HUFFMAN_CODES = [8184,8388568,268435426,268435427,268435428,268435429,268435430,268435431,268435432,16777194,1073741820,268435433,268435434,1073741821,268435435,268435436,268435437,268435438,268435439,268435440,268435441,268435442,1073741822,268435443,268435444,268435445,268435446,268435447,268435448,268435449,268435450,268435451,20,1016,1017,4090,8185,21,248,2042,1018,1019,249,2043,250,22,23,24,0,1,2,25,26,27,28,29,30,31,92,251,32764,32,4091,1020,8186,33,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,252,115,253,8187,524272,8188,16380,34,32765,3,35,4,36,5,37,38,39,6,116,117,40,41,42,7,43,118,44,8,9,45,119,120,121,122,123,32766,2044,16381,8189,268435452,1048550,4194258,1048551,1048552,4194259,4194260,4194261,8388569,4194262,8388570,8388571,8388572,8388573,8388574,16777195,8388575,16777196,16777197,4194263,8388576,16777198,8388577,8388578,8388579,8388580,2097116,4194264,8388581,4194265,8388582,8388583,16777199,4194266,2097117,1048553,4194267,4194268,8388584,8388585,2097118,8388586,4194269,4194270,16777200,2097119,4194271,8388587,8388588,2097120,2097121,4194272,2097122,8388589,4194273,8388590,8388591,1048554,4194274,4194275,4194276,8388592,4194277,4194278,8388593,67108832,67108833,1048555,524273,4194279,8388594,4194280,33554412,67108834,67108835,67108836,134217694,134217695,67108837,16777201,33554413,524274,2097123,67108838,134217696,134217697,67108839,134217698,16777202,2097124,2097125,67108840,67108841,268435453,134217699,134217700,134217701,1048556,16777203,1048557,2097126,4194281,2097127,2097128,8388595,4194282,4194283,33554414,33554415,16777204,16777205,67108842,8388596,67108843,134217702,67108844,67108845,134217703,134217704,134217705,134217706,134217707,268435454,134217708,134217709,134217710,134217711,134217712,67108846,1073741823];

const HUFFMAN_LENGTHS = [13,23,28,28,28,28,28,28,28,24,30,28,28,30,28,28,28,28,28,28,28,28,30,28,28,28,28,28,28,28,28,28,6,10,10,12,13,6,8,11,10,10,8,11,8,6,6,6,5,5,5,6,6,6,6,6,6,6,7,8,15,6,12,10,13,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,7,8,13,19,13,14,6,15,5,6,5,6,5,6,6,6,5,7,7,6,6,6,5,6,7,6,5,5,6,7,7,7,7,7,15,11,14,13,28,20,22,20,20,22,22,22,23,22,23,23,23,23,23,24,23,24,24,22,23,24,23,23,23,23,21,22,23,22,23,23,24,22,21,20,22,22,23,23,21,23,22,22,24,21,22,23,23,21,21,22,21,23,22,23,23,20,22,22,22,23,22,22,23,26,26,20,19,22,23,22,25,26,26,26,27,27,26,24,25,19,21,26,27,27,26,27,24,21,21,26,26,28,27,27,27,20,24,20,21,22,21,21,23,22,22,25,25,24,24,26,23,26,27,26,26,27,27,27,27,27,28,27,27,27,27,27,26,30];

function huffmanTree() {
    const root = [null, null, -1, 0];
    for (let symbol = 0; symbol < HUFFMAN_CODES.length; symbol++) {
        const code = HUFFMAN_CODES[symbol];
        const length = HUFFMAN_LENGTHS[symbol];
        let node = root;
        for (let shift = length - 1; shift >= 0; shift--) {
            const bit = (code >> shift) & 1;
            if (node[bit] === null) {
                node[bit] = [null, null, -1, node[3] + 1];
            }
            node = node[bit];
        }
        node[2] = symbol;
    }
    return root;
}

const HUFFMAN_TREE = huffmanTree();

function decodeHuffman(data) {
    const out = [];
    let node = HUFFMAN_TREE;
    let pendingBits = 0;
    let pendingLength = 0;
    for (const byte of data) {
        for (let shift = 7; shift >= 0; shift--) {
            const bit = (byte >> shift) & 1;
            pendingBits = (pendingBits << 1) | bit;
            pendingLength += 1;
            node = node[bit];
            if (node === null) {
                throw new Error('invalid HPACK Huffman string');
            }
            if (node[2] >= 0) {
                if (node[2] === 256) {
                    throw new Error('HPACK Huffman EOS inside string');
                }
                out.push(node[2]);
                node = HUFFMAN_TREE;
                pendingBits = 0;
                pendingLength = 0;
            }
        }
    }
    if (pendingLength > 7 || pendingBits !== (1 << pendingLength) - 1) {
        throw new Error('invalid HPACK Huffman padding');
    }
    return Buffer.from(out);
}

function readInteger(data, pos, prefixBits) {
    if (pos >= data.length) {
        throw new Error('truncated HPACK integer');
    }
    const first = data[pos];
    pos += 1;
    const mask = (1 << prefixBits) - 1;
    let value = first & mask;
    if (value < mask) {
        return [value, pos];
    }
    let shift = 0;
    while (true) {
        if (pos >= data.length) {
            throw new Error('truncated HPACK integer');
        }
        const byte = data[pos];
        pos += 1;
        value += (byte & 127) * Math.pow(2, shift);
        if ((byte & 128) === 0) {
            return [value, pos];
        }
        shift += 7;
        if (shift > 28) {
            throw new Error('HPACK integer too large');
        }
    }
}

function readString(data, pos) {
    if (pos >= data.length) {
        throw new Error('truncated HPACK string');
    }
    const huffman = Boolean(data[pos] & 128);
    const [length, newPos] = readInteger(data, pos, 7);
    const end = newPos + length;
    if (end > data.length) {
        throw new Error('truncated HPACK string data');
    }
    const value = data.subarray(newPos, end);
    return [huffman ? decodeHuffman(value) : value, end];
}

class HpackDecoder {
    constructor() {
        this.dynamic = [];
        this.dynamicSize = 0;
        this.maxSize = 4096;
    }

    tableEntry(index) {
        if (index <= 0) {
            throw new Error('invalid HPACK index');
        }
        if (index <= STATIC_TABLE.length) {
            return STATIC_TABLE[index - 1];
        }
        const dynamicIndex = index - STATIC_TABLE.length - 1;
        if (dynamicIndex < 0 || dynamicIndex >= this.dynamic.length) {
            throw new Error('HPACK dynamic index out of range');
        }
        return this.dynamic[dynamicIndex];
    }

    add(name, value) {
        const size = 32 + Buffer.byteLength(name, 'utf8') + Buffer.byteLength(value, 'utf8');
        if (size > this.maxSize) {
            this.dynamic = [];
            this.dynamicSize = 0;
            return;
        }
        while (this.dynamic.length > 0 && this.dynamicSize + size > this.maxSize) {
            const [oldName, oldValue] = this.dynamic.pop();
            this.dynamicSize -= 32 + Buffer.byteLength(oldName, 'utf8') + Buffer.byteLength(oldValue, 'utf8');
        }
        this.dynamic.unshift([name, value]);
        this.dynamicSize += size;
    }

    decode(data) {
        const result = [];
        let pos = 0;
        while (pos < data.length) {
            const first = data[pos];
            if (first & 128) {
                let index;
                [index, pos] = readInteger(data, pos, 7);
                result.push(this.tableEntry(index));
                continue;
            }
            if (first & 64) {
                let index, name;
                [index, pos] = readInteger(data, pos, 6);
                if (index) {
                    name = this.tableEntry(index)[0];
                } else {
                    let nameBytes;
                    [nameBytes, pos] = readString(data, pos);
                    name = nameBytes.toString('utf8').toLowerCase();
                }
                let valueBytes;
                [valueBytes, pos] = readString(data, pos);
                const value = valueBytes.toString('utf8');
                this.add(name, value);
                result.push([name, value]);
                continue;
            }
            if (first & 32) {
                let size;
                [size, pos] = readInteger(data, pos, 5);
                if (size > 4096) {
                    throw new Error('HPACK table size exceeds limit');
                }
                this.maxSize = size;
                while (this.dynamic.length > 0 && this.dynamicSize > size) {
                    const [oldName, oldValue] = this.dynamic.pop();
                    this.dynamicSize -= 32 + Buffer.byteLength(oldName, 'utf8') + Buffer.byteLength(oldValue, 'utf8');
                }
                continue;
            }
            let index, name;
            [index, pos] = readInteger(data, pos, 4);
            if (index) {
                name = this.tableEntry(index)[0];
            } else {
                let nameBytes;
                [nameBytes, pos] = readString(data, pos);
                name = nameBytes.toString('utf8').toLowerCase();
            }
            let valueBytes;
            [valueBytes, pos] = readString(data, pos);
            result.push([name, valueBytes.toString('utf8')]);
        }
        return result;
    }
}

function encodeInteger(value, prefixBits, prefix) {
    const limit = (1 << prefixBits) - 1;
    if (value < limit) {
        return Buffer.from([prefix | value]);
    }
    const out = [prefix | limit];
    value -= limit;
    while (value >= 128) {
        out.push((value & 127) | 128);
        value = Math.floor(value / 128);
    }
    out.push(value);
    return Buffer.from(out);
}

function encodeString(value) {
    const raw = Buffer.from(value, 'utf8');
    return Buffer.concat([encodeInteger(raw.length, 7, 0), raw]);
}

function encodeHeaders(headers) {
    const out = [];
    for (const [name, value] of headers) {
        if (name === ':status' && value === '200') {
            out.push(0x88);
        } else if (name === ':status' && value === '204') {
            out.push(0x89);
        } else if (name === ':status' && value === '206') {
            out.push(0x8A);
        } else if (name === ':status' && value === '304') {
            out.push(0x8B);
        } else if (name === ':status' && value === '400') {
            out.push(0x8C);
        } else if (name === ':status' && value === '404') {
            out.push(0x8D);
        } else if (name === ':status' && value === '500') {
            out.push(0x8E);
        } else {
            out.push(...encodeInteger(0, 4, 0));
            out.push(...encodeString(name));
            out.push(...encodeString(value));
        }
    }
    return Buffer.from(out);
}

class CapnpBuilder {
    constructor() {
        this.words = [];
    }

    alloc(count) {
        const offset = this.words.length;
        for (let i = 0; i < count; i++) {
            this.words.push(0n);
        }
        return offset;
    }

    structPtr(ptrWord, targetWord, dataWords, pointerWords) {
        const offset = targetWord - ptrWord - 1;
        const low = (BigInt(offset) << 2n) & 0xFFFFFFFCn;
        const high = BigInt(dataWords & 0xFFFF) | (BigInt(pointerWords & 0xFFFF) << 16n);
        this.words[ptrWord] = low | (high << 32n);
    }

    setU8(word, byte, value) {
        const mask = 0xFFn << BigInt(byte * 8);
        this.words[word] = (this.words[word] & ~mask) | (BigInt(value & 0xFF) << BigInt(byte * 8));
    }

    setU16(word, byte, value) {
        const mask = 0xFFFFn << BigInt(byte * 8);
        this.words[word] = (this.words[word] & ~mask) | (BigInt(value & 0xFFFF) << BigInt(byte * 8));
    }

    setU32(word, byte, value) {
        const mask = 0xFFFFFFFFn << BigInt(byte * 8);
        this.words[word] = (this.words[word] & ~mask) | (BigInt(value & 0xFFFFFFFF) << BigInt(byte * 8));
    }

    setU64(word, value) {
        this.words[word] = BigInt(value) & 0xFFFFFFFFFFFFFFFFn;
    }

    writeBytes(ptrWord, value, text = false) {
        const raw = typeof value === 'string' ? Buffer.from(value, 'utf8') : value;
        const count = raw.length + (text ? 1 : 0);
        const content = this.alloc(Math.ceil(count / 8));
        for (let i = 0; i < raw.length; i++) {
            this.setU8(content + Math.floor(i / 8), i % 8, raw[i]);
        }
        const offset = content - ptrWord - 1;
        const low = ((BigInt(offset) << 2n) | 1n) & 0xFFFFFFFFn;
        const high = 2n | (BigInt(count & 0x1FFFFFFF) << 3n);
        this.words[ptrWord] = low | (high << 32n);
    }

    writeTextList(ptrWord, values) {
        if (!values.length) {
            this.words[ptrWord] = 0n;
            return;
        }
        const items = this.alloc(values.length);
        const offset = items - ptrWord - 1;
        this.words[ptrWord] = (((BigInt(offset) << 2n) | 1n) & 0xFFFFFFFFn) | ((6n | (BigInt(values.length) << 3n)) << 32n);
        for (let i = 0; i < values.length; i++) {
            this.writeBytes(items + i, values[i], true);
        }
    }

    // Composite struct list (list type 7): the list pointer's offset field holds the element
    // count and its size fields hold the per-element data/pointer word counts; the tag word
    // at the target repeats count and element sizes for the reader.
    writeStructList(ptrWord, count, dataWords, pointerWords, fill) {
        const tag = this.alloc(1);
        const stride = dataWords + pointerWords;
        const items = this.alloc(count * stride);
        const offset = tag - ptrWord - 1;
        this.words[ptrWord] = (((BigInt(offset) << 2n) | 1n) & 0xFFFFFFFFn) | ((((BigInt(count) * BigInt(stride)) << 3n) | 7n) << 32n);
        this.words[tag] = (BigInt(count) << 2n) | (BigInt(dataWords) << 32n) | (BigInt(pointerWords) << 48n);
        for (let i = 0; i < count; i++) {
            fill(i, items + i * stride);
        }
    }

    finish() {
        const header = Buffer.alloc(8);
        header.writeUInt32LE(0, 0);
        header.writeUInt32LE(this.words.length, 4);
        const body = Buffer.alloc(this.words.length * 8);
        for (let i = 0; i < this.words.length; i++) {
            body.writeBigUInt64LE(this.words[i] & 0xFFFFFFFFFFFFFFFFn, i * 8);
        }
        return Buffer.concat([header, body]);
    }
}

function capnpBootstrap(questionId) {
    const msg = new CapnpBuilder();
    const root = msg.alloc(1), msgData = msg.alloc(1), msgPtr = msg.alloc(1);
    msg.structPtr(root, msgData, 1, 1);
    msg.setU16(msgData, 0, 8);
    const bootstrapData = msg.alloc(1);
    msg.alloc(1);
    msg.structPtr(msgPtr, bootstrapData, 1, 1);
    msg.setU32(bootstrapData, 0, questionId);
    return msg.finish();
}

function capnpRegister(questionId, bootstrapQuestionId, accountTag, tunnelSecret, tunnelId, connIndex) {
    const msg = new CapnpBuilder();
    const root = msg.alloc(1), msgData = msg.alloc(1), msgPtr = msg.alloc(1);
    msg.structPtr(root, msgData, 1, 1);
    msg.setU16(msgData, 0, 2);
    const callData0 = msg.alloc(1), callData1 = msg.alloc(1);
    msg.alloc(1);
    const callPtr0 = msg.alloc(1), callPtr1 = msg.alloc(1);
    msg.alloc(1);
    msg.structPtr(msgPtr, callData0, 3, 3);
    msg.setU32(callData0, 0, questionId);
    msg.setU64(callData1, 0xF71695EC7FE85497n);
    const mtData = msg.alloc(1), mtPtr = msg.alloc(1);
    msg.structPtr(callPtr0, mtData, 1, 1);
    msg.setU16(mtData, 4, 1);
    const paData = msg.alloc(1);
    msg.alloc(1);
    msg.structPtr(mtPtr, paData, 1, 1);
    msg.setU32(paData, 0, bootstrapQuestionId);
    const payloadPtr0 = msg.alloc(1);
    msg.alloc(1);
    msg.structPtr(callPtr1, payloadPtr0, 0, 2);
    const paramsData = msg.alloc(1), paramsPtr0 = msg.alloc(1), paramsPtr1 = msg.alloc(1), paramsPtr2 = msg.alloc(1);
    msg.structPtr(payloadPtr0, paramsData, 1, 3);
    msg.setU8(paramsData, 0, connIndex);
    const authPtr0 = msg.alloc(1), authPtr1 = msg.alloc(1);
    msg.structPtr(paramsPtr0, authPtr0, 0, 2);
    msg.writeBytes(authPtr0, accountTag, true);
    msg.writeBytes(authPtr1, tunnelSecret);
    msg.writeBytes(paramsPtr1, tunnelId);
    const optData = msg.alloc(1), optPtr0 = msg.alloc(1);
    msg.alloc(1);
    msg.structPtr(paramsPtr2, optData, 1, 2);
    const clientPtr0 = msg.alloc(1), clientPtr1 = msg.alloc(1), clientPtr2 = msg.alloc(1), clientPtr3 = msg.alloc(1);
    msg.structPtr(optPtr0, clientPtr0, 0, 4);
    const clientId = crypto.randomBytes(16);
    clientId[6] = (clientId[6] & 0x0F) | 0x40;
    clientId[8] = (clientId[8] & 0x3F) | 0x80;
    msg.writeBytes(clientPtr0, clientId);
    msg.writeTextList(clientPtr1, ['serialized_headers', 'allow_remote_config']);
    msg.writeBytes(clientPtr2, '2024.10.0-Nexus', true);
    msg.writeBytes(clientPtr3, 'Nexus-Python', true);
    return msg.finish();
}

function capnpMessages(buffer) {
    const messages = [];
    let pos = 0;
    while (buffer.length - pos >= 8) {
        const segmentsMinusOne = buffer.readUInt32LE(pos);
        const firstWords = buffer.readUInt32LE(pos + 4);
        const segments = segmentsMinusOne + 1;
        // 标准 Cap'n Proto 流分帧: 段表 = 4B 段数-1 + 4B*段数, 8 字节对齐 —
        // 单段消息表长 8B (曾误作 16B: 单段消息整体被多剥 8B, root 指针丢失导致
        // QUIC 边缘注册应答永远解析失败; 双段消息两种算法同为 16B, h2 路径未暴露)
        let headerWords = segments + 1;
        let headerSize = headerWords * 4;
        if (headerSize % 8) {
            headerSize += 4;
        }
        if (buffer.length - pos < headerSize) {
            break;
        }
        const counts = [firstWords];
        for (let i = 1; i < segments; i++) {
            counts.push(buffer.readUInt32LE(pos + 4 + i * 4));
        }
        const total = headerSize + counts.reduce((a, b) => a + b, 0) * 8;
        if (buffer.length - pos < total) {
            break;
        }
        if (segments !== 1) {
            throw new Error("multi-segment Cap'n Proto message is not supported");
        }
        messages.push(buffer.subarray(pos + headerSize, pos + total));
        pos += total;
    }
    return [messages, buffer.subarray(pos)];
}

function capnpStruct(words, pointerWord) {
    if (pointerWord >= words.length) {
        throw new Error("Cap'n Proto pointer out of bounds");
    }
    const pointer = words[pointerWord];
    if ((pointer & 3n) !== 0n) {
        throw new Error('expected Cap\'n Proto struct pointer');
    }
    let offset = (pointer >> 2n) & 0x3FFFFFFFn;
    if (offset & 0x20000000n) {
        offset -= 0x40000000n;
    }
    const target = pointerWord + 1 + Number(offset);
    const dataWords = Number((pointer >> 32n) & 0xFFFFn);
    const pointerWords = Number((pointer >> 48n) & 0xFFFFn);
    if (target < 0 || target + dataWords + pointerWords > words.length) {
        throw new Error("Cap'n Proto pointer out of bounds");
    }
    return [target, dataWords, pointerWords];
}

function capnpWords(data) {
    const words = [];
    for (let i = 0; i + 8 <= data.length; i += 8) {
        words.push(data.readBigUInt64LE(i));
    }
    return words;
}

// Struct lists are composite lists: list type 7 with the element *word* count in the
// list pointer, and a tag word whose offset field carries the element count while its
// size fields carry the per-element data and pointer word counts.
function capnpStructList(words, pointerWord) {
    if (pointerWord >= words.length) {
        return null;
    }
    const pointer = words[pointerWord];
    if ((pointer & 3n) !== 1n || ((pointer >> 32n) & 7n) !== 7n) {
        return null;
    }
    let offset = (pointer >> 2n) & 0x3FFFFFFFn;
    if (offset & 0x20000000n) {
        offset -= 0x40000000n;
    }
    const target = pointerWord + 1 + Number(offset);
    const elementWords = Number(pointer >> 35n);
    if (target < 0 || target >= words.length) {
        return null;
    }
    const tag = words[target];
    if ((tag & 3n) !== 0n) {
        return null;
    }
    const dataWords = Number((tag >> 32n) & 0xFFFFn);
    const pointerWords = Number((tag >> 48n) & 0xFFFFn);
    const count = Number((tag >> 2n) & 0x3FFFFFFFn);
    const stride = dataWords + pointerWords;
    if (pointerWords < 2 || stride === 0 || stride * count !== elementWords) {
        return null;
    }
    if (target + 1 + stride * count > words.length) {
        return null;
    }
    const elements = [];
    for (let i = 0; i < count; i++) {
        const base = target + 1 + i * stride;
        elements.push([capnpText(words, base + dataWords), capnpText(words, base + dataWords + 1)]);
    }
    return elements;
}

function capnpText(words, pointerWord) {
    if (pointerWord >= words.length) {
        return '';
    }
    const pointer = words[pointerWord];
    if ((pointer & 3n) !== 1n) {
        return '';
    }
    let offset = (pointer >> 2n) & 0x3FFFFFFFn;
    if (offset & 0x20000000n) {
        offset -= 0x40000000n;
    }
    const target = pointerWord + 1 + Number(offset);
    const elementSize = Number((pointer >> 32n) & 7n);
    const count = Number(pointer >> 35n);
    const wordCount = Math.ceil(count / 8);
    if (elementSize !== 2 || target < 0 || target + wordCount > words.length) {
        return '';
    }
    const raw = Buffer.alloc(wordCount * 8);
    for (let i = 0; i < wordCount; i++) {
        raw.writeBigUInt64LE(words[target + i] & 0xFFFFFFFFFFFFFFFFn, i * 8);
    }
    return raw.subarray(0, count).toString('utf8').replace(/\0+$/, '');
}

function capnpReturnResult(data) {
    if (data.length % 8 || data.length < 16) {
        throw new Error('short Cap\'n Proto return');
    }
    const words = capnpWords(data);
    let msgTarget, msgData, msgPtrs;
    [msgTarget, msgData, msgPtrs] = capnpStruct(words, 0);
    if (msgData < 1 || (words[msgTarget] & 0xFFFFn) !== 3n) {
        throw new Error('not an RPC return message');
    }
    // 标准 capnp RPC (RFC 参考实现 tunnelrpc): Message{union: return@3} →
    // Return{answerId:u32 @data0, releaseParamCaps:bool @data0.b4, union tag @data0.b6-7, ptr0}
    const [retTarget, retData, retPtrs] = capnpStruct(words, msgTarget + msgData);
    const which = Number((words[retTarget] >> 48n) & 0xFFFFn);
    if (which === 4) {
        // exception@6: Exception{reason@0:Text, ...}
        const [excTarget, excData] = capnpStruct(words, retTarget + retData);
        return { ok: false, error: capnpText(words, excTarget + excData) || 'unknown error' };
    }
    if (which !== 0) {
        return { ok: false, error: 'RPC return union ' + which };
    }
    // results@0: Payload{content@ptr0, capTable@ptr1}
    const [payloadTarget, payloadData, payloadPtrs] = capnpStruct(words, retTarget + retData);
    if (!payloadPtrs) {
        return { ok: false, error: 'empty RPC payload' };
    }
    const contentPtr = words[payloadTarget + payloadData];
    if ((contentPtr & 3n) === 3n) {
        // bootstrap 应答: content = CapDescriptor (capability 指针), 非注册结果
        return { ok: false, bootstrap: true };
    }
    let node, nodeData, nodePtrs;
    [node, nodeData, nodePtrs] = capnpStruct(words, payloadTarget + payloadData);
    // 边缘实机取证 (2026-10-31, QUIC 注册应答): content 外多一层信封 (data=0, ptrs=1),
    // ConnectionResponse 在其 ptr0 — 信封存在时剥一层; h2 应答无信封 (data>=1) 不受影响
    if (nodeData === 0 && nodePtrs === 1) {
        [node, nodeData, nodePtrs] = capnpStruct(words, node + nodeData);
    }
    // ConnectionResponse{result:union{error@0:ConnectionError, connectionDetails@1:ConnectionDetails}}
    const unionTag = nodeData > 0 ? Number(words[node] & 0xFFFFn) : 0;
    if (unionTag === 1) {
        // ConnectionDetails{uuid@0:Data, locationName@1:Text, tunnelIsRemotelyManaged@2:Bool}
        const [detTarget, detData] = capnpStruct(words, node + nodeData);
        const location = capnpText(words, detTarget + detData + 1);
        return { ok: true, location: location };
    }
    const cause = capnpText(words, node + nodeData);
    return { ok: false, error: cause || 'unknown error' };
}

// QUIC 数据流的 ConnectRequest: 前导之后的首个 capnp 消息, dest 携带完整请求 URL,
// type 区分 http(0)/websocket(1)/tcp(2), metadata 以 (Key, Value) 文本对携带请求头。
function capnpConnectRequest(data) {
    const words = capnpWords(data);
    if (!words.length) {
        throw new Error('empty Cap\'n Proto ConnectRequest');
    }
    let target, dataWords, pointerWords;
    [target, dataWords, pointerWords] = capnpStruct(words, 0);
    if (dataWords < 1 || pointerWords < 2) {
        throw new Error('unexpected ConnectRequest layout');
    }
    return {
        dest: capnpText(words, target + dataWords),
        type: Number(words[target] & 0xFFFFn),
        metadata: capnpStructList(words, target + dataWords + 1) || [],
    };
}

// ConnectResponse: errorText 非空表示该流被拒绝; metadata 携带 (HttpStatus, HttpHeader:name)
// 响应头, 之后同流继续写原始响应体 (websocket 类型随后进入裸字节双向转发)。
function capnpConnectResponse(errorText, metadata) {
    const msg = new CapnpBuilder();
    const root = msg.alloc(1);
    const body = msg.alloc(2);
    msg.structPtr(root, body, 0, 2);
    msg.writeBytes(body, errorText || '', true);
    msg.writeStructList(body + 1, metadata.length, 0, 2, (index, base) => {
        msg.writeBytes(base, metadata[index][0], true);
        msg.writeBytes(base + 1, metadata[index][1], true);
    });
    return msg.finish();
}

const MIME_TYPES = {
    '.js': 'text/javascript; charset=utf-8',
    '.mjs': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.map': 'application/json; charset=utf-8',
    '.wasm': 'application/wasm',
    '.html': 'text/html; charset=utf-8',
    '.htm': 'text/html; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.xml': 'application/xml',
    '.woff': 'font/woff2',
    '.woff2': 'font/woff2',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon',
};

function inferContentType(requestPath) {
    const base = requestPath.endsWith('/') ? requestPath.slice(0, -1) : requestPath;
    const dot = base.lastIndexOf('.');
    if (dot < 0) {
        return '';
    }
    return MIME_TYPES[base.slice(dot).toLowerCase()] || '';
}

function b64Secret(value) {
    if (Array.isArray(value)) {
        return Buffer.from(value);
    }
    if (typeof value !== 'string') {
        throw new Error('quick tunnel secret has an unexpected type');
    }
    return Buffer.from(value + '='.repeat((-value.length) % 4), 'base64');
}

const UUID_RE = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

function requestQuickTunnel(service) {
    return new Promise((resolve, reject) => {
        let parsed;
        try {
            parsed = new URL(service.replace(/\/+$/, '') + '/tunnel');
        } catch (err) {
            reject(new Error('requesting quick tunnel failed: ' + err.message));
            return;
        }
        const mod = parsed.protocol === 'https:' ? https : http;
        const req = mod.request(parsed, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'User-Agent': 'cftunnel.js/1.0' },
            timeout: 15000,
        }, (res) => {
            const chunks = [];
            res.on('data', (chunk) => chunks.push(chunk));
            res.on('error', reject);
            res.on('end', () => {
                const body = Buffer.concat(chunks);
                const status = res.statusCode;
                let data;
                try {
                    data = JSON.parse(body.toString('utf8'));
                } catch (err) {
                    reject(new Error('quick tunnel returned non-JSON (' + status + '): ' + body.subarray(0, 300).toString('utf8')));
                    return;
                }
                const result = data.result || {};
                if (!(data.success ?? true) || !result) {
                    reject(new Error('quick tunnel request was rejected: ' + JSON.stringify(data.errors)));
                    return;
                }
                try {
                    const idStr = String(result.id);
                    if (!UUID_RE.test(idStr)) {
                        throw new Error('bad tunnel id');
                    }
                    if (typeof result.account_tag !== 'string' || typeof result.hostname !== 'string') {
                        throw new Error('bad account tag or hostname');
                    }
                    const secret = b64Secret(result.secret);
                    const tunnelId = Buffer.from(idStr.replace(/-/g, ''), 'hex');
                    resolve([result.hostname, result.account_tag, secret, tunnelId]);
                } catch (err) {
                    reject(new Error('invalid quick tunnel response: ' + err.message));
                }
            });
        });
        req.on('error', (err) => reject(new Error('requesting quick tunnel failed: ' + err.message)));
        req.end();
    });
}

function serializeHeaders(headers) {
    return headers.map(([name, value]) =>
        Buffer.from(name, 'utf8').toString('base64').replace(/=+$/, '') +
        ':' +
        Buffer.from(value, 'utf8').toString('base64').replace(/=+$/, '')
    ).join(';');
}

class BufferedReader {
    constructor(socket) {
        this.socket = socket;
        this.buffer = Buffer.alloc(0);
        this.waiters = [];
        this.errored = null;
        this.closed = false;
        socket.on('data', (chunk) => {
            this.buffer = this.buffer.length ? Buffer.concat([this.buffer, chunk]) : chunk;
            this._drain();
        });
        socket.on('error', (err) => {
            this.errored = err;
            this._drain();
        });
        socket.on('end', () => {
            this.closed = true;
            this._drain();
        });
        socket.on('close', () => {
            this.closed = true;
            this._drain();
        });
    }

    _drain() {
        while (this.waiters.length > 0) {
            const waiter = this.waiters[0];
            if (this.buffer.length >= waiter.need) {
                this.waiters.shift();
                const chunk = this.buffer.subarray(0, waiter.need);
                this.buffer = this.buffer.subarray(waiter.need);
                waiter.resolve(chunk);
            } else if (this.errored !== null) {
                this.waiters.shift();
                waiter.reject(this.errored);
            } else if (this.closed) {
                this.waiters.shift();
                waiter.reject(new Error('connection closed'));
            } else {
                break;
            }
        }
    }

    readExact(count) {
        if (this.errored !== null) {
            return Promise.reject(this.errored);
        }
        if (this.buffer.length >= count) {
            const chunk = this.buffer.subarray(0, count);
            this.buffer = this.buffer.subarray(count);
            return Promise.resolve(chunk);
        }
        if (this.closed) {
            return Promise.reject(new Error('connection closed'));
        }
        return new Promise((resolve, reject) => {
            this.waiters.push({ need: count, resolve, reject });
            this._drain();
        });
    }
}

class H2Connection {
    constructor(sock, origin, accountTag, tunnelSecret, tunnelId, connIndex, logger, tunnelUrl = null, showTunnel = false, tunnelState = null) {
        this.sock = sock;
        this.reader = new BufferedReader(sock);
        this.origin = origin;
        this.accountTag = accountTag;
        this.tunnelSecret = tunnelSecret;
        this.tunnelId = tunnelId;
        this.connIndex = connIndex;
        this.log = logger;
        this.tunnelUrl = tunnelUrl;
        this.showTunnel = showTunnel;
        this.tunnelState = tunnelState || { printed: false };
        this.decoder = new HpackDecoder();
        this.connectionWindow = 65535;
        this.streamWindows = new Map();
        this.peerMaxFrame = MAX_FRAME_SIZE;
        this.streams = new Map();
        this.control = null;
        this.stopped = false;
        this.registered = false;
        this.registrationFailed = false;
        this.windowWaiters = [];
    }

    sendFrame(frameType, flags, streamId, payload = Buffer.alloc(0)) {
        if (payload.length > 0xFFFFFF) {
            throw new Error('HTTP/2 frame too large');
        }
        const header = Buffer.alloc(9);
        header.writeUIntBE(payload.length, 0, 3);
        header[3] = frameType;
        header[4] = flags;
        header.writeUInt32BE(streamId & 0x7FFFFFFF, 5);
        this.sock.write(Buffer.concat([header, payload]));
    }

    sendHeaders(streamId, headers, endStream = false) {
        const payload = encodeHeaders(headers);
        const flags = 4 | (endStream ? 1 : 0);
        this.sendFrame(1, flags, streamId, payload);
    }

    _waitWindow(streamId) {
        if (this.connectionWindow > 0 && (this.streamWindows.get(streamId) ?? 65535) > 0) {
            return Promise.resolve();
        }
        return new Promise((resolve) => {
            this.windowWaiters.push({ streamId, resolve });
        });
    }

    _notifyWindows() {
        const remaining = [];
        for (const waiter of this.windowWaiters) {
            const streamWindow = this.streamWindows.get(waiter.streamId) ?? 65535;
            if (this.connectionWindow > 0 && streamWindow > 0) {
                waiter.resolve();
            } else {
                remaining.push(waiter);
            }
        }
        this.windowWaiters = remaining;
    }

    _releaseWaiters() {
        for (const waiter of this.windowWaiters) {
            waiter.resolve();
        }
        this.windowWaiters = [];
    }

    async sendData(streamId, payload, endStream = false) {
        const len = payload.length;
        let offset = 0;
        do {
            await this._waitWindow(streamId);
            if (this.stopped) {
                return;
            }
            const streamWindow = this.streamWindows.get(streamId) ?? 65535;
            const amount = Math.min(len - offset, this.connectionWindow, streamWindow, this.peerMaxFrame);
            const flags = endStream && offset + amount >= len ? 1 : 0;
            const chunk = payload.subarray(offset, offset + amount);
            this.connectionWindow -= amount;
            this.streamWindows.set(streamId, streamWindow - amount);
            this.sendFrame(0, flags, streamId, chunk);
            offset += amount;
        } while (offset < len);
    }

    sendWindowUpdate(streamId, increment) {
        if (increment > 0) {
            const payload = Buffer.alloc(4);
            payload.writeUInt32BE(increment & 0x7FFFFFFF, 0);
            this.sendFrame(8, 0, streamId, payload);
        }
    }

    async readFrame() {
        const header = await this.reader.readExact(9);
        const length = header.readUIntBE(0, 3);
        const frameType = header[3];
        const flags = header[4];
        const streamId = header.readUInt32BE(5) & 0x7FFFFFFF;
        const payload = await this.reader.readExact(length);
        return [frameType, flags, streamId, payload];
    }

    async readHeaders(flags, streamId, payload) {
        if (flags & 8) {
            const padLength = payload[0];
            payload = payload.subarray(1);
            if (padLength > payload.length) {
                throw new Error('invalid HTTP/2 padding');
            }
            payload = padLength ? payload.subarray(0, payload.length - padLength) : payload;
        }
        if (flags & 32) {
            payload = payload.subarray(5);
        }
        const blocks = [payload];
        while (!(flags & 4)) {
            const frame = await this.readFrame();
            if (frame[0] !== 9 || frame[2] !== streamId) {
                throw new Error('expected CONTINUATION frame');
            }
            blocks.push(frame[3]);
            flags = frame[1];
        }
        return this.decoder.decode(Buffer.concat(blocks));
    }

    openControl(streamId) {
        if (this.control !== null) {
            return;
        }
        this.control = new ControlStream(this, streamId, this.log);
        this.sendHeaders(streamId, [[':status', '200']]);
        this.control.start(this.accountTag, this.tunnelSecret, this.tunnelId, this.connIndex);
    }

    updateConfig(streamId, body) {
        let version = 0;
        try {
            const data = JSON.parse(body.length ? body.toString('utf8') : '{}');
            const parsed = parseInt(data.version, 10);
            if (!Number.isNaN(parsed)) {
                version = parsed;
            }
        } catch (err) {
            // ignore
        }
        const response = Buffer.from(JSON.stringify({ latestAppliedVersion: version }));
        this.sendHeaders(streamId, [
            [':status', '200'],
            ['content-type', 'application/json'],
            ['content-length', String(response.length)],
        ]);
        this.sendData(streamId, response, true);
    }

    requestFinished(streamId, request) {
        if (request.upgrade === 'update-configuration') {
            this.updateConfig(streamId, Buffer.concat(request.body));
            return;
        }
        if (request.websocket) {
            return;
        }
        if (request.finished) {
            return;
        }
        request.finished = true;
        this.proxyRequest(streamId, request).catch(() => {});
    }

    async proxyRequest(streamId, request) {
        try {
            const response = await proxyToOrigin(
                this.origin,
                request.method,
                request.path,
                request.headers,
                Buffer.concat(request.body)
            );
            const userHeaders = [];
            const directHeaders = [];
            for (const [name, value] of response.headers) {
                const lower = name.toLowerCase();
                if (lower === 'content-length') {
                    directHeaders.push([lower, value]);
                }
                const internal = lower.startsWith('cf-int-') ||
                    lower.startsWith('cf-cloudflared-') ||
                    lower.startsWith('cf-proxy-') ||
                    lower.startsWith(':');
                if (!internal || lower === 'connection' || lower === 'upgrade' || lower === 'sec-websocket-accept') {
                    userHeaders.push([lower, value]);
                }
            }
            if (!userHeaders.some(([name]) => name === 'content-type')) {
                const inferred = inferContentType(request.path);
                if (inferred) {
                    userHeaders.push(['content-type', inferred]);
                }
            }
            const serialized = serializeHeaders(userHeaders);
            const status = response.status === 101 ? 200 : response.status;
            const outHeaders = [
                [':status', String(status)],
                ...directHeaders,
                ['cf-cloudflared-response-headers', serialized],
                ['cf-cloudflared-response-meta', '{"src":"origin","flow_rate_limited":false}'],
            ];
            this.sendHeaders(streamId, outHeaders);
            for await (const chunk of response.body) {
                await this.sendData(streamId, chunk, false);
            }
            await this.sendData(streamId, Buffer.alloc(0), true);
        } catch (err) {
            this.log.warning('stream ' + streamId + ' proxy failed: ' + err);
            try {
                this.sendHeaders(streamId, [[':status', '502']], true);
            } catch (ignored) {
                // ignore
            }
        }
    }

    async run() {
        const preface = await this.reader.readExact(24);
        if (!preface.equals(Buffer.from('PRI * HTTP/2.0\r\n\r\nSM\r\n\r\n'))) {
            throw new Error('edge did not send the HTTP/2 client preface');
        }
        const settings = Buffer.alloc(6);
        settings.writeUInt16BE(3, 0);
        settings.writeUInt32BE(100, 2);
        this.sendFrame(4, 0, 0, settings);
        if (this.showTunnel && !this.tunnelState.printed) {
            process.stdout.write(this.tunnelUrl + '\n');
            this.tunnelState.printed = true;
        }
        try {
            while (!this.stopped) {
                const [frameType, flags, streamId, payload] = await this.readFrame();
                if (frameType === 4) {
                    if (!(flags & 1)) {
                        if (payload.length % 6) {
                            throw new Error('invalid SETTINGS payload');
                        }
                        for (let pos = 0; pos < payload.length; pos += 6) {
                            const setting = payload.readUInt16BE(pos);
                            const value = payload.readUInt32BE(pos + 2);
                            if (setting === 4) {
                                const delta = value - 65535;
                                for (const key of this.streamWindows.keys()) {
                                    this.streamWindows.set(key, Math.max(0, this.streamWindows.get(key) + delta));
                                }
                            } else if (setting === 5 && value >= 16384 && value <= 16777215) {
                                this.peerMaxFrame = value;
                            }
                        }
                        this.sendFrame(4, 1, 0);
                    }
                    continue;
                }
                if (frameType === 6) {
                    if (!(flags & 1)) {
                        this.sendFrame(6, 1, 0, payload);
                    }
                    continue;
                }
                if (frameType === 8) {
                    if (payload.length !== 4) {
                        continue;
                    }
                    const increment = payload.readUInt32BE(0) & 0x7FFFFFFF;
                    if (streamId === 0) {
                        this.connectionWindow += increment;
                    } else {
                        this.streamWindows.set(streamId, (this.streamWindows.get(streamId) ?? 65535) + increment);
                    }
                    this._notifyWindows();
                    continue;
                }
                if (frameType === 3) {
                    this.streams.delete(streamId);
                    continue;
                }
                if (frameType === 7) {
                    break;
                }
                if (frameType === 1) {
                    const headers = await this.readHeaders(flags, streamId, payload);
                    if (!this.streamWindows.has(streamId)) {
                        this.streamWindows.set(streamId, 65535);
                    }
                    this.handleHeaders(streamId, flags, headers);
                    continue;
                }
                if (frameType === 0) {
                    this.handleData(streamId, flags, payload);
                    continue;
                }
            }
        } finally {
            this.stopped = true;
            this._releaseWaiters();
            for (const request of this.streams.values()) {
                if (request.websocketProxy) {
                    request.websocketProxy.stop();
                }
            }
            try {
                this.sock.destroy();
            } catch (ignored) {
                // ignore
            }
        }
    }

    handleHeaders(streamId, flags, headers) {
        const headerMap = {};
        for (const [name, value] of headers) {
            if (name.startsWith(':')) {
                headerMap[name] = value;
            } else {
                headerMap[name.toLowerCase()] = value;
            }
        }
        const upgrade = (headerMap[CONTROL_HEADER] || '').trim().toLowerCase();
        if (upgrade === CONTROL_STREAM) {
            this.openControl(streamId);
            if (flags & 1) {
                this.control.finished = true;
            }
            return;
        }
        const request = {
            method: headerMap[':method'] || 'GET',
            path: headerMap[':path'] || '/',
            authority: headerMap[':authority'] || '',
            headers: headers.filter(([name]) => !name.startsWith(':')),
            body: [],
            upgrade: upgrade,
            websocket: upgrade === 'websocket' || (headerMap[':protocol'] || '').toLowerCase() === 'websocket',
            ended: Boolean(flags & 1),
            finished: false,
        };
        this.streams.set(streamId, request);
        if (request.websocket) {
            request.websocketProxy = new WebSocketProxy(this, streamId, request, this.origin, this.log);
            request.websocketProxy.start();
        } else if (request.ended) {
            this.requestFinished(streamId, request);
        }
    }

    handleData(streamId, flags, payload) {
        this.sendWindowUpdate(0, payload.length);
        this.sendWindowUpdate(streamId, payload.length);
        if (this.control !== null && this.control.streamId === streamId) {
            this.control.feed(payload);
            if (flags & 1) {
                this.control.finished = true;
            }
            return;
        }
        const request = this.streams.get(streamId);
        if (request === undefined) {
            return;
        }
        if (request.websocketProxy !== undefined) {
            request.websocketProxy.feed(payload, Boolean(flags & 1));
            return;
        }
        if (payload.length) {
            request.body.push(payload);
        }
        if (flags & 1) {
            request.ended = true;
            this.requestFinished(streamId, request);
        }
    }
}

class WebSocketProxy {
    constructor(connection, streamId, request, origin, logger) {
        this.connection = connection;
        this.streamId = streamId;
        this.request = request;
        this.origin = origin;
        this.log = logger;
        this.queue = [];
        this.waiters = [];
        this.stopped = false;
        this.sock = null;
    }

    start() {
        this.run().catch(() => {});
    }

    feed(payload, endStream = false) {
        if (payload.length) {
            this.queue.push(payload);
        }
        if (endStream) {
            this.queue.push(null);
        }
        this._wake();
    }

    stop() {
        if (this.stopped) {
            return;
        }
        this.stopped = true;
        this._wake();
        if (this.sock !== null) {
            try {
                this.sock.destroy();
            } catch (ignored) {
                // ignore
            }
        }
    }

    _wake() {
        for (const waiter of this.waiters) {
            waiter();
        }
        this.waiters = [];
    }

    async _next() {
        while (!this.stopped) {
            if (this.queue.length) {
                return this.queue.shift();
            }
            await new Promise((resolve) => this.waiters.push(resolve));
        }
        return null;
    }

    async run() {
        try {
            this.sock = await openOriginSocket(this.origin);
            this.sendHandshake();
            const response = await readHttp1Response(this.sock);
            const userHeaders = [];
            const directHeaders = [];
            for (const [name, value] of response.headers) {
                const lower = name.toLowerCase();
                if (lower === 'content-length') {
                    directHeaders.push([lower, value]);
                }
                const internal = lower.startsWith('cf-int-') ||
                    lower.startsWith('cf-cloudflared-') ||
                    lower.startsWith('cf-proxy-') ||
                    lower.startsWith(':');
                if (!internal || lower === 'connection' || lower === 'upgrade' || lower === 'sec-websocket-accept') {
                    userHeaders.push([lower, value]);
                }
            }
            const serialized = serializeHeaders(userHeaders);
            const status = response.status === 101 ? 200 : response.status;
            const outHeaders = [
                [':status', String(status)],
                ...directHeaders,
                ['cf-cloudflared-response-headers', serialized],
                ['cf-cloudflared-response-meta', '{"src":"origin","flow_rate_limited":false}'],
            ];
            this.connection.sendHeaders(this.streamId, outHeaders);
            this.writeToOrigin().catch(() => {});
            await this.pumpOrigin(response.rest);
        } catch (err) {
            this.log.warning('websocket stream ' + this.streamId + ' failed: ' + err);
            try {
                this.connection.sendHeaders(this.streamId, [[':status', '502']], true);
            } catch (ignored) {
                // ignore
            }
        } finally {
            this.stop();
        }
    }

    async pumpOrigin(firstChunk) {
        if (firstChunk.length) {
            await this.connection.sendData(this.streamId, firstChunk, false);
        }
        for await (const chunk of this.sock) {
            if (this.stopped) {
                break;
            }
            await this.connection.sendData(this.streamId, chunk, false);
        }
        if (!this.stopped) {
            await this.connection.sendData(this.streamId, Buffer.alloc(0), true);
        }
    }

    async writeToOrigin() {
        while (!this.stopped) {
            const payload = await this._next();
            if (payload === null) {
                return;
            }
            try {
                this.sock.write(payload);
            } catch (err) {
                this.stopped = true;
                return;
            }
        }
    }

    sendHandshake() {
        const parsed = new URL(this.origin);
        const target = this.request.path.startsWith('/') ? this.request.path : '/' + this.request.path;
        const lines = ['GET ' + target + ' HTTP/1.1'];
        let hasKey = false;
        let hasVersion = false;
        let hasOrigin = false;
        for (const [name, value] of this.request.headers) {
            const lower = name.toLowerCase();
            if (lower === 'host' || lower === 'connection' || lower === 'upgrade' ||
                lower === 'content-length' || lower === 'transfer-encoding') {
                continue;
            }
            if (lower === 'sec-websocket-key') {
                hasKey = true;
            } else if (lower === 'sec-websocket-version') {
                hasVersion = true;
            } else if (lower === 'origin') {
                hasOrigin = true;
            }
            lines.push(name + ': ' + value);
        }
        lines.push('Host: ' + parsed.host);
        if (!hasOrigin && this.request.authority) {
            lines.push('Origin: https://' + this.request.authority);
        }
        if (!hasKey) {
            lines.push('Sec-WebSocket-Key: ' + crypto.randomBytes(16).toString('base64'));
        }
        if (!hasVersion) {
            lines.push('Sec-WebSocket-Version: 13');
        }
        lines.push('Connection: Upgrade');
        lines.push('Upgrade: websocket');
        this.sock.write(Buffer.from(lines.join('\r\n') + '\r\n\r\n', 'latin1'));
    }
}

class ControlStream {
    constructor(connection, streamId, logger, options = {}) {
        this.connection = connection;
        this.streamId = streamId;
        this.log = logger;
        this.buffer = Buffer.alloc(0);
        this.finished = false;
        // QUIC 控制流 (流 0) 直接承载 capnp RPC (bootstrap + registerConnection), 实机取证
        // (2026-10-31, AWS 干净网络): 无需 rpcStreamProtocolSignature 前导 — 加了前导边缘
        // 反而不响应 (30s 后 registration_failed)。签名前导仅用于 UDP session 等附加 RPC 流
        // (cloudflared tunnelrpc/quic/cloudflared_client.go)。options.quic 当前无消费方, 保留。
        this.quicPreamble = options.quic === true;
    }

    start(accountTag, secret, tunnelId, connIndex) {
        this.connection.sendData(this.streamId, capnpBootstrap(0), false);
        this.connection.sendData(this.streamId, capnpRegister(1, 0, accountTag, secret, tunnelId, connIndex), false);
    }

    feed(payload) {
        this.buffer = this.buffer.length ? Buffer.concat([this.buffer, payload]) : payload;
        let messages, rest;
        [messages, rest] = capnpMessages(this.buffer);
        this.buffer = rest;
        for (const message of messages) {
            try {
                const result = capnpReturnResult(message);
                if (result.bootstrap) {
                    // bootstrap 应答 (Payload.content = capability): 非注册结果, 静默跳过
                    continue;
                }
                if (result.ok) {
                    this.log.info('tunnel connection registered at ' + (result.location || 'unknown'));
                    this.connection.registered = true;
                } else {
                    this.log.warning('tunnel registration failed: ' + (result.error || 'unknown error'));
                    // 🛡️ 注册失败: 结束本轮连接, 由重连循环计数, 连续失败达阈值后自动重新注册换新域名
                    this.connection.registrationFailed = true;
                    this.connection.stopped = true;
                }
            } catch (err) {
                this.log.debug('ignoring control RPC message: ' + err);
            }
        }
    }
}

function openOriginSocket(origin) {
    return new Promise((resolve, reject) => {
        let parsed;
        try {
            parsed = new URL(origin);
        } catch (err) {
            reject(new Error('origin must be an http:// or https:// URL'));
            return;
        }
        if (!['http:', 'https:'].includes(parsed.protocol) || !parsed.hostname) {
            reject(new Error('origin must be an http:// or https:// URL'));
            return;
        }
        const isHttps = parsed.protocol === 'https:';
        const port = parsed.port || (isHttps ? 443 : 80);
        const raw = net.connect({ host: parsed.hostname, port });
        let settled = false;
        const finish = (fn, value) => {
            if (settled) {
                return;
            }
            settled = true;
            raw.removeListener('error', onRawError);
            raw.setTimeout(0);
            fn(value);
        };
        const onRawError = (err) => {
            if (!settled) {
                finish(reject, err);
            }
        };
        raw.on('error', onRawError);
        raw.setTimeout(30000, () => raw.destroy(new Error('origin connection timeout')));
        raw.on('connect', () => {
            if (!isHttps) {
                finish(resolve, raw);
                return;
            }
            const tlsSock = tls.connect({ socket: raw, servername: parsed.hostname });
            tlsSock.on('error', (err) => {
                if (!settled) {
                    finish(reject, err);
                }
            });
            tlsSock.on('secureConnect', () => {
                finish(resolve, tlsSock);
            });
        });
    });
}

function rawHeaderPairs(res) {
    const pairs = [];
    for (let i = 0; i < res.rawHeaders.length; i += 2) {
        pairs.push([res.rawHeaders[i], res.rawHeaders[i + 1]]);
    }
    return pairs;
}

function proxyToOrigin(origin, method, requestPath, incomingHeaders, body) {
    return new Promise((resolve, reject) => {
        let parsed;
        try {
            parsed = new URL(origin);
        } catch (err) {
            reject(new Error('origin must be an http:// or https:// URL'));
            return;
        }
        if (!['http:', 'https:'].includes(parsed.protocol) || !parsed.hostname) {
            reject(new Error('origin must be an http:// or https:// URL'));
            return;
        }
        const isHttps = parsed.protocol === 'https:';
        const port = parsed.port || (isHttps ? 443 : 80);
        const headers = {};
        for (const [name, value] of incomingHeaders) {
            const lower = name.toLowerCase();
            if (lower === 'host' || lower === 'connection' || lower === 'transfer-encoding' || lower === 'content-length') {
                continue;
            }
            headers[name] = value;
        }
        headers['Host'] = parsed.host;
        if (body.length) {
            headers['Content-Length'] = String(body.length);
        }
        const target = requestPath.startsWith('/') ? requestPath : '/' + requestPath;
        const mod = isHttps ? https : http;
        const req = mod.request({
            hostname: parsed.hostname,
            port: port,
            path: target,
            method: method,
            headers: headers,
            timeout: 30000,
        }, (res) => {
            resolve({
                status: res.statusCode,
                headers: rawHeaderPairs(res),
                body: res,
            });
        });
        req.on('error', (err) => reject(err));
        req.end(body.length ? body : undefined);
    });
}

function readHttp1Response(sock) {
    return new Promise((resolve, reject) => {
        let buffer = Buffer.alloc(0);
        const cleanup = () => {
            sock.removeListener('data', onData);
            sock.removeListener('error', onError);
            sock.removeListener('end', onClosed);
            sock.removeListener('close', onClosed);
        };
        const onData = (chunk) => {
            buffer = buffer.length ? Buffer.concat([buffer, chunk]) : chunk;
            const idx = buffer.indexOf('\r\n\r\n');
            if (idx < 0) {
                return;
            }
            cleanup();
            const head = buffer.subarray(0, idx).toString('latin1');
            const lines = head.split('\r\n');
            const parts = lines[0].split(' ');
            const status = parseInt(parts[1], 10);
            if (!Number.isInteger(status)) {
                reject(new Error('malformed HTTP/1.1 response status'));
                return;
            }
            const headers = [];
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i];
                if (!line) {
                    continue;
                }
                const colon = line.indexOf(':');
                if (colon > 0) {
                    headers.push([line.slice(0, colon).trim(), line.slice(colon + 1).trim()]);
                }
            }
            resolve({ status: status, headers: headers, rest: buffer.subarray(idx + 4) });
        };
        const onError = (err) => {
            cleanup();
            reject(err);
        };
        const onClosed = () => {
            cleanup();
            reject(new Error('origin closed before response headers'));
        };
        sock.on('data', onData);
        sock.on('error', onError);
        sock.on('end', onClosed);
        sock.on('close', onClosed);
    });
}
// 🔐 A-2 折中校验: Cloudflare edge (7844) 出示的证书由其私有 "CloudFlare Origin SSL" CA 签发,
// 不在公共信任库 (cf. cloudflared tlsconfig/cloudflare_ca.go 内置固定根), 系统根证书永远验不过。
// 因此不固定证书, 退而校验对端确为 Cloudflare Origin SSL 体系签发且域名匹配, 兜底防止连到任意端点。
// KISAMA_EDGE_INSECURE=true 仍可整体豁免。
function verifyEdgeCertificate(cert) {
    if (!cert || !cert.issuer) return 'no peer certificate';
    if (cert.issuer.O !== 'CloudFlare, Inc.') return 'issuer O mismatch: ' + (cert.issuer.O || '');
    if (!String(cert.issuer.OU || '').startsWith('CloudFlare Origin SSL')) return 'issuer OU mismatch: ' + (cert.issuer.OU || '');
    if (!cert.subject || cert.subject.CN !== 'CloudFlare Origin Certificate') return 'subject CN mismatch';
    const names = String(cert.subjectaltname || '').split(',').map((s) => s.trim().toLowerCase());
    const covered = names.some((n) => {
        if (!n.startsWith('dns:')) return false;
        const dns = n.slice(4);
        return dns === 'h2.cftunnel.com' || dns === 'cftunnel.com' ||
            (dns.startsWith('*.') && 'h2.cftunnel.com'.endsWith(dns.slice(1)));
    });
    if (!covered) return 'SAN does not cover h2.cftunnel.com';
    return null;
}
function connectEdge(verifyCertificate, logger) {
    const candidates = EDGE_HOSTS.slice().sort(() => Math.random() - 0.5);
    let lastError = null;
    const attempt = async () => {
        for (const host of candidates) {
            try {
                return await new Promise((resolve, reject) => {
                    const sock = tls.connect({
                        host: host,
                        port: EDGE_PORT,
                        ALPNProtocols: ['h2'],
                        servername: 'h2.cftunnel.com',
                        rejectUnauthorized: false,
                    });
                    sock.setTimeout(10000, () => sock.destroy(new Error('connection timeout')));
                    sock.on('error', reject);
                    sock.on('secureConnect', () => {
                        if (verifyCertificate) {
                            const verifyError = verifyEdgeCertificate(sock.getPeerCertificate(false));
                            if (verifyError) {
                                sock.destroy(new Error('edge certificate verification failed: ' + verifyError));
                                return;
                            }
                        }
                        const alpn = sock.alpnProtocol;
                        if (alpn && alpn !== 'h2') {
                            sock.destroy(new Error('edge did not negotiate h2'));
                            return;
                        }
                        // 🛡️ 空闲超时防半开假死: edge 有周期 PING, 长时间无任何入站数据 = 连接已死,
                        // 主动断开走重连 (KISAMA_ARGO_IDLE_TIMEOUT 可调, 0=禁用)
                        if (argoIdleTimeoutMs > 0) {
                            sock.setTimeout(argoIdleTimeoutMs, () => sock.destroy(new Error('edge connection idle timeout')));
                        } else {
                            sock.setTimeout(0);
                        }
                        logger.info('connected to ' + host + ':' + EDGE_PORT);
                        resolve(sock);
                    });
                });
            } catch (err) {
                lastError = err;
                logger.warning('edge ' + host + ' failed: ' + err);
            }
        }
        throw new Error('all Cloudflare edges failed: ' + lastError);
    };
    return attempt();
}


// ============================================================================
// 🚀 QUIC 边缘传输 (移植自 cftunnel-product.js, 零依赖手写 QUIC v1 + TLS 1.3)
// 与 h2 路径同端口 7844, 但走 UDP: SNI 固定 quic.cftunnel.com, ALPN argotunnel。
// 注册协议 (Cap'n Proto bootstrap/register) 与 h2 完全共用, 传输可按隧道独立选择。
// ============================================================================
const QUIC_DATA_STREAM_SIGNATURE = Buffer.from('0a36cd12a13e', 'hex');
const QUIC_RPC_STREAM_SIGNATURE = Buffer.from('52bb825cdb65', 'hex');
const QUIC_DATA_STREAM_PREAMBLE = Buffer.concat([QUIC_DATA_STREAM_SIGNATURE, Buffer.from('01', 'latin1')]);
// QUIC 控制流 (RPC) 前导: 签名 + 版本 "01", 对齐 cloudflared tunnelrpc/quic/protocol.go 的
// writeRPCStreamPreamble — 缺失时边缘 determineProtocol 得到 unknown signature 直接拒绝注册
// (实机取证: 边缘在控制流上回 RPC 异常后关闭连接)。h2 路径经 HTTP 头识别控制流, 无此前导。
const QUIC_RPC_STREAM_PREAMBLE = Buffer.concat([QUIC_RPC_STREAM_SIGNATURE, Buffer.from('01', 'latin1')]);
const QUIC_CONNECTION_TYPE = { http: 0, websocket: 1, tcp: 2 };
const QUIC_META_METHOD = 'HttpMethod';
const QUIC_META_HOST = 'HttpHost';
const QUIC_META_STATUS = 'HttpStatus';
const QUIC_META_HEADER = 'HttpHeader';

const QUIC_VERSION = 0x00000001;
const QUIC_ALPN = 'argotunnel';
// 边缘按该固定 SNI 选择证书与 QUIC 协议栈; 实机确认 (2026-10-31, AWS 干净网络) 用该 SNI
// 完整走通 TLS 1.3 握手 (155B ServerHello → 标准 Handshake epoch flight)。
// ⚠️ 切勿改用 region 主机名做 SNI: 边缘会走另一套入口 (1280B 填充 ServerHello 后停滞,
// 永不下发 flight)。另注: 单机 sing-box TUN 等本地代理会干扰 QUIC 流, 联调必须在干净网络。
const QUIC_SERVER_NAME = 'quic.cftunnel.com';
const QUIC_INITIAL_SALT = Buffer.from('38762cf7f55934b34d179ae6a4c80cadccbb7f0a', 'hex');
const QUIC_HRR_RANDOM = Buffer.from('cf21ad74e59a6111be1d8c021e65b891c2a211167abb8c5e079e09e2c8a8339c', 'hex');
const QUIC_SAMPLE_SIZE = 16;
const QUIC_PN_LEN = 4;
const QUIC_MAX_PACKET = 1232;
const QUIC_MIN_INITIAL = 1200;
const QUIC_EPOCH_INITIAL = 0;
const QUIC_EPOCH_HANDSHAKE = 1;
const QUIC_EPOCH_APPLICATION = 2;
const QUIC_EPOCH_NAMES = ['initial', 'handshake', 'one-rtt'];
const QUIC_FRAME = {
    padding: 0x00,
    ping: 0x01,
    ack: 0x02,
    ackEcn: 0x03,
    resetStream: 0x04,
    stopSending: 0x05,
    crypto: 0x06,
    newToken: 0x07,
    stream: 0x08,
    maxData: 0x10,
    maxStreamData: 0x11,
    maxStreamsBidi: 0x12,
    maxStreamsUni: 0x13,
    newConnectionId: 0x18,
    retireConnectionId: 0x19,
    pathChallenge: 0x1a,
    pathResponse: 0x1b,
    transportClose: 0x1c,
    applicationClose: 0x1d,
    handshakeDone: 0x1e,
    datagram: 0x30,
    datagramLen: 0x31,
};
const QUIC_PARAM = {
    originalDestinationConnectionId: 0x00,
    maxIdleTimeout: 0x01,
    statelessResetToken: 0x02,
    maxUdpPayloadSize: 0x03,
    initialMaxData: 0x04,
    initialMaxStreamDataBidiLocal: 0x05,
    initialMaxStreamDataBidiRemote: 0x06,
    initialMaxStreamDataUni: 0x07,
    initialMaxStreamsBidi: 0x08,
    initialMaxStreamsUni: 0x09,
    ackDelayExponent: 0x0a,
    maxAckDelay: 0x0b,
    disableActiveMigration: 0x0c,
    activeConnectionIdLimit: 0x0e,
    initialSourceConnectionId: 0x0f,
    retrySourceConnectionId: 0x10,
    maxDatagramFrameSize: 0x20,
};

function quicVarintSize(value) {
    const v = BigInt(value);
    if (v < 0x40n) {
        return 1;
    }
    if (v < 0x4000n) {
        return 2;
    }
    if (v < 0x40000000n) {
        return 4;
    }
    return 8;
}

function quicWriteVarint(value) {
    const v = BigInt(value);
    let out;
    let size;
    let prefix;
    if (v < 0x40n) {
        size = 1;
        prefix = 0;
    } else if (v < 0x4000n) {
        size = 2;
        prefix = 0x40;
    } else if (v < 0x40000000n) {
        size = 4;
        prefix = 0x80;
    } else {
        size = 8;
        prefix = 0xc0;
    }
    out = Buffer.alloc(size);
    let rest = v;
    for (let i = size - 1; i > 0; i--) {
        out[i] = Number(rest & 0xffn);
        rest >>= 8n;
    }
    out[0] = Number(rest) | prefix;
    return out;
}

// returns null when the buffer does not hold a complete varint yet
function quicReadVarint(buffer, offset) {
    if (buffer.length - offset < 1) {
        return null;
    }
    const first = buffer[offset];
    const size = 1 << (first >> 6);
    if (buffer.length - offset < size) {
        return null;
    }
    let v = BigInt(first & 0x3f);
    for (let i = 1; i < size; i++) {
        v = (v << 8n) | BigInt(buffer[offset + i]);
    }
    return [v, size];
}

class QuicWriter {
    constructor() {
        this.parts = [];
    }

    byte(value) {
        this.parts.push(Buffer.from([value & 0xff]));
        return this;
    }

    bytes(value) {
        this.parts.push(Buffer.isBuffer(value) ? value : Buffer.from(value));
        return this;
    }

    fixed(value, length) {
        const out = Buffer.alloc(length);
        for (let i = length - 1; i >= 0; i--) {
            out[i] = Number(value & 0xffn);
            value >>= 8n;
        }
        this.parts.push(out);
        return this;
    }

    u8(value) {
        this.parts.push(Buffer.from([value & 0xff]));
        return this;
    }

    u16(value) {
        const out = Buffer.alloc(2);
        out.writeUInt16BE(value & 0xffff, 0);
        this.parts.push(out);
        return this;
    }

    u32(value) {
        const out = Buffer.alloc(4);
        out.writeUInt32BE(value >>> 0, 0);
        this.parts.push(out);
        return this;
    }

    varint(value) {
        this.parts.push(quicWriteVarint(value));
        return this;
    }

    build() {
        return Buffer.concat(this.parts);
    }
}

class QuicReader {
    constructor(buffer) {
        this.buffer = buffer;
        this.pos = 0;
    }

    get remaining() {
        return this.buffer.length - this.pos;
    }

    byte() {
        const value = this.buffer[this.pos];
        this.pos += 1;
        return value;
    }

    u16() {
        const value = this.buffer.readUInt16BE(this.pos);
        this.pos += 2;
        return value;
    }

    u24() {
        const value = this.buffer.readUIntBE(this.pos, 3);
        this.pos += 3;
        return value;
    }

    u32() {
        const value = this.buffer.readUInt32BE(this.pos);
        this.pos += 4;
        return value;
    }

    bytes(count) {
        const value = this.buffer.subarray(this.pos, this.pos + count);
        this.pos += count;
        return value;
    }

    varint() {
        const parsed = quicReadVarint(this.buffer, this.pos);
        if (parsed === null) {
            throw new Error('truncated QUIC varint');
        }
        this.pos += parsed[1];
        return parsed[0];
    }

    number() {
        const value = this.varint();
        if (value > BigInt(Number.MAX_SAFE_INTEGER)) {
            return Number.MAX_SAFE_INTEGER;
        }
        return Number(value);
    }
}

function hkdfExtract(hash, salt, ikm) {
    return crypto.createHmac(hash, salt).update(ikm).digest();
}

function hkdfExpand(hash, prk, info, length) {
    const out = [];
    let previous = Buffer.alloc(0);
    let counter = 1;
    while (out.reduce((a, b) => a + b.length, 0) < length) {
        previous = crypto.createHmac(hash, prk)
            .update(Buffer.concat([previous, info, Buffer.from([counter])]))
            .digest();
        out.push(previous);
        counter++;
    }
    return Buffer.concat(out).subarray(0, length);
}

function hkdfExpandLabel(hash, secret, label, context, length) {
    const fullLabel = Buffer.concat([Buffer.from('tls13 ', 'utf8'), Buffer.from(label, 'utf8')]);
    const ctx = context || Buffer.alloc(0);
    const info = Buffer.concat([
        Buffer.from([(length >> 8) & 0xff, length & 0xff]),
        Buffer.from([fullLabel.length]),
        fullLabel,
        Buffer.from([ctx.length]),
        ctx,
    ]);
    return hkdfExpand(hash, secret, info, length);
}

class QuicKeys {
    constructor(hash, cipher, secret) {
        this.hash = hash;
        this.cipher = cipher;
        this.secret = secret;
        const keyLength = cipher === 'aes-256-gcm' ? 32 : 16;
        this.key = hkdfExpandLabel(hash, secret, 'quic key', Buffer.alloc(0), keyLength);
        this.iv = hkdfExpandLabel(hash, secret, 'quic iv', Buffer.alloc(0), 12);
        this.hpKey = hkdfExpandLabel(hash, secret, 'quic hp', Buffer.alloc(0), keyLength);
        this.hpCipher = keyLength === 32 ? 'aes-256-ecb' : 'aes-128-ecb';
        this.tagSize = 16;
    }

    nonce(packetNumber) {
        const nonce = Buffer.from(this.iv);
        let rest = BigInt(packetNumber);
        for (let i = 0; i < 8; i++) {
            nonce[11 - i] ^= Number(rest & 0xffn);
            rest >>= 8n;
        }
        return nonce;
    }

    mask(sample) {
        const cipher = crypto.createCipheriv(this.hpCipher, this.hpKey, null);
        cipher.setAutoPadding(false);
        return Buffer.concat([cipher.update(sample), cipher.final()]).subarray(0, 5);
    }

    seal(packetNumber, plainHeader, payload) {
        const encryptor = crypto.createCipheriv(this.cipher, this.key, this.nonce(packetNumber));
        encryptor.setAAD(plainHeader);
        const body = Buffer.concat([encryptor.update(payload), encryptor.final()]);
        const tag = encryptor.getAuthTag();
        return Buffer.concat([body, tag]);
    }

    open(packetNumber, plainHeader, ciphertext) {
        const decryptor = crypto.createDecipheriv(this.cipher, this.key, this.nonce(packetNumber));
        decryptor.setAAD(plainHeader);
        decryptor.setAuthTag(ciphertext.subarray(ciphertext.length - this.tagSize));
        return Buffer.concat([
            decryptor.update(ciphertext.subarray(0, ciphertext.length - this.tagSize)),
            decryptor.final(),
        ]);
    }
}

function quicNextKeys(keys, keepHeaderProtection) {
    // RFC 9001 section 5.3: a key update derives the next packet protection secret,
    // and the key, IV and header protection key all change with it.
    const next = new QuicKeys(keys.hash, keys.cipher, hkdfExpandLabel(
        keys.hash,
        keys.secret,
        'quic ku',
        Buffer.alloc(0),
        keys.secret.length,
    ));
    if (keepHeaderProtection) {
        // The argo edge keeps the original header protection key across an update, so
        // reusing it keeps our packets readable for a peer that does the same.
        next.hpKey = keys.hpKey;
    }
    return next;
}

function quicInitialKeys(cid, isClient) {
    const hash = 'sha256';
    const initial = hkdfExtract(hash, QUIC_INITIAL_SALT, cid);
    const sendLabel = isClient ? 'client in' : 'server in';
    const recvLabel = isClient ? 'server in' : 'client in';
    return {
        send: new QuicKeys(hash, 'aes-128-gcm', hkdfExpandLabel(hash, initial, sendLabel, Buffer.alloc(0), 32)),
        recv: new QuicKeys(hash, 'aes-128-gcm', hkdfExpandLabel(hash, initial, recvLabel, Buffer.alloc(0), 32)),
    };
}

function rangesRemove(list, start, end) {
    const out = [];
    for (const item of list) {
        const itemStart = item.start;
        const itemEnd = item.start + item.length;
        if (itemEnd <= start || itemStart >= end) {
            out.push(item);
            continue;
        }
        if (itemStart < start) {
            out.push({ start: itemStart, length: start - itemStart });
        }
        if (itemEnd > end) {
            out.push({ start: end, length: itemEnd - end });
        }
    }
    return out;
}

function rangesUnion(a, b) {
    const merged = a.concat(b).sort((x, y) => x.start - y.start);
    const out = [];
    for (const item of merged) {
        const last = out.length ? out[out.length - 1] : null;
        const itemEnd = item.start + item.length;
        if (last && item.start <= last.start + last.length) {
            last.length = Math.max(last.length, itemEnd - last.start);
        } else {
            out.push({ start: item.start, length: item.length });
        }
    }
    return out;
}

class QuicByteSender {
    constructor(connection) {
        this.connection = connection;
        this.data = Buffer.alloc(0);
        this.pending = [];
        this.unacked = [];
        this.frontier = 0;
        this.fin = false;
        this.finUnacked = false;
    }

    get sentEnd() {
        return this.data.length;
    }

    append(payload, fin) {
        if (payload.length) {
            this.data = Buffer.concat([this.data, payload]);
            this.pending.push({ start: this.data.length - payload.length, length: payload.length });
        }
        if (fin) {
            this.fin = true;
            this.finUnacked = true;
        }
    }

    take(budget) {
        if (!this.pending.length || budget <= 0) {
            return null;
        }
        const range = this.pending[0];
        const length = Math.min(range.length, budget);
        const chunk = { start: range.start, length: length };
        range.start += length;
        range.length -= length;
        if (!range.length) {
            this.pending.shift();
        }
        chunk.bytes = this.data.subarray(chunk.start, chunk.start + length);
        // Bytes taken below the high-water mark are a retransmission: Karn's rule needs to be
        // able to tell them apart, because their acknowledgement says nothing about the RTT.
        chunk.retransmitted = chunk.start < this.frontier;
        this.frontier = Math.max(this.frontier, chunk.start + length);
        this.unacked = rangesUnion(this.unacked, [{ start: chunk.start, length: length }]);
        return chunk;
    }

    // a zero-length FIN only travels once every byte is accounted for
    takeFin() {
        if (!this.fin || !this.finUnacked || this.pending.length || this.unacked.length) {
            return false;
        }
        this.finUnacked = false;
        return true;
    }

    ack(start, length, includeFin) {
        this.unacked = rangesRemove(this.unacked, start, start + length);
        if (includeFin && this.fin && start + length >= this.data.length) {
            this.finUnacked = false;
        }
        this.connection.onSendProgress();
    }

    loss() {
        if (this.unacked.length) {
            this.frontier = this.unacked[0].start;
            this.pending = rangesUnion(this.pending, this.unacked).sort((a, b) => a.start - b.start);
            this.unacked = [];
        }
        if (this.fin) {
            this.finUnacked = true;
        }
    }

    // Only the bytes of one lost packet go back on the wire; everything else that is still
    // unacknowledged has to stay put, otherwise a single loss re-bursts the whole flight.
    lossRanges(items) {
        for (const item of items) {
            if (!item.length) {
                if (item.fin && this.fin) {
                    this.finUnacked = true;
                }
                continue;
            }
            this.unacked = rangesRemove(this.unacked, item.start, item.start + item.length);
            this.pending = rangesUnion(this.pending, [{ start: item.start, length: item.length }]).sort((a, b) => a.start - b.start);
        }
    }

    idle() {
        return !this.pending.length && !this.unacked.length && !this.finUnacked;
    }
}

// Ordered byte stream rebuilt from offset-addressed frames; retransmits are duplicates.
class QuicOffsetBuffer {
    constructor() {
        this.contiguous = 0;
        this.pending = [];
    }

    accept(start, bytes) {
        if (start > this.contiguous + 1048576) {
            return Buffer.alloc(0);
        }
        if (start < this.contiguous) {
            const drop = this.contiguous - start;
            if (drop >= bytes.length) {
                return Buffer.alloc(0);
            }
            bytes = bytes.subarray(drop);
            start = this.contiguous;
        }
        if (!bytes.length) {
            return Buffer.alloc(0);
        }
        if (start !== this.contiguous) {
            this.pending.push({ start: start, bytes: Buffer.from(bytes) });
            return Buffer.alloc(0);
        }
        const out = [bytes];
        this.contiguous += bytes.length;
        for (let progress = true; progress; ) {
            progress = false;
            for (let i = 0; i < this.pending.length; i++) {
                if (this.pending[i].start === this.contiguous) {
                    out.push(this.pending[i].bytes);
                    this.contiguous += this.pending[i].bytes.length;
                    this.pending.splice(i, 1);
                    progress = true;
                    break;
                }
            }
        }
        return Buffer.concat(out);
    }
}

function quicApplyProtection(keys, packet, pnOffset, isLong) {
    if (packet.length < pnOffset + 4 + QUIC_SAMPLE_SIZE) {
        return null;
    }
    const mask = keys.mask(packet.subarray(pnOffset + 4, pnOffset + 4 + QUIC_SAMPLE_SIZE));
    const out = Buffer.from(packet);
    out[0] ^= mask[0] & (isLong ? 0x0f : 0x1f);
    for (let i = 0; i < QUIC_PN_LEN; i++) {
        out[pnOffset + i] ^= mask[1 + i];
    }
    return out;
}

function quicRemoveProtection(keys, packet, pnOffset, isLong) {
    if (packet.length < pnOffset + 4 + QUIC_SAMPLE_SIZE) {
        return null;
    }
    const mask = keys.mask(packet.subarray(pnOffset + 4, pnOffset + 4 + QUIC_SAMPLE_SIZE));
    const copy = Buffer.from(packet);
    copy[0] ^= mask[0] & (isLong ? 0x0f : 0x1f);
    const pnLength = (copy[0] & 0x03) + 1;
    for (let i = 0; i < pnLength; i++) {
        copy[pnOffset + i] ^= mask[1 + i];
    }
    let packetNumber = 0;
    for (let i = 0; i < pnLength; i++) {
        packetNumber = packetNumber * 256 + copy[pnOffset + i];
    }
    return [copy.subarray(0, pnOffset + pnLength), packetNumber];
}

function quicDecodePacketNumber(largest, bits, truncated) {
    const expected = BigInt(largest) + 1n;
    const mask = (1n << BigInt(bits)) - 1n;
    let candidate = (expected & ~mask) | BigInt(truncated);
    const half = 1n << BigInt(bits - 1);
    if (candidate + half <= expected) {
        candidate += 1n << BigInt(bits);
    } else if (candidate > expected + half && candidate >= (1n << BigInt(bits))) {
        candidate -= 1n << BigInt(bits);
    }
    return Number(candidate);
}

function quicEncodeAck(ranges) {
    const writer = new QuicWriter();
    writer.byte(QUIC_FRAME.ack);
    const sorted = ranges.slice().sort((a, b) => a.start - b.start);
    const last = sorted[sorted.length - 1];
    const largest = last.start + last.length - 1;
    writer.varint(largest);
    writer.varint(0);
    writer.varint(sorted.length - 1);
    writer.varint(largest - last.start);
    let smallest = last.start;
    for (let i = sorted.length - 2; i >= 0; i--) {
        const range = sorted[i];
        const end = range.start + range.length - 1;
        writer.varint(smallest - end - 2);
        writer.varint(end - range.start);
        smallest = range.start;
    }
    return writer.build();
}

function quicRangesFromAck(reader) {
    const largest = reader.number();
    const ackDelay = reader.number();
    const rangeCount = reader.number();
    const first = reader.number();
    const out = [{ start: largest - first, length: first + 1 }];
    let smallest = largest - first;
    for (let i = 0; i < rangeCount; i++) {
        const gap = reader.number();
        const length = reader.number();
        const end = smallest - gap - 2;
        out.push({ start: end - length, length: length + 1 });
        smallest = end - length;
    }
    // Carried alongside the ranges so an RTT sample can subtract the peer's own delay.
    out.ackDelay = ackDelay / 1000;
    return out;
}

function quicDecodeTransportParameters(buffer) {
    const out = {};
    const reader = new QuicReader(buffer);
    while (reader.remaining > 0) {
        const id = Number(reader.varint());
        const length = reader.number();
        if (reader.remaining < length) {
            break;
        }
        const value = reader.bytes(length);
        if (value.length === 1 || value.length === 2 || value.length === 4 || value.length === 8) {
            let parsed = 0;
            for (const byte of value) {
                parsed = parsed * 256 + byte;
            }
            out[id] = parsed;
        } else {
            out[id] = Buffer.from(value);
        }
    }
    return out;
}

function quicEncodeTransportParameters(entries) {
    const writer = new QuicWriter();
    for (const [id, value] of entries) {
        let body;
        if (Buffer.isBuffer(value)) {
            body = value;
        } else if (value === true) {
            body = Buffer.alloc(0);
        } else {
            // RFC 9000 §16: 整数传输参数按 varint 变长编码 (边缘 quic-go 校验声明长度与
            // varint 自带长度一致, 不一致即 TRANSPORT_PARAMETER_ERROR — 实机确认)
            body = quicWriteVarint(value);
        }
        writer.varint(id);
        writer.varint(body.length);
        writer.bytes(body);
    }
    return writer.build();
}

function tlsMessage(type, body) {
    const header = Buffer.alloc(4);
    header[0] = type;
    header.writeUIntBE(body.length, 1, 3);
    return Buffer.concat([header, body]);
}

function tlsExtension(type, body) {
    const header = Buffer.alloc(4);
    header.writeUInt16BE(type, 0);
    header.writeUInt16BE(body.length, 2);
    return Buffer.concat([header, body]);
}

class QuicTlsClient {
    constructor(serverName, alpn, parameters) {
        this.serverName = serverName;
        this.alpn = alpn;
        this.parameters = parameters;
        this.keyPair = crypto.generateKeyPairSync('x25519');
        this.publicKey = this.keyPair.publicKey.export({ type: 'spki', format: 'der' }).subarray(-32);
        this.hash = 'sha256';
        this.hashLength = 32;
        this.cipher = 'aes-128-gcm';
        this.messages = [];
        this.state = 'start';
        this.remoteParameters = null;
        this.negotiatedAlpn = null;
        this.leafCert = null;   // Certificate 消息中的叶子证书 DER, 供边缘软校验
    }

    transcript(limit) {
        const digest = crypto.createHash(this.hash);
        const messages = limit === undefined ? this.messages : this.messages.slice(0, limit);
        for (const message of messages) {
            digest.update(message);
        }
        return digest.digest();
    }

    buildClientHello() {
        const name = Buffer.from(this.serverName, 'utf8');
        const serverNameBody = new QuicWriter()
            .u16(name.length + 3)
            .byte(0)
            .u16(name.length)
            .bytes(name)
            .build();
        const groups = new QuicWriter().u16(4).u16(0x001d).u16(0x0017).build();
        const signatures = new QuicWriter()
            .u16(8)
            .u16(0x0403)
            .u16(0x0804)
            .u16(0x0401)
            .u16(0x0807)
            .build();
        const versions = new QuicWriter().byte(2).u16(0x0304).build();
        const keyShare = new QuicWriter()
            .u16(4 + this.publicKey.length)
            .u16(0x001d)
            .u16(this.publicKey.length)
            .bytes(this.publicKey)
            .build();
        const alpnList = Buffer.concat([Buffer.from([this.alpn.length]), Buffer.from(this.alpn, 'utf8')]);
        const alpn = new QuicWriter().u16(alpnList.length).bytes(alpnList).build();
        const pskModes = new QuicWriter().byte(1).byte(1).build();
        const extensions = Buffer.concat([
            tlsExtension(0x0000, serverNameBody),
            tlsExtension(0x000a, groups),
            tlsExtension(0x000d, signatures),
            tlsExtension(0x002b, versions),
            tlsExtension(0x0033, keyShare),
            tlsExtension(0x0010, alpn),
            tlsExtension(0x002d, pskModes),
            tlsExtension(0xff01, Buffer.from([0])),
            tlsExtension(0x0039, this.parameters),
        ]);
        const suites = Buffer.from([0x00, 0x04, 0x13, 0x01, 0x13, 0x02]);
        const body = Buffer.concat([
            Buffer.from([0x03, 0x03]),
            crypto.randomBytes(32),
            Buffer.from([0]),
            suites,
            Buffer.from([0x01, 0x00]),
            Buffer.from([(extensions.length >> 8) & 0xff, extensions.length & 0xff]),
            extensions,
        ]);
        const message = tlsMessage(1, body);
        this.messages.push(message);
        this.state = 'awaiting-server-hello';
        return message;
    }

    serverHelloComplete(buffer) {
        if (buffer.length < 4) {
            return null;
        }
        if (buffer[0] !== 2) {
            throw new Error('expected TLS ServerHello');
        }
        const length = buffer.readUIntBE(1, 3);
        if (buffer.length < 4 + length) {
            return null;
        }
        return buffer.subarray(0, 4 + length);
    }

    handleServerHello(message) {
        const reader = new QuicReader(message.subarray(4));
        reader.u16();
        const random = reader.bytes(32);
        if (random.equals(QUIC_HRR_RANDOM)) {
            throw new Error('edge requested a HelloRetryRequest, which is not supported');
        }
        const sessionId = reader.bytes(reader.byte());
        const cipherSuite = reader.u16();
        reader.byte();
        let serverKey = null;
        const extensionCount = reader.u16();
        let extensionsSeen = 0;
        while (extensionsSeen < extensionCount && reader.remaining >= 4) {
            const type = reader.u16();
            const length = reader.u16();
            const value = reader.bytes(length);
            extensionsSeen += 1;
            if (type === 0x0033 && value.length >= 4) {
                const view = new QuicReader(value);
                const group = view.u16();
                const keyLength = view.u16();
                serverKey = { group: group, key: view.bytes(keyLength) };
            } else if (type === 0x002b && value.length >= 2) {
                if (value.readUInt16BE(0) !== 0x0304) {
                    throw new Error('edge selected an unsupported TLS version');
                }
            }
        }
        if (serverKey === null) {
            throw new Error('ServerHello has no key_share');
        }
        if (serverKey.group !== 0x001d) {
            throw new Error('edge selected unsupported key share group ' + serverKey.group);
        }
        if (cipherSuite === 0x1301) {
            this.hash = 'sha256';
            this.hashLength = 32;
            this.cipher = 'aes-128-gcm';
        } else if (cipherSuite === 0x1302) {
            this.hash = 'sha384';
            this.hashLength = 48;
            this.cipher = 'aes-256-gcm';
        } else {
            throw new Error('edge selected unsupported cipher suite ' + cipherSuite.toString(16));
        }
        this.messages.push(message);
        const publicKey = crypto.createPublicKey({
            key: Buffer.concat([Buffer.from('302a300506032b656e032100', 'hex'), serverKey.key]),
            format: 'der',
            type: 'spki',
        });
        const shared = crypto.diffieHellman({ privateKey: this.keyPair.privateKey, publicKey: publicKey });
        const zeros = Buffer.alloc(this.hashLength);
        const early = hkdfExtract(this.hash, zeros, zeros);
        const derived = hkdfExpandLabel(this.hash, early, 'derived', crypto.createHash(this.hash).digest(), this.hashLength);
        this.handshakeSecret = hkdfExtract(this.hash, derived, shared);
        const shHash = this.transcript();
        this.clientHandshakeSecret = hkdfExpandLabel(this.hash, this.handshakeSecret, 'c hs traffic', shHash, this.hashLength);
        this.serverHandshakeSecret = hkdfExpandLabel(this.hash, this.handshakeSecret, 's hs traffic', shHash, this.hashLength);
        this.state = 'awaiting-handshake';
        return {
            send: new QuicKeys(this.hash, this.cipher, this.clientHandshakeSecret),
            recv: new QuicKeys(this.hash, this.cipher, this.serverHandshakeSecret),
        };
    }

    // returns null until the server's Finished completes the handshake, then the client
    // Finished message plus the application key material.
    handleHandshakeMessage(message) {
        this.messages.push(message);
        const type = message[0];
        if (type === 8) {
            const reader = new QuicReader(message.subarray(4));
            const count = reader.u16();
            let seen = 0;
            while (seen < count && reader.remaining >= 4) {
                const extension = reader.u16();
                const length = reader.u16();
                const value = reader.bytes(length);
                seen += 1;
                if (extension === 0x0039) {
                    this.remoteParameters = quicDecodeTransportParameters(Buffer.from(value));
                } else if (extension === 0x0010 && value.length >= 3) {
                    this.negotiatedAlpn = value.subarray(3).toString('utf8');
                }
            }
            return null;
        }
        if (type === 11) {
            // Certificate 消息: 提取第一个条目 (叶子证书 DER) 供连接级软校验
            const body = message.subarray(4);
            if (body.length >= 4) {
                const pos = 1 + body[0];   // certificate_request_context
                if (pos + 3 <= body.length) {
                    const listLen = body.readUIntBE(pos, 3);
                    if (pos + 3 + listLen <= body.length && listLen >= 3) {
                        const certLen = body.readUIntBE(pos + 3, 3);
                        if (certLen > 0 && pos + 6 + certLen <= body.length) {
                            this.leafCert = Buffer.from(body.subarray(pos + 6, pos + 6 + certLen));
                        }
                    }
                }
            }
            return null;
        }
        if (type === 15 || type === 4) {
            return null;
        }
        if (type !== 20) {
            return null;
        }
        const serverFinished = this.messages[this.messages.length - 1];
        const verifyData = serverFinished.subarray(4);
        const hashBefore = this.transcript(this.messages.length - 1);
        const serverFinishedKey = hkdfExpandLabel(this.hash, this.serverHandshakeSecret, 'finished', Buffer.alloc(0), this.hashLength);
        const expected = crypto.createHmac(this.hash, serverFinishedKey).update(hashBefore).digest();
        const verified = expected.length === verifyData.length && crypto.timingSafeEqual(expected, verifyData);
        const clientFinishedKey = hkdfExpandLabel(this.hash, this.clientHandshakeSecret, 'finished', Buffer.alloc(0), this.hashLength);
        const hashForClient = this.transcript();
        const clientVerify = crypto.createHmac(this.hash, clientFinishedKey).update(hashForClient).digest();
        const finished = tlsMessage(20, clientVerify);
        // The application traffic secrets are salted with the transcript through the
        // server's Finished; our own Finished is only hashed afterwards, for the peer.
        const zeros = Buffer.alloc(this.hashLength);
        const derived = hkdfExpandLabel(this.hash, this.handshakeSecret, 'derived', crypto.createHash(this.hash).digest(), this.hashLength);
        const master = hkdfExtract(this.hash, derived, zeros);
        const appHash = this.transcript();
        this.messages.push(finished);
        const clientApp = hkdfExpandLabel(this.hash, master, 'c ap traffic', appHash, this.hashLength);
        const serverApp = hkdfExpandLabel(this.hash, master, 's ap traffic', appHash, this.hashLength);
        this.state = 'complete';
        return {
            verified: verified,
            finished: finished,
            send: new QuicKeys(this.hash, this.cipher, clientApp),
            recv: new QuicKeys(this.hash, this.cipher, serverApp),
        };
    }
}

// 🔐 QUIC 模式边缘证书软校验: 与 h2 路径 verifyEdgeCertificate 同级 (issuer O/OU/CN + SAN,
// 非链式验证 — Cloudflare 私有 "CloudFlare Origin SSL" CA 不在公共信任库, 系统校验必失败)。
// 数据源为手写 TLS 1.3 握手 Certificate 消息中的叶子证书 DER; node X509Certificate 的
// issuer/subject 串会对逗号做 \, 转义, 匹配前需反转义。KISAMA_EDGE_INSECURE=true 整体豁免。
function verifyEdgeQuicCertificate(der) {
    if (!der || !der.length) return 'no edge certificate in TLS handshake';
    let cert;
    try {
        cert = new crypto.X509Certificate(der);
    } catch (err) {
        return 'unreadable edge certificate: ' + err.message;
    }
    const unescape = (s) => String(s || '').replace(/\\,/g, ',');
    const issuer = unescape(cert.issuer);
    const subject = unescape(cert.subject);
    if (!issuer.includes('O=CloudFlare, Inc.')) return 'issuer O mismatch: ' + issuer;
    if (!issuer.includes('OU=CloudFlare Origin SSL')) return 'issuer OU mismatch: ' + issuer;
    if (!subject.includes('CN=CloudFlare Origin Certificate')) return 'subject CN mismatch: ' + subject;
    const names = String(cert.subjectAltName || '').split(',').map((s) => s.trim().toLowerCase());
    const host = 'quic.cftunnel.com';
    const covered = names.some((n) => {
        if (!n.startsWith('dns:')) return false;
        const dns = n.slice(4);
        return dns === host || dns === 'cftunnel.com' || (dns.startsWith('*.') && host.endsWith(dns.slice(1)));
    });
    if (!covered) return 'SAN does not cover quic.cftunnel.com (SAN=' + String(cert.subjectAltName || '') + ')';
    return null;
}

class QuicStream {
    constructor(connection, id, initiator) {
        this.connection = connection;
        this.id = id;
        this.initiator = initiator;
        this.send = new QuicByteSender(connection);
        this.sentEnd = 0;
        this.recv = Buffer.alloc(0);
        this.receiver = new QuicOffsetBuffer();
        this.ended = false;
        this.reset = false;
        this.consumed = 0;
        this.peerLimit = 0;
        this.localLimit = connection.localStreamData;
        this.userData = null;
    }

    write(payload, end) {
        this.send.append(payload, Boolean(end));
        this.connection.markSendReady(this);
    }
}

class QuicConnection {
    constructor(options) {
        this.log = options.logger;
        this.host = options.host;
        this.port = options.port;
        this.serverName = options.serverName || options.host;
        this.alpn = options.alpn || QUIC_ALPN;
        this.maxPacket = options.maxPacket || QUIC_MAX_PACKET;
        this.idleTimeout = options.idleTimeout === undefined ? 30000 : options.idleTimeout;
        this.keepAlive = options.keepAlive === undefined ? 1000 : options.keepAlive;
        this.maxInflight = options.maxInflight || 256;
        this.localMaxData = options.localMaxData || 1 << 22;
        this.localStreamData = options.localStreamData || 1 << 20;
        this.verifyCertificate = options.verifyCertificate === true;
        this.onReady = options.onReady || function () {};
        this.onStream = options.onStream || function () {};
        this.onStreamData = options.onStreamData || function () {};
        this.onStreamEnd = options.onStreamEnd || function () {};
        this.onClose = options.onClose || function () {};
        this.ourCid = crypto.randomBytes(8);
        this.peerCid = crypto.randomBytes(8);
        this.receiveWindow = options.receiveWindow || 1 << 20;
        this._stoppedFlag = false;
        this.localParameters = quicEncodeTransportParameters([
            [QUIC_PARAM.maxIdleTimeout, this.idleTimeout],
            [QUIC_PARAM.initialMaxData, this.localMaxData],
            [QUIC_PARAM.initialMaxStreamDataBidiLocal, this.localStreamData],
            [QUIC_PARAM.initialMaxStreamDataBidiRemote, this.localStreamData],
            [QUIC_PARAM.initialMaxStreamDataUni, this.localStreamData],
            [QUIC_PARAM.initialMaxStreamsBidi, 1 << 24],
            [QUIC_PARAM.initialMaxStreamsUni, 1 << 24],
            [QUIC_PARAM.maxUdpPayloadSize, this.maxPacket],
            [QUIC_PARAM.activeConnectionIdLimit, 8],
            [QUIC_PARAM.initialSourceConnectionId, this.ourCid],
        ]);
        this.tls = new QuicTlsClient(this.serverName, this.alpn, this.localParameters);
        this.socket = null;
        this.closed = null;
        this.closing = false;
        this.closeReason = null;
        this.settle = null;
        this.keys = [null, null, null];
        // Packet protection generations, newest first. Each peer key update adds one and
        // the previous generation stays readable for a packet that was reordered across it.
        this.appRecvGens = [];
        this.appSendKeys = [null, null];
        // The phase bit we mark our own packets with; it advances the moment a peer packet
        // opens with the next generation, so the acknowledgement already carries new keys.
        this.appKeyPhase = 0;
        this.pnSend = [0, 0, 0];
        this.largestRecv = [-1, -1, -1];
        this.recvRanges = [[], [], []];
        this.ackPending = [false, false, false];
        this.inFlight = [[], [], []];
        this.cryptoSend = [new QuicByteSender(this), new QuicByteSender(this), new QuicByteSender(this)];
        this.tlsOffsets = [new QuicOffsetBuffer(), new QuicOffsetBuffer(), new QuicOffsetBuffer()];
        this.serverHello = Buffer.alloc(0);
        this.handshakeBytes = Buffer.alloc(0);
        this.streams = new Map();
        this.sendReady = [];
        this.nextLocalStream = 0;
        this.peerMaxData = 0;
        this.peerStreamRemote = 0;
        this.peerStreamLocal = 0;
        this.connectionSent = 0;
        this.consumedTotal = 0;
        this.creditMaxData = false;
        this.creditReady = [];
        this.pendingOneOff = [];
        this.handshakeComplete = false;
        this.finishedSent = false;
        this.confirmed = false;
        this.registered = false;   // 注册结果由 ControlStream 写回 (与 H2Connection 同名语义)
        this.registrationFailed = false;
        this.pto = 250;
        this.retransmits = 0;
        // RFC 9002 sender state: without a congestion window a single tick can put the whole
        // response on the wire, which the edge's receive buffer drops and we then re-burst.
        this.initialWindow = options.initialWindow || 10 * this.maxPacket;
        this.minWindow = 2 * this.maxPacket;
        this.congestionWindow = this.initialWindow;
        this.slowStartThreshold = Infinity;
        this.maxWindow = this.maxInflight * this.maxPacket;
        this.srtt = null;
        this.rttvar = null;
        this.peerMaxAckDelay = 25;
        this.ptoCount = 0;
        this.kPacketThreshold = 3;
        this.lastReceived = 0;
        this.lastEliciting = 0;
        this.pingPending = false;
        this.initialSent = 0;
        this.interval = null;
        this.peerToken = Buffer.alloc(0);
        this.remoteParameters = null;
        this.stats = { rx: 0, tx: 0, rxBytes: 0, txBytes: 0, dropped: 0, retransmits: 0 };
    }

    // ControlStream 在注册失败时置 connection.stopped = true (与 H2Connection 同名语义):
    // 对 QUIC 连接该赋值直接触发应用层关闭, 交还重连循环计失败数
    get stopped() {
        return this._stoppedFlag === true;
    }

    set stopped(value) {
        this._stoppedFlag = value === true;
        if (this._stoppedFlag && !this.closed && !this.closing) {
            this.close('registration failed');
        }
    }

    connect() {
        return new Promise((resolve, reject) => {
            this.settle = { resolve: resolve, reject: reject };
            this.socket = dgram.createSocket('udp4');
            this.socket.on('message', (message) => {
                try {
                    this._onDatagram(message);
                } catch (err) {
                    this._fail('receive failed: ' + err);
                }
            });
            this.socket.on('error', (err) => {
                if (!this.closed) {
                    this._fail('socket error: ' + err.message);
                }
            });
            this.socket.bind(0, '0.0.0.0', () => this._start());
        });
    }

    _start() {
        this.keys[QUIC_EPOCH_INITIAL] = quicInitialKeys(this.peerCid, true);
        this.cryptoSend[QUIC_EPOCH_INITIAL].append(this.tls.buildClientHello(), false);
        this.lastReceived = Date.now();
        this.lastEliciting = Date.now();
        this.log.debug('quic dial ' + this.host + ':' + this.port + ' alpn=' + this.alpn + ' dcid=' + this.peerCid.toString('hex'));
        this.interval = setInterval(() => this._tick(), 20);
        this._tick();
    }

    _tick() {
        if (this.closed) {
            return;
        }
        const now = Date.now();
        this._checkLoss(now);
        if (this.keepAlive && this.handshakeComplete && now - this.lastEliciting >= this.keepAlive) {
            this.pingPending = true;
        }
        let sent = 0;
        while (
            sent < 16 &&
            this._totalInFlight() < this.maxInflight &&
            (this._inFlightBytes() < this._sendWindow() || this._ackDue() || this.closing)
        ) {
            const built = this._buildPacket();
            if (built === null) {
                break;
            }
            this._transmit(built);
            sent += 1;
        }
        if (now - this.lastReceived > Math.max(this.idleTimeout, 15000)) {
            this._fail('peer idle for ' + (now - this.lastReceived) + 'ms');
        }
    }

    _totalInFlight() {
        return this.inFlight[0].length + this.inFlight[1].length + this.inFlight[2].length;
    }

    // Acknowledgements and connection closes are not congestion-limited: blocking them behind a
    // full window would stall the peer instead of pacing ourselves.
    _ackDue() {
        for (let epoch = 0; epoch < 3; epoch++) {
            if (this.keys[epoch] !== null && this.ackPending[epoch] && this.recvRanges[epoch].length) {
                return true;
            }
        }
        return false;
    }

    _inFlightBytes() {
        let bytes = 0;
        for (let epoch = 0; epoch < 3; epoch++) {
            for (const entry of this.inFlight[epoch]) {
                bytes += entry.bytes;
            }
        }
        return bytes;
    }

    // The handshake is a handful of small, already-bounded flights; only the data plane needs
    // to be windowed, otherwise the initial limit could stall the very flight that sets it up.
    _sendWindow() {
        return this.handshakeComplete ? this.congestionWindow : Infinity;
    }

    _ptoDuration() {
        return Math.max(this.pto * Math.pow(2, this.ptoCount), 20);
    }

    _recordRttSample(sample) {
        if (this.srtt === null) {
            this.srtt = sample;
            this.rttvar = sample / 2;
        } else {
            this.rttvar = (this.rttvar * 3 + Math.abs(this.srtt - sample)) / 4;
            this.srtt = (this.srtt * 7 + sample) / 8;
        }
        this.pto = Math.round(this.srtt + 4 * this.rttvar + this.peerMaxAckDelay);
    }

    _onLoss(epoch) {
        this.slowStartThreshold = Math.max(Math.floor(this.congestionWindow / 2), 2 * this.minWindow);
        this.congestionWindow = this.minWindow;
        this.log.debug(
            'quic loss epoch=' + QUIC_EPOCH_NAMES[epoch] +
            ' cwnd=' + this.congestionWindow + ' ssthresh=' + this.slowStartThreshold +
            ' srtt=' + (this.srtt === null ? '-' : Math.round(this.srtt)) + 'ms'
        );
    }

    _checkLoss(now) {
        for (let epoch = 0; epoch < 3; epoch++) {
            const list = this.inFlight[epoch];
            if (!list.length) {
                continue;
            }
            if (now - list[0].time < this._ptoDuration()) {
                continue;
            }
            // RFC 9002 6.2.1: a PTO retransmits the oldest unacknowledged packet only, so an
            // unacked tail is probed instead of being dumped on the wire again in one burst.
            const entry = list[0];
            this.inFlight[epoch] = list.slice(1);
            this._returnLost(epoch, entry);
            this.retransmits += 1;
            this.stats.retransmits += 1;
            this.ptoCount += 1;
            this.log.debug('quic pto epoch=' + QUIC_EPOCH_NAMES[epoch] + ' pn=' + entry.pn + ' pending=' + this.inFlight[epoch].length + ' pto=' + this._ptoDuration());
            if (this.retransmits > 24) {
                this._fail('no response after ' + this.retransmits + ' retransmits');
                return;
            }
        }
    }

    _returnLost(epoch, entry) {
        if (entry.crypto) {
            this.cryptoSend[epoch].lossRanges([entry.crypto]);
        }
        for (const item of entry.streams) {
            item.stream.send.lossRanges([{ start: item.start, length: item.length }]);
            if (item.fin) {
                item.stream.send.lossRanges([{ start: item.start + item.length, length: 0, fin: true }]);
            }
            this.markSendReady(item.stream);
        }
    }

    onSendProgress() {
        this.retransmits = 0;
        this.ptoCount = 0;
    }

    _discardEpoch(epoch, reason) {
        if (this.keys[epoch] === null) {
            return;
        }
        this.keys[epoch] = null;
        this.inFlight[epoch] = [];
        this.log.debug('quic discarded ' + QUIC_EPOCH_NAMES[epoch] + ' keys (' + reason + ')');
    }

    // RFC 9000 §4.1.2: HANDSHAKE_DONE / 1-RTT 包被 ACK 均确认握手, 握手即确认
    _flushHandshakeAck() {
        // 丢弃握手密钥前冲刷未确认的 handshake-epoch ACK: 边缘的 ack-eliciting 握手包
        // (如 Finished 的 CRYPTO 包) 若不获 ACK 会按 RFC 9002 无限重传, 而密钥丢弃后
        // _pickEpoch 因 keys=null 永远跳过 HANDSHAKE, ACK 再也发不出去
        const epoch = QUIC_EPOCH_HANDSHAKE;
        const keys = this.keys[epoch];
        if (keys === null || !this.ackPending[epoch] || this.recvRanges[epoch].length === 0) {
            return;
        }
        const frame = quicEncodeAck(this.recvRanges[epoch].slice(-16));
        this.ackPending[epoch] = false;
        const packetNumber = this.pnSend[epoch]++;
        const built = this._header(epoch, QUIC_PN_LEN + frame.length + 16, packetNumber);
        const aad = Buffer.concat([built.header, built.pnBytes]);
        const sealed = Buffer.concat([aad, keys.send.seal(packetNumber, aad, frame)]);
        const protectedPacket = quicApplyProtection(keys.send, sealed, built.pnOffset, built.long);
        if (protectedPacket === null) {
            this.ackPending[epoch] = true;
            return;
        }
        this._transmit({ epoch: epoch, packet: protectedPacket, pn: packetNumber,
            meta: { crypto: null, streams: [] }, ackEliciting: false });
    }

    _confirmHandshake() {
        if (this.confirmed || !this.handshakeComplete || !this.finishedSent) {
            return;
        }
        this._flushHandshakeAck();
        this.confirmed = true;
        this._discardEpoch(QUIC_EPOCH_HANDSHAKE, 'handshake confirmed');
        this._discardEpoch(QUIC_EPOCH_INITIAL, 'handshake confirmed');
    }

    _headerOverhead(epoch) {
        const tag = 16;
        if (epoch === QUIC_EPOCH_APPLICATION) {
            return 1 + this.peerCid.length + QUIC_PN_LEN + tag;
        }
        if (epoch === QUIC_EPOCH_HANDSHAKE) {
            return 1 + 4 + 1 + this.peerCid.length + 1 + this.ourCid.length + 2 + QUIC_PN_LEN + tag;
        }
        return (
            1 + 4 +
            1 + this.peerCid.length +
            1 + this.ourCid.length +
            quicVarintSize(this.peerToken.length) + this.peerToken.length +
            2 + QUIC_PN_LEN + tag
        );
    }

    _header(epoch, protectedLength, packetNumber) {
        const writer = new QuicWriter();
        const pnBytes = Buffer.alloc(QUIC_PN_LEN);
        pnBytes.writeUInt32BE(packetNumber >>> 0, 0);
        if (epoch === QUIC_EPOCH_APPLICATION) {
            writer.byte(0x40 | (this.appKeyPhase << 2) | (QUIC_PN_LEN - 1));
            writer.bytes(this.peerCid);
            return { header: writer.build(), pnBytes: pnBytes, pnOffset: 1 + this.peerCid.length, long: false };
        }
        const type = epoch === QUIC_EPOCH_INITIAL ? 0 : 2;
        writer.byte(0xc0 | (type << 4) | (QUIC_PN_LEN - 1));
        writer.u32(QUIC_VERSION);
        writer.byte(this.peerCid.length).bytes(this.peerCid);
        if (epoch === QUIC_EPOCH_INITIAL) {
            writer.byte(this.ourCid.length).bytes(this.ourCid);
            writer.varint(this.peerToken.length);
            if (this.peerToken.length) {
                writer.bytes(this.peerToken);
            }
        } else {
            writer.byte(0).bytes(Buffer.alloc(0));
        }
        const lengthField = Buffer.alloc(2);
        lengthField.writeUInt16BE(0x4000 | protectedLength, 0);
        writer.bytes(lengthField);
        const header = writer.build();
        return { header: header, pnBytes: pnBytes, pnOffset: header.length, long: true };
    }

    _pickEpoch() {
        for (const epoch of [QUIC_EPOCH_INITIAL, QUIC_EPOCH_HANDSHAKE, QUIC_EPOCH_APPLICATION]) {
            if (this.keys[epoch] === null) {
                continue;
            }
            if (this.ackPending[epoch] && this.recvRanges[epoch].length) {
                return epoch;
            }
            if (this._pendingOneOff(epoch).length) {
                return epoch;
            }
            if (this.cryptoSend[epoch].pending.length) {
                return epoch;
            }
            if (epoch === QUIC_EPOCH_APPLICATION && (this.sendReady.length || this.creditReady.length || this.pingPending || this.closing)) {
                return epoch;
            }
        }
        return -1;
    }

    _pendingOneOff(epoch) {
        return this.pendingOneOff.filter((item) => item.epoch === epoch);
    }

    _buildPacket() {
        const epoch = this._pickEpoch();
        if (epoch < 0) {
            return null;
        }
        let budget = this.maxPacket - this._headerOverhead(epoch);
        if (budget < 16) {
            return null;
        }
        const frames = [];
        const meta = { crypto: null, streams: [], ping: false, closing: false, oneOff: false };
        if (this.ackPending[epoch] && this.recvRanges[epoch].length) {
            const frame = quicEncodeAck(this.recvRanges[epoch].slice(-16));
            frames.push(frame);
            budget -= frame.length;
            this.ackPending[epoch] = false;
        }
        for (const item of this._pendingOneOff(epoch)) {
            if (item.frame.length > budget - 16) {
                break;
            }
            frames.push(item.frame);
            budget -= item.frame.length;
            this.pendingOneOff.splice(this.pendingOneOff.indexOf(item), 1);
            meta.oneOff = true;
        }
        const sender = this.cryptoSend[epoch];
        if (sender.pending.length && budget > 16) {
            const chunk = sender.take(budget - 12);
            const writer = new QuicWriter();
            writer.byte(QUIC_FRAME.crypto).varint(chunk.start).varint(chunk.length).bytes(chunk.bytes);
            const frame = writer.build();
            frames.push(frame);
            budget -= frame.length;
            meta.crypto = chunk;
        }
        if (epoch === QUIC_EPOCH_APPLICATION) {
            this._creditFrames(frames, meta, budget);
            // Stream bytes only fill the room the congestion window still has open.
            this._streamFrames(frames, meta, Math.min(budget, this._sendWindow() - this._inFlightBytes()));
        }
        if (epoch === QUIC_EPOCH_APPLICATION && this.closing) {
            const writer = new QuicWriter();
            writer.byte(QUIC_FRAME.applicationClose).varint(0).varint(0).bytes(Buffer.from(this.closeReason || 'close', 'utf8').subarray(0, 64));
            frames.push(writer.build());
            meta.closing = true;
        } else if (epoch === QUIC_EPOCH_APPLICATION && this.pingPending) {
            frames.push(Buffer.from([QUIC_FRAME.ping]));
            this.pingPending = false;
            meta.ping = true;
        }
        if (!frames.length) {
            return null;
        }
        let payload = Buffer.concat(frames);
        if (epoch === QUIC_EPOCH_INITIAL && !this.handshakeComplete) {
            // RFC 9000 §14.1: 客户端携带 Initial 包的数据报必须填充至 1200 字节 —
            // 边缘 (quic-go) 丢弃过小的客户端 Initial, ACK-only 小包会让 ServerHello
            // 被 PTO 无限重传 (实机取证: 1280B 重传包内容恒为 CRYPTO off=0 len=90)
            const pad = QUIC_MIN_INITIAL - this._headerOverhead(epoch) - payload.length;
            if (pad > 0) {
                payload = Buffer.concat([payload, Buffer.alloc(pad)]);
            }
        }
        const packetNumber = this.pnSend[epoch]++;
        const sendKeys = epoch === QUIC_EPOCH_APPLICATION ? this.appSendKeys[this.appKeyPhase] : this.keys[epoch].send;
        const built = this._header(epoch, QUIC_PN_LEN + payload.length + 16, packetNumber);
        const aad = Buffer.concat([built.header, built.pnBytes]);
        const sealed = Buffer.concat([aad, sendKeys.seal(packetNumber, aad, payload)]);
        const protectedPacket = quicApplyProtection(sendKeys, sealed, built.pnOffset, built.long);
        if (protectedPacket === null) {
            this._fail('packet too small for header protection sample');
            return null;
        }
        return {
            epoch: epoch,
            packet: protectedPacket,
            pn: packetNumber,
            meta: meta,
            ackEliciting: Boolean(meta.crypto || meta.streams.length || meta.ping || meta.closing || meta.oneOff),
            summary: this._frameSummary(frames),
        };
    }

    _frameSummary(frames) {
        const names = [];
        for (const frame of frames) {
            const type = frame[0];
            if (type === QUIC_FRAME.ack) {
                names.push('ack');
            } else if (type === QUIC_FRAME.crypto) {
                names.push('crypto');
            } else if (type === QUIC_FRAME.ping) {
                names.push('ping');
            } else if (type === QUIC_FRAME.stream) {
                names.push('stream');
            } else if (type === QUIC_FRAME.maxData) {
                names.push('max-data');
            } else if (type === QUIC_FRAME.maxStreamData) {
                names.push('max-stream-data');
            } else if (type === QUIC_FRAME.pathResponse) {
                names.push('path-response');
            } else {
                names.push('0x' + type.toString(16));
            }
        }
        return names.join(',');
    }

    _creditFrames(frames, meta, budget) {
        if (this.creditMaxData && budget > 12) {
            const writer = new QuicWriter();
            writer.byte(QUIC_FRAME.maxData).varint(this.localMaxData);
            frames.push(writer.build());
            this.creditMaxData = false;
            budget -= frames[frames.length - 1].length;
        }
        for (const stream of this.creditReady.slice()) {
            if (budget < 20) {
                break;
            }
            const writer = new QuicWriter();
            writer.byte(QUIC_FRAME.maxStreamData).varint(stream.id).varint(stream.localLimit);
            const frame = writer.build();
            frames.push(frame);
            budget -= frame.length;
            const index = this.creditReady.indexOf(stream);
            this.creditReady.splice(index, 1);
        }
    }

    _peerStreamLimit(stream) {
        if (stream.peerLimit) {
            return stream.peerLimit;
        }
        return stream.initiator === 'local' ? this.peerStreamRemote : this.peerStreamLocal;
    }

    _streamFrames(frames, meta, budget) {
        for (const stream of this.sendReady.slice()) {
            if (budget < 24) {
                break;
            }
            const credit = Math.min(this.peerMaxData - this.connectionSent, this._peerStreamLimit(stream) - stream.sentEnd);
            if (credit <= 0) {
                break;
            }
            const chunk = stream.send.take(Math.min(budget - 20, credit));
            if (chunk === null) {
                if (stream.send.takeFin()) {
                    const writer = new QuicWriter();
                    writer.byte(QUIC_FRAME.stream | 0x04 | 0x02 | 0x01).varint(stream.id).varint(stream.send.data.length).varint(0);
                    const frame = writer.build();
                    frames.push(frame);
                    budget -= frame.length;
                    meta.streams.push({ stream: stream, start: stream.send.data.length, length: 0, fin: true });
                } else {
                    this._dropSendReady(stream);
                }
                continue;
            }
            const atEnd = chunk.start + chunk.length >= stream.send.data.length;
            const flags = 0x04 | 0x02 | (atEnd && stream.send.fin ? 0x01 : 0);
            const writer = new QuicWriter();
            writer.byte(QUIC_FRAME.stream | flags).varint(stream.id).varint(chunk.start).varint(chunk.length).bytes(chunk.bytes);
            const frame = writer.build();
            frames.push(frame);
            budget -= frame.length;
            meta.streams.push({ stream: stream, start: chunk.start, length: chunk.length, fin: atEnd && stream.send.fin, retransmitted: chunk.retransmitted });
            const novel = Math.max(0, chunk.start + chunk.length - stream.sentEnd);
            stream.sentEnd = Math.max(stream.sentEnd, chunk.start + chunk.length);
            this.connectionSent += novel;
            if (stream.send.idle()) {
                this._dropSendReady(stream);
            }
        }
    }

    _dropSendReady(stream) {
        const index = this.sendReady.indexOf(stream);
        if (index >= 0) {
            this.sendReady.splice(index, 1);
        }
    }

    markSendReady(stream) {
        if (this.sendReady.indexOf(stream) < 0) {
            this.sendReady.push(stream);
        }
    }

    openStream() {
        const stream = new QuicStream(this, this.nextLocalStream, 'local');
        this.nextLocalStream += 4;
        this.streams.set(stream.id, stream);
        return stream;
    }

    async sendData(streamId, payload, endStream) {
        const stream = this.streams.get(streamId);
        if (stream === undefined) {
            throw new Error('unknown stream ' + streamId);
        }
        stream.write(payload, endStream);
    }

    _transmit(built) {
        if (this.socket === null || this.closed) {
            return;
        }
        this.socket.send(built.packet, 0, built.packet.length, this.port, this.host, (err) => {
            if (err && !this.closed) {
                this.log.debug('quic send failed: ' + err.message);
            }
        });
        if (process.env.KISAMA_QUIC_DEBUG && built.epoch === 1 && this.stats.tx <= 40) this.log.warning('QUICDBG-HS pn=' + built.pn + ' hex=' + built.packet.toString('hex'));
this.stats.tx += 1;
        this.stats.txBytes += built.packet.length;
        if (built.epoch === QUIC_EPOCH_INITIAL) {
            this.initialSent += 1;
        }
        if (built.epoch === QUIC_EPOCH_HANDSHAKE && this.cryptoSend[QUIC_EPOCH_HANDSHAKE].pending.length === 0) {
            this.finishedSent = true;
        }
        this.log.debug('tx ' + built.packet.length + 'B ' + QUIC_EPOCH_NAMES[built.epoch] + ' pn=' + built.pn + ' [' + built.summary + ']');
        if (built.ackEliciting) {
            const retransmitted =
                (built.meta.crypto !== null && built.meta.crypto.retransmitted === true) ||
                built.meta.streams.some((item) => item.retransmitted === true);
            this.inFlight[built.epoch].push({
                pn: built.pn,
                time: Date.now(),
                bytes: built.packet.length,
                crypto: built.meta.crypto,
                streams: built.meta.streams,
                retransmitted: retransmitted,
            });
            this.lastEliciting = Date.now();
        }
    }

    _onDatagram(message) {
        this.stats.rx += 1;
        this.stats.rxBytes += message.length;
        this.lastReceived = Date.now();
        let offset = 0;
        while (offset < message.length) {
            const first = message[offset];
            if (!(first & 0x80)) {
                this._handleShort(message.subarray(offset));
                return;
            }
            // Parse from the packet's own first byte so pnOffset stays relative to the slice.
            const view = message.subarray(offset);
            const parsed = this._parseLong(view, 0);
            if (parsed === null) {
                return;
            }
            if (parsed.version !== QUIC_VERSION) {
                this.log.debug('rx version negotiation or unknown version 0x' + parsed.version.toString(16));
                return;
            }
            if (parsed.type === 3) {
                this._handleRetry(parsed);
                return;
            }
            const end = Math.min(view.length, parsed.pnOffset + parsed.length);
            this._handleLong(view.subarray(0, end), parsed);
            offset += end;
        }
    }

    _parseLong(packet, offset) {
        if (packet.length - offset < 7) {
            return null;
        }
        const first = packet[offset];
        const version = packet.readUInt32BE(offset + 1);
        const type = (first & 0x30) >> 4;
        let pos = offset + 5;
        const dcidLength = packet[pos];
        pos += 1;
        if (packet.length - pos < dcidLength + 1) {
            return null;
        }
        const dcid = packet.subarray(pos, pos + dcidLength);
        pos += dcidLength;
        const scidLength = packet[pos];
        pos += 1;
        if (packet.length - pos < scidLength) {
            return null;
        }
        const scid = packet.subarray(pos, pos + scidLength);
        pos += scidLength;
        let token = Buffer.alloc(0);
        if (type === 0) {
            const parsed = quicReadVarint(packet, pos);
            if (parsed === null) {
                return null;
            }
            pos += parsed[1];
            const length = Number(parsed[0]);
            if (packet.length - pos < length) {
                return null;
            }
            token = packet.subarray(pos, pos + length);
            pos += length;
        }
        if (type === 3) {
            return { first: first, type: type, version: version, dcid: dcid, scid: scid, token: packet.subarray(pos, packet.length - 16), pnOffset: 0, length: 0, retry: true };
        }
        const lengthField = quicReadVarint(packet, pos);
        if (lengthField === null) {
            return null;
        }
        pos += lengthField[1];
        return {
            first: first,
            type: type,
            version: version,
            dcid: dcid,
            scid: scid,
            token: token,
            pnOffset: pos,
            length: Number(lengthField[0]),
            retry: false,
        };
    }

    _handleRetry(parsed) {
        this.log.debug('rx retry token=' + parsed.token.length + 'B scid=' + parsed.scid.toString('hex'));
        this.peerToken = Buffer.from(parsed.token);
        this.peerCid = Buffer.from(parsed.scid);
        this.pnSend[QUIC_EPOCH_INITIAL] = 0;
        this.inFlight[QUIC_EPOCH_INITIAL] = [];
        this.cryptoSend[QUIC_EPOCH_INITIAL].loss();
        this.initialSent = 0;
    }

    _epochForType(type) {
        if (type === 0 || type === 1) {
            return QUIC_EPOCH_INITIAL;
        }
        return QUIC_EPOCH_HANDSHAKE;
    }

    _handleLong(packet, parsed) {
        const epoch = this._epochForType(parsed.type);
        const keys = this.keys[epoch];
        if (keys === null) {
            this.stats.dropped += 1;
            return;
        }
        if (parsed.length < QUIC_PN_LEN) {
            this.stats.dropped += 1;
            return;
        }
        const removed = quicRemoveProtection(keys.recv, packet, parsed.pnOffset, true);
        if (removed === null) {
            this.stats.dropped += 1;
            return;
        }
        const [plainHeader, truncated] = removed;
        const pnLength = (plainHeader[0] & 0x03) + 1;
        const packetNumber = quicDecodePacketNumber(Math.max(this.largestRecv[epoch], 0), pnLength * 8, truncated);
        let payload;
        try {
            payload = keys.recv.open(packetNumber, plainHeader, packet.subarray(parsed.pnOffset + pnLength));
        } catch (err) {
            this.stats.dropped += 1;
            this.log.debug('rx ' + packet.length + 'B ' + QUIC_EPOCH_NAMES[epoch] + ' undecryptable');
            return;
        }
        if (epoch === QUIC_EPOCH_INITIAL && parsed.dcid.length === this.ourCid.length && parsed.dcid.equals(this.ourCid)) {
            if (!this.handshakeComplete && parsed.scid.length && !this.peerCid.equals(parsed.scid)) {
                this.peerCid = Buffer.from(parsed.scid);
                this.log.debug('quic peer cid ' + this.peerCid.toString('hex'));
            }
        }
        this._recordReceived(epoch, packetNumber);
        this.log.debug('rx ' + packet.length + 'B ' + QUIC_EPOCH_NAMES[epoch] + ' pn=' + packetNumber);
        if (epoch === QUIC_EPOCH_HANDSHAKE) {
            this._discardEpoch(QUIC_EPOCH_INITIAL, 'handshake packet received');
        }
        this._handleFrames(payload, epoch);
    }

    _handleShort(packet) {
        const keys = this.keys[QUIC_EPOCH_APPLICATION];
        if (keys === null) {
            this.stats.dropped += 1;
            this.log.debug('rx ' + packet.length + 'B one-rtt before handshake');
            return;
        }
        if (this.appRecvGens.length === 0) {
            this.appRecvGens.push({ keys: keys.recv, phase: 0 });
        }
        const pnOffset = 1 + this.ourCid.length;
        // The key phase lives in the protected byte, so a packet's generation is only
        // known by the key that opens it. A key update always changes the AEAD key, and
        // RFC 9001 derives a new header protection key with it, but the argo edge keeps
        // using the original one, so that key stays in the trial list for the whole
        // connection while each generation also offers its own for peers that rotate it.
        const headerKeys = [];
        for (const candidate of [keys.recv].concat(this.appRecvGens.map((gen) => gen.keys))) {
            if (headerKeys.indexOf(candidate) < 0) {
                headerKeys.push(candidate);
            }
        }
        const newest = this.appRecvGens[0];
        const gens = this.appRecvGens.concat([
            { keys: quicNextKeys(newest.keys), phase: 1 - newest.phase, next: true },
        ]);
        for (const gen of gens) {
            for (const header of gen.next ? headerKeys.concat([gen.keys]) : headerKeys) {
                const removed = quicRemoveProtection(header, packet, pnOffset, false);
                if (removed === null) {
                    continue;
                }
                const [plainHeader, truncated] = removed;
                const pnLength = (plainHeader[0] & 0x03) + 1;
                const packetNumber = quicDecodePacketNumber(Math.max(this.largestRecv[QUIC_EPOCH_APPLICATION], 0), pnLength * 8, truncated);
                let payload;
                try {
                    payload = gen.keys.open(packetNumber, plainHeader, packet.subarray(pnOffset + pnLength));
                } catch (err) {
                    continue;
                }
                if (gen.next) {
                    // RFC 9001 section 6.1: opening with the next generation proves the peer
                    // updated keys. Our own phase advances at that instant, so the
                    // acknowledgement for this packet already carries the new keys; a peer
                    // that tracks "did you update before acking me" rejects anything earlier.
                    this.appRecvGens.unshift({ keys: gen.keys, phase: gen.phase });
                    if (this.appRecvGens.length > 2) {
                        this.appRecvGens.pop();
                    }
                    this.appKeyPhase = gen.phase;
                    this.appSendKeys[gen.phase] = quicNextKeys(this.appSendKeys[1 - gen.phase], true);
                    this.log.debug('quic key phase ' + gen.phase + ' updated');
                }
                this._recordReceived(QUIC_EPOCH_APPLICATION, packetNumber);
                this.log.debug('rx ' + packet.length + 'B one-rtt pn=' + packetNumber);
                // RFC 9000 §4.1.2: 客户端确认握手只基于 HANDSHAKE_DONE 或 1-RTT 包被 ACK;
                // 解密 1-RTT 包本身不确认 — 过急确认会在边缘 coalesce 的 hs+1RTT 数据报里
                // 先于待发 handshake-epoch ACK 丢弃握手密钥, 令边缘 ack-eliciting 握手包
                // (Finished CRYPTO 包) 永远等不到 ACK 而无限重传 (实机取证)
                this._handleFrames(payload, QUIC_EPOCH_APPLICATION);
                return;
            }
        }
        this.stats.dropped += 1;
        this.log.debug('rx ' + packet.length + 'B one-rtt undecryptable');
    }

    _recordReceived(epoch, packetNumber) {
        this.recvRanges[epoch] = rangesUnion(this.recvRanges[epoch], [{ start: packetNumber, length: 1 }]);
        if (packetNumber > this.largestRecv[epoch]) {
            this.largestRecv[epoch] = packetNumber;
        }
        this.ackPending[epoch] = true;
    }

    _applyAck(epoch, ranges) {
        const now = Date.now();
        const sent = this.inFlight[epoch];
        let largestAcked = -1;
        for (const range of ranges) {
            largestAcked = Math.max(largestAcked, range.start + range.length - 1);
        }
        const keep = [];
        let ackedBytes = 0;
        let sample = null;
        for (const entry of sent) {
            let acked = false;
            for (const range of ranges) {
                if (entry.pn >= range.start && entry.pn < range.start + range.length) {
                    acked = true;
                    break;
                }
            }
            if (!acked) {
                keep.push(entry);
                continue;
            }
            ackedBytes += entry.bytes;
            // Karn's rule: a packet that has only travelled the path once gives a real RTT, and
            // only the largest acknowledged one is free of the peer's own delayed-ACK wait.
            if (entry.pn === largestAcked && entry.retransmitted !== true) {
                sample = now - entry.time - Math.min(ranges.ackDelay || 0, this.peerMaxAckDelay);
            }
            if (entry.crypto) {
                this.cryptoSend[epoch].ack(entry.crypto.start, entry.crypto.length, false);
            }
            for (const item of entry.streams) {
                item.stream.send.ack(item.start, item.length, item.fin);
            }
        }
        // RFC 9002 section 7.2: everything the peer has already acked past is lost, whether or
        // not it was probed - waiting for the PTO on those is what stretched one loss to seconds.
        const survivors = [];
        const lost = [];
        for (const entry of keep) {
            if (largestAcked - entry.pn >= this.kPacketThreshold) {
                lost.push(entry);
            } else {
                survivors.push(entry);
            }
        }
        this.inFlight[epoch] = survivors;
        if (ackedBytes) {
            if (sample !== null && sample > 0) {
                this._recordRttSample(sample);
            }
            this.onSendProgress();
            this._growWindow(ackedBytes);
        }
        for (const entry of lost) {
            this._returnLost(epoch, entry);
        }
        if (lost.length) {
            this._onLoss(epoch);
        }
        if (epoch === QUIC_EPOCH_APPLICATION && survivors.length < sent.length) {
            this._confirmHandshake();
        }
    }

    _growWindow(ackedBytes) {
        if (this.congestionWindow < this.slowStartThreshold) {
            this.congestionWindow += ackedBytes;
        } else {
            this.congestionWindow += Math.max(1, Math.floor((this.maxPacket * ackedBytes) / this.congestionWindow));
        }
        this.congestionWindow = Math.min(this.congestionWindow, this.maxWindow);
    }

    _handleFrames(payload, epoch) {
        const reader = new QuicReader(payload);
        while (reader.remaining > 0) {
            const type = reader.byte();
            if (type === QUIC_FRAME.padding) {
                continue;
            }
            if (type === QUIC_FRAME.ping) {
                continue;
            }
            if (type === QUIC_FRAME.ack || type === QUIC_FRAME.ackEcn) {
                const ranges = quicRangesFromAck(reader);
                if (type === QUIC_FRAME.ackEcn) {
                    reader.varint();
                    reader.varint();
                    reader.varint();
                }
                this._applyAck(epoch, ranges);
                continue;
            }
            if (type === QUIC_FRAME.crypto) {
                const start = reader.number();
                const length = reader.number();
                if (reader.remaining < length) {
                    return;
                }
                const bytes = reader.bytes(length);
                const fresh = this.tlsOffsets[epoch].accept(start, bytes);
                if (fresh.length) {
                    this._consumeTls(epoch, fresh);
                }
                continue;
            }
            if ((type & 0xf8) === QUIC_FRAME.stream) {
                // RFC 9000 section 19.8: OFF=0x04, LEN=0x02, FIN=0x01.
                const flags = type & 0x07;
                const id = Number(reader.varint());
                const hasLength = Boolean(flags & 0x02);
                const hasOffset = Boolean(flags & 0x04);
                const fin = Boolean(flags & 0x01);
                let offset = 0;
                if (hasOffset) {
                    offset = reader.number();
                }
                let length = reader.remaining;
                if (hasLength) {
                    length = reader.number();
                }
                if (reader.remaining < length) {
                    return;
                }
                this._deliverStream(id, offset, reader.bytes(length), fin);
                continue;
            }
            if (type === QUIC_FRAME.maxData) {
                this.peerMaxData = Math.max(this.peerMaxData, reader.number());
                continue;
            }
            if (type === QUIC_FRAME.maxStreamData) {
                const id = reader.number();
                const stream = this.streams.get(id);
                if (stream !== undefined) {
                    stream.peerLimit = Math.max(stream.peerLimit || 0, reader.number());
                } else {
                    reader.varint();
                }
                continue;
            }
            if (type === QUIC_FRAME.maxStreamsBidi || type === QUIC_FRAME.maxStreamsUni) {
                reader.varint();
                continue;
            }
            if (type === QUIC_FRAME.newConnectionId) {
                reader.varint();
                reader.varint();
                const length = reader.byte();
                if (reader.remaining < length + 16) {
                    return;
                }
                reader.bytes(length);
                reader.bytes(16);
                continue;
            }
            if (type === QUIC_FRAME.retireConnectionId) {
                reader.varint();
                continue;
            }
            if (type === QUIC_FRAME.pathChallenge) {
                if (reader.remaining < 8) {
                    return;
                }
                const data = reader.bytes(8);
                const writer = new QuicWriter();
                writer.byte(QUIC_FRAME.pathResponse).bytes(data);
                this._queueOneOffFrame(writer.build(), epoch);
                continue;
            }
            if (type === QUIC_FRAME.pathResponse) {
                continue;
            }
            if (type === QUIC_FRAME.handshakeDone) {
                this._confirmHandshake();
                continue;
            }
            if (type === QUIC_FRAME.resetStream) {
                const id = reader.number();
                reader.varint();
                reader.varint();
                const stream = this.streams.get(id);
                if (stream !== undefined) {
                    stream.reset = true;
                    this.onStreamEnd(stream);
                }
                continue;
            }
            if (type === QUIC_FRAME.stopSending) {
                reader.varint();
                reader.varint();
                continue;
            }
            if (type === QUIC_FRAME.newToken) {
                const length = reader.number();
                this.peerToken = Buffer.from(reader.bytes(length));
                continue;
            }
            if (type === QUIC_FRAME.transportClose || type === QUIC_FRAME.applicationClose) {
                const code = reader.number();
                let frameType = 0;
                if (type === QUIC_FRAME.transportClose) {
                    frameType = reader.number();
                }
                const reason = reader.remaining ? reader.bytes(reader.remaining).toString('utf8') : '';
                this._fail('peer closed code=' + code + ' reason=' + reason);
                return;
            }
            if (type === QUIC_FRAME.datagram || type === QUIC_FRAME.datagramLen) {
                let length = reader.remaining;
                if (type === QUIC_FRAME.datagramLen) {
                    length = reader.number();
                }
                if (reader.remaining < length) {
                    return;
                }
                reader.bytes(length);
                continue;
            }
            this._fail('unhandled QUIC frame type 0x' + type.toString(16));
            return;
        }
    }

    _queueOneOffFrame(frame, epoch) {
        // ACKs and path responses travel in the next packet of the matching epoch
        this.ackPending[epoch] = true;
        this.pendingOneOff = this.pendingOneOff || [];
        this.pendingOneOff.push({ epoch: epoch, frame: frame });
    }

    _deliverStream(id, offset, bytes, fin) {
        let stream = this.streams.get(id);
        if (stream === undefined) {
            stream = new QuicStream(this, id, (id & 1) === 1 ? 'remote' : 'local');
            this.streams.set(id, stream);
            this.onStream(stream);
        }
        const fresh = stream.receiver.accept(offset, bytes);
        if (fresh.length) {
            stream.recv = Buffer.concat([stream.recv, fresh]);
            this.consumedTotal += fresh.length;
            if (this.localMaxData - this.consumedTotal < this.receiveWindow / 2) {
                this.localMaxData = this.consumedTotal + this.receiveWindow;
                this.creditMaxData = true;
            }
            if (stream.localLimit - stream.recv.length < this.receiveWindow / 2) {
                stream.localLimit = stream.recv.length + this.receiveWindow;
                if (this.creditReady.indexOf(stream) < 0) {
                    this.creditReady.push(stream);
                }
            }
            this.onStreamData(stream, fresh);
            this._wake();
        }
        if (fin && !stream.ended && stream.receiver.contiguous === stream.recv.length) {
            stream.ended = true;
            this.onStreamEnd(stream);
        }
    }

    _wake() {
        if (!this.closed) {
            this._tick();
        }
    }

    _consumeTls(epoch, bytes) {
        if (epoch === QUIC_EPOCH_APPLICATION) {
            return;
        }
        if (epoch === QUIC_EPOCH_INITIAL && this.tls.state === 'awaiting-server-hello') {
            this.serverHello = Buffer.concat([this.serverHello, bytes]);
            let message;
            try {
                message = this.tls.serverHelloComplete(this.serverHello);
            } catch (err) {
                this._fail('server hello: ' + err.message);
                return;
            }
            if (message === null) {
                return;
            }
            this.serverHello = Buffer.alloc(0);
            let keys;
            try {
                keys = this.tls.handleServerHello(Buffer.from(message));
            } catch (err) {
                this._fail('server hello: ' + err.message);
                return;
            }
            this.keys[QUIC_EPOCH_HANDSHAKE] = keys;
            this.log.debug('quic server hello received, handshake keys installed');
            return;
        }
        // RFC 9001: ServerHello 之后的 flight 应为 Handshake epoch; 但边缘实机行为
        // (2026-10 取证) 是把整个 flight (EncryptedExtensions/Certificate/CertificateVerify/
        // Finished) 继续用 Initial epoch 发送 —— 两处来源统一汇入同一条 TLS 消息流
        this.handshakeBytes = Buffer.concat([this.handshakeBytes, bytes]);
        this._pumpHandshakeMessages();
    }

    _pumpHandshakeMessages() {
        while (this.handshakeBytes.length >= 4) {
            const total = 4 + this.handshakeBytes.readUIntBE(1, 3);
            if (this.handshakeBytes.length < total) {
                return;
            }
            const message = Buffer.from(this.handshakeBytes.subarray(0, total));
            this.handshakeBytes = this.handshakeBytes.subarray(total);
            let result;
            try {
                result = this.tls.handleHandshakeMessage(message);
            } catch (err) {
                this._fail('handshake message: ' + err.message);
                return;
            }
            if (this.tls.remoteParameters && this.remoteParameters === null) {
                this.remoteParameters = this.tls.remoteParameters;
                this.peerMaxData = this.tls.remoteParameters[QUIC_PARAM.initialMaxData] || 0;
                this.peerStreamRemote = this.tls.remoteParameters[QUIC_PARAM.initialMaxStreamDataBidiRemote] || 0;
                this.peerStreamLocal = this.tls.remoteParameters[QUIC_PARAM.initialMaxStreamDataBidiLocal] || 0;
                this.peerMaxAckDelay = Math.min(this.tls.remoteParameters[QUIC_PARAM.maxAckDelay] === undefined ? 25 : this.tls.remoteParameters[QUIC_PARAM.maxAckDelay], 100);
                this.log.debug('quic peer params max-data=' + this.peerMaxData + ' stream=' + this.peerStreamRemote + ' idle=' + (this.tls.remoteParameters[QUIC_PARAM.maxIdleTimeout] || 0));
            }
            if (result !== null) {
                if (this.verifyCertificate) {
                    // 🔐 边缘软校验在安装应用密钥前执行: 校验失败直接拒连, 交还上层换下一主机
                    const verifyError = verifyEdgeQuicCertificate(this.tls.leafCert);
                    if (verifyError) {
                        this._fail('edge certificate verification failed: ' + verifyError);
                        return;
                    }
                }
                this.keys[QUIC_EPOCH_APPLICATION] = { send: result.send, recv: result.recv };
                this.appRecvGens = [{ keys: result.recv, phase: 0 }];
                this.appSendKeys[0] = result.send;
                this.cryptoSend[QUIC_EPOCH_HANDSHAKE].append(result.finished, false);
                this.handshakeComplete = true;
                if (!result.verified) {
                    this.log.warning('server Finished verify_data mismatch');
                }
                this.log.debug('quic handshake complete alpn=' + (this.tls.negotiatedAlpn || '?'));
                if (this.settle !== null) {
                    const settle = this.settle;
                    this.settle = null;
                    settle.resolve(this);
                }
                this.onReady();
                return;
            }
        }
    }

    close(reason) {
        if (this.closed) {
            return;
        }
        this.closing = true;
        this.closeReason = reason || 'close';
        this._tick();
        setTimeout(() => this._finish(null), 200);
    }

    _fail(message) {
        if (this.closed) {
            return;
        }
        this.log.debug('quic closed: ' + message);
        this._finish(new Error(message));
    }

    _finish(err) {
        if (this.closed) {
            return;
        }
        this.closed = err ? err.message : 'closed';
        if (this.interval !== null) {
            clearInterval(this.interval);
            this.interval = null;
        }
        if (this.socket !== null) {
            try {
                this.socket.close();
            } catch (ignored) {
                // ignore
            }
            this.socket = null;
        }
        if (!this.handshakeComplete && this.settle !== null) {
            const settle = this.settle;
            this.settle = null;
            settle.reject(err || new Error('connection closed'));
        } else {
            this.onClose(err);
        }
    }
}

// 数据流请求头/长度解析 (与 h2 路径的 H2 request 对应)
function quicHeaderValues(headers, name) {
    const values = [];
    for (const [key, value] of headers) {
        if (key.toLowerCase() === name) {
            values.push(value);
        }
    }
    return values;
}

function buildQuicRequest(connect) {
    const metadata = new Map();
    const headers = [];
    for (const [key, value] of connect.metadata) {
        if (key.indexOf(QUIC_META_HEADER) >= 0) {
            const parts = key.split(':');
            if (parts.length !== 2) {
                throw new Error('header Key: ' + key + ' malformed');
            }
            headers.push([parts[1], value]);
        } else {
            metadata.set(key, value);
        }
    }
    let requestPath = connect.dest;
    try {
        const url = new URL(connect.dest);
        requestPath = url.pathname + url.search;
    } catch (err) {
        requestPath = connect.dest;
    }
    const contentLength = Number(quicHeaderValues(headers, 'content-length')[0]);
    const chunked = quicHeaderValues(headers, 'transfer-encoding').join(',').toLowerCase().includes('chunked');
    return {
        type: connect.type,
        method: metadata.get(QUIC_META_METHOD) || 'GET',
        host: metadata.get(QUIC_META_HOST) || '',
        path: requestPath.startsWith('/') ? requestPath : '/' + requestPath,
        headers: headers,
        contentLength: Number.isInteger(contentLength) && contentLength > 0 ? contentLength : null,
        bodyless: !chunked && !(Number.isInteger(contentLength) && contentLength > 0),
    };
}

function quicRequestComplete(state) {
    const request = state.request;
    if (request.bodyless) {
        return true;
    }
    if (state.ended) {
        return true;
    }
    return request.contentLength !== null && state.body.length >= request.contentLength;
}

// QUIC websocket 中继: ConnectRequest(type=1) 的响应头经 ConnectResponse metadata 交付
// (与 h2 路径 WebSocketProxy 同语义: 101 映射 200 上报, 响应体/WS 帧走裸字节双向转发)。
// 🛡️ 线级行为以实机联调为准 — 参考实现未实现 type=1, 此处为按 h2 语义的同构推断。
class QuicWebsocketRelay {
    constructor(session, state, request, origin, logger) {
        this.session = session;
        this.state = state;
        this.request = request;
        this.origin = origin;
        this.log = logger;
        this.queue = [];
        this.waiters = [];
        this.stopped = false;
        this.sock = null;
    }

    feed(payload) {
        if (payload === null) {
            this.queue.push(null);
        } else if (payload.length) {
            this.queue.push(payload);
        }
        this._wake();
    }

    stop() {
        if (this.stopped) {
            return;
        }
        this.stopped = true;
        this._wake();
        if (this.sock !== null) {
            try {
                this.sock.destroy();
            } catch (ignored) {
                // ignore
            }
        }
    }

    _wake() {
        for (const waiter of this.waiters) {
            waiter();
        }
        this.waiters = [];
    }

    async _next() {
        while (!this.stopped) {
            if (this.queue.length) {
                return this.queue.shift();
            }
            await new Promise((resolve) => this.waiters.push(resolve));
        }
        return null;
    }

    async run() {
        try {
            this.sock = await openOriginSocket(this.origin);
            this.sendHandshake();
            const response = await readHttp1Response(this.sock);
            if (response.status !== 101) {
                this.session.writeResponse(this.state.stream, 'origin websocket upgrade rejected: ' + response.status,
                    [[QUIC_META_STATUS, String(response.status)]], true);
                try { this.sock.destroy(); } catch (ignored) {}
                return;
            }
            // websocket 类型: 上报真实 101 (实机取证: 边缘把 metadata 状态字面转发给 WS 客户端,
            // h2 路径的 101→200 映射会让客户端收到 200 而握手失败)
            const metadata = [[QUIC_META_STATUS, String(response.status)]];
            for (const [name, value] of response.headers) {
                const lower = name.toLowerCase();
                if (lower === 'transfer-encoding' || lower === 'content-length') {
                    continue;
                }
                if (lower.startsWith('cf-int-') || lower.startsWith('cf-cloudflared-') || lower.startsWith('cf-proxy-')) {
                    continue;
                }
                metadata.push([QUIC_META_HEADER + ':' + name, value]);
            }
            this.session.writeResponse(this.state.stream, '', metadata, false);
            this.writeToOrigin().catch(() => {});
            await this.pumpOrigin(response.rest);
        } catch (err) {
            this.log.warning('websocket stream ' + this.state.stream.id + ' failed: ' + err);
            this.session.respond(this.state, String(err.message || err), 502);
        } finally {
            this.stop();
        }
    }

    async pumpOrigin(firstChunk) {
        if (firstChunk.length) {
            this.state.stream.write(firstChunk, false);
        }
        for await (const chunk of this.sock) {
            if (this.stopped) {
                break;
            }
            this.state.stream.write(chunk, false);
        }
        if (!this.stopped) {
            this.state.stream.write(Buffer.alloc(0), true);
        }
    }

    async writeToOrigin() {
        while (!this.stopped) {
            const payload = await this._next();
            if (payload === null) {
                try { this.sock.end(); } catch (ignored) {}
                return;
            }
            try {
                this.sock.write(payload);
            } catch (err) {
                this.stopped = true;
                return;
            }
        }
    }

    sendHandshake() {
        const parsed = new URL(this.origin);
        const target = this.request.path.startsWith('/') ? this.request.path : '/' + this.request.path;
        const lines = ['GET ' + target + ' HTTP/1.1'];
        let hasKey = false;
        let hasVersion = false;
        let hasOrigin = false;
        for (const [name, value] of this.request.headers) {
            const lower = name.toLowerCase();
            if (lower === 'host' || lower === 'connection' || lower === 'upgrade' ||
                lower === 'content-length' || lower === 'transfer-encoding') {
                continue;
            }
            if (lower === 'sec-websocket-key') {
                hasKey = true;
            } else if (lower === 'sec-websocket-version') {
                hasVersion = true;
            } else if (lower === 'origin') {
                hasOrigin = true;
            }
            lines.push(name + ': ' + value);
        }
        lines.push('Host: ' + parsed.host);
        if (!hasOrigin && this.request.host) {
            lines.push('Origin: https://' + this.request.host);
        }
        if (!hasKey) {
            lines.push('Sec-WebSocket-Key: ' + crypto.randomBytes(16).toString('base64'));
        }
        if (!hasVersion) {
            lines.push('Sec-WebSocket-Version: 13');
        }
        lines.push('Connection: Upgrade');
        lines.push('Upgrade: websocket');
        this.sock.write(Buffer.from(lines.join('\r\n') + '\r\n\r\n', 'latin1'));
    }
}

// QUIC 隧道会话: 首个客户端发起流为控制面 (复用 ControlStream, 注册语义与 h2 一致);
// 边缘发起的双向流 (id & 3 === 1) 携带 7 字节前导 + ConnectRequest, 代理至本地 origin。
class QuicSession {
    constructor(connection, origin, accountTag, tunnelSecret, tunnelId, connIndex, logger) {
        this.conn = connection;
        this.origin = origin;
        this.accountTag = accountTag;
        this.tunnelSecret = tunnelSecret;
        this.tunnelId = tunnelId;
        this.connIndex = connIndex;
        this.log = logger;
        this.control = null;
        this.requests = new Map();
        this.relays = new Set();
        this.stopped = false;
        this.settle = null;
        this.done = new Promise((resolve, reject) => {
            this.settle = { resolve: resolve, reject: reject };
        });
        this.conn.onStream = (stream) => this.acceptStream(stream);
        this.conn.onStreamData = (stream, data) => this.receiveStream(stream, data);
        this.conn.onStreamEnd = (stream) => this.endStream(stream);
        this.conn.onClose = (err) => this.stop(err);
    }

    run() {
        // The edge expects the first client-initiated stream to be the control plane.
        const control = this.conn.openStream();
        this.control = new ControlStream(this.conn, control.id, this.log, { quic: true });
        this.control.start(this.accountTag, this.tunnelSecret, this.tunnelId, this.connIndex);
        return this.done;
    }

    stop(err) {
        if (this.stopped) {
            return;
        }
        this.stopped = true;
        this.requests.clear();
        for (const relay of this.relays) {
            relay.stop();
        }
        this.relays.clear();
        if (err) {
            this.settle.reject(err);
        } else {
            this.settle.resolve();
        }
    }

    acceptStream(stream) {
        // Server-initiated bidirectional streams carry requests; even ids are ours.
        if ((stream.id & 3) !== 1) {
            return;
        }
        this.requests.set(stream.id, {
            stream: stream,
            buffer: Buffer.alloc(0),
            body: Buffer.alloc(0),
            request: null,
            websocket: false,
            relay: null,
            ended: false,
            served: false,
            failed: false,
        });
    }

    receiveStream(stream, data) {
        if (this.control !== null && stream.id === this.control.streamId) {
            this.control.feed(data);
            return;
        }
        const state = this.requests.get(stream.id);
        if (state === undefined || state.failed) {
            return;
        }
        if (state.request === null) {
            state.buffer = Buffer.concat([state.buffer, data]);
            this.parseRequest(state);
        } else if (data.length) {
            if (state.websocket && state.relay !== null) {
                // websocket 已建立: 后续字节直接喂给 origin 中继
                state.relay.feed(data);
            } else {
                state.body = Buffer.concat([state.body, data]);
            }
        }
        this.maybeServe(state);
    }

    endStream(stream) {
        if (this.control !== null && stream.id === this.control.streamId) {
            this.control.finished = true;
            return;
        }
        const state = this.requests.get(stream.id);
        if (state === undefined) {
            return;
        }
        state.ended = true;
        if (state.websocket && state.relay !== null) {
            state.relay.feed(null);
            return;
        }
        if (state.request !== null) {
            this.maybeServe(state);
        } else {
            this.requests.delete(stream.id);
        }
    }

    parseRequest(state) {
        const buffer = state.buffer;
        if (buffer.length < QUIC_DATA_STREAM_PREAMBLE.length) {
            return;
        }
        if (!buffer.subarray(0, QUIC_DATA_STREAM_SIGNATURE.length).equals(QUIC_DATA_STREAM_SIGNATURE)) {
            this.log.warning('stream ' + state.stream.id + ' is not a v1 tunnel data stream');
            state.failed = true;
            return;
        }
        if (buffer.subarray(6, 8).toString('latin1') !== '01') {
            this.log.warning('stream ' + state.stream.id + ' uses tunnel protocol ' + buffer.subarray(6, 8).toString('latin1'));
            state.failed = true;
            return;
        }
        const [messages, tail] = capnpMessages(buffer.subarray(QUIC_DATA_STREAM_PREAMBLE.length), 1);
        if (!messages.length) {
            return;
        }
        let connect;
        try {
            connect = capnpConnectRequest(messages[0]);
        } catch (err) {
            this.log.warning('stream ' + state.stream.id + ' has an unreadable ConnectRequest: ' + err);
            state.failed = true;
            return;
        }
        state.body = tail;
        state.buffer = Buffer.alloc(0);
        try {
            state.request = buildQuicRequest(connect);
            if (state.request.type === QUIC_CONNECTION_TYPE.websocket) {
                state.websocket = true;
            }
        } catch (err) {
            this.log.warning('stream ' + state.stream.id + ': ' + err);
            state.failed = true;
            this.respond(state, String(err.message || err), 502);
        }
    }

    maybeServe(state) {
        if (state.served || state.request === null || state.failed || !quicRequestComplete(state)) {
            return;
        }
        state.served = true;
        this.serveRequest(state);
    }

    async serveRequest(state) {
        const stream = state.stream;
        const request = state.request;
        try {
            if (request.type === QUIC_CONNECTION_TYPE.websocket) {
                this.serveWebsocket(state);
                return;
            }
            if (request.type !== QUIC_CONNECTION_TYPE.http) {
                throw new Error('tunnel connection type ' + request.type + ' is not proxied over QUIC yet');
            }
            const response = await proxyToOrigin(this.origin, request.method, request.path, request.headers, state.body);
            const metadata = [[QUIC_META_STATUS, String(response.status === 101 ? 200 : response.status)]];
            let hasContentType = false;
            for (const [name, value] of response.headers) {
                const lower = name.toLowerCase();
                if (lower === 'transfer-encoding') {
                    continue;
                }
                if (lower === 'content-type') {
                    hasContentType = true;
                }
                metadata.push([QUIC_META_HEADER + ':' + name, value]);
            }
            if (!hasContentType) {
                const inferred = inferContentType(request.path);
                if (inferred) {
                    metadata.push([QUIC_META_HEADER + ':Content-Type', inferred]);
                }
            }
            this.writeResponse(stream, '', metadata, false);
            for await (const chunk of response.body) {
                stream.write(chunk, false);
            }
            stream.write(Buffer.alloc(0), true);
        } catch (err) {
            this.log.warning('stream ' + stream.id + ' proxy failed: ' + err);
            this.respond(state, String(err.message || err), 502);
        } finally {
            if (!state.websocket) {
                this.requests.delete(stream.id);
            }
        }
    }

    serveWebsocket(state) {
        const relay = new QuicWebsocketRelay(this, state, state.request, this.origin, this.log);
        state.relay = relay;
        this.relays.add(relay);
        // 解析 ConnectRequest 时已到达的残余字节先喂给中继
        if (state.body.length) {
            relay.feed(state.body);
            state.body = Buffer.alloc(0);
        }
        relay.run().catch(() => {}).finally(() => {
            this.relays.delete(relay);
            this.requests.delete(state.stream.id);
        });
    }

    respond(state, errorText, status) {
        this.writeResponse(state.stream, errorText, [[QUIC_META_STATUS, String(status)]], true);
    }

    writeResponse(stream, errorText, metadata, endStream) {
        if (this.stopped || stream.send.fin) {
            return;
        }
        stream.write(Buffer.concat([QUIC_DATA_STREAM_PREAMBLE, capnpConnectResponse(errorText, metadata)]), endStream);
    }
}

// QUIC 边缘建连: 按主机洗牌逐个尝试; 证书校验/空闲超时与 h2 路径共用同一套开关语义。
async function connectEdgeQuic(logger, idleTimeoutMs, verifyCertificate) {
    const candidates = EDGE_HOSTS.slice().sort(() => Math.random() - 0.5);
    let lastError = null;
    for (const host of candidates) {
        const connection = new QuicConnection({
            logger: logger,
            host: host,
            port: EDGE_PORT,
            serverName: QUIC_SERVER_NAME,
            alpn: QUIC_ALPN,
            idleTimeout: idleTimeoutMs === undefined ? 30000 : idleTimeoutMs,
            verifyCertificate: verifyCertificate === true,
        });
        try {
            await connection.connect();
            logger.info('connected to ' + host + ':' + EDGE_PORT + ' over QUIC');
            return connection;
        } catch (err) {
            lastError = err;
            logger.warning('edge ' + host + ' failed: ' + err.message);
            try { connection.close('edge connect failed'); } catch (ignored) {}
        }
    }
    throw new Error('all Cloudflare edges failed: ' + lastError);
}

// ============================================================================
// 🚀 Argo 临时隧道管理器 (复用 cftunnel-product.js 的 Quick Tunnel 协议实现)
// ============================================================================
const argoRetrySeconds = 2;

// 🛡️ 守护自愈参数: trycloudflare 临时资源在 edge 连接全断后会被 Cloudflare 回收,
// 旧凭据重连注册永远失败 (域名永久失效, 即"ECONNRESET 后连不上"的根因)。
// 连续失败 N 次后重新注册换取新域名并回调通知 (KMODE=2 自动再上报 / KMODE=1 自动重写域名文件)。
function argoEnvInt(name, fallback, minimum) {
  const raw = parseInt(process.env[name] || '', 10);
  if (!Number.isInteger(raw) || raw < minimum) {
    return fallback;
  }
  return raw;
}
const argoReregisterAfter = argoEnvInt('KISAMA_ARGO_REREGISTER_AFTER', 5, 2);   // 连续失败阈值
const argoReregisterRetrySeconds = 30;                                          // 重新注册失败后的退避
// 读空闲超时 (秒): edge 有周期 PING, 长时间无任何入站数据 = 半开假死, 主动断开走重连; 0=禁用
const argoIdleTimeoutMs = (() => {
  const raw = parseInt(process.env.KISAMA_ARGO_IDLE_TIMEOUT || '', 10);
  if (!Number.isInteger(raw) || raw < 0) {
    return 300 * 1000;
  }
  return raw === 0 ? 0 : Math.max(raw, 10) * 1000;
})();

function parseJsonBody(raw) {
  if (typeof raw === 'string') {
    const trimmed = raw.trim();
    if (trimmed) {
      try { return JSON.parse(trimmed); } catch (ignored) {}
    }
    return {};
  }
  return raw && typeof raw === 'object' ? raw : {};
}

class ArgoTunnelManager {
  constructor(logger) {
    this.log = logger;
    this.tunnels = new Map(); // port -> Array<tunnelEntry>
    // 🛡️ 守护重建换新域名时的回调 (oldDomain, newDomain); KMODE 接线后自动再上报/重写域名文件
    this.onDomainChange = null;
  }

  async create(port, duplicate, quic = false) {
    const existing = this.tunnels.get(port) || [];
    if (existing.length > 0 && !duplicate) {
      const err = new Error(`tunnel already exists on port ${port}, set duplicate=true to force creation`);
      err.status = 409;
      err.port = port;
      throw err;
    }

    let hostname, accountTag, tunnelSecret, tunnelId;
    try {
      [hostname, accountTag, tunnelSecret, tunnelId] = await requestQuickTunnel('https://api.trycloudflare.com');
    } catch (e) {
      const err = new Error('failed to create tunnel: ' + e.message);
      err.status = 500;
      err.port = port;
      throw err;
    }

    const tunnelDomain = hostname.startsWith('https://') ? hostname : 'https://' + hostname;
    const entry = {
      tunnelDomain: tunnelDomain,
      port: port,
      createdAt: new Date().toISOString().replace(/\.\d{3}Z$/, 'Z'),
      // 🚦 本条隧道的边缘传输 ('h2'|'quic'): 注册协议与传输无关, 按隧道独立选择;
      // QUIC 建连连续失败达阈值自动回退 h2 (entry 级, 重启进程恢复)
      transport: quic ? 'quic' : 'h2',
      quicFailures: 0,
      stopped: false,
      sock: null,
      conn: null,   // QUIC 传输时为 QuicConnection, 供 remove() 主动关闭
      runPromise: null
    };
    entry.runPromise = this._runLoop(entry, accountTag, tunnelSecret, tunnelId)
      .catch((err) => this.log.warning('argo tunnel loop for ' + tunnelDomain + ' ended: ' + err.message));
    existing.push(entry);
    this.tunnels.set(port, existing);
    this.log.info('argo tunnel created: ' + tunnelDomain + ' -> 127.0.0.1:' + port + ' (' + entry.transport + ')');
    return entry;
  }

  list() {
    const tunnels = [];
    const ports = [...this.tunnels.keys()].sort((a, b) => a - b);
    for (const port of ports) {
      for (const entry of this.tunnels.get(port)) {
        tunnels.push({
          tunnel_domain: entry.tunnelDomain,
          port: entry.port,
          created_at: entry.createdAt,
          transport: entry.transport
        });
      }
    }
    return tunnels;
  }

  async remove(port, tunnelDomain) {
    const existing = this.tunnels.get(port) || [];
    if (existing.length === 0) {
      return { status: 404, message: `no tunnel found on port ${port}` };
    }

    let targets;
    if (tunnelDomain === undefined || tunnelDomain === null || tunnelDomain === '') {
      if (existing.length > 1) {
        return { status: 409, message: `multiple tunnels exist on port ${port}, specify tunnel_domain to disambiguate` };
      }
      targets = existing;
    } else {
      targets = existing.filter((entry) => entry.tunnelDomain === tunnelDomain);
      if (targets.length === 0) {
        return { status: 404, message: `no tunnel found on port ${port} with domain ${tunnelDomain}` };
      }
    }

    const deleted = [];
    for (const entry of targets) {
      entry.stopped = true;
      if (entry.conn !== null) {
        try { entry.conn.close('tunnel removed'); } catch (ignored) {}
      }
      if (entry.sock !== null) {
        try { entry.sock.destroy(); } catch (ignored) {}
      }
      await entry.runPromise.catch(() => {});
      deleted.push({
        tunnel_domain: entry.tunnelDomain,
        port: entry.port,
        created_at: entry.createdAt,
        transport: entry.transport
      });
    }

    const remaining = existing.filter((entry) => !entry.stopped);
    if (remaining.length > 0) {
      this.tunnels.set(port, remaining);
    } else {
      this.tunnels.delete(port);
    }

    for (const entry of deleted) {
      this.log.info('argo tunnel deleted: ' + entry.tunnel_domain);
    }
    return { status: 'ok', deleted: deleted.length, tunnels: deleted };
  }

  async _runLoop(entry, accountTag, tunnelSecret, tunnelId) {
    const origin = 'http://127.0.0.1:' + entry.port;
    // 可打断 sleep: remove() 会 await 本循环, 长退避必须能被 entry.stopped 提前唤醒
    const sleep = async (ms) => {
      for (let waited = 0; waited < ms && !entry.stopped; waited += 500) {
        await new Promise((resolve) => setTimeout(resolve, Math.min(500, ms - waited)));
      }
    };
    let failures = 0;   // 🛡️ 连续失败计数 (连接失败/注册失败): 本轮注册过=旧凭据仍有效, 清零
    let connIndex = 0;  // 注册索引轮换, 降低 edge 侧旧连接残留导致的注册拒绝
    while (!entry.stopped) {
      let sock = null;
      let conn = null;
      let quicConn = null;
      try {
        // 🔐 A-2: 默认校验 Cloudflare edge 证书; 自定义链路确需豁免时 KISAMA_EDGE_INSECURE=true
        const edgeVerifyCert = String(process.env.KISAMA_EDGE_INSECURE || '').toLowerCase() !== 'true';
        if (entry.transport === 'quic') {
          // 🚦 QUIC 传输: UDP/7844, SNI quic.cftunnel.com, ALPN argotunnel;
          // 空闲超时与 h2 共用 KISAMA_ARGO_IDLE_TIMEOUT (0=禁用时回落 QUIC 默认 30s)
          quicConn = await connectEdgeQuic(this.log, argoIdleTimeoutMs > 0 ? argoIdleTimeoutMs : 30000, edgeVerifyCert);
          if (entry.stopped) {
            try { quicConn.close('tunnel removed'); } catch (ignored) {}
            break;
          }
          entry.conn = quicConn;
          connIndex = (connIndex + 1) % 4;
          await new QuicSession(
            quicConn, origin, accountTag, tunnelSecret, tunnelId, connIndex, this.log
          ).run();
        } else {
          sock = await connectEdge(edgeVerifyCert, this.log);
          if (entry.stopped) {
            try { sock.destroy(); } catch (ignored) {}
            break;
          }
          entry.sock = sock;
          connIndex = (connIndex + 1) % 4;
          conn = new H2Connection(
            sock, origin, accountTag, tunnelSecret, tunnelId, connIndex,
            this.log, entry.tunnelDomain, false, { printed: true }
          );
          await conn.run();
        }
      } catch (err) {
        if (!entry.stopped) {
          this.log.warning('argo tunnel ' + entry.tunnelDomain + ' connection closed: ' + err.message);
        }
      } finally {
        if (sock !== null) {
          try { sock.destroy(); } catch (ignored) {}
        }
        if (quicConn !== null) {
          try { quicConn.close('tunnel closed'); } catch (ignored) {}
        }
        entry.sock = null;
        entry.conn = null;
      }
      if (entry.stopped) {
        break;
      }
      const registered = (conn !== null && conn.registered) || (quicConn !== null && quicConn.registered);
      if (registered) {
        failures = 0;
        entry.quicFailures = 0;
      } else {
        failures += 1;
        // 🚦 QUIC 连续失败达阈值: 自动回退 h2 (同一注册凭据无需重注册, UDP 被墙环境兜底;
        // 回退只影响本条隧道, 重启进程恢复 QUIC)
        if (entry.transport === 'quic') {
          entry.quicFailures += 1;
          if (entry.quicFailures >= argoReregisterAfter) {
            entry.transport = 'h2';
            this.log.warning(`argo tunnel ${entry.tunnelDomain}: QUIC 连续 ${entry.quicFailures} 轮建连失败, 已自动回退 h2 传输 (重启进程恢复 QUIC)`);
            entry.quicFailures = 0;
          }
        }
        if (failures >= argoReregisterAfter) {
          // 🛡️ 旧凭据已被 Cloudflare 回收: 重新注册换取新域名, 回调通知后继续新域名下的重连
          if (await this._reregister(entry, (tag, secret, id) => { accountTag = tag; tunnelSecret = secret; tunnelId = id; })) {
            failures = 0;
            entry.quicFailures = 0;   // 凭据类失败不计入传输回退, 避免误降级
          } else {
            // 重新注册失败: 退避更久再试, 避免高频请求 api.trycloudflare.com
            await sleep(argoReregisterRetrySeconds * 1000);
          }
        }
      }
      if (!entry.stopped) {
        await sleep(argoRetrySeconds * 1000);
      }
    }
  }

  // 🛡️ 重新注册快速隧道: 成功则更新 entry.tunnelDomain 并触发 onDomainChange 回调
  // (_requester 为测试注入缝, 生产恒为 requestQuickTunnel)
  _reregister(entry, applyCredentials) {
    const requester = this._requester || requestQuickTunnel;
    return requester('https://api.trycloudflare.com').then(([hostname, accountTag, tunnelSecret, tunnelId]) => {
      const oldDomain = entry.tunnelDomain;
      applyCredentials(accountTag, tunnelSecret, tunnelId);
      entry.tunnelDomain = hostname.startsWith('https://') ? hostname : 'https://' + hostname;
      this.log.warning('argo tunnel domain changed: ' + oldDomain + ' -> ' + entry.tunnelDomain);
      if (typeof this.onDomainChange === 'function') {
        try { this.onDomainChange(oldDomain, entry.tunnelDomain); } catch (ignored) {}
      }
      return true;
    }).catch((err) => {
      this.log.warning('argo tunnel re-register failed: ' + err.message);
      return false;
    });
  }
}

// ============================================================================
// KMODE 启动模式 (docs/API.MD 第九节)
// KMODE=1 时: 启动即建临时隧道并把域名写入 KPATH 文件 (缺省 $HOME/domain.txt);
// 第一次 /api/baseinfo 成功响应后删除该文件; stdin 收到 /domain 指令时输出域名。
// KMODE=2 时: 启动即建临时隧道并把域名上报至 shz.al (可预测 URL, 全程静默)。
// KMODE=2q/2quic: KMODE=2 且启动隧道走 QUIC 边缘传输 (仅影响启动行为;
// /api/argo 创建隧道时经请求体 quic 字段独立选择传输)。
// 🛡️ 守护自愈: 隧道凭据被 Cloudflare 回收时自动重新注册, 域名会变化 ——
// KMODE=1 自动重写域名文件, KMODE=2 自动重新上报 shz.al (409 冲突走 PUT 覆盖)。
// ============================================================================
class KModeController {
  static _baseinfoHooked = false; // 域名文件只删一次
  static _domain = null;          // 内存中最后已知域名 (文件删除后 /domain 仍可用)

  // shz.al 自定义名规则: >=3 字符, 限字母数字及 +_-[]*$=@,;/;
  // 且管理密码 (KNAME_KEY, 缺省复用 KNAME) 必须 >=8 字符, 否则平台返回 400 Password too short
  static _SHZAL_NAME_CHARS = /^[A-Za-z0-9+_\-*$=@,;[/\]]+$/;
  static _SHZAL_KEY_HINT_SHOWN = false;   // 每个进程只提示一次, 避免重复刷屏

  // 校验 KNAME 是否满足 shz.al 上报条件。返回 true 才执行 KMODE=2 上报;
  // 校验失败时的原因一律经 Logger.info 输出 — 即使 DEBUG=true 被调用方短路跳过,
  // 也能明确看到"为什么 KMODE=2 未生效"。
  static knameValid() {
    const name = Config.KNAME || '';
    const key = (Config.KNAME_KEY || Config.KNAME) || '';
    const reasons = [];
    if (name.length < 3) reasons.push(`KNAME 过短 (${name.length}<3)`);
    if (!this._SHZAL_NAME_CHARS.test(name)) reasons.push('KNAME 含非法字符 (限字母数字及 +_-[]*$=@,;/)');
    if (key.length < 8) reasons.push(`密钥过短 (${key.length}<8, 实际使用 ${Config.KNAME_KEY ? 'KNAME_KEY' : 'KNAME'})`);
    const valid = reasons.length === 0;
    if (!valid && !this._SHZAL_KEY_HINT_SHOWN) {
      this._SHZAL_KEY_HINT_SHOWN = true;
      // 🔐 L9 修复 (SECURITY-AUDIT 第四节 L9): KNAME_KEY 是 shz.al 覆盖上报管理凭证,
      // 日志只输出"已设置(长度)", 不输出真实值 (示例串 mysecret-pass 为静态提示文案)
      Logger.info(`[KMODE] ⚠️ KMODE=2 未生效, 条件不满足: ${reasons.join('; ')} `
        + `(KNAME=${name || '(未设置)'}, KNAME_KEY=${Config.KNAME_KEY ? `已设置(len=${Config.KNAME_KEY.length})` : '(未设置, 缺省复用 KNAME)'})`);
      Logger.info('[KMODE] 💡 修正: 设置 ≥8 字符的 KNAME 且 (可选) KNAME_KEY ≥8 字符, 例如: KNAME=myname KNAME_KEY=mysecret-pass');
    }
    return valid;
  }

  // 上报隧道域名到 shz.al: POST 创建 (409 冲突则 PUT 覆盖), 默认全程静默 —
  // 不输出域名 / 上报结果 / 平台 URL, 失败 resolve(false), 不影响正常启动。
  // 调 DEBUG=true (或 SHZAL_DEBUG=true) 时输出上报过程与结果, 便于排查上报失败原因。
  static reportShzalDebug() {
    return Config.DEBUG || String(process.env.SHZAL_DEBUG || '').toLowerCase() === 'true';
  }

  static reportShzal(domain) {
    const verbose = this.reportShzalDebug();
    const dbg = (msg) => { if (verbose) Logger.debug('[KMODE:shz.al] ' + msg); };
    return new Promise((resolve) => {
      const name = Config.KNAME;
      const key = Config.KNAME_KEY || Config.KNAME;
      const boundary = '----kisama' + crypto.randomBytes(12).toString('hex');
      const fields = [['c', domain], ['n', name], ['s', key], ['e', '7d']];
      const buildBody = (list) => {
        const parts = list.map(([k, v]) =>
          Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="${k}"\r\n\r\n${v}\r\n`));
        parts.push(Buffer.from(`--${boundary}--\r\n`));
        return Buffer.concat(parts);
      };
      const post = (url, list, method, cb) => {
        const u = new URL(url);
        const req = https.request({
          hostname: u.hostname, port: u.port || 443, path: u.pathname + u.search, method,
          headers: { 'Content-Type': `multipart/form-data; boundary=${boundary}`, 'Content-Length': list ? list.length : 0,
                     'User-Agent': 'curl/8.5.0' }   // Cloudflare 拦截无 UA / Python UA 请求
        }, (res) => { res.resume(); res.on('end', () => cb(res.statusCode)); });
        req.on('error', (e) => { dbg(method + ' ' + url + ' 请求异常: ' + e.message); cb(0); });
        // 上报挂死会卡住守护重试链路, 统一 30s 超时兜底
        req.setTimeout(30000, () => req.destroy(new Error('shz.al request timeout')));
        if (list) req.write(list);
        req.end();
      };
      dbg('开始上报域名 -> ' + name + ' (key 已设置: ' + (key.length > 0) + ')');
      try {
        post('https://shz.al/', buildBody(fields), 'POST', (code) => {
          dbg('POST https://shz.al/ 状态: ' + code);
          if (code === 409) {
            // 名字已被占用 (上次粘贴未过期): PUT 覆盖更新
            dbg('名字被占用, 改用 PUT 覆盖: https://shz.al/~' + name + ':*');
            const putFields = fields.filter(([k]) => k !== 'n');
            post(`https://shz.al/~${name}:${key}`, buildBody(putFields), 'PUT', (putCode) => {
              dbg('PUT 覆盖状态: ' + putCode + (putCode === 200 ? ' (成功)' : ' (失败)'));
              resolve(putCode === 200);
            });
          } else if (code === 200) {
            dbg('上报成功');
            resolve(true);
          } else {
            dbg('上报失败 (状态 ' + code + ')');
            resolve(false);
          }
        });
      } catch (e) { dbg('上报异常: ' + e.message); resolve(false); }
    }).then((ok) => {
      if (ok) this._domain = domain;
      return ok;
    }).catch(() => false);
  }

  // 🛡️ 守护重建后的新域名上报: 指数退避重试 3 次 (2s/4s/8s), 全程静默 —
  // 新域名必须尽量送达, 否则控制端按预测 URL 将读到旧值/404
  static async reportDomainChange(domain) {
    for (let attempt = 1; attempt <= 3; attempt++) {
      if (await this.reportShzal(domain)) {
        return;
      }
      if (attempt < 3) {
        await new Promise((resolve) => setTimeout(resolve, 1000 * 2 ** attempt));
      }
    }
  }

  static homeDir() {
    const candidates = [process.env.USERPROFILE, process.env.HOME];
    for (const dir of candidates) {
      if (dir && fs.existsSync(dir) && fs.statSync(dir).isDirectory()) return dir;
    }
    try { return os.homedir(); } catch (e) { return process.cwd(); }
  }

  static resolveDomainFilePath() {
    // KPATH 支持 $HOME 与 ~ 前缀; 缺省 $HOME/domain.txt
    let raw = (Config.KPATH || '').trim();
    if (!raw) return path.join(this.homeDir(), 'domain.txt');
    if (raw.startsWith('$HOME')) {
      raw = raw.length > 5 ? path.join(this.homeDir(), raw.slice(5).replace(/^[/\\]+/, '')) : this.homeDir();
    } else if (raw.startsWith('~')) {
      raw = path.resolve(raw.replace(/^~(?=[/\\]|$)/, this.homeDir()));
    }
    return raw;
  }

  static writeDomainFile(domain) {
    this._domain = domain;
    const file = this.resolveDomainFilePath();
    try {
      fs.mkdirSync(path.dirname(path.resolve(file)), { recursive: true });
      fs.writeFileSync(file, domain);
      Logger.info(`[KMODE] 📄 隧道域名已写入: ${file}`);
    } catch (e) {
      Logger.warn(`[KMODE] ⚠️ 域名文件写入失败 (${file}): ${e.message}`);
    }
  }

  static deleteDomainFile() {
    const file = this.resolveDomainFilePath();
    try {
      if (fs.existsSync(file) && fs.statSync(file).isFile()) {
        fs.unlinkSync(file);
        Logger.info(`[KMODE] 🗑️ 域名文件已删除: ${file}`);
      }
    } catch (e) {
      Logger.warn(`[KMODE] ⚠️ 域名文件删除失败 (${file}): ${e.message}`);
    }
  }

  // 第一次 /api/baseinfo 成功响应后删除域名文件 (仅触发一次)
  static onBaseinfoSuccess() {
    if (!this._baseinfoHooked) {
      this._baseinfoHooked = true;
      this.deleteDomainFile();
    }
  }

  static startStdinListener() {
    // /domain 指令输出: 直接 console.log, 不走 DEBUG/LOG 开关
    try {
      const rl = readline.createInterface({ input: process.stdin, terminal: false });
      rl.on('line', (line) => {
        if (line.trim() === '/domain') {
          console.log(this._domain || '[KMODE] tunnel domain not ready');
        }
      });
      rl.on('close', () => {}); // 无 stdin 环境 (服务化部署) 静默退出
      rl.on('error', () => {});
    } catch (e) { /* stdin 不可用时静默跳过 */ }
  }

  static activate(argoTunnelManager) {
    // KMODE=1: 隧道 + 域名文件 + stdin 监听; KMODE=2: 隧道 + shz.al 静默上报;
    // KMODE_QUIC (KMODE=2q): 启动隧道走 QUIC 传输 (仅影响启动行为, REST 建隧道另行选传)
    if (Config.KMODE === '2' && this.knameValid()) {
      const quic = Config.KMODE_QUIC === true;
      Logger.info('[KMODE] 🚀 KMODE=2' + (quic ? 'q' : '') + ': 隧道域名将上报至外部平台' + (quic ? ' (QUIC 传输)' : ''));
      // 🛡️ 守护重建换新域名时自动重新上报 (静默重试, 回调异常不影响重连循环)
      argoTunnelManager.onDomainChange = (oldDomain, newDomain) => { this.reportDomainChange(newDomain); };
      argoTunnelManager.create(Config.PORT, false, quic)
        .then((entry) => this.reportShzal(entry.tunnelDomain))
        .catch(() => { /* 全程静默 */ });
      return;
    }
    Logger.info('[KMODE] 🚀 KMODE=1: 启动时自动创建临时隧道');
    // 🛡️ 守护重建换新域名时自动重写域名文件 (原文件可能已被 baseinfo 钩子删除)
    argoTunnelManager.onDomainChange = (oldDomain, newDomain) => { this.writeDomainFile(newDomain); };
    argoTunnelManager.create(Config.PORT).then((entry) => {
      this.writeDomainFile(entry.tunnelDomain);
    }).catch((e) => {
      Logger.warn(`[KMODE] ⚠️ 启动隧道创建失败: ${e.message}`);
    });
    this.startStdinListener();
  }
}

// ============================================================================
// 🚀 主应用
// ============================================================================


// ==================== 全局加载 WASM 引擎 ====================
let noiseModule = null;
let noiseError = null;
const noiseReady = new Promise((resolve, reject) => {
    try {
        createNoise(function (noise) {
            if (!noise) {
                noiseError = new Error("Failed to load noise-c.wasm module");
                Logger.warn('[WARN] Noise WASM module failed to load:', noiseError.message);
                resolve(); // 不reject，允许程序继续运行
                return;
            }
            noiseModule = noise;
            Logger.debug('Noise WASM module loaded successfully');
            resolve();
        });
    } catch (e) {
        noiseError = e;
        Logger.warn('[WARN] Exception loading Noise module:', e.message);
        resolve(); // 不reject，允许程序继续运行
    }
});

// ==================== 全局未处理Promise rejection处理器 ====================
process.on('unhandledRejection', (reason, promise) => {
    Logger.error('Unhandled Promise Rejection:', reason);
    // 不退出进程，只记录错误
});

process.on('uncaughtException', (error) => {
    Logger.error('Uncaught Exception:', error);
    // 对于严重的未捕获异常，可以选择退出
    process.exit(1);
});

// ==================== Noise 加密封装类 (强化 WASM 边界类型安全) ====================
class NoiseSessionWrapper {
    constructor(isInitiator, localPrivB64, expectedRemotePubB64) {
        this.isInitiator = isInitiator;
        this.localPrivB64 = localPrivB64;
        this.expectedRemotePubB64 = expectedRemotePubB64;
        
        this.handshakeFinished = false;
        this.hs = null;
        this.sendCipher = null;
        this.recvCipher = null;
    }

    async init() {
        await noiseReady;
        if (!noiseModule) throw noiseError || new Error("Noise WASM module not available");
        
        const noise = noiseModule;
        const role = this.isInitiator ? noise.constants.NOISE_ROLE_INITIATOR : noise.constants.NOISE_ROLE_RESPONDER;
        
        this.hs = noise.HandshakeState("Noise_XX_25519_ChaChaPoly_BLAKE2s", role);

        const prologue = Buffer.from("kisama_terminal_v1");
        const s = this.localPrivB64 ? Buffer.from(this.localPrivB64, 'base64') : null;
        const rs = this.expectedRemotePubB64 ? Buffer.from(this.expectedRemotePubB64, 'base64') : null;

        this.hs.Initialize(prologue, s, rs, null);
    }

    processHandshake(payload) {
        if (this.handshakeFinished) return Buffer.alloc(0);
        const noise = noiseModule;

        if (payload && payload.length > 0 && this.hs.GetAction() === noise.constants.NOISE_ACTION_READ_MESSAGE) {
            this.hs.ReadMessage(payload);
        }

        if (this.hs.GetAction() === noise.constants.NOISE_ACTION_SPLIT) {
            this._splitAndFinish();
            return Buffer.alloc(0);
        }

        if (this.hs.GetAction() === noise.constants.NOISE_ACTION_WRITE_MESSAGE) {
            const outMsg = this.hs.WriteMessage(new Uint8Array(0)); // 确保类型为 Uint8Array
            if (this.hs.GetAction() === noise.constants.NOISE_ACTION_SPLIT) {
                this._splitAndFinish();
            }
            return Buffer.from(outMsg);
        }

        return Buffer.alloc(0);
    }

    _splitAndFinish() {
        // 🔐 安全修复：握手完成后必须验证对端静态公钥与预期控制端公钥一致（fail-closed）。
        // XX 模式下 noise-c 不会因为 Initialize 时传入 rs 而校验对端身份，任何随机密钥的
        // 客户端都能完成握手；必须在 Split 释放状态机前显式比对，否则无法再取。
        let remotePub = null;
        try { remotePub = this.hs.GetRemotePublicKey(); } catch (e) { remotePub = null; }
        const expectedPub = this.expectedRemotePubB64 ? Buffer.from(this.expectedRemotePubB64, 'base64') : null;
        const peerOk = remotePub && expectedPub &&
            remotePub.length === expectedPub.length &&
            crypto.timingSafeEqual(Buffer.from(remotePub), expectedPub);
        if (!peerOk) {
            throw new Error("Noise peer static key verification failed");
        }

        const ciphers = this.hs.Split();
        
        // noise-c 的 C 语言内核已经根据 Role 自动分配好了
        // [0] 永远是本地发信器, [1] 永远是本地收信器
        this.sendCipher = ciphers[0];
        this.recvCipher = ciphers[1];
        
        this.handshakeFinished = true;
        try { if (this.hs) this.hs.free(); } catch(e) {}
        this.hs = null;
    }

    encrypt(plaintext) {
        if (!this.handshakeFinished) throw new Error("握手未完成，无法加密数据");
        // 🚀 使用 Uint8Array 包裹，确保跨 WASM 边界不出错
        const ad = new Uint8Array(0);
        const data = new Uint8Array(plaintext);
        return Buffer.from(this.sendCipher.EncryptWithAd(ad, data));
    }

    decrypt(ciphertext) {
        if (!this.handshakeFinished) throw new Error("握手未完成，无法解密数据");
        const ad = new Uint8Array(0);
        const data = new Uint8Array(ciphertext);
        return Buffer.from(this.recvCipher.DecryptWithAd(ad, data));
    }

    free() {
        try { if (this.sendCipher) this.sendCipher.free(); } catch(e) {}
        try { if (this.recvCipher) this.recvCipher.free(); } catch(e) {}
        try { if (this.hs) this.hs.free(); } catch(e) {}
        this.sendCipher = null;
        this.recvCipher = null;
        this.hs = null;
    }
}

// ==================== Windows 管道回退终端 (对齐 py._PipeTerminal / Go.pipeTerminal) ====================
// 无 ConPTY 的旧系统或 bun-pty Windows 构建异常时的兜底：无真实终端语义，resize 为 no-op，
// 仅保持与 pty 相同的 onData/onExit/write/resize/kill/pid 接口，stdout+stderr 合并输出。
class PipeTerminalShim {
    constructor(shell, env, cwd, args) {
        this.shell = shell;
        this.env = env;
        this.cwd = cwd;
        this.args = args || [];
        this.proc = null;
        this.pid = 0;
        this._onDataCb = null;
        this._onExitCb = null;
    }

    spawn() {
        this.proc = spawn(this.shell, this.args, {
            env: this.env,
            cwd: this.cwd,
            windowsHide: true,
            stdio: ['pipe', 'pipe', 'pipe']
        });
        this.pid = this.proc.pid || 0;
        const self = this;
        this.proc.stdout.on('data', (chunk) => self._emitData(chunk));
        this.proc.stderr.on('data', (chunk) => self._emitData(chunk));
        this.proc.on('exit', (code, signal) => {
            if (self._onExitCb) self._onExitCb({ exitCode: code, signal: signal || null });
        });
    }

    _emitData(chunk) {
        if (this._onDataCb) this._onDataCb(chunk.toString('utf-8'));
    }

    onData(cb) {
        this._onDataCb = cb;
        return { dispose: () => { this._onDataCb = null; } };
    }

    onExit(cb) {
        this._onExitCb = cb;
        return { dispose: () => { this._onExitCb = null; } };
    }

    write(data) {
        if (!this.proc || !this.proc.stdin) return;
        try { this.proc.stdin.write(data); } catch (e) {}
    }

    // 管道回退无真实终端，resize 为 no-op (对齐 py/Go)
    resize() {}

    kill() {
        try { if (this.proc) this.proc.kill(); } catch (e) {}
    }
}

// ==================== 终端会话处理器 (修复异步丢包漏洞) ====================
class TerminalSessionHandler {
    constructor() {
        this.ptyProcess = null;
        this.websocket = null;
        this.requestId = null;
        this.useNoise = true;
        this.metaRequested = false;      // 面板请求 welcome 元数据帧 (meta=1)
        this.incognitoRequested = false; // 面板请求原生无痕会话 (incognito=1)
        
        // 🚀 核心防丢包机制：消息队列
        this.phase = 'handshake';
        this.msgQueue = [];
        this.msgResolvers = [];
        
        this.AGENT_PRIVATE_KEY = Config.NOISE_KEYS_INTERNAL.agent.private_b64;
        this.CONTROL_PUBLIC_KEY = Config.NOISE_KEYS_INTERNAL.control.public_b64;
        
        this.cipher = new NoiseSessionWrapper(
            false, 
            this.AGENT_PRIVATE_KEY,
            this.CONTROL_PUBLIC_KEY
        );
    }

    async cleanup() {
        if (this.requestId) {
            Logger.info(`[${this.requestId}] 执行终端资源清理...`);
        }
        if (this.ptyProcess) {
            // Windows: taskkill 强制结束整个进程树 (对齐 py/Go KillTree)，再关闭 ConPTY/管道
            if (process.platform === 'win32' && this.ptyProcess.pid) {
                this._taskkillTree(this.ptyProcess.pid);
            }
            try { this.ptyProcess.kill(); } catch (e) {}
            this.ptyProcess = null;
        }
        if (this.cipher) this.cipher.free(); 
        
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

    // Windows 进程树击杀 (等价 Unix 进程组击杀; taskkill 报错说明进程已退出，忽略即可)
    _taskkillTree(pid) {
        try {
            exec(`taskkill /F /T /PID ${pid}`, { windowsHide: true }, () => {});
        } catch (e) {}
    }

    // 🚀 所有 WebSocket 事件全部走统一分发器
    _handleRawMessage(msg) {
        if (this.phase === 'handshake') {
            if (this.msgResolvers.length > 0) {
                const resolve = this.msgResolvers.shift();
                resolve(msg);
            } else {
                this.msgQueue.push(msg); // 积压起来
            }
        } else if (this.phase === 'terminal') {
            this._processTerminalMessage(msg);
        }
    }

    // 握手期间从此队列中拿包
    async _receiveWsBytes() {
        if (this.msgQueue.length > 0) {
            return this.msgQueue.shift();
        }
        return new Promise(resolve => {
            this.msgResolvers.push(resolve);
        });
    }

    async _doNoiseHandshake(log) {
        log("🤝 开始 Noise 加密握手...");
        try {
            await this.cipher.init();

            const msg1 = await this._receiveWsBytes();
            const msg2 = this.cipher.processHandshake(msg1);
            if (msg2 && msg2.length > 0) {
                this.websocket.send(msg2);
            }
            
            const msg3 = await this._receiveWsBytes();
            this.cipher.processHandshake(msg3);
            
            if (!this.cipher.handshakeFinished) {
                throw new Error("三次握手交互后仍未进入 Established 状态");
            }
            log("✅ Noise 握手完成，端到端加密通道已建立！");
        } catch (e) {
            log(`💥 握手失败详情: ${e.message}`);
            throw new Error("加密握手失败");
        }
    }

    getAvailableShell() {
        // 🚀 Windows 分支：优先 PowerShell，退而求其次 COMSPEC，最后 cmd.exe (对齐 py/Go defaultTerminalShell)
        if (process.platform === 'win32') {
            const systemRoot = process.env.SystemRoot || 'C:\\Windows';
            const windowsShells = [
                path.join(systemRoot, 'System32', 'WindowsPowerShell', 'v1.0', 'powershell.exe'),
                process.env.COMSPEC,
                path.join(systemRoot, 'System32', 'cmd.exe'),
            ];
            for (const sh of windowsShells) {
                if (sh && fs.existsSync(sh)) return sh;
            }
            return 'cmd.exe';
        }
        // 🚀 1. 核心修复：优先寻找体验更佳的高级富文本 Shell
        const advancedShells = ['/bin/bash', '/bin/zsh', '/bin/ash'];
        for (const sh of advancedShells) {
            if (fs.existsSync(sh)) return sh; // 只要系统里有更好的，直接采用
        }
        // 2. 如果没有高级 Shell，再退一步听从环境变量的安排
        const envShell = process.env.SHELL;
        if (envShell && fs.existsSync(envShell)) return envShell;
        // 3. 最后的兜底
        return '/bin/sh';
    }

    async startSession(ws, requestId, token, metaRequested = false, incognitoRequested = false) {
        this.websocket = ws;
        this.requestId = requestId;
        this.metaRequested = metaRequested;
        this.incognitoRequested = incognitoRequested;
        const log = (msg) => Logger.info(`[终端会话 ${requestId}] ${msg}`);
        
        this.useNoise = !token; 
        log(this.useNoise ? "🔗 检测到 WS 连接，启用 Noise 加密" : "🔐 检测到 Token，视为 WSS 链路，跳过 Noise");

        // 🚀 核心防丢包：一连上立刻全量接管所有报文！
        ws.on('message', (msg) => this._handleRawMessage(msg));

        try {
            if (this.useNoise) {
                await this._doNoiseHandshake(log);
            }
            await this._runTerminal(log);
        } catch (e) {
            log(`❌ 终端会话异常: ${e.message}`);
            await this.cleanup();
        }
    }

    async _runTerminal(log) {
        const shell = this.getAvailableShell();
        log(`🐚 使用 Shell 路径: ${shell}`);

        const env = Object.assign({}, process.env);
        delete env.PROMPT_COMMAND;
        env.TERM = 'xterm-256color';
        if (!env.LANG) env.LANG = 'C.UTF-8';

        // 🕶️ 原生无痕模式 (0.5.5): 面板经 WS query incognito=1 请求后，在 spawn 现场
        // 注入 HISTFILE=/dev/null（仅 Unix；bash/zsh/ash 均认该变量，退出时历史写往
        // /dev/null，内存内 ↑↑ 历史保留），替代旧版面板的命令注入 hack
        if (this.incognitoRequested && process.platform !== 'win32') {
            env.HISTFILE = '/dev/null';
        }

        // 🕶️ 原生无痕: PowerShell 经启动参数禁用 PSReadLine 历史落盘（-Command 在
        // profile 之后执行，可覆盖用户配置）；cmd.exe 无持久历史，无需处理
        const shellArgs = (this.incognitoRequested && process.platform === 'win32' &&
            path.basename(shell).toLowerCase() === 'powershell.exe')
            ? ['-NoExit', '-Command', 'Set-PSReadLineOption -HistorySaveStyle SaveNothing']
            : [];

        // Windows 下 USERPROFILE 优先，无则回退 HOME/当前目录 (对齐 py/Go)
        const cwd = resolveSafeCwd();

        try {
            const spawnOpts = {
                name: 'xterm-256color',
                cols: 80, rows: 24,
                cwd: cwd,
                env: env
            };

            if (process.platform === 'win32') {
                try {
                    this.ptyProcess = pty.spawn(shell, shellArgs, spawnOpts);
                } catch (e) {
                    // ConPTY 不可用/启动失败时回退管道模式 (对齐 py._PipeTerminal / Go.pipeTerminal)
                    log(`⚠️ ConPTY 启动失败，回退管道模式: ${e.message}`);
                    this.ptyProcess = new PipeTerminalShim(shell, env, cwd, shellArgs);
                    this.ptyProcess.spawn();
                }
            } else {
                this.ptyProcess = pty.spawn(shell, shellArgs, spawnOpts);
            }

            log(`🚀 终端进程已启动 (PID: ${this.ptyProcess.pid || 'unknown'})`);

            // welcome 帧先于 onData 挂载与队列回放: 面板永远先拿到 shell 元数据再见到首字节回显
            if (this.metaRequested) {
                this._sendWelcome(shell);
            }

            // 🚀 状态切换：把握手期间积压的 Data 数据全部释放出来执行
            this.phase = 'terminal';
            while (this.msgQueue.length > 0) {
                const msg = this.msgQueue.shift();
                this._processTerminalMessage(msg);
            }

            // --- 发送端 (PTY -> WS) ---
            this.ptyProcess.onData((data) => {
                try {
                    let sendData = Buffer.from(data, 'utf-8');
                    if (this.useNoise && this.cipher && this.cipher.handshakeFinished) {
                        sendData = this.cipher.encrypt(sendData);
                    }
                    if (this.websocket.readyState === 1) { // WebSocket.OPEN
                        this.websocket.send(sendData);
                    }
                } catch (e) {}
            });

            this.ptyProcess.onExit(({ exitCode, signal }) => {
                log(`🔌 终端进程退出 (Code: ${exitCode}, Signal: ${signal})`);
                this.cleanup();
            });

            this.websocket.on('close', () => {
                log("🔌 客户端主动断开");
                this.cleanup();
            });

        } catch (e) {
            log(`💥 启动终端失败: ${e.message}`);
            await this.cleanup();
            throw e;
        }
    }

    // welcome 帧用的 shell 归一化名: basename + 去 .exe 后缀 (powershell.exe -> powershell)
    static normalizeShellName(shellPath) {
        let name = path.basename(String(shellPath || '').trim()).toLowerCase();
        if (name.endsWith('.exe')) name = name.slice(0, -4);
        return name || 'sh';
    }

    // 本次 spawn 的 shell 是否已满足无痕要求 (面板据此决定是否退回命令注入 hack)。
    // Windows: powershell 已带 SaveNothing 参数、cmd 本身无持久历史 -> true; 其余未知 shell -> false
    static incognitoNativeApplied(shellPath) {
        if (process.platform === 'win32') {
            const base = path.basename(String(shellPath || '')).toLowerCase();
            return base === 'powershell.exe' || base === 'cmd.exe';
        }
        return true;
    }

    // meta=1 时在 PTY 输出泵启动前主动推 welcome 元数据帧 (复刻心跳回包的加密发送路径)。
    // WS 帧有序: 面板保证先收到本帧再见到首字节 shell 回显
    _sendWelcome(shellPath) {
        try {
            let payload = Buffer.from(JSON.stringify({
                type: "welcome",
                shell: TerminalSessionHandler.normalizeShellName(shellPath),
                path: shellPath,
                incognito: !!(this.incognitoRequested && TerminalSessionHandler.incognitoNativeApplied(shellPath)),
            }));
            if (this.useNoise && this.cipher && this.cipher.handshakeFinished) {
                payload = this.cipher.encrypt(payload);
            }
            if (this.websocket && this.websocket.readyState === 1) { // WebSocket.OPEN
                this.websocket.send(payload);
            }
        } catch (e) {}
    }

    // 独立出数据处理逻辑，便于排队执行
    _processTerminalMessage(message) {
        if (!this.ptyProcess) return;

        try {
            const rawMsg = Buffer.from(message);
            let decrypted;
            
            if (this.useNoise) {
                // 如果遭遇丢包导致 MAC 错误，由于我们在握手前缓存了消息，此处 MAC 应 100% 成功
                decrypted = this.cipher.decrypt(rawMsg);
            } else {
                decrypted = rawMsg;
            }
            
            let isJson = false;
            let textMsg = decrypted.toString('utf-8');

            if (textMsg.trim().startsWith('{')) {
                try {
                    const data = JSON.parse(textMsg);
                    isJson = true;
                    
                    if (data.type === 'heartbeat') {
                        let reply = Buffer.from(JSON.stringify({ type: "heartbeat" }));
                        if (this.useNoise) reply = this.cipher.encrypt(reply);
                        this.websocket.send(reply);
                        return;
                    }
                    
                    if (data.type === 'resize') {
                        this.ptyProcess.resize(data.cols || 80, data.rows || 24);
                        return;
                    }

                    if (data.type === 'input' && data.data !== undefined) {
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
            Logger.info(`[终端会话 ${this.requestId}] ⚠️ 指令处理异常: ${e.message}`);
            if (this.useNoise) this.cleanup(); 
        }
    }
}
/**
 * 启动主服务
 * @param {Object} [options] - 可选的配置参数对象
 * @param {number|string} [options.PORT] - 端口号
 * @param {string} [options.ECDSA_PUBLIC_KEY_PEM] - ECDSA 公钥
 * @param {string} [options.ECIES_PUBLIC_KEY_PEM] - ECIES 公钥
 * @param {number|string} [options.KMODE] - 启动模式: 0=普通启动, 1=隧道+域名文件+stdin /domain,
 *   2=隧道+shz.al 静默上报 (docs/API.MD 第九节); 非法取值回退 0
 * @param {string} [options.KNAME] - KMODE=2 的 shz.al 自定义名 (≥3 字符)
 * @param {string} [options.KNAME_KEY] - shz.al 管理密码 (≥8 字符, 缺省复用 KNAME)
 * @param {string} [options.KPATH] - KMODE=1 域名文件路径 (缺省 $HOME/domain.txt, 支持 $HOME / ~/ 前缀)
 */
// 加载 noble 曲线到模块级变量 (main 启动时调用; 测试场景可独立调用以启用 TempKeyManager 短格式派生)
async function loadCurves() {
  const curves = await import('@noble/curves/nist.js');
  p256 = curves.p256;
  const secpModule = await import('@noble/curves/secp256k1.js');
  secp256k1 = secpModule.secp256k1;
}

async function main(options = {}) {
  try {
    await loadCurves();
    Logger.debug('Starting main() function...');
    Config.merge(options);
    // 配置校验
    Logger.debug('Validating config...');
    Config.validate();
    Logger.debug('Config validated');

    // 初始化组件
    Logger.debug('Initializing CryptoManager...');
    const cryptoManager = new CryptoManager(Config.ECDSA_PUBLIC_KEY_PEM, Config.ECIES_PUBLIC_KEY_PEM);
    Logger.debug('CryptoManager initialized');

    // 🛡️ 启动熔断：非 DEBUG 模式下 ECDSA 公钥必须成功加载，否则拒绝启动。
    // (配置校验只查字符串非空，此处确认真正可解析，防止格式错误的密钥让验签形同虚设)
    if (!Config.DEBUG && !cryptoManager.ecdsaPubkey) {
      Logger.error('❌ 启动熔断: ECDSA 公钥缺失或解析失败，非 DEBUG 模式下拒绝启动');
      Logger.error('   请检查 ECDSA_PUBKEY 环境变量或 keys/agent_ecdsa_pub.pem 是否为合法 P-256 公钥 (PEM 或 33 字节压缩 Base64)');
      process.exit(1);
    }

    // 🆕 临时密钥管理器 (持久单实例, 供 /api/tempkey 与中间件临时验签/响应加密)
    Logger.debug('Initializing TempKeyManager...');
    const tempKeyManager = new TempKeyManager();
    // 🔐 凭证生命周期: tempkey 过期 → 轮换 SESSION_KEY 与控制端 Noise 密钥对
    tempKeyManager.onExpired = () => Config.rotateOperationalSecrets();
    Logger.debug('TempKeyManager initialized');
    
    Logger.debug('Initializing SystemInfoCollector...');
    const systemInfo = new SystemInfoCollector();
    Logger.debug('SystemInfoCollector initialized');

    // 创建Express应用
    Logger.debug('Creating Express app...');
    const app = express();
    expressWs(app);
    Logger.debug('Express app created and expressWs applied');
  // ============================================================================
    // 🌐 CORS 跨域策略配置 (替代 FastAPI 的 CORSMiddleware)
    // ============================================================================
    app.use((req, res, next) => {
      // 允许的源 (allow_origins)
      res.header('Access-Control-Allow-Origin', '*'); 
      
      // 允许的方法 (allow_methods)
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      
      // 允许前端发送的请求头 (allow_headers)
      res.header(
        'Access-Control-Allow-Headers', 
        'content-type, user-agent, authorization, x-nonce, x-timestamp, x-auth-token, x-aes-encrypted, x-debug, x-file-path, x-file-name, x-chunk-id, x-total-chunks'
      );
      
      // 允许前端读取的响应头 (expose_headers)
      res.header(
        'Access-Control-Expose-Headers', 
        'x-encrypted, x-agent-version, x-file-size, x-original-path'
      );

      // 快速放行 OPTIONS 预检请求 (Preflight)
      if (req.method === 'OPTIONS') {
        // 🌟 x-encrypted 模式位规范 (docs/API.MD 第十节)：DEBUG 模式预检响应也恒 false（生产不发送该头）
        if (Config.DEBUG) {
          res.set('x-encrypted', 'false');
        }
        return res.status(200).end();
      }

      next();
    });
  // 🚀 核心暴力修复：删掉 app.use(express.json()) !
  // 强制把所有请求体 (无论 Content-Type 是 application/json 还是别的) 都读取为纯字符串
  // 🛑 核心修复：显式拒绝拦截 /api/fileraw 接口，防止二进制流被提前转化为文本
  app.use(express.text({ 
    type: (req) => req.path !== '/api/fileraw', 
    limit: '50mb' 
  }));
  
  app.use(express.urlencoded({ extended: true }));
  
 
  app.use(authEncryptMiddleware(cryptoManager, tempKeyManager));

  Logger.debug('Middleware applied, setting up routes...');

  // 路由定义
  // 基础信息
  app.get('/api/baseinfo', async (req, res) => {
    try {
      // P 级只构建一次; local 30s 复用 P 级 virtualization; net 3600s
      const pInfo = await Config.getBaseInfoP();
      const localInfo = await Config.getBaseInfoLocal(pInfo.virtualization || '');
      const netInfo = await Config.getBaseInfoNet();
      const info = SystemInfoCollector.assembleBaseInfo(pInfo, localInfo, netInfo);

      // 根据中间件打上的 req.is_authenticated 认证状态，动态决定是否向前端下发敏感密钥
      // 默认拒绝：仅显式 true 才下发，防止中间件跳过路径(OPTIONS/HEAD 等)漏设状态导致密钥泄露
      if (req.is_authenticated === true) {
        info.session_key = Config.SESSION_KEY;
        info.noise_key = Config.NOISE_KEY;
      } else {
        info.session_key = null;
        info.noise_key = null;
      }

      res.json(info);
      // KMODE=1: 第一次 /api/baseinfo 成功响应后删除域名文件 (KMODE=2 无文件操作)
      if (Config.KMODE === '1') {
        KModeController.onBaseinfoSuccess();
      }
    } catch (e) {
      res.status(500).json({ status: 'error', message: e.message });
    }
  });

  // 🔑 临时密钥对: GET /api/tempkey?ttl=<小时>&format=<full|short> (1~168, 默认24, 超范围422)
  // - 有效期内重复请求返回同一密钥对 (幂等, 不重复生成)
  // - 过期后自动生成新的密钥对, 旧密钥立即作废
  // - 响应按验签来源加密: 静态密钥->控制端静态公钥, 临时密钥->当前临时 ECIES 公钥
  // - format=short 返回短格式 (0.5.8, AI 友好): ECDSA 私钥 64位hex、双公钥 33字节压缩点 Base64
  app.get('/api/tempkey', (req, res) => {
    let ttl = Config.TEMPKEY_DEFAULT_TTL_HOURS;
    if (req.query.ttl !== undefined) {
      const parsed = parseInt(req.query.ttl, 10);
      if (Number.isNaN(parsed) || parsed < 1 || parsed > Config.TEMPKEY_MAX_TTL_HOURS) {
        return res.status(422).json({ error: `ttl must be an integer between 1 and ${Config.TEMPKEY_MAX_TTL_HOURS}` });
      }
      ttl = parsed;
    }

    const rawFormat = typeof req.query.format === 'string' ? req.query.format.trim().toLowerCase() : '';
    let keyFormat;
    if (rawFormat === '' || rawFormat === 'full') {
      keyFormat = 'full';
    } else if (rawFormat === 'short') {
      keyFormat = 'short';
    } else {
      return res.status(422).json({ error: "format must be 'full' or 'short'" });
    }

    const key = tempKeyManager.getOrCreate(ttl);
    const iso = (t) => new Date(t * 1000).toISOString().replace('.000Z', 'Z');
    res.json({
      status: 'ok',
      key_id: key.key_id,
      ttl_seconds: key.ttl_seconds,
      created_at: iso(key.created_at),
      expires_at: iso(key.expires_at),
      ecdsa: keyFormat === 'short' ? {
        private_key: key.ecdsa_private_hex,
        public_key: key.ecdsa_public_b64
      } : {
        private_key: key.ecdsa_private_key.trim(),
        public_key: key.ecdsa_public_key.trim()
      },
      ecies: keyFormat === 'short' ? {
        private_key: key.ecies_private_key,
        public_key: key.ecies_public_b64
      } : {
        private_key: key.ecies_private_key,
        public_key: key.ecies_public_key
      }
    });
  });

  // 实时状态
  app.get('/api/status', async (req, res) => {
    try {
      const now = Math.floor(Date.now() / 1000);

      // 1. 检查 30 秒防刷缓存是否失效
      if (!Config._status_cache || (now - Config._status_cache_time) > Config.STATUS_CACHE_TTL) {
        if (!Config._status_fetch_promise) {
          Config._status_fetch_promise = systemInfo.getRealtimeInfo().then(data => {
            Config._status_cache = data;
            Config._status_cache_time = Math.floor(Date.now() / 1000);
            Config._status_fetch_promise = null; // 释放锁
            Logger.debug("🔄 [Cache] Status 实时监控缓存已过期，已重新生成度量快照。");
            return data;
          }).catch(err => {
            Config._status_fetch_promise = null; // 释放锁
            throw err;
          });
        }
        await Config._status_fetch_promise;
      } else {
        Logger.debug("📦 [Cache] Status 命中监控缓存。");
      }

      // 同样克隆一份干净的副本丢给前端
      const statusInfo = { ...Config._status_cache };
      res.json(statusInfo);
    } catch (e) {
      res.status(500).json({ status: 'error', message: e.message });
    }
  });

  // 命令执行
  // exec 别名路由（0.5.7）：部分平台 WAF/审计规则对路径中的 exec 敏感，
  // 受限环境优先 /api/do，备选 /api/run、/api/work；与 /api/exec 完全等价（签名用实际请求路径）。
  const execHandler = async (req, res) => {
    try {
      let cmd = null;

      if (typeof req.body === 'string') {
        cmd = req.body.trim();
      } else if (req.body && typeof req.body === 'object') {
        cmd = req.body.cmd || '';
      }

      if (!cmd) {
        return res.status(400).json({ status: 'error', message: 'cmd required' });
      }

      const result = await CommandExecutor.execute(cmd, {
        cwd: req.body.cwd,
        env: req.body.env,
        timeout: Config.Rtimeout
      });

      res.json(result);
    } catch (e) {
      res.status(500).json({ status: 'error', message: e.message });
    }
  };
  app.post('/api/exec', execHandler);
  for (const execAlias of ['/api/do', '/api/run', '/api/work']) {
    app.post(execAlias, execHandler);
  }

  // 文件列表
  app.post('/api/file/list', async (req, res) => {
    try {
      const files = await FileManager.listFiles(req.body.path, req.body.recursive);
      res.json({
        status: 'ok',
        count: files.length,
        files
      });
    } catch (e) {
      res.status(500).json({ status: 'error', message: e.message });
    }
  });

  // 文件权限查询
  app.post('/api/file/authority', async (req, res) => {
    try {
      const files = await FileManager.getFilePermissions(req.body.paths || []);
      res.json({
        status: 'ok',
        files
      });
    } catch (e) {
      res.status(500).json({ status: 'error', message: e.message });
    }
  });

  // 文件权限设置
  app.put('/api/file/authority', async (req, res) => {
    try {
      const permissions = req.body.permissions || {};
      const recursive = req.body.recursive === true;

      const result = await FileManager.setFilePermissions(permissions, recursive);
      res.json(result);
    } catch (e) {
      res.status(500).json({ status: 'error', message: e.message });
    }
  });

  // 查看文件内容
  app.post('/api/file/cat', async (req, res) => {
    try {
      const result = await FileManager.readFile(req.body.path);
      res.json(result);
    } catch (e) {
      res.status(500).json({ status: 'error', message: e.message });
    }
  });

  // 上传文件
  app.post('/api/file', async (req, res) => {
    try {
      const result = await FileManager.uploadFile(
        req.body.path,
        req.body.filename,
        req.body.content,
        req.body.chunk_id,
        req.body.total_chunks
      );
      res.json(result);
    } catch (e) {
      res.status(500).json({ status: 'error', message: e.message });
    }
  });
  // ============================================================================
  // 🚀 新增：裸二进制流文件上传接口 (显式指定 express.raw 优先解析，规避文本污染)
  // ============================================================================
  app.post('/api/fileraw', express.raw({ type: 'application/octet-stream', limit: '50mb' }), async (req, res) => {
    try {
      // 从 HTTP Header 中提取元数据并执行 URL 安全解码
      const filePath = decodeURIComponent(req.headers['x-file-path'] || '');
      const filename = decodeURIComponent(req.headers['x-file-name'] || '');
      const chunkIdRaw = req.headers['x-chunk-id'];
      const totalChunksRaw = req.headers['x-total-chunks'];

      if (!filePath || !filename) {
        return res.status(400).json({ 
          status: 'error', 
          completed: false, 
          message: 'Missing required custom headers: X-File-Path and X-File-Name' 
        });
      }

      const chunkId = chunkIdRaw !== undefined ? parseInt(String(chunkIdRaw), 10) : null;
      const totalChunks = totalChunksRaw !== undefined ? parseInt(String(totalChunksRaw), 10) : null;

      // 此时 req.body 已被 express.raw 完美转换为了原生二进制 Buffer 对象
      const buffer = req.body;
      if (!Buffer.isBuffer(buffer)) {
        return res.status(400).json({ 
          status: 'error', 
          completed: false, 
          message: 'Invalid binary stream request body' 
        });
      }

      // 提交给核心驱动
      const result = await FileManager.uploadFileRaw(filePath, filename, buffer, chunkId, totalChunks);
      res.json(result);
    } catch (e) {
      res.status(500).json({ status: 'error', completed: false, message: e.message });
    }
  });
  // 下载文件
  app.post('/api/file/download', async (req, res) => {
    try {
      const result = await FileManager.downloadFile(req.body.path);
      // 🚀 0.5.6: downloadFile 已直返原始 Buffer, 去除 base64 解码往返
      res.set('x-file-size', result.size.toString());
      res.set('x-original-path', result.path);
      res.set('content-type', 'application/octet-stream');
      // 🔐 0.6.1 M10 修复: x-dl-enc:1 且 ≤ DOWNLOAD_ENCRYPT_MAX → AES-GCM(session_key) 容器;
      // 客户端一律按 x-encrypted 响应头分支 (docs/API.MD 下载加密契约)。加密失败 fail-closed,
      // 与 JSON 通道模式位规范一致, 绝不静默降级明文。
      if (!Config.DEBUG && req.header('x-dl-enc') === '1' && Config.DOWNLOAD_ENCRYPT_MAX > 0 && result.size <= Config.DOWNLOAD_ENCRYPT_MAX) {
        try {
          const container = cryptoManager.encryptData(result.content, Buffer.from(Config.SESSION_KEY, 'base64'));
          res.set('x-encrypted', 'true');
          return res.send(container);
        } catch (encErr) {
          return res.status(500).json({ status: 'error', message: 'Download encryption failed' });
        }
      }
      return res.send(result.content);
    } catch (e) {
      res.status(500).json({ status: 'error', message: e.message });
    }
  });

  // 删除文件
  app.delete('/api/file', async (req, res) => {
    try {
      let paths = req.body.paths;
      if (!paths || !Array.isArray(paths)) {
        paths = [];
        if (req.body.path) paths.push(req.body.path);
        if (req.body.path2) paths.push(req.body.path2);
      }
      const results = await FileManager.deleteFiles(paths);
      res.json({ status: 'ok', results });
    } catch (e) {
      res.status(500).json({ status: 'error', message: e.message });
    }
  });

  // 移动/重命名文件
  app.put('/api/file', async (req, res) => {
    try {
      const results = await FileManager.moveFiles(req.body.move_map || req.body);
      res.json({
        status: 'ok',
        total: results.length,
        success: results.filter(r => r.status === 'ok').length,
        results
      });
    } catch (e) {
      res.status(500).json({ status: 'error', message: e.message });
    }
  });

  // 复制文件
  app.post('/api/file/cp', async (req, res) => {
    try {
      const results = await FileManager.copyFiles(req.body);
      res.json({
        status: 'ok',
        total: results.length,
        success: results.filter(r => r.status === 'ok').length,
        results
      });
    } catch (e) {
      res.status(500).json({ status: 'error', message: e.message });
    }
  });

  // 新建目录
  app.post('/api/file/new', async (req, res) => {
    try {
      const result = await FileManager.createDirectory(req.body.path);
      res.json(result);
    } catch (e) {
      res.status(500).json({ status: 'error', message: e.message });
    }
  });

  // 压缩 ZIP 文件 (0.5.4, docs/API.MD 12.2)
  app.post('/api/file/zip', async (req, res) => {
    try {
      const body = req.body || {};
      if (!body.path) return res.status(400).json({ error: 'path required' });
      if (!Array.isArray(body.items) || body.items.length === 0) {
        return res.status(400).json({ error: 'items required (non-empty array)' });
      }
      const result = await FileManager.zipItems(body.path, body.items, !!body.flat);
      res.json(result);
    } catch (e) {
      const code = /Access denied/.test(e.message) ? 403 : 400;
      res.status(code).json({ status: 'error', message: e.message });
    }
  });

  // 解压 ZIP 文件 (0.5.4, docs/API.MD 12.1)
  app.post('/api/file/unzip', async (req, res) => {
    try {
      const body = req.body || {};
      if (!body.path) return res.status(400).json({ error: 'path required' });
      const result = await FileManager.unzipArchive(
        body.path,
        body.dest_path,
        body.overwrite !== false,
        Array.isArray(body.entries) ? body.entries : null
      );
      res.json(result);
    } catch (e) {
      const code = /Access denied/.test(e.message) ? 403 : 400;
      res.status(code).json({ status: 'error', message: e.message });
    }
  });

  // 任务管理
  app.get('/api/task/onetime', (req, res) => {
    res.json(TaskManager.getOnetimeTasks());
  });

  app.post('/api/task/onetime', async (req, res) => {
    try {
      const result = await TaskManager.setOnetimeTasks(req.body);
      res.json(result);
    } catch (e) {
      res.status(500).json({ status: 'error', message: e.message });
    }
  });

  app.get('/api/task/cron', (req, res) => {
    res.json(TaskManager.getCronTasks());
  });

  app.post('/api/task/cron', (req, res) => {
    try {
      const result = TaskManager.setCronTasks(req.body);
      res.json(result);
    } catch (e) {
      res.status(500).json({ status: 'error', message: e.message });
    }
  });

  // 任务状态
  app.get('/api/task/status', (req, res) => {
    res.json(TaskManager.getTaskStatus());
  });

  // 一次性任务日志
  app.get('/api/task/log/onetime', (req, res) => {
    let limit = parseInt(req.query.limit, 10) || 50;
    limit = Math.min(Math.max(limit, 1), 100);
    res.json(TaskManager.getOnetimeLogs(limit));
  });

  // 定时任务日志
  app.get('/api/task/log/cron', (req, res) => {
    let limit = parseInt(req.query.limit, 10) || 50;
    limit = Math.min(Math.max(limit, 1), 100);
    res.json(TaskManager.getCronLogs(limit));
  });

  // 清空一次性任务日志
  app.delete('/api/task/log/onetime', (req, res) => {
    res.json(TaskManager.clearOnetimeLogs());
  });

  // 清空定时任务日志
  app.delete('/api/task/log/cron', (req, res) => {
    res.json(TaskManager.clearCronLogs());
  });

  // 日志统计
  app.get('/api/task/log/summary', (req, res) => {
    res.json(TaskManager.getLogSummary());
  });

  // 手动触发一次性任务
  app.post('/api/task/onetime/execute', async (req, res) => {
    try {
      const result = await TaskManager.executeOnetimeTasks();
      res.json(result);
    } catch (e) {
      res.status(500).json({ status: 'error', message: e.message });
    }
  });

  // ============================================================================
  // 🚀 Argo 临时隧道管理 (复用 cftunnel-product.js 的 Quick Tunnel 协议实现)
  // ============================================================================
  const argoTunnelLogger = {
    debug: (...parts) => Logger.debug(parts.join(' ')),
    info: (...parts) => Logger.info(parts.join(' ')),
    warning: (...parts) => Logger.warn(parts.join(' '))
  };
  const argoTunnelManager = new ArgoTunnelManager(argoTunnelLogger);

  // 查询临时隧道列表
  app.get('/api/argo', (req, res) => {
    const tunnels = argoTunnelManager.list();
    res.json({ status: 'ok', count: tunnels.length, tunnels });
  });

  // 创建临时隧道
  app.post('/api/argo', async (req, res) => {
    try {
      const body = parseJsonBody(req.body);
      let port = body.port;
      if (port === undefined || port === null || port === '') {
        port = Config.PORT;
      }
      const portNum = Number(port);
      if (!Number.isInteger(portNum) || portNum < 1 || portNum > 65535) {
        return res.status(422).json({
          status: 'error',
          created: false,
          port,
          message: 'port must be an integer between 1 and 65535'
        });
      }
      const tunnel = await argoTunnelManager.create(
        portNum,
        body.duplicate === true,
        // 🚦 quic 字段按隧道选择边缘传输 (缺省 h2): 接受 true/1/'true', 其余按 h2
        body.quic === true || body.quic === 1 || String(body.quic).toLowerCase() === 'true'
      );
      res.json({
        status: 'ok',
        created: true,
        tunnel_domain: tunnel.tunnelDomain,
        port: tunnel.port,
        created_at: tunnel.createdAt,
        transport: tunnel.transport
      });
    } catch (e) {
      res.status(e.status || 500).json({
        status: 'error',
        created: false,
        port: e.port ?? null,
        message: e.message
      });
    }
  });

  // 删除临时隧道
  app.delete('/api/argo', async (req, res) => {
    try {
      const body = parseJsonBody(req.body);
      const port = body.port;
      const portNum = Number(port);
      if (port === undefined || port === null || port === '' || !Number.isInteger(portNum) || portNum < 1 || portNum > 65535) {
        return res.status(422).json({
          status: 'error',
          deleted: 0,
          port: port ?? null,
          message: 'port is required and must be an integer between 1 and 65535'
        });
      }
      const result = await argoTunnelManager.remove(portNum, body.tunnel_domain);
      if (result.status === 'ok') {
        return res.json({ status: 'ok', deleted: result.deleted, port: portNum, tunnels: result.tunnels });
      }
      return res.status(result.status).json({
        status: 'error',
        deleted: 0,
        port: portNum,
        message: result.message
      });
    } catch (e) {
      res.status(500).json({ status: 'error', deleted: 0, message: e.message });
    }
  });

  // WebSocket终端
  Logger.debug('Setting up WebSocket terminal route...');
  app.ws('/api/ws/*', async (ws, req) => {
    // req.params[0] 会捕获 '*' 匹配到的具体路径部分
    // 例如请求 /api/ws/terminal/user1，req.params[0] 就是 'terminal/user1'
    const subPath = req.params[0];
    
    Logger.debug(`WebSocket request URL: ${req.url}`);
    Logger.debug(`Matched Sub-path: ${subPath}`);

    const requestId = req.query.request_id;
    const token = req.query.token;
    // meta=1: 面板可解析控制帧, 请求 welcome 元数据帧; incognito=1: 请求原生无痕会话
    const metaFlag = req.query.meta === '1';
    const incognitoFlag = req.query.incognito === '1';

    Logger.debug(`WebSocket connection attempt with request_id: ${requestId}`);

    if (!requestId) {
      Logger.debug('Closing connection due to missing request_id');
      ws.close(1008, "Missing request_id");
      return;
    }

    // WSS 降级模式(token 认证)：token 必须等于 HMAC(SESSION_KEY) 降级令牌（常数时间比较）。
    // 🔐 安全修复：不再接受"agent 公钥"作 token —— 该值可被任意 Noise 握手发起方从 msg2 解出。
    if (token) {
      const expect = Config.wsDowngradeToken();
      const tokBuf = Buffer.from(String(token), 'utf-8');
      const expBuf = Buffer.from(expect, 'utf-8');
      const tokOk = tokBuf.length === expBuf.length && crypto.timingSafeEqual(tokBuf, expBuf);
      if (!tokOk) {
        Logger.warn(`[终端会话 ${requestId}] 🚨 认证失败，非法 Token！`);
        ws.close(1008, "Authentication failed: Invalid Token");
        return;
      }
    }

    const handler = new TerminalSessionHandler();
    await handler.startSession(ws, requestId, token, metaFlag, incognitoFlag);
  });
  Logger.debug('WebSocket route configured');

  // 💾 任务持久化恢复 (0.5.7, docs/API.MD 十三): listen 之前恢复, 离线自治
  TaskManager.restoreFromStore();

  // 启动服务器
  Logger.debug('Starting HTTP server...');
  const server = app.listen(Config.PORT, Config.HOST, () => {
    Logger.debug(`🚀 Kisama Agent Node.js v${Config.AGENT_VERSION} started on ${Config.HOST}:${Config.PORT}`);
    Logger.debug('Server listening successfully');
    // KMODE=1: 隧道 + 域名文件 + stdin 监听; KMODE=2: 隧道 + shz.al 静默上报 (docs/API.MD 第九节)
    // KMODE=2 但 KNAME 缺失/非法时退化为普通启动 (等同 KMODE=0)
    if (Config.KMODE === '1' || (Config.KMODE === '2' && KModeController.knameValid())) {
      KModeController.activate(argoTunnelManager);
    }
  });

  // 优雅关闭
  process.on('SIGINT', () => {
    Logger.debug('Shutting down...');
    server.close();
    process.exit(0);
  });
  
  Logger.debug('SIGINT handler registered');
  } catch (err) {
    Logger.error('Fatal error in main():', err);
    process.exit(1);
  }
}

// 启动应用，增加判断当遇到ts-node入口时仍然启动服务
if (require.main === module||require.main?.filename?.includes('ts-node')) {
  main().catch(Logger.error);
}

module.exports = { main, loadCurves, Config, CryptoManager, SystemInfoCollector, CommandExecutor, FileManager, TaskManager, TaskStore, ArgoTunnelManager, KModeController, ZipArchiver, TempKeyManager, SecureDns, installDnsHook, patchDnsLookup, QuicConnection, QuicSession, QuicTlsClient, QuicKeys, QuicReader, quicInitialKeys, quicNextKeys, quicWriteVarint, quicReadVarint, quicDecodePacketNumber, quicApplyProtection, quicRemoveProtection, quicEncodeTransportParameters, quicDecodeTransportParameters, quicEncodeAck, quicRangesFromAck, hkdfExpandLabel, CapnpBuilder, capnpMessages, capnpWords, capnpStruct, capnpText, capnpStructList, capnpReturnResult, capnpConnectRequest, capnpConnectResponse, connectEdgeQuic, buildQuicRequest, verifyEdgeQuicCertificate, QUIC_DATA_STREAM_PREAMBLE, QUIC_SERVER_NAME, QUIC_ALPN };