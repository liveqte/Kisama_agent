// 本地端口反代路由 /api/proxy (0.6.7, docs/API.MD 二十) 离线单元测试。
// 运行: node tests/js/test_proxy_route.js
//
// 覆盖:
// 1. 共享回环转发核心 relayLoopbackHttp (hub req 帧与本地路由共用一份实现):
//    放行转发 method/path/query/headers 保真、x-forwarded-* 剥除后按 forwardedFor 注入、
//    白名单拒绝 (port_not_allowed 不发起连接)、whitelist=null (api 模式跳过校验)、
//    请求体超限 / 响应体超限 (body_too_large)、回环不可达 (loopback_unreachable)
// 2. requestFn 注入缝透传 (HubTunnelManager._request 同一缝)
// 3. httpRequestRaw 真实回环集成 (GET/POST 字节保真)
// 4. filterProxyResponseHeaders: 剥 content-length / hop-by-hop / access-control-*
// 5. PROXY_STRIPPED_AUTH_HEADERS 清单齐全 (agent 认证头不透传上游)
//
// 回环用真实 http server (127.0.0.1 随机端口), 不依赖外网。

const assert = require('assert');
const http = require('http');
const net = require('net');
const {
  Config, HubTunnelManager,
  PROXY_STRIPPED_AUTH_HEADERS, makeRelayError, httpRequestRaw, httpRequestStream,
  relayLoopbackPrepare, filterProxyResponseHeaders, relayLoopbackHttp,
  proxyRuntimePorts, proxyEffectivePorts, proxySetRuntimePorts, proxyMergeRuntimePorts, proxyWsRelayHandler,
} = require('../../js/agent.js');

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
  const mgr = new HubTunnelManager(
    opts.hubUrl || 'http://hub.test',
    opts.kname || 'Demo1',
    opts.port || 58000,
    opts.ports !== undefined ? opts.ports : [7788, 8080],
    { info: () => {}, warn: () => {}, warning: () => {}, error: () => {}, debug: () => {} }
  );
  return mgr;
}

function startEchoServer() {
  // 回环 echo 上游: 记录收到的请求, /big 返回 200 字节大响应
  return new Promise((resolve) => {
    const requests = [];
    const server = http.createServer((req, res) => {
      const chunks = [];
      req.on('data', (c) => chunks.push(c));
      req.on('end', () => {
        const body = Buffer.concat(chunks);
        requests.push({ method: req.method, url: req.url, headers: req.headers, body });
        res.writeHead(200, { 'x-upstream': 'yes' });
        res.end(req.url.startsWith('/big') ? Buffer.alloc(200) : Buffer.concat([Buffer.from('echo:'), body]));
      });
    });
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port, requests }));
  });
}

function freePort() {
  return new Promise((resolve, reject) => {
    const s = net.createServer();
    s.listen(0, '127.0.0.1', () => {
      const port = s.address().port;
      s.close(() => resolve(port));
    });
    s.on('error', reject);
  });
}

async function main() {
  console.log('== relayLoopbackHttp 共享回环转发核心 ==');

  await test('放行转发: method/path/query/headers 保真 + xff 注入 + hop 剥除', async () => {
    const { server, port, requests } = await startEchoServer();
    try {
      const out = await relayLoopbackHttp({
        port, whitelist: [port], method: 'POST',
        path: '/alpha', query: 'a=1&b=2',
        headers: { 'x-custom': 'v1', host: 'evil.example', connection: 'close',
                   'x-forwarded-for': '9.9.9.9', 'x-kisama-hub-x': 'no' },
        body: Buffer.from('hello'), maxBody: 65536, relayTimeout: 5000,
        forwardedFor: '203.0.113.9',
      });
      assert.strictEqual(out.status, 200);
      assert.strictEqual(out.body.toString(), 'echo:hello');
      assert.strictEqual(out.headers['x-upstream'], 'yes');
      assert.strictEqual(requests.length, 1);
      const seen = requests[0];
      assert.strictEqual(seen.method, 'POST');
      assert.strictEqual(seen.url, '/alpha?a=1&b=2');
      assert.strictEqual(seen.body.toString(), 'hello');
      assert.strictEqual(seen.headers['x-custom'], 'v1');
      assert.ok(!seen.headers['x-kisama-hub-x'], '内部命名空间头应剥除');
      // 原 hop-by-hop/host 值应剥除 (node 按 URL 自动补 connection/host)
      assert.notStrictEqual(seen.headers['connection'], 'close', '原 connection 头应剥除');
      assert.notStrictEqual(seen.headers.host, 'evil.example', '原 host 头应剥除');
      // x-forwarded-* 剥除后按 forwardedFor 注入
      assert.strictEqual(seen.headers['x-forwarded-for'], '203.0.113.9');
    } finally {
      server.close();
    }
  });

  await test('白名单拒绝: port_not_allowed 且不发起连接', async () => {
    const { server, port, requests } = await startEchoServer();
    try {
      await assert.rejects(
        relayLoopbackHttp({ port, whitelist: [], method: 'GET', path: '/', query: '',
                            headers: {}, body: Buffer.alloc(0), maxBody: 65536, relayTimeout: 5000 }),
        (err) => err.relayCode === 'port_not_allowed');
      assert.strictEqual(requests.length, 0); // 拒绝不发起连接, 无端口扫描侧信道
    } finally {
      server.close();
    }
  });

  await test('whitelist=null (api 模式) 跳过白名单直接回环', async () => {
    const { server, port, requests } = await startEchoServer();
    try {
      const out = await relayLoopbackHttp({
        port, whitelist: null, method: 'GET', path: '/only', query: '',
        headers: {}, body: Buffer.alloc(0), maxBody: 65536, relayTimeout: 5000,
      });
      assert.strictEqual(out.status, 200);
      assert.strictEqual(requests.length, 1);
    } finally {
      server.close();
    }
  });

  await test('请求体超限 → body_too_large 且不发起连接', async () => {
    const { server, port, requests } = await startEchoServer();
    try {
      await assert.rejects(
        relayLoopbackHttp({ port, whitelist: [port], method: 'POST', path: '/', query: '',
                            headers: {}, body: Buffer.alloc(5), maxBody: 4, relayTimeout: 5000 }),
        (err) => err.relayCode === 'body_too_large');
      assert.strictEqual(requests.length, 0);
    } finally {
      server.close();
    }
  });

  await test('响应体超限 → body_too_large (真实回环提前中断)', async () => {
    const { server, port, requests } = await startEchoServer();
    try {
      await assert.rejects(
        relayLoopbackHttp({ port, whitelist: [port], method: 'GET', path: '/big', query: '',
                            headers: {}, body: Buffer.alloc(0), maxBody: 8, relayTimeout: 5000 }),
        (err) => err.relayCode === 'body_too_large');
      assert.strictEqual(requests.length, 1); // 已发起连接后才发现响应超限
    } finally {
      server.close();
    }
  });

  await test('回环不可达 → loopback_unreachable', async () => {
    const port = await freePort(); // 无监听端口
    await assert.rejects(
      relayLoopbackHttp({ port, whitelist: [port], method: 'GET', path: '/', query: '',
                          headers: {}, body: Buffer.alloc(0), maxBody: 65536, relayTimeout: 5000 }),
      (err) => err.relayCode === 'loopback_unreachable');
  });

  await test('requestFn 注入缝透传 (与 HubTunnelManager._request 同缝)', async () => {
    const calls = [];
    const out = await relayLoopbackHttp({
      port: 7788, whitelist: [7788], method: 'PUT', path: '/p', query: 'q=1',
      headers: { host: 'x' }, body: Buffer.from('w'), maxBody: 99, relayTimeout: 5000,
      requestFn: async (method, url, headers, body) => {
        calls.push({ method, url, headers, body });
        return { status: 201, headers: { a: 'b' }, body: Buffer.from('z') };
      },
    });
    assert.strictEqual(out.status, 201);
    assert.strictEqual(out.headers.a, 'b');
    assert.strictEqual(out.body.toString(), 'z');
    assert.strictEqual(calls[0].url, 'http://127.0.0.1:7788/p?q=1');
    assert.ok(!calls[0].headers.host, 'host 应剥除');
  });

  await test('HubTunnelManager._handleReq 经共享核心 (relayCount 与 res 帧)', async () => {
    const { server, port, requests } = await startEchoServer();
    try {
      const mgr = makeManager({ port: 58000, ports: [port] });
      proxySetRuntimePorts('hub', [port]); // 0.6.7 续批六分组口径: hub req 走 HUB 组
      const sent = [];
      mgr._hubWs = { readyState: 1, OPEN: 1, send: (d) => sent.push(JSON.parse(d)) };
      await mgr._handleReq({ t: 'req', id: 9, mode: 'port', port, method: 'GET', path: '/x', query: '', headers: {}, body_b64: '' });
      assert.strictEqual(sent[0].t, 'res');
      assert.strictEqual(sent[0].status, 200);
      assert.strictEqual(mgr.relayCount, 1);
      assert.strictEqual(requests.length, 1);
    } finally {
      proxySetRuntimePorts('hub', []);
      server.close();
    }
  });

  console.log('== httpRequestRaw 真实回环集成 ==');

  await test('GET/POST 字节保真 (GET 空体 / POST 二进制)', async () => {
    const { server, port, requests } = await startEchoServer();
    try {
      const r1 = await httpRequestRaw('GET', `http://127.0.0.1:${port}/get?p=1`, {}, Buffer.alloc(0), 5000, 65536);
      assert.strictEqual(r1.status, 200);
      assert.strictEqual(r1.body.toString(), 'echo:');
      const bin = Buffer.from([0x00, 0x01, 0xff, 0xfe]);
      const r2 = await httpRequestRaw('POST', `http://127.0.0.1:${port}/post`, { 'content-type': 'application/octet-stream' }, bin, 5000, 65536);
      assert.strictEqual(r2.body.subarray(5).toString('hex'), bin.toString('hex'));
      assert.strictEqual(requests[1].headers['content-type'], 'application/octet-stream');
    } finally {
      server.close();
    }
  });

  console.log('== 响应头过滤与认证头清单 ==');

  await test('filterProxyResponseHeaders 剥 content-length/hop/access-control-*', () => {
    const out = filterProxyResponseHeaders({
      'Content-Length': '99', Connection: 'close', 'Keep-Alive': 'timeout=5',
      'Access-Control-Allow-Origin': 'http://upstream', 'X-Upstream': 'yes',
      'Transfer-Encoding': 'chunked', 'content-type': 'text/html',
    });
    assert.deepStrictEqual(out, { 'X-Upstream': 'yes', 'content-type': 'text/html' });
  });

  await test('PROXY_STRIPPED_AUTH_HEADERS 清单齐全', () => {
    for (const h of ['x-nonce', 'x-timestamp', 'x-auth-token', 'x-aes-encrypted',
                     'x-encrypted', 'x-agent-version']) {
      assert.ok(PROXY_STRIPPED_AUTH_HEADERS.includes(h), h);
    }
    assert.deepStrictEqual(makeRelayError('port_not_allowed', 'm').relayCode, 'port_not_allowed');
  });

  console.log('== 流式原语 httpRequestStream (0.6.7) ==');

  await test('流式: 3MB 大响应逐 chunk 到达不截断 (响应体不受 MAX_BODY 限制)', async () => {
    const big = Buffer.alloc(3 * 1024 * 1024, 0x78);
    const server = http.createServer((req, res) => {
      res.writeHead(200, { 'x-upstream': 'yes' });
      res.end(big);
    });
    await new Promise((r) => server.listen(0, '127.0.0.1', r));
    const port = server.address().port;
    try {
      const prepared = relayLoopbackPrepare({ port, whitelist: [port], method: 'GET', path: '/big',
                                              query: '', headers: {}, body: Buffer.alloc(0),
                                              maxBody: 1024 * 1024, relayTimeout: 5000 });
      const { status, headers, res: upstream } = await httpRequestStream(
        'GET', prepared.url, prepared.headers, Buffer.alloc(0), 5000);
      assert.strictEqual(status, 200);
      const chunks = [];
      for await (const c of upstream) chunks.push(c);
      const body = Buffer.concat(chunks);
      assert.strictEqual(body.length, big.length); // 流式: 超过 maxBody (1MB) 不截断
      assert.strictEqual(body[0], 0x78);
      assert.strictEqual(headers['x-upstream'], 'yes');
    } finally {
      server.close();
    }
  });

  await test('relayLoopbackPrepare: 白名单拒绝不发起连接 + 请求体超限', () => {
    assert.throws(
      () => relayLoopbackPrepare({ port: 7788, whitelist: [], method: 'GET', path: '/',
                                   query: '', headers: {}, body: Buffer.alloc(0), maxBody: 99 }),
      (err) => err.relayCode === 'port_not_allowed');
    assert.throws(
      () => relayLoopbackPrepare({ port: 7788, whitelist: [7788], method: 'POST', path: '/',
                                   query: '', headers: {}, body: Buffer.alloc(5), maxBody: 4 }),
      (err) => err.relayCode === 'body_too_large');
    const ok = relayLoopbackPrepare({ port: 7788, whitelist: [7788], method: 'GET', path: '/x',
                                      query: 'a=1', headers: { host: 'evil', 'x-forwarded-for': '9' },
                                      body: Buffer.alloc(0), maxBody: 99, forwardedFor: '1.2.3.4' });
    assert.strictEqual(ok.url, 'http://127.0.0.1:7788/x?a=1');
    assert.strictEqual(ok.headers['x-forwarded-for'], '1.2.3.4'); // 过滤后注入
    assert.strictEqual(ok.headers.host, undefined);
  });

  console.log('== WS 透传 proxyWsRelayHandler (0.6.7) ==');

  await test('WS 透传: text/binary 保真回环 + 白名单拒绝 close 1008', async () => {
    // express/ws 为 js/ 私有依赖 (js/node_modules), 显式路径引用
    const express = require('../../js/node_modules/express');
    const expressWs = require('../../js/node_modules/express-ws');
    const WebSocketServer = require('../../js/node_modules/ws').WebSocketServer;
    const WsClient = require('../../js/node_modules/ws').WebSocket;

    // 上游 WS echo (ws 包服务端, 独立端口)
    const wss = new WebSocketServer({ host: '127.0.0.1', port: 0 });
    const upstreamPort = await new Promise((r) => wss.on('listening', () => r(wss.address().port)));
    wss.on('connection', (ws) => {
      ws.on('message', (data, isBinary) => {
        const echo = Buffer.concat([Buffer.from('echo:'), Buffer.from(data)]);
        ws.send(isBinary ? echo : echo.toString(), { binary: isBinary });
      });
    });

    // agent 侧独立 express-ws app (与 main() 同款接线)
    const app = express();
    expressWs(app);
    app.ws('/api/proxyws/:port/*', proxyWsRelayHandler);
    const srv = app.listen(0, '127.0.0.1');
    await new Promise((r) => srv.once('listening', r));
    const agentPort = srv.address().port;
    let activeClient = null;

    try {
      // 1) 白名单拒绝 → close 1008
      proxySetRuntimePorts('local', []);
      const rejectCode = await new Promise((resolve, reject) => {
        const c = new WsClient(`ws://127.0.0.1:${agentPort}/api/proxyws/${upstreamPort}/echo`);
        activeClient = c;
        c.on('close', (code) => resolve(code));
        c.on('error', (e) => reject(e));
      });
      assert.strictEqual(rejectCode, 1008);

      // 2) 放行 → text/binary 保真 (0.6.7 续批六分组口径: 本地组运行时)
      proxySetRuntimePorts('local', [upstreamPort]);
      await new Promise((resolve, reject) => {
        const c = new WsClient(`ws://127.0.0.1:${agentPort}/api/proxyws/${upstreamPort}/echo?u=1`);
        activeClient = c;
        let stage = 'text';
        c.on('error', reject);
        c.on('message', (data, isBinary) => {
          if (stage === 'text') {
            assert.strictEqual(data.toString(), 'echo:hello');
            stage = 'bin';
            c.send(Buffer.from([0x00, 0x01]), { binary: true });
          } else {
            assert.ok(isBinary, 'binary 回显');
            assert.strictEqual(data.subarray(5).toString('hex'), '0001');
            resolve();
          }
        });
        c.on('open', () => c.send('hello'));
      });
    } finally {
      if (activeClient) activeClient.terminate();
      proxySetRuntimePorts('local', []);
      wss.close();
      srv.close();
    }
  });

  await test('同路径 upgrade: /api/proxy/:port WS 透传与 HTTP 反代共存 (仅 py/js, 续批三)', async () => {
    // express/ws 为 js/ 私有依赖 (js/node_modules), 显式路径引用
    const express = require('../../js/node_modules/express');
    const expressWs = require('../../js/node_modules/express-ws');
    const WebSocketServer = require('../../js/node_modules/ws').WebSocketServer;
    const WsClient = require('../../js/node_modules/ws').WebSocket;

    // 上游: 同端口 HTTP echo + WS echo (模拟 code-server 类带 WS 的 web 应用)
    const upstream = http.createServer((req, res) => {
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.end('http-echo');
    });
    const wss = new WebSocketServer({ server: upstream });
    wss.on('connection', (ws) => {
      ws.on('message', (d, isBinary) => ws.send(isBinary ? d : 'echo:' + d.toString()));
    });
    await new Promise((r) => upstream.listen(0, '127.0.0.1', r));
    const upstreamPort = upstream.address().port;

    // agent 侧独立 app (与 main() 同款接线): ws 层注册在 app.all 之前 (express-ws 把
    // upgrade 改写 /.websocket 后缀注入同一条层栈, 顺序颠倒 upgrade 会被 HTTP 层先吞)
    const app = express();
    expressWs(app);
    app.ws('/api/proxy/:port/*', proxyWsRelayHandler);
    app.ws('/api/proxy/:port', proxyWsRelayHandler);
    app.all('/api/proxy/:port', (req, res) => res.status(200).send('http-coexist'));
    app.all('/api/proxy/:port/*', (req, res) => res.status(200).send('http-coexist'));
    const srv = app.listen(0, '127.0.0.1');
    await new Promise((r) => srv.once('listening', r));
    const agentPort = srv.address().port;

    try {
      proxySetRuntimePorts('local', [upstreamPort]);
      // 1) 同路径 WS upgrade → 透传保真
      await new Promise((resolve, reject) => {
        const c = new WsClient(`ws://127.0.0.1:${agentPort}/api/proxy/${upstreamPort}/echo?u=1`);
        c.on('error', reject);
        c.on('message', (data) => {
          assert.strictEqual(data.toString(), 'echo:hello', '同路径 WS 透传应回显');
          resolve();
          c.close();
        });
        c.on('open', () => c.send('hello'));
      });
      // 2) 同路径普通 HTTP → 仍走反代 (共存不互吞)
      const got = await new Promise((resolve, reject) => {
        http.get(`http://127.0.0.1:${agentPort}/api/proxy/${upstreamPort}/echo`, (r) => {
          const chunks = [];
          r.on('data', (c) => chunks.push(c));
          r.on('end', () => resolve({ status: r.statusCode, text: Buffer.concat(chunks).toString() }));
        }).on('error', reject);
      });
      assert.strictEqual(got.status, 200, '同路径普通 HTTP 应仍走反代');
      assert.strictEqual(got.text, 'http-coexist');
      // 3) 白名单拒绝 → close 1008 (语义与 /api/proxyws 一致)
      proxySetRuntimePorts('local', []);
      const rejectCode = await new Promise((resolve, reject) => {
        const c = new WsClient(`ws://127.0.0.1:${agentPort}/api/proxy/${upstreamPort}/echo`);
        c.on('close', (code) => resolve(code));
        c.on('error', (e) => reject(e));
      });
      assert.strictEqual(rejectCode, 1008);
    } finally {
      proxySetRuntimePorts('local', []);
      wss.close();
      upstream.close();
      srv.close();
    }
  });

  await test('Config.KHUB_PORTS/KPROXY_PORTS 为数组 (两组 env 下限同源消费)', () => {
    assert.ok(Array.isArray(Config.KHUB_PORTS), 'Config.KHUB_PORTS 应为数组 (缺省空=HUB 组 env 下限空)');
    assert.ok(Array.isArray(Config.KPROXY_PORTS), 'Config.KPROXY_PORTS 应为数组 (缺省空=本地组路由禁用)');
  });

  console.log('== 运行时白名单 set/merge (续批六分组口径, 19.9/20.8) ==');

  await test('proxyMergeRuntimePorts: 并入保留已有 + 非法过滤 (bool/非数字/越界)', () => {
    proxySetRuntimePorts('local', [7788]);
    proxyMergeRuntimePorts('local', [9090, 7788, 0, 70000, -1, 'abc', null, true, '8443']);
    assert.deepStrictEqual(proxyRuntimePorts('local'), [7788, 8443, 9090], '并入后应为已有 ∪ 新增 (过滤非法)');
    assert.deepStrictEqual(
      proxyEffectivePorts('local'),
      [...new Set([...(Config.KPROXY_PORTS || []), 7788, 8443, 9090])].sort((a, b) => a - b),
      '本地组聚合应为 KPROXY_PORTS ∪ 本地运行时');
    proxySetRuntimePorts('local', []);
  });

  await test('两组独立: HUB 组与本地组互不污染', () => {
    proxySetRuntimePorts('hub', [7788]);
    proxyMergeRuntimePorts('hub', [9090]);
    proxySetRuntimePorts('local', [3000]);
    proxyMergeRuntimePorts('local', [5173]);
    assert.deepStrictEqual(proxyRuntimePorts('hub'), [7788, 9090], 'HUB 组独立存储');
    assert.deepStrictEqual(proxyRuntimePorts('local'), [3000, 5173], '本地组独立存储');
    assert.deepStrictEqual(
      proxyEffectivePorts('hub'),
      [...new Set([...(Config.KHUB_PORTS || []), 7788, 9090])].sort((a, b) => a - b),
      'HUB 组聚合应为 KHUB_PORTS ∪ hub 运行时');
    assert.deepStrictEqual(
      proxyEffectivePorts('local'),
      [...new Set([...(Config.KPROXY_PORTS || []), 3000, 5173])].sort((a, b) => a - b),
      '本地组聚合应为 KPROXY_PORTS ∪ 本地运行时');
    proxySetRuntimePorts('hub', []);
    proxySetRuntimePorts('local', []);
  });

  await test('set 整体覆盖 vs merge 只增: 同组两种写入', () => {
    proxyMergeRuntimePorts('hub', [7788]);
    proxySetRuntimePorts('hub', [9090]);
    assert.deepStrictEqual(proxyRuntimePorts('hub'), [9090], 'set 应整体覆盖 (config POST 语义)');
    proxyMergeRuntimePorts('hub', [7788]);
    assert.deepStrictEqual(proxyRuntimePorts('hub'), [7788, 9090], 'merge 应追加 (注册端口语义)');
    proxySetRuntimePorts('hub', []);
  });

  console.log(failed === 0 ? '\n全部通过' : `\n${failed} 个用例失败`);
  process.exitCode = failed === 0 ? 0 : 1;
}

main();
