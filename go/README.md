# Kisama Agent - Go 实现版本

## 项目结构

```
go/
├── main.go                 # 主程序入口
├── go.mod / go.sum         # Go模块定义
├── exports_cgo.go          # CGO导出接口（供C/其他语言嵌入调用）
├── exports_nocgo.go        # 无CGO时的空实现
├── config/
│   └── config.go           # 配置管理模块
├── crypto/
│   └── crypto.go           # 加密/解密模块
├── middleware/
│   └── auth.go             # 认证和加密中间件
├── handlers/
│   ├── baseinfo.go         # 系统基础信息接口
│   ├── exec.go             # 命令执行接口
│   ├── shell.go            # 跨平台Shell命令构造（Unix/Windows）
│   ├── file.go             # 文件管理接口
│   ├── download.go         # 文件下载接口
│   ├── task.go             # 任务管理接口
│   ├── tempkey.go          # 临时密钥下发接口
│   ├── proxy.go            # /kisamaproxy 纯转发路由
│   ├── terminal.go         # 终端会话管理（PTY抽象层）
│   ├── terminal_unix.go    # Unix PTY实现
│   ├── terminal_windows.go # Windows ConPTY实现
│   └── websocket.go        # WebSocket超级终端
├── kisama/
│   └── service.go          # Service生命周期与路由注册（含服务化封装）
├── tempkey/
│   └── tempkey.go          # 临时密钥生成与TTL管理
├── models/
│   └── models.go           # 数据模型定义
├── logger/
│   └── logger.go           # 日志工具
└── utils/
    ├── system.go           # 系统信息收集工具
    ├── fileowner_unix.go   # 文件属主查询（Unix）
    └── fileowner_windows.go# 文件属主查询（Windows）
```

> 测试文件（`*_test.go`）与各源文件同目录，未在结构树中列出。
> `keys/` 密钥目录为运行时生成，不入库。

## 模块说明

### 1. config (配置管理)
- **功能**: 加载和管理全局配置
- **关键类型**: `Config`
- **主要功能**:
  - 从环境变量加载配置
  - 生成Noise协议密钥对
  - 生成会话密钥
  - 配置验证

### 2. crypto (加密模块)
- **功能**: 处理所有加密/解密操作
- **关键类型**: `CryptoManager`
- **主要功能**:
  - ECDSA签名验证
  - ECIES公钥加密响应
  - AES-256-GCM解密请求
  - Base64编码/解码

### 3. middleware (中间件)
- **功能**: HTTP请求/响应拦截和处理
- **关键函数**:
  - `AuthEncryptMiddleware`: 认证和加密验证
  - `CORSMiddleware`: 跨域资源共享
  - `ResponseEncrypt`: 响应加密
  - `LoggingMiddleware`: 请求日志记录

### 4. handlers (处理器)
API端点的实现，分为多个文件按功能模块划分:

#### baseinfo.go
- `GET /api/baseinfo` - 获取基础系统信息
- `GET /api/status` - 获取实时系统状态

#### exec.go
- `POST /api/exec` - 执行系统命令

#### file.go
- `POST /api/file/list` - 列表文件
- `POST /api/file/authority` - 查询文件权限
- `PUT /api/file/authority` - 设置文件权限
- `POST /api/file/cat` - 读取文件内容
- `POST /api/file` - 上传文件
- `DELETE /api/file` - 删除文件
- `PUT /api/file` - 移动/重命名文件
- `POST /api/file/cp` - 复制文件
- `POST /api/file/new` - 创建目录

#### task.go
- `GET /api/task/onetime` - 获取一次性任务列表
- `POST /api/task/onetime` - 设置并执行一次性任务
- `POST /api/task/onetime/execute` - 重新执行一次性任务
- `GET /api/task/cron` - 获取定时任务
- `POST /api/task/cron` - 设置定时任务
- `GET /api/task/status` - 获取任务状态
- `GET /api/task/log/onetime` - 获取一次性任务日志
- `GET /api/task/log/cron` - 获取定时任务日志
- `DELETE /api/task/log/onetime` - 清空一次性任务日志
- `DELETE /api/task/log/cron` - 清空定时任务日志
- `GET /api/task/log/summary` - 获取任务日志摘要

#### websocket.go
- `WS /api/ws/:path` - WebSocket终端连接

#### proxy.go
- `ANY /kisamaproxy/*path` - 纯转发路由（对齐kpng的nginx/worker实现：合规检查/CORS/OPTIONS预检/WebSocket隧道/502兜底）
- 白名单机制：仅放行含 `api` 的路由、WebDAV请求（专有方法/请求头/URL特征）及WebSocket握手，其余流量403拒绝
- 不参与本Agent的认证体系（纯转发语义）

#### tempkey.go
- `GET /api/tempkey` - 下发临时密钥对（带TTL，供短期接入使用）

> shell.go / terminal.go / terminal_unix.go / terminal_windows.go 为内部实现：
> shell.go 负责跨平台Shell构造（Unix用 `/bin/sh -c`，Windows用 `cmd.exe /C`）；
> terminal 系列抽象PTY层，Windows优先ConPTY伪控制台，旧系统自动回退管道模式。

### 5. models (数据模型)
定义了所有API的请求/响应数据结构:
- 基础响应模型: `BaseResponse`, `CountResponse`
- 系统信息: `BaseInfoResponse`, `StatusResponse`
- 命令执行: `ExecRequest`, `ExecResponse`
- 文件操作: `FileListRequest`, `FileListResponse`, 等
- 任务管理: `OneTimeTaskResponse`, `CronTaskResponse`, 等

### 6. kisama (服务化封装)
- **关键类型**: `Service`, `Options`
- **主要功能**:
  - 组合 config/crypto/middleware/handlers，提供完整的Service生命周期管理
  - 路由注册（`registerRoutes`），含 `/kisamaproxy` 转发路由与 `/api/tempkey`
  - 优雅关停（信号处理）

### 7. tempkey (临时密钥)
- **关键类型**: `Manager`, `Entry`
- **主要功能**:
  - 生成带TTL的临时ECDSA/ECIES密钥对
  - 过期自动清理（与Python/JS/Java版本语义一致）

### 8. logger (日志工具)
- 支持4个日志级别: DEBUG(0), INFO(1), WARN(2), ERROR(3)
- 彩色输出
- 动态日志级别配置

### 9. utils (工具函数)
- `GetSystemInfo()` - 收集基本系统信息
- `GetSystemStatus()` - 获取实时系统状态
- `GetPublicIPv4()` / `GetPublicIPv6()` - 获取IP地址
- 文件和网络工具函数

## 环境变量配置

```bash
# 执行
EXEC_TIMEOUT=30           # 命令执行超时（秒）
EXEC_SHELL=true          # 使用shell执行
DEBUG=false              # 调试模式

# 认证
TIMESTAMP_WINDOW=30      # 时间戳窗口（秒）

# 日志
LOG_LEVEL=2              # 日志级别 (0-3)

# 文件
FILE_ROOT=/home          # 文件根目录
MAX_UPLOAD_SIZE=104857600 # 最大上传大小（字节）
FOLLOW_SYMLINKS=false    # 跟踪符号链接
FILE_AUDIT_LOG=true      # 文件审计日志

# 任务
TASK_TIMEOUT=300         # 任务超时（秒）
CRON_INTERVAL=30         # Cron检查间隔（秒）
MAX_TASK_LOG=100         # 最大任务日志条数

# 服务器
HOST=0.0.0.0            # 绑定地址
PORT=8000               # 监听端口
AGENT_VERSION=0.4.7-go  # 代理版本

# 加密
ECDSA_PUBKEY=...        # ECDSA公钥(可选，或从文件读取)
ECIES_PUBKEY=...        # ECIES公钥(可选，或从文件读取)
```

## 编译和运行

### 编译
```bash
cd go
go build -o agent main.go

# 或使用构建脚本/Makefile（多平台产物，含UPX压缩与musl静态编译）
./build.sh
make
```

### Docker
```bash
docker-compose up -d
```

### 运行
```bash
./agent
# 或带参数
DEBUG=true LOG_LEVEL=0 ./agent
```

## API调用示例

### 获取基础信息
```bash
curl -X GET http://localhost:8000/api/baseinfo \
  -H "X-Nonce: $(openssl rand -hex 16)" \
  -H "X-Timestamp: $(date -u +%s)" \
  -H "X-Auth-Token: <signature>"
```

### 执行命令
```bash
curl -X POST http://localhost:8000/api/exec \
  -H "Content-Type: application/json" \
  -d '{"cmd":"ls -la","cwd":"/tmp"}' \
  -H "X-Nonce: ..." \
  -H "X-Timestamp: ..." \
  -H "X-Auth-Token: ..."
```

### 列表文件
```bash
curl -X POST http://localhost:8000/api/file/list \
  -H "Content-Type: application/json" \
  -d '{"path":"/tmp","recursive":false}' \
  -H "X-Nonce: ..." \
  -H "X-Timestamp: ..." \
  -H "X-Auth-Token: ..."
```

## 与JavaScript版本的主要区别

1. **编译vs解释**: Go是编译语言，提供更好的性能和内存效率
2. **并发处理**: Go的goroutine天生适合处理大量并发连接
3. **性能**: 通常比Node.js快3-5倍
4. **内存占用**: 显著低于Node.js
5. **部署**: 单一可执行文件，无需运行时依赖
6. **类型安全**: 编译时类型检查，减少运行时错误

## 主要依赖库

- `gin-gonic/gin` - Web框架
- `gorilla/websocket` - WebSocket支持
- `shirou/gopsutil` - 系统信息收集
- `robfig/cron` - 定时任务
- `ecies/go` - ECIES加密
- `golang.org/x/crypto` - 密码学原语

## 扩展建议

1. **日志持久化**: 添加文件日志记录
2. **指标收集**: 集成Prometheus metrics
3. **分布式追踪**: 集成OpenTelemetry
4. **性能优化**: 缓存和连接池
