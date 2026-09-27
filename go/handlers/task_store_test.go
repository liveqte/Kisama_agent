package handlers

// 💾 任务持久化单测 (0.5.7, docs/API.MD 十三): 密钥解析 / 往返 / 损坏隔离 / 单次执行门控
// 运行: cd go && go test ./handlers/ -run TestTaskStore -v

import (
	"encoding/base64"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"strings"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/go/config"
	"github.com/liveqte/kisama_agent/go/crypto"
)

const taskStoreTestKeyHex = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

// newTestStore 在隔离 env 下构造 store
func newTestStore(t *testing.T, dir string) *taskStore {
	t.Helper()
	t.Setenv("KSTORE", filepath.Join(dir, "store.enc"))
	t.Setenv("KSTORE_KEY", taskStoreTestKeyHex)
	s := initTaskStore()
	if !s.enabled {
		t.Fatalf("store 应启用 (KSTORE=%s)", os.Getenv("KSTORE"))
	}
	return s
}

func TestTaskStoreParseKey(t *testing.T) {
	if parseTaskStoreKey(taskStoreTestKeyHex) == nil {
		t.Fatalf("合法 hex 密钥应被接受")
	}
	if parseTaskStoreKey(base64.StdEncoding.EncodeToString(make([]byte, 32))) == nil {
		t.Fatalf("合法 base64 密钥应被接受")
	}
	for _, bad := range []string{"", "short", "zz" + strings.Repeat("ab", 31), strings.Repeat("AA", 31)} {
		if parseTaskStoreKey(bad) != nil {
			t.Fatalf("非法密钥 %q 应被拒绝", bad)
		}
	}
}

func TestTaskStoreSaveLoadRoundtrip(t *testing.T) {
	dir := t.TempDir()
	s := newTestStore(t, dir)

	onetasks := []string{"echo one", "python -c \"print(1)\"\necho two"}
	crontasks := map[string]string{"*/5 * * * *": "echo hi"}
	if !s.save(onetasks, crontasks) {
		t.Fatalf("save 应成功")
	}
	if s.lastSavedAt == "" {
		t.Fatalf("save 后应有 last_saved_at")
	}

	// 密文不含明文命令
	raw, err := os.ReadFile(filepath.Join(dir, "store.enc"))
	if err != nil {
		t.Fatalf("read store: %v", err)
	}
	if strings.Contains(string(raw), "echo one") {
		t.Fatalf("密文中不得出现明文命令")
	}

	fresh := newTestStore(t, dir)
	gotOne, gotCron := fresh.load()
	if len(gotOne) != 2 || gotOne[0] != "echo one" || gotOne[1] != onetasks[1] {
		t.Fatalf("多行命令应原样恢复, got %#v", gotOne)
	}
	if len(gotCron) != 1 || gotCron["*/5 * * * *"] != "echo hi" {
		t.Fatalf("cron 任务应原样恢复, got %#v", gotCron)
	}
}

func TestTaskStoreMissingFileEmpty(t *testing.T) {
	s := newTestStore(t, t.TempDir())
	one, cron := s.load()
	if len(one) != 0 || len(cron) != 0 {
		t.Fatalf("文件缺失应返回空表, got %#v %#v", one, cron)
	}
}

func TestTaskStoreCorruptQuarantined(t *testing.T) {
	dir := t.TempDir()
	s := newTestStore(t, dir)
	s.save([]string{"cmd"}, nil)
	if err := os.WriteFile(filepath.Join(dir, "store.enc"), []byte("garbage-payload"), 0o600); err != nil {
		t.Fatalf("write garbage: %v", err)
	}
	one, _ := s.load()
	if len(one) != 0 {
		t.Fatalf("损坏文件应安全降级为空表")
	}
	matches, _ := filepath.Glob(filepath.Join(dir, "store.enc.bad-*"))
	if len(matches) != 1 {
		t.Fatalf("损坏文件应被隔离改名, got %v", matches)
	}
}

func TestTaskStoreWrongKeyQuarantined(t *testing.T) {
	dir := t.TempDir()
	s := newTestStore(t, dir)
	s.save([]string{"cmd"}, nil)

	t.Setenv("KSTORE_KEY", strings.Repeat("bb", 32))
	other := initTaskStore()
	one, _ := other.load()
	if len(one) != 0 {
		t.Fatalf("错误密钥应安全降级为空表")
	}
	matches, _ := filepath.Glob(filepath.Join(dir, "store.enc.bad-*"))
	if len(matches) != 1 {
		t.Fatalf("错误密钥加载后原文件应被隔离, got %v", matches)
	}
}

func TestTaskStoreOffDisables(t *testing.T) {
	for _, off := range []string{"off", "0", "OFF", "false"} {
		t.Setenv("KSTORE", off)
		t.Setenv("KSTORE_KEY", taskStoreTestKeyHex)
		s := initTaskStore()
		if s.enabled {
			t.Fatalf("KSTORE=%s 应显式关闭持久化", off)
		}
	}
}

func TestTaskStoreInvalidKeyDisables(t *testing.T) {
	t.Setenv("KSTORE", filepath.Join(t.TempDir(), "store.enc"))
	t.Setenv("KSTORE_KEY", "not-a-key")
	s := initTaskStore()
	if s.enabled {
		t.Fatalf("非法 KSTORE_KEY 应 fail-closed 关闭持久化")
	}
}

func TestTaskStoreHigherVersionLocked(t *testing.T) {
	dir := t.TempDir()
	s := newTestStore(t, dir)

	plaintext := `{"magic":"kisama-store","version":99,"saved_at":"t","data":{}}`
	payload, err := crypto.EncryptAES256GCM(plaintext, s.keyB64)
	if err != nil {
		t.Fatalf("encrypt fixture: %v", err)
	}
	if err := os.WriteFile(filepath.Join(dir, "store.enc"), []byte(payload), 0o600); err != nil {
		t.Fatalf("write fixture: %v", err)
	}

	one, _ := s.load()
	if len(one) != 0 {
		t.Fatalf("高版本数据应以空任务启动")
	}
	if !s.locked {
		t.Fatalf("高版本数据应锁定写")
	}
	if s.save([]string{"cmd"}, nil) {
		t.Fatalf("只读状态下禁止覆盖写")
	}
	if _, err := os.Stat(filepath.Join(dir, "store.enc")); err != nil {
		t.Fatalf("高版本原文件必须保留: %v", err)
	}
}

func TestTaskStoreStatusSnapshot(t *testing.T) {
	s := newTestStore(t, t.TempDir())
	enabled, path, _ := s.statusSnapshot()
	if !enabled || path == "" {
		t.Fatalf("statusSnapshot 应返回启用状态与路径")
	}
}

// ========== HTTP 层: onetime 单次执行门控 + status 持久化字段 ==========

func setupTaskTest(t *testing.T, storeDir string) *gin.Engine {
	t.Helper()
	t.Setenv("FILE_ROOT", t.TempDir())
	t.Setenv("KSTORE", filepath.Join(storeDir, "store.enc"))
	t.Setenv("KSTORE_KEY", taskStoreTestKeyHex)
	if _, err := config.New(); err != nil {
		t.Fatalf("config.New() error: %v", err)
	}
	config.Get().InitTask = true
	InitTaskManager(100)
	gin.SetMode(gin.TestMode)
	r := gin.New()
	r.POST("/api/task/onetime", SetOneTimeTasks)
	r.POST("/api/task/cron", SetCronTasks)
	r.GET("/api/task/status", GetTaskStatus)
	return r
}

func doTaskJSON(t *testing.T, r *gin.Engine, method, url string, body any) (int, map[string]any) {
	t.Helper()
	raw, err := json.Marshal(body)
	if err != nil {
		t.Fatalf("marshal body: %v", err)
	}
	req := httptest.NewRequest(method, url, strings.NewReader(string(raw)))
	req.Header.Set("Content-Type", "application/json")
	w := httptest.NewRecorder()
	r.ServeHTTP(w, req)
	resp := map[string]any{}
	if err := json.Unmarshal(w.Body.Bytes(), &resp); err != nil {
		t.Fatalf("unmarshal response %q: %v", w.Body.String(), err)
	}
	return w.Code, resp
}

func TestTaskOnetimeGateConsumesMarker(t *testing.T) {
	r := setupTaskTest(t, t.TempDir())

	// 首次 POST: 标记未消费 → 执行
	code, resp := doTaskJSON(t, r, http.MethodPost, "/api/task/onetime", []string{"echo gate"})
	if code != http.StatusOK {
		t.Fatalf("首次 POST 应 200, got %d: %v", code, resp)
	}
	executed, ok := resp["executed"].([]any)
	if !ok || len(executed) != 1 {
		t.Fatalf("首次 POST 应执行, got %#v", resp["executed"])
	}
	if persisted, _ := resp["persisted"].(bool); !persisted {
		t.Fatalf("首次 POST 应落盘, resp=%v", resp)
	}

	// 二次 POST: 标记已消费 → 只更新+落盘, 不执行
	code, resp = doTaskJSON(t, r, http.MethodPost, "/api/task/onetime", []string{"echo again"})
	if code != http.StatusOK {
		t.Fatalf("二次 POST 应 200, got %d: %v", code, resp)
	}
	if _, present := resp["executed"]; present {
		t.Fatalf("标记已消费时不得再次执行, resp=%v", resp)
	}

	// 落盘内容应为最新列表
	fresh := initTaskStore()
	one, _ := fresh.load()
	if len(one) != 1 || one[0] != "echo again" {
		t.Fatalf("落盘内容应为最新列表, got %#v", one)
	}
}

func TestTaskCronPersisted(t *testing.T) {
	r := setupTaskTest(t, t.TempDir())

	code, resp := doTaskJSON(t, r, http.MethodPost, "/api/task/cron", map[string]string{"*/5 * * * *": "echo hi"})
	if code != http.StatusOK {
		t.Fatalf("cron POST 应 200, got %d: %v", code, resp)
	}
	if persisted, _ := resp["persisted"].(bool); !persisted {
		t.Fatalf("cron POST 应落盘, resp=%v", resp)
	}

	// 清空同样落盘
	code, resp = doTaskJSON(t, r, http.MethodPost, "/api/task/cron", map[string]string{})
	if code != http.StatusOK {
		t.Fatalf("cron 清空应 200, got %d: %v", code, resp)
	}
	if persisted, _ := resp["persisted"].(bool); !persisted {
		t.Fatalf("cron 清空应落盘, resp=%v", resp)
	}
	fresh := initTaskStore()
	_, crons := fresh.load()
	if len(crons) != 0 {
		t.Fatalf("清空后落盘的 cron 应为空, got %#v", crons)
	}
}

func TestTaskStatusPersistenceField(t *testing.T) {
	r := setupTaskTest(t, t.TempDir())

	code, resp := doTaskJSON(t, r, http.MethodGet, "/api/task/status", nil)
	if code != http.StatusOK {
		t.Fatalf("status 应 200, got %d: %v", code, resp)
	}
	persistence, ok := resp["persistence"].(map[string]any)
	if !ok {
		t.Fatalf("status 应含 persistence 字段, resp=%v", resp)
	}
	if enabled, _ := persistence["enabled"].(bool); !enabled {
		t.Fatalf("persistence.enabled 应为 true, got %v", persistence)
	}
	if storePath, _ := persistence["store_path"].(string); storePath == "" {
		t.Fatalf("persistence.store_path 不应为空, got %v", persistence)
	}
}
