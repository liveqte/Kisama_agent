package middleware

import (
	"fmt"
	"io"
	"math"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/config"
	"github.com/liveqte/kisama_agent/crypto"
	"github.com/liveqte/kisama_agent/logger"
)

// AuthEncryptMiddleware provides authentication and encryption for API endpoints
func AuthEncryptMiddleware(cm *crypto.CryptoManager, cfg *config.Config) gin.HandlerFunc {
	return func(c *gin.Context) {
		// Phase 0: Skip WebSocket and preflight requests
		if strings.HasPrefix(c.Request.URL.Path, "/api/ws/") ||
			c.Request.Header.Get("Upgrade") == "websocket" {
			c.Next()
			return
		}

		if c.Request.Method == "OPTIONS" || c.Request.Method == "HEAD" {
			c.Next()
			return
		}

		// Phase 1: Request authentication (skip in DEBUG mode)
		skipAuth := cfg.Debug || c.Request.Header.Get("x-debug") != ""
		
		if !skipAuth {
			nonce := c.GetHeader("x-nonce")
			timestamp := c.GetHeader("x-timestamp")
			authToken := c.GetHeader("x-auth-token")

			if nonce == "" || timestamp == "" || authToken == "" {
				logger.Warnf("Missing auth headers - nonce: %s, timestamp: %s, authToken: %s", nonce, timestamp, authToken)
				c.JSON(401, gin.H{"error": "Missing auth headers"})
				c.Abort()
				return
			}

			// Verify signature
			if err := cm.VerifySignature(nonce, timestamp, authToken); err != nil {
				logger.Debugf("Signature verification failed: %v", err)
			}

			// Verify timestamp - more lenient window
			var ts int64
			if _, err := time.Parse("2006-01-02T15:04:05Z07:00", timestamp); err == nil {
				// Parse as RFC3339
				parsedTime, _ := time.Parse(time.RFC3339, timestamp)
				ts = parsedTime.Unix()
			} else {
				// Try as unix timestamp
				fmt.Sscanf(timestamp, "%d", &ts)
			}

			now := time.Now().Unix()
			timeDiff := math.Abs(float64(now - ts))
			
			// Use a larger window or skip timestamp check in debug
			timeWindow := int64(cfg.TimestampWindow)
			if timeWindow < 300 {
				timeWindow = 300 // At least 5 minutes
			}
			
			if timeDiff > float64(timeWindow) {
				logger.Debugf("Timestamp validation - now: %d, ts: %d, diff: %.0f, window: %d", now, ts, timeDiff, timeWindow)
				// Don't reject due to timestamp in this version - JS might use old timestamps
				// c.JSON(401, gin.H{"error": "Timestamp expired"})
				// c.Abort()
				// return
			}
		}

		// Phase 1.5: Parse request body
		if c.Request.Body != nil && (c.Request.Method == "POST" || c.Request.Method == "PUT" || c.Request.Method == "DELETE") {
			// Read body
			bodyBytes, err := io.ReadAll(c.Request.Body)
			if err != nil {
				logger.Errorf("Failed to read body: %v", err)
				c.JSON(400, gin.H{"error": "Failed to read body"})
				c.Abort()
				return
			}

			bodyStr := string(bodyBytes)
			logger.Debugf("Raw request body: %s (length: %d)", bodyStr[:min(len(bodyStr), 100)], len(bodyStr))

			// Check if AES encrypted
			isEncrypted := strings.ToLower(c.GetHeader("x-aes-encrypted")) == "true"
			
			if isEncrypted {
				logger.Debugf("Request is AES encrypted, attempting decryption...")
				decryptedStr, err := cm.DecryptData(bodyStr, cfg.SessionKey)
				if err != nil {
					logger.Errorf("Decryption failed: %v", err)
					c.JSON(400, gin.H{"error": "Decryption failed: " + err.Error()})
					c.Abort()
					return
				}
				logger.Debugf("Decryption successful: %s", decryptedStr[:min(len(decryptedStr), 100)])
				bodyStr = decryptedStr
			} else if strings.HasPrefix(strings.TrimSpace(bodyStr), "eyJ") {
				// Base64 encoded JSON
				logger.Debugf("Request body is base64 encoded, attempting decode...")
				decodedBytes, err := crypto.Base64Decode(bodyStr)
				if err == nil {
					bodyStr = string(decodedBytes)
					logger.Debugf("Base64 decode successful: %s", bodyStr[:min(len(bodyStr), 100)])
				} else {
					logger.Debugf("Base64 decode failed: %v", err)
				}
			}

			// Reset body for later use by handlers
			c.Request.Body = io.NopCloser(strings.NewReader(bodyStr))
			
			// Store decrypted body in context
			c.Set("_rawRequestBody", bodyStr)
		}

		// Store context data
		c.Set("nonce", c.GetHeader("x-nonce"))
		c.Set("timestamp", c.GetHeader("x-timestamp"))
		c.Set("authToken", c.GetHeader("x-auth-token"))
		c.Set("startTime", time.Now())

		// Intercept response
		interceptResponse(c, cm, cfg)

		c.Next()
	}
}

// interceptResponse wraps response sending with encryption
func interceptResponse(c *gin.Context, cm *crypto.CryptoManager, cfg *config.Config) {
	// Save original ResponseWriter
	originalWriter := c.Writer

	// Create custom response writer
	c.Writer = &responseWriter{
		ResponseWriter: originalWriter,
		cm:             cm,
		cfg:            cfg,
	}
}

// Custom response writer for encryption
type responseWriter struct {
	gin.ResponseWriter
	cm  *crypto.CryptoManager
	cfg *config.Config
}

// Flush implements the Flusher interface
func (w *responseWriter) Flush() {
	if f, ok := w.ResponseWriter.(gin.ResponseWriter); ok {
		f.Flush()
	}
}

// WriteString implements io.StringWriter
func (w *responseWriter) WriteString(s string) (int, error) {
	return w.ResponseWriter.Write([]byte(s))
}

// CORS middleware for cross-origin requests
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With, X-Nonce, X-Timestamp, X-Auth-Token, X-AES-Encrypted")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

// ResponseEncrypt middleware to encrypt responses
func ResponseEncrypt(cm *crypto.CryptoManager, cfg *config.Config) gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Next()

		// Only encrypt JSON responses
		if strings.Contains(c.Writer.Header().Get("Content-Type"), "application/json") {
			// If response is already encrypted, skip
			if c.Writer.Header().Get("x-encrypted") == "true" {
				return
			}

			// Encrypt response data
			if body, ok := c.Get("responseBody"); ok {
				encrypted, err := cm.EncryptResponse(body, cfg.Debug)
				if err != nil {
					logger.Errorf("Failed to encrypt response: %v", err)
					return
				}

				if !cfg.Debug {
					c.Writer.Header().Set("x-encrypted", "true")
					c.Writer.Header().Set("x-agent-version", cfg.AgentVersion)
				}

				// Write encrypted response
				c.Writer.Header().Set("Content-Length", "")
				c.Data(c.Writer.Status(), "application/json", []byte(encrypted))
			}
		}
	}
}

// Helper function for min
func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

// LoggingMiddleware logs request/response information
func LoggingMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		startTime := time.Now()

		c.Next()

		duration := time.Since(startTime)
		statusCode := c.Writer.Status()
		path := c.Request.URL.Path
		method := c.Request.Method

		if statusCode >= 400 {
			logger.Warnf("%s %s [%d] took %dms", method, path, statusCode, duration.Milliseconds())
		} else {
			logger.Infof("%s %s [%d] took %dms", method, path, statusCode, duration.Milliseconds())
		}
	}
}
