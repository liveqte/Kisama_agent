# Kisama Agent - Go 实现版本

## 项目结构

```
go/
├── main.go                 # 主程序入口
├── go.mod                  # Go模块定义
├── config/
│   └── config.go          # 配置管理模块
├── crypto/
│   └── crypto.go          # 加密/解密模块
├── middleware/
│   └── auth.go            # 认证和加密中间件
├── handlers/
│   ├── baseinfo.go        # 系统基础信息接口
│   ├── exec.go            # 命令执行接口
│   ├── file.go            # 文件管理接口
│   ├── task.go            # 任务管理接口
│   ├── websocket.go       # WebSocket超级终端
│   └── download.go        # 文件下载接口
├── models/
│   └── models.go          # 数据模型定义
├── logger/
│   └── logger.go          # 日志工具
├── utils/
│   └── system.go          # 系统信息收集工具
└── keys/                  # 密钥目录
    └── agent_ecies_pub.b64  # ECIES公钥
```

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

### 5. models (数据模型)
定义了所有API的请求/响应数据结构:
- 基础响应模型: `BaseResponse`, `CountResponse`
- 系统信息: `BaseInfoResponse`, `StatusResponse`
- 命令执行: `ExecRequest`, `ExecResponse`
- 文件操作: `FileListRequest`, `FileListResponse`, 等
- 任务管理: `OneTimeTaskResponse`, `CronTaskResponse`, 等

### 6. logger (日志工具)
- 支持4个日志级别: DEBUG(0), INFO(1), WARN(2), ERROR(3)
- 彩色输出
- 动态日志级别配置

### 7. utils (工具函数)
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
AGENT_VERSION=0.1.2-go  # 代理版本

# 加密
ECDSA_PUBKEY=...        # ECDSA公钥(可选，或从文件读取)
ECIES_PUBKEY=...        # ECIES公钥(可选，或从文件读取)
```

## 编译和运行

### 编译
```bash
cd go
go build -o agent main.go
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

1. **PTY支持**: 使用 `github.com/creack/pty` 实现真正的终端支持
2. **日志持久化**: 添加文件日志记录
3. **指标收集**: 集成Prometheus metrics
4. **分布式追踪**: 集成OpenTelemetry
5. **性能优化**: 缓存和连接池
