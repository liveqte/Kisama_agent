package crypto

import (
	"crypto/aes"
	"crypto/cipher"
	"crypto/rand"
	"crypto/sha256"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"crypto/ecdsa"
	"crypto/elliptic"
	"crypto/x509"
	"encoding/pem"
	"strings"

	ecies "github.com/ecies/go"
	"github.com/liveqte/kisama_agent/logger"
)

// CryptoManager handles encryption/decryption and signature verification
type CryptoManager struct {
	ecdsaPublicKey *ecdsa.PublicKey
	eciesPublicKey *ecies.PublicKey // ECIES public key
}

// AESPayload represents the AES-GCM encrypted payload structure
type AESPayload struct {
	Nonce      string `json:"nonce"`
	Tag        string `json:"tag"`
	Ciphertext string `json:"ciphertext"`
}

// NewCryptoManager creates a new CryptoManager
func NewCryptoManager(ecdsaPubKeyStr string, eciesPublicKeyB64 string) (*CryptoManager, error) {
	manager := &CryptoManager{}

	// 解析 ECDSA 公钥（同时支持 PEM 和 压缩Base64）
	if ecdsaPubKeyStr != "" {
		pubKey, err := parseECDSAPublicKey(ecdsaPubKeyStr)
		if err != nil {
			logger.Warnf("⚠️ Failed to parse ECDSA public key: %v", err)
		} else {
			manager.ecdsaPublicKey = pubKey
		}
	}

	// Decode ECIES public key from base64
	if eciesPublicKeyB64 != "" {
		keyBytes, err := base64.StdEncoding.DecodeString(eciesPublicKeyB64)
		if err != nil {
			logger.Warnf("⚠️ Failed to decode ECIES public key: %v", err)
		} else {
			publicKey, err := ecies.NewPublicKeyFromBytes(keyBytes)
			if err != nil {
				logger.Warnf("⚠️ Failed to parse ECIES public key: %v", err)
			} else {
				manager.eciesPublicKey = publicKey
			}
		}
	}

	return manager, nil
}

// 🚀 新增：兼容 PEM 与 压缩Base64 的公钥解析函数
func parseECDSAPublicKey(keyStr string) (*ecdsa.PublicKey, error) {
	keyStr = strings.TrimSpace(keyStr)

	// 1. 如果包含 PEM 标头，按传统 PEM 格式解析
	if strings.Contains(keyStr, "-----BEGIN") {
		block, _ := pem.Decode([]byte(keyStr))
		if block == nil {
			return nil, fmt.Errorf("failed to decode PEM block")
		}
		pub, err := x509.ParsePKIXPublicKey(block.Bytes)
		if err != nil {
			return nil, fmt.Errorf("failed to parse PKIX public key: %w", err)
		}
		ecdsaPub, ok := pub.(*ecdsa.PublicKey)
		if !ok {
			return nil, fmt.Errorf("key is not an ECDSA public key")
		}
		return ecdsaPub, nil
	}

	// 2. 否则，视作 Base64 编码的压缩公钥解析
	data, err := base64.StdEncoding.DecodeString(keyStr)
	if err != nil {
		return nil, fmt.Errorf("failed to decode base64 key: %w", err)
	}

	// 压缩格式的 256 位公钥长度固定为 33 字节 (1字节无压缩标志 0x02/0x03 + 32字节 X 坐标)
	if len(data) == 33 && (data[0] == 0x02 || data[0] == 0x03) {
		// 💡 默认假设你使用的是标准的 NIST P-256 曲线 (Go 自带)
		x, y := elliptic.UnmarshalCompressed(elliptic.P256(), data)
		if x == nil {
			return nil, fmt.Errorf("failed to unmarshal compressed P-256 public key")
		}
		return &ecdsa.PublicKey{
			Curve: elliptic.P256(),
			X:     x,
			Y:     y,
		}, nil // ✅ 已修复：添加了错误返回占位
	}

	return nil, fmt.Errorf("unsupported public key format (expected PEM or 33-byte compressed Base64)")
}

// VerifySignature verifies ECDSA signature (simplified for now)
func (cm *CryptoManager) VerifySignature(nonce, timestamp, authToken string) error {
	// In production, implement proper ECDSA signature verification
	// This is a simplified version
	if nonce == "" || timestamp == "" || authToken == "" {
		return fmt.Errorf("missing signature components")
	}

	logger.Debugf("Signature verification skipped in simplified version (implement real ECDSA verification)")
	return nil
}

// EncryptResponse encrypts response data using ECIES
func (cm *CryptoManager) EncryptResponse(data interface{}, debug bool) (string, error) {
	if debug || cm.eciesPublicKey == nil {
		// Debug mode: return plain JSON
		jsonData, err := json.Marshal(data)
		if err != nil {
			return "", err
		}
		return string(jsonData), nil
	}

	// Convert data to JSON
	jsonData, err := json.Marshal(data)
	if err != nil {
		return "", fmt.Errorf("failed to marshal data: %w", err)
	}

	// Encrypt using ECIES
	ciphertext, err := ecies.Encrypt(cm.eciesPublicKey, jsonData)
	if err != nil {
		logger.Errorf("ECIES encryption failed: %v", err)
		errorData := map[string]interface{}{
			"_encrypt_error": err.Error(),
		}
		jsonError, _ := json.Marshal(errorData)
		return string(jsonError), nil
	}

	// Encode to base64
	return base64.StdEncoding.EncodeToString(ciphertext), nil
}

// DecryptData decrypts AES-256-GCM encrypted data
// Expected format: Base64(JSON.stringify({nonce, tag, ciphertext}))
func (cm *CryptoManager) DecryptData(encryptedBase64 string, keyB64 string) (string, error) {
	// Decode the raw key
	rawKey, err := base64.StdEncoding.DecodeString(keyB64)
	if err != nil {
		return "", fmt.Errorf("failed to decode key: %w", err)
	}

	if len(rawKey) != 32 {
		return "", fmt.Errorf("AES key must be exactly 32 bytes for AES-256, got %d", len(rawKey))
	}

	// Decode the encrypted payload from base64
	encryptedBytes, err := base64.StdEncoding.DecodeString(encryptedBase64)
	if err != nil {
		return "", fmt.Errorf("failed to decode encrypted data: %w", err)
	}

	// Parse JSON payload
	var payload AESPayload
	err = json.Unmarshal(encryptedBytes, &payload)
	if err != nil {
		return "", fmt.Errorf("failed to parse payload JSON: %w", err)
	}

	if payload.Nonce == "" || payload.Tag == "" || payload.Ciphertext == "" {
		return "", fmt.Errorf("missing required AES-GCM fields (nonce, tag, ciphertext)")
	}

	// Decode components from base64
	nonce, err := base64.StdEncoding.DecodeString(payload.Nonce)
	if err != nil {
		return "", fmt.Errorf("failed to decode nonce: %w", err)
	}

	tag, err := base64.StdEncoding.DecodeString(payload.Tag)
	if err != nil {
		return "", fmt.Errorf("failed to decode tag: %w", err)
	}

	ciphertext, err := base64.StdEncoding.DecodeString(payload.Ciphertext)
	if err != nil {
		return "", fmt.Errorf("failed to decode ciphertext: %w", err)
	}

	// Create decipher
	block, err := aes.NewCipher(rawKey)
	if err != nil {
		return "", fmt.Errorf("failed to create cipher: %w", err)
	}

	gcm, err := cipher.NewGCM(block)
	if err != nil {
		return "", fmt.Errorf("failed to create GCM: %w", err)
	}

	// In AES-GCM, the ciphertext must be concatenated with the authentication tag
	// Format: ciphertext || tag
	ciphertextWithTag := append(ciphertext, tag...)
	
	// Decrypt - gcm.Open expects: (dst, nonce, ciphertext||tag, additionalData)
	plaintext, err := gcm.Open(nil, nonce, ciphertextWithTag, nil)
	if err != nil {
		// Try alternative: maybe tag and ciphertext are not concatenated
		// Some implementations keep them separate, so try decrypting without concatenation
		// by using only ciphertext and hoping the tag is part of it
		plaintext, err = gcm.Open(nil, nonce, ciphertext, nil)
		if err != nil {
			return "", fmt.Errorf("decryption failed (tried both formats): %w", err)
		}
	}

	return string(plaintext), nil
}

// EncryptAES256GCM encrypts data using AES-256-GCM
func EncryptAES256GCM(plaintext string, keyB64 string) (string, error) {
	// Decode the key
	rawKey, err := base64.StdEncoding.DecodeString(keyB64)
	if err != nil {
		return "", fmt.Errorf("failed to decode key: %w", err)
	}

	if len(rawKey) != 32 {
		return "", fmt.Errorf("AES key must be exactly 32 bytes for AES-256")
	}

	// Create cipher
	block, err := aes.NewCipher(rawKey)
	if err != nil {
		return "", fmt.Errorf("failed to create cipher: %w", err)
	}

	gcm, err := cipher.NewGCM(block)
	if err != nil {
		return "", fmt.Errorf("failed to create GCM: %w", err)
	}

	// Generate nonce
	nonce := make([]byte, gcm.NonceSize())
	if _, err := io.ReadFull(rand.Reader, nonce); err != nil {
		return "", fmt.Errorf("failed to generate nonce: %w", err)
	}

	// Encrypt
	ciphertext := gcm.Seal(nil, nonce, []byte(plaintext), nil)

	// Split ciphertext and tag (last 16 bytes)
	tagStart := len(ciphertext) - 16
	actualCiphertext := ciphertext[:tagStart]
	tag := ciphertext[tagStart:]

	// Create payload
	payload := AESPayload{
		Nonce:      base64.StdEncoding.EncodeToString(nonce),
		Tag:        base64.StdEncoding.EncodeToString(tag),
		Ciphertext: base64.StdEncoding.EncodeToString(actualCiphertext),
	}

	// Marshal to JSON
	payloadJSON, err := json.Marshal(payload)
	if err != nil {
		return "", fmt.Errorf("failed to marshal payload: %w", err)
	}

	// Encode to base64
	return base64.StdEncoding.EncodeToString(payloadJSON), nil
}

// Hash generates SHA256 hash
func Hash(data string) string {
	hash := sha256.Sum256([]byte(data))
	return fmt.Sprintf("%x", hash)
}

// Base64Encode encodes data to base64
func Base64Encode(data []byte) string {
	return base64.StdEncoding.EncodeToString(data)
}

// Base64Decode decodes base64 string
func Base64Decode(data string) ([]byte, error) {
	return base64.StdEncoding.DecodeString(data)
}
