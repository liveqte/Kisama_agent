//go:build windows

package handlers

import (
	"os/exec"
	"path/filepath"
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

// TestIncognitoShellArgs 验证无痕启动参数只对 PowerShell 生效 (0.5.5)
func TestIncognitoShellArgs(t *testing.T) {
	if got := incognitoShellArgs("powershell.exe", true); len(got) != 3 {
		t.Fatalf("expected 3 args for powershell.exe, got %v", got)
	}
	if got := incognitoShellArgs(`C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe`, true); len(got) != 3 {
		t.Fatalf("expected 3 args for absolute powershell path, got %v", got)
	}
	if got := incognitoShellArgs("powershell.exe", false); got != nil {
		t.Fatalf("expected nil args when disabled, got %v", got)
	}
	if got := incognitoShellArgs("cmd.exe", true); got != nil {
		t.Fatalf("expected nil args for cmd.exe, got %v", got)
	}
	if !incognitoNativeApplied("powershell.exe") || !incognitoNativeApplied("cmd.exe") {
		t.Fatalf("powershell/cmd should report incognito applied")
	}
	if incognitoNativeApplied("pwsh.exe") {
		t.Fatalf("pwsh.exe has persistent history, should report false")
	}
}

// TestNormalizeShellName 验证 welcome 帧的 shell 归一化名 (0.5.5)
func TestNormalizeShellName(t *testing.T) {
	cases := map[string]string{
		"powershell.exe":              "powershell",
		"cmd.exe":                     "cmd",
		`C:\Windows\System32\cmd.exe`: "cmd",
		"/bin/bash":                   "bash",
		"/usr/bin/zsh":                "zsh",
		"":                            "sh",
	}
	for in, want := range cases {
		if got := normalizeShellName(in); got != want {
			t.Fatalf("normalizeShellName(%q) = %q, want %q", in, got, want)
		}
	}
}

// TestBuildCommandLine 验证 ConPTY 命令行拼接: 含空格的参数加引号 (0.5.5 incognito 依赖)
func TestBuildCommandLine(t *testing.T) {
	cmd := exec.Command("powershell.exe", "-NoExit", "-Command", "Set-PSReadLineOption -HistorySaveStyle SaveNothing")
	line := buildCommandLine(cmd)
	if !strings.HasPrefix(line, cmd.Path) && !strings.HasPrefix(line, `"`+cmd.Path+`"`) {
		t.Fatalf("command line should start with shell path, got %q", line)
	}
	if !strings.Contains(line, `"Set-PSReadLineOption -HistorySaveStyle SaveNothing"`) {
		t.Fatalf("argument with spaces should be quoted, got %q", line)
	}
	if n := strings.Count(line, `"Set-PSReadLineOption`); n != 1 {
		t.Fatalf("expected command argument exactly once, got %d in %q", n, line)
	}
}

// TestWindowsTerminalIncognito 端到端: 无痕启动参数下 PSReadLine 历史保存被禁用 (0.5.5)
func TestWindowsTerminalIncognito(t *testing.T) {
	shell := defaultTerminalShell()
	if !strings.EqualFold(filepath.Base(shell), "powershell.exe") {
		t.Skipf("default shell is %q, incognito assertion only covers powershell", shell)
	}
	cmd := exec.Command(shell, incognitoShellArgs(shell, true)...)
	term, err := newTerminalSession(cmd, 24, 80)
	if err != nil {
		t.Fatalf("newTerminalSession error: %v", err)
	}
	t.Cleanup(func() {
		_ = term.KillTree()
		_ = term.Close()
	})
	time.Sleep(1200 * time.Millisecond) // 等待 shell 与 profile 加载完成

	if _, err := term.Write([]byte("(Get-PSReadLineOption).HistorySaveStyle\r\nexit\r\n")); err != nil {
		t.Fatalf("write to terminal error: %v", err)
	}

	out := readTermOutput(t, term, "SaveNothing", 15*time.Second)
	if !strings.Contains(out, "SaveNothing") {
		t.Fatalf("expected HistorySaveStyle=SaveNothing under incognito args, got %q", out)
	}
}
