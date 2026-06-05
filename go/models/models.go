package models

import "time"

// ========== Base Response Models ==========

// BaseResponse is the base response structure
type BaseResponse struct {
	Status string `json:"status"`
}

// CountResponse response with count
type CountResponse struct {
	BaseResponse
	Count int `json:"count"`
}

// ========== System Information Models ==========

// NoiseKey represents the Noise protocol keys
type NoiseKey struct {
	Role       string `json:"role,omitempty"`
	PrivateB64 string `json:"private_b64,omitempty"`
	PublicB64  string `json:"public_b64,omitempty"`
}

// NoiseKeys represents the full noise key structure
type NoiseKeys struct {
	Control NoiseKey `json:"control"`
	Agent   NoiseKey `json:"agent"`
}

// NoiseKeyConfig represents the noise key configuration
type NoiseKeyConfig struct {
	Controller struct {
		Private string `json:"private"`
	} `json:"controller"`
	Agent struct {
		Public string `json:"public"`
	} `json:"agent"`
}

// BaseInfoResponse represents basic system information
type BaseInfoResponse struct {
	BaseResponse
	Arch           string         `json:"arch"`
	CPUCores       int            `json:"cpu_cores"`
	CPUName        string         `json:"cpu_name"`
	DiskTotal      int64          `json:"disk_total"`
	GPUName        string         `json:"gpu_name"`
	IPv4           *string        `json:"ipv4"`
	IPv6           *string        `json:"ipv6"`
	MemTotal       int64          `json:"mem_total"`
	OS             string         `json:"os"`
	KernelVersion  string         `json:"kernel_version"`
	SwapTotal      int64          `json:"swap_total"`
	Version        string         `json:"version"`
	Virtualization string         `json:"virtualization"`
	SessionKey     string         `json:"session_key"`
	NoiseKey       NoiseKeyConfig `json:"noise_key"`
}

// CPUStatus represents CPU status
type CPUStatus struct {
	Usage float64 `json:"usage"`
}

// MemoryStatus represents memory status
type MemoryStatus struct {
	Total int64 `json:"total"`
	Used  int64 `json:"used"`
}

// SwapStatus represents swap status
type SwapStatus struct {
	Total int64 `json:"total"`
	Used  int64 `json:"used"`
}

// LoadStatus represents load average
type LoadStatus struct {
	Load1  float64 `json:"load1"`
	Load5  float64 `json:"load5"`
	Load15 float64 `json:"load15"`
}

// DiskStatus represents disk status
type DiskStatus struct {
	Total int64 `json:"total"`
	Used  int64 `json:"used"`
}

// NetworkStatus represents network status
type NetworkStatus struct {
	Up       int64 `json:"up"`
	Down     int64 `json:"down"`
	TotalUp  int64 `json:"totalUp"`
	TotalDown int64 `json:"totalDown"`
}

// ConnectionStatus represents connection status
type ConnectionStatus struct {
	TCP int `json:"tcp"`
	UDP int `json:"udp"`
}

// StatusResponse represents real-time system status
type StatusResponse struct {
	BaseResponse
	CPU         CPUStatus         `json:"cpu"`
	RAM         MemoryStatus      `json:"ram"`
	Swap        SwapStatus        `json:"swap"`
	Load        LoadStatus        `json:"load"`
	Disk        DiskStatus        `json:"disk"`
	Network     NetworkStatus     `json:"network"`
	Connections ConnectionStatus  `json:"connections"`
	Uptime      int64             `json:"uptime"`
	Process     int               `json:"process"`
	Message     string            `json:"message"`
}

// ========== Command Execution Models ==========

// ExecRequest represents a command execution request
type ExecRequest struct {
	Cmd string            `json:"cmd"`
	Cwd string            `json:"cwd,omitempty"`
	Env map[string]string `json:"env,omitempty"`
}

// ExecResponse represents a command execution response
type ExecResponse struct {
	BaseResponse
	Result   string `json:"result"`
	ExitCode int    `json:"exitcode"`
	Timeout  bool   `json:"timeout"`
	Cmd      string `json:"cmd"`
}

// ========== File Models ==========

// FileInfo represents file information
type FileInfo struct {
	Name      string `json:"name"`
	Path      string `json:"path"`
	Type      string `json:"type"` // "file" or "dir"
	Size      int64  `json:"size"`
	Mtime     string `json:"mtime,omitempty"`
	Mode      string `json:"mode"`
	ModeOctal string `json:"mode_octal"`
	Owner     string `json:"owner"`
}

// AuthorityInfo represents file authority information
type AuthorityInfo struct {
	Path      string `json:"path"`
	Name      string `json:"name,omitempty"`
	Mode      string `json:"mode"`
	ModeOctal string `json:"mode_octal"`
	Type      string `json:"type,omitempty"`
	Readable  bool   `json:"readable"`
	Writable  bool   `json:"writable"`
	Executable bool   `json:"executable"`
}

// FileListRequest represents a file list request
type FileListRequest struct {
	Path      string `json:"path"`
	Recursive bool   `json:"recursive"`
}

// FileListResponse represents a file list response
type FileListResponse struct {
	BaseResponse
	Count int        `json:"count"`
	Files []FileInfo `json:"files"`
}

// FileAuthorityRequest represents a file authority query request
type FileAuthorityRequest struct {
	Paths []string `json:"paths"`
}

// FileAuthorityResponse represents a file authority response
type FileAuthorityResponse struct {
	BaseResponse
	Files []AuthorityInfo `json:"files"`
}

// FileAuthoritySetRequest represents a file authority set request
type FileAuthoritySetRequest struct {
	Permissions map[string]string `json:"permissions"`
	Recursive   bool              `json:"recursive"`
}

// FileAuthoritySetResult represents a single authority set result
type FileAuthoritySetResult struct {
	Path    string `json:"path"`
	Applied string `json:"applied"`
	Status  string `json:"status"`
}

// FileAuthoritySetResponse represents a file authority set response
type FileAuthoritySetResponse struct {
	BaseResponse
	Total   int                        `json:"total"`
	Success int                        `json:"success"`
	Results []FileAuthoritySetResult   `json:"results"`
}

// FileCatRequest represents a file content read request
type FileCatRequest struct {
	Path string `json:"path"`
}

// FileCatResponse represents a file content response
type FileCatResponse struct {
	BaseResponse
	Path     string `json:"path"`
	Content  string `json:"content"`
	Encoding string `json:"encoding"`
	IsBinary bool   `json:"is_binary"`
	Size     int64  `json:"size"`
}

// FileUploadRequest represents a file upload request
type FileUploadRequest struct {
	Path     string `json:"path"`
	Filename string `json:"filename"`
	Content  string `json:"content"` // Base64 encoded
}

// FileDeleteRequest represents a file delete request
type FileDeleteRequest struct {
	Paths []string `json:"paths"`
}

// FileDeleteResult represents a single delete result
type FileDeleteResult struct {
	Path   string `json:"path"`
	Status string `json:"status"`
}

// FileDeleteResponse represents a file delete response
type FileDeleteResponse struct {
	BaseResponse
	Results []FileDeleteResult `json:"results"`
}

// FileMoveRequest represents a file move request (map from -> to)
type FileMoveRequest map[string]string

// FileMoveResult represents a single move result
type FileMoveResult struct {
	From   string `json:"from"`
	To     string `json:"to"`
	Status string `json:"status"`
}

// FileMoveResponse represents a file move response
type FileMoveResponse struct {
	BaseResponse
	Total   int              `json:"total"`
	Success int              `json:"success"`
	Results []FileMoveResult `json:"results"`
}

// FileCopyResponse represents a file copy response
type FileCopyResponse struct {
	BaseResponse
	Total   int              `json:"total"`
	Success int              `json:"success"`
	Results []FileMoveResult `json:"results"` // Reuse struct
}

// FileMkdirRequest represents a mkdir request
type FileMkdirRequest struct {
	Path string `json:"path"`
}

// ========== Task Models ==========

// TaskLogEntry represents a task log entry
type TaskLogEntry struct {
	Timestamp string `json:"ts"`
	Cmd       string `json:"cmd"`
	Output    string `json:"output"`
	ExitCode  int    `json:"exitcode"`
	Type      string `json:"type"` // "onetime" or "cron"
	Cron      string `json:"cron,omitempty"`
	Formatted string `json:"formatted"`
}

// OneTimeTaskResponse represents onetime task list response
type OneTimeTaskResponse struct {
	BaseResponse
	Count int      `json:"count"`
	Tasks []string `json:"tasks"`
}

// OneTimeTaskSetRequest represents onetime task set request
type OneTimeTaskSetRequest []string

// ExecutedTask represents an executed task result
type ExecutedTask struct {
	Index    int    `json:"index"`
	Cmd      string `json:"cmd"`
	ExitCode int    `json:"exitcode"`
	Output   string `json:"output"`
	Status   string `json:"status"`
}

// OneTimeTaskSetResponse represents onetime task set response
type OneTimeTaskSetResponse struct {
	BaseResponse
	Count    int             `json:"count"`
	Tasks    []string        `json:"tasks"`
	Executed []ExecutedTask  `json:"executed,omitempty"`
}

// CronTaskRequest represents cron task request
type CronTaskRequest map[string]string

// CronTaskResponse represents cron task response
type CronTaskResponse struct {
	BaseResponse
	Count int               `json:"count"`
	Tasks map[string]string `json:"tasks"`
}

// TaskStatusResponse represents task status response
type TaskStatusResponse struct {
	BaseResponse
	OneTime struct {
		Pending bool `json:"pending"`
		Count   int  `json:"count"`
	} `json:"onetime"`
	Cron struct {
		Active        bool `json:"active"`
		Count         int  `json:"count"`
		CheckInterval int  `json:"check_interval"`
	} `json:"cron"`
}

// TaskLogResponse represents task log response
type TaskLogResponse struct {
	BaseResponse
	Count int            `json:"count"`
	Logs  []TaskLogEntry `json:"logs"`
}

// TaskLogSummaryResponse represents task log summary
type TaskLogSummaryResponse struct {
	BaseResponse
	OneTime struct {
		TotalLogged   int `json:"total_logged"`
		MaxCapacity   int `json:"max_capacity"`
		RecentSuccess int `json:"recent_success"`
		RecentFailed  int `json:"recent_failed"`
	} `json:"onetime"`
	Cron struct {
		TotalLogged   int `json:"total_logged"`
		MaxCapacity   int `json:"max_capacity"`
		RecentSuccess int `json:"recent_success"`
		RecentFailed  int `json:"recent_failed"`
	} `json:"cron"`
}

// ClearedLogResponse represents cleared log response
type ClearedLogResponse struct {
	BaseResponse
	Cleared string `json:"cleared"`
}

// ========== WebSocket Models ==========

// WSMessage represents a WebSocket message
type WSMessage struct {
	RequestID string `json:"request_id"`
	Type      string `json:"type"` // "input", "resize", etc.
	Data      string `json:"data"`
	Rows      int    `json:"rows,omitempty"`
	Cols      int    `json:"cols,omitempty"`
}

// ========== Internal Models ==========

// RequestContext carries request-specific data
type RequestContext struct {
	Nonce     string
	Timestamp string
	AuthToken string
	SessionID string
	StartTime time.Time
}
