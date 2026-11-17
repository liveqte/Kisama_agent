// host marks (baseinfo.marks) unit tests, docs/API.MD section 15.
//
// Run: node tests/js/test_marks.js
const fs = require('fs');
const os = require('os');
const path = require('path');
const assert = require('assert');

const { Config, TaskStore, SystemInfoCollector } = require(path.join(__dirname, '..', '..', 'js', 'agent.js'));

function mkFixture() {
  const base = fs.mkdtempSync(path.join(os.tmpdir(), 'kisama-marks-'));
  const roots = {
    MARKS_PROC_ROOT: path.join(base, 'proc'),
    MARKS_DEV_ROOT: path.join(base, 'dev'),
    MARKS_ETC_ROOT: path.join(base, 'etc'),
    MARKS_RUN_ROOT: path.join(base, 'run'),
    MARKS_ROOT: path.join(base, 'root'),
  };
  for (const key of Object.keys(roots)) {
    fs.mkdirSync(roots[key], { recursive: true });
  }
  fs.mkdirSync(path.join(roots.MARKS_PROC_ROOT, 'self'), { recursive: true });
  fs.mkdirSync(path.join(roots.MARKS_PROC_ROOT, '1'), { recursive: true });
  fs.mkdirSync(path.join(roots.MARKS_ROOT, 'home', 'container'), { recursive: true });

  const saved = {};
  for (const key of Object.keys(roots)) {
    saved[key] = SystemInfoCollector[key];
    SystemInfoCollector[key] = roots[key];
  }
  return {
    roots,
    restore() {
      for (const key of Object.keys(saved)) SystemInfoCollector[key] = saved[key];
      fs.rmSync(base, { recursive: true, force: true });
    },
  };
}

function withEuid(uid, fn) {
  const savedEuid = process.geteuid;
  const savedEgid = process.getegid;
  process.geteuid = () => uid;
  process.getegid = () => uid;
  try {
    return fn();
  } finally {
    if (savedEuid === undefined) delete process.geteuid; else process.geteuid = savedEuid;
    if (savedEgid === undefined) delete process.getegid; else process.getegid = savedEgid;
  }
}

async function testRoot() {
  const c = new SystemInfoCollector();
  assert.strictEqual(c._markRoot(), false, 'Windows/no-POSIX must not report root');
  assert.strictEqual(withEuid(0, () => c._markRoot()), true, 'effective uid/gid 0 hits');
  assert.strictEqual(withEuid(998, () => c._markRoot()), false, 'effective uid/gid 998 misses');
}

function testDevNumbers() {
  assert.strictEqual(SystemInfoCollector._devMajor(2792), 10);
  assert.strictEqual(SystemInfoCollector._devMinor(2792), 232);
  assert.strictEqual(SystemInfoCollector._devMajor(2789), 10);
  assert.strictEqual(SystemInfoCollector._devMinor(2789), 229);
  // glibc makedev: major 高位落在 bit32+, 用于确认算术拆分没有 32 位截断.
  const hiDev = Number((0x1000n << 32n) | 0x56723489n);
  assert.strictEqual(SystemInfoCollector._devMajor(hiDev), 0x1234);
  assert.strictEqual(SystemInfoCollector._devMinor(hiDev), 0x56789);
}

function testDeviceRejectsRegularFile(fx) {
  const c = new SystemInfoCollector();
  assert.strictEqual(c._markKvm(), false, 'missing /dev/kvm misses');
  fs.writeFileSync(path.join(fx.roots.MARKS_DEV_ROOT, 'kvm'), 'regular');
  assert.strictEqual(c._markKvm(), false, 'regular file must not count as kvm');
  assert.strictEqual(SystemInfoCollector._charDeviceRW(
    path.join(fx.roots.MARKS_DEV_ROOT, 'missing'), 10, 232), false);
}

function testPterodactyl(fx) {
  const c = new SystemInfoCollector();
  const mountinfo = path.join(fx.roots.MARKS_PROC_ROOT, 'self', 'mountinfo');
  fs.writeFileSync(mountinfo,
    '1 2 0:1 / / rw - ext4 /dev/sda1 rw\n' +
    '3 4 0:2 /var/lib/pterodactyl/volumes/uuid /home/container rw - ext4 /dev/sda1 rw\n');
  assert.strictEqual(c._markPterodactyl(), true, 'mountinfo strong feature hits');

  fs.writeFileSync(mountinfo, '');
  fs.writeFileSync(path.join(fx.roots.MARKS_PROC_ROOT, 'self', 'environ'), 'P_SERVER_UUID=abc\0');
  assert.strictEqual(c._markPterodactyl(), false, 'single env key misses');
  fs.writeFileSync(path.join(fx.roots.MARKS_PROC_ROOT, '1', 'environ'),
    'P_SERVER_UUID=abc\0P_SERVER_LOCATION=de\0');
  assert.strictEqual(c._markPterodactyl(), true, 'PID1 environ with both keys hits');
}

function testPterodactylChunkBoundary(fx) {
  const c = new SystemInfoCollector();
  const mountinfo = path.join(fx.roots.MARKS_PROC_ROOT, 'self', 'mountinfo');
  fs.writeFileSync(path.join(fx.roots.MARKS_PROC_ROOT, '1', 'environ'), '');
  const needle = '/var/lib/pterodactyl/';
  fs.writeFileSync(mountinfo, 'x'.repeat(8192 - needle.length + 3) + needle);
  assert.strictEqual(c._markPterodactyl(), true, 'needle across chunk boundary hits');
}

function testPterodactylWeakFallback(fx) {
  const c = new SystemInfoCollector();
  const uuid = '19e68255-bb71-4a86-b4c8-6e328f59cdec';
  fs.writeFileSync(path.join(fx.roots.MARKS_ETC_ROOT, 'hostname'), uuid + '\n');
  fs.writeFileSync(path.join(fx.roots.MARKS_ETC_ROOT, 'passwd'), 'root:x:0:0:root:/root:/bin/sh\n');
  fs.writeFileSync(path.join(fx.roots.MARKS_ROOT, '.dockerenv'), '');
  assert.strictEqual(withEuid(998, () => c._markPterodactyl()), true, 'four weak conditions hit');

  fs.writeFileSync(path.join(fx.roots.MARKS_ETC_ROOT, 'passwd'), 'svc:x:998:998::/home/container:/bin/sh\n');
  assert.strictEqual(withEuid(998, () => c._markPterodactyl()), false, 'passwd entry blocks');
}

function testSystemd(fx) {
  const c = new SystemInfoCollector();
  const saved = SystemInfoCollector._systemctlLocatable;
  SystemInfoCollector._systemctlLocatable = () => true;
  try {
    assert.strictEqual(c._markSystemd(), false, 'empty fixture misses');
    fs.mkdirSync(path.join(fx.roots.MARKS_RUN_ROOT, 'systemd', 'system'), { recursive: true });
    fs.writeFileSync(path.join(fx.roots.MARKS_RUN_ROOT, 'systemd', 'private'), '');
    fs.writeFileSync(path.join(fx.roots.MARKS_PROC_ROOT, '1', 'comm'), 'systemd\n');
    assert.strictEqual(c._markSystemd(), true, 'all systemd conditions hit');
    fs.writeFileSync(path.join(fx.roots.MARKS_PROC_ROOT, '1', 'comm'), 'bash\n');
    assert.strictEqual(c._markSystemd(), false, 'non-systemd PID1 vetoes');
  } finally {
    SystemInfoCollector._systemctlLocatable = saved;
  }
}

function testCapEff(fx) {
  const c = new SystemInfoCollector();
  fs.writeFileSync(path.join(fx.roots.MARKS_PROC_ROOT, 'self', 'status'),
    'Name:\tagent\nCapEff:\t000001ffffffffff\n');
  assert.strictEqual(c._capEffBit(21), true);
  assert.strictEqual(c._capEffBit(63), false);
  fs.writeFileSync(path.join(fx.roots.MARKS_PROC_ROOT, 'self', 'status'), 'CapEff:\tzzz\n');
  assert.strictEqual(c._capEffBit(21), false);
}

function testFuseSetuidHelper(fx) {
  const c = new SystemInfoCollector();
  const savedChar = SystemInfoCollector._charDeviceRW;
  const savedStat = fs.statSync;
  SystemInfoCollector._charDeviceRW = () => true;
  c._capEffBit = () => false;
  fs.statSync = (p) => {
    if (String(p).includes('fusermount')) return { isFile: () => true, mode: 0o4755 };
    return savedStat(p);
  };
  try {
    assert.strictEqual(c._markFuse(), true, 'setuid fusermount helper hits');
  } finally {
    SystemInfoCollector._charDeviceRW = savedChar;
    fs.statSync = savedStat;
  }
}

function withConfigState({ kmode, storeEnabled }, fn) {
  const savedKmode = Config.KMODE;
  const savedState = { enabled: TaskStore.state.enabled };
  if (kmode !== undefined) Config.KMODE = kmode;
  if (storeEnabled !== undefined) TaskStore.state.enabled = storeEnabled;
  try {
    return fn();
  } finally {
    Config.KMODE = savedKmode;
    TaskStore.state.enabled = savedState.enabled;
  }
}

function testConfigMarks() {
  const c = new SystemInfoCollector();
  // kstore: 与 TaskStore.state.enabled 同口径 (init() 解析 KSTORE/KSTORE_KEY 的结果)
  assert.strictEqual(withConfigState({ storeEnabled: true }, () => c._markKstore()), true,
    'enabled store hits kstore');
  assert.strictEqual(withConfigState({ storeEnabled: false }, () => c._markKstore()), false,
    'disabled store misses kstore');
  // kmode: 按归一化后的 Config.KMODE 配置值判定 (2q/2quic → '2' 发生在 Config 定义处);
  // 不校验 KNAME 生效条件 (docs/API.MD 15.9/15.10)
  // 0.6.6 新增 kmode3 (KMODE=3 kisama-hub 出站隧道, docs/API.MD 15.11)
  const cases = { '0': [false, false, false], '1': [true, false, false], '2': [false, true, false], '3': [false, false, true], 'abc': [false, false, false] };
  for (const [kmode, [kmode1, kmode2, kmode3]] of Object.entries(cases)) {
    assert.strictEqual(withConfigState({ kmode }, () => c._markKmode1()), kmode1, `KMODE=${kmode} kmode1`);
    assert.strictEqual(withConfigState({ kmode }, () => c._markKmode2()), kmode2, `KMODE=${kmode} kmode2`);
    assert.strictEqual(withConfigState({ kmode }, () => c._markKmode3()), kmode3, `KMODE=${kmode} kmode3`);
  }
  // 非 Linux (真实 process.platform): 配置类标记仍输出, 主机探测跳过
  assert.deepStrictEqual(
    withConfigState({ kmode: '1', storeEnabled: true }, () => c.detectMarks()),
    ['kstore', 'kmode1'], 'non-Linux still reports config marks');
  assert.deepStrictEqual(
    withConfigState({ kmode: '0', storeEnabled: false }, () => c.detectMarks()),
    [], 'non-Linux without config marks stays []');
}

function testOrderAndNonLinux() {
  const c = new SystemInfoCollector();
  assert.deepStrictEqual(
    withConfigState({ kmode: '0', storeEnabled: false }, () => c.detectMarks()), [],
    'non-Linux with no config marks returns []');

  const saved = {
    root: SystemInfoCollector.prototype._markRoot,
    kvm: SystemInfoCollector.prototype._markKvm,
    pterodactyl: SystemInfoCollector.prototype._markPterodactyl,
    systemd: SystemInfoCollector.prototype._markSystemd,
    fuse: SystemInfoCollector.prototype._markFuse,
    kstore: SystemInfoCollector.prototype._markKstore,
    kmode1: SystemInfoCollector.prototype._markKmode1,
    kmode2: SystemInfoCollector.prototype._markKmode2,
  };
  const desc = Object.getOwnPropertyDescriptor(process, 'platform');
  SystemInfoCollector.prototype._markRoot = () => true;
  SystemInfoCollector.prototype._markKvm = () => false;
  SystemInfoCollector.prototype._markPterodactyl = () => true;
  SystemInfoCollector.prototype._markSystemd = () => true;
  SystemInfoCollector.prototype._markFuse = () => false;
  SystemInfoCollector.prototype._markKstore = () => true;
  SystemInfoCollector.prototype._markKmode1 = () => false;
  SystemInfoCollector.prototype._markKmode2 = () => true;
  try {
    Object.defineProperty(process, 'platform', { value: 'linux' });
    // 配置类标记固定追加在主机探测标记末尾 (docs/API.MD 15.1)
    assert.deepStrictEqual(c.detectMarks(), ['root', 'pterodactyl', 'systemd', 'kstore', 'kmode2']);
    SystemInfoCollector.prototype._markRoot = () => { throw new Error('boom'); };
    SystemInfoCollector.prototype._markKstore = () => { throw new Error('boom'); };
    assert.deepStrictEqual(c.detectMarks(), ['pterodactyl', 'systemd', 'kmode2'],
      'one probe failure must not drop the others');
  } finally {
    Object.defineProperty(process, 'platform', desc);
    SystemInfoCollector.prototype._markRoot = saved.root;
    SystemInfoCollector.prototype._markKvm = saved.kvm;
    SystemInfoCollector.prototype._markPterodactyl = saved.pterodactyl;
    SystemInfoCollector.prototype._markSystemd = saved.systemd;
    SystemInfoCollector.prototype._markFuse = saved.fuse;
    SystemInfoCollector.prototype._markKstore = saved.kstore;
    SystemInfoCollector.prototype._markKmode1 = saved.kmode1;
    SystemInfoCollector.prototype._markKmode2 = saved.kmode2;
  }
}

async function main() {
  await testRoot();
  testDevNumbers();
  let fx = mkFixture();
  try { testDeviceRejectsRegularFile(fx); } finally { fx.restore(); }
  fx = mkFixture();
  try { testPterodactyl(fx); } finally { fx.restore(); }
  fx = mkFixture();
  try { testPterodactylChunkBoundary(fx); } finally { fx.restore(); }
  fx = mkFixture();
  try { testPterodactylWeakFallback(fx); } finally { fx.restore(); }
  fx = mkFixture();
  try { testSystemd(fx); } finally { fx.restore(); }
  fx = mkFixture();
  try { testCapEff(fx); } finally { fx.restore(); }
  fx = mkFixture();
  try { testFuseSetuidHelper(fx); } finally { fx.restore(); }
  testConfigMarks();
  testOrderAndNonLinux();
  console.log('✅ test_marks: all assertions passed');
}

main().catch(err => {
  console.error('❌ test_marks failed:', err);
  process.exit(1);
});
