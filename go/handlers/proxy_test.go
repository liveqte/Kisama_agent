package handlers

import (
	"io"
	"net/http"
	"net/http/httptest"
	"strings"
	"sync"
	"testing"

	"github.com/gin-gonic/gin"
)

// upstreamRecorder 记录上游收到的请求信息，方便断言转发细节
type upstreamRecorder struct {
	mu              sync.Mutex
	method          string
	host            string
	path            string
	rawQuery        string
	origin          string
	referer         string
	xRealIP         string
	xForwarded      string
	xForwardedProto string
	body            string
}

type upstream struct {
	server *httptest.Server
	rec    *upstreamRecorder
}

// newUpstream 启动一个回显式上游服务，并附带一个上游 CORS 头以便验证其被清理
func newUpstream(t *testing.T, tls bool) *upstream {
	t.Helper()
	rec := &upstreamRecorder{}
	handler := func(w http.ResponseWriter, req *http.Request) {
		rec.mu.Lock()
		rec.method = req.Method
		rec.host = req.Host
		rec.path = req.URL.Path
		rec.rawQuery = req.URL.RawQuery
		rec.origin = req.Header.Get("Origin")
		rec.referer = req.Header.Get("Referer")
		rec.xRealIP = req.Header.Get("X-Real-IP")
		rec.xForwarded = req.Header.Get("X-Forwarded-For")
		rec.xForwardedProto = req.Header.Get("X-Forwarded-Proto")
		b, _ := io.ReadAll(req.Body)
		rec.body = string(b)
		rec.mu.Unlock()

		w.Header().Set("Access-Control-Allow-Origin", "http://evil.example")
		w.Header().Set("Access-Control-Allow-Methods", "GET")
		w.Header().Set("Content-Type", "application/json")
		io.WriteString(w, `{"upstream":"ok"}`)
	}

	var srv *httptest.Server
	if tls {
		srv = httptest.NewTLSServer(http.HandlerFunc(handler))
		// 🔐 生产默认已开启上游 TLS 证书校验；测试上游为自签证书，此处显式豁免
		kisamaProxyTransport.TLSClientConfig.InsecureSkipVerify = true
	} else {
		srv = httptest.NewServer(http.HandlerFunc(handler))
	}
	t.Cleanup(srv.Close)
	return &upstream{server: srv, rec: rec}
}

// newProxyRouter 构造仅挂载转发路由的 gin 引擎
func newProxyRouter() *gin.Engine {
	gin.SetMode(gin.TestMode)
	r := gin.New()
	r.Any("/kisamaproxy", ProxyHandler)
	r.Any("/kisamaproxy/*path", ProxyHandler)
	return r
}

// doProxyRequest 通过真实 HTTP 服务器发起转发请求。
// 注意：必须走真实网络栈，因为 httputil.ReverseProxy 依赖 http.CloseNotifier，
// 而 httptest.ResponseRecorder 不实现该接口。
func doProxyRequest(t *testing.T, r *gin.Engine, method, rawPath string, body io.Reader, hdr map[string]string) (*http.Response, string) {
	t.Helper()
	srv := httptest.NewServer(r)
	defer srv.Close()

	req, err := http.NewRequest(method, srv.URL+rawPath, body)
	if err != nil {
		t.Fatalf("failed to build request: %v", err)
	}
	for k, v := range hdr {
		req.Header.Set(k, v)
	}

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		t.Fatalf("proxy request failed: %v", err)
	}
	defer resp.Body.Close()
	respBody, _ := io.ReadAll(resp.Body)
	return resp, string(respBody)
}

func TestProxyForwardsGET(t *testing.T) {
	up := newUpstream(t, false)
	r := newProxyRouter()

	target := up.server.URL + "/api/echo//double?x=1&y=2"
	resp, respBody := doProxyRequest(t, r, http.MethodGet, "/kisamaproxy/"+target, nil, map[string]string{
		"Origin":  "http://client.example",
		"Referer": "http://client.example/page",
	})

	if resp.StatusCode != http.StatusOK {
		t.Fatalf("expected 200, got %d body=%s", resp.StatusCode, respBody)
	}
	if !strings.Contains(respBody, `"upstream":"ok"`) {
		t.Fatalf("unexpected body: %s", respBody)
	}

	up.rec.mu.Lock()
	defer up.rec.mu.Unlock()
	if up.rec.host != up.server.Listener.Addr().String() {
		t.Errorf("upstream Host = %q, want %q", up.rec.host, up.server.Listener.Addr().String())
	}
	if up.rec.path != "/api/echo//double" {
		t.Errorf("upstream path = %q, want preserved double slashes /api/echo//double", up.rec.path)
	}
	if up.rec.rawQuery != "x=1&y=2" {
		t.Errorf("upstream query = %q, want x=1&y=2", up.rec.rawQuery)
	}
	if up.rec.origin != "" {
		t.Errorf("upstream Origin = %q, want stripped", up.rec.origin)
	}
	if up.rec.referer != "" {
		t.Errorf("upstream Referer = %q, want stripped", up.rec.referer)
	}
	if up.rec.xRealIP == "" {
		t.Errorf("upstream X-Real-IP should be set")
	}
	if up.rec.xForwarded == "" {
		t.Errorf("upstream X-Forwarded-For should be set")
	}
	if up.rec.xForwardedProto != "http" {
		t.Errorf("upstream X-Forwarded-Proto = %q, want http (target scheme)", up.rec.xForwardedProto)
	}

	// 带 Origin 的实际响应应回显该 Origin 并开启 Allow-Credentials（带凭据跨域不被拦）
	if got := resp.Header.Get("Access-Control-Allow-Origin"); got != "http://client.example" {
		t.Errorf("response Access-Control-Allow-Origin = %q, want Origin echo", got)
	}
	if got := resp.Header.Get("Access-Control-Allow-Credentials"); got != "true" {
		t.Errorf("response Access-Control-Allow-Credentials = %q, want true", got)
	}
	if got := resp.Header.Get("Access-Control-Allow-Headers"); got != kisamaProxyCORSHeaders["Access-Control-Allow-Headers"] {
		t.Errorf("response Access-Control-Allow-Headers = %q, want kpng value", got)
	}
}

func TestProxyForwardsPOSTBody(t *testing.T) {
	up := newUpstream(t, false)
	r := newProxyRouter()

	resp, _ := doProxyRequest(t, r, http.MethodPost, "/kisamaproxy/"+up.server.URL+"/api/upload", strings.NewReader("hello-body"), nil)

	if resp.StatusCode != http.StatusOK {
		t.Fatalf("expected 200, got %d", resp.StatusCode)
	}
	up.rec.mu.Lock()
	defer up.rec.mu.Unlock()
	if up.rec.method != http.MethodPost {
		t.Errorf("upstream method = %q, want POST", up.rec.method)
	}
	if up.rec.body != "hello-body" {
		t.Errorf("upstream body = %q, want hello-body", up.rec.body)
	}
}

func TestProxyOptionsPreflight(t *testing.T) {
	r := newProxyRouter()
	resp, _ := doProxyRequest(t, r, http.MethodOptions, "/kisamaproxy/https://example.com/api", nil, nil)

	if resp.StatusCode != http.StatusNoContent {
		t.Fatalf("expected 204, got %d", resp.StatusCode)
	}
	if got := resp.Header.Get("Access-Control-Allow-Origin"); got != "*" {
		t.Errorf("Allow-Origin = %q, want *", got)
	}
	if got := resp.Header.Get("Access-Control-Allow-Methods"); got != "GET, POST, OPTIONS, PUT, DELETE, PROPFIND, PROPPATCH, MKCOL, COPY, MOVE, LOCK, UNLOCK, HEAD" {
		t.Errorf("Allow-Methods = %q", got)
	}
	if got := resp.Header.Get("Access-Control-Max-Age"); got != "1728000" {
		t.Errorf("Max-Age = %q, want 1728000", got)
	}
}

// TestProxyForwardsNonAPIPath 验证 /kisamaproxy 对不含 "api" 的路径同样放行转发——
// 用于 WebDAV 等后端（GET/PUT/DELETE 访问 /dav/... 等），不再受 "api" 子串前置条件限制。
func TestProxyForwardsNonAPIPath(t *testing.T) {
	up := newUpstream(t, false)
	r := newProxyRouter()
	target := up.server.URL + "/dav/kisama/kisama.json"
	resp, respBody := doProxyRequest(t, r, http.MethodGet, "/kisamaproxy/"+target, nil, nil)
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("expected 200 for non-api path, got %d body=%s", resp.StatusCode, respBody)
	}
}

func TestProxyInvalidURLStructure(t *testing.T) {
	r := newProxyRouter()
	// 含 "api" 但缺少 /kisamaproxy/ 标志位（对应 worker.js 的 markerIndex === -1 分支）
	resp, respBody := doProxyRequest(t, r, http.MethodGet, "/kisamaproxy?api=1", nil, nil)
	if resp.StatusCode != http.StatusBadRequest {
		t.Fatalf("expected 400, got %d", resp.StatusCode)
	}
	if respBody != "Invalid Proxy URL Structure" {
		t.Errorf("body = %q, want Invalid Proxy URL Structure", respBody)
	}
}

func TestProxyUpstreamError502(t *testing.T) {
	r := newProxyRouter()
	resp, respBody := doProxyRequest(t, r, http.MethodGet, "/kisamaproxy/http://127.0.0.1:1/api/x", nil, nil)
	if resp.StatusCode != http.StatusBadGateway {
		t.Fatalf("expected 502, got %d", resp.StatusCode)
	}
	if !strings.HasPrefix(respBody, "Proxy Error: ") {
		t.Errorf("body = %q, want prefix Proxy Error: ", respBody)
	}
}

func TestProxySingleSlashNormalization(t *testing.T) {
	up := newUpstream(t, true) // TLS 上游，验证 proxy_ssl_verify off
	r := newProxyRouter()
	host := up.server.Listener.Addr().String()
	target := "https:/" + host + "/api/echo"

	resp, respBody := doProxyRequest(t, r, http.MethodGet, "/kisamaproxy/"+target, nil, nil)

	if resp.StatusCode != http.StatusOK {
		t.Fatalf("expected 200, got %d body=%s", resp.StatusCode, respBody)
	}
	up.rec.mu.Lock()
	defer up.rec.mu.Unlock()
	if up.rec.path != "/api/echo" {
		t.Errorf("upstream path = %q, want /api/echo", up.rec.path)
	}
	if up.rec.xForwardedProto != "https" {
		t.Errorf("upstream X-Forwarded-Proto = %q, want https", up.rec.xForwardedProto)
	}
}

func TestProxyAddsHTTPSForBareHost(t *testing.T) {
	up := newUpstream(t, true)
	r := newProxyRouter()
	host := up.server.Listener.Addr().String()

	// 无协议前缀时自动补全为 https://（与 worker.js 一致），这里用 TLS 上游验证
	resp, respBody := doProxyRequest(t, r, http.MethodGet, "/kisamaproxy/"+host+"/api/echo", nil, nil)
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("expected 200, got %d body=%s", resp.StatusCode, respBody)
	}
}

func TestProxyGETNoBodySent(t *testing.T) {
	up := newUpstream(t, false)
	r := newProxyRouter()

	resp, _ := doProxyRequest(t, r, http.MethodGet, "/kisamaproxy/"+up.server.URL+"/api/echo", strings.NewReader("should-not-be-sent"), nil)
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("expected 200, got %d", resp.StatusCode)
	}
	up.rec.mu.Lock()
	defer up.rec.mu.Unlock()
	if up.rec.body != "" {
		t.Errorf("upstream body = %q, want empty for GET", up.rec.body)
	}
}
// TestProxyRejectsUnauthorizedTraffic 验证不在白名单内的普通请求被 403 拒绝
func TestProxyRejectsUnauthorizedTraffic(t *testing.T) {
	r := newProxyRouter()
	
	// 既不含 "api"，也不含 "dav"，也没有 WebDAV 头部
	target := "https://example.com/some/random/file.txt"
	resp, respBody := doProxyRequest(t, r, http.MethodGet, "/kisamaproxy/"+target, nil, nil)

	if resp.StatusCode != http.StatusForbidden {
		t.Fatalf("expected 403 Forbidden, got %d body=%s", resp.StatusCode, respBody)
	}
	if !strings.Contains(respBody, "Forbidden: Unauthorized traffic type") {
		t.Errorf("unexpected body: %q", respBody)
	}
}

// TestProxyAllowsWebDAVByHeader 验证不含 api/dav 关键字但带有 Depth 头部的 WebDAV 请求能被放行
func TestProxyAllowsWebDAVByHeader(t *testing.T) {
	up := newUpstream(t, false)
	r := newProxyRouter()

	target := up.server.URL + "/files/notes.txt"
	resp, _ := doProxyRequest(t, r, http.MethodGet, "/kisamaproxy/"+target, nil, map[string]string{
		"Depth": "0",
	})

	if resp.StatusCode != http.StatusOK {
		t.Fatalf("expected 200 for WebDAV header request, got %d", resp.StatusCode)
	}
}