package config

import (
	"crypto/rand"
	"encoding/base64"
	"encoding/hex"
	"os"
	"strconv"
	"strings"

	"github.com/liveqte/kisama_agent/logger"
	"golang.org/x/crypto/curve25519"
)

// NoiseKeyPair represents a single Noise key pair
type NoiseKeyPair struct {
	PrivateB64 string
	PublicB64  string
}

// NoiseKeys represents both controller and agent keys
type NoiseKeys struct {
	Control NoiseKeyPair
	Agent   NoiseKeyPair
}

// Config holds all configuration
type Config struct {
	// Execution
	ExecTimeout     int
	ExecShellMode   bool
	Debug           bool
	TimestampWindow int
	LogLevel        int

	// Crypto
	ECDSAPublicKeyPEM string
	ECIESPublicKeyB64 string

	// File Management
	FileRoot       string
	MaxUploadSize  int64
	FollowSymlinks bool
	FileAuditLog   bool

	// Tasks
	InitTask           bool
	TaskTimeout        int
	CronCheckInterval  int
	MaxTaskLogSize     int

	// Server
	Host         string
	Port         int
	AgentVersion string
	SessionKey   string
	NoiseKeys    NoiseKeys

	// Internal
	OneTimeTasks []string
	CronTasks    map[string]string
}

var globalConfig *Config

// Generate X25519 key pair using crypto/rand
func generateX25519KeyPair() (privateB64, publicB64 string, err error) {
	// 1. 安全生成 32 字节的随机私钥
	privateKey := make([]byte, 32)
	if _, err := rand.Read(privateKey); err != nil {
		return "", "", err
	}
	privateB64 = base64.StdEncoding.EncodeToString(privateKey)

	// 2. 🚀 核心修复：使用 curve25519 标准基点乘法，从私钥计算出合法的公钥
	publicKey := make([]byte, 32)
	curve25519.ScalarBaseMult((*[32]byte)(publicKey), (*[32]byte)(privateKey))
	publicB64 = base64.StdEncoding.EncodeToString(publicKey)

	return privateB64, publicB64, nil
}

// GenerateNoiseKeyPair generates a Noise protocol key pair
func GenerateNoiseKeyPair() (NoiseKeyPair, error) {
	priv, pub, err := generateX25519KeyPair()
	if err != nil {
		return NoiseKeyPair{}, err
	}
	return NoiseKeyPair{
		PrivateB64: priv,
		PublicB64:  pub,
	}, nil
}

// GenerateNoiseKeys generates the full noise key structure
func GenerateNoiseKeys() (NoiseKeys, error) {
	control, err := GenerateNoiseKeyPair()
	if err != nil {
		return NoiseKeys{}, err
	}

	agent, err := GenerateNoiseKeyPair()
	if err != nil {
		return NoiseKeys{}, err
	}

	return NoiseKeys{
		Control: control,
		Agent:   agent,
	}, nil
}

// GenerateSessionKey generates a random session key
func GenerateSessionKey() (string, error) {
	key := make([]byte, 32)
	if _, err := rand.Read(key); err != nil {
		return "", err
	}
	return base64.StdEncoding.EncodeToString(key), nil
}

// getConfigValue gets a config value from env or file
func getConfigValue(envKey, filePath string) string {
	if val := os.Getenv(envKey); val != "" {
		return val
	}

	// Try to read from file if it exists
	data, err := os.ReadFile(filePath)
	if err == nil {
		return strings.TrimSpace(string(data))
	}

	return ""
}

// New creates and returns a new Config instance
func New() (*Config, error) {
	// Generate Noise keys
	noiseKeys, err := GenerateNoiseKeys()
	if err != nil {
		logger.Errorf("Failed to generate Noise keys: %v", err)
		return nil, err
	}

	// Generate session key
	sessionKey, err := GenerateSessionKey()
	if err != nil {
		logger.Errorf("Failed to generate session key: %v", err)
		return nil, err
	}

	// Read environment variables
	execTimeout := 30
	if val := os.Getenv("EXEC_TIMEOUT"); val != "" {
		if n, err := strconv.Atoi(val); err == nil {
			execTimeout = n
		}
	}

	execShellMode := true
	if val := os.Getenv("EXEC_SHELL"); val != "" {
		execShellMode = strings.ToLower(val) == "true"
	}

	debug := os.Getenv("DEBUG") == "true"
	timestampWindow := 30
	if val := os.Getenv("TIMESTAMP_WINDOW"); val != "" {
		if n, err := strconv.Atoi(val); err == nil {
			timestampWindow = n
		}
	}

	logLevel := 2
	if val := os.Getenv("LOG_LEVEL"); val != "" {
		if n, err := strconv.Atoi(val); err == nil {
			logLevel = n
		}
	} else if debug {
		logLevel = 0
	}

	maxUploadSize := int64(104857600)
	if val := os.Getenv("MAX_UPLOAD_SIZE"); val != "" {
		if n, err := strconv.ParseInt(val, 10, 64); err == nil {
			maxUploadSize = n
		}
	}

	followSymlinks := os.Getenv("FOLLOW_SYMLINKS") == "true"
	fileAuditLog := os.Getenv("FILE_AUDIT_LOG") != "false"

	taskTimeout := 300
	if val := os.Getenv("TASK_TIMEOUT"); val != "" {
		if n, err := strconv.Atoi(val); err == nil {
			taskTimeout = n
		}
	}

	cronCheckInterval := 30
	if val := os.Getenv("CRON_INTERVAL"); val != "" {
		if n, err := strconv.Atoi(val); err == nil {
			cronCheckInterval = n
		}
	}

	maxTaskLogSize := 100
	if val := os.Getenv("MAX_TASK_LOG"); val != "" {
		if n, err := strconv.Atoi(val); err == nil {
			maxTaskLogSize = n
		}
	}

	host := os.Getenv("HOST")
	if host == "" {
		host = "0.0.0.0"
	}

	port := 8000
	if val := os.Getenv("PORT"); val != "" {
		if n, err := strconv.Atoi(val); err == nil {
			port = n
		}
	} else if val := os.Getenv("SERVER_PORT"); val != "" {
		if n, err := strconv.Atoi(val); err == nil {
			port = n
		}
	}

	agentVersion := os.Getenv("AGENT_VERSION")
	if agentVersion == "" {
		agentVersion = "0.1.2-go"
	}

	fileRoot := os.Getenv("FILE_ROOT")
	if fileRoot == "" {
		home, _ := os.UserHomeDir()
		fileRoot = home
	}

	cfg := &Config{
		ExecTimeout:      execTimeout,
		ExecShellMode:    execShellMode,
		Debug:            debug,
		TimestampWindow:  timestampWindow,
		LogLevel:         logLevel,
		ECDSAPublicKeyPEM: getConfigValue("ECDSA_PUBKEY", "keys/agent_ecdsa_pub.pem"),
		ECIESPublicKeyB64: getConfigValue("ECIES_PUBKEY", "keys/agent_ecies_pub.b64"),
		FileRoot:         fileRoot,
		MaxUploadSize:    maxUploadSize,
		FollowSymlinks:   followSymlinks,
		FileAuditLog:     fileAuditLog,
		InitTask:         true,
		TaskTimeout:      taskTimeout,
		CronCheckInterval: cronCheckInterval,
		MaxTaskLogSize:   maxTaskLogSize,
		Host:             host,
		Port:             port,
		AgentVersion:     agentVersion,
		SessionKey:       sessionKey,
		NoiseKeys:        noiseKeys,
		OneTimeTasks:     []string{},
		CronTasks:        make(map[string]string),
	}

	globalConfig = cfg
	return cfg, nil
}

// Get returns the global config instance
func Get() *Config {
	return globalConfig
}

// Validate validates the configuration
func (c *Config) Validate() error {
	if !c.Debug {
		var errors []string

		if c.ECDSAPublicKeyPEM == "" {
			errors = append(errors, "ECDSA_PUBKEY: environment variable not set and file keys/agent_ecdsa_pub.pem not found")
		}

		if c.ECIESPublicKeyB64 == "" {
			errors = append(errors, "ECIES_PUBKEY: environment variable not set and file keys/agent_ecies_pub.b64 not found")
		}

		if len(errors) > 0 {
			logger.Error("❌ Configuration validation failed (non-DEBUG mode requires keys):")
			for _, err := range errors {
				logger.Errorf("   • %s", err)
			}
			logger.Debug("💡 Solution:")
			logger.Debug("   1. Set environment variable: export ECDSA_PUBKEY='-----BEGIN PUBLIC KEY-----'...")
			logger.Debug("   2. Or place key files in ./keys/ directory (run generate_keys.py to generate)")
			return ErrConfigValidationFailed
		}
	}

	return nil
}

// Custom error
type ConfigError string

const ErrConfigValidationFailed ConfigError = "configuration validation failed"

func (e ConfigError) Error() string {
	return string(e)
}

// SetDebug sets debug mode
func (c *Config) SetDebug(debug bool) {
	c.Debug = debug
}

// GetRandomBytes generates random bytes and returns as hex string
func GetRandomBytes(length int) (string, error) {
	b := make([]byte, length)
	if _, err := rand.Read(b); err != nil {
		return "", err
	}
	return hex.EncodeToString(b), nil
}
