//go:build linux

package utils

import (
	"bytes"
	"io"
	"os"
	"regexp"
	"strconv"
	"strings"
	"syscall"

	"github.com/liveqte/kisama_agent/go/logger"
)

// Root paths are variables so offline tests can point them at temporary fixtures.
var (
	marksProcRoot = "/proc"
	marksDevRoot  = "/dev"
	marksEtcRoot  = "/etc"
	marksRunRoot  = "/run"
	marksRoot     = "/"
)

const (
	marksReadLimit = 1024 * 1024
	marksChunkSize = 8192
)

var marksUUIDRe = regexp.MustCompile(`^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`)

// detectMarksLinux probes all five marks in the fixed wire order. Each probe is
// isolated: a failure only drops that mark.
func detectMarksLinux() []string {
	marks := make([]string, 0, 5)
	if markRoot() {
		marks = append(marks, "root")
	}
	if markKVM() {
		marks = append(marks, "kvm")
	}
	if markPterodactyl() {
		marks = append(marks, "pterodactyl")
	}
	if markSystemd() {
		marks = append(marks, "systemd")
	}
	if markFuse() {
		marks = append(marks, "fuse")
	}
	// Only names are logged; environ/mountinfo/passwd contents must never be logged.
	logger.Debugf("marks detected: %s", strings.Join(marks, ","))
	return marks
}

func markRoot() bool {
	return os.Geteuid() == 0 && os.Getegid() == 0
}

func markKVM() bool {
	return marksCharDeviceRW(marksDevRoot+"/kvm", 10, 232)
}

func markFuse() bool {
	if !marksCharDeviceRW(marksDevRoot+"/fuse", 10, 229) {
		return false
	}
	if marksCapEffBit(21) {
		return true
	}
	for _, relative := range []string{
		"usr/bin/fusermount3", "bin/fusermount3",
		"usr/bin/fusermount", "bin/fusermount",
	} {
		fi, err := os.Stat(marksRoot + "/" + relative)
		if err != nil {
			continue
		}
		if fi.Mode().IsRegular() && fi.Mode()&os.ModeSetuid != 0 && fi.Mode().Perm()&0111 != 0 {
			return true
		}
	}
	return false
}

func markPterodactyl() bool {
	// Strong feature 1: wings bind-mount source in mountinfo.
	if marksFileContains(marksProcRoot+"/self/mountinfo", []byte("/var/lib/pterodactyl/")) {
		return true
	}
	// Strong feature 2: both P_SERVER_* keys in self environ, then PID 1 environ.
	for _, pid := range []string{"self", "1"} {
		raw, ok := marksReadFile(marksProcRoot + "/" + pid + "/environ")
		if !ok {
			continue
		}
		hasUUID, hasLocation := false, false
		for _, entry := range bytes.Split(raw, []byte{0}) {
			if bytes.HasPrefix(entry, []byte("P_SERVER_UUID=")) {
				hasUUID = true
			}
			if bytes.HasPrefix(entry, []byte("P_SERVER_LOCATION=")) {
				hasLocation = true
			}
		}
		if hasUUID && hasLocation {
			return true
		}
	}
	// Weak fallback: all four conditions must hold.
	hostname, ok := marksReadFile(marksEtcRoot + "/hostname")
	if !ok || !marksUUIDRe.MatchString(strings.ToLower(strings.TrimSpace(string(hostname)))) {
		return false
	}
	if fi, err := os.Stat(marksRoot + "/home/container"); err != nil || !fi.IsDir() {
		return false
	}
	passwd, ok := marksReadFile(marksEtcRoot + "/passwd")
	if !ok {
		return false
	}
	euid := os.Geteuid()
	for _, line := range strings.Split(string(passwd), "\n") {
		fields := strings.Split(line, ":")
		if len(fields) > 2 {
			if uid, err := strconv.Atoi(fields[2]); err == nil && uid == euid {
				return false
			}
		}
	}
	if _, err := os.Stat(marksRoot + "/.dockerenv"); err == nil {
		return true
	}
	_, err := os.Stat(marksRunRoot + "/.containerenv")
	return err == nil
}

func markSystemd() bool {
	fi, err := os.Stat(marksRunRoot + "/systemd/system")
	if err != nil || !fi.IsDir() {
		return false
	}
	if _, err := os.Stat(marksRunRoot + "/systemd/private"); err != nil {
		if _, dbusErr := os.Stat(marksRunRoot + "/dbus/system_bus_socket"); dbusErr != nil {
			return false
		}
	}
	if !marksSystemctlLocatable() {
		return false
	}
	// PID 1 veto only when readable and clearly not systemd.
	if comm, ok := marksReadFile(marksProcRoot + "/1/comm"); ok {
		name := strings.TrimSpace(string(comm))
		if name != "" && !strings.Contains(strings.ToLower(name), "systemd") {
			return false
		}
		if name != "" {
			return true
		}
	}
	exe, err := os.Readlink(marksProcRoot + "/1/exe")
	if err == nil && exe != "" && !strings.Contains(strings.ToLower(exe), "systemd") {
		return false
	}
	return true
}

func marksCharDeviceRW(path string, major, minor uint32) bool {
	fi, err := os.Stat(path)
	if err != nil || fi.Mode()&os.ModeCharDevice == 0 {
		return false
	}
	st, ok := fi.Sys().(*syscall.Stat_t)
	if !ok {
		return false
	}
	rdev := uint64(st.Rdev)
	if marksDevMajor(rdev) != major || marksDevMinor(rdev) != minor {
		return false
	}
	f, err := os.OpenFile(path, os.O_RDWR, 0)
	if err != nil {
		return false
	}
	_ = f.Close()
	return true
}

func marksDevMajor(rdev uint64) uint32 {
	return uint32(((rdev >> 8) & 0xfff) | ((rdev >> 32) &^ 0xfff))
}

func marksDevMinor(rdev uint64) uint32 {
	return uint32((rdev & 0xff) | ((rdev >> 12) & 0xfff00))
}

func marksCapEffBit(bit uint) bool {
	raw, ok := marksReadFile(marksProcRoot + "/self/status")
	if !ok {
		return false
	}
	for _, line := range strings.Split(string(raw), "\n") {
		if strings.HasPrefix(line, "CapEff:") {
			fields := strings.Fields(line)
			if len(fields) < 2 {
				return false
			}
			value, err := strconv.ParseUint(fields[1], 16, 64)
			if err != nil {
				return false
			}
			return value&(uint64(1)<<bit) != 0
		}
	}
	return false
}

func marksSystemctlLocatable() bool {
	for _, relative := range []string{"usr/bin/systemctl", "bin/systemctl", "usr/local/bin/systemctl"} {
		if marksExecutable(marksRoot + "/" + relative) {
			return true
		}
	}
	for _, dir := range strings.Split(os.Getenv("PATH"), string(os.PathListSeparator)) {
		if dir == "" {
			continue
		}
		if marksExecutable(dir + "/systemctl") {
			return true
		}
	}
	return false
}

func marksExecutable(path string) bool {
	fi, err := os.Stat(path)
	if err != nil {
		return false
	}
	return fi.Mode().IsRegular() && fi.Mode().Perm()&0111 != 0
}

func marksReadFile(path string) ([]byte, bool) {
	f, err := os.Open(path)
	if err != nil {
		return nil, false
	}
	defer f.Close()
	data, err := io.ReadAll(io.LimitReader(f, marksReadLimit))
	if err != nil && len(data) == 0 {
		return nil, false
	}
	return data, true
}

func marksFileContains(path string, needle []byte) bool {
	f, err := os.Open(path)
	if err != nil {
		return false
	}
	defer f.Close()

	overlap := len(needle) - 1
	if overlap < 0 {
		overlap = 0
	}
	buf := make([]byte, marksChunkSize)
	previous := make([]byte, 0, marksChunkSize)
	total := 0
	for total < marksReadLimit {
		want := marksChunkSize
		if remaining := marksReadLimit - total; remaining < want {
			want = remaining
		}
		n, readErr := f.Read(buf[:want])
		if n > 0 {
			total += n
			window := make([]byte, 0, len(previous)+n)
			window = append(window, previous...)
			window = append(window, buf[:n]...)
			if bytes.Contains(window, needle) {
				return true
			}
			if len(window) > overlap {
				previous = append(previous[:0], window[len(window)-overlap:]...)
			} else {
				previous = append(previous[:0], window...)
			}
		}
		if readErr != nil {
			if readErr == io.EOF {
				break
			}
			return false
		}
		if n == 0 {
			break
		}
	}
	return false
}
