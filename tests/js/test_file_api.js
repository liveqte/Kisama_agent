// JS file API 契约回归: batch 聚合、分片合并、errno reason 与 mount_readonly。
// 运行: node tests/js/test_file_api.js
const path = require('path');
const fs = require('fs');
const os = require('os');
const http = require('http');
const crypto = require('crypto');
const assert = require('assert');
const { once } = require('events');

const repoRoot = path.join(__dirname, '..', '..');
const jsDir = path.join(repoRoot, 'js');
const {
  main, Config, FileManager, TaskStore, ZipArchiver, fileErrorReason
} = require(path.join(jsDir, 'agent.js'));

const configKeys = [
  'DEBUG', 'LOG_LEVEL', 'FILE_ROOT', 'PORT', 'HOST', 'KMODE', 'KMODE_QUIC',
  'ECDSA_PUBLIC_KEY_PEM', 'ECIES_PUBLIC_KEY_PEM', 'SESSION_KEY', 'DNS_MODE',
  'onetasks', 'crontasks', 'InitTask', 'cronloop'
];
const savedConfig = Object.fromEntries(configKeys.map(key => [key, Config[key]]));
const savedTaskState = TaskStore.state;
const savedKstore = process.env.KSTORE;

let tmpRoot = '';
let server = null;
let originalListen = null;
let sigintListeners = new Set();
let signingKey = null;

function makeRoot(name) {
  const root = path.join(tmpRoot, name);
  fs.mkdirSync(root, { recursive: true });
  Config.FILE_ROOT = root;
  return root;
}

function codedError(code, message) {
  const err = new Error(message || `injected ${code}`);
  err.code = code;
  return err;
}

async function withFsPatch(method, patch, fn) {
  const original = fs[method];
  fs[method] = patch;
  try { return await fn(); }
  finally { fs[method] = original; }
}

function resultMap(results) {
  return Object.fromEntries(results.map(item => [item.from, item]));
}

function assertBatch(body, status, total, success, message) {
  assert.strictEqual(body.status, status);
  assert.strictEqual(body.total, total);
  assert.strictEqual(body.success, success);
  assert.strictEqual(body.message, message);
  assert.ok(Array.isArray(body.results));
  assert.strictEqual(body.results.length, total);
}

async function testBatchHelper() {
  const ok = FileManager.batchResult([{ status: 'ok' }, { status: 'ok' }]);
  assertBatch(ok, 'ok', 2, 2, undefined);
  assert.strictEqual(Object.prototype.hasOwnProperty.call(ok, 'message'), false);

  const partial = FileManager.batchResult([{ status: 'ok' }, { status: 'skipped' }, { status: 'denied' }]);
  assertBatch(partial, 'partial', 3, 1, '2 of 3 operations failed');

  const failed = FileManager.batchResult([{ status: 'failed' }, { status: 'skipped' }]);
  assertBatch(failed, 'error', 2, 0, 'All 2 operations failed');

  const empty = FileManager.batchResult([]);
  assertBatch(empty, 'error', 0, 0, 'No operations requested');
  console.log('PASS batch helper: ok/partial/error/empty');
}

async function testMixedMoveCopy() {
  for (const kind of ['move', 'copy']) {
    const root = makeRoot(`mixed-${kind}`);
    const outside = path.join(tmpRoot, `outside-${kind}.txt`);
    fs.writeFileSync(outside, 'OUTSIDE');
    fs.writeFileSync(path.join(root, 'a.txt'), 'A');
    fs.writeFileSync(path.join(root, 'b.txt'), 'B');
    fs.writeFileSync(path.join(root, 'blocker'), 'not a directory');

    const map = {
      'a.txt': `${kind}/result.txt`,
      'missing.txt': `${kind}/missing.txt`,
      'b.txt': 'blocker/inside.txt',
      [`../outside-${kind}.txt`]: 'escaped.txt'
    };
    const results = await (kind === 'move' ? FileManager.moveFiles(map) : FileManager.copyFiles(map));
    const byFrom = resultMap(results);
    assert.strictEqual(byFrom['a.txt'].status, 'ok');
    assert.strictEqual(Object.prototype.hasOwnProperty.call(byFrom['a.txt'], 'error'), false);
    assert.strictEqual(byFrom['missing.txt'].status, 'skipped');
    assert.strictEqual(byFrom['missing.txt'].error, 'source not found');
    assert.strictEqual(byFrom['b.txt'].status, 'denied');
    assert.strictEqual(byFrom['b.txt'].error, 'destination parent is not a directory');
    assert.strictEqual(byFrom[`../outside-${kind}.txt`].status, 'denied');
    assert.strictEqual(byFrom[`../outside-${kind}.txt`].error, 'path outside file root');
    for (const item of results.filter(item => item.status !== 'ok')) {
      assert.ok(item.error, `${kind} 失败项缺少 error: ${JSON.stringify(item)}`);
    }
    assert.strictEqual(fs.readFileSync(path.join(root, kind, 'result.txt'), 'utf8'), 'A');
    assert.strictEqual(fs.existsSync(path.join(root, 'a.txt')), kind === 'copy');
    assert.strictEqual(fs.readFileSync(outside, 'utf8'), 'OUTSIDE');
    assert.strictEqual(fs.existsSync(path.join(root, 'escaped.txt')), false);
    assertBatch(FileManager.batchResult(results), 'partial', 4, 1, '3 of 4 operations failed');
  }
  console.log('PASS mixed move/copy: ok/skipped/denied and filesystem results');
}

async function testDanglingSymlinkCannotRedirectWrites() {
  const root = makeRoot('dangling-symlink');
  const outside = path.join(tmpRoot, 'dangling-outside.txt');
  const link = path.join(root, 'link.txt');
  fs.writeFileSync(path.join(root, 'source.txt'), 'SOURCE');
  try {
    fs.symlinkSync(outside, link);
  } catch (e) {
    if (e.code === 'EPERM') {
      console.log('SKIP dangling symlink: host denied symlink creation');
      return;
    }
    throw e;
  }

  for (const kind of ['move', 'copy']) {
    const fn = kind === 'move' ? FileManager.moveFiles : FileManager.copyFiles;
    const results = await fn({ 'source.txt': 'link.txt' });
    assert.strictEqual(results.length, 1);
    assert.strictEqual(results[0].status, 'denied');
    assert.strictEqual(results[0].error, 'path outside file root');
  }
  await assert.rejects(
    () => FileManager.uploadFile('.', 'link.txt', Buffer.from('OUTSIDE').toString('base64')),
    /outside root/
  );
  assert.strictEqual(fs.existsSync(outside), false);
  assert.strictEqual(fs.lstatSync(link).isSymbolicLink(), true);
  assert.strictEqual(fs.readFileSync(path.join(root, 'source.txt'), 'utf8'), 'SOURCE');
  console.log('PASS dangling symlink cannot redirect copy/move/upload outside root');
}

async function testCopyDirectoryBoundaries() {
  const root = makeRoot('copy-directory-boundaries');
  fs.mkdirSync(path.join(root, 'src'));
  fs.writeFileSync(path.join(root, 'src', 'ok.txt'), 'OK');

  const inside = await FileManager.copyFiles({ src: 'src/inside' });
  assert.strictEqual(inside[0].status, 'failed');
  assert.strictEqual(inside[0].error, 'destination is inside source directory');
  assert.strictEqual(fs.existsSync(path.join(root, 'src', 'inside')), false);

  const outside = path.join(tmpRoot, 'copy-fallback-outside.txt');
  fs.writeFileSync(outside, 'SECRET');
  try {
    fs.symlinkSync(outside, path.join(root, 'src', 'link.txt'));
  } catch (e) {
    if (e.code === 'EPERM') {
      console.log('SKIP copy fallback symlink: host denied symlink creation');
      return;
    }
    throw e;
  }
  const copied = await withFsPatch('cpSync', undefined, () => FileManager.copyFiles({ src: 'dest' }));
  assert.strictEqual(copied[0].status, 'ok');
  assert.strictEqual(fs.lstatSync(path.join(root, 'dest', 'link.txt')).isSymbolicLink(), true);
  assert.strictEqual(fs.readlinkSync(path.join(root, 'dest', 'link.txt')), outside);
  assert.strictEqual(fs.readFileSync(path.join(root, 'dest', 'ok.txt'), 'utf8'), 'OK');
  console.log('PASS copy rejects destination inside source and fallback preserves symlinks');
}

async function testAllFailedAndEmpty() {
  for (const kind of ['move', 'copy']) {
    makeRoot(`failed-${kind}`);
    const fn = kind === 'move' ? FileManager.moveFiles : FileManager.copyFiles;
    const failed = FileManager.batchResult(await fn({ missing: 'dest.txt' }));
    assertBatch(failed, 'error', 1, 0, 'All 1 operations failed');
    assert.strictEqual(failed.results[0].status, 'skipped');
    assert.strictEqual(failed.results[0].error, 'source not found');
    assertBatch(FileManager.batchResult(await fn({})), 'error', 0, 0, 'No operations requested');
  }
  console.log('PASS all-failed and empty move/copy batches');
}

async function testOtherFailures() {
  for (const kind of ['move', 'copy']) {
    const root = makeRoot(`other-${kind}`);
    fs.writeFileSync(path.join(root, 'source.txt'), 'DATA');
    const method = kind === 'move' ? 'renameSync' : 'copyFileSync';
    const injected = codedError('EACCES', 'injected write failure');
    const fn = kind === 'move' ? FileManager.moveFiles : FileManager.copyFiles;
    const results = await withFsPatch(method, () => { throw injected; }, () => fn({ 'source.txt': 'dest.txt' }));
    assert.strictEqual(results[0].status, 'failed');
    assert.strictEqual(results[0].error, 'injected write failure');
    assert.strictEqual(results[0].message, 'injected write failure');
    assertBatch(FileManager.batchResult(results), 'error', 1, 0, 'All 1 operations failed');
  }
  console.log('PASS other move/copy errors remain failed with original error');
}

async function testChunkMerge() {
  const part0 = Buffer.alloc(256 * 1024 + 17);
  const part1 = Buffer.alloc(64 * 1024 + 9);
  for (let i = 0; i < part0.length; i++) part0[i] = (i * 31) & 0xff;
  for (let i = 0; i < part1.length; i++) part1[i] = (i * 17 + 3) & 0xff;
  const expected = Buffer.concat([part0, part1]);

  for (const kind of ['base64', 'raw']) {
    const root = makeRoot(`chunks-${kind}`);
    const filename = `${kind}.bin`;
    const dir = 'uploads';
    const chunksDir = path.join(root, dir, '.upload_chunks', filename);
    const uploadRoot = path.dirname(chunksDir);
    const upload = kind === 'base64'
      ? (index, data) => FileManager.uploadFile(dir, filename, data.toString('base64'), index, 2)
      : (index, data) => FileManager.uploadFileRaw(dir, filename, data, index, 2);

    const first = await upload(0, part0);
    assert.strictEqual(first.status, 'ok');
    if (kind === 'raw') assert.strictEqual(first.completed, false);
    const last = await upload(1, part1);
    assert.strictEqual(last.status, 'ok');
    if (kind === 'raw') assert.strictEqual(last.completed, true);
    assert.deepStrictEqual(fs.readFileSync(path.join(root, dir, filename)), expected);
    assert.strictEqual(fs.existsSync(chunksDir), false, `${kind} 分片目录未清理`);
    assert.strictEqual(fs.existsSync(uploadRoot), false, `${kind} .upload_chunks 未清理`);
  }
  console.log('PASS base64/raw chunk merge: exact bytes and temporary directories cleaned');
}

function testFileErrorReason() {
  const cases = [
    ['EROFS', 'read_only_file_system'],
    ['EACCES', 'permission_denied'],
    ['EPERM', 'permission_denied'],
    ['ENOTDIR', 'not_a_directory'],
    ['EEXIST', 'file_exists'],
    ['ENOENT', 'not_found'],
    ['ENOSPC', 'no_space'],
    ['EIO', 'unknown'],
    [undefined, 'unknown']
  ];
  for (const [code, expected] of cases) {
    assert.strictEqual(fileErrorReason(code ? codedError(code) : new Error('unknown')), expected);
  }
  console.log('PASS fileErrorReason errno mapping');
}

function testMountInfoParser() {
  const mounts = [
    '36 25 0:32 / / rw,relatime - ext4 /dev/root rw',
    '37 36 8:1 / /home rw,relatime - ext4 /dev/sda1 rw',
    '38 37 0:172 / /home/container rw,relatime - ext4 /dev/md1 rw',
    '39 38 0:173 / /home/container/.trash ro,nosuid,nodev - tmpfs tmpfs rw,size=4k',
    '40 37 8:1 / /mnt/read\\040only\\011tab\\012line\\134slash ro - ext4 /dev/sda1 rw',
    '41 37 8:1 / /home/container/.trash-old rw - ext4 /dev/sda1 rw',
    '42 37 8:1 / /home/container/.trash/child rw - ext4 /dev/sda1 rw',
    '43 37 8:1 / /home/container/xro rw - ext4 /dev/sda1 rw'
  ].join('\n');
  const parse = target => FileManager._mountReadOnlyFromMountInfo(target, mounts);
  assert.strictEqual(parse('/home/container/.trash'), true);
  assert.strictEqual(parse('/home/container/.trash/other'), true);
  assert.strictEqual(parse('/home/container/.trash/child'), false, '最长匹配应选 rw 子挂载');
  assert.strictEqual(parse('/home/container/.trash-old'), false, '兄弟前缀不得匹配');
  assert.strictEqual(parse('/home/container/other'), false);
  assert.strictEqual(parse('/mnt/read only\ttab\nline\\slash/file'), true);
  assert.strictEqual(parse('/home/container/xro'), false, 'ro 必须为完整选项');
  assert.strictEqual(parse('relative/path'), undefined);
  assert.strictEqual(FileManager._mountReadOnlyFromMountInfo('/home', 'malformed'), undefined);
  assert.strictEqual(FileManager._mountReadOnlyFromMountInfo('/home', ''), undefined);
  console.log('PASS synthetic mountinfo: longest match, boundaries, escapes, unknown');
}

async function testAuthorityUnknownField() {
  const root = makeRoot('authority');
  fs.mkdirSync(path.join(root, 'dir'));
  const files = await FileManager.getFilePermissions(['dir']);
  assert.strictEqual(files.length, 1);
  assert.strictEqual(files[0].writable, FileManager._checkAccess(path.join(root, 'dir'), fs.constants.W_OK));
  const hasMountField = Object.prototype.hasOwnProperty.call(files[0], 'mount_readonly');
  if (process.platform === 'linux') {
    let readable = true;
    try { fs.readFileSync('/proc/self/mountinfo', 'utf8'); } catch (e) { readable = false; }
    if (readable) assert.strictEqual(typeof files[0].mount_readonly, 'boolean');
    else assert.strictEqual(hasMountField, false);
  } else {
    assert.strictEqual(hasMountField, false, '非 Linux 不得伪造 mount_readonly:false');
  }
  console.log('PASS authority writable semantics and unknown mount_readonly omission');
}

async function testZipItemFailures() {
  const root = makeRoot('zip-items');
  fs.writeFileSync(path.join(root, 'good.txt'), 'GOOD');
  fs.writeFileSync(path.join(root, 'bad.txt'), 'BAD');
  const injected = codedError('EACCES', 'injected read failure');
  const partial = await withFsPatch('readFileSync', (target, ...args) => {
    if (path.resolve(String(target)) === path.join(root, 'bad.txt')) throw injected;
    return savedReadFileSync(target, ...args);
  }, () => FileManager.zipItems('partial.zip', ['good.txt', 'bad.txt']));
  assert.strictEqual(partial.status, 'partial');
  assert.strictEqual(partial.entries, 1);
  assert.strictEqual(partial.results[1].status, 'error');
  assert.strictEqual(partial.results[1].error, 'injected read failure');

  const failed = await withFsPatch('readFileSync', (target, ...args) => {
    if (path.resolve(String(target)) === path.join(root, 'bad.txt')) throw injected;
    return savedReadFileSync(target, ...args);
  }, () => FileManager.zipItems('failed.zip', ['bad.txt']));
  assert.strictEqual(failed.status, 'error');
  assert.strictEqual(failed.entries, 0);

  const ghost = await FileManager.zipItems('ghost.zip', ['good.txt', 'missing.txt']);
  assert.strictEqual(ghost.status, 'ok');
  assert.strictEqual(ghost.results[1].status, 'not_found');
  console.log('PASS zip item errors aggregate to partial/error; not_found stays compatible');
}

async function testZipCloseFailure() {
  const root = makeRoot('zip-close');
  fs.writeFileSync(path.join(root, 'a.txt'), 'A');
  const injected = codedError('EIO', 'injected close failure');
  await withFsPatch('closeSync', (fd) => {
    savedCloseSync(fd);
    throw injected;
  }, async () => {
    await assert.rejects(() => FileManager.zipItems('out.zip', ['a.txt']), e => e === injected);
  });
  console.log('PASS zip close failure is not reported as success');
}

async function testUnzipReadAndWriteFailures() {
  const root = makeRoot('unzip-errors');
  fs.writeFileSync(path.join(root, 'a.txt'), 'AAA');
  await FileManager.zipItems('out.zip', ['a.txt']);

  const injected = codedError('EACCES', 'injected archive read failure');
  await withFsPatch('readFileSync', (target, ...args) => {
    if (path.resolve(String(target)) === path.join(root, 'out.zip')) throw injected;
    return savedReadFileSync(target, ...args);
  }, async () => {
    await assert.rejects(() => FileManager.unzipArchive('out.zip', 'dest'), e => e === injected);
  });

  const writeError = codedError('ENOSPC', 'injected extraction write failure');
  await withFsPatch('writeFileSync', (target, ...args) => {
    if (typeof target === 'number') throw writeError;
    return fs.writeFileSync(target, ...args);
  }, async () => {
    await assert.rejects(() => FileManager.unzipArchive('out.zip', 'dest'), e => e === writeError);
  });
  assert.strictEqual(fs.existsSync(path.join(root, 'dest', 'a.txt')), false);

  const zipPath = path.join(root, 'corrupt.zip');
  const writer = ZipArchiver.openWriter(zipPath);
  writer.add('a.txt', Buffer.from('AAA'), new Date());
  writer.close();
  const bytes = fs.readFileSync(zipPath);
  const nameLen = bytes.readUInt16LE(26);
  bytes[30 + nameLen] ^= 0xff;
  fs.writeFileSync(zipPath, bytes);
  await assert.rejects(
    () => FileManager.unzipArchive('corrupt.zip', 'corrupt-dest'),
    e => e.status === 500 && /CRC mismatch/.test(e.message)
  );
  assert.strictEqual(fs.existsSync(path.join(root, 'corrupt-dest', 'a.txt')), false);
  console.log('PASS unzip read/write/CRC failures return errors and clean partial output');
}

async function testZipDoesNotFollowNestedSymlink() {
  const root = makeRoot('zip-symlink');
  const outside = path.join(tmpRoot, 'zip-outside-secret.txt');
  fs.writeFileSync(outside, 'SECRET');
  fs.mkdirSync(path.join(root, 'src'));
  fs.writeFileSync(path.join(root, 'src', 'ok.txt'), 'OK');
  try {
    fs.symlinkSync(outside, path.join(root, 'src', 'link.txt'));
  } catch (e) {
    if (e.code === 'EPERM') {
      console.log('SKIP nested symlink: host denied symlink creation');
      return;
    }
    throw e;
  }
  const result = await FileManager.zipItems('out.zip', ['src']);
  assert.strictEqual(result.status, 'partial');
  assert.strictEqual(result.results[0].status, 'error');
  assert.ok(/symbolic link/.test(result.results[0].error));
  const names = ZipArchiver.parse(path.join(root, 'out.zip')).map(entry => entry.name);
  assert.deepStrictEqual(names, ['src/ok.txt']);
  console.log('PASS recursive zip refuses nested symlinks instead of reading outside root');
}

async function startHttpServer() {
  // express-ws 会重写 app.listen 并直接调用内部 http.Server.listen, 因此在该原型层捕获。
  originalListen = http.Server.prototype.listen;
  http.Server.prototype.listen = function(...args) {
    server = this;
    return originalListen.apply(this, args);
  };
  sigintListeners = new Set(process.listeners('SIGINT'));

  const pair = crypto.generateKeyPairSync('ec', { namedCurve: 'prime256v1' });
  signingKey = pair.privateKey;
  const publicPem = pair.publicKey.export({ type: 'spki', format: 'pem' });
  const eciesPair = crypto.generateKeyPairSync('ec', { namedCurve: 'secp256k1' });
  const eciesDer = eciesPair.publicKey.export({ type: 'spki', format: 'der' });
  const eciesB64 = eciesDer.subarray(-65).toString('base64');

  Config.DEBUG = false;
  Config.LOG_LEVEL = 3;
  Config.DNS_MODE = 'off';
  Config.PORT = 0;
  Config.HOST = '127.0.0.1';
  Config.KMODE = '0';
  Config.KMODE_QUIC = false;
  Config.ECDSA_PUBLIC_KEY_PEM = publicPem;
  Config.ECIES_PUBLIC_KEY_PEM = eciesB64;
  process.env.KSTORE = 'off';
  TaskStore.state = {
    ...savedTaskState, enabled: false, locked: false, path: null, key: null,
    hubregs: [], proxyports: { hub: [], local: [] }, argobinds: []
  };

  await main({ PORT: 0, KMODE: '0', ECDSA_PUBLIC_KEY_PEM: publicPem, ECIES_PUBLIC_KEY_PEM: eciesB64 });
  assert.ok(server, 'HTTP server 未创建');
  if (!server.listening) await once(server, 'listening');
}

async function stopHttpServer() {
  if (server) {
    await new Promise(resolve => server.close(resolve));
    server = null;
  }
  if (originalListen) {
    http.Server.prototype.listen = originalListen;
    originalListen = null;
  }
  for (const listener of process.listeners('SIGINT')) {
    if (!sigintListeners.has(listener)) process.removeListener('SIGINT', listener);
  }
  sigintListeners = new Set();
}

function decryptResponse(text) {
  const container = JSON.parse(Buffer.from(text, 'base64').toString('utf8'));
  const decipher = crypto.createDecipheriv(
    'aes-256-gcm', Buffer.from(Config.SESSION_KEY, 'base64'), Buffer.from(container.nonce, 'base64'));
  decipher.setAuthTag(Buffer.from(container.tag, 'base64'));
  return Buffer.concat([
    decipher.update(Buffer.from(container.ciphertext, 'base64')), decipher.final()
  ]).toString('utf8');
}

async function apiRequest(method, route, body, options = {}) {
  const raw = options.raw === true;
  const payload = Buffer.isBuffer(body) ? body : Buffer.from(JSON.stringify(body || {}));
  const nonce = crypto.randomBytes(16).toString('base64');
  const timestamp = String(Math.floor(Date.now() / 1000));
  const bodyHash = crypto.createHash('sha256').update(raw ? Buffer.alloc(0) : payload).digest('hex');
  const message = `${method}\n${route}\n${bodyHash}\n${nonce}\n${timestamp}`;
  const signature = crypto.sign('sha256', Buffer.from(message), signingKey).toString('base64');
  const headers = {
    'content-type': raw ? 'application/octet-stream' : 'application/json',
    'x-nonce': nonce,
    'x-timestamp': timestamp,
    'x-auth-token': signature,
    ...(options.headers || {})
  };

  const response = await new Promise((resolve, reject) => {
    const req = http.request({
      host: '127.0.0.1', port: server.address().port, path: route, method, headers, agent: false
    }, res => {
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, text: Buffer.concat(chunks).toString('utf8') }));
      res.on('error', reject);
    });
    req.on('error', reject);
    req.end(payload);
  });
  assert.strictEqual(response.headers['x-encrypted'], 'true', '生产模式响应应加密');
  return { status: response.status, body: JSON.parse(decryptResponse(response.text)) };
}

async function testHttpBatchRoutes() {
  for (const kind of ['move', 'copy']) {
    const root = makeRoot(`http-${kind}`);
    fs.writeFileSync(path.join(root, 'a.txt'), 'A');
    fs.writeFileSync(path.join(root, 'b.txt'), 'B');
    fs.writeFileSync(path.join(root, 'blocker'), 'FILE');
    const map = {
      'a.txt': `${kind}/ok.txt`,
      'missing.txt': `${kind}/missing.txt`,
      'b.txt': 'blocker/file.txt'
    };
    const method = kind === 'move' ? 'PUT' : 'POST';
    const route = kind === 'move' ? '/api/file' : '/api/file/cp';
    const payload = kind === 'move' ? { move_map: map } : map;
    const response = await apiRequest(method, route, payload);
    assert.strictEqual(response.status, 200);
    assertBatch(response.body, 'partial', 3, 1, '2 of 3 operations failed');
    const byFrom = resultMap(response.body.results);
    assert.strictEqual(byFrom['missing.txt'].status, 'skipped');
    assert.strictEqual(byFrom['missing.txt'].error, 'source not found');
    assert.strictEqual(byFrom['b.txt'].status, 'denied');
    assert.strictEqual(byFrom['b.txt'].error, 'destination parent is not a directory');

    const empty = await apiRequest(method, route, kind === 'move' ? { move_map: {} } : {});
    assert.strictEqual(empty.status, 200);
    assertBatch(empty.body, 'error', 0, 0, 'No operations requested');
    const failed = await apiRequest(method, route, kind === 'move' ? { move_map: { missing: 'x' } } : { missing: 'x' });
    assert.strictEqual(failed.status, 200);
    assertBatch(failed.body, 'error', 1, 0, 'All 1 operations failed');
  }
  console.log('PASS HTTP move/copy: 200 with ok/partial/error shells');
}

async function testHttpErrorReasons() {
  const root = makeRoot('http-errors');
  fs.writeFileSync(path.join(root, 'blocker'), 'FILE');
  fs.writeFileSync(path.join(root, 'source.txt'), 'ZIP DATA');
  fs.mkdirSync(path.join(root, 'raw'));
  await FileManager.zipItems('archive.zip', ['source.txt']);

  const mkdirTarget = path.join(root, 'readonly');
  const erofs = codedError('EROFS', 'injected read-only filesystem');
  const mkdir = await withFsPatch('mkdirSync', (target, ...args) => {
    if (path.resolve(String(target)) === mkdirTarget) throw erofs;
    return savedMkdirSync(target, ...args);
  }, () => apiRequest('POST', '/api/file/new', { path: 'readonly' }));
  assert.strictEqual(mkdir.status, 500);
  assert.strictEqual(mkdir.body.reason, 'read_only_file_system');

  const base64Target = path.join(root, 'blocker', 'x.txt');
  const enotdir = codedError('ENOTDIR', 'injected not a directory');
  const upload = await withFsPatch('writeFileSync', (target, ...args) => {
    if (path.resolve(String(target)) === base64Target) throw enotdir;
    return savedWriteFileSync(target, ...args);
  }, () => apiRequest('POST', '/api/file', {
    path: 'blocker', filename: 'x.txt', content: Buffer.from('X').toString('base64')
  }));
  assert.strictEqual(upload.status, 500);
  assert.strictEqual(upload.body.reason, 'not_a_directory');

  const rawTarget = path.join(root, 'raw', 'x.bin');
  const raw = await withFsPatch('writeFileSync', (target, ...args) => {
    if (path.resolve(String(target)) === rawTarget) throw erofs;
    return savedWriteFileSync(target, ...args);
  }, () => apiRequest('POST', '/api/fileraw', Buffer.from('RAW'), {
    raw: true,
    headers: {
      'x-file-path': encodeURIComponent('raw'),
      'x-file-name': encodeURIComponent('x.bin')
    }
  }));
  assert.strictEqual(raw.status, 500);
  assert.strictEqual(raw.body.status, 'error');
  assert.strictEqual(raw.body.completed, false);
  assert.strictEqual(raw.body.reason, 'read_only_file_system');

  const zipTarget = path.join(root, 'readonly.zip');
  const zip = await withFsPatch('openSync', (target, ...args) => {
    if (path.resolve(String(target)) === zipTarget) throw erofs;
    return savedOpenSync(target, ...args);
  }, () => apiRequest('POST', '/api/file/zip', { path: 'readonly.zip', items: ['source.txt'] }));
  assert.strictEqual(zip.status, 500);
  assert.strictEqual(zip.body.reason, 'read_only_file_system');
  assert.strictEqual(zip.body.status, 'error');

  const unzipTarget = path.join(root, 'unzip-dest', 'source.txt');
  const unzip = await withFsPatch('openSync', (target, ...args) => {
    if (path.resolve(String(target)) === unzipTarget) throw enotdir;
    return savedOpenSync(target, ...args);
  }, () => apiRequest('POST', '/api/file/unzip', { path: 'archive.zip', dest_path: 'unzip-dest' }));
  assert.strictEqual(unzip.status, 500);
  assert.strictEqual(unzip.body.reason, 'not_a_directory');
  assert.strictEqual(unzip.body.status, 'error');
  assert.strictEqual(fs.existsSync(unzipTarget), false);
  console.log('PASS HTTP mkdir/base64/raw/zip/unzip errno reasons; no swallowed write success');
}

// 保存原始 fs 实现, 避免注入时递归调用补丁自身。
const savedMkdirSync = fs.mkdirSync;
const savedWriteFileSync = fs.writeFileSync;
const savedOpenSync = fs.openSync;
const savedReadFileSync = fs.readFileSync;
const savedCloseSync = fs.closeSync;

(async () => {
  tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'kisama-file-api-'));
  try {
    await testBatchHelper();
    await testMixedMoveCopy();
    await testDanglingSymlinkCannotRedirectWrites();
    await testCopyDirectoryBoundaries();
    await testAllFailedAndEmpty();
    await testOtherFailures();
    await testChunkMerge();
    testFileErrorReason();
    testMountInfoParser();
    await testAuthorityUnknownField();
    await testZipItemFailures();
    await testZipCloseFailure();
    await testUnzipReadAndWriteFailures();
    await testZipDoesNotFollowNestedSymlink();
    await startHttpServer();
    await testHttpBatchRoutes();
    await testHttpErrorReasons();
    console.log('ALL FILE API TESTS PASSED');
  } finally {
    await stopHttpServer();
    for (const [key, value] of Object.entries(savedConfig)) Config[key] = value;
    TaskStore.state = savedTaskState;
    if (savedKstore === undefined) delete process.env.KSTORE;
    else process.env.KSTORE = savedKstore;
    if (tmpRoot) fs.rmSync(tmpRoot, { recursive: true, force: true });
  }
})().catch(err => {
  console.error('FILE API TEST FAILED:', err);
  process.exitCode = 1;
});
