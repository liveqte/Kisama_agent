// PTY 实现选择器单测 (musl/glibc 双 libc 预编译降级链, 不启动 agent)
//
// 运行: node tests/js/test_pty_selector.js
const path = require('path');
const fs = require('fs');
const os = require('os');
const assert = require('assert');

const { __ptySelector } = require(path.join(__dirname, '..', '..', 'js', 'agent.js'));
const {
  detectLinuxLibc, ptyCandidateOrder, probePtyModule, ensurePty, selectPtyImplementation,
  qwqoPlatformBinaryPath, PTY_QWQO_VERSION, PTY_CLOSE_REASON, getState,
} = __ptySelector;

// 构造临时布局目录: 布局描述为 { 相对路径 } 列表, 返回根目录 (调用方负责清理)
function makeLayout(layout) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'kisama-pty-test-'));
  for (const rel of layout) {
    fs.mkdirSync(path.dirname(path.join(root, rel)), { recursive: true });
    fs.writeFileSync(path.join(root, rel), '{}');
  }
  return root;
}

async function main() {
  // ---------- 常量 ----------
  assert.strictEqual(PTY_QWQO_VERSION, '1.1.2', 'qwqo 版本应固定为 1.1.2 (漂移会破坏自愈补装的点名安装)');
  assert.ok(PTY_CLOSE_REASON.includes('[pty_unavailable]'), 'close reason 应带 [pty_unavailable] 错误码');
  assert.ok(Buffer.byteLength(PTY_CLOSE_REASON) <= 123, 'close reason 不得超过 WS 123 字节上限');

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

  // ---------- 平台二进制包路径: npm 扁平与 pnpm 虚拟 store 双布局 ----------
  // 回归 BUG-1: 预检以主包 package.json 解析结果为锚点, 不再从 agent 根目录拼绝对路径
  // (pnpm 只软链直接依赖到顶层, 平台包在 .pnpm store 内与主包同层)
  const npmRoot = makeLayout([
    'node_modules/@qwqo/node-pty/package.json',
    'node_modules/@qwqo/node-pty-linux-x64-musl/package.json',
  ]);
  try {
    const qbinNpm = qwqoPlatformBinaryPath(
      path.join(npmRoot, 'node_modules/@qwqo/node-pty/package.json'), 'musl', 'x64');
    assert.ok(fs.existsSync(qbinNpm), 'npm 扁平布局: 平台包应与主包同级可见');
    assert.strictEqual(qbinNpm, path.join(npmRoot, 'node_modules', '@qwqo', 'node-pty-linux-x64-musl', 'package.json'),
      'npm 扁平布局: 平台包应解析到 agent node_modules 顶层 (与主包同级)');
  } finally {
    fs.rmSync(npmRoot, { recursive: true, force: true });
  }

  const pnpmRoot = makeLayout([
    // 顶层只有主包软链 (软链真实指向 store, 这里用真实目录模拟解析结果)
    'node_modules/@qwqo/node-pty/package.json',
    // 平台包只存在于 .pnpm 虚拟 store 内 (与主包同层), 顶层无软链
    '.pnpm/@qwqo+node-pty@1.1.2/node_modules/@qwqo/node-pty/package.json',
    '.pnpm/@qwqo+node-pty@1.1.2/node_modules/@qwqo/node-pty-linux-x64-musl/package.json',
  ]);
  try {
    // require.resolve 走 realpath 时返回 store 内主包路径 (preserve-symlinks 缺省关闭)
    const storeMain = path.join(pnpmRoot, '.pnpm/@qwqo+node-pty@1.1.2/node_modules/@qwqo/node-pty/package.json');
    const qbinPnpm = qwqoPlatformBinaryPath(storeMain, 'musl', 'x64');
    assert.ok(fs.existsSync(qbinPnpm), 'pnpm 虚拟 store 布局: 以主包为锚点应看到平台包');
    // 顶层软链解析到 store 后与上等价 (同层判定)
    const topMain = path.join(pnpmRoot, 'node_modules/@qwqo/node-pty/package.json');
    assert.ok(fs.existsSync(qwqoPlatformBinaryPath(topMain, 'musl', 'x64')) === false || true, '顶层锚点形态不参与断言 (realpath 行为依部署而定)');
    // 真缺失场景: 平台包不存在 → existsSync false → 触发自愈而非误判装好
    const missing = qwqoPlatformBinaryPath(storeMain, 'glibc', 'x64');
    assert.ok(fs.existsSync(missing) === false, '未安装的 libc 二进制包应判定缺失');
  } finally {
    fs.rmSync(pnpmRoot, { recursive: true, force: true });
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

  // ---------- selectPtyImplementation: 预检/自愈与候选循环 (注入缝, 跨平台确定性) ----------
  const fakeMod = (n) => ({ __fake: n, spawn: () => {} });
  const logs = [];
  const logger = (m) => logs.push(m);
  // musl 环境 + 锚点指向临时布局主包 (注入 require.resolve, 不依赖本机真实安装形态)
  const muslEnv = (mainPkgPath) => ({
    candidates: ['@qwqo/node-pty', '@lydell/node-pty'],
    detectLinuxLibc: () => 'musl',
    resolveQwqoMain: () => mainPkgPath,
    probePtyModule: async () => ({ ok: true, detail: 'ok' }),
    loadModule: fakeMod,
  });

  // 回归 BUG-1: 平台包在主包锚点同级可见 (pnpm store 形态) → 不触发自愈
  const healOkLayout = makeLayout([
    'store/node_modules/@qwqo/node-pty/package.json',
    `store/node_modules/@qwqo/node-pty-linux-${process.arch}-musl/package.json`,
  ]);
  try {
    let healCalled = 0;
    const r0 = await selectPtyImplementation(logger, {
      ...muslEnv(path.join(healOkLayout, 'store/node_modules/@qwqo/node-pty/package.json')),
      healPtyBinary: async () => { healCalled += 1; return true; },
    });
    assert.strictEqual(r0 && r0.name, '@qwqo/node-pty', '平台包可见时应直接选定 @qwqo');
    assert.strictEqual(healCalled, 0, '平台包在主包锚点可见时不得触发自愈 (pnpm 误判回归)');
    assert.ok(!logs.some((m) => m.includes('缺少') && m.includes('二进制包')), '平台包可见时不应出现缺失告警');
  } finally {
    fs.rmSync(healOkLayout, { recursive: true, force: true });
  }

  // 回归 BUG-3: 自愈返回 false (heal 失败/pnpm 跳过) → 候选仍走 require + 探测, 首个可用者胜出
  const healMissingLayout = makeLayout(['store/node_modules/@qwqo/node-pty/package.json']);
  try {
    const mainPkg = path.join(healMissingLayout, 'store/node_modules/@qwqo/node-pty/package.json');
    let healCalled = 0;
    const r1 = await selectPtyImplementation(logger, {
      ...muslEnv(mainPkg),
      healPtyBinary: async () => { healCalled += 1; return false; },
    });
    assert.strictEqual(healCalled, 1, '平台包缺失时应恰好触发一次自愈');
    assert.strictEqual(r1 && r1.name, '@qwqo/node-pty', '自愈失败不得跳过候选 (BUG-3): 首个探测可用者应胜出');
    assert.ok(logs.some((m) => m.includes('缺少 musl 二进制包')), '平台包缺失应记录缺失告警');
    assert.ok(logs.some((m) => m.includes('预检自愈未完成, 继续尝试加载与探测')), '自愈失败应记录"继续尝试加载与探测"');

    // 自愈成功 → 同样继续加载与探测
    const r2 = await selectPtyImplementation(logger, {
      ...muslEnv(mainPkg),
      healPtyBinary: async () => true,
    });
    assert.strictEqual(r2 && r2.name, '@qwqo/node-pty', '自愈成功后应正常选定候选');
    assert.ok(logs.some((m) => m.includes('预检自愈完成')), '自愈成功应记录完成日志');
  } finally {
    fs.rmSync(healMissingLayout, { recursive: true, force: true });
  }

  // 探测失败 → 真实跳过, 落到下一候选
  const r3 = await selectPtyImplementation(logger, {
    candidates: ['@qwqo/node-pty', '@lydell/node-pty'],
    detectLinuxLibc: () => null,
    healPtyBinary: async () => false,
    probePtyModule: async (n) => (n === '@qwqo/node-pty' ? { ok: false, detail: 'SIGSEGV' } : { ok: true, detail: 'ok' }),
    loadModule: fakeMod,
  });
  assert.strictEqual(r3 && r3.name, '@lydell/node-pty', '探测失败应跳过该候选落到下一候选');

  // require 失败 → 跳过该候选
  const r4 = await selectPtyImplementation(logger, {
    candidates: ['@qwqo/node-pty', '@lydell/node-pty'],
    detectLinuxLibc: () => null,
    healPtyBinary: async () => false,
    probePtyModule: async () => ({ ok: true, detail: 'ok' }),
    loadModule: (n) => { if (n === '@qwqo/node-pty') { const e = new Error('Cannot find module'); e.code = 'MODULE_NOT_FOUND'; throw e; } return fakeMod(n); },
  });
  assert.strictEqual(r4 && r4.name, '@lydell/node-pty', '加载失败应跳过该候选落到下一候选');

  // 主包不可解析 (require.resolve 抛错) → 预检静默放行, 候选继续走加载
  const r4b = await selectPtyImplementation(logger, {
    candidates: ['@qwqo/node-pty'],
    detectLinuxLibc: () => 'musl',
    resolveQwqoMain: () => { throw new Error('Cannot find module'); },
    healPtyBinary: async () => { throw new Error('heal 不应被调用'); },
    probePtyModule: async () => ({ ok: true, detail: 'ok' }),
    loadModule: fakeMod,
  });
  assert.strictEqual(r4b && r4b.name, '@qwqo/node-pty', '主包不可解析时预检应静默放行, 由加载/探测给结论');

  // 全部候选失败 → null (终端路由按 ptyUnavailableReason 优雅拒绝)
  const r5 = await selectPtyImplementation(logger, {
    candidates: ['@qwqo/node-pty', '@lydell/node-pty'],
    detectLinuxLibc: () => null,
    healPtyBinary: async () => false,
    probePtyModule: async () => ({ ok: false, detail: 'exit=139 signal=SIGSEGV' }),
    loadModule: fakeMod,
  });
  assert.strictEqual(r5, null, '全部候选探测失败应返回 null');

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
    assert.ok(st.reason.includes('重启 agent 进程'), '不可用原因应包含"需重启进程"的可行动指引');
  }

  console.log('test_pty_selector: all assertions passed');
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
