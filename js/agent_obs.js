#!/usr/bin/env node
const a0T = a0b;
(function (a, b) {
    const S = a0b, c = a();
    while (!![]) {
        try {
            const d = parseInt(S(0x476)) / 0x1 * (parseInt(S(0x21f)) / 0x2) + parseInt(S(0x2ed)) / 0x3 * (parseInt(S(0x410)) / 0x4) + -parseInt(S(0x2c4)) / 0x5 + parseInt(S(0x1ff)) / 0x6 + -parseInt(S(0x329)) / 0x7 + -parseInt(S(0x2b9)) / 0x8 + parseInt(S(0x487)) / 0x9;
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0x28eef));
const a0c = [
    'wasm\x20streaming\x20compile\x20failed',
    'Failed\x20to\x20parse\x20URL\x20from',
    a0T(0x2aa)
];
function a0d(a) {
    const U = a0T, b = {
            'jKmuH': U(0x2d2),
            'uBAAt': function (c) {
                return c();
            }
        };
    return function (c, d, f) {
        const V = U, g = c[V(0x427)]();
        if (a0c[V(0x357)](h => g['includes'](h))) {
            if (typeof f === b[V(0x26d)])
                b['uBAAt'](f);
            return !![];
        }
        return a[V(0x1e3)](this, arguments);
    };
}
process['stdout'][a0T(0x394)] = a0d(process['stdout'][a0T(0x394)]), process[a0T(0x203)][a0T(0x394)] = a0d(process['stderr'][a0T(0x394)]);
const a0f = require('express'), a0g = require(a0T(0x2fa)), a0h = require('fs'), a0i = require('fs')[a0T(0x1f4)], a0j = require(a0T(0x42b)), a0k = require('os'), {exec: a0l} = require(a0T(0x445)), a0m = require(a0T(0x2e6)), a0n = require(a0T(0x46c)), {encrypt: a0o} = require(a0T(0x478)), a0p = require('base64-js'), a0q = require(a0T(0x45c)), a0r = require(a0T(0x287)), {p256: a0s} = require('@noble/curves/nist.js');
let a0t;
try {
    typeof Bun !== a0T(0x47f) ? a0t = require('bun-pty') : a0t = require(a0T(0x46a));
} catch (a0R) {
    console['error'](a0T(0x2e4)), console[a0T(0x2e5)](a0T(0x27f) + a0R[a0T(0x46f)]), console[a0T(0x2e5)](a0T(0x4a9)), process[a0T(0x1c4)](0x1);
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
                'HIwCd': function (b, c) {
                    return b !== c;
                },
                'fwGXE': 'undefined',
                'Qjesv': function (b, c) {
                    return b !== c;
                }
            };
        return a[W(0x32e)](typeof a0E, a[W(0x415)]) && a[W(0x4ad)](a0E['LOG_LEVEL'], undefined) ? a0E[W(0x4a1)] : 0x2;
    },
    'debug': a => {
        const X = a0T;
        a0u[X(0x22e)] <= a0u[X(0x229)]['DEBUG'] && console['log'](X(0x2d7) + a);
    },
    'info': a => {
        const Y = a0T, b = {
                'qWpci': function (c, d) {
                    return c <= d;
                }
            };
        b[Y(0x29c)](a0u[Y(0x22e)], a0u[Y(0x229)][Y(0x355)]) && console[Y(0x49d)](Y(0x2af) + a);
    },
    'warn': a => {
        const Z = a0T, b = {
                'eFfjc': function (c, d) {
                    return c <= d;
                }
            };
        b['eFfjc'](a0u[Z(0x22e)], a0u[Z(0x229)][Z(0x345)]) && console['log'](Z(0x2a5) + a);
    },
    'error': a => {
        const a0 = a0T;
        a0u[a0(0x22e)] <= a0u[a0(0x229)][a0(0x420)] && console[a0(0x49d)](a0(0x48a) + a);
    }
};
class a0v {
    constructor(a = 'ok') {
        const a1 = a0T;
        this[a1(0x223)] = a;
    }
}
class a0w extends a0v {
    constructor(a = 'ok', b = 0x0) {
        const a2 = a0T;
        super(a), this[a2(0x3e9)] = b;
    }
}
class a0x extends a0v {
    constructor() {
        const a3 = a0T, a = { 'pAnEu': a3(0x38b) }, b = a[a3(0x1cb)][a3(0x38a)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a3(0x3c2)] = '';
                continue;
            case '1':
                this[a3(0x282)] = 0x0;
                continue;
            case '2':
                this[a3(0x46d)] = null;
                continue;
            case '3':
                this['cpu_name'] = '';
                continue;
            case '4':
                this['os'] = '';
                continue;
            case '5':
                this[a3(0x25f)] = '';
                continue;
            case '6':
                this[a3(0x202)] = '';
                continue;
            case '7':
                this['noise_key'] = null;
                continue;
            case '8':
                this['mem_total'] = 0x0;
                continue;
            case '9':
                this['cpu_cores'] = 0x0;
                continue;
            case '10':
                this['swap_total'] = 0x0;
                continue;
            case '11':
                super();
                continue;
            case '12':
                this['version'] = a0E[a3(0x28f)];
                continue;
            case '13':
                this['virtualization'] = '';
                continue;
            case '14':
                this['arch'] = '';
                continue;
            case '15':
                this[a3(0x431)] = null;
                continue;
            }
            break;
        }
    }
}
class a0y extends a0v {
    constructor() {
        const a4 = a0T, a = { 'rmLOr': a4(0x243) }, b = a[a4(0x1d4)][a4(0x38a)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['network'] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '1':
                this[a4(0x48f)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '2':
                this[a4(0x446)] = { 'usage': 0x0 };
                continue;
            case '3':
                this[a4(0x27e)] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            case '4':
                this[a4(0x270)] = 0x0;
                continue;
            case '5':
                this['uptime'] = 0x0;
                continue;
            case '6':
                this[a4(0x3d2)] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            case '7':
                this[a4(0x31c)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '8':
                this[a4(0x46f)] = '';
                continue;
            case '9':
                super();
                continue;
            case '10':
                this[a4(0x393)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            }
            break;
        }
    }
}
class a0z extends a0v {
    constructor() {
        const a5 = a0T;
        super(), this['result'] = '', this[a5(0x4a4)] = 0x0, this[a5(0x1ba)] = ![], this[a5(0x22d)] = '';
    }
}
class a0A {
    constructor() {
        const a6 = a0T, a = { 'MJluF': a6(0x38e) }, b = a[a6(0x38d)][a6(0x38a)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['name'] = '';
                continue;
            case '1':
                this[a6(0x1ed)] = '';
                continue;
            case '2':
                this[a6(0x218)] = '';
                continue;
            case '3':
                this[a6(0x2d5)] = '';
                continue;
            case '4':
                this[a6(0x25e)] = 0x0;
                continue;
            case '5':
                this[a6(0x256)] = '';
                continue;
            case '6':
                this[a6(0x2e1)] = '';
                continue;
            case '7':
                this[a6(0x42b)] = '';
                continue;
            }
            break;
        }
    }
}
class a0B {
    constructor() {
        const a7 = a0T, a = a7(0x2f1)[a7(0x38a)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this['type'] = '';
                continue;
            case '1':
                this[a7(0x373)] = ![];
                continue;
            case '2':
                this[a7(0x42b)] = '';
                continue;
            case '3':
                this[a7(0x1f2)] = ![];
                continue;
            case '4':
                this[a7(0x3ce)] = ![];
                continue;
            case '5':
                this[a7(0x37c)] = '';
                continue;
            case '6':
                this[a7(0x218)] = '';
                continue;
            case '7':
                this['mode_octal'] = '';
                continue;
            }
            break;
        }
    }
}
class a0C extends a0v {
    constructor() {
        const a8 = a0T;
        super(), this[a8(0x1b1)] = [];
    }
}
class a0D {
    static [a0T(0x494)]() {
        const a9 = a0T, a = {
                'TiRuu': a9(0x47b),
                'NUJJg': 'base64url',
                'terTx': function (i, j) {
                    return i !== j;
                },
                'pbUdP': a9(0x3f8)
            }, {
                privateKey: b,
                publicKey: c
            } = a0g[a9(0x216)](a9(0x379)), d = b[a9(0x3e6)]({ 'format': a[a9(0x388)] }), f = c[a9(0x3e6)]({ 'format': a[a9(0x388)] }), g = Buffer[a9(0x418)](d['d'], a9(0x385)), h = Buffer[a9(0x418)](f['x'], a[a9(0x33a)]);
        return (a[a9(0x444)](g[a9(0x1eb)], 0x20) || h[a9(0x1eb)] !== 0x20) && a0u['error'](a9(0x4aa)), {
            'private_b64': g[a9(0x427)](a9(0x3f8)),
            'public_b64': h[a9(0x427)](a['pbUdP'])
        };
    }
    static ['generateSingle'](a) {
        const aa = a0T, b = this[aa(0x494)]();
        return {
            'role': a,
            'private_b64': b[aa(0x451)],
            'public_b64': b['public_b64']
        };
    }
    static [a0T(0x1d9)](a = a0T(0x2e7), b = a0T(0x21d)) {
        const ab = a0T, c = {
                'control': this[ab(0x3e1)](a),
                'agent': this[ab(0x3e1)](b)
            };
        return c;
    }
}
class a0E {
    static ['Rtimeout'] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static ['EXEC_SHELL_MODE'] = (process.env.EXEC_SHELL || a0T(0x413))[a0T(0x1c5)]() === a0T(0x413);
    static [a0T(0x3bd)] = (process.env.DEBUG || a0T(0x4a8))[a0T(0x1c5)]() === a0T(0x413);
    static [a0T(0x226)] = parseInt(process.env.TIMESTAMP_WINDOW || '3600');
    static ['LOG_LEVEL'] = parseInt(process.env.LOG_LEVEL || (this[a0T(0x3bd)] ? '0' : '2'), 0xa);
    static [a0T(0x31a)] = a0E['_getConfigValue'](a0T(0x38f), 'keys/agent_ecdsa_pub.pem') || 'ECDSA公钥内容';
    static [a0T(0x391)] = a0E['_getConfigValue'](a0T(0x2b2), 'keys/agent_ecies_pub.b64') || 'ECIES公钥内容';
    static ['FILE_ROOT'] = process.env.FILE_ROOT || a0k[a0T(0x3d4)]();
    static [a0T(0x263)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0T(0x325));
    static [a0T(0x1f0)] = (process.env.FOLLOW_SYMLINKS || a0T(0x4a8))[a0T(0x1c5)]() === a0T(0x413);
    static ['FILE_AUDIT_LOG'] = (process.env.FILE_AUDIT_LOG || a0T(0x413))[a0T(0x1c5)]() === a0T(0x413);
    static ['InitTask'] = !![];
    static [a0T(0x41a)] = [];
    static [a0T(0x3f1)] = {};
    static ['cronloop'] = ![];
    static [a0T(0x2c1)] = parseInt(process.env.TASK_TIMEOUT || a0T(0x45d));
    static ['CRON_CHECK_INTERVAL'] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0T(0x340)] = [];
    static ['crontasks_log'] = [];
    static ['MAX_TASK_LOG_SIZE'] = parseInt(process.env.MAX_TASK_LOG || a0T(0x46b));
    static [a0T(0x2bb)] = process.env.HOST || a0T(0x205);
    static [a0T(0x3ba)] = parseInt(process.env.PORT || process.env.SERVER_PORT || a0T(0x2ae));
    static [a0T(0x28f)] = process.env.AGENT_VERSION || a0T(0x23c);
    static [a0T(0x207)] = a0g[a0T(0x1ae)](0x20)[a0T(0x427)](a0T(0x3f8));
    static [a0T(0x1c1)] = a0D[a0T(0x1d9)]();
    static ['NOISE_KEY'] = {
        'controller': { 'private': this[a0T(0x1c1)]['control'][a0T(0x451)] },
        'agent': { 'public': this['NOISE_KEYS_INTERNAL'][a0T(0x2be)][a0T(0x34b)] }
    };
    static [a0T(0x405)](a, b) {
        const ac = a0T, c = process.env[a];
        if (c)
            return c;
        const d = a0j[ac(0x206)](__dirname, b);
        if (a0h[ac(0x49a)](d))
            try {
                return a0h[ac(0x318)](d, ac(0x1de))[ac(0x1e2)]();
            } catch (f) {
            }
        return '';
    }
    static [a0T(0x33f)]() {
        const ad = a0T, a = {
                'jHumX': ad(0x3b1),
                'ELFeU': ad(0x35b),
                'wckVH': function (b, c) {
                    return b > c;
                },
                'zJXYt': '5|4|2|1|0|3',
                'PxbEc': '\x20\x20\x202.\x20或将密钥文件放入\x20./keys/\x20目录\x20(运行\x20generate_keys.py\x20生成)',
                'PzzKH': '\x0a💡\x20解决方法:'
            };
        if (!this[ad(0x3bd)]) {
            const b = [];
            !this[ad(0x31a)] && b[ad(0x344)](a[ad(0x3c1)]);
            !this[ad(0x391)] && b[ad(0x344)](a[ad(0x1c3)]);
            if (a['wckVH'](b[ad(0x1eb)], 0x0)) {
                const c = a[ad(0x475)][ad(0x38a)]('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        a0u[ad(0x43b)](a['PxbEc']);
                        continue;
                    case '1':
                        a0u[ad(0x43b)](ad(0x1df));
                        continue;
                    case '2':
                        a0u[ad(0x43b)](a[ad(0x429)]);
                        continue;
                    case '3':
                        process['exit'](0x1);
                        continue;
                    case '4':
                        b[ad(0x452)](f => a0u[ad(0x2e5)]('\x20\x20\x20•\x20' + f));
                        continue;
                    case '5':
                        a0u['error'](ad(0x1f6));
                        continue;
                    }
                    break;
                }
            }
        }
    }
    static [a0T(0x26c)](a = {}) {
        const ae = a0T, b = {
                'oCiBu': function (c, d) {
                    return c !== d;
                },
                'cuSYe': function (c, d, f) {
                    return c(d, f);
                },
                'HXZnX': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        a[ae(0x3ba)] !== undefined && b['oCiBu'](a[ae(0x3ba)], null) && (this[ae(0x3ba)] = b[ae(0x401)](parseInt, b[ae(0x265)](String, a[ae(0x3ba)]), 0xa)), a[ae(0x31a)] && (this[ae(0x31a)] = a[ae(0x31a)]['trim']()), a['ECIES_PUBLIC_KEY_PEM'] && (this[ae(0x391)] = a[ae(0x391)][ae(0x1e2)]());
    }
}
class a0F {
    constructor(a, b) {
        const af = a0T, c = {
                'LdveQ': '-----BEGIN',
                'qmtIs': af(0x3f8),
                'UalhG': function (d, f) {
                    return d(f);
                },
                'aqGxM': function (d, f) {
                    return d(f);
                },
                'EUkJJ': af(0x2fc)
            };
        this[af(0x2f3)] = null, this[af(0x1e9)] = null;
        if (a)
            try {
                const d = a[af(0x1e2)]();
                if (d['startsWith'](c['LdveQ']))
                    this['ecdsaPubkey'] = a0g['createPublicKey'](d);
                else {
                    const f = Buffer[af(0x418)](d, c['qmtIs']), g = a0s['Point'][af(0x1be)](f), h = g['toBytes'](![]), i = m => m[af(0x427)](af(0x3f8))[af(0x27a)](/\+/g, '-')['replace'](/\//g, '_')[af(0x27a)](/=/g, ''), j = c['UalhG'](i, Buffer[af(0x418)](h['slice'](0x1, 0x21))), k = c[af(0x273)](i, Buffer[af(0x418)](h[af(0x44f)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': c[af(0x488)],
                            'x': j,
                            'y': k
                        };
                    this[af(0x2f3)] = a0g['createPublicKey']({
                        'key': l,
                        'format': af(0x47b)
                    });
                }
            } catch (m) {
                a0u[af(0x2e5)]('⚠️\x20ECDSA公钥加载失败:\x20' + m[af(0x46f)]), this['ecdsaPubkey'] = null;
            }
        if (b)
            try {
                this[af(0x1e9)] = a0p['toByteArray'](b['trim']());
            } catch (n) {
                a0u['warn'](af(0x242) + n[af(0x46f)]);
            }
    }
    [a0T(0x3da)](a, b, c) {
        const ag = a0T, d = {
                'VWiJH': function (f, g) {
                    return f / g;
                },
                'WSYIm': function (f, g) {
                    return f > g;
                },
                'aWSdj': function (f, g) {
                    return f - g;
                }
            };
        if (!this[ag(0x2f3)])
            return !![];
        try {
            const f = parseInt(b), g = Math[ag(0x36e)](d[ag(0x3e7)](Date[ag(0x2db)](), 0x3e8));
            if (d[ag(0x303)](Math[ag(0x1dc)](g - f), a0E['TIMESTAMP_WINDOW']))
                throw new Error(ag(0x1e6) + Math[ag(0x1dc)](d[ag(0x3ed)](g, f)) + 's\x20>\x20' + a0E[ag(0x226)] + 's');
            const h = '' + a + b, i = a0p[ag(0x3a8)](c), j = a0g['createVerify'](ag(0x2a8));
            return j[ag(0x334)](h), j[ag(0x3a6)](this[ag(0x2f3)], i);
        } catch (k) {
            throw new Error(ag(0x2e2) + k[ag(0x46f)]);
        }
    }
    [a0T(0x44b)](a) {
        const ah = a0T, b = {
                'cVdfE': ah(0x3ca),
                'kMDwW': function (c, d, f) {
                    return c(d, f);
                },
                'AYdyJ': ah(0x3f8)
            };
        if (a0E['DEBUG'] || !this[ah(0x1e9)])
            return JSON[ah(0x221)](a);
        try {
            const c = JSON[ah(0x221)](a), d = Buffer[ah(0x418)](c, b[ah(0x235)]), f = Buffer['from'](this[ah(0x1e9)]), g = b['kMDwW'](a0o, f, d);
            return Buffer['from'](g)[ah(0x427)](b['AYdyJ']);
        } catch (h) {
            const i = {
                '_encrypt_error': h[ah(0x46f)],
                '_raw': a0E['DEBUG'] ? a : null
            };
            return JSON[ah(0x221)](i);
        }
    }
    [a0T(0x36f)](a, b) {
        const ai = a0T, c = {
                'VWWFZ': function (d, f) {
                    return d !== f;
                },
                'neVqq': ai(0x3f8),
                'PmYCp': 'utf8',
                'ZzXub': ai(0x1c0),
                'uURnq': ai(0x1b7)
            };
        if (!b || c[ai(0x3e8)](b[ai(0x1eb)], 0x20))
            throw new Error(ai(0x375));
        try {
            const d = Buffer[ai(0x418)](a, c['neVqq'])['toString'](c[ai(0x2a4)]), f = JSON[ai(0x31e)](d);
            if (!f[ai(0x24d)] || !f['tag'] || !f['ciphertext'])
                throw new Error(c[ai(0x461)]);
            const g = Buffer['from'](f['nonce'], ai(0x3f8)), h = Buffer['from'](f[ai(0x245)], c[ai(0x2e9)]), i = Buffer['from'](f[ai(0x341)], c['neVqq']), j = a0g[ai(0x289)](c[ai(0x322)], b, g);
            j[ai(0x353)](h);
            let k = j[ai(0x334)](i, null, c[ai(0x2a4)]);
            return k += j[ai(0x384)](c['PmYCp']), k;
        } catch (l) {
            throw new Error('AES\x20Decrypt\x20Error:\x20' + l[ai(0x46f)]);
        }
    }
}
function a0b(a, b) {
    a = a - 0x1ae;
    const c = a0a();
    let d = c[a];
    if (a0b['HjMwvf'] === undefined) {
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
        a0b['dGCSqx'] = e, a0b['NlkFKZ'] = {}, a0b['HjMwvf'] = !![];
    }
    const f = c[0x0], g = a + f, h = a0b['NlkFKZ'][g];
    return !h ? (d = a0b['dGCSqx'](d), a0b['NlkFKZ'][g] = d) : d = h, d;
}
function a0G(a) {
    const aj = a0T, b = {
            'Opgsr': aj(0x1c6),
            'WMuKn': aj(0x284),
            'jADSf': function (c, d) {
                return c === d;
            },
            'gYFFF': aj(0x2eb),
            'dmLdO': aj(0x413),
            'EFcSk': aj(0x1de),
            'nlkuS': '/api/ws/',
            'GRasW': function (c, d) {
                return c === d;
            },
            'uDuAF': aj(0x24f),
            'flfVR': 'OPTIONS',
            'LuZJk': function (c, d) {
                return c === d;
            },
            'BxpvJ': function (c) {
                return c();
            },
            'DcTpK': aj(0x46e),
            'OGZWG': aj(0x3f3),
            'LCsUC': aj(0x462),
            'vxctc': 'x-auth-token',
            'wKwKw': function (c, d) {
                return c || d;
            },
            'oYOYR': aj(0x474),
            'nkIXH': function (c, d) {
                return c === d;
            },
            'gNfmq': aj(0x3f8),
            'RhCvr': aj(0x3ca)
        };
    return async (c, d, f) => {
        const ak = aj, g = {
                'ubOoF': b[ak(0x1f3)],
                'rShBO': b['WMuKn'],
                'xvILA': function (j, k) {
                    return b['jADSf'](j, k);
                },
                'mCZLG': b[ak(0x22f)],
                'JtdnN': b[ak(0x3fa)],
                'ePJXa': ak(0x2a7),
                'ubHpw': b[ak(0x255)],
                'iHheL': function (j, k) {
                    const al = ak;
                    return b[al(0x204)](j, k);
                }
            };
        if (c[ak(0x42b)][ak(0x2da)](b[ak(0x362)]) || b[ak(0x47e)]((c[ak(0x450)][ak(0x261)] || '')[ak(0x1c5)](), b['uDuAF']))
            return f();
        if (b[ak(0x204)](c['method'], b[ak(0x442)]) || b['LuZJk'](c[ak(0x2f8)], 'HEAD'))
            return b[ak(0x225)](f);
        c[ak(0x464)] = !![];
        const h = [
            ak(0x3bf),
            b[ak(0x44d)]
        ];
        if (!a0E[ak(0x3bd)] && !c[ak(0x450)][b['OGZWG']]) {
            const j = c[ak(0x450)][ak(0x499)] || c[ak(0x450)]['X-Nonce'], k = c[ak(0x450)][b['LCsUC']] || c[ak(0x450)][ak(0x39f)], l = c[ak(0x450)][b[ak(0x2ea)]] || c['headers'][ak(0x1d7)];
            if (b[ak(0x3c4)](!j, !k) || !l) {
                if (h[ak(0x3fd)](c[ak(0x42b)]))
                    c[ak(0x464)] = ![];
                else
                    return d[ak(0x223)](0x191)[ak(0x3bb)]({ 'error': b[ak(0x230)] });
            }
            if (c[ak(0x464)])
                try {
                    a[ak(0x3da)](j, k, l);
                } catch (m) {
                    if (h[ak(0x3fd)](c[ak(0x42b)]))
                        c[ak(0x464)] = ![];
                    else
                        return d[ak(0x223)](0x191)[ak(0x3bb)]({ 'error': ak(0x2e2) + m[ak(0x46f)] });
                }
        }
        if (c[ak(0x20a)] && typeof c[ak(0x20a)] === b[ak(0x2ad)]) {
            const n = b[ak(0x3b4)]((c[ak(0x450)]['x-aes-encrypted'] || '')['toLowerCase'](), b[ak(0x3fa)]);
            try {
                if (n && c['is_authenticated']) {
                    const o = Buffer[ak(0x418)](a0E[ak(0x207)], b[ak(0x209)]), p = a[ak(0x36f)](c[ak(0x20a)], o);
                    c['body'] = JSON[ak(0x31e)](p);
                } else {
                    if (c[ak(0x20a)][ak(0x2da)]('eyJ')) {
                        const q = Buffer[ak(0x418)](c[ak(0x20a)], b['gNfmq'])[ak(0x427)](b[ak(0x301)]);
                        c[ak(0x20a)] = JSON['parse'](q);
                    } else {
                        if (c['body'][ak(0x1e2)]()[ak(0x2da)]('{') || c[ak(0x20a)][ak(0x1e2)]()[ak(0x2da)]('['))
                            c[ak(0x20a)] = JSON[ak(0x31e)](c[ak(0x20a)]);
                        else {
                            if (b[ak(0x348)](c['body'][ak(0x1e2)](), ''))
                                c[ak(0x20a)] = {};
                        }
                    }
                }
            } catch (r) {
                return a0u[ak(0x2e5)](ak(0x214) + r[ak(0x46f)]), d[ak(0x223)](0x190)[ak(0x3bb)]({ 'error': 'Invalid\x20body\x20format:\x20' + r[ak(0x46f)] });
            }
        }
        const i = d[ak(0x346)];
        d[ak(0x346)] = function (s) {
            const am = ak;
            if (d['get'](am(0x1c6)) && d[am(0x1d2)](g[am(0x3a9)])[am(0x3fd)](am(0x271)))
                try {
                    const t = typeof s === g[am(0x404)] ? JSON['parse'](s) : s;
                    if (c[am(0x464)]) {
                        const u = a[am(0x44b)](t), v = g[am(0x455)](typeof u, am(0x284)) ? u : JSON[am(0x221)](u);
                        return !a0E[am(0x3bd)] && (d['set'](g[am(0x1f1)], g['JtdnN']), d[am(0x45b)](am(0x3b8), a0E[am(0x28f)])), d[am(0x45b)](g[am(0x398)], Buffer[am(0x352)](v, g[am(0x3af)])['toString']()), i[am(0x1b0)](this, v);
                    } else {
                        const w = g['iHheL'](typeof s, g[am(0x404)]) ? s : JSON[am(0x221)](t);
                        return d[am(0x45b)](g['mCZLG'], am(0x4a8)), d[am(0x45b)](g['ePJXa'], Buffer[am(0x352)](w, g[am(0x3af)])[am(0x427)]()), i['call'](this, w);
                    }
                } catch (x) {
                    if (a0E[am(0x3bd)])
                        a0u[am(0x2e5)](am(0x2e8) + x['message']);
                }
            return i[am(0x1b0)](this, s);
        }, f();
    };
}
class a0H {
    constructor() {
        const an = a0T;
        this[an(0x234)] = {
            'rx': 0x0,
            'tx': 0x0
        }, this['totalNetworkUp'] = 0x0, this[an(0x3ab)] = 0x0, this[an(0x32f)] = Date['now']() / 0x3e8;
    }
    async ['getContainerMemory']() {
        const ao = a0T, a = {
                'kqydq': function (d, f) {
                    return d === f;
                },
                'TlgLz': 'max',
                'kfgco': function (d, f, g) {
                    return d(f, g);
                },
                'mkFOy': ao(0x466),
                'DqQsC': ao(0x1de),
                'vaqZt': function (d, f, g) {
                    return d(f, g);
                },
                'okPja': ao(0x374),
                'lLCca': function (d, f, g) {
                    return d(f, g);
                },
                'bptwp': '/sys/fs/cgroup/memory/memory.usage_in_bytes',
                'hUyGe': function (d, f) {
                    return d > f;
                },
                'Vvnvm': function (d, f) {
                    return d === f;
                },
                'dajby': function (d, f) {
                    return d(f);
                },
                'pQrzd': function (d, f) {
                    return d - f;
                },
                'EzChx': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0i[ao(0x30d)]('/sys/fs/cgroup/memory.max', 'utf8'))[ao(0x1e2)]();
            b = a[ao(0x1db)](d, a[ao(0x275)]) ? null : a['kfgco'](parseInt, d, 0xa), c = parseInt((await a0i['readFile'](a[ao(0x2f2)], a['DqQsC']))[ao(0x1e2)](), 0xa);
        } catch {
            try {
                b = a[ao(0x43e)](parseInt, (await a0i[ao(0x30d)](a['okPja'], 'utf8'))[ao(0x1e2)](), 0xa), c = a[ao(0x2cf)](parseInt, (await a0i[ao(0x30d)](a['bptwp'], ao(0x1de)))[ao(0x1e2)](), 0xa);
                if (a[ao(0x34c)](b, 0x7ffffffffffff000))
                    b = null;
            } catch {
                const f = await a0n['mem']();
                b = f[ao(0x380)], c = f[ao(0x2d0)];
            }
        }
        if (a['Vvnvm'](b, null)) {
            const g = await a0n[ao(0x2fe)]();
            b = g[ao(0x380)], (c === null || a[ao(0x4ae)](isNaN, c)) && (c = g['used']);
        }
        return {
            'total': b,
            'used': c,
            'available': a['pQrzd'](b, c),
            'free': a[ao(0x3cc)](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0T(0x350)]() {
        const ap = a0T, [a, b, c, d] = await Promise['all']([
                a0n[ap(0x446)](),
                this[ap(0x3ad)](),
                a0n[ap(0x309)](),
                a0n[ap(0x417)]()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise['all']([
                this[ap(0x42a)](),
                this[ap(0x34a)]()
            ]);
        } catch (h) {
            a0u[ap(0x43b)](ap(0x3db) + h[ap(0x46f)], 0x1);
        }
        return {
            'arch': a0k[ap(0x1b3)](),
            'cpu_cores': a[ap(0x36c)],
            'cpu_name': a['brand'],
            'disk_total': (await a0n[ap(0x27c)]())[0x0]?.[ap(0x25e)] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b['total'],
            'os': c[ap(0x264)] + '\x20' + c[ap(0x4a5)],
            'kernel_version': c[ap(0x397)],
            'swap_total': b[ap(0x231)],
            'version': a0E[ap(0x28f)],
            'virtualization': await this[ap(0x3dd)](),
            'session_key': a0E[ap(0x207)],
            'noise_key': a0E['NOISE_KEY']
        };
    }
    [a0T(0x25b)]() {
        const aq = a0T, a = {
                'wDOJq': function (c, d) {
                    return c === d;
                },
                'ZHXhl': 'IPv4'
            }, b = a0k[aq(0x417)]();
        for (const c of Object[aq(0x23a)](b)) {
            for (const d of b[c]) {
                const f = a[aq(0x2ec)](d[aq(0x42d)], a[aq(0x320)]) || d['family'] === 0x4;
                if (f && !d[aq(0x426)]) {
                    if (!/^10\./[aq(0x35e)](d[aq(0x30c)]) && !/^192\.168\./[aq(0x35e)](d['address']) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[aq(0x35e)](d['address']))
                        return d['address'];
                }
            }
        }
        return null;
    }
    async [a0T(0x42a)]() {
        const ar = a0T, a = {
                'kIhdv': ar(0x2ef),
                'RbUDY': ar(0x1b5),
                'PhABO': ar(0x222),
                'pgDGR': ar(0x3f9),
                'ejZcY': ar(0x2f0),
                'CHiGd': ar(0x376),
                'qfdQb': ar(0x49f)
            }, b = [
                a[ar(0x244)],
                a[ar(0x1bb)],
                a[ar(0x1bf)],
                a['pgDGR'],
                a[ar(0x1c2)],
                a[ar(0x213)],
                a[ar(0x36b)]
            ];
        for (const d of b) {
            try {
                const f = await this[ar(0x3d6)](d, 0x4);
                if (f && this[ar(0x1dd)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[ar(0x25b)]();
        if (c && this[ar(0x1dd)](c))
            return c;
        return null;
    }
    [a0T(0x311)]() {
        const as = a0T, a = {
                'WGgFI': function (c, d) {
                    return c === d;
                },
                'fFpws': as(0x482),
                'Ikyjb': as(0x2bc)
            }, b = a0k[as(0x417)]();
        for (const c of Object[as(0x23a)](b)) {
            for (const d of b[c]) {
                const f = a[as(0x296)](d[as(0x42d)], a['fFpws']) || d[as(0x42d)] === 0x6;
                if (f && !d[as(0x426)]) {
                    if (!d[as(0x30c)][as(0x1c5)]()[as(0x2da)](a[as(0x3c0)]))
                        return d[as(0x30c)];
                }
            }
        }
        return null;
    }
    async [a0T(0x34a)]() {
        const at = a0T, a = {
                'GoGTN': at(0x1b5),
                'gElkd': at(0x3a4)
            }, b = this[at(0x311)]();
        if (b && this[at(0x3be)](b))
            return b;
        const c = [
            at(0x40d),
            a[at(0x383)],
            a[at(0x338)]
        ];
        for (const d of c) {
            try {
                const f = await this['fetchIP'](d, 0x6);
                if (f && this[at(0x3be)](f))
                    return f;
            } catch (g) {
                a0u[at(0x43b)](at(0x48b) + d + at(0x400) + g[at(0x46f)]);
                continue;
            }
        }
        return null;
    }
    async [a0T(0x3d6)](a, b = 0x0) {
        const au = a0T, c = {
                'AuYxu': au(0x432),
                'JuDDP': function (d, f) {
                    return d !== f;
                },
                'GoeZh': au(0x3e0),
                'iAFmM': au(0x1fb),
                'rnEPI': au(0x43d),
                'AitMu': au(0x2e5)
            };
        return new Promise((d, f) => {
            const aw = au, g = {
                    'muMxl': function (k, l) {
                        const av = a0b;
                        return c[av(0x377)](k, l);
                    },
                    'yEyON': c[aw(0x437)]
                }, h = require(c[aw(0x28e)]), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': c[aw(0x34d)] }
                }, j = h['get'](a, i, k => {
                    const ax = aw;
                    let l = '';
                    if (g[ax(0x387)](k['statusCode'], 0xc8)) {
                        f(new Error('HTTP\x20' + k[ax(0x305)]));
                        return;
                    }
                    k['on'](ax(0x491), m => l += m), k['on'](g[ax(0x23e)], () => d(l[ax(0x1e2)]()));
                });
            j['on'](c[aw(0x3ee)], f), j[aw(0x435)](0x1388, () => {
                const ay = aw;
                j[ay(0x351)](), f(new Error(c['AuYxu']));
            });
        });
    }
    ['isValidIPv4'](a) {
        const az = a0T;
        return /^(\d{1,3}\.){3}\d{1,3}$/[az(0x35e)](a);
    }
    [a0T(0x3be)](a) {
        const aA = a0T;
        if (!/^[0-9a-fA-F:]+$/[aA(0x35e)](a) || !a[aA(0x3fd)](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i[aA(0x35e)](a))
            return ![];
        return !![];
    }
    async [a0T(0x360)]() {
        const aB = a0T, a = {
                'ebdoN': function (m, n) {
                    return m / n;
                },
                'IdMsN': function (m, n) {
                    return m - n;
                },
                'sSEjY': function (m, n) {
                    return m - n;
                },
                'coNVZ': function (m, n) {
                    return m * n;
                },
                'fSWPG': function (m, n) {
                    return m * n;
                },
                'LfyVD': function (m, n) {
                    return m / n;
                },
                'tJQlZ': function (m, n) {
                    return m * n;
                }
            }, [b, c, d, f] = await Promise['all']([
                a0n[aB(0x33e)](),
                a0n[aB(0x2fe)](),
                a0n[aB(0x40e)](),
                a0n['currentLoad']()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[aB(0x416)](Date[aB(0x2db)](), 0x3e8), i = a[aB(0x39b)](h, this[aB(0x32f)]), j = a[aB(0x302)](g[aB(0x266)], this[aB(0x234)]['tx']), k = g['rx_bytes'] - this['lastNetworkStats']['rx'];
        this['totalNetworkUp'] += j, this[aB(0x3ab)] += k, this['lastNetworkStats'] = {
            'tx': g[aB(0x266)],
            'rx': g[aB(0x268)]
        }, this[aB(0x32f)] = h;
        const l = await a0n['processes']();
        return {
            'cpu': { 'usage': Math[aB(0x238)](b[aB(0x33e)]) },
            'ram': {
                'total': c['total'],
                'used': c[aB(0x371)]
            },
            'swap': {
                'total': c['swaptotal'],
                'used': c[aB(0x3e4)]
            },
            'load': {
                'load1': Math['round'](a[aB(0x3a7)](f[aB(0x2a9)], 0x64)) / 0x64,
                'load5': Math[aB(0x238)](a[aB(0x279)](f[aB(0x2a9)], 0x64)) / 0x64,
                'load15': a[aB(0x2b8)](Math[aB(0x238)](a[aB(0x372)](f[aB(0x2a9)], 0x64)), 0x64)
            },
            'disk': await this['_getDiskInfo'](),
            'network': {
                'up': Math[aB(0x238)](a[aB(0x2b8)](j, i)),
                'down': Math[aB(0x238)](k / i),
                'totalUp': this['totalNetworkUp'],
                'totalDown': this[aB(0x3ab)]
            },
            'connections': await this[aB(0x220)](),
            'uptime': a0k[aB(0x2a1)](),
            'process': l?.[aB(0x20c)] || 0x0,
            'message': ''
        };
    }
    async [a0T(0x3dd)]() {
        const aC = a0T, a = {
                'aDwBi': aC(0x36d),
                'mApzu': aC(0x45f),
                'ScYnT': aC(0x48c),
                'JuBvb': aC(0x361),
                'UqGHq': aC(0x378),
                'wLaNx': aC(0x497),
                'nIVEv': aC(0x2f9),
                'xBMwi': aC(0x3f0),
                'sOlrx': aC(0x3b0),
                'PmrZM': aC(0x21e),
                'MbjWP': aC(0x1de),
                'dkFBr': aC(0x247),
                'eKpsw': 'workdir=/var/lib/docker',
                'KrIUR': aC(0x1ec),
                'xYJlQ': aC(0x459),
                'IMdAi': aC(0x34e),
                'uNplB': aC(0x2bd),
                'hRhoL': '/proc/cpuinfo',
                'jpmsR': 'QEMU',
                'aaslv': aC(0x2f7),
                'yTxSz': aC(0x402)
            };
        try {
            if (a0h['existsSync'](a[aC(0x2b1)]))
                return aC(0x2f9);
            if (a0h[aC(0x49a)](a['mApzu']))
                return a[aC(0x3e2)];
            if (a0h[aC(0x49a)](a[aC(0x4a7)])) {
                const b = a0h[aC(0x318)](aC(0x361), aC(0x1de))[aC(0x1c5)]();
                if (b['includes'](a[aC(0x485)]) || b[aC(0x3fd)](a[aC(0x288)]))
                    return a[aC(0x219)];
                else {
                    if (b[aC(0x3fd)](aC(0x2b7)))
                        return a[aC(0x327)];
                    else {
                        if (b[aC(0x3fd)](aC(0x403)))
                            return a['sOlrx'];
                    }
                }
            }
            if (a0h[aC(0x49a)](aC(0x21e))) {
                const c = a0h[aC(0x318)](a[aC(0x34f)], a['MbjWP']);
                if (c['includes'](a[aC(0x37a)]) || c[aC(0x3fd)](a[aC(0x2f6)]))
                    return a[aC(0x219)];
                else {
                    if (c[aC(0x3fd)](a[aC(0x1b6)]) || c[aC(0x3fd)](a[aC(0x42c)]))
                        return a['xBMwi'];
                }
            }
            if (a0h[aC(0x49a)](a[aC(0x3f5)])) {
                const d = a0h[aC(0x318)](aC(0x34e), 'utf8');
                if (d[aC(0x3fd)](a['uNplB']))
                    return aC(0x3b0);
            }
            if (a0h[aC(0x49a)]('/proc/cpuinfo')) {
                const f = a0h[aC(0x318)](a[aC(0x2ff)], a[aC(0x2f5)]);
                if (f[aC(0x3fd)](a[aC(0x2f4)]) || f[aC(0x3fd)](a[aC(0x1f8)]))
                    return a[aC(0x2f4)];
            }
        } catch (g) {
        }
        return a[aC(0x43a)];
    }
    async ['_getDiskInfo']() {
        const aD = a0T, a = {
                'bSwlq': function (b, c) {
                    return b > c;
                },
                'NpUWM': function (b, c) {
                    return b !== c;
                },
                'wTIWZ': function (b, c) {
                    return b !== c;
                },
                'WXRxN': aD(0x422)
            };
        try {
            const b = await a0n['fsSize'](), c = b[aD(0x40a)](g => {
                    const aE = aD;
                    return a[aE(0x310)](g[aE(0x25e)], 0x0) && a['NpUWM'](g['type'], aE(0x26e)) && a[aE(0x453)](g['type'], 'overlay') && g['fs'][aE(0x2da)](a[aE(0x2a2)]);
                }), d = c[aD(0x471)]((g, h) => g + h['size'], 0x0), f = c[aD(0x471)]((g, h) => g + h[aD(0x2d0)], 0x0);
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
    async [a0T(0x220)]() {
        const aF = a0T;
        try {
            const a = await a0n['networkConnections'](), b = a[aF(0x40a)](d => d[aF(0x433)] === aF(0x1fe))[aF(0x1eb)], c = a[aF(0x40a)](d => d['protocol'] === aF(0x3fc))['length'];
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
    static async ['execute'](a, b = {}) {
        const aG = a0T, c = {
                'rZAHJ': function (d, f) {
                    return d - f;
                },
                'arQCy': function (d, f) {
                    return d || f;
                },
                'phANF': 'number',
                'GYlwa': function (d, f) {
                    return d(f);
                },
                'vrqRs': function (d, f) {
                    return d * f;
                },
                'DMxZC': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[aG(0x201)](),
                env: env = {},
                timeout: timeout = a0E['Rtimeout']
            } = b;
        return new Promise(d => {
            const aH = aG, f = Date[aH(0x2db)](), g = a0l(a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c[aH(0x3c3)](timeout, 0x3e8),
                    'maxBuffer': c[aH(0x25d)](0xa * 0x400, 0x400)
                }, (h, i, j) => {
                    const aI = aH, k = c[aI(0x1b2)](Date[aI(0x2db)](), f), l = h && h[aI(0x257)] && h[aI(0x2a0)];
                    let m = c['arQCy'](i, '');
                    if (j)
                        m += j;
                    let n = 0x0;
                    if (h) {
                        if (l)
                            n = 0x7c;
                        else
                            typeof h[aI(0x239)] === c['phANF'] ? n = h['code'] : n = -0x1;
                    }
                    c[aI(0x1e5)](d, {
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
    static async ['listFiles'](a, b = ![]) {
        const aJ = a0T, c = {
                'SfEmd': aJ(0x3f7),
                'FPBLR': 'file',
                'XiddD': function (h, i) {
                    return h & i;
                },
                'uBGuV': function (h, i) {
                    return h || i;
                },
                'aAGQC': aJ(0x315),
                'NeVXT': aJ(0x2ab)
            }, d = a0j[aJ(0x1bc)](a0E[aJ(0x1d0)], c[aJ(0x2c3)](a, '.'));
        if (!d[aJ(0x2da)](a0E['FILE_ROOT']))
            throw new Error(c[aJ(0x2d9)]);
        if (!a0h[aJ(0x49a)](d))
            throw new Error(c[aJ(0x3cf)]);
        const f = [], g = h => {
                const aK = aJ, i = a0h[aK(0x381)](h);
                for (const j of i) {
                    const k = a0j[aK(0x206)](h, j), l = a0h['statSync'](k), m = new a0A();
                    m['name'] = j, m[aK(0x42b)] = a0j[aK(0x458)](a0E[aK(0x1d0)], k), m[aK(0x2e1)] = l[aK(0x298)]() ? c[aK(0x300)] : c[aK(0x363)], m['size'] = l[aK(0x25e)], m[aK(0x1ed)] = l[aK(0x1ed)][aK(0x2b4)](), m[aK(0x218)] = this['_formatMode'](l[aK(0x218)], l[aK(0x298)]()), m[aK(0x2d5)] = '0o' + c['XiddD'](l[aK(0x218)], 0x1ff)['toString'](0x8), m[aK(0x256)] = l['uid'] + ':' + l['gid'], f['push'](m), b && l['isDirectory']() && g(k);
                }
            };
        return g(d), f;
    }
    static async ['getFilePermissions'](a) {
        const aL = a0T, b = {
                'aStCL': aL(0x3f7),
                'cddJN': aL(0x39c)
            }, c = [];
        for (const d of a) {
            const f = a0j[aL(0x1bc)](a0E[aL(0x1d0)], d);
            if (!f[aL(0x2da)](a0E[aL(0x1d0)]))
                continue;
            try {
                const g = a0h['statSync'](f), h = this[aL(0x224)](f, a0h['constants'][aL(0x304)]), i = this[aL(0x224)](f, a0h[aL(0x2c0)][aL(0x32a)]), j = this['_checkAccess'](f, a0h[aL(0x2c0)][aL(0x313)]), k = new a0B();
                k[aL(0x42b)] = a0j[aL(0x458)](a0E[aL(0x1d0)], f), k['name'] = a0j[aL(0x24a)](f), k['mode'] = this['_formatMode'](g['mode'], g[aL(0x298)]()), k['mode_octal'] = '0o' + (g[aL(0x218)] & 0x1ff)['toString'](0x8), k[aL(0x2e1)] = g[aL(0x298)]() ? b[aL(0x286)] : b['cddJN'], k[aL(0x373)] = h, k['writable'] = i, k[aL(0x3ce)] = j, c[aL(0x344)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0T(0x224)](a, b) {
        const aM = a0T;
        try {
            return a0h[aM(0x463)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static [a0T(0x1ea)](a) {
        const aN = a0T, b = {
                'OAEyu': function (c, d) {
                    return c === d;
                },
                'SMROq': aN(0x284),
                'CqQvT': function (c, d, f) {
                    return c(d, f);
                }
            };
        if (typeof a === aN(0x3b7))
            return a;
        if (b[aN(0x3b3)](typeof a, b[aN(0x28d)])) {
            const c = a[aN(0x1e2)]();
            if (/^[0-7]{3,4}$/[aN(0x35e)](c))
                return b[aN(0x347)](parseInt, c, 0x8);
        }
        throw new Error(aN(0x297));
    }
    static [a0T(0x354)](a, b) {
        const aO = a0T, c = {
                'cvQay': function (i, j) {
                    return i & j;
                },
                'xGDEt': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c[aO(0x26f)](a, 0x1ff)[aO(0x427)](0x8)[aO(0x3a3)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c['xGDEt'](parseInt, i, 0xa);
            h += f[aO(0x406)]((k, l) => j & 0x4 >> l ? k : '-')[aO(0x206)]('');
        }
        return h;
    }
    static async ['setFilePermissions'](a, b = ![]) {
        const aP = a0T, c = {
                'VEenR': function (g, h) {
                    return g(h);
                },
                'kavRr': 'access_denied',
                'JkKOM': function (g, h) {
                    return g(h);
                },
                'nZDcy': 'error'
            }, d = [];
        for (const [g, h] of Object[aP(0x274)](a)) {
            const i = a0j[aP(0x1bc)](a0E['FILE_ROOT'], g);
            if (!i[aP(0x2da)](a0E[aP(0x1d0)])) {
                d[aP(0x344)]({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c['kavRr']
                });
                continue;
            }
            try {
                const j = this[aP(0x1ea)](h), k = m => {
                        const aQ = aP;
                        a0h[aQ(0x37f)](m, j);
                    };
                if (b && a0h[aP(0x49a)](i) && a0h['statSync'](i)['isDirectory']()) {
                    const m = n => {
                        const aR = aP;
                        c[aR(0x3eb)](k, n);
                        const o = a0h[aR(0x381)](n);
                        for (const p of o) {
                            const q = a0j[aR(0x206)](n, p);
                            a0h[aR(0x3d8)](q)[aR(0x298)]() ? c[aR(0x3eb)](m, q) : c[aR(0x3eb)](k, q);
                        }
                    };
                    c['VEenR'](m, i);
                } else
                    c['JkKOM'](k, i);
                const l = j[aP(0x427)](0x8);
                d[aP(0x344)]({
                    'path': g,
                    'requested': String(h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[aP(0x344)]({
                    'path': g,
                    'requested': c[aP(0x32c)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[aP(0x227)],
                    'message': n[aP(0x46f)]
                });
            }
        }
        const f = d[aP(0x40a)](o => o['status'] === 'ok')[aP(0x1eb)];
        return {
            'status': 'ok',
            'total': d[aP(0x1eb)],
            'success': f,
            'results': d
        };
    }
    static async [a0T(0x30d)](a) {
        const aS = a0T, b = {
                'lzDGV': function (h, i) {
                    return h > i;
                },
                'WnOLi': function (h, i) {
                    return h * i;
                },
                'SSUjS': aS(0x332),
                'evwTF': aS(0x1de),
                'vEHSe': aS(0x3ca)
            }, c = a0j['resolve'](a0E[aS(0x1d0)], a);
        if (!c['startsWith'](a0E[aS(0x1d0)]))
            throw new Error(aS(0x315));
        const d = a0h[aS(0x3d8)](c);
        if (b[aS(0x26a)](d[aS(0x25e)], b[aS(0x1e0)](0x400, 0x400)))
            throw new Error(b['SSUjS']);
        const f = a0h[aS(0x318)](c), g = this[aS(0x3fe)](f);
        return {
            'status': 'ok',
            'path': a0j[aS(0x458)](a0E['FILE_ROOT'], c),
            'content': g ? a0p[aS(0x200)](f) : f[aS(0x427)](b[aS(0x2fd)]),
            'encoding': g ? aS(0x3f8) : b['vEHSe'],
            'is_binary': g,
            'size': d['size']
        };
    }
    static [a0T(0x3fe)](a) {
        const aT = a0T, b = {
                'ZceoB': function (c, d) {
                    return c === d;
                },
                'mBrlJ': function (c, d) {
                    return c < d;
                }
            };
        if (!a || b['ZceoB'](a[aT(0x1eb)], 0x0))
            return ![];
        for (let c = 0x0; b[aT(0x414)](c, Math[aT(0x40f)](a[aT(0x1eb)], 0x200)); c++) {
            if (b[aT(0x395)](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async ['uploadFile'](a, b, c, d = null, f = null) {
        const aU = a0T, g = {
                'epQja': function (l, m) {
                    return l > m;
                },
                'gkWdo': aU(0x332),
                'fVrgv': function (l, m) {
                    return l !== m;
                },
                'RdacE': function (l, m) {
                    return l(m);
                },
                'lrNMD': aU(0x486),
                'NYRAa': aU(0x369),
                'EFjpe': function (l, m) {
                    return l === m;
                }
            }, h = a0j['resolve'](a0E[aU(0x1d0)], a);
        let j = h;
        b && (j = a0j[aU(0x206)](h, b));
        if (!j[aU(0x2da)](a0E['FILE_ROOT']))
            throw new Error('Access\x20denied:\x20path\x20outside\x20root');
        !a0h[aU(0x49a)](a0j[aU(0x1cd)](j)) && a0h[aU(0x316)](a0j[aU(0x1cd)](j), { 'recursive': !![] });
        const k = a0p['toByteArray'](c);
        if (g[aU(0x44a)](k['length'], a0E[aU(0x263)]))
            throw new Error(g['gkWdo']);
        if (g[aU(0x293)](d, null) && g['fVrgv'](f, null)) {
            const l = Number(d), m = g[aU(0x43c)](Number, f);
            if (Number['isNaN'](l) || Number[aU(0x424)](m))
                throw new Error(g['lrNMD']);
            const n = a0j[aU(0x206)](a0j[aU(0x1cd)](j), g[aU(0x30e)], a0j[aU(0x24a)](j));
            !a0h['existsSync'](n) && a0h[aU(0x316)](n, { 'recursive': !![] });
            const o = a0j[aU(0x206)](n, aU(0x1c8) + l);
            a0h[aU(0x457)](o, k);
            const p = a0h['readdirSync'](n)[aU(0x40a)](s => s['startsWith'](aU(0x1c8))), q = p['length'], r = g[aU(0x326)](q, m);
            if (r) {
                const s = a0h['createWriteStream'](j);
                for (let t = 0x0; t < m; t++) {
                    const u = a0j[aU(0x206)](n, 'chunk_' + t);
                    if (!a0h[aU(0x49a)](u)) {
                        s[aU(0x2c9)]();
                        throw new Error(aU(0x419) + t);
                    }
                    s[aU(0x394)](a0h[aU(0x318)](u));
                }
                s[aU(0x3e0)]();
                for (const v of a0h[aU(0x381)](n)) {
                    a0h['unlinkSync'](a0j['join'](n, v));
                }
                a0h[aU(0x1ce)](n, { 'recursive': !![] });
            }
            return {
                'status': 'ok',
                'path': a0j[aU(0x458)](a0E[aU(0x1d0)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0h[aU(0x457)](j, k), {
            'status': 'ok',
            'path': a0j[aU(0x458)](a0E[aU(0x1d0)], j),
            'received': k[aU(0x1eb)],
            'total': k['length'],
            'chunked': ![]
        };
    }
    static async [a0T(0x479)](a) {
        const aV = a0T, b = {
                'SuqgZ': aV(0x315),
                'vSAZm': aV(0x246)
            }, c = a0j[aV(0x1bc)](a0E[aV(0x1d0)], a);
        if (!c[aV(0x2da)](a0E[aV(0x1d0)]))
            throw new Error(b[aV(0x323)]);
        if (!a0h[aV(0x49a)](c))
            throw new Error(b[aV(0x232)]);
        const d = a0h[aV(0x3d8)](c), f = a0h[aV(0x318)](c), g = a0p['fromByteArray'](f);
        return {
            'path': a0j[aV(0x458)](a0E[aV(0x1d0)], c),
            'content': g,
            'size': d[aV(0x25e)]
        };
    }
    static async [a0T(0x1bd)](a) {
        const aW = a0T, b = {
                'JapLn': aW(0x38c),
                'ulMwD': aW(0x2e5)
            }, c = [];
        for (const d of a) {
            const f = a0j['resolve'](a0E[aW(0x1d0)], d);
            if (!f[aW(0x2da)](a0E[aW(0x1d0)])) {
                c[aW(0x344)]({
                    'path': d,
                    'status': aW(0x1ef)
                });
                continue;
            }
            try {
                if (a0h[aW(0x49a)](f)) {
                    const g = a0h['statSync'](f);
                    g[aW(0x298)]() ? a0h[aW(0x1ce)](f, { 'recursive': !![] }) : a0h[aW(0x448)](f), c[aW(0x344)]({
                        'path': d,
                        'status': aW(0x456)
                    });
                } else
                    c['push']({
                        'path': d,
                        'status': b[aW(0x408)]
                    });
            } catch (h) {
                c[aW(0x344)]({
                    'path': d,
                    'status': b[aW(0x1d8)],
                    'message': h[aW(0x46f)]
                });
            }
        }
        return c;
    }
    static async ['moveFiles'](a) {
        const aX = a0T, b = {
                'bDUjm': 'access_denied',
                'pHTun': aX(0x2e5)
            }, c = [];
        for (const [d, f] of Object[aX(0x274)](a)) {
            const g = a0j[aX(0x1bc)](a0E[aX(0x1d0)], d), h = a0j[aX(0x1bc)](a0E['FILE_ROOT'], f);
            if (!g[aX(0x2da)](a0E[aX(0x1d0)]) || !h[aX(0x2da)](a0E[aX(0x1d0)])) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b[aX(0x35c)]
                });
                continue;
            }
            try {
                const i = a0j[aX(0x1cd)](h);
                !a0h['existsSync'](i) && a0h[aX(0x316)](i, { 'recursive': !![] }), a0h[aX(0x3dc)](g, h), c[aX(0x344)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b[aX(0x2d4)],
                    'message': j['message']
                });
            }
        }
        return c;
    }
    static async [a0T(0x280)](a) {
        const aY = a0T, b = {
                'gBpYI': function (d, f, g) {
                    return d(f, g);
                },
                'SgmMt': aY(0x1ef),
                'jYXJW': aY(0x38c),
                'xdbZj': function (d, f, g) {
                    return d(f, g);
                },
                'Yjtig': aY(0x2e5)
            }, c = [];
        for (const [d, f] of Object[aY(0x274)](a)) {
            const g = a0j[aY(0x1bc)](a0E[aY(0x1d0)], d), h = a0j[aY(0x1bc)](a0E[aY(0x1d0)], f);
            if (!g[aY(0x2da)](a0E[aY(0x1d0)]) || !h['startsWith'](a0E['FILE_ROOT'])) {
                c[aY(0x344)]({
                    'from': d,
                    'to': f,
                    'status': b['SgmMt']
                });
                continue;
            }
            try {
                if (!a0h[aY(0x49a)](g)) {
                    c[aY(0x344)]({
                        'from': d,
                        'to': f,
                        'status': b[aY(0x236)]
                    });
                    continue;
                }
                const i = a0j[aY(0x1cd)](h);
                !a0h[aY(0x49a)](i) && a0h[aY(0x316)](i, { 'recursive': !![] });
                const j = a0h[aY(0x3d8)](g);
                if (j[aY(0x298)]()) {
                    if (a0h[aY(0x308)])
                        a0h['cpSync'](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const aZ = aY;
                            if (a0h['statSync'](l)[aZ(0x298)]()) {
                                if (!a0h['existsSync'](m))
                                    a0h[aZ(0x316)](m, { 'recursive': !![] });
                                for (const n of a0h[aZ(0x381)](l)) {
                                    b[aZ(0x473)](k, a0j[aZ(0x206)](l, n), a0j[aZ(0x206)](m, n));
                                }
                            } else
                                a0h[aZ(0x430)](l, m);
                        };
                        b['xdbZj'](k, g, h);
                    }
                } else
                    a0h['copyFileSync'](g, h);
                c['push']({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[aY(0x344)]({
                    'from': d,
                    'to': f,
                    'status': b[aY(0x39e)],
                    'message': l[aY(0x46f)]
                });
            }
        }
        return c;
    }
    static async [a0T(0x35a)](a) {
        const b0 = a0T, b = { 'IoShh': b0(0x315) }, c = a0j[b0(0x1bc)](a0E[b0(0x1d0)], a);
        if (!c[b0(0x2da)](a0E[b0(0x1d0)]))
            throw new Error(b[b0(0x343)]);
        return a0h['mkdirSync'](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0j[b0(0x458)](a0E[b0(0x1d0)], c)
        };
    }
}
class a0K {
    static [a0T(0x489)] = new Map();
    static ['_appendLog'](a, b) {
        const b1 = a0T, c = {
                'rFNtd': function (d, f) {
                    return d - f;
                }
            };
        a['push'](b), a[b1(0x1eb)] > a0E[b1(0x3de)] && a[b1(0x3ff)](0x0, c[b1(0x37b)](a[b1(0x1eb)], a0E[b1(0x3de)]));
    }
    static [a0T(0x2c7)](a, b, c, d, f = null) {
        const b2 = a0T, g = new Date()[b2(0x2b4)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + b2(0x3d7) + a + '\x20----\x20exitcode=' + c + '\x0a' + (b?.[b2(0x1e2)]() || '')
        };
    }
    static [a0T(0x423)]() {
        return {
            'status': 'ok',
            'count': a0E['onetasks']['length'],
            'tasks': a0E['onetasks']
        };
    }
    static async ['setOnetimeTasks'](a) {
        const b3 = a0T, b = {
                'yJEnx': b3(0x228),
                'BHDOu': function (d, f) {
                    return d === f;
                },
                'oaqyr': 'error'
            };
        a0E[b3(0x41a)] = a || [], a0E['InitTask'] = !![];
        const c = [];
        for (let d = 0x0; d < a0E[b3(0x41a)][b3(0x1eb)]; d++) {
            const f = a0E[b3(0x41a)][d], g = await a0I[b3(0x3d0)](f), h = this['_formatLogEntry'](f, g[b3(0x41c)], g[b3(0x4a4)], b[b3(0x3e3)]);
            this['_appendLog'](a0E[b3(0x340)], h), c[b3(0x344)]({
                'index': d,
                'cmd': f,
                'exitcode': g['exitcode'],
                'output': g[b3(0x41c)],
                'status': b['BHDOu'](g[b3(0x4a4)], 0x0) ? 'ok' : b[b3(0x2ce)]
            });
        }
        return a0E[b3(0x41b)] = ![], {
            'status': 'ok',
            'count': a0E[b3(0x41a)]['length'],
            'tasks': a0E[b3(0x41a)],
            'executed': c
        };
    }
    static [a0T(0x467)]() {
        const b4 = a0T;
        return {
            'status': 'ok',
            'count': Object[b4(0x23a)](a0E[b4(0x3f1)])[b4(0x1eb)],
            'tasks': a0E[b4(0x3f1)]
        };
    }
    static [a0T(0x2b3)](a) {
        const b5 = a0T, b = {
                'errfC': function (d, f) {
                    return d === f;
                },
                'zpCbP': 'function',
                'ycJTA': b5(0x47d),
                'TsNBy': function (d, f) {
                    return d || f;
                },
                'CyQMM': function (d, f) {
                    return d > f;
                },
                'MdDXH': b5(0x2e5),
                'GPUmJ': function (d, f) {
                    return d - f;
                },
                'DWubM': function (d, f) {
                    return d || f;
                }
            };
        this[b5(0x489)]['forEach'](d => {
            const b6 = b5;
            b[b6(0x386)](typeof d[b6(0x3b9)], b['zpCbP']) && d[b6(0x3b9)](), b[b6(0x386)](typeof d['destroy'], b[b6(0x306)]) && d[b6(0x351)]();
        }), this[b5(0x489)][b5(0x21b)]();
        const c = [];
        for (const d of Object['keys'](b[b5(0x3b2)](a, {}))) {
            !a0m[b5(0x33f)](d) && c['push'](d);
        }
        if (b['CyQMM'](c[b5(0x1eb)], 0x0))
            return {
                'status': b[b5(0x1d6)],
                'message': b5(0x496) + c[b5(0x206)](',\x20'),
                'valid_count': b[b5(0x365)](Object['keys'](b[b5(0x3b2)](a, {}))['length'], c[b5(0x1eb)])
            };
        a0E[b5(0x3f1)] = b[b5(0x483)](a, {});
        for (const [f, g] of Object[b5(0x274)](a0E[b5(0x3f1)])) {
            const h = a0m[b5(0x1fd)](f, async () => {
                const b7 = b5, i = await a0I[b7(0x3d0)](g), j = this[b7(0x2c7)](g, i[b7(0x41c)], i[b7(0x4a4)], b[b7(0x2d1)], f);
                this[b7(0x22b)](a0E[b7(0x3d9)], j);
            });
            this[b5(0x489)][b5(0x45b)](f, h);
        }
        return a0E[b5(0x1c9)] = b[b5(0x21a)](Object[b5(0x23a)](a0E[b5(0x3f1)])[b5(0x1eb)], 0x0), {
            'status': 'ok',
            'count': Object[b5(0x23a)](a0E['crontasks'])[b5(0x1eb)],
            'tasks': a0E['crontasks']
        };
    }
    static [a0T(0x2d8)]() {
        const b8 = a0T;
        return {
            'onetime': {
                'pending': a0E[b8(0x41b)],
                'count': a0E['onetasks'][b8(0x1eb)]
            },
            'cron': {
                'active': a0E['cronloop'],
                'count': Object[b8(0x23a)](a0E[b8(0x3f1)])[b8(0x1eb)],
                'check_interval': a0E[b8(0x481)]
            }
        };
    }
    static [a0T(0x2dd)](a = 0x32) {
        const b9 = a0T, b = a0E[b9(0x340)][b9(0x44f)](-a);
        return {
            'status': 'ok',
            'count': b['length'],
            'logs': b
        };
    }
    static ['getCronLogs'](a = 0x32) {
        const ba = a0T, b = a0E['crontasks_log']['slice'](-a);
        return {
            'status': 'ok',
            'count': b[ba(0x1eb)],
            'logs': b
        };
    }
    static [a0T(0x31f)]() {
        const bb = a0T, a = { 'Mgbjt': bb(0x228) }, b = a0E[bb(0x340)]['length'];
        return a0E[bb(0x340)] = [], {
            'status': 'ok',
            'cleared': a[bb(0x358)]
        };
    }
    static ['clearCronLogs']() {
        const bc = a0T, a = { 'JuIKu': bc(0x47d) }, b = a0E[bc(0x3d9)][bc(0x1eb)];
        return a0E[bc(0x3d9)] = [], {
            'status': 'ok',
            'cleared': a[bc(0x267)]
        };
    }
    static [a0T(0x32b)]() {
        const bd = a0T, a = {
                'IePYe': function (g, h) {
                    return g - h;
                },
                'VmqPj': function (g, h) {
                    return g - h;
                }
            }, b = a0E[bd(0x340)][bd(0x40a)](g => g[bd(0x4a4)] === 0x0)['length'], c = a[bd(0x4af)](a0E[bd(0x340)][bd(0x1eb)], b), d = a0E['crontasks_log'][bd(0x40a)](g => g[bd(0x4a4)] === 0x0)['length'], f = a['VmqPj'](a0E[bd(0x3d9)][bd(0x1eb)], d);
        return {
            'onetime': {
                'total_logged': a0E[bd(0x340)][bd(0x1eb)],
                'max_capacity': a0E['MAX_TASK_LOG_SIZE'],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0E[bd(0x3d9)]['length'],
                'max_capacity': a0E[bd(0x3de)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async [a0T(0x312)]() {
        const be = a0T, a = { 'OJgOC': be(0x228) }, b = [];
        for (let c = 0x0; c < a0E[be(0x41a)][be(0x1eb)]; c++) {
            const d = a0E[be(0x41a)][c], f = await a0I[be(0x3d0)](d), g = this[be(0x2c7)](d, f[be(0x41c)], f[be(0x4a4)], a['OJgOC']);
            this['_appendLog'](a0E[be(0x340)], g), b[be(0x344)]({
                'cmd': d,
                'exitcode': f[be(0x4a4)],
                'output': f['result'],
                'timeout': f['timeout']
            });
        }
        return a0E['InitTask'] = ![], {
            'status': 'ok',
            'executed': b[be(0x1eb)],
            'results': b
        };
    }
}
let a0L = null, a0M = null;
const a0N = new Promise((a, b) => {
    const bf = a0T, c = {
            'tAbAL': '[WARN]\x20Noise\x20WASM\x20module\x20failed\x20to\x20load:',
            'EIFOs': function (d) {
                return d();
            },
            'oHtLN': function (d) {
                return d();
            },
            'uSwVb': bf(0x3cd)
        };
    try {
        a0r(function (d) {
            const bg = bf;
            if (!d) {
                a0M = new Error(bg(0x20e)), a0u['warn'](c['tAbAL'], a0M[bg(0x46f)]), c['EIFOs'](a);
                return;
            }
            a0L = d, a0u[bg(0x43b)]('Noise\x20WASM\x20module\x20loaded\x20successfully'), c[bg(0x23b)](a);
        });
    } catch (d) {
        a0M = d, a0u['warn'](c[bf(0x484)], d['message']), c[bf(0x23b)](a);
    }
});
function a0a() {
    const c6 = [
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'y2HTB2rtEw5J',
        'Dg90ywW',
        'CMvHzgrPCLn5BMm',
        'zNjLzq',
        'r29hve4',
        'zMLUywW',
        'yMfZzty0DxjS',
        'zxjYzKm',
        'BxvnEgW',
        'vgLsDxu',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'C3bSAxq',
        'mtf8mtr8oxWZFdf8nNWYFde1FdH8nhWWFdeWFdeYFdeZFdv8nW',
        'BM90x2zVDw5K',
        'tuPSDuy',
        'mhW3Fdz8nhWXFdj8m3W1',
        'runeu0fFufvcs0vz',
        'sgfUzhnOywTLu3rHDgu',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'C3rHCNrtzxnZAw9U',
        'zgLZAW',
        'D3jPDgu',
        'wMnLB0i',
        'BgLTAxq',
        'A2vYBMvS',
        'zvbkwge',
        'CMvHzhLtDgf0zq',
        'v1bJv0G',
        'swrnC04',
        'zMLSzq',
        'vw1nDLi',
        'wwP0AwC',
        'wc1uAw1LC3rHBxa',
        'l2fWAs9MAwXLl2XPC3q',
        'CMvZAxPL',
        'nxWXFdn8nhWYFda',
        'CgfKu3rHCNq',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'wK9drLG',
        'DMvYAwz5',
        'y29ovLO',
        'Dg9cExrLqxjYyxK',
        'DwjpB0y',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'Dg90ywXozxr3B3jRrg93BG',
        'CMvXDwvZDeLK',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'zMLSzw5HBwu',
        'DwjiChC',
        'tfHd',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'vhnoqNK',
        't0ffExu',
        'BMTjweG',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'q09ovfjptf9qvujmsunFs0vz',
        'BNvTyMvY',
        'Ec1Hz2vUDc12zxjZAw9U',
        'C3rVCa',
        'ue9sva',
        'ANnVBG',
        'sKfewMq',
        'revcvuC',
        'AxnwywXPzeLqDJy',
        'l2fWAs9IyxnLAw5MBW',
        'swT5AMi',
        'AKH1BvG',
        'A2vYBMvSx3zLCNnPB24',
        'DNjXuNm',
        'D0T3s3C',
        'DxjSzw5JB2rLza',
        'AxvAsfy',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'BgLZDgvU',
        'tK9ju0vFuK9mrv9jtKLusufut1i',
        'DxrMltG',
        'l2fWAs9MAwXLl25LDW',
        'rxPdAhG',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'zxHLy3v0ywjSzq',
        'tMvwwfq',
        'zxHLy3v0zq',
        'zw5JCNLWDa',
        'y29UBMvJDgLVBNm',
        'l2jPBI9HC2G',
        'Ag9TzwrPCG',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'zMv0y2Hjua',
        'ic0Tls0G',
        'C3rHDfn5BMm',
        'y3jVBNrHC2TZx2XVzW',
        'DMvYAwz5u2LNBMf0DxjL',
        '6i635y+wieLqiowCSowDGowKSEI0PtOG',
        'CMvUyw1Lu3LUyW',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'tufyx1rbu0TFte9hx1njwKu',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'zw5K',
        'z2vUzxjHDgvtAw5NBgu',
        'u2nzBLq',
        'EuPfBNG',
        'C3DHChvZzwq',
        'C2HPzNq',
        'zxHWB3j0',
        'vLDPsKG',
        'vLDxrLO',
        'y291BNq',
        'zgvSzxrL',
        'vKvLBLi',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'yvDtzgO',
        'qwL0txu',
        'A2POquS',
        's3vIzxjUzxrLCW',
        'y3jVBNrHC2TZ',
        'qKTVA3q',
        'Ec1Kzwj1zW',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'su1KqwK',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'zgLYzwn0B3j5',
        'yMfZzty0',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'zg1mze8',
        'Dw5RBM93BG',
        'DwrW',
        'Aw5JBhvKzxm',
        'x2LZqMLUyxj5',
        'C3bSAwnL',
        'iowKSEI0PtOG',
        'y3vtwwu',
        'tM9Uzq',
        'BhHJ',
        'CLnOqK8',
        'x2DLDenVBMzPz1zHBhvL',
        'BwfW',
        'zNzHwvC',
        'sMfWtg4',
        'y29UDhjVBa',
        'zMLSDgvY',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        'Bw92zv9Tyxa',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'BMv0D29YA1n0yxrZ',
        'BwLU',
        'mtiWnZCYEMjeBgPc',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'BxnNuMvZB2X2zxjZ',
        'Dhj1zq',
        'BujYBeO',
        'zNDhweu',
        'zwjKB04',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'zNjVBq',
        'twLZC2LUzYbJAhvUAYa',
        'B25LDgfZA3m',
        'sw5PDfrHC2S',
        'CMvZDwX0',
        'Cgf0Adi',
        'l2fWAs90yxnRl29UzxrPBwu',
        'CgHHC2u',
        'rvjst1i',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'l2rLDI8',
        'z2v0t25LDgLTzvrHC2TZ',
        'Axnoyu4',
        'y29UDgvUDc10ExbL',
        'Aw50zxjUywW',
        'Dg9tDhjPBMC',
        'tK9ju0vFqunusu9ox1Dssvrfx01fu1nbr0u',
        'uhP6s0G',
        'z2v0uhvIBgLJsxbwna',
        'Cgf0Aa',
        'EfLkBfe',
        'zMfTAwX5',
        'ru9Pwei',
        'AgfvBNG',
        'y29WEuzPBgvtEw5J',
        'Axb2nG',
        '6k+35Rgc6lAf5PE2',
        'ChjVDg9JB2W',
        'BhvVru8',
        'C2v0vgLTzw91Da',
        'AuLpwee',
        'r29LwMG',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'y21KihjLCxvPCMvK',
        'Evr4u3O',
        'zgvIDwC',
        'uMrHy0u',
        'Dgv4Dc9WBgfPBG',
        'DMfXwNq',
        't1busu9ouW',
        'tK9ju0vFqunusu9ox1nqteLu',
        'svrHBxi',
        'zMXMvLi',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'DgvYvhG',
        'y2HPBgrFChjVy2vZCW',
        'y3b1',
        'DhbbzMm',
        'Dw5SAw5Ru3LUyW',
        'r2zIBui',
        'zxbrAMe',
        'zw5JCNLWDfjLC3bVBNnL',
        'z2v0q3jVBKXVz3m',
        'rgnuCeS',
        'Aw5WDxq',
        'C2XPy2u',
        'AgvHzgvYCW',
        'ChjPDMf0zv9InJq',
        'zM9YrwfJAa',
        'D1rjv1O',
        'quDftLrFufjjvKfurv9lrvK',
        'Ehzjtee',
        'zgvSzxrLza',
        'D3jPDgvgAwXLu3LUyW',
        'CMvSyxrPDMu',
        'A3vIzwXLDa',
        'sMjuvvq',
        'C2v0',
        'zxHWCMvZCY13CW',
        'mZaW',
        'vMDXy0K',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'AgvHzgvY',
        'wNPyDwi',
        'Ec10Aw1LC3rHBxa',
        'ywnJzxnZu3LUyW',
        'AxnFyxv0AgvUDgLJyxrLza',
        'wLLbvKq',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'z2v0q3jVBLrHC2TZ',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'thPpEKC',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'mtaW',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'Axb2na',
        'l2fWAs9ZDgf0Dxm',
        'BwvZC2fNzq',
        'AgvHCNrIzwf0',
        'CMvKDwnL',
        'mhW0Fdv8nNWXFdn8mG',
        'z0jWwuK',
        'twLZC2LUzYbHDxrOigHLywrLCNm',
        'EKPywxq',
        'ndCZnwXQv2vqqG',
        't1bftG',
        'zwnPzxnQCW',
        'zg93BMXVywrgAwXL',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'ANDR',
        'verRCMe',
        'y3jVBG',
        'r1jHC1C',
        'Dw5KzwzPBMvK',
        'B25fEgL0',
        'q1jptL9dsevds19jtLrfuLzbta',
        'svb2nG',
        'rfD1yK0',
        'Dvn3vMi',
        'vxfhshe',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'mtCWodKYowrXD3jHuW',
        'rvvRsKO',
        'y3jVBKPVyNm',
        'g1SZmw1Brvjst1jDg1SWBsa',
        '6k6/6zEUia',
        'ug9KBwfU',
        'r2v0qwn0Aw9U',
        'nxW0Fdj8m3WXFda',
        'C3DHCa',
        'CxrwtMu',
        'zgf0yq',
        'tfDisM0',
        'v2HZt2C',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'sw5PDgLHBgL6zq',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'y29UDgfPBMvYza',
        'v3jPDgvnzxnZywDL',
        'Ec1UB25Jzq',
        'zxHPC3rZu3LUyW',
        'q2XLyw5SEsbJBg9Zzwq',
        'sgH5Efe',
        'Bg9N',
        'tMzysfC',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'te9hx0XfvKvm',
        'uMvHze1LC3nHz2u',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'zxHPDgnVzgu',
        'CMvSzwfZzq',
        'rKjQA3a',
        'sNvcDMi',
        'zMfSC2u',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'vu9NA28',
        'uwPLC3y',
        'zgfQyNK',
        'swvqwwu',
        'CMfUzg9TqNL0zxm',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'y2fSBa',
        'zMLSzxm',
        'CLPbseO',
        'yxjJAa',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        's3jjvvi',
        'ywvZlti1nI1Ny20',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'D01LAuS',
        'DgLTzw91Da',
        'uMjvrfK',
        'CMvZB2X2zq',
        'zgvSzxrLrMLSzxm',
        'zNjVBuj5DgvZ',
        'ugHbqK8',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'zwPAy1K',
        'ruXgzvu',
        'zxHPDa',
        'Dg9mB3DLCKnHC2u',
        'q29UDgvUDc1uExbL',
        'tKnwBNO',
        'y2H1BMTF',
        'y3jVBMXVB3a',
        'BMjJvu4',
        'CefUrxu',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'zgLYBMfTzq',
        'CM1KAxjtEw5J',
        'l2jPBI9ZAa',
        'rKLmrv9st09u',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'z2v0',
        'Chv0',
        'CM1mt3i',
        'Bw92zuzPBgvZ',
        'twreweG',
        'wc1bDxrOlvrVA2vU',
        'DwXnD0q',
        'z2vUzxjHDgvqywLY',
        'Chr5uhjVy2vZCW',
        'A3f5zhe',
        'ywjZ',
        'AxnwywXPzeLqDJq',
        'DxrMoa',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'v25ptgK',
        'B3vLquC',
        'DhjPBq',
        'yxbWBhK',
        'teforW',
        'r1LSD2e',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'zwnPzxnqDwjRzxK',
        'x3bHCNnLtw9Kzq',
        'BgvUz3rO',
        'l3bVzhmV',
        'BxrPBwu',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'ywnJzxnZx2rLBMLLza',
        'rK9mte9xx1nztuXjtKTt',
        'BunAteC',
        'D3jPDgfIBgu',
        't3bNC3i',
        'ChjVBwLZzxm',
        'CM93CW',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'ywfZBhy',
        'x3nWBgL0qw5KrMLUAxnO',
        'vuDRCxO',
        'Ahr0Chm',
        'BxnNuxvLDwu',
        'C2nOzwr1Bgu',
        'DgnW',
        'mtG5mtq3nNbNqLfWAq',
        'zNjVBuj5DgvbCNjHEq',
        'y3DK',
        'z3b1x25HBwu',
        'C3rKzxjY',
        'AKfeu2y',
        'mc4WlJaUma',
        'AM9PBG',
        'u0vtu0LptL9lrvK',
        'A2LSBa',
        'z05MBxe',
        'yM9KEq',
        'ntbTyG',
        'ywXS',
        'u3bSAxq',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'DKDtuhi',
        'y2LWAgvY',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'DxnLtM9PC2u',
        'q0HPr2q',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'CMvXDwvZDf9Pza',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'rw5JCNLWDfDPDgHbza',
        'Bw9Kzq',
        'BKLwrxy',
        'q3Lrtu0',
        'y2XLyxi',
        'x3jLy2vPDMvxC0j5DgvZ',
        'qwDLBNq',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'mta4t2joy2fR',
        'x2DLDenVBM5Ly3rPB25Z',
        'C3rYAw5NAwz5',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'C3rHDhvZ',
        'x2nOzwnRqwnJzxnZ',
        'qNHWDKO',
        'veLnrvnuqu1qx1DjtKrpvW',
        'BLPey3K',
        'B25LDgLTzq',
        'tevwruXt',
        'AKnRueu',
        'x2fWCgvUzeXVzW',
        's2jjAvG',
        'y21K',
        'y3vYCMvUDeXLDMvS',
        'z1LgrKy',
        'B1Lpwvi',
        'C3DHChrVDgfS',
        'DLnbwM0',
        'Bg9JywXqCML2qJy0',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'y1zKzKu',
        'ALLysLC',
        'BwfPBG',
        'CM91BMq',
        'y29Kzq',
        'A2v5CW',
        'B0H0te4',
        'mc4XlJKTANm',
        'rgvJCNLWDfDPDgHbza',
        'Euv5t04',
        'Cg9ZDa',
        'AxnjBML0Awf0B3i',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'oxWYFdD8mxWZFdeWFdb8nNW1Fdr8oa',
        'A0LOzhy',
        'DgfN',
        'rMLSzsbUB3qGzM91BMq',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        'ywXSB2m',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'yMfZzw5HBwu',
        'A09gq1K',
        'C2v0t25LDgLTzvrHC2TZ',
        'BM9Uy2u',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'D2vIC29JA2v0',
        't2DXu24',
        'l2fWAs9MAwXL',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'ruzJu2S',
        'B3DUzxi',
        'A2LSBgvK',
        'Cgf0Ahm',
        'l2fWAs90yxnRl2nYB24',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'z2v0tg9JywXjuhy0',
        'C2vUzenPCgHLCG',
        're14wKm',
        'C2L6zq',
        'C2vZC2LVBL9RzxK',
        'zw5JB2rPBMC',
        'DxbNCMfKzq',
        'CMvJDxjZAxzL',
        'tufyx1vqte9brf9tsvPf',
        'zgLZDhjV',
        'sfHABLG',
        'DhHFyNL0zxm',
        'sNvjs3u',
        'CNHFyNL0zxm',
        'CgvYBwLZC2LVBNm',
        'BhPer1y',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'BwvYz2u',
        'AKTTDuG',
        'Dg1WzNm',
        'y3zryxK',
        'ChjVy2vZCW',
        'yxbWBgLJyxrPB24VANnVBG',
        'y2XLyxjdCM9Utg9NCW',
        'yxfhEe0',
        'zw50CMLLCW',
        'vgXNthO',
        'thb4vKS',
        'zw52',
        'r29Mzgu',
        'zLnxueC',
        'CMvWBgfJzq',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lgf1DgHVCML6yxrPB24SihGTBM9Uy2uSihGTDgLTzxn0yw1Wlcb4lwf1DgGTDg9Rzw4SihGTywvZlwvUy3j5ChrLzcWGEc1Kzwj1zW',
        'zNntAxPL',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'Bg9Hza',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdOR6BNU4BPLjNOR686ia',
        'y29WEuzPBgvZ',
        'CuD1zuW',
        'zgLZA190B3rHBa',
        'AgfUzhnOywTL',
        'C3rYAw5N',
        'DgvYBwLUywW',
        'yvn0q0W',
        'BM9PC2uTyY53yxnT',
        'D0XHtNG',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'werSwwG',
        'u01st3e',
        'AufgBu0',
        'quDftLrFvKvsu0LptG',
        'qvvuwKu',
        'CgLK',
        'y2f0y2G',
        'zLzYz3y',
        'Bwf4',
        'uNrPBwvVDxq',
        'v0DNrKK',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'AxneAxjLy3rVCNK',
        'y29SCW',
        'A0n3v0C',
        'Aw5PDa',
        'CvDWy2K',
        'u0Lhsu5u',
        'vgvor08',
        'yLPuy1m',
        'C2LNBMfS',
        'Dxb0Aw1L',
        'v1HsEe4',
        'C01Kre0',
        'ug1zq3a',
        'g1SZm21Bv0fstL0BwZbTia',
        'uwDev1a',
        'q29UDgvUDc1mzw5NDgG',
        'u0HbmJu2',
        'yxzNtg9Hza',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'ugf0AcbUB3qGzM91BMq',
        'y29UDgvUDa',
        'v011s24',
        'odaWma',
        'g1SZnM1Bsu5gt10BwZbTia',
        'u09AqLa',
        'yur3qMK',
        'runjrvnFufvcs0vz',
        'C2v0q3jVBLrHC2TZ',
        'Dg9ju09tDhjPBMC',
        'BhjvuKq',
        'l2fWAs9MAwXLl2nHDa',
        'A3vIzxbVzhm',
        'tgz5vKq',
        'mJu0mtC5mLvKt3ncuW',
        'DvjxrNO',
        'se9tva',
        'zMu4mdO',
        'y29UDgfPBMvYpwX4yW',
        'ywDLBNq',
        'z0vZv3e',
        'y29UC3rHBNrZ',
        'vefts19usu1ft1vu',
        'rxvtzKC',
        'DujhDvy',
        'mte4nZuZmevcqLb3Dq',
        'DxnL',
        'swDYEwy',
        'x2zVCM1HDeXVz0vUDhj5',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'y2XVC2u',
        'B2jQzwn0',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'suf4EeC',
        'Dvjmqw0',
        'B2fXExi',
        'BeXdy2e',
        'DxnLza',
        'Ewnkvee',
        'zNvUy3rPB24',
        'vxvHvwi',
        'CeHuDw4',
        'Bw9Kzv9Vy3rHBa',
        'ufjptvbux0nptu1btKq',
        'g1S5mg1BrevcvuDDg1SWBsa',
        'z2v0vgfZA1n0yxr1CW',
        'yufhuum',
        'C3rHCNrZv2L0Aa',
        'BM93',
        'w+E7IoERR+s8MUIVNsa',
        'z2v0t25LDgLTzuXVz3m',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'BgrXree',
        'y2XLyw51Ca',
        'DhLWzq',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'DxDsz3u',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdMOlJLV4pNU4JNQ6/KVP3OTzyGkhb0EsKG5yQG6l295AsX6lsL77Ym56Il5BQp57Ui5Q2I77Yb',
        'zxjYB3i',
        'BM9Kzs1JCM9U',
        'q29UDhjVBgXLCG',
        '8j+sPsbBuMvZCg9UC2uGrw5JCNLWDf06ia',
        'BMvwCxe',
        'DNHJDgm',
        'Ec1LBMnYExb0zwq',
        'D0rpsNe',
        'mJfovKHpuw4',
        'mhWZFdD8ohW2FdL8mxW0Fdj8nq',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'Ahr0Chm6lY9PCgvJAg8UBMv0l3bSywLU',
        'mNW1Fdz8n3WWFdf8m3W0',
        'BwTgt3K',
        'zwnKC2fqDwjRzxK',
        'ANbTC1i',
        'twjQv1a',
        'zuTWC3C',
        's1zn',
        'Bwv0Ag9K',
        'rg9JA2vY',
        'y3j5ChrV',
        'AxnbCNjHEq',
        'uc0Ynty',
        'zxz3vey',
        'BwvT',
        'AfjOB0W',
        'u2zfBwq',
        'uMHdDNi',
        'C1nfALK',
        'v1nzsw0',
        'uL9psW',
        'C3rHDhvZq29Kzq',
        'ENbdyLa',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'y3btEw5J',
        'B3njBMzV',
        'Aw5MBW',
        'ChLhC3e',
        'ywrKCMvZCW',
        'CMvHzezPBgu',
        'tLLsqwe',
        'tvrgr2O',
        'yLn3Bhe',
        'z2v0tg9JywXjuhy2',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'wf9psW',
        'EeLrCeG',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'BwTKAxjtEw5J',
        'Ce5TsxG',
        'CMvHzezPBgvtEw5J',
        'BNPLB0y',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'BLvxq3G',
        'CMfT',
        'l2fWAs93CY8Q',
        'CgfYC2u',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'wKHyAgW',
        'CMvJDKnPCgHLCG',
        'DvvsBNe',
        'u3vXz1O',
        'x3j1BLrLCM1PBMfS',
        'mta0odu3nJaW',
        'ruzQCgu',
        'EejnD2K',
        'ywP2wvq',
        'mtC0ndKYnvn3B2LOAW',
        'v19psW',
        'z2v0tg9Nu3vTBwfYEq',
        'sMTlt00',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'seL3q2q',
        'BgfZDe5LDhDVCMTuAw1L',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'zMjiuve',
        'rMLSzsb0B28GBgfYz2u',
        'B3Ldv0O',
        'DxbKyxrL',
        'CxvLCNK',
        'zgvJCNLWDa',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'z0vSA2q',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'tLvksMC',
        'yxzQrva',
        'uLzrqva',
        'tgnkvw8',
        'y3vYCMvUDeXVywq',
        'DMfSAwrHDgu',
        'B25LDgLTzxrHC2TZx2XVzW',
        'y2LWAgvYDgv4Da',
        'vevstq',
        'sw9tAgG',
        'ChvZAa',
        'v0fstG',
        'C2vUza',
        'q3frDLq',
        'thvAsMS',
        'AgDSDxa',
        'z2v0uhvIBgLJsxbwnG',
        'ChvIBgLJx2i2na',
        'Afv5r2u',
        'CM5fueK',
        'l3bYB2mVms9LBNzPCM9U',
        'ug1YwK0',
        'z2v0qMfZAwnjBMzV',
        'zgvZDhjVEq',
        'yNL0zuXLBMD0Aa',
        'C2v0qxv0AfrHzW',
        'x2zVCM1HDe1Vzgu',
        'su5gtW',
        'vhLns2e',
        'C29Tzq',
        'twDIANq',
        'BgLZDezPBgvZ',
        'y3jLyxrLrgLYzwn0B3j5',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'yKrvAM0',
        'qMvxB0S',
        'DgvZDa',
        'Chfuu3K',
        'z2v0uMvHBhrPBwvjBMzV',
        'l3bYB2mVms9Jz3jVDxa',
        'BMXRDvm',
        'rLbctfi',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'r1bvBuO',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'lNvWBg9Hzf9JAhvUA3m',
        'Ec1MAwXLlxnPEMu',
        'CwzKuwi',
        'y29Yzxm',
        'lY5KB2nRzxjLBNy',
        'zMXVB3i',
        'zgvJCNLWDerHDge',
        'l2fWAs9MAwXLl2nW',
        'ywn0AxzL',
        'DePrBfO',
        'CMvHzgfIBgu',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'sNverfa',
        'zg9JA2vY',
        'Edi1nte5',
        'zgTgqNi',
        'CKzoDgq',
        'BMfTzq',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L'
    ];
    a0a = function () {
        return c6;
    };
    return a0a();
}
process['on'](a0T(0x37e), (a, b) => {
    const bh = a0T;
    a0u[bh(0x2e5)](bh(0x25a), a);
}), process['on']('uncaughtException', a => {
    const bi = a0T, b = { 'MTFGj': 'Uncaught\x20Exception:' };
    a0u['error'](b[bi(0x30f)], a), process[bi(0x1c4)](0x1);
});
class a0O {
    constructor(a, b, c) {
        const bj = a0T, d = { 'PJQIL': bj(0x472) }, f = d['PJQIL']['split']('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this['isInitiator'] = a;
                continue;
            case '1':
                this['hs'] = null;
                continue;
            case '2':
                this['recvCipher'] = null;
                continue;
            case '3':
                this[bj(0x25c)] = null;
                continue;
            case '4':
                this['localPrivB64'] = b;
                continue;
            case '5':
                this[bj(0x1e7)] = c;
                continue;
            case '6':
                this['handshakeFinished'] = ![];
                continue;
            }
            break;
        }
    }
    async [a0T(0x29b)]() {
        const bk = a0T, a = {
                'RVQAP': 'Noise\x20WASM\x20module\x20not\x20available',
                'luoEO': bk(0x241),
                'uRWFz': bk(0x1f7),
                'nzeoF': bk(0x3f8)
            };
        await a0N;
        if (!a0L)
            throw a0M || new Error(a[bk(0x33c)]);
        const b = a0L, c = this[bk(0x240)] ? b[bk(0x2c0)][bk(0x3c9)] : b[bk(0x2c0)][bk(0x438)];
        this['hs'] = b[bk(0x390)](a[bk(0x434)], c);
        const d = Buffer[bk(0x418)](a[bk(0x2ba)]), f = this['localPrivB64'] ? Buffer[bk(0x418)](this[bk(0x233)], a['nzeoF']) : null, g = this[bk(0x1e7)] ? Buffer[bk(0x418)](this['expectedRemotePubB64'], a[bk(0x319)]) : null;
        this['hs'][bk(0x495)](d, f, g, null);
    }
    [a0T(0x421)](a) {
        const bl = a0T, b = {
                'DcFfO': function (d, f) {
                    return d > f;
                },
                'ajvYT': function (d, f) {
                    return d === f;
                }
            };
        if (this[bl(0x1ee)])
            return Buffer[bl(0x248)](0x0);
        const c = a0L;
        a && b['DcFfO'](a[bl(0x1eb)], 0x0) && this['hs'][bl(0x48d)]() === c['constants']['NOISE_ACTION_READ_MESSAGE'] && this['hs'][bl(0x4a2)](a);
        if (b[bl(0x328)](this['hs'][bl(0x48d)](), c[bl(0x2c0)]['NOISE_ACTION_SPLIT']))
            return this[bl(0x1f9)](), Buffer[bl(0x248)](0x0);
        if (b[bl(0x328)](this['hs'][bl(0x48d)](), c[bl(0x2c0)][bl(0x428)])) {
            const d = this['hs'][bl(0x498)](new Uint8Array(0x0));
            return b[bl(0x328)](this['hs'][bl(0x48d)](), c[bl(0x2c0)][bl(0x440)]) && this[bl(0x1f9)](), Buffer[bl(0x418)](d);
        }
        return Buffer['alloc'](0x0);
    }
    ['_splitAndFinish']() {
        const bm = a0T, a = this['hs'][bm(0x20d)]();
        this[bm(0x25c)] = a[0x0], this[bm(0x321)] = a[0x1], this[bm(0x1ee)] = !![];
        try {
            if (this['hs'])
                this['hs'][bm(0x382)]();
        } catch (b) {
        }
        this['hs'] = null;
    }
    [a0T(0x3d1)](a) {
        const bn = a0T, b = { 'uRLAm': bn(0x32d) };
        if (!this['handshakeFinished'])
            throw new Error(b[bn(0x2cd)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer['from'](this['sendCipher'][bn(0x217)](c, d));
    }
    [a0T(0x336)](a) {
        const bo = a0T, b = { 'HhyxQ': bo(0x3df) };
        if (!this[bo(0x1ee)])
            throw new Error(b[bo(0x49c)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[bo(0x418)](this[bo(0x321)][bo(0x23d)](c, d));
    }
    [a0T(0x382)]() {
        const bp = a0T, a = { 'EuSfG': bp(0x48e) }, b = a[bp(0x2c2)][bp(0x38a)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['hs'] = null;
                continue;
            case '1':
                this[bp(0x321)] = null;
                continue;
            case '2':
                try {
                    if (this['hs'])
                        this['hs']['free']();
                } catch (d) {
                }
                continue;
            case '3':
                this['sendCipher'] = null;
                continue;
            case '4':
                try {
                    if (this[bp(0x321)])
                        this[bp(0x321)][bp(0x382)]();
                } catch (f) {
                }
                continue;
            case '5':
                try {
                    if (this['sendCipher'])
                        this[bp(0x25c)][bp(0x382)]();
                } catch (g) {
                }
                continue;
            }
            break;
        }
    }
}
class a0P {
    constructor() {
        const bq = a0T, a = bq(0x2ee)[bq(0x38a)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[bq(0x1da)] = null;
                continue;
            case '1':
                this[bq(0x412)] = [];
                continue;
            case '2':
                this[bq(0x3b6)] = a0E[bq(0x1c1)][bq(0x409)][bq(0x34b)];
                continue;
            case '3':
                this['websocket'] = null;
                continue;
            case '4':
                this['AGENT_PRIVATE_KEY'] = a0E['NOISE_KEYS_INTERNAL'][bq(0x2be)][bq(0x451)];
                continue;
            case '5':
                this['cipher'] = new a0O(![], this[bq(0x454)], this[bq(0x3b6)]);
                continue;
            case '6':
                this[bq(0x41f)] = bq(0x283);
                continue;
            case '7':
                this[bq(0x3ac)] = null;
                continue;
            case '8':
                this['useNoise'] = !![];
                continue;
            case '9':
                this[bq(0x1fc)] = [];
                continue;
            }
            break;
        }
    }
    async ['cleanup']() {
        const br = a0T, a = {
                'DXcos': function (b, c) {
                    return b === c;
                },
                'pyGsq': br(0x49b)
            };
        this[br(0x3ac)] && a0u[br(0x30a)]('[' + this[br(0x3ac)] + br(0x307));
        if (this['ptyProcess']) {
            try {
                this[br(0x1da)][br(0x208)]();
            } catch (b) {
            }
            this['ptyProcess'] = null;
        }
        if (this[br(0x210)])
            this[br(0x210)][br(0x382)]();
        if (this[br(0x24f)])
            try {
                a['DXcos'](this['websocket'][br(0x399)], this[br(0x24f)][br(0x477)]) && this['websocket'][br(0x2c9)](0x3e8, a[br(0x30b)]);
            } catch (c) {
            } finally {
                this[br(0x24f)] = null;
            }
    }
    [a0T(0x4ab)](a) {
        const bs = a0T, b = {
                'fvaYW': function (c, d) {
                    return c === d;
                },
                'QgDWP': bs(0x283),
                'TeNGO': function (c, d) {
                    return c > d;
                },
                'lrURD': function (c, d) {
                    return c(d);
                },
                'BVDIA': bs(0x285)
            };
        if (b[bs(0x407)](this[bs(0x41f)], b[bs(0x2a6)])) {
            if (b[bs(0x29e)](this[bs(0x412)][bs(0x1eb)], 0x0)) {
                const c = this[bs(0x412)][bs(0x3e5)]();
                b[bs(0x2b5)](c, a);
            } else
                this[bs(0x1fc)][bs(0x344)](a);
        } else
            b[bs(0x407)](this[bs(0x41f)], b['BVDIA']) && this[bs(0x252)](a);
    }
    async [a0T(0x21c)]() {
        const bt = a0T, a = {
                'SOZBP': function (b, c) {
                    return b > c;
                }
            };
        if (a[bt(0x2b0)](this[bt(0x1fc)]['length'], 0x0))
            return this[bt(0x1fc)]['shift']();
        return new Promise(b => {
            const bu = bt;
            this[bu(0x412)]['push'](b);
        });
    }
    async [a0T(0x1af)](a) {
        const bv = a0T, b = {
                'fbHQQ': function (c, d) {
                    return c > d;
                },
                'JbTUT': '三次握手交互后仍未进入\x20Established\x20状态',
                'tpAfc': function (c, d) {
                    return c(d);
                },
                'uwRgu': '✅\x20Noise\x20握手完成，端到端加密通道已建立！',
                'TDkra': bv(0x253)
            };
        a(bv(0x368));
        try {
            await this[bv(0x210)][bv(0x29b)]();
            const c = await this[bv(0x21c)](), d = this['cipher'][bv(0x421)](c);
            d && b[bv(0x331)](d[bv(0x1eb)], 0x0) && this['websocket']['send'](d);
            const f = await this[bv(0x21c)]();
            this[bv(0x210)][bv(0x421)](f);
            if (!this[bv(0x210)][bv(0x1ee)])
                throw new Error(b[bv(0x45a)]);
            b[bv(0x447)](a, b[bv(0x2e3)]);
        } catch (g) {
            b[bv(0x447)](a, bv(0x28b) + g['message']);
            throw new Error(b[bv(0x47c)]);
        }
    }
    [a0T(0x366)]() {
        const bw = a0T, a = {
                'VgqcI': '/bin/bash',
                'WPcWH': bw(0x3d3),
                'voEfS': '/bin/sh'
            }, b = process.env.SHELL;
        if (b && a0h[bw(0x49a)](b))
            return b;
        const c = [
            a[bw(0x45e)],
            '/bin/zsh',
            a[bw(0x39a)],
            bw(0x1cf)
        ];
        for (const d of c) {
            if (a0h['existsSync'](d))
                return d;
        }
        return a['voEfS'];
    }
    async [a0T(0x392)](a, b, c) {
        const bx = a0T, d = {
                'bZTcS': function (g, h) {
                    return g(h);
                },
                'XDlYh': bx(0x40b),
                'qtVNe': bx(0x27d),
                'OgqSn': 'message'
            };
        this[bx(0x24f)] = a, this[bx(0x3ac)] = b;
        const f = g => a0u[bx(0x30a)]('[终端会话\x20' + b + ']\x20' + g);
        this[bx(0x212)] = !c, d[bx(0x29f)](f, this[bx(0x212)] ? d[bx(0x28c)] : d[bx(0x490)]), a['on'](d[bx(0x250)], g => this[bx(0x4ab)](g));
        try {
            this['useNoise'] && await this[bx(0x1af)](f), await this[bx(0x324)](f);
        } catch (g) {
            d[bx(0x29f)](f, bx(0x389) + g[bx(0x46f)]), await this['cleanup']();
        }
    }
    async ['_runTerminal'](a) {
        const by = a0T, b = {
                'FBjkp': by(0x3ca),
                'iuZHV': function (f, g) {
                    return f === g;
                },
                'pNmIx': function (f, g) {
                    return f(g);
                },
                'iIOXA': function (f, g) {
                    return f(g);
                },
                'LpxVK': by(0x1e8),
                'vGSPr': 'xterm-256color',
                'hNNGr': 'C.UTF-8',
                'gEsWq': function (f, g) {
                    return f(g);
                },
                'LWHJm': by(0x3fb),
                'WhsOg': function (f, g) {
                    return f > g;
                },
                'hCWOC': by(0x2c9)
            }, c = this[by(0x366)]();
        a('🐚\x20使用\x20Shell\x20路径:\x20' + c);
        const d = Object['assign']({}, process.env);
        delete d[by(0x2d6)], d[by(0x342)] = b[by(0x20f)];
        if (!d[by(0x1e4)])
            d[by(0x1e4)] = b['hNNGr'];
        try {
            this[by(0x1da)] = a0t['spawn'](c, [], {
                'name': b['vGSPr'],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': process.env.HOME || process[by(0x201)](),
                'env': d
            }), b[by(0x2bf)](a, by(0x1cc) + (this['ptyProcess'][by(0x291)] || b[by(0x492)]) + ')'), this['phase'] = by(0x285);
            while (b[by(0x493)](this[by(0x1fc)][by(0x1eb)], 0x0)) {
                const f = this[by(0x1fc)][by(0x3e5)]();
                this['_processTerminalMessage'](f);
            }
            this[by(0x1da)]['onData'](g => {
                const bz = by;
                try {
                    let h = Buffer[bz(0x418)](g, b[bz(0x4a6)]);
                    this[bz(0x212)] && this[bz(0x210)] && this[bz(0x210)]['handshakeFinished'] && (h = this[bz(0x210)][bz(0x3d1)](h)), b[bz(0x3c6)](this[bz(0x24f)][bz(0x399)], 0x1) && this[bz(0x24f)]['send'](h);
                } catch (i) {
                }
            }), this[by(0x1da)][by(0x480)](({
                exitCode: g,
                signal: h
            }) => {
                const bA = by;
                b[bA(0x317)](a, bA(0x254) + g + ',\x20Signal:\x20' + h + ')'), this[bA(0x2e0)]();
            }), this[by(0x24f)]['on'](b['hCWOC'], () => {
                const bB = by;
                b[bB(0x436)](a, b[bB(0x276)]), this[bB(0x2e0)]();
            });
        } catch (g) {
            a(by(0x364) + g[by(0x46f)]), await this[by(0x2e0)]();
            throw g;
        }
    }
    [a0T(0x252)](a) {
        const bC = a0T, b = {
                'qGueL': bC(0x470),
                'dBeDI': function (c, d) {
                    return c === d;
                },
                'AhExm': bC(0x3a1),
                'UuaUb': bC(0x44e),
                'sqKkA': function (c, d) {
                    return c !== d;
                },
                'kjhAK': bC(0x3f8),
                'avjEP': 'utf-8'
            };
        if (!this[bC(0x1da)])
            return;
        try {
            const c = Buffer['from'](a);
            let d;
            this['useNoise'] ? d = this[bC(0x210)][bC(0x336)](c) : d = c;
            let f = ![], g = d[bC(0x427)]('utf-8');
            if (g[bC(0x1e2)]()[bC(0x2da)]('{'))
                try {
                    const h = JSON[bC(0x31e)](g);
                    f = !![];
                    if (h[bC(0x2e1)] === bC(0x470)) {
                        let i = Buffer[bC(0x418)](JSON[bC(0x221)]({ 'type': b[bC(0x281)] }));
                        if (this[bC(0x212)])
                            i = this[bC(0x210)]['encrypt'](i);
                        this[bC(0x24f)][bC(0x346)](i);
                        return;
                    }
                    if (b['dBeDI'](h['type'], b['AhExm'])) {
                        this[bC(0x1da)][bC(0x3a1)](h[bC(0x299)] || 0x50, h[bC(0x1f5)] || 0x18);
                        return;
                    }
                    if (h[bC(0x2e1)] === b[bC(0x2d3)] && b['sqKkA'](h[bC(0x491)], undefined)) {
                        let j = b['dBeDI'](h[bC(0x260)], b[bC(0x3ef)]) ? Buffer[bC(0x418)](h['data'], b['kjhAK'])[bC(0x427)](b['avjEP']) : h['data'];
                        this[bC(0x1da)]['write'](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this['ptyProcess'][bC(0x394)](d['toString'](b[bC(0x33b)]));
        } catch (l) {
            a0u[bC(0x30a)](bC(0x2dc) + this[bC(0x3ac)] + ']\x20⚠️\x20指令处理异常:\x20' + l[bC(0x46f)]);
            if (this[bC(0x212)])
                this[bC(0x2e0)]();
        }
    }
}
async function a0Q(a = {}) {
    const bD = a0T, b = {
            'Igryf': bD(0x3ec),
            'sMdDM': function (c, d) {
                return c === d;
            },
            'kCwWG': bD(0x43f),
            'eDSUW': bD(0x2c8),
            'hglup': bD(0x27b),
            'TRXwB': bD(0x249),
            'NJdRO': 'x-encrypted,\x20x-agent-version,\x20x-file-size,\x20x-original-path',
            'kOlLt': bD(0x1b8),
            'mOIOy': function (c, d) {
                return c === d;
            },
            'LcJUo': bD(0x2e5),
            'RAwhf': function (c, d) {
                return c === d;
            },
            'flfEb': bD(0x284),
            'UmMvR': function (c, d) {
                return c === d;
            },
            'BeWoK': bD(0x2ca),
            'oueAG': bD(0x439),
            'wMeiK': function (c, d) {
                return c === d;
            },
            'XOcuL': 'base64',
            'UGkqz': bD(0x36a),
            'jCkPE': 'x-original-path',
            'KbIiX': bD(0x425),
            'DuvGd': bD(0x339),
            'haUnx': function (c, d, f) {
                return c(d, f);
            },
            'TyMKa': bD(0x3c7),
            'NfXHW': 'Shutting\x20down...',
            'AUTZE': 'Starting\x20main()\x20function...',
            'kOFCY': bD(0x3b5),
            'Msqsq': 'Config\x20validated',
            'LzOzG': bD(0x4a0),
            'vODqk': bD(0x24e),
            'IAxxG': bD(0x28a),
            'GfbmB': function (c) {
                return c();
            },
            'SJxqz': function (c, d) {
                return c(d);
            },
            'pqTSy': bD(0x20b),
            'JADZd': function (c, d) {
                return c(d);
            },
            'nUWCx': bD(0x1b4),
            'ldqDA': bD(0x3bf),
            'zruJb': '/api/exec',
            'jAaVg': bD(0x2b6),
            'CfNFK': bD(0x26b),
            'UOgko': bD(0x251),
            'LhsmY': bD(0x370),
            'IwfLV': '/api/task/cron',
            'ITamr': '/api/task/status',
            'Gofde': bD(0x37d),
            'NCVnz': bD(0x2cb),
            'nbcUN': bD(0x47a),
            'ZYAVD': bD(0x337),
            'BKokt': bD(0x211),
            'oyCWJ': bD(0x1d1),
            'ZOCFX': bD(0x411),
            'EOiXB': bD(0x29d),
            'bkOsh': 'SIGINT\x20handler\x20registered',
            'xIQpH': bD(0x3f6)
        };
    try {
        a0u[bD(0x43b)](b[bD(0x290)]), a0E[bD(0x26c)](a), a0u[bD(0x43b)](b[bD(0x24b)]), a0E[bD(0x33f)](), a0u[bD(0x43b)](b['Msqsq']), a0u['debug']('Initializing\x20CryptoManager...');
        const c = new a0F(a0E[bD(0x31a)], a0E[bD(0x391)]);
        a0u['debug'](b[bD(0x469)]), a0u[bD(0x43b)](b['vODqk']);
        const d = new a0H();
        a0u[bD(0x43b)](bD(0x3f4)), a0u[bD(0x43b)](b[bD(0x2cc)]);
        const f = b[bD(0x449)](a0f);
        b['SJxqz'](a0q, f), a0u[bD(0x43b)](bD(0x4a3)), f[bD(0x2c5)]((h, i, j) => {
            const bE = bD, k = bE(0x3a2)[bE(0x38a)]('|');
            let l = 0x0;
            while (!![]) {
                switch (k[l++]) {
                case '0':
                    j();
                    continue;
                case '1':
                    i[bE(0x460)](b[bE(0x2c6)], bE(0x2de));
                    continue;
                case '2':
                    if (b[bE(0x2a3)](h[bE(0x2f8)], b[bE(0x29a)]))
                        return i[bE(0x223)](0xc8)[bE(0x3e0)]();
                    continue;
                case '3':
                    i[bE(0x460)](b['eDSUW'], b[bE(0x349)]);
                    continue;
                case '4':
                    i[bE(0x460)](b['TRXwB'], b['NJdRO']);
                    continue;
                case '5':
                    i[bE(0x460)](b['kOlLt'], '*');
                    continue;
                }
                break;
            }
        }), f['use'](a0f['text']({
            'type': () => !![],
            'limit': b[bD(0x35f)]
        })), f[bD(0x2c5)](a0f[bD(0x3c5)]({ 'extended': !![] })), f['use'](b[bD(0x3bc)](a0G, c)), a0u[bD(0x43b)](b[bD(0x31b)]), f['get'](b[bD(0x2df)], async (h, i) => {
            const bF = bD;
            try {
                const j = await d[bF(0x350)]();
                b['mOIOy'](h[bF(0x464)], ![]) && (j[bF(0x25f)] = null, j['noise_key'] = null), i[bF(0x3bb)](j);
            } catch (k) {
                i[bF(0x223)](0x1f4)['json']({
                    'status': b[bF(0x33d)],
                    'message': k['message']
                });
            }
        }), f[bD(0x1d2)](bD(0x46e), async (h, i) => {
            const bG = bD;
            try {
                const j = await d[bG(0x360)]();
                i[bG(0x3bb)](j);
            } catch (k) {
                i[bG(0x223)](0x1f4)['json']({
                    'status': bG(0x2e5),
                    'message': k[bG(0x46f)]
                });
            }
        }), f[bD(0x23f)](b['zruJb'], async (h, i) => {
            const bH = bD;
            try {
                let j = null;
                if (b['RAwhf'](typeof h['body'], b['flfEb']))
                    j = h[bH(0x20a)][bH(0x1e2)]();
                else
                    h[bH(0x20a)] && b[bH(0x39d)](typeof h[bH(0x20a)], b[bH(0x35d)]) && (j = h[bH(0x20a)][bH(0x22d)] || '');
                if (!j)
                    return i[bH(0x223)](0x190)[bH(0x3bb)]({
                        'status': bH(0x2e5),
                        'message': b[bH(0x1e1)]
                    });
                const k = await a0I[bH(0x3d0)](j, {
                    'cwd': h[bH(0x20a)][bH(0x201)],
                    'env': h[bH(0x20a)][bH(0x277)],
                    'timeout': a0E[bH(0x295)]
                });
                i[bH(0x3bb)](k);
            } catch (l) {
                i['status'](0x1f4)[bH(0x3bb)]({
                    'status': b['LcJUo'],
                    'message': l['message']
                });
            }
        }), f['post'](bD(0x3a0), async (h, i) => {
            const bI = bD;
            try {
                const j = await a0J[bI(0x359)](h[bI(0x20a)][bI(0x42b)], h[bI(0x20a)][bI(0x262)]);
                i['json']({
                    'status': 'ok',
                    'count': j['length'],
                    'files': j
                });
            } catch (k) {
                i[bI(0x223)](0x1f4)[bI(0x3bb)]({
                    'status': bI(0x2e5),
                    'message': k[bI(0x46f)]
                });
            }
        }), f[bD(0x23f)](bD(0x443), async (h, i) => {
            const bJ = bD;
            try {
                const j = await a0J[bJ(0x3aa)](h[bJ(0x20a)][bJ(0x258)] || []);
                i[bJ(0x3bb)]({
                    'status': 'ok',
                    'files': j
                });
            } catch (k) {
                i['status'](0x1f4)[bJ(0x3bb)]({
                    'status': b[bJ(0x33d)],
                    'message': k[bJ(0x46f)]
                });
            }
        }), f[bD(0x1d3)](bD(0x443), async (h, i) => {
            const bK = bD;
            try {
                const j = h['body'][bK(0x269)] || {}, k = b[bK(0x1b9)](h[bK(0x20a)][bK(0x262)], !![]), l = await a0J[bK(0x367)](j, k);
                i['json'](l);
            } catch (m) {
                i[bK(0x223)](0x1f4)[bK(0x3bb)]({
                    'status': b[bK(0x33d)],
                    'message': m[bK(0x46f)]
                });
            }
        }), f[bD(0x23f)](b['jAaVg'], async (h, i) => {
            const bL = bD;
            try {
                const j = await a0J[bL(0x30d)](h[bL(0x20a)][bL(0x42b)]);
                i[bL(0x3bb)](j);
            } catch (k) {
                i['status'](0x1f4)[bL(0x3bb)]({
                    'status': b[bL(0x33d)],
                    'message': k[bL(0x46f)]
                });
            }
        }), f[bD(0x23f)](bD(0x251), async (h, i) => {
            const bM = bD;
            try {
                const j = await a0J['uploadFile'](h[bM(0x20a)][bM(0x42b)], h[bM(0x20a)][bM(0x3ae)], h[bM(0x20a)][bM(0x2ac)], h[bM(0x20a)]['chunk_id'], h['body']['total_chunks']);
                i['json'](j);
            } catch (k) {
                i[bM(0x223)](0x1f4)[bM(0x3bb)]({
                    'status': b[bM(0x33d)],
                    'message': k['message']
                });
            }
        }), f[bD(0x23f)](b['CfNFK'], async (h, i) => {
            const bN = bD;
            try {
                const j = await a0J[bN(0x479)](h[bN(0x20a)][bN(0x42b)]), k = Buffer[bN(0x418)](j[bN(0x2ac)], b['XOcuL']);
                return i['set'](b[bN(0x1fa)], j[bN(0x25e)][bN(0x427)]()), i[bN(0x45b)](b[bN(0x22a)], j['path']), i[bN(0x45b)](b[bN(0x22c)], b['DuvGd']), i[bN(0x346)](k);
            } catch (l) {
                i[bN(0x223)](0x1f4)[bN(0x3bb)]({
                    'status': bN(0x2e5),
                    'message': l[bN(0x46f)]
                });
            }
        }), f[bD(0x3ea)](b[bD(0x4ac)], async (h, i) => {
            const bO = bD;
            try {
                let j = h[bO(0x20a)][bO(0x258)];
                if (!j || !Array[bO(0x2fb)](j)) {
                    j = [];
                    if (h[bO(0x20a)][bO(0x42b)])
                        j[bO(0x344)](h['body'][bO(0x42b)]);
                    if (h['body'][bO(0x41d)])
                        j[bO(0x344)](h[bO(0x20a)]['path2']);
                }
                const k = await a0J[bO(0x1bd)](j);
                i[bO(0x3bb)]({
                    'status': 'ok',
                    'results': k
                });
            } catch (l) {
                i['status'](0x1f4)[bO(0x3bb)]({
                    'status': b[bO(0x33d)],
                    'message': l[bO(0x46f)]
                });
            }
        }), f[bD(0x1d3)](b[bD(0x4ac)], async (h, i) => {
            const bP = bD;
            try {
                const j = await a0J[bP(0x1d5)](h[bP(0x20a)][bP(0x40c)] || h[bP(0x20a)]);
                i[bP(0x3bb)]({
                    'status': 'ok',
                    'total': j[bP(0x1eb)],
                    'success': j[bP(0x40a)](k => k['status'] === 'ok')[bP(0x1eb)],
                    'results': j
                });
            } catch (k) {
                i[bP(0x223)](0x1f4)[bP(0x3bb)]({
                    'status': b['LcJUo'],
                    'message': k[bP(0x46f)]
                });
            }
        }), f[bD(0x23f)](b['LhsmY'], async (h, i) => {
            const bQ = bD;
            try {
                const j = await a0J[bQ(0x280)](h[bQ(0x20a)]);
                i[bQ(0x3bb)]({
                    'status': 'ok',
                    'total': j[bQ(0x1eb)],
                    'success': j['filter'](k => k[bQ(0x223)] === 'ok')[bQ(0x1eb)],
                    'results': j
                });
            } catch (k) {
                i[bQ(0x223)](0x1f4)[bQ(0x3bb)]({
                    'status': b[bQ(0x33d)],
                    'message': k[bQ(0x46f)]
                });
            }
        }), f[bD(0x23f)](bD(0x3cb), async (h, i) => {
            const bR = bD;
            try {
                const j = await a0J[bR(0x35a)](h[bR(0x20a)]['path']);
                i[bR(0x3bb)](j);
            } catch (k) {
                i[bR(0x223)](0x1f4)[bR(0x3bb)]({
                    'status': b[bR(0x33d)],
                    'message': k[bR(0x46f)]
                });
            }
        }), f[bD(0x1d2)](bD(0x41e), (h, i) => {
            const bS = bD;
            i[bS(0x3bb)](a0K[bS(0x423)]());
        }), f[bD(0x23f)]('/api/task/onetime', async (h, i) => {
            const bT = bD;
            try {
                const j = await a0K[bT(0x24c)](h[bT(0x20a)]);
                i[bT(0x3bb)](j);
            } catch (k) {
                i['status'](0x1f4)[bT(0x3bb)]({
                    'status': bT(0x2e5),
                    'message': k[bT(0x46f)]
                });
            }
        }), f[bD(0x1d2)](bD(0x259), (h, i) => {
            const bU = bD;
            i[bU(0x3bb)](a0K[bU(0x467)]());
        }), f['post'](b['IwfLV'], (h, i) => {
            const bV = bD;
            try {
                const j = a0K['setCronTasks'](h[bV(0x20a)]);
                i[bV(0x3bb)](j);
            } catch (k) {
                i[bV(0x223)](0x1f4)[bV(0x3bb)]({
                    'status': b[bV(0x33d)],
                    'message': k[bV(0x46f)]
                });
            }
        }), f['get'](b[bD(0x441)], (h, i) => {
            const bW = bD;
            i[bW(0x3bb)](a0K[bW(0x2d8)]());
        }), f[bD(0x1d2)](b[bD(0x278)], (h, i) => {
            const bX = bD;
            let j = b[bX(0x42f)](parseInt, h[bX(0x335)][bX(0x396)], 0xa) || 0x32;
            j = Math[bX(0x40f)](Math[bX(0x294)](j, 0x1), 0x64), i[bX(0x3bb)](a0K[bX(0x2dd)](j));
        }), f[bD(0x1d2)](b[bD(0x1c7)], (h, i) => {
            const bY = bD;
            let j = parseInt(h[bY(0x335)][bY(0x396)], 0xa) || 0x32;
            j = Math['min'](Math[bY(0x294)](j, 0x1), 0x64), i[bY(0x3bb)](a0K[bY(0x44c)](j));
        }), f[bD(0x3ea)](b[bD(0x278)], (h, i) => {
            const bZ = bD;
            i[bZ(0x3bb)](a0K['clearOnetimeLogs']());
        }), f[bD(0x3ea)](b[bD(0x1c7)], (h, i) => {
            const c0 = bD;
            i[c0(0x3bb)](a0K[c0(0x272)]());
        }), f[bD(0x1d2)](b[bD(0x1ca)], (h, i) => {
            const c1 = bD;
            i[c1(0x3bb)](a0K['getLogSummary']());
        }), f[bD(0x23f)](b[bD(0x465)], async (h, i) => {
            const c2 = bD;
            try {
                const j = await a0K['executeOnetimeTasks']();
                i[c2(0x3bb)](j);
            } catch (k) {
                i[c2(0x223)](0x1f4)['json']({
                    'status': b['LcJUo'],
                    'message': k[c2(0x46f)]
                });
            }
        }), a0u[bD(0x43b)](b[bD(0x3f2)]), f['ws'](bD(0x31d), async (h, i) => {
            const c3 = bD, j = i['params'][0x0];
            a0u['debug'](c3(0x3d5) + i['url']), a0u[c3(0x43b)](c3(0x468) + j);
            const k = i[c3(0x335)][c3(0x215)], l = i[c3(0x335)]['token'];
            a0u[c3(0x43b)]('WebSocket\x20connection\x20attempt\x20with\x20request_id:\x20' + k);
            if (!k) {
                a0u['debug']('Closing\x20connection\x20due\x20to\x20missing\x20request_id'), h[c3(0x2c9)](0x3f0, b[c3(0x356)]);
                return;
            }
            const m = new a0P();
            await m[c3(0x392)](h, k, l);
        }), a0u['debug'](b[bD(0x333)]), a0u['debug'](b[bD(0x3a5)]);
        const g = f[bD(0x3c8)](a0E[bD(0x3ba)], a0E['HOST'], () => {
            const c4 = bD;
            a0u[c4(0x43b)]('🚀\x20Kisama\x20Agent\x20Node.js\x20v' + a0E['AGENT_VERSION'] + '\x20started\x20on\x20' + a0E['HOST'] + ':' + a0E[c4(0x3ba)]), a0u[c4(0x43b)](c4(0x330));
        });
        process['on'](b[bD(0x42e)], () => {
            const c5 = bD;
            a0u[c5(0x43b)](b[c5(0x49e)]), g[c5(0x2c9)](), process['exit'](0x0);
        }), a0u[bD(0x43b)](b['bkOsh']);
    } catch (h) {
        a0u[bD(0x2e5)](b[bD(0x314)], h), process[bD(0x1c4)](0x1);
    }
}
(require[a0T(0x237)] === module || require[a0T(0x237)]?.['filename']?.[a0T(0x3fd)]('ts-node')) && a0Q()[a0T(0x292)](a0u[a0T(0x2e5)]);
module['exports'] = {
    'main': a0Q,
    'Config': a0E,
    'CryptoManager': a0F,
    'SystemInfoCollector': a0H,
    'CommandExecutor': a0I,
    'FileManager': a0J,
    'TaskManager': a0K
};