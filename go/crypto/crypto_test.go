package crypto

import (
	"encoding/base64"
	"testing"
)

// TestBase64Encode tests base64 encoding
func TestBase64Encode(t *testing.T) {
	data := []byte("test data")
	encoded := Base64Encode(data)
	expected := base64.StdEncoding.EncodeToString(data)

	if encoded != expected {
		t.Errorf("Expected %s, got %s", expected, encoded)
	}
}

// TestBase64Decode tests base64 decoding
func TestBase64Decode(t *testing.T) {
	original := "test data"
	encoded := base64.StdEncoding.EncodeToString([]byte(original))
	decoded, err := Base64Decode(encoded)

	if err != nil {
		t.Fatalf("Failed to decode: %v", err)
	}

	if string(decoded) != original {
		t.Errorf("Expected %s, got %s", original, string(decoded))
	}
}

// TestHash tests SHA256 hashing
func TestHash(t *testing.T) {
	data := "test data"
	hash := Hash(data)

	if hash == "" {
		t.Error("Hash should not be empty")
	}

	if len(hash) != 64 { // SHA256 hex encoding is 64 characters
		t.Errorf("Expected 64 characters, got %d", len(hash))
	}
}

// BenchmarkHash benchmarks SHA256 hashing
func BenchmarkHash(b *testing.B) {
	for i := 0; i < b.N; i++ {
		Hash("test data for hashing")
	}
}

// BenchmarkBase64Encode benchmarks base64 encoding
func BenchmarkBase64Encode(b *testing.B) {
	data := []byte("test data for encoding")
	for i := 0; i < b.N; i++ {
		Base64Encode(data)
	}
}
