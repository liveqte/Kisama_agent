// 内置加密 DNS (DoH, docs/API.MD 第十八节) 离线单元测试
// 覆盖: resolve 解析/缓存 TTL 截断/负缓存/服务器故障退避与换台/全部失败回落、
//       dns.lookup 包装语义 (IP 字面量直通、family 过滤、all 形态、ENOTFOUND)、
//       installDnsHook (off 不安装 / on 安装且幂等 / KISAMA_DOH_SERVERS 解析)
// 全部 mock 网络层 (queryFn 注入), 不依赖外网。
// 运行: node tests/js/test_secure_dns.js
const { SecureDns, installDnsHook, patchDnsLookup, Config } = require('../../js/agent.js');
const dns = require('dns');
const assert = require('assert');

const S1 = 'https://bad.example/resolve';
const S2 = 'https://good.example/resolve';

function aAnswer(ip, ttl = 300) {
  return { Status: 0, Answer: [{ name: 'x', type: 1, TTL: ttl, data: ip }] };
}
function aaaaAnswer(ip, ttl = 300) {
  return { Status: 0, Answer: [{ name: 'x', type: 28, TTL: ttl, data: ip }] };
}

let passed = 0;
function ok(name) { passed++; console.log(`  ✔ ${name}`); }

// ---------------- resolve 核心语义 ----------------
async function caseResolveOkTtlClampAndCache() {
  const seen = [];
  const sd = new SecureDns({
    servers: ['https://doh.example/resolve'],
    queryFn: async (server, name, rtype) => {
      seen.push([server, name, rtype]);
      return {
        Status: 0,
        Answer: [
          { name: 'x', type: 5, TTL: 300, data: 'cname.example.com' },  // CNAME 链应过滤
          { name: 'x', type: 1, TTL: 5, data: '1.2.3.4' },
          { name: 'x', type: 1, TTL: 5, data: 'not-an-ip' },            // 非法记录应过滤
          { name: 'x', type: 1, TTL: 5, data: '5.6.7.8' },
          { name: 'x', type: 28, TTL: 99999, data: '2606:4700::1' },    // 超大 TTL 应截断
        ],
      };
    },
  });
  assert.deepStrictEqual(await sd.resolve('example.com', 4), ['1.2.3.4', '5.6.7.8']);
  assert.ok(seen.every(c => c[2] === 1), 'family=4 只查 A');            // AF_INET 只查 A
  const ttlLeft = sd.cache.get('example.com|4').expire - Date.now();
  assert.ok(ttlLeft > (SecureDns.TTL_MIN - 2) * 1000, 'TTL=5 应截断到下限 30s');
  assert.ok(ttlLeft <= (SecureDns.TTL_MIN + 2) * 1000);
  const n = seen.length;
  assert.deepStrictEqual(await sd.resolve('example.com', 4), ['1.2.3.4', '5.6.7.8']);   // 缓存命中
  assert.strictEqual(seen.length, n);
  ok('resolve 解析/CNAME 过滤/非法记录过滤/TTL 截断/缓存命中');
}

async function caseServerFailoverAndBackoff() {
  const seen = [];
  const sd = new SecureDns({
    servers: [S1, S2],
    queryFn: async (server) => {
      seen.push(server);
      if (server === S1) throw new Error('simulated doh failure');
      return aAnswer('9.9.9.9');
    },
  });
  assert.deepStrictEqual(await sd.resolve('a.com', 4), ['9.9.9.9']);
  assert.strictEqual(seen.filter(s => s === S1).length, 1);
  seen.length = 0;
  assert.deepStrictEqual(await sd.resolve('b.com', 4), ['9.9.9.9']);   // 退避期内不再碰 S1
  assert.ok(seen.every(s => s === S2));
  ok('服务器故障退避与换台');
}

async function caseAllFailFallsBack() {
  const sd = new SecureDns({
    servers: [S1, S2],
    queryFn: async () => { throw new Error('down'); },
  });
  assert.strictEqual(await sd.resolve('x.com', 4), null);   // null = DoH 全部失败
  const seen = [];
  const patched = patchDnsLookup(sd, (h, o, cb) => { seen.push(h); cb(null, '192.0.2.1', 4); });
  const r = await new Promise(res => patched('x.com', {}, (err, ip, family) => res([err, ip, family])));
  assert.strictEqual(r[0], null);
  assert.strictEqual(r[1], '192.0.2.1');
  assert.deepStrictEqual(seen, ['x.com']);
  ok('全部 DoH 失败回落系统解析 (限频告警)');
}

async function caseNxdomainNoFallback() {
  const sd = new SecureDns({
    servers: ['https://doh.example/resolve'],
    queryFn: async () => ({ Status: 3 }),
  });
  assert.deepStrictEqual(await sd.resolve('nx.com', 4), []);
  const seen = [];
  const patched = patchDnsLookup(sd, (h, o, cb) => { seen.push(h); cb(null, '6.6.6.6', 4); });
  const err = await new Promise(res => patched('nx.com', {}, (e) => res(e)));
  assert.ok(err && err.code === 'ENOTFOUND');
  assert.deepStrictEqual(seen, [], 'NXDOMAIN 不回落系统');
  ok('NXDOMAIN 负缓存且不回落 (防污染复活)');
}

async function caseDualStackOrder() {
  const mk = () => new SecureDns({
    servers: ['https://doh.example/resolve'],
    queryFn: async (server, name, rtype) => (rtype === 28 ? aaaaAnswer('2606:4700::1') : aAnswer('1.2.3.4')),
  });
  const sd1 = mk();
  sd1.ipv6Usable = () => true;
  assert.deepStrictEqual(await sd1.resolve('example.com', 0), ['2606:4700::1', '1.2.3.4']);
  const sd2 = mk();
  sd2.ipv6Usable = () => false;
  assert.deepStrictEqual(await sd2.resolve('example.com', 0), ['1.2.3.4', '2606:4700::1']);
  ok('双栈排序 (v6 可用优先 / 不可用 v4 优先)');
}

async function casePartialErrorStillOk() {
  // A 正常、AAAA 查询失败 → 整体 ok 仅回 v4
  const sd = new SecureDns({
    servers: ['https://doh.example/resolve'],
    queryFn: async (server, name, rtype) => {
      if (rtype === 28) throw new Error('down');
      return aAnswer('1.2.3.4');
    },
  });
  assert.deepStrictEqual(await sd.resolve('example.com', 0), ['1.2.3.4']);
  ok('AAAA 查询失败不拖垮整体 (部分错误仍 ok)');
}

// ---------------- lookup 包装语义 ----------------
async function caseLookupPassthroughLiteral() {
  const seen = [];
  const sd = new SecureDns({
    servers: ['https://doh.example/resolve'],
    queryFn: async () => { throw new Error('should not be called'); },
  });
  const patched = patchDnsLookup(sd, (h, o, cb) => { seen.push(h); cb(null, '127.0.0.1', 4); });
  const r = await new Promise(res => patched('127.0.0.1', {}, (err, ip) => res([err, ip])));
  assert.strictEqual(r[0], null);
  assert.strictEqual(r[1], '127.0.0.1');
  assert.deepStrictEqual(seen, ['127.0.0.1']);   // 字面量直通, 不触发 DoH (防递归)
  ok('IP 字面量直通 (防递归)');
}

async function caseLookupAllAndFamily() {
  const sd = new SecureDns({
    servers: ['https://doh.example/resolve'],
    queryFn: async (server, name, rtype) => (rtype === 28 ? aaaaAnswer('2606:4700::1') : aAnswer('1.2.3.4')),
  });
  const patched = patchDnsLookup(sd, () => { throw new Error('should not fall back'); });
  const addrs = await new Promise(res => patched('example.com', { all: true }, (err, a) => res([err, a])));
  assert.strictEqual(addrs[0], null);
  assert.deepStrictEqual(addrs[1], [
    { address: '2606:4700::1', family: 6 },
    { address: '1.2.3.4', family: 4 },
  ]);
  const single = await new Promise(res => patched('example.com', { family: 4 }, (err, ip, fam) => res([err, ip, fam])));
  assert.strictEqual(single[0], null);
  assert.strictEqual(single[1], '1.2.3.4');
  assert.strictEqual(single[2], 4);
  ok('dns.lookup all 形态与 family 过滤');
}

async function caseLookupNonStringHost() {
  // 绑定通配 (null host) 直通
  const sd = new SecureDns({ queryFn: async () => { throw new Error('should not be called'); } });
  const seen = [];
  const patched = patchDnsLookup(sd, (h, o, cb) => { seen.push(h); cb(null, '0.0.0.0', 4); });
  await new Promise(res => patched(null, {}, () => res()));
  assert.deepStrictEqual(seen, [null]);
  ok('非字符串主机 (null 通配) 直通');
}

// ---------------- 静态辅助与安装 ----------------
async function caseHelpers() {
  assert.strictEqual(SecureDns.validLiteral('1.2.3.4', 1), true);
  assert.strictEqual(SecureDns.validLiteral('1.2.3.4', 28), false);
  assert.strictEqual(SecureDns.validLiteral('2606:4700::1', 28), true);
  assert.strictEqual(SecureDns.validLiteral('example.com', 1), false);
  assert.strictEqual(SecureDns.toAscii('example.com'), 'example.com');
  assert.strictEqual(SecureDns.toAscii('例え.jp'), 'xn--r8jz45g.jp');
  const sd = new SecureDns();
  assert.deepStrictEqual(sd.servers, Config.DOH_SERVERS_DEFAULT);
  const sd2 = new SecureDns({ servers: ['https://my.doh/resolve/'] });
  assert.deepStrictEqual(sd2.servers, ['https://my.doh/resolve']);   // 去尾斜杠
  ok('validLiteral/toAscii/缺省服务器链/URL 清洗');
}

async function caseInstallHook() {
  const savedLookup = dns.lookup;
  const savedMode = Config.DNS_MODE;
  const savedServers = Config.DOH_SERVERS;
  try {
    Config.DOH_SERVERS = 'https://a.example/resolve , https://b.example/dns-query ,,';
    Config.DNS_MODE = 'off';
    assert.strictEqual(installDnsHook(), null);          // off 不安装
    assert.strictEqual(dns.lookup, savedLookup);
    assert.strictEqual(SecureDns._globalHook, null);

    Config.DNS_MODE = 'on';
    const first = installDnsHook();
    assert.ok(first instanceof SecureDns);
    assert.deepStrictEqual(first.servers, ['https://a.example/resolve', 'https://b.example/dns-query']);
    assert.notStrictEqual(dns.lookup, savedLookup);      // 已包装
    assert.strictEqual(first, installDnsHook());         // 幂等, 不重复包装
    // 全局钩子生效: 字面量直通 (异步回调返回系统结果)
    const ip = await new Promise((res, rej) => dns.lookup('127.0.0.1', (e, a) => (e ? rej(e) : res(a))));
    assert.strictEqual(ip, '127.0.0.1');
    ok('installDnsHook off 不安装 / on 安装且幂等 / 服务器链解析');
  } finally {
    dns.lookup = savedLookup;      // 还原全局状态, 不影响后续用例
    SecureDns._globalHook = null;
    Config.DNS_MODE = savedMode;
    Config.DOH_SERVERS = savedServers;
  }
}

const cases = [
  caseResolveOkTtlClampAndCache,
  caseServerFailoverAndBackoff,
  caseAllFailFallsBack,
  caseNxdomainNoFallback,
  caseDualStackOrder,
  casePartialErrorStillOk,
  caseLookupPassthroughLiteral,
  caseLookupAllAndFamily,
  caseLookupNonStringHost,
  caseHelpers,
  caseInstallHook,
];

(async () => {
  for (const c of cases) {
    try {
      await c();
    } catch (e) {
      console.error(`✘ 用例 ${c.name} 失败:`, e);
      process.exit(1);
    }
  }
  console.log(`\n全部 ${passed} 组断言通过`);
  process.exit(0);
})();
