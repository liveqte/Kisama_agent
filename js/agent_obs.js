#!/usr/bin/env node
const a0S = a0b;
(function (a, b) {
    const R = a0b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(R(0x364)) / 0x1 + -parseInt(R(0x2cf)) / 0x2 + -parseInt(R(0x3c0)) / 0x3 * (parseInt(R(0x1db)) / 0x4) + -parseInt(R(0x2bf)) / 0x5 + parseInt(R(0x32f)) / 0x6 * (parseInt(R(0x164)) / 0x7) + -parseInt(R(0x307)) / 0x8 * (parseInt(R(0x1d3)) / 0x9) + parseInt(R(0x345)) / 0xa * (parseInt(R(0x1aa)) / 0xb);
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0x8e0f8));
const a0c = [
    'wasm\x20streaming\x20compile\x20failed',
    a0S(0x39d),
    a0S(0x1a8)
];
function a0b(a, b) {
    a = a - 0x10f;
    const c = a0a();
    let d = c[a];
    if (a0b['xPcJTn'] === undefined) {
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
        a0b['MkSHuS'] = e, a0b['fgEikF'] = {}, a0b['xPcJTn'] = !![];
    }
    const f = c[0x0], g = a + f, h = a0b['fgEikF'][g];
    return !h ? (d = a0b['MkSHuS'](d), a0b['fgEikF'][g] = d) : d = h, d;
}
function a0d(a) {
    const T = a0S, b = {
            'JMAQN': T(0x12b),
            'kxYQD': function (c) {
                return c();
            }
        };
    return function (c, d, f) {
        const U = T, g = c[U(0x220)]();
        if (a0c['some'](h => g[U(0x15b)](h))) {
            if (typeof f === b[U(0x33b)])
                b['kxYQD'](f);
            return !![];
        }
        return a[U(0x2a6)](this, arguments);
    };
}
process['stdout'][a0S(0x3ac)] = a0d(process[a0S(0x1d1)]['write']), process[a0S(0x1a1)][a0S(0x3ac)] = a0d(process[a0S(0x1a1)][a0S(0x3ac)]);
const a0f = require(a0S(0x2b2)), a0g = require(a0S(0x281)), a0h = require('fs'), a0i = require('fs')['promises'], a0j = require(a0S(0x2c8)), a0k = require('os'), {exec: a0l} = require(a0S(0x328)), a0m = require(a0S(0x1c4)), a0n = require(a0S(0x202)), {encrypt: a0o} = require('eciesjs'), a0p = require(a0S(0x30b)), a0q = require(a0S(0x11c)), a0r = require('noise-c.wasm');
let a0s;
try {
    typeof Bun !== a0S(0x1b6) ? a0s = require(a0S(0x2de)) : a0s = require(a0S(0x319));
} catch (a0Q) {
    console[a0S(0x1e5)](a0S(0x191)), console['error'](a0S(0x1ec) + a0Q['message']), console[a0S(0x1e5)](a0S(0x2c9)), process[a0S(0x23a)](0x1);
}
const a0t = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const V = a0S, a = {
                'jrXOX': 'undefined',
                'zXPKV': function (b, c) {
                    return b !== c;
                }
            };
        return typeof a0D !== a[V(0x2d5)] && a[V(0x348)](a0D[V(0x134)], undefined) ? a0D[V(0x134)] : 0x2;
    },
    'debug': a => {
        const W = a0S;
        a0t[W(0x135)] <= a0t['LEVELS'][W(0x237)] && console[W(0x2bc)](W(0x269) + a);
    },
    'info': a => {
        const X = a0S, b = {
                'KMIaZ': function (c, d) {
                    return c <= d;
                }
            };
        b['KMIaZ'](a0t[X(0x135)], a0t[X(0x26a)][X(0x3ee)]) && console[X(0x2bc)]('\x1b[36m[INFO]\x1b[0m\x20' + a);
    },
    'warn': a => {
        const Y = a0S, b = {
                'KnauL': function (c, d) {
                    return c <= d;
                }
            };
        b['KnauL'](a0t['currentLevel'], a0t[Y(0x26a)][Y(0x200)]) && console[Y(0x2bc)](Y(0x2be) + a);
    },
    'error': a => {
        const Z = a0S, b = {
                'ogMFS': function (c, d) {
                    return c <= d;
                }
            };
        b[Z(0x19f)](a0t[Z(0x135)], a0t[Z(0x26a)][Z(0x114)]) && console[Z(0x2bc)](Z(0x23d) + a);
    }
};
class a0u {
    constructor(a = 'ok') {
        const a0 = a0S;
        this[a0(0x242)] = a;
    }
}
class a0v extends a0u {
    constructor(a = 'ok', b = 0x0) {
        const a1 = a0S;
        super(a), this[a1(0x123)] = b;
    }
}
class a0w extends a0u {
    constructor() {
        const a2 = a0S, a = { 'ONBNg': a2(0x236) }, b = a['ONBNg'][a2(0x2bd)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a2(0x15f)] = 0x0;
                continue;
            case '1':
                this[a2(0x171)] = '';
                continue;
            case '2':
                this[a2(0x3cc)] = null;
                continue;
            case '3':
                this[a2(0x3ce)] = '';
                continue;
            case '4':
                this[a2(0x150)] = 0x0;
                continue;
            case '5':
                this[a2(0x3d2)] = null;
                continue;
            case '6':
                this[a2(0x230)] = '';
                continue;
            case '7':
                this[a2(0x3c6)] = '';
                continue;
            case '8':
                this[a2(0x14d)] = 0x0;
                continue;
            case '9':
                this['arch'] = '';
                continue;
            case '10':
                this['os'] = '';
                continue;
            case '11':
                this[a2(0x133)] = null;
                continue;
            case '12':
                this[a2(0x21d)] = '';
                continue;
            case '13':
                this['version'] = a0D['AGENT_VERSION'];
                continue;
            case '14':
                this[a2(0x250)] = 0x0;
                continue;
            case '15':
                super();
                continue;
            }
            break;
        }
    }
}
class a0x extends a0u {
    constructor() {
        const a3 = a0S;
        super(), this[a3(0x2c0)] = { 'usage': 0x0 }, this[a3(0x175)] = {
            'total': 0x0,
            'used': 0x0
        }, this['swap'] = {
            'total': 0x0,
            'used': 0x0
        }, this[a3(0x329)] = {
            'load1': 0x0,
            'load5': 0x0,
            'load15': 0x0
        }, this[a3(0x1ad)] = {
            'total': 0x0,
            'used': 0x0
        }, this[a3(0x32c)] = {
            'up': 0x0,
            'down': 0x0,
            'totalUp': 0x0,
            'totalDown': 0x0
        }, this[a3(0x16f)] = {
            'tcp': 0x0,
            'udp': 0x0
        }, this[a3(0x13a)] = 0x0, this[a3(0x38c)] = 0x0, this[a3(0x303)] = '';
    }
}
class a0y extends a0u {
    constructor() {
        const a4 = a0S;
        super(), this[a4(0x17a)] = '', this[a4(0x1ca)] = 0x0, this[a4(0x147)] = ![], this[a4(0x1c1)] = '';
    }
}
class a0z {
    constructor() {
        const a5 = a0S, a = { 'ssEbU': '0|1|7|6|3|2|5|4' }, b = a[a5(0x338)][a5(0x2bd)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a5(0x130)] = '';
                continue;
            case '1':
                this['path'] = '';
                continue;
            case '2':
                this['mode'] = '';
                continue;
            case '3':
                this['mtime'] = '';
                continue;
            case '4':
                this['owner'] = '';
                continue;
            case '5':
                this['mode_octal'] = '';
                continue;
            case '6':
                this[a5(0x1dc)] = 0x0;
                continue;
            case '7':
                this[a5(0x2d1)] = '';
                continue;
            }
            break;
        }
    }
}
class a0A {
    constructor() {
        const a6 = a0S, a = { 'hAxet': a6(0x390) }, b = a[a6(0x2e0)][a6(0x2bd)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a6(0x2d1)] = '';
                continue;
            case '1':
                this[a6(0x2ea)] = ![];
                continue;
            case '2':
                this[a6(0x2d2)] = '';
                continue;
            case '3':
                this[a6(0x3bf)] = ![];
                continue;
            case '4':
                this['name'] = '';
                continue;
            case '5':
                this['mode'] = '';
                continue;
            case '6':
                this[a6(0x33e)] = ![];
                continue;
            case '7':
                this[a6(0x2c8)] = '';
                continue;
            }
            break;
        }
    }
}
class a0B extends a0u {
    constructor() {
        const a7 = a0S;
        super(), this[a7(0x1ae)] = [];
    }
}
class a0C {
    static [a0S(0x300)]() {
        const a8 = a0S, a = {
                'Uruxe': a8(0x279),
                'cLKVB': a8(0x12d),
                'hMIha': a8(0x387),
                'dxKnT': function (i, j) {
                    return i !== j;
                },
                'wgTHf': a8(0x278)
            }, {
                privateKey: b,
                publicKey: c
            } = a0g[a8(0x18e)](a[a8(0x13f)]), d = b[a8(0x284)]({ 'format': a[a8(0x31d)] }), f = c[a8(0x284)]({ 'format': a8(0x12d) }), g = Buffer[a8(0x398)](d['d'], a[a8(0x3dc)]), h = Buffer[a8(0x398)](f['x'], a[a8(0x3dc)]);
        return (g['length'] !== 0x20 || a[a8(0x320)](h[a8(0x2b3)], 0x20)) && a0t[a8(0x1e5)]('[🚨\x20严重警告]\x20X25519\x20密钥长度非\x2032\x20字节，Noise\x20协议必定崩溃！'), {
            'private_b64': g[a8(0x220)](a[a8(0x2d9)]),
            'public_b64': h[a8(0x220)](a8(0x278))
        };
    }
    static [a0S(0x3f1)](a) {
        const a9 = a0S, b = this['_generateRawKeypair']();
        return {
            'role': a,
            'private_b64': b[a9(0x19a)],
            'public_b64': b[a9(0x1a6)]
        };
    }
    static [a0S(0x3ab)](a = a0S(0x1c9), b = 'Agent') {
        const aa = a0S, c = {
                'control': this[aa(0x3f1)](a),
                'agent': this[aa(0x3f1)](b)
            };
        return c;
    }
}
class a0D {
    static ['Rtimeout'] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0S(0x226)] = (process.env.EXEC_SHELL || a0S(0x3f0))[a0S(0x11d)]() === a0S(0x3f0);
    static [a0S(0x237)] = (process.env.DEBUG || a0S(0x275))[a0S(0x11d)]() === a0S(0x3f0);
    static ['TIMESTAMP_WINDOW'] = parseInt(process.env.TIMESTAMP_WINDOW || a0S(0x280));
    static [a0S(0x134)] = parseInt(process.env.LOG_LEVEL || (this[a0S(0x237)] ? '0' : '2'), 0xa);
    static [a0S(0x391)] = a0D[a0S(0x1f1)](a0S(0x1c7), 'keys/agent_ecdsa_pub.pem') || 'ECDSA公钥内容';
    static [a0S(0x1bf)] = a0D[a0S(0x1f1)](a0S(0x247), a0S(0x170)) || 'ECIES公钥内容';
    static [a0S(0x290)] = process.env.FILE_ROOT || a0k['homedir']();
    static ['MAX_UPLOAD_SIZE'] = parseInt(process.env.MAX_UPLOAD_SIZE || '104857600');
    static [a0S(0x151)] = (process.env.FOLLOW_SYMLINKS || a0S(0x275))[a0S(0x11d)]() === 'true';
    static ['FILE_AUDIT_LOG'] = (process.env.FILE_AUDIT_LOG || a0S(0x3f0))[a0S(0x11d)]() === 'true';
    static [a0S(0x332)] = !![];
    static ['onetasks'] = [];
    static ['crontasks'] = {};
    static [a0S(0x22c)] = ![];
    static [a0S(0x25c)] = parseInt(process.env.TASK_TIMEOUT || a0S(0x1de));
    static [a0S(0x289)] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0S(0x33c)] = [];
    static ['crontasks_log'] = [];
    static [a0S(0x1b2)] = parseInt(process.env.MAX_TASK_LOG || '100');
    static [a0S(0x33f)] = process.env.HOST || a0S(0x31f);
    static [a0S(0x16c)] = parseInt(process.env.PORT || process.env.SERVER_PORT || '8000');
    static ['AGENT_VERSION'] = process.env.AGENT_VERSION || a0S(0x1f3);
    static [a0S(0x232)] = a0g[a0S(0x1af)](0x20)[a0S(0x220)](a0S(0x278));
    static [a0S(0x285)] = a0C[a0S(0x3ab)]();
    static [a0S(0x21b)] = {
        'controller': { 'private': this[a0S(0x285)]['control'][a0S(0x19a)] },
        'agent': { 'public': this[a0S(0x285)][a0S(0x1e2)][a0S(0x1a6)] }
    };
    static [a0S(0x1f1)](a, b) {
        const ab = a0S, c = process.env[a];
        if (c)
            return c;
        const d = a0j[ab(0x3e1)](__dirname, b);
        if (a0h[ab(0x209)](d))
            try {
                return a0h['readFileSync'](d, ab(0x363))['trim']();
            } catch (f) {
            }
        return '';
    }
    static [a0S(0x143)]() {
        const ac = a0S, a = {
                'oYniE': function (b, c) {
                    return b > c;
                },
                'lHoYU': ac(0x380),
                'XRtoR': ac(0x31b),
                'ojzjW': ac(0x1ef),
                'AfMDD': '\x20\x20\x201.\x20设置环境变量:\x20export\x20ECDSA_PUBKEY=\x27-----BEGIN\x20PUBLIC\x20KEY-----\x27...\x27'
            };
        if (!this[ac(0x237)]) {
            const b = [];
            !this['ECDSA_PUBLIC_KEY_PEM'] && b[ac(0x1ed)](ac(0x1eb));
            !this['ECIES_PUBLIC_KEY_PEM'] && b[ac(0x1ed)](ac(0x349));
            if (a[ac(0x25a)](b[ac(0x2b3)], 0x0)) {
                const c = a[ac(0x203)][ac(0x2bd)]('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        a0t['error'](a[ac(0x296)]);
                        continue;
                    case '1':
                        b['forEach'](f => a0t[ac(0x1e5)]('\x20\x20\x20•\x20' + f));
                        continue;
                    case '2':
                        a0t[ac(0x1c3)](a[ac(0x2b0)]);
                        continue;
                    case '3':
                        process['exit'](0x1);
                        continue;
                    case '4':
                        a0t[ac(0x1c3)](a['AfMDD']);
                        continue;
                    case '5':
                        a0t['debug'](ac(0x251));
                        continue;
                    }
                    break;
                }
            }
        }
    }
}
class a0E {
    constructor(a, b) {
        const ad = a0S;
        this[ad(0x1e9)] = null, this[ad(0x22f)] = null;
        a && (this[ad(0x1e9)] = a0g[ad(0x3bd)](a));
        if (b)
            try {
                this[ad(0x22f)] = a0p[ad(0x379)](b[ad(0x18b)]());
            } catch (c) {
                a0t[ad(0x168)](ad(0x287) + c[ad(0x303)]);
            }
    }
    [a0S(0x3ba)](a, b, c) {
        const ae = a0S, d = {
                'VMmDg': function (f, g) {
                    return f(g);
                },
                'uBSpA': function (f, g) {
                    return f / g;
                },
                'fbJXQ': function (f, g) {
                    return f > g;
                },
                'TmsrB': function (f, g) {
                    return f - g;
                },
                'czAZx': function (f, g) {
                    return f - g;
                },
                'OBkAp': 'SHA256'
            };
        if (!this[ae(0x1e9)])
            return !![];
        try {
            const f = d[ae(0x383)](parseInt, b), g = Math[ae(0x29d)](d[ae(0x174)](Date['now'](), 0x3e8));
            if (d[ae(0x241)](Math['abs'](d['TmsrB'](g, f)), a0D[ae(0x169)]))
                throw new Error('Timestamp\x20expired:\x20diff=' + Math['abs'](d[ae(0x1f8)](g, f)) + ae(0x265) + a0D[ae(0x169)] + 's');
            const h = '' + a + b, i = a0p[ae(0x379)](c), j = a0g[ae(0x17f)](d['OBkAp']);
            return j[ae(0x3a5)](h), j['verify'](this[ae(0x1e9)], i);
        } catch (k) {
            throw new Error(ae(0x26d) + k[ae(0x303)]);
        }
    }
    ['encryptResponse'](a) {
        const af = a0S, b = {
                'wBrfN': af(0x24e),
                'OjTTh': function (c, d, f) {
                    return c(d, f);
                }
            };
        if (a0D[af(0x237)] || !this[af(0x22f)])
            return JSON[af(0x254)](a);
        try {
            const c = JSON[af(0x254)](a), d = Buffer[af(0x398)](c, b['wBrfN']), f = Buffer[af(0x398)](this[af(0x22f)]), g = b[af(0x244)](a0o, f, d);
            return Buffer[af(0x398)](g)[af(0x220)](af(0x278));
        } catch (h) {
            const i = {
                '_encrypt_error': h[af(0x303)],
                '_raw': a0D[af(0x237)] ? a : null
            };
            return JSON[af(0x254)](i);
        }
    }
    [a0S(0x1cb)](a, b) {
        const ag = a0S, c = {
                'BXPWO': function (d, f) {
                    return d !== f;
                },
                'KDsTF': ag(0x278),
                'EIXal': ag(0x363),
                'YlqhQ': 'Missing\x20required\x20AES-GCM\x20fields\x20(nonce,\x20tag,\x20ciphertext)\x20in\x20payload.',
                'AbGdA': 'aes-256-gcm'
            };
        if (!b || c[ag(0x240)](b['length'], 0x20))
            throw new Error(ag(0x318));
        try {
            const d = Buffer[ag(0x398)](a, c['KDsTF'])[ag(0x220)](c[ag(0x155)]), f = JSON[ag(0x272)](d);
            if (!f[ag(0x36c)] || !f[ag(0x3f8)] || !f[ag(0x3c2)])
                throw new Error(c[ag(0x1d7)]);
            const g = Buffer[ag(0x398)](f[ag(0x36c)], c['KDsTF']), h = Buffer[ag(0x398)](f[ag(0x3f8)], c[ag(0x28d)]), i = Buffer[ag(0x398)](f[ag(0x3c2)], c[ag(0x28d)]), j = a0g[ag(0x215)](c[ag(0x231)], b, g);
            j[ag(0x2b8)](h);
            let k = j[ag(0x3a5)](i, null, c[ag(0x155)]);
            return k += j['final']('utf8'), k;
        } catch (l) {
            throw new Error(ag(0x3f3) + l[ag(0x303)]);
        }
    }
}
function a0F(a) {
    const ah = a0S, b = {
            'NqUqY': ah(0x330),
            'dGjDc': ah(0x27e),
            'OWOkK': function (c, d) {
                return c === d;
            },
            'enRhw': ah(0x17e),
            'MzIkH': function (c, d) {
                return c === d;
            },
            'wsVcw': ah(0x37c),
            'HcaOM': ah(0x119),
            'tSeuR': ah(0x363),
            'ULRqO': function (c, d) {
                return c === d;
            },
            'eePci': ah(0x3b5),
            'vcUMq': function (c) {
                return c();
            },
            'BdFFg': 'OPTIONS',
            'Ufeoy': ah(0x1ff),
            'mXACd': function (c) {
                return c();
            },
            'ieERc': ah(0x368),
            'kyrJd': 'X-Timestamp',
            'kzkWL': ah(0x223),
            'vwAxq': ah(0x3aa),
            'JQMYT': ah(0x124),
            'JFcEg': function (c, d) {
                return c === d;
            },
            'wSGFm': function (c, d) {
                return c === d;
            },
            'SUHCO': ah(0x36d),
            'DNwdW': ah(0x3f0),
            'cgKms': ah(0x278),
            'vTErD': 'eyJ',
            'wQUDO': ah(0x24e),
            'LtaXh': function (c, d) {
                return c === d;
            }
        };
    return async (c, d, f) => {
        const ai = ah;
        if (c[ai(0x2c8)][ai(0x377)](ai(0x172)) || b[ai(0x1f5)]((c['headers'][ai(0x188)] || '')[ai(0x11d)](), b[ai(0x1c2)]))
            return b[ai(0x359)](f);
        if (b[ai(0x39a)](c[ai(0x266)], b[ai(0x3c9)]) || c[ai(0x266)] === b[ai(0x198)])
            return b[ai(0x14f)](f);
        if (!a0D[ai(0x237)] && !c[ai(0x3b7)][ai(0x1e3)]) {
            const h = c[ai(0x3b7)][ai(0x3fd)] || c[ai(0x3b7)][ai(0x205)], i = c[ai(0x3b7)][b[ai(0x3c4)]] || c[ai(0x3b7)][b[ai(0x282)]], j = c['headers'][b[ai(0x399)]] || c['headers'][b[ai(0x355)]];
            if (!h || !i || !j)
                return d[ai(0x242)](0x191)[ai(0x19e)]({ 'error': b['JQMYT'] });
            try {
                a[ai(0x3ba)](h, i, j);
            } catch (k) {
                return d[ai(0x242)](0x191)['json']({ 'error': ai(0x26d) + k[ai(0x303)] });
            }
        }
        if (c['body'] && b['JFcEg'](typeof c[ai(0x160)], b[ai(0x110)])) {
            const l = b['wSGFm']((c[ai(0x3b7)][b[ai(0x326)]] || '')['toLowerCase'](), b[ai(0x373)]);
            try {
                if (l) {
                    const m = Buffer[ai(0x398)](a0D[ai(0x232)], b[ai(0x3f2)]), n = a[ai(0x1cb)](c['body'], m);
                    c['body'] = JSON['parse'](n);
                } else {
                    if (c['body'][ai(0x377)](b[ai(0x317)])) {
                        const o = Buffer['from'](c['body'], b[ai(0x3f2)])['toString'](b[ai(0x2f8)]);
                        c[ai(0x160)] = JSON[ai(0x272)](o);
                    } else {
                        if (c[ai(0x160)][ai(0x18b)]()[ai(0x377)]('{') || c['body'][ai(0x18b)]()[ai(0x377)]('['))
                            c[ai(0x160)] = JSON['parse'](c[ai(0x160)]);
                        else {
                            if (b['LtaXh'](c[ai(0x160)][ai(0x18b)](), ''))
                                c[ai(0x160)] = {};
                        }
                    }
                }
            } catch (p) {
                return a0t[ai(0x1e5)](ai(0x3d8) + p[ai(0x303)]), d[ai(0x242)](0x190)['json']({ 'error': 'Invalid\x20body\x20format:\x20' + p['message'] });
            }
        }
        const g = d[ai(0x353)];
        d[ai(0x353)] = function (q) {
            const aj = ai;
            if (d[aj(0x1b4)](b[aj(0x393)]) && d[aj(0x1b4)](b[aj(0x393)])['includes'](b[aj(0x3f5)]))
                try {
                    const r = b[aj(0x39a)](typeof q, b[aj(0x110)]) ? JSON[aj(0x272)](q) : q, s = a['encryptResponse'](r), t = b['MzIkH'](typeof s, b[aj(0x110)]) ? s : JSON['stringify'](s);
                    return !a0D[aj(0x237)] && (d[aj(0x1e8)](b[aj(0x146)], aj(0x3f0)), d[aj(0x1e8)](aj(0x136), a0D[aj(0x2ee)])), d[aj(0x1e8)](b[aj(0x33d)], Buffer[aj(0x344)](t, b[aj(0x225)])[aj(0x220)]()), g[aj(0x22a)](this, t);
                } catch (u) {
                    if (a0D['DEBUG'])
                        a0t['error'](aj(0x27d) + u[aj(0x303)]);
                }
            return g[aj(0x22a)](this, q);
        }, f();
    };
}
class a0G {
    constructor() {
        const ak = a0S;
        this[ak(0x310)] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[ak(0x2ae)] = 0x0, this[ak(0x2e7)] = 0x0, this[ak(0x38e)] = Date['now']() / 0x3e8;
    }
    async [a0S(0x12f)]() {
        const al = a0S, a = {
                'wBsfm': al(0x2cb),
                'qTcsV': al(0x363),
                'WupUB': function (d, f) {
                    return d === f;
                },
                'sVRJs': al(0x35f),
                'UsiJo': function (d, f, g) {
                    return d(f, g);
                },
                'paFFI': function (d, f, g) {
                    return d(f, g);
                },
                'qBxKJ': function (d, f, g) {
                    return d(f, g);
                },
                'XweBQ': al(0x1be),
                'ACBxp': '/sys/fs/cgroup/memory/memory.usage_in_bytes',
                'TcAwS': function (d, f) {
                    return d > f;
                },
                'zoJxx': function (d, f) {
                    return d === f;
                },
                'TVwDD': function (d, f) {
                    return d(f);
                },
                'PXntn': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0i[al(0x31a)](a[al(0x3be)], a['qTcsV']))[al(0x18b)]();
            b = a[al(0x276)](d, a[al(0x262)]) ? null : a['UsiJo'](parseInt, d, 0xa), c = a[al(0x38b)](parseInt, (await a0i[al(0x31a)](al(0x19b), a[al(0x1e7)]))[al(0x18b)](), 0xa);
        } catch {
            try {
                b = a[al(0x252)](parseInt, (await a0i['readFile'](a[al(0x25f)], a[al(0x1e7)]))[al(0x18b)](), 0xa), c = a[al(0x28a)](parseInt, (await a0i[al(0x31a)](a[al(0x288)], a['qTcsV']))[al(0x18b)](), 0xa);
                if (a[al(0x2c5)](b, 0x7ffffffffffff000))
                    b = null;
            } catch {
                const f = await a0n[al(0x229)]();
                b = f['total'], c = f[al(0x3b6)];
            }
        }
        if (a[al(0x276)](b, null)) {
            const g = await a0n[al(0x229)]();
            b = g[al(0x1f4)], (a[al(0x11e)](c, null) || a[al(0x1a4)](isNaN, c)) && (c = g[al(0x3b6)]);
        }
        return {
            'total': b,
            'used': c,
            'available': a[al(0x375)](b, c),
            'free': a[al(0x375)](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0S(0x32e)]() {
        const am = a0S, [a, b, c, d] = await Promise[am(0x195)]([
                a0n['cpu'](),
                this[am(0x12f)](),
                a0n[am(0x194)](),
                a0n['networkInterfaces']()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise[am(0x195)]([
                this[am(0x13e)](),
                this[am(0x2f4)]()
            ]);
        } catch (h) {
            a0t[am(0x1c3)]('获取\x20IP\x20地址失败:\x20' + h[am(0x303)], 0x1);
        }
        return {
            'arch': a0k[am(0x2d3)](),
            'cpu_cores': a[am(0x1ba)],
            'cpu_name': a[am(0x21a)],
            'disk_total': (await a0n[am(0x336)]())[0x0]?.['size'] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b[am(0x1f4)],
            'os': c[am(0x1fc)] + '\x20' + c[am(0x1b7)],
            'kernel_version': c[am(0x1f6)],
            'swap_total': b['swaptotal'],
            'version': a0D['AGENT_VERSION'],
            'virtualization': await this[am(0x21c)](),
            'session_key': a0D[am(0x232)],
            'noise_key': a0D['NOISE_KEY']
        };
    }
    [a0S(0x131)]() {
        const an = a0S, a = {
                'fLxah': an(0x3c3),
                'gNvHL': function (c, d) {
                    return c === d;
                }
            }, b = a0k[an(0x27b)]();
        for (const c of Object['keys'](b)) {
            for (const d of b[c]) {
                const f = d[an(0x370)] === a[an(0x32d)] || a[an(0x16d)](d[an(0x370)], 0x4);
                if (f && !d[an(0x14b)]) {
                    if (!/^10\./['test'](d['address']) && !/^192\.168\./[an(0x309)](d[an(0x152)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./['test'](d[an(0x152)]))
                        return d[an(0x152)];
                }
            }
        }
        return null;
    }
    async [a0S(0x13e)]() {
        const ao = a0S, a = {
                'ZcOYA': ao(0x148),
                'yRMyw': ao(0x2a9),
                'tKyyh': ao(0x313),
                'RRwMn': ao(0x3fc),
                'xJgfv': 'https://ipinfo.io/ip',
                'iOQQB': 'https://myexternalip.com/raw'
            }, b = [
                a['ZcOYA'],
                ao(0x153),
                a['yRMyw'],
                a['tKyyh'],
                a[ao(0x1bb)],
                a['xJgfv'],
                a[ao(0x3b8)]
            ];
        for (const d of b) {
            try {
                const f = await this[ao(0x23b)](d, 0x4);
                if (f && this[ao(0x25d)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[ao(0x131)]();
        if (c && this[ao(0x25d)](c))
            return c;
        return null;
    }
    [a0S(0x3e8)]() {
        const ap = a0S, a = {
                'cStHc': function (c, d) {
                    return c === d;
                },
                'JhIgG': ap(0x20c),
                'uBgOO': 'fe80:'
            }, b = a0k[ap(0x27b)]();
        for (const c of Object[ap(0x156)](b)) {
            for (const d of b[c]) {
                const f = a[ap(0x248)](d['family'], a[ap(0x1b8)]) || a[ap(0x248)](d[ap(0x370)], 0x6);
                if (f && !d[ap(0x14b)]) {
                    if (!d['address'][ap(0x11d)]()[ap(0x377)](a['uBgOO']))
                        return d[ap(0x152)];
                }
            }
        }
        return null;
    }
    async [a0S(0x2f4)]() {
        const aq = a0S, a = {
                'URQnL': 'https://api6.ipify.org',
                'BdxYd': aq(0x153),
                'fGGzV': aq(0x2ba)
            }, b = this[aq(0x3e8)]();
        if (b && this[aq(0x3eb)](b))
            return b;
        const c = [
            a[aq(0x297)],
            a[aq(0x2e5)],
            a['fGGzV']
        ];
        for (const d of c) {
            try {
                const f = await this['fetchIP'](d, 0x6);
                if (f && this[aq(0x3eb)](f))
                    return f;
            } catch (g) {
                a0t[aq(0x1c3)](aq(0x239) + d + '\x20失败:\x20' + g[aq(0x303)]);
                continue;
            }
        }
        return null;
    }
    async ['fetchIP'](a, b = 0x0) {
        const ar = a0S, c = {
                'OvbjY': ar(0x294),
                'KkDAy': function (d, f) {
                    return d !== f;
                },
                'rGHwH': function (d, f) {
                    return d(f);
                },
                'liVSv': ar(0x350),
                'hVHEo': function (d, f) {
                    return d(f);
                },
                'hPRPZ': ar(0x20d),
                'yxrqF': ar(0x1e5)
            };
        return new Promise((d, f) => {
            const au = ar, g = {
                    'NxHoR': function (k, l) {
                        const as = a0b;
                        return c[as(0x1cc)](k, l);
                    },
                    'gpqdg': function (k, l) {
                        const at = a0b;
                        return c[at(0x34f)](k, l);
                    },
                    'HeCXf': c[au(0x3f4)]
                }, h = c[au(0x273)](require, c['hPRPZ']), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': au(0x2cd) }
                }, j = h[au(0x1b4)](a, i, k => {
                    const av = au;
                    let l = '';
                    if (g['NxHoR'](k['statusCode'], 0xc8)) {
                        g[av(0x384)](f, new Error(av(0x15e) + k[av(0x3af)]));
                        return;
                    }
                    k['on'](av(0x2e8), m => l += m), k['on'](g[av(0x212)], () => d(l[av(0x18b)]()));
                });
            j['on'](c[au(0x2d6)], f), j[au(0x360)](0x1388, () => {
                const aw = au;
                j[aw(0x346)](), f(new Error(c[aw(0x1b1)]));
            });
        });
    }
    [a0S(0x25d)](a) {
        const ax = a0S;
        return /^(\d{1,3}\.){3}\d{1,3}$/[ax(0x309)](a);
    }
    [a0S(0x3eb)](a) {
        const ay = a0S;
        if (!/^[0-9a-fA-F:]+$/[ay(0x309)](a) || !a['includes'](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i['test'](a))
            return ![];
        return !![];
    }
    async [a0S(0x16b)]() {
        const az = a0S, a = {
                'zBazm': function (m, n) {
                    return m - n;
                },
                'ibluH': function (m, n) {
                    return m - n;
                },
                'JcZDy': function (m, n) {
                    return m / n;
                },
                'xPYSl': function (m, n) {
                    return m * n;
                },
                'PNfqW': function (m, n) {
                    return m / n;
                },
                'IULTd': function (m, n) {
                    return m * n;
                },
                'mMSBf': function (m, n) {
                    return m * n;
                }
            }, [b, c, d, f] = await Promise[az(0x195)]([
                a0n[az(0x36e)](),
                a0n[az(0x229)](),
                a0n[az(0x2db)](),
                a0n[az(0x36e)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = Date[az(0x179)]() / 0x3e8, i = a[az(0x2c3)](h, this['lastNetworkTime']), j = a[az(0x2c3)](g['tx_bytes'], this['lastNetworkStats']['tx']), k = a[az(0x1f7)](g['rx_bytes'], this[az(0x310)]['rx']);
        this[az(0x2ae)] += j, this[az(0x2e7)] += k, this['lastNetworkStats'] = {
            'tx': g[az(0x1b3)],
            'rx': g[az(0x372)]
        }, this[az(0x38e)] = h;
        const l = await a0n['processes']();
        return {
            'cpu': { 'usage': Math[az(0x14a)](b[az(0x36e)]) },
            'ram': {
                'total': c['total'],
                'used': c[az(0x3b6)]
            },
            'swap': {
                'total': c[az(0x376)],
                'used': c['swapused']
            },
            'load': {
                'load1': a[az(0x396)](Math[az(0x14a)](a[az(0x29b)](f['avgLoad'], 0x64)), 0x64),
                'load5': a[az(0x39b)](Math['round'](a[az(0x165)](f[az(0x255)], 0x64)), 0x64),
                'load15': a[az(0x39b)](Math['round'](a['mMSBf'](f['avgLoad'], 0x64)), 0x64)
            },
            'disk': await this[az(0x3a9)](),
            'network': {
                'up': Math[az(0x14a)](j / i),
                'down': Math[az(0x14a)](k / i),
                'totalUp': this[az(0x2ae)],
                'totalDown': this[az(0x2e7)]
            },
            'connections': await this[az(0x140)](),
            'uptime': a0k[az(0x13a)](),
            'process': l?.[az(0x195)] || 0x0,
            'message': ''
        };
    }
    async ['_getVirtualization']() {
        const aA = a0S, a = {
                'mWMai': aA(0x2f0),
                'RMbCW': aA(0x22d),
                'oufAk': 'utf8',
                'sgOBW': 'docker',
                'PCDKX': aA(0x2e2),
                'ZEDBz': aA(0x260),
                'dwDoc': aA(0x271),
                'nkikJ': aA(0x2eb),
                'TNfiJ': '/proc/self/mountinfo',
                'LtYJi': aA(0x3b1),
                'IxIhH': 'workdir=/var/lib/docker',
                'XrdJO': aA(0x17d),
                'TZSTg': '/pods/',
                'Nhvmr': aA(0x24a),
                'SXyAi': '/proc/1/environ',
                'TWyWS': aA(0x3f7),
                'hSPKd': '/proc/cpuinfo',
                'wndqz': aA(0x342),
                'yEILW': aA(0x33a),
                'khOwu': aA(0x311)
            };
        try {
            if (a0h[aA(0x209)](a[aA(0x3a4)]))
                return aA(0x17d);
            if (a0h['existsSync'](aA(0x29a)))
                return aA(0x129);
            if (a0h[aA(0x209)](a[aA(0x28b)])) {
                const b = a0h['readFileSync'](aA(0x22d), a[aA(0x321)])['toLowerCase']();
                if (b[aA(0x15b)](a['sgOBW']) || b['includes'](aA(0x37e)))
                    return 'Docker';
                else {
                    if (b['includes'](a[aA(0x19d)]))
                        return a[aA(0x2d7)];
                    else {
                        if (b[aA(0x15b)](a['dwDoc']))
                            return a[aA(0x3de)];
                    }
                }
            }
            if (a0h[aA(0x209)]('/proc/self/mountinfo')) {
                const c = a0h['readFileSync'](a[aA(0x139)], aA(0x363));
                if (c[aA(0x15b)](a[aA(0x26f)]) || c[aA(0x15b)](a[aA(0x382)]))
                    return a[aA(0x2f3)];
                else {
                    if (c[aA(0x15b)](a[aA(0x352)]) || c[aA(0x15b)](a['Nhvmr']))
                        return a[aA(0x2d7)];
                }
            }
            if (a0h['existsSync'](a[aA(0x2a7)])) {
                const d = a0h[aA(0x1f9)](aA(0x2e1), aA(0x363));
                if (d['includes'](a[aA(0x243)]))
                    return a['nkikJ'];
            }
            if (a0h[aA(0x209)](a[aA(0x20f)])) {
                const f = a0h['readFileSync'](a[aA(0x20f)], a['oufAk']);
                if (f[aA(0x15b)](a['wndqz']) || f[aA(0x15b)](a[aA(0x3ff)]))
                    return aA(0x342);
            }
        } catch (g) {
        }
        return a[aA(0x122)];
    }
    async [a0S(0x3a9)]() {
        const aB = a0S;
        try {
            const a = await a0n[aB(0x336)](), b = a[aB(0x196)]((d, f) => d + f['size'], 0x0), c = a[aB(0x196)]((d, f) => d + f[aB(0x3b6)], 0x0);
            return {
                'total': b,
                'used': c
            };
        } catch {
            return {
                'total': 0x0,
                'used': 0x0
            };
        }
    }
    async [a0S(0x140)]() {
        const aC = a0S;
        try {
            const a = await a0n[aC(0x3ef)](), b = a[aC(0x26e)](d => d['protocol'] === aC(0x1ac))[aC(0x2b3)], c = a['filter'](d => d[aC(0x249)] === aC(0x1a9))[aC(0x2b3)];
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
class a0H {
    static async [a0S(0x3e2)](a, b = {}) {
        const aD = a0S, c = {
                'PXLbK': function (d, f) {
                    return d - f;
                },
                'QNxEA': function (d, f) {
                    return d === f;
                },
                'TXElM': aD(0x14e),
                'UsZFo': function (d, f) {
                    return d(f);
                },
                'kmQla': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'Zwwqi': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[aD(0x2d0)](),
                env: env = {},
                timeout: timeout = a0D[aD(0x299)]
            } = b;
        return new Promise(d => {
            const aE = aD, f = Date['now'](), g = c[aE(0x3cf)](a0l, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c['Zwwqi'](timeout, 0x3e8),
                    'maxBuffer': 0xa * 0x400 * 0x400
                }, (h, i, j) => {
                    const aF = aE, k = c[aF(0x3ca)](Date['now'](), f), l = h && h[aF(0x126)] && h['signal'];
                    let m = i || '';
                    if (j)
                        m += j;
                    let n = 0x0;
                    if (h) {
                        if (l)
                            n = 0x7c;
                        else
                            c[aF(0x1da)](typeof h['code'], c[aF(0x274)]) ? n = h[aF(0x2d4)] : n = -0x1;
                    }
                    c['UsZFo'](d, {
                        'result': m,
                        'exitcode': n,
                        'timeout': l,
                        'cmd': a
                    });
                });
        });
    }
}
class a0I {
    static async [a0S(0x141)](a, b = ![]) {
        const aG = a0S, c = {
                'gKAiL': aG(0x2af),
                'EuIUP': function (h, i) {
                    return h(i);
                },
                'rZYeL': function (h, i) {
                    return h || i;
                },
                'NSArJ': aG(0x159),
                'OjCXX': 'Path\x20not\x20found'
            }, d = a0j[aG(0x199)](a0D['FILE_ROOT'], c[aG(0x2ed)](a, '.'));
        if (!d[aG(0x377)](a0D['FILE_ROOT']))
            throw new Error(c[aG(0x295)]);
        if (!a0h[aG(0x209)](d))
            throw new Error(c[aG(0x340)]);
        const f = [], g = h => {
                const aH = aG, i = a0h[aH(0x137)](h);
                for (const j of i) {
                    const k = a0j[aH(0x3e1)](h, j), l = a0h[aH(0x138)](k), m = new a0z();
                    m[aH(0x130)] = j, m[aH(0x2c8)] = a0j[aH(0x2fe)](a0D['FILE_ROOT'], k), m['type'] = l[aH(0x214)]() ? 'directory' : c[aH(0x166)], m[aH(0x1dc)] = l['size'], m[aH(0x1fe)] = l[aH(0x1fe)][aH(0x365)](), m[aH(0x37d)] = this[aH(0x182)](l['mode'], l[aH(0x214)]()), m['mode_octal'] = '0o' + (l[aH(0x37d)] & 0x1ff)[aH(0x220)](0x8), m[aH(0x12c)] = l[aH(0x35a)] + ':' + l[aH(0x2c2)], f[aH(0x1ed)](m), b && l[aH(0x214)]() && c['EuIUP'](g, k);
                }
            };
        return g(d), f;
    }
    static async ['getFilePermissions'](a) {
        const aI = a0S, b = {
                'iEgnM': function (d, f) {
                    return d & f;
                },
                'wiaoZ': aI(0x394)
            }, c = [];
        for (const d of a) {
            const f = a0j[aI(0x199)](a0D[aI(0x290)], d);
            if (!f['startsWith'](a0D[aI(0x290)]))
                continue;
            try {
                const g = a0h[aI(0x138)](f), h = this[aI(0x261)](f, a0h['constants'][aI(0x2c1)]), i = this[aI(0x261)](f, a0h['constants']['W_OK']), j = this['_checkAccess'](f, a0h[aI(0x15a)][aI(0x216)]), k = new a0A();
                k[aI(0x2c8)] = a0j[aI(0x2fe)](a0D[aI(0x290)], f), k['name'] = a0j[aI(0x224)](f), k[aI(0x37d)] = this[aI(0x182)](g['mode'], g['isDirectory']()), k[aI(0x2d2)] = '0o' + b[aI(0x1a3)](g[aI(0x37d)], 0x1ff)[aI(0x220)](0x8), k['type'] = g[aI(0x214)]() ? b[aI(0x1e4)] : aI(0x2af), k['readable'] = h, k[aI(0x33e)] = i, k[aI(0x2ea)] = j, c['push'](k);
            } catch (l) {
            }
        }
        return c;
    }
    static ['_checkAccess'](a, b) {
        const aJ = a0S;
        try {
            return a0h[aJ(0x264)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static [a0S(0x2e3)](a) {
        const aK = a0S, b = {
                'CdTEn': function (c, d) {
                    return c === d;
                },
                'xHioc': 'number',
                'dvaCz': aK(0x17e),
                'FkhaV': aK(0x28e)
            };
        if (b[aK(0x2f9)](typeof a, b[aK(0x305)]))
            return a;
        if (b[aK(0x2f9)](typeof a, b[aK(0x2ca)])) {
            const c = a['trim']();
            if (/^[0-7]{3,4}$/[aK(0x309)](c))
                return parseInt(c, 0x8);
        }
        throw new Error(b[aK(0x25b)]);
    }
    static [a0S(0x182)](a, b) {
        const aL = a0S, c = b ? 'd' : '-', d = [
                'r',
                'w',
                'x'
            ], f = (a & 0x1ff)['toString'](0x8)[aL(0x192)](0x3, '0');
        let g = c;
        for (const h of f) {
            const i = parseInt(h, 0xa);
            g += d['map']((j, k) => i & 0x4 >> k ? j : '-')[aL(0x3e1)]('');
        }
        return g;
    }
    static async ['setFilePermissions'](a, b = ![]) {
        const aM = a0S, c = {
                'NeoKK': function (g, h) {
                    return g(h);
                },
                'QPHvq': function (g, h) {
                    return g(h);
                },
                'sRmhY': aM(0x3f9),
                'AKTFa': function (g, h) {
                    return g(h);
                }
            }, d = [];
        for (const [g, h] of Object[aM(0x3e5)](a)) {
            const i = a0j['resolve'](a0D[aM(0x290)], g);
            if (!i[aM(0x377)](a0D[aM(0x290)])) {
                d[aM(0x1ed)]({
                    'path': g,
                    'requested': c['NeoKK'](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c['sRmhY']
                });
                continue;
            }
            try {
                const j = this[aM(0x2e3)](h), k = m => {
                        const aN = aM;
                        a0h[aN(0x219)](m, j);
                    };
                if (b && a0h[aM(0x209)](i) && a0h[aM(0x138)](i)['isDirectory']()) {
                    const m = n => {
                        const aO = aM;
                        k(n);
                        const o = a0h['readdirSync'](n);
                        for (const p of o) {
                            const q = a0j[aO(0x3e1)](n, p);
                            a0h[aO(0x138)](q)[aO(0x214)]() ? c[aO(0x1b5)](m, q) : c[aO(0x158)](k, q);
                        }
                    };
                    m(i);
                } else
                    c['AKTFa'](k, i);
                const l = j['toString'](0x8);
                d['push']({
                    'path': g,
                    'requested': c['QPHvq'](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[aM(0x1ed)]({
                    'path': g,
                    'requested': c[aM(0x158)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': aM(0x1e5),
                    'message': n['message']
                });
            }
        }
        const f = d[aM(0x26e)](o => o[aM(0x242)] === 'ok')[aM(0x2b3)];
        return {
            'status': 'ok',
            'total': d[aM(0x2b3)],
            'success': f,
            'results': d
        };
    }
    static async [a0S(0x31a)](a) {
        const aP = a0S, b = {
                'GjcFE': aP(0x159),
                'FEqEL': function (h, i) {
                    return h > i;
                },
                'dasOl': function (h, i) {
                    return h * i;
                },
                'QfDvx': aP(0x363),
                'bwRta': 'base64',
                'mLsvl': 'utf-8'
            }, c = a0j[aP(0x199)](a0D['FILE_ROOT'], a);
        if (!c[aP(0x377)](a0D['FILE_ROOT']))
            throw new Error(b['GjcFE']);
        const d = a0h[aP(0x138)](c);
        if (b[aP(0x1ee)](d['size'], b[aP(0x322)](0x400, 0x400)))
            throw new Error(aP(0x173));
        const f = a0h['readFileSync'](c), g = this[aP(0x1c8)](f);
        return {
            'status': 'ok',
            'path': a0j[aP(0x2fe)](a0D[aP(0x290)], c),
            'content': g ? a0p['fromByteArray'](f) : f[aP(0x220)](b[aP(0x112)]),
            'encoding': g ? b[aP(0x24f)] : b[aP(0x2aa)],
            'is_binary': g,
            'size': d[aP(0x1dc)]
        };
    }
    static [a0S(0x1c8)](a) {
        const aQ = a0S, b = {
                'AASwz': function (c, d) {
                    return c === d;
                },
                'MmHDp': function (c, d) {
                    return c < d;
                }
            };
        if (!a || b['AASwz'](a[aQ(0x2b3)], 0x0))
            return ![];
        for (let c = 0x0; b['MmHDp'](c, Math[aQ(0x167)](a[aQ(0x2b3)], 0x200)); c++) {
            if (a[c] === 0x0)
                return !![];
        }
        return ![];
    }
    static async [a0S(0x2c4)](a, b, c, d = null, f = null) {
        const aR = a0S, g = {
                'JxeUI': aR(0x159),
                'voNxu': function (l, m) {
                    return l > m;
                },
                'AAOkA': aR(0x173),
                'pPjiY': function (l, m) {
                    return l !== m;
                },
                'UxcPZ': function (l, m) {
                    return l(m);
                },
                'JvWCd': aR(0x30f),
                'AIhVc': '.upload_chunks',
                'OwOGf': function (l, m) {
                    return l === m;
                },
                'hQlKR': function (l, m) {
                    return l < m;
                }
            }, h = a0j[aR(0x199)](a0D[aR(0x290)], a);
        let j = h;
        b && (j = a0j[aR(0x3e1)](h, b));
        if (!j[aR(0x377)](a0D[aR(0x290)]))
            throw new Error(g[aR(0x16e)]);
        !a0h[aR(0x209)](a0j['dirname'](j)) && a0h[aR(0x323)](a0j[aR(0x18c)](j), { 'recursive': !![] });
        const k = a0p[aR(0x379)](c);
        if (g[aR(0x222)](k[aR(0x2b3)], a0D[aR(0x21f)]))
            throw new Error(g[aR(0x286)]);
        if (d !== null && g[aR(0x1e1)](f, null)) {
            const l = g[aR(0x35b)](Number, d), m = g['UxcPZ'](Number, f);
            if (Number['isNaN'](l) || Number[aR(0x23f)](m))
                throw new Error(g['JvWCd']);
            const n = a0j[aR(0x3e1)](a0j[aR(0x18c)](j), g['AIhVc'], a0j[aR(0x224)](j));
            !a0h[aR(0x209)](n) && a0h[aR(0x323)](n, { 'recursive': !![] });
            const o = a0j[aR(0x3e1)](n, aR(0x31e) + l);
            a0h[aR(0x3cd)](o, k);
            const p = a0h[aR(0x137)](n)[aR(0x26e)](s => s[aR(0x377)]('chunk_')), q = p[aR(0x2b3)], r = g['OwOGf'](q, m);
            if (r) {
                const s = a0h[aR(0x127)](j);
                for (let t = 0x0; g['hQlKR'](t, m); t++) {
                    const u = a0j[aR(0x3e1)](n, aR(0x31e) + t);
                    if (!a0h[aR(0x209)](u)) {
                        s['close']();
                        throw new Error(aR(0x29e) + t);
                    }
                    s[aR(0x3ac)](a0h[aR(0x1f9)](u));
                }
                s[aR(0x350)]();
                for (const v of a0h[aR(0x137)](n)) {
                    a0h['unlinkSync'](a0j[aR(0x3e1)](n, v));
                }
                a0h['rmdirSync'](n, { 'recursive': !![] });
            }
            return {
                'status': 'ok',
                'path': a0j['relative'](a0D[aR(0x290)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0h[aR(0x3cd)](j, k), {
            'status': 'ok',
            'path': a0j[aR(0x2fe)](a0D[aR(0x290)], j),
            'received': k[aR(0x2b3)],
            'total': k[aR(0x2b3)],
            'chunked': ![]
        };
    }
    static async [a0S(0x38f)](a) {
        const aS = a0S, b = {
                'edmAg': aS(0x159),
                'oKdvN': aS(0x3e9)
            }, c = a0j[aS(0x199)](a0D[aS(0x290)], a);
        if (!c['startsWith'](a0D['FILE_ROOT']))
            throw new Error(b[aS(0x1bd)]);
        if (!a0h['existsSync'](c))
            throw new Error(b[aS(0x3d3)]);
        const d = a0h[aS(0x138)](c), f = a0h[aS(0x1f9)](c), g = a0p['fromByteArray'](f);
        return {
            'path': a0j[aS(0x2fe)](a0D[aS(0x290)], c),
            'content': g,
            'size': d['size']
        };
    }
    static async [a0S(0x2ec)](a) {
        const aT = a0S, b = {
                'zZaGe': aT(0x3f9),
                'kCpce': aT(0x234),
                'UrizR': 'not_found',
                'Riekx': aT(0x1e5)
            }, c = [];
        for (const d of a) {
            const f = a0j['resolve'](a0D[aT(0x290)], d);
            if (!f[aT(0x377)](a0D[aT(0x290)])) {
                c[aT(0x1ed)]({
                    'path': d,
                    'status': b['zZaGe']
                });
                continue;
            }
            try {
                if (a0h[aT(0x209)](f)) {
                    const g = a0h[aT(0x138)](f);
                    g[aT(0x214)]() ? a0h[aT(0x34e)](f, { 'recursive': !![] }) : a0h['unlinkSync'](f), c[aT(0x1ed)]({
                        'path': d,
                        'status': b[aT(0x1dd)]
                    });
                } else
                    c[aT(0x1ed)]({
                        'path': d,
                        'status': b[aT(0x2f5)]
                    });
            } catch (h) {
                c['push']({
                    'path': d,
                    'status': b['Riekx'],
                    'message': h[aT(0x303)]
                });
            }
        }
        return c;
    }
    static async [a0S(0x3ea)](a) {
        const aU = a0S, b = {
                'oOKOB': 'access_denied',
                'EetMV': aU(0x1e5)
            }, c = [];
        for (const [d, f] of Object[aU(0x3e5)](a)) {
            const g = a0j[aU(0x199)](a0D['FILE_ROOT'], d), h = a0j[aU(0x199)](a0D[aU(0x290)], f);
            if (!g[aU(0x377)](a0D[aU(0x290)]) || !h['startsWith'](a0D['FILE_ROOT'])) {
                c[aU(0x1ed)]({
                    'from': d,
                    'to': f,
                    'status': b['oOKOB']
                });
                continue;
            }
            try {
                const i = a0j[aU(0x18c)](h);
                !a0h[aU(0x209)](i) && a0h[aU(0x323)](i, { 'recursive': !![] }), a0h[aU(0x1df)](g, h), c[aU(0x1ed)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[aU(0x1ed)]({
                    'from': d,
                    'to': f,
                    'status': b[aU(0x1f0)],
                    'message': j[aU(0x303)]
                });
            }
        }
        return c;
    }
    static async [a0S(0x2ff)](a) {
        const aV = a0S, b = {
                'sEUYL': function (d, f, g) {
                    return d(f, g);
                },
                'EhsSv': 'not_found',
                'tIBsW': function (d, f, g) {
                    return d(f, g);
                },
                'NbKra': aV(0x1e5)
            }, c = [];
        for (const [d, f] of Object[aV(0x3e5)](a)) {
            const g = a0j[aV(0x199)](a0D[aV(0x290)], d), h = a0j[aV(0x199)](a0D[aV(0x290)], f);
            if (!g[aV(0x377)](a0D['FILE_ROOT']) || !h['startsWith'](a0D['FILE_ROOT'])) {
                c[aV(0x1ed)]({
                    'from': d,
                    'to': f,
                    'status': 'access_denied'
                });
                continue;
            }
            try {
                if (!a0h['existsSync'](g)) {
                    c['push']({
                        'from': d,
                        'to': f,
                        'status': b[aV(0x233)]
                    });
                    continue;
                }
                const i = a0j[aV(0x18c)](h);
                !a0h[aV(0x209)](i) && a0h['mkdirSync'](i, { 'recursive': !![] });
                const j = a0h[aV(0x138)](g);
                if (j['isDirectory']()) {
                    if (a0h['cpSync'])
                        a0h['cpSync'](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const aW = aV;
                            if (a0h['statSync'](l)['isDirectory']()) {
                                if (!a0h['existsSync'](m))
                                    a0h[aW(0x323)](m, { 'recursive': !![] });
                                for (const n of a0h[aW(0x137)](l)) {
                                    b['sEUYL'](k, a0j['join'](l, n), a0j[aW(0x3e1)](m, n));
                                }
                            } else
                                a0h['copyFileSync'](l, m);
                        };
                        b[aV(0x163)](k, g, h);
                    }
                } else
                    a0h['copyFileSync'](g, h);
                c['push']({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b[aV(0x117)],
                    'message': l[aV(0x303)]
                });
            }
        }
        return c;
    }
    static async ['createDirectory'](a) {
        const aX = a0S, b = { 'ZTwry': 'Access\x20denied:\x20path\x20outside\x20root' }, c = a0j[aX(0x199)](a0D['FILE_ROOT'], a);
        if (!c[aX(0x377)](a0D[aX(0x290)]))
            throw new Error(b[aX(0x3e6)]);
        return a0h[aX(0x323)](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0j['relative'](a0D[aX(0x290)], c)
        };
    }
}
class a0J {
    static ['cronJobs'] = new Map();
    static [a0S(0x37b)](a, b) {
        const aY = a0S, c = {
                'NZnqR': function (d, f) {
                    return d > f;
                }
            };
        a[aY(0x1ed)](b), c[aY(0x2b1)](a[aY(0x2b3)], a0D[aY(0x1b2)]) && a['splice'](0x0, a[aY(0x2b3)] - a0D['MAX_TASK_LOG_SIZE']);
    }
    static [a0S(0x217)](a, b, c, d, f = null) {
        const aZ = a0S, g = new Date()[aZ(0x365)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + aZ(0x30e) + a + aZ(0x367) + c + '\x0a' + (b?.[aZ(0x18b)]() || '')
        };
    }
    static [a0S(0x397)]() {
        const b0 = a0S;
        return {
            'status': 'ok',
            'count': a0D[b0(0x12a)][b0(0x2b3)],
            'tasks': a0D[b0(0x12a)]
        };
    }
    static async [a0S(0x1fd)](a) {
        const b1 = a0S, b = {
                'nQpko': b1(0x120),
                'KClmM': function (d, f) {
                    return d === f;
                },
                'ELulo': 'error'
            };
        a0D[b1(0x12a)] = a || [], a0D[b1(0x332)] = !![];
        const c = [];
        for (let d = 0x0; d < a0D['onetasks'][b1(0x2b3)]; d++) {
            const f = a0D[b1(0x12a)][d], g = await a0H[b1(0x3e2)](f), h = this[b1(0x217)](f, g[b1(0x17a)], g[b1(0x1ca)], b[b1(0x37a)]);
            this[b1(0x37b)](a0D[b1(0x33c)], h), c[b1(0x1ed)]({
                'index': d,
                'cmd': f,
                'exitcode': g[b1(0x1ca)],
                'output': g[b1(0x17a)],
                'status': b['KClmM'](g[b1(0x1ca)], 0x0) ? 'ok' : b['ELulo']
            });
        }
        return a0D['InitTask'] = ![], {
            'status': 'ok',
            'count': a0D['onetasks'][b1(0x2b3)],
            'tasks': a0D[b1(0x12a)],
            'executed': c
        };
    }
    static [a0S(0x115)]() {
        const b2 = a0S;
        return {
            'status': 'ok',
            'count': Object[b2(0x156)](a0D[b2(0x1d6)])[b2(0x2b3)],
            'tasks': a0D[b2(0x1d6)]
        };
    }
    static ['setCronTasks'](a) {
        const b3 = a0S, b = {
                'aImNm': function (d, f) {
                    return d === f;
                },
                'Mwcrl': b3(0x12b),
                'hTgUk': function (d, f) {
                    return d === f;
                },
                'kUGCi': b3(0x3b9),
                'iMoCG': function (d, f) {
                    return d || f;
                },
                'ZOvbx': function (d, f) {
                    return d > f;
                },
                'ecGoL': b3(0x1e5),
                'BjsGn': function (d, f) {
                    return d - f;
                },
                'UWGDZ': function (d, f) {
                    return d || f;
                }
            };
        this['cronJobs']['forEach'](d => {
            const b4 = b3;
            b[b4(0x113)](typeof d['stop'], b[b4(0x2df)]) && d[b4(0x3a8)](), b[b4(0x227)](typeof d[b4(0x346)], b[b4(0x2df)]) && d[b4(0x346)]();
        }), this['cronJobs'][b3(0x3dd)]();
        const c = [];
        for (const d of Object[b3(0x156)](b[b3(0x2b7)](a, {}))) {
            !a0m['validate'](d) && c[b3(0x1ed)](d);
        }
        if (b[b3(0x39f)](c[b3(0x2b3)], 0x0))
            return {
                'status': b[b3(0x263)],
                'message': 'Invalid\x20cron\x20expressions:\x20' + c[b3(0x3e1)](',\x20'),
                'valid_count': b['BjsGn'](Object[b3(0x156)](b['UWGDZ'](a, {}))['length'], c['length'])
            };
        a0D[b3(0x1d6)] = a || {};
        for (const [f, g] of Object[b3(0x3e5)](a0D[b3(0x1d6)])) {
            const h = a0m['schedule'](f, async () => {
                const b5 = b3, i = await a0H[b5(0x3e2)](g), j = this['_formatLogEntry'](g, i[b5(0x17a)], i[b5(0x1ca)], b[b5(0x2f2)], f);
                this[b5(0x37b)](a0D['crontasks_log'], j);
            });
            this[b3(0x3a0)][b3(0x1e8)](f, h);
        }
        return a0D[b3(0x22c)] = Object['keys'](a0D[b3(0x1d6)])[b3(0x2b3)] > 0x0, {
            'status': 'ok',
            'count': Object['keys'](a0D[b3(0x1d6)])[b3(0x2b3)],
            'tasks': a0D[b3(0x1d6)]
        };
    }
    static ['getTaskStatus']() {
        const b6 = a0S;
        return {
            'onetime': {
                'pending': a0D[b6(0x332)],
                'count': a0D[b6(0x12a)][b6(0x2b3)]
            },
            'cron': {
                'active': a0D['cronloop'],
                'count': Object[b6(0x156)](a0D[b6(0x1d6)])[b6(0x2b3)],
                'check_interval': a0D[b6(0x289)]
            }
        };
    }
    static [a0S(0x256)](a = 0x32) {
        const b7 = a0S, b = a0D[b7(0x33c)][b7(0x3bb)](-a);
        return {
            'status': 'ok',
            'count': b['length'],
            'logs': b
        };
    }
    static [a0S(0x293)](a = 0x32) {
        const b8 = a0S, b = a0D[b8(0x245)][b8(0x3bb)](-a);
        return {
            'status': 'ok',
            'count': b[b8(0x2b3)],
            'logs': b
        };
    }
    static ['clearOnetimeLogs']() {
        const b9 = a0S, a = { 'EoMfE': b9(0x120) }, b = a0D[b9(0x33c)][b9(0x2b3)];
        return a0D[b9(0x33c)] = [], {
            'status': 'ok',
            'cleared': a[b9(0x3d4)]
        };
    }
    static [a0S(0x3da)]() {
        const ba = a0S, a = { 'uOAoB': 'cron' }, b = a0D[ba(0x245)][ba(0x2b3)];
        return a0D[ba(0x245)] = [], {
            'status': 'ok',
            'cleared': a[ba(0x3b2)]
        };
    }
    static [a0S(0x32b)]() {
        const bb = a0S, a = {
                'TajGk': function (g, h) {
                    return g - h;
                },
                'ZvvXL': function (g, h) {
                    return g - h;
                }
            }, b = a0D[bb(0x33c)]['filter'](g => g[bb(0x1ca)] === 0x0)['length'], c = a['TajGk'](a0D[bb(0x33c)]['length'], b), d = a0D['crontasks_log'][bb(0x26e)](g => g[bb(0x1ca)] === 0x0)['length'], f = a[bb(0x1fa)](a0D[bb(0x245)][bb(0x2b3)], d);
        return {
            'onetime': {
                'total_logged': a0D[bb(0x33c)][bb(0x2b3)],
                'max_capacity': a0D[bb(0x1b2)],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0D[bb(0x245)]['length'],
                'max_capacity': a0D[bb(0x1b2)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async ['executeOnetimeTasks']() {
        const bc = a0S, a = {
                'Hgxty': function (c, d) {
                    return c < d;
                }
            }, b = [];
        for (let c = 0x0; a[bc(0x144)](c, a0D[bc(0x12a)][bc(0x2b3)]); c++) {
            const d = a0D[bc(0x12a)][c], f = await a0H[bc(0x3e2)](d), g = this[bc(0x217)](d, f[bc(0x17a)], f[bc(0x1ca)], bc(0x120));
            this[bc(0x37b)](a0D[bc(0x33c)], g), b['push']({
                'cmd': d,
                'exitcode': f[bc(0x1ca)],
                'output': f[bc(0x17a)],
                'timeout': f['timeout']
            });
        }
        return a0D[bc(0x332)] = ![], {
            'status': 'ok',
            'executed': b['length'],
            'results': b
        };
    }
}
let a0K = null, a0L = null;
const a0M = new Promise((a, b) => {
    const bd = a0S, c = {
            'mYKiC': bd(0x3d0),
            'uINgy': '[WARN]\x20Noise\x20WASM\x20module\x20failed\x20to\x20load:',
            'tKXtD': function (d) {
                return d();
            },
            'RHvAi': function (d) {
                return d();
            },
            'cdptk': bd(0x22e)
        };
    try {
        a0r(function (d) {
            const be = bd;
            if (!d) {
                a0L = new Error(c[be(0x268)]), a0t[be(0x168)](c[be(0x30a)], a0L[be(0x303)]), c[be(0x1d5)](a);
                return;
            }
            a0K = d, a0t[be(0x1c3)](be(0x253)), c[be(0x270)](a);
        });
    } catch (d) {
        a0L = d, a0t[bd(0x168)](c[bd(0x218)], d['message']), c[bd(0x270)](a);
    }
});
process['on'](a0S(0x389), (a, b) => {
    const bf = a0S, c = { 'EDsOw': bf(0x2e6) };
    a0t[bf(0x1e5)](c[bf(0x298)], a);
}), process['on'](a0S(0x35e), a => {
    const bg = a0S, b = { 'dzBNj': bg(0x176) };
    a0t[bg(0x1e5)](b[bg(0x347)], a), process[bg(0x23a)](0x1);
});
class a0N {
    constructor(a, b, c) {
        const bh = a0S, d = { 'URdbW': bh(0x213) }, f = d[bh(0x29c)][bh(0x2bd)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[bh(0x21e)] = null;
                continue;
            case '1':
                this[bh(0x2bb)] = a;
                continue;
            case '2':
                this['recvCipher'] = null;
                continue;
            case '3':
                this['localPrivB64'] = b;
                continue;
            case '4':
                this['expectedRemotePubB64'] = c;
                continue;
            case '5':
                this['hs'] = null;
                continue;
            case '6':
                this[bh(0x16a)] = ![];
                continue;
            }
            break;
        }
    }
    async ['init']() {
        const bi = a0S, a = {
                'XjyFZ': bi(0x1c6),
                'PFquF': bi(0x27f),
                'xMXnl': bi(0x278)
            };
        await a0M;
        if (!a0K)
            throw a0L || new Error(bi(0x3e7));
        const b = a0K, c = this[bi(0x2bb)] ? b[bi(0x15a)][bi(0x3bc)] : b[bi(0x15a)][bi(0x2fd)];
        this['hs'] = b[bi(0x324)](a[bi(0x369)], c);
        const d = Buffer[bi(0x398)](a['PFquF']), f = this[bi(0x258)] ? Buffer[bi(0x398)](this['localPrivB64'], a[bi(0x184)]) : null, g = this['expectedRemotePubB64'] ? Buffer[bi(0x398)](this[bi(0x1d0)], a[bi(0x184)]) : null;
        this['hs'][bi(0x2c7)](d, f, g, null);
    }
    [a0S(0x1e6)](a) {
        const bj = a0S, b = {
                'KwYqr': function (d, f) {
                    return d > f;
                },
                'vAHGi': function (d, f) {
                    return d === f;
                },
                'oAIeC': function (d, f) {
                    return d === f;
                },
                'JgOXc': function (d, f) {
                    return d === f;
                }
            };
        if (this['handshakeFinished'])
            return Buffer[bj(0x3d6)](0x0);
        const c = a0K;
        a && b[bj(0x2d8)](a[bj(0x2b3)], 0x0) && b['vAHGi'](this['hs'][bj(0x34b)](), c[bj(0x15a)]['NOISE_ACTION_READ_MESSAGE']) && this['hs'][bj(0x1a5)](a);
        if (b[bj(0x211)](this['hs']['GetAction'](), c['constants'][bj(0x2f1)]))
            return this[bj(0x15d)](), Buffer['alloc'](0x0);
        if (b['oAIeC'](this['hs'][bj(0x34b)](), c[bj(0x15a)]['NOISE_ACTION_WRITE_MESSAGE'])) {
            const d = this['hs'][bj(0x2b4)](new Uint8Array(0x0));
            return b[bj(0x314)](this['hs']['GetAction'](), c[bj(0x15a)][bj(0x2f1)]) && this[bj(0x15d)](), Buffer[bj(0x398)](d);
        }
        return Buffer[bj(0x3d6)](0x0);
    }
    [a0S(0x15d)]() {
        const bk = a0S, a = this['hs']['Split']();
        this[bk(0x21e)] = a[0x0], this[bk(0x2ab)] = a[0x1], this[bk(0x16a)] = !![];
        try {
            if (this['hs'])
                this['hs'][bk(0x2ce)]();
        } catch (b) {
        }
        this['hs'] = null;
    }
    [a0S(0x154)](a) {
        const bl = a0S, b = { 'MVQyw': bl(0x162) };
        if (!this[bl(0x16a)])
            throw new Error(b[bl(0x267)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[bl(0x398)](this[bl(0x21e)][bl(0x22b)](c, d));
    }
    [a0S(0x13c)](a) {
        const bm = a0S;
        if (!this[bm(0x16a)])
            throw new Error(bm(0x1ea));
        const b = new Uint8Array(0x0), c = new Uint8Array(a);
        return Buffer['from'](this[bm(0x2ab)][bm(0x2f6)](b, c));
    }
    [a0S(0x2ce)]() {
        const bn = a0S, a = { 'nWNmr': '1|0|2|5|4|3' }, b = a[bn(0x331)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                try {
                    if (this[bn(0x2ab)])
                        this[bn(0x2ab)][bn(0x2ce)]();
                } catch (d) {
                }
                continue;
            case '1':
                try {
                    if (this[bn(0x21e)])
                        this['sendCipher']['free']();
                } catch (f) {
                }
                continue;
            case '2':
                try {
                    if (this['hs'])
                        this['hs']['free']();
                } catch (g) {
                }
                continue;
            case '3':
                this['hs'] = null;
                continue;
            case '4':
                this[bn(0x2ab)] = null;
                continue;
            case '5':
                this['sendCipher'] = null;
                continue;
            }
            break;
        }
    }
}
class a0O {
    constructor() {
        const bo = a0S, a = {
                'jJdSi': '2|8|5|4|7|0|6|3|1|9',
                'UMFDM': bo(0x177)
            }, b = a[bo(0x36a)][bo(0x2bd)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[bo(0x283)] = [];
                continue;
            case '1':
                this[bo(0x1d4)] = a0D[bo(0x285)][bo(0x36b)]['public_b64'];
                continue;
            case '2':
                this['ptyProcess'] = null;
                continue;
            case '3':
                this[bo(0x400)] = a0D[bo(0x285)][bo(0x1e2)][bo(0x19a)];
                continue;
            case '4':
                this[bo(0x189)] = !![];
                continue;
            case '5':
                this[bo(0x1cd)] = null;
                continue;
            case '6':
                this[bo(0x306)] = [];
                continue;
            case '7':
                this[bo(0x3ec)] = a[bo(0x2a5)];
                continue;
            case '8':
                this[bo(0x3b5)] = null;
                continue;
            case '9':
                this[bo(0x1b0)] = new a0N(![], this[bo(0x400)], this[bo(0x1d4)]);
                continue;
            }
            break;
        }
    }
    async [a0S(0x20b)]() {
        const bp = a0S, a = { 'luuUW': bp(0x3d7) };
        this[bp(0x1cd)] && a0t[bp(0x335)]('[' + this[bp(0x1cd)] + ']\x20执行终端资源清理...');
        if (this[bp(0x20e)]) {
            try {
                this[bp(0x20e)][bp(0x3d1)]();
            } catch (b) {
            }
            this[bp(0x20e)] = null;
        }
        if (this[bp(0x1b0)])
            this[bp(0x1b0)][bp(0x2ce)]();
        if (this[bp(0x3b5)])
            try {
                this[bp(0x3b5)][bp(0x3a3)] === this[bp(0x3b5)][bp(0x2a0)] && this[bp(0x3b5)][bp(0x3a1)](0x3e8, a[bp(0x27a)]);
            } catch (c) {
            } finally {
                this[bp(0x3b5)] = null;
            }
    }
    [a0S(0x2a1)](a) {
        const bq = a0S, b = {
                'YDRmO': bq(0x177),
                'oneLe': function (c, d) {
                    return c > d;
                },
                'RaeFU': function (c, d) {
                    return c(d);
                },
                'iGbMX': function (c, d) {
                    return c === d;
                }
            };
        if (this[bq(0x3ec)] === b[bq(0x1c5)]) {
            if (b[bq(0x3cb)](this['msgResolvers'][bq(0x2b3)], 0x0)) {
                const c = this['msgResolvers']['shift']();
                b[bq(0x1a7)](c, a);
            } else
                this[bq(0x283)][bq(0x1ed)](a);
        } else
            b[bq(0x18d)](this[bq(0x3ec)], bq(0x339)) && this['_processTerminalMessage'](a);
    }
    async [a0S(0x1fb)]() {
        const br = a0S, a = {
                'UngDy': function (b, c) {
                    return b > c;
                }
            };
        if (a[br(0x3e4)](this[br(0x283)][br(0x2b3)], 0x0))
            return this[br(0x283)]['shift']();
        return new Promise(b => {
            const bs = br;
            this[bs(0x306)][bs(0x1ed)](b);
        });
    }
    async [a0S(0x304)](a) {
        const bt = a0S, b = {
                'NUcCv': function (c, d) {
                    return c(d);
                },
                'vPNUp': '🤝\x20开始\x20Noise\x20加密握手...',
                'ZETVV': bt(0x2fc),
                'cqZNJ': function (c, d) {
                    return c(d);
                },
                'LZqYq': '✅\x20Noise\x20握手完成，端到端加密通道已建立！',
                'ZfNiT': bt(0x39e)
            };
        b['NUcCv'](a, b[bt(0x392)]);
        try {
            await this['cipher']['init']();
            const c = await this['_receiveWsBytes'](), d = this['cipher'][bt(0x1e6)](c);
            d && d[bt(0x2b3)] > 0x0 && this['websocket'][bt(0x353)](d);
            const f = await this['_receiveWsBytes']();
            this[bt(0x1b0)]['processHandshake'](f);
            if (!this[bt(0x1b0)]['handshakeFinished'])
                throw new Error(b['ZETVV']);
            b[bt(0x3df)](a, b[bt(0x333)]);
        } catch (g) {
            a(bt(0x18f) + g[bt(0x303)]);
            throw new Error(b['ZfNiT']);
        }
    }
    [a0S(0x337)]() {
        const bu = a0S, a = {
                'vXJzq': bu(0x228),
                'dpBlW': '/bin/ash',
                'QilbU': bu(0x354)
            }, b = process.env.SHELL;
        if (b && a0h[bu(0x209)](b))
            return b;
        const c = [
            a[bu(0x2b5)],
            bu(0x3f6),
            a['dpBlW'],
            a['QilbU']
        ];
        for (const d of c) {
            if (a0h['existsSync'](d))
                return d;
        }
        return bu(0x354);
    }
    async [a0S(0x2e4)](a, b, c) {
        const bv = a0S, d = {
                'MbiJf': '🔗\x20检测到\x20WS\x20连接，启用\x20Noise\x20加密',
                'bQnon': bv(0x291),
                'SQIVy': 'message',
                'ikjvq': function (g, h) {
                    return g(h);
                }
            };
        this[bv(0x3b5)] = a, this['requestId'] = b;
        const f = g => a0t['info']('[终端会话\x20' + b + ']\x20' + g);
        this[bv(0x189)] = !c, f(this[bv(0x189)] ? d['MbiJf'] : d['bQnon']), a['on'](d[bv(0x26b)], g => this['_handleRawMessage'](g));
        try {
            this['useNoise'] && await this[bv(0x304)](f), await this[bv(0x186)](f);
        } catch (g) {
            d[bv(0x3b4)](f, bv(0x357) + g[bv(0x303)]), await this[bv(0x20b)]();
        }
    }
    async [a0S(0x186)](a) {
        const bw = a0S, b = {
                'fmNZd': bw(0x24e),
                'CXbQa': function (f, g) {
                    return f === g;
                },
                'XQSAw': function (f, g) {
                    return f(g);
                },
                'WNFBm': bw(0x13d),
                'WhWsj': function (f, g) {
                    return f(g);
                },
                'XlMvh': 'xterm-256color',
                'ZGCOh': bw(0x207),
                'aGMBd': function (f, g) {
                    return f(g);
                },
                'GxENY': 'unknown',
                'KsYNF': 'terminal',
                'EUDql': function (f, g) {
                    return f > g;
                },
                'JNHen': bw(0x3a1)
            }, c = this[bw(0x337)]();
        b[bw(0x358)](a, bw(0x132) + c);
        const d = Object[bw(0x31c)]({}, process.env);
        delete d['PROMPT_COMMAND'], d[bw(0x1d8)] = b['XlMvh'];
        if (!d[bw(0x2dc)])
            d['LANG'] = b['ZGCOh'];
        try {
            this[bw(0x20e)] = a0s[bw(0x3fa)](c, [], {
                'name': b[bw(0x2a2)],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': process.env.HOME || process[bw(0x2d0)](),
                'env': d
            }), b['aGMBd'](a, bw(0x15c) + (this['ptyProcess'][bw(0x1b9)] || b[bw(0x3a6)]) + ')'), this[bw(0x3ec)] = b['KsYNF'];
            while (b[bw(0x312)](this[bw(0x283)][bw(0x2b3)], 0x0)) {
                const f = this[bw(0x283)][bw(0x145)]();
                this[bw(0x10f)](f);
            }
            this['ptyProcess'][bw(0x149)](g => {
                const bx = bw;
                try {
                    let h = Buffer[bx(0x398)](g, b[bx(0x2fa)]);
                    this[bx(0x189)] && this[bx(0x1b0)] && this['cipher'][bx(0x16a)] && (h = this[bx(0x1b0)]['encrypt'](h)), b[bx(0x12e)](this[bx(0x3b5)][bx(0x3a3)], 0x1) && this['websocket'][bx(0x353)](h);
                } catch (i) {
                }
            }), this[bw(0x20e)][bw(0x334)](({
                exitCode: g,
                signal: h
            }) => {
                const by = bw;
                b[by(0x3ae)](a, '🔌\x20终端进程退出\x20(Code:\x20' + g + by(0x3b3) + h + ')'), this['cleanup']();
            }), this[bw(0x3b5)]['on'](b[bw(0x302)], () => {
                const bz = bw;
                a(b['WNFBm']), this[bz(0x20b)]();
            });
        } catch (g) {
            a(bw(0x3e0) + g[bw(0x303)]), await this['cleanup']();
            throw g;
        }
    }
    [a0S(0x10f)](a) {
        const bA = a0S, b = {
                'RsEdN': bA(0x1d9),
                'TUshU': function (c, d) {
                    return c === d;
                },
                'XiaTH': bA(0x24b),
                'FmbKO': function (c, d) {
                    return c === d;
                },
                'mMmYI': function (c, d) {
                    return c !== d;
                },
                'MKmDs': function (c, d) {
                    return c === d;
                },
                'vuBac': bA(0x278),
                'UbDkU': bA(0x24e)
            };
        if (!this['ptyProcess'])
            return;
        try {
            const c = Buffer['from'](a);
            let d;
            this[bA(0x189)] ? d = this[bA(0x1b0)][bA(0x13c)](c) : d = c;
            let f = ![], g = d[bA(0x220)](bA(0x24e));
            if (g['trim']()[bA(0x377)]('{'))
                try {
                    const h = JSON[bA(0x272)](g);
                    f = !![];
                    if (h[bA(0x2d1)] === b['RsEdN']) {
                        let i = Buffer[bA(0x398)](JSON[bA(0x254)]({ 'type': b['RsEdN'] }));
                        if (this['useNoise'])
                            i = this['cipher'][bA(0x154)](i);
                        this[bA(0x3b5)][bA(0x353)](i);
                        return;
                    }
                    if (b[bA(0x395)](h[bA(0x2d1)], b[bA(0x34c)])) {
                        this[bA(0x20e)][bA(0x24b)](h[bA(0x3ad)] || 0x50, h[bA(0x142)] || 0x18);
                        return;
                    }
                    if (b[bA(0x356)](h[bA(0x2d1)], bA(0x39c)) && b[bA(0x1e0)](h[bA(0x2e8)], undefined)) {
                        let j = b[bA(0x25e)](h[bA(0x3c7)], b[bA(0x388)]) ? Buffer['from'](h[bA(0x2e8)], b[bA(0x388)])[bA(0x220)](b[bA(0x1d2)]) : h['data'];
                        this['ptyProcess'][bA(0x3ac)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[bA(0x20e)]['write'](d['toString'](b['UbDkU']));
        } catch (l) {
            a0t[bA(0x335)](bA(0x38a) + this['requestId'] + bA(0x116) + l['message']);
            if (this['useNoise'])
                this[bA(0x20b)]();
        }
    }
}
async function a0P() {
    const bB = a0S, a = {
            'SPwQN': bB(0x18a),
            'dBtLI': bB(0x29f),
            'cusCz': bB(0x235),
            'vTweS': bB(0x1a0),
            'CwwiE': bB(0x181),
            'Zqodr': bB(0x257),
            'jUmPA': bB(0x185),
            'ojtQo': function (b, c) {
                return b === c;
            },
            'QHbBH': bB(0x111),
            'VAVIo': function (b) {
                return b();
            },
            'TgbGD': bB(0x1e5),
            'HzBjA': bB(0x17e),
            'vCFnW': 'cmd\x20required',
            'zxpHO': bB(0x278),
            'QBxzI': bB(0x28f),
            'beqmI': bB(0x327),
            'zTsEd': 'content-type',
            'GqbGN': bB(0x2a4),
            'rPDrn': function (b, c, d) {
                return b(c, d);
            },
            'qutDV': bB(0x2a3),
            'yfqqD': bB(0x2b6),
            'UxWLI': bB(0x2ac),
            'mSMrv': bB(0x301),
            'orbFT': bB(0x190),
            'ypVny': 'CryptoManager\x20initialized',
            'ZRxRw': 'Initializing\x20SystemInfoCollector...',
            'iSFSP': 'Express\x20app\x20created\x20and\x20expressWs\x20applied',
            'GllMM': bB(0x20a),
            'dicuH': function (b, c) {
                return b(c);
            },
            'XbWjo': bB(0x161),
            'MtCrM': bB(0x2dd),
            'PehrU': bB(0x32a),
            'nLYXa': bB(0x23e),
            'ypSCt': bB(0x385),
            'QHZqR': bB(0x157),
            'amkWu': bB(0x361),
            'CvwEK': bB(0x1c0),
            'NanMx': '/api/task/onetime',
            'UlfkY': bB(0x34d),
            'noiCZ': bB(0x128),
            'ubEgM': '/api/task/log/cron',
            'TojLT': '/api/task/log/onetime',
            'sURlQ': bB(0x3d5),
            'jnBRG': bB(0x35c),
            'xqmTn': bB(0x308),
            'aglhH': bB(0x125),
            'EHYDY': bB(0x374),
            'OQdkK': bB(0x204),
            'uGLzv': bB(0x13b),
            'GPOAV': bB(0x2da)
        };
    try {
        a0t[bB(0x1c3)](bB(0x24c)), a0t[bB(0x1c3)]('Validating\x20config...'), a0D[bB(0x143)](), a0t['debug'](a[bB(0x34a)]), a0t['debug'](a['orbFT']);
        const b = new a0E(a0D['ECDSA_PUBLIC_KEY_PEM'], a0D[bB(0x1bf)]);
        a0t[bB(0x1c3)](a[bB(0x366)]), a0t['debug'](a[bB(0x3db)]);
        const c = new a0G();
        a0t['debug'](bB(0x3c1)), a0t['debug'](bB(0x3a7));
        const d = a['VAVIo'](a0f);
        a0q(d), a0t[bB(0x1c3)](a[bB(0x193)]), d['use']((g, h, i) => {
            const bC = bB;
            h[bC(0x2ef)](a[bC(0x24d)], '*'), h[bC(0x2ef)](a[bC(0x221)], a[bC(0x208)]), h[bC(0x2ef)](a[bC(0x325)], a[bC(0x118)]), h[bC(0x2ef)](a['Zqodr'], a[bC(0x246)]);
            if (a[bC(0x316)](g['method'], a[bC(0x121)]))
                return h[bC(0x242)](0xc8)[bC(0x350)]();
            a['VAVIo'](i);
        }), d['use'](a0f[bB(0x292)]({
            'type': () => !![],
            'limit': a[bB(0x3c8)]
        })), d[bB(0x2e9)](a0f[bB(0x3a2)]({ 'extended': !![] })), d[bB(0x2e9)](a[bB(0x36f)](a0F, b)), a0t[bB(0x1c3)](a[bB(0x23c)]), d[bB(0x1b4)](bB(0x38d), async (g, h) => {
            const bD = bB;
            try {
                const i = await c[bD(0x32e)]();
                h[bD(0x19e)](i);
            } catch (j) {
                h[bD(0x242)](0x1f4)['json']({
                    'status': a[bD(0x178)],
                    'message': j[bD(0x303)]
                });
            }
        }), d[bB(0x1b4)](bB(0x351), async (g, h) => {
            const bE = bB;
            try {
                const i = await c['getRealtimeInfo']();
                h[bE(0x19e)](i);
            } catch (j) {
                h['status'](0x1f4)[bE(0x19e)]({
                    'status': a[bE(0x178)],
                    'message': j[bE(0x303)]
                });
            }
        }), d[bB(0x17c)](a[bB(0x2b9)], async (g, h) => {
            const bF = bB;
            try {
                let i = null;
                if (typeof g[bF(0x160)] === a[bF(0x14c)])
                    i = g[bF(0x160)][bF(0x18b)]();
                else
                    g[bF(0x160)] && a[bF(0x316)](typeof g['body'], bF(0x210)) && (i = g[bF(0x160)][bF(0x1c1)] || '');
                if (!i)
                    return h[bF(0x242)](0x190)['json']({
                        'status': bF(0x1e5),
                        'message': a[bF(0x19c)]
                    });
                const j = await a0H[bF(0x3e2)](i, {
                    'cwd': g[bF(0x160)][bF(0x2d0)],
                    'env': g[bF(0x160)][bF(0x30d)],
                    'timeout': a0D[bF(0x299)]
                });
                h[bF(0x19e)](j);
            } catch (k) {
                h[bF(0x242)](0x1f4)[bF(0x19e)]({
                    'status': bF(0x1e5),
                    'message': k[bF(0x303)]
                });
            }
        }), d[bB(0x17c)](a[bB(0x3fe)], async (g, h) => {
            const bG = bB;
            try {
                const i = await a0I[bG(0x141)](g[bG(0x160)][bG(0x2c8)], g[bG(0x160)]['recursive']);
                h[bG(0x19e)]({
                    'status': 'ok',
                    'count': i[bG(0x2b3)],
                    'files': i
                });
            } catch (j) {
                h[bG(0x242)](0x1f4)[bG(0x19e)]({
                    'status': a[bG(0x178)],
                    'message': j[bG(0x303)]
                });
            }
        }), d[bB(0x17c)](a['nLYXa'], async (g, h) => {
            const bH = bB;
            try {
                const i = await a0I[bH(0x183)](g[bH(0x160)][bH(0x35d)] || []);
                h[bH(0x19e)]({
                    'status': 'ok',
                    'files': i
                });
            } catch (j) {
                h[bH(0x242)](0x1f4)[bH(0x19e)]({
                    'status': bH(0x1e5),
                    'message': j['message']
                });
            }
        }), d['put'](bB(0x23e), async (g, h) => {
            const bI = bB;
            try {
                const i = g[bI(0x160)][bI(0x206)] || {}, j = a[bI(0x316)](g[bI(0x160)][bI(0x343)], !![]), k = await a0I[bI(0x386)](i, j);
                h[bI(0x19e)](k);
            } catch (l) {
                h[bI(0x242)](0x1f4)[bI(0x19e)]({
                    'status': bI(0x1e5),
                    'message': l[bI(0x303)]
                });
            }
        }), d['post'](bB(0x3ed), async (g, h) => {
            const bJ = bB;
            try {
                const i = await a0I[bJ(0x31a)](g[bJ(0x160)][bJ(0x2c8)]);
                h[bJ(0x19e)](i);
            } catch (j) {
                h[bJ(0x242)](0x1f4)[bJ(0x19e)]({
                    'status': a[bJ(0x178)],
                    'message': j[bJ(0x303)]
                });
            }
        }), d['post'](a[bB(0x2a8)], async (g, h) => {
            const bK = bB;
            try {
                const i = await a0I[bK(0x2c4)](g['body'][bK(0x2c8)], g[bK(0x160)][bK(0x341)], g[bK(0x160)][bK(0x3d9)], g[bK(0x160)][bK(0x1a2)], g['body']['total_chunks']);
                h[bK(0x19e)](i);
            } catch (j) {
                h[bK(0x242)](0x1f4)[bK(0x19e)]({
                    'status': a[bK(0x178)],
                    'message': j[bK(0x303)]
                });
            }
        }), d[bB(0x17c)](a[bB(0x1cf)], async (g, h) => {
            const bL = bB;
            try {
                const i = await a0I['downloadFile'](g[bL(0x160)][bL(0x2c8)]), j = Buffer[bL(0x398)](i[bL(0x3d9)], a[bL(0x2f7)]);
                return h[bL(0x1e8)](a['QBxzI'], i[bL(0x1dc)][bL(0x220)]()), h['set'](a['beqmI'], i['path']), h[bL(0x1e8)](a[bL(0x238)], a['GqbGN']), h['send'](j);
            } catch (k) {
                h[bL(0x242)](0x1f4)[bL(0x19e)]({
                    'status': a['TgbGD'],
                    'message': k['message']
                });
            }
        }), d[bB(0x28c)](a[bB(0x2a8)], async (g, h) => {
            const bM = bB;
            try {
                let i = g[bM(0x160)]['paths'];
                if (!i || !Array[bM(0x187)](i)) {
                    i = [];
                    if (g[bM(0x160)][bM(0x2c8)])
                        i[bM(0x1ed)](g[bM(0x160)][bM(0x2c8)]);
                    if (g[bM(0x160)][bM(0x362)])
                        i[bM(0x1ed)](g[bM(0x160)][bM(0x362)]);
                }
                const j = await a0I[bM(0x2ec)](i);
                h['json']({
                    'status': 'ok',
                    'results': j
                });
            } catch (k) {
                h[bM(0x242)](0x1f4)[bM(0x19e)]({
                    'status': a[bM(0x178)],
                    'message': k['message']
                });
            }
        }), d[bB(0x277)](a['ypSCt'], async (g, h) => {
            const bN = bB;
            try {
                const i = await a0I[bN(0x3ea)](g['body'][bN(0x1ab)] || g[bN(0x160)]);
                h[bN(0x19e)]({
                    'status': 'ok',
                    'total': i[bN(0x2b3)],
                    'success': i[bN(0x26e)](j => j[bN(0x242)] === 'ok')[bN(0x2b3)],
                    'results': i
                });
            } catch (j) {
                h[bN(0x242)](0x1f4)['json']({
                    'status': a['TgbGD'],
                    'message': j[bN(0x303)]
                });
            }
        }), d[bB(0x17c)](a[bB(0x315)], async (g, h) => {
            const bO = bB;
            try {
                const i = await a0I[bO(0x2ff)](g[bO(0x160)]);
                h[bO(0x19e)]({
                    'status': 'ok',
                    'total': i[bO(0x2b3)],
                    'success': i[bO(0x26e)](j => j[bO(0x242)] === 'ok')[bO(0x2b3)],
                    'results': i
                });
            } catch (j) {
                h['status'](0x1f4)[bO(0x19e)]({
                    'status': 'error',
                    'message': j['message']
                });
            }
        }), d[bB(0x17c)](a['CvwEK'], async (g, h) => {
            const bP = bB;
            try {
                const i = await a0I['createDirectory'](g[bP(0x160)][bP(0x2c8)]);
                h[bP(0x19e)](i);
            } catch (j) {
                h[bP(0x242)](0x1f4)[bP(0x19e)]({
                    'status': bP(0x1e5),
                    'message': j['message']
                });
            }
        }), d['get'](bB(0x1bc), (g, h) => {
            const bQ = bB;
            h[bQ(0x19e)](a0J['getOnetimeTasks']());
        }), d['post'](a['NanMx'], async (g, h) => {
            const bR = bB;
            try {
                const i = await a0J[bR(0x1fd)](g[bR(0x160)]);
                h[bR(0x19e)](i);
            } catch (j) {
                h['status'](0x1f4)['json']({
                    'status': a[bR(0x178)],
                    'message': j[bR(0x303)]
                });
            }
        }), d['get'](a['UlfkY'], (g, h) => {
            h['json'](a0J['getCronTasks']());
        }), d['post'](a['UlfkY'], (g, h) => {
            const bS = bB;
            try {
                const i = a0J[bS(0x11f)](g['body']);
                h[bS(0x19e)](i);
            } catch (j) {
                h['status'](0x1f4)[bS(0x19e)]({
                    'status': a[bS(0x178)],
                    'message': j[bS(0x303)]
                });
            }
        }), d[bB(0x1b4)](a[bB(0x27c)], (g, h) => {
            const bT = bB;
            h['json'](a0J[bT(0x1ce)]());
        }), d[bB(0x1b4)](bB(0x197), (g, h) => {
            const bU = bB;
            let i = parseInt(g[bU(0x11b)][bU(0x3c5)], 0xa) || 0x32;
            i = Math[bU(0x167)](Math[bU(0x35f)](i, 0x1), 0x64), h[bU(0x19e)](a0J[bU(0x256)](i));
        }), d['get'](a[bB(0x2cc)], (g, h) => {
            const bV = bB;
            let i = a['rPDrn'](parseInt, g[bV(0x11b)][bV(0x3c5)], 0xa) || 0x32;
            i = Math[bV(0x167)](Math[bV(0x35f)](i, 0x1), 0x64), h['json'](a0J[bV(0x293)](i));
        }), d[bB(0x28c)](a[bB(0x259)], (g, h) => {
            const bW = bB;
            h[bW(0x19e)](a0J[bW(0x381)]());
        }), d[bB(0x28c)](a[bB(0x2cc)], (g, h) => {
            const bX = bB;
            h[bX(0x19e)](a0J[bX(0x3da)]());
        }), d[bB(0x1b4)](a[bB(0x2ad)], (g, h) => {
            h['json'](a0J['getLogSummary']());
        }), d[bB(0x17c)](a['jnBRG'], async (g, h) => {
            const bY = bB;
            try {
                const i = await a0J['executeOnetimeTasks']();
                h['json'](i);
            } catch (j) {
                h[bY(0x242)](0x1f4)['json']({
                    'status': a[bY(0x178)],
                    'message': j[bY(0x303)]
                });
            }
        }), a0t['debug'](a['xqmTn']), d['ws'](a[bB(0x371)], async (g, h) => {
            const bZ = bB, i = h[bZ(0x2fb)][0x0];
            a0t['debug'](bZ(0x26c) + h['url']), a0t[bZ(0x1c3)]('Matched\x20Sub-path:\x20' + i);
            const j = h[bZ(0x11b)][bZ(0x17b)], k = h[bZ(0x11b)]['token'];
            a0t[bZ(0x1c3)](bZ(0x1f2) + j);
            if (!j) {
                a0t[bZ(0x1c3)]('Closing\x20connection\x20due\x20to\x20missing\x20request_id'), g['close'](0x3f0, a[bZ(0x3fb)]);
                return;
            }
            const l = new a0O();
            await l['startSession'](g, j, k);
        }), a0t['debug'](a['EHYDY']), a0t['debug'](a[bB(0x378)]);
        const f = d[bB(0x3b0)](a0D[bB(0x16c)], a0D[bB(0x33f)], () => {
            const c0 = bB;
            a0t[c0(0x1c3)](c0(0x30c) + a0D[c0(0x2ee)] + c0(0x37f) + a0D[c0(0x33f)] + ':' + a0D[c0(0x16c)]), a0t[c0(0x1c3)](a[c0(0x11a)]);
        });
        process['on'](bB(0x180), () => {
            const c1 = bB;
            a0t[c1(0x1c3)](a['UxWLI']), f['close'](), process[c1(0x23a)](0x0);
        }), a0t['debug'](a['uGLzv']);
    } catch (g) {
        a0t[bB(0x1e5)](a['GPOAV'], g), process[bB(0x23a)](0x1);
    }
}
(require[a0S(0x201)] === module || require[a0S(0x201)]?.[a0S(0x341)]?.['includes'](a0S(0x2c6))) && a0P()[a0S(0x3e3)](a0t['error']);
module['exports'] = {
    'Config': a0D,
    'CryptoManager': a0E,
    'SystemInfoCollector': a0G,
    'CommandExecutor': a0H,
    'FileManager': a0I,
    'TaskManager': a0J
};
function a0a() {
    const c2 = [
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'quncEha',
        'q1jptL9dsevds19jtLrfuLzbta',
        'vxnPsM8',
        'uK1Iq1C',
        'zgvSzxrL',
        's0rZvey',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'Ec1MAwXLlxnPEMu',
        'rKLmrv9st09u',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'Dgv4Da',
        'z2v0q3jVBKXVz3m',
        '6k+35Rgc6lAf5PE2',
        'tLnbCKO',
        'wfj0B1i',
        'vvjrBKW',
        'rurZt3C',
        'uNrPBwvVDxq',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'Efbzu2W',
        'vvjKyLC',
        'zMXVB3i',
        'twLZC2LUzYbJAhvUAYa',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        't1bftG',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'wgXnDMG',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'vu1gre0',
        'yxbWBhK',
        'u1H5qwK',
        'Exbtq3q',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'BuXZDMW',
        'CMvJDKnPCgHLCG',
        'u2H1DhrPBMCGzg93BI4UlG',
        'C1vsBfe',
        'Dg90ywXozxr3B3jRvxa',
        'zMLSzq',
        'B2P6ALC',
        'tLPUCvi',
        'zxHWCMvZCW',
        'BgvUz3rO',
        'v3jPDgvnzxnZywDL',
        'DLHkENe',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'Au1Vq0C',
        'C2v0qxv0AfrHzW',
        'txrdCK0',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'AxnjBML0Awf0B3i',
        'Bg9N',
        'C3bSAxq',
        'g1SZm21Bv0fstL0BwZbTia',
        'mZGZnJm1mgLRqxvqBG',
        'y3b1',
        'uL9psW',
        'z2LK',
        'EKjHEM0',
        'DxbSB2fKrMLSzq',
        'vgnbD1m',
        'DhmTBM9Kzq',
        'sw5PDgLHBgL6zq',
        'Cgf0Aa',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'zhzHq3O',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'Dwjfz00',
        'Dgv4Dc9WBgfPBG',
        'zNjLzq',
        'mti4otyWohfkyxbgwG',
        'y3DK',
        'DhLWzq',
        'Bw9Kzv9Vy3rHBa',
        'yxjJAa',
        'y29Kzq',
        'ANjyt1G',
        'ExHYCuy',
        'wKveqNO',
        's3DzCxi',
        'D2Dusgy',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'BMv0D29YA1n0yxrZ',
        'teforW',
        'l2fWAs9LEgvJ',
        'yNvUlxb0Eq',
        'txDJCMW',
        'Aef4zxq',
        'l3bYB2mVms9LBNzPCM9U',
        'A3vIzxbVzhm',
        'x3bHCNnLtw9Kzq',
        'C3rHCNrtzxnZAw9U',
        'qMr4wwq',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'Dg90ywXozxr3B3jRrg93BG',
        'zgf0yq',
        'DxnL',
        'zxHLy3v0ywjSzq',
        'tfHd',
        'zgvSzxrLrMLSzxm',
        'CLPzzuW',
        'quDftLrFvKvsu0LptG',
        'AgvHzgvY',
        'lY5KB2nRzxjLBNy',
        'tK9ju0vFqunusu9ox1nqteLu',
        'A1vhq2K',
        'whjKsK8',
        'z2v0uhvIBgLJsxbwnG',
        'vxjPELi',
        'rgvJCNLWDfDPDgHbza',
        'ENHWse8',
        'D1fvre8',
        'q2rurw4',
        'zM1owMq',
        'CgfYyw1Z',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'CMvSyxrPDMu',
        'y29WEuzPBgvZ',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'q29UzMLNihzHBgLKyxrLza',
        'sK5izw4',
        'BwvZC2fNzq',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'EeHPB2m',
        'BxnNuMvZB2X2zxjZ',
        'mti4qKrdzM5k',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'DgvZDa',
        'DuLoz3K',
        'yMfZzty0lwPZ',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'zw52',
        'ic0Tls0G',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'tM9Uzq',
        'rvveCwW',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'sMDpwgm',
        'yw1Rv3u',
        'B2P0uw8',
        'DLrfCKq',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'CMvHzezPBgu',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'yxnZAwDU',
        'y0XlvKi',
        'y2H1BMTF',
        'mc4WlJaUma',
        'zhHlBLq',
        'B3vMqwS',
        'zgfZt2W',
        'BwTKAxjtEw5J',
        'sgfUzhnOywTLu3rHDgu',
        'DLr3zvm',
        'u1viq08',
        'Ec1VCMLNAw5HBc1WyxrO',
        'y2HPBgrFChjVy2vZCW',
        'Bg9Hza',
        'l2fWAs9MAwXLl2XPC3q',
        'z2v0tg9Nu3vTBwfYEq',
        'BMv0D29YAW',
        'zKX4ywG',
        'z2v0qMfZAwnjBMzV',
        'mte0nML6qMzlEG',
        'q29UDgvUDc1uExbL',
        'BLDoBxi',
        'sw5PDfrHC2S',
        'tfPXwxe',
        'B25fEgL0',
        'Aw5MBW',
        'zNntAxPL',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'C3nfyLu',
        'DgvYBwLUywW',
        's1zn',
        'sK1buu4',
        'B25LDgLTzxrHC2TZx2XVzW',
        'sgnHt00',
        'D3jPDgfIBgu',
        'se9tva',
        't2PdwfG',
        'zMLSzw5HBwu',
        'uuvnvq',
        'CMvJDxjZAxzL',
        'yNL0zuXLBMD0Aa',
        'odi3meHQq05wrG',
        'zgvZDhjVEq',
        'zhPctMO',
        'ELHqs1y',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'BvnnCNy',
        'r2v0qwn0Aw9U',
        'wgLHveG',
        'l2fWAs90yxnRl2nYB24',
        'CM1KAxjtEw5J',
        'CKDiD0G',
        'zw5K',
        'l2fWAs9ZDgf0Dxm',
        'vfPtvgC',
        'C2vUza',
        'l2jPBI9ZAa',
        'DNDbEhe',
        'rM1Is08',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'v2HxC2O',
        'DMnvtxe',
        'DwLK',
        'vxHJufO',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'Cgf0Ahm',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'Bwf4',
        'C2v0vgLTzw91Da',
        'l2fWAs9MAwXLl2nW',
        'Cgf0Adi',
        'DxrMoa',
        'mJuXmdKZCfnAAM5v',
        'Dg9ju09tDhjPBMC',
        'ExbwBNK',
        'ic0Tls0GzxHPDgnVzgu9',
        'Ec10Aw1LC3rHBxa',
        'wgP5rLO',
        'AKPKu2K',
        'y29UDhjVBa',
        'BM9Uy2u',
        'Ec1HzxmTzw5JCNLWDgvK',
        'y3vYCMvUDeXVywq',
        'zgLJDuG',
        'zMfTAwX5',
        'ywDSAeG',
        'CNHFyNL0zxm',
        're53zfC',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'ufHUDg4',
        'C3DHChrVDgfS',
        'C3rHCNrZv2L0Aa',
        't1fKA0S',
        'Dg9cExrLqxjYyxK',
        'BLfWA28',
        'x2fWCgvUzeXVzW',
        'Ec1LBMnYExb0zwq',
        'Bw9Kzq',
        'y29UDgfPBMvYza',
        'ihn0yxj0zwqGB24G',
        'mhWXFdv8nhWYFdm',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'sxHjAeG',
        'vK1TrgC',
        'z3bXzgC',
        'l2fWAs9MAwXL',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'yMfZzty0DxjS',
        'DNvcywm',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'w+E7IoERR+s8MUIVNsa',
        'CgfgrKK',
        'ChjVy2vZCW',
        'l2fWAs9IyxnLAw5MBW',
        'BgfZDe5LDhDVCMTuAw1L',
        'zg93BMXVywrgAwXL',
        'n3W0Fdv8mNWWFdn8nNWX',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'DLbovxa',
        'tNfvCvK',
        'zgLYzwn0B3j5',
        'vfvZAfu',
        'sMnArhK',
        'z2v0t25LDgLTzvrHC2TZ',
        'zNjVBq',
        'A3PRv0W',
        't1DpA0S',
        'ue5MCvC',
        'Aw5WDxq',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'wK92yNG',
        'y3jVBKPVyNm',
        'y2XVC2u',
        'DxjSzw5JB2rLza',
        'CMvHzhLtDgf0zq',
        'BvDnywK',
        'DxbKyxrL',
        'r3HftLK',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'C3rVCa',
        'x2DLDerPC2TjBMzV',
        'wc1bDxrOlvrVA2vU',
        'z2vUzxjHDgvqywLY',
        'D3jPDgu',
        'y29SCW',
        'wfftqxC',
        'C3rHDhvZq29Kzq',
        'BgLZDgvU',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        'Du9bB0i',
        'lcbtAwDUywW6ia',
        'AwTQDNe',
        'D2vIC29JA2v0',
        'DxnLza',
        'AgvHzgvYCW',
        'Au9ruui',
        'y3jVBG',
        'DMvYAwz5u2LNBMf0DxjL',
        'C2XPy2u',
        'tK9ju0vFuK9mrv9jtKLusufut1i',
        'y3jLyxrLuhvIBgLJs2v5',
        'D0jZzM0',
        'CMvHzgfIBgu',
        'nJG1otHKrvLytxm',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'y2LWAgvYDgv4Da',
        'svb2na',
        'AwvfuMm',
        'BgLTAxq',
        'A2vYBMvSx3zLCNnPB24',
        'zw5JB2rPBMC',
        'r2XStu0',
        'qMrgrMC',
        'ufHmyKS',
        'B25Ltgu',
        'BM9PC2vFA2v5',
        'D3jPDgvgAwXLu3LUyW',
        'y3b1x25HBwu',
        'A21rBge',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'A2LSBa',
        'Axb2na',
        'B0TKDK4',
        'rw9nzKu',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'ywXSB2m',
        'q2XLyw5SEsbJBg9Zzwq',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'y29UDgvUDa',
        'y2XLyxjdCM9Utg9NCW',
        'wLj4uNC',
        'Ae1jAge',
        'y2XLyxi',
        'BMTPA0O',
        'y3fAtKO',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'AM9PBG',
        'zxHLy3v0zq',
        'y2f0y2G',
        'vw5NrhK',
        'zw50CMLLCW',
        'wLr3CNK',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'z2v0tg9JywXjuhy2',
        'rMLSzsbUB3qGzM91BMq',
        'Bw92zuzPBgvZ',
        'AxnwywXPzeLqDJy',
        'CgHHC2u',
        'l2fWAs9MAwXLl2nHDa',
        'su5gtW',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'Dhj1zq',
        'z2vUzxjHDgvtAw5NBgu',
        'y2DlBxm',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'BgLwu3y',
        'zeDQrgm',
        'l2jPBI96C2G',
        'y29UDgfPBMvYpwX4yW',
        'DgfN',
        'ywnJzxnZx2rLBMLLza',
        'C3bHD24',
        'Cxv0rfy',
        'Ahr0Chm6lY9PCgvJAg8UBMv0l3bSywLU',
        'Ec1UB25Jzq',
        'ugvOCLu',
        'EuvjtfC',
        'quDftLrFufjjvKfurv9lrvK',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'zw5sAhC',
        't1busu9ouW',
        'uwzeDNG',
        'yuLTtM0',
        'rvjst1i',
        'z2v0q3jVBLrHC2TZ',
        'xsdIMQdVUi8G5OYh5lUK5Ase55cg5BYc5BI4oIa',
        'tMjlCMe',
        'q3D3Auu',
        'q29UDgvUDc1mzw5NDgG',
        'EwzXCuq',
        'CxvLCNK',
        'zxHWCMvZCY13CW',
        'Dg9mB3DLCKnHC2u',
        'EM9kEhG',
        'C2v0q3jVBLrHC2TZ',
        'B25LDgLTzq',
        'uuHIqKG',
        'A2HpD3u',
        'y291BNq',
        'twLZC2LUzYbHDxrOigHLywrLCNm',
        'l2fWAs93CY8Q',
        'A2LSBgvK',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'l2fWAs90yxnRl3n0yxr1CW',
        'ug9KBwfU',
        'B25LDgfZA3m',
        'zNvUy3rPB24',
        'B3DUzxi',
        'ANDR',
        'q1HIuwe',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'BMfTzq',
        'z2v0tg9JywXjuhy0',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'Axb2nG',
        'te9hx0XfvKvm',
        'y3vYCMvUDeXLDMvS',
        'Ec1Hz2vUDc12zxjZAw9U',
        'CMvHzgrPCLn5BMm',
        'C3rHDfn5BMm',
        've5MAuO',
        'Dxb0Aw1L',
        'u0Lhsu5uigHHBMrSzxiGCMvNAxn0zxjLza',
        'zgvJCNLWDa',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'z2v0uhvIBgLJsxbwna',
        'vxj1Egu',
        'x2DLDenVBM5Ly3rPB25Z',
        'BgLZDezPBgvZ',
        'CM93CW',
        'DMfSAwrHDgu',
        'sgD4DhK',
        'C2HPzNq',
        'D3nwy3C',
        'DgLTzw91Da',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'B25eyxrH',
        'CM91BMq',
        'Aw50zxjUywW',
        'shPcAKe',
        'zgLZA190B3rHBa',
        'BNvTyMvY',
        'BvHbq2q',
        'y3b1x2nVCMvZ',
        'rK9mte9xx1nztuXjtKTt',
        'ywrKCMvZCW',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'zw5JCNLWDa',
        'ruLyywW',
        'A2v5CW',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'uvbiDNe',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'y29UC3rHBNrZ',
        'Aw5JBhvKzxm',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'x3nWBgL0qw5KrMLUAxnO',
        'sfruuca',
        'BwvTx3rVDgfS',
        'yM9KEq',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'DeLcC1C',
        'mJC0ntrTC1vLEKe',
        'svvmvgq',
        'z0TbAuW',
        'BwLU',
        'D2fYBG',
        'veLnrvnuqu1qx1DjtKrpvW',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'z2v0uMvHBhrPBwvjBMzV',
        'ue9sva',
        'z052seW',
        'sNHLvuK',
        'y29UBMvJDgLVBNm',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'z3b1x25HBwu',
        'l2fWAs93CY8',
        'rMLSzsb0B28GBgfYz2u',
        'DujtCee',
        'CMfT',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'AgfUzhnOywTL',
        'vgDIr0q',
        'BM93',
        'CMvZDwX0',
        'CMvXDwvZDf9Pza',
        'Cg9ZDa',
        'rg9JA2vY',
        'C3rYAw5N',
        'y3jLyxrLvMvYAwz5',
        'u0Lhsu5u',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lgf1DgHVCML6yxrPB24SihGTBM9Uy2uSihGTDgLTzxn0yw1Wlcb4lwf1DgGTDg9Rzw4SihGTywvZlwvUy3j5ChrLzcWGEc1Kzwj1zW',
        'x2zVCM1HDe1Vzgu',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'Ee1yBMW',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'x3j1BLrLCM1PBMfS',
        'AxnbCNjHEq',
        'DxbNCMfKzq',
        'DxnLtM9PC2u',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'DhjPBq',
        'zgLYBMfTzq',
        'AuDItvG',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdMOlJLV4pNU4JNQ6/KVP3OTzyGkhb0EsKG5yQG6l295AsX6lsL77Ym56Il5BQp57Ui5Q2I77Yb',
        'CgfKu3rHCNq',
        'Avngu1a',
        'B3njBMzV',
        'ywXS',
        'CMvKDwnL',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'vwzLB3K',
        'CMvZB2X2zq',
        'ChjPDMf0zv9InJq',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'DKngBLC',
        'uenes1G',
        'ANnVBG',
        'B2DnrLm',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'C3rKzxjY',
        'y2H1BMTFAwq',
        'AuvNBK0',
        'vfz3req',
        'uMvHze1LC3nHz2u',
        'ChvIBgLJx2i2na',
        'uMfLrLu',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'DwrW',
        'mZuYnZDlr0jxzMC',
        'Bw92zv9Tyxa',
        'DgnW',
        'zgLZAW',
        'zMLSzxm',
        'CMfUzg9TqNL0zxm',
        'y2LWAgvY',
        't3zIALK',
        'tufyx1rbu0TFte9hx1njwKu',
        'DhHFyNL0zxm',
        'z2v0',
        'tMvVs0S',
        'Dw5KzwzPBMvK',
        'CMvSzwfZzq',
        'sMHjz0C',
        'CgLK',
        'y29Yzxm',
        'uLj3tw4',
        'l2fWAs90yxnRl29UzxrPBwu',
        'zwrTqwC',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'l2fWAs9MAwXLl25LDW',
        'y21K',
        'zwvqy2K',
        'zgvIDwC',
        'BM9Kzs1JCM9U',
        'wursBu8',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'runeu0fFufvcs0vz',
        'x2LZqMLUyxj5',
        'q29UDhjVBgXLCG',
        'zxHPDgnVzgu',
        'zgvJCNLWDerHDge',
        's2TeqxK',
        'CMvXDwvZDeLK',
        'z2v0vgfZA1n0yxr1CW',
        'uuHACvi',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'C3rKB3v0',
        'vwjeA1u',
        'nZi4muz5rhnmzG',
        'q09ovfjptf9qvujmsunFs0vz',
        'DeTyDeq',
        'y3jVBNrHC2TZ',
        'wwXXAfe',
        'vevstq',
        'AgvHCNrIzwf0',
        'uu54rue',
        'mJaWBxrgChHU',
        'C2L6zq',
        'A0nWy2u',
        'mZaW',
        'CMvUyw1Lu3LUyW',
        'Bu1TwuK',
        'CfbQAvK',
        'ywDLBNq',
        'Ec1Kzwj1zW',
        'D2LHB1O',
        'zxjYB3i',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'CvrJC1y',
        'C2v0',
        'zwnKC2fqDwjRzxK',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdOR6BNU4BPLjNOR686ia',
        'ChvZAa',
        'rKvXruW',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'rwv0tvy',
        'x2DLDenVBMzPz1zHBhvL',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'mc4XlJyTANm',
        'Dg90ywW',
        'vuXsCu8',
        'A2vYBMvS',
        'AwjSDuG',
        'y3PbwNG',
        'CMvHzezPBgvtEw5J',
        'wNz2weW',
        'x3jLy2vPDMvxC0j5DgvZ',
        'zgLZDhjV',
        'C2v0t25LDgLTzvrHC2TZ',
        'BxrPBwu',
        'sevbra',
        'v0fstG',
        'BwfPBG',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'BeHVwvu',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'wc1oB25Jzq',
        'CgvYBwLZC2LVBNm',
        'qY5vveyToa',
        'y3vZq3O',
        'zxHPC3rZu3LUyW',
        'ntbTyG',
        'y2XLyw51Ca',
        'svb2nG',
        'Ahr0Chm',
        'Chr5uhjVy2vZCW',
        'Afnqs2q',
        'B2jQzwn0',
        'DKfir2K',
        'sgvdwgy',
        'mxWZFdr8nNW1Fdb8mG',
        'AxneAxjLy3rVCNK',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'wf9psW',
        'x2zVCM1HDeXVz0vUDhj5',
        'y2rWDgS',
        'y2HTB2rtEw5J',
        'yNjHBMq',
        'tK9ju0vFs0vz',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'DMLYDhvHBgL6yxrPB24',
        'C2vUzenPCgHLCG',
        'tufyx1vqte9brf9tsvPf',
        'Dg9tDhjPBMC',
        'zej0teK',
        'DM9oEhu',
        'Ec1HDxrOlxrVA2vU',
        'yMfZzw5HBwu',
        'DfnLDvi',
        'rvHfq19tsevmtf9nt0rf',
        'AfrNvwS',
        'l2jPBI9IyxnO',
        'BwvT',
        'y2fSBa',
        'rw5JCNLWDfDPDgHbza',
        'y3jVBMXVB3a',
        'l3bYB2mVms9Jz3jVDxa',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'zwnPzxnqDwjRzxK',
        'C2vZC2LVBL9RzxK',
        'qwjhzee',
        'u0vtu0LptL9lrvK',
        'rwHZu3y',
        'zgvSzxrLza',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'mtv8oxW0Fdn8ohWXFdv8mtf8mhWXmhW3Fde0FdeZFdeYFdz8mG',
        'revcvuC',
        'ELrZrwq',
        '6k6/6zEUia',
        'zxHPDa',
        'zMv0y2Hjua',
        'wgjxAM8',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'Axnoyu4',
        'qLHqv08',
        'zMjkwfe',
        'C3rHDhvZ',
        'vfD5v1m',
        't2PuvgG',
        'y3jVBNrHC2TZx2XVzW',
        'ALvTuee',
        'runjrvnFufvcs0vz',
        'y1n0sgm',
        'ChjVDg9JB2W',
        'A3vIzwXLDa',
        'CMvZAxPL',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'u1b3uu4',
        'DxrMltG',
        'yNDsDge',
        'C3DHCf90B3rHBa',
        'cVcFKQeG6kEJ5yAZ5PA55RovoG',
        'Cuj4s0O',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'C3rYAw5NAwz5',
        'yxzNtg9Hza',
        'z2v0t25LDgLTzuXVz3m',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'Bg9JywXqCML2qJy0',
        'vg9Qtfq',
        'B1LUAuu',
        'rMTOyvy',
        'vefts19usu1ft1vu',
        'AxnwywXPzeLqDJq',
        'tuTTrhm',
        'whDLqLe',
        's3vIzxjUzxrLCW',
        'x2nOzwnRqwnJzxnZ',
        'C1zssNm',
        'zwnhB0W',
        'ywnJzxnZu3LUyW',
        'CYa+ia',
        'Bwv0Ag9K',
        'tvzrExC',
        'BvLlAum',
        'g1S5mg1BrevcvuDDg1SWBsa',
        'tevwruXt',
        'u1fjvNK',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'zMLSDgvY',
        'thrzsMK',
        'uKH2qwK',
        'BhHJ',
        'CgfYC2u',
        'Afzirw8',
        'vfHfBe0',
        'zMfSC2u',
        'v3vWvui',
        'Chv0',
        'yMfZzty0',
        'Edi1nte5',
        'Bhv1vvC',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'BM9Pq1O',
        '8j+sPsbBuMvZCg9UC2uGrw5JCNLWDf06ia',
        'yxbWBgLJyxrPB24VANnVBG',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'mZyWma',
        'y3j5ChrV',
        'A3LYsMq',
        'BxnNuxvLDwu',
        'zxHWB3j0',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'qufpA0e'
    ];
    a0a = function () {
        return c2;
    };
    return a0a();
}