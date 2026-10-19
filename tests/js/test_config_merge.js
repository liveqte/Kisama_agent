// Config.merge 初始化变量注入单测 (KMODE/KNAME/KNAME_KEY/KPATH, 不启动 agent)
// 运行: node tests/js/test_config_merge.js
const { Config, KModeController } = require('../../js/agent.js');
const assert = require('assert');
const path = require('path');

// 每个用例开始前回置静态缺省, 避免用例间串扰 (静态初始化在 require 时已读取 env)
function resetKmodeConfig() {
  Config.KMODE = '0';
  Config.KNAME = '';
  Config.KNAME_KEY = '';
  Config.KPATH = '';
}

function caseMainOptions() {
  Config.merge({
    KMODE: '2',
    KNAME: 'myname',
    KNAME_KEY: 'mysecret-pass',
    KPATH: '$HOME/domain.txt',
  });
  assert.strictEqual(Config.KMODE, '2');
  assert.strictEqual(Config.KNAME, 'myname');
  assert.strictEqual(Config.KNAME_KEY, 'mysecret-pass');
  assert.strictEqual(Config.KPATH, '$HOME/domain.txt');
  assert.strictEqual(KModeController.knameValid(), true);
}

function caseNumericKmode() {
  Config.merge({ KMODE: 1 });
  assert.strictEqual(Config.KMODE, '1');
  Config.merge({ KMODE: 0 });
  assert.strictEqual(Config.KMODE, '0', '显式 0 必须覆盖当前值 (含环境变量已设置的隧道模式)');
  Config.merge({ KMODE: '0' });
  assert.strictEqual(Config.KMODE, '0');
}

function caseInvalidKmodeFallback() {
  for (const bad of ['9', 'true', 'yes', '', '  ', '12', {}]) {
    resetKmodeConfig();
    Config.merge({ KMODE: bad === {} ? 'x' : bad });
    assert.strictEqual(Config.KMODE, '0', `非法 KMODE ${String(bad)} 应回退 '0'`);
  }
}

function caseUndefinedLeavesValue() {
  Config.KMODE = '1'; // 模拟 require 前已由 KMODE=1 环境变量初始化
  Config.merge({});
  Config.merge({ PORT: 9999 }); // PORT 正常覆盖不受影响
  assert.strictEqual(Config.KMODE, '1', '未传 KMODE 时不得改动现有值');
  assert.strictEqual(Config.PORT, 9999);
}

function caseWhitespaceTrim() {
  Config.merge({ KNAME: '  my name  ', KNAME_KEY: '  pass-8ch  ', KPATH: '  ~\\tmp\\dom.txt ' });
  assert.strictEqual(Config.KNAME, 'my name');
  assert.strictEqual(Config.KNAME_KEY, 'pass-8ch');
  assert.strictEqual(Config.KPATH, '~\\tmp\\dom.txt');
}

function caseEmptyKeyReusesKname() {
  Config.merge({ KMODE: '2', KNAME: 'abc', KNAME_KEY: '   ' });
  // KNAME_KEY 为空串 → 消费端 KNAME_KEY || KNAME 语义, 缺省复用 KNAME
  const key = Config.KNAME_KEY || Config.KNAME;
  assert.strictEqual(key, 'abc');
  assert.strictEqual(KModeController.knameValid(), false, 'KNAME=abc 密钥 3 字符 <8, KMODE=2 应判定不生效');
}

function caseKpathResolved() {
  Config.merge({ KPATH: '$HOME' });
  assert.strictEqual(KModeController.resolveDomainFilePath(), path.join(KModeController.homeDir(), ''), 'KPATH=$HOME 应解析为主目录');
  resetKmodeConfig(); // 空 KPATH → 缺省 $HOME/domain.txt
  assert.strictEqual(KModeController.resolveDomainFilePath(), path.join(KModeController.homeDir(), 'domain.txt'));
}

function caseOriginalApiUnaffected() {
  resetKmodeConfig();
  Config.merge({ PORT: '8100', ECDSA_PUBLIC_KEY_PEM: 'pub-a', ECIES_PUBLIC_KEY_PEM: 'pub-b' });
  assert.strictEqual(Config.PORT, 8100);
  assert.strictEqual(Config.ECDSA_PUBLIC_KEY_PEM, 'pub-a');
  assert.strictEqual(Config.ECIES_PUBLIC_KEY_PEM, 'pub-b');
}

const cases = [
  ['接入 main(Options) 完整 KMODE 配置', caseMainOptions],
  ['KMODE 数字入参 / 显式 0 覆盖', caseNumericKmode],
  ['KMODE 非法取值回退 0', caseInvalidKmodeFallback],
  ['未传 KMODE 不改动现有值', caseUndefinedLeavesValue],
  ['KNAME/KNAME_KEY/KPATH 首尾去空格', caseWhitespaceTrim],
  ['KNAME_KEY 空串复用 KNAME', caseEmptyKeyReusesKname],
  ['KPATH 传入值参与域名文件解析', caseKpathResolved],
  ['原有 PORT/密钥合并行为不受影响', caseOriginalApiUnaffected],
];

let failed = 0;
for (const [name, fn] of cases) {
  try {
    resetKmodeConfig();
    fn();
    console.log(`  ✅ ${name}`);
  } catch (e) {
    failed++;
    console.error(`  ❌ ${name}: ${e.message}`);
  }
}

if (failed) {
  console.error(`\n${failed} 个用例失败`);
  process.exit(1);
}
console.log(`\n全部通过 (${cases.length} 用例)`);
