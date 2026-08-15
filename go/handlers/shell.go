package handlers

import (
	"context"
	"os/exec"
	"runtime"
)

// shellCommand 构造平台对应的 Shell 命令执行器：
// Unix 使用 /bin/sh -c，Windows 使用 cmd.exe /C。
func shellCommand(ctx context.Context, cmdline string) *exec.Cmd {
	if runtime.GOOS == "windows" {
		return exec.CommandContext(ctx, "cmd.exe", "/C", cmdline)
	}
	return exec.CommandContext(ctx, "/bin/sh", "-c", cmdline)
}
