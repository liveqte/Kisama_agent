package handlers

import (
	"archive/zip"
	"bytes"
	"encoding/base64"
	"errors"
	"fmt"
	"io"
	"io/fs"
	"io/ioutil"
	"net/http"
	"net/url"
	"os"
	"path"
	"path/filepath"
	"runtime"
	"strconv"
	"strings"
	"syscall"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/go/config"
	"github.com/liveqte/kisama_agent/go/models"
)

// ListFiles lists files in a directory
// isPathInsideFileRoot 🔐 A-1 路径边界校验 (唯一权威实现): 基于 EvalSymlinks 判断目标
// 是否位于 FileRoot 之内。防御: 兄弟目录逃逸(../sibling)、绝对路径、FileRoot 降级为
// 相对路径、symlink 逃逸。对尚不存在的目标 (上传/新建), 校验其最深已存在祖先的
// realpath, 剩余段为纯名称拼接 (filepath.Join/Join 已消除 ..)。
func isPathInsideFileRoot(root, target string) bool {
	// EvalSymlinks 对相对输入返回相对结果 (Go 文档保证), 而 target 已绝对化;
	// root 未先 Abs 时 Rel 必失败 → 相对 FileRoot 会让所有文件接口误判 403
	rootAbs, err := filepath.Abs(root)
	if err != nil {
		return false
	}
	rootReal, err := filepath.EvalSymlinks(rootAbs)
	if err != nil {
		return false
	}
	abs, err := filepath.Abs(target)
	if err != nil {
		return false
	}
	probe := abs
	for {
		if _, err := os.Lstat(probe); err == nil {
			break
		} else if !errors.Is(err, fs.ErrNotExist) && !errors.Is(err, syscall.ENOTDIR) {
			return false
		}
		parent := filepath.Dir(probe)
		if parent == probe {
			return false
		}
		probe = parent
	}
	realProbe, err := filepath.EvalSymlinks(probe)
	if err != nil {
		return false
	}
	relReal, err := filepath.Rel(rootReal, realProbe)
	if err != nil || relReal == ".." || strings.HasPrefix(relReal, ".."+string(filepath.Separator)) {
		return false
	}
	remainder, err := filepath.Rel(probe, abs)
	if err != nil || remainder == ".." || strings.HasPrefix(remainder, ".."+string(filepath.Separator)) {
		return false
	}
	return true
}

func ListFiles(c *gin.Context) {
	cfg := config.Get()

	var req models.FileListRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	// Validate path
	absPath := filepath.Join(cfg.FileRoot, req.Path)
	if !isPathInsideFileRoot(cfg.FileRoot, absPath) {
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
			Name:      file.Name(),
			Path:      relPath,
			Type:      fileType,
			Size:      file.Size(),
			Mtime:     file.ModTime().Format(time.RFC3339),
			Mode:      file.Mode().String(),
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

var mountInfoPathEscapes = strings.NewReplacer(
	`\040`, " ",
	`\011`, "\t",
	`\012`, "\n",
	`\134`, `\`,
)

func mountReadOnlyFromMountInfo(target string, data []byte) *bool {
	target = path.Clean(target)
	if !path.IsAbs(target) {
		return nil
	}

	bestLength := -1
	var result *bool
	for _, line := range strings.Split(string(data), "\n") {
		fields := strings.Fields(line)
		if len(fields) < 6 {
			continue
		}
		mountPoint := path.Clean(mountInfoPathEscapes.Replace(fields[4]))
		if !path.IsAbs(mountPoint) {
			continue
		}
		prefix := strings.TrimSuffix(mountPoint, "/") + "/"
		if target != mountPoint && !strings.HasPrefix(target, prefix) {
			continue
		}
		if len(mountPoint) <= bestLength {
			continue
		}

		readOnly := false
		for _, option := range strings.Split(fields[5], ",") {
			if option == "ro" {
				readOnly = true
				break
			}
		}
		result = &readOnly
		bestLength = len(mountPoint)
	}
	return result
}

// QueryFileAuthority queries file permissions
func QueryFileAuthority(c *gin.Context) {
	cfg := config.Get()

	var req models.FileAuthorityRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	var mountInfo []byte
	if runtime.GOOS == "linux" {
		mountInfo, _ = os.ReadFile("/proc/self/mountinfo")
	}

	var authorities []models.AuthorityInfo
	for _, path := range req.Paths {
		absPath := filepath.Join(cfg.FileRoot, path)
		if !isPathInsideFileRoot(cfg.FileRoot, absPath) {
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

		var mountReadOnly *bool
		if len(mountInfo) > 0 {
			if realPath, err := filepath.EvalSymlinks(absPath); err == nil {
				mountReadOnly = mountReadOnlyFromMountInfo(filepath.ToSlash(realPath), mountInfo)
			}
		}

		authority := models.AuthorityInfo{
			Path:          path,
			Mode:          mode.String(),
			ModeOctal:     fmt.Sprintf("0o%o", mode.Perm()),
			Type:          fileType,
			Readable:      readable,
			Writable:      writable,
			Executable:    executable,
			MountReadOnly: mountReadOnly,
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
		if !isPathInsideFileRoot(cfg.FileRoot, absPath) {
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
	if !isPathInsideFileRoot(cfg.FileRoot, absPath) {
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
	if !isPathInsideFileRoot(cfg.FileRoot, absDir) {
		c.JSON(http.StatusForbidden, gin.H{"error": "Access denied"})
		return
	}

	if err := os.MkdirAll(absDir, 0755); err != nil {
		respondFileError(c, http.StatusInternalServerError, "Failed to create directory", err)
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
	if !isPathInsideFileRoot(cfg.FileRoot, absPath) {
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
			respondFileError(c, http.StatusInternalServerError, "Failed to create chunk directory", err)
			return
		}

		// 2. 将当前接收到的分片直接落盘暂存
		chunkFile := filepath.Join(chunkDir, fmt.Sprintf("chunk_%d", chunkIndex))
		if err := ioutil.WriteFile(chunkFile, content, 0644); err != nil {
			respondFileError(c, http.StatusInternalServerError, "Failed to write chunk file", err)
			return
		}

		// 3. 读取暂存目录，计算目前已到位的分片数量
		files, err := ioutil.ReadDir(chunkDir)
		if err != nil {
			respondFileError(c, http.StatusInternalServerError, "Failed to read chunk directory", err)
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
				respondFileError(c, http.StatusInternalServerError, "Failed to open target file for merging", err)
				return
			}

			for i := 0; i < totalCount; i++ {
				partPath := filepath.Join(chunkDir, fmt.Sprintf("chunk_%d", i))
				partContent, err := ioutil.ReadFile(partPath)
				if err != nil {
					out.Close()
					respondFileError(c, http.StatusInternalServerError, fmt.Sprintf("Missing chunk %d", i), err)
					return
				}
				if _, err := out.Write(partContent); err != nil {
					out.Close()
					respondFileError(c, http.StatusInternalServerError, "Failed to write merged content", err)
					return
				}
			}
			if err := out.Close(); err != nil {
				respondFileError(c, http.StatusInternalServerError, "Failed to close merged file", err)
				return
			}

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
		respondFileError(c, http.StatusInternalServerError, "Failed to write file", err)
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
		if !isPathInsideFileRoot(cfg.FileRoot, absPath) {
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

func fileBatchStatus(total, success int) (string, string) {
	if total > 0 && success == total {
		return "ok", ""
	}
	if total == 0 {
		return "error", "No operations requested"
	}
	if success == 0 {
		return "error", fmt.Sprintf("All %d operations failed", total)
	}
	return "partial", fmt.Sprintf("%d of %d operations failed", total-success, total)
}

func ensureDestinationParent(target string) (status, message string) {
	probe := filepath.Dir(target)
	for {
		info, err := os.Lstat(probe)
		if err == nil {
			if info.Mode()&os.ModeSymlink != 0 {
				info, err = os.Stat(probe)
				if err != nil {
					return "denied", "destination parent is not a directory"
				}
			}
			if !info.IsDir() {
				return "denied", "destination parent is not a directory"
			}
			break
		}
		// Windows 的 ERROR_PATH_NOT_FOUND 同时匹配 ErrNotExist 与 ENOTDIR，必须先向上查找已有祖先。
		if errors.Is(err, fs.ErrNotExist) {
			parent := filepath.Dir(probe)
			if parent == probe {
				return "failed", err.Error()
			}
			probe = parent
			continue
		}
		if errors.Is(err, syscall.ENOTDIR) {
			return "denied", "destination parent is not a directory"
		}
		return "failed", err.Error()
	}
	if err := os.MkdirAll(filepath.Dir(target), 0755); err != nil {
		return "failed", err.Error()
	}
	return "", ""
}

func pathHasNonDirectoryAncestor(target string) bool {
	for probe := target; ; probe = filepath.Dir(probe) {
		info, err := os.Lstat(probe)
		if err == nil {
			if info.Mode()&os.ModeSymlink != 0 {
				info, err = os.Stat(probe)
				if err != nil {
					return false
				}
			}
			return !info.IsDir()
		}
		if !errors.Is(err, fs.ErrNotExist) {
			return false
		}
		parent := filepath.Dir(probe)
		if parent == probe {
			return false
		}
	}
}

// MoveFiles moves/renames files
func MoveFiles(c *gin.Context) {
	cfg := config.Get()

	var req models.FileMoveRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	results := make([]models.FileMoveResult, 0, len(req))
	successCount := 0

	for from, to := range req {
		absFrom := filepath.Join(cfg.FileRoot, from)
		absTo := filepath.Join(cfg.FileRoot, to)

		if !isPathInsideFileRoot(cfg.FileRoot, absFrom) || !isPathInsideFileRoot(cfg.FileRoot, absTo) {
			results = append(results, models.FileMoveResult{
				From:   from,
				To:     to,
				Status: "denied",
				Error:  "path outside file root",
			})
			continue
		}

		if _, err := os.Lstat(absFrom); err != nil {
			status, message := "failed", err.Error()
			if errors.Is(err, fs.ErrNotExist) && !pathHasNonDirectoryAncestor(absFrom) {
				status, message = "skipped", "source not found"
			}
			results = append(results, models.FileMoveResult{From: from, To: to, Status: status, Error: message})
			continue
		}

		if status, message := ensureDestinationParent(absTo); status != "" {
			results = append(results, models.FileMoveResult{From: from, To: to, Status: status, Error: message})
			continue
		}

		if err := os.Rename(absFrom, absTo); err != nil {
			results = append(results, models.FileMoveResult{
				From:   from,
				To:     to,
				Status: "failed",
				Error:  err.Error(),
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

	status, message := fileBatchStatus(len(req), successCount)
	response := models.FileMoveResponse{
		BaseResponse: models.BaseResponse{Status: status, Message: message},
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

	results := make([]models.FileMoveResult, 0, len(req))
	successCount := 0

	for from, to := range req {
		absFrom := filepath.Join(cfg.FileRoot, from)
		absTo := filepath.Join(cfg.FileRoot, to)

		if !isPathInsideFileRoot(cfg.FileRoot, absFrom) || !isPathInsideFileRoot(cfg.FileRoot, absTo) {
			results = append(results, models.FileMoveResult{
				From:   from,
				To:     to,
				Status: "denied",
				Error:  "path outside file root",
			})
			continue
		}

		if _, err := os.Lstat(absFrom); err != nil {
			status, message := "failed", err.Error()
			if errors.Is(err, fs.ErrNotExist) && !pathHasNonDirectoryAncestor(absFrom) {
				status, message = "skipped", "source not found"
			}
			results = append(results, models.FileMoveResult{From: from, To: to, Status: status, Error: message})
			continue
		}

		if status, message := ensureDestinationParent(absTo); status != "" {
			results = append(results, models.FileMoveResult{From: from, To: to, Status: status, Error: message})
			continue
		}

		if err := copyPath(absFrom, absTo); err != nil {
			results = append(results, models.FileMoveResult{
				From:   from,
				To:     to,
				Status: "failed",
				Error:  err.Error(),
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

	status, message := fileBatchStatus(len(req), successCount)
	response := models.FileCopyResponse{
		BaseResponse: models.BaseResponse{Status: status, Message: message},
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
	if !isPathInsideFileRoot(cfg.FileRoot, absPath) {
		c.JSON(http.StatusForbidden, gin.H{"error": "Access denied"})
		return
	}

	if err := os.MkdirAll(absPath, 0755); err != nil {
		respondFileError(c, http.StatusInternalServerError, "Failed to create directory", err)
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "ok",
		"path":   req.Path,
	})
}

// ========== File ZIP/Unzip (0.5.4, docs/API.MD 12.1/12.2) ==========

// zipMaxEntries 限制写入 zip 的总条目数 (docs/API.MD 12.1/12.2)
const zipMaxEntries = 20000

// zipMaxTotalBytes 限制解压总 uncompressed 字节 (docs/API.MD 12.1)
const zipMaxTotalBytes = int64(512) * 1024 * 1024

// zipMaxListedFiles 响应 files 列表最多返回条数, 超出置 files_truncated=true
const zipMaxListedFiles = 500

// errZipEntryLimit 达到条目上限时中断 WalkDir 的哨兵错误
var errZipEntryLimit = errors.New("zip entry limit reached")

// relDisplay 沙箱内相对显示路径 (沙箱根显示为 ".")
func relDisplay(root, target string) string {
	rel, err := filepath.Rel(root, target)
	if err != nil {
		return target
	}
	return rel
}

// ZipFile 将文件/目录(递归)打包为 zip (0.5.4, docs/API.MD 12.2):
// 父目录自动创建、已存在时覆盖重建 (等价 zip -r)、单项失败不中断
func ZipFile(c *gin.Context) {
	cfg := config.Get()

	var req models.FileZipRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}
	if req.Path == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "path required"})
		return
	}
	if len(req.Items) == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "items required (non-empty array)"})
		return
	}

	absZip := filepath.Join(cfg.FileRoot, req.Path)
	if !isPathInsideFileRoot(cfg.FileRoot, absZip) {
		c.JSON(http.StatusForbidden, gin.H{"error": "Access denied"})
		return
	}
	if info, err := os.Stat(absZip); err == nil && info.IsDir() {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Target is a directory"})
		return
	}

	if err := os.MkdirAll(filepath.Dir(absZip), 0755); err != nil {
		respondFileError(c, http.StatusInternalServerError, "Failed to create directory", err)
		return
	}

	zipFile, err := os.Create(absZip) // os.Create 截断 = 覆盖重建
	if err != nil {
		respondFileError(c, http.StatusInternalServerError, "Failed to create zip", err)
		return
	}
	defer zipFile.Close()

	w := zip.NewWriter(zipFile)
	used := 0
	addedTotal := 0
	truncated := false
	results := make([]models.FileZipItemResult, 0, len(req.Items))

	addFile := func(absPath, name string) (bool, error) {
		if used >= zipMaxEntries {
			return false, nil
		}
		info, err := os.Stat(absPath)
		if err != nil {
			return true, err
		}
		if info.IsDir() {
			return true, fmt.Errorf("is a directory")
		}
		fh, err := zip.FileInfoHeader(info)
		if err != nil {
			return true, err
		}
		fh.Name = filepath.ToSlash(name)
		fh.Method = zip.Deflate
		fh.Modified = info.ModTime()
		dst, err := w.CreateHeader(fh)
		if err != nil {
			return true, err
		}
		src, err := os.Open(absPath)
		if err != nil {
			return true, err
		}
		_, copyErr := io.Copy(dst, src)
		closeErr := src.Close()
		if copyErr != nil {
			return true, copyErr
		}
		if closeErr != nil {
			return true, closeErr
		}
		used++
		return true, nil
	}
	addDirEntry := func(dirInfo os.FileInfo, name string) (bool, error) {
		if used >= zipMaxEntries {
			return false, nil
		}
		fh, err := zip.FileInfoHeader(dirInfo)
		if err != nil {
			return true, err
		}
		fh.Name = filepath.ToSlash(name) + "/" // 目录条目带尾 / 保留空目录
		fh.Modified = dirInfo.ModTime()
		if _, err := w.CreateHeader(fh); err != nil {
			return true, err
		}
		used++
		return true, nil
	}

	failedItems := 0
	for _, item := range req.Items {
		if truncated {
			results = append(results, models.FileZipItemResult{Item: item, Status: "skipped"})
			continue
		}
		absItem := filepath.Join(cfg.FileRoot, item)
		if !isPathInsideFileRoot(cfg.FileRoot, absItem) {
			results = append(results, models.FileZipItemResult{Item: item, Status: "error", Error: "path outside file root"})
			failedItems++
			continue
		}
		info, err := os.Stat(absItem)
		if err != nil {
			result := models.FileZipItemResult{Item: item, Status: "error", Error: err.Error()}
			if errors.Is(err, fs.ErrNotExist) {
				result.Status = "not_found"
				result.Error = ""
			} else {
				failedItems++
			}
			results = append(results, result)
			continue
		}
		added := 0
		if !info.IsDir() {
			proceed, addErr := addFile(absItem, filepath.Base(item))
			if !proceed {
				truncated = true
				results = append(results, models.FileZipItemResult{Item: item, Status: "skipped"})
				continue
			}
			if addErr != nil {
				results = append(results, models.FileZipItemResult{Item: item, Status: "error", Error: addErr.Error()})
				failedItems++
				continue
			}
			added = 1
		} else {
			// 目录递归打包; 非 flat 时条目名带顶层目录名前缀
			base := ""
			if !req.Flat {
				base = filepath.Base(item)
			}
			status := "ok"
			wroteItem := false
			var itemErr error
			if item == "" || item == "." {
				base = ""
			}
			walkErr := filepath.WalkDir(absItem, func(p string, d fs.DirEntry, werr error) error {
				if werr != nil {
					if itemErr == nil {
						itemErr = werr
					}
					return nil // 单个不可读条目不中断
				}
				rel, rerr := filepath.Rel(absItem, p)
				if rerr != nil {
					if itemErr == nil {
						itemErr = rerr
					}
					return nil
				}
				if rel == "." {
					return nil
				}
				if d.Type()&os.ModeSymlink != 0 {
					if itemErr == nil {
						itemErr = fmt.Errorf("symbolic link not supported: %s", rel)
					}
					return nil
				}
				name := rel
				if base != "" {
					name = base + string(filepath.Separator) + rel
				}
				var proceed bool
				var addErr error
				if d.IsDir() {
					dirInfo, ierr := d.Info()
					if ierr != nil {
						if itemErr == nil {
							itemErr = ierr
						}
						return nil
					}
					proceed, addErr = addDirEntry(dirInfo, name)
				} else {
					proceed, addErr = addFile(p, name)
					if addErr == nil && proceed {
						added++
					}
				}
				if addErr != nil && itemErr == nil {
					itemErr = addErr
				}
				if !proceed {
					return errZipEntryLimit
				}
				if addErr == nil {
					wroteItem = true
				}
				return nil
			})
			if walkErr == errZipEntryLimit {
				status = "partial"
				truncated = true
			}
			if itemErr != nil {
				if wroteItem {
					status = "partial"
				} else {
					status = "error"
				}
				failedItems++
			}
			result := models.FileZipItemResult{Item: item, Status: status, Added: added}
			if itemErr != nil {
				result.Error = itemErr.Error()
			}
			results = append(results, result)
			addedTotal += added
			continue
		}
		addedTotal += added
		results = append(results, models.FileZipItemResult{Item: item, Status: "ok", Added: added})
	}

	if err := w.Close(); err != nil {
		respondFileError(c, http.StatusInternalServerError, "Failed to write zip", err)
		return
	}
	if err := zipFile.Close(); err != nil {
		respondFileError(c, http.StatusInternalServerError, "Failed to write zip", err)
		return
	}
	info, err := os.Stat(absZip)
	if err != nil {
		respondFileError(c, http.StatusInternalServerError, "Failed to stat zip", err)
		return
	}
	size := int(info.Size())

	status, message := "ok", ""
	if failedItems > 0 {
		status = "partial"
		message = fmt.Sprintf("%d of %d items failed", failedItems, len(req.Items))
		if failedItems == len(req.Items) {
			status = "error"
		}
	}
	response := gin.H{
		"status":  status,
		"path":    relDisplay(cfg.FileRoot, absZip),
		"entries": addedTotal,
		"size":    size,
		"results": results,
	}
	if message != "" {
		response["message"] = message
	}
	c.JSON(http.StatusOK, response)
}

// UnzipFile 解压 zip 到指定目录 (0.5.4, docs/API.MD 12.1):
// 缺省解压到 zip 所在目录; 防 zip-slip (归一化后逃出目标目录的条目计入 skipped 不报错);
// 限额 20000 条目 / 512MB, 超出部分计入 skipped
func UnzipFile(c *gin.Context) {
	cfg := config.Get()

	var req models.FileUnzipRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}
	if req.Path == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "path required"})
		return
	}

	absZip := filepath.Join(cfg.FileRoot, req.Path)
	if !isPathInsideFileRoot(cfg.FileRoot, absZip) {
		c.JSON(http.StatusForbidden, gin.H{"error": "Access denied"})
		return
	}
	if info, err := os.Stat(absZip); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Zip not found"})
		return
	} else if info.IsDir() {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Path is a directory"})
		return
	}

	absDest := filepath.Dir(absZip) // 缺省: 解压到此处
	if req.DestPath != "" {
		absDest = filepath.Join(cfg.FileRoot, req.DestPath)
		if !isPathInsideFileRoot(cfg.FileRoot, absDest) {
			c.JSON(http.StatusForbidden, gin.H{"error": "Access denied"})
			return
		}
	}
	if fi, err := os.Stat(absDest); err == nil && !fi.IsDir() {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Destination is a file"})
		return
	}
	if err := os.MkdirAll(absDest, 0755); err != nil {
		respondFileError(c, http.StatusInternalServerError, "Failed to create directory", err)
		return
	}

	overwrite := req.Overwrite == nil || *req.Overwrite

	reader, err := zip.OpenReader(absZip)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Not a zip file"})
		return
	}
	defer reader.Close()

	extracted, skipped := 0, 0
	var totalBytes int64
	files := []string{}
	filesTruncated := false

	for _, f := range reader.File {
		if extracted+skipped >= zipMaxEntries || totalBytes >= zipMaxTotalBytes {
			skipped++
			continue
		}
		if len(req.Entries) > 0 {
			name := filepath.ToSlash(f.Name)
			base := path.Base(name)
			matched := false
			for _, e := range req.Entries {
				ne := filepath.ToSlash(strings.TrimPrefix(e, "/"))
				if name == ne || base == ne {
					matched = true
					break
				}
			}
			if !matched {
				skipped++
				continue
			}
		}
		if f.Flags&0x1 != 0 { // 加密条目
			skipped++
			continue
		}
		if totalBytes+int64(f.UncompressedSize64) > zipMaxTotalBytes {
			skipped++
			continue
		}
		// zip-slip: 归一化后必须仍在目标目录内
		cleaned := filepath.Clean(filepath.Join(absDest, f.Name))
		relToDest, rerr := filepath.Rel(absDest, cleaned)
		if rerr != nil || relToDest == ".." ||
			strings.HasPrefix(relToDest, ".."+string(filepath.Separator)) || filepath.IsAbs(relToDest) ||
			!isPathInsideFileRoot(cfg.FileRoot, cleaned) {
			skipped++
			continue
		}
		if f.FileInfo().IsDir() {
			// 目录条目: 按归一化路径创建目录 (保留空目录并支撑后续文件写入)
			if err := os.MkdirAll(cleaned, 0755); err != nil {
				respondFileError(c, http.StatusInternalServerError, "Failed to create extraction directory", err)
				return
			}
			continue
		}
		if !overwrite {
			if _, err := os.Stat(cleaned); err == nil {
				skipped++
				continue
			}
		}
		// 上游无目录条目的 zip 也能写入: 写文件前先确保父目录存在
		if err := os.MkdirAll(filepath.Dir(cleaned), 0755); err != nil {
			respondFileError(c, http.StatusInternalServerError, "Failed to create extraction directory", err)
			return
		}
		rc, err := f.Open()
		if err != nil {
			respondFileError(c, http.StatusInternalServerError, "Failed to open zip entry", err)
			return
		}
		out, err := os.OpenFile(cleaned, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, 0644)
		if err != nil {
			rc.Close()
			respondFileError(c, http.StatusInternalServerError, "Failed to create extracted file", err)
			return
		}
		remaining := zipMaxTotalBytes - totalBytes
		n, cerr := io.Copy(out, io.LimitReader(rc, remaining+1))
		if cerr == nil && n > remaining {
			cerr = fmt.Errorf("zip entry exceeds total extraction limit")
		}
		closeErr := out.Close()
		readCloseErr := rc.Close()
		if cerr != nil || closeErr != nil || readCloseErr != nil {
			os.Remove(cleaned)
			if cerr != nil {
				respondFileError(c, http.StatusInternalServerError, "Failed to write extracted file", cerr)
			} else if closeErr != nil {
				respondFileError(c, http.StatusInternalServerError, "Failed to close extracted file", closeErr)
			} else {
				respondFileError(c, http.StatusInternalServerError, "Failed to close zip entry", readCloseErr)
			}
			return
		}
		extracted++
		totalBytes += n
		if len(files) < zipMaxListedFiles {
			files = append(files, relDisplay(cfg.FileRoot, cleaned))
		} else {
			filesTruncated = true
		}
	}

	if err := reader.Close(); err != nil {
		respondFileError(c, http.StatusInternalServerError, "Failed to close zip archive", err)
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status":          "ok",
		"path":            relDisplay(cfg.FileRoot, absZip),
		"dest":            relDisplay(cfg.FileRoot, absDest),
		"extracted":       extracted,
		"skipped":         skipped,
		"files":           files,
		"files_truncated": filesTruncated,
	})
}

// Helper functions

func fileErrorReason(err error) string {
	var pathErr *os.PathError
	nonDirectoryAncestor := errors.As(err, &pathErr) && pathHasNonDirectoryAncestor(pathErr.Path)
	switch {
	case errors.Is(err, syscall.EROFS):
		return "read_only_file_system"
	case errors.Is(err, syscall.EACCES), errors.Is(err, syscall.EPERM):
		return "permission_denied"
	case runtime.GOOS != "windows" && errors.Is(err, syscall.ENOTDIR):
		return "not_a_directory"
	case errors.Is(err, syscall.EEXIST):
		return "file_exists"
	case nonDirectoryAncestor:
		return "not_a_directory"
	case errors.Is(err, syscall.ENOENT):
		return "not_found"
	case errors.Is(err, syscall.ENOSPC):
		return "no_space"
	default:
		return "unknown"
	}
}

func respondFileError(c *gin.Context, status int, message string, err error) {
	c.JSON(status, gin.H{"status": "error", "error": message, "message": err.Error(), "reason": fileErrorReason(err)})
}

func respondRawFileError(c *gin.Context, status int, message string, err error) {
	c.JSON(status, gin.H{"status": "error", "completed": false, "message": message, "reason": fileErrorReason(err)})
}

// isTextFile checks if content is text
func isTextFile(content []byte) bool {
	// Simple heuristic: check for null bytes
	return !bytes.Contains(content, []byte{0})
}

// copyPath copies a file or directory tree without following symbolic links.
func copyPath(src, dst string) error {
	info, err := os.Lstat(src)
	if err != nil {
		return err
	}
	if !info.IsDir() {
		if info.Mode()&os.ModeSymlink != 0 {
			target, err := os.Readlink(src)
			if err != nil {
				return err
			}
			return os.Symlink(target, dst)
		}
		return copyFile(src, dst)
	}

	if isPathInsideFileRoot(src, dst) {
		return fmt.Errorf("destination is inside source directory")
	}

	return filepath.WalkDir(src, func(current string, entry fs.DirEntry, walkErr error) error {
		if walkErr != nil {
			return walkErr
		}
		rel, err := filepath.Rel(src, current)
		if err != nil {
			return err
		}
		target := filepath.Join(dst, rel)
		if entry.IsDir() {
			return os.MkdirAll(target, 0755)
		}
		entryInfo, err := entry.Info()
		if err != nil {
			return err
		}
		if entryInfo.Mode()&os.ModeSymlink != 0 {
			link, err := os.Readlink(current)
			if err != nil {
				return err
			}
			return os.Symlink(link, target)
		}
		return copyFile(current, target)
	})
}

// copyFile copies a regular file.
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
	if !isPathInsideFileRoot(cfg.FileRoot, absDir) {
		c.JSON(http.StatusForbidden, gin.H{"status": "error", "completed": false, "message": "Access denied"})
		return
	}

	if err := os.MkdirAll(absDir, 0755); err != nil {
		respondRawFileError(c, http.StatusInternalServerError, "Failed to create directory", err)
		return
	}

	absPath := filepath.Join(absDir, fileName)
	if !isPathInsideFileRoot(cfg.FileRoot, absPath) {
		c.JSON(http.StatusForbidden, gin.H{"status": "error", "completed": false, "message": "Access denied"})
		return
	}

	// 3. 直接在 Request Body 中读取 100% 原始二进制裸字节，免除 Base64 编解码开销
	// 🚀 0.5.6: 用 LimitReader 按上限+1 预读, 超限请求不再先整块缓冲进内存才被拒绝
	content, err := ioutil.ReadAll(io.LimitReader(c.Request.Body, cfg.MaxUploadSize+1))
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
			respondRawFileError(c, http.StatusInternalServerError, "Failed to create chunk directory", err)
			return
		}

		// 分片落盘暂存
		chunkFile := filepath.Join(chunkDir, fmt.Sprintf("chunk_%d", chunkID))
		if err := ioutil.WriteFile(chunkFile, content, 0644); err != nil {
			respondRawFileError(c, http.StatusInternalServerError, "Failed to write chunk", err)
			return
		}

		// 统计当前已到位的分片数
		files, err := ioutil.ReadDir(chunkDir)
		if err != nil {
			respondRawFileError(c, http.StatusInternalServerError, "Failed to read chunk directory", err)
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
				respondRawFileError(c, http.StatusInternalServerError, "Failed to open target file", err)
				return
			}

			for i := 0; i < totalChunks; i++ {
				partPath := filepath.Join(chunkDir, fmt.Sprintf("chunk_%d", i))
				partContent, err := ioutil.ReadFile(partPath)
				if err != nil {
					out.Close()
					respondRawFileError(c, http.StatusInternalServerError, fmt.Sprintf("Missing chunk %d", i), err)
					return
				}
				if _, err := out.Write(partContent); err != nil {
					out.Close()
					respondRawFileError(c, http.StatusInternalServerError, "Failed to merge chunk", err)
					return
				}
			}
			if err := out.Close(); err != nil {
				respondRawFileError(c, http.StatusInternalServerError, "Failed to close merged file", err)
				return
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
		respondRawFileError(c, http.StatusInternalServerError, "Failed to write file", err)
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
