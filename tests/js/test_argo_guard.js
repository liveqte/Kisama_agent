#!/usr/bin/env node
// Argo 临时隧道守护自愈 (0.5.2) 离线单元测试 (js 版):
// 1. _reregister 成功 → entry.tunnelDomain 更新 + onDomainChange 回调
// 2. _reregister 失败 → 返回 false, 域名不变
// 3. 0.6.4 状态透明: alive→reconnecting→failed→alive 流转 + 条目不丢弃
//    (_connectEdge/_H2Connection/_requester 注入缝 mock, 连接恒败模拟 edge 不可达)
// 4. 0.6.4 指数退避公式与 last_error 截断
// 全部 mock 网络层, 不依赖外网。
'use strict';
const path = require('path');
const assert = require('assert');

// 阈值调低到 2, 让 failed 流转在测试窗口内完成 (必须在 require agent.js 之前设置)
process.env.KISAMA_ARGO_REREGISTER_AFTER = '2';

const {
  ArgoTunnelManager,
  argoBackoffSeconds, argoTruncateError,
  argoRetryBaseSeconds, argoRetryMaxSeconds, argoReregisterAfter,
} = require(path.join(__dirname, '..', '..', 'js', 'agent.js'));

const logger = { debug() {}, info() {}, warning() {} };
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitFor(predicate, timeout = 15000, step = 50) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    if (predicate()) return true;
    await sleep(step);
  }
  return false;
}

async function testReregisterSuccess() {
  const manager = new ArgoTunnelManager(logger);
  const events = [];
  manager.onDomainChange = (oldDomain, newDomain) => events.push([oldDomain, newDomain]);
  manager._requester = async () => ['https://new-dom.trycloudflare.com', 'tag', Buffer.alloc(32), Buffer.alloc(16)];
  const entry = { tunnelDomain: 'https://old-dom.trycloudflare.com', port: 8000, stopped: false };
  const applied = [];
  const ok = await manager._reregister(entry, (tag, secret, id) => applied.push([tag, secret, id]));
  assert.strictEqual(ok, true, '重新注册应返回 true');
  assert.strictEqual(entry.tunnelDomain, 'https://new-dom.trycloudflare.com', '域名应更新');
  assert.strictEqual(applied.length, 1, '新凭据应被应用');
  assert.deepStrictEqual(events, [['https://old-dom.trycloudflare.com', 'https://new-dom.trycloudflare.com']],
    '回调应收到 (old, new)');
  console.log('✅ _reregister 成功: 域名更新 + 凭据应用 + 回调触发');
}

async function testReregisterFailure() {
  const manager = new ArgoTunnelManager(logger);
  const events = [];
  manager.onDomainChange = (oldDomain, newDomain) => events.push([oldDomain, newDomain]);
  manager._requester = async () => { throw new Error('network down'); };
  const entry = { tunnelDomain: 'https://old-dom.trycloudflare.com', port: 8000, stopped: false };
  const ok = await manager._reregister(entry, () => {});
  assert.strictEqual(ok, false, '重新注册失败应返回 false');
  assert.strictEqual(entry.tunnelDomain, 'https://old-dom.trycloudflare.com', '域名应保持不变');
  assert.deepStrictEqual(events, [], '失败时不应触发回调');
  console.log('✅ _reregister 失败: 返回 false + 域名保持 + 不触发回调');
}

async function testNoCallbackWhenUnset() {
  const manager = new ArgoTunnelManager(logger);
  manager._requester = async () => ['https://new-dom.trycloudflare.com', 'tag', Buffer.alloc(32), Buffer.alloc(16)];
  const entry = { tunnelDomain: 'https://old-dom.trycloudflare.com', port: 8000, stopped: false };
  const ok = await manager._reregister(entry, () => {});   // 未注册回调 (纯 /api/argo 场景)
  assert.strictEqual(ok, true);
  assert.strictEqual(entry.tunnelDomain, 'https://new-dom.trycloudflare.com');
  console.log('✅ 未注册回调时不报错 (纯 /api/argo 场景)');
}

async function testBackoffFormula() {
  // 测试进程未设置 RETRY_BASE/MAX env → 缺省 2/300
  assert.strictEqual(argoRetryBaseSeconds, 2, '退避基数缺省 2');
  assert.strictEqual(argoRetryMaxSeconds, 300, '退避封顶缺省 300');
  assert.strictEqual(argoBackoffSeconds(0), 2);
  assert.strictEqual(argoBackoffSeconds(1), 2);
  assert.strictEqual(argoBackoffSeconds(2), 4);
  assert.strictEqual(argoBackoffSeconds(3), 8);
  assert.strictEqual(argoBackoffSeconds(8), 256);
  assert.strictEqual(argoBackoffSeconds(9), 300, '512 → 封顶 MAX');
  assert.strictEqual(argoBackoffSeconds(11), 300, '指数钳制 10 后封顶');
  assert.strictEqual(argoBackoffSeconds(999), 300, '封顶 MAX');
  assert.strictEqual(argoTruncateError(null), null);
  assert.strictEqual(argoTruncateError('x'.repeat(400)), 'x'.repeat(300));
  assert.strictEqual(argoTruncateError('boom'), 'boom');
  console.log('✅ 指数退避公式: 2→4→8→…→封顶 300, 指数钳制 + last_error 截断 300 字');
}

async function testStatusRecovery() {
  // 失败一轮 → reconnecting + last_error; 注册成功 → alive + 计数清零 + last_error 清空
  const manager = new ArgoTunnelManager(logger);
  let allowSuccess = false;
  manager._requester = async () => ['https://dom1.trycloudflare.com', 'tag', Buffer.alloc(32), Buffer.alloc(16)];
  manager._connectEdge = async () => ({ destroy() {} });
  manager._H2Connection = class {
    constructor() { this.registered = false; }
    async run() {
      if (!allowSuccess) throw new Error('edge unreachable (simulated)');
      this.registered = true;
      throw new Error('disconnect after registration');
    }
  };
  const entry = await manager.create(59776, false, false);
  const reachedReconnecting = await waitFor(
    () => entry.status === 'reconnecting' && entry.consecutiveFailures >= 1);
  assert.ok(reachedReconnecting, '首轮失败应标记 reconnecting');
  assert.ok((entry.lastError || '').includes('edge unreachable'), 'last_error 应暴露失败原因');
  assert.ok(entry.lastErrorAt, 'last_error_at 应写入');
  allowSuccess = true;   // 下一轮注册成功 → 回 alive
  const reachedAlive = await waitFor(() => entry.status === 'alive' && entry.consecutiveFailures === 0);
  assert.ok(reachedAlive, '注册成功后应回 alive');
  assert.strictEqual(entry.lastError, null, '恢复后 last_error 清空');
  assert.strictEqual(entry.lastErrorAt, null, '恢复后 last_error_at 清空');
  assert.ok(entry.lastRegisteredAt, '恢复后 last_registered_at 写入');
  entry.stopped = true;
  await entry.runPromise.catch(() => {});
  console.log('✅ 状态流转 alive→reconnecting→alive: 计数清零 + last_error 清空');
}

async function testFailedStatusKeptInList() {
  // 连续失败达阈值且重注册失败: status=failed + last_error 暴露, 条目保留在列表不丢弃
  const manager = new ArgoTunnelManager(logger);
  manager._requester = async () => ['https://dom1.trycloudflare.com', 'tag', Buffer.alloc(32), Buffer.alloc(16)];
  manager._connectEdge = async () => ({ destroy() {} });
  manager._H2Connection = class {
    constructor() { this.registered = false; }
    async run() { throw new Error('edge unreachable (simulated)'); }
  };
  const entry = await manager.create(59777, false, false);
  // create 已用 _requester 注册成功, 此后换成恒败: 达阈值 (env=2) 后重注册亦失败 → failed
  manager._requester = async () => { throw new Error('api.trycloudflare.com unreachable'); };
  const reachedFailed = await waitFor(() => entry.status === 'failed');
  assert.ok(reachedFailed, '达阈值且重注册失败应标记 failed');
  assert.ok(entry.consecutiveFailures >= argoReregisterAfter, '连续失败计数应达阈值');
  assert.ok((entry.lastError || '').length > 0, 'failed 态 last_error 应保留失败原因');
  assert.ok(entry.lastErrorAt, 'failed 态 last_error_at 应写入');
  // 条目不丢弃: list() 仍返回 failed 条目且携带全部状态字段
  const listed = manager.list();
  assert.strictEqual(listed.length, 1, 'failed 条目应保留在列表');
  assert.strictEqual(listed[0].status, 'failed');
  assert.strictEqual(listed[0].last_error, entry.lastError);
  assert.strictEqual(listed[0].consecutive_failures, entry.consecutiveFailures);
  assert.ok(listed[0].last_error_at, '列表条目应携带 last_error_at');
  // remove() 的 deleted 条目同样携带状态字段 (失效条目仍可删除)
  const removed = await manager.remove(59777, 'https://dom1.trycloudflare.com');
  assert.strictEqual(removed.status, 'ok');
  assert.strictEqual(removed.deleted, 1);
  assert.strictEqual(removed.tunnels[0].status, 'failed');
  console.log('✅ failed 态条目保留: list()/remove() 均携带 status/last_error, 不丢弃');
}

(async () => {
  await testReregisterSuccess();
  await testReregisterFailure();
  await testNoCallbackWhenUnset();
  await testBackoffFormula();
  await testStatusRecovery();
  await testFailedStatusKeptInList();
  console.log('ALL ARGO GUARD TESTS PASSED');
})().catch((err) => {
  console.error('❌ TEST FAILED:', err);
  process.exit(1);
});
