package handlers

import (
	"archive/zip"
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"strings"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/go/config"
)

// setupZipTest 构造带临时 FILE_ROOT 的 gin 引擎 (走真实 handler)
func setupZipTest(t *testing.T) *gin.Engine {
	t.Helper()
	t.Setenv("FILE_ROOT", t.TempDir())
	if _, err := config.New(); err != nil {
		t.Fatalf("config.New() error: %v", err)
	}
	gin.SetMode(gin.TestMode)
	r := gin.New()
	r.POST("/api/file/zip", ZipFile)
	r.POST("/api/file/unzip", UnzipFile)
	return r
}

func doZipJSON(t *testing.T, r *gin.Engine, method, url string, body any) (int, map[string]any) {
	t.Helper()
	raw, err := json.Marshal(body)
	if err != nil {
		t.Fatalf("marshal body: %v", err)
	}
	req := httptest.NewRequest(method, url, bytes.NewReader(raw))
	req.Header.Set("Content-Type", "application/json")
	w := httptest.NewRecorder()
	r.ServeHTTP(w, req)
	resp := map[string]any{}
	if err := json.Unmarshal(w.Body.Bytes(), &resp); err != nil {
		t.Fatalf("unmarshal response %q: %v", w.Body.String(), err)
	}
	return w.Code, resp
}

func makeZipTree(t *testing.T) string {
	t.Helper()
	root := config.Get().FileRoot
	src := filepath.Join(root, "src")
	if err := os.MkdirAll(filepath.Join(src, "sub"), 0755); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(filepath.Join(src, "a.txt"), []byte("AAA"), 0644); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(filepath.Join(src, "sub", "b.txt"), []byte("BBB"), 0644); err != nil {
		t.Fatal(err)
	}
	return src
}

func normZipPath(p string) string {
	return strings.ReplaceAll(p, "\\", "/")
}

func TestZipFileHandlerRoundTrip(t *testing.T) {
	r := setupZipTest(t)
	makeZipTree(t)

	// 目录递归打包
	code, resp := doZipJSON(t, r, "POST", "/api/file/zip", map[string]any{
		"path": "out.zip", "items": []string{"src"},
	})
	if code != http.StatusOK {
		t.Fatalf("zip status=%d resp=%v", code, resp)
	}
	if resp["status"] != "ok" || int(resp["entries"].(float64)) != 2 {
		t.Fatalf("zip resp=%v (entries 应只计文件条目)", resp)
	}
	if _, err := os.Stat(filepath.Join(config.Get().FileRoot, "out.zip")); err != nil {
		t.Fatalf("zip 未落盘: %v", err)
	}

	// 解压到指定目录
	code, resp = doZipJSON(t, r, "POST", "/api/file/unzip", map[string]any{
		"path": "out.zip", "dest_path": "dest",
	})
	if code != http.StatusOK {
		t.Fatalf("unzip status=%d resp=%v", code, resp)
	}
	if resp["extracted"].(float64) != 2 || resp["skipped"].(float64) != 0 {
		t.Fatalf("unzip resp=%v", resp)
	}
	files := []string{}
	for _, f := range resp["files"].([]any) {
		files = append(files, normZipPath(f.(string)))
	}
	found := 0
	for _, f := range files {
		if f == "dest/src/a.txt" || f == "dest/src/sub/b.txt" {
			found++
		}
	}
	if found != 2 {
		t.Fatalf("files 应含解压路径: %v", files)
	}
	got, err := os.ReadFile(filepath.Join(config.Get().FileRoot, "dest", "src", "sub", "b.txt"))
	if err != nil || string(got) != "BBB" {
		t.Fatalf("解压内容不符: %q err=%v", got, err)
	}
}

func TestZipFileHandlerFlat(t *testing.T) {
	r := setupZipTest(t)
	makeZipTree(t)

	code, resp := doZipJSON(t, r, "POST", "/api/file/zip", map[string]any{
		"path": "flat.zip", "items": []string{"src"}, "flat": true,
	})
	if code != http.StatusOK || resp["status"] != "ok" {
		t.Fatalf("zip resp=%v", resp)
	}
	zr, err := zip.OpenReader(filepath.Join(config.Get().FileRoot, "flat.zip"))
	if err != nil {
		t.Fatal(err)
	}
	defer zr.Close()
	for _, f := range zr.File {
		if strings.HasPrefix(normZipPath(f.Name), "src/") {
			t.Fatalf("flat 不应带 src/ 前缀: %s", f.Name)
		}
	}
}

func TestZipFileHandlerGhostItem(t *testing.T) {
	r := setupZipTest(t)
	makeZipTree(t)

	code, resp := doZipJSON(t, r, "POST", "/api/file/zip", map[string]any{
		"path": "mix.zip", "items": []string{"src/a.txt", "ghost.txt"},
	})
	if code != http.StatusOK || resp["status"] != "ok" {
		t.Fatalf("zip resp=%v", resp)
	}
	results := resp["results"].([]any)
	if len(results) != 2 || results[1].(map[string]any)["status"] != "not_found" {
		t.Fatalf("ghost 项应回显 not_found: %v", results)
	}
}

func TestZipFileHandlerValidation(t *testing.T) {
	r := setupZipTest(t)

	// items 缺失 → 400
	code, _ := doZipJSON(t, r, "POST", "/api/file/zip", map[string]any{"path": "a.zip"})
	if code != http.StatusBadRequest {
		t.Fatalf("items 缺失应 400, got %d", code)
	}
	// items 空数组 → 400
	code, _ = doZipJSON(t, r, "POST", "/api/file/zip", map[string]any{"path": "a.zip", "items": []string{}})
	if code != http.StatusBadRequest {
		t.Fatalf("items 空应 400, got %d", code)
	}
	// path 缺失 → 400
	code, _ = doZipJSON(t, r, "POST", "/api/file/unzip", map[string]any{})
	if code != http.StatusBadRequest {
		t.Fatalf("unzip path 缺失应 400, got %d", code)
	}
	// zip 不存在 → 400
	code, _ = doZipJSON(t, r, "POST", "/api/file/unzip", map[string]any{"path": "noexist.zip"})
	if code != http.StatusBadRequest {
		t.Fatalf("unzip 不存在应 400, got %d", code)
	}
}

func TestUnzipFileHandlerZipSlip(t *testing.T) {
	r := setupZipTest(t)
	root := config.Get().FileRoot

	// 用 archive/zip 构造含 ../evil.txt 的恶意 zip
	zipPath := filepath.Join(root, "evil.zip")
	f, err := os.Create(zipPath)
	if err != nil {
		t.Fatal(err)
	}
	zw := zip.NewWriter(f)
	entry, _ := zw.Create("../evil.txt")
	entry.Write([]byte("evil"))
	entry2, _ := zw.Create("ok.txt")
	entry2.Write([]byte("ok"))
	zw.Close()
	f.Close()

	code, resp := doZipJSON(t, r, "POST", "/api/file/unzip", map[string]any{
		"path": "evil.zip", "dest_path": "dest",
	})
	if code != http.StatusOK {
		t.Fatalf("unzip status=%d resp=%v", code, resp)
	}
	if resp["extracted"].(float64) != 1 || resp["skipped"].(float64) != 1 {
		t.Fatalf("zip-slip 条目应计入 skipped: %v", resp)
	}
	if _, err := os.Stat(filepath.Join(root, "evil.txt")); err == nil {
		t.Fatal("zip-slip 文件不应逃出沙箱")
	}
	got, err := os.ReadFile(filepath.Join(root, "dest", "ok.txt"))
	if err != nil || string(got) != "ok" {
		t.Fatalf("ok.txt 内容不符: %q err=%v", got, err)
	}
}

func TestUnzipFileHandlerNoOverwrite(t *testing.T) {
	r := setupZipTest(t)
	makeZipTree(t)
	doZipJSON(t, r, "POST", "/api/file/zip", map[string]any{"path": "out.zip", "items": []string{"src"}})

	// 预置已存在文件
	root := config.Get().FileRoot
	dest := filepath.Join(root, "dest", "src")
	os.MkdirAll(dest, 0755)
	os.WriteFile(filepath.Join(dest, "a.txt"), []byte("OLD"), 0644)

	// overwrite=false: 跳过已存在
	code, resp := doZipJSON(t, r, "POST", "/api/file/unzip", map[string]any{
		"path": "out.zip", "dest_path": "dest", "overwrite": false,
	})
	if code != http.StatusOK || resp["extracted"].(float64) != 1 || resp["skipped"].(float64) != 1 {
		t.Fatalf("no-overwrite resp=%v", resp)
	}
	got, _ := os.ReadFile(filepath.Join(dest, "a.txt"))
	if string(got) != "OLD" {
		t.Fatalf("已存在文件不应被覆盖: %q", got)
	}

	// 缺省覆盖
	code, resp = doZipJSON(t, r, "POST", "/api/file/unzip", map[string]any{
		"path": "out.zip", "dest_path": "dest",
	})
	if code != http.StatusOK || resp["extracted"].(float64) != 2 {
		t.Fatalf("缺省应覆盖: code=%d resp=%v", code, resp)
	}
	got, _ = os.ReadFile(filepath.Join(dest, "a.txt"))
	if string(got) != "AAA" {
		t.Fatalf("覆盖后内容不符: %q", got)
	}
}

func TestUnzipFileHandlerEntriesFilter(t *testing.T) {
	r := setupZipTest(t)
	makeZipTree(t)
	doZipJSON(t, r, "POST", "/api/file/zip", map[string]any{"path": "out.zip", "items": []string{"src"}})

	// 不带路径匹配 (basename)
	code, resp := doZipJSON(t, r, "POST", "/api/file/unzip", map[string]any{
		"path": "out.zip", "dest_path": "d1", "entries": []string{"b.txt"},
	})
	if code != http.StatusOK || resp["extracted"].(float64) != 1 {
		t.Fatalf("basename 过滤 resp=%v", resp)
	}
	if _, err := os.Stat(filepath.Join(config.Get().FileRoot, "d1", "src", "sub", "b.txt")); err != nil {
		t.Fatalf("b.txt 应解压: %v", err)
	}

	// 精确名
	code, resp = doZipJSON(t, r, "POST", "/api/file/unzip", map[string]any{
		"path": "out.zip", "dest_path": "d2", "entries": []string{"src/a.txt"},
	})
	if code != http.StatusOK || resp["extracted"].(float64) != 1 {
		t.Fatalf("精确名过滤 resp=%v", resp)
	}
	if _, err := os.Stat(filepath.Join(config.Get().FileRoot, "d2", "src", "a.txt")); err != nil {
		t.Fatalf("a.txt 应解压: %v", err)
	}
}

func TestUnzipFileHandlerNotAZip(t *testing.T) {
	r := setupZipTest(t)
	os.WriteFile(filepath.Join(config.Get().FileRoot, "fake.zip"), []byte("this is not a zip file at all........."), 0644)

	code, _ := doZipJSON(t, r, "POST", "/api/file/unzip", map[string]any{"path": "fake.zip"})
	if code != http.StatusBadRequest {
		t.Fatalf("非 zip 应 400, got %d", code)
	}
}
