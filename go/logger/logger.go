package logger

import (
	"fmt"
	"log"
	"os"
	"sync"
)

// LogLevel represents the logging level
type LogLevel int

const (
	DEBUG LogLevel = iota
	INFO
	WARN
	ERROR
)

var levelNames = map[LogLevel]string{
	DEBUG: "DEBUG",
	INFO:  "INFO",
	WARN:  "WARN",
	ERROR: "ERROR",
}

var levelColors = map[LogLevel]string{
	DEBUG: "\x1b[90m", // Gray
	INFO:  "\x1b[36m", // Cyan
	WARN:  "\x1b[33m", // Yellow
	ERROR: "\x1b[31m", // Red
}

// Logger structure
type Logger struct {
	mu           sync.RWMutex
	currentLevel LogLevel
}

var defaultLogger = &Logger{
	currentLevel: WARN,
}

// SetLevel sets the current log level
func SetLevel(level LogLevel) {
	defaultLogger.mu.Lock()
	defer defaultLogger.mu.Unlock()
	defaultLogger.currentLevel = level
}

// GetLevel returns the current log level
func GetLevel() LogLevel {
	defaultLogger.mu.RLock()
	defer defaultLogger.mu.RUnlock()
	return defaultLogger.currentLevel
}

func (l *Logger) log(level LogLevel, msg string) {
	if level < GetLevel() {
		return
	}

	color := levelColors[level]
	reset := "\x1b[0m"
	levelName := levelNames[level]

	output := fmt.Sprintf("%s[%s]%s %s\n", color, levelName, reset, msg)
	log.Print(output)
}

// Debug logs a debug message
func Debug(msg string) {
	defaultLogger.log(DEBUG, msg)
}

// Info logs an info message
func Info(msg string) {
	defaultLogger.log(INFO, msg)
}

// Warn logs a warning message
func Warn(msg string) {
	defaultLogger.log(WARN, msg)
}

// Error logs an error message
func Error(msg string) {
	defaultLogger.log(ERROR, msg)
}

// Debugf logs a formatted debug message
func Debugf(format string, args ...interface{}) {
	Debug(fmt.Sprintf(format, args...))
}

// Infof logs a formatted info message
func Infof(format string, args ...interface{}) {
	Info(fmt.Sprintf(format, args...))
}

// Warnf logs a formatted warning message
func Warnf(format string, args ...interface{}) {
	Warn(fmt.Sprintf(format, args...))
}

// Errorf logs a formatted error message
func Errorf(format string, args ...interface{}) {
	Error(fmt.Sprintf(format, args...))
}

// Initialize logger from environment
func Init() {
	levelStr := os.Getenv("LOG_LEVEL")
	if levelStr == "" {
		if os.Getenv("DEBUG") == "true" {
			SetLevel(DEBUG)
		} else {
			SetLevel(WARN)
		}
	} else {
		var level LogLevel
		switch levelStr {
		case "0", "debug", "DEBUG":
			level = DEBUG
		case "1", "info", "INFO":
			level = INFO
		case "2", "warn", "WARN":
			level = WARN
		case "3", "error", "ERROR":
			level = ERROR
		default:
			level = WARN
		}
		SetLevel(level)
	}
}
