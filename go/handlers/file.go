package handlers

import (
	"bytes"
	"encoding/base64"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"
	"strconv"
	"net/url"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/config"
	"github.com/liveqte/kisama_agent/models"
)

// ListFiles lists files in a directory
func ListFiles(c *gin.Context) {
	cfg := config.Get()

	var req models.FileListRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	// Validate path
	absPath := filepath.Join(cfg.FileRoot, req.Path)
	if !strings.HasPrefix(absPath, cfg.FileRoot) {
		c.JSON(http.StatusForbidden, gin.H{"error": "Access denied"})
		return
	}

	// Check if path exists
	info, err := os.Stat(absPath)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Path not found"})
		return
	}

	if !info.IsDir() {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Path is not a directory"})
		return
	}

	files, err := ioutil.ReadDir(absPath)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read directory"})
		return
	}

	var fileInfos []models.FileInfo
	for _, file := range files {
		fileType := "file"
		if file.IsDir() {
			fileType = "dir"
		}

		relPath := filepath.Join(req.Path, file.Name())
		fileInfo := models.FileInfo{
			Name:  file.Name(),
			Path:  relPath,
			Type:  fileType,
			Size:  file.Size(),
			Mtime: file.ModTime().Format(time.RFC3339),
			Mode:  file.Mode().String(),
			ModeOctal: fmt.Sprintf("0o%o", file.Mode().Perm()),
		}

		// Try to get owner info
		if stat, ok := file.Sys().(*os.FileInfo); ok {
			_ = stat // Use to avoid unused variable
		}

		fileInfos = append(fileInfos, fileInfo)
	}

	response := models.FileListResponse{
		BaseResponse: models.BaseResponse{Status: "ok"},
		Count:        len(fileInfos),
		Files:        fileInfos,
	}

	c.JSON(http.StatusOK, response)
}

// QueryFileAuthority queries file permissions
func QueryFileAuthority(c *gin.Context) {
	cfg := config.Get()

	var req models.FileAuthorityRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	var authorities []models.AuthorityInfo
	for _, path := range req.Paths {
		absPath := filepath.Join(cfg.FileRoot, path)
		if !strings.HasPrefix(absPath, cfg.FileRoot) {
			continue
		}

		info, err := os.Stat(absPath)
		if err != nil {
			continue
		}

		fileType := "file"
		if info.IsDir() {
			fileType = "dir"
		}

		mode := info.Mode()
		readable := mode&0400 != 0
		writable := mode&0200 != 0
		executable := mode&0100 != 0

		authority := models.AuthorityInfo{
			Path:       path,
			Mode:       mode.String(),
			ModeOctal:  fmt.Sprintf("0o%o", mode.Perm()),
			Type:       fileType,
			Readable:   readable,
			Writable:   writable,
			Executable: executable,
		}

		authorities = append(authorities, authority)
	}

	response := models.FileAuthorityResponse{
		BaseResponse: models.BaseResponse{Status: "ok"},
		Files:        authorities,
	}

	c.JSON(http.StatusOK, response)
}

// SetFileAuthority sets file permissions
func SetFileAuthority(c *gin.Context) {
	cfg := config.Get()

	var req models.FileAuthoritySetRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	var results []models.FileAuthoritySetResult
	successCount := 0

	for path, mode := range req.Permissions {
		absPath := filepath.Join(cfg.FileRoot, path)
		if !strings.HasPrefix(absPath, cfg.FileRoot) {
			results = append(results, models.FileAuthoritySetResult{
				Path:   path,
				Status: "denied",
			})
			continue
		}

		// Parse octal mode
		var perm os.FileMode
		fmt.Sscanf(mode, "%o", &perm)

		if err := os.Chmod(absPath, perm); err != nil {
			results = append(results, models.FileAuthoritySetResult{
				Path:   path,
				Status: "failed",
			})
		} else {
			successCount++
			results = append(results, models.FileAuthoritySetResult{
				Path:    path,
				Applied: fmt.Sprintf("0o%o", perm),
				Status:  "ok",
			})
		}
	}

	response := models.FileAuthoritySetResponse{
		BaseResponse: models.BaseResponse{Status: "ok"},
		Total:        len(req.Permissions),
		Success:      successCount,
		Results:      results,
	}

	c.JSON(http.StatusOK, response)
}

// ReadFileContent reads file content
func ReadFileContent(c *gin.Context) {
	cfg := config.Get()

	var req models.FileCatRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	absPath := filepath.Join(cfg.FileRoot, req.Path)
	if !strings.HasPrefix(absPath, cfg.FileRoot) {
		c.JSON(http.StatusForbidden, gin.H{"error": "Access denied"})
		return
	}

	// Check file size (max 1MB)
	info, err := os.Stat(absPath)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "File not found"})
		return
	}

	if info.Size() > 1024*1024 {
		c.JSON(http.StatusRequestEntityTooLarge, gin.H{"error": "File too large (max 1MB)"})
		return
	}

	content, err := ioutil.ReadFile(absPath)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read file"})
		return
	}

	// Detect if binary
	isBinary := !isTextFile(content)
	encoding := "utf-8"
	contentStr := string(content)

	if isBinary {
		contentStr = base64.StdEncoding.EncodeToString(content)
	}

	response := models.FileCatResponse{
		BaseResponse: models.BaseResponse{Status: "ok"},
		Path:         req.Path,
		Content:      contentStr,
		Encoding:     encoding,
		IsBinary:     isBinary,
		Size:         info.Size(),
	}

	c.JSON(http.StatusOK, response)
}

// UploadFile uploads a file
// UploadFile handles both single file uploads and chunked streaming uploads
func UploadFile(c *gin.Context) {
	cfg := config.Get()

	var req models.FileUploadRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	// Validate path security and boundaries
	absDir := filepath.Join(cfg.FileRoot, req.Path)
	if !strings.HasPrefix(absDir, cfg.FileRoot) {
		c.JSON(http.StatusForbidden, gin.H{"error": "Access denied"})
		return
	}

	if err := os.MkdirAll(absDir, 0755); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create directory"})
		return
	}

	// Decode base64 content segment
	content, err := base64.StdEncoding.DecodeString(req.Content)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid base64 content"})
		return
	}

	// Check size limit (For single file or a single chunk)
	if int64(len(content)) > cfg.MaxUploadSize {
		c.JSON(http.StatusRequestEntityTooLarge, gin.H{"error": "File too large"})
		return
	}

	absPath := filepath.Join(absDir, req.Filename)
	if !strings.HasPrefix(absPath, cfg.FileRoot) {
		c.JSON(http.StatusForbidden, gin.H{"error": "Access denied"})
		return
	}

	// 💡 ✨【核心修复点】：自适应分块暂存与强顺序流重组引擎
	// 提示：若您的 models.FileUploadRequest 结构体中将 TotalChunks 定义为了指针类型 (*int)，
	// 请将此处的判断变更为: if req.TotalChunks != nil
	// 💡 ✨ 自适应分块暂存与强顺序流重组引擎（已刚性对齐结构体大写 ChunkID）
	if req.TotalChunks > 0 {
		chunkIndex := req.ChunkID // 👈 🚨【精准修复点】：由 ChunkId 变更为 ChunkID
		totalCount := req.TotalChunks

		// 1. 创建隐藏的当前文件专属分块暂存目录：.upload_chunks/[filename]
		chunkDir := filepath.Join(filepath.Dir(absPath), ".upload_chunks", filepath.Base(absPath))
		if err := os.MkdirAll(chunkDir, 0755); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create chunk directory"})
			return
		}

		// 2. 将当前接收到的分片直接落盘暂存
		chunkFile := filepath.Join(chunkDir, fmt.Sprintf("chunk_%d", chunkIndex))
		if err := ioutil.WriteFile(chunkFile, content, 0644); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to write chunk file"})
			return
		}

		// 3. 读取暂存目录，计算目前已到位的分片数量
		files, err := ioutil.ReadDir(chunkDir)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read chunk directory"})
			return
		}

		received := 0
		for _, f := range files {
			if !f.IsDir() && strings.HasPrefix(f.Name(), "chunk_") {
				received++
			}
		}

		// 4. 当已到齐的分片总数与预期总片数完全相等时，启动绝对强顺序流合并
		if received == totalCount {
			out, err := os.OpenFile(absPath, os.O_CREATE|os.O_WRONLY|os.O_TRUNC, 0644)
			if err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to open target file for merging"})
				return
			}

			for i := 0; i < totalCount; i++ {
				partPath := filepath.Join(chunkDir, fmt.Sprintf("chunk_%d", i))
				partContent, err := ioutil.ReadFile(partPath)
				if err != nil {
					out.Close()
					c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("Missing chunk %d", i)})
					return
				}
				if _, err := out.Write(partContent); err != nil {
					out.Close()
					c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to write merged content"})
					return
				}
			}
			out.Close()

			// 5. 释放暂存区垃圾
			os.RemoveAll(chunkDir)
			os.Remove(filepath.Dir(chunkDir))
		}

		c.JSON(http.StatusOK, gin.H{
			"status":   "ok",
			"path":     filepath.Join(req.Path, req.Filename),
			"received": received,
			"total":    totalCount,
			"chunked":  true,
		})
		return
	}

	// 🟢 降级兜底：非分块的传统小文件单包单次直传
	if err := ioutil.WriteFile(absPath, content, 0644); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to write file"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "ok",
		"path":   filepath.Join(req.Path, req.Filename),
	})
}

// DeleteFiles deletes files/directories
func DeleteFiles(c *gin.Context) {
	cfg := config.Get()

	var req models.FileDeleteRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	var results []models.FileDeleteResult
	for _, path := range req.Paths {
		absPath := filepath.Join(cfg.FileRoot, path)
		if !strings.HasPrefix(absPath, cfg.FileRoot) {
			results = append(results, models.FileDeleteResult{
				Path:   path,
				Status: "denied",
			})
			continue
		}

		if err := os.RemoveAll(absPath); err != nil {
			results = append(results, models.FileDeleteResult{
				Path:   path,
				Status: "failed",
			})
		} else {
			results = append(results, models.FileDeleteResult{
				Path:   path,
				Status: "deleted",
			})
		}
	}

	response := models.FileDeleteResponse{
		BaseResponse: models.BaseResponse{Status: "ok"},
		Results:      results,
	}

	c.JSON(http.StatusOK, response)
}

// MoveFiles moves/renames files
func MoveFiles(c *gin.Context) {
	cfg := config.Get()

	var req models.FileMoveRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	var results []models.FileMoveResult
	successCount := 0

	for from, to := range req {
		absFrom := filepath.Join(cfg.FileRoot, from)
		absTo := filepath.Join(cfg.FileRoot, to)

		if !strings.HasPrefix(absFrom, cfg.FileRoot) || !strings.HasPrefix(absTo, cfg.FileRoot) {
			results = append(results, models.FileMoveResult{
				From:   from,
				To:     to,
				Status: "denied",
			})
			continue
		}

		if err := os.Rename(absFrom, absTo); err != nil {
			results = append(results, models.FileMoveResult{
				From:   from,
				To:     to,
				Status: "failed",
			})
		} else {
			successCount++
			results = append(results, models.FileMoveResult{
				From:   from,
				To:     to,
				Status: "ok",
			})
		}
	}

	response := models.FileMoveResponse{
		BaseResponse: models.BaseResponse{Status: "ok"},
		Total:        len(req),
		Success:      successCount,
		Results:      results,
	}

	c.JSON(http.StatusOK, response)
}

// CopyFiles copies files/directories
func CopyFiles(c *gin.Context) {
	cfg := config.Get()

	var req models.FileMoveRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	var results []models.FileMoveResult
	successCount := 0

	for from, to := range req {
		absFrom := filepath.Join(cfg.FileRoot, from)
		absTo := filepath.Join(cfg.FileRoot, to)

		if !strings.HasPrefix(absFrom, cfg.FileRoot) || !strings.HasPrefix(absTo, cfg.FileRoot) {
			results = append(results, models.FileMoveResult{
				From:   from,
				To:     to,
				Status: "denied",
			})
			continue
		}

		if err := copyFile(absFrom, absTo); err != nil {
			results = append(results, models.FileMoveResult{
				From:   from,
				To:     to,
				Status: "failed",
			})
		} else {
			successCount++
			results = append(results, models.FileMoveResult{
				From:   from,
				To:     to,
				Status: "ok",
			})
		}
	}

	response := models.FileCopyResponse{
		BaseResponse: models.BaseResponse{Status: "ok"},
		Total:        len(req),
		Success:      successCount,
		Results:      results,
	}

	c.JSON(http.StatusOK, response)
}

// MkdirRecursive creates directories recursively
func MkdirRecursive(c *gin.Context) {
	cfg := config.Get()

	var req models.FileMkdirRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	absPath := filepath.Join(cfg.FileRoot, req.Path)
	if !strings.HasPrefix(absPath, cfg.FileRoot) {
		c.JSON(http.StatusForbidden, gin.H{"error": "Access denied"})
		return
	}

	if err := os.MkdirAll(absPath, 0755); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create directory"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "ok",
		"path":   req.Path,
	})
}

// Helper functions

// isTextFile checks if content is text
func isTextFile(content []byte) bool {
	// Simple heuristic: check for null bytes
	return !bytes.Contains(content, []byte{0})
}

// copyFile copies a file
func copyFile(src, dst string) error {
	content, err := ioutil.ReadFile(src)
	if err != nil {
		return err
	}
	return ioutil.WriteFile(dst, content, 0644)
}

// ============================================================================
// 🚀 新增：裸二进制流文件上传接口 (元数据走 Header，Body 为 100% 纯净裸流)
// ============================================================================
func UploadFileRaw(c *gin.Context) {
	cfg := config.Get()

	// 1. 从 HTTP Header 提取元数据并执行 URL 安全解码 (防其中包含中文)
	encodedPath := c.GetHeader("X-File-Path")
	encodedName := c.GetHeader("X-File-Name")
	chunkIDStr := c.GetHeader("X-Chunk-Id")
	totalChunksStr := c.GetHeader("X-Total-Chunks")

	filePath, err := url.QueryUnescape(encodedPath)
	if err != nil || filePath == "" {
		c.JSON(http.StatusBadRequest, gin.H{"status": "error", "completed": false, "message": "Invalid X-File-Path header"})
		return
	}
	fileName, err := url.QueryUnescape(encodedName)
	if err != nil || fileName == "" {
		c.JSON(http.StatusBadRequest, gin.H{"status": "error", "completed": false, "message": "Invalid X-File-Name header"})
		return
	}

	chunkID, _ := strconv.Atoi(chunkIDStr)
	totalChunks, _ := strconv.Atoi(totalChunksStr)

	// 2. 严格的安全边界与路径遍历校验
	absDir := filepath.Join(cfg.FileRoot, filePath)
	if !strings.HasPrefix(absDir, cfg.FileRoot) {
		c.JSON(http.StatusForbidden, gin.H{"status": "error", "completed": false, "message": "Access denied"})
		return
	}

	if err := os.MkdirAll(absDir, 0755); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "completed": false, "message": "Failed to create directory"})
		return
	}

	absPath := filepath.Join(absDir, fileName)
	if !strings.HasPrefix(absPath, cfg.FileRoot) {
		c.JSON(http.StatusForbidden, gin.H{"status": "error", "completed": false, "message": "Access denied"})
		return
	}

	// 3. 直接在 Request Body 中读取 100% 原始二进制裸字节，免除 Base64 编解码开销
	content, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": "error", "completed": false, "message": "Failed to read binary stream"})
		return
	}

	if int64(len(content)) > cfg.MaxUploadSize {
		c.JSON(http.StatusRequestEntityTooLarge, gin.H{"status": "error", "completed": false, "message": "File too large"})
		return
	}

	relPath := filepath.Join(filePath, fileName)

	// 4. 自适应分块暂存与强顺序合并引擎
	if totalChunks > 0 {
		// 创建当前文件专属的隐藏暂存分片目录
		chunkDir := filepath.Join(filepath.Dir(absPath), ".upload_chunks", filepath.Base(absPath))
		if err := os.MkdirAll(chunkDir, 0755); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "completed": false, "message": "Failed to create chunk directory"})
			return
		}

		// 分片落盘暂存
		chunkFile := filepath.Join(chunkDir, fmt.Sprintf("chunk_%d", chunkID))
		if err := ioutil.WriteFile(chunkFile, content, 0644); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "completed": false, "message": "Failed to write chunk"})
			return
		}

		// 统计当前已到位的分片数
		files, err := ioutil.ReadDir(chunkDir)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "completed": false, "message": "Failed to read chunk directory"})
			return
		}

		received := 0
		for _, f := range files {
			if !f.IsDir() && strings.HasPrefix(f.Name(), "chunk_") {
				received++
			}
		}

		// 触发最终强顺序合并
		if received == totalChunks {
			out, err := os.OpenFile(absPath, os.O_CREATE|os.O_WRONLY|os.O_TRUNC, 0644)
			if err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "completed": false, "message": "Failed to open target file"})
				return
			}
			defer out.Close()

			for i := 0; i < totalChunks; i++ {
				partPath := filepath.Join(chunkDir, fmt.Sprintf("chunk_%d", i))
				partContent, err := ioutil.ReadFile(partPath)
				if err != nil {
					c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "completed": false, "message": fmt.Sprintf("Missing chunk %d", i)})
					return
				}
				if _, err := out.Write(partContent); err != nil {
					c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "completed": false, "message": "Failed to merge chunk"})
					return
				}
			}
			os.RemoveAll(chunkDir) // 清理垃圾暂存区
			os.Remove(filepath.Dir(chunkDir))

			c.JSON(http.StatusOK, gin.H{
				"status":    "ok",
				"path":      relPath,
				"chunk_id":  chunkID,
				"completed": true,
				"message":   "All chunks received. File merged successfully.",
			})
			return
		}

		// 尚未集齐，返回挂起等待状态
		c.JSON(http.StatusOK, gin.H{
			"status":    "ok",
			"path":      relPath,
			"chunk_id":  chunkID,
			"completed": false,
			"message":   fmt.Sprintf("Chunk %d uploaded. Waiting for remaining blocks.", chunkID),
		})
		return
	}

	// 5. 降级兜底：非分块小文件单包直接落盘
	if err := ioutil.WriteFile(absPath, content, 0644); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "completed": false, "message": "Failed to write file"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status":    "ok",
		"path":      relPath,
		"chunk_id":  0,
		"completed": true,
		"message":   "File uploaded successfully.",
	})
}