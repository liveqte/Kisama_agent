package handlers

// 🪪 任务元数据行 (0.6.2 契约, docs/API.MD 四)
// 任务身份 = 脚本首行保留注释 `kisama-task: id=<创建ms> updated=<修改ms>`
// (Unix `#` / Windows `rem` 注释语法, 随脚本逐字往返; POST 设置时在此规范化盖章:
//  同任务内容未变→幂等保留原 id/updated, 内容变化→保留 id 刷新 updated, 全新任务→赋 id=now)
// 存储格式 (KSTORE) 与 GET 响应结构均不变——行是脚本内容的一部分, 逐字往返。

import (
	"regexp"
	"runtime"
	"strconv"
	"strings"
)

var (
	taskMetaLineRe    = regexp.MustCompile(`(?i)^\s*(?:#|rem\b)\s*kisama-task:\s*(.*)$`)
	taskMetaIDRe      = regexp.MustCompile(`\bid=(\d+)\b`)
	taskMetaUpdatedRe = regexp.MustCompile(`\bupdated=(\d+)\b`)
)

type parsedTaskMeta struct {
	id      string
	updated int64
}

// parseTaskMeta 从脚本前 3 行解析元数据行 (契约位置: 首行, 或 `#!` shebang 后一行); 没有返回 nil
func parseTaskMeta(script string) *parsedTaskMeta {
	lines := strings.Split(script, "\n")
	if len(lines) > 3 {
		lines = lines[:3]
	}
	for _, line := range lines {
		m := taskMetaLineRe.FindStringSubmatch(line)
		if m == nil {
			continue
		}
		idMatch := taskMetaIDRe.FindStringSubmatch(m[1])
		if idMatch == nil {
			return nil
		}
		updated := int64(0)
		if u := taskMetaUpdatedRe.FindStringSubmatch(m[1]); u != nil {
			updated, _ = strconv.ParseInt(u[1], 10, 64)
		}
		return &parsedTaskMeta{id: idMatch[1], updated: updated}
	}
	return nil
}

// stripTaskMetaLine 剥掉元数据行后的有效脚本 (无行原样返回)
func stripTaskMetaLine(script string) string {
	lines := strings.Split(script, "\n")
	n := len(lines)
	if n > 3 {
		n = 3
	}
	for i := 0; i < n; i++ {
		if taskMetaLineRe.MatchString(lines[i]) {
			out := make([]string, 0, len(lines)-1)
			out = append(out, lines[:i]...)
			out = append(out, lines[i+1:]...)
			return strings.Join(out, "\n")
		}
	}
	return script
}

// withTaskMeta 把规范化元数据行插到脚本头部 (首行是 shebang 则第二行); 平台注释语法跟随本端
func withTaskMeta(script, id string, updated int64) string {
	effective := stripTaskMetaLine(script)
	comment := "#"
	if runtime.GOOS == "windows" {
		comment = "rem"
	}
	line := comment + " kisama-task: id=" + id + " updated=" + strconv.FormatInt(updated, 10)
	lines := strings.Split(effective, "\n")
	pos := 0
	if len(lines) > 0 && strings.HasPrefix(lines[0], "#!") {
		pos = 1
	}
	out := make([]string, 0, len(lines)+1)
	out = append(out, lines[:pos]...)
	out = append(out, line)
	out = append(out, lines[pos:]...)
	return strings.Join(out, "\n")
}

// normalizeOnetimeTasks 身份感知整表规范化 (启动任务): 匹配优先级 id 跨位置 > 有效脚本全等
// (任一侧无行时); 存量中未被入参匹配的条目删除 (整表替换语义不变)
func normalizeOnetimeTasks(incoming, stored []string, now int64) []string {
	type storedTask struct {
		raw string
		id  string
		upd int64
		eff string
	}
	storedParsed := make([]storedTask, 0, len(stored))
	for _, s := range stored {
		m := parseTaskMeta(s)
		id, upd := "", int64(0)
		if m != nil {
			id, upd = m.id, m.updated
		}
		storedParsed = append(storedParsed, storedTask{raw: s, id: id, upd: upd, eff: strings.TrimSpace(stripTaskMetaLine(s))})
	}
	consumed := make(map[int]bool)
	nowID := strconv.FormatInt(now, 10)
	out := make([]string, 0, len(incoming))
	for _, raw := range incoming {
		meta := parseTaskMeta(raw)
		eff := strings.TrimSpace(stripTaskMetaLine(raw))
		hit := -1
		if meta != nil {
			for i, sp := range storedParsed {
				if !consumed[i] && sp.id == meta.id {
					hit = i
					break
				}
			}
		}
		if hit < 0 {
			for i, sp := range storedParsed {
				if !consumed[i] && sp.eff == eff && (meta == nil || sp.id == "") {
					hit = i
					break
				}
			}
		}
		if hit < 0 {
			// 全新任务: 赋 id=now (入参行被剥掉, 面板暂授的 id 以响应回显为准)
			out = append(out, withTaskMeta(eff, nowID, now))
			continue
		}
		sp := storedParsed[hit]
		consumed[hit] = true
		if sp.eff == eff {
			// 内容未变: 幂等保留原 id/updated; 存量无行 (旧版遗留) 则采纳入参 id
			if sp.id != "" {
				out = append(out, withTaskMeta(sp.raw, sp.id, sp.upd))
			} else {
				inID, inUpd := "", now
				if meta != nil {
					inID = meta.id
					if meta.updated > 0 {
						inUpd = meta.updated
					}
				}
				if inID == "" {
					inID = nowID
				}
				out = append(out, withTaskMeta(sp.raw, inID, inUpd))
			}
			continue
		}
		// 内容变化: 保留身份 (存量 id 优先, 存量无行采纳入参 id), 刷新修改时间
		keepID := sp.id
		if keepID == "" {
			if meta != nil && meta.id != "" {
				keepID = meta.id
			} else {
				keepID = nowID
			}
		}
		out = append(out, withTaskMeta(eff, keepID, now))
	}
	return out
}

// normalizeCronTasks 身份感知整表规范化 (定时任务): id 跨表达式匹配 (同一条任务改了调度时间
// 仍是同一条), 其次同表达式 + 有效脚本全等; 输出为入参键集 (存量未入参的删除)
func normalizeCronTasks(incoming, stored map[string]string, now int64) map[string]string {
	type storedCron struct {
		expr string
		raw  string
		id   string
		upd  int64
		eff  string
	}
	storedParsed := make([]storedCron, 0, len(stored))
	for e, s := range stored {
		m := parseTaskMeta(s)
		id, upd := "", int64(0)
		if m != nil {
			id, upd = m.id, m.updated
		}
		storedParsed = append(storedParsed, storedCron{expr: e, raw: s, id: id, upd: upd, eff: strings.TrimSpace(stripTaskMetaLine(s))})
	}
	consumed := make(map[int]bool)
	nowID := strconv.FormatInt(now, 10)
	out := make(map[string]string, len(incoming))
	for expr, raw := range incoming {
		meta := parseTaskMeta(raw)
		eff := strings.TrimSpace(stripTaskMetaLine(raw))
		hit := -1
		if meta != nil {
			for i, sp := range storedParsed {
				if !consumed[i] && sp.id == meta.id {
					hit = i
					break
				}
			}
		}
		if hit < 0 {
			for i, sp := range storedParsed {
				if !consumed[i] && sp.expr == expr && sp.eff == eff && (meta == nil || sp.id == "") {
					hit = i
					break
				}
			}
		}
		if hit < 0 {
			out[expr] = withTaskMeta(eff, nowID, now)
			continue
		}
		sp := storedParsed[hit]
		consumed[hit] = true
		if sp.eff == eff && sp.expr == expr {
			if sp.id != "" {
				out[expr] = withTaskMeta(sp.raw, sp.id, sp.upd)
			} else {
				inID, inUpd := "", now
				if meta != nil {
					inID = meta.id
					if meta.updated > 0 {
						inUpd = meta.updated
					}
				}
				if inID == "" {
					inID = nowID
				}
				out[expr] = withTaskMeta(sp.raw, inID, inUpd)
			}
			continue
		}
		keepID := sp.id
		if keepID == "" {
			if meta != nil && meta.id != "" {
				keepID = meta.id
			} else {
				keepID = nowID
			}
		}
		out[expr] = withTaskMeta(eff, keepID, now)
	}
	return out
}
