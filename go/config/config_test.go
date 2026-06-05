package config

import (
	"testing"
)

// TestConfigCreation tests configuration creation
func TestConfigCreation(t *testing.T) {
	cfg, err := New()
	if err != nil {
		t.Fatalf("Failed to create config: %v", err)
	}

	if cfg.Port <= 0 {
		t.Errorf("Port should be positive, got %d", cfg.Port)
	}

	if cfg.Host == "" {
		t.Error("Host should not be empty")
	}

	if cfg.SessionKey == "" {
		t.Error("SessionKey should not be empty")
	}
}

// TestSessionKeyGeneration tests session key generation
func TestSessionKeyGeneration(t *testing.T) {
	key1, err := GenerateSessionKey()
	if err != nil {
		t.Fatalf("Failed to generate session key: %v", err)
	}

	key2, err := GenerateSessionKey()
	if err != nil {
		t.Fatalf("Failed to generate session key: %v", err)
	}

	if key1 == key2 {
		t.Error("Generated keys should be different")
	}

	if len(key1) == 0 || len(key2) == 0 {
		t.Error("Generated keys should not be empty")
	}
}

// TestNoiseKeyGeneration tests Noise key generation
func TestNoiseKeyGeneration(t *testing.T) {
	keys, err := GenerateNoiseKeys()
	if err != nil {
		t.Fatalf("Failed to generate Noise keys: %v", err)
	}

	if keys.Control.PrivateB64 == "" || keys.Control.PublicB64 == "" {
		t.Error("Control keys should not be empty")
	}

	if keys.Agent.PrivateB64 == "" || keys.Agent.PublicB64 == "" {
		t.Error("Agent keys should not be empty")
	}
}

// TestRandomBytes tests random bytes generation
func TestRandomBytes(t *testing.T) {
	bytes1, err := GetRandomBytes(32)
	if err != nil {
		t.Fatalf("Failed to get random bytes: %v", err)
	}

	bytes2, err := GetRandomBytes(32)
	if err != nil {
		t.Fatalf("Failed to get random bytes: %v", err)
	}

	if bytes1 == bytes2 {
		t.Error("Random bytes should be different")
	}

	if len(bytes1) != 64 { // hex encoding doubles the length
		t.Errorf("Expected 64 characters, got %d", len(bytes1))
	}
}

// BenchmarkSessionKeyGeneration benchmarks session key generation
func BenchmarkSessionKeyGeneration(b *testing.B) {
	for i := 0; i < b.N; i++ {
		GenerateSessionKey()
	}
}

// BenchmarkNoiseKeyGeneration benchmarks Noise key generation
func BenchmarkNoiseKeyGeneration(b *testing.B) {
	for i := 0; i < b.N; i++ {
		GenerateNoiseKeys()
	}
}
