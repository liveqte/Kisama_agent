package handlers

import (
	"encoding/base64"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"syscall"
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

func TestDanglingSymlinkCannotRedirectWrites(t *testing.T) {
	r := setupFileAPITest(t)
	root := config.Get().FileRoot
	outside := filepath.Join(t.TempDir(), "outside.txt")
	if err := os.WriteFile(filepath.Join(root, "source.txt"), []byte("SOURCE"), 0o644); err != nil {
		t.Fatal(err)
	}
	if err := os.Symlink(outside, filepath.Join(root, "link.txt")); err != nil {
		t.Skipf("host denied symlink creation: %v", err)
	}

	if isPathInsideFileRoot(root, filepath.Join(root, "link.txt")) {
		t.Fatal("悬空符号链接不得被当作可写的沙箱内新文件")
	}
	for _, tc := range []struct {
		method string
		target string
	}{
		{http.MethodPut, "/api/file"},
		{http.MethodPost, "/api/file/cp"},
	} {
		code, resp := doFileJSON(t, r, tc.method, tc.target, map[string]string{"source.txt": "link.txt"})
		if code != http.StatusOK || resp["status"] != "error" {
			t.Fatalf("批量响应=%d %v", code, resp)
		}
		item := resp["results"].([]any)[0].(map[string]any)
		if item["status"] != "denied" || item["error"] != "path outside file root" {
			t.Fatalf("悬空链接目标应拒绝: %v", item)
		}
	}
	code, resp := doFileJSON(t, r, http.MethodPost, "/api/file", map[string]any{
		"path": ".", "filename": "link.txt", "content": base64.StdEncoding.EncodeToString([]byte("OUTSIDE")),
	})
	if code != http.StatusForbidden {
		t.Fatalf("上传响应=%d %v", code, resp)
	}
	if _, err := os.Lstat(outside); !os.IsNotExist(err) {
		t.Fatalf("不得在沙箱外创建文件: %v", err)
	}
	info, err := os.Lstat(filepath.Join(root, "link.txt"))
	if err != nil || info.Mode()&os.ModeSymlink == 0 {
		t.Fatalf("原悬空链接不应被替换: info=%v err=%v", info, err)
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

func setupFileAPITest(t *testing.T) *gin.Engine {
	t.Helper()
	t.Setenv("FILE_ROOT", t.TempDir())
	if _, err := config.New(); err != nil {
		t.Fatalf("config.New() error: %v", err)
	}
	gin.SetMode(gin.TestMode)
	r := gin.New()
	r.POST("/api/file/authority", QueryFileAuthority)
	r.POST("/api/file/new", MkdirRecursive)
	r.POST("/api/file", UploadFile)
	r.POST("/api/fileraw", UploadFileRaw)
	r.PUT("/api/file", MoveFiles)
	r.POST("/api/file/cp", CopyFiles)
	return r
}

func doFileJSON(t *testing.T, r *gin.Engine, method, target string, body any) (int, map[string]any) {
	t.Helper()
	raw, err := json.Marshal(body)
	if err != nil {
		t.Fatalf("marshal body: %v", err)
	}
	req := httptest.NewRequest(method, target, strings.NewReader(string(raw)))
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()
	r.ServeHTTP(rec, req)
	resp := map[string]any{}
	if err := json.Unmarshal(rec.Body.Bytes(), &resp); err != nil {
		t.Fatalf("unmarshal response %q: %v", rec.Body.String(), err)
	}
	return rec.Code, resp
}

func TestMoveCopyBatchStatusAndErrors(t *testing.T) {
	cases := []struct {
		name   string
		method string
		target string
	}{
		{"move", http.MethodPut, "/api/file"},
		{"copy", http.MethodPost, "/api/file/cp"},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			r := setupFileAPITest(t)
			root := config.Get().FileRoot
			if err := os.WriteFile(filepath.Join(root, "a.txt"), []byte("A"), 0o644); err != nil {
				t.Fatal(err)
			}
			if err := os.WriteFile(filepath.Join(root, "b.txt"), []byte("B"), 0o644); err != nil {
				t.Fatal(err)
			}
			if err := os.WriteFile(filepath.Join(root, "blocker"), []byte("not a directory"), 0o644); err != nil {
				t.Fatal(err)
			}

			code, resp := doFileJSON(t, r, tc.method, tc.target, map[string]string{
				"a.txt":       "nested/result/copied.txt",
				"missing.txt": "never.txt",
				"b.txt":       "blocker/inside.txt",
			})
			if code != http.StatusOK {
				t.Fatalf("HTTP status=%d resp=%v", code, resp)
			}
			if resp["status"] != "partial" || resp["total"] != float64(3) || resp["success"] != float64(1) {
				t.Fatalf("批量响应=%v", resp)
			}
			if resp["message"] != "2 of 3 operations failed" {
				t.Fatalf("汇总消息=%v", resp["message"])
			}

			results := map[string]map[string]any{}
			for _, item := range resp["results"].([]any) {
				entry := item.(map[string]any)
				results[entry["from"].(string)] = entry
			}
			if results["a.txt"]["status"] != "ok" {
				t.Fatalf("成功项=%v", results["a.txt"])
			}
			if _, exists := results["a.txt"]["error"]; exists {
				t.Fatalf("成功项不应带 error: %v", results["a.txt"])
			}
			if results["missing.txt"]["status"] != "skipped" || results["missing.txt"]["error"] != "source not found" {
				t.Fatalf("缺失源=%v", results["missing.txt"])
			}
			if results["b.txt"]["status"] != "denied" || results["b.txt"]["error"] != "destination parent is not a directory" {
				t.Fatalf("父路径非目录=%v", results["b.txt"])
			}

			got, err := os.ReadFile(filepath.Join(root, "nested", "result", "copied.txt"))
			if err != nil || string(got) != "A" {
				t.Fatalf("目标内容=%q err=%v", got, err)
			}
			_, sourceErr := os.Stat(filepath.Join(root, "a.txt"))
			if tc.name == "move" && !os.IsNotExist(sourceErr) {
				t.Fatalf("move 后源仍存在: %v", sourceErr)
			}
			if tc.name == "copy" && sourceErr != nil {
				t.Fatalf("copy 后源被移除: %v", sourceErr)
			}
		})
	}
}

func TestNonDirectorySourceIsFailedNotSkipped(t *testing.T) {
	cases := []struct {
		name   string
		method string
		target string
	}{
		{"move", http.MethodPut, "/api/file"},
		{"copy", http.MethodPost, "/api/file/cp"},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			r := setupFileAPITest(t)
			root := config.Get().FileRoot
			if err := os.WriteFile(filepath.Join(root, "blocker"), []byte("not a directory"), 0o644); err != nil {
				t.Fatal(err)
			}

			code, resp := doFileJSON(t, r, tc.method, tc.target, map[string]string{
				"blocker/missing.txt": "dest.txt",
			})
			if code != http.StatusOK || resp["status"] != "error" || resp["success"] != float64(0) {
				t.Fatalf("批量响应=%d %v", code, resp)
			}
			result := resp["results"].([]any)[0].(map[string]any)
			if result["status"] != "failed" || result["error"] == "source not found" {
				t.Fatalf("父级不是目录的源应 failed，不能 skipped: %v", result)
			}
		})
	}
}

func TestCopyDirectoryTree(t *testing.T) {
	r := setupFileAPITest(t)
	root := config.Get().FileRoot
	src := filepath.Join(root, "src")
	if err := os.MkdirAll(filepath.Join(src, "sub"), 0o755); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(filepath.Join(src, "a.txt"), []byte("A"), 0o644); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(filepath.Join(src, "sub", "b.txt"), []byte("B"), 0o644); err != nil {
		t.Fatal(err)
	}

	code, resp := doFileJSON(t, r, http.MethodPost, "/api/file/cp", map[string]string{
		"src": "dest",
	})
	if code != http.StatusOK || resp["status"] != "ok" {
		t.Fatalf("目录复制响应=%d %v", code, resp)
	}
	for name, want := range map[string]string{"a.txt": "A", filepath.Join("sub", "b.txt"): "B"} {
		got, err := os.ReadFile(filepath.Join(root, "dest", name))
		if err != nil || string(got) != want {
			t.Fatalf("复制 %s 内容=%q err=%v", name, got, err)
		}
	}

	code, resp = doFileJSON(t, r, http.MethodPost, "/api/file/cp", map[string]string{
		"src": "src/inside",
	})
	if code != http.StatusOK || resp["status"] != "error" {
		t.Fatalf("复制到源目录内部应失败: %d %v", code, resp)
	}
	result := resp["results"].([]any)[0].(map[string]any)
	if result["status"] != "failed" || result["error"] != "destination is inside source directory" {
		t.Fatalf("源内目标错误=%v", result)
	}
	if _, err := os.Stat(filepath.Join(src, "inside")); !os.IsNotExist(err) {
		t.Fatalf("源内目标不应创建: %v", err)
	}
}

func TestCopyDirectoryDoesNotFollowNestedSymlink(t *testing.T) {
	r := setupFileAPITest(t)
	root := config.Get().FileRoot
	if err := os.MkdirAll(filepath.Join(root, "src"), 0o755); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(filepath.Join(root, "src", "a.txt"), []byte("A"), 0o644); err != nil {
		t.Fatal(err)
	}
	outside := filepath.Join(t.TempDir(), "outside.txt")
	if err := os.WriteFile(outside, []byte("SECRET"), 0o644); err != nil {
		t.Fatal(err)
	}
	if err := os.Symlink(outside, filepath.Join(root, "src", "link.txt")); err != nil {
		t.Skipf("host denied symlink creation: %v", err)
	}

	code, resp := doFileJSON(t, r, http.MethodPost, "/api/file/cp", map[string]string{"src": "dest"})
	if code != http.StatusOK || resp["status"] != "ok" {
		t.Fatalf("目录复制响应=%d %v", code, resp)
	}
	info, err := os.Lstat(filepath.Join(root, "dest", "link.txt"))
	if err != nil || info.Mode()&os.ModeSymlink == 0 {
		t.Fatalf("嵌套符号链接应原样复制: info=%v err=%v", info, err)
	}
	got, err := os.Readlink(filepath.Join(root, "dest", "link.txt"))
	if err != nil || got != outside {
		t.Fatalf("链接目标=%q err=%v", got, err)
	}
}

func TestMoveCopyAllFailedAndEmpty(t *testing.T) {
	for _, tc := range []struct {
		name   string
		method string
		target string
	}{
		{"move", http.MethodPut, "/api/file"},
		{"copy", http.MethodPost, "/api/file/cp"},
	} {
		t.Run(tc.name, func(t *testing.T) {
			r := setupFileAPITest(t)
			code, resp := doFileJSON(t, r, tc.method, tc.target, map[string]string{"missing": "dest"})
			if code != http.StatusOK || resp["status"] != "error" || resp["success"] != float64(0) {
				t.Fatalf("全失败响应=%d %v", code, resp)
			}
			code, resp = doFileJSON(t, r, tc.method, tc.target, map[string]string{})
			if code != http.StatusOK || resp["status"] != "error" || resp["message"] != "No operations requested" {
				t.Fatalf("空批次响应=%d %v", code, resp)
			}
			if items, ok := resp["results"].([]any); !ok || len(items) != 0 {
				t.Fatalf("空批次 results 应为空数组: %v", resp["results"])
			}
		})
	}
}

func TestFileErrorReason(t *testing.T) {
	for _, tc := range []struct {
		err  error
		want string
	}{
		{syscall.EROFS, "read_only_file_system"},
		{syscall.EACCES, "permission_denied"},
		{syscall.EPERM, "permission_denied"},
		{syscall.ENOTDIR, "not_a_directory"},
		{syscall.EEXIST, "file_exists"},
		{syscall.ENOENT, "not_found"},
		{syscall.ENOSPC, "no_space"},
	} {
		if tc.err == syscall.ENOTDIR && runtime.GOOS == "windows" {
			continue
		}
		if got := fileErrorReason(tc.err); got != tc.want {
			t.Fatalf("fileErrorReason(%v)=%q, want %q", tc.err, got, tc.want)
		}
	}

	existing := filepath.Join(t.TempDir(), "existing")
	if err := os.WriteFile(existing, []byte("x"), 0o644); err != nil {
		t.Fatal(err)
	}
	wrapped := &os.PathError{Op: "symlink", Path: existing, Err: syscall.EEXIST}
	if got := fileErrorReason(wrapped); got != "file_exists" {
		t.Fatalf("EEXIST 不应被非目录组件判断覆盖: %q", got)
	}
}

func TestWriteHandlersReturnErrnoReason(t *testing.T) {
	r := setupFileAPITest(t)
	root := config.Get().FileRoot
	if err := os.WriteFile(filepath.Join(root, "blocker"), []byte("x"), 0o644); err != nil {
		t.Fatal(err)
	}

	code, resp := doFileJSON(t, r, http.MethodPost, "/api/file/new", map[string]string{"path": "blocker/child"})
	if code != http.StatusInternalServerError || resp["error"] != "Failed to create directory" || resp["reason"] == "" {
		t.Fatalf("mkdir 失败响应=%d %v", code, resp)
	}
	if resp["reason"] != "not_a_directory" {
		t.Fatalf("mkdir reason=%v", resp["reason"])
	}

	code, resp = doFileJSON(t, r, http.MethodPost, "/api/file", map[string]any{
		"path": "blocker", "filename": "x.txt", "content": "eA==",
	})
	if code != http.StatusInternalServerError || resp["error"] != "Failed to create directory" || resp["reason"] != "not_a_directory" {
		t.Fatalf("base64 upload 失败响应=%d %v", code, resp)
	}

	req := httptest.NewRequest(http.MethodPost, "/api/fileraw", strings.NewReader("x"))
	req.Header.Set("X-File-Path", "blocker")
	req.Header.Set("X-File-Name", "x.txt")
	rec := httptest.NewRecorder()
	r.ServeHTTP(rec, req)
	if err := json.Unmarshal(rec.Body.Bytes(), &resp); err != nil {
		t.Fatalf("raw upload 响应解析失败: %v (%s)", err, rec.Body.String())
	}
	if rec.Code != http.StatusInternalServerError || resp["status"] != "error" || resp["completed"] != false || resp["reason"] != "not_a_directory" {
		t.Fatalf("raw upload 失败响应=%d %v", rec.Code, resp)
	}
}

func TestMountReadOnlyFromMountInfo(t *testing.T) {
	mounts := strings.Join([]string{
		"36 25 0:32 / / rw,relatime - ext4 /dev/root rw",
		"37 36 8:1 / /home rw,relatime - ext4 /dev/sda1 rw",
		"38 37 0:172 / /home/container rw,relatime - ext4 /dev/md1 rw",
		"39 38 0:173 / /home/container/.trash ro,nosuid,nodev,noexec - tmpfs tmpfs rw,size=4k",
		"40 37 8:1 / /mnt/read\\040only ro,relatime - ext4 /dev/sda1 rw",
	}, "\n")
	value := func(v bool) *bool { return &v }
	for _, tc := range []struct {
		target string
		want   *bool
	}{
		{"/home/container/.trash", value(true)},
		{"/home/container/.trash/child", value(true)},
		{"/home/container/.trash-old", value(false)},
		{"/home/container/other", value(false)},
		{"/mnt/read only/file", value(true)},
		{"relative/path", nil},
	} {
		got := mountReadOnlyFromMountInfo(tc.target, []byte(mounts))
		if (got == nil) != (tc.want == nil) || got != nil && *got != *tc.want {
			t.Fatalf("mountReadOnlyFromMountInfo(%q)=%v, want %v", tc.target, got, tc.want)
		}
	}
	if got := mountReadOnlyFromMountInfo("/home/container/.trash", []byte("malformed")); got != nil {
		t.Fatalf("畸形 mountinfo 应返回未知: %v", *got)
	}
}

func TestQueryFileAuthorityMountReadOnlyField(t *testing.T) {
	r := setupFileAPITest(t)
	code, resp := doFileJSON(t, r, http.MethodPost, "/api/file/authority", map[string]any{"paths": []string{"."}})
	if code != http.StatusOK {
		t.Fatalf("authority HTTP=%d resp=%v", code, resp)
	}
	entry := resp["files"].([]any)[0].(map[string]any)
	value, exists := entry["mount_readonly"]
	_, mountErr := os.ReadFile("/proc/self/mountinfo")
	if runtime.GOOS == "linux" && mountErr == nil {
		if !exists {
			t.Fatalf("Linux 可读 mountinfo 时字段缺失: %v", entry)
		}
		if _, ok := value.(bool); !ok {
			t.Fatalf("mount_readonly 不是布尔值: %v", value)
		}
	} else if exists {
		t.Fatalf("非 Linux 或读取失败时字段应缺失: %v", entry)
	}
}
