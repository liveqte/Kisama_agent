# Kisama_agent
Kisama_Panel的agent

这是一个Kisama_Panel代理端，内置 API 管理器，专注于集中化管理服务与接口。所有通信均采用端到端加密，即便在 HTTP 环境下也能保障数据传输安全，避免敏感信息泄露。

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
| `KMODE` | `0` | `0`=普通启动；`1`=自动创建隧道+写域名文件+stdin 指令监听；`2`=自动创建隧道+shz.al 静默上报 |
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