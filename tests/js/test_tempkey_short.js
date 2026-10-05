// TempKeyManager format=short 短格式单测 (0.5.8, 不启动 agent)
//
// 运行: node tests/js/test_tempkey_short.js
const path = require('path');
const assert = require('assert');

const { TempKeyManager, loadCurves } = require(path.join(__dirname, '..', '..', 'js', 'agent.js'));

const HEX64_RE = /^[0-9a-f]{64}$/;

function decodeB64(s) {
  return Buffer.from(s, 'base64');
}

function assertCompressedPointB64(s, tag) {
  const raw = decodeB64(s);
  assert.strictEqual(raw.length, 33, `${tag} 应为 33 字节, 实际 ${raw.length}`);
  assert.ok(raw[0] === 2 || raw[0] === 3, `${tag} 前缀应为 02/03, 实际 ${raw[0]}`);
}

async function main() {
  // TempKeyManager 依赖 noble 曲线 (短格式压缩公钥派生), 测试独立加载
  await loadCurves();
  const mgr = new TempKeyManager();
  const key = mgr.getOrCreate(24);

  // ---------- 短格式字段规格 ----------
  assert.match(key.ecdsa_private_hex, HEX64_RE, 'ecdsa_private_hex 应为 64 位 hex 标量');
  assert.strictEqual(decodeB64(key.ecdsa_public_b64).length, 33, 'ecdsa_public_b64 应为 33 字节');
  assertCompressedPointB64(key.ecdsa_public_b64, 'ecdsa_public_b64');
  assertCompressedPointB64(key.ecies_public_b64, 'ecies_public_b64');
  assert.match(key.ecies_private_key, HEX64_RE, 'ecies_private_key 保持 64 位 hex');

  // ---------- 与全格式同源交叉验证 ----------
  const crypto = require('crypto');
  // 1. PEM 私钥标量 == 短格式 hex (JWK d 提取正确性): 从下发的 PEM 私钥串重建 KeyObject 取 d
  const pemPrivJwk = crypto.createPrivateKey(key.ecdsa_private_key).export({ format: 'jwk' });
  assert.strictEqual(
    Buffer.from(pemPrivJwk.d, 'base64url').toString('hex'),
    key.ecdsa_private_hex,
    'PEM 私钥标量应与短格式 hex 同源'
  );
  // 2. 压缩 ECDSA 公钥 == SPKI 尾部 65 字节未压缩点的压缩编码
  const spkiDer = key.ecdsa_vk.export({ type: 'spki', format: 'der' });
  const pub65 = spkiDer.subarray(spkiDer.length - 65);
  assert.strictEqual(pub65[0], 0x04, 'SPKI 尾部应为未压缩点');
  const compressed = decodeB64(key.ecdsa_public_b64);
  assert.ok(compressed.subarray(1).equals(pub65.subarray(1, 33)), '压缩点 X 应与未压缩点 X 一致');
  assert.strictEqual(compressed[0], pub65[64] & 1 ? 3 : 2, '压缩点前缀奇偶应与 Y 一致');
  // 3. 压缩 ECIES 公钥 == 130 hex 未压缩点的压缩编码
  const eciesPub65 = Buffer.from(key.ecies_public_key, 'hex');
  assert.strictEqual(eciesPub65.length, 65);
  const eciesCompressed = decodeB64(key.ecies_public_b64);
  assert.ok(eciesCompressed.subarray(1).equals(eciesPub65.subarray(1, 33)), 'ECIES 压缩点 X 应一致');
  assert.strictEqual(eciesCompressed[0], eciesPub65[64] & 1 ? 3 : 2, 'ECIES 压缩点前缀奇偶应一致');

  // ---------- 幂等: 同一密钥对不同 ttl 同取 ----------
  const again = mgr.getOrCreate(48);
  assert.strictEqual(again.key_id, key.key_id);
  assert.strictEqual(again.ecdsa_private_hex, key.ecdsa_private_hex);
  assert.strictEqual(again.ecdsa_public_b64, key.ecdsa_public_b64);

  // ---------- 内存验签/加密字段不被短格式污染 ----------
  assert.ok(Buffer.isBuffer(key.ecies_pub) && key.ecies_pub.length === 65, '内部 ecies_pub 应保持 65 字节未压缩');
  assert.ok(key.ecdsa_vk instanceof crypto.KeyObject, '内部 ecdsa_vk 应保持 KeyObject');

  console.log('ALL TEMPKEY SHORT TESTS PASSED');
}

main().catch((err) => {
  console.error('❌ TEST FAILED:', err);
  process.exit(1);
});
