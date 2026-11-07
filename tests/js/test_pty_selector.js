// PTY 实现选择器单测 (musl/glibc 双 libc 预编译降级链, 不启动 agent)
//
// 运行: node tests/js/test_pty_selector.js
const path = require('path');
const assert = require('assert');

const { __ptySelector } = require(path.join(__dirname, '..', '..', 'js', 'agent.js'));
const { detectLinuxLibc, ptyCandidateOrder, probePtyModule, ensurePty, PTY_QWQO_VERSION, getState } = __ptySelector;

async function main() {
  // ---------- 常量 ----------
  assert.strictEqual(PTY_QWQO_VERSION, '1.1.2', 'qwqo 版本应固定为 1.1.2 (漂移会破坏自愈补装的点名安装)');

  // ---------- libc 判定 ----------
  if (process.platform !== 'linux') {
    assert.strictEqual(detectLinuxLibc(), null, '非 linux 平台 libc 判定应为 null');
  } else {
    assert.ok(['musl', 'glibc', null].includes(detectLinuxLibc()), 'linux 平台 libc 判定应落在 musl/glibc/null');
  }

  // ---------- 候选顺序 (libcOverride 注入) ----------
  assert.deepStrictEqual(ptyCandidateOrder('musl'), ['@qwqo/node-pty', '@lydell/node-pty'], 'musl 应 qwqo 优先');
  assert.deepStrictEqual(ptyCandidateOrder('glibc'), ['@lydell/node-pty', '@qwqo/node-pty'], 'glibc 应 lydell 优先');
  assert.deepStrictEqual(ptyCandidateOrder(null), ['@lydell/node-pty', '@qwqo/node-pty'], 'libc 未知应回退现状优先');
  if (process.platform !== 'linux') {
    assert.deepStrictEqual(ptyCandidateOrder(), ['@lydell/node-pty', '@qwqo/node-pty'], '非 linux 无 override 时应现状优先');
  }

  // ---------- 子进程探测: 真实模块 ----------
  const probeLydell = await probePtyModule('@lydell/node-pty');
  assert.strictEqual(typeof probeLydell.ok, 'boolean', '探测结果应为 {ok, detail} 形态');
  assert.strictEqual(typeof probeLydell.detail, 'string', '探测结果应带 detail');
  if (probeLydell.ok) assert.strictEqual(probeLydell.detail, 'ok', 'ok 时 detail 应为 ok');

  // ---------- 子进程探测: 不存在的模块 ----------
  const probeMissing = await probePtyModule('kisama-pty-nonexistent-pkg');
  assert.strictEqual(probeMissing.ok, false, '不存在的模块探测应失败');
  assert.ok(/模块不存在/.test(probeMissing.detail), '失败原因应写明模块不存在');

  // ---------- ensurePty: 进程内缓存形态 ----------
  const ptyImpl = await ensurePty();
  assert.ok(ptyImpl === null || typeof ptyImpl.spawn === 'function', 'ensurePty 应返回 null 或带 spawn 的实现');
  const st = getState();
  assert.strictEqual(typeof st.ready, 'boolean', 'getState().ready 应为布尔');
  assert.ok(st.reason === null || typeof st.reason === 'string', 'getState().reason 应为 null 或字符串');
  if (st.ready) {
    assert.ok(ptyImpl && typeof ptyImpl.spawn === 'function', 'ready 时 ensurePty 应给出可用实现');
  } else {
    assert.ok(st.reason && st.reason.length > 0, '未就绪时必须给出可行动的原因');
  }

  console.log('test_pty_selector: all assertions passed');
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
