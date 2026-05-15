#!/usr/bin/env node

// ============================================================================
// 📦 依赖导入
// ============================================================================
const express = require('express');
const crypto = require('crypto');
const fs = require('fs');
const fsp = require('fs').promises;
const path = require('path');
const os = require('os');
const { exec } = require('child_process');
const cron = require('node-cron');
const si = require('systeminformation');
const { encrypt: ecies_encrypt } = require('eciesjs');
const base64 = require('base64-js');
const pty = require('node-pty');
const expressWs = require('express-ws');
const createNoise = require('noise-c.wasm');
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
  static TIMESTAMP_WINDOW = parseInt(process.env.TIMESTAMP_WINDOW || '30');
  static LOG_LEVEL = parseInt(process.env.LOG_LEVEL || (this.DEBUG ? '0' : '2'), 10);
  
  static ECDSA_PUBLIC_KEY_PEM = Config._getConfigValue('ECDSA_PUBKEY', 'keys/agent_ecdsa_pub.pem') || 'ECDSA公钥内容';
  static ECIES_PUBLIC_KEY_PEM = Config._getConfigValue('ECIES_PUBKEY', 'keys/agent_ecies_pub.b64') || 'ECIES公钥内容';

  static FILE_ROOT = process.env.FILE_ROOT || os.homedir();
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
  static PORT = parseInt(process.env.PORT || process.env.SERVER_PORT || '8000');
  static AGENT_VERSION = process.env.AGENT_VERSION || '0.0.6-js';
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
}

// ============================================================================
// 🔐 加密模块: ECDSA签名验证 + ECIES加密
// ============================================================================
class CryptoManager {
  constructor(ecdsaPubkeyPem, eciesPubkeyB64) {
    this.ecdsaPubkey = null;
    this.eciesPubkey = null;

    if (ecdsaPubkeyPem) {
      this.ecdsaPubkey = crypto.createPublicKey(ecdsaPubkeyPem);
    }

    if (eciesPubkeyB64) {
      try {
        this.eciesPubkey = base64.toByteArray(eciesPubkeyB64.trim());
      } catch (e) {
        Logger.warn(`⚠️ ECIES公钥解码失败: ${e.message}`);
      }
    }
  }

  verifySignature(nonce, timestamp, authToken) {
    if (!this.ecdsaPubkey) return true; // DEBUG mode

    try {
      const ts = parseInt(timestamp);
      const now = Math.floor(Date.now() / 1000);
      if (Math.abs(now - ts) > Config.TIMESTAMP_WINDOW) {
        throw new Error(`Timestamp expired: diff=${Math.abs(now-ts)}s > ${Config.TIMESTAMP_WINDOW}s`);
      }

      const message = `${nonce}${timestamp}`;
      const signature = base64.toByteArray(authToken);

      const verify = crypto.createVerify('SHA256');
      verify.update(message);
      return verify.verify(this.ecdsaPubkey, signature);

    } catch (e) {
      throw new Error(`Signature verification failed: ${e.message}`);
    }
  }

/**
   * 加密响应数据
   * @param {object} data - 待加密的字典/对象数据
   * @returns {string} DEBUG模式返回明文JSON，否则返回Base64编码的ECIES密文
   */
  encryptResponse(data) {
    if (Config.DEBUG || !this.eciesPubkey) {
      return JSON.stringify(data);
    }

    try {
      const plaintextStr = JSON.stringify(data);
      const plaintextBuffer = Buffer.from(plaintextStr, 'utf-8');
      const pubKeyBuffer = Buffer.from(this.eciesPubkey);
      
      const ciphertext = ecies_encrypt(pubKeyBuffer, plaintextBuffer);
      
      // 🚀 核心修复：强制将 Uint8Array 包装为原生 Buffer，否则 toString('base64') 会变成逗号拼接的字符串
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
   * 🔒 AES-256-GCM 解密 (适配 Python 端的 JSON Dict 双层 Base64 结构)
   * 预期格式: Base64( JSON.stringify({ nonce: "...", tag: "...", ciphertext: "..." }) )
   * @param {string} encryptedBase64 - 客户端传来的最外层 Base64 密文
   * @param {Buffer} rawKeyBuffer - 32字节的 AES 密钥
   * @returns {string} 解密后的明文字符串
   */
  decryptData(encryptedBase64, rawKeyBuffer) {
      if (!rawKeyBuffer || rawKeyBuffer.length !== 32) {
        throw new Error("AES Decrypt Error: Key must be exactly 32 bytes for AES-256.");
      }

      try {
        // 1. 解码最外层的 Base64，得到 JSON 字符串
        const jsonStr = Buffer.from(encryptedBase64, 'base64').toString('utf8');
        
        // 2. 解析 JSON 对象
        const payload = JSON.parse(jsonStr);

        if (!payload.nonce || !payload.tag || !payload.ciphertext) {
          throw new Error("Missing required AES-GCM fields (nonce, tag, ciphertext) in payload.");
        }

        // 3. 提取内层的 Base64 字符串并转为 Buffer
        const iv = Buffer.from(payload.nonce, 'base64');
        const authTag = Buffer.from(payload.tag, 'base64');
        const ciphertext = Buffer.from(payload.ciphertext, 'base64');

        // 4. 创建解密器
        const decipher = crypto.createDecipheriv('aes-256-gcm', rawKeyBuffer, iv);
        
        // 设置 AuthTag 进行防篡改校验
        decipher.setAuthTag(authTag);

        // 5. 执行解密
        let decrypted = decipher.update(ciphertext, null, 'utf8');
        decrypted += decipher.final('utf8');

        return decrypted;
        
      } catch (e) {
        throw new Error(`AES Decrypt Error: ${e.message}`);
      }
    }
}
// ============================================================================
// 🛡️ 认证 + 加密中间件 (最终修复版)
// ============================================================================
function authEncryptMiddleware(cryptoManager) {
  return async (req, res, next) => {
    // === 阶段 0: 放行 WebSocket 和预检请求 ===
    if (req.path.startsWith('/api/ws/') || (req.headers.upgrade || '').toLowerCase() === 'websocket') {
      return next();
    }
    if (req.method === 'OPTIONS' || req.method === 'HEAD') {
      return next();
    }

    // === 阶段 1: 请求认证 (DEBUG 模式跳过) ===
    if (!Config.DEBUG && !req.headers['x-debug']) {
      const nonce = req.headers['x-nonce'] || req.headers['X-Nonce'];
      const timestamp = req.headers['x-timestamp'] || req.headers['X-Timestamp'];
      const authToken = req.headers['x-auth-token'] || req.headers['X-Auth-Token'];

      if (!nonce || !timestamp || !authToken) {
        return res.status(401).json({ error: 'Missing auth headers' });
      }

      try {
        cryptoManager.verifySignature(nonce, timestamp, authToken);
      } catch (e) {
        return res.status(401).json({ error: `Signature verification failed: ${e.message}` });
      }
    }

    // === 阶段 1.5: 核心 Body 处理 (解密与安全反序列化) ===
    if (req.body && typeof req.body === 'string') {
      const isAesEncrypted = (req.headers['x-aes-encrypted'] || '').toLowerCase() === 'true';
      
      try {
        if (isAesEncrypted) {
          // 1. 如果是 AES 加密，解密后再解析
          const rawKeyBuffer = Buffer.from(Config.SESSION_KEY, 'base64');
          const decryptedJsonStr = cryptoManager.decryptData(req.body, rawKeyBuffer);
          req.body = JSON.parse(decryptedJsonStr);

        } else if (req.body.startsWith('eyJ')) {
          // 2. 兼容 Base64 编码的 JSON
          const decodedStr = Buffer.from(req.body, 'base64').toString('utf-8');
          req.body = JSON.parse(decodedStr);

        } else if (req.body.trim().startsWith('{') || req.body.trim().startsWith('[')) {
          // 3. 🚀 核心修复：正常的明文 JSON 字符串 (处理握手阶段未加密的请求)
          req.body = JSON.parse(req.body);
        } else {
          // 空或纯文本
          if (req.body.trim() === '') req.body = {};
        }
      } catch (e) {
        Logger.error(`💥 [Body Parse Error]: ${e.message}`);
        return res.status(400).json({ error: `Invalid body format: ${e.message}` });
      }
    }

    // === 阶段 2 & 3: 拦截响应方法并执行业务逻辑 ===
    const originalSend = res.send;
    
    res.send = function(data) {
      if (res.get('Content-Type') && res.get('Content-Type').includes('application/json')) {
        try {
          const jsonData = typeof data === 'string' ? JSON.parse(data) : data;
          
          const encryptedContent = cryptoManager.encryptResponse(jsonData);
          
          const encoded = typeof encryptedContent === 'string' ? encryptedContent : JSON.stringify(encryptedContent);

          if (!Config.DEBUG) {
            res.set('X-Encrypted', 'true');
            res.set('X-Agent-Version', Config.AGENT_VERSION);
          }
          
          res.set('Content-Length', Buffer.byteLength(encoded, 'utf8').toString());
          return originalSend.call(this, encoded);
          
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
    let total, used;

    try {
      // 1. 尝试 cgroup v2 (Docker 20.10+ 主流环境)
      const limitStr = (await fsp.readFile('/sys/fs/cgroup/memory.max', 'utf8')).trim();
      total = limitStr === 'max' ? null : parseInt(limitStr, 10);
      used = parseInt((await fsp.readFile('/sys/fs/cgroup/memory.current', 'utf8')).trim(), 10);
    } catch {
      try {
        // 2. 尝试 cgroup v1 (老版本 Docker/宿主机)
        total = parseInt((await fsp.readFile('/sys/fs/cgroup/memory/memory.limit_in_bytes', 'utf8')).trim(), 10);
        used = parseInt((await fsp.readFile('/sys/fs/cgroup/memory/memory.usage_in_bytes', 'utf8')).trim(), 10);
        // v1 未限制时会返回极大值，视为无限制
        if (total > 9223372036854771712) total = null;
      } catch {
        // 3. 非容器环境或无权限时，降级到宿主机内存
        const hostMem = await si.mem();
        total = hostMem.total;
        used = hostMem.used;
      }
    }

    return {
      total,          // 容器分配的最大内存（字节），null 表示未限制
      used,           // 当前已用内存（字节）
      available: total !== null ? total - used : null,
      // 保留 si.mem() 的其他字段供兼容（可选）
      free: total !== null ? total - used : 0,
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
      ram: { total: mem.total, used: mem.used },
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
      const total = disks.reduce((sum, disk) => sum + disk.size, 0);
      const used = disks.reduce((sum, disk) => sum + disk.used, 0);
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
        fs.rmdirSync(chunkDir, { recursive: true });
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
            fs.rmdirSync(fullPath, { recursive: true });
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

        try {
            this.ptyProcess = pty.spawn(shell, [], {
                name: 'xterm-256color',
                cols: 80, rows: 24,
                cwd: process.env.HOME || process.cwd(),
                env: env
            });

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

async function main() {
  try {
    Logger.debug('Starting main() function...');
    
    // 配置校验
    Logger.debug('Validating config...');
    Config.validate();
    Logger.debug('Config validated');

    // 初始化组件
    Logger.debug('Initializing CryptoManager...');
    const cryptoManager = new CryptoManager(Config.ECDSA_PUBLIC_KEY_PEM, Config.ECIES_PUBLIC_KEY_PEM);
    Logger.debug('CryptoManager initialized');
    
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
        'Content-Type, Authorization, X-Nonce, X-Timestamp, X-Auth-Token, X-AES-Encrypted, X-Debug'
      );
      
      // 允许前端读取的响应头 (expose_headers)
      res.header(
        'Access-Control-Expose-Headers', 
        'X-Encrypted, X-Agent-Version, X-File-Size, X-Original-Path'
      );

      // 快速放行 OPTIONS 预检请求 (Preflight)
      if (req.method === 'OPTIONS') {
        return res.status(200).end();
      }

      next();
    });
  // 🚀 核心暴力修复：删掉 app.use(express.json()) !
  // 强制把所有请求体 (无论 Content-Type 是 application/json 还是别的) 都读取为纯字符串
  app.use(express.text({ 
    type: () => true, // 返回 true 代表拦截所有请求类型
    limit: '50mb' 
  }));
  
  app.use(express.urlencoded({ extended: true }));
  
 
  app.use(authEncryptMiddleware(cryptoManager));

  Logger.debug('Middleware applied, setting up routes...');

  // 路由定义

  // 基础信息
  app.get('/api/baseinfo', async (req, res) => {
    try {
      const info = await systemInfo.getBasicInfo();
      res.json(info);
    } catch (e) {
      res.status(500).json({ status: 'error', message: e.message });
    }
  });

  // 实时状态
  app.get('/api/status', async (req, res) => {
    try {
      const status = await systemInfo.getRealtimeInfo();
      res.json(status);
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

  // 下载文件
  app.post('/api/file/download', async (req, res) => {
    try {
      const result = await FileManager.downloadFile(req.body.path);
      const fileBuffer = Buffer.from(result.content, 'base64');
      res.set('X-File-Size', result.size.toString());
      res.set('X-Original-Path', result.path);
      res.set('Content-Type', 'application/octet-stream');
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

  // WebSocket终端
  Logger.debug('Setting up WebSocket terminal route...');
  app.ws('/api/ws/terminal', async (ws, req) => {
    // express-ws 可能不自动解析query参数，手动解析
    Logger.debug('WebSocket request URL:', req.url);
    const requestId = req.query.request_id;
    const token = req.query.token;

    Logger.debug(`WebSocket connection attempt with request_id: ${requestId}`);

    if (!requestId) {
      Logger.debug('Closing connection due to missing request_id');
      ws.close(1008, "Missing request_id");
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

// 启动应用
if (require.main === module) {
  main().catch(Logger.error);
}

module.exports = { Config, CryptoManager, SystemInfoCollector, CommandExecutor, FileManager, TaskManager };