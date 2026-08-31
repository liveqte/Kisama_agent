package handlers

import (
	"context"
	"crypto/tls"
	"fmt"
	"net"
	"net/http"
	"net/http/httputil"
	"net/url"
	"os"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/go/logger"
)

// kisamaProxyCORSHeaders 与 kpng worker.js / ng.conf 中的 CORS 头配置保持一致。
var kisamaProxyCORSHeaders = map[string]string{
	"Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE, PROPFIND, PROPPATCH, MKCOL, COPY, MOVE, LOCK, UNLOCK, HEAD",
	"Access-Control-Allow-Headers": "authorization,DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,x-nonce,x-timestamp,x-auth-token,x-aes-encrypted,x-file-path,x-file-name,x-chunk-id,x-total-chunks,Depth,Destination,Overwrite,If,If-Match,If-None-Match,Lock-Token,Timeout,Dav,Prefer,Brief,Compliance-Class,",
}

// webdavMethods 定义 WebDAV 专有的 HTTP 扩展方法
var webdavMethods = map[string]bool{
	"PROPFIND":  true,
	"PROPPATCH": true,
	"MKCOL":     true,
	"COPY":      true,
	"MOVE":      true,
	"LOCK":      true,
	"UNLOCK":    true,
	"REPORT":    true,
	"SEARCH":    true,
}

// isProxyTrafficAllowed 白名单安全检查：仅放行 WebDAV、含 api 的路由 以及 WebSocket 握手
func isProxyTrafficAllowed(c *gin.Context, rawURI string) bool {
	req := c.Request
	lowerURI := strings.ToLower(rawURI)

	// 1. 白名单：URL 中含有 "api"
	if strings.Contains(lowerURI, "api") {
		return true
	}

	// 2. 白名单：WebDAV 请求特征
	// 2.1 专有 WebDAV 方法 (PROPFIND, MKCOL, COPY, MOVE 等)
	if webdavMethods[req.Method] {
		return true
	}
	// 2.2 专有 WebDAV 请求头 (Depth, Destination, Lock-Token 等)
	if req.Header.Get("Depth") != "" ||
		req.Header.Get("Destination") != "" ||
		req.Header.Get("Lock-Token") != "" ||
		req.Header.Get("Overwrite") != "" ||
		req.Header.Get("If") != "" {
		return true
	}
	// 2.3 URL 路径或域名中包含 "dav"
	if strings.Contains(lowerURI, "dav") {
		return true
	}

	// 3. 白名单：WebSocket 协议升级握手（防止长连接被意外阻断）
	if strings.EqualFold(req.Header.Get("Upgrade"), "websocket") {
		return true
	}

	return false
}

// applyProxyCORSHeaders 按浏览器 CORS 校验规则写入响应头
func applyProxyCORSHeaders(c *gin.Context) {
	if origin := c.GetHeader("Origin"); origin != "" {
		c.Header("Access-Control-Allow-Origin", origin)
		c.Header("Access-Control-Allow-Credentials", "true")
		c.Header("Vary", "Origin")
	} else {
		c.Header("Access-Control-Allow-Origin", "*")
	}
	for k, v := range kisamaProxyCORSHeaders {
		c.Header(k, v)
	}
}

// normalizeProxyTarget 自动兼容并修复被压缩的单斜杠路径
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

// proxyDirector 在基于原始 URL 字符串切片提取目标地址，并重写请求头
func proxyDirector(outreq *http.Request) {
	rawURI := outreq.RequestURI
	if rawURI == "" {
		rawURI = outreq.URL.RequestURI()
	}

	const marker = "/kisamaproxy/"
	idx := strings.Index(rawURI, marker)
	if idx == -1 {
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

	origin := outreq.Header.Get("Origin")
	outreq.Header.Del("Origin")
	outreq.Header.Del("Referer")
	if origin != "" {
		*outreq = *outreq.WithContext(context.WithValue(outreq.Context(), proxyOriginCtxKey{}, origin))
	}

	clientIP := proxyClientIP(outreq)
	outreq.Header.Set("X-Real-IP", clientIP)
	outreq.Header.Set("X-Forwarded-For", clientIP)
	outreq.Header.Set("X-Forwarded-Proto", target.Scheme)
}

func proxyClientIP(req *http.Request) string {
	host, _, err := net.SplitHostPort(req.RemoteAddr)
	if err == nil {
		return host
	}
	return req.RemoteAddr
}

type proxyOriginCtxKey struct{}

func proxyModifyResponse(res *http.Response) error {
	res.Header.Del("Access-Control-Allow-Origin")
	res.Header.Del("Access-Control-Allow-Credentials")
	res.Header.Del("Access-Control-Allow-Methods")
	res.Header.Del("Access-Control-Allow-Headers")
	origin, _ := res.Request.Context().Value(proxyOriginCtxKey{}).(string)
	if origin != "" {
		res.Header.Set("Access-Control-Allow-Origin", origin)
		res.Header.Set("Access-Control-Allow-Credentials", "true")
		res.Header.Add("Vary", "Origin")
	} else {
		res.Header.Set("Access-Control-Allow-Origin", "*")
	}
	for k, v := range kisamaProxyCORSHeaders {
		res.Header.Set(k, v)
	}
	return nil
}

func proxyErrorHandler(rw http.ResponseWriter, req *http.Request, err error) {
	logger.Warnf("KisamaProxy upstream error: %v", err)
	rw.Header().Set("Content-Type", "text/plain; charset=utf-8")
	rw.WriteHeader(http.StatusBadGateway)
	fmt.Fprintf(rw, "Proxy Error: %v", err)
}

var kisamaProxyTransport = &http.Transport{
	// 🔐 安全修复：默认校验上游 TLS 证书。修复前 InsecureSkipVerify 恒为 true，
	// 中转的 HTTPS 流量 (含其携带的 Authorization 等凭证) 可被链路中间人截获/篡改。
	// 中转节点确需使用自签/无效证书时，通过环境变量 KISAMA_PROXY_INSECURE=true 显式豁免。
	TLSClientConfig:       &tls.Config{InsecureSkipVerify: strings.EqualFold(os.Getenv("KISAMA_PROXY_INSECURE"), "true")}, //nolint:gosec
	ResponseHeaderTimeout: 600 * time.Second,
	TLSHandshakeTimeout:   10 * time.Second,
	ExpectContinueTimeout: 5 * time.Second,
	IdleConnTimeout:       90 * time.Second,
	MaxIdleConns:          100,
}

var kisamaProxy = &httputil.ReverseProxy{
	Director:       proxyDirector,
	Transport:      kisamaProxyTransport,
	ModifyResponse: proxyModifyResponse,
	ErrorHandler:   proxyErrorHandler,
	FlushInterval:  -1,
}

// ProxyHandler 是 /kisamaproxy 转发路由的处理入口
func ProxyHandler(c *gin.Context) {
	rawURI := c.Request.RequestURI
	if rawURI == "" {
		rawURI = c.Request.URL.RequestURI()
	}
	logger.Debugf("ProxyHandler rawURI=%q method=%s", rawURI, c.Request.Method)

	// 1. 拦截并处理 OPTIONS 预检请求（必须置于最顶层，直接返回 204）
	if c.Request.Method == http.MethodOptions {
		applyProxyCORSHeaders(c)
		c.Header("Access-Control-Max-Age", "1728000")
		c.Header("Content-Type", "text/plain; charset=utf-8")
		c.Header("Content-Length", "0")
		c.AbortWithStatus(http.StatusNoContent)
		return
	}

	// 2. 校验代理目标结构合法性
	if !strings.Contains(rawURI, "/kisamaproxy/") {
		c.String(http.StatusBadRequest, "Invalid Proxy URL Structure")
		return
	}

	// 3. 🛡️ 白名单安全校验：非 WebDAV / 非 API 流量直接 403 拒绝
	if !isProxyTrafficAllowed(c, rawURI) {
		c.String(http.StatusForbidden, "Forbidden: Unauthorized traffic type")
		return
	}

	// 4. 避免 GET/HEAD 请求携带 body
	if c.Request.Method == http.MethodGet || c.Request.Method == http.MethodHead {
		c.Request.Body = http.NoBody
		c.Request.ContentLength = 0
	}

	// 5. 发起真正的原生转发
	kisamaProxy.ServeHTTP(c.Writer, c.Request)
}