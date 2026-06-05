package handlers

import (
	"net/http"
	"runtime"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/config"
	"github.com/liveqte/kisama_agent/models"
	"github.com/liveqte/kisama_agent/utils"
)

// GetBaseInfo retrieves basic system information
func GetBaseInfo(c *gin.Context) {
	cfg := config.Get()

	// Collect system information
	sysInfo, err := utils.GetSystemInfo()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get system info"})
		return
	}

	response := models.BaseInfoResponse{
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
		SessionKey:   cfg.SessionKey,
		NoiseKey: models.NoiseKeyConfig{
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
		},
	}

	c.JSON(http.StatusOK, response)
}

// GetStatus retrieves real-time system status
func GetStatus(c *gin.Context) {
	status, err := utils.GetSystemStatus()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get system status"})
		return
	}

	response := models.StatusResponse{
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

	c.JSON(http.StatusOK, response)
}
