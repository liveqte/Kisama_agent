# Kisama Agent API 完整接口文档

【安全说明】
所有接口均受 AuthEncryptMiddleware 保护。
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

## 六、FastAPI 自动帮助页面说明


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
| **超级终端** | WS | `/api/ws/terminal` | 使用交互性终端 | ✅ | ✅ |
---

### 通用请求头要求 (Headers)
所有标记为 ✅ 的接口必须包含以下字段：

1. `X-Nonce`: `<Base64随机数>`
2. `X-Timestamp`: `<UTC时间戳>`
3. `X-Auth-Token`: `<ECDSA签名>`
4. `Content-Type`: `application/json`

### 自动化文档地址
* **交互式文档 (Swagger UI):** `/docs` (仅在 `DEBUG=true` 时可用)
* **原始定义 (OpenAPI JSON):** `/openapi.json` (始终可用)