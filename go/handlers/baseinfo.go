package handlers

import (
	"net/http"
	"runtime"
	"sync"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/config"
	"github.com/liveqte/kisama_agent/models"
	"github.com/liveqte/kisama_agent/utils"
)

// 定义线程安全的响应模型缓存槽与时间戳
var (
	baseInfoCache     models.BaseInfoResponse
	baseInfoCacheTime int64
	baseInfoMu        sync.Mutex // 基础信息互斥锁，防止并发击穿

	statusCache       models.StatusResponse
	statusCacheTime   int64
	statusMu          sync.Mutex // 实时监控互斥锁，防止并发击穿
)

// GetBaseInfo retrieves basic system information (带 1 小时高性能缓存机制)
func GetBaseInfo(c *gin.Context) {
	cfg := config.Get()
	now := time.Now().Unix()

	// 1. 加锁进行缓存有效期核验，阻断高并发下的惊群效应 (Cache Stampede)
	baseInfoMu.Lock()
	if baseInfoCacheTime == 0 || (now-baseInfoCacheTime) > 3600 {
		// 触发底层能耗较高的系统组件抓取
		sysInfo, err := utils.GetSystemInfo()
		if err != nil {
			baseInfoMu.Unlock()
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get system info"})
			return
		}

		// 缓存不含敏感密钥的纯净系统快照
		baseInfoCache = models.BaseInfoResponse{
			BaseResponse: models.BaseResponse{Status: "ok"},
			Arch:         runtime.GOARCH,
			CPUCores:     runtime.NumCPU(),
			CPUName:      sysInfo.CPUName,
			DiskTotal:    sysInfo.DiskTotal,
			GPUName:      "",
			IPv4:         sysInfo.IPv4,
			IPv6:         sysInfo.IPv6,
			MemTotal:     sysInfo.MemTotal,
			OS:           sysInfo.OS,
			KernelVersion: sysInfo.KernelVersion,
			SwapTotal:    sysInfo.SwapTotal,
			Version:      cfg.AgentVersion,
			Virtualization: sysInfo.Virtualization,
		}
		baseInfoCacheTime = now
	}
	
	// 通过值复制（Shallow Copy）派生出当前请求的独立副本，随后立即解锁释放协程
	response := baseInfoCache
	baseInfoMu.Unlock()

	// 2. ✨ 安全隔离层：根据当前请求的鉴权状态，动态组装或初始化为标准的 nil 指针
	var sessionKeyPtr *string
	var noiseKeyPtr *models.NoiseKeyConfig

	if isAuth, exists := c.Get("is_authenticated"); exists && isAuth == true {
		// 【已认证状态】：创建真实数据的指针副本
		sKeyStr := cfg.SessionKey
		sessionKeyPtr = &sKeyStr

		noiseKeyPtr = &models.NoiseKeyConfig{
			Controller: struct {
				Private string `json:"private"`
			}{
				Private: cfg.NoiseKeys.Control.PrivateB64,
			},
			Agent: struct {
				Public string `json:"public"`
			}{
				Public: cfg.NoiseKeys.Agent.PublicB64,
			},
		}
	} else {
		// 【未认证状态】：显式置为 nil 指针，Go 的 JSON 引擎遇到 nil 指针会雷打不动地渲染为明文 null
		sessionKeyPtr = nil
		noiseKeyPtr = nil
	}

	// 将动态组装好的指针凭证塞入当前副本
	response.SessionKey = sessionKeyPtr
	response.NoiseKey = noiseKeyPtr

	c.Set("responseBody", response)
	c.JSON(http.StatusOK, response)
}

// GetStatus retrieves real-time system status (带 30 秒防刷流控缓存)
func GetStatus(c *gin.Context) {
	now := time.Now().Unix()

	statusMu.Lock()
	if statusCacheTime == 0 || (now-statusCacheTime) > 30 {
		// 重新读取频繁变动的 /proc/net 或者是系统状态文件
		status, err := utils.GetSystemStatus()
		if err != nil {
			statusMu.Unlock()
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get system status"})
			return
		}

		statusCache = models.StatusResponse{
			BaseResponse: models.BaseResponse{Status: "ok"},
			CPU: models.CPUStatus{
				Usage: status.CPUUsage,
			},
			RAM: models.MemoryStatus{
				Total: status.MemTotal,
				Used:  status.MemUsed,
			},
			Swap: models.SwapStatus{
				Total: status.SwapTotal,
				Used:  status.SwapUsed,
			},
			Load: models.LoadStatus{
				Load1:  status.Load1,
				Load5:  status.Load5,
				Load15: status.Load15,
			},
			Disk: models.DiskStatus{
				Total: status.DiskTotal,
				Used:  status.DiskUsed,
			},
			Network: models.NetworkStatus{
				Up:        status.NetworkUp,
				Down:      status.NetworkDown,
				TotalUp:   status.TotalNetworkUp,
				TotalDown: status.TotalNetworkDown,
			},
			Connections: models.ConnectionStatus{
				TCP: status.TCPConnections,
				UDP: status.UDPConnections,
			},
			Uptime:  int64(status.Uptime),
			Process: status.ProcessCount,
			Message: "",
		}
		statusCacheTime = now
	}
	
	response := statusCache
	statusMu.Unlock()

	c.Set("responseBody", response)
	c.JSON(http.StatusOK, response)
}