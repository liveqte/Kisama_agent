#!/usr/bin/env python3
# 依赖: pip install cryptography noiseprotocol
import os
import base64
from cryptography.hazmat.primitives.asymmetric import x25519
from cryptography.hazmat.primitives import serialization

def generate_noise_keypair(role_name):
    """生成标准 X25519 密钥对 (32 bytes Raw 格式，专供 Noise 使用)"""
    
    # 1. 生成 X25519 密钥对象
    priv_key = x25519.X25519PrivateKey.generate()
    pub_key = priv_key.public_key()
    
    # 2. 导出纯粹的 32 字节 Raw 数据 (这是 Noise 唯一认的格式，不需要 PEM 包装)
    priv_bytes = priv_key.private_bytes(
        encoding=serialization.Encoding.Raw,
        format=serialization.PrivateFormat.Raw,
        encryption_algorithm=serialization.NoEncryption()
    )
    pub_bytes = pub_key.public_bytes(
        encoding=serialization.Encoding.Raw,
        format=serialization.PublicFormat.Raw
    )
    
    # 3. 转为 Base64 字符串以便保存和传输
    priv_b64 = base64.b64encode(priv_bytes).decode('utf-8')
    pub_b64 = base64.b64encode(pub_bytes).decode('utf-8')
    
    print(f"\n🔐 [{role_name}] 密钥对已生成 (X25519):")
    print(f"私钥 (Private): {priv_b64}")
    print(f"公钥 (Public):  {pub_b64}")
    
    return priv_b64, pub_b64

def main():
    print("╔════════════════════════════════╗")
    print("║   🛡️ Noise X25519 密钥生成工具  ║")
    print("╚════════════════════════════════╝\n")
    
    # 生成两端密钥
    ctrl_priv, ctrl_pub = generate_noise_keypair("控制端 (Wanju/Web)")
    agent_priv, agent_pub = generate_noise_keypair("代理端 (Node)")
    
    # 保存文件
    os.makedirs("noise_keys", exist_ok=True)
    with open("noise_keys/control_private.key", "w") as f: f.write(ctrl_priv)
    with open("noise_keys/control_public.key", "w") as f: f.write(ctrl_pub)
    with open("noise_keys/agent_private.key", "w") as f: f.write(agent_priv)
    with open("noise_keys/agent_public.key", "w") as f: f.write(agent_pub)
    
    print(f"\n💾 密钥已保存到 ./noise_keys/ 目录")
    print(f"⚠️  在 XX 模式下：")
    print(f"   - 代理端需要配置自己的私钥，以及控制端的公钥。")
    print(f"   - 控制端需要配置自己的私钥，以及代理端的公钥。")

if __name__ == "__main__":
    main()