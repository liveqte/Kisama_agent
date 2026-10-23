package handlers

import (
	"net/http"
	"runtime"
	"sync"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/go/config"
	"github.com/liveqte/kisama_agent/go/models"
	"github.com/liveqte/kisama_agent/go/utils"
)

// BaseInfo 分级缓存 (docs/API.MD 第十六节):
//
//	P     = 进程级静态, 只探测一次, 轮换/TTL 均不清空;
//	local = disk/mem/swap, 30s TTL;
//	net   = ipv4/ipv6, 3600s TTL.
//
// 三组各自持锁 single-flight; 慢探测不跨组阻塞.
type baseInfoPFields struct {
	CPUName        string
	OS             string
	KernelVersion  string
	Virtualization string
	Marks          []string
}

type baseInfoLocalFields struct {
	DiskTotal int64
	MemTotal  int64
	SwapTotal int64
}

type baseInfoNetFields struct {
	IPv4 *string
	IPv6 *string
}

const (
	baseInfoLocalTTL    = 30 * time.Second
	baseInfoNetTTL      = 3600 * time.Second
	baseInfoFailBackoff = 60 * time.Second
)

// Probe entry points are variables so offline tests can replace them and count calls.
var (
	getSystemStaticFn = utils.GetSystemStatic
	getSystemLocalFn  = utils.GetSystemLocal
	getSystemNetFn    = utils.GetSystemNet
	baseInfoNowFn     = time.Now
)

var (
	baseInfoPMu    sync.Mutex
	baseInfoP      baseInfoPFields
	baseInfoPReady bool

	baseInfoLocalMu     sync.Mutex
	baseInfoLocal       baseInfoLocalFields
	baseInfoLocalAt     time.Time
	baseInfoLocalFailAt time.Time

	baseInfoNetMu     sync.Mutex
	baseInfoNet       baseInfoNetFields
	baseInfoNetAt     time.Time
	baseInfoNetFailAt time.Time

	statusCache     models.StatusResponse
	statusCacheTime int64
	statusMu        sync.Mutex // 实时监控互斥锁，防止并发击穿
)

// InvalidateSecretCaches 密钥轮换后仅失效 status 缓存。
// baseinfo 的 P/T 快照不含任何凭证, 轮换只替换响应阶段装配的 session_key/noise_key,
// 因此不得清空系统快照, 也不得触发任何重探 (docs/API.MD 16.4 第 4 条)。
func InvalidateSecretCaches() {
	statusMu.Lock()
	statusCacheTime = 0
	statusMu.Unlock()
}

func getBaseInfoP() baseInfoPFields {
	baseInfoPMu.Lock()
	defer baseInfoPMu.Unlock()
	if baseInfoPReady {
		return baseInfoP
	}
	static := getSystemStaticFn()
	baseInfoP = baseInfoPFields{
		CPUName:        static.CPUName,
		OS:             static.OS,
		KernelVersion:  static.KernelVersion,
		Virtualization: static.Virtualization,
		Marks:          append([]string{}, static.Marks...),
	}
	if baseInfoP.Marks == nil {
		baseInfoP.Marks = []string{}
	}
	// P 级失败也只写兜底值并置 ready, 进程内不再重试.
	baseInfoPReady = true
	return baseInfoP
}

func getBaseInfoLocal(virtualization string) baseInfoLocalFields {
	baseInfoLocalMu.Lock()
	defer baseInfoLocalMu.Unlock()
	now := baseInfoNowFn()
	if !baseInfoLocalAt.IsZero() && now.Sub(baseInfoLocalAt) < baseInfoLocalTTL {
		return baseInfoLocal
	}
	if !baseInfoLocalFailAt.IsZero() && now.Sub(baseInfoLocalFailAt) < baseInfoFailBackoff {
		return baseInfoLocal
	}
	local := getSystemLocalFn()
	if local != nil {
		baseInfoLocal = baseInfoLocalFields{
			DiskTotal: local.DiskTotal,
			MemTotal:  local.MemTotal,
			SwapTotal: local.SwapTotal,
		}
		baseInfoLocalAt = now
		baseInfoLocalFailAt = time.Time{}
	} else {
		baseInfoLocalFailAt = now
	}
	return baseInfoLocal
}

func getBaseInfoNet() baseInfoNetFields {
	baseInfoNetMu.Lock()
	defer baseInfoNetMu.Unlock()
	now := baseInfoNowFn()
	if !baseInfoNetAt.IsZero() && now.Sub(baseInfoNetAt) < baseInfoNetTTL {
		return baseInfoNet
	}
	if !baseInfoNetFailAt.IsZero() && now.Sub(baseInfoNetFailAt) < baseInfoFailBackoff {
		return baseInfoNet
	}
	netInfo := getSystemNetFn()
	if netInfo != nil {
		baseInfoNet = baseInfoNetFields{IPv4: netInfo.IPv4, IPv6: netInfo.IPv6}
		baseInfoNetAt = now
		baseInfoNetFailAt = time.Time{}
	} else {
		baseInfoNetFailAt = now
	}
	return baseInfoNet
}

// GetBaseInfo retrieves basic system information (P + local + net 分级缓存)
func GetBaseInfo(c *gin.Context) {
	cfg := config.Get()

	p := getBaseInfoP()
	local := getBaseInfoLocal(p.Virtualization)
	netInfo := getBaseInfoNet()

	response := models.BaseInfoResponse{
		BaseResponse:   models.BaseResponse{Status: "ok"},
		Arch:           runtime.GOARCH,
		CPUCores:       runtime.NumCPU(),
		CPUName:        p.CPUName,
		DiskTotal:      local.DiskTotal,
		GPUName:        "",
		IPv4:           netInfo.IPv4,
		IPv6:           netInfo.IPv6,
		MemTotal:       local.MemTotal,
		OS:             p.OS,
		KernelVersion:  p.KernelVersion,
		SwapTotal:      local.SwapTotal,
		Version:        cfg.AgentVersion,
		Virtualization: p.Virtualization,
		Marks:          append([]string{}, p.Marks...),
	}
	if response.Marks == nil {
		response.Marks = []string{}
	}

	// ✨ 安全隔离层：根据当前请求的鉴权状态，动态组装或初始化为标准的 nil 指针
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
	now := baseInfoNowFn().Unix()

	// 🚀 0.5.6: 锁内快检命中, 未命中锁外重建 (utils.GetSystemStatus 含 1s CPU 采样等
	// 慢操作, 原实现持锁构建会让并发请求全部排队)
	statusMu.Lock()
	cacheValid := statusCacheTime != 0 && (now-statusCacheTime) <= 30
	var response models.StatusResponse
	if cacheValid {
		response = statusCache
	}
	statusMu.Unlock()

	if !cacheValid {
		// 重新读取频繁变动的 /proc/net 或者是系统状态文件 (锁外执行)
		status, err := utils.GetSystemStatus()
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get system status"})
			return
		}

		rebuilt := models.StatusResponse{
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

		statusMu.Lock()
		// 双检: 并发线程可能已完成重建, 避免慢构建的旧数据覆盖新缓存
		if statusCacheTime == 0 || (now-statusCacheTime) > 30 {
			statusCache = rebuilt
			statusCacheTime = now
		}
		response = statusCache
		statusMu.Unlock()
	}

	c.Set("responseBody", response)
	c.JSON(http.StatusOK, response)
}
