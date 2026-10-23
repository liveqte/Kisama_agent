//go:build linux

package utils

import (
	"os"
	"path/filepath"
	"testing"
)

type marksFixture struct {
	proc, dev, etc, run, root string
}

func newMarksFixture(t *testing.T) *marksFixture {
	t.Helper()
	base := t.TempDir()
	f := &marksFixture{
		proc: filepath.Join(base, "proc"),
		dev:  filepath.Join(base, "dev"),
		etc:  filepath.Join(base, "etc"),
		run:  filepath.Join(base, "run"),
		root: filepath.Join(base, "root"),
	}
	for _, dir := range []string{
		filepath.Join(f.proc, "self"), filepath.Join(f.proc, "1"),
		f.dev, f.etc, f.run, filepath.Join(f.root, "home", "container"),
	} {
		if err := os.MkdirAll(dir, 0o755); err != nil {
			t.Fatal(err)
		}
	}
	oldProc, oldDev, oldEtc, oldRun, oldRoot := marksProcRoot, marksDevRoot, marksEtcRoot, marksRunRoot, marksRoot
	marksProcRoot, marksDevRoot, marksEtcRoot, marksRunRoot, marksRoot = f.proc, f.dev, f.etc, f.run, f.root
	t.Cleanup(func() {
		marksProcRoot, marksDevRoot, marksEtcRoot, marksRunRoot, marksRoot = oldProc, oldDev, oldEtc, oldRun, oldRoot
	})
	return f
}

func writeFile(t *testing.T, path string, data []byte) {
	t.Helper()
	if err := os.WriteFile(path, data, 0o644); err != nil {
		t.Fatal(err)
	}
}

func TestMarksDeviceNumberDecode(t *testing.T) {
	// /dev/kvm = 10:232, /dev/fuse = 10:229 (small-device encoding 2792/2789).
	for _, tc := range []struct {
		rdev         uint64
		major, minor uint32
	}{
		{2792, 10, 232},
		{2789, 10, 229},
		{(uint64(10) << 32) | 232, 10, 232},
	} {
		if got := marksDevMajor(tc.rdev); got != tc.major {
			t.Fatalf("major(%d) = %d, want %d", tc.rdev, got, tc.major)
		}
		if got := marksDevMinor(tc.rdev); got != tc.minor {
			t.Fatalf("minor(%d) = %d, want %d", tc.rdev, got, tc.minor)
		}
	}
}

func TestMarksDeviceRejectsMissingAndRegularFile(t *testing.T) {
	f := newMarksFixture(t)
	if marksCharDeviceRW(filepath.Join(f.dev, "kvm"), 10, 232) {
		t.Fatal("missing path must not hit")
	}
	writeFile(t, filepath.Join(f.dev, "kvm"), []byte("regular"))
	if marksCharDeviceRW(filepath.Join(f.dev, "kvm"), 10, 232) {
		t.Fatal("regular file must not hit")
	}
}

func TestMarkPterodactylMountinfo(t *testing.T) {
	f := newMarksFixture(t)
	writeFile(t, filepath.Join(f.proc, "self", "mountinfo"),
		[]byte("1 2 0:1 / / rw - ext4 /dev/sda1 rw\n"+
			"3 4 0:2 /var/lib/pterodactyl/volumes/uuid /home/container rw - ext4 /dev/sda1 rw\n"))
	if !markPterodactyl() {
		t.Fatal("mountinfo strong feature should hit")
	}
}

func TestMarkPterodactylMountinfoCrossChunk(t *testing.T) {
	f := newMarksFixture(t)
	needle := []byte("/var/lib/pterodactyl/")
	prefix := make([]byte, marksChunkSize-len(needle)+3)
	for i := range prefix {
		prefix[i] = 'x'
	}
	writeFile(t, filepath.Join(f.proc, "self", "mountinfo"), append(prefix, needle...))
	if !markPterodactyl() {
		t.Fatal("needle across chunk boundary should hit")
	}
}

func TestMarkPterodactylEnvironRequiresBothKeys(t *testing.T) {
	f := newMarksFixture(t)
	writeFile(t, filepath.Join(f.proc, "self", "environ"), []byte("P_SERVER_UUID=abc\x00"))
	if markPterodactyl() {
		t.Fatal("single key must not hit")
	}
	writeFile(t, filepath.Join(f.proc, "1", "environ"),
		[]byte("P_SERVER_UUID=abc\x00P_SERVER_LOCATION=de\x00"))
	if !markPterodactyl() {
		t.Fatal("PID1 environ with both keys should hit")
	}
}

func TestMarkPterodactylWeakFallback(t *testing.T) {
	f := newMarksFixture(t)
	writeFile(t, filepath.Join(f.etc, "hostname"), []byte("19e68255-bb71-4a86-b4c8-6e328f59cdec\n"))
	writeFile(t, filepath.Join(f.etc, "passwd"), []byte("root:x:0:0:root:/root:/bin/sh\n"))
	writeFile(t, filepath.Join(f.root, ".dockerenv"), nil)
	if !markPterodactyl() {
		t.Fatal("all four weak conditions should hit")
	}
	writeFile(t, filepath.Join(f.etc, "passwd"),
		[]byte("svc:x:998:998::/home/container:/bin/sh\n"))
	if os.Geteuid() == 998 && markPterodactyl() {
		t.Fatal("existing passwd entry must block")
	}
}

func TestMarkSystemd(t *testing.T) {
	f := newMarksFixture(t)
	if markSystemd() {
		t.Fatal("empty fixture must not hit")
	}
	if err := os.MkdirAll(filepath.Join(f.run, "systemd", "system"), 0o755); err != nil {
		t.Fatal(err)
	}
	writeFile(t, filepath.Join(f.run, "systemd", "private"), nil)
	writeFile(t, filepath.Join(f.proc, "1", "comm"), []byte("systemd\n"))
	exe := filepath.Join(f.root, "usr", "bin", "systemctl")
	if err := os.MkdirAll(filepath.Dir(exe), 0o755); err != nil {
		t.Fatal(err)
	}
	writeFile(t, exe, []byte("#!/bin/sh\n"))
	if err := os.Chmod(exe, 0o755); err != nil {
		t.Fatal(err)
	}
	if !markSystemd() {
		t.Fatal("all systemd conditions should hit")
	}
	writeFile(t, filepath.Join(f.proc, "1", "comm"), []byte("bash\n"))
	if markSystemd() {
		t.Fatal("non-systemd PID1 must veto")
	}
}

func TestMarksCapEffBit(t *testing.T) {
	f := newMarksFixture(t)
	writeFile(t, filepath.Join(f.proc, "self", "status"),
		[]byte("Name:\tagent\nCapEff:\t000001ffffffffff\n"))
	if !marksCapEffBit(21) {
		t.Fatal("bit 21 should be set")
	}
	if marksCapEffBit(63) {
		t.Fatal("bit 63 should be clear")
	}
	writeFile(t, filepath.Join(f.proc, "self", "status"), []byte("CapEff:\tnot-hex\n"))
	if marksCapEffBit(21) {
		t.Fatal("malformed CapEff must not hit")
	}
}

func TestDetectMarksOrderAndEmptySlice(t *testing.T) {
	// With an empty fixture no mark hits, but the API must return a non-nil empty slice.
	newMarksFixture(t)
	marks := DetectMarks()
	if marks == nil {
		t.Fatal("DetectMarks must never return nil")
	}
	if len(marks) != 0 {
		t.Fatalf("unexpected marks: %v", marks)
	}
}
