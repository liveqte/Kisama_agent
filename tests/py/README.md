# Terminal WebSocket 测试与加密方案指南

本文档包含了 Terminal WebSocket 控制端与代理端的测试脚本说明，以及基于 Noise 协议的端到端加密（E2EE）方案的使用方法。

## 📁 核心文件说明

### 1. 基础 WebSocket 连接 (明文)
* `test_ws_client.py`：**控制端 (Client)** —— 用于测试基础 WebSocket 连接的 Terminal 控制端。
* `test_ws.py`：**代理端 (Server)** —— 用于测试基础 WebSocket 连接的 Terminal 代理端。

### 2. Noise 协议加密连接 (端到端加密)
* `test_ws_client_noise.py`：**加密控制端 (Client)** —— 测试 WebSocket 连接下的 Terminal 控制端，并使用 Noise 方案进行端到端加密。
* `test_ws_noise.py`：**加密代理端 (Server)** —— 测试 WebSocket 连接下的 Terminal 代理端，并使用 Noise 方案进行端到端加密。

### 3. 密钥生成工具
* `X25516.py`：基础脚本，用于生成 Noise 方案所需的 X25516 密钥对。
* `X25516-class.py`：进阶脚本，提供生成 Noise 方案密钥对的封装类，便于代码复用和集成。

---

## 🚀 快速启动指南

> **💡 提示：** 建议在同一台主机上打开多个独立的终端窗口（Terminal），分别运行密钥生成、代理端和控制端。

### 步骤 1：生成通信密钥
无论是明文测试还是加密测试，建议先初始化密钥环境：
```bash
python3 X25516.py
```
###  步骤 2.1 WebSocket 测试
先生成密钥python X25516.py，在同主机上分别运行控制端和代理端
```bash
uvicorn test_ws:app --reload --host 0.0.0.0 --port 8002
python test_ws_client.py   --url ws://localhost:8002/api/ws/terminal   --request-id test123
```
###  步骤 2.2 Noise 加密 WebSocket 测试
```bash
uvicorn test_ws_noise:app --reload --host 0.0.0.0 --port 8002
python test_ws_client_noise.py   --url ws://localhost:8002/api/ws/terminal   --request-id test123
```