package utils

// 内置加密 DNS (DoH, docs/API.MD 第十八节) 单元测试。
// 全部 mock 网络层 (dnsQueryFn 注入 / httptest 本地服务器), 不依赖外网。

import (
	"context"
	"fmt"
	"net"
	"net/http"
	"net/http/httptest"
	"strconv"
	"strings"
	"sync"
	"testing"
	"time"
)

// resetDnsState 清空包级缓存/退避/单飞状态并在测试结束后还原注入点。
func resetDnsState(t *testing.T) {
	t.Helper()
	reset := func() {
		dnsMu.Lock()
		dnsCache = map[dnsCacheKey]*dnsCacheEntry{}
		dnsInflight = map[dnsCacheKey]*dnsCall{}
		dnsFailUntil = nil
		dnsLastWarn = time.Time{}
		dnsMu.Unlock()
	}
	reset()
	t.Cleanup(func() {
		reset()
		dnsQueryFn = dohQueryBytes
		dnsNowFn = time.Now
	})
}

type fakeDohServer struct {
	mu        sync.Mutex
	calls     []string // "server|name|rtype"
	byServer  map[string]func(rtype int) ([]byte, error)
	defaultFn func(rtype int) ([]byte, error)
}

func (f *fakeDohServer) query(server, name string, rtype int) ([]byte, error) {
	f.mu.Lock()
	f.calls = append(f.calls, fmt.Sprintf("%s|%s|%d", server, name, rtype))
	f.mu.Unlock()
	fn := f.byServer[server]
	if fn == nil {
		fn = f.defaultFn
	}
	if fn == nil {
		return nil, fmt.Errorf("simulated doh failure: %s", server)
	}
	return fn(rtype)
}

func (f *fakeDohServer) countFor(server string) int {
	f.mu.Lock()
	defer f.mu.Unlock()
	n := 0
	for _, c := range f.calls {
		if strings.HasPrefix(c, server+"|") {
			n++
		}
	}
	return n
}

func aRecordJSON(ip string, ttl int) []byte {
	return []byte(fmt.Sprintf(`{"Status":0,"Answer":[{"name":"x","type":1,"TTL":%d,"data":"%s"}]}`, ttl, ip))
}

func TestResolveDnsMode(t *testing.T) {
	cases := []struct {
		name string
		env  string
		want string
	}{
		{"未设置原样返回空串 (拨号层判非 on)", "", ""},
		{"显式 off", "off", "off"},
		{"大小写不敏感", "ON", "on"},
		{"空白容忍", "  on  ", "on"},
		{"非法值原样返回由调用方判非 on", "auto", "auto"},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			t.Setenv("KISAMA_DNS", tc.env)
			if got := resolveDnsMode(); got != tc.want {
				t.Fatalf("resolveDnsMode() = %q, want %q", got, tc.want)
			}
		})
	}
}

func TestResolveDohServers(t *testing.T) {
	cases := []struct {
		name string
		env  string
		want []string
	}{
		{"未设置用缺省链", "", dohServersDefault},
		{"逗号分隔去尾斜杠", "https://a.example/resolve/, https://b.example/dns-query", []string{"https://a.example/resolve", "https://b.example/dns-query"}},
		{"空白项跳过", " https://a.example/resolve , ,", []string{"https://a.example/resolve"}},
		{"全非法回缺省链", ", ,", dohServersDefault},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			t.Setenv("KISAMA_DOH_SERVERS", tc.env)
			got := resolveDohServers()
			if len(got) != len(tc.want) {
				t.Fatalf("resolveDohServers() = %v, want %v", got, tc.want)
			}
			for i := range got {
				if got[i] != tc.want[i] {
					t.Fatalf("resolveDohServers() = %v, want %v", got, tc.want)
				}
			}
		})
	}
}

func TestResolveHostOkTtlClampAndCache(t *testing.T) {
	resetDnsState(t)
	t.Setenv("KISAMA_DNS", "on")
	fake := &fakeDohServer{defaultFn: func(rtype int) ([]byte, error) {
		return []byte(`{"Status":0,"Answer":[
			{"name":"x","type":5,"TTL":300,"data":"cname.example.com"},
			{"name":"x","type":1,"TTL":5,"data":"1.2.3.4"},
			{"name":"x","type":1,"TTL":5,"data":"not-an-ip"},
			{"name":"x","type":1,"TTL":5,"data":"5.6.7.8"},
			{"name":"x","type":28,"TTL":99999,"data":"2606:4700::1"}]}`), nil
	}}
	dnsQueryFn = fake.query
	before := time.Now()
	ips, ok := resolveHost(context.Background(), "example.com", 4)
	if !ok || len(ips) != 2 || ips[0] != "1.2.3.4" || ips[1] != "5.6.7.8" {
		t.Fatalf("resolveHost v4 = %v, ok=%v", ips, ok)
	}
	if fake.countFor("https://223.5.5.5/resolve") != 1 || len(fake.calls) != 1 {
		t.Fatalf("family=4 应只查 A 一次, calls=%v", fake.calls)
	}
	dnsMu.Lock()
	ent := dnsCache[dnsCacheKey{host: "example.com", family: 4}]
	dnsMu.Unlock()
	if ttl := ent.expire.Sub(before).Seconds(); ttl < 29 || ttl > 31 {
		t.Fatalf("TTL=5 应截断到下限 30s, got %.1fs", ttl)
	}
	// 二次解析命中缓存, 不再发起查询
	if _, ok := resolveHost(context.Background(), "example.com", 4); !ok {
		t.Fatal("cached resolve should be ok")
	}
	if len(fake.calls) != 1 {
		t.Fatalf("缓存命中不应再查询, calls=%v", fake.calls)
	}
}

func TestResolveHostUnspecOrderAndTTLMaxClamp(t *testing.T) {
	resetDnsState(t)
	fake := &fakeDohServer{defaultFn: func(rtype int) ([]byte, error) {
		return []byte(`{"Status":0,"Answer":[
			{"name":"x","type":1,"TTL":99999,"data":"1.2.3.4"},
			{"name":"x","type":28,"TTL":99999,"data":"2606:4700::1"}]}`), nil
	}}
	dnsQueryFn = fake.query
	ips, ok := resolveHost(context.Background(), "example.com", 0)
	if !ok {
		t.Fatal("unspec resolve should be ok")
	}
	got := map[string]bool{}
	for _, ip := range ips {
		got[ip] = true
	}
	if !got["1.2.3.4"] || !got["2606:4700::1"] {
		t.Fatalf("双栈应都返回, got %v", ips)
	}
	dnsMu.Lock()
	ent := dnsCache[dnsCacheKey{host: "example.com", family: 0}]
	dnsMu.Unlock()
	if ttl := ent.expire.Sub(time.Now()).Seconds(); ttl > dohTTLMax+1 {
		t.Fatalf("TTL=99999 应截断到上限 600s, got %.1fs", ttl)
	}
}

func TestResolveHostFailoverAndBackoff(t *testing.T) {
	resetDnsState(t)
	bad, good := "https://bad.example/resolve", "https://good.example/resolve"
	t.Setenv("KISAMA_DOH_SERVERS", bad+","+good)
	fake := &fakeDohServer{
		byServer: map[string]func(rtype int) ([]byte, error){
			bad: func(rtype int) ([]byte, error) { return nil, fmt.Errorf("simulated down") },
		},
		defaultFn: func(rtype int) ([]byte, error) { return aRecordJSON("9.9.9.9", 300), nil },
	}
	dnsQueryFn = fake.query
	ips, ok := resolveHost(context.Background(), "a.com", 4)
	if !ok || len(ips) != 1 || ips[0] != "9.9.9.9" {
		t.Fatalf("failover resolve = %v, ok=%v", ips, ok)
	}
	if fake.countFor(bad) != 1 {
		t.Fatalf("bad 服务器应恰好被请求一次, calls=%v", fake.calls)
	}
	// 退避期内不再碰 bad
	if _, ok := resolveHost(context.Background(), "b.com", 4); !ok {
		t.Fatal("second resolve should be ok")
	}
	if fake.countFor(bad) != 1 {
		t.Fatalf("退避期内不应再请求 bad, calls=%v", fake.calls)
	}
}

func TestResolveHostAllFailReturnsNotOK(t *testing.T) {
	resetDnsState(t)
	fake := &fakeDohServer{} // 无 defaultFn: 全部网络级失败
	dnsQueryFn = fake.query
	ips, ok := resolveHost(context.Background(), "x.com", 4)
	if ok || ips != nil {
		t.Fatalf("全部失败应 (nil,false), got (%v,%v)", ips, ok)
	}
}

func TestResolveHostNxdomainNegativeCache(t *testing.T) {
	resetDnsState(t)
	fake := &fakeDohServer{defaultFn: func(rtype int) ([]byte, error) { return []byte(`{"Status":3}`), nil }}
	dnsQueryFn = fake.query
	ips, ok := resolveHost(context.Background(), "nx.com", 4)
	if !ok || len(ips) != 0 {
		t.Fatalf("NXDOMAIN 应 (空,true), got (%v,%v)", ips, ok)
	}
	if _, ok := resolveHost(context.Background(), "nx.com", 4); !ok {
		t.Fatal("negative cached resolve should be ok")
	}
	if len(fake.calls) != 1 { // family=4 只查 A 一次; 二次解析命中负缓存不再查询
		t.Fatalf("负缓存命中不应再查询, calls=%v", fake.calls)
	}
}

func TestResolveHostInflightDedupe(t *testing.T) {
	resetDnsState(t)
	block := make(chan struct{})
	fake := &fakeDohServer{defaultFn: func(rtype int) ([]byte, error) {
		<-block // 持住首个查询, 其余并发应等同一结果而不是重复查询
		time.Sleep(20 * time.Millisecond)
		return aRecordJSON("9.9.9.9", 300), nil
	}}
	dnsQueryFn = fake.query
	var wg sync.WaitGroup
	results := make([]bool, 5)
	for i := 0; i < 5; i++ {
		wg.Add(1)
		go func(i int) {
			defer wg.Done()
			_, results[i] = resolveHost(context.Background(), "slow.com", 4)
		}(i)
	}
	time.Sleep(50 * time.Millisecond) // 等全部 goroutine 进入等待
	close(block)
	wg.Wait()
	fake.mu.Lock()
	defer fake.mu.Unlock()
	if len(fake.calls) != 1 {
		t.Fatalf("并发同键解析应 single-flight 去重, calls=%v", fake.calls)
	}
	for i, ok := range results {
		if !ok {
			t.Fatalf("并发调用 %d 应拿到 ok 结果", i)
		}
	}
}

func TestSecureDialContextOnMode(t *testing.T) {
	resetDnsState(t)
	t.Setenv("KISAMA_DNS", "on")
	// 本地真监听: DoH 解析结果指向它, 验证换 IP 拨号链路真实可用
	ln, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		t.Fatal(err)
	}
	defer ln.Close()
	port := ln.Addr().(*net.TCPAddr).Port
	accepted := make(chan struct{}, 1)
	go func() {
		conn, err := ln.Accept()
		if err == nil {
			conn.Close()
			accepted <- struct{}{}
		}
	}()
	fake := &fakeDohServer{defaultFn: func(rtype int) ([]byte, error) {
		return []byte(fmt.Sprintf(`{"Status":0,"Answer":[{"name":"x","type":1,"TTL":300,"data":"127.0.0.1"}]}`)), nil
	}}
	dnsQueryFn = fake.query

	dial := SecureDialContext(&net.Dialer{Timeout: 3 * time.Second})
	conn, err := dial(context.Background(), "tcp", net.JoinHostPort("polluted.example.com", strconv.Itoa(port)))
	if err != nil {
		t.Fatalf("SecureDialContext 拨号失败: %v", err)
	}
	conn.Close()
	select {
	case <-accepted:
	case <-time.After(2 * time.Second):
		t.Fatal("服务端未收到连接")
	}
	if len(fake.calls) != 2 {
		// network="tcp" → family=0 → A 与 AAAA 各查一次 (fake 对 rtype=28 无匹配记录, NODATA 不影响整体 ok)
		t.Fatalf("应恰好 A+AAAA 两次 DoH 查询, calls=%v", fake.calls)
	}
}

func TestSecureDialContextOffModePassthrough(t *testing.T) {
	resetDnsState(t)
	t.Setenv("KISAMA_DNS", "off")
	fake := &fakeDohServer{defaultFn: func(rtype int) ([]byte, error) { return aRecordJSON("9.9.9.9", 300), nil }}
	dnsQueryFn = fake.query
	dial := SecureDialContext(&net.Dialer{Timeout: 2 * time.Second})
	// off 模式: 字面量直通系统拨号 (本地监听可成功), 全程零 DoH 查询
	ln, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		t.Fatal(err)
	}
	defer ln.Close()
	port := ln.Addr().(*net.TCPAddr).Port
	conn, err := dial(context.Background(), "tcp", net.JoinHostPort("127.0.0.1", strconv.Itoa(port)))
	if err != nil {
		t.Fatalf("off 模式字面量拨号失败: %v", err)
	}
	conn.Close()
	if len(fake.calls) != 0 {
		t.Fatalf("off 模式不应触发 DoH, calls=%v", fake.calls)
	}
}

func TestSecureDialContextNxdomainError(t *testing.T) {
	resetDnsState(t)
	t.Setenv("KISAMA_DNS", "on")
	fake := &fakeDohServer{defaultFn: func(rtype int) ([]byte, error) { return []byte(`{"Status":3}`), nil }}
	dnsQueryFn = fake.query
	dial := SecureDialContext(&net.Dialer{Timeout: 2 * time.Second})
	_, err := dial(context.Background(), "tcp", "nx.example.com:443")
	dnsErr, isDnsErr := err.(*net.DNSError)
	if !isDnsErr || !dnsErr.IsNotFound {
		t.Fatalf("NXDOMAIN 应返回 net.DNSError(IsNotFound), got %v (%T)", err, err)
	}
}

func TestSecureDialContextAllFailFallsBackToSystem(t *testing.T) {
	resetDnsState(t)
	t.Setenv("KISAMA_DNS", "on")
	fake := &fakeDohServer{} // 全部失败
	dnsQueryFn = fake.query
	dial := SecureDialContext(&net.Dialer{Timeout: 2 * time.Second})
	// 回落系统解析: .invalid 顶级域保证系统解析也失败 → 返回错误而非 panic/悬挂
	_, err := dial(context.Background(), "tcp", "secure-dns-fallback-test.invalid:443")
	if err == nil {
		t.Fatal("DoH 全失败且系统解析失败时应返回错误")
	}
	if len(fake.calls) == 0 {
		t.Fatal("回落前应至少尝试一次 DoH 查询")
	}
}

func TestDohQueryBytesViaHttptest(t *testing.T) {
	resetDnsState(t)
	var gotPath, gotAccept, gotUA string
	srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		gotPath, gotAccept, gotUA = r.URL.String(), r.Header.Get("accept"), r.Header.Get("user-agent")
		w.Header().Set("Content-Type", "application/dns-json")
		fmt.Fprintf(w, `{"Status":0,"Answer":[{"name":"x","type":1,"TTL":300,"data":"9.9.9.9"}]}`)
	}))
	defer srv.Close()
	t.Setenv("KISAMA_DOH_SERVERS", srv.URL+"/resolve")
	body, err := dohQueryBytes(srv.URL+"/resolve", "example.com", 1)
	if err != nil {
		t.Fatalf("dohQueryBytes 失败: %v", err)
	}
	if !strings.Contains(string(body), "9.9.9.9") {
		t.Fatalf("应答体异常: %s", body)
	}
	if !strings.Contains(gotPath, "name=example.com") || !strings.Contains(gotPath, "type=1") {
		t.Fatalf("查询参数异常: %s", gotPath)
	}
	if gotAccept != "application/dns-json" {
		t.Fatalf("accept 头异常: %s", gotAccept)
	}
	// 测试进程 config 未初始化 → 兜底 UA 无版本号; 生产进程带 /版本号
	if !strings.HasPrefix(gotUA, "kisama-agent") {
		t.Fatalf("user-agent 异常: %s", gotUA)
	}
}

func TestValidDnsLiteral(t *testing.T) {
	cases := []struct {
		data  string
		rtype int
		want  bool
	}{
		{"1.2.3.4", 1, true},
		{"1.2.3.4", 28, false},
		{"2606:4700::1", 28, true},
		{"2606:4700::1", 1, false},
		{"example.com", 1, false},
		{"", 1, false},
		{"::ffff:1.2.3.4", 28, false}, // To4 非 nil, 不是纯 v6
	}
	for _, tc := range cases {
		if got := validDnsLiteral(tc.data, tc.rtype); got != tc.want {
			t.Fatalf("validDnsLiteral(%q,%d) = %v, want %v", tc.data, tc.rtype, got, tc.want)
		}
	}
}

func TestToAsciiHostname(t *testing.T) {
	if got := toAsciiHostname("example.com"); got != "example.com" {
		t.Fatalf("ascii 域名应原样, got %q", got)
	}
	if got := toAsciiHostname("例え.jp"); got != "xn--r8jz45g.jp" {
		t.Fatalf("IDN 应转 punycode, got %q", got)
	}
}

func TestOrderDnsAddressesSingleFamily(t *testing.T) {
	if got := orderDnsAddresses(nil, []string{"1.2.3.4", "5.6.7.8"}); len(got) != 2 {
		t.Fatalf("仅 v4: %v", got)
	}
	if got := orderDnsAddresses([]string{"2606:4700::1"}, nil); len(got) != 1 {
		t.Fatalf("仅 v6: %v", got)
	}
	// 双栈: 两种排序都合法 (取决于本机 IPv6 探测), 只断言集合
	got := orderDnsAddresses([]string{"2606:4700::1"}, []string{"1.2.3.4"})
	if len(got) != 2 {
		t.Fatalf("双栈应两条: %v", got)
	}
}

func TestDedupeKeepOrder(t *testing.T) {
	got := dedupeKeepOrder([]string{"1.2.3.4", "1.2.3.4", "5.6.7.8", "1.2.3.4"})
	if len(got) != 2 || got[0] != "1.2.3.4" || got[1] != "5.6.7.8" {
		t.Fatalf("dedupe = %v", got)
	}
}
