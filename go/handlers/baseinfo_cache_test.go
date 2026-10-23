package handlers

import (
	"encoding/json"
	"strings"
	"testing"
	"time"

	"github.com/liveqte/kisama_agent/go/utils"
)

func resetBaseInfoCache() {
	baseInfoPMu.Lock()
	baseInfoP = baseInfoPFields{}
	baseInfoPReady = false
	baseInfoPMu.Unlock()

	baseInfoLocalMu.Lock()
	baseInfoLocal = baseInfoLocalFields{}
	baseInfoLocalAt = time.Time{}
	baseInfoLocalFailAt = time.Time{}
	baseInfoLocalMu.Unlock()

	baseInfoNetMu.Lock()
	baseInfoNet = baseInfoNetFields{}
	baseInfoNetAt = time.Time{}
	baseInfoNetFailAt = time.Time{}
	baseInfoNetMu.Unlock()
}

func installFakeProbes(t *testing.T, now *time.Time, counts map[string]int) {
	t.Helper()
	oldStatic, oldLocal, oldNet, oldNow := getSystemStaticFn, getSystemLocalFn, getSystemNetFn, baseInfoNowFn
	baseInfoNowFn = func() time.Time { return *now }
	getSystemStaticFn = func() *utils.SystemStaticInfo {
		counts["p"]++
		return &utils.SystemStaticInfo{
			CPUName: "test-cpu", OS: "TestOS", KernelVersion: "6.0",
			Virtualization: "Docker", Marks: []string{"root"},
		}
	}
	getSystemLocalFn = func() *utils.SystemLocalInfo {
		counts["local"]++
		return &utils.SystemLocalInfo{DiskTotal: 11, MemTotal: 22, SwapTotal: 33}
	}
	getSystemNetFn = func() *utils.SystemNetInfo {
		counts["net"]++
		ipv4, ipv6 := "1.2.3.4", "2001:db8::1"
		return &utils.SystemNetInfo{IPv4: &ipv4, IPv6: &ipv6}
	}
	t.Cleanup(func() {
		getSystemStaticFn, getSystemLocalFn, getSystemNetFn, baseInfoNowFn = oldStatic, oldLocal, oldNet, oldNow
		resetBaseInfoCache()
	})
}

func fetchAllGroups() {
	p := getBaseInfoP()
	_ = getBaseInfoLocal(p.Virtualization)
	_ = getBaseInfoNet()
}

func TestBaseInfoCachePtlCounts(t *testing.T) {
	resetBaseInfoCache()
	now := time.Unix(1000, 0)
	counts := map[string]int{}
	installFakeProbes(t, &now, counts)

	fetchAllGroups()
	fetchAllGroups()
	if counts["p"] != 1 || counts["local"] != 1 || counts["net"] != 1 {
		t.Fatalf("first window: got %+v, want p=1 local=1 net=1", counts)
	}

	now = now.Add(31 * time.Second)
	fetchAllGroups()
	if counts["p"] != 1 || counts["local"] != 2 || counts["net"] != 1 {
		t.Fatalf("after 31s: got %+v, want p=1 local=2 net=1", counts)
	}

	// Rotation only swaps credentials; P/T snapshots must not be cleared.
	InvalidateSecretCaches()
	fetchAllGroups()
	if counts["p"] != 1 || counts["local"] != 2 || counts["net"] != 1 {
		t.Fatalf("after rotation: got %+v, want no re-probe", counts)
	}

	now = now.Add(3601 * time.Second)
	fetchAllGroups()
	if counts["p"] != 1 || counts["net"] != 2 {
		t.Fatalf("after 3601s: got %+v, want p=1 net=2", counts)
	}
}

func TestBaseInfoMarksNeverNil(t *testing.T) {
	resetBaseInfoCache()
	now := time.Unix(1000, 0)
	oldStatic := getSystemStaticFn
	getSystemStaticFn = func() *utils.SystemStaticInfo {
		return &utils.SystemStaticInfo{Marks: nil}
	}
	t.Cleanup(func() {
		getSystemStaticFn = oldStatic
		resetBaseInfoCache()
	})

	p := getBaseInfoP()
	payload, err := json.Marshal(p.Marks)
	if err != nil {
		t.Fatal(err)
	}
	if string(payload) != "[]" {
		t.Fatalf("marks serialized as %s, want []", payload)
	}
	_ = now
}

func TestBaseInfoNetFailureKeepsLastSuccess(t *testing.T) {
	resetBaseInfoCache()
	now := time.Unix(1000, 0)
	counts := map[string]int{}
	installFakeProbes(t, &now, counts)

	first := getBaseInfoNet()
	if first.IPv4 == nil || *first.IPv4 != "1.2.3.4" {
		t.Fatalf("first net probe failed: %+v", first)
	}

	oldNet := getSystemNetFn
	getSystemNetFn = func() *utils.SystemNetInfo {
		counts["net"]++
		return nil
	}
	t.Cleanup(func() { getSystemNetFn = oldNet })

	now = now.Add(3601 * time.Second)
	second := getBaseInfoNet()
	if second.IPv4 == nil || *second.IPv4 != "1.2.3.4" {
		t.Fatalf("failure should keep last success: %+v", second)
	}
	if counts["net"] != 2 {
		t.Fatalf("net probes = %d, want 2", counts["net"])
	}

	// 60s backoff: another call within the window must not re-probe.
	now = now.Add(10 * time.Second)
	_ = getBaseInfoNet()
	if counts["net"] != 2 {
		t.Fatalf("backoff ignored: net probes = %d, want 2", counts["net"])
	}
}

func TestBaseInfoLocalReusesPVirtualization(t *testing.T) {
	resetBaseInfoCache()
	now := time.Unix(1000, 0)
	counts := map[string]int{}
	installFakeProbes(t, &now, counts)

	p := getBaseInfoP()
	if p.Virtualization != "Docker" {
		t.Fatalf("virtualization = %q, want Docker", p.Virtualization)
	}
	local := getBaseInfoLocal(p.Virtualization)
	if local.DiskTotal != 11 {
		t.Fatalf("disk total = %d, want 11", local.DiskTotal)
	}
}

func TestBaseInfoResponseJSONHasMarksArray(t *testing.T) {
	resetBaseInfoCache()
	now := time.Unix(1000, 0)
	counts := map[string]int{}
	installFakeProbes(t, &now, counts)

	p := getBaseInfoP()
	local := getBaseInfoLocal(p.Virtualization)
	netInfo := getBaseInfoNet()
	response := struct {
		Marks []string `json:"marks"`
		IPv4  *string  `json:"ipv4"`
	}{
		Marks: append([]string{}, p.Marks...),
		IPv4:  netInfo.IPv4,
	}
	payload, err := json.Marshal(response)
	if err != nil {
		t.Fatal(err)
	}
	if !strings.Contains(string(payload), `"marks":["root"]`) {
		t.Fatalf("unexpected payload: %s", payload)
	}
	_ = local
}
