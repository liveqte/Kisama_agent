package middleware

import (
	"bytes"
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

// responseBufferWriter 负责拦截并缓存下游路由输出的全部明文数据，防止其提前泄露给网络流
type responseBufferWriter struct {
	gin.ResponseWriter
	bodyBuffer *bytes.Buffer
}

// Write 拦截底层的二进制字节流写入
func (w *responseBufferWriter) Write(b []byte) (int, error) {
	return w.bodyBuffer.Write(b)
}

// WriteString 拦截字符串写入
func (w *responseBufferWriter) WriteString(s string) (int, error) {
	return w.bodyBuffer.WriteString(s)
}

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

		// 🌟 核心修复 1：零信任原则，一进来默认将状态锁定为未认证（false）
		c.Set("is_authenticated", false)
		path := c.Request.URL.Path
		isBypassPath := path == "/api/baseinfo" || path == "/api/status"

		// 🌟 核心修复 2：优先判断 Config.DEBUG 状态，且剔除客户端伪造 x-debug 的隐患
		if cfg.Debug {
			// 如果为 true 则全量让其认证通过，赋予最高信任身份并跳过后续验证
			c.Set("is_authenticated", true)
		} else {
			// 生产模式：执行极度严苛的验证逻辑
			nonce := c.GetHeader("x-nonce")
			timestamp := c.GetHeader("x-timestamp")
			authToken := c.GetHeader("x-auth-token")

			if nonce == "" || timestamp == "" || authToken == "" {
				// 如果缺失认证头，且不是匿名白名单路由，直接打回拦截
				if !isBypassPath {
					c.JSON(401, gin.H{"error": "Missing auth headers"})
					c.Abort()
					return
				}
			} else {
				// 认证头完整，执行真正的密码学签名校验（需配合修复后的 crypto.go）
				if err := cm.VerifySignature(nonce, timestamp, authToken); err != nil {
					logger.Debugf("Signature verification failed: %v", err)
					// 如果验签失败且不是匿名白名单路由，直接打回拦截
					if !isBypassPath {
						c.JSON(401, gin.H{"error": "Signature verification failed"})
						c.Abort()
						return
					}
				} else {
					// 验签彻底成功，继续执行时间戳审计
					var ts int64
					if _, err := time.Parse("2006-01-02T15:04:05Z07:00", timestamp); err == nil {
						parsedTime, _ := time.Parse(time.RFC3339, timestamp)
						ts = parsedTime.Unix()
					} else {
						fmt.Sscanf(timestamp, "%d", &ts)
					}

					now := time.Now().Unix()
					timeDiff := math.Abs(float64(now - ts))
					
					timeWindow := int64(cfg.TimestampWindow)
					if timeWindow < 300 {
						timeWindow = 300 // 至少 5 分钟
					}
					
					if timeDiff > float64(timeWindow) {
						logger.Debugf("Timestamp validation - now: %d, ts: %d, diff: %.0f, window: %d", now, ts, timeDiff, timeWindow)
					}

					// ✨ 唯一步骤：只有成功熬过所有安全劫难的合法请求，才配拥有 true 身份
					c.Set("is_authenticated", true)
				}
			}
		}

		// Phase 1.5: Parse request body (完全保留并堵住大文件 OOM 隐患)
		if c.Request.Body != nil && c.Request.URL.Path != "/api/fileraw" && 
			(c.Request.Method == "POST" || c.Request.Method == "PUT" || c.Request.Method == "DELETE") {
			
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
			isAuth, _ := c.Get("is_authenticated")
			
			// 🌟 只有在真正通过认证（为 true）的请求下，才执行请求体解密
			if isEncrypted && isAuth == true {
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

		// 🌟 核心修复 3：使用自定义的双向缓冲桶接管 Gin 的原版 Writer
		bufferWriter := &responseBufferWriter{
			ResponseWriter: c.Writer,
			bodyBuffer:     bytes.NewBuffer(nil),
		}
		c.Writer = bufferWriter

		// ===================================================
		// 🚀 往下游投递请求，触发控制器业务逻辑
		// ===================================================
		c.Next()

		// ============================================================================
		// 🌟 核心修复 4：业务层执行结束，在出口网关统一收网进行响应体 ECIES 加密
		// ============================================================================
		if strings.Contains(bufferWriter.Header().Get("Content-Type"), "application/json") {
			isAuth, _ := c.Get("is_authenticated")

			// 只有在【已认证】且【非 DEBUG】状态下，才将其转化为 ECIES 强加密密文
			if isAuth == true && !cfg.Debug {
				// ⚡ 终极修复：直接对 bufferWriter 里的原始响应字节执行加密
				// 1. 彻底解决 Go 语言 interface{} 机制导致的大整数转科学计数法变形问题
				// 2. 配合升级后的 v2 密码学库，传输格式、Nonce、公钥状态与客户端 eciesjs 100% 绝对对齐
				encrypted, err := cm.EncryptResponseBytes(bufferWriter.bodyBuffer.Bytes(), cfg.Debug)
				if err == nil {
					// 写入标准高强度加密响应头
					bufferWriter.ResponseWriter.Header().Set("x-encrypted", "true")
					bufferWriter.ResponseWriter.Header().Set("x-agent-version", cfg.AgentVersion)
					bufferWriter.ResponseWriter.Header().Set("Content-Length", fmt.Sprintf("%d", len(encrypted)))
					
					// 将密文数据合法刷入外部真实网络 Socket 流中
					bufferWriter.ResponseWriter.Write([]byte(encrypted))
					return
				}
				logger.Errorf("Failed to encrypt response via ECIES: %v", err)
			}
		}

		// 匿名免密白名单放行情况、DEBUG 模式开启或加密失败时：透传明文 JSON
		if bufferWriter.Header().Get("x-encrypted") == "" {
			bufferWriter.ResponseWriter.Header().Set("x-encrypted", "false")
		}
		bufferWriter.ResponseWriter.Write(bufferWriter.bodyBuffer.Bytes())
	}
}

// CORSMiddleware 用于跨域请求策略配置
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With, X-Nonce, X-Timestamp, X-Auth-Token, X-AES-Encrypted, X-File-Path, X-File-Name, X-Chunk-Id, X-Total-Chunks")
		c.Writer.Header().Set("Access-Control-Expose-Headers", "x-encrypted, x-agent-version, x-file-size, x-original-path")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

// LoggingMiddleware 统一记录请求与系统资源响应审计
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

// Helper function for min
func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
