//go:build !windows

package handlers

import (
	"os"
	"os/exec"
	"syscall"

	"github.com/creack/pty"
)

// ptyTerminal 基于 creack/pty 的真实终端实现
type ptyTerminal struct {
	file *os.File
	pid  int
}

func newTerminalSession(cmd *exec.Cmd, rows, cols uint16) (terminalSession, error) {
	file, err := pty.StartWithSize(cmd, &pty.Winsize{Rows: rows, Cols: cols})
	if err != nil {
		return nil, err
	}
	return &ptyTerminal{file: file, pid: cmd.Process.Pid}, nil
}

func (t *ptyTerminal) Read(p []byte) (int, error)  { return t.file.Read(p) }
func (t *ptyTerminal) Write(p []byte) (int, error) { return t.file.Write(p) }
func (t *ptyTerminal) Close() error                { return t.file.Close() }

func (t *ptyTerminal) Resize(rows, cols uint16) error {
	return pty.Setsize(t.file, &pty.Winsize{Rows: rows, Cols: cols})
}

// KillTree 先向整个进程组发送 SIGKILL，再直击进程本身（对应原有双重 kill 语义）
func (t *ptyTerminal) KillTree() error {
	gErr := syscall.Kill(-t.pid, syscall.SIGKILL)
	pErr := syscall.Kill(t.pid, syscall.SIGKILL)
	if gErr != nil && pErr != nil {
		return pErr
	}
	return nil
}

// defaultTerminalShell 优先选择体验更佳的高级 Shell，其次是环境变量配置，最后兜底 /bin/sh
func defaultTerminalShell() string {
	advancedShells := []string{"/bin/bash", "/bin/zsh", "/bin/ash"}
	for _, sh := range advancedShells {
		if _, err := os.Stat(sh); err == nil {
			return sh
		}
	}
	envShell := os.Getenv("SHELL")
	if envShell != "" {
		if _, err := os.Stat(envShell); err == nil {
			return envShell
		}
	}
	return "/bin/sh"
}
