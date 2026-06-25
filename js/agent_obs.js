#!/usr/bin/env node
const a0T = a0b;
(function (a, b) {
    const S = a0b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(S(0x360)) / 0x1 + parseInt(S(0x385)) / 0x2 + parseInt(S(0x3c7)) / 0x3 + parseInt(S(0x2b5)) / 0x4 * (-parseInt(S(0x12a)) / 0x5) + parseInt(S(0x406)) / 0x6 * (-parseInt(S(0x239)) / 0x7) + -parseInt(S(0x276)) / 0x8 * (-parseInt(S(0x3e8)) / 0x9) + parseInt(S(0x15d)) / 0xa;
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0xe7e1c));
const a0c = [
    'wasm\x20streaming\x20compile\x20failed',
    'Failed\x20to\x20parse\x20URL\x20from',
    a0T(0x226)
];
function a0d(a) {
    const b = {
        'TtmoX': function (c) {
            return c();
        }
    };
    return function (c, d, f) {
        const U = a0b, g = c[U(0x240)]();
        if (a0c['some'](h => g[U(0x3a4)](h))) {
            if (typeof f === U(0x1bb))
                b['TtmoX'](f);
            return !![];
        }
        return a[U(0x1d2)](this, arguments);
    };
}
process[a0T(0x18b)][a0T(0x373)] = a0d(process[a0T(0x18b)][a0T(0x373)]), process[a0T(0x3ed)][a0T(0x373)] = a0d(process[a0T(0x3ed)][a0T(0x373)]);
const a0f = require(a0T(0x24b)), a0g = require('crypto'), a0h = require('fs'), a0i = require('fs')['promises'], a0j = require(a0T(0x16c)), a0k = require('os'), {exec: a0l} = require('child_process'), a0m = require(a0T(0x2d9)), a0n = require(a0T(0x2ad)), {encrypt: a0o} = require('eciesjs'), a0p = require(a0T(0x383)), a0q = require(a0T(0x2ac)), a0r = require(a0T(0x3d2));
let a0s, a0t;
try {
    typeof Bun !== a0T(0x282) ? a0t = require('bun-pty') : a0t = require(a0T(0x25a));
} catch (a0R) {
    console['error'](a0T(0x352)), console['error'](a0T(0x329) + a0R[a0T(0x306)]), console[a0T(0x283)](a0T(0x17d)), process[a0T(0x403)](0x1);
}
const a0u = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const V = a0T, a = {
                'xYavE': function (b, c) {
                    return b !== c;
                },
                'aJQxD': V(0x282),
                'EUAbG': function (b, c) {
                    return b !== c;
                }
            };
        return a['xYavE'](typeof a0E, a['aJQxD']) && a['EUAbG'](a0E['LOG_LEVEL'], undefined) ? a0E[V(0x2d8)] : 0x2;
    },
    'debug': a => {
        const W = a0T, b = {
                'SfSeU': function (c, d) {
                    return c <= d;
                }
            };
        b[W(0x35b)](a0u[W(0x11b)], a0u[W(0x3ad)]['DEBUG']) && console[W(0x244)](W(0x223) + a);
    },
    'info': a => {
        const X = a0T;
        a0u['currentLevel'] <= a0u[X(0x3ad)]['INFO'] && console['log'](X(0x2c8) + a);
    },
    'warn': a => {
        const Y = a0T, b = {
                'oyuuz': function (c, d) {
                    return c <= d;
                }
            };
        b[Y(0x401)](a0u[Y(0x11b)], a0u[Y(0x3ad)]['WARN']) && console[Y(0x244)](Y(0x2c2) + a);
    },
    'error': a => {
        const Z = a0T;
        a0u[Z(0x11b)] <= a0u[Z(0x3ad)][Z(0x3f8)] && console['log'](Z(0x28d) + a);
    }
};
class a0v {
    constructor(a = 'ok') {
        const a0 = a0T;
        this[a0(0x1ba)] = a;
    }
}
class a0w extends a0v {
    constructor(a = 'ok', b = 0x0) {
        const a1 = a0T;
        super(a), this[a1(0x37c)] = b;
    }
}
class a0x extends a0v {
    constructor() {
        const a2 = a0T, a = a2(0x41a)[a2(0x120)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[a2(0x2e2)] = '';
                continue;
            case '1':
                this[a2(0x318)] = '';
                continue;
            case '2':
                this[a2(0x235)] = 0x0;
                continue;
            case '3':
                this[a2(0x315)] = 0x0;
                continue;
            case '4':
                this['os'] = '';
                continue;
            case '5':
                this[a2(0x207)] = null;
                continue;
            case '6':
                super();
                continue;
            case '7':
                this[a2(0x105)] = null;
                continue;
            case '8':
                this[a2(0x3b0)] = '';
                continue;
            case '9':
                this[a2(0x1bc)] = null;
                continue;
            case '10':
                this[a2(0x3de)] = 0x0;
                continue;
            case '11':
                this[a2(0x272)] = '';
                continue;
            case '12':
                this[a2(0x26a)] = a0E['AGENT_VERSION'];
                continue;
            case '13':
                this['arch'] = '';
                continue;
            case '14':
                this['cpu_cores'] = 0x0;
                continue;
            case '15':
                this[a2(0x13e)] = '';
                continue;
            }
            break;
        }
    }
}
class a0y extends a0v {
    constructor() {
        const a3 = a0T;
        super(), this[a3(0x3df)] = { 'usage': 0x0 }, this[a3(0x20f)] = {
            'total': 0x0,
            'used': 0x0
        }, this[a3(0x266)] = {
            'total': 0x0,
            'used': 0x0
        }, this[a3(0x2f3)] = {
            'load1': 0x0,
            'load5': 0x0,
            'load15': 0x0
        }, this[a3(0x254)] = {
            'total': 0x0,
            'used': 0x0
        }, this[a3(0x2eb)] = {
            'up': 0x0,
            'down': 0x0,
            'totalUp': 0x0,
            'totalDown': 0x0
        }, this[a3(0x38b)] = {
            'tcp': 0x0,
            'udp': 0x0
        }, this['uptime'] = 0x0, this[a3(0x39e)] = 0x0, this[a3(0x306)] = '';
    }
}
class a0z extends a0v {
    constructor() {
        const a4 = a0T, a = a4(0x1c0)[a4(0x120)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[a4(0x40e)] = 0x0;
                continue;
            case '1':
                super();
                continue;
            case '2':
                this[a4(0x152)] = '';
                continue;
            case '3':
                this[a4(0x143)] = ![];
                continue;
            case '4':
                this[a4(0x18e)] = '';
                continue;
            }
            break;
        }
    }
}
class a0A {
    constructor() {
        const a5 = a0T;
        this[a5(0x412)] = '', this['path'] = '', this[a5(0x3d6)] = '', this['size'] = 0x0, this[a5(0x3ff)] = '', this[a5(0x3b9)] = '', this[a5(0x27f)] = '', this[a5(0x1b5)] = '';
    }
}
class a0B {
    constructor() {
        const a6 = a0T, a = { 'PAcDz': a6(0x3d8) }, b = a['PAcDz'][a6(0x120)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['mode'] = '';
                continue;
            case '1':
                this[a6(0x27f)] = '';
                continue;
            case '2':
                this[a6(0x412)] = '';
                continue;
            case '3':
                this[a6(0x136)] = ![];
                continue;
            case '4':
                this[a6(0x16c)] = '';
                continue;
            case '5':
                this['type'] = '';
                continue;
            case '6':
                this['writable'] = ![];
                continue;
            case '7':
                this[a6(0x185)] = ![];
                continue;
            }
            break;
        }
    }
}
class a0C extends a0v {
    constructor() {
        const a7 = a0T;
        super(), this[a7(0x1e7)] = [];
    }
}
class a0D {
    static ['_generateRawKeypair']() {
        const a8 = a0T, a = {
                'sXOmz': a8(0x201),
                'vpbDu': a8(0x361),
                'GbXOQ': a8(0x3e9),
                'FQdjx': function (i, j) {
                    return i !== j;
                },
                'fSZyX': a8(0x15f)
            }, {
                privateKey: b,
                publicKey: c
            } = a0g['generateKeyPairSync'](a[a8(0x230)]), d = b[a8(0x2dc)]({ 'format': a8(0x361) }), f = c[a8(0x2dc)]({ 'format': a[a8(0x396)] }), g = Buffer[a8(0x327)](d['d'], a[a8(0x206)]), h = Buffer['from'](f['x'], a['GbXOQ']);
        return (a['FQdjx'](g[a8(0x365)], 0x20) || h[a8(0x365)] !== 0x20) && a0u[a8(0x283)]('[🚨\x20严重警告]\x20X25519\x20密钥长度非\x2032\x20字节，Noise\x20协议必定崩溃！'), {
            'private_b64': g['toString'](a[a8(0x1f4)]),
            'public_b64': h[a8(0x240)](a[a8(0x1f4)])
        };
    }
    static [a0T(0x116)](a) {
        const a9 = a0T, b = this['_generateRawKeypair']();
        return {
            'role': a,
            'private_b64': b[a9(0x1dd)],
            'public_b64': b[a9(0x26d)]
        };
    }
    static [a0T(0x2e4)](a = a0T(0x1ad), b = 'Agent') {
        const aa = a0T, c = {
                'control': this[aa(0x116)](a),
                'agent': this['generateSingle'](b)
            };
        return c;
    }
}
class a0E {
    static [a0T(0x348)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static ['EXEC_SHELL_MODE'] = (process.env.EXEC_SHELL || a0T(0x28e))['toLowerCase']() === a0T(0x28e);
    static ['DEBUG'] = (process.env.DEBUG || 'false')[a0T(0x199)]() === a0T(0x28e);
    static [a0T(0x187)] = parseInt(process.env.TIMESTAMP_WINDOW || a0T(0x304));
    static [a0T(0x2d8)] = parseInt(process.env.LOG_LEVEL || (this['DEBUG'] ? '0' : '2'), 0xa);
    static ['ECDSA_PUBLIC_KEY_PEM'] = a0E['_getConfigValue'](a0T(0x290), a0T(0x40a)) || 'ECDSA公钥内容';
    static [a0T(0x38a)] = a0E[a0T(0x1ab)]('ECIES_PUBKEY', a0T(0x10c)) || 'ECIES公钥内容';
    static [a0T(0x14a)] = process.env.FILE_ROOT || a0k['homedir']();
    static [a0T(0x10b)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0T(0x275));
    static [a0T(0x22b)] = (process.env.FOLLOW_SYMLINKS || 'false')[a0T(0x199)]() === 'true';
    static [a0T(0x3d4)] = (process.env.FILE_AUDIT_LOG || a0T(0x28e))[a0T(0x199)]() === a0T(0x28e);
    static [a0T(0x362)] = !![];
    static [a0T(0x19a)] = [];
    static [a0T(0x12f)] = {};
    static [a0T(0x358)] = ![];
    static [a0T(0x21f)] = parseInt(process.env.TASK_TIMEOUT || a0T(0x328));
    static ['CRON_CHECK_INTERVAL'] = parseInt(process.env.CRON_INTERVAL || '30');
    static ['onetimetasks_log'] = [];
    static [a0T(0x2af)] = [];
    static ['MAX_TASK_LOG_SIZE'] = parseInt(process.env.MAX_TASK_LOG || a0T(0x30b));
    static ['HOST'] = process.env.HOST || a0T(0x2fc);
    static [a0T(0x382)] = parseInt(process.env.PORT || process.env.SERVER_PORT || a0T(0x391));
    static [a0T(0x37d)] = process.env.AGENT_VERSION || '0.2.2-js';
    static [a0T(0x3ac)] = a0g[a0T(0x12c)](0x20)[a0T(0x240)](a0T(0x15f));
    static [a0T(0x3d3)] = a0D[a0T(0x2e4)]();
    static [a0T(0x408)] = {
        'controller': { 'private': this[a0T(0x3d3)][a0T(0x1f9)][a0T(0x1dd)] },
        'agent': { 'public': this[a0T(0x3d3)]['agent']['public_b64'] }
    };
    static [a0T(0x3fe)] = 0xe10;
    static [a0T(0x22a)] = 0x1e;
    static [a0T(0x3f7)] = null;
    static [a0T(0x36e)] = 0x0;
    static ['_baseinfo_fetch_promise'] = null;
    static [a0T(0x1cc)] = null;
    static [a0T(0x1c4)] = 0x0;
    static [a0T(0x2e5)] = null;
    static [a0T(0x1ab)](a, b) {
        const ab = a0T, c = { 'TFPvG': ab(0x3c6) }, d = process.env[a];
        if (d)
            return d;
        const f = a0j[ab(0x23d)](__dirname, b);
        if (a0h[ab(0x133)](f))
            try {
                return a0h['readFileSync'](f, c[ab(0x1b6)])[ab(0x288)]();
            } catch (g) {
            }
        return '';
    }
    static ['validate']() {
        const ac = a0T, a = {
                'TGopj': 'ECIES_PUBKEY:\x20未设置环境变量且文件\x20keys/agent_ecies_pub.b64\x20不存在',
                'QGlHX': function (b, c) {
                    return b > c;
                },
                'jqqCc': ac(0x1f2),
                'ihIBV': ac(0x2d5)
            };
        if (!this['DEBUG']) {
            const b = [];
            !this['ECDSA_PUBLIC_KEY_PEM'] && b[ac(0x12b)](ac(0x172)), !this[ac(0x38a)] && b[ac(0x12b)](a[ac(0x140)]), a[ac(0x2da)](b[ac(0x365)], 0x0) && (a0u[ac(0x283)](a['jqqCc']), b[ac(0x1d3)](c => a0u[ac(0x283)]('\x20\x20\x20•\x20' + c)), a0u[ac(0x2ce)](ac(0x193)), a0u[ac(0x2ce)](ac(0x3dd)), a0u[ac(0x2ce)](a['ihIBV']), process['exit'](0x1));
        }
    }
    static [a0T(0x2cc)](a = {}) {
        const ad = a0T, b = {
                'IptoJ': function (c, d) {
                    return c !== d;
                },
                'dqxAD': function (c, d, f) {
                    return c(d, f);
                },
                'CSkth': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        b[ad(0x376)](a[ad(0x382)], undefined) && b[ad(0x376)](a[ad(0x382)], null) && (this[ad(0x382)] = b[ad(0x225)](parseInt, b[ad(0x154)](String, a[ad(0x382)]), 0xa)), a['ECDSA_PUBLIC_KEY_PEM'] && (this['ECDSA_PUBLIC_KEY_PEM'] = a[ad(0x3f9)][ad(0x288)]()), a[ad(0x38a)] && (this[ad(0x38a)] = a[ad(0x38a)][ad(0x288)]());
    }
}
class a0F {
    constructor(a, b) {
        const ae = a0T, c = {
                'sJUUp': ae(0x15f),
                'tpEjj': function (d, f) {
                    return d(f);
                },
                'OGofZ': function (d, f) {
                    return d(f);
                },
                'mkblD': ae(0x27e)
            };
        this['ecdsaPubkey'] = null, this[ae(0x269)] = null;
        if (a)
            try {
                const d = a[ae(0x288)]();
                if (d[ae(0x1d5)]('-----BEGIN'))
                    this[ae(0x181)] = a0g[ae(0x355)](d);
                else {
                    const f = Buffer[ae(0x327)](d, c[ae(0x30c)]), g = a0s[ae(0x109)][ae(0x386)](f), h = g['toBytes'](![]), i = m => m['toString'](ae(0x15f))[ae(0x139)](/\+/g, '-')[ae(0x139)](/\//g, '_')[ae(0x139)](/=/g, ''), j = c[ae(0x295)](i, Buffer[ae(0x327)](h[ae(0x255)](0x1, 0x21))), k = c[ae(0x334)](i, Buffer[ae(0x327)](h[ae(0x255)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': c['mkblD'],
                            'x': j,
                            'y': k
                        };
                    this[ae(0x181)] = a0g[ae(0x355)]({
                        'key': l,
                        'format': ae(0x361)
                    });
                }
            } catch (m) {
                a0u[ae(0x283)]('⚠️\x20ECDSA公钥加载失败:\x20' + m['message']), this[ae(0x181)] = null;
            }
        if (b)
            try {
                this[ae(0x269)] = a0p[ae(0x377)](b[ae(0x288)]());
            } catch (n) {
                a0u[ae(0x229)]('⚠️\x20ECIES公钥解码失败:\x20' + n['message']);
            }
    }
    ['verifySignature'](a, b, c) {
        const af = a0T, d = {
                'YPtpI': function (f, g) {
                    return f(g);
                },
                'Bwhhg': function (f, g) {
                    return f / g;
                },
                'pwtsS': function (f, g) {
                    return f > g;
                },
                'cCVTQ': function (f, g) {
                    return f - g;
                }
            };
        if (!this[af(0x181)])
            return !![];
        try {
            const f = d[af(0x422)](parseInt, b), g = Math[af(0x149)](d[af(0x2bb)](Date[af(0x219)](), 0x3e8));
            if (d[af(0x1ed)](Math['abs'](d[af(0x2bd)](g, f)), a0E[af(0x187)]))
                throw new Error(af(0x409) + Math[af(0x171)](g - f) + af(0x298) + a0E[af(0x187)] + 's');
            const h = '' + a + b, i = a0p[af(0x377)](c), j = a0g[af(0x417)](af(0x32b));
            return j[af(0x157)](h), j['verify'](this[af(0x181)], i);
        } catch (k) {
            throw new Error('Signature\x20verification\x20failed:\x20' + k[af(0x306)]);
        }
    }
    [a0T(0x11a)](a) {
        const ag = a0T, b = {
                'XFUVF': function (c, d, f) {
                    return c(d, f);
                },
                'aZVGb': ag(0x15f)
            };
        if (a0E[ag(0x256)] || !this[ag(0x269)])
            return JSON['stringify'](a);
        try {
            const c = JSON[ag(0x345)](a), d = Buffer['from'](c, ag(0x177)), f = Buffer[ag(0x327)](this['eciesPubkey']), g = b[ag(0x25b)](a0o, f, d);
            return Buffer[ag(0x327)](g)[ag(0x240)](b[ag(0x176)]);
        } catch (h) {
            const i = {
                '_encrypt_error': h['message'],
                '_raw': a0E['DEBUG'] ? a : null
            };
            return JSON['stringify'](i);
        }
    }
    [a0T(0x196)](a, b) {
        const ah = a0T, c = {
                'pBSea': function (d, f) {
                    return d !== f;
                },
                'ZeQpa': ah(0x15f),
                'wsBGr': 'utf8',
                'JKdPE': 'Missing\x20required\x20AES-GCM\x20fields\x20(nonce,\x20tag,\x20ciphertext)\x20in\x20payload.',
                'wuith': ah(0x367)
            };
        if (!b || c['pBSea'](b[ah(0x365)], 0x20))
            throw new Error(ah(0x3cd));
        try {
            const d = Buffer[ah(0x327)](a, c[ah(0x36f)])['toString'](c[ah(0x407)]), f = JSON[ah(0x286)](d);
            if (!f[ah(0x1fc)] || !f[ah(0x34c)] || !f['ciphertext'])
                throw new Error(c[ah(0x3bb)]);
            const g = Buffer['from'](f[ah(0x1fc)], ah(0x15f)), h = Buffer[ah(0x327)](f[ah(0x34c)], ah(0x15f)), i = Buffer[ah(0x327)](f['ciphertext'], c['ZeQpa']), j = a0g[ah(0x14c)](c['wuith'], b, g);
            j[ah(0x22e)](h);
            let k = j[ah(0x157)](i, null, c[ah(0x407)]);
            return k += j[ah(0x2a0)]('utf8'), k;
        } catch (l) {
            throw new Error(ah(0x2c0) + l[ah(0x306)]);
        }
    }
}
function a0G(a) {
    const ai = a0T, b = {
            'llCOe': ai(0x2c4),
            'gJtpL': function (c, d) {
                return c === d;
            },
            'VKECI': ai(0x415),
            'evhMM': 'x-agent-version',
            'uodCV': ai(0x3a6),
            'mrFaC': ai(0x279),
            'tmkPE': 'false',
            'ffwMr': ai(0x3c6),
            'TzBuu': ai(0x340),
            'HEkgP': ai(0x31f),
            'OtmVJ': function (c) {
                return c();
            },
            'OueDW': ai(0x141),
            'onCgZ': '/api/baseinfo',
            'fvahy': ai(0x12e),
            'iGxXZ': ai(0x1f8),
            'amSuP': ai(0x250),
            'GxXgm': ai(0x2a8),
            'MTBDy': ai(0x13b),
            'aNcxm': ai(0x18a),
            'vImcU': function (c, d) {
                return c || d;
            },
            'yAIcT': 'Missing\x20auth\x20headers',
            'zddiC': ai(0x15c),
            'ymibt': ai(0x28e),
            'xPVcO': ai(0x1ea),
            'DviWd': ai(0x177),
            'bbMiO': function (c, d) {
                return c === d;
            }
        };
    return async (c, d, f) => {
        const aj = ai, g = {
                'odmqh': b[aj(0x17b)],
                'pyYzz': 'application/json',
                'XVVbV': function (j, k) {
                    return b['gJtpL'](j, k);
                },
                'bIaoF': b['VKECI'],
                'hkEgB': b[aj(0x341)],
                'Bouwr': b[aj(0x413)],
                'HLdAI': b[aj(0x368)],
                'LfBxG': b['tmkPE'],
                'QSgXw': b[aj(0x300)]
            };
        if (c[aj(0x16c)][aj(0x1d5)](b[aj(0x1fa)]) || b[aj(0x1d0)]((c[aj(0x23c)][aj(0x38d)] || '')[aj(0x199)](), b[aj(0x1eb)]))
            return b['OtmVJ'](f);
        if (b['gJtpL'](c[aj(0x32f)], 'OPTIONS') || b['gJtpL'](c[aj(0x32f)], b['OueDW']))
            return b[aj(0x319)](f);
        c[aj(0x227)] = !![];
        const h = [
            b[aj(0x2f1)],
            b[aj(0x404)]
        ];
        if (!a0E[aj(0x256)] && !c['headers'][aj(0x174)]) {
            const j = c['headers'][aj(0x1c1)] || c[aj(0x23c)][b[aj(0x425)]], k = c[aj(0x23c)][b[aj(0x1d6)]] || c[aj(0x23c)][b[aj(0x33e)]], l = c[aj(0x23c)][b[aj(0x1d7)]] || c[aj(0x23c)][b[aj(0x3ec)]];
            if (b[aj(0x3bc)](!j, !k) || !l) {
                if (h[aj(0x3a4)](c[aj(0x16c)]))
                    c[aj(0x227)] = ![];
                else
                    return d[aj(0x1ba)](0x191)[aj(0x23e)]({ 'error': b[aj(0x31a)] });
            }
            if (c[aj(0x227)])
                try {
                    a[aj(0x287)](j, k, l);
                } catch (m) {
                    if (h[aj(0x3a4)](c[aj(0x16c)]))
                        c[aj(0x227)] = ![];
                    else
                        return d['status'](0x191)['json']({ 'error': aj(0x144) + m[aj(0x306)] });
                }
        }
        if (c[aj(0x342)] && b['gJtpL'](typeof c['body'], b[aj(0x111)])) {
            const n = b[aj(0x1d0)]((c['headers'][b[aj(0x2fe)]] || '')[aj(0x199)](), b[aj(0x389)]);
            try {
                if (n && c[aj(0x227)]) {
                    const o = Buffer[aj(0x327)](a0E['SESSION_KEY'], aj(0x15f)), p = a[aj(0x196)](c[aj(0x342)], o);
                    c[aj(0x342)] = JSON[aj(0x286)](p);
                } else {
                    if (c[aj(0x342)]['startsWith'](b['xPVcO'])) {
                        const q = Buffer[aj(0x327)](c[aj(0x342)], 'base64')[aj(0x240)](b['DviWd']);
                        c[aj(0x342)] = JSON[aj(0x286)](q);
                    } else {
                        if (c[aj(0x342)][aj(0x288)]()[aj(0x1d5)]('{') || c['body']['trim']()[aj(0x1d5)]('['))
                            c[aj(0x342)] = JSON[aj(0x286)](c['body']);
                        else {
                            if (b[aj(0x222)](c['body'][aj(0x288)](), ''))
                                c[aj(0x342)] = {};
                        }
                    }
                }
            } catch (r) {
                return a0u['error'](aj(0x3cc) + r['message']), d[aj(0x1ba)](0x190)[aj(0x23e)]({ 'error': 'Invalid\x20body\x20format:\x20' + r[aj(0x306)] });
            }
        }
        const i = d['send'];
        d[aj(0x30f)] = function (s) {
            const ak = aj;
            if (d[ak(0x3cf)](g['odmqh']) && d[ak(0x3cf)](g['odmqh'])['includes'](g['pyYzz']))
                try {
                    const t = g['XVVbV'](typeof s, 'string') ? JSON['parse'](s) : s;
                    if (c['is_authenticated']) {
                        const u = a[ak(0x11a)](t), v = typeof u === g[ak(0x1e3)] ? u : JSON[ak(0x345)](u);
                        return !a0E[ak(0x256)] && (d[ak(0x378)](ak(0x279), 'true'), d[ak(0x378)](g['hkEgB'], a0E[ak(0x37d)])), d[ak(0x378)](g['Bouwr'], Buffer[ak(0x380)](v, ak(0x3c6))[ak(0x240)]()), i['call'](this, v);
                    } else {
                        const w = g['XVVbV'](typeof s, g[ak(0x1e3)]) ? s : JSON[ak(0x345)](t);
                        return d[ak(0x378)](g[ak(0x18f)], g[ak(0x1d1)]), d[ak(0x378)](g[ak(0x38e)], Buffer[ak(0x380)](w, g[ak(0x24f)])[ak(0x240)]()), i['call'](this, w);
                    }
                } catch (x) {
                    if (a0E[ak(0x256)])
                        a0u[ak(0x283)](ak(0x2ab) + x[ak(0x306)]);
                }
            return i[ak(0x284)](this, s);
        }, b[aj(0x319)](f);
    };
}
function a0b(a, b) {
    a = a - 0x100;
    const c = a0a();
    let d = c[a];
    if (a0b['TcXwqh'] === undefined) {
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
        a0b['UijHVh'] = e, a0b['zLLFDe'] = {}, a0b['TcXwqh'] = !![];
    }
    const f = c[0x0], g = a + f, h = a0b['zLLFDe'][g];
    return !h ? (d = a0b['UijHVh'](d), a0b['zLLFDe'][g] = d) : d = h, d;
}
function a0a() {
    const c5 = [
        'rLL6twK',
        'BwfPBG',
        'zhPft2G',
        'l2fWAs9MAwXLl25LDW',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'x2DLDerPC2TjBMzV',
        'yu55zxK',
        'CMvHzezPBgvtEw5J',
        'C3DHCa',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'zvz3q0e',
        'zwnPzxnqDwjRzxK',
        'DMvYC2LVBG',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'r2v0qwn0Aw9U',
        'ChvIBgLJx2i2na',
        'ntbTyG',
        'C3rHDfn5BMm',
        'w+E7IoERR+s8MUIVNsa',
        'x2DLDenVBM5Ly3rPB25Z',
        'C2vZC2LVBL9RzxK',
        'Bw92zv9Tyxa',
        'CvDfyK0',
        'mta0odu3nJaW',
        'ogDfv2rdvW',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'Cdi1nG',
        'Ec1LBMnYExb0zwq',
        'u0nWC2e',
        'thHpq2K',
        'x3j1BLrLCM1PBMfS',
        'uNfur2O',
        'uc0Ynty',
        'Bw9Kzv9Vy3rHBa',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'DMvABLi',
        'Dw5KzwzPBMvK',
        'zxjYB3i',
        'y2fSBa',
        'y0L3tfO',
        'CgfYC2u',
        'DMvYAwz5u2LNBMf0DxjL',
        'DhjPBq',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        't1bftG',
        'A3viz1i',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'Dhj1zq',
        '8j+uHcbBq2fJAgvDiejHC2vjBMzVioE8K+wTMow3SUI/H+ACN++8Jow3SUMhJEAwSoIWG+w6PUEZU+E7N+I1HoA6KoI/M+IHJoABToAwSooaGG',
        'runeu0fFufvcs0vz',
        'Dg90ywXozxr3B3jRvxa',
        'CMvKDwnL',
        'sMntsxa',
        'tgvkyxO',
        'DhbfAMO',
        'CLHNuxy',
        'zgvSzxrLrMLSzxm',
        'CYa+ia',
        'rhL2q2W',
        'CM1KAxjtEw5J',
        'y3jVBKPVyNm',
        'zNjVBuj5DgvbCNjHEq',
        'z2LK',
        'DMfSAwrHDgu',
        'EwHMzwi',
        'zMLUywW',
        '6k+35Rgc6lAf5PE2',
        'C2vUzenPCgHLCG',
        'Efv4u28',
        'y29WEuzPBgvtEw5J',
        'lY5KB2nRzxjLBNy',
        'twTpuum',
        'rwvTEMO',
        'wc1uAw1LC3rHBxa',
        'B3zLCMXHEq',
        'BMv0D29YA0LUDgvYzMfJzxm',
        '8j+sPsbBuMvZCg9UC2uGrw5JCNLWDf06ia',
        'zxHWCMvZCY13CW',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'qwDMs2m',
        'y3jVBNrHC2TZx2XVzW',
        'CMvJDxjZAxzL',
        'tK9ju0vFqunusu9ox1nqteLu',
        'Chv0',
        'x3bHCNnLtw9Kzq',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'mJi4mZiZmMz2CvbYrG',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'CMvSzwfZzq',
        'qNDOAgC',
        'Bg9JywXqCML2qJy0',
        'y0nwvfe',
        'DgvZDa',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'zgvZDhjVEq',
        'g1SZm21Bv0fstL0BwZbTia',
        'B1zJAMK',
        'q29UDgvUDc1uExbL',
        'vffQwgy',
        'AgvHCNrIzwf0',
        'CM91BMq',
        'g1SZnM1Bsu5gt10BwZbTia',
        'v3bqyLu',
        'wf9psW',
        'v3jPDgvnzxnZywDL',
        'BwvYz2u',
        'l2jPBI9IyxnO',
        'zgvIDwC',
        'uxbgveW',
        'A3vIzwXLDa',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        'wMXpzxG',
        'DLPbu0O',
        'r0DTEvO',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'q09ovfjptf9qvujmsunFs0vz',
        'qY5vveyToa',
        'te9hx0XfvKvm',
        'BM9Kzs1JCM9U',
        'uuDSsfG',
        'BuLjAMu',
        'zxHWB3j0',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'z2v0uhvIBgLJsxbwna',
        'y0HrB24',
        'mNWZFdv8nhWWFde',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'z3b1x25HBwu',
        'zgLYzwn0B3j5',
        'z2vUzxjHDgvqywLY',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'DxvrzvK',
        'ELjTuvO',
        'D3jPDgfIBgu',
        'CMvHzhLtDgf0zq',
        'y2XLyxi',
        'BMv0D29YAW',
        'DxnL',
        'uuvnvq',
        'qKzpwMu',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'vgHOEwy',
        'B25dz1O',
        'l2fWAs9MAwXLl2nHDa',
        'Bg9Hza',
        'C2LNBMfS',
        'zw50CMLLCW',
        'C2v0t25LDgLTzvrHC2TZ',
        'ENrrr3a',
        'A3vIzxbVzhm',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'y2XLyxjdCM9Utg9NCW',
        'mc4WlJaUma',
        'x3nWBgL0qw5KrMLUAxnO',
        'EMrKAum',
        'EuHszMG',
        'zMz3txi',
        'BwLU',
        'qvHpBMS',
        'DefgBfO',
        'mZyWma',
        'z2v0tg9JywXjuhy2',
        'BwvZC2fNzq',
        'zgvSzxrL',
        'CMvZAxPL',
        'CMvSyxrPDMu',
        'Chr5uhjVy2vZCW',
        'mtaW',
        'C0Pvvxa',
        'CxnjENq',
        'iowKSEI0PtOG',
        'C2vUza',
        'B2XLyMC',
        'uKnWte8',
        'zw5K',
        'u05lvuO',
        'z2v0q3jVBLrHC2TZ',
        'C3DHCf90B3rHBa',
        'DNr1BKu',
        'Dgv4Da',
        'DMLYDhvHBgL6yxrPB24',
        't3rTvKO',
        'Eufjy1q',
        'BwTKAxjtEw5J',
        'C3bSAwnL',
        'sKrZzLO',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'D2vIC29JA2v0',
        'ELzfrNq',
        'shvvyxq',
        'D2n4zwS',
        'DvvrrMS',
        'DMf6shG',
        'zMLSDgvY',
        'BNHTBM4',
        'zNjVBq',
        'mZaW',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdOR6BNU4BPLjNOR686ia',
        'tufyx1rbu0TFte9hx1njwKu',
        'u0HbmJu2',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'Bwv0Ag9K',
        'y29UDgfPBMvYza',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'CMvXDwvZDf9Pza',
        'zg9JA2vY',
        't0DVzLO',
        'Dxb0Aw1L',
        'z2v0uMvHBhrPBwvjBMzV',
        'uL9psW',
        'DhbisNi',
        'zgrsq0u',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'x2nOzwnRqwnJzxnZ',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        'vMTjwvu',
        'r3Hyz20',
        'tLzRtLm',
        'l2fWAs93CY8',
        'zxzOtu0',
        'yM9KEq',
        'qM1QAuq',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'C3rYAw5NAwz5',
        'Aw5PDa',
        'vuLgzKO',
        'uNrPBwvVDxq',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'rezzthC',
        'tvrMChy',
        'DgfN',
        'Aw5MBW',
        'ywXS',
        'y3vYCMvUDeXVywq',
        'ChjVDg9JB2W',
        'Au5KrMS',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdMOlJLV4pNU4JNQ6/KVP3OTzyGkhb0EsKG5yQG6l295AsX6lsL77Ym56Il5BQp57Ui5Q2I77Yb',
        'yxnZAwDU',
        'm3WXFdj8nhW1Fda',
        'y3jLyxrLuhvIBgLJs2v5',
        'yNjHBMq',
        'qNvxyKK',
        'y3jVBMXVB3a',
        'Eg9uuwW',
        'rhDLDLG',
        'u2ztzvu',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'z2v0tg9JywXjuhy0',
        'tgDfC0e',
        'B25LDgLTzxrHC2TZx2XVzW',
        'mty3ntG1nwj6B1LSEq',
        'ANDR',
        'sw5PDfrHC2S',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'zxHLy3v0zq',
        'BgvUz3rO',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'ywvZlti1nI1Ny20',
        'Bxjgyum',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'C3nizw8',
        'l2fWAs9MAwXLl2XPC3q',
        'l2jPBI9ZAa',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        'x2jHC2vPBMzVx2nHy2HLx3rPBwu',
        'wMvrCge',
        'zgvJCNLWDa',
        'DhLQB3e',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'D3jPDgu',
        'z2XNswe',
        'l3bYB2mVms9LBNzPCM9U',
        'sxb0B0O',
        'Dg9cExrLqxjYyxK',
        'C2v0',
        'v2Hkv3q',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'Ec1MAwXLlxnPEMu',
        'y291BNq',
        'quDftLrFvKvsu0LptG',
        'x2LZqMLUyxj5',
        'z2v0t25LDgLTzvrHC2TZ',
        'yNL0zuXLBMD0Aa',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'ue9sva',
        'yMfZzty0lwPZ',
        'z0vwB3q',
        'mtm0mdq3nM9lyLbWwq',
        'zNjVBuj5DgvZ',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'EfLwDgi',
        'Ew1PyNq',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'y29UBMvJDgLVBNm',
        'A2vYBMvS',
        'DxbNCMfKzq',
        'qM91D3i',
        'vKTmEgC',
        'EhrLCM0TmJu2y29SB3i',
        'odaWma',
        'BhHZB2G',
        'r0resg8',
        'DMP5qKK',
        'we1bAxa',
        'DNbIrhu',
        'CMvJDKnPCgHLCG',
        'r3for2C',
        'BhHJ',
        'yLzVyve',
        'vevstq',
        'u0znDui',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'ChjVy2vZCW',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'Dg90ywW',
        'Avnhueq',
        'Aez3uMm',
        'Dg9ju09tDhjPBMC',
        'Aw5JBhvKzxm',
        'DxnLza',
        'q29UDgvUDc1mzw5NDgG',
        'zxnIvuO',
        'Ec1VCMLNAw5HBc1WyxrO',
        'ywnsCLu',
        'z2v0t25LDgLTzuXVz3m',
        'D3LUB0S',
        'u0vtu0LptL9lrvK',
        'tevwruXt',
        'lNvWBg9Hzf9JAhvUA3m',
        'zgLZDhjV',
        'A2vYBMvSx3zLCNnPB24',
        'z2v0uhvIBgLJsxbwnG',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'B25LDgLTzq',
        'Cgf0Adi',
        's3vIzxjUzxrLCW',
        'uxfiENe',
        '8j+tPIbBq2fJAgvDiejHC2vjBMzViowrVEs4REACIEAvIoE8K+wTMo+8JoEBToAoPEI+K+whUUoaGG',
        'C3rVCa',
        'Bw9Kzq',
        'zMLSzq',
        'sKTKueu',
        'DKLTy1u',
        'y1LkCxK',
        'Bwf4',
        'yxzNtg9Hza',
        'se9tva',
        'rMPOv2S',
        'y29SCW',
        'zgvSzxrLza',
        'l2fWAs9MAwXLl2nW',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'DxrMoa',
        'mJu1mdaWowPNDKrmAW',
        'CMvHzezPBgu',
        'uwnAA0C',
        'C2HPzNq',
        'ug9KBwfU',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'z2v0',
        't0LfEfm',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'BM9PC2uTyY53yxnT',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'rKLmrv9bvurjvf9mt0C',
        'rgvJCNLWDfDPDgHbza',
        'DhLWzq',
        'wen6Auu',
        'nhWYFdb8mxW1Fdn8nNW3',
        'CxzdDMW',
        'y29UC3rHBNrZ',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'BwvTx3rVDgfS',
        'y3b1',
        'yxbwCgW',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'ywnJzxnZu3LUyW',
        'y2XLyw51Ca',
        'x2fWCgvUzeXVzW',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'yMLhywi',
        'BhnLwgm',
        'mti1odeZotDkqMjZr04',
        'yMfZzty0DxjS',
        'C3DHChvZzwq',
        'y2f0y2G',
        'yu5JEg0',
        'C3rKzxjY',
        'q2XLyw5SEsbJBg9Zzwq',
        'rMLSzsb0B28GBgfYz2u',
        'BgLTAxq',
        'tK9ju0vFuK9mrv9jtKLusufut1i',
        'rNPxBMe',
        'zgf0yq',
        'A2v5CW',
        'CMvXDwvZDeLK',
        'Dw5RBM93BG',
        'x2jHC2vPBMzVx2nHy2HL',
        'rvjst1i',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'Axnoyu4',
        'zg93BMXVywrgAwXL',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'zMv0y2Hjua',
        'qKftruLorK9Fq0fdsevFvfrm',
        'BxrPBwu',
        'quHPwgy',
        'B3L1DxO',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'zxHPDa',
        'zNzHAhK',
        'svb2na',
        'mJu4nMHttxfZEa',
        'D3ncr3i',
        'tK9ju0vFs0vz',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'lcbtAwDUywW6ia',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'tffUy2m',
        'zxHPDgnVzgu',
        'sxz3A3m',
        'Cfz1sM0',
        'C2v0q3jVBLrHC2TZ',
        'BMfTzq',
        'Dw9Kq1y',
        'uhLjrNi',
        'C3rYAw5N',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'y3jLyxrLvMvYAwz5',
        'uhryCwu',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'nNWXm3WXnhWXnxWYFdb8n3W1FdeWFdr8ohWZFdeYFdf8mtf8oq',
        'ywDIC2G',
        'AgvHzgvY',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'zNjLzq',
        'txbwsxm',
        'shvYr2e',
        'Cg9ZDa',
        'wvb0CeK',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lgf1DgHVCML6yxrPB24SihGTBM9Uy2uSihGTDgLTzxn0yw1Wlcb4lwf1DgGTDg9Rzw4SihGTywvZlwvUy3j5ChrLzcWGEc1Kzwj1zW',
        'y29Yzxm',
        'AuD4wfO',
        'AxnwywXPzeLqDJq',
        'zMLSzw5HBwu',
        'CLr5uui',
        'x2zVCM1HDe1Vzgu',
        'l3bVzhmV',
        'CMvZB2X2zq',
        'Axb2na',
        'zxHWB3j0CW',
        'sMneBe4',
        'DgHLBG',
        'ug9PBNq',
        'Ahr0Chm',
        'tufyx1vqte9brf9tsvPf',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'y3jVBG',
        'l2jPBI96C2G',
        'y2XVC2u',
        'y29UDgvUDa',
        'vKTfq0K',
        'Cgf0Ahm',
        'B3njBMzV',
        'zgLYBMfTzq',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'z2vUzxjHDgvtAw5NBgu',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'Dg9Rzw4',
        'rMzStKi',
        'zw5JCNLWDfjLC3bVBNnL',
        'y3vYCMvUDeXLDMvS',
        'DgvYBwLUywW',
        'BvrStKO',
        'y3DK',
        'zMu4mdO',
        'C3bSAxq',
        'z2v0q3jVBKXVz3m',
        'turSEgi',
        'quDftLrFufjjvKfurv9lrvK',
        'yMDvtxu',
        'CKv4q2u',
        'DxnLtM9PC2u',
        'sgLUqxu',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'rhLyBLC',
        'mtb4rwvRC1u',
        'ChvZAa',
        'CMfUzg9TqNL0zxm',
        'Ahr0Chm6lY9PCgvJAg8UBMv0l3bSywLU',
        'l2fWAs9ZDgf0Dxm',
        'y3jVBNrHC2TZ',
        'seLywMG',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'zNntAxPL',
        'zxHPC3rZu3LUyW',
        'tfHd',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        'CMvHzgfIBgu',
        'sw5PDgLHBgL6zq',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'CMvWBgfJzq',
        'sM1urwG',
        'Ec1HDxrOlxrVA2vU',
        'DvjqsNG',
        'CwnOCxi',
        'y3b1x25HBwu',
        'BeT3BgO',
        'veDVCgO',
        'sevbra',
        'wunyBeK',
        'DgLTzw91Da',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'weLntue',
        'l3bYB2mVy3b1Aw5MBW',
        'vMrHCui',
        'CvnuC3a',
        'zMXVB3i',
        'rKLmrv9st09u',
        'whPeuxm',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'vwXXy3G',
        'CMvHzgrPCLn5BMm',
        'zMfTAwX5',
        'mxWWFdn8nhWY',
        'sLrysLO',
        'y21K',
        'Dg1WzNm',
        'q1nRDgG',
        'CxvLCNK',
        'BgfZDe5LDhDVCMTuAw1L',
        'DxbKyxrL',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'Aw50zxjUywW',
        'sMT4twe',
        'BwvT',
        'Ec1HzxmTzw5JCNLWDgvK',
        'mtq3ndq2nJbus1jWyxm',
        'CgLK',
        'yMfZzty0',
        'quzMsfK',
        'zw5JCNLWDa',
        'Dgznwg0',
        'xsdIMQdVUi8G5OYh5lUK5Ase55cg5BYc5BI4oIa',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'zMf3DMS',
        'ruTxy2y',
        'u3vrs0K',
        'A1zuvKu',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'Cgf0Aa',
        'yu5YBhK',
        'svb2nG',
        '6i635y+wieLqiowCSowDGowKSEI0PtOG',
        'C2v0vgLTzw91Da',
        'ywjZ',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'u3jUtgO',
        'Ec1Kzwj1zW',
        'l2fWAs9MAwXL',
        'yvPwr2i',
        'DxrMltG',
        'zw52',
        'x3jLy2vPDMvxC0j5DgvZ',
        'ALvJCui',
        'BgXdt2u',
        'y3zAvui',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'z2v0qMfZAwnjBMzV',
        'tgniAM8',
        'uvnPvve',
        'zwnKC2fqDwjRzxK',
        'q29UzMLNihzHBgLKyxrLza',
        'BwfW',
        'ywXSB2m',
        'zxHLy3v0ywjSzq',
        'rMLSzsbUB3qGzM91BMq',
        'veLnrvnuqu1qx1DjtKrpvW',
        'DxjSzw5JB2rLza',
        'BgLZDgvU',
        'wc1bDxrOlvrVA2vU',
        'C3rKB3v0',
        '6k6/6zEUia',
        'DvzgD0i',
        'CMvZDwX0',
        'seXKquK',
        'tNnWy1G',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'ufLvzvC',
        'cVcFKQeG6kEJ5yAZ5PA55RovoG',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'rezlvvm',
        'zgvJCNLWDerHDge',
        'x2zVCM1HDeXVz0vUDhj5',
        'u3bSAxq',
        'Dg9mB3DLCKnHC2u',
        'B25LDgfZA3m',
        'l2fWAs90yxnRl3n0yxr1CW',
        'zuvKrfu',
        'BMvet1q',
        'C2nOzwr1Bgu',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'tM9Uzq',
        'u0Lhsu5uigHHBMrSzxiGCMvNAxn0zxjLza',
        'wuXeuey',
        'ruvkugu',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'Dw5SAw5Ru3LUyW',
        'D0PODM4',
        'reLcBfG',
        'AxnjBML0Awf0B3i',
        'AxnwywXPzeLqDJy',
        'v3Hey3C',
        'x2DLDenVBMzPz1zHBhvL',
        'uNv4Aw8',
        'q29UDhjVBgXLCG',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'CM93CW',
        'CgvYBwLZC2LVBNm',
        'C3DHChrVDgfS',
        'z3zODKC',
        'CgfKu3rHCNq',
        'l2jPBI9HC2G',
        'B3DUzxi',
        'vezqDKC',
        'AgfUzhnOywTL',
        'DhHFyNL0zxm',
        'suvqrMC',
        'C3rHDhvZ',
        'zNvUy3rPB24',
        'BM9PC2vFA2v5',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'D3jPDgvgAwXLu3LUyW',
        'mxW0Fdb8m3WY',
        'Ec1UB25Jzq',
        'tfvLqxa',
        'CNrmugS',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'x2jHC2vPBMzVx2zLDgnOx3bYB21PC2u',
        'Dg90ywXFy2H1BMTZ',
        'l2rLDI8',
        'rNfWu2q',
        'C3rHDhvZq29Kzq',
        'nhWXFdn8mNWW',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'x3n0yxr1C19JywnOzq',
        'BxnNuxvLDwu',
        'Eg9pz0y',
        'ywnJzxnZx2rLBMLLza',
        'z0P0CeW',
        'tgzcEeC',
        'yxbWBhK',
        'zM9YrwfJAa',
        'yuv0zLi',
        'C3rHCNrZv2L0Aa',
        'yw1tDva',
        'tvrcrhK',
        'weLPEg8',
        'sLn5sNi',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        't1busu9ouW',
        'rKP6t0u',
        'ChjPDMf0zv9InJq',
        'swrxsLq',
        'CLj0zNa',
        'yuj1AMq',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'twLZC2LUzYbJAhvUAYa',
        'yKLHB0y',
        'zw5JB2rPBMC',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'BM90x2zVDw5K',
        'zMLSzxm',
        'y29WEuzPBgvZ',
        'wLjbtNO',
        'zxLk',
        'sevRz1a',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'ChD0C1m',
        'C2L6zq',
        'EM1MCKq',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'l2fWAs90yxnRl29UzxrPBwu',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        's2zlwKu',
        'zLnAEvG',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'ufbKAhy',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'wc1oB25Jzq',
        'y29UDhjVBa',
        'vhPcDxu',
        'yMD5ywW',
        'BM9Uy2u',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'v0rJrhq',
        'Dg90ywXozxr3B3jRrg93BG',
        'y2H1BMTF',
        'Edi1nte5',
        'suDhEgW',
        'BgLZDezPBgvZ',
        'yxjJAa',
        'q1jptL9dsevds19jtLrfuLzbta',
        'r2jyt1e',
        'Axb2nG',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'y2HTB2rtEw5J',
        'A2LSBgvK',
        'y1L3CLa',
        'B2jQzwn0',
        'zKHUsee',
        'BNvTyMvY',
        'CMfT',
        'BvDgt1y',
        'q1brEgK',
        'sgfUzhnOywTLu3rHDgu',
        'BNzvu2y',
        'u2H1DhrPBMCGzg93BI4UlG',
        'ywrKCMvZCW',
        'C2Hhreq',
        'Bw92zuzPBgvZ',
        'sKzvB1u',
        'BM93',
        'teforW',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'q0fTCfC',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'uwvwtwe',
        'vefts19usu1ft1vu',
        'Cu1WuuO',
        'q3v5AMq',
        'yMjnAu8',
        'g1S5mg1BrevcvuDDg1SWBsa',
        'DxbSB2fKrMLSzq',
        'zhf4quq',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'AxnFyxv0AgvUDgLJyxrLza',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'D2fYBG',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'rK9mte9xx1nztuXjtKTt',
        'Cw9fBK0',
        'y3btEw5J',
        'C2v0qxv0AfrHzW',
        'DxjS',
        'C1HpBxO',
        'BvjqBfK',
        'uMvHze1LC3nHz2u',
        'l2fWAs9LEgvJ',
        'C3rHCNrtzxnZAw9U',
        'zgLZA190B3rHBa',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'vNr3B0C',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'mtaXntDRDe5KCfO',
        'zxvYsw4',
        'BxnNuMvZB2X2zxjZ',
        'AgvHzgvYCW',
        'AM9PBG',
        'ANnVBG',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'Dg9tDhjPBMC',
        'y2LWAgvY',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'CvfAu00',
        'Bg9N',
        'C09gANi',
        'B25fEgL0',
        'uM1svNO',
        'zK1nu2K',
        'sfrQA1C',
        'y3jLyxrLrgLYzwn0B3j5',
        'zxHWCMvZCW',
        'zNjOz2G',
        'DfbKDM0',
        'B25eyxrH',
        'uvnNwhC',
        'Ec10Aw1LC3rHBxa',
        'y29Kzq',
        'y29UDgvUDc10ExbL',
        'tMr5zwi',
        'zgLZAW',
        'C2XPy2u',
        'revcvuC',
        'CgHHC2u',
        'A2LSBa',
        'AxneAxjLy3rVCNK',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'wezvvKy',
        'qNPHAva',
        'sfruuca'
    ];
    a0a = function () {
        return c5;
    };
    return a0a();
}
class a0H {
    constructor() {
        const al = a0T, a = {
                'FDMvc': function (b, c) {
                    return b / c;
                }
            };
        this[al(0x381)] = {
            'rx': 0x0,
            'tx': 0x0
        }, this['totalNetworkUp'] = 0x0, this[al(0x1ff)] = 0x0, this[al(0x156)] = a['FDMvc'](Date[al(0x219)](), 0x3e8);
    }
    async [a0T(0x117)]() {
        const am = a0T, a = {
                'nPvuc': am(0x369),
                'LQncc': function (d, f) {
                    return d === f;
                },
                'tfMXm': am(0x3be),
                'DFYLw': function (d, f, g) {
                    return d(f, g);
                },
                'HIXZh': function (d, f, g) {
                    return d(f, g);
                },
                'FflNB': am(0x1fd),
                'lKwlj': am(0x372),
                'eurIn': 'utf8',
                'aPoMK': function (d, f) {
                    return d > f;
                },
                'tyjoq': function (d, f) {
                    return d === f;
                },
                'mWFOV': function (d, f) {
                    return d(f);
                },
                'nxmnn': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0i[am(0x3c8)](a['nPvuc'], am(0x3c6)))[am(0x288)]();
            b = a[am(0x40d)](d, a[am(0x162)]) ? null : a[am(0x34a)](parseInt, d, 0xa), c = a[am(0x130)](parseInt, (await a0i['readFile'](a[am(0x119)], am(0x3c6)))[am(0x288)](), 0xa);
        } catch {
            try {
                b = a['HIXZh'](parseInt, (await a0i['readFile'](a[am(0x13f)], 'utf8'))['trim'](), 0xa), c = a['DFYLw'](parseInt, (await a0i[am(0x3c8)]('/sys/fs/cgroup/memory/memory.usage_in_bytes', a[am(0x23a)]))[am(0x288)](), 0xa);
                if (a['aPoMK'](b, 0x7ffffffffffff000))
                    b = null;
            } catch {
                const f = await a0n[am(0x15b)]();
                b = f[am(0x3a0)], c = f['used'];
            }
        }
        if (a[am(0x40d)](b, null)) {
            const g = await a0n[am(0x15b)]();
            b = g['total'], (a[am(0x371)](c, null) || a[am(0x210)](isNaN, c)) && (c = g[am(0x3a5)]);
        }
        return {
            'total': b,
            'used': c,
            'available': a['nxmnn'](b, c),
            'free': a[am(0x326)](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0T(0x17e)]() {
        const an = a0T, [a, b, c, d] = await Promise['all']([
                a0n['cpu'](),
                this[an(0x117)](),
                a0n[an(0x113)](),
                a0n[an(0x2aa)]()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise['all']([
                this[an(0x2de)](),
                this[an(0x3b1)]()
            ]);
        } catch (h) {
            a0u[an(0x2ce)](an(0x16f) + h[an(0x306)], 0x1);
        }
        return {
            'arch': a0k[an(0x204)](),
            'cpu_cores': a[an(0x424)],
            'cpu_name': a[an(0x356)],
            'disk_total': (await a0n[an(0x132)]())[0x0]?.[an(0x1ee)] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b[an(0x3a0)],
            'os': c[an(0x3af)] + '\x20' + c[an(0x2ba)],
            'kernel_version': c[an(0x38c)],
            'swap_total': b['swaptotal'],
            'version': a0E[an(0x37d)],
            'virtualization': await this['_getVirtualization'](),
            'session_key': a0E[an(0x3ac)],
            'noise_key': a0E['NOISE_KEY']
        };
    }
    [a0T(0x35d)]() {
        const ao = a0T, a = {
                'ztQGp': function (c, d) {
                    return c === d;
                },
                'PyIFr': function (c, d) {
                    return c === d;
                }
            }, b = a0k[ao(0x2aa)]();
        for (const c of Object[ao(0x3f4)](b)) {
            for (const d of b[c]) {
                const f = a[ao(0x2f7)](d[ao(0x14f)], ao(0x405)) || a[ao(0x414)](d[ao(0x14f)], 0x4);
                if (f && !d[ao(0x159)]) {
                    if (!/^10\./[ao(0x2be)](d[ao(0x215)]) && !/^192\.168\./[ao(0x2be)](d[ao(0x215)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./['test'](d[ao(0x215)]))
                        return d[ao(0x215)];
                }
            }
        }
        return null;
    }
    async [a0T(0x2de)]() {
        const ap = a0T, a = {
                'CAmpW': ap(0x3ce),
                'oZZhC': ap(0x2e1),
                'kVTVE': ap(0x3b2),
                'GGmyZ': ap(0x12d),
                'rDTgp': 'https://ipinfo.io/ip',
                'LqpBy': ap(0x277)
            }, b = [
                a[ap(0x21c)],
                a['oZZhC'],
                a[ap(0x16a)],
                ap(0x115),
                a[ap(0x2d4)],
                a['rDTgp'],
                a['LqpBy']
            ];
        for (const d of b) {
            try {
                const f = await this[ap(0x3fd)](d, 0x4);
                if (f && this['isValidIPv4'](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this['getLocalIPv4']();
        if (c && this[ap(0x426)](c))
            return c;
        return null;
    }
    [a0T(0x305)]() {
        const aq = a0T, a = {
                'ebFDL': aq(0x16e),
                'IAYTR': function (c, d) {
                    return c === d;
                },
                'MkOQC': aq(0x11f)
            }, b = a0k[aq(0x2aa)]();
        for (const c of Object['keys'](b)) {
            for (const d of b[c]) {
                const f = d['family'] === a['ebFDL'] || a['IAYTR'](d[aq(0x14f)], 0x6);
                if (f && !d[aq(0x159)]) {
                    if (!d[aq(0x215)][aq(0x199)]()[aq(0x1d5)](a[aq(0x2a6)]))
                        return d[aq(0x215)];
                }
            }
        }
        return null;
    }
    async ['getPublicIpV6']() {
        const ar = a0T, a = {
                'Mhdfe': 'https://api6.ipify.org',
                'xUxSo': ar(0x208)
            }, b = this[ar(0x305)]();
        if (b && this[ar(0x1a9)](b))
            return b;
        const c = [
            a['Mhdfe'],
            ar(0x2e1),
            a[ar(0x2a3)]
        ];
        for (const d of c) {
            try {
                const f = await this[ar(0x3fd)](d, 0x6);
                if (f && this['isValidIPv6'](f))
                    return f;
            } catch (g) {
                a0u[ar(0x2ce)](ar(0x18c) + d + ar(0x30e) + g['message']);
                continue;
            }
        }
        return null;
    }
    async ['fetchIP'](a, b = 0x0) {
        const as = a0T, c = {
                'zmfrD': function (d, f) {
                    return d(f);
                },
                'mpoTA': as(0x3f3),
                'JDsfZ': as(0x312),
                'FjhWk': as(0x2a1),
                'rExCe': function (d, f) {
                    return d(f);
                },
                'RCpLO': 'text/plain',
                'eEdDU': as(0x283)
            };
        return new Promise((d, f) => {
            const au = as, g = {
                    'vtunE': function (k, l) {
                        const at = a0b;
                        return c[at(0x1ef)](k, l);
                    },
                    'AXOnk': c['mpoTA'],
                    'VdaqB': c[au(0x31d)],
                    'HinAu': function (k, l) {
                        return k(l);
                    },
                    'KMTnW': c[au(0x3c1)]
                }, h = c[au(0x125)](require, au(0x10a)), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': c[au(0x311)] }
                }, j = h[au(0x3cf)](a, i, k => {
                    const av = au;
                    let l = '';
                    if (k[av(0x1c9)] !== 0xc8) {
                        g[av(0x316)](f, new Error(av(0x25d) + k['statusCode']));
                        return;
                    }
                    k['on'](g[av(0x302)], m => l += m), k['on'](g[av(0x147)], () => d(l[av(0x288)]()));
                });
            j['on'](c[au(0x19c)], f), j[au(0x170)](0x1388, () => {
                const aw = au;
                j[aw(0x2c1)](), g[aw(0x127)](f, new Error(g['KMTnW']));
            });
        });
    }
    [a0T(0x426)](a) {
        return /^(\d{1,3}\.){3}\d{1,3}$/['test'](a);
    }
    ['isValidIPv6'](a) {
        if (!/^[0-9a-fA-F:]+$/['test'](a) || !a['includes'](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i['test'](a))
            return ![];
        return !![];
    }
    async ['getRealtimeInfo']() {
        const ax = a0T, a = {
                'JcDlN': function (m, n) {
                    return m / n;
                },
                'VtwoG': function (m, n) {
                    return m - n;
                },
                'cHQon': function (m, n) {
                    return m / n;
                },
                'uRPJx': function (m, n) {
                    return m * n;
                }
            }, [b, c, d, f] = await Promise['all']([
                a0n['currentLoad'](),
                a0n[ax(0x15b)](),
                a0n['networkStats'](),
                a0n[ax(0x34f)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[ax(0x107)](Date['now'](), 0x3e8), i = h - this['lastNetworkTime'], j = a[ax(0x237)](g[ax(0x1b8)], this[ax(0x381)]['tx']), k = g['rx_bytes'] - this[ax(0x381)]['rx'];
        this[ax(0x291)] += j, this[ax(0x1ff)] += k, this[ax(0x381)] = {
            'tx': g[ax(0x1b8)],
            'rx': g['rx_bytes']
        }, this['lastNetworkTime'] = h;
        const l = await a0n['processes']();
        return {
            'cpu': { 'usage': Math['round'](b[ax(0x34f)]) },
            'ram': {
                'total': c[ax(0x3a0)],
                'used': c['active']
            },
            'swap': {
                'total': c[ax(0x1b1)],
                'used': c[ax(0x3ea)]
            },
            'load': {
                'load1': a[ax(0x2df)](Math[ax(0x2c7)](a[ax(0x13c)](f[ax(0x3bf)], 0x64)), 0x64),
                'load5': Math[ax(0x2c7)](f['avgLoad'] * 0x64) / 0x64,
                'load15': a[ax(0x2df)](Math[ax(0x2c7)](a[ax(0x13c)](f['avgLoad'], 0x64)), 0x64)
            },
            'disk': await this['_getDiskInfo'](),
            'network': {
                'up': Math[ax(0x2c7)](a['JcDlN'](j, i)),
                'down': Math['round'](a['JcDlN'](k, i)),
                'totalUp': this[ax(0x291)],
                'totalDown': this[ax(0x1ff)]
            },
            'connections': await this['_getConnections'](),
            'uptime': a0k[ax(0x335)](),
            'process': l?.[ax(0x34e)] || 0x0,
            'message': ''
        };
    }
    async [a0T(0x419)]() {
        const ay = a0T, a = {
                'iLkmA': ay(0x2a5),
                'neDOT': 'Docker',
                'ytwzh': ay(0x1be),
                'PYUeW': '/proc/1/cgroup',
                'mRPlY': ay(0x3c6),
                'LUeAp': ay(0x333),
                'CCZjf': ay(0x330),
                'XzDQs': ay(0x2f8),
                'MKrXM': ay(0x3b5),
                'gtoAG': ay(0x399),
                'HTjkW': ay(0x1f0),
                'bIRNG': ay(0x36d),
                'esbUJ': ay(0x2d1),
                'WhJWt': ay(0x103),
                'LeJaz': ay(0x2d0),
                'olebg': ay(0x375),
                'FtbYq': 'container=lxc',
                'iSGPD': 'LXC',
                'BuWbI': ay(0x146),
                'WxDcw': 'KVM',
                'vjyBI': ay(0x1a0)
            };
        try {
            if (a0h['existsSync'](a['iLkmA']))
                return a['neDOT'];
            if (a0h[ay(0x133)](a['ytwzh']))
                return ay(0x3cb);
            if (a0h[ay(0x133)](a[ay(0x192)])) {
                const b = a0h[ay(0x265)](a[ay(0x192)], a[ay(0x231)])[ay(0x199)]();
                if (b[ay(0x3a4)](a[ay(0x1c2)]) || b['includes'](a['CCZjf']))
                    return 'Docker';
                else {
                    if (b[ay(0x3a4)](a[ay(0x14b)]))
                        return a['MKrXM'];
                    else {
                        if (b[ay(0x3a4)](a['gtoAG']))
                            return ay(0x134);
                    }
                }
            }
            if (a0h[ay(0x133)](a['HTjkW'])) {
                const c = a0h[ay(0x265)](a[ay(0x249)], a[ay(0x231)]);
                if (c[ay(0x3a4)](a['bIRNG']) || c[ay(0x3a4)](a[ay(0x3a7)]))
                    return a[ay(0x19d)];
                else {
                    if (c[ay(0x3a4)](a[ay(0x379)]) || c[ay(0x3a4)](a[ay(0x294)]))
                        return a['MKrXM'];
                }
            }
            if (a0h['existsSync'](a['olebg'])) {
                const d = a0h[ay(0x265)](a[ay(0x310)], a[ay(0x231)]);
                if (d[ay(0x3a4)](a['FtbYq']))
                    return a[ay(0x3a1)];
            }
            if (a0h[ay(0x133)](a[ay(0x357)])) {
                const f = a0h['readFileSync'](a[ay(0x357)], a[ay(0x231)]);
                if (f['includes']('QEMU') || f['includes'](a[ay(0x1aa)]))
                    return ay(0x2ed);
            }
        } catch (g) {
        }
        return a[ay(0x394)];
    }
    async [a0T(0x263)]() {
        const az = a0T, a = {
                'EEJPe': function (b, c) {
                    return b > c;
                },
                'SNKUJ': function (b, c) {
                    return b !== c;
                },
                'qvCvl': az(0x153),
                'HuUat': az(0x2a9),
                'BmjiD': az(0x1c7)
            };
        try {
            const b = await a0n['fsSize'](), c = b['filter'](g => {
                    const aA = az;
                    return a[aA(0x1a3)](g[aA(0x1ee)], 0x0) && a[aA(0x313)](g['type'], a[aA(0x3d9)]) && g[aA(0x3d6)] !== a[aA(0x321)] && g['fs'][aA(0x1d5)](a[aA(0x343)]);
                }), d = c[az(0x292)]((g, h) => g + h[az(0x1ee)], 0x0), f = c['reduce']((g, h) => g + h[az(0x3a5)], 0x0);
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
    async [a0T(0x271)]() {
        const aB = a0T;
        try {
            const a = await a0n[aB(0x21b)](), b = a['filter'](d => d['protocol'] === 'tcp')[aB(0x365)], c = a['filter'](d => d[aB(0x350)] === 'udp')[aB(0x365)];
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
    static async [a0T(0x364)](a, b = {}) {
        const aC = a0T, c = {
                'YCXlI': function (d, f) {
                    return d || f;
                },
                'rRtfp': function (d, f) {
                    return d === f;
                },
                'EKWcf': aC(0x20e),
                'wynoK': function (d, f) {
                    return d(f);
                },
                'jUcqB': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'FbQgt': function (d, f) {
                    return d * f;
                },
                'AEmCY': function (d, f) {
                    return d * f;
                },
                'FEJOY': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process['cwd'](),
                env: env = {},
                timeout: timeout = a0E[aC(0x348)]
            } = b;
        return new Promise(d => {
            const aD = aC, f = Date['now'](), g = c[aD(0x17a)](a0l, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c['FbQgt'](timeout, 0x3e8),
                    'maxBuffer': c['AEmCY'](c['FEJOY'](0xa, 0x400), 0x400)
                }, (h, i, j) => {
                    const aE = aD, k = Date[aE(0x219)]() - f, l = h && h[aE(0x20a)] && h[aE(0x2f4)];
                    let m = c[aE(0x142)](i, '');
                    if (j)
                        m += j;
                    let n = 0x0;
                    if (h) {
                        if (l)
                            n = 0x7c;
                        else
                            c[aE(0x1df)](typeof h[aE(0x251)], c[aE(0x168)]) ? n = h[aE(0x251)] : n = -0x1;
                    }
                    c[aE(0x3ab)](d, {
                        'result': m,
                        'exitcode': n,
                        'timeout': l,
                        'cmd': a
                    });
                });
        });
    }
}
class a0J {
    static async [a0T(0x203)](a, b = ![]) {
        const aF = a0T, c = {
                'IdWJT': aF(0x2e3),
                'QHrJk': aF(0x3ba),
                'XIixo': function (h, i) {
                    return h & i;
                },
                'cIwLZ': function (h, i) {
                    return h || i;
                },
                'ovScv': aF(0x1ec)
            }, d = a0j['resolve'](a0E[aF(0x14a)], c[aF(0x285)](a, '.'));
        if (!d[aF(0x1d5)](a0E['FILE_ROOT']))
            throw new Error(c['ovScv']);
        if (!a0h[aF(0x133)](d))
            throw new Error('Path\x20not\x20found');
        const f = [], g = h => {
                const aG = aF, i = a0h[aG(0x14e)](h);
                for (const j of i) {
                    const k = a0j[aG(0x23d)](h, j), l = a0h[aG(0x26f)](k), m = new a0A();
                    m[aG(0x412)] = j, m[aG(0x16c)] = a0j[aG(0x309)](a0E[aG(0x14a)], k), m[aG(0x3d6)] = l[aG(0x259)]() ? c[aG(0x1de)] : c['QHrJk'], m[aG(0x1ee)] = l[aG(0x1ee)], m[aG(0x3ff)] = l[aG(0x3ff)][aG(0x3a3)](), m[aG(0x3b9)] = this['_formatMode'](l['mode'], l['isDirectory']()), m[aG(0x27f)] = '0o' + c[aG(0x1d8)](l['mode'], 0x1ff)[aG(0x240)](0x8), m[aG(0x1b5)] = l['uid'] + ':' + l[aG(0x29d)], f['push'](m), b && l[aG(0x259)]() && g(k);
                }
            };
        return g(d), f;
    }
    static async [a0T(0x128)](a) {
        const aH = a0T, b = {
                'vKZxX': function (d, f) {
                    return d & f;
                }
            }, c = [];
        for (const d of a) {
            const f = a0j['resolve'](a0E['FILE_ROOT'], d);
            if (!f[aH(0x1d5)](a0E[aH(0x14a)]))
                continue;
            try {
                const g = a0h[aH(0x26f)](f), h = this[aH(0x33b)](f, a0h[aH(0x3da)][aH(0x337)]), i = this[aH(0x33b)](f, a0h[aH(0x3da)]['W_OK']), j = this[aH(0x33b)](f, a0h['constants'][aH(0x2ca)]), k = new a0B();
                k[aH(0x16c)] = a0j[aH(0x309)](a0E[aH(0x14a)], f), k[aH(0x412)] = a0j['basename'](f), k[aH(0x3b9)] = this[aH(0x102)](g[aH(0x3b9)], g[aH(0x259)]()), k[aH(0x27f)] = '0o' + b['vKZxX'](g['mode'], 0x1ff)['toString'](0x8), k[aH(0x3d6)] = g['isDirectory']() ? 'directory' : aH(0x3ba), k[aH(0x136)] = h, k[aH(0x2e8)] = i, k[aH(0x185)] = j, c[aH(0x12b)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static ['_checkAccess'](a, b) {
        const aI = a0T;
        try {
            return a0h[aI(0x3e2)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static ['_parseMode'](a) {
        const aJ = a0T, b = {
                'biGab': function (c, d) {
                    return c === d;
                },
                'pDaxc': aJ(0x415),
                'CPQxi': function (c, d, f) {
                    return c(d, f);
                },
                'PtXqe': aJ(0x267)
            };
        if (b[aJ(0x3e6)](typeof a, aJ(0x20e)))
            return a;
        if (b[aJ(0x3e6)](typeof a, b['pDaxc'])) {
            const c = a[aJ(0x288)]();
            if (/^[0-7]{3,4}$/[aJ(0x2be)](c))
                return b[aJ(0x211)](parseInt, c, 0x8);
        }
        throw new Error(b[aJ(0x418)]);
    }
    static [a0T(0x102)](a, b) {
        const aK = a0T, c = {
                'LVfDV': function (i, j) {
                    return i & j;
                },
                'shGDD': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c['LVfDV'](a, 0x1ff)[aK(0x240)](0x8)[aK(0x1b3)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[aK(0x216)](parseInt, i, 0xa);
            h += f[aK(0x183)]((k, l) => j & 0x4 >> l ? k : '-')[aK(0x23d)]('');
        }
        return h;
    }
    static async [a0T(0x344)](a, b = ![]) {
        const aL = a0T, c = {
                'mTlNJ': function (g, h) {
                    return g(h);
                },
                'AgfKc': aL(0x1cf),
                'tAFlZ': function (g, h) {
                    return g(h);
                },
                'LxOCi': function (g, h) {
                    return g(h);
                },
                'QeVMa': function (g, h) {
                    return g(h);
                },
                'GnXHq': aL(0x283)
            }, d = [];
        for (const [g, h] of Object[aL(0x2f5)](a)) {
            const i = a0j[aL(0x104)](a0E[aL(0x14a)], g);
            if (!i[aL(0x1d5)](a0E[aL(0x14a)])) {
                d[aL(0x12b)]({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[aL(0x2ae)]
                });
                continue;
            }
            try {
                const j = this[aL(0x2b3)](h), k = m => {
                        const aM = aL;
                        a0h[aM(0x209)](m, j);
                    };
                if (b && a0h[aL(0x133)](i) && a0h[aL(0x26f)](i)[aL(0x259)]()) {
                    const m = n => {
                        const aN = aL;
                        c['mTlNJ'](k, n);
                        const o = a0h[aN(0x14e)](n);
                        for (const p of o) {
                            const q = a0j[aN(0x23d)](n, p);
                            a0h[aN(0x26f)](q)['isDirectory']() ? m(q) : c[aN(0x11d)](k, q);
                        }
                    };
                    c[aL(0x11d)](m, i);
                } else
                    c[aL(0x303)](k, i);
                const l = j[aL(0x240)](0x8);
                d[aL(0x12b)]({
                    'path': g,
                    'requested': c[aL(0x27b)](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[aL(0x12b)]({
                    'path': g,
                    'requested': c[aL(0x21e)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c['GnXHq'],
                    'message': n[aL(0x306)]
                });
            }
        }
        const f = d[aL(0x325)](o => o[aL(0x1ba)] === 'ok')['length'];
        return {
            'status': 'ok',
            'total': d[aL(0x365)],
            'success': f,
            'results': d
        };
    }
    static async [a0T(0x3c8)](a) {
        const aO = a0T, b = {
                'fHnHA': aO(0x1ec),
                'DIBlX': function (h, i) {
                    return h > i;
                },
                'IGGxl': function (h, i) {
                    return h * i;
                },
                'LimmO': 'File\x20too\x20large',
                'ZRANz': 'utf8',
                'XCziE': aO(0x15f),
                'CQjYR': aO(0x177)
            }, c = a0j[aO(0x104)](a0E[aO(0x14a)], a);
        if (!c[aO(0x1d5)](a0E[aO(0x14a)]))
            throw new Error(b[aO(0x20d)]);
        const d = a0h[aO(0x26f)](c);
        if (b[aO(0x1a7)](d['size'], b[aO(0x202)](0x400, 0x400)))
            throw new Error(b['LimmO']);
        const f = a0h[aO(0x265)](c), g = this[aO(0x37e)](f);
        return {
            'status': 'ok',
            'path': a0j[aO(0x309)](a0E[aO(0x14a)], c),
            'content': g ? a0p[aO(0x29c)](f) : f[aO(0x240)](b[aO(0x1e9)]),
            'encoding': g ? b[aO(0x3d7)] : b['CQjYR'],
            'is_binary': g,
            'size': d['size']
        };
    }
    static [a0T(0x37e)](a) {
        const aP = a0T, b = {
                'SFMuB': function (c, d) {
                    return c < d;
                },
                'wcxek': function (c, d) {
                    return c === d;
                }
            };
        if (!a || a['length'] === 0x0)
            return ![];
        for (let c = 0x0; b[aP(0x39c)](c, Math[aP(0x301)](a[aP(0x365)], 0x200)); c++) {
            if (b[aP(0x322)](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async ['uploadFile'](a, b, c, d = null, f = null) {
        const aQ = a0T, g = {
                'QcZkG': aQ(0x1ec),
                'kuHgR': function (l, m) {
                    return l > m;
                },
                'zdVRD': function (l, m) {
                    return l !== m;
                },
                'mIIje': aQ(0x19f),
                'FrzVx': aQ(0x3ae),
                'GDDHo': function (l, m) {
                    return l === m;
                },
                'wJhvn': function (l, m) {
                    return l < m;
                }
            }, h = a0j[aQ(0x104)](a0E['FILE_ROOT'], a);
        let j = h;
        b && (j = a0j[aQ(0x23d)](h, b));
        if (!j[aQ(0x1d5)](a0E['FILE_ROOT']))
            throw new Error(g[aQ(0x3c9)]);
        !a0h['existsSync'](a0j[aQ(0x114)](j)) && a0h[aQ(0x31b)](a0j['dirname'](j), { 'recursive': !![] });
        const k = a0p[aQ(0x377)](c);
        if (g[aQ(0x28b)](k[aQ(0x365)], a0E['MAX_UPLOAD_SIZE']))
            throw new Error(aQ(0x3ef));
        if (d !== null && g['zdVRD'](f, null)) {
            const l = Number(d), m = Number(f);
            if (Number['isNaN'](l) || Number[aQ(0x3fa)](m))
                throw new Error(g[aQ(0x2db)]);
            const n = a0j[aQ(0x23d)](a0j[aQ(0x114)](j), g['FrzVx'], a0j['basename'](j));
            !a0h[aQ(0x133)](n) && a0h['mkdirSync'](n, { 'recursive': !![] });
            const o = a0j['join'](n, 'chunk_' + l);
            a0h[aQ(0x1bf)](o, k);
            const p = a0h['readdirSync'](n)[aQ(0x325)](s => s[aQ(0x1d5)](aQ(0x200))), q = p['length'], r = g[aQ(0x393)](q, m);
            if (r) {
                const s = a0h[aQ(0x1ae)](j);
                for (let t = 0x0; g[aQ(0x1a6)](t, m); t++) {
                    const u = a0j[aQ(0x23d)](n, 'chunk_' + t);
                    if (!a0h[aQ(0x133)](u)) {
                        s['close']();
                        throw new Error(aQ(0x1e2) + t);
                    }
                    s[aQ(0x373)](a0h[aQ(0x265)](u));
                }
                s['end']();
                for (const v of a0h[aQ(0x14e)](n)) {
                    a0h['unlinkSync'](a0j[aQ(0x23d)](n, v));
                }
                a0h['rmdirSync'](n, { 'recursive': !![] });
            }
            return {
                'status': 'ok',
                'path': a0j[aQ(0x309)](a0E[aQ(0x14a)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0h['writeFileSync'](j, k), {
            'status': 'ok',
            'path': a0j[aQ(0x309)](a0E['FILE_ROOT'], j),
            'received': k['length'],
            'total': k['length'],
            'chunked': ![]
        };
    }
    static async [a0T(0x3fb)](a) {
        const aR = a0T, b = {
                'KfKZE': 'Access\x20denied:\x20path\x20outside\x20root',
                'fMMSi': aR(0x186)
            }, c = a0j[aR(0x104)](a0E[aR(0x14a)], a);
        if (!c[aR(0x1d5)](a0E[aR(0x14a)]))
            throw new Error(b[aR(0x1f3)]);
        if (!a0h[aR(0x133)](c))
            throw new Error(b[aR(0x248)]);
        const d = a0h[aR(0x26f)](c), f = a0h[aR(0x265)](c), g = a0p[aR(0x29c)](f);
        return {
            'path': a0j['relative'](a0E['FILE_ROOT'], c),
            'content': g,
            'size': d[aR(0x1ee)]
        };
    }
    static async [a0T(0x297)](a) {
        const aS = a0T, b = {
                'VKLxg': 'access_denied',
                'UIFfJ': aS(0x3c3),
                'Lbtve': aS(0x1e6),
                'wvLRD': 'error'
            }, c = [];
        for (const d of a) {
            const f = a0j[aS(0x104)](a0E[aS(0x14a)], d);
            if (!f[aS(0x1d5)](a0E['FILE_ROOT'])) {
                c['push']({
                    'path': d,
                    'status': b[aS(0x38f)]
                });
                continue;
            }
            try {
                if (a0h[aS(0x133)](f)) {
                    const g = a0h['statSync'](f);
                    g[aS(0x259)]() ? a0h[aS(0x29a)](f, { 'recursive': !![] }) : a0h[aS(0x1a5)](f), c[aS(0x12b)]({
                        'path': d,
                        'status': b[aS(0x347)]
                    });
                } else
                    c['push']({
                        'path': d,
                        'status': b['Lbtve']
                    });
            } catch (h) {
                c[aS(0x12b)]({
                    'path': d,
                    'status': b['wvLRD'],
                    'message': h[aS(0x306)]
                });
            }
        }
        return c;
    }
    static async [a0T(0x217)](a) {
        const aT = a0T, b = {
                'NVkNS': aT(0x1cf),
                'Ruxio': aT(0x283)
            }, c = [];
        for (const [d, f] of Object['entries'](a)) {
            const g = a0j[aT(0x104)](a0E[aT(0x14a)], d), h = a0j[aT(0x104)](a0E[aT(0x14a)], f);
            if (!g[aT(0x1d5)](a0E[aT(0x14a)]) || !h[aT(0x1d5)](a0E[aT(0x14a)])) {
                c[aT(0x12b)]({
                    'from': d,
                    'to': f,
                    'status': b[aT(0x33f)]
                });
                continue;
            }
            try {
                const i = a0j['dirname'](h);
                !a0h['existsSync'](i) && a0h[aT(0x31b)](i, { 'recursive': !![] }), a0h['renameSync'](g, h), c[aT(0x12b)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[aT(0x12b)]({
                    'from': d,
                    'to': f,
                    'status': b[aT(0x1ac)],
                    'message': j[aT(0x306)]
                });
            }
        }
        return c;
    }
    static async [a0T(0x1e8)](a) {
        const aU = a0T, b = {
                'YEJLH': function (d, f, g) {
                    return d(f, g);
                },
                'xzrMa': aU(0x1cf),
                'XMAip': 'error'
            }, c = [];
        for (const [d, f] of Object[aU(0x2f5)](a)) {
            const g = a0j['resolve'](a0E[aU(0x14a)], d), h = a0j['resolve'](a0E[aU(0x14a)], f);
            if (!g[aU(0x1d5)](a0E[aU(0x14a)]) || !h['startsWith'](a0E['FILE_ROOT'])) {
                c[aU(0x12b)]({
                    'from': d,
                    'to': f,
                    'status': b['xzrMa']
                });
                continue;
            }
            try {
                if (!a0h[aU(0x133)](g)) {
                    c['push']({
                        'from': d,
                        'to': f,
                        'status': aU(0x1e6)
                    });
                    continue;
                }
                const i = a0j['dirname'](h);
                !a0h[aU(0x133)](i) && a0h[aU(0x31b)](i, { 'recursive': !![] });
                const j = a0h[aU(0x26f)](g);
                if (j[aU(0x259)]()) {
                    if (a0h['cpSync'])
                        a0h[aU(0x22d)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const aV = aU;
                            if (a0h[aV(0x26f)](l)[aV(0x259)]()) {
                                if (!a0h['existsSync'](m))
                                    a0h[aV(0x31b)](m, { 'recursive': !![] });
                                for (const n of a0h[aV(0x14e)](l)) {
                                    b['YEJLH'](k, a0j[aV(0x23d)](l, n), a0j[aV(0x23d)](m, n));
                                }
                            } else
                                a0h[aV(0x2a4)](l, m);
                        };
                        b['YEJLH'](k, g, h);
                    }
                } else
                    a0h[aU(0x2a4)](g, h);
                c[aU(0x12b)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[aU(0x12b)]({
                    'from': d,
                    'to': f,
                    'status': b[aU(0x395)],
                    'message': l[aU(0x306)]
                });
            }
        }
        return c;
    }
    static async [a0T(0x24a)](a) {
        const aW = a0T, b = { 'ZlOex': aW(0x1ec) }, c = a0j[aW(0x104)](a0E[aW(0x14a)], a);
        if (!c[aW(0x1d5)](a0E['FILE_ROOT']))
            throw new Error(b[aW(0x2d2)]);
        return a0h[aW(0x31b)](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0j[aW(0x309)](a0E[aW(0x14a)], c)
        };
    }
}
class a0K {
    static [a0T(0x29b)] = new Map();
    static ['_appendLog'](a, b) {
        const aX = a0T, c = {
                'oVcji': function (d, f) {
                    return d > f;
                },
                'tpHJr': function (d, f) {
                    return d - f;
                }
            };
        a[aX(0x12b)](b), c[aX(0x2c3)](a['length'], a0E[aX(0x32a)]) && a[aX(0x31c)](0x0, c[aX(0x338)](a[aX(0x365)], a0E[aX(0x32a)]));
    }
    static [a0T(0x197)](a, b, c, d, f = null) {
        const aY = a0T, g = new Date()[aY(0x3a3)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + '\x20----\x20' + a + '\x20----\x20exitcode=' + c + '\x0a' + (b?.[aY(0x288)]() || '')
        };
    }
    static [a0T(0x37f)]() {
        const aZ = a0T;
        return {
            'status': 'ok',
            'count': a0E['onetasks'][aZ(0x365)],
            'tasks': a0E[aZ(0x19a)]
        };
    }
    static async [a0T(0x2f6)](a) {
        const b0 = a0T, b = {
                'wyFYF': function (d, f) {
                    return d < f;
                },
                'XIMMA': b0(0x3b3),
                'yhfeb': b0(0x283)
            };
        a0E['onetasks'] = a || [], a0E[b0(0x362)] = !![];
        const c = [];
        for (let d = 0x0; b['wyFYF'](d, a0E['onetasks'][b0(0x365)]); d++) {
            const f = a0E[b0(0x19a)][d], g = await a0I[b0(0x364)](f), h = this['_formatLogEntry'](f, g[b0(0x18e)], g['exitcode'], b[b0(0x145)]);
            this[b0(0x3e4)](a0E[b0(0x35f)], h), c[b0(0x12b)]({
                'index': d,
                'cmd': f,
                'exitcode': g['exitcode'],
                'output': g[b0(0x18e)],
                'status': g[b0(0x40e)] === 0x0 ? 'ok' : b[b0(0x29f)]
            });
        }
        return a0E['InitTask'] = ![], {
            'status': 'ok',
            'count': a0E[b0(0x19a)][b0(0x365)],
            'tasks': a0E[b0(0x19a)],
            'executed': c
        };
    }
    static [a0T(0x314)]() {
        const b1 = a0T;
        return {
            'status': 'ok',
            'count': Object[b1(0x3f4)](a0E['crontasks'])[b1(0x365)],
            'tasks': a0E[b1(0x12f)]
        };
    }
    static [a0T(0x411)](a) {
        const b2 = a0T, b = {
                'cYwrP': function (d, f) {
                    return d === f;
                },
                'HFoRh': b2(0x1bb),
                'yHRfh': b2(0x10d),
                'BFOZe': function (d, f) {
                    return d || f;
                },
                'QAvDS': function (d, f) {
                    return d > f;
                }
            };
        this[b2(0x29b)][b2(0x1d3)](d => {
            const b3 = b2;
            b[b3(0x20b)](typeof d[b3(0x3b8)], b['HFoRh']) && d[b3(0x3b8)](), typeof d[b3(0x2c1)] === 'function' && d[b3(0x2c1)]();
        }), this[b2(0x29b)][b2(0x2ea)]();
        const c = [];
        for (const d of Object['keys'](b['BFOZe'](a, {}))) {
            !a0m[b2(0x29e)](d) && c['push'](d);
        }
        if (b['QAvDS'](c['length'], 0x0))
            return {
                'status': 'error',
                'message': b2(0x228) + c[b2(0x23d)](',\x20'),
                'valid_count': Object[b2(0x3f4)](b[b2(0x2ee)](a, {}))[b2(0x365)] - c[b2(0x365)]
            };
        a0E[b2(0x12f)] = b['BFOZe'](a, {});
        for (const [f, g] of Object[b2(0x2f5)](a0E[b2(0x12f)])) {
            const h = a0m[b2(0x19e)](f, async () => {
                const b4 = b2, i = await a0I['execute'](g), j = this[b4(0x197)](g, i['result'], i[b4(0x40e)], b[b4(0x2ff)], f);
                this['_appendLog'](a0E[b4(0x2af)], j);
            });
            this['cronJobs'][b2(0x378)](f, h);
        }
        return a0E[b2(0x358)] = Object[b2(0x3f4)](a0E[b2(0x12f)])[b2(0x365)] > 0x0, {
            'status': 'ok',
            'count': Object[b2(0x3f4)](a0E[b2(0x12f)])[b2(0x365)],
            'tasks': a0E[b2(0x12f)]
        };
    }
    static ['getTaskStatus']() {
        const b5 = a0T;
        return {
            'onetime': {
                'pending': a0E['InitTask'],
                'count': a0E[b5(0x19a)][b5(0x365)]
            },
            'cron': {
                'active': a0E['cronloop'],
                'count': Object['keys'](a0E['crontasks'])['length'],
                'check_interval': a0E[b5(0x205)]
            }
        };
    }
    static [a0T(0x3aa)](a = 0x32) {
        const b6 = a0T, b = a0E[b6(0x35f)][b6(0x255)](-a);
        return {
            'status': 'ok',
            'count': b[b6(0x365)],
            'logs': b
        };
    }
    static [a0T(0x121)](a = 0x32) {
        const b7 = a0T, b = a0E[b7(0x2af)][b7(0x255)](-a);
        return {
            'status': 'ok',
            'count': b['length'],
            'logs': b
        };
    }
    static ['clearOnetimeLogs']() {
        const b8 = a0T, a = { 'umKYO': b8(0x3b3) }, b = a0E[b8(0x35f)]['length'];
        return a0E['onetimetasks_log'] = [], {
            'status': 'ok',
            'cleared': a['umKYO']
        };
    }
    static [a0T(0x2fb)]() {
        const b9 = a0T, a = { 'SuQKI': 'cron' }, b = a0E[b9(0x2af)][b9(0x365)];
        return a0E['crontasks_log'] = [], {
            'status': 'ok',
            'cleared': a[b9(0x169)]
        };
    }
    static ['getLogSummary']() {
        const ba = a0T, a = {
                'xYVtb': function (g, h) {
                    return g - h;
                }
            }, b = a0E[ba(0x35f)][ba(0x325)](g => g[ba(0x40e)] === 0x0)[ba(0x365)], c = a[ba(0x388)](a0E[ba(0x35f)][ba(0x365)], b), d = a0E[ba(0x2af)][ba(0x325)](g => g['exitcode'] === 0x0)[ba(0x365)], f = a0E[ba(0x2af)][ba(0x365)] - d;
        return {
            'onetime': {
                'total_logged': a0E[ba(0x35f)]['length'],
                'max_capacity': a0E[ba(0x32a)],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0E[ba(0x2af)][ba(0x365)],
                'max_capacity': a0E['MAX_TASK_LOG_SIZE'],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async [a0T(0x3e1)]() {
        const bb = a0T, a = {
                'DrhKw': function (c, d) {
                    return c < d;
                },
                'qoEnM': bb(0x3b3)
            }, b = [];
        for (let c = 0x0; a['DrhKw'](c, a0E[bb(0x19a)][bb(0x365)]); c++) {
            const d = a0E[bb(0x19a)][c], f = await a0I[bb(0x364)](d), g = this['_formatLogEntry'](d, f['result'], f[bb(0x40e)], a[bb(0x22c)]);
            this[bb(0x3e4)](a0E[bb(0x35f)], g), b[bb(0x12b)]({
                'cmd': d,
                'exitcode': f['exitcode'],
                'output': f[bb(0x18e)],
                'timeout': f[bb(0x143)]
            });
        }
        return a0E[bb(0x362)] = ![], {
            'status': 'ok',
            'executed': b[bb(0x365)],
            'results': b
        };
    }
}
let a0L = null, a0M = null;
const a0N = new Promise((a, b) => {
    const bc = a0T, c = {
            'FqpSd': bc(0x2f9),
            'uUQFk': bc(0x135),
            'AFfHY': function (d) {
                return d();
            },
            'qQZSM': function (d) {
                return d();
            }
        };
    try {
        a0r(function (d) {
            const bd = bc;
            if (!d) {
                a0M = new Error(c[bd(0x1c8)]), a0u[bd(0x229)](c[bd(0x323)], a0M[bd(0x306)]), a();
                return;
            }
            a0L = d, a0u['debug'](bd(0x387)), c[bd(0x160)](a);
        });
    } catch (d) {
        a0M = d, a0u[bc(0x229)]('[WARN]\x20Exception\x20loading\x20Noise\x20module:', d['message']), c[bc(0x243)](a);
    }
});
process['on'](a0T(0x2fa), (a, b) => {
    const be = a0T, c = { 'JcSIp': be(0x26b) };
    a0u[be(0x283)](c[be(0x293)], a);
}), process['on'](a0T(0x3e5), a => {
    const bf = a0T, b = { 'JSyJr': bf(0x39f) };
    a0u[bf(0x283)](b[bf(0x1d9)], a), process[bf(0x403)](0x1);
});
class a0O {
    constructor(a, b, c) {
        const bg = a0T;
        this[bg(0x1a8)] = a, this[bg(0x2bc)] = b, this['expectedRemotePubB64'] = c, this['handshakeFinished'] = ![], this['hs'] = null, this[bg(0x2a2)] = null, this['recvCipher'] = null;
    }
    async ['init']() {
        const bh = a0T, a = {
                'SrnLj': bh(0x2b7),
                'bgyal': 'Noise_XX_25519_ChaChaPoly_BLAKE2s',
                'qchqr': bh(0x280),
                'GqNGg': bh(0x15f)
            };
        await a0N;
        if (!a0L)
            throw a0M || new Error(a[bh(0x173)]);
        const b = a0L, c = this[bh(0x1a8)] ? b['constants'][bh(0x3f1)] : b[bh(0x3da)][bh(0x166)];
        this['hs'] = b[bh(0x212)](a[bh(0x1fb)], c);
        const d = Buffer[bh(0x327)](a[bh(0x13d)]), f = this[bh(0x2bc)] ? Buffer[bh(0x327)](this[bh(0x2bc)], a[bh(0x398)]) : null, g = this[bh(0x1e1)] ? Buffer[bh(0x327)](this[bh(0x1e1)], 'base64') : null;
        this['hs'][bh(0x137)](d, f, g, null);
    }
    [a0T(0x3fc)](a) {
        const bi = a0T, b = {
                'Linkf': function (d, f) {
                    return d === f;
                },
                'qMpQJ': function (d, f) {
                    return d === f;
                },
                'LcHjo': function (d, f) {
                    return d === f;
                }
            };
        if (this[bi(0x2b9)])
            return Buffer['alloc'](0x0);
        const c = a0L;
        a && a[bi(0x365)] > 0x0 && b['Linkf'](this['hs'][bi(0x26c)](), c[bi(0x3da)]['NOISE_ACTION_READ_MESSAGE']) && this['hs'][bi(0x232)](a);
        if (b[bi(0x220)](this['hs']['GetAction'](), c[bi(0x3da)]['NOISE_ACTION_SPLIT']))
            return this[bi(0x2fd)](), Buffer[bi(0x184)](0x0);
        if (this['hs'][bi(0x26c)]() === c['constants']['NOISE_ACTION_WRITE_MESSAGE']) {
            const d = this['hs'][bi(0x2cb)](new Uint8Array(0x0));
            return b[bi(0x17f)](this['hs'][bi(0x26c)](), c[bi(0x3da)][bi(0x2b1)]) && this[bi(0x2fd)](), Buffer[bi(0x327)](d);
        }
        return Buffer['alloc'](0x0);
    }
    [a0T(0x2fd)]() {
        const bj = a0T, a = this['hs'][bj(0x198)]();
        this['sendCipher'] = a[0x0], this['recvCipher'] = a[0x1], this['handshakeFinished'] = !![];
        try {
            if (this['hs'])
                this['hs'][bj(0x41e)]();
        } catch (b) {
        }
        this['hs'] = null;
    }
    [a0T(0x161)](a) {
        const bk = a0T, b = { 'FzWna': bk(0x1f7) };
        if (!this[bk(0x2b9)])
            throw new Error(b[bk(0x3f2)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[bk(0x327)](this[bk(0x2a2)]['EncryptWithAd'](c, d));
    }
    [a0T(0x370)](a) {
        const bl = a0T, b = { 'fLYuG': bl(0x2bf) };
        if (!this[bl(0x2b9)])
            throw new Error(b['fLYuG']);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[bl(0x327)](this[bl(0x397)][bl(0x3d5)](c, d));
    }
    [a0T(0x41e)]() {
        const bm = a0T, a = bm(0x354)[bm(0x120)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this['hs'] = null;
                continue;
            case '1':
                try {
                    if (this['recvCipher'])
                        this['recvCipher'][bm(0x41e)]();
                } catch (c) {
                }
                continue;
            case '2':
                try {
                    if (this['hs'])
                        this['hs'][bm(0x41e)]();
                } catch (d) {
                }
                continue;
            case '3':
                try {
                    if (this[bm(0x2a2)])
                        this[bm(0x2a2)]['free']();
                } catch (f) {
                }
                continue;
            case '4':
                this[bm(0x2a2)] = null;
                continue;
            case '5':
                this[bm(0x397)] = null;
                continue;
            }
            break;
        }
    }
}
class a0P {
    constructor() {
        const bn = a0T, a = { 'qSTsp': bn(0x1b7) };
        this[bn(0x30a)] = null, this[bn(0x31f)] = null, this[bn(0x3f5)] = null, this['useNoise'] = !![], this['phase'] = a[bn(0x148)], this['msgQueue'] = [], this['msgResolvers'] = [], this['AGENT_PRIVATE_KEY'] = a0E[bn(0x3d3)]['agent']['private_b64'], this[bn(0x2d6)] = a0E[bn(0x3d3)][bn(0x1f9)]['public_b64'], this['cipher'] = new a0O(![], this[bn(0x123)], this[bn(0x2d6)]);
    }
    async [a0T(0x3e3)]() {
        const bo = a0T, a = { 'aNyey': bo(0x3ee) };
        this['requestId'] && a0u['info']('[' + this['requestId'] + bo(0x402));
        if (this[bo(0x30a)]) {
            try {
                this[bo(0x30a)][bo(0x258)]();
            } catch (b) {
            }
            this[bo(0x30a)] = null;
        }
        if (this['cipher'])
            this['cipher'][bo(0x41e)]();
        if (this[bo(0x31f)])
            try {
                this[bo(0x31f)]['readyState'] === this[bo(0x31f)][bo(0x28a)] && this['websocket'][bo(0x10f)](0x3e8, a[bo(0x264)]);
            } catch (c) {
            } finally {
                this['websocket'] = null;
            }
    }
    [a0T(0x1f5)](a) {
        const bp = a0T, b = {
                'xdhfD': bp(0x1b7),
                'Ivwks': function (c, d) {
                    return c > d;
                },
                'tPdvm': function (c, d) {
                    return c(d);
                },
                'zRmQZ': function (c, d) {
                    return c === d;
                },
                'Xcflm': 'terminal'
            };
        if (this[bp(0x257)] === b['xdhfD']) {
            if (b[bp(0x40f)](this[bp(0x23b)][bp(0x365)], 0x0)) {
                const c = this[bp(0x23b)][bp(0x3ca)]();
                b[bp(0x24d)](c, a);
            } else
                this['msgQueue']['push'](a);
        } else
            b[bp(0x2e7)](this[bp(0x257)], b['Xcflm']) && this[bp(0x2ef)](a);
    }
    async [a0T(0x179)]() {
        const bq = a0T, a = {
                'FYzMi': function (b, c) {
                    return b > c;
                }
            };
        if (a[bq(0x25e)](this[bq(0x1cd)][bq(0x365)], 0x0))
            return this['msgQueue'][bq(0x3ca)]();
        return new Promise(b => {
            const br = bq;
            this[br(0x23b)][br(0x12b)](b);
        });
    }
    async ['_doNoiseHandshake'](a) {
        const bs = a0T, b = {
                'OIExS': function (c, d) {
                    return c(d);
                },
                'dzEOh': bs(0x2dd),
                'JFUoU': function (c, d) {
                    return c > d;
                },
                'LgEsA': bs(0x2b6),
                'eVwCA': function (c, d) {
                    return c(d);
                },
                'Ndyeb': function (c, d) {
                    return c(d);
                },
                'cvZUB': bs(0x37a)
            };
        b[bs(0x3d0)](a, b[bs(0x260)]);
        try {
            await this[bs(0x241)][bs(0x346)]();
            const c = await this['_receiveWsBytes'](), d = this[bs(0x241)][bs(0x3fc)](c);
            d && b[bs(0x218)](d[bs(0x365)], 0x0) && this['websocket']['send'](d);
            const f = await this['_receiveWsBytes']();
            this[bs(0x241)][bs(0x3fc)](f);
            if (!this[bs(0x241)][bs(0x2b9)])
                throw new Error(b[bs(0x35e)]);
            b[bs(0x268)](a, bs(0x138));
        } catch (g) {
            b[bs(0x253)](a, bs(0x1e5) + g[bs(0x306)]);
            throw new Error(b[bs(0x17c)]);
        }
    }
    [a0T(0x3db)]() {
        const bt = a0T, a = {
                'vZASJ': bt(0x10e),
                'uuQeY': bt(0x1b4),
                'gEVot': bt(0x36c)
            }, b = process.env.SHELL;
        if (b && a0h['existsSync'](b))
            return b;
        const c = [
            bt(0x2cd),
            a[bt(0x2d3)],
            a[bt(0x2e6)],
            bt(0x36c)
        ];
        for (const d of c) {
            if (a0h['existsSync'](d))
                return d;
        }
        return a[bt(0x384)];
    }
    async [a0T(0x234)](a, b, c) {
        const bu = a0T, d = {
                'nvUSf': function (g, h) {
                    return g(h);
                },
                'QlHzf': bu(0x33c),
                'qDqli': '🔐\x20检测到\x20Token，视为\x20WSS\x20链路，跳过\x20Noise',
                'QpFTL': bu(0x306)
            };
        this[bu(0x31f)] = a, this[bu(0x3f5)] = b;
        const f = g => a0u['info'](bu(0x270) + b + ']\x20' + g);
        this[bu(0x126)] = !c, d[bu(0x213)](f, this[bu(0x126)] ? d['QlHzf'] : d['qDqli']), a['on'](d[bu(0x2cf)], g => this[bu(0x1f5)](g));
        try {
            this[bu(0x126)] && await this[bu(0x165)](f), await this[bu(0x27c)](f);
        } catch (g) {
            d[bu(0x213)](f, bu(0x40c) + g[bu(0x306)]), await this[bu(0x3e3)]();
        }
    }
    async ['_runTerminal'](a) {
        const bv = a0T, b = {
                'fCQmj': function (f, g) {
                    return f === g;
                },
                'TuXNH': function (f, g) {
                    return f(g);
                },
                'DwevX': bv(0x28c),
                'aNrly': function (f, g) {
                    return f(g);
                },
                'AHiXf': bv(0x2d7),
                'VkIYU': bv(0x390),
                'Ggevq': bv(0x3f6),
                'MTfpv': bv(0x11c),
                'QqHzq': bv(0x10f),
                'DyvCl': function (f, g) {
                    return f(g);
                }
            }, c = this[bv(0x3db)]();
        b[bv(0x16d)](a, bv(0x2b8) + c);
        const d = Object[bv(0x353)]({}, process.env);
        delete d['PROMPT_COMMAND'], d[bv(0x39b)] = bv(0x390);
        if (!d[bv(0x21a)])
            d['LANG'] = b[bv(0x400)];
        try {
            this['ptyProcess'] = a0t['spawn'](c, [], {
                'name': b[bv(0x33d)],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': process.env.HOME || process[bv(0x11e)](),
                'env': d
            }), a(bv(0x194) + (this[bv(0x30a)][bv(0x15e)] || b['Ggevq']) + ')'), this['phase'] = b[bv(0x34b)];
            while (this['msgQueue'][bv(0x365)] > 0x0) {
                const f = this[bv(0x1cd)][bv(0x3ca)]();
                this['_processTerminalMessage'](f);
            }
            this[bv(0x30a)][bv(0x24e)](g => {
                const bw = bv;
                try {
                    let h = Buffer[bw(0x327)](g, bw(0x177));
                    this[bw(0x126)] && this[bw(0x241)] && this[bw(0x241)]['handshakeFinished'] && (h = this[bw(0x241)][bw(0x161)](h)), b['fCQmj'](this[bw(0x31f)][bw(0x2e9)], 0x1) && this[bw(0x31f)][bw(0x30f)](h);
                } catch (i) {
                }
            }), this[bv(0x30a)][bv(0x246)](({
                exitCode: g,
                signal: h
            }) => {
                const bx = bv;
                a(bx(0x31e) + g + bx(0x40b) + h + ')'), this[bx(0x3e3)]();
            }), this[bv(0x31f)]['on'](b[bv(0x3b6)], () => {
                const by = bv;
                b['TuXNH'](a, b[by(0x35a)]), this['cleanup']();
            });
        } catch (g) {
            b[bv(0x299)](a, bv(0x289) + g[bv(0x306)]), await this[bv(0x3e3)]();
            throw g;
        }
    }
    ['_processTerminalMessage'](a) {
        const bz = a0T, b = {
                'MDlxb': bz(0x177),
                'bgUMu': bz(0x2c6),
                'NspcX': function (c, d) {
                    return c === d;
                },
                'aBujd': 'resize',
                'PPdhv': 'input',
                'rXgQv': function (c, d) {
                    return c !== d;
                },
                'vvjDt': function (c, d) {
                    return c === d;
                },
                'Eemzj': bz(0x15f)
            };
        if (!this['ptyProcess'])
            return;
        try {
            const c = Buffer[bz(0x327)](a);
            let d;
            this['useNoise'] ? d = this[bz(0x241)][bz(0x370)](c) : d = c;
            let f = ![], g = d[bz(0x240)](b[bz(0x122)]);
            if (g['trim']()[bz(0x1d5)]('{'))
                try {
                    const h = JSON[bz(0x286)](g);
                    f = !![];
                    if (h[bz(0x3d6)] === b[bz(0x124)]) {
                        let i = Buffer['from'](JSON[bz(0x345)]({ 'type': b[bz(0x124)] }));
                        if (this['useNoise'])
                            i = this['cipher']['encrypt'](i);
                        this['websocket'][bz(0x30f)](i);
                        return;
                    }
                    if (b[bz(0x190)](h['type'], b[bz(0x1e0)])) {
                        this[bz(0x30a)][bz(0x308)](h[bz(0x3c2)] || 0x50, h[bz(0x1af)] || 0x18);
                        return;
                    }
                    if (h[bz(0x3d6)] === b[bz(0x1f6)] && b[bz(0x296)](h[bz(0x3f3)], undefined)) {
                        let j = b['vvjDt'](h[bz(0x1e4)], b[bz(0x2a7)]) ? Buffer['from'](h['data'], bz(0x15f))['toString'](b[bz(0x122)]) : h[bz(0x3f3)];
                        this[bz(0x30a)]['write'](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[bz(0x30a)][bz(0x373)](d[bz(0x240)](b[bz(0x122)]));
        } catch (l) {
            a0u[bz(0x34d)](bz(0x270) + this['requestId'] + bz(0x163) + l[bz(0x306)]);
            if (this[bz(0x126)])
                this[bz(0x3e3)]();
        }
    }
}
async function a0Q(a = {}) {
    const bA = a0T, b = {
            'Cuyjd': function (c, d) {
                return c === d;
            },
            'CeWOG': bA(0x1db),
            'pVuJm': function (c) {
                return c();
            },
            'hFbWt': bA(0x16b),
            'iNdFk': bA(0x349),
            'gvhvG': bA(0x363),
            'MpVIs': bA(0x3dc),
            'acRrU': bA(0x1ca),
            'WDcDt': bA(0x28f),
            'KTQFS': function (c, d) {
                return c / d;
            },
            'hFwRc': function (c, d) {
                return c > d;
            },
            'JkxMa': function (c, d) {
                return c - d;
            },
            'rTyQB': bA(0x3b7),
            'YLDPF': bA(0x283),
            'HJtOm': bA(0x35c),
            'IEPFg': function (c, d) {
                return c / d;
            },
            'frhgh': function (c, d) {
                return c - d;
            },
            'SCpsa': bA(0x1a4),
            'rtLPk': function (c, d) {
                return c === d;
            },
            'RMIED': bA(0x415),
            'aEtfR': bA(0x20c),
            'agbsh': 'cmd\x20required',
            'TQjXf': bA(0x15f),
            'ssHeo': bA(0x37b),
            'hGfLU': bA(0x3a8),
            'UZZLc': bA(0x252),
            'cYJqy': bA(0x32e),
            'vazHx': function (c, d, f) {
                return c(d, f);
            },
            'Ulqcx': function (c, d, f) {
                return c(d, f);
            },
            'DyXnW': 'Closing\x20connection\x20due\x20to\x20missing\x20request_id',
            'glgIa': 'Missing\x20request_id',
            'DaDNz': bA(0x3c5),
            'xoTQl': bA(0x23f),
            'RqTGj': bA(0x1cb),
            'FJzOE': bA(0x1da),
            'Ksoso': bA(0x33a),
            'BzaiP': bA(0x32d),
            'oOyZz': 'SystemInfoCollector\x20initialized',
            'wiCVC': bA(0x331),
            'fawvk': function (c, d) {
                return c(d);
            },
            'DFKUS': bA(0x26e),
            'ddRCE': '/api/baseinfo',
            'xoOgF': bA(0x233),
            'FZEld': bA(0x36b),
            'WpPbU': bA(0x131),
            'lseXc': bA(0x2f2),
            'HurGa': bA(0x175),
            'Thhyf': '/api/file/download',
            'lxsoh': bA(0x3c4),
            'qWEbM': bA(0x261),
            'RmRVz': bA(0x1f1),
            'QSiUQ': '/api/task/cron',
            'JmTEh': bA(0x2b4),
            'sOFjr': '/api/task/log/cron',
            'bVoaQ': bA(0x238),
            'JhAZk': bA(0x39d),
            'GTNtk': bA(0x1bd),
            'zVEFt': '/api/ws/*',
            'qsIzt': bA(0x3d1),
            'uVFwB': 'Starting\x20HTTP\x20server...',
            'veZnR': 'SIGINT',
            'apVpl': bA(0x1a1),
            'JTXJZ': bA(0x366)
        };
    try {
        const c = await import(b[bA(0x359)]);
        a0s = c[bA(0x278)], a0u['debug'](b[bA(0x27d)]), a0E[bA(0x2cc)](a), a0u[bA(0x2ce)]('Validating\x20config...'), a0E[bA(0x29e)](), a0u[bA(0x2ce)](bA(0x182)), a0u[bA(0x2ce)](b[bA(0x1dc)]);
        const d = new a0F(a0E[bA(0x3f9)], a0E[bA(0x38a)]);
        a0u[bA(0x2ce)](b['Ksoso']), a0u[bA(0x2ce)](b[bA(0x25c)]);
        const f = new a0H();
        a0u['debug'](b['oOyZz']), a0u[bA(0x2ce)](b['wiCVC']);
        const g = b[bA(0x410)](a0f);
        b[bA(0x167)](a0q, g), a0u[bA(0x2ce)](bA(0x242)), g[bA(0x2ec)]((i, j, k) => {
            const bB = bA, l = bB(0x2e0)[bB(0x120)]('|');
            let m = 0x0;
            while (!![]) {
                switch (l[m++]) {
                case '0':
                    if (b[bB(0x221)](i[bB(0x32f)], b['CeWOG']))
                        return j['status'](0xc8)['end']();
                    continue;
                case '1':
                    b[bB(0x410)](k);
                    continue;
                case '2':
                    j['header'](b['hFbWt'], '*');
                    continue;
                case '3':
                    j[bB(0x41c)](bB(0x164), b[bB(0x351)]);
                    continue;
                case '4':
                    j[bB(0x41c)](b[bB(0x1b2)], bB(0x158));
                    continue;
                case '5':
                    j[bB(0x41c)](b[bB(0x41f)], bB(0x423));
                    continue;
                }
                break;
            }
        }), g[bA(0x2ec)](a0f[bA(0x317)]({
            'type': () => !![],
            'limit': b[bA(0x195)]
        })), g['use'](a0f[bA(0x188)]({ 'extended': !![] })), g['use'](b[bA(0x167)](a0G, d)), a0u['debug'](bA(0x21d)), g[bA(0x3cf)](b[bA(0x339)], async (i, j) => {
            const bC = bA;
            try {
                const k = Math[bC(0x149)](b['KTQFS'](Date['now'](), 0x3e8));
                !a0E[bC(0x3f7)] || b[bC(0x3a2)](b[bC(0x15a)](k, a0E[bC(0x36e)]), a0E[bC(0x3fe)]) ? (!a0E[bC(0x1c5)] && (a0E[bC(0x1c5)] = f['getBasicInfo']()['then'](m => {
                    const bD = bC, n = b[bD(0x3a9)]['split']('|');
                    let o = 0x0;
                    while (!![]) {
                        switch (n[o++]) {
                        case '0':
                            return m;
                        case '1':
                            a0E[bD(0x36e)] = Math[bD(0x149)](Date[bD(0x219)]() / 0x3e8);
                            continue;
                        case '2':
                            a0u['debug'](b[bD(0x1fe)]);
                            continue;
                        case '3':
                            a0E[bD(0x1c5)] = null;
                            continue;
                        case '4':
                            a0E[bD(0x3f7)] = m;
                            continue;
                        }
                        break;
                    }
                })[bC(0x3eb)](m => {
                    a0E['_baseinfo_fetch_promise'] = null;
                    throw m;
                })), await a0E[bC(0x1c5)]) : a0u[bC(0x2ce)](b[bC(0x101)]);
                const l = { ...a0E['_baseinfo_cache'] };
                i[bC(0x227)] === ![] ? (l[bC(0x272)] = null, l[bC(0x1bc)] = null) : (l[bC(0x272)] = a0E['SESSION_KEY'], l[bC(0x1bc)] = a0E['NOISE_KEY']), j[bC(0x23e)](l);
            } catch (m) {
                j[bC(0x1ba)](0x1f4)[bC(0x23e)]({
                    'status': b[bC(0x1a2)],
                    'message': m[bC(0x306)]
                });
            }
        }), g[bA(0x3cf)]('/api/status', async (i, j) => {
            const bE = bA, k = { 'HLmYL': b['HJtOm'] };
            try {
                const l = Math[bE(0x149)](b[bE(0x1b9)](Date[bE(0x219)](), 0x3e8));
                !a0E[bE(0x1cc)] || b['hFwRc'](b[bE(0x24c)](l, a0E[bE(0x1c4)]), a0E['STATUS_CACHE_TTL']) ? (!a0E['_status_fetch_promise'] && (a0E[bE(0x2e5)] = f[bE(0x336)]()[bE(0x108)](n => {
                    const bF = bE, o = bF(0x150)[bF(0x120)]('|');
                    let p = 0x0;
                    while (!![]) {
                        switch (o[p++]) {
                        case '0':
                            a0E['_status_cache_time'] = Math[bF(0x149)](Date[bF(0x219)]() / 0x3e8);
                            continue;
                        case '1':
                            a0E[bF(0x1cc)] = n;
                            continue;
                        case '2':
                            return n;
                        case '3':
                            a0E[bF(0x2e5)] = null;
                            continue;
                        case '4':
                            a0u['debug'](k['HLmYL']);
                            continue;
                        }
                        break;
                    }
                })[bE(0x3eb)](n => {
                    a0E['_status_fetch_promise'] = null;
                    throw n;
                })), await a0E[bE(0x2e5)]) : a0u[bE(0x2ce)](b[bE(0x27a)]);
                const m = { ...a0E[bE(0x1cc)] };
                j[bE(0x23e)](m);
            } catch (n) {
                j['status'](0x1f4)[bE(0x23e)]({
                    'status': b[bE(0x1a2)],
                    'message': n[bE(0x306)]
                });
            }
        }), g[bA(0x421)](b[bA(0x1ce)], async (i, j) => {
            const bG = bA;
            try {
                let k = null;
                if (b[bG(0x1c3)](typeof i['body'], b['RMIED']))
                    k = i[bG(0x342)]['trim']();
                else
                    i[bG(0x342)] && typeof i[bG(0x342)] === b[bG(0x1d4)] && (k = i[bG(0x342)][bG(0x152)] || '');
                if (!k)
                    return j['status'](0x190)[bG(0x23e)]({
                        'status': b[bG(0x1a2)],
                        'message': b[bG(0x41b)]
                    });
                const l = await a0I['execute'](k, {
                    'cwd': i['body']['cwd'],
                    'env': i[bG(0x342)][bG(0x178)],
                    'timeout': a0E[bG(0x348)]
                });
                j[bG(0x23e)](l);
            } catch (m) {
                j[bG(0x1ba)](0x1f4)[bG(0x23e)]({
                    'status': bG(0x283),
                    'message': m[bG(0x306)]
                });
            }
        }), g[bA(0x421)](b['FZEld'], async (i, j) => {
            const bH = bA;
            try {
                const k = await a0J[bH(0x203)](i['body'][bH(0x16c)], i[bH(0x342)][bH(0x2b0)]);
                j[bH(0x23e)]({
                    'status': 'ok',
                    'count': k['length'],
                    'files': k
                });
            } catch (l) {
                j[bH(0x1ba)](0x1f4)[bH(0x23e)]({
                    'status': b['YLDPF'],
                    'message': l[bH(0x306)]
                });
            }
        }), g['post'](b[bA(0x2c9)], async (i, j) => {
            const bI = bA;
            try {
                const k = await a0J[bI(0x128)](i['body'][bI(0x112)] || []);
                j[bI(0x23e)]({
                    'status': 'ok',
                    'files': k
                });
            } catch (l) {
                j[bI(0x1ba)](0x1f4)[bI(0x23e)]({
                    'status': b[bI(0x1a2)],
                    'message': l['message']
                });
            }
        }), g[bA(0x2b2)](b[bA(0x2c9)], async (i, j) => {
            const bJ = bA;
            try {
                const k = i['body'][bJ(0x1b0)] || {}, l = i[bJ(0x342)][bJ(0x2b0)] === !![], m = await a0J['setFilePermissions'](k, l);
                j[bJ(0x23e)](m);
            } catch (n) {
                j[bJ(0x1ba)](0x1f4)[bJ(0x23e)]({
                    'status': bJ(0x283),
                    'message': n[bJ(0x306)]
                });
            }
        }), g['post'](b[bA(0x3e7)], async (i, j) => {
            const bK = bA;
            try {
                const k = await a0J[bK(0x3c8)](i[bK(0x342)][bK(0x16c)]);
                j[bK(0x23e)](k);
            } catch (l) {
                j[bK(0x1ba)](0x1f4)[bK(0x23e)]({
                    'status': b[bK(0x1a2)],
                    'message': l[bK(0x306)]
                });
            }
        }), g[bA(0x421)](b['HurGa'], async (i, j) => {
            const bL = bA;
            try {
                const k = await a0J[bL(0x224)](i[bL(0x342)][bL(0x16c)], i[bL(0x342)][bL(0x100)], i[bL(0x342)][bL(0x110)], i['body']['chunk_id'], i[bL(0x342)][bL(0x1c6)]);
                j[bL(0x23e)](k);
            } catch (l) {
                j['status'](0x1f4)[bL(0x23e)]({
                    'status': b[bL(0x1a2)],
                    'message': l[bL(0x306)]
                });
            }
        }), g['post'](b[bA(0x2f0)], async (i, j) => {
            const bM = bA;
            try {
                const k = await a0J[bM(0x3fb)](i[bM(0x342)]['path']), l = Buffer['from'](k[bM(0x110)], b[bM(0x2c5)]);
                return j[bM(0x378)](b[bM(0x36a)], k[bM(0x1ee)][bM(0x240)]()), j['set'](b['hGfLU'], k[bM(0x16c)]), j[bM(0x378)](b['UZZLc'], b[bM(0x3bd)]), j[bM(0x30f)](l);
            } catch (m) {
                j['status'](0x1f4)['json']({
                    'status': bM(0x283),
                    'message': m[bM(0x306)]
                });
            }
        }), g[bA(0x307)](b[bA(0x420)], async (i, j) => {
            const bN = bA;
            try {
                let k = i[bN(0x342)]['paths'];
                if (!k || !Array['isArray'](k)) {
                    k = [];
                    if (i[bN(0x342)][bN(0x16c)])
                        k['push'](i[bN(0x342)][bN(0x16c)]);
                    if (i[bN(0x342)][bN(0x3b4)])
                        k[bN(0x12b)](i[bN(0x342)][bN(0x3b4)]);
                }
                const l = await a0J[bN(0x297)](k);
                j[bN(0x23e)]({
                    'status': 'ok',
                    'results': l
                });
            } catch (m) {
                j[bN(0x1ba)](0x1f4)[bN(0x23e)]({
                    'status': bN(0x283),
                    'message': m[bN(0x306)]
                });
            }
        }), g['put'](b[bA(0x420)], async (i, j) => {
            const bO = bA;
            try {
                const k = await a0J[bO(0x217)](i[bO(0x342)][bO(0x273)] || i[bO(0x342)]);
                j[bO(0x23e)]({
                    'status': 'ok',
                    'total': k[bO(0x365)],
                    'success': k[bO(0x325)](l => l[bO(0x1ba)] === 'ok')['length'],
                    'results': k
                });
            } catch (l) {
                j['status'](0x1f4)[bO(0x23e)]({
                    'status': b[bO(0x1a2)],
                    'message': l['message']
                });
            }
        }), g[bA(0x421)](b[bA(0x392)], async (i, j) => {
            const bP = bA;
            try {
                const k = await a0J[bP(0x1e8)](i['body']);
                j[bP(0x23e)]({
                    'status': 'ok',
                    'total': k['length'],
                    'success': k['filter'](l => l[bP(0x1ba)] === 'ok')[bP(0x365)],
                    'results': k
                });
            } catch (l) {
                j['status'](0x1f4)[bP(0x23e)]({
                    'status': b[bP(0x1a2)],
                    'message': l[bP(0x306)]
                });
            }
        }), g[bA(0x421)](b[bA(0x274)], async (i, j) => {
            const bQ = bA;
            try {
                const k = await a0J['createDirectory'](i[bQ(0x342)]['path']);
                j[bQ(0x23e)](k);
            } catch (l) {
                j[bQ(0x1ba)](0x1f4)[bQ(0x23e)]({
                    'status': b[bQ(0x1a2)],
                    'message': l['message']
                });
            }
        }), g[bA(0x3cf)](bA(0x1f1), (i, j) => {
            const bR = bA;
            j[bR(0x23e)](a0K[bR(0x37f)]());
        }), g[bA(0x421)](b[bA(0x247)], async (i, j) => {
            const bS = bA;
            try {
                const k = await a0K[bS(0x2f6)](i[bS(0x342)]);
                j[bS(0x23e)](k);
            } catch (l) {
                j[bS(0x1ba)](0x1f4)[bS(0x23e)]({
                    'status': b[bS(0x1a2)],
                    'message': l[bS(0x306)]
                });
            }
        }), g[bA(0x3cf)]('/api/task/cron', (i, j) => {
            const bT = bA;
            j[bT(0x23e)](a0K['getCronTasks']());
        }), g[bA(0x421)](b[bA(0x180)], (i, j) => {
            const bU = bA;
            try {
                const k = a0K[bU(0x411)](i[bU(0x342)]);
                j['json'](k);
            } catch (l) {
                j[bU(0x1ba)](0x1f4)[bU(0x23e)]({
                    'status': b[bU(0x1a2)],
                    'message': l[bU(0x306)]
                });
            }
        }), g[bA(0x3cf)](bA(0x19b), (i, j) => {
            const bV = bA;
            j[bV(0x23e)](a0K['getTaskStatus']());
        }), g[bA(0x3cf)](bA(0x2b4), (i, j) => {
            const bW = bA;
            let k = b[bW(0x324)](parseInt, i[bW(0x155)][bW(0x3f0)], 0xa) || 0x32;
            k = Math[bW(0x301)](Math[bW(0x3be)](k, 0x1), 0x64), j[bW(0x23e)](a0K[bW(0x3aa)](k));
        }), g['get'](bA(0x32c), (i, j) => {
            const bX = bA;
            let k = b[bX(0x14d)](parseInt, i[bX(0x155)][bX(0x3f0)], 0xa) || 0x32;
            k = Math[bX(0x301)](Math[bX(0x3be)](k, 0x1), 0x64), j[bX(0x23e)](a0K[bX(0x121)](k));
        }), g[bA(0x307)](b[bA(0x13a)], (i, j) => {
            const bY = bA;
            j[bY(0x23e)](a0K[bY(0x262)]());
        }), g[bA(0x307)](b[bA(0x245)], (i, j) => {
            const bZ = bA;
            j[bZ(0x23e)](a0K['clearCronLogs']());
        }), g[bA(0x3cf)](b[bA(0x39a)], (i, j) => {
            const c0 = bA;
            j[c0(0x23e)](a0K['getLogSummary']());
        }), g[bA(0x421)](b['JhAZk'], async (i, j) => {
            const c1 = bA;
            try {
                const k = await a0K['executeOnetimeTasks']();
                j[c1(0x23e)](k);
            } catch (l) {
                j[c1(0x1ba)](0x1f4)[c1(0x23e)]({
                    'status': b['YLDPF'],
                    'message': l['message']
                });
            }
        }), a0u['debug'](b['GTNtk']), g['ws'](b[bA(0x320)], async (i, j) => {
            const c2 = bA, k = j['params'][0x0];
            a0u['debug'](c2(0x41d) + j[c2(0x22f)]), a0u[c2(0x2ce)](c2(0x191) + k);
            const l = j[c2(0x155)][c2(0x332)], m = j[c2(0x155)][c2(0x118)];
            a0u[c2(0x2ce)](c2(0x236) + l);
            if (!l) {
                a0u[c2(0x2ce)](b[c2(0x129)]), i[c2(0x10f)](0x3f0, b[c2(0x374)]);
                return;
            }
            const n = new a0P();
            await n[c2(0x234)](i, l, m);
        }), a0u[bA(0x2ce)](b[bA(0x30d)]), a0u[bA(0x2ce)](b[bA(0x18d)]);
        const h = g[bA(0x189)](a0E[bA(0x382)], a0E['HOST'], () => {
            const c3 = bA;
            a0u[c3(0x2ce)](c3(0x416) + a0E[c3(0x37d)] + '\x20started\x20on\x20' + a0E[c3(0x3c0)] + ':' + a0E['PORT']), a0u['debug'](b['DaDNz']);
        });
        process['on'](b[bA(0x281)], () => {
            const c4 = bA;
            a0u['debug'](c4(0x214)), h[c4(0x10f)](), process[c4(0x403)](0x0);
        }), a0u[bA(0x2ce)](b[bA(0x3e0)]);
    } catch (i) {
        a0u[bA(0x283)](b[bA(0x151)], i), process['exit'](0x1);
    }
}
(require[a0T(0x25f)] === module || require[a0T(0x25f)]?.[a0T(0x100)]?.['includes']('ts-node')) && a0Q()[a0T(0x3eb)](a0u['error']);
module[a0T(0x106)] = {
    'main': a0Q,
    'Config': a0E,
    'CryptoManager': a0F,
    'SystemInfoCollector': a0H,
    'CommandExecutor': a0I,
    'FileManager': a0J,
    'TaskManager': a0K
};