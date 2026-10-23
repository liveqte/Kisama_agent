# Kisama Agent API 完整接口文档

## 默认端口
通过环境变量KPORT、PORT、SERVER_PORT指定，优先级从高到低，若都没有为8000。

## KMODE 启动模式
通过环境变量KMODE控制，用于在启动时自动创建临时隧道，并以文件/stdin（KMODE=1）或 shz.al 静默上报（KMODE=2）的方式交付隧道域名，详见「九、KMODE 启动模式」一节。

## 日志级别
通过环境变量LOG_LEVEL控制（py/js/go/java/java11 五语言统一，0=DEBUG / 1=INFO / 2=WARN / 3=ERROR），缺省 `3` 即生产只输出错误日志；未显式设置且 `DEBUG=true` 时接管为 `0`（调试全量输出），详见「十一、日志级别」一节。

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
  "marks": ["root", "kvm", "systemd", "fuse"],
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
> **session_key 下发规则（与运行模式相关）**：生产模式（`DEBUG=false`）已认证请求返回真实 `session_key`（供控制端 AES-GCM 加密请求体）；**生产明文模式（`PLAIN_MODE=true`，PHP 独有）恒返回 `session_key: null`**（即使已认证）——控制端据此判定请求体改发明文 JSON，不再尝试 AES 加密（详见「十、x-encrypted 响应模式头规范」）；**DEBUG 模式（`DEBUG=true`）恒返回真实 `session_key` 与完整 `noise_key`（含控制端私钥，明文直出）**——认证全豁免，凭据不做遮蔽，下发的意图与边界见第十节「调试模式下的密钥下发（设计意图）」。

> **ipv4/ipv6 上报口径（五语言统一语义）**：`ipv4`/`ipv6` 均以专用外部服务探测优先且对返回文本做族校验——`ipv6` 只接受**公网全局单播**（2000::/3；ULA(fc00::/7)、链路本地(fe80::/10)、多播、回环、未指定、IPv4-mapped、站点本地一律拒绝），本地网卡地址仅在外部探测全失败时兜底（v6 兜底同样必须全局单播）。**无公网 IPv6 时 `ipv6` 报 `null`，不会用容器内网地址（如 docker 网络的 fdXX::）回填**。

> **marks 主机标记（可选字段，additive）**：字符串数组，标识当前进程视角下**已确认成立**的主机能力，当前取值为 `root`、`kvm`、`pterodactyl`、`systemd`、`fuse`（可同时出现多个，顺序固定）。**字段可能缺失**（旧版代理未实现 / 非 Linux 平台），缺失与空数组语义不同：缺失 = 未探测或不适用，`[]` = 已探测且无命中；`null` 非法，客户端按缺失处理。客户端必须忽略未知取值。判据、实现方式、性能与误报边界见「十五、`/api/baseinfo` 可选字段 `marks`（主机标记）探测规范」。

> **字段缓存分级（P 级 / T 级）**：baseinfo 系统信息按字段分两级缓存——**P 级（进程级静态）**如 `marks`、`virtualization`、`os`、`kernel_version`、`arch` 等，在进程生命周期内只探测一次并一直复用快照（TTL 过期与密钥轮换都不重探）；**T 级（TTL 快照）**按各自 TTL 重探：`disk_total`/`mem_total`/`swap_total` 为 30 秒，`ipv4`/`ipv6` 为 3600 秒。`session_key`/`noise_key` 属每请求凭证材料，**绝不进入任何快照**。完整字段表、失效规则与验收断言见「十六、`/api/baseinfo` 字段分级缓存与快照语义」。

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

## 二、命令执行模块


### 3. 执行系统命令
路径：POST /api/exec  
**等价别名路由（0.5.7 起六端统一）**：POST /api/do（受限环境优先使用）、POST /api/run、POST /api/work  
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
**别名路由说明**：部分托管平台/网关的 WAF 或审计规则对 URL 路径中的 `exec` 关键词敏感，会拦截 `/api/exec` 请求。三个别名路由与 `/api/exec` **完全等价**——同一处理逻辑、同一请求体（JSON 或纯文本）、同一响应结构、同一认证与响应加密协议。**受限环境优先使用 `/api/do`**，`/api/run`、`/api/work` 备选。签名消息中的 `path` 使用实际请求的路径（用别名请求即以别名路径签名），客户端无需其他适配；旧版本 agent（0.5.7 前）无别名路由，请求将返回 404。


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

**type 字段与「是否为文件 / 目录」的判定标准**

`files[]` 里只有 `type` 可用于区分文件与目录，但**各实现的取值用词并不统一**，客户端必须归一化后比对集合，不能写死单一字面量：

| 实现 | 目录取值 | 文件取值 | 其他取值 |
|---|---|---|---|
| go | `dir` | `file` | — |
| py | `directory` | `file` | `symlink`（符号链接） |
| js | `directory` | `file` | — |
| java / java11 | `directory`（旧版为 `directory `，**含一个尾随空格**） | `file`（旧版为 `file `，**含一个尾随空格**） | — |
| php（四个变体） | `directory` | `file` | — |

推荐判定规则（`/api/file/authority` 在 go / py / js 的响应里也带 `type`，取值同上；java / java11 与 php 的 authority 响应不含该字段）：

1. 取出 `type`，若为字符串则先 `strip()` 再 `lower()` —— 一次性抹平大小写差异（旧版 java / java11 的尾随空格也一并抹平；新版 java / java11 已不再输出尾随空格）；
2. 归一化结果属于 `{"dir", "directory"}` → 该条目是**目录**；
3. **其余一切取值**（`file`、`symlink`、空字符串、字段缺失、以及未来新增的未知取值）→ 一律按**「不是目录」**处理。

即："是否为文件"应实现为"**是否不是目录**"，而不是 `type == "file"`。这样规定是为了拿到正确的失败方向：把条目误判为目录、而它实际是文件时，客户端会把它当目录拼接路径（例如把 `--remote-path` 传成了已存在的文件名，最终写出 `<file>/<name>` 这类嵌套路径；PHP 实现则把分片写进无法合并的隐藏暂存目录，恒返回 `completed:false`，表象是"上传卡住/合并失败"）；反之误判为非目录只会更早拒绝并要求调用方改传目录，属安全失败。

**不要用其他字段反推目录**：

- `mode`：java / java11 的 `file/list` 恒返回硬编码 `-rw-r--r--`（`mode_octal` 恒为 `0o644`），与真实权限无关，**不能据首字符 `d` 判断目录**；go / py / js 虽返回真实的 `d` / `-` 前缀，但跨实现不可依赖。
- `size`：目录大小随实现与文件系统而异（go 常见 4096，java 为该目录 entry 的实际值），不是稳定信号。
- `path`：不保证带尾随分隔符，无法据此判断。

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

### 8. 上传文件（裸二进制流传输）
* **路径**：`POST /api/fileraw`
* **用途**：上传文件或文件分块至代理端（支持大文件流式裸二进制传输，零体积膨胀）

> 历史接口 `POST /api/file`（Base64 编码上传）自面板 0.6.0 起弃用停用，文档不再收录。

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

**PHP 兼容路由（仅 PHP 版本提供）**：`POST /api/file/delete`。部分主机/网关（cPanel、Froxlor 共享环境等）会禁用或剥离 `DELETE` 方法的请求体，PHP 版本提供本路由作为 `DELETE /api/file` 的完全等价替代——请求体、处理逻辑（`SafeFileManager::deletePaths`）与返回结构完全相同，仅方法与路径不同。控制端检测到代理端 `version` 含 `php` 时应优先使用本路由（面板已内置该路由决策）。

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

### 12.1 解压 ZIP 文件
路径：POST /api/file/unzip
用途：解压代理端 zip 压缩包到指定目录（防 zip-slip，条目与体积限额）
输入示例：
```
{ "path": "/tmp/archive.zip", "dest_path": "/tmp/extract", "overwrite": true, "entries": ["sub/data.txt"] }
```
输入字段：
| 字段 | 类型 | 必填 | 说明 |
| :--- | :--- | :---: | :--- |
| path | string | 是 | zip 压缩包路径（安全沙箱内） |
| dest_path | string | 否 | 解压目标目录，缺省为 zip 所在目录（"解压到此处"）；目录不存在自动创建 |
| overwrite | boolean | 否 | 目标文件已存在时是否覆盖，默认 `true`；`false` 时跳过并计入 skipped |
| entries | array | 否 | 仅解压匹配条目（精确名或不带路径匹配），缺省解压全部 |
返回示例：
```
{ "status": "ok", "path": "tmp/archive.zip", "dest": "tmp/extract", "extracted": 5, "skipped": 1, "files": ["tmp/extract/a.txt", "tmp/extract/sub/b.txt"], "files_truncated": false }
```
字段说明：dest 为解压目标目录（显示相对路径，沙箱根显示为 `.`）；files 为解压出的路径（显示相对路径），最多返回 500 条，超出时 files_truncated=true；zip-slip 条目（归一化后逃出目标目录）不报错，计入 skipped；限额 20000 条目 / 512MB，超出部分计入 skipped。
错误：400（path 缺失 / zip 文件不存在 / 非 zip 打不开 / 主机缺 zip 扩展）。

### 12.2 压缩 ZIP 文件
路径：POST /api/file/zip
用途：将指定文件/目录（递归）打包为 zip 压缩包
输入示例：
```
{ "path": "/tmp/out.zip", "items": ["/tmp/a.txt", "/tmp/logs"], "flat": false }
```
输入字段：
| 字段 | 类型 | 必填 | 说明 |
| :--- | :--- | :---: | :--- |
| path | string | 是 | 目标 zip 路径；父目录自动创建；已存在时覆盖重建（等价 zip -r） |
| items | array | 是 | 待压缩文件/目录列表；目录递归打包且带顶层目录名前缀；单项失败不中断 |
| flat | boolean | 否 | 默认 `false`；`true` 时目录内容不带顶层目录名前缀 |
返回示例：
```
{ "status": "ok", "path": "tmp/out.zip", "entries": 12, "size": 34567, "results": [{ "item": "/tmp/a.txt", "status": "ok", "added": 1 }, { "item": "/tmp/ghost", "status": "not_found" }] }
```
字段说明：entries 为写入 zip 的条目总数，size 为 zip 文件字节数；results 逐项回显请求中的 item 原始路径与压缩结果。条目数上限 20000。
错误：400（path/items 缺失、items 非数组或为空、目标是目录、zip 创建失败、主机缺 zip 扩展）。

## 四、任务管理模块

> 💾 0.5.7 起任务定义支持本地加密持久化与重启自动恢复（`KSTORE`/`KSTORE_KEY`，启动任务离线自治，onetime 单次执行语义），详见「十三」。本节 13/14/16 的响应含 `persisted` 字段，17 的响应含 `persistence` 对象。

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
meta：可选，=1 时表示客户端可解析 JSON 控制帧，代理端会在 PTY 启动后、输出任何 shell 回显之前，主动推送一帧 welcome 元数据（0.5.5+，旧版代理端忽略此参数）。
incognito：可选，=1 时请求原生无痕会话（0.5.5+，旧版代理端忽略此参数）。
```

welcome 元数据帧（0.5.5+，仅 meta=1 时发送；Noise 模式下经加密通道推送，二进制帧内为 JSON）：

```
{"type":"welcome","shell":"zsh","path":"/usr/bin/zsh","incognito":true}
shell：归一化 shell 名（Unix 取 basename：bash/zsh/ash/sh；Windows：powershell/cmd/pwsh）。
path：实际拉起的 shell 完整路径。
incognito：本次会话原生无痕是否实际生效（面板请求 incognito=1 且代理端支持时为 true）。
```

原生无痕行为（0.5.5+，incognito=1 时）：代理端在 spawn 现场保证 shell 历史不落盘 —— Unix 向子进程环境注入 `HISTFILE=/dev/null`（bash/zsh/ash 通用，会话内 ↑↑ 历史保留）；Windows 对 PowerShell 附加启动参数 `-NoExit -Command "Set-PSReadLineOption -HistorySaveStyle SaveNothing"`（cmd.exe 本身无持久历史，无需处理）。旧版代理端不支持时由面板侧命令注入方案兜底。

返回示例：无。 

## 五、临时密钥模块（临时授权）


### 25. 获取临时密钥对
路径：GET /api/tempkey?ttl=24[&format=short]  
用途：获取一对临时密钥（ECDSA + ECIES），用于临时授权第三方（如 AI Agent、其他协作者）连接本代理。  
兼容实现：✅ Python 版（py/agent.py）、✅ JS 版（js/agent.js）、✅ Java 版（java/、java11/，0.4.2+）、✅ Go 版、✅ PHP 版均提供该接口，语义一致。  
行为约定：
- 有效期内重复请求返回**同一份**密钥对（幂等，不重复生成，避免代理内部多头密钥管理负担）；
- 密钥过期后（或首次请求）自动生成**新的**密钥对，旧密钥立即作废；
- 该接口本身受认证保护（需控制端静态密钥签名），响应按控制端密钥加密。  
密钥规格（缺省全格式）：
- `ecdsa`：**ECDSA P-256**（secp256r1 / prime256v1，OID 1.2.840.10045.3.1.7），私钥为 **PKCS#8 PEM**（`-----BEGIN PRIVATE KEY-----`；部分部署版本可能返回 SEC1 格式 `-----BEGIN EC PRIVATE KEY-----`，两种均可被控制端解析），公钥为 SubjectPublicKeyInfo PEM；
- `ecies`：secp256k1，私钥为 32 字节原始密钥的 hex（64 字符），公钥为 65 字节未压缩点 hex（130 字符）。  
输入：`ttl`（小时，默认 24，范围 1~168，超出范围返回 422）；`format`（**0.5.8 起六端统一**，缺省/`full`=全格式，`short`=短格式，其他值返回 422，详见「十四、临时密钥短格式」）  
返回示例（缺省全格式）：
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

`format=short` 短格式（0.5.8，六端统一；JSON 结构与字段名不变，仅值编码不同，面向 AI 消费者，详见「十四」）：
```
{
  "status": "ok",
  "key_id": "3f9a0b2c4d5e6f78",
  "ttl_seconds": 86400,
  "created_at": "2026-08-08T10:00:00Z",
  "expires_at": "2026-08-09T10:00:00Z",
  "ecdsa": {
    "private_key": "<hex 64字符 P-256私钥标量>",
    "public_key": "<Base64 44字符 33字节SEC1压缩点>"
  },
  "ecies": {
    "private_key": "<hex 64字符 临时ECIES私钥（与全格式一致）>",
    "public_key": "<Base64 44字符 33字节SEC1压缩点>"
  }
}
```

临时密钥使用方式（与静态密钥完全一致的请求流程）：
1. 调用方持有 `ecdsa.private_key`（PEM 或 short 格式的 64 位 hex 标量均可，控制端脚本自动识别），按与静态密钥一致的 v2 五段签名消息（见「通用请求头要求」）做 ECDSA 签名，放入 `X-Auth-Token`（Raw 64 字节或 DER 格式均可）；
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
- `OPTIONS` 预检请求直接返回 `204`，并附带 kpng 一致的 CORS 响应头（`Access-Control-Allow-Origin: *` 等）；
- 额外声明 `Access-Control-Expose-Headers: ETag, Location, Content-Location, DAV, Lock-Token`（Go 侧新增，kpng 同步跟进）：`ETag` 不在 CORS 安全响应头白名单内，不显式暴露时跨域 JS 读不到，WebDAV 乐观锁（读取 ETag → 后续请求带 `If-Match`）无法成立；请求方向 `If-Match` / `If-None-Match` / `If` 均已在预检 `Allow-Headers` 白名单内。

#### 上游 TLS 证书策略（仅 GO 版有真实上游 TLS 链路）
- `/kisamaproxy` 定位为**透明中转**：只负责把请求原样送达到路径中的目标，不代替调用方裁决目标证书是否可信，因此**默认不校验上游 TLS 证书**——自签、已过期、主机名不匹配的上游均可正常转发（与 kpng 的 nginx `proxy_ssl_verify off` / worker 直连行为一致）。目标为明文 `http://` 时本就无证书参与，不受本策略影响。
- 需要严格语义（上游必须是受信 CA 签发且未过期）时设 `KISAMA_PROXY_TLS_VERIFY=true`；此时校验失败返回 `502`，响应体为 `Proxy Error: tls: failed to verify certificate: x509: ...`。
- 既有变量 `KISAMA_PROXY_INSECURE`（0.4.8 起引入）为反向语义并保留兼容：显式设 `=false` 等效于开启校验（避免既有部署声明过"要校验"却被静默降级为不校验），设 `=true` 即缺省行为。
- 未启用校验时，代理启动日志输出一条 WARN 记录当前生效策略，便于审计。

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
- 🛡️ **0.5.2 起隧道具备守护自愈能力**：与 edge 断开后自动重连（短暂抖动域名不变）；若旧隧道凭据被 Cloudflare 回收（连续重连失败达阈值），代理端自动重新注册并**更换新域名**，本接口返回的 `tunnel_domain` 始终为**最新域名**（详见「九、KMODE 启动模式」的「隧道守护自愈」小节）；
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


## 九、KMODE 启动模式（环境变量）

KMODE 是代理端的一个启动模式开关，通过环境变量取值，用于控制代理启动时是否自动创建临时隧道（trycloudflare），以及以何种方式交付隧道域名（文件 + stdin 监听 / 匿名文本平台静默上报）。

### 环境变量说明
| 环境变量 | 默认值 | 说明 |
| :--- | :--- | :--- |
| KMODE | `0` | 启动模式开关：`0`=普通启动；`1`=自动创建临时隧道 + 写域名文件 + stdin 指令监听；`2`=自动创建临时隧道 + 上报域名至 shz.al（全程静默） |
| KPATH | `$HOME/domain.txt` | 仅 KMODE=1 有效：隧道域名文件的写入路径，支持相对 HOME 的子目录写法（如 `$HOME/.cache/domain.txt`） |
| KNAME | 无 | 仅 KMODE=2 有效：shz.al 自定义名（≥3 字符，限字母、数字及 `+_-[]*$=@,;/`），同时是可预测访问 URL 的组成部分；未设置时 KMODE=2 退化为普通启动（等同 KMODE=0），不报错 |
| KNAME_KEY | `$KNAME` | 仅 KMODE=2 有效：上报的管理/修改密钥（即 shz.al 的密码）；缺省复用 KNAME 本身。**注意：shz.al 平台要求密码 ≥8 字符，若最终生效的密钥（KNAME_KEY 或复用的 KNAME）短于 8 字符，上报会被平台以 `400 Password too short` 拒绝，粘贴不会创建（KMODE=2 可视为未生效）** |

### KMODE=0（默认）
与正常启动完全一致，不会在启动时创建临时隧道，也不会开启标准流输入监听。

### KMODE=1 行为说明
1. **自动创建临时隧道**：代理启动时自动创建一条临时隧道（trycloudflare），转发端口为 agent 自身监听端口（与「默认端口」一节一致）。
2. **写入域名文件**：隧道创建成功后，将临时隧道的域名写入 KPATH 指定的文件（默认为 `$HOME/domain.txt`）。若 KPATH 设置为 `$HOME/.cache/domain.txt`，则会在 `$HOME/.cache` 目录下生成 `domain.txt`（目录不存在时自动创建）。
3. **域名文件自动删除**：当代理收到**第一次** `/api/baseinfo` 请求并成功响应后，该域名文件即被删除。此机制可用于判断控制端已成功通过隧道连上代理（外部程序可轮询该文件是否存在来确认隧道是否已被使用）。
4. **标准流输入监听**：开启 stdin 监听，识别到指令 `/domain` 时，向标准输出打印当前临时隧道的域名。该指令用于在无法读取文件的环境（如交互式终端）中获取隧道域名。

### 使用示例
```bash
# 以 KMODE=1 启动，域名写入默认路径 $HOME/domain.txt
KMODE=1 python agent.py

# 以 KMODE=1 启动，域名写入 $HOME/.cache/domain.txt
KMODE=1 KPATH=$HOME/.cache/domain.txt python agent.py
```

### KMODE=2 行为说明（shz.al 静默上报）
设计目标：控制端预先约定 KNAME（每环境唯一），即可通过固定的预测 URL 拿到该环境的隧道域名，无需读文件、无需 stdin、控制台不泄露任何域名信息。

1. **自动创建临时隧道**：与 KMODE=1 相同，代理启动时自动创建 trycloudflare 临时隧道，转发 agent 自身监听端口。
2. **上报域名至 shz.al**：隧道创建成功后，代理端向 `POST https://shz.al/`（multipart/form-data）发起一次上报：
   - `c` = 临时隧道完整域名（如 `https://xxx.trycloudflare.com`）
   - `n` = `$KNAME`（自定义名）
   - `s` = `$KNAME_KEY`（管理密码，缺省为 KNAME 本身）
   - `e` = `7d`（固定过期时间，无需配置）
   - 若返回 409（该名字已被占用，如上次运行的粘贴未过期），自动改用 `PUT https://shz.al/~$KNAME:$KNAME_KEY` 覆盖更新，保证同一 KNAME 反复重启仍可上报成功。
   - ⚠️ 平台约束：`s` 字段（管理密码）必须 ≥8 字符，否则上报被拒（HTTP 400 `Password too short`），粘贴不会创建。生效密钥 = `KNAME_KEY`，未设置时 = `KNAME` 本身；两者都不足 8 字符则 KMODE=2 实际上报失败（但代理仍正常启动）。建议 KNAME / KNAME_KEY 均 ≥8 字符。
3. **默认全程静默**：不写任何文件、不开启 stdin 监听、不向 stdout/stderr 输出隧道域名、上报结果或平台 URL；上报成败均不影响代理正常启动。
   - 🔧 排查辅助：设置 `DEBUG=true`（或 `SHZAL_DEBUG=true`）时，代理会输出上报过程日志（上报开始、POST/PUT 状态码、上报成功/失败原因），便于确认上报是否到达平台及失败原因；默认不开启。
4. **控制端读取（可预测 URL）**：直接 `GET https://shz.al/~$KNAME`（纯文本，响应体即隧道域名）；未上报时返回 404，控制端可轮询直至 200。
5. **修改语义**：代理端每次启动上报都会覆盖同一预测 URL 下的值；控制端持有 KNAME_KEY 时也可自行 `PUT https://shz.al/~$KNAME:$KNAME_KEY` 改写该值（字段同上，不允许 `n`），或 `DELETE` 主动清除。
6. **平台固定为 shz.al**：不提供平台切换变量。Rentry.co 因需 CSRF 会话流程、`/raw/` 端点已封锁（只能解析 HTML）、且不支持过期时间，不适合静默自动化上报，暂不接入。

配置示例：
```bash
# 最简配置：仅 2 个变量，密钥复用 KNAME
KMODE=2 KNAME=env01a python agent.py

# KNAME 不够唯一（如通用名）或需与读值分离时，显式指定密钥
KMODE=2 KNAME=env01a KNAME_KEY=s3cret-key python agent.py
```

控制端典型流程：
```bash
# 1. 轮询预测 URL 直到拿到上报的隧道域名
curl -s https://shz.al/~env01a        # -> https://xxxx.trycloudflare.com
# 2. 通过该域名连接代理（认证链路不变）
# 3. 代理重启后会自动覆盖更新，重新 GET 同一 URL 即得新域名；
#    控制端也可用密钥主动改写/清除：
curl -X PUT "https://shz.al/~env01a:s3cret-key" -F "c=new-value"
```

安全提示：预测 URL 无认证即可读（shz.al 平台特性），其暴露的仅是隧道域名本身；隧道背后的 agent 接口仍有完整认证与加密，风险面与 KMODE=1 写本地域名文件相当。

### 隧道守护自愈（0.5.2，四版本统一）

trycloudflare Quick Tunnel 是临时资源：与 Cloudflare edge 的连接全部断开一段时间后，Cloudflare 侧的隧道记录与域名路由会被回收。0.5.2 之前守护线程只用**首次注册的旧凭据**每 2 秒重连，回收后注册永远失败，表现为日志反复出现 `connection closed: read ECONNRESET` 且隧道永久失联。0.5.2 起引入三层自愈（py / js / java / java11 同步）：

1. **断线自动重连（原有）**：固定 2 秒间隔重连 edge；只要旧凭据仍有效（注册成功），**域名保持不变**——短暂网络抖动不会导致换域名、不影响 KMODE 已上报的值。
2. **凭据失效自动重新注册（新增）**：连续重连失败达到阈值（默认 5 次，约 10~15 秒）后，自动向 `api.trycloudflare.com` 重新注册并**更换新随机域名**（trycloudflare 平台限制，无法保留旧域名），日志输出 `domain changed: <旧域名> -> <新域名>`；重新注册自身失败则 30 秒退避重试。注册索引（connIndex）随重连轮换（0~3），降低 edge 侧旧连接残留导致的注册拒绝。
3. **域名变更自动通知（新增）**：重新注册成功后触发 `onDomainChange(旧域名, 新域名)` 回调：
   - **KMODE=2**：自动把新域名重新上报 shz.al（409 冲突走 PUT 覆盖，指数退避重试 3 次），控制端照常轮询同一预测 URL 即可拿到新域名，无需任何干预；
   - **KMODE=1**：自动重写 KPATH 域名文件（原文件即使已被 baseinfo 钩子删除也会重写），stdin `/domain` 指令输出最新域名；
   - **无 KMODE（面板 /api/argo 创建的隧道）**：无额外动作，面板刷新 `GET /api/argo` 即得新域名。
4. **半开假死防护（新增）**：edge 连接开启读空闲超时（默认 300 秒无任何入站数据即主动断开重连；edge 本有周期 PING，正常连接不会触发），根治 NAT/防火墙静默断流导致的"连接看似活着但永远收不到数据"的假死。
5. **守护线程永不静默死亡（py 版修复）**：重连循环改为全量捕获异常（此前仅捕获 `OSError/EOFError/ValueError`，其他异常会让守护线程无声退出、隧道永久失联）。

守护行为环境变量（四版本统一，支持同目录 `.env`）：

| 环境变量 | 默认值 | 说明 |
| :--- | :--- | :--- |
| KISAMA_ARGO_REREGISTER_AFTER | `5` | 连续重连失败多少次后判定旧凭据已被回收并重新注册换新域名（最小 2；调小恢复更快但更易在短暂抖动时换域名） |
| KISAMA_ARGO_IDLE_TIMEOUT | `300` | edge 连接读空闲超时秒数，无任何入站数据即主动断开重连（最小 10；`0`=禁用半开检测） |
| KISAMA_EDGE_HOSTS | region1/2.v2.argotunnel.com | edge 入口覆盖（逗号分隔）；守护自愈验收（verify_all.py 场景 6）借此模拟"edge 不可达" |

**控制端对换域名的处理建议**：轮询场景（KMODE=2 / GET /api/argo）天然兼容——检测到域名变化后用新域名重连即可；持有旧域名的连接在换域名后会失败，属预期行为，重试读取最新域名即可恢复。


## 十、x-encrypted 响应模式头规范（0.5.x 起六端强制统一）

### 语义定义

`x-encrypted` 是**运行模式位**，不是"本响应体是否已加密"的状态位。控制端凭它**无需关心请求签名是否通过**，即可判定代理端运行模式（生产 / DEBUG）。

### 取值规则（强制）

| 运行模式 | 响应场景 | x-encrypted |
| :--- | :--- | :--- |
| `DEBUG=true`（调试模式） | **一切**响应：JSON、二进制、401/403/404/5xx、OPTIONS/HEAD 预检 | **必须为 `false`**（不得缺省、不得为 true） |
| `DEBUG=false`（生产模式） | 已认证（验签通过）且响应体已加密（0.5.5-：全部端点 ECIES；**0.5.6+：`/api/baseinfo` 为 ECIES，其余端点为 AES-256-GCM(SESSION_KEY)**，详见「十二、0.5.6 响应加密协议变更」） | **必须为 `true`** |
| `DEBUG=false`（生产模式） | **生产明文认证模式**（`PLAIN_MODE=true`，**仅 PHP 版本提供**）：已认证，响应体明文 | **必须为 `plain`** |
| `DEBUG=false`（生产模式） | 未认证 / 匿名白名单（/api/baseinfo、/api/status）/ 验签失败 / 40x / OPTIONS / HEAD / 非 JSON 二进制响应 | **不发送该头** |
| `DEBUG=false`（生产模式） | 响应加密失败（ECIES 或 AES 均同） | HTTP 500，**不发送该头**（严禁明文 body + `false` 出门） |

核心不变式：

1. **生产模式永不返回 `false`** —— 出现 `false` 即实现缺陷；
2. **调试模式恒为 `false`** —— 不缺省、不为 `true`；
3. `true` 不承诺 body 必为密文（二进制下载等非加密响应体也照发）—— 是否解密由客户端按响应类型自行决定（仅对 JSON 响应尝试解密；解密算法 0.5.6 起按代理版本判定，见「十二」）。

### 生产明文认证模式（`x-encrypted: plain`，PHP 独有）

PHP 版本专属的特殊模式：代理端配置 `PLAIN_MODE=true` 后，请求与响应方向均不再做体加密——控制端照常发送 ECDSA 签名头，但**请求体改为明文 JSON 直发**（服务端不下发 `session_key`，控制端据此放弃 AES-GCM 加密）；响应方向同样明文 JSON 直出，并以 `x-encrypted: plain` 标识。仅 ECDSA 请求签名保持强制校验（未认证/验签失败行为与常规生产模式一致）。

- 适用场景：HTTPS 内传输（机密性由 TLS 承担，省去请求 AES 与响应 ECIES 双向密码学开销）、及主机层 WAF 拦截 AES 密文请求体的受限环境；
- **`session_key`/`noise_key` 恒不下发**（baseinfo 响应中为 `null`，即使已认证）——控制端据此判定请求体走明文，不再尝试 AES 加密；
- 认证语义不变：未认证/验签失败/匿名白名单/40x 行为与常规生产模式完全一致（响应不带头、无 session_key）；
- WS 终端不可用：无 `session_key` 无法计算降级令牌（PHP 版代理本就不支持 terminal）；
- 兼容性：即使控制端仍对响应尝试 ECIES 解密，因 `plain ≠ true` 不会触发解密，明文 JSON 直接可解析；
- 优先级：`DEBUG=true` 时以 DEBUG 为准（一切响应 `false`），`PLAIN_MODE` 失效；
- 风险提示：请求（含命令输入）与响应（含 `/api/tempkey` 私钥、命令输出）全程明文，必须确保部署在 HTTPS/TLS 链路内；请求仅凭 ECDSA 签名防篡改，不提供机密性。

### 调试模式下的密钥下发（设计意图，五端一致）

`DEBUG=true` 是认证与加密全部豁免的坦诚调试模式：HTTP 中间件将认证标识整体置真、跳过请求验签与请求体解密、响应全部明文（`x-encrypted: false`）。此时 `/api/baseinfo` 恒返回真实 `session_key` 与完整 `noise_key`（`controller.private` + `agent.public`），**明文直出、不做 `null` 遮蔽**——这是有意设计，不是实现偏差，五端（py/js/go/java/java11）行为一致（DEBUG 置真：py `agent.py:1593-1597`、js `agent.js:963-966`、go `middleware/auth.go:80-83`、java/java11 `kisama.java:496-505`；baseinfo 按认证标识下发：py `agent.py:5823-5828`、js `agent.js:5662-5668`、go `handlers/baseinfo.go:185-205`、java `kisama.java:590-601`）。

下发的意图：`/api/ws/*` 超级终端**不经过 HTTP 认证中间件**，其凭证在 DEBUG 模式下仍然真实生效——

1. **明文降级终端**：`token=HMAC-SHA256(SESSION_KEY, "kisama-ws-token-v1")` 校验在 DEBUG 模式下不豁免（py `agent.py:7022-7026`、go `websocket.go:301-311`、js `agent.js:6180-6189`、java `kisama.java:3767-3773`，均为常数时间比较，任何模式一致）；
2. **Noise XX 加密终端**：握手在 WS 层独立完成，控制端身份需要 `noise_key.controller.private`（msg3），对端钉扎需要 `noise_key.agent.public`（msg2）。

五端 `session_key` 与 Noise 密钥对均为**每次启动随机生成**、不落盘，控制端凭证只能从 baseinfo 现取。若 DEBUG 模式下改发 `null`，HTTP 层无任何损失，但上述两种终端在 DEBUG 部署形态下均不可用；中间件在 DEBUG 下把认证标识拉满信任的实际用途即服务该凭证链。

边界与前提：DEBUG 模式的既有暴露面本就包含**全部接口匿名可调**（含 `/api/exec`、`/api/tempkey`），凭证明文下发与其同档，不构成额外的独立风险面；密钥每次启动重新生成，重启进程即终结泄露窗口。控制端观测到 `x-encrypted: false` 即按下方判定表停止签名/加密通信并 UI 显著警示。

部署前提与风险提示：凭据与该模式全部通信均为明文，与「生产明文认证模式」同一条红线——只应在可信内网/回环或 TLS 链路内临时使用。

与 PLAIN_MODE 的对比：PLAIN_MODE（PHP 独有）= 验签照常、双向体加密关闭、密钥**恒不下发**；DEBUG = 验签也豁免、密钥**照常下发**、全部明文。优先级：`DEBUG=true` 以 DEBUG 为准（一切响应 `false`），`PLAIN_MODE` 失效。

### 控制端判定表

| 观测 | 判定 | 客户端动作 |
| :--- | :--- | :--- |
| `x-encrypted: true` | 生产模式（该 JSON 响应体为密文；0.5.5- 全部为 ECIES，**0.5.6+ 仅 `/api/baseinfo` 为 ECIES、其余端点为 AES-GCM(SESSION_KEY)**） | 按代理版本号数字前缀判定算法（见「十二」）：`≥ 0.5.6` → 非 baseinfo 端点用 `session_key` 做 AES-256-GCM 解密、`/api/baseinfo` 用 ECIES 解密；`< 0.5.6` → 全部 ECIES 解密 |
| `x-encrypted: plain` | **生产明文认证模式**（PHP 独有）：验签照常、双向体加密关闭 | 照常发送 ECDSA 签名头；请求体改发明文 JSON（不设 `X-AES-Encrypted`，无 session_key 可加密）；响应按明文 JSON 解析，不得判为 DEBUG |
| `x-encrypted: false` | **调试模式**（认证形同虚设，凭据经 baseinfo 明文下发） | 停止签名/加密通信，UI 显著警示 |
| 头缺失 | 生产模式的未加密响应（匿名白名单 / 错误 / 预检），body 为明文 JSON | 按明文处理；**不得**判为调试模式 |

判定"是否 DEBUG 模式"最简探针：匿名 `GET /api/baseinfo`，看响应头即可，与签名无关。

### 违规即缺陷

凡不符合上表的实现（例如：生产模式对匿名 baseinfo 回 `false`、调试模式响应缺头、加密失败回退 `false` + 明文、401/OPTIONS 在生产模式补 `false`），均视为该端实现缺陷，须按本规范改造。过渡期提示：旧版本 agent 的 `false` 不可信（匿名白名单、旧版静默验签失败均回 `false`），控制端在签名协议落定前不得仅凭 `false` 判定调试模式。


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
| **命令执行** | POST | `/api/exec`（等价别名：`/api/do` 优先、`/api/run`、`/api/work`，见二-3） | 执行系统命令 | ✅ | ✅ |
| **文件列表** | POST | `/api/file/list` | 列出文件 | ✅ | ✅ |
| **权限查询** | POST | `/api/file/authority` | 查询权限 | ✅ | ✅ |
| **权限设置** | PUT | `/api/file/authority` | 设置权限 | ✅ | ✅ |
| **文件查看** | POST | `/api/file/cat` | 查看文本内容 | ✅ | ✅ |
| **文件上传** | POST | `/api/fileraw` | 上传文件（裸二进制流，支持分块） | ✅ | ✅ |
| **文件下载** | POST | `/api/file/download` | 下载文件 | ✅ | ✅ |
| **文件删除** | DELETE | `/api/file` | 批量删除 | ✅ | ✅ |
| **文件删除(PHP兼容)** | POST | `/api/file/delete` | 批量删除（**仅 PHP**，与 DELETE /api/file 等价） | ✅ | ✅ |
| **文件移动** | PUT | `/api/file` | 批量移动 | ✅ | ✅ |
| **文件批量复制** | POST | `/api/file/cp` | 批量复制 | ✅ | ✅ |
| **新建目录** | POST | `/api/file/new` | 创建目录 | ✅ | ✅ |
| **文件解压** | POST | `/api/file/unzip` | 解压 ZIP 压缩包 | ✅ | ✅ |
| **文件压缩** | POST | `/api/file/zip` | 压缩 ZIP 压缩包 | ✅ | ✅ |
| **启动任务-查** | GET | `/api/task/onetime` | 获取任务列表 | ✅ | ✅ |
| **启动任务-设** | POST | `/api/task/onetime` | 设置并执行任务 | ✅ | ✅ |
| **启动任务-重** | POST | `/api/task/onetime/execute` | 重试当前任务 | ✅ | ✅ |
| **定时任务-查** | GET | `/api/task/cron` | 获取定时任务 | ✅ | ✅ |
| **定时任务-设** | POST | `/api/task/cron` | 设置定时任务 | ✅ | ✅ |
| **任务状态** | GET | `/api/task/status` | 获取模块状态 | ✅ | ✅ |
| **任务持久化** | ENV | `KSTORE`/`KSTORE_KEY` | 任务加密持久化（0.5.7，见「十三」） | — | — |
| **任务日志-查** | GET | `/api/task/log/onetime` | 查询启动任务日志 | ✅ | ✅ |
| **任务日志-查** | GET | `/api/task/log/cron` | 查询定时任务日志 | ✅ | ✅ |
| **任务日志-清** | DELETE | `/api/task/log/onetime` | 清空启动任务日志 | ✅ | ✅ |
| **任务日志-清** | DELETE | `/api/task/log/cron` | 清空定时任务日志 | ✅ | ✅ |
| **日志统计** | GET | `/api/task/log/summary` | 获取统计摘要 | ✅ | ✅ |
| **临时密钥** | GET | `/api/tempkey`（`format=short` 短格式，0.5.8 起） | 获取临时授权密钥对 | ✅ | ✅ |
| **超级终端** | WS | `/api/ws/terminal` | 使用交互性终端 | ✅ | ✅ |
| **代理转发** | ANY | `/kisamaproxy/*` | 转发至任意地址（仅GO） | ❌ | ❌ |
| **临时隧道-查** | GET | `/api/argo` | 查询临时隧道列表（Py/Js） | ✅ | ✅ |
| **临时隧道-建** | POST | `/api/argo` | 创建临时隧道（Py/Js） | ✅ | ✅ |
| **临时隧道-删** | DELETE | `/api/argo` | 删除临时隧道（Py/Js） | ✅ | ✅ |
---
> 注：上表「认证/加密」为常规生产模式（`DEBUG=false, PLAIN_MODE=false`）语义。PHP 版配置 `PLAIN_MODE=true` 后，全部接口**认证列不变**（ECDSA 签名照常强制），**加密列改为明文直发**（请求体明文 JSON、响应明文 + `x-encrypted: plain`，且 `/api/baseinfo` 不下发 `session_key`）；`DEBUG=true` 时认证与加密均豁免（详见「十、x-encrypted 响应模式头规范」）。

### 通用请求头要求 (Headers)
所有标记为 ✅ 的接口必须包含以下字段：

1. `X-Nonce`: `<Base64随机数>`
2. `X-Timestamp`: `<UTC时间戳>`
3. `X-Auth-Token`: `<ECDSA签名>`
4. `Content-Type`: `application/json`

签名消息（agent ≥ 0.4.8，v2 五段）：取 `METHOD`（大写）、`PATH`（不含 query，PHP 入口脚本转发形态需剔除 `*.php` 段）、`SHA256_HEX(实际发送body)`（无体请求及 `/api/fileraw` 固定为 `sha256("")`，AES 加密请求签**加密后**的密文）、`X-Nonce`、`X-Timestamp` 五段以 `\n` 拼接，SHA256 后做 ECDSA-P256 签名（DER 或 Raw 64 字节均可）。

签名密钥说明：`X-Auth-Token` 可由控制端**静态密钥**签名，也可由 `GET /api/tempkey` 获取的**有效临时密钥**签名（`ecdsa.private_key`）。代理端验签时自动切换，并据此选择对应的 ECIES 公钥加密响应（静态密钥请求→静态公钥，临时密钥请求→临时公钥）。**0.5.6 起**该公钥选择仅作用于 `/api/baseinfo` 的响应加密；其余端点的响应改用 `session_key` 做 AES-256-GCM 加密（与验签来源无关，见「十二」）。

响应模式判定头 `x-encrypted`（生产恒 `true` / 调试恒 `false` / 生产未加密态不发送）的完整取值规则见「十、x-encrypted 响应模式头规范」。

### 自动化文档地址
* **交互式文档 (Swagger UI):** `/docs` (仅在 `DEBUG=true` 时可用，仅python版本有此文档)
* **原始定义 (OpenAPI JSON):** `/openapi.json` (仅在 `DEBUG=true` 时可用，仅python版本有此文档)

## 十一、日志级别（LOG_LEVEL，0.5.3 起五语言统一）

### 取值定义（四级阈值式，与常见日志框架语义一致）

| 级别 | 值 | 含义 |
| :--- | :--- | :--- |
| DEBUG | `0` | 调试明细（全量） |
| INFO | `1` | 一般运行信息（含 DEBUG） |
| WARN | `2` | 警告（含 INFO 及以下） |
| ERROR | `3` | 仅错误 |

阈值式输出：当前日志级别 **≥ 设定阈值** 才输出。例如 `LOG_LEVEL=2` 输出 WARN 与 ERROR，`LOG_LEVEL=3` 只输出 ERROR。

### 环境变量与默认值

| 环境变量 | 默认值 | 说明 |
| :--- | :--- | :--- |
| LOG_LEVEL | `3` | 输出阈值（`0`~`3`，支持 `debug`/`info`/`warn`/`error` 字符串写法，仅 go）；缺省 `3` 即**生产环境只输出错误日志** |
| DEBUG | `false` | **接管日志级别**：`DEBUG=true` 且未显式设置 `LOG_LEVEL` 时，阈值强制为 `0`（调试全量输出）；显式设置了 `LOG_LEVEL` 时以 `LOG_LEVEL` 为准（go）|
| LOG | （已废弃） | 原 java 版布尔总开关已于 0.5.3 移除，由 `LOG_LEVEL` + `DEBUG` 组合替代 |

各语言细节：
- **js**（`js/agent.js` Logger）：四级阈值，缺省 `3`；`DEBUG=true` 且未设置 `LOG_LEVEL` 时为 `0`。所有级别均走 stdout（ERROR 红色）。
- **go**（`go/logger`）：四级阈值，缺省 `3`；`DEBUG=true` 且未设置时为 `0`。ERROR 走 stderr，其余走 stdout。
- **java / java11**（`kisama.java`）：四级阈值，缺省 `3`；`DEBUG=true` 接管为 `0`。ERROR 走 stderr，其余走 stdout，输出统一带 `[DEBUG]/[INFO]/[WARN]/[ERROR]` 前缀。0.5.3 起废弃 `LOG` 布尔开关。类加载时自动探测 Bukkit/Paper 宿主：命中则把 stdout/stderr 通道整体切换到服务端 JUL logger（`Bukkit.getLogger()`，out→info、err→severe、printStackTrace→severe+堆栈），规避 Paper 对插件类直写 `System.out/err.print` 的 Nag 告警；独立运行保持直写 stdout/stderr，行为不变。宿主可用 `kisama.setConsoleSink(ConsoleSink)` 显式覆盖自适配通道（显式注入优先）。
- **py**（`py/agent.py` Logger）：0.5.3 起纳入同一四级阈值体系，缺省 `3`；`DEBUG=true` 且未设置 `LOG_LEVEL` 时为 `0`（全量含全部调试频道）。原有细分调试频道整体平移到**高位频道 11~15**（与标准四级互不干扰）：`11`=基本信息、`12`=WebSocket传输、`13`=终端日志、`14`=网络统计、`15`=磁盘统计。阈值设为 `11~15` 时常规日志（INFO/WARN/ERROR）全出、且**精确打开对应一个调试频道**；`LOG_LEVEL=0` 时全量输出全部频道。代码内 `Logger.debug(msg, channel)` 的 channel 参数即频道号（缺省 11），DEBUG 行按 `[DEBUG]` 标签输出（ERROR 走 stderr，其余 stdout）。

## 十二、0.5.6 响应加密协议变更（ECIES 仅存于 baseinfo，其余端点改用 session_key 对称加密）

### 变更动机

0.5.5 及之前，代理端对**每一个**认证 JSON 响应都执行一次完整 ECIES 加密（临时 secp256k1 密钥对生成 + ECDH + HKDF-SHA256 + AES-GCM + Base64），密钥建立开销随请求线性增长，且在无原生加速库的环境（如 py 纯 Python 回退、java BouncyCastle 弱机）下单次可达毫秒到数十毫秒。0.5.6 起改为 TLS 式的两段设计：**`/api/baseinfo` 作为唯一的 ECIES 端点承担密钥分发（握手），其余端点的响应统一使用 baseinfo 下发的 `session_key` 做 AES-256-GCM 对称加密**——省去每响应的非对称密钥建立，仅保留对称加密开销（微秒级）。

### 加密规则（0.5.6 起，生产模式 DEBUG=false）

| 场景 | 响应加密方式 | 说明 |
| :--- | :--- | :--- |
| `/api/baseinfo`（已认证） | **恒为 ECIES** | 静态密钥签名→静态 ECIES 公钥；临时密钥签名→临时 ECIES 公钥（临时持有者此时还没有 session_key，必须经此端点取得） |
| 其余全部端点（已认证，含 `/api/tempkey`） | **AES-256-GCM(SESSION_KEY)** | 密文容器 `Base64(JSON{nonce, tag, ciphertext})`，`nonce` 为每响应随机 12 字节，`session_key` 为 baseinfo 下发的 32 字节原始密钥（Base64 解码后）；与验签来源无关（静态/temp 一视同仁） |
| 未认证 / 匿名白名单 / 40x / OPTIONS / HEAD | 不加密 | 与 0.5.5 一致（不发送 `x-encrypted`） |
| `DEBUG=true` | 全部明文 | 与 0.5.5 一致（`x-encrypted: false`） |
| `/api/fileraw` 裸流、octet-stream 二进制响应 | 不加密 | 与 0.5.5 一致（机密性由传输层 TLS 承担） |

不变式：`x-encrypted` 头语义与取值规则不变（见「十」），`true` 依旧表示"已认证的加密 JSON 响应"，仅**算法**由版本号区分；加密失败仍为 HTTP 500 且不发送该头。

### 客户端判定规则

1. 客户端从 `/api/baseinfo` 响应 JSON 的 `version` 字段（或 `x-agent-version` 响应头）读取代理版本号，取**数字前缀**解析为三元组（如 `"0.5.6-python"` → `(0,5,6)`；带语言后缀不影响比较）；
2. 版本 `≥ 0.5.6`：`/api/baseinfo` 用 ECIES 解密（本就如此），**其余端点**用 `session_key` 做 AES-256-GCM 解密；
3. 版本 `< 0.5.6`：全部端点按 ECIES 解密（旧代理行为不变）；
4. 不引入任何新请求/响应头，判定完全由客户端按版本号自适应。

### 兼容性与安全性说明

- **版本必须成对升级**：旧版控制端/面板（< 0.5.6 感知）遇到 0.5.6+ 代理时将无法解密非 baseinfo 响应；反之 0.5.6+ 控制端遇到旧代理自动走 ECIES（版本判定天然兼容）。客户端应在版本判定后按对应算法解密，解密失败给出"版本需成对升级"的明确提示而非模糊的解密错误。
- **tempkey 授权寿命不变**：认证门仍为 ECDSA 签名；tempkey 过期检查仍在每个认证请求路径上，过期即作废临时密钥并触发 `SESSION_KEY` + 控制 Noise 密钥轮换（`rotateOperationalSecrets`），临时持有者缓存的 session_key 随轮换失效——改为对称加密**不会**使临时授权变成永久授权。
- `session_key` 仍是随机 32 字节、仅存内存、仅经 baseinfo（ECIES 保护下）下发；其用途在原有"请求体 AES 解密（X-AES-Encrypted）+ WS 降级令牌"基础上增加"响应体 AES 加密"。

---

## 十三、任务持久化（KSTORE，0.5.7 起五语言统一）

任务（启动任务 onetime + 定时任务 cron）在 0.5.6 及之前为**纯内存存储，重启即失**，且启动任务只在远端 POST 设置时执行。0.5.7 起新增本地加密持久化：任务定义落盘、重启自动恢复，**启动任务由 agent 本地自动执行、cron 调度本地恢复——全程无需远端连接（离线自治）**。持久化仅覆盖任务定义，不含执行日志（日志仍为内存环形缓冲）。

### 环境变量说明

| 变量 | 默认值 | 说明 |
| :--- | :--- | :--- |
| `KSTORE_KEY` | （无） | 持久化加密密钥，**唯一密钥来源，不落盘**。接受 hex（64 字符）或 std base64，解码后必须恰为 **32 字节**。未设置或非法 → 持久化关闭（fail-closed，ERROR 日志），**绝不降级明文落盘** |
| `KSTORE` | `$HOME/.tmp/store.enc` | 加密存储文件路径（目录不存在自动创建）；`off` / `0` / `none` / `false` 显式关闭持久化 |

`$HOME` 解析链：`USERPROFILE` → `HOME` → `user.home`（py/js/java/java11，与 KMODE 域名文件一致）→ go `os.UserHomeDir()` → 全部不可用时降级当前工作目录。

### 存储文件格式

文件内容为**单行密文**，容器与 0.5.6 响应加密完全一致：`Base64(JSON{nonce, tag, ciphertext})`，AES-256-GCM，nonce 每次随机 12 字节。内层明文 JSON：

```json
{
  "magic": "kisama-store",
  "version": 1,
  "saved_at": "2026-09-25T10:30:45Z",
  "data": {
    "onetasks": ["echo hello", "python setup.py\n"],
    "crontasks": { "*/5 * * * *": "echo tick" }
  }
}
```

- `data` 信封为后续扩展预留，当前仅含任务定义；
- **任务命令为 shell 字符串，多行脚本原样支持**（JSON 自动转义换行）；
- 写盘时机：POST `/api/task/onetime`、POST `/api/task/cron`（含清空）成功后同步落盘；原子写（同目录 tmp 文件 + fsync + rename/replace）；
- 所有存储 I/O 故障只记日志降级，**绝不影响内存任务、请求成功与 agent 启动**。

### 启动恢复流程（五语言一致）

1. TaskManager 初始化时解析 `KSTORE`/`KSTORE_KEY`；
2. 加载存储：文件缺失 → 空表（首次运行）；解密失败 / JSON 损坏 / magic 不符 / 版本不支持 → 原文件**隔离改名** `store.enc.bad-<时间戳>` + ERROR 日志 + 以空任务启动；版本**高于**当前支持 → 保留原文件不覆盖，本次以空任务启动且持久化只读（防止旧版本 agent 覆盖新版本数据）；
3. 恢复 `onetasks` / `crontasks` 到内存；
4. `crontasks` 非空 → 启动既有 cron 调度循环；
5. 恢复出的启动任务**后台执行一次**（不阻塞 HTTP 就绪），结果写入既有 onetime 日志环形缓冲（重启后仍可经 `/api/task/log/onetime` 查证）。

### onetime 单次执行语义（重要）

沿用各语言既有的执行标记（py/js/go `InitTask`、java `ONETIME_EXECUTED`），标记**每个生命周期只消费一次**：

1. 首次自动执行 = 启动时恢复执行（持久化启用且恢复列表非空）或首次非空 POST（store 为空 / 未启用时）；
2. 标记消费后，再次 POST `/api/task/onetime` 仅**更新列表 + 落盘，不再自动执行**（py 现状语义；js/go 为本版本新增门控——此前 js/go 的 POST 无条件执行，是"boot 执行后又被执行一次"的缺口；java 维持 400 `already executed` 现状）；
3. 恢复列表为空 → 启动不执行、标记不消费 → 远端首次 POST 正常执行；
4. 空列表 POST = 清空 + 落盘，不执行、不消费标记（java 空列表路径由"不清理"修正为"清空+落盘"，与其他四语言对齐）；
5. `POST /api/task/onetime/execute` 不变：显式强制重跑的唯一入口。

### API 变更（additive，向后兼容）

| 端点 | 变更 |
| :--- | :--- |
| GET `/api/task/status` | 新增 `persistence: {enabled, store_path, last_saved_at}` |
| POST `/api/task/onetime` | 响应新增 `persisted: true\|false`；`executed` 数组仅在实际执行时返回 |
| POST `/api/task/cron` | 响应新增 `persisted: true\|false` |

### 密钥与威胁模型

- 密钥仅来自 `KSTORE_KEY` 环境变量（可选经 `.env` 注入），**磁盘上不存在密钥文件**：仅拿到 `store.enc` 文件（备份、单文件外泄）无法解密；
- 更换密钥后旧文件无法解密 → 被隔离重建，任务丢失（运维需自行重设任务或找回旧密钥）；
- GCM 认证标签提供防篡改：密文或 tag 被改动即解密失败 → 隔离；
- 固有边界：与本 agent 同用户的进程可读其环境变量（`/proc/<pid>/environ` 等），密钥对该威胁面不可防御；机密性边界为"防止存储文件单独外泄被还原"，不防御本机 root。

### 验收

`tests/py/test_task_store.py`、`tests/js/test_task_store.js`（离线单测：密钥解析 / 往返 / 损坏隔离 / 单次语义）、`go/handlers/task_store_test.go`；`tools/verify_all.py` 场景 7（标记任务写入 → 重启 → 恢复一致性 + boot 本地执行 + 单次执行语义 + /execute → 清库）计入汇总矩阵 PERSIST 列。

## 十四、临时密钥短格式（format=short，0.5.8 起六端统一）

### 设计动机

`/api/tempkey` 下发的 ECDSA 私钥为 PKCS#8 PEM 多行文本（`-----BEGIN PRIVATE KEY-----` 头尾 + 64 字符换行 Base64，整段约 250+ 字符），ECIES 公钥为 130 字符 hex。该格式面向网页控制端（浏览器原生可解析 P-256 结构化密钥），但接口的主要消费者是 **AI Agent（kisama-skill）**：AI 在读取、转录、传递多行 PEM 时易出现换行丢失、头尾截断、字符合并等抄写错误。0.5.8 参照控制面板部署命令的公钥压缩格式（33 字节 SEC1 压缩点 Base64），为接口增加短格式输出。

### 契约

`GET /api/tempkey?ttl=24&format=short`：

- **JSON 结构与字段名与全格式完全一致**，仅值的编码不同——调用方（含 AI）无需改变解析逻辑；
- `ecdsa.private_key`：64 位 hex（P-256 私钥标量 32 字节），单行纯 hex，可直接整串传入 kisama-skill 的 `--ecdsa-key`；
- `ecdsa.public_key`：33 字节 SEC1 压缩点（`02/03||X`）的 Base64（44 字符），与面板部署命令的 `ECDSA_PUBKEY` 环境变量同构；
- `ecies.private_key`：与全格式一致（64 位 hex，本就是单行短格式）；
- `ecies.public_key`：33 字节 SEC1 压缩点 Base64，与 `keys/agent_ecies_pub.b64` 静态公钥格式同构；
- `format` 缺省或 `full` → 现行全格式（行为零变化）；其他非法值 → 422；
- 幂等性不受影响：同一 `key_id` 的密钥对，两种 format 随时可取、内容同源（同一密钥对不同编码）。

### 兼容性与实现要点

- **向后兼容**：不带 `format` 的请求行为逐字节不变；`short` 仅是同一密钥对的另一种下发编码，签验、ECIES 加解密、过期轮换等内部路径零改动（代理内存中始终持有完整密钥材料）；
- **控制端兼容**：kisama-skill 与 tools/control.py 自 0.5.8 起自动识别 64 位 hex / Base64(32字节) 标量形式的 ECDSA 私钥（PEM/DER 继续支持），短格式私钥无需任何转换即可直接签名；
- **PHP 版**：内部状态记录（`.kisama_tempkey_state.php`）恒为全格式，short 仅在响应构造时从全格式字段即时派生——baseinfo 的 temp ECIES 对端选择（65 字节未压缩点判断）与旧版状态文件天然兼容；
- **实现**：py `_compress_point65` / go `elliptic.MarshalCompressed` + `ecies.PublicKey.Bytes(true)` / js noble-curves `toBytes(true)` / java+java11 BC `ECPoint.getEncoded(true)` / PHP `_pointCompressB64Hex`（y 末字节奇偶决定 `02/03` 前缀，各端一致）。

### 验收

`tests/py/test_tempkey_short.py`、`tests/js/test_tempkey_short.js`、`go/handlers/tempkey_test.go`（short 字段格式、与全格式同源交叉验证、非法 format 422、缺省行为不变）；PHP 四实现以 `php -l` + 本地 `php -S` 冒烟验证三种 format 响应；`tools/verify_all.py` tempkey short 场景覆盖五端格式断言与短私钥端到端签名连通。

## 十五、`/api/baseinfo` 可选字段 `marks`（主机标记）探测规范

### 定位与动机

`baseinfo` 现有字段（`os`、`kernel_version`、`virtualization`、`arch` 等）描述"这台机器是什么"，但不回答"这个节点能做什么"。控制端若靠这些字段推断能力，只能按发行版字符串和容器迹象猜测，且各端 `virtualization` 口径并不一致：py 在 `/proc/cpuinfo` 出现 `KVM`/`QEMU` 字样时返回 `QEMU`，go 返回 `kvm` 表示"本机是虚拟机"，二者与"本机能运行 KVM"恰好相反或无关。`marks` 把能力显式化为可枚举的短标记，供控制端做任务路由与降级（能否提权、能否跑 qemu-kvm、是否翼龙托管容器、能否用 systemctl 管服务、能否用 FUSE 挂载网络存储），避免继续靠字符串猜。

`marks` 与 `virtualization` 并存、互不推导：任何实现不得用 `virtualization` 反推 `marks`。

### 15.1 字段契约

- 类型 `string[]`，元素为小写 ASCII 短名，当前定义五个值：`root`、`kvm`、`pterodactyl`、`systemd`、`fuse`，语义见 15.3–15.7。
- 顺序固定为 `root` → `kvm` → `pterodactyl` → `systemd` → `fuse`（新增标记一律追加在末尾），同一标记只出现一次；客户端必须按集合处理，不得依赖顺序。
- 语义：每一项都表示"在 **agent 进程视角**下已确认成立"的客观事实，不表示程度，也不代表宿主机或其它命名空间的状态（见 15.3）。
- 缺失 / 空数组 / null 三态语义：
  - **字段缺失**：代理未实现该字段（旧版）、平台不适用（非 Linux）、部署方禁用，或低权限模拟器副本不实现探测（PHP 两个 emulator 副本按此例外省略字段，不得用 `[]` 冒充"已探测且无命中"）→ 控制端按"未知"处理，不得假设无能力；
  - **`[]`**：已完成探测，未命中任何标记；
  - **`null`**：非法值，实现不得输出；客户端遇到时按"字段缺失"处理。
- 前向兼容：客户端遇到未知取值必须忽略（不得报错，也不得因此丢弃整个响应）。
- 客户端读取（零依赖）：baseinfo 响应本身就是 JSON，`marks` 是标准 JSON 字符串数组，浏览器/Node 内置 `JSON.parse` 后即为原生 Array，不需要任何三方库：`const marks = Array.isArray(info.marks) ? info.marks : []; marks.includes('kvm')`（IE11 等旧环境用 `marks.indexOf('kvm') !== -1`）。**禁止**对原始响应文本做正则或字符串切分来提取该字段。
- 平台：五项均为 Linux 语义；Windows / macOS / *BSD 返回 `[]` 或省略字段，不得伪造。
- 可用性：additive 可选字段，五端（`0.6.0-*`）与 PHP 两个完整副本（`0.6.0-php`、`0.6.0-php-cpanel-ai`）已实现；两个 emulator 副本按上述例外省略字段。控制端以"字段是否存在"判定，不要求版本号门槛。
- 生命周期：进程级静态属性（P 级）——进程启动后首次 baseinfo 计算一次并写入快照，生命周期内不再重探；**不随 T 级 TTL 过期、也不随临时密钥轮换而重跑**（见「十六」）。

### 15.2 探测总则（准确优先、零子进程、零网络）

1. **只用本地文件与系统调用**（`stat` / `open` / `read` / `readlink` / `geteuid` 等）。禁止 `fork`/`exec` 调 `id`、`ls`、`test`、`systemctl`、`fusermount`：共享主机常禁用 `exec`，Android/Termux 等环境无对应工具，每次进程创建 0.5–3 ms 起，且 `systemctl` 在无 daemon 时可阻塞数十秒。
2. **零网络、零写操作、不做真实挂载/建 VM/改服务**；唯一例外是 15.4 的可选严格模式 `KVM_CREATE_VM`（默认关闭）。
3. **只读、幂等、无副作用**：打开的设备/文件必须在正常与异常路径都关闭；baseinfo 可被反复请求，不得泄漏 fd。
4. **只报确定命中**：任一步失败、权限不足、结果有歧义 → 不报该项。漏报（false negative）可接受，误报（false positive）不可接受——控制端会据此调度真实任务（例如在无 KVM 的机器上起虚拟机）。
5. **异常隔离**：单个标记探测失败只丢弃该标记，不影响其它标记，也不得影响 baseinfo 其它字段；日志仅 DEBUG 级，不得产生 WARN/ERROR 噪声。
6. **限长读取**：`/proc` 文件按 8 KiB 分块读取，命中关键词即停止，保留 `len(needle)-1` 字节重叠防止关键词跨块；单文件读取上限 1 MiB。

### 15.3 `root` —— 进程具备 uid/gid 0

判据（同时满足）：**有效**用户 ID 为 0 且**有效**组 ID 为 0。

实现：优先系统调用（py `os.geteuid/getegid`、js `process.geteuid/getegid`、go `os.Geteuid/Getegid`）；无对应 API 的运行时读 `/proc/self/status` 的 `Uid:`/`Gid:` 行，取**第 2 个字段**（effective），例如 `Uid:\t0\t0\t0\t0`。

排除与边界：

- 环境变量 `USER=root`、`/etc/passwd` 首行、`$HOME=/root`、`real uid == 0` 均不足以判定：前三个可伪造，real uid 会在 `sudo`/setuid 场景失真；必须以 effective 为准。
- **命名空间内 root ≠ 宿主机 root**：容器/用户命名空间里的 uid 0 只是该命名空间内的 root，标记不承诺任何逃逸能力，控制端不得据此推断宿主机权限。
- uid 0 但 gid ≠ 0（少见）按定义不报。
- Windows 无 POSIX uid/gid，一律不报。

实测（2026-10-22）：root+KVM 主机 `id` 报 `uid=0(root) gid=0(root)`，`/proc/self/status` 的 `Uid/Gid` 四列全 0 → `root`；翼龙容器报 `uid=998 gid=998 groups=998` 且 `/etc/passwd` 无 998 条目 → 无 `root`。

### 15.4 `kvm` —— 可运行 qemu-kvm 类程序的前提

判据（同时满足，仅 Linux）：

1. `/dev/kvm` 存在且为**字符设备**；
2. 设备号为 **major 10 / minor 232**（KVM misc 设备固定号）；
3. 进程能以 `O_RDWR` 成功 `open` 并 `close`。

实现顺序：`stat` → 校验 `S_ISCHR` 与主次号 → `open(O_RDWR)` → `close`。任何一步失败即不报。

不采用的做法：

- `ls -l /dev/kvm`、`test -c /dev/kvm`：需要子进程，且只证明"存在"不证明"当前进程可用"；
- `os.access` / `File.canRead()` 一类权限位推断：按 **real uid** 判定、忽略 device cgroup 与 LSM 的拒绝，会把"容器映射了设备节点但被 device cgroup 拦下"误判为可用；
- 读 `/sys/module/kvm`、`/proc/misc`、`/proc/cpuinfo`：只证明驱动加载或 CPU 有虚拟化特性，不证明本进程能打开设备。

可选严格模式（默认关闭）：`open` 成功后再做一次 `ioctl(fd, KVM_CREATE_VM, 0)`（x86_64/aarch64 为 `0xAE01`），成功才报。它排除"有 `/dev/kvm` 但嵌套虚拟化被禁用/CPU 不支持 VMX-SVM"的机器（这类机器 `open` 成功而 `KVM_CREATE_VM` 返回 `ENODEV`/`EIO`）。该 ioctl 只创建一个空 VM 上下文，随即 `close` 释放，无持久副作用；因常量按架构定义，不建议作为缺省路径。

边界：本标记只回答"具备运行 qemu-kvm 的前提"，不保证性能、GPU 直通或嵌套虚拟机可用（严格模式除外）；Windows 的 Hyper-V / WHPX 不在本标记语义内。

实测：root+KVM 主机 `/dev/kvm` 为 `crw-rw---- root:kvm 10, 232`，`open(O_RDWR)` 成功，`KVM_CREATE_VM` 返回成功 → `kvm`；翼龙容器无 `/dev/kvm`（`No such file or directory`）→ 无 `kvm`。

### 15.5 `pterodactyl` —— 运行在翼龙面板管理的容器内

判据：当前进程运行在 Pterodactyl 系面板（wings 调度）管理的 Docker 容器中。按下列顺序判定，任一**强特征**命中即报：

1. **挂载源特征（强，且与进程 uid 无关）**：`/proc/self/mountinfo` 任一行第 4 段（挂载源路径）含 `/var/lib/pterodactyl/`。wings 缺省把服务器卷 `/var/lib/pterodactyl/volumes/<server-uuid>` 绑定挂载到容器 `/home/container`，实测行形如 `... /var/lib/pterodactyl/volumes/<uuid> /home/container rw,relatime - ext4 /dev/sda1 ...`。
2. **环境变量特征（强）**：`/proc/self/environ` 同时出现 `P_SERVER_UUID=` 与 `P_SERVER_LOCATION=` 两个键；读不到或未命中时再读 `/proc/1/environ`（容器 init 为 `tini -> /entrypoint.sh`，环境同样完整；该文件权限为 0400 且属容器运行用户，需同 uid 或 root，`EACCES` 属正常，直接跳过）。两个键必须同时存在，避免把用户脚本自定义的单个变量当作证据。
3. **兜底组合（弱，四项必须同时满足）**：`/etc/hostname` 为 36 字符小写 UUID（wings 用服务器 UUID 作 hostname，实测与 `P_SERVER_UUID` 一致）**且** `/home/container` 存在且为目录 **且** 当前 euid 在 `/etc/passwd` 中无对应条目（终端因此显示 `I have no name!`）**且** `/.dockerenv` 或 `/run/.containerenv` 存在。

不采用的特征（已实测证伪或不稳）：

- 容器提示符 `I have no name!@<uuid>:~$`：由 shell 提示符配置决定，agent 拿不到也不应解析；
- `/proc/self/cgroup` 含 `docker`/`containerd`：cgroup v2 + 私有 cgroupns 下恒为 `0::/`（翼龙容器实测），完全不可用；
- `/proc/1/comm == tini`：tini 是通用 init，大量非翼龙镜像同样使用；
- 单个 `USER=container`、`HOME=/home/container`、缺 `/etc/passwd` 条目：都只说明镜像未建用户或惯例路径，非翼龙专有，必须与 UUID hostname 等组合；
- 镜像名/镜像标签：容器内无法读取自身镜像元数据。

边界：

- wings 的 `system.data` 可自定义，此时特征 1 不命中，靠特征 2/3；
- 翼龙镜像既有非 root（实测 uid/gid 998）也有 root，`pterodactyl` 与 `root` 可同时出现，互不排斥；
- 衍生面板若沿用 `P_SERVER_*` 约定，会被本标记覆盖；需要区分时新增标记（见 15.11），不得改本标记语义。

实测（翼龙容器，java 0.5.9，2026-10-22）：`/proc/self/mountinfo` 命中 `/var/lib/pterodactyl/volumes/19e68255-bb71-4a86-b4c8-6e328f59cdec`；`/proc/1/environ` 与 agent 进程环境均含 `P_SERVER_UUID=19e68255-...`、`P_SERVER_LOCATION=de`；`/etc/hostname` 与 `P_SERVER_UUID` 相同；euid 998 在 `/etc/passwd` 无条目；无 `/dev/kvm`、无 `systemctl`、无 `/dev/fuse`。

### 15.6 `systemd` —— 环境能够驱动 systemd/systemctl 执行服务

判据（同时满足，仅 Linux）：

1. `/run/systemd/system` 存在且为目录（systemd `sd_booted()` 的官方判据，表示系统实例已接管当前 PID/挂载命名空间）；
2. 控制通道存在：`/run/systemd/private` 或 `/run/dbus/system_bus_socket` 至少一个存在（`systemctl` 必须有其一才能下发指令）；
3. `systemctl` 可定位：`/usr/bin/systemctl`、`/bin/systemctl`、`/usr/local/bin/systemctl` 任一存在，或在 `PATH` 各目录下存在同名可执行文件（只 `stat`，**不执行**）。

辅助校验：若 `/proc/1/comm` 或 `readlink /proc/1/exe` 可读且**明确不是** systemd，则不报；读取失败（`/proc/1` 受限）不作为否决条件，仍按上述三条判定。

排除：

- 仅 `/run/systemd` 目录存在：Debian/Ubuntu 镜像装了 systemd 包但未作为 init 运行（实测翼龙容器即如此：`/run/systemd` 存在、`/run/systemd/system` 不存在）→ 不报；
- 仅有 `systemctl` 二进制（Docker 镜像常见）→ 不报；
- PID 1 可读且明确不是 systemd（`/proc/1/comm`/`exe` 指向非 systemd）→ 不报；`/proc/1` 不可读时不据此否决。

边界：

- 本标记是**环境能力**，不是权限：非 root 用户即使 systemd 在跑，改系统服务仍会被 polkit 拒绝。"可无交互管理服务"应判定为 `marks` 同时含 `systemd` 与 `root`。
- 容器内让 systemd 作为 PID 1（privileged/nesting）同样命中，属预期语义。
- 用户级实例（`/run/user/<euid>/systemd/private`，`systemctl --user`）**不单独构成** `systemd`：它只能管理用户服务，混入会让"能装/管系统服务"的判断失真；需要表达时新增独立标记（如 `systemd-user`）。

实测：root+KVM 主机 `/run/systemd/system` 为目录、`/run/systemd/private` 与 `/run/dbus/system_bus_socket` 存在、`/usr/bin/systemctl` 存在、PID 1 为 `/usr/lib/systemd/systemd`、`systemctl is-system-running` 返回 `running` → `systemd`；翼龙容器三项全不满足 → 无 `systemd`。

### 15.7 `fuse` —— 具备用 FUSE 挂载网络存储为本地磁盘的前提

目的：判断该环境是否具备把网络/对象存储挂载成本地文件系统的能力前提（`rclone mount`、`sshfs`、`davfs2`、`s3fs`、JuiceFS 等均依赖 FUSE）。

判据（同时满足，仅 Linux）：

1. `/dev/fuse` 存在且为**字符设备**，设备号 **major 10 / minor 229**；
2. 进程能以 `O_RDWR` 成功 `open` 并 `close`；
3. 具备挂载执行路径（二者其一）：
   - `/proc/self/status` 的 `CapEff` **第 21 位（CAP_SYS_ADMIN）为 1**；或
   - 存在可用的 setuid 挂载助手：`/usr/bin/fusermount3`、`/bin/fusermount3`、`/usr/bin/fusermount`、`/bin/fusermount` 任一存在，`stat` 校验 setuid 位为 1 且对当前进程可执行。

为什么必须有第 3 条：`/dev/fuse` 缺省为 `0666`，任何用户都能 `open`；真正建立挂载的 `mount(2)` 需要 `CAP_SYS_ADMIN`（或由 setuid 的 `fusermount` 代持）。只看设备可打开，会把「Docker 默认 capability 的 root 容器」误判为可挂载——这类容器 `CapBnd` 不含 `CAP_SYS_ADMIN`，即使映射了 `/dev/fuse` 也挂不上。

不采用的做法：

- `/proc/filesystems` 含 `fuse` 或 `/sys/module/fuse` 存在：只证明内核支持/模块加载，容器里常见"内核支持但设备未映射"；
- 现有 `mountinfo` 里已有 fuse 挂载：只说明别的进程挂过，不代表当前进程有权限新建；
- 依据 `root` 推断：root 容器可以没有 `CAP_SYS_ADMIN`（见上），非 root 也可以由 setuid 助手完成挂载，两者不可互相推导。

边界：

- 本标记只覆盖 **FUSE 类**挂载。CIFS/SMB（`mount.cifs`）与 NFS 走内核文件系统，不在本标记语义内；需要表达时新增独立标记，不得复用 `fuse`。
- 不保证具体存储服务网络可达，也不保证对应的协议客户端（rclone/sshfs 等）已安装；标记只承诺"能建立 FUSE 挂载"的前提。
- 不执行真实挂载：FUSE 挂载需要实现用户态协议守护进程，成本与副作用都不可接受。
- 非 Linux 平台不报。

实测：root+KVM+systemd 主机 `/dev/fuse` 为 `crw-rw-rw- root:root 10, 229`，`open(O_RDWR)` 成功，`CapEff=000001ffffffffff`（第 21 位为 1；该机未安装 `fusermount3`，root 直接挂载）→ `fuse`；翼龙容器无 `/dev/fuse`、`CapEff=0000000000000000`、`CapBnd=00000000000000e1`（无 `CAP_SYS_ADMIN`）→ 无 `fuse`。

### 15.8 跨语言实现映射

| 语义 | py | js | go | java / java11 | php |
|---|---|---|---|---|---|
| 有效 uid/gid | `os.geteuid()` / `os.getegid()` | `process.geteuid()` / `process.getegid()` | `os.Geteuid()` / `os.Getegid()` | 解析 `/proc/self/status` 的 `Uid:`/`Gid:` 第 2 字段 | `posix_geteuid()` / `posix_getegid()`，无 posix 扩展时解析 `/proc/self/status` |
| 字符设备 + 设备号 | `os.stat` + `stat.S_ISCHR` + `os.major/os.minor(st.st_rdev)` | `fs.statSync().isCharacterDevice()` + `stats.rdev`（按 Linux `dev_t` 解码） | `os.Stat` + `fi.Mode()&os.ModeCharDevice` + `Stat_t.Rdev`（`unix.Major/Minor`，`golang.org/x/sys/unix` 已在依赖） | `Files.getAttribute(p,"unix:mode")` + `"unix:rdev"`，按 `S_IFCHR`(0020000) 与 `dev_t` 解码 | `stat()['mode'] & 0170000 == 0020000`，`stat()['rdev']` 按 `dev_t` 解码 |
| 读写打开/关闭 | `os.open(p, os.O_RDWR)` / `os.close` | `fs.openSync(p,'r+')` / `fs.closeSync` | `os.OpenFile(p, os.O_RDWR, 0)` / `Close` | `Files.newByteChannel(p, READ, WRITE)` / `close` | `fopen(p,'r+')` / `fclose` |
| 读 `/proc` 文本（限长） | `open(p,'rb')` 分块读 | `fs.readFileSync` / `createReadStream` | `os.ReadFile` / `os.Open` 分块 | `Files.readAllBytes` | `file_get_contents` / `fopen`+`fread` |
| 目录 / 文件判断 | `os.path.isdir` / `os.stat` | `fs.statSync().isDirectory()` | `os.Stat` + `IsDir()` | `Files.isDirectory` | `is_dir` / `stat` |
| 符号链接 | `os.readlink` | `fs.readlinkSync` | `os.Readlink` | `Files.readSymbolicLink` | `readlink` |
| `/etc/passwd` 条目 | `pwd.getpwuid`（`KeyError` 即无条目） | 解析 `/etc/passwd` 文本（Node 无 getpwuid） | `os/user.LookupId`（错误即无条目） | 解析 `/etc/passwd` 文本 | `posix_getpwuid`，无扩展时解析文本 |
| `CapEff` | 解析 `/proc/self/status` | 解析 `/proc/self/status` | 解析 `/proc/self/status` | 解析 `/proc/self/status` | 解析 `/proc/self/status` |

> `dev_t` 解码：Linux 为 `major = ((rdev >> 8) & 0xfff) | ((rdev >> 32) & ~0xfff)`、`minor = (rdev & 0xff) | ((rdev >> 12) & 0xfff00)`；只在小设备号场景可退化为 `rdev == (major << 8) | minor`（`/dev/kvm` → 2792，`/dev/fuse` → 2789）。各语言运行时若只暴露原始 `rdev`，按上式解码后与 10:232 / 10:229 比较；确实拿不到可靠编码时，**至少校验字符设备类型**，不得把普通文件当作设备。

### 15.9 性能预算与实测

- 设计目标：五标记冷态全量探测 ≤ 5 ms；热态（缓存命中）≤ 0.5 ms；相对 baseinfo 现有外网 IP 探测（多个 HTTPS 请求，几十至几百 ms）可忽略。
- 成本分项：`root` 1 次系统调用（java/php 需 1 次 `/proc/self/status` 读，可与 `fuse` 共用）；`kvm` 1 `stat` + 1 `open/close`；`fuse` 1 `stat` + 1 `open/close` + ≤4 次助手 `stat`；`pterodactyl` 1 次 `mountinfo` 读（实测 3–4 KB）+ 1–2 次 `environ` 读；`systemd` 4–5 次 `stat`（`/run/systemd/system`、两个控制通道、≤3 个 `systemctl` 候选路径）。全部为本地、可短路、无子进程。
- 实测（2026-10-22）：
  - root+KVM+systemd+fuse 主机（go 0.5.8）：`/proc/self/mountinfo` 3169 B、`/proc/1/environ` 93 B；Python 参考实现（root/kvm/pterodactyl/systemd 四项）200 次均值 **0.085 ms/次**（文件系统缓存热态）。
  - 翼龙容器（java 0.5.9，uid 998）：`/proc/self/mountinfo` 3649 B、`/proc/1/environ` 567 B；容器内无 python3，未跑同款基准，读取量同量级。
- 反例成本（禁止路径）：`systemctl is-system-running` 在无 daemon 的环境可阻塞数十秒；每次 `fork/exec` 额外 0.5–3 ms，PHP 共享主机常直接禁用。

### 15.10 兼容性、暴露面与已知边界

- **additive**：不改变 baseinfo 既有字段、端点、认证链、签名与响应加密；旧控制端忽略新字段，新控制端必须容忍字段缺失。
- **暴露面**：`marks` 与 baseinfo 其余字段同策略下发。当前 baseinfo 位于匿名白名单，实测两台真机未认证 `GET /api/baseinfo` 均返回 200 与全量字段（无 `session_key`），因此 `marks` 同样对未认证方可读。它只含能力布尔值，不含凭证、密钥、路径或地址，敏感度低于已暴露的 `os`/`kernel_version`/`ipv4`。若后续执行 SECURITY-AUDIT 的 M2 / B-3（匿名端点瘦身），`marks` 与 `os`/`kernel_version` 同档处理，不做字段级特殊裁剪，也不新增端点。
- **已知漏报（预期，不算缺陷）**：非 Linux；`/proc` 被 hidepid 或强隔离屏蔽；翼龙容器无读 `/proc/1/environ` 权限且未命中 `mountinfo`、兜底四条件不全；wings 自定义 `system.data` 且 hostname 非 UUID。
- **已知误报边界（如实记录）**：`CapEff` 置位但 seccomp/LSM 另行拦截 `mount(2)` 时，`fuse` 仍会命中——本规范不做真实挂载（需实现 FUSE 守护进程，成本与副作用不可接受），接受该极窄误报；同理 `kvm` 在未启用严格模式时只保证"设备可打开"。
- **误报防线**：弱特征必须四项同时满足；`kvm`/`fuse` 以"能打开设备"而非"路径存在"为准；`systemd` 三重条件；`root` 取 effective 而非 real。
- **禁止用 `virtualization` 反推**：py 对 `/proc/cpuinfo` 中的 `KVM`/`QEMU` 字样返回 `QEMU`，go 的 `kvm` 表示"本机是虚拟机"，与"能运行 KVM"相反或无关。

### 15.11 扩展规则

1. 取值限定 `[a-z0-9-]+`，语义单一、可在本地验证，不表达程度或质量（不要 `kvm-fast`、`root-limited` 这类取值）。
2. **additive**：新标记追加到输出末尾，不重命名、不合并、不改变既有标记语义；客户端忽略未知值。
3. 每个新标记必须在本节补齐"判据 / 实现 / 排除条件 / 性能 / 真机证据"五项，缺一不得进文档。
4. 平台专属能力（Windows 服务、macOS launchd）与其它挂载体系（CIFS/NFS）单独命名，不复用现有值。
5. 标记表达"能力存在"的布尔事实；需要表达程度时用新增数值字段，不得塞进 `marks`。

### 15.12 验收建议

- 离线单测：把 `/proc`、`/dev`、`/etc` 根路径做成可注入常量（如 `PROC_ROOT`、`DEV_ROOT`），覆盖"命中 / 不命中 / 读取失败 / 权限拒绝 / 字段异常"五类用例；断言 `marks` 不含未知值、无重复、顺序固定。
- 真机矩阵（交叉核对命令见下）：

| 场景 | 期望 `marks` |
|---|---|
| 翼龙容器：998:998、无 `/dev/kvm`、无 `/dev/fuse`、无 systemd | `["pterodactyl"]` |
| root + `/dev/kvm` 可读写 + systemd 运行 + `/dev/fuse` 可读写且有 `CAP_SYS_ADMIN` | `["root","kvm","systemd","fuse"]` |
| Docker root 容器（默认 capability，无 `CAP_SYS_ADMIN`） | 不含 `fuse`（即使映射了 `/dev/fuse`）；无 `/dev/kvm` 时也不含 `kvm` |
| 非 root、不在 `kvm` 组 | 不含 `kvm` |
| 有 `systemctl` 但 `/run/systemd/system` 缺失 | 不含 `systemd` |
| Windows 代理 | `[]` 或字段缺失 |

- 交叉核对（只读命令）：`id -u; id -g; grep -E '^(CapEff|Uid|Gid)' /proc/self/status; stat -c '%F %t:%T %a' /dev/kvm /dev/fuse 2>&1; test -d /run/systemd/system && echo systemd-ok; tr '\0' '\n' < /proc/1/environ | grep -E '^P_SERVER_(UUID|LOCATION)='`。
- 性能门限：冷态 ≤ 5 ms、热态 ≤ 0.5 ms；以 `strace -f -e trace=process` 断言探测路径零 `fork`/`clone`。
- 一致性：五端（py/js/go/java/java11）对同一台真机必须给出相同集合（顺序按 15.1）；PHP 端不在本仓，以分发 dist 实测为准（两个 emulator 副本不探测、按 15.1 省略字段）。

## 十六、`/api/baseinfo` 字段分级缓存与快照语义

> **一句话**：`marks` 等 P 级字段在进程生命周期内只探测一次并永久复用；`disk_total`/`mem_total`/`swap_total` 每 30 秒重探（local 组）；`ipv4`/`ipv6` 每 3600 秒重探（net 组）；`session_key`/`noise_key` 每请求装配、绝不入快照。

### 16.1 现状与问题（2026-10-22 代码实测）

- 现行 baseinfo 的**系统信息整体快照 TTL 是 3600 秒**：py `Config.BASEINFO_CACHE_TTL`（`py/agent.py:824`）、js（`js/agent.js:387`）、go（`go/handlers/baseinfo.go:45`）、java（`java/src/main/java/kisama/kisama.java:155`）、java11（`java11/src/main/java/kisama/kisama.java:155`）。
- **30 秒是 `/api/status` 的 TTL**（py `:825`、js `:388`、go `:131`、java `:156`、java11 `:156`），不是 baseinfo 的。因此"30 秒内重复调用返回快照"在现行代码里成立（1 小时内都命中），但"30 秒后重探 baseinfo"并不成立——现行是 1 小时后**整份**重建。
- 真正造成无效 CPU 的三条路径：
  1. **临时密钥轮换清空整份快照**：py `rotate_operational_secrets`（`:765-775`）、js（`:365-373`）、java/java11（`:107-110`）都把 baseinfo 快照置空，下一次调用要重跑全部字段（含最多 11 次外部 HTTPS 的 IP 探测：v4 4–7 个 + v6 2–4 个候选，失败逐个回退）。而凭证在响应阶段按认证状态装配/覆盖（py `:5479-5486`、js `:5314-5322`、go `:89-118`、java `:599-612`），轮换并不需要动系统信息快照。注意：js 的 `getBasicInfo()`（`:1030-1031`）目前也会把凭证写进返回对象，缓存前必须剥离——响应阶段本就会覆盖，当前不会直接泄露，但违反"快照不含凭证"的不变量；java/java11 的 `buildRawBaseInfo()`（java `:2354`、java11 `:2407`）已是纯系统字段，凭证在路由层附加（java `:599-612`），无需额外剥离。
  2. **整份重建**：任一字段过期即重跑所有字段，`marks`、`virtualization`、`os`、`kernel_version` 等静态字段陪跑。
  3. **进程启动首调**：全部字段一次跑满；容器平台频繁重启时这笔开销反复出现。
- go 版已把"系统快照"与"凭证"分开：`go/handlers/baseinfo.go:61-87` 的缓存槽只存纯系统字段，`:89-118` 再按请求附加凭证；轮换时由 `go/kisama/service.go:90-96` 调用 `InvalidateSecretCaches`（`baseinfo.go:26-34`）清空快照——凭证分离结构可直接作为本次改造的参考模型，清空动作则应按 16.4 第 4 条去掉。

### 16.2 两级缓存模型

- **P 级（process-static，进程级静态）**：进程启动后首次 baseinfo 计算一次，写入不可变快照；之后无论间隔多久、是否发生密钥轮换，都直接复用，不再执行探测。只有进程重启（或未来显式的运维失效动作）可重置。
- **T 级（ttl，快照过期重探）**：按字段组维护"上次探测时间 + 上次结果"；`now - probed_at >= ttl` 时重探该组，否则复用。各组独立计时、互不牵连。T 级分两个组：**local** = `disk_total`/`mem_total`/`swap_total`（30s）；**net** = `ipv4`/`ipv6`（3600s）。每组只维护一个时间戳，组内字段一起重探，不按字段各存一份时间戳。
- **响应 = P 快照 + T 快照 + 每请求凭证材料**。T 组过期只重探该组；P 级不因 T 过期、密钥轮换或并发请求而重跑。

### 16.3 字段分级

| 字段 | 级别 | TTL | 探测成本 | 依据 |
|---|---|---|---|---|
| `arch` | P | 进程生命周期 | 极低（1 次系统调用/常量） | 进程内不变 |
| `cpu_cores` | P | 进程生命周期 | 低 | CPU 热插拔属极端场景，不为此每请求读取；需要时重启刷新 |
| `cpu_name` | P | 进程生命周期 | 低（解析 `/proc/cpuinfo`） | 进程内不变 |
| `gpu_name` | P | 进程生命周期 | **可能高**（若走 `nvidia-smi` 等子进程） | 只允许探测一次；失败不重试 |
| `os` | P | 进程生命周期 | 低（`/etc/os-release`） | 进程内不变 |
| `kernel_version` | P | 进程生命周期 | 低（`uname`） | 进程内不变 |
| `version` | P | 进程生命周期 | 常量 | 代理版本 |
| `virtualization` | P | 进程生命周期 | 中（`/.dockerenv`、cgroup、mountinfo、cpuinfo） | 容器/虚拟化身份在进程内不变 |
| `marks` | **P** | 进程生命周期 | 中（stat/open、mountinfo、environ） | 与第十五节一致：**进程全生命周期只探测一次** |
| `disk_total` | T | **30s** | 低（`statvfs`） | 卷扩容后 30 秒内可见 |
| `mem_total` | T | **30s** | 低（`/proc/meminfo` 或 cgroup 限额文件） | 容器限额调整后 30 秒内可见 |
| `swap_total` | T | **30s** | 低（`/proc/meminfo` 或 cgroup 文件） | 同上 |
| `ipv4` | T | **3600s** | **高**（多个外部 HTTPS + TLS） | 公网地址极少在 30 秒内变化；30 秒重探会把外部请求量放大 120 倍 |
| `ipv6` | T | **3600s** | **高**（同上） | 同上 |
| `session_key` | 每请求 | — | 低 | 凭证材料，**绝不进入快照** |
| `noise_key` | 每请求 | — | 低 | 同上 |
| `status` | 响应信封 | — | 常量 | go 版固定 `"ok"`，不参与分级 |

补充规则：

- `marks` 归 P 级是硬性要求：参考实现（root/kvm/pterodactyl/systemd 四类，不含 fuse）实测 0.085 ms/次，但包含 `stat`/`open`/`mountinfo`/`environ` 读取，不应随每次 baseinfo 调用执行。
- `ipv4`/`ipv6` 单独保持 3600s：单次探测最多 11 个外部 HTTPS（v4 4–7 个 + v6 2–4 个候选，TLS 握手 + 加解密），与"降 CPU"目标直接冲突；确需更快刷新时只调小该组 TTL（不建议低于 300s），**不得**把 IP 并入 30 秒的本地组。
- 新增字段必须先在本表定级并写明探测成本，未定级字段不得进入响应。
- T 级 TTL 为各端实现常量；若后续开放配置，必须五端同名、同默认值，并另行登记文档。

### 16.4 快照语义与失效规则

1. **首次调用**：P 级全部字段 + T 级全部组各探测一次，按 16.3 分级合并响应；字段顺序沿用各端既有 baseinfo 响应，不因分级而重排。
2. **全部命中**：P/T 均复用，不产生任何 `stat`/`open`/`read`/网络/子进程调用，只剩响应组装与加密。
3. **T 组过期**：只重探该组——`disk_total`/`mem_total`/`swap_total` 为本地廉价组（30s），`ipv4`/`ipv6` 为网络组（3600s）；P 级原样复用。T 组重探不得顺带调用 P 级探测（py `_get_disk_info` 目前会调用 `_get_virtualization()`，`:1959`；拆分后必须复用 P 级结果）。
4. **密钥轮换**：只替换响应中的 `session_key`/`noise_key`，**不得**清空 P/T 快照，也不得触发任何重探。前提是实现先把凭证从缓存对象中剥离（见 16.1 的 js 注记），凭证只在响应阶段装配。
5. **进程重启**：所有层重建，这是唯一允许全量重探的时机。
6. **时钟**：TTL 必须用单调时钟（py `time.monotonic`、go `time.Since`/`time.Now().Sub`、js `process.hrtime.bigint`、java/java11 `System.nanoTime`），不得用会被校时跳变的墙钟。
7. **并发**：P 级与每个 T 组各自 single-flight；未命中时只允许一个探测执行，其余请求等待并复用其结果，不得串行重探（js 现有 `_baseinfo_fetch_promise` 即此模式，`js/agent.js:5291-5304`）。
8. **失败策略**：P 级失败按字段类型写入兜底值（`marks` = `[]`、字符串 = 空串、数值 = 0）并在进程内不再重试，避免反复触发昂贵探测；T 级失败沿用上一次成功值，无历史值时按字段类型回退（`ipv4`/`ipv6` = `null`，数值 = 0），且失败后 60 秒内不再重试（失败退避），防止失败风暴。
9. **响应稳定性**：同一 TTL 窗口内，系统信息字段的键值与顺序保持一致，便于面板做 diff/缓存；凭证字段除外。

### 16.5 与 `/api/status` 的边界

- `/api/status` 保持 30 秒 TTL 不变，继续提供 CPU/内存/磁盘**使用量**、连接数、负载等秒级数据。
- baseinfo 的 T 级只提供**容量/身份**类慢变字段，不扩展为监控接口；需要 30 秒级使用率请调 `/api/status`。
- 两者不得共享缓存，也不得互相触发失效。

### 16.6 性能预算与验收

- 稳态（全部命中）：零子进程、零网络、零 `/proc` 扫描，单次开销应与响应加密同量级。本规范只消除探测开销；响应序列化与加密仍按请求执行，若实现后 CPU 仍高，应单独测量加密路径（ECIES/AES-GCM）与会话密钥模式，不得把加密成本误归因于探测。
- 30 秒组刷新：`statvfs` + `/proc/meminfo`（或 cgroup 文件），目标为毫秒级且不产生网络/子进程调用；py 的 host 磁盘路径会枚举分区（`_get_host_disk_info`，`:1929-1956`），成本高于单次 `statvfs`，拆分时必须复用 P 级 `virtualization`，不得每 30 秒重跑。
- 网络组刷新（3600s）：外部 HTTPS 探测仍是主要成本，频率保持现状。
- P 级一次性成本：`marks` 参考实现（四类，不含 fuse）实测 0.085 ms（2026-10-22，root 主机，200 次均值）；`virtualization` 含 3–4 KB mountinfo 读取；java `getGpuName`（`:2777`）会起 `nvidia-smi` 子进程，`gpu_name` 只允许在 P 级执行一次且失败不重试。
- 验收断言（建议做成离线单测 + 探测计数埋点）：
  1. 间隔 < 30s 连续 N 次调用：P 级整体只构建 1 次，local/net 组各刷新 1 次；
  2. 等待 31s 后再调用：P 仍为 1，local = 2，net 仍为 1；
  3. 触发一次临时密钥轮换后再调用：P/T 计数均不变，响应中的 `session_key`/`noise_key` 已更新；
  4. 等待 > 3600s 后再调用：net +1，P 不变；
  5. 稳态调用在 `strace -f -e trace=network,process` 下无网络与进程创建系统调用。

### 16.7 各端落点（本轮不改代码）

| 端 | 现行缓存位置 | 需调整点 |
|---|---|---|
| py | `py/agent.py:5463-5486`（读缓存 + 附加凭证）、`Config.BASEINFO_CACHE_TTL` `:824`、轮换 `:765-775` | 拆 P/T 层；T 组复用 P 级 `virtualization`（`_get_disk_info` 现于 `:1959` 重探）；轮换不再清空系统快照 |
| js | `js/agent.js:5285-5322`（含 single-flight）、`:387`、轮换 `:365-373` | 拆 P/T 层；从 `getBasicInfo` 返回值剥离凭证（`:1030-1031`）后再入缓存；轮换不再清空系统快照 |
| go | `go/handlers/baseinfo.go:37-118`（已分离凭证，仍是单一 3600s 快照）、`go/utils/system.go:58`（`GetSystemInfo`） | 把单一快照拆成 P/T 组；`InvalidateSecretCaches`（`baseinfo.go:26-34`，由 `go/kisama/service.go:95` 调用）改为不再清空系统快照 |
| java | `java/src/main/java/kisama/kisama.java:570-619`、`:155`、`:107-110` | 拆 P/T 层；`buildRawBaseInfo` 已是纯系统字段（凭证在路由 `:599-612` 附加），保持；轮换不再清空系统快照 |
| java11 | `java11/src/main/java/kisama/kisama.java:571`（缓存检查）、`:155-156`、`:109`；`buildRawBaseInfo` `:2407`（纯系统字段） | 与 java 对称（拆 P/T、保持 `buildRawBaseInfo` 纯净、轮换不清快照） |
| php | 不在本仓（`kisamaphp` 四副本已同步实现） | 按 16.9 适配：P/local 每请求现算、net 组状态文件 3600s；两个 emulator 副本不探测 `marks` |

### 16.8 兼容性

- 响应字段集合与类型不变，仅明确各字段的"新鲜度契约"，旧客户端零适配。
- 客户端不得假设 P 级字段在进程存活期间会变化；需要环境变化请重启代理后重取。
- `marks` 的"可选、缺失、未知值忽略"契约（15.1）不变；本章把它的"进程级一次探测"从建议升格为规范。
- 不新增环境变量；TTL 为各端常量。若未来开放配置，必须五端同名同默认并登记文档。

### 16.9 PHP 实现适配口径（无跨请求用户态内存）

PHP 端（`kisamaphp` 四个副本）每次请求一个生命周期，§16.2 的 P/T 模型按下述口径适配，不视为偏离规范：

- **P 级 = 单请求内一次**：`arch`/`cpu_cores`/`cpu_name`/`gpu_name`/`os`/`kernel_version`/`version`/`virtualization`/`marks` 在每次 `getBasicInfo()` 内各现算一次、不落盘；单次请求内不重复探测，跨请求不承诺"进程生命周期一次"（PHP 无跨请求进程态）。
- **T-local 每请求现算**：`disk_total`/`mem_total`/`swap_total` 直接现算，比 30 秒窗口更新鲜，成本可忽略（`disk_total_space` 与 `/proc/meminfo` 读取），不做文件缓存。
- **T-net 用状态文件缓存 3600s**：`ipv4`/`ipv6` 缓存于 `.kisama_baseinfo_cache.php`（目录规则与既有状态文件一致：站点目录优先、系统临时目录兜底），文件为 `<?php exit(); ?>` 卫语句头 + JSON `{"v":1,"net":{"ipv4":...,"ipv6":...},"net_at":<unix秒>}`，只含公网 IP，无密钥、路径；命中（`time() - net_at < 3600`）时完全跳过 `_getPublicIp()` 的外部 HTTPS 探测，缺族时仍按旧口径做 `SERVER_ADDR` 兜底。文件损坏、版本不符、字段类型异常一律按未命中处理。
- **并发与失败**：`fopen($file,'c+')` + `flock(LOCK_EX|LOCK_NB)`；抢到锁者探测，并以"临时文件 + `rename`"原子替换（Windows 下 flock 为强制锁，写缓存必须在解锁并关闭句柄后执行，否则会被截断为空；rename 失败退化为直接覆写）；未抢到锁者若有旧值直接复用（stale-while-revalidate，避免惊群），无旧值才自行探测；探测双族失败时保留旧值且不写盘（下次请求重试，不退避）；目录不可写 / `open_basedir` 拦截时静默退化为每请求探测，不影响响应。
- **时钟**：跨请求无单调时钟可用，TTL 判定用墙钟 `time()`；校时跳变仅影响缓存提前/延后过期，不影响字段正确性。
- **轮换**：PHP 无 tempkey 轮换逻辑，16.4 第 4 条在 PHP 侧 N/A；`session_key` 仍由 `StateManager` 持久化，行为不变。
- **marks 例外**：两个 emulator 副本（低权限）不实现探测，按 15.1 以字段缺失表达"未探测"，禁止输出 `[]` 或 `null`；两个完整副本非 Linux 时输出 `[]`（字段存在性稳定）。
- 除上述差异外，字段集合、顺序、类型与 15.1/16.3/16.8 一致；认证链、`PLAIN_MODE`/`DEBUG` 语义与 `/api/status` 逐请求现算均不变。

---

## 十七、控制端后台轮询与调度机制（Kisama Panel 对代理端点的周期调用口径）

> **一句话**：面板打开即拉起三条常驻周期——节点任务维护（默认 5 分钟）、节点基础信息同步（默认 10 分钟）、配置云同步（默认 10 分钟；三者的周期与开关均可调，见 17.6）；调度统一为「欠账驱动」——tick 到点只查账（距上次发起 ≥ 门槛才执行），hidden 期间任务维护/节点探测跳过、配置云同步仍按欠账执行（1 次 GET 成本极低、后台尽力而为），回到前台对超门槛欠账各补跑一次；另有变更驱动的云同步防抖通道与切后台前冲刷；全部轮内作业单飞锁 + 并发上限，任何使用模式下请求总量 ≤ 固定间隔轮询版本。代理侧零配合、零新接口，本节回答「节点为什么隔几分钟被连一次」的运维排障口径。

（截至 2026-10-23，面板 0.6.4 代码现状定稿。调度实现位于 kisama-panel 仓 `src/lib/task-daemon.ts` / `config-sync-scheduler.ts` / `node-backoff.ts`，本节只定契约语义，不登记面板行号。）

### 17.1 定位与适用面

- 面板（控制端）对代理端点的调用分两类：**用户动作**（手动刷新、任务保存/行内编辑、立即执行、节点转移、AI 助手操作等，发起即执行）与**后台守护调度**（本节）。用户动作不经守护进程、不受其门禁影响。
- 守护调度完全运行在面板浏览器页内：页面挂载即 `taskDaemon.start()`，卸载即 `stop()`，无任何常驻服务端组件。即使页面切到后台标签页，也可能在节流窗口内继续连代理——trycloudflare / shz.al 按量计费隧道、低配共享主机、流量审计场景需明确默认节奏与喊停手段（17.6 开关）。

### 17.2 三条常驻周期

| 作业 | 默认周期 | 启动首跑（错峰） | 目标端点 / 数据面 | 节点范围 | 失败处置 |
|---|---|---|---|---|---|
| 🛡️ 节点任务维护 | 5 分钟（可调，17.6） | 启动后 10 秒 | 四、任务管理：13 GET 启动任务 + 15 GET 定时任务；仅「远端双向清单**全空**而本地非空」时按 14/16 整表回灌 | 仅 `status=online` 且非 PHP 探针节点 | 不适用退避；请求失败丢弃会话缓存重新握手后立即重试一轮 |
| 🔄 节点基础信息同步 | 10 分钟（可调，17.6） | 启动后 20 秒（逐节点新鲜度门禁兜底 17.5） | 一.1 GET `/api/baseinfo`（会话建立 + 在线探测 + shz 域名解析汇聚点） | 全部活跃节点 | 逐节点指数退避（17.5）；每轮前先做中转站点池健康洗牌 |
| ☁️ 配置云同步 | 10 分钟（可调，17.6） | 启动后 5 秒（启动即拉，先对齐云端一次） | 不走代理端点：WebDAV `kisama.json` 分域合并（push/pull/merge 幂等路由；内容一致走 in-sync 快速通道零写入） | —（不针对节点） | busy/error 有界重试（17.3）；未登录引擎内部零开销跳过 |

- 节点遍历统一 worker 池并发上限 **4**，不占满浏览器并发连接域。
- 三循环的开关与周期由用户可调（17.6）；「暂停开关」只管辖任务维护循环，任务维护的会话握手开销随其循环一同停。

### 17.3 配置云同步的完整触发面（runConfigSync 幂等，重复调用无副作用）

| 触发 | 时机 | 说明 |
|---|---|---|
| 登录首同步 | WebDAV 登录成功即刻 | 带 toast 通知 |
| 周期兜底 | 每 10 分钟 | 面板时钟节拍 |
| 变更驱动 | 任意「用户配置意图」写入点 → `scheduleConfigSync()` | 4 秒尾沿防抖把连续变更簇（批量导入、AI 批量修改）合并为一轮；busy/error 只做一次 20 秒有界重试，其余交给周期兜底；探测心跳/探活缓存等运行时数据不触发 |
| 关键时刻冲刷 | 页面 hidden 前 | 挂起中的防抖触发立即发出，避免切走丢失上云时机 |
| 切回补跑 | 回前台且距上次发起 ≥ 2 分钟 | 门槛远小于节点探测（补拉仅 1 次 GET）——分叉窗口最小化优先 |
| 应用抑制 | 云同步把远端包应用到本地期间 | 应用走与用户变更相同的写入函数，期间 `scheduleConfigSync` 被抑制，防「同步触发同步」空转 |

### 17.4 欠账驱动与分级后台策略（前台/后台分界）

- **欠账驱动（统一判据）**：三作业各有「上次发起」时间戳，任何唤醒（周期 tick、切回事件、切回补跑）都先查账——`now - lastRunAt ≥ 门槛` 才执行，发起即记账；启动错峰首跑 force 直通（不查账，记账照常）。节流唤醒、冻结恢复的积压齐发 tick、切回补跑共用判据，任何唤醒形态至多放行一轮。
- **分级后台（hidden 期间）**：
  - 任务维护与节点探测：周期 tick 到点**一律跳过**且不记账（欠账持续累计）——一轮要对全部节点发起真实连接，后台代价大；
  - 配置云同步：**豁免跳过**——tick 醒来照常查账执行（门槛 = 完整周期 10 分钟），1 次 GET 成本极低，后台未冻结时能更新就更新，前台回来欠账更少；变更驱动防抖与 hidden 冲刷不受影响。
- **回到前台**：三条作业统一按各自门槛查账补跑——任务维护门槛 = **一个完整周期（5 分钟）**，节点同步 = **一个完整周期（10 分钟）**，配置同步 = **2 分钟**；快速 alt-tab / 窗口短暂遮挡零请求。
- 后台节流与整页冻结（浏览器 Memory Saver、移动端切走）会让周期与防抖停止触发；欠账判据基于 `Date.now()` 墙钟，不受冻结影响不丢账；冻结恢复后浏览器积压 timer 齐发，查账 + 单飞锁保证只放行一轮、其余 no-op。
- 设计不变式：分级后台 + 欠账补跑 + 单飞锁 ⇒ 任何使用模式的请求总量 ≤ 固定间隔轮询版本。

### 17.5 并发、会话与退避预算

- **单飞锁**：三条作业各自互斥；`setInterval` 不等待上一轮完成，锁防请求跨轮堆积占满浏览器连接池。
- **会话客户端缓存**：`getBaseInfo` 建立的会话在 TTL **9 分钟**（约覆盖两个维护周期）内跨轮复用，例行维护不重复握手；隧道地址轮换（shz `resolvedUrl` 变化）按域名快照失效重建；写入类请求失败视为会话失效，丢弃缓存重新握手后立即重试一轮。
- **节点同步退避**（仅探测作业，任务维护不用）：单节点轮内先带一次 800ms 延时重试，仍失败按指数退避 1/2/4/…分钟、封顶 **12 小时**；退避态为面板共享模块（`node-backoff.ts`），**任一入口同步成功立即清除**（手动刷新成功即纠偏下一轮自动调度），同步失败不动退避（死节点不因此回到高频轮询）。
- **逐节点新鲜度门禁**：daemon 探测只针对 `lastConnected`——随节点持久化的「最后成功探测时刻」（仅成功写入，含手动刷新成功，UI 🕒 同源）——距今 ≥ 配置的轮询周期（可调，默认 10 分钟）的节点；新鲜节点直接跳过（粒度细于轮级欠账判据、跨刷新生效、手动劳动跨刷新被尊重）。无记录（从未探测、首探失败）视为欠账必探。适用于 daemon 的三种唤醒（周期 tick / 切回补跑 / 启动错峰首跑 force）；面板手动「全部同步 / 单节点刷新 / 只刷新离线主机」不经 daemon，不受门禁。

### 17.6 「后台轮询」开关与可调周期（面板 0.6.3+ 开关 / 0.6.4+ 周期与开关全面可调，用户可控）

- **控制入口三处**（同为设备本地运行态）：
  - 全局任务中心页脚：任务维护「暂停/恢复」开关 + 任务维护「周期」选择器（1/2/3/5/10/15/30/60 分钟档）；
  - 设置-通用设置「🔄 节点在线探测轮询」：探测的开关与周期（默认开/10 分钟），随设置弹窗「全局统一大保存」生效；
  - WebDAV 登录弹窗（已登录横幅下方，仅登录后展示）：☁️ 云同步自动轮询开关 + 周期选择器（同款分钟档），芯片即改即生效无需保存。
- **语义**：
  - 任务维护暂停开关：仅停任务维护循环（visibility 切回补跑对暂停态同样静默跳过，不破例）；恢复 → 错峰 force 首跑 + 周期节拍；
  - 探测开关：关 → 周期循环停（手动「🔄 全部同步 / 单节点刷新 / 只刷新离线主机」不受影响）；开 → 错峰 force 首跑，逐节点新鲜度门禁自动跳过刚探测过的节点；
  - 云同步开关为**总闸**：关闭时周期循环、「变更即触发」的防抖 fire、页面隐藏前冲刷全部静默停止（后两者经 config-sync-scheduler 的自动同步闸）；WebDAV 登录首同步为显式动作不经闸门；重新开启 → 启动即拉补齐关闭期间积压的变更对齐。
- **持久化与生效**：`kisama_task_daemon_paused`（暂停跨刷新保持）与 `kisama_task_poll_prefs`（三循环开关+周期一并 JSON）均为设备本地运行态——列入导出/云备份包**排除清单**且还原端硬跳过（换设备回落默认值才是安全态，同 0.6.3 暂停键裁决）；周期钳制 1..360 分钟整数，非法字段逐项回落默认；改「周期」即时生效并保留欠账时间戳（不做 force 首跑，调间距不触发一轮）。

### 17.7 零轮询边界（面板刻意不发起请求的面）

- 全局任务中心打开 = **零网络请求**（localStorage 本地镜像）；🔄 手动刷新才发起一轮全节点核对（远端与镜像有差异才采纳回镜像）；任务保存后仅对被改节点做一次确认性重拉。
- `/api/status`（一.2）当前**未接入任何周期轮询**（面板定义了客户端但无调用点）。
- 冻结节点（回收站）不在活跃列表，恢复前守护调度永不对其发起连接。
- PHP 探针节点不参与任务维护（任务端点不支持）。

### 17.8 请求预算不变式与已知边界

- **不变式**：上述门禁叠加后，任何使用模式（常驻前台、切后台、暂停开关、浏览器冻结恢复）下的请求数均 ≤ 固定间隔轮询版本，且手动操作路径不受守护调度影响——0.5.3 轮询治理确立的目标至今保持。
- **已知边界**：配置云同步的后台执行属尽力而为——整页冻结（Memory Saver/移动端切走）期间完全停摆，欠账回到前台按 2 分钟门槛补齐；10 分钟周期仅是兜底节拍，实时性承诺由变更驱动通道（17.3）承担。任务维护/节点探测在 hidden 期间不执行、回前台按完整周期门槛补跑，冻结/睡眠恢复的一个周期内缺口由该补跑覆盖。
- **对代理端的唯一语义依赖**：任务回灌仅在远端**双向全空**且本地非空时触发（13/15 读 + 14/16 写、整表下发；语义见第十三节 KSTORE 启动恢复）。守护进程对**非空**远端任务清单零写请求——代理侧手工维护的任务不会被后台轮询抹掉；远端非空清单的差异性对账属面板手动刷新动作，不经守护调度。
