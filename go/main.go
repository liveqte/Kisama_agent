package main

import (
	"fmt"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/config"
	"github.com/liveqte/kisama_agent/crypto"
	"github.com/liveqte/kisama_agent/handlers"
	"github.com/liveqte/kisama_agent/logger"
	"github.com/liveqte/kisama_agent/middleware"
)

func main() {
	// Initialize logger
	logger.Init()

	// Create configuration
	cfg, err := config.New()
	if err != nil {
		logger.Errorf("Failed to create configuration: %v", err)
		os.Exit(1)
	}

	// Validate configuration
	if err := cfg.Validate(); err != nil {
		logger.Errorf("Configuration validation failed: %v", err)
		os.Exit(1)
	}

	// Create crypto manager
	cm, err := crypto.NewCryptoManager(cfg.ECDSAPublicKeyPEM, cfg.ECIESPublicKeyB64)
	if err != nil {
		logger.Errorf("Failed to create crypto manager: %v", err)
		os.Exit(1)
	}

	// Set Gin mode
	if cfg.Debug {
		gin.SetMode(gin.DebugMode)
	} else {
		gin.SetMode(gin.ReleaseMode)
	}

	// Create Gin router
	router := gin.New()

	// Apply middleware
	router.Use(middleware.LoggingMiddleware())
	router.Use(middleware.CORSMiddleware())
	router.Use(middleware.AuthEncryptMiddleware(cm, cfg))

	// Initialize task manager
	handlers.InitTaskManager(cfg.MaxTaskLogSize)

	// Register API routes
	registerRoutes(router)

	// Start server
	addr := fmt.Sprintf("%s:%d", cfg.Host, cfg.Port)
	logger.Infof("Starting Kisama Agent server on %s", addr)
	logger.Infof("Agent version: %s", cfg.AgentVersion)

	if err := router.Run(addr); err != nil {
		logger.Errorf("Failed to start server: %v", err)
		os.Exit(1)
	}
}

// registerRoutes registers all API routes
func registerRoutes(router *gin.Engine) {
	api := router.Group("/api")

	// ========== System Information ==========
	api.GET("/baseinfo", handlers.GetBaseInfo)
	api.GET("/status", handlers.GetStatus)

	// ========== Command Execution ==========
	api.POST("/exec", handlers.ExecuteCommand)

	// ========== File Management ==========
	api.POST("/file/list", handlers.ListFiles)
	api.POST("/file/authority", handlers.QueryFileAuthority)
	api.PUT("/file/authority", handlers.SetFileAuthority)
	api.POST("/file/cat", handlers.ReadFileContent)
	api.POST("/file", handlers.UploadFile)
	api.DELETE("/file", handlers.DeleteFiles)
	api.PUT("/file", handlers.MoveFiles)
	api.POST("/file/cp", handlers.CopyFiles)
	api.POST("/file/new", handlers.MkdirRecursive)
	api.POST("/file/download", handlers.DownloadFile)

	// ========== Task Management ==========
	api.GET("/task/onetime", handlers.GetOneTimeTasks)
	api.POST("/task/onetime", handlers.SetOneTimeTasks)
	api.POST("/task/onetime/execute", handlers.ExecuteOneTimeTasks)

	api.GET("/task/cron", handlers.GetCronTasks)
	api.POST("/task/cron", handlers.SetCronTasks)

	api.GET("/task/status", handlers.GetTaskStatus)

	api.GET("/task/log/onetime", handlers.GetOneTimeTaskLogs)
	api.GET("/task/log/cron", handlers.GetCronTaskLogs)
	api.DELETE("/task/log/onetime", handlers.ClearOneTimeTaskLogs)
	api.DELETE("/task/log/cron", handlers.ClearCronTaskLogs)
	api.GET("/task/log/summary", handlers.GetTaskLogSummary)

	// ========== WebSocket ==========
	api.GET("/ws/:path", handlers.WebSocketHandler)

	// Health check
	router.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{"status": "ok"})
	})

	// OpenAPI schema (for debugging)
	router.GET("/openapi.json", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"openapi": "3.0.0",
			"info": gin.H{
				"title":   "Kisama Agent API",
				"version": "0.1.2",
			},
			"paths": map[string]interface{}{},
		})
	})
}
