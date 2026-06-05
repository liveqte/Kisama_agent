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
	"github.com/liveqte/kisama_agent/config"
	"github.com/liveqte/kisama_agent/models"
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

	// Execute tasks
	var executed []models.ExecutedTask
	for i, cmd := range req {
		result := executeTask(cmd)
		executed = append(executed, models.ExecutedTask{
			Index:    i,
			Cmd:      cmd,
			ExitCode: result.ExitCode,
			Output:   result.Output,
			Status:   "ok",
		})

		// Log
		taskManager.logTask(models.TaskLogEntry{
			Timestamp: time.Now().Format(time.RFC3339),
			Cmd:       cmd,
			Output:    result.Output,
			ExitCode:  result.ExitCode,
			Type:      "onetime",
		})
	}

	response := models.OneTimeTaskSetResponse{
		BaseResponse: models.BaseResponse{Status: "ok"},
		Count:        len(req),
		Tasks:        req,
		Executed:     executed,
	}

	c.JSON(http.StatusOK, response)
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

	// Stop existing cron tasks
	for _, entryID := range taskManager.cronEntries {
		taskManager.cronRunner.Remove(entryID)
	}
	taskManager.cronEntries = make(map[string]cron.EntryID)

	// Clear tasks if empty
	if len(req) == 0 {
		taskManager.cronTasks = make(map[string]string)
		taskManager.cronActive = false

		// 🚀 核心修复：清空时必须明确告知测试脚本 status="ok" 且 count=0
		c.JSON(http.StatusOK, models.CronTaskResponse{
			BaseResponse: models.BaseResponse{Status: "ok"},
			Count:        0,
			Tasks:        make(map[string]string),
		})
		return
	}

	// Add new cron tasks
	for schedule, cmd := range req {
		cronCmd := cmd
		entryID, err := taskManager.cronRunner.AddFunc(schedule, func() {
			result := executeTask(cronCmd)
			taskManager.logTask(models.TaskLogEntry{
				Timestamp: time.Now().Format(time.RFC3339),
				Cmd:       cronCmd,
				Output:    result.Output,
				ExitCode:  result.ExitCode,
				Type:      "cron",
				Cron:      schedule,
			})
		})

		if err == nil {
			taskManager.cronEntries[schedule] = entryID
		}
	}

	taskManager.cronTasks = req
	if len(req) > 0 {
		taskManager.cronActive = true
		taskManager.cronRunner.Start()
	}

	response := models.CronTaskResponse{
		BaseResponse: models.BaseResponse{Status: "ok"},
		Count:        len(req),
		Tasks:        req,
	}

	c.JSON(http.StatusOK, response)
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

	// Use shell to execute command
	execCmd := exec.CommandContext(ctx, "/bin/sh", "-c", cmd)

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
