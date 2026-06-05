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

	ecies "github.com/ecies/go"
	"github.com/liveqte/kisama_agent/logger"
)

// CryptoManager handles encryption/decryption and signature verification
type CryptoManager struct {
	ecdsaPubKey   string // PEM format
	eciesPublicKey *ecies.PublicKey // ECIES public key
}

// AESPayload represents the AES-GCM encrypted payload structure
type AESPayload struct {
	Nonce      string `json:"nonce"`
	Tag        string `json:"tag"`
	Ciphertext string `json:"ciphertext"`
}

// NewCryptoManager creates a new CryptoManager
func NewCryptoManager(ecdsaPubKeyPem string, eciesPublicKeyB64 string) (*CryptoManager, error) {
	manager := &CryptoManager{
		ecdsaPubKey: ecdsaPubKeyPem,
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
