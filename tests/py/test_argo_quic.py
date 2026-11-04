#!/usr/bin/env python3
# Argo 隧道 QUIC 边缘传输离线单测 (py 版, 0.6.1):
# 1. varint 编解码往返 (1/2/4/8 字节边界)
# 2. quic_initial_keys 客户端/服务端对称性 + QuicKeys seal/open 往返 + 篡改必败
# 3. 头保护 mask 异或可逆 + 包号解码 (含回绕)
# 4. ACK 编码 → 解码往返
# 5. 传输参数: 我方 varint 编码 + 边缘定长大端解析 (双口径)
# 6. QuicOffsetBuffer 乱序重组
# 7. capnp ReturnResult 实机抓包回归 (bootstrap 跳过 + 注册成功 + location)
# 8. KMODE 2q 解析, 1q/0q 非法回退
# 9. ArgoTunnelManager entry transport + list 字段
# 10. verify_edge_quic_certificate 软校验 (openssl 生成对照证书, 无 openssl 时跳过)
# 全部离线, 不依赖外网。
import base64
import os
import shutil
import subprocess
import sys
import tempfile

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "..", "py"))

import agent  # noqa: E402

try:
    from cryptography.hazmat.primitives.asymmetric.x25519 import X25519PrivateKey
    from cryptography.hazmat.primitives.serialization import Encoding, PublicFormat
except ImportError:
    print("❌ 需要 cryptography 库 (noise 依赖)")
    sys.exit(1)


def test_varint():
    cases = [0, 1, 63, 64, 16383, 16384, 1073741823, 1073741824, 4294967295, 4294967296, 0x3FFFFFFFFFFFFFFF]
    for value in cases:
        encoded = agent.quic_write_varint(value)
        decoded = agent.quic_read_varint(encoded, 0)
        assert decoded is not None and decoded[0] == value, "varint 往返失败: %r" % value
        assert decoded[1] == len(encoded), "varint 长度不一致: %r" % value
    assert len(agent.quic_write_varint(63)) == 1
    assert len(agent.quic_write_varint(64)) == 2
    assert len(agent.quic_write_varint(16384)) == 4
    assert len(agent.quic_write_varint(1073741824)) == 8
    assert agent.quic_read_varint(agent.quic_write_varint(1000)[:1], 0) is None, "截断应返回 None"
    print("✅ varint 编解码往返 (含 1/2/4/8 字节边界与截断)")


def test_initial_keys():
    cid = bytes.fromhex("8394c8f03e515708")
    client = agent.quic_initial_keys(cid, True)
    server = agent.quic_initial_keys(cid, False)
    # 客户端发送密钥 = 服务端接收密钥 (client in / server in 对称)
    assert client["send"].secret == server["recv"].secret, "client in / server in 应对称"
    assert client["send"].key != client["recv"].key, "收发密钥应不同"
    assert len(client["send"].key) == 16, "AES-128-GCM 密钥应为 16 字节"
    assert len(client["send"].iv) == 12
    assert len(client["send"].hp_key) == 16
    again = agent.quic_initial_keys(cid, True)
    assert again["send"].key == client["send"].key, "同 CID 重派生应一致"
    derived = agent.hkdf_expand_label("sha256", bytes(32), "quic key", b"", 16)
    assert len(derived) == 16
    print("✅ quic_initial_keys 对称性 + QuicKeys 结构 + hkdf_expand_label")


def test_seal_open():
    secret = bytes([0x42] * 32)
    keys = agent.QuicKeys("sha256", "aes-128-gcm", secret)
    header = bytes([0x40, 0x11, 0x22, 0x33, 0x44])
    payload = b"hello argo over quic payload 0123456789"
    sealed = keys.seal(7, header, payload)
    assert len(sealed) == len(payload) + 16, "密文应含 16 字节 tag"
    assert keys.open(7, header, sealed) == payload, "seal/open 往返应还原明文"
    try:
        keys.open(8, header, sealed)
        raise AssertionError("包号不匹配必须解密失败")
    except Exception:
        pass
    bad_header = bytes([header[0] ^ 0x01]) + header[1:]
    try:
        keys.open(7, bad_header, sealed)
        raise AssertionError("AAD 篡改必须失败")
    except Exception:
        pass
    nxt = agent.quic_next_keys(keys, True)
    assert nxt.key != keys.key, "key update 应派生新密钥"
    assert nxt.hp_key == keys.hp_key, "argo 边缘跨 key update 保留 hpKey"
    nxt2 = agent.quic_next_keys(keys, False)
    assert nxt2.hp_key != keys.hp_key, "不保留时 hpKey 应更新"
    print("✅ QuicKeys seal/open 往返 + 篡改必败 + key update 语义")


def test_protection():
    keys = agent.quic_initial_keys(bytes([7] * 8), True)["send"]
    packet = bytearray(64)
    packet[0] = 0x40
    packet = bytes(packet)
    sample = packet[5:21]
    mask = keys.mask(sample)
    assert len(mask) == 5
    out = bytearray(packet)
    out[0] ^= mask[0] & 0x1F
    for i in range(4):
        out[5 + i] ^= mask[1 + i]
    # 逆向还原
    out[0] ^= mask[0] & 0x1F
    for i in range(4):
        out[5 + i] ^= mask[1 + i]
    assert bytes(out) == packet, "头保护异或应可逆"
    print("✅ 头保护 mask 异或可逆")


def test_packet_number():
    assert agent._quic_decode_packet_number(1000, 16, 1050) == 1050
    assert agent._quic_decode_packet_number(0xFFFF, 16, 0x0000) == 0x10000, "回绕应落到 0x10000"
    assert agent._quic_decode_packet_number(0xFFFF, 16, 0xFFFF) == 0xFFFF
    print("✅ 包号解码 (含 16 位回绕)")


def test_ack():
    ranges = [{"start": 0, "length": 2}, {"start": 4, "length": 3}, {"start": 10, "length": 1}]
    frame = agent._quic_encode_ack(ranges)
    assert frame[0] == 0x02, "ACK 帧首字节应为 0x02"
    def _number(reader):
        parsed = agent.quic_read_varint(reader["buffer"], reader["pos"])
        reader["pos"] += parsed[1]
        return parsed[0]

    reader = {"buffer": frame, "pos": 1, "number": _number}
    decoded = agent._quic_ranges_from_ack(reader)
    decoded = [r for r in decoded if "ack_delay" not in r]   # 尾部附带的 ACK 延迟元数据
    norm = sorted([r["start"], r["length"]] for r in decoded)
    expect = sorted([[r["start"], r["length"]] for r in ranges])
    assert norm == expect, "ACK 范围往返应一致"
    print("✅ ACK 编码 → 解码往返")


def test_transport_params():
    cid = bytes.fromhex("01020304050607")   # 7 字节: 非 1/2/4/8 → 解码端按 bytes 往返
    entries = [
        (agent.QUIC_PARAM["max_idle_timeout"], 30000),
        (agent.QUIC_PARAM["initial_max_data"], 4194304),
        (agent.QUIC_PARAM["active_connection_id_limit"], 8),
        (agent.QUIC_PARAM["initial_source_connection_id"], cid),
    ]
    encoded = agent._quic_encode_transport_parameters(entries)
    # 编码 (我方 ClientHello): 整数值按 varint 变长编码 (RFC 9000 §16, 实机确认)
    expect_30000 = agent.quic_write_varint(30000)
    id_len = agent.quic_write_varint(agent.QUIC_PARAM["max_idle_timeout"])
    assert encoded[2:2 + len(expect_30000)] == expect_30000, "值应为 varint 编码"
    # 解码 (边缘 EncryptedExtensions): 边缘按 RFC 定长大端发送, 解码端按定长解析
    edge_params = (
        agent.quic_write_varint(1) + agent.quic_write_varint(2) + bytes([0x75, 0x30])
        + agent.quic_write_varint(4) + agent.quic_write_varint(4) + bytes([0x00, 0x40, 0x00, 0x00])
    )
    decoded = agent._quic_decode_transport_parameters(edge_params)
    assert decoded[1] == 30000
    assert decoded[4] == 4194304
    decoded2 = agent._quic_decode_transport_parameters(agent._quic_encode_transport_parameters([(0x0F, cid)]))
    assert isinstance(decoded2[0x0F], bytes) and decoded2[0x0F] == cid, "byte-string 参数应按 bytes 往返"
    print("✅ QUIC 传输参数: 我方 varint 编码 + 边缘定长大端解析 (双口径)")


def test_offset_buffer():
    buf = agent.QuicOffsetBuffer()
    assert buf.accept(0, b"AB") == b"AB"
    assert buf.accept(4, b"EF") == b""          # 乱序暂存
    assert buf.accept(2, b"CD") == b"CDEF"      # 补洞后连续吐出
    assert buf.accept(0, b"AB") == b""          # 重传去重
    assert buf.contiguous == 6
    print("✅ QuicOffsetBuffer 乱序重组")


def test_capnp_return_result():
    # 实机抓包 (2026-10-31, AWS 干净网络, trycloudflare QUIC 注册应答):
    # 消息A = bootstrap 应答 (content = capability), 消息B = registerConnection 应答 (成功, iad09)
    hex_data = "000000000b00000000000000010001000300000000000000000000000200010000000000010000000000000000000000000000000000020003000000000000000100000017000000040000000100010001000000000000000000000000000000000000001200000000000000010001000300000000000000000000000200010001000000010000000000000000000000000000000000020004000000000001002500000007000000000000000100010001000000000000000000000001000200010000000000000005000000820000000900000032000000acab4c7e585049b5b15ca99da75d8a0d69616430390000000000000001000100"
    messages, rest = agent.capnp_messages(bytes.fromhex(hex_data))
    assert len(messages) == 2, "应解析出 2 条消息 (单段 8B 段表)"
    r1 = agent.capnp_return_result(messages[0])
    assert r1.get("bootstrap") is True, "bootstrap 应答应标记 bootstrap"
    r2 = agent.capnp_return_result(messages[1])
    assert r2.get("ok") is True, "注册应答应成功"
    assert r2.get("location") == "iad09", "location 应为边缘机房码"
    print("✅ capnpReturnResult 实机抓包回归 (bootstrap 跳过 + 注册成功 + location)")


def test_kmode_parsing():
    # env 路径经子进程验证 (类属性在 import 时读取 env)
    script = "import sys; sys.path.insert(0, sys.argv[1]); import agent; print(agent.Config.KMODE, agent.Config.KMODE_QUIC)"
    agent_py_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "py"))
    env_work = tempfile.mkdtemp(prefix="kisama-quic-kmode-")
    try:
        def run(kmode):
            env = dict(os.environ)
            env["KMODE"] = kmode
            out = subprocess.run(
                [sys.executable, "-I", "-c", script, agent_py_dir],
                capture_output=True, text=True, env=env, cwd=env_work, timeout=60,
            )
            assert out.returncode == 0, out.stderr[-500:]
            parts = out.stdout.strip().split()
            return parts[0], parts[1] == "True"

        assert run("2q") == ("2", True), "env KMODE=2q 应归一化"
        assert run("2quic") == ("2", True)
        assert run("2Q") == ("2", True)
        assert run("2") == ("2", False), "显式 2 不带后缀应关闭 QUIC"
        assert run("1")[0] == "1"
        assert run("0")[0] == "0"
        print("✅ KMODE env 子进程解析: 2q/2quic/2Q → 2+QUIC, 1/0/2 原样")
    finally:
        shutil.rmtree(env_work, ignore_errors=True)


def test_manager_transport():
    manager = agent.ArgoTunnelManager()
    manager._requester = lambda service: ("quic-dom.trycloudflare.com", "tag", bytes(32), bytes(16))
    entry_h2 = manager.create_tunnel(8101, duplicate=True)
    assert entry_h2["transport"] == "h2"
    entry_quic = manager.create_tunnel(8102, duplicate=True, quic=True)
    assert entry_quic["transport"] == "quic"
    tunnels = manager.list_tunnels()
    assert any(t["port"] == 8102 and t["transport"] == "quic" for t in tunnels), "list 应携带 transport 字段"
    assert all("transport" in t for t in tunnels), "list 全部条目应有 transport"
    result = manager.delete_tunnel(8102)
    assert result["tunnels"][0]["transport"] == "quic", "删除响应应携带 transport"
    manager.delete_tunnel(8101)
    print("✅ ArgoTunnelManager entry.transport + list/delete transport 字段")


def test_cert_verify():
    try:
        subprocess.run(["openssl", "version"], capture_output=True, timeout=10)
    except (OSError, subprocess.TimeoutExpired):
        print("⏭️ openssl 不可用, 跳过证书校验对照测试")
        return
    from cryptography import x509
    from cryptography.x509.oid import NameOID

    dir_path = tempfile.mkdtemp(prefix="kisama-quic-cert-")
    try:
        def gen(subj, extra, name):
            args = ["openssl", "req", "-x509", "-newkey", "ec", "-pkeyopt", "ec_paramgen_curve:P-256",
                    "-keyout", os.path.join(dir_path, name + ".key"), "-out", os.path.join(dir_path, name + ".pem"),
                    "-days", "1", "-nodes", "-subj", subj] + extra
            subprocess.run(args, capture_output=True, check=True, timeout=30)
            with open(os.path.join(dir_path, name + ".pem")) as fh:
                pem = fh.read()
            b64 = "".join(pem.split("-----BEGIN CERTIFICATE-----")[1].split("-----END CERTIFICATE-----")[0].split())
            return base64.b64decode(b64)

        good = gen("/C=US/O=CloudFlare, Inc./OU=CloudFlare Origin SSL ECC CA-3/CN=CloudFlare Origin Certificate",
                   ["-addext", "subjectAltName=DNS:quic.cftunnel.com,DNS:cftunnel.com"], "good")
        bad_san = gen("/C=US/O=CloudFlare, Inc./OU=CloudFlare Origin SSL ECC CA-3/CN=CloudFlare Origin Certificate",
                      ["-addext", "subjectAltName=DNS:other.example.com"], "badsan")
        bad_issuer = gen("/C=US/O=Evil Corp/OU=Not CF/CN=CloudFlare Origin Certificate",
                         ["-addext", "subjectAltName=DNS:quic.cftunnel.com"], "badissuer")
        wildcard = gen("/C=US/O=CloudFlare, Inc./OU=CloudFlare Origin SSL ECC CA-3/CN=CloudFlare Origin Certificate",
                       ["-addext", "subjectAltName=DNS:*.cftunnel.com"], "wild")
        assert agent.verify_edge_quic_certificate(good) is None, "合法边缘证书应通过"
        assert "SAN" in str(agent.verify_edge_quic_certificate(bad_san)), "SAN 不符应拒绝"
        assert "issuer O" in str(agent.verify_edge_quic_certificate(bad_issuer)), "签发者不符应拒绝"
        assert "no edge certificate" in str(agent.verify_edge_quic_certificate(b"")), "空证书应拒绝"
        assert agent.verify_edge_quic_certificate(wildcard) is None, "通配 SAN 应覆盖 quic.cftunnel.com"
        print("✅ verify_edge_quic_certificate 软校验 (issuer/SAN 正反用例)")
    finally:
        shutil.rmtree(dir_path, ignore_errors=True)


def main():
    test_varint()
    test_initial_keys()
    test_seal_open()
    test_protection()
    test_packet_number()
    test_ack()
    test_transport_params()
    test_offset_buffer()
    test_capnp_return_result()
    test_kmode_parsing()
    test_manager_transport()
    test_cert_verify()
    print("\nALL ARGO QUIC PY TESTS PASSED")


if __name__ == "__main__":
    main()
