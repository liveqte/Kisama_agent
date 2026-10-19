package handlers

import (
	"crypto/ecdsa"
	"crypto/elliptic"
	"crypto/rand"
	"crypto/tls"
	"crypto/x509"
	"crypto/x509/pkix"
	"io"
	"math/big"
	"net"
	"net/http"
	"net/http/httptest"
	"strings"
	"sync"
	"testing"
	"time"

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
	// ETag 不在 CORS 安全响应头列表内，预检即应声明后续会暴露哪些头
	if got := resp.Header.Get("Access-Control-Expose-Headers"); !strings.Contains(got, "ETag") {
		t.Errorf("Expose-Headers = %q, want contains ETag", got)
	}
	if got := resp.Header.Get("Access-Control-Allow-Headers"); !strings.Contains(got, "If-Match") {
		t.Errorf("Allow-Headers = %q, want contains If-Match", got)
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

// TestProxyExposesEtagAndForwardsIfMatch 验证 WebDAV 乐观锁链路在浏览器跨域场景下成立：
// If-Match 请求头透传上游；ETag 响应头透传客户端且经 Access-Control-Expose-Headers 暴露
// （ETag 不在 CORS 安全响应头列表内，缺失该头时跨域 JS 读不到，拿不到 ETag 也就无从 If-Match）。
func TestProxyExposesEtagAndForwardsIfMatch(t *testing.T) {
	var upstreamIfMatch string
	upstream := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		upstreamIfMatch = req.Header.Get("If-Match")
		w.Header().Set("ETag", `"abc123"`)
		// 上游自带的暴露头应被中转覆盖，而非透传给客户端
		w.Header().Set("Access-Control-Expose-Headers", "X-Evil")
		io.WriteString(w, `{"ok":true}`)
	}))
	t.Cleanup(upstream.Close)

	r := newProxyRouter()
	resp, _ := doProxyRequest(t, r, http.MethodPut, "/kisamaproxy/"+upstream.URL+"/dav/kisama.json", nil, map[string]string{
		"If-Match": `"old-etag"`,
		"Origin":   "https://panel.example.com",
	})

	if resp.StatusCode != http.StatusOK {
		t.Fatalf("expected 200, got %d", resp.StatusCode)
	}
	if upstreamIfMatch != `"old-etag"` {
		t.Errorf("upstream If-Match = %q, want \"old-etag\"", upstreamIfMatch)
	}
	if got := resp.Header.Get("ETag"); got != `"abc123"` {
		t.Errorf("client ETag = %q, want \"abc123\"", got)
	}
	expose := resp.Header.Get("Access-Control-Expose-Headers")
	if !strings.Contains(expose, "ETag") {
		t.Errorf("Expose-Headers = %q, want contains ETag", expose)
	}
	if strings.Contains(expose, "X-Evil") {
		t.Errorf("Expose-Headers = %q, upstream rogue value must be overridden", expose)
	}
	if got := resp.Header.Get("Access-Control-Allow-Origin"); got != "https://panel.example.com" {
		t.Errorf("Allow-Origin = %q, want echoed origin", got)
	}
}

// ============================================================================
// 上游 TLS 策略：/kisamaproxy 是透明中转，默认不替调用方校验上游证书。
// 需要严格校验时用 KISAMA_PROXY_TLS_VERIFY=true（见 proxy.go 的 proxyUpstreamTLSVerify）。
// 下面的测试显式设置开关，因此不依赖运行环境的 KISAMA_PROXY_* 变量。
// ============================================================================

// setProxyUpstreamTLSVerify 临时切换上游 TLS 校验开关与自定义信任根，测试结束自动还原
func setProxyUpstreamTLSVerify(t *testing.T, verify bool) {
	t.Helper()
	oldInsecure := kisamaProxyTransport.TLSClientConfig.InsecureSkipVerify
	oldRoots := kisamaProxyTransport.TLSClientConfig.RootCAs
	kisamaProxyTransport.TLSClientConfig.InsecureSkipVerify = !verify
	kisamaProxyTransport.TLSClientConfig.RootCAs = nil
	t.Cleanup(func() {
		kisamaProxyTransport.TLSClientConfig.InsecureSkipVerify = oldInsecure
		kisamaProxyTransport.TLSClientConfig.RootCAs = oldRoots
	})
}

// newSelfSignedTLSServer 启动一个使用指定有效期自签证书的 TLS 上游。
// SAN 同时包含 127.0.0.1（供"仅过期"场景隔离主机名错误）与一个无关键名。
func newSelfSignedTLSServer(t *testing.T, notBefore, notAfter time.Time) (*httptest.Server, *x509.Certificate) {
	t.Helper()

	key, err := ecdsa.GenerateKey(elliptic.P256(), rand.Reader)
	if err != nil {
		t.Fatalf("generate key: %v", err)
	}

	tmpl := &x509.Certificate{
		SerialNumber: big.NewInt(1),
		Subject:      pkix.Name{CommonName: "kisama-upstream.invalid"},
		NotBefore:    notBefore,
		NotAfter:     notAfter,
		KeyUsage:     x509.KeyUsageDigitalSignature | x509.KeyUsageKeyEncipherment,
		ExtKeyUsage:  []x509.ExtKeyUsage{x509.ExtKeyUsageServerAuth},
		DNSNames:     []string{"kisama-upstream.invalid"},
		IPAddresses:  []net.IP{net.ParseIP("127.0.0.1"), net.ParseIP("::1")},
	}
	der, err := x509.CreateCertificate(rand.Reader, tmpl, tmpl, &key.PublicKey, key)
	if err != nil {
		t.Fatalf("create certificate: %v", err)
	}
	leaf, err := x509.ParseCertificate(der)
	if err != nil {
		t.Fatalf("parse certificate: %v", err)
	}

	srv := httptest.NewUnstartedServer(http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		io.WriteString(w, `{"upstream":"ok"}`)
	}))
	srv.TLS = &tls.Config{Certificates: []tls.Certificate{{Certificate: [][]byte{der}, PrivateKey: key}}}
	srv.StartTLS()
	t.Cleanup(srv.Close)

	return srv, leaf
}

// TestProxyAllowsSelfSignedUpstreamByDefault 锁定透明中转定位：默认不校验上游证书，
// 自签 + 主机名不匹配的上游必须能正常转发（严格默认下会 502 "tls: failed to verify certificate"）。
func TestProxyAllowsSelfSignedUpstreamByDefault(t *testing.T) {
	setProxyUpstreamTLSVerify(t, false)
	up := newUpstream(t, true) // httptest.NewTLSServer：自签且 SAN 不含 127.0.0.1
	r := newProxyRouter()

	resp, body := doProxyRequest(t, r, http.MethodGet, "/kisamaproxy/"+up.server.URL+"/api/echo", nil, nil)
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("expected 200 for self-signed upstream, got %d body=%s", resp.StatusCode, body)
	}
	if !strings.Contains(body, `"upstream":"ok"`) {
		t.Fatalf("unexpected body: %s", body)
	}
}

// TestProxyAllowsExpiredUpstreamCertificateByDefault 复现并锁定实际报错场景：
// 上游证书已过期（"current time ... is after ..."）时，中转仍必须正常转发。
func TestProxyAllowsExpiredUpstreamCertificateByDefault(t *testing.T) {
	setProxyUpstreamTLSVerify(t, false)

	now := time.Now()
	srv, leaf := newSelfSignedTLSServer(t, now.Add(-48*time.Hour), now.Add(-24*time.Hour))
	if !leaf.NotAfter.Before(now) {
		t.Fatalf("test certificate must be expired, NotAfter=%s", leaf.NotAfter)
	}

	r := newProxyRouter()
	resp, body := doProxyRequest(t, r, http.MethodGet, "/kisamaproxy/"+srv.URL+"/api/echo", nil, nil)
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("expected 200 for expired upstream certificate, got %d body=%s", resp.StatusCode, body)
	}
	if !strings.Contains(body, `"upstream":"ok"`) {
		t.Fatalf("unexpected body: %s", body)
	}
}

// TestProxyStrictModeRejectsSelfSigned 验证 KISAMA_PROXY_TLS_VERIFY=true 的严格语义仍可用：
// 自签上游被拒绝为 502，且响应体带 x509 失败原因（本次改动不得把"可选严格"一并拆掉）。
func TestProxyStrictModeRejectsSelfSigned(t *testing.T) {
	setProxyUpstreamTLSVerify(t, true)

	// 注意：不能用 newUpstream(t, true)，它会把 InsecureSkipVerify 置回 true
	srv := httptest.NewTLSServer(http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		io.WriteString(w, `{"upstream":"ok"}`)
	}))
	t.Cleanup(srv.Close)

	r := newProxyRouter()
	resp, body := doProxyRequest(t, r, http.MethodGet, "/kisamaproxy/"+srv.URL+"/api/echo", nil, nil)

	if resp.StatusCode != http.StatusBadGateway {
		t.Fatalf("expected 502 in strict mode, got %d body=%s", resp.StatusCode, body)
	}
	if !strings.Contains(body, "x509") {
		t.Errorf("body = %q, want an x509 verification error", body)
	}
}

// TestProxyStrictModeReportsExpiredCertificate 精确复现运维看到的报错文案：
// 证书链被信任但已过期时，严格模式必须报 "certificate has expired"。
// 这条用例同时证明"过期"确实是本次修复要放行的场景之一，而非被误当成配置错误。
func TestProxyStrictModeReportsExpiredCertificate(t *testing.T) {
	setProxyUpstreamTLSVerify(t, true)

	now := time.Now()
	srv, leaf := newSelfSignedTLSServer(t, now.Add(-48*time.Hour), now.Add(-24*time.Hour))

	// 把该证书本身作为信任根，使唯一失败原因是有效期（而非未知签发者/主机名）
	pool := x509.NewCertPool()
	pool.AddCert(leaf)
	kisamaProxyTransport.TLSClientConfig.RootCAs = pool

	r := newProxyRouter()
	resp, body := doProxyRequest(t, r, http.MethodGet, "/kisamaproxy/"+srv.URL+"/api/echo", nil, nil)

	if resp.StatusCode != http.StatusBadGateway {
		t.Fatalf("expected 502, got %d body=%s", resp.StatusCode, body)
	}
	if !strings.Contains(body, "certificate has expired") {
		t.Errorf("body = %q, want 'certificate has expired' (the reported production error)", body)
	}
}

// TestResolveProxyUpstreamTLSVerify 锁定上游证书校验策略的取值与优先级：
// 缺省不校验（透明中转），KISAMA_PROXY_TLS_VERIFY 优先，
// 既有 KISAMA_PROXY_INSECURE=false 必须仍然表示"要校验"（避免静默降级）。
func TestResolveProxyUpstreamTLSVerify(t *testing.T) {
	cases := []struct {
		name      string
		tlsVerify string
		insecure  string
		want      bool
	}{
		{"缺省: 透明中转不校验", "", "", false},
		{"TLS_VERIFY=true", "true", "", true},
		{"TLS_VERIFY 大小写不敏感", "TRUE", "", true},
		{"TLS_VERIFY 非 true 即不校验", "yes", "", false},
		{"TLS_VERIFY 优先于 INSECURE", "true", "true", true},
		{"既有 INSECURE=true 等同缺省行为", "", "true", false},
		{"既有 INSECURE=false 表示要校验(防静默降级)", "", "false", true},
		{"TLS_VERIFY=false 覆盖 INSECURE=false", "false", "false", false},
		{"空白值按未设置处理", "  ", "  ", false},
	}

	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			t.Setenv("KISAMA_PROXY_TLS_VERIFY", tc.tlsVerify)
			t.Setenv("KISAMA_PROXY_INSECURE", tc.insecure)
			if got := resolveProxyUpstreamTLSVerify(); got != tc.want {
				t.Errorf("resolveProxyUpstreamTLSVerify() = %v, want %v", got, tc.want)
			}
		})
	}
}