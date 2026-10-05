package handlers

import (
	"crypto/ecdsa"
	"crypto/elliptic"
	"crypto/x509"
	"encoding/base64"
	"encoding/json"
	"encoding/pem"
	"net/http"
	"net/http/httptest"
	"regexp"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/go/config"
	"github.com/liveqte/kisama_agent/go/tempkey"
)

// setupTempKeyTest 构造挂载真实 GetTempKey handler 的 gin 引擎 (走 config.New 默认配置)
func setupTempKeyTest(t *testing.T) *gin.Engine {
	t.Helper()
	cfg, err := config.New()
	if err != nil {
		t.Fatalf("config.New() error: %v", err)
	}
	gin.SetMode(gin.TestMode)
	r := gin.New()
	r.GET("/api/tempkey", GetTempKey(tempkey.New(), cfg))
	return r
}

func doTempKeyJSON(t *testing.T, r *gin.Engine, url string) (int, map[string]any) {
	t.Helper()
	req := httptest.NewRequest(http.MethodGet, url, nil)
	w := httptest.NewRecorder()
	r.ServeHTTP(w, req)
	var body map[string]any
	if err := json.Unmarshal(w.Body.Bytes(), &body); err != nil {
		t.Fatalf("unmarshal response %q: %v", w.Body.String(), err)
	}
	return w.Code, body
}

func tempKeyPairs(t *testing.T, body map[string]any) (map[string]any, map[string]any) {
	t.Helper()
	ecdsaPair, ok := body["ecdsa"].(map[string]any)
	if !ok {
		t.Fatalf("response missing ecdsa object: %v", body)
	}
	eciesPair, ok := body["ecies"].(map[string]any)
	if !ok {
		t.Fatalf("response missing ecies object: %v", body)
	}
	return ecdsaPair, eciesPair
}

var (
	reHex64 = regexp.MustCompile(`^[0-9a-f]{64}$`)
	// 33 字节二进制 → base64 恰为 44 字符且无填充 (33=3*11 整除)
	reB64Point44 = regexp.MustCompile(`^[A-Za-z0-9+/]{44}$`)
)

// 默认 (无 format 参数): 行为不变 —— ECDSA PEM + ECIES hex(64/130)
func TestTempKeyDefaultFormatUnchanged(t *testing.T) {
	r := setupTempKeyTest(t)
	code, body := doTempKeyJSON(t, r, "/api/tempkey")
	if code != 200 {
		t.Fatalf("default format status = %d, want 200", code)
	}
	ecdsaPair, eciesPair := tempKeyPairs(t, body)
	if priv, _ := ecdsaPair["private_key"].(string); !isPEM(priv) {
		t.Errorf("default ecdsa.private_key should be PEM, got: %.40s", priv)
	}
	if pub, _ := ecdsaPair["public_key"].(string); !isPEM(pub) {
		t.Errorf("default ecdsa.public_key should be PEM, got: %.40s", pub)
	}
	if priv, _ := eciesPair["private_key"].(string); !reHex64.MatchString(priv) {
		t.Errorf("default ecies.private_key should be 64 hex, got: %s", priv)
	}
	if pub, _ := eciesPair["public_key"].(string); len(pub) != 130 || pub[:2] != "04" {
		t.Errorf("default ecies.public_key should be 130 hex with 04 prefix, got: %s", pub)
	}
}

// format=full 显式等价缺省
func TestTempKeyFullFormatExplicit(t *testing.T) {
	r := setupTempKeyTest(t)
	code, body := doTempKeyJSON(t, r, "/api/tempkey?format=full")
	if code != 200 {
		t.Fatalf("format=full status = %d, want 200", code)
	}
	ecdsaPair, _ := tempKeyPairs(t, body)
	if priv, _ := ecdsaPair["private_key"].(string); !isPEM(priv) {
		t.Errorf("format=full ecdsa.private_key should be PEM, got: %.40s", priv)
	}
}

// format=short: ECDSA 私钥 64hex 标量 + 双公钥 33 字节压缩点 Base64
func TestTempKeyShortFormat(t *testing.T) {
	r := setupTempKeyTest(t)
	code, body := doTempKeyJSON(t, r, "/api/tempkey?format=short")
	if code != 200 {
		t.Fatalf("format=short status = %d, want 200", code)
	}
	if body["status"] != "ok" {
		t.Errorf("status = %v, want ok", body["status"])
	}
	ecdsaPair, eciesPair := tempKeyPairs(t, body)

	priv, _ := ecdsaPair["private_key"].(string)
	if !reHex64.MatchString(priv) {
		t.Errorf("short ecdsa.private_key should be 64 hex scalar, got: %s", priv)
	}
	if pub, _ := ecdsaPair["public_key"].(string); !reB64Point44.MatchString(pub) || !isCompressedPointB64(t, pub) {
		t.Errorf("short ecdsa.public_key should be 33B compressed point base64, got: %s", pub)
	}
	if ePriv, _ := eciesPair["private_key"].(string); !reHex64.MatchString(ePriv) {
		t.Errorf("short ecies.private_key should stay 64 hex, got: %s", ePriv)
	}
	if pub, _ := eciesPair["public_key"].(string); !isCompressedPointB64(t, pub) {
		t.Errorf("short ecies.public_key should be 33B compressed point base64, got: %s", pub)
	}

	// 幂等: 同一密钥对两种 format 同取, key_id 与标量同源
	code2, body2 := doTempKeyJSON(t, r, "/api/tempkey")
	if code2 != 200 || body2["key_id"] != body["key_id"] {
		t.Fatalf("idempotency broken: key_id %v vs %v", body["key_id"], body2["key_id"])
	}
	fullEcdsa, _ := body2["ecdsa"].(map[string]any)
	pemPriv, _ := fullEcdsa["private_key"].(string)
	block, _ := pem.Decode([]byte(pemPriv))
	if block == nil {
		t.Fatalf("default PEM private key unparsable: %.40s", pemPriv)
	}
	key, err := x509.ParsePKCS8PrivateKey(block.Bytes)
	if err != nil {
		t.Fatalf("parse PKCS8: %v", err)
	}
	ecKey, ok := key.(*ecdsa.PrivateKey)
	if !ok {
		t.Fatalf("not EC key")
	}
	scalar := make([]byte, 32)
	ecKey.D.FillBytes(scalar)
	if got := hexEncode(scalar); got != priv {
		t.Errorf("short scalar %s != PEM-derived scalar %s", priv, got)
	}
	// 压缩点与 SPKI 公钥点同源
	if got := base64.StdEncoding.EncodeToString(elliptic.MarshalCompressed(elliptic.P256(), ecKey.X, ecKey.Y)); got != ecdsaPair["public_key"] {
		t.Errorf("short compressed pub %s != PEM-derived %s", ecdsaPair["public_key"], got)
	}
}

// 非法 format → 422
func TestTempKeyInvalidFormat(t *testing.T) {
	r := setupTempKeyTest(t)
	code, body := doTempKeyJSON(t, r, "/api/tempkey?format=bogus")
	if code != 422 {
		t.Fatalf("format=bogus status = %d, want 422", code)
	}
	if msg, _ := body["error"].(string); msg != "format must be 'full' or 'short'" {
		t.Errorf("422 error message = %v", body["error"])
	}
}

func isPEM(s string) bool {
	block, _ := pem.Decode([]byte(s))
	return block != nil
}

func isCompressedPointB64(t *testing.T, s string) bool {
	t.Helper()
	raw, err := base64.StdEncoding.DecodeString(s)
	if err != nil {
		return false
	}
	return len(raw) == 33 && (raw[0] == 2 || raw[0] == 3)
}

func hexEncode(b []byte) string {
	const hexDigits = "0123456789abcdef"
	out := make([]byte, 0, len(b)*2)
	for _, v := range b {
		out = append(out, hexDigits[v>>4], hexDigits[v&0x0f])
	}
	return string(out)
}
