package handlers

// 🪪 任务元数据行规范化单测 (0.6.2 契约, docs/API.MD 四)
// 运行: cd go && go test ./handlers/ -run TaskMeta -v

import (
	"fmt"
	"runtime"
	"testing"
)

// 盖章语法跟随本端平台 (Windows=rem, Unix=#); 解析则两种语法都接受
var metaComment = func() string {
	if runtime.GOOS == "windows" {
		return "rem"
	}
	return "#"
}()

func metaLine(id string, updated int64) string {
	return fmt.Sprintf("%s kisama-task: id=%s updated=%d", metaComment, id, updated)
}

func idOf(script string) string {
	m := parseTaskMeta(script)
	if m == nil {
		return ""
	}
	return m.id
}

func updOf(script string) int64 {
	m := parseTaskMeta(script)
	if m == nil {
		return -1
	}
	return m.updated
}

// ---------- 解析 / 剥离 / 盖章 ----------

func TestTaskMetaParse(t *testing.T) {
	if m := parseTaskMeta(metaLine("100", 50) + "\necho hi"); m == nil || m.id != "100" || m.updated != 50 {
		t.Fatalf("解析 # 语法失败: %+v", m)
	}
	if m := parseTaskMeta(fmt.Sprintf("rem kisama-task: id=%d updated=%d", 200, 60) + "\necho hi"); m == nil || m.id != "200" || m.updated != 60 {
		t.Fatalf("解析 rem 语法失败: %+v", m)
	}
	if m := parseTaskMeta("#!/bin/sh\n" + metaLine("3", 4) + "\nls"); m == nil || m.id != "3" {
		t.Fatalf("shebang 后第二行解析失败: %+v", m)
	}
	if parseTaskMeta("echo hi") != nil {
		t.Fatal("无行应返回 nil")
	}
	if parseTaskMeta("a\nb\nc\n"+metaLine("1", 1)) != nil {
		t.Fatal("超过前 3 行不解析")
	}
}

func TestTaskMetaStripAndWith(t *testing.T) {
	if got := stripTaskMetaLine(metaLine("1", 1) + "\necho hi"); got != "echo hi" {
		t.Fatalf("strip 失败: %q", got)
	}
	if got := stripTaskMetaLine("#!/bin/sh\n" + metaLine("1", 1) + "\nls"); got != "#!/bin/sh\nls" {
		t.Fatalf("strip 保 shebang 失败: %q", got)
	}
	if got := withTaskMeta("echo hi", "9", 9); got != metaLine("9", 9)+"\necho hi" {
		t.Fatalf("withTaskMeta 插首行失败: %q", got)
	}
	if got := withTaskMeta("#!/bin/sh\nls", "9", 9); got != "#!/bin/sh\n"+metaLine("9", 9)+"\nls" {
		t.Fatalf("withTaskMeta shebang 后插行失败: %q", got)
	}
	if got := withTaskMeta(metaLine("1", 1)+"\necho hi", "1", 2); got != metaLine("1", 2)+"\necho hi" {
		t.Fatalf("withTaskMeta 替换旧行失败: %q", got)
	}
}

// ---------- onetime 规范化 ----------

func TestNormalizeOnetime(t *testing.T) {
	const NOW = int64(1700000000000)

	// 新任务赋 id=now, 有效脚本不变
	out := normalizeOnetimeTasks([]string{"echo hi"}, nil, NOW)
	if len(out) != 1 || idOf(out[0]) != fmt.Sprint(NOW) || stripTaskMetaLine(out[0]) != "echo hi" {
		t.Fatalf("新任务盖章失败: %v", out)
	}

	// 内容未变: 幂等保留存量 id/updated (入参带旧 updated 不推进)
	out = normalizeOnetimeTasks([]string{metaLine("7", 1) + "\necho hi"}, []string{metaLine("7", 9) + "\necho hi"}, NOW)
	if len(out) != 1 || out[0] != metaLine("7", 9)+"\necho hi" {
		t.Fatalf("幂等保留失败: %v", out)
	}

	// 内容变化: 保留 id, updated 盖 now
	out = normalizeOnetimeTasks([]string{metaLine("7", 3) + "\necho new"}, []string{metaLine("7", 3) + "\necho old"}, NOW)
	if len(out) != 1 || idOf(out[0]) != "7" || updOf(out[0]) != NOW || stripTaskMetaLine(out[0]) != "echo new" {
		t.Fatalf("改内容保留 id 失败: %v", out)
	}

	// id 跨位置匹配: 顺序互换仍各归各
	stored := []string{metaLine("1", 1) + "\na", metaLine("2", 2) + "\nb"}
	out = normalizeOnetimeTasks([]string{metaLine("2", 2) + "\nb", metaLine("1", 1) + "\na"}, stored, NOW)
	if idOf(out[0]) != "2" || idOf(out[1]) != "1" {
		t.Fatalf("跨位置匹配失败: %v", out)
	}

	// 内容匹配保存量 id (入参无行)
	out = normalizeOnetimeTasks([]string{"echo hi"}, []string{metaLine("7", 3) + "\necho hi"}, NOW)
	if len(out) != 1 || out[0] != metaLine("7", 3)+"\necho hi" {
		t.Fatalf("裸入参保存量 id 失败: %v", out)
	}

	// 存量无行 (旧版遗留): 采纳入参 id (面板暂授身份)
	out = normalizeOnetimeTasks([]string{metaLine("42", 99) + "\necho hi"}, []string{"echo hi"}, NOW)
	if len(out) != 1 || out[0] != metaLine("42", 99)+"\necho hi" {
		t.Fatalf("遗留存量采纳入参 id 失败: %v", out)
	}

	// 未入参条目删除 (整表替换语义)
	out = normalizeOnetimeTasks([]string{metaLine("1", 1) + "\na"}, []string{metaLine("1", 1) + "\na", metaLine("2", 2) + "\nb"}, NOW)
	if len(out) != 1 || idOf(out[0]) != "1" {
		t.Fatalf("整表替换删除失败: %v", out)
	}

	// 不同 id 同内容: 入参整表两条都保留, 存量已有的保原 id, 存量没有的按新任务赋新 id
	out = normalizeOnetimeTasks([]string{metaLine("1", 1) + "\nx", metaLine("2", 2) + "\nx"}, []string{metaLine("2", 2) + "\nx"}, NOW)
	if len(out) != 2 {
		t.Fatalf("不同 id 同内容应并集两条: %v", out)
	}
	firstID, secondID := idOf(out[0]), idOf(out[1])
	if !((firstID == "2" && secondID != "" && secondID != "1" && secondID != "2") ||
		(secondID == "2" && firstID != "" && firstID != "1" && firstID != "2")) {
		t.Fatalf("身份归属失败: %v", out)
	}
}

// ---------- cron 规范化 ----------

func TestNormalizeCron(t *testing.T) {
	const NOW = int64(1700000000000)

	// 新任务赋 id
	out := normalizeCronTasks(map[string]string{"*/5 * * * *": "echo hi"}, nil, NOW)
	if m := parseTaskMeta(out["*/5 * * * *"]); m == nil || stripTaskMetaLine(out["*/5 * * * *"]) != "echo hi" {
		t.Fatalf("cron 新任务盖章失败: %v", out)
	}

	// id 跨表达式匹配: 同一条任务改调度时间 → 表达式随入参, id 保留, updated 盖 now
	out = normalizeCronTasks(map[string]string{"0 9 * * *": metaLine("7", 3) + "\nwork"}, map[string]string{"0 8 * * *": metaLine("7", 3) + "\nwork"}, NOW)
	if len(out) != 1 || !containsKey(out, "0 9 * * *") {
		t.Fatalf("cron 跨表达式迁移失败: %v", out)
	}
	if idOf(out["0 9 * * *"]) != "7" || updOf(out["0 9 * * *"]) != NOW {
		t.Fatalf("cron 迁移身份失败: %v", out)
	}

	// 内容变化: 保留 id 盖 now
	out = normalizeCronTasks(map[string]string{"0 8 * * *": metaLine("7", 3) + "\nnew"}, map[string]string{"0 8 * * *": metaLine("7", 3) + "\nold"}, NOW)
	if idOf(out["0 8 * * *"]) != "7" || updOf(out["0 8 * * *"]) != NOW || stripTaskMetaLine(out["0 8 * * *"]) != "new" {
		t.Fatalf("cron 改内容保留 id 失败: %v", out)
	}

	// 裸入参保存量 id
	out = normalizeCronTasks(map[string]string{"0 8 * * *": "a"}, map[string]string{"0 8 * * *": metaLine("7", 3) + "\na"}, NOW)
	if len(out) != 1 || out["0 8 * * *"] != metaLine("7", 3)+"\na" {
		t.Fatalf("cron 裸入参保存量 id 失败: %v", out)
	}

	// 未入参表达式删除
	out = normalizeCronTasks(map[string]string{"0 8 * * *": metaLine("1", 1) + "\na"}, map[string]string{"0 8 * * *": metaLine("1", 1) + "\na", "0 9 * * *": metaLine("2", 2) + "\nb"}, NOW)
	if len(out) != 1 || !containsKey(out, "0 8 * * *") {
		t.Fatalf("cron 整表替换删除失败: %v", out)
	}

	// 空入参清空
	if out := normalizeCronTasks(nil, map[string]string{"0 8 * * *": "a"}, NOW); len(out) != 0 {
		t.Fatalf("cron 空入参应清空: %v", out)
	}
}

func containsKey(m map[string]string, k string) bool {
	_, ok := m[k]
	return ok
}
