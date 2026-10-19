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
	"sync"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/go/logger"
)

// kisamaProxyCORSHeaders 与 kpng worker.js / ng.conf 中的 CORS 头配置保持一致。
// Expose-Headers 为 Go 侧新增：ETag 不在 CORS 安全响应头白名单内，跨域 JS 不显式暴露
// 就读不到（WebDAV 乐观锁 If-Match 的前提）；Location/Content-Location/DAV/Lock-Token
// 同理，为浏览器端 WebDAV 客户端补齐。kpng 侧配置需同步补上。
var kisamaProxyCORSHeaders = map[string]string{
	"Access-Control-Allow-Methods":  "GET, POST, OPTIONS, PUT, DELETE, PROPFIND, PROPPATCH, MKCOL, COPY, MOVE, LOCK, UNLOCK, HEAD",
	"Access-Control-Allow-Headers":  "authorization,DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,x-nonce,x-timestamp,x-auth-token,x-aes-encrypted,x-file-path,x-file-name,x-chunk-id,x-total-chunks,Depth,Destination,Overwrite,If,If-Match,If-None-Match,Lock-Token,Timeout,Dav,Prefer,Brief,Compliance-Class",
	"Access-Control-Expose-Headers": "ETag, Location, Content-Location, DAV, Lock-Token",
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

// proxyUpstreamTLSVerify 决定 /kisamaproxy 是否校验上游 TLS 证书。
//
// 设计定位（Owner 决策）：/kisamaproxy 是**透明中转**——它只负责把请求原样送达到路径中
// 指定的目标（HTTP 或 HTTPS），负责的是"转发"而不是"代替调用方判断该目标的证书是否可信"。
// 上游用自签证书、证书已过期、主机名对不上、甚至目标根本就是明文 http，都属调用方与目标
// 之间的事务：中转层替调用方做信任裁决，既超出职责，也直接让"中转内网设备/自签上游"这类
// 正常用法不可用（0.4.8 起的严格默认即为此类误伤）。这与参考实现 kpng 一致
// （nginx `proxy_ssl_verify off` / worker 直连，见 docs/API.MD 第 26 节），因此**默认不校验**。
//
// 需要恢复"上游必须是公网 CA 签发且未过期"的严格语义时（例如确要防链路中间人）：
//
//	KISAMA_PROXY_TLS_VERIFY=true   → 强制校验（推荐，语义明确）
//	KISAMA_PROXY_INSECURE=false    → 同效，兼容 0.4.8 以来的既有变量语义，避免既有部署
//	                                 显式声明过 INSECURE=false 却被静默降级为不校验
//
// 两个变量都未设置时按透明中转定位处理：不校验。
var proxyUpstreamTLSVerify = resolveProxyUpstreamTLSVerify()

func resolveProxyUpstreamTLSVerify() bool {
	if v := strings.TrimSpace(os.Getenv("KISAMA_PROXY_TLS_VERIFY")); v != "" {
		return strings.EqualFold(v, "true")
	}
	if v := strings.TrimSpace(os.Getenv("KISAMA_PROXY_INSECURE")); v != "" {
		// 既有变量为反向语义: INSECURE=true 表示"豁免校验"
		return !strings.EqualFold(v, "true")
	}
	return false
}

var kisamaProxyTransport = &http.Transport{
	// 上游证书校验策略见 proxyUpstreamTLSVerify 的说明: 默认按透明中转处理(不校验),
	// 需要严格校验时用 KISAMA_PROXY_TLS_VERIFY=true 显式开启。
	TLSClientConfig:       &tls.Config{InsecureSkipVerify: !proxyUpstreamTLSVerify}, //nolint:gosec
	ResponseHeaderTimeout: 600 * time.Second,
	TLSHandshakeTimeout:   10 * time.Second,
	ExpectContinueTimeout: 5 * time.Second,
	IdleConnTimeout:       90 * time.Second,
	MaxIdleConns:          100,
}

// proxyTLSPolicyWarnOnce 保证策略提示每次进程只输出一次。
// 注意不能用包级 init(): logger.Init() 在 main() 里才执行, 而包 init 早于 main,
// 此时日志级别仍是兜底的 ERROR, WARN 会被阈值直接吞掉、任何 LOG_LEVEL 都看不到。
var proxyTLSPolicyWarnOnce sync.Once

// warnProxyUpstreamTLSPolicy 在首次实际转发时输出当前生效的上游证书策略(需 LOG_LEVEL<=2 或 DEBUG=true 可见)。
func warnProxyUpstreamTLSPolicy() {
	proxyTLSPolicyWarnOnce.Do(func() {
		if proxyUpstreamTLSVerify {
			logger.Infof("KisamaProxy 上游 TLS 校验已启用 (KISAMA_PROXY_TLS_VERIFY)")
			return
		}
		logger.Warnf("KisamaProxy 上游 TLS 校验未启用(透明中转定位): 自签/过期/域名不匹配的上游证书一律放行; 需要严格校验请设 KISAMA_PROXY_TLS_VERIFY=true")
	})
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
	warnProxyUpstreamTLSPolicy()

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