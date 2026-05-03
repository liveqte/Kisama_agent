#!/usr/bin/env python3
# 依赖: pip install cryptography noiseprotocol
import os
import base64
import json
from dataclasses import dataclass, asdict
from cryptography.hazmat.primitives.asymmetric import x25519
from cryptography.hazmat.primitives import serialization
from typing import Tuple, Optional, Dict


@dataclass
class NoiseKeypair:
    """Noise 协议密钥对数据类"""
    role: str
    private_b64: str
    public_b64: str
    
    def to_dict(self) -> Dict[str, str]:
        return asdict(self)
    
    @property
    def private_bytes(self) -> bytes:
        """解码获取 32 字节原始私钥"""
        return base64.b64decode(self.private_b64)
    
    @property
    def public_bytes(self) -> bytes:
        """解码获取 32 字节原始公钥"""
        return base64.b64decode(self.public_b64)

class NoiseKeyGenerator:
    """
    Noise Protocol X25519 密钥对生成器
    
    生成符合 noise-c / noiseprotocol 标准的 32 字节 Raw 格式密钥
    """
    
    # 常量配置
    KEY_SIZE = 32  # X25519 固定 32 字节
    ENCODING = serialization.Encoding.Raw
    PRIVATE_FORMAT = serialization.PrivateFormat.Raw
    PUBLIC_FORMAT = serialization.PublicFormat.Raw
    
    @staticmethod
    def _generate_raw_keypair() -> Tuple[bytes, bytes]:
        """内部方法：生成原始字节格式的 X25519 密钥对"""
        priv_key = x25519.X25519PrivateKey.generate()
        pub_key = priv_key.public_key()
        
        priv_bytes = priv_key.private_bytes(
            encoding=NoiseKeyGenerator.ENCODING,
            format=NoiseKeyGenerator.PRIVATE_FORMAT,
            encryption_algorithm=serialization.NoEncryption()
        )
        pub_bytes = pub_key.public_bytes(
            encoding=NoiseKeyGenerator.ENCODING,
            format=NoiseKeyGenerator.PUBLIC_FORMAT
        )
        
        assert len(priv_bytes) == NoiseKeyGenerator.KEY_SIZE
        assert len(pub_bytes) == NoiseKeyGenerator.KEY_SIZE
        
        return priv_bytes, pub_bytes
    
    @classmethod
    def generate_single(cls, role_name: str) -> NoiseKeypair:
        """
        生成单个角色的密钥对
        
        Args:
            role_name: 角色标识，如 "Controller", "Agent"
            
        Returns:
            NoiseKeypair 数据类实例
        """
        priv_bytes, pub_bytes = cls._generate_raw_keypair()
        
        return NoiseKeypair(
            role=role_name,
            private_b64=base64.b64encode(priv_bytes).decode('utf-8'),
            public_b64=base64.b64encode(pub_bytes).decode('utf-8')
        )
    
    @classmethod
    def generate_pair(cls, 
                      control_role: str = "Controller",
                      agent_role: str = "Agent"
                     ) -> Dict[str, NoiseKeypair]:
        """
        🔥 核心方法：一次性生成通信双方的密钥对
        
        Args:
            control_role: 发起方角色名（默认: Controller/控制端）
            agent_role: 响应方角色名（默认: Agent/代理端）
            
        Returns:
            dict: {
                'control': NoiseKeypair,  # 发起方密钥
                'agent': NoiseKeypair,  # 响应方密钥
            }
        """
        return {
            'control': cls.generate_single(control_role),
            'agent': cls.generate_single(agent_role)
        }
    
    @staticmethod
    def save_to_files(keypairs: Dict[str, NoiseKeypair], 
                      output_dir: str = "noise_keys",
                      format: str = "txt") -> str:
        """
        将密钥对保存到文件
        
        Args:
            keypairs: generate_pair() 的返回值
            output_dir: 输出目录
            format: 文件格式 "txt" 或 "json"
            
        Returns:
            str: 实际输出目录路径
        """
        os.makedirs(output_dir, exist_ok=True)
        
        if format == "json":
            # JSON 格式：单文件，便于程序读取
            data = {
                role: kp.to_dict() for role, kp in keypairs.items()
            }
            output_path = os.path.join(output_dir, "noise_keys.json")
            with open(output_path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            print(f"📄 JSON 密钥已保存: {output_path}")
            
        else:
            # TXT 格式：多文件，便于人工查看
            for role, kp in keypairs.items():
                prefix = role.lower()
                with open(os.path.join(output_dir, f"{prefix}_private.key"), "w") as f:
                    f.write(kp.private_b64)
                with open(os.path.join(output_dir, f"{prefix}_public.key"), "w") as f:
                    f.write(kp.public_b64)
                print(f"🔑 [{kp.role}] 密钥已保存至 {output_dir}/{prefix}_*.key")
        
        return output_dir
    
    @staticmethod
    def print_summary(keypairs: Dict[str, NoiseKeypair], show_keys: bool = False):
        """打印密钥摘要信息"""
        print("\n" + "═" * 50)
        print("🛡️  Noise 密钥对生成完成")
        print("═" * 50)
        
        for role, kp in keypairs.items():
            role_display = "发起方 (control)" if role == "control" else "响应方 (agent)"
            print(f"\n📋 {role_display} - {kp.role}:")
            print(f"   公钥指纹: {kp.public_b64[:16]}...{kp.public_b64[-8:]}")
            if show_keys:
                print(f"   🔐 Private: {kp.private_b64}")
                print(f"   🔓 Public:  {kp.public_b64}")
        
        print("⚠️  XX 模式配置指南:")
        print("   • 发起方: 配置自己的私钥 + 响应方的公钥（可选，用于验证对方身份）")
        print("   • 响应方: 配置自己的私钥 + 发起方的公钥（可选，用于验证对方身份）")
        print("═" * 50 + "\n")


# ============ 使用示例 ============
def main():
    print("╔════════════════════════════════╗")
    print("║   🛡️ Noise X25519 密钥生成工具  ║")
    print("╚════════════════════════════════╝\n")
    
    # 2️⃣ 一键生成双方密钥对
    keypairs = NoiseKeyGenerator.generate_pair(
        control_role="Controller",  # 控制端/前端
        agent_role="Agent"        # 代理端/后端
    )
    
    # 3️⃣ 打印摘要
    NoiseKeyGenerator.print_summary(keypairs, show_keys=False)
    
    # 4️⃣ 保存到文件（支持 txt 或 json）
    NoiseKeyGenerator.save_to_files(keypairs, output_dir="noise_keys", format="txt")
    # generator.save_to_files(keypairs, output_dir="noise_keys", format="json")  # 备选
    
    # 5️⃣ （可选）直接获取密钥字节用于程序内使用
    # ctrl_priv_bytes = base64.b64decode(keypairs['control'].private_b64)
    # agent_pub_bytes = base64.b64decode(keypairs['agent'].public_b64)


def quick_generate():
    """🚀 一行代码快速生成（适合脚本调用）"""
    keys = NoiseKeyGenerator.generate_pair()
    return {
        'controller': {
            'private': keys['control'].private_b64,
            'public': keys['control'].public_b64
        },
        'agent': {
            'private': keys['agent'].private_b64,
            'public': keys['agent'].public_b64
        }
    }


if __name__ == "__main__":
    import sys
    
    # 支持命令行参数
    if len(sys.argv) > 1 and sys.argv[1] == "--quick":
        # 快速模式：只输出 JSON 到 stdout
        import json
        result = quick_generate()
        print(json.dumps(result, indent=2))
    else:
        # 交互模式
        main()