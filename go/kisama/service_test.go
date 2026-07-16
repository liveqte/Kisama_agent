package kisama

import "testing"

func TestServiceLifecycle(t *testing.T) {
	svc, err := NewService(Options{
		Host:  "127.0.0.1",
		Port:  0,
		Debug: true,
	})
	if err != nil {
		t.Fatalf("NewService returned error: %v", err)
	}

	if err := svc.Start(); err != nil {
		t.Fatalf("Start returned error: %v", err)
	}

	if !svc.IsRunning() {
		t.Fatal("expected service to report as running")
	}

	if err := svc.Stop(); err != nil {
		t.Fatalf("Stop returned error: %v", err)
	}
}
