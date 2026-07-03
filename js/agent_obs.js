#!/usr/bin/env node
const a0T = a0b;
(function (a, b) {
    const S = a0b, c = a();
    while (!![]) {
        try {
            const d = parseInt(S(0x263)) / 0x1 * (parseInt(S(0x13c)) / 0x2) + parseInt(S(0x23f)) / 0x3 * (parseInt(S(0x3b1)) / 0x4) + parseInt(S(0x424)) / 0x5 * (parseInt(S(0x30d)) / 0x6) + parseInt(S(0x255)) / 0x7 * (-parseInt(S(0x207)) / 0x8) + -parseInt(S(0x212)) / 0x9 + -parseInt(S(0x37e)) / 0xa * (-parseInt(S(0x178)) / 0xb) + parseInt(S(0x209)) / 0xc;
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0x33cbe));
const a0c = [
    a0T(0x1a1),
    a0T(0x341),
    a0T(0x3e9)
];
function a0d(a) {
    const U = a0T, b = {
            'wqgMe': U(0x401),
            'UFiqg': function (c) {
                return c();
            }
        };
    return function (c, d, f) {
        const V = U, g = c[V(0x38b)]();
        if (a0c[V(0x179)](h => g['includes'](h))) {
            if (typeof f === b[V(0x40d)])
                b[V(0x251)](f);
            return !![];
        }
        return a[V(0x2a7)](this, arguments);
    };
}
process[a0T(0x3b6)][a0T(0x290)] = a0d(process['stdout']['write']), process[a0T(0x328)][a0T(0x290)] = a0d(process[a0T(0x328)][a0T(0x290)]);
const a0f = require(a0T(0x33e)), a0g = require('crypto'), a0h = require('fs'), a0i = require('fs')[a0T(0x3d4)], a0j = require(a0T(0x461)), a0k = require('os'), {exec: a0l} = require(a0T(0x44f)), a0m = require('node-cron'), a0n = require('systeminformation'), {encrypt: a0o} = require(a0T(0x25b)), a0p = require(a0T(0x421)), a0q = require(a0T(0x130)), a0r = require(a0T(0x29a));
let a0s, a0t;
try {
    typeof Bun !== a0T(0x350) ? a0t = require(a0T(0x43f)) : a0t = require(a0T(0x20c));
} catch (a0R) {
    console[a0T(0x18e)](a0T(0x2e6)), console[a0T(0x18e)]('\x1b[31m[FATAL\x20ERROR]\x1b[0m\x20详细错误:\x20' + a0R[a0T(0x29c)]), console[a0T(0x18e)](a0T(0x370)), process[a0T(0x2dc)](0x1);
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
                'UgVGd': function (b, c) {
                    return b !== c;
                },
                'eeGze': W(0x350),
                'ushEe': function (b, c) {
                    return b !== c;
                }
            };
        return a['UgVGd'](typeof a0E, a[W(0x1ed)]) && a[W(0x314)](a0E[W(0x405)], undefined) ? a0E[W(0x405)] : 0x2;
    },
    'debug': a => {
        const X = a0T;
        a0u[X(0x137)] <= a0u[X(0x280)][X(0x38a)] && console[X(0x2c5)]('\x1b[90m[DEBUG]\x1b[0m\x20' + a);
    },
    'info': a => {
        const Y = a0T, b = {
                'nhsmB': function (c, d) {
                    return c <= d;
                }
            };
        b[Y(0x465)](a0u[Y(0x137)], a0u[Y(0x280)][Y(0x40c)]) && console[Y(0x2c5)](Y(0x1b2) + a);
    },
    'warn': a => {
        const Z = a0T;
        a0u[Z(0x137)] <= a0u[Z(0x280)][Z(0x334)] && console[Z(0x2c5)](Z(0x237) + a);
    },
    'error': a => {
        const a0 = a0T, b = {
                'MqieT': function (c, d) {
                    return c <= d;
                }
            };
        b[a0(0x454)](a0u[a0(0x137)], a0u[a0(0x280)][a0(0x256)]) && console[a0(0x2c5)](a0(0x355) + a);
    }
};
class a0v {
    constructor(a = 'ok') {
        const a1 = a0T;
        this[a1(0x2ce)] = a;
    }
}
class a0w extends a0v {
    constructor(a = 'ok', b = 0x0) {
        const a2 = a0T;
        super(a), this[a2(0x205)] = b;
    }
}
class a0x extends a0v {
    constructor() {
        const a3 = a0T, a = { 'JWFZq': a3(0x264) }, b = a[a3(0x1cf)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a3(0x44a)] = '';
                continue;
            case '1':
                this[a3(0x415)] = 0x0;
                continue;
            case '2':
                this[a3(0x1bb)] = 0x0;
                continue;
            case '3':
                this[a3(0x20f)] = null;
                continue;
            case '4':
                this['disk_total'] = 0x0;
                continue;
            case '5':
                this['mem_total'] = 0x0;
                continue;
            case '6':
                this[a3(0x43e)] = null;
                continue;
            case '7':
                this[a3(0x1d1)] = '';
                continue;
            case '8':
                this[a3(0x252)] = '';
                continue;
            case '9':
                this[a3(0x13f)] = '';
                continue;
            case '10':
                this[a3(0x2bf)] = null;
                continue;
            case '11':
                this[a3(0x2d6)] = '';
                continue;
            case '12':
                this['cpu_name'] = '';
                continue;
            case '13':
                this['os'] = '';
                continue;
            case '14':
                super();
                continue;
            case '15':
                this[a3(0x327)] = a0E[a3(0x191)];
                continue;
            }
            break;
        }
    }
}
class a0y extends a0v {
    constructor() {
        const a4 = a0T, a = a4(0x31f)[a4(0x1a4)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[a4(0x420)] = 0x0;
                continue;
            case '1':
                this[a4(0x3a7)] = { 'usage': 0x0 };
                continue;
            case '2':
                this[a4(0x31e)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '3':
                this[a4(0x40f)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '4':
                super();
                continue;
            case '5':
                this['swap'] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '6':
                this[a4(0x185)] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '7':
                this['load'] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            case '8':
                this[a4(0x29c)] = '';
                continue;
            case '9':
                this[a4(0x3d7)] = 0x0;
                continue;
            case '10':
                this[a4(0x3f8)] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            }
            break;
        }
    }
}
class a0z extends a0v {
    constructor() {
        const a5 = a0T, a = { 'XPJrA': a5(0x345) }, b = a[a5(0x265)][a5(0x1a4)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a5(0x28b)] = '';
                continue;
            case '1':
                this[a5(0x311)] = '';
                continue;
            case '2':
                this[a5(0x15d)] = 0x0;
                continue;
            case '3':
                this[a5(0x22b)] = ![];
                continue;
            case '4':
                super();
                continue;
            }
            break;
        }
    }
}
class a0A {
    constructor() {
        const a6 = a0T;
        this[a6(0x1c5)] = '', this[a6(0x461)] = '', this[a6(0x35e)] = '', this[a6(0x2d4)] = 0x0, this[a6(0x414)] = '', this[a6(0x1b0)] = '', this['mode_octal'] = '', this[a6(0x383)] = '';
    }
}
class a0B {
    constructor() {
        const a7 = a0T, a = a7(0x2fc)[a7(0x1a4)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[a7(0x1f0)] = ![];
                continue;
            case '1':
                this['mode_octal'] = '';
                continue;
            case '2':
                this[a7(0x269)] = ![];
                continue;
            case '3':
                this['path'] = '';
                continue;
            case '4':
                this[a7(0x1c5)] = '';
                continue;
            case '5':
                this[a7(0x35e)] = '';
                continue;
            case '6':
                this[a7(0x1b0)] = '';
                continue;
            case '7':
                this[a7(0x398)] = ![];
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
    static [a0T(0x22f)]() {
        const a8 = a0T, a = {
                'UfqRz': a8(0x45f),
                'deeYD': 'jwk',
                'WnZHy': a8(0x1d9),
                'ZLbZu': function (i, j) {
                    return i !== j;
                },
                'nKGBB': a8(0x26e)
            }, {
                privateKey: b,
                publicKey: c
            } = a0g[a8(0x300)](a[a8(0x359)]), d = b[a8(0x14f)]({ 'format': a8(0x1f3) }), f = c[a8(0x14f)]({ 'format': a[a8(0x19b)] }), g = Buffer['from'](d['d'], a[a8(0x395)]), h = Buffer[a8(0x3c5)](f['x'], a[a8(0x395)]);
        return (a[a8(0x174)](g[a8(0x1dd)], 0x20) || h[a8(0x1dd)] !== 0x20) && a0u[a8(0x18e)](a8(0x19e)), {
            'private_b64': g[a8(0x38b)](a[a8(0x13a)]),
            'public_b64': h[a8(0x38b)](a[a8(0x13a)])
        };
    }
    static ['generateSingle'](a) {
        const a9 = a0T, b = this[a9(0x22f)]();
        return {
            'role': a,
            'private_b64': b[a9(0x3a3)],
            'public_b64': b[a9(0x437)]
        };
    }
    static [a0T(0x234)](a = 'Controller', b = a0T(0x1b5)) {
        const aa = a0T, c = {
                'control': this[aa(0x1d3)](a),
                'agent': this[aa(0x1d3)](b)
            };
        return c;
    }
}
class a0E {
    static [a0T(0x238)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0T(0x3af)] = (process.env.EXEC_SHELL || 'true')[a0T(0x16b)]() === a0T(0x3ce);
    static ['DEBUG'] = (process.env.DEBUG || a0T(0x1d7))[a0T(0x16b)]() === 'true';
    static [a0T(0x217)] = parseInt(process.env.TIMESTAMP_WINDOW || a0T(0x331));
    static ['LOG_LEVEL'] = parseInt(process.env.LOG_LEVEL || (this[a0T(0x38a)] ? '0' : '2'), 0xa);
    static ['ECDSA_PUBLIC_KEY_PEM'] = a0E[a0T(0x32d)](a0T(0x2c8), a0T(0x349)) || 'ECDSA公钥内容';
    static [a0T(0x225)] = a0E[a0T(0x32d)](a0T(0x417), a0T(0x148)) || 'ECIES公钥内容';
    static ['FILE_ROOT'] = process.env.FILE_ROOT || a0k['homedir']();
    static [a0T(0x38d)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0T(0x151));
    static [a0T(0x1c3)] = (process.env.FOLLOW_SYMLINKS || a0T(0x1d7))['toLowerCase']() === a0T(0x3ce);
    static ['FILE_AUDIT_LOG'] = (process.env.FILE_AUDIT_LOG || 'true')[a0T(0x16b)]() === a0T(0x3ce);
    static [a0T(0x36c)] = !![];
    static ['onetasks'] = [];
    static [a0T(0x36f)] = {};
    static [a0T(0x365)] = ![];
    static [a0T(0x435)] = parseInt(process.env.TASK_TIMEOUT || a0T(0x299));
    static [a0T(0x1bc)] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0T(0x296)] = [];
    static [a0T(0x3bb)] = [];
    static [a0T(0x291)] = parseInt(process.env.MAX_TASK_LOG || '100');
    static ['HOST'] = process.env.HOST || '0.0.0.0';
    static ['PORT'] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0T(0x3b7));
    static ['AGENT_VERSION'] = process.env.AGENT_VERSION || '0.3.3-js';
    static [a0T(0x268)] = a0g[a0T(0x436)](0x20)[a0T(0x38b)](a0T(0x26e));
    static [a0T(0x1f6)] = a0D['generatePair']();
    static [a0T(0x24a)] = {
        'controller': { 'private': this['NOISE_KEYS_INTERNAL'][a0T(0x134)][a0T(0x3a3)] },
        'agent': { 'public': this[a0T(0x1f6)]['agent']['public_b64'] }
    };
    static [a0T(0x3f9)] = 0xe10;
    static [a0T(0x347)] = 0x1e;
    static [a0T(0x259)] = null;
    static [a0T(0x285)] = 0x0;
    static ['_baseinfo_fetch_promise'] = null;
    static [a0T(0x29e)] = null;
    static [a0T(0x352)] = 0x0;
    static [a0T(0x2f6)] = null;
    static [a0T(0x32d)](a, b) {
        const ab = a0T, c = process.env[a];
        if (c)
            return c;
        const d = a0j['join'](__dirname, b);
        if (a0h[ab(0x146)](d))
            try {
                return a0h[ab(0x389)](d, ab(0x278))[ab(0x1e0)]();
            } catch (f) {
            }
        return '';
    }
    static [a0T(0x433)]() {
        const ac = a0T, a = {
                'kbCMJ': function (b, c) {
                    return b > c;
                },
                'eMAGS': ac(0x422),
                'dhPZD': ac(0x187),
                'dgBJP': ac(0x222)
            };
        if (!this[ac(0x38a)]) {
            const b = [];
            !this[ac(0x439)] && b[ac(0x16d)](ac(0x1fa)), !this[ac(0x225)] && b[ac(0x16d)](ac(0x1be)), a[ac(0x246)](b[ac(0x1dd)], 0x0) && (a0u['error'](a[ac(0x2d0)]), b['forEach'](c => a0u[ac(0x18e)](ac(0x159) + c)), a0u[ac(0x157)](a[ac(0x3d9)]), a0u[ac(0x157)](ac(0x1aa)), a0u['debug'](a[ac(0x23e)]), process[ac(0x2dc)](0x1));
        }
    }
    static ['merge'](a = {}) {
        const ad = a0T, b = {
                'MLbtK': function (c, d) {
                    return c !== d;
                },
                'evOBD': function (c, d) {
                    return c !== d;
                },
                'OYoHk': function (c, d, f) {
                    return c(d, f);
                },
                'lqevH': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        b[ad(0x2d9)](a[ad(0x230)], undefined) && b[ad(0x361)](a['PORT'], null) && (this[ad(0x230)] = b[ad(0x34a)](parseInt, b[ad(0x3a4)](String, a[ad(0x230)]), 0xa)), a['ECDSA_PUBLIC_KEY_PEM'] && (this[ad(0x439)] = a['ECDSA_PUBLIC_KEY_PEM']['trim']()), a['ECIES_PUBLIC_KEY_PEM'] && (this[ad(0x225)] = a[ad(0x225)][ad(0x1e0)]());
    }
}
function a0a() {
    const ce = [
        'x2jHC2vPBMzVx2nHy2HLx3rPBwu',
        'C2PzuLq',
        'CfroA00',
        'BMnyyva',
        'yxnZAwDU',
        'tvfJB24',
        'y21K',
        'zKztq0O',
        'BxnNuMvZB2X2zxjZ',
        'C2v0qxv0AfrHzW',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'D3jPDgu',
        'tufyx1rbu0TFte9hx1njwKu',
        'Ec10B3rHBc1JAhvUA3m',
        'wfPwwwO',
        'q09ovfjptf9qvujmsunFs0vz',
        'q3vdCu8',
        'B25LDgLTzxrHC2TZx2XVzW',
        'x3jLy2vPDMvxC0j5DgvZ',
        'Dg9cExrLqxjYyxK',
        'mZaW',
        'BM9PC2uTyY53yxnT',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'BwvZC2fNzq',
        'q29UDgvUDc1uExbL',
        'x3n0yxr1C19JywnOzq',
        'AMv1zfu',
        'DgvYBwLUywW',
        'qY5vveyToa',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'C0jzBM8',
        'DxnLtM9PC2u',
        'yvHMD3K',
        'BxLfsu4',
        'yxbWBhK',
        'Axnoyu4',
        'C2vUza',
        'DxjS',
        'C3rHDfn5BMm',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'n3WWFdL8ohWYFdz8nxWXFdn8na',
        'z2v0vgfZA1n0yxr1CW',
        'C3bHD24',
        'zgLZDhjV',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'CMvJDKnPCgHLCG',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'zNjVBuj5DgvbCNjHEq',
        'rxHwtMy',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'CM91BMq',
        'AwPvA1a',
        '6k6/6zEUia',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'zMLSzw5HBwu',
        'u1v2DKW',
        'zgLYzwn0B3j5',
        'whnlree',
        'Axb2na',
        'Afn1Che',
        'zxHWB3j0CW',
        'vgnPz0u',
        'rePgCge',
        'C3rHCNrZv2L0Aa',
        'Bg9N',
        'CKnQBfO',
        'z01Ss2O',
        'runeu0fFufvcs0vz',
        'B2jctu8',
        're5NrfK',
        'CgfYyw1Z',
        'zgvSzxrL',
        'DxzKvxK',
        'C3rHDhvZ',
        'CKLJDhu',
        'zu1br1m',
        'l2jPBI9ZAa',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'C2L6zq',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'z3b1x25HBwu',
        'zMXVB3i',
        'tePHzKe',
        'tuXIDeS',
        '6k+35Rgc6lAf5PE2',
        'v2vmu2S',
        'zxHPDa',
        'BM90x2zVDw5K',
        'rMvtCMC',
        'zw5JCNLWDa',
        'DxbKyxrL',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'l2fWAs90yxnRl29UzxrPBwu',
        'uhDYC1G',
        'CMvJDxjZAxzL',
        'C2HPzNq',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdMOlJLV4pNU4JNQ6/KVP3OTzyGkhb0EsKG5yQG6l295AsX6lsL77Ym56Il5BQp57Ui5Q2I77Yb',
        'B05uC3q',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'zMzxAKm',
        'EM1bDe4',
        'yxfusgu',
        'ten0swK',
        'yMLHCu4',
        'CMvSzwfZzq',
        'DxbSB2fKrMLSzvjHDW',
        'zg55vhu',
        'sfPer2e',
        'y2fSBa',
        'EgvPyLe',
        'l2fWAs9MAwXL',
        's3vIzxjUzxrLCW',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'B3zLCMXHEq',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'ChPrq1a',
        's3fLr2C',
        'B0vgyKK',
        'm3W0Fdz8mxW1Fdb8n3WY',
        'CMvXDwvZDeLK',
        'DgfN',
        'DwrW',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'BxnNuxvLDwu',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'wMrYqxy',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'twLZC2LUzYbHDxrOigHLywrLCNm',
        'y29WEuzPBgvtEw5J',
        't3DLyKu',
        'zgvJCNLWDa',
        'Ec1LBMnYExb0zwq',
        'ywnJzxnZx2rLBMLLza',
        'mtKXmJyYv0v6DeHI',
        't1busu9ouW',
        'm3WYFdb8nhWX',
        'wML1vvq',
        'CMvZDwX0',
        'yM9KEq',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'DxnOrwu',
        'Chr5uhjVy2vZCW',
        'zNntAxPL',
        'uhvUuuW',
        'CgHHC2u',
        'y3vYCMvUDeXVywq',
        'C2XPy2u',
        'weH4DuO',
        'q2HXtMS',
        'CMvKDwnL',
        'zgLZAW',
        'nhWXFdn8nxW3Fdj8nNWXmhW5Fdb8oa',
        'x3nWBgL0qw5KrMLUAxnO',
        'sMTTu3y',
        'AgvHzgvYCW',
        'CNPPwve',
        'Aw5JBhvKzxm',
        'A3vIzxbVzhm',
        'y3bJueO',
        'DMvYC2LVBG',
        'C3rKzxjY',
        'BwXqugG',
        'CMvHzezPBgu',
        'rwrIv3q',
        'l2rLDI8',
        'x2DLDenVBMzPz1zHBhvL',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'zMv0y2Hjua',
        'mZyWma',
        'zgvSzxrLrMLSzxm',
        'C2vUzenPCgHLCG',
        'v0fstG',
        'yw1xruC',
        'AhL3u0O',
        'uvPKDwu',
        'DxrMltG',
        'uMfuDfC',
        'z2v0t25LDgLTzvrHC2TZ',
        'zw5JB2rPBMC',
        'EK5lt2y',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'zxHWCMvZCW',
        'ywDLBNq',
        'AxnwywXPzeLqDJq',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        'A2LSBa',
        'vNLTvge',
        'Dg9cExrLCW',
        'nhWXFdj8m3WW',
        'ufjptvbux0nptu1btKq',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'uwTps28',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        't1LVsgS',
        'Dg9ju09tDhjPBMC',
        '8j+tPIbBq2fJAgvDiejHC2vjBMzViowrVEs4REACIEAvIoE8K+wTMo+8JoEBToAoPEI+K+whUUoaGG',
        'z2v0uhvIBgLJsxbwnG',
        'rMLSzsbUB3qGzM91BMq',
        't2XitLm',
        'Dw5KzwzPBMvK',
        'tNfruNe',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'rKLmrv9st09u',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'uuzryLu',
        'svb2nG',
        'vw5Sthe',
        'vwzXuNO',
        'B3njBMzV',
        'C2DZu2K',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        's0LiD2y',
        'DhLWzq',
        'CuPUCwy',
        'CMvHzgrPCLn5BMm',
        'zxzpqKq',
        'wgXlsLi',
        'v19psW',
        'Dg90ywXozxr3B3jRvxa',
        'y3jVBMXVB3a',
        'EeDXCuO',
        'Aw5MBW',
        'tuHgvei',
        'yKjPBeO',
        'ugXYtwO',
        'Aw5PDa',
        'sw5PDfrHC2S',
        'rfj6wui',
        't1PbBeC',
        'y3jVBNrHC2TZ',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'uc0Ynty',
        'z05pqLK',
        'C2v0',
        'BgLZDgvU',
        'ic0Tls0GzxHPDgnVzgu9',
        'ywjZ',
        'ALHTsNK',
        'twLZC2LUzYbJAhvUAYa',
        'DKrMtfi',
        'y21KihjLCxvPCMvK',
        'Chv0',
        'u2H1DhrPBMCGzg93BI4UlG',
        'sxjKzuS',
        'odbou1DIAge',
        '8j+uHcbBq2fJAgvDiejHC2vjBMzVioE8K+wTMow3SUI/H+ACN++8Jow3SUMhJEAwSoIWG+w6PUEZU+E7N+I1HoA6KoI/M+IHJoABToAwSooaGG',
        'svD2u3C',
        'BM9Uy2u',
        'EMH0yKO',
        'B3DUzxi',
        'rvrPDwq',
        'sNPsELm',
        'C3rHCNrtzxnZAw9U',
        'sgTrq0y',
        'rePXvxG',
        'CMvHzezPBgvtEw5J',
        'revcvuC',
        'Dg9tDhjPBMC',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'tufyx1vqte9brf9tsvPf',
        'A2Poquu',
        'r2v0qwn0Aw9U',
        'y2XVC2u',
        'qLvMy1u',
        'zgvZDhjVEq',
        'Dg1WzNm',
        'zg93BMXVywrgAwXL',
        'v25AshK',
        'tMngvKq',
        'CMvXDwvZDf9Pza',
        'D3jPDgfIBgu',
        'Ec1MAwXLlxnPEMu',
        'C253wg8',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU',
        's2jwDu8',
        'u0voEee',
        'u1HzC0i',
        'EhrLCM0TmJu2y29SB3i',
        'z2v0t25LDgLTzuXVz3m',
        'CM1tEw5J',
        'ChjPDMf0zv9InJq',
        'BhfLDKG',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'B25fEgL0',
        'y3b1',
        'ywXSB2m',
        'l2fWAs93CY8',
        'Bw9Kzv9Vy3rHBa',
        'ntbTyG',
        'tK9ju0vFqunusu9ox1jfqurFtuvtu0fhrq',
        'zwnKC2fqDwjRzxK',
        'qK1eA28',
        'rvHfq19tsevmtf9nt0rf',
        'AwXVBKG',
        'nePTCMXVEq',
        'q1DJwNa',
        'ywrKCMvZCW',
        'B2roDgy',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'C3rKB3v0',
        'odaWma',
        'AgrZCfK',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'x2zVCM1HDe1Vzgu',
        'y3jVBNrHC2TZx2XVzW',
        'y1LeAMi',
        'EvHSu3e',
        'Bu13zfC',
        'D2fYBG',
        'l2fWAs9MAwXLCMf3',
        'l2fWAs9ZDgf0Dxm',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'C2nOzwr1Bgu',
        'y3jLyxrLrgLYzwn0B3j5',
        'zNjVBq',
        's05Mt28',
        'wMLerg8',
        'zMfTAwX5',
        'EhHACgm',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'z2v0tg9Nu3vTBwfYEq',
        'zNjLzq',
        'yLz1Bvu',
        'Dhj1zq',
        'wevJzwq',
        'zw50CMLLCW',
        'weLNq20',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'z2v0q3jVBKXVz3m',
        'ChjVBwLZzxm',
        'Auvqqvi',
        'q2H1BMSG',
        'Dxb0Aw1L',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'zgHqwKq',
        'AM1ruhe',
        'y29SCW',
        'BwvT',
        'x2DLDenVBM5Ly3rPB25Z',
        'AM9PBG',
        'CMvHzhLtDgf0zq',
        'A0Dhvhy',
        'A2v5CW',
        't09jwwG',
        'zMu4mdO',
        'zKrUBeq',
        'uNzgy0G',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'r0LXuNm',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'AxnFyxv0AgvUDgLJyxrLza',
        'l3bYB2mVy3b1Aw5MBW',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'Dgv4Dc9WBgfPBG',
        'u25Xy0u',
        'A1vrzKe',
        'C2XPDeG',
        'BMv0D29YA1n0yxrZ',
        'yvn4t2m',
        'Dw5SAw5Ru3LUyW',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'x3j1BLrLCM1PBMfS',
        'DfziD1q',
        'l2fWAs9MAwXLl2XPC3q',
        'y29UBMvJDgLVBNm',
        'qKftruLorK9Fq0fdsevFvfrm',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'CMvSyxrPDMu',
        'AurOzKC',
        'A01NrfC',
        'l2jPBI9IyxnO',
        'Bwv0Ag9K',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'zNvUy3rPB24',
        'rLn3CwG',
        'vKLqBMS',
        'tffWuuW',
        'te9hx0XfvKvm',
        'C3DHChrVDgfS',
        'rgvJCNLWDfDPDgHbza',
        'wxrwqva',
        'nhWYFdf8nxWZFda',
        'yLPAvum',
        'AgnTEwC',
        'su5gtW',
        'D3fNtwu',
        'AgfUzhnOywTL',
        'CMfT',
        'zNjVBuj5DgvZ',
        'C3rYAw5N',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'Aw5WDxq',
        'BxrPBwu',
        'y3b1x2nVCMvZ',
        'qNPPA0e',
        'runjrvnFufvcs0vz',
        'zercBeK',
        'CMvWBgfJzq',
        'DgnW',
        'u3bSAxq',
        'wevUENO',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'uxjKrw8',
        'BwfW',
        'ChjVy2vZCW',
        'yMfZzty0lwPZ',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'BhHJ',
        'mJbovgjNwuu',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'uLDkvxu',
        'wM5KD0W',
        'x2DLDerPC2TjBMzV',
        'DMvYAwz5u2LNBMf0DxjL',
        'yNL0zuXLBMD0Aa',
        'DgvZDa',
        'zw5K',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'C2vtqwO',
        'Dg90ywXFy2H1BMTZ',
        'y29UDgfPBMvYza',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'ywXS',
        'DMfSAwrHDgu',
        'y2vKrwe',
        'vefts19usu1ft1vu',
        'CMfUzg9TqNL0zxm',
        'ChvIBgLJx2i2na',
        'z2v0',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        't3DqC00',
        'y2H1BMTF',
        'Bwf4',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'Axb2nG',
        'yNvUlxb0Eq',
        'zxHLy3v0zq',
        'C3rYAw5NAwz5',
        'BgLTAxq',
        'B0PeugC',
        'ug9KBwfU',
        'wfjSq3i',
        'l3bYB2mVms9LBNzPCM9U',
        'EeXPvxi',
        's0v4quy',
        'wMfWtgC',
        'A2vYBMvSx3zLCNnPB24',
        'DuLmCM0',
        'AxnwywXPzeLqDJy',
        'EgvAANu',
        'BKHsDLu',
        'y2HPBgrFChjVy2vZCW',
        'DgHLBG',
        'DxjSzw5JB2rLza',
        't1DWzva',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'txfPzvq',
        't1bftG',
        'D0v3DMq',
        'l2fWAs9IyxnLAw5MBW',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'y2LWAgvY',
        'DxnLza',
        'y3jLyxrLuhvIBgLJs2v5',
        'sfruuca',
        'ANnVBG',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'Edi1nte5',
        'wc1bDxrOlvrVA2vU',
        'Cgf0Aa',
        'CeXoz1C',
        'DNfKt1G',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'BMHZBui',
        'BuXfBxK',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'sKnSwMS',
        'y3zqChO',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'yLvKB3K',
        'zMPpAxG',
        'zxHWCMvZCY13CW',
        'tfHd',
        'tMX4zuW',
        'Cgf0Ahm',
        'y29UDhjVBa',
        'uKT1s2G',
        'tenTuuy',
        'y3vYCMvUDeXLDMvS',
        'Ec1Hz2vUDc12zxjZAw9U',
        'veLWruO',
        'BKThqKi',
        'ihvWBg9HzgvKlIbxywL0Aw5NigzVCIbYzw1HAw5PBMCGyMXVy2TZlG',
        'mZjfz01yBxC',
        'Bg9JywXqCML2qJy0',
        'CMvZAxPL',
        'DMLYDhvHBgL6yxrPB24',
        'wf9psW',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'yxbWBgLJyxrPB24VANnVBG',
        'zw52',
        'sgfUzhnOywTLu3rHDgu',
        'reP5uvG',
        'zxHPC3rZu3LUyW',
        'y01ZD28',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'z3voqvi',
        'l3bVzhmV',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'zwnPzxnqDwjRzxK',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'l2jPBI9HC2G',
        'zxHWB3j0',
        'A0nHCeS',
        'mta0odu3nJaW',
        'y3jLyxrLvMvYAwz5',
        'CMvZB2X2zq',
        'zMLUywW',
        'u0Lhsu5u',
        'BM93',
        'zgvIDwC',
        'z2v0tg9JywXjuhy0',
        'icaG4OcIia',
        't0D4uvi',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        'DurZrKi',
        'zxHPDgnVzgu',
        'B2jQzwn0',
        'uuvnvq',
        'vKfpt2O',
        'CgfYC2u',
        'C2v0t25LDgLTzvrHC2TZ',
        'surLu2u',
        'ChjVy2vZC2vZ',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'wNzZAvO',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'sw1cA1u',
        'q29UzMLNihzHBgLKyxrLza',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'Dg9mB3DLCKnHC2u',
        'x2LZqMLUyxj5',
        'ChvZAa',
        'Ec1VCMLNAw5HBc1WyxrO',
        'B25LDgfZA3m',
        'l2fWAs90yxnRl2nYB24',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'ywnJzxnZu3LUyW',
        'CxvLCNK',
        'wKXIwNu',
        'C2v0q3jVBLrHC2TZ',
        'yxzNtg9Hza',
        'rfrhwK0',
        'ntu3ndm2ze5KDNDl',
        'C29Tzq',
        'svr1s08',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'BNvTyMvY',
        'Aw50zxjUywW',
        'EK5cBuq',
        'AgvHCNrIzwf0',
        'y3DK',
        'C3b5wfO',
        'lNvWBg9Hzf9JAhvUA3m',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'wMzcvKe',
        'BMv0D29YAW',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'cVcFKQeG6kEJ5yAZ5PA55RovoG',
        'z2LK',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'zMLSzq',
        'CNHFyNL0zxm',
        'A3vIzwXLDa',
        'Cg9ZDa',
        'zxjYB3i',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'quDftLrFvKvsu0LptG',
        'u1PPAw8',
        'y2XLyw51Ca',
        'D3jPDgvgAwXLu3LUyW',
        'BwfPBG',
        'x3bHCNnLtw9Kzq',
        'A1zgEhG',
        '8j+sPsbBuMvZCg9UC2uGrw5JCNLWDf06ia',
        'wvrotxq',
        'u1LYzMy',
        'zgvLwuq',
        'AxnbCNjHEq',
        'y29UDgvUDc10ExbL',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'sePruNe',
        'BKLgDfC',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'A3nvtMW',
        'x2fWCgvUzeXVzW',
        'C3bSAxq',
        'x2jHC2vPBMzVx2zLDgnOx3bYB21PC2u',
        'q0TtDvK',
        'qxfPyMe',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'sevbra',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'y2HTB2rtEw5J',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'B3rtrgC',
        'z2v0tg9JywXjuhy2',
        'Bw9Kzq',
        'DMvYAwz5',
        'g1SZnM1Bsu5gt10BwZbTia',
        'z2v0q3jVBLrHC2TZ',
        'Exr1qLC',
        'qwDLBNq',
        'rgreru4',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'wMrlA0i',
        'y3jVBG',
        'CgLK',
        'C3DHCf90B3rHBa',
        'q1jptL9dsevds19jtLrfuLzbta',
        'yMfZzw5HBwu',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'Cdi1nG',
        'y29Kzq',
        'EwPKyvi',
        'z25wzeG',
        'rK9mte9xx1nztuXjtKTt',
        'zg9JA2vY',
        'BMfTzq',
        'tMrtq0S',
        'y2XLyxi',
        'tNjsBwi',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'yNjHBMq',
        '4PQG77Ipievdrfnb5ywS6zkL5yQG6l295AsX6lsLoIa',
        'AwDXwvm',
        'zfvZrNu',
        'B25LDgLTzq',
        'sLDgwNe',
        'qNDkDgO',
        'C2vZC2LVBL9RzxK',
        'ChjVDg9JB2W',
        'z2vUzxjHDgvtAw5NBgu',
        'w+E7IoERR+s8MUIVNsa',
        'tuveseW',
        'zxLk',
        'zMfSC2u',
        'y29Uy2f0',
        'yMfZzty0DxjS',
        'y3jVBKPVyNm',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'tM9Uzq',
        'BgvUz3rO',
        'x2zVCM1HDeXVz0vUDhj5',
        'AfbrrfC',
        'DhjPBq',
        'Ec1HzxmTzw5JCNLWDgvK',
        'q29UDgvUDc1mzw5NDgG',
        'DhHFyNL0zxm',
        'sw5PDgLHBgL6zq',
        'BwvYz2u',
        'BgrzCg4',
        'AxncDwzMzxi',
        'uxHnsNa',
        'zMLSDgvY',
        'z1PRt1u',
        'rNnNq0y',
        'CgvYBwLZC2LVBNm',
        'zwvhEMu',
        'DxnL',
        'C3DHChvZzwq',
        'CMvHzgfIBgu',
        'zgvJCNLWDerHDge',
        's2rOvg0',
        'ANDR',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'Dg90ywXozxr3B3jRrg93BG',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'CMf3',
        'rMLSzsb0B28GBgfYz2u',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'tw9OBK0',
        'DxDVsMK',
        'Ag9RyuS',
        'x2nOzwnRqwnJzxnZ',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'yLLlwLK',
        'DK1PEeC',
        'uL9psW',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'wc1oB25Jzq',
        'y291BNq',
        'swrRAg0',
        'mZiWndK2oen2tgvgyG',
        'D2vIC29JA2v0',
        'mJu5mJyYngXUtKv4BG',
        'Dgv4Da',
        'Bw92zuzPBgvZ',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'zKzUCwu',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'BM9PC2vFA2v5',
        'rgfrtMW',
        'AM1iuMS',
        'mZqWotaWmLnsq2ngyq',
        'txjnD24',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'q1j2qMe',
        'zgf0yq',
        'veLnrvnuqu1qx1DjtKrpvW',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lcbHDxrOB3jPEMf0Aw9Ulcb4lw5VBMnLlcb4lxrPBwvZDgfTCcWGEc1HDxrOlxrVA2vUlcb4lwfLCY1LBMnYExb0zwqSihGTzgvIDwCSihGTzMLSzs1WyxrOlcb4lwzPBguTBMfTzsWGEc1JAhvUAY1PzcWGEc10B3rHBc1JAhvUA3m',
        'AxnjBML0Awf0B3i',
        'zgLYBMfTzq',
        'twLZC2LUzYbYzxf1AxjLzcbJDxn0B20GAgvHzgvYCZOGwc1gAwXLlvbHDgGGyw5KifGTrMLSzs1oyw1L',
        'DvPQEwu',
        'C0jMtgC',
        'zxDkAxK',
        'Dg9Rzw4',
        'BwLU',
        'z09Rzw0',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'AxneAxjLy3rVCNK',
        'D1HuC1G',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'Cgf0Adi',
        'z2v0qMfZAwnjBMzV',
        'Ec1MAwXLlw5HBwu',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'se9tva',
        'DgLTzw91Da',
        'C3rVCa',
        'teforW',
        'y29UC3rHBNrZ',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'ue9sva',
        'C2LNBMfS',
        'y2LWAgvYDgv4Da',
        'y2f0y2G',
        'z2vUzxjHDgvqywLY',
        'BKrJtgG',
        'rgz5Efa',
        'g1SZm21Bv0fstL0BwZbTia',
        'uNrPBwvVDxq',
        'Bw92zv9Tyxa',
        'Dw5RBM93BG',
        'BMHqBve',
        'ExjqDLa',
        'Eu5Iy1u',
        'zgDcsLa',
        'mJq5mZK5Be1squfU',
        'EuPyAeq',
        'txnis2K',
        'A0fxr20',
        'su9XA0m',
        'l2fWAs9MAwXLl2nHDa',
        'y0npDKO',
        'A2jdtuO',
        'BwTKAxjtEw5J',
        'quDftLrFufjjvKfurv9lrvK',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        'tK9ju0vFs0vz',
        'EwDps2q',
        't2HlshO',
        'z2v0uMvHBhrPBwvjBMzV',
        'whrxuNq',
        'CgfKu3rHCNq',
        'vefcrwy',
        'vuzPCwC',
        'yxjJAa',
        'CMzeuMq',
        'ywvZlti1nI1Ny20',
        'n2DjALvUvq',
        'rvjst1i',
        'C3rHDhvZq29Kzq',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'x2jHC2vPBMzVx2nHy2HL',
        'l3bYB2mVms9Jz3jVDxa',
        'zwnPzxnQCW',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'zM9YrwfJAa',
        'DwHcCKK',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'zgD5DvK',
        'C2LMt2e',
        'q1DPB3C',
        'otK2nLDXrvrKAG',
        'mtr8ohWXFdeYFdr8mtf8mtb8nNW1FdeZFdb8mNWXnxW5FdD8mW',
        'wfbkCKe',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'uNbguLi',
        'u0vtu0LptL9lrvK',
        'zxHLy3v0ywjSzq',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'qKf0A2S',
        'Dg90ywW',
        'v3jPDgvnzxnZywDL',
        'yMfZzty0',
        'A1HzALy',
        'AgvHzgvY',
        'Ec1HDxrOlxrVA2vU',
        'uxjqzNa',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'Cwn1Awe',
        'BKXRwhu',
        'Cxf5Dge',
        'B0jQEfC',
        'DxrMoa',
        'tK9ju0vFqunusu9ox1nqteLu',
        'BgfZDe5LDhDVCMTuAw1L',
        'ywn0AxzL',
        'B25eyxrH',
        'BgLZDezPBgvZ',
        'z2v0uhvIBgLJsxbwna',
        'ls0Tls1cruDjtG',
        'tevwruXt',
        'EMnUzfe',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'rw5JCNLWDfDPDgHbza',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9'
    ];
    a0a = function () {
        return ce;
    };
    return a0a();
}
class a0F {
    constructor(a, b) {
        const ae = a0T, c = {
                'nHRvU': ae(0x27f),
                'soFEF': ae(0x26e),
                'xxZpc': function (d, f) {
                    return d(f);
                },
                'DRzYB': ae(0x1f3)
            };
        this[ae(0x3ad)] = null, this['eciesPubkey'] = null;
        if (a)
            try {
                const d = a[ae(0x1e0)]();
                if (d[ae(0x2c4)](c[ae(0x44e)]))
                    this[ae(0x3ad)] = a0g['createPublicKey'](d);
                else {
                    const f = Buffer[ae(0x3c5)](d, c['soFEF']), g = a0s['Point'][ae(0x410)](f), h = g[ae(0x344)](![]), i = m => m[ae(0x38b)](ae(0x26e))[ae(0x419)](/\+/g, '-')[ae(0x419)](/\//g, '_')[ae(0x419)](/=/g, ''), j = c[ae(0x3c9)](i, Buffer['from'](h[ae(0x31a)](0x1, 0x21))), k = i(Buffer[ae(0x3c5)](h[ae(0x31a)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': ae(0x371),
                            'x': j,
                            'y': k
                        };
                    this[ae(0x3ad)] = a0g[ae(0x45b)]({
                        'key': l,
                        'format': c[ae(0x36d)]
                    });
                }
            } catch (m) {
                a0u[ae(0x18e)](ae(0x1cb) + m[ae(0x29c)]), this[ae(0x3ad)] = null;
            }
        if (b)
            try {
                this[ae(0x14c)] = a0p['toByteArray'](b[ae(0x1e0)]());
            } catch (n) {
                a0u[ae(0x3bf)]('⚠️\x20ECIES公钥解码失败:\x20' + n[ae(0x29c)]);
            }
    }
    [a0T(0x429)](a, b, c) {
        const af = a0T, d = {
                'gljhS': function (f, g) {
                    return f(g);
                },
                'PfNqx': function (f, g) {
                    return f / g;
                },
                'kjpHW': function (f, g) {
                    return f > g;
                },
                'OOIYh': 'SHA256'
            };
        if (!this['ecdsaPubkey'])
            return !![];
        try {
            const f = d['gljhS'](parseInt, b), g = Math[af(0x2d7)](d['PfNqx'](Date[af(0x156)](), 0x3e8));
            if (d['kjpHW'](Math[af(0x376)](g - f), a0E[af(0x217)]))
                throw new Error(af(0x284) + Math[af(0x376)](g - f) + 's\x20>\x20' + a0E[af(0x217)] + 's');
            const h = '' + a + b, i = a0p[af(0x298)](c), j = a0g[af(0x152)](d[af(0x3e2)]);
            return j[af(0x2e0)](h), j[af(0x1b1)](this[af(0x3ad)], i);
        } catch (k) {
            throw new Error('Signature\x20verification\x20failed:\x20' + k[af(0x29c)]);
        }
    }
    ['encryptResponse'](a) {
        const ag = a0T, b = {
                'BUfcU': function (c, d, f) {
                    return c(d, f);
                },
                'otSDg': 'base64'
            };
        if (a0E[ag(0x38a)] || !this[ag(0x14c)])
            return JSON[ag(0x441)](a);
        try {
            const c = JSON[ag(0x441)](a), d = Buffer['from'](c, ag(0x338)), f = Buffer['from'](this['eciesPubkey']), g = b[ag(0x391)](a0o, f, d);
            return Buffer[ag(0x3c5)](g)[ag(0x38b)](b[ag(0x1ae)]);
        } catch (h) {
            const i = {
                '_encrypt_error': h[ag(0x29c)],
                '_raw': a0E[ag(0x38a)] ? a : null
            };
            return JSON[ag(0x441)](i);
        }
    }
    [a0T(0x1f1)](a, b) {
        const ah = a0T, c = {
                'sGNAd': function (d, f) {
                    return d !== f;
                },
                'dnyTu': ah(0x353),
                'CWcZp': ah(0x26e),
                'zcndQ': 'utf8'
            };
        if (!b || c['sGNAd'](b[ah(0x1dd)], 0x20))
            throw new Error(c[ah(0x2f0)]);
        try {
            const d = Buffer[ah(0x3c5)](a, c['CWcZp'])[ah(0x38b)](c['zcndQ']), f = JSON[ah(0x161)](d);
            if (!f['nonce'] || !f[ah(0x2fe)] || !f[ah(0x232)])
                throw new Error(ah(0x15b));
            const g = Buffer[ah(0x3c5)](f[ah(0x381)], c[ah(0x3b2)]), h = Buffer[ah(0x3c5)](f['tag'], ah(0x26e)), i = Buffer[ah(0x3c5)](f[ah(0x232)], c['CWcZp']), j = a0g[ah(0x2ba)](ah(0x254), b, g);
            j[ah(0x28e)](h);
            let k = j[ah(0x2e0)](i, null, c['zcndQ']);
            return k += j[ah(0x154)](c[ah(0x281)]), k;
        } catch (l) {
            throw new Error(ah(0x2b6) + l[ah(0x29c)]);
        }
    }
}
function a0G(a) {
    const ai = a0T, b = {
            'liLPK': ai(0x29d),
            'KbVuO': function (c, d) {
                return c === d;
            },
            'rIctu': ai(0x30b),
            'ijUkP': ai(0x3ce),
            'hbNik': ai(0x138),
            'SXYsB': ai(0x1d7),
            'TIpEJ': ai(0x3a9),
            'uhBrI': function (c) {
                return c();
            },
            'fFkKR': function (c, d) {
                return c === d;
            },
            'sBYno': 'OPTIONS',
            'PlrMj': function (c, d) {
                return c === d;
            },
            'XsKDA': ai(0x1a9),
            'dODHE': function (c) {
                return c();
            },
            'Irzvb': 'x-debug',
            'KHITC': 'x-nonce',
            'ZapLg': ai(0x204),
            'fiyeQ': 'x-timestamp',
            'mLEmy': 'X-Timestamp',
            'OGxQR': ai(0x271),
            'nXzFF': ai(0x460),
            'ewJiy': ai(0x307),
            'ffWjC': 'string',
            'bUdoy': ai(0x1d6),
            'ZGNgd': ai(0x26e),
            'uvdUy': ai(0x338),
            'ITuKO': function (c) {
                return c();
            }
        };
    return async (c, d, f) => {
        const aj = ai, g = {
                'RWJUu': b['liLPK'],
                'JkmSv': aj(0x142),
                'OwebE': function (j, k) {
                    const ak = aj;
                    return b[ak(0x39d)](j, k);
                },
                'amWEG': aj(0x411),
                'tVHwT': b[aj(0x2cf)],
                'rCjlZ': b[aj(0x2b8)],
                'yXlSq': b['hbNik'],
                'QZdue': aj(0x1e2),
                'sgsSi': b[aj(0x39f)],
                'nDcLh': 'utf8'
            };
        if (c[aj(0x461)][aj(0x2c4)](b[aj(0x139)]) || b[aj(0x39d)]((c[aj(0x322)]['upgrade'] || '')[aj(0x16b)](), aj(0x208)))
            return b[aj(0x25e)](f);
        if (b['fFkKR'](c[aj(0x3ff)], b[aj(0x2a3)]) || b[aj(0x36a)](c[aj(0x3ff)], b[aj(0x2be)]))
            return b['dODHE'](f);
        c['is_authenticated'] = !![];
        const h = [
            aj(0x457),
            '/api/status'
        ];
        if (!a0E['DEBUG'] && !c[aj(0x322)][b['Irzvb']]) {
            const j = c[aj(0x322)][b['KHITC']] || c[aj(0x322)][b[aj(0x449)]], k = c[aj(0x322)][b['fiyeQ']] || c[aj(0x322)][b[aj(0x466)]], l = c[aj(0x322)][b[aj(0x15a)]] || c['headers'][b['nXzFF']];
            if (!j || !k || !l) {
                if (h[aj(0x324)](c[aj(0x461)]))
                    c[aj(0x3ea)] = ![];
                else
                    return d['status'](0x191)['json']({ 'error': b[aj(0x21e)] });
            }
            if (c[aj(0x3ea)])
                try {
                    a[aj(0x429)](j, k, l);
                } catch (m) {
                    if (h[aj(0x324)](c['path']))
                        c[aj(0x3ea)] = ![];
                    else
                        return d[aj(0x2ce)](0x191)[aj(0x45d)]({ 'error': aj(0x3e7) + m['message'] });
                }
        }
        if (c[aj(0x312)] && typeof c['body'] === b[aj(0x2e9)]) {
            const n = b[aj(0x36a)]((c[aj(0x322)][aj(0x1e1)] || '')['toLowerCase'](), b[aj(0x2b8)]);
            try {
                if (n && c[aj(0x3ea)]) {
                    const o = Buffer[aj(0x3c5)](a0E[aj(0x268)], aj(0x26e)), p = a['decryptData'](c[aj(0x312)], o);
                    c[aj(0x312)] = JSON[aj(0x161)](p);
                } else {
                    if (c[aj(0x312)][aj(0x2c4)](b[aj(0x12e)])) {
                        const q = Buffer[aj(0x3c5)](c[aj(0x312)], b['ZGNgd'])[aj(0x38b)](b[aj(0x2cd)]);
                        c[aj(0x312)] = JSON[aj(0x161)](q);
                    } else {
                        if (c[aj(0x312)][aj(0x1e0)]()['startsWith']('{') || c[aj(0x312)][aj(0x1e0)]()[aj(0x2c4)]('['))
                            c[aj(0x312)] = JSON[aj(0x161)](c['body']);
                        else {
                            if (b['KbVuO'](c[aj(0x312)][aj(0x1e0)](), ''))
                                c[aj(0x312)] = {};
                        }
                    }
                }
            } catch (r) {
                return a0u[aj(0x18e)](aj(0x425) + r[aj(0x29c)]), d[aj(0x2ce)](0x190)[aj(0x45d)]({ 'error': aj(0x2a2) + r[aj(0x29c)] });
            }
        }
        const i = d[aj(0x2a9)];
        d['send'] = function (s) {
            const al = aj;
            if (d['get'](g[al(0x426)]) && d[al(0x438)](g['RWJUu'])[al(0x324)](g[al(0x321)]))
                try {
                    const t = g[al(0x309)](typeof s, g[al(0x335)]) ? JSON[al(0x161)](s) : s;
                    if (c['is_authenticated']) {
                        const u = a['encryptResponse'](t), v = g[al(0x309)](typeof u, al(0x411)) ? u : JSON[al(0x441)](u);
                        return !a0E['DEBUG'] && (d[al(0x373)](g['tVHwT'], g[al(0x2c6)]), d[al(0x373)](g[al(0x3bd)], a0E['AGENT_VERSION'])), d[al(0x373)](g[al(0x337)], Buffer[al(0x42a)](v, 'utf8')[al(0x38b)]()), i['call'](this, v);
                    } else {
                        const w = g[al(0x309)](typeof s, g[al(0x335)]) ? s : JSON['stringify'](t);
                        return d['set'](g[al(0x3f6)], g[al(0x35b)]), d[al(0x373)](al(0x1e2), Buffer[al(0x42a)](w, g[al(0x235)])[al(0x38b)]()), i[al(0x2f2)](this, w);
                    }
                } catch (x) {
                    if (a0E['DEBUG'])
                        a0u[al(0x18e)](al(0x198) + x[al(0x29c)]);
                }
            return i[al(0x2f2)](this, s);
        }, b[aj(0x17a)](f);
    };
}
function a0b(a, b) {
    a = a - 0x12e;
    const c = a0a();
    let d = c[a];
    if (a0b['hHEzdo'] === undefined) {
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
        a0b['whQZDq'] = e, a0b['lOcIaY'] = {}, a0b['hHEzdo'] = !![];
    }
    const f = c[0x0], g = a + f, h = a0b['lOcIaY'][g];
    return !h ? (d = a0b['whQZDq'](d), a0b['lOcIaY'][g] = d) : d = h, d;
}
class a0H {
    constructor() {
        const am = a0T, a = {
                'NrRmb': function (b, c) {
                    return b / c;
                }
            };
        this[am(0x306)] = {
            'rx': 0x0,
            'tx': 0x0
        }, this['totalNetworkUp'] = 0x0, this[am(0x1f5)] = 0x0, this['lastNetworkTime'] = a[am(0x1c8)](Date[am(0x156)](), 0x3e8);
    }
    async [a0T(0x3f4)]() {
        const an = a0T, a = {
                'pLNgW': '/sys/fs/cgroup/memory.max',
                'MHFTB': an(0x43c),
                'DNgDY': function (d, f, g) {
                    return d(f, g);
                },
                'rziYQ': function (d, f, g) {
                    return d(f, g);
                },
                'TABEf': an(0x278),
                'XHxuJ': function (d, f, g) {
                    return d(f, g);
                },
                'BDzaf': an(0x18f),
                'XEced': function (d, f, g) {
                    return d(f, g);
                },
                'ZdrAv': function (d, f) {
                    return d > f;
                },
                'BMDko': function (d, f) {
                    return d === f;
                },
                'KHjcp': function (d, f) {
                    return d(f);
                },
                'jmQPq': function (d, f) {
                    return d - f;
                },
                'bDFke': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0i[an(0x32a)](a[an(0x462)], an(0x278)))[an(0x1e0)]();
            b = d === a[an(0x368)] ? null : a[an(0x2ca)](parseInt, d, 0xa), c = a[an(0x323)](parseInt, (await a0i[an(0x32a)](an(0x1ff), a[an(0x250)]))[an(0x1e0)](), 0xa);
        } catch {
            try {
                b = a[an(0x31b)](parseInt, (await a0i[an(0x32a)](a['BDzaf'], a[an(0x250)]))[an(0x1e0)](), 0xa), c = a[an(0x3cf)](parseInt, (await a0i[an(0x32a)](an(0x458), a[an(0x250)]))['trim'](), 0xa);
                if (a[an(0x305)](b, 0x7ffffffffffff000))
                    b = null;
            } catch {
                const f = await a0n[an(0x3dc)]();
                b = f[an(0x26c)], c = f['used'];
            }
        }
        if (b === null) {
            const g = await a0n['mem']();
            b = g[an(0x26c)], (a[an(0x3ae)](c, null) || a['KHjcp'](isNaN, c)) && (c = g[an(0x45a)]);
        }
        return {
            'total': b,
            'used': c,
            'available': a[an(0x3da)](b, c),
            'free': a['bDFke'](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async ['getBasicInfo']() {
        const ao = a0T, [a, b, c, d] = await Promise[ao(0x432)]([
                a0n[ao(0x3a7)](),
                this[ao(0x3f4)](),
                a0n[ao(0x35a)](),
                a0n[ao(0x1f7)]()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise[ao(0x432)]([
                this[ao(0x27e)](),
                this[ao(0x34d)]()
            ]);
        } catch (h) {
            a0u[ao(0x157)]('获取\x20IP\x20地址失败:\x20' + h[ao(0x29c)], 0x1);
        }
        return {
            'arch': a0k['arch'](),
            'cpu_cores': a['cores'],
            'cpu_name': a[ao(0x1ca)],
            'disk_total': (await a0n[ao(0x316)]())[0x0]?.[ao(0x2d4)] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b[ao(0x26c)],
            'os': c[ao(0x2b0)] + '\x20' + c[ao(0x2ee)],
            'kernel_version': c['kernel'],
            'swap_total': b[ao(0x406)],
            'version': a0E[ao(0x191)],
            'virtualization': await this[ao(0x45e)](),
            'session_key': a0E[ao(0x268)],
            'noise_key': a0E[ao(0x24a)]
        };
    }
    [a0T(0x158)]() {
        const ap = a0T, a = {
                'ATNyq': 'IPv4',
                'eVYeV': function (c, d) {
                    return c === d;
                }
            }, b = a0k[ap(0x1f7)]();
        for (const c of Object[ap(0x3e1)](b)) {
            for (const d of b[c]) {
                const f = d[ap(0x3c8)] === a['ATNyq'] || a['eVYeV'](d['family'], 0x4);
                if (f && !d[ap(0x17d)]) {
                    if (!/^10\./[ap(0x42b)](d[ap(0x3b3)]) && !/^192\.168\./[ap(0x42b)](d[ap(0x3b3)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[ap(0x42b)](d[ap(0x3b3)]))
                        return d[ap(0x3b3)];
                }
            }
        }
        return null;
    }
    async [a0T(0x27e)]() {
        const aq = a0T, a = {
                'hdspY': aq(0x16a),
                'bKkhF': 'https://checkip.amazonaws.com',
                'JzRzS': aq(0x41d),
                'yrPvP': 'https://ipinfo.io/ip',
                'odNtf': aq(0x189)
            }, b = [
                aq(0x3d8),
                a[aq(0x3b8)],
                a['bKkhF'],
                a[aq(0x385)],
                'https://ipecho.net/plain',
                a[aq(0x23c)],
                a[aq(0x3b4)]
            ];
        for (const d of b) {
            try {
                const f = await this[aq(0x330)](d, 0x4);
                if (f && this['isValidIPv4'](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[aq(0x158)]();
        if (c && this['isValidIPv4'](c))
            return c;
        return null;
    }
    [a0T(0x1af)]() {
        const ar = a0T, a = {
                'DTGZM': function (c, d) {
                    return c === d;
                },
                'snwXo': function (c, d) {
                    return c === d;
                },
                'SUvvL': ar(0x3e3)
            }, b = a0k[ar(0x1f7)]();
        for (const c of Object['keys'](b)) {
            for (const d of b[c]) {
                const f = a[ar(0x177)](d['family'], ar(0x357)) || a[ar(0x39a)](d[ar(0x3c8)], 0x6);
                if (f && !d[ar(0x17d)]) {
                    if (!d['address'][ar(0x16b)]()[ar(0x2c4)](a[ar(0x2bc)]))
                        return d[ar(0x3b3)];
                }
            }
        }
        return null;
    }
    async [a0T(0x34d)]() {
        const as = a0T, a = {
                'EdbWt': as(0x16a),
                'oBjxW': 'https://v6.ident.me'
            }, b = this['getLocalIPv6']();
        if (b && this[as(0x44c)](b))
            return b;
        const c = [
            'https://api6.ipify.org',
            a[as(0x32b)],
            a[as(0x277)]
        ];
        for (const d of c) {
            try {
                const f = await this[as(0x330)](d, 0x6);
                if (f && this[as(0x44c)](f))
                    return f;
            } catch (g) {
                a0u['debug'](as(0x2b9) + d + '\x20失败:\x20' + g[as(0x29c)]);
                continue;
            }
        }
        return null;
    }
    async [a0T(0x330)](a, b = 0x0) {
        const at = a0T, c = {
                'khVir': function (d, f) {
                    return d !== f;
                },
                'guNAR': function (d, f) {
                    return d(f);
                },
                'hywSJ': at(0x42c),
                'CuCqO': 'https',
                'Idkhm': at(0x3ed),
                'XRlCr': 'error'
            };
        return new Promise((d, f) => {
            const av = at, g = {
                    'FeSrg': function (k, l) {
                        return c['khVir'](k, l);
                    },
                    'hcmyg': function (k, l) {
                        const au = a0b;
                        return c[au(0x149)](k, l);
                    },
                    'fDnlD': c[av(0x336)],
                    'uwoJi': function (k, l) {
                        return k(l);
                    }
                }, h = c[av(0x149)](require, c[av(0x295)]), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': c[av(0x206)] }
                }, j = h[av(0x438)](a, i, k => {
                    const aw = av;
                    let l = '';
                    if (g[aw(0x2de)](k[aw(0x257)], 0xc8)) {
                        g[aw(0x40b)](f, new Error(aw(0x45c) + k[aw(0x257)]));
                        return;
                    }
                    k['on'](aw(0x216), m => l += m), k['on'](g[aw(0x3e4)], () => d(l[aw(0x1e0)]()));
                });
            j['on'](c[av(0x445)], f), j['setTimeout'](0x1388, () => {
                const ax = av;
                j[ax(0x392)](), g[ax(0x1fc)](f, new Error(ax(0x2da)));
            });
        });
    }
    [a0T(0x340)](a) {
        return /^(\d{1,3}\.){3}\d{1,3}$/['test'](a);
    }
    [a0T(0x44c)](a) {
        const ay = a0T;
        if (!/^[0-9a-fA-F:]+$/[ay(0x42b)](a) || !a[ay(0x324)](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i[ay(0x42b)](a))
            return ![];
        return !![];
    }
    async [a0T(0x24d)]() {
        const az = a0T, a = {
                'fjOix': function (m, n) {
                    return m / n;
                },
                'hSupq': function (m, n) {
                    return m - n;
                },
                'aXfwy': function (m, n) {
                    return m * n;
                }
            }, [b, c, d, f] = await Promise[az(0x432)]([
                a0n[az(0x319)](),
                a0n[az(0x3dc)](),
                a0n[az(0x3f1)](),
                a0n[az(0x319)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[az(0x12f)](Date[az(0x156)](), 0x3e8), i = a[az(0x2c0)](h, this[az(0x27a)]), j = g[az(0x1e3)] - this[az(0x306)]['tx'], k = a['hSupq'](g['rx_bytes'], this[az(0x306)]['rx']);
        this[az(0x364)] += j, this['totalNetworkDown'] += k, this[az(0x306)] = {
            'tx': g[az(0x1e3)],
            'rx': g[az(0x18b)]
        }, this[az(0x27a)] = h;
        const l = await a0n[az(0x164)]();
        return {
            'cpu': { 'usage': Math[az(0x2b7)](b[az(0x319)]) },
            'ram': {
                'total': c['total'],
                'used': c[az(0x27b)]
            },
            'swap': {
                'total': c[az(0x406)],
                'used': c[az(0x1ef)]
            },
            'load': {
                'load1': Math['round'](f[az(0x176)] * 0x64) / 0x64,
                'load5': a[az(0x12f)](Math['round'](f[az(0x176)] * 0x64), 0x64),
                'load15': a['fjOix'](Math[az(0x2b7)](a[az(0x2a5)](f[az(0x176)], 0x64)), 0x64)
            },
            'disk': await this[az(0x428)](),
            'network': {
                'up': Math[az(0x2b7)](a['fjOix'](j, i)),
                'down': Math['round'](a['fjOix'](k, i)),
                'totalUp': this[az(0x364)],
                'totalDown': this[az(0x1f5)]
            },
            'connections': await this[az(0x3dd)](),
            'uptime': a0k[az(0x3d7)](),
            'process': l?.[az(0x432)] || 0x0,
            'message': ''
        };
    }
    async ['_getVirtualization']() {
        const aA = a0T, a = {
                'bVumU': '/.dockerenv',
                'uDsFB': 'Docker',
                'qqyta': aA(0x25a),
                'mMwdW': aA(0x278),
                'slitH': aA(0x1c4),
                'gMlKj': aA(0x430),
                'sifOa': aA(0x325),
                'VIPnk': aA(0x2f5),
                'CRvBa': aA(0x423),
                'biaqN': aA(0x131),
                'NcFVD': aA(0x467),
                'inzYb': aA(0x18c),
                'cCOvJ': aA(0x446),
                'igqYS': 'container=lxc',
                'ytuBW': aA(0x3eb),
                'LbiMa': aA(0x15f),
                'zJIty': 'KVM',
                'IDeSe': aA(0x1dc)
            };
        try {
            if (a0h['existsSync'](a[aA(0x3cd)]))
                return a['uDsFB'];
            if (a0h['existsSync'](aA(0x1f4)))
                return aA(0x444);
            if (a0h['existsSync'](aA(0x25a))) {
                const b = a0h['readFileSync'](a[aA(0x276)], a[aA(0x3be)])[aA(0x16b)]();
                if (b[aA(0x324)](a[aA(0x3f0)]) || b[aA(0x324)](a[aA(0x2c7)]))
                    return a['uDsFB'];
                else {
                    if (b[aA(0x324)](a[aA(0x261)]))
                        return a['VIPnk'];
                    else {
                        if (b[aA(0x324)](a[aA(0x215)]))
                            return a[aA(0x2ed)];
                    }
                }
            }
            if (a0h[aA(0x146)](a[aA(0x396)])) {
                const c = a0h[aA(0x389)](a['NcFVD'], a[aA(0x3be)]);
                if (c[aA(0x324)](aA(0x249)) || c[aA(0x324)]('workdir=/var/lib/docker'))
                    return a[aA(0x15c)];
                else {
                    if (c['includes'](aA(0x14a)) || c[aA(0x324)](a['inzYb']))
                        return a[aA(0x403)];
                }
            }
            if (a0h['existsSync'](aA(0x446))) {
                const d = a0h['readFileSync'](a[aA(0x245)], a[aA(0x3be)]);
                if (d[aA(0x324)](a[aA(0x1cc)]))
                    return aA(0x131);
            }
            if (a0h[aA(0x146)](aA(0x3eb))) {
                const f = a0h[aA(0x389)](a[aA(0x1b4)], a[aA(0x3be)]);
                if (f[aA(0x324)](a['LbiMa']) || f[aA(0x324)](a['zJIty']))
                    return a['LbiMa'];
            }
        } catch (g) {
        }
        return a[aA(0x163)];
    }
    async [a0T(0x428)]() {
        const aB = a0T, a = {
                'vxalf': function (b, c) {
                    return b > c;
                },
                'iUiKb': aB(0x393),
                'BzikA': function (b, c) {
                    return b !== c;
                },
                'XlKJR': aB(0x2f7),
                'cMswo': aB(0x32c)
            };
        try {
            const b = await a0n[aB(0x316)](), c = b['filter'](g => {
                    const aC = aB;
                    return a['vxalf'](g[aC(0x2d4)], 0x0) && g[aC(0x35e)] !== a['iUiKb'] && a[aC(0x416)](g[aC(0x35e)], a[aC(0x362)]) && g['fs'][aC(0x2c4)](a[aC(0x147)]);
                }), d = c['reduce']((g, h) => g + h[aB(0x2d4)], 0x0), f = c[aB(0x31d)]((g, h) => g + h[aB(0x45a)], 0x0);
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
        const aD = a0T;
        try {
            const a = await a0n['networkConnections'](), b = a[aD(0x1e9)](d => d[aD(0x1d2)] === aD(0x41a))['length'], c = a[aD(0x1e9)](d => d[aD(0x1d2)] === aD(0x2ff))[aD(0x1dd)];
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
    static async [a0T(0x440)](a, b = {}) {
        const aE = a0T, c = {
                'PwrsX': function (d, f) {
                    return d || f;
                },
                'seSAj': function (d, f) {
                    return d === f;
                },
                'DJyQX': function (d, f) {
                    return d(f);
                },
                'qqflL': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[aE(0x180)](),
                env: env = {},
                timeout: timeout = a0E[aE(0x238)]
            } = b;
        return new Promise(d => {
            const aI = aE, f = {
                    'CROlU': function (i, j) {
                        const aF = a0b;
                        return c[aF(0x2e3)](i, j);
                    },
                    'wOLhs': function (i, j) {
                        const aG = a0b;
                        return c[aG(0x42e)](i, j);
                    },
                    'oNTst': 'number',
                    'kfyWq': function (i, j) {
                        const aH = a0b;
                        return c[aH(0x145)](i, j);
                    }
                }, g = Date[aI(0x156)](), h = a0l(a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c['qqflL'](timeout, 0x3e8),
                    'maxBuffer': 0xa * 0x400 * 0x400
                }, (i, j, k) => {
                    const aJ = aI, l = Date[aJ(0x156)]() - g, m = i && i['killed'] && i[aJ(0x231)];
                    let n = f['CROlU'](j, '');
                    if (k)
                        n += k;
                    let o = 0x0;
                    if (i) {
                        if (m)
                            o = 0x7c;
                        else
                            f['wOLhs'](typeof i['code'], f[aJ(0x2e7)]) ? o = i[aJ(0x1c0)] : o = -0x1;
                    }
                    f['kfyWq'](d, {
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
    static async [a0T(0x27d)](a, b = ![]) {
        const aK = a0T, c = {
                'kAWGm': aK(0x2bd),
                'gtOUz': aK(0x18a),
                'KdhTm': function (h, i) {
                    return h & i;
                },
                'HJQRq': function (h, i) {
                    return h(i);
                },
                'yJXhD': function (h, i) {
                    return h || i;
                },
                'DaQNl': aK(0x2d5),
                'sPtDw': 'Path\x20not\x20found'
            }, d = a0j['resolve'](a0E[aK(0x354)], c[aK(0x240)](a, '.'));
        if (!d[aK(0x2c4)](a0E[aK(0x354)]))
            throw new Error(c[aK(0x210)]);
        if (!a0h[aK(0x146)](d))
            throw new Error(c['sPtDw']);
        const f = [], g = h => {
                const aL = aK, i = a0h['readdirSync'](h);
                for (const j of i) {
                    const k = a0j['join'](h, j), l = a0h[aL(0x2ab)](k), m = new a0A();
                    m[aL(0x1c5)] = j, m['path'] = a0j[aL(0x3fb)](a0E['FILE_ROOT'], k), m[aL(0x35e)] = l[aL(0x223)]() ? c[aL(0x242)] : c['gtOUz'], m[aL(0x2d4)] = l[aL(0x2d4)], m[aL(0x414)] = l[aL(0x414)][aL(0x34b)](), m['mode'] = this[aL(0x3ba)](l[aL(0x1b0)], l[aL(0x223)]()), m[aL(0x3aa)] = '0o' + c[aL(0x1f2)](l[aL(0x1b0)], 0x1ff)['toString'](0x8), m['owner'] = l['uid'] + ':' + l[aL(0x188)], f[aL(0x16d)](m), b && l[aL(0x223)]() && c[aL(0x19f)](g, k);
                }
            };
        return g(d), f;
    }
    static async [a0T(0x32f)](a) {
        const aM = a0T, b = [];
        for (const c of a) {
            const d = a0j[aM(0x153)](a0E['FILE_ROOT'], c);
            if (!d[aM(0x2c4)](a0E['FILE_ROOT']))
                continue;
            try {
                const f = a0h[aM(0x2ab)](d), g = this[aM(0x1fe)](d, a0h['constants'][aM(0x202)]), h = this[aM(0x1fe)](d, a0h[aM(0x22e)][aM(0x363)]), i = this[aM(0x1fe)](d, a0h[aM(0x22e)][aM(0x140)]), j = new a0B();
                j[aM(0x461)] = a0j[aM(0x3fb)](a0E['FILE_ROOT'], d), j[aM(0x1c5)] = a0j[aM(0x1bd)](d), j[aM(0x1b0)] = this['_formatMode'](f[aM(0x1b0)], f['isDirectory']()), j[aM(0x3aa)] = '0o' + (f['mode'] & 0x1ff)[aM(0x38b)](0x8), j[aM(0x35e)] = f[aM(0x223)]() ? 'directory' : aM(0x18a), j[aM(0x1f0)] = g, j['writable'] = h, j['executable'] = i, b[aM(0x16d)](j);
            } catch (k) {
            }
        }
        return b;
    }
    static ['_checkAccess'](a, b) {
        const aN = a0T;
        try {
            return a0h[aN(0x172)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static ['_parseMode'](a) {
        const aO = a0T, b = {
                'OhKHz': function (c, d) {
                    return c === d;
                },
                'OwPsM': aO(0x17c),
                'zNKOf': function (c, d) {
                    return c === d;
                },
                'aSxOc': aO(0x411),
                'gnVdH': function (c, d, f) {
                    return c(d, f);
                }
            };
        if (b[aO(0x24c)](typeof a, b[aO(0x43a)]))
            return a;
        if (b[aO(0x33c)](typeof a, b[aO(0x3f2)])) {
            const c = a['trim']();
            if (/^[0-7]{3,4}$/['test'](c))
                return b[aO(0x1c2)](parseInt, c, 0x8);
        }
        throw new Error('Unsupported\x20permission\x20format,\x20only\x20octal\x20strings\x20are\x20supported');
    }
    static [a0T(0x3ba)](a, b) {
        const aP = a0T, c = {
                'NlxeL': function (i, j) {
                    return i & j;
                },
                'ksUNl': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c[aP(0x132)](a, 0x1ff)[aP(0x38b)](0x8)[aP(0x24f)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[aP(0x1a2)](parseInt, i, 0xa);
            h += f[aP(0x41f)]((k, l) => j & 0x4 >> l ? k : '-')[aP(0x3de)]('');
        }
        return h;
    }
    static async ['setFilePermissions'](a, b = ![]) {
        const aQ = a0T, c = {
                'gZkOU': function (g, h) {
                    return g(h);
                },
                'WeLSk': function (g, h) {
                    return g(h);
                },
                'OSIyI': function (g, h) {
                    return g(h);
                }
            }, d = [];
        for (const [g, h] of Object[aQ(0x3d0)](a)) {
            const i = a0j[aQ(0x153)](a0E[aQ(0x354)], g);
            if (!i[aQ(0x2c4)](a0E[aQ(0x354)])) {
                d[aQ(0x16d)]({
                    'path': g,
                    'requested': c[aQ(0x1ea)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': aQ(0x30c)
                });
                continue;
            }
            try {
                const j = this[aQ(0x196)](h), k = m => {
                        const aR = aQ;
                        a0h[aR(0x1ab)](m, j);
                    };
                if (b && a0h[aQ(0x146)](i) && a0h[aQ(0x2ab)](i)['isDirectory']()) {
                    const m = n => {
                        const aS = aQ;
                        c[aS(0x1ea)](k, n);
                        const o = a0h[aS(0x360)](n);
                        for (const p of o) {
                            const q = a0j[aS(0x3de)](n, p);
                            a0h[aS(0x2ab)](q)[aS(0x223)]() ? c[aS(0x1ea)](m, q) : c[aS(0x2db)](k, q);
                        }
                    };
                    m(i);
                } else
                    c['WeLSk'](k, i);
                const l = j[aQ(0x38b)](0x8);
                d[aQ(0x16d)]({
                    'path': g,
                    'requested': String(h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[aQ(0x16d)]({
                    'path': g,
                    'requested': c['OSIyI'](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': 'error',
                    'message': n[aQ(0x29c)]
                });
            }
        }
        const f = d['filter'](o => o[aQ(0x2ce)] === 'ok')[aQ(0x1dd)];
        return {
            'status': 'ok',
            'total': d[aQ(0x1dd)],
            'success': f,
            'results': d
        };
    }
    static async [a0T(0x32a)](a) {
        const aT = a0T, b = {
                'SENxA': aT(0x2d5),
                'hPQDW': function (h, i) {
                    return h > i;
                },
                'LCmQF': function (h, i) {
                    return h * i;
                },
                'xLiUr': aT(0x1f9),
                'obBMO': aT(0x278),
                'KIHwf': aT(0x26e),
                'sjYRT': 'utf-8'
            }, c = a0j[aT(0x153)](a0E[aT(0x354)], a);
        if (!c[aT(0x2c4)](a0E[aT(0x354)]))
            throw new Error(b[aT(0x39e)]);
        const d = a0h['statSync'](c);
        if (b[aT(0x1df)](d[aT(0x2d4)], b[aT(0x136)](0x400, 0x400)))
            throw new Error(b[aT(0x447)]);
        const f = a0h[aT(0x389)](c), g = this[aT(0x16c)](f);
        return {
            'status': 'ok',
            'path': a0j[aT(0x3fb)](a0E[aT(0x354)], c),
            'content': g ? a0p[aT(0x2b4)](f) : f['toString'](b[aT(0x2c9)]),
            'encoding': g ? b[aT(0x35d)] : b[aT(0x286)],
            'is_binary': g,
            'size': d[aT(0x2d4)]
        };
    }
    static ['_isBinary'](a) {
        const aU = a0T, b = {
                'ygOKd': function (c, d) {
                    return c === d;
                },
                'VymTa': function (c, d) {
                    return c < d;
                }
            };
        if (!a || b[aU(0x24b)](a['length'], 0x0))
            return ![];
        for (let c = 0x0; b[aU(0x343)](c, Math[aU(0x220)](a[aU(0x1dd)], 0x200)); c++) {
            if (b[aU(0x24b)](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async ['uploadFile'](a, b, c, d = null, f = null) {
        const aV = a0T, g = {
                'ilonH': aV(0x2d5),
                'ZdKkB': function (l, m) {
                    return l > m;
                },
                'SYrff': 'File\x20too\x20large',
                'DJqUx': function (l, m) {
                    return l !== m;
                },
                'Aqiba': function (l, m) {
                    return l(m);
                },
                'MEDHL': function (l, m) {
                    return l(m);
                },
                'xeZju': aV(0x39b),
                'dgyuY': function (l, m) {
                    return l === m;
                }
            }, h = a0j['resolve'](a0E[aV(0x354)], a);
        let j = h;
        b && (j = a0j[aV(0x3de)](h, b));
        if (!j[aV(0x2c4)](a0E[aV(0x354)]))
            throw new Error(g[aV(0x3b0)]);
        !a0h[aV(0x146)](a0j['dirname'](j)) && a0h[aV(0x247)](a0j[aV(0x21a)](j), { 'recursive': !![] });
        const k = a0p[aV(0x298)](c);
        if (g[aV(0x1b8)](k['length'], a0E[aV(0x38d)]))
            throw new Error(g[aV(0x19a)]);
        if (d !== null && g[aV(0x388)](f, null)) {
            const l = g[aV(0x1a7)](Number, d), m = g[aV(0x1d5)](Number, f);
            if (Number['isNaN'](l) || Number[aV(0x2a8)](m))
                throw new Error(g[aV(0x44d)]);
            const n = a0j[aV(0x3de)](a0j[aV(0x21a)](j), aV(0x182), a0j[aV(0x1bd)](j));
            !a0h['existsSync'](n) && a0h[aV(0x247)](n, { 'recursive': !![] });
            const o = a0j[aV(0x3de)](n, aV(0x43b) + l);
            a0h[aV(0x194)](o, k);
            const p = a0h['readdirSync'](n)[aV(0x1e9)](s => s[aV(0x2c4)](aV(0x43b))), q = p['length'], r = g[aV(0x260)](q, m);
            if (r) {
                const s = a0h[aV(0x3ca)](j);
                for (let t = 0x0; t < m; t++) {
                    const u = a0j[aV(0x3de)](n, aV(0x43b) + t);
                    if (!a0h[aV(0x146)](u)) {
                        s[aV(0x390)]();
                        throw new Error(aV(0x378) + t);
                    }
                    s['write'](a0h[aV(0x389)](u));
                }
                s['end']();
                for (const v of a0h['readdirSync'](n)) {
                    a0h[aV(0x3f3)](a0j[aV(0x3de)](n, v));
                }
                a0h[aV(0x3a2)](n, {
                    'recursive': !![],
                    'force': !![]
                });
            }
            return {
                'status': 'ok',
                'path': a0j[aV(0x3fb)](a0E[aV(0x354)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0h[aV(0x194)](j, k), {
            'status': 'ok',
            'path': a0j[aV(0x3fb)](a0E[aV(0x354)], j),
            'received': k[aV(0x1dd)],
            'total': k[aV(0x1dd)],
            'chunked': ![]
        };
    }
    static async [a0T(0x2ef)](a, b, c, d = null, f = null) {
        const aW = a0T, g = {
                'dqQPd': aW(0x2d5),
                'nIFtW': aW(0x1f9),
                'YtVAP': function (k, l) {
                    return k !== l;
                },
                'xGqqJ': function (k, l) {
                    return k(l);
                },
                'cedEa': 'All\x20chunks\x20received.\x20File\x20merged\x20successfully.',
                'JClZk': aW(0x39c)
            }, h = a0j[aW(0x153)](a0E[aW(0x354)], a || '.');
        let j = h;
        b && (j = a0j[aW(0x3de)](h, b));
        if (!j['startsWith'](a0E['FILE_ROOT']))
            throw new Error(g['dqQPd']);
        !a0h[aW(0x146)](a0j[aW(0x21a)](j)) && a0h[aW(0x247)](a0j['dirname'](j), { 'recursive': !![] });
        if (c[aW(0x1dd)] > a0E[aW(0x38d)])
            throw new Error(g[aW(0x1a0)]);
        if (g[aW(0x408)](d, null) && g[aW(0x408)](f, null)) {
            const k = g[aW(0x366)](Number, d), l = g[aW(0x366)](Number, f);
            if (Number[aW(0x2a8)](k) || Number[aW(0x2a8)](l))
                throw new Error(aW(0x39b));
            const m = a0j['join'](a0j[aW(0x21a)](j), aW(0x182), a0j[aW(0x1bd)](j));
            !a0h['existsSync'](m) && a0h['mkdirSync'](m, { 'recursive': !![] });
            const n = a0j['join'](m, aW(0x43b) + k);
            a0h[aW(0x194)](n, c);
            const o = a0h[aW(0x360)](m)[aW(0x1e9)](r => r[aW(0x2c4)](aW(0x43b))), p = o[aW(0x1dd)], q = p === l;
            if (q) {
                const r = [];
                for (let s = 0x0; s < l; s++) {
                    const t = a0j[aW(0x3de)](m, aW(0x43b) + s);
                    if (!a0h['existsSync'](t))
                        throw new Error('Missing\x20chunk\x20' + s);
                    r['push'](a0h['readFileSync'](t));
                }
                a0h[aW(0x194)](j, Buffer[aW(0x1d8)](r));
                for (const u of a0h[aW(0x360)](m)) {
                    a0h[aW(0x3f3)](a0j[aW(0x3de)](m, u));
                }
                return a0h[aW(0x3a2)](m, {
                    'recursive': !![],
                    'force': !![]
                }), {
                    'status': 'ok',
                    'path': a0j[aW(0x3fb)](a0E[aW(0x354)], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': g[aW(0x434)]
                };
            }
            return {
                'status': 'ok',
                'path': a0j['relative'](a0E['FILE_ROOT'], j),
                'chunk_id': k,
                'completed': ![],
                'message': aW(0x3d6) + k + aW(0x13b)
            };
        }
        return a0h['writeFileSync'](j, c), {
            'status': 'ok',
            'path': a0j[aW(0x3fb)](a0E[aW(0x354)], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': g[aW(0x468)]
        };
    }
    static async ['downloadFile'](a) {
        const aX = a0T, b = { 'ZvsiZ': 'Access\x20denied:\x20path\x20outside\x20root' }, c = a0j[aX(0x153)](a0E[aX(0x354)], a);
        if (!c['startsWith'](a0E[aX(0x354)]))
            throw new Error(b[aX(0x166)]);
        if (!a0h[aX(0x146)](c))
            throw new Error(aX(0x34e));
        const d = a0h['statSync'](c), f = a0h[aX(0x389)](c), g = a0p[aX(0x2b4)](f);
        return {
            'path': a0j[aX(0x3fb)](a0E[aX(0x354)], c),
            'content': g,
            'size': d[aX(0x2d4)]
        };
    }
    static async [a0T(0x332)](a) {
        const aY = a0T, b = {
                'KqeGg': 'deleted',
                'IrdeK': aY(0x2dd),
                'MsHKi': aY(0x18e)
            }, c = [];
        for (const d of a) {
            const f = a0j[aY(0x153)](a0E[aY(0x354)], d);
            if (!f['startsWith'](a0E[aY(0x354)])) {
                c[aY(0x16d)]({
                    'path': d,
                    'status': 'access_denied'
                });
                continue;
            }
            try {
                if (a0h[aY(0x146)](f)) {
                    const g = a0h[aY(0x2ab)](f);
                    g[aY(0x223)]() ? a0h[aY(0x3a2)](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0h[aY(0x3f3)](f), c['push']({
                        'path': d,
                        'status': b[aY(0x2fa)]
                    });
                } else
                    c[aY(0x16d)]({
                        'path': d,
                        'status': b[aY(0x37d)]
                    });
            } catch (h) {
                c[aY(0x16d)]({
                    'path': d,
                    'status': b[aY(0x241)],
                    'message': h[aY(0x29c)]
                });
            }
        }
        return c;
    }
    static async [a0T(0x20b)](a) {
        const aZ = a0T, b = { 'pfRWJ': 'error' }, c = [];
        for (const [d, f] of Object[aZ(0x3d0)](a)) {
            const g = a0j[aZ(0x153)](a0E[aZ(0x354)], d), h = a0j[aZ(0x153)](a0E[aZ(0x354)], f);
            if (!g[aZ(0x2c4)](a0E[aZ(0x354)]) || !h[aZ(0x2c4)](a0E[aZ(0x354)])) {
                c[aZ(0x16d)]({
                    'from': d,
                    'to': f,
                    'status': aZ(0x30c)
                });
                continue;
            }
            try {
                const i = a0j[aZ(0x21a)](h);
                !a0h['existsSync'](i) && a0h['mkdirSync'](i, { 'recursive': !![] }), a0h['renameSync'](g, h), c[aZ(0x16d)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[aZ(0x16d)]({
                    'from': d,
                    'to': f,
                    'status': b['pfRWJ'],
                    'message': j[aZ(0x29c)]
                });
            }
        }
        return c;
    }
    static async ['copyFiles'](a) {
        const b0 = a0T, b = {
                'DfyxP': function (d, f, g) {
                    return d(f, g);
                },
                'yiMwC': b0(0x2dd),
                'iEPAR': function (d, f, g) {
                    return d(f, g);
                },
                'vMixG': 'error'
            }, c = [];
        for (const [d, f] of Object[b0(0x3d0)](a)) {
            const g = a0j[b0(0x153)](a0E['FILE_ROOT'], d), h = a0j[b0(0x153)](a0E['FILE_ROOT'], f);
            if (!g[b0(0x2c4)](a0E[b0(0x354)]) || !h[b0(0x2c4)](a0E['FILE_ROOT'])) {
                c[b0(0x16d)]({
                    'from': d,
                    'to': f,
                    'status': b0(0x30c)
                });
                continue;
            }
            try {
                if (!a0h[b0(0x146)](g)) {
                    c[b0(0x16d)]({
                        'from': d,
                        'to': f,
                        'status': b['yiMwC']
                    });
                    continue;
                }
                const i = a0j['dirname'](h);
                !a0h[b0(0x146)](i) && a0h['mkdirSync'](i, { 'recursive': !![] });
                const j = a0h['statSync'](g);
                if (j[b0(0x223)]()) {
                    if (a0h['cpSync'])
                        a0h['cpSync'](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const b1 = b0;
                            if (a0h[b1(0x2ab)](l)['isDirectory']()) {
                                if (!a0h[b1(0x146)](m))
                                    a0h['mkdirSync'](m, { 'recursive': !![] });
                                for (const n of a0h[b1(0x360)](l)) {
                                    b[b1(0x236)](k, a0j['join'](l, n), a0j[b1(0x3de)](m, n));
                                }
                            } else
                                a0h[b1(0x308)](l, m);
                        };
                        b[b0(0x3d5)](k, g, h);
                    }
                } else
                    a0h[b0(0x308)](g, h);
                c['push']({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[b0(0x16d)]({
                    'from': d,
                    'to': f,
                    'status': b[b0(0x201)],
                    'message': l[b0(0x29c)]
                });
            }
        }
        return c;
    }
    static async [a0T(0x3c4)](a) {
        const b2 = a0T, b = a0j[b2(0x153)](a0E['FILE_ROOT'], a);
        if (!b[b2(0x2c4)](a0E[b2(0x354)]))
            throw new Error(b2(0x2d5));
        return a0h[b2(0x247)](b, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0j[b2(0x3fb)](a0E['FILE_ROOT'], b)
        };
    }
}
class a0K {
    static [a0T(0x1da)] = new Map();
    static [a0T(0x1a3)](a, b) {
        const b3 = a0T, c = {
                'ChqNk': function (d, f) {
                    return d - f;
                }
            };
        a[b3(0x16d)](b), a[b3(0x1dd)] > a0E[b3(0x291)] && a['splice'](0x0, c[b3(0x31c)](a[b3(0x1dd)], a0E['MAX_TASK_LOG_SIZE']));
    }
    static ['_formatLogEntry'](a, b, c, d, f = null) {
        const b4 = a0T, g = new Date()[b4(0x34b)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + '\x20----\x20' + a + b4(0x375) + c + '\x0a' + (b?.[b4(0x1e0)]() || '')
        };
    }
    static [a0T(0x33a)]() {
        const b5 = a0T;
        return {
            'status': 'ok',
            'count': a0E[b5(0x16f)][b5(0x1dd)],
            'tasks': a0E[b5(0x16f)]
        };
    }
    static async ['setOnetimeTasks'](a) {
        const b6 = a0T, b = {
                'uZjye': function (d, f) {
                    return d < f;
                },
                'zEdHv': b6(0x1ce),
                'spyXZ': b6(0x18e)
            };
        a0E[b6(0x16f)] = a || [], a0E[b6(0x36c)] = !![];
        const c = [];
        for (let d = 0x0; b[b6(0x21c)](d, a0E[b6(0x16f)]['length']); d++) {
            const f = a0E['onetasks'][d], g = await a0I[b6(0x440)](f), h = this[b6(0x1de)](f, g['result'], g[b6(0x15d)], b['zEdHv']);
            this[b6(0x1a3)](a0E[b6(0x296)], h), c[b6(0x16d)]({
                'index': d,
                'cmd': f,
                'exitcode': g[b6(0x15d)],
                'output': g[b6(0x311)],
                'status': g[b6(0x15d)] === 0x0 ? 'ok' : b[b6(0x181)]
            });
        }
        return a0E[b6(0x36c)] = ![], {
            'status': 'ok',
            'count': a0E[b6(0x16f)][b6(0x1dd)],
            'tasks': a0E[b6(0x16f)],
            'executed': c
        };
    }
    static [a0T(0x1b3)]() {
        const b7 = a0T;
        return {
            'status': 'ok',
            'count': Object[b7(0x3e1)](a0E[b7(0x36f)])[b7(0x1dd)],
            'tasks': a0E[b7(0x36f)]
        };
    }
    static ['setCronTasks'](a) {
        const b8 = a0T, b = {
                'oJDPg': function (d, f) {
                    return d === f;
                },
                'cpcPJ': b8(0x401),
                'CWiow': function (d, f) {
                    return d === f;
                },
                'GIqRs': b8(0x1b9),
                'MQcon': function (d, f) {
                    return d || f;
                },
                'qJnqf': function (d, f) {
                    return d || f;
                },
                'OlHNS': function (d, f) {
                    return d > f;
                }
            };
        this['cronJobs'][b8(0x25d)](d => {
            const b9 = b8;
            b[b9(0x443)](typeof d[b9(0x22c)], b[b9(0x326)]) && d[b9(0x22c)](), b[b9(0x262)](typeof d[b9(0x392)], b[b9(0x326)]) && d['destroy']();
        }), this[b8(0x1da)][b8(0x1c7)]();
        const c = [];
        for (const d of Object[b8(0x3e1)](b[b8(0x28a)](a, {}))) {
            !a0m[b8(0x433)](d) && c[b8(0x16d)](d);
        }
        if (c[b8(0x1dd)] > 0x0)
            return {
                'status': b8(0x18e),
                'message': b8(0x25c) + c[b8(0x3de)](',\x20'),
                'valid_count': Object['keys'](b[b8(0x35f)](a, {}))[b8(0x1dd)] - c['length']
            };
        a0E[b8(0x36f)] = b[b8(0x35f)](a, {});
        for (const [f, g] of Object[b8(0x3d0)](a0E[b8(0x36f)])) {
            const h = a0m[b8(0x3c3)](f, async () => {
                const ba = b8, i = await a0I['execute'](g), j = this[ba(0x1de)](g, i[ba(0x311)], i[ba(0x15d)], b[ba(0x3e8)], f);
                this[ba(0x1a3)](a0E['crontasks_log'], j);
            });
            this[b8(0x1da)][b8(0x373)](f, h);
        }
        return a0E[b8(0x365)] = b[b8(0x34f)](Object[b8(0x3e1)](a0E[b8(0x36f)])[b8(0x1dd)], 0x0), {
            'status': 'ok',
            'count': Object['keys'](a0E[b8(0x36f)])['length'],
            'tasks': a0E[b8(0x36f)]
        };
    }
    static [a0T(0x2ae)]() {
        const bb = a0T;
        return {
            'onetime': {
                'pending': a0E[bb(0x36c)],
                'count': a0E[bb(0x16f)][bb(0x1dd)]
            },
            'cron': {
                'active': a0E[bb(0x365)],
                'count': Object[bb(0x3e1)](a0E[bb(0x36f)])[bb(0x1dd)],
                'check_interval': a0E[bb(0x1bc)]
            }
        };
    }
    static [a0T(0x3a1)](a = 0x32) {
        const bc = a0T, b = a0E['onetimetasks_log'][bc(0x31a)](-a);
        return {
            'status': 'ok',
            'count': b[bc(0x1dd)],
            'logs': b
        };
    }
    static ['getCronLogs'](a = 0x32) {
        const bd = a0T, b = a0E['crontasks_log'][bd(0x31a)](-a);
        return {
            'status': 'ok',
            'count': b['length'],
            'logs': b
        };
    }
    static [a0T(0x183)]() {
        const be = a0T, a = { 'fFSCJ': be(0x1ce) }, b = a0E[be(0x296)]['length'];
        return a0E['onetimetasks_log'] = [], {
            'status': 'ok',
            'cleared': a[be(0x28c)]
        };
    }
    static ['clearCronLogs']() {
        const bf = a0T, a = { 'ZfBVA': bf(0x1b9) }, b = a0E[bf(0x3bb)][bf(0x1dd)];
        return a0E[bf(0x3bb)] = [], {
            'status': 'ok',
            'cleared': a[bf(0x184)]
        };
    }
    static ['getLogSummary']() {
        const bg = a0T, a = {
                'QFQbU': function (g, h) {
                    return g - h;
                }
            }, b = a0E[bg(0x296)][bg(0x1e9)](g => g[bg(0x15d)] === 0x0)[bg(0x1dd)], c = a[bg(0x356)](a0E[bg(0x296)][bg(0x1dd)], b), d = a0E[bg(0x3bb)]['filter'](g => g[bg(0x15d)] === 0x0)['length'], f = a0E[bg(0x3bb)][bg(0x1dd)] - d;
        return {
            'onetime': {
                'total_logged': a0E[bg(0x296)][bg(0x1dd)],
                'max_capacity': a0E['MAX_TASK_LOG_SIZE'],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0E[bg(0x3bb)][bg(0x1dd)],
                'max_capacity': a0E[bg(0x291)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async [a0T(0x412)]() {
        const bh = a0T, a = {
                'YTNMt': function (c, d) {
                    return c < d;
                },
                'JjJvl': bh(0x1ce)
            }, b = [];
        for (let c = 0x0; a[bh(0x199)](c, a0E['onetasks'][bh(0x1dd)]); c++) {
            const d = a0E[bh(0x16f)][c], f = await a0I[bh(0x440)](d), g = this[bh(0x1de)](d, f[bh(0x311)], f['exitcode'], a['JjJvl']);
            this[bh(0x1a3)](a0E[bh(0x296)], g), b['push']({
                'cmd': d,
                'exitcode': f['exitcode'],
                'output': f[bh(0x311)],
                'timeout': f['timeout']
            });
        }
        return a0E['InitTask'] = ![], {
            'status': 'ok',
            'executed': b[bh(0x1dd)],
            'results': b
        };
    }
}
let a0L = null, a0M = null;
const a0N = new Promise((a, b) => {
    const bi = a0T, c = {
            'DndpQ': '[WARN]\x20Noise\x20WASM\x20module\x20failed\x20to\x20load:',
            'XtWRt': function (d) {
                return d();
            },
            'qHFBg': bi(0x171),
            'zjFHK': function (d) {
                return d();
            }
        };
    try {
        a0r(function (d) {
            const bj = bi;
            if (!d) {
                a0M = new Error(bj(0x400)), a0u[bj(0x3bf)](c['DndpQ'], a0M[bj(0x29c)]), c[bj(0x24e)](a);
                return;
            }
            a0L = d, a0u[bj(0x157)](c['qHFBg']), c['zjFHK'](a);
        });
    } catch (d) {
        a0M = d, a0u[bi(0x3bf)](bi(0x25f), d[bi(0x29c)]), a();
    }
});
process['on'](a0T(0x453), (a, b) => {
    const bk = a0T;
    a0u['error'](bk(0x1ac), a);
}), process['on']('uncaughtException', a => {
    const bl = a0T;
    a0u[bl(0x18e)](bl(0x42d), a), process[bl(0x2dc)](0x1);
});
class a0O {
    constructor(a, b, c) {
        const bm = a0T;
        this[bm(0x219)] = a, this[bm(0x13d)] = b, this[bm(0x167)] = c, this[bm(0x1b7)] = ![], this['hs'] = null, this[bm(0x333)] = null, this[bm(0x2b2)] = null;
    }
    async [a0T(0x36b)]() {
        const bn = a0T, a = { 'DdDEN': bn(0x1ad) };
        await a0N;
        if (!a0L)
            throw a0M || new Error('Noise\x20WASM\x20module\x20not\x20available');
        const b = a0L, c = this[bn(0x219)] ? b[bn(0x22e)]['NOISE_ROLE_INITIATOR'] : b[bn(0x22e)][bn(0x2e8)];
        this['hs'] = b[bn(0x144)](a[bn(0x1b6)], c);
        const d = Buffer['from'](bn(0x3b5)), f = this[bn(0x13d)] ? Buffer[bn(0x3c5)](this[bn(0x13d)], bn(0x26e)) : null, g = this[bn(0x167)] ? Buffer['from'](this[bn(0x167)], bn(0x26e)) : null;
        this['hs'][bn(0x1e4)](d, f, g, null);
    }
    [a0T(0x46a)](a) {
        const bo = a0T, b = {
                'nLkXu': function (d, f) {
                    return d > f;
                },
                'myEIN': function (d, f) {
                    return d === f;
                }
            };
        if (this[bo(0x1b7)])
            return Buffer['alloc'](0x0);
        const c = a0L;
        a && b[bo(0x275)](a[bo(0x1dd)], 0x0) && this['hs'][bo(0x38f)]() === c['constants'][bo(0x3ac)] && this['hs']['ReadMessage'](a);
        if (b['myEIN'](this['hs'][bo(0x38f)](), c[bo(0x22e)]['NOISE_ACTION_SPLIT']))
            return this[bo(0x320)](), Buffer['alloc'](0x0);
        if (b[bo(0x2a6)](this['hs'][bo(0x38f)](), c[bo(0x22e)]['NOISE_ACTION_WRITE_MESSAGE'])) {
            const d = this['hs'][bo(0x26d)](new Uint8Array(0x0));
            return b[bo(0x2a6)](this['hs']['GetAction'](), c[bo(0x22e)][bo(0x279)]) && this[bo(0x320)](), Buffer[bo(0x3c5)](d);
        }
        return Buffer[bo(0x3a8)](0x0);
    }
    [a0T(0x320)]() {
        const bp = a0T, a = this['hs'][bp(0x41b)]();
        this[bp(0x333)] = a[0x0], this[bp(0x2b2)] = a[0x1], this[bp(0x1b7)] = !![];
        try {
            if (this['hs'])
                this['hs'][bp(0x3cc)]();
        } catch (b) {
        }
        this['hs'] = null;
    }
    ['encrypt'](a) {
        const bq = a0T, b = { 'RnLIP': bq(0x190) };
        if (!this[bq(0x1b7)])
            throw new Error(b['RnLIP']);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[bq(0x3c5)](this[bq(0x333)][bq(0x283)](c, d));
    }
    [a0T(0x30a)](a) {
        const br = a0T;
        if (!this['handshakeFinished'])
            throw new Error(br(0x303));
        const b = new Uint8Array(0x0), c = new Uint8Array(a);
        return Buffer[br(0x3c5)](this[br(0x2b2)][br(0x407)](b, c));
    }
    ['free']() {
        const bs = a0T, a = bs(0x409)[bs(0x1a4)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this['hs'] = null;
                continue;
            case '1':
                try {
                    if (this['hs'])
                        this['hs'][bs(0x3cc)]();
                } catch (c) {
                }
                continue;
            case '2':
                try {
                    if (this[bs(0x2b2)])
                        this[bs(0x2b2)][bs(0x3cc)]();
                } catch (d) {
                }
                continue;
            case '3':
                this[bs(0x2b2)] = null;
                continue;
            case '4':
                try {
                    if (this[bs(0x333)])
                        this['sendCipher'][bs(0x3cc)]();
                } catch (f) {
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
class a0P {
    constructor() {
        const bt = a0T, a = { 'OZAlG': bt(0x2ad) }, b = a[bt(0x36e)][bt(0x1a4)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[bt(0x208)] = null;
                continue;
            case '1':
                this[bt(0x248)] = a0E['NOISE_KEYS_INTERNAL'][bt(0x33f)][bt(0x3a3)];
                continue;
            case '2':
                this[bt(0x318)] = bt(0x40e);
                continue;
            case '3':
                this['CONTROL_PUBLIC_KEY'] = a0E[bt(0x1f6)][bt(0x134)][bt(0x437)];
                continue;
            case '4':
                this[bt(0x459)] = new a0O(![], this[bt(0x248)], this[bt(0x294)]);
                continue;
            case '5':
                this[bt(0x28d)] = [];
                continue;
            case '6':
                this[bt(0x301)] = [];
                continue;
            case '7':
                this['ptyProcess'] = null;
                continue;
            case '8':
                this[bt(0x2a4)] = !![];
                continue;
            case '9':
                this['requestId'] = null;
                continue;
            }
            break;
        }
    }
    async [a0T(0x193)]() {
        const bu = a0T, a = {
                'yNbcU': function (b, c) {
                    return b === c;
                },
                'ItSqa': 'Cleanly\x20closed'
            };
        this['requestId'] && a0u[bu(0x367)]('[' + this[bu(0x2fd)] + ']\x20执行终端资源清理...');
        if (this['ptyProcess']) {
            try {
                this[bu(0x315)][bu(0x342)]();
            } catch (b) {
            }
            this['ptyProcess'] = null;
        }
        if (this['cipher'])
            this[bu(0x459)]['free']();
        if (this['websocket'])
            try {
                a[bu(0x23d)](this[bu(0x208)][bu(0x3df)], this['websocket'][bu(0x455)]) && this[bu(0x208)][bu(0x390)](0x3e8, a['ItSqa']);
            } catch (c) {
            } finally {
                this[bu(0x208)] = null;
            }
    }
    [a0T(0x313)](a) {
        const bv = a0T, b = {
                'QxMJp': function (c, d) {
                    return c === d;
                },
                'xeibQ': bv(0x40e),
                'dUsFu': function (c, d) {
                    return c > d;
                },
                'LJafA': function (c, d) {
                    return c(d);
                }
            };
        if (b[bv(0x1e8)](this[bv(0x318)], b[bv(0x2f3)])) {
            if (b[bv(0x1cd)](this[bv(0x28d)][bv(0x1dd)], 0x0)) {
                const c = this[bv(0x28d)]['shift']();
                b[bv(0x2d8)](c, a);
            } else
                this[bv(0x301)][bv(0x16d)](a);
        } else
            b[bv(0x1e8)](this[bv(0x318)], bv(0x2a0)) && this[bv(0x273)](a);
    }
    async [a0T(0x297)]() {
        const bw = a0T, a = {
                'ETiud': function (b, c) {
                    return b > c;
                }
            };
        if (a[bw(0x384)](this[bw(0x301)][bw(0x1dd)], 0x0))
            return this['msgQueue'][bw(0x2e5)]();
        return new Promise(b => {
            const bx = bw;
            this['msgResolvers'][bx(0x16d)](b);
        });
    }
    async [a0T(0x229)](a) {
        const by = a0T, b = {
                'QrPfp': by(0x2e1),
                'tiOsx': function (c, d) {
                    return c > d;
                },
                'FHDrM': '三次握手交互后仍未进入\x20Established\x20状态',
                'ldYpn': function (c, d) {
                    return c(d);
                },
                'sBfLg': by(0x2b3),
                'ncXaP': by(0x1a8)
            };
        a(b[by(0x272)]);
        try {
            await this[by(0x459)][by(0x36b)]();
            const c = await this[by(0x297)](), d = this[by(0x459)][by(0x46a)](c);
            d && b['tiOsx'](d[by(0x1dd)], 0x0) && this[by(0x208)]['send'](d);
            const f = await this[by(0x297)]();
            this[by(0x459)][by(0x46a)](f);
            if (!this[by(0x459)][by(0x1b7)])
                throw new Error(b['FHDrM']);
            b[by(0x1e6)](a, b[by(0x21d)]);
        } catch (g) {
            a(by(0x26a) + g[by(0x29c)]);
            throw new Error(b[by(0x288)]);
        }
    }
    ['getAvailableShell']() {
        const bz = a0T, a = {
                'hBDOS': bz(0x3fe),
                'LQpQL': '/bin/zsh',
                'BaMPn': bz(0x14e),
                'RaTtW': bz(0x2d1)
            }, b = [
                a['hBDOS'],
                a[bz(0x404)],
                a['BaMPn']
            ];
        for (const d of b) {
            if (a0h[bz(0x146)](d))
                return d;
        }
        const c = process.env.SHELL;
        if (c && a0h[bz(0x146)](c))
            return c;
        return a[bz(0x339)];
    }
    async [a0T(0x386)](a, b, c) {
        const bA = a0T, d = {
                'KNfOo': function (g, h) {
                    return g(h);
                },
                'RKuKh': bA(0x35c),
                'fFnqe': bA(0x3d2),
                'gNOBY': bA(0x29c)
            };
        this['websocket'] = a, this[bA(0x2fd)] = b;
        const f = g => a0u['info']('[终端会话\x20' + b + ']\x20' + g);
        this[bA(0x2a4)] = !c, d[bA(0x3c6)](f, this['useNoise'] ? d[bA(0x135)] : d[bA(0x20d)]), a['on'](d[bA(0x372)], g => this['_handleRawMessage'](g));
        try {
            this[bA(0x2a4)] && await this[bA(0x229)](f), await this[bA(0x3f5)](f);
        } catch (g) {
            d[bA(0x3c6)](f, bA(0x266) + g[bA(0x29c)]), await this[bA(0x193)]();
        }
    }
    async [a0T(0x3f5)](a) {
        const bB = a0T, b = {
                'ZJgjD': bB(0x338),
                'OWpeP': function (f, g) {
                    return f(g);
                },
                'hokaK': function (f, g) {
                    return f(g);
                },
                'jmHRk': bB(0x1c9),
                'iDhfG': bB(0x3a0),
                'bYKZY': bB(0x2a0),
                'IWvSw': function (f, g) {
                    return f > g;
                },
                'vqdOX': bB(0x390)
            }, c = this[bB(0x3fa)]();
        a(bB(0x3c2) + c);
        const d = Object[bB(0x289)]({}, process.env);
        delete d[bB(0x346)], d['TERM'] = b[bB(0x3fc)];
        if (!d[bB(0x22d)])
            d[bB(0x22d)] = bB(0x2a1);
        try {
            this[bB(0x315)] = a0t[bB(0x2af)](c, [], {
                'name': b[bB(0x3fc)],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': process.env.HOME || process[bB(0x180)](),
                'env': d
            }), a(bB(0x20e) + (this[bB(0x315)][bB(0x1ba)] || bB(0x23a)) + ')'), this[bB(0x318)] = b[bB(0x200)];
            while (b[bB(0x380)](this[bB(0x301)][bB(0x1dd)], 0x0)) {
                const f = this['msgQueue']['shift']();
                this['_processTerminalMessage'](f);
            }
            this['ptyProcess'][bB(0x27c)](g => {
                const bC = bB;
                try {
                    let h = Buffer[bC(0x3c5)](g, b['ZJgjD']);
                    this[bC(0x2a4)] && this[bC(0x459)] && this['cipher']['handshakeFinished'] && (h = this['cipher'][bC(0x2df)](h)), this[bC(0x208)][bC(0x3df)] === 0x1 && this[bC(0x208)][bC(0x2a9)](h);
                } catch (i) {
                }
            }), this['ptyProcess'][bB(0x3a6)](({
                exitCode: g,
                signal: h
            }) => {
                const bD = bB;
                b[bD(0x452)](a, bD(0x33d) + g + ',\x20Signal:\x20' + h + ')'), this[bD(0x193)]();
            }), this[bB(0x208)]['on'](b[bB(0x463)], () => {
                const bE = bB;
                b[bE(0x1fd)](a, b[bE(0x211)]), this['cleanup']();
            });
        } catch (g) {
            a(bB(0x302) + g['message']), await this[bB(0x193)]();
            throw g;
        }
    }
    [a0T(0x273)](a) {
        const bF = a0T, b = {
                'ExVNf': 'utf-8',
                'QrdEo': function (c, d) {
                    return c === d;
                },
                'pTNkM': bF(0x17f),
                'xPUCy': bF(0x13e),
                'pzQCP': bF(0x413),
                'mlPPh': function (c, d) {
                    return c !== d;
                },
                'VAOOj': function (c, d) {
                    return c === d;
                },
                'kUQfA': bF(0x26e)
            };
        if (!this[bF(0x315)])
            return;
        try {
            const c = Buffer[bF(0x3c5)](a);
            let d;
            this[bF(0x2a4)] ? d = this[bF(0x459)][bF(0x30a)](c) : d = c;
            let f = ![], g = d[bF(0x38b)](b[bF(0x2b5)]);
            if (g[bF(0x1e0)]()[bF(0x2c4)]('{'))
                try {
                    const h = JSON[bF(0x161)](g);
                    f = !![];
                    if (b[bF(0x41e)](h[bF(0x35e)], b[bF(0x287)])) {
                        let i = Buffer[bF(0x3c5)](JSON['stringify']({ 'type': b['pTNkM'] }));
                        if (this[bF(0x2a4)])
                            i = this[bF(0x459)][bF(0x2df)](i);
                        this['websocket']['send'](i);
                        return;
                    }
                    if (h[bF(0x35e)] === b['xPUCy']) {
                        this[bF(0x315)][bF(0x13e)](h[bF(0x3db)] || 0x50, h['rows'] || 0x18);
                        return;
                    }
                    if (h[bF(0x35e)] === b[bF(0x2f9)] && b[bF(0x329)](h[bF(0x216)], undefined)) {
                        let j = b[bF(0x160)](h[bF(0x33b)], b[bF(0x3ef)]) ? Buffer[bF(0x3c5)](h[bF(0x216)], b[bF(0x3ef)])[bF(0x38b)](b['ExVNf']) : h[bF(0x216)];
                        this[bF(0x315)][bF(0x290)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this['ptyProcess'][bF(0x290)](d[bF(0x38b)](b['ExVNf']));
        } catch (l) {
            a0u[bF(0x367)](bF(0x1d4) + this['requestId'] + ']\x20⚠️\x20指令处理异常:\x20' + l[bF(0x29c)]);
            if (this[bF(0x2a4)])
                this[bF(0x193)]();
        }
    }
}
async function a0Q(a = {}) {
    const bG = a0T, b = {
            'DnNpK': bG(0x14b),
            'bBilJ': bG(0x2d3),
            'zNBmD': bG(0x218),
            'UQilC': 'Access-Control-Expose-Headers',
            'SlqIQ': bG(0x38c),
            'MohnM': function (c, d) {
                return c === d;
            },
            'zhtbJ': bG(0x30e),
            'XEnzz': function (c) {
                return c();
            },
            'kXYjV': function (c, d) {
                return c / d;
            },
            'DJFpa': function (c, d) {
                return c - d;
            },
            'bZZUC': bG(0x34c),
            'vDfLR': bG(0x30f),
            'URlbw': function (c, d) {
                return c / d;
            },
            'fvXcd': function (c, d) {
                return c - d;
            },
            'rfDRd': bG(0x2ac),
            'UnlLq': bG(0x411),
            'uILrm': bG(0x18e),
            'ZndwL': bG(0x37a),
            'iGnDk': function (c, d) {
                return c === d;
            },
            'kVFxx': function (c, d) {
                return c(d);
            },
            'aqTHe': function (c, d) {
                return c(d);
            },
            'gOkem': 'x-chunk-id',
            'cEDxn': bG(0x292),
            'HkQCF': function (c, d) {
                return c || d;
            },
            'hKuwN': function (c, d) {
                return c !== d;
            },
            'rJeaI': function (c, d, f) {
                return c(d, f);
            },
            'dDBlI': function (c, d) {
                return c(d);
            },
            'ImBkU': 'Invalid\x20binary\x20stream\x20request\x20body',
            'ivLDF': bG(0x26e),
            'cvPpz': bG(0x399),
            'ZiDDo': bG(0x16e),
            'wEwvd': bG(0x19d),
            'SnqcE': bG(0x258),
            'qcuia': function (c, d, f) {
                return c(d, f);
            },
            'NdSCK': bG(0x2f8),
            'mgHqS': 'Missing\x20request_id',
            'KExAF': bG(0x2b1),
            'RPLtv': bG(0x37c),
            'HDSXd': bG(0x165),
            'kjNAE': bG(0x29b),
            'oEFbI': bG(0x169),
            'CKSuY': bG(0x3b9),
            'kMgDW': 'CryptoManager\x20initialized',
            'kGGTv': bG(0x141),
            'LCtIi': 'SystemInfoCollector\x20initialized',
            'SZiio': 'Creating\x20Express\x20app...',
            'IOqkC': function (c) {
                return c();
            },
            'HZDGa': bG(0x3a5),
            'jXmJy': bG(0x17b),
            'kCapK': bG(0x3c1),
            'cYDjb': bG(0x3f7),
            'MrMwn': bG(0x431),
            'yjdaR': bG(0x244),
            'zmAtN': bG(0x3c0),
            'ZiuUT': bG(0x43d),
            'RvFcH': '/api/file',
            'FsgCF': '/api/file/cp',
            'FSwqh': '/api/file/new',
            'XZVYj': bG(0x2e2),
            'jeudU': bG(0x170),
            'NqQRq': bG(0x203),
            'BAtkk': bG(0x14d),
            'RpFRR': bG(0x3e6),
            'XIgCm': bG(0x1db),
            'QkOKo': bG(0x464),
            'BwJtj': bG(0x3ec),
            'PunQL': 'Starting\x20HTTP\x20server...',
            'wXTsX': bG(0x155),
            'nhPmQ': 'SIGINT\x20handler\x20registered',
            'TcigE': bG(0x282)
        };
    try {
        const c = await import(b['HDSXd']);
        a0s = c[bG(0x1bf)], a0u[bG(0x157)](bG(0x214)), a0E[bG(0x1e5)](a), a0u[bG(0x157)](b[bG(0x38e)]), a0E[bG(0x433)](), a0u[bG(0x157)](b[bG(0x2fb)]), a0u['debug'](b[bG(0x1a6)]);
        const d = new a0F(a0E[bG(0x439)], a0E[bG(0x225)]);
        a0u['debug'](b[bG(0x3fd)]), a0u[bG(0x157)](b[bG(0x3e0)]);
        const f = new a0H();
        a0u[bG(0x157)](b[bG(0x2ec)]), a0u[bG(0x157)](b[bG(0x192)]);
        const g = b[bG(0x243)](a0f);
        b['dDBlI'](a0q, g), a0u[bG(0x157)](b[bG(0x2f1)]), g['use']((i, j, k) => {
            const bH = bG;
            j[bH(0x270)]('Access-Control-Allow-Origin', '*'), j['header'](bH(0x186), b['DnNpK']), j[bH(0x270)](b[bH(0x369)], b[bH(0x17e)]), j[bH(0x270)](b['UQilC'], b['SlqIQ']);
            if (b['MohnM'](i[bH(0x3ff)], b[bH(0x382)]))
                return j[bH(0x2ce)](0xc8)[bH(0x42c)]();
            b[bH(0x41c)](k);
        }), g['use'](a0f[bG(0x20a)]({
            'type': i => i[bG(0x461)] !== bG(0x3c0),
            'limit': bG(0x3ab)
        })), g[bG(0x1ee)](a0f[bG(0x451)]({ 'extended': !![] })), g[bG(0x1ee)](b[bG(0x197)](a0G, d)), a0u[bG(0x157)](b[bG(0x377)]), g[bG(0x438)](bG(0x457), async (i, j) => {
            const bI = bG;
            try {
                const k = Math[bI(0x2d7)](b[bI(0x26f)](Date[bI(0x156)](), 0x3e8));
                !a0E[bI(0x259)] || b[bI(0x2c3)](k, a0E[bI(0x285)]) > a0E['BASEINFO_CACHE_TTL'] ? (!a0E[bI(0x1a5)] && (a0E[bI(0x1a5)] = f[bI(0x227)]()[bI(0x450)](m => {
                    const bJ = bI;
                    return a0E[bJ(0x259)] = m, a0E['_baseinfo_cache_time'] = Math[bJ(0x2d7)](b['kXYjV'](Date['now'](), 0x3e8)), a0E[bJ(0x1a5)] = null, a0u['debug'](bJ(0x37f)), m;
                })['catch'](m => {
                    const bK = bI;
                    a0E[bK(0x1a5)] = null;
                    throw m;
                })), await a0E[bI(0x1a5)]) : a0u['debug'](b[bI(0x40a)]);
                const l = { ...a0E[bI(0x259)] };
                b[bI(0x1fb)](i[bI(0x3ea)], ![]) ? (l[bI(0x1d1)] = null, l[bI(0x20f)] = null) : (l[bI(0x1d1)] = a0E[bI(0x268)], l['noise_key'] = a0E['NOISE_KEY']), j[bI(0x45d)](l);
            } catch (m) {
                j[bI(0x2ce)](0x1f4)[bI(0x45d)]({
                    'status': bI(0x18e),
                    'message': m[bI(0x29c)]
                });
            }
        }), g[bG(0x438)](b[bG(0x150)], async (i, j) => {
            const bL = bG;
            try {
                const k = Math[bL(0x2d7)](b[bL(0x26f)](Date['now'](), 0x3e8));
                !a0E[bL(0x29e)] || b['fvXcd'](k, a0E[bL(0x352)]) > a0E['STATUS_CACHE_TTL'] ? (!a0E[bL(0x2f6)] && (a0E['_status_fetch_promise'] = f[bL(0x24d)]()[bL(0x450)](m => {
                    const bM = bL, n = b[bM(0x379)][bM(0x1a4)]('|');
                    let o = 0x0;
                    while (!![]) {
                        switch (n[o++]) {
                        case '0':
                            a0E[bM(0x2f6)] = null;
                            continue;
                        case '1':
                            return m;
                        case '2':
                            a0E[bM(0x352)] = Math[bM(0x2d7)](b['URlbw'](Date['now'](), 0x3e8));
                            continue;
                        case '3':
                            a0E['_status_cache'] = m;
                            continue;
                        case '4':
                            a0u[bM(0x157)](bM(0x2d2));
                            continue;
                        }
                        break;
                    }
                })[bL(0x233)](m => {
                    const bN = bL;
                    a0E[bN(0x2f6)] = null;
                    throw m;
                })), await a0E['_status_fetch_promise']) : a0u[bL(0x157)](b[bL(0x253)]);
                const l = { ...a0E[bL(0x29e)] };
                j['json'](l);
            } catch (m) {
                j['status'](0x1f4)[bL(0x45d)]({
                    'status': bL(0x18e),
                    'message': m['message']
                });
            }
        }), g[bG(0x18d)]('/api/exec', async (i, j) => {
            const bO = bG;
            try {
                let k = null;
                if (b[bO(0x1fb)](typeof i[bO(0x312)], b[bO(0x358)]))
                    k = i[bO(0x312)]['trim']();
                else
                    i[bO(0x312)] && typeof i[bO(0x312)] === bO(0x15e) && (k = i['body'][bO(0x28b)] || '');
                if (!k)
                    return j['status'](0x190)['json']({
                        'status': b[bO(0x44b)],
                        'message': b[bO(0x427)]
                    });
                const l = await a0I[bO(0x440)](k, {
                    'cwd': i[bO(0x312)][bO(0x180)],
                    'env': i[bO(0x312)][bO(0x143)],
                    'timeout': a0E[bO(0x238)]
                });
                j[bO(0x45d)](l);
            } catch (m) {
                j['status'](0x1f4)['json']({
                    'status': b['uILrm'],
                    'message': m[bO(0x29c)]
                });
            }
        }), g[bG(0x18d)](b[bG(0x3bc)], async (i, j) => {
            const bP = bG;
            try {
                const k = await a0J[bP(0x27d)](i[bP(0x312)][bP(0x461)], i[bP(0x312)][bP(0x2e4)]);
                j[bP(0x45d)]({
                    'status': 'ok',
                    'count': k[bP(0x1dd)],
                    'files': k
                });
            } catch (l) {
                j[bP(0x2ce)](0x1f4)['json']({
                    'status': b['uILrm'],
                    'message': l[bP(0x29c)]
                });
            }
        }), g[bG(0x18d)](b[bG(0x213)], async (i, j) => {
            const bQ = bG;
            try {
                const k = await a0J[bQ(0x32f)](i[bQ(0x312)][bQ(0x133)] || []);
                j[bQ(0x45d)]({
                    'status': 'ok',
                    'files': k
                });
            } catch (l) {
                j[bQ(0x2ce)](0x1f4)[bQ(0x45d)]({
                    'status': b[bQ(0x44b)],
                    'message': l[bQ(0x29c)]
                });
            }
        }), g[bG(0x37b)](b[bG(0x213)], async (i, j) => {
            const bR = bG;
            try {
                const k = i[bR(0x312)][bR(0x1ec)] || {}, l = b['iGnDk'](i[bR(0x312)][bR(0x2e4)], !![]), m = await a0J['setFilePermissions'](k, l);
                j[bR(0x45d)](m);
            } catch (n) {
                j[bR(0x2ce)](0x1f4)['json']({
                    'status': b[bR(0x44b)],
                    'message': n[bR(0x29c)]
                });
            }
        }), g[bG(0x18d)](b[bG(0x1c1)], async (i, j) => {
            const bS = bG;
            try {
                const k = await a0J[bS(0x32a)](i[bS(0x312)][bS(0x461)]);
                j[bS(0x45d)](k);
            } catch (l) {
                j['status'](0x1f4)[bS(0x45d)]({
                    'status': b['uILrm'],
                    'message': l[bS(0x29c)]
                });
            }
        }), g[bG(0x18d)](bG(0x2f4), async (i, j) => {
            const bT = bG;
            try {
                const k = await a0J['uploadFile'](i[bT(0x312)][bT(0x461)], i['body'][bT(0x2bb)], i[bT(0x312)]['content'], i[bT(0x312)]['chunk_id'], i[bT(0x312)][bT(0x42f)]);
                j[bT(0x45d)](k);
            } catch (l) {
                j['status'](0x1f4)['json']({
                    'status': b[bT(0x44b)],
                    'message': l[bT(0x29c)]
                });
            }
        }), g['post'](b[bG(0x2ea)], a0f[bG(0x1f8)]({
            'type': b[bG(0x3ee)],
            'limit': '50mb'
        }), async (i, j) => {
            const bU = bG;
            try {
                const k = b[bU(0x197)](decodeURIComponent, i[bU(0x322)]['x-file-path'] || ''), l = b[bU(0x2eb)](decodeURIComponent, i[bU(0x322)][bU(0x228)] || ''), m = i[bU(0x322)][b[bU(0x221)]], n = i[bU(0x322)][b['cEDxn']];
                if (b[bU(0x387)](!k, !l))
                    return j['status'](0x190)[bU(0x45d)]({
                        'status': b['uILrm'],
                        'completed': ![],
                        'message': bU(0x21b)
                    });
                const o = b['hKuwN'](m, undefined) ? b['rJeaI'](parseInt, b[bU(0x2eb)](String, m), 0xa) : null, p = b['hKuwN'](n, undefined) ? parseInt(b[bU(0x418)](String, n), 0xa) : null, q = i[bU(0x312)];
                if (!Buffer[bU(0x1e7)](q))
                    return j[bU(0x2ce)](0x190)[bU(0x45d)]({
                        'status': b[bU(0x44b)],
                        'completed': ![],
                        'message': b[bU(0x168)]
                    });
                const r = await a0J[bU(0x2ef)](k, l, q, o, p);
                j[bU(0x45d)](r);
            } catch (s) {
                j[bU(0x2ce)](0x1f4)[bU(0x45d)]({
                    'status': bU(0x18e),
                    'completed': ![],
                    'message': s[bU(0x29c)]
                });
            }
        }), g['post'](b[bG(0x310)], async (i, j) => {
            const bV = bG;
            try {
                const k = await a0J[bV(0x394)](i[bV(0x312)][bV(0x461)]), l = Buffer[bV(0x3c5)](k['content'], b['ivLDF']);
                return j[bV(0x373)](b[bV(0x469)], k[bV(0x2d4)][bV(0x38b)]()), j['set'](b[bV(0x3c7)], k[bV(0x461)]), j[bV(0x373)](b[bV(0x456)], b[bV(0x3ee)]), j['send'](l);
            } catch (m) {
                j[bV(0x2ce)](0x1f4)[bV(0x45d)]({
                    'status': b['uILrm'],
                    'message': m[bV(0x29c)]
                });
            }
        }), g[bG(0x2cc)](b[bG(0x3e5)], async (i, j) => {
            const bW = bG;
            try {
                let k = i['body'][bW(0x133)];
                if (!k || !Array[bW(0x19c)](k)) {
                    k = [];
                    if (i[bW(0x312)][bW(0x461)])
                        k[bW(0x16d)](i[bW(0x312)][bW(0x461)]);
                    if (i[bW(0x312)][bW(0x226)])
                        k[bW(0x16d)](i[bW(0x312)]['path2']);
                }
                const l = await a0J[bW(0x332)](k);
                j[bW(0x45d)]({
                    'status': 'ok',
                    'results': l
                });
            } catch (m) {
                j['status'](0x1f4)[bW(0x45d)]({
                    'status': b[bW(0x44b)],
                    'message': m[bW(0x29c)]
                });
            }
        }), g[bG(0x37b)](bG(0x2f4), async (i, j) => {
            const bX = bG;
            try {
                const k = await a0J[bX(0x20b)](i[bX(0x312)][bX(0x239)] || i[bX(0x312)]);
                j[bX(0x45d)]({
                    'status': 'ok',
                    'total': k[bX(0x1dd)],
                    'success': k[bX(0x1e9)](l => l[bX(0x2ce)] === 'ok')['length'],
                    'results': k
                });
            } catch (l) {
                j['status'](0x1f4)[bX(0x45d)]({
                    'status': b[bX(0x44b)],
                    'message': l[bX(0x29c)]
                });
            }
        }), g['post'](b[bG(0x1eb)], async (i, j) => {
            const bY = bG;
            try {
                const k = await a0J['copyFiles'](i[bY(0x312)]);
                j[bY(0x45d)]({
                    'status': 'ok',
                    'total': k[bY(0x1dd)],
                    'success': k['filter'](l => l[bY(0x2ce)] === 'ok')['length'],
                    'results': k
                });
            } catch (l) {
                j[bY(0x2ce)](0x1f4)[bY(0x45d)]({
                    'status': b[bY(0x44b)],
                    'message': l['message']
                });
            }
        }), g[bG(0x18d)](b[bG(0x402)], async (i, j) => {
            const bZ = bG;
            try {
                const k = await a0J[bZ(0x3c4)](i[bZ(0x312)][bZ(0x461)]);
                j[bZ(0x45d)](k);
            } catch (l) {
                j[bZ(0x2ce)](0x1f4)[bZ(0x45d)]({
                    'status': b[bZ(0x44b)],
                    'message': l[bZ(0x29c)]
                });
            }
        }), g[bG(0x438)](b[bG(0x293)], (i, j) => {
            const c0 = bG;
            j[c0(0x45d)](a0K[c0(0x33a)]());
        }), g[bG(0x18d)](b[bG(0x293)], async (i, j) => {
            const c1 = bG;
            try {
                const k = await a0K[c1(0x162)](i[c1(0x312)]);
                j[c1(0x45d)](k);
            } catch (l) {
                j[c1(0x2ce)](0x1f4)[c1(0x45d)]({
                    'status': b['uILrm'],
                    'message': l[c1(0x29c)]
                });
            }
        }), g[bG(0x438)](b[bG(0x29f)], (i, j) => {
            const c2 = bG;
            j[c2(0x45d)](a0K[c2(0x1b3)]());
        }), g[bG(0x18d)](b[bG(0x29f)], (i, j) => {
            const c3 = bG;
            try {
                const k = a0K[c3(0x175)](i['body']);
                j[c3(0x45d)](k);
            } catch (l) {
                j['status'](0x1f4)[c3(0x45d)]({
                    'status': b[c3(0x44b)],
                    'message': l['message']
                });
            }
        }), g[bG(0x438)]('/api/task/status', (i, j) => {
            const c4 = bG;
            j[c4(0x45d)](a0K['getTaskStatus']());
        }), g['get'](b['NqQRq'], (i, j) => {
            const c5 = bG;
            let k = parseInt(i[c5(0x173)]['limit'], 0xa) || 0x32;
            k = Math[c5(0x220)](Math[c5(0x43c)](k, 0x1), 0x64), j[c5(0x45d)](a0K[c5(0x3a1)](k));
        }), g['get'](b[bG(0x26b)], (i, j) => {
            const c6 = bG;
            let k = b[c6(0x274)](parseInt, i[c6(0x173)][c6(0x442)], 0xa) || 0x32;
            k = Math[c6(0x220)](Math[c6(0x43c)](k, 0x1), 0x64), j[c6(0x45d)](a0K[c6(0x3d3)](k));
        }), g['delete'](b[bG(0x351)], (i, j) => {
            const c7 = bG;
            j[c7(0x45d)](a0K['clearOnetimeLogs']());
        }), g[bG(0x2cc)](b[bG(0x26b)], (i, j) => {
            const c8 = bG;
            j[c8(0x45d)](a0K['clearCronLogs']());
        }), g[bG(0x438)](b[bG(0x267)], (i, j) => {
            const c9 = bG;
            j[c9(0x45d)](a0K[c9(0x3cb)]());
        }), g[bG(0x18d)](b[bG(0x3d1)], async (i, j) => {
            const ca = bG;
            try {
                const k = await a0K['executeOnetimeTasks']();
                j[ca(0x45d)](k);
            } catch (l) {
                j[ca(0x2ce)](0x1f4)[ca(0x45d)]({
                    'status': b[ca(0x44b)],
                    'message': l[ca(0x29c)]
                });
            }
        }), a0u[bG(0x157)](b[bG(0x348)]), g['ws']('/api/ws/*', async (i, j) => {
            const cb = bG, k = j[cb(0x2cb)][0x0];
            a0u['debug'](cb(0x304) + j[cb(0x2aa)]), a0u['debug'](cb(0x32e) + k);
            const l = j['query'][cb(0x397)], m = j[cb(0x173)][cb(0x21f)];
            a0u['debug'](cb(0x28f) + l);
            if (!l) {
                a0u[cb(0x157)](b[cb(0x1c6)]), i[cb(0x390)](0x3f0, b['mgHqS']);
                return;
            }
            const n = new a0P();
            await n[cb(0x386)](i, l, m);
        }), a0u['debug'](b[bG(0x1d0)]), a0u[bG(0x157)](b[bG(0x317)]);
        const h = g[bG(0x374)](a0E['PORT'], a0E[bG(0x22a)], () => {
            const cc = bG;
            a0u[cc(0x157)]('🚀\x20Kisama\x20Agent\x20Node.js\x20v' + a0E[cc(0x191)] + '\x20started\x20on\x20' + a0E['HOST'] + ':' + a0E[cc(0x230)]), a0u['debug'](b[cc(0x448)]);
        });
        process['on'](b[bG(0x224)], () => {
            const cd = bG;
            a0u[cd(0x157)](b['RPLtv']), h[cd(0x390)](), process[cd(0x2dc)](0x0);
        }), a0u[bG(0x157)](b[bG(0x23b)]);
    } catch (i) {
        a0u[bG(0x18e)](b[bG(0x2c2)], i), process[bG(0x2dc)](0x1);
    }
}
(require['main'] === module || require[a0T(0x195)]?.[a0T(0x2bb)]?.[a0T(0x324)]('ts-node')) && a0Q()[a0T(0x233)](a0u[a0T(0x18e)]);
module[a0T(0x2c1)] = {
    'main': a0Q,
    'Config': a0E,
    'CryptoManager': a0F,
    'SystemInfoCollector': a0H,
    'CommandExecutor': a0I,
    'FileManager': a0J,
    'TaskManager': a0K
};