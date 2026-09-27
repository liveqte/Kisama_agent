// TaskStore 任务持久化单测 (0.5.7, 不启动 agent, docs/API.MD 十三)
// 运行: node tests/js/test_task_store.js
const { TaskStore, TaskManager, Config } = require('../../js/agent.js');
const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const TEST_KEY_HEX = 'aa'.repeat(32);
const TEST_KEY_B64 = Buffer.from(Array.from({ length: 32 }, (_, i) => i)).toString('base64');

function tempDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function withEnv(env, fn) {
  const saved = {};
  for (const k of Object.keys(env)) { saved[k] = process.env[k]; process.env[k] = env[k]; }
  try {
    return fn();
  } finally {
    for (const k of Object.keys(env)) {
      if (saved[k] === undefined) delete process.env[k]; else process.env[k] = saved[k];
    }
  }
}

function makeStore(dir, key = TEST_KEY_HEX, kstorePath) {
  withEnv({ KSTORE: kstorePath !== undefined ? kstorePath : path.join(dir, 'store.enc'), KSTORE_KEY: key }, () => {
    TaskStore.init();
  });
  return TaskStore.state;
}

function resetState() {
  TaskStore.state.enabled = false;
  TaskStore.state.locked = false;
  TaskStore.state.path = null;
  TaskStore.state.key = null;
  TaskStore.state.lastSavedAt = null;
  Config.onetasks = [];
  Config.crontasks = {};
  Config.InitTask = true;
}

async function testKeyParsing() {
  resetState();
  makeStore(tempDir('ks_'));
  assert.strictEqual(TaskStore.state.enabled, true, '合法 hex 密钥应启用持久化');

  resetState();
  makeStore(tempDir('ks_'), TEST_KEY_B64);
  assert.strictEqual(TaskStore.state.enabled, true, '合法 base64 密钥应启用持久化');

  for (const bad of ['short', 'zz'.repeat(32), 'AA'.repeat(31), '!'.repeat(44)]) {
    resetState();
    makeStore(tempDir('ks_'), bad);
    assert.strictEqual(TaskStore.state.enabled, false, `非法密钥 (${bad.slice(0, 8)}...) 应 fail-closed 关闭`);
    assert.strictEqual(TaskStore.state.path, null);
  }

  resetState();
  makeStore(tempDir('ks_'), '');
  assert.strictEqual(TaskStore.state.enabled, false, '缺少 KSTORE_KEY 应关闭');

  for (const off of ['off', '0', 'OFF', 'false']) {
    resetState();
    makeStore(tempDir('ks_'), TEST_KEY_HEX, off);
    assert.strictEqual(TaskStore.state.enabled, false, `KSTORE=${off} 应显式关闭持久化`);
  }

  console.log('✅ KSTORE_KEY 解析与开关语义');
}

async function testSaveLoadRoundtrip() {
  resetState();
  const dir = tempDir('ks_rt_');
  makeStore(dir);
  const onetasks = ['echo one', 'python -c "print(1)"\necho two'];
  const crontasks = { '*/5 * * * *': 'echo hi' };
  assert.strictEqual(TaskStore.save(onetasks, crontasks), true, 'save 应成功');
  assert.ok(TaskStore.state.lastSavedAt, 'save 后应有 last_saved_at');

  // 密文不含明文命令
  const payload = fs.readFileSync(path.join(dir, 'store.enc'), 'utf8');
  assert.ok(!payload.includes('echo one'), '密文中不得出现明文命令');

  resetState();
  makeStore(dir);
  const restored = TaskStore.load();
  assert.deepStrictEqual(restored.onetasks, onetasks, '多行命令应原样恢复');
  assert.deepStrictEqual(restored.crontasks, crontasks);

  // 文件缺失 = 首次运行
  resetState();
  makeStore(tempDir('ks_miss_'));
  const empty = TaskStore.load();
  assert.deepStrictEqual(empty.onetasks, []);
  assert.deepStrictEqual(empty.crontasks, {});

  console.log('✅ save→load 往返 (含多行命令) 与密文检查');
}

async function testQuarantine() {
  resetState();
  const dir = tempDir('ks_q_');
  makeStore(dir);
  TaskStore.save(['cmd'], {});

  fs.writeFileSync(path.join(dir, 'store.enc'), 'definitely-not-a-valid-payload', 'utf8');
  let restored = TaskStore.load();
  assert.deepStrictEqual(restored.onetasks, [], '损坏文件应安全降级为空表');
  assert.strictEqual(fs.readdirSync(dir).filter(f => f.startsWith('store.enc.bad-')).length, 1, '损坏文件应被隔离改名');

  // 错误密钥 → 隔离 (先重新生成有效密文, 再换密钥加载)
  resetState();
  makeStore(dir);
  TaskStore.save(['cmd'], {});
  resetState();
  makeStore(dir, 'bb'.repeat(32));
  restored = TaskStore.load();
  assert.deepStrictEqual(restored.onetasks, []);
  assert.strictEqual(fs.readdirSync(dir).filter(f => f.startsWith('store.enc.bad-')).length, 2, '错误密钥加载后原文件应被隔离');

  console.log('✅ 损坏/错误密钥文件隔离');
}

async function testHigherVersionLocked() {
  resetState();
  const dir = tempDir('ks_v_');
  makeStore(dir);
  const doc = JSON.stringify({ magic: 'kisama-store', version: 99, saved_at: 't', data: {} });
  const iv = require('crypto').randomBytes(12);
  const cipher = require('crypto').createCipheriv('aes-256-gcm', TaskStore.state.key, iv);
  const ct = Buffer.concat([cipher.update(Buffer.from(doc, 'utf8')), cipher.final()]);
  const payload = Buffer.from(JSON.stringify({
    nonce: iv.toString('base64'),
    tag: cipher.getAuthTag().toString('base64'),
    ciphertext: ct.toString('base64')
  }), 'utf8').toString('base64');
  fs.writeFileSync(path.join(dir, 'store.enc'), payload, 'utf8');

  const restored = TaskStore.load();
  assert.deepStrictEqual(restored.onetasks, []);
  assert.strictEqual(TaskStore.state.locked, true, '高版本数据应锁定写');
  assert.strictEqual(TaskStore.save(['cmd'], {}), false, '只读状态下禁止覆盖写');
  assert.ok(fs.existsSync(path.join(dir, 'store.enc')), '高版本原文件必须保留');

  console.log('✅ 高版本数据锁定保护');
}

async function testTaskManagerGate() {
  resetState();
  const dir = tempDir('ks_tm_');
  makeStore(dir);

  // 恢复: load 结果写入 Config
  TaskStore.save(['echo restored'], { '0 5 * * *': 'echo cron' });
  resetState();
  makeStore(dir);
  const restored = TaskStore.load();
  Config.onetasks = restored.onetasks;
  Config.crontasks = restored.crontasks;
  assert.deepStrictEqual(Config.onetasks, ['echo restored']);
  assert.deepStrictEqual(Config.crontasks, { '0 5 * * *': 'echo cron' });

  // 单次执行语义: InitTask 已消费时 POST 只更新+落盘, executed 为空
  Config.InitTask = false;
  Config.onetasks = [];
  const skipped = await TaskManager.setOnetimeTasks(['echo new']);
  assert.deepStrictEqual(skipped.executed, [], '标记已消费时不得再次执行');
  assert.strictEqual(skipped.persisted, true, '更新后应落盘');
  assert.strictEqual(Config.InitTask = false, false);

  // 标记未消费时 POST 正常执行并消费
  resetState();
  makeStore(dir);
  const executed = await TaskManager.setOnetimeTasks(['echo gate-on']);
  assert.strictEqual(executed.executed.length, 1, '首次 POST 应执行');
  assert.strictEqual(Config.InitTask, false, '执行后标记应被消费');
  assert.strictEqual(executed.persisted, true);

  console.log('✅ TaskManager 恢复与 onetime 单次执行门控');
}

(async () => {
  try {
    await testKeyParsing();
    await testSaveLoadRoundtrip();
    await testQuarantine();
    await testHigherVersionLocked();
    await testTaskManagerGate();
    resetState();
    console.log('ALL TASK STORE TESTS PASSED');
  } catch (e) {
    console.error('❌ TEST FAILED:', e);
    resetState();
    process.exit(1);
  }
})();
