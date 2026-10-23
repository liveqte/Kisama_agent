// baseinfo P/local/net 分级缓存单元测试, docs/API.MD 16.3/16.4.
//
// Run: node tests/js/test_baseinfo_cache.js
const path = require('path');
const assert = require('assert');

const { Config, SystemInfoCollector } = require(path.join(__dirname, '..', '..', 'js', 'agent.js'));

function resetCaches() {
  Config._baseinfo_p_cache = null;
  Config._baseinfo_p_promise = null;
  Config._baseinfo_local_cache = null;
  Config._baseinfo_local_time = 0;
  Config._baseinfo_local_fail_time = 0;
  Config._baseinfo_local_promise = null;
  Config._baseinfo_net_cache = null;
  Config._baseinfo_net_time = 0;
  Config._baseinfo_net_fail_time = 0;
  Config._baseinfo_net_promise = null;
}

function assertNoCredentials(part, label) {
  assert.strictEqual(Object.prototype.hasOwnProperty.call(part, 'session_key'), false,
    `${label} 不得含 session_key`);
  assert.strictEqual(Object.prototype.hasOwnProperty.call(part, 'noise_key'), false,
    `${label} 不得含 noise_key`);
}

async function main() {
  const saved = {
    p: SystemInfoCollector.prototype.collectStaticInfo,
    l: SystemInfoCollector.prototype.collectLocalInfo,
    n: SystemInfoCollector.prototype.collectNetInfo,
    now: Config._baseInfoNowMs,
  };
  let clock = 1_000_000;
  const counts = { p: 0, l: 0, n: 0 };
  let failP = false;
  let failLocal = false;
  let failNet = false;
  let lastVirtualization = null;
  let localValue = 0;

  Config._baseInfoNowMs = () => clock;
  SystemInfoCollector.prototype.collectStaticInfo = async function () {
    counts.p += 1;
    if (failP) throw new Error('static probe failed');
    return {
      arch: 'x86_64', cpu_cores: 8, cpu_name: 'Test CPU', gpu_name: '',
      os: 'Test Linux', kernel_version: '6.1.0', version: 'test-js',
      virtualization: 'kvm', marks: ['root', 'kvm'],
    };
  };
  SystemInfoCollector.prototype.collectLocalInfo = async function (virtualization) {
    counts.l += 1;
    lastVirtualization = virtualization;
    if (failLocal) throw new Error('local probe failed');
    localValue += 1;
    return { disk_total: 100 + localValue, mem_total: 200, swap_total: 300 };
  };
  SystemInfoCollector.prototype.collectNetInfo = async function () {
    counts.n += 1;
    if (failNet) throw new Error('net probe failed');
    return { ipv4: '1.2.3.4', ipv6: '::1' };
  };

  try {
    resetCaches();

    // P 级: 并发请求只探测一次, 进程内永久复用并带 marks.
    const [p1, p2, p3] = await Promise.all([
      Config.getBaseInfoP(), Config.getBaseInfoP(), Config.getBaseInfoP(),
    ]);
    assert.strictEqual(counts.p, 1, 'P 级并发只允许一次探测');
    assert.deepStrictEqual(p1.marks, ['root', 'kvm']);
    assert.deepStrictEqual(p3.marks, ['root', 'kvm']);
    assert.strictEqual(p1.version, 'test-js');
    assertNoCredentials(p1, 'P 级快照');

    // local 组: 30s 内复用, 超时后重探; 透传 P 级 virtualization.
    const l1 = await Config.getBaseInfoLocal(p1.virtualization);
    assert.strictEqual(counts.l, 1);
    assert.strictEqual(lastVirtualization, 'kvm', 'local 组必须复用 P 级虚拟化结果');
    assert.deepStrictEqual(l1, { disk_total: 101, mem_total: 200, swap_total: 300 });
    clock += 29_999;
    assert.strictEqual((await Config.getBaseInfoLocal(p1.virtualization)).disk_total, 101);
    assert.strictEqual(counts.l, 1, 'local 组 30s 内不得重探');
    clock += 2;
    assert.strictEqual((await Config.getBaseInfoLocal(p1.virtualization)).disk_total, 102);
    assert.strictEqual(counts.l, 2, 'local 组超过 30s 必须重探');
    assertNoCredentials(l1, 'local 组快照');

    // net 组: 3600s 内复用.
    const netBase = clock;
    const n1 = await Config.getBaseInfoNet();
    assert.deepStrictEqual(n1, { ipv4: '1.2.3.4', ipv6: '::1' });
    assert.strictEqual(counts.n, 1);
    clock = netBase + 3_599_999;
    await Config.getBaseInfoNet();
    assert.strictEqual(counts.n, 1, 'net 组 3600s 内不得重探');
    clock = netBase + 3_600_001;
    await Config.getBaseInfoNet();
    assert.strictEqual(counts.n, 2, 'net 组超过 3600s 必须重探');
    assertNoCredentials(n1, 'net 组快照');

    // 密钥轮换只清 status, 不得清空 baseinfo 快照.
    const cachedP = await Config.getBaseInfoP();
    const cachedL = await Config.getBaseInfoLocal(cachedP.virtualization);
    const cachedN = await Config.getBaseInfoNet();
    const before = { p: counts.p, l: counts.l, n: counts.n };
    Config.rotateOperationalSecrets();
    const afterP = await Config.getBaseInfoP();
    const afterL = await Config.getBaseInfoLocal(afterP.virtualization);
    const afterN = await Config.getBaseInfoNet();
    assert.deepStrictEqual({ p: counts.p, l: counts.l, n: counts.n }, before,
      '轮换后 baseinfo 三组均不得重探');
    assert.deepStrictEqual(afterP, cachedP, '轮换不得改变 P 级快照');
    assert.deepStrictEqual(afterL, cachedL, '轮换不得改变 local 组快照');
    assert.deepStrictEqual(afterN, cachedN, '轮换不得改变 net 组快照');
    assertNoCredentials(afterP, '轮换后 P 级快照');

    // 装配: marks 恒为数组 (缺省 []), 凭证不在装配结果中.
    const assembled = SystemInfoCollector.assembleBaseInfo(afterP, afterL, afterN);
    assert.deepStrictEqual(assembled.marks, ['root', 'kvm']);
    assert.strictEqual(assembled.ipv4, '1.2.3.4');
    assert.strictEqual(assembled.disk_total, cachedL.disk_total);
    assertNoCredentials(assembled, '装配结果');
    const noMarks = SystemInfoCollector.assembleBaseInfo(
      { ...afterP, marks: undefined }, afterL, afterN);
    assert.deepStrictEqual(noMarks.marks, [], 'marks 缺省必须是 [] 而不是 null');
    const fallbackP = SystemInfoCollector.staticFallback();
    assert.deepStrictEqual(fallbackP.marks, []);

    // local 失败退避: 沿用上次成功值, 60s 内不重试, 过后恢复.
    failLocal = true;
    clock += 30_001;
    const localDuringFail = await Config.getBaseInfoLocal('kvm');
    assert.deepStrictEqual(localDuringFail,
      { disk_total: 103, mem_total: 200, swap_total: 300 }, '失败时沿用上次成功值');
    const localCountAfterFail = counts.l;
    await Config.getBaseInfoLocal('kvm');
    assert.strictEqual(counts.l, localCountAfterFail, '失败退避 60s 内不得重试');
    clock += 60_001;
    failLocal = false;
    const localRecovered = await Config.getBaseInfoLocal('kvm');
    assert.strictEqual(counts.l, localCountAfterFail + 1, '退避过后必须恢复探测');
    assert.strictEqual(localRecovered.disk_total, 104);

    // net 失败退避: 有旧值时沿用旧值.
    failNet = true;
    clock += 3_600_001;
    const netDuringFail = await Config.getBaseInfoNet();
    assert.deepStrictEqual(netDuringFail, { ipv4: '1.2.3.4', ipv6: '::1' });
    const netCountAfterFail = counts.n;
    await Config.getBaseInfoNet();
    assert.strictEqual(counts.n, netCountAfterFail, 'net 失败退避 60s 内不得重试');
    clock += 60_001;
    failNet = false;
    await Config.getBaseInfoNet();
    assert.strictEqual(counts.n, netCountAfterFail + 1, 'net 退避过后必须恢复探测');

    // net 无历史值 + 失败: 返回 null 兜底, 而不是抛错.
    resetCaches();
    failNet = true;
    const netFallback = await Config.getBaseInfoNet();
    assert.deepStrictEqual(netFallback, { ipv4: null, ipv6: null });
    assert.strictEqual(counts.n, netCountAfterFail + 2);
    await Config.getBaseInfoNet();
    assert.strictEqual(counts.n, netCountAfterFail + 2, '无历史值时同样进入失败退避');

    // P 级失败: 只兜底一次, 进程内不再重试.
    resetCaches();
    failP = true;
    const pFallback = await Config.getBaseInfoP();
    assert.deepStrictEqual(pFallback.marks, [], 'P 级失败兜底 marks 为 []');
    assert.strictEqual(pFallback.version, Config.AGENT_VERSION);
    const pCount = counts.p;
    failP = false;
    await Config.getBaseInfoP();
    assert.strictEqual(counts.p, pCount, 'P 级失败后进程内不得重试');

    console.log('✅ test_baseinfo_cache: all assertions passed');
  } finally {
    SystemInfoCollector.prototype.collectStaticInfo = saved.p;
    SystemInfoCollector.prototype.collectLocalInfo = saved.l;
    SystemInfoCollector.prototype.collectNetInfo = saved.n;
    Config._baseInfoNowMs = saved.now;
    resetCaches();
  }
}

main().catch(err => {
  console.error('❌ test_baseinfo_cache failed:', err);
  process.exit(1);
});
