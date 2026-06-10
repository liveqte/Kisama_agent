#!/usr/bin/env python3
import base64
from ecdsa import VerifyingKey

pem_path = "/workspaces/Kisama_agent/py/keys/agent_ecdsa_pub.pem"

with open(pem_path, "r", encoding="utf-8") as f:
    pem = f.read()

vk = VerifyingKey.from_pem(pem)

point = vk.pubkey.point
x = int(point.x()).to_bytes(32, "big")
y = int(point.y())

prefix = b"\x02" if y % 2 == 0 else b"\x03"
compressed = prefix + x

print("compressed raw len:", len(compressed))
print("compressed hex:", compressed.hex())
print("compressed b64:", base64.b64encode(compressed).decode())