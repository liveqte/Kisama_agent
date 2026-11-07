# Kisama_agent
Kisama_Panel的agent

这是一个Kisama_Panel代理端，内置 API 管理器，专注于集中化管理服务与接口。所有通信均采用端到端加密，即便在 HTTP 环境下也能保障数据传输安全，避免敏感信息泄露。

## 内置加密 DNS（🆕 防DNS污染，`KISAMA_DNS` 开关）

节点本地 DNS 被污染/劫持导致 argo 临时隧道、外网 IP 探测失败时，设 `KISAMA_DNS=on` 让 agent 全部出站域名解析改走内置 DoH（DNS over HTTPS，缺省链 阿里 223.5.5.5 → Cloudflare 1.1.1.1 → Google 8.8.8.8，可用 `KISAMA_DOH_SERVERS` 自定义）；缺省 `off` 零行为变化。覆盖 argo 隧道（注册 + edge）、baseinfo IP 探测、shz.al 上报与 Go 版 /kisamaproxy 上游；纯标准库零依赖，证书校验零降级。详见 `docs/API.MD` 第十八节。

## KMODE 启动模式（🆕 0.4.8 新增支持特性，KMODE=2 为 0.4.8 后期迭代新增）

### 什么情况下应该使用

KMODE 解决的核心问题是：**目标机器没有可对外开放的公网端口、也没有可公网访问的域名，但你需要在上面部署 Kisama Agent 并让控制端连上来。**

典型场景：
- 只有一台内网/容器/虚拟主机（如翼龙面板游戏容器、家用宽带机器），无公网 IP 或端口无法开放；
- 机器可以主动访问外网，但外部无法主动连入（NAT 后、无备案域名、无 TLS 证书）。

KMODE 借助 trycloudflare 临时隧道（无需自有域名与证书）把 agent 暴露为一个临时公网地址，并把该地址以两种方式之一"交递"给控制端——这正是 KMODE=1 与 KMODE=2 的区别。

> 支持版本：Python / Node.js / Java / Java11 四版；Go 版未实现，设置 KMODE 不产生任何效果。

### 配置方法

通过启动 agent 前设置环境变量开启，例：

```bash
# KMODE=1：域名写入文件 + stdin 指令（翼龙等可交互环境推荐）
KMODE=1 python agent.py
# 可选：自定义域名文件路径（缺省 $HOME/domain.txt）
KMODE=1 KPATH=$HOME/.cache/domain.txt python agent.py

# KMODE=2：shz.al 静默上报（无法读取文件/标准输入的环境推荐）
KMODE=2 KNAME=env01a python agent.py
# KNAME 不够唯一或需与读值分离时，显式指定密钥
KMODE=2 KNAME=env01a KNAME_KEY=s3cret-key python agent.py
```

环境变量一览：

| 环境变量 | 默认值 | 说明 |
| :--- | :--- | :--- |
| `KMODE` | `0` | `0`=普通启动；`1`=自动创建隧道+写域名文件+stdin 指令监听；`2`=自动创建隧道+shz.al 静默上报；`2q`/`2quic`=等同 `2` 且边缘传输走 QUIC（大小写不敏感，js/py/java） |
| `KPATH` | `$HOME/domain.txt` | 仅 KMODE=1：域名文件写入路径，支持 `$HOME`/`~` 前缀 |
| `KNAME` | 无 | 仅 KMODE=2：shz.al 自定义名（≥3 字符，限字母数字及 `+_-[]*$=@,;/`），部署前需预先约定好 |
| `KNAME_KEY` | 复用 `KNAME` | 仅 KMODE=2：上报管理/修改密钥 |

注意：KMODE=2 下 `KNAME` 缺失或非法时静默退化为普通启动（等同 KMODE=0），不会报错。

### 开启 KMODE 后如何查看临时域名

**KMODE=1（翼龙控制台场景）**——两条途径任选：
1. **发送 stdin 指令**：在翼龙（Pterodactyl）等面板的控制台里向 agent 标准输入发送指令 `/domain`，agent 会立刻在控制台输出当前隧道域名（形如 `https://xxxx.trycloudflare.com`）。隧道尚未就绪时会输出提示语，稍候重发即可。
2. **查看域名文件**：直接读取 `KPATH` 指定的文件（缺省 `$HOME/domain.txt`），文件内容即隧道域名。控制端第一次成功请求 `/api/baseinfo` 后该文件会被自动删除（用于判断控制端已通过隧道连入）。

**KMODE=2（无需控制台/文件）**——控制端用事先约定的 KNAME 直接计算 URL：
```
https://shz.al/~<KNAME>
```
例如 `KNAME=env01a`，则 `curl https://shz.al/~env01a` 的响应体就是该环境的隧道域名；未上报时返回 404，轮询直至 200 即可。代理每次重启会自动覆盖更新同一 URL 的值（409→PUT），因此**预测 URL 永远指向最新域名**；持有 `KNAME_KEY` 的一方也可自行改写或删除该值。上报值 7 天后自动过期。

## Argo 隧道 QUIC 边缘传输（🆕 0.6.2 新增，js/py/java 三端）

argo 临时隧道的云边长连接此前固定走 h2 over TCP/7844，现可按需切换 QUIC（UDP/7844，与 cloudflared 同款传输）：UDP 可用但 TCP/7844 被干扰的网络下更稳。缺省仍为 h2，零行为变化。

### 开启方式

**方式一：KMODE 后缀（仅影响启动自动创建的隧道）**

```bash
# KMODE=2q / 2quic（大小写不敏感）：语义等同 KMODE=2，边缘传输改走 QUIC
KMODE=2q KNAME=env01a python agent.py
```

**方式二：/api/argo 请求体字段（每条隧道独立选择）**

```bash
curl -X POST https://<agent>/api/argo -d '{"port": 8080, "quic": true}'
# 响应与 GET /api/argo 列表均新增 "transport": "quic"（缺省 false 走 h2）
```

### 行为说明

- QUIC 传输为手写 QUIC v1 + TLS 1.3（零依赖）：UDP/7844，SNI `quic.cftunnel.com`，ALPN `argotunnel`，边缘证书软校验与 h2 同级（`KISAMA_EDGE_INSECURE=true` 共用豁免语义）。
- 自动回退：QUIC 连续 `KISAMA_ARGO_REREGISTER_AFTER`（缺省 5）轮建连失败自动回退 h2（同一注册凭据无需重注册），重启进程恢复 QUIC；UDP 被墙环境可长期稳定回退运行。
- 版本支持：js / py / java 已实机验证（QUIC 注册 + HTTP + WebSocket 全链路）；java11 解析 `2q` 但建连仍走 h2（QUIC 适配后续批次）；Go 版 KMODE 未实现。
- 详见 `docs/API.MD` 第九节。

---

## 任务持久化（🆕 0.5.7 新增支持特性，五语言统一）

启动任务与定时任务现支持**加密持久化到本地**（默认关闭，注入 `KSTORE_KEY` 即启用）：agent 重启后任务自动恢复，启动任务由 agent **本地自动执行**、定时任务本地恢复调度，全程不需要远端连接（离线自治）。此前任务纯内存存储，重启即失。

### 配置方法

```bash
# 必需：注入 32 字节持久化密钥（hex 64 字符或 base64，不落盘）
export KSTORE_KEY=$(openssl rand -hex 32)

# 可选：存储文件路径（缺省 $HOME/.tmp/store.enc，目录自动创建）
export KSTORE=$HOME/.tmp/store.enc

# 可选：显式关闭持久化
export KSTORE=off
```

未设置 `KSTORE_KEY` 或密钥非法时，持久化自动关闭（fail-closed，绝不降级明文落盘），agent 其余功能不受影响。例外：用 `go/kisama_service.sh` / `kisama_service.ps1` 部署服务时，未注入密钥则脚本自动生成随机密钥写入同目录 `agent.env`（0.6.2 起），该部署形态下持久化默认启用。

### 行为说明

- 任务定义在每次 POST `/api/task/onetime`、`/api/task/cron`（含清空）后原子落盘；文件为 AES-256-GCM 加密密文（容器与 0.5.6 响应加密一致），**仅拿到存储文件无法还原任务内容**。
- 重启后：任务列表自动恢复；启动任务在后台执行一次（结果可在 `/api/task/log/onetime` 查证）；定时任务恢复调度。
- 启动任务每个生命周期只自动执行一次（启动恢复执行或首次 POST 执行二选一，不会叠加）；需要强制重跑用 `POST /api/task/onetime/execute`。
- 存储文件损坏或密钥不匹配时自动隔离改名（`store.enc.bad-*`）并以空任务启动，绝不影响 agent 启动与运行。
- 更换 `KSTORE_KEY` 后旧存储无法解密（任务丢失，需重新下发任务）。
