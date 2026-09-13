// FileManager.zipItems / unzipArchive + ZipArchiver 单测 (0.5.4, 不启动 agent)
//
// 运行: node tests/js/test_file_zip.js
// 用例含一段由 Python zipfile 预生成的最小 zip (base64), 验证自研 ZIP 解析与真实归档格式互通。
const path = require('path');
const fs = require('fs');
const os = require('os');
const assert = require('assert');

const { FileManager, Config, ZipArchiver } = require(path.join(__dirname, '..', '..', 'js', 'agent.js'));

// Python zipfile 生成: hello.txt="hello world" (deflate) + sub/nested.txt="nested content"
const PYTHON_ZIP_B64 = 'UEsDBBQAAAAIABVdLV2FEUoNDQAAAAsAAAAJAAAAaGVsbG8udHh0y0jNyclXKM8vykkBAFBLAwQUAAAACAAVXS1dSyqQNBAAAAAOAAAADgAAAHN1Yi9uZXN0ZWQudHh0y0stLklNUUjOzytJzSsBAFBLAQIUABQAAAAIABVdLV2FEUoNDQAAAAsAAAAJAAAAAAAAAAAAAACAAQAAAABoZWxsby50eHRQSwECFAAUAAAACAAVXS1dSyqQNBAAAAAOAAAADgAAAAAAAAAAAAAAgAE0AAAAc3ViL25lc3RlZC50eHRQSwUGAAAAAAIAAgBzAAAAcAAAAAAA';

let tmpRoot = '';

function setup() {
  tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'kisama-zip-'));
  Config.FILE_ROOT = tmpRoot;
}

function teardown() {
  fs.rmSync(tmpRoot, { recursive: true, force: true });
}

function makeTree() {
  const src = path.join(tmpRoot, 'src');
  fs.mkdirSync(path.join(src, 'sub'), { recursive: true });
  fs.writeFileSync(path.join(src, 'a.txt'), 'AAA');
  fs.writeFileSync(path.join(src, 'sub', 'b.txt'), 'BBB');
  return src;
}

async function testRoundTrip() {
  makeTree();
  const r = await FileManager.zipItems('out.zip', ['src']);
  assert.strictEqual(r.status, 'ok');
  assert.strictEqual(r.entries, 2, `entries 应只计文件条目: ${r.entries}`);
  assert.ok(r.size > 0);
  assert.strictEqual(fs.existsSync(path.join(tmpRoot, 'out.zip')), true);

  const u = await FileManager.unzipArchive('out.zip', 'dest');
  assert.strictEqual(u.status, 'ok');
  assert.strictEqual(u.extracted, 2);
  assert.strictEqual(u.skipped, 0);
  assert.strictEqual(
    fs.readFileSync(path.join(tmpRoot, 'dest', 'src', 'a.txt'), 'utf8'), 'AAA');
  assert.strictEqual(
    fs.readFileSync(path.join(tmpRoot, 'dest', 'src', 'sub', 'b.txt'), 'utf8'), 'BBB');
  console.log('✅ zip/unzip 往返 (目录递归)');
}

async function testFlat() {
  await FileManager.zipItems('flat.zip', ['src'], true);
  const entries = ZipArchiver.parse(path.join(tmpRoot, 'flat.zip')).map((e) => e.name);
  assert.ok(entries.includes('a.txt'), `flat 条目应无顶层前缀: ${entries}`);
  assert.ok(entries.includes('sub/b.txt'), `flat 条目应无顶层前缀: ${entries}`);
  assert.ok(!entries.some((n) => n.startsWith('src/')), `flat 不应带 src/ 前缀: ${entries}`);
  console.log('✅ flat 压缩不带顶层目录名前缀');
}

async function testGhostItem() {
  const r = await FileManager.zipItems('mix.zip', ['src/a.txt', 'ghost.txt']);
  assert.strictEqual(r.status, 'ok');
  assert.strictEqual(r.entries, 1);
  const byItem = {};
  for (const x of r.results) byItem[x.item] = x.status;
  assert.strictEqual(byItem['src/a.txt'], 'ok');
  assert.strictEqual(byItem['ghost.txt'], 'not_found');
  console.log('✅ 单文件打包 + ghost 项回显 not_found');
}

async function testPythonGeneratedZip() {
  // 与真实 zip 格式互通: 解析 Python zipfile 生成的归档
  const zipPath = path.join(tmpRoot, 'py.zip');
  fs.writeFileSync(zipPath, Buffer.from(PYTHON_ZIP_B64, 'base64'));
  const u = await FileManager.unzipArchive('py.zip', 'pydest');
  assert.strictEqual(u.status, 'ok');
  assert.strictEqual(u.extracted, 2);
  assert.strictEqual(u.skipped, 0);
  assert.strictEqual(
    fs.readFileSync(path.join(tmpRoot, 'pydest', 'hello.txt'), 'utf8'), 'hello world');
  assert.strictEqual(
    fs.readFileSync(path.join(tmpRoot, 'pydest', 'sub', 'nested.txt'), 'utf8'), 'nested content');
  console.log('✅ 解析 Python zipfile 生成的真实归档 (跨格式互通)');
}

async function testZipSlip() {
  // 用自研 writer 构造 ../evil.txt 恶意条目
  const slipZip = path.join(tmpRoot, 'evil.zip');
  const w = ZipArchiver.openWriter(slipZip);
  w.add('../evil.txt', Buffer.from('evil'), new Date());
  w.add('ok.txt', Buffer.from('ok'), new Date());
  w.close();

  const u = await FileManager.unzipArchive('evil.zip', 'slipdest');
  assert.strictEqual(u.status, 'ok');
  assert.strictEqual(u.extracted, 1, `仅 ok.txt 应解压: ${JSON.stringify(u)}`);
  assert.strictEqual(u.skipped, 1, `../evil.txt 应计入 skipped: ${JSON.stringify(u)}`);
  assert.strictEqual(fs.existsSync(path.join(tmpRoot, 'evil.txt')), false, 'zip-slip 文件不应逃出沙箱');
  assert.strictEqual(
    fs.readFileSync(path.join(tmpRoot, 'slipdest', 'ok.txt'), 'utf8'), 'ok');
  console.log('✅ zip-slip 恶意条目计入 skipped 不逃逸');
}

async function testNoOverwriteSkips() {
  const dest = path.join(tmpRoot, 'nodest', 'src');
  fs.mkdirSync(dest, { recursive: true });
  fs.writeFileSync(path.join(dest, 'a.txt'), 'OLD');

  const u = await FileManager.unzipArchive('out.zip', 'nodest', false);
  assert.strictEqual(u.extracted, 1, `只有 b.txt 应解压: ${JSON.stringify(u)}`);
  assert.strictEqual(u.skipped, 1, `a.txt 已存在应跳过: ${JSON.stringify(u)}`);
  assert.strictEqual(fs.readFileSync(path.join(dest, 'a.txt'), 'utf8'), 'OLD');

  // overwrite=true (缺省) 覆盖
  const u2 = await FileManager.unzipArchive('out.zip', 'nodest');
  assert.strictEqual(u2.extracted, 2);
  assert.strictEqual(fs.readFileSync(path.join(dest, 'a.txt'), 'utf8'), 'AAA');
  console.log('✅ overwrite=false 跳过 / 缺省覆盖');
}

async function testEntriesFilter() {
  const u = await FileManager.unzipArchive('out.zip', 'fdest1', true, ['b.txt']);
  assert.strictEqual(u.extracted, 1, 'basename 匹配只解压 b.txt');
  assert.strictEqual(
    fs.existsSync(path.join(tmpRoot, 'fdest1', 'src', 'sub', 'b.txt')), true);

  const u2 = await FileManager.unzipArchive('out.zip', 'fdest2', true, ['src/a.txt']);
  assert.strictEqual(u2.extracted, 1, '精确名匹配只解压 src/a.txt');
  assert.strictEqual(
    fs.existsSync(path.join(tmpRoot, 'fdest2', 'src', 'a.txt')), true);
  console.log('✅ entries 过滤 (精确名/不带路径匹配)');
}

async function testNotAZip() {
  fs.writeFileSync(path.join(tmpRoot, 'fake.zip'), Buffer.from('this is not a zip file at all.........'));
  await assert.rejects(
    () => FileManager.unzipArchive('fake.zip', 'x'),
    (e) => /Not a zip/i.test(e.message),
  );
  console.log('✅ 非 zip 文件报错');
}

async function testCrc32() {
  // CRC32 已知值: "123456789" → 0xCBF43926
  assert.strictEqual(ZipArchiver._crc32(Buffer.from('123456789')), 0xCBF43926);
  assert.strictEqual(ZipArchiver._crc32(Buffer.alloc(0)), 0);
  console.log('✅ CRC32 已知值校验');
}

(async () => {
  setup();
  try {
    await testCrc32();
    await testRoundTrip();
    await testFlat();
    await testGhostItem();
    await testPythonGeneratedZip();
    await testZipSlip();
    await testNoOverwriteSkips();
    await testEntriesFilter();
    await testNotAZip();
    console.log('ALL FILE ZIP TESTS PASSED');
  } finally {
    teardown();
  }
})().catch((err) => {
  console.error('❌ TEST FAILED:', err);
  process.exit(1);
});
