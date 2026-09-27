package handlers

import (
	"fmt"
	"net/http"
	"os"
	"path/filepath"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/go/config"
)

// DownloadFile 处理安全文件下载，直接透传纯二进制流与自定义 Headers
func DownloadFile(c *gin.Context) {
	// 1. 绑定请求体参数
	var req struct {
		Path string `json:"path"`
	}
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": "error", "message": "Invalid request"})
		return
	}

	// 2. 目录穿越安全校验 (A-1 权威守卫)
	cfg := config.Get()
	fullPath := filepath.Join(cfg.FileRoot, req.Path)

	if !isPathInsideFileRoot(cfg.FileRoot, fullPath) {
		c.JSON(http.StatusForbidden, gin.H{"status": "error", "message": "Access denied: path outside root"})
		return
	}

	// 3. 检查文件状态与存在性
	fi, err := os.Stat(fullPath)
	if err != nil {
		if os.IsNotExist(err) {
			c.JSON(http.StatusNotFound, gin.H{"status": "error", "message": "File not found"})
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": fmt.Sprintf("Failed to stat file: %v", err)})
		return
	}

	// 确保不是目录
	if fi.IsDir() {
		c.JSON(http.StatusBadRequest, gin.H{"status": "error", "message": "Path is a directory, not a file"})
		return
	}

	// 4. 直接读取原始二进制字节（因为最终回传裸流，这里免去 Base64 编解码过程，性能最佳）
	content, err := os.ReadFile(fullPath)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": fmt.Sprintf("Failed to read file: %v", err)})
		return
	}

	// 🚀 5. 100% 对齐 Node.js 的返回包设置
	// 设置自定义文件大小及路径 Header
	c.Header("x-file-size", fmt.Sprintf("%d", fi.Size()))
	if rootAbs, err := filepath.Abs(cfg.FileRoot); err == nil {
		if relPath, err := filepath.Rel(rootAbs, fullPath); err == nil {
			c.Header("x-original-path", filepath.ToSlash(relPath))
		}
	}

	// 使用 c.Data 灌入纯二进制流
	// 它会自动帮我们把 Content-Type 设置为 'application/octet-stream' 并将裸数据写入 Body
	c.Data(http.StatusOK, "application/octet-stream", content)
}
