package handlers

import (
	"bytes"
	"context"
	"fmt"
	"net/http"
	"os/exec"
	"sync"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/go/config"
	"github.com/liveqte/kisama_agent/go/models"
	"github.com/robfig/cron/v3"
)

// TaskManager manages one-time and cron tasks
type TaskManager struct {
	mu                sync.RWMutex
	oneTimeTasks      []string
	cronTasks         map[string]string
	cronEntries       map[string]cron.EntryID
	cronRunner        *cron.Cron
	oneTimeTaskLogs   []models.TaskLogEntry
	cronTaskLogs      []models.TaskLogEntry
	maxLogSize        int
	cronActive        bool
	lastExecutionTime time.Time
	store             *taskStore
}

var taskManager *TaskManager

// InitTaskManager initializes the task manager
func InitTaskManager(maxLogSize int) {
	taskManager = &TaskManager{
		oneTimeTasks:    []string{},
		cronTasks:       make(map[string]string),
		cronEntries:     make(map[string]cron.EntryID),
		cronRunner:      cron.New(),
		oneTimeTaskLogs: []models.TaskLogEntry{},
		cronTaskLogs:    []models.TaskLogEntry{},
		maxLogSize:      maxLogSize,
		cronActive:      false,
	}

	// 💾 持久化恢复 (0.5.7, docs/API.MD 十三): 文件缺失/损坏一律安全降级为空表, 绝不影响启动
	taskManager.store = initTaskStore()
	restoredOnetime, restoredCron := taskManager.store.load()
	if len(restoredOnetime) > 0 {
		taskManager.oneTimeTasks = restoredOnetime
	}
	if len(restoredCron) > 0 {
		taskManager.cronTasks = restoredCron
		taskManager.registerCronEntries()
	}

	// 恢复出的启动任务后台执行一次 (不阻塞 HTTP 就绪); 完成后消费 InitTask 标记,
	// 远端再 POST /api/task/onetime 不会二次触发 (单次执行语义)
	if len(taskManager.oneTimeTasks) > 0 && config.Get().InitTask {
		go func() {
			taskManager.runOnetimeTasksOnce()
			config.Get().InitTask = false
		}()
	}
}

// GetOneTimeTasks retrieves one-time tasks
func GetOneTimeTasks(c *gin.Context) {
	taskManager.mu.RLock()
	defer taskManager.mu.RUnlock()

	response := models.OneTimeTaskResponse{
		BaseResponse: models.BaseResponse{Status: "ok"},
		Count:        len(taskManager.oneTimeTasks),
		Tasks:        taskManager.oneTimeTasks,
	}

	c.JSON(http.StatusOK, response)
}

// SetOneTimeTasks sets and executes one-time tasks
func SetOneTimeTasks(c *gin.Context) {
	var req models.OneTimeTaskSetRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	taskManager.mu.Lock()
	taskManager.oneTimeTasks = req
	taskManager.mu.Unlock()

	// 💾 单次执行语义 (0.5.7, docs/API.MD 十三): InitTask 已消费 (boot 恢复执行过
	// 或本生命周期已执行过) 则只更新列表+落盘, 不再自动触发; 空列表不消费标记
	var executed []models.ExecutedTask
	cfg := config.Get()
	if cfg.InitTask && len(req) > 0 {
		executed = taskManager.runOnetimeTasksOnce()
		cfg.InitTask = false
	}

	taskManager.mu.RLock()
	curOne, curCron := taskManager.oneTimeTasks, taskManager.cronTasks
	taskManager.mu.RUnlock()

	response := models.OneTimeTaskSetResponse{
		BaseResponse: models.BaseResponse{Status: "ok"},
		Count:        len(req),
		Tasks:        req,
		Executed:     executed,
		Persisted:    taskManager.store.save(curOne, curCron),
	}

	c.JSON(http.StatusOK, response)
}

// runOnetimeTasksOnce 执行当前全部启动任务并写日志, 返回执行结果
func (tm *TaskManager) runOnetimeTasksOnce() []models.ExecutedTask {
	tm.mu.RLock()
	tasks := make([]string, len(tm.oneTimeTasks))
	copy(tasks, tm.oneTimeTasks)
	tm.mu.RUnlock()

	results := make([]models.ExecutedTask, 0, len(tasks))
	for i, cmd := range tasks {
		result := executeTask(cmd)
		status := "error"
		if result.Timeout {
			status = "timeout"
		} else if result.ExitCode == 0 {
			status = "ok"
		}
		results = append(results, models.ExecutedTask{
			Index:    i,
			Cmd:      cmd,
			ExitCode: result.ExitCode,
			Output:   result.Output,
			Status:   status,
		})
		tm.logTask(models.TaskLogEntry{
			Timestamp: time.Now().Format(time.RFC3339),
			Cmd:       cmd,
			Output:    result.Output,
			ExitCode:  result.ExitCode,
			Type:      "onetime",
		})
	}
	return results
}

// GetCronTasks retrieves cron tasks
func GetCronTasks(c *gin.Context) {
	taskManager.mu.RLock()
	defer taskManager.mu.RUnlock()

	response := models.CronTaskResponse{
		BaseResponse: models.BaseResponse{Status: "ok"},
		Count:        len(taskManager.cronTasks),
		Tasks:        taskManager.cronTasks,
	}

	c.JSON(http.StatusOK, response)
}

// SetCronTasks sets cron tasks
// SetCronTasks sets cron tasks
func SetCronTasks(c *gin.Context) {
	var req models.CronTaskRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	taskManager.mu.Lock()
	defer taskManager.mu.Unlock()

	// Clear tasks if empty
	if len(req) == 0 {
		taskManager.cronTasks = make(map[string]string)
		taskManager.cronActive = false

		// 🚀 核心修复：清空时必须明确告知测试脚本 status="ok" 且 count=0
		c.JSON(http.StatusOK, models.CronTaskResponse{
			BaseResponse: models.BaseResponse{Status: "ok"},
			Count:        0,
			Tasks:        make(map[string]string),
			Persisted:    taskManager.store.save(taskManager.oneTimeTasks, taskManager.cronTasks),
		})
		return
	}

	// Add new cron tasks
	taskManager.cronTasks = req
	taskManager.registerCronEntries()

	response := models.CronTaskResponse{
		BaseResponse: models.BaseResponse{Status: "ok"},
		Count:        len(req),
		Tasks:        req,
		Persisted:    taskManager.store.save(taskManager.oneTimeTasks, taskManager.cronTasks),
	}

	c.JSON(http.StatusOK, response)
}

// registerCronEntries 依据 cronTasks 重建 robfig/cron 调度项 (调用方需持有 mu 或处于初始化阶段)
func (tm *TaskManager) registerCronEntries() {
	// Stop existing cron tasks
	for _, entryID := range tm.cronEntries {
		tm.cronRunner.Remove(entryID)
	}
	tm.cronEntries = make(map[string]cron.EntryID)

	for schedule, cmd := range tm.cronTasks {
		cronCmd := cmd
		entryID, err := tm.cronRunner.AddFunc(schedule, func() {
			result := executeTask(cronCmd)
			tm.logTask(models.TaskLogEntry{
				Timestamp: time.Now().Format(time.RFC3339),
				Cmd:       cronCmd,
				Output:    result.Output,
				ExitCode:  result.ExitCode,
				Type:      "cron",
				Cron:      schedule,
			})
		})

		if err == nil {
			tm.cronEntries[schedule] = entryID
		}
	}

	if len(tm.cronEntries) > 0 {
		tm.cronActive = true
		tm.cronRunner.Start()
	}
}

// GetTaskStatus retrieves task status
func GetTaskStatus(c *gin.Context) {
	taskManager.mu.RLock()
	defer taskManager.mu.RUnlock()

	response := models.TaskStatusResponse{
		BaseResponse: models.BaseResponse{Status: "ok"},
	}

	response.OneTime.Pending = len(taskManager.oneTimeTasks) > 0
	response.OneTime.Count = len(taskManager.oneTimeTasks)
	response.Cron.Active = taskManager.cronActive
	response.Cron.Count = len(taskManager.cronTasks)
	response.Cron.CheckInterval = config.Get().CronCheckInterval

	enabled, storePath, lastSavedAt := taskManager.store.statusSnapshot()
	response.Persistence.Enabled = enabled
	response.Persistence.StorePath = storePath
	response.Persistence.LastSavedAt = lastSavedAt

	c.JSON(http.StatusOK, response)
}

// GetOneTimeTaskLogs retrieves one-time task logs
func GetOneTimeTaskLogs(c *gin.Context) {
	limit := 50
	if l := c.Query("limit"); l != "" {
		fmt.Sscanf(l, "%d", &limit)
	}

	taskManager.mu.RLock()
	logs := taskManager.oneTimeTaskLogs
	taskManager.mu.RUnlock()

	if len(logs) > limit {
		logs = logs[len(logs)-limit:]
	}

	response := models.TaskLogResponse{
		BaseResponse: models.BaseResponse{Status: "ok"},
		Count:        len(logs),
		Logs:         logs,
	}

	c.JSON(http.StatusOK, response)
}

// GetCronTaskLogs retrieves cron task logs
func GetCronTaskLogs(c *gin.Context) {
	limit := 50
	if l := c.Query("limit"); l != "" {
		fmt.Sscanf(l, "%d", &limit)
	}

	taskManager.mu.RLock()
	logs := taskManager.cronTaskLogs
	taskManager.mu.RUnlock()

	if len(logs) > limit {
		logs = logs[len(logs)-limit:]
	}

	response := models.TaskLogResponse{
		BaseResponse: models.BaseResponse{Status: "ok"},
		Count:        len(logs),
		Logs:         logs,
	}

	c.JSON(http.StatusOK, response)
}

// ClearOneTimeTaskLogs clears one-time task logs
func ClearOneTimeTaskLogs(c *gin.Context) {
	taskManager.mu.Lock()
	taskManager.oneTimeTaskLogs = []models.TaskLogEntry{}
	taskManager.mu.Unlock()

	response := models.ClearedLogResponse{
		BaseResponse: models.BaseResponse{Status: "ok"},
		Cleared:      "onetime",
	}

	c.JSON(http.StatusOK, response)
}

// ClearCronTaskLogs clears cron task logs
func ClearCronTaskLogs(c *gin.Context) {
	taskManager.mu.Lock()
	taskManager.cronTaskLogs = []models.TaskLogEntry{}
	taskManager.mu.Unlock()

	response := models.ClearedLogResponse{
		BaseResponse: models.BaseResponse{Status: "ok"},
		Cleared:      "cron",
	}

	c.JSON(http.StatusOK, response)
}

// GetTaskLogSummary retrieves task log summary
func GetTaskLogSummary(c *gin.Context) {
	taskManager.mu.RLock()
	oneTimeLogs := taskManager.oneTimeTaskLogs
	cronLogs := taskManager.cronTaskLogs
	taskManager.mu.RUnlock()

	response := models.TaskLogSummaryResponse{
		BaseResponse: models.BaseResponse{Status: "ok"},
	}

	response.OneTime.TotalLogged = len(oneTimeLogs)
	response.OneTime.MaxCapacity = taskManager.maxLogSize
	for _, log := range oneTimeLogs {
		if log.ExitCode == 0 {
			response.OneTime.RecentSuccess++
		} else {
			response.OneTime.RecentFailed++
		}
	}

	response.Cron.TotalLogged = len(cronLogs)
	response.Cron.MaxCapacity = taskManager.maxLogSize
	for _, log := range cronLogs {
		if log.ExitCode == 0 {
			response.Cron.RecentSuccess++
		} else {
			response.Cron.RecentFailed++
		}
	}

	c.JSON(http.StatusOK, response)
}

// ExecuteOneTimeTasks forcefully executes all one-time tasks
func ExecuteOneTimeTasks(c *gin.Context) {
	taskManager.mu.RLock()
	tasks := taskManager.oneTimeTasks
	taskManager.mu.RUnlock()

	var results []ExecutedTask
	for _, cmd := range tasks {
		result := executeTask(cmd)
		results = append(results, ExecutedTask{
			Cmd:      cmd,
			ExitCode: result.ExitCode,
			Output:   result.Output,
			Timeout:  result.Timeout,
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"status":   "ok",
		"executed": len(results),
		"results":  results,
	})
}

// Helper structures and functions

// TaskResult represents the result of task execution
type TaskResult struct {
	Output   string
	ExitCode int
	Timeout  bool
}

// ExecutedTask represents an executed task
type ExecutedTask struct {
	Cmd      string `json:"cmd"`
	ExitCode int    `json:"exitcode"`
	Output   string `json:"output"`
	Timeout  bool   `json:"timeout"`
}

// executeTask executes a single task
func executeTask(cmd string) TaskResult {
	cfg := config.Get()
	ctx, cancel := context.WithTimeout(context.Background(), time.Duration(cfg.ExecTimeout)*time.Second)
	defer cancel()

	// Use shell to execute command (平台自适应：Unix /bin/sh，Windows cmd.exe)
	execCmd := shellCommand(ctx, cmd)

	var stdout, stderr bytes.Buffer
	execCmd.Stdout = &stdout
	execCmd.Stderr = &stderr

	err := execCmd.Run()
	exitCode := 0
	timeout := false

	if err != nil {
		if ctx.Err() == context.DeadlineExceeded {
			exitCode = 124
			timeout = true
		} else if exitErr, ok := err.(*exec.ExitError); ok {
			exitCode = exitErr.ExitCode()
		} else {
			exitCode = -1
		}
	}

	output := stdout.String()
	if stderr.String() != "" {
		output += stderr.String()
	}

	return TaskResult{
		Output:   output,
		ExitCode: exitCode,
		Timeout:  timeout,
	}
}

// logTask logs a task execution
func (tm *TaskManager) logTask(entry models.TaskLogEntry) {
	tm.mu.Lock()
	defer tm.mu.Unlock()

	if entry.Type == "onetime" {
		tm.oneTimeTaskLogs = append(tm.oneTimeTaskLogs, entry)
		if len(tm.oneTimeTaskLogs) > tm.maxLogSize {
			tm.oneTimeTaskLogs = tm.oneTimeTaskLogs[1:]
		}
	} else if entry.Type == "cron" {
		tm.cronTaskLogs = append(tm.cronTaskLogs, entry)
		if len(tm.cronTaskLogs) > tm.maxLogSize {
			tm.cronTaskLogs = tm.cronTaskLogs[1:]
		}
	}
}
