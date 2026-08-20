#!/usr/bin/env node
// cftunnel-product.js - Create a Cloudflare Quick Tunnel using only Node.js's standard library.
'use strict';

const http = require('node:http');
const https = require('node:https');
const net = require('node:net');
const tls = require('node:tls');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const QUICK_SERVICE = 'https://api.trycloudflare.com';
const EDGE_HOSTS = ['region1.v2.argotunnel.com', 'region2.v2.argotunnel.com'];
const EDGE_PORT = 7844;
const CONTROL_HEADER = 'cf-cloudflared-proxy-connection-upgrade';
const CONTROL_STREAM = 'control-stream';
const MAX_FRAME_SIZE = 16384;

const STATIC_TABLE = [
    [':authority', ''], [':method', 'GET'], [':method', 'POST'],
    [':path', '/'], [':path', '/index.html'], [':scheme', 'http'],
    [':scheme', 'https'], [':status', '200'], [':status', '204'],
    [':status', '206'], [':status', '304'], [':status', '400'],
    [':status', '404'], [':status', '500'], ['accept-charset', ''],
    ['accept-encoding', 'gzip, deflate'], ['accept-language', ''],
    ['accept-ranges', ''], ['accept', ''], ['access-control-allow-origin', ''],
    ['age', ''], ['allow', ''], ['authorization', ''], ['cache-control', ''],
    ['content-disposition', ''], ['content-encoding', ''],
    ['content-language', ''], ['content-length', ''], ['content-location', ''],
    ['content-range', ''], ['content-type', ''], ['cookie', ''],
    ['date', ''], ['etag', ''], ['expect', ''], ['expires', ''],
    ['from', ''], ['host', ''], ['if-match', ''], ['if-modified-since', ''],
    ['if-none-match', ''], ['if-range', ''], ['if-unmodified-since', ''],
    ['last-modified', ''], ['link', ''], ['location', ''], ['max-forwards', ''],
    ['proxy-authenticate', ''], ['proxy-authorization', ''], ['range', ''],
    ['referer', ''], ['refresh', ''], ['retry-after', ''], ['server', ''],
    ['set-cookie', ''], ['strict-transport-security', ''], ['transfer-encoding', ''],
    ['user-agent', ''], ['vary', ''], ['via', ''], ['www-authenticate', ''],
];

const HUFFMAN_CODES = [8184,8388568,268435426,268435427,268435428,268435429,268435430,268435431,268435432,16777194,1073741820,268435433,268435434,1073741821,268435435,268435436,268435437,268435438,268435439,268435440,268435441,268435442,1073741822,268435443,268435444,268435445,268435446,268435447,268435448,268435449,268435450,268435451,20,1016,1017,4090,8185,21,248,2042,1018,1019,249,2043,250,22,23,24,0,1,2,25,26,27,28,29,30,31,92,251,32764,32,4091,1020,8186,33,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,252,115,253,8187,524272,8188,16380,34,32765,3,35,4,36,5,37,38,39,6,116,117,40,41,42,7,43,118,44,8,9,45,119,120,121,122,123,32766,2044,16381,8189,268435452,1048550,4194258,1048551,1048552,4194259,4194260,4194261,8388569,4194262,8388570,8388571,8388572,8388573,8388574,16777195,8388575,16777196,16777197,4194263,8388576,16777198,8388577,8388578,8388579,8388580,2097116,4194264,8388581,4194265,8388582,8388583,16777199,4194266,2097117,1048553,4194267,4194268,8388584,8388585,2097118,8388586,4194269,4194270,16777200,2097119,4194271,8388587,8388588,2097120,2097121,4194272,2097122,8388589,4194273,8388590,8388591,1048554,4194274,4194275,4194276,8388592,4194277,4194278,8388593,67108832,67108833,1048555,524273,4194279,8388594,4194280,33554412,67108834,67108835,67108836,134217694,134217695,67108837,16777201,33554413,524274,2097123,67108838,134217696,134217697,67108839,134217698,16777202,2097124,2097125,67108840,67108841,268435453,134217699,134217700,134217701,1048556,16777203,1048557,2097126,4194281,2097127,2097128,8388595,4194282,4194283,33554414,33554415,16777204,16777205,67108842,8388596,67108843,134217702,67108844,67108845,134217703,134217704,134217705,134217706,134217707,268435454,134217708,134217709,134217710,134217711,134217712,67108846,1073741823];

const HUFFMAN_LENGTHS = [13,23,28,28,28,28,28,28,28,24,30,28,28,30,28,28,28,28,28,28,28,28,30,28,28,28,28,28,28,28,28,28,6,10,10,12,13,6,8,11,10,10,8,11,8,6,6,6,5,5,5,6,6,6,6,6,6,6,7,8,15,6,12,10,13,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,7,8,13,19,13,14,6,15,5,6,5,6,5,6,6,6,5,7,7,6,6,6,5,6,7,6,5,5,6,7,7,7,7,7,15,11,14,13,28,20,22,20,20,22,22,22,23,22,23,23,23,23,23,24,23,24,24,22,23,24,23,23,23,23,21,22,23,22,23,23,24,22,21,20,22,22,23,23,21,23,22,22,24,21,22,23,23,21,21,22,21,23,22,23,23,20,22,22,22,23,22,22,23,26,26,20,19,22,23,22,25,26,26,26,27,27,26,24,25,19,21,26,27,27,26,27,24,21,21,26,26,28,27,27,27,20,24,20,21,22,21,21,23,22,22,25,25,24,24,26,23,26,27,26,26,27,27,27,27,27,28,27,27,27,27,27,26,30];

function huffmanTree() {
    const root = [null, null, -1, 0];
    for (let symbol = 0; symbol < HUFFMAN_CODES.length; symbol++) {
        const code = HUFFMAN_CODES[symbol];
        const length = HUFFMAN_LENGTHS[symbol];
        let node = root;
        for (let shift = length - 1; shift >= 0; shift--) {
            const bit = (code >> shift) & 1;
            if (node[bit] === null) {
                node[bit] = [null, null, -1, node[3] + 1];
            }
            node = node[bit];
        }
        node[2] = symbol;
    }
    return root;
}

const HUFFMAN_TREE = huffmanTree();

function decodeHuffman(data) {
    const out = [];
    let node = HUFFMAN_TREE;
    let pendingBits = 0;
    let pendingLength = 0;
    for (const byte of data) {
        for (let shift = 7; shift >= 0; shift--) {
            const bit = (byte >> shift) & 1;
            pendingBits = (pendingBits << 1) | bit;
            pendingLength += 1;
            node = node[bit];
            if (node === null) {
                throw new Error('invalid HPACK Huffman string');
            }
            if (node[2] >= 0) {
                if (node[2] === 256) {
                    throw new Error('HPACK Huffman EOS inside string');
                }
                out.push(node[2]);
                node = HUFFMAN_TREE;
                pendingBits = 0;
                pendingLength = 0;
            }
        }
    }
    if (pendingLength > 7 || pendingBits !== (1 << pendingLength) - 1) {
        throw new Error('invalid HPACK Huffman padding');
    }
    return Buffer.from(out);
}

function readInteger(data, pos, prefixBits) {
    if (pos >= data.length) {
        throw new Error('truncated HPACK integer');
    }
    const first = data[pos];
    pos += 1;
    const mask = (1 << prefixBits) - 1;
    let value = first & mask;
    if (value < mask) {
        return [value, pos];
    }
    let shift = 0;
    while (true) {
        if (pos >= data.length) {
            throw new Error('truncated HPACK integer');
        }
        const byte = data[pos];
        pos += 1;
        value += (byte & 127) * Math.pow(2, shift);
        if ((byte & 128) === 0) {
            return [value, pos];
        }
        shift += 7;
        if (shift > 28) {
            throw new Error('HPACK integer too large');
        }
    }
}

function readString(data, pos) {
    if (pos >= data.length) {
        throw new Error('truncated HPACK string');
    }
    const huffman = Boolean(data[pos] & 128);
    const [length, newPos] = readInteger(data, pos, 7);
    const end = newPos + length;
    if (end > data.length) {
        throw new Error('truncated HPACK string data');
    }
    const value = data.subarray(newPos, end);
    return [huffman ? decodeHuffman(value) : value, end];
}

class HpackDecoder {
    constructor() {
        this.dynamic = [];
        this.dynamicSize = 0;
        this.maxSize = 4096;
    }

    tableEntry(index) {
        if (index <= 0) {
            throw new Error('invalid HPACK index');
        }
        if (index <= STATIC_TABLE.length) {
            return STATIC_TABLE[index - 1];
        }
        const dynamicIndex = index - STATIC_TABLE.length - 1;
        if (dynamicIndex < 0 || dynamicIndex >= this.dynamic.length) {
            throw new Error('HPACK dynamic index out of range');
        }
        return this.dynamic[dynamicIndex];
    }

    add(name, value) {
        const size = 32 + Buffer.byteLength(name, 'utf8') + Buffer.byteLength(value, 'utf8');
        if (size > this.maxSize) {
            this.dynamic = [];
            this.dynamicSize = 0;
            return;
        }
        while (this.dynamic.length > 0 && this.dynamicSize + size > this.maxSize) {
            const [oldName, oldValue] = this.dynamic.pop();
            this.dynamicSize -= 32 + Buffer.byteLength(oldName, 'utf8') + Buffer.byteLength(oldValue, 'utf8');
        }
        this.dynamic.unshift([name, value]);
        this.dynamicSize += size;
    }

    decode(data) {
        const result = [];
        let pos = 0;
        while (pos < data.length) {
            const first = data[pos];
            if (first & 128) {
                let index;
                [index, pos] = readInteger(data, pos, 7);
                result.push(this.tableEntry(index));
                continue;
            }
            if (first & 64) {
                let index, name;
                [index, pos] = readInteger(data, pos, 6);
                if (index) {
                    name = this.tableEntry(index)[0];
                } else {
                    let nameBytes;
                    [nameBytes, pos] = readString(data, pos);
                    name = nameBytes.toString('utf8').toLowerCase();
                }
                let valueBytes;
                [valueBytes, pos] = readString(data, pos);
                const value = valueBytes.toString('utf8');
                this.add(name, value);
                result.push([name, value]);
                continue;
            }
            if (first & 32) {
                let size;
                [size, pos] = readInteger(data, pos, 5);
                if (size > 4096) {
                    throw new Error('HPACK table size exceeds limit');
                }
                this.maxSize = size;
                while (this.dynamic.length > 0 && this.dynamicSize > size) {
                    const [oldName, oldValue] = this.dynamic.pop();
                    this.dynamicSize -= 32 + Buffer.byteLength(oldName, 'utf8') + Buffer.byteLength(oldValue, 'utf8');
                }
                continue;
            }
            let index, name;
            [index, pos] = readInteger(data, pos, 4);
            if (index) {
                name = this.tableEntry(index)[0];
            } else {
                let nameBytes;
                [nameBytes, pos] = readString(data, pos);
                name = nameBytes.toString('utf8').toLowerCase();
            }
            let valueBytes;
            [valueBytes, pos] = readString(data, pos);
            result.push([name, valueBytes.toString('utf8')]);
        }
        return result;
    }
}

function encodeInteger(value, prefixBits, prefix) {
    const limit = (1 << prefixBits) - 1;
    if (value < limit) {
        return Buffer.from([prefix | value]);
    }
    const out = [prefix | limit];
    value -= limit;
    while (value >= 128) {
        out.push((value & 127) | 128);
        value = Math.floor(value / 128);
    }
    out.push(value);
    return Buffer.from(out);
}

function encodeString(value) {
    const raw = Buffer.from(value, 'utf8');
    return Buffer.concat([encodeInteger(raw.length, 7, 0), raw]);
}

function encodeHeaders(headers) {
    const out = [];
    for (const [name, value] of headers) {
        if (name === ':status' && value === '200') {
            out.push(0x88);
        } else if (name === ':status' && value === '204') {
            out.push(0x89);
        } else if (name === ':status' && value === '206') {
            out.push(0x8A);
        } else if (name === ':status' && value === '304') {
            out.push(0x8B);
        } else if (name === ':status' && value === '400') {
            out.push(0x8C);
        } else if (name === ':status' && value === '404') {
            out.push(0x8D);
        } else if (name === ':status' && value === '500') {
            out.push(0x8E);
        } else {
            out.push(...encodeInteger(0, 4, 0));
            out.push(...encodeString(name));
            out.push(...encodeString(value));
        }
    }
    return Buffer.from(out);
}

class CapnpBuilder {
    constructor() {
        this.words = [];
    }

    alloc(count) {
        const offset = this.words.length;
        for (let i = 0; i < count; i++) {
            this.words.push(0n);
        }
        return offset;
    }

    structPtr(ptrWord, targetWord, dataWords, pointerWords) {
        const offset = targetWord - ptrWord - 1;
        const low = (BigInt(offset) << 2n) & 0xFFFFFFFCn;
        const high = BigInt(dataWords & 0xFFFF) | (BigInt(pointerWords & 0xFFFF) << 16n);
        this.words[ptrWord] = low | (high << 32n);
    }

    setU8(word, byte, value) {
        const mask = 0xFFn << BigInt(byte * 8);
        this.words[word] = (this.words[word] & ~mask) | (BigInt(value & 0xFF) << BigInt(byte * 8));
    }

    setU16(word, byte, value) {
        const mask = 0xFFFFn << BigInt(byte * 8);
        this.words[word] = (this.words[word] & ~mask) | (BigInt(value & 0xFFFF) << BigInt(byte * 8));
    }

    setU32(word, byte, value) {
        const mask = 0xFFFFFFFFn << BigInt(byte * 8);
        this.words[word] = (this.words[word] & ~mask) | (BigInt(value & 0xFFFFFFFF) << BigInt(byte * 8));
    }

    setU64(word, value) {
        this.words[word] = BigInt(value) & 0xFFFFFFFFFFFFFFFFn;
    }

    writeBytes(ptrWord, value, text = false) {
        const raw = typeof value === 'string' ? Buffer.from(value, 'utf8') : value;
        const count = raw.length + (text ? 1 : 0);
        const content = this.alloc(Math.ceil(count / 8));
        for (let i = 0; i < raw.length; i++) {
            this.setU8(content + Math.floor(i / 8), i % 8, raw[i]);
        }
        const offset = content - ptrWord - 1;
        const low = ((BigInt(offset) << 2n) | 1n) & 0xFFFFFFFFn;
        const high = 2n | (BigInt(count & 0x1FFFFFFF) << 3n);
        this.words[ptrWord] = low | (high << 32n);
    }

    writeTextList(ptrWord, values) {
        if (!values.length) {
            this.words[ptrWord] = 0n;
            return;
        }
        const items = this.alloc(values.length);
        const offset = items - ptrWord - 1;
        this.words[ptrWord] = (((BigInt(offset) << 2n) | 1n) & 0xFFFFFFFFn) | ((6n | (BigInt(values.length) << 3n)) << 32n);
        for (let i = 0; i < values.length; i++) {
            this.writeBytes(items + i, values[i], true);
        }
    }

    finish() {
        const header = Buffer.alloc(8);
        header.writeUInt32LE(0, 0);
        header.writeUInt32LE(this.words.length, 4);
        const body = Buffer.alloc(this.words.length * 8);
        for (let i = 0; i < this.words.length; i++) {
            body.writeBigUInt64LE(this.words[i] & 0xFFFFFFFFFFFFFFFFn, i * 8);
        }
        return Buffer.concat([header, body]);
    }
}

function capnpBootstrap(questionId) {
    const msg = new CapnpBuilder();
    const root = msg.alloc(1), msgData = msg.alloc(1), msgPtr = msg.alloc(1);
    msg.structPtr(root, msgData, 1, 1);
    msg.setU16(msgData, 0, 8);
    const bootstrapData = msg.alloc(1);
    msg.alloc(1);
    msg.structPtr(msgPtr, bootstrapData, 1, 1);
    msg.setU32(bootstrapData, 0, questionId);
    return msg.finish();
}

function capnpRegister(questionId, bootstrapQuestionId, accountTag, tunnelSecret, tunnelId, connIndex) {
    const msg = new CapnpBuilder();
    const root = msg.alloc(1), msgData = msg.alloc(1), msgPtr = msg.alloc(1);
    msg.structPtr(root, msgData, 1, 1);
    msg.setU16(msgData, 0, 2);
    const callData0 = msg.alloc(1), callData1 = msg.alloc(1);
    msg.alloc(1);
    const callPtr0 = msg.alloc(1), callPtr1 = msg.alloc(1);
    msg.alloc(1);
    msg.structPtr(msgPtr, callData0, 3, 3);
    msg.setU32(callData0, 0, questionId);
    msg.setU64(callData1, 0xF71695EC7FE85497n);
    const mtData = msg.alloc(1), mtPtr = msg.alloc(1);
    msg.structPtr(callPtr0, mtData, 1, 1);
    msg.setU16(mtData, 4, 1);
    const paData = msg.alloc(1);
    msg.alloc(1);
    msg.structPtr(mtPtr, paData, 1, 1);
    msg.setU32(paData, 0, bootstrapQuestionId);
    const payloadPtr0 = msg.alloc(1);
    msg.alloc(1);
    msg.structPtr(callPtr1, payloadPtr0, 0, 2);
    const paramsData = msg.alloc(1), paramsPtr0 = msg.alloc(1), paramsPtr1 = msg.alloc(1), paramsPtr2 = msg.alloc(1);
    msg.structPtr(payloadPtr0, paramsData, 1, 3);
    msg.setU8(paramsData, 0, connIndex);
    const authPtr0 = msg.alloc(1), authPtr1 = msg.alloc(1);
    msg.structPtr(paramsPtr0, authPtr0, 0, 2);
    msg.writeBytes(authPtr0, accountTag, true);
    msg.writeBytes(authPtr1, tunnelSecret);
    msg.writeBytes(paramsPtr1, tunnelId);
    const optData = msg.alloc(1), optPtr0 = msg.alloc(1);
    msg.alloc(1);
    msg.structPtr(paramsPtr2, optData, 1, 2);
    const clientPtr0 = msg.alloc(1), clientPtr1 = msg.alloc(1), clientPtr2 = msg.alloc(1), clientPtr3 = msg.alloc(1);
    msg.structPtr(optPtr0, clientPtr0, 0, 4);
    const clientId = crypto.randomBytes(16);
    clientId[6] = (clientId[6] & 0x0F) | 0x40;
    clientId[8] = (clientId[8] & 0x3F) | 0x80;
    msg.writeBytes(clientPtr0, clientId);
    msg.writeTextList(clientPtr1, ['serialized_headers', 'allow_remote_config']);
    msg.writeBytes(clientPtr2, '2024.10.0-Nexus', true);
    msg.writeBytes(clientPtr3, 'Nexus-Python', true);
    return msg.finish();
}

function capnpMessages(buffer) {
    const messages = [];
    let pos = 0;
    while (buffer.length - pos >= 8) {
        const segmentsMinusOne = buffer.readUInt32LE(pos);
        const firstWords = buffer.readUInt32LE(pos + 4);
        const segments = segmentsMinusOne + 1;
        let headerWords = 2 + segments;
        let headerSize = headerWords * 4;
        if (headerSize % 8) {
            headerSize += 4;
        }
        if (buffer.length - pos < headerSize) {
            break;
        }
        const counts = [firstWords];
        for (let i = 1; i < segments; i++) {
            counts.push(buffer.readUInt32LE(pos + 4 + i * 4));
        }
        const total = headerSize + counts.reduce((a, b) => a + b, 0) * 8;
        if (buffer.length - pos < total) {
            break;
        }
        if (segments !== 1) {
            throw new Error("multi-segment Cap'n Proto message is not supported");
        }
        messages.push(buffer.subarray(pos + headerSize, pos + total));
        pos += total;
    }
    return [messages, buffer.subarray(pos)];
}

function capnpStruct(words, pointerWord) {
    if (pointerWord >= words.length) {
        throw new Error("Cap'n Proto pointer out of bounds");
    }
    const pointer = words[pointerWord];
    if ((pointer & 3n) !== 0n) {
        throw new Error('expected Cap\'n Proto struct pointer');
    }
    let offset = (pointer >> 2n) & 0x3FFFFFFFn;
    if (offset & 0x20000000n) {
        offset -= 0x40000000n;
    }
    const target = pointerWord + 1 + Number(offset);
    const dataWords = Number((pointer >> 32n) & 0xFFFFn);
    const pointerWords = Number((pointer >> 48n) & 0xFFFFn);
    if (target < 0 || target + dataWords + pointerWords > words.length) {
        throw new Error("Cap'n Proto pointer out of bounds");
    }
    return [target, dataWords, pointerWords];
}

function capnpText(words, pointerWord) {
    if (pointerWord >= words.length) {
        return '';
    }
    const pointer = words[pointerWord];
    if ((pointer & 3n) !== 1n) {
        return '';
    }
    let offset = (pointer >> 2n) & 0x3FFFFFFFn;
    if (offset & 0x20000000n) {
        offset -= 0x40000000n;
    }
    const target = pointerWord + 1 + Number(offset);
    const elementSize = Number((pointer >> 32n) & 7n);
    const count = Number(pointer >> 35n);
    const wordCount = Math.ceil(count / 8);
    if (elementSize !== 2 || target < 0 || target + wordCount > words.length) {
        return '';
    }
    const raw = Buffer.alloc(wordCount * 8);
    for (let i = 0; i < wordCount; i++) {
        raw.writeBigUInt64LE(words[target + i] & 0xFFFFFFFFFFFFFFFFn, i * 8);
    }
    return raw.subarray(0, count).toString('utf8').replace(/\0+$/, '');
}

function capnpReturnResult(data) {
    if (data.length % 8 || data.length < 24) {
        throw new Error('short Cap\'n Proto return');
    }
    const words = [];
    for (let i = 0; i < data.length / 8; i++) {
        words.push(data.readBigUInt64LE(i * 8));
    }
    let msgTarget, msgData, msgPtrs;
    [msgTarget, msgData, msgPtrs] = capnpStruct(words, 0);
    if (msgData < 1 || (words[msgTarget] & 0xFFFFn) !== 3n) {
        throw new Error('not an RPC return message');
    }
    let retTarget, retData, retPtrs;
    [retTarget, retData, retPtrs] = capnpStruct(words, msgTarget + msgData);
    const which = Number((words[retTarget] >> 48n) & 0xFFFFn);
    if (which === 1) {
        return { ok: false, error: capnpText(words, retTarget + retData) };
    }
    if (which !== 0) {
        return { ok: false, error: 'RPC return union ' + which };
    }
    let payloadTarget, payloadData, payloadPtrs;
    [payloadTarget, payloadData, payloadPtrs] = capnpStruct(words, retTarget + retData);
    let contentTarget, contentData, contentPtrs;
    [contentTarget, contentData, contentPtrs] = capnpStruct(words, payloadTarget + payloadData);
    const union = words[contentTarget];
    const unionWhich = Number(union & 0xFFFFn);
    if (unionWhich === 0) {
        return { ok: false, error: capnpText(words, contentTarget + contentData) };
    }
    if (unionWhich !== 1) {
        return { ok: false, error: 'registration union ' + unionWhich };
    }
    let detailsTarget, detailsData, detailsPtrs;
    [detailsTarget, detailsData, detailsPtrs] = capnpStruct(words, contentTarget + contentData);
    const location = capnpText(words, detailsTarget + detailsData + 1);
    return { ok: true, location: location, remoteManaged: Boolean(words[detailsTarget] & 1n) };
}

const MIME_TYPES = {
    '.js': 'text/javascript; charset=utf-8',
    '.mjs': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.map': 'application/json; charset=utf-8',
    '.wasm': 'application/wasm',
    '.html': 'text/html; charset=utf-8',
    '.htm': 'text/html; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.xml': 'application/xml',
    '.woff': 'font/woff2',
    '.woff2': 'font/woff2',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon',
};

function inferContentType(requestPath) {
    const base = requestPath.endsWith('/') ? requestPath.slice(0, -1) : requestPath;
    const dot = base.lastIndexOf('.');
    if (dot < 0) {
        return '';
    }
    return MIME_TYPES[base.slice(dot).toLowerCase()] || '';
}

function b64Secret(value) {
    if (Array.isArray(value)) {
        return Buffer.from(value);
    }
    if (typeof value !== 'string') {
        throw new Error('quick tunnel secret has an unexpected type');
    }
    return Buffer.from(value + '='.repeat((-value.length) % 4), 'base64');
}

const UUID_RE = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

function requestQuickTunnel(service) {
    return new Promise((resolve, reject) => {
        let parsed;
        try {
            parsed = new URL(service.replace(/\/+$/, '') + '/tunnel');
        } catch (err) {
            reject(new Error('requesting quick tunnel failed: ' + err.message));
            return;
        }
        const mod = parsed.protocol === 'https:' ? https : http;
        const req = mod.request(parsed, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'User-Agent': 'cftunnel.js/1.0' },
            timeout: 15000,
        }, (res) => {
            const chunks = [];
            res.on('data', (chunk) => chunks.push(chunk));
            res.on('error', reject);
            res.on('end', () => {
                const body = Buffer.concat(chunks);
                const status = res.statusCode;
                let data;
                try {
                    data = JSON.parse(body.toString('utf8'));
                } catch (err) {
                    reject(new Error('quick tunnel returned non-JSON (' + status + '): ' + body.subarray(0, 300).toString('utf8')));
                    return;
                }
                const result = data.result || {};
                if (!(data.success ?? true) || !result) {
                    reject(new Error('quick tunnel request was rejected: ' + JSON.stringify(data.errors)));
                    return;
                }
                try {
                    const idStr = String(result.id);
                    if (!UUID_RE.test(idStr)) {
                        throw new Error('bad tunnel id');
                    }
                    if (typeof result.account_tag !== 'string' || typeof result.hostname !== 'string') {
                        throw new Error('bad account tag or hostname');
                    }
                    const secret = b64Secret(result.secret);
                    const tunnelId = Buffer.from(idStr.replace(/-/g, ''), 'hex');
                    resolve([result.hostname, result.account_tag, secret, tunnelId]);
                } catch (err) {
                    reject(new Error('invalid quick tunnel response: ' + err.message));
                }
            });
        });
        req.on('error', (err) => reject(new Error('requesting quick tunnel failed: ' + err.message)));
        req.end();
    });
}

function serializeHeaders(headers) {
    return headers.map(([name, value]) =>
        Buffer.from(name, 'utf8').toString('base64').replace(/=+$/, '') +
        ':' +
        Buffer.from(value, 'utf8').toString('base64').replace(/=+$/, '')
    ).join(';');
}

class BufferedReader {
    constructor(socket) {
        this.socket = socket;
        this.buffer = Buffer.alloc(0);
        this.waiters = [];
        this.errored = null;
        this.closed = false;
        socket.on('data', (chunk) => {
            this.buffer = this.buffer.length ? Buffer.concat([this.buffer, chunk]) : chunk;
            this._drain();
        });
        socket.on('error', (err) => {
            this.errored = err;
            this._drain();
        });
        socket.on('end', () => {
            this.closed = true;
            this._drain();
        });
        socket.on('close', () => {
            this.closed = true;
            this._drain();
        });
    }

    _drain() {
        while (this.waiters.length > 0) {
            const waiter = this.waiters[0];
            if (this.buffer.length >= waiter.need) {
                this.waiters.shift();
                const chunk = this.buffer.subarray(0, waiter.need);
                this.buffer = this.buffer.subarray(waiter.need);
                waiter.resolve(chunk);
            } else if (this.errored !== null) {
                this.waiters.shift();
                waiter.reject(this.errored);
            } else if (this.closed) {
                this.waiters.shift();
                waiter.reject(new Error('connection closed'));
            } else {
                break;
            }
        }
    }

    readExact(count) {
        if (this.errored !== null) {
            return Promise.reject(this.errored);
        }
        if (this.buffer.length >= count) {
            const chunk = this.buffer.subarray(0, count);
            this.buffer = this.buffer.subarray(count);
            return Promise.resolve(chunk);
        }
        if (this.closed) {
            return Promise.reject(new Error('connection closed'));
        }
        return new Promise((resolve, reject) => {
            this.waiters.push({ need: count, resolve, reject });
            this._drain();
        });
    }
}

class H2Connection {
    constructor(sock, origin, accountTag, tunnelSecret, tunnelId, connIndex, logger, tunnelUrl = null, showTunnel = false, tunnelState = null) {
        this.sock = sock;
        this.reader = new BufferedReader(sock);
        this.origin = origin;
        this.accountTag = accountTag;
        this.tunnelSecret = tunnelSecret;
        this.tunnelId = tunnelId;
        this.connIndex = connIndex;
        this.log = logger;
        this.tunnelUrl = tunnelUrl;
        this.showTunnel = showTunnel;
        this.tunnelState = tunnelState || { printed: false };
        this.decoder = new HpackDecoder();
        this.connectionWindow = 65535;
        this.streamWindows = new Map();
        this.peerMaxFrame = MAX_FRAME_SIZE;
        this.streams = new Map();
        this.control = null;
        this.stopped = false;
        this.registered = false;
        this.windowWaiters = [];
    }

    sendFrame(frameType, flags, streamId, payload = Buffer.alloc(0)) {
        if (payload.length > 0xFFFFFF) {
            throw new Error('HTTP/2 frame too large');
        }
        const header = Buffer.alloc(9);
        header.writeUIntBE(payload.length, 0, 3);
        header[3] = frameType;
        header[4] = flags;
        header.writeUInt32BE(streamId & 0x7FFFFFFF, 5);
        this.sock.write(Buffer.concat([header, payload]));
    }

    sendHeaders(streamId, headers, endStream = false) {
        const payload = encodeHeaders(headers);
        const flags = 4 | (endStream ? 1 : 0);
        this.sendFrame(1, flags, streamId, payload);
    }

    _waitWindow(streamId) {
        if (this.connectionWindow > 0 && (this.streamWindows.get(streamId) ?? 65535) > 0) {
            return Promise.resolve();
        }
        return new Promise((resolve) => {
            this.windowWaiters.push({ streamId, resolve });
        });
    }

    _notifyWindows() {
        const remaining = [];
        for (const waiter of this.windowWaiters) {
            const streamWindow = this.streamWindows.get(waiter.streamId) ?? 65535;
            if (this.connectionWindow > 0 && streamWindow > 0) {
                waiter.resolve();
            } else {
                remaining.push(waiter);
            }
        }
        this.windowWaiters = remaining;
    }

    _releaseWaiters() {
        for (const waiter of this.windowWaiters) {
            waiter.resolve();
        }
        this.windowWaiters = [];
    }

    async sendData(streamId, payload, endStream = false) {
        const len = payload.length;
        let offset = 0;
        do {
            await this._waitWindow(streamId);
            if (this.stopped) {
                return;
            }
            const streamWindow = this.streamWindows.get(streamId) ?? 65535;
            const amount = Math.min(len - offset, this.connectionWindow, streamWindow, this.peerMaxFrame);
            const flags = endStream && offset + amount >= len ? 1 : 0;
            const chunk = payload.subarray(offset, offset + amount);
            this.connectionWindow -= amount;
            this.streamWindows.set(streamId, streamWindow - amount);
            this.sendFrame(0, flags, streamId, chunk);
            offset += amount;
        } while (offset < len);
    }

    sendWindowUpdate(streamId, increment) {
        if (increment > 0) {
            const payload = Buffer.alloc(4);
            payload.writeUInt32BE(increment & 0x7FFFFFFF, 0);
            this.sendFrame(8, 0, streamId, payload);
        }
    }

    async readFrame() {
        const header = await this.reader.readExact(9);
        const length = header.readUIntBE(0, 3);
        const frameType = header[3];
        const flags = header[4];
        const streamId = header.readUInt32BE(5) & 0x7FFFFFFF;
        const payload = await this.reader.readExact(length);
        return [frameType, flags, streamId, payload];
    }

    async readHeaders(flags, streamId, payload) {
        if (flags & 8) {
            const padLength = payload[0];
            payload = payload.subarray(1);
            if (padLength > payload.length) {
                throw new Error('invalid HTTP/2 padding');
            }
            payload = padLength ? payload.subarray(0, payload.length - padLength) : payload;
        }
        if (flags & 32) {
            payload = payload.subarray(5);
        }
        const blocks = [payload];
        while (!(flags & 4)) {
            const frame = await this.readFrame();
            if (frame[0] !== 9 || frame[2] !== streamId) {
                throw new Error('expected CONTINUATION frame');
            }
            blocks.push(frame[3]);
            flags = frame[1];
        }
        return this.decoder.decode(Buffer.concat(blocks));
    }

    openControl(streamId) {
        if (this.control !== null) {
            return;
        }
        this.control = new ControlStream(this, streamId, this.log);
        this.sendHeaders(streamId, [[':status', '200']]);
        this.control.start(this.accountTag, this.tunnelSecret, this.tunnelId, this.connIndex);
    }

    updateConfig(streamId, body) {
        let version = 0;
        try {
            const data = JSON.parse(body.length ? body.toString('utf8') : '{}');
            const parsed = parseInt(data.version, 10);
            if (!Number.isNaN(parsed)) {
                version = parsed;
            }
        } catch (err) {
            // ignore
        }
        const response = Buffer.from(JSON.stringify({ latestAppliedVersion: version }));
        this.sendHeaders(streamId, [
            [':status', '200'],
            ['content-type', 'application/json'],
            ['content-length', String(response.length)],
        ]);
        this.sendData(streamId, response, true);
    }

    requestFinished(streamId, request) {
        if (request.upgrade === 'update-configuration') {
            this.updateConfig(streamId, Buffer.concat(request.body));
            return;
        }
        if (request.websocket) {
            return;
        }
        if (request.finished) {
            return;
        }
        request.finished = true;
        this.proxyRequest(streamId, request).catch(() => {});
    }

    async proxyRequest(streamId, request) {
        try {
            const response = await proxyToOrigin(
                this.origin,
                request.method,
                request.path,
                request.headers,
                Buffer.concat(request.body)
            );
            const userHeaders = [];
            const directHeaders = [];
            for (const [name, value] of response.headers) {
                const lower = name.toLowerCase();
                if (lower === 'content-length') {
                    directHeaders.push([lower, value]);
                }
                const internal = lower.startsWith('cf-int-') ||
                    lower.startsWith('cf-cloudflared-') ||
                    lower.startsWith('cf-proxy-') ||
                    lower.startsWith(':');
                if (!internal || lower === 'connection' || lower === 'upgrade' || lower === 'sec-websocket-accept') {
                    userHeaders.push([lower, value]);
                }
            }
            if (!userHeaders.some(([name]) => name === 'content-type')) {
                const inferred = inferContentType(request.path);
                if (inferred) {
                    userHeaders.push(['content-type', inferred]);
                }
            }
            const serialized = serializeHeaders(userHeaders);
            const status = response.status === 101 ? 200 : response.status;
            const outHeaders = [
                [':status', String(status)],
                ...directHeaders,
                ['cf-cloudflared-response-headers', serialized],
                ['cf-cloudflared-response-meta', '{"src":"origin","flow_rate_limited":false}'],
            ];
            this.sendHeaders(streamId, outHeaders);
            for await (const chunk of response.body) {
                await this.sendData(streamId, chunk, false);
            }
            await this.sendData(streamId, Buffer.alloc(0), true);
        } catch (err) {
            this.log.warning('stream ' + streamId + ' proxy failed: ' + err);
            try {
                this.sendHeaders(streamId, [[':status', '502']], true);
            } catch (ignored) {
                // ignore
            }
        }
    }

    async run() {
        const preface = await this.reader.readExact(24);
        if (!preface.equals(Buffer.from('PRI * HTTP/2.0\r\n\r\nSM\r\n\r\n'))) {
            throw new Error('edge did not send the HTTP/2 client preface');
        }
        const settings = Buffer.alloc(6);
        settings.writeUInt16BE(3, 0);
        settings.writeUInt32BE(100, 2);
        this.sendFrame(4, 0, 0, settings);
        if (this.showTunnel && !this.tunnelState.printed) {
            process.stdout.write(this.tunnelUrl + '\n');
            this.tunnelState.printed = true;
        }
        try {
            while (!this.stopped) {
                const [frameType, flags, streamId, payload] = await this.readFrame();
                if (frameType === 4) {
                    if (!(flags & 1)) {
                        if (payload.length % 6) {
                            throw new Error('invalid SETTINGS payload');
                        }
                        for (let pos = 0; pos < payload.length; pos += 6) {
                            const setting = payload.readUInt16BE(pos);
                            const value = payload.readUInt32BE(pos + 2);
                            if (setting === 4) {
                                const delta = value - 65535;
                                for (const key of this.streamWindows.keys()) {
                                    this.streamWindows.set(key, Math.max(0, this.streamWindows.get(key) + delta));
                                }
                            } else if (setting === 5 && value >= 16384 && value <= 16777215) {
                                this.peerMaxFrame = value;
                            }
                        }
                        this.sendFrame(4, 1, 0);
                    }
                    continue;
                }
                if (frameType === 6) {
                    if (!(flags & 1)) {
                        this.sendFrame(6, 1, 0, payload);
                    }
                    continue;
                }
                if (frameType === 8) {
                    if (payload.length !== 4) {
                        continue;
                    }
                    const increment = payload.readUInt32BE(0) & 0x7FFFFFFF;
                    if (streamId === 0) {
                        this.connectionWindow += increment;
                    } else {
                        this.streamWindows.set(streamId, (this.streamWindows.get(streamId) ?? 65535) + increment);
                    }
                    this._notifyWindows();
                    continue;
                }
                if (frameType === 3) {
                    this.streams.delete(streamId);
                    continue;
                }
                if (frameType === 7) {
                    break;
                }
                if (frameType === 1) {
                    const headers = await this.readHeaders(flags, streamId, payload);
                    if (!this.streamWindows.has(streamId)) {
                        this.streamWindows.set(streamId, 65535);
                    }
                    this.handleHeaders(streamId, flags, headers);
                    continue;
                }
                if (frameType === 0) {
                    this.handleData(streamId, flags, payload);
                    continue;
                }
            }
        } finally {
            this.stopped = true;
            this._releaseWaiters();
            for (const request of this.streams.values()) {
                if (request.websocketProxy) {
                    request.websocketProxy.stop();
                }
            }
            try {
                this.sock.destroy();
            } catch (ignored) {
                // ignore
            }
        }
    }

    handleHeaders(streamId, flags, headers) {
        const headerMap = {};
        for (const [name, value] of headers) {
            if (name.startsWith(':')) {
                headerMap[name] = value;
            } else {
                headerMap[name.toLowerCase()] = value;
            }
        }
        const upgrade = (headerMap[CONTROL_HEADER] || '').trim().toLowerCase();
        if (upgrade === CONTROL_STREAM) {
            this.openControl(streamId);
            if (flags & 1) {
                this.control.finished = true;
            }
            return;
        }
        const request = {
            method: headerMap[':method'] || 'GET',
            path: headerMap[':path'] || '/',
            authority: headerMap[':authority'] || '',
            headers: headers.filter(([name]) => !name.startsWith(':')),
            body: [],
            upgrade: upgrade,
            websocket: upgrade === 'websocket' || (headerMap[':protocol'] || '').toLowerCase() === 'websocket',
            ended: Boolean(flags & 1),
            finished: false,
        };
        this.streams.set(streamId, request);
        if (request.websocket) {
            request.websocketProxy = new WebSocketProxy(this, streamId, request, this.origin, this.log);
            request.websocketProxy.start();
        } else if (request.ended) {
            this.requestFinished(streamId, request);
        }
    }

    handleData(streamId, flags, payload) {
        this.sendWindowUpdate(0, payload.length);
        this.sendWindowUpdate(streamId, payload.length);
        if (this.control !== null && this.control.streamId === streamId) {
            this.control.feed(payload);
            if (flags & 1) {
                this.control.finished = true;
            }
            return;
        }
        const request = this.streams.get(streamId);
        if (request === undefined) {
            return;
        }
        if (request.websocketProxy !== undefined) {
            request.websocketProxy.feed(payload, Boolean(flags & 1));
            return;
        }
        if (payload.length) {
            request.body.push(payload);
        }
        if (flags & 1) {
            request.ended = true;
            this.requestFinished(streamId, request);
        }
    }
}

class WebSocketProxy {
    constructor(connection, streamId, request, origin, logger) {
        this.connection = connection;
        this.streamId = streamId;
        this.request = request;
        this.origin = origin;
        this.log = logger;
        this.queue = [];
        this.waiters = [];
        this.stopped = false;
        this.sock = null;
    }

    start() {
        this.run().catch(() => {});
    }

    feed(payload, endStream = false) {
        if (payload.length) {
            this.queue.push(payload);
        }
        if (endStream) {
            this.queue.push(null);
        }
        this._wake();
    }

    stop() {
        if (this.stopped) {
            return;
        }
        this.stopped = true;
        this._wake();
        if (this.sock !== null) {
            try {
                this.sock.destroy();
            } catch (ignored) {
                // ignore
            }
        }
    }

    _wake() {
        for (const waiter of this.waiters) {
            waiter();
        }
        this.waiters = [];
    }

    async _next() {
        while (!this.stopped) {
            if (this.queue.length) {
                return this.queue.shift();
            }
            await new Promise((resolve) => this.waiters.push(resolve));
        }
        return null;
    }

    async run() {
        try {
            this.sock = await openOriginSocket(this.origin);
            this.sendHandshake();
            const response = await readHttp1Response(this.sock);
            const userHeaders = [];
            const directHeaders = [];
            for (const [name, value] of response.headers) {
                const lower = name.toLowerCase();
                if (lower === 'content-length') {
                    directHeaders.push([lower, value]);
                }
                const internal = lower.startsWith('cf-int-') ||
                    lower.startsWith('cf-cloudflared-') ||
                    lower.startsWith('cf-proxy-') ||
                    lower.startsWith(':');
                if (!internal || lower === 'connection' || lower === 'upgrade' || lower === 'sec-websocket-accept') {
                    userHeaders.push([lower, value]);
                }
            }
            const serialized = serializeHeaders(userHeaders);
            const status = response.status === 101 ? 200 : response.status;
            const outHeaders = [
                [':status', String(status)],
                ...directHeaders,
                ['cf-cloudflared-response-headers', serialized],
                ['cf-cloudflared-response-meta', '{"src":"origin","flow_rate_limited":false}'],
            ];
            this.connection.sendHeaders(this.streamId, outHeaders);
            this.writeToOrigin().catch(() => {});
            await this.pumpOrigin(response.rest);
        } catch (err) {
            this.log.warning('websocket stream ' + this.streamId + ' failed: ' + err);
            try {
                this.connection.sendHeaders(this.streamId, [[':status', '502']], true);
            } catch (ignored) {
                // ignore
            }
        } finally {
            this.stop();
        }
    }

    async pumpOrigin(firstChunk) {
        if (firstChunk.length) {
            await this.connection.sendData(this.streamId, firstChunk, false);
        }
        for await (const chunk of this.sock) {
            if (this.stopped) {
                break;
            }
            await this.connection.sendData(this.streamId, chunk, false);
        }
        if (!this.stopped) {
            await this.connection.sendData(this.streamId, Buffer.alloc(0), true);
        }
    }

    async writeToOrigin() {
        while (!this.stopped) {
            const payload = await this._next();
            if (payload === null) {
                return;
            }
            try {
                this.sock.write(payload);
            } catch (err) {
                this.stopped = true;
                return;
            }
        }
    }

    sendHandshake() {
        const parsed = new URL(this.origin);
        const target = this.request.path.startsWith('/') ? this.request.path : '/' + this.request.path;
        const lines = ['GET ' + target + ' HTTP/1.1'];
        let hasKey = false;
        let hasVersion = false;
        let hasOrigin = false;
        for (const [name, value] of this.request.headers) {
            const lower = name.toLowerCase();
            if (lower === 'host' || lower === 'connection' || lower === 'upgrade' ||
                lower === 'content-length' || lower === 'transfer-encoding') {
                continue;
            }
            if (lower === 'sec-websocket-key') {
                hasKey = true;
            } else if (lower === 'sec-websocket-version') {
                hasVersion = true;
            } else if (lower === 'origin') {
                hasOrigin = true;
            }
            lines.push(name + ': ' + value);
        }
        lines.push('Host: ' + parsed.host);
        if (!hasOrigin && this.request.authority) {
            lines.push('Origin: https://' + this.request.authority);
        }
        if (!hasKey) {
            lines.push('Sec-WebSocket-Key: ' + crypto.randomBytes(16).toString('base64'));
        }
        if (!hasVersion) {
            lines.push('Sec-WebSocket-Version: 13');
        }
        lines.push('Connection: Upgrade');
        lines.push('Upgrade: websocket');
        this.sock.write(Buffer.from(lines.join('\r\n') + '\r\n\r\n', 'latin1'));
    }
}

class ControlStream {
    constructor(connection, streamId, logger) {
        this.connection = connection;
        this.streamId = streamId;
        this.log = logger;
        this.buffer = Buffer.alloc(0);
        this.finished = false;
    }

    start(accountTag, secret, tunnelId, connIndex) {
        this.connection.sendData(this.streamId, capnpBootstrap(0), false);
        this.connection.sendData(this.streamId, capnpRegister(1, 0, accountTag, secret, tunnelId, connIndex), false);
    }

    feed(payload) {
        this.buffer = this.buffer.length ? Buffer.concat([this.buffer, payload]) : payload;
        let messages, rest;
        [messages, rest] = capnpMessages(this.buffer);
        this.buffer = rest;
        for (const message of messages) {
            try {
                const result = capnpReturnResult(message);
                if (result.ok) {
                    this.log.info('tunnel connection registered at ' + (result.location || 'unknown'));
                    this.connection.registered = true;
                } else {
                    this.log.warning('tunnel registration failed: ' + (result.error || 'unknown error'));
                }
            } catch (err) {
                this.log.debug('ignoring control RPC message: ' + err);
            }
        }
    }
}

function openOriginSocket(origin) {
    return new Promise((resolve, reject) => {
        let parsed;
        try {
            parsed = new URL(origin);
        } catch (err) {
            reject(new Error('origin must be an http:// or https:// URL'));
            return;
        }
        if (!['http:', 'https:'].includes(parsed.protocol) || !parsed.hostname) {
            reject(new Error('origin must be an http:// or https:// URL'));
            return;
        }
        const isHttps = parsed.protocol === 'https:';
        const port = parsed.port || (isHttps ? 443 : 80);
        const raw = net.connect({ host: parsed.hostname, port });
        let settled = false;
        const finish = (fn, value) => {
            if (settled) {
                return;
            }
            settled = true;
            raw.removeListener('error', onRawError);
            raw.setTimeout(0);
            fn(value);
        };
        const onRawError = (err) => {
            if (!settled) {
                finish(reject, err);
            }
        };
        raw.on('error', onRawError);
        raw.setTimeout(30000, () => raw.destroy(new Error('origin connection timeout')));
        raw.on('connect', () => {
            if (!isHttps) {
                finish(resolve, raw);
                return;
            }
            const tlsSock = tls.connect({ socket: raw, servername: parsed.hostname });
            tlsSock.on('error', (err) => {
                if (!settled) {
                    finish(reject, err);
                }
            });
            tlsSock.on('secureConnect', () => {
                finish(resolve, tlsSock);
            });
        });
    });
}

function rawHeaderPairs(res) {
    const pairs = [];
    for (let i = 0; i < res.rawHeaders.length; i += 2) {
        pairs.push([res.rawHeaders[i], res.rawHeaders[i + 1]]);
    }
    return pairs;
}

function proxyToOrigin(origin, method, requestPath, incomingHeaders, body) {
    return new Promise((resolve, reject) => {
        let parsed;
        try {
            parsed = new URL(origin);
        } catch (err) {
            reject(new Error('origin must be an http:// or https:// URL'));
            return;
        }
        if (!['http:', 'https:'].includes(parsed.protocol) || !parsed.hostname) {
            reject(new Error('origin must be an http:// or https:// URL'));
            return;
        }
        const isHttps = parsed.protocol === 'https:';
        const port = parsed.port || (isHttps ? 443 : 80);
        const headers = {};
        for (const [name, value] of incomingHeaders) {
            const lower = name.toLowerCase();
            if (lower === 'host' || lower === 'connection' || lower === 'transfer-encoding' || lower === 'content-length') {
                continue;
            }
            headers[name] = value;
        }
        headers['Host'] = parsed.host;
        if (body.length) {
            headers['Content-Length'] = String(body.length);
        }
        const target = requestPath.startsWith('/') ? requestPath : '/' + requestPath;
        const mod = isHttps ? https : http;
        const req = mod.request({
            hostname: parsed.hostname,
            port: port,
            path: target,
            method: method,
            headers: headers,
            timeout: 30000,
        }, (res) => {
            resolve({
                status: res.statusCode,
                headers: rawHeaderPairs(res),
                body: res,
            });
        });
        req.on('error', (err) => reject(err));
        req.end(body.length ? body : undefined);
    });
}

function readHttp1Response(sock) {
    return new Promise((resolve, reject) => {
        let buffer = Buffer.alloc(0);
        const cleanup = () => {
            sock.removeListener('data', onData);
            sock.removeListener('error', onError);
            sock.removeListener('end', onClosed);
            sock.removeListener('close', onClosed);
        };
        const onData = (chunk) => {
            buffer = buffer.length ? Buffer.concat([buffer, chunk]) : chunk;
            const idx = buffer.indexOf('\r\n\r\n');
            if (idx < 0) {
                return;
            }
            cleanup();
            const head = buffer.subarray(0, idx).toString('latin1');
            const lines = head.split('\r\n');
            const parts = lines[0].split(' ');
            const status = parseInt(parts[1], 10);
            if (!Number.isInteger(status)) {
                reject(new Error('malformed HTTP/1.1 response status'));
                return;
            }
            const headers = [];
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i];
                if (!line) {
                    continue;
                }
                const colon = line.indexOf(':');
                if (colon > 0) {
                    headers.push([line.slice(0, colon).trim(), line.slice(colon + 1).trim()]);
                }
            }
            resolve({ status: status, headers: headers, rest: buffer.subarray(idx + 4) });
        };
        const onError = (err) => {
            cleanup();
            reject(err);
        };
        const onClosed = () => {
            cleanup();
            reject(new Error('origin closed before response headers'));
        };
        sock.on('data', onData);
        sock.on('error', onError);
        sock.on('end', onClosed);
        sock.on('close', onClosed);
    });
}

function connectEdge(verifyCertificate, logger) {
    const candidates = EDGE_HOSTS.slice().sort(() => Math.random() - 0.5);
    let lastError = null;
    const attempt = async () => {
        for (const host of candidates) {
            try {
                return await new Promise((resolve, reject) => {
                    const sock = tls.connect({
                        host: host,
                        port: EDGE_PORT,
                        ALPNProtocols: ['h2'],
                        servername: 'h2.cftunnel.com',
                        rejectUnauthorized: verifyCertificate,
                    });
                    sock.setTimeout(10000, () => sock.destroy(new Error('connection timeout')));
                    sock.on('error', reject);
                    sock.on('secureConnect', () => {
                        const alpn = sock.alpnProtocol;
                        if (alpn && alpn !== 'h2') {
                            sock.destroy(new Error('edge did not negotiate h2'));
                            return;
                        }
                        sock.setTimeout(0);
                        logger.info('connected to ' + host + ':' + EDGE_PORT);
                        resolve(sock);
                    });
                });
            } catch (err) {
                lastError = err;
                logger.warning('edge ' + host + ' failed: ' + err);
            }
        }
        throw new Error('all Cloudflare edges failed: ' + lastError);
    };
    return attempt();
}

function startTestServer(directory, port, logger) {
    const root = path.resolve(directory);
    const server = http.createServer((req, res) => {
        let pathname;
        try {
            pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
        } catch (err) {
            pathname = '/';
        }
        const safe = pathname.split('/').filter((part) => part && part !== '.').join('/');
        let filePath = path.join(root, safe);
        if (filePath !== root && !filePath.startsWith(root + path.sep)) {
            res.writeHead(403);
            res.end();
            return;
        }
        const serve = () => {
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.end('404 Not Found');
                    return;
                }
                const type = MIME_TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
                res.writeHead(200, { 'Content-Type': type });
                res.end(data);
            });
        };
        fs.stat(filePath, (err, stat) => {
            if (err) {
                res.writeHead(404);
                res.end('404 Not Found');
                return;
            }
            if (stat.isDirectory()) {
                filePath = path.join(filePath, 'index.html');
                fs.stat(filePath, (err2) => {
                    if (err2) {
                        res.writeHead(404);
                        res.end('404 Not Found');
                        return;
                    }
                    serve();
                });
                return;
            }
            serve();
        });
    });
    server.on('error', (err) => {
        process.stderr.write('cftunnel: ' + err.message + '\n');
        process.exit(1);
    });
    server.listen(port, '127.0.0.1');
    logger.info('serving ' + root + ' at http://127.0.0.1:' + port);
    return server;
}

class Logger {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    _log(levelName, ...parts) {
        if (this.level === 'silent') {
            return;
        }
        const levels = { debug: 10, info: 20, warning: 30 };
        if (levels[levelName] < levels[this.level]) {
            return;
        }
        const now = new Date();
        const ts = now.toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, ',') + String(now.getMilliseconds()).padStart(3, '0');
        process.stderr.write(ts + ' ' + levelName.toUpperCase() + ' ' + parts.join(' ') + '\n');
    }

    debug(...parts) {
        this._log('debug', ...parts);
    }

    info(...parts) {
        this._log('info', ...parts);
    }

    warning(...parts) {
        this._log('warning', ...parts);
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function printUsage(out) {
    out.write(
        'usage: cftunnel-product.js [-h] [--origin ORIGIN] [-t] [--serve-dir DIR]\n' +
        '                        [--serve-port PORT] [--quick-service URL]\n' +
        '                        [--retry-seconds SECONDS] [--insecure] [--verify-edge]\n' +
        '                        [--showtunnel] [--debug]\n' +
        '\n' +
        'Create a Cloudflare Quick Tunnel using only Node.js\'s standard library.\n' +
        '\n' +
        'options:\n' +
        '  -h, --help            show this help message and exit\n' +
        '  --origin ORIGIN       origin URL to expose\n' +
        '  -t, --test            start the built-in HTTP test server\n' +
        '  --serve-dir DIR       directory for the test HTTP server, default: .\n' +
        '  --serve-port PORT     port for the test HTTP server, default: 8080\n' +
        '  --quick-service URL   Quick Tunnel API base URL\n' +
        '  --retry-seconds SECONDS\n' +
        '                        reconnect delay, default: 2\n' +
        '  --insecure            skip Edge TLS certificate verification (default)\n' +
        '  --verify-edge         verify the Edge certificate; usually unavailable because\n' +
        '                        the Edge uses Cloudflare Origin CA\n' +
        '  --showtunnel          print only the tunnel URL after it is registered\n' +
        '  --debug               enable debug logging\n'
    );
}

function parseArgs(argv) {
    const args = {
        origin: null,
        test: false,
        serveDir: '.',
        servePort: 8080,
        quickService: QUICK_SERVICE,
        retrySeconds: 2,
        insecure: false,
        verifyEdge: false,
        showTunnel: false,
        debug: false,
    };
    const valueOpts = new Set(['--origin', '--serve-dir', '--serve-port', '--quick-service', '--retry-seconds']);
    const boolOpts = {
        '-t': 'test',
        '--test': 'test',
        '--insecure': 'insecure',
        '--verify-edge': 'verifyEdge',
        '--showtunnel': 'showTunnel',
        '--debug': 'debug',
    };
    let i = 0;
    const fail = (message) => {
        throw new Error(message);
    };
    while (i < argv.length) {
        let opt = argv[i];
        let inlineValue = null;
        const eq = opt.indexOf('=');
        if (opt.startsWith('--') && eq > 0) {
            inlineValue = opt.slice(eq + 1);
            opt = opt.slice(0, eq);
        }
        if (opt === '-h' || opt === '--help') {
            return { help: true };
        }
        if (Object.prototype.hasOwnProperty.call(boolOpts, opt)) {
            args[boolOpts[opt]] = true;
            if (inlineValue !== null) {
                fail("argument " + opt + ": ignored explicit argument '" + inlineValue + "'");
            }
            i += 1;
            continue;
        }
        if (valueOpts.has(opt)) {
            let value = inlineValue;
            if (value === null) {
                i += 1;
                if (i >= argv.length) {
                    fail('argument ' + opt + ': expected one argument');
                }
                value = argv[i];
            }
            switch (opt) {
                case '--origin':
                    args.origin = value;
                    break;
                case '--serve-dir':
                    args.serveDir = value;
                    break;
                case '--serve-port': {
                    const n = Number(value);
                    if (!Number.isInteger(n)) {
                        fail("argument --serve-port: invalid int value: '" + value + "'");
                    }
                    args.servePort = n;
                    break;
                }
                case '--quick-service':
                    args.quickService = value;
                    break;
                case '--retry-seconds': {
                    const f = Number(value);
                    if (!Number.isFinite(f)) {
                        fail("argument --retry-seconds: invalid float value: '" + value + "'");
                    }
                    args.retrySeconds = f;
                    break;
                }
            }
            i += 1;
            continue;
        }
        fail('unrecognized arguments: ' + opt);
    }
    return { args: args };
}

async function run(args) {
    const logger = new Logger('cftunnel', args.debug && !args.showTunnel ? 'debug' : 'silent');
    let origin = args.origin;
    let server = null;
    const tunnelState = { printed: false };
    if (args.test) {
        if (origin !== null) {
            throw new Error('--test cannot be combined with --origin');
        }
        server = startTestServer(args.serveDir, args.servePort, logger);
        origin = 'http://127.0.0.1:' + args.servePort;
    }
    if (origin === null) {
        throw new Error('--origin is required unless --test is used');
    }
    let parsed = null;
    try {
        parsed = new URL(origin);
    } catch (err) {
        parsed = null;
    }
    if (parsed === null || !['http:', 'https:'].includes(parsed.protocol) || !parsed.hostname) {
        throw new Error('--origin must be an http:// or https:// URL');
    }
    const [hostname, accountTag, tunnelSecret, tunnelId] = await requestQuickTunnel(args.quickService);
    const publicUrl = hostname.startsWith('https://') ? hostname : 'https://' + hostname;
    if (args.debug && !args.showTunnel) {
        console.log('Cloudflare Quick Tunnel: ' + publicUrl);
    }
    logger.info('proxying ' + publicUrl + ' to ' + origin);
    while (true) {
        let sock = null;
        try {
            sock = await connectEdge(args.verifyEdge && !args.insecure, logger);
            await new H2Connection(
                sock,
                origin,
                accountTag,
                tunnelSecret,
                tunnelId,
                0,
                logger,
                publicUrl,
                args.showTunnel,
                tunnelState
            ).run();
        } catch (err) {
            logger.warning('tunnel connection closed: ' + err);
        } finally {
            if (sock !== null) {
                try {
                    sock.destroy();
                } catch (ignored) {
                    // ignore
                }
            }
        }
        await sleep(args.retrySeconds * 1000);
    }
}

function main() {
    const argv = process.argv.slice(2);
    let parsed;
    try {
        parsed = parseArgs(argv);
    } catch (err) {
        const debug = argv.includes('--debug') && !argv.includes('--showtunnel');
        if (debug) {
            printUsage(process.stderr);
            process.stderr.write('cftunnel-product.js: error: ' + err.message + '\n');
        }
        process.exit(1);
    }
    if (parsed.help) {
        printUsage(process.stdout);
        process.exit(0);
    }
    run(parsed.args).catch((err) => {
        if (parsed.args.debug && !parsed.args.showTunnel) {
            process.stderr.write('cftunnel: ' + err.message + '\n');
        }
        process.exit(1);
    });
}

if (require.main === module) {
    main();
}

module.exports = {
    main: main,
    parseArgs: parseArgs,
    run: run,
    capnpBootstrap: capnpBootstrap,
    capnpRegister: capnpRegister,
    capnpMessages: capnpMessages,
    capnpReturnResult: capnpReturnResult,
    encodeHeaders: encodeHeaders,
    encodeString: encodeString,
    encodeInteger: encodeInteger,
    HpackDecoder: HpackDecoder,
    decodeHuffman: decodeHuffman,
    serializeHeaders: serializeHeaders,
    inferContentType: inferContentType,
    requestQuickTunnel: requestQuickTunnel,
    STATIC_TABLE: STATIC_TABLE,
    HUFFMAN_CODES: HUFFMAN_CODES,
    HUFFMAN_LENGTHS: HUFFMAN_LENGTHS,
};
