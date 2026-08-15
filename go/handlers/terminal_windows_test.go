//go:build windows

package handlers

import (
	"os/exec"
	"strings"
	"testing"
	"time"
)

// startTestTerminal 启动实际部署所用的 shell（ConPTY 优先），返回终端后端
func startTestTerminal(t *testing.T) terminalSession {
	t.Helper()
	cmd := exec.Command(defaultTerminalShell())
	term, err := newTerminalSession(cmd, 24, 80)
	if err != nil {
		t.Fatalf("newTerminalSession error: %v", err)
	}
	t.Cleanup(func() {
		_ = term.KillTree()
		_ = term.Close()
	})
	return term
}

// readTermOutput 读取终端输出直到包含 marker（或超时），返回已收集的全部输出
func readTermOutput(t *testing.T, term terminalSession, marker string, timeout time.Duration) string {
	t.Helper()
	buf := make([]byte, 2048)
	var out []byte
	deadline := time.Now().Add(timeout)
	for time.Now().Before(deadline) {
		readCh := make(chan []byte, 1)
		go func() {
			n, err := term.Read(buf)
			if err != nil || n == 0 {
				readCh <- nil
				return
			}
			readCh <- append([]byte(nil), buf[:n]...)
		}()

		select {
		case chunk := <-readCh:
			if len(chunk) == 0 {
				t.Fatalf("terminal closed prematurely, output so far: %q", string(out))
			}
			out = append(out, chunk...)
			if strings.Contains(string(out), marker) {
				return string(out)
			}
		case <-time.After(2 * time.Second):
			t.Fatalf("timeout waiting for %q, output so far: %q", marker, string(out))
		}
	}
	t.Fatalf("deadline exceeded waiting for %q", marker)
	return ""
}

// TestWindowsTerminalBackend 验证终端可正常交互：命令回显与执行输出
func TestWindowsTerminalBackend(t *testing.T) {
	term := startTestTerminal(t)
	time.Sleep(800 * time.Millisecond) // 等待 shell 完成启动

	if _, err := term.Write([]byte("echo PTYOK\r\nexit\r\n")); err != nil {
		t.Fatalf("write to terminal error: %v", err)
	}

	out := readTermOutput(t, term, "PTYOK", 15*time.Second)
	if !strings.Contains(out, "PTYOK") {
		t.Fatalf("expected output to contain PTYOK, got %q", out)
	}
}

// TestWindowsTerminalEmptyEnter 验证空行回车产生真实换行（\r\n），
// 与 Unix PTY 行为对齐——管道回退实现只有 \r 原地重绘，无法通过该断言。
func TestWindowsTerminalEmptyEnter(t *testing.T) {
	term := startTestTerminal(t)
	time.Sleep(800 * time.Millisecond)

	// 先读尽启动横幅与首行提示符，避免与后面的换行误判混淆
	_ = readTermOutput(t, term, ">", 15*time.Second)

	// 发送一个空的回车
	if _, err := term.Write([]byte("\r")); err != nil {
		t.Fatalf("write enter error: %v", err)
	}
	// 再发送真实命令并退出，确保退出前留下更多输出
	time.Sleep(500 * time.Millisecond)
	if _, err := term.Write([]byte("echo ENTEROK\r\nexit\r\n")); err != nil {
		t.Fatalf("write command error: %v", err)
	}

	collected := readTermOutput(t, term, "ENTEROK", 15*time.Second)
	if !strings.Contains(collected, "\r\n") {
		t.Fatalf("expected CRLF newline after empty enter (real terminal behavior), got: %q", collected)
	}
}
