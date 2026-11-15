<#
.SYNOPSIS
  kisama_service.ps1 - Kisama Agent (Go) Windows 部署与管理脚本
  与 Linux 版 go/kisama_service.sh 功能对应。

.DESCRIPTION
  指令: start stop restart status enable disable remove update help
  平台差异: Go 版 agent 是控制台程序, 不实现 Windows 服务控制协议(SCM),
  因此 "安装为服务" 用计划任务(ONSTART, SYSTEM 身份)实现; 非管理员或没有
  计划任务模块时, 自动退化为一次性后台启动 (Start-Process, 无开机自启)。

.EXAMPLE
  powershell -NoProfile -ExecutionPolicy Bypass -File kisama_service.ps1 start -Port 8000
  powershell -NoProfile -ExecutionPolicy Bypass -File kisama_service.ps1 status
  powershell -NoProfile -ExecutionPolicy Bypass -File kisama_service.ps1 update
  powershell -NoProfile -ExecutionPolicy Bypass -File kisama_service.ps1 remove -Purge
#>
[CmdletBinding()]
param(
    [Parameter(Position = 0)]
    [ValidateSet('start', 'stop', 'restart', 'status', 'enable', 'disable', 'remove', 'update', 'help')]
    [string]$Command = 'help',

    [string]$Name = 'kisama-agent',
    [string]$Dir = '',
    [int]$Port = 0,
    [string]$BindHost = '',
    [string]$Version = '',
    [string]$Bin = '',
    [string]$Log = '',
    [string]$FileRoot = '',
    [ValidateSet('auto', 'task', 'console')]
    [string]$Init = 'auto',
    [switch]$Offline,
    [switch]$DebugMode,
    [switch]$Force,
    [switch]$Purge
)

$ErrorActionPreference = 'Stop'
try { [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 } catch { }

$Repo = 'liveqte/Kisama_agent'
$RawBase = "https://raw.githubusercontent.com/$Repo"
$ApiReleases = "https://api.github.com/repos/$Repo/releases?per_page=100"
$ApiLatest = "https://api.github.com/repos/$Repo/releases/latest"
$VersionSourceUrl = "$RawBase/main/go/config/config.go"
$Marker = 'Managed-by: kisama_service.ps1'
$EnvKeys = @('ECDSA_PUBKEY', 'ECIES_PUBKEY', 'LOG_LEVEL', 'FILE_ROOT', 'EXEC_TIMEOUT', 'EXEC_SHELL')
$LatestCache = @{}
$script:BinaryUpdated = $false
$script:ConfigChanged = $false   # 本次 start 改写了 agent.env 任何键 → 运行中服务需重启
$script:PortSet = $false         # 本次显式给了 -Port 或环境变量 KPORT (区别于沿用 agent.env)
$script:Mode = 'console'      # task | console
$script:DefaultPort = 8000
# GitHub 加速链 (与面板 AgentDownload.vue 的 GH_ACCELERATORS 同源): raw 与 api 的直连
# 失败时依次尝试 ghproxy 前缀式镜像, raw 额外支持 jsDelivr 改写式 (jsDelivr 是文件 CDN,
# 不适用 api); 第三方节点可用性会变动, 失败自动落到下一个。
# 注意 releases/latest 只返回最新"正式"发布版本——本仓 0.6.x 全部为预发布时它返回旧正
# 式版属 GitHub 正确行为, 非镜像缓存问题 (版本发现主路径 ApiReleases 列表含预发布, 取
# 版本号最大者)。设 KISAMA_GH_MIRROR=<前缀> 可跳过直连强制走加速 (对齐面板"通过加速
# 节点拉取源文件")。
$GH_PREFIX_MIRRORS = @('https://ghfast.top', 'https://gh-proxy.com', 'https://ghproxy.net', 'https://gh.llkk.cc')
$GH_JSDELIVR = 'https://cdn.jsdelivr.net/gh'

function Say($m) { Write-Host $m }
function Step($m) { Write-Host "==> $m" }
function Info($m) { Write-Host "    $m" }
function Warn($m) { Write-Host "警告: $m" -ForegroundColor Yellow }
function Die($m) { Write-Host "错误: $m" -ForegroundColor Red; exit 1 }

function Usage {
    @'
kisama_service.ps1 - Kisama Agent (Go) Windows 部署与管理脚本

用法: powershell -NoProfile -ExecutionPolicy Bypass -File kisama_service.ps1 <指令> [选项]

指令:
  start     安装为服务并启动 (已安装则复用, 顺带做版本检查/升级)
  stop      停止服务
  restart   重启服务
  status    显示安装、运行与版本状态
  enable    设置开机自启 (计划任务 ONSTART)
  disable   取消开机自启
  remove    停止服务并删除计划任务 (-Purge 连安装目录一起删)
  update    检查并升级到最新版本, 运行中的服务自动重启
  help      显示本帮助

选项:
  -Name NAME      服务/计划任务名, 缺省 kisama-agent (多实例并存时用不同名字)
  -Dir PATH       安装目录, 缺省为当前工作目录
  -Port PORT      监听端口, 缺省 8000 (写入 agent.env 的 KPORT; 优先级 -Port > 环境变量
                  KPORT > agent.env 已装值 > 8000)
  -BindHost IP    绑定地址, 缺省跟随 agent 默认 (0.0.0.0)
  -Version TAG    固定安装某个发布标签, 例如 0.5.8 (缺省自动取最新)
  -Bin PATH       使用本地已有 exe, 不联网下载
  -Log PATH       一次性启动模式的日志文件, 缺省 <安装目录>\agent.log
  -FileRoot PATH  文件接口根目录, 缺省 <安装目录>\files (自动创建)
  -Init MODE      auto | task | console (task 需管理员; console 即一次性后台启动)
  -Offline        不访问网络 (不查版本也不下载, 只用现有 exe)
  -DebugMode      以 DEBUG=true 安装 (免认证、免密钥)
  -Force          接管/删除不是本脚本创建的计划任务
  -Purge          配合 remove, 一并删除安装目录

环境变量 (执行脚本时给出即覆盖写入 agent.env — 有变化生效新值, 无变化保持原值;
未注入的键沿用 agent.env 原值, 也可直接编辑 agent.env 后执行 restart):
  KPORT        监听端口 (优先级见 -Port; 环境变量注入同样覆盖 agent.env 旧值)
  ECDSA_PUBKEY ECIES_PUBKEY LOG_LEVEL FILE_ROOT EXEC_TIMEOUT EXEC_SHELL
  KSTORE_KEY    任务持久化加密密钥 (API.MD 十三; hex 64 字符或 std base64 解码后
                恰为 32 字节)。未注入时沿用 agent.env 已有密钥 (无则自动生成随机
                密钥); 注入与已存不同的密钥会覆盖轮换并告警 (旧 store.enc 解密失败
                被隔离, 任务会丢失; 手工换钥后执行 restart 生效)
  KSTORE        持久化存储文件路径, off 显式关闭; 注入即覆盖, 未注入时保持 agent.env
                原值或跟随 agent 默认 (%USERPROFILE%\.tmp\store.enc)
  KISAMA_GH_MIRROR  脚本自身读取 (不进 agent.env): 自定义 GitHub 加速前缀 (如
                https://ghfast.top), 给出时跳过直连强制经加速链下载; 未给出时直连
                失败自动逐个尝试 ghproxy 前缀式镜像 (raw 与 api 均加速; jsDelivr
                改写式仅适用 raw 下载)
  只支持单行值 (base64 压缩点或 hex); 多行 PEM 请放 <安装目录>\keys\ 目录

说明:
  Go 版 agent 不实现 Windows 服务控制协议, 所以 "服务" 用计划任务(ONSTART, SYSTEM)
  实现; 非管理员运行时自动退化为一次性后台启动 (无开机自启)。
  发布标签里目前只有 linux/darwin 的 go 产物, 没有 agent-windows-*.exe; 缺产物时
  先在本机执行 go/build.sh 生成, 再用 -Bin 指向它安装。
'@ | Write-Host
}

function Test-IsAdmin {
    $id = [Security.Principal.WindowsIdentity]::GetCurrent()
    (New-Object Security.Principal.WindowsPrincipal $id).IsInRole(
        [Security.Principal.WindowsBuiltInRole]::Administrator)
}

function Get-ArchArtifactName {
    if ([Environment]::OSVersion.Platform -ne 'Win32NT') { return '' }
    switch ($env:PROCESSOR_ARCHITECTURE) {
        'AMD64' { return 'agent-windows-amd64.exe' }
        'ARM64' { return 'agent-windows-arm64.exe' }
        default { return '' }
    }
}

# PE 头解析: 返回 COFF machine 值 (AMD64=0x8664, ARM64=0xAA64); 不是 PE 或读不动返回 -1
function Get-PeMachine([string]$Path) {
    if (-not (Test-Path -LiteralPath $Path -PathType Leaf)) { return -1 }
    $fs = $null
    try {
        $fs = [IO.File]::OpenRead($Path)
        if ($fs.Length -lt 4096) { return -1 }
        $b = New-Object byte[] 2
        $fs.Seek(0, 'Begin') | Out-Null; $fs.Read($b, 0, 2) | Out-Null
        if (-not ($b[0] -eq 0x4D -and $b[1] -eq 0x5A)) { return -1 }          # 没有 MZ, 不是 Windows exe
        $fs.Seek(0x3C, 'Begin') | Out-Null; $fs.Read($b, 0, 2) | Out-Null
        $peOff = [BitConverter]::ToUInt16($b, 0)
        $sig = New-Object byte[] 4
        $fs.Seek($peOff, 'Begin') | Out-Null; $fs.Read($sig, 0, 4) | Out-Null
        if (-not ($sig[0] -eq 0x50 -and $sig[1] -eq 0x45)) { return -1 }      # 没有 PE\0\0
        $m = New-Object byte[] 2
        $fs.Seek($peOff + 4, 'Begin') | Out-Null; $fs.Read($m, 0, 2) | Out-Null
        return [BitConverter]::ToUInt16($m, 0)
    } catch {
        return -2   # 读不动: 与 "不是 PE" 区分开, 调用方据此不做破坏性动作
    } finally {
        if ($fs) { $fs.Dispose() }
    }
}

function Get-WantPeMachine {
    switch ($env:PROCESSOR_ARCHITECTURE) {
        'ARM64' { return 0xAA64 }
        'AMD64' { return 0x8664 }
        default { return -1 }
    }
}

# 确认本机跑得起来: 必须是 PE, 且 (架构已知时) machine 匹配
function Test-PeForArch([string]$Path) {
    $machine = Get-PeMachine $Path
    if ($machine -lt 0) { return $false }
    $want = Get-WantPeMachine
    if ($want -lt 0) { return $true }
    return ($machine -eq $want)
}

# 本机跑不了的产物 (非 PE, 或 PE 但架构不对); 读不动的文件不算
function Test-PeArchMismatch([string]$Path) {
    $machine = Get-PeMachine $Path
    if ($machine -eq -2) { return $false }
    if ($machine -eq -1) { return $true }
    $want = Get-WantPeMachine
    if ($want -lt 0) { return $false }
    return ($machine -ne $want)
}

function Compare-NewerVersion([string]$A, [string]$B) {
    # A 比 B 新则返回 true
    try {
        $va = [Version]$A; $vb = [Version]$B
        return ($va -gt $vb)
    } catch { return $false }
}

function Get-RemoteContent([string]$Url) {
    try {
        $r = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 25
        return $r.Content
    } catch {
        $curl = Get-Command curl.exe -ErrorAction SilentlyContinue
        if ($curl) {
            $tmp = [IO.Path]::GetTempFileName()
            try {
                & curl.exe -fsSL --connect-timeout 8 --max-time 25 -o $tmp $Url 2>$null
                if ($LASTEXITCODE -eq 0) { return [IO.File]::ReadAllText($tmp) }
            } finally { Remove-Item $tmp -Force -ErrorAction SilentlyContinue }
        }
        throw
    }
}

# GitHub URL → 候选地址列表: raw 与 api 均加速, 直连在前、失败逐个回退前缀镜像;
# jsDelivr 改写仅适用 raw (文件 CDN, 不支持 api); KISAMA_GH_MIRROR 显式给出时跳过
# 直连、自定义前缀优先
function Get-GhCandidates([string]$url) {
    if ($url -notmatch '^https://raw\.githubusercontent\.com/|^https://api\.github\.com/') { return @($url) }
    $out = @()
    $custom = ([string]$env:KISAMA_GH_MIRROR).Trim()
    if ($custom) { $out += $custom.TrimEnd('/') + '/' + $url } else { $out += $url }
    foreach ($m in $GH_PREFIX_MIRRORS) { $out += $m + '/' + $url }
    # jsDelivr 改写式: {base}/{owner}/{repo}@{ref}/{path} (与面板 RAW_URL_RE 同款)
    if ($url -match '^https://raw\.githubusercontent\.com/([^/]+)/([^/]+)/([^/]+)/(.+)$') {
        $out += "$GH_JSDELIVR/$($Matches[1])/$($Matches[2])@$($Matches[3])/$($Matches[4])"
    }
    return $out
}

# 依候选链抓取文本 (raw 版本兜底等), 任一成功即返回
function Get-RemoteContentAny([string]$url) {
    foreach ($u in (Get-GhCandidates $url)) {
        try { return (Get-RemoteContent $u) } catch { }
    }
    throw "全部来源失败 (直连与加速节点均不可达): $url"
}

function Get-LatestVersion {
    if ($LatestCache.ContainsKey('v')) { return $LatestCache['v'] }
    $found = ''
    try {
        # /releases 列表含预发布, 取全部标签里最大的 (releases/latest 只给最新"正式"版)
        $json = Get-RemoteContentAny $ApiReleases | ConvertFrom-Json
        foreach ($rel in $json) {
            $t = ($rel.tag_name -replace '[^0-9.]', '')
            if ($t -match '^\d+(\.\d+){1,3}$') {
                if (-not $found -or (Compare-NewerVersion $t $found)) { $found = $t }
            }
        }
    } catch { }
    if (-not $found) {
        # 兜底 1: main 分支编译期版本常量, 经加速链。AGENT_VERSION 随发布提交 bump
        # (tag 即该提交), 常量恒等于最新发布 tag 版本号 (含预发布口径), 比
        # releases/latest (仅正式版) 更准, 故排在它前面
        try {
            $src = Get-RemoteContentAny $VersionSourceUrl
            if ($src -match 'AGENT_VERSION\s*=\s*"(\d+(?:\.\d+){1,3})"') { $found = $Matches[1] }
        } catch { }
    }
    if (-not $found) {
        # 兜底 2 (最后): releases/latest 只返回最新"正式"发布版本——本仓 0.6.x 全部为
        # 预发布时它给出旧正式版 (如 0.5.4), 属 GitHub 正确行为; 仅作保底, 拿到旧版本
        # 号至多保守降级, 不会误判"已是最新"
        try {
            $rel = Get-RemoteContentAny $ApiLatest | ConvertFrom-Json
            $t = ($rel.tag_name -replace '[^0-9.]', '')
            if ($t -match '^\d+(\.\d+){1,3}$') { $found = $t }
        } catch { }
    }
    if (-not $found) { return $null }
    $LatestCache['v'] = $found
    return $found
}

function Get-InstalledVersion {
    if (Test-Path -LiteralPath $script:VersionFile -PathType Leaf) {
        $v = (Get-Content -LiteralPath $script:VersionFile -Raw).Trim()
        if ($v -match '^\d+(\.\d+){1,3}') { return $v }
    }
    if (Test-Path -LiteralPath $script:AgentExe -PathType Leaf) {
        try {
            $txt = [Text.Encoding]::GetEncoding(28591).GetString([IO.File]::ReadAllBytes($script:AgentExe))
            $m = [regex]::Matches($txt, '\d+\.\d+\.\d+-go')
            if ($m.Count -gt 0) { return ($m[0].Value -replace '-go$', '') }
        } catch { }
    }
    return $null
}

function Save-Agent([string]$Tag) {
    $art = Get-ArchArtifactName
    if (-not $art) { Die "$($env:PROCESSOR_ARCHITECTURE) / Windows 没有官方预编译产物, 请自行编译后用 -Bin 指定" }
    $url = "$RawBase/$Tag/go/$art"
    $part = Join-Path $script:Dir '.agent.download'
    Step "下载 $url"
    # 直连失败自动切加速链 (ghproxy 前缀式 + jsDelivr 改写式); 候选由 Get-GhCandidates 给出
    $ok = $false
    foreach ($u in (Get-GhCandidates $url)) {
        try {
            Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 120 -OutFile $part
            $ok = $true
        } catch {
            $curl = Get-Command curl.exe -ErrorAction SilentlyContinue
            if ($curl) {
                # 不重定向 stderr: PS 5.1 全局 EAP=Stop 下 2>$null 会把 stderr 升级成异常
                & curl.exe -fsSL --connect-timeout 10 --max-time 300 -o $part $u
                if ($LASTEXITCODE -eq 0) { $ok = $true }
            }
        }
        if ($ok) {
            if ($u -ne $url) { Info "经加速节点下载成功: $u" }
            break
        }
        Remove-Item $part -Force -ErrorAction SilentlyContinue
    }
    if (-not $ok) { Die "下载失败 (直连与加速节点均不可达): $url; 若该标签没有 windows 产物, 请编译后用 -Bin 指定" }
    if (-not (Test-Path -LiteralPath $part -PathType Leaf)) { Die "下载失败: 没有落地文件" }
    $size = (Get-Item -LiteralPath $part).Length
    if ($size -le 1000000) { Remove-Item $part -Force; Die "下载内容过小 ($size 字节), 已放弃" }
    if (-not (Test-PeForArch $part)) { Remove-Item $part -Force; Die "下载内容不是本机 $($env:PROCESSOR_ARCHITECTURE) 的 PE 可执行文件, 已放弃" }
    Move-Item -LiteralPath $part -Destination $script:AgentExe -Force
    Set-Content -LiteralPath $script:VersionFile -Value $Tag -Encoding ASCII
    $script:BinaryUpdated = $true
    Info "已安装版本 $Tag ($size 字节)"
}

function Ensure-Binary {
    if ($Bin) {
        if (-not (Test-Path -LiteralPath $Bin -PathType Leaf)) { Die "-Bin 指定的文件不存在: $Bin" }
        if (Test-PeArchMismatch $Bin) {
            Die "-Bin 的 exe 不是本机 $($env:PROCESSOR_ARCHITECTURE) 架构的 PE 文件, 换成本机可用的产物再装"
        }
        $srcItem = Get-Item -LiteralPath $Bin
        if ($srcItem.FullName -ne $script:AgentExe) {
            Step "使用本地 exe $($srcItem.FullName)"
            Copy-Item -LiteralPath $Bin -Destination $script:AgentExe -Force
            Remove-Item $script:VersionFile -Force -ErrorAction SilentlyContinue
            $script:BinaryUpdated = $true
        }
        return
    }

    $cur = Get-InstalledVersion
    $archBad = $false
    if ((Test-Path -LiteralPath $script:AgentExe -PathType Leaf) -and (Test-PeArchMismatch $script:AgentExe)) {
        Warn "$($script:AgentExe) 不是本机 $($env:PROCESSOR_ARCHITECTURE) 架构的可执行文件, 将替换为本机产物"
        Remove-Item $script:VersionFile -Force -ErrorAction SilentlyContinue
        $cur = $null; $archBad = $true
    }

    if ($Version) {
        if ($cur -eq $Version -and (Test-Path -LiteralPath $script:AgentExe -PathType Leaf)) {
            Info "exe 已是 $Version, 跳过下载"
        } else {
            Save-Agent $Version
        }
        return
    }

    if ($Offline) {
        if (-not (Test-Path -LiteralPath $script:AgentExe -PathType Leaf)) { Die "-Offline 且 $($script:AgentExe) 不存在, 没有可用 exe" }
        if ($archBad) { Die "-Offline 且现有 exe 架构不匹配本机, 无法重新下载" }
        Info "离线模式, 使用现有 exe $(if ($cur) { $cur } else { '版本未知' })"
        return
    }

    $latest = Get-LatestVersion
    if (-not $latest) { Warn '无法获取最新版本号 (网络不可达或接口变更), 按现有 exe 处理' }

    if (-not (Test-Path -LiteralPath $script:AgentExe -PathType Leaf)) {
        if (-not $latest) { Die '本机没有 agent exe, 又取不到最新版本号, 无法安装 (可用 -Bin 或 -Version)' }
        Step "本机未安装 agent, 最新版本为 $latest"
        Save-Agent $latest
        return
    }
    if ($archBad) {
        if (-not $latest) { Die '现有 exe 架构不匹配本机, 又取不到最新版本号, 无法替换' }
        Save-Agent $latest
        return
    }
    if (-not $cur) {
        Info '现有 exe 版本未知 (可能是自行放入的), 保持不覆盖; 要升级请执行 update'
        return
    }
    if ($latest -and (Compare-NewerVersion $latest $cur)) {
        Step "检测到新版本 $latest (当前 $cur), 更新"
        Save-Agent $latest
    } else {
        Info "exe 已是最新 ($cur)"
    }
}

function Set-EnvValue([string]$Key, [string]$Value) {
    if ($Value -match "`r|`n") { Die "$Key 的值含换行 (多行 PEM?), 请改用 $($script:Dir)\keys\ 目录放密钥文件" }
    # 同值跳过: 不重写不动行序, 第二次 start 无变化时不触发配置重启
    if ((Read-EnvValue $Key) -eq $Value) { return }
    $script:ConfigChanged = $true
    $lines = @()
    if (Test-Path -LiteralPath $script:EnvFile -PathType Leaf) {
        $lines = @(Get-Content -LiteralPath $script:EnvFile -Encoding UTF8 | Where-Object { $_ -notmatch "^$Key=" })
    } else {
        $lines = @("# Kisama Agent 环境变量, 由 kisama_service.ps1 生成, 可手工编辑",
                   '# 行格式 KEY=VALUE; 计划任务的 run.ps1 与一次性启动都会读取它')
    }
    $lines += "$Key=$Value"
    # UTF8(BOM): 值里可能含中文路径, ASCII 会把它们写成 '?' 而损坏 FILE_ROOT 等配置
    [IO.File]::WriteAllLines($script:EnvFile, $lines, (New-Object Text.UTF8Encoding $true))
}

function Write-EnvFile {
    if (-not (Test-Path -LiteralPath $script:EnvFile -PathType Leaf)) {
        [IO.File]::WriteAllLines($script:EnvFile, @(
            '# Kisama Agent 环境变量, 由 kisama_service.ps1 生成, 可手工编辑',
            '# 行格式 KEY=VALUE; 计划任务的 run.ps1 与一次性启动都会读取它'),
            (New-Object Text.UTF8Encoding $true))
    }
    if ($script:PortSet) { Set-EnvValue 'KPORT' "$($script:EffectivePort)" }
    if ($BindHost) { Set-EnvValue 'HOST' $BindHost }
    if ($DebugMode) { Set-EnvValue 'DEBUG' 'true' }
    # 注入即生效: 本次执行给过的环境变量覆盖 agent.env 旧值 (同值由 Set-EnvValue 跳过)
    foreach ($k in $EnvKeys) {
        $v = [Environment]::GetEnvironmentVariable($k)
        if (-not $v) { continue }
        Set-EnvValue $k $v
    }
    # 文件接口根目录: SYSTEM 身份跑时缺省会落到 systemprofile, 所以显式指到安装目录。
    # 优先级 -FileRoot > 环境变量 FILE_ROOT (上方白名单循环已覆盖) > agent.env 已存值
    # > 缺省 <安装目录>\files
    if ($FileRoot) { Set-EnvValue 'FILE_ROOT' $FileRoot }
    elseif (-not (Read-EnvValue 'FILE_ROOT')) {
        $want = Join-Path $script:Dir 'files'
        Set-EnvValue 'FILE_ROOT' $want
        New-Item -ItemType Directory -Force -Path $want | Out-Null
    }
    # 任务持久化 (API.MD 十三): 未注入时沿用 agent.env 已有密钥 (无则生成一次) — 自动
    # 路径绝不轮换; 注入与已存不同的密钥则覆盖并告警 (换钥后旧 store.enc 解密失败被
    # 隔离, 已恢复的任务全部丢失)
    $kk = [Environment]::GetEnvironmentVariable('KSTORE_KEY')
    if ($kk) {
        if (-not (Test-KstoreKey $kk)) {
            Die '注入的 KSTORE_KEY 非法 (需 hex 64 字符或 std base64 解码后恰为 32 字节), 按 agent 口径任务持久化会保持关闭'
        }
        if ((Read-EnvValue 'KSTORE_KEY') -ne $kk) {
            if (Read-EnvValue 'KSTORE_KEY') {
                Warn '注入的 KSTORE_KEY 与已存密钥不同, 覆盖后旧 store.enc 将解密失败被隔离 (任务丢失); 非有意轮换请核对注入来源'
            }
            Set-EnvValue 'KSTORE_KEY' $kk
            Info '已写入注入的 KSTORE_KEY, 任务持久化启用 (密钥见 agent.env, 不回显)'
        }
    } elseif (-not (Read-EnvValue 'KSTORE_KEY')) {
        $gen = New-KstoreKey
        if ($gen) {
            Set-EnvValue 'KSTORE_KEY' $gen
            Info '已生成随机 KSTORE_KEY 写入 agent.env, 任务持久化启用'
        } else {
            Warn '无法生成 KSTORE_KEY, 任务持久化保持关闭, 不影响 agent 其他功能'
        }
    }
    # KSTORE: 注入即覆盖 (含 off), 同值自动跳过; 未注入保持 agent.env 原值或缺省
    $ks = [Environment]::GetEnvironmentVariable('KSTORE')
    if ($ks) { Set-EnvValue 'KSTORE' $ks }
    Protect-EnvFile
}

function Read-EnvValue([string]$Key) {
    if (-not (Test-Path -LiteralPath $script:EnvFile -PathType Leaf)) { return '' }
    $hit = @(Get-Content -LiteralPath $script:EnvFile -Encoding UTF8 | Where-Object { $_ -match "^$Key=" })
    if ($hit.Count -eq 0) { return '' }
    $val = ($hit[$hit.Count - 1] -split '=', 2)[1]
    if ($val -match '^"(.*)"$' -or $val -match "^'(.*)'$") { return $Matches[1] }
    return $val
}

# 任务持久化 (API.MD 十三): KSTORE_KEY 预校验与 go/handlers/task_store.go
# parseTaskStoreKey 同口径 — hex (恰 64 字符) 或 std base64, 解码后必须恰为 32 字节
function Test-KstoreKey([string]$k) {
    if (-not $k -or $k -match '\s') { return $false }
    if ($k -match '^[0-9a-fA-F]{64}$') { return $true }
    try { return ([Convert]::FromBase64String($k).Length -eq 32) } catch { return $false }
}

# 生成 32 字节随机密钥的 hex 形态 (64 字符); 失败返回 $null
function New-KstoreKey {
    try {
        $b = New-Object byte[] 32
        $rng = [Security.Cryptography.RandomNumberGenerator]::Create()
        try { $rng.GetBytes($b) } finally { $rng.Dispose() }
        return (($b | ForEach-Object { $_.ToString('x2') }) -join '')
    } catch { return $null }
}

# agent.env 含 KSTORE_KEY 后即持有密钥材料, 收紧 ACL 为仅当前用户/SYSTEM/管理员
# (用 SID 形式, 免受系统显示语言影响); 失败仅告警, 不阻断安装
function Protect-EnvFile {
    if (-not (Read-EnvValue 'KSTORE_KEY')) { return }
    try {
        $u = "$env:USERDOMAIN\$env:USERNAME"
        & icacls $script:EnvFile /inheritance:r /grant:r "${u}:F" '*S-1-5-18:F' '*S-1-5-32-544:F' | Out-Null
        if ($LASTEXITCODE -ne 0) { Warn "收紧 agent.env ACL 失败 (icacls 退出码 $LASTEXITCODE)" }
    } catch { Warn "收紧 agent.env ACL 失败: $($_.Exception.Message)" }
}

function Write-Runner {
    # 用单引号 here-string: 里面的 $ 全部原样落盘, 不做任何插值
    $body = @'
#!# __MARKER__
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$envf = Join-Path $root 'agent.env'
if (Test-Path -LiteralPath $envf -PathType Leaf) {
    foreach ($line in (Get-Content -LiteralPath $envf -Encoding UTF8)) {
        if ($line -match '^\s*([A-Za-z_][A-Za-z0-9_]*)=(.*)$') {
            Set-Item -Path ("env:" + $Matches[1]) -Value $Matches[2].Trim()
        }
    }
}
Set-Location $root
& (Join-Path $root 'agent.exe')
'@
    $body = $body.Replace('__MARKER__', $Marker) -replace "`r`n", "`n" -replace "`n", "`r`n"
    if (Test-Path -LiteralPath $script:Runner -PathType Leaf) {
        $old = Get-Content -LiteralPath $script:Runner -Raw
        # 内容一致才跳过; 不是本脚本生成的文件必须 -Force 才动
        if ($old.Replace("`r`n", "`n") -eq $body.Replace("`r`n", "`n")) { return }
        if ($old -notmatch [regex]::Escape($Marker)) {
            if (-not $Force) { Die "$($script:Runner) 已存在且不是本脚本生成的, 请加 -Force 覆盖或换 -Dir" }
        }
    }
    Step "生成 $($script:Runner)"
    [IO.File]::WriteAllText($script:Runner, $body, (New-Object Text.UTF8Encoding $true))
}

function Debug-Effective {
    if ($DebugMode) { return $true }
    return ((Read-EnvValue 'DEBUG') -eq 'true')
}

function Test-KeysReady {
    if (Debug-Effective) { return $true }
    if ([Environment]::GetEnvironmentVariable('ECDSA_PUBKEY') -and [Environment]::GetEnvironmentVariable('ECIES_PUBKEY')) { return $true }
    if ((Read-EnvValue 'ECDSA_PUBKEY') -and (Read-EnvValue 'ECIES_PUBKEY')) { return $true }
    $p = Join-Path $script:Dir 'keys\agent_ecdsa_pub.pem'
    $q = Join-Path $script:Dir 'keys\agent_ecies_pub.b64'
    return ((Test-Path -LiteralPath $p -PathType Leaf) -and (Test-Path -LiteralPath $q -PathType Leaf))
}

#==============================================================================
# 计划任务 / 一次性启动
#==============================================================================

function Test-TaskCmdlets { [bool](Get-Command Get-ScheduledTask -ErrorAction SilentlyContinue) }

function Get-AgentTask {
    if (-not (Test-TaskCmdlets)) { return $null }
    try { return Get-ScheduledTask -TaskName $Name -ErrorAction Stop } catch { return $null }
}

function TaskIsOurs($task) {
    if (-not $task) { return $false }
    return ($task.Task.Description -and $task.Task.Description -match [regex]::Escape($Marker))
}

function Register-AgentTask {
    $task = Get-AgentTask
    if ($task -and -not (TaskIsOurs $task) -and -not $Force) {
        Die "计划任务 '$Name' 已存在且不是本脚本创建的。接管请加 -Force, 或用 -Name 换个名字"
    }
    $action = New-ScheduledTaskAction -Execute 'powershell.exe' `
        -Argument "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$($script:Runner)`""
    $settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries `
        -StartWhenAvailable -MultipleInstances IgnoreNew -RestartCount 3 -RestartInterval (New-TimeSpan -Minutes 1)
    $trigger = New-ScheduledTaskTrigger -AtStartup
    if ($task) {
        Step "更新计划任务 $Name"
        Set-ScheduledTask -TaskName $Name -Action $action -Trigger $trigger -Settings $settings `
            -Description $Marker -User 'SYSTEM' -RunLevel Highest | Out-Null
    } else {
        Step "注册计划任务 $Name (ONSTART, SYSTEM)"
        Register-ScheduledTask -TaskName $Name -Action $action -Trigger $trigger -Settings $settings `
            -Description $Marker -User 'SYSTEM' -RunLevel Highest | Out-Null
    }
}

function Get-AgentProcesses {
    $seen = @{}
    $out = @()
    $exe = $script:AgentExe
    if (Test-Path -LiteralPath $script:PidFile -PathType Leaf) {
        $p = (Get-Content -LiteralPath $script:PidFile -First 1).Trim()
        if ($p -match '^\d+$') {
            $proc = Get-Process -Id ([int]$p) -ErrorAction SilentlyContinue
            if ($proc -and -not $proc.HasExited) { $seen[[int]$p] = 1; $out += $proc }
        }
    }
    $others = @(Get-Process -Name 'agent' -ErrorAction SilentlyContinue |
        Where-Object { $_.Path -and ($_.Path -ieq $exe) })
    foreach ($proc in $others) {
        if (-not $seen.ContainsKey($proc.Id)) { $seen[$proc.Id] = 1; $out += $proc }
    }
    , @($out | Sort-Object Id)
}

function Test-PortListening([int]$p) {
    try {
        $conns = [System.Net.NetworkInformation.IPGlobalProperties]::GetIPGlobalProperties().GetActiveTcpListeners()
        foreach ($c in $conns) { if ($c.Port -eq $p) { return $true } }
        return $false
    } catch {
        foreach ($l in (& netstat -ano 2>$null)) {
            if ($l -match 'TCP\s+\S+:(\d+)\s+\S+\s+LISTENING') {
                if ([int]$Matches[1] -eq $p) { return $true }
            }
        }
        return $false
    }
}

function TaskState {
    $task = Get-AgentTask
    if (-not $task) { return '未注册' }
    return [string]$task.State
}

function Test-TaskRunning { (TaskState) -eq 'Running' }

function Start-Agent {
    if ($script:Mode -eq 'task') {
        if (Test-TaskRunning) { Info '任务已在运行'; return }
        Step '启动计划任务'
        Start-ScheduledTask -TaskName $Name
    } else {
        $procs = Get-AgentProcesses
        if ($procs.Count -gt 0) { Info "已有实例在运行 (pid $($procs[0].Id))"; return }
        Step '一次性后台启动 (Start-Process -WindowStyle Hidden)'
        New-Item -ItemType Directory -Force -Path (Split-Path -Parent $script:LogFile) | Out-Null
        $p = Start-Process -FilePath 'powershell.exe' `
            -ArgumentList "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$($script:Runner)`"" `
            -WorkingDirectory $script:Dir -WindowStyle Hidden -PassThru `
            -RedirectStandardOutput $script:LogFile -RedirectStandardError "$($script:LogFile).err"
        Set-Content -LiteralPath $script:PidFile -Value $p.Id -Encoding ASCII
        Start-Sleep -Seconds 1
    }
}

function Stop-Agent {
    if ($script:Mode -eq 'task') {
        $task = Get-AgentTask
        if (-not $task) { Info '任务未注册'; return }
        if (Test-TaskRunning) {
            Step '停止计划任务'
            Stop-ScheduledTask -TaskName $Name
        }
    }
    # 两种模式都兜底按安装目录里的 exe 精确结束进程
    $procs = Get-AgentProcesses
    if ($procs.Count -eq 0) { Info '没有在运行的实例'; return }
    foreach ($proc in $procs) {
        Step "结束进程 pid $($proc.Id)"
        try {
            $proc.Refresh()
            if (-not $proc.HasExited) { $null = $proc.Kill(); $null = $proc.WaitForExit(10000) }
        } catch {
            # 进程正在自行退出时 Kill 会报 Access is denied, 这不是失败
            Start-Sleep -Milliseconds 300
            $proc.Refresh()
            if ($proc.HasExited) { Info "pid $($proc.Id) 已退出" }
            else { Warn "结束 pid $($proc.Id) 失败: $($_.Exception.Message)" }
        }
    }
    Remove-Item $script:PidFile -Force -ErrorAction SilentlyContinue
}

function Wait-AgentReady {
    for ($i = 0; $i -lt 20; $i++) {
        if (Test-PortListening $script:EffectivePort) { return $true }
        Start-Sleep -Seconds 1
    }
    return $false
}

function Hint-Failure {
    if ($script:Mode -eq 'task') {
        Info '查看原因: 事件查看器 -> 应用程序和服务日志 -> Microsoft -> Windows -> TaskScheduler'
    } else {
        Info "查看原因: $($script:LogFile) 与 $($script:LogFile).err (agent 的启动报错在 .err 里)"
    }
    Info "或: powershell -File kisama_service.ps1 status -Name $Name"
}

#==============================================================================
# 前置检查
#==============================================================================

function Resolve-Paths {
    $raw = if ($Dir) { $Dir } else { (Get-Location).Path }
    $abs = $raw
    if (-not [IO.Path]::IsPathRooted($abs)) {
        $abs = Join-Path (Get-Location).Path ($abs -replace '^(\.\\|\./)', '')
    }
    try { $abs = [IO.Path]::GetFullPath($abs) } catch { }
    # 目录还不存在时不能用 Get-Item 规范化, 只能靠 GetFullPath
    $script:Dir = $abs.TrimEnd('\', '/')
    $script:AgentExe = Join-Path $script:Dir 'agent.exe'
    $script:VersionFile = Join-Path $script:Dir 'agent.version'
    $script:EnvFile = Join-Path $script:Dir 'agent.env'
    $script:Runner = Join-Path $script:Dir 'run.ps1'
    $script:PidFile = Join-Path $script:Dir 'agent.pid'
    if ($Log) {
        $l = $Log
        if (-not [IO.Path]::IsPathRooted($l)) { $l = Join-Path (Get-Location).Path $l }
        try { $l = [IO.Path]::GetFullPath($l) } catch { }
        $script:LogFile = $l
    } else {
        $script:LogFile = Join-Path $script:Dir 'agent.log'
    }
}

function Preflight {
    if ($Name -notmatch '^[A-Za-z0-9_.@\-]+$') { Die '-Name 只允许字母、数字和 . _ @ -' }
    if ($Port -lt 0 -or $Port -gt 65535) { Die '-Port 超出 0-65535' }
    if ($Version -and $Version -notmatch '^[A-Za-z0-9._\-]+$') { Die '-Version 不是合法标签' }
    Resolve-Paths
    if (-not (Test-Path -LiteralPath $script:Dir -PathType Container)) {
        New-Item -ItemType Directory -Force -Path $script:Dir -ErrorAction SilentlyContinue | Out-Null
    }
    if (-not (Test-Path -LiteralPath $script:Dir -PathType Container)) {
        Die "安装目录不存在且无法创建: $($script:Dir) (或用 -Dir 指定)"
    }

    # 端口优先级: -Port > 环境变量 KPORT > agent.env 已装值 > 缺省 8000;
    # 注入的 KPORT 与已装值不同时, Write-EnvFile 会覆盖并触发运行中服务重启
    $script:EffectivePort = $script:DefaultPort
    $script:PortSet = $false
    if ($Port -gt 0) {
        $script:EffectivePort = $Port
        $script:PortSet = $true
    } else {
        $ke = ([string][Environment]::GetEnvironmentVariable('KPORT')).Trim()
        if ($ke -match '^\d+$') {
            if ([int]$ke -ge 1 -and [int]$ke -le 65535) {
                $script:EffectivePort = [int]$ke
                $script:PortSet = $true
            } else { Warn "环境变量 KPORT=$ke 超出 1-65535, 已忽略" }
        }
        if (-not $script:PortSet) {
            $kp = Read-EnvValue 'KPORT'
            if ($kp -match '^\d+$' -and [int]$kp -ge 1 -and [int]$kp -le 65535) { $script:EffectivePort = [int]$kp }
        }
    }

    $admin = Test-IsAdmin
    $hasTask = (Test-TaskCmdlets)
    switch ($Init) {
        'task' {
            if (-not $admin) { Die '-Init task 需要管理员权限 (右键以管理员身份运行)' }
            if (-not $hasTask) { Die '系统里没有 ScheduledTasks 模块, 无法用 -Init task' }
            $script:Mode = 'task'
        }
        'console' { $script:Mode = 'console' }
        default {
            if ($admin -and $hasTask) { $script:Mode = 'task' }
            else { $script:Mode = 'console' }
        }
    }
    $tmp = [IO.Path]::GetTempPath().TrimEnd('\')
    if ($script:Mode -ne 'console' -and $script:Dir -like "$tmp*") {
        Warn "安装目录在临时目录 $($script:Dir), 清理后服务会起不来, 建议用 -Dir C:\kisama 之类固定路径"
    }
}

function Describe-Mode {
    $os = (Get-CimInstance -ClassName Win32_OperatingSystem -ErrorAction SilentlyContinue).Caption
    if (-not $os) { $os = "Windows ($($env:PROCESSOR_ARCHITECTURE))" }
    $admin = if (Test-IsAdmin) { '管理员' } else { "普通用户 (uid 非管理员)" }
    if ($script:Mode -eq 'task') {
        Say "系统: $os | $admin -> 使用计划任务 (ONSTART, SYSTEM), 支持开机自启"
    } else {
        Say "系统: $os | $admin -> 一次性后台启动 (不支持开机自启)"
    }
}

#==============================================================================
# 指令
#==============================================================================

function Invoke-Start {
    Preflight
    Describe-Mode

    # 端口被别人占了就别做任何改动, 免得装出起不来的服务
    $wasActive = $false
    if ($script:Mode -eq 'task') { $wasActive = Test-TaskRunning }
    if (-not $wasActive) { $wasActive = (Get-AgentProcesses).Count -gt 0 }
    if (-not $wasActive -and (Test-PortListening $script:EffectivePort)) {
        Die "端口 $($script:EffectivePort) 已被占用 (用 -Port 换端口, 或先停掉占用它的进程)"
    }

    Ensure-Binary
    Write-EnvFile
    Write-Runner
    if ($script:Mode -eq 'task') { Register-AgentTask }

    if (-not (Test-KeysReady)) {
        Warn '没有控制端公钥, agent 非 DEBUG 模式会报 "Configuration validation failed" 后退出。'
        Warn "解决: 把 agent_ecdsa_pub.pem / agent_ecies_pub.b64 放进 $($script:Dir)\keys\,"
        Warn '或导出 ECDSA_PUBKEY / ECIES_PUBKEY 后重跑, 或加 -DebugMode 装免认证实例。'
    }

    if ($wasActive) {
        if ($script:BinaryUpdated -or $script:ConfigChanged) {
            if ($script:BinaryUpdated) { Step 'exe 已更新, 重启服务使其生效' }
            else { Step '配置已更新, 重启服务使其生效' }
            Stop-Agent; Start-Sleep -Seconds 1; Start-Agent
        } else {
            Info '服务已在运行, 跳过启动'
        }
    } else {
        Start-Agent
    }

    if (Wait-AgentReady) {
        Info "监听端口 $($script:EffectivePort) 已就绪"
    } else {
        Warn "端口 $($script:EffectivePort) 没有进入监听状态, 服务可能没起来"
        Hint-Failure
    }
    Write-Host ''
    Invoke-Status
}

function Invoke-Stop {
    Preflight
    Describe-Mode
    Stop-Agent
    Info '已停止'
}

function Invoke-Restart {
    Preflight
    Describe-Mode
    if (-not (Test-Path -LiteralPath $script:AgentExe -PathType Leaf)) { Die "尚未安装, 请先执行 start" }
    Stop-Agent
    Start-Sleep -Seconds 1
    Start-Agent
    if (Wait-AgentReady) { Info "监听端口 $($script:EffectivePort) 已就绪" }
    else { Warn "端口 $($script:EffectivePort) 未监听"; Hint-Failure }
}

function Invoke-Enable {
    Preflight
    Describe-Mode
    if ($script:Mode -ne 'task') {
        Die '一次性启动模式无法开机自启。要自启请用管理员身份运行本脚本 (计划任务 ONSTART), 或把 run.ps1 的快捷方式放进启动文件夹 (shell:startup)'
    }
    $task = Get-AgentTask
    if (-not $task) { Die "计划任务 '$Name' 不存在, 请先执行 start" }
    if (-not (TaskIsOurs $task) -and -not $Force) { Die "计划任务 '$Name' 不是本脚本创建的, 不动它 (确认接管请加 -Force)" }
    Enable-ScheduledTask -TaskName $Name | Out-Null
    Info '已设置开机自启'
}

function Invoke-Disable {
    Preflight
    Describe-Mode
    if ($script:Mode -ne 'task') { Die '一次性启动模式没有开机自启设置' }
    $task = Get-AgentTask
    if (-not $task) { Die "计划任务 '$Name' 不存在" }
    if (-not (TaskIsOurs $task) -and -not $Force) { Die "计划任务 '$Name' 不是本脚本创建的, 不动它 (确认接管请加 -Force)" }
    Disable-ScheduledTask -TaskName $Name | Out-Null
    Info '已取消开机自启'
}

function Invoke-Remove {
    Preflight
    Describe-Mode
    Stop-Agent
    $task = Get-AgentTask
    if ($task) {
        if (-not (TaskIsOurs $task) -and -not $Force) {
            Die "计划任务 '$Name' 不是本脚本创建的, 拒绝删除 (确定要删请加 -Force)"
        }
        Step "删除计划任务 $Name"
        Unregister-ScheduledTask -TaskName $Name -Confirm:$false
    } else {
        Info "计划任务 '$Name' 不存在, 跳过"
    }
    Remove-Item $script:Runner -Force -ErrorAction SilentlyContinue
    Remove-Item $script:PidFile -Force -ErrorAction SilentlyContinue
    if ($Purge) {
        Step "删除安装目录 $($script:Dir)"
        Remove-Item -LiteralPath $script:Dir -Recurse -Force -ErrorAction SilentlyContinue
    } else {
        Info "保留安装目录 $($script:Dir) (exe / agent.env / keys), 要一并删除请加 -Purge"
    }
}

function Invoke-Update {
    Preflight
    Describe-Mode
    if ($Offline) { Die 'update 需要联网, 请去掉 -Offline' }
    Ensure-Binary
    if ($script:BinaryUpdated) {
        $running = (Get-AgentProcesses).Count -gt 0
        if ($script:Mode -eq 'task') { $running = $running -or (Test-TaskRunning) }
        if ($running) {
            Step '重启服务加载新 exe'
            Stop-Agent; Start-Sleep -Seconds 1; Start-Agent
            if (Wait-AgentReady) { Info "监听端口 $($script:EffectivePort) 已就绪" }
            else { Warn "端口 $($script:EffectivePort) 未监听"; Hint-Failure }
        } else {
            Info '服务未在运行, 下次 start 会使用新 exe'
        }
    }
}

function Invoke-Status {
    Preflight
    Describe-Mode
    Say "服务名   : $Name"
    Say "安装目录 : $($script:Dir)"
    if (Test-Path -LiteralPath $script:AgentExe -PathType Leaf) {
        $sz = (Get-Item -LiteralPath $script:AgentExe).Length
        $v = Get-InstalledVersion
        Say "exe      : $($script:AgentExe) ($sz 字节, 版本 $(if ($v) { $v } else { '未知' }))"
    } else {
        Say 'exe      : 未安装'
    }
    if ($Offline) { Say '最新版本 : 未查询 (-Offline)' }
    else {
        $l = Get-LatestVersion
        Say "最新版本 : $(if ($l) { $l } else { '查询失败' })"
    }
    if ($script:Mode -eq 'task') {
        $task = Get-AgentTask
        if ($task) {
            $ours = if (TaskIsOurs $task) { '本脚本管理' } else { '他人创建' }
            Say "计划任务 : $Name ($ours)"
            Say "任务状态 : $(TaskState)"
            $info = $task | Get-ScheduledTaskInfo -ErrorAction SilentlyContinue
            if ($info) { Say "上次运行 : $($info.LastRunTime)  结果: $($info.LastTaskResult)" }
            Say "开机自启 : $(if ((TaskState) -eq 'Disabled') { 'Disabled (触发器已停用)' } else { 'ONSTART 已启用' })"
        } else {
            Say '计划任务 : 未注册'
            Say '开机自启 : 未设置'
        }
    }
    $procs = Get-AgentProcesses
    if ($procs.Count -gt 0) {
        $ids = ($procs | ForEach-Object { $_.Id }) -join ','
        Say "进程     : 运行中 (pid $ids)"
    } else {
        Say '进程     : 无'
    }
    Say "端口 $($script:EffectivePort) : $(if (Test-PortListening $script:EffectivePort) { '监听中' } else { '未监听' })"
    if ($Offline) {
        Say '健康检查 : 未查询 (-Offline)'
    } elseif (-not (Debug-Effective)) {
        Say '健康检查 : 跳过 (非 DEBUG 模式时 /health 也要签名)'
    } else {
        $health = $null
        try {
            $health = (Invoke-WebRequest -Uri "http://127.0.0.1:$($script:EffectivePort)/health" -UseBasicParsing -TimeoutSec 3).Content
        } catch { }
        Say ("健康检查 : " + $(if ($health) { $health } else { '无响应' }))
    }
    if (Debug-Effective) { Say '认证     : DEBUG 模式 (免认证、不需要密钥)' }
    elseif (Test-KeysReady) { Say '认证     : 控制端公钥已就绪' }
    else { Say '认证     : 缺控制端公钥 (非 DEBUG 模式下 agent 会拒绝启动)' }
    # 与 agent 端 strings.ToLower 口径一致: off/0/none/false 不区分大小写均视为显式关闭
    $ks = Read-EnvValue 'KSTORE'
    if ($ks -match '^(off|0|none|false)$') {
        Say "持久化   : 已显式关闭 (KSTORE=$ks)"
    } elseif (Read-EnvValue 'KSTORE_KEY') {
        Say "持久化   : 已启用 (store: $(if ($ks) { $ks } else { 'agent 默认 (%USERPROFILE%\.tmp\store.enc)' }))"
    } else {
        Say '持久化   : 未启用 (agent.env 无 KSTORE_KEY)'
    }
}

switch ($Command) {
    'start'   { Invoke-Start }
    'stop'    { Invoke-Stop }
    'restart' { Invoke-Restart }
    'status'  { Invoke-Status }
    'enable'  { Invoke-Enable }
    'disable' { Invoke-Disable }
    'remove'  { Invoke-Remove }
    'update'  { Invoke-Update }
    'help'    { Usage }
}
