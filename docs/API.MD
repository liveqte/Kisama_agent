# Kisama Agent API 完整接口文档

## 默认端口
通过环境变量KPORT、PORT、SERVER_PORT指定，优先级从高到低，若都没有为8000。

## KMODE 启动模式
通过环境变量KMODE控制，用于在启动时自动创建临时隧道，并以文件/stdin（KMODE=1）或 shz.al 静默上报（KMODE=2）的方式交付隧道域名，详见「九、KMODE 启动模式」一节。

## 日志级别
通过环境变量LOG_LEVEL控制（py/js/go/java/java11 五语言统一，0=DEBUG / 1=INFO / 2=WARN / 3=ERROR），缺省 `3` 即生产只输出错误日志；未显式设置且 `DEBUG=true` 时接管为 `0`（调试全量输出），详见「十一、日志级别」一节。

## `.env` 自举文件（五语言统一；py/js/java/java11 既有，0.6.2 起 Go 补齐）

agent 启动时自动读取**可执行文件同目录**（py/js 为脚本同目录，java/java11 为 jar/class 同目录，与 keys/ 同路径约定）下的 `.env`，对全部环境变量生效（`DEBUG`/`HOST`/`KPORT`/`KMODE`/`KSTORE`/`KSTORE_KEY`/`LOG_LEVEL`/`KISAMA_ARGO_*` 等）：**真实环境变量优先，`.env` 只填补空缺**（setdefault 语义）。解析规则四份实现逐条一致：UTF-8 按行；跳过空行与 `#` 开头行；支持 `export ` 前缀；按首个 `=` 切分、键值两侧 trim；成对单/双引号剥离；**不处理行内注释**（保护含 `#` 的值，如域名 x-target-host 反代语法）；文件不存在或解析异常静默跳过，绝不影响启动。典型用途：容器/托管环境不便注入环境变量时，将 `.env` 与二进制同目录放置即可完成全部配置（含任务持久化密钥 `KSTORE_KEY`，威胁模型见「十三」）。

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

> **marks 主机标记（可选字段，additive）**：字符串数组，标识当前进程视角下**已确认成立**的事实，分两类：主机探测标记 `root`、`kvm`、`pterodactyl`、`systemd`、`fuse`、`netadmin`（Linux 语义），与配置类标记 `kstore`（任务持久化已启用）、`kmode1`/`kmode2`（KMODE 配置为 1/2，go 未实现 KMODE 故不输出）、`kmode3`（0.6.6 起 KMODE=3 kisama-hub 中继，Py/Js/Java/Java11）。可同时出现多个，顺序固定（主机探测标记在前、配置类标记追加在末尾）。**字段可能缺失**（旧版代理未实现），缺失与空数组语义不同：缺失 = 未探测或不适用，`[]` = 已探测且无命中；`null` 非法，客户端按缺失处理。客户端必须忽略未知取值。判据、实现方式、性能与误报边界见「十五、`/api/baseinfo` 可选字段 `marks`（主机标记）探测规范」。

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
用途：下载代理端文件（二进制流）  
输入示例：
```
{ "path": "/tmp/backup.tar.gz" }  
```
响应头：X-File-Size, X-Original-Path（+ 加密形态下的 X-Encrypted: true）  
响应体：原始二进制字节；小文件 opt-in 加密形态下为 Base64(AES-GCM 容器) 文本。

**下载加密契约（0.6.1，五端统一）**：M10 修复引入的按需加密形态——

- **规则**：`加密 ⟺ 请求带 x-dl-enc: 1 头 且 文件大小 ≤ DOWNLOAD_ENCRYPT_MAX（缺省 4194304 = 4MiB，环境变量可调，0 = 恒明文）`。命中时响应体为 0.5.6 AES-256-GCM(session_key) 容器（Base64(JSON{nonce,tag,ciphertext})，与 JSON 通道同构，见第十二节）并盖 `X-Encrypted: true`；其余情形（无 opt-in 头 / 超阈值 / DEBUG 模式）响应为原始字节流且不发送 X-Encrypted。
- **客户端判定**：**一律按 `X-Encrypted` 响应头分支**——有 `true` 则解密容器后落盘，否则原样落盘；绝不依据"自己是否发送过 opt-in 头"判定（旧代理会忽略该头回明文）。
- **兼容矩阵**：旧控制端（不发头）→ 五端均回原始字节，行为与 0.6.0 完全一致，零适配；新控制端 + 旧代理 → 无该头回明文；新控制端 + 新代理 → 小文件密文 / 大文件明文。大文件（多为二进制/软件）明文直传为有意取舍：省去 Base64 +33% 传输膨胀与整文件加密的内存峰值。
- **加密失败 fail-closed**：opt-in 命中但服务端加密出错 → 500（绝不静默降级明文），与第十节模式位规范一致。

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

> 🪪 **0.6.2 任务元数据行（任务身份契约，面板双向合并的语义依赖）**：每条任务的脚本体可携带一行保留注释 `kisama-task: id=<创建时刻ms> updated=<最后修改时刻ms>`，位置为首行（`#!` shebang 后一行），注释语法随 agent 平台（Unix `#` / Windows `rem`），对 shell 执行零副作用。**agent 在 14/16 设置时做「身份感知整表规范化」**：解析入参脚本的元数据行并与存量表按 `id` 匹配（onetime 跨位置、cron 跨表达式——同一条任务改了调度时间仍是同一条），无 id 时按「剥行后的有效脚本」全等匹配（任一侧无行才参与内容匹配）；匹配且有效内容未变 → 幂等保留原 `id/updated`（重复推送不推进修改时间）；匹配但内容/表达式变化 → 保留 `id`、刷新 `updated` 为本端接单时刻；未匹配 → 全新任务赋 `id=updated=now`；存量中未被入参匹配的条目删除（整表替换语义不变）。存量无行的 0.5.7 遗留任务按上述规则补盖行；入参行缺 `updated` 视为 0。响应 14/16 的 `tasks` 回显**规范化后**的表（调用方应以回显为准回写本地镜像）；GET 13/15 原样返回存储表（含行）。旧客户端/裸 curl 无行推送会被补盖行、回显多一行注释，行为透明。KSTORE 存储格式与 GET 结构均不变（行是脚本内容的一部分逐字往返）。

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

> 🔧 **整表替换即整表摘挂（0.6.2 起 Go 对齐，py/js/java/java11 本就如此）**：16 是整表替换语义——本次请求未包含的存量任务即被删除，agent 必须按新表同步重建调度器（新表为空时摘除全部调度项并停止调度循环），已删除任务不得残留任何内存调度项继续触发（kisama_app TC-34 回归：Go 0.6.1 及更早版本空表只清表不摘调度项，已删任务在内存调度器中按原表达式持续执行，任务表/面板/App 均无可见残留，仅 agent 重启可清除）。`17` 的 `cron.active` 与调度器实际状态同步。

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
用途：强制立即重新执行所有已配置的一次性启动任务（不受 InitTask 状态限制）。执行结果与生命周期首跑同样写入启动任务日志环（`GET /api/task/log/onetime` 可回看；0.6.2 起 Go 对齐 py/js/java——此前 Go 手动触发只响应返回、不落日志环）。
输入：无  
返回示例： 
```
{"status":"ok","executed":2,"results":[{"cmd":"echo 'init'","exitcode":0,"output":"init\n","timeout":false},{"cmd":"/opt/scripts/setup.sh","exitcode":127,"output":"sh: /opt/scripts/setup.sh: not found\n","timeout":false}]}
```

### 24. 超级终端（可选）
路径：/api/ws/任意路径
用途：使用websocket建立完整双向终端上下文环境。传输加密与认证方式由**控制端**按目标 scheme 绑定（代理端不感知自身 http/https，详见下方「传输与认证绑定规范」）：无 TLS（`ws://`）传输走 Noise XX 端到端加密握手；TLS（`wss://`）传输由 TLS 提供机密性，控制端缺省携带 `token` 走明文降级认证，也可显式强制 Noise。  
输入：

```
request_id：用来区分每个会话。  
token：可选，明文降级模式的认证令牌，值为 `Base64(HMAC-SHA256(base64decode(session_key), "kisama-ws-token-v1"))`（agent ≥ 0.4.8，服务端常数时间比较）；携带非空 `token` 即进入明文降级路径（传输必须为 TLS），未携带即进入 Noise XX 握手路径。
meta：可选，=1 时表示客户端可解析 JSON 控制帧，代理端会在 PTY 启动后、输出任何 shell 回显之前，主动推送一帧 welcome 元数据（0.5.5+，旧版代理端忽略此参数）。
incognito：可选，=1 时请求原生无痕会话（0.5.5+，旧版代理端忽略此参数）。
```

> **传输与认证绑定规范（控制端契约，规范口径）**：
> `/api/ws/*` 不经过 HTTP 认证中间件，且**代理端无法感知自身对外暴露的 scheme**（http/https 由反代、隧道与部署形态决定，不进入代理进程）——明文降级与 Noise 加密两条路径的选择完全由**控制端是否携带 `token` 参数**表达：未携带（或为空）⇒ Noise XX 握手（go `handlers/websocket.go:327` `useNoise = (token == "")`、py `agent.py:7042-7045`，五端同构）；携带非空 ⇒ 校验降级令牌后明文降级（常数时间比较，DEBUG 模式不豁免，见第十节）。传输安全责任因此落在控制端选路一侧，控制端（含第三方面板、脚本与 AI 控制端）必须按下表绑定传输与认证：
>
> | 实际传输 | 认证方式 | 规范要求 |
> | --- | --- | --- |
> | `wss://` / `https://` | 缺省：明文 wss + `token` 降级令牌 | 机密性由 TLS 承担；`token` **仅允许**在此传输下携带 |
> | `wss://` / `https://` | 可选：强制 Noise | TLS 之上叠加端到端加密（如面板节点级「强制 Noise」开关），允许 |
> | `ws://` / `http://` | **必须** Noise XX 端到端加密 | **禁止携带 `token`**——无 TLS 时令牌与全部击键、回显明文过网，降级令牌等同泄露 |
>
> **违规形态与后果**：在 `ws://` 明文传输上携带 `token`（"明文链路 + 明文认证"）时代理端不会拒绝——令牌校验本身可以通过，代理端无从区分"TLS 下的合法降级"与"明文链路上的违规降级"，后果是持有该令牌即可直连终端、会话内容全部明文暴露。该约束因此只能由控制端实现保证：按目标 scheme 推导 ws/wss 后，非 TLS 传输一律不生成、不携带 `token` 并走 Noise；无法建立 Noise 会话时应拒绝连接或显式告警，不得静默降级为明文 token。
> **参考实现**（Kisama Panel）：`getTerminalWsUrl` 按节点有效域名 scheme 推导 `ws://`/`wss://`；终端建联时 `useNoise = 节点「强制 Noise」开关 || 非 https 域名`——Noise 路径从 baseinfo 取 `noise_key.controller.private`（msg3 控制端身份）与 `noise_key.agent.public`（msg2 对端钉扎）完成 XX 握手，明文路径以 `session_key` 计算降级令牌。面板对 DEBUG（`x-encrypted: false`）与生产明文认证（`x-encrypted: plain`，PHP）节点缺 `session_key` 的例外处置：不生成令牌也不追加参数，由代理端按"未携带 token"规则处置。

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
- 有效期内**且 ttl 与当前密钥一致**时重复请求返回**同一份**密钥对（幂等，不重复生成，避免代理内部多头密钥管理负担）；
- 请求 ttl 与当前密钥**不一致**时，旧密钥**立即作废**（触发一次长期凭据轮换，语义同过期）并按新 ttl 重新生成——调用方可预期响应中的 key_id/expires_at 始终反映最近一次请求的 ttl；
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


## 七、Argo 临时隧道模块（可选接口 · py / js / java / java11 已实现，Go 版无此模块）

> **可选接口**：创建 Cloudflare 临时公网隧道（Quick Tunnel / trycloudflare），将本代理监听端口或内网任意 TCP 端口暴露为一个随机的 `https://<随机域名>.trycloudflare.com` 临时公网域名，无需自有域名与 DNS/证书配置，隧道随进程退出而失效。
> ✅ **实现状态**：py（py/agent.py，Python 标准库手写 HTTP/2 + Cap'n Proto 协议，与 cloudflared 相同的 Quick Tunnel 协议，无需安装任何外部二进制）与 js / java / java11（同构移植）已实现；GO 版不提供该路由。QUIC 边缘传输可用性按端不对称（见「九」的 QUIC 小节）。

### 27. 查询临时隧道列表
路径：GET /api/argo  
用途：返回当前已创建的全部临时隧道（隧道域名、转发端口、创建时间）  
输入：无  
行为约定：
- 返回所有已创建的临时隧道（含通过 `duplicate: true` 创建的重复隧道）；🛡️ **0.6.4 起失效条目不丢弃**：连续失败达阈值的隧道以 `status: "failed"` 保留在列表中并附 `last_error` 失败原因，由控制端（面板）灰显区分，Agent 守护循环仍按指数退避低频巡检、恢复后自动转回 `alive`；
- 🛡️ **0.5.2 起隧道具备守护自愈能力**：与 edge 断开后自动重连（短暂抖动域名不变）；若旧隧道凭据被 Cloudflare 回收（连续重连失败达阈值），代理端自动重新注册并**更换新域名**，本接口返回的 `tunnel_domain` 始终为**最新域名**（详见「九、KMODE 启动模式」的「隧道守护自愈」小节）；
- 无隧道时返回空列表（`count: 0`）。  
返回示例：
```
{
  "status": "ok",
  "count": 2,
  "tunnels": [
    { "tunnel_domain": "https://lucky-wildflower-1a2b3c4d.trycloudflare.com", "port": 8000, "created_at": "2026-08-18T10:00:00Z", "status": "alive", "last_error": null, "last_error_at": null, "consecutive_failures": 0, "last_registered_at": "2026-08-18T10:00:05Z", "shz_name": "myname-8000", "shz_url": "https://shz.al/~myname-8000" },
    { "tunnel_domain": "https://quiet-cloud-9f8e7d6c.trycloudflare.com", "port": 8080, "created_at": "2026-08-18T11:30:00Z", "status": "failed", "last_error": "tunnel re-register failed", "last_error_at": "2026-08-18T12:05:00Z", "consecutive_failures": 5, "last_registered_at": "2026-08-18T11:30:04Z", "shz_name": null, "shz_url": null }
  ]
}
```
字段说明：
| 字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| status | string | 固定为 `"ok"` |
| count | number | 返回条目总数（**含失效条目**，Agent 端不丢弃） |
| tunnels[].tunnel_domain | string | 临时隧道公网域名（含 `https://` 前缀，守护重注册后为最新域名） |
| tunnels[].port | number | 隧道转发的本地端口 |
| tunnels[].created_at | string | 创建时间（ISO8601 UTC，如 `2026-08-18T10:00:00Z`） |
| tunnels[].transport | string | 边缘传输 `h2` / `quic`（0.6.2 additive）。**按端不对称**：GET 响应仅 js 返回（py 被 FastAPI 响应模型过滤、java/java11 GET 不含该键）；缺失 = 未知，不猜 |
| tunnels[].status | string | 隧道状态三态（0.6.4 additive，四端统一）：`alive`=存活 / `reconnecting`=中断自动重连中 / `failed`=重注册亦失败（守护循环仍低频巡检，非终态） |
| tunnels[].last_error | string \| null | 最近一次失败原因（截断 ≤300 字符，仅连接类异常文本，不含密钥）；无失败为 `null`。java/java11 的 null 值省略字段（Gson 默认不序列化 null） |
| tunnels[].last_error_at | string \| null | 最近一次失败时间（ISO8601 UTC）；无失败为 `null`（java/java11 省略） |
| tunnels[].consecutive_failures | number | 当前连续失败轮数（本轮注册成功即清零） |
| tunnels[].last_registered_at | string \| null | 最近一次成功注册时间（ISO8601 UTC）；从未成功注册为 `null`（java/java11 省略） |
| tunnels[].shz_name | string \| null | 绑定上报名（0.6.8 additive，四端统一；详见本节「动态绑定 shz.al 上报」小节）：未绑定为 `null`，绑定后恒可见（首次上报异步进行，不影响该字段出现）。java/java11 省略 |
| tunnels[].shz_url | string \| null | 绑定上报地址（shz.al 发布页完整 URL，如 `https://shz.al/~myname-8000`）；未绑定为 `null`（java/java11 省略）。**管理密钥不随查询下发** |

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
| quic | boolean | 否 | 该隧道边缘传输是否走 QUIC（UDP/7844），缺省 `false`（h2 over TCP/7844）。js 端已实机验证全链路可用（HTTP + WebSocket over QUIC）；py 端协议栈已实现（握手/密钥/帧层单测全绿）但控制流数据面遗留回退兜底；java 端协议栈原语已移植、数据面后续批次接线。所有端 QUIC 连续建连失败均自动回退 h2（同一注册凭据无需重注册，重启进程恢复 QUIC） |
| shz | boolean | 否 | 创建后绑定 shz.al 上报（0.6.8 additive，四端统一；详见本节「动态绑定 shz.al 上报」小节），缺省 `false`。上报名缺省派生 `KNAME-端口`、管理密钥派生 `上报名+"123"`；与 `shz_name`/`shz_key` 任一非空时等效 |
| shz_name | string | 否 | 显式指定上报名（完整覆盖派生值，不再拼接端口；≥3 字符且限字母数字及 `+_-$=@,;/[]*`）。非空时隐含绑定 |
| shz_key | string | 否 | 显式指定管理密钥（完整覆盖派生值；≥8 字符，shz.al 平台密码约束）。非空时隐含绑定；**不随查询/绑定响应下发** |
行为约定：
- **重复策略**：默认阻止同一端口重复建隧道（409）；仅当请求体携带 `duplicate: true` 时才允许重复；
- 端口缺省时取 agent 自身监听端口（与「默认端口」一节一致）；
- `port` 非法（非整数 / 超出 1~65535）返回 422；
- 隧道注册失败（网络异常 / 无法连接 trycloudflare）返回 500；
- **绑定参数在注册前校验**（0.6.8）：上报名/管理密钥校验失败返回 400（KNAME 未设置或过短、名称非法字符、显式密钥 <8 字符）；该端口已有其他绑定隧道返回 409——两种错误均不创建隧道（无孤儿隧道）。

返回示例（创建成功，HTTP 200）：
```
{
  "status": "ok",
  "created": true,
  "tunnel_domain": "https://sunny-breeze-5a6b7c8d.trycloudflare.com",
  "port": 8080,
  "created_at": "2026-08-18T12:00:00Z",
  "tunnel_status": "alive",
  "last_error": null,
  "last_error_at": null,
  "consecutive_failures": 0
}
```
返回示例（创建并绑定，HTTP 200，shz 相关字段 additive）：
```
{
  "status": "ok",
  "created": true,
  "tunnel_domain": "https://sunny-breeze-5a6b7c8d.trycloudflare.com",
  "port": 8080,
  "created_at": "2026-08-18T12:00:00Z",
  "tunnel_status": "alive",
  "last_error": null,
  "last_error_at": null,
  "consecutive_failures": 0,
  "shz_name": "myname-8080",
  "shz_url": "https://shz.al/~myname-8080"
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
| transport | string | 边缘传输 `h2` / `quic`（0.6.2 additive）。**按端不对称**：仅 js / java 返回（py 被 FastAPI 响应模型过滤、java11 无此字段）；缺失 = 未知，不猜 |
| tunnel_status | string | 隧道状态（0.6.4 additive，四端统一）：新创建恒为 `alive`。字段名为 `tunnel_status` 以避免与信封 `status` 撞名 |
| last_error | string \| null | 最近一次失败原因（新建成功恒为 `null`；java/java11 省略） |
| last_error_at | string \| null | 最近一次失败时间（新建成功恒为 `null`；java/java11 省略） |
| consecutive_failures | number | 连续失败轮数（新建成功恒为 `0`） |
| shz_name | string \| null | 绑定上报名（0.6.8 additive）：仅绑定后返回；未绑定时无此字段（py response_model_exclude_none / js 恒含 null / java/java11 null 省略） |
| shz_url | string \| null | 绑定上报地址（shz.al 发布页完整 URL）：仅绑定后返回；**首次上报异步进行，响应携带的是预测地址** |
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
- 删除后该公网域名立即失效，并从 GET /api/argo 列表中移除；
- **0.6.8 起被删除隧道若带 shz.al 绑定**：自动清绑定（`tunnels[].shz_name`/`shz_url` 携带删除前的绑定信息供复核）、移除 KSTORE `data.argobinds` 持久化条目，并**后台删除远端 shz.al 记录**（`DELETE https://shz.al/~名:密钥`；删除失败静默，远端记录 7 天自然过期兜底）。KMODE=1/2 自建隧道无绑定，行为不变。

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
| tunnels | array | 已删除隧道的明细（结构同 GET /api/argo 的 tunnels，0.6.4 起同样携带 `status`/`last_error` 等状态字段；0.6.8 起绑定条目同样携带删除前的 `shz_name`/`shz_url`），失败时无此字段 |
| message | string | 失败原因（仅 `status=error` 时出现） |

### 30. 绑定隧道 shz.al 上报
路径：POST /api/argo/bind  
用途：给**已启动**的临时隧道绑定 shz.al 上报（0.6.8 新增，四端统一；`shz_name`/`shz_key` 可显式指定，缺省派生；语义详见本节「动态绑定 shz.al 上报」小节）  
输入示例（缺省派生）：
```
{ "port": 8080 }
```
输入示例（显式指定上报名与密钥）：
```
{ "port": 8080, "tunnel_domain": "https://sunny-breeze-5a6b7c8d.trycloudflare.com", "shz_name": "myapp", "shz_key": "mysecret-key" }
```
输入字段：
| 字段 | 类型 | 必填 | 说明 |
| :--- | :--- | :---: | :--- |
| port | number | 是 | 目标隧道转发端口（整数，1~65535） |
| tunnel_domain | string | 否 | 同一端口存在多条隧道时用于精确定位；缺省且该端口仅一条隧道时直接绑定该条 |
| shz_name | string | 否 | 显式指定上报名（完整覆盖派生值 `KNAME-端口`，不再拼接端口；≥3 字符且限字母数字及 `+_-$=@,;/[]*`） |
| shz_key | string | 否 | 显式指定管理密钥（完整覆盖派生值 `上报名+"123"`；≥8 字符）。**不随查询/绑定响应下发** |
行为约定：
- **参数校验先行**：上报名/管理密钥校验失败返回 400（KNAME 未设置或过短、名称非法字符、显式密钥 <8 字符）；
- 端口上无隧道 / `tunnel_domain` 无匹配返回 404；同端口多隧道未指定返回 409；
- 目标隧道为 **KMODE=1/2 自建**（source=kmode）返回 409（`tunnel on port N is managed by KMODE`，语义冲突防护）；
- 该端口已有**其他**隧道被绑定返回 409；重复绑定**同一**隧道视为幂等重报（重新触发首次上报）；
- 绑定成功即写入 KSTORE `data.argobinds`（KSTORE_KEY 启用时）并**异步首次上报**；响应携带预测发布页地址，查询不等上报；
- 守护重注册换新域名时按绑定名自动重报（409 → PUT 覆盖，同 KMODE=2）。

返回示例（绑定成功，HTTP 200）：
```
{
  "status": "ok",
  "bound": true,
  "port": 8080,
  "tunnel_domain": "https://sunny-breeze-5a6b7c8d.trycloudflare.com",
  "shz_name": "myname-8080",
  "shz_url": "https://shz.al/~myname-8080"
}
```
返回示例（KMODE 隧道拒绝，HTTP 409）：
```
{
  "status": "error",
  "bound": false,
  "port": 8000,
  "message": "tunnel on port 8000 is managed by KMODE, cannot bind via /api/argo/bind"
}
```
字段说明：
| 字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| status | string | 请求处理结果：`"ok"` / `"error"` |
| bound | boolean | 绑定结果：`true`=已绑定 / `false`=失败 |
| port | number | 本次请求的端口 |
| tunnel_domain | string | 目标隧道公网域名（成功时返回） |
| shz_name | string | 绑定上报名（成功时返回） |
| shz_url | string | 绑定上报地址（shz.al 发布页完整 URL，成功时返回） |
| message | string | 失败原因（仅 `status=error` 时出现） |

### 31. 解绑隧道 shz.al 上报
路径：DELETE /api/argo/bind  
用途：解绑指定隧道的 shz.al 上报（0.6.8 新增，四端统一）——**保留隧道本身**，清绑定字段与 KSTORE 持久化条目，并**后台删除远端 shz.al 记录**（`DELETE https://shz.al/~名:密钥`，删除失败静默，远端记录 7 天自然过期兜底）  
输入示例：
```
{ "port": 8080 }
```
输入字段：
| 字段 | 类型 | 必填 | 说明 |
| :--- | :--- | :---: | :--- |
| port | number | 是 | 目标隧道转发端口（整数，1~65535） |
| tunnel_domain | string | 否 | 同一端口存在多条隧道时用于精确定位 |
行为约定：
- 定位语义与 DELETE /api/argo 一致：端口无隧道 / 无匹配域名 404，同端口多隧道未指定 409；
- 目标隧道**无绑定**返回 404（`tunnel on port N has no shz.al binding`）；
- `port` 非法 / 缺失返回 422；
- 解绑后 GET /api/argo 该条目的 `shz_name`/`shz_url` 回归 `null`。

返回示例（解绑成功，HTTP 200）：
```
{
  "status": "ok",
  "bound": false,
  "port": 8080,
  "tunnel_domain": "https://sunny-breeze-5a6b7c8d.trycloudflare.com",
  "shz_name": null,
  "shz_url": null
}
```

### 32. 动态绑定 shz.al 上报语义（0.6.8 起）

「KMODE=2 启动期静默上报」（第九节）机制向 `/api/argo` 动态隧道的延伸，四端统一实现、复用同一上报协议与代码路径：

- **名称/密钥派生**：上报名缺省派生 `节点名-端口`（节点名取 KNAME 环境变量）；管理密钥缺省派生 **`上报名 + "123"`（字面后缀）**——最短合法名（3 字符名 + 单数字端口）也满足 shz.al 平台密钥 ≥8 字符约束。接口可显式指定 `shz_name`/`shz_key` 完整覆盖派生值（name 不再拼端口、key 不再拼 123）；只指定其一则另一项按上述规则基于**最终值**派生；
- **上报协议**：逐字复用 KMODE=2 —— `POST https://shz.al/`（multipart 字段 `c`=隧道域名 / `n`=上报名 / `s`=管理密钥 / `e`=`7d`，UA `curl/8.5.0`），409 冲突 → `PUT https://shz.al/~名:密钥`（去 `n` 字段）覆盖；全程静默（`DEBUG`/`SHZAL_DEBUG=true` 才输出过程）；守护重注册换新域名时自动重报（2s/4s/8s 重试 3 次）；
- **查询可见性**：绑定状态全程可查——GET /api/argo 条目与 POST /api/argo、POST /api/argo/bind 响应均携带 `shz_name`（上报名）与 `shz_url`（发布页完整 URL）；**管理密钥不随任何响应下发**（与 0.6.4 `last_error` 不含注册凭据同口径）；
- **绑定唯一性**：每端口至多一条绑定（派生名含端口，同名必然冲突）；绑定其他隧道 409，重复绑定同一隧道 = 幂等重报；
- **KMODE 隧道隔离**（语义冲突防护）：KMODE=1/2 启动自建隧道打 `source=kmode` 标记——**不可被动态绑定**（409）、**不进 `data.argobinds` 持久化**，其上报仍由 KMODE 配置管理，避免"两个位置管理同一个隧道"；删除 KMODE 隧道行为不变；
- **KSTORE 持久化与启动恢复**（`KSTORE_KEY` 启用时，见第十三节）：绑定集合落盘 `data.argobinds`（条目 `{port, name, key?}`，**key 仅显式指定时持久化**——派生密钥确定性可重算，缺省场景 KSTORE 无密钥材料）；启动时逐条**新建隧道**（source=restore）并按持久化名称绑定上报——上报地址（`https://shz.al/~名称-端口`）分毫不差（trycloudflare 随机域名变化由 409→PUT 覆盖吸收）；恢复失败（端口被 KMODE 隧道占用 409、网络异常等）仅告警、条目保留；
- **7 天过期**：与 KMODE=2 同口径——仅启动/换域名/重新绑定时上报，隧道长存活且无域名变化时远端记录按 shz.al 平台规则 7 天过期（周期性续报为遗留项）；
- **支持矩阵**：py / js / java / java11 ✅（绑定 + 解绑 + 持久化恢复全量）；Go ❌（无 argo 模块，既有口径）。


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
| KMODE | `0` | 启动模式开关：`0`=普通启动；`1`=自动创建临时隧道 + 写域名文件 + stdin 指令监听；`2`=自动创建临时隧道 + 上报域名至 shz.al（全程静默）；`2q`/`2quic`=2 且启动隧道走 QUIC 边缘传输（UDP/7844；js 端已实机验证，py 端回退兜底，java 端后续批次激活） |
| KPATH | `$HOME/domain.txt` | 仅 KMODE=1 有效：隧道域名文件的写入路径，支持相对 HOME 的子目录写法（如 `$HOME/.cache/domain.txt`） |
| KNAME | 无 | 仅 KMODE=2 有效：shz.al 自定义名（≥3 字符，限字母、数字及 `+_-[]*$=@,;/`），同时是可预测访问 URL 的组成部分；未设置时 KMODE=2 退化为普通启动（等同 KMODE=0），不报错 |
| KNAME_KEY | `$KNAME` | 仅 KMODE=2 有效：上报的管理/修改密钥（即 shz.al 的密码）；缺省复用 KNAME 本身。**注意：shz.al 平台要求密码 ≥8 字符，若最终生效的密钥（KNAME_KEY 或复用的 KNAME）短于 8 字符，上报会被平台以 `400 Password too short` 拒绝，粘贴不会创建（KMODE=2 可视为未生效）** |

> 🏷️ **0.6.4 起 KMODE 配置值经 baseinfo `marks` 暴露**：`KMODE=1` → `kmode1`、`KMODE=2`（含 `2q`/`2quic`）→ `kmode2`（按配置值判定，`KNAME` 缺失退化场景仍报，见「十五」15.9/15.10）；**0.6.6 起 `KMODE=3` → `kmode3`（kisama-hub 中继，Py/Js/Java/Java11，见「十五」15.16 与「十九」）**。go 端未实现 KMODE，不输出这些标记。

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

**0.6.8 交叉引用（动态隧道绑定上报）**：本节的上报机制自 0.6.8 起延伸到 `/api/argo` 动态隧道——经 `POST /api/argo`（`shz`/`shz_name`/`shz_key` 参数）或 `POST /api/argo/bind` 可给任意动态隧道绑定同一 shz.al 上报（名称/密钥派生规则、409→PUT 覆盖、查询可见性、KSTORE 持久化恢复等，详见「七」新增的「动态绑定 shz.al 上报」小节，接口定义见其 §30/§31/§32）。与 KMODE=2 的差异对照：
| 维度 | KMODE=2（本节） | 动态绑定（七 §30-32） |
| :--- | :--- | :--- |
| 触发 | 启动期自动（配置驱动） | 接口按隧道显式绑定 |
| 上报名 | `$KNAME` 原值 | 缺省 `KNAME-端口`，可显式指定 |
| 管理密钥 | `KNAME_KEY` 缺省复用 KNAME | 缺省 `上报名+"123"`，可显式指定 |
| 隧道端口 | 固定 agent 自身监听端口 | 任意 `/api/argo` 转发端口 |
| 持久化 | 不落盘（KNAME 为启动配置，重启自然重报同一 URL） | `KSTORE data.argobinds`（KSTORE_KEY 启用时），重启自动重建隧道并按持久化名称上报 |
| 互斥 | KMODE=1/2 自建隧道不可被动态绑定（source=kmode 标记，防两个位置管理同一隧道） | 同左 |

### KMODE=2q / 2quic：QUIC 边缘传输（0.6.1，三端移植）

KMODE=2q（或 2quic，大小写不敏感）在 KMODE=2 的基础上将启动隧道的**云边长连接**从 h2 over TCP/7844 切换为 QUIC v1 over UDP/7844。KMODE 数字的交付语义（shz.al 静默上报 / 域名文件 / stdin）完全不变；QUIC 只影响 agent ↔ Cloudflare edge 之间的传输协议。

**与 /api/argo quic 字段的关系**：KMODE 只影响启动隧道的传输；`POST /api/argo` 请求体的 `quic` 字段按隧道独立选择传输。两者互不依赖，可自由组合。

**协议要点**（实机取证 2026-10-31，js 端参考实现已通过 trycloudflare 全链路验证）：
- SNI 固定 `quic.cftunnel.com`（切勿用 region 主机名做 SNI，边缘走另一套入口）
- ALPN `argotunnel`；0-RTT 不支持；HRR 不支持；Retry 包/key update/RFC 9002 丢包恢复均支持
- 边缘把 TLS 1.3 flight 放在 Handshake epoch（标准行为），但 ServerHello 可能仍在 Initial epoch（需统一汇入 TLS 流处理）
- 传输参数整数值按 varint 变长编码（RFC 9000 §16）
- 客户端所有 Initial 包填充至 1200 字节（RFC 9000 §14.1），否则 ServerHello 被 PTO 无限重传
- 客户端所有 Handshake 包需 ACK 后边缘才下发后续 flight（ACK-only Initial 包也须填充 1200）
- 控制流（流 0）直接承载 capnp RPC（bootstrap/register），不写 rpcStreamProtocolSignature 前导
- websocket 类型响应经 ConnectResponse metadata 上报真实 101（边缘字面转发）
- 边缘证书软校验与 h2 路径同级：issuer O/OU/CN + SAN 覆盖 quic.cftunnel.com；KISAMA_EDGE_INSECURE=true 豁免

**可用性（按端）**：
| 端 | QUIC 数据面 | 说明 |
| :--- | :--- | :--- |
| js | ✅ 实机验证 | 注册/HTTP/WebSocket 经 QUIC 隧道全链路通过 |
| py | ⚠️ 回退兜底 | 握手/密钥/帧层单测全绿；控制流数据面 1-RTT 遗留，建连连续失败自动回退 h2 |
| java/java11 | ⚠️ 后续批次 | 协议栈原语已移植（QuicConnection/QuicTlsClient/capnp 修复），数据面未接线暂走 h2 |

**自动回退**：QUIC 建连/注册连续失败达 `KISAMA_ARGO_REREGISTER_AFTER`（默认 5）阈值后，该隧道自动切回 h2 并输出 WARN 日志（同一注册凭据无需重新注册，重启进程恢复 QUIC）。回退只影响触发回退的隧道实例，不影响其他隧道。

### 隧道守护自愈（0.5.2，四版本统一）

trycloudflare Quick Tunnel 是临时资源：与 Cloudflare edge 的连接全部断开一段时间后，Cloudflare 侧的隧道记录与域名路由会被回收。0.5.2 之前守护线程只用**首次注册的旧凭据**每 2 秒重连，回收后注册永远失败，表现为日志反复出现 `connection closed: read ECONNRESET` 且隧道永久失联。0.5.2 起引入三层自愈（py / js / java / java11 同步）：

1. **断线自动重连（原有）**：与 edge 断开后自动重连；只要旧凭据仍有效（注册成功），**域名保持不变**——短暂网络抖动不会导致换域名、不影响 KMODE 已上报的值。0.6.4 起连续失败时的重连等待改为**指数退避封顶**（见下方环境变量），无失败时保持固定 2 秒快速重连。
2. **凭据失效自动重新注册（新增）**：连续重连失败达到阈值（默认 5 次）后，自动向 `api.trycloudflare.com` 重新注册并**更换新随机域名**（trycloudflare 平台限制，无法保留旧域名），日志输出 `domain changed: <旧域名> -> <新域名>`；重新注册自身失败按**同一指数退避公式**等待后重试（封顶后等价于长期低频巡检，0.5.2~0.6.3 为固定 30 秒），避免持续失败时高频请求注册 API 触发 429/1015 限流。注册索引（connIndex）随重连轮换（0~3），降低 edge 侧旧连接残留导致的注册拒绝。
3. **域名变更自动通知（新增）**：重新注册成功后触发 `onDomainChange(旧域名, 新域名)` 回调：
   - **KMODE=2**：自动把新域名重新上报 shz.al（409 冲突走 PUT 覆盖，指数退避重试 3 次），控制端照常轮询同一预测 URL 即可拿到新域名，无需任何干预；
   - **KMODE=1**：自动重写 KPATH 域名文件（原文件即使已被 baseinfo 钩子删除也会重写），stdin `/domain` 指令输出最新域名；
   - **无 KMODE（面板 /api/argo 创建的隧道）**：无额外动作，面板刷新 `GET /api/argo` 即得新域名。
4. **半开假死防护（新增）**：edge 连接开启读空闲超时（默认 300 秒无任何入站数据即主动断开重连；edge 本有周期 PING，正常连接不会触发），根治 NAT/防火墙静默断流导致的"连接看似活着但永远收不到数据"的假死。
5. **守护线程永不静默死亡（py 版修复）**：重连循环改为全量捕获异常（此前仅捕获 `OSError/EOFError/ValueError`，其他异常会让守护线程无声退出、隧道永久失联）。
6. **状态透明（0.6.4 新增，四版本统一）**：每条隧道维护 `status`（`alive` 存活 / `reconnecting` 中断重连中 / `failed` 连续失败达阈值且重注册亦失败）与 `last_error`（最近失败原因，截断 ≤300 字符）、`last_error_at`、`consecutive_failures`、`last_registered_at` 五个状态字段，随 GET /api/argo 暴露给控制端——失效条目**保留在列表中不丢弃**，由面板灰显区分。标记 `failed` 后守护循环仍按封顶退避低频巡检，成功即自动转回 `alive`，**不存在"到达上限永久停掉"的终态**——DELETE /api/argo 与进程退出仍是唯一移除路径。

指数退避公式（0.6.4 起，四版本统一）：`delay = min(BASE × 2^(连续失败-1), MAX)`，指数钳制在 10 防溢出。`BASE=2`、`MAX=300`（缺省）时序列为 2s → 4s → 8s → 16s → 32s（达阈值 5 触发重注册）→ 64s → 128s → 256s → 300s 封顶低频巡检；任何一轮注册成功即清零回 2 秒。

守护行为环境变量（四版本统一，支持同目录 `.env`）：

| 环境变量 | 默认值 | 说明 |
| :--- | :--- | :--- |
| KISAMA_ARGO_REREGISTER_AFTER | `5` | 连续重连失败多少次后判定旧凭据已被回收并重新注册换新域名（最小 2；调小恢复更快但更易在短暂抖动时换域名） |
| KISAMA_ARGO_RETRY_BASE_SECONDS | `2` | 指数退避基数秒（最小 1；0.6.4 新增）：连续失败时重连/重注册的等待 = BASE × 2^(连续失败-1) |
| KISAMA_ARGO_RETRY_MAX_SECONDS | `300` | 指数退避封顶秒（最小 60；0.6.4 新增）：失败持续越久巡检频率越低，封顶后按 MAX 间隔低频巡检 |
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
| **临时隧道-查** | GET | `/api/argo` | 查询临时隧道列表（Py/Js；0.6.8 起条目含 shz 绑定字段） | ✅ | ✅ |
| **临时隧道-建** | POST | `/api/argo` | 创建临时隧道（Py/Js；0.6.8 起支持 `shz`/`shz_name`/`shz_key` 创建并绑定） | ✅ | ✅ |
| **临时隧道-删** | DELETE | `/api/argo` | 删除临时隧道（Py/Js；0.6.8 起删除绑定隧道自动清持久化并删远端记录） | ✅ | ✅ |
| **隧道绑定上报** | POST | `/api/argo/bind` | 给已启动隧道绑定 shz.al 上报（Py/Js/Java/Java11，0.6.8 起，见七 §30） | ✅ | ✅ |
| **隧道解绑上报** | DELETE | `/api/argo/bind` | 解绑隧道的 shz.al 上报（保留隧道，Py/Js/Java/Java11，0.6.8 起，见七 §31） | ✅ | ✅ |
| **hub 中继状态** | GET | `/api/hub` | KMODE=3 kisama-hub 隧道状态（Py/Js/Java/Java11，0.6.6 起，见十九） | ✅ | ✅ |
| **hub 动态注册** | POST | `/api/hub` | 动态注册到 kisama-hub（Py/Js/Java/Java11，0.6.6 续批起，见 19.9） | ✅ | ✅ |
| **hub 注销** | DELETE | `/api/hub` | 注销一条 hub 注册（Py/Js/Java/Java11，0.6.6 续批起，见 19.9） | ✅ | ✅ |
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

> 🏷️ **0.6.5 起 java/java11 支持宿主烘焙构造实参**：9 参全量烘焙构造在 KMODE 家族基础上追加 `bakedKstore`/`bakedKstoreKey`，宿主（如 Bukkit 插件）可把本节两项配置直接烘焙进产物、不依赖 `.env`/环境变量；优先级仍为 真实环境变量 > `.env` > 烘焙值 > 内置缺省（`resolveSetting`）。`KSTORE_KEY` 烘焙属密钥进产物，与 KMODE 烘焙的 `KNAME_KEY` 同一模式，产物 jar 需按密钥材料对待。

> 🏷️ **0.6.4 起持久化启用状态经 baseinfo `marks` 暴露**：启用（本节启停口径）时 `marks` 含 `kstore`，见「十五」15.8；标记不含存储路径与密钥。PHP 副本无持久化实现，不输出该标记。

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
- **0.6.6 续批起 `data.hubregs`**：hub 注册任务子类型（kisama-hub 动态注册项，见「十九」19.9），元素 `{hub, kname, ports}`（ports 非法/越界值加载时过滤）；由 `POST/DELETE /api/hub` 自动落盘与删除，启动恢复流程自动重建注册。**additive 键**：`version` 保持 1，老版本 agent 回写容器会丢弃该键（混部期边界：老 agent 任务落盘会静默移除本端 hub 注册持久化，注册表内存态不受影响）——(补充于 19.9)。
- **0.6.8 起 `data.argobinds`**：argo shz.al 绑定子类型（`/api/argo` 动态隧道的 shz.al 上报绑定，见「七」§32），元素 `{port, name, key?}`——`key`（管理密钥）**仅接口显式指定时持久化**，缺省派生密钥（`name+"123"`）确定性可重算、不落盘（缺省场景 KSTORE 无密钥材料）；port/name 非法条目加载时过滤。由 `POST/DELETE /api/argo/bind` 与带绑定参数的 `POST /api/argo` 自动落盘，隧道删除/解绑自动移除，启动恢复流程自动重建隧道并按持久化名称上报。**additive 键**：`version` 保持 1，老版本 agent 回写容器会丢弃该键（同 hubregs 混部边界）。
- **任务命令为 shell 字符串，多行脚本原样支持**（JSON 自动转义换行）；
- 写盘时机：POST `/api/task/onetime`、POST `/api/task/cron`（含清空）成功后同步落盘；原子写（同目录 tmp 文件 + fsync + rename/replace）；
- 所有存储 I/O 故障只记日志降级，**绝不影响内存任务、请求成功与 agent 启动**。

### 启动恢复流程（五语言一致）

1. TaskManager 初始化时解析 `KSTORE`/`KSTORE_KEY`；
2. 加载存储：文件缺失 → 空表（首次运行）；解密失败 / JSON 损坏 / magic 不符 / 版本不支持 → 原文件**隔离改名** `store.enc.bad-<时间戳>` + ERROR 日志 + 以空任务启动；版本**高于**当前支持 → 保留原文件不覆盖，本次以空任务启动且持久化只读（防止旧版本 agent 覆盖新版本数据）；
3. 恢复 `onetasks` / `crontasks` 到内存；
4. `crontasks` 非空 → 启动既有 cron 调度循环；
5. 恢复出的启动任务**后台执行一次**（不阻塞 HTTP 就绪），结果写入既有 onetime 日志环形缓冲（重启后仍可经 `/api/task/log/onetime` 查证）；
6. **0.6.8 起（argo 绑定子类型，四端统一）**：恢复 `data.argobinds` 绑定条目 → 逐条**新建隧道**（source=restore）并按持久化名称绑定 shz.al 上报（key 缺省时按最终 name 重算派生密钥）→ 上报地址分毫不差；恢复失败（端口被 KMODE 隧道占用 409、创建失败等）仅告警、条目保留；hubregs 恢复同理但为注册语义（见下）。

### hub 注册任务子类型（0.6.6 续批起，Py/Js）

- KSTORE `data.hubregs` 持久化的是 **kisama-hub 动态注册项**（`POST /api/hub` 写入、`DELETE /api/hub` 移除，见「十九」19.9），元素为结构化对象 `{hub, kname, ports}`——**不是 shell 命令**，不进入 onetime/cron 执行流，与两者是并列的任务子类型。
- **启动恢复**：agent 启动时在恢复流程中自动重建注册（逐项 `register`，不等待连接结果，失败项按指数退避自治重连；与 KMODE=3 静态项 KNAME 冲突时跳过恢复项并告警）。
- **持久化随 KSTORE**：`KSTORE` 未启用时动态注册仅本进程内存活（重启即失，`POST` 响应 `persisted:false` 告知）；启用后重启自动恢复。
- **混部边界**：老版本 agent（无 hubregs 解析）回写容器会丢弃该键（见「存储文件格式」）。

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
- 服务部署脚本例外（0.6.2 起，Owner 拍板的部署便利取舍）：`kisama_service.sh` / `kisama_service.ps1` 在部署前未注入 `KSTORE_KEY` 时自动生成随机密钥写入安装目录 `agent.env`（并收紧为属主可读 / ACL 仅当前用户+SYSTEM+管理员），密钥与 `store.enc` 同机同目录落盘——此形态下"仅拿到 `store.enc` 单文件无法解密"仍成立，但"整个安装目录外泄即可解密"，机密性边界较上条收缩。要维持密钥不落盘的原威胁模型，在执行部署脚本前注入自备的 `KSTORE_KEY`（sh 版 0.6.4 起：未注入时沿用 agent.env 已有密钥，显式注入与已存不同的密钥会**覆盖轮换**并告警——换钥后旧存储文件被隔离、任务需重设；未注入的自动路径仍绝不轮换）；脚本不回显密钥、不进日志。

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
- 幂等性不受影响（同 ttl 前提下）：同一 `key_id` 的密钥对，两种 format 随时可取、内容同源（同一密钥对不同编码）；ttl 变更会重建密钥对，见「五、临时密钥模块」行为约定。

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

- 类型 `string[]`，元素为小写 ASCII 短名，当前定义九个值，分两类：
  - **主机探测标记**（Linux 语义，探测判定，见 15.3–15.7、15.17）：`root`、`kvm`、`pterodactyl`、`systemd`、`fuse`、`netadmin`（0.6.8 起，见 15.17）；
  - **配置类标记**（agent 自身启动配置事实，见 15.8–15.16）：`kstore`、`kmode1`、`kmode2`、`kmode3`（0.6.6 起，Py/Js/Java/Java11，见 15.16）。
- 顺序固定为 `root` → `kvm` → `pterodactyl` → `systemd` → `fuse` → `netadmin` → `kstore` → `kmode1` → `kmode2` → `kmode3`（主机探测标记在前、配置类标记在其后追加；新增主机探测标记追加在主机组末尾，新增配置类标记追加在配置组末尾——0.6.8 起 `netadmin` 即按此规则插入主机组末尾），同一标记只出现一次；客户端必须按集合处理，不得依赖顺序。
- 语义：每一项都表示"在 **agent 进程视角**下已确认成立"的客观事实，不表示程度，也不代表宿主机或其它命名空间的状态（见 15.3）。
- 缺失 / 空数组 / null 三态语义：
  - **字段缺失**：代理未实现该字段（旧版）、部署方禁用，或低权限模拟器副本不实现探测（PHP 两个 emulator 副本按此例外省略字段，不得用 `[]` 冒充"已探测且无命中"）→ 控制端按"未知"处理，不得假设无能力；
  - **`[]`**：已完成探测/组装，未命中任何标记；
  - **`null`**：非法值，实现不得输出；客户端遇到时按"字段缺失"处理。
- 前向兼容：客户端遇到未知取值必须忽略（不得报错，也不得因此丢弃整个响应）。
- 客户端读取（零依赖）：baseinfo 响应本身就是 JSON，`marks` 是标准 JSON 字符串数组，浏览器/Node 内置 `JSON.parse` 后即为原生 Array，不需要任何三方库：`const marks = Array.isArray(info.marks) ? info.marks : []; marks.includes('kvm')`（IE11 等旧环境用 `marks.indexOf('kvm') !== -1`）。**禁止**对原始响应文本做正则或字符串切分来提取该字段。
- 平台：六个主机探测标记均为 Linux 语义，Windows / macOS / \*BSD 上不输出、不得伪造；四个配置类标记与平台无关，**全平台输出**。因此非 Linux 平台的 `marks` 不再必然为 `[]`（例如启用了持久化的 Windows 节点返回 `["kstore"]`）。
- 可用性：additive 可选字段。主机探测标记五端（`0.6.0-*`）与 PHP 两个完整副本（`0.6.0-php`、`0.6.0-php-cpanel-ai`）已实现；`netadmin`（15.17）自 0.6.8 起五端与 PHP 两个完整副本同步实现；配置类标记自 `0.6.4` 起由 py / js / java / java11 实现（`kmode3` 自 0.6.6 续批起四端同步；go 未实现 KMODE，只可能命中 `kstore`），PHP 四个副本无 KSTORE/KMODE 实现、不输出配置类标记；两个 emulator 副本按上述例外省略字段。控制端以"字段是否存在"判定，不要求版本号门槛。
- 生命周期：进程级静态属性（P 级）——进程启动后首次 baseinfo 计算一次并写入快照，生命周期内不再重探；**不随 T 级 TTL 过期、也不随临时密钥轮换而重跑**（见「十六」）。配置类标记由启动期环境变量决定、进程内恒定，进 P 级快照无时效问题。

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
- 衍生面板若沿用 `P_SERVER_*` 约定，会被本标记覆盖；需要区分时新增标记（见 15.14），不得改本标记语义。

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

### 15.8 `kstore` —— 任务持久化已启用（配置类，全平台）

判据（同时满足，与「十三」启停口径逐字一致）：

1. 环境变量 `KSTORE` 不属于显式关闭取值 `off` / `0` / `none` / `false`（大小写不敏感）；
2. 环境变量 `KSTORE_KEY` 已设置且能解出恰 **32 字节**密钥（hex 64 字符或 std base64）。

实现：**复用持久化初始化的同一套判定，不是独立重实现**。py 在 `TaskStore` 上提供与 `_resolve_config` 同口径的静态判定（共用 off 取值常量与 `_parse_key`，零日志零副作用），marks 探测调用之；js 直读 `TaskStore.state.enabled`（`init()` 解析结果）；go 在 handlers 层 P 级快照装配时经 `appendConfigMarks` 追加（读包级 `taskManager.store.enabled`，函数变量形式供离线测试注入）；java/java11 直读 `initTaskStore()` 置位的 `taskStoreEnabled` 字段。各端持久化初始化均先于路由可用（py/js 在 main 生命周期、go 在 newRouter、java/java11 在 start()），首个 baseinfo 请求前状态已定。

排除条件：

- `KSTORE=off` / `0` / `none` / `false`（任一大小写）→ 不报，即使 `KSTORE_KEY` 合法；
- `KSTORE_KEY` 未设置或非法（解码后非 32 字节）→ 不报（fail-closed，持久化实际处于关闭态）；
- 标记只表达"持久化已启用"这一布尔事实，**不含存储路径与密钥**。

性能：O(1)——进程内已解析状态直读，或两次 `getenv` + 一次纯内存密钥解析；无 I/O、无网络、无子进程。

实测（2026-11-07，Windows 10 实机 py agent）：`KSTORE=<路径> KSTORE_KEY=<64 位 hex>` 启动，未认证 `GET /api/baseinfo` → `marks == ["kstore"]`（非 Linux 无主机探测标记，仅配置类标记）；清空两变量对照 → `marks == []`。启停矩阵（off 取值大小写、合法 hex/base64、密钥缺失/非法/31 字节 hex）由离线单测覆盖（`tests/py/test_marks.py`、`tests/js/test_marks.js`、`go/handlers/baseinfo_cache_test.go`）。

### 15.9 `kmode1` —— KMODE 配置为 1（配置类，全平台）

判据：`KMODE` 环境变量经各端既有归一化解析后等于 1（py/js `Config.KMODE == '1'`，java/java11 `parseKmode()` 返回 1）。`KMODE=1` 无生效前置条件（不依赖 `KNAME`/`KNAME_KEY`，见「九」），配置即生效。

实现：marks 探测直读各端已归一化的 KMODE 配置值（py/js 类属性、java/java11 final 实例字段），不重读环境变量、不触发任何隧道相关逻辑。

排除条件：

- `KMODE=0`、未设置或非法值（py/js 保留原字符串、等值比较落空；java 归一为 0）→ 不报；
- **go 端未实现 KMODE**（见「九」），go 永不输出 `kmode1`；
- `2q` / `2quic` 归一化为 2 → 报 `kmode2`，不报 `kmode1`。

性能：O(1) 常量比较。

实测（2026-11-07，Windows 10 实机 py agent）：`KSTORE_KEY=<64 位 hex> KMODE=1` 启动，未认证 `GET /api/baseinfo` → `marks == ["kstore", "kmode1"]`（取样后随即终止进程，运行约 6 秒，至多一次隧道注册尝试、无失败重试循环）。取值矩阵（0/1/2/3/非法值）由离线单测覆盖。

### 15.10 `kmode2` —— KMODE 配置为 2，含 2q/2quic（配置类，全平台）

判据：`KMODE` 环境变量经各端既有归一化解析后等于 2（`2` / `2q` / `2quic`，大小写不敏感；py/js 归一化为 `'2'`，java/java11 `parseKmode()` 返回 2）。

**按配置值判定，不校验生效条件**：`KMODE=2` 但 `KNAME` 未设置或不合法时，「九」规定退化为普通启动（不建隧道、不上报），此时本标记**仍报**。语义定义是"**配置了** KMODE=2 启动模式"这一配置事实——判据（配置值）本身确定成立，与 15.2 第 4 条"只报确定命中"不冲突。控制端不得把 `kmode2` 当作"可预测 URL 已就绪"的承诺；需要判断隧道可用性时应结合 `KNAME` 有效性自行判定。

实现：同 15.9，直读归一化后的 KMODE 配置值。

排除条件：

- `KMODE=0` / `1`、未设置或非法值 → 不报；
- **go 端未实现 KMODE**，go 永不输出 `kmode2`。

性能：O(1) 常量比较。

实测（2026-11-07，Windows 10 实机 py agent）：`KSTORE_KEY=<64 位 hex> KMODE=2`（未设 `KNAME`，隧道与上报按「九」退化，零外部请求）→ `marks == ["kstore", "kmode2"]`。`2q`/`2quic` → 2 的归一化是各端 Config 既有行为，由既有实现保证，标记层不重复归一。

### 15.11 跨语言实现映射

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

> 配置类标记（15.8–15.10）不涉及上表的任何 `/proc`/设备探测原语：py/java/java11 直读进程内已归一化的配置值与持久化状态，js 读静态 `TaskStore` 状态，go 在 handlers 层 P 级快照装配（`appendConfigMarks`）；PHP 四个副本无 KSTORE/KMODE 实现，不输出配置类标记。

### 15.12 性能预算与实测

- 设计目标：六标记冷态全量探测 ≤ 5 ms；热态（缓存命中）≤ 0.5 ms；相对 baseinfo 现有外网 IP 探测（多个 HTTPS 请求，几十至几百 ms）可忽略。配置类标记为 O(1) 常量读，不进入该预算。
- 成本分项：`root` 1 次系统调用（java/php 需 1 次 `/proc/self/status` 读，可与 `fuse` 共用）；`kvm` 1 `stat` + 1 `open/close`；`fuse` 1 `stat` + 1 `open/close` + ≤4 次助手 `stat`；`netadmin` 1 次 `/proc/self/status` 读（与 `root`/`fuse` 同文件）；`pterodactyl` 1 次 `mountinfo` 读（实测 3–4 KB）+ 1–2 次 `environ` 读；`systemd` 4–5 次 `stat`（`/run/systemd/system`、两个控制通道、≤3 个 `systemctl` 候选路径）。全部为本地、可短路、无子进程。
- 实测（2026-10-22）：
  - root+KVM+systemd+fuse 主机（go 0.5.8）：`/proc/self/mountinfo` 3169 B、`/proc/1/environ` 93 B；Python 参考实现（root/kvm/pterodactyl/systemd 四项）200 次均值 **0.085 ms/次**（文件系统缓存热态）。
  - 翼龙容器（java 0.5.9，uid 998）：`/proc/self/mountinfo` 3649 B、`/proc/1/environ` 567 B；容器内无 python3，未跑同款基准，读取量同量级。
- 反例成本（禁止路径）：`systemctl is-system-running` 在无 daemon 的环境可阻塞数十秒；每次 `fork/exec` 额外 0.5–3 ms，PHP 共享主机常直接禁用。

### 15.13 兼容性、暴露面与已知边界

- **additive**：不改变 baseinfo 既有字段、端点、认证链、签名与响应加密；旧控制端忽略新字段，新控制端必须容忍字段缺失。配置类标记（15.8–15.10）同样 additive：未启用持久化 / `KMODE=0` 的节点输出与 0.6.2 完全一致（非 Linux 为 `[]`），已启用节点仅在末尾多出对应布尔值。
- **暴露面**：`marks` 与 baseinfo 其余字段同策略下发。当前 baseinfo 位于匿名白名单，实测两台真机未认证 `GET /api/baseinfo` 均返回 200 与全量字段（无 `session_key`），因此 `marks` 同样对未认证方可读。它只含能力布尔值，不含凭证、密钥、路径或地址，敏感度低于已暴露的 `os`/`kernel_version`/`ipv4`。配置类标记在此基础上多暴露三个**部署形态布尔**（持久化是否启用、启动模式 1/2）——不含路径、密钥与隧道域名，敏感度与既有能力布尔同档；已作为设计特性在 SECURITY-AUDIT 台账留档。若后续执行 SECURITY-AUDIT 的 M2 / B-3（匿名端点瘦身），`marks` 与 `os`/`kernel_version` 同档处理，不做字段级特殊裁剪，也不新增端点。
- **已知漏报（预期，不算缺陷）**：五个主机探测标记在非 Linux 不输出（配置类标记不受此限，见 15.1 平台条款）；`/proc` 被 hidepid 或强隔离屏蔽；翼龙容器无读 `/proc/1/environ` 权限且未命中 `mountinfo`、兜底四条件不全；wings 自定义 `system.data` 且 hostname 非 UUID；go 端永不输出 `kmode1`/`kmode2`（未实现 KMODE）。
- **已知误报边界（如实记录）**：`CapEff` 置位但 seccomp/LSM 另行拦截 `mount(2)` 时，`fuse` 仍会命中——本规范不做真实挂载（需实现 FUSE 守护进程，成本与副作用不可接受），接受该极窄误报；`netadmin` 同档：`CapEff` 第 12 位置位但 seccomp/LSM 另行拦截 netlink/接口创建时仍命中（不做真实建卡验证，见 15.17）；同理 `kvm` 在未启用严格模式时只保证"设备可打开"。
- **误报防线**：弱特征必须四项同时满足；`kvm`/`fuse` 以"能打开设备"而非"路径存在"为准；`systemd` 三重条件；`root` 取 effective 而非 real。
- **禁止用 `virtualization` 反推**：py 对 `/proc/cpuinfo` 中的 `KVM`/`QEMU` 字样返回 `QEMU`，go 的 `kvm` 表示"本机是虚拟机"，与"能运行 KVM"相反或无关。

### 15.14 扩展规则

1. 取值限定 `[a-z0-9-]+`，语义单一、可在本地验证，不表达程度或质量（不要 `kvm-fast`、`root-limited` 这类取值）。
2. **additive**：新标记追加到输出末尾，不重命名、不合并、不改变既有标记语义；客户端忽略未知值。
3. 每个新标记必须在本节补齐"判据 / 实现 / 排除条件 / 性能 / 真机证据"五项，缺一不得进文档。
4. 平台专属能力（Windows 服务、macOS launchd）与其它挂载体系（CIFS/NFS）单独命名，不复用现有值。
5. 标记表达"能力存在"的布尔事实；需要表达程度时用新增数值字段，不得塞进 `marks`。

### 15.15 验收建议

- 离线单测：把 `/proc`、`/dev`、`/etc` 根路径做成可注入常量（如 `PROC_ROOT`、`DEV_ROOT`），覆盖"命中 / 不命中 / 读取失败 / 权限拒绝 / 字段异常"五类用例；断言 `marks` 不含未知值、无重复、顺序固定。配置类标记按 15.8–15.10 的启停矩阵注入环境变量/配置值（`KSTORE`/`KSTORE_KEY`/KMODE 配置值），并断言其固定追加在主机探测标记末尾。
- 真机矩阵（交叉核对命令见下）：

| 场景 | 期望 `marks` |
|---|---|
| 翼龙容器：998:998、无 `/dev/kvm`、无 `/dev/fuse`、无 systemd | `["pterodactyl"]` |
| root + `/dev/kvm` 可读写 + systemd 运行 + `/dev/fuse` 可读写且有 `CAP_SYS_ADMIN` | `["root","kvm","systemd","fuse","netadmin"]`（0.6.8 起：root 主机 `CapEff` 全量含 `CAP_NET_ADMIN`，第 12 位为 1） |
| Docker root 容器（默认 capability，无 `CAP_SYS_ADMIN`、无 `CAP_NET_ADMIN`） | 不含 `fuse` 与 `netadmin`（即使映射了 `/dev/fuse`）；无 `/dev/kvm` 时也不含 `kvm` |
| 非 root、不在 `kvm` 组 | 不含 `kvm` |
| 非 root、未获 `CAP_NET_ADMIN`（常规用户进程，`CapEff` 常态 `0000000000000000`） | 不含 `netadmin` |
| 非 root、经 ambient/file capabilities 获得 `CapEff` 第 12 位 | 含 `netadmin` |
| 有 `systemctl` 但 `/run/systemd/system` 缺失 | 不含 `systemd` |
| Windows / macOS 代理，未启用持久化、`KMODE=0` | `[]` |
| Windows 代理，`KSTORE_KEY` 合法 + `KMODE=2` | `["kstore","kmode2"]`（go 端为 `["kstore"]`） |
| Linux 主机启用持久化且 `KMODE=1` | 主机探测标记在前、`kstore`,`kmode1` 追加在末尾 |

- 交叉核对（只读命令）：`id -u; id -g; grep -E '^(CapEff|Uid|Gid)' /proc/self/status; stat -c '%F %t:%T %a' /dev/kvm /dev/fuse 2>&1; test -d /run/systemd/system && echo systemd-ok; tr '\0' '\n' < /proc/1/environ | grep -E '^P_SERVER_(UUID|LOCATION)='`。
- 性能门限：冷态 ≤ 5 ms、热态 ≤ 0.5 ms；以 `strace -f -e trace=process` 断言探测路径零 `fork`/`clone`。
- 一致性：五端（py/js/go/java/java11）对同一台真机必须给出相同的**主机探测标记**集合（顺序按 15.1）；配置类标记按端能力输出——py/js/java/java11 可输出 `kstore`/`kmode1`/`kmode2`/`kmode3`（`kmode3` 0.6.6 续批起，见 15.16），go 只可能输出 `kstore`（未实现 KMODE，见「九」）；PHP 端不在本仓，以分发 dist 实测为准（两个 emulator 副本不探测、按 15.1 省略字段；四副本均无 KSTORE/KMODE，不输出配置类标记）。

### 15.16 `kmode3` —— KMODE 配置为 3，kisama-hub 中继（配置类，0.6.6 起，Py/Js/Java/Java11）

判据：`KMODE` 环境变量经各端既有归一化解析后等于 `3`（py/js `Config.KMODE == '3'`；java/java11 `parseKmode()` 对字面值 `"3"` 返回 3；归一化仅处理 `2q`/`2quic`）。按配置值判定，不校验 `KHUB`/`KNAME` 生效条件——`KHUB` 缺失时「十九」规定隧道不建立，此时本标记**仍报**（语义与 15.10 一致：报告"配置了 KMODE=3 启动模式"这一配置事实）。控制端不得把 `kmode3` 当作"hub 中继已就绪"的承诺；判断隧道可用性应调 `GET /api/hub`（19.8）。

实现：marks 探测直读归一化后的 KMODE 配置值，O(1) 常量比较（py/js 类属性比较、java/java11 `markKmode3()` 判 final 实例字段）。

排除条件：

- `KMODE` 为 `0`/`1`/`2`（含 `2q`/`2quic` 归一化）/ 未设置或非法值 → 不报；
- **go 端未实现 KMODE**，go 永不输出 `kmode3`。

实测（2026-11-16，Windows 10 实机）：py agent `KMODE=3 KHUB=http://127.0.0.1:18080 KNAME=demo1 KHUB_PORTS=7788` 启动并注册成功 → 未认证 `GET /api/baseinfo` → `marks` 含 `kmode3`；0.6.6 续批 java/java11 实机同拓扑（KHUB=http://127.0.0.1:18080，注册经 hub 成功）→ 经 hub 中继的 `GET /api/baseinfo` 响应 `marks` 含 `kmode3`（java 版本号 `0.6.5-java`、java11 `0.6.5-java11`）。取值矩阵（0/1/2/3/非法值）由离线单测覆盖（tests/py/test_marks.py / tests/js/test_marks.js）。

### 15.17 `netadmin` —— 可创建/配置网络接口并重定向流量的前提（主机探测标记，0.6.8 起）

目的：判断该环境是否具备创建/配置网络接口与重定向流量（组网/分流类任务）的能力前提。TUN/TAP 虚拟网卡创建、veth/bridge/dummy 接口创建、iptables/nftables 规则与路由表改写等操作的内核许可统一由 `CAP_NET_ADMIN` 把守，该 capability 是这类操作的最小充分判据；与 `fuse`（15.7，`CAP_SYS_ADMIN` 口径）互补，供控制端做任务路由与降级。

判据（仅 Linux）：`/proc/self/status` 的 `CapEff` **第 12 位（CAP_NET_ADMIN）为 1**。

实现：复用既有 `CapEff` 解析器，单次 `/proc/self/status` 限长读——py `_marks_cap_eff_bit(12)`、js `_capEffBit(12)`、go `marksCapEffBit(12)`、java/java11 `capEffBit(12)`、PHP 两个完整副本 `_marksCapEffBit(12)`；0.6.8 起五端 + PHP 两个完整副本同批实现，固定顺序插在 `fuse` 之后（15.1）。

排除与边界：

- 非 Linux 平台不报（主机探测标记平台条款，15.1）。
- **不依据 `root` 推断**：容器可对 root 进程 drop `CAP_NET_ADMIN`（Docker 默认 capability 集不含它，需 `--cap-add NET_ADMIN` 显式授予），此类容器即使 euid 为 0 也如实不报；反之非 root 进程经 ambient/file capabilities 获得 effective 置位时如实报。
- `CapBnd`/`CapPrm` 置位而 `CapEff` 未置位不报（15.2"只报确定命中"：effective 集才是当前可立即使用的口径，与 15.7 `fuse` 第 3 条一致）。
- 漏报（预期，不算缺陷）：进程可经 user namespace 新建 netns 并在**该 netns 内**获得 `CAP_NET_ADMIN`，但当前 netns 的 `CapEff` 未置位时不报——标记只描述 agent 进程当前命名空间视角的事实（15.1）。
- 误报边界与 `fuse` 同档（15.13）：`CapEff` 置位但 seccomp/LSM 另行拦截 netlink/接口创建时仍命中——本规范不做真实建卡验证（创建网络接口有持久副作用，成本与可回滚性都不可接受）。
- 本标记不承诺 `CAP_NET_RAW`（原始套接字/packet socket，第 13 位）：需要表达时按 15.14 单独新增标记，不得复用本值；也不保证具体隧道/分流方案的外网可达性（那属 T 级网络探测与运行时验证的职责）。

实测（2026-11-22，两台真机交叉验证）：本地源码 go 交叉编译静态二进制（`CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build`），经既有旧版 agent 的 exec 在两台机器各另起独立测试进程（`KPORT=27611`，setsid 脱离会话，不动在役 agent），测试进程内匿名 curl `127.0.0.1:27611/api/baseinfo` 取 marks，并与测试进程自身 `/proc/<pid>/status` 的 `CapEff` 逐台对账——① pidginhost（debian 13.7，uid 0 root，`CapEff=000001ffffffffff`）→ `marks` 命中 `["root","kvm","systemd","fuse","netadmin"]`，`netadmin` 位次在 `fuse` 之后，二次请求 P 级快照稳定；② anaconda（ubuntu 20.04 docker 容器，非特权用户 uid 2993416，`CapEff=0000000000000000`）→ `marks` 为 `[]`，不命中 `netadmin` 亦不命中其余主机标记。两台判读与 OS 级 `CapEff` 真相完全一致；测试进程与上传文件已清理（其中一台容器 PID 1 不回收子进程，死亡测试进程残留 zombie 态空壳，无端口/文件/资源占用，随容器生命周期消失，如实记录）。离线单测另覆盖置位/未置位/坏数据三态与固定顺序（tests/py/test_marks.py、tests/js/test_marks.js、go/utils/marks_test.go，夹具注入 `/proc` 根路径）。

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
| `marks` | **P** | 进程生命周期 | 中（stat/open、mountinfo、environ、/proc/self/status CapEff） | 与第十五节一致：**进程全生命周期只探测一次** |
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

> **一句话**：面板打开即拉起三条常驻周期——节点任务维护（默认 5 分钟）、节点基础信息同步（默认 10 分钟）、配置云同步（默认 10 分钟；三者的周期与开关均可调，见 17.6）；调度统一为「欠账驱动」——tick 到点只查账（距上次发起 ≥ 门槛才执行），hidden 期间任务维护/节点探测跳过、配置云同步仍按欠账执行（1 次 GET 成本极低、后台尽力而为），回到前台对超门槛欠账各补跑一次；另有变更驱动的云同步防抖通道与切后台前冲刷；全部轮内作业单飞锁 + 并发上限，任何使用模式下请求总量 ≤ 固定间隔轮询版本。任务维护对 agent 的配合要求为零新接口：≥0.6.2 依赖「任务元数据行」盖章契约（第四节开篇，agent 在 14/16 设置时自动完成，面板不感知语言实现），<0.6.2 走纯旧契约。本节回答「节点为什么隔几分钟被连一次」的运维排障口径。

（截至 2026-10-28，面板 0.6.5 代码现状定稿。调度实现位于 kisama-panel 仓 `src/lib/task-daemon.ts` / `config-sync-scheduler.ts` / `node-backoff.ts`，本节只定契约语义，不登记面板行号。）

### 17.1 定位与适用面

- 面板（控制端）对代理端点的调用分两类：**用户动作**（手动刷新、任务保存/行内编辑、立即执行、节点转移、AI 助手操作等，发起即执行）与**后台守护调度**（本节）。用户动作不经守护进程、不受其门禁影响。
- 守护调度完全运行在面板浏览器页内：页面挂载即 `taskDaemon.start()`，卸载即 `stop()`，无任何常驻服务端组件。即使页面切到后台标签页，也可能在节流窗口内继续连代理——trycloudflare / shz.al 按量计费隧道、低配共享主机、流量审计场景需明确默认节奏与喊停手段（17.6 开关）。

### 17.2 三条常驻周期

| 作业 | 默认周期 | 启动首跑（错峰） | 目标端点 / 数据面 | 节点范围 | 失败处置 |
|---|---|---|---|---|---|
| 🛡️ 节点任务维护 | 5 分钟（可调，17.6） | 启动后 10 秒 | 四、任务管理：按节点三分支——① 有待同步标记（面板离线改动）→ 14/16 整表硬推本地（全版本）；② agent ≥0.6.2（任务元数据行契约）→ 13/15 GET 后做任务 ID 感知双向合并（同任务按 `updated` 修改时间戳裁决、不同任务并集、停用仓库条目拦截），有节点侧内容差异才 14/16 下发、有镜像侧差异才回写面板镜像；③ agent <0.6.2 → 仅「远端该表为空而本地非空」时整表回灌 | 仅 `status=online` 且非 PHP 探针节点 | 不适用退避；请求失败丢弃会话缓存重新握手后立即重试一轮 |
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

- 全局任务中心打开 = **零网络请求**（localStorage 本地镜像）；🔄 手动刷新才发起一轮全节点核对：agent ≥0.6.2 节点做 ID 感知双向合并（远端独有条目采纳回镜像、本地独有条目下发节点、同任务按修改时间戳裁决），旧节点维持「远端非空有差异才采纳回镜像」；任务保存后仅对被改节点做一次确认性重拉。
- `/api/status`（一.2）当前**未接入任何周期轮询**（面板定义了客户端但无调用点）。
- 冻结节点（回收站）不在活跃列表，恢复前守护调度永不对其发起连接。
- PHP 探针节点不参与任务维护（任务端点不支持）。

### 17.8 请求预算不变式与已知边界

- **不变式**：上述门禁叠加后，任何使用模式（常驻前台、切后台、暂停开关、浏览器冻结恢复）下的请求数均 ≤ 固定间隔轮询版本，且手动操作路径不受守护调度影响——0.5.3 轮询治理确立的目标至今保持。
- **已知边界**：配置云同步的后台执行属尽力而为——整页冻结（Memory Saver/移动端切走）期间完全停摆，欠账回到前台按 2 分钟门槛补齐；10 分钟周期仅是兜底节拍，实时性承诺由变更驱动通道（17.3）承担。任务维护/节点探测在 hidden 期间不执行、回前台按完整周期门槛补跑，冻结/睡眠恢复的一个周期内缺口由该补跑覆盖。
- **对代理端的语义依赖**（面板 0.6.5 起，按 agent 版本分流）：
  - agent ≥0.6.2（任务元数据行契约，见第四节开篇）：任务维护走「fetch → ID 感知合并 → 有差异才写」——合并只做**并集采纳**（远端独有条目回镜像）、**增量下发**（本地独有条目进节点）、**同任务按修改时间戳裁决**（赢家的脚本/表达式整表写回，输家条目删除）与**停用仓库拦截**（命中面板停用仓库的远端条目随合并从节点剔除）。代理侧手工维护的任务不会被抹掉（远端独有条目只被采纳不删除）；对非空远端的写请求仅发生在有内容差异时，且幂等（内容一致重复推送不推进 `updated`、不产生新差异）。
  - agent <0.6.2：维持旧契约——任务回灌仅在远端该表为空而本地非空时触发（13/15 读 + 14/16 写、整表下发；语义见第十三节 KSTORE 启动恢复），守护进程对非空远端任务清单零写请求；远端非空清单的差异性对账属面板手动刷新动作。
  - 通用前置：面板有待同步标记（离线改动）时对任何版本整表硬推本地清单——离线编辑是最新的面板意图。

---

## 十八、内置加密 DNS（DoH）：`KISAMA_DNS` 开关（五端统一，防 DNS 污染）

> **一句话**：`KISAMA_DNS=on` 时 agent 全部出站域名解析改走内置 DoH（DNS over HTTPS JSON API），防御本地 DNS 污染/劫持；`off`（默认）不安装任何钩子、零行为变化。argo 隧道模块（快速隧道注册 + edge 长连接）、baseinfo 外网 IP 探测、KMODE=2 shz.al 上报、go 端 /kisamaproxy 上游转发全部覆盖；纯标准库零新依赖，证书校验零降级，无新增端点/监听面。

### 18.1 背景与覆盖矩阵

agent 为纯入站服务端（面板 → agent 是入站连接），DNS 污染不影响主控通道；受影响的是出站解析面：

| 出站模块 | py | js | go | java | java11 | 覆盖方式 |
|---|---|---|---|---|---|---|
| baseinfo 外网 IP 探测（api.ipify.org 等） | ✅ | ✅ | ✅ | ✅ | ✅ | 全局钩子 / SecureSend |
| argo 快速隧道注册（api.trycloudflare.com） | ✅ | ✅ | —（go 无 argo 模块） | ✅ | ✅ | 同上 |
| argo edge 长连接（regionX.v2.argotunnel.com:7844，SNI=h2.cftunnel.com） | ✅ | ✅ | — | ✅ | ✅ | DoH 解析后按 IP 建连（逐 IP 尝试），SNI 与自研证书校验不变 |
| KMODE=2 shz.al 上报 | ✅ | ✅ | —（go 无 KMODE） | ✅ | ✅ | SecureSend |
| /kisamaproxy 上游转发 | —（py 无 proxy） | — | ✅ | — | — | Transport.DialContext 挂载 |

- **py**：包装 `socket.getaddrinfo`（import 期安装），以「对 DoH 解析出的 IP 调原版 getaddrinfo」合成规范结果——覆盖 aiohttp/urllib/http.client/socket 全部进程内出站解析，完整保留 family/flags 语义；`gethostbyname` 等裸 API 不在钩子范围（本仓未使用）。
- **js**：包装 `dns.lookup`（require 期安装），覆盖 http/https/tls/net 全部进程内出站解析（node 内置请求不经环境代理）；`dns.Resolver`（c-ares 线）不涉本仓出站路径。
- **go**：`go/utils/dns.go` 提供 `SecureDialContext`，`fetchIP` 客户端与 `handlers.kisamaProxyTransport` 显式挂载；**未来新增出站域名连接（如 argo-go 移植）一律经 `utils.SecureDialContext` 挂载自动纳入**。
- **java/java11**：`java.net.http.HttpClient` 无解析钩子，由 `secureSend` 改写连接（URI host → DoH 解析 IP，强制 HTTP/1.1 + 手工 `Host` 头保持原域名；`jdk.httpclient.allowRestrictedHeaders=host` 由静态块设置，仅放开本进程 Host 头设置许可）；edge 走 `SecureDns.resolve` 后按 IP 建连；proxyToOrigin 为回环地址不解析。
- **php**：不在本仓（独立仓库），本期不涉及。

### 18.2 开关与变量

| 变量 | 缺省 | 说明 |
|---|---|---|
| `KISAMA_DNS` | `off` | `off`=系统解析（零行为变化）；`on`=全部出站域名解析走 DoH |
| `KISAMA_DOH_SERVERS` | （空） | 逗号/空白分隔的 DoH JSON API 基地址链（去尾斜杠）；空/全非法回缺省链 |

缺省服务器链（按序尝试；前一台网络级失败退避 60s 后换台，SERVFAIL 等服务端错误仅换台不退避）：

1. `https://223.5.5.5/resolve`（阿里 DoH，国内直连快）
2. `https://1.1.1.1/dns-query`（Cloudflare DoH）
3. `https://8.8.8.8/resolve`（Google DoH）

- 请求形态：`GET {base}?name={域名}&type=1|28`，头 `accept: application/dns-json`；应答取 `Answer[]` 中 type 匹配且 data 为对应族 IP 字面量的记录（CNAME 链与非 IP 文本过滤；DoH 应答携带主机名一律拒绝，防止借道触发系统解析）。
- 变量读取优先级与本仓既有变量一致：真实环境变量 > 脚本/jar 同目录 `.env`；运行期不热更新，改后重启生效。

### 18.3 解析语义

- **缓存**：按 (主机, 地址族) 记忆应答，TTL 取应答最小值截断 `[30,600]s`；NXDOMAIN/NODATA 负缓存 60s；解析失败不缓存（单服务器退避已防抖）；同键并发解析 single-flight 去重（py/java 解析期间持锁，go/js 按键单飞）。
- **双栈排序**：对齐系统 RFC6724 惯例 v6 优先；IPv6 不可用（建 UDP6 套接字探测，懒缓存）时 v4 优先，减少无谓的 v6 连接尝试。
- **回落（可用性优先）**：全部 DoH 服务器失败 → 回落系统解析，限频告警（5 分钟一次，LOG_LEVEL≤2 或 DEBUG 可见）；DoH 明确无记录（Status=3 / NODATA）→ **不回落**，直接按 NXDOMAIN 失败，防被污染解析「复活」。两分支语义不同：前者是解析器不可达（网络层），后者是权威应答。
- **字面量直通**：IP 字面量（容忍 `[v6]` 方括号）与 `AI_NUMERICHOST` 一律不进 DoH——DoH 请求本身即 IP 直连，此为防递归前提。

### 18.4 安全语义（对齐 docs/SECURITY-AUDIT.md 设计特性记录）

- DoH 请求直连字面量 IP：py 空 ProxyHandler / go `Proxy: nil` / java `NO_PROXY`，不经环境或系统代理；TLS 证书校验全程开启（223.5.5.5 / 1.1.1.1 / 8.8.8.8 证书均含 IP SAN）。
- 证书校验零降级：py/js 换 IP 拨号后 SNI/校验仍按原域名；go 经 Transport 语义天然保持（ServerName 取自 URL host）；java 以 X509ExtendedTrustManager 委托 JVM 默认信任链 + 按原域名手工 SAN 校验（单标签通配），**无 trust-all**。
- 隐私口径：开启后出站目标域名（trycloudflare / argotunnel / shz.al / IP 探测服务 / 代理上游）会出现在 DoH 供应商的查询日志中——默认关闭、由 Owner 显式开启即视为接受该取舍。
- 无新增监听面 / 端点 / 协议字段；off 模式零开销；面板与 kisama-skill 零适配。

### 18.5 验收与限制

- 单测（全部 mock 网络层，不依赖外网）：`tests/py/test_secure_dns.py`（22 例）、`tests/js/test_secure_dns.js`（11 组）、`go/utils/dns_test.go`（14 个测试函数，含 httptest 假 DoH 与真实拨号链路）。
- 已知限制：DoH 供应商被网络整体阻断时行为等价 off（全部回落系统解析）；php 端、js `dns.Resolver`、py `gethostbyname` 不在覆盖面（本仓出站路径均未使用）。

---

## 十九、kisama-hub 中继协议（KMODE=3，0.6.6 起）

> **0.6.6 新增**：KMODE=3 让 agent 通过一条**出站 WebSocket 长连接**把自身服务"借道"自建的公网汇聚服务 **kisama-hub**（独立项目，仓库 `kisama-hub`）对外开放，覆盖三类流量：`/api/*` 中继、指定端口 HTTP 服务反代、终端 WS 中继。核心价值：内网无公网 IP 的机器复用 hub 的公网线路开放，无需依赖 Cloudflare 免费隧道（KMODE=1/2 的 trycloudflare 有按 IP 限流与配额不确定性）。**实现端：py / js / java / java11**（java/java11 于 0.6.6 续批补齐，传输层用 JDK 11 内置 java.net.http，零新依赖）；go 待后续批次跟进（支持矩阵见下）。

### 19.1 角色与拓扑

```
访问方（面板 / control.py / 浏览器）
        │  https://hub.example.com/{KNAME}/...
        ▼
kisama-hub（公网，无认证，纯传输层）
        │  出站 WebSocket 长连接（agent 主动发起，NAT 友好）
        ▼
kisama-agent（内网，KMODE=3，回环分发到自身 /api 或 KHUB_PORTS 端口）
```

- hub 是**纯传输层**：验签（`X-Nonce`/`X-Timestamp`/`X-Auth-Token`）与响应加密（`x-encrypted`）端到端不变，hub 看不到任何业务明文。
- hub 不设认证（Owner 拍板项，见 docs/SECURITY-AUDIT.md 设计特性记录）；agent 注册与中继遵循本文约定即合法使用。

### 19.2 agent 端配置（KMODE=3）

| 环境变量 | 缺省 | 说明 |
| :--- | :--- | :--- |
| `KMODE` | `0` | 设为 `3` 启用 kisama-hub 中继 |
| `KHUB` | （空） | hub 基址，如 `https://hub.example.com`（尾斜杠剥除）；隧道 WS 地址自动推导（https→wss、http→ws、裸 host 按 ws，为字符串拼接、基址可含路径）；hub 启用路径前缀（19.3 `HUB_BASE_PATH`）时**必须带前缀**，如 `https://hub.example.com/hide1` |
| `KHUB_PUBLIC_URL` | （空） | **公网基址覆盖值（可选，0.6.6 续批二）**：面板/客户端实际访问该 agent 中继地址的公网基址（可含路径前缀，如 `https://pub.example.com/hub`）。注册时经注册帧 `public_url` 字段上报，hub 拼 `/sub`、`/agents` 页与 ack `url` 时**优先用它**（优先级见 19.7）。**未配置时自动上报 KHUB 派生基址**（即 `KHUB` 本身——agent 知道 hub 公网地址的场景零配置）；本变量用于内网 KHUB 等派生值 ≠ 公网地址的部署。校验：`http(s)://` 开头、无空白、≤512 字符、尾斜杠剥除；非法值告警一次并回退 KHUB 派生基址 |
| `KNAME` | （空） | hub 注册名，**单个 hub 内唯一**；校验规则独立于 shz.al（见 19.4），不要求 `KNAME_KEY` |
| `KHUB_PORTS` | （空） | **HUB 组反代白名单 env 下限（0.6.7 续批六起归属 HUB 组）**（逗号分隔，如 `7788,9090`）；只约束 hub 链路端口反代 `/{KNAME}/{PORT}/*`，缺省空 = HUB 端口反代禁用，非法/越界条目静默忽略。聚合公式：HUB 组有效白名单 = `KHUB_PORTS` ∪ HUB 运行时列表（运行时经 20.8 API `scope=hub` 设置与 `POST /api/hub` 注册端口并入（19.9）并 KSTORE 持久化）；拒绝语义见 20.2（403 `port_not_allowed`、不发起连接） |
| `KPROXY_PORTS` | （空） | **本地组反代白名单 env 下限（0.6.7 续批六新增）**（逗号分隔）；只约束本地反代路由（第二十节 `/api/proxy/{port}/*`、WS `/api/proxyws/{port}/{rest}`），缺省空 = 本地反代禁用，非法/越界条目静默忽略。聚合公式：本地组有效白名单 = `KPROXY_PORTS` ∪ 本地运行时列表（20.8）；**与 `KHUB_PORTS` 互不影响**（两组独立存储与校验，续批六拍板修订续批二"单一白名单口径"） |
| `KISAMA_HUB_RETRY_BASE_SECONDS` | `2` | 断线重连指数退避基数（秒） |
| `KISAMA_HUB_RETRY_MAX_SECONDS` | `60` | 退避上限（秒）；公式 `BASE × 2^(failures-1)` 封顶 MAX，与 argo 0.6.4 同构 |
| `KISAMA_HUB_PING_INTERVAL` | `20` | 隧道应用层心跳间隔（秒） |
| `KISAMA_HUB_RELAY_TIMEOUT` | `60` | agent 侧回环请求超时（秒；应大于 hub 侧 30s，让 hub 先超时） |
| `KISAMA_HUB_MAX_BODY` | `67108864` | 请求/响应体上限（字节，64MB） |

- `KMODE=3` 但 `KHUB` 或 `KNAME` 缺失/非法时：告警并保持普通启动（本地服务照常，不建隧道）。
- 注册成功后 baseinfo `marks` 追加 `kmode3`（见 15.16）。

### 19.3 hub 端点清单

| 路由 | 说明 |
| :--- | :--- |
| `GET /` | 落地页（在线数与入口链接） |
| `GET /agents` | 注册列表页（KNAME/版本/端口入口/中继 URL/注册时间/最近心跳/中继计数；每行一键复制 kisama:// 链接；10s 自刷新） |
| `GET /api/agents` | JSON 列表（`{hub_version, count, agents:[{kname, version, ports, registered_at, last_seen, relay_count, url}]}`） |
| `GET /sub` | 订阅：text/plain，每行一条 `kisama://node?domain=<enc>&name=<enc>`（见 19.7） |
| `GET /sub?format=json` | 面板批量导入格式 `NodeConfigExport {version, exportedAt, nodes:[...]}`（面板「导入配置」直接消费） |
| `GET /health` | 健康检查 `{status, hub_version, agents}` |
| `WS /tunnel` | agent 注册与隧道（唯一 agent 入口，见 19.5） |
| `ANY /{KNAME}/api/*` | API 中继 → agent 自身 `/api/*` |
| `GET /{KNAME}/api/ws/*` | 终端 WS 中继（帧级多路复用，见 19.6） |
| `ANY /{KNAME}/{PORT}/*` | 端口反代 → agent 回环 `127.0.0.1:{PORT}`（`PORT` 须 1-65535） |

hub 环境变量：`HUB_PORT`(8080)、`HUB_MAX_AGENTS`(256)、`HUB_RELAY_TIMEOUT`(30s)、`HUB_MAX_BODY`(64MB)、`HUB_HEARTBEAT_TIMEOUT`(60s)、`HUB_WS_IDLE_TIMEOUT`(600s)、`HUB_PUBLIC_URL`（可选，订阅 domain 与 ack url 的公网基址，不含路径前缀；缺省按 `X-Forwarded-Proto` + Host 推导，生产 TLS 反代后建议显式设置）、`HUB_BASE_PATH`（可选，路由前缀如 `hide1` → 上表全部路由挂 `/hide1/` 下，根路径与其余未挂前缀路径 404 隐藏、`/hide1` 自动重定向 `/hide1/`；前缀段限字母/数字/连字符/下划线，非法回退根路径；此时 agent 的 `KHUB` 与订阅/面板 domain 均须带前缀——四端 KHUB→WS 地址为字符串拼接天然携带前缀，agent 端零改动；隐藏属轻微混淆非认证，代理/枚举仍可发现）。hub 全部响应（含中继，上游同名头剥除后统一裁定）带 CORS 头 `Access-Control-Allow-Origin: *` 等（0.6.6 批次，语义对齐 kpng/kisamaproxy；带 `Origin` 的 OPTIONS 预检由 hub 本地 204 应答，无 `Origin` 的 OPTIONS 照旧透传）。

### 19.4 KNAME 规则与注册抢占

- **格式**：`^[a-z0-9][a-z0-9-]{1,62}$`（输入小写归一化，2-63 字符，首位字母或数字）。
- **保留名**（与 hub 自有路由冲突，注册即拒）：`api`、`agents`、`health`、`tunnel`、`static`、`sub`、`favicon.ico`。
- **抢占规则**：槽位空闲（旧连接已断并注销）才可注册；活跃连接在位时返回 `name_taken`，**不发生替换**（杜绝抢名战争）。进程重启后旧 WS 已死可自然重占。hub 重启后注册表清空，agent 自动重连重注册（注册表纯内存，无持久化）。
- **注册帧**（WS /tunnel 首帧）：`{"t":"register","v":1,"kname":"...","version":"0.6.5-python","ports":[7788]}`，可选字段 `public_url`（公网基址，0.6.6 续批起；**0.6.6 续批二起缺省自动上报**——`KHUB_PUBLIC_URL` 合法配置值优先，未配置取 KHUB 派生基址（`KHUB` 本身）；hub 校验同 agent 端——`http(s)://` 开头、无空白、≤512 字符、尾斜杠剥除，非法即拒 `invalid_public_url`，旧版 agent 不携带时回落 hub 推导）；应答 `{"t":"ack","ok":true,"kname":"...","url":"https://<host>/<kname>"}`（`url` 按 19.7 优先级拼装，agent 上报了 `public_url` 时即为其修正值）或 `{"t":"ack","ok":false,"code":"invalid_name"|"name_taken"|"full"|"invalid_version"|"invalid_frame"|"invalid_public_url","message":"..."}`。
- **心跳**：agent 每 20s 发 `{"t":"ping"}`，hub 回 `{"t":"pong"}`；hub 读空闲超时 `HUB_HEARTBEAT_TIMEOUT`（60s，任何帧重置），超时断开并注销。

### 19.5 HTTP 中继 envelope（req/res/err）

单一 JSON 文本帧承载；body 一律 base64（`body_b64`）。

- 请求帧：`{"t":"req","id":N,"mode":"api"|"port","port":7788,"method":"GET","path":"/api/baseinfo","query":"a=1","headers":{...},"body_b64":"..."}`
  - api 模式：`path` = 剥离 `/{KNAME}` 后的路径（`/api/baseinfo`），agent 回环到 `http://127.0.0.1:{自身端口}{path}`；
  - port 模式：`path` = 剥离 `/{KNAME}/{PORT}` 后的剩余路径，agent 回环到 `http://127.0.0.1:{PORT}{path}`；
  - 头部处理：hub 剥 hop-by-hop（connection/keep-alive/transfer-encoding/upgrade/host/proxy-\*）、内部命名空间 `x-kisama-hub-*`、注入头 `x-forwarded-*`，并注入 `x-forwarded-for`（hub 所见客户端 IP）；agent 回环前再做一次同规则纵深过滤。
- 响应帧：`{"t":"res","id":N,"status":200,"headers":{...},"body_b64":"..."}`（`content-length` 由 hub 依实际 body 重写）。
- 错误帧：`{"t":"err","id":N,"code":"...","message":"..."}`，hub 按码映射 HTTP 状态：`port_not_allowed`→403、`body_too_large`→413、`relay_timeout`→504、`loopback_unreachable`/`agent_disconnected`/`tunnel_write_failed`→502、未知→502。
- agent 离线 / KNAME 未注册 → hub 直接 404（`unknown_agent`）；body 超 `HUB_MAX_BODY` → 413（hub 与 agent 双侧限额）。
- **端口反代的白名单校验在 agent 侧**（HUB 组白名单 = env `KHUB_PORTS` ∪ HUB 运行时，0.6.7 续批六）：hub 无状态转发，agent 对未放行端口拒绝且不发起回环连接（无端口扫描侧信道）。

### 19.6 终端 WS 中继（ws_open/ws_ack/ws_data/ws_close）

- 客户端对 `/{KNAME}/api/ws/terminal?request_id=...` 发起 WebSocket 升级，hub 立即升级并分配流 ID，发 `{"t":"ws_open","id":N,"path":"/api/ws/terminal","query":"...","headers":{...}}`。
- agent 收到后回环拨号 `ws://127.0.0.1:{自身端口}{path}?{query}`（Noise XX 握手 / 降级令牌字节级透传，端到端加密不变），成功回 `{"t":"ws_ack","id":N,"ok":true}`；失败回 `ok:false`，hub 以 close 3001 关闭客户端。
- 双向数据 `{"t":"ws_data","id":N,"bt":"bin"|"txt","data_b64":"..."}`（binary/text 语义保真）；任一侧关闭发 `{"t":"ws_close","id":N,"ws_code":<int>,"reason":"..."}` 对侧联动（`ws_code` 为独立整型键名，与 err 帧的字符串 `code` 区分）。
- **hub 在收到 ws_ack(ok:true) 前缓冲客户端帧**（agent 本地 WS 握手仍在进行，提前下发会被其 CONNECTING 状态丢弃——Noise msg1 丢失会让会话静默挂死）；ack 到达后按序 flush。agent 侧对称：本地握手完成前的下行帧入队缓冲，open 后按序 flush。
- 流级空闲超时 `HUB_WS_IDLE_TIMEOUT`（600s，任何帧重置）；隧道断开 → 该 agent 全部客户端流以 1011 关闭。hub 对客户端 ping/pong 自行应答（不上隧道）。
- **端口反代模式也支持 WS 透传（0.6.6 续批）**：`/{KNAME}/{PORT}/*` 的 WebSocket 升级分流到同一帧协议，`ws_open` 帧携带 `port` 字段（`{"t":"ws_open","id":N,"port":7788,"path":"/剩余路径",...}`），agent 校验 HUB 组白名单（env `KHUB_PORTS` ∪ HUB 运行时，0.6.7 续批六）后回环拨 `ws://127.0.0.1:{port}{path}`——**目标服务的 WS（含其自有认证）端到端透传**；白名单未放行时 agent 回 `ws_ack ok:false`，hub 以 close 3001 关客户端（与 HTTP 端口反代的 403 同语义）。api 模式的 `ws_open` 无 `port` 字段（agent 回环自身）。

### 19.7 订阅与连接串契约（对齐 kisama-panel share-link.ts）

- hub 生成的链接形态：`kisama://node?domain=<enc>&name=<enc>`；值编码严格对齐面板 `encodeURIComponent` 语义（`+` 必须转 `%2B`，解析侧不做 `+`→空格）；可选字段为空不写。
- **domain 基址来源三级优先级（0.6.6 续批起；0.6.6 续批二起 public_url 缺省自动上报）**：该 agent 注册时上报的 `public_url`（注册帧字段，`KHUB_PUBLIC_URL` 覆盖值优先、缺省取 KHUB 派生基址——agent 已声明其实际基址，无需 hub 侧配置）> hub 全局 `HUB_PUBLIC_URL` > 请求推导（`X-Forwarded-Proto` + Host，或 TLS 判定 https）。`/sub`（文本与 `?format=json` 的 `domain`）、`/agents` 页与 `/api/agents` 的 `url`、注册 ack 的 `url` 四处统一按此优先级拼装（`{基址}/{KNAME}`）；`/api/agents` 条目 additive 增加 `public_url` 字段（非空才输出，标示该条目 url 来源）。未上报任何值时行为与 0.6.6 首批完全一致。
- **不带任何私钥字段**：连接串里的 `ecdsaprikey`/`eciesprikey` 是**面板侧私钥**，hub 不可能持有；面板导入后节点级缺省由其全局密钥兜底（`node.key || globalConfig.key`）。
- 面板节点 URL 配置为 `https://hub/{KNAME}`：面板 `getSignPath` 对任意前缀取最后一个 `/api/` 锚点签名，签名 PATH 即 agent 实际分发的路径——**签名口径 = 剥离 KNAME 前缀后的本地路径**，面板与 `tools/control.py`（相对路径签名）均零改动兼容。
- 面板现状**没有订阅 URL 定时拉取器**：`/sub` 文本可逐条复制进 NodeForm 粘贴导入，`/sub?format=json` 可经面板「导入配置」批量导入；订阅 URL 自动拉取为 kisama-panel 侧后续改动预留。

### 19.8 中继状态端点 `GET /api/hub`（Py/Js/Java/Java11）

走验签（非白名单），返回：

```json
{
  "status": "ok",
  "enabled": true,
  "tunnel": {
    "tunnel_status": "alive",          // alive | reconnecting | failed（对齐 /api/argo 三态惯例）
    "hub": "https://hub.example.com",
    "kname": "demo1",
    "url": "https://hub.example.com/demo1",
    "ports": [7788],
    "consecutive_failures": 0,
    "last_error": null,
    "last_error_at": null,
    "last_connected_at": "2026-11-16T00:00:00Z",
    "relay_count": 12
  }
}
```

**0.6.6 续批 additive 扩展**：响应新增 `registrations` 数组（注册表全量，元素在 snapshot 基础上含 `source: "startup"|"dynamic"`）；`tunnel` 字段保留（KMODE=3 静态实例快照，无则 null）；`enabled` 语义更新为"注册表非空"。非 KMODE=3 且无动态注册时返回 `{"status":"ok","enabled":false,"registrations":[],"tunnel":null}`。

**0.6.6 续批新增 `POST/DELETE /api/hub`（动态注册，见 19.9）**——注册项持久化于 kstore `data.hubregs`（第十三节），agent 重启自动恢复。

### 19.9 动态注册 API（POST/DELETE /api/hub，0.6.6 续批，Py/Js/Java/Java11）

运行时动态指挥 agent 注册/注销到 kisama-hub，**不依赖 KMODE=3 启动配置**。三条路由均走验签（非白名单）。注册项持久化于 kstore `data.hubregs`（第十三节"hub 注册任务子类型"），agent 重启自动恢复。

**`POST /api/hub`** — 动态注册：

```json
{ "hub": "https://hub.example.com", "kname": "myhost", "ports": [7788] }
```

- 同步等待注册结果（15s 超时）；成功 → `200 {"status":"ok","persisted":<bool>,"registration":{...snapshot, "source":"dynamic"}}`（`persisted=false` 表示 KSTORE 未启用，注册仅本进程内存活）；
- `KNAME` 非法/保留名 → `422 {"code":"invalid_name",...}`；hub 基址非 http(s) → `422 {"code":"invalid_hub"}`；本 agent 已有同名注册 → `409 {"code":"name_taken"}`（kname 唯一键）；hub 侧 name_taken/full → `409`——以上**均不保留注册项**；
- 网络类失败（hub 不可达/超时）→ `500 {"code":"unreachable","persisted":<bool>,...}`——**注册项保留**，按指数退避自治重连，状态后查 GET（无重复 POST 的必要）；
- **`ports` 并入 HUB 组运行时白名单（0.6.7 续批六分组口径，Owner 拍板 2026-11-20，修订续批二"单一白名单"）**：注册项成立（成功或 `unreachable` 退避中）时 `ports` **自动并入 HUB 组运行时列表**（20.8，KSTORE `data.proxyports` 随落盘）——**注册带端口即 hub 端口反代生效**：hub `/{KNAME}/{PORT}/*` 立即可用，无需另调 `POST /api/proxy/config`，env `KHUB_PORTS` 为空的节点同样成立；**本地组不受注册影响**（`/api/proxy/{port}/*` 的白名单独立于注册端口，见 20.2）；永久拒绝（invalid_name/name_taken/full）不并入；`DELETE /api/hub` 注销不收回已并入端口（白名单由 20.8 独立管理），hubregs 恢复路径亦不重新并入（`DELETE /api/proxy/config?scope=hub` 的管理动作不被重启翻盘）。

**`DELETE /api/hub`** — 注销：

```json
{ "kname": "myhost" }
```

- 成功 → `200 {"status":"ok","persisted":<bool>,"removed":{...snapshot}}`（隧道 stop + 注册表移除 + 落盘同步删除）；
- 未注册 → `404`。

**KMODE=3 与动态注册共存**：静态项（source=startup）与动态项（source=dynamic）在同一注册表（kname 唯一键）；KMODE=3 未启用时仅动态项生效。注册表全量见 GET 的 `registrations`。

**支持矩阵补充**：动态注册与持久化恢复当前 Py/Js/Java/Java11（与 19.10 矩阵同步演进）。

### 19.10 支持矩阵与遗留

| 能力 | py | js | go | java | java11 |
| :--- | :---: | :---: | :---: | :---: | :---: |
| KMODE=3（API 中继 / 端口反代 / 终端中继 / 订阅） | ✅ | ✅ | ❌（KMODE 全系未实现） | ✅（0.6.6 续批） | ✅（0.6.6 续批） |
| 动态注册（POST/DELETE /api/hub + kstore 持久化恢复，19.9） | ✅ | ✅ | ❌ | ✅ | ✅ |
| 注册端口并入 HUB 组白名单（19.9/20.8，分组白名单，0.6.7 续批六） | ✅ | ✅ | ❌ | ✅ | ✅ |
| 端口反代 WS 透传（ws_open.port，19.6） | ✅ | ✅ | ❌ | ✅ | ✅ |
| marks `kmode3` | ✅ | ✅ | ❌ | ✅ | ✅ |
| `GET /api/hub` | ✅ | ✅ | ❌ | ✅ | ✅ |
| public_url 上报（缺省 KHUB 派生，KHUB_PUBLIC_URL 覆盖；19.4/19.7，0.6.6 续批二） | ✅ | ✅ | ❌ | ✅ | ✅ |

遗留（后续批次）：go 的 KMODE=3 实现（需先补 KMODE/KNAME/KHUB/KHUB_PORTS 配置基建）；php 端无 WS 客户端、不做 hub 接入；面板订阅 URL 自动拉取（kisama-panel 侧）。

## 二十、本地端口反代路由 `/api/proxy/{port}/*`（0.6.7 起，Py/Js/Java/Java11）

不注册 kisama-hub 时，控制端/浏览器经 agent 自身开放的路由访问本机端口 HTTP 服务。端口编码在路由里（对齐 hub `/{KNAME}/{PORT}/{rest}` 语义，构造 URL 即选定端口），白名单为**本地组**（env `KPROXY_PORTS` ∪ 本地运行时列表，见 20.2/20.8；0.6.7 续批六起与 hub 端口反代的 HUB 组**分设两组白名单，各管各的**），回环转发核心与 hub `req` 帧共用（一份实现多层消费）。

**认证模型（Owner 拍板 2026-11-18）：白名单唯一门禁**——中间件对 `/api/proxy/` 前缀匿名放行（`/api/proxy/config` 管理端点除外，走验签），端口在白名单中即放行，不做验签；与 hub 公开模型一致，浏览器可直接交互，目标服务的认证取决于其自身。

### 20.1 端点与语义

`ANY /api/proxy/{port}/{rest...}`（+ 无 rest 的 `ANY /api/proxy/{port}`）→ `http://127.0.0.1:{port}/{rest}`（响应流式回传，见 20.7；py/js 端同路径 upgrade 由 WS 泵承接，见 20.6 续批三）：

- **白名单唯一门禁**：中间件 bypass（匿名放行不验签）；白名单拒绝 403 `port_not_allowed` **且不发起连接**（无端口扫描侧信道）；`/api/proxy/config` 管理端点不在 bypass（控制暴露面，走验签）；
- **认证头剥离（防御纵深）**：`x-nonce`/`x-timestamp`/`x-auth-token`/`x-aes-encrypted`/`x-encrypted`/`x-agent-version` 不透传上游服务（签名材料即使被携带也不泄漏给被代理服务）；
- **签名口径**：数据面 `/api/proxy/{port}/*` 按空 body 计算摘要（透传体为任意二进制、不缓冲，与 `/api/fileraw` 同款；控制端 tools/control.py `build_signature_message` 同步特判）——bypass 后反代数据路径不参与签名；**`/api/proxy/config` 管理端点无特例**（0.6.7 续批四修正：按十二节 v2 规范签**真实 body**，AES 体签密文——曾与数据面统一按空 body 摘要，导致按规范签名的面板/客户端 401、skill AES 体不解密 422，见 SECURITY-AUDIT 十一、附记）；
- **请求头纵深过滤**：hop-by-hop（connection/keep-alive/transfer-encoding/upgrade/host 等）与 `x-kisama-hub-*`、`x-forwarded-*` 剥除；`x-forwarded-for` 注入真实客户端 IP（过滤后注入，与 hub 侧注入语义一致）；
- **响应原样透传**：响应加密阶段对 `/api/proxy/` 前缀豁免（上游 JSON 响应不会被 AES 包装、不盖 x-encrypted/x-agent-version），content-length 由框架按实长重算，上游 `access-control-*` 剥除（CORS 由本端统一裁定，与 hub 同口径）；
- **py 端会话 `auto_decompress=False`**（响应字节保真，含 content-encoding 头——0.6.7 同步修正 hub 端口反代 py 端的同款行为，与 js/java 对齐：node http / JDK HttpClient 原生不解压）。

### 20.2 白名单与错误映射

- **本地组聚合白名单 = env `KPROXY_PORTS` ∪ 本地运行时列表**（0.6.7 续批六分组口径：本地路由只查本地组，hub 链路只查 HUB 组 = env `KHUB_PORTS` ∪ HUB 运行时；运行时列表经 20.8 API scope 选组设置，注册端口并入 HUB 组见 19.9，KSTORE 持久化重启恢复）；组内两者皆空 = 该组功能禁用；拒绝时 **403 `port_not_allowed` 且不发起连接**（无端口扫描侧信道，与 hub 同语义）；
- 目标固定 `127.0.0.1`，白名单外无任何可达性 → 无任意 SSRF 面；
- 请求体超限 413（响应头未发出，可回 JSON 错误体）；响应体不受 KISAMA_HUB_MAX_BODY 限制（流式，见 20.7）；
- 错误映射（与 hub `relay.go` 对齐），错误体 JSON `{"status":"error","code":...,"message":...}`：

| 条件 | 状态码 | code |
| :--- | :--- | :--- |
| 端口非数字 / 越界（1-65535 外） | 404 | `invalid_port` |
| 端口未在本组白名单放行 | 403 | `port_not_allowed` |
| 请求体超过 KISAMA_HUB_MAX_BODY | 413 | `body_too_large` |
| 回环连接失败（上游不可达） | 502 | `loopback_unreachable` |

### 20.3 实现共享与验收

- **回环转发三层（一份实现多层消费）**：前置检查层（py `_loopback_relay_prepare` / js `relayLoopbackPrepare` / java+java11 `loopbackRelayPrepare`：白名单+请求体超限+URL/头构造）→ **流式原语**（py `loopback_relay_stream` / js `httpRequestStream` / java+java11 `loopbackRelayStream`：本地路由用，响应流式不限大小）→ **缓冲包装**（py `loopback_relay_request` / js `relayLoopbackHttp` / java+java11 `loopbackRelay`：hub `req` 帧用，响应体 ≤ MAX_BODY）；`whitelist=null` 为 hub api 模式（回环 agent 自身端口，跳过白名单）；js `HubTunnelManager._httpRequest` 保留薄委托（模块级 `httpRequestRaw` 兼容既有测试缝）；
- 验收：py `tests/py/test_proxy_route.py`（回环核心/路由/中间件豁免 + 双组白名单 set/merge、注册并入 HUB 组、config 端点 scope 语义）、js `tests/js/test_proxy_route.js`（真实回环集成 + 双组隔离）；四端统一场景 11（tools/control.py `--proxy-route`，纳入 verify_all.py [3.9/6]；agent env `KPROXY_PORTS=58088,58089`——0.6.7 续批六起本地组 env 下限换用新变量，aiohttp 上游起在 control 侧同机部署）——四端实机 17/17 为 2026-11-19（单一白名单形态）验收记录，续批六分组口径实机复验见 UPDATE.MD 对应条目。**注册并入 hub 拓扑实机（2026-11-19，单一白名单形态）**：env `KHUB_PORTS` 为空的 py 节点 `POST /api/hub {"ports":[58088]}` → hub `/etest/58088/echo` 200、未声明端口 403——续批六起并入目标改为 HUB 组（hub 链路仍可达、本地路由查本地组不受影响），复验结论以 UPDATE.MD 条目为准。

### 20.4 与各端框架的差异（如实记录）

- **OPTIONS 透传已四端统一（Owner 拍板「仅反代路径统一」，2026-11-19 落地）**：带预检特征（`Origin` 头，浏览器预检）的 OPTIONS 由 agent 本地应答（统一裁定 CORS，py 为 CORSMiddleware 204、js/java/java11 为 200+CORS 头）；普通 OPTIONS（无 Origin）穿透到反代路由转发上游——py 现状即此语义；js CORS 块加 `/api/proxy/` 前缀 Origin 判断；java/java11 把 proxy 的 options 路由注册提前到 `options("/*")` 之前（Spark 按注册顺序匹配）+ handleProxyRelay 对带 Origin 的预检本地应答；/api/proxy 之外的 OPTIONS 行为零变化（js/java/java11 仍本地 200）；
- **java/java11 端流式读取无空闲超时**（JDK `HttpRequest.timeout` 仅约束到响应头阶段，流读取无限）；py 空闲读超时 = `KISAMA_HUB_RELAY_TIMEOUT`（SSE 心跳刷新保活）、js socket 空闲超时同值；
- **java/java11 端 WS 透传走专属前缀 `/api/proxyws/`**（Spark matcher 会把 upgrade 请求匹配进 `/api/proxy/:port` 的 HTTP 路由——`:port="ws"`——前缀不重叠才落到 WebSocketServlet；py/js 的框架按 scope type 分发、同路径升级即可，但为四端 URL 契约统一，**四端 WS 统一走 `/api/proxyws/{port}/{rest}`**）。

**go 端不做实现**（Owner 指示，2026-11-18）：与 KMODE=3 的 Owner 决策一致，go 端不在本特性实现范围内，矩阵 ❌ 为定论而非遗留项。

### 20.5 支持矩阵

| 能力 | py | js | go | java | java11 |
| :--- | :---: | :---: | :---: | :---: | :---: |
| 本地端口反代路由（HTTP，20.1，流式） | ✅ | ✅ | ❌ | ✅ | ✅ |
| 分组白名单（HUB 组/本地组各 env ∪ 各运行时，20.2/20.8，续批六） | ✅ | ✅ | ❌ | ✅ | ✅ |
| WS 透传（20.6，`/api/proxyws/`） | ✅ | ✅ | ❌ | ✅ | ✅ |
| 同路径 upgrade 嗅探（20.6 续批三，浏览器 WS 直达） | ✅ | ✅ | ❌ | ❌（框架结构性不支持，保持专前缀） | ❌（同左） |
| 白名单 API（20.8，scope 选组，KSTORE 持久化） | ✅ | ✅ | ❌ | ✅ | ✅ |
| 注册端口并入 HUB 组白名单（19.9/20.8，续批六） | ✅ | ✅ | ❌ | ✅ | ✅ |
| 响应加密豁免 + 认证头剥离 + xff 注入 | ✅ | ✅ | ❌ | ✅ | ✅ |

### 20.6 WS 透传 `/api/proxyws/{port}/{rest...}`（0.6.7 续批）

`WS /api/proxyws/{port}/{rest...}`（+ 无 rest 的 `/api/proxyws/{port}`）→ 回环拨 `ws://127.0.0.1:{port}/{rest}`，双向泵 text/binary 保真：

- **白名单唯一门禁**（匿名放行，同 20.1）；拒绝不发起回环连接——py accept 后 `close(1008, "port_not_allowed...")`、js/java/java11 `close(1008)`（各端 close reason 或 HTTP 形态携带 `port_not_allowed`；py 的 ASGI 在 accept 前关闭会被服务器回 HTTP 403，故先 accept 再 close 以携带 close code）；非法端口同款 close 1008 `invalid_port`；
- **拨号头纵深过滤**：hop-by-hop/host 与 `sec-websocket-*` 剥除（防 permessage-deflate 协商错乱）与 agent 认证头剥除；业务头透传；
- **CONNECTING 缓冲**：回环拨号完成前到达的客户端帧先入队、拨号完成后按序发出（0.6.6 线上教训同款）；
- **实现**：py Starlette `@app.websocket` + aiohttp `ws_connect` 双泵（asyncio task）；js express-ws + `ws` 包客户端（事件泵）；java/java11 Jetty `webSocket("/api/proxyws/*")` + JDK `HttpClient.newWebSocketBuilder`（Listener 泵，分片缓冲组装后整帧转发）；
- 与 hub 端口反代的 WS 透传（19.6 `ws_open` 帧）并存：hub 路径走 `ws_*` 帧协议，本地路径走直连泵，白名单分属两组（hub 查 HUB 组、本地查本地组，续批六）；
- **同路径 upgrade 嗅探（0.6.7 续批三，Owner 拍板仅 py/js）**：py/js 额外在 `/api/proxy/{port}[/{rest}]` **同路径**接受 upgrade（与 HTTP 反代共用 URL）——浏览器应用从页面 URL 派生 WS 地址，打到同路径即由同一泵透传。Starlette 按 scope type 分发、同路径天然共存；express-ws 机制（vendored 源码实锤）：ws 包拦截 upgrade 后改写 url 加 `/.websocket` 后缀注入同一条 express 层栈，ws 路由实为 `<route>/.websocket` 的 GET 层——**js 端 ws 层必须注册在 `app.all('/api/proxy/:port...')` 之前**（顺序颠倒 upgrade 会被 HTTP 层先吞）；普通 HTTP 不匹配 `/.websocket` 后缀、落回 app.all（共存不互吞）。java/java11 的 Spark/Jetty WebSocketServlet 按路径前缀**整树接管**、与 HTTP 路由结构性二选一（同路径实测 upgrade 被吞成 `:port="ws"` 404），不支持同路径——**保持 `/api/proxyws/` 专前缀**（URL 契约按端分叉，矩阵如实标注）。拒绝语义两端完全一致：本地组白名单、不发起连接、close 1008。

### 20.7 流式响应（0.6.7 续批）

本地反代路由的响应**边收边回传**（不再缓冲全量）：大文件下载不受 64MB 限制、SSE 逐 chunk 到达（实测 3 chunk 间隔 0.1s 保真）：

- **流式转发原语**（见 20.3 三层）：py aiohttp `resp.content.iter_any()` + `StreamingResponse`（注意：`resp.content` 直接 async-for 是按行 readline，无换行大响应会触发 LineTooLong——必须 `iter_any()`）；js upstream `res.pipe(client res)`；java/java11 `BodyHandlers.ofInputStream()` 边读边写 `res.raw().getOutputStream()`（**逐 chunk flush**——Jetty 缺省聚合缓冲会破坏 chunk 时序，探针实证 raw 写 + return "" 可行）；
- **MAX_BODY 语义**：请求体仍缓冲受限（≤64MB，413）；**响应体不受限制**（响应头已发出无法回 413，截断更糟）；
- **超时**：py 空闲读超时 = `KISAMA_HUB_RELAY_TIMEOUT`（SSE 心跳刷新保活）、js socket 空闲超时同值；java/java11 流读取无空闲超时（20.4 差异）；
- 请求体仍为缓冲转发（请求流式列为后续可选）。

### 20.8 运行时白名单 API `/api/proxy/config`（0.6.7 续批起，验签；续批六 scope 分组）

**分组口径（0.6.7 续批六，Owner 拍板 2026-11-20，修订续批二"单一白名单"）**：反代白名单拆为两组独立管理——**HUB 组**（env `KHUB_PORTS` ∪ HUB 运行时列表，只约束 hub 链路 `/{KNAME}/{PORT}/*`）与**本地组**（env `KPROXY_PORTS` ∪ 本地运行时列表，只约束本地路由 `/api/proxy(/ws)`）。KMODE 只决定 hub 链路是否随启动注册，env 归属不随 KMODE 切换。管理入口统一在本节端点，`scope` 字段区分组。

- **`GET /api/proxy/config`** → `{"status":"ok","hub":{"env_ports":[..],"runtime_ports":[..],"effective_ports":[..]},"local":{...},"kstore_enabled":<bool>}`——两组各自三视图快照（组 env 部署者意愿 / 组运行时列表 / 组聚合生效值）；`scope` 缺省语义不再存在（GET 恒返回两组）；
- **`POST /api/proxy/config`** body `{"ports":[7788,9090],"scope":"local"|"hub"}` —— `scope` 缺省 `"local"`，非法值 422 `invalid_scope`；整体覆盖**所选组**的运行时列表（幂等，非法/越界条目静默过滤），KSTORE 启用时落盘 `data.proxyports` 重启恢复（未启用 → `"persisted":false` 仅内存）；响应 `{"status":"ok","persisted":..,"scope":..,"runtime_ports":[..],"effective_ports":[..]}`（所选组视图）；ports 非数组 → 422 `invalid_ports`；
- **`DELETE /api/proxy/config`** —— 清空所选组运行时回落组 env（env 部分仍生效）：无 `scope` 清**两组**，`?scope=hub|local` 只清一组；非法 scope → 422 `invalid_scope`；响应含两组快照 `{"status":"ok","persisted":..,"scope":"all"|"hub"|"local","hub":{...},"local":{...}}`；
- **生效语义**：各组 `effective = 组 env ∪ 组 runtime`（env 为部署者意愿下限，运行时列表只增；收紧用 DELETE 回落 env）；**即时生效且按链路分组**——hub `req` 帧 port 模式校验（含 HubWSStream）只查 HUB 组，本地路由校验只查本地组；**运行时列表的写入只有两处**——`POST /api/proxy/config`（scope 选组整体覆盖）与 `POST /api/hub` 注册端口并入 **HUB 组**（19.9，注册项成立即生效含 unreachable 退避中，永久拒绝不并入，恢复不重新并入）；
- **验签**：`/api/proxy/config` 不在中间件 bypass（管理端点控制暴露面，必须验签）；签名按**十二节 v2 常规口径**（真实 body 参与摘要，AES 体签密文，与其他路由同管线——0.6.7 续批四起，见 20.1 签名口径）；
- KSTORE 子类型：`data.proxyports`（0.6.7 续批六起**对象形状** `{"hub":[..],"local":[..]}`，照 `data.hubregs` 模式，四端同构；load 兼容旧平铺数组形状并归入本地组）；
- 如实记录：hub 注册帧 `ports` 上报与 `/agents` 页展示仍为注册时快照，动态变更后展示会过时（hub 协议无更新消息，重注册刷新）。
