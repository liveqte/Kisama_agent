package handlers

import "io"

// terminalSession 抽象超级终端后端：
// Unix 平台使用 creack/pty 提供真实 TTY，Windows 平台使用管道回退实现。
type terminalSession interface {
	io.ReadWriteCloser
	// Resize 调整终端行列尺寸；在无 TTY 的平台上为 no-op
	Resize(rows, cols uint16) error
	// KillTree 强制结束进程及其子进程树
	KillTree() error
}
