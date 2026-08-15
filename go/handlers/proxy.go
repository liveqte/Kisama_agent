package handlers

import (
	"crypto/tls"
	"fmt"
	"net"
	"net/http"
	"net/http/httputil"
	"net/url"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/go/logger"
)

// kisamaProxyCORSHeaders 与 kpng worker.js / ng.conf 中的 CORS 头配置保持一致
var kisamaProxyCORSHeaders = map[string]string{
	"Access-Control-Allow-Origin":  "*",
	"Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
	"Access-Control-Allow-Headers": "DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,x-nonce,x-timestamp,x-auth-token,x-aes-encrypted,x-file-path,x-file-name,x-chunk-id,x-total-chunks",
}

// normalizeProxyTarget 自动兼容并修复被压缩的单斜杠路径，与 worker.js 逐段对齐：
//   - "https:/host"  -> "https://host"
//   - "http:/host"   -> "http://host"
//   - "host/path"    -> "https://host/path"
func normalizeProxyTarget(targetPart string) string {
	switch {
	case strings.HasPrefix(targetPart, "https:/") && !strings.HasPrefix(targetPart, "https://"):
		return "https://" + targetPart[7:]
	case strings.HasPrefix(targetPart, "http:/") && !strings.HasPrefix(targetPart, "http://"):
		return "http://" + targetPart[6:]
	case !strings.HasPrefix(targetPart, "http://") && !strings.HasPrefix(targetPart, "https://"):
		return "https://" + targetPart
	default:
		return targetPart
	}
}

// proxyDirector 在基于原始 URL 字符串切片提取目标地址（防斜杠压缩变形），
// 并重写请求头，严格遵守 worker.js 逻辑：只去掉不想暴露的，保留协议必需的。
func proxyDirector(outreq *http.Request) {
	rawURI := outreq.RequestURI
	if rawURI == "" {
		rawURI = outreq.URL.RequestURI()
	}

	// 基于原始 URL 字符串切片，防止斜杠压缩变形
	const marker = "/kisamaproxy/"
	idx := strings.Index(rawURI, marker)
	if idx == -1 {
		// 理论上不可达（handler 已做拦截），置空 URL 交由 ErrorHandler 统一兜底
		outreq.URL = &url.URL{}
		return
	}

	target, err := url.Parse(normalizeProxyTarget(rawURI[idx+len(marker):]))
	if err != nil {
		outreq.URL = &url.URL{}
		return
	}

	outreq.URL = target
	outreq.Host = target.Host
	outreq.RequestURI = ""

	// 清除发送给上游的 Origin 和 Referer 头部
	outreq.Header.Del("Origin")
	outreq.Header.Del("Referer")

	// 透传真实 IP 与协议（对应 worker.js 的 CF-Connecting-IP 逻辑与 X-Forwarded-Proto）
	clientIP := proxyClientIP(outreq)
	outreq.Header.Set("X-Real-IP", clientIP)
	outreq.Header.Set("X-Forwarded-For", clientIP)
	outreq.Header.Set("X-Forwarded-Proto", target.Scheme)
}

// proxyClientIP 提取 TCP 对端真实地址（等价于 nginx $remote_addr / worker CF-Connecting-IP）
func proxyClientIP(req *http.Request) string {
	host, _, err := net.SplitHostPort(req.RemoteAddr)
	if err == nil {
		return host
	}
	return req.RemoteAddr
}

// proxyModifyResponse 清理上游可能携带的 CORS 头后再统一补齐，
// 与 worker.js 中普通 HTTP 响应（非 WebSocket）的处理逻辑一致。
func proxyModifyResponse(res *http.Response) error {
	res.Header.Del("Access-Control-Allow-Origin")
	res.Header.Del("Access-Control-Allow-Methods")
	res.Header.Del("Access-Control-Allow-Headers")
	for k, v := range kisamaProxyCORSHeaders {
		res.Header.Set(k, v)
	}
	return nil
}

// proxyErrorHandler 对应 worker.js 中 fetch 异常的统一 502 兜底
func proxyErrorHandler(rw http.ResponseWriter, req *http.Request, err error) {
	logger.Warnf("KisamaProxy upstream error: %v", err)
	rw.Header().Set("Content-Type", "text/plain; charset=utf-8")
	rw.WriteHeader(http.StatusBadGateway)
	fmt.Fprintf(rw, "Proxy Error: %v", err)
}

// kisamaProxyTransport 对应 ng.conf 的 proxy_ssl_verify off / proxy_read_timeout 600s
var kisamaProxyTransport = &http.Transport{
	TLSClientConfig:       &tls.Config{InsecureSkipVerify: true}, //nolint:gosec // proxy_ssl_verify off
	ResponseHeaderTimeout: 600 * time.Second,
	TLSHandshakeTimeout:   10 * time.Second,
	ExpectContinueTimeout: 5 * time.Second,
	IdleConnTimeout:       90 * time.Second,
	MaxIdleConns:          100,
}

// kisamaProxy 对应 kpng 的转发核心。ReverseProxy 会自动托管 101 WebSocket 升级
// （原样返回响应不经过 ModifyResponse），等价于 worker.js 的规则：「101 直接 return 原始 Response」。
var kisamaProxy = &httputil.ReverseProxy{
	Director:       proxyDirector,
	Transport:      kisamaProxyTransport,
	ModifyResponse: proxyModifyResponse,
	ErrorHandler:   proxyErrorHandler,
	FlushInterval:  -1, // 对应 ng.conf 的 proxy_buffering off
}

// ProxyHandler 是 /kisamaproxy 转发路由的处理入口，功能与 kpng 的 nginx/worker 实现保持一致。
func ProxyHandler(c *gin.Context) {
	rawURI := c.Request.RequestURI
	if rawURI == "" {
		rawURI = c.Request.URL.RequestURI()
	}

	// 1. 基础合规检查：URI 必须包含 "api"（对应 nginx $request_uri / worker pathname+search 检查）
	if !strings.Contains(rawURI, "api") {
		c.AbortWithStatus(444)
		return
	}

	// 2. 拦截并处理 OPTIONS 预检请求
	if c.Request.Method == http.MethodOptions {
		for k, v := range kisamaProxyCORSHeaders {
			c.Header(k, v)
		}
		c.Header("Access-Control-Max-Age", "1728000")
		c.Header("Content-Type", "text/plain; charset=utf-8")
		c.Header("Content-Length", "0")
		c.AbortWithStatus(http.StatusNoContent)
		return
	}

	// 3. 校验代理目标结构（对应 worker.js 的 markerIndex === -1 分支）
	if !strings.Contains(rawURI, "/kisamaproxy/") {
		c.String(http.StatusBadRequest, "Invalid Proxy URL Structure")
		return
	}

	// 4. 避免 GET/HEAD 请求携带 body，与 worker.js 的 fetchInit 逻辑一致
	if c.Request.Method == http.MethodGet || c.Request.Method == http.MethodHead {
		c.Request.Body = http.NoBody
		c.Request.ContentLength = 0
	}

	// 5. 发起真正的原生转发
	kisamaProxy.ServeHTTP(c.Writer, c.Request)
}
