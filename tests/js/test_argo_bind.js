#!/usr/bin/env node
// Argo 动态绑定 shz.al 上报 (0.6.8, docs/API.MD 七) 离线单元测试 (js 版):
// 1. 缺省派生规则: 上报名 = KNAME-端口, 管理密钥 = 上报名 + "123" (字面后缀)
// 2. 显式指定覆盖派生值 + 校验 (显式 key <8 拒绝 / 非法字符拒绝 / KNAME 未设置派生拒绝)
// 3. bind/unbind 错误映射 (404 无隧道或无绑定 / 409 多隧道未指定、kmode 来源、端口已被绑定 / 400 校验)
// 4. create+shz / create+shz_name: 创建后绑定、注册前拦截 (不产生孤儿隧道)
// 5. 查询可见性: list() 绑定条目 shz_name/shz_url, 未绑定 null
// 6. 逐条目换域名重报: 绑定后 onDomainChange 按绑定名重报, 解绑后回落 manager 级回调
// 7. TaskStore argobinds roundtrip: 条目过滤、key 仅显式持久化、未启用返回 false
// 全部 mock 网络层, 不依赖外网。
'use strict';
const path = require('path');
const assert = require('assert');
const fs = require('fs');
const os = require('os');

const mod = require(path.join(__dirname, '..', '..', 'js', 'agent.js'));
const { ArgoTunnelManager, TaskStore, KModeController, argoBindName, argoBindKey, argoBindError } = mod;

const logger = { debug() {}, info() {}, warn() {}, warning() {}, error() {} };
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Config.KNAME 直接赋值覆盖 (静态字段, 测试结束恢复)
let savedKname = null;
function setKname(v) {
  if (savedKname === null) savedKname = mod.Config.KNAME;
  mod.Config.KNAME = v;
}

// KModeController 上报/删除方法打桩 (避免真实网络)
const savedReportDomainChange = KModeController.reportDomainChange;
const savedDeleteShzal = KModeController.deleteShzal;
function stubShzal(reportCalls, deleteCalls) {
  KModeController.reportDomainChange = async (domain, name, key) => {
    if (reportCalls) reportCalls.push({ domain, name, key });
    return true;
  };
  KModeController.deleteShzal = async (name, key) => {
    if (deleteCalls) deleteCalls.push([name, key]);
    return true;
  };
}
function restoreShzal() {
  KModeController.reportDomainChange = savedReportDomainChange;
  KModeController.deleteShzal = savedDeleteShzal;
}

function makeEntry(port, hostname, source = 'api') {
  return {
    tunnelDomain: hostname, port, createdAt: new Date().toISOString(), transport: 'h2',
    status: 'alive', lastError: null, lastErrorAt: null, consecutiveFailures: 0,
    lastRegisteredAt: new Date().toISOString(),
    source, shzName: null, shzKey: null, shzKeyExplicit: false, onDomainChange: null,
    stopped: false, sock: null, conn: null, runPromise: Promise.resolve()
  };
}

function addEntry(manager, port, hostname, source = 'api') {
  const entry = makeEntry(port, hostname, source);
  const arr = manager.tunnels.get(port) || [];
  arr.push(entry);
  manager.tunnels.set(port, arr);
  return entry;
}

async function testDerivation() {
  setKname('web');
  assert.strictEqual(argoBindName(8000), 'web-8000', '派生名 = KNAME-端口');
  assert.strictEqual(argoBindKey('web-8000'), 'web-8000123', '派生密钥 = 上报名+123');
  setKname('abc');
  assert.strictEqual(argoBindKey(argoBindName(1)).length, 8, '最短合法名派生密钥恰 8 字符');
  assert.strictEqual(argoBindError(8000), null, '派生校验通过');
  console.log('✅ 缺省派生: web-8000 → web-8000123, 最短密钥恰 8 字符');
}

async function testValidation() {
  setKname('');
  assert.ok(argoBindError(8000).includes('KNAME'), 'KNAME 未设置应拒绝');
  setKname('ab');
  assert.ok(argoBindError(8000).includes('过短'), 'KNAME 过短应拒绝');
  setKname('we b');
  assert.ok(argoBindError(8000).includes('非法字符'), 'KNAME 非法字符应拒绝');
  setKname('');
  assert.strictEqual(argoBindError(8000, 'myapp'), null, '显式名不依赖 KNAME');
  assert.strictEqual(argoBindKey('myapp'), 'myapp123', '显式名密钥缺省 = name+123');
  assert.ok(argoBindError(8000, 'myapp', 'short').includes('密钥过短'), '显式密钥 <8 拒绝');
  assert.ok(argoBindError(8000, 'bad name!').includes('非法字符'), '显式名非法字符拒绝');
  console.log('✅ 校验: KNAME 缺失/过短/非法与显式 key<8 全拒绝');
}

async function testBindSuccess() {
  const manager = new ArgoTunnelManager(logger);
  const reportCalls = [];
  stubShzal(reportCalls, null);
  setKname('web');
  const entry = addEntry(manager, 8000, 'https://bind1.trycloudflare.com');
  const res = await manager.bind(8000);
  restoreShzal();
  assert.strictEqual(res.status, 'ok', '绑定应成功');
  assert.strictEqual(res.bound, true);
  assert.strictEqual(res.shz_name, 'web-8000');
  assert.strictEqual(res.shz_url, 'https://shz.al/~web-8000');
  assert.strictEqual(res.tunnel_domain, 'https://bind1.trycloudflare.com');
  assert.strictEqual(entry.shzName, 'web-8000');
  assert.strictEqual(entry.shzKey, 'web-8000123');
  assert.strictEqual(entry.shzKeyExplicit, false, '派生密钥不标记显式');
  await sleep(20);
  assert.strictEqual(reportCalls.length, 1, '首次上报应异步触发');
  assert.strictEqual(reportCalls[0].name, 'web-8000');
  assert.strictEqual(reportCalls[0].key, 'web-8000123');
  console.log('✅ bind 成功: 响应携带 shz_name/shz_url + 首次上报异步触发');
}

async function testBindExplicit() {
  const manager = new ArgoTunnelManager(logger);
  stubShzal([], null);
  const entry = addEntry(manager, 8000, 'https://bind1.trycloudflare.com');
  const res = await manager.bind(8000, null, 'myapp', 'mysecret-key');
  restoreShzal();
  assert.strictEqual(res.shz_name, 'myapp');
  assert.strictEqual(res.shz_url, 'https://shz.al/~myapp');
  assert.strictEqual(entry.shzKey, 'mysecret-key');
  assert.strictEqual(entry.shzKeyExplicit, true, '显式密钥应标记');
  console.log('✅ bind 显式 name/key: 完整覆盖派生值');
}

async function testBindErrors() {
  const manager = new ArgoTunnelManager(logger);
  stubShzal([], null);
  setKname('web');
  let res = await manager.bind(9999);
  assert.strictEqual(res.status, 404, '无隧道应 404');
  addEntry(manager, 8000, 'https://a.trycloudflare.com');
  addEntry(manager, 8000, 'https://b.trycloudflare.com');
  res = await manager.bind(8000);
  assert.strictEqual(res.status, 409, '多隧道未指定应 409');
  res = await manager.bind(8000, 'https://missing.trycloudflare.com');
  assert.strictEqual(res.status, 404, '无匹配域名应 404');
  res = await manager.bind(8000, 'https://a.trycloudflare.com', 'bad name!');
  assert.strictEqual(res.status, 400, '非法名应 400');
  restoreShzal();
  console.log('✅ bind 错误映射: 404/409/404/400 全覆盖');
}

async function testBindKmodeRejected() {
  const manager = new ArgoTunnelManager(logger);
  stubShzal([], null);
  setKname('web');
  const entry = addEntry(manager, 8000, 'https://kmode.trycloudflare.com', 'kmode');
  const res = await manager.bind(8000);
  restoreShzal();
  assert.strictEqual(res.status, 409, 'KMODE 来源隧道应 409');
  assert.ok(res.message.includes('KMODE'), 'message 应说明 KMODE 管理');
  assert.strictEqual(entry.shzName, null, 'KMODE 隧道不应被绑定');
  console.log('✅ KMODE 自建隧道不可绑定 (语义冲突防护)');
}

async function testBindPortConflict() {
  const manager = new ArgoTunnelManager(logger);
  stubShzal([], null);
  setKname('web');
  const a = addEntry(manager, 8000, 'https://a.trycloudflare.com');
  const b = addEntry(manager, 8000, 'https://b.trycloudflare.com');
  let res = await manager.bind(8000, 'https://a.trycloudflare.com');
  assert.strictEqual(res.status, 'ok');
  res = await manager.bind(8000, 'https://b.trycloudflare.com');
  assert.strictEqual(res.status, 409, '端口已被绑定应 409');
  assert.strictEqual(a.shzName, 'web-8000');
  assert.strictEqual(b.shzName, null);
  // 幂等重报: 同一隧道重复绑定
  res = await manager.bind(8000, 'https://a.trycloudflare.com', 'myapp');
  assert.strictEqual(res.status, 'ok');
  assert.strictEqual(a.shzName, 'myapp');
  restoreShzal();
  console.log('✅ 端口绑定唯一性 + 同隧道幂等重报');
}

async function testUnbind() {
  const manager = new ArgoTunnelManager(logger);
  const reportCalls = [];
  const deleteCalls = [];
  stubShzal(reportCalls, deleteCalls);
  setKname('web');
  const entry = addEntry(manager, 8000, 'https://a.trycloudflare.com');
  const managerCb = () => {};
  manager.onDomainChange = managerCb;
  await manager.bind(8000);
  assert.notStrictEqual(entry.onDomainChange, null, '绑定后应设置逐条目回调');
  const res = await manager.unbind(8000);
  assert.strictEqual(res.status, 'ok');
  assert.strictEqual(res.bound, false);
  assert.strictEqual(res.shz_name, null);
  assert.strictEqual(entry.shzName, null);
  assert.strictEqual(entry.shzKey, null);
  assert.strictEqual(entry.onDomainChange, null, '解绑应回落 manager 级回调');
  // 无绑定再解绑 → 404
  const res2 = await manager.unbind(8000);
  assert.strictEqual(res2.status, 404, '无绑定解绑应 404');
  restoreShzal();
  console.log('✅ unbind: 字段清理 + 回调回落 + 无绑定 404');
}

async function testListVisibility() {
  const manager = new ArgoTunnelManager(logger);
  stubShzal([], null);
  setKname('web');
  addEntry(manager, 8000, 'https://a.trycloudflare.com');
  addEntry(manager, 9000, 'https://b.trycloudflare.com');
  await manager.bind(8000);
  const items = {};
  for (const t of manager.list()) items[t.port] = t;
  restoreShzal();
  assert.strictEqual(items[8000].shz_name, 'web-8000');
  assert.strictEqual(items[8000].shz_url, 'https://shz.al/~web-8000');
  assert.strictEqual(items[9000].shz_name, null, '未绑定应 null');
  assert.strictEqual(items[9000].shz_url, null);
  console.log('✅ 查询可见性: 绑定条目 shz_name/shz_url, 未绑定 null');
}

async function testRemoveCleansBinding() {
  const manager = new ArgoTunnelManager(logger);
  const deleteCalls = [];
  stubShzal([], deleteCalls);
  setKname('web');
  addEntry(manager, 8000, 'https://a.trycloudflare.com');
  await manager.bind(8000);
  const res = await manager.remove(8000);
  restoreShzal();
  assert.strictEqual(res.status, 'ok');
  assert.strictEqual(res.deleted, 1);
  assert.strictEqual(res.tunnels[0].shz_name, 'web-8000', '删除明细携带绑定信息');
  assert.strictEqual(res.tunnels[0].shz_url, 'https://shz.al/~web-8000');
  await sleep(20);
  assert.deepStrictEqual(deleteCalls, [['web-8000', 'web-8000123']], '远端记录应异步删除');
  console.log('✅ 删除绑定隧道: 明细携带绑定 + 远端记录异步删除');
}

async function testCreateWithShz() {
  const manager = new ArgoTunnelManager(logger);
  const reportCalls = [];
  stubShzal(reportCalls, null);
  setKname('web');
  manager._requester = async () => ['https://created.trycloudflare.com', 'tag', Buffer.alloc(32), Buffer.alloc(16)];
  manager._connectEdge = async () => ({ destroy() {} });
  manager._H2Connection = class {
    constructor() { this.registered = false; }
    async run() { throw new Error('edge unreachable (simulated)'); }
  };
  const entry = await manager.create(8000, false, false, { shz: true });
  assert.strictEqual(entry.source, 'api');
  assert.strictEqual(entry.shzName, 'web-8000');
  assert.strictEqual(entry.shzKey, 'web-8000123');
  await sleep(20);
  assert.strictEqual(reportCalls.length, 1, '创建后绑定应异步首次上报');
  // 显式 name 创建
  const entry2 = await manager.create(9000, false, false, { shzName: 'myapp', shzKey: 'mysecret-key' });
  assert.strictEqual(entry2.shzName, 'myapp');
  assert.strictEqual(entry2.shzKeyExplicit, true);
  // 无绑定创建 → shz 字段 null
  const entry3 = await manager.create(9100, false, false, null);
  assert.strictEqual(entry3.shzName, null);
  // 注册前拦截: 校验失败 400 且无孤儿隧道
  let threw = null;
  try { await manager.create(9200, false, false, { shzName: 'myapp', shzKey: 'short' }); }
  catch (e) { threw = e; }
  assert.ok(threw && threw.status === 400, '显式密钥过短应 400');
  assert.strictEqual(manager.tunnels.get(9200), undefined, '400 不产生孤儿隧道');
  // 注册前拦截: 端口已有绑定 409 且不新建
  threw = null;
  try { await manager.create(8000, true, false, { shz: true }); }
  catch (e) { threw = e; }
  assert.ok(threw && threw.status === 409, '端口已有绑定应 409');
  assert.strictEqual(manager.tunnels.get(8000).length, 1, '409 不新建隧道');
  for (const arr of manager.tunnels.values()) for (const e of arr) e.stopped = true;
  restoreShzal();
  console.log('✅ create+shz: 绑定生效 / 显式覆盖 / 注册前拦截无孤儿隧道');
}

async function testDomainChangeRebind() {
  const manager = new ArgoTunnelManager(logger);
  const reportCalls = [];
  stubShzal(reportCalls, null);
  setKname('web');
  const entry = addEntry(manager, 8000, 'https://a.trycloudflare.com');
  await manager.bind(8000);
  reportCalls.length = 0;
  // 模拟守护重建换域名: 直接调逐条目回调
  entry.onDomainChange('https://old.trycloudflare.com', 'https://new.trycloudflare.com');
  restoreShzal();
  assert.strictEqual(reportCalls.length, 1);
  assert.strictEqual(reportCalls[0].domain, 'https://new.trycloudflare.com');
  assert.strictEqual(reportCalls[0].name, 'web-8000');
  assert.strictEqual(reportCalls[0].key, 'web-8000123');
  console.log('✅ 换域名重报: 逐条目回调按绑定名重报');
}

async function testTaskStoreRoundtrip() {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'argo-bind-store-'));
  const storePath = path.join(tmpDir, 'store.enc');
  const keyHex = 'aa'.repeat(32);
  process.env.KSTORE = storePath;
  process.env.KSTORE_KEY = keyHex;
  try {
    TaskStore.init();
    assert.strictEqual(TaskStore.saveArgobinds([
      { port: 8000, name: 'web-8000' },
      { port: 9000, name: 'myapp', key: 'mysecret-key' },
      { port: 70000, name: 'badport' },       // 端口越界
      { port: 8001 },                          // 缺 name
      'not-a-dict'
    ]), true, 'saveArgobinds 应成功');
    TaskStore.state.enabled = false;
    TaskStore.init();
    TaskStore.load();
    const binds = TaskStore.getArgobinds();
    assert.deepStrictEqual(binds, [
      { port: 8000, name: 'web-8000' },
      { port: 9000, name: 'myapp', key: 'mysecret-key' }
    ], 'roundtrip 应保留合法条目并过滤非法');
    // 空 key 不持久化
    TaskStore.saveArgobinds([{ port: 8000, name: 'web-8000', key: '' }]);
    TaskStore.state.enabled = false;
    TaskStore.init();
    TaskStore.load();
    assert.deepStrictEqual(TaskStore.getArgobinds(), [{ port: 8000, name: 'web-8000' }]);
    // 未启用 → false 且内存字段不更新
    process.env.KSTORE_KEY = '';
    TaskStore.state.enabled = false;
    TaskStore.init();
    TaskStore.load();
    assert.strictEqual(TaskStore.saveArgobinds([{ port: 8000, name: 'x' }]), false, '未启用应 false');
    assert.deepStrictEqual(TaskStore.getArgobinds(), [], '未启用恒为空');
    // 清理状态, 不影响其他测试文件
    TaskStore.state.enabled = false;
    TaskStore.state.path = null;
    TaskStore.state.key = null;
    TaskStore.state.argobinds = [];
  } finally {
    delete process.env.KSTORE;
    delete process.env.KSTORE_KEY;
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
  console.log('✅ TaskStore argobinds: roundtrip + 过滤 + key 仅显式持久化 + 未启用关闭');
}

async function main() {
  await testDerivation();
  await testValidation();
  await testBindSuccess();
  await testBindExplicit();
  await testBindErrors();
  await testBindKmodeRejected();
  await testBindPortConflict();
  await testUnbind();
  await testListVisibility();
  await testRemoveCleansBinding();
  await testCreateWithShz();
  await testDomainChangeRebind();
  await testTaskStoreRoundtrip();
  if (savedKname !== null) mod.Config.KNAME = savedKname;
  console.log('\n🎉 test_argo_bind.js 全部通过');
}

main().catch((e) => { console.error('❌', e); process.exit(1); });
