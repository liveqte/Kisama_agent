# Kisama Agent

Kisama_Panel 的代理端（agent）。在被管机器上常驻运行，把系统命令、文件管理、任务调度、交互式终端等能力以一组加密 API 提供给控制端（Kisama Panel / kisama-skill / 自建脚本）。所有 `/api/*` 通信采用端到端加密——即便在无 TLS 的纯 HTTP 环境下传输也不会明文过网。

同一份契约有多套实现，行为逐条对齐，按部署环境任选其一：

| 实现 | 入口 | 适用 |
| --- | --- | --- |
| Python | `py/agent.py` | 通用 |
| Node.js | `js/agent.js` | 通用 |
| Go | `go/`（单静态二进制） | 通用，服务化部署首选 |
| Java / Java11 | `java/`、`java11/`（可执行 jar） | JVM 环境；Bukkit 插件宿主支持构建期烘焙配置 |
| PHP | 独立仓库 `kisamaphp`（cPanel 等虚拟主机） | 仅虚拟主机场景，功能子集 |

> 五端（py / js / go / java / java11）为主力实现；PHP 端不在本仓库，能力差异见文末支持矩阵。

## 快速开始

### 运行与端口

各实现均为单进程启动，缺省监听 `8000` 端口：

```bash
python py/agent.py          # Python
node js/agent.js            # Node.js
./agent                     # Go 单二进制
java -jar kisama.jar        # Java / Java11
```

- 监听端口经环境变量指定，优先级 `KPORT` > `PORT` > `SERVER_PORT`，均未设置时为 8000；`HOST` 控制绑定地址。
- `DEBUG=true` 进入调试模式（日志全量、响应明文并下发密钥），仅供排查，生产环境禁用。

### 获取产物

- **服务脚本自动下载**：`go/kisama_service.sh` / `kisama_service.ps1`（见下节）自动从本仓库拉取 Go 预编译二进制（linux amd64 / arm64）；
- **release 分支与版本 tag**：CI 自动构建全语言产物推送到 `release` 分支，随版本发布 tag；
- **Docker**：多架构镜像 CI 自动发布到 GHCR：`ghcr.io/liveqte/kisama_agent:latest`（对应 `go/Dockerfile` 与 `docker-compose.yml`）。

### `.env` 自举文件

容器 / 托管环境不便注入环境变量时，把 `.env` 与可执行文件放同一目录即可完成全部配置（`KPORT`、`KMODE`、`KSTORE_KEY`、`LOG_LEVEL` 等全部环境变量）。解析规则：真实环境变量优先，`.env` 只填补空缺；支持 `#` 注释行与 `export ` 前缀、成对引号剥离；不处理行内注释（保护含 `#` 的值）。五端实现逐条一致（py / js / java / java11 既有，0.6.2 起 Go 补齐）。

### 服务化部署（Go 版）

`go/kisama_service.sh`（Linux）与 `go/kisama_service.ps1`（Windows）一键完成下载与常驻：

- 探测 init 系统注册服务（systemd / OpenRC），无 root 或无 init 时退化为 setsid + nohup 后台启动；
- 自动拉取最新 release 二进制（版本号取正式版与预发布版中更大者），直连失败自动回退 GitHub 加速链（ghproxy 系镜像 / jsDelivr，`KISAMA_GH_MIRROR` 显式覆盖）；
- 未注入 `KSTORE_KEY` 时自动生成随机密钥写入同目录 `agent.env`（该部署形态下任务持久化默认启用）。

```bash
sh go/kisama_service.sh help     # 指令与选项完整说明
sh go/kisama_service.sh start --dir /opt/kisama --port 8000
```

## 核心接口

日常运维走的都是这组接口。完整契约（请求 / 响应字段、示例）见 `docs/API.MD`。

| 能力 | 端点 | 说明 |
| --- | --- | --- |
| 基础信息 | `GET /api/baseinfo` | 主机静态快照（os、ipv4、marks、noise_key 等），两级缓存，匿名白名单 |
| 实时监控 | `GET /api/status` | CPU / 内存 / 负载等实时指标 |
| 命令执行 | `POST /api/exec` | 执行 shell 命令并返回输出 |
| 文件管理 | `/api/file/*` 系列共 12 个端点 | 列目录、查 / 设权限、读文本、上传（裸二进制流）、下载、批量删除、批量移动 / 复制、新建目录、ZIP 解压 / 压缩 |
| 启动任务 | `/api/task/onetime*` | 一次性任务的下发、查询、手动触发、日志 |
| 定时任务 | `/api/task/cron*` | cron 任务的下发、查询、日志、清空 |
| 任务日志 | `/api/task/log/*` | 任务状态、执行日志与统计摘要 |
| 超级终端 | `/api/ws/*`（WebSocket） | 完整双向 PTY 终端，见下文 |
| 临时密钥 | `GET /api/tempkey` | 第三方临时授权，见下文 |

任务由 agent 本地调度执行，控制端不必在线；核心能力五端（py / js / go / java / java11）行为一致。

### 认证与加密

- 除 `/api/baseinfo`、`/api/status` 与 Go 版 `/kisamaproxy`（纯转发）外，所有接口受认证加密中间件保护：请求必须携带 `X-Nonce` / `X-Timestamp` / `X-Auth-Token` 三个签名头（ECDSA P-256）。
- 响应体默认加密：`/api/baseinfo` 走 ECIES，其余端点走会话密钥对称加密（0.5.6 起）；响应头 `x-encrypted` 标示当前模式，控制端按判定表处理。
- WebSocket 终端不经过 HTTP 认证中间件，加密与认证方式由控制端按目标 scheme 绑定（见下文「超级终端」）。

### 超级终端（WebSocket）

`/api/ws/*` 建立完整双向 PTY 终端：无 TLS 传输走 Noise XX 端到端加密握手；TLS（wss）传输下可携带 token 走明文降级认证，也可强制 Noise 叠加端到端加密。**代理端不感知自身对外 scheme**，传输与认证的绑定是控制端的责任（非 TLS 一律 Noise 且禁止携带 token），规范见 `docs/API.MD` 第 24 节。支持 welcome 元数据帧与 incognito 无痕会话（shell 历史不落盘）。

### 临时密钥（第三方临时授权）

`GET /api/tempkey?ttl=24[&format=short]` 签发一对临时 ECDSA（P-256）+ ECIES（secp256k1）密钥，供 AI Agent、协作者等第三方在有效期内连接本代理，而无需交出控制端静态密钥：

- ttl 1~168 小时；有效期内重复请求幂等返回同一对；请求不同 ttl 即轮换（旧密钥立即作废）；
- `format=short` 输出面向 AI 消费者的短格式（0.5.8 起六端统一）；
- 第三方持临时私钥按与静态密钥完全一致的签名流程调用，agent 自动识别签名来源并按对应公钥加密响应。

### 任务持久化（KSTORE，默认关闭）

```bash
export KSTORE_KEY=$(openssl rand -hex 32)   # 必需：注入 32 字节密钥即启用
export KSTORE=$HOME/.tmp/store.enc          # 可选：存储路径；KSTORE=off 显式关闭
```

- 任务每次变更后 AES-256-GCM 加密原子落盘；agent 重启自动恢复：启动任务本地自动执行一次、定时任务恢复调度，全程离线自治、不需要控制端连接。
- fail-closed：无密钥或密钥非法时持久化自动关闭，绝不降级明文落盘，其余功能不受影响；存储文件损坏或密钥不匹配时自动隔离改名（`store.enc.bad-*`）并以空任务启动。
- 更换 `KSTORE_KEY` 后旧存储无法解密（任务丢失，需重新下发）。
- 经 `kisama_service.sh` / `ps1` 部署服务时未注入密钥会自动生成（见上节），该形态下默认启用。

## 公网接入：KMODE 启动模式

### 什么时候需要 KMODE

KMODE 解决的核心问题：**目标机器没有可对外开放的公网端口、也没有可公网访问的域名，但需要在上面部署 agent 并让控制端连上来。** 典型场景：翼龙（Pterodactyl）面板游戏容器、家用宽带、NAT 后无备案域名的机器——机器可以主动访问外网，外部无法主动连入。

KMODE 借隧道 / 中继把 agent 借道公网暴露，并按模式用不同方式把接入地址"交递"给控制端。支持实现：py / js / java / java11；Go 版未实现 KMODE（设值无任何效果），PHP 端亦无。

### KMODE=1：域名文件 + stdin 指令

适用于能读文件或能向标准输入发指令的交互式环境（翼龙控制台）。启动自动创建 trycloudflare 临时隧道（转发 agent 自身监听端口），域名写入文件：

```bash
KMODE=1 python agent.py                                     # 域名写入缺省 $HOME/domain.txt
KMODE=1 KPATH=$HOME/.cache/domain.txt python agent.py       # 自定义路径
```

获取隧道域名两条途径任选：

1. 在控制台向 agent 标准输入发送指令 `/domain`，agent 立即输出当前隧道域名（未就绪时稍候重发）；
2. 直接读取域名文件——控制端第一次成功请求 `/api/baseinfo` 后该文件自动删除（可借此判断控制端已通过隧道连入）。

### KMODE=2：shz.al 静默上报

适用于读不到文件、发不了 stdin 的托管环境。控制端凭事先约定的 `KNAME` 直接计算固定 URL，无需任何文件或控制台交互：

```bash
KMODE=2 KNAME=env01a python agent.py                        # 最简配置，密钥复用 KNAME
KMODE=2 KNAME=env01a KNAME_KEY=s3cret-key python agent.py   # 需与读值分离时显式指定密钥
```

- 隧道建好后向 `https://shz.al/` 上报（POST，409 冲突自动改 PUT 覆盖），此后每次重启自动覆盖更新同一 URL；记录 7 天后过期。
- 控制端读取：`curl https://shz.al/~env01a`，响应体即隧道域名（未上报时 404，轮询至 200）；持有 `KNAME_KEY` 的一方也可自行改写或删除该值。
- 平台要求管理密钥 ≥8 字符（`KNAME_KEY` 缺省复用 `KNAME`），过短时上报被拒但 agent 仍正常启动。
- 全程静默：不写文件、不监听 stdin、不向控制台输出任何域名；`DEBUG=true`（或 `SHZAL_DEBUG=true`）时输出上报过程日志用于排查。
- `KNAME` 缺失或非法时静默退化为普通启动（等同 KMODE=0），不报错。
- 安全口径：预测 URL 无认证即可读，暴露的只是隧道域名本身；agent 接口仍有完整认证与加密，风险面与 KMODE=1 写本地文件相当。

### KMODE=2q / 2quic：QUIC 边缘传输

`KMODE=2q`（或 `2quic`，大小写不敏感）语义等同 `KMODE=2`，仅云边长连接改走 QUIC（UDP/7844，与 cloudflared 同款传输），UDP 可用但 TCP/7844 被干扰的网络下更稳：

- 手写 QUIC v1 + TLS 1.3 零依赖实现；缺省仍为 h2，零行为变化；
- 自动回退：QUIC 连续 5 轮建连失败自动回退 h2（同一注册凭据无需重注册），重启进程恢复 QUIC；
- py / js / java 已实机验证（注册 + HTTP + WebSocket 全链路）；java11 解析该值但建连仍走 h2。

`/api/argo` 动态创建的隧道也可逐条选择 QUIC（请求体 `"quic": true`，见下文）。

### KMODE=3：kisama-hub 自建公网中继

不依赖 trycloudflare：agent 向自建的公网汇聚服务 **kisama-hub**（独立 Go 仓）建立一条出站 WebSocket 长连接，借 hub 的公网线路对外开放三类流量——`/api` 中继、指定端口 HTTP 服务反代（含 WS 透传）、交互终端中继。验签与响应加密端到端不变，hub 纯传输层看不到任何业务明文。适合隧道端口被禁用或网络连接受限的环境。

```bash
KMODE=3 KHUB=https://hub.example.com KNAME=myhost KHUB_PORTS=7788 python agent.py
# shz.al 公开读值地址也可作为 KHUB；agent 每次连接前读取响应体取得真实 Hub
KMODE=3 KHUB=https://shz.al/~myhub KNAME=myhost KHUB_PORTS=7788 python agent.py
# 可选：hub 处于反代/隧道之后、自行推导的公网基址不准时，由 agent 注册时上报修正
KHUB_PUBLIC_URL=https://实际公网基址
```

- 接入地址即 `https://<真实hub>/<KNAME>`；hub 提供 `/agents` 注册列表页与 `/sub` 订阅（`kisama://` 连接串，可逐条复制或经面板「导入配置」批量接入）。
- `KNAME` 单个 hub 内唯一（2~63 字符，小写字母 / 数字 / 连字符）；活跃连接在位时注册返回 `name_taken`，不发生抢占。
- 断线按指数退避自动重连（2s 起步、60s 封顶）；hub 重启后 agent 自动重连重注册。使用 shz.al 别名时，**每次 attempt 都重新 GET**；解析失败不拨号，下一轮继续重试，绝不复用旧解析结果。最后成功值仅用于 `GET /api/hub` 的 `resolved_hub` 展示。
- 端口反代白名单由 `KHUB_PORTS`（env 下限）∪ 运行时列表聚合而成，缺省空 = hub 链路端口反代禁用；拒绝 403 且不发起连接。
- 运行状态经 `GET /api/hub` 查询（隧道三态、注册表、中继计数、原 `hub` 与 `resolved_hub`）。
- shz.al 别名解析使用严格 TLS、禁重定向、15s 总超时与 4096 字节响应上限；paste 内容决定出站 Hub 目的地（含 HTTP(S) 内网地址），属已登记的信任取舍。
- 协议、envelope 与 hub 部署见 `docs/API.MD` 第十九节；hub 源码见 kisama-hub 仓库。

### 模式速查与环境变量

| 模式 | 公网通道 | 控制端如何拿到地址 | 典型场景 |
| --- | --- | --- | --- |
| `0`（默认） | 不建隧道 | 直接访问 agent 监听端口 | 有公网端口 / 域名的机器 |
| `1` | trycloudflare | 读域名文件，或发 `/domain` stdin 指令 | 翼龙等可交互面板 |
| `2` | trycloudflare | `https://shz.al/~KNAME` 预测 URL | 读不到文件 / stdin 的托管环境 |
| `2q` / `2quic` | trycloudflare（QUIC 边缘） | 同 KMODE=2 | UDP 可用但 TCP 被干扰的网络 |
| `3` | 自建 kisama-hub | `https://<hub>/<KNAME>` 或 hub `/sub` 订阅 | 隧道端口被禁用、网络连接受限 |

| 环境变量 | 默认值 | 说明 |
| --- | --- | --- |
| `KMODE` | `0` | 启动模式开关（取值见上表） |
| `KPATH` | `$HOME/domain.txt` | 仅 KMODE=1：域名文件写入路径 |
| `KNAME` | 无 | KMODE=2：shz.al 上报名；KMODE=3：hub 注册名 |
| `KNAME_KEY` | 复用 `KNAME` | 仅 KMODE=2：上报管理密钥（≥8 字符） |
| `KHUB` | 无 | 仅 KMODE=3：hub 基址或 `https://shz.al/~name` 别名（每次重连重新解析；hub 前缀模式可用根地址或带前缀地址） |
| `KHUB_PUBLIC_URL` | 缺省取本轮真实 Hub 基址 | 仅 KMODE=3：注册时上报的公网基址修正值；合法时优先，别名的缺省值为解析结果而非 shz.al URL |
| `KHUB_PORTS` | 空 | 仅 KMODE=3：hub 链路端口反代白名单（逗号分隔，空 = 禁用） |

## 隧道与反代进阶

除 KMODE 的启动期行为外，隧道与端口转发还有一组运行时接口（py / js / java / java11 实现；Go 版无此模块，仅保留下述 KisamaProxy）。

### Argo 临时隧道 API

- `GET /api/argo`：查询隧道列表（含边缘传输方式与 shz.al 绑定状态）；
- `POST /api/argo`：创建临时隧道，可转发任意本地端口；`"quic": true` 逐条选择 QUIC 边缘传输；`shz` / `shz_name` / `shz_key` 创建即绑定 shz.al 上报；
- `DELETE /api/argo`：删除隧道（带绑定的隧道同步清持久化并后台删除远端 shz.al 记录）；
- `POST /api/argo/bind` / `DELETE /api/argo/bind`：给已有隧道绑定 / 解绑 shz.al 上报。上报名缺省派生 `KNAME-端口`、管理密钥缺省派生 `上报名+"123"`，均可显式覆盖；KSTORE 启用时绑定持久化（`data.argobinds`），agent 重启自动重建隧道且上报名分毫不差。KMODE=1/2 自建隧道不进持久化、不可被动态绑定（防两处管理同一隧道）。

隧道断线由守护自愈：指数退避重注册，状态透明上报（面板灰显）。

### 本地端口反代 `/api/proxy/{port}`

`ANY /api/proxy/{port}/{rest...}` 把请求反代到 agent 本机 `127.0.0.1:{port}`；WS 经 `/api/proxyws/{port}/{rest}` 透传（py / js 另在同路径支持 upgrade 直达）。

- 响应流式回传：大文件下载不受 64MB 上限约束，SSE 逐 chunk 保真；
- 白名单唯一门禁：本地组白名单 = env `KPROXY_PORTS` ∪ 运行时列表（经 `GET/POST/DELETE /api/proxy/config` 管理，KSTORE 持久化），缺省空 = 禁用；拒绝 403 且不发起连接（无端口扫描侧信道）；
- 目标固定回环，白名单外无任何可达性（无任意 SSRF 面）；agent 认证头不透传上游服务。

### hub 动态注册 `/api/hub`

不依赖 KMODE=3 启动配置，运行时动态指挥 agent 注册 / 注销到 kisama-hub：

- `POST /api/hub {"hub","kname","ports"}`：同步等待注册结果（15s 超时）；`hub` 同样支持 shz.al 别名；网络类失败保留注册项并按指数退避自治重连，后续查 `GET /api/hub` 即可；
- `DELETE /api/hub`：注销并清除持久化；
- 注册项 KSTORE 持久化（`data.hubregs`）并保存原配置（包括原别名），agent 重启后重新解析、自动恢复；注册携带的端口自动并入 hub 链路反代白名单（本地组不受影响）。

### KisamaProxy 转发器（仅 Go 版）

`/kisamaproxy/<目标URL>` 把请求原样转发到路径中编码的上游地址（任意 HTTP 方法，含 WS 升级），无需认证、不参与加密链路（URI 须含 `api` 字样）。常用于借 agent 的出口网络访问其他 agent / 上游 API，等价于 kpng 的同名路由。上游 TLS 证书缺省不校验（透明中转定位），`KISAMA_PROXY_TLS_VERIFY=true` 收紧为严格校验。

## 其他配置

### 日志级别

`LOG_LEVEL` 四级阈值（0=DEBUG / 1=INFO / 2=WARN / 3=ERROR），缺省 `3` 只输出错误日志；未显式设置且 `DEBUG=true` 时接管为 0（调试全量输出）。

### 内置加密 DNS（KISAMA_DNS）

节点本地 DNS 被污染 / 劫持导致 argo 临时隧道、外网 IP 探测失败时，设 `KISAMA_DNS=on` 让已实现端（py / js / go / java）所覆盖的出站域名解析改走内置 DoH（缺省链：阿里 223.5.5.5 → Cloudflare 1.1.1.1 → Google 8.8.8.8，`KISAMA_DOH_SERVERS` 自定义）。覆盖 argo 隧道（注册 + edge）、baseinfo IP 探测、shz.al 上报、Hub 别名解析与 Go 版 /kisamaproxy 上游；Java11 当前无 DoH 子系统、仍走系统 DNS。缺省 `off` 零行为变化，证书校验零降级。

### baseinfo marks 标记

`GET /api/baseinfo` 的 `marks` 数组按固定顺序输出主机与配置标记：
`root → kvm → pterodactyl → systemd → fuse → netadmin → kstore → kmode1 → kmode2 → kmode3`
——前六项为主机能力探测（提权、KVM、翼龙容器、systemd、FUSE、网络管理能力；全程只读、零子进程零网络），后四项为配置状态（持久化启用、KMODE 取值）。控制端按集合语义消费，未知取值忽略（前向兼容）。

## 功能支持矩阵

| 功能 | py | js | go | java | java11 | php |
| --- | :-: | :-: | :-: | :-: | :-: | :-: |
| 核心 API（baseinfo / exec / 文件 / 任务 / 终端 / tempkey） | ✅ | ✅ | ✅ | ✅ | ✅ | 部分 |
| KSTORE 任务持久化 | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| KMODE=1 / 2（trycloudflare + 文件 / shz.al） | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ |
| KMODE=2q QUIC 边缘传输 | ✅ | ✅ | ❌ | ✅ | ❌（走 h2） | ❌ |
| KMODE=3 kisama-hub 中继（含动态注册） | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ |
| Hub shz.al 别名解析（每次重连刷新） | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ |
| Argo 隧道 API（含 shz.al 动态绑定） | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ |
| 本地端口反代 `/api/proxy`（含 WS） | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ |
| KisamaProxy 转发器 `/kisamaproxy` | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| KISAMA_DNS 加密 DNS | ✅ | ✅ | ✅ | ✅ | ❌（无 DoH） | ❌ |
| baseinfo marks（主机探测） | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

> PHP 端不在本仓库（独立分发），提供核心 API 与 tempkey（含 short 格式）的兼容实现，主机探测 marks 同步实现；无 KMODE / KSTORE / hub / 隧道能力。

## 相关仓库与文档

- `docs/API.MD` — API 契约权威文档：全部端点定义、签名与加密协议、KMODE 与 hub 中继协议全量细节；
- `UPDATE.MD` — 变更台账：每批次落地的可对账记录（路径、行号、命令、哈希）；
- [kisama-panel](https://github.com/liveqte/kisama-panel) — 控制面板（本 agent 的主要控制端）；
- kisama-hub — KMODE=3 公网中继服务（独立 Go 仓）；
- kisama-skill — AI 控制端操作技能（ZCode 等会话按技能触发，覆盖命令 / 文件 / 终端 / 任务 / 隧道 / 反代操作）；
- `tools/control.py` — 命令行控制端（调试与验收用）。
