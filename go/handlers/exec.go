package handlers

import (
	"bytes"
	"context"
	"fmt"
	"net/http"
	"os"
	"os/exec"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/config"
	"github.com/liveqte/kisama_agent/models"
)

// ExecuteCommand executes a system command
func ExecuteCommand(c *gin.Context) {
	cfg := config.Get()

	var req models.ExecRequest
	if err := c.BindJSON(&req); err != nil {
		// Try to handle plain text request
		rawData, _ := c.GetRawData()
		req.Cmd = strings.TrimSpace(string(rawData))
	}

	if req.Cmd == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "cmd is required"})
		return
	}

	// Set working directory
	cwd := req.Cwd
	if cwd == "" {
		cwd = "."
	}

	// Prepare environment
	env := os.Environ()
	if req.Env != nil {
		for key, val := range req.Env {
			env = append(env, fmt.Sprintf("%s=%s", key, val))
		}
	}

	// Create command context with timeout
	ctx, cancel := context.WithTimeout(context.Background(), time.Duration(cfg.ExecTimeout)*time.Second)
	defer cancel()

	var cmd *exec.Cmd
	if cfg.ExecShellMode {
		// Use shell
		cmd = exec.CommandContext(ctx, "/bin/sh", "-c", req.Cmd)
	} else {
		// Parse command
		parts := strings.Fields(req.Cmd)
		if len(parts) == 0 {
			c.JSON(http.StatusBadRequest, gin.H{"error": "invalid command"})
			return
		}
		cmd = exec.CommandContext(ctx, parts[0], parts[1:]...)
	}

	cmd.Dir = cwd
	cmd.Env = env

	// Capture output
	var stdout, stderr bytes.Buffer
	cmd.Stdout = &stdout
	cmd.Stderr = &stderr

	// Execute command
	err := cmd.Run()
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

	// Combine output
	output := stdout.String()
	if stderr.String() != "" {
		output += stderr.String()
	}

	response := models.ExecResponse{
		BaseResponse: models.BaseResponse{Status: "ok"},
		Result:       output,
		ExitCode:     exitCode,
		Timeout:      timeout,
		Cmd:          req.Cmd,
	}

	c.JSON(http.StatusOK, response)
}
