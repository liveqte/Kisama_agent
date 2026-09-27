package handlers

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"strings"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/go/config"
	"github.com/liveqte/kisama_agent/go/models"
)

// clearFileRootCandidates 复现 systemd 场景: 无 FILE_ROOT 且无 HOME (UserHomeDir 失败)
func clearFileRootCandidates(t *testing.T) {
	t.Helper()
	t.Setenv("FILE_ROOT", "")
	t.Setenv("HOME", "")
	t.Setenv("USERPROFILE", "")
}

// TestIsPathInsideFileRootRelativeRoot 相对 FileRoot 不得让守卫恒 false,
// 同时目录穿越仍必须被拒
func TestIsPathInsideFileRootRelativeRoot(t *testing.T) {
	dir := t.TempDir()
	if err := os.Mkdir(filepath.Join(dir, "sub"), 0o755); err != nil {
		t.Fatalf("mkdir: %v", err)
	}
	t.Chdir(dir)

	cases := []struct {
		name   string
		root   string
		target string
		want   bool
	}{
		{"点号根下的子项", ".", filepath.Join(".", "sub"), true},
		{"点号根下的不存在子项", ".", filepath.Join(".", "sub", "new.txt"), true},
		{"点号根逃逸到父目录", ".", filepath.Join(".", ".."), false},
		{"空根下的子项", "", filepath.Join("", "sub"), true},
		{"绝对根下的子项", dir, filepath.Join(dir, "sub"), true},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			if got := isPathInsideFileRoot(tc.root, tc.target); got != tc.want {
				t.Fatalf("isPathInsideFileRoot(%q, %q) = %v, 期望 %v", tc.root, tc.target, got, tc.want)
			}
		})
	}
}

// TestResolveFileRootFallsBackToAbsolute 候选全无效时降级值必须是绝对路径 (Go 端与 py/js/java 对齐)
func TestResolveFileRootFallsBackToAbsolute(t *testing.T) {
	dir := t.TempDir()
	t.Chdir(dir)
	clearFileRootCandidates(t)

	cfg, err := config.New()
	if err != nil {
		t.Fatalf("config.New() error: %v", err)
	}
	if !filepath.IsAbs(cfg.FileRoot) {
		t.Fatalf("FileRoot = %q, 期望绝对路径", cfg.FileRoot)
	}
	want, err := filepath.EvalSymlinks(dir)
	if err != nil {
		t.Fatalf("EvalSymlinks(%q): %v", dir, err)
	}
	got, err := filepath.EvalSymlinks(cfg.FileRoot)
	if err != nil {
		t.Fatalf("EvalSymlinks(%q): %v", cfg.FileRoot, err)
	}
	if got != want {
		t.Fatalf("FileRoot = %q, 期望当前工作目录 %q", cfg.FileRoot, want)
	}
}

// TestListFilesWithFallbackFileRoot 端到端回归: 无 FILE_ROOT/无 HOME 时 /api/file/list 必须正常返回
func TestListFilesWithFallbackFileRoot(t *testing.T) {
	dir := t.TempDir()
	if err := os.WriteFile(filepath.Join(dir, "marker.txt"), []byte("x"), 0o644); err != nil {
		t.Fatalf("write: %v", err)
	}
	t.Chdir(dir)
	clearFileRootCandidates(t)

	if _, err := config.New(); err != nil {
		t.Fatalf("config.New() error: %v", err)
	}
	gin.SetMode(gin.TestMode)
	r := gin.New()
	r.POST("/api/file/list", ListFiles)

	post := func(body string) *httptest.ResponseRecorder {
		req := httptest.NewRequest(http.MethodPost, "/api/file/list", strings.NewReader(body))
		req.Header.Set("Content-Type", "application/json")
		rec := httptest.NewRecorder()
		r.ServeHTTP(rec, req)
		return rec
	}

	rec := post(`{"path":""}`)
	if rec.Code != http.StatusOK {
		t.Fatalf("根目录 list 状态码 = %d, body = %s, 期望 200", rec.Code, rec.Body.String())
	}
	var resp struct {
		Status string            `json:"status"`
		Count  int               `json:"count"`
		Files  []models.FileInfo `json:"files"`
	}
	if err := json.Unmarshal(rec.Body.Bytes(), &resp); err != nil {
		t.Fatalf("解析响应失败: %v (%s)", err, rec.Body.String())
	}
	if resp.Status != "ok" || resp.Count != 1 || len(resp.Files) != 1 || resp.Files[0].Name != "marker.txt" {
		t.Fatalf("list 响应异常: %s", rec.Body.String())
	}

	if rec := post(`{"path":".."}`); rec.Code != http.StatusForbidden {
		t.Fatalf("逃逸路径状态码 = %d, 期望 403", rec.Code)
	}
}
