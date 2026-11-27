// KMODE=3 kisama-hub 出站隧道 (0.6.6, docs/API.MD 十九) 离线单元测试。
// 运行: node tests/js/test_hub_tunnel.js
//
// 覆盖:
// 1. hub 注册名校验 hubKnameError (与 hub 端 ValidateKName 同源契约)
// 2. KHUB → WS 地址推导 deriveHubWsUrl (https→wss / http→ws / 裸 host)
// 3. KHUB_PORTS 解析 parseHubPorts (去重排序, 非法忽略)
// 4. 回环请求头纵深过滤 filterLoopbackHeaders (hop-by-hop + 内部命名空间剥除)
// 5. 指数退避 hubBackoffSeconds (BASE × 2^(failures-1), 封顶 MAX)
// 6. req 分发: api 模式回环 URL 构造 / port 模式白名单放行与拒绝 (拒绝不发起连接)
// 7. 响应超限 → err body_too_large; 回环异常 → err loopback_unreachable
// 8. 真实回环集成: _httpRequest 打本地 http server (GET/POST)
// 9. HubWSStream 拨号失败 → ws_ack ok:false (hub 据此以 3001 关客户端)
// 10. 状态快照 snapshot 字段齐全 (对齐 /api/argo 0.6.4 惯例)
//
// 全部走注入缝 (_request/_wsFactory), 不依赖外网; 用例 8 仅监听 127.0.0.1 随机端口。

const assert = require('assert');
const http = require('http');
const { execFileSync } = require('child_process');
const { HubTunnelManager, HubWSStream, HubTunnelRegistrar, HubRegisterError, hubKnameError, hubPublicUrlError, isShzalHubAlias, shzalHubAliasError, validateResolvedHubUrl, resolveShzalHubUrl, deriveHubWsUrl, filterLoopbackHeaders, hubBackoffSeconds, parseHubPorts, Config, proxySetRuntimePorts, proxyEffectivePorts, httpRequestRaw } = require('../../js/agent.js');

let failed = 0;
async function test(name, fn) {
  try {
    await fn();
    console.log(`  ✅ ${name}`);
  } catch (e) {
    failed++;
    console.error(`  ❌ ${name}: ${e.message}`);
  }
}

function makeManager(opts = {}) {
  const logs = [];
  const mgr = new HubTunnelManager(
    opts.hubUrl || 'http://hub.test',
    opts.kname || 'Demo1',
    opts.port || 58000,
    opts.ports !== undefined ? opts.ports : [7788, 8080],
    {
      info: (...p) => logs.push(['info', p.join(' ')]),
      warn: (...p) => logs.push(['warn', p.join(' ')]),
      warning: (...p) => logs.push(['warn', p.join(' ')]),
      error: (...p) => logs.push(['error', p.join(' ')]),
      debug: () => {}
    }
  );
  mgr.logs = logs;
  return mgr;
}

function fakeHubWs() {
  const sent = [];
  const handlers = {};
  let markReady;
  const ready = new Promise((resolve) => { markReady = resolve; });
  const ws = {
    readyState: 1, OPEN: 1,
    on: (ev, cb) => { (handlers[ev] = handlers[ev] || []).push(cb); },
    send: (d) => sent.push(JSON.parse(d)),
    ping: () => {}, close: () => {}, terminate: () => {}
  };
  return { ws, sent, handlers, ready, created: markReady };
}

function aliasReply(value = 'https://hub.test', options = {}) {
  return {
    status: options.status === undefined ? 200 : options.status,
    headers: options.headers === undefined ? { 'Content-Type': 'text/plain; charset=utf-8' } : options.headers,
    body: options.body === undefined ? Buffer.from(value) : options.body
  };
}

async function registerAndClose(mgr, harness) {
  const done = mgr._connectOnce().catch((err) => err);
  await harness.ready;
  harness.handlers.open.forEach((cb) => cb());
  harness.handlers.close.forEach((cb) => cb(1000, 'test'));
  const err = await done;
  assert.ok(err instanceof Error, 'unacked close must reject');
  assert.strictEqual(harness.sent.length, 1);
  return harness.sent[0];
}

async function main() {
  console.log('== hub helpers ==');

  await test('hubKnameError 合法名归一', () => {
    for (const raw of ['demo1', 'Demo1', 'my-host-2', 'a1']) {
      assert.strictEqual(hubKnameError(raw), null, raw);
    }
  });

  await test('hubKnameError 拒绝非法/保留名', () => {
    for (const raw of ['', '  ', 'a', '-abc', 'ab_c', 'ab.cd', 'ab cd', 'api', 'agents', 'sub', 'tunnel', 'health', 'static', 'favicon.ico']) {
      assert.notStrictEqual(hubKnameError(raw), null, raw);
    }
  });

  await test('deriveHubWsUrl scheme 推导', () => {
    assert.strictEqual(deriveHubWsUrl('https://hub.example.com'), 'wss://hub.example.com/tunnel');
    assert.strictEqual(deriveHubWsUrl('http://hub.example.com/'), 'ws://hub.example.com/tunnel');
    assert.strictEqual(deriveHubWsUrl('hub.example.com:9000'), 'ws://hub.example.com:9000/tunnel');
  });

  await test('parseHubPorts 去重排序非法忽略', () => {
    assert.deepStrictEqual(parseHubPorts('7788, 9090, abc, 0, 70000, 8080, 7788'), [7788, 8080, 9090]);
    assert.deepStrictEqual(parseHubPorts(''), []);
    assert.deepStrictEqual(parseHubPorts(',,,'), []);
  });

  await test('filterLoopbackHeaders 剥 hop-by-hop 与内部命名空间', () => {
    const out = filterLoopbackHeaders({
      Connection: 'keep-alive', Upgrade: 'websocket', 'Transfer-Encoding': 'chunked',
      Host: 'hub.test', 'X-Kisama-Hub-Orig-Path': '/forged', 'X-Forwarded-For': '1.2.3.4',
      'Content-Type': 'application/json', 'X-Nonce': 'n1'
    });
    for (const bad of ['connection', 'upgrade', 'transfer-encoding', 'host', 'x-kisama-hub-orig-path', 'x-forwarded-for']) {
      assert.ok(!(bad in out), bad);
    }
    assert.strictEqual(out['content-type'], 'application/json');
    assert.strictEqual(out['x-nonce'], 'n1');
  });

  await test('hubBackoffSeconds 指数封顶', () => {
    assert.strictEqual(hubBackoffSeconds(1, 2, 60), 2);
    assert.strictEqual(hubBackoffSeconds(2, 2, 60), 4);
    assert.strictEqual(hubBackoffSeconds(5, 2, 60), 32);
    assert.strictEqual(hubBackoffSeconds(6, 2, 60), 60);
    assert.strictEqual(hubBackoffSeconds(10, 2, 60), 60);
  });

  await test('snapshot 字段齐全', () => {
    const mgr = makeManager();
    const snap = mgr.snapshot();
    for (const key of ['tunnel_status', 'source', 'hub', 'resolved_hub', 'kname', 'url', 'public_url', 'ports', 'consecutive_failures', 'last_error', 'last_error_at', 'last_connected_at', 'relay_count']) {
      assert.ok(key in snap, key);
    }
    assert.strictEqual(snap.kname, 'demo1');
    assert.deepStrictEqual(snap.ports, [7788, 8080]);
    assert.strictEqual(snap.hub, 'http://hub.test');
    assert.strictEqual(snap.resolved_hub, 'http://hub.test');
    assert.strictEqual(snap.url, 'http://hub.test/demo1');
    assert.strictEqual(snap.public_url, 'http://hub.test');  // 缺省自动上报 KHUB 派生基址 (0.6.6 续批二)
  });

  console.log('== shz.al Hub 别名解析 ==');

  await test('别名形态与入口校验', () => {
    for (const raw of ['https://shz.al/~alias', 'https://shz.al/~alias/',
                       'HTTPS://SHZ.AL/~a+b_c-1[]*$=@,;/', 'https://shz.al:443/~name']) {
      assert.strictEqual(isShzalHubAlias(raw), true, raw);
      assert.strictEqual(shzalHubAliasError(raw), null, raw);
    }
    for (const raw of ['https://shz.al.evil/~alias', 'https://other.test/~alias', 'https://shz.al/path']) {
      assert.strictEqual(isShzalHubAlias(raw), false, raw);
      assert.strictEqual(shzalHubAliasError(raw), null, raw);
    }
    for (const raw of ['http://shz.al/~alias', 'ftp://shz.al/~alias', 'ws://shz.al/~alias',
                       'https://shz.al/~ab', 'https://shz.al/~',
                       'https://shz.al/~alias:key', 'https://shz.al/~ali%20as',
                       'https://@shz.al/~alias', 'https://shz.al:8443/~alias',
                       'https://shz.al:65536/~alias', 'https://shz.al:bad/~alias',
                       'https://shz.al:999999999999999999999999/~alias',
                       'https://shz.al:/~alias', 'https://shz.al/~alias\\path',
                       'https://shz.al\\@evil.test/~alias', 'https:shz.al/~alias',
                       'https://shz.al/~abc/./def', 'https://shz.al/~al\tias',
                       'https://shz.al/~al\nrias', 'https://shz.al /~alias',
                       'https://shz.al/~alias\x00',
                       'https://shz.al/~alias?x=1', 'https://shz.al/~alias?',
                       'https://shz.al/~alias#frag', 'https://shz.al/~alias#']) {
      assert.strictEqual(isShzalHubAlias(raw), true, raw);
      assert.notStrictEqual(shzalHubAliasError(raw), null, raw);
    }
  });

  await test('KHUB 环境入口与 merge 保留别名尾斜杠', () => {
    const alias = 'https://shz.al/~alias/';
    const agentPath = require.resolve('../../js/agent.js');
    const output = execFileSync(process.execPath, ['-e', `process.stdout.write(require(${JSON.stringify(agentPath)}).Config.KHUB)`], {
      env: { ...process.env, KHUB: alias }, encoding: 'utf8'
    });
    assert.strictEqual(output, alias);
    const saved = Config.KHUB;
    try {
      Config.merge({ KHUB: alias });
      assert.strictEqual(Config.KHUB, alias);
      Config.merge({ KHUB: 'https://hub.test///' });
      assert.strictEqual(Config.KHUB, 'https://hub.test');
    } finally {
      Config.KHUB = saved;
    }
  });

  await test('解析响应 URL 校验与尾斜杠归一', () => {
    const valid = new Map([
      ['https://hub.test', 'https://hub.test'],
      [' https://hub.test/prefix/// \n', 'https://hub.test/prefix'],
      ['http://127.0.0.1:8080/base/', 'http://127.0.0.1:8080/base'],
      ['https://[::1]:9443/hub', 'https://[::1]:9443/hub']
    ]);
    for (const [raw, want] of valid) assert.strictEqual(validateResolvedHubUrl(raw), want, raw);
    for (const raw of ['', '<html>hub</html>', 'https://one.test\nhttps://two.test',
                       'ftp://hub.test', 'HTTPS://hub.test', 'https://hub.test/a b',
                       'https://hub.test/a\\b', 'https://hub.test/a\x00b',
                       'https://hub.test/a\x85b', 'https://@hub.test', 'https://user@hub.test',
                       'https://hub.test?x=1', 'https://hub.test?', 'https://hub.test#x',
                       'https://hub.test#', 'https://hub.test:', 'https://hub.test:0',
                       'https://hub.test:65536', 'https://hub.test:bad', 'https://bad_host.test',
                       'https://hub..test', 'https://hub.test/' + 'a'.repeat(600)]) {
      assert.throws(() => validateResolvedHubUrl(raw), undefined, raw);
    }
  });

  await test('别名 GET 请求契约与路径前缀', async () => {
    const calls = [];
    const request = async (method, url, headers, body) => {
      calls.push({ method, url, headers, body });
      return aliasReply(' https://real.test/hub/ \n');
    };
    assert.strictEqual(await resolveShzalHubUrl('https://shz.al/~alias', request), 'https://real.test/hub');
    assert.deepStrictEqual(calls, [{ method: 'GET', url: 'https://shz.al/~alias',
      headers: { Accept: 'text/plain', 'User-Agent': 'curl/8.5.0', 'Accept-Encoding': 'identity' }, body: null }]);
  });

  await test('别名响应拒绝矩阵', async () => {
    const cases = [
      aliasReply('https://hub.test', { status: 301 }), aliasReply('https://hub.test', { status: 404 }),
      aliasReply('https://hub.test', { headers: { 'Content-Type': 'text/html' } }),
      aliasReply('https://hub.test', { headers: {} }),
      aliasReply('https://hub.test', { headers: { 'Content-Type': 'text/plain', 'Content-Encoding': 'gzip' } }),
      aliasReply('', {}), aliasReply('<html>hub</html>'),
      aliasReply('https://one.test\nhttps://two.test'),
      aliasReply('', { body: Buffer.from([0xff]) }), aliasReply('', { body: Buffer.alloc(4097) })
    ];
    for (let i = 0; i < cases.length; i++) {
      await assert.rejects(resolveShzalHubUrl('https://shz.al/~alias', async () => cases[i]), undefined, `case ${i}`);
    }
  });

  await test('4096/4097 字节边界', async () => {
    const url = Buffer.from('https://hub.test');
    const padded = Buffer.concat([url, Buffer.alloc(4096 - url.length, 0x20)]);
    assert.strictEqual(await resolveShzalHubUrl('https://shz.al/~alias', async () => aliasReply('', { body: padded })), url.toString());
    await assert.rejects(resolveShzalHubUrl('https://shz.al/~alias', async () => aliasReply('', { body: Buffer.concat([padded, Buffer.from('x')]) })), /4096/);
  });

  await test('管理 URL 在 GET 前拒绝', async () => {
    let called = false;
    await assert.rejects(resolveShzalHubUrl('https://shz.al/~alias:key', async () => {
      called = true;
      return aliasReply();
    }), /别名/);
    assert.strictEqual(called, false);
  });

  await test('直连 Hub 旁路别名 GET', async () => {
    const mgr = makeManager();
    const harness = fakeHubWs();
    let gets = 0;
    let dialed = null;
    mgr._request = async () => { gets += 1; return aliasReply(); };
    mgr._wsFactory = (url) => { dialed = url; harness.created(); return harness.ws; };
    const reg = await registerAndClose(mgr, harness);
    assert.strictEqual(gets, 0);
    assert.strictEqual(dialed, 'ws://hub.test/tunnel');
    assert.strictEqual(reg.public_url, 'http://hub.test');
    assert.strictEqual(mgr.snapshot().resolved_hub, 'http://hub.test');
  });

  await test('别名快照与注册帧使用真实 Hub', async () => {
    const alias = 'https://shz.al/~alias/';
    const mgr = makeManager({ hubUrl: alias });
    const initial = mgr.snapshot();
    assert.strictEqual(initial.hub, alias);
    assert.strictEqual(initial.resolved_hub, null);
    assert.strictEqual(initial.url, alias + '/demo1');
    const harness = fakeHubWs();
    let dialed = null;
    mgr._request = async () => aliasReply('https://real.test/hub/');
    mgr._wsFactory = (url) => { dialed = url; harness.created(); return harness.ws; };
    const reg = await registerAndClose(mgr, harness);
    const snap = mgr.snapshot();
    assert.strictEqual(dialed, 'wss://real.test/hub/tunnel');
    assert.strictEqual(reg.public_url, 'https://real.test/hub');
    assert.strictEqual(snap.hub, alias);
    assert.strictEqual(snap.resolved_hub, 'https://real.test/hub');
    assert.strictEqual(snap.public_url, 'https://real.test/hub');
    assert.strictEqual(snap.url, 'https://real.test/hub/demo1');
  });

  await test('KHUB_PUBLIC_URL 优先但仍解析拨号地址', async () => {
    const saved = Config.KHUB_PUBLIC_URL;
    Config.KHUB_PUBLIC_URL = 'https://public.test/gw';
    try {
      const mgr = makeManager({ hubUrl: 'https://shz.al/~alias' });
      const harness = fakeHubWs();
      let gets = 0;
      mgr._request = async () => { gets += 1; return aliasReply('https://real.test/hub'); };
      mgr._wsFactory = () => { harness.created(); return harness.ws; };
      const reg = await registerAndClose(mgr, harness);
      assert.strictEqual(gets, 1);
      assert.strictEqual(reg.public_url, 'https://public.test/gw');
      assert.strictEqual(mgr.snapshot().resolved_hub, 'https://real.test/hub');
      assert.strictEqual(mgr.snapshot().url, 'https://public.test/gw/demo1');
    } finally {
      Config.KHUB_PUBLIC_URL = saved;
    }
  });

  await test('每次 attempt 重新 GET 并从失败恢复', async () => {
    const mgr = makeManager({ hubUrl: 'https://shz.al/~alias' });
    const values = ['http://127.0.0.1:1', 'https://real.test/hub'];
    const gets = [];
    const dialed = [];
    const harness = fakeHubWs();
    mgr._request = async (method, url) => { gets.push(url); return aliasReply(values[gets.length - 1]); };
    mgr._wsFactory = (url) => {
      dialed.push(url);
      if (dialed.length === 1) throw new Error('dial refused');
      harness.created();
      return harness.ws;
    };
    await assert.rejects(mgr._connectOnce(), /dial refused/);
    const reg = await registerAndClose(mgr, harness);
    assert.deepStrictEqual(gets, ['https://shz.al/~alias', 'https://shz.al/~alias']);
    assert.deepStrictEqual(dialed, ['ws://127.0.0.1:1/tunnel', 'wss://real.test/hub/tunnel']);
    assert.strictEqual(reg.public_url, 'https://real.test/hub');
  });

  await test('刷新失败不得用旧解析值拨号', async () => {
    const mgr = makeManager({ hubUrl: 'https://shz.al/~alias' });
    const harness = fakeHubWs();
    let gets = 0;
    const dialed = [];
    mgr._request = async () => {
      gets += 1;
      if (gets === 1) return aliasReply('https://last.test/hub');
      throw new Error('alias unreachable');
    };
    mgr._wsFactory = (url) => { dialed.push(url); harness.created(); return harness.ws; };
    await registerAndClose(mgr, harness);
    await assert.rejects(mgr._connectOnce(), /alias unreachable/);
    assert.strictEqual(gets, 2);
    assert.deepStrictEqual(dialed, ['wss://last.test/hub/tunnel']);
    assert.strictEqual(mgr.snapshot().resolved_hub, 'https://last.test/hub');
  });

  await test('非法别名不 GET 不拨号', async () => {
    for (const alias of ['https://shz.al/~alias:key', 'https://shz.al\\@evil.test/~alias',
                         'https:shz.al/~alias', 'https://shz.al/~al\tias']) {
      const mgr = makeManager({ hubUrl: alias });
      let called = false;
      mgr._request = async () => { called = true; return aliasReply(); };
      mgr._wsFactory = () => { called = true; return fakeHubWs().ws; };
      await assert.rejects(mgr._connectOnce(), /别名/, alias);
      assert.strictEqual(called, false, alias);
    }
  });

  console.log('== KHUB_PUBLIC_URL 公网基址修正值 (0.6.6 续批) ==');

  await test('hubPublicUrlError 校验契约 (对齐 hub 端 ValidatePublicURL)', () => {
    for (const raw of ['https://pub.test', 'http://pub.test:9000', 'https://gw.test/hub']) {
      assert.strictEqual(hubPublicUrlError(raw), null, raw);
    }
    assert.strictEqual(hubPublicUrlError(''), null);   // 未配置 = 合法缺省
    assert.strictEqual(hubPublicUrlError(null), null);
    for (const raw of ['ftp://pub.test', 'javascript:alert(1)', 'pub.test', 'https://pu b.test',
                       'https://' + 'a'.repeat(600) + '.test']) {
      assert.ok(hubPublicUrlError(raw), raw);
    }
  });

  await test('snapshot url 以 KHUB_PUBLIC_URL 为基', () => {
    const saved = Config.KHUB_PUBLIC_URL;
    Config.KHUB_PUBLIC_URL = 'https://pub.test/hub';
    try {
      const mgr = makeManager();
      assert.strictEqual(mgr.publicUrl, 'https://pub.test/hub');
      const snap = mgr.snapshot();
      assert.strictEqual(snap.public_url, 'https://pub.test/hub');
      assert.strictEqual(snap.url, 'https://pub.test/hub/demo1');
    } finally {
      Config.KHUB_PUBLIC_URL = saved;
    }
  });

  await test('非法 KHUB_PUBLIC_URL 告警并视为未配置', () => {
    const saved = Config.KHUB_PUBLIC_URL;
    Config.KHUB_PUBLIC_URL = 'javascript:alert(1)';
    try {
      const mgr = makeManager();
      assert.strictEqual(mgr.publicUrl, null);                            // 不上报不使用
      assert.strictEqual(mgr.snapshot().url, 'http://hub.test/demo1');    // 回落 hub 基址
      assert.ok(mgr.logs.some(([lv, msg]) => lv === 'warn' && msg.includes('KHUB_PUBLIC_URL')));
    } finally {
      Config.KHUB_PUBLIC_URL = saved;
    }
  });

  await test('注册帧携带 public_url (KHUB_PUBLIC_URL 已配置)', async () => {
    const saved = Config.KHUB_PUBLIC_URL;
    Config.KHUB_PUBLIC_URL = 'https://pub.test/hub';
    try {
      const mgr = makeManager();
      const harness = fakeHubWs();
      mgr._wsFactory = () => { harness.created(); return harness.ws; };
      const done = mgr._connectOnce().catch(() => {});
      await harness.ready;
      harness.handlers.open.forEach((cb) => cb());          // 触发注册帧发送
      assert.strictEqual(harness.sent.length, 1);
      assert.strictEqual(harness.sent[0].t, 'register');
      assert.strictEqual(harness.sent[0].kname, 'demo1');
      assert.strictEqual(harness.sent[0].public_url, 'https://pub.test/hub');
      harness.handlers.close.forEach((cb) => cb(1000, 'test'));  // 收尾 (未 ack → reject → 已捕获)
      await done;
    } finally {
      Config.KHUB_PUBLIC_URL = saved;
    }
  });

  await test('注册帧缺省携带 KHUB 派生 public_url (0.6.6 续批二)', async () => {
    const mgr = makeManager();  // KHUB_PUBLIC_URL 未配置
    const harness = fakeHubWs();
    mgr._wsFactory = () => { harness.created(); return harness.ws; };
    const done = mgr._connectOnce().catch(() => {});
    await harness.ready;
    harness.handlers.open.forEach((cb) => cb());
    assert.strictEqual(harness.sent.length, 1);
    assert.strictEqual(harness.sent[0].public_url, 'http://hub.test');
    harness.handlers.close.forEach((cb) => cb(1000, 'test'));
    await done;
  });

  console.log('== req 分发 (注入 _request 缝) ==');

  await test('api 模式回环 URL 构造 + res 帧', async () => {
    const mgr = makeManager();
    const seen = [];
    mgr._request = async (method, url, headers, body) => {
      seen.push({ method, url, headers, body });
      return { status: 200, headers: { 'Content-Type': 'application/json', 'X-Encrypted': 'true' }, body: Buffer.from('{"ok":1}') };
    };
    const sent = [];
    mgr._hubWs = { readyState: 1, OPEN: 1, send: (d) => sent.push(JSON.parse(d)) };
    await mgr._handleReq({
      t: 'req', id: 7, mode: 'api', method: 'get', path: '/api/baseinfo',
      query: 'a=1', headers: { 'Content-Type': 'application/json', 'X-Kisama-Hub-Any': 'x' }, body_b64: ''
    });
    assert.strictEqual(seen.length, 1);
    assert.strictEqual(seen[0].method, 'GET');
    assert.strictEqual(seen[0].url, 'http://127.0.0.1:58000/api/baseinfo?a=1');
    assert.ok(!('x-kisama-hub-any' in seen[0].headers));
    assert.strictEqual(seen[0].headers['content-type'], 'application/json');
    assert.strictEqual(sent[0].t, 'res');
    assert.strictEqual(sent[0].id, 7);
    assert.strictEqual(sent[0].status, 200);
    assert.strictEqual(sent[0].headers['X-Encrypted'], 'true');
    assert.strictEqual(Buffer.from(sent[0].body_b64, 'base64').toString(), '{"ok":1}');
  });

  await test('port 模式白名单放行', async () => {
    const mgr = makeManager({ ports: [7788] });
    proxySetRuntimePorts('hub', [7788, 8080]); // 0.6.7 续批六分组口径: HUB 组运行时替代 mgr.ports 快照
    const seen = [];
    mgr._request = async (method, url) => { seen.push(url); return { status: 200, headers: {}, body: Buffer.alloc(0) }; };
    mgr._hubWs = { readyState: 1, OPEN: 1, send: () => {} };
    await mgr._handleReq({ t: 'req', id: 1, mode: 'port', port: 7788, method: 'GET', path: '/dir/file', query: 'q=1', headers: {}, body_b64: '' });
    assert.strictEqual(seen[0], 'http://127.0.0.1:7788/dir/file?q=1');
    proxySetRuntimePorts('hub', []);
  });

  await test('port 模式白名单拒绝不发连接', async () => {
    const mgr = makeManager({ ports: [7788] });
    const seen = [];
    mgr._request = async () => { seen.push(1); return { status: 200, headers: {}, body: Buffer.alloc(0) }; };
    const sent = [];
    mgr._hubWs = { readyState: 1, OPEN: 1, send: (d) => sent.push(JSON.parse(d)) };
    await mgr._handleReq({ t: 'req', id: 2, mode: 'port', port: 9999, method: 'GET', path: '/', query: '', headers: {}, body_b64: '' });
    assert.deepStrictEqual(seen, [], '白名单拒绝不得发起连接 (无扫描侧信道)');
    assert.strictEqual(sent[0].t, 'err');
    assert.strictEqual(sent[0].code, 'port_not_allowed');
  });

  await test('port 模式空白名单禁用', async () => {
    const mgr = makeManager({ ports: [] });
    const seen = [];
    mgr._request = async () => { seen.push(1); return { status: 200, headers: {}, body: Buffer.alloc(0) }; };
    const sent = [];
    mgr._hubWs = { readyState: 1, OPEN: 1, send: (d) => sent.push(JSON.parse(d)) };
    await mgr._handleReq({ t: 'req', id: 3, mode: 'port', port: 80, method: 'GET', path: '/', query: '', headers: {}, body_b64: '' });
    assert.deepStrictEqual(seen, []);
    assert.strictEqual(sent[0].code, 'port_not_allowed');
  });

  await test('响应超限 → err body_too_large', async () => {
    const mgr = makeManager();
    mgr._request = async () => ({ status: 200, headers: {}, body: Buffer.alloc(mgr._maxBody + 1) });
    const sent = [];
    mgr._hubWs = { readyState: 1, OPEN: 1, send: (d) => sent.push(JSON.parse(d)) };
    await mgr._handleReq({ t: 'req', id: 4, mode: 'api', method: 'GET', path: '/api/file/download', query: '', headers: {}, body_b64: '' });
    assert.strictEqual(sent[0].code, 'body_too_large');
  });

  await test('回环异常 → err loopback_unreachable', async () => {
    const mgr = makeManager();
    mgr._request = async () => { throw new Error('connection refused'); };
    const sent = [];
    mgr._hubWs = { readyState: 1, OPEN: 1, send: (d) => sent.push(JSON.parse(d)) };
    await mgr._handleReq({ t: 'req', id: 5, mode: 'api', method: 'GET', path: '/api/exec', query: '', headers: {}, body_b64: '' });
    assert.strictEqual(sent[0].t, 'err');
    assert.strictEqual(sent[0].code, 'loopback_unreachable');
    assert.ok(sent[0].message.includes('connection refused'));
  });

  console.log('== 真实回环集成 (_httpRequest → 本地 http server) ==');

  await test('GET/POST 回环 + 响应体', async () => {
    const mgr = makeManager();
    const server = http.createServer((req, res) => {
      let body = '';
      req.on('data', (c) => { body += c; });
      req.on('end', () => {
        res.writeHead(201, { 'Content-Type': 'text/plain' });
        res.end(`${req.method}:${req.url}:${body}`);
      });
    });
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    try {
      const port = server.address().port;
      const r1 = await mgr._httpRequest('GET', `http://127.0.0.1:${port}/hello?a=1`, {}, Buffer.alloc(0), 5000);
      assert.strictEqual(r1.status, 201);
      assert.strictEqual(r1.body.toString(), 'GET:/hello?a=1:');
      const r2 = await mgr._httpRequest('POST', `http://127.0.0.1:${port}/exec`, { 'content-type': 'application/json' }, Buffer.from('{"cmd":"id"}'), 5000);
      assert.strictEqual(r2.body.toString(), 'POST:/exec:{"cmd":"id"}');
    } finally {
      await new Promise((resolve) => server.close(resolve));
    }
  });

  console.log('== httpRequestRaw 限流/总超时/禁重定向 ==');

  await test('4096 边界、15s 总超时缝与不跟随重定向', async () => {
    const sockets = new Set();
    let redirected = 0;
    const server = http.createServer((req, res) => {
      if (req.url === '/hold') return;
      if (req.url === '/alias') {
        res.writeHead(302, { Location: '/target' });
        return res.end();
      }
      if (req.url === '/target') redirected += 1;
      const size = req.url === '/large' ? 4097 : 4096;
      res.end(Buffer.alloc(size));
    });
    server.on('connection', (socket) => {
      sockets.add(socket);
      socket.on('close', () => sockets.delete(socket));
    });
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    try {
      const base = `http://127.0.0.1:${server.address().port}`;
      const exact = await httpRequestRaw('GET', base + '/exact', {}, null, 5000, 4096);
      assert.strictEqual(exact.body.length, 4096);
      await assert.rejects(httpRequestRaw('GET', base + '/large', {}, null, 5000, 4096, {
        tooLargeError: new Error('alias body too large')
      }), /alias body too large/);
      const redirect = await httpRequestRaw('GET', base + '/alias', {}, null, 5000, 4096);
      assert.strictEqual(redirect.status, 302);
      assert.strictEqual(redirected, 0);
      await assert.rejects(httpRequestRaw('GET', base + '/hold', {}, null, 5000, 4096, {
        totalTimeoutMs: 50, timeoutError: new Error('alias total deadline')
      }), /alias total deadline/);
    } finally {
      for (const socket of sockets) socket.destroy();
      await new Promise((resolve) => server.close(resolve));
    }
  });

  console.log('== 终端 WS 流 ==');

  await test('HubWSStream 拨号失败 → ws_ack ok:false', async () => {
    const mgr = makeManager({ ports: [] });
    const sent = [];
    mgr._hubWs = { readyState: 1, OPEN: 1, send: (d) => sent.push(JSON.parse(d)) };
    // 注入 wsFactory: 返回立即报错的伪 WebSocket (close 事件携带非 101 → ws 库 error 语义)
    mgr._wsFactory = () => {
      const { EventEmitter } = require('events');
      const fake = new EventEmitter();
      fake.readyState = 0;
      setImmediate(() => fake.emit('error', new Error('dial refused')));
      return fake;
    };
    const st = new HubWSStream(mgr, mgr._hubWs, 42, { t: 'ws_open', id: 42, path: '/api/ws/terminal', query: 'request_id=x' });
    st.start();
    await new Promise((r) => setImmediate(() => setImmediate(r)));
    assert.strictEqual(sent.length, 1);
    assert.strictEqual(sent[0].t, 'ws_ack');
    assert.strictEqual(sent[0].id, 42);
    assert.strictEqual(sent[0].ok, false);
    assert.ok(sent[0].message.includes('dial refused'));
  });

  await test('relay_count 递增', async () => {
    const mgr = makeManager();
    mgr._request = async () => ({ status: 200, headers: {}, body: Buffer.alloc(0) });
    mgr._hubWs = { readyState: 1, OPEN: 1, send: () => {} };
    await mgr._handleReq({ t: 'req', id: 6, mode: 'api', method: 'GET', path: '/api/status', query: '', headers: {}, body_b64: '' });
    assert.strictEqual(mgr.snapshot().relay_count, 1);
  });

  console.log('== HubWSStream 端口反代模式 (0.6.6 续批) ==');

  await test('端口反代模式白名单拒绝 (不拨号)', async () => {
    const mgr = makeManager({ ports: [] });
    const sent = [];
    mgr._hubWs = { readyState: 1, OPEN: 1, send: (d) => sent.push(JSON.parse(d)) };
    const st = new HubWSStream(mgr, mgr._hubWs, 9, { t: 'ws_open', id: 9, port: 7788, path: '/x', query: '' });
    st.start();
    assert.strictEqual(sent.length, 1);
    assert.strictEqual(sent[0].t, 'ws_ack');
    assert.strictEqual(sent[0].ok, false);
    assert.ok(sent[0].message.includes('7788'));
  });

  await test('端口反代模式拨目标端口', async () => {
    const mgr = makeManager({ ports: [7788] });
    proxySetRuntimePorts('hub', [7788]); // 0.6.7 续批六分组口径: HUB 组运行时
    let dialedUrl = null;
    mgr._wsFactory = (url) => {
      dialedUrl = url;
      const { EventEmitter } = require('events');
      const fake = new EventEmitter();
      fake.readyState = 0;
      return fake;
    };
    const st = new HubWSStream(mgr, mgr._hubWs, 10, { t: 'ws_open', id: 10, port: 7788, path: '/echo', query: 'a=1' });
    st.start();
    await new Promise((r) => setImmediate(() => setImmediate(r)));
    assert.ok(dialedUrl && dialedUrl.startsWith('ws://127.0.0.1:7788/echo?a=1'), dialedUrl);
    proxySetRuntimePorts('hub', []);
  });

  await test('api 模式拨 agent 自身端口', async () => {
    const mgr = makeManager({ ports: [] });
    let dialedUrl = null;
    mgr._wsFactory = (url) => {
      dialedUrl = url;
      const { EventEmitter } = require('events');
      const fake = new EventEmitter();
      fake.readyState = 0;
      return fake;
    };
    const st = new HubWSStream(mgr, mgr._hubWs, 11, { t: 'ws_open', id: 11, path: '/api/ws/terminal', query: '' });
    st.start();
    await new Promise((r) => setImmediate(() => setImmediate(r)));
    assert.ok(dialedUrl.startsWith('ws://127.0.0.1:58000/api/ws/terminal'), dialedUrl);
  });

  console.log('== HubTunnelRegistrar (0.6.6 续批) ==');

  await test('Registrar 注册成功 (dynamic) + 列表', async () => {
    const registrar = new HubTunnelRegistrar({ info(){}, warn(){}, warning(){}, error(){}, debug(){} });
    registrar._managerFactory = (hubUrl, kname, port, ports, logger, source) => ({
      hubUrl, kname: kname.toLowerCase(), ports: ports || [], source,
      started: false, stopped: false,
      start() { this.started = true; },
      stop() { this.stopped = true; },
      waitConnected: async () => ({ ok: true, err: null }),
      snapshot: () => ({ tunnel_status: 'alive', source, hub: hubUrl, kname: kname.toLowerCase(),
                         url: hubUrl + '/' + kname.toLowerCase(), ports: [...(ports || [])].sort((a, b) => a - b) })
    });
    const { snapshot, code } = await registrar.register('https://hub.test', 'demo1', [7788], 'dynamic', 100);
    assert.strictEqual(code, null);
    assert.strictEqual(snapshot.source, 'dynamic');
    assert.strictEqual(registrar.list().length, 1);
    assert.ok(registrar.get('demo1').started);
  });

  await test('Registrar 保留 shz.al 别名尾斜杠', async () => {
    const alias = 'https://shz.al/~alias/';
    let received = null;
    const registrar = new HubTunnelRegistrar({ info(){}, warn(){}, warning(){}, error(){}, debug(){} });
    registrar._managerFactory = (hubUrl, kname, port, ports, logger, source) => {
      received = hubUrl;
      return { start(){}, stop(){}, waitConnected: async () => ({ ok: true, err: null }),
               snapshot: () => ({ tunnel_status: 'alive', source, hub: hubUrl, kname: kname.toLowerCase(), ports: [] }) };
    };
    const { snapshot, code } = await registrar.register(alias, 'demo1', [], 'dynamic', 100);
    assert.strictEqual(code, null);
    assert.strictEqual(received, alias);
    assert.strictEqual(snapshot.hub, alias);
  });

  await test('Registrar 同 kname 冲突 409 语义', async () => {
    const registrar = new HubTunnelRegistrar({ info(){}, warn(){}, warning(){}, error(){}, debug(){} });
    registrar._managerFactory = () => ({ start(){}, stop(){}, waitConnected: async () => ({ ok: true, err: null }),
                                         snapshot: () => ({ kname: 'demo1', tunnel_status: 'alive', ports: [] }) });
    await registrar.register('https://hub.test', 'demo1', [], 'dynamic', 50);
    const { code } = await registrar.register('https://hub2.test', 'Demo1', [], 'dynamic', 50);
    assert.strictEqual(code, 'name_taken');
  });

  await test('Registrar 非法 KNAME 422 语义不构造 manager', async () => {
    const registrar = new HubTunnelRegistrar({ info(){}, warn(){}, warning(){}, error(){}, debug(){} });
    let constructed = 0;
    registrar._managerFactory = () => { constructed += 1; return { start(){}, stop(){}, waitConnected: async () => ({ ok: true, err: null }), snapshot: () => ({}) }; };
    const { code } = await registrar.register('https://hub.test', 'api', [], 'dynamic', 50);
    assert.strictEqual(code, 'invalid_name');
    assert.strictEqual(constructed, 0, '非法 KNAME 不应构造 manager');
  });

  await test('Registrar 永久错误 (name_taken) 不保留注册项', async () => {
    const registrar = new HubTunnelRegistrar({ info(){}, warn(){}, warning(){}, error(){}, debug(){} });
    registrar._managerFactory = () => ({ start(){}, stop(){ this.stopped = true; },
      waitConnected: async () => ({ ok: false, err: new HubRegisterError('name_taken', 'KNAME 已被活跃连接占用') }),
      snapshot: () => ({ kname: 'taken1', tunnel_status: 'reconnecting', ports: [] }) });
    const { code } = await registrar.register('https://hub.test', 'taken1', [], 'dynamic', 50);
    assert.strictEqual(code, 'name_taken');
    assert.strictEqual(registrar.list().length, 0, '永久性错误不保留注册项');
  });

  await test('Registrar 网络类失败保留注册项 (unreachable)', async () => {
    const registrar = new HubTunnelRegistrar({ info(){}, warn(){}, warning(){}, error(){}, debug(){} });
    registrar._managerFactory = () => ({ start(){}, stop(){},
      waitConnected: async () => ({ ok: false, err: new Error('register not confirmed') }),
      snapshot: () => ({ kname: 'slow1', tunnel_status: 'reconnecting', ports: [] }) });
    const { code } = await registrar.register('https://hub.test', 'slow1', [], 'dynamic', 50);
    assert.strictEqual(code, 'unreachable');
    assert.strictEqual(registrar.list().length, 1, '网络类失败保留注册项继续退避');
  });

  await test('Registrar 注销成功/404', async () => {
    const registrar = new HubTunnelRegistrar({ info(){}, warn(){}, warning(){}, error(){}, debug(){} });
    registrar._managerFactory = () => ({ start(){}, stopped: false, stop(){ this.stopped = true; },
      waitConnected: async () => ({ ok: true, err: null }),
      snapshot: () => ({ kname: 'demo1', tunnel_status: 'alive', ports: [] }) });
    await registrar.register('https://hub.test', 'demo1', [], 'dynamic', 50);
    const removed = registrar.unregister('demo1');
    assert.strictEqual(removed.kname, 'demo1');
    assert.strictEqual(registrar.unregister('demo1'), null, '重复注销 null (404 语义)');
    assert.strictEqual(registrar.unregister('never-existed'), null);
  });

  console.log('');
  if (failed) {
    console.error(`${failed} 个用例失败`);
    process.exit(1);
  }
  console.log('全部通过');
}

main();
