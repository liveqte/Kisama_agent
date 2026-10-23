package utils

import (
	"fmt"
	"io"
	"net"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"

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
	CPUName        string
	DiskTotal      int64
	IPv4           *string
	IPv6           *string
	MemTotal       int64
	OS             string
	KernelVersion  string
	SwapTotal      int64
	Virtualization string
	Marks          []string
}

// SystemStaticInfo is the P-level (process-static) part of baseinfo.
type SystemStaticInfo struct {
	CPUName        string
	OS             string
	KernelVersion  string
	Virtualization string
	Marks          []string
}

// SystemLocalInfo is the T-local (30s) part of baseinfo.
type SystemLocalInfo struct {
	DiskTotal int64
	MemTotal  int64
	SwapTotal int64
}

// SystemNetInfo is the T-net (3600s) part of baseinfo.
type SystemNetInfo struct {
	IPv4 *string
	IPv6 *string
}

// SystemStatus represents real-time system status
type SystemStatus struct {
	CPUUsage         float64
	MemTotal         int64
	MemUsed          int64
	SwapTotal        int64
	SwapUsed         int64
	Load1            float64
	Load5            float64
	Load15           float64
	DiskTotal        int64
	DiskUsed         int64
	NetworkUp        int64
	NetworkDown      int64
	TotalNetworkUp   int64
	TotalNetworkDown int64
	TCPConnections   int
	UDPConnections   int
	Uptime           uint64
	ProcessCount     int
}

// GetSystemInfo retrieves basic system information (compatibility wrapper:
// combines P/local/net groups; handlers use the split functions for caching).
func GetSystemInfo() (*SystemInfo, error) {
	static := GetSystemStatic()
	local := GetSystemLocal()
	netInfo := GetSystemNet()
	return &SystemInfo{
		CPUName:        static.CPUName,
		DiskTotal:      local.DiskTotal,
		IPv4:           netInfo.IPv4,
		IPv6:           netInfo.IPv6,
		MemTotal:       local.MemTotal,
		OS:             static.OS,
		KernelVersion:  static.KernelVersion,
		SwapTotal:      local.SwapTotal,
		Virtualization: static.Virtualization,
		Marks:          static.Marks,
	}, nil
}

// GetSystemStatic retrieves P-level fields: cpu/os/kernel/virtualization/marks.
// It is intended to run once per process and never be retried on failure.
func GetSystemStatic() *SystemStaticInfo {
	static := &SystemStaticInfo{Virtualization: "None", Marks: []string{}}

	cpuInfo, _ := cpu.Info()
	if len(cpuInfo) > 0 {
		static.CPUName = cpuInfo[0].ModelName
	}

	osInfo, _ := host.Info()
	if osInfo != nil {
		// 优先使用具体的发行版名称（如 ubuntu），如果没有则用大类（如 linux）兜底
		sysName := osInfo.Platform
		if sysName == "" {
			sysName = osInfo.OS
		}
		static.OS = fmt.Sprintf("%s %s", sysName, osInfo.PlatformVersion)
		static.KernelVersion = osInfo.KernelVersion
		static.Virtualization = osInfo.VirtualizationSystem
	}

	static.Marks = DetectMarks()
	return static
}

// GetSystemLocal retrieves T-local fields: disk/mem/swap totals.
func GetSystemLocal() *SystemLocalInfo {
	local := &SystemLocalInfo{}

	diskInfo, _ := disk.Usage("/")
	if diskInfo != nil {
		local.DiskTotal = int64(diskInfo.Total)
	}

	memInfo, _ := mem.VirtualMemory()
	if memInfo != nil {
		local.MemTotal = int64(memInfo.Total)
	}

	memSwap, _ := mem.SwapMemory()
	if memSwap != nil {
		local.SwapTotal = int64(memSwap.Total)
	}

	return local
}

// GetSystemNet retrieves T-net fields: public IPv4/IPv6.
func GetSystemNet() *SystemNetInfo {
	netInfo := &SystemNetInfo{}

	if pubIPv4, err := GetPublicIPv4(); err == nil && pubIPv4 != "" {
		netInfo.IPv4 = &pubIPv4
	}
	if pubIPv6, err := GetPublicIPv6(); err == nil && pubIPv6 != "" {
		netInfo.IPv6 = &pubIPv6
	}

	return netInfo
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

// getLocalIPv4 通过 udp4 探测本机默认路由上使用的 IPv4 地址。
// 显式限定 family: 纯 IPv6 主机上这里必须返回 "", 绝不能把 v6 地址当成 v4 回传。
func getLocalIPv4() string {
	conn, err := net.Dial("udp4", "8.8.8.8:80")
	if err != nil {
		return ""
	}
	defer conn.Close()
	addr, ok := conn.LocalAddr().(*net.UDPAddr)
	if !ok || addr.IP == nil {
		return ""
	}
	return addr.IP.String()
}

// getLocalIPv6 通过 udp6 探测本机默认路由上使用的 IPv6 地址。
func getLocalIPv6() string {
	conn, err := net.Dial("udp6", "[2001:4860:4860::8888]:80")
	if err != nil {
		return ""
	}
	defer conn.Close()
	addr, ok := conn.LocalAddr().(*net.UDPAddr)
	if !ok || addr.IP == nil {
		return ""
	}
	return addr.IP.String()
}

// isValidIPv4 严格判定"点分十进制 IPv4 文本"。
//
// 🚨 修复: 原实现只判断 net.ParseIP 非空且非回环, 而 net.ParseIP 对 IPv6 文本同样返回非 nil,
// 于是纯 IPv6 主机上从 api.ipify.org / icanhazip.com 等(均有 AAAA 记录)取回的 IPv6 地址
// 会被判为"合法 IPv4"并写入 baseinfo 的 ipv4 字段(ipv4 字段被填成 IPv6 值)。
// 此处要求 To4() 非空、且文本不含 ':' —— 从根上切断任何跨 family 混入
// (同时排除 "::ffff:1.2.3.4" 这类 IPv4-mapped 写法), 并过滤回环/未指定/多播/链路本地。
func isValidIPv4(ip string) bool {
	if ip == "" || strings.Contains(ip, ":") {
		return false
	}
	parsed := net.ParseIP(ip)
	if parsed == nil || parsed.To4() == nil {
		return false
	}
	return !parsed.IsLoopback() &&
		!parsed.IsUnspecified() &&
		!parsed.IsMulticast() &&
		!parsed.IsLinkLocalUnicast()
}

// isValidIPv6 严格判定"IPv6 文本"。
// 与 isValidIPv4 对称: To4() 非空即说明这是 IPv4 文本或 "::ffff:" 映射形态, 一律拒绝;
// 私有/链路本地/回环/未指定/多播改用 net.IP 谓词判定(替代原字符串前缀比较, 后者对
// fec0::/10 站点本地、大小写、压缩写法均不严谨)。
func isValidIPv6(ip string) bool {
	if ip == "" || !strings.Contains(ip, ":") {
		return false
	}
	parsed := net.ParseIP(ip)
	if parsed == nil || parsed.To4() != nil {
		return false
	}
	return !parsed.IsLoopback() &&
		!parsed.IsUnspecified() &&
		!parsed.IsMulticast() &&
		!parsed.IsLinkLocalUnicast() &&
		!parsed.IsPrivate()
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
	return platformFileOwner(fi)
}

// StringToUint64 converts string to uint64
func StringToUint64(s string) (uint64, error) {
	return strconv.ParseUint(s, 10, 64)
}

// StringToInt64 converts string to int64
func StringToInt64(s string) (int64, error) {
	return strconv.ParseInt(s, 10, 64)
}
