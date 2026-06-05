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
func UploadFile(c *gin.Context) {
	cfg := config.Get()

	var req models.FileUploadRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	// Create directory if not exists
	absDir := filepath.Join(cfg.FileRoot, req.Path)
	if !strings.HasPrefix(absDir, cfg.FileRoot) {
		c.JSON(http.StatusForbidden, gin.H{"error": "Access denied"})
		return
	}

	if err := os.MkdirAll(absDir, 0755); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create directory"})
		return
	}

	// Decode base64 content
	content, err := base64.StdEncoding.DecodeString(req.Content)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid base64 content"})
		return
	}

	// Check size limit
	if int64(len(content)) > cfg.MaxUploadSize {
		c.JSON(http.StatusRequestEntityTooLarge, gin.H{"error": "File too large"})
		return
	}

	absPath := filepath.Join(absDir, req.Filename)
	if !strings.HasPrefix(absPath, cfg.FileRoot) {
		c.JSON(http.StatusForbidden, gin.H{"error": "Access denied"})
		return
	}

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
