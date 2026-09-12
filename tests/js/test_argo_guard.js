#!/usr/bin/env node
// Argo 临时隧道守护自愈 (0.5.2) 离线单元测试 (js 版):
// 1. _reregister 成功 → entry.tunnelDomain 更新 + onDomainChange 回调
// 2. _reregister 失败 → 返回 false, 域名不变
// 全部 mock 注册请求 (_requester 注入缝), 不依赖外网。
'use strict';
const path = require('path');
const assert = require('assert');

const { ArgoTunnelManager } = require(path.join(__dirname, '..', '..', 'js', 'agent.js'));

const logger = { debug() {}, info() {}, warning() {} };

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

(async () => {
  await testReregisterSuccess();
  await testReregisterFailure();
  await testNoCallbackWhenUnset();
  console.log('ALL ARGO GUARD TESTS PASSED');
})().catch((err) => {
  console.error('❌ TEST FAILED:', err);
  process.exit(1);
});
