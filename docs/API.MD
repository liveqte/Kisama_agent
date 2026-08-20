# Kisama Agent API 完整接口文档

## 默认端口
通过环境变量KPORT、PORT、SERVER_PORT指定，优先级从高到低，若都没有为8000。

【安全说明】
除了/api/baseinfo、/api/status 以及 /kisamaproxy 转发器（纯转发，不参与认证）外，
其他所有接口均受 AuthEncryptMiddleware 保护。
请求必须携带签名认证头 (X-Nonce, X-Timestamp, X-Auth-Token)。
响应体默认经过 ECIES 加密传输。


## 一、基础信息与状态模块


### 1. 获取代理基础信息  
路径：GET /api/baseinfo  
用途：获取代理端静态硬件/系统配置信息  
输入：无  
返回示例：  
```
{
  "arch": "x86_64",
  "cpu_cores": 2,
  "cpu_name": "Intel(R) Xeon(R) CPU @ 2.20GHz",
  "disk_total": 48360738816,
  "gpu_name": "",
  "ipv4": "34.48.108.9",
  "ipv6": null,
  "mem_total": 8333418496,
  "os": "Ubuntu 22.04",
  "kernel_version": "6.6.123+",
  "swap_total": 0,
  "version": "0.0.1",
  "virtualization": "None",
  "session_key": "",
  "noise_key:":{
      controller: {
        private: control.private_b64
      },
      agent: {
        public: agent.public_b64
      }
    }
  }
```
### 2. 获取实时监控信息  
路径：GET /api/status  
用途：获取代理端动态资源使用率（CPU/内存/磁盘/网络/连接数）  
输入：无  
返回示例：  
```
{
  "cpu": { "usage": 12.5 },
  "ram": { "total": 8333418496, "used": 3809280000 },
  "swap": { "total": 0, "used": 0 },
  "load": { "load1": 0.94, "load5": 0.56, "load15": 0.36 },
  "disk": { "total": 48360738816, "used": 36495761408 },
  "network": { "up": 1024, "down": 2048, "totalUp": 76547473, "totalDown": 84962800 },
  "connections": { "tcp": 38, "udp": 0 },
  "uptime": 41480,
  "process": 30,
  "message": ""
}
```

## 二、命令执行模块


### 3. 执行系统命令
路径：POST /api/exec  
用途：远程执行系统命令，内置超时保护与输出捕获  
输入示例 ```(JSON): { "cmd": "ls -la /tmp", "cwd": "/tmp", "env": {"KEY": "VAL"} }```  
输入示例 (纯文本): ls -la /tmp  
返回示例：
```
{
  "result": "total 16\ndrwxrwxrwt 3 root root 4096 Jan 15 10:30 .\n...",
  "exitcode": 0,
  "timeout": false,
  "cmd": "ls -la /tmp"
}
```
注：退出码 0=成功, 124=超时, 126=权限不足, 127=命令不存在, -1=内部异常


## 三、文件管理模块


### 4. 列出文件/目录
路径：POST /api/file/list  
用途：列出指定路径下的文件与子目录  
输入示例：{ "path": "/tmp", "recursive": false }  
返回示例：  
```
{
  "status": "ok",
  "count": 2,
  "files": [
    { "name": "test.txt", "path": "tmp/test.txt", "type": "file", "size": 1024, "mode": "-rw-r--r--", "owner": "1000:1000" }
  ]
}
```

### 5. 查询文件权限
路径：POST /api/file/authority  
用途：批量查询文件/目录的权限与读写执行状态  
输入示例：{ "paths": ["/tmp/test.txt", "/var/log"] }  
返回示例： 
```
{
  "status": "ok",
  "files": [
    { "path": "tmp/test.txt", "mode": "-rw-r--r--", "mode_octal": "0o644", "readable": true, "writable": true, "executable": false }
  ]
}
```
### 6. 设置文件权限
路径：PUT /api/file/authority  
用途：批量修改文件/目录权限（支持八进制或符号模式）  
输入示例：
```
{ "permissions": { "/tmp/test.txt": "644", "/opt/scripts": "755" }, "recursive": false }
```
返回示例：
```
{ "status": "ok", "total": 2, "success": 2, "results": [{ "path": "tmp/test.txt", "applied": "-rw-r--r--", "status": "ok" }] }
```

### 7. 查看文件文本内容
路径：POST /api/file/cat  
用途：查看 ≤1MB 的文本文件内容（二进制自动转Base64）  
输入示例：{ "path": "/tmp/config.json" }  
返回示例：  
```
{ "status": "ok", "path": "tmp/config.json", "content": "{\n  \"key\": \"value\"\n}", "encoding": "utf-8", "is_binary": false, "size": 24 }
```

### 8. 上传文件
路径：POST /api/file  
用途：上传文件至代理端（支持 >2MB 自动分块合并）  
输入示例：
```
{ "path": "/tmp/uploads", "filename": "data.tar.gz", "content": "<Base64文件内容>" } 
```
返回示例：
```
{ "status": "ok", "path": "tmp/uploads/data.tar.gz" }
```
### 8.1 上传文件（裸二进制流传输）
* **路径**：`POST /api/fileraw`
* **用途**：上传文件或文件分块至代理端（支持大文件流式裸二进制传输，零体积膨胀）

#### 1. 请求头配置 (Headers)
在前台发起请求时，必须携带以下自定义头部来传递元数据：

| Header 名称 | 类型 | 示例值 | 含义说明 |
| :--- | :--- | :--- | :--- |
| **`Content-Type`** | String | `application/octet-stream` | 声明请求体为纯二进制流 |
| **`X-File-Path`** | String(URL编码) | `/tmp/uploads` | 服务器端的目标保存目录路径 |
| **`X-File-Name`** | String | `data.tar.gz` | 上传的文件真实名称 |
| **`X-Chunk-Id`** | Number | `0` | 当前分片的索引（从 `0` 开始。若为单文件不分块，填 `0`） |
| **`X-Total-Chunks`** | Number | `5` | 该文件的总分片数（若为单文件不分块，填 `1`） |

#### 2. 请求体 (Request Body)
* **内容**：`[Raw Binary Bytes]` 
* **格式**：直接将文件的原生 `ArrayBuffer`/`Blob`（明文或经 Noise 加密后的密文二进制）写入请求体中，**不进行任何 JSON 包裹，不进行 Base64 编码**。

---

### HTTP 原始请求报文示例

#### 场景 A：上传大文件的第 1 个分块（共 5 块）
```http
POST /api/fileraw HTTP/1.1
Host: agent.kisama.internal
Content-Type: application/octet-stream
Content-Length: 2097152
X-File-Path: /tmp/uploads
X-File-Name: data.tar.gz
X-Chunk-Id: 0
X-Total-Chunks: 5

[这里直接是 2MB 的原始二进制文件字节流数据……]
```

#### 场景 B：上传不需要分块的小文件（单文件直传）
```http
POST /api/fileraw HTTP/1.1
Host: agent.kisama.internal
Content-Type: application/octet-stream
Content-Length: 45620
X-File-Path: /tmp/uploads
X-File-Name: memo.txt
X-Chunk-Id: 0
X-Total-Chunks: 1

[这里直接是 45KB 的文本文件原始二进制数据……]
```

---

### 返回示例 (JSON)

#### 1. 当上传其中一个分块，且未全部完成时：
```json
{
  "status": "ok",
  "path": "/tmp/uploads/data.tar.gz",
  "chunk_id": 0,
  "completed": false,
  "message": "Chunk 0 uploaded successfully"
}
```

#### 2. 当上传最后一个分块，后端成功合并文件时：
```json
{
  "status": "ok",
  "path": "/tmp/uploads/data.tar.gz",
  "chunk_id": 4,
  "completed": true,
  "message": "All chunks received. File merged successfully."
}
```
### 9. 下载文件
路径：POST /api/file/download  
用途：下载代理端文件（二进制流，自动加密传输）  
输入示例：
```
{ "path": "/tmp/backup.tar.gz" }  
```
响应头：X-File-Size, X-Original-Path, X-Encrypted: true  
响应体：blob二进制字节、base64编码的二进制内容。

### 10. 批量删除文件/目录  
路径：DELETE /api/file  
用途：批量删除文件或目录  
输入示例：
```
{ "paths": ["/tmp/old.log", "/tmp/cache"] }
```
返回示例：
```
{ "status": "ok", "results": [{ "path": "/tmp/old.log", "status": "deleted" }, { "path": "/tmp/cache", "status": "deleted" }] }
```

### 11. 批量移动/重命名
路径：PUT /api/file  
用途：批量移动或重命名文件/目录  
输入示例： 
```
{ "/tmp/old.txt": "/archive/old.txt", "/tmp/logs": "/backup/logs" }
```
返回示例：
```
{ "status": "ok", "total": 2, "success": 2, "results": [{ "from": "tmp/old.txt", "to": "archive/old.txt", "status": "ok" }] }
```

### 11.1 批量复制
路径：POST /api/file/cp  
用途：批量复制文件/目录  
输入示例：
```
{ "/tmp/old.txt": "/archive/old.txt", "/tmp/logs": "/backup/logs" }  
```
返回示例：
```
{ "status": "ok", "total": 2, "success": 2, "results": [{ "from": "tmp/old.txt", "to": "archive/old.txt", "status": "ok" }] }
```

### 12. 新建目录
路径：POST /api/file/new
用途：递归创建新目录
输入示例：
```
{ "path": "/tmp/new/project/logs" }
```
返回示例：
```
{ "status": "ok", "path": "tmp/new/project/logs" }
```

## 四、任务管理模块


### 13. 获取启动任务
路径：GET /api/task/onetime  
用途：获取待执行的一次性任务列表  
输入：无  
返回示例：
```
{ "status": "ok", "count": 2, "tasks": ["echo 'init'", "/opt/scripts/setup.sh"] }
```

### 14. 设置启动任务
路径：POST /api/task/onetime  
用途：设置启动任务（设置后立即执行，执行后列表保留供审计）  
输入示例：["echo hello", "date", "pwd"]  
返回示例：
```
{ "status": "ok", "count": 3, "tasks": ["echo hello", "date", "pwd"], "executed": [{ "index": 0, "cmd": "echo hello", "exitcode": 0, "output": "hello\n", "status": "ok" }] }
```

### 15. 获取定时任务
路径：GET /api/task/cron  
用途：获取已配置的 Cron 定时任务  
输入：无  
返回示例：
```
{ "status": "ok", "count": 2, "tasks": { "*/5 * * * *": "echo heartbeat", "0 2 * * *": "/opt/scripts/backup.sh" } }
```

### 16. 设置定时任务
路径：POST /api/task/cron  
用途：设置定时任务（非空自动启动循环，空字典自动停止）  
输入示例：{ "*/10 * * * *": "python /opt/scripts/health_check.py", "0 0 * * 0": "/opt/scripts/weekly_report.sh" }  
返回示例：
```
{ "status": "ok", "count": 2, "tasks": { "*/10 * * * *": "python /opt/scripts/health_check.py", "0 0 * * 0": "/opt/scripts/weekly_report.sh" } }
```

### 17. 获取任务状态
路径：GET /api/task/status  
用途：查看任务模块运行状态  
输入：无  
返回示例：
```
{ "onetime": { "pending": false, "count": 3 }, "cron": { "active": true, "count": 2, "check_interval": 30 } }
```

### 18. 获取启动任务日志
路径：GET /api/task/log/onetime?limit=50  
用途：查询启动任务执行记录（环形缓冲，默认/最大100条）  
返回示例：
```
{ "status": "ok", "count": 1, "logs": [{ "ts": "2024-01-15T10:30:45Z", "cmd": "echo 'init'", "output": "init\n", "exitcode": 0, "type": "onetime", "formatted": "..." }] }
```

### 19. 获取定时任务日志
路径：GET /api/task/log/cron?limit=50  
用途：查询定时任务执行记录    
返回示例：同上，type 为 "cron"，额外包含 cron 字段记录表达式。 

### 20. 清空启动任务日志
路径：DELETE /api/task/log/onetime  
用途：清空启动任务日志释放内存  
返回示例：
```
{ "status": "ok", "cleared": "onetime" }
```

### 21. 清空定时任务日志
路径：DELETE /api/task/log/cron
用途：清空定时任务日志
返回示例：
```
{ "status": "ok", "cleared": "cron" }
```

### 22. 获取日志统计摘要
路径：GET /api/task/log/summary
用途：获取日志数量与成功率统计
返回示例：
```
{ "onetime": { "total_logged": 45, "max_capacity": 100, "recent_success": 8, "recent_failed": 2 }, "cron": { "total_logged": 120, "max_capacity": 100, "recent_success": 10, "recent_failed": 0 } }
```

### 23. 手动触发启动任务
路径：POST /api/task/onetime/execute
用途：强制立即重新执行所有已配置的一次性启动任务（不受 InitTask 状态限制）。
输入：无  
返回示例： 
```
{"status":"ok","executed":2,"results":[{"cmd":"echo 'init'","exitcode":0,"output":"init\n","timeout":false},{"cmd":"/opt/scripts/setup.sh","exitcode":127,"output":"sh: /opt/scripts/setup.sh: not found\n","timeout":false}]}
```

### 24. 超级终端（可选）
路径：/api/ws/任意路径
用途：使用websocket建立完整双向终端上下文环境，在http条件下使用noise端到端加密，在https条件下会使用https加密，此时认证功能使用代理端公钥进行身份认证。  
输入：

```
request_id：用来区分每个会话。  
token：仅在https传输下使用，其使用代理端noise公钥进行认证。
```
返回示例：无。 

## 五、临时密钥模块（临时授权）


### 25. 获取临时密钥对
路径：GET /api/tempkey?ttl=24  
用途：获取一对临时密钥（ECDSA + ECIES），用于临时授权第三方（如 AI Agent、其他协作者）连接本代理。  
兼容实现：✅ Python 版（py/agent.py）、✅ JS 版（js/agent.js）、✅ Java 版（java/、java11/，0.4.2+）均提供该接口，语义一致。  
行为约定：
- 有效期内重复请求返回**同一份**密钥对（幂等，不重复生成，避免代理内部多头密钥管理负担）；
- 密钥过期后（或首次请求）自动生成**新的**密钥对，旧密钥立即作废；
- 该接口本身受认证保护（需控制端静态密钥签名），响应按控制端密钥加密。  
密钥规格：
- `ecdsa`：**ECDSA P-256**（secp256r1 / prime256v1，OID 1.2.840.10045.3.1.7），私钥为 **PKCS#8 PEM**（`-----BEGIN PRIVATE KEY-----`；部分部署版本可能返回 SEC1 格式 `-----BEGIN EC PRIVATE KEY-----`，两种均可被控制端解析），公钥为 SubjectPublicKeyInfo PEM；
- `ecies`：secp256k1，私钥为 32 字节原始密钥的 hex（64 字符），公钥为 65 字节未压缩点 hex（130 字符）。  
输入：`ttl`（小时，默认 24，范围 1~168，超出范围返回 422）  
返回示例：
```
{
  "status": "ok",
  "key_id": "3f9a0b2c4d5e6f78",
  "ttl_seconds": 86400,
  "created_at": "2026-08-08T10:00:00Z",
  "expires_at": "2026-08-09T10:00:00Z",
  "ecdsa": {
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIGFAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg...\n-----END PRIVATE KEY-----",
    "public_key": "-----BEGIN PUBLIC KEY-----\n...\n-----END PUBLIC KEY-----"
  },
  "ecies": {
    "private_key": "<hex 64字符 临时ECIES私钥>",
    "public_key": "<hex 130字符 临时ECIES公钥>"
  }
}
```

临时密钥使用方式（与静态密钥完全一致的请求流程）：
1. 调用方持有 `ecdsa.private_key`，对消息 `SHA256(nonce + timestamp)` 做 ECDSA 签名，放入 `X-Auth-Token`（Raw 64 字节或 DER 格式均可）；
2. 代理端验签时自动识别签名来源（静态密钥 → 临时密钥），响应体使用与来源**对应**的 ECIES 公钥加密；
3. 临时调用方用 `ecies.private_key` 解密响应内容，无需任何额外请求头。


## 六、KisamaProxy 转发器模块（可选接口 · 仅 GO 版本已实现）

> **可选接口**：该功能是独立的纯转发器（Proxy），与 kpng 转发组件的 nginx / worker 实现功能保持一致。
> ⚠️ 当前**只有 GO 版本已实现**，Python / Java / JS 版本均未提供该路由。

### 26. 代理转发（向上游转发任意请求）
路径：`/kisamaproxy/<目标URL>`（任意 HTTP 方法，含 WebSocket 升级）  
用途：将请求原样转发到任意上游地址（目标地址编码在路径中），常用于：
- 借助 Agent 的出口网络访问其他 Kisama Agent 或上游 API；
- 在无法直接访问内网 Agent 的场景下，通过该转发器做中转；
- 等价于 kpng 的 `/kisamaproxy/` 路由，可替代其 nginx/worker 部署。

认证：**无需认证（❌）**，不参与 AuthEncryptMiddleware 加密链路，请求头原样发往上游。  
输入：无请求体参数，目标地址直接编码在路径中。

#### 目标地址格式
```
GET /kisamaproxy/http://host:8000/api/baseinfo
GET /kisamaproxy/https://host:8443/api/exec
```
- **合规检查**：URI（路径 + 查询串）必须包含 `api`，否则直接返回 `444`（与 kpng 行为一致）；
- URI 中未出现 `/kisamaproxy/` 标志位时返回 `400 Invalid Proxy URL Structure`；
- 兼容被压缩的单斜杠路径：`https:/host/..` 自动修复为 `https://host/..`；
- 无协议前缀时自动补全为 `https://`。

#### CORS 与 OPTIONS 预检
- 全局 CORS 中间件对 `/kisamaproxy` 前缀直接放行，由转发器自行管理跨域头；
- `OPTIONS` 预检请求直接返回 `204`，并附带 kpng 一致的 CORS 响应头（`Access-Control-Allow-Origin: *` 等）。

#### 请求头处理
- 客户端请求头原样透传，仅清理 `Origin` / `Referer`（避免泄露来源页）；
- `Host` 改写为目标主机；附加 `X-Real-IP`、`X-Forwarded-For`（客户端 IP）与 `X-Forwarded-Proto`（目标协议）。

#### 响应处理
- 剥离上游响应中的 CORS 头后，统一补齐 kpng 配置的 CORS 头；
- 上游返回 `101 Switching Protocols`（WebSocket 升级）时，建立双向隧道原样转发，不做任何头修改；
- 上游不可达或转发失败时统一返回 `502`，响应体为 `Proxy Error: <原因>`。

返回示例（转发到 `/api/baseinfo` 时，直接透传上游响应）：
```
{ ...上游服务返回的原始内容... }
```


## 七、Argo 临时隧道模块（可选接口 · 仅 Python 版已实现）

> **可选接口**：创建 Cloudflare 临时公网隧道（Quick Tunnel / trycloudflare），将本代理监听端口或内网任意 TCP 端口暴露为一个随机的 `https://<随机域名>.trycloudflare.com` 临时公网域名，无需自有域名与 DNS/证书配置，隧道随进程退出而失效。
> ✅ **实现状态**：Python 版（py/agent.py）已实现，隧道基于 Python 标准库手写的 HTTP/2 + Cap'n Proto 协议（与 cloudflared 相同的 Quick Tunnel 协议，无需安装任何外部二进制）；GO / JS / Java 版尚未提供该路由。

### 27. 查询临时隧道列表
路径：GET /api/argo  
用途：返回当前已创建的全部临时隧道（隧道域名、转发端口、创建时间）  
输入：无  
行为约定：
- 返回所有**存活中**的临时隧道（含通过 `duplicate: true` 创建的重复隧道）；
- 隧道失效（cloudflared 进程退出 / 与 trycloudflare 连接断开）后自动从列表移除；
- 无隧道时返回空列表（`count: 0`）。  
返回示例：
```
{
  "status": "ok",
  "count": 2,
  "tunnels": [
    { "tunnel_domain": "https://lucky-wildflower-1a2b3c4d.trycloudflare.com", "port": 8000, "created_at": "2026-08-18T10:00:00Z" },
    { "tunnel_domain": "https://quiet-cloud-9f8e7d6c.trycloudflare.com", "port": 8080, "created_at": "2026-08-18T11:30:00Z" }
  ]
}
```
字段说明：
| 字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| status | string | 固定为 `"ok"` |
| count | number | 隧道数量 |
| tunnels[].tunnel_domain | string | 临时隧道公网域名（含 `https://` 前缀） |
| tunnels[].port | number | 隧道转发的本地端口 |
| tunnels[].created_at | string | 创建时间（ISO8601 UTC，如 `2026-08-18T10:00:00Z`） |

### 28. 创建临时隧道
路径：POST /api/argo  
用途：操纵 agent 创建一条 Cloudflare 快速隧道（Python 版为纯标准库实现），将指定端口转发为临时公网域名  
输入示例：
```
{ "port": 8080 }
```
输入字段：
| 字段 | 类型 | 必填 | 说明 |
| :--- | :--- | :---: | :--- |
| port | number | 否 | 隧道转发端口（整数，1~65535）。缺省时使用 agent 自身监听端口（按 KPORT → PORT → SERVER_PORT 优先级，默认 8000） |
| duplicate | boolean | 否 | 是否允许同一端口重复创建隧道，默认 `false`。`false` 时若该端口已存在隧道则拒绝创建（409）；`true` 时强制创建，原隧道保留 |
行为约定：
- **重复策略**：默认阻止同一端口重复建隧道（409）；仅当请求体携带 `duplicate: true` 时才允许重复；
- 端口缺省时取 agent 自身监听端口（与「默认端口」一节一致）；
- `port` 非法（非整数 / 超出 1~65535）返回 422；
- 隧道注册失败（网络异常 / 无法连接 trycloudflare）返回 500。

返回示例（创建成功，HTTP 200）：
```
{
  "status": "ok",
  "created": true,
  "tunnel_domain": "https://sunny-breeze-5a6b7c8d.trycloudflare.com",
  "port": 8080,
  "created_at": "2026-08-18T12:00:00Z"
}
```
返回示例（同端口重复被拒，HTTP 409）：
```
{
  "status": "error",
  "created": false,
  "port": 8080,
  "message": "tunnel already exists on port 8080, set duplicate=true to force creation"
}
```
返回示例（创建失败，HTTP 500）：
```
{
  "status": "error",
  "created": false,
  "port": 8080,
  "message": "failed to create tunnel: <具体原因>"
}
```
字段说明：
| 字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| status | string | 请求处理结果：`"ok"` / `"error"` |
| created | boolean | 隧道创建结果：`true`=创建成功 / `false`=创建失败 |
| tunnel_domain | string | 创建成功时返回临时隧道域名；失败时无此字段 |
| port | number | 本次请求的转发端口 |
| created_at | string | 创建时间（ISO8601 UTC）；失败时无此字段 |
| message | string | 失败原因（仅 `status=error` 时出现） |

### 29. 删除临时隧道
路径：DELETE /api/argo  
用途：删除指定端口的临时隧道（停止隧道守护线程，释放云边连接与临时公网域名，域名立即失效）  
输入示例：
```
{ "port": 8000 }
```
输入字段：
| 字段 | 类型 | 必填 | 说明 |
| :--- | :--- | :---: | :--- |
| port | number | 是 | 要删除的隧道转发端口（整数，1~65535） |
| tunnel_domain | string | 否 | 同一端口存在多条隧道（duplicate 创建）时用于精确定位；缺省且该端口仅一条隧道时直接删除该条 |
行为约定：
- 端口上无任何隧道返回 404；
- 端口上存在多条隧道且未指定 `tunnel_domain` 返回 409（提示需精确定位），避免误删；
- 指定了 `tunnel_domain` 但该端口无匹配隧道返回 404；
- `port` 非法 / 缺失返回 422；
- 删除后该公网域名立即失效，并从 GET /api/argo 列表中移除。

返回示例（删除成功，HTTP 200）：
```
{
  "status": "ok",
  "deleted": 1,
  "port": 8000,
  "tunnels": [
    { "tunnel_domain": "https://lucky-wildflower-1a2b3c4d.trycloudflare.com", "port": 8000, "created_at": "2026-08-18T10:00:00Z" }
  ]
}
```
返回示例（端口无隧道，HTTP 404）：
```
{
  "status": "error",
  "deleted": 0,
  "port": 8000,
  "message": "no tunnel found on port 8000"
}
```
返回示例（端口存在多条隧道但未指定域名，HTTP 409）：
```
{
  "status": "error",
  "deleted": 0,
  "port": 8000,
  "message": "multiple tunnels exist on port 8000, specify tunnel_domain to disambiguate"
}
```
字段说明：
| 字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| status | string | 请求处理结果：`"ok"` / `"error"` |
| deleted | number | 实际删除的隧道数量（成功时 ≥1） |
| port | number | 本次请求的端口 |
| tunnels | array | 已删除隧道的明细（结构同 GET /api/argo 的 tunnels），失败时无此字段 |
| message | string | 失败原因（仅 `status=error` 时出现） |


## 八、FastAPI 自动帮助页面说明


本项目使用 FastAPI 框架，自动生成并托管 OpenAPI 3.0 文档。

### 1. Swagger UI (交互式调试)
   路径：GET /docs  
   说明：可视化接口列表、参数说明、在线试调  
   状态：仅 DEBUG=true 时启用  

### 2. ReDoc (只读文档)
   路径：GET /redoc  
   说明：结构更清晰的静态文档  
   状态：已禁用 (redoc_url=None)  

### 3. OpenAPI JSON (原始定义)
   路径：GET /openapi.json  
   说明：标准 OpenAPI 3.0 Schema，供代码生成/第三方工具使用  
   状态：始终启用  

生产环境建议：保持 DEBUG=false，此时 /docs 将返回 404，防止接口结构泄露。
可通过 curl http://<host>:<port>/openapi.json | jq 获取完整路由定义。

# Proxy Agent API 接口速查表

### 图例说明
| 图标 | 含义 |
| :--- | :--- |
| ✅ | 需要认证 / 报文加密 |
| ❌ | 无需认证 / 明文传输 |
| 仅GO | 仅 GO 版本已实现（其余版本未提供） |
| 仅Py | 仅 Python 版已实现（其余版本未提供） |

---

### 接口定义详情

| 模块分类 | 方法 | 路径 | 用途 | 认证 | 加密 |
| :--- | :--- | :--- | :--- | :---: | :---: |
| **基础信息** | GET | `/api/baseinfo` | 静态配置上报 | ✅ | ✅ |
| **实时监控** | GET | `/api/status` | 动态资源监控 | ✅ | ✅ |
| **命令执行** | POST | `/api/exec` | 执行系统命令 | ✅ | ✅ |
| **文件列表** | POST | `/api/file/list` | 列出文件 | ✅ | ✅ |
| **权限查询** | POST | `/api/file/authority` | 查询权限 | ✅ | ✅ |
| **权限设置** | PUT | `/api/file/authority` | 设置权限 | ✅ | ✅ |
| **文件查看** | POST | `/api/file/cat` | 查看文本内容 | ✅ | ✅ |
| **文件上传** | POST | `/api/file` | 上传文件 | ✅ | ✅ |
| **文件下载** | POST | `/api/file/download` | 下载文件 | ✅ | ✅ |
| **文件删除** | DELETE | `/api/file` | 批量删除 | ✅ | ✅ |
| **文件移动** | PUT | `/api/file` | 批量移动 | ✅ | ✅ |
| **文件批量复制** | POST | `/api/file/cp` | 批量复制 | ✅ | ✅ |
| **新建目录** | POST | `/api/file/new` | 创建目录 | ✅ | ✅ |
| **启动任务-查** | GET | `/api/task/onetime` | 获取任务列表 | ✅ | ✅ |
| **启动任务-设** | POST | `/api/task/onetime` | 设置并执行任务 | ✅ | ✅ |
| **启动任务-重** | POST | `/api/task/onetime/execute` | 重试当前任务 | ✅ | ✅ |
| **定时任务-查** | GET | `/api/task/cron` | 获取定时任务 | ✅ | ✅ |
| **定时任务-设** | POST | `/api/task/cron` | 设置定时任务 | ✅ | ✅ |
| **任务状态** | GET | `/api/task/status` | 获取模块状态 | ✅ | ✅ |
| **任务日志-查** | GET | `/api/task/log/onetime` | 查询启动任务日志 | ✅ | ✅ |
| **任务日志-查** | GET | `/api/task/log/cron` | 查询定时任务日志 | ✅ | ✅ |
| **任务日志-清** | DELETE | `/api/task/log/onetime` | 清空启动任务日志 | ✅ | ✅ |
| **任务日志-清** | DELETE | `/api/task/log/cron` | 清空定时任务日志 | ✅ | ✅ |
| **日志统计** | GET | `/api/task/log/summary` | 获取统计摘要 | ✅ | ✅ |
| **临时密钥** | GET | `/api/tempkey` | 获取临时授权密钥对 | ✅ | ✅ |
| **超级终端** | WS | `/api/ws/terminal` | 使用交互性终端 | ✅ | ✅ |
| **代理转发** | ANY | `/kisamaproxy/*` | 转发至任意地址（仅GO） | ❌ | ❌ |
| **临时隧道-查** | GET | `/api/argo` | 查询临时隧道列表（Py/Js） | ✅ | ✅ |
| **临时隧道-建** | POST | `/api/argo` | 创建临时隧道（Py/Js） | ✅ | ✅ |
| **临时隧道-删** | DELETE | `/api/argo` | 删除临时隧道（Py/Js） | ✅ | ✅ |
---

### 通用请求头要求 (Headers)
所有标记为 ✅ 的接口必须包含以下字段：

1. `X-Nonce`: `<Base64随机数>`
2. `X-Timestamp`: `<UTC时间戳>`
3. `X-Auth-Token`: `<ECDSA签名>`
4. `Content-Type`: `application/json`

签名密钥说明：`X-Auth-Token` 可由控制端**静态密钥**签名，也可由 `GET /api/tempkey` 获取的**有效临时密钥**签名（`ecdsa.private_key`）。代理端验签时自动切换，并据此选择对应的 ECIES 公钥加密响应（静态密钥请求→静态公钥，临时密钥请求→临时公钥）。

### 自动化文档地址
* **交互式文档 (Swagger UI):** `/docs` (仅在 `DEBUG=true` 时可用，仅python版本有此文档)
* **原始定义 (OpenAPI JSON):** `/openapi.json` (仅在 `DEBUG=true` 时可用，仅python版本有此文档)