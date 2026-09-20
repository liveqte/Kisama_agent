//go:build windows

package handlers

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strconv"
	"strings"

	"github.com/UserExistsError/conpty"
)

// newTerminalSession 在 Windows 上优先使用 ConPTY 伪控制台（与 Unix PTY 行为对齐：
// 提示符、回车换行、光标移动均由真实终端驱动），旧系统（< Windows 10 1809）回退到管道实现。
func newTerminalSession(cmd *exec.Cmd, rows, cols uint16) (terminalSession, error) {
	if conpty.IsConPtyAvailable() {
		return newConPtyTerminal(cmd, rows, cols)
	}
	return newPipeTerminal(cmd)
}

// buildCommandLine 由 cmd.Args 拼接 CreateProcessW 命令行（含空格的参数加引号）
func buildCommandLine(cmd *exec.Cmd) string {
	parts := make([]string, 0, len(cmd.Args))
	if cmd.Path != "" {
		parts = append(parts, quoteIfNeeded(cmd.Path))
	}
	for _, arg := range cmd.Args[min(1, len(cmd.Args)):] {
		parts = append(parts, quoteIfNeeded(arg))
	}
	return strings.Join(parts, " ")
}

func quoteIfNeeded(s string) string {
	if strings.ContainsAny(s, " ") {
		return `"` + s + `"`
	}
	return s
}

// conptyTerminal 基于 Windows Pseudo Console (ConPTY) 的真实终端实现
type conptyTerminal struct {
	cpty *conpty.ConPty
	pid  int
}

func newConPtyTerminal(cmd *exec.Cmd, rows, cols uint16) (terminalSession, error) {
	// ConPTY 通过 CreateProcessW 直接启动进程，commandLine 由 cmd.Args 拼接（含空格需加引号），
	// 使 incognito 模式下 PowerShell 的 -NoExit -Command 启动参数得以传入
	commandLine := buildCommandLine(cmd)

	env := cmd.Env
	if env == nil {
		env = os.Environ()
	}

	cpty, err := conpty.Start(commandLine,
		conpty.ConPtyDimensions(int(cols), int(rows)),
		conpty.ConPtyWorkDir(cmd.Dir),
		conpty.ConPtyEnv(env),
	)
	if err != nil {
		return nil, fmt.Errorf("启动 ConPTY 终端失败: %w", err)
	}
	return &conptyTerminal{cpty: cpty, pid: cpty.Pid()}, nil
}

func (t *conptyTerminal) Read(p []byte) (int, error)  { return t.cpty.Read(p) }
func (t *conptyTerminal) Write(p []byte) (int, error) { return t.cpty.Write(p) }

// Close 关闭伪控制台会连带终止其绑定的客户端进程
func (t *conptyTerminal) Close() error { return t.cpty.Close() }

func (t *conptyTerminal) Resize(rows, cols uint16) error {
	return t.cpty.Resize(int(cols), int(rows))
}

// KillTree 通过 taskkill 强制结束整个进程树（等价于 Unix 的进程组击杀）
func (t *conptyTerminal) KillTree() error {
	kill := exec.Command("taskkill", "/F", "/T", "/PID", strconv.Itoa(t.pid))
	// 进程可能已退出，taskkill 的报错忽略即可
	_ = kill.Run()
	return nil
}

// pipeTerminal 是旧版 Windows 的管道回退实现（无 ConPTY 时使用）：
// 没有真实终端，仅保持 io.ReadWriteCloser 语义（stdout/stderr 合并读、stdin 写入）。
type pipeTerminal struct {
	out *os.File // 子进程 stdout+stderr 合并管道（父端只读）
	in  *os.File // 向子进程 stdin 写入的管道（父端只写）
	pid int
}

func newPipeTerminal(cmd *exec.Cmd) (terminalSession, error) {
	inR, inW, err := os.Pipe()
	if err != nil {
		return nil, err
	}
	outR, outW, err := os.Pipe()
	if err != nil {
		_ = inR.Close()
		_ = inW.Close()
		return nil, err
	}

	cmd.Stdin = inR
	cmd.Stdout = outW
	cmd.Stderr = outW

	if err := cmd.Start(); err != nil {
		_ = inR.Close()
		_ = inW.Close()
		_ = outR.Close()
		_ = outW.Close()
		return nil, err
	}

	// 关闭父进程侧持有的子进程端管道
	_ = inR.Close()
	_ = outW.Close()

	return &pipeTerminal{out: outR, in: inW, pid: cmd.Process.Pid}, nil
}

func (t *pipeTerminal) Read(p []byte) (int, error)  { return t.out.Read(p) }
func (t *pipeTerminal) Write(p []byte) (int, error) { return t.in.Write(p) }
func (t *pipeTerminal) Close() error {
	_ = t.in.Close()
	return t.out.Close()
}

// Resize 在无 TTY 的管道回退模式下为 no-op
func (t *pipeTerminal) Resize(rows, cols uint16) error { return nil }

// KillTree 通过 taskkill 强制结束整个进程树
func (t *pipeTerminal) KillTree() error {
	kill := exec.Command("taskkill", "/F", "/T", "/PID", strconv.Itoa(t.pid))
	_ = kill.Run()
	return nil
}

// defaultTerminalShell 优先 PowerShell，退而求其次使用系统默认 cmd.exe
func defaultTerminalShell() string {
	if _, err := exec.LookPath("powershell.exe"); err == nil {
		return "powershell.exe"
	}
	if comspec := os.Getenv("COMSPEC"); comspec != "" {
		if _, err := os.Stat(comspec); err == nil {
			return comspec
		}
	}
	return "cmd.exe"
}

// incognitoShellArgs Windows 端无痕: PowerShell 经启动参数禁用 PSReadLine 历史落盘
// (-Command 在 profile 之后执行, 可覆盖用户配置); cmd.exe 无持久历史, 无需处理
func incognitoShellArgs(shell string, enabled bool) []string {
	if enabled && strings.EqualFold(filepath.Base(shell), "powershell.exe") {
		return []string{"-NoExit", "-Command", "Set-PSReadLineOption -HistorySaveStyle SaveNothing"}
	}
	return nil
}

// incognitoEnv Windows 端无痕经启动参数实现，无需环境变量
func incognitoEnv() []string { return nil }

// incognitoNativeApplied 本次 spawn 的 shell 是否已满足无痕要求
// (powershell 已带 SaveNothing 参数, cmd 本身无持久历史 -> true; 其余未知 shell -> false)
func incognitoNativeApplied(shell string) bool {
	base := strings.ToLower(filepath.Base(shell))
	return base == "powershell.exe" || base == "cmd.exe"
}
