package handlers

import (
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/config"
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

	// 2. 目录穿越安全校验
	cfg := config.Get()
	rootDir := filepath.Clean(cfg.FileRoot)
	fullPath := filepath.Join(rootDir, req.Path)

	relPath, err := filepath.Rel(rootDir, fullPath)
	if err != nil || strings.HasPrefix(relPath, "..") {
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
	c.Header("x-original-path", filepath.ToSlash(relPath))

	// 使用 c.Data 灌入纯二进制流
	// 它会自动帮我们把 Content-Type 设置为 'application/octet-stream' 并将裸数据写入 Body
	c.Data(http.StatusOK, "application/octet-stream", content)
}