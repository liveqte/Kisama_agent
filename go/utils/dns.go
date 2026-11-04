package utils

// 内置加密 DNS (DoH): KISAMA_DNS=on 启用 (docs/API.MD 第十八节)。
//
// 出站域名解析统一走 DNS-over-HTTPS JSON API, 防御本地 DNS 污染/劫持:
//   - 覆盖面: go 端出站点为 fetchIP 的 http 客户端与 /kisamaproxy 上游
//     (handlers.kisamaProxyTransport), 二者均挂载 SecureDialContext;
//     未来 argo-go 等出站模块应统一经 SecureDialContext 挂载自动受益。
//   - 服务器链: 223.5.5.5(阿里) → 1.1.1.1(Cloudflare) → 8.8.8.8(Google), 可用
//     KISAMA_DOH_SERVERS 覆盖; 全部失败回落系统解析并限频告警 (可用性优先)。
//   - 缓存: 按 (主机, 地址族) 记忆应答, TTL 取应答值截断 [30,600]s, NXDOMAIN 负缓存
//     60s, 单服务器请求失败退避 60s; 同键并发解析经 in-flight 去重 (single-flight)。
//   - 安全: DoH 请求直连字面量 IP (显式 Proxy: nil, 不经环境代理), TLS 证书校验
//     不降级; 不新增监听面/端点, 默认关闭 (off 时不做任何事)。

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net"
	"net/http"
	"net/url"
	"os"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/liveqte/kisama_agent/go/config"
	"github.com/liveqte/kisama_agent/go/logger"
	"golang.org/x/net/idna"
)

// dohServersDefault DoH 服务器链缺省值 (KISAMA_DOH_SERVERS 可覆盖)。
var dohServersDefault = []string{
	"https://223.5.5.5/resolve", // 阿里 DoH (国内直连快)
	"https://1.1.1.1/dns-query", // Cloudflare DoH
	"https://8.8.8.8/resolve",   // Google DoH
}

const (
	dohQueryTimeout  = 3 * time.Second  // 单 DoH 请求超时
	dohTTLMin        = 30               // 应答 TTL 截断下限(秒)
	dohTTLMax        = 600              // 应答 TTL 截断上限(秒)
	dohNegativeTTL   = 60               // NXDOMAIN 负缓存(秒)
	dohServerBackoff = 60               // 单服务器请求失败退避(秒)
	dohWarnInterval  = 300              // 回落系统解析的告警限频(秒)
)

// resolveDnsMode 每次读 env (对齐 handlers.resolveProxyUpstreamTLSVerify 的风格,
// 便于 t.Setenv 表驱动测试): off=系统解析 (默认); on=出站解析走 DoH。
func resolveDnsMode() string {
	return strings.ToLower(strings.TrimSpace(os.Getenv("KISAMA_DNS")))
}

// resolveDohServers 解析服务器链: KISAMA_DOH_SERVERS 逗号/空白分隔, 去尾斜杠;
// 未设置或全非法时回退缺省链。
func resolveDohServers() []string {
	var servers []string
	for _, s := range strings.FieldsFunc(os.Getenv("KISAMA_DOH_SERVERS"), func(r rune) bool {
		return r == ',' || r == ' ' || r == '\t' || r == '\r' || r == '\n'
	}) {
		if s = strings.TrimRight(strings.TrimSpace(s), "/"); s != "" {
			servers = append(servers, s)
		}
	}
	if len(servers) == 0 {
		return dohServersDefault
	}
	return servers
}

// ---------------- 缓存与 single-flight ----------------

type dnsCacheKey struct {
	host   string
	family byte // 0=不限 4=仅 IPv4 6=仅 IPv6
}

type dnsCacheEntry struct {
	ips    []string
	expire time.Time
}

type dnsCall struct {
	wg  sync.WaitGroup
	ips []string
	ok  bool // false=DoH 全部失败 (调用方回落系统); true+空 ips=明确无记录
}

var (
	dnsMu        sync.Mutex
	dnsCache     = map[dnsCacheKey]*dnsCacheEntry{}
	dnsInflight  = map[dnsCacheKey]*dnsCall{}
	dnsFailUntil []time.Time // 与服务器链按下标对应, 惰性扩容
	dnsLastWarn  time.Time
	dnsNowFn     = time.Now      // 测试注入点
	dnsQueryFn   = dohQueryBytes // 测试注入点: (server, name, rtype) -> body
)

// resolveHost 经 DoH 解析域名, 返回按优先级排序的 IP 列表。
// ok=false 表示 DoH 服务器全部失败 (调用方应回落系统解析);
// ok=true 且 ips 为空表示明确无记录 (NXDOMAIN/NODATA, 不回落, 防污染"复活")。
func resolveHost(ctx context.Context, host string, family int) ([]string, bool) {
	key := dnsCacheKey{host: host, family: byte(family)}
	now := dnsNowFn()
	dnsMu.Lock()
	if ent, hit := dnsCache[key]; hit && now.Before(ent.expire) {
		ips := append([]string(nil), ent.ips...)
		dnsMu.Unlock()
		return ips, true
	}
	if call, running := dnsInflight[key]; running {
		dnsMu.Unlock()
		call.wg.Wait()
		return call.ips, call.ok
	}
	call := &dnsCall{}
	call.wg.Add(1)
	dnsInflight[key] = call
	dnsMu.Unlock()

	ips, ok, ttl := dohResolveAll(ctx, host, family)

	dnsMu.Lock()
	defer dnsMu.Unlock()
	if ok && len(ips) > 0 {
		if ttl < dohTTLMin {
			ttl = dohTTLMin
		}
		if ttl > dohTTLMax {
			ttl = dohTTLMax
		}
		dnsCache[key] = &dnsCacheEntry{ips: append([]string(nil), ips...), expire: now.Add(time.Duration(ttl) * time.Second)}
	} else if ok {
		dnsCache[key] = &dnsCacheEntry{expire: now.Add(dohNegativeTTL * time.Second)}
	} // 'error' 不缓存: 单服务器退避已防抖, 下次解析立即重试
	call.ips, call.ok = ips, ok
	delete(dnsInflight, key)
	call.wg.Done()
	return ips, ok
}

// ---------------- DoH 查询 ----------------

type dohAnswer struct {
	Type int    `json:"type"`
	TTL  int    `json:"TTL"`
	Data string `json:"data"`
}

type dohResponse struct {
	Status int         `json:"Status"`
	Answer []dohAnswer `json:"Answer"`
}

// dohResolveAll 按服务器链查 A/AAAA, 返回 (ips, ok, minTTL)。
func dohResolveAll(ctx context.Context, host string, family int) ([]string, bool, int) {
	type record struct{ rtype, ver int }
	var want []record
	if family == 0 || family == 4 {
		want = append(want, record{1, 4}) // A
	}
	if family == 0 || family == 6 {
		want = append(want, record{28, 6}) // AAAA
	}
	var v4, v6 []string
	okAny, nxAny, errored := false, false, false
	minTTL := dohTTLMax
	for _, w := range want {
		ips, ttl, status, err := dohQueryChain(ctx, host, w.rtype)
		switch {
		case err != nil:
			errored = true
		case status == 3 || (status == 0 && len(ips) == 0):
			nxAny = true // NXDOMAIN 与 NODATA 同按"明确无记录"处理
		default:
			okAny = true
			if w.ver == 4 {
				v4 = ips
			} else {
				v6 = ips
			}
			if ttl < minTTL {
				minTTL = ttl
			}
		}
	}
	if okAny {
		return orderDnsAddresses(v6, v4), true, minTTL
	}
	if nxAny && !errored {
		return nil, true, 0
	}
	return nil, false, 0
}

// dohQueryChain 按服务器链顺序查询单记录类型: 网络级失败退避 60s 并换下一台,
// SERVFAIL 等服务端错误仅换台不退避; 全部失败返回 err。
func dohQueryChain(ctx context.Context, host string, rtype int) ([]string, int, int, error) {
	name := toAsciiHostname(host)
	servers := resolveDohServers()
	dnsMu.Lock()
	for len(dnsFailUntil) < len(servers) {
		dnsFailUntil = append(dnsFailUntil, time.Time{})
	}
	dnsMu.Unlock()
	for i, server := range servers {
		dnsMu.Lock()
		skip := dnsNowFn().Before(dnsFailUntil[i])
		dnsMu.Unlock()
		if skip {
			continue
		}
		body, err := dnsQueryFn(server, name, rtype)
		if err != nil {
			dnsMu.Lock()
			dnsFailUntil[i] = dnsNowFn().Add(dohServerBackoff * time.Second)
			dnsMu.Unlock()
			continue
		}
		var resp dohResponse
		if err := json.Unmarshal(body, &resp); err != nil {
			continue // 应答非 JSON: 视为该服务器无效, 换下一台
		}
		if resp.Status == 3 {
			return nil, 0, 3, nil
		}
		if resp.Status != 0 {
			continue
		}
		ips := make([]string, 0, len(resp.Answer))
		ttl := dohTTLMax
		for _, ans := range resp.Answer {
			if ans.Type != rtype || !validDnsLiteral(ans.Data, rtype) {
				continue // CNAME 链等无关记录与非法记录
			}
			ips = append(ips, ans.Data)
			if ans.TTL > 0 && ans.TTL < ttl {
				ttl = ans.TTL
			}
		}
		if len(ips) == 0 {
			return nil, 0, 0, nil // 应答成功但无该类型记录 (NODATA)
		}
		return dedupeKeepOrder(ips), ttl, 0, nil
	}
	return nil, 0, 0, fmt.Errorf("all doh servers failed for %s (type %d)", host, rtype)
}

// dohHTTPClient 直连 DoH: 显式 Proxy: nil 不经环境代理 (DoH 是解析兜底来源, 必须直连)。
var dohHTTPClient = &http.Client{
	Timeout:   dohQueryTimeout,
	Transport: &http.Transport{Proxy: nil},
}

// dohQueryBytes 请求单个 DoH 服务器 (JSON API), 证书校验不降级。
func dohQueryBytes(server, name string, rtype int) ([]byte, error) {
	u := server + "?name=" + url.QueryEscape(name) + "&type=" + strconv.Itoa(rtype)
	req, err := http.NewRequestWithContext(context.Background(), http.MethodGet, u, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("accept", "application/dns-json")
	// config.Get() 在 config.New() 前为 nil (单测进程), 兜底静态 UA
	ua := "kisama-agent"
	if cfg := config.Get(); cfg != nil && cfg.AgentVersion != "" {
		ua = "kisama-agent/" + cfg.AgentVersion
	}
	req.Header.Set("user-agent", ua)
	resp, err := dohHTTPClient.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("doh http status %d", resp.StatusCode)
	}
	return io.ReadAll(io.LimitReader(resp.Body, 1<<16))
}

// ---------------- 辅助 ----------------

// orderDnsAddresses 双栈排序: 对齐系统 RFC6724 惯例 v6 优先; IPv6 不可用时 v4 优先。
func orderDnsAddresses(v6, v4 []string) []string {
	if len(v6) == 0 {
		return v4
	}
	if len(v4) == 0 {
		return v6
	}
	if ipv6Dialable() {
		return append(append([]string{}, v6...), v4...)
	}
	return append(append([]string{}, v4...), v6...)
}

var (
	ipv6ProbeOnce sync.Once
	ipv6ProbeOK   bool
)

func ipv6Dialable() bool {
	ipv6ProbeOnce.Do(func() {
		if conn, err := net.ListenPacket("udp6", "[::1]:0"); err == nil {
			ipv6ProbeOK = true
			conn.Close()
		}
	})
	return ipv6ProbeOK
}

// validDnsLiteral 应答记录必须是文本 IP 字面量且地址族与记录类型匹配 (拒绝主机名)。
func validDnsLiteral(data string, rtype int) bool {
	ip := net.ParseIP(strings.TrimSpace(data))
	if ip == nil {
		return false
	}
	if rtype == 1 {
		return ip.To4() != nil
	}
	return ip.To4() == nil // AAAA (对齐 system.go isValidIPv6 的 To4 判定)
}

// toAsciiHostname 非 ASCII 域名转 punycode (IDN), 失败原样返回。
func toAsciiHostname(host string) string {
	if host == "" || isASCII(host) {
		return host
	}
	if ascii, err := idna.Lookup.ToASCII(host); err == nil {
		return ascii
	}
	return host
}

func isASCII(s string) bool {
	for i := 0; i < len(s); i++ {
		if s[i] > 0x7F {
			return false
		}
	}
	return true
}

func dedupeKeepOrder(ips []string) []string {
	seen := make(map[string]struct{}, len(ips))
	out := make([]string, 0, len(ips))
	for _, ip := range ips {
		if _, dup := seen[ip]; !dup {
			seen[ip] = struct{}{}
			out = append(out, ip)
		}
	}
	return out
}

func matchDNSFamily(ip string, family int) bool {
	parsed := net.ParseIP(ip)
	if parsed == nil {
		return false
	}
	switch family {
	case 4:
		return parsed.To4() != nil
	case 6:
		return parsed.To4() == nil
	}
	return true
}

// ---------------- 出站挂载点 ----------------

// SecureDialContext 返回挂载到 http.Transport.DialContext 的拨号函数。
//
// KISAMA_DNS=off (默认): 与系统解析完全一致; on: 域名先经 DoH 解析 (带缓存) 再拨 IP,
// TLS ServerName/证书校验仍由 http.Transport 按调用方原始主机名处理, 不降级。
// 全部 DoH 服务器失败时回落系统解析 (可用性优先, 限频告警)。
// 未来新增出站域名连接 (如 argo-go) 一律经此挂载, 见 docs/API.MD 第十八节覆盖矩阵。
func SecureDialContext(base *net.Dialer) func(ctx context.Context, network, addr string) (net.Conn, error) {
	return func(ctx context.Context, network, addr string) (net.Conn, error) {
		host, port, err := net.SplitHostPort(addr)
		if err != nil || net.ParseIP(host) != nil {
			return base.DialContext(ctx, network, addr) // 字面量/异常形态直通 (防递归)
		}
		if resolveDnsMode() != "on" {
			return base.DialContext(ctx, network, addr)
		}
		family := 0
		switch {
		case strings.HasSuffix(network, "4"):
			family = 4
		case strings.HasSuffix(network, "6"):
			family = 6
		}
		ips, ok := resolveHost(ctx, host, family)
		if !ok {
			warnDnsFallback(host)
			return base.DialContext(ctx, network, addr) // DoH 全失败 → 系统解析
		}
		if len(ips) == 0 {
			return nil, &net.DNSError{Err: "no such host (secure dns)", Name: host, IsNotFound: true}
		}
		var lastErr error
		for _, ip := range ips {
			if !matchDNSFamily(ip, family) {
				continue
			}
			conn, dialErr := base.DialContext(ctx, network, net.JoinHostPort(ip, port))
			if dialErr == nil {
				return conn, nil
			}
			lastErr = dialErr
		}
		if lastErr != nil {
			return nil, lastErr
		}
		return base.DialContext(ctx, network, addr) // 解析族与请求族不匹配 (极罕见) → 系统解析兜底
	}
}

func warnDnsFallback(host string) {
	dnsMu.Lock()
	defer dnsMu.Unlock()
	if dnsNowFn().Sub(dnsLastWarn) < dohWarnInterval*time.Second {
		return
	}
	dnsLastWarn = dnsNowFn()
	// 注意: logger 包级函数在 logger.Init 前调用会被 ERROR 阈值吞掉 (同 handlers/proxy.go
	// warn-once 注释), 首次回落若发生在启动极早期则该条告警静默, 属可接受取舍
	logger.Warnf("KISAMA_DNS=on: 全部 DoH 服务器不可达, %q 本次回落系统解析 (可用性优先)", host)
}
