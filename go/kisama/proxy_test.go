package kisama

import (
	"crypto/ecdsa"
	"crypto/elliptic"
	"crypto/rand"
	"crypto/x509"
	"encoding/base64"
	"encoding/pem"
	"io"
	"net/http"
	"net/http/httptest"
	"testing"
)

// newProductionService 构造生产模式（Debug=false，认证严格模式）的服务实例，
// 并生成合法的 ECDSA/ECIES 公钥以满足配置校验。
func newProductionService(t *testing.T) *Service {
	t.Helper()

	priv, err := ecdsa.GenerateKey(elliptic.P256(), rand.Reader)
	if err != nil {
		t.Fatalf("failed to generate ECDSA key: %v", err)
	}
	pubDER, err := x509.MarshalPKIXPublicKey(&priv.PublicKey)
	if err != nil {
		t.Fatalf("failed to marshal ECDSA public key: %v", err)
	}
	ecdsaPub := pem.EncodeToMemory(&pem.Block{Type: "PUBLIC KEY", Bytes: pubDER})

	eciesBytes := make([]byte, 32)
	if _, err := rand.Read(eciesBytes); err != nil {
		t.Fatalf("failed to read random: %v", err)
	}

	svc, err := NewService(Options{
		Host:              "127.0.0.1",
		Port:              0,
		ECDSAPublicKey:    string(ecdsaPub),
		ECIESPublicKeyB64: base64.StdEncoding.EncodeToString(eciesBytes),
	})
	if err != nil {
		t.Fatalf("NewService error: %v", err)
	}
	return svc
}

// TestKisamaProxyBypassesAuth 验证 /kisamaproxy 转发器不参与本 Agent 的认证体系：
// 未携带任何认证头的请求应被直接转发到上游，而非被 401 拦截（与 kpng 纯转发语义一致）。
func TestKisamaProxyBypassesAuth(t *testing.T) {
	upstream := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		io.WriteString(w, "proxied-ok:"+r.URL.Path)
	}))
	defer upstream.Close()

	// Debug=false，生产模式（认证严格模式）
	svc := newProductionService(t)
	srv := httptest.NewServer(svc.Handler())
	defer srv.Close()

	// 1. 无认证头访问 /kisamaproxy -> 应直达上游
	resp, err := http.Get(srv.URL + "/kisamaproxy/" + upstream.URL + "/api/echo")
	if err != nil {
		t.Fatalf("proxy request error: %v", err)
	}
	body, _ := io.ReadAll(resp.Body)
	resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("expected 200 from proxy, got %d body=%s", resp.StatusCode, body)
	}
	if string(body) != "proxied-ok:/api/echo" {
		t.Errorf("proxy body = %q", body)
	}

	// 2. 对照组：未认证访问受保护 API（白名单之外）应被 401 拒绝
	resp2, err := http.Get(srv.URL + "/api/tempkey")
	if err != nil {
		t.Fatalf("control request error: %v", err)
	}
	body2, _ := io.ReadAll(resp2.Body)
	resp2.Body.Close()
	if resp2.StatusCode != http.StatusUnauthorized {
		t.Errorf("expected 401 for unauthenticated /api/tempkey, got %d body=%s", resp2.StatusCode, body2)
	}
}
