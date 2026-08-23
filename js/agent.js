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
const path = require('path');
const os = require('os');
const { exec, spawn } = require('child_process');
const cron = require('node-cron');
const si = require('systeminformation');
const { encrypt: ecies_encrypt } = require('eciesjs');
const base64 = require('base64-js');
const expressWs = require('express-ws');
const createNoise = require('noise-c.wasm');

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
  static LOG_LEVEL = parseInt(process.env.LOG_LEVEL || (this.DEBUG ? '0' : '2'), 10);
  
  static ECDSA_PUBLIC_KEY_PEM = Config._getConfigValue('ECDSA_PUBKEY', 'keys/agent_ecdsa_pub.pem') || 'ECDSA公钥内容';
  static ECIES_PUBLIC_KEY_PEM = Config._getConfigValue('ECIES_PUBKEY', 'keys/agent_ecies_pub.b64') || 'ECIES公钥内容';
  static TEMPKEY_DEFAULT_TTL_HOURS = parseInt(process.env.TEMPKEY_TTL || '24', 10);
  static TEMPKEY_MAX_TTL_HOURS = parseInt(process.env.TEMPKEY_MAX_TTL || '168', 10);

  static FILE_ROOT = resolveSafeFileRoot();
  static MAX_UPLOAD_SIZE = parseInt(process.env.MAX_UPLOAD_SIZE || '104857600');
  static FOLLOW_SYMLINKS = (process.env.FOLLOW_SYMLINKS || 'false').toLowerCase() === 'true';
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
  static AGENT_VERSION = process.env.AGENT_VERSION || '0.4.6-js';
  static SESSION_KEY = crypto.randomBytes(32).toString('base64');
  // static SESSION_KEY =""
  static NOISE_KEYS_INTERNAL = NoiseKeyGenerator.generatePair();
  static NOISE_KEY = {
    controller: {
      private: this.NOISE_KEYS_INTERNAL.control.private_b64
    },
    agent: {
      public: this.NOISE_KEYS_INTERNAL.agent.public_b64
    }
  };
  // ================= 🚀 新增：缓存模块配置 =================
  static BASEINFO_CACHE_TTL = 3600; // 基础信息缓存 1 小时 (单位: 秒)
  static STATUS_CACHE_TTL = 30;     // 实时状态缓存 30 秒 (单位: 秒)

  static _baseinfo_cache = null;
  static _baseinfo_cache_time = 0;
  static _baseinfo_fetch_promise = null; // 用于高并发下的异步复用锁

  static _status_cache = null;
  static _status_cache_time = 0;
  static _status_fetch_promise = null;   // 用于高并发下的异步复用锁

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
  }
}

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
  }

  getOrCreate(ttlHours) {
    if (this._key && !this._isExpired(this._key)) {
      return this._key;
    }
    this._key = this._generate(ttlHours);
    Logger.info(`🔑 [TempKey] 新临时密钥已生成: key_id=${this._key.key_id}, 有效期 ${ttlHours} 小时`);
    return this._key;
  }

  getActiveEcdsaVk() {
    if (this._key && !this._isExpired(this._key)) return this._key.ecdsa_vk;
    return null;
  }

  getActiveEciesPub() {
    if (this._key && !this._isExpired(this._key)) return this._key.ecies_pub;
    return null;
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

    const now = Math.floor(Date.now() / 1000);
    const ttlSeconds = ttlHours * 3600;
    return {
      key_id: crypto.randomBytes(8).toString('hex'),
      created_at: now,
      expires_at: now + ttlSeconds,
      ttl_seconds: ttlSeconds,
      // 下发字段
      ecdsa_private_key: ecdsaPrivatePem,
      ecdsa_public_key: ecdsaPublicPem,
      ecies_private_key: eciesPriv.toString('hex'),
      ecies_public_key: eciesPub.toString('hex'),
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

  verifySignature(nonce, timestamp, authToken, tempVk = null) {
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

      // 组合验签: 优先静态密钥, 无果再尝试当前有效临时密钥
      const message = `${nonce}${timestamp}`;
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
    if (Config.DEBUG || !this.eciesPubkey) {
      return JSON.stringify(data);
    }

    try {
      const plaintextStr = JSON.stringify(data);
      const plaintextBuffer = Buffer.from(plaintextStr, 'utf-8');
      const pubKeyBuffer = pubkeyBuffer || Buffer.from(this.eciesPubkey);
      
      const ciphertext = ecies_encrypt(pubKeyBuffer, plaintextBuffer);
      
      return Buffer.from(ciphertext).toString('base64');
      
    } catch (e) {
      const errorData = {
        _encrypt_error: e.message,
        _raw: Config.DEBUG ? data : null
      };
      return JSON.stringify(errorData);
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
}
// ============================================================================
// 🛡️ 认证 + 加密中间件 (逻辑解耦修复版)
// ============================================================================
function authEncryptMiddleware(cryptoManager, tempKeyManager = null) {
  return async (req, res, next) => {
    // === 阶段 0: 放行 WebSocket 和预检请求 ===
    // 仅按路径前缀 /api/ws/ 放行；不可依据 Upgrade 头判断，否则普通请求伪造该头即可绕过全部认证
    if (req.path.startsWith('/api/ws/')) {
      return next();
    }
    if (req.method === 'OPTIONS' || req.method === 'HEAD') {
      return next();
    }

    // 🌟 1. 零信任原则：一进来默认所有人都是未认证状态 (false)
    req.is_authenticated = false;
    const bypassPaths = ['/api/baseinfo', '/api/status'];

    // 🌟 2. 优先判定 DEBUG 模式：如果为 true 直接拉满信任并提前放行
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
      const tempVk = tempKeyManager ? tempKeyManager.getActiveEcdsaVk() : null;
      const keySource = cryptoManager.verifySignature(nonce, timestamp, authToken, tempVk);
      
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

    // === 阶段 2 & 3: 拦截响应方法并执行输出层业务逻辑 ===
    const originalSend = res.send;
    
    res.send = function(data) {
      if (res.get('Content-Type') && res.get('Content-Type').includes('application/json')) {
        try {
          const jsonData = typeof data === 'string' ? JSON.parse(data) : data;
          
          // 根据中间件最终确立的真伪身份标签，决定是否在出口裹上密文外衣
          if (req.is_authenticated) {
            // 按验签来源选择对应 ECIES 公钥: 静态密钥->静态公钥, 临时密钥->临时公钥
            let targetPub = null;
            if (req.key_source === 'temp' && tempKeyManager) {
              targetPub = tempKeyManager.getActiveEciesPub();
            }
            const encryptedContent = cryptoManager.encryptResponse(jsonData, targetPub);
            const encoded = typeof encryptedContent === 'string' ? encryptedContent : JSON.stringify(encryptedContent);

            res.set('x-encrypted', 'true');
            res.set('x-agent-version', Config.AGENT_VERSION);
            res.set('Content-Length', Buffer.byteLength(encoded, 'utf8').toString());
            return originalSend.call(this, encoded);
          } else {
            // 匿名放行路径（如未授权访问 baseinfo）直接直下明文，不污染报文
            const encoded = typeof data === 'string' ? data : JSON.stringify(jsonData);
            res.set('x-encrypted', 'false');
            res.set('Content-Length', Buffer.byteLength(encoded, 'utf8').toString());
            return originalSend.call(this, encoded);
          }
          
        } catch (e) {
          if (Config.DEBUG) Logger.error(`💥 [Response Encrypt]: ${e.message}`);
        }
      }
      return originalSend.call(this, data);
    };

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
    const [cpu, mem, osInfo, network] = await Promise.all([
      si.cpu(),
      this.getContainerMemory(),
      si.osInfo(),
      si.networkInterfaces()
    ]);
    let ipv4 = null;
    let ipv6 = null;
    try {
        [ipv4, ipv6] = await Promise.all([
            this.getPublicIpV4(),
            this.getPublicIpV6()
        ]);
    } catch (error) {
        Logger.debug(`获取 IP 地址失败: ${error.message}`, 1);
    }

    return {
      arch: os.arch(),
      cpu_cores: cpu.cores,
      cpu_name: cpu.brand,
      disk_total: (await si.fsSize())[0]?.size || 0,
      gpu_name: '',
      ipv4: ipv4,
      ipv6: ipv6,
      mem_total: mem.total,
      os: `${osInfo.distro} ${osInfo.release}`,
      kernel_version: osInfo.kernel,
      swap_total: mem.swaptotal,
      version: Config.AGENT_VERSION,
      virtualization: await this._getVirtualization(),
      session_key: Config.SESSION_KEY,
      noise_key: Config.NOISE_KEY
    };
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
      // 1. 基础语法校验：必须只包含 16 进制字符和冒号，且至少包含一个冒号
      if (!/^[0-9a-fA-F:]+$/.test(ip) || !ip.includes(':')) {
          return false;
      }

      // 2. 过滤本地、私有和特殊 IPv6 地址
      // ^(fe[89ab])  匹配链路本地地址 (fe80::/10)
      // ^(f[cd])     匹配唯一本地地址 (fc00::/7，涵盖了 fc 和 fd)
      // ^::1$        匹配本地回环地址
      // ^::$         匹配未指定地址
      if (/^(fe[89ab]|f[cd]|::1$|::$)/i.test(ip)) {
          return false;
      }

      return true;
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
// 📁 文件管理器
// ============================================================================
class FileManager {
  static async listFiles(dirPath, recursive = false) {
    const fullPath = path.resolve(Config.FILE_ROOT, dirPath || '.');

    if (!fullPath.startsWith(Config.FILE_ROOT)) {
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

      if (!fullPath.startsWith(Config.FILE_ROOT)) {
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
      if (!fullPath.startsWith(Config.FILE_ROOT)) {
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

    if (!fullPath.startsWith(Config.FILE_ROOT)) {
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

    if (!targetPath.startsWith(Config.FILE_ROOT)) {
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

        // cleanup chunks
        for (const partFile of fs.readdirSync(chunkDir)) {
          fs.unlinkSync(path.join(chunkDir, partFile));
        }
        fs.rmSync(chunkDir, { recursive: true, force: true });
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

    if (!targetPath.startsWith(Config.FILE_ROOT)) {
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

        // 清理临时切片
        for (const partFile of fs.readdirSync(chunkDir)) {
          fs.unlinkSync(path.join(chunkDir, partFile));
        }
        fs.rmSync(chunkDir, { recursive: true, force: true });

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

    if (!fullPath.startsWith(Config.FILE_ROOT)) {
      throw new Error('Access denied: path outside root');
    }

    if (!fs.existsSync(fullPath)) {
      throw new Error('File not found');
    }

    const stats = fs.statSync(fullPath);
    const content = fs.readFileSync(fullPath);
    const encoded = base64.fromByteArray(content);

    return {
      path: path.relative(Config.FILE_ROOT, fullPath),
      content: encoded,
      size: stats.size
    };
  }

  static async deleteFiles(paths) {
    const results = [];

    for (const filePath of paths) {
      const fullPath = path.resolve(Config.FILE_ROOT, filePath);

      if (!fullPath.startsWith(Config.FILE_ROOT)) {
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

      if (!srcPath.startsWith(Config.FILE_ROOT) || !destPath.startsWith(Config.FILE_ROOT)) {
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

      if (!srcPath.startsWith(Config.FILE_ROOT) || !destPath.startsWith(Config.FILE_ROOT)) {
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

    if (!fullPath.startsWith(Config.FILE_ROOT)) {
      throw new Error('Access denied: path outside root');
    }

    fs.mkdirSync(fullPath, { recursive: true });

    return {
      status: 'ok',
      path: path.relative(Config.FILE_ROOT, fullPath)
    };
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

  static async setOnetimeTasks(tasks) {
    Config.onetasks = tasks || [];
    Config.InitTask = true;

    const executed = [];
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

    return {
      status: 'ok',
      count: Config.onetasks.length,
      tasks: Config.onetasks,
      executed
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

    Config.crontasks = tasks || {};

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
      tasks: Config.crontasks
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
}

// ============================================================================
// 🚀 Cloudflare Quick Tunnel 协议实现 (内联自 cftunnel-product.js, 纯标准库)
// ============================================================================
const QUICK_SERVICE = 'https://api.trycloudflare.com';
const EDGE_HOSTS = ['region1.v2.argotunnel.com', 'region2.v2.argotunnel.com'];
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
        let headerWords = 2 + segments;
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
    if (data.length % 8 || data.length < 24) {
        throw new Error('short Cap\'n Proto return');
    }
    const words = [];
    for (let i = 0; i < data.length / 8; i++) {
        words.push(data.readBigUInt64LE(i * 8));
    }
    let msgTarget, msgData, msgPtrs;
    [msgTarget, msgData, msgPtrs] = capnpStruct(words, 0);
    if (msgData < 1 || (words[msgTarget] & 0xFFFFn) !== 3n) {
        throw new Error('not an RPC return message');
    }
    let retTarget, retData, retPtrs;
    [retTarget, retData, retPtrs] = capnpStruct(words, msgTarget + msgData);
    const which = Number((words[retTarget] >> 48n) & 0xFFFFn);
    if (which === 1) {
        return { ok: false, error: capnpText(words, retTarget + retData) };
    }
    if (which !== 0) {
        return { ok: false, error: 'RPC return union ' + which };
    }
    let payloadTarget, payloadData, payloadPtrs;
    [payloadTarget, payloadData, payloadPtrs] = capnpStruct(words, retTarget + retData);
    let contentTarget, contentData, contentPtrs;
    [contentTarget, contentData, contentPtrs] = capnpStruct(words, payloadTarget + payloadData);
    const union = words[contentTarget];
    const unionWhich = Number(union & 0xFFFFn);
    if (unionWhich === 0) {
        return { ok: false, error: capnpText(words, contentTarget + contentData) };
    }
    if (unionWhich !== 1) {
        return { ok: false, error: 'registration union ' + unionWhich };
    }
    let detailsTarget, detailsData, detailsPtrs;
    [detailsTarget, detailsData, detailsPtrs] = capnpStruct(words, contentTarget + contentData);
    const location = capnpText(words, detailsTarget + detailsData + 1);
    return { ok: true, location: location, remoteManaged: Boolean(words[detailsTarget] & 1n) };
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
    constructor(connection, streamId, logger) {
        this.connection = connection;
        this.streamId = streamId;
        this.log = logger;
        this.buffer = Buffer.alloc(0);
        this.finished = false;
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
                if (result.ok) {
                    this.log.info('tunnel connection registered at ' + (result.location || 'unknown'));
                    this.connection.registered = true;
                } else {
                    this.log.warning('tunnel registration failed: ' + (result.error || 'unknown error'));
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
                        rejectUnauthorized: verifyCertificate,
                    });
                    sock.setTimeout(10000, () => sock.destroy(new Error('connection timeout')));
                    sock.on('error', reject);
                    sock.on('secureConnect', () => {
                        const alpn = sock.alpnProtocol;
                        if (alpn && alpn !== 'h2') {
                            sock.destroy(new Error('edge did not negotiate h2'));
                            return;
                        }
                        sock.setTimeout(0);
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
// 🚀 Argo 临时隧道管理器 (复用 cftunnel-product.js 的 Quick Tunnel 协议实现)
// ============================================================================
const argoRetrySeconds = 2;

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
  }

  async create(port, duplicate) {
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
      stopped: false,
      sock: null,
      runPromise: null
    };
    entry.runPromise = this._runLoop(entry, accountTag, tunnelSecret, tunnelId)
      .catch((err) => this.log.warning('argo tunnel loop for ' + tunnelDomain + ' ended: ' + err.message));
    existing.push(entry);
    this.tunnels.set(port, existing);
    this.log.info('argo tunnel created: ' + tunnelDomain + ' -> 127.0.0.1:' + port);
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
          created_at: entry.createdAt
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
      if (entry.sock !== null) {
        try { entry.sock.destroy(); } catch (ignored) {}
      }
      await entry.runPromise.catch(() => {});
      deleted.push({
        tunnel_domain: entry.tunnelDomain,
        port: entry.port,
        created_at: entry.createdAt
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
    while (!entry.stopped) {
      let sock = null;
      try {
        sock = await connectEdge(false, this.log);
        if (entry.stopped) {
          try { sock.destroy(); } catch (ignored) {}
          break;
        }
        entry.sock = sock;
        await new H2Connection(
          sock, origin, accountTag, tunnelSecret, tunnelId, 0,
          this.log, entry.tunnelDomain, false, { printed: true }
        ).run();
      } catch (err) {
        if (!entry.stopped) {
          this.log.warning('argo tunnel ' + entry.tunnelDomain + ' connection closed: ' + err.message);
        }
      } finally {
        if (sock !== null) {
          try { sock.destroy(); } catch (ignored) {}
        }
        entry.sock = null;
      }
      if (!entry.stopped) {
        await new Promise((resolve) => setTimeout(resolve, argoRetrySeconds * 1000));
      }
    }
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
    constructor(shell, env, cwd) {
        this.shell = shell;
        this.env = env;
        this.cwd = cwd;
        this.proc = null;
        this.pid = 0;
        this._onDataCb = null;
        this._onExitCb = null;
    }

    spawn() {
        this.proc = spawn(this.shell, [], {
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

    async startSession(ws, requestId, token) {
        this.websocket = ws;
        this.requestId = requestId;
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
                    this.ptyProcess = pty.spawn(shell, [], spawnOpts);
                } catch (e) {
                    // ConPTY 不可用/启动失败时回退管道模式 (对齐 py._PipeTerminal / Go.pipeTerminal)
                    log(`⚠️ ConPTY 启动失败，回退管道模式: ${e.message}`);
                    this.ptyProcess = new PipeTerminalShim(shell, env, cwd);
                    this.ptyProcess.spawn();
                }
            } else {
                this.ptyProcess = pty.spawn(shell, [], spawnOpts);
            }

            log(`🚀 终端进程已启动 (PID: ${this.ptyProcess.pid || 'unknown'})`);

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
 */
async function main(options = {}) {
  try {
    const curves = await import('@noble/curves/nist.js');
    p256 = curves.p256;
    const secpModule = await import('@noble/curves/secp256k1.js');
    secp256k1 = secpModule.secp256k1;
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
      const now = Math.floor(Date.now() / 1000);

      // 1. 检查缓存是否过期，如果过期则安全地重新调度
      if (!Config._baseinfo_cache || (now - Config._baseinfo_cache_time) > Config.BASEINFO_CACHE_TTL) {
        // 🔒 利用原子 Promise 锁解决 Cache Stampede (惊群效应)
        // 当数百个并发请求同时涌入时，他们会排队等待并复用同一个底层的系统数据抓取器
        if (!Config._baseinfo_fetch_promise) {
          Config._baseinfo_fetch_promise = systemInfo.getBasicInfo().then(data => {
            Config._baseinfo_cache = data;
            Config._baseinfo_cache_time = Math.floor(Date.now() / 1000);
            Config._baseinfo_fetch_promise = null; // 释放锁
            Logger.debug("🔄 [Cache] BaseInfo 缓存已过期，已重新调度系统资源进行更新。");
            return data;
          }).catch(err => {
            Config._baseinfo_fetch_promise = null; // 遇错强制释放锁，防系统死锁
            throw err;
          });
        }
        await Config._baseinfo_fetch_promise;
      } else {
        Logger.debug("📦 [Cache] BaseInfo 命中有效缓存，直接输出。");
      }

      // ⚠️ 关键安全隔离步骤：采用 ES6 扩展运算符进行浅拷贝解耦副本
      // 绝对不能直接修改全局 Config._baseinfo_cache 的属性，否则会导致敏感密钥永久泄露给后续的匿名请求
      const info = { ...Config._baseinfo_cache };
      
      // 2. 根据中间件打上的 req.is_authenticated 认证状态，动态决定是否向前端下发敏感密钥
      // 默认拒绝：仅显式 true 才下发，防止中间件跳过路径(OPTIONS/HEAD 等)漏设状态导致密钥泄露
      if (req.is_authenticated === true) {
        info.session_key = Config.SESSION_KEY;
        info.noise_key = Config.NOISE_KEY;
      } else {
        info.session_key = null;
        info.noise_key = null;
      }
      
      res.json(info);
    } catch (e) {
      res.status(500).json({ status: 'error', message: e.message });
    }
  });

  // 🔑 临时密钥对: GET /api/tempkey?ttl=<小时> (1~168, 默认24, 超范围422)
  // - 有效期内重复请求返回同一密钥对 (幂等, 不重复生成)
  // - 过期后自动生成新的密钥对, 旧密钥立即作废
  // - 响应按验签来源加密: 静态密钥->控制端静态公钥, 临时密钥->当前临时 ECIES 公钥
  app.get('/api/tempkey', (req, res) => {
    let ttl = Config.TEMPKEY_DEFAULT_TTL_HOURS;
    if (req.query.ttl !== undefined) {
      const parsed = parseInt(req.query.ttl, 10);
      if (Number.isNaN(parsed) || parsed < 1 || parsed > Config.TEMPKEY_MAX_TTL_HOURS) {
        return res.status(422).json({ error: `ttl must be an integer between 1 and ${Config.TEMPKEY_MAX_TTL_HOURS}` });
      }
      ttl = parsed;
    }

    const key = tempKeyManager.getOrCreate(ttl);
    const iso = (t) => new Date(t * 1000).toISOString().replace('.000Z', 'Z');
    res.json({
      status: 'ok',
      key_id: key.key_id,
      ttl_seconds: key.ttl_seconds,
      created_at: iso(key.created_at),
      expires_at: iso(key.expires_at),
      ecdsa: {
        private_key: key.ecdsa_private_key.trim(),
        public_key: key.ecdsa_public_key.trim()
      },
      ecies: {
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
  app.post('/api/exec', async (req, res) => {
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
  });

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
      const fileBuffer = Buffer.from(result.content, 'base64');
      res.set('x-file-size', result.size.toString());
      res.set('x-original-path', result.path);
      res.set('content-type', 'application/octet-stream');
      return res.send(fileBuffer);
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
      const tunnel = await argoTunnelManager.create(portNum, body.duplicate === true);
      res.json({
        status: 'ok',
        created: true,
        tunnel_domain: tunnel.tunnelDomain,
        port: tunnel.port,
        created_at: tunnel.createdAt
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

    Logger.debug(`WebSocket connection attempt with request_id: ${requestId}`);

    if (!requestId) {
      Logger.debug('Closing connection due to missing request_id');
      ws.close(1008, "Missing request_id");
      return;
    }

    // WSS 降级模式(token 认证)：非空 token 必须等于 agent 公钥 b64，伪造值直接拒绝 (对齐 Python 版)
    if (token && token !== Config.NOISE_KEYS_INTERNAL.agent.public_b64) {
      Logger.warn(`[终端会话 ${requestId}] 🚨 认证失败，非法 Token！`);
      ws.close(1008, "Authentication failed: Invalid Token");
      return;
    }

    const handler = new TerminalSessionHandler();
    await handler.startSession(ws, requestId, token);
  });
  Logger.debug('WebSocket route configured');

  // 启动服务器
  Logger.debug('Starting HTTP server...');
  const server = app.listen(Config.PORT, Config.HOST, () => {
    Logger.debug(`🚀 Kisama Agent Node.js v${Config.AGENT_VERSION} started on ${Config.HOST}:${Config.PORT}`);
    Logger.debug('Server listening successfully');
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

module.exports = { main,Config, CryptoManager, SystemInfoCollector, CommandExecutor, FileManager, TaskManager, ArgoTunnelManager };