package kisama

import (
	"context"
	"errors"
	"fmt"
	"net"
	"net/http"
	"os"
	"os/signal"
	"strconv"
	"strings"
	"sync"
	"syscall"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/config"
	"github.com/liveqte/kisama_agent/crypto"
	"github.com/liveqte/kisama_agent/handlers"
	"github.com/liveqte/kisama_agent/logger"
	"github.com/liveqte/kisama_agent/middleware"
)

// Options is the constructor input for a Kisama service.
type Options struct {
	Host              string
	Port              int
	KPort             int
	Debug             bool
	ECDSAPublicKey    string
	ECIESPublicKeyB64 string
}

// Service wraps configuration, crypto state, router and lifecycle.
type Service struct {
	cfg        *config.Config
	cm         *crypto.CryptoManager
	router     *gin.Engine
	server     *http.Server
	listener   net.Listener
	serveErrCh chan error

	mu      sync.RWMutex
	running bool
}

// NewService constructs a service instance and prepares the router without starting it.
func NewService(opts Options) (*Service, error) {
	logger.Init()

	cfg, err := config.New()
	if err != nil {
		logger.Errorf("Failed to create configuration: %v", err)
		return nil, err
	}

	if opts.Host != "" {
		cfg.Host = opts.Host
	}
	if opts.KPort != 0 {
		cfg.Port = opts.KPort
	} else if opts.Port != 0 {
		cfg.Port = opts.Port
	}
	if opts.Debug {
		cfg.Debug = true
	}
	if opts.ECDSAPublicKey != "" {
		cfg.ECDSAPublicKey = opts.ECDSAPublicKey
	}
	if opts.ECIESPublicKeyB64 != "" {
		cfg.ECIESPublicKeyB64 = opts.ECIESPublicKeyB64
	}

	if err := cfg.Validate(); err != nil {
		logger.Errorf("Configuration validation failed: %v", err)
		return nil, err
	}

	cm, err := crypto.NewCryptoManager(cfg.ECDSAPublicKey, cfg.ECIESPublicKeyB64)
	if err != nil {
		logger.Errorf("Failed to create crypto manager: %v", err)
		return nil, err
	}

	router := newRouter(cfg, cm)

	return &Service{
		cfg:        cfg,
		cm:         cm,
		router:     router,
		serveErrCh: make(chan error, 1),
	}, nil
}

// NewServiceFromEnv creates a service using environment variables and optional overrides.
func NewServiceFromEnv() (*Service, error) {
	opts := Options{}

	if host := os.Getenv("HOST"); host != "" {
		opts.Host = host
	}
	if debug := os.Getenv("DEBUG"); debug != "" {
		opts.Debug = strings.EqualFold(debug, "true")
	}
	if val := os.Getenv("KPORT"); val != "" {
		if port, err := strconv.Atoi(val); err == nil {
			opts.KPort = port
		}
	}
	if val := os.Getenv("PORT"); val != "" {
		if port, err := strconv.Atoi(val); err == nil {
			opts.Port = port
		}
	}
	if val := os.Getenv("ECDSA_PUBKEY"); val != "" {
		opts.ECDSAPublicKey = val
	}
	if val := os.Getenv("ECIES_PUBKEY"); val != "" {
		opts.ECIESPublicKeyB64 = val
	}

	return NewService(opts)
}

// Start launches the HTTP server and returns immediately.
func (s *Service) Start() error {
	s.mu.Lock()
	if s.running {
		s.mu.Unlock()
		return nil
	}

	addr := fmt.Sprintf("%s:%d", s.cfg.Host, s.cfg.Port)
	logger.Infof("Starting Kisama Agent server on %s", addr)
	logger.Infof("Agent version: %s", s.cfg.AgentVersion)

	server := &http.Server{Addr: addr, Handler: s.router}
	listener, err := net.Listen("tcp", addr)
	if err != nil {
		s.mu.Unlock()
		return err
	}

	s.server = server
	s.listener = listener
	s.running = true
	s.mu.Unlock()

	go func() {
		if err := server.Serve(listener); err != nil && !errors.Is(err, http.ErrServerClosed) {
			select {
			case s.serveErrCh <- err:
			default:
			}
		}
	}()

	return nil
}

// Stop gracefully shuts down the HTTP server.
func (s *Service) Stop() error {
	s.mu.Lock()
	if !s.running {
		s.mu.Unlock()
		return nil
	}
	s.running = false
	server := s.server
	listener := s.listener
	s.server = nil
	s.listener = nil
	s.mu.Unlock()

	if server != nil {
		ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
		defer cancel()
		if err := server.Shutdown(ctx); err != nil && !errors.Is(err, http.ErrServerClosed) {
			return err
		}
	}
	if listener != nil {
		_ = listener.Close()
	}
	return nil
}

// IsRunning reports whether the service is currently serving requests.
func (s *Service) IsRunning() bool {
	s.mu.RLock()
	defer s.mu.RUnlock()
	return s.running
}

// Run starts the service and waits for an interrupt signal or server error.
func (s *Service) Run() error {
	if err := s.Start(); err != nil {
		return err
	}

	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, os.Interrupt, syscall.SIGTERM)
	defer signal.Stop(sigCh)

	select {
	case err := <-s.serveErrCh:
		if err != nil {
			return err
		}
	case sig := <-sigCh:
		logger.Infof("Received signal %s, shutting down", sig)
	}

	return s.Stop()
}

// Addr returns the address used by the HTTP server.
func (s *Service) Addr() string {
	return fmt.Sprintf("%s:%d", s.cfg.Host, s.cfg.Port)
}

func newRouter(cfg *config.Config, cm *crypto.CryptoManager) *gin.Engine {
	if cfg != nil && cfg.Debug {
		gin.SetMode(gin.DebugMode)
	} else {
		gin.SetMode(gin.ReleaseMode)
	}

	router := gin.New()
	router.Use(middleware.LoggingMiddleware())
	router.Use(middleware.CORSMiddleware())
	if cfg != nil && cm != nil {
		router.Use(middleware.AuthEncryptMiddleware(cm, cfg))
	}

	if cfg != nil {
		handlers.InitTaskManager(cfg.MaxTaskLogSize)
	}

	registerRoutes(router)
	return router
}

func registerRoutes(router *gin.Engine) {
	api := router.Group("/api")

	api.GET("/baseinfo", handlers.GetBaseInfo)
	api.GET("/status", handlers.GetStatus)
	api.POST("/exec", handlers.ExecuteCommand)
	api.POST("/file/list", handlers.ListFiles)
	api.POST("/file/authority", handlers.QueryFileAuthority)
	api.PUT("/file/authority", handlers.SetFileAuthority)
	api.POST("/file/cat", handlers.ReadFileContent)
	api.POST("/file", handlers.UploadFile)
	api.POST("/fileraw", handlers.UploadFileRaw)
	api.DELETE("/file", handlers.DeleteFiles)
	api.PUT("/file", handlers.MoveFiles)
	api.POST("/file/cp", handlers.CopyFiles)
	api.POST("/file/new", handlers.MkdirRecursive)
	api.POST("/file/download", handlers.DownloadFile)

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
	api.GET("/ws/:path", handlers.WebSocketHandler)

	router.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{"status": "ok"})
	})

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
