package middleware

import (
	"crypto/ecdsa"
	"crypto/elliptic"
	"crypto/rand"
	"crypto/sha256"
	"crypto/x509"
	"encoding/base64"
	"encoding/hex"
	"encoding/pem"
	"fmt"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/go/config"
	"github.com/liveqte/kisama_agent/go/crypto"
	"github.com/liveqte/kisama_agent/go/tempkey"
)

// newAuthTestRouter 构造生产模式(非DEBUG)下的最小认证环境
func newAuthTestRouter(t *testing.T) *gin.Engine {
	router, _ := newAuthTestRouterWithKey(t)
	return router
}

func newAuthTestRouterWithKey(t *testing.T) (*gin.Engine, *ecdsa.PrivateKey) {
	t.Helper()
	gin.SetMode(gin.TestMode)

	priv, err := ecdsa.GenerateKey(elliptic.P256(), rand.Reader)
	if err != nil {
		t.Fatalf("generate ecdsa key: %v", err)
	}
	der, err := x509.MarshalPKIXPublicKey(&priv.PublicKey)
	if err != nil {
		t.Fatalf("marshal public key: %v", err)
	}
	pemStr := string(pem.EncodeToMemory(&pem.Block{Type: "PUBLIC KEY", Bytes: der}))

	cm, err := crypto.NewCryptoManager(pemStr, "")
	if err != nil {
		t.Fatalf("create crypto manager: %v", err)
	}
	cfg := &config.Config{Debug: false, TimestampWindow: 300, SessionKey: "dGVzdA=="}
	tk := tempkey.New()

	router := gin.New()
	router.Use(CORSMiddleware())
	router.Use(AuthEncryptMiddleware(cm, cfg, tk))
	router.POST("/api/exec", func(c *gin.Context) { c.JSON(200, gin.H{"ok": true}) })
	router.GET("/api/baseinfo", func(c *gin.Context) { c.JSON(200, gin.H{"ok": true}) })
	return router, priv
}

// 回归测试：伪造 Upgrade: websocket 头不得绕过认证中间件 (历史漏洞: 任意请求带该头即全量放行)
func TestUpgradeHeaderCannotBypassAuth(t *testing.T) {
	router := newAuthTestRouter(t)

	req := httptest.NewRequest(http.MethodPost, "/api/exec", nil)
	req.Header.Set("Upgrade", "websocket")
	req.Header.Set("Connection", "Upgrade")
	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	if w.Code != http.StatusUnauthorized {
		t.Fatalf("POST /api/exec with forged Upgrade header: got status %d, want 401", w.Code)
	}
}

// 回归测试：签名消息必须绑定 method+path+body 摘要 (R2)。
// 合法签名 + 原请求体 → 200；同一签名头 + 被替换的请求体 → 401。
func TestSignatureBindsMethodPathBody(t *testing.T) {
	router, priv := newAuthTestRouterWithKey(t)

	const origBody = `{"cmd":"echo hi"}`
	ts := fmt.Sprintf("%d", time.Now().Unix())
	nonce := base64.StdEncoding.EncodeToString([]byte("0123456789abcdef"))
	bodySum := sha256.Sum256([]byte(origBody))
	message := fmt.Sprintf("POST\n/api/exec\n%s\n%s\n%s", hex.EncodeToString(bodySum[:]), nonce, ts)
	digest := sha256.Sum256([]byte(message))
	sig, err := ecdsa.SignASN1(rand.Reader, priv, digest[:])
	if err != nil {
		t.Fatalf("sign: %v", err)
	}
	authToken := base64.StdEncoding.EncodeToString(sig)

	send := func(body string, want int, label string) {
		t.Helper()
		req := httptest.NewRequest(http.MethodPost, "/api/exec", strings.NewReader(body))
		req.Header.Set("x-nonce", nonce)
		req.Header.Set("x-timestamp", ts)
		req.Header.Set("x-auth-token", authToken)
		w := httptest.NewRecorder()
		router.ServeHTTP(w, req)
		if w.Code != want {
			t.Fatalf("%s: got status %d, want %d", label, w.Code, want)
		}
	}

	send(origBody, http.StatusOK, "合法签名+原请求体")
	send(`{"cmd":"evil"}`, http.StatusUnauthorized, "同签名头+被替换请求体必须 401")
}

// 回归测试：普通未认证请求仍被拦截
func TestUnauthenticatedRequestRejected(t *testing.T) {
	router := newAuthTestRouter(t)

	w := httptest.NewRecorder()
	router.ServeHTTP(w, httptest.NewRequest(http.MethodPost, "/api/exec", nil))

	if w.Code != http.StatusUnauthorized {
		t.Fatalf("POST /api/exec without auth: got status %d, want 401", w.Code)
	}
}

// 白名单路径保持匿名可达
func TestBypassPathStillAnonymous(t *testing.T) {
	router := newAuthTestRouter(t)

	w := httptest.NewRecorder()
	router.ServeHTTP(w, httptest.NewRequest(http.MethodGet, "/api/baseinfo", nil))

	if w.Code != http.StatusOK {
		t.Fatalf("GET /api/baseinfo anonymous: got status %d, want 200", w.Code)
	}
}

// 预检请求保持放行 (由 CORSMiddleware 返回 204，认证中间件不得拦截)
func TestOptionsStillAllowed(t *testing.T) {
	router := newAuthTestRouter(t)

	w := httptest.NewRecorder()
	router.ServeHTTP(w, httptest.NewRequest(http.MethodOptions, "/api/exec", nil))

	if w.Code != http.StatusNoContent {
		t.Fatalf("OPTIONS /api/exec: got status %d, want 204", w.Code)
	}
}
