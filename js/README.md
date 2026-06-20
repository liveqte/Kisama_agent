# Kisama Agent - Node.js Implementation

这是 Kisama Agent 的 Node.js 实现版本，提供了与 Python 版本相同的 API 接口。

## 安装依赖

```bash
cd js
npm install
```

## 运行

```bash
# 开发模式 (带调试)
DEBUG=true npm start

# 生产模式
export ECDSA_PUBKEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export ECIES_PUBKEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
npm start
```

## 环境变量

- `PORT`: 服务器端口 (默认: 8000)
- `HOST`: 绑定地址 (默认: 0.0.0.0)
- `DEBUG`: 调试模式 (默认: false)
- `EXEC_TIMEOUT`: 命令执行超时时间(秒) (默认: 30)
- `TIMESTAMP_WINDOW`: 时间戳窗口(秒) (默认: 30)
- `ECDSA_PUBKEY`: ECDSA 公钥 PEM 格式
- `ECIES_PUBKEY`: ECIES 公钥 Base64 格式
- `FILE_ROOT`: 文件操作根目录 (默认: 用户主目录)
- `MAX_UPLOAD_SIZE`: 最大上传文件大小(字节) (默认: 100MB)

## API 接口

所有 API 接口与 Python 版本保持一致：

### 基础信息模块
- `GET /api/baseinfo` - 获取代理基础信息
- `GET /api/status` - 获取实时监控信息

### 命令执行模块
- `POST /api/exec` - 执行系统命令

### 文件管理模块
- `POST /api/file/list` - 列出文件/目录
- `POST /api/file/authority` - 查询文件权限
- `POST /api/file/cat` - 查看文件内容
- `POST /api/file` - 上传文件
- `POST /api/file/download` - 下载文件
- `DELETE /api/file` - 删除文件
- `PUT /api/file` - 移动/重命名文件
- `POST /api/file/cp` - 复制文件
- `POST /api/file/new` - 新建目录

### 任务管理模块
- `GET /api/task/onetime` - 获取一次性任务
- `POST /api/task/onetime` - 设置一次性任务
- `GET /api/task/cron` - 获取定时任务
- `POST /api/task/cron` - 设置定时任务
- `GET /api/task/status` - 获取任务状态
- `GET /api/task/log/onetime` - 获取一次性任务日志
- `GET /api/task/log/cron` - 获取定时任务日志
- `DELETE /api/task/log/onetime` - 清空一次性任务日志
- `DELETE /api/task/log/cron` - 清空定时任务日志
- `GET /api/task/log/summary` - 获取日志统计
- `POST /api/task/onetime/execute` - 手动触发一次性任务

### 超级终端
- `WebSocket /api/ws/terminal` - WebSocket 终端 (开发中)

## 安全说明

所有接口都受 AuthEncryptMiddleware 保护，需要携带签名认证头：
- `X-Nonce`: 单次随机值
- `X-Timestamp`: UTC 时间戳
- `X-Auth-Token`: ECDSA 签名 (Base64)

响应体默认经过 ECIES 加密传输。

## 开发状态

✅ 已实现:
- 基础信息和状态监控
- 命令执行
- 文件管理 (基础功能)
- 任务管理
- 认证和加密中间件
- WebSocket 终端
- 文件上传/下载
- 高级文件操作

## 依赖库

- `express`: Web 框架
- `systeminformation`: 系统信息收集
- `node-cron`: 定时任务
- `express-ws`: WebSocket 支持
- `node-forge`: 加密算法
- `base64-js`: Base64 编解码
- `elliptic`: 压缩ecdsa公钥加载