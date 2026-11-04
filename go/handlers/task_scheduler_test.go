package handlers

// ⏰ 调度器摘挂回归 (0.6.2, kisama_app 缺陷移交 TC-34 S2 + waveC S3):
// - S2: msg16 (POST /api/task/cron) 整表替换为空必须摘除 cron 调度项并停表
//   (旧实现只清任务表+落盘、不摘 robfig/cron 调度项, 已删任务在内存调度器中
//   继续按原表达式触发——表净/调度器脏, 仅进程重启可清除);
//   非空整表替换同样必须按新表重建 (旧表达式不残留)。
// - S3: msg15 (POST /api/task/onetime/execute) 手动触发必须落
//   /api/task/log/onetime 日志环 (对齐 py/js/java, 旧实现只响应返回不落环)。
// 运行: cd go && go test ./handlers/ -run TestTaskScheduler -v
//
// 测试用 cron 表达式 `0 0 31 2 *` (2 月无 31 日) 永不触发, 测试期零执行副作用。

import (
	"net/http"
	"strings"
	"testing"

	"github.com/liveqte/kisama_agent/go/models"
)

func TestTaskSchedulerCronClearUnregisters(t *testing.T) {
	r := setupTaskTest(t, t.TempDir())

	// 建任务: 调度项注册、active 置位
	code, resp := doTaskJSON(t, r, http.MethodPost, "/api/task/cron",
		map[string]string{"0 0 31 2 *": "echo s2-zombie"})
	if code != http.StatusOK {
		t.Fatalf("cron POST 应 200, got %d: %v", code, resp)
	}
	if got := len(taskManager.cronRunner.Entries()); got != 1 {
		t.Fatalf("注册后 runner 应有 1 个调度项, got %d", got)
	}

	// 整表替换为空 (msg16): 调度项必须同步摘除并停表 (S2 僵尸回归)
	code, resp = doTaskJSON(t, r, http.MethodPost, "/api/task/cron", map[string]string{})
	if code != http.StatusOK {
		t.Fatalf("cron 清空应 200, got %d: %v", code, resp)
	}
	if count, _ := resp["count"].(float64); count != 0 {
		t.Fatalf("清空响应 count 应为 0, got %v", resp["count"])
	}
	if got := len(taskManager.cronRunner.Entries()); got != 0 {
		t.Fatalf("清空后 runner 必须零调度项 (S2: 旧实现残留已删任务继续触发), got %d", got)
	}

	taskManager.mu.RLock()
	active, entries := taskManager.cronActive, len(taskManager.cronEntries)
	taskManager.mu.RUnlock()
	if entries != 0 {
		t.Fatalf("清空后 cronEntries 应为空, got %d", entries)
	}
	if active {
		t.Fatalf("清空后 cronActive 应为 false (状态接口不得谎报 active)")
	}
}

func TestTaskSchedulerCronReplaceRebuilds(t *testing.T) {
	r := setupTaskTest(t, t.TempDir())

	// 非空 → 非空整表替换: 旧表达式调度项必须摘除, 新表达式注册
	code, resp := doTaskJSON(t, r, http.MethodPost, "/api/task/cron",
		map[string]string{"0 0 31 2 *": "echo old"})
	if code != http.StatusOK {
		t.Fatalf("cron POST 应 200, got %d: %v", code, resp)
	}
	code, resp = doTaskJSON(t, r, http.MethodPost, "/api/task/cron",
		map[string]string{"0 5 31 2 *": "echo new"})
	if code != http.StatusOK {
		t.Fatalf("cron 替换应 200, got %d: %v", code, resp)
	}

	taskManager.mu.RLock()
	_, oldExists := taskManager.cronEntries["0 0 31 2 *"]
	_, newExists := taskManager.cronEntries["0 5 31 2 *"]
	taskManager.mu.RUnlock()
	if oldExists {
		t.Fatalf("替换后旧表达式调度项必须摘除 (S2 僵尸回归)")
	}
	if !newExists {
		t.Fatalf("替换后新表达式应注册, entries=%v", taskManager.cronEntries)
	}
	if got := len(taskManager.cronRunner.Entries()); got != 1 {
		t.Fatalf("替换后 runner 应恰有 1 个调度项, got %d", got)
	}
}

func TestTaskSchedulerExecuteLogsToRing(t *testing.T) {
	r := setupTaskTest(t, t.TempDir())

	// 首跑 (InitTask 门控内): 环内 1 条
	code, resp := doTaskJSON(t, r, http.MethodPost, "/api/task/onetime", []string{"echo s3-mark"})
	if code != http.StatusOK {
		t.Fatalf("onetime POST 应 200, got %d: %v", code, resp)
	}

	// msg15 手动触发: 执行结果必须落 /api/task/log/onetime 日志环 (S3 回归)
	code, resp = doTaskJSON(t, r, http.MethodPost, "/api/task/onetime/execute", nil)
	if code != http.StatusOK {
		t.Fatalf("手动触发应 200, got %d: %v", code, resp)
	}
	if got, _ := resp["executed"].(float64); got != 1 {
		t.Fatalf("手动触发应执行 1 条, got %v", resp["executed"])
	}

	taskManager.mu.RLock()
	logs := append([]models.TaskLogEntry{}, taskManager.oneTimeTaskLogs...)
	taskManager.mu.RUnlock()

	if len(logs) != 2 {
		t.Fatalf("首跑+手动触发应共 2 条日志 (S3: 旧实现手动触发不落环), got %d: %+v", len(logs), logs)
	}
	last := logs[len(logs)-1]
	if last.Type != "onetime" || !strings.Contains(last.Cmd, "echo s3-mark") {
		t.Fatalf("最后一条应为手动触发的 onetime 日志, got %+v", last)
	}
	if last.Timestamp == "" {
		t.Fatalf("日志应带时间戳, got %+v", last)
	}
}
