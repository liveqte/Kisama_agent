package utils

import (
	"io"
    "net/http"
	"fmt"
	"net"
	"os"
	"strconv"
	"strings"
	"time"
	"os/user"
	"syscall"

	"github.com/shirou/gopsutil/v3/cpu"
	"github.com/shirou/gopsutil/v3/disk"
	"github.com/shirou/gopsutil/v3/host"
	"github.com/shirou/gopsutil/v3/load"
	"github.com/shirou/gopsutil/v3/mem"
	gopsutilnet "github.com/shirou/gopsutil/v3/net"
	"github.com/shirou/gopsutil/v3/process"
)

// SystemInfo represents basic system information
type SystemInfo struct {
	CPUName      string
	DiskTotal    int64
	IPv4         *string
	IPv6         *string
	MemTotal     int64
	OS           string
	KernelVersion string
	SwapTotal    int64
	Virtualization string
}

// SystemStatus represents real-time system status
type SystemStatus struct {
	CPUUsage       float64
	MemTotal       int64
	MemUsed        int64
	SwapTotal      int64
	SwapUsed       int64
	Load1          float64
	Load5          float64
	Load15         float64
	DiskTotal      int64
	DiskUsed       int64
	NetworkUp      int64
	NetworkDown    int64
	TotalNetworkUp int64
	TotalNetworkDown int64
	TCPConnections int
	UDPConnections int
	Uptime         uint64
	ProcessCount   int
}

// GetSystemInfo retrieves basic system information
func GetSystemInfo() (*SystemInfo, error) {
	cpuInfo, _ := cpu.Info()
	cpuName := ""
	if len(cpuInfo) > 0 {
		cpuName = cpuInfo[0].ModelName
	}

	diskInfo, _ := disk.Usage("/")
	diskTotal := int64(0)
	if diskInfo != nil {
		diskTotal = int64(diskInfo.Total)
	}

	memInfo, _ := mem.VirtualMemory()
	memTotal := int64(0)
	if memInfo != nil {
		memTotal = int64(memInfo.Total)
	}

	memSwap, _ := mem.SwapMemory()
	swapTotal := int64(0)
	if memSwap != nil {
		swapTotal = int64(memSwap.Total)
	}

	osInfo, _ := host.Info()
	osName := ""
	kernelVersion := ""
	virtualization := "None"
	if osInfo != nil {
		osName = fmt.Sprintf("%s %s", osInfo.OS, osInfo.PlatformVersion)
		kernelVersion = osInfo.KernelVersion
		virtualization = osInfo.VirtualizationSystem
	}

	// Get IP addresses
	var ipv4, ipv6 *string

	// Try to get public IPv4
	if pubIPv4, err := GetPublicIPv4(); err == nil && pubIPv4 != "" {
		ipv4 = &pubIPv4
	}

	// Try to get public IPv6
	if pubIPv6, err := GetPublicIPv6(); err == nil && pubIPv6 != "" {
		ipv6 = &pubIPv6
	}

	return &SystemInfo{
		CPUName:        cpuName,
		DiskTotal:      diskTotal,
		IPv4:           ipv4,
		IPv6:           ipv6,
		MemTotal:       memTotal,
		OS:             osName,
		KernelVersion:  kernelVersion,
		SwapTotal:      swapTotal,
		Virtualization: virtualization,
	}, nil
}

// GetSystemStatus retrieves real-time system status
// GetSystemStatus 检索真实的实时系统状态（完整修复版）
func GetSystemStatus() (*SystemStatus, error) {
	cpuPercent, _ := cpu.Percent(time.Second, false)
	cpuUsage := 0.0
	if len(cpuPercent) > 0 {
		cpuUsage = cpuPercent[0]
	}

	memInfo, _ := mem.VirtualMemory()
	memTotal, memUsed := int64(0), int64(0)
	if memInfo != nil {
		memTotal = int64(memInfo.Total)
		memUsed = int64(memInfo.Used)
	}

	memSwap, _ := mem.SwapMemory()
	swapTotal, swapUsed := int64(0), int64(0)
	if memSwap != nil {
		swapTotal = int64(memSwap.Total)
		swapUsed = int64(memSwap.Used)
	}

	loadAvgData, _ := load.Avg()
	load1, load5, load15 := 0.0, 0.0, 0.0
	if loadAvgData != nil {
		load1 = loadAvgData.Load1
		load5 = loadAvgData.Load5
		load15 = loadAvgData.Load15
	}

	diskInfo, _ := disk.Usage("/")
	diskTotal, diskUsed := int64(0), int64(0)
	if diskInfo != nil {
		diskTotal = int64(diskInfo.Total)
		diskUsed = int64(diskInfo.Used)
	}

	// 🚀 修复点 1：精准统计真正的 TCP 和 UDP 连接数
	tcpStats, _ := gopsutilnet.Connections("tcp")
	udpStats, _ := gopsutilnet.Connections("udp")
	tcpCount := len(tcpStats)
	udpCount := len(udpStats)

	// 🚀 修复点 2：双采样计算真实网络网速 (Up/Down Speed) 与总计数
	netIO1, _ := gopsutilnet.IOCounters(false)
	t1 := time.Now()
	time.Sleep(100 * time.Millisecond) // 快速采样 100 毫秒
	netIO2, _ := gopsutilnet.IOCounters(false)
	t2 := time.Now()

	var netUp, netDown, totalUp, totalDown int64
	if len(netIO1) > 0 && len(netIO2) > 0 {
		totalUp = int64(netIO2[0].BytesSent)
		totalDown = int64(netIO2[0].BytesRecv)

		// 算出时间差，换算为每秒的真实字节速率
		duration := t2.Sub(t1).Seconds()
		if duration > 0 {
			netUp = int64(float64(int64(netIO2[0].BytesSent)-int64(netIO1[0].BytesSent)) / duration)
			netDown = int64(float64(int64(netIO2[0].BytesRecv)-int64(netIO1[0].BytesRecv)) / duration)
		}
	}

	uptime, _ := host.Uptime()

	processCount := 0
	if procs, err := process.Pids(); err == nil {
		processCount = len(procs)
	}

	return &SystemStatus{
		CPUUsage:         cpuUsage,
		MemTotal:         memTotal,
		MemUsed:          memUsed,
		SwapTotal:        swapTotal,
		SwapUsed:         swapUsed,
		Load1:            load1,
		Load5:            load5,
		Load15:           load15,
		DiskTotal:        diskTotal,
		DiskUsed:         diskUsed,
		NetworkUp:        netUp,   // 真实上传网速
		NetworkDown:      netDown, // 真实下载网速
		TotalNetworkUp:   totalUp,
		TotalNetworkDown: totalDown,
		TCPConnections:   tcpCount,
		UDPConnections:   udpCount,
		Uptime:           uptime,
		ProcessCount:     processCount,
	}, nil
}

// GetPublicIPv4 retrieves public IPv4 address
func GetPublicIPv4() (string, error) {
	services := []string{
		"https://api.ipify.org",
		"https://icanhazip.com",
		"https://checkip.amazonaws.com",
		"https://ifconfig.me/ip",
		"https://ipecho.net/plain",
		"https://ipinfo.io/ip",
		"https://myexternalip.com/raw",
	}

	for _, service := range services {
		if ip, err := fetchIP(service); err == nil && isValidIPv4(ip) {
			return ip, nil
		}
	}

	// Fallback to local IP
	if localIP := getLocalIPv4(); localIP != "" && isValidIPv4(localIP) {
		return localIP, nil
	}

	return "", fmt.Errorf("failed to get public IPv4")
}

// GetPublicIPv6 retrieves public IPv6 address
func GetPublicIPv6() (string, error) {
	// Try local interface first
	if localIP := getLocalIPv6(); localIP != "" && isValidIPv6(localIP) {
		return localIP, nil
	}

	services := []string{
		"https://api6.ipify.org",
		"https://icanhazip.com",
		"https://v6.ident.me",
	}

	for _, service := range services {
		if ip, err := fetchIP(service); err == nil && isValidIPv6(ip) {
			return ip, nil
		}
	}

	return "", fmt.Errorf("failed to get public IPv6")
}

// Helper functions

func fetchIP(url string) (string, error) {
    // 设置 5 秒超时，防止某一个服务挂了导致整个程序卡住
    client := &http.Client{
        Timeout: 5 * time.Second,
    }

    resp, err := client.Get(url)
    if err != nil {
        return "", err
    }
    defer resp.Body.Close()

    if resp.StatusCode != http.StatusOK {
        return "", fmt.Errorf("bad status: %s", resp.Status)
    }

    body, err := io.ReadAll(resp.Body)
    if err != nil {
        return "", err
    }

    // 很多接口返回的 IP 会带有换行符 \n，需要裁切掉
    ip := strings.TrimSpace(string(body))
    return ip, nil
}

func getLocalIPv4() string {
	conn, err := net.Dial("udp", "8.8.8.8:80")
	if err != nil {
		return ""
	}
	defer conn.Close()
	return conn.LocalAddr().(*net.UDPAddr).IP.String()
}

func getLocalIPv6() string {
	conn, err := net.Dial("udp", "[2001:4860:4860::8888]:80")
	if err != nil {
		return ""
	}
	defer conn.Close()
	return conn.LocalAddr().(*net.UDPAddr).IP.String()
}

func isValidIPv4(ip string) bool {
	return net.ParseIP(ip) != nil && !net.ParseIP(ip).IsLoopback()
}

func isValidIPv6(ip string) bool {
	parsedIP := net.ParseIP(ip)
	if parsedIP == nil {
		return false
	}
	if !strings.Contains(ip, ":") {
		return false
	}
	if strings.HasPrefix(strings.ToLower(ip), "fe80:") {
		return false
	}
	if strings.HasPrefix(strings.ToLower(ip), "fc") || strings.HasPrefix(strings.ToLower(ip), "fd") {
		return false
	}
	if ip == "::1" || ip == "::" {
		return false
	}
	return true
}

// GetProcessUser returns the user who owns the process
func GetProcessUser(pid int) (string, error) {
	p, err := process.NewProcess(int32(pid))
	if err != nil {
		return "", err
	}
	u, err := p.Username()
	return u, err
}

// GetFileOwner returns the owner of a file
func GetFileOwner(path string) (string, string, error) {
	fi, err := os.Stat(path)
	if err != nil {
		return "", "", err
	}

	uidStr := "0"
	gidStr := "0"

	// 🚀 核心修复：通过跨平台的底层 Sys() 反射并抽取真实的 UID/GID
	if stat, ok := fi.Sys().(*syscall.Stat_t); ok {
		uidStr = strconv.FormatUint(uint64(stat.Uid), 10)
		gidStr = strconv.FormatUint(uint64(stat.Gid), 10)

		// 优雅转换：将数字 UID 翻译为真实的系统系统用户名（如 "root", "ubuntu"）
		if u, err := user.LookupId(uidStr); err == nil {
			uidStr = u.Username
		}
		// 将数字 GID 翻译为系统的组名
		if g, err := user.LookupGroupId(gidStr); err == nil {
			gidStr = g.Name
		}
	}

	return uidStr, gidStr, nil
}

// StringToUint64 converts string to uint64
func StringToUint64(s string) (uint64, error) {
	return strconv.ParseUint(s, 10, 64)
}

// StringToInt64 converts string to int64
func StringToInt64(s string) (int64, error) {
	return strconv.ParseInt(s, 10, 64)
}
