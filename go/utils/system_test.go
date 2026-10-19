package utils

import (
	"strings"
	"testing"
)

// TestIsValidIPv4 覆盖 baseinfo 的 ipv4 字段取值判定。
// 🚨 回归闸门: 纯 IPv6 主机上 api.ipify.org 等(有 AAAA 记录)返回的是 IPv6 地址,
// 旧实现 net.ParseIP(ip) != nil && !IsLoopback() 会把它判为"合法 IPv4",
// 导致 ipv4 字段被填成 IPv6 值(实际报告的问题)。
func TestIsValidIPv4(t *testing.T) {
	cases := []struct {
		name string
		in   string
		want bool
	}{
		// —— 必须拒绝: IPv6 文本(各种写法) ——
		{"v6 global compressed", "2400:cb00:2048:1::c629:d7a2", false},
		{"v6 global full", "2400:cb00:2048:0001:0000:0000:c629:d7a2", false},
		{"v6 dns64 google", "2001:4860:4860::8888", false},
		{"v6 loopback", "::1", false},
		{"v6 unspecified", "::", false},
		{"v6 link local", "fe80::1", false},
		{"v6 ula fc", "fc00::1", false},
		{"v6 ula fd", "fd12:3456:789a::1", false},
		{"v6 multicast", "ff02::1", false},
		{"v6 site local", "fec0::1", false},
		{"v6 uppercase", "2400:CB00::1", false},
		{"v4 mapped", "::ffff:192.168.1.1", false},
		{"v4 mapped public", "::ffff:8.8.8.8", false},

		// —— 必须接受: 规范 IPv4(含私网, 因为本函数也用于本机网卡回退) ——
		{"v4 public", "8.8.8.8", true},
		{"v4 public 2", "1.1.1.1", true},
		{"v4 private 192", "192.168.1.100", true},
		{"v4 private 10", "10.0.0.1", true},
		{"v4 private 172", "172.16.5.4", true},

		// —— 必须拒绝: 非公网可用的 IPv4 / 非法文本 ——
		{"v4 loopback", "127.0.0.1", false},
		{"v4 loopback /8", "127.1.2.3", false},
		{"v4 unspecified", "0.0.0.0", false},
		{"v4 multicast", "224.0.0.1", false},
		{"v4 link local", "169.254.10.20", false},
		{"empty", "", false},
		{"garbage", "not-an-ip", false},
		{"too few octets", "1.2.3", false},
		{"too many octets", "1.2.3.4.5", false},
		{"octet out of range", "256.1.1.1", false},
		{"trailing space", "8.8.8.8 ", false},
		{"hostname", "api.ipify.org", false},
	}

	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			if got := isValidIPv4(tc.in); got != tc.want {
				t.Errorf("isValidIPv4(%q) = %v, want %v", tc.in, got, tc.want)
			}
		})
	}
}

// TestIsValidIPv6 覆盖 ipv6 字段取值判定, 与 TestIsValidIPv4 对称。
func TestIsValidIPv6(t *testing.T) {
	cases := []struct {
		name string
		in   string
		want bool
	}{
		{"v6 global compressed", "2400:cb00:2048:1::c629:d7a2", true},
		{"v6 dns64 google", "2001:4860:4860::8888", true},
		{"v6 documentation", "2001:db8::1", true},

		{"v4 public", "8.8.8.8", false},
		{"v4 private", "192.168.1.1", false},
		{"v4 mapped", "::ffff:8.8.8.8", false},
		{"v6 loopback", "::1", false},
		{"v6 unspecified", "::", false},
		{"v6 link local", "fe80::1", false},
		{"v6 ula fc", "fc00::1", false},
		{"v6 ula fd", "fd12:3456::1", false},
		{"v6 multicast", "ff02::1", false},
		{"empty", "", false},
		{"garbage", "not-an-ip", false},
		{"malformed", "2001:db8:::1", false},
	}

	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			if got := isValidIPv6(tc.in); got != tc.want {
				t.Errorf("isValidIPv6(%q) = %v, want %v", tc.in, got, tc.want)
			}
		})
	}
}

// TestIPFamilyValidationIsMutuallyExclusive 固化不变量: 同一个字符串不可能同时是
// 合法 IPv4 与合法 IPv6。这是 ipv4/ipv6 字段不串台的根本保证。
func TestIPFamilyValidationIsMutuallyExclusive(t *testing.T) {
	samples := []string{
		"8.8.8.8", "0.0.0.0", "127.0.0.1", "192.168.1.1", "::ffff:8.8.8.8",
		"::1", "::", "fe80::1", "fc00::1", "ff02::1",
		"2400:cb00:2048:1::c629:d7a2", "2001:4860:4860::8888",
		"", "not-an-ip",
	}
	for _, s := range samples {
		if isValidIPv4(s) && isValidIPv6(s) {
			t.Errorf("%q was accepted as both IPv4 and IPv6", s)
		}
	}
}

// TestLocalIPProbesRespectFamily 验证本机探测不会跨 family:
// 纯 IPv6 主机上 getLocalIPv4 必须返回 ""(而不是 v6 地址), 反之亦然。
// 这里只断言 family 不变量, 不依赖运行环境是否真的有对应网络。
func TestLocalIPProbesRespectFamily(t *testing.T) {
	if ip := getLocalIPv4(); ip != "" && strings.Contains(ip, ":") {
		t.Errorf("getLocalIPv4() = %q, must never return an IPv6 literal", ip)
	}
	if ip := getLocalIPv6(); ip != "" && !strings.Contains(ip, ":") {
		t.Errorf("getLocalIPv6() = %q, must never return an IPv4 literal", ip)
	}
}
