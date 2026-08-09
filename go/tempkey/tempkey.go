package tempkey

import (
	"crypto/ecdsa"
	"crypto/elliptic"
	"crypto/rand"
	"crypto/x509"
	"encoding/hex"
	"encoding/pem"
	"fmt"
	"sync"
	"time"

	ecies "github.com/ecies/go/v2"
	"github.com/liveqte/kisama_agent/go/logger"
)

// Entry 临时密钥对 (与 Python/JS/Java 版语义一致)
type Entry struct {
	KeyID      string
	TTLSeconds int64
	CreatedAt  int64
	ExpiresAt  int64

	// 下发字段
	EcdsaPrivatePEM string
	EcdsaPublicPEM  string
	EciesPrivateHex string
	EciesPublicHex  string

	// 内存字段 (不下发)
	EcdsaVK  *ecdsa.PublicKey
	EciesPub *ecies.PublicKey
}

// Manager 临时密钥管理器: 同一时刻仅维护一份有效密钥对, 有效期内幂等, 过期自动轮换
type Manager struct {
	mu  sync.Mutex
	key *Entry
}

func New() *Manager {
	return &Manager{}
}

// GetOrCreate 有效期内幂等返回同一密钥对; 过期或不存在则重新生成
func (m *Manager) GetOrCreate(ttlHours int) (*Entry, error) {
	m.mu.Lock()
	defer m.mu.Unlock()
	if m.key != nil && time.Now().Unix() < m.key.ExpiresAt {
		return m.key, nil
	}
	entry, err := generate(ttlHours)
	if err != nil {
		return nil, err
	}
	m.key = entry
	logger.Infof("🔑 [TempKey] 新临时密钥已生成: key_id=%s, 有效期 %d 小时", entry.KeyID, ttlHours)
	return entry, nil
}

// ActiveEcdsaVK 当前有效临时密钥的 ECDSA 验签公钥 (无则返回 nil)
func (m *Manager) ActiveEcdsaVK() *ecdsa.PublicKey {
	m.mu.Lock()
	defer m.mu.Unlock()
	if m.key != nil && time.Now().Unix() < m.key.ExpiresAt {
		return m.key.EcdsaVK
	}
	return nil
}

// ActiveEciesPub 当前有效临时密钥的 ECIES 公钥 (无则返回 nil)
func (m *Manager) ActiveEciesPub() *ecies.PublicKey {
	m.mu.Lock()
	defer m.mu.Unlock()
	if m.key != nil && time.Now().Unix() < m.key.ExpiresAt {
		return m.key.EciesPub
	}
	return nil
}

func generate(ttlHours int) (*Entry, error) {
	// 1. ECDSA P-256 (secp256r1): PKCS#8 私钥 + SPKI 公钥 PEM
	priv, err := ecdsa.GenerateKey(elliptic.P256(), rand.Reader)
	if err != nil {
		return nil, fmt.Errorf("generate ecdsa key: %w", err)
	}
	privDER, err := x509.MarshalPKCS8PrivateKey(priv)
	if err != nil {
		return nil, fmt.Errorf("marshal pkcs8 private key: %w", err)
	}
	privPEM := pem.EncodeToMemory(&pem.Block{Type: "PRIVATE KEY", Bytes: privDER})
	pubDER, err := x509.MarshalPKIXPublicKey(&priv.PublicKey)
	if err != nil {
		return nil, fmt.Errorf("marshal spki public key: %w", err)
	}
	pubPEM := pem.EncodeToMemory(&pem.Block{Type: "PUBLIC KEY", Bytes: pubDER})

	// 2. ECIES secp256k1: 32字节私钥 hex(64) + 65字节未压缩公钥 hex(130)
	ep, err := ecies.GenerateKey()
	if err != nil {
		return nil, fmt.Errorf("generate ecies key: %w", err)
	}
	eciesPrivHex := fmt.Sprintf("%064x", ep.D)

	keyIDBytes := make([]byte, 8)
	if _, err := rand.Read(keyIDBytes); err != nil {
		return nil, fmt.Errorf("generate key_id: %w", err)
	}

	now := time.Now().Unix()
	return &Entry{
		KeyID:           hex.EncodeToString(keyIDBytes),
		TTLSeconds:      int64(ttlHours) * 3600,
		CreatedAt:       now,
		ExpiresAt:       now + int64(ttlHours)*3600,
		EcdsaPrivatePEM: string(privPEM),
		EcdsaPublicPEM:  string(pubPEM),
		EciesPrivateHex: eciesPrivHex,
		EciesPublicHex:  hex.EncodeToString(ep.PublicKey.Bytes(false)),
		EcdsaVK:         &priv.PublicKey,
		EciesPub:        ep.PublicKey,
	}, nil
}
