#!/usr/bin/env python3
"""
密钥生成工具
✅ ECDSA: P-256 (签名验证)
✅ ECIES: secp256k1 (响应加密, 兼容 eciespy)
"""

import os
import base64
import subprocess
from ecdsa import SigningKey, NIST256p
import coincurve  # eciespy 底层依赖，必装


def _convert_private_key_to_pkcs8(raw_pem: str) -> str:
    """将 EC 私钥 PEM 转换为 PKCS#8 PEM 格式。"""
    try:
        completed = subprocess.run(
            [
                "openssl", "pkcs8", "-topk8", "-nocrypt",
                "-inform", "PEM", "-outform", "PEM"
            ],
            input=raw_pem.encode("utf-8"),
            capture_output=True,
            check=True
        )
        return completed.stdout.decode("utf-8")
    except FileNotFoundError:
        raise RuntimeError("OpenSSL 未安装，无法生成 PKCS#8 私钥")
    except subprocess.CalledProcessError as e:
        raise RuntimeError(f"PKCS#8 转换失败: {e.stderr.decode('utf-8', errors='replace')}")


def generate_ecdsa_keys():
    """生成 ECDSA 密钥对 (签名用)"""
    print("🔑 生成 ECDSA 密钥对 (P-256/NIST256p)...")
    sk = SigningKey.generate(curve=NIST256p)
    vk = sk.get_verifying_key()
    
    raw_sk_pem = sk.to_pem().decode()
    try:
        sk_pem = _convert_private_key_to_pkcs8(raw_sk_pem)
    except Exception as e:
        print(f"⚠️  PKCS#8 转换失败，回退到默认 PEM 格式: {e}")
        sk_pem = raw_sk_pem
    
    vk_pem = vk.to_pem().decode()
    
    print(f"\n✅ 控制端私钥 (敏感! 保存为 control_ecdsa.pem):\n{sk_pem}")
    print(f"\n✅ 代理端公钥 (配置到 ECDSA_PUBKEY):\n{vk_pem}")
    return sk_pem, vk_pem

def generate_ecies_keys():
    """生成 ECIES 密钥对 (加密用, secp256k1)"""
    print("\n🔐 生成 ECIES 密钥对 (secp256k1)...")
    
    # 使用 coincurve 直接生成 (eciespy 原生支持)
    private_key = coincurve.PrivateKey()
    public_key_bytes = private_key.public_key.format(compressed=True)  # 33字节压缩格式
    
    control_private_hex = private_key.to_hex()
    agent_public_b64 = base64.b64encode(public_key_bytes).decode('utf-8')
    
    print(f"\n✅ 控制端私钥 (Hex格式, 保存为 control_ecies.hex):\n{control_private_hex}")
    print(f"\n✅ 代理端公钥 (Base64格式, 配置到 ECIES_PUBKEY):\n{agent_public_b64}")
    print("💡 提示: eciespy 直接使用 33字节压缩公钥, 无需 PEM 包装")
    return control_private_hex, agent_public_b64

def main():
    print("╔════════════════════════════════╗")
    print("║  🔐 Proxy Agent 密钥生成工具  ║")
    print("╚════════════════════════════════╝\n")
    
    ecdsa_sk, ecdsa_vk = generate_ecdsa_keys()
    ecies_sk, ecies_vk = generate_ecies_keys()
    
    # 保存文件
    os.makedirs("keys", exist_ok=True)
    with open("keys/control_ecdsa.pem", "w") as f: f.write(ecdsa_sk)
    with open("keys/agent_ecdsa_pub.pem", "w") as f: f.write(ecdsa_vk)
    with open("keys/control_ecies.hex", "w") as f: f.write(ecies_sk)
    with open("keys/agent_ecies_pub.b64", "w") as f: f.write(ecies_vk)
    
    print(f"\n💾 密钥已保存到 ./keys/ 目录")
    print(f"⚠️  代理端只需配置: agent_ecdsa_pub.pem + agent_ecies_pub.b64")
    print(f"⚠️  控制端私钥严禁泄露!")

if __name__ == "__main__":
    main()