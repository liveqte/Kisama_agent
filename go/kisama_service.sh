#!/bin/sh
#==============================================================================
# kisama_service.sh - Kisama Agent (Go) Linux 服务管理脚本
#
# 指令与选项的完整说明在 usage() 里, 看它请运行: sh kisama_service.sh help
#
# 流程: 1) 探测 init 系统 (systemd / OpenRC); 2) 探测 root 权限, 无 root 或无
#       init 时退化为 setsid+nohup 一次性后台启动; 3) 按指令准备二进制
#       (GitHub 发布, 正式版与预发布版取版本号更新的那个) 再操作服务。
#==============================================================================

set -u

REPO="liveqte/Kisama_agent"
RAW_BASE="https://raw.githubusercontent.com/${REPO}"
API_RELEASES="https://api.github.com/repos/${REPO}/releases?per_page=100"
API_LATEST="https://api.github.com/repos/${REPO}/releases/latest"
VERSION_SOURCE_URL="${RAW_BASE}/main/go/config/config.go"
MARKER="# Managed-by: kisama_service.sh"

# $0 在 bash <(curl ...) 或 curl | sh 下不是普通文件 (是 /dev/fd/N 管道),
# 这种时候固定用脚本自己的名字, 免得提示信息里出现 "63 help" 这种怪串
if [ -f "$0" ]; then SCRIPT_NAME=$(basename "$0"); else SCRIPT_NAME="kisama_service.sh"; fi
ACTION=""
NAME="kisama-agent"
INSTALL_DIR=""
PORT="8000"
PORT_SET=0
HOST_BIND=""
BIN_SRC=""
PIN_VERSION=""
OFFLINE=0
INIT_OVERRIDE=""
FORCE=0
PURGE=0
DEBUG_FLAG=0
LOG_FILE=""
BINARY_UPDATED=0
INIT="none"
LATEST_DONE=0
LATEST_RESULT=""
MODE="oneshot"

say()  { printf '%s\n' "$*"; }
step() { printf '==> %s\n' "$*"; }
info() { printf '    %s\n' "$*"; }
warn() { printf '警告: %s\n' "$*" >&2; }
die()  { printf '错误: %s\n' "$*" >&2; exit 1; }
have() { command -v "$1" >/dev/null 2>&1; }
is_root() { [ "$(id -u)" = "0" ]; }

usage() {
    # 帮助文字必须自带: 从 "$0" 读会在 bash <(curl ...) / curl | sh 下吃掉管道里
    # 剩下的脚本内容, 帮助会变成一屏源码
    cat <<'USAGE'
kisama_service.sh - Kisama Agent (Go) Linux 服务管理脚本

用法: sh kisama_service.sh [选项] <指令>

指令:
  start     安装为服务并启动 (已安装则复用, 顺带做版本检查/升级)
  stop      停止服务
  restart   重启服务
  status    显示安装、运行与版本状态
  enable    设置开机自启
  disable   取消开机自启
  remove    停止服务并删除服务文件 (--purge 连安装目录一起删)
  update    检查并升级到最新版本, 运行中的服务自动重启
  help      显示本帮助

选项:
  --name NAME    服务名, 缺省 kisama-agent (多实例并存时用不同名字)
  --dir PATH     安装目录, 缺省为当前工作目录
  --port PORT    监听端口, 缺省 8000 (写入 agent.env 的 KPORT; 已装过则以 agent.env 为准)
  --host HOST    绑定地址, 缺省跟随 agent 默认 (0.0.0.0)
  --version TAG  固定安装某个发布标签, 例如 0.5.8 (缺省自动取最新)
  --bin PATH     使用本地已有二进制, 不联网下载
  --offline      不访问网络 (不查版本也不下载, 只用现有二进制)
  --init MODE    覆盖 init 系统探测: auto | systemd | openrc | none
                 (none 即强制使用一次性后台启动, 便于容器内调试)
  --debug        以 DEBUG=true 安装 (免认证、免密钥)
  --force        接管/删除不是本脚本创建的服务文件
  --purge        配合 remove, 一并删除安装目录
  --log PATH     一次性启动模式的日志文件, 缺省 <安装目录>/agent.log

环境变量 (存在则写进 agent.env, 之后改动请直接编辑 agent.env):
  ECDSA_PUBKEY ECIES_PUBKEY LOG_LEVEL FILE_ROOT EXEC_TIMEOUT EXEC_SHELL
  只支持单行值 (base64 压缩点或 hex); 多行 PEM 请放 <安装目录>/keys/ 目录

示例:
  sh kisama_service.sh start --port 8000 --debug
  sh kisama_service.sh start --dir /opt/kisama --name kisama-agent --version 0.5.8
  sh kisama_service.sh status
  sh kisama_service.sh update
  sh kisama_service.sh remove --purge
USAGE
}

#==============================================================================
# 参数解析
#==============================================================================

while [ $# -gt 0 ]; do
    case "$1" in
        start|stop|restart|status|enable|disable|remove|update)
            [ -z "$ACTION" ] || die "只能指定一个指令"
            ACTION="$1"; shift ;;
        help|-h|--help) ACTION="help"; shift ;;
        --name)    NAME="${2:-}";       [ $# -ge 2 ] || die "--name 缺少参数值"; shift 2 ;;
        --dir)     INSTALL_DIR="${2:-}";[ $# -ge 2 ] || die "--dir 缺少参数值"; shift 2 ;;
        --port)    PORT="${2:-}";       [ $# -ge 2 ] || die "--port 缺少参数值"; PORT_SET=1; shift 2 ;;
        --host)    HOST_BIND="${2:-}";  [ $# -ge 2 ] || die "--host 缺少参数值"; shift 2 ;;
        --version) PIN_VERSION="${2:-}";[ $# -ge 2 ] || die "--version 缺少参数值"; shift 2 ;;
        --bin)     BIN_SRC="${2:-}";    [ $# -ge 2 ] || die "--bin 缺少参数值"; shift 2 ;;
        --log)     LOG_FILE="${2:-}";   [ $# -ge 2 ] || die "--log 缺少参数值"; shift 2 ;;
        --offline) OFFLINE=1; shift ;;
        --init)    INIT_OVERRIDE="${2:-}"; [ $# -ge 2 ] || die "--init 缺少参数值"
                   case "$INIT_OVERRIDE" in auto|systemd|openrc|none) ;; *) die "--init 只支持 auto|systemd|openrc|none" ;; esac
                   shift 2 ;;
        --debug)   DEBUG_FLAG=1; shift ;;
        --force)   FORCE=1; shift ;;
        --purge)   PURGE=1; shift ;;
        *)         die "未知参数: $1 (用 $SCRIPT_NAME help 查看用法)" ;;
    esac
done

ACTION="${ACTION:-help}"
if [ "$ACTION" = "help" ]; then usage; exit 0; fi

printf '%s' "$NAME" | grep -Eq '^[A-Za-z0-9_.@-]+$' || die "--name 只允许字母、数字和 . _ @ -"
case "$PORT" in ''|*[!0-9]*) die "--port 必须是数字" ;; esac
[ "$PORT" -ge 1 ] && [ "$PORT" -le 65535 ] || die "--port 超出 1-65535"
if [ -n "$PIN_VERSION" ]; then
    printf '%s' "$PIN_VERSION" | grep -Eq '^[A-Za-z0-9._-]+$' || die "--version 不是合法标签"
fi
[ -n "$INSTALL_DIR" ] || INSTALL_DIR=$(pwd)
case "$INSTALL_DIR" in
    /*) ;;
    # 相对路径: 已存在就规范化; 还不存在则按 $PWD/<dir> 解释, 后面 preflight 会创建
    *)  _want="$INSTALL_DIR"
        INSTALL_DIR=$(cd "$_want" 2>/dev/null && pwd) || INSTALL_DIR="$PWD/${_want#./}" ;;
esac
[ -n "$LOG_FILE" ] || LOG_FILE="$INSTALL_DIR/agent.log"

AGENT_BIN="$INSTALL_DIR/agent"
VERSION_FILE="$INSTALL_DIR/agent.version"
ENV_FILE="$INSTALL_DIR/agent.env"
RUNNER="$INSTALL_DIR/run.sh"
PID_FILE="$INSTALL_DIR/agent.pid"
UNIT_FILE="/etc/systemd/system/$NAME.service"
INITD_FILE="/etc/init.d/$NAME"

#==============================================================================
# 系统探测
#==============================================================================

detect_system() {
    INIT="none"
    if [ -d /run/systemd/system ] || [ "$(cat /proc/1/comm 2>/dev/null)" = "systemd" ]; then
        have systemctl && INIT="systemd"
    fi
    if [ "$INIT" = "none" ] && have rc-service && [ -d /etc/init.d ]; then
        INIT="openrc"
    fi
    # 上面都判不出时按发行版倾向兜底 (Alpine 用 OpenRC)
    if [ "$INIT" = "none" ]; then
        grep -qs '^ID=alpine' /etc/os-release && have rc-service && INIT="openrc"
    fi

    if [ -n "$INIT_OVERRIDE" ] && [ "$INIT_OVERRIDE" != "auto" ]; then
        INIT="$INIT_OVERRIDE"
    fi

    case "$INIT" in
        systemd) have systemctl || { warn "找不到 systemctl, 退回一次性启动"; INIT="none"; } ;;
        openrc)  have rc-service || { warn "找不到 rc-service, 退回一次性启动"; INIT="none"; } ;;
    esac

    case "$INIT" in
        systemd|openrc) MODE="$INIT" ;;
        *)              MODE="oneshot" ;;
    esac
    is_root || MODE="oneshot"
}

arch_binary_name() {
    # 本脚本装的是 Linux 服务 (systemd/OpenRC), 产物也只有 linux 的
    [ "$(uname -s)" = "Linux" ] || return 0
    case "$(uname -m)" in
        x86_64|amd64)  printf 'agent' ;;
        aarch64|arm64) printf 'agent-linux-arm64' ;;
        *)             printf '' ;;
    esac
}

#==============================================================================
# 网络与版本
#==============================================================================

http_get() {
    if have curl; then
        curl -fsSL --connect-timeout 8 --max-time 25 "$1" 2>/dev/null
    elif have wget; then
        wget -q -T 25 -t 1 -O - "$1" 2>/dev/null
    else
        return 1
    fi
}

http_download() { # URL 目标文件
    if have curl; then
        curl -fSL --connect-timeout 10 --max-time 300 -o "$2" "$1" 2>/dev/null
    elif have wget; then
        wget -q -T 120 -t 1 -O "$2" "$1" 2>/dev/null
    else
        return 1
    fi
}

# $1 版本号严格大于 $2 时返回 0
ver_gt() {
    awk -v a="$1" -v b="$2" '
    BEGIN {
        gsub(/[^0-9.].*$/, "", a); gsub(/[^0-9.].*$/, "", b)
        if (a == "" || b == "") exit 1
        split(a, x, "."); split(b, y, ".")
        for (i = 1; i <= 4; i++) {
            if (x[i] == "") x[i] = 0
            if (y[i] == "") y[i] = 0
            if (x[i] + 0 > y[i] + 0) exit 0
            if (x[i] + 0 < y[i] + 0) exit 1
        }
        exit 1
    }'
}

tags_from_json() {
    grep -o '"tag_name":[ ]*"[^"]*"' | sed 's/.*"\([^"]*\)"$/\1/' \
        | grep -E '^[0-9]+\.[0-9]+\.[0-9]+$' 2>/dev/null
}

# 取可用发布的最大版本号: 正式版与预发布版一起比, 谁新用谁
latest_version() {
    [ "$OFFLINE" = 1 ] && return 1
    _tags=""
    if _json=$(http_get "$API_RELEASES"); then
        _tags=$(printf '%s' "$_json" | tags_from_json)
    fi
    if [ -z "$_tags" ]; then
        if _json=$(http_get "$API_LATEST"); then
            _tags=$(printf '%s' "$_json" | tags_from_json)
        fi
    fi
    if [ -z "$_tags" ]; then
        # 兜底: 读 main 分支里的编译期版本常量 (形如 "0.5.8-go")
        _tags=$(http_get "$VERSION_SOURCE_URL" | grep -o '"[0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*-go"' \
                | head -1 | sed 's/"//g; s/-go$//')
    fi
    [ -z "$_tags" ] && return 1

    _best=""
    for _t in $_tags; do
        if [ -z "$_best" ]; then _best="$_t"; continue; fi
        ver_gt "$_t" "$_best" && _best="$_t"
    done
    printf '%s' "$_best"
}

# 一次进程内只查一次 (GitHub 匿名 API 限流 60 次/小时/IP)
get_latest() {
    if [ "$LATEST_DONE" != 1 ]; then
        LATEST_DONE=1
        LATEST_RESULT=$(latest_version) || LATEST_RESULT=""
    fi
    [ -n "$LATEST_RESULT" ] || return 1
    printf '%s' "$LATEST_RESULT"
}

installed_version() {
    if [ -s "$VERSION_FILE" ]; then
        head -1 "$VERSION_FILE" | tr -d ' \t\r\n'
        return 0
    fi
    # 没有版本记录时尝试从二进制里捞 (UPX 压缩过的产物捞不到, 属正常)
    if [ -f "$AGENT_BIN" ]; then
        _v=$(grep -a -o -E '[0-9]+\.[0-9]+\.[0-9]+-go' "$AGENT_BIN" 2>/dev/null | head -1)
        [ -n "$_v" ] && { printf '%s' "${_v%-go}"; return 0; }
    fi
    return 1
}

is_elf_for_arch() {
    have od || return 0
    _magic=$(od -An -tx1 -N4 "$1" 2>/dev/null | tr -d ' \n')
    [ "$_magic" = "7f454c46" ] || return 1
    _machine=$(od -An -tx1 -j18 -N2 "$1" 2>/dev/null | tr -d ' \n')
    [ -n "$_machine" ] || return 0
    case "$(uname -m)" in
        x86_64|amd64)  [ "$_machine" = "3e00" ] ;;
        aarch64|arm64) [ "$_machine" = "b700" ] ;;
        *)             return 0 ;;
    esac
}

# 确认是 ELF 但不是本机架构 (非 x86_64/aarch64 本机、或非 ELF 的包装脚本一律放行)
elf_arch_mismatch() {
    case "$(uname -m)" in
        x86_64|amd64|aarch64|arm64) ;;
        *) return 1 ;;
    esac
    have od || return 1
    _magic=$(od -An -tx1 -N4 "$1" 2>/dev/null | tr -d ' \n')
    [ "$_magic" = "7f454c46" ] || return 1
    _machine=$(od -An -tx1 -j18 -N2 "$1" 2>/dev/null | tr -d ' \n')
    [ -n "$_machine" ] || return 1
    case "$(uname -m)" in
        x86_64|amd64)  [ "$_machine" = "3e00" ] && return 1 ;;
        aarch64|arm64) [ "$_machine" = "b700" ] && return 1 ;;
    esac
    return 0
}

download_agent() { # 版本
    _bin_rel=$(arch_binary_name)
    [ -n "$_bin_rel" ] || die "$(uname -s)/$(uname -m) 没有官方预编译产物 (仅有 linux/amd64 与 linux/arm64), 请自行编译后用 --bin 指定"
    _url="${RAW_BASE}/$1/go/$_bin_rel"
    _part="$INSTALL_DIR/.agent.download"
    step "下载 $_url"
    http_download "$_url" "$_part" || { rm -f "$_part"; die "下载失败 (检查网络, 或标签 $1 是否存在)"; }

    _size=$(wc -c < "$_part" 2>/dev/null | tr -d ' ')
    [ "${_size:-0}" -gt 1000000 ] || { rm -f "$_part"; die "下载内容过小 (${_size:-0} 字节), 已放弃"; }
    is_elf_for_arch "$_part" || { rm -f "$_part"; die "下载内容不是本机 $(uname -m) 的 ELF 可执行文件, 已放弃"; }

    chmod 755 "$_part"
    mv -f "$_part" "$AGENT_BIN" || { rm -f "$_part"; die "无法写入 $AGENT_BIN (目录可写? 需要 root?)"; }
    printf '%s\n' "$1" > "$VERSION_FILE"
    BINARY_UPDATED=1
    info "已安装版本 $1 (${_size} 字节)"
}

ensure_binary() {
    _arch_bad=0
    if [ -n "$BIN_SRC" ]; then
        [ -f "$BIN_SRC" ] || die "--bin 指定的文件不存在: $BIN_SRC"
        [ -x "$BIN_SRC" ] || die "--bin 指定的文件没有执行权限: $BIN_SRC"
        elf_arch_mismatch "$BIN_SRC" && \
            die "--bin 的二进制不是本机 $(uname -m) 架构的 ELF 文件, 换成本机可用的产物再装"
        _abs=$(cd "$(dirname "$BIN_SRC")" && pwd)/$(basename "$BIN_SRC")
        if [ "$_abs" != "$AGENT_BIN" ]; then
            step "使用本地二进制 $_abs"
            cp -f "$_abs" "$AGENT_BIN" || die "复制到 $AGENT_BIN 失败"
            chmod 755 "$AGENT_BIN"
            rm -f "$VERSION_FILE"
            BINARY_UPDATED=1
        fi
        return 0
    fi

    _cur=$(installed_version) || _cur=""
    # 目录里躺着别处带来的产物 (例如 git clone 下来的 amd64 agent 装在 arm64 机器上)
    if [ -x "$AGENT_BIN" ] && elf_arch_mismatch "$AGENT_BIN"; then
        warn "$AGENT_BIN 不是本机 $(uname -m) 架构的可执行文件, 将替换为本机产物"
        rm -f "$VERSION_FILE"
        _cur=""
        _arch_bad=1
    fi

    if [ -n "$PIN_VERSION" ]; then
        if [ -x "$AGENT_BIN" ] && [ "$_cur" = "$PIN_VERSION" ]; then
            info "二进制已是 $PIN_VERSION, 跳过下载"
        else
            download_agent "$PIN_VERSION"
        fi
        return 0
    fi

    if [ "$OFFLINE" = 1 ]; then
        [ -x "$AGENT_BIN" ] || die "--offline 且 $AGENT_BIN 不存在, 无二进制可用"
        [ "$_arch_bad" = 1 ] && die "--offline 且现有二进制架构不匹配本机, 无法重新下载"
        info "离线模式, 使用现有二进制 ${_cur:-版本未知}"
        return 0
    fi

    if ! _latest=$(get_latest); then
        _latest=""
        warn "无法获取最新版本号 (网络不可达或接口变更), 按现有二进制处理"
    fi

    if [ ! -x "$AGENT_BIN" ]; then
        [ -n "$_latest" ] || die "本机没有 agent 二进制, 又取不到最新版本号, 无法安装 (可用 --bin 或 --version)"
        step "本机未安装 agent, 最新版本为 $_latest"
        download_agent "$_latest"
        return 0
    fi

    if [ "$_arch_bad" = 1 ]; then
        [ -n "$_latest" ] || die "现有二进制架构不匹配本机, 又取不到最新版本号, 无法替换"
        download_agent "$_latest"
        return 0
    fi

    if [ -z "$_cur" ]; then
        info "现有二进制版本未知 (可能是自行放入的), 保持不覆盖; 要升级请执行 $SCRIPT_NAME update"
        return 0
    fi
    if [ -n "$_latest" ] && ver_gt "$_latest" "$_cur"; then
        step "检测到新版本 $_latest (当前 $_cur), 更新"
        download_agent "$_latest"
    else
        info "二进制已是最新 ($_cur)"
    fi
}

#==============================================================================
# 配置文件
#==============================================================================

env_needs_quote() { # 值含这些字符之外就不必引号
    printf '%s' "$1" | grep -Eq "^[A-Za-z0-9_/:=+.,@-]*$"
}

env_set() { # KEY VALUE (KEY 只来自脚本内的固定白名单)
    _k="$1" _v="$2"
    case "$_v" in
        *"
"*) die "$_k 的值含换行 (多行 PEM?), 请改用 $INSTALL_DIR/keys/ 目录放密钥文件" ;;
    esac
    if [ ! -f "$ENV_FILE" ]; then
        {
            printf '# Kisama Agent 环境变量, 由 %s 生成, 可手工编辑\n' "$SCRIPT_NAME"
            printf '# 行格式 KEY=VALUE; 同时被 systemd EnvironmentFile 与 run.sh 读取\n'
        } > "$ENV_FILE" || die "无法写入 $ENV_FILE"
    fi
    if grep -qs "^$_k=" "$ENV_FILE"; then
        grep -v "^$_k=" "$ENV_FILE" > "$ENV_FILE.new" || { rm -f "$ENV_FILE.new"; die "重写 $ENV_FILE 失败"; }
        mv -f "$ENV_FILE.new" "$ENV_FILE" || die "替换 $ENV_FILE 失败"
    fi
    if env_needs_quote "$_v"; then
        printf '%s=%s\n' "$_k" "$_v" >> "$ENV_FILE"
    else
        printf '%s=%s\n' "$_k" "$(printf "'%s'" "$(printf '%s' "$_v" | sed "s/'/'\\\\''/g")")" >> "$ENV_FILE"
    fi
}

write_env_file() {
    [ "$PORT_SET" = 1 ] && env_set KPORT "$PORT"
    [ -n "$HOST_BIND" ] && env_set HOST "$HOST_BIND"
    [ "$DEBUG_FLAG" = 1 ] && env_set DEBUG true
    for _k in ECDSA_PUBKEY ECIES_PUBKEY LOG_LEVEL FILE_ROOT EXEC_TIMEOUT EXEC_SHELL; do
        _v=$(printenv "$_k" 2>/dev/null || true)
        [ -n "$_v" ] || continue
        if [ -f "$ENV_FILE" ] && grep -qs "^$_k=" "$ENV_FILE"; then continue; fi
        env_set "$_k" "$_v"
    done
    chmod 644 "$ENV_FILE" 2>/dev/null || true
}

write_runner() {
    [ -f "$RUNNER" ] && grep -qs "^$MARKER" "$RUNNER" && [ "$FORCE" != 1 ] && return 0
    [ -f "$RUNNER" ] && ! grep -qs "^$MARKER" "$RUNNER" && [ "$FORCE" != 1 ] && \
        die "$RUNNER 已存在且不是本脚本生成的, 请加 --force 覆盖或换 --dir"
    step "生成 $RUNNER"
    cat > "$RUNNER" <<EOF || die "无法写入 $RUNNER"
#!/bin/sh
$MARKER
cd '$INSTALL_DIR' || exit 1
if [ -f '$ENV_FILE' ]; then
    set -a
    . '$ENV_FILE'
    set +a
fi
exec '$AGENT_BIN'
EOF
    chmod 755 "$RUNNER"
}

debug_effective() {
    [ "$DEBUG_FLAG" = 1 ] && return 0
    [ -f "$ENV_FILE" ] && grep -qs '^DEBUG=true' "$ENV_FILE"
}

keys_ready() {
    debug_effective && return 0
    [ -n "$(printenv ECDSA_PUBKEY 2>/dev/null || true)" ] && \
        [ -n "$(printenv ECIES_PUBKEY 2>/dev/null || true)" ] && return 0
    [ -f "$ENV_FILE" ] && grep -qs '^ECDSA_PUBKEY=..' "$ENV_FILE" && grep -qs '^ECIES_PUBKEY=..' "$ENV_FILE" && return 0
    [ -s "$INSTALL_DIR/keys/agent_ecdsa_pub.pem" ] && \
        [ -s "$INSTALL_DIR/keys/agent_ecies_pub.b64" ] && return 0
    return 1
}

#==============================================================================
# 服务文件
#==============================================================================

unit_exists() { [ -f "$UNIT_FILE" ]; }

unit_is_ours() { [ -f "$UNIT_FILE" ] && grep -qs "^$MARKER" "$UNIT_FILE"; }

initd_is_ours() { [ -f "$INITD_FILE" ] && grep -qs "^$MARKER" "$INITD_FILE"; }

# 对已存在的服务文件动手前, 确认它是本脚本创建的, 避免误停/误删别人装的服务
owned_check() { # 需要存在: yes|no
    case "$MODE" in
        systemd)
            if ! unit_exists; then
                [ "$1" = "no" ] && return 0
                die "$UNIT_FILE 不存在, 服务尚未安装 (先执行 $SCRIPT_NAME start)"
            fi
            unit_is_ours || [ "$FORCE" = 1 ] || \
                die "$UNIT_FILE 不是本脚本创建的, 不动它 (确认接管请加 --force, 或用 --name 换服务名)" ;;
        openrc)
            if [ ! -f "$INITD_FILE" ]; then
                [ "$1" = "no" ] && return 0
                die "$INITD_FILE 不存在, 服务尚未安装 (先执行 $SCRIPT_NAME start)"
            fi
            initd_is_ours || [ "$FORCE" = 1 ] || \
                die "$INITD_FILE 不是本脚本创建的, 不动它 (确认接管请加 --force, 或用 --name 换服务名)" ;;
    esac
    return 0
}

write_unit() {
    if unit_exists && ! unit_is_ours && [ "$FORCE" != 1 ]; then
        die "$UNIT_FILE 已存在且不是本脚本创建的 (可能是别人手工装的)。接管请加 --force, 或用 --name 换个服务名"
    fi
    _new="$UNIT_FILE.kisama-tmp"
    cat > "$_new" <<EOF || { rm -f "$_new"; die "无法写入 $_new"; }
[Unit]
Description=Kisama Agent ($NAME)
Documentation=https://github.com/$REPO
After=network-online.target
Wants=network-online.target
$MARKER

[Service]
Type=simple
WorkingDirectory=$INSTALL_DIR
ExecStart=$AGENT_BIN
EnvironmentFile=-$ENV_FILE
Restart=always
RestartSec=5
StandardOutput=journal
StandardError=journal
SyslogIdentifier=$NAME
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF
    if unit_exists && cmp -s "$_new" "$UNIT_FILE"; then
        rm -f "$_new"
        info "unit 文件内容未变化, 保持 $UNIT_FILE"
        return 0
    fi
    step "写入 $UNIT_FILE"
    mv -f "$_new" "$UNIT_FILE" || { rm -f "$_new"; die "无法写入 $UNIT_FILE"; }
    chmod 644 "$UNIT_FILE"
    systemctl daemon-reload || warn "systemctl daemon-reload 返回非 0"
}

write_initd() {
    if [ -f "$INITD_FILE" ] && ! grep -qs "^$MARKER" "$INITD_FILE" && [ "$FORCE" != 1 ]; then
        die "$INITD_FILE 已存在且不是本脚本创建的。接管请加 --force, 或用 --name 换个服务名"
    fi
    _new="$INITD_FILE.kisama-tmp"
    cat > "$_new" <<EOF || { rm -f "$_new"; die "无法写入 $_new"; }
#!/sbin/openrc-run
$MARKER
description="Kisama Agent ($NAME)"
command="/bin/sh"
command_args='$RUNNER'
command_background="yes"
pidfile="/run/$NAME.pid"
output_log='$LOG_FILE'
error_log='$LOG_FILE'

depend() {
    need net
    after firewall
}
EOF
    if [ -f "$INITD_FILE" ] && cmp -s "$_new" "$INITD_FILE"; then
        rm -f "$_new"
        info "init 脚本内容未变化, 保持 $INITD_FILE"
        return 0
    fi
    mv -f "$_new" "$INITD_FILE" || { rm -f "$_new"; die "无法写入 $INITD_FILE"; }
    chmod 755 "$INITD_FILE"
}

#==============================================================================
# 状态与动作
#==============================================================================

oneshot_pid() {
    [ -f "$PID_FILE" ] || return 1
    _p=$(head -1 "$PID_FILE" | tr -d ' \t\r\n')
    case "$_p" in ''|*[!0-9]*) return 1 ;; esac
    kill -0 "$_p" 2>/dev/null || return 1
    printf '%s' "$_p"
}

svc_active() {
    case "$MODE" in
        systemd) systemctl is-active --quiet "$NAME" ;;
        openrc)  [ -f "$INITD_FILE" ] && rc-service "$NAME" status >/dev/null 2>&1 ;;
        oneshot) oneshot_pid >/dev/null 2>&1 ;;
    esac
}

port_listener() {
    if have ss; then
        ss -ltn 2>/dev/null | grep -E "[:.]$PORT([^0-9]|$)" | head -1 | sed 's/[[:space:]]\{1,\}/ /g'
    elif have netstat; then
        netstat -ltn 2>/dev/null | grep -E "[:.]$PORT([^0-9]|$)" | head -1 | sed 's/[[:space:]]\{1,\}/ /g'
    fi
}

port_guard() {
    _l=$(port_listener)
    [ -z "$_l" ] && return 0
    die "端口 $PORT 已被占用: $_l (用 --port 换端口, 或先停掉占用它的进程)"
}

svc_start() {
    case "$MODE" in
        systemd)
            systemctl start "$NAME" || die "systemctl start $NAME 失败; 原因见: journalctl -u $NAME -n 50 --no-pager" ;;
        openrc)
            rc-service "$NAME" start || die "rc-service $NAME start 失败; 原因见: $LOG_FILE" ;;
        oneshot)
            if _p=$(oneshot_pid); then info "已有实例在运行 (pid $_p)"; return 0; fi
            mkdir -p "$(dirname "$LOG_FILE")" 2>/dev/null || true
            step "一次性后台启动 (setsid + nohup)"
            setsid nohup /bin/sh "$RUNNER" >>"$LOG_FILE" 2>&1 </dev/null &
            _pid=$!
            printf '%s\n' "$_pid" > "$PID_FILE"
            sleep 1
            if ! oneshot_pid >/dev/null 2>&1; then
                rm -f "$PID_FILE"
                die "进程启动后立即退出, 详见日志 $LOG_FILE"
            fi
            info "pid $(oneshot_pid)" ;;
    esac
}

svc_stop() {
    case "$MODE" in
        systemd) systemctl stop "$NAME" || warn "systemctl stop 返回非 0" ;;
        openrc)  rc-service "$NAME" stop || warn "rc-service stop 返回非 0" ;;
        oneshot)
            _p=$(oneshot_pid) || { info "没有在运行的实例"; return 0; }
            step "停止 pid $_p"
            kill "$_p" 2>/dev/null || true
            _i=0
            while kill -0 "$_p" 2>/dev/null && [ "$_i" -lt 10 ]; do sleep 1; _i=$((_i + 1)); done
            kill -9 "$_p" 2>/dev/null || true
            rm -f "$PID_FILE" ;;
    esac
}

wait_port_open() {
    _i=0
    while [ "$_i" -lt 15 ]; do
        [ -n "$(port_listener)" ] && return 0
        svc_active || return 1
        sleep 1; _i=$((_i + 1))
    done
    return 1
}

start_hint_on_failure() {
    case "$MODE" in
        systemd) info "查看原因: journalctl -u $NAME -n 50 --no-pager" ;;
        *)       info "查看原因: tail -n 50 $LOG_FILE" ;;
    esac
}

preflight() {
    detect_system
    [ -d "$INSTALL_DIR" ] || mkdir -p "$INSTALL_DIR" 2>/dev/null || true
    [ -d "$INSTALL_DIR" ] || die "安装目录不存在且无法创建: $INSTALL_DIR (或用 --dir 指定)"
    [ -w "$INSTALL_DIR" ] || die "安装目录不可写: $INSTALL_DIR"
    # 没显式给 --port 时, 以 agent.env 里已安装的 KPORT 为准
    if [ "$PORT_SET" != 1 ] && [ -f "$ENV_FILE" ]; then
        _kp=$(grep -m1 '^KPORT=' "$ENV_FILE" | sed 's/^[^=]*=//; s/["'\'']//g')
        case "$_kp" in ''|*[!0-9]*) ;; *) PORT="$_kp" ;; esac
    fi
    case "$INSTALL_DIR" in
        /tmp*|/var/tmp*)
            [ "$MODE" = "oneshot" ] || warn "安装目录在 $INSTALL_DIR, 重启后 /tmp 可能被清空导致服务起不来, 建议用 --dir /opt/kisama" ;;
    esac
}

describe_mode() {
    _os=$( (grep -m1 '^PRETTY_NAME=' /etc/os-release 2>/dev/null || echo '') | sed 's/^[^=]*=//; s/"//g')
    [ -n "$_os" ] || _os="未知发行版 (init: $INIT)"
    case "$MODE" in
        systemd) say "系统: $_os | init: systemd | root -> 使用 systemd 服务" ;;
        openrc)  say "系统: $_os | init: OpenRC | root -> 使用 rc-service 脚本" ;;
        oneshot)
            if is_root; then _w="root"; else _w="非 root (uid $(id -u))"; fi
            say "系统: $_os | init: ${INIT} | $_w -> 退化为一次性后台启动 (不支持开机自启)" ;;
    esac
}

#==============================================================================
# 指令
#==============================================================================

cmd_start() {
    preflight
    describe_mode

    # 端口被别人占了就别做任何改动, 免得装出起不来的服务
    _was_active=0
    svc_active && _was_active=1
    [ "$_was_active" = 1 ] || port_guard

    ensure_binary
    write_env_file
    write_runner
    [ "$MODE" = "systemd" ] && write_unit
    [ "$MODE" = "openrc" ] && write_initd

    if ! keys_ready; then
        warn "没有控制端公钥, agent 非 DEBUG 模式会报 \"Configuration validation failed\" 后退出。"
        warn "解决: 把 agent_ecdsa_pub.pem / agent_ecies_pub.b64 放进 $INSTALL_DIR/keys/,"
        warn "      或导出 ECDSA_PUBKEY / ECIES_PUBKEY 后重跑, 或加 --debug 装免认证实例。"
    fi

    if [ "$_was_active" = 1 ]; then
        if [ "$BINARY_UPDATED" = 1 ]; then
            step "二进制已更新, 重启服务使其生效"
            svc_stop
            sleep 1
            port_guard
            svc_start
        else
            info "服务已在运行, 跳过启动"
        fi
    else
        port_guard
        svc_start
    fi

    if wait_port_open; then
        info "监听端口 $PORT 已就绪"
    else
        warn "端口 $PORT 没有进入监听状态, 服务可能没起来"
        start_hint_on_failure
    fi
    echo
    cmd_status
}

cmd_stop() {
    preflight
    describe_mode
    [ "$MODE" = "oneshot" ] || owned_check yes
    if ! svc_active; then info "当前没有在运行, 无需停止"; return 0; fi
    svc_stop
    info "已停止"
}

cmd_restart() {
    preflight
    describe_mode
    [ "$MODE" = "oneshot" ] || owned_check yes
    [ "$MODE" != "oneshot" ] || [ -f "$RUNNER" ] || die "尚未安装, 请先执行 $SCRIPT_NAME start"
    svc_stop
    sleep 1
    port_guard
    svc_start
    if wait_port_open; then info "监听端口 $PORT 已就绪"; else warn "端口 $PORT 未监听"; start_hint_on_failure; fi
}

cmd_enable() {
    preflight
    describe_mode
    owned_check yes
    case "$MODE" in
        systemd)
            systemctl enable "$NAME" || die "systemctl enable 失败"
            systemctl daemon-reload 2>/dev/null || true
            info "已设置开机自启" ;;
        openrc)
            have rc-update || die "系统里没有 rc-update"
            rc-update add "$NAME" default || die "rc-update add 失败"
            info "已加入 default runlevel" ;;
        oneshot)
            die "一次性启动模式无法开机自启。要自启请用 root 运行本脚本, 或自行在 crontab 加: @reboot /bin/sh $RUNNER" ;;
    esac
}

cmd_disable() {
    preflight
    describe_mode
    owned_check yes
    case "$MODE" in
        systemd)
            if systemctl is-enabled --quiet "$NAME" 2>/dev/null; then
                systemctl disable "$NAME" || die "systemctl disable 失败"
                info "已取消开机自启"
            else
                info "该服务本来就没有开机自启"
            fi ;;
        openrc)
            rc-update del "$NAME" default 2>/dev/null && info "已取消开机自启" || info "该服务本来就不在 default runlevel" ;;
        oneshot)
            die "一次性启动模式没有开机自启设置" ;;
    esac
}

cmd_remove() {
    preflight
    describe_mode
    [ "$MODE" = "oneshot" ] || owned_check no
    if svc_active; then step "停止服务"; svc_stop; fi

    case "$MODE" in
        systemd)
            if unit_exists; then
                unit_is_ours || [ "$FORCE" = 1 ] || die "$UNIT_FILE 不是本脚本创建的, 拒绝删除 (确定要删请加 --force)"
                systemctl disable --now "$NAME" 2>/dev/null || true
                rm -f "$UNIT_FILE"
                systemctl daemon-reload
                info "已删除 $UNIT_FILE"
            else
                info "$UNIT_FILE 不存在, 跳过"
            fi ;;
        openrc)
            if [ -f "$INITD_FILE" ]; then
                grep -qs "^$MARKER" "$INITD_FILE" || [ "$FORCE" = 1 ] || die "$INITD_FILE 不是本脚本创建的, 拒绝删除 (确定要删请加 --force)"
                have rc-update && rc-update del "$NAME" default 2>/dev/null
                rm -f "$INITD_FILE"
                info "已删除 $INITD_FILE"
            else
                info "$INITD_FILE 不存在, 跳过"
            fi ;;
        oneshot)
            info "一次性模式没有服务文件, 只停止了进程" ;;
    esac
    # 另一种 init 遗留的本脚本产物也一并清掉 (比如先在 systemd 装过又换 openrc)
    [ "$MODE" != "systemd" ] && unit_is_ours && { rm -f "$UNIT_FILE"; have systemctl && systemctl daemon-reload 2>/dev/null; info "顺带删除 $UNIT_FILE"; }
    [ "$MODE" != "openrc" ] && [ -f "$INITD_FILE" ] && grep -qs "^$MARKER" "$INITD_FILE" && { rm -f "$INITD_FILE"; info "顺带删除 $INITD_FILE"; }

    if [ "$PURGE" = 1 ]; then
        step "删除安装目录 $INSTALL_DIR"
        rm -rf "$INSTALL_DIR"
    else
        info "保留安装目录 $INSTALL_DIR (二进制 / agent.env / keys), 要一并删除请加 --purge"
    fi
}

cmd_update() {
    preflight
    describe_mode
    [ "$OFFLINE" != 1 ] || die "update 需要联网, 请去掉 --offline"
    [ "$MODE" = "oneshot" ] || owned_check no
    _cur=$(installed_version) || _cur=""
    if [ -n "$BIN_SRC" ] || [ -n "$PIN_VERSION" ]; then
        ensure_binary
    elif ! _latest=$(get_latest); then
        die "取不到最新版本号 (网络不可达?)"
    elif [ ! -x "$AGENT_BIN" ]; then
        step "本机未安装二进制, 下载 $_latest"
        download_agent "$_latest"
    elif [ -z "$_cur" ]; then
        step "现有二进制版本未知, 覆盖为最新 $_latest"
        download_agent "$_latest"
    elif ver_gt "$_latest" "$_cur"; then
        step "更新 $_cur -> $_latest"
        download_agent "$_latest"
    else
        info "已是最新版本 ($_cur)"
    fi

    if [ "$BINARY_UPDATED" = 1 ]; then
        if svc_active; then
            step "重启服务加载新二进制"
            svc_stop; sleep 1; port_guard; svc_start
            if wait_port_open; then info "监听端口 $PORT 已就绪"; else warn "端口 $PORT 未监听"; start_hint_on_failure; fi
        else
            info "服务未在运行, 下次 start 会使用新二进制"
        fi
    fi
}

cmd_status() {
    preflight
    describe_mode
    say "服务名   : $NAME"
    say "安装目录 : $INSTALL_DIR"
    if [ -x "$AGENT_BIN" ]; then
        _sz=$(wc -c < "$AGENT_BIN" | tr -d ' ')
        say "二进制   : $AGENT_BIN (${_sz} 字节, 版本 $(installed_version || echo 未知))"
    else
        say "二进制   : 未安装"
    fi
    if [ "$OFFLINE" = 1 ]; then
        say "最新版本 : 未查询 (--offline)"
    else
        say "最新版本 : $(v=$(get_latest) && printf '%s' "$v" || echo 查询失败)"
    fi
    case "$MODE" in
        systemd)
            say "unit     : $(unit_exists && printf '%s (%s)' "$UNIT_FILE" "$(unit_is_ours && echo 本脚本管理 || echo 他人创建)" || echo 未安装)"
            _st=$(systemctl is-active "$NAME" 2>/dev/null); [ -n "$_st" ] || _st=unknown
            _en=$(systemctl is-enabled "$NAME" 2>/dev/null); [ -n "$_en" ] || _en=unknown
            say "运行状态 : $_st"
            say "开机自启 : $_en" ;;
        openrc)
            say "init 脚本: $([ -f "$INITD_FILE" ] && printf '%s' "$INITD_FILE" || echo 未安装)"
            say "运行状态 : $(rc-service "$NAME" status 2>/dev/null | head -1 || echo inactive)"
            say "开机自启 : $(have rc-update && rc-update show default 2>/dev/null | grep -qs "$NAME" && printf 已加入 || printf 未加入)" ;;
        oneshot)
            _p=$(oneshot_pid) && say "运行状态 : running (pid $_p)" || say "运行状态 : inactive"
            say "pid 文件 : $PID_FILE"
            say "日志     : $LOG_FILE" ;;
    esac
    _l=$(port_listener)
    say "端口 $PORT : $([ -n "$_l" ] && printf '监听中 (%s)' "$_l" || printf 未监听)"
    if debug_effective; then
        say "认证     : DEBUG 模式 (免认证、不需要密钥)"
    elif keys_ready; then
        say "认证     : 控制端公钥已就绪"
    else
        say "认证     : 缺控制端公钥 (非 DEBUG 模式下 agent 会拒绝启动)"
    fi
}

case "$ACTION" in
    start)   cmd_start ;;
    stop)    cmd_stop ;;
    restart) cmd_restart ;;
    status)  cmd_status ;;
    enable)  cmd_enable ;;
    disable) cmd_disable ;;
    remove)  cmd_remove ;;
    update)  cmd_update ;;
    *)       usage; exit 1 ;;
esac
