#!/usr/bin/env python3
import argparse
import base64
import binascii
import functools
import http.client
import http.server
import json
import logging
import os
import queue
import secrets
import socket
import ssl
import struct
import sys
import threading
import time
import urllib.error
import urllib.request
import uuid
from collections import deque
from urllib.parse import urlsplit
from http import HTTPStatus

QUICK_SERVICE = "https://api.trycloudflare.com"
EDGE_HOSTS = ("region1.v2.argotunnel.com", "region2.v2.argotunnel.com")
EDGE_PORT = 7844
CONTROL_HEADER = "cf-cloudflared-proxy-connection-upgrade"
CONTROL_STREAM = "control-stream"
UPDATE_CONFIGURATION = "update-configuration"
MAX_FRAME_SIZE = 16384

STATIC_TABLE = (
    (":authority", ""), (":method", "GET"), (":method", "POST"),
    (":path", "/"), (":path", "/index.html"), (":scheme", "http"),
    (":scheme", "https"), (":status", "200"), (":status", "204"),
    (":status", "206"), (":status", "304"), (":status", "400"),
    (":status", "404"), (":status", "500"), ("accept-charset", ""),
    ("accept-encoding", "gzip, deflate"), ("accept-language", ""),
    ("accept-ranges", ""), ("accept", ""), ("access-control-allow-origin", ""),
    ("age", ""), ("allow", ""), ("authorization", ""), ("cache-control", ""),
    ("content-disposition", ""), ("content-encoding", ""),
    ("content-language", ""), ("content-length", ""), ("content-location", ""),
    ("content-range", ""), ("content-type", ""), ("cookie", ""),
    ("date", ""), ("etag", ""), ("expect", ""), ("expires", ""),
    ("from", ""), ("host", ""), ("if-match", ""), ("if-modified-since", ""),
    ("if-none-match", ""), ("if-range", ""), ("if-unmodified-since", ""),
    ("last-modified", ""), ("link", ""), ("location", ""), ("max-forwards", ""),
    ("proxy-authenticate", ""), ("proxy-authorization", ""), ("range", ""),
    ("referer", ""), ("refresh", ""), ("retry-after", ""), ("server", ""),
    ("set-cookie", ""), ("strict-transport-security", ""), ("transfer-encoding", ""),
    ("user-agent", ""), ("vary", ""), ("via", ""), ("www-authenticate", ""),
)

HUFFMAN_CODES = (8184, 8388568, 268435426, 268435427, 268435428, 268435429, 268435430, 268435431, 268435432, 16777194, 1073741820, 268435433, 268435434, 1073741821, 268435435, 268435436, 268435437, 268435438, 268435439, 268435440, 268435441, 268435442, 1073741822, 268435443, 268435444, 268435445, 268435446, 268435447, 268435448, 268435449, 268435450, 268435451, 20, 1016, 1017, 4090, 8185, 21, 248, 2042, 1018, 1019, 249, 2043, 250, 22, 23, 24, 0, 1, 2, 25, 26, 27, 28, 29, 30, 31, 92, 251, 32764, 32, 4091, 1020, 8186, 33, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 252, 115, 253, 8187, 524272, 8188, 16380, 34, 32765, 3, 35, 4, 36, 5, 37, 38, 39, 6, 116, 117, 40, 41, 42, 7, 43, 118, 44, 8, 9, 45, 119, 120, 121, 122, 123, 32766, 2044, 16381, 8189, 268435452, 1048550, 4194258, 1048551, 1048552, 4194259, 4194260, 4194261, 8388569, 4194262, 8388570, 8388571, 8388572, 8388573, 8388574, 16777195, 8388575, 16777196, 16777197, 4194263, 8388576, 16777198, 8388577, 8388578, 8388579, 8388580, 2097116, 4194264, 8388581, 4194265, 8388582, 8388583, 16777199, 4194266, 2097117, 1048553, 4194267, 4194268, 8388584, 8388585, 2097118, 8388586, 4194269, 4194270, 16777200, 2097119, 4194271, 8388587, 8388588, 2097120, 2097121, 4194272, 2097122, 8388589, 4194273, 8388590, 8388591, 1048554, 4194274, 4194275, 4194276, 8388592, 4194277, 4194278, 8388593, 67108832, 67108833, 1048555, 524273, 4194279, 8388594, 4194280, 33554412, 67108834, 67108835, 67108836, 134217694, 134217695, 67108837, 16777201, 33554413, 524274, 2097123, 67108838, 134217696, 134217697, 67108839, 134217698, 16777202, 2097124, 2097125, 67108840, 67108841, 268435453, 134217699, 134217700, 134217701, 1048556, 16777203, 1048557, 2097126, 4194281, 2097127, 2097128, 8388595, 4194282, 4194283, 33554414, 33554415, 16777204, 16777205, 67108842, 8388596, 67108843, 134217702, 67108844, 67108845, 134217703, 134217704, 134217705, 134217706, 134217707, 268435454, 134217708, 134217709, 134217710, 134217711, 134217712, 67108846, 1073741823)
HUFFMAN_LENGTHS = (13, 23, 28, 28, 28, 28, 28, 28, 28, 24, 30, 28, 28, 30, 28, 28, 28, 28, 28, 28, 28, 28, 30, 28, 28, 28, 28, 28, 28, 28, 28, 28, 6, 10, 10, 12, 13, 6, 8, 11, 10, 10, 8, 11, 8, 6, 6, 6, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 8, 15, 6, 12, 10, 13, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 8, 13, 19, 13, 14, 6, 15, 5, 6, 5, 6, 5, 6, 6, 6, 5, 7, 7, 6, 6, 6, 5, 6, 7, 6, 5, 5, 6, 7, 7, 7, 7, 7, 15, 11, 14, 13, 28, 20, 22, 20, 20, 22, 22, 22, 23, 22, 23, 23, 23, 23, 23, 24, 23, 24, 24, 22, 23, 24, 23, 23, 23, 23, 21, 22, 23, 22, 23, 23, 24, 22, 21, 20, 22, 22, 23, 23, 21, 23, 22, 22, 24, 21, 22, 23, 23, 21, 21, 22, 21, 23, 22, 23, 23, 20, 22, 22, 22, 23, 22, 22, 23, 26, 26, 20, 19, 22, 23, 22, 25, 26, 26, 26, 27, 27, 26, 24, 25, 19, 21, 26, 27, 27, 26, 27, 24, 21, 21, 26, 26, 28, 27, 27, 27, 20, 24, 20, 21, 22, 21, 21, 23, 22, 22, 25, 25, 24, 24, 26, 23, 26, 27, 26, 26, 27, 27, 27, 27, 27, 28, 27, 27, 27, 27, 27, 26, 30)


def huffman_tree():
    root = [None, None, -1, 0]
    for symbol, (code, length) in enumerate(zip(HUFFMAN_CODES, HUFFMAN_LENGTHS)):
        node = root
        for shift in range(length - 1, -1, -1):
            bit = (code >> shift) & 1
            if node[bit] is None:
                node[bit] = [None, None, -1, node[3] + 1]
            node = node[bit]
        node[2] = symbol
    return root

HUFFMAN_TREE = huffman_tree()


def decode_huffman(data):
    out = bytearray()
    node = HUFFMAN_TREE
    pending_bits = 0
    pending_length = 0
    for byte in data:
        for shift in range(7, -1, -1):
            bit = (byte >> shift) & 1
            pending_bits = (pending_bits << 1) | bit
            pending_length += 1
            node = node[bit]
            if node is None:
                raise ValueError("invalid HPACK Huffman string")
            if node[2] >= 0:
                if node[2] == 256:
                    raise ValueError("HPACK Huffman EOS inside string")
                out.append(node[2])
                node = HUFFMAN_TREE
                pending_bits = 0
                pending_length = 0
    if pending_length > 7 or pending_bits != (1 << pending_length) - 1:
        raise ValueError("invalid HPACK Huffman padding")
    return bytes(out)


def read_integer(data, pos, prefix_bits):
    if pos >= len(data):
        raise ValueError("truncated HPACK integer")
    first = data[pos]
    pos += 1
    mask = (1 << prefix_bits) - 1
    value = first & mask
    if value < mask:
        return value, pos
    shift = 0
    while True:
        if pos >= len(data):
            raise ValueError("truncated HPACK integer")
        byte = data[pos]
        pos += 1
        value += (byte & 127) << shift
        if byte & 128 == 0:
            return value, pos
        shift += 7
        if shift > 28:
            raise ValueError("HPACK integer too large")


def read_string(data, pos):
    if pos >= len(data):
        raise ValueError("truncated HPACK string")
    huffman = bool(data[pos] & 128)
    length, pos = read_integer(data, pos, 7)
    end = pos + length
    if end > len(data):
        raise ValueError("truncated HPACK string data")
    value = data[pos:end]
    return (decode_huffman(value) if huffman else value), end


class HpackDecoder:
    def __init__(self):
        self.dynamic = deque()
        self.dynamic_size = 0
        self.max_size = 4096

    def table_entry(self, index):
        if index <= 0:
            raise ValueError("invalid HPACK index")
        if index <= len(STATIC_TABLE):
            return STATIC_TABLE[index - 1]
        dynamic_index = index - len(STATIC_TABLE) - 1
        if dynamic_index < 0 or dynamic_index >= len(self.dynamic):
            raise ValueError("HPACK dynamic index out of range")
        return self.dynamic[dynamic_index]

    def add(self, name, value):
        size = 32 + len(name) + len(value)
        if size > self.max_size:
            self.dynamic.clear()
            self.dynamic_size = 0
            return
        while self.dynamic and self.dynamic_size + size > self.max_size:
            old_name, old_value = self.dynamic.pop()
            self.dynamic_size -= 32 + len(old_name) + len(old_value)
        self.dynamic.appendleft((name, value))
        self.dynamic_size += size

    def decode(self, data):
        result = []
        pos = 0
        while pos < len(data):
            first = data[pos]
            if first & 128:
                index, pos = read_integer(data, pos, 7)
                result.append(self.table_entry(index))
                continue
            if first & 64:
                index, pos = read_integer(data, pos, 6)
                if index:
                    name = self.table_entry(index)[0]
                else:
                    name_bytes, pos = read_string(data, pos)
                    name = name_bytes.decode("utf-8", "replace").lower()
                value_bytes, pos = read_string(data, pos)
                value = value_bytes.decode("utf-8", "replace")
                self.add(name, value)
                result.append((name, value))
                continue
            if first & 32:
                size, pos = read_integer(data, pos, 5)
                if size > 4096:
                    raise ValueError("HPACK table size exceeds limit")
                self.max_size = size
                while self.dynamic and self.dynamic_size > size:
                    old_name, old_value = self.dynamic.pop()
                    self.dynamic_size -= 32 + len(old_name) + len(old_value)
                continue
            index, pos = read_integer(data, pos, 4)
            if index:
                name = self.table_entry(index)[0]
            else:
                name_bytes, pos = read_string(data, pos)
                name = name_bytes.decode("utf-8", "replace").lower()
            value_bytes, pos = read_string(data, pos)
            result.append((name, value_bytes.decode("utf-8", "replace")))
        return result


def encode_integer(value, prefix_bits, prefix):
    limit = (1 << prefix_bits) - 1
    if value < limit:
        return bytes((prefix | value,))
    out = bytearray((prefix | limit,))
    value -= limit
    while value >= 128:
        out.append((value & 127) | 128)
        value >>= 7
    out.append(value)
    return bytes(out)


def encode_string(value):
    raw = value.encode("utf-8") if isinstance(value, str) else value
    return encode_integer(len(raw), 7, 0) + raw


def encode_headers(headers):
    out = bytearray()
    for name, value in headers:
        if name == ":status" and value == "200":
            out.append(0x88)
        elif name == ":status" and value == "204":
            out.append(0x89)
        elif name == ":status" and value == "206":
            out.append(0x8A)
        elif name == ":status" and value == "304":
            out.append(0x8B)
        elif name == ":status" and value == "400":
            out.append(0x8C)
        elif name == ":status" and value == "404":
            out.append(0x8D)
        elif name == ":status" and value == "500":
            out.append(0x8E)
        else:
            out.extend(encode_integer(0, 4, 0))
            out.extend(encode_string(name))
            out.extend(encode_string(value))
    return bytes(out)


class CapnpBuilder:
    def __init__(self):
        self.words = []

    def alloc(self, count):
        offset = len(self.words)
        self.words.extend([0] * count)
        return offset

    def struct_ptr(self, ptr_word, target_word, data_words, pointer_words):
        offset = target_word - ptr_word - 1
        low = ((offset << 2) & 0xFFFFFFFC)
        high = (data_words & 0xFFFF) | ((pointer_words & 0xFFFF) << 16)
        self.words[ptr_word] = low | (high << 32)

    def set_u8(self, word, byte, value):
        mask = 0xFF << (byte * 8)
        self.words[word] = (self.words[word] & ~mask) | ((value & 0xFF) << (byte * 8))

    def set_u16(self, word, byte, value):
        mask = 0xFFFF << (byte * 8)
        self.words[word] = (self.words[word] & ~mask) | ((value & 0xFFFF) << (byte * 8))

    def set_u32(self, word, byte, value):
        mask = 0xFFFFFFFF << (byte * 8)
        self.words[word] = (self.words[word] & ~mask) | ((value & 0xFFFFFFFF) << (byte * 8))

    def set_u64(self, word, value):
        self.words[word] = value & 0xFFFFFFFFFFFFFFFF

    def write_bytes(self, ptr_word, value, text=False):
        raw = value.encode() if isinstance(value, str) else bytes(value)
        count = len(raw) + 1 if text else len(raw)
        content = self.alloc((count + 7) // 8)
        for i, byte in enumerate(raw):
            self.set_u8(content + i // 8, i % 8, byte)
        offset = content - ptr_word - 1
        low = ((offset << 2) | 1) & 0xFFFFFFFF
        high = 2 | ((count & 0x1FFFFFFF) << 3)
        self.words[ptr_word] = low | (high << 32)

    def write_text_list(self, ptr_word, values):
        if not values:
            self.words[ptr_word] = 0
            return
        items = self.alloc(len(values))
        offset = items - ptr_word - 1
        self.words[ptr_word] = (((offset << 2) | 1) & 0xFFFFFFFF) | ((6 | (len(values) << 3)) << 32)
        for i, value in enumerate(values):
            self.write_bytes(items + i, value, True)

    def finish(self):
        return struct.pack("<II", 0, len(self.words)) + b"".join(struct.pack("<Q", word) for word in self.words)


def capnp_bootstrap(question_id):
    msg = CapnpBuilder()
    root, msg_data, msg_ptr = msg.alloc(1), msg.alloc(1), msg.alloc(1)
    msg.struct_ptr(root, msg_data, 1, 1)
    msg.set_u16(msg_data, 0, 8)
    bootstrap_data = msg.alloc(1)
    msg.alloc(1)
    msg.struct_ptr(msg_ptr, bootstrap_data, 1, 1)
    msg.set_u32(bootstrap_data, 0, question_id)
    return msg.finish()


def capnp_register(question_id, bootstrap_question_id, account_tag, tunnel_secret, tunnel_id, conn_index):
    msg = CapnpBuilder()
    root, msg_data, msg_ptr = msg.alloc(1), msg.alloc(1), msg.alloc(1)
    msg.struct_ptr(root, msg_data, 1, 1)
    msg.set_u16(msg_data, 0, 2)
    call_data0, call_data1, _ = msg.alloc(1), msg.alloc(1), msg.alloc(1)
    call_ptr0, call_ptr1, _ = msg.alloc(1), msg.alloc(1), msg.alloc(1)
    msg.struct_ptr(msg_ptr, call_data0, 3, 3)
    msg.set_u32(call_data0, 0, question_id)
    msg.set_u64(call_data1, 0xF71695EC7FE85497)
    mt_data, mt_ptr = msg.alloc(1), msg.alloc(1)
    msg.struct_ptr(call_ptr0, mt_data, 1, 1)
    msg.set_u16(mt_data, 4, 1)
    pa_data = msg.alloc(1)
    msg.alloc(1)
    msg.struct_ptr(mt_ptr, pa_data, 1, 1)
    msg.set_u32(pa_data, 0, bootstrap_question_id)
    payload_ptr0, _ = msg.alloc(1), msg.alloc(1)
    msg.struct_ptr(call_ptr1, payload_ptr0, 0, 2)
    params_data, params_ptr0, params_ptr1, params_ptr2 = msg.alloc(1), msg.alloc(1), msg.alloc(1), msg.alloc(1)
    msg.struct_ptr(payload_ptr0, params_data, 1, 3)
    msg.set_u8(params_data, 0, conn_index)
    auth_ptr0, auth_ptr1 = msg.alloc(1), msg.alloc(1)
    msg.struct_ptr(params_ptr0, auth_ptr0, 0, 2)
    msg.write_bytes(auth_ptr0, account_tag, True)
    msg.write_bytes(auth_ptr1, tunnel_secret)
    msg.write_bytes(params_ptr1, tunnel_id)
    opt_data, opt_ptr0, _ = msg.alloc(1), msg.alloc(1), msg.alloc(1)
    msg.struct_ptr(params_ptr2, opt_data, 1, 2)
    client_ptr0, client_ptr1, client_ptr2, client_ptr3 = msg.alloc(1), msg.alloc(1), msg.alloc(1), msg.alloc(1)
    msg.struct_ptr(opt_ptr0, client_ptr0, 0, 4)
    msg.write_bytes(client_ptr0, uuid.uuid4().bytes)
    msg.write_text_list(client_ptr1, ["serialized_headers", "allow_remote_config"])
    msg.write_bytes(client_ptr2, "2024.10.0-Nexus", True)
    msg.write_bytes(client_ptr3, "Nexus-Python", True)
    return msg.finish()


def capnp_messages(buffer):
    messages = []
    pos = 0
    while len(buffer) - pos >= 8:
        segments_minus_one, first_words = struct.unpack_from("<II", buffer, pos)
        segments = segments_minus_one + 1
        header_words = 2 + segments
        header_size = header_words * 4
        if header_size % 8:
            header_size += 4
        if len(buffer) - pos < header_size:
            break
        counts = [first_words]
        for index in range(1, segments):
            counts.append(struct.unpack_from("<I", buffer, pos + 4 + index * 4)[0])
        total = header_size + sum(counts) * 8
        if len(buffer) - pos < total:
            break
        if segments != 1:
            raise ValueError("multi-segment Cap'n Proto message is not supported")
        messages.append(buffer[pos + header_size:pos + total])
        pos += total
    return messages, buffer[pos:]


def capnp_struct(words, pointer_word):
    pointer = words[pointer_word]
    if pointer & 3 != 0:
        raise ValueError("expected Cap'n Proto struct pointer")
    offset = (pointer >> 2) & 0x3FFFFFFF
    if offset & 0x20000000:
        offset -= 0x40000000
    target = pointer_word + 1 + offset
    data_words = (pointer >> 32) & 0xFFFF
    pointer_words = (pointer >> 48) & 0xFFFF
    if target < 0 or target + data_words + pointer_words > len(words):
        raise ValueError("Cap'n Proto pointer out of bounds")
    return target, data_words, pointer_words


def capnp_text(words, pointer_word):
    pointer = words[pointer_word]
    if pointer & 3 != 1:
        return ""
    offset = (pointer >> 2) & 0x3FFFFFFF
    if offset & 0x20000000:
        offset -= 0x40000000
    target = pointer_word + 1 + offset
    element_size = (pointer >> 32) & 7
    count = pointer >> 35
    if element_size != 2 or target < 0 or target + (count + 7) // 8 > len(words):
        return ""
    raw = b"".join(struct.pack("<Q", word) for word in words[target:target + (count + 7) // 8])[:count]
    return raw.rstrip(b"\0").decode("utf-8", "replace")


def capnp_return_result(data):
    if len(data) % 8 or len(data) < 24:
        raise ValueError("short Cap'n Proto return")
    words = list(struct.unpack("<" + "Q" * (len(data) // 8), data))
    msg_target, msg_data, msg_ptrs = capnp_struct(words, 0)
    if msg_data < 1 or words[msg_target] & 0xFFFF != 3:
        raise ValueError("not an RPC return message")
    ret_target, ret_data, ret_ptrs = capnp_struct(words, msg_target + msg_data)
    which = (words[ret_target] >> 48) & 0xFFFF
    if which == 1:
        return {"ok": False, "error": capnp_text(words, ret_target + ret_data)}
    if which != 0:
        return {"ok": False, "error": "RPC return union %d" % which}
    payload_target, payload_data, payload_ptrs = capnp_struct(words, ret_target + ret_data)
    content_target, content_data, content_ptrs = capnp_struct(words, payload_target + payload_data)
    union = words[content_target]
    union_which = union & 0xFFFF
    if union_which == 0:
        return {"ok": False, "error": capnp_text(words, content_target + content_data)}
    if union_which != 1:
        return {"ok": False, "error": "registration union %d" % union_which}
    details_target, details_data, details_ptrs = capnp_struct(words, content_target + content_data)
    location = capnp_text(words, details_target + details_data + 1)
    return {"ok": True, "location": location, "remote_managed": bool(words[details_target] & 1)}


def infer_content_type(path):
    suffix = os.path.splitext(path.rstrip("/"))[1].lower()
    return {
        ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8",
        ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8",
        ".map": "application/json; charset=utf-8", ".wasm": "application/wasm",
        ".html": "text/html; charset=utf-8", ".htm": "text/html; charset=utf-8",
        ".svg": "image/svg+xml", ".xml": "application/xml", ".woff": "font/woff2",
        ".woff2": "font/woff2", ".png": "image/png", ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg", ".gif": "image/gif", ".ico": "image/x-icon",
    }.get(suffix, "")


def b64_secret(value):
    if isinstance(value, list):
        return bytes(value)
    if not isinstance(value, str):
        raise ValueError("quick tunnel secret has an unexpected type")
    return base64.b64decode(value + "=" * (-len(value) % 4))


def request_quick_tunnel(service):
    request = urllib.request.Request(
        service.rstrip("/") + "/tunnel",
        data=b"",
        method="POST",
        headers={"Content-Type": "application/json", "User-Agent": "cftunnel.py/1.0"},
    )
    try:
        with urllib.request.urlopen(request, timeout=15) as response:
            body = response.read()
            status = response.status
    except urllib.error.URLError as exc:
        raise RuntimeError("requesting quick tunnel failed: %s" % exc) from exc
    try:
        data = json.loads(body)
    except json.JSONDecodeError as exc:
        raise RuntimeError("quick tunnel returned non-JSON (%s): %s" % (status, body[:300].decode("utf-8", "replace"))) from exc
    result = data.get("result") or {}
    if not data.get("success", True) or not result:
        raise RuntimeError("quick tunnel request was rejected: %s" % json.dumps(data.get("errors"), ensure_ascii=False))
    try:
        tunnel_id = uuid.UUID(result["id"])
        account_tag = result["account_tag"]
        secret = b64_secret(result["secret"])
        hostname = result["hostname"]
    except (KeyError, ValueError, binascii.Error, TypeError) as exc:
        raise RuntimeError("invalid quick tunnel response: %s" % exc) from exc
    return hostname, account_tag, secret, tunnel_id.bytes


class H2Connection:
    def __init__(self, sock, origin, account_tag, tunnel_secret, tunnel_id, conn_index, logger, tunnel_url=None, show_tunnel=False, tunnel_state=None):
        self.sock = sock
        self.origin = origin
        self.account_tag = account_tag
        self.tunnel_secret = tunnel_secret
        self.tunnel_id = tunnel_id
        self.conn_index = conn_index
        self.log = logger
        self.tunnel_url = tunnel_url
        self.show_tunnel = show_tunnel
        self.tunnel_state = tunnel_state if tunnel_state is not None else {"printed": False}
        self.decoder = HpackDecoder()
        self.encoder_lock = threading.Lock()
        self.window_condition = threading.Condition()
        self.connection_window = 65535
        self.stream_windows = {}
        self.peer_max_frame = MAX_FRAME_SIZE
        self.streams = {}
        self.control = None
        self.stopped = False
        self.registered = False

    def send_frame(self, frame_type, flags, stream_id, payload=b""):
        if len(payload) > 0xFFFFFF:
            raise ValueError("HTTP/2 frame too large")
        header = struct.pack(">I", len(payload))[1:] + bytes((frame_type, flags)) + struct.pack(">I", stream_id & 0x7FFFFFFF)
        with self.encoder_lock:
            self.sock.sendall(header + payload)

    def send_headers(self, stream_id, headers, end_stream=False):
        payload = encode_headers(headers)
        flags = 4 | (1 if end_stream else 0)
        self.send_frame(1, flags, stream_id, payload)

    def send_data(self, stream_id, payload, end_stream=False):
        view = memoryview(payload)
        offset = 0
        while offset < len(view) or (len(view) == 0 and offset == 0):
            with self.window_condition:
                while self.connection_window <= 0 or self.stream_windows.get(stream_id, 65535) <= 0:
                    if self.stopped:
                        return
                    self.window_condition.wait(1)
                amount = min(len(view) - offset, self.connection_window, self.stream_windows.get(stream_id, 65535), self.peer_max_frame)
                if len(view) == 0:
                    amount = 0
                chunk = bytes(view[offset:offset + amount])
                self.connection_window -= amount
                self.stream_windows[stream_id] = self.stream_windows.get(stream_id, 65535) - amount
            flags = 1 if end_stream and offset + amount >= len(view) else 0
            self.send_frame(0, flags, stream_id, chunk)
            offset += amount
            if len(view) == 0:
                break

    def send_window_update(self, stream_id, increment):
        if increment > 0:
            self.send_frame(8, 0, stream_id, struct.pack(">I", increment & 0x7FFFFFFF))

    def read_frame(self):
        header = read_exact(self.sock, 9)
        length = int.from_bytes(header[:3], "big")
        frame_type, flags = header[3], header[4]
        stream_id = struct.unpack(">I", header[5:])[0] & 0x7FFFFFFF
        payload = read_exact(self.sock, length)
        return frame_type, flags, stream_id, payload

    def read_headers(self, flags, stream_id, payload):
        if flags & 8:
            pad_length = payload[0]
            payload = payload[1:]
            if pad_length > len(payload):
                raise ValueError("invalid HTTP/2 padding")
            payload = payload[:-pad_length] if pad_length else payload
        if flags & 32:
            payload = payload[5:]
        blocks = [payload]
        while not flags & 4:
            frame_type, next_flags, next_stream, next_payload = self.read_frame()
            if frame_type != 9 or next_stream != stream_id:
                raise ValueError("expected CONTINUATION frame")
            blocks.append(next_payload)
            flags = next_flags
        return self.decoder.decode(b"".join(blocks))

    def open_control(self, stream_id):
        if self.control is not None:
            return
        self.control = ControlStream(self, stream_id, self.log)
        self.send_headers(stream_id, [(":status", "200")])
        self.control.start(self.account_tag, self.tunnel_secret, self.tunnel_id, self.conn_index)

    def update_config(self, stream_id, body):
        version = 0
        try:
            version = int(json.loads(body or b"{}").get("version", 0))
        except (ValueError, TypeError, json.JSONDecodeError):
            pass
        response = json.dumps({"latestAppliedVersion": version}, separators=(",", ":")).encode()
        self.send_headers(stream_id, [(":status", "200"), ("content-type", "application/json"), ("content-length", str(len(response)))])
        self.send_data(stream_id, response, True)

    def request_finished(self, stream_id, request):
        if request.get("upgrade") == "update-configuration":
            self.update_config(stream_id, bytes(request["body"]))
            return
        if request.get("websocket"):
            return
        if request.get("finished"):
            return
        request["finished"] = True
        threading.Thread(target=self.proxy_request, args=(stream_id, request), daemon=True).start()

    def proxy_request(self, stream_id, request):
        try:
            response = proxy_to_origin(self.origin, request["method"], request["path"], request["headers"], bytes(request["body"]))
            response_headers = response["headers"]
            user_headers = []
            direct_headers = []
            for name, value in response_headers:
                lower = name.lower()
                if lower == "content-length":
                    direct_headers.append((lower, value))
                if not (lower.startswith("cf-int-") or lower.startswith("cf-cloudflared-") or lower.startswith("cf-proxy-") or lower.startswith(":")) or lower in {"connection", "upgrade", "sec-websocket-accept"}:
                    user_headers.append((lower, value))
            if not any(name == "content-type" for name, _ in user_headers):
                inferred = infer_content_type(request["path"])
                if inferred:
                    user_headers.append(("content-type", inferred))
            serialized = serialize_headers(user_headers)
            status = 200 if response["status"] == 101 else response["status"]
            out_headers = [(":status", str(status))]
            out_headers.extend(direct_headers)
            out_headers.append(("cf-cloudflared-response-headers", serialized))
            out_headers.append(("cf-cloudflared-response-meta", '{"src":"origin","flow_rate_limited":false}'))
            self.send_headers(stream_id, out_headers)
            while True:
                chunk = response["body"].read(65536)
                if not chunk:
                    self.send_data(stream_id, b"", True)
                    break
                self.send_data(stream_id, chunk, False)
        except Exception as exc:
            self.log.warning("stream %s proxy failed: %s", stream_id, exc)
            try:
                self.send_headers(stream_id, [(":status", "502")], True)
            except OSError:
                pass

    def run(self):
        preface = read_exact(self.sock, 24)
        if preface != b"PRI * HTTP/2.0\r\n\r\nSM\r\n\r\n":
            raise ValueError("edge did not send the HTTP/2 client preface")
        self.send_frame(4, 0, 0, struct.pack(">HI", 3, 100))
        if self.show_tunnel and not self.tunnel_state["printed"]:
            print(self.tunnel_url, flush=True)
            self.tunnel_state["printed"] = True
        while not self.stopped:
            frame_type, flags, stream_id, payload = self.read_frame()
            if frame_type == 4:
                if not flags & 1:
                    if len(payload) % 6:
                        raise ValueError("invalid SETTINGS payload")
                    for pos in range(0, len(payload), 6):
                        setting, value = struct.unpack_from(">HI", payload, pos)
                        if setting == 4:
                            delta = value - 65535
                            for key in self.stream_windows:
                                self.stream_windows[key] = max(0, self.stream_windows[key] + delta)
                        elif setting == 5 and 16384 <= value <= 16777215:
                            self.peer_max_frame = value
                    self.send_frame(4, 1, 0)
                continue
            if frame_type == 6:
                if not flags & 1:
                    self.send_frame(6, 1, 0, payload)
                continue
            if frame_type == 8:
                if len(payload) != 4:
                    continue
                increment = struct.unpack(">I", payload)[0] & 0x7FFFFFFF
                if stream_id == 0:
                    with self.window_condition:
                        self.connection_window += increment
                        self.window_condition.notify_all()
                else:
                    with self.window_condition:
                        self.stream_windows[stream_id] = self.stream_windows.get(stream_id, 65535) + increment
                        self.window_condition.notify_all()
                continue
            if frame_type == 3:
                self.streams.pop(stream_id, None)
                continue
            if frame_type == 7:
                break
            if frame_type == 1:
                headers = self.read_headers(flags, stream_id, payload)
                self.stream_windows.setdefault(stream_id, 65535)
                self.handle_headers(stream_id, flags, headers)
                continue
            if frame_type == 0:
                self.handle_data(stream_id, flags, payload)
                continue

    def handle_headers(self, stream_id, flags, headers):
        header_map = {}
        for name, value in headers:
            if name.startswith(":"):
                header_map[name] = value
            else:
                header_map[name.lower()] = value
        upgrade = header_map.get(CONTROL_HEADER, "").strip().lower()
        if upgrade == CONTROL_STREAM:
            self.open_control(stream_id)
            if flags & 1:
                self.control.finished = True
            return
        request = {
            "method": header_map.get(":method", "GET"),
            "path": header_map.get(":path", "/"),
            "authority": header_map.get(":authority", ""),
            "headers": [(name, value) for name, value in headers if not name.startswith(":")],
            "body": bytearray(), "upgrade": upgrade,
            "websocket": upgrade == "websocket" or header_map.get(":protocol", "").lower() == "websocket",
            "ended": bool(flags & 1), "finished": False,
        }
        self.streams[stream_id] = request
        if request["websocket"]:
            request["websocket_proxy"] = WebSocketProxy(self, stream_id, request, self.origin, self.log)
            request["websocket_proxy"].start()
        elif request["ended"]:
            self.request_finished(stream_id, request)

    def handle_data(self, stream_id, flags, payload):
        self.send_window_update(0, len(payload))
        self.send_window_update(stream_id, len(payload))
        if self.control is not None and self.control.stream_id == stream_id:
            self.control.feed(payload)
            if flags & 1:
                self.control.finished = True
            return
        request = self.streams.get(stream_id)
        if request is None:
            return
        if request.get("websocket_proxy") is not None:
            request["websocket_proxy"].feed(payload, bool(flags & 1))
            return
        request["body"].extend(payload)
        if flags & 1:
            request["ended"] = True
            self.request_finished(stream_id, request)


class WebSocketProxy:
    def __init__(self, connection, stream_id, request, origin, logger):
        self.connection = connection
        self.stream_id = stream_id
        self.request = request
        self.origin = origin
        self.log = logger
        self.incoming = queue.Queue()
        self.stopped = threading.Event()
        self.sock = None

    def start(self):
        threading.Thread(target=self.run, daemon=True).start()

    def feed(self, payload, end_stream=False):
        if payload:
            self.incoming.put(payload)
        if end_stream:
            self.incoming.put(None)

    def run(self):
        writer = None
        try:
            self.sock = open_origin_socket(self.origin)
            self.send_handshake()
            response = http.client.HTTPResponse(self.sock, method="GET")
            response.begin()
            response_headers = response.getheaders()
            user_headers = []
            direct_headers = []
            for name, value in response_headers:
                lower = name.lower()
                if lower == "content-length":
                    direct_headers.append((lower, value))
                if not (lower.startswith("cf-int-") or lower.startswith("cf-cloudflared-") or lower.startswith("cf-proxy-") or lower.startswith(":")) or lower in {"connection", "upgrade", "sec-websocket-accept"}:
                    user_headers.append((lower, value))
            serialized = serialize_headers(user_headers)
            status = 200 if response.status == 101 else response.status
            out_headers = [(":status", str(status))]
            out_headers.extend(direct_headers)
            out_headers.append(("cf-cloudflared-response-headers", serialized))
            out_headers.append(("cf-cloudflared-response-meta", '{"src":"origin","flow_rate_limited":false}'))
            self.connection.send_headers(self.stream_id, out_headers)
            writer = threading.Thread(target=self.write_to_origin, daemon=True)
            writer.start()
            while not self.stopped.is_set():
                payload = self.sock.recv(65536)
                if not payload:
                    break
                self.connection.send_data(self.stream_id, payload, False)
            self.connection.send_data(self.stream_id, b"", True)
        except Exception as exc:
            self.log.warning("websocket stream %s failed: %s", self.stream_id, exc)
            try:
                self.connection.send_headers(self.stream_id, [(":status", "502")], True)
            except OSError:
                pass
        finally:
            self.stopped.set()
            self.incoming.put(None)
            if self.sock is not None:
                try:
                    self.sock.shutdown(socket.SHUT_RDWR)
                except OSError:
                    pass
                try:
                    self.sock.close()
                except OSError:
                    pass

    def send_handshake(self):
        parsed = urlsplit(self.origin)
        target = self.request["path"] if self.request["path"].startswith("/") else "/" + self.request["path"]
        lines = ["GET %s HTTP/1.1" % target]
        has_key = False
        has_version = False
        has_origin = False
        for name, value in self.request["headers"]:
            lower = name.lower()
            if lower in {"host", "connection", "upgrade", "content-length", "transfer-encoding"}:
                continue
            if lower == "sec-websocket-key":
                has_key = True
            elif lower == "sec-websocket-version":
                has_version = True
            elif lower == "origin":
                has_origin = True
            lines.append("%s: %s" % (name, value))
        host = parsed.netloc
        lines.append("Host: %s" % host)
        if not has_origin and self.request.get("authority"):
            lines.append("Origin: https://%s" % self.request["authority"])
        if not has_key:
            lines.append("Sec-WebSocket-Key: %s" % base64.b64encode(secrets.token_bytes(16)).decode())
        if not has_version:
            lines.append("Sec-WebSocket-Version: 13")
        lines.append("Connection: Upgrade")
        lines.append("Upgrade: websocket")
        self.sock.sendall(("\r\n".join(lines) + "\r\n\r\n").encode("iso-8859-1"))

    def write_to_origin(self):
        while not self.stopped.is_set():
            payload = self.incoming.get()
            if payload is None:
                return
            try:
                self.sock.sendall(payload)
            except OSError:
                self.stopped.set()
                return


class ControlStream:
    def __init__(self, connection, stream_id, logger):
        self.connection = connection
        self.stream_id = stream_id
        self.log = logger
        self.buffer = b""
        self.finished = False

    def start(self, account_tag, secret, tunnel_id, conn_index):
        self.connection.send_data(self.stream_id, capnp_bootstrap(0), False)
        self.connection.send_data(self.stream_id, capnp_register(1, 0, account_tag, secret, tunnel_id, conn_index), False)

    def feed(self, payload):
        self.buffer += payload
        messages, self.buffer = capnp_messages(self.buffer)
        for message in messages:
            try:
                result = capnp_return_result(message)
                if result["ok"]:
                    self.log.info("tunnel connection registered at %s", result.get("location", "unknown"))
                    self.connection.registered = True
                else:
                    self.log.warning("tunnel registration failed: %s", result.get("error", "unknown error"))
            except Exception as exc:
                self.log.debug("ignoring control RPC message: %s", exc)


def serialize_headers(headers):
    encoded = []
    for name, value in headers:
        name_bytes = base64.b64encode(name.encode()).decode().rstrip("=")
        value_bytes = base64.b64encode(value.encode()).decode().rstrip("=")
        encoded.append(name_bytes + ":" + value_bytes)
    return ";".join(encoded)


def open_origin_socket(origin):
    parsed = urlsplit(origin)
    if parsed.scheme not in {"http", "https"} or not parsed.hostname:
        raise ValueError("origin must be an http:// or https:// URL")
    port = parsed.port or (443 if parsed.scheme == "https" else 80)
    sock = socket.create_connection((parsed.hostname, port), timeout=30)
    if parsed.scheme == "https":
        context = ssl.create_default_context()
        sock = context.wrap_socket(sock, server_hostname=parsed.hostname)
    sock.settimeout(None)
    return sock


def proxy_to_origin(origin, method, request_path, incoming_headers, body):
    parsed = urlsplit(origin)
    if parsed.scheme not in {"http", "https"} or not parsed.hostname:
        raise ValueError("origin must be an http:// or https:// URL")
    port = parsed.port or (443 if parsed.scheme == "https" else 80)
    connection = http.client.HTTPConnection(parsed.hostname, port, timeout=30)
    if parsed.scheme == "https":
        connection = http.client.HTTPSConnection(parsed.hostname, port, timeout=30)
    headers = {}
    for name, value in incoming_headers:
        lower = name.lower()
        if lower in {"host", "connection", "transfer-encoding", "content-length"}:
            continue
        headers[name] = value
    headers["Host"] = parsed.netloc
    if body:
        headers["Content-Length"] = str(len(body))
    target = request_path if request_path.startswith("/") else "/" + request_path
    connection.request(method, target, body=body or None, headers=headers)
    response = connection.getresponse()
    return {"status": response.status, "headers": response.getheaders(), "body": response}


def read_exact(sock, count):
    chunks = []
    remaining = count
    while remaining:
        chunk = sock.recv(remaining)
        if not chunk:
            raise EOFError("connection closed")
        chunks.append(chunk)
        remaining -= len(chunk)
    return b"".join(chunks)


def connect_edge(verify_certificate, logger):
    candidates = list(EDGE_HOSTS)
    secrets.SystemRandom().shuffle(candidates)
    last_error = None
    for host in candidates:
        raw = None
        sock = None
        try:
            raw = socket.create_connection((host, EDGE_PORT), timeout=10)
            context = ssl.create_default_context() if verify_certificate else ssl._create_unverified_context()
            context.set_alpn_protocols(["h2"])
            sock = context.wrap_socket(raw, server_hostname="h2.cftunnel.com")
            if sock.selected_alpn_protocol() not in {None, "h2"}:
                raise OSError("edge did not negotiate h2")
            sock.settimeout(None)
            logger.info("connected to %s:%d", host, EDGE_PORT)
            return sock
        except (OSError, ssl.SSLError) as exc:
            last_error = exc
            if sock is not None:
                sock.close()
            elif raw is not None:
                raw.close()
            logger.warning("edge %s failed: %s", host, exc)
    raise OSError("all Cloudflare edges failed: %s" % last_error)


class QuietHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format_string, *args):
        logging.getLogger("cftunnel.http").debug(format_string, *args)


def start_test_server(directory, port, logger):
    handler = functools.partial(QuietHTTPRequestHandler, directory=directory)
    server = http.server.ThreadingHTTPServer(("127.0.0.1", port), handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    logger.info("serving %s at http://127.0.0.1:%d", os.path.abspath(directory), port)
    return server


def run(args):
    logging.basicConfig(
        level=logging.DEBUG if args.debug and not args.showtunnel else logging.CRITICAL + 1,
        format="%(asctime)s %(levelname)s %(message)s",
    )
    logger = logging.getLogger("cftunnel")
    origin = args.origin
    server = None
    tunnel_state = {"printed": False}
    if args.test:
        if origin is not None:
            raise SystemExit("--test cannot be combined with --origin")
        server = start_test_server(args.serve_dir, args.serve_port, logger)
        origin = "http://127.0.0.1:%d" % args.serve_port
    if origin is None:
        raise SystemExit("--origin is required unless --test is used")
    parsed = urlsplit(origin)
    if parsed.scheme not in {"http", "https"} or not parsed.hostname:
        raise SystemExit("--origin must be an http:// or https:// URL")
    hostname, account_tag, tunnel_secret, tunnel_id = request_quick_tunnel(args.quick_service)
    public_url = hostname if hostname.startswith("https://") else "https://" + hostname
    if args.debug and not args.showtunnel:
        print("Cloudflare Quick Tunnel: %s" % public_url, flush=True)
    logger.info("proxying %s to %s", public_url, origin)
    while True:
        sock = None
        try:
            sock = connect_edge(args.verify_edge and not args.insecure, logger)
            H2Connection(
                sock,
                origin,
                account_tag,
                tunnel_secret,
                tunnel_id,
                0,
                logger,
                public_url,
                args.showtunnel,
                tunnel_state,
            ).run()
        except KeyboardInterrupt:
            return
        except (OSError, EOFError, ValueError) as exc:
            logger.warning("tunnel connection closed: %s", exc)
        finally:
            if sock is not None:
                try:
                    sock.close()
                except OSError:
                    pass
        time.sleep(args.retry_seconds)


class ProductArgumentParser(argparse.ArgumentParser):
    def _print_message(self, message, file=None):
        if PRODUCT_DEBUG and message:
            super()._print_message(message, file)


PRODUCT_DEBUG = "--debug" in sys.argv and "--showtunnel" not in sys.argv


def main():
    parser = ProductArgumentParser(description="Create a Cloudflare Quick Tunnel using only Python's standard library.")
    parser.add_argument("--origin", default=None, help="origin URL to expose")
    parser.add_argument("-t", "--test", action="store_true", help="start the built-in HTTP test server")
    parser.add_argument("--serve-dir", default=".", help="directory for the test HTTP server, default: %(default)s")
    parser.add_argument("--serve-port", type=int, default=8080, help="port for the test HTTP server, default: %(default)s")
    parser.add_argument("--quick-service", default=QUICK_SERVICE, help="Quick Tunnel API base URL")
    parser.add_argument("--retry-seconds", type=float, default=2, help="reconnect delay, default: %(default)s")
    parser.add_argument("--insecure", action="store_true", help="skip Edge TLS certificate verification (default)")
    parser.add_argument("--verify-edge", action="store_true", help="verify the Edge certificate; usually unavailable because the Edge uses Cloudflare Origin CA")
    parser.add_argument("--showtunnel", action="store_true", help="print only the tunnel URL after it is registered")
    parser.add_argument("--debug", action="store_true", help="enable debug logging")
    args = parser.parse_args()
    try:
        run(args)
    except KeyboardInterrupt:
        pass
    except SystemExit as exc:
        if args.debug and not args.showtunnel and str(exc):
            print("cftunnel: %s" % exc, file=sys.stderr)
        return 1
    except Exception as exc:
        if args.debug and not args.showtunnel:
            print("cftunnel: %s" % exc, file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
